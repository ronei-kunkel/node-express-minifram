# node-express-template
MVC template architecture with some personal preferences to run in heroku.

>Ok, but, how use it?

You have to know how it works before working with.

First things first ¯\\\_(ツ)\_/¯

When i made it, i think:
>i need one file to centralize all files of model, one file to centralize all files of view and one file to centralize all files of controllers, and routes, obviously, wich have link to all others.

## Considerations
The `package.json` file are used to increment packages to use in your app.

The `Procfile` file is used to heroku know what do when run the buildpack.

## Structure
### The app.js file
The `app.js` is the entry point for all things. Here the magic happens and you don't need to change nothing to work.

Here have the instance of express and some configurations to run it.

The app variable setting and use the public folder to a public resources, set the views path and the engine to render them, use the route and, finally, listen the port of you prod or local env.

### The route folder
Here have one file, the `route.js`, and some folders. Each folder have an file are represent a family of routes of application that are registered and used in file with the same name inside the folder.

### The controller folder
The `controller.js` into controller folder only import all the controllers of modules. Basicly it centralize files to controllers of modules.

### The model folder
The `model.js` into model folder, only import the model of each model and export them, like controller file into controller folder.

### The view folder
The view have less organization because is more variable, but the files inside of them represent the pages that the site have. Inside it, have too two folders, components and template. The idea for this folder is that it is used for components of pages, like a button or radio button group. The idea of the template folder is it is used to locate repetitive snippets, like the start of the html to the body tag.

### The public folder
Are used to put all of public contents, like images, sylesheets and basic javascript codes, never the logic of project.

>Ok, now you take the logic to use it. But i'll show how create more things besides of the modules that already exists.

## How to
The flow of creations are:
1. model
2. view
3. controller
4. route

### Create a new model
1. Crate new folder inside route folder with name of group of routes, like `home`.
2. Create a js file with the same name in folder newly created, like `home.js`.
3. In the `home.js` you need make functions with return of json data and export the functions:
```javascript
// set the data of i need in page
const dataHomePage = () => {
    return {titulo: 'Home page', h1: 'Home Page'}
}

// export the function
module.exports = {
    dataHomePage
}
```
4. Finally, you need register this new model file in `model.js` file, like this:
```javascript
// import the data of modules
const home = require('./home/home')

// export the data of modules
module.exports = {
    home
}
```

### Create a new view
1. In view folder you need to create the content html file.
2. Need to include the template of header and footer and between of this includes you may create the code of module.
```html
<!-- inport the header template -->
<%- include('./template/header.ejs') %>

    <!-- content of page -->
    <h1><%= h1 %></h1>

<!-- import the footer template -->
<%- include('./template/footer.ejs') %>
```
3. If you need import more css or js files to your modules you may create more link and script tags in header and footer files respectively.

### Create a new controller
1. You need create a new folder inside of controller folder, like `home`.
2. Create a js file inside this new folder with the same name.
3. In this file, in this case, `home.js` you need import the model, if you have, then if you need render a page you need create an function to do this and finally export this function, like this:
```javascript
// import models
const model = require('../../model/model')

// functions of module
const homePage = (req,res) => {
    res.render('home', model.home.dataHomePage())
}
    
// export functions
module.exports = {
    homePage
}
```
4. Finally, you need import and register this new controller in `controller.js` file:
```javascript
// import controllers
const home = require('./home/home')

// export controllers
module.exports = {
    home
}
```

### Create new route
1. Crate new folder inside route folder with name of group of routes, like `home`.
2. Create a js file with the same name in folder newly created, like `home.js`.
3. In this file, you need import express and instanciate the Router
4. Import the `controller.js` file
5. Define the family routes of your application and export it:
```javascript
// import express
const express = require('express')

// instanciate the Router
const router = express.Router()

// import controllers
const controller = require('../../controller/controller')

// routes and methods for family
router.get('/home',  controller.home.homePage)

// export the instance with routes
module.exports = router
```
6. Finally you need import and register the route in `route.js` file:
```javascript
// import express
const express = require('express')

// instanciate the Router
const router = express.Router()

// import route families
const home_routes = require('./home/home')

// register use
router
    .use(home_routes)

// export the router
module.exports = router
```

## Final considerations
- There may be changes in the structure in past of the time, but will be documentated here.
- Sorry for any writing or language errors.
- Thanks for use or improvements XD.