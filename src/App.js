import React from 'react';
import Header from './components/Header';
import ItemList from './components/ItemList';

const App = () => {
    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

    return (
        <div>
            <Header />
            <div style={{ padding: '20px' }}>
                <h2>Item List</h2>
                <ItemList items={items} />
            </div>
        </div>
    );
};

export default App;
