import { Link } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";

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
        axios.get('/branch/view_branch', { headers })
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
        axios.get('/branch/delete_branch/' + id, { headers })
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
                                    <Link to={"/branch/update/" + ele._id} className="button">update</Link>

                                </td>
                                <td>
                                    <Link className="button" onClick={()=>{setid(ele._id);setrem(true)}}>remove</Link>
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
            <div class="notificationCard" style={ rem==true ? {display:'block'}:{display:'none'}}>
                <p class="notificationHeading">are you sure</p>
                <div class="buttonContainer">
                    <button class="AllowBtn" onClick={()=>{remove(id);setrem(false)}}>yes</button>
                    <button class="NotnowBtn" onClick={() =>{setrem(false)}} >no</button>
                </div>
            </div>
            <div>
                <Link to={"/dashboard"} className="back">back</Link>
            </div>
        </div>
    )
}
export default Branch