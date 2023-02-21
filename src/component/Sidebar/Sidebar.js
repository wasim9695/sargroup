import React from "react";
import "./Sidebar.css";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div> {location.pathname.includes("/admin/") ? (
    <aside
      className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-0 fixed-start ms-3"
      id="sidenav-main"
      style={{ backgroundColor: "white" }}
    >
      <div className="sidenav-header">
        <i
          className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
          aria-hidden="true"
          id="iconSidenav"
        ></i>
        <a
          className="navbar-brand text-lg m-0 font-weight-bolds"
          href="index.php"
        >
          <h3 className="ms-1 text-center" style={{ textColor: "black" }}>
            SRG
          </h3>
        </a>
      </div>
      <hr className="horizontal dark mt-0" />

     
        <div
          className="collapse navbar-collapse  w-auto h-auto"
          id="sidenav-collapse-main"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#Dashboard"
                className="nav-link "
                aria-controls="Dashboard"
                role="button"
                aria-expanded="false"
              >
                <div
                  class="icon ico icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center  me-2"
                  style={{
                    height: "35px",
                    width: "40px",
                    color: "rgb(103, 116, 142)",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.6 483.2 483.9 512 448.5 512H128.1C92.75 512 64.09 483.3 64.09 448V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5H575.8zM288 160C252.7 160 224 188.7 224 224C224 259.3 252.7 288 288 288C323.3 288 352 259.3 352 224C352 188.7 323.3 160 288 160zM256 320C211.8 320 176 355.8 176 400C176 408.8 183.2 416 192 416H384C392.8 416 400 408.8 400 400C400 355.8 364.2 320 320 320H256z" />
                  </svg>
                </div>
                <span
                  className="nav-link-text ms-1"
                  style={{ color: "#67748e" }}
                >
                  Dashboard
                </span>
              </a>
              <div className="collapse " id="Dashboard">
                <ul className="nav ms-2 ps-3">
                  <li className="nav-item ">
                    <Link className="nav-link " to="admin/dashboard">
                      <span
                        className="sidenav-normal"
                        style={{ color: "#67748e" }}
                      >
                        Dashboard
                      </span>
                    </Link>
                  </li>
                  
                </ul>
              </div>
            </li>
            
            <li className="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#UserMAnagement"
                className="nav-link "
                aria-controls="UserMAnagement"
                role="button"
                aria-expanded="false"
              >
                <div
                  class="icon ico icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center  me-2"
                  style={{
                    height: "35px",
                    width: "40px",
                    color: "rgb(103, 116, 142)",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z" />
                  </svg>
                </div>
                <span
                  className="nav-link-text ms-1"
                  style={{ color: "#67748e" }}
                >
                 Financial Year
                </span>
              </a>
              <div className="collapse " id="UserMAnagement">
                <ul className="nav ms-2 ps-3">
                  <li className="nav-item ">
                    <Link className="nav-link " to="admin/financial">
                      <span
                        className="sidenav-normal"
                        style={{ color: "#67748e" }}
                      >
                        Financial Year
                      </span>
                    </Link>
                  </li>
                  
                </ul>
              </div>
            
              
            </li>

            <li className="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#Country"
                className="nav-link "
                aria-controls="UserMAnagement"
                role="button"
                aria-expanded="false"
              >
                <div
                  class="icon ico icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center  me-2"
                  style={{
                    height: "35px",
                    width: "40px",
                    color: "rgb(103, 116, 142)",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z" />
                  </svg>
                </div>
                <span
                  className="nav-link-text ms-1"
                  style={{ color: "#67748e" }}
                >
                Country
                </span>
              </a>
              <div className="collapse " id="Country">
                <ul className="nav ms-2 ps-3">
                  <li className="nav-item ">
                    <Link className="nav-link " to="admin/CountryStateCity">
                      <span
                        className="sidenav-normal"
                        style={{ color: "#67748e" }}
                      >
                       Country List
                      </span>
                    </Link>
                  </li>
                  
                </ul>
              </div>
            
              
            </li>



            <li className="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#statelist"
                className="nav-link "
                aria-controls="UserMAnagement"
                role="button"
                aria-expanded="false"
              >
                <div
                  class="icon ico icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center  me-2"
                  style={{
                    height: "35px",
                    width: "40px",
                    color: "rgb(103, 116, 142)",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z" />
                  </svg>
                </div>
                <span
                  className="nav-link-text ms-1"
                  style={{ color: "#67748e" }}
                >
               State
                </span>
              </a>
              <div className="collapse " id="statelist">
                <ul className="nav ms-2 ps-3">
                  <li className="nav-item ">
                    <Link className="nav-link " to="admin/statelist">
                      <span
                        className="sidenav-normal"
                        style={{ color: "#67748e" }}
                      >
                      State List
                      </span>
                    </Link>
                  </li>
                  
                </ul>
              </div>
            
              
            </li>


            <li className="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#citylist"
                className="nav-link "
                aria-controls="UserMAnagement"
                role="button"
                aria-expanded="false"
              >
                <div
                  class="icon ico icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center  me-2"
                  style={{
                    height: "35px",
                    width: "40px",
                    color: "rgb(103, 116, 142)",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z" />
                  </svg>
                </div>
                <span
                  className="nav-link-text ms-1"
                  style={{ color: "#67748e" }}
                >
               City
                </span>
              </a>
              <div className="collapse " id="citylist">
                <ul className="nav ms-2 ps-3">
                  <li className="nav-item ">
                    <Link className="nav-link " to="admin/citylist">
                      <span
                        className="sidenav-normal"
                        style={{ color: "#67748e" }}
                      >
                      City List
                      </span>
                    </Link>
                  </li>
                  
                </ul>
              </div>
            
              
            </li>

            <li className="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#Emplyee"
                className="nav-link "
                aria-controls="UserMAnagement"
                role="button"
                aria-expanded="false"
              >
                <div
                  class="icon ico icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center  me-2"
                  style={{
                    height: "35px",
                    width: "40px",
                    color: "rgb(103, 116, 142)",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z" />
                  </svg>
                </div>
                <span
                  className="nav-link-text ms-1"
                  style={{ color: "#67748e" }}
                >
               Employee
                </span>
              </a>
              <div className="collapse " id="Emplyee">
                <ul className="nav ms-2 ps-3">
                  <li className="nav-item ">
                    <Link className="nav-link " to="admin/employeeList">
                      <span
                        className="sidenav-normal"
                        style={{ color: "#67748e" }}
                      >
                       Employee List
                      </span>
                    </Link>
                  </li>
                  
                </ul>
              </div>
            
              
            </li>

            <li className="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#Users"
                className="nav-link "
                aria-controls="Users"
                role="button"
                aria-expanded="false"
              >
                <div
                  class="icon ico icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center  me-2"
                  style={{
                    height: "35px",
                    width: "40px",
                    color: "rgb(103, 116, 142)",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z" />
                  </svg>
                </div>
                <span
                  className="nav-link-text ms-1"
                  style={{ color: "#67748e" }}
                >
                 Company
                </span>
              </a>
              <div className="collapse " id="Users">
                <ul className="nav ms-2 ps-3">
                  <li className="nav-item ">
                    <Link className="nav-link " to="admin/company">
                      <span
                        className="sidenav-normal"
                        style={{ color: "#67748e" }}
                      >
                      Company  List
                      </span>
                    </Link>
                  </li>
                  
                </ul>
              </div>
            
              
            </li>




            <li className="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#UsersAll"
                className="nav-link "
                aria-controls="Users"
                role="button"
                aria-expanded="false"
              >
                <div
                  class="icon ico icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center  me-2"
                  style={{
                    height: "35px",
                    width: "40px",
                    color: "rgb(103, 116, 142)",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z" />
                  </svg>
                </div>
                <span
                  className="nav-link-text ms-1"
                  style={{ color: "#67748e" }}
                >
                 User
                </span>
              </a>
              <div className="collapse " id="UsersAll">
                <ul className="nav ms-2 ps-3">
                  <li className="nav-item ">
                    <Link className="nav-link " to="admin/users">
                      <span
                        className="sidenav-normal"
                        style={{ color: "#67748e" }}
                      >
                      User  List
                      </span>
                    </Link>
                  </li>
                  
                </ul>
              </div>
            
              
            </li>




            <li className="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#clients"
                className="nav-link "
                aria-controls="clients"
                role="button"
                aria-expanded="false"
              >
                <div
                  class="icon ico icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center  me-2"
                  style={{
                    height: "35px",
                    width: "40px",
                    color: "rgb(103, 116, 142)",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z" />
                  </svg>
                </div>
                <span
                  className="nav-link-text ms-1"
                  style={{ color: "#67748e" }}
                >
                 Clients Group
                </span>
              </a>
              <div className="collapse " id="clients">
                <ul className="nav ms-2 ps-3">
                  <li className="nav-item ">
                    <Link className="nav-link " to="admin/clientsgroup">
                      <span
                        className="sidenav-normal"
                        style={{ color: "#67748e" }}
                      >
                      Clients Group  List
                      </span>
                    </Link>
                  </li>
                  
                </ul>
              </div>
            
              
            </li>

            <li className="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#Clientss"
                className="nav-link "
                aria-controls="Clientss"
                role="button"
                aria-expanded="false"
              >
                <div
                  class="icon ico icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center  me-2"
                  style={{
                    height: "35px",
                    width: "40px",
                    color: "rgb(103, 116, 142)",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z" />
                  </svg>
                </div>
                <span
                  className="nav-link-text ms-1"
                  style={{ color: "#67748e" }}
                >
                 Clients
                </span>
              </a>
              <div className="collapse " id="Clientss">
                <ul className="nav ms-2 ps-3">
                  <li className="nav-item ">
                    <Link className="nav-link " to="admin/clients">
                      <span
                        className="sidenav-normal"
                        style={{ color: "#67748e" }}
                      >
                      Clients   List
                      </span>
                    </Link>
                  </li>
                  
                </ul>
              </div>
            
              
            </li>


            


     
            

            <li className="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#clientBoutique"
                className="nav-link "
                aria-controls="Company"
                role="button"
                aria-expanded="false"
              >
                <div
                  class="icon ico icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center  me-2"
                  style={{
                    height: "35px",
                    width: "40px",
                    color: "rgb(103, 116, 142)",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z" />
                  </svg>
                </div>
                <span
                  className="nav-link-text ms-1"
                  style={{ color: "#67748e" }}
                >
                 ClientBoutique 
                </span>
              </a>
              <div className="collapse " id="clientBoutique">
                <ul className="nav ms-2 ps-3">
                  <li className="nav-item ">
                    <Link className="nav-link " to="admin/clientBoutique">
                      <span
                        className="sidenav-normal"
                        style={{ color: "#67748e" }}
                      >
                      ClientBoutique  Detail
                      </span>
                    </Link>
                  </li>
                  
                </ul>
              </div>
            
              
            </li>


            <li className="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#ItemTolerance"
                className="nav-link "
                aria-controls="Company"
                role="button"
                aria-expanded="false"
              >
                <div
                  class="icon ico icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center  me-2"
                  style={{
                    height: "35px",
                    width: "40px",
                    color: "rgb(103, 116, 142)",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z" />
                  </svg>
                </div>
                <span
                  className="nav-link-text ms-1"
                  style={{ color: "#67748e" }}
                >
                 ItemTolerance 
                </span>
              </a>
              <div className="collapse " id="ItemTolerance">
                <ul className="nav ms-2 ps-3">
                  <li className="nav-item ">
                    <Link className="nav-link " to="admin/ItemTolerance">
                      <span
                        className="sidenav-normal"
                        style={{ color: "#67748e" }}
                      >
                      ItemTolerance  Detail
                      </span>
                    </Link>
                  </li>
                  
                </ul>
              </div>
            
              
            </li>


            
            

          </ul>
        </div>
      
    </aside>
    ) : (
      <div
        className="collapse navbar-collapse  w-auto h-auto"
        id="sidenav-collapse-main"
      ></div>
    )}
    </div>
  );
};

export default Sidebar;
