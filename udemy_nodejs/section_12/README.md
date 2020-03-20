# :star: Creating an application fron zero
Through this class we created an application from zero.

<br/>

The idea is to build an application to deal with todos.

## Creating the application structure
So, first, we create the directories structure for NodeJS:
```
npm init 
```

<br/>

Then we install all dependencies to build an webserver:
```
npm install --save-dev express ejs body-parser mongoose

```

<br/>

After the installation of Angular in the application (with the quickstart package inside our public directory), we run the following command to make angular load ts and convert to js:
```
npm run build:watch
```
_So as we update TypeScript files, it automatically generates the js files_