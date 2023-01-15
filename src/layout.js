import React from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "./component/Header/Header";
import Sidebar from "./component/Sidebar/Sidebar";

const Layout = ({ children }) => {
  const location = useLocation();
console.log(location.pathname);
  return (
    <>
    <div className="g-sidenav-show  bg-gray-100">
       {location.pathname.includes("/admin/") ? (
      <><Sidebar /><main className="main-content mt-1 border-radius-lg ">
            <Header />

            <div className="container-fluid py-5 ">
              {children}
              <footer className="footer pt-5  ">
                <div className="container-fluid">
                  <div className="row align-items-center justify-content-lg-between">
                    <div className="col-lg-12 mb-lg-0 mb-4">
                      <div className="copyright text-center text-sm text-muted text-lg-start"></div>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </main></>
      ) : (
        <><Sidebar /><main className=" mt-1 border-radius-lg ">
            <Header />

            <div className="container-fluid py-5 ">
              {children}
              <footer className="footer pt-5  ">
                <div className="container-fluid">
                  <div className="row align-items-center justify-content-lg-between">
                    <div className="col-lg-12 mb-lg-0 mb-4">
                      <div className="copyright text-center text-sm text-muted text-lg-start"></div>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </main></>
    )}
    </div>
    </>
  );
};

export default Layout;
