## Mocktio

> Mockito is a framework to mock dependencies for unit tests

- `mock()`: Creates test stubs of classes (e.g., `Logic`), reducing dependencies
- `when().thenReturn()`: Allows us to return something without actually running the method, minimizing bugs caused by dependencies
  - `thenThrow()`: Mocks throwing exceptions
- `any()`: Allows us to bypass equality checks for different objects when passing in arguments for mocked methods
- `verify()`: Allows us to verify if a method has been called

### Resources

- [Mockito Official Documentation](https://site.mockito.org/)

## Documentation

### Context

Having been away from TEAMMATES for a year, it was initially difficult to pick up the project again. More specifically, some pain points I experienced can be summarized as the following:

- Deciphering design decisions in the codebase
- Continuing long-term projects from previous years (e.g., v9 migration)
- Seeking help from the documentation

All three pain points highlight the need for better documentation in TEAMMATES, which piqued my interest in learning how to write better documentation.

### Learnings

I started with reading about documentation from the assigned reading, Software Engineering at Google. TL;DR:

1. Docs are important
2. Treat docs like code
3. Keep docs focused on 1 purpose
4. Write for your audience

Bearing these principles in mind, I sought to improve TEAMMATES docs in codebase setup and testing. Some notable personal experiences include:

- **Always evaluate the docs from the POV of your audience**: When brushing up on testing, I faced a lot of confusion when reading over the testing docs ([#13227](https://github.com/TEAMMATES/teammates/issues/13227)). Although informative, I felt that the docs needed a more effective and meaningful structure to help with the audience's understanding, supporting the reading's points 3 and 4.
- **If you're reading the docs or code and you internally think "huh?" or any expression of surprise, then it's probably something to improve**: From setting up the codebase to E2E testing, a lot of the problems and confusion I faced when reading the docs were also raised by my fellow mentees. This indicates that any point of confusion should be addressed swiftly, as it's likely that many other developers will face them too. We should also frequently evaluate the docs from time to time with **fresh** opinions.
- **Inline code comments are useful for design decisions**: On numerous occasions when reviewing code, I had to ask for clarifications on the author's rationale and design choices (e.g., [[#12048] Abstract Access Controls to BaseActionTest #13254](https://github.com/TEAMMATES/teammates/pull/13254), [[#13275] Fix potential incorrect sending of closing soon email #13293](https://github.com/TEAMMATES/teammates/pull/13293)). In many of these cases, inline code comments can help.

### Resources

- [Software Engineering at Google (Chapter 10: Documentation)](https://abseil.io/resources/swe-book/html/ch10.html)
  - A longer summary of my learnings from this chapter can be found [here](https://github.com/nus-cs3281/2025/issues/4)

## Miscellaneous

Most of these are from the short but informative lightning talks by my amazing classmates:

- pnpm: A faster npm
- slidev: Code out presentations
- Streamlit: Fast way to create cool data dashboards using Python
- Husky: Add checks before Git commits
- Storybook: Build, showcase, and test UI components
