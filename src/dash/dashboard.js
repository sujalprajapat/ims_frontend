import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
function Dashboard() {
    var [inquiry, setinquiry] = useState();
    var [branch, setbranch] = useState();
    var [course, setcourse] = useState();
    var [role, setrole] = useState();

    useEffect(() => {
        let token = localStorage.getItem('token');
        var headers = {
            Authorization: token,
        }
        console.log(token);
        axios.get('/inquiry/view_inquiry', { headers })
            .then(function (response) {
                // handle success
                console.log(response.data.dat);
                setinquiry(response.data.dat);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        axios.get('/branch/view_branch', { headers })
            .then(function (response) {
                // handle success
                // console.log(response.data.dat);
                setbranch(response.data.dat);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        axios.get('/course/view_course', { headers })
            .then(function (response) {
                // handle success
                // console.log(response.data.dat);
                setcourse(response.data.dat);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        axios.get('/role/view_role', { headers })
            .then(function (response) {
                // handle success
                // console.log(response.data.dat);
                setrole(response.data.dat);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        // value = data;
    }, []);
    return (
        <div className="dashboard">
            {/* <h1>helllllo</h1> */}
            <div className="d-flex justify-content-around">
                {/* <div className="dash_box" style={{backgroundColor:"#747AF2"}}>
                        <h2>inquiry : {inquiry}</h2>
                       
                    </div> */}
                <div class="contain">
                    <div class="box" style={{backgroundColor:"rgba(116,122,242,0.074)"}}>
                        <span class="title">inquiry</span>
                        <div>
                            <strong> total inquiry : {inquiry}</strong>
                            <p><Link to="/inquiry">more info..</Link></p>
                            {/* <span>VALID</span> <span>01/28</span> */}
                        </div>
                    </div>
                </div>
                <div class="contain">
                    <div class="box" style={{backgroundColor:"rgba(252, 48, 150,0.3)"}}>
                        <span class="title">branch</span>
                        <div>
                            <strong> total branch : {branch}</strong>
                            <p> <Link to="/branch">more info..</Link></p>
                            {/* <span>VALID</span> <span>01/28</span> */}
                        </div>
                    </div>
                </div>
                {/* <div className="dash_box" style={{ backgroundColor: "#EF376E" }}>
                    <h2>branch : {branch}</h2>
                    <Link to="/branch">more info..</Link>
                </div> */}
            </div>
            <div className="d-flex justify-content-around mt-5">
                {/* <div className="dash_box" style={{ backgroundColor: "#FFCC00" }}>
                    <h2>course : {course}</h2>
                    <Link to="/course">more info..</Link>
                </div> */}
                <div class="contain">
                    <div class="box" style={{backgroundColor:"rgba(255, 204, 0,0.3)"}}>
                        <span class="title">course</span>
                        <div>
                            <strong> total course : {course}</strong>
                            <p><Link to="/course">more info..</Link></p>
                            {/* <span>VALID</span> <span>01/28</span> */}
                        </div>
                    </div>
                </div>
                <div class="contain">
                    <div class="box" style={{backgroundColor:"rgba(81, 204, 138,0.3)"}}>
                        <span class="title">role</span>
                        <div>
                            <strong> total branch : {role}</strong>
                            <p> <Link to="/role">more info..</Link></p>
                            {/* <span>VALID</span> <span>01/28</span> */}
                        </div>
                    </div>
                </div>
                {/* <div className="dash_box" style={{ backgroundColor: "#51CC8A" }}>
                    <h2>role : {role} </h2>
                    <Link to="/role" >more info..</Link>

                </div> */}
            </div>

        </div>
    )
}
export default Dashboard
