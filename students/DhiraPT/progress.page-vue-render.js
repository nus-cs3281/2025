
    const renderFn = new Function("const { createElementVNode: _createElementVNode, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createStaticVNode: _createStaticVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue\n\nconst _hoisted_1 = { fixed: \"\" }\nconst _hoisted_2 = /*#__PURE__*/_createElementVNode(\"a\", {\n  href: \"/2025/index.html\",\n  title: \"Home\",\n  class: \"navbar-brand\"\n}, \"CS3281&2-2025/Students\", -1 /* HOISTED */)\nconst _hoisted_3 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/index.html\",\n    class: \"dropdown-item\"\n  }, \"Students\")\n], -1 /* HOISTED */)\nconst _hoisted_4 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/students/knowledge.html\",\n    class: \"dropdown-item\"\n  }, \"Knowledge\")\n], -1 /* HOISTED */)\nconst _hoisted_5 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"https://nus-cs3281.github.io/2025-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false\",\n    class: \"dropdown-item\"\n  }, \"Code Dashboard\")\n], -1 /* HOISTED */)\nconst _hoisted_6 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/activities-dashboard.html\",\n    class: \"dropdown-item\"\n  }, \"Activities Dashboard\")\n], -1 /* HOISTED */)\nconst _hoisted_7 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/cs3282-index.html\",\n    class: \"dropdown-item\"\n  }, \"Students\")\n], -1 /* HOISTED */)\nconst _hoisted_8 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/students/talksSchedule.html\",\n    class: \"dropdown-item\"\n  }, \"Lightning Talks\")\n], -1 /* HOISTED */)\nconst _hoisted_9 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/activities-dashboard.html\",\n    class: \"dropdown-item\"\n  }, \"Activities Dashboard\")\n], -1 /* HOISTED */)\nconst _hoisted_10 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/instructions.html\",\n    class: \"nav-link\"\n  }, \"Instructions\")\n], -1 /* HOISTED */)\nconst _hoisted_11 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"https://nus-cs3281.github.io/website/\",\n    class: \"nav-link\"\n  }, [\n    /*#__PURE__*/_createTextVNode(\"CS3281&2 Website \"),\n    /*#__PURE__*/_createElementVNode(\"span\", null, [\n      /*#__PURE__*/_createElementVNode(\"span\", {\n        \"aria-hidden\": \"true\",\n        class: \"glyphicon glyphicon-share-alt\"\n      })\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_12 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"https://github.com/nus-cs3281/2025\",\n    class: \"nav-link\"\n  }, [\n    /*#__PURE__*/_createElementVNode(\"span\", null, [\n      /*#__PURE__*/_createElementVNode(\"span\", {\n        \"aria-hidden\": \"true\",\n        class: \"fab fa-github\"\n      })\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_13 = { id: \"flex-body\" }\nconst _hoisted_14 = /*#__PURE__*/_createStaticVNode(\"<div id=\\\"content-wrapper\\\" class=\\\"fixed-header-padding\\\"><div class=\\\"table-responsive\\\"><table class=\\\"markbind-table table table-bordered table-striped\\\"><thead><tr><th>Week</th> <th>Achievements</th></tr></thead> <tbody><tr><td>2</td> <td>Submitted Issue: <a href=\\\"https://github.com/TEAMMATES/teammates/issues/13199\\\">Duplicate Feedback Sessions Appear on Student Page #13199</a></td></tr> <tr><td>4</td> <td>Reviewed PR: <a href=\\\"https://github.com/TEAMMATES/teammates/pull/13212\\\">[#12048] Migrate tests for GetAccountActionTest #13212</a></td></tr> <tr><td>5</td> <td>Submitted Issue: <a href=\\\"https://github.com/TEAMMATES/teammates/issues/13228\\\">Standardize the Naming Convention for FeedbackSession Actions #13228</a></td></tr> <tr><td>6</td> <td>Merged PR: <a href=\\\"https://github.com/TEAMMATES/teammates/pull/13204\\\">[#12048] Migrate Tests for DeleteStudentActionTest #13204</a></td></tr> <tr><td>6</td> <td>Merged PR: <a href=\\\"https://github.com/TEAMMATES/teammates/pull/13205\\\">[#12048] Migrate Tests for DeleteStudentsActionTest #13205</a></td></tr> <tr><td>7</td> <td>Merged PR: <a href=\\\"https://github.com/TEAMMATES/teammates/pull/13207\\\">[#12048] Migrate Tests for DeleteInstructorActionTest #13207</a></td></tr> <tr><td>7</td> <td>Merged PR: <a href=\\\"https://github.com/TEAMMATES/teammates/pull/13223\\\">[#12048] Migrate Tests for FeedbackSessionPublishedRemindersActionTest #13223</a></td></tr> <tr><td>7</td> <td>Responded to contributor queries: <a href=\\\"https://github.com/TEAMMATES/teammates/issues/13199#issuecomment-2707383293\\\">#13199</a></td></tr> <tr><td>7</td> <td>Merged PR: <a href=\\\"https://github.com/TEAMMATES/teammates/pull/13229\\\">[#13228] Standardize the Naming Conventions for FeedbackSession Actions #13229</a></td></tr> <tr><td>8</td> <td>Submitted Issue: <a href=\\\"https://github.com/TEAMMATES/teammates/issues/13261\\\">Allow MockEmailSender to Simulate Email Sending Failures #13261</a></td></tr> <tr><td>8</td> <td>Merged PR: <a href=\\\"https://github.com/TEAMMATES/teammates/pull/13262\\\">[#13261] Implement Email Sending Failure Behavior in MockEmailSender #13262</a></td></tr> <tr><td>8</td> <td>Submitted Issue: <a href=\\\"https://github.com/TEAMMATES/teammates/issues/13263\\\">NullPointerException in Student class methods when student team is null #13263</a></td></tr> <tr><td>8</td> <td>Merged PR: <a href=\\\"https://github.com/TEAMMATES/teammates/pull/13264\\\">[#13263] Add null checks to methods in Student class #13264</a></td></tr> <tr><td>8</td> <td>Merged PR: <a href=\\\"https://github.com/TEAMMATES/teammates/pull/13208\\\">[#12048] Migrate Tests for FeedbackSessionClosedRemindersActionTest #13208</a></td></tr> <tr><td>8</td> <td>Merged PR: <a href=\\\"https://github.com/TEAMMATES/teammates/pull/13259\\\">[#12048] Migrate Tests for SearchInstructorsActionTest #13259</a></td></tr> <tr><td>8</td> <td>Merged PR: <a href=\\\"https://github.com/TEAMMATES/teammates/pull/13258\\\">[#12048] Migrate Tests for RegenerateStudentKeyActionTest #13258</a></td></tr> <tr><td>8</td> <td>Merged PR: <a href=\\\"https://github.com/TEAMMATES/teammates/pull/13226\\\">[#12048] Migrate Tests for RegenerateInstructorKeyActionTest #13226</a></td></tr> <tr><td>9</td> <td>Submitted Issue: <a href=\\\"https://github.com/TEAMMATES/teammates/issues/13275\\\">Potential incorrect sending of closing soon email #13275</a></td></tr> <tr><td>9</td> <td>Reviewed PR: <a href=\\\"https://github.com/TEAMMATES/teammates/pull/13243\\\">[#12048] Migrate tests for GetStudentsActionTest #13243</a></td></tr> <tr><td>10</td> <td>Merged PR: <a href=\\\"https://github.com/TEAMMATES/teammates/pull/13269\\\">[#12048] Migrate Tests for SearchStudentsActionTest #13269</a></td></tr> <tr><td>10</td> <td>Merged PR: <a href=\\\"https://github.com/TEAMMATES/teammates/pull/13211\\\">[#12048] Migrate Tests for FeedbackSessionClosingSoonRemindersActionTest #13211</a></td></tr> <tr><td>10</td> <td>Merged PR: <a href=\\\"https://github.com/TEAMMATES/teammates/pull/13215\\\">[#12048] Migrate Tests for FeedbackSessionOpenedRemindersActionTest #13215</a></td></tr> <tr><td>10</td> <td>Merged PR: <a href=\\\"https://github.com/TEAMMATES/teammates/pull/13221\\\">[#12048] Migrate Tests for FeedbackSessionOpeningSoonRemindersActionTest #13221</a></td></tr> <tr><td>10</td> <td>Submitted Issue: <a href=\\\"https://github.com/TEAMMATES/teammates/issues/13291\\\">PostgreSQL port conflict when running dev server #13291</a></td></tr> <tr><td>10</td> <td>Submitted Issue: <a href=\\\"https://github.com/TEAMMATES/teammates/issues/13292\\\">Same Google account silently auto-selected when logging in after failed login attempt #13292</a></td></tr> <tr><td>11</td> <td>Responded to contributor queries: <a href=\\\"https://github.com/TEAMMATES/teammates/issues/13291#issuecomment-2769908793\\\">#13291</a></td></tr> <tr><td>11</td> <td>Merged PR: <a href=\\\"https://github.com/TEAMMATES/teammates/pull/13293\\\">[#13275] Fix potential incorrect sending of closing soon email #13293</a></td></tr> <tr><td>12</td> <td>Merged PR: <a href=\\\"https://github.com/TEAMMATES/teammates/pull/13303\\\">[#12048] Migrate Tests for UpdateStudentActionTest #13303</a></td></tr></tbody></table></div></div>\", 1)\nconst _hoisted_15 = /*#__PURE__*/_createElementVNode(\"div\", { class: \"nav-component slim-scroll\" }, null, -1 /* HOISTED */)\nconst _hoisted_16 = /*#__PURE__*/_createStaticVNode(\"<footer><div class=\\\"text-center\\\"><p>[<strong>This site was generated using <img src=\\\"https://markbind.org/favicon.ico\\\" width=\\\"25\\\"> <a href=\\\"https://markbind.org/\\\">MarkBind 6.0.0</a></strong> on Wed, 16 Apr 2025, 14:50:03 UTC]<br> <span class=\\\"dimmed\\\"><small><small>favicon.ico of this site was made by <a href=\\\"https://www.flaticon.com/authors/smashicons\\\" title=\\\"Smashicons\\\">Smashicons</a> from <a href=\\\"https://www.flaticon.com/\\\" title=\\\"Flaticon\\\">www.flaticon.com</a> is licensed by <a href=\\\"http://creativecommons.org/licenses/by/3.0/\\\" title=\\\"Creative Commons BY 3.0\\\" target=\\\"_blank\\\">CC 3.0 BY</a></small></small></span></p></div></footer>\", 1)\n\nreturn function render(_ctx, _cache) {\n  const _component_dropdown = _resolveComponent(\"dropdown\")\n  const _component_navbar = _resolveComponent(\"navbar\")\n  const _component_overlay_source = _resolveComponent(\"overlay-source\")\n\n  return (_openBlock(), _createElementBlock(_Fragment, null, [\n    _createElementVNode(\"header\", _hoisted_1, [\n      _createVNode(_component_navbar, {\n        placement: \"top\",\n        type: \"primary\"\n      }, {\n        brand: _withCtx(() => [\n          _hoisted_2\n        ]),\n        right: _withCtx(() => [\n          _hoisted_12\n        ]),\n        default: _withCtx(() => [\n          _createTextVNode(),\n          _createVNode(_component_dropdown, { class: \"nav-link\" }, {\n            header: _withCtx(() => [\n              _createTextVNode(\"CS3281\")\n            ]),\n            default: _withCtx(() => [\n              _createTextVNode(),\n              _hoisted_3,\n              _createTextVNode(),\n              _hoisted_4,\n              _createTextVNode(),\n              _hoisted_5,\n              _createTextVNode(),\n              _hoisted_6\n            ]),\n            _: 1 /* STABLE */\n          }),\n          _createTextVNode(),\n          _createVNode(_component_dropdown, { class: \"nav-link\" }, {\n            header: _withCtx(() => [\n              _createTextVNode(\"CS3282\")\n            ]),\n            default: _withCtx(() => [\n              _createTextVNode(),\n              _hoisted_7,\n              _createTextVNode(),\n              _hoisted_8,\n              _createTextVNode(),\n              _hoisted_9\n            ]),\n            _: 1 /* STABLE */\n          }),\n          _createTextVNode(),\n          _hoisted_10,\n          _createTextVNode(),\n          _hoisted_11,\n          _createTextVNode()\n        ]),\n        _: 1 /* STABLE */\n      })\n    ]),\n    _createTextVNode(),\n    _createElementVNode(\"div\", _hoisted_13, [\n      _hoisted_14,\n      _createTextVNode(),\n      _createVNode(_component_overlay_source, {\n        id: \"page-nav\",\n        class: \"fixed-header-padding\",\n        \"tag-name\": \"nav\",\n        to: \"page-nav\"\n      }, {\n        default: _withCtx(() => [\n          _hoisted_15\n        ]),\n        _: 1 /* STABLE */\n      })\n    ]),\n    _createTextVNode(),\n    _hoisted_16\n  ], 64 /* STABLE_FRAGMENT */))\n}");
    var render = renderFn();
  