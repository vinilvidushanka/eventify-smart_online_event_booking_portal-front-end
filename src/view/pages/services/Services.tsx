
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    FaUsers,
    FaTicketAlt,
    FaBullhorn,
    FaCheckCircle,
    FaCalendarAlt,
    FaComments,
    FaEnvelope,
    FaQrcode,
    FaTag
} from "react-icons/fa";
import about from "../../../assets/Colorful Modern Infinity Technology Free Logo (1).png";

export function Services() {
    const [username, setUsername] = useState<string | null>(null);
    const [role, setRole] = useState<string | null>(null);

    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        const storedRole = localStorage.getItem("role");
        setUsername(storedUsername);
        setRole(storedRole);
    }, []);

    return (
        <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto font-sans">
            {role === "customer" && (
                <div className="space-y-16">

                    {/* ✨ Animated Intro Section */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
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

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h1 className="text-4xl font-extrabold text-blue-800 mb-4">
                                Empowering Every Event
                            </h1>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Welcome to <span className="text-blue-700 font-semibold">Eventify</span> — your go-to platform for organizing, managing, and attending events effortlessly. We offer smart tools for organizers and a smooth experience for customers.
                            </p>
                        </motion.div>
                    </div>

                    {/* 🚀 Service Cards */}
                    <div className="grid md:grid-cols-2 gap-10">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-blue-100 to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
                        >
                            <h2 className="text-2xl font-semibold text-blue-900 mb-4 flex items-center gap-2"><FaBullhorn /> For Organizers</h2>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start gap-2"><FaCheckCircle className="text-green-600 mt-1" /> Create events with custom details</li>
                                <li className="flex items-start gap-2"><FaCheckCircle className="text-green-600 mt-1" /> Upload posters and banners</li>
                                <li className="flex items-start gap-2"><FaCheckCircle className="text-green-600 mt-1" /> Manage seats and prevent overbooking</li>
                                <li className="flex items-start gap-2"><FaCheckCircle className="text-green-600 mt-1" /> Track sales and engagement</li>
                                <li className="flex items-start gap-2"><FaCheckCircle className="text-green-600 mt-1" /> Dashboard with reports</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-green-100 to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
                        >
                            <h2 className="text-2xl font-semibold text-green-900 mb-4 flex items-center gap-2"><FaUsers /> For Customers</h2>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start gap-2"><FaTicketAlt className="text-purple-600 mt-1" /> Browse and filter events</li>
                                <li className="flex items-start gap-2"><FaTicketAlt className="text-purple-600 mt-1" /> See detailed descriptions</li>
                                <li className="flex items-start gap-2"><FaTicketAlt className="text-purple-600 mt-1" /> Book with secure payment</li>
                                <li className="flex items-start gap-2"><FaTicketAlt className="text-purple-600 mt-1" /> Get QR code confirmations</li>
                                <li className="flex items-start gap-2"><FaTicketAlt className="text-purple-600 mt-1" /> Sync to calendar</li>
                            </ul>
                        </motion.div>
                    </div>

                    {/* ⭐ Additional Features */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm"
                    >
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">✨ Additional Features</h2>
                        <ul className="grid md:grid-cols-2 gap-x-10 gap-y-4 text-gray-700 text-lg">
                            <li className="flex items-center gap-2"><FaQrcode className="text-blue-600" /> QR Code Check-In System</li>
                            <li className="flex items-center gap-2"><FaTag className="text-pink-600" /> Promo Codes & Discounts</li>
                            <li className="flex items-center gap-2"><FaComments className="text-yellow-600" /> Live Chat with Organizers</li>
                            <li className="flex items-center gap-2"><FaEnvelope className="text-red-600" /> Email & Push Notifications</li>
                        </ul>
                    </motion.div>
                </div>
            )}
        </div>
    );
}
