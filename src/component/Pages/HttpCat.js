import React, { useState } from 'react';
import styles from '../Styles/HttpCat.module.css';
import Footer from '../Layouts/Footer.js';
import Navbar from '../Layouts/Navbar.js';

function HttpCat() {
    const [code, setCode] = useState('');
  
    return (
        
      <div className={styles.App}>
        <Navbar/>
          <div className={styles.containerInput}>
            <label>Insira o codigo de status HTTP</label>
            <input type="text" value={code} onChange={event => setCode(event.target.value)} placeholder="Insira o codigo"/>
            {code && (
              <img className={styles.ImgCat} src={`https://http.cat/${code}`} alt="Http Cat"/>
            )}
          </div>
        <Footer/>
      </div>
    );
  }

  export default HttpCat;