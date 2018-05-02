import React from 'react';
import listData from '../helpers/list_data'

export default (props) => {
    console.log('List Data:', listData);

    const listElements = listData.map((item, index) => {
        return <li className="collection-item" key={index}>{item.title}</li>
    });
    return (
        <div>
            <h3 className="center">List will be here</h3>
            <ul className="collection">
                {listElements}
            </ul>
        </div>
    )
}