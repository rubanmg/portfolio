import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold section-title mx-auto">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-primary/5 p-8 rounded-lg border border-primary/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Professional Summary</h3>
            <p className="text-foreground/80 mb-6 relative z-10">
              Motivated and disciplined professional committed to contributing to the success of an organization while continuously learning and growing. Known for a strong work ethic, adaptability, and a professional attitude. Eager to embrace new technologies and processes, with a focus on accuracy and maintaining the highest standards in all tasks.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Frontend Development</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">React.js</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Web Design</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Problem Solving</span>
            </div>
            <div className="relative z-10">
              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2"
                onClick={() => window.open('/resume8.pdf', '_blank')}
              >
                <Download size={16} />
                Download Resume
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-card p-6 rounded-lg shadow-md border border-border">
                <h3 className="text-xl font-bold mb-2 text-primary">My Approach</h3>
                <p className="text-foreground/80">
                  I approach each project with a focus on creating clean, efficient, and user-friendly interfaces. My goal is to deliver high-quality work that exceeds expectations and provides real value.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-md border border-border">
                <h3 className="text-xl font-bold mb-2 text-primary">What I Bring</h3>
                <ul className="list-disc list-inside text-foreground/80 space-y-2">
                  <li>Self-discipline and professional attitude</li>
                  <li>Strong attention to detail and accuracy</li>
                  <li>Adaptability to new technologies</li>
                  <li>Commitment to continuous learning</li>
                  <li>Effective communication skills</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

