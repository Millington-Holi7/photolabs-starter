import { useReducer, useEffect } from 'react';

// Initial state for the application
const initialState = {
  selectedPhoto: null,
  favouritePhotos: [],
  photoData: [],
  topicData: [],
  selectedTopic: null,
};

// Action types for the reducer
export const ACTIONS = {
  ADD_TO_FAV: 'ADD_TO_FAV',
  SELECT_PHOTO: 'SELECT_PHOTO',
  REMOVE_FROM_FAV: 'REMOVE_FROM_FAV',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SET_SELECTED_TOPIC: 'SET_SELECTED_TOPIC',
};

// Reducer function to handle state updates based on actions
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TO_FAV:
      return {
        ...state,
        favouritePhotos: [...state.favouritePhotos, action.payload],
      };

    case ACTIONS.REMOVE_FROM_FAV:
      return {
        ...state,
        favouritePhotos: [...action.payload],
      };

    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload,
      };

    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload,
      };

    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload,
      };

    case ACTIONS.SET_SELECTED_TOPIC:
      return {
        ...state,
        selectedTopic: action.payload,
      };

    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
}

// Custom hook to manage application data
export const useApplicationData = function () {
  // Fetch photo data when the component mounts
  useEffect(() => {
    fetch('/api/photos')
      .then((res) => res.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
      .catch(console.error);
  }, []);

  // Fetch topic data when the component mounts
  useEffect(() => {
    fetch('/api/topics')
      .then((res) => res.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
      .catch(console.error);
  }, []);

  // Fetch photos based on the selected topic
  const onSelectTopic = (topicId) => {
    fetch(`/api/topics/photos/${topicId}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
        dispatch({ type: ACTIONS.SET_SELECTED_TOPIC, payload: topicId });
      })
      .catch(console.error);
  };

  // Add or remove photos from the favourites array
  const setAddToFavouritePhotos = (id) => {
    const isLiked = state.favouritePhotos.includes(id);
    if (isLiked) {
      const copyOfLikePhotos = [...state.favouritePhotos].filter((photoId) => photoId !== id);
      dispatch({ type: ACTIONS.REMOVE_FROM_FAV, payload: copyOfLikePhotos }); // Remove photo from favourites array
      return;
    }
    dispatch({ type: ACTIONS.ADD_TO_FAV, payload: id }); // Add photo to favourites array
  };

  // Set the selected photo for the modal
  const setSelectedPhoto = (photo) => dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });

  // Initialize state and dispatcher using useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, setAddToFavouritePhotos, setSelectedPhoto, onSelectTopic};
};
