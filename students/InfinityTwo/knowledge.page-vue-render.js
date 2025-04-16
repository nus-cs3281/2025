
    const renderFn = new Function("const { createElementVNode: _createElementVNode, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createStaticVNode: _createStaticVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue\n\nconst _hoisted_1 = { fixed: \"\" }\nconst _hoisted_2 = /*#__PURE__*/_createElementVNode(\"a\", {\n  href: \"/2025/index.html\",\n  title: \"Home\",\n  class: \"navbar-brand\"\n}, \"CS3281&2-2025/Students\", -1 /* HOISTED */)\nconst _hoisted_3 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/index.html\",\n    class: \"dropdown-item\"\n  }, \"Students\")\n], -1 /* HOISTED */)\nconst _hoisted_4 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/students/knowledge.html\",\n    class: \"dropdown-item\"\n  }, \"Knowledge\")\n], -1 /* HOISTED */)\nconst _hoisted_5 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"https://nus-cs3281.github.io/2025-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false\",\n    class: \"dropdown-item\"\n  }, \"Code Dashboard\")\n], -1 /* HOISTED */)\nconst _hoisted_6 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/activities-dashboard.html\",\n    class: \"dropdown-item\"\n  }, \"Activities Dashboard\")\n], -1 /* HOISTED */)\nconst _hoisted_7 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/cs3282-index.html\",\n    class: \"dropdown-item\"\n  }, \"Students\")\n], -1 /* HOISTED */)\nconst _hoisted_8 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/students/talksSchedule.html\",\n    class: \"dropdown-item\"\n  }, \"Lightning Talks\")\n], -1 /* HOISTED */)\nconst _hoisted_9 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/activities-dashboard.html\",\n    class: \"dropdown-item\"\n  }, \"Activities Dashboard\")\n], -1 /* HOISTED */)\nconst _hoisted_10 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/instructions.html\",\n    class: \"nav-link\"\n  }, \"Instructions\")\n], -1 /* HOISTED */)\nconst _hoisted_11 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"https://nus-cs3281.github.io/website/\",\n    class: \"nav-link\"\n  }, [\n    /*#__PURE__*/_createTextVNode(\"CS3281&2 Website \"),\n    /*#__PURE__*/_createElementVNode(\"span\", null, [\n      /*#__PURE__*/_createElementVNode(\"span\", {\n        \"aria-hidden\": \"true\",\n        class: \"glyphicon glyphicon-share-alt\"\n      })\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_12 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"https://github.com/nus-cs3281/2025\",\n    class: \"nav-link\"\n  }, [\n    /*#__PURE__*/_createElementVNode(\"span\", null, [\n      /*#__PURE__*/_createElementVNode(\"span\", {\n        \"aria-hidden\": \"true\",\n        class: \"fab fa-github\"\n      })\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_13 = { id: \"flex-body\" }\nconst _hoisted_14 = /*#__PURE__*/_createElementVNode(\"div\", {\n  id: \"content-wrapper\",\n  class: \"fixed-header-padding\"\n}, [\n  /*#__PURE__*/_createElementVNode(\"h2\", { id: \"angular-and-frontend\" }, [\n    /*#__PURE__*/_createTextVNode(\"Angular and Frontend\"),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"fa fa-anchor\",\n      href: \"#angular-and-frontend\",\n      onclick: \"event.stopPropagation()\"\n    })\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, \"List the aspects you learned, and the resources you used to learn them, and a brief summary of each resource.\"),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"h3\", { id: \"aspects-learnt\" }, [\n    /*#__PURE__*/_createTextVNode(\"Aspects Learnt\"),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"fa fa-anchor\",\n      href: \"#aspects-learnt\",\n      onclick: \"event.stopPropagation()\"\n    })\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"h5\", { id: \"components\" }, [\n    /*#__PURE__*/_createTextVNode(\"Components\"),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"fa fa-anchor\",\n      href: \"#components\",\n      onclick: \"event.stopPropagation()\"\n    })\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, [\n    /*#__PURE__*/_createTextVNode(\"Coming from a React background, it was interesting to understand how Angular components work and how it talks to each other. A lot of the features are built in with their custom names like \"),\n    /*#__PURE__*/_createElementVNode(\"code\", { class: \"hljs inline no-lang\" }, \"ngFor\"),\n    /*#__PURE__*/_createTextVNode(\" and \"),\n    /*#__PURE__*/_createElementVNode(\"code\", { class: \"hljs inline no-lang\" }, \"(click)\"),\n    /*#__PURE__*/_createTextVNode(\" as compared to using JSX. It was very modular in nature which made the learning easier as I can focus on one component without having to break the rest or needing to learn the codebase of more than the surrounding components.\")\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"h5\", { id: \"observables\" }, [\n    /*#__PURE__*/_createTextVNode(\"Observables\"),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"fa fa-anchor\",\n      href: \"#observables\",\n      onclick: \"event.stopPropagation()\"\n    })\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, [\n    /*#__PURE__*/_createTextVNode(\"Angular uses a lot more of observables, emittors and listeners which is based on services to communicate between components. It was very different from React Redux and parent-child that I know of. This was what I had to make use of for one of my first \"),\n    /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/TEAMMATES/teammates/pull/13203\" }, \"PRs #13203\"),\n    /*#__PURE__*/_createTextVNode(\" to deal with dynamic child components listening to a hide/show all button.\")\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"h3\", { id: \"resources-used\" }, [\n    /*#__PURE__*/_createTextVNode(\"Resources Used\"),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"fa fa-anchor\",\n      href: \"#resources-used\",\n      onclick: \"event.stopPropagation()\"\n    })\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, [\n    /*#__PURE__*/_createElementVNode(\"strong\", null, [\n      /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://www.youtube.com/watch?v=3dHNOWTI7H8\" }, \"Angular Crash Course by Traversy Media\")\n    ]),\n    /*#__PURE__*/_createTextVNode(\": A crash course for learning how Angular works for developers with some frontend experience. It covers the basics of Angular, including components, services, and routing.\")\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"h2\", { id: \"testing-and-mockito\" }, [\n    /*#__PURE__*/_createTextVNode(\"Testing and Mockito\"),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"fa fa-anchor\",\n      href: \"#testing-and-mockito\",\n      onclick: \"event.stopPropagation()\"\n    })\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"h3\", { id: \"aspects-learnt-2\" }, [\n    /*#__PURE__*/_createTextVNode(\"Aspects Learnt\"),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"fa fa-anchor\",\n      href: \"#aspects-learnt-2\",\n      onclick: \"event.stopPropagation()\"\n    })\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"h5\", { id: \"mocking-functions\" }, [\n    /*#__PURE__*/_createTextVNode(\"Mocking functions\"),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"fa fa-anchor\",\n      href: \"#mocking-functions\",\n      onclick: \"event.stopPropagation()\"\n    })\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, [\n    /*#__PURE__*/_createTextVNode(\"The use of \"),\n    /*#__PURE__*/_createElementVNode(\"code\", { class: \"hljs inline no-lang\" }, \"when()\"),\n    /*#__PURE__*/_createTextVNode(\" was rather cool for me coming from JUnit and CS2103T. I did not expect to be able to mock functions and their return values. \"),\n    /*#__PURE__*/_createElementVNode(\"code\", { class: \"hljs inline no-lang\" }, \"when()\"),\n    /*#__PURE__*/_createTextVNode(\" overrides a function call when that provided function is called, and returns the values given with chain functions. It allows me to perform unit tests much more easily as we do not need to worry about the implementation of the method being complete.\")\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"h3\", { id: \"resources-used-2\" }, [\n    /*#__PURE__*/_createTextVNode(\"Resources Used\"),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"fa fa-anchor\",\n      href: \"#resources-used-2\",\n      onclick: \"event.stopPropagation()\"\n    })\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, [\n    /*#__PURE__*/_createElementVNode(\"strong\", null, [\n      /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/Mockito.html\" }, \"Mockito Documentation\")\n    ]),\n    /*#__PURE__*/_createTextVNode(\": Official documentation for Mockito\")\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"h2\", { id: \"docker\" }, [\n    /*#__PURE__*/_createTextVNode(\"Docker\"),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"fa fa-anchor\",\n      href: \"#docker\",\n      onclick: \"event.stopPropagation()\"\n    })\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"h3\", { id: \"aspects-learnt-3\" }, [\n    /*#__PURE__*/_createTextVNode(\"Aspects Learnt\"),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"fa fa-anchor\",\n      href: \"#aspects-learnt-3\",\n      onclick: \"event.stopPropagation()\"\n    })\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"h5\", { id: \"containerised-applications\" }, [\n    /*#__PURE__*/_createTextVNode(\"Containerised Applications\"),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"fa fa-anchor\",\n      href: \"#containerised-applications\",\n      onclick: \"event.stopPropagation()\"\n    })\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, \"This was my first time using Docker and it made development much easier by containing our backend in its own sandbox environment. It keeps the application standardised by running on one type of environment and ensures smooth development by not worrying about multiple types of environment to cater and develop for during production.\\n...\")\n], -1 /* HOISTED */)\nconst _hoisted_15 = /*#__PURE__*/_createElementVNode(\"div\", { class: \"nav-component slim-scroll\" }, null, -1 /* HOISTED */)\nconst _hoisted_16 = /*#__PURE__*/_createStaticVNode(\"<footer><div class=\\\"text-center\\\"><p>[<strong>This site was generated using <img src=\\\"https://markbind.org/favicon.ico\\\" width=\\\"25\\\"> <a href=\\\"https://markbind.org/\\\">MarkBind 6.0.0</a></strong> on Wed, 16 Apr 2025, 14:50:03 UTC]<br> <span class=\\\"dimmed\\\"><small><small>favicon.ico of this site was made by <a href=\\\"https://www.flaticon.com/authors/smashicons\\\" title=\\\"Smashicons\\\">Smashicons</a> from <a href=\\\"https://www.flaticon.com/\\\" title=\\\"Flaticon\\\">www.flaticon.com</a> is licensed by <a href=\\\"http://creativecommons.org/licenses/by/3.0/\\\" title=\\\"Creative Commons BY 3.0\\\" target=\\\"_blank\\\">CC 3.0 BY</a></small></small></span></p></div></footer>\", 1)\n\nreturn function render(_ctx, _cache) {\n  const _component_dropdown = _resolveComponent(\"dropdown\")\n  const _component_navbar = _resolveComponent(\"navbar\")\n  const _component_overlay_source = _resolveComponent(\"overlay-source\")\n\n  return (_openBlock(), _createElementBlock(_Fragment, null, [\n    _createElementVNode(\"header\", _hoisted_1, [\n      _createVNode(_component_navbar, {\n        placement: \"top\",\n        type: \"primary\"\n      }, {\n        brand: _withCtx(() => [\n          _hoisted_2\n        ]),\n        right: _withCtx(() => [\n          _hoisted_12\n        ]),\n        default: _withCtx(() => [\n          _createTextVNode(),\n          _createVNode(_component_dropdown, { class: \"nav-link\" }, {\n            header: _withCtx(() => [\n              _createTextVNode(\"CS3281\")\n            ]),\n            default: _withCtx(() => [\n              _createTextVNode(),\n              _hoisted_3,\n              _createTextVNode(),\n              _hoisted_4,\n              _createTextVNode(),\n              _hoisted_5,\n              _createTextVNode(),\n              _hoisted_6\n            ]),\n            _: 1 /* STABLE */\n          }),\n          _createTextVNode(),\n          _createVNode(_component_dropdown, { class: \"nav-link\" }, {\n            header: _withCtx(() => [\n              _createTextVNode(\"CS3282\")\n            ]),\n            default: _withCtx(() => [\n              _createTextVNode(),\n              _hoisted_7,\n              _createTextVNode(),\n              _hoisted_8,\n              _createTextVNode(),\n              _hoisted_9\n            ]),\n            _: 1 /* STABLE */\n          }),\n          _createTextVNode(),\n          _hoisted_10,\n          _createTextVNode(),\n          _hoisted_11,\n          _createTextVNode()\n        ]),\n        _: 1 /* STABLE */\n      })\n    ]),\n    _createTextVNode(),\n    _createElementVNode(\"div\", _hoisted_13, [\n      _hoisted_14,\n      _createTextVNode(),\n      _createVNode(_component_overlay_source, {\n        id: \"page-nav\",\n        class: \"fixed-header-padding\",\n        \"tag-name\": \"nav\",\n        to: \"page-nav\"\n      }, {\n        default: _withCtx(() => [\n          _hoisted_15\n        ]),\n        _: 1 /* STABLE */\n      })\n    ]),\n    _createTextVNode(),\n    _hoisted_16\n  ], 64 /* STABLE_FRAGMENT */))\n}");
    var render = renderFn();
  