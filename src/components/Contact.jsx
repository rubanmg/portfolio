import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Code, FileCode } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! This is a demo form.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold section-title mx-auto">Get In Touch</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Feel free to reach out to me for any questions, opportunities, or just to say hello!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Email</h4>
                  <a 
                    href="mailto:govindruban9@gmail.com" 
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    govindruban9@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Phone</h4>
                  <a 
                    href="tel:+916381618228" 
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    +91 6381618228
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Location</h4>
                  <p className="text-foreground/80">Coimbatore, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4 text-primary">Connect With Me</h3>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/rubanmg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-card p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all contact-icon"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/ruban-mg-70849a368/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-card p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all contact-icon"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://www.codechef.com/users/ruban9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-card p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all contact-icon"
                >
                  <Code size={20} />
                </a>
                <a 
                  href="https://leetcode.com/u/rubang7/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-card p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all contact-icon"
                >
                  <FileCode size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-lg shadow-md border border-border">
              <h3 className="text-2xl font-bold mb-6 text-primary">Send Me a Message</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full flex items-center justify-center gap-2">
                  <Send size={16} />
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

