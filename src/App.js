
import { useState } from 'react';
import MainSection from './MainSection';
import './App.css';
import SideNav from './SideNav';

function App() {
  const [active,setActive] = useState("INBOX")
  return (
    <div id='main'>
      <div id="h1">
      <h1>Add Todo Application</h1>
      </div>
      <header>
        <div className="row">
          <div className="col-md-2" id="nav" >
            <SideNav change={setActive}/>
          </div>
          <div className = "col-md-10"id="mai">
            <MainSection active={active}/>
          </div>
        </div>
    
      </header>
      
    </div>
  );
}

export default App;