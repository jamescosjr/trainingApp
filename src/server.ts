import express from 'express';
import connectToDatabase from './database'; // Ajuste o caminho de importação conforme necessário
import trainingRoutes from './routes';

const app = express();

app.use(express.json());

// Conectar ao banco de dados
connectToDatabase()
  .then(() => {
    console.log('Database connection established');
    // Definir as rotas após a conexão bem-sucedida
    app.use('/api', trainingRoutes);

    // Iniciar o servidor
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => {
    console.error('Failed to connect to the database', error);
    process.exit(1); // Encerra a aplicação se a conexão falhar
  });