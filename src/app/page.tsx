import React from "react";

const DataFetchingServer = async (props: any) => {
  const userData = await props.searchParams;
  const userName = userData?.name;

  if (!userName || userName.trim() === "") {
    return (
      <div className='w-full h-screen flex justify-center items-center bg-gray-100'>
        <div className='bg-white shadow-xl rounded-xl p-8 max-w-md text-center text-black'>
          <h1 className='text-2xl font-bold mb-4 text-red-600'>
            No Name Provided
          </h1>
          <p className='mb-2'>
            Please add{" "}
            <code className='bg-gray-200 px-2 py-1 rounded'>
              ?name=YourName
            </code>{" "}
            in the URL
          </p>
          <p className='text-sm text-gray-700'>
            Example:{" "}
            <span className='text-blue-600'>
              http://localhost:3000/?name=Krishna
            </span>
          </p>
        </div>
      </div>
    );
  }

  const res = await fetch(`https://api.genderize.io/?name=${userName}`);
  const data = await res.json();

  const isMale = data.gender === "male";
  const isFemale = data.gender === "female";

  const genderIcon = isMale ? "👨" : isFemale ? "👩" : "❓";
  const bgGradient = isMale
    ? "from-blue-200 to-blue-400"
    : isFemale
    ? "from-pink-200 to-pink-400"
    : "from-gray-200 to-gray-400";

  const probabilityPercent = (parseFloat(data.probability) * 100).toFixed(2);

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 p-6'>
      <div
        className={`bg-gradient-to-br ${bgGradient} rounded-2xl shadow-xl p-8 w-full max-w-md text-center text-gray-900 border-b-4 border-gray-700`}
      >
        {/* Name with Icon */}
        <div className='flex flex-col items-center justify-center mb-4 gap-2'>
          <span className='text-5xl bg-white p-2 rounded-4xl'>
            {genderIcon}
          </span>
          <h1 className='text-3xl font-bold capitalize'>{data.name}</h1>
        </div>

        {/* Gender Info */}
        <p className='text-lg mb-2'>
          Predicted gender is{" "}
          <span className='font-semibold text-gray-800'>
            {data?.gender?.toUpperCase() || "Unknown"}
          </span>
        </p>

        {/* Probability */}
        <p className='text-sm text-gray-700'>
          Confidence:{" "}
          <span className='font-semibold'>{probabilityPercent}%</span>
        </p>

        {/* Percentage Line Ruler */}
        <div className='w-full bg-gray-300 rounded-full h-3 mt-2 overflow-hidden'>
          <div
            className={`h-full ${
              isMale ? "bg-blue-600" : isFemale ? "bg-pink-600" : "bg-gray-500"
            } transition-all duration-500`}
            style={{ width: `${probabilityPercent}%` }}
          ></div>
        </div>

        {/* Count Info */}
        <p className='mt-4 text-xs text-gray-600'>
          Based on <span className='font-medium'>{data.count}</span> samples
        </p>
      </div>
    </div>
  );
};

export default DataFetchingServer;
