### VSCode Extension

VSCode actually has quite a number of default extensions, most of which only activates when you open files of the corresponding languages.

* The `package.json` specifies the behaviour of each extension. This includes when the extension should be activated, the entry point of the extension, and the capabilities that the extension provides.
* During activation of an extension, the script contributes "disposables", each of which provides a functionality to VSCode.

The most conventional way to declare an extension is to declare multiple disposables, each of which contributes a functionality. For example, `typescript-language-features` declares one disposable that provides text upon hovering code in javascript and typescript, one disposable that allows VSCode users to navigate to the definition of a symbol, one disposable that allows VSCode users to navigate to implementations of an abstract function, etc. To provide such functionalities, the extension `typescript-language-features` runs a `tsserver` in the background, which is part of the `typescript` library. The `tsserver` reads a specified file at a specified position, and returns the information accordingly.

Another less conventional way to declare an extension is to declare only one disposable, which is a language server. VSCode has a dedicated `vscode-language-protocol` and `vscode-language-server` packages that are meant to support such extensions. The server and the client just needs to agree on communicating in the same process, and subsequently the capabilities of the extension can be declared in the server, each capability can be declared using a specified protocol. This is especially useful for extensions that are meant to support a particular language.

I find the second approach more troublesome to follow.

* The approach necessitates me to follow the protocol, which means there is less room for customisation. In my second PR to VSCode, I had to leave one bug (missing feature) because the language server does not support providing a file system for my custom resource protocol. To solve this, VSCode needs to add the corresponding API to support file system.
* The approach is also less intuitive, as the capabilities are not declared in the same activation script but in the server.

### Code Review

I learned quite a few things while reading the book, on the topic of code review.

* The work of code review can be split among a few people for large PRs: one for correctness, one for appropriateness, one for readability. Usually, in our CATcher - WATcher repositories, each reviewer does the same thing for all 3. Reflecting on it, I think splitting work in this way makes code review more efficient. For example, junior reviewers can check correctness, as this can be easily done by a dev of any experience level. Meanwhile, the check of appropriateness and readability can be left for more senior devs.
* Code review does not only ensure the correctness and code quality, but also promotes team ownership and knowledge sharing. These aspects of code review are often not recognised but are always at work. Perhaps, for projects that do not have urgent timeline, code review is a good practice to promote teamwork and ensures that everyone is up to date with the knowledge about the code base.
