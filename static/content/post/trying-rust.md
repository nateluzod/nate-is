---
title: "Trying Rust"
date: 2017-08-28T19:35:45-10:00
draft: false
---

I hit a wall working on CMS / WordPress this afternoon so decided to take a few minutes to check out a 'new' language. Never mind that I'm months behind on learning Elixir, Phoenix and Elm, as was my plan for earlier this year - today I wanted to check out Rust. 

Why? I'm not terribly interested in building anything non-web, so Rust falls decidedly out of my sweet spot in terms of practicality. There are a handful of frameworks but nothing close to resembling an easy path if you'd want to comfortably move forward with client work. 

If nothing else, I just wanted to expose myself to something different.

I didn't study computer science, have no background in C or C++ and my only C-based language knowledge comes from years of PHP development. With that said, the syntax seemed familiar enough. A few things I noticed off the bat:

* Cargo is nice. There's nothing to hate about JSON but Cargo.toml is so much easier on the eyes than package or composer.json, and `cargo` runs fast. 
* Variables are immutable by default, you have to explicitly add mut for mutability. I'm sure this exists elsewhere but it's the first time I've personally seen it. 
* Values are statically typed, but the compiler will attempt to infer based on use. 
* Control flow / loops have interesting things like a `.rev()` method. Again, I'm sure it exists elsewhere but it's a first for me.
* Rust devs are referred to as 'rustaceans'
I like that the docs immediately dive into building something you can interact with. I created a guessing game command line app pretty quickly, and it worked. 

Rust looks cool and I have to assume that the high praise lavished on the language by so many talented devs is well-deserved. For me and my needs, though, I probably won't spend any more time looking into it anytime soon. Low level memory management is too far outside my immediate concerns.

I fell in love with Elixir immediately, and Phoenix and its ecosystem makes it a more pragmatic focus for the foreseeable future. 
