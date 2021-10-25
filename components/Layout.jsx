import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
const Layout = ({ title, description, keyowrds, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="descriptions" content={description} />
        <meta name="keywords" content={keyowrds} />
      </Head>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
