'use client'
import React from 'react'
import Link from 'next/link'
import styles from './Nav.module.css' // Import the CSS module
import styled from 'styled-components';

// Define the styled button
const StyledButton = styled.button`
  background-color: #333;
  color: #fff;
  border: none;   
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 1rem;
`;

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarUl}>
        <li className={styles.navbarLi}>
          <Link className={styles.navbarLink} href="/" passHref>
            Home
          </Link>
        </li>
        <li className={styles.navbarLi}>
          <Link className={styles.navbarLink} href="/users" passHref>
            Users
          </Link>
        </li>
      </ul>
      {/* Use the styled button */}
      <StyledButton>Logout</StyledButton>
    </nav>
  );
};

export default Navbar
