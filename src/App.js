import './App.css';
import {useState} from 'react';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';

function App() {

  let data={
    earningsMonthly:"4,00,000",
    earningsAnnual:"48,00,000",
    task:20,
    pendingRequest:18
  }
  const [value,setValue] = useState()
  return <>
      <div id='wrapper'>
          <Sidebar/>
          <h1>{value}</h1>
          <Dashboard data={{data,setValue}}/>

          
      </div>
  </>
}

export default App;