import { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllTouristSpots = () => {
  const initialData = useLoaderData(); // Using useLoaderData to get the data
  const [touristSpots, setTouristSpots] = useState([]);
  const [sortedSpots, setSortedSpots] = useState([]);
  const [sortOrder, setSortOrder] = useState("default");

  useEffect(() => {
    setTouristSpots(initialData); // Set the initial data when available
  }, [initialData]);

  useEffect(() => {
    sortTouristSpots();
  }, [sortOrder, touristSpots]); // Added sortOrder and touristSpots as dependencies

  const sortTouristSpots = () => {
    if (!touristSpots.length) return; // Return if touristSpots is empty
    let sorted = [...touristSpots];
    if (sortOrder === "asc") {
      sorted.sort((a, b) => a.cost - b.cost);
    } else if (sortOrder === "desc") {
      sorted.sort((a, b) => b.cost - a.cost);
    }
    setSortedSpots(sorted);
  };

  const capitalizeFirstLetter = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div className="p-7 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">All Tourist Spots</h1>
      <div className="mt-7 border border-white rounded-xl ">
        <select
          className="btn rounded-xl"
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="default">Sort by Average Cost</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-14">
        {sortedSpots.map((spot) => (
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
  );
};

export default AllTouristSpots;
