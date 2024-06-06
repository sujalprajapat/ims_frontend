import axios from "axios";
import { useEffect, useState } from "react";
import { RxUpdate } from "react-icons/rx";
import { Link } from "react-router-dom"
import { FiMinus } from "react-icons/fi";
import Updateinquiry from "./updateinquiry";
import { RiDeleteBin6Fill } from "react-icons/ri";
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
        axios.get('https://inquiry-management-system-api.onrender.com/inquiry/view_inquiry', { headers })
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
        axios.get('https://inquiry-management-system-api.onrender.com/inquiry/delete_inquiry/' + id, { headers })
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
                            <th className="d-none d-lg-table-cell" >branch</th>
                            <th className="d-none d-lg-table-cell">contact</th>
                            <th className="d-none d-sm-table-cell">course</th>
                            <th className="d-none d-md-table-cell">join date</th>
                            <th className="d-none d-xl-table-cell">reference</th>
                            <th className="d-none d-xl-table-cell">ref detail</th>
                            <th className="d-none d-md-table-cell">inquiry by</th>
                            <th className="d-none d-md-table-cell">inquiry date</th>
                            <th className="d-none d-sm-table-cell">status</th>
                            <th className="d-none d-md-table-cell">status date</th>
                            <th>update</th>
                            <th>remove</th>
                        </tr>
                        {
                            data != null &&
                            data.map((ele, ind) => {

                                return (
                                    <tr>
                                        <td>{ele.name}</td>
                                        <td className="d-none d-lg-table-cell">{ele.branch_id ? ele.branch_id.branchname : "--"}</td>
                                        <td className="d-none d-lg-table-cell">{ele.contact}</td>
                                        <td className="d-none d-sm-table-cell">{ele.course_id ? ele.course_id.course : "--"}</td>
                                        <td className="d-none d-md-table-cell">{ele.joindate}</td>
                                        <td className="d-none d-xl-table-cell">{ele.ref_id ? ele.ref_id.reference_name : "--"}</td>
                                        <td className="d-none d-xl-table-cell">{ele.ref_by}</td>
                                        <td className="d-none d-md-table-cell">{ele.inq_by ? ele.inq_by.rolename : "--"}</td>
                                        <td className="d-none d-md-table-cell">{ele.inq_date}</td>
                                        <td className="d-none d-sm-table-cell">{ele.status ? ele.status.status : "--"}</td>
                                        <td className="d-none d-md-table-cell">{ele.status_date}</td>
                                        <td>
                                            <Link to={'/inquiry/update/' + ele._id} className="button"><RxUpdate /></Link>
                                        </td>
                                        <td>
                                            <Link className="button" onClick={() => { setid(ele._id); setrem(true) }}><RiDeleteBin6Fill /></Link>
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
            <div className="pb-3">
                <Link to="/dashboard" className="back">back</Link>

            </div>
        </div>
    )

}
export default Inquiry