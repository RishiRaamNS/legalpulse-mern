import { BiUserCircle } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import Navbar from "../components/Navbar";
import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
function Profile() {
  const params = useParams();
  const userId = params.userId;
  const location = useLocation();
  const data = location.state;
  const arrs = data.practiceareas;
  const arrs2 = data.court;
  console.log(arrs);
  return (
    <div className="profile">
      <Navbar hide1={{ display: "none" }} />
      <div className="profile--container">
        <div className="profile--top-section">
          <div className="profile--flex-container-1">
            <div className="profile--flex-child">
              <BiUserCircle className="profile--icon" />
              <h1 className="profile--name">{data.name}</h1>
              <div className="profile--flex-container-2">
                <p className="profile--location">
                  <MdLocationPin className="profile--location-icon" />
                  {data.location}
                </p>
                <p className="profile--ratings">
                  ⭐⭐⭐⭐ {data.rating} | 100+ clients
                </p>
                <p className="profile--experience">
                  {data.experience} years of Experience
                </p>
              </div>
            </div>
            <Link
              style={{ textDecoration: "none" }}
              to="/message"
              className="profile--message-btn"
            >
              Message
            </Link>
          </div>
        </div>
        <div className="profile--bottom-section">
          <div className="profile--bottom-left">
            <h1 className="profile--left-heading">Practice Areas</h1>
            {(() => {
              let i = 0;
              let li = [];
              while (i < arrs.length) {
                li.push(<p className="profile--left-lists">{arrs[i]}</p>);

                i++;
              }

              return li;
            })()}
            <h1 className="profile--left-heading">Courts</h1>
            {(() => {
              let i = 0;
              let li = [];
              while (i < arrs2.length) {
                li.push(<p className="profile--left-lists">{arrs2[i]}</p>);
                i++;
              }

              return li;
            })()}
          </div>
          <div className="profile--bottom-right">
            <h1 className="profile--right-heading">Experienced Advocate</h1>
            <p className="profile--bio">
             {data.about}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
