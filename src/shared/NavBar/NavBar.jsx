import { NavLink } from "react-router-dom";

const NavBar = () => {
  const nav = (
    <>
      <li>
        <NavLink to={`/`}>Home</NavLink>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>
            <NavLink to={`/ourService`}>Service</NavLink>
          </summary>
          <ul className="p-1 w-56">
            <li>
              <NavLink>Google Ads </NavLink>
            </li>
            <li>
              <NavLink>Google PPC Service </NavLink>
            </li>
            <li>
              <NavLink>Google Analytics </NavLink>
            </li>
            <li>
              <NavLink>Meta Ads </NavLink>
            </li>
            <li>
              <NavLink>Pixel & Conversion API</NavLink>
            </li>
            <li>
              <NavLink>ServerSide Tracking</NavLink>
            </li>
          </ul>
        </details>
      </li>

      <li tabIndex={0}>
        <details>
          <summary>Portfolio</summary>
          <ul className="p-2 w-48">
            <li>
              <NavLink to={`portfolio`}>Google Ads</NavLink>
            </li>
            <li>
              <NavLink to={`facebookAds`}>Facebook Ads</NavLink>
            </li>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>
            <NavLink to={`/testimonials`}>Testimonials</NavLink>
          </summary>
          <ul className="p-1 w-56">
            <li>
              <NavLink>Video Testimonials</NavLink>
            </li>
            <li>
              <NavLink>Text Testimonials</NavLink>
            </li>
          </ul>
        </details>
      </li>

      <li>
        <a>Case Studies</a>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Price</summary>
          <ul className="p-1 w-56">
            <li>
              <NavLink>Google Ads </NavLink>
            </li>
            <li>
              <NavLink>Meta Ads </NavLink>
            </li>
            <li>
              <NavLink to={`googleAnalytics`}>Google Analytics </NavLink>
            </li>
            <li>
              <NavLink to={`ppcAnalytics`}>PPC Analytics</NavLink>
            </li>
            <li>
              <NavLink>Pixel & Conversion API</NavLink>
            </li>
            <li>
              <NavLink>ServerSide Tracking</NavLink>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <NavLink to={`about`}>About</NavLink>
      </li>
      <li>
        <a>Contact</a>
      </li>
      <li>
        <a>|</a>
      </li>
      <li>
        {" "}
        <a> Hire Me</a>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {nav}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">{nav}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
