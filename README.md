# e-commerce-backend
A backend e-commerce application powered by a custom made Express.js REST API and MySQL database.

---
    
## Description
    
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

The E-Commerce backend is a server and database framework that provides all the necessary requirements to run a fully functioning ecommerce platform. With the use of a custom made REST API and MySQL database (through Sequelize's ORM library), user's can utilize GET, POST, PUT, and DELETE routes in order to modify/view items within the server database. Additionally, a seeds file is accessible for use if desired so that the user can easily sync large quanities of data within the node terminal. Nodemon 

A walkthrough video can be found [here](www.blah) which shows the full extent of the functionality of the application. Because the application has no front end visualization, the walkthrough video will be demostrated using Postman. 

---
    
## Table of Contents
    
* [Installation](#installation)
    
* [Usage](#usage)
    
* [License](#license)
    
* [Contribution](#contribution)
    
* [Tests](#tests)
    
* [Questions](#questions)
    
---
    
## Installation

There are four npm packages needed to run this application, while the fifth is only necessary for privacy purposes: 

1. mysql2
2. express 
3. sequelize
4. nodemon
5. dotenv

To install the necessary dependancies run the following command:
    
```
npm i
```

---
    
## Usage
    
Ensure node.js is installed on your device, and then run the following commands to:

1. seed your data
   
```
node seeds/index.js
```

2. start a nodemon server

```
nodemon server.js
```

---
    
## License

This project is licensed under the [MIT](https://opensource.org/licenses/MIT) license. Click the link for further information regarding this license. 

---

## Contributions
    
If you wish to contribute to this project, contact Jonathan Stoll via GitHub a [Jon's GitHub](https://github.com/jonathanstoll0603)

1. Ensure any install or build dependencies are removed before the end of the layer when doing a build.

2. Update the README.md with details of changes to the interface, this includes new environment variables, exposed ports, useful file locations and container parameters.

3. Increase the version numbers in any examples files and the README.md to the new version that this Pull Request would represent. 

---
    
## Tests
    
N/A
    
---
    
## Questions
    
For any questions, please contact me via email at Jonathanstoll0603@gmail.com, or GitHub [issues page](https://github.com/jonathanstoll0603/readme-generator/issues).
    
---   