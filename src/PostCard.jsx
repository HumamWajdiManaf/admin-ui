import React, { useState } from "react";

function PostCard({ title, body }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className={`bg-white p-6 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:bg-red-50 hover:border-2 hover:border-black-500 flex flex-col justify-between h-full`}
    >
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">{title}</h2>
        <p className="text-gray-600 mb-4 text-center">{body}</p>
      </div>

      <button
        className={`${
          clicked ? "bg-red-700" : "bg-gray-700 "
        } text-white p-2 rounded-md w-full focus:outline-none transition-colors duration-300`}
        onClick={() => setClicked(!clicked)}
      >
        {clicked ? "Tombol sudah diklik" : "Silakan Klik "}
      </button>
    </div>
  );
}

export default PostCard;
