import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-basic">
      <footer>
        <ul className="list-inline">
          <li className="list-inline-item">
            <Link to="#" href="#">
              Home
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#" href="#">
              Services
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#" href="#">
              About
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#" href="#">
              Terms
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#" href="#">
              Privacy Policy
            </Link>
          </li>
        </ul>
        <p className="copyright">emetal © 2020</p>
      </footer>
    </div>
  );
}
