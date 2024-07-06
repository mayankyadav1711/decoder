import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSearch, FaExclamationTriangle } from 'react-icons/fa';
import useRepositories from '../hooks/useRepositories';
import RepositoriesListItem from '../components/repositories/RepositoriesListItem';

function RepositoriesSearchRoute() {
  const [params] = useSearchParams();
  const {
    data: repositories,
    isLoading,
    error,
  } = useRepositories(params.get('q'));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  if (isLoading) {
    return (
      <motion.div 
        className="flex items-center justify-center min-h-screen bg-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </motion.div>
    );
  } else if (error) {
    return (
      <motion.div 
        className="flex items-center justify-center min-h-screen bg-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
          <FaExclamationTriangle className="text-2xl" />
          <span>{error.message}</span>
        </div>
      </motion.div>
    );
  }

  const renderedRepositories = repositories.map((r) => (
    <RepositoriesListItem key={r.id} repository={r} />
  ));

  return (
    <motion.div 
      className="container mx-auto py-12 px-4 text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 
        className="text-4xl md:text-5xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
        variants={itemVariants}
      >
        <FaSearch className="inline-block mr-4" />
        Search Results
      </motion.h2>
      <motion.div 
        className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-xl"
        variants={itemVariants}
      >
        {renderedRepositories.length > 0 ? (
          renderedRepositories
        ) : (
          <motion.p 
            className="text-center text-gray-400 py-8"
            variants={itemVariants}
          >
            No repositories found for your search query.
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
}

export default RepositoriesSearchRoute;