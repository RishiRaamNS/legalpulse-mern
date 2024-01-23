import { BiUserCircle } from "react-icons/bi";

export default function Searchprofile({ name, summary, location, rating }) {
  return (
    <div className="search--profile">
      <BiUserCircle className="search--profile-icon" />

      <h2 className="search--name">{name}</h2>
      <h2 className="search--profession">Lawyer</h2>
          <h2 className="search--location">{location}</h2>
      <div className="search--row-container">
        <p>$20k+ earned</p>
        <p>⭐{rating}</p>
        <p>200 clients</p>
      </div>
      <p className="search--summary">{summary}</p>
    </div>
  );
}
