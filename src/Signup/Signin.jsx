import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-300">
      <div className="max-w-xl w-full px-4 py-16 sm:px-6 lg:px-8 bg-orange-300 rounded-lg shadow-lg">
        <div className="text-center">
          <p className="mt-4 text-blue-500 text-center text-xl font-bold">LOGO HERE</p>
        </div>

        <form className="mt-8 space-y-4">
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              placeholder="Enter email"
            />
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              type="password"
              className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              placeholder="Enter password"
            />
          </div>

          <div className="flex items-center justify-center">
            <Link to="/home">
              <button
                type="submit"
                className="w-full bg-blue-500 px-5 py-3 rounded-lg text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring"
              >
                Sign in
              </button>
            </Link>
          </div>

          <p className="text-sm text-blue-500 text-center">
            No account?{' '}
            <Link to="/signup" className="underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
