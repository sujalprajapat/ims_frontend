import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './dash/dashboard';
import Inquiry from './inquiry/inquiry';
import Branch from './branch/branch';
import Role from './roles/role';
import Course from './course/course';
import Ref from './ref/ref';
import Adminview from './admin/admin';
import Status from './status/status';
import Menu from './dash/menu';
import Add from './admin/add';
import Updateadmin from './admin/update';
import Addrole from './roles/addrole';
import Updaterole from './roles/updaterole';
import Addbranch from './branch/addbranch';
import Updatebranch from './branch/updatebranch';
import Addcourse from './course/addcourse';
import Updatecourse from './course/updatecourse';
import Addref from './ref/addref';
import Updateref from './ref/updateref';
import Addinquiry from './inquiry/addinquiry';
import Updateinquiry from './inquiry/updateinquiry';
import Addstatus from './status/addstatus';
import Updatestatus from './status/updatestatus';
import Admin from './login/admin';
import Button from './dash/button';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { check } from './Store/Counterslice/Counterslice';
function App() {

  let ck = useSelector((state) => state.counter.value)
  let dish = useDispatch();
  useEffect(() => {
    dish(check());
    console.log(ck);
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ck ? <Navigate to={'/dashboard'} /> : <Admin />}></Route>

        <Route path='/dashboard' element={ck ? <><Dashboard /><Menu /><Button /></> : <Navigate to={'/'} />}></Route>
        <Route path='/admin' element={ck ?<><Adminview /><Button /></> : <Navigate to={'/'} />}></Route>
        <Route path='/inquiry' element={ck ?<><Inquiry /><Button /></> : <Navigate to={'/'} />}></Route>
        <Route path='/branch' element={ck ?<><Branch /><Button /></> : <Navigate to={'/'} />}></Route>
        <Route path='/role' element={ck ?<><Role /><Button /></> : <Navigate to={'/'} />}></Route>
        <Route path='/course' element={ck ?<><Course /><Button /></> : <Navigate to={'/'} />}></Route>
        <Route path='/ref' element={ck ?<><Ref /><Button /></> : <Navigate to={'/'} />}></Route>
        <Route path='/status' element={ck ?<><Status /><Button /></> : <Navigate to={'/'} />}></Route>
        <Route path='/admin/add' element={ck ?<><Add /><Menu /><Button /></> : <Navigate to={'/'} />}></Route>
        <Route path='/admin/update/:id' element={ck ?<><Updateadmin /><Menu /><Button /></> : <Navigate to={'/'} />}></Route>
        <Route path='/role/add' element={ck ?<><Addrole /><Menu /><Button /></> : <Navigate to={'/'} />}></Route>
        <Route path='/role/update/:id' element={ck ?<><Updaterole /><Menu /><Button /></> : <Navigate to={'/'} />}></Route>
        <Route path='/branch/add' element={ck ?<><Addbranch /><Menu /><Button /></> : <Navigate to={'/'} />}></Route>
        <Route path='/branch/update/:id' element={ck ?<><Updatebranch /><Menu /><Button /></> : <Navigate to={'/'} />}></Route>
        <Route path='/course/add' element={ck ?<><Addcourse /><Menu /><Button /></> : <Navigate to={'/'} />}></Route>
        <Route path='/course/update/:id' element={ck ?<><Updatecourse /><Menu /><Button /></> : <Navigate to={'/'} />}></Route>
        <Route path='/ref/add' element={ck ?<><Addref /><Menu /><Button /></> : <Navigate to={'/'} />}></Route>
        <Route path='/ref/update/:id' element={ck ?<><Updateref /><Menu /><Button /></> : <Navigate to={'/'} />}></Route>
        <Route path='/inquiry/add' element={ck ?<><Addinquiry /><Menu /><Button /></> : <Navigate to={'/'} />}></Route>
        <Route path='/inquiry/update/:id' element={ck ?<><Updateinquiry /><Menu /><Button /></> : <Navigate to={'/'} />}></Route>
        <Route path='/status/add' element={ck ?<><Addstatus /><Menu /><Button /></> : <Navigate to={'/'} />}></Route>
        <Route path='/status/update/:id' element={ck ?<><Updatestatus /><Menu /><Button /></> : <Navigate to={'/'} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
