import React, { Component } from 'react';
import './css/style.scss'
import img from './images/room-1.jpg'

export default class Body extends Component {
	render() {
		return (
			<div>
				<div className="hero-wrap" data-stellar-background-ratio="0.5">
					<div className="overlay"></div>asdasdasdasdas
					<div className="container">
						<div className="col-md-7 ">
							<br />
							<br />
							<br />
							<h2 className="subheading" style={{ color: "red" }}>
								Welcome to Smart Real</h2>
								<div class="input-group input-group-lg">
                        <div class="input-group-prepend"></div>
						<i class="fal fa-search"></i>
                        <input type="hidden" value="1" id="txttypesearch"/>
                        <input type="text" class="form-control" name="k" placeholder="" id="txtkey" autocomplete="off"/>
                        <div className="input-group<-append">
                        <button className="btn btn-orange" type="submit">Tìm Kiếm</button>
                        </div>
                    </div>
						</div>
						<div className="row no-gutters slider-text  align-items-center justify-content-start" data-scrollax-parent="true"></div>
						<section className="ftco-section ftco-services">
							<div className="container">
								<div className="row">
									<div className="col-md-4 d-flex services align-self-stretch px-4 ">
										<div className="d-block services-wrap text-center">
											<img style={{ width: "330px", height: "250px" }} src={require('./images/services-1.jpg')} />
											<div className="media-body py-4 px-3">
												<h3 className="heading">Map Direction</h3>
												<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
												<p><a href="#" className="btn btn-primary">Read more</a></p>
											</div>
										</div>
									</div>
									<div className="col-md-4 d-flex services align-self-stretch px-4 ">
										<div className="d-block services-wrap text-center">
											<img style={{ width: "330px", height: "250px", }} src={require('./images/services-2.jpg')} />
											<div className="media-body py-4 px-3">
												<h3 className="heading">Accomodation Services</h3>
												<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
												<p><a href="#" className="btn btn-primary">Read more</a></p>
											</div>
										</div>
									</div>
									<div className="col-md-4 d-flex services align-self-stretch px-4 ">
										<div className="d-block services-wrap text-center">
											<img style={{ width: "330px", height: "250px" }} src={require('./images/services-3.jpg')} />
											<div className="media-body py-4 px-3">
												<h3 className="heading">Great Experience</h3>
												<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
												<p><a href="#" className="btn btn-primary">Read more</a></p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
						<section className=" bg-light" >
							<div className="container-fluid px-md-0">
								<div className="row no-gutters header-title justify-content-center pb-5 mb-3">
									<div className="col-md-7 heading-section text-center ">
										<h2 className="title">Apartment Room</h2>
									</div>
								</div>
								<div className="row no-gutters">
									<div className="row" >
										<div className="col-md-6">
											<div className="room-wrap d-md-flex">
												<img style={{ width: '50%' }} src={require('./images/room-1.jpg')} />
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
										<div className="col-md-6">
											<div className="room-wrap d-md-flex">
												{/* <a href="#" className="img" style="background-image: url(images/room-2.jpg);"></a> */}
												<img style={{ width: '50%' }} src={require('./images/room-2.jpg')} />
												<div className="half left-arrow d-flex align-items-center">
													<div className="text p-4 p-xl-5 text-center">
														<p className="star mb-0"><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span></p>
														{/* <!-- <p className="mb-0"><span className="price mr-1">$120.00</span> <span className="per">per night</span></p> --> */}
														<h3 className="mb-3"><a href="rooms.html">Standard Room</a></h3>
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

										<div className="col-md-6">
											<div className="room-wrap d-md-flex">
												{/* <a href="#" className="img order-md-last" style="background-image: url(images/room-3.jpg);"></a> */}
												<div className="half right-arrow d-flex align-items-center">
													<div className="text p-4 p-xl-5 text-center">
														<p className="star mb-0"><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span></p>
														{/* <!-- <p className="mb-0"><span className="price mr-1">$120.00</span> <span className="per">per night</span></p> --> */}
														<h3 className="mb-3"><a href="rooms.html">Family Room</a></h3>
														<ul className="list-accomodation">
															<li><span>Max:</span> 3 Persons</li>
															<li><span>Size:</span> 45 m2</li>
															<li><span>View:</span> Sea View</li>
															<li><span>Bed:</span> 1</li>
														</ul>
														<p className="pt-1"><a href="room-single.html" className="btn-custom px-3 py-2">View Room Details <span className="icon-long-arrow-right"></span></a></p>
													</div>
												</div>
												<img style={{ width: '50%' }} src={require('./images/room-3.jpg')} />
											</div>
										</div>
										<div className="col-md-6">
											<div className="room-wrap d-md-flex">
												{/* <a href="#" className="img order-md-last" style="background-image: url(images/room-3.jpg);"></a> */}
												<div className="half right-arrow d-flex align-items-center">
													<div className="text p-4 p-xl-5 text-center">
														<p className="star mb-0"><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span></p>
														{/* <!-- <p className="mb-0"><span className="price mr-1">$120.00</span> <span className="per">per night</span></p> --> */}
														<h3 className="mb-3"><a href="rooms.html">Deluxe Room</a></h3>
														<ul className="list-accomodation">
															<li><span>Max:</span> 3 Persons</li>
															<li><span>Size:</span> 45 m2</li>
															<li><span>View:</span> Sea View</li>
															<li><span>Bed:</span> 1</li>
														</ul>
														<p className="pt-1"><a href="room-single.html" className="btn-custom px-3 py-2">View Room Details <span className="icon-long-arrow-right"></span></a></p>
													</div>
												</div>
												<img style={{ width: '50%' }} src={require('./images/room-6.jpg')} />

											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>

			</div>
		);
	}
}

