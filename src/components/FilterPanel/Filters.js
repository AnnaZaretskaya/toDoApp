import React, {Component} from 'react';
import ShowUnDoneItemsWithHandler from './components/ShowUnDoneItems';
import ContentWithHandler from './components/Content';
import PrioritiesWithHandler from "./components/Priorities";
import TagsWithHandler from "./components/Tags";
import { connect } from 'react-redux';
import '../../theme/filter.panel.css';
import { actionsFilters } from './Filters.actions';

class Filters extends Component {
    render() {
        return (
            <aside className="left-aside filters-container">

                <ShowUnDoneItemsWithHandler
                        value={this.props.filters.showUnDone}
                        onChange={actionsFilters.applyFilter}/>

                <ContentWithHandler
                        value={this.props.filters.content}
                        onChange={actionsFilters.applyFilter}/>

                <PrioritiesWithHandler
                        value={this.props.filters.priorities}
                        onChange={actionsFilters.applyFilter}/>

                <TagsWithHandler
                        onChange={actionsFilters.applyFilter}
                        tags={this.props.uniqueTagList}
                        selectedTags={this.props.filters.selectedTags}/>
            </aside>
        );
    }
}

function mapStateToProps (data) {
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

export default connect(mapStateToProps, { actionsFilters })(Filters);