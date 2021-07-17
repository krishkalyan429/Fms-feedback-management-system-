import React from "react";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h3>FMS</h3>
            <ui className="list-unstyled">
              <li>Course</li>
              <li>Faculty</li>
              <li>Partcipant</li>
            </ui>
          </div>

          {/* Column2 */}
          <div className="col">
            <h3>Explore</h3>
            <ui className="list-unstyled">
              <li>Home</li>
              <li>About</li>
              <li>Carriers</li>
            </ui>
          </div>

          {/* Column3 */}
          <div className="col">
            <h3>Follow</h3>
            <ui className="list-unstyled">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            FMS Team | All rights reserved | Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;