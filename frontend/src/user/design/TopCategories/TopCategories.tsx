import Category1 from '../images/categories-01.jpg';
import Category2 from '../images/categories-02.jpg';
import Category3 from '../images/categories-03.jpg';
import Category4 from '../images/categories-04.jpg';
import Category5 from '../images/categories-05.jpg';

function TopCategories()
{
    return (<>
        <div className="section categories">
        <div className="container">
            <div className="row">
            <div className="col-lg-12 text-center">
                <div className="section-heading">
                <h6>Categories</h6>
                <h2>Top Categories</h2>
                </div>
            </div>
            <div className="col-lg col-sm-6 col-xs-12">
                <div className="item">
                <h4>Action</h4>
                <div className="thumb">
                    <a href="product-details.html">
                    <img alt="" src={Category1} />
                    </a>
                </div>
                </div>
            </div>
            <div className="col-lg col-sm-6 col-xs-12">
                <div className="item">
                <h4>Action</h4>
                <div className="thumb">
                    <a href="product-details.html">
                    <img alt="" src={Category5} />
                    </a>
                </div>
                </div>
            </div>
            <div className="col-lg col-sm-6 col-xs-12">
                <div className="item">
                <h4>Action</h4>
                <div className="thumb">
                    <a href="product-details.html">
                    <img alt="" src={Category3} />
                    </a>
                </div>
                </div>
            </div>
            <div className="col-lg col-sm-6 col-xs-12">
                <div className="item">
                <h4>Action</h4>
                <div className="thumb">
                    <a href="product-details.html">
                    <img alt="" src={Category4} />
                    </a>
                </div>
                </div>
            </div>
            <div className="col-lg col-sm-6 col-xs-12">
                <div className="item">
                <h4>Action</h4>
                <div className="thumb">
                    <a href="product-details.html">
                    <img alt="" src={Category5} />
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </>);
}

export default TopCategories;