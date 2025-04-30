import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../redux/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { toggleGptSearchView } from "../redux/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../redux/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // TODO error page
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="absolute w-full px-2 md:px-8 flex justify-between align-top items-center bg-gradient-to-b from-black z-20">
      <div className="flex items-center">
        <img
          className="w-36 mx-auto md:mx-0"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflix-logo"
        />
      </div>

      <div>
        {user && (
          <div className="flex p-2">
            {showGptSearch && (
              <select
                className="py-2 m-2 bg-blue-600 text-white rounded-lg px-2"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="py-2 m-2 bg-blue-600 text-white rounded-lg px-1"
              onClick={handleGptSearchClick}
            >
              {showGptSearch ? "Home" : "GPT Search"}
            </button>

            <div className="relative flex items-center gap-2 mx-1">
              <img
                className="w-10 h-10 rounded-full cursor-pointer"
                src={user?.photoURL}
                alt="user icon"
                onClick={toggleDropdown}
              />

              {isDropdownVisible && (
                <div className="absolute top-full right-1 bg-white text-black p-2 rounded-lg shadow-lg w-40">
                  <p className="text-blue-700 font-semibold text-center">
                    {user?.displayName}
                  </p>

                  <button
                    className="block w-full py-2 text-center text-gray-600 font-semibold"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
