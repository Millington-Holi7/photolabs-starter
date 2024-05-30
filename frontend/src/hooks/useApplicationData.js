import { useReducer, useEffect } from 'react';


const initialState = {
  selectedPhoto: null,
  likedPhotos: [],
  photoData: [],
  topicData: []
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

    case ACTIONS.ADD_TO_FAV:
      const id = action.payload;
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

      case ACTIONS.SET_PHOTO_DATA:
        return {
          ...state,
          photoData: action.payload
        }

        case ACTIONS.SET_TOPIC_DATA:
          return {
            ...state,
            topicData: action.payload
          }

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }

}
export const useApplicationData = function () {

useEffect(() => { // fetching (GET) photo data using promises
  fetch('/api/photos')
    .then(res => res.json())
    .then((data) => dispatch({type:ACTIONS.SET_PHOTO_DATA, payload: data}))
}, []);

useEffect(() => { // fetching (GET) topic data using promises
  fetch('/api/topics')
    .then(res => res.json())
    .then((data) => dispatch({type:ACTIONS.SET_TOPIC_DATA, payload: data}))
}, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  const setLikedPhotos = (id) => dispatch({ type: ACTIONS.ADD_TO_FAV, payload: id });
  const setSelectedPhoto = (photo) => dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });

  return { state, setLikedPhotos, setSelectedPhoto };
}