import React from "react";

const TrainViewer = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-6xl w-full">
        <div className="w-full bg-gray-100 rounded-2xl p-5 flex justify-center items-center min-h-[400px] overflow-hidden">
          <div className="flex gap-0 max-w-4xl">
            <img
              src="/train_left_canride.png"
              alt="電車（左半分）"
              className="w-1/2 h-auto rounded-lg shadow-2xl transition-transform duration-300 ease-in-out"
            />
            <img
              src="/train_right_canride.png"
              alt="電車（右半分）"
              className="w-1/2 h-auto rounded-lg shadow-2xl transition-transform duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainViewer;
