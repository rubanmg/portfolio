import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import bikeRentalImage from '../assets/images/bike-rental.png';
import handballStoreImage from '../assets/images/handball-store.png';
import portfolioWebsiteImage from '../assets/images/portfolio-website.png';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'Bike Rental System',
      description: 'A responsive, frontend-only bike rental web app using React. Enabled users to browse, filter, and book bikes by type and price.',
      image: bikeRentalImage,
      category: 'react',
      technologies: ['React', 'CSS', 'JavaScript'],
      github: 'https://github.com/rubanmg',
      demo: '#',
    },
    {
      title: 'Handball Gear Store',
      description: 'A responsive, frontend-only e-commerce web app for browsing and purchasing handball equipment and accessories.',
      image: handballStoreImage,
      category: 'react',
      technologies: ['React', 'CSS', 'JavaScript'],
      github: 'https://github.com/rubanmg',
      demo: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'Designed and developed a responsive personal portfolio website using React.js to showcase projects, skills, and achievements.',
      image: portfolioWebsiteImage,
      category: 'react',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/rubanmg',
      demo: '#',
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold section-title mx-auto">My Projects</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents my skills and experience in different areas of web development.
          </p>
        </motion.div>

        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full transition-all ${
                filter === 'all'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card hover:bg-primary/10'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('react')}
              className={`px-4 py-2 rounded-full transition-all ${
                filter === 'react'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card hover:bg-primary/10'
              }`}
            >
              React
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="project-card bg-card rounded-lg shadow-lg overflow-hidden border border-border"
            >
              <div className="overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-foreground/80 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-foreground/70 hover:text-primary transition-colors"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-foreground/70 hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

