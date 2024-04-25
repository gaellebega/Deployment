import {Link} from 'react-router-dom'



const Signin = () => {
    // const []
  return (
    <div className=" bg-green-300 mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center ">

        <p className="mt-4 text-blue-500 text-center sm:text-2xl">LOGO HERE</p>
      </div>
      <div className='bg-orange-300 px-2 py-2 '>
      <form action="#" className="mx-auto  max-w-md space-y-4">
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>

          <div className="relative">
            <input
              type="email"
              className="bg-pink-100 w-full rounded-lg border-gray-200 p-4 pe-12 text-blue text-sm shadow-sm"
              placeholder="Enter email"
            />

            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>
        </div>

        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>

          <div className="relative">
            <input
              type="password"
              //
              className="bg-pink-100 w-full rounded-lg border-gray-200 p-4 pe-12 text-blue text-sm shadow-sm"
              placeholder="Enter password"
            />

            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Link to='/home'><button
            type="submit"
            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white text-center w-full"
          >
            Sign in
          </button></Link>
        </div>
        <p className="text-sm text-blue-500 text-center text-5m">
            No account?

            <Link to="/signup" className="underline" >
              Sign up
            </Link>
          </p>
      </form>
      </div>
    </div>
  );
};

export default Signin;