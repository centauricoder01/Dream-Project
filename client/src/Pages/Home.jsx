import TalkHub from "../Assets/homeimg.png";

const Home = () => {
  return (
    <section className="text-gray-600 body-font  ">
      <div className="container  flex  mx-auto px-5 py-20 items-center justify-center flex-col">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-5 object-cover object-center "
          alt="hero"
          src={TalkHub}
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Shape your speaking skills with{" "}
            <strong className="text-red-500">TALKHUB</strong>
          </h1>
          <p className="mb-8 leading-relaxed text-white">
            We are an emerging techno company with an innovative idea to
            enlighten the life of those who would like to up-hone their
            language, update their knowledge and expand their friendship beyond
            their imagination. Using our website{" "}
            <strong className="text-red-500">TalkHub</strong> gives you the
            opportunity to reach farther and fulfill your desires.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
              Signup
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Login
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
