import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import './ContactUs.css';

const ContactUs = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;
    const whatsappMessage = encodeURIComponent(`Franchise Inquiry\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    const whatsappLink = `https://wa.me/919810701117?text=${whatsappMessage}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <>
    <div className='contact-container'>
    <section> <h1>Contact Us</h1></section>
      <section className="franchise-form-container">
        <h3>For Franchise:</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <input
              type='text'
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="send-button">Send</button>
        </form>
      </section>

      <section className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3244.7873781904564!2d77.1554963754975!3d28.542183975714202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d46f8beafbf%3A0xb9b30ee90086d261!2sLABNEH%20(LUSCIOUS%20MIDDLE%20EASTER%20BITES%20)!5e1!3m2!1sen!2sin!4v1725381131441!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          title="Store Location"
        ></iframe>
      </section>

     
      </div>
    </>
  );
};

export default ContactUs;
