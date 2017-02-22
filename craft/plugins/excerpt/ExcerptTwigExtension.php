<?php

namespace Craft;

use Twig_Extension;
use Twig_Filter_Method;

class ExcerptTwigExtension extends Twig_Extension
{
    public function getFilters()
    {
        return [
            'excerpt' => new Twig_Filter_Method($this, 'excerpt', ['is_safe' => ['html']])
        ];
    }

    public function excerpt($text, $charCount, $continue)
    {
        $text = strip_tags($text);

        if (strlen($text) < $charCount)
        {
            return $text;
        }

        return substr($text, 0, strpos(wordwrap($text, $charCount), "\n")) . $continue;
    }

    public function getName()
    {
        return 'Excerpt';
    }
}
