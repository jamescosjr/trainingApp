import express from 'express';
import connectToDatabase from './database';
import trainingRoutes from './routes';

const app = express();

app.use(express.json());


connectToDatabase()
  .then(() => {
    console.log('Database connection established');
    
    app.use('/api', trainingRoutes);

    
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => {
    console.error('Failed to connect to the database', error);
    process.exit(1);
  });