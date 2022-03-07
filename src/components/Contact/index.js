import React, { useState } from 'react';


function ContactForm(){
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    //jsx
    function handleChange(e) {
      setFormState({...formState, [e.target.name]: e.target.value })
    }
    
    
    function handleSubmit(e) {
      e.preventDefault();
    console.log(formState);
    }
    return (
        <section>
          <h1>Contact me</h1>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" defaultValue={name} onChange={handleChange} name="name" />
            </div>
            <div>
              <label htmlFor="email">Email address:</label>
              <input type="email" name="email" defaultValue={email} />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea name="message" defaultValue={message} rows="5"  />
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
        );
        
}

export default ContactForm;