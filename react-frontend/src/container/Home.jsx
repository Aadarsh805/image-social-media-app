import { useState, useEffect, useRef } from "react";
import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, Route, Routes } from "react-router-dom";

import { Sidebar, UserProfile } from "../components";
import Pins from "./Pins";
import { client } from "../client";
import logo from "../assets/logo.png";
import { userQuery } from "../utils/data";

const Home = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [user, setUser] = useState(null);

  const userInfo =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

      
      useEffect(() => {
        const query = userQuery(userInfo?.sub);
        
        client.fetch(query).then((data) => {
          setUser(data);
        });
      }, []);
      console.log(user)

  return (
    <div className="flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out">
      <div className="hidden md:flex h-screen flex-initital">
        <Sidebar />
      </div>
      <div className="flex md:hidden flex-row">
        <HiMenu
          fontSize={40}
          className="cursor-pointer"
          onClick={() => setToggleSidebar(false)}
        />
        <Link to="/">
          <img src={logo} alt="logo" className="w-28" />
        </Link>
        <Link to={`user-profile/${user?.id}`}>
          <img src={user?.picture} alt="logo" className="w-28" />
          <img src="" alt="a" />
        </Link>
      </div>
    </div>
  );
};

export default Home;