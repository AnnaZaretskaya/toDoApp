import './App.css';
import React, {Component} from 'react';
import List from './components/ListPanel/List';
import Filters from './components/FilterPanel/Filters';
import AddOrEditPanel from './components/AddEditPanel/AddOrEditPanel';

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Filters/>

                <List/>

                <AddOrEditPanel/>
            </div>
        );
    }
}