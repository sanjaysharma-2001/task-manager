# Airtribe
PS D:\NODEJS> md task-manager

PS D:\NODEJS> cd .\task-manager\

PS D:\NODEJS\task-manager> code . 

PS D:\NODEJS\task-manager> npm init

This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (task-manager)
version: (1.0.0)
description: Task Manager
entry point: (index.js) app.js
test command:
git repository: https://github.com/sanjaysharma-2001/Airtribe
keywords:
author: Sanjay
license: (ISC)
About to write to D:\NODEJS\task-manager\package.json:

{
  "name": "task-manager",
  "version": "1.0.0",
  "description": "Task Manager",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/sanjaysharma-2001/Airtribe.git"
  },
  "author": "Sanjay",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/sanjaysharma-2001/Airtribe/issues"
  },
  "homepage": "https://github.com/sanjaysharma-2001/Airtribe#readme"
}


Is this OK? (yes) yes

PS D:\NODEJS\task-manager> npm install --save-dev express


added 63 packages, and audited 64 packages in 5s

11 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

PS D:\NODEJS\task-manager>

PS D:\NODEJS\task-manager> node .\app.js 

Started the server
