
import React from 'react';

import MenuCardContainer from "./MenuCardContainer";
import OrderModalContainer from "./OrderModalContainer";
import '../stylesheets/Menu.css'

function Menu(props) {
    let drinksList = props.drinksList;
    let orderDrinkModel = props.orderDrinkModel;
    let ordering = props.ordering;
    let handleClick = props.handleClick;
    let handleOrder = props.handleOrder;
    let handleCancel = props.handleCancel;

    return (
        <div>
            <div className="title-container">
                <div className="title">
                    GOSPEL<br/>SWAMP<br/>BAR
                </div>
            </div>
            <hr className="title-hr"/>
            <div className="menu-header">
                Summer 2022<br/>
            </div>
            <div className="menu">
                { drinksList.map(drinkModel => {
                    return <MenuCardContainer
                        drinkModel={ drinkModel }
                        handleClick={ handleClick }
                    />
                })}
            </div>
            <OrderModalContainer
                ordering={ ordering }
                orderDrinkModel={ orderDrinkModel }
                handleOrder={ handleOrder }
                handleCancel={ handleCancel }
            />
        </div>
    );
}

export default Menu;

