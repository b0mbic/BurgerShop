import './about.scss';

import { Link } from 'react-router-dom';
import { RiFindReplaceLine } from 'react-icons/ri';
import me from './../../../public/assets/skj.jpg';

export const AboutPage = () => {
  return (
    <div className="about">
      <main>
        <h1>ABOUT US</h1>
        <article>
          <h4>BURGER SHOP</h4>
          <p>
            This is BurgerShop. The place for most tasty burgers on the entire
            earth.
          </p>
          <p>
            Explore the various typesof food and burgers. Click below to see the
            menu.
          </p>
          <Link to="/menupage">
            <RiFindReplaceLine />
          </Link>
        </article>
        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Nelson</h3>
            </div>
            <p>
              I am Nelson, the founder of Burger Shop. Affiliated to God
              Taste...
            </p>
          </article>
        </div>
      </main>{' '}
    </div>
  );
};
