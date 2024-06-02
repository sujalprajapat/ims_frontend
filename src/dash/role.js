import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
function Role(){
    var [data,setdata] =useState (null);
    var [rem,setrem] = useState(false);
    var [id,setid] = useState('');
    //  var value =[];
    useEffect(() => {
            // value = data;
            viewrole();
    },[]);
    const viewrole = ()=>{
        
        let token = localStorage.getItem('token');
        var headers = {
          Authorization:token,
        }
        axios.get('/role/view_role',{headers})
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
        axios.get('/role/delete_role/'+id,{headers})
            .then(function (response) {
                // handle success
                // console.log(response.data);
                setdata(response.data.data);
                viewrole();
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        }
    return(
        <div className="data_table data_table1">
            <h3 className="heading">roles detail</h3>
            <table className="table1">
                <tr>
                    <th>role id</th>
                    <th>role name </th>
                </tr>
                {
                    data != null &&
                    data.map((ele,ind)=>{
                        return(
                            <tr>
                                <td>
                                        {ele.rolename}
                                </td>
                                <td>
                             <Link to={"/role/update/"+ele._id}className="button">update</Link>

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
export default Role