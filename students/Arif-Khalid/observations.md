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
   * Redux is a JS library for predictable and maintainable global state management. At the base level, redux makes managing global state easier with easy to understand api and a host of enhancements that work out of the box. I think of it as a wrapper around react context. While it is possible to implement everything redux does without it and using react context, redux exposes more concise api, reducing boilerplate code, as well as enhances its base functionality with features such as middleware to handle side effects of accessing the storage.
Redux is heavily used in the codebase of FreeCodeCamp, centralising state management and the persistent storage solution. Redux actions are used to trigger state changes for almost all interactions in the app.
Therefore, in order to contribute meaningfully to more than just UI updates like I have, Redux was one of the first things I had to learn.
   * Resource used: [Redux official docs](https://redux.js.org)
     * Comprehensive official documentation on redux
     * Used in conjunction with study of the implementation on FreeCodeCamp
2. Playwright
   * Playwright is an end-to-end testing framework packed full of everything you need to comprehensively test any web app. FreeCodeCamp strongly enforces end-to-end testing, while putting less emphasis on unit testing. In order to contribute more than just UI changes, I had to be able to write tests for new functionality I introduced or bugs I fixed. Thus, I learned not just how to write good tests, but how to set up, run and write tests using Playwright. With the popularity of playwright coupled with the importance of testing, this is a critical skill to have in my career as a software engineer.
   * Resource used: [Playwright official docs](https://playwright.dev/docs/intro)
     * Comprehensive official documentation on playwright
     * Used in conjunction with examples from the other e2e tests present in FreeCodeCamp
   * Resource used: [Making E2E tests resilient and maintainable](https://medium.com/@jeremie.fleurant/how-i-managed-to-leave-my-e2e-tests-for-months-and-find-them-all-green-32dd3361c082)
     * One of many articles used in finding out how best to write tests
     * Gives a high level look at how tests should be written such as making tests dynamic and making them as concise and necessary as possible
3. Contributing to open source
   * Open source contributions are very daunting at first and it is difficult to know how to even begin. I turned to a number of resources and guides in order to help me towards starting and continuing to contribute to a significant project.
   * Resource used: [Up For Grabs](https://up-for-grabs.net)
     * Website aggregating open source projects suitable for first timers
   * Resource used: [FreeCodeCamp Contributions guide](https://contribute.freecodecamp.org/intro/)
     * Good general guidelines to contribute to any open source projects
     * Specific advice and guidance on contributing to FreeCodeCamp such as naming conventions, file locations, etc.
   * Resource used: [How to contribute to open source](https://www.youtube.com/watch?v=cuoNzXFLitc)
     * Video containing advice towards contributing to any open source project
     * Useful tips on different aspects of open source for a newbie such as patience, reviewing your own PR, opening issues, reviewing PRs, etc.

### Other things of note about FreeCodeCamp
* FreeCodeCamp relies heavily on github labels
  * When you create a PR comprising of edits to a certain part of the codebase. A bot automatically adds relevant labels to that PR such as `scope: curriculum`
  * When maintainers review a PR, they use labels to signify its status in the review pipeline
    * `status: waiting review` is added to allow other maintainers to indicate its suitability for another maintainer to review. I.e, all tests pass and the first reviewer approves or is not familliar enough with that part to review the change
    * `status: waiting update` is added to indicate a review has been given and it is waiting for the contributor to make the required changes
* FreeCodeCamp seems to have a hierarchy of maintainers
  * When the first reviewer chances upon a fresh PR, it is common for them to just add the appropriate `status: waiting review` label and only leave comments on necessary fixes to failing CI/CD tests
  * Most of the time after all the tests pass on a non-trivial PR, the first reviewer wouldn't leave an official review, only add the label
  * It is only after a period of time will then another reviewer leave an actual review
  * This seems to imply a hierarchy where less experienced maintainers go over the bulk of PRs and iron out fundamental issues such as failing critical CI/CD so seniors have less to go through.
* FreeCodeCamp uses Crowdin to manage open source translations
  * Since FreeCodeCamp aims to be accessible to everyone across the globe it needs to have all its resources translated to different languages
  * To facilitate contributors to this effort, it uses Crowdin, a localization management platform which has similar version control and PR functionality as Github
  * Crowdin allows contributors to proofread the proposed translations and vote on them before they are accepted, similar to upvoting and downvoting on Reddit
  * This method of managing open source translations is not something I have encountered before and seems to fit very well with the open source nature of the project
  * This kind of translation handling could be put to use in our NUS open source projects if they eventually require i18n and are big enough to accept many translation contributions
