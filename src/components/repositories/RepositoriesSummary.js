import { StarIcon, IssueOpenedIcon, RepoForkedIcon, CodeIcon } from '@primer/octicons-react';

function RepositoriesSummary({ repository }) {
  const { stargazers_count, open_issues, forks, language } = repository;

  return (
    <div className="flex flex-row gap-4 text-gray-400 mt-2">
      <div className="flex items-center">
        <StarIcon aria-label="stars" size={16} className="text-yellow-400 mr-1" /> {stargazers_count}
      </div>
      <div className="flex items-center">
        <IssueOpenedIcon aria-label="open issues" size={16} className="text-red-400 mr-1" /> {open_issues} issues need help
      </div>
      <div className="flex items-center">
        <RepoForkedIcon aria-label="forks" size={16} className="text-green-400 mr-1" /> {forks} Forks
      </div>
      <div className="flex items-center">
        <CodeIcon aria-label="language" size={16} className="text-blue-400 mr-1" /> {language}
      </div>
    </div>
  );
}

export default RepositoriesSummary;
