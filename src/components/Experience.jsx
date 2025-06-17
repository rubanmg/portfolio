import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Ether Info Technology',
      position: 'Internship',
      description: 'Data Science Using Python',
      duration: '15 Days',
      date: '07/02/2024 - 21/02/2024',
    },
    {
      company: 'Appin Institution Of Technology',
      position: 'IM-Plant Training',
      description: 'Web Design',
      duration: '15 Days',
      date: '01/07/2024 - 15/07/2024',
    },
    {
      company: 'Brinary Spot Technology',
      position: 'IM-Plant Training',
      description: 'Web Development',
      duration: '7 Days',
      date: '24/07/2023 - 30/07/2023',
    },
  ];

  const certifications = [
    {
      provider: 'Infosys Springboard',
      name: 'Python Foundation',
    },
    {
      provider: 'TechA',
      name: 'Python Programming Advanced',
    },
    {
      provider: 'TechA',
      name: 'Web Development Using HTML and CSS Foundation',
    },
    {
      provider: 'Celonis',
      name: 'Process Automation',
    },
    {
      provider: 'Celonis',
      name: 'Create and Deliver Demos',
    },
    {
      provider: 'Celonis',
      name: 'Academic Process Mining',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold section-title mx-auto">Professional Experience</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-primary">
              <Briefcase size={24} />
              Work Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="timeline-item"
                >
                  <div className="bg-card p-6 rounded-lg shadow-md border border-border">
                    <div className="flex justify-between flex-wrap gap-2 mb-2">
                      <h4 className="text-xl font-semibold text-primary">{exp.company}</h4>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar size={14} className="mr-1" />
                        {exp.date}
                      </div>
                    </div>
                    <h5 className="text-lg font-medium mb-2">{exp.position}</h5>
                    <p className="text-foreground/80 mb-2">{exp.description}</p>
                    <p className="text-sm text-muted-foreground">Duration: {exp.duration}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award">
                <circle cx="12" cy="8" r="6" />
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
              </svg>
              Certifications
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card p-5 rounded-lg shadow-md border border-border hover:border-primary/50 transition-all"
                >
                  <div className="text-sm text-accent font-medium mb-1">{cert.provider}</div>
                  <h4 className="text-lg font-semibold">{cert.name}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

