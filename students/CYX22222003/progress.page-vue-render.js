
    const renderFn = new Function("const { createElementVNode: _createElementVNode, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createStaticVNode: _createStaticVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue\n\nconst _hoisted_1 = { fixed: \"\" }\nconst _hoisted_2 = /*#__PURE__*/_createElementVNode(\"a\", {\n  href: \"/2025/index.html\",\n  title: \"Home\",\n  class: \"navbar-brand\"\n}, \"CS3281&2-2025/Students\", -1 /* HOISTED */)\nconst _hoisted_3 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/index.html\",\n    class: \"dropdown-item\"\n  }, \"Students\")\n], -1 /* HOISTED */)\nconst _hoisted_4 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/students/knowledge.html\",\n    class: \"dropdown-item\"\n  }, \"Knowledge\")\n], -1 /* HOISTED */)\nconst _hoisted_5 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"https://nus-cs3281.github.io/2025-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false\",\n    class: \"dropdown-item\"\n  }, \"Code Dashboard\")\n], -1 /* HOISTED */)\nconst _hoisted_6 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/activities-dashboard.html\",\n    class: \"dropdown-item\"\n  }, \"Activities Dashboard\")\n], -1 /* HOISTED */)\nconst _hoisted_7 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/cs3282-index.html\",\n    class: \"dropdown-item\"\n  }, \"Students\")\n], -1 /* HOISTED */)\nconst _hoisted_8 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/students/talksSchedule.html\",\n    class: \"dropdown-item\"\n  }, \"Lightning Talks\")\n], -1 /* HOISTED */)\nconst _hoisted_9 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/activities-dashboard.html\",\n    class: \"dropdown-item\"\n  }, \"Activities Dashboard\")\n], -1 /* HOISTED */)\nconst _hoisted_10 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"/2025/instructions.html\",\n    class: \"nav-link\"\n  }, \"Instructions\")\n], -1 /* HOISTED */)\nconst _hoisted_11 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"https://nus-cs3281.github.io/website/\",\n    class: \"nav-link\"\n  }, [\n    /*#__PURE__*/_createTextVNode(\"CS3281&2 Website \"),\n    /*#__PURE__*/_createElementVNode(\"span\", null, [\n      /*#__PURE__*/_createElementVNode(\"span\", {\n        \"aria-hidden\": \"true\",\n        class: \"glyphicon glyphicon-share-alt\"\n      })\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_12 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"https://github.com/nus-cs3281/2025\",\n    class: \"nav-link\"\n  }, [\n    /*#__PURE__*/_createElementVNode(\"span\", null, [\n      /*#__PURE__*/_createElementVNode(\"span\", {\n        \"aria-hidden\": \"true\",\n        class: \"fab fa-github\"\n      })\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_13 = { id: \"flex-body\" }\nconst _hoisted_14 = /*#__PURE__*/_createElementVNode(\"div\", {\n  id: \"content-wrapper\",\n  class: \"fixed-header-padding\"\n}, [\n  /*#__PURE__*/_createElementVNode(\"h2\", { id: \"summary\" }, [\n    /*#__PURE__*/_createTextVNode(\"Summary\"),\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      class: \"fa fa-anchor\",\n      href: \"#summary\",\n      onclick: \"event.stopPropagation()\"\n    })\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, \"Backend:\"),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"ul\", null, [\n    /*#__PURE__*/_createElementVNode(\"li\", null, \"Fixed data handling error (#2270)\"),\n    /*#__PURE__*/_createTextVNode(),\n    /*#__PURE__*/_createElementVNode(\"li\", null, \"Implemented new features to enable configuration of time periods for different repos (#2280, #2384)\"),\n    /*#__PURE__*/_createTextVNode(),\n    /*#__PURE__*/_createElementVNode(\"li\", null, \"Remove redundant asset flags (#2315)\")\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, \"Frontend:\"),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"ul\", null, [\n    /*#__PURE__*/_createElementVNode(\"li\", null, \"Implemented comparison of filtered files (#2322)\"),\n    /*#__PURE__*/_createTextVNode(),\n    /*#__PURE__*/_createElementVNode(\"li\", null, \"Implemented author blurbs UI (#2319, #2339)\"),\n    /*#__PURE__*/_createTextVNode(),\n    /*#__PURE__*/_createElementVNode(\"li\", null, \"Implemented chart blurbs UI (#2319, #2339)\")\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"p\", null, \"DevOps:\"),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"ul\", null, [\n    /*#__PURE__*/_createElementVNode(\"li\", null, \"Investigated and fixed minor CI/CD bugs (#2278, #2271, #2293)\"),\n    /*#__PURE__*/_createTextVNode(),\n    /*#__PURE__*/_createElementVNode(\"li\", null, \"Explored and updated dashboard deployments on Netlify (#2294, publish-Reposense #15)\"),\n    /*#__PURE__*/_createTextVNode(),\n    /*#__PURE__*/_createElementVNode(\"li\", null, \"Engaged in bug fixing of CI/CD workflow (publish-Reposense #23)\"),\n    /*#__PURE__*/_createTextVNode(),\n    /*#__PURE__*/_createElementVNode(\"li\", null, \"Explored ways to test publish-Reposense preview (#2295)\")\n  ]),\n  /*#__PURE__*/_createTextVNode(),\n  /*#__PURE__*/_createElementVNode(\"div\", { class: \"table-responsive\" }, [\n    /*#__PURE__*/_createElementVNode(\"table\", { class: \"markbind-table table table-bordered table-striped\" }, [\n      /*#__PURE__*/_createElementVNode(\"thead\", null, [\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"th\", null, \"Week\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"th\", null, \"Achievements\")\n        ])\n      ]),\n      /*#__PURE__*/_createTextVNode(),\n      /*#__PURE__*/_createElementVNode(\"tbody\", null, [\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"2\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Submitted issue: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/RepoSense/issues/2267\" }, \"Hints containing outdated classes in the developer guide\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"2\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Responded to contributor queries: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/RepoSense/issues/2262\" }, \"Old dashboards failing due to com.google.gson.JsonIOException\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"3\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Authored and merged PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/RepoSense/pull/2270\" }, \"[#2262] Update type adapter adding methods for gson builder\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"3\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Authored and merged PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/RepoSense/pull/2271\" }, \"[#2269] Update codecov version \")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"3\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Authored and merged PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/RepoSense/pull/2278\" }, \"[#2277] Fix cypress setting up error\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"3\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Authored and merged PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/publish-RepoSense/pull/15\" }, \"[#2258] Update Netlify build\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"3\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Submitted Issues: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/RepoSense/issues/2277\" }, \"Fix failing Cypress frontend test CI run \")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"3\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Reviewed PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/RepoSense/pull/2268\" }, \"[#2265][#2267]Fix outdated suggested solution for backend Task 1\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"4\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Submitted issue: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/RepoSense/issues/2280\" }, \"Specify different time periods for different repos (backend) \")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"4\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Reviewd PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/RepoSense/pull/2279\" }, \"[#2213] Fix hr element not appearing in report\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"4\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Authored and merged PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/RepoSense/pull/2281\" }, \"[#2280] Specify time periods for different repos in csv config\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"5\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Reviewed PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/publish-RepoSense/pull/20\" }, \"[#2252] Enable CI Checks on PRs and Restrict Deployment to Master\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"5\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Reviewed PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/RepoSense/pull/2288\" }, \"[#1952] Add description to Gradle tasks\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"5\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Reviewed PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/RepoSense/pull/2290\" }, \"[#1955] Usage of directive shorthand syntax in .vue files\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"5\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Responded to contributor queries: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/RepoSense/issues/2258\" }, \"Netlify Deployment Instructions No Longer Works\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"5\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Responded to contributor queries: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/RepoSense/issues/2292\" }, \"Surge.sh Build preview failing on recent PRs\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"5\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Authored and merged PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/RepoSense/pull/2294\" }, \"[#2258] Update user guide for Netlify deployment\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"6\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Authored PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/RepoSense/pull/2295\" }, \"[#2285] Update Github Actions for publish-RepoSense preview\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"6\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Submitted issue: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/RepoSense/issues/2308\" }, \"Add blurbs for individual charts\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"6\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Authored and merged PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/RepoSense/pull/2293\" }, \"[#2292] Fix surge.sh preview failure on PR\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"7\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Review PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/RepoSense/pull/2303\" }, \"[#2283] Display time periods for each repository\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"7\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Authored and merged PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/RepoSense/pull/2315\" }, \"[#2205] Move title.md to config directory\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"7\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Responded to contributor queries: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/RepoSense/issues/2205\" }, \"Move title.md default location to configs folder #2205\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"7\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Reviewd PR and engage in discussion: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/publish-RepoSense/pull/23\" }, \"[#2316] Update CI/CD Trigger to Allow Automatic Execution for All Relevant Events\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"8\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Authored PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/RepoSense/pull/2319\" }, \"[#2308][#2311] Add author blurbs and repo blurbs to the frontend #2319\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"9\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Authored and merged PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/RepoSense/pull/2322\" }, \"[#2106] Implement comparison of files across repos #2322\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"9\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Submitted issue: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/RepoSense/issues/2334\" }, \"Resolve conflict between CLI and CSV dates for report customization\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"10\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Reviewed PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/RepoSense/pull/2338\" }, \"[#2212] Refresh Only Text\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"10\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Reviewed PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/RepoSense/pull/2320\" }, \"[#2305] FE: Support optimized portfolio mode\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"10\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Reviewed PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/RepoSense/pull/2331\" }, \"[#2210] Add default sort order for groups\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"10\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Submitter issue: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/RepoSense/issues/2384\" }, \"Testing publish-Reposense on every push/PR on the main repo.\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"11\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Authorerd PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/RepoSense/pull/2340\" }, \"[#2334] Resolve conflict between CLI and CSV dates\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"11\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Submitted issue: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/RepoSense/issues/2386\" }, \"[#2386] Enable stacking multiple code panels in the tabs pane\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"12\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Reviewed PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/RepoSense/pull/2339\" }, \"[#2311] Add blurbs for Authors\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"12\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Co-authored and merged PR: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/RepoSense/pull/2339\" }, \"[#2311] Add blurbs for Authors\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"tr\", null, [\n          /*#__PURE__*/_createElementVNode(\"td\", null, \"13\"),\n          /*#__PURE__*/_createTextVNode(),\n          /*#__PURE__*/_createElementVNode(\"td\", null, [\n            /*#__PURE__*/_createTextVNode(\"Submitted issue: \"),\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://github.com/reposense/RepoSense/issues/2417\" }, \"Set up CI/CD pipeline to sync changes between publish-Reposense and code-portfolio\")\n          ])\n        ])\n      ])\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_15 = /*#__PURE__*/_createElementVNode(\"div\", { class: \"nav-component slim-scroll\" }, null, -1 /* HOISTED */)\nconst _hoisted_16 = /*#__PURE__*/_createStaticVNode(\"<footer><div class=\\\"text-center\\\"><p>[<strong>This site was generated using <img src=\\\"https://markbind.org/favicon.ico\\\" width=\\\"25\\\"> <a href=\\\"https://markbind.org/\\\">MarkBind 6.0.0</a></strong> on Thu, 17 Apr 2025, 6:36:02 UTC]<br> <span class=\\\"dimmed\\\"><small><small>favicon.ico of this site was made by <a href=\\\"https://www.flaticon.com/authors/smashicons\\\" title=\\\"Smashicons\\\">Smashicons</a> from <a href=\\\"https://www.flaticon.com/\\\" title=\\\"Flaticon\\\">www.flaticon.com</a> is licensed by <a href=\\\"http://creativecommons.org/licenses/by/3.0/\\\" title=\\\"Creative Commons BY 3.0\\\" target=\\\"_blank\\\">CC 3.0 BY</a></small></small></span></p></div></footer>\", 1)\n\nreturn function render(_ctx, _cache) {\n  const _component_dropdown = _resolveComponent(\"dropdown\")\n  const _component_navbar = _resolveComponent(\"navbar\")\n  const _component_overlay_source = _resolveComponent(\"overlay-source\")\n\n  return (_openBlock(), _createElementBlock(_Fragment, null, [\n    _createElementVNode(\"header\", _hoisted_1, [\n      _createVNode(_component_navbar, {\n        placement: \"top\",\n        type: \"primary\"\n      }, {\n        brand: _withCtx(() => [\n          _hoisted_2\n        ]),\n        right: _withCtx(() => [\n          _hoisted_12\n        ]),\n        default: _withCtx(() => [\n          _createTextVNode(),\n          _createVNode(_component_dropdown, { class: \"nav-link\" }, {\n            header: _withCtx(() => [\n              _createTextVNode(\"CS3281\")\n            ]),\n            default: _withCtx(() => [\n              _createTextVNode(),\n              _hoisted_3,\n              _createTextVNode(),\n              _hoisted_4,\n              _createTextVNode(),\n              _hoisted_5,\n              _createTextVNode(),\n              _hoisted_6\n            ]),\n            _: 1 /* STABLE */\n          }),\n          _createTextVNode(),\n          _createVNode(_component_dropdown, { class: \"nav-link\" }, {\n            header: _withCtx(() => [\n              _createTextVNode(\"CS3282\")\n            ]),\n            default: _withCtx(() => [\n              _createTextVNode(),\n              _hoisted_7,\n              _createTextVNode(),\n              _hoisted_8,\n              _createTextVNode(),\n              _hoisted_9\n            ]),\n            _: 1 /* STABLE */\n          }),\n          _createTextVNode(),\n          _hoisted_10,\n          _createTextVNode(),\n          _hoisted_11,\n          _createTextVNode()\n        ]),\n        _: 1 /* STABLE */\n      })\n    ]),\n    _createTextVNode(),\n    _createElementVNode(\"div\", _hoisted_13, [\n      _hoisted_14,\n      _createTextVNode(),\n      _createVNode(_component_overlay_source, {\n        id: \"page-nav\",\n        class: \"fixed-header-padding\",\n        \"tag-name\": \"nav\",\n        to: \"page-nav\"\n      }, {\n        default: _withCtx(() => [\n          _hoisted_15\n        ]),\n        _: 1 /* STABLE */\n      })\n    ]),\n    _createTextVNode(),\n    _hoisted_16\n  ], 64 /* STABLE_FRAGMENT */))\n}");
    var render = renderFn();
  