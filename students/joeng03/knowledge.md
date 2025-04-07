### Sorting

Learnt about how sorting is done in more complex scenarios,
for example when entities are groups using different attributes,
and when there are ties in the values to sort. Had the opportunity
to further improve sorting efficiency for descending sorts by
avoiding recomputations.

### Unit Tests

In the process of enhacing descending sorts,
I managed to detect a bug in the existing sorting code where unit tests
were passing previously due to verifiying incorrect behavior. Through
this experience, I learnt that existing unit tests are not infallible,
especially if they verify incorrect behavior. I also learnt to pay more
attention to details and dive deep into the logic of the codebase without
making any assumptions.

### Developer Productivity

I wrote a relatively complex unit test where the Cypress code copies an `iframe`,
extracts the URL from it, then enters a new window to check for the existence of a logo.
This would have taken an hour to write if I manually referred to the documentation,
and I didn't even know whether it was possible to write such a test. With the help of an
LLM, I was able to do it in minutes. I learnt to recognize situations where LLM would
magnify productivity in scenarios like this one (imperative code) and actually decrease
productivity in other scenarios (changes requiring an overall understanding of the codebase,
spanning multiple files).

### Regression

When merging a PR to enable datetime for since and until dates,
I had an undetected regression in which ramps are not displaying
due to relying on dates to determine the ramp color. This bug
was not detected in any unit tests or system test. I learnt to
be more attentive to the impact of new implementations
and also do manual tests due to the complexity of defining
tests on the UI (Cypress). I also learnt about the tradeoffs of
defining UI tests on tools like Cypress, where it enables better
detection on regressions but also slows down the changes in new
features due to failing test cases. For example, a small change
in the CSS might cause a large amount of Cypress tests to fail
if they include the CSS properties in their correctness check.
The developer will then need a lot of time to figure out the
reason of each of the individual test failures.

### Code Review

I have reviewed code changes made by my teammates and also
one external contributor. Through this experience, I learnt
about various aspects of code review, for example, verifying
correct behaviour, ensuring code quality, and requesting for
more tests or documentation if applicable. I also explored LLM-powered
code reviewing, for example, using Copilot to do auto code reviews.
I recognized the tradeoffs of these solutions, where they are very good
at detecting smaller details that human reviewers might miss, but
currently lack a good "sight" on the overall context of the changes.

### Performance Benchmarking

I learnt about performance benchmarking
for changes related to performance, either in time (CPU)
or space (RAM/disk). Multiple runs are neeeded and the average
is computed. I also learnt about the tools needed to measure
the consumption of various resources such as CPU time, RAM and disk.

### ESLint

Learnt about how ESLint ensures a unified style of JS/TS code.
Had the chance to go through the ESLint documentation for
member-delimiter-style,
https://eslint.style/rules/ts/member-delimiter-style,
understand how it works, and make the modifications in the ESLint
configurations and the codebase to ensure CI job for lintFrontend passes.

### Vite

Learnt about how Vite build identifies the base directory when
serving static assets. Learnt about how Vite manages its dependencies in chunks, and how chunk sizes should be minimized to optimize load perfomance. I also learnt more about how the package `highlight.js` supports code highlighting in multiple programming languages.

### Vercel

Learnt how to configure Vercel on a GitHub repository.

### Immutability in Java

Learnt about the various aspects to consider when designing
and immutable class in Java, such as:

- private and final variables
- elimination of setter methods
- returning copies for mutable variables
- considerations for constructor design (method overloading vs Builder pattern)

### Datetime in Java

I learnt about how timezones are represented in Java LocalDatetime.
I also learnt about the intricacies of timezone conversion, for example,
for timezone 'Asia/Singapore', it is UTC+7.5 before 1982 and
UTC+8 after 1982.
