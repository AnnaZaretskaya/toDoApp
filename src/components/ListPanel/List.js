import React, {Component} from 'react';
import ToDoItem from './toDoItem';

class List extends Component {




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
        // {
        //     showUnDone: false,
        //         content: '',
        //     priorities: [],
        //     selectedTags: []
        // }
        // {
        //     id: 1,
        //         title: 'to study React',
        //     description: 'Ololo-trololol',
        //     tags: 'evaluation, job, suffering',
        //     priority: 1,
        //     isDone: false
        // }

        this.list = [].concat(this.props.list);

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
        return (
            <main className="list-container">
                {toDoList}
            </main>
        );
    }
}

export default List;