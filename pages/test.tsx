import React from "react";

export function TestPage() {
  return (
    <div>
      <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
      <div className="h-14 bg-gradient-to-r from-sky-500 to-indigo-500"></div>
      <div className="h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
      <div className="h-14 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500"></div>
    </div>
  );
}

export default TestPage;
