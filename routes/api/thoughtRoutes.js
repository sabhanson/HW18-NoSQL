const { Thought, User } = require("../../models");

const router = require("express").Router();

// get all thoughts
router.get("/", (req, res) => {
  Thought.find()
    .populate("reactions")
    .then((thoughts) => res.status(200).json(thoughts))
    .catch((err) => {
      console.error({ message: err });
      return res.status(500).json(err);
    });
});

// get single thought by id
router.get("/:thoughtId", (req, res) => {
  Thought.findOne({ _id: req.params.thoughtId })
    .populate("reactions")
    .select("-__v")
    .then((thought) => {
      if (!thought) {
        res.status(404).json({ message: "oops, thought does not exist" });
        return;
      }
      res.status(200).json(thought);
    })
    .catch((err) => {
      console.error({ message: err });
      return res.status(500).json(err);
    });
});

// create a new thought
router.post("/", (req, res) => {
  Thought.create(req.body)
    .then((thought) => {
      return User.findOneAndUpdate(
        { username: req.body.username },
        { $push: { thoughts: thought._id } },
        { runValidators: true, new: true }
      );
    })
    .then((newThought) => {
      if (!newThought) {
        res.status(404).json({ message: "oops, something went wrong" });
        return;
      }
      res.status(200).json(newThought);
    })
    .catch((err) => {
      console.error({ message: err });
      return res.status(500).json(err);
    });
});

// update an existing thought
router.put("/:thoughtId", (req, res) => {
  Thought.findOneAndUpdate({ _id: req.params.thoughtId }, req.body, {
    runValidators: true,
    new: true,
  })
    .then((thought) => {
      if (!thought) {
        res.status(404).json({ message: "oops, thought does not exist" });
        return;
      }
      res.status(200).json(thought);
    })
    .catch((err) => {
      console.error({ message: err });
      return res.status(500).json(err);
    });
});

// delete an existing thought
router.delete("/:thoughtId", (req, res) => {
  Thought.findOneAndDelete({ _id: req.params.thoughtId })
    .then((thought) => {
      if (!thought) {
        res.status(404).json({ message: "oops, thought does not exist" });
        return;
      }
      res.status(200).json(thought);
    })
    .catch((err) => {
      console.error({ message: err });
      return res.status(500).json(err);
    });
});

// add a new reaction
router.post("/:thoughtId/reactions", (req, res) => {
  Thought.findOneAndUpdate(
    { _id: req.params.thoughtId },
    { $push: { reactions: req.body } },
    { runValidators: true, new: true }
  )
    .then((thought) => {
      if (!thought) {
        res.status(404).json({ message: "oops, thought does not exist" });
        return;
      }
      res.status(200).json(thought);
    })
    .catch((err) => {
      console.error({ message: err });
      return res.status(500).json(err);
    });
});

// delete an existing reaction
router.delete("/:thoughtId/reactions/:reactionId", (req, res) => {
  Thought.findOneAndUpdate(
    { _id: req.params.thoughtId },
    { $pull: { reactions: { reactionId: req.params.reactionId } } },
    { new: true }
  )
    .then((thought) => {
      if (!thought) {
        res.status(404).json({ message: "oops, thought does not exist" });
        return;
      }
      res.status(200).json(thought);
    })
    .catch((err) => {
      console.error({ message: err });
      return res.status(500).json(err);
    });
});

module.exports = router;
