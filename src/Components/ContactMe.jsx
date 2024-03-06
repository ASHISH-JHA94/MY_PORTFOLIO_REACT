import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {  toast } from 'react-hot-toast';






export default function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_hnl728g","template_drgnobh", form.current, "GzIa3EVGe2uApduQj")
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          // Optionally, you can reset the form fields after successful submission
          toast.success('Mail Send Successfully');
          
          form.current.reset();
        },
        (error) => {
          console.error('Failed to send email:', error.text);
        }
      );
  };

  return (
    <section className="contactMeSection" id="contactMe">
      <div className="container mx-auto max-w-screen-xl flex flex-col justify-center items-center gap-2">
        <h2>Contact Me</h2>
        
        <h3>Questions, Thoughts,Or Just Want To Say Hello?</h3>

        <div className="contactUsForm">
          <form ref={form} onSubmit={sendEmail}>
            <div className="formFieldContainer">
              <input
                className="formField"
                type="text"
                placeholder="Enter your name"
                name="user_name"
                required
              />
            </div>
            <div className="formFieldContainer">
              <input
                className="formField"
                type="email"
                placeholder="Enter your email address"
                name="user_email"
                required
              />
            </div>
            <div className="formFieldContainer">
              <input
                className="formField"
                type="text"
                placeholder="Enter your Subject"
                name="user_subject"
              />
            </div>
            <div className="formFieldContainer">
              <textarea
                className="formField"
                name="message"
                cols="30"
                rows="10"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <div className="formBtn">
              <button type="submit" className="btn bg-[#e84949]" id="submit-btn">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
