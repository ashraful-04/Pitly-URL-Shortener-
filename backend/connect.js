const mongoose = require('mongoose');

async function connectToMongoDB(url) {
  return mongoose.connect(url)
    .then(() => console.log('✅ MongoDB Atlas connected...'))
    .catch((err) => console.log('❌ MongoDB connection failed:', err));
}

module.exports = { connectToMongoDB };
