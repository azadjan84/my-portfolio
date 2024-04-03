

const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const PDFModel = require('./models/PDFModel');

const app = express();
const PORT = process.env.PORT || 3000;


const MONGO =  "mongodb+srv://azadjan84:Faridjan509@cluster0.b7xliki.mongodb.net/"
const connect = async ()=>{
    try{
        await mongoose.connect(MONGO)
        console.log("connect to db")
    }catch(error){
        console.log(error)
    }
}
// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});

const upload = multer({ storage: storage });

// Define API endpoints
app.post('/upload', upload.single('pdf'), async (req, res) => {
  try {
    const { originalname, path } = req.file;
    const pdf = new PDFModel({ originalname, path });
    await pdf.save();
    res.status(201).send('PDF uploaded successfully.');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/pdfs', async (req, res) => {
  try {
    const pdfs = await PDFModel.find();
    res.json(pdfs);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(PORT, () => {
    connect();
    console.log(`Server is running on port ${PORT}`);
  
});
