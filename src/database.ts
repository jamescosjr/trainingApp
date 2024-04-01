import mongoose from 'mongoose';

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error("A variável de ambiente DATABASE_URL está indefinida.");
}


const connectToDatabase = async () => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log('Connected to the database successfully');
  } catch (err: any) {
    console.error(`Error connecting to the database: ${err.message}`);
    process.exit(1);
  }
};

export default connectToDatabase;