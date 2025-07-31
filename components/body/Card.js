import {SWIGGY_IMG_LINK} from "../utils/constants"

const Card = ({ resData }) => {
  const { name, cloudinaryImageId, avgRating, costForTwo, locality, cuisines } =
    resData?.info;

  return (
    <div className="restaurant-card">
      <img
        className="card-image"
        src={`${SWIGGY_IMG_LINK}${cloudinaryImageId}`}
      />
      <h2>{name}</h2>
      <div className="inline">
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
      </div>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{locality}</h4>
    </div>
  );
};

export default Card;
