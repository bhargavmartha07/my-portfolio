function Navbar() {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-black/70 px-6 py-4 flex justify-between items-center border-b border-gray-800 z-50">
      
      <h1 className="font-bold text-lg">Bhargav</h1>

      <div className="space-x-6 hidden md:flex">
        <a href="#about" className="hover:text-gray-400 transition">About</a>
        <a href="#skills" className="hover:text-gray-400 transition">Skills</a>
        <a href="#projects" className="hover:text-gray-400 transition">Projects</a>
        <a href="#contact" className="hover:text-gray-400 transition">Contact</a>
      </div>

    </nav>
  );
}

export default Navbar;