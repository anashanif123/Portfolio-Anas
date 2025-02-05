import React from "react";
import { Link } from "react-scroll";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGithub,
  FaNodeJs,
  FaBootstrap,
  FaDatabase,
  FaFire,
  FaPaintBrush,
  FaEnvelopeOpen,
  FaServer,
  FaPinterest,
  FaUsers,
  FaUserTie,
  FaBrain,
} from "react-icons/fa";
import image from "./assets/images/anas.jpg";
import ParticlesComponent from "./components/particles";

const App = () => {
  const skills = [
    {
      name: "HTML",
      logo: <FaHtml5 className="text-orange-500" />,
      percentage: 65,
    },
    {
      name: "CSS",
      logo: <FaCss3Alt className="text-blue-500" />,
      percentage: 70,
    },
    {
      name: "JavaScript",
      logo: <FaJsSquare className="text-yellow-500" />,
      percentage: 85,
    },
    {
      name: "React.js",
      logo: <FaReact className="text-cyan-400" />,
      percentage: 90,
    },
    {
      name: "MongoDB",
      logo: <FaDatabase className="text-green-500" />,
      percentage: 75,
    },
    {
      name: "Firebase",
      logo: <FaFire className="text-yellow-600" />,
      percentage: 70,
    },
    {
      name: "Tailwind CSS",
      logo: <FaPaintBrush className="text-teal-500" />,
      percentage: 85,
    },
    {
      name: "GitHub",
      logo: <FaGithub className="text-gray-800" />,
      percentage: 90,
    },
    {
      name: "Bootstrap",
      logo: <FaBootstrap className="text-primary" />,
      percentage: 80,
    },
    {
      name: "Aseprite",
      logo: <FaPaintBrush className="text-pink-500" />,
      percentage: 60,
    },
    {
      name: "Postman",
      logo: <FaEnvelopeOpen className="text-orange-500" />,
      percentage: 75,
    },
    {
      name: "Express.js",
      logo: <FaServer className="text-gray-600" />,
      percentage: 70,
    },
    {
      name: "Node.js",
      logo: <FaNodeJs className="text-green-700" />,
      percentage: 75,
    },
    { name: "Next.js", logo: <SiNextdotjs className="text-red-500" /> },
    {
      name: "Pinterest",
      logo: <FaPinterest className="text-red-500" />,
      percentage: 50,
    },
    {
      name: "Teamwork",
      logo: <FaUsers className="text-indigo-500" />,
      percentage: 90,
    },
    {
      name: "Leadership",
      logo: <FaUserTie className="text-teal-700" />,
      percentage: 85,
    },
    {
      name: "Quick Learner",
      logo: <FaBrain className="text-yellow-500" />,
      percentage: 95,
    },
  ];

  const projects = [
    {
      title: "EcommerceStore",
      description:
        "Developed a fully functional e-commerce web applicationwith a modern, user-friendly interface using React, Redux,and Tailwind CSS Implemented features like product listing, shopping cart,user authentication, and payment integration.Focused on performance optimization and ensuring a smooth shopping experience across different devices.",
      githubLink: "https://github.com/anashanif123/ElectroPoint",
      vercelLink: "https://electro-point.vercel.app/",
    },
    {
      title: "LMS",
      description:
        "Currently building a management system for tracking and managing [orders, users,or specific processes] using React, Node.js, and MongoDB.Working on features like data visualization, user role management, and real-time.",
      githubLink: "https://github.com/anashanif123/LMS",
      vercelLink: "https://lms-opal-pi.vercel.app/",
    },
    {
      title: "Doctor Managment System",
      description:
        "A web-based application built with Next.js to streamline the management of doctors, appointments, and patient records. This system allows admins to add, update, and delete doctor profiles, while patients can book, view, and manage appointments. Features include user authentication, real-time scheduling, and a dashboard for doctors to manage their schedules. Built with modern technologies like React, Tailwind CSS, and Express , MongoDB for backend functionality. Perfect for clinics or hospitals looking to digitize their operations.",
      githubLink: "https://github.com/anashanif123/DMS",
      vercelLink: "https://dms-ivory-mu.vercel.app/",
    },
  ];

  return (
    <div className="font-sans bg-gray-900 text-white">
      <ParticlesComponent />
      {/* Navbar */}
      <nav className="fixed w-full bg-gray-900 shadow-lg z-10">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-xl font-bold text-white">Anas</div>
          <div className="space-x-6">
            {["home", "about", "skills", "projects"].map((section) => (
              <Link
                key={section}
                to={section}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-gray-400 transition duration-300"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Social Links Sidebar */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-8 text-white">
        {[
          {
            href: "https://www.linkedin.com/in/anas-hanif-2915b0317/",
            icon: "fab fa-linkedin",
            color: "text-blue-600",
          },
          {
            href: "https://twitter.com",
            icon: "fab fa-twitter",
            color: "text-blue-400",
          },
          {
            href: "https://github.com/anashanif123",
            icon: "fab fa-github",
            color: "text-gray-800",
          },
          {
            href: "mailto:anashanif629@gmail.com",
            icon: "fas fa-envelope",
            label: "Email",
            color: "text-gray-600",
          },
        ].map(({ href, icon, color }) => (
          <a
            key={icon}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${color} hover:text-gray-400 text-3xl transition duration-300`}
          >
            <i className={icon}></i>
          </a>
        ))}
      </div>

      {/* Home Section */}
      <section
        id="home"
        className="h-screen flex flex-col md:flex-row justify-center items-center bg-gradient-to-b from-gray-900 to-gray-800 px-6"
        style={{ paddingLeft: "6rem" }} // Adjust padding to account for sidebar
      >
        {/* Left Side: Text Content */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4">HEY, I'M MUHAMMAD ANAS</h1>
          <p className="text-lg max-w-md mb-6">
            I specialize in building high-quality web applications using HTML,
            CSS, JavaScript, Tailwind CSS, Firebase, MongoDB, Next.js, React.js,
            and Bootstrap.
          </p>
          <a
            href="#projects"
            className="bg-gray-600 text-white px-6 py-2 rounded-full hover:bg-gray-500 transition duration-300"
            style={{ zIndex: "2" }}
          >
            View Projects
          </a>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={image} // Replace with your image URL
            alt="Profile"
            className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover shadow-2xl"
            style={{ zIndex: "1" }}
          />
        </div>
      </section>

      {/* About Section */}

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen flex flex-col justify-center items-center bg-gray-900"
      >
        <h2 className="text-4xl font-bold mb-6 text-center">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 text-center w-full px-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="group flex flex-col items-center transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-5xl mb-2 group-hover:text-gray-400 transition duration-300">
                {skill.logo}
              </div>
              <div className="text-lg">{skill.name}</div>
              <div className="text-sm text-gray-500">{skill.percentage}%</div>

              {/* Progress bar */}
              <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex flex-col justify-center items-center bg-gray-800"
      >
        <h2 className="text-4xl font-bold mb-6 text-center ">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center w-full px-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 text-white p-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300"
              style={{ zIndex: "2" }}
            >
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-lg mb-4">{project.description}</p>
              <div className="flex justify-center space-x-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  className="text-blue-500 hover:text-blue-400 transition duration-300"
                >
                  GitHub
                </a>
                <a
                  href={project.vercelLink}
                  target="_blank"
                  className="text-blue-500 hover:text-blue-400 transition duration-300"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section
        id="about"
        className="min-h-screen flex flex-col justify-center items-center bg-gray-800"
      >
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg max-w-2xl text-center">
          I am a passionate web developer who loves to create visually appealing
          and user-friendly web applications. My goal is to craft seamless user
          experiences with a focus on performance and responsiveness.I am a
          passionate Full-Stack Developer with expertise in building scalable
          and efficient web applications. With a strong foundation in both
          front-end and back-end technologies, I specialize in creating seamless
          user experiences and robust server-side architectures. I have hands-on
          experience with modern frameworks and technologies, including React,
          Angular, Vue.js, Node.js, Express, Django, and Laravel, along with
          databases such as MongoDB, PostgreSQL, and MySQL. I thrive in agile
          environments and enjoy solving complex problems through clean,
          maintainable code. Beyond coding, I stay up-to-date with industry
          trends, continuously learning new technologies to enhance my skill
          set. I am passionate about delivering high-quality software solutions
          and collaborating with cross-functional teams to bring innovative
          ideas to life. Let’s connect and build something amazing together! 🚀
        </p>
      </section>
    </div>
  );
};

export default App;
