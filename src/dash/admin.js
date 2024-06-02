import { Link } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
function Admin(){
    var [data,setdata] =useState (null);
    var [rem,setrem] = useState(false);
    var [id,setid] = useState('');
    //  var value =[];
    useEffect(() => {
        viewadmin();
    },[]);
    const viewadmin = ()=>{
        let token = localStorage.getItem('token');
        var headers = {
          Authorization:token,
        }
        axios.get('/view_admin',{headers})
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
    var remove = (id)=>{
        let token = localStorage.getItem('token');
        var headers = {
          Authorization:token,
        }
        axios.get('/delete_admin/'+id,{headers})
            .then(function (response) {
                // handle success
                // console.log(response.data);
                setdata(response.data.dat);
                viewadmin()
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        }
    return(
        <div className="data_table data_table">
            <h3 className="heading">course detail</h3>
            <table className="table1">
                <tr>
                    <th>image</th>
                    <th>name</th>
                    <th>email</th>
                    <th>position</th>
                    <th>branch</th>
                    <th>contact</th>
                    <th>update</th>
                    <th>delete</th>
                </tr>
                {
                    data != null &&
                    data.map((ele,ind)=>{
                        return(
                            <tr>
                                    <td><img src={`http://localhost:5000/images/${ele.image}`} style={{width:'100px',height:'100px' , borderRadius:"50%"}}></img></td>
                                    <td>{ele.name}</td>
                                    <td>{ele.email}</td>
                                    <td>{ele.role !== null ? ele.role.rolename : "--"}</td>
                                    <td>{ele.branch_id !== null ? ele.branch_id.branchname : "--"}</td>
                                    <td>{ele.contact}</td>
                                <td>
                             <Link to={"/admin/update/"+ele._id}className="button">update</Link>

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
            <Link to="/dashboard"className="back">back</Link>
            </div>
        </div>
    )
}
export default Admin