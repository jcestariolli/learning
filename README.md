# learning
Repository to learn and practice, by Jessica Cestariolli 
<br/><br/>

## Courses
<br/><br/>

### NODE JS
https://github.com/jcestariolli/learning/tree/master/udemy_nodejs
<br/>

#### The Course
On Udemy - **Learn and Understand NodeJS**, by *Anthony Alicea*
* https://www.udemy.com/course/understand-nodejs/
* All practical exercises are distributed amongside the classes directories.

#### Useful Links
* **Download NodeJS**: https://nodejs.org/en/download/
* **Visual Studio Code**: https://code.visualstudio.com/
* **NodeJS API**: https://nodejs.org/docs/latest/api/
* **LibUV Documentation**: http://docs.libuv.org/
* **Semantic Versioning Specification**: https://semver.org/
* **NPM**: https://www.npmjs.com/
  * **Express (NPM Package)**: https://www.npmjs.com/package/express
  * **Moment (NPM Package)**:https://www.npmjs.com/package/moment



--------------------------------------------------
<br/><br/>
#### EXTRAS
<br/>

##### **npm init**
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

<br/><br/>

##### npm install {package}
<br/>
This command can be used to install a package on an app directory or similar. For example, the command used on this course to install moment was:
```
$ npm install moment --save
```
<br/>
The following parameters were used:
* `--save`: specifies the installed module inside the `package.json` generated file [by `npm init`]


--------------------------------------------------
