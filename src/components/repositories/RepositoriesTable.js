import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaStar, FaCodeBranch, FaExternalLinkAlt } from 'react-icons/fa';

function RepositoriesTable({ label, repositories, id, selectedLanguage }) {
  const tableVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const rendered =
    repositories &&
    repositories.slice(0, 5).map((repo) => {
      return (
        <motion.div 
          key={repo.id} 
          className="bg-gray-900/50 backdrop-blur-xl p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-800 h-full flex flex-col"
          variants={itemVariants}
        >
          <Link
            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-start mb-3"
            to={`/repositories/${repo.full_name}`}
          >
            <h3 className="text-xl font-bold truncate flex-grow mr-2">{repo.full_name}</h3>
            <FaExternalLinkAlt className="flex-shrink-0 mt-1" size={16} />
          </Link>
          <p className="text-gray-300 text-sm line-clamp-3 mb-4 flex-grow">{repo.description}</p>
          <div className="flex items-center mt-auto text-gray-400 text-sm">
            <div className="flex items-center mr-6">
              <FaStar className="mr-2 text-yellow-400" size={18} /> 
              <span>{repo.stargazers_count.toLocaleString()}</span>
            </div>
            <div className="flex items-center">
              <FaCodeBranch className="mr-2 text-green-400" size={18} /> 
              <span>{repo.forks_count.toLocaleString()}</span>
            </div>
          </div>
        </motion.div>
      );
    });

  return (
    <motion.div 
      className="bg-gray-900/30 backdrop-blur-xl p-6 rounded-2xl shadow-2xl h-full border border-gray-800"
      variants={tableVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 id={id || ''} className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center">
        <FaStar className="mr-3 text-yellow-400" size={24} />
        {label}
      </h2>
      <div className={`${selectedLanguage !== 'all' ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6' : 'space-y-6'}`}>
        {rendered}
      </div>
    </motion.div>
  );
}

export default RepositoriesTable;