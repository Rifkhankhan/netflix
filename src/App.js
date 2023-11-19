import logo from './logo.svg';
import { BrowserRouter, Outlet, Route, Router, Routes } from 'react-router-dom';
import Routers from './routers/Routers'

import './App.css';
import Topbar from './Components/topbar/Topbar';
import { useEffect, useState } from 'react';
import RightSideCardModel from './Components/RightSideCardModel/RightSideCardModel';

function App() {
	const [searchItems,setSearchItems] = useState()
  const [model,setModel] = useState(false)
  useEffect(() => {
    if(model) {
      
      document.documentElement.style.overflow = 'hidden';
      document.body.scroll = "no";
    }
    else{
      document.documentElement.style.overflow = 'scroll';
      document.body.scroll = "yes";
    }

    setModel(model)

  },[model])

  return (
    <div className="App">
      <BrowserRouter>
          <Topbar setModel={setModel} setSearchItems={setSearchItems}/>
          <Routers searchItems={searchItems}/>
          {/* <Outlet /> */}
        <RightSideCardModel model={model} setModel={setModel} />
      </BrowserRouter>

    </div>
  );
}

export default App;
