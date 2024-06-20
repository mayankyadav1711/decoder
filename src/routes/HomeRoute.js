import Hero from '../components/Hero';
import RepositoriesTable from '../components/repositories/RepositoriesTable';
import useRepositories from '../hooks/useRepositories';

function HomeRoute() {
  const { data: jsRepos } = useRepositories('stars:>10000 language:javascript');
  const { data: tsRepos } = useRepositories('stars:>10000 language:typescript');
  const { data: rustRepos } = useRepositories('stars:>10000 language:rust');
  const { data: goRepos } = useRepositories('stars:>10000 language:go');
  const { data: pythonRepos } = useRepositories('stars:>10000 language:python');
  const { data: javaRepos } = useRepositories('stars:>10000 language:java');

  return (
    <div className="bg-dark text-white min-h-screen">
      <Hero />
      <div className="container mx-auto py-8">
        <h2 className="text-4xl font-bold mb-16 text-center text-gradient">Popular Repositories on GitHub</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <RepositoriesTable
            label="Most Popular Javascript"
            repositories={jsRepos}
          />
          <RepositoriesTable
            label="Most Popular Typescript"
            repositories={tsRepos}
          />
          <RepositoriesTable label="Most Popular Rust" repositories={rustRepos} />
          <RepositoriesTable label="Most Popular Go" repositories={goRepos} />
          <RepositoriesTable label="Most Popular Python" repositories={pythonRepos} />
          <RepositoriesTable label="Most Popular Java" repositories={javaRepos} />
        </div>
      </div>
    </div>
  );
}

export default HomeRoute;
