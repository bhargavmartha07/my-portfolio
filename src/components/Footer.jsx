function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-gray-800">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          &copy; {year} Bhargav Martha. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-sm">
          <a href="#about" className="text-gray-500 hover:text-gray-300 transition-colors">About</a>
          <a href="#projects" className="text-gray-500 hover:text-gray-300 transition-colors">Projects</a>
          <a href="#contact" className="text-gray-500 hover:text-gray-300 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
