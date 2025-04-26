## Tools / Technology

### Node Package Manager (`npm`) and Security Risks

To preface, I of course knew about `npm` and how to use it (even before starting CS3281). However, I think it is definitely worth putting it here, because I have done some additional explorations into `npm` and matters of security revolving around `npm`.

`npm` is a package manager for `Node.js` and is usually installed (by default) together with `Node.js`. I learnt about it when I first started learning about `Node.js` - this was about 4 years ago - during my Orbital project, where I built an entire frontend for a web application in React. Since then, I've created many React sites mindlessly with `create-react-app` and using `npm` for package management. Mainly because it just worked. I didn't need to know more about how these worked - I just needed to create a new app prototype quickly, and it was all there was to it.

Recently, I've been taking a bit more interest in how `npm` itself is managed. Within the last few years, I have heard of how `npm` vulnerabilities can be easily exploited, and that the whole system is extremely fragile. After some digging and reading up, here are some interesting details I have learnt:

- `npm` consists of over a million packages with various different functionalities. This means that it is entirely possible for a malicious actor to create a deceptive package and hide it within the sea of legitimate utility packages.
- There are multiple ways of embedding malicious code via `npm` packages. For instance, [here](https://www.fortinet.com/blog/threat-research/malicious-packages-hiddin-in-npm) are details on 9 sets of malicious code that were discovered by FortiGuard Labs in 2023. Broadly, some of these include:
  1. Extracting and uploading sensitive data such as configurations and SSH keys or source code, or fingerprinting details such as username or IP address, through a verbose, compacted `index.js` file.
  2. Hiding a webhook to extract sensitive system information and personal data, within the installation script `index.js` or `index.mjs`.
  3. Disabling TLS certificate validation through the installation script, hence making the connection insecure and vulnerable to man-in-the-middle attacks.
  4. Downloading automatically a malicious executable file to the local directory.
- There are some general ways to mitigate (keyword: mitigate, not eliminate) security risks with `npm`:
  1. Use dependency & version managers to keep the system updated.
  2. Use security scanning tools to detect known vulnerability in packages.
  3. Implement a package whitelist to only allow certain approved packages.
  4. Conduct regular backups and implement user access control.

The fact is, the above security risks mentioned are known to the public - and hence, I imagine that actual security risks and vulnerabilities will be far more insidious and difficult to find. After learning about this, I had a moment of epiphany. When I was younger, it seemed that `npm` and similar package managers (e.g. `pnpm` or `yarn` or `webpack`) were quite an impressive feat of software engineering. Now, while I still do share the same sentiment, it has been saddled with an additional layer of skepticism and cynicism.

Drama aside, it was cool to learn about security risks and vulnerabilities in `npm`, and how to manage it - it would be great to help reinforce this within MarkBind as well, since we have been neglecting that aspect for some time. Now that I know how some of these attacks work, I can see that it is indeed very possible for MarkBind to be used as an entryway for some of these attacks; just because MarkBind is a static site generator, does not mean that it cannot contain similar malicious code.

MarkBind Issue [#2607](https://github.com/MarkBind/markbind/issues/2607) and PR [#2608](https://github.com/MarkBind/markbind/pull/2608), both opened by me, represent an effort towards this direction. At least now, with [#2608](https://github.com/MarkBind/markbind/pull/2608) merged in, we don't have a critical vulnerability to deal with :)
