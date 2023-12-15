import './header.scss';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUser } from 'react-icons/fa';
import { FiShoppingCart, FiLogIn } from 'react-icons/fi';

import { IoFastFoodOutline } from 'react-icons/io5';
import { DropdownMenu } from '../DropDownMenu';

export const Header = () => {
  const [onMenuOpen, setOnMenuOpen] = useState(false);
  return (
    <>
      <nav>
        <motion.div initial={{ x: '-100%' }} whileInView={{ x: 0 }}>
          <IoFastFoodOutline />
        </motion.div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/contactus">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/cart">
            <FiShoppingCart />
          </Link>
        </div>
        <DropdownMenu setOnMenuOpen={setOnMenuOpen} onMenuOpen={onMenuOpen} />
      </nav>
    </>
  );
};
