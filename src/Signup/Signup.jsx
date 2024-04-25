import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-300">
      <section className="max-w-md w-full px-6 py-8 bg-orange-300 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-900 mb-4 text-center">SIGNUP</h1>

        <form className="grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="FirstName"
              name="first_name"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 px-3 py-2 shadow-sm"
            />
          </div>

          <div>
            <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="LastName"
              name="last_name"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 px-3 py-2 shadow-sm"
            />
          </div>

          <div>
            <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="Email"
              name="email"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 px-3 py-2 shadow-sm"
            />
          </div>

          <div>
            <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="Password"
              name="password"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 px-3 py-2 shadow-sm"
            />
          </div>

          <div>
            <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
              Password Confirmation
            </label>
            <input
              type="password"
              id="PasswordConfirmation"
              name="password_confirmation"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 px-3 py-2 shadow-sm"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-500 focus:outline-none focus:ring"
            >
              Create Account
            </button>
            <p className="text-sm text-gray-500">
              Already have an account?{' '}
              <Link to="/" className="text-blue-600 underline">
                Log in
              </Link>
            </p>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Signup;
