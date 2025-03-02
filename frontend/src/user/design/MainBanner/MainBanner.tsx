import BannerImage from '../images/banner-image.jpg';

import HomeLogo from '../HomeLogo/homeLogo';

const MainBanner = ({title, punchline}) => {
  return (<>
    <div className="main-banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="caption header-text">
              <h6>{title}</h6>
              <h2>{punchline}</h2>
              <p>Pokémort est un projet de développement Nuzlocke challenge créé pour pouvoir reproduire l'expérience de notre enfance : jouer à Pokémon sur sa Game boy, tout en enlevant les phases les moins intéressantes du jeu (se promener pendant des heures et faire éclore des oeufs)</p>
              <div className="search-input">
                <form id="search" action="#">
                  <input type="text" placeholder="Rechercher dans le PokéDEX" id="searchText" name="searchKeyword" />
                  <button role="button">Search Now</button>
                </form>
              </div>
            </div>
          </div>
          <HomeLogo />
        </div>
      </div>
    </div>
  </>);
}

export default MainBanner;