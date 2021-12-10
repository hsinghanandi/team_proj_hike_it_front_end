import React from "react";
import { Link, withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import darkBgLogo from "../../assets/darkBgLogo.png";

// Logo, Discover, Hike Comparison, Blog, About Us, Saved Hikes, Profile


function NavBarComponent({ isLoggedIn, logout, history }) {
  const logoutUser = () => {
    toast.success("logout successfully!");
    logout();
    history.push("/");
  };

  const navbarId = document.getElementById("navbarId");
  const sticky = navbarId.offsetTop;

  const scrollFunction = () => {
    if (window.pageYOffset > sticky) {
      navbarId.classList.add("sticky");
    } else {
      navbarId.classList.remove("sticky");
    }
  }

  window.onscroll = function () { scrollFunction() };

  return (
    <nav className="navBar" id="navbarId">
      <ul>
        <li>
          <Link to="/">
            <a href="/">
              <img src={darkBgLogo} alt="HikeIt logo with dark background" />
            </a>
          </Link>
        </li>
        {/* <li>
                    <Link to='/DiscoverPage'>Discover</Link>
                </li> */}

        <li>
          <Link to="/ComparePage">Hike Comparison</Link>
        </li>
        <li>
          <Link to="/BlogPage">Blog</Link>
        </li>
        <li>
          <Link to="/SavedHikesPage">Saved Hikes</Link>
        </li>
        <li>
          <Link to="/AboutUsPage">About Us</Link>
        </li>
        <li>
          <Link to="/SignUpPage">Sign Up</Link>
        </li>
        <li>
          {isLoggedIn ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <Link to="/LoginPage">Login</Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default withRouter(NavBarComponent);
