const mongoose = require('mongoose');

const pdfSchema = new mongoose.Schema({
  originalname: String,
  path: String
});

const PDFModel = mongoose.model('PDF', pdfSchema);

module.exports = PDFModel;