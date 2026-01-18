import React from 'react';

const Header = () => {
  return (
    <header className="header-main">
      {/* Top Header */}
      <div className="top-header container-fluid no-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>We Accept Walk-ins! Leading Chiropractic Care in Kansas City</p>
            </div>
            <div className="col-md-6 text-right">
              <ul>
                <li><a href="#" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#" title="Instagram"><i className="fa fa-instagram"></i></a></li>
              </ul>
              <a href="#" title="Book Appointment"><span>+</span>Book Now</a>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Block */}
      <div className="middle-header container-fluid no-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-3 logo-block pull-left">
              <a href="#" title="Logo"><img src="/images/form-logo.webp" alt="Logo" /></a>
            </div>
            <div className="col-md-9 text-right pull-right">
              <div className="location">
                <h3><img src="/images/location-ic.png" alt="Location" /> Our Location</h3>
                <p>600 Broadway Blvd Suite 175, KCMO, 64105</p>
              </div>
              <div className="phone">
                <h3><img src="/images/phone-ic.png" alt="phone" /> (816) 673-1188</h3>
                <p>Call Us Now- 24/7 Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
