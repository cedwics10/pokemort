import TopGame1 from '../images/top-game-01.jpg';
import TopGame2 from '../images/top-game-02.jpg';
import TopGame3 from '../images/top-game-03.jpg';
import TopGame4 from '../images/top-game-04.jpg';
import TopGame5 from '../images/top-game-05.jpg';
import TopGame6 from '../images/top-game-06.jpg';

function TrendingGames()
{
    return (<>
        <div className="section most-played">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="section-heading">
                    <h6>TOP GAMES</h6>
                    <h2>Most Played</h2>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="main-button">
                    <a href="shop.html">View All</a>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6">
                    <div className="item">
                    <div className="thumb">
                        <a href="product-details.html">
                        <img alt="" src={TopGame1} />
                        </a>
                    </div>
                    <div className="down-content">
                        <span className="category">Adventure</span>
                        <h4>Assasin Creed</h4>
                        <a href="product-details.html">Explore</a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6">
                    <div className="item">
                    <div className="thumb">
                        <a href="product-details.html">
                        <img alt="" src={TopGame2} />
                        </a>
                    </div>
                    <div className="down-content">
                        <span className="category">Adventure</span>
                        <h4>Assasin Creed</h4>
                        <a href="product-details.html">Explore</a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6">
                    <div className="item">
                    <div className="thumb">
                        <a href="product-details.html">
                        <img alt="" src={TopGame3} />
                        </a>
                    </div>
                    <div className="down-content">
                        <span className="category">Adventure</span>
                        <h4>Assasin Creed</h4>
                        <a href="product-details.html">Explore</a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6">
                    <div className="item">
                    <div className="thumb">
                        <a href="product-details.html">
                        <img alt="" src={TopGame4} />
                        </a>
                    </div>
                    <div className="down-content">
                        <span className="category">Adventure</span>
                        <h4>Assasin Creed</h4>
                        <a href="product-details.html">Explore</a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6">
                    <div className="item">
                    <div className="thumb">
                        <a href="product-details.html">
                        <img alt="" src={TopGame5} />
                        </a>
                    </div>
                    <div className="down-content">
                        <span className="category">Adventure</span>
                        <h4>Assasin Creed</h4>
                        <a href="product-details.html">Explore</a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6">
                    <div className="item">
                    <div className="thumb">
                        <a href="product-details.html">
                        <img alt="" src={TopGame6} />
                        </a>
                    </div>
                    <div className="down-content">
                        <span className="category">Adventure</span>
                        <h4>Assasin Creed</h4>
                        <a href="product-details.html">Explore</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>);
}

export default TrendingGames;