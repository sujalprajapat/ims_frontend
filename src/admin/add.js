import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { useFormik } from 'formik'
const validationSchema = Yup.object({
    branch: Yup.string().required('select branch ..!'),
    name: Yup.string().required('enter name ..!'),
    email: Yup.string().required('enter email ..!'),
    password: Yup.string().required('enter password ..!'),
    contact: Yup.number().required('enter your contact number ..!').max(9999999999, "max 10 digit are allowed ..!"),
    role: Yup.string().required('select role ..!'),
})
function Add() {
    var [branch, setbranch] = useState([]);
    var [role, setrole] = useState([]);
    useEffect(() => {
        let token = localStorage.getItem('token');
        var headers = {
            Authorization: token,
        }
        axios.get('/branch/view_branch', { headers })
            .then(function (response) {
                // handle success
                // console.log(response.data.data);
                setbranch(response.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            }, [])
        axios.get('/role/view_role', { headers })
            .then(function (response) {
                // handle success
                // console.log(response.data.data);
                setrole(response.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            }, [])
    }, [])
    var [img, getimg] = useState('');
    var [admin, getadmin] = useState(true);
    const handleFileChange = (e) => {
        getimg(e.target.files[0]); // Get the first selected file
        // Set the file object in state
    };
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: { branch: '', name: '', contact: '', password: '', role: '', email: '' },
        validationSchema: validationSchema,
        onSubmit: async (values, { resetForm }) => {
            getadmin(false);
            try {
                console.log(values.img);
                const formData = new FormData();
                formData.append('image', img);
                formData.append('name', values.name);
                formData.append('email', values.email);
                formData.append('password', values.password);
                formData.append('role', values.role);
                formData.append('branch_id', values.branch);
                formData.append('contact', values.contact);
                let token = await localStorage.getItem('token');
                console.log(token);
                var headers = {
                    Authorization: token,
                }
                const response = await axios.post('/add_admin', formData,
                    {
                        headers
                    }
                );
                console.log(response.data);
                if (response.data) {
                    resetForm();
                    navigate('/admin')
                }
            } catch (error) {
                console.error('Error:', error);
                // Handle error
            }
        }
    })
    const Submit = async () => {


    };
    return (
        <div className="dashboard">
            <div className="adminadd">
                <h3>add admin</h3>
                <form onSubmit={formik.handleSubmit}>
                    <h5>name</h5>
                    <input type="text" name="name" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur}></input>
                    {
                        formik.errors.name && formik.touched.name ? (
                            <span style={{ color: "red", textTransform: "capitalize" }}>{formik.errors.name}</span>
                        ) : null
                    }
                    <h5>email</h5>
                    <input type="email" name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}></input>
                    {
                        formik.errors.email && formik.touched.email ? (
                            <span style={{ color: "red", textTransform: "capitalize" }}>{formik.errors.email}</span>
                        ) : null
                    }
                    <h5>password</h5>
                    <input type="password" name="password" onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur}></input>
                    {
                        formik.errors.password && formik.touched.password ? (
                            <span style={{ color: "red", textTransform: "capitalize" }}>{formik.errors.password}</span>
                        ) : null
                    }
                    <h5>contact</h5>
                    <input type="text" name="contact" onChange={formik.handleChange} value={formik.values.contact} onBlur={formik.handleBlur}></input>
                    {
                        formik.errors.contact && formik.touched.contact ? (
                            <span style={{ color: "red", textTransform: "capitalize" }}>{formik.errors.contact}</span>
                        ) : null
                    }
                    <h5>Image</h5>
                    <input type="file" onChange={handleFileChange} />
                    <h5>role</h5>
                    <select name="role" onChange={formik.handleChange} value={formik.values.role} onBlur={formik.handleBlur}>
                        <option value=''>select role</option>
                        {
                            role.map((ele, ind) => {
                                return (
                                    <option value={ele._id}>{ele.rolename}</option>
                                )
                            })
                        }
                    </select>
                    {
                        formik.errors.role && formik.touched.role ? (
                            <span style={{ color: "red", textTransform: "capitalize" }}>{formik.errors.role}</span>
                        ) : null
                    }
                    <h5>BRANCH</h5>
                    <select name="branch" onChange={formik.handleChange} value={formik.values.branch} onBlur={formik.handleBlur}>
                        <option value="" >select branch</option>
                        {
                            branch.map((ele, ind) => {
                                return (
                                    <option value={ele._id}>{ele.branchname}</option>
                                )
                            })
                        }
                    </select>
                    {
                        formik.errors.branch && formik.touched.branch ? (
                            <span style={{ color: "red", textTransform: "capitalize" }}>{formik.errors.branch}</span>
                        ) : null
                    }
                    <br></br>
                    <div>
                        {
                            admin == false ? <button className="bttn" type="submit"> wait</button>
                                :
                                <button className="bttn" type="submit">add</button>
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Add; 
