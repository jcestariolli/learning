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

### npm install
This command can be used to install a package on a directory, application configuration, or similar. 
By simple running the this command on the application directory, it will use the file `packages.json` to install any configured dependencies.
<br/>
#### Some arguments:
* `--save`: specifies that the module should be configured also in file _packages.json_, besides the module installation.
 Example:
```
npm install moment --save
```
With this command, npm will add the following dependencies on package.json:
```
"dependencies": {
  "moment": "^2.24.0"
}
```
<br/>

> _It is important to understand that when we use the `^` symbol, we tell node that it can update minors and patches, but not major version on our dependency._<br/><br/>
> _If we use `~`, then we tell node that it can only update patches of this dependency._

<br/>
 
* `--save-dev`: specifies that the module should be configured also in file _packages.json_, but only using the dependy to development, not to run the application. 
 Example:
 ```
 npm install jasmine-code --save-dev
 ``` 
 With this command, node will add the the following development dependencies on package.json:
 ```
"devDependencies": {
  "jasmine-node": "^1.14.5"
}
 ```
 <br/>
 
--------------------------------------------------
