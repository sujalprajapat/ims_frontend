import { Link } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
function Ref(){
    var [data,setdata] =useState (null);
    var [rem,setrem] = useState(false);
    var [id,setid] = useState('');
    //  var value =[];
    useEffect(() => {
        viewref();
    },[]);
    const viewref = ()=>{
        let token = localStorage.getItem('token');
        var headers = {
          Authorization:token,
        }
        axios.get('/reference/view_reference',{headers})
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
        axios.get('/reference/delete_reference/'+id,{headers})
            .then(function (response) {
                // handle success
                // console.log(response.data);
                setdata(response.data.dat);
                viewref()
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        }
    return(
        <div className="data_table data_table1">
            <h3 className="heading">reference detail</h3>
            <table className="table1">
                <tr>
                    <th>reference name </th>
                    <th>update</th>
                    <th>delete</th>
                </tr>
                {
                    data != null &&
                    data.map((ele,ind)=>{
                        return(
                            <tr>
                                <td>
                                        {ele.reference_name}
                                </td>
                                <td>
                             <Link to={"/ref/update/"+ele._id}className="button">update</Link>

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
export default Ref