import React from 'react';
import Logo from './logo.png'

function header() {
  return (<>
  <div className="container">
  <div className="row">
    <div className="col-12">
      <nav className="main-nav">
        {/* ***** Logo Start ***** */}
        <a href="/" className="logo">
          { /* *** Image à loder *** */}
          <img src={Logo} alt="" style={{width: '158px'}} />
        </a>
        {/* ***** Logo End ***** */}
        {/* ***** Menu Start ***** */}
        <ul className="nav">
          <li><a href="index.html" className="active">Accueil</a></li>
          <li><a href="shop.html">Pokédex</a></li>
          <li><a href="product-details.html">Démarrer le jeu</a></li>
          <li><a href="contact.html">Nous contacter</a></li>
          <li><a href="#">Se connecter</a></li>
        </ul>   
        <a className="menu-trigger">
          <span>Menu</span>
        </a>
        {/* ***** Menu End ***** */}
      </nav>
    </div>
  </div>
</div>

  </>);

}

export default header;