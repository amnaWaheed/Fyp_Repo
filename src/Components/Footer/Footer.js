import React from 'react'
import * as Boot from "react-bootstrap";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import classes from './Footer.module.css';
const Footer = () => {
    return (
        <div className={classes.main_footer}>
            <div class='container'>
                <div class='row'>
                   {/* Column1  */}
                   <div class='col'>
                      <h4>U can contact us </h4>
                      <ul class='list-unstyled'>
                       <li>0307-6821543</li>
                       <li>KHalid road sultan street</li>
                       <li>Pakistan</li>
                      </ul>
                   </div>
                   {/* Column2 */}
                   <div class='col'>
                      <h4> available categories </h4>
                      <ul class='list-unstyled'>
                       <li>clothes</li>
                       <li>accessories</li>
                       <li>shoes</li>
                       <li>kitchen accessries</li>
                       <li>animals</li>
                       <li>Vehicles</li>
                      </ul>
                   </div>
                 
                   {/* Column3  */}
                   <div class='col'>
                      <h4>Let us help you</h4>
                      <ul class='list-unstyled'>
                       <li>Covid-19 prevention</li>
                       <li>Your accounts</li>
                       <li>Your orders</li>
                       <li>Help</li>
                      </ul>
                   </div>
                 
                </div>
                <hr/>
            <div class='row'>
              <p class='col-sm'>
               &copy;{new Date().getFullYear()}
               |Ecommerece with Scrapping |All Rights Reserved | Terms of Services| Privacy
              </p>
            </div>
            </div>
            
        </div>
    )
}

export default Footer
