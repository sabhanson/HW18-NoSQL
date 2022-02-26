# NoSQL - Social Network API [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
I built this Social Network API using the [Express](https://www.npmjs.com/package/express), [Moment](https://www.npmjs.com/package/moment), and [Mongoose](https://www.npmjs.com/package/mongoose) packages to connect to a MongoDB database.  
It is especially useful for a social media application to organize their `Users` and `Thoughts`, as well as allow for users to have `Friends` and leave `Reactions` on fellow users' thoughts.  
It's quick and easy to follow the API routes to `Create`, `Read`, `Update`, and `Delete` data. 


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Badges](#badges)
- [Questions](#questions)
- [Credits](#credits)

## Installation
      
[Watch this video for a step-by-step demonstration, including installation and usage instructions](https://youtu.be/IOMlREueVHs)

OR   
- Clone [this repo](https://github.com/sabhanson/HW18-NoSQL-SocialNetworkAPI) from my Github to your local machine
- Open VSCode and run the following command in the built-in terminal to install the necessary node packages
``` 
npm install
```
- Start the server.js in the integrated terminal by running the following command
```
node server.js
```
(Alternatively, you can run `nodemon server.js` if you have the [Nodemon package](https://www.npmjs.com/package/nodemon) installed)
- Congrats, you have successfully launched the server and are ready to explore the routes in [Insomnia](https://insomnia.rest/) (or any equivalent API platform/client) ✅

## Usage
Follow the [Installation](#installation) instructions above then use [Insomnia](https://insomnia.rest/) to explore the following routes


### User and Friend Routes
![GIF of User/Friend API Routes](assets/UserFriend-Routes.gif)     
There are seven routes to handle various data in the User model
- GET all Users (returns all users in the database)
- GET a User by ID (returns a single user that matches the requested id)
- POST a new User (creates a new User, takes in certain parameters)
- PUT to update a User by ID (updates the specified user, takes in certain parameters)
- DELETE to delete a User by ID (deletes the specified user from the database)
- PUT to add a friend to a User by ID (adds a specified friend to a specified user's friend array)
- DELETE to delete a friend from a User by ID (deletes a specified friend from a specified user's friend array)


### Thought and Reaction Routes
![GIF of Thought/Reaction API Routes](assets/ThoughtsReactions-Routes.gif)     
There are seven routes to handle various data in the Thought model
- GET all Thoughts (returns all thoughts in the database)
- GET a Thought by ID (returns a single thought that matches the requested id)
- POST a new Thought (creates a new thought, takes in certain parameters)
- PUT to update a Thought by ID (updates the specified thought, takes in certain parameters)
- DELETE to delete a Thought by ID (deletes the specified thought from the database)
- PUT to add a Reaction to a Thought by ID (adds a reaction to a specified thought's reaction array)
- DELETE to delete a Reaction from a Thought by ID (deletes a reaction from the specified thought's reaction array)



## License
<p>
MIT License

  Copyright &copy; 2022 
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

  </p>

## Contributing
To contribute, please contact me via [Github](https://www.github.com/sabhanson) or [email](mailto:sabhanson7@gmail.com)

## Tests
Testing was all self-done in the terminal.

## Badges
![GitHub followers](https://img.shields.io/github/followers/sabhanson?style=social)

## Questions
Contact me via [Github](https://www.github.com/sabhanson) or [email](mailto:sabhanson7@gmail.com)

## Credits
Thanks to [Isaac Petersen](https://www.github.com/idpetersen) for always being willing to collab and work through problems.


