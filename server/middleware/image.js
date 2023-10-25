const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const app=express();
const cors = require('cors');


app.use(cors())

const Image = mongoose.model('Image', {
  data: Buffer,
  contentType: String,
});

// Configure Multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/upload', upload.single('image'), async (req, res) => {
try {
    if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
    }

    const image = new Image({
    data: req.file.buffer,
    contentType: req.file.mimetype,
    });

    const savedImage = await image.save();

    res.status(201).json({ message: 'Image uploaded successfully', image: savedImage });
} catch (error) {
    res.status(500).json({ error: 'Internal server error' });
}
});

app.get('/image/:imageId', async (req, res) => {
try {
    const image = await Image.findById(req.params.imageId);

    if (!image) {
    return res.status(404).json({ error: 'Image not found' });
    }

    res.set('Content-Type', image.contentType);
    res.send(image.data);
} catch (error) {
    res.status(500).json({ error: 'Internal server error' });
}
  });
  
module.exports = app;