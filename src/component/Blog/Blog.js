import React, { Component } from 'react';
import images from './images/bg_2.jpg'
import './css/style.scss'

export default class Blog extends Component {
  render() {
    return (
      <div>
        <section className="hero-wrap hero-wrap-2" data-stellar-background-ratio="0.5">
          <div className="overlay"></div>
          <div className="container">
            <div className="row no-gutters slider-text align-items-center justify-content-center">
              <div className="col-md-9 text-center fadeInUp">
                <p className="breadcrumbs mb-2"><span className="mr-2"><a href="index.html">Home <i className="fa fa-chevron-right"></i></a></span> <span>Blog <i className="fa fa-chevron-right"></i></span></p>
                <h1 className="mb-0 bread">Blog</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section bg-light">
          <div className="container">
            <div className="row d-flex">
              <div className="col-md-4  ">
                <div className="blog-entry align-self-stretch">
                  {/* <a href="blog-single.html" className="block-20 rounded" background-images url('images/image_1.jpg');"> 
               </a>   */}
                  <img style={{ width: "400px" }} src={require('./images/image_2.jpg')} />
                  <div className="text p-4 text-center">
                    <h3 className="heading"><a href="#">Work Hard, Party Hard in a Luxury Chalet in the Alps</a></h3>
                    <div className="meta mb-2">
                      <div><a href="#">January 30, 2020</a></div>
                      <div><a href="#">Admin</a></div>
                      <div><a href="#" className="meta-chat"><span className="fa fa-comment"></span> 3</a></div>
                    </div>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4  ">
                <div className="blog-entry align-self-stretch">
                  {/* <a href="blog-single.html" className="block-20 rounded" style="background-image: url('images/image_2.jpg');"> */}
                  <img style={{ width: "400px" }} src={require('./images/services-1.jpg')} />
                  <div className="text p-4 text-center">
                    <h3 className="heading"><a href="#">Work Hard, Party Hard in a Luxury Chalet in the Alps</a></h3>
                    <div className="meta mb-2">
                      <div><a href="#">January 30, 2020</a></div>
                      <div><a href="#">Admin</a></div>
                      <div><a href="#" className="meta-chat"><span className="fa fa-comment"></span> 3</a></div>
                    </div>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4  ">
                <div className="blog-entry align-self-stretch">
                  {/* <a href="blog-single.html" className="block-20 rounded" style="background-image: url('images/image_3.jpg');">
              </a> */}
                  <img style={{ width: "400px" }} src={require('./images/image_3.jpg')} />
                  <div className="text p-4 text-center">
                    <h3 className="heading"><a href="#">Work Hard, Party Hard in a Luxury Chalet in the Alps</a></h3>
                    <div className="meta mb-2">
                      <div><a href="#">January 30, 2020</a></div>
                      <div><a href="#">Admin</a></div>
                      <div><a href="#" className="meta-chat"><span className="fa fa-comment"></span> 3</a></div>
                    </div>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 ">
                <div className="blog-entry align-self-stretch">
                  {/* <a href="blog-single.html" className="block-20 rounded" style="background-image: url('images/image_4.jpg');">
              </a> */}
                  <img style={{ width: "400px" }} src={require('./images/image_1.jpg')} />
                  <div className="text p-4 text-center">
                    <h3 className="heading"><a href="#">Work Hard, Party Hard in a Luxury Chalet in the Alps</a></h3>
                    <div className="meta mb-2">
                      <div><a href="#">January 30, 2020</a></div>
                      <div><a href="#">Admin</a></div>
                      <div><a href="#" className="meta-chat"><span className="fa fa-comment"></span> 3</a></div>
                    </div>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="blog-entry align-self-stretch">
                  {/* <a href="blog-single.html" className="block-20 rounded" style="background-image: url('images/image_5.jpg');">
              </a> */}
                  <img style={{ width: "366px" }} src={require('./images/image_5.jpg')} />
                  <div className="text p-4 text-center">
                    <h3 className="heading"><a href="#">Work Hard, Party Hard in a Luxury Chalet in the Alps</a></h3>
                    <div className="meta mb-2">
                      <div><a href="#">January 30, 2020</a></div>
                      <div><a href="#">Admin</a></div>
                      <div><a href="#" className="meta-chat"><span className="fa fa-comment"></span> 3</a></div>
                    </div>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="blog-entry align-self-stretch">
                  {/* <a href="blog-single.html" className="block-20 rounded" style="background-image: url('images/image_6.jpg');">
              </a> */}
                  <img style={{ width: "400px" }} src={require('./images/services-2.jpg')} />
                  <div className="text p-4 text-center">
                    <h3 className="heading"><a href="#">Work Hard, Party Hard in a Luxury Chalet in the Alps</a></h3>
                    <div className="meta mb-2">
                      <div><a href="#">January 30, 2020</a></div>
                      <div><a href="#">Admin</a></div>
                      <div><a href="#" className="meta-chat"><span className="fa fa-comment"></span> 3</a></div>
                    </div>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col text-center">
                <div className="block-27">
                  <ul>
                    <li><a href="#">&lt;</a></li>
                    <li className="active"><span>1</span></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">&gt;</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

