/*
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function Payment() {
    const location = useLocation();
    const navigate = useNavigate();

    const paymentData = location.state as
        | {
        totalAmount: string;
        tickets: {
            tickets: {
                id: number;
                title: string;
                venue: string;
                date: string;
                time: string;
                price: number;
                currency: string;
                image: string;
            };
            ticketsCount: number;
        }[];
    }
        | undefined;

    useEffect(() => {
        if (!paymentData) {
            navigate("/cart");
        }
    }, [paymentData, navigate]);

    if (!paymentData) return null;

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 flex flex-col items-center justify-center p-6">
            <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-4xl border border-blue-200">
                <h1 className="text-4xl font-extrabold text-center text-green-700 mb-6 drop-shadow">
                    ✅ Payment Successful!
                </h1>

                <p className="text-center text-gray-600 mb-8">
                    Thank you for your purchase. Below is your order summary:
                </p>

                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm sm:text-base text-left mb-6">
                        <thead className="bg-blue-200 text-blue-900">
                        <tr>
                            <th className="px-4 py-3">#</th>
                            <th className="px-4 py-3">Title</th>
                            <th className="px-4 py-3">Qty</th>
                            <th className="px-4 py-3">Unit Price</th>
                            <th className="px-4 py-3">Total</th>
                        </tr>
                        </thead>
                        <tbody className="text-gray-800">
                        {paymentData.tickets.map((item, index) => (
                            <tr
                                key={item.tickets.id}
                                className={`${
                                    index % 2 === 0 ? "bg-blue-50" : "bg-blue-100"
                                } border-b border-blue-300`}
                            >
                                <td className="px-4 py-3">{index + 1}</td>
                                <td className="px-4 py-3 font-semibold">
                                    {item.tickets.title}
                                </td>
                                <td className="px-4 py-3 text-center">
                                    {item.ticketsCount}
                                </td>
                                <td className="px-4 py-3">
                                    {item.tickets.currency} {item.tickets.price}
                                </td>
                                <td className="px-4 py-3 font-bold text-blue-800">
                                    {item.tickets.currency}{" "}
                                    {(item.tickets.price * item.ticketsCount).toFixed(2)}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                <div className="text-right text-2xl font-extrabold text-green-700">
                    Total Paid: Rs. {paymentData.totalAmount}
                </div>

                <div className="mt-8 text-center">
                    <button
                        onClick={() => navigate("/")}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow transition font-semibold"
                    >
                        Back to Home 🏠
                    </button>
                </div>
            </div>
        </div>
    );
}
*/


import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function Payment() {
    const location = useLocation();
    const navigate = useNavigate();

    const paymentData = location.state as
        | {
        totalAmount: string;
        tickets: {
            tickets: {
                id: number;
                title: string;
                venue: string;
                date: string;
                time: string;
                price: number;
                currency: string;
                image: string;
            };
            ticketsCount: number;
        }[];
    }
        | undefined;

    useEffect(() => {
        if (!paymentData) {
            navigate("/cart");
        } else {
            console.log("Payment Data:", paymentData);
        }
    }, [paymentData, navigate]);

    // temporarily comment this out for debugging
    // if (!paymentData) return null;

    if (!paymentData) {
        return <div>Loading payment data...</div>;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 flex flex-col items-center justify-center p-6">
            <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-4xl border border-blue-200">
                <h1 className="text-4xl font-extrabold text-center text-green-700 mb-6 drop-shadow">
                    ✅ Payment Successful!
                </h1>

                <p className="text-center text-gray-600 mb-8">
                    Thank you for your purchase. Below is your order summary:
                </p>

                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm sm:text-base text-left mb-6">
                        <thead className="bg-blue-200 text-blue-900">
                        <tr>
                            <th className="px-4 py-3">#</th>
                            <th className="px-4 py-3">Title</th>
                            <th className="px-4 py-3">Qty</th>
                            <th className="px-4 py-3">Unit Price</th>
                            <th className="px-4 py-3">Total</th>
                        </tr>
                        </thead>
                        <tbody className="text-gray-800">
                        {paymentData.tickets.map((item, index) => (
                            <tr
                                key={item.tickets.id}
                                className={`${
                                    index % 2 === 0 ? "bg-blue-50" : "bg-blue-100"
                                } border-b border-blue-300`}
                            >
                                <td className="px-4 py-3">{index + 1}</td>
                                <td className="px-4 py-3 font-semibold">
                                    {item.tickets.title}
                                </td>
                                <td className="px-4 py-3 text-center">
                                    {item.ticketsCount}
                                </td>
                                <td className="px-4 py-3">
                                    {item.tickets.currency} {item.tickets.price}
                                </td>
                                <td className="px-4 py-3 font-bold text-blue-800">
                                    {item.tickets.currency}{" "}
                                    {(item.tickets.price * item.ticketsCount).toFixed(2)}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                <div className="text-right text-2xl font-extrabold text-green-700">
                    Total Paid: Rs. {paymentData.totalAmount}
                </div>

                <div className="mt-8 text-center">
                    <button
                        onClick={() => navigate("/")}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow transition font-semibold"
                    >
                        Back to Home 🏠
                    </button>
                </div>
            </div>
        </div>
    );
}
