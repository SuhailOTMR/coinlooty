import React from 'react';
import Style from './style.module.css';
import { BsGlobe } from "react-icons/bs";
import { CiMenuFries } from "react-icons/ci";
import { FaHandHoldingUsd } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";

const Navbar = () => {
    return (
        <>



            <div className="container-fluid d-flex justify-content-between align-items-center px-2 flex-nowrap" style={{
                backgroundColor: "#141524",
                height: "80px",
                width: "100vw",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.6)",  
                position: 'fixed',
                zIndex: '1000'
            }}>
                {/* Left */}
                <div className="d-flex align-items-center gap-2">
                    <a className="navbar-brand" href="#">
                        <img src="/logo.png" alt="Logo" className={Style.logo} />
                    </a>
                    <div className={Style.navmenu}>
                        <div style={{display:"flex",gap:"4px"}}>
                           <FaHandHoldingUsd style={{color:"#a9a9ca",fontSize:"20px"}}/>
                           <span style={{color:"#a9a9ca"}}>Earn</span>
                        </div>
                        <div style={{display:"flex",gap:"4px",marginTop:"4px"}}>
                           <BsCashCoin style={{color:"#a9a9ca",fontSize:"20px",marginTop:"5px"}}/>
                           <span style={{color:"#a9a9ca"}}>Cashout</span>
                        </div>
                    </div>
                </div>

                {/* Right */}
                <div className="d-flex align-items-center gap-2">
                    {/* <span className={Style.navmenu}><BsGlobe style={{ fontSize: "20px" }} /></span> */}
                     <button className={` btn ${Style.navmenu}`}><BsGlobe style={{ fontSize: "20px" ,color:"#a9a9ca"}} /></button>
                    <div className={Style.info}>
                        <button className={Style.custombtn}>Login</button>
                        <button className={Style.custombtn}>Sign Up</button>
                    </div>

                    {/* Toggler for mobile */}
                    <button
                        className={`btn ${Style.togglerBtn}`}
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight"
                    >
                        <CiMenuFries style={{ fontSize: "22px" }} />
                    </button>
                </div>
            </div>


            {/* Offcanvas for Mobile */}
            <div
                className="offcanvas offcanvas-end"
                tabIndex="-1"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Menu</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav">
                        <li><a className="nav-link" href="#">Home</a></li>
                        <li><a className="nav-link" href="#">About</a></li>
                        <li><a className="nav-link" href="#">Contact</a></li>
                        <li><a className="nav-link" href="#">Help</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;


