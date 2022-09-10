
import React from 'react';
import '../stylesheets/Menu.css'

// Drink Images
import rocks_img from "../images/rocks.svg"
import collins_img from "../images/collins.svg"
import daq_img from "../images/daq.svg"


function QueueCard(props) {

    let drinkModel = props.drinkModel;
    let drinkData = props.drinkData;
    let orderModel = props.orderModel;
    let handleComplete = props.handleComplete;

    let drink_images = {
        "rocks": rocks_img,
        "collins": collins_img,
        "daq": daq_img
    };

    return (
        <div className="queue-card">
            {drinkModel == null ? "":
                <img className="queue-card-image" alt="goodbye" src={ drink_images[drinkModel.image] } />
            }
            {drinkModel == null ? "":
                <div className="queue-card-title">
                    {drinkModel.name}
                </div>
            }
            {drinkData == null ? "":
                drinkData.map(ingredient => {
                    return (
                        <div className="queue-card-ingredient-container">
                            <div className="queue-card-ingredient-name">
                                {ingredient.relationship_data.ingredient_amount} {ingredient.relationship_data.ingredient_unit}
                            </div>
                            <div className="queue-card-ingredient-divider">
                                •
                            </div>
                            <div className="queue-card-ingredient-amount">
                                {ingredient.metadata.name}
                            </div>
                        </div>
                    )
                })}
            <hr className="queue-card-hr" />
            <div className="queue-card-customer">
                { orderModel.customer }
            </div>
            <div className="queue-card-time">
                Ordered: { orderModel.order_time }
            </div>
            <button className="queue-complete-button" onClick={handleComplete}>
                COMPLETE
            </button>
        </div>
    );
}

export default QueueCard;

