import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <span className="link" to="/">
              HOME
            </span>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <span className="link" to="/write">
              WRITE
            </span>
          </li>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <span className="link" to="/settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </span>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <span className="link" to="/login">
                LOGIN
              </span>
            </li>
            <li className="topListItem">
              <span className="link" to="/register">
                REGISTER
              </span>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}