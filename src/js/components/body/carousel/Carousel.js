import React, { Component } from 'react';

import '../../../../css/carousel.css';

/* carousel */
class Carousel extends Component {

    /* checks for default img */
    imgDefaultChecker(id){
        if (id > 0){                                    
            return "item";
        } else {   
            return "item active";
        }
    }

    render() {
        return(
            <div>

                {/* carousel */}
                <div className="container-fluid modal-carousel">
                    <div className="row-fluid">
                        <div id="modal-carousel" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">

                                {/* all project imgs */}
                                {this.props.imgs.map((item) =>
                                        <div key={item.id} className={this.imgDefaultChecker(item.id)}>
                                            <img className="carousel-imgs" src={item.img} role="presentation"/>
                                        </div>
                                )}

                            </div>
                        </div>
                    </div> {/* end row */}

                    {/* carousel controls */}
                    <div className="row-fluid">
		                <div className="carousel-controls">
		                    <a className="left carousel-control carousel-btn-right" href="#modal-carousel" data-slide="prev">
		                        <span className="glyphicon glyphicon-chevron-left"></span>
		                    </a>
		                    <a className="right carousel-control carousel-btn-left" href="#modal-carousel" data-slide="next">
		                        <span className="glyphicon glyphicon-chevron-right"></span>
		                    </a>
                		</div>
                	</div> {/* end row */}
         		</div> {/* end container */}
            </div> /* end div */
        );
    }
}


export default Carousel;
