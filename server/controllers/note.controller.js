import Note from '../models/note';
import Lane from '../models/lane';
import uuid from 'uuid';

export function addNote(req, res) {
  const { note, laneId } = req.body;

  if (!note || !note.task || !laneId) {
    res.status(400).end();
  }

  const newNote = new Note({
    task: note.task
  });
  newNote.id = uuid();

  newNote.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    Lane.findOne({ id: laneId })
      .then(lane => {
        lane.notes.push(newNote);
        return lane.save();
      })
      .then(() => res.json(saved));
  });
}

export function deleteNote(req, res) {
  const { laneId, mongoNoteId } = req.body;

  Lane.findOne({ id: laneId }).then(lane => {
    const updatedNotes = lane.notes.filter(
      note => note._id.toString() !== mongoNoteId
    );
    lane.notes = updatedNotes;

    return lane.save();
  });

  Note.findOne({ id: req.params.noteId })
    .then(note => {
      note.remove(() => {
        res.status(200).send({ msg: 'Note deleted' });
      });
    })
    .catch(err => res.status(500).send(err));
}

export function editNote(req, res) {
  const newTask = req.body.task;

  if (newTask === '') {
    res.status(400).end();
  }
  Note.findOneAndUpdate(
    { id: req.params.noteId },
    { $set: { task: newTask } },
    { new: true }
  )
    .then(note => res.json(note))
    .catch(err => res.status(500).send(err));
}
