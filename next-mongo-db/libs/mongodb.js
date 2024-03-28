import mongoose from 'mongoose';

const connectMongoDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://admin:admin@atlascluster.fcdvfdl.mongodb.net');

    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
  }
};

export default connectMongoDB;
