import React, {Component} from 'react';
import ShowUnDoneItems from './ShowUnDoneItems';
import Content from './Content';
import Priorities from "./Priorities";
import Tags from "./Tags";

class Filters extends Component {

    onChange(change) {
        this.props.onFiltersChange(change);
    }

    render() {

        return (
            <aside className="left-aside filters-container">

                <ShowUnDoneItems
                    onChange={this.onChange.bind(this)}
                    isChecked={this.props.config.showUnDone}/>

                <Content
                    onChange={this.onChange.bind(this)}
                    content={this.props.config.content}/>

                <Priorities
                    onChange={this.onChange.bind(this)}
                    priorities={this.props.config.priorities}/>

                <Tags
                    onChange={this.onChange.bind(this)}
                    tags={this.props.tags}
                    selectedTags={this.props.config.selectedTags}/>
            </aside>
        );
    }
}

export default Filters;