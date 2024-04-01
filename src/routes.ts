import { Router } from 'express';
import TrainingModel, { Exercise } from './Training';

const router = Router();

// Criação de um treino
router.post('/trainings', async (req, res) => {
  try {
    const training = new TrainingModel(req.body);
    await training.save();
    res.status(201).json(training);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Listagem de todos os treinos
router.get('/trainings', async (req, res) => {
  try {
    const trainings = await TrainingModel.find();
    res.status(200).json(trainings);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Atualização de um treino
router.put('/trainings/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const updatedTraining = await TrainingModel.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    if (!updatedTraining) {
      return res.status(404).json({ message: 'Training not found' });
    }
    res.status(200).json(updatedTraining);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Exclusão de um treino
router.delete('/trainings/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTraining = await TrainingModel.findByIdAndDelete(id);
    if (!deletedTraining) {
      return res.status(404).json({ message: 'Training not found' });
    }
    res.status(200).json({ message: 'Training deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;