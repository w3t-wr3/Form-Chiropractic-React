import React, { useEffect } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';

function App() {
  useEffect(() => {
    // Load jQuery and other scripts after component mounts
    const scripts = [
      '/js/jquery.min.js',
      '/libraries/modernizr/modernizr.js',
      '/libraries/bootstrap/bootstrap.min.js',
      '/js/jquery.easing.min.js',
      '/libraries/appear/jquery.appear.js',
      '/libraries/owl-carousel/owl.carousel.min.js',
      '/libraries/number/jquery.animateNumber.min.js',
      '/libraries/isotope/isotope.pkgd.min.js',
      '/libraries/magnific-popup/jquery.magnific-popup.min.js',
      '/js/functions.js'
    ];

    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = false;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const loadAllScripts = async () => {
      for (const src of scripts) {
        try {
          await loadScript(src);
        } catch (error) {
          console.error(`Error loading ${src}:`, error);
        }
      }
      // Remove loader after scripts load
      const loader = document.getElementById('site-loader');
      if (loader) {
        loader.classList.add('load-complete');
      }
    };

    loadAllScripts();
  }, []);

  return (
    <>
      {/* Loader */}
      <div id="site-loader" className="load-complete">
        <div className="loader">
          <div className="loader-inner ball-clip-rotate">
            <div></div>
          </div>
        </div>
      </div>

      <a id="top"></a>

      {/* Main Container */}
      <div className="main-container">
        <Header />
        <Navigation />

        {/* Banner Section */}
        <div id="home-banner" className="container-fluid no-padding banner-section home-banner">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6 no-padding">
                <div className="banner-left">
                  <h3>Your Form.<br />Our Focus.</h3>
                  <p>Expert chiropractic care in Kansas City with an honest, ethical approach to your health.</p>
                  <a href="#">View Our Services<i className="fa fa-plus"></i></a>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 no-padding">
                <div className="banner-right">
                  <img src="/images/banner-main.png?v=4" alt="banner-main" />
                </div>
              </div>
            </div>
          </div>

          {/* Shape */}
          <div className="banner-shape container-fluid no-padding">
            <div className="col-md-6 col-sm-6 col-xs-6 shape-left no-padding">
              <div className="left-shape-blue">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <clipPath id="clipPolygon2" clipPathUnits="objectBoundingBox">
                    <path d="M 0,0.25 Q 0.2,0.05 0.4,0.25 Q 0.6,0.45 0.8,0.6 Q 1,0.75 1,0.75 L 1,1 L 0,1 Z"></path>
                  </clipPath>
                </svg>
              </div>
              <div className="left-shape">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <clipPath id="clipPolygon1" clipPathUnits="objectBoundingBox">
                    <path d="M 0,0.2 Q 0.2,0 0.4,0.2 Q 0.6,0.4 0.8,0.55 Q 1,0.7 1,0.7 L 1,1 L 0,1 Z"></path>
                  </clipPath>
                </svg>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-6 shape-right no-padding">
              <div className="right-shape-blue">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <clipPath id="clipPolygon3" clipPathUnits="objectBoundingBox">
                    <path d="M 0,0.75 Q 0.2,0.9 0.4,0.75 Q 0.6,0.6 0.8,0.4 Q 1,0.2 1,0.35 L 1,1 L 0,1 Z"></path>
                  </clipPath>
                </svg>
              </div>
              <div className="right-shape">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <clipPath id="clipPolygon4" clipPathUnits="objectBoundingBox">
                    <path d="M 0,0.7 Q 0.2,0.85 0.4,0.7 Q 0.6,0.55 0.8,0.35 Q 1,0.15 1,0.3 L 1,1 L 0,1 Z"></path>
                  </clipPath>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Message Board */}
        <div id="message-borad" className="container-fluid no-padding message-borad">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6 emargency-case">
                <div className="col-md-6 message-block no-left-padding">
                  <h3>We Accept Walk-ins!</h3>
                  <p>No appointment necessary. We're here to serve you and help you achieve your health care goals.</p>
                  <a href="#contact">Contact Us<i className="fa fa-caret-right"></i></a>
                </div>
                <div className="col-md-6 message-block no-right-padding">
                  <h3>Book Online</h3>
                  <p>Schedule your appointment online at your convenience. Call us at (816) 673-1188 or book now.</p>
                  <a href="#">Book Now<i className="fa fa-caret-right"></i></a>
                </div>
              </div>

              <div className="col-md-6 col-sm-6 opening-hours">
                <div className="col-md-6 message-block no-padding clinic-hours-clean">
                  <h3>Clinic Hours</h3>
                  <div className="hours-grid">
                    <div className="hours-row">
                      <span className="day">Mon, Tue, Thu</span>
                      <span className="time">9:30 AM-1 PM<br />3-6 PM</span>
                    </div>
                    <div className="hours-row">
                      <span className="day">Wednesday</span>
                      <span className="time">9:30 AM-6 PM</span>
                    </div>
                    <div className="hours-row">
                      <span className="day">Friday</span>
                      <span className="time">9:00 AM-6 PM</span>
                    </div>
                    <div className="hours-row">
                      <span className="day">Saturday</span>
                      <span className="time">9:00 AM-1 PM</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 message-block">
                  <h3>Insurance Accepted</h3>
                  <p>Most insurance accepted including Blue Cross Blue Shield, Aetna, Cigna, Humana, Medicare, and UHC. Send us your insurance information to verify coverage.</p>
                  <a href="#contact">Verify Coverage<i className="fa fa-caret-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Section */}
        <div id="service-section" className="container-fluid no-padding service-section">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-12 col-xs-12 service">
                <div className="section-header">
                  <h3>Welcome to Form Chiropractic</h3>
                  <p>At Form Chiropractic, our mission is to provide the highest level of quality care to our patients with an honest and ethical approach to your health care. As a leading provider of chiropractic care in Kansas City, we specialize in treating low back, neck, headache, shoulder, and hip pain.</p>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="service-block">
                      <div className="service-block-icon">
                        <i><img src="/images/ambulance.png" alt="ambulance" /></i>
                        <i><img src="/images/ambulance-white.png" alt="ambulance-white" /></i>
                      </div>
                      <div className="service-block-content">
                        <h3>Walk-Ins Welcome</h3>
                        <p>No appointment necessary. We're here when you need us most.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="service-block">
                      <div className="service-block-icon">
                        <i><img src="/images/heart-ic.png" alt="heart-ic" /></i>
                        <i><img src="/images/heart-ic-white.png" alt="heart-ic-white" /></i>
                      </div>
                      <div className="service-block-content">
                        <h3>Expert Care</h3>
                        <p>Individualized treatment plans tailored to your specific diagnosis.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="service-block">
                      <div className="service-block-icon">
                        <i><img src="/images/phone.png" alt="phone" /></i>
                        <i><img src="/images/phone-white.png" alt="phone-white" /></i>
                      </div>
                      <div className="service-block-content">
                        <h3>Call (816) 673-1188</h3>
                        <p>Contact us for appointments or questions about your care.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="service-block">
                      <div className="service-block-icon">
                        <i><img src="/images/appoinment-latter.png" alt="appoinment-latter" /></i>
                        <i><img src="/images/appoinment-latter-white.png" alt="appoinment-latter-white" /></i>
                      </div>
                      <div className="service-block-content">
                        <h3>Book Online</h3>
                        <p>Schedule your appointment at your convenience. Quick and easy.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-12 col-xs-12">
                <form className="appoinment-form">
                  <h3><img src="/images/appoinment.png" alt="appoinment" />Book Your Appointment</h3>
                  <div className="form-group col-md-12 no-padding">
                    <input type="text" id="your-name" className="form-control" placeholder="Your Name" />
                  </div>
                  <div className="form-group col-md-12 no-padding">
                    <input type="email" id="email" className="form-control" placeholder="Email Address" />
                  </div>
                  <div className="form-group input-group col-md-12 no-padding">
                    <div className="col-md-7 no-padding">
                      <div className="col-md-6 col-sm-4 col-xs-4 no-left-padding">
                        <select className="form-control">
                          <option>Day</option>
                          <option>Sunday</option>
                          <option>Monday</option>
                        </select>
                      </div>
                      <div className="col-md-6 col-sm-4 col-xs-4 no-left-padding">
                        <select className="form-control">
                          <option>Time</option>
                          <option>AM</option>
                          <option>PM</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-5 col-sm-4 col-xs-4 no-padding">
                      <select className="form-control">
                        <option>Doctor Name</option>
                        <option>Mr.XYZ</option>
                        <option>Mr.ABC</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group col-md-12 col-sm-12 col-xs-12 no-padding">
                    <textarea rows="4" id="textarea_message" className="form-control" placeholder="Your Message..."></textarea>
                  </div>
                  <div className="form-group col-md-12 col-sm-12 col-xs-12 no-padding">
                    <input type="checkbox" /><span>Send Email Notification</span>
                    <button type="submit" id="btn_submit" className="btn-submit pull-right">
                      <img src="/images/heart-sm.png" alt="heart-sm" />Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Call Out */}
        <div id="call-out" className="container-fluid no-padding call-out">
          <div className="container">
            <div className="call-out-content row">
              <div className="col-md-12 col-sm-12 col-xs-12" style={{ textAlign: 'center' }}>
                <h3>Ready to <span>Find Your Form?</span></h3>
                <p>Below you'll find our comprehensive list of services.<br />Schedule your appointment today and start your journey to a pain-free life. We accept walk-ins!</p>
                <a href="#contact-us" title="Book Appointment" style={{ display: 'inline-block', marginTop: '15px' }}>Book Now</a>
              </div>
            </div>
          </div>
        </div>

        {/* What We Do Best */}
        <div id="what-we-do-best" className="container-fluid no-padding what-we-do-best">
          <div className="what-we-do-left col-md-4 no-padding">
            <img src="/images/what-we-treat-left.jpg" alt="what-we-do-best" />
          </div>

          <div className="col-md-8 what-we-do-right no-padding">
            <div className="col-md-4 col-sm-4 col-xs-6 no-padding">
              <div className="what-we-do-block">
                <img src="/images/service-lower-back.png" alt="Lower Back Pain" />
                <div className="what-we-do-block-content">
                  <i className="fa fa-male" style={{ fontSize: '60px', color: '#0f89d1' }}></i>
                  <h5>Lower Back Pain</h5>
                  <p>Relief and treatment for chronic and acute lower back pain</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-6 no-padding">
              <div className="what-we-do-block">
                <img src="/images/service-neck-pain.jpg" alt="Neck Pain" />
                <div className="what-we-do-block-content">
                  <i className="fa fa-user" style={{ fontSize: '60px', color: '#0f89d1' }}></i>
                  <h5>Neck Pain</h5>
                  <p>Comprehensive care for neck pain and stiffness</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-6 no-padding">
              <div className="what-we-do-block">
                <img src="/images/service-sciatica.jpg?v=2" alt="Sciatica" />
                <div className="what-we-do-block-content">
                  <i className="fa fa-street-view" style={{ fontSize: '60px', color: '#0f89d1' }}></i>
                  <h5>Sciatica</h5>
                  <p>Specialized treatment for sciatic nerve pain</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-6 no-padding">
              <div className="what-we-do-block">
                <img src="/images/service-headaches.jpg?v=2" alt="Headaches" />
                <div className="what-we-do-block-content">
                  <i><img src="/images/neurology.png" alt="Headaches" /></i>
                  <h5>Headaches</h5>
                  <p>Relief from tension and migraine headaches</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-6 no-padding what-we-do-title">
              <div className="what-we-do-block">
                <img src="/images/what-we-do-best-block-title-bg.jpg" alt="what-we-do-best-title" />
                <div className="what-we-do-block-content">
                  <h3>Our Services</h3>
                  <p>Comprehensive chiropractic care for your wellness</p>
                  <span><img src="/images/section-seprator.png" alt="section-seprator" /></span>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-6 no-padding">
              <div className="what-we-do-block">
                <img src="/images/service-sports-injury.jpg?v=2" alt="Sports Injuries" />
                <div className="what-we-do-block-content">
                  <i><img src="/images/x-ray.png" alt="Sports Injuries" /></i>
                  <h5>Sports Injuries</h5>
                  <p>Expert treatment for athletic injuries and performance</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-6 no-padding">
              <div className="what-we-do-block">
                <img src="/images/service-acupuncture.jpg?v=2" alt="Acupuncture" />
                <div className="what-we-do-block-content">
                  <i><img src="/images/diagnostic.png" alt="Acupuncture" /></i>
                  <h5>Acupuncture</h5>
                  <p>Traditional acupuncture for pain and wellness</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-6 no-padding">
              <div className="what-we-do-block">
                <img src="/images/service-auto-accident.jpg?v=2" alt="Auto Injuries" />
                <div className="what-we-do-block-content">
                  <i><img src="/images/ambulance.png" alt="Auto Injuries" /></i>
                  <h5>Auto Injuries</h5>
                  <p>Treatment for accident-related injuries and whiplash</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-6 no-padding">
              <div className="what-we-do-block">
                <img src="/images/service-pregnancy.jpg" alt="Wellness Care" />
                <div className="what-we-do-block-content">
                  <i><img src="/images/cardiology.png" alt="Wellness Care" /></i>
                  <h5>Wellness Care</h5>
                  <p>Preventive care for optimal health and balance</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div id="team-section" className="container-fluid no-paddding team-section">
          <div className="container">
            <div className="section-header">
              <h3>Meet Our Team</h3>
            </div>
            <div className="team-carousel">
              <div className="col-md-12 team-type">
                <img src="/images/doctor-2.jpg?v=2" alt="doctor-2" />
                <div className="member-content">
                  <div className="member-name">
                    <h6>Misty Collene</h6>
                    <p>Acupuncturist</p>
                  </div>
                  <div className="member-contact">
                    <a title="Phone" href="#"><img src="/images/ftr-phone.png" alt="Phone" /></a>
                    <a title="Mail" href="#"><img src="/images/ftr-email.png" alt="Email" /></a>
                  </div>
                </div>
              </div>
              <div className="col-md-12 team-type">
                <img src="/images/doctor-1.jpg?v=2" alt="doctor-1" />
                <div className="member-content">
                  <div className="member-name">
                    <h6>Tyler Smith</h6>
                    <p>Chiropractor</p>
                  </div>
                  <div className="member-contact">
                    <a title="Phone" href="#"><img src="/images/ftr-phone.png" alt="Phone" /></a>
                    <a title="Mail" href="#"><img src="/images/ftr-email.png" alt="Email" /></a>
                  </div>
                </div>
              </div>
              <div className="col-md-12 team-type">
                <img src="/images/doctor-3.jpg?v=2" alt="doctor-3" />
                <div className="member-content">
                  <div className="member-name">
                    <h6>Dr.Adaline Becka</h6>
                    <p>Dental Specialist</p>
                  </div>
                  <div className="member-contact">
                    <a title="Phone" href="#"><img src="/images/ftr-phone.png" alt="Phone" /></a>
                    <a title="Mail" href="#"><img src="/images/ftr-email.png" alt="Email" /></a>
                  </div>
                </div>
              </div>
            </div>
            <a title="View All Doctors" href="#">View All Doctors<i className="fa fa-plus"></i></a>
          </div>
        </div>

        {/* Departments Section */}
        <div className="container-fluid no-padding department-section">
          <div className="we-are-best col-md-6 col-sm-12 no-padding" style={{ position: 'relative', overflow: 'hidden' }}>
            <img src="/images/vertebrae.webp" alt="vertebrae" style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', width: '350px', height: 'auto', opacity: 0.08, zIndex: 0, pointerEvents: 'none' }} />
            <div className="section-header" style={{ position: 'relative', zIndex: 1 }}>
              <h3>Why Choose Form Chiropractic</h3>
            </div>
            <div className="we-are-best-block" style={{ position: 'relative', zIndex: 1 }}>
              <div className="we-are-best-icon">
                <i className="fa fa-clipboard" style={{ fontSize: '40px', color: '#0f89d1' }}></i>
              </div>
              <div className="we-are-best-content">
                <h3>Individualized Treatment Plans</h3>
                <p>You will receive an individualized examination and treatment plan tailored to your specific diagnosis, addressing both short-term pain relief and long-term prevention.</p>
              </div>
            </div>
            <div className="we-are-best-block" style={{ position: 'relative', zIndex: 1 }}>
              <div className="we-are-best-icon">
                <i className="fa fa-heartbeat" style={{ fontSize: '40px', color: '#0f89d1' }}></i>
              </div>
              <div className="we-are-best-content">
                <h3>Comprehensive Care</h3>
                <p>We utilize the most effective aspects of chiropractic care, massage therapy, and physical rehabilitation to ensure optimal results for our patients.</p>
              </div>
            </div>
            <div className="we-are-best-block" style={{ position: 'relative', zIndex: 1 }}>
              <div className="we-are-best-icon">
                <i className="fa fa-medkit" style={{ fontSize: '40px', color: '#0f89d1' }}></i>
              </div>
              <div className="we-are-best-content">
                <h3>Honest & Ethical Approach</h3>
                <p>Our mission is to provide the highest level of quality care with an honest and ethical approach to your healthcare needs.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 departments no-padding">
            <div className="departments-bg">
              <img src="/images/departments-bg.jpg" alt="departments-bg" />
            </div>
            <div className="section-header">
              <h3>Testimonials</h3>
            </div>
            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="dept-heading1">
                  <h4 className="panel-title">
                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#dept-type-1" aria-expanded="true">
                      Sarah Martinez, 34 - Overland Park, KS<i className="fa fa-plus pull-right"></i>
                    </a>
                  </h4>
                </div>
                <div id="dept-type-1" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="dept-heading1">
                  <div className="panel-img">
                    <img src="/images/panel-img-1.jpg" alt="panel-img" />
                  </div>
                  <div className="panel-body">
                    <p>After years of chronic lower back pain, I finally found relief at Form Chiropractic. Dr. Smith took the time to understand my condition and created a personalized treatment plan. Within just a few weeks, I was able to return to my active lifestyle. I can't recommend them enough!</p>
                    <a href="#">More Details<i className="fa fa-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="dept-heading2">
                  <h4 className="panel-title">
                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#dept-type-2" aria-expanded="false">
                      Michael Chen, 42 - Lee's Summit, MO<i className="fa fa-plus pull-right"></i>
                    </a>
                  </h4>
                </div>
                <div id="dept-type-2" className="panel-collapse collapse" role="tabpanel" aria-labelledby="dept-heading2">
                  <div className="panel-img">
                    <img src="/images/panel-img-1.jpg" alt="panel-img" />
                  </div>
                  <div className="panel-body">
                    <p>Form Chiropractic helped me recover from a severe car accident injury. The combination of chiropractic care and physical therapy was exactly what I needed. The staff is professional, caring, and genuinely invested in your recovery. Five stars!</p>
                    <a href="#">More Details<i className="fa fa-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="dept-heading3">
                  <h4 className="panel-title">
                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#dept-type-3" aria-expanded="false">
                      Jennifer Thompson, 29 - Liberty, MO<i className="fa fa-plus pull-right"></i>
                    </a>
                  </h4>
                </div>
                <div id="dept-type-3" className="panel-collapse collapse" role="tabpanel" aria-labelledby="dept-heading3">
                  <div className="panel-img">
                    <img src="/images/panel-img-1.jpg" alt="panel-img" />
                  </div>
                  <div className="panel-body">
                    <p>As someone who works at a desk all day, I developed terrible tech neck and shoulder pain. Misty's acupuncture treatments combined with Dr. Smith's adjustments have been life-changing. I'm now pain-free and have learned exercises to prevent future issues!</p>
                    <a href="#">More Details<i className="fa fa-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="dept-heading4">
                  <h4 className="panel-title">
                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#dept-type-4" aria-expanded="false">
                      Robert Williams, 56 - Blue Springs, MO<i className="fa fa-plus pull-right"></i>
                    </a>
                  </h4>
                </div>
                <div id="dept-type-4" className="panel-collapse collapse" role="tabpanel" aria-labelledby="dept-heading4">
                  <div className="panel-img">
                    <img src="/images/panel-img-1.jpg" alt="panel-img" />
                  </div>
                  <div className="panel-body">
                    <p>I was skeptical about chiropractic care until I visited Form Chiropractic for my sciatica. The results speak for themselves - I went from barely being able to walk to playing golf again in just two months. Dr. Smith is incredibly knowledgeable and honest about expectations.</p>
                    <a href="#">More Details<i className="fa fa-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="dept-heading5">
                  <h4 className="panel-title">
                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#dept-type-5" aria-expanded="false">
                      Amanda Rodriguez, 31 - Olathe, KS<i className="fa fa-plus pull-right"></i>
                    </a>
                  </h4>
                </div>
                <div id="dept-type-5" className="panel-collapse collapse" role="tabpanel" aria-labelledby="dept-heading5">
                  <div className="panel-img">
                    <img src="/images/panel-img-1.jpg" alt="panel-img" />
                  </div>
                  <div className="panel-body">
                    <p>During my pregnancy, I experienced severe back pain that made everyday activities difficult. Form Chiropractic provided safe, effective care throughout my pregnancy and postpartum recovery. I felt supported every step of the way and would recommend them to any expecting mother!</p>
                    <a href="#">More Details<i className="fa fa-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="dept-heading6">
                  <h4 className="panel-title">
                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#dept-type-6" aria-expanded="false">
                      David Patterson, 47 - Independence, MO<i className="fa fa-plus pull-right"></i>
                    </a>
                  </h4>
                </div>
                <div id="dept-type-6" className="panel-collapse collapse" role="tabpanel" aria-labelledby="dept-heading6">
                  <div className="panel-img">
                    <img src="/images/panel-img-1.jpg" alt="panel-img" />
                  </div>
                  <div className="panel-body">
                    <p>After suffering from chronic headaches for years, I finally found relief at Form Chiropractic. Their comprehensive approach addressed the root cause of my migraines, not just the symptoms. The team is exceptional, and their downtown location makes appointments convenient!</p>
                    <a href="#">More Details<i className="fa fa-plus"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Counter Section */}
        <div id="counter-section" className="container-fluid no-padding counter-section">
          <div className="container">
            <div className="col-md-6 col-sm-6 no-padding">
              <div className="happy-customer">
                <h3 className="block-title">We are Form</h3>
                <p>Over <span>2,500</span> patients treated in Kansas City. Experience relief and improved mobility.</p>
                <a href="#"><i className="fa fa-thumbs-o-up"></i>Book Appointment</a>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 no-padding">
              <div className="counter-app">
                <div className="col-md-6 col-sm-6 col-xs-6">
                  <div className="statistics-box">
                    <i className="statistics-icon"><img alt="statistics-icon" src="/images/icon-1.png" /></i>
                    <div className="statistics-content">
                      <span data-statistics_percent="8" id="statistics_count-1">8</span>
                      <p>Years Serving KC</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-6">
                  <div className="statistics-box">
                    <i className="statistics-icon"><img alt="statistics-icon" src="/images/icon-2.png" /></i>
                    <div className="statistics-content">
                      <span data-statistics_percent="3" id="statistics_count-2">3</span>
                      <p>Expert Practitioners</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-6">
                  <div className="statistics-box">
                    <i className="statistics-icon"><img alt="statistics-icon" src="/images/icon-3.png" /></i>
                    <div className="statistics-content">
                      <span data-statistics_percent="2500" id="statistics_count-3">2500</span>
                      <p>Patients Treated</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-6">
                  <div className="statistics-box">
                    <i className="statistics-icon"><img alt="statistics-icon" src="/images/icon-4.png" /></i>
                    <div className="statistics-content">
                      <span data-statistics_percent="98" id="statistics_count-4">98</span>
                      <p>Satisfaction Rate %</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Latest News */}
        <div className="container-fluid no-padding latest-news">
          <div className="container">
            <div className="section-header">
              <h3>Recent tips & News</h3>
              <a href="#">view More Post<i className="fa fa-plus"></i></a>
            </div>
            <div className="row">
              <article className="col-md-6 col-sm-12 col-xs-12">
                <div className="entry-header">
                  <div className="entry-cover">
                    <a href="blog-post.html"><img src="/images/image1_matched.webp" alt="latest-news" /></a>
                    <a href="blog-post.html" className="read-more"><i className="fa fa-link"></i>Read More</a>
                  </div>
                </div>
                <div className="entry-content">
                  <div className="entry-meta">
                    <a href="#"><i className="fa fa-comment-o"></i>Comments<span>(12)</span></a>
                    <a href="#"><i className="fa fa-heart-o"></i>Favorite<span>(11)</span></a>
                    <a href="#"><i className="fa fa-share-alt"></i>Share Post<span>(12)</span></a>
                  </div>
                  <h3 className="entry-title"><a href="blog-post.html">5 Benefits of Regular Chiropractic Care</a></h3>
                  <div className="post-meta">
                    <a href="#" title="January 15, 2025" className="post-date">January 15, 2025</a> by
                    <a href="#" title="Tyler Smith" className="post-admin">Tyler Smith</a> in Wellness
                  </div>
                  <p>Discover how regular chiropractic adjustments can improve your mobility, reduce chronic pain, and enhance your overall quality of life in Kansas City.</p>
                </div>
              </article>
              <article className="col-md-6 col-sm-12 col-xs-12">
                <div className="entry-header">
                  <div className="entry-cover">
                    <a href="blog-post.html"><img src="/images/image2_matched.webp" alt="latest-news" /></a>
                    <a href="blog-post.html" className="read-more"><i className="fa fa-link"></i>Read More</a>
                  </div>
                </div>
                <div className="entry-content">
                  <div className="entry-meta">
                    <a href="#"><i className="fa fa-comment-o"></i>Comments<span>(18)</span></a>
                    <a href="#"><i className="fa fa-heart-o"></i>Favorite<span>(16)</span></a>
                    <a href="#"><i className="fa fa-share-alt"></i>Share Post<span>(13)</span></a>
                  </div>
                  <h3 className="entry-title"><a href="blog-post.html">Understanding "Tech Neck" and How to Prevent It</a></h3>
                  <div className="post-meta">
                    <a href="#" title="January 8, 2025" className="post-date">January 8, 2025</a> by
                    <a href="#" title="Tyler Smith" className="post-admin">Tyler Smith</a> in Health Tips
                  </div>
                  <p>Learn about the causes of tech neck from prolonged device use and discover effective strategies to prevent neck pain and improve your posture.</p>
                </div>
              </article>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="footer-main container-fluid no-padding">
          <div className="container">
            <div className="contact-details">
              <div className="col-md-4 col-sm-4 address-box detail-box">
                <i><img src="/images/ftr-location.png" alt="Loactaion" /></i>
                <h4>Clinic Address</h4>
                <p>600 Broadway Boulevard, Suite 175</p>
                <p>Kansas City, Missouri 64105</p>
              </div>
              <div className="col-md-4 col-sm-4 phone-box detail-box">
                <i><img src="/images/ftr-phone.png" alt="Phone" /></i>
                <h4>Contact Us</h4>
                <p>Phone: (816) 673-1188</p>
                <p>We Accept Walk-ins!</p>
              </div>
              <div className="col-md-4 col-sm-4 mail-box detail-box">
                <i><img src="/images/ftr-email.png" alt="Email" /></i>
                <h4>Email Us</h4>
                <p><a href="mailto:FormChiropracticKC@gmail.com">FormChiropracticKC@gmail.com</a></p>
                <p>Most Insurance Accepted</p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 col-sm-6 col-xs-12">
                <aside className="widget widget-about">
                  <h3><img src="/images/form-logo-footer.png" alt="Logo" /></h3>
                  <p>Leading chiropractic care in Kansas City. We specialize in treating low back, neck, headache, shoulder, and hip pain.</p>
                  <div className="time-schedule footer-hours-clean">
                    <div className="hours-row">
                      <span className="day">Mon, Tue, Thu</span>
                      <span className="time">9:30 AM-1 PM, 3-6 PM</span>
                    </div>
                    <div className="hours-row">
                      <span className="day">Wednesday</span>
                      <span className="time">9:30 AM-6 PM</span>
                    </div>
                    <div className="hours-row">
                      <span className="day">Friday</span>
                      <span className="time">9:00 AM-6 PM</span>
                    </div>
                    <div className="hours-row">
                      <span className="day">Saturday</span>
                      <span className="time">9:00 AM-1 PM</span>
                    </div>
                  </div>
                </aside>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <aside className="widget widget-links">
                  <h3 className="widget-title">Our Services</h3>
                  <div className="services-grid">
                    <div className="service-item">Lower Back Pain</div>
                    <div className="service-item">Neck Pain</div>
                    <div className="service-item">Shoulder Pain</div>
                    <div className="service-item">Sciatica</div>
                    <div className="service-item">Headaches</div>
                    <div className="service-item">Bulging/Herniated Discs</div>
                    <div className="service-item">Sports Injury & Rehab</div>
                    <div className="service-item">Pregnancy-Related Pain</div>
                    <div className="service-item">Motor Vehicle Injuries</div>
                    <div className="service-item">Acupuncture</div>
                    <div className="service-item">Arthritis</div>
                    <div className="service-item">Carpal Tunnel Syndrome</div>
                  </div>
                </aside>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <aside className="widget widget-newsletter">
                  <h3 className="widget-title">Insurance Accepted</h3>
                  <p>Send us your insurance information to verify coverage.</p>
                  <div className="insurance-logo-container">
                    <img src="/images/bcbs-logo.png" alt="Blue Cross Blue Shield" className="insurance-logo" />
                    <img src="/images/aetna-logo.png" alt="Aetna" className="insurance-logo" />
                    <img src="/images/humana-logo.png" alt="Humana" className="insurance-logo" />
                    <img src="/images/cigna-logo.png" alt="Cigna" className="insurance-logo" />
                  </div>
                  <p style={{ marginTop: '15px', fontSize: '13px', color: 'rgba(255, 255, 255, 0.7)', fontStyle: 'italic' }}>And many more including Medicare, UHC, and most major providers.</p>
                  <div className="social">
                    <h6>Stay Connected</h6>
                    <ul>
                      <li><a href="#" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#" title="Instagram"><i className="fa fa-instagram"></i></a></li>
                      <li><a href="https://www.tiktok.com/@formchiropractickc?lang=en" title="TikTok" target="_blank" rel="noopener noreferrer"><i className="fa fa-music"></i></a></li>
                      <li><a href="https://www.yelp.com/biz/form-chiropractic-kansas-city?osq=Form+Chiropractic" title="Yelp" target="_blank" rel="noopener noreferrer"><i className="fa fa-yelp"></i></a></li>
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          </div>

          <div className="container-fluid no-padding bottom-footer">
            <p>&copy; 2026 Form Chiropractic. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
