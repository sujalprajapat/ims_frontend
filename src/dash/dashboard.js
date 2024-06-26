import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
function Dashboard() {
    var [inquiry, setinquiry] = useState();
    var [branch, setbranch] = useState();
    var [course, setcourse] = useState();
    var [role, setrole] = useState();
    var [check, setcheck] = useState(true);

    useEffect(() => {
        let token = localStorage.getItem('token');
        var headers = {
            Authorization: token,
        }
        console.log(token);
        axios.get('https://inquiry-management-system-api.onrender.com/inquiry/view_inquiry', { headers })
            .then(function (response) {
                // handle success
                console.log(response.data.dat);
                setinquiry(response.data.dat);
                setcheck(false);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        axios.get('https://inquiry-management-system-api.onrender.com/branch/view_branch', { headers })
            .then(function (response) {
                // handle success
                setbranch(response.data.dat);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        axios.get('https://inquiry-management-system-api.onrender.com/course/view_course', { headers })
            .then(function (response) {
                // handle success
                setcourse(response.data.dat);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        axios.get('https://inquiry-management-system-api.onrender.com/role/view_role', { headers })
            .then(function (response) {
                // handle success
                setrole(response.data.dat);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, []);
    return (
        <div className="dashboard ">
            <div>
                <div className="d-flex justify-content-around flex-wrap">
                    <div class="contain">
                    <Link to="/inquiry">
                        <div class="box" style={{ backgroundColor: "rgba(116,122,242,0.074)" }}>
                            <span class="title">inquiry</span>
                            <div>
                                {
                                    !inquiry ?
                                        <strong> total inquiry : wait...</strong>
                                        :
                                        <strong> total inquiry : {inquiry}</strong>
                                }
                                <p> <Link to="/inquiry">more info..</Link></p>
                                
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div class="contain">
                    <Link to="/branch">
                        <div class="box" style={{ backgroundColor: "rgba(252, 48, 150,0.3)" }}>
                            <span class="title">branch</span>
                            <div>
                                {
                                    !branch ?
                                        <strong> total inquiry : wait...</strong>
                                        :
                                        <strong> total inquiry : {branch}</strong>
                                }
                                <p> <Link to="/branch">more info..</Link></p>
                               
                            </div>
                        </div>
                        </Link>
                    </div>
                    
                </div>
                <div className="d-flex justify-content-around  flex-wrap">
                    <div class="contain">
                    <Link to="/course">
                        <div class="box" style={{ backgroundColor: "rgba(255, 204, 0,0.3)" }}>
                            <span class="title">course</span>
                            <div>
                                {
                                    !course ?
                                        <strong> total inquiry : wait...</strong>
                                        :
                                        <strong> total inquiry : {course}</strong>
                                }
                                <p> <Link to="/course">more info..</Link></p>

                            </div> 
                        </div>
                        </Link>
                    </div>
                    <div class="contain">
                    <Link to="/role">
                        <div class="box" style={{ backgroundColor: "rgba(81, 204, 138,0.3)" }}>
                            <span class="title">role</span>
                            <div>
                                {
                                    !role ?
                                        <strong> total inquiry : wait...</strong>
                                        :
                                        <strong> total inquiry : {role}</strong>
                                }
                                <p> <Link to="/role">more info..</Link></p>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard
