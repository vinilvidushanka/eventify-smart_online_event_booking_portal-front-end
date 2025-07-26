/*
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store.ts";

const images: Record<string, string> = import.meta.glob(
    "../../../assets/products/!*",
    { eager: true, import: "default" }
);

export function TicketCart() {
    const { tickets } = useSelector((state: RootState) => state.cart);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-10">
            <div className="max-w-6xl mx-auto bg-white border border-blue-300 shadow-xl rounded-3xl overflow-hidden">
                <div className="bg-blue-950 text-white py-6 px-8 text-center text-3xl font-bold tracking-wide">
                    🎫 Ticket Cart
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left">
                        <thead className="bg-blue-800 text-white text-sm sm:text-base uppercase">
                        <tr>
                            <th className="px-6 py-4">ID</th>
                            <th className="px-6 py-4">Image</th>
                            <th className="px-6 py-4">Title</th>
                            <th className="px-6 py-4">Venue</th>
                            <th className="px-6 py-4">Date & Time</th>
                            <th className="px-6 py-4">Unit Price</th>
                            <th className="px-6 py-4">Qty</th>
                            <th className="px-6 py-4">Total</th>
                        </tr>
                        </thead>

                        <tbody>
                        {tickets.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={8}
                                    className="text-center px-6 py-8 text-blue-700 font-semibold bg-blue-100 text-lg"
                                >
                                    🛒 No items in your cart.
                                </td>
                            </tr>
                        ) : (
                            tickets.map((item, index) => (
                                <tr
                                    key={item.tickets.id}
                                    className={`${
                                        index % 2 === 0 ? "bg-blue-50" : "bg-blue-100"
                                    } hover:bg-blue-200 transition-colors duration-200`}
                                >
                                    <td className="px-6 py-4 border-t border-blue-200">{item.tickets.id}</td>
                                    <td className="px-6 py-4 border-t border-blue-200">
                                        <img
                                            src={images[`../../../assets/products/${item.tickets.image}`]}
                                            alt={item.tickets.title}
                                            className="w-16 h-16 object-cover rounded-lg mx-auto shadow-sm"
                                        />
                                    </td>
                                    <td className="px-6 py-4 border-t border-blue-200 font-semibold">
                                        {item.tickets.title}
                                    </td>
                                    <td className="px-6 py-4 border-t border-blue-200">{item.tickets.venue}</td>
                                    <td className="px-6 py-4 border-t border-blue-200 whitespace-nowrap">
                                        <span className="block">{item.tickets.date}</span>
                                        <span className="text-gray-600 text-sm">{item.tickets.time}</span>
                                    </td>
                                    <td className="px-6 py-4 border-t border-blue-200">
                                        {item.tickets.currency} {item.tickets.price.toFixed(2)}
                                    </td>
                                    <td className="px-6 py-4 border-t border-blue-200 text-center font-semibold">
                                        {item.ticketsCount}
                                    </td>
                                    <td className="px-6 py-4 border-t border-blue-200 font-bold text-blue-900">
                                        {(item.tickets.price * item.ticketsCount).toFixed(2)}{" "}
                                        {item.tickets.currency}
                                    </td>
                                </tr>
                            ))
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
*/

import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store.ts";

const images: Record<string, string> = import.meta.glob(
    "../../../assets/events/!*",
    { eager: true, import: "default" }
);

export function TicketCart() {
    const { tickets } = useSelector((state: RootState) => state.cart);

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-50 to-sky-200 p-6 flex items-center justify-center">
            <div className="w-full max-w-7xl bg-white border border-blue-200 rounded-3xl shadow-2xl overflow-hidden">
                <div className="bg-blue-900 text-white text-center py-6 text-3xl font-extrabold tracking-wide shadow-md">
                    🎟️ Ticket Cart
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm sm:text-base text-left">
                        <thead className="bg-blue-700 text-white">
                        <tr>
                            <th className="px-5 py-4">#</th>
                            <th className="px-5 py-4">Image</th>
                            <th className="px-5 py-4">Title</th>
                            <th className="px-5 py-4">Venue</th>
                            <th className="px-5 py-4">Date & Time</th>
                            <th className="px-5 py-4">Unit Price</th>
                            <th className="px-5 py-4">Qty</th>
                            <th className="px-5 py-4">Total</th>
                        </tr>
                        </thead>
                        <tbody className="text-gray-800">
                        {tickets.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={8}
                                    className="text-center py-6 bg-blue-100 text-blue-700 font-medium"
                                >
                                    🚫 No tickets added to cart.
                                </td>
                            </tr>
                        ) : (
                            tickets.map((item, index) => (
                                <tr
                                    key={item.tickets.id}
                                    className={`${
                                        index % 2 === 0 ? "bg-blue-50" : "bg-blue-100"
                                    } border-b border-blue-200 hover:bg-blue-200/50 transition-all duration-200`}
                                >
                                    <td className="px-5 py-4">{item.tickets.id}</td>
                                    <td className="px-5 py-4">
                                        <img
                                            src={
                                                images[
                                                    `../../../assets/events/${item.tickets.image}`
                                                    ]
                                            }
                                            alt={item.tickets.title}
                                            className="w-16 h-16 object-cover rounded-lg mx-auto shadow-md"
                                        />
                                    </td>
                                    <td className="px-5 py-4 font-semibold">
                                        {item.tickets.title}
                                    </td>
                                    <td className="px-5 py-4">{item.tickets.venue}</td>
                                    <td className="px-5 py-4 whitespace-nowrap">
                                        {item.tickets.date} <br className="sm:hidden" />{" "}
                                        <span className="text-sm text-gray-600">
                        {item.tickets.time}
                      </span>
                                    </td>
                                    <td className="px-5 py-4 font-medium">
                                        {item.tickets.currency} {item.tickets.price}
                                    </td>
                                    <td className="px-5 py-4 text-center">
                                        {item.ticketsCount}
                                    </td>
                                    <td className="px-5 py-4 font-bold text-blue-900">
                                        {(item.tickets.price * item.ticketsCount).toFixed(2)}{" "}
                                        {item.tickets.currency}
                                    </td>
                                </tr>
                            ))
                        )}
                        </tbody>
                    </table>
                </div>

                {/* Optional Checkout Footer */}
                {tickets.length > 0 && (
                    <div className="p-6 bg-blue-50 flex justify-end items-center border-t border-blue-200">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition">
                            Proceed to Checkout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
