import { useForm } from "react-hook-form";

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
        alert(`Submitted your case: ${data.name}`);
    };

    return (
        <div className="max-w-xl mx-auto p-8 bg-white rounded-3xl shadow-lg mt-12">
            <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-8">
                Contact Us
            </h2>

            <form
                className="space-y-6"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                autoComplete="off"
            >
                {/* Name */}
                <div>
                    <label
                        htmlFor="name"
                        className="block text-gray-700 font-semibold mb-2"
                    >
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        {...register("name", {
                            required: "Name is required",
                            pattern: {
                                value: /^[A-Za-z\s]+$/,
                                message: "Invalid name format",
                            },
                        })}
                        className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ${
                            errors.name ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label
                        htmlFor="email"
                        className="block text-gray-700 font-semibold mb-2"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="example@mail.com"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email address",
                            },
                        })}
                        className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ${
                            errors.email ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                </div>

                {/* Message */}
                <div>
                    <label
                        htmlFor="message"
                        className="block text-gray-700 font-semibold mb-2"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        placeholder="Write your message here..."
                        rows={5}
                        {...register("message", {
                            required: "Message is required",
                            pattern: {
                                value: /^[\w\s.,!?'-]+$/,
                                message: "Invalid message format",
                            },
                        })}
                        className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none ${
                            errors.message ? "border-red-500" : "border-gray-300"
                        }`}
                    ></textarea>
                    {errors.message && (
                        <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl shadow-lg transition-transform active:scale-95"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}
