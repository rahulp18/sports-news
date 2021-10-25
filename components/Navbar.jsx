import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
const MvNabbar = () => {
  return (
    <div className={styles.mvContainer}>
      <div className={styles.bar}>
        <Link href="/" passHref>
          <a>Home</a>
        </Link>
        <Link href="/about" passHref>
          <a>About</a>
        </Link>
        <Link href="/auth" passHref>
          <button className={styles.signin_btn}>SignIn</button>
        </Link>
        <Link href="/help" passHref>
          <a>Help</a>
        </Link>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isOpenbar, setIsOpenBar] = useState(false);

  const switchBar = () => {
    setIsOpenBar((prevState) => !prevState);
  };
  return (
    <>
      <div className={styles.navbar_container}>
        <div>
          <h4 className={styles.logo}>Sports News</h4>
        </div>
        <div className={styles.content}>
          <Link href="/" passHref>
            <a>Home</a>
          </Link>
          <Link href="/about" passHref>
            <a>About</a>
          </Link>
          <Link href="/auth" passHref>
            <button className={styles.signin_btn}>SignIn</button>
          </Link>
          <Link href="/help" passHref>
            <a>Help</a>
          </Link>
        </div>
        <div className={styles.down_bar} onClick={switchBar}>
          {isOpenbar ? <ImCross /> : <FaBars />}
        </div>
      </div>

      {isOpenbar && <MvNabbar />}
    </>
  );
};

export default Navbar;
