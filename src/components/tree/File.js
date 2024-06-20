import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FileIcon from './FileIcon';

function File({ file, repoName, owner }) {
  return (
    <Link
      to={`/repositories/${owner}/${repoName}/${file.path}`}
      className="cursor-default whitespace-nowrap hover:font-bold flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
    >
      <FileIcon name={file.name} className="text-lg" />
      <span>{file.name}</span>
    </Link>
  );
}

File.propTypes = {
  file: PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
  repoName: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
};

export default File;
