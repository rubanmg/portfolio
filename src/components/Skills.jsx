import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Layers, Brain, Globe, Database } from 'lucide-react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('programming');

  const skillCategories = [
    {
      id: 'programming',
      title: 'Programming',
      icon: <Code size={20} />,
      skills: [
        { name: 'Python', level: 85 },
        { name: 'C', level: 75 },
        { name: 'Java', level: 70 },
      ]
    },
    {
      id: 'web',
      title: 'Web Skills',
      icon: <Globe size={20} />,
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'React.js', level: 80 },
        { name: 'Node.js', level: 70 },
        { name: 'Git', level: 75 },
      ]
    },
    {
      id: 'soft',
      title: 'Soft Skills',
      icon: <Brain size={20} />,
      skills: [
        { name: 'Leadership', level: 80 },
        { name: 'Time Management', level: 85 },
        { name: 'Creativity', level: 90 },
        { name: 'Problem Solving', level: 85 },
        { name: 'Critical Thinking', level: 80 },
      ]
    },
    {
      id: 'foundations',
      title: 'Foundations',
      icon: <Layers size={20} />,
      skills: [
        { name: 'DSA', level: 75 },
        { name: 'Database Management', level: 70 },
        { name: 'Operating System', level: 75 },
        { name: 'OOPS', level: 80 },
        { name: 'Software Engineering', level: 75 },
      ]
    },
    {
      id: 'languages',
      title: 'Languages',
      icon: <Database size={20} />,
      skills: [
        { name: 'English', level: 90 },
        { name: 'Tamil', level: 95 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold section-title mx-auto">My Skills</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            I've developed a diverse set of skills throughout my education and projects.
            Here's an overview of my technical and soft skills.
          </p>
        </motion.div>

        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                  activeTab === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card hover:bg-primary/10'
                }`}
              >
                {category.icon}
                {category.title}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories
              .find((category) => category.id === activeTab)
              ?.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="skill-card bg-card p-6 rounded-lg shadow-md border border-border"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                    <span className="text-sm text-primary font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

