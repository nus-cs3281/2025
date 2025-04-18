
    const renderFn = new Function("const { createElementVNode: _createElementVNode, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createStaticVNode: _createStaticVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue\n\nconst _hoisted_1 = { fixed: \"\" }\nconst _hoisted_2 = /*#__PURE__*/_createElementVNode(\"a\", {\n  href: \"/2025/index.html\",\n  title: \"Home\",\n  class: \"navbar-brand\"\n}, \"CS3281&2-2025/Students\", -1 /* HOISTED */)\nconst _hoisted_3 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/index.html\",\n    class: \"dropdown-item\"\n  }, \"Students\")\n], -1 /* HOISTED */)\nconst _hoisted_4 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/students/knowledge.html\",\n    class: \"dropdown-item\"\n  }, \"Knowledge\")\n], -1 /* HOISTED */)\nconst _hoisted_5 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"https://nus-cs3281.github.io/2025-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false\",\n    class: \"dropdown-item\"\n  }, \"Code Dashboard\")\n], -1 /* HOISTED */)\nconst _hoisted_6 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/activities-dashboard.html\",\n    class: \"dropdown-item\"\n  }, \"Activities Dashboard\")\n], -1 /* HOISTED */)\nconst _hoisted_7 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/cs3282-index.html\",\n    class: \"dropdown-item\"\n  }, \"Students\")\n], -1 /* HOISTED */)\nconst _hoisted_8 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/students/talksSchedule.html\",\n    class: \"dropdown-item\"\n  }, \"Lightning Talks\")\n], -1 /* HOISTED */)\nconst _hoisted_9 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/activities-dashboard.html\",\n    class: \"dropdown-item\"\n  }, \"Activities Dashboard\")\n], -1 /* HOISTED */)\nconst _hoisted_10 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/instructions.html\",\n    class: \"nav-link\"\n  }, \"Instructions\")\n], -1 /* HOISTED */)\nconst _hoisted_11 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"https://nus-cs3281.github.io/website/\",\n    class: \"nav-link\"\n  }, [\n    /*#__PURE__*/_createTextVNode(\"CS3281&2 Website \"),\n    /*#__PURE__*/_createElementVNode(\"span\", null, [\n      /*#__PURE__*/_createElementVNode(\"span\", {\n        \"aria-hidden\": \"true\",\n        class: \"glyphicon glyphicon-share-alt\"\n      })\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_12 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"https://github.com/nus-cs3281/2025\",\n    class: \"nav-link\"\n  }, [\n    /*#__PURE__*/_createElementVNode(\"span\", null, [\n      /*#__PURE__*/_createElementVNode(\"span\", {\n        \"aria-hidden\": \"true\",\n        class: \"fab fa-github\"\n      })\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_13 = { id: \"flex-body\" }\nconst _hoisted_14 = /*#__PURE__*/_createElementVNode(\"div\", {\n  id: \"content-wrapper\",\n  class: \"fixed-header-padding\"\n}, [\n  /*#__PURE__*/_createElementVNode(\"h1\", { id: \"progress\" }, [\n    /*#__PURE__*/_createTextVNode(\"Progress\"),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"fa fa-anchor\",\n      href: \"#progress\",\n      onclick: \"event.stopPropagation()\"\n    })\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"h2\", { id: \"summary\" }, [\n    /*#__PURE__*/_createTextVNode(\"Summary\"),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"fa fa-anchor\",\n      href: \"#summary\",\n      onclick: \"event.stopPropagation()\"\n    })\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, \"N/A\"),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"div\", { class: \"table-responsive\" }, [\n    /*#__PURE__*/_createElementVNode(\"table\", { class: \"markbind-table table table-bordered table-striped\" }, [\n      /*#__PURE__*/_createElementVNode(\"thead\", null, [\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"th\", null, \"Week\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"th\", null, \"Merged PRs\")\n        ])\n      ]),\n      /*#__PURE__*/_createTextVNode(),\n      /*#__PURE__*/_createElementVNode(\"tbody\", null, [\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"4\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"[#2176] Move from Vue CLI to Vite #2257\")\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"4\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"[#2257] Inject Environment Variable for Github Pages Deployments in Vite Build #16\")\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"4\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"[#2214] Standardise Configs Folder Naming #17\")\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"Recess\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"[#2296] Remove Travis Support #2297\")\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"7\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"[#2201] Update Gradle to 8.13 #2312\")\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"11\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"Update about.md\")\n        ])\n      ])\n    ])\n  ]),\n  /*#__PURE__*/_createElementVNode(\"div\", { class: \"table-responsive\" }, [\n    /*#__PURE__*/_createElementVNode(\"table\", { class: \"markbind-table table table-bordered table-striped\" }, [\n      /*#__PURE__*/_createElementVNode(\"thead\", null, [\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"th\", null, \"Week\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"th\", null, \"PRs Reviewed\")\n        ])\n      ]),\n      /*#__PURE__*/_createTextVNode(),\n      /*#__PURE__*/_createElementVNode(\"tbody\", null, [\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"3\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"[#2259] Upgrade GitHub Actions macOS runners to 13, 14 and 15 #2260\")\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"3\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"[#2252] Add ubuntu-24.04 to CI runners #2261\")\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"3\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"[#2265][#2267]Fix outdated suggested solution for backend Task 1 #2268\")\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"3\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"[#2266] Fix Cypress tests that fail locally #2272\")\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"4\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"[#2262] Update type adapter adding methods for gson builder #2270\")\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"4\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"[#2273] Update workflows to use v4 of artifact actions #2274\")\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"4\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"[#2277] Fix cypress setting up error #2278\")\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"4\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"[#2213] Fix hr element not appearing in report #2279\")\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"5\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"[#2275] Upgrade node to v20 in workflows #2282\")\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"5\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"[#2190] Add ESLint rule to enforce commas between types #2287\")\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"5\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"[#1952] Add description to Gradle tasks #2288\")\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"5\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"[#2258] Update user guide for Netlify deployment #2294\")\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"5\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"[#2289] Fix Local Report index.html 404 Issue #2300\")\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"6\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"[#2292] Fix surge.sh preview failure on PR #2293\")\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"6\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"[#2224] Update GitHub workflow to avoid deprecation warnings #2298\")\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"Recess\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"[#2304] Portfolio flag to support optimised portfolio report #2310\")\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"7\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"[#2289] Fix Local Report index.html 404 Issue #2300\")\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"9\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"[#1941] Remove test mode flag #2314\")\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"10\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"[#2333] Add Renovate #2335\")\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"9\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"[#2327] Upgrade Vite version to 6.2.2 #2328\")\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"11\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"[#2305] FE: Support optimised portfolio view #2320\")\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"11\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"[#2326] Optimize Vite Chunk Size #2325\")\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"11\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"[#2200] Refactor c-title to use c-markdown-chunk #2329\")\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"12\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"[#2106] Implement comparison of files across repos #2322\")\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"12\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"[#2210] Add default sort order for groups #2331\")\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"12\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"[#2212] Refresh Only Text #2338\")\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"13\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"[#2161] One-Stop Config File for Code Portfolio #2299\")\n        ])\n      ])\n    ])\n  ]),\n  /*#__PURE__*/_createElementVNode(\"div\", { class: \"table-responsive\" }, [\n    /*#__PURE__*/_createElementVNode(\"table\", { class: \"markbind-table table table-bordered table-striped\" }, [\n      /*#__PURE__*/_createElementVNode(\"thead\", null, [\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"th\", null, \"Week\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"th\", null, \"Issues Submitted\")\n        ])\n      ]),\n      /*#__PURE__*/_createTextVNode(),\n      /*#__PURE__*/_createElementVNode(\"tbody\", null, [\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"-\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"Netlify Deployment Instructions No Longer Work #2258\")\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"3\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"Find a Replacement for Surge.sh #2276\")\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"3\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"Update Node version to 20 #2275\")\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"4\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"Implement a way to test publish-RepoSense deployment pipeline #2285\")\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"5\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"Remove support for Travis #2296\")\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"6\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"Remove Netlify References from README and index.html #2307\")\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"10\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"--period flag in CLI documentation is incorrectly described #2361\")\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"13\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"Group Renovate Minor and Patch Updates\")\n        ])\n      ])\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_15 = /*#__PURE__*/_createElementVNode(\"div\", { class: \"nav-component slim-scroll\" }, null, -1 /* HOISTED */)\nconst _hoisted_16 = /*#__PURE__*/_createStaticVNode(\"<footer><div class=\\\"text-center\\\"><p>[<strong>This site was generated using <img src=\\\"https://markbind.org/favicon.ico\\\" width=\\\"25\\\"> <a href=\\\"https://markbind.org/\\\">MarkBind 6.0.0</a></strong> on Fri, 18 Apr 2025, 8:51:24 UTC]<br> <span class=\\\"dimmed\\\"><small><small>favicon.ico of this site was made by <a href=\\\"https://www.flaticon.com/authors/smashicons\\\" title=\\\"Smashicons\\\">Smashicons</a> from <a href=\\\"https://www.flaticon.com/\\\" title=\\\"Flaticon\\\">www.flaticon.com</a> is licensed by <a href=\\\"http://creativecommons.org/licenses/by/3.0/\\\" title=\\\"Creative Commons BY 3.0\\\" target=\\\"_blank\\\">CC 3.0 BY</a></small></small></span></p></div></footer>\", 1)\n\nreturn function render(_ctx, _cache) {\n  const _component_dropdown = _resolveComponent(\"dropdown\")\n  const _component_navbar = _resolveComponent(\"navbar\")\n  const _component_overlay_source = _resolveComponent(\"overlay-source\")\n\n  return (_openBlock(), _createElementBlock(_Fragment, null, [\n    _createElementVNode(\"header\", _hoisted_1, [\n      _createVNode(_component_navbar, {\n        placement: \"top\",\n        type: \"primary\"\n      }, {\n        brand: _withCtx(() => [\n          _hoisted_2\n        ]),\n        right: _withCtx(() => [\n          _hoisted_12\n        ]),\n        default: _withCtx(() => [\n          _createTextVNode(),\n          _createVNode(_component_dropdown, { class: \"nav-link\" }, {\n            header: _withCtx(() => [\n              _createTextVNode(\"CS3281\")\n            ]),\n            default: _withCtx(() => [\n              _createTextVNode(),\n              _hoisted_3,\n              _createTextVNode(),\n              _hoisted_4,\n              _createTextVNode(),\n              _hoisted_5,\n              _createTextVNode(),\n              _hoisted_6\n            ]),\n            _: 1 /* STABLE */\n          }),\n          _createTextVNode(),\n          _createVNode(_component_dropdown, { class: \"nav-link\" }, {\n            header: _withCtx(() => [\n              _createTextVNode(\"CS3282\")\n            ]),\n            default: _withCtx(() => [\n              _createTextVNode(),\n              _hoisted_7,\n              _createTextVNode(),\n              _hoisted_8,\n              _createTextVNode(),\n              _hoisted_9\n            ]),\n            _: 1 /* STABLE */\n          }),\n          _createTextVNode(),\n          _hoisted_10,\n          _createTextVNode(),\n          _hoisted_11,\n          _createTextVNode()\n        ]),\n        _: 1 /* STABLE */\n      })\n    ]),\n    _createTextVNode(),\n    _createElementVNode(\"div\", _hoisted_13, [\n      _hoisted_14,\n      _createTextVNode(),\n      _createVNode(_component_overlay_source, {\n        id: \"page-nav\",\n        class: \"fixed-header-padding\",\n        \"tag-name\": \"nav\",\n        to: \"page-nav\"\n      }, {\n        default: _withCtx(() => [\n          _hoisted_15\n        ]),\n        _: 1 /* STABLE */\n      })\n    ]),\n    _createTextVNode(),\n    _hoisted_16\n  ], 64 /* STABLE_FRAGMENT */))\n}");
    var render = renderFn();
  