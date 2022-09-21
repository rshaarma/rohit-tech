import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="flex justify-center rounded-lg md:h-[200px]">
        <div className="w-full md:w-[400px] shadow-md block p-4 max-w-md rounded-lg border-3 dark:border-gray-700 bg-gray-600">
          <h3 className=" mb-2 text-2xl font-bold tracking-tight text-white">
            {props.object.play_name}
          </h3>
          <h5 className="font-normal text-white">
            Speaker : {props.object.speaker}
          </h5>
          <p className="font-normal text-white">
            Description : {props.object.text_entry}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
