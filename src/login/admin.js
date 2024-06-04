import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom"
import { check } from "../Store/Counterslice/Counterslice";
function Admin() {
  let dish = useDispatch();
  var [email, setemail] = useState('');
  var [pass, setpass] = useState('');
  var [login, setlogin] = useState(true);
  var [info,setinfo] = useState(true);
  const navigate = useNavigate();
  const Submit = async () => {
    try {
      const response = await axios.post('/admin_login', {
        email: email,
        password: pass,
      });
      console.log(response.data);
      if (response.data.status == "login success") {
        navigate("/dashboard");
        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
          dish(check());
          localStorage.setItem('adminname', response.data.email[0].name);
          localStorage.setItem('adminemail', response.data.email[0].email);
          localStorage.setItem('adminimage', response.data.email[0].image);
          setlogin(true)
        }
      }
      else {
        setlogin(false);
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };
  const logout = () => {
    axios.get('https://ims-api-itdw.onrender.com/auth/logout_admin')
      .then(function (response) {
        // handle success
        console.log(response.data);
        // setinquiry(response.data.dat);
      })
  }
  return (
    <div className="login">
      <form className="form card">

        <div>
          <div className="card_header d-flex align-items-center ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
              <path fill="none" d="M0 0h24v24H0z" />
              <path fill="currentColor" d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z" />
            </svg>
            <div className="form_heading">Sign in</div>
          </div>
          <div className="field">
            <label htmlFor="username">Username</label>
            <input type="email" onChange={(e) => { setemail(e.target.value) }}></input>
            <p style={{marginBottom:"0px",color:"lightgrey",fontSize:"12px"}}>admin@gmail.com</p>
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <p style={{marginBottom:"0px",color:"lightgrey",fontSize:"12px"}} >admin</p>
            <input type="password" onChange={(e) => { setpass(e.target.value) }}></input>
            {
              login == false ? <p style={{ color: "red", textAlign: "center" }}>check email and password</p> : null
            }
          </div>
          <div className="field">
            {
              info != false ? 
            <Link className="button" onClick={() => { Submit() ; setinfo(false)}}>login</Link> :
            <Link className="button" onClick={() => { Submit() }}>wait a minute..</Link>

            }
            {/* <Link className="button" onClick={() => { logout() }}>login</Link> */}

          </div>
        </div>
      </form>
    </div>
  )
}
export default Admin