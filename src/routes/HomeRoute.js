import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCode, FaStar } from 'react-icons/fa';
import Hero from '../components/Hero';
import RepositoriesTable from '../components/repositories/RepositoriesTable';
import useRepositories from '../hooks/useRepositories';

function HomeRoute() {
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const languages = ['javascript', 'typescript', 'rust', 'go', 'python', 'java'];

  const jsRepos = useRepositories('stars:>10000 language:javascript');
  const tsRepos = useRepositories('stars:>10000 language:typescript');
  const rustRepos = useRepositories('stars:>10000 language:rust');
  const goRepos = useRepositories('stars:>10000 language:go');
  const pythonRepos = useRepositories('stars:>10000 language:python');
  const javaRepos = useRepositories('stars:>10000 language:java');

  const repoData = useMemo(() => ({
    javascript: jsRepos.data,
    typescript: tsRepos.data,
    rust: rustRepos.data,
    go: goRepos.data,
    python: pythonRepos.data,
    java: javaRepos.data
  }), [jsRepos.data, tsRepos.data, rustRepos.data, goRepos.data, pythonRepos.data, javaRepos.data]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <motion.div 
      className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Hero />
      <div className="container mx-auto py-12 px-4">
        
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FaGithub className="inline-block mr-4" />
          Popular Repositories on GitHub
        </motion.h2>

        <motion.div 
          className="flex justify-center mb-8 space-x-2 md:space-x-4 flex-wrap"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {['all', ...languages].map(lang => (
            <motion.button
              key={lang}
              className={`px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium ${selectedLanguage === lang ? 'bg-blue-600' : 'bg-gray-700'} hover:bg-blue-500 transition-colors duration-300`}
              onClick={() => setSelectedLanguage(lang)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCode className="inline-block mr-1 md:mr-2" />
              {lang.charAt(0).toUpperCase() + lang.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className={`grid gap-4 md:gap-8 ${selectedLanguage === 'all' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}
          variants={containerVariants}
        >
          {(selectedLanguage === 'all' ? languages : [selectedLanguage]).map(lang => (
            <RepositoriesTable
              key={lang}
              label={`Most Popular ${lang.charAt(0).toUpperCase() + lang.slice(1)}`}
              repositories={repoData[lang]}
              selectedLanguage={selectedLanguage}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default HomeRoute;