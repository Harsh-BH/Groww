
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css"

const NAV_LINKS = [
    { text: "Book a Ride", link: "/book-ride" },
    { text: "My Trips", link: "/rider/trips" },  // Conditionally remove if the user is a driver
    { text: "Driver", link: "/rider/DriverTrips2" },  // Conditionally remove if the user is NOT a driver
    { text: "Become a Driver", link: "/driver-register" },
];

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const [isDriver, setIsDriver] = useState(null); // New state to track if the user is a driver

    const filteredLinks = NAV_LINKS.filter(({ text }) => {
        if (isDriver === null) return true; // Default behavior before we know the status
        if (isDriver) {
          return text !== "My Trips"; // Remove "My Trips" if the user is a driver
        } else {
          return text !== "Driver"; // Remove "Driver" if the user is NOT a driver
        }
      });


    return (
        <header>
            <nav className="w-[90%] fixed top-0 left-1/2 transform -translate-x-1/2 backdrop-blur-md bg-main bg-opacity-60 z-10 px-8 py-4 mt-2 border-b-4 border-[#B48E5A] rounded-lg">
                <div className="flex flex-wrap justify-between items-center mx-auto md:px-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <NavLink to="/" className="flex items-center">
                            <img
                                src="/DOC-20240929-WA0041_x16_fast (1).jpg" // Path from the public folder
                                alt="RideX Logo"
                                className="w-12 h-12 mr-2" // Adjust width and height as needed
                            />
                            <p className="text-2xl font-bold text-white">RideX</p>
                        </NavLink>

                        <button
                            data-collapse-toggle="mobile-menu"
                            type="button"
                            className="inline-flex items-center text-sm text-white rounded-lg lg:hidden ml-2"
                            onClick={() => setOpen((prev) => !prev)}
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                {isOpen ? (
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                ) : (
                                    <path
                                        fillRule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clipRule="evenodd"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className={`${isOpen ? "" : "hidden"} lg:flex lg:w-auto`}>
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            {filteredLinks.map(({ text, link }) => (
                                <li key={text}>
                                    <NavLink
                                        to={link}
                                        className={({ isActive }) =>
                                            isActive
                                                ? "capitalize block py-2 pr-4 pl-3 text-white font-bold lg:text-primary-700 lg:p-0 dark:text-white nav-link-active"
                                                : "capitalize block py-2 pr-4 pl-3 text-white font-semibold lg:p-0 hover:text-primary-700 transition-all duration-300 ease-in-out nav-link"
                                        }
                                    >
                                        {text}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Action buttons */}
                   
                </div>
            </nav>
        </header>
    );
};

export default Navbar;