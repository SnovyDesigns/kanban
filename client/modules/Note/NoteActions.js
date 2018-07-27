import callApi from '../../util/apiCaller';

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
    note
  };
}

export function createNoteRequest(note, laneId) {
  return dispatch => {
    return callApi('notes', 'post', { note, laneId }).then(noteResp => {
      dispatch(createNote(noteResp, laneId));
    });
  };
}

export function updateNote(noteId, note) {
  return {
    type: UPDATE_NOTE,
    id: noteId,
    note
  };
}

export function updateNoteRequest(noteId, note) {
  return dispatch => {
    return callApi(`notes/:${noteId}`, 'put', note.task).then(noteResp => {
      dispatch(updateNote(noteId, noteResp));
    });
  };
}

export function deleteNote(noteId, laneId) {
  return {
    type: DELETE_NOTE,
    noteId,
    laneId
  };
}

export function deleteNoteRequest(noteId, laneId) {
  return dispatch => {
    return callApi(`notes/:${noteId}`, 'delete').then(res => {
      dispatch(deleteNote(noteId, laneId));
    });
  };
}

export function editNote(noteId) {
  return {
    type: EDIT_NOTE,
    id: noteId
  };
}
