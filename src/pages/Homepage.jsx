import React from 'react';
import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="bg-gradient-to-r from-pink-400 to-red-400 text-white py-24 flex flex-col items-center text-center px-4">
        <h1 className="text-5xl font-extrabold mb-4">
          Confuse Your Crush with Cute Love Mini-Sites
        </h1>
        <p className="max-w-xl mb-8 text-lg">
          Choose from pre-made animated love confession templates, customize your message, and share instantly with your crush or friends.
        </p>
        <Link
          to="/dashboard/sites/create"
          className="bg-white text-pink-500 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-pink-100 transition"
        >
          Create Your Mini-Site
        </Link>
      </section>

      <section className="flex-grow container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-pink-600 mb-6 text-center">
          Why Use ConfuseYourCrush?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-pink-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Easy & Fast</h3>
            <p>Create and share beautiful mini-sites in minutes without any coding.</p>
          </div>
          <div className="bg-pink-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Fun & Interactive</h3>
            <p>Engage your crush or friends with cute animations and personalized messages.</p>
          </div>
          <div className="bg-pink-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Completely Free</h3>
            <p>Start spreading love today with no signup required to create mini-sites.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
