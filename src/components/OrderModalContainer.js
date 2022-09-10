
import React, { useState } from 'react';

import OrderModal from "./OrderModal";


function OrderModalContainer(props) {

    let orderDrinkModel = props.orderDrinkModel;
    let ordering = props.ordering;
    let handleOrder = props.handleOrder;
    let handleCancel = props.handleCancel;

    return (
        <OrderModal
            orderDrinkModel={ orderDrinkModel }
            ordering={ ordering }
            handleOrder={ handleOrder }
            handleCancel={ handleCancel }
        />
    );
}

export default OrderModalContainer;

