import { useReducer, useState } from 'react';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

const initialState = {
  selectedPhoto: null,
  likedPhotos: [],
  photos,
  topics
}

export const ACTIONS = {
  TOGGLE_LIKE: 'TOGGLE_LIKE',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

function reducer(state, action) {
  switch (action.type) {

    case ACTIONS.TOGGLE_LIKE:
      const id  = action.payload;
      const isLiked = state.likedPhotos.includes(id);
      const updatedLikedPhotos = isLiked
        ? state.likedPhotos.filter(photoId => photoId !== id)
        : [...state.likedPhotos, id];
      return {
        ...state,
        likedPhotos: updatedLikedPhotos
      };

    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload
      };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }

}
export const useApplicationData = function () {

  const [state, dispatch] = useReducer(reducer, initialState);

  const setLikedPhotos = (id) => dispatch({ type: ACTIONS.TOGGLE_LIKE, payload:  id  });
  const setSelectedPhoto = (photo) => dispatch({ type: ACTIONS.SELECT_PHOTO, payload:  photo  });

  return { state, setLikedPhotos, setSelectedPhoto };
}