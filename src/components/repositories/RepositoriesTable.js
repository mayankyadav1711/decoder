import { Link } from 'react-router-dom';
import { StarIcon, RepoForkedIcon } from '@primer/octicons-react'; 

function RepositoriesTable({ label, repositories, id }) {
  const rendered =
    repositories &&
    repositories.map((repo) => {
      return (
        <div key={repo.id} className="bg-gray-900 p-4 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
          <div>
            <Link
              className="text-blue-400 hover:text-blue-200 transition-colors duration-300"
              to={`/repositories/${repo.full_name}`}
            >
              <h3 className="text-lg font-semibold line-clamp-1 shortenline">{repo.full_name}</h3>
            </Link>
            <p className="text-gray-300 mt-2 line-clamp-1 shortenline">{repo.description}</p>
          </div>
          <div className="flex items-center mt-4 text-gray-400">
            <StarIcon className="mr-2" /> {repo.stargazers_count}
            <RepoForkedIcon className="ml-4 mr-2" /> {repo.forks_count}
          </div>
        </div>
      );
    });

  return (
    <div className="border border-gray-700 bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 id={id || ''} className="text-xl font-bold mb-4 text-white">{label}</h2>
      <div className="space-y-4">
        {rendered}
      </div>
    </div>
  );
}

export default RepositoriesTable;
