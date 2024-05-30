import { useReducer, useEffect } from 'react';


const initialState = {
  selectedPhoto: null,
  likedPhotos: [],
  photoData: [],
  topicData: [],
  selectedTopic: null
}



export const ACTIONS = {
  SELECT_PHOTO: 'SELECT_PHOTO',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTOS_BY_TOPICS: 'SELECT_PHOTOS_BY_TOPICS',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  SET_SELECTED_TOPIC: 'SET_SELECTED_TOPIC'
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

          case ACTIONS.SET_SELECTED_TOPIC:
            return{
              ...state,
              selectedTopic: action.payload

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
    .catch(console.error());
}, []);

useEffect(() => { // fetching (GET) topic data using promises
  fetch('/api/topics')
    .then(res => res.json())
    .then((data) => dispatch({type:ACTIONS.SET_TOPIC_DATA, payload: data}))
    .catch(console.error());
}, []);

// useEffect(() => { // fetching (GET) topic data using promises
//  
// }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  const setLikedPhotos = (id) => dispatch({ type: ACTIONS.ADD_TO_FAV, payload: id });
  const setSelectedPhoto = (photo) =>
     dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
    

  const onSelectTopic = (topicId) => {
    fetch(`/api/topics/photos/${topicId}`)
        .then(res => res.json())
        .then((data) => {
          dispatch({type:ACTIONS.SET_PHOTO_DATA, payload: data})
          dispatch({type:ACTIONS.SET_SELECTED_TOPIC, payload: topicId})

        })
        //update selected topic
        
  }

  return { state, setLikedPhotos, setSelectedPhoto, onSelectTopic };
}