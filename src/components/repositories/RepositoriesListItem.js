import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { FaGithub, FaCode, FaStar, FaCodeBranch, FaExternalLinkAlt } from 'react-icons/fa';
import RepositoriesSummary from "./RepositoriesSummary";

function RepositoriesListItem({ repository }) {
  const { full_name, language, description, owner, name, html_url } = repository;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="py-6 border-b border-gray-700 flex flex-col md:flex-row items-start md:items-center justify-between hover:bg-gray-800 transition-colors duration-300 px-4 md:px-6 rounded-lg"
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-start space-x-4 mb-4 md:mb-0">
        <FaCode className="w-6 h-6 text-gray-300 flex-shrink-0 mt-1" />
        <div>
          <Link
            to={`/repositories/${full_name}`}
            className="text-xl text-white hover:text-blue-400 transition-colors duration-300 flex items-center"
          >
            {owner.login}/<span className="font-bold">{name}</span>
            <FaExternalLinkAlt className="ml-2 text-sm" />
          </Link>
          <p className="text-gray-300 italic mt-2 line-clamp-2 max-w-2xl">
            {description}
          </p>
          <div className="mt-3">
            <RepositoriesSummary repository={repository} />
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-400">{language}</span>
       <a 
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="github repository"
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </motion.div>
  );
}

export default RepositoriesListItem;