---
title: "HTTPS Redirect for Laravel on Heroku"
date: 2017-04-27T19:55:13-10:00
draft: true
---

Earlier this week I had a series of 'black-hole' days; the kind where you spend way too long on one problem, only to end the day with embarrassingly little to show for it.

One of the reasons I started writing is to document fixes for those odd issues and hopefully prevent others from having to deal with the same things. Tuesday's issue was forwarding all non http requests to https on a Laravel app.

Seems simple enough, right? Sadly, no.

First off, I tried a few simple .htaccess variations, all of which returned 'Too many redirects'. No problem, there were other options. Next, I tried a few different middleware approaches. Worked fine locally, virtually ineffective on the server. After that, I tried using \URL::forceSchema('https'); in AppServiceProvider.php - also totally ineffective. By this point I had burned a couple hours. Submitted a ticket to Heroku support and kept looking. I can't remember how or which SO thread(s) this was pieced together from, but this did the trick:

```
<IfModule mod_negotiation.c>
    Options -MultiViews
</IfModule>

    DirectoryIndex index.php index.html index.htm

    RewriteEngine On

    #Normal way (in case you need to deploy to NON-heroku)
    RewriteCond %{HTTPS} !=on

    #Heroku way
    RewriteCond %{HTTP:X-Forwarded-Proto} !https

    #If neither above conditions are met, redirect to https
    RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

    # Redirect Trailing Slashes If Not A Folder...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule ^(.*)/$ /$1 [L,R=301]

    # Handle Front Controller...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.php [L]

    # Handle Authorization Header
    RewriteCond %{HTTP:Authorization} .
    RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
</IfModule>
```

The response I got from Heroku the next day more or less explains why middleware didn't do anything:

"Heroku dynos run behind a routing layer that handles load balancing and HTTPS termination (https://devcenter.heroku.com/articles/http-routing#routing), so the request to the backend is plain HTTP, and the original protocol of the request is in the X-Forwarded-Proto header, as documented here: https://devcenter.heroku.com/articles/http-routing#heroku-headers

You need to rewrite based on that header, or, if you want to handle things purely in Laravel, instruct the framework to trust the right headers, as documented here: https://devcenter.heroku.com/articles/getting-started-with-laravel#trusting-the-load-balancer"

So that's that. Hopefully, if you're suffering the same issue, Google will be kind and lead you here.

