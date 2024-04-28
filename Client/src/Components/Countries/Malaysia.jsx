import { Link, useLoaderData } from "react-router-dom";

const Malaysia = () => {
  const spots = useLoaderData();

  // Filter spots where countryName is "bangladesh"
  const malaysiaSpots = spots.filter(
    (spot) => spot.countryName.toLowerCase() === "malaysia"
  );

  const capitalizeFirstLetter = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div className="my-10">
      <h1 className="text-3xl font-bold text-center mb-7">Malaysia{`'`}s Tourist Spots</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {malaysiaSpots.map((spot) => (
          <div key={spot._id} className="p-5 border rounded-xl">
            <img
              src={spot.photo}
              alt={spot.spotName}
              className="rounded-xl mb-2"
            />
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold">
                {capitalizeFirstLetter(spot.spotName)}
              </h2>
              <p>
                <strong>Country:</strong>{" "}
                {capitalizeFirstLetter(spot.countryName)}
              </p>
              <p>
                <strong>Location:</strong>{" "}
                {capitalizeFirstLetter(spot.location)}
              </p>
              <p className="text-gray-500 text-sm">{spot.description}</p>
              <p>
                <strong>Cost:</strong> ${spot.cost}
              </p>
              <p>
                <strong>Seasonality:</strong>{" "}
                {capitalizeFirstLetter(spot.seasonality)}
              </p>
              <div>
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

export default Malaysia;
