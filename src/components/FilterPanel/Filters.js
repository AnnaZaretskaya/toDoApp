import Tags from "./components/TagsList";
import React from 'react';
import Content from './components/Content';
import Priorities from './components/Priorities';
import ShowUnDone from './components/ShowUnDone';

export default function Filters() {

    return (
        <aside className="left-aside filters-container">
            <form>

                <ShowUnDone/>

                <Content />

                <Priorities />

                <Tags />

            </form>
        </aside>
    );
}