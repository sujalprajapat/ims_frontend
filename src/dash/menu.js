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
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
    axios.get('/view_admin', { headers })
      .then(function (response) {
        // handle success
        console.log(response.data.dat);
        // setinquiry(response.data.dat);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])
  const logout = () => {
    axios.get('/admin_logout')
      .then(function (response) {
        // handle success
        console.log(response.data);
        localStorage.removeItem('token')
        dish(check());
        // setinquiry(response.data.dat);
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
                <Link style={{color:"white"}}>
                    <IoMdContact className='icon'></IoMdContact>
                </Link>
                {/* <div className='userinfo1 admin_name'>
                  <img src={`http://localhost:5000/images/${img}`} style={{ width: '80px', height: '80px', borderRadius: "50%" }}></img>
                  <div className='ps-2'>
                    <h3 className='mb-0'>{admin}</h3>
                    <p className='ms-0'>{email}</p>
                  </div>
                </div> */}
              </div>
              <div className='line'></div>
              <Link to="/" style={{ color: "white" }} onClick={() => { logout() }}><FiLogOut></FiLogOut> </Link>
            </div>
          </div>

        </Container>
      </div>
      <>
        {/* {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1"></Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))} */}
        {/* <Button variant="primary" onClick={handleShow} className="me-2">
        
      </Button> */}
        {/* <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        </Offcanvas.Body>
      </Offcanvas> */}
      </>
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
              {/* <Link to="/admin/delete"><li className='d-flex align-items-center icon '><FiMinus></FiMinus>remove</li></Link> */}
            </ul>
          </li>
          </Link>
          <Link to="/role/add"><li><div className='d-flex align-items-center icon'><RiContactsBookLine></RiContactsBookLine>ROLE<div className='plus'></div></div>
            <ul className='submenu'>
              <Link to="/role/add"> <li className='d-flex align-items-center icon '><GoPlus></GoPlus>add</li></Link>
              <Link to="/role"> <li className='d-flex align-items-center icon '><MdOutlineViewComfyAlt></MdOutlineViewComfyAlt>view</li></Link>
              {/* <Link to="/role/update"><li className='d-flex align-items-center icon '><RxUpdate></RxUpdate>update</li></Link>
                    <Link to="/role/delete"><li className='d-flex align-items-center icon '><FiMinus></FiMinus>remove</li></Link> */}
            </ul>
          </li>
          </Link>
          <Link to="/branch/add"><li><div className='d-flex align-items-center icon'><HiBuildingOffice2></HiBuildingOffice2>BRANCH<div className='plus'></div></div>
            <ul className='submenu'>
              <Link to="/branch/add"> <li className='d-flex align-items-center icon '><GoPlus></GoPlus>add</li></Link>
              <Link to="/branch"> <li className='d-flex align-items-center icon '><MdOutlineViewComfyAlt></MdOutlineViewComfyAlt>view</li></Link>
              {/* <Link to="/branch/update"> <li className='d-flex align-items-center icon '><RxUpdate></RxUpdate>update</li></Link>
                    <Link to="/branch/delete">   <li className='d-flex align-items-center icon '><FiMinus></FiMinus>remove</li></Link> */}
            </ul>
          </li>
          </Link>
          <Link to="/course/add"><li><div className='d-flex align-items-center icon'><FaBookOpen></FaBookOpen>COURSE<div className='plus'></div></div>
            <ul className='submenu'>
              <Link to="/course/add"> <li className='d-flex align-items-center icon '><GoPlus></GoPlus>add</li></Link>
              <Link to="/course"> <li className='d-flex align-items-center icon '><MdOutlineViewComfyAlt></MdOutlineViewComfyAlt>view</li></Link>
              {/* <Link to="/course/update"> <li className='d-flex align-items-center icon '><RxUpdate></RxUpdate>update</li></Link>
                    <Link to="/course/delete"> <li className='d-flex align-items-center icon '><FiMinus></FiMinus>remove</li></Link> */}
            </ul>
          </li>
          </Link>
          <Link to="/ref/add"><li><div className='d-flex align-items-center icon'><VscReferences></VscReferences>REFERENCE<div className='plus'></div></div>
            <ul className='submenu'>
              <Link to="/ref/add"><li className='d-flex align-items-center icon '><GoPlus></GoPlus>add</li></Link>
              <Link to="/ref"> <li className='d-flex align-items-center icon '><MdOutlineViewComfyAlt></MdOutlineViewComfyAlt>view</li></Link>
              {/* <Link to="/ref/delete">  <li className='d-flex align-items-center icon '><FiMinus></FiMinus>remove</li></Link>  */}
            </ul>
          </li>
          </Link>
          <Link to="/status/add"><li><div className='d-flex align-items-center icon'><GrStatusGood></GrStatusGood>STATUS<div className='plus'></div></div>
            <ul className='submenu'>
              <Link to="/status/add"><li className='d-flex align-items-center icon '><GoPlus></GoPlus>add</li></Link>
              <Link to="/status"><li className='d-flex align-items-center icon '><MdOutlineViewComfyAlt></MdOutlineViewComfyAlt>view</li></Link>
              {/* <Link to="/status/delete"> <li className='d-flex align-items-center icon '><FiMinus></FiMinus>remove</li></Link> */}
            </ul>
          </li>
          </Link>
          <Link to="/inquiry/add"><li><div className='d-flex align-items-center icon'><FaClipboardQuestion></FaClipboardQuestion>INQUIRY<div className='plus'></div></div>
            <ul className='submenu'>
              <Link to="/inquiry/add"> <li className='d-flex align-items-center icon '><GoPlus></GoPlus>add</li></Link>
              <Link to="/inquiry"> <li className='d-flex align-items-center icon '><MdOutlineViewComfyAlt></MdOutlineViewComfyAlt>view</li></Link>

              {/* <Link to="/inquiry/update"><li className='d-flex align-items-center icon '><RxUpdate></RxUpdate>update</li></Link>
                    <Link to="/inquiry/delete">  <li className='d-flex align-items-center icon '><FiMinus></FiMinus>remove</li></Link> */}
            </ul>
          </li>
          </Link>
          <Link to="/" onClick={() => { logout() }}>
            <li><div className='d-flex align-items-center icon'><FiLogOut></FiLogOut> LOGOUT <div className='plus'></div></div></li>

          </Link>
          {/* <li className='d-flex justify-content-between'><Link>ROLE</Link><div className='plus'>+</div></li>         
                    <li className='d-flex justify-content-between'><Link>BRANCH</Link><div className='plus'>+</div></li>         
                    <li className='d-flex justify-content-between'><Link>COURSE</Link><div className='plus'>+</div></li>         
                    <li className='d-flex justify-content-between'><Link>REFERENCE</Link><div className='plus'>+</div></li>         
                    <li className='d-flex justify-content-between'><Link>INQUIRY</Link><div className='plus'>+</div></li>         
                    <li className='d-flex justify-content-between'><Link>STATUS</Link><div className='plus'>+</div></li>          */}
        </ul>
      </div>

    </div>
  )
}
export default Menu
// function Example() {
//     return (
//       <>
//         {['start', 'end', 'top', 'bottom'].map((placement, idx) => (
//           <OffCanvasExample key={idx} placement={placement} name={placement} />
//         ))}
//       </>
//     );
//   }
//   render(<Example />);