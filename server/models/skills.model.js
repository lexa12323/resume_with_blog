import mongoose from 'mongoose';

const skillsSchema = new mongoose.Schema({
  title: { type: String },
  content: { type: String },
  icons: [String],
});

const Skills = mongoose.model('Skills', skillsSchema)

export default Skills;