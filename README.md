
# slug cli: slugify for filenames

Some people don't have standards when it comes to naming files.

**YOU ARE BETTER THAN THAT**

`slug` renames files, turning nonsense into sense, like this:

```sh
# get slug
npm install -g slug

# use slug
slug 'Some_Client : BIG SCREEN layout.JPG'

# be slug
some-client-big-screen-layout.jpg
```

Grinding all your unruly filenames into dasherized, lowercase, lower-ascii perfection.

**Got a dir full of bad filenames?**

```sh
slug *
```

will rename the lot. It'll only go one level deep, and it'll indiscriminately rename files and directories. Use with `find` for more elaborate requirements

```sh
find . -name "*.JPG" -exec slug {} \;
```

Go forth and `slug`.

```
         ___
        /\_ \
  ____  \//\ \     __  __     __
 /',__\   \ \ \   /\ \/\ \  /'_ `\
/\__, `\   \_\ \_ \ \ \_\ \/\ \L\ \  
\/\____/   /\____\ \ \____/\ \____ \
 \/___/    \/____/  \/___/  \/___L\ \
                              /\____/
                              \_/__/
```
