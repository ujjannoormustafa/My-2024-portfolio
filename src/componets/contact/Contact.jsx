import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import insta from "../../assests/image-2.png"
// Emailjs import
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  // Emailjs Intergraion code
  const form = useRef();
  const sendEmail = (e) => {
       e.preventDefault();
    emailjs.sendForm('service_8mekb29', 'template_1p44txb', form.current, 'RmQ8vzGcMBTBuFmCR')
    e.target.reset()
  };

  return (
    <section id='contact'>
      <div className="bg-gradient-to-tr from-purple-400 via-sky-400 to-indigo-500 lg:pl-40 pl-4 mb-3 ">
        <div className="text-start w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block text-white">Let's turn your ideas into captivating experiences.<br/> Ready to start your next project together?</span>
            <span className="block text-[#4db5ff] ">It's today or never.</span>
          </h2>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-8 ">
              <button  className="btn-15 custom-btn"> <a href={"#contact"}>Send Message</a> </button>

            </div>
          </div>
        </div>
      </div>


      <h5 id={"contact"}>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact_option-icons bg-white rounded-full text-black' />
            <h4>Email</h4>
            <h5 className='font__mail'>ujjannoormustafa123@gmail.com</h5>
            <a href="mailto:ujjannoormustafa123@gmail.com" target="_blank" >Send a message</a>
          </article>
      
          <article className="contact__option">
           <img src={insta} className={"contact_option-icons"}/>
            <h4>Linkedin</h4>
            <h5>Dm me on linkedin</h5>
            <a href="https://www.linkedin.com/in/noor-mustafa-ujjan" target="_blank">Send a message</a>
          </article>
      
          <article className="contact__option">
            <img src={insta} className={"contact_option-icons"}/>
            <h4>Instagram</h4>
            <h5>Dm me on instagram</h5>
            <a href="https://www.instagram.com/ujjannoormustafa7" target="_blank">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} className={"contact__option_from"}>
            <div className="bg-[#2C2C6C]">
                <div className="relative bg-inherit">
                    <input type="text" id="username" name="name" required
                           className="peer bg-transparent h-10 w-full c-border text-gray-50 placeholder-transparent ring-2 px-4 ring-gray-50 focus:ring-gray-50 focus:outline-none focus:border-white"
                           placeholder="Type inside me"/><label htmlFor="username"
                            className="absolute cursor-text left-0 -top-3 text-sm text-gray-50 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-100 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Type Your Name</label>
                </div>
            </div>

            <div className="bg-[#2C2C6C]">
                <div className="relative bg-inherit">
                    <input type="email" id="username" name="email" required
                           className="peer bg-transparent h-10 w-full c-border text-gray-50 placeholder-transparent ring-2 px-4 ring-gray-50 focus:ring-gray-50 focus:outline-none focus:border-white"
                           placeholder="Enter Your Email"/><label htmlFor="username"
                                                                className="absolute cursor-text left-0 -top-3 text-sm text-gray-50 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-100 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Type Your Email</label>
                </div>
            </div>

            <div className="bg-[#2C2C6C]  ">
                <div className="relative bg-inherit">
                    <textarea type="" id="username" name="message" rows="13" required
                           className="peer bg-transparent  w-full c-border text-gray-50 placeholder-transparent ring-2 px-4 ring-gray-50 focus:ring-gray-50 focus:outline-none focus:border-white"
                              placeholder="Your Message"></textarea> <label htmlFor="username"
                                                                  className="absolute cursor-text left-0 -top-3 text-sm text-gray-50 bg-inherit mx-1 px-1 py-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-100 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Your Message</label>
                </div>
            </div>


          {/*<input type="text" name='name' placeholder='Your Full Name' required  className={"px-2 "}/>*/}
          {/*<input type="email" name='email' placeholder='Enter Your Email' required />*/}
          {/*<textarea type="" name="message"  rows="7" required placeholder='Your Message'></textarea>textarea*/}
          <button type='submit' className='btn-15 custom-btn'>Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact