### OSS-Fuzz Integrated Projects (matio, libraw, libarchive, assimp etc.)

As part of my FYP, which involves automated program repair using [AutoCodeRover](http://autocoderover.dev/), we also strived to obtain developer feedback on the LLM-generated fixes. This involved submitting fixes to the [OSS-Fuzz issue tracker](https://issues.oss-fuzz.com/issues?q=coderover).

### My contributions

Other than contributing to the system used to generate the fixes, there was also a manually review of any of the potential fixes before submission, and understanding whether or not they truly address the vulnerabilities, as well as whether or not they fit into the program semantics. Thus, all the submissions to the issue tracker were manually vetted.

So far, one PR for a vulnerability detected by OSS-Fuzz was [merged in](https://github.com/assimp/assimp/pull/6055).

### My Learning Record
- OSS-Fuzz is a large-scale infrastructure for fuzzing open-source projects. They also automatically publicly disclose discovered bugs beyond a certain grace period, for e.g. this was the [original issue](https://issues.oss-fuzz.com/issues/372765427)
- Assimp, in particular, also has a [fuzzing workflow](https://github.com/assimp/assimp/blob/master/.github/workflows/cifuzz.yml) to run fuzzing for 300 seconds, as part of their CI/Quality gates.
- Assimp project also has [SonarQubeCloud](https://github.com/apps/sonarqubecloud) integrated, which runs static analysis to serve as a quality gate.

### TLDR

TLDR is a community-driven summary page of various popular command-line utilities, across various devices and languages, so you don't need to Google/ChatGPT various commands or run an entire `--help`/`man` command

### My Contributions

Added a [page](https://github.com/tldr-pages/tldr/pull/15972) for `aws s3 sync`, a tool I was conveniently using on another project

### My Learning Record

- Various commands for command-line utilities on [Windows](https://github.com/tldr-pages/tldr/blob/main/pages/windows) (typically used to OSX/Linux)
- TLDRs of tons of other various CLI tools, e.g. I didn't know [gdrive](https://github.com/tldr-pages/tldr/blob/main/pages/common/gdrive.md) had a command line
- (Inspired by Jason) Translations are all done manually, in a separate directory but different repo, but based on the English variant (i.e. to ensure same commands are in the TLDR)
