import { Link } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
import { RxUpdate } from "react-icons/rx";
import { RiDeleteBin6Fill } from "react-icons/ri";
function Admin() {
    var [data, setdata] = useState(null);
    var [rem, setrem] = useState(false);
    var [id, setid] = useState('');
    useEffect(() => {
        viewadmin();
    }, []);
    const viewadmin = () => {
        let token = localStorage.getItem('token');
        var headers = {
            Authorization: token,
        }
        axios.get('https://inquiry-management-system-api.onrender.com/view_admin', { headers })
            .then(function (response) {
                // handle success
                console.log(response.data.data);
                setdata(response.data.data);
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
        axios.get('https://inquiry-management-system-api.onrender.com/delete_admin/' + id, { headers })
            .then(function (response) {
                // handle success
                setdata(response.data.dat);
                viewadmin()
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
    return (
        <div className="data_table data_table">
            <h3 className="heading">admin detail</h3>
            {
                !data ? <div className="loader"></div>
                    :
                    <table className="table1">
                        <tr>
                            <th className="d-none d-sm-table-cell">image</th>
                            <th >name</th>
                            <th className="d-none d-lg-table-cell">email</th>
                            <th className="d-none d-lg-table-cell">position</th>
                            <th className="d-none d-xl-table-cell">branch</th>
                            <th className="d-none d-md-table-cell">contact</th>
                            <th>update</th>
                            <th>delete</th>
                        </tr>
                        {
                            data != null &&
                            data.map((ele, ind) => {
                                return (
                                    <tr>
                                        <td className="d-none d-sm-table-cell"><img src={`http://localhost:5000/images/${ele.image}`} style={{ width: '100px', height: '100px', borderRadius: "50%" }} alt="admin image"></img></td>
                                        <td>{ele.name}</td>
                                        <td className="d-none d-lg-table-cell">{ele.email}</td>
                                        <td className="d-none d-lg-table-cell">{ele.role ? ele.role.rolename : "--"}</td>
                                        <td className="d-none d-xl-table-cell">{ele.branch_id ? ele.branch_id.branchname : "--"}</td>
                                        <td className="d-none d-md-table-cell">{ele.contact}</td>
                                        <td>
                                            <Link to={"/admin/update/" + ele._id} className="button"><RxUpdate /></Link>

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
export default Admin