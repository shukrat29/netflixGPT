import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignInGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      dispatch(
        addUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        })
      );

      navigate("/browse");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleSignInGoogle}
        className="flex items-center justify-center gap-1 w-full p-3 my-6 border border-gray-300 rounded-sm shadow-sm hover:shadow-md transition duration-200 bg-white text-gray-700 font-medium"
      >
        <img
          src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
          alt="Google logo"
          className="w-8 h-8"
        />
        <span>Continue with Google</span>
      </button>
    </div>
  );
};

export default OAuth;
