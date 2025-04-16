
    const renderFn = new Function("const { createElementVNode: _createElementVNode, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createStaticVNode: _createStaticVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue\n\nconst _hoisted_1 = { fixed: \"\" }\nconst _hoisted_2 = /*#__PURE__*/_createElementVNode(\"a\", {\n  href: \"/2025/index.html\",\n  title: \"Home\",\n  class: \"navbar-brand\"\n}, \"CS3281&2-2025/Students\", -1 /* HOISTED */)\nconst _hoisted_3 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/index.html\",\n    class: \"dropdown-item\"\n  }, \"Students\")\n], -1 /* HOISTED */)\nconst _hoisted_4 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/students/knowledge.html\",\n    class: \"dropdown-item\"\n  }, \"Knowledge\")\n], -1 /* HOISTED */)\nconst _hoisted_5 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"https://nus-cs3281.github.io/2025-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false\",\n    class: \"dropdown-item\"\n  }, \"Code Dashboard\")\n], -1 /* HOISTED */)\nconst _hoisted_6 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/activities-dashboard.html\",\n    class: \"dropdown-item\"\n  }, \"Activities Dashboard\")\n], -1 /* HOISTED */)\nconst _hoisted_7 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/cs3282-index.html\",\n    class: \"dropdown-item\"\n  }, \"Students\")\n], -1 /* HOISTED */)\nconst _hoisted_8 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/students/talksSchedule.html\",\n    class: \"dropdown-item\"\n  }, \"Lightning Talks\")\n], -1 /* HOISTED */)\nconst _hoisted_9 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/activities-dashboard.html\",\n    class: \"dropdown-item\"\n  }, \"Activities Dashboard\")\n], -1 /* HOISTED */)\nconst _hoisted_10 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/instructions.html\",\n    class: \"nav-link\"\n  }, \"Instructions\")\n], -1 /* HOISTED */)\nconst _hoisted_11 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"https://nus-cs3281.github.io/website/\",\n    class: \"nav-link\"\n  }, [\n    /*#__PURE__*/_createTextVNode(\"CS3281&2 Website \"),\n    /*#__PURE__*/_createElementVNode(\"span\", null, [\n      /*#__PURE__*/_createElementVNode(\"span\", {\n        \"aria-hidden\": \"true\",\n        class: \"glyphicon glyphicon-share-alt\"\n      })\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_12 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"https://github.com/nus-cs3281/2025\",\n    class: \"nav-link\"\n  }, [\n    /*#__PURE__*/_createElementVNode(\"span\", null, [\n      /*#__PURE__*/_createElementVNode(\"span\", {\n        \"aria-hidden\": \"true\",\n        class: \"fab fa-github\"\n      })\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_13 = { id: \"flex-body\" }\nconst _hoisted_14 = /*#__PURE__*/_createElementVNode(\"div\", {\n  id: \"content-wrapper\",\n  class: \"fixed-header-padding\"\n}, [\n  /*#__PURE__*/_createElementVNode(\"h3\", { id: \"markbind\" }, [\n    /*#__PURE__*/_createTextVNode(\"MarkBind\"),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"fa fa-anchor\",\n      href: \"#markbind\",\n      onclick: \"event.stopPropagation()\"\n    })\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"div\", { class: \"table-responsive\" }, [\n    /*#__PURE__*/_createElementVNode(\"table\", { class: \"markbind-table table table-bordered table-striped\" }, [\n      /*#__PURE__*/_createElementVNode(\"thead\", null, [\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"th\", null, \"Week\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"th\", null, \"Achievements\")\n        ])\n      ]),\n      /*#__PURE__*/_createTextVNode(),\n      /*#__PURE__*/_createElementVNode(\"tbody\", null, [\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"1\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Authored PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/pull/2584\" }, \"Add optional absolute char indexing for highlighting #2584\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"2\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Responded to contributor queries: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/pull/2584\" }, \"#2584\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"4\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Authored PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/pull/2592\" }, \"Catch UncaughtException when serving in non-Markbind directories #2592\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"5\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Authored PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/pull/2599\" }, \"Add custom host validation #2599\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"5\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Responded to contributor queries: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/pull/2584\" }, \"#2584\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"6\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Responded to contributor queries: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/pull/2584\" }, \"#2584\"),\n            /*#__PURE__*/_createTextVNode(\", \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/pull/2599\" }, \"#2599\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"6\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Merged PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/pull/2592\" }, \"Catch UncaughtException when serving in non-Markbind directories #2592\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"7\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Created Issue: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/issues/2617\" }, \"Invalid URL of IPv6 address used for serve command's live preview #2617\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"7\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Created Issue: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/issues/2620\" }, \"Unavailable address opening the wrong URL during serve command #2620\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"7\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Authored PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/pull/2621\" }, \"Fix issues with serve and URL of live preview #2621\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"8\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Reviewed PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/pull/2625\" }, \"Refactor codeBlockButton Plugins #2625\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"8\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Created Issue: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/issues/2634\" }, \"Optimization: Migrate standalone JavaScript test files in core package to TypeScript #2634\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"8\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Created Issue: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/issues/2635\" }, \"Incomplete test coverage for MarkBind CLI commands #2635\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"8\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Authored PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/pull/2638\" }, \"Update Jest config to exclude duplicated JavaScript tests #2638\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"8\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Authored PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/pull/2637\" }, \"Migrate JavaScript test to TypeScript #2637\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"8\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Responded to contributor queries: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/pull/2621\" }, \"#2621\"),\n            /*#__PURE__*/_createTextVNode(\", \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/pull/2637\" }, \"#2637\"),\n            /*#__PURE__*/_createTextVNode(\", \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/pull/2638\" }, \"#2638\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"8\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Discussed Issue: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/issues/2612\" }, \"#2612\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"8\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Authored PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/pull/2639\" }, \"Reduce logging level and improve error message for popover #2639\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"8\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Merged PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/pull/2584\" }, \"Add code highlighting based on absolute positions #2584\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"8\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Merged PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/pull/2637\" }, \"Migrate filterIconAssets.test.js to TypeScript #2637\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"9\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Created Issue: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/issues/2651\" }, \"Missing warning for IPv6 zero address #2651\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"9\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Responded to contributor queries: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/pull/2599\" }, \"#2599\"),\n            /*#__PURE__*/_createTextVNode(\", \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/pull/2621\" }, \"#2621\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"9\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Merged PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/pull/2599\" }, \"Add custom host validation #2599\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"9\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Merged PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/pull/2621\" }, \"Fix issues with MarkBind's patch of live-server #2621\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"9\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Authored PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/pull/2656\" }, \"Refactor isValidHost and resolve Codecov issue #2656\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"9\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Merged PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/pull/2638\" }, \"Update config files to prevent duplicated JavaScript tests #2638\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"9\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Merged PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/pull/2656\" }, \"Refactor isValidHost and resolve Codecov issue #2656\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"9\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Created Issue: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/issues/2658\" }, \"Discussion: CodeCov bot failing to report status for PRs #2658\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"9\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Authored PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/pull/2659\" }, \"Update Dev Guide on PR review and Codecov #2659\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"10\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Reviewed PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/pull/2648\" }, \"Add card stack component #2648\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"10\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Merged PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/pull/2659\" }, \"Update Developer Guide on Codecov for PR Review #2659\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"11\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Created Issue: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/issues/2672\" }, \"KaTeX fonts not loading properly #2672\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"11\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Created Issue: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/issues/2673\" }, \"UncaughtException when using build or deploy in non-MarkBind directories #2673\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"11\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Authored PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/pull/2674\" }, \"Catch UncaughtException for build and deploy #2674\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"11\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Merged PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/pull/2674\" }, \"Catch UncaughtException for build and deploy #2674\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"11\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Authored PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/pull/2675\" }, \"Migrate CodeCov from v3 to v5 #2675\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"11\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Merged PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/pull/2675\" }, \"Migrate CodeCov from v3 to v5 #2675\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"12\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Discussed Issue: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/issues/2670\" }, \"#2670\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"12\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Approved PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/pull/2678\" }, \"#2678\")\n          ])\n        ])\n      ])\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_15 = /*#__PURE__*/_createElementVNode(\"div\", { class: \"nav-component slim-scroll\" }, null, -1 /* HOISTED */)\nconst _hoisted_16 = /*#__PURE__*/_createStaticVNode(\"<footer><div class=\\\"text-center\\\"><p>[<strong>This site was generated using <img src=\\\"https://markbind.org/favicon.ico\\\" width=\\\"25\\\"> <a href=\\\"https://markbind.org/\\\">MarkBind 6.0.0</a></strong> on Wed, 16 Apr 2025, 2:41:31 UTC]<br> <span class=\\\"dimmed\\\"><small><small>favicon.ico of this site was made by <a href=\\\"https://www.flaticon.com/authors/smashicons\\\" title=\\\"Smashicons\\\">Smashicons</a> from <a href=\\\"https://www.flaticon.com/\\\" title=\\\"Flaticon\\\">www.flaticon.com</a> is licensed by <a href=\\\"http://creativecommons.org/licenses/by/3.0/\\\" title=\\\"Creative Commons BY 3.0\\\" target=\\\"_blank\\\">CC 3.0 BY</a></small></small></span></p></div></footer>\", 1)\n\nreturn function render(_ctx, _cache) {\n  const _component_dropdown = _resolveComponent(\"dropdown\")\n  const _component_navbar = _resolveComponent(\"navbar\")\n  const _component_overlay_source = _resolveComponent(\"overlay-source\")\n\n  return (_openBlock(), _createElementBlock(_Fragment, null, [\n    _createElementVNode(\"header\", _hoisted_1, [\n      _createVNode(_component_navbar, {\n        placement: \"top\",\n        type: \"primary\"\n      }, {\n        brand: _withCtx(() => [\n          _hoisted_2\n        ]),\n        right: _withCtx(() => [\n          _hoisted_12\n        ]),\n        default: _withCtx(() => [\n          _createTextVNode(),\n          _createVNode(_component_dropdown, { class: \"nav-link\" }, {\n            header: _withCtx(() => [\n              _createTextVNode(\"CS3281\")\n            ]),\n            default: _withCtx(() => [\n              _createTextVNode(),\n              _hoisted_3,\n              _createTextVNode(),\n              _hoisted_4,\n              _createTextVNode(),\n              _hoisted_5,\n              _createTextVNode(),\n              _hoisted_6\n            ]),\n            _: 1 /* STABLE */\n          }),\n          _createTextVNode(),\n          _createVNode(_component_dropdown, { class: \"nav-link\" }, {\n            header: _withCtx(() => [\n              _createTextVNode(\"CS3282\")\n            ]),\n            default: _withCtx(() => [\n              _createTextVNode(),\n              _hoisted_7,\n              _createTextVNode(),\n              _hoisted_8,\n              _createTextVNode(),\n              _hoisted_9\n            ]),\n            _: 1 /* STABLE */\n          }),\n          _createTextVNode(),\n          _hoisted_10,\n          _createTextVNode(),\n          _hoisted_11,\n          _createTextVNode()\n        ]),\n        _: 1 /* STABLE */\n      })\n    ]),\n    _createTextVNode(),\n    _createElementVNode(\"div\", _hoisted_13, [\n      _hoisted_14,\n      _createTextVNode(),\n      _createVNode(_component_overlay_source, {\n        id: \"page-nav\",\n        class: \"fixed-header-padding\",\n        \"tag-name\": \"nav\",\n        to: \"page-nav\"\n      }, {\n        default: _withCtx(() => [\n          _hoisted_15\n        ]),\n        _: 1 /* STABLE */\n      })\n    ]),\n    _createTextVNode(),\n    _hoisted_16\n  ], 64 /* STABLE_FRAGMENT */))\n}");
    var render = renderFn();
  