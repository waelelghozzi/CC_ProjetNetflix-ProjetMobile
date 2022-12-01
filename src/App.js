import React from 'react';
import './App.css';
import './Normalise.css';
import Navigation from './Component/Navigation/Navigation';
import Billboard from './Component/Billboard/Billboard';
import Titles from './Component/Titles/Titles';
import Footer from './Component/Footer/Footer';
import {Routes,Route} from 'react-router-dom';  
function App() {
  return (

    <div className="App">
      <Routes>
       <Route index element={
        <>
          <Navigation/>
          <Billboard/>
          <Titles/>
          <Footer/>
         </>
      }>
        </Route>
      </Routes>
    
    </div>
  );
}

export default App;
