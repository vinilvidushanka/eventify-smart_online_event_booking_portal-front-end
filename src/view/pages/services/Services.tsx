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
                        {/* Header */}
                        <div className="text-center">
                            <h1 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h1>
                            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                                At <span className="font-semibold">Eventify</span>, we offer a complete suite of tools and features to make both organizing and attending events effortless and enjoyable.
                            </p>
                        </div>

                        {/* Services Grid */}
                        <div className="grid md:grid-cols-2 gap-10 items-start">
                            {/* Organizer Services */}
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

                            {/* Customer Services */}
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

                        {/* Optional Features */}
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
}