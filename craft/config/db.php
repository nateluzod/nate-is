<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */

 $url = getenv('JAWSDB_URL');
 // $url = "mysql://rmmb0mahbrz687m1:wqk0wn2u1wpll5ry@l7cup2om0gngra77.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/gigdu9dc1elen7co";
 $dbparts = parse_url($url);
 return array(
   'server' => $dbparts['host'],
   'user' => $dbparts['user'],
   'password' => $dbparts['pass'],
   'database' => ltrim($dbparts['path'],'/'),
   'tablePrefix' => 'craft',
 );
