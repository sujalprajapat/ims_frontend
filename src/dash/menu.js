import { Container } from 'react-bootstrap';
import { FaBell } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { RiContactsBookLine } from "react-icons/ri";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { FaBookOpen } from "react-icons/fa";
import { VscReferences } from "react-icons/vsc";
import { FaClipboardQuestion } from "react-icons/fa6";
import { GrStatusGood } from "react-icons/gr";
import { GoPlus } from "react-icons/go";
import { FiLogOut } from "react-icons/fi";
import { RxUpdate } from "react-icons/rx";
import { FiMinus } from "react-icons/fi";
import { MdOutlineViewComfyAlt } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { check } from '../Store/Counterslice/Counterslice';
import { LiaMagento } from 'react-icons/lia';
import { Button, Navbar, NavDropdown, Offcanvas, Nav, Form, handleShow, show, OffCanvasExample } from 'react-bootstrap';
function Menu() {
  let dish = useDispatch();
  let [admin, setadmin] = useState('');
  let [email, setemail] = useState('');
  let [img, setimg] = useState('');

  useEffect(() => {

    setadmin(localStorage.getItem('adminname'));
    setemail(localStorage.getItem('adminemail'));
    setimg(localStorage.getItem('adminimage'));
    console.log("admin", img);
    let token = localStorage.getItem('token');
    var headers = {
      Authorization: token,
    }
    console.log(token);
    axios.get('https://inquiry-management-system-api.onrender.com/view_admin', { headers })
      .then(function (response) {
        // handle success
        console.log(response.data.dat);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])
  const logout = () => {
    localStorage.removeItem('token')
    dish(check());
    axios.get('https://inquiry-management-system-api.onrender.com/admin_logout')
      .then(function (response) {
        // handle success
        console.log(response.data);
      })
  }
  return (
    <div className='navbar1'>
      <div className="menu">
        <Container>
          <div className='d-flex justify-content-between align-items-center '>
            <FaBars></FaBars>

            <div>
              <h2 style={{ paddingLeft: "200px" }}>IMS</h2>
            </div>
            <div className='icon d-flex'>
              <FaBell></FaBell>
              <MdOutlineMail></MdOutlineMail>
              <div className='userinfo'>
                <Link style={{ color: "white" }}>
                  <IoMdContact className='icon'></IoMdContact>
                </Link>
              </div>
              <div className='line'></div>
              <Link to="/" style={{ color: "white" }} onClick={() => { logout() }}><FiLogOut></FiLogOut> </Link>
            </div>
          </div>

        </Container>
      </div>
      <div className='v_menu'>
        <div className='admin_name d-flex align-items-center justify-content-around '>
          <img src={`http://localhost:5000/images/${img}`} style={{ width: '80px', height: '80px', borderRadius: "50%" }}></img>
          <div className='ps-2'>
            <h3 className='mb-0'>{admin}</h3>
            <p className='ms-0'>{email}</p>
          </div>
        </div>

        <ul className='main_menu'>
          <hr></hr>
          <Link to="/dashboard"><li className='d-flex align-items-center icon '><MdOutlineDashboardCustomize /> DASHBOARD</li></Link>
          <Link to="/admin/add"><li><div className="d-flex align-items-center  icon"><GrUserAdmin></GrUserAdmin>ADMIN<div className='plus'>
          </div></div>
            <ul className='submenu'>
              <Link to="/admin/add" ><li className='d-flex align-items-center icon '><GoPlus></GoPlus>add</li></Link>
              <Link to="/admin"> <li className='d-flex align-items-center icon '><MdOutlineViewComfyAlt></MdOutlineViewComfyAlt>view</li></Link>
            </ul>
          </li>
          </Link>
          <Link to="/role/add"><li><div className='d-flex align-items-center icon'><RiContactsBookLine></RiContactsBookLine>ROLE<div className='plus'></div></div>
            <ul className='submenu'>
              <Link to="/role/add"> <li className='d-flex align-items-center icon '><GoPlus></GoPlus>add</li></Link>
              <Link to="/role"> <li className='d-flex align-items-center icon '><MdOutlineViewComfyAlt></MdOutlineViewComfyAlt>view</li></Link>
            </ul>
          </li>
          </Link>
          <Link to="/branch/add"><li><div className='d-flex align-items-center icon'><HiBuildingOffice2></HiBuildingOffice2>BRANCH<div className='plus'></div></div>
            <ul className='submenu'>
              <Link to="/branch/add"> <li className='d-flex align-items-center icon '><GoPlus></GoPlus>add</li></Link>
              <Link to="/branch"> <li className='d-flex align-items-center icon '><MdOutlineViewComfyAlt></MdOutlineViewComfyAlt>view</li></Link>
            </ul>
          </li>
          </Link>
          <Link to="/course/add"><li><div className='d-flex align-items-center icon'><FaBookOpen></FaBookOpen>COURSE<div className='plus'></div></div>
            <ul className='submenu'>
              <Link to="/course/add"> <li className='d-flex align-items-center icon '><GoPlus></GoPlus>add</li></Link>
              <Link to="/course"> <li className='d-flex align-items-center icon '><MdOutlineViewComfyAlt></MdOutlineViewComfyAlt>view</li></Link>
            </ul>
          </li>
          </Link>
          <Link to="/ref/add"><li><div className='d-flex align-items-center icon'><VscReferences></VscReferences>REFERENCE<div className='plus'></div></div>
            <ul className='submenu'>
              <Link to="/ref/add"><li className='d-flex align-items-center icon '><GoPlus></GoPlus>add</li></Link>
              <Link to="/ref"> <li className='d-flex align-items-center icon '><MdOutlineViewComfyAlt></MdOutlineViewComfyAlt>view</li></Link>
            </ul>
          </li>
          </Link>
          <Link to="/status/add"><li><div className='d-flex align-items-center icon'><GrStatusGood></GrStatusGood>STATUS<div className='plus'></div></div>
            <ul className='submenu'>
              <Link to="/status/add"><li className='d-flex align-items-center icon '><GoPlus></GoPlus>add</li></Link>
              <Link to="/status"><li className='d-flex align-items-center icon '><MdOutlineViewComfyAlt></MdOutlineViewComfyAlt>view</li></Link>
            </ul>
          </li>
          </Link>
          <Link to="/inquiry/add"><li><div className='d-flex align-items-center icon'><FaClipboardQuestion></FaClipboardQuestion>INQUIRY<div className='plus'></div></div>
            <ul className='submenu'>
              <Link to="/inquiry/add"> <li className='d-flex align-items-center icon '><GoPlus></GoPlus>add</li></Link>
              <Link to="/inquiry"> <li className='d-flex align-items-center icon '><MdOutlineViewComfyAlt></MdOutlineViewComfyAlt>view</li></Link>
            </ul>
          </li>
          </Link>
          <Link to="/" onClick={() => { logout() }}>
            <li><div className='d-flex align-items-center icon'><FiLogOut></FiLogOut> LOGOUT <div className='plus'></div></div></li>

          </Link>
        </ul>
      </div>

    </div>
  )
}
export default Menu