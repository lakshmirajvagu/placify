import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandFooter() {
  const navigate = useNavigate();

  const loginLinks = [
    { label: 'Login as TPO', path: '/tpo/login' },
    { label: 'Login as Management', path: '/management/login' },
    { label: 'Login as Super Admin', path: '/admin' },
  ];

  return (
    <footer className="bg-gradient-to-br from-white via-slate-100 to-gray-100 text-gray-800 py-10 mt-16 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Admin Login Buttons */}
        <div className="flex flex-wrap justify-center items-center max-md:gap-3 md:gap-6 mb-8">
          {loginLinks.map((link, idx) => (
            <button
              key={idx}
              onClick={() => navigate(link.path)}
              className="bg-green-600 hover:bg-green-500 px-5 py-2 rounded-md text-white text-sm font-medium shadow-md transition-all duration-300"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Footer Text */}
        <div className="text-center text-sm text-gray-600">
          <p>© 2024 <span className="text-green-600 font-semibold">College Placement Management System</span>. All rights reserved.</p>
        
        </div>
      </div>
    </footer>
  );
}

export default LandFooter;
