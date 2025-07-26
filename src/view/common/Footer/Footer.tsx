export function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-6 mt-10 shadow-inner">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
                {/* Navigation Links */}
                {/*<ul className="flex space-x-6 mb-4 md:mb-0 text-sm font-medium">
                    <li><a href="#" className="hover:text-gray-300 transition">Home</a></li>
                    <li><a href="#" className="hover:text-gray-300 transition">About</a></li>
                    <li><a href="#" className="hover:text-gray-300 transition">Contact</a></li>
                </ul>*/}
                <p className="text-xs text-gray-400">
                    Your Event Management Partner
                </p>

                {/* Copyright */}
                <p className="text-xs text-gray-400">
                    © 2025 <span className="font-semibold text-white">Eventify by VINIL VIDUSHANKA</span> | All Rights Reserved
                </p>
            </div>
        </footer>
    );
}
