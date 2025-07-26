/*
import { useEffect, useState } from "react";
import { Event } from "../../common/Event/Event.tsx";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../store/store.ts";
import { deleteEvent, getAllEvents } from "../../../slices/eventSlice.ts";
import { getAllConcerts } from "../../../slices/concertSlice.ts";
import { Concert } from "../../common/Event/Concert.tsx";
import { useNavigate } from "react-router-dom";

// Replace this with your actual saveEvent thunk/action creator
function saveEvent(newEvent: {
    date: any;
    venue: any;
    image: any;
    price: number;
    description: any;
    currency: any;
    time: any;
    title: any;
}) {
    return undefined;
}

export function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const { eventList } = useSelector((state: RootState) => state.events || {});
    const { concertList } = useSelector((state: RootState) => state.concerts || {});

    const [username, setUsername] = useState<string | null>(null);
    const [role, setRole] = useState<string | null>(null);
    const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null);

    useEffect(() => {
        dispatch(getAllEvents());
        dispatch(getAllConcerts());
        setUsername(localStorage.getItem("username"));
        setRole(localStorage.getItem("role"));
    }, []);

    const handleDeleteEvent = async (id: string) => {
        if (window.confirm("Are you sure you want to delete this event?")) {
            try {
                await dispatch(deleteEvent(id));
                alert("Event deleted successfully.");
                dispatch(getAllEvents());
            } catch {
                alert("Failed to delete event.");
            }
        }
    };

    // Convert file to Base64 string
    const fileToBase64 = (file: File): Promise<string> =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        });

    return (
        <div className="w-full min-h-screen bg-gray-50 px-4 py-16 space-y-24">
            {role === "customer" && (
                <>
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
                            🎉 Upcoming Events
                        </h2>

                        {eventList.length > 0 ? (
                            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-blue-300">
                                <div className="flex gap-14 snap-x snap-mandatory px-2 pb-4">
                                    {eventList.map((event) => (
                                        <div key={event.id} className="snap-start shrink-0 w-72">
                                            <Event data={event} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <p className="text-gray-600 text-center text-lg">
                                No events available right now.
                            </p>
                        )}
                    </div>

                    <div className="max-w-4xl mx-auto relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-blue-200"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="bg-gray-50 px-4 text-blue-600 font-medium text-sm tracking-wide uppercase"></span>
                        </div>
                    </div>

                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-bold text-center text-purple-800 mb-10">
                            🎵 Upcoming Concerts
                        </h2>

                        {concertList.length > 0 ? (
                            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-purple-300">
                                <div className="flex gap-14 snap-x snap-mandatory px-2 pb-4">
                                    {concertList.map((concert) => (
                                        <div key={concert.id} className="snap-start shrink-0 w-72">
                                            <Concert data={concert} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <p className="text-gray-600 text-center text-lg">
                                No concerts available right now.
                            </p>
                        )}
                    </div>
                </>
            )}

            {role === "organizer" && (
                <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl p-10 space-y-10">
                    <h2 className="text-4xl font-extrabold text-blue-900 text-center mb-6">
                        🛠 Manage Your Events
                    </h2>

                    {/!* Add New Event Form *!/}
                    <form
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        onSubmit={async (e) => {
                            e.preventDefault();
                            const form = e.target as HTMLFormElement;

                            if (!selectedImageFile) {
                                alert("Please select an image file.");
                                return;
                            }

                            let imageBase64 = "";
                            try {
                                imageBase64 = await fileToBase64(selectedImageFile);
                            } catch {
                                alert("Failed to process image file.");
                                return;
                            }

                            const newEvent = {
                                title: form.title.value,
                                description: form.description.value,
                                price: Number(form.price.value),
                                currency: form.currency.value,
                                venue: form.venue.value,
                                date: form.date.value,
                                time: form.time.value,
                                image: imageBase64,
                            };

                            dispatch(saveEvent(newEvent))
                                .then(() => dispatch(getAllEvents()))
                                .then(() => {
                                    form.reset();
                                    setSelectedImageFile(null);
                                })
                                .catch(() => alert("Failed to add event"));
                        }}
                    >
                        {[
                            { name: "title", label: "Event Title", type: "text", placeholder: "Exciting Event" },
                            { name: "description", label: "Description", type: "text", placeholder: "Brief about event" },
                            { name: "price", label: "Price", type: "number", placeholder: "100" },
                            { name: "currency", label: "Currency", type: "text", placeholder: "USD" },
                            { name: "venue", label: "Venue", type: "text", placeholder: "Event Location" },
                            { name: "date", label: "Date", type: "date" },
                            { name: "time", label: "Time", type: "time" },
                        ].map(({ name, label, type, placeholder }) => (
                            <div key={name} className="flex flex-col">
                                <label htmlFor={name} className="mb-2 font-semibold text-gray-700">
                                    {label}
                                </label>
                                <input
                                    id={name}
                                    name={name}
                                    type={type}
                                    placeholder={placeholder}
                                    required
                                    className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                />
                            </div>
                        ))}

                        {/!* Image upload input *!/}
                        <div className="flex flex-col">
                            <label htmlFor="image" className="mb-2 font-semibold text-gray-700">
                                Upload Image
                            </label>
                            <input
                                id="image"
                                name="image"
                                type="file"
                                accept="image/!*"
                                required
                                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                onChange={(e) => {
                                    if (e.target.files && e.target.files[0]) {
                                        setSelectedImageFile(e.target.files[0]);
                                    }
                                }}
                            />
                        </div>

                        <div className="md:col-span-2 flex justify-center">
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-8 py-3 rounded-2xl shadow-lg transition-transform active:scale-95"
                            >
                                🎯 Save Event
                            </button>
                        </div>
                    </form>

                    {/!* List of Events *!/}
                    <h3 className="text-3xl font-bold mt-14 mb-8 text-blue-800 text-center">
                        Your Events
                    </h3>

                    {eventList.length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border border-gray-200 rounded-xl shadow-md">
                                <thead className="bg-blue-100 text-blue-900">
                                <tr>
                                    <th className="py-3 px-4 text-left">Image</th>
                                    <th className="py-3 px-4 text-left">Title</th>
                                    <th className="py-3 px-4 text-left">Description</th>
                                    <th className="py-3 px-4 text-left">Date</th>
                                    <th className="py-3 px-4 text-left">Time</th>
                                    <th className="py-3 px-4 text-left">Venue</th>
                                    <th className="py-3 px-4 text-left">Price</th>
                                    <th className="py-3 px-4 text-center">Actions</th>
                                </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                {eventList.map((event) => (
                                    <tr key={event.id} className="border-t border-gray-200 hover:bg-blue-50 transition">
                                        <td className="py-3 px-4">
                                            <img
                                                src={event.imageUrl || event.image}
                                                alt={event.title}
                                                className="w-20 h-16 object-cover rounded-md shadow-sm"
                                            />
                                        </td>
                                        <td className="py-3 px-4">{event.title}</td>
                                        <td className="py-3 px-4 line-clamp-2 max-w-xs">{event.description}</td>
                                        <td className="py-3 px-4">{event.date}</td>
                                        <td className="py-3 px-4">{event.time}</td>
                                        <td className="py-3 px-4">{event.venue}</td>
                                        <td className="py-3 px-4">{event.currency} {event.price}</td>
                                        <td className="py-3 px-4 text-center space-x-2">
                                            <button
                                                onClick={() => navigate(`/events/update/${event.id}`)}
                                                className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-lg text-sm"
                                            >
                                                ✏️ Edit
                                            </button>
                                            <button
                                                onClick={() => handleDeleteEvent(event.id)}
                                                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm"
                                            >
                                                🗑 Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <p className="text-center text-gray-500 text-lg mt-8">You have no events yet.</p>
                    )}

                </div>
            )}
        </div>
    );
}
*/

import { useEffect, useState } from "react";
import { Event } from "../../common/Event/Event.tsx";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../store/store.ts";
import { deleteEvent, getAllEvents, saveEvent, updateEvent } from "../../../slices/eventSlice.ts";
import { getAllConcerts } from "../../../slices/concertSlice.ts";
import { Concert } from "../../common/Event/Concert.tsx";
import { useNavigate } from "react-router-dom";

export function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const { eventList } = useSelector((state: RootState) => state.events || {});
    const { concertList } = useSelector((state: RootState) => state.concerts || {});

    const [username, setUsername] = useState<string | null>(null);
    const [role, setRole] = useState<string | null>(null);
    const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null);

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        price: "",
        currency: "",
        venue: "",
        date: "",
        time: "",
    });
    const [editingEventId, setEditingEventId] = useState<string | null>(null);

    useEffect(() => {
        dispatch(getAllEvents());
        dispatch(getAllConcerts());
        setUsername(localStorage.getItem("username"));
        setRole(localStorage.getItem("role"));
    }, []);

    const handleDeleteEvent = async (id: string) => {
        if (window.confirm("Are you sure you want to delete this event?")) {
            try {
                await dispatch(deleteEvent(id));
                alert("Event deleted successfully.");
                dispatch(getAllEvents());
            } catch {
                alert("Failed to delete event.");
            }
        }
    };

    const fileToBase64 = (file: File): Promise<string> =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        });

    const handleEdit = (event) => {
        setEditingEventId(event.id);
        setFormData({
            title: event.title,
            description: event.description,
            price: String(event.price),
            currency: event.currency,
            venue: event.venue,
            date: event.date,
            time: event.time,
        });
    };

    const resetForm = () => {
        setEditingEventId(null);
        setSelectedImageFile(null);
        setFormData({
            title: "",
            description: "",
            price: "",
            currency: "",
            venue: "",
            date: "",
            time: "",
        });
    };

    return (
        <div className="w-full min-h-screen bg-gray-50 px-4 pt-32 pb-16 space-y-24">
            {role === "customer" && (
                <>
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
                            🎉 Upcoming Events
                        </h2>

                        {eventList.length > 0 ? (
                            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-blue-300">
                                <div className="flex gap-14 snap-x snap-mandatory px-2 pb-4">
                                    {eventList.map((event) => (
                                        <div key={event.id} className="snap-start shrink-0 w-72">
                                            <Event data={event} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <p className="text-gray-600 text-center text-lg">
                                No events available right now.
                            </p>
                        )}
                    </div>

                    <div className="max-w-4xl mx-auto relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-blue-200"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="bg-gray-50 px-4 text-blue-600 font-medium text-sm tracking-wide uppercase"></span>
                        </div>
                    </div>

                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-bold text-center text-purple-800 mb-10">
                            🎵 Upcoming Concerts
                        </h2>

                        {concertList.length > 0 ? (
                            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-purple-300">
                                <div className="flex gap-14 snap-x snap-mandatory px-2 pb-4">
                                    {concertList.map((concert) => (
                                        <div key={concert.id} className="snap-start shrink-0 w-72">
                                            <Concert data={concert} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <p className="text-gray-600 text-center text-lg">
                                No concerts available right now.
                            </p>
                        )}
                    </div>
                </>
            )}


            {role === "organizer" && (
                <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl p-10 space-y-10">
                    <h2 className="text-3xl font-extrabold text-blue-900 text-center mb-6">
                        🛠 {editingEventId ? "Update Event" : "Manage Your Events"}
                    </h2>

                    {/* Add/Edit Event Form */}
                    <form
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        onSubmit={async (e) => {
                            e.preventDefault();

                            let imageBase64 = "";
                            if (selectedImageFile) {
                                try {
                                    imageBase64 = await fileToBase64(selectedImageFile);
                                } catch {
                                    alert("Failed to process image file.");
                                    return;
                                }
                            }

                            const payload = {
                                ...formData,
                                price: Number(formData.price),
                                image: imageBase64 || "", // empty string if not changed
                            };

                            if (editingEventId) {
                                await dispatch(updateEvent({ id: editingEventId, ...payload }))
                                    .then(() => {
                                        dispatch(getAllEvents());
                                        resetForm();
                                    })
                                    .catch(() => alert("Failed to update event"));
                            } else {
                                await dispatch(saveEvent(payload))
                                    .then(() => {
                                        dispatch(getAllEvents());
                                        resetForm();
                                    })
                                    .catch(() => alert("Failed to add event"));
                            }
                        }}
                    >
                        {[
                            { name: "title", label: "Event Title", type: "text", placeholder: "Exciting Event" },
                            { name: "description", label: "Description", type: "text", placeholder: "Brief about event" },
                            { name: "price", label: "Price", type: "number", placeholder: "100" },
                            { name: "currency", label: "Currency", type: "text", placeholder: "USD" },
                            { name: "venue", label: "Venue", type: "text", placeholder: "Event Location" },
                            { name: "date", label: "Date", type: "date" },
                            { name: "time", label: "Time", type: "time" },
                        ].map(({ name, label, type, placeholder }) => (
                            <div key={name} className="flex flex-col">
                                <label htmlFor={name} className="mb-2 font-semibold text-gray-700">
                                    {label}
                                </label>
                                <input
                                    id={name}
                                    name={name}
                                    type={type}
                                    placeholder={placeholder}
                                    value={formData[name]}
                                    onChange={(e) =>
                                        setFormData({ ...formData, [name]: e.target.value })
                                    }
                                    required
                                    className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                />
                            </div>
                        ))}

                        {/* Image upload input */}
                        <div className="flex flex-col">
                            <label htmlFor="image" className="mb-2 font-semibold text-gray-700">
                                Upload Image {editingEventId && "(optional if not changing)"}
                            </label>
                            <input
                                id="image"
                                name="image"
                                type="file"
                                accept="image/*"
                                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                onChange={(e) => {
                                    if (e.target.files && e.target.files[0]) {
                                        setSelectedImageFile(e.target.files[0]);
                                    }
                                }}
                            />
                        </div>

                        <div className="md:col-span-2 flex justify-center gap-4">
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-8 py-3 rounded-2xl shadow-lg transition-transform active:scale-95"
                            >
                                {editingEventId ? "✅ Update Event" : "🎯 Save Event"}
                            </button>
                            {editingEventId && (
                                <button
                                    type="button"
                                    onClick={resetForm}
                                    className="bg-gray-300 hover:bg-gray-400 text-black font-semibold px-6 py-3 rounded-2xl shadow-md transition-transform active:scale-95"
                                >
                                    Cancel
                                </button>
                            )}
                        </div>
                    </form>

                    {/* List of Events */}
                    <h3 className="text-3xl font-bold mt-14 mb-8 text-blue-800 text-center">Events List</h3>

                    {eventList.length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border border-gray-200 rounded-xl shadow-md">
                                <thead className="bg-blue-100 text-blue-900">
                                <tr>
                                    <th className="py-3 px-4 text-left">Image</th>
                                    <th className="py-3 px-4 text-left">Title</th>
                                    <th className="py-3 px-4 text-left">Description</th>
                                    <th className="py-3 px-4 text-left">Date</th>
                                    <th className="py-3 px-4 text-left">Time</th>
                                    <th className="py-3 px-4 text-left">Venue</th>
                                    <th className="py-3 px-4 text-left">Price</th>
                                    <th className="py-3 px-4 text-center">Actions</th>
                                </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                {eventList.map((event) => (
                                    <tr key={event.id} className="border-t border-gray-200 hover:bg-blue-50 transition">
                                        <td className="py-3 px-4">
                                            <img
                                                src={event.imageUrl || event.image}
                                                alt={event.title}
                                                className="w-20 h-16 object-cover rounded-md shadow-sm"
                                            />
                                        </td>
                                        <td className="py-3 px-4">{event.title}</td>
                                        <td className="py-3 px-4 line-clamp-2 max-w-xs">{event.description}</td>
                                        <td className="py-3 px-4">{event.date}</td>
                                        <td className="py-3 px-4">{event.time}</td>
                                        <td className="py-3 px-4">{event.venue}</td>
                                        <td className="py-3 px-4">
                                            {event.currency} {event.price}
                                        </td>
                                        <td className="py-3 px-4 text-center">
                                            <div className="flex justify-center gap-2">
                                                <button
                                                    onClick={() => handleEdit(event)}
                                                    className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-lg text-sm"
                                                >
                                                    ✏️ Edit
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteEvent(event.id)}
                                                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm"
                                                >
                                                    🗑 Delete
                                                </button>
                                            </div>
                                        </td>

                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <p className="text-center text-gray-500 text-lg mt-8">You have no events yet.</p>
                    )}
                </div>
            )}
        </div>
    );
}
