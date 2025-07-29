import { useEffect, useState } from "react";
import { UserPlus, Trash2 } from "lucide-react";
import axios from "axios";

type User = {
    id: number;
    name: string;
    email: string;
    password: string;
    role: "customer" | "organizer";
};

const API_BASE = "http://localhost:3000/api"; // ✅ your backend base URL

export function Users() {
    const [users, setUsers] = useState<User[]>([]);
    const [filter, setFilter] = useState<"all" | "customer" | "organizer">("all");

    const [newUser, setNewUser] = useState<Omit<User, "id">>({
        name: "",
        email: "",
        password: "",
        role: "customer",
    });

    // ✅ Fetch all users on mount
    useEffect(() => {
        const token = localStorage.getItem('token');

        const fetchUsers = async () => {
            try {
                const res = await axios.get(`${API_BASE}/auth/all`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setUsers(res.data); // <--- important!
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);


    // ✅ Save new user to backend
    const handleAddUser = async () => {
        if (!newUser.name.trim() || !newUser.email.trim() || !newUser.password.trim()) {
            alert("Please fill in all fields.");
            return;
        }

        try {
            const userToSend = {
                username: newUser.name,
                email: newUser.email,
                password: newUser.password,
                role: newUser.role,
            };

            const res = await axios.post(`${API_BASE}/auth/register`, userToSend);
            const createdUser = res.data;

            const newEntry: User = {
                id: createdUser.id || Date.now(), // fallback ID
                name: createdUser.username,
                email: createdUser.email,
                password: "",
                role: createdUser.role,
            };

            setUsers((prev) => [...prev, newEntry]);
            setNewUser({ name: "", email: "", password: "", role: "customer" });
            alert("User added successfully!");
        } catch (error) {
            console.error("Error saving user:", error);
            alert("Failed to add user.");
        }
    };

    // ✅ Delete user from backend
    const handleDelete = async (id: number) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this user?");
        if (!confirmDelete) return;

        try {
            await axios.delete(`${API_BASE}/auth/delete/${id}`);
            setUsers((prev) => prev.filter((user) => user.id !== id));
        } catch (error) {
            console.error("Error deleting user:", error);
            alert("Failed to delete user.");
        }
    };

    const filteredUsers = users.filter((user) =>
        filter === "all" ? true : user.role === filter
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white px-4 pt-32 pb-16">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-center text-blue-800">👥 User Management</h1>


                {/* Filter Tabs */}
                <div className="flex justify-center mb-8 gap-4 flex-wrap">
                    {["all", "customer", "organizer"].map((type) => (
                        <button
                            key={type}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                filter === type
                                    ? "bg-blue-600 text-white shadow"
                                    : "bg-white border border-blue-600 text-blue-600 hover:bg-blue-100"
                            }`}
                            onClick={() => setFilter(type as "all" | "customer" | "organizer")}
                        >
                            {type.charAt(0).toUpperCase() + type.slice(1)}s
                        </button>
                    ))}
                </div>

                {/* Add New User Form */}
                <div className="mb-10 bg-white border border-gray-200 rounded-xl shadow-sm p-6">
                    <h2 className="text-2xl font-semibold mb-5 flex items-center gap-2 text-blue-700">
                        <UserPlus size={20} /> Add New User
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={newUser.name}
                            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                            required
                            className="border rounded-md px-4 py-2 outline-blue-500"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={newUser.email}
                            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                            required
                            className="border rounded-md px-4 py-2 outline-blue-500"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={newUser.password}
                            onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                            required
                            className="border rounded-md px-4 py-2 outline-blue-500"
                        />
                        <select
                            value={newUser.role}
                            onChange={(e) =>
                                setNewUser({ ...newUser, role: e.target.value as "customer" | "organizer" })
                            }
                            className="border rounded-md px-4 py-2 outline-blue-500"
                        >
                            <option value="customer">Customer</option>
                            <option value="organizer">Organizer</option>
                        </select>
                    </div>

                    <button
                        type="button"
                        onClick={handleAddUser}
                        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        ➕ Save User
                    </button>
                </div>

                <div className="flex justify-center flex-wrap gap-6 text-sm mb-8">
                    <div className="bg-white/60 backdrop-blur-md px-6 py-3 rounded-2xl text-green-700 font-semibold shadow-md hover:shadow-lg transition-all border border-green-200 flex items-center gap-2">
                        <span className="text-xl">👤</span>
                        <span>Customers</span>
                        <span className="ml-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">
            {users.filter(u => u.role === "customer").length}
        </span>
                    </div>
                    <div className="bg-white/60 backdrop-blur-md px-6 py-3 rounded-2xl text-purple-700 font-semibold shadow-md hover:shadow-lg transition-all border border-purple-200 flex items-center gap-2">
                        <span className="text-xl">🎤</span>
                        <span>Organizers</span>
                        <span className="ml-2 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-bold">
            {users.filter(u => u.role === "organizer").length}
        </span>
                    </div>
                </div>



                {/* User List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filteredUsers.length === 0 ? (
                        <div className="col-span-full text-center text-gray-500">
                            No users found for selected role.
                        </div>
                    ) : (
                        filteredUsers.map((user) => (
                            <div
                                key={user.id}
                                className="bg-white rounded-xl shadow border border-gray-100 p-5 hover:shadow-md transition"
                            >
                                <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
                                <p className="text-sm text-gray-500">{user.email}</p>
                                <span
                                    className={`inline-block mt-2 text-xs px-3 py-1 rounded-full ${
                                        user.role === "organizer"
                                            ? "bg-purple-100 text-purple-700"
                                            : "bg-green-100 text-green-700"
                                    }`}
                                >
                                    {user.role}
                                </span>
                                <div className="mt-4 text-right">
                                    <button
                                        onClick={() => handleDelete(user.id)}
                                        className="text-red-500 hover:text-red-700 inline-flex items-center gap-1 text-sm"
                                    >
                                        <Trash2 size={16} /> Delete
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
