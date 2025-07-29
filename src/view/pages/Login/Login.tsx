
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { backendApi } from "../../../api.ts";
import type { UserData } from "../../../modal/UserData.ts";
import { getUserFromToken } from "../../../auth/auth.ts";
import { useState } from "react";
import logo from "../../../assets/Colorful Modern Infinity Technology Free Logo.png";

type FormData = {
    username: string;
    password: string;
};

type RegisterFormData = {
    username: string;
    email: string;
    password: string;
};

export function Login() {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<FormData>();
    const {
        register: registerRegister,
        handleSubmit: handleRegisterSubmit,
        reset: resetRegisterForm,
    } = useForm<RegisterFormData>();

    const [showRegister, setShowRegister] = useState(false);

    const authenticateUser = async (data: FormData) => {
        try {
            const userCredentials = {
                username: data.username,
                password: data.password,
            };

            const response = await backendApi.post("/auth/login", userCredentials);
            const accessToken = response.data.accessToken;
            const refreshToken = response.data.refreshToken;

            localStorage.setItem("token", accessToken);
            localStorage.setItem("refreshToken", refreshToken);

            const user: UserData = getUserFromToken(accessToken);
            localStorage.setItem("username", user.username as string);
            localStorage.setItem("role", user.role as string);

            alert("Successfully logged in!");
            navigate("/");
        } catch (error) {
            console.error(error);
            alert("Login failed. Please check your credentials.");
        }
    };

    const registerUser = async (data: RegisterFormData) => {
        try {
            const dataToSend = { ...data, role: "customer" };
            await backendApi.post("/auth/register", dataToSend);
            alert("Registration successful! You can now sign in.");
            setShowRegister(false);
            resetRegisterForm();
        } catch (error) {
            console.error(error);
            alert("Registration failed. Please try again.");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex items-center justify-center px-4 py-12">
            <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 relative">
                <div className="flex justify-center mb-8">
                    <img src={logo} alt="Eventify Logo" className="h-16 w-auto" />
                </div>

                <h1 className="text-3xl font-extrabold text-center text-indigo-700 mb-6">
                    Welcome Back
                </h1>

                <form onSubmit={handleSubmit(authenticateUser)} className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block text-sm font-semibold text-indigo-600 mb-1">
                            Username or Email
                        </label>
                        <input
                            id="username"
                            type="text"
                            placeholder="Enter your username or email"
                            {...register("username")}
                            className="w-full px-4 py-3 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition shadow-sm text-sm"
                            autoComplete="username"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-semibold text-indigo-600 mb-1">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            {...register("password")}
                            className="w-full px-4 py-3 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition shadow-sm text-sm"
                            autoComplete="current-password"
                            required
                        />
                    </div>

                    <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl shadow-lg transition-transform active:scale-95">
                        Sign In
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-indigo-600">
                    <button
                        onClick={() => navigate("/")}
                        className="hover:underline hover:text-indigo-800 mb-3 block mx-auto"
                    >
                        &larr; Back to Home
                    </button>
                    <p>
                        Don&apos;t have an account? {" "}
                        <button
                            onClick={() => setShowRegister(true)}
                            className="font-semibold underline hover:text-indigo-900"
                        >
                            Register now
                        </button>
                    </p>
                </div>
            </div>

            {/* Register Modal */}
            {showRegister && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 px-4">
                    <div className="relative max-w-md w-full bg-white rounded-3xl shadow-2xl p-8">
                        <button
                            onClick={() => setShowRegister(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-3xl font-bold"
                            aria-label="Close registration form"
                        >
                            &times;
                        </button>

                        <h2 className="text-2xl font-extrabold text-indigo-700 mb-6 text-center">
                            Register Now
                        </h2>

                        <form className="space-y-6" onSubmit={handleRegisterSubmit(registerUser)}>
                            <input
                                type="text"
                                placeholder="Username"
                                {...registerRegister("username")}
                                className="w-full px-4 py-3 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition shadow-sm text-sm"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                {...registerRegister("email")}
                                className="w-full px-4 py-3 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition shadow-sm text-sm"
                                required
                            />
                            <input
                                type="password"
                                placeholder="Create a password"
                                {...registerRegister("password")}
                                className="w-full px-4 py-3 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition shadow-sm text-sm"
                                required
                            />

                            <button
                                type="submit"
                                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl shadow-lg transition-transform active:scale-95"
                            >
                                Register
                            </button>

                            <button
                                type="button"
                                onClick={() => setShowRegister(false)}
                                className="w-full py-3 bg-gray-300 rounded-xl font-semibold hover:bg-gray-400 transition"
                            >
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );

}