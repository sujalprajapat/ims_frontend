
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import * as Yup from 'yup';
import { useFormik } from 'formik'
const validationSchema = Yup.object({
    branch: Yup.string().required('select branch ..!'),
    name: Yup.string().required('enter branch name ..!'),
    contact: Yup.number().required('enter your contact number ..!').max(9999999999, "max 10 digit are allowed ..!"),
    course: Yup.string().required('select course ..!'),
    joindate: Yup.string().required('select join date ..!'),
    reference: Yup.string().required('select reference ..!'),
    detail: Yup.string().required('enter detail  ..!'),
    inquiry: Yup.string().required('select inquiry ..!'),
    status: Yup.string().required('select status ..!'),
    statusdate: Yup.string().required('select join date ..!'),
    inquirydate: Yup.string().required('select join date ..!')
})
function Addinquiry() {
    const navigate = useNavigate();
    var [role, setrole] = useState([]);
    var [branch, setbranch] = useState([]);
    var [ref, setref] = useState([]);
    var [course, setcourse] = useState([]);
    var [status, setstatus] = useState([]);
    useEffect(() => {
        let token = localStorage.getItem('token');

        console.log(token);
        var headers = {
            Authorization: token,
        }
        axios.get('/branch/view_branch', { headers })
            .then(function (response) {
                // handle success
                console.log(response.data.data);
                setbranch(response.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            }, [])
        axios.get('/role/view_role', { headers })
            .then(function (response) {
                // handle success
                console.log(response.data.data);
                setrole(response.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            }, [])
        axios.get('/course/view_course', { headers })
            .then(function (response) {
                // handle success
                console.log(response.data.data);
                setcourse(response.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            }, [])
        axios.get('/reference/view_reference', { headers })
            .then(function (response) {
                // handle success
                console.log(response.data.data);
                setref(response.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            }, [])
        axios.get('/status/view_status', { headers })
            .then(function (response) {
                // handle success
                console.log(response.data.data);
                setstatus(response.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            }, [])
    }, []);
    var [contact, getcontact] = useState('');
    var [info, getinfo] = useState('');
    var [joindate, getjoindate] = useState('');
    var [refdetail, getrefdetail] = useState('');
    var [statusdate, getstatusdate] = useState('');
    var [indate, getindate] = useState('');
    var [rolename, getrolename] = useState('');
    var [branchname, getbranchname] = useState('');
    var [refname, getrefname] = useState('');
    var [coursename, getcoursename] = useState('');
    var [statusname, getstatusname] = useState('');
    const formik = useFormik({
        initialValues: { branch:'', name:'' ,contact:'',course:'',joindate:'',reference:'',detail:'',inquiry:'',status:'',statusdate:'',inquirydate:''},
        validationSchema: validationSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                // alert('');
                alert(values.inquiry)
                let token = await localStorage.getItem('token');

                console.log(values.branch);
                var headers = {
                    Authorization: token,
                }
                const response = await axios.post('/inquiry/add_inquiry', {
                    branch_id: values.branch,
                    name: values.name,
                    contact: values.contact,
                    course_id: values.course,
                    joindate: values.joindate,
                    ref_id: values.reference,
                    ref_by: values.detail,
                    inq_by: values.inquiry,
                    status: values.status,
                    status_date: values.statusdate,
                    inq_date: values.inquirydate,
                },
                    {
                        headers
                    });
                console.log(response.data);
                if (response.data) {
                    // setlogin(true);
                    resetForm();
                    navigate('/inquiry');
                }
            } catch (error) {
                console.error('Error:', error);
                // Handle error
            }
        }
    })
    return (
        <div className="dashboard ">
            <div className="inquiry">
                <h3>add inquiry</h3>
                <form onSubmit={formik.handleSubmit}>
                    <div className="d-flex justify-content-between flex-wrap ">
                        <div className="text">
                            <h5>branch</h5>
                            <select  name="branch" onChange={formik.handleChange} value={formik.values.branch} onBlur={formik.handleBlur}>
                                <option value=''>select branch</option>
                                {
                                    branch.map((ele, ind) => {
                                        return (
                                            <option value={ele._id}>{ele.branchname}</option>
                                        )
                                    })
                                }
                            </select>
                            <br></br>
                            {
                                formik.errors.branch && formik.touched.branch ? (
                                    <span style={{ color: "red", textTransform: "capitalize" }}>{formik.errors.branch}</span>
                                ) : null
                            }
                        </div>
                        <div className="text">
                            <h5>name</h5>
                            <input type="text" name="name" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur}></input>
                            <br></br>
                            {
                                formik.errors.name && formik.touched.name ? (
                                    <span style={{ color: "red", textTransform: "capitalize" }}>{formik.errors.name}</span>
                                ) : null
                            }
                        </div>
                        <div className="text">
                            <h5>contact</h5>
                            <input type="text"  name="contact" onChange={formik.handleChange} value={formik.values.contact} onBlur={formik.handleBlur}></input>
                            <br></br>
                            {
                                formik.errors.contact && formik.touched.contact ? (
                                    <span style={{ color: "red", textTransform: "capitalize" }}>{formik.errors.contact}</span>
                                ) : null
                            }
                        </div>
                        <div className="text">
                            <h5>course</h5>

                            <select name="course" onChange={formik.handleChange} value={formik.values.course} onBlur={formik.handleBlur}>
                                <option value="">select course</option>
                                {
                                    course.map((ele, ind) => {
                                        return (
                                            <option value={ele._id}>{ele.course}</option>
                                        )
                                    })
                                }
                            </select>
                            <br></br>
                            {
                                formik.errors.course && formik.touched.course ? (
                                    <span style={{ color: "red", textTransform: "capitalize" }}>{formik.errors.course}</span>
                                ) : null
                            }
                        </div>
                        {/* <div className="text">
                        <h5>extra info</h5>
                        <input type="text" onChange={(e) => { getinfo(e.target.value) }} value={info}></input>
                    </div> */}
                        <div className="text">
                            <h5>join date</h5>
                            <input type="date" name="joindate" onChange={formik.handleChange} value={formik.values.joindate} onBlur={formik.handleBlur}></input>
                            <br></br>
                            {
                                formik.errors.joindate && formik.touched.joindate ? (
                                    <span style={{ color: "red", textTransform: "capitalize" }}>{formik.errors.joindate}</span>
                                ) : null
                            }
                        </div>

                        <div className="text">
                            <h5>reference</h5>
                            <select name="reference" onChange={formik.handleChange} value={formik.values.reference} onBlur={formik.handleBlur}>
                                <option value="">select ref</option>
                                {
                                    ref.map((ele, ind) => {
                                        return (
                                            <option value={ele._id}>{ele.reference_name}</option>
                                        )
                                    })
                                }
                            </select>
                            <br></br>
                            {
                                formik.errors.reference && formik.touched.reference ? (
                                    <span style={{ color: "red", textTransform: "capitalize" }}>{formik.errors.reference}</span>
                                ) : null
                            }
                        </div>
                        <div className="text">
                            <h5>ref. detail</h5>
                            <input type="text"  name="detail" onChange={formik.handleChange} value={formik.values.detail} onBlur={formik.handleBlur}></input>
                            <br></br>
                            {
                                formik.errors.detail && formik.touched.detail ? (
                                    <span style={{ color: "red", textTransform: "capitalize" }}>{formik.errors.detail}</span>
                                ) : null
                            }
                        </div>
                        <div className="text">
                            <h5>inquiry by</h5>
                            <select name="inquiry" onChange={formik.handleChange} value={formik.values.inquiry} onBlur={formik.handleBlur}>
        
                                <option value=''>select role</option>
                                {
                                    role.map((ele, ind) => {
                                        return (
                                            <option value={ele._id}>{ele.rolename}</option>
                                        )
                                    })
                                }
                            </select>
                            <br></br>
                            {
                                formik.errors.inquiry && formik.touched.inquiry ? (
                                    <span style={{ color: "red", textTransform: "capitalize" }}>{formik.errors.inquiry}</span>
                                ) : null
                            }
                        </div>
                        <div className="text">
                            <h5>status</h5>
                            <select name="status" onChange={formik.handleChange} value={formik.values.status} onBlur={formik.handleBlur}>
                                <option value="">select status</option>
                                {
                                    status.map((ele, ind) => {
                                        return (
                                            <option value={ele._id}>{ele.status}</option>
                                        )
                                    })
                                }
                            </select>
                            <br></br>
                            {
                                formik.errors.status && formik.touched.status ? (
                                    <span style={{ color: "red", textTransform: "capitalize" }}>{formik.errors.status}</span>
                                ) : null
                            }
                        </div>
                        <div className="text">
                            <h5>status date</h5>
                            <input type="date" name="statusdate" onChange={formik.handleChange} value={formik.values.statusdate} onBlur={formik.handleBlur}></input>
                            <br></br>
                            {
                                formik.errors.statusdate && formik.touched.statusdate ? (
                                    <span style={{ color: "red", textTransform: "capitalize" }}>{formik.errors.statusdate}</span>
                                ) : null
                            }
                        </div>
                        <div className="text">
                            <h5>inquiry date</h5>
                            <input type="date" name="inquirydate" onChange={formik.handleChange} value={formik.values.inquirydate} onBlur={formik.handleBlur}></input>
                            <br></br>
                            {
                                formik.errors.inquirydate && formik.touched.inquirydate ? (
                                    <span style={{ color: "red", textTransform: "capitalize" }}>{formik.errors.inquirydate}</span>
                                ) : null
                            }
                        </div>
                    </div>
                    <div>
                        <button className="bttn" type="submit">add</button>
                    </div>
                </form>
            </div>
        </div>
    )
    // getname('');getcontact('');getinfo('');getjoindate('default');getrefdetail('');getstatusdate('default');getindate('default');getrolename('default');getbranchname('default');getrefname('default');getcoursename('default');getstatusname('default')
}
export default Addinquiry