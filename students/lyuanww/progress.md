### Overview

**Feature Development:**

1. Implemented a one-stop config file for code portfolio (PR: [#2299](https://github.com/reposense/RepoSense/pull/2299))

    * Transformed the underutilized `report-config.json` into a more user-friendly YAML configuration file that centralizes repository setup parameters
    * Established a clear configuration priority hierarchy (CLI → YAML → CSV) to provide users with flexible override options
    * Added support for configuration options including repository groups, file globbing patterns, branch specifications, author details, and file size limits
    * Implemented error handling and validation for optional fields to ensure a smooth user experience
    * Developed comprehensive tests to maintain code coverage
    * Created a new documentation page to guide users in utilizing this new configuration approach

This feature improves the user experience by providing more intuitive YAML format compared to the CSV-based configuration (which was difficult for inexperienced users), making RepoSense more accessible for portfolio creation.
    
2. Created functionality to refresh only text in reports (PR: [#2338](https://github.com/reposense/RepoSense/pull/2338))

    * Created a new command-line flag option that allows users to refresh only the text content of reports without regenerating underlying data
    * Reduced waiting time from several minutes to seconds when only making changes to textual content like `title.md`, `repo-blurbs.md`, or `author-blurbs.md`
    * Implemented functionality to reuse previously generated data while updating only the necessary text components
    * This feature particularly benefits users working with large repositories.

This enhancement reduces report generation time for users by eliminating the need to regenerate all report data (which could take several minutes) when only making text content changes.

**Release Hosting:**

* **Hosted the official release for [RepoSense v4.0](https://github.com/reposense/RepoSense/releases/tag/v4.0)**

  * Consolidated contributions and merged features for the milestone
  * Ensured updated documentation and changelog for end users

**Bug Fixes and Documentation Improvements:**
- Fixed outdated documentation in the developer guide (PR: [#2268](https://github.com/reposense/RepoSense/pull/2268))
- Resolved an issue with HR elements not appearing in reports (PR: [#2279](https://github.com/reposense/RepoSense/pull/2279))
- Fixed backend tests and Java 17 compilation errors (PRs: [#2410](https://github.com/reposense/RepoSense/pull/2410) [#2409](https://github.com/reposense/RepoSense/pull/2409))

**Community Participation:**
- Reviewed PRs related to type adapters, config directories, and date conflicts (PRs: [#2270](https://github.com/reposense/RepoSense/pull/2270) [#2315](https://github.com/reposense/RepoSense/pull/2315) [#2340](https://github.com/reposense/RepoSense/pull/2340))

- Identified and documented several issues including features and report generation errors (PRs: [#2317](https://github.com/reposense/RepoSense/issues/2317) [#2289](https://github.com/reposense/RepoSense/issues/2289) [#2429](https://github.com/reposense/RepoSense/issues/2429))

- Submitted several beginner-friendly issues (PR: [#2318](https://github.com/reposense/RepoSense/issues/2318) [#2430](https://github.com/reposense/RepoSense/issues/2430))

- Contributed to resolving intermittent test failures (PR: [#2026](https://github.com/reposense/RepoSense/issues/2026))



| Week | Achievements                                             |
|------|----------------------------------------------------------|
| 2    | Submitted Issue: [Outdated suggested solution in developer guide #2265](https://github.com/reposense/RepoSense/issues/2265)    
| 2    | Submitted PR: [Fix outdated suggested solution docs #2268](https://github.com/reposense/RepoSense/pull/2268)
| 3    | Investigated Issue: [The hr element in title.md and blurbs.md is not appearing in the generated report #2213](https://github.com/reposense/RepoSense/issues/2213)
| 3    | Submitted PR: [Fix hr element not appearing in report #2279](https://github.com/reposense/RepoSense/pull/2279) 
| 4    | Reviewed PR: [Update type adapter adding methods for gson builder #2270] (https://github.com/reposense/RepoSense/pull/2270)
| 4    | Continued Work on Issue: [One-Stop Config File for Code Portfolio #2161] (https://github.com/reposense/RepoSense/issues/2161)
| 5    | Submitted Issue: [Local generation of reports using index.html doesn't work #2289] (https://github.com/reposense/RepoSense/issues/2289)
| 6    | Submitted PR: [One-Stop Config File for Code Portfolio #2299] (https://github.com/reposense/RepoSense/pull/2299)
| 7    | Submitted PR: [Remove test mode flag #2314] (https://github.com/reposense/RepoSense/pull/2314)
| 7    | Submitted Issue: [Add File Pinning/Starring Feature to Highlight Key Files #2317] (https://github.com/reposense/RepoSense/issues/2317)
| 7    | Submitted Issue: [Ambiguity between title.md and the title field in config file. #2318] (https://github.com/reposense/RepoSense/issues/2318)
| 8    | Reviewed PR: [Move title.md to config directory #2315] (https://github.com/reposense/RepoSense/pull/2315)
| 8    | Worked on Issue: [Provide a way to refresh text of a report #2212] (https://github.com/reposense/RepoSense/issues/2212)
| 9    | Submitted PR: [Refresh Only Text #2338] (https://github.com/reposense/RepoSense/pull/2338)
| 11   | Reviewed PR:  [Resolve conflict between CLI and CSV dates #2340] (https://github.com/reposense/RepoSense/pull/2340)
| 11   | Contributed to Issue: [Intermittent failure of system test cases #2026] (https://github.com/reposense/RepoSense/issues/2026)
| 12   | Submitted Issue: [Inaccurate docs for blurbs #2391] (https://github.com/reposense/RepoSense/issues/2391)
| 12   | Submitted PR: [Fix BE tests #2410] (https://github.com/reposense/RepoSense/pull/2410)
| 12   | Submitted PR: [Fix Java 17 Compilation Error #2409] (https://github.com/reposense/RepoSense/pull/2409)
| 13   | Submitted Issue: [Support different time periods for different repos for report-config.yaml #2429] (https://github.com/reposense/RepoSense/issues/2429)
| 13   | Submitted Issue: [Javascript console error when optional title.md file is missing #2430] (https://github.com/reposense/RepoSense/issues/2430)
