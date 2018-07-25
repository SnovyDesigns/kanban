import Lane from '../models/lane';
import Note from '../models/note';
import uuid from 'uuid';

export function addLane(req, res) {
  if (!req.body.name) {
    res.status(403).end();
  }

  const newLane = new Lane(req.body);

  newLane.notes = [];
  newLane.id = uuid();

  newLane.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json(saved);
  });
}

export function getLanes(req, res) {
  Lane.find()
    .then(lanes => res.json({ lanes }))
    .catch(err => res.status(500).send(err));
}

export function deleteLane(req, res) {
  Lane.findOne({ id: req.params.laneId })
    .then(lane => {
      if (lane.notes.length) {
        lane.notes.map(item => {
          Note.findOne({ id: item.id })
            .then(note => note.remove())
            .catch(err => res.status(500).send(err));
        });
      }
      lane.remove(() => {
        res.status(200).send({ sucess: true });
      });
    })
    .catch(err => res.status(500).send(err));
}

export function editLaneName(req, res) {
  const newName = req.body.name;

  if (newName === '') {
    res.status(400).end();
  }
  Lane.findOneAndUpdate(
    { id: req.params.laneId },
    { $set: { name: newName } },
    { new: true }
  )
    .then(lane => res.json(lane))
    .catch(err => res.status(500).send(err));
}
