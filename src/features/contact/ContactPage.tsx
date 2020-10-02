import React from 'react'
import './ContactPage.css';

const ContactPage = () => {
    return (
        <section className="contact">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="head text-center text-white py-3">
                        <h3>Contact Us</h3>
                      </div>
                    </div>
                  </div>
                  <div className="form p-3">
                    <div className="form-row my-5">
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="effect-1"
                          placeholder="Firstname"
                        />
                        <span className="focus-border"></span>
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="effect-1"
                          placeholder="Lastname"
                        />
                        <span className="focus-border"></span>
                      </div>
                    </div>
                    <div className="form-row pb-4">
                      <div className="col-lg-12">
                        <input
                          type="email"
                          className="effect-1"
                          placeholder="Email Address"
                        />
                        <span className="focus-border"></span>
                      </div>
                    </div>
                    <div className="form-row pt-5">
                      <div className="col-lg-12">
                        <input
                          type="text"
                          className="effect-1"
                          placeholder="Message"
                        />
                        <span className="focus-border"></span>
                      </div>
                    </div>
                    <div className="form-row pt-4">
                      <button className="btn btn-primary btn1 btn-block">
                        SEND MESSAGE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default ContactPage
