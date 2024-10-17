import React from 'react';

const ItemList = ({ items }) => {
    return (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
            {items.map((item, index) => (
                <li key={index} style={{ padding: '10px', border: '1px solid #ddd', margin: '5px', borderRadius: '5px' }}>
                    {item}
                </li>
            ))}
        </ul>
    );
};

export default ItemList;
