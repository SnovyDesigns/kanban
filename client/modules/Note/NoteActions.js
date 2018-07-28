import callApi from '../../util/apiCaller';
import { lanes } from '../../util/schema';
import { normalize } from 'normalizr';

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

export function updateNoteRequest(note) {
  const { id: noteId } = note;

  return dispatch => {
    return callApi(`notes/${noteId}`, 'put', note).then(noteResp => {
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

export function deleteNoteRequest(note, laneId) {
  const { id: noteId, _id: mongoNoteId } = note;

  return dispatch => {
    return callApi(`notes/${noteId}`, 'delete', { laneId, mongoNoteId }).then(
      res => {
        dispatch(deleteNote(noteId, laneId));
      }
    );
  };
}

export function editNote(noteId) {
  return {
    type: EDIT_NOTE,
    id: noteId
  };
}
