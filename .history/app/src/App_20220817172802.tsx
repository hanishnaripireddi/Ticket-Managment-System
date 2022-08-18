import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react"
import Footer from './components/Footer';
import MainPage from './components/MainPage';


function App() {
  return (
    <div className="">
      <MainPage/>
      <Footer/>
    </div>
  );
}

export default App;