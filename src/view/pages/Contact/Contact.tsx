import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import logo from "../../../assets/Colorful Modern Infinity Technology Free Logo.png";

type FormData = {
    name: string;
    email: string;
    message: string;
};

export function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log("Form data submitted:", data);
        alert(`Thank you for reaching out, ${data.name}!`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 flex items-center justify-center px-4 py-10 mt-24">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 overflow-hidden"
            >
                {/* Left Side - Logo and Info */}
                <div className="bg-indigo-600 text-white flex flex-col items-center justify-center p-10 space-y-6">
                    <motion.img
                        src={logo}
                        alt="Logo"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="h-40 w-auto drop-shadow-lg rounded-xl border-2 border-white p-2"
                    />
                    <h2 className="text-3xl font-extrabold text-center">Let’s Talk</h2>
                    <p className="text-center text-indigo-100">
                        We'd love to hear from you! Whether you have a question, feedback, or a business inquiry — drop us a message.
                    </p>
                </div>

                {/* Right Side - Form */}
                <div className="p-10">
                    <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">Contact Us</h2>
                    <form
                        className="space-y-6"
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                        autoComplete="off"
                    >
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">
                                Your Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Your Name"
                                {...register("name", {
                                    required: "Name is required",
                                    pattern: {
                                        value: /^[A-Za-z\s]+$/,
                                        message: "Invalid name format",
                                    },
                                })}
                                className={`w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ${
                                    errors.name ? "border-red-500" : "border-gray-300"
                                }`}
                            />
                            {errors.name && (
                                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Invalid email address",
                                    },
                                })}
                                className={`w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ${
                                    errors.email ? "border-red-500" : "border-gray-300"
                                }`}
                            />
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-gray-700 font-semibold mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                placeholder="Write your message here..."
                                {...register("message", {
                                    required: "Message is required",
                                    pattern: {
                                        value: /^[\w\s.,!?'"-]+$/,
                                        message: "Invalid message format",
                                    },
                                })}
                                className={`w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none ${
                                    errors.message ? "border-red-500" : "border-gray-300"
                                }`}
                            ></textarea>
                            {errors.message && (
                                <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                            )}
                        </div>

                        {/* Submit Button with Animation */}
                        <div className="text-center">
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl shadow-lg transition-transform"
                            >
                                Send Message ✉️
                            </motion.button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </div>
    );
}
