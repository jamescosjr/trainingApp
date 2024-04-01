import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error("A variável de ambiente DATABASE_URL está indefinida.");
}

// Função para conectar ao banco de dados
const connectToDatabase = async () => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log('Connected to the database successfully');
  } catch (err: any) {
    console.error(`Error connecting to the database: ${err.message}`);
    process.exit(1); // Encerra a aplicação se não conseguir conectar ao banco de dados
  }
};

export default connectToDatabase;