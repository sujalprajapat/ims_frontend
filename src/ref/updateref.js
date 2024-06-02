
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
function Updateref(){
    var [data,setdata] =useState ([]);
    var [name,getname] = useState(' ')
    var {id} = useParams();
    //  var value =[];
    var val = data.find((ele,ind)=>{ return ele._id == id })
    useEffect(() => {
      update();
    }, [])
  
    useEffect(()=>{
      if (val) {
        getname(val.reference_name || '');
      }
    },[val]);
   const update= () => {
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
            },[])
            console.log(val);
    }
    const Submit = async () => {
        try {
        let token = await localStorage.getItem('token');

          console.log(token);
          var headers = {
            Authorization:token,
          }
          const response = await axios.post('/reference/update_reference/'+id, {
            reference_name: name, 
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
        <h3>update REFERENCE</h3>
        <h5>REFERENCE id</h5>
        <input type="text" value={id} readOnly></input>
        <h5>REFERENCE name</h5>
        <input type="text" value={name} onChange={(e)=>{getname(e.target.value)}}></input>
        <Link to="/ref" className="bttn" onClick={()=>{Submit()}}>update</Link>
        </div>
     </div>
    )
}
export default Updateref