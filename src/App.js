import './App.css';
import Sidebar from './Components/sidebar';
import Topbar from './Components/topbar';
import Teachers from './Components/Teachers';
import Createteachers from './Components/Createteachers';
import Viewdetail from './Components/Viewdetail';
import Editdetail from './Components/Editdetail';
import Students from './Components/Students'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Createuser from './Components/createuser';
import Userview from './Components/userview';
import Edit from './Components/edit';
import { UserProvider } from './Components/UserContext';
import { useState } from 'react';
import Studentsdetail from './Components/Studentsdetail';


function App() {
  
  const [users, setUsers] = useState([]);

  return (

    <BrowserRouter>
      <div id='wrapper'>
        <UserProvider value={{users, setUsers}}>
          <Sidebar />
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Topbar />
              <div class="container-fluid">
                <Routes>
                  <Route path="/teachers" element={<Teachers />} />
                  <Route path="/createteachers" element={<Createteachers />} />
                  <Route path="/view-detail/:id" element={<Viewdetail />} />
                   <Route path="/edit-detail/:id" element={<Editdetail />} />
                  <Route path="/students" element={<Students />} />
                  <Route path="/userscreate" element={<Createuser />} />
                  <Route path="/users-view/:id" element={<Userview />} />
                  <Route path="/users-edit/:id" element={<Edit />} />
                  <Route path="/studentsdetail" element={<Studentsdetail />} />
                </Routes>
              </div>
            </div>
          </div>
        </UserProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
