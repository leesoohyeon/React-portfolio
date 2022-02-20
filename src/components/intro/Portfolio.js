import React, { Component } from 'react';
import Slider from "react-slick";


const cssstyle = `
	.container {
        position: relative;
		margin: 0 auto;
		padding: 0px 40px 40px 40px;
		width: 95%;
        height:500px;
	}

	.slick-next:before, .slick-prev:before {
			color: #000;
	}
	.center .slick-center img {
			color: #e67e22;
			opacity: 1;
			-ms-transform: scale(1.08);
			transform: scale(1.12);
            
	}
	.center img {
			transition: all .3s ease;
	}
    
    img {
        margin: 10px;
        padding: 2%;
        position: relative;
        text-align: center;
        width:400px;
        height:350px;
        
    }

    .jb-a:hover img {
        opacity: 0.5;
      }
    .jb-b:hover img {
       opacity: 0.5;
      }
    .jb-c:hover img {
        opacity: 0.5;
      }
    .jb-d:hover img {
        opacity: 0.5;
      }
    .jb-e:hover img {
        opacity: 0.5;
      }
    .jb-f:hover img {
        opacity: 0.5;
      }
    .jb-g:hover img {
        opacity: 0.5;
      }
	`

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "5px",
            slidesToShow: 3,
            speed: 500
        };
        return (
            <div className="container">
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                <style>{cssstyle}</style>
                <h2>Portfolio</h2>
                <Slider {...settings}>
                    <div>
                        <a className="jb-a" href="https://su-hyun07.tistory.com/5" target="_blank">
                            <img src={require('../../img/book.jpg')}/>
                        </a>
                    </div>
                    <div>
                    <a className="jb-b" href="https://su-hyun07.tistory.com/10" target="_blank">
                        <img src={require('../../img/Car.jpg')}/>
                        </a>
                    </div>
                    <div>
                        <a className="jb-c" href="https://su-hyun07.tistory.com/6" target="_blank">
                        <img src={require('../../img/trafficapi.png')}/>
                        </a>
                    </div>
                    <div>
                        <a className="jb-d" href="https://su-hyun07.tistory.com/9" target="_blank">
                        <img src={require('../../img/Lotto.png')}/>
                        </a>
                    </div>
                    <div>
                        <a className="jb-e" href="https://su-hyun07.tistory.com/8" target="_blank">
                        <img src={require('../../img/JSP.jpg')}/>
                        </a>
                    </div>
                    <div>
                        <a className="jb-f" href="https://su-hyun07.tistory.com/7" target="_blank">
                        <img src={require('../../img/javaDB.png')}/>
                        </a>
                    </div>
                    <div>
                        <a className="jb-g" href="https://su-hyun07.tistory.com/2" target="_blank">
                        <img src={require('../../img/shopping.jpg')}/>
                        </a>
                    </div>
                </Slider>
            </div>
        );
    }
}