
import React, { useState, useEffect } from 'react';
import axios from "axios";

import Queue from "./Queue";

import "../stylesheets/Orders.css";

function QueueContainer() {

    let [page, setPage] = useState('outstanding');
    let [queue, setQueue] = useState([]);

    let switchToOutstanding = () => {
        setPage('outstanding')
    };

    let switchToCompleted = () => {
        setPage('completed')
    };

    // useEffect(() => {
    //     axios
    //         .get(`/api/${page}/`)
    //         .then(response => {
    //             setQueue(response.data);
    //         });
    // }, [page] );

    useEffect(() => {
        axios
            .get(`/api/${page}/`)
            .then(response => {
                setQueue(response.data);
            });
    }, [page] );


    return (
        <Queue
            page = {page}
            queue = {queue}
            switchToOutstanding = {switchToOutstanding}
            switchToCompleted = {switchToCompleted}
        />
    );
}

export default QueueContainer;

