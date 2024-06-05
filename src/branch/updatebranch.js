import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
function Updatebranch() {
  var [data, setdata] = useState([]);
  var { id } = useParams();
  var [name, getname] = useState('');
  let val;
  val = data.find((ele,ind)=>{ return ele._id === id })
  useEffect(() => {
    update();
  }, [])

  useEffect(()=>{
    if (val) {
      getname(val.branchname || '');
    }
  },[val]);
  const update = () => {
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
    console.log(val);
    // setn(val.branchname)
    // console.log(ele.name);
    
  };
  const Submit = async () => {
    try {
      let token = await localStorage.getItem('token');
      console.log(token);
      var headers = {
        Authorization: token,
      }
      const response = await axios.post('https://inquiry-management-system-api.onrender.com/branch/update_branch/' + id, {
        branchname: name,
      },
        {
          headers
        }
      );
      if (response.data) {
        console.log(response.data);

      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };
  return (
    <div className="dashboard">
      <div className="adminadd">
        <h3>update branch</h3>
        <h5>barnch id</h5>
        <input type="text" value={id} readOnly></input>
        <h5>branch name</h5>
        <input type="text" value={name} onChange={(e) => { getname(e.target.value) }} ></input>
        <Link to="/branch" className="bttn" onClick={() => { Submit() }}>update</Link>
      </div>
    </div>
  )
}
export default Updatebranch;