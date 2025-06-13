import React, { useEffect, useState } from 'react';

export default function MiniSiteList() {
  const [miniSites, setMiniSites] = useState([]);
  const [copySuccess, setCopySuccess] = useState(null);

  // Mock fetch user mini-sites - replace with your API call
  useEffect(() => {
    // Example data from backend
    const data = [
      {
        id: 'abc123',
        title: 'Valentine Special for Sarah',
        createdAt: '2025-06-08',
      },
      {
        id: 'def456',
        title: 'Friendship Day Surprise',
        createdAt: '2025-06-05',
      },
    ];
    setMiniSites(data);
  }, []);

  const baseUrl = window.location.origin + '/site/';

  function copyToClipboard(link) {
    navigator.clipboard.writeText(link).then(() => {
      setCopySuccess('Copied!');
      setTimeout(() => setCopySuccess(null), 2000);
    });
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-6 text-pink-600">Your Mini-Sites</h2>

      {miniSites.length === 0 && (
        <p className="text-gray-600">You have not created any mini-sites yet.</p>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {miniSites.map(({ id, title, createdAt }) => {
          const shareLink = `${baseUrl}${id}`;
          return (
            <div
              key={id}
              className="bg-pink-50 rounded-lg p-5 shadow-md flex flex-col justify-between"
            >
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-sm text-gray-500 mb-4">
                Created on: {new Date(createdAt).toLocaleDateString()}
              </p>

              <div className="flex flex-col space-y-2">
                <input
                  type="text"
                  value={shareLink}
                  readOnly
                  className="w-full rounded border border-pink-300 px-3 py-2 text-sm text-pink-700 bg-white"
                  onFocus={(e) => e.target.select()}
                />
                <button
                  onClick={() => copyToClipboard(shareLink)}
                  className="bg-pink-500 text-white font-semibold py-2 rounded hover:bg-pink-600 transition"
                >
                  Copy Link
                </button>
                {copySuccess && (
                  <span className="text-green-600 font-medium mt-1">{copySuccess}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
