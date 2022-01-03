import React from 'react';
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from 'react-icons/all';

const socials = [
  {
    id: 1,
    name: 'facebook',
    link: 'https://www.facebook.com/',
    icon: <AiFillFacebook />,
  },
  {
    id: 2,
    name: 'twitter',
    link: 'https://twitter.com/',
    icon: <AiFillTwitterSquare />,
  },
  {
    id: 3,
    name: 'instagram',
    link: 'https://www.instagram.com/',
    icon: <AiFillInstagram />,
  },
];

const navLinks = [
  {
    id: 1,
    page: 'Home',
    link: '/',
  },
  {
    id: 2,
    page: 'About',
    link: '/about',
  },
  {
    id: 3,
    page: `Contestants`,
    link: '/contestants',
  },
  // { id: 3, page: 'Gallery', link: '/gallery' },
];

export { socials, navLinks };
