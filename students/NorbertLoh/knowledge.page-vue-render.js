
    const renderFn = new Function("const { createElementVNode: _createElementVNode, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createStaticVNode: _createStaticVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue\n\nconst _hoisted_1 = { fixed: \"\" }\nconst _hoisted_2 = /*#__PURE__*/_createElementVNode(\"a\", {\n  href: \"/2025/index.html\",\n  title: \"Home\",\n  class: \"navbar-brand\"\n}, \"CS3281&2-2025/Students\", -1 /* HOISTED */)\nconst _hoisted_3 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/index.html\",\n    class: \"dropdown-item\"\n  }, \"Students\")\n], -1 /* HOISTED */)\nconst _hoisted_4 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/students/knowledge.html\",\n    class: \"dropdown-item\"\n  }, \"Knowledge\")\n], -1 /* HOISTED */)\nconst _hoisted_5 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"https://nus-cs3281.github.io/2025-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false\",\n    class: \"dropdown-item\"\n  }, \"Code Dashboard\")\n], -1 /* HOISTED */)\nconst _hoisted_6 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/activities-dashboard.html\",\n    class: \"dropdown-item\"\n  }, \"Activities Dashboard\")\n], -1 /* HOISTED */)\nconst _hoisted_7 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/cs3282-index.html\",\n    class: \"dropdown-item\"\n  }, \"Students\")\n], -1 /* HOISTED */)\nconst _hoisted_8 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/students/talksSchedule.html\",\n    class: \"dropdown-item\"\n  }, \"Lightning Talks\")\n], -1 /* HOISTED */)\nconst _hoisted_9 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/activities-dashboard.html\",\n    class: \"dropdown-item\"\n  }, \"Activities Dashboard\")\n], -1 /* HOISTED */)\nconst _hoisted_10 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/instructions.html\",\n    class: \"nav-link\"\n  }, \"Instructions\")\n], -1 /* HOISTED */)\nconst _hoisted_11 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"https://nus-cs3281.github.io/website/\",\n    class: \"nav-link\"\n  }, [\n    /*#__PURE__*/_createTextVNode(\"CS3281&2 Website \"),\n    /*#__PURE__*/_createElementVNode(\"span\", null, [\n      /*#__PURE__*/_createElementVNode(\"span\", {\n        \"aria-hidden\": \"true\",\n        class: \"glyphicon glyphicon-share-alt\"\n      })\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_12 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"https://github.com/nus-cs3281/2025\",\n    class: \"nav-link\"\n  }, [\n    /*#__PURE__*/_createElementVNode(\"span\", null, [\n      /*#__PURE__*/_createElementVNode(\"span\", {\n        \"aria-hidden\": \"true\",\n        class: \"fab fa-github\"\n      })\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_13 = { id: \"flex-body\" }\nconst _hoisted_14 = /*#__PURE__*/_createElementVNode(\"div\", {\n  id: \"content-wrapper\",\n  class: \"fixed-header-padding\"\n}, [\n  /*#__PURE__*/_createElementVNode(\"h3\", { id: \"ngx-markdown\" }, [\n    /*#__PURE__*/_createTextVNode(\"ngx-markdown\"),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"fa fa-anchor\",\n      href: \"#ngx-markdown\",\n      onclick: \"event.stopPropagation()\"\n    })\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, [\n    /*#__PURE__*/_createTextVNode(\"I learned about the \"),\n    /*#__PURE__*/_createElementVNode(\"code\", { class: \"hljs inline no-lang\" }, \"ngx-markdown\"),\n    /*#__PURE__*/_createTextVNode(\" library while I was working on a fix to preserve whitespace when converting Markdown to HTML. \"),\n    /*#__PURE__*/_createElementVNode(\"code\", { class: \"hljs inline no-lang\" }, \"ngx-markdown\"),\n    /*#__PURE__*/_createTextVNode(\" combines multiple different language parsers and renders them in one library. \"),\n    /*#__PURE__*/_createElementVNode(\"code\", { class: \"hljs inline no-lang\" }, \"ngx-markdown\"),\n    /*#__PURE__*/_createTextVNode(\" supports Marked, Prism.js, Emoji-Toolkit, KaTeX, Mermaid, and Clipboard.js. I learned about configuring the options for the Markdown HTML element.\")\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"h3\", { id: \"marked\" }, [\n    /*#__PURE__*/_createTextVNode(\"Marked\"),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"fa fa-anchor\",\n      href: \"#marked\",\n      onclick: \"event.stopPropagation()\"\n    })\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, \"Marked is the main parser we use for our comment editor in creating/editing issues and responses. I learned that any text that we write in Markdown syntax is converted into HTML elements using Marked. I found out that we can actually override how Marked generates the HTML elements, and we can add more attributes like classes, styles, and even modify the text before rendering it.\"),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"h3\", { id: \"nvm-windows\" }, [\n    /*#__PURE__*/_createTextVNode(\"nvm-windows\"),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"fa fa-anchor\",\n      href: \"#nvm-windows\",\n      onclick: \"event.stopPropagation()\"\n    })\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, [\n    /*#__PURE__*/_createTextVNode(\"WATcher requires node 14 in order to \"),\n    /*#__PURE__*/_createElementVNode(\"code\", { class: \"hljs inline no-lang\" }, \"npm install\"),\n    /*#__PURE__*/_createTextVNode(\" some of its dependencies. However, instead of having to install and reinstall a different node version between different projects, I can use \"),\n    /*#__PURE__*/_createElementVNode(\"code\", { class: \"hljs inline no-lang\" }, \"nvm-windows\"),\n    /*#__PURE__*/_createTextVNode(\" to install multiple node versions and switch between them. However, the latest version of \"),\n    /*#__PURE__*/_createElementVNode(\"code\", { class: \"hljs inline no-lang\" }, \"nvm-windows\"),\n    /*#__PURE__*/_createTextVNode(\" has some issues if youwant to install node 14. After some debugging, I found out that \"),\n    /*#__PURE__*/_createElementVNode(\"code\", { class: \"hljs inline no-lang\" }, \"nvm-windows v1.1.11\"),\n    /*#__PURE__*/_createTextVNode(\" can install node 14 with no issues.\")\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"h3\", { id: \"catcher-phase-management\" }, [\n    /*#__PURE__*/_createTextVNode(\"CATcher phase management\"),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"fa fa-anchor\",\n      href: \"#catcher-phase-management\",\n      onclick: \"event.stopPropagation()\"\n    })\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, \"While working on creating a new phase, I learnt a lot about how phases are managed in CATcher. Every phase has its own phase permissions and phase routing. Phase permissions controls certain tasks. For example, creating a new issue, deleting an issue, editing an issue is only allowed at certain phases. Every phase also has its own routing which is used to load the different pages ranging from, viewing to editing. I also learnt that the repos to hold the issues are generated only at the bug reporting phase.\"),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"h3\", { id: \"git-commit-hooks\" }, [\n    /*#__PURE__*/_createTextVNode(\"Git commit hooks\"),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"fa fa-anchor\",\n      href: \"#git-commit-hooks\",\n      onclick: \"event.stopPropagation()\"\n    })\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, \"While I was working on a PR, I was wondering why certain parts of the code are modified after pushing a commit. I then found out that there are commit hooks in place to fix and format and lint issues. Source tree actually allows users to bypass the commit hooks if the changes are irrelevant to the PR that the user is working on.\"),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"h3\", { id: \"github-search-query\" }, [\n    /*#__PURE__*/_createTextVNode(\"Github search query\"),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"fa fa-anchor\",\n      href: \"#github-search-query\",\n      onclick: \"event.stopPropagation()\"\n    })\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, \"While working on implementing the feature 'View on github' for WATcher where a user will be able to see the current dashboard in github, I learnt that github searches can actually be done using URL queries.\"),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"h3\", { id: \"url-encoding\" }, [\n    /*#__PURE__*/_createTextVNode(\"URL encoding\"),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"fa fa-anchor\",\n      href: \"#url-encoding\",\n      onclick: \"event.stopPropagation()\"\n    })\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, [\n    /*#__PURE__*/_createTextVNode(\"While working with URL queries, I learnt that some characters are not allowed in URLs. Such characters are \\\"!\\\"$$()\\\" etc. In order to use them, they must be encoded into UTF-8. More information can be found \"),\n    /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://www.w3schools.com/tags/ref_urlencode.ASP\" }, \"here\"),\n    /*#__PURE__*/_createTextVNode(\".\")\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"h3\", { id: \"graphql\" }, [\n    /*#__PURE__*/_createTextVNode(\"GraphQL\"),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"fa fa-anchor\",\n      href: \"#graphql\",\n      onclick: \"event.stopPropagation()\"\n    })\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, \"While I was exploring a new feature, I realised that there is no dedicated sandbox for testing the API/Queries. This made it hard for me to understand how the queries work and what the queries response look like. It was very troublesome to have to look at the network tab and look at the response.\"),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, \"I also learnt about the difference GraphQL features like schema and fragments which are important for creating reusable and easily maintable queries.\"),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, \"I also learnt how WATcher uses pagination to perform queries to GitHub using cursor.\"),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"h3\", { id: \"postman\" }, [\n    /*#__PURE__*/_createTextVNode(\"Postman\"),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"fa fa-anchor\",\n      href: \"#postman\",\n      onclick: \"event.stopPropagation()\"\n    })\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, \"Following the exploration of GraphQL, I found that some of my teammates were trying to implement new features that required data from GitHub. However, they were struggling with understanding the GraphQL queries due to the lack of visualization. This has prompted me to create a sandbox for testing the GraphQL queries.\"),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, \"I discovered how to create reusable queries in Postman using collection variables such that anyone can fork the collection and start working on it without having to set up anything other than authorization.\"),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, \"I also learnt how to create environments for workspaces such that sensitive data such as secret keys will not be shared to public.\")\n], -1 /* HOISTED */)\nconst _hoisted_15 = /*#__PURE__*/_createElementVNode(\"div\", { class: \"nav-component slim-scroll\" }, null, -1 /* HOISTED */)\nconst _hoisted_16 = /*#__PURE__*/_createStaticVNode(\"<footer><div class=\\\"text-center\\\"><p>[<strong>This site was generated using <img src=\\\"https://markbind.org/favicon.ico\\\" width=\\\"25\\\"> <a href=\\\"https://markbind.org/\\\">MarkBind 6.0.0</a></strong> on Mon, 14 Apr 2025, 6:13:03 UTC]<br> <span class=\\\"dimmed\\\"><small><small>favicon.ico of this site was made by <a href=\\\"https://www.flaticon.com/authors/smashicons\\\" title=\\\"Smashicons\\\">Smashicons</a> from <a href=\\\"https://www.flaticon.com/\\\" title=\\\"Flaticon\\\">www.flaticon.com</a> is licensed by <a href=\\\"http://creativecommons.org/licenses/by/3.0/\\\" title=\\\"Creative Commons BY 3.0\\\" target=\\\"_blank\\\">CC 3.0 BY</a></small></small></span></p></div></footer>\", 1)\n\nreturn function render(_ctx, _cache) {\n  const _component_dropdown = _resolveComponent(\"dropdown\")\n  const _component_navbar = _resolveComponent(\"navbar\")\n  const _component_overlay_source = _resolveComponent(\"overlay-source\")\n\n  return (_openBlock(), _createElementBlock(_Fragment, null, [\n    _createElementVNode(\"header\", _hoisted_1, [\n      _createVNode(_component_navbar, {\n        placement: \"top\",\n        type: \"primary\"\n      }, {\n        brand: _withCtx(() => [\n          _hoisted_2\n        ]),\n        right: _withCtx(() => [\n          _hoisted_12\n        ]),\n        default: _withCtx(() => [\n          _createTextVNode(),\n          _createVNode(_component_dropdown, { class: \"nav-link\" }, {\n            header: _withCtx(() => [\n              _createTextVNode(\"CS3281\")\n            ]),\n            default: _withCtx(() => [\n              _createTextVNode(),\n              _hoisted_3,\n              _createTextVNode(),\n              _hoisted_4,\n              _createTextVNode(),\n              _hoisted_5,\n              _createTextVNode(),\n              _hoisted_6\n            ]),\n            _: 1 /* STABLE */\n          }),\n          _createTextVNode(),\n          _createVNode(_component_dropdown, { class: \"nav-link\" }, {\n            header: _withCtx(() => [\n              _createTextVNode(\"CS3282\")\n            ]),\n            default: _withCtx(() => [\n              _createTextVNode(),\n              _hoisted_7,\n              _createTextVNode(),\n              _hoisted_8,\n              _createTextVNode(),\n              _hoisted_9\n            ]),\n            _: 1 /* STABLE */\n          }),\n          _createTextVNode(),\n          _hoisted_10,\n          _createTextVNode(),\n          _hoisted_11,\n          _createTextVNode()\n        ]),\n        _: 1 /* STABLE */\n      })\n    ]),\n    _createTextVNode(),\n    _createElementVNode(\"div\", _hoisted_13, [\n      _hoisted_14,\n      _createTextVNode(),\n      _createVNode(_component_overlay_source, {\n        id: \"page-nav\",\n        class: \"fixed-header-padding\",\n        \"tag-name\": \"nav\",\n        to: \"page-nav\"\n      }, {\n        default: _withCtx(() => [\n          _hoisted_15\n        ]),\n        _: 1 /* STABLE */\n      })\n    ]),\n    _createTextVNode(),\n    _hoisted_16\n  ], 64 /* STABLE_FRAGMENT */))\n}");
    var render = renderFn();
  