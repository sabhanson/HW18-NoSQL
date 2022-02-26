const { User } = require('../../models')
const router = require('express').Router();



// get all users
router.get('/', (req,res) =>{
    User.find()
    .then((users)=> res.status(200).json(users))
    .catch((err)=> {
        console.error({message: err});
        return res.status(500).json(err);
    })
})


// get single user by id

// create a new user

// update an existing user

// delete an existing user

// add a new friend

// delete an existing friend



module.exports = router;
