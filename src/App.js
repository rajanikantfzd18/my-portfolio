import { motion, AnimatePresence } from 'framer-motion';
import './index.css';

import { ref, push } from "firebase/database";
import { db } from "./firebaseConfig";
import { useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['Home', 'About', 'Projects', 'Skills', 'Databases', 'Platforms', 'Contact'];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen font-sans scroll-smooth">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 p-4 fixed w-full top-0 z-50 shadow-lg"
      >
        <div className="flex justify-between items-center">
          {/* Logo/Name */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            Personal Portfolio
          </motion.div>

          {/* Desktop Menu - Hidden on mobile */}
          <div className="hidden md:flex">
            <ul className="flex gap-6 justify-center text-sm md:text-base">
              {menuItems.map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-300 hover:text-blue-400 transition duration-300"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
              <motion.li whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
                <a
                  href="https://drive.google.com/file/d/1xvxrE19qJBUMi7JLY5rDshYwkv4cgwRk/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-400 hover:text-green-300 font-semibold transition duration-300"
                >
                  <i className="fas fa-file-download mr-2"></i>Resume Download
                </a>
              </motion.li>
            </ul>
          </div>

          {/* Mobile Menu Button - Visible only on mobile */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-blue-400 focus:outline-none p-2"
            >
              {isMenuOpen ? (
                <i className="fas fa-times text-2xl"></i> // Close icon
              ) : (
                <i className="fas fa-bars text-2xl"></i> // Hamburger icon
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-gray-800 mt-4 rounded-lg overflow-hidden"
            >
              <ul className="flex flex-col p-4 space-y-4">
                {menuItems.map((item) => (
                  <motion.li
                    key={item}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: menuItems.indexOf(item) * 0.1 }}
                  >
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-gray-300 hover:text-blue-400 transition duration-300 py-2 border-b border-gray-700"
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: menuItems.length * 0.1 }}
                >
                  <a
                    href="https://drive.google.com/file/d/1xvxrE19qJBUMi7JLY5rDshYwkv4cgwRk/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-green-400 hover:text-green-300 font-semibold transition duration-300 py-2"
                  >
                    <i className="fas fa-file-download mr-2"></i>Resume Download
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Home Section */}
      <motion.section
        id="home"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-24 p-8 text-center bg-gradient-to-r from-gray-900 to-blue-900"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Mr. Rajani kant
        </h1>
        <p className="text-lg md:text-xl text-gray-300">Software Engineer | Web & App Developer | Innovator</p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
        >
          Get in Touch
        </motion.a>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="p-8 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          Passionate developer crafting modern, responsive, and scalable web and mobile applications. Expertise in React,
          JavaScript, Tailwind CSS, and innovative IoT solutions.
        </p>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="p-8 bg-gray-800"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Retail Bazaar', desc: '8 Minutes Delivery App with Flutter', link: '#' },
            { title: 'Talkify', desc: 'Chatting App built with Java for Android', link: '#' },
            { title: 'BYA', desc: 'Book Your Appointment app using Java for Android', link: '#' },
            { title: 'Hospital Website', desc: 'Responsive website using React.js and Tailwind CSS, with a clean modern UI', link: 'https://sangamhospitals.com/' },
            { title: 'Corporate Website', desc: 'Responsive website using React.js and Tailwind CSS, with a clean modern UI', link: 'https://raisonconsultancyservices.com/' },
            { title: 'ARKON', desc: 'Personal AI Assistant using Python with Tkinter and OpenAI API', link: '#' },
            { title: 'Student Attendance System', desc: 'IoT-based system using NodeMCU 8266', link: '#' },
            { title: 'Traffic Light Control', desc: 'Arduino UNO-based traffic management system', link: '#' },
            { title: 'Home Automation', desc: 'Fan and Light Control with NodeMCU 8266', link: '#' },
          ].map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-300">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.desc}</p>
              <a href={project.link} className="text-blue-400 hover:underline font-semibold">
                View Project <i className="fas fa-arrow-right ml-1"></i>
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="p-8 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Skills and Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 text-gray-300">
          {[
            'HTML', 'CSS', 'JavaScript', 'React Js', 'Node Js', 'Express Js', 'Tailwind CSS', 'Python', 'C Language', 'Android with Java', 'Flutter with Dart',
            'Mobile App Development', 'Web App Development', 'Responsive Web Design', 'Cross-Platform Development',
          ].map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-gray-700 p-3 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300 cursor-pointer"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Databases Section */}
      <motion.section
        id="databases"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="p-8 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Databases
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 text-gray-300">
          {[
            'MongoDB', 'Firebase', 'Supabase',
          ].map((database, index) => (
            <motion.div
              key={database}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-gray-700 p-3 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300 cursor-pointer"
            >
              {database}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* platforms Section */}
      <motion.section
        id="platforms"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="p-8 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Platforms
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 text-gray-300">
          {[
            'Visual Studio Code', 'Android Studio', 'PyCharm', 'Dev C++', 'Arduino IDE', 'GitHub', 'XAMPP', 'Postman', 'Kali Linux',
          ].map((platforms, index) => (
            <motion.div
              key={platforms}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-gray-700 p-3 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300 cursor-pointer"
            >
              {platforms}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="p-8 max-w-xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Contact Me
        </h2>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setIsLoading(true);
            const name = e.target.name.value;
            const email = e.target.email.value;
            const message = e.target.message.value;

            try {
              await push(ref(db, 'portfolio-contact'), {
                name,
                email,
                message,
                timestamp: new Date().toISOString()
              });
              alert("Message sent successfully!");
              e.target.reset();
            } catch (error) {
              console.error("Error adding data: ", error);
              alert("Error sending message, try again!");
            } finally {
              setIsLoading(false);
            }
          }}
          className="flex flex-col gap-4 bg-gray-800 p-6 rounded-2xl shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            disabled={isLoading}
            className="p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 disabled:opacity-50"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            disabled={isLoading}
            className="p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 disabled:opacity-50"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            disabled={isLoading}
            className="p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 disabled:opacity-50"
          ></textarea>

          <motion.button
            type="submit"
            disabled={isLoading}
            whileHover={{ scale: isLoading ? 1 : 1.05 }}
            whileTap={{ scale: isLoading ? 1 : 0.95 }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </motion.button>
        </form>
        <p className="text-gray-300 text-center mt-4">
          Or reach out via email: <a href="mailto:rajanikantfzd18@gmail.com" className="text-blue-400 hover:underline">rajanikantfzd18@gmail.com</a>
        </p>
      </motion.section>

      {/* Footer Section */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-900 p-6 text-center"
      >
        <div className="flex justify-center gap-6 mb-4">
          <motion.a
            href="https://www.linkedin.com/in/rajanikanfzd18/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-gray-300 hover:text-blue-400 transition duration-300"
          >
            <i className="fab fa-linkedin text-2xl"></i>
          </motion.a>
          <motion.a
            href="https://github.com/rajanikantfzd18/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-gray-300 hover:text-blue-400 transition duration-300"
          >
            <i className="fab fa-github text-2xl"></i>
          </motion.a>
          <motion.a
            href="https://facebook.com/rajanikantfzd18/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-gray-300 hover:text-blue-400 transition duration-300"
          >
            <i className="fab fa-facebook text-2xl"></i>
          </motion.a>
          <motion.a
            href="https://instagram.com/rajanikantfzd18/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-gray-300 hover:text-blue-400 transition duration-300"
          >
            <i className="fab fa-instagram text-2xl"></i>
          </motion.a>
        </div>
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Mr. Rajani kant. All rights reserved.
        </p>
      </motion.footer>
    </div>
  );
}

export default App;