const { User } = require("../../models");
const router = require("express").Router();

// get all users
router.get("/", (req, res) => {
  User.find()
    .then((users) => res.status(200).json(users))
    .catch((err) => {
      console.error({ message: err });
      return res.status(500).json(err);
    });
});

// get single user by id
router.get("/:userId", (req, res) => {
  User.findOne({ _id: req.params.userId })
    .populate("thoughts")
    .populate("friends")
    .select("-__v")
    .then((user) => {
      if (!user) {
        res.status(404).json({ message: "oops, user does not exist" });
        return;
      }
      res.status(200).json(user);
    })
    .catch((err) => {
      console.error({ message: err });
      return res.status(500).json(err);
    });
});

// create a new user
router.post("/", (req, res) => {
  User.create(req.body)
    .then((users) => res.status(200).json(users))
    .catch((err) => {
      console.error({ message: err });
      return res.status(500).json(err);
    });
});

// update an existing user
router.put("/:userId", (req, res) => {
  User.findOneAndUpdate({ _id: req.params.userId }, req.body, {
    runValidators: true,
    new: true,
  })
    .then((user) => {
      if (!user) {
        res.status(404).json({ message: "oops, user does not exist" });
        return;
      }
      res.status(200).json(user);
    })
    .catch((err) => {
      console.error({ message: err });
      return res.status(500).json(err);
    });
});

// delete an existing user
router.delete('/:userId', (req,res) => {
    User.findOneAndDelete({_id: req.params.userId})
    .then((user) => {
        if (!user) {
            res.status(404).json({ message: "oops,user does not exist"})
            return;
        }
        res.status(200).json(user)
    })
    .catch((err)=> {
        console.error({message: err});
        return res.status(500).json(err);
    })
})

// add a new friend

// delete an existing friend

module.exports = router;
