// import React, { useContext } from 'react';
// import { motion } from 'framer-motion';
// import Popup from 'reactjs-popup';
// import { ShopContext } from '../../../../context/shop-context';

// export const MenuCard = ({
//   itemNum,
//   burgerSrc,
//   price,
//   title,
//   addToCartHandler,
//   delay = 0,
// }) => {
//   const { addToCart } = useContext(ShopContext);
//   return (
//     <motion.div
//       className="menuCard"
//       initial={{
//         x: '-100%',
//         opacity: 0,
//       }}
//       whileInView={{
//         x: 0,
//         opacity: 1,
//       }}
//       transition={{
//         delay,
//       }}
//     >
//       <div></div>
//       <main>
//         <img src={burgerSrc} alt={itemNum} />
//         <h5>₹{price}</h5>
//         <p>{title}</p>
//         {/* <Popup
//           trigger={ */}
//         <button
//           onClick={() => {
//             addToCart(itemNum);
//             console.log('Button clicked');
//           }}
//         >
//           Buy Now
//         </button>
//         {/* // } > */}
//         {/* <div>Popup Content</div>
//         </Popup> */}
//         {/* >
//           <div
//             style={{
//               color: 'red',
//               transform: 'translate(0%,-500%)',
//               backgroundColor: '#fff',
//               padding: '10px',
//               borderRadius: '5px',
//               boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
//             }}
//           >
//             Added to cart!
//           </div>
//         </Popup> */}
//       </main>
//     </motion.div>
//   );
// };

import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import Popup from 'reactjs-popup';
import { ShopContext } from '../../../../context/shop-context';

export const MenuCard = ({
  itemNum,
  burgerSrc,
  price,
  title,
  addToCartHandler,
  delay = 0,
}) => {
  const { addToCart } = useContext(ShopContext);
  const [clickedCard, setClickedCard] = useState(null);

  const handleBuyNowClick = (itemNum) => {
    addToCart(itemNum);
    setClickedCard(itemNum);
  };

  const handleClosePopup = () => {
    setClickedCard(null);
  };

  return (
    <motion.div
      className="menuCard"
      initial={{
        x: '-100%',
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        delay,
      }}
    >
      <div></div>
      <main>
        <img src={burgerSrc} alt={itemNum} />
        <h5>₹{price}</h5>
        <p>{title}</p>
        <button onClick={() => handleBuyNowClick(itemNum)}>Buy Now</button>
        {clickedCard === itemNum && (
          <Popup open={true} onClose={handleClosePopup}>
            <div
              style={{
                color: 'red',
                transform: 'translate(0%,-500%)',
                backgroundColor: '#fff',
                padding: '10px',
                borderRadius: '5px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
              }}
            >
              Added to cart!
            </div>
          </Popup>
        )}
      </main>
    </motion.div>
  );
};
