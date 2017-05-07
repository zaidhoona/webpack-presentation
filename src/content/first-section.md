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
- Largest software registery for javascript
- Developed on *Node.js*
- Package pre installed with node.js
- Share code
- Free and open source
- Shared repositoreies are hosted on [www.npmjs.com](https://www.npmjs.com)

Note: 
- Nodejs
  - became popular because of event driven non io blocking model (single thread, callbacks)
  - generally you hear the names in the serve creation
  - many other applications were creation of the node platform (crazy thing :- NodeOS)

+++

## New to NPM?

- Install node [nodejs.com](https://nodejs.org)
- Add to the path varibale (optional)
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
Inital package.json can be created by the command `npm init`

---

## Installing dependencies

