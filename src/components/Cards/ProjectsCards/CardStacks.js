import React from "react";

const CardStacks = (props) => {
  return (
    <div className="flex flex-row justify-center gap-2 p-2">
      <span className="py-2 px-4 border-2 border-opacity-10 rounded-lg text-sm text-white text-opacity-60">
        {props.stack1}
      </span>

      <span className="py-2 px-4 border-2 border-opacity-10 rounded-lg text-sm text-white text-opacity-60">
        {props.stack2}
      </span>

      <span className="py-2 px-4 border-2 border-opacity-10 rounded-lg text-sm text-white text-opacity-60">
        {props.stack3}
      </span>
    </div>
  );
};

export default CardStacks;
