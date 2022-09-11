
import React from 'react';
import '../stylesheets/Menu.css'

import rocks_img from "../images/rocks.svg"

function OrderModal(props) {
    let orderDrinkModel = props.orderDrinkModel;
    let ordering = props.ordering;
    let handleOrder = props.handleOrder;
    let handleCancel = props.handleCancel;

    const handleOutsideClick = (e) => {
        if (e.target.id === 'order-modal-backdrop') {
            handleCancel()
        }
    }

    return (
        <div
            id={'order-modal-backdrop'}
            className={'order-modal-backdrop ' + (ordering && 'modal-ordering')}
            onClick={ handleOutsideClick }
        >
            <div
                id={'order-modal'}
                className={'order-modal ' + (ordering && 'modal-ordering')}
            >
                <div className= 'order-confirmation-drink-title'>
                    { orderDrinkModel.name }
                </div>
                <label htmlFor={'customer-name-input'} style={{ display: 'none'}} >
                    your name here
                </label>
                <img className="order-confirmation-img" alt="goodbye" src={rocks_img} />
                <input id='customer-name-input' className='order-name-input' placeholder="your name"/>
                <button onClick={ handleOrder } className="order-button" >
                    Order
                </button>
            </div>
        </div>
    );
}

export default OrderModal;

