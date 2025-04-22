### Project: VSCode

VSCode is an open-source project by Microsoft. It is a code editor that is used by almost every coder.

VSCode runs on Electron for Desktop version, and runs on Javascript (compiled from Typescript) on the web. It does not make use of any javascript framework, because it is older than most of the javascript framework.

I focused mainly on the functionality side of VSCode. I started out with fixing a small bug, and then moved on to contribute features to VSCode.

### My Contributions

| ID | Status | Description |
| --- | --- | --- |
| #240134 | Merged | [Extension detail content escapes container](https://github.com/microsoft/vscode/pull/240134) |
| #244074 | Merged | [Goto definition for built-in symbols in HTML script](https://github.com/microsoft/vscode/pull/244074) |
| #245034 | Pending | [Git merge squash](https://github.com/microsoft/vscode/pull/245034) |

### My Learning Record

1. Interface - Implementation Separation

VSCode code base heavily makes use of this pattern, where an interface is declared to determine how the clients can interact with a given class. For example, if `Panel` is a part of the code editor, then `IPanel` declares the methods that other classes can call on a panel. Other classes then only references the methods declared in the interface, while different types of panels implement `IPanel` then determines the actual behaviour.

This design makes it easier to develop tests, as test cases can provide stubs to the actual implementations, reducing coupling of components especially in tests. However, this design makes it more difficult for new contributors to trace code 😅, especially when I am not sure which implementation it is supposed to be.

2. VSCode Extension

VSCode actually has quite a number of default extensions, most of which only activates when you open files of the corresponding languages. My second pull request necessitated me to look at [VSCode extension API](https://code.visualstudio.com/api).

* The `package.json` specifies the behaviour of each extension. For `html-language-features` and `typescript-language-features`, the file also specifies when the extension is activated.
* The default entrypoint `extension.ts` declares the functions to be called when the extension is activated and deactivated. In particular, `typescript-language-features` adds VSCode disposibles, which contribute features to VSCode, such as syntax highlighting, hover text, definition content, implementations, references, etc. In contrast, `html-language-features` starts a client that interacts with a server to provide features to VSCode.

My second pull requests touches mainly on `html-language-features`. In the extension, the responsibility of implementing the features lies within the server.

3. One Class - One Component

This is consistent with many modern Javascript framework. In VSCode, each component is declared with a class. The actual DOM element is declared as an instance field. Operations that alter the DOM then references this field.

### Other Observations

1. VSCode Engineering Bot

In VSCode, approximately 100 pull requests are merged everyday. VSCode has a dedicated bot to assign a human reviewer to a PR from an external contributor. From my observation, the reviewer assigned is usually the one that has experience in the field, usually the person has commented on or is the creator of the original issue that the PR is addressing.

I believe this bot can be quite useful for the CATcher - WATcher. During off-season time, PRs tend to be ignored, because students do not check the repository regularly for external contributions, and PR creators do not request for review. While it can be an issue where the assigned person already graduated or is MIA, there are possible fixes:

* Reviewing the PR does not strictly need to be done by the assigned person. Other people can hop in as well. The purpose of the bot is then only to make sure that PRs have at least 1 review.
* The bot can assign the PR to a second person if the first person does not respond after a period of time.

2. CLA Agreement

Before the VSCode Engineering bot even assign the PR to a person, new contributors need to sign an agreement. The agreement is raised by another bot via a comment, below which I could just reply to agree. The gist of the agreement was that I would authorise VSCode to use my code, and that I grant them full patent rights.
