<?php
namespace enshrined\svgSanitize\ElementReference;
require_once CSSM_PLUGIN_DIR_PATH . 'vendor/enshrined/svg-sanitize/src/data/XPath.php';
require_once CSSM_PLUGIN_DIR_PATH . 'vendor/enshrined/svg-sanitize/src/Helper.php';
use enshrined\svgSanitize\data\XPath;
use enshrined\svgSanitize\Helper;

class Resolver
{
    /**
     * @var XPath
     */
    protected $xPath;

    /**
     * @var Subject[]
     */
    protected $subjects = [];

    public function __construct(XPath $xPath)
    {
        $this->xPath = $xPath;
    }

    public function collect()
    {
        $this->collectIdentifiedElements();
        $this->processReferences();
        $this->determineInvalidSubjects();
    }

    /**
     * Resolves one subject by element.
     *
     * @param \DOMElement $element
     * @param bool $considerChildren Whether to search in Subject's children as well
     * @return Subject|null
     */
    public function findByElement(\DOMElement $element, $considerChildren = false)
    {
        foreach ($this->subjects as $subject) {
            if (
                $element === $subject->getElement()
                || $considerChildren && Helper::isElementContainedIn($element, $subject->getElement())
            ) {
                return $subject;
            }
        }
        return null;
    }

    /**
     * Resolves subjects (plural!) by element id - in theory malformed
     * DOM might have same ids assigned to different elements and leaving
     * it to client/browser implementation which element to actually use.
     *
     * @param string $elementId
     * @return Subject[]
     */
    public function findByElementId($elementId)
    {
        return array_filter(
            $this->subjects,
            function (Subject $subject) use ($elementId) {
                return $elementId === $subject->getElementId();
            }
        );
    }

    /**
     * Collects elements having `id` attribute (those that can be referenced).
     */
    protected function collectIdentifiedElements()
    {
        /** @var \DOMNodeList|\DOMElement[] $elements */
        $elements = $this->xPath->query('//*[@id]');
        foreach ($elements as $element) {
            $this->subjects[$element->getAttribute('id')] = new Subject($element);
        }
    }

    /**
     * Processes references from and to elements having `id` attribute concerning
     * their occurrence in `<use ... xlink:href="#identifier">` statements.
     */
    protected function processReferences()
    {
        $useNodeName = $this->xPath->createNodeName('use');
        foreach ($this->subjects as $subject) {
            $useElements = $this->xPath->query(
                $useNodeName . '[@href or @xlink:href]',
                $subject->getElement()
            );
            /** @var \DOMElement $useElement */
            foreach ($useElements as $useElement) {
                $useId = Helper::extractIdReferenceFromHref(
                    Helper::getElementHref($useElement)
                );
                if ($useId === null || !isset($this->subjects[$useId])) {
                    continue;
                }
                $subject->addUse($this->subjects[$useId]);
                $this->subjects[$useId]->addUsedIn($subject);
            }
        }
    }

    /***
     * Determines and tags infinite loops.
     */
    protected function determineInvalidSubjects()
    {
        foreach ($this->subjects as $subject) {
            $useId = Helper::extractIdReferenceFromHref(
                Helper::getElementHref($subject->getElement())
            );
            if ($useId === $subject->getElementId()) {
                $subject->addTags([Subject::TAG_INVALID, Subject::TAG_SELF_REFERENCE]);
            } elseif ($subject->hasInfiniteLoop()) {
                $subject->addTags([Subject::TAG_INVALID, Subject::TAG_INFINITE_LOOP]);
            }
        }
    }
}