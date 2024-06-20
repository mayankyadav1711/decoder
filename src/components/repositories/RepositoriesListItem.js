import { Link } from "react-router-dom";
import FileIcon from "../tree/FileIcon";
import RepositoriesSummary from "./RepositoriesSummary";
import { MarkGithubIcon } from "@primer/octicons-react";

function RepositoriesListItem({ repository }) {
  const { full_name, language, description, owner, name, html_url } =
    repository;

  return (
    <div className="py-4 border-b border-gray-700 flex items-center justify-between hover:bg-gray-800 transition-colors duration-300">
      <div className="flex items-start space-x-4">
        <FileIcon name={language} className="w-6 h-6 text-gray-300" />
        <div>
          <Link
            to={`/repositories/${full_name}`}
            className="text-xl text-white hover:text-blue-100 transition-colors duration-300"
          >
            {owner.login}/<span className="font-bold">{name}</span>
          </Link>
          <p className="text-gray-300 italic mt-1 line-clamp-2">
            {description}
          </p>
          <RepositoriesSummary repository={repository} />
        </div>
      </div>
      <div className="flex items-center">
        <a
          href={html_url}
          aria-label="github repository"
          className="text-gray-400  transition-colors duration-300"
        >
          <MarkGithubIcon size={24} className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}

export default RepositoriesListItem;
