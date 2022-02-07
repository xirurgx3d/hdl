import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef<any>();

  const sendEmail = (e:any) => {
    e.preventDefault();

    emailjs.sendForm('service_uwzwwm1', 'solarto', form.current, 'user_87qhZ0qw52GqaalcwFFTt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>phone</label>
      <input type="text" name="phone" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
