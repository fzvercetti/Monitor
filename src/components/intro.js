import React from "react";
import rgb from '../images/rgb_2023-07-15.png';
import ndvi from '../images/ndvi_2023-07-15.png';
import ndwins from '../images/ndwins_2023-07-15.png';
import 'bootstrap/dist/css/bootstrap.css';

function Intro() {
return(
    <div class="container">
        <div class="row">
            <div class="col-sm">
                <div class="card">
                    <img class="card-img-top" src={rgb} alt="Card image cap" style={{width: '400px', height: '243px'}} />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
             </div>
            <div class="col-sm">
                <div class="card">
                    <img class="card-img-top" src={ndvi} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div> 
            </div>
            <div class="col-sm">
                <div class="card">
                    <img class="card-img-top" src={ndwins} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div> 
            </div>
        </div>
    </div>
    );
}

export default Intro;