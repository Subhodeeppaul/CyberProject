import React, { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';
import FirstPage from './FirstPage';

const Start = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {    
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="app">
      {loading ? <LoadingScreen /> : <FirstPage />}
      
    </div>
  );
};

export default Start;
