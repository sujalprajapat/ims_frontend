import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Update() {
    var [data, setdata] = useState([]);
    var [branch, setbranch] = useState([]);
    var [role, setrole] = useState([]);
    var [name, getname] = useState(' ')
    var [email, getemail] = useState('');
    var [pass, getpass] = useState('');
    var [contact, getcontact] = useState('');
    var [branchname, getbranchname] = useState('');
    var [branchid, getbranchid] = useState('');
    var [rolename, getrolename] = useState('');
    var [roleid, getroleid] = useState('');
    var { id } = useParams();
    //  var value =[];
    var val = data.find((ele, ind) => { return ele._id == id })
    useEffect(() => {

        let token = localStorage.getItem('token');
        var headers = {
            Authorization: token,
        }
        axios.get('https://inquiry-management-system-api.onrender.com/branch/view_branch', { headers })
            .then(function (response) {
                // handle success
                setbranch(response.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            }, [])
        axios.get('https://inquiry-management-system-api.onrender.com/role/view_role', { headers })
            .then(function (response) {
                // handle success
                setrole(response.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            }, [])
        update();
    }, [])

    useEffect(() => {
        if (val) {
            getname(val.name || '');
            getemail(val.email || '');
            getpass(val.password || '');
            getcontact(val.contact || '');
            getbranchid(val.branch_id);
            getbranchname(val.branch_id ? val.branch_id._id : " ");
            getroleid(val.role);
            getrolename(val.role ? val.role.id : '');
        }
    }, [val]);
    const update = () => {
        let token = localStorage.getItem('token');
        var headers = {
            Authorization: token,
        }
        axios.get('https://inquiry-management-system-api.onrender.com/view_admin', { headers })
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
        if (val) {
            getname(val.status || '');
        }
    }
    const Submit = async () => {
        try {
            let token = await localStorage.getItem('token');

            console.log(token);
            var headers = {
                Authorization: token,
            }
            const response = await axios.post('https://inquiry-management-system-api.onrender.com/update_admin/' + id, {
                name: name,
                email: email,
                password: pass,
                role: rolename,
                branch_id: branchname,
                contact: contact,
            },
                {
                    headers
                }
            );
            console.log(response.data);
            if (response.data) {
            }
            console.log(token);
            var headers = {
                Authorization: token,
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle error
        }
    };
    return (
        <div className="dashboard">
            <div className="adminadd">
                <h3>update admin</h3>
                <h5>id</h5>
                <input type="text" placeholder="" value={id} readOnly></input>
                <h5>name</h5>
                <input type="text" placeholder="" value={name} onChange={(e) => { getname(e.target.value) }}></input>
                <h5>email</h5>
                <input type="email" placeholder="" value={email} onChange={(e) => { getemail(e.target.value) }}></input>
                <h5>password</h5>
                <input type="password" placeholder="" value={pass} onChange={(e) => { getpass(e.target.value) }}></input>
                <h5>contact</h5>
                <input type="text" value={contact} onChange={(e) => { getcontact(e.target.value) }}></input>

                <h5>role</h5>
                <select onChange={(e) => { getrolename(e.target.value) }} >
                    <option value={roleid._id}>{roleid.rolename}</option>
                    {
                        role.map((ele, ind) => {
                            return (
                                <option value={ele._id}>{ele.rolename}</option>
                            )
                        })
                    }
                </select>
                <h5>BRANCH</h5>
                <select onChange={(e) => { getbranchname(e.target.value) }} >
                    <option value={branchid._id}>{branchid.branchname}</option>
                    {
                        branch.map((ele, ind) => {
                            return (
                                <option value={ele._id}>{ele.branchname}</option>
                            )
                        })
                    }
                </select>
                <br></br>
                <Link to="/admin" className="bttn" onClick={() => { Submit() }}>update</Link>
            </div>
        </div>
    )
}
export default Update