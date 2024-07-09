import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSearch, FaExclamationTriangle } from 'react-icons/fa';
import useRepositories from '../hooks/useRepositories';
import RepositoriesListItem from '../components/repositories/RepositoriesListItem';

function RepositoriesSearchRoute() {
  const [params] = useSearchParams();
  const { data: repositories, isLoading, error } = useRepositories(params.get('q'));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  if (isLoading) {
    return (
      <motion.div
        className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-950 via-blue-950 to-purple-950"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="w-20 h-20 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </motion.div>
    );
  } else if (error) {
    return (
      <motion.div
        className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-950 via-blue-950 to-purple-950"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="bg-red-500/80 backdrop-blur-xl text-white p-8 rounded-xl shadow-2xl flex items-center space-x-4">
          <FaExclamationTriangle className="text-3xl" />
          <span className="text-lg">{error.message}</span>
        </div>
      </motion.div>
    );
  }

  const renderedRepositories = repositories.map((r) => (
    <RepositoriesListItem key={r.id} repository={r} />
  ));

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-gray-950 via-blue-950 to-purple-950 py-20 px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"
          variants={itemVariants}
        >
          <FaSearch className="inline-block mr-4" />
          Search Results
        </motion.h2>
        <motion.div
          className="bg-gray-900/30 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-gray-800"
          variants={itemVariants}
        >
          {renderedRepositories.length > 0 ? (
            <div className="space-y-6">
              {renderedRepositories}
            </div>
          ) : (
            <motion.p
              className="text-center text-gray-300 py-12 text-xl"
              variants={itemVariants}
            >
              No repositories found for your search query.
            </motion.p>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default RepositoriesSearchRoute;
