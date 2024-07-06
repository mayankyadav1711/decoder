import { motion } from 'framer-motion';
import { StarIcon, IssueOpenedIcon, RepoForkedIcon, CodeIcon } from '@primer/octicons-react';

function RepositoriesSummary({ repository }) {
  const { stargazers_count, open_issues, forks, language } = repository;

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
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  const SummaryItem = ({ icon: Icon, label, value, color }) => (
    <motion.div 
      className="flex items-center space-x-1 text-sm"
      variants={itemVariants}
    >
      <Icon size={16} className={`${color} flex-shrink-0`} aria-label={label} />
      <span className="hidden sm:inline">{value}</span>
      <span className="sm:hidden">{typeof value === 'number' ? value.toLocaleString() : value}</span>
    </motion.div>
  );

  return (
    <motion.div 
      className="flex flex-wrap gap-4 text-gray-400 mt-3"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <SummaryItem icon={StarIcon} label="stars" value={`${stargazers_count.toLocaleString()} stars`} color="text-yellow-400" />
      <SummaryItem icon={IssueOpenedIcon} label="open issues" value={`${open_issues.toLocaleString()} issues`} color="text-red-400" />
      <SummaryItem icon={RepoForkedIcon} label="forks" value={`${forks.toLocaleString()} forks`} color="text-green-400" />
      <SummaryItem icon={CodeIcon} label="language" value={language} color="text-blue-400" />
    </motion.div>
  );
}

export default RepositoriesSummary;