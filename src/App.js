import './App.css';
import React from 'react';
import List from './components/ListPanel/List';
import Filters from './components/FilterPanel/Filters';
import AddOrEditPanel from './components/AddEditPanel/AddOrEditPanel';

export default function App() {
    return (
        <div className="app">
            <Filters/>

            <List/>

            <AddOrEditPanel/>
        </div>
    );
}