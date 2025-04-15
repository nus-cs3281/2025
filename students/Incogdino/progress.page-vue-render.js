
    const renderFn = new Function("const { createElementVNode: _createElementVNode, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createStaticVNode: _createStaticVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue\n\nconst _hoisted_1 = { fixed: \"\" }\nconst _hoisted_2 = /*#__PURE__*/_createElementVNode(\"a\", {\n  href: \"/2025/index.html\",\n  title: \"Home\",\n  class: \"navbar-brand\"\n}, \"CS3281&2-2025/Students\", -1 /* HOISTED */)\nconst _hoisted_3 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/index.html\",\n    class: \"dropdown-item\"\n  }, \"Students\")\n], -1 /* HOISTED */)\nconst _hoisted_4 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/students/knowledge.html\",\n    class: \"dropdown-item\"\n  }, \"Knowledge\")\n], -1 /* HOISTED */)\nconst _hoisted_5 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"https://nus-cs3281.github.io/2025-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false\",\n    class: \"dropdown-item\"\n  }, \"Code Dashboard\")\n], -1 /* HOISTED */)\nconst _hoisted_6 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/activities-dashboard.html\",\n    class: \"dropdown-item\"\n  }, \"Activities Dashboard\")\n], -1 /* HOISTED */)\nconst _hoisted_7 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/cs3282-index.html\",\n    class: \"dropdown-item\"\n  }, \"Students\")\n], -1 /* HOISTED */)\nconst _hoisted_8 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/students/talksSchedule.html\",\n    class: \"dropdown-item\"\n  }, \"Lightning Talks\")\n], -1 /* HOISTED */)\nconst _hoisted_9 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/activities-dashboard.html\",\n    class: \"dropdown-item\"\n  }, \"Activities Dashboard\")\n], -1 /* HOISTED */)\nconst _hoisted_10 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/instructions.html\",\n    class: \"nav-link\"\n  }, \"Instructions\")\n], -1 /* HOISTED */)\nconst _hoisted_11 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"https://nus-cs3281.github.io/website/\",\n    class: \"nav-link\"\n  }, [\n    /*#__PURE__*/_createTextVNode(\"CS3281&2 Website \"),\n    /*#__PURE__*/_createElementVNode(\"span\", null, [\n      /*#__PURE__*/_createElementVNode(\"span\", {\n        \"aria-hidden\": \"true\",\n        class: \"glyphicon glyphicon-share-alt\"\n      })\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_12 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"https://github.com/nus-cs3281/2025\",\n    class: \"nav-link\"\n  }, [\n    /*#__PURE__*/_createElementVNode(\"span\", null, [\n      /*#__PURE__*/_createElementVNode(\"span\", {\n        \"aria-hidden\": \"true\",\n        class: \"fab fa-github\"\n      })\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_13 = { id: \"flex-body\" }\nconst _hoisted_14 = /*#__PURE__*/_createElementVNode(\"div\", {\n  id: \"content-wrapper\",\n  class: \"fixed-header-padding\"\n}, [\n  /*#__PURE__*/_createElementVNode(\"h3\", { id: \"markbind\" }, [\n    /*#__PURE__*/_createTextVNode(\"MarkBind\"),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"fa fa-anchor\",\n      href: \"#markbind\",\n      onclick: \"event.stopPropagation()\"\n    })\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"div\", { class: \"table-responsive\" }, [\n    /*#__PURE__*/_createElementVNode(\"table\", { class: \"markbind-table table table-bordered table-striped\" }, [\n      /*#__PURE__*/_createElementVNode(\"thead\", null, [\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"th\", null, \"Week\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"th\", null, \"Achievements\")\n        ])\n      ]),\n      /*#__PURE__*/_createTextVNode(),\n      /*#__PURE__*/_createElementVNode(\"tbody\", null, [\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"0\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Authored PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/pull/2580\" }, \"Update copy plugin #2580\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"2\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Authored PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/pull/2586\" }, \"Fix broken annotation label #2586\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"3\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Reviewed issue: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/issues/2559\" }, \"Boxes: give a way to omit the icon #2559\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"3\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Reviewed issue: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/issues/2588\" }, \"Better feedback when hovering labels #2588\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"3\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Authored PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/pull/2591\" }, \"UG -> Add mcq question with multiple correct answers #2591\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"4\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Authored PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/pull/2598\" }, \"Remove PR message workflow check for bots #2598\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"4\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Reviewed issue: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/issues/2553\" }, \"Provide a search feature for icons #2553\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"4\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Reviewed issue: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/issues/2597\" }, \"Vue Migration (Vue 2 -> Vue 3) #2597\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"5\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Reviewed issue: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/issues/2600\" }, \"Text Wrap wraps by character instead of word #2600\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"6\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Authored PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/pull/2609\" }, \"Update image annotation cursor to pointer on hover #2609\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"8\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Authored PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/pull/2653\" }, \"Fix layout issues in README #2653\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"8\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Authored PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/pull/2648\" }, \"Add card stack component #2648\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"10\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Participated in PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/pull/2622\" }, \"Migrate from Vue 2 to Vue 3 #2622\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"10\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Authored PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/pull/2657\" }, \"Add tooltip for copy and wrap plugins #2657\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"11\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Reviewed issue: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/MarkBind/markbind/issues/2628\" }, \"Numbered lists not showing more than one digit #2628\")\n          ])\n        ])\n      ])\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_15 = /*#__PURE__*/_createElementVNode(\"div\", { class: \"nav-component slim-scroll\" }, null, -1 /* HOISTED */)\nconst _hoisted_16 = /*#__PURE__*/_createStaticVNode(\"<footer><div class=\\\"text-center\\\"><p>[<strong>This site was generated using <img src=\\\"https://markbind.org/favicon.ico\\\" width=\\\"25\\\"> <a href=\\\"https://markbind.org/\\\">MarkBind 6.0.0</a></strong> on Tue, 15 Apr 2025, 4:44:12 UTC]<br> <span class=\\\"dimmed\\\"><small><small>favicon.ico of this site was made by <a href=\\\"https://www.flaticon.com/authors/smashicons\\\" title=\\\"Smashicons\\\">Smashicons</a> from <a href=\\\"https://www.flaticon.com/\\\" title=\\\"Flaticon\\\">www.flaticon.com</a> is licensed by <a href=\\\"http://creativecommons.org/licenses/by/3.0/\\\" title=\\\"Creative Commons BY 3.0\\\" target=\\\"_blank\\\">CC 3.0 BY</a></small></small></span></p></div></footer>\", 1)\n\nreturn function render(_ctx, _cache) {\n  const _component_dropdown = _resolveComponent(\"dropdown\")\n  const _component_navbar = _resolveComponent(\"navbar\")\n  const _component_overlay_source = _resolveComponent(\"overlay-source\")\n\n  return (_openBlock(), _createElementBlock(_Fragment, null, [\n    _createElementVNode(\"header\", _hoisted_1, [\n      _createVNode(_component_navbar, {\n        placement: \"top\",\n        type: \"primary\"\n      }, {\n        brand: _withCtx(() => [\n          _hoisted_2\n        ]),\n        right: _withCtx(() => [\n          _hoisted_12\n        ]),\n        default: _withCtx(() => [\n          _createTextVNode(),\n          _createVNode(_component_dropdown, { class: \"nav-link\" }, {\n            header: _withCtx(() => [\n              _createTextVNode(\"CS3281\")\n            ]),\n            default: _withCtx(() => [\n              _createTextVNode(),\n              _hoisted_3,\n              _createTextVNode(),\n              _hoisted_4,\n              _createTextVNode(),\n              _hoisted_5,\n              _createTextVNode(),\n              _hoisted_6\n            ]),\n            _: 1 /* STABLE */\n          }),\n          _createTextVNode(),\n          _createVNode(_component_dropdown, { class: \"nav-link\" }, {\n            header: _withCtx(() => [\n              _createTextVNode(\"CS3282\")\n            ]),\n            default: _withCtx(() => [\n              _createTextVNode(),\n              _hoisted_7,\n              _createTextVNode(),\n              _hoisted_8,\n              _createTextVNode(),\n              _hoisted_9\n            ]),\n            _: 1 /* STABLE */\n          }),\n          _createTextVNode(),\n          _hoisted_10,\n          _createTextVNode(),\n          _hoisted_11,\n          _createTextVNode()\n        ]),\n        _: 1 /* STABLE */\n      })\n    ]),\n    _createTextVNode(),\n    _createElementVNode(\"div\", _hoisted_13, [\n      _hoisted_14,\n      _createTextVNode(),\n      _createVNode(_component_overlay_source, {\n        id: \"page-nav\",\n        class: \"fixed-header-padding\",\n        \"tag-name\": \"nav\",\n        to: \"page-nav\"\n      }, {\n        default: _withCtx(() => [\n          _hoisted_15\n        ]),\n        _: 1 /* STABLE */\n      })\n    ]),\n    _createTextVNode(),\n    _hoisted_16\n  ], 64 /* STABLE_FRAGMENT */))\n}");
    var render = renderFn();
  