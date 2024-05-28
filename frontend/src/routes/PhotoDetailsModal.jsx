import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({displaymodal, setDisplayModal}) => {
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => setDisplayModal(null)}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {displaymodal}
    </div>
  )
};

export default PhotoDetailsModal;
