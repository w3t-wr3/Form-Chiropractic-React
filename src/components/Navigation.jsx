import React from 'react';

const Navigation = () => {
  return (
    <nav className="navbar ow-navigation">
      <div className="container">
        <div className="row">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-left-group">
              <li><a href="about.html">About Us</a></li>
              <li><a href="services.html">Acupuncture</a></li>
              <li><a href="departments.html">Services</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right-group">
              <li><a href="testimonials.html">Testimonials</a></li>
              <li><a href="gallery.html">Gallery</a></li>
              <li><a href="contact-us.html">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
