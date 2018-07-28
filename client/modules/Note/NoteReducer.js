import {
  CREATE_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
  EDIT_NOTE
} from './NoteActions';

import { CREATE_NOTES } from '../Lane/LaneActions';

import omit from 'lodash/omit';

const initialState = {};

export default function notes(state = initialState, action) {
  switch (action.type) {
    case CREATE_NOTES:
      return { ...action.notes };

    case CREATE_NOTE:
    case UPDATE_NOTE:
      return { ...state, [action.note.id]: action.note };

    case EDIT_NOTE: {
      const note = { ...state[action.id], editing: true };
      return { ...state, [action.id]: note };
    }

    case DELETE_NOTE:
      return omit(state, action.noteId);

    default:
      return state;
  }
}
