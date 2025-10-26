import React from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.title = "St.Francis of Assisi Church, Athipalayam Pirivu, Ganapathy, Coimbatore";
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>St. Francis of Assisi Church</h1>
        <p>Welcome to our parish website</p>
      </header>
    </div>
  );
}

export default App;
