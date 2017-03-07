<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */

$dbconn = parse_url(getenv('JAWSDB_URL'));

return array(
    'server' => $dbconn['host'],
    'user' => $dbconn['user'],
    'password' => $dbconn['pass'],
    'database' => ltrim($dbconn['path'],'/'),
    'tablePrefix' => 'craft'
);
