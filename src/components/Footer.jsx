import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold font-accent">
              Ruban<span className="text-accent">MG</span>
            </h2>
            <p className="mt-2 text-primary-foreground/80">
              Frontend Developer | React.js Specialist
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="bg-accent text-foreground p-3 rounded-full hover:bg-accent/80 transition-all mb-4"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
            <p className="text-primary-foreground/80 text-sm">
              &copy; {new Date().getFullYear()} Ruban MG. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

