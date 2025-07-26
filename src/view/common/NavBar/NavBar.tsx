import { Link } from "react-router-dom";
import logo from "../../../assets/Colorful Modern Infinity Technology Free Logo (1).png";
import { useEffect, useState } from "react";

export function NavBar() {
    const [username, setUsername] = useState<string | null>(null);
    const [role, setRole] = useState<string | null>(null);

    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        const storedRole = localStorage.getItem("role");
        setUsername(storedUsername);
        setRole(storedRole);
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg text-white">
            {/* Logo + Title */}
            <div className="flex items-center gap-3">
                <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
                <h1 className="text-2xl font-bold tracking-wide">Eventify</h1>
            </div>

            {/* Role-based Navigation */}
            <ul className="flex items-center gap-6 text-sm font-medium">
                {role === "customer" && (
                    <>
                        <li><Link to="/" className="hover:text-gray-200 transition">Home</Link></li>
                        <li><Link to="/about" className="hover:text-gray-200 transition">About</Link></li>
                        <li><Link to="/services" className="hover:text-gray-200 transition">Our Services</Link></li>
                        <li><Link to="/contact" className="hover:text-gray-200 transition">Contact</Link></li>
                        <li><Link to="/shopping-cart" className="hover:text-gray-200 transition">My Cart</Link></li>
                    </>
                )}
                {role === "organizer" && (
                    <>
                        <li><Link to="/" className="hover:text-gray-200 transition">Events Manage</Link></li>
                        <li><Link to="/concerts-manage" className="hover:text-gray-200 transition">Concerts Manage</Link></li>
                        <li><Link to="/about" className="hover:text-gray-200 transition">About</Link></li>
                        <li><Link to="/payment" className="hover:text-gray-200 transition">Payment</Link></li>
                        <li><Link to="/users" className="hover:text-gray-200 transition">Users</Link></li>
                    </>
                )}
            </ul>

            {/* Log Out + User Info */}
            <div className="flex items-center gap-4">
                {username && (
                    <span className="text-sm font-semibold hover:text-gray-200 transition">
                        {username}
                    </span>
                )}
                <Link
                    to="/login"
                    className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-lg transition duration-300"
                >
                    <span>Log Out</span>
                </Link>
            </div>
        </nav>
    );
}
