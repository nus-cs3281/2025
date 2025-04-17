
    const renderFn = new Function("const { createElementVNode: _createElementVNode, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createStaticVNode: _createStaticVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue\n\nconst _hoisted_1 = { fixed: \"\" }\nconst _hoisted_2 = /*#__PURE__*/_createElementVNode(\"a\", {\n  href: \"/2025/index.html\",\n  title: \"Home\",\n  class: \"navbar-brand\"\n}, \"CS3281&2-2025/Students\", -1 /* HOISTED */)\nconst _hoisted_3 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/index.html\",\n    class: \"dropdown-item\"\n  }, \"Students\")\n], -1 /* HOISTED */)\nconst _hoisted_4 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/students/knowledge.html\",\n    class: \"dropdown-item\"\n  }, \"Knowledge\")\n], -1 /* HOISTED */)\nconst _hoisted_5 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"https://nus-cs3281.github.io/2025-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false\",\n    class: \"dropdown-item\"\n  }, \"Code Dashboard\")\n], -1 /* HOISTED */)\nconst _hoisted_6 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/activities-dashboard.html\",\n    class: \"dropdown-item\"\n  }, \"Activities Dashboard\")\n], -1 /* HOISTED */)\nconst _hoisted_7 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/cs3282-index.html\",\n    class: \"dropdown-item\"\n  }, \"Students\")\n], -1 /* HOISTED */)\nconst _hoisted_8 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/students/talksSchedule.html\",\n    class: \"dropdown-item\"\n  }, \"Lightning Talks\")\n], -1 /* HOISTED */)\nconst _hoisted_9 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/activities-dashboard.html\",\n    class: \"dropdown-item\"\n  }, \"Activities Dashboard\")\n], -1 /* HOISTED */)\nconst _hoisted_10 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/instructions.html\",\n    class: \"nav-link\"\n  }, \"Instructions\")\n], -1 /* HOISTED */)\nconst _hoisted_11 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"https://nus-cs3281.github.io/website/\",\n    class: \"nav-link\"\n  }, [\n    /*#__PURE__*/_createTextVNode(\"CS3281&2 Website \"),\n    /*#__PURE__*/_createElementVNode(\"span\", null, [\n      /*#__PURE__*/_createElementVNode(\"span\", {\n        \"aria-hidden\": \"true\",\n        class: \"glyphicon glyphicon-share-alt\"\n      })\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_12 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"https://github.com/nus-cs3281/2025\",\n    class: \"nav-link\"\n  }, [\n    /*#__PURE__*/_createElementVNode(\"span\", null, [\n      /*#__PURE__*/_createElementVNode(\"span\", {\n        \"aria-hidden\": \"true\",\n        class: \"fab fa-github\"\n      })\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_13 = { id: \"flex-body\" }\nconst _hoisted_14 = /*#__PURE__*/_createStaticVNode(\"<div id=\\\"content-wrapper\\\" class=\\\"fixed-header-padding\\\"><div class=\\\"table-responsive\\\"><table class=\\\"markbind-table table table-bordered table-striped\\\"><thead><tr><th>Week</th> <th>Achievements</th></tr></thead> <tbody><tr><td>1</td> <td>Merged PR : <a href=\\\"https://github.com/CATcher-org/CATcher/pull/1291\\\">Fix formatting style of issue-table component</a></td></tr> <tr><td>1</td> <td>Submitted and Researched Issue: <a href=\\\"https://github.com/CATcher-org/CATcher/issues/1292\\\">Playwright Github workflow failing #1292</a></td></tr> <tr><td>2</td> <td>Merged PR: <a href=\\\"https://github.com/CATcher-org/CATcher/pull/1298\\\">Downgrade ubuntu version in playwright.yml #1298</a></td></tr> <tr><td>2</td> <td>Participated in Issue Investigation : <a href=\\\"https://github.com/CATcher-org/CATcher/issues/1304#issuecomment-2609636737\\\">Workflow failing due to updated nested dependencies #1304</a></td></tr> <tr><td>4</td> <td>Reported and Researched Bug: <a href=\\\"https://github.com/CATcher-org/CATcher/issues/1310\\\">Problematic RestGithubIssueState value #1310</a></td></tr> <tr><td>4</td> <td>Merged PR: <a href=\\\"https://github.com/CATcher-org/CATcher/pull/1311\\\">Fix RestGithubIssueState value for closed states #1311</a></td></tr> <tr><td>4</td> <td>Initiated and participated in discussion of UI and user workflow for new bug-trimming phase: <a href=\\\"https://github.com/CATcher-org/CATcher/issues/1309\\\">Create new UI for bug reporting phase that allows deleting and un-deleting of issues #1309</a></td></tr> <tr><td>4</td> <td>Created good first issue: <a href=\\\"https://github.com/CATcher-org/CATcher/issues/1315\\\">Refactor IssueTablesComponent #1315</a></td></tr> <tr><td>5</td> <td>Merged PR: <a href=\\\"https://github.com/CATcher-org/CATcher/pull/1312\\\">Implement new UI and logic for deleting and restoring issues #1312</a></td></tr> <tr><td>5</td> <td>Created Issue: <a href=\\\"https://github.com/CATcher-org/CATcher/issues/1320\\\">Setup Builds and Tests not running for feature-bug-trimming branch #1320</a></td></tr> <tr><td>5</td> <td>Created Issue: <a href=\\\"https://github.com/CATcher-org/CATcher/issues/1323\\\">Remove Setup Builds and Test workflow from feature branch #1323</a></td></tr> <tr><td>5</td> <td>Merged PR: <a href=\\\"https://github.com/CATcher-org/CATcher/pull/1322\\\">Update github-actions.yml to run when push/PR #1322</a></td></tr> <tr><td>5</td> <td>Reviewed PR: <a href=\\\"https://github.com/CATcher-org/CATcher/pull/1321#discussion_r1948430106\\\">Fix incorrect Github REST API response types #1321</a></td></tr> <tr><td>5</td> <td>Reviewed PR: <a href=\\\"https://github.com/CATcher-org/CATcher/pull/1319#pullrequestreview-2604841262\\\">https://github.com/CATcher-org/CATcher/pull/1319#pullrequestreview-2604841262</a></td></tr> <tr><td>6</td> <td>Submitted Bug: <a href=\\\"https://github.com/CATcher-org/CATcher/issues/1327\\\">Line through UI for issues-deleted.component.css is not working on Safari #1327</a></td></tr> <tr><td>6</td> <td>Reviewed PR: <a href=\\\"https://github.com/CATcher-org/CATcher/pull/1328#pullrequestreview-2619991780\\\">Fix strikethrough on Safari #1328</a></td></tr> <tr><td>6</td> <td>Merged PR: <a href=\\\"https://github.com/CATcher-org/CATcher/pull/1329\\\">Remove feature branch from github-actions.yml #1329</a></td></tr> <tr><td>6</td> <td>Reviewed PR: <a href=\\\"https://github.com/CATcher-org/CATcher/pull/1331#pullrequestreview-2620080929\\\">Merge Feature bug trimming branch to main #1331</a></td></tr> <tr><td>6</td> <td>Participated in Issue Investigation: <a href=\\\"https://github.com/CATcher-org/WATcher/issues/396#issuecomment-2682312709\\\">Filter bar overflows horizontal screen space #396</a></td></tr> <tr><td>7</td> <td>Merged PR: <a href=\\\"https://github.com/CATcher-org/catcher-org.github.io/pull/43\\\">Add bug-trimming phase to user-workflow.md #43</a></td></tr> <tr><td>7</td> <td>Reported and Researched Bug: <a href=\\\"https://github.com/CATcher-org/CATcher/issues/1335\\\">npm test on MacOS is failing #1335</a></td></tr> <tr><td>7</td> <td>Merged PR: <a href=\\\"https://github.com/CATcher-org/CATcher/pull/1336\\\">Update karma config #1336</a></td></tr> <tr><td>7</td> <td>Created Issue: <a href=\\\"https://github.com/CATcher-org/WATcher/issues/423\\\">Deselect all selections for filters #423</a></td></tr> <tr><td>7</td> <td>Merged PR: <a href=\\\"https://github.com/CATcher-org/WATcher/pull/426\\\">Add side border to draft PR cards #426</a></td></tr> <tr><td>7</td> <td>Participated in branching workflows discussion: <a href=\\\"https://github.com/CATcher-org/WATcher/issues/427#issuecomment-2705558358\\\">Use feature-branches instead of merging to main #427</a></td></tr> <tr><td>8</td> <td>Created Issue to standardize deployment workflow in CATcher and WATcher: <a href=\\\"https://github.com/CATcher-org/WATcher/issues/429\\\">Update deployment workflow to allow manual deployments from tag #429</a></td></tr> <tr><td>8</td> <td>Merged PR: <a href=\\\"https://github.com/CATcher-org/CATcher/pull/1344\\\">Upgrade Octokit authentication to fix deprecation warnings #1344</a></td></tr> <tr><td>9</td> <td>Deployed WATcher <a href=\\\"https://github.com/CATcher-org/WATcher/releases/tag/V1.3.0\\\">V1.3.0</a></td></tr> <tr><td>9</td> <td>Created Issue: <a href=\\\"https://github.com/CATcher-org/WATcher-docs/issues/18\\\">Update DG to include a common error faced during local set up #18</a></td></tr> <tr><td>9</td> <td>Merged PR: <a href=\\\"https://github.com/CATcher-org/WATcher-docs/pull/22\\\">Update docs to include workaround to common errors #22</a></td></tr> <tr><td>9</td> <td>Contributed to discussion of possible WATcher enhancements:<br> - <a href=\\\"https://github.com/CATcher-org/WATcher/issues/440#issuecomment-2738997268\\\">Give a more detailed tool tip for &#39;keep filter&#39; button #440</a><br>- <a href=\\\"https://github.com/CATcher-org/WATcher/issues/441#issuecomment-2739008201\\\">Visually differentiate issues and PRs more #441</a><br>- <a href=\\\"https://github.com/CATcher-org/WATcher/issues/444#issuecomment-2739088533\\\">Show matching issues and PRs together #444</a></td></tr> <tr><td>10</td> <td>Investigated CATcher bug reported by users: <a href=\\\"https://github.com/CATcher-org/CATcher/issues/1348#issuecomment-2745252534\\\">Issue with reassigning assignees after unchecking issue as duplicate #1348</a></td></tr> <tr><td>10</td> <td>Merged PR: <a href=\\\"https://github.com/CATcher-org/CATcher/pull/1349\\\">Fix bug related to assignees dropdown showing old values #1349</a></td></tr> <tr><td>11</td> <td>Merged PR: <a href=\\\"https://github.com/CATcher-org/WATcher/pull/458\\\">Change keep filters to use slider button #458</a></td></tr> <tr><td>12</td> <td>Reviewed PR: <a href=\\\"https://github.com/CATcher-org/WATcher-docs/pull/23\\\">Change logo to WATcher #23</a></td></tr> <tr><td>12</td> <td>Reviewed PR: <a href=\\\"https://github.com/CATcher-org/CATcher/pull/1352#pullrequestreview-2745470774\\\">Fix navigability issue caused by shared table name #1352</a></td></tr> <tr><td>12</td> <td>Cherry-picked and deployed <a href=\\\"https://github.com/CATcher-org/CATcher/commit/b1340c94f82bc1b0bbeb3cb00b8e62183995eebe\\\">hotfix</a> for CATcher V3.6.1</td></tr> <tr><td>12</td> <td>Published CATcher release <a href=\\\"https://github.com/CATcher-org/CATcher/releases/tag/V3.6.1\\\">V3.6.1</a></td></tr> <tr><td>13</td> <td>Created Issue: <a href=\\\"https://github.com/CATcher-org/WATcher/issues/440\\\">Give a more detailed tool tip for &#39;keep filter&#39; button #440</a></td></tr> <tr><td>13</td> <td>Merged PR: <a href=\\\"https://github.com/CATcher-org/WATcher/pull/458\\\">Change keep filters to use slider button #458</a></td></tr> <tr><td>13</td> <td>Reviewed PR: <a href=\\\"https://github.com/CATcher-org/WATcher/pull/456#pullrequestreview-2763147315\\\">Add a badge to indicate whether the PR follows the forking workflow #456</a></td></tr> <tr><td>13</td> <td>Created Issue: <a href=\\\"https://github.com/CATcher-org/WATcher/issues/467\\\">Bug of all select panels getting transformed to the right #467</a></td></tr> <tr><td>13</td> <td>Merged PR: <a href=\\\"https://github.com/CATcher-org/WATcher/pull/468\\\">Target only filter-bar-panel to move to right #468</a></td></tr></tbody></table></div></div>\", 1)\nconst _hoisted_15 = /*#__PURE__*/_createElementVNode(\"div\", { class: \"nav-component slim-scroll\" }, null, -1 /* HOISTED */)\nconst _hoisted_16 = /*#__PURE__*/_createStaticVNode(\"<footer><div class=\\\"text-center\\\"><p>[<strong>This site was generated using <img src=\\\"https://markbind.org/favicon.ico\\\" width=\\\"25\\\"> <a href=\\\"https://markbind.org/\\\">MarkBind 6.0.0</a></strong> on Thu, 17 Apr 2025, 8:18:35 UTC]<br> <span class=\\\"dimmed\\\"><small><small>favicon.ico of this site was made by <a href=\\\"https://www.flaticon.com/authors/smashicons\\\" title=\\\"Smashicons\\\">Smashicons</a> from <a href=\\\"https://www.flaticon.com/\\\" title=\\\"Flaticon\\\">www.flaticon.com</a> is licensed by <a href=\\\"http://creativecommons.org/licenses/by/3.0/\\\" title=\\\"Creative Commons BY 3.0\\\" target=\\\"_blank\\\">CC 3.0 BY</a></small></small></span></p></div></footer>\", 1)\n\nreturn function render(_ctx, _cache) {\n  const _component_dropdown = _resolveComponent(\"dropdown\")\n  const _component_navbar = _resolveComponent(\"navbar\")\n  const _component_overlay_source = _resolveComponent(\"overlay-source\")\n\n  return (_openBlock(), _createElementBlock(_Fragment, null, [\n    _createElementVNode(\"header\", _hoisted_1, [\n      _createVNode(_component_navbar, {\n        placement: \"top\",\n        type: \"primary\"\n      }, {\n        brand: _withCtx(() => [\n          _hoisted_2\n        ]),\n        right: _withCtx(() => [\n          _hoisted_12\n        ]),\n        default: _withCtx(() => [\n          _createTextVNode(),\n          _createVNode(_component_dropdown, { class: \"nav-link\" }, {\n            header: _withCtx(() => [\n              _createTextVNode(\"CS3281\")\n            ]),\n            default: _withCtx(() => [\n              _createTextVNode(),\n              _hoisted_3,\n              _createTextVNode(),\n              _hoisted_4,\n              _createTextVNode(),\n              _hoisted_5,\n              _createTextVNode(),\n              _hoisted_6\n            ]),\n            _: 1 /* STABLE */\n          }),\n          _createTextVNode(),\n          _createVNode(_component_dropdown, { class: \"nav-link\" }, {\n            header: _withCtx(() => [\n              _createTextVNode(\"CS3282\")\n            ]),\n            default: _withCtx(() => [\n              _createTextVNode(),\n              _hoisted_7,\n              _createTextVNode(),\n              _hoisted_8,\n              _createTextVNode(),\n              _hoisted_9\n            ]),\n            _: 1 /* STABLE */\n          }),\n          _createTextVNode(),\n          _hoisted_10,\n          _createTextVNode(),\n          _hoisted_11,\n          _createTextVNode()\n        ]),\n        _: 1 /* STABLE */\n      })\n    ]),\n    _createTextVNode(),\n    _createElementVNode(\"div\", _hoisted_13, [\n      _hoisted_14,\n      _createTextVNode(),\n      _createVNode(_component_overlay_source, {\n        id: \"page-nav\",\n        class: \"fixed-header-padding\",\n        \"tag-name\": \"nav\",\n        to: \"page-nav\"\n      }, {\n        default: _withCtx(() => [\n          _hoisted_15\n        ]),\n        _: 1 /* STABLE */\n      })\n    ]),\n    _createTextVNode(),\n    _hoisted_16\n  ], 64 /* STABLE_FRAGMENT */))\n}");
    var render = renderFn();
  