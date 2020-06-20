import React, { Component } from 'react';
import './css/style.scss'
import hinh1 from './images/room-1.jpg'
import hinh2 from './images/work-2.jpg'
import hinh3 from './images/work-5.jpg'

class Product extends Component {
    render() {
        return (
            <div>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-50"
                                src={hinh1}
                                alt="First slide" />
                            <div className="carousel-item">
                                <img className="d-block w-100"
                                    src={hinh2}
                                    alt="Second slide" />
                                <div className="carousel-item">
                                    <img className="d-block w-100"
                                        src={hinh3}
                                        alt="Third slide" />
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div classNameName="row no-gutters">
                    <div className="row" >
                        <div className="col-md-12">
                            <div className="room-wrap d-md-flex">
                                <img style={{ width: '70%' }} />
                                {/* <a href="#" className="img" style="background-image: url(images/room-1.jpg);"></a> */}
                                <div className="half left-arrow d-flex align-items-center">
                                    <div className="text p-4 p-xl-5 text-center">
                                        <p className="star mb-0"><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span></p>
                                        {/* <!-- <p className="mb-0"><span className="price mr-1">$120.00</span> <span className="per">per night</span></p> --> */}
                                        <h3 className="mb-3"><a href="rooms.html">Suite Room</a></h3>
                                        <ul className="list-accomodation">
                                            <li><span>Max:</span> 3 Persons</li>
                                            <li><span>Size:</span> 45 m2</li>
                                            <li><span>View:</span> Sea View</li>
                                            <li><span>Bed:</span> 1</li>
                                        </ul>
                                        <p className="pt-1"><a href="room-single.html" className="btn-custom px-3 py-2">View Room Details <span className="icon-long-arrow-right"></span></a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>>
            </div>
            </div>

        )

    }
}

export default Product;