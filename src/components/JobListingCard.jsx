import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const JobListingCard = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description;

  if (!showFullDescription) {
    description = description.substring(0, 90) + "...";
  }

  const handleShowDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  return (
    <>
      <div className="bg-white rounded-xl shadow-md relative">
        <div className="p-4">
          <div className="mb-6">
            <div className="text-gray-600 my-2">{job.type}</div>
            <h3 className="text-xl font-bold">{job.title} </h3>
          </div>
          <div className="mb-2">{description}</div>
          <button
            className="text-indigo-500 mb-5 hover:text-indigo-600"
            onClick={handleShowDescription}
          >
            {!showFullDescription ? "more" : "less"}
          </button>
          <h3 className="text-indigo-500 mb-2">{job.salary}</h3>
          <div className="border border-gray-100 mb-5" />
          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div className="text-orange-700 mb-3">
              <FaMapMarkerAlt className="inline text-lg mr-1" /> {job.location}
            </div>
            <Link
              to={`/job/${job.id}`}
              className="h-[36px] bg-black hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobListingCard;
