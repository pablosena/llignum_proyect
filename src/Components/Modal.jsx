import React, { useState } from 'react';
import './Modal.css';

function Modal() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleClickOutside = (event) => {
    if (event.target.id === 'id01') {
      setModalVisible(false);
    }
  };

  return (
    <div onClick={handleClickOutside}>
      <h2>Modal Login Form</h2>
      <button onClick={() => setModalVisible(true)} style={{ width: 'auto' }}>
        Login
      </button>

      {modalVisible && (
        <div id="id01" className="modal">
          <form className="modal-content animate" action="/action_page.php" method="post">
            <div className="imgcontainer">
              <span onClick={() => setModalVisible(false)} className="close" title="Close Modal">
                &times;
              </span>
              <img src="img_avatar2.png" alt="Avatar" className="avatar" />
            </div>

            <div className="container">
              <label htmlFor="uname"><b>Username</b></label>
              <input type="text" placeholder="Enter Username" name="uname" required />

              <label htmlFor="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required />

              <button type="submit">Login</button>
              <label>
                <input type="checkbox" checked="checked" name="remember" /> Remember me
              </label>
            </div>

            <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
              <button type="button" onClick={() => setModalVisible(false)} className="cancelbtn">
                Cancel
              </button>
              <span className="psw">Forgot <a href="#">password?</a></span>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Modal;
