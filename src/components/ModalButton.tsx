import React, { useState } from 'react';

const App: React.FC = () => {
  const [content, setContent] = useState('Conteúdo inicial');

  const handleClick = () => {
    setContent('Conteúdo modificado');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 bg-white p-4 border-r">
        <button
          onClick={handleClick}
          className="px-4 py-2 text-white bg-blue-500 rounded"
        >
          Modificar Conteúdo
        </button>
      </div>
      <main className="flex items-center justify-center flex-grow">
        <div className="p-6 bg-white rounded shadow-xl">
          <h2 className="text-2xl mb-4">{content}</h2>
        </div>
      </main>
    </div>
  );
};

export default App;
