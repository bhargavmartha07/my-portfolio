function Contact() {
  return (
    <section id="contact" className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <div className="space-y-3">
        <a href="mailto:bhargavmartha07@gmail.com" className="block hover:text-blue-400">
          Email
        </a>
        <a href="https://github.com/bhargavmartha07" target="_blank" className="block hover:text-blue-400">
          GitHub
        </a>
        <a href="https://linkedin.com" target="_blank" className="block hover:text-blue-400">
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;