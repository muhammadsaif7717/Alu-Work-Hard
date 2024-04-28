import { useLoaderData, useParams } from "react-router-dom";

const SpotDetails = () => {
  const { id } = useParams();
  const spots = useLoaderData();
  const clickedSpot = spots.find((spot) => spot._id === id);

  const capitalizeFirstLetter = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };
  return (
      <div className="my-10 flex flex-col md:flex-row gap-5 md:gap-10 justify-between">
      <img src={clickedSpot.photo} className="w-[40%] rounded-2xl" alt="" />
      <div className="flex-1 space-y-3">
        <h1 className="font-bold text-4xl">{capitalizeFirstLetter(clickedSpot.name)}</h1>
        <h1 className="">{clickedSpot.description.charAt(0).toUpperCase() + clickedSpot.description.slice(1)}</h1>
      </div>
    </div>
  );
};

export default SpotDetails;
