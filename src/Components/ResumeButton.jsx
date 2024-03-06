import React, { useState } from 'react';

export default function ResumeButton() {
  const [showResume, setShowResume] = useState(false);

  const toggleResume = () => {
    setShowResume(!showResume);
  };

  return (
    <div>
      <button onClick={toggleResume} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {showResume ? 'Hide Resume' : 'Show Resume'}
      </button>
      {showResume && (
  <iframe src="https://drive.google.com/file/d/1WHfTgINlBYAJD-2o2wtaPDLT_01qTW2o/preview" width="100%" height="800px"></iframe>
)}

    </div>
  );
}
