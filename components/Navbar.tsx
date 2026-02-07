export default function Navbar() {
  return (
    <nav className="w-full bg-gradient-to-r from-green-900 to-green-800 border-b-2 border-yellow-500">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2 text-white font-bold text-lg">
          <span className="text-2xl">🌿</span>
          <span>Samruddhi FPO</span>
        </div>

        {/* Menu and Login Button - Right Side */}
        <div className="flex items-center gap-3">
          {/* Menu */}
          <ul className="hidden md:flex gap-3 text-white text-sm font-medium">
            <li className="cursor-pointer hover:text-yellow-400">Home</li>
            <li className="cursor-pointer hover:text-yellow-400">Samruddhi Gold</li>
            <li className="cursor-pointer hover:text-yellow-400">Krishi Samruddhi</li>
            <li className="cursor-pointer hover:text-yellow-400">Shop</li>
            <li className="cursor-pointer hover:text-yellow-400">Login</li>
          </ul>

          {/* Login Button */}
          <button className="bg-yellow-500 text-green-900 px-5 py-2 rounded font-semibold hover:bg-yellow-400">
            Login
          </button>
        </div>

      </div>
    </nav>
  );
}
