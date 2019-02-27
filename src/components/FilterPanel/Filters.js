import React, {Component} from 'react';
import ShowUnDoneItems from './ShowUnDoneItems';
import Content from './Content';
import Priorities from "./Priorities";
import Tags from "./Tags";
import '../../theme/filter.panel.css';

class Filters extends Component {

    render() {
        return (
            <aside className="left-aside filters-container">

                <ShowUnDoneItems
                        showUnDone={this.props.config.showUnDone}
                        action={this.props.action}/>

                <Content
                        content={this.props.config.content}
                        action={this.props.action}/>

                <Priorities
                        priorities={this.props.config.priorities}
                        action={this.props.action}/>

                <Tags
                        action={this.props.action}
                        tags={this.props.tags}
                        selectedTags={this.props.config.selectedTags}/>
            </aside>
        );
    }
}

export default Filters;