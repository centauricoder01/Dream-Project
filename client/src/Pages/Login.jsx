const Login = () => {
  return (
    <section className="text-gray-600 body-font flex justify-center items-center h-screen	">
      <div className="container px-5 py-5 mx-auto border-2 w-1/3 rounded-md bg-indigo-900	">
        <div className="flex flex-col text-center w-full">
          <h1 className=" text-5xl title-font mb-4 text-white font-extrabold">
            Sign in
          </h1>
        </div>

        <div className=" mx-auto">
          <div className="p-2 w-full">
            <div className="relative">
              <label for="name" className="leading-7 text-sm  text-white">
                Email
              </label>
              <input
                type="email"
                id="name"
                name="name"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label for="email" className="leading-7 text-sm text-white">
                Password
              </label>
              <input
                type="password"
                id="email"
                name="email"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>

          <div className="p-2 w-full">
            <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
