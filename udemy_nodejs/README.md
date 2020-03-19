# :star: Node JS

<br/>

## THE CLASSES:
All the classes are from the course on Udemy - **Learn and Understand NodeJS**, by *Anthony Alicea*
* https://www.udemy.com/course/understand-nodejs/
* All practical exercises are distributed amongside the classes directories.

<br/>

## IN THIS DOC:
* [Useful Links](#useful-links)
* Extras:
  * [npm init command](#npm-init)
  * [npm install comamnd](#npm-install)
  * [npm update command](#npm-update)
  * [npm - globally installed packages on this course](#npm-globaly-installed-packages)
  * [Using nodemon](#nodemon)
  * [Using express-generator](#express-generator)

<br/>

## **USEFUL LINKS**
* **Download NodeJS**: https://nodejs.org/en/download/
* **Visual Studio Code**: https://code.visualstudio.com/
* **NodeJS API**: https://nodejs.org/docs/latest/api/
* **LibUV Documentation**: http://docs.libuv.org/
* **Semantic Versioning Specification**: https://semver.org/
* **NPM**: https://www.npmjs.com/
  * **Nodemon(NPM Package)**: https://www.npmjs.com/package/nodemon
  * **Moment (NPM Package)**: https://www.npmjs.com/package/moment
  * **Express (NPM Package)**: https://www.npmjs.com/package/express
* **Nodemon**: https://nodemon.io/
* **Express Middleware**: https://expressjs.com/en/resources/middleware.html
* **EJS - Embedded JavaScript Template**: https://ejs.co/
* **Express Generator**: https://expressjs.com/pt-br/starter/generator.html

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

-----

### npm install
This command can be used to install a package on a directory, application configuration, or similar. 
By simple running the this command on the application directory, it will use the file `packages.json` to install any configured dependencies.
<br/>
#### Some arguments:
* `--save`: specifies that the module should be configured also in file _packages.json_, besides the module installation.
 Example:
```
$ npm install moment --save
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
 
* `--save-dev`: specifies that the module should be configured also in file _packages.json_, but only using the depency to development, not to run the application. That means that the module doesnt have to be in the server to run, only for development (as it is a development module)
 Example:
 ```
 $ npm install jasmine-code --save-dev
 ``` 
 With this command, node will add the the following development dependencies on package.json:
 ```
"devDependencies": {
  "jasmine-node": "^1.14.5"
}
 ```
 <br/>
 
 * `--g {package}`: that argument specifies that npm should install the module in a place that can be used globally
 Example:
 ```
 $ npm install -g nodemon
 ``` 
 With this command, npm will install the package `nodemon` the modules inside his own node_modules directory (were it is installed)
 For example, in my computer it was installed inside the path `C:\Users\jessi\AppData\Roaming\npm\node_modules\nodemon`, where I have my Node installed.
 
<br/>
 
-----
 
### **npm update**
This command is used to update the versions of the modules configured.
```
$ npm update
```

<br/>

### **npm globaly installed packages**
To execute the exercises, the following installs were made:
* `$ npm install -g nodemon`
* `$ npm install -g express-generator`

<br/>

-----

### **nodemon**
Nodemon is used to run NodeJS applications, and it gives the possibility to update files and instantly view the change on the running application (because it restarts the app).
The command line is formed like the following code:
```
$ nodemon {/application_path/} 
```

<br/>

-----

### **express-generator**
Express Generator gives us the ability to generate automatically an app structure.
The followinf command line is executed in the folder where we want to create the application:
```
$ express {application_name} 
```

<br/>

--------------------------------------------------
