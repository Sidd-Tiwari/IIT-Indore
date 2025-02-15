import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaUser, FaPhoneVolume } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { HiDocumentPlus } from "react-icons/hi2";
import { MdWorkHistory, MdContactPhone } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";

const NavBar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [isDropdownOpen, setDropdownOpen] = useState(false); // For profile dropdown

    const handleSignOut = () => {
        // Implement your sign-out logic here (e.g., clearing local storage, API call)
        console.log("Signing out...");
        setDropdownOpen(false); // Close the dropdown after sign-out
    };

    return (
        <div className="d-flex">
            {/* Sidebar */}
            <aside className={`bg-dark text-white p-3 ${isSidebarOpen ? "d-block" : "d-none"} d-md-block`} style={{ width: "250px", height: "100vh", position: "fixed" }}>
                <div className="d-flex align-items-center mb-4">
                    <img src="./healthcare.jpeg" alt="Logo" className="rounded-circle me-2" width={50} height={50} /> {/* Removed public/ */}
                    <h2 className="m-0">HealthCare</h2>
                </div>
                <nav>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a href="#" className="nav-link text-white"><FaHome className="me-2" /> Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-white"><FaUser className="me-2" /> Profile</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-white"><MdContactPhone className="me-2" /> Appointment</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-white"><GiMedicines className="me-2" /> Medicine</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-white"><MdWorkHistory className="me-2" /> Medical History</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-white"><HiDocumentPlus className="me-2" /> Certificate</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-white"><FaPhoneVolume className="me-2" /> Emergency Contact</a>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-grow-1" style={{ marginLeft: isSidebarOpen ? "250px" : "0px", width: "100%" }}>
                {/* Top Navbar */}
                <nav className="navbar navbar-light bg-white shadow-sm px-3">
                    <button className="btn btn-success d-md-none" onClick={() => setSidebarOpen(!isSidebarOpen)}>
                        <TiThMenu />
                    </button>
                    <div className="ms-auto position-relative"> {/* Added position-relative */}
                        <img src="userphoto" alt="Profile" className="rounded-circle" width={50} height={50} onClick={() => setDropdownOpen(!isDropdownOpen)} style={{cursor:"pointer"}} /> {/* Removed public/ and added cursor style */}
                        {isDropdownOpen && ( // Conditionally render the dropdown
                            <div className="dropdown-menu dropdown-menu-end mt-2 shadow" style={{position:"absolute", right:0}}> {/* Added dropdown-menu-end for right alignment */}
                                <a className="dropdown-item" href="#">Profile</a> {/* Add profile link if needed */}
                                <button className="dropdown-item" onClick={handleSignOut}>Sign Out</button> {/* Sign out button */}
                            </div>
                        )}
                    </div>
                </nav>

                {/* Page Content */}
                <main className="p-4" style={{minHeight:"calc(100vh - 100px)"}}> {/* Added min-height */}
                    <h1 className="h4">Welcome to the Dashboard</h1>
                    <p className="text-muted">Your content goes here...</p>
                    {/* Add hover effect to main content area */}
                    <div className="p-4 rounded" style={{ backgroundColor: "#f8f9fa", transition: "background-color 0.3s ease" , cursor:"pointer"}}
                        onMouseEnter={(e) => e.target.style.backgroundColor = "#e9ecef"}
                        onMouseLeave={(e) => e.target.style.backgroundColor = "#f8f9fa"}>
                           {/* Content inside the box */}
                           <p>This is the content area with a hover effect.</p>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default NavBar;