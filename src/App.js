import React from 'react';

import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Board from './components/Board';
import Foot from './components/Foot';



function App() {
  return (
   
   <DndProvider backend={HTML5Backend}>
          <Header />

          <Board />

          <GlobalStyle />
          <Foot />

      </DndProvider >
    
      );
}
          
export default App;
