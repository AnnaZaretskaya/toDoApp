import React, {Component} from 'react';
import ToDoItem from './toDoItem';
import CompleteAllToggle from './CompleteAllToggle';
import '../styles/list.panel.css';

class List extends Component {
    state = {
        iscompleteAllChecked: false
    };

    onDelete(id) {
        this.props.onDelete(id);
    }

    onEdit(item) {
        this.props.onEdit(item);
    }

    onDoneToggle(id) {
        this.props.onDoneToggle(id);
    }

    // todo apply just changed filters
    applyFilters() {
        this.list =  [].concat(this.props.list);

        this.applyShowUnDone();
        this.applyContentFilter();
        this.applyPrioritiesFilter();
        this.applyTagsFilter();

    }

    applyShowUnDone() {
        if (this.props.filters.showUnDone) {
            this.list = this.list.filter((item) => {
                return item.isDone === false;
            });
        }
    }

    applyContentFilter() {
        this.list = this.list.filter((item) => {
            return (item.title.includes(this.props.filters.content) || item.description.includes(this.props.filters.content))
        });
    }

    applyPrioritiesFilter() {
        if (this.props.filters.priorities.length) {
            this.list = this.list.filter((item) => {
                return this.props.filters.priorities.includes(item.priority)
            });
        }
    }

    applyTagsFilter() {
        if (this.props.filters.selectedTags.length) {
            this.list = this.list.filter((item) => {
                return this.props.filters.selectedTags.some((selectedTag) => {
                    return item.tags.split(', ').includes(selectedTag);
                });
            });
        }
    }

    completeAllToggle() {
        this.setState({
            iscompleteAllChecked: !this.state.iscompleteAllChecked
        });

        this.props.completeAllToggle(!this.state.iscompleteAllChecked);
    }

    render() {
        let toDoList;

        this.applyFilters();

        if(this.list.length) {
            toDoList = this.list.map(item => {
                return (
                    <ToDoItem
                        key={item.id}
                        item={item}
                        onDelete={this.onDelete.bind(this)}
                        onEdit={this.onEdit.bind(this)}
                        onDoneToggle={this.onDoneToggle.bind(this)}/>
                );
            });
        }

        // todo add total numbers of unDone items
        // todo add delete all done items with it numbers
        return (
            <main className="list-container">
                <CompleteAllToggle
                    onChange={this.completeAllToggle.bind(this)}
                    isChecked={this.state.iscompleteAllChecked}/>

                {toDoList}
            </main>
        );
    }
}

export default List;
