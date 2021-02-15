---
title: Delete Facebook Mobile Uploads Album
permalink: delete-facebook-mobile-uploads.html
layout: basic-post
---

Facebook does not give you the option to delete your Mobile Uploads photo album. If you've got hundreds or thousand photos here, it will take you a few hours to delete them one-by-one.

I've created a simple script that you can run within your browsers console which automates this. It will click `Edit` on the first photo, then `Delete Photo`, followed by `Delete` on the confirmation modal. It repeats this process every 6 seconds until there are none left.

<script src="https://gist.github.com/reustle/71882f572be3246a24fd312a9894ff3b.js"></script>
 
See it in action

<img src="static/resources/delete-facebook-mobile-uploads.gif" alt="Delete Facebook Mobile Uploads Album"/>
