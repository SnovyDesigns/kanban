import uuid from 'uuid';

// Export Constants
export const CREATE_NOTE = 'CREATE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';

// Export Actions
export function createNote(note, laneId) {
  return {
    type: CREATE_NOTE,
    laneId,
    note: {
      id: uuid(),
      ...note
    }
  };
}

export function updateNote(noteId, note) {
  return {
    type: UPDATE_NOTE,
    id: noteId,
    note
  };
}

export function deleteNote(noteId, laneId) {
  return {
    type: DELETE_NOTE,
    noteId,
    laneId
  };
}

export function editNote(noteId) {
  return {
    type: EDIT_NOTE,
    id: noteId
  };
}
