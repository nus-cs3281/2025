
    const renderFn = new Function("const { createElementVNode: _createElementVNode, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createStaticVNode: _createStaticVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue\n\nconst _hoisted_1 = { fixed: \"\" }\nconst _hoisted_2 = /*#__PURE__*/_createElementVNode(\"a\", {\n  href: \"/2025/index.html\",\n  title: \"Home\",\n  class: \"navbar-brand\"\n}, \"CS3281&2-2025/Students\", -1 /* HOISTED */)\nconst _hoisted_3 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/index.html\",\n    class: \"dropdown-item\"\n  }, \"Students\")\n], -1 /* HOISTED */)\nconst _hoisted_4 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/students/knowledge.html\",\n    class: \"dropdown-item\"\n  }, \"Knowledge\")\n], -1 /* HOISTED */)\nconst _hoisted_5 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"https://nus-cs3281.github.io/2025-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false\",\n    class: \"dropdown-item\"\n  }, \"Code Dashboard\")\n], -1 /* HOISTED */)\nconst _hoisted_6 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/activities-dashboard.html\",\n    class: \"dropdown-item\"\n  }, \"Activities Dashboard\")\n], -1 /* HOISTED */)\nconst _hoisted_7 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/cs3282-index.html\",\n    class: \"dropdown-item\"\n  }, \"Students\")\n], -1 /* HOISTED */)\nconst _hoisted_8 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/students/talksSchedule.html\",\n    class: \"dropdown-item\"\n  }, \"Lightning Talks\")\n], -1 /* HOISTED */)\nconst _hoisted_9 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/activities-dashboard.html\",\n    class: \"dropdown-item\"\n  }, \"Activities Dashboard\")\n], -1 /* HOISTED */)\nconst _hoisted_10 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/instructions.html\",\n    class: \"nav-link\"\n  }, \"Instructions\")\n], -1 /* HOISTED */)\nconst _hoisted_11 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"https://nus-cs3281.github.io/website/\",\n    class: \"nav-link\"\n  }, [\n    /*#__PURE__*/_createTextVNode(\"CS3281&2 Website \"),\n    /*#__PURE__*/_createElementVNode(\"span\", null, [\n      /*#__PURE__*/_createElementVNode(\"span\", {\n        \"aria-hidden\": \"true\",\n        class: \"glyphicon glyphicon-share-alt\"\n      })\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_12 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"https://github.com/nus-cs3281/2025\",\n    class: \"nav-link\"\n  }, [\n    /*#__PURE__*/_createElementVNode(\"span\", null, [\n      /*#__PURE__*/_createElementVNode(\"span\", {\n        \"aria-hidden\": \"true\",\n        class: \"fab fa-github\"\n      })\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_13 = { id: \"flex-body\" }\nconst _hoisted_14 = /*#__PURE__*/_createElementVNode(\"div\", {\n  id: \"content-wrapper\",\n  class: \"fixed-header-padding\"\n}, [\n  /*#__PURE__*/_createElementVNode(\"h2\", { id: \"project-jest\" }, [\n    /*#__PURE__*/_createTextVNode(\"Project: jest\"),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"fa fa-anchor\",\n      href: \"#project-jest\",\n      onclick: \"event.stopPropagation()\"\n    })\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, \"Widely-used JavaScript testing framework.\"),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"h3\", { id: \"my-contributions\" }, [\n    /*#__PURE__*/_createTextVNode(\"My Contributions\"),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"fa fa-anchor\",\n      href: \"#my-contributions\",\n      onclick: \"event.stopPropagation()\"\n    })\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, [\n    /*#__PURE__*/_createTextVNode(\"Committed a change that was mentioned in a bug report regarding a test's flaky behaviour: \"),\n    /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/jestjs/jest/pull/15517\" }, \"https://github.com/jestjs/jest/pull/15517\")\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"h3\", { id: \"my-learning-record\" }, [\n    /*#__PURE__*/_createTextVNode(\"My Learning Record\"),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"fa fa-anchor\",\n      href: \"#my-learning-record\",\n      onclick: \"event.stopPropagation()\"\n    })\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, \"The bug fix itself was simple, but when it came to adding a test to cover the fix, things became more complicated. Eventually, a maintainer and I agreed that the fix was too inconsistent to cover with a test, but I still learnt some things while investigating! Unsurprisingly, Jest uses Jest to test itself - and I became more familiar with this testing framework (that is being proposed to be added to RepoSense!).\"),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, \"The contribution workflow to Jest itself was slightly different to RepoSense as well - there is no custom commit message; rather, the name of the PR is the commit message. Additionally, all changes are logged in a separate changelog file that is included with new Jest releases. This progressive workflow where each change is logged as it is committed could be useful to RepoSense as compared to what we currently do.\"),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"h2\", { id: \"project-fastify\" }, [\n    /*#__PURE__*/_createTextVNode(\"Project: fastify\"),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"fa fa-anchor\",\n      href: \"#project-fastify\",\n      onclick: \"event.stopPropagation()\"\n    })\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, \"Node.js based web framework focused on speed.\"),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"h3\", { id: \"my-contributions-2\" }, [\n    /*#__PURE__*/_createTextVNode(\"My Contributions\"),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"fa fa-anchor\",\n      href: \"#my-contributions-2\",\n      onclick: \"event.stopPropagation()\"\n    })\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, [\n    /*#__PURE__*/_createTextVNode(\"Documentation change: \"),\n    /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/fastify/fastify/pull/5988\" }, \"https://github.com/fastify/fastify/pull/5988\")\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"h3\", { id: \"my-learning-record-2\" }, [\n    /*#__PURE__*/_createTextVNode(\"My Learning Record\"),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"fa fa-anchor\",\n      href: \"#my-learning-record-2\",\n      onclick: \"event.stopPropagation()\"\n    })\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, \"This was an interesting change because what the user thought was a bug was actually intended behaviour - which is why they wanted a documentation change to clarify this. When investigating the code that causes this behaviour, I agreed that it could be easily mistaken for buggy behaviour, highlighting the importance of good documentation!\"),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, \"One contribution workflow we could adopt is adding a PR checklist to make sure most bases are covered by contributors before they submit a PR.\")\n], -1 /* HOISTED */)\nconst _hoisted_15 = /*#__PURE__*/_createElementVNode(\"div\", { class: \"nav-component slim-scroll\" }, null, -1 /* HOISTED */)\nconst _hoisted_16 = /*#__PURE__*/_createStaticVNode(\"<footer><div class=\\\"text-center\\\"><p>[<strong>This site was generated using <img src=\\\"https://markbind.org/favicon.ico\\\" width=\\\"25\\\"> <a href=\\\"https://markbind.org/\\\">MarkBind 6.0.0</a></strong> on Tue, 15 Apr 2025, 4:08:35 UTC]<br> <span class=\\\"dimmed\\\"><small><small>favicon.ico of this site was made by <a href=\\\"https://www.flaticon.com/authors/smashicons\\\" title=\\\"Smashicons\\\">Smashicons</a> from <a href=\\\"https://www.flaticon.com/\\\" title=\\\"Flaticon\\\">www.flaticon.com</a> is licensed by <a href=\\\"http://creativecommons.org/licenses/by/3.0/\\\" title=\\\"Creative Commons BY 3.0\\\" target=\\\"_blank\\\">CC 3.0 BY</a></small></small></span></p></div></footer>\", 1)\n\nreturn function render(_ctx, _cache) {\n  const _component_dropdown = _resolveComponent(\"dropdown\")\n  const _component_navbar = _resolveComponent(\"navbar\")\n  const _component_overlay_source = _resolveComponent(\"overlay-source\")\n\n  return (_openBlock(), _createElementBlock(_Fragment, null, [\n    _createElementVNode(\"header\", _hoisted_1, [\n      _createVNode(_component_navbar, {\n        placement: \"top\",\n        type: \"primary\"\n      }, {\n        brand: _withCtx(() => [\n          _hoisted_2\n        ]),\n        right: _withCtx(() => [\n          _hoisted_12\n        ]),\n        default: _withCtx(() => [\n          _createTextVNode(),\n          _createVNode(_component_dropdown, { class: \"nav-link\" }, {\n            header: _withCtx(() => [\n              _createTextVNode(\"CS3281\")\n            ]),\n            default: _withCtx(() => [\n              _createTextVNode(),\n              _hoisted_3,\n              _createTextVNode(),\n              _hoisted_4,\n              _createTextVNode(),\n              _hoisted_5,\n              _createTextVNode(),\n              _hoisted_6\n            ]),\n            _: 1 /* STABLE */\n          }),\n          _createTextVNode(),\n          _createVNode(_component_dropdown, { class: \"nav-link\" }, {\n            header: _withCtx(() => [\n              _createTextVNode(\"CS3282\")\n            ]),\n            default: _withCtx(() => [\n              _createTextVNode(),\n              _hoisted_7,\n              _createTextVNode(),\n              _hoisted_8,\n              _createTextVNode(),\n              _hoisted_9\n            ]),\n            _: 1 /* STABLE */\n          }),\n          _createTextVNode(),\n          _hoisted_10,\n          _createTextVNode(),\n          _hoisted_11,\n          _createTextVNode()\n        ]),\n        _: 1 /* STABLE */\n      })\n    ]),\n    _createTextVNode(),\n    _createElementVNode(\"div\", _hoisted_13, [\n      _hoisted_14,\n      _createTextVNode(),\n      _createVNode(_component_overlay_source, {\n        id: \"page-nav\",\n        class: \"fixed-header-padding\",\n        \"tag-name\": \"nav\",\n        to: \"page-nav\"\n      }, {\n        default: _withCtx(() => [\n          _hoisted_15\n        ]),\n        _: 1 /* STABLE */\n      })\n    ]),\n    _createTextVNode(),\n    _hoisted_16\n  ], 64 /* STABLE_FRAGMENT */))\n}");
    var render = renderFn();
  