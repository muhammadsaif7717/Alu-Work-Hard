import { Link, useLoaderData } from "react-router-dom";

const TouristsSports = () => {
  const touristsSpots = useLoaderData();
  console.log(touristsSpots);

  const capitalizeFirstLetter = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };
  return (
    <>
      <div className="my-14  rounded-xl py-10">
        <div className="my-5">
          <h1 className="text-3xl font-bold text-center">
            Tourists Spots: ({touristsSpots.length})
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-14">
          {touristsSpots.map((spot) => (
            <div
              className="border p-5 rounded-xl shadow-2xl hover:scale-105"
              key={spot._id}
            >
              <div className="space-y-2">
                <img src={spot.photo} className="rounded-xl" alt="Spot" />
                <div className="ml-1 space-y-1">
                  <h1 className="text-2xl font-bold">
                    {capitalizeFirstLetter(spot.spotName)}
                  </h1>
                  <h1>
                    <strong>Cost:</strong> {spot.cost}
                  </h1>
                  <h1>
                    <strong>Total Visitors:</strong>{" "}
                    {capitalizeFirstLetter(spot.totalVisitors)}
                  </h1>
                  <h1>
                    <strong>Trevel Time:</strong>{" "}
                    {capitalizeFirstLetter(spot.travelTime)}
                  </h1>
                  <h1>
                    <strong>Seasonality:</strong> {spot.seasonality}
                  </h1>
                </div>
                <div className="ml-1">
                  <Link to={`/spot-details/${spot._id}`}>
                    <button className="btn btn-ghost bg-orange-500 text-white">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TouristsSports;
