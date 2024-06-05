import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";
import * as Yup from 'yup';
import { useFormik } from 'formik'
const validationSchema = Yup.object({
  name: Yup.string().required('enter role name')
})
function Addrole() {
  const navigate = useNavigate();
  var [rolename, setrolename] = useState(true);
  const formik = useFormik({
    initialValues: { name: '' },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setrolename(false);
      try {

        let token = await localStorage.getItem('token');

        console.log(token);
        var headers = {
          Authorization: token,
        }
        const response = await axios.post('https://inquiry-management-system-api.onrender.com/role/add_role', {
          rolename: values.name,
        },
          {
            headers
          });
        console.log(response.data);
        if (response.data) {
          navigate('/role');
        }
      } catch (error) {
        console.error('Error:', error);
        // Handle error
      }
    }
  })
  return (
    <div className="dashboard">
      <div className="adminadd">
        <h3>add roles</h3>
        <form onSubmit={formik.handleSubmit}>
          <h5>role name</h5>
          <input type="text" name="name" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur}></input>
          {
            formik.errors.name && formik.touched.name ? (
              <span style={{ color: "red", textTransform: "capitalize" }}>{formik.errors.name}</span>
            ) : null
          }
          <br></br>
          <div>
            {
              rolename == false ? <button className="bttn" type="submit"> wait</button>
                :
                <button className="bttn" type="submit">add</button>
            }
          </div>
        </form>
      </div>
    </div>
  )
}
export default Addrole