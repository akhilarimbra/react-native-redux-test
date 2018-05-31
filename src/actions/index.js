import {
  SELECT_LIBRARY
} from './Types'

export const selectLibrary = libraryId => {
  return {
    type: SELECT_LIBRARY,
    payload: libraryId
  }
}
