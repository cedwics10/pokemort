
function StartGame()
{
    return (<>
        <div className="section cta">
            <div className="container">
                <div className="row">
                <div className="col-lg-5">
                    <div className="shop">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="section-heading">
                            <h6>Inscription</h6>
                            <h2>
                            Il est tout à fait possible de démarrer une partie de jeu{" "}
                            <em>Pokémort</em>
                            </h2>
                        </div>
                        <p>Il suffit tout simplement de s'inscrire avant de commencer</p>
                        <div className="main-button">
                            <a href="shop.html">S'inscrire</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-5 offset-lg-2 align-self-end">
                    <div className="subscribe">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="section-heading">
                            <h6>NEWSLETTER</h6>
                            <h2>
                            Inscrivez-vous à notre newsletter !{" "}
                            <em>(bientôt disponible)</em>
                            </h2>
                        </div>
                        <div className="search-input">
                            <form action="#" id="subscribe">
                            <input
                                aria-describedby="emailHelp"
                                className="form-control"
                                disabled
                                id="exampleInputEmail1"
                                placeholder="Disponible bientôt."
                                type="email"
                            />
                            <button disabled type="submit">
                                S'inscrire
                            </button>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>);
}

export default StartGame;