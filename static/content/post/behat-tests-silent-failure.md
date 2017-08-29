---
title: "Behat Tests Silently Failing"
date: 2017-05-25T19:59:40-10:00
draft: false
---

This week I ran into an issue where our Behat test suite would run and exit without completing, no error messages or meaningful warnings. Best of all was that this happened locally but not on Travis CI.

After sifting through some ancient SO threads and upgrading to PHP 7.2, the issue seemed to be local memory limit. The quick fix was just updating php.ini:

```
memory_limit = 512M;
```

Our suite only has 100 or so scenarios, only seeds once and runs quickly: 30 seconds locally and 3 minutes on Travis CI. That doesn't seem outlandish for an app, so I would think this is a more common problem as I have read about other suites taking 10-20 minutes to complete.

