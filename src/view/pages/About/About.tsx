import about from "../../../assets/Colorful Modern Infinity Technology Free Logo.png";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
export function About() {
    const [username,setUsername] = useState<string | null>(null);
    const [role,setRole] = useState<string | null>(null);
    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        const storedRole = localStorage.getItem("role");
        setUsername(storedUsername);
        setRole(storedRole);
    }, []);

    return (
        <div className="px-6 py-10 max-w-5xl mx-auto font-sans">
            <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Image Section */}
                <div>
                    <img
                        src={about} // Replace with your actual image path
                        alt="Eventify Collection"
                        className="w-full max-w-xs h-auto rounded-2xl shadow-lg"
                    />
                </div>

                {/* Text Section */}
                <div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">About Eventify</h1>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Welcome to <span className="font-semibold">Eventify</span> — your all-in-one platform for discovering, booking, and managing events. From concerts and webinars to workshops and meetups, we bring organizers and attendees together through a seamless and secure experience.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Event organizers can effortlessly create events, manage tickets, set pricing, and track bookings, while customers can explore upcoming events, book tickets online, and receive instant confirmations with QR codes or booking IDs.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Whether you're hosting or attending, Eventify makes event experiences simpler, smarter, and more enjoyable for everyone involved.
                    </p>
                </div>

            </div>
        </div>
    );
}
