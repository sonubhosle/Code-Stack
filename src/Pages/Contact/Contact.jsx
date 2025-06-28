import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../Styles/Contact.css';
import { FaRegUser } from 'react-icons/fa';
import { MdOutlineEmail } from "react-icons/md";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FiInstagram, FiGithub } from "react-icons/fi";
import { MdOutlineWhatsapp } from "react-icons/md";
import { RiFacebookCircleLine } from "react-icons/ri";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className='contact_us'>
      <div className="form_section" data-aos="fade-up">
        <div className="top">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
        </div>
        <div className="bottom">
          <div className="bottom-line-1"></div>
          <div className="bottom-line-2"></div>
          <div className="bottom-line-3"></div>
        </div>

        <div className="form_content flex">
          <div className="illustration" data-aos="fade-right" data-aos-delay="200">
            <img src="https://i.postimg.cc/Mp5qVJ4V/Mobile-bro-1.png" alt="Illustration" />
          </div>

          <form action="" data-aos="fade-left" data-aos-delay="300">
            <h2 data-aos="fade-up" data-aos-delay="400">Contact Us</h2>

            <div className="input_box" data-aos="fade-up" data-aos-delay="500">
              <div className="lable"><FaRegUser /> Username</div>
              <input type="text" name='username' />
            </div>

            <div className="input_box" data-aos="fade-up" data-aos-delay="600">
              <div className="lable"><MdOutlineEmail size={22} /> Email</div>
              <input type="text" name='email' />
            </div>

            <div className="input_box height" data-aos="fade-up" data-aos-delay="700">
              <div className="lable label-2"><BiSolidMessageAltDetail size={22} /> Message</div>
              <textarea name="message" cols="30" rows="10"></textarea>
            </div>

            <div className="input_box" data-aos="fade-up" data-aos-delay="800">
              <button type="submit" className='submit_btn'>Submit <IoIosArrowRoundForward size={28} /></button>
            </div>

            <div className="social_icons">
              <Link data-aos="zoom-in" data-aos-delay="900"><RiFacebookCircleLine /></Link>
              <Link data-aos="zoom-in" data-aos-delay="1000"><FiGithub /></Link>
              <Link data-aos="zoom-in" data-aos-delay="1100"><FiInstagram /></Link>
              <Link data-aos="zoom-in" data-aos-delay="1200"><MdOutlineWhatsapp /></Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
