import axios from "axios";
import { useEffect, useState } from "react";
import { RxUpdate } from "react-icons/rx";
import { Link } from "react-router-dom"
import { FiMinus } from "react-icons/fi";
import Updateinquiry from "./updateinquiry";
function Inquiry() {
    var [data, setdata] = useState(null);
    var [rem, setrem] = useState(false);
    var [id, setid] = useState('');
    useEffect(() => {
        viewinquiry();
    }, []);
    const viewinquiry = () => {
        let token = localStorage.getItem('token');
        var headers = {
            Authorization: token,
        }
        axios.get('/inquiry/view_inquiry', { headers })
            .then(function (response) {
                // handle success
                console.log(response.data.data);
                setdata(response.data.data);
                console.log(data.branch_id);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
    var remove = (id) => {
        let token = localStorage.getItem('token');
        var headers = {
            Authorization: token,
        }
        axios.get('/inquiry/delete_inquiry/' + id, { headers })
            .then(function (response) {
                setdata(response.data.data);
                viewinquiry();
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
    return (
        <div className="data_table">
            <h3 className="heading">inquiry detail</h3>
            {
                !data ? <div className="loader"></div>
                    :
                    <table className="table">
                        <tr>
                            <th>name</th>
                            <th>branch</th>
                            <th>contact</th>
                            <th>course</th>
                            <th>join date</th>
                            <th>reference</th>
                            <th>ref detail</th>
                            <th>inquiry by</th>
                            <th>inquiry date</th>
                            <th>status</th>
                            <th>status date</th>
                            <th>update</th>
                            <th>remove</th>
                        </tr>
                        {
                            data != null &&
                            data.map((ele, ind) => {

                                return (
                                    <tr>
                                        <td>{ele.name}</td>
                                        <td>{ele.branch_id ? ele.branch_id.branchname : "--"}</td>
                                        <td>{ele.contact}</td>
                                        <td>{ele.course_id ? ele.course_id.course : "--"}</td>
                                        <td>{ele.joindate}</td>
                                        <td>{ele.ref_id ? ele.ref_id.reference_name : "--"}</td>
                                        <td>{ele.ref_by}</td>
                                        <td>{ele.inq_by ? ele.inq_by.rolename : "--"}</td>
                                        <td>{ele.inq_date}</td>
                                        <td>{ele.status ? ele.status.status : "--"}</td>
                                        <td>{ele.status_date}</td>
                                        <td>
                                            <Link to={'/inquiry/update/' + ele._id} className="button">update</Link>
                                        </td>
                                        <td>
                                            <Link className="button" onClick={() => { setid(ele._id); setrem(true) }}>remove</Link>


                                        </td>

                                    </tr>

                                )

                            })

                        }
                    </table>
            }
            <div class="notificationCard" style={rem == true ? { display: 'block' } : { display: 'none' }}>
                <p class="notificationHeading">are you sure</p>
                <div class="buttonContainer">
                    <button class="AllowBtn" onClick={() => { remove(id); setrem(false) }}>yes</button>
                    <button class="NotnowBtn" onClick={() => { setrem(false) }} >no</button>
                </div>
            </div>
            <div>
                <Link to="/dashboard" className="back">back</Link>

            </div>
        </div>
    )

}
export default Inquiry