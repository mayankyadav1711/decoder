import { useSearchParams } from 'react-router-dom';
import useRepositories from '../hooks/useRepositories';
import RepositoriesListItem from '../components/repositories/RepositoriesListItem';

function RepositoriesSearchRoute() {
  const [params] = useSearchParams();
  const {
    data: repositories,
    isLoading,
    error,
  } = useRepositories(params.get('q'));

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-dark">
        <div className="loader"></div>
      </div>
    );
  } else if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-dark">
        <div className="bg-red-500 text-white p-4 rounded">
          {error.message}
        </div>
      </div>
    );
  }

  const renderedRepositories = repositories.map((r) => {
    return <RepositoriesListItem key={r.id} repository={r} />;
  });

  return (
    <div className="container mx-auto py-8 text-white">
      <h2 className="text-4xl font-bold mb-10 text-center text-gradient mt-12">Search Results</h2>
      <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
        {renderedRepositories}
      </div>
    </div>
  );
}

export default RepositoriesSearchRoute;
