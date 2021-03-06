import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import * as FaIcons  from 'react-icons/fa';
import classes from './NavbarUpper.module.css';
const navbar =()=>{
   return(
       <div class="bg-success row" >
           <ul class="nav justify-content-end pr-5 col-sm-12 col-11">
                <li class="nav-item d-flex ">
                    <a class="nav-link " 
                    className={classes.wishlist_icon}><FaIcons.FaHeart/></a>  
                    <a class="nav-link active text-light" href="#">Wishlist </a> 
                </li>
                <li class="nav-item ">
                    <a class="nav-link text-light" href="#">My Account</a>
                </li>
            </ul>
       </div>
   )}




export  default navbar; 