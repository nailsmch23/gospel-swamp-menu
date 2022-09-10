
import React from 'react';

import QueueCardContainer from "./QueueCardContainer";
import '../stylesheets/Orders.css'

function Queue(props) {

    let page = props.page;
    let queue = props.queue;
    let switchToOutstanding = props.switchToOutstanding;
    let switchToCompleted = props.switchToCompleted;

    return (
        <div className="queue">
            <h1>
                ORDER QUEUE
            </h1>
            <hr className="queue-hr"/>
            <div className="tab-container">
                <div
                    onClick={switchToOutstanding}
                    className={`queue-tab outstanding-tab ${page === 'outstanding' ? 'queue-tab-active': ''}` }
                >
                    Outstanding
                </div>
                <div
                    onClick={switchToCompleted}
                    className={`queue-tab completed-tab ${page === 'completed' ? 'queue-tab-active': ''}` }
                >
                    Completed
                </div>
            </div>
            <div className="queue-list">
                { queue.map(orderModel => {
                    return (
                        <QueueCardContainer
                            orderModel = { orderModel }
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default Queue;

