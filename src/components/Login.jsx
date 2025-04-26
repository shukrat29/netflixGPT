import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // validate the form data
    const message = checkValidData(email.current.value, password.current.value);

    setErrorMessage(message);
    if (message) return;
    //sign up logic
    if (!isSignInForm) {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://occ-0-998-2568.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXTZ87gWedgajar1VOIJQNIy2U1sulesgGCIouHnReQp2bCq_rcl2zhI9rRDXIzT_X7240ZzVOcfMQ1DXAPdFsyGu2QeFd8.png?r=145",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // sign in logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }

    // Sign in   Sign up
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  // google signin
  const handleSignInGoogle = () => {};

  return (
    <div>
      <Header />
      <div className="relative w-full h-screen flex items-center justify-center">
        <img
          className="object-cover w-full h-full absolute -z-10"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/AU-en-20240923-TRIFECTA-perspective_71126b8c-6305-4da6-a0d5-b4ca8c9e3fc6_large.jpg"
          alt="background-image"
        />
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black bg-opacity-80 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-12 rounded-lg text-white"
        >
          <h1 className="font-bold text-2xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-500"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-500"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-500"
          />
          <p className="text-red-500">{errorMessage}</p>
          <button
            className="p-4 my-6 bg-red-700 w-full"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          {/* Forgot password section */}
          {isSignInForm && (
            <button className="text-red-700">Forgot Password?</button>
          )}

          {/* Continue with google */}
          <button
            onClick={handleSignInGoogle}
            className="flex items-center justify-center gap-1  w-full p-3 my-6 border border-gray-300 rounded-md shadow-sm hover:shadow-md transition duration-200 bg-white text-gray-700 font-medium"
          >
            <img
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
              alt="Google logo"
              className="w-8 h-8"
            />
            <span>Continue with Google</span>
          </button>

          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to NetflixGPT? Sign up now"
              : "Already registered? Sign in now"}
          </p>
          <p>or try NetflixGPT with our demo account!</p>
          <p>email: testdemo@gmail.com</p>
          <p>password: Demo@123</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
