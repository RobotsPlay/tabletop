import React from 'react';
import './App.css';

import TableView from './components/TableView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tabletop</h1>
      </header>

      <main className="view-set">
        <div className="view-pane table-view">
          <TableView />
        </div>

        <div className="view-pane tool-bar">

        </div>
      </main>
    </div>
  );
}

export default App;
