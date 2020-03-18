# :star: NODE JS 
https://github.com/jcestariolli/learning/tree/master/udemy_nodejs

<br/>

## The Course
On Udemy - **Learn and Understand NodeJS**, by *Anthony Alicea*
* https://www.udemy.com/course/understand-nodejs/
* All practical exercises are distributed amongside the classes directories.

<br/>

## Useful Links
* **Download NodeJS**: https://nodejs.org/en/download/
* **Visual Studio Code**: https://code.visualstudio.com/
* **NodeJS API**: https://nodejs.org/docs/latest/api/
* **LibUV Documentation**: http://docs.libuv.org/
* **Semantic Versioning Specification**: https://semver.org/
* **NPM**: https://www.npmjs.com/
  * **Express (NPM Package)**: https://www.npmjs.com/package/express
  * **Moment (NPM Package)**:https://www.npmjs.com/package/moment

<br/>


## EXTRAS

### **npm init**
This command can be used to create a configuration inside the app dir / packages. The command used on this course was:
```
$ npm init
```
<br/>

And with this, the following configuration was made:
```
package name: (nodejs-test-app)
version: (1.0.0)
git repository:
keywords:
author:
license: (ISC)
About to write to C:\Users\jessi\Documents\learning\udemy_nodejs\section_8\class_69\package.json:

{
  "name": "nodejs-test-app",
  "version": "1.0.0",
  "description": "NodeJS Test App",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
}
```

<br/>

### npm install {package}
This command can be used to install a package on an app directory or similar. For example, the command used on this course to install moment was:
```
$ npm install moment --save
```

<br/>

The following parameters were used:
* `--save`: specifies the installed module inside the `package.json` generated file (by `npm init`)
 And this causes to add the the following dependencies on package.json:
 ```
 "dependencies": {
    "moment": "^2.24.0"
  }
 ```
 _It is important to understand that when we use the `^` symbol, we tell node that it can update minors and patches, but not major version on our depency. If we use `~`, then we tell node that it can only update patches of this dependency_
 
--------------------------------------------------
