// components/Modal.js
import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ isOpen, onRequestClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onRequestClose}></div>
      <div className="bg-white p-6 rounded shadow-lg z-10">
        <button className="absolute top-0 right-0 mt-4 mr-4 text-gray-600" onClick={onRequestClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;
