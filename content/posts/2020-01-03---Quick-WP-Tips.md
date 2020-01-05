---
title: 3 Quick WordPress Tips For New Developers
date: "2020-01-03"
template: "post"
draft: false
slug: "wordpress-tips-for-new-devs"
category: "Tips & Tricks"
tags:
  - "Tips"
  - "WordPress"
  - "tricks"
  - "Wordpress hacks"
description: "You don't have to re-invent the wheel with your custom plugins"
socialImage: "/media/WordPress.png"
---

As we all know, WordPress sucks :D so I will try to keep this short and sweet.

I have been working with WordPress *professionally* for over 3 years now, and over the years I've made many, many mistakes. With all those mistakes, I've learned a lot of things as well. I'd like to share some tips for other developers out there so they do not make the same mistakes I've made.

### #1 - Never trust the client, and always escape your outputs.
This should be a given for every developer but I want to stress it anyway. If your plugin, or theme, or function, outputs any data or accepts input of any kind at all, you must sanitize, escape and encode it properly. Trust me. I've done this mistake and its not fun. Always use protection when it comes to data. However, when you're using WP functions such as `the_title()` you don't have to escape these functions as WordPress already provides you the escaped/sanitized text. 

### #2 - You don't have to re-invent the wheel
When you're creating custom plugins or themes, its easy to do everything from scratch. Before you do that however just know that there are tons of useful and battle tested functions and methods you can make use of. Especially If you're creating a plugin for WooCommerce you will notice a lot of re-usable functions. I once spent a whole day fiddling with PHP Curl only to realize (way too late) that I could have simply used `wp_remote_get`. Functions like these are amazing and the hard work is already done for you. You can hit the ground running instead of like me, spending a whole day trying to do PHP curls. I've been working with WordPress for over three years and I still discover new functions that I can use to make my life easier. Before you start, my recommendation would be to see if there is a function within WordPress or WooCommerce that already does what you're after.

### #3 - Don't be the bloat
WordPress is full of bloat, we all know this. Its a common complaint of WordPress. When you're creating plugins and themes, you want to always ensure you have performance in mind. Sometimes its hard but one trick I've learned over the years is to use transient API for short term caching. You might be wondering why use transient instead of `wp_object_cache`? Well transient API is the same thing, in fact if you have persistent cache enabled, transient API will use `wp_object_cache` in the background. If you have a function that is making a bunch of calls to the database, you should try to see how you can cache data in order to eliminate constant database querying.

I can write a whole novel when it comes to WordPress and providing tips but I wanted to keep this short and sweet. I hope someone out there will benefit from this and avoid some common mistakes that are easy to commit. 

-JT