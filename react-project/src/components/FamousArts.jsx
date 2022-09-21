import React from "react";
import work1 from "../assets/work1.jpeg";
import work2 from "../assets/work2.jpeg";
import work3 from "../assets/work3.jpeg";
import work4 from "../assets/work4.jpeg";
import work5 from "../assets/work5.jpeg";
import work6 from "../assets/work6.jpeg";

const FamousArts = () => {
  const arts = [
    {
      id: 1,
      src: work1,
      heading: "Mr. Garrick in the Character of Richard III",
      date: "June 20, 1746",
    },
    {
      id: 2,
      src: work2,
      heading:
        "David Garrick as King Lear (Shakespeare, King Lear, Act 3, Scene 1)",
      date: "May 2, 1761",
    },
    {
      id: 3,
      src: work3,
      heading: "Ophelia (from Twelve Characters from Shakespeare)",
      date: "May 20, 1775",
    },
    {
      id: 4,
      src: work4,
      heading:
        "King Lear and Cordelia (Shakespeare, King Lear, Act 4, Scene 7)",
      date: "1783",
    },
    {
      id: 5,
      src: work5,
      heading:
        "Off, off, you lendings–Come unbutton here (Shakespeare, King Lear, Act 3, Scene 4)",
      date: "1793",
    },
    {
      id: 6,
      src: work6,
      heading: "The Weird Sisters (Shakespeare, MacBeth, Act 1, Scene 3)",
      date: "March 10, 1785",
    },
  ];

  const demoClick = (id) => {
    console.log(id);
  };

  return (
    <div className=" w-full bg-gradient-to-b from-black to-gray-800 text-white">
      <div className="mt-44 max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4 mt-12">
          <p className="text-4xl font-bold border-b-4 border-cyan-900 p-2 font-signature">
            Some Famous Works
          </p>
          {/* <p className="py-6">Check out some of my work right here</p> */}
        </div>

        <div className="mt-12 w-full grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12  sm:px-0">
          {arts.map(({ id, src, heading, date }) => (
            <div
              key={id}
              className="h-[350px] flex flex-col shadow-md shadow-gray-600 rounded-lg"
            >
              <img src={src} alt="workPics" className="w-full" />
              <div className="mt-2 h-20">
                <p className="px-8">
                  <i>{heading}</i>
                  <span>{date}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FamousArts;
