import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './dash/dashboard';
import Inquiry from './dash/inquiry';
import Branch from './dash/branch';
import Role from './dash/role';
import Course from './dash/course';
import Menu from './dash/menu';
import Add from './dash/add';
import Updateadmin from './dash/update'; 
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
import Ref from './dash/ref';
import Status from './dash/status';
import Adminview from './dash/admin';
import Button from './dash/button';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { check } from './Store/Counterslice/Counterslice';
function App() {

  let ck = useSelector((state)=>state.counter.value)
  let dish = useDispatch();
  useEffect(()=>{
    dish(check());
    console.log(ck);
  },[])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ck ? <Navigate to={'/dashboard'}/> : <Admin/>}></Route> 
        
        <Route path='/dashboard' element={ck ? <><Dashboard/><Menu/><Button/></>: <Navigate to={'/'}/>}></Route>
        {/* ck ? <><Dashboard/><Menu/></>: <Navigate to={'/'}/> */}
        <Route path='/admin' element={<><Adminview/><Button/></>}></Route>
        <Route path='/inquiry' element={<><Inquiry/><Button/></>}></Route>
        <Route path='/branch' element={<><Branch/><Button/></>}></Route>
        <Route path='/role' element={<><Role/><Button/></>}></Route>
        <Route path='/course' element={<><Course/><Button/></>}></Route>
        <Route path='/ref' element={<><Ref/><Button/></>}></Route>
        <Route path='/status' element={<><Status/><Button/></>}></Route>
        <Route path='/admin/add' element={<><Add/><Menu/><Button/></>}></Route>
        <Route path='/admin/update/:id' element={<><Updateadmin/><Menu/><Button/></>}></Route>
        <Route path='/role/add' element={<><Addrole/><Menu/><Button/></>}></Route>
        <Route path='/role/update/:id' element={<><Updaterole/><Menu/><Button/></>}></Route>
        <Route path='/branch/add' element={<><Addbranch/><Menu/><Button/></>}></Route>
        <Route path='/branch/update/:id' element={<><Updatebranch/><Menu/><Button/></>}></Route>
        <Route path='/course/add' element={<><Addcourse/><Menu/><Button/></>}></Route>
        <Route path='/course/update/:id' element={<><Updatecourse/><Menu/><Button/></>}></Route>
        <Route path='/ref/add' element={<><Addref/><Menu/><Button/></>}></Route>
        <Route path='/ref/update/:id' element={<><Updateref/><Menu/><Button/></>}></Route>
        <Route path='/inquiry/add' element={<><Addinquiry/><Menu/><Button/></>}></Route>
        <Route path='/inquiry/update/:id' element={<><Updateinquiry/><Menu/><Button/></>}></Route>
        <Route path='/status/add' element={<><Addstatus/><Menu/><Button/></>}></Route>
        <Route path='/status/update/:id' element={<><Updatestatus/><Menu/><Button/></>}></Route>
      </Routes>
    </div>
  );
}

export default App;
