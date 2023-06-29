import React from 'react';
import './FirstPage.css';

function FirstPage() {
  function apple() {
    alert("function called");
  }

  return (
    <>
      <div className="App">
        <button onClick={apple}>Admin</button>
      </div>
      <div className="Ap">
        <button onClick={apple}>User</button>
      </div>
    </>
  );
}

export default FirstPage;