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
          className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
          variants={itemVariants}
        >
          <Link
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-start mb-2"
            to={`/repositories/${repo.full_name}`}
          >
            <h3 className="text-lg font-semibold truncate flex-grow mr-2">{repo.full_name}</h3>
            <FaExternalLinkAlt className="flex-shrink-0 mt-1" size={14} />
          </Link>
          <p className="text-gray-400 text-sm line-clamp-2 mb-3 flex-grow">{repo.description}</p>
          <div className="flex items-center mt-auto text-gray-500 text-sm">
            <div className="flex items-center mr-4">
              <FaStar className="mr-1 text-yellow-500" /> 
              <span>{repo.stargazers_count.toLocaleString()}</span>
            </div>
            <div className="flex items-center">
              <FaCodeBranch className="mr-1 text-green-500" /> 
              <span>{repo.forks_count.toLocaleString()}</span>
            </div>
          </div>
        </motion.div>
      );
    });

  return (
    <motion.div 
      className="border border-gray-700 bg-gray-900 p-4 md:p-6 rounded-lg shadow-xl h-full"
      variants={tableVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 id={id || ''} className="text-xl font-bold mb-4 text-white flex items-center">
        <FaStar className="mr-3 text-yellow-400" />
        {label}
      </h2>
      <div className={`${selectedLanguage !== 'all' ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4' : 'space-y-4'}`}>
        {rendered}
      </div>
    </motion.div>
  );
}

export default RepositoriesTable;