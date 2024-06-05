import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";
import * as Yup from 'yup';
import { useFormik } from 'formik'
const validationSchema = Yup.object({
  name: Yup.string().required('enter reference name')
});
function Addref() {
  const navigate = useNavigate();
  var [refname, setrefname] = useState(true);
  const formik = useFormik({
    initialValues: { name: '' },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setrefname(false);
      try {
        let token = await localStorage.getItem('token');

        console.log(token);
        var headers = {
          Authorization: token,
        }
        const response = await axios.post('https://inquiry-management-system-api.onrender.com/reference/add_reference', {
          reference_name: values.name,
        },
          {
            headers
          });
        console.log(response.data);
        if (response.data) {
          resetForm()
          navigate('/ref');
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
        <h3>add REFERENCE</h3>
        <form onSubmit={formik.handleSubmit}>
          <h5>reference name</h5>
          <input type="text" name="name" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur}></input>
          {
            formik.errors.name && formik.touched.name ? (
              <span style={{ color: "red", textTransform: "capitalize" }}>{formik.errors.name}</span>
            ) : null
          }
          <br></br>
          <div>
            {
              refname == false ? <button className="bttn" type="submit"> wait</button>
                :
                <button className="bttn" type="submit">add</button>
            }
          </div>
        </form>
      </div>
    </div>
  )
}
export default Addref