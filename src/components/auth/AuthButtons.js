import { Link } from 'react-router-dom';
import useUser from '../../hooks/useUser';

function AuthButtons() {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return null;
  } else if (user) {
    return (
      <Link
       className="block whitespace-nowrap rounded-md px-5 py-2.5 text-sm font-medium text-black bg-white hover:bg-gray-200 transition-colors duration-300"
        to="/signout"
      >
        Sign Out
      </Link>
    );
  } else {
    return (
      <>
        <Link
          className="block whitespace-nowrap rounded-md px-5 py-2.5 text-sm font-medium text-black bg-white hover:bg-gray-200 transition-colors duration-300"
          to="/signin"
        >
          Sign In
        </Link>
        <Link
          className="block whitespace-nowrap rounded-md px-5 py-2.5 text-sm font-medium text-black bg-gradient-to-r from-blue-300 to-purple-300 hover:bg-gradient-to-l hover:from-purple-300 hover:to-blue-300 transition-colors duration-300"
          to="/signup"
        >
          Sign Up
        </Link>
      </>
    );
  }
}

export default AuthButtons;