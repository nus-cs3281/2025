### Summary

Over the semester, I have been working on MarkBind. The work will build on previous work done, recorded [here](https://docs.google.com/document/d/1PjA6jfa7G_ZNjc8zSWi1hVSMmhbrGUY95k0ytyDCo-Y/edit?usp=sharing).

I also add add comments and discussions on other issues and PRs (including PR reviews) where I think it would be helpful. (not included in following list). To view, filter by adding `commenter:username` to see in respective GitHub [PR](https://github.com/MarkBind/markbind/pulls) or [Issues](https://github.com/MarkBind/markbind/issues) list.  

I migrated Markbind from Vue 2 to Vue 3, continuing on efforts by a previous senior developer 2 years ago. Additionally, I supported the project through various other bug fixes and optimizations that I noticed through the process of migration.

| Week | Achievements |
| ---- | ------------ |
| 1 | Authored PR: [Add Pagefind Plugin #2568](https://github.com/MarkBind/markbind/pull/2568) |
| 3 | Opened Issue: [Curly braces cause fail #2590](https://github.com/MarkBind/markbind/issues/2590) |
| 4 | Opened Issue: [Update eslint gitignore #2595](https://github.com/MarkBind/markbind/issues/2595) |
| 4 | Authored (closed) PR: [Vue Migration #2596](https://github.com/MarkBind/markbind/pull/2596) |
| 4 | Opened Issue: [Steps for Vue Migration #2597](https://github.com/MarkBind/markbind/issues/2597) |
| 4 | Opened Issue: [Update ignores for dangerfile.js #2595](https://github.com/MarkBind/markbind/issues/2595) |
| 5 | Authored (merged) PR: [Add compiled dangerfile.js #2601](https://github.com/MarkBind/markbind/issues/2601) |
| 6 | Opened Issue: [Edge case for page/site-nav display #2606](https://github.com/MarkBind/markbind/issues/2606) |
| Rcs | Opened Issue: [Vue-components tests are erroneous #2610](https://github.com/MarkBind/markbind/issues/2610) |
| Rcs | Opened Issue: [Error message on cli, core tests Issue #2612](https://github.com/MarkBind/markbind/issues/2612) |
| Rcs | Opened Issue: [Package/lock.json dependency Issue #2613](https://github.com/MarkBind/markbind/issues/2613) |
| Rcs | Authored (merged) PR: [Update Mermaid script for efficiency #2614](https://github.com/MarkBind/markbind/pull/2614) |
| Rcs | Opened Issue: [Outdated typescript module settings to be updated? #2615](https://github.com/MarkBind/markbind/issues/2615) |
| 7 | Opened Issue: [Tests do not stop if certain tests fail and continue running indefinitely #2623](https://github.com/MarkBind/markbind/issues/2623) |
| 7 | Opened Issue: [codeBlockCopyButton/WrapButtons Plugins Side Effects #2624](https://github.com/MarkBind/markbind/issues/2624) |
| 7 | Opened Issue: [Hydration Error / Warning with test sites #2627](https://github.com/MarkBind/markbind/issues/2627) |
| 7 | Opened Issue: [All Markbind Typescript Tests effectively run twice - potentially doubling test time #2629](https://github.com/MarkBind/markbind/issues/2629) |
| 7 | Opened Issue: [Optimization: run tests sequentially by default separate testing in parallel as option #2630](https://github.com/MarkBind/markbind/issues/2630) |
| 7 | Opened Issue: [Modularize functional (snapshot) tests, for plugins where possible. #2631](https://github.com/MarkBind/markbind/issues/2631) |
| 7 | Authored (merged) PR: [Refactor codeBlockButton Plugins #2625](https://github.com/MarkBind/markbind/pull/2625) |
| 7 | Authored (merged) PR: [Refactor dataTable plugin to decouple from Vue #2626](https://github.com/MarkBind/markbind/pull/2626) |
| 8 | Authored (merged) PR: [Vue 3 Migration (Reformatted) #2622](https://github.com/MarkBind/markbind/pull/2622) |
| 9 | Authored (merged) PR: [Update Core-Web Documentation #2660](https://github.com/MarkBind/markbind/pull/2660) |
| 9 | Opened Issue: [Refactor closeable directives #2661](https://github.com/MarkBind/markbind/issues/2661) |
| 9 | Opened Issue: [Closeable Directive does not work for html plain text #2662](https://github.com/MarkBind/markbind/issues/2662) |
| 10 | Resolved Issue: [scopedSlots #1536](https://github.com/MarkBind/markbind/issues/1536) |
| 10 | Resolved Issue: [Vue Investigation #2084](https://github.com/MarkBind/markbind/issues/2084) |
| 10 | Resolved Issue: [Simplify reload logic #2171](https://github.com/MarkBind/markbind/issues/2171) |
| 10 | Resolved Issue: [Conduct Vue Migration #2597](https://github.com/MarkBind/markbind/issues/2597) |
| 10 | Resolved Issue: [Error Vue Tests #2610](https://github.com/MarkBind/markbind/issues/2610) |
| 11 | Opened Issue: [Mermaid CORS #2667](https://github.com/MarkBind/markbind/issues/2667) |
| 11 | Opened Issue: [Renable Qn Animation #2668](https://github.com/MarkBind/markbind/issues/2668) |
| 11 | Opened Issue: [Refactor Styling site-nav #2669](https://github.com/MarkBind/markbind/issues/2669) |
| 12 | Opened Issue: [Outdated Vue testing API #2680](https://github.com/MarkBind/markbind/issues/2680) |
| 12 | Authored (merged) PR: [Update Vue Testing API #2682](https://github.com/MarkBind/markbind/pull/2682) |
| 13 | Opened Issue: [Content cut off after code block in panel using includes #2684](https://github.com/MarkBind/markbind/issues/2684) |
| 13 | Opened Issue: [Vue warning when building CS2103 website #2687](https://github.com/MarkBind/markbind/issues/2687) |

Additional Work done while undertaking Vue 2 to Vue 3 migration of MarkBind (each classifiable as a separate PR, but is part of PR#2622):
* Built the CS2103 website on gh-pages (serves updated version)
* Update modal opening animation (update breaking syntax)
* Update dropdown functionality (hide submenus - update breaking syntax with new logic)
* Fix tree diagram functionality (whitespace issue - vue breaking change)
* Fix spacing between elements (whitespace issue - vue breaking change)
* Investigate render warning (invalid HTML in docs), provide fix
* Fix to images not loaded, panel somehow missing (register plugins in new Vue instance, Retriever.vue)
* Updated fix to navbar content not properly handled (update breaking vue CSS scoped syntax)
* Update Question hydration error - (disable animations for this PR for now)
* Add docs for how MarkBind uses Vue & Update outdated docs on vue
* Fix whitespace issue in site-nav / page-nav (update portal-vue breaking syntax)
* Closeable Directive fixed (update vue mount hook)
* Fixed Pic component on load computation of height and width
* Fixed Thumbnail and Annotate components @load handling case where it does not fire.



