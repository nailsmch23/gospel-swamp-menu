
import React from 'react';

import MenuCard from "./MenuCard";


function MenuCardContainer(props) {

    let drinkModel = props.drinkModel

    const handleClick = () => {
        props.handleClick(drinkModel)
    }

    return (
        <MenuCard
            drinkModel={ drinkModel }
            handleClick={ handleClick }
        />
    );
}

export default MenuCardContainer;

