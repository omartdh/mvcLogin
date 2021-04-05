const router = require('express').Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const comment1 = await Comment.create({
      ...req.body,
      userId: req.session.userId,
    });
    res.json(comment1);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
