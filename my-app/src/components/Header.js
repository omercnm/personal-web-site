import React from "react";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="container flex justify-between items-center">
          <a className="text-4xl font-bold bg-gradient-to-br from-pink-600 to-blue-400 text-transparent bg-clip-text">
            Ömer Canım
          </a>
          <button className="btn btn-sm text-l">Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
