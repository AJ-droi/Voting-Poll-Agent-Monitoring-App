"use client"
const Header = () => {
    return (
      <header className="p-4 bg-white shadow flex justify-between items-center">
        <h1 className="text-lg font-semibold">Dashboard</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Logout</button>
      </header>
    );
  };
  
  export default Header;
  