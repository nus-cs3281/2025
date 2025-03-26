## react.dev

[react.dev](https://react.dev/) is the official documentation website for React.

### Links

- [GitHub repository](https://github.com/reactjs/react.dev) for English documentation
- [GitHub repository](https://github.com/reactjs/zh-hans.react.dev) for Simplified Chinese documentation
- [Contributing workflow](https://github.com/reactjs/react.dev?tab=readme-ov-file#contributing)

### Contributions

| Week | Project                                                                   | Contributions                                                                                                 |
| ---- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| 2    | [reactjs/zh-hans.react.dev](https://github.com/reactjs/zh-hans.react.dev) | Raised issue: [Typo in Tutorial: Tic-Tac-Toe #1655](https://github.com/reactjs/zh-hans.react.dev/issues/1655) |
| 2    | [reactjs/zh-hans.react.dev](https://github.com/reactjs/zh-hans.react.dev) | Merged PR: [Improve translation #1656](https://github.com/reactjs/zh-hans.react.dev/pull/1656)                |
| 5    | [reactjs/react.dev](https://github.com/reactjs/react.dev)                 | Discussed issue: [link to createClass is broken #7476](https://github.com/reactjs/react.dev/issues/7476)      |
| 5    | [reactjs/react.dev](https://github.com/reactjs/react.dev)                 | Raised issue: [[Typo]: Misspelling on Setup Page #7606](https://github.com/reactjs/react.dev/issues/7606)     |
| 5    | [reactjs/react.dev](https://github.com/reactjs/react.dev)                 | Merged PR: [Fix setup page #7607](https://github.com/reactjs/react.dev/pull/7607)                             |

### Lessons Learned

- [react.dev](https://react.dev/) supports multiple languages!
  - Backstory: I ran into the Simplified Chinese site on accident when looking through the list of issues. [#7447](https://github.com/reactjs/react.dev/issues/7447) caught my eye because it was written in Chinese.
- i18n, or internationalization, is the design of adapting software to different languages and regions.
  - Backstory: Ironically, react.dev does not use i18n to support translations. Instead, they maintain separate repositories for each language, which confused me because I felt that it was extremely inefficient. Curious to find out the proper way of supporting translations, I asked good ol' ChatGPT and was introduced to the world of i18n.
  - [i18next](https://www.i18next.com/): Powerful i18n framework integrated with many frontend frameworks
  - Helped to inspire my [lightning talk](https://github.com/nus-cs3281/2025/issues/26)!
- react.dev maintains separate repositories for each language
  - e.g., [reactjs/zh-hans.react.dev](https://github.com/reactjs/zh-hans.react.dev) for Simplified Chinese
  - Pros:
    - Each language community has autonomy to maintain and update versions
    - Each repository can have its own maintainers, who understand the linguistic and cultural nuances
    - Complex and heavy content can be best tailored for each language.
- The Simplified Chinese repository subscribes to [docschina-bot](https://docschina.org/) for synchronizing changes from the English documentation via weekly automated PRs.
  - e.g., [#1690](https://github.com/reactjs/zh-hans.react.dev/pull/1690)
  - docschina-bot is also used for translating documentation for [Vite](https://cn.vitejs.dev/), [Vue.js](https://cn.vuejs.org/), and etc.
- Learned more Chinese technical terms used in web development
