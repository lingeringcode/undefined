This Chrome extension marks all text on a page as 'undefined.' It is a (quirky) response to @DanielleSucher's Jailbreak the Patriarchy (JTP) extension.

Rather than swap gendered pronouns, as does JTP, this extension exploits the way javascript and the web browser deal with the empty associative arrays. Since the arrays are all declared, but empty, they are interpreted as "undefined." So, instead of replacing any words with the regex .replace() method, it graciously appends "undefined" before every single word within the <body> of the page.

To be honest, I think this iteration of the original extension is rather absurd. This code is a really bad, brute-force, blank-slate argument about the relationship between langauge and the world. In short, it's quite the contradiction to label *everything* "undefined." I chose to post the source here, because I happened to break the extension in an interesting way, while tinkering around with it.

Also, I kept some of the original code, which is now unnecessary, to create the gendered pronoun library just to have the app go through the work to still produce such a ridiculous output.

My main goal is to write an iteration that adds what I envision as an interrogation layer. I plan on using regex in a similar fashion to locate the gendered pronouns for users, but, instead of using the regex .replace() method, I will use the .test() method to provide users with a variety of options to learn more about the relationships between language, bodies, gender, and identity. Particularly when such relationships concern the too often neglected narratives of people who identify as non-binary and transgender. Some of my initial URI data plans are mapped out here: http://blog.clindgrencv.com/post/73526415972/web-app-uri-data-design-ideas-part-i

***

Original extension, Jailbreak the Patriarchy, by @DanielleSucher.
More information about Sucher's original extension:
http://www.daniellesucher.com/2011/11/jailbreak-the-patriarchy-my-first-chrome-extension/