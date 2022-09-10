
import React, { useState, useEffect } from 'react';
import axios from "axios";

import QueueCard from "./QueueCard";


function QueueCardContainer(props) {

    let orderModel = props.orderModel;

    let [drinkModel, setDrinkModel] = useState(null);
    let [drinkData, setDrinkData] = useState(null);

    let handleComplete = () => {
        axios
            .post(`/api/orders/${ orderModel.id }/complete`)
            .then(response => {
                console.log(response.data);
            });
    }

    useEffect(() => {
        axios
            .get(`/api/drinks/${ orderModel.drink_model }/`)
            .then(response => {
                setDrinkModel(response.data);
            });
        axios
            .get(`/api/drinks/${ orderModel.drink_model }/get-ingredients`)
            .then(response => {
                setDrinkData(response.data);
            });
    }, [orderModel] );

    return (
        <QueueCard
            drinkModel={ drinkModel }
            drinkData={ drinkData }
            orderModel={ orderModel }
            handleComplete={ handleComplete }
        />
    );
}

export default QueueCardContainer;

