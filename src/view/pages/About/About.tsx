import about from "../../../assets/Colorful Modern Infinity Technology Free Logo.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Info } from "lucide-react";

export function About() {
    const [username, setUsername] = useState<string | null>(null);
    const [role, setRole] = useState<string | null>(null);

    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        const storedRole = localStorage.getItem("role");
        setUsername(storedUsername);
        setRole(storedRole);
    }, []);

    return (
        <div className="bg-gradient-to-b from-blue-50 via-white to-white min-h-screen pt-32 pb-16 px-6 font-sans">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <img
                        src={about}
                        alt="Eventify Logo"
                        className="w-full max-w-sm mx-auto md:mx-0 h-auto rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300"
                    />
                </motion.div>

                {/* Text Section */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h1 className="text-4xl font-extrabold text-blue-800 mb-6 flex items-center gap-2">
                        <Info size={30} /> About Eventify
                    </h1>

                    <p className="text-lg text-gray-700 leading-relaxed mb-5">
                        Welcome to <span className="font-semibold text-blue-600">Eventify</span> — your all-in-one
                        platform for discovering, booking, and managing events. From concerts and webinars to
                        workshops and meetups, we bring organizers and attendees together with ease.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed mb-5">
                        <strong className="text-blue-700">Organizers</strong> can create events, manage tickets,
                        set pricing, and monitor bookings. Meanwhile, <strong className="text-blue-700">customers</strong> can explore events, book tickets securely, and get instant confirmations with QR codes or booking IDs.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed">
                        Whether you're hosting or attending, Eventify ensures a smarter, faster, and more enjoyable
                        event experience.
                    </p>

                    {username && (
                        <div className="mt-6 text-sm text-blue-700">
                            Logged in as: <span className="font-semibold">{username}</span> ({role})
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
