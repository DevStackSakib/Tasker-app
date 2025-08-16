import React from "react";
import Logo from "../assets/logo.png";
import TaskImg from "../assets/task.png";
const HeaderSec = () => {
  return (
    <>
      <header className="header_sec fixed top-0 left-0 right-0 bg-[rgb(46_43_43_/_30%)] backdrop-blur-[5px] shadow-[0_4px_30px_0px_rgb(110_107_107_/_33%)] text-white py-5 z-50">
        <div className="container mx-auto px-[1rem]">
          <nav className="nav flex flex-wrap items-center justify-between">
            <div>
              <a href="#">
                <img src={Logo} alt="logo" className="h-full max-h-[30px] w-auto object-contain" />
              </a>
            </div>
            <ul className="flex flex-wrap items-center gap-4">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href={TaskImg} download="tasks.png">
                  Download
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default HeaderSec;
