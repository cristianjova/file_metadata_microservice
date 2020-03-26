const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  // Check if files is send
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file Uploaded' });
  }

  const file = req.files.upfile;

  res.json({
    fileName: file.name,
    fileType: file.mimetype,
    fileSize: file.size
  });
});

module.exports = router;
