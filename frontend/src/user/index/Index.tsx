import MainBanner from '../design/MainBanner/MainBanner';
import Container from '../design/container/Container'

import Trending from '../design/trending/Trending';
import TendingGames from '../design/trendingGames/TrendingGames';

import TopCategories from '../design/TopCategories/TopCategories';

import StartGame from '../design/StartGame/startGame';


function Index() {
    return (
      <>
        <MainBanner title="Bienvenu sur PokéMort" punchline="BEST GAMING SITE EVER!" />
        <div className="features">
          <Container />
        </div>
        <Trending />
        <TendingGames />
        <TopCategories />
        <StartGame />
      </>
      );
  }
export default Index;
