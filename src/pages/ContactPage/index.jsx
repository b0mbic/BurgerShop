import './contact.scss';

import Popup from 'reactjs-popup';

export const ContactPage = () => {
  return (
    <main className="contact ">
      <form>
        <h2>CONTACT US</h2>
        <input type="text" placeholder="user"></input>
        <input type="email" placeholder="user@email-here.com"></input>
        <textarea placeholder="Feedback here please"></textarea>
        <Popup trigger={<button type="button">Send</button>}>
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
            Thank you for contacting us! We will get back to you shortly.
          </div>
        </Popup>
      </form>
      <div className="formBorder">
        <div>
          <img src="./assets/burger1.png" />
        </div>
      </div>
    </main>
  );
};
