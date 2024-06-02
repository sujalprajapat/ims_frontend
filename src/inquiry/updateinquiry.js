import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Inquiry from "../dash/inquiry";
function Updateinquiry(){
    var {id} = useParams();
    var [role, setrole] = useState([]);
    var [branch, setbranch] = useState([]);
    var [ref, setref] = useState([]);
    var [course, setcourse] = useState([]);
    var [status, setstatus] = useState([]);
    var [name,getname]= useState('');
    var [contact,getcontact]= useState('');
    var [info,getinfo]= useState('');
    var [joindate,getjoindate]= useState('');
    var [refdetail,getrefdetail]= useState('');
    var [statusdate,getstatusdate]= useState('');
    var [indate,getindate]= useState('');
    var [rolename, getrolename] = useState('');
    var [roleid, getroleid] = useState('');
    var [branchname, getbranchname] = useState('');
    var [branchid, getbranchid] = useState('');
    var [refname, getrefname] = useState('');
    var [refid, getrefid] = useState('');
    var [coursename, getcoursename] = useState('');
    var [courseid, getcourseid] = useState('');
    var [statusname, getstatusname] = useState('');
    var [statusid, getstatusid] = useState('');
    console.log(id);
    // var val;
    var [data,setdata] =useState ([]);
    //  var value =[];
    var val = data.find((ele,ind)=>{ return ele._id == id })
    useEffect(() => {
        update();
      }, [])
    
    useEffect(()=>{
        if(val){
            getname( val.name || '');
            getcontact(val.contact || '');
            getbranchname(val.branch_id ? val.branch_id._id : '');
            getbranchid(val.branch_id || '');
            getcoursename(val.course_id ? val.course_id._id : '');
            getcourseid(val.course_id || '')
            getrefname(val.ref_id ? val.ref_id._id :'');
            getrefid(val.ref_id || '')
            getjoindate(val.joindate || '');
            getrefdetail(val.ref_by || '')
            getrolename(val.inq_by ? val.inq_by._id : '');
            getroleid(val.inq_by || '');
            getstatusname(val.status ? val.status._id : '');
            getstatusid(val.status || '');
            getstatusdate(val.status_date || '');
            getindate(val.inq_date || '');
        }
      },[val]);
    const update=() => {
        let token = localStorage.getItem('token');
        var headers = {
          Authorization:token,
        }
        axios.get('/branch/view_branch',{headers})
        .then(function (response) {
            // handle success
            console.log(response.data.data);
            setbranch(response.data.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        }, [])
    axios.get('/role/view_role',{headers})
        .then(function (response) {
            // handle success
            console.log(response.data.data);
            setrole(response.data.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        }, [])
    axios.get('/course/view_course',{headers})
        .then(function (response) {
            // handle success
            console.log(response.data.data);
            setcourse(response.data.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        }, [])
    axios.get('/reference/view_reference',{headers})
    .then(function (response) {
        // handle success
        console.log(response.data.data);
        setref(response.data.data);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    }, [])
    axios.get('/status/view_status',{headers})
        .then(function (response) {
            // handle success
            console.log(response.data.data);
            setstatus(response.data.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        }, [])
        axios.get('/inquiry/view_inquiry',{headers})
            .then(function (response) {
                // handle success
                console.log(response.data.data);
                setdata(response.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            // value = data;
            console.log(val);

 
    }
    const Submit = async () => {
        const formData = new FormData();
        // formData.append('branch_id', branchname);
        // formData.append('name',name );
        // formData.append('contact', contact);
        // formData.append('course_id', coursename );
        // formData.append('joindate', joindate);
        // // formData.append('ref_id',  );
        // formData.append('ref_by', refdetail);
        // formData.append('inq_by', rolename);
        // formData.append('status', statusname);
        // formData.append('status_date',statusdate );
        // formData.append('inq_date', indate);
        try {
            
        let token = await localStorage.getItem('token');

        console.log(token);
        var headers = {
          Authorization:token,
        }
            const response = await axios.post('/inquiry/update_inquiry/'+id ,{
                branch_id: branchname,
                name:name ,
                contact: contact,
                course_id: coursename ,
                joindate: joindate,
                ref_id: refname,
                ref_by: refdetail,
                inq_by: rolename,
                status: statusname,
                status_date:statusdate,
                inq_date: indate,
            },
            {
                headers 
              });
            console.log(response.data);
            if (response.data) {
                // setlogin(true);
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle error
        }
        console.log("branch",branchname);
    };
    return(
        <div className="dashboard">
        <div className="inquiry">
            <h3>update inquiry</h3>
            
            <div className="d-flex justify-content-between flex-wrap ">
            <div className="text">
                     <h5>inquiry id </h5>
                    <input type="text" value={id} readOnly></input> 
                </div>
                <div className="text">
                    <h5>branch</h5>
                    <select onChange={(e)=>{getbranchname(e.target.value)}} value={branchname}>
                        <option value={branchid._id}>{branchid.branchname}</option>
                        {
                            branch.map((ele,ind)=>{
                                return(
                                    <option value={ele._id}>{ele.branchname}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="text">
                    <h5>name</h5>
                    <input type="text" value={name} onChange={(e)=>{getname(e.target.value)}}></input>
                </div>
                <div className="text">
                    <h5>contact</h5>
                    <input type="text" value={contact} onChange={(e)=>{getcontact(e.target.value)}}></input>
                </div>
                <div className="text">
                    <h5>course</h5>
                    <select onChange={(e)=>{getcoursename(e.target.value)}}>
                    <option value={courseid._id} >{courseid.course}</option>
                    {
                                course.map((ele, ind) => {
                                    return (
                                        <option value={ele._id}>{ele.course}</option>
                                    )
                                })
                            }
                    </select>
                </div>
                {/* <div className="text">
                    <h5>extra info</h5>
                    <input type="text"></input>
                </div> */}
                <div className="text">
                    <h5>join date</h5>
                    <input type="date" value={joindate} onChange={(e)=>{getjoindate(e.target.value)}}></input>
                </div>
                
            <div className="text">
                    <h5>reference</h5>
                    <select onChange={(e)=>{getrefname(e.target.value)}}>
                    <option value={refid._id}>{refid.reference_name}</option>
                    {
                                ref.map((ele, ind) => {
                                    return (
                                        <option value={ele._id}>{ele. reference_name}</option>
                                    )
                                })
                            }
                    </select>
                </div>
                <div className="text">
                    <h5>ref. detail</h5>
                    <input type="text" value={refdetail} onChange={(e)=>{getrefdetail(e.target.value)}}></input>
                </div>
                <div className="text">
                    <h5>inquiry by</h5>
                    <select onChange={(e)=>{getrolename(e.target.value)}}>
                    <option value={roleid._id}>{roleid.rolename}</option>
                    {
                                role.map((ele, ind) => {
                                    return (
                                        <option value={ele._id}>{ele.rolename}</option>
                                    )
                                })
                            }
                    </select>
                </div>
                <div className="text">
                    <h5>status</h5>
                    <select onChange={(e)=>{getstatusname(e.target.value)}}>
                    <option value={statusid._id}  default>{statusid.status}</option>
                    {
                                status.map((ele, ind) => {
                                    return (
                                        <option value={ele._id}>{ele.status }</option>
                                    )
                                })
                            }
                    </select>
                </div>
                <div className="text">
                    <h5>status date</h5>
                    <input type="date" value={statusdate} onChange={(e)=>{getstatusdate(e.target.value)}}></input>
                </div>
                <div className="text">
                    <h5>inquiry date</h5>
                    <input type="date" value={indate} onChange={(e)=>{getindate(e.target.value);}}></input>
                </div>
            </div>
            <div>
            <Link to="/inquiry" className="bttn" onClick={(e)=>{Submit();getname('');getcontact('');getinfo('');getjoindate('default');getrefdetail('');getstatusdate('default');getindate('default');getrolename('');getbranchname('');getrefname('');getcoursename('');getstatusname('')}}>update</Link>
            </div>
        </div>
    </div>
    )
}
export default Updateinquiry