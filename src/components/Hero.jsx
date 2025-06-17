import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Code, FileCode } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '../assets/images/profile-photo.jpg';

const Hero = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    const roles = ['Frontend Developer', 'React.js Developer', 'Web Designer'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const type = () => {
      const currentRole = roles[roleIndex];
      
      if (typingRef.current) {
        if (isDeleting) {
          // Deleting text
          typingRef.current.textContent = currentRole.substring(0, charIndex - 1);
          charIndex--;
          typingSpeed = 50;
        } else {
          // Typing text
          typingRef.current.textContent = currentRole.substring(0, charIndex + 1);
          charIndex++;
          typingSpeed = 100;
        }

        // If word is complete, start deleting after pause
        if (!isDeleting && charIndex === currentRole.length) {
          isDeleting = true;
          typingSpeed = 1500; // Pause at the end
        }

        // If deletion is complete, move to next word
        if (isDeleting && charIndex === 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }

      setTimeout(type, typingSpeed);
    };

    type();
  }, []);

  return (
    <section id="home" className="hero-section relative flex items-center justify-center overflow-hidden">
      <div className="particles-bg"></div>
      <div className="container mx-auto px-4 py-20 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div 
            className="w-full md:w-1/2 text-center md:text-left text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-accent">Ruban MG</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6">
              I'm a <span ref={typingRef} className="text-accent"></span>
              <span className="typing-cursor">|</span>
            </h2>
            <p className="text-lg mb-8 text-gray-200 max-w-lg">
              Motivated and disciplined professional committed to contributing to the success of an organization while continuously learning and growing.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button className="bg-accent text-foreground hover:bg-accent/80">
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            <div className="flex mt-8 gap-4 justify-center md:justify-start">
              <a 
                href="https://github.com/rubanmg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/ruban-mg-70849a368/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://www.codechef.com/users/ruban9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
              >
                <Code size={24} />
              </a>
              <a 
                href="https://leetcode.com/u/rubang7/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
              >
                <FileCode size={24} />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent rounded-full blur-md transform -translate-x-4 translate-y-4"></div>
              <img 
                src={profilePhoto} 
                alt="Ruban MG" 
                className="w-64 h-64 md:w-80 md:h-80 object-cover object-top rounded-full border-4 border-white shadow-xl relative z-10"
              />
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          <a href="#about" className="text-white">
            <ArrowDown size={32} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

