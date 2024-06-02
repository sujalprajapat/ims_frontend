import { Container } from 'react-bootstrap';
import { FaBell } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { RiContactsBookLine } from "react-icons/ri";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { FaBookOpen } from "react-icons/fa";
import { VscReferences } from "react-icons/vsc";
import { FaClipboardQuestion } from "react-icons/fa6";
import { GrStatusGood } from "react-icons/gr";
import { GoPlus } from "react-icons/go";
import { FiLogOut } from "react-icons/fi";
import { RxUpdate } from "react-icons/rx";
import { FiMinus } from "react-icons/fi";
import { MdOutlineViewComfyAlt } from "react-icons/md";
import { Link } from 'react-router-dom';
function button(){
    return(
        <div className="wrapper">
        <input type="checkbox" id="toogle" className="hidden-trigger" />
        <label htmlFor="toogle" className="circle">
          <svg className="svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={48} height={48} xmlSpace="preserve" version="1.1" viewBox="0 0 48 48">
            <image width={48} height={48} xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAbElEQVR4Ae3XwQnFQAiE4eVVsGAP1mkPFjwvQvYSWCQYCYGZv4Dv5MGB5ghcIiDQI+kCftCzNsAR8y5gYu2rwCBAgMBTgEC3rek2yQEtAZoDjso8AyaKexmIDJUZD40AAQIE0gwx449GgMC9/t0b7GTsa7J+AAAAAElFTkSuQmCC" />
          </svg>
        </label>
        <div className="subs">
          <button className="sub-circle">
            <input defaultValue={1} name="sub-circle" type="radio" id="sub1" className="hidden-sub-trigger" />
            {/* <label htmlFor="sub1" /> */}
            <Link className="label" to="/dashboard"><MdOutlineDashboardCustomize /></Link>
          </button>
          <button className="sub-circle">
            <input defaultValue={1} name="sub-circle" type="radio" id="sub2" className="hidden-sub-trigger" />
            <Link to="/admin" className="label"><GrUserAdmin></GrUserAdmin></Link>
          </button>
          <button className="sub-circle">
            <input defaultValue={1} name="sub-circle" type="radio" id="sub3" className="hidden-sub-trigger" />
            <Link to="/role" className="label"><RiContactsBookLine></RiContactsBookLine></Link>
          </button>
          <button className="sub-circle">
            <input defaultValue={1} name="sub-circle" type="radio" id="sub4" className="hidden-sub-trigger" />
            {/* <label htmlFor="sub4" /> */}
            <Link to="/branch" className="label"><HiBuildingOffice2></HiBuildingOffice2></Link>
          </button>
          <button className="sub-circle">
            <input defaultValue={1} name="sub-circle" type="radio" id="sub5" className="hidden-sub-trigger" />
            {/* <label htmlFor="sub5" /> */}
            <Link to="/course" className="label"><FaBookOpen></FaBookOpen></Link>
          </button>
          <button className="sub-circle">
            <input defaultValue={1} name="sub-circle" type="radio" id="sub6" className="hidden-sub-trigger" />
            {/* <label htmlFor="sub6" /> */}
            <Link to="/ref" className="label"><VscReferences></VscReferences></Link>
          </button>
          <button className="sub-circle">
            <input defaultValue={1} name="sub-circle" type="radio" id="sub7" className="hidden-sub-trigger" />
            {/* <label htmlFor="sub7" /> */}
            <Link to="/status" className="label"><GrStatusGood></GrStatusGood></Link>
          </button>
          <button className="sub-circle">
            <input defaultValue={1} name="sub-circle" type="radio" id="sub8" className="hidden-sub-trigger" />
            {/* <label htmlFor="sub8" /> */}
            <Link to="/inquiry" className="label"><FaClipboardQuestion></FaClipboardQuestion></Link>
          </button>
        </div>
      </div>
    )
}
export default button;