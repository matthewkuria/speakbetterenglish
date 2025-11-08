import React from 'react'

const ProfileComponent = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-[#007BFF] mb-4 text-center">About Me</h2>

      <ul className="space-y-2 text-gray-700">
        <li><strong>My Full Name:</strong> Rupavath Srinivasa Rao Naik</li>
        <li><strong>My Bible Name:</strong> Paul Srinivasa</li>
        <li><strong>Age:</strong> 43</li>
        <li>
          <strong>Languages I Can Speak:</strong>
          <span className="block ml-2">Hindi, English, Telugu, Bhojpur, Banjara, Tamil, Urdu</span>
        </li>
        <li>
          <strong>Languages I Can Understand:</strong>
          <span className="block ml-2">Kannada</span>
        </li>
      </ul>
    </div>
  );
}


export default ProfileComponent