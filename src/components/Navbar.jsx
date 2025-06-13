import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-pink-500 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wide hover:text-pink-200">
          ConfuseYourCrush
        </Link>

        <div className="space-x-6 text-lg">
          <Link to="/" className="hover:text-pink-200">Home</Link>
          <Link to="/dashboard" className="hover:text-pink-200">Dashboard</Link>
          <Link to="/blog" className="hover:text-pink-200">Blog</Link>
          <Link to="/login" className="hover:text-pink-200">Login</Link>
          <Link to="/signup" className="hover:text-pink-200 font-semibold bg-white text-pink-500 px-4 py-1 rounded-md hover:bg-pink-100">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
