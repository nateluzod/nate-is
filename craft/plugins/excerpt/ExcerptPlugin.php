<?php

namespace Craft;

class ExcerptPlugin extends BasePlugin
{
    public function getVersion()
    {
        return '1.0.0';
    }

    public function getDeveloper()
    {
        return 'Webstudio Zimmerli';
    }

    public function getDeveloperUrl()
    {
        return 'http://www.webstudio-zimmerli.ch';
    }

    public function addTwigExtension()
    {
        Craft::import('plugins.excerpt.ExcerptTwigExtension');

        return new ExcerptTwigExtension();
    }
}