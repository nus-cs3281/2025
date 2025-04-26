# Git vs GitHub in RepoSense

## Understanding the Distinction
While doing my user experiments on RepoSense, I noticed that the GitHub IDs of contributors were not displayed correctly in the generated contribution dashboards with only the "--repos" flag without the config files. This led me to investigate how RepoSense handles GitHub-specific information and how it differs from Git. Since Reposense use Git logs to extract commit metadata such as author names and emails, RepoSense is unable to capture GitHub-specific information like GitHub IDs. 

Git and GitHub, while related, are fundamentally different: Git is a version control system that tracks code changes locally, whereas GitHub is a platform built on top of Git that provides additional features like user profiles and collaboration tools. As a result, the current implementation of RepoSense cannot directly link contributions to GitHub profiles without the config files.

# Gradle

When I first joined the RepoSense project, my understanding of Gradle was minimal. I knew it was "the tool that runs Java projects".

## Learning Outcomes

I began by breaking down what I saw in the `build.gradle` file. First, I noticed the plugins section:

```gradle
plugins {
    id 'application'
    id 'checkstyle'
    id 'idea'
    // and more...
}
```

I learned that Gradle is a flexible system that can handle many aspects of our project, including both the Java backend and JavaScript frontend components.

Next, I studied how dependencies work. Instead of manually downloading libraries, Gradle automatically manages them:

```gradle
dependencies {
    implementation group: 'com.google.code.gson', name: 'gson', version: '2.9.0'
    // more dependencies...
}
```

Tasks are the individual operations Gradle performs when building the project. RepoSense has many tasks:

- Tasks that compile Java code
- Tasks that build frontend resources
- Tasks that run different types of tests
- Tasks that package everything together

I discovered that running `./gradlew tasks` shows all available commands, which helped me explore further.

I also learned how tasks depend on each other. For example, when the `shadowJar` task runs, it first makes sure the `zipReport` task completes. This ensures everything happens in the correct order.

## Practical Application

This knowledge changed how I worked on RepoSense:

- When changing Java code, I could run specific tasks like `./gradlew build`
- When working on frontend code, I could use `./gradlew hotReloadFrontend`
- When debugging build issues, I could trace which task was failing and why

This knowledge helps me contribute more effectively to RepoSense and gives me valuable skills for future Java projects. Having this knowledge helped me to debug the CI more efficiently and develop Java applications with more confidence.

# Frontend and Styling Insights

## CSS Normalization
When investigating why `<hr>` elements in Markdown files weren't appearing in RepoSense reports (PR: [#2279](https://github.com/reposense/RepoSense/pull/2279)), I learned about normalize.css. This tool provides default styling for HTML elements (the `<hr>` element height was defaulted to 0) and ensures consistent rendering across different browsers by correcting bugs and inconsistencies for more predictable styling.

# Development Techniques

## Debugging Approach
While working on various features, I used IntelliJ IDEA's debugger to trace program flow. By applying breakpoints and watches, I could investigate how absent fields in config files were being handled and how data was processed through the system. This systematic debugging approach allowed me to understand complex interactions between components and implement robust solutions.

## Testing Strategies
I learned to develop comprehensive test suites that maintain code coverage when introducing new features. For the Code Portfolio configuration, I wrote JUnit tests that load test data from resource files, which proved valuable for testing config file parsing by comparing expected results against actual outcomes. This approach ensured new features didn't break existing functionality while confirming the new behavior worked as expected.

## Java Version Compatibility
After I completed the Refresh Text Only feature (PR: [#2338](https://github.com/reposense/RepoSense/pull/2338)), I received a bug report about Java 17 unable to compile the newest commit of Reposense. Developing in Java 11 while others can use Java 17 created unexpected problems.
I learned to test across multiple Java versions, understand language differences between versions, and appreciate the importance of clear documentation about environment requirements.