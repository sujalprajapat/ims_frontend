import { Link } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
import { RxUpdate } from "react-icons/rx";
import { RiDeleteBin6Fill } from "react-icons/ri";

function Branch() {
    var [data, setdata] = useState(null);
    var [rem,setrem] = useState(false);
    var [id,setid] = useState('');
    useEffect(() => {
        viewbranch();
    }, []);

    const viewbranch = () => {
        let token = localStorage.getItem('token');
        var headers = {
            Authorization: token,
        }
        axios.get('https://inquiry-management-system-api.onrender.com/branch/view_branch', { headers })
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
        axios.get('https://inquiry-management-system-api.onrender.com/branch/delete_branch/' + id, { headers })
            .then(function (response) {
                // handle success
                setdata(response.data.data);
                viewbranch()
            })
            .catch(function (error) {
                // handle error
                console.log(error.message);
            })
    }
    return (
        <div className="data_table data_table1">
            <h3 className="heading">branch detail</h3>
            {
                !data ? <div className="loader"></div>
                :
            <table className="table1">
                <tr>
                    <th>branch name</th>
                    <th>update</th>
                    <th>delete</th>
                </tr>
                {
                    data != null &&
                    data.map((ele) => {
                        return (
                            <tr>
                                <td>
                                    {ele.branchname}
                                </td>
                                <td>
                                    <Link to={"/branch/update/" + ele._id} className="button"><RxUpdate /></Link>

                                </td>
                                <td>
                                    <Link className="button" onClick={()=>{setid(ele._id);setrem(true)}}><RiDeleteBin6Fill /></Link>
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
}
            <div class="notificationCard" style={ rem==true ? {display:'block'}:{display:'none'}}>
                <p class="notificationHeading">are you sure</p>
                <div class="buttonContainer">
                    <button class="AllowBtn" onClick={()=>{remove(id);setrem(false)}}>yes</button>
                    <button class="NotnowBtn" onClick={() =>{setrem(false)}} >no</button>
                </div>
            </div>
            <div className="pb-3">
                <Link to={"/dashboard"} className="back">back</Link>
            </div>
        </div>
    )
}
export default Branch