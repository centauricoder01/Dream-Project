import React from "react";
import { BiBadgeCheck } from "react-icons/bi";
import { Link } from "react-router-dom";

const Popup = () => {
  return (
    <section className="text-gray-600 body-font flex justify-center items-center h-screen	">
      <div className="container px-5 py-5 mx-auto border-2 w-1/3 rounded-md bg-gray-800">
        <div className="flex flex-col text-center w-full m-auto">
          <BiBadgeCheck className="text-green-600 text-9xl w-full" />
        </div>
        <div className="text-center lg:w-2/3 w-full m-auto mt-2">
          <p className="mb-8 leading-relaxed text-white w-full text-center">
            <strong className="text-red-600">Password</strong> has been send to
            your email that you have given during sign up. Check your email and{" "}
            <strong className="text-red-600">
              <Link to={"/login"}>Sign in</Link>
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Popup;
