import React, { useState, useEffect } from "react";

const TrainViewer = () => {
  const [leftCongestion, setLeftCongestion] = useState({
    rate: 0,
    isCrowded: false,
  });
  const [rightCongestion, setRightCongestion] = useState({
    rate: 0,
    isCrowded: false,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCongestion = async () => {
      try {
        const [leftResponse, rightResponse] = await Promise.all([
          fetch("http://localhost:3001/api/congestion/left"),
          fetch("http://localhost:3001/api/congestion/right"),
        ]);

        const leftData = await leftResponse.json();
        const rightData = await rightResponse.json();

        console.log('Left data:', leftData);
        console.log('Right data:', rightData);

        setLeftCongestion({
          rate: leftData.congestionRate,
          isCrowded: leftData.isCrowded,
        });
        setRightCongestion({
          rate: rightData.congestionRate,
          isCrowded: rightData.isCrowded,
        });
      } catch (error) {
        console.error("混雑度データの取得に失敗しました:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCongestion();
    const interval = setInterval(fetchCongestion, 30000);
    return () => clearInterval(interval);
  }, []);

  const leftImage = leftCongestion.isCrowded
    ? "/train_left_crowded.png"
    : "/train_left_canride.png";
  const rightImage = rightCongestion.isCrowded
    ? "/train_right_crowded.png"
    : "/train_right_canride.png";

  console.log('Left image:', leftImage, 'isCrowded:', leftCongestion.isCrowded);
  console.log('Right image:', rightImage, 'isCrowded:', rightCongestion.isCrowded);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-6xl w-full">
        <div className="w-full bg-gray-100 rounded-2xl p-5 flex justify-center items-center min-h-[400px] overflow-hidden">
          {loading ? (
            <p className="text-gray-600">読み込み中...</p>
          ) : (
            <div className="flex gap-0 max-w-4xl">
              <img
                src={leftImage}
                alt="電車（左半分）"
                className="w-1/2 h-auto rounded-lg shadow-2xl transition-transform duration-300 ease-in-out"
              />
              <img
                src={rightImage}
                alt="電車（右半分）"
                className="w-1/2 h-auto rounded-lg shadow-2xl transition-transform duration-300 ease-in-out"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrainViewer;
