import React from 'react';

function Modal( { show, onClose, imageUrl } ) {
  if (!show) {
    return null;
  }

  return (
    <div className = "modal" onClick = { onClose }>
      <div className = "modal-content" onClick = { e => e.stopPropagation() }>
        <span className = "close" onClick = { onClose }> &times; </span>
        <img className = "modal-image" src = { imageUrl } />
      </div>
    </div>
  );
}

export default Modal;
