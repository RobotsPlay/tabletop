import React, { useState } from 'react';
import './App.css';

import SceneTree from './utilities/SceneTree';
import SceneTreeView from './components/SceneTreeView';
import TableView from './components/TableView';

function App() {
  const [sceneTree]  = useState(new SceneTree());

  sceneTree.addLayer({
    name: 'Base Layer',
    backgroundImage: '/img/texture.jpg',
    width: 3,
    height: 2
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tabletop</h1>
      </header>

      <main className="view-set">
        <div className="view-pane table-view">
          <TableView scene_tree={sceneTree} />
        </div>

        <div className="view-pane tool-bar">
          <SceneTreeView scene_tree={sceneTree} />
        </div>
      </main>
    </div>
  );
}

export default App;
