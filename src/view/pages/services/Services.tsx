/*
import about from "../../../assets/Colorful Modern Infinity Technology Free Logo.png";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

export function Services() {
    const [username,setUsername] = useState<string | null>(null);
    const [role,setRole] = useState<string | null>(null);
    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        const storedRole = localStorage.getItem("role");
        setUsername(storedUsername);
        setRole(storedRole);
    }, []);
    return (
        <div className="px-6 pt-32 pb-16 max-w-5xl mx-auto font-sans">
            {
                role === "customer" && (
                    <div className="space-y-12">
                        {/!* Header *!/}
                        <div className="text-center">
                            <h1 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h1>
                            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                                At <span className="font-semibold">Eventify</span>, we offer a complete suite of tools and features to make both organizing and attending events effortless and enjoyable.
                            </p>
                        </div>

                        {/!* Services Grid *!/}
                        <div className="grid md:grid-cols-2 gap-10 items-start">
                            {/!* Organizer Services *!/}
                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">For Organizers</h2>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg leading-relaxed">
                                    <li>Sign up and create events with custom details (title, description, date, pricing, and more).</li>
                                    <li>Upload event posters or banners to promote your events.</li>
                                    <li>Manage seat availability and prevent overbooking.</li>
                                    <li>Track ticket sales, view booking data, and monitor event capacity.</li>
                                    <li>Access a personalized dashboard with event status and revenue reports.</li>
                                </ul>
                            </div>

                            {/!* Customer Services *!/}
                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">For Customers</h2>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg leading-relaxed">
                                    <li>Browse and search for events by date, category, or location.</li>
                                    <li>View event details, images, and pricing before booking.</li>
                                    <li>Book tickets online securely with instant email confirmation.</li>
                                    <li>Receive QR codes or booking IDs for easy check-in.</li>
                                    <li>View upcoming events in calendar or list view and sync to your calendar.</li>
                                </ul>
                            </div>
                        </div>

                        {/!* Optional Features *!/}
                        <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Additional Features</h2>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg leading-relaxed">
                                <li>QR code scanning system for fast event check-ins.</li>
                                <li>Promo codes and discount options for event promotions.</li>
                                <li>Live chat with organizers for quick support.</li>
                                <li>Email and push notifications for event updates and reminders.</li>
                            </ul>
                        </div>
                    </div>
                )
            }
        </div>

    );
}*/

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
