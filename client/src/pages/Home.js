import React, { Component } from 'react'
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { Link } from "react-router-dom";
import Image1 from '../imgs/med.jpg'
import Image3 from '../imgs/Picture5.jpg'
import Image2 from '../imgs/med2.jpg'
import logo from '../imgs/logo.png';

export class Home extends Component {
  render() {
    return (
      <body id="top">
      <Header/>

      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-xl-7">
              <div className="block">
                <div className="divider mb-3"></div>
                <span className="text-uppercase text-sm letter-spacing ">Health care solution</span>
                <h1 className="mb-3 mt-3">What is Telemedicine?</h1>
                <p className="mb-4 pr-5">
                  Telemedicine brings personal healthcare home to you. Healthcare providers can 
                  evaluate, diagnose and treat conditions through video conferencing using a phone,
                   tablet or computer outside of the doctor’s office, urgent care or hospital. 
                   Telemedicine is safe, convenient and has a low cost while providing the best 
                   patient care.
                </p>
                <div className="btn-container ">
                  <a href="https://practice.kareo.com/emstelemedicine"><div target="_blank" className="btn btn-main-2 btn-icon btn-round-full">Make appoinment<i className="icofont-simple-right ml-2"></i></div></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="feature-block d-lg-flex">
                <div className="feature-item mb-5 mb-lg-0">
                  <div className="feature-icon mb-4">
                    <i className="icofont-surgeon-alt"></i>
                  </div>
                  <span>Today or at a later date.</span>
                  <h4 className="mb-3">Schedule your visit</h4>
                  <p className="mb-4">
                    Anytime, anywhere on your computer, phone or tablet.
                    Request an appointment and check your email for the appointment confirmation.
                  </p>
                  <a href="https://practice.kareo.com/emstelemedicine" className="btn btn-main btn-round-full">Make a appoinment</a>
                </div>
                <div className="feature-item mb-5 mb-lg-0">
                  <div className="feature-icon mb-4">
                    <i className="icofont-ui-clock"></i>
                  </div>
                  <span>Completing Forms</span>
                  <h4 className="mb-3">Complete your medical forms and payment information</h4>
                  <p>New patients will complete the easy medical forms and create a patient portal account.
                    You can pay for your telemedicine visit using insurance or self-pay ($70)
                    Your information is protected
                    every step of the process.</p>
                </div>
                <div className="feature-item mb-5 mb-lg-0">
                  <div className="feature-icon mb-4">
                    <i className="icofont-support"></i>
                  </div>
                  <h4 className="mb-3">Connect with a provider</h4>
                  <p>A link to your video call will be sent
                    30 minutes prior to your appointment.
                    You and your provider will see and speak to each
                    other in real time. Our provider will assess
                    your symptoms, explain the diagnosis
                    and treat your condition.
                    Prescriptions for medications, lab testing, and xray
                    or a referral to a specialist can be recommended.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="section about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-sm-6">
              <div className="about-img">
                <img src={Image1} alt="" className="img-fluid"/>
                <img src={Image2} alt="" className="img-fluid mt-4"/>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="about-img mt-4 mt-lg-0">
                <img src={Image3} alt="" className="img-fluid"/>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about-content pl-4 mt-4 mt-lg-0">
                <h2 className="title-color">Personal care <br></br>& healthy living</h2>
                <p className="mt-4 mb-5">When you're feeling under the weather or have questions about your health, your options for care are available here. Through EMS Telemed, you have the freedom to receive medical treatment anytime, anywhere.</p>

                <a href="https://practice.kareo.com/emstelemedicine"><div target="_blank" className="btn btn-main-2 btn-icon btn-round-full">Make appoinment<i className="icofont-simple-right ml-2"></i></div></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="cta-section ">
        <div className="container">
          <div className="cta position-relative">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter-stat">
                  <i className="icofont-doctor"></i>
                  <span className="h3">58</span>k
                  <p>Happy People</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter-stat">
                  <i className="icofont-flag"></i>
                  <span className="h3">700</span>+
                  <p>Surgery Comepleted</p>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter-stat">
                  <i className="icofont-badge"></i>
                  <span className="h3">40</span>+
                  <p>Expert Doctors</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter-stat">
                  <i className="icofont-globe"></i>
                  <span className="h3">20</span>
                  <p>Worldwide Branch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section service gray-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <div className="section-title">
                <h2>IMMEDIATE CARE JUST A FINGERTIP AWAY</h2>
                <div className="divider mx-auto my-4"></div>
                <p>Telemedicine visits are available 7am to 11pm, 7 days a week.
                <br></br>Commonly Treated Conditions</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-4">
                <div className="icon d-flex align-items-center">
                  <i className="icofont-crutch text-lg"></i>
                  <h4 className="mt-3 mb-3">Conditions List (1)</h4>
                </div>

                <div className="content">
                <p className="mb-4" style={{fontSize: "18px"}}> 
                  - Acne <br></br>
                    - Allergies<br></br>
                    - Asthma<br></br>
                    - Cold symptoms<br></br>
                    - Constipation/Diarrhea<br></br>
                    - Cough/bronchitis<br></br>
                    - Covid-19 symptoms
                    </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-4">
                <div className="icon d-flex align-items-center">
                  <i className="icofont-brain-alt text-lg"></i>
                  <h4 className="mt-3 mb-3">Conditions List (2)</h4>
                </div>
                <div className="content">
                <p className="mb-4" style={{fontSize: "18px"}}> 
                - Ear infections<br></br>
                    - Fever<br></br>
                    - Gout<br></br>
                    - Headache/migraines<br></br>
                    - Nausea/Vomiting<br></br>
                    - Pink eye<br></br>
                    - Prescription refill
                    </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-4">
                <div className="icon d-flex align-items-center">
                  <i className="icofont-dna-alt-1 text-lg"></i>
                  <h4 className="mt-3 mb-3">Conditions List (3)</h4>
                </div>
                <div className="content">
                  <p className="mb-4" style={{fontSize: "18px"}}>
                  - Respiratory problems<br></br>
                  - Sexually Transmitted Infections<br></br>
                  - Sinus infections/sinusitis<br></br>
                  - Skin rashes/hives/bug bites/burns<br></br>
                  - Strains/sprains<br></br>
                  - Upper respiratory infection<br></br>
                  - Urinary Track Infection (UTI)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section appoinment">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 ">
              <div className="appoinment-content">
                <img src="images/about/img-3.jpg" alt="" className="img-fluid"/>
                <div className="emergency">
                  <h2 className="text-lg"><i className="icofont-phone-circle text-lg"></i>+23 345 67980</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-10 ">
              <div className="appoinment-wrap mt-5 mt-lg-0">
                <h2 className="mb-2 title-color">Book appoinment</h2>
                <p className="mb-4">Mollitia dicta commodi est recusandae iste, natus eum asperiores corrupti qui velit . Iste dolorum atque similique praesentium soluta.</p>
                    <form id="#" className="appoinment-form" method="post" action="#">
                          <div className="row">
                              <div className="col-lg-6">
                                  <div className="form-group">
                                      <select className="form-control" id="exampleFormControlSelect1">
                                        <option>Choose Department</option>
                                        <option>Software Design</option>
                                        <option>Development cycle</option>
                                        <option>Software Development</option>
                                        <option>Maintenance</option>
                                        <option>Process Query</option>
                                        <option>Cost and Duration</option>
                                        <option>Modal Delivery</option>
                                      </select>
                                  </div>
                              </div>
                              <div className="col-lg-6">
                                  <div className="form-group">
                                      <select className="form-control" id="exampleFormControlSelect2">
                                        <option>Select Doctors</option>
                                        <option>Software Design</option>
                                        <option>Development cycle</option>
                                        <option>Software Development</option>
                                        <option>Maintenance</option>
                                        <option>Process Query</option>
                                        <option>Cost and Duration</option>
                                        <option>Modal Delivery</option>
                                      </select>
                                  </div>
                              </div>

                              <div className="col-lg-6">
                                  <div className="form-group">
                                      <input name="date" id="date" type="text" className="form-control" placeholder="dd/mm/yyyy"/>
                                  </div>
                              </div>

                              <div className="col-lg-6">
                                  <div className="form-group">
                                      <input name="time" id="time" type="text" className="form-control" placeholder="Time"/>
                                  </div>
                              </div>
                              <div className="col-lg-6">
                                  <div className="form-group">
                                      <input name="name" id="name" type="text" className="form-control" placeholder="Full Name"/>
                                  </div>
                              </div>

                              <div className="col-lg-6">
                                  <div className="form-group">
                                      <input name="phone" id="phone" type="Number" className="form-control" placeholder="Phone Number"/>
                                  </div>
                              </div>
                          </div>
                          <div className="form-group-2 mb-4">
                              <textarea name="message" id="message" className="form-control" rows="6" placeholder="Your Message"></textarea>
                          </div>

                          <a className="btn btn-main btn-round-full" href="appoinment.html" >Make Appoinment <i className="icofont-simple-right ml-2  "></i></a>
                      </form>
                  </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section testimonial-2 gray-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center">
                <h2>We served over 5000+ Patients</h2>
                <div className="divider mx-auto my-4"></div>
                <p>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 testimonial-wrap-2">
              <div className="testimonial-block style-2  gray-bg">
                <i className="icofont-quote-right"></i>

                <div className="testimonial-thumb">
                  <img src="images/team/test-thumb1.jpg" alt="" className="img-fluid"/>
                </div>

                <div className="client-info ">
                  <h4>Amazing service!</h4>
                  <span>John Partho</span>
                  <p>
                    They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.
                  </p>
                </div>
              </div>

              <div className="testimonial-block style-2  gray-bg">
                <div className="testimonial-thumb">
                  <img src="images/team/test-thumb2.jpg" alt="" className="img-fluid"/>
                </div>

                <div className="client-info">
                  <h4>Expert doctors!</h4>
                  <span>Mullar Sarth</span>
                  <p>
                    They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.
                  </p>
                </div>
                
                <i className="icofont-quote-right"></i>
              </div>

              <div className="testimonial-block style-2  gray-bg">
                <div className="testimonial-thumb">
                  <img src="images/team/test-thumb3.jpg" alt="" className="img-fluid"/>
                </div>

                <div className="client-info">
                  <h4>Good Support!</h4>
                  <span>Kolis Mullar</span>
                  <p>
                    They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.
                  </p>
                </div>
                
                <i className="icofont-quote-right"></i>
              </div>

              <div className="testimonial-block style-2  gray-bg">
                <div className="testimonial-thumb">
                  <img src="images/team/test-thumb4.jpg" alt="" className="img-fluid"/>
                </div>

                <div className="client-info">
                  <h4>Nice Environment!</h4>
                  <span>Partho Sarothi</span>
                  <p className="mt-4">
                    They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.
                  </p>
                </div>
                <i className="icofont-quote-right"></i>
              </div>

              <div className="testimonial-block style-2  gray-bg">
                <div className="testimonial-thumb">
                  <img src="images/team/test-thumb1.jpg" alt="" className="img-fluid"/>
                </div>

                <div className="client-info">
                  <h4>Modern Service!</h4>
                  <span>Kolis Mullar</span>
                  <p>
                    They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.
                  </p>
                </div>
                <i className="icofont-quote-right"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section clients">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center">
                <h2>How to connect wiTh an ems telemed provider</h2>
                <div className="divider mx-auto my-4"></div>
                <p>
                To join our telemedicine video visit, you must have a computer, tablet or phone with a camera. 
                We recommend Google Chrome or Firefox browser to avoid connection issues
                Confirm that your device is connected to your home WIFI
                Close all other apps open on your device
                Uses headphones, if available to decrease the chance of an echo
                Choose a private, quiet space with good lighting.
                Complete your medical forms and create a patient portal account prior to the video connection
                Click the “Start Appointment” button in your appointment reminder or the link provided in your SMS text reminder on any internet-connected device with a camera and a microphone, 5 minutes before your appointment
                Enter your Date of Birth to allow entry to the video room. 
                Click “Allow” and you’ll be placed straight into the video room. That’s it! You are now ready to go.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row clients-logo">
            <div className="col-lg-2">
              <div className="client-thumb">
                <img src="images/about/1.png" alt="" className="img-fluid"/>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="client-thumb">
                <img src="images/about/2.png" alt="" className="img-fluid"/>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="client-thumb">
                <img src="images/about/3.png" alt="" className="img-fluid"/>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="client-thumb">
                <img src="images/about/4.png" alt="" className="img-fluid"/>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="client-thumb">
                <img src="images/about/5.png" alt="" className="img-fluid"/>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="client-thumb">
                <img src="images/about/6.png" alt="" className="img-fluid"/>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="client-thumb">
                <img src="images/about/3.png" alt="" className="img-fluid"/>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="client-thumb">
                <img src="images/about/4.png" alt="" className="img-fluid"/>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="client-thumb">
                <img src="images/about/5.png" alt="" className="img-fluid"/>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="client-thumb">
                <img src="images/about/6.png" alt="" className="img-fluid"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </body>
    )
  }
}

export default Home;