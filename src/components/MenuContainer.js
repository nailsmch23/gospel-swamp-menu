
import React, { useState, useEffect } from 'react';
import axios from "axios";

import Menu from "./Menu";


function MenuContainer() {

    let [drinksList, setDrinksList] = useState([]);
    let [orderDrinkModel, setOrderDrinkModel] = useState({name: ''});
    let [ordering, setOrdering] = useState(false);

    useEffect(() => {
        axios
            .get("/api/drinks/")
            .then(response => {
                setDrinksList(response.data);
            });
    }, [] );

    const handleClick = drinkModel => {
        setOrderDrinkModel(drinkModel);
        setOrdering(true);
    }

    const handleOrder = () => {
    //     setOrdering(false);
    //     axios
    //         .post("/api/drinks/", {drinkModel: orderDrinkModel, })
    //         .then(response => {
    //             console.log(response.data);
    //         }) ;
    //     console.log(orderDrinkModel);
        console.log('roder');
    }

    const handleCancel = () => {
        setOrdering(false);
    }

    return (
        <Menu drinksList={ drinksList }
              ordering={ ordering }
              handleClick={ handleClick }
              handleOrder={ handleOrder }
              handleCancel={ handleCancel }
              orderDrinkModel={ orderDrinkModel }
        />
    );
}

export default MenuContainer;

