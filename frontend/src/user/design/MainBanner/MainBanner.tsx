
function MainBanner()
{
    return (<>
    <div className="main-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="caption header-text">
                <h6>Bienvenu sur PokéMort</h6>
                <h2>BEST GAMING SITE EVER!</h2>
                <p>Pokémort est un projet de développement Nuzlocke challenge créé pour pouvoir reproduire l'expérience de notre enfance : jouer à Pokémon sur sa Game boy, tout en enlevant les phases les moins intéressantes du jeu (se promener pendant des heures et faire éclore des oeufs)</p>
                <div className="search-input">
                  <form id="search" action="#">
                    { /* onkeypress="handle" */ }
                    <input type="text" placeholder="Rechercher dans le PokéDEX" id="searchText" name="searchKeyword" />
                    <button role="button">Search Now</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-2">
              <div className="right-image">
                <img src="assets/images/banner-image.jpg" alt="" />
                <span className="price"><a href="" style={{color: 'white'}}>COMMENCER</a></span>
              </div>
            </div>
          </div>
        </div>
    </div>
    </>);
}

export default MainBanner;