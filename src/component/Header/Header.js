import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Header.css";
import { Link, useLocation, useNavigate  } from "react-router-dom";
import { allLogOut } from "../../service/AllApiData-service";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
const logoutAll = async () =>{
  await allLogOut().then(res => {
    navigate('/');
      })
      .catch(err => {
        console.log(err);
      })
}
  return (
    <div>
      {location.pathname.includes("/admin/") ?  (
    <nav
      className="navbar navbar-main navbar-expand-lg position-sticky mt-0 top-1 px-0 mx-4 shadow-none border-radius-xl z-index-sticky"
      id="navbarBlur"
      data-scroll="true"
      style={{ backgroundColor: "white" }}
    >
      <div className="container-fluid py-1 px-3">
        {/* <div className="sidenav-toggler sidenav-toggler-inner d-xl-block d-none ">
          <a href="javascript:;" className="nav-link text-body p-0">
            <div className="sidenav-toggler-inner">
              <i className="sidenav-toggler-line"></i>
              <i className="sidenav-toggler-line"></i>
              <i className="sidenav-toggler-line"></i>
            </div>
          </a>
        </div> */}
        <div
          className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
          id="navbar"
        >
          <h3 class="font-weight-bolder text-info text-gradient text-center display-7">Welcome To Admin</h3>
          <div className="ms-md-auto pe-md-3 d-flex align-items-center">
            
          </div>
          <ul className="navbar-nav  justify-content-end">
            <li className="nav-item d-flex align-items-center">
              <a
                href="javascript:void('0')" onClick={logoutAll}
                className="nav-link text-body font-weight-bold px-0"
              >
                <i className="fa fa-user me-sm-1"></i>
                <span className="d-sm-inline d-none">Logout</span>
              </a>
            </li>
            
            
            
          </ul>
        </div>
      </div>
    </nav>
      ):(<div></div> )}
    </div>
    
  );
};

export default Header;
