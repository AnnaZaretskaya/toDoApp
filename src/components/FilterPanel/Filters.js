import Tags from "./components/Tags";
import React, {Component} from 'react';
import Content from './components/Content';
import Priorities from './components/Priorities';
import ShowUnDoneItems from "./components/ShowUnDoneItems";
import { connect } from 'react-redux';
import { compose, lifecycle } from "recompose";
import { actionsFilters } from './Filters.actions';

let actions = {...actionsFilters};

export class Filters extends Component {
    render() {
        return (
            <aside className="left-aside filters-container">
                <form>

                    <ShowUnDoneItems
                            value={this.props.filters.showUnDone}
                            onChange={actions.applyFilter}/>

                    <Content
                            value={this.props.filters.content}
                            onChange={actions.applyFilter}/>

                    <Priorities
                            value={this.props.filters.priorities}
                            onChange={actions.applyFilter}/>

                    <Tags
                            onChange={actions.applyFilter}
                            tags={this.props.uniqueTagList}
                            selectedTags={this.props.filters.selectedTags}/>

                </form>
            </aside>
        );
    }
}

export function mapStateToProps (data) {
    function makeTagList(list) {
        let allTags = [];
        let uniqueTagList = [];

        list.forEach((item) => {
            if (item.tags) {
                allTags = allTags.concat(item.tags)
            }
        });
        allTags.forEach(tag => {
            if (!uniqueTagList.includes(tag)) {
                uniqueTagList.push(tag);
            }
        });
        return uniqueTagList;
    }

    return {
        filters: data.filters,
        uniqueTagList: makeTagList(data.list)
    }
}

const enhance = compose(
    connect(mapStateToProps),
    lifecycle({
        componentDidCatch(error) {
            console.log('Oops, error!', error);
        }
    })
);

export default enhance(Filters);