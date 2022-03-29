import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Zack Zhu</h2>
        <p><a href="mailto:michael.l.dangelo@gmail.com">szhu76@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Zack. I a fan of coding and basketball.<br/>
        I am a Senior Software Engineer at <a href="https://www.nab.com.au/">NAB</a> and previously worked at <a href="https://www.aesop.com/">Aesop</a>.
      </p>
      {/* <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul> */}
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Zack Zhu <Link to="/">https://zack76.github.io/homepage</Link>.</p>
    </section>
  </section>
);

export default SideBar;
