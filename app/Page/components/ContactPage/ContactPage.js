import React from "react";

const ContactPage = () => (
  <div className="page">
    <div className="page__header">
      <h2 className="page__title">Contact</h2>
    </div>
    <div className="page__content">
      <div className="contactPage__sub">
        <div>
          <h3 className="contactSub__title">Get in Touch</h3>
          <div id="map"></div>
          <div class="contact__details">
            <div>
              <span class="material-icons">place</span>
              Adelaide, Australia
            </div>
            <div>
              <span class="material-icons">email</span>
              <a href="mailto:kwonzhu@gmail.com">kwonzhu@gmail.com</a>
            </div>
            <div>
              <span class="material-icons">call</span>
              +61 043 4837 886
            </div>
            <div>
              <span class="material-icons">done</span>
              Freelance Available
            </div>
          </div>
        </div>
        <div>
          <h3 className="contactSub__title">Contact Form</h3>
          {/* <!-- modify this form HTML and place wherever you want your form --> */}
          <form
            action="https://formspree.io/f/xbjqlnoe"
            method="post"
            target="_blank"
          >
            <div>
              <label for="name">Your name:</label>
              <input type="name" placeholder="Full Name" required></input>
            </div>
            <div>
              <label for="email">Your email:</label>
              <input
                type="email"
                name="_replyto"
                placeholder="Email Address"
                required
              ></input>
            </div>
            <div>
              <label for="message">Your message:</label>
              <textarea
                name="message"
                placeholder="Massage for Me"
                required
                rows="10"
              ></textarea>
            </div>
            <input
              type="submit"
              name="submit"
              class="send"
              value="Send"
            ></input>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default ContactPage;
