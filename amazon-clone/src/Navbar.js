import React from "react";
import "./Navbar.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// All nav items list array
const navItemList = [
  { id: 0, title: "Fresh", hrefLink: "#" },
  { id: 1, title: "Amazon Pay", hrefLink: "#" },
  { id: 2, title: "Gift Cards", hrefLink: "#" },
  { id: 3, title: "Today's Deals", hrefLink: "#" },
  { id: 4, title: "Sell", hrefLink: "#" },
  { id: 5, title: "Gift Ideas", hrefLink: "#" },
  { id: 6, title: "Buy Again", hrefLink: "#" },
  { id: 7, title: "Health, Household & Personal Care", hrefLink: "#" },
  { id: 8, title: "Baby", hrefLink: "#" },
  { id: 9, title: "Toys & Games", hrefLink: "#" },
  { id: 10, title: "Home Improvement", hrefLink: "#" },
  { id: 11, title: "Browsing History", hrefLink: "#" },
  { id: 12, title: "Coupns", hrefLink: "#" },
];

function Navbar() {
  return (
    <div>
      <nav
        class="navbar navbar-black "
        style={{ backgroundColor: "#222f3e", color: "white" }}
      >
        <div className="navbar__complete">
          <button
            class="navbar-toggler toggler-example hamburger__menu"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent1"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ color: "white" }}
          >
            <span class="dark-blue-text hamburger__menu__icon">
              <i class="fas fa-bars fa-1x"></i>
              <span>All</span>
            </span>
          </button>

          {navItemList?.map((navItem) => (
            <a
              class="navbar-brand white-text nav__item"
              key={navItem.id}
              href={navItem.hrefLink}
            >
              {navItem.title}
              {navItem.title === "Browsing History" && <ArrowDropDownIcon />}
            </a>
          ))}
        </div>

        <div class="collapse navbar-collapse" id="navbarSupportedContent1">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link white-text" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link white-text" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link white-text" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
