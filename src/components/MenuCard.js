
import React from 'react';
import '../stylesheets/Menu.css'

// Drink Images
import rocks_img from "../images/rocks.svg"
import collins_img from "../images/collins.svg"
import daq_img from "../images/daq.svg"


function MenuCard(props) {

    let drinkModel = props.drinkModel
    let handleClick = props.handleClick

    let drink_images = {
        "rocks": rocks_img,
        "collins": collins_img,
        "daq": daq_img
    }

    return (
        <div className="menu-card" onClick={ handleClick } >
            <img className="drink-image" alt="goodbye" src={ drink_images[drinkModel.image] } />
            <div className="drink-title">
                { drinkModel.name }
            </div>
            <div className="drink-description">
                { drinkModel.description }
            </div>
        </div>
    );
}

export default MenuCard;

