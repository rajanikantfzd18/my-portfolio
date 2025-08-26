import { motion } from 'framer-motion';
import './index.css';

function App() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen font-sans scroll-smooth">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 p-4 fixed w-full top-0 z-20 shadow-lg"
      >
        <ul className="flex flex-wrap gap-6 justify-center text-sm md:text-base">
          {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <a href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-blue-400 transition duration-300">
                {item}
              </a>
            </motion.li>
          ))}
          <motion.li whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
            <a
              href="https://drive.google.com/file/d/1xvxrE19qJBUMi7JLY5rDshYwkv4cgwRk/view?usp=sharing"
              target="_blank"
              className="text-green-400 hover:text-green-300 font-semibold transition duration-300"
            >
              <i className="fas fa-file-download mr-2"></i>Resume Download
            </a>
          </motion.li>
        </ul>
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
            { title: 'Calculator', desc: 'iOS-style Calculator app for Android using Java', link: '#' },
            { title: 'Portfolio Website', desc: 'Personal portfolio using React Js and Tailwind CSS', link: '#' },
            { title: 'College Website', desc: 'Responsive website using HTML, CSS, JavaScript', link: '#' },
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
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-gray-300">
          {[
            'HTML', 'CSS', 'JavaScript', 'React Js', 'Node Js', 'Express Js', 'Tailwind CSS', 'Python', 'Java', 'Flutter',
            'Android Studio', 'Git', 'GitHub', 'Figma', 'IoT', 'Arduino IDE', 'C', 'C++', 'Dart',
            'Web APIs', 'JSON', 'XML', 'SQL', 'MongoDB', 'MySQL', 'Firebase', 'Supabase', 'NoSQL', 'Problem Solving', 'Debugging',
            'Cross-Platform Development', 'Mobile App Development', 'UI/UX Design', 'Responsive Web Design',
            'Software Development Life Cycle (SDLC)', 'Continuous Integration/Continuous Deployment (CI/CD)',
            'Cloud Computing', 'AWS', 'Azure', 'Google Cloud Platform',
          ].map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-gray-700 p-3 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
            >
              {skill}
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
          action="https://formspree.io/f/YOUR_FORMSPREE_ID"
          method="POST"
          className="flex flex-col gap-4 bg-gray-800 p-6 rounded-2xl shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          ></textarea>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
          >
            Send Message
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
            href="https://www.linkedin.com/in/rajanikantfzd18/"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            className="text-gray-300 hover:text-blue-400 transition duration-300"
          >
            <i className="fab fa-linkedin text-2xl"></i>
          </motion.a>
          <motion.a
            href="https://github.com/rajanikantfzd18/"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            className="text-gray-300 hover:text-blue-400 transition duration-300"
          >
            <i className="fab fa-github text-2xl"></i>
          </motion.a>
          <motion.a
            href="https://facebook.com/rajanikantfzd18/"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            className="text-gray-300 hover:text-blue-400 transition duration-300"
          >
            <i className="fab fa-facebook text-2xl"></i>
          </motion.a>
          <motion.a
            href="https://instagram.com/rajanikantfzd18/"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            className="text-gray-300 hover:text-blue-400 transition duration-300"
          >
            <i className="fab fa-instagram text-2xl"></i>
          </motion.a>
        </div>
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Rajani kant. All rights reserved.
        </p>
      </motion.footer>
    </div>
  );
}

export default App;