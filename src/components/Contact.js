import React from 'react'

const Contact = () => {
  return (
    <main className="contact">
      <div className="contact__container">
        <div className="content">
          <div className="content__image">
            <img className="content__image--main" src="assets/contact-image.webp" alt="" />
            <img className="content__image--vector" src="assets/contact-vector.svg" alt="" />
          </div>
          <div className="content__container">
            <div className="content__container__heading">
              <h1>Contact Us</h1>
              <p>
                If you need our help, have questions about how to use the platform or are experiencing
                technical difficulties, please do not hesitate to contact us.
              </p>
            </div>
            <div className="content__container__link">
              <span>Support Center</span>
              <img src="assets/contact-rightArrow.svg" alt="" />
            </div>
          </div>
        </div>
        <form className="form__container">
          <div className="input__area">
            <div className="input__area--field">
              <p>Your name <span>*</span></p>
              <input id="name" placeholder="Enter your full name" type="text" />
            </div>
            <div className="input__area--field">
              <p>Contact email <span>*</span></p>
              <input id="email" placeholder="Enter your valid e-mail address" type="text" />
            </div>
          </div>
          <div className="input__area">
            <div className="input__area--field">
              <p>Subject</p>
              <input id="subject" placeholder="Enter subject of your message" type="text" />
            </div>
            <div className="input__area--field">
              <p>Country <span>*</span></p>
              <input id="country" placeholder="Enter your country" type="text" />
            </div>
          </div>
          <div className="input__textarea">
            <p>Your message <span>*</span></p>
            <textarea id="message" placeholder="Write your complete message here..." type="text"></textarea>
          </div>
          <p>
            By submitting this form you agree to our terms and conditions and our Privacy Policy which
            explains how we may collect, use and disclose your personal information including to third
            parties.
          </p>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="support__container">
        <div className="support__container--inner">
          <h2>Support Center</h2>
          <div className="content">
            <div className="content__detail">
              <div className="content__detail--image">
                <img src="assets/email.webp" alt="" />
              </div>
              <div className="content__detail--text">
                <h3>Email Us</h3>
                <p>Email us for general queries, including marketing and partnership opportunities.</p>
              </div>
            </div>
            <div className="content__detail">
              <div className="content__detail--image">
                <img src="assets/call.webp" alt="" />
              </div>
              <div className="content__detail--text">
                <h3>Call Us</h3>
                <p>Call us to speak to a member of our team. We are always happy to help.</p>
              </div>
            </div>
            <div className="content__detail">
              <div className="content__detail--image">
                <img src="assets/chat.webp" alt="" />
              </div>
              <div className="content__detail--text">
                <h3>Chat Bot</h3>
                <p>Check out helpful resources, FAQs and developer tools with chat bot</p>
              </div>
            </div>
            <div className="content__detail">
              <div className="content__detail--image">
                <img src="assets/faq.webp" alt="" />
              </div>
              <div className="content__detail--text">
                <h3>FAQ</h3>
                <p>Get answer to your most frequently asked questions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact
