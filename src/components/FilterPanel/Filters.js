import React, {Component} from 'react';
import ShowUnDoneItems from './components/ShowUnDoneItems';
import Content from './components/Content';
import Priorities from "./components/Priorities";
import Tags from "./components/Tags";
import { connect } from 'react-redux';
import '../../theme/filter.panel.css';
import { actionsFilters } from './Filters.actions';

class Filters extends Component {

    makeTagList(list) {
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

    render() {
        return (
            <aside className="left-aside filters-container">

                <ShowUnDoneItems
                        isChecked={this.props.filters.showUnDone}
                        onChange={actionsFilters.applyFilter}/>

                <Content
                        value={this.props.filters.content}
                        onChange={actionsFilters.applyFilter}/>

                <Priorities
                        value={this.props.filters.priorities}
                        onChange={actionsFilters.applyFilter}/>

                <Tags
                        onChange={actionsFilters.applyFilter}
                        tags={this.makeTagList(this.props.list)}
                        selectedTags={this.props.filters.selectedTags}/>
            </aside>
        );
    }
}

function mapStateToProps (data) {
    return {
        filters: data.filters,
        list: data.list
    }
}

export default connect(mapStateToProps, { actionsFilters })(Filters);