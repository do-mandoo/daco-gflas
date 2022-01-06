import React from 'react';
import CookieNoti from '../component/CookieNoti';
import Footer from '../container/Footer';
import Header from '../container/Header';
import Main from '../container/Main';

const Mainpage = () => {
  return (
    <div>
      <Header />
      <div className='hi'></div>
      <Main />
      <Footer />
      <CookieNoti />
    </div>
  );
};

export default Mainpage;
