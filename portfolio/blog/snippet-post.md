---
view: posts
title: Snippet Post
date: 2018-01-12 08:32:30
tags: []
---

# Heading 8-)

## Text Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~

## Blockquotes

> Blockquotes can also be nested...

## [Emojies](https://github.com/markdown-it/markdown-it-emoji)

Classic markup: :wink: :cry: :laughing: :yum:

Shortcuts (emoticons): :-) :-( 8-) ;)

## Links

- [link with title](http://nodeca.github.io/pica/demo/ "title text!")
- [pica](https://nodeca.github.io/pica/demo/) - high quality and fast image
  resize in browser.
- [babelfish](https://github.com/nodeca/babelfish/) - developer friendly
  i18n with plurals support and easy syntax.

## List Unordered

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
+ Very easy!

## List Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

## Tables aligned columns

| Option | Description |
|:------:| -----------|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

## Images
### Default
![Cat](https://cataas.com/cat)

### Vue prerended
<img :src="$withBase('/images/avatar.jpg')" alt="foo">

## Code

### Simple inline `code`

### Blocks of code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

### Syntax highlighting

``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

### Import Code Snippets
<<< @/package.json{2}

The default value of `@` is `process.cwd()`

The killer feature of `markdown-it` is very effective support of
[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.

---

## Custom Containers

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

you can customize the title of the block

## VueJS

### Directives
::: v-pre
`<span v-for="i in 3">{{ i }} </span>`
:::
<span v-for="i in 3">{{ i }} </span>

### Access to Site & Page [Data](https://vuepress.vuejs.org/guide/custom-themes.html#site-and-page-metadata)

This is the value of `$site`:

``` json
{
  "title": "VuePress",
  "description": "Vue-powered Static Site Generator",
  "base": "/",
  "pages": [
    {
      "lastUpdated": 1524027677000,
      "path": "/",
      "title": "VuePress",
      "frontmatter": {}
    },
    ...
  ]
}
```

This is the value of `$page`:
``` json
{
  "path": "/using-vue.html",
  "title": "Using Vue in Markdown",
  "frontmatter": {}
}
```

This is the value of `$site.themeConfig`:
``` json
{
    "activeHeaderLinks": false,
    "lastUpdated": false,
    "nav": [{
            "text": "home",
            "link": "/",
            "isActive": true,
            "type": "link",
            "items": []
    }],
    "sidebar": [
        ...
    ],
    "sidebarDepth": 0,
    "serviceWorker": {
    },
    "disqus": "",
    "topNavigation": false,
    "searchMaxSuggestions": 7,
    "share": {
    }
}
```

## HTML Element with Tailwindcss

<div class=" container mx-auto py-10">
    <div class="border m-6 rounded-lg  bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
        <div class="sm:flex sm:items-center px-6 py-4">
            <img class="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="https://api.adorable.io/avatars/face/eyes1/nose3/mouth4/8e8895" alt="">
            <div class="text-center sm:text-left sm:flex-grow">
                <div class="mb-4">
                    <p class="text-xl leading-tight">Jane Doe</p>
                    <p class="text-sm leading-tight text-grey-dark">Software Developer at Acme Company.</p>
                </div>
                <div class="flex flex-wrap">
                    <button class=" text-xs font-semibold rounded-full px-4 py-1 mx-3  leading-normal bg-white border border-blue text-blue hover:bg-blue hover:text-white">Call</button>
                    <button class="  text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white">Message</button>
                </div>
            </div>
         </div>
    </div>
</div>

## Badges

<Badge text="beta" type="warn"/>
<Badge text="0.10.1+"/>

