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

/*
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

                {/!* Optional Checkout Footer *!/}
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
*/

/*
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../store/store.ts";
import { useState } from "react";
import { clearCart } from "../../../slices/cartSlice.ts";

const images: Record<string, string> = import.meta.glob(
    "../../../assets/events/!*",
    { eager: true, import: "default" }
);

export function TicketCart() {
    const { tickets } = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();
    const [showPaymentModal, setShowPaymentModal] = useState(false);

    const totalAmount = tickets.reduce((sum, item) => {
        return sum + item.tickets.price * item.ticketsCount;
    }, 0).toFixed(2);


    const [expiry, setExpiry] = useState("");

    const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/[^\d]/g, ""); // Remove non-digits
        if (value.length > 4) value = value.slice(0, 4);

        if (value.length > 2) {
            value = `${value.slice(0, 2)}/${value.slice(2)}`;
        }
        setExpiry(value);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-50 to-sky-200 p-6 flex items-center justify-center relative">
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
                                        {item.tickets.date} <br className="sm:hidden" />
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

                {/!* Checkout Button *!/}
                {tickets.length > 0 && (
                    <div className="p-6 bg-blue-50 flex justify-end items-center border-t border-blue-200">
                        <button
                            onClick={() => setShowPaymentModal(true)}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                )}
            </div>

            {/!* Payment Modal *!/}
            {/!*{showPaymentModal && (
                <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
                    <div className="bg-white rounded-2xl p-8 shadow-2xl w-[90%] max-w-md">
                        <h2 className="text-2xl font-bold mb-4 text-blue-800 text-center">Confirm Payment</h2>
                        <p className="text-lg mb-6 text-center text-gray-700">
                            Are you sure you want to complete the payment?
                        </p>

                        <div className="flex justify-between mt-6">
                            <button
                                className="bg-gray-300 hover:bg-gray-400 px-5 py-2 rounded-lg font-semibold"
                                onClick={() => setShowPaymentModal(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold"
                                onClick={() => {
                                    setShowPaymentModal(false);
                                    dispatch(clearCart());
                                    alert("✅ Payment Successful!");
                                }}
                            >
                                Pay Now
                            </button>
                        </div>
                    </div>
                </div>
            )}*!/}
            {showPaymentModal && (
                <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
                    <div className="bg-gradient-to-br from-white via-blue-50 to-white rounded-2xl p-8 shadow-[0_10px_25px_rgba(0,0,0,0.15)] w-[90%] max-w-md border border-blue-200">
                        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600 mb-6 text-center drop-shadow">
                            💳 Secure Payment
                        </h2>

                        <div className="bg-blue-100/70 p-4 mb-6 rounded-xl text-center shadow-sm">
                            <p className="text-gray-700 text-lg font-medium">Total Amount</p>
                            <p className="text-2xl font-bold text-green-700 mt-1">
                                Rs. {totalAmount}
                            </p>
                        </div>

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                setShowPaymentModal(false);
                                dispatch(clearCart());
                                alert("✅ Payment Successful!");
                            }}
                            className="space-y-5"
                        >
                            <div>
                                <label className="block text-sm font-semibold text-gray-600 mb-1">Cardholder Name</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="John Doe"
                                    className="w-full px-4 py-2 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-600 mb-1">Card Number</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="1234 5678 9012 3456"
                                    maxLength={19}
                                    pattern="\d{4} \d{4} \d{4} \d{4}"
                                    className="w-full px-4 py-2 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                                />
                            </div>

                            <div className="flex space-x-4">
                                <div className="flex-1">
                                    <label className="block text-sm font-semibold text-gray-600 mb-1">Expiry Date</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            required
                                            placeholder="MM/YY"
                                            maxLength={5}
                                            value={expiry}
                                            onChange={handleExpiryChange}
                                            className="w-full px-4 py-2 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                                        />
                                        <span className="absolute right-3 top-2.5 text-gray-400 text-sm">📅</span>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm font-semibold text-gray-600 mb-1">CVV</label>
                                    <input
                                        type="password"
                                        required
                                        placeholder="123"
                                        maxLength={3}
                                        className="w-full px-4 py-2 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-between mt-6">
                                <button
                                    type="button"
                                    onClick={() => setShowPaymentModal(false)}
                                    className="px-5 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 font-semibold transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-2 rounded-xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold shadow-md transition-transform hover:scale-105"
                                >
                                    Pay Now 💸
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}



        </div>
    );
}
*/


/*
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../store/store.ts";
import { useState } from "react";
import { clearCart } from "../../../slices/cartSlice.ts";
import { QRCode } from "qrcode.react";

const images: Record<string, string> = import.meta.glob(
    "../../../assets/events/!*",
    { eager: true, import: "default" }
);

export function TicketCart() {
    const { tickets } = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [expiry, setExpiry] = useState("");

    const totalAmount = tickets
        .reduce((sum, item) => sum + item.tickets.price * item.ticketsCount, 0)
        .toFixed(2);

    const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/[^\d]/g, "");
        if (value.length > 4) value = value.slice(0, 4);
        if (value.length > 2) value = `${value.slice(0, 2)}/${value.slice(2)}`;
        setExpiry(value);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-50 to-sky-200 p-6 flex items-center justify-center relative">
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
                                        index % 2 === 0
                                            ? "bg-blue-50"
                                            : "bg-blue-100"
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
                                        {item.tickets.date}
                                        <br className="sm:hidden" />
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

                {tickets.length > 0 && (
                    <div className="p-6 bg-blue-50 flex justify-end items-center border-t border-blue-200">
                        <button
                            onClick={() => setShowPaymentModal(true)}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                )}
            </div>

            {showPaymentModal && (
                <div className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-md backdrop-brightness-95 transition-all">
                    <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-2xl w-[90%] max-w-md border border-blue-200">
                        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600 mb-6 text-center drop-shadow">
                            💳 Secure Payment
                        </h2>

                        <div className="bg-blue-100/70 p-4 mb-6 rounded-xl text-center shadow-sm">
                            <p className="text-gray-700 text-lg font-medium">Total Amount</p>
                            <p className="text-2xl font-bold text-green-700 mt-1">
                                Rs. {totalAmount}
                            </p>
                        </div>

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                setShowPaymentModal(false);
                                dispatch(clearCart());
                                alert("✅ Payment Successful!");
                            }}
                            className="space-y-5"
                        >
                            <div>
                                <label className="block text-sm font-semibold text-gray-600 mb-1">
                                    Cardholder Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="John Doe"
                                    className="w-full px-4 py-2 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-600 mb-1">
                                    Card Number
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="1234 5678 9012 3456"
                                    maxLength={19}
                                    pattern="\d{4} \d{4} \d{4} \d{4}"
                                    className="w-full px-4 py-2 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex space-x-4">
                                <div className="flex-1">
                                    <label className="block text-sm font-semibold text-gray-600 mb-1">
                                        Expiry Date
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            required
                                            placeholder="MM/YY"
                                            maxLength={5}
                                            value={expiry}
                                            onChange={handleExpiryChange}
                                            className="w-full px-4 py-2 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        />
                                        <span className="absolute right-3 top-2.5 text-gray-400 text-sm">
                                            📅
                                        </span>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm font-semibold text-gray-600 mb-1">
                                        CVV
                                    </label>
                                    <input
                                        type="password"
                                        required
                                        placeholder="123"
                                        maxLength={3}
                                        className="w-full px-4 py-2 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-between mt-6">
                                <button
                                    type="button"
                                    onClick={() => setShowPaymentModal(false)}
                                    className="px-5 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 font-semibold transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-2 rounded-xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold shadow-md transition-transform hover:scale-105"
                                >
                                    Pay Now 💸
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
*/



/*
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../store/store.ts";
import { useState } from "react";
import { clearCart } from "../../../slices/cartSlice.ts";
import { QRCodeCanvas } from "qrcode.react";


const images: Record<string, string> = import.meta.glob(
    "../../../assets/events/!*",
    { eager: true, import: "default" }
);

export function TicketCart() {
    const { tickets } = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [expiry, setExpiry] = useState("");

    const totalAmount = tickets
        .reduce((sum, item) => sum + item.tickets.price * item.ticketsCount, 0)
        .toFixed(2);

    const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/[^\d]/g, "");
        if (value.length > 4) value = value.slice(0, 4);
        if (value.length > 2) value = `${value.slice(0, 2)}/${value.slice(2)}`;
        setExpiry(value);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-50 to-sky-200 p-6 flex items-center justify-center relative">
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
                                <td colSpan={8} className="text-center py-6 bg-blue-100 text-blue-700 font-medium">
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
                                            src={images[`../../../assets/events/${item.tickets.image}`]}
                                            alt={item.tickets.title}
                                            className="w-16 h-16 object-cover rounded-lg mx-auto shadow-md"
                                        />
                                    </td>
                                    <td className="px-5 py-4 font-semibold">{item.tickets.title}</td>
                                    <td className="px-5 py-4">{item.tickets.venue}</td>
                                    <td className="px-5 py-4 whitespace-nowrap">
                                        {item.tickets.date}
                                        <br className="sm:hidden" />
                                        <span className="text-sm text-gray-600">{item.tickets.time}</span>
                                    </td>
                                    <td className="px-5 py-4 font-medium">
                                        {item.tickets.currency} {item.tickets.price}
                                    </td>
                                    <td className="px-5 py-4 text-center">{item.ticketsCount}</td>
                                    <td className="px-5 py-4 font-bold text-blue-900">
                                        {(item.tickets.price * item.ticketsCount).toFixed(2)} {item.tickets.currency}
                                    </td>
                                </tr>
                            ))
                        )}
                        </tbody>
                    </table>
                </div>

                {tickets.length > 0 && (
                    <div className="p-6 bg-blue-50 flex justify-end items-center border-t border-blue-200">
                        <button
                            onClick={() => setShowPaymentModal(true)}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                )}
            </div>

            {/!* Payment Modal *!/}
            {showPaymentModal && (
                <div className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-md backdrop-brightness-95 transition-all">
                    <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-2xl w-[90%] max-w-md border border-blue-200">
                        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600 mb-6 text-center drop-shadow">
                            💳 Secure Payment
                        </h2>

                        {/!* Payment Summary & QR *!/}
                        <div className="bg-blue-100/70 p-4 mb-6 rounded-xl text-center shadow-sm">
                            <p className="text-gray-700 text-lg font-medium">Total Amount</p>
                            <p className="text-2xl font-bold text-green-700 mt-1">Rs. {totalAmount}</p>

                            <div className="mt-4">
                                <p className="text-sm font-semibold text-gray-600 mb-2">
                                    QR Code එක භාවිතා කර Payment කරන්න
                                </p>
                                <div className="flex justify-center">
                                    <QRCodeCanvas
                                        value={`Rs. ${totalAmount} for ${tickets.length} ticket(s)`}
                                        size={128}
                                        fgColor="#1f2937"
                                        bgColor="#ffffff"
                                        level="H"
                                    />
                                </div>

                                <p className="mt-2 text-xs text-gray-500">ඔබේ QR scanner එකෙන් මෙය scan කරන්න</p>
                            </div>
                        </div>

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                setShowPaymentModal(false);
                                dispatch(clearCart());
                                alert("✅ Payment Successful!");
                            }}
                            className="space-y-5"
                        >
                            <div>
                                <label className="block text-sm font-semibold text-gray-600 mb-1">Cardholder Name</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="John Doe"
                                    className="w-full px-4 py-2 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-600 mb-1">Card Number</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="1234 5678 9012 3456"
                                    maxLength={19}
                                    pattern="\d{4} \d{4} \d{4} \d{4}"
                                    className="w-full px-4 py-2 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex space-x-4">
                                <div className="flex-1">
                                    <label className="block text-sm font-semibold text-gray-600 mb-1">Expiry Date</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            required
                                            placeholder="MM/YY"
                                            maxLength={5}
                                            value={expiry}
                                            onChange={handleExpiryChange}
                                            className="w-full px-4 py-2 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        />
                                        <span className="absolute right-3 top-2.5 text-gray-400 text-sm">📅</span>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm font-semibold text-gray-600 mb-1">CVV</label>
                                    <input
                                        type="password"
                                        required
                                        placeholder="123"
                                        maxLength={3}
                                        className="w-full px-4 py-2 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-between mt-6">
                                <button
                                    type="button"
                                    onClick={() => setShowPaymentModal(false)}
                                    className="px-5 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 font-semibold transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-2 rounded-xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold shadow-md transition-transform hover:scale-105"
                                >
                                    Pay Now 💸
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
*/


import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../store/store.ts";
import { useState, useRef } from "react";
import { clearCart } from "../../../slices/cartSlice.ts";
import { QRCodeCanvas } from "qrcode.react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const eventImages: Record<string, string> = import.meta.glob(
    "../../../assets/events/*",
    { eager: true, import: "default" }
);

const concertImages: Record<string, string> = import.meta.glob(
    "../../../assets/concerts/*",
    { eager: true, import: "default" }
);

const images = { ...eventImages, ...concertImages };


export function TicketCart() {
    const { tickets } = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [expiry, setExpiry] = useState("");
    const [showTicketPdf, setShowTicketPdf] = useState(false);
    const ticketRef = useRef<HTMLDivElement>(null);

    // tickets state එකේ structure අනුව total amount ගන්නවා
    const totalAmount = tickets
        .reduce((sum, item) => sum + item.tickets.price * item.ticketsCount, 0)
        .toFixed(2);

    const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/[^\d]/g, "");
        if (value.length > 4) value = value.slice(0, 4);
        if (value.length > 2) value = `${value.slice(0, 2)}/${value.slice(2)}`;
        setExpiry(value);
    };

    const downloadPDF = async () => {
        if (!ticketRef.current) return;
        const canvas = await html2canvas(ticketRef.current);
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("ticket.pdf");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-50 to-sky-200 p-6 flex items-center justify-center relative">
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
                                <td colSpan={8} className="text-center py-6 bg-blue-100 text-blue-700 font-medium">
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
                                            src={images[`../../../assets/events/${item.tickets.image}`]}
                                            alt={item.tickets.title}
                                            className="w-16 h-16 object-cover rounded-lg mx-auto shadow-md"
                                        />
                                    </td>
                                    <td className="px-5 py-4 font-semibold">{item.tickets.title}</td>
                                    <td className="px-5 py-4">{item.tickets.venue}</td>
                                    <td className="px-5 py-4 whitespace-nowrap">
                                        {item.tickets.date}
                                        <br className="sm:hidden" />
                                        <span className="text-sm text-gray-600">{item.tickets.time}</span>
                                    </td>
                                    <td className="px-5 py-4 font-medium">
                                        {item.tickets.currency} {item.tickets.price}
                                    </td>
                                    <td className="px-5 py-4 text-center">{item.ticketsCount}</td>
                                    <td className="px-5 py-4 font-bold text-blue-900">
                                        {(item.tickets.price * item.ticketsCount).toFixed(2)} {item.tickets.currency}
                                    </td>
                                </tr>
                            ))
                        )}
                        </tbody>
                    </table>
                </div>

                {tickets.length > 0 && (
                    <div className="p-6 bg-blue-50 flex justify-end items-center border-t border-blue-200">
                        <button
                            onClick={() => setShowPaymentModal(true)}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                )}
            </div>

            {showPaymentModal && (
                <div className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-md backdrop-brightness-95 transition-all">
                    <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-2xl w-[90%] max-w-md border border-blue-200">
                        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600 mb-6 text-center drop-shadow">
                            💳 Secure Payment
                        </h2>

                        <div className="bg-blue-100/70 p-4 mb-6 rounded-xl text-center shadow-sm">
                            <p className="text-gray-700 text-lg font-medium">Total Amount</p>
                            <p className="text-2xl font-bold text-green-700 mt-1">Rs. {totalAmount}</p>

                            <div className="mt-4">
                                <p className="text-sm font-semibold text-gray-600 mb-2">QR Code එක භාවිතා කර Payment කරන්න</p>
                                <div className="flex justify-center">
                                    <QRCodeCanvas
                                        value={`Rs. ${totalAmount} for ${tickets.length} ticket(s)`}
                                        size={128}
                                        fgColor="#1f2937"
                                        bgColor="#ffffff"
                                        level="H"
                                    />
                                </div>
                                <p className="mt-2 text-xs text-gray-500">ඔබේ QR scanner එකෙන් මෙය scan කරන්න</p>
                            </div>
                        </div>

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                setShowPaymentModal(false);
                                setShowTicketPdf(true);
                                dispatch(clearCart());
                                alert("✅ Payment Successful!");
                            }}
                            className="space-y-5"
                        >
                            <div>
                                <label className="block text-sm font-semibold text-gray-600 mb-1">Cardholder Name</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="John Doe"
                                    className="w-full px-4 py-2 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-600 mb-1">Card Number</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="1234 5678 9012 3456"
                                    maxLength={19}
                                    pattern="\d{4} \d{4} \d{4} \d{4}"
                                    className="w-full px-4 py-2 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex space-x-4">
                                <div className="flex-1">
                                    <label className="block text-sm font-semibold text-gray-600 mb-1">Expiry Date</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            required
                                            placeholder="MM/YY"
                                            maxLength={5}
                                            value={expiry}
                                            onChange={handleExpiryChange}
                                            className="w-full px-4 py-2 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        />
                                        <span className="absolute right-3 top-2.5 text-gray-400 text-sm">📅</span>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm font-semibold text-gray-600 mb-1">CVV</label>
                                    <input
                                        type="password"
                                        required
                                        placeholder="123"
                                        maxLength={3}
                                        className="w-full px-4 py-2 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-between mt-6">
                                <button
                                    type="button"
                                    onClick={() => setShowPaymentModal(false)}
                                    className="px-5 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 font-semibold transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-2 rounded-xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold shadow-md transition-transform hover:scale-105"
                                >
                                    Pay Now 💸
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {showTicketPdf && (
                <div className="fixed inset-0 bg-white/90 backdrop-blur-md flex items-center justify-center z-50">
                    <div
                        ref={ticketRef}
                        className="bg-white border border-gray-300 rounded-xl p-8 shadow-lg w-[90%] max-w-md text-center"
                    >
                        <h2 className="text-2xl font-bold text-blue-800 mb-4">🎫 Your Ticket</h2>
                        <p className="text-gray-700 mb-1">Ticket Count: {tickets.length}</p>
                        <p className="text-gray-700 mb-3">Total Paid: Rs. {totalAmount}</p>

                        <div className="flex justify-center my-4">
                            <QRCodeCanvas
                                value={`Ticket Confirmed: Rs. ${totalAmount} for ${tickets.length} ticket(s)`}
                                size={180}
                                fgColor="#1e3a8a"
                                bgColor="#ffffff"
                                level="H"
                            />
                        </div>

                        <p className="text-sm text-gray-500">Scan this QR code at the entrance.</p>

                        <div className="mt-6 space-x-4">
                            <button
                                onClick={downloadPDF}
                                className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow"
                            >
                                ⬇️ Download PDF
                            </button>
                            <button
                                onClick={() => setShowTicketPdf(false)}
                                className="px-5 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold rounded-lg"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
