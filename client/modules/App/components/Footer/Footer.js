import React from 'react';

import ContactWidget from './components/ContactWidget';
import QuestionsWidget from './components/QuestionsWidget';
import SocialMediaWidget from './components/SocialMediaWidget';
import NewsLetterWidget from './components/NewsLetterWidget';

// Import Style
import s from './Footer.css';

export function Footer() {
  return (
    <div className={s.footer}>
      <aside className={s['pre-footer']}>
        <div className="row">
          <div className="">
            <ContactWidget />
          </div>
          <div className="">
            <QuestionsWidget />
          </div>
          <div className="">
            <SocialMediaWidget />
            <NewsLetterWidget />
          </div>
        </div>
      </aside>
      <footer>
        <p><small>&copy; 2016 &middot; Clothes Doctor</small></p>
      </footer>
    </div>
  );
}

export default Footer;
