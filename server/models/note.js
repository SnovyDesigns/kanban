import mongoose from 'mongoose';
const Schema = mongoose.Schema;
mongoose.plugin(schema => {
  schema.options.usePushEach = true;
});

const noteSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  task: {
    type: String,
    required: true
  }
});

export default mongoose.model('Note', noteSchema);
