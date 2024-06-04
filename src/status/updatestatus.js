import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
function Updatestatus(){
    var [data,setdata] =useState ([]);
    var [name,getname] = useState(' ')
    var {id} = useParams();
    var val = data.find((ele,ind)=>{ return ele._id === id })
    useEffect(() => {
      update();
    }, [])
  
    useEffect(()=>{
      if (val) {
        getname(val.status || '');
      }
    },[val]);
   const update= () => {
        let token = localStorage.getItem('token');
        var headers = {
          Authorization:token,
        }
        axios.get('/status/view_status',{headers})
            .then(function (response) {
                // handle success
                console.log(response.data.data);
                setdata(response.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            }, [])
            console.log(val);
            if(val){
                getname(val.status || '');
            }
    }
    const Submit = async () => {
        try {
        let token = await localStorage.getItem('token');

          console.log(token);
          var headers = {
            Authorization:token,
          }
          const response = await axios.post('/status/update_status/'+id, {
            status: name, 
          },
          {
            headers 
          }
        );
          if(response.data){
          console.log(response.data);
            
          }
        } catch (error) {
          console.error('Error:', error);
          // Handle error
        }
      };
    return(
        <div className="dashboard">
        <div className="adminadd">
        <h3>update status</h3>
        <h5>status id</h5>
        <input type="text" value={id}></input>
        <h5>status name</h5>
        <input type="text" value={name} onChange={(e)=>{getname(e.target.value)}}></input>
        <Link to="/status" className="bttn" onClick={()=>{Submit()}}>update</Link>
        </div>
     </div>
    )
}
export default Updatestatus