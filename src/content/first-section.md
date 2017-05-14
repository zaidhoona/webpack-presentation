<!-- .slide: data-background="#A52E32" -->
![npm logo](/img/npm-logo-dark.png "Npm logo") <!-- .element: class="no-fancy"-->

---

## Agenda
- What is NPM?
- Package installations
- Sample node cli application

---

## NPM

- Manage dependencies in the project
- Largest software registry for javascript
- Developed on *Node.js*
- Package pre installed with node.js
- Share code
- Free and open source
- Shared repositories are hosted on [www.npmjs.com](https://www.npmjs.com)

Note: 
- Nodejs
  - became popular because of event driven non io blocking model (single thread, callbacks)
  - generally you hear the names in the serve creation
  - many other applications were creation of the node platform (crazy thing :- NodeOS)

+++

## New to NPM?

- Install node [nodejs.com](https://nodejs.org)
- Add to the path variable (optional)
- To create a node project

```bash
$ npm init
...
name: (project)
version: (1.0.0)
description: 
...
```

---

## `package.json`

- Valid `json` object
- It serves as documentation for what packages your project depends on
- It allows you to specify the versions of a package that your project can use using semantic versioning rules
- Makes your build reproducible which means that its way easier to share with other developers

Note:
- You can directly install a package without using package.json
- Its better to have it in 

+++

## Minimum `package.json`

```json
{
  "name": "my-awesome-package",
  "version": "1.0.0"
}
```

+++

## Example `package.json`

```json 
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "...",
  "scripts": {
    ...
  },
  "author": "Zaid Hoona",
  "dependencies": {
    "my_dep": "^1.0.0"
  },
  "devDependencies": {
    "my_test_framework": "^3.1.0"
  }
}
```

Note:
Initial package.json can be created by the command `npm init`

---

# Install dependencies

+++

## Instal a new package

- Local installation "`npm install jquery`" or "`npm i jquery`"
    - Independent to the project
    - Saved in a new folder "`node_modules`" where the "`package.json`" is placed
    - Version is listed in the `package.json`
- Global installation "`npm install --global jquery`" or "`npm i -G jquery`"
    - Saved in global folder
    - Common to all the projects

+++

Let's try using 

```bash
$ npm install jquery
``` 
and look at `package.json`

+++

package.json
```json 
{
  "name": "my-project",
  "version": "1.0.0",
  "author": "Zaid Hoona"
}
```

- <!-- .element: class="fragment"--> Where is the dependency?
- <!-- .element: class="fragment"--> Dependency is only listed in the `package.json` if we use the `--save` or `-S` flag  

+++

Let's try again using 
```sh
$ npm install --save jquery
```
and look at `package.json`

+++

package.json
```json 
{
  "name": "my-project",
  "version": "1.0.0",
  "author": "Zaid Hoona",
  "dependency": {
    "jquery":"^3.2.1"
  }
}
```

Note:
- It is preferred to have local installation because then each application can have a separate version of the 
dependency
- Global folder is configurable, currently in the latest version the packages get saved into the node 
installation directory

+++

## Dependency types

- Dev :
  - Packages are only needed for development enviornment and testing
  - eg: Mocha, Webpack, LiteServer
  - `npm install --save-dev || npm install -D`
- Optional :
  - Packages not needed for the install to throw error
  - eg: styles, @types
  - `npm install --save-optional || npm install -O`

---

#Essential Configurations

+++

## Proxy settings

- Essential for npm to download dependency when behind a proxy
```sh
$ npm config set http_proxy "http://<username>:<password>@<server>:<port>"
```

+++

## Cache and Prefix

- Cache
  - It is the folder where npm stores the packages
  - Generally it is within the **`User(X)\AppData`** folder
  -  
  ```sh
  $ npm config set cache "<path to the folder>"
  ```
- Prefix
  - Where the global packages are install
  - Generally it is within the **`User(X)\AppData\Roaming`** folder
  - 
  ```sh
  $ npm config set prefix "<path to the folder>"
  ```

Note:
- New versions of npm the global modules are installed where the node is installed

+++

## Editing configuration manually

- Config can be done manually but editing the `.npmrc` file
- 
```ini
[package]
http_proxy = http://<username>:<password>@<server>:<port>
cache = C:\...
prefix = C:\...
```

Note: 
- This file can also be project specific having project specific settings

---

# Lets look at some examples

---

# Other node plugins and tools

+++

<!-- .slide: data-background="#A52E32" -->

![yarn logo](/img/yarn-logo.png "Yarn logo") <!-- .element: width="64px" height="64px" class="no-fancy"-->

+++

## Yarn ![yarn logo](/img/yarn-logo.png "Yarn logo") <!-- .element: width="64px" height="64px" class="no-fancy"-->

- Package manager
- Fast*
- Reliable
- Secure
- [yarnpkg.com](https://yarnpkg.com/)

Note:
- Facebook
- Yarn caches every package it downloads so it never needs to download it again. It also parallelizes operations to maximize resource utilization so install times are faster than ever.
- Yarn uses checksums to verify the integrity of every installed package before its code is executed.
- Using a detailed, but concise, lockfile format, and a deterministic algorithm for installs, Yarn is able to guarantee that an install that worked on one system will work exactly the same way on any other system.
- Offline Mode
- The same dependencies will be installed the same exact way across every machine regardless of install order.
- Resolve mismatching versions of dependencies to a single version to avoid creating duplicates.
- `yarn add` and `yarn add -D` example

+++

## Gulp ![gulp logo](/img/gulp-logo.png "Gulp logo") <!-- .element: width="64px" height="64px" class="no-fancy"-->

- Task runner
- Easily programable interface
- Efficient Builds
- [gulpjs.com](http://gulpjs.com/)

Note:
- By preferring code over configuration
- Streaming build system
- Has a lots of plugins

+++

## Mocha ![mocha logo](/img/mocha-logo.png "Mocha logo") <!-- .element: width="64px" height="64px" class="no-fancy"-->

- Mocha is a feature-rich JavaScript test framework
- Mocha tests run serially, allowing for flexible and accurate reporting
- Asynchronous testing (waiting for the result in the promises)
- [mochajs.org](https://mochajs.org/)

+++

## Reveal.js

- HTML presentation framework
- Has a lot of plugins
- Demo: [http://lab.hakim.se/reveal-js/](http://lab.hakim.se/reveal-js/)
- Code: [https://github.com/hakimel/reveal.js/](https://github.com/hakimel/reveal.js/)

Note:
- Current presentation is made by the same node package
- Has many features like vertical slides, background video loading, 

+++

## Scoop.sh

- Miss `sudo apt-get install` on windows?
- Windows package manage
- Scoop installs the tools you know and love
- 
```sh
  scoop install nodejs
```
- After installtion adds to the enviornment variables
- [http://scoop.sh/](http://scoop.sh/)
