
    const renderFn = new Function("const { createElementVNode: _createElementVNode, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createStaticVNode: _createStaticVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue\n\nconst _hoisted_1 = { fixed: \"\" }\nconst _hoisted_2 = /*#__PURE__*/_createElementVNode(\"a\", {\n  href: \"/2025/index.html\",\n  title: \"Home\",\n  class: \"navbar-brand\"\n}, \"CS3281&2-2025/Students\", -1 /* HOISTED */)\nconst _hoisted_3 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/index.html\",\n    class: \"dropdown-item\"\n  }, \"Students\")\n], -1 /* HOISTED */)\nconst _hoisted_4 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/students/knowledge.html\",\n    class: \"dropdown-item\"\n  }, \"Knowledge\")\n], -1 /* HOISTED */)\nconst _hoisted_5 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"https://nus-cs3281.github.io/2025-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false\",\n    class: \"dropdown-item\"\n  }, \"Code Dashboard\")\n], -1 /* HOISTED */)\nconst _hoisted_6 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/activities-dashboard.html\",\n    class: \"dropdown-item\"\n  }, \"Activities Dashboard\")\n], -1 /* HOISTED */)\nconst _hoisted_7 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/cs3282-index.html\",\n    class: \"dropdown-item\"\n  }, \"Students\")\n], -1 /* HOISTED */)\nconst _hoisted_8 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/students/talksSchedule.html\",\n    class: \"dropdown-item\"\n  }, \"Lightning Talks\")\n], -1 /* HOISTED */)\nconst _hoisted_9 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/activities-dashboard.html\",\n    class: \"dropdown-item\"\n  }, \"Activities Dashboard\")\n], -1 /* HOISTED */)\nconst _hoisted_10 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/instructions.html\",\n    class: \"nav-link\"\n  }, \"Instructions\")\n], -1 /* HOISTED */)\nconst _hoisted_11 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"https://nus-cs3281.github.io/website/\",\n    class: \"nav-link\"\n  }, [\n    /*#__PURE__*/_createTextVNode(\"CS3281&2 Website \"),\n    /*#__PURE__*/_createElementVNode(\"span\", null, [\n      /*#__PURE__*/_createElementVNode(\"span\", {\n        \"aria-hidden\": \"true\",\n        class: \"glyphicon glyphicon-share-alt\"\n      })\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_12 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"https://github.com/nus-cs3281/2025\",\n    class: \"nav-link\"\n  }, [\n    /*#__PURE__*/_createElementVNode(\"span\", null, [\n      /*#__PURE__*/_createElementVNode(\"span\", {\n        \"aria-hidden\": \"true\",\n        class: \"fab fa-github\"\n      })\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_13 = { id: \"flex-body\" }\nconst _hoisted_14 = /*#__PURE__*/_createElementVNode(\"div\", {\n  id: \"content-wrapper\",\n  class: \"fixed-header-padding\"\n}, [\n  /*#__PURE__*/_createElementVNode(\"h3\", { id: \"catcher\" }, [\n    /*#__PURE__*/_createTextVNode(\"CATcher\"),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"fa fa-anchor\",\n      href: \"#catcher\",\n      onclick: \"event.stopPropagation()\"\n    })\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"div\", { class: \"table-responsive\" }, [\n    /*#__PURE__*/_createElementVNode(\"table\", { class: \"markbind-table table table-bordered table-striped\" }, [\n      /*#__PURE__*/_createElementVNode(\"thead\", null, [\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"th\", null, \"Week\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"th\", null, \"Achievements\")\n        ])\n      ]),\n      /*#__PURE__*/_createTextVNode(),\n      /*#__PURE__*/_createElementVNode(\"tbody\", null, [\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"3,4\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Reviewed PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/CATcher-org/CATcher/pull/1297\" }, \"Change first column in issue tables from issue number to issue count\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"4\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Created Issue: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/CATcher-org/CATcher/issues/1307\" }, \"Playwrite actions failing due to deprecated actions\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"4\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Created Issue: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/CATcher-org/CATcher/issues/1313\" }, \"Redundant fetching of GitHub issues: Duplicated REST & GraphQL API Calls\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"4\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Reviewed PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/CATcher-org/CATcher/pull/1308\" }, \"Create new phase for bug trimming\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"4\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Discussed Issue: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/CATcher-org/CATcher/issues/1309\" }, \"Create new UI for bug reporting phase that allows deleting and un-deleting of issues\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"4\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Reviewed PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/CATcher-org/CATcher/pull/1311\" }, \"Fix RestGithubIssueState value for closed states\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"4\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Reviewed PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/CATcher-org/CATcher/pull/1312\" }, \"Implement new UI and logic for deleting and restoring issues\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"4\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Created Issue: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/CATcher-org/CATcher/issues/1314\" }, \"Inconsistent Github issue representation between REST and GraphQL APIs\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"4\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Discussed Issue: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/CATcher-org/CATcher/issues/1314\" }, \"Inconsistent Github issue representation between REST and GraphQL APIs\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"5\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Reviewed PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/CATcher-org/CATcher/pull/1319\" }, \"Create issue component for bug trimming phase\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"5\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Discussed Issue: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/CATcher-org/CATcher/issues/1320\" }, \"Setup Builds and Tests not running for feature-bug-trimming branch\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"5\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Reviewed PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/CATcher-org/CATcher/pull/1321\" }, \"Fix incorrect Github REST API response types\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"5\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Reviewed PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/CATcher-org/CATcher/pull/1322\" }, \"Update github-actions.yml to run when push/PR\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"6\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Created Issue: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/CATcher-org/CATcher/issues/1332\" }, [\n              /*#__PURE__*/_createTextVNode(\"Smoothening up devops with \"),\n              /*#__PURE__*/_createElementVNode(\"code\", { class: \"hljs inline no-lang\" }, \"devcontainer\")\n            ])\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"6\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Created PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/CATcher-org/WATcher/pull/413\" }, \"Dev Container for streamlined dev environment\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"6\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Created Issue: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/CATcher-org/CATcher/issues/1337\" }, \"Problem accessing CATcher as an admin\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"6\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Reviewed PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/CATcher-org/CATcher/pull/1331\" }, \"Merge Feature bug trimming branch to main\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"6\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Reviewed PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/CATcher-org/CATcher/pull/1336\" }, \"Update karma config\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"7\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Reviewed PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/CATcher-org/CATcher/pull/1338\" }, \"Fix deprecated playwright action\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"9\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Created Issue: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/CATcher-org/CATcher/issues/1346\" }, \"Downgrade Devcontainer from Debian Bookworm to Bullseye for Playwright Support\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"9\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Reviewed PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/CATcher-org/CATcher/pull/1342\" }, \"Add more e2e testing\")\n          ])\n        ])\n      ])\n    ])\n  ]),\n  /*#__PURE__*/_createElementVNode(\"h3\", { id: \"watcher\" }, [\n    /*#__PURE__*/_createTextVNode(\"WATcher\"),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"fa fa-anchor\",\n      href: \"#watcher\",\n      onclick: \"event.stopPropagation()\"\n    })\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"div\", { class: \"table-responsive\" }, [\n    /*#__PURE__*/_createElementVNode(\"table\", { class: \"markbind-table table table-bordered table-striped\" }, [\n      /*#__PURE__*/_createElementVNode(\"thead\", null, [\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"th\", null, \"Week\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"th\", null, \"Achievements\")\n        ])\n      ]),\n      /*#__PURE__*/_createTextVNode(),\n      /*#__PURE__*/_createElementVNode(\"tbody\", null, [\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"1\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Created Issue: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/CATcher-org/WATcher/issues/390\" }, \"Github Actions failing for macos-setup-and-tests\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"1\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Reviewed PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/CATcher-org/WATcher/pull/388\" }, \"Replace missing assignee filter\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"2,3\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Reviewed PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/CATcher-org/WATcher/pull/394\" }, \"Solve Github Actions failing for macos-setup-and-tests\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"4\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Reviewed PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/CATcher-org/WATcher/pull/389\" }, \"Fix incorrect assignee filtering\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"4\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Reviewed PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/CATcher-org/WATcher/pull/403\" }, \"Remove repo from suggestions if invalid\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"4\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Discussed Issue: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/CATcher-org/WATcher/issues/401\" }, \"Allow saving of filters\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"6\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Discussed Issue: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/CATcher-org/WATcher/issues/396\" }, \"Filter bar overflows horizontal screen space\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"6\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Discussed Issue: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/CATcher-org/WATcher/issues/398\" }, \"Remove all button doesn't work\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"6\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Discussed Issue: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/CATcher-org/WATcher/issues/408\" }, \"Display information regarding PR reviews and merging statuses\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"5\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Created Issue: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/CATcher-org/WATcher/issues/406\" }, \"ExpressionChangedAfterItHasBeenCheckedError found in hidden-groups.component.html\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"6\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Created Issue: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/CATcher-org/WATcher/issues/409\" }, \"Prepare for Release to Target Users\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"6\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Created Issue: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/CATcher-org/WATcher/issues/410\" }, [\n              /*#__PURE__*/_createTextVNode(\"Smoothening up devops with \"),\n              /*#__PURE__*/_createElementVNode(\"code\", { class: \"hljs inline no-lang\" }, \"devcontainer\")\n            ])\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"6\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Created Issue: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/CATcher-org/WATcher/issues/416\" }, \"Remove gap between bottom of window and horizontal sidebar\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"6\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Reviewed PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/CATcher-org/WATcher/pull/407\" }, \"Handle templates using BehaviorSubject and async pipe\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"6\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Reviewed PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/CATcher-org/WATcher/pull/415\" }, \"Fix incorrect behaviour when filtering by assignee in issues with multiple assignees\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"6\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Reviewed PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/CATcher-org/WATcher/pull/417\" }, \"Align remove all button to expectations of function\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"7\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Created Issue: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/CATcher-org/WATcher/issues/425\" }, \"Handling Text Matching in GitHub Issue & PR Search for \\\"View on Github\\\"\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"7\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Reviewed PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/CATcher-org/WATcher/pull/420\" }, \"Remove gap between bottom of window and horizontal sidebar using flexbox\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"6,7,8\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Reviewed PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/CATcher-org/WATcher/pull/414\" }, \"Fix view on GitHub\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"10\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Reviewed PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/CATcher-org/WATcher/pull/449\" }, \"Show review decision and reviewers in PR card\")\n          ])\n        ])\n      ])\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_15 = /*#__PURE__*/_createElementVNode(\"div\", { class: \"nav-component slim-scroll\" }, null, -1 /* HOISTED */)\nconst _hoisted_16 = /*#__PURE__*/_createStaticVNode(\"<footer><div class=\\\"text-center\\\"><p>[<strong>This site was generated using <img src=\\\"https://markbind.org/favicon.ico\\\" width=\\\"25\\\"> <a href=\\\"https://markbind.org/\\\">MarkBind 6.0.0</a></strong> on Sat, 19 Apr 2025, 1:31:24 UTC]<br> <span class=\\\"dimmed\\\"><small><small>favicon.ico of this site was made by <a href=\\\"https://www.flaticon.com/authors/smashicons\\\" title=\\\"Smashicons\\\">Smashicons</a> from <a href=\\\"https://www.flaticon.com/\\\" title=\\\"Flaticon\\\">www.flaticon.com</a> is licensed by <a href=\\\"http://creativecommons.org/licenses/by/3.0/\\\" title=\\\"Creative Commons BY 3.0\\\" target=\\\"_blank\\\">CC 3.0 BY</a></small></small></span></p></div></footer>\", 1)\n\nreturn function render(_ctx, _cache) {\n  const _component_dropdown = _resolveComponent(\"dropdown\")\n  const _component_navbar = _resolveComponent(\"navbar\")\n  const _component_overlay_source = _resolveComponent(\"overlay-source\")\n\n  return (_openBlock(), _createElementBlock(_Fragment, null, [\n    _createElementVNode(\"header\", _hoisted_1, [\n      _createVNode(_component_navbar, {\n        placement: \"top\",\n        type: \"primary\"\n      }, {\n        brand: _withCtx(() => [\n          _hoisted_2\n        ]),\n        right: _withCtx(() => [\n          _hoisted_12\n        ]),\n        default: _withCtx(() => [\n          _createTextVNode(),\n          _createVNode(_component_dropdown, { class: \"nav-link\" }, {\n            header: _withCtx(() => [\n              _createTextVNode(\"CS3281\")\n            ]),\n            default: _withCtx(() => [\n              _createTextVNode(),\n              _hoisted_3,\n              _createTextVNode(),\n              _hoisted_4,\n              _createTextVNode(),\n              _hoisted_5,\n              _createTextVNode(),\n              _hoisted_6\n            ]),\n            _: 1 /* STABLE */\n          }),\n          _createTextVNode(),\n          _createVNode(_component_dropdown, { class: \"nav-link\" }, {\n            header: _withCtx(() => [\n              _createTextVNode(\"CS3282\")\n            ]),\n            default: _withCtx(() => [\n              _createTextVNode(),\n              _hoisted_7,\n              _createTextVNode(),\n              _hoisted_8,\n              _createTextVNode(),\n              _hoisted_9\n            ]),\n            _: 1 /* STABLE */\n          }),\n          _createTextVNode(),\n          _hoisted_10,\n          _createTextVNode(),\n          _hoisted_11,\n          _createTextVNode()\n        ]),\n        _: 1 /* STABLE */\n      })\n    ]),\n    _createTextVNode(),\n    _createElementVNode(\"div\", _hoisted_13, [\n      _hoisted_14,\n      _createTextVNode(),\n      _createVNode(_component_overlay_source, {\n        id: \"page-nav\",\n        class: \"fixed-header-padding\",\n        \"tag-name\": \"nav\",\n        to: \"page-nav\"\n      }, {\n        default: _withCtx(() => [\n          _hoisted_15\n        ]),\n        _: 1 /* STABLE */\n      })\n    ]),\n    _createTextVNode(),\n    _hoisted_16\n  ], 64 /* STABLE_FRAGMENT */))\n}");
    var render = renderFn();
  