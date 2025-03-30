## Project: jest
Widely-used JavaScript testing framework.

### My Contributions
Committed a change that was mentioned in a bug report regarding a test's flaky behaviour: https://github.com/jestjs/jest/pull/15517

### My Learning Record
The bug fix itself was simple, but when it came to adding a test to cover the fix, things became more complicated. Eventually, a maintainer and I agreed that the fix was too inconsistent to cover with a test, but I still learnt some things while investigating! Unsurprisingly, Jest uses Jest to test itself - and I became more familiar with this testing framework (that is being proposed to be added to RepoSense!).

The contribution workflow to Jest itself was slightly different to RepoSense as well - there is no custom commit message; rather, the name of the PR is the commit message. Additionally, all changes are logged in a separate changelog file that is included with new Jest releases. This progressive workflow where each change is logged as it is committed could be useful to RepoSense as compared to what we currently do.

## Project: fastify
Node.js based web framework focused on speed.

### My Contributions
Documentation change: https://github.com/fastify/fastify/pull/5988

### My Learning Record
This was an interesting change because what the user thought was a bug was actually intended behaviour - which is why they wanted a documentation change to clarify this. When investigating the code that causes this behaviour, I agreed that it could be easily mistaken for buggy behaviour, highlighting the importance of good documentation!

One contribution workflow we could adopt is adding a PR checklist to make sure most bases are covered by contributors before they submit a PR.
