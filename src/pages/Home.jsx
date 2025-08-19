import { useState } from "react";
import CardItem from "../components/cardItem";
import dataBase from "../../db";

function Home() {
  const [cards, setCards] = useState(dataBase);
  const [theme, SetTheme] = useState("light");

  const toggleTheme = () => {
    if(theme =='light'){
      SetTheme("dark")
    }else{
      SetTheme("light")
    }
     document.documentElement.classList.toggle("dark")
  };


  return (
    <>
      <div className=" w-screen h-screen bg-white dark:bg-gray-900">
        <div className="p-10">
          <div className="p-10 text-center">
            <button
              onClick={toggleTheme}
              className=" border rounded-full shadow-md shadow-purple-500 cursor-pointer
               border-gray-300  dark:border-purple-900 text-gray-700 dark:text-gray-400 p-4 hover:text-purple-400 transition-all ease-in-out dark:shadow-purple-400 dark:hover:text-gray-500 "
            >
              {theme == "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="max-w-[1600px] mx-auto ">
            <div className=" flex justify-center ">
              {cards.map((card) => (
                <CardItem key={card.id} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
