import './footer.scss';
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from 'react-icons/ai';

export const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Burger Shop</h2>
        <p>We are trying to give you the best taste possible.</p>
        <p>
          <em>We give attentiion to genuine feedback</em>
          <strong>All right received @burgershop</strong>
        </p>
      </div>
      <aside>
        <h4>Follow Us</h4>
        <a href="https://youtube.com/xyz">
          <AiFillInstagram />
        </a>
        <a href="https://instagram.com/xyz">
          <AiFillYoutube />
        </a>
        <a href="https://github.com">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};
