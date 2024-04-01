import mongoose, { Document, Schema } from 'mongoose';

export interface Exercise {
  name: string;
  load: number; // Carga
  sets: number; // Quantidade de séries
  repetitions: number; // Repetições por série
}

interface Training extends Document {
  title: string;
  exercises: Exercise[];
}

const exerciseSchema = new Schema<Exercise>({
  name: { type: String, required: true },
  load: { type: Number, required: true },
  sets: { type: Number, required: true },
  repetitions: { type: Number, required: true },
});

const trainingSchema = new Schema<Training>({
  title: { type: String, required: true },
  exercises: [exerciseSchema],
});

const TrainingModel = mongoose.model<Training>('Training', trainingSchema);

export default TrainingModel;