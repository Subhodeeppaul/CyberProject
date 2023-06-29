import React, { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';
import FirstPage from './FirstPage';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to show the loading screen
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the delay time as needed
  }, []);

  return (
    <div className="app">
      {loading ? <LoadingScreen /> : <FirstPage />}
      {/* Render your main content here */}
    </div>
  );
};

export default App;
