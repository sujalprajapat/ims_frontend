import { Link } from "react-router-dom";
function deletecourse() {
    return (
        <div className="dashboard">
            <div className="adminadd">
                <h3>remove course</h3>
                <h5>course Id</h5>
                <input type="text"></input>
                <Link>delete</Link>
            </div>
        </div>
    )
}
export default deletecourse