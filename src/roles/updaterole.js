import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
function Updaterole() {
  var [data, setdata] = useState([]);
  var [name, getname] = useState(' ')
  var { id } = useParams();
  var val = data.find((ele, ind) => { return ele._id === id })
  useEffect(() => {
    update();
  }, [])

  useEffect(() => {
    if (val) {
      getname(val.rolename || '');
    }
  }, [val]);
  const update = () => {
    let token = localStorage.getItem('token');
    var headers = {
      Authorization: token,
    }
    axios.get('https://inquiry-management-system-api.onrender.com/role/view_role', { headers })
      .then(function (response) {
        // handle success
        console.log(response.data.data);
        setdata(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      }, [])
  };
  const Submit = async () => {
    try {
      let token = await localStorage.getItem('token');

      console.log(token);
      var headers = {
        Authorization: token,
      }
      const response = await axios.post('https://inquiry-management-system-api.onrender.com/role/update_role/' + id, {
        rolename: name,
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
        <h3>update roles</h3>
        <h5>role id</h5>
        <input type="text" value={id}></input>
        <h5>role name</h5>
        <input type="text" value={name} onChange={(e) => { getname(e.target.value) }}></input>
        <Link to="/role" className="bttn" onClick={() => { Submit() }}>update</Link>
      </div>
    </div>
  )
}
export default Updaterole