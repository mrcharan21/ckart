import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Footer() {
    return (
        <div className="w-full shadow mt-5">
            <footer className="bg-white text-gray-800 text-center py-4">
                <p className="mb-1">&copy; 2025 Charan Group's. All rights reserved.</p>
                <p className="mb-2">Follow us on:</p>
                <ul className="flex justify-center space-x-4">
                    <li>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-800 hover:text-blue-600 text-xl"
                        >
                            <FaFacebook />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-800 hover:text-blue-400 text-xl"
                        >
                            <FaTwitter />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-800 hover:text-pink-500 text-xl"
                        >
                            <FaInstagram />
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    );
}
