import React, { useState } from 'react';

const ReactInfoModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={() => setIsOpen(true)}
      >
        About This CV
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">Built with React</h2>
            <p className="mb-4">
              This CV page was built using React, a popular JavaScript library for building user interfaces. It showcases modern web development practices and component-based architecture.
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ReactInfoModal;