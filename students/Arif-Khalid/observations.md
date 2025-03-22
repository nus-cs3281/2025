### Project: FreeCodeCamp

FreeCodeCamp is a friendly community where you can learn to code for free.  
The organisation houses a number of open source projects such as its online learning platform, mobile app, developer news publication, vscode extension, and more.  
All of its open source solutions work towards the noble goal of providing high quality technical education for free.

I have focused my contributions to its curriculum and web application codebase which allows users to complete incremental tasks and build lightly guided projects, giving them confidence in tackling their own projects and easing them out of tutorial hell.
### My Contributions

| ID | Status | Description |
| -- | ------ | ----------- |
| 1 | Merged | [fix(curriculum): Update Instruction Verbiage](https://github.com/freeCodeCamp/freeCodeCamp/pull/59101) |
| 2 | Pending follow-up | [fix(client): Fix Backend code source submission](https://github.com/freeCodeCamp/freeCodeCamp/pull/58832) |
| 3 | Pending follow-up | [feat(client): Persist editor open tabs](https://github.com/freeCodeCamp/freeCodeCamp/pull/59103) |
| 4 | Pending initial review | [feat(client): Editor file visual indication](https://github.com/freeCodeCamp/freeCodeCamp/pull/59186) |
| 5 | Pending initial review | [fix(curriculum): Improve instruction clarity](https://github.com/freeCodeCamp/freeCodeCamp/pull/59353) |

1. Update instruction verbiage
   * A good first issue for me, requiring no implementation logic but a lot of effort understanding and finding the part of the large code base to change
   * Improve instruction for a particular step to imply adding a css property instead of changing one
2. Fix backend code source submission
   * A long-standing issue that required deeper understanding of the redux library that was used heavily to handle errors as well as the submission workflow
   * Added warning against private source code link submissions
   * Handled submission errors due to invalid source code links
   * Added playwright tests for the new behaviour
3. Persist editor open tabs
   * A new feature to persist the open tabs of a multi-file course as users move to future steps
   * Simple implementation logic but many hours had to be spent understanding the multifile editor and challenge steps workflow
   * Used the previous state as a basis to initialize the state of the next multifile editor
   * Added playwright tests for the new behaviour
4. Editor visual file indication
   * An additional UI above editors to display which file the editor corresponded to
   * UI logic requiring lookup and use of predefined CSS variables
   * Added a cohesive line at the top of editors showing which file it corresponded to
   * Fixing of playwright tests to pass with the new changes
5. Improve instruction clarity
   * A long-standing issue where the particular challenge rejected an answer utilising string interpolation
   * No implementation logic and my improved understanding helped me to find the offending area much quicker
   * Added improved instruction clarifying that the value should be used directly rather than through string interpolation

### My Learning Record

Give tools/technologies you learned here. Include resources you used, and a brief summary of the resource.
1. Redux  
Redux is a JS library for predictable and maintainable global state management. At the base level, redux makes managing global state easier with easy to understand api and a host of enhancements that work out of the box. I think of it as a wrapper around react context. While it is possible to implement everything redux does without it and using react context, redux exposes more concise api, reducing boilerplate code, as well as enhances its base functionality with features such as middleware to handle side effects of accessing the storage.
Redux is heavily used in the codebase of FreeCodeCamp, centralising state management and the persistent storage solution. Redux actions are used to trigger state changes for almost all interactions in the app.
Therefore, in order to contribute meaningfully to more than just UI updates like I have, Redux was one of the first things I had to learn.
