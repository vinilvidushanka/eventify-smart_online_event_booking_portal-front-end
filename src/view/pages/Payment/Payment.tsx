
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
        paidBy: string; // optional: customer username or name
    }
        | undefined;

    useEffect(() => {
        if (!paymentData) {
            navigate("/payment");
        }
    }, [paymentData, navigate]);

    if (!paymentData) {
        return (
            <div className="flex items-center justify-center min-h-screen text-gray-600">
                Loading payment info...
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-blue-100 flex flex-col items-center justify-center p-6">
            <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-5xl border border-blue-200">
                <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
                    💳 Payment Record
                </h1>

                <p className="text-center text-gray-500 mb-4 italic">
                    Below is the summary of a completed payment.
                </p>

                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm sm:text-base text-left mb-6 border rounded-xl overflow-hidden">
                        <thead className="bg-blue-200 text-blue-900">
                        <tr>
                            <th className="px-4 py-3">#</th>
                            <th className="px-4 py-3">Ticket</th>
                            <th className="px-4 py-3 text-center">Qty</th>
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
                                <td className="px-4 py-3 font-medium">{item.tickets.title}</td>
                                <td className="px-4 py-3 text-center">{item.ticketsCount}</td>
                                <td className="px-4 py-3">
                                    {item.tickets.currency} {item.tickets.price}
                                </td>
                                <td className="px-4 py-3 font-semibold text-blue-900">
                                    {item.tickets.currency}{" "}
                                    {(item.tickets.price * item.ticketsCount).toFixed(2)}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-between items-center text-lg text-gray-700">
                    <span className="font-medium">
                        👤 Paid by:{" "}
                        <span className="text-blue-800 font-semibold">
                            {paymentData.paidBy || "Unknown"}
                        </span>
                    </span>
                    <span className="font-bold text-green-700 text-xl">
                        Total Paid: Rs. {paymentData.totalAmount}
                    </span>
                </div>

                <div className="mt-6 text-center">
                    <button
                        onClick={() => navigate("/organizer/dashboard")}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow transition font-semibold"
                    >
                        Back to Dashboard
                    </button>
                </div>
            </div>
        </div>
    );
}
