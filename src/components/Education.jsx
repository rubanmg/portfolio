import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: 'KIT-Kalaignarkarunanidhi Institute of Technology, Coimbatore',
      degree: 'BE-Computer Science and Engineering',
      grade: 'CGPA - 7.63',
      year: '2026',
    },
    {
      institution: 'Sri Shanmuka Matric. Hr. Sec. School, Mannargudi',
      degree: 'Higher Secondary Certification',
      grade: 'PERCENTAGE - 70.16',
      year: '2022',
    },
    {
      institution: "St. Joseph's Matriculation School, Mannargudi",
      degree: 'Secondary School Certificate',
      grade: 'PERCENTAGE - 68.6',
      year: '2020',
    },
  ];

  return (
    <section id="education" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold section-title mx-auto">Education</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg shadow-lg overflow-hidden border border-border hover:border-primary/50 transition-all"
            >
              <div className="bg-primary p-4">
                <div className="flex justify-between items-center">
                  <GraduationCap size={24} className="text-primary-foreground" />
                  <div className="flex items-center text-primary-foreground">
                    <Calendar size={16} className="mr-1" />
                    <span>{edu.year}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 line-clamp-2">{edu.institution}</h3>
                <p className="text-foreground/80 mb-4">{edu.degree}</p>
                <div className="bg-muted/50 p-3 rounded-md">
                  <p className="text-primary font-semibold">{edu.grade}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

