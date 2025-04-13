
    const renderFn = new Function("const { createElementVNode: _createElementVNode, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createStaticVNode: _createStaticVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue\n\nconst _hoisted_1 = { fixed: \"\" }\nconst _hoisted_2 = /*#__PURE__*/_createElementVNode(\"a\", {\n  href: \"/2025/index.html\",\n  title: \"Home\",\n  class: \"navbar-brand\"\n}, \"CS3281&2-2025/Students\", -1 /* HOISTED */)\nconst _hoisted_3 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/index.html\",\n    class: \"dropdown-item\"\n  }, \"Students\")\n], -1 /* HOISTED */)\nconst _hoisted_4 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/students/knowledge.html\",\n    class: \"dropdown-item\"\n  }, \"Knowledge\")\n], -1 /* HOISTED */)\nconst _hoisted_5 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"https://nus-cs3281.github.io/2025-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false\",\n    class: \"dropdown-item\"\n  }, \"Code Dashboard\")\n], -1 /* HOISTED */)\nconst _hoisted_6 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/activities-dashboard.html\",\n    class: \"dropdown-item\"\n  }, \"Activities Dashboard\")\n], -1 /* HOISTED */)\nconst _hoisted_7 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/cs3282-index.html\",\n    class: \"dropdown-item\"\n  }, \"Students\")\n], -1 /* HOISTED */)\nconst _hoisted_8 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/students/talksSchedule.html\",\n    class: \"dropdown-item\"\n  }, \"Lightning Talks\")\n], -1 /* HOISTED */)\nconst _hoisted_9 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/activities-dashboard.html\",\n    class: \"dropdown-item\"\n  }, \"Activities Dashboard\")\n], -1 /* HOISTED */)\nconst _hoisted_10 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/instructions.html\",\n    class: \"nav-link\"\n  }, \"Instructions\")\n], -1 /* HOISTED */)\nconst _hoisted_11 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"https://nus-cs3281.github.io/website/\",\n    class: \"nav-link\"\n  }, [\n    /*#__PURE__*/_createTextVNode(\"CS3281&2 Website \"),\n    /*#__PURE__*/_createElementVNode(\"span\", null, [\n      /*#__PURE__*/_createElementVNode(\"span\", {\n        \"aria-hidden\": \"true\",\n        class: \"glyphicon glyphicon-share-alt\"\n      })\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_12 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"https://github.com/nus-cs3281/2025\",\n    class: \"nav-link\"\n  }, [\n    /*#__PURE__*/_createElementVNode(\"span\", null, [\n      /*#__PURE__*/_createElementVNode(\"span\", {\n        \"aria-hidden\": \"true\",\n        class: \"fab fa-github\"\n      })\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_13 = { id: \"flex-body\" }\nconst _hoisted_14 = /*#__PURE__*/_createStaticVNode(\"<div id=\\\"content-wrapper\\\" class=\\\"fixed-header-padding\\\"><div class=\\\"table-responsive\\\"><table class=\\\"markbind-table table table-bordered table-striped\\\"><thead><tr><th>Week</th> <th>Achievements</th></tr></thead> <tbody><tr><td>1</td> <td>Discovered with the team regarding the issue of failing of the application due to incompaible Java version (Java17)</td></tr> <tr><td>1</td> <td>Investigated in the issue of the failing CI due to deprecated macOS-12</td></tr> <tr><td>1</td> <td>Created PR : <a href=\\\"https://github.com/reposense/RepoSense/pull/2260\\\">[#2259] Upgrade GitHub Actions macOS runners to 13, 14 and 15</a></td></tr> <tr><td>1</td> <td>Created PR: <a href=\\\"https://github.com/reposense/RepoSense/pull/2261\\\">[#2252] Add ubuntu-24.04 to CI runners</a></td></tr> <tr><td>2</td> <td>Solved the issue of failing Cypress Frontend test due to missing dependencies: <a href=\\\"https://github.com/reposense/RepoSense/pull/2260#issuecomment-2614490638\\\">Updated the apt indexes</a></td></tr> <tr><td>2</td> <td>Solved issue: <a href=\\\"https://github.com/reposense/RepoSense/issues/2259\\\">Upgrade GitHub Actions macOS runners to 13 and 14 (and possibly 15) #2259</a></td></tr> <tr><td>2</td> <td>Solved issue: <a href=\\\"https://github.com/reposense/RepoSense/issues/2252\\\">Add ubuntu-24.04 to CI runners and bump publish-RepoSense runner #2252</a></td></tr> <tr><td>3</td> <td>Merged PR: <a href=\\\"https://github.com/reposense/RepoSense/pull/2260\\\">[#2259] Upgrade GitHub Actions macOS runners to 13, 14 and 15</a></td></tr> <tr><td>3</td> <td>Merged PR: <a href=\\\"https://github.com/reposense/RepoSense/pull/2261\\\">[#2252] Add ubuntu-24.04 to CI runners</a></td></tr> <tr><td>3</td> <td>Reviewed PR: <a href=\\\"https://github.com/reposense/RepoSense/pull/2271\\\">[#2269] Update codecov version</a></td></tr> <tr><td>3</td> <td>Reviewed PR: <a href=\\\"https://github.com/reposense/RepoSense/pull/2272\\\">[#2266] Fixed Cypress tests that fail locally</a></td></tr> <tr><td>4</td> <td>Created PR: <a href=\\\"https://github.com/reposense/publish-RepoSense/pull/18\\\">[#2252] Update ubuntu runner in publish-RepoSense</a></td></tr> <tr><td>4</td> <td>Created PR: <a href=\\\"https://github.com/reposense/publish-RepoSense/pull/20\\\">[#2252] Enable CI Checks on PRs and Restrict Deployment to Master in publish-RepoSense</a></td></tr> <tr><td>4</td> <td>Merged PR: <a href=\\\"https://github.com/reposense/publish-RepoSense/pull/20\\\">[#2252] Enable CI Checks on PRs and Restrict Deployment to Master in publish-RepoSense</a></td></tr> <tr><td>4</td> <td>Created issue: <a href=\\\"https://github.com/reposense/RepoSense/issues/2292\\\">Surge.sh Build Preview failing on recent PRs #2292</a></td></tr> <tr><td>5</td> <td>Created PR: <a href=\\\"https://github.com/reposense/RepoSense/pull/2290\\\">[#1955] Usage of directive shorthand syntax in .vue files #2290</a></td></tr> <tr><td>5</td> <td>Solved issue: <a href=\\\"https://github.com/reposense/RepoSense/issues/1955\\\">Usage of directive shorthand syntax in .vue files #1955</a></td></tr> <tr><td>5</td> <td>Created PR: <a href=\\\"https://github.com/reposense/RepoSense/pull/2298\\\">[#2224] Update GitHub workflow to avoid deprecation warnings</a></td></tr> <tr><td>5</td> <td>Solved part of issue: <a href=\\\"https://github.com/reposense/RepoSense/issues/2224\\\">Deprecation warnings for publish-RepoSense #2224</a></td></tr> <tr><td>6</td> <td>Created issue: <a href=\\\"https://github.com/reposense/RepoSense/issues/2311\\\">Add blurbs for Authors #2311</a></td></tr></tbody></table></div></div>\", 1)\nconst _hoisted_15 = /*#__PURE__*/_createElementVNode(\"div\", { class: \"nav-component slim-scroll\" }, null, -1 /* HOISTED */)\nconst _hoisted_16 = /*#__PURE__*/_createStaticVNode(\"<footer><div class=\\\"text-center\\\"><p>[<strong>This site was generated using <img src=\\\"https://markbind.org/favicon.ico\\\" width=\\\"25\\\"> <a href=\\\"https://markbind.org/\\\">MarkBind 6.0.0</a></strong> on Sun, 13 Apr 2025, 19:26:02 UTC]<br> <span class=\\\"dimmed\\\"><small><small>favicon.ico of this site was made by <a href=\\\"https://www.flaticon.com/authors/smashicons\\\" title=\\\"Smashicons\\\">Smashicons</a> from <a href=\\\"https://www.flaticon.com/\\\" title=\\\"Flaticon\\\">www.flaticon.com</a> is licensed by <a href=\\\"http://creativecommons.org/licenses/by/3.0/\\\" title=\\\"Creative Commons BY 3.0\\\" target=\\\"_blank\\\">CC 3.0 BY</a></small></small></span></p></div></footer>\", 1)\n\nreturn function render(_ctx, _cache) {\n  const _component_dropdown = _resolveComponent(\"dropdown\")\n  const _component_navbar = _resolveComponent(\"navbar\")\n  const _component_overlay_source = _resolveComponent(\"overlay-source\")\n\n  return (_openBlock(), _createElementBlock(_Fragment, null, [\n    _createElementVNode(\"header\", _hoisted_1, [\n      _createVNode(_component_navbar, {\n        placement: \"top\",\n        type: \"primary\"\n      }, {\n        brand: _withCtx(() => [\n          _hoisted_2\n        ]),\n        right: _withCtx(() => [\n          _hoisted_12\n        ]),\n        default: _withCtx(() => [\n          _createTextVNode(),\n          _createVNode(_component_dropdown, { class: \"nav-link\" }, {\n            header: _withCtx(() => [\n              _createTextVNode(\"CS3281\")\n            ]),\n            default: _withCtx(() => [\n              _createTextVNode(),\n              _hoisted_3,\n              _createTextVNode(),\n              _hoisted_4,\n              _createTextVNode(),\n              _hoisted_5,\n              _createTextVNode(),\n              _hoisted_6\n            ]),\n            _: 1 /* STABLE */\n          }),\n          _createTextVNode(),\n          _createVNode(_component_dropdown, { class: \"nav-link\" }, {\n            header: _withCtx(() => [\n              _createTextVNode(\"CS3282\")\n            ]),\n            default: _withCtx(() => [\n              _createTextVNode(),\n              _hoisted_7,\n              _createTextVNode(),\n              _hoisted_8,\n              _createTextVNode(),\n              _hoisted_9\n            ]),\n            _: 1 /* STABLE */\n          }),\n          _createTextVNode(),\n          _hoisted_10,\n          _createTextVNode(),\n          _hoisted_11,\n          _createTextVNode()\n        ]),\n        _: 1 /* STABLE */\n      })\n    ]),\n    _createTextVNode(),\n    _createElementVNode(\"div\", _hoisted_13, [\n      _hoisted_14,\n      _createTextVNode(),\n      _createVNode(_component_overlay_source, {\n        id: \"page-nav\",\n        class: \"fixed-header-padding\",\n        \"tag-name\": \"nav\",\n        to: \"page-nav\"\n      }, {\n        default: _withCtx(() => [\n          _hoisted_15\n        ]),\n        _: 1 /* STABLE */\n      })\n    ]),\n    _createTextVNode(),\n    _hoisted_16\n  ], 64 /* STABLE_FRAGMENT */))\n}");
    var render = renderFn();
  