import React from "react";
import HeroImg from "../assets/task.png";
import Taskboard from "./task/Taskboard";
import Footer from "./Footer";

const HeroSec = () => {
  return (
    <>
      <main>
        <div className="container mx-auto px-4">
          <section className="hero-sec py-21 mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-amber-400">Welcome to Our Task Management App</h1>
                <p className="text-sm md:text-lg mt-5 text-neutral-200">
                  Manage your tasks efficiently and effectively with our user-friendly task management app.
                </p>
              </div>
              <div className="h">
                <img src={HeroImg} alt="Hero Image" className="w-full h-auto max-w-full" />
              </div>
            </div>
          </section>
          <Taskboard />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default HeroSec;
