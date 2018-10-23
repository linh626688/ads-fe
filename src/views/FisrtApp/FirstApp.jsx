import React, {Component} from 'react';
import {render} from 'react-dom';
import {
    SortableContainer,
    SortableElement,
    SortableHandle,
    arrayMove,
} from 'react-sortable-hoc';
import './spec.css'

const pStyle = {
    fontSize: '15px',
    textAlign: 'center'
};


class FirstApp extends Component {
    state = {
        items: [
            {
                "name": "Doe",
                "value": "1"
            },
            {
                "name": "Doe2",
                "value": "2"
            },
            {
                "name": "Doe3",
                "value": "3"
            },
            {
                "name": "Doe4",
                "value": "4"
            }],
        name: '',

    };
    onSortEnd = ({oldIndex, newIndex}) => {
        const {items} = this.state;

        this.setState({
            items: arrayMove(items, oldIndex, newIndex),
        });
        console.log(this.state)
    };

    handleChange = (index) => (e)=> {
        let items= this.state.items;
        items[index] = {...items[index], value: e.target.value }
       this.setState({items: items});
        console.log(this.state)
    }


    render() {
        const {items, name} = this.state;
        const DragHandle = SortableHandle(() =>
            <span
                className='unselectable'
            >====</span>); // This can be any component you want

        const SortableItem = SortableElement(({itemIndex, value}) => {
            return (
                <div>
                    {value.name}
                    <input
                        name={itemIndex}
                        id={`id_${itemIndex}`}
                        onChange={this.handleChange(itemIndex)}
                        value={value.value}
                    />
                    <DragHandle/>
                </div>
            );
        });

        const SortableList = SortableContainer(({items}) => {
            return (
                <ul>
                    {items.map((value, index) => (
                        <SortableItem key={`item-${index}`} index={index} itemIndex={index} value={value}/>
                    ))}
                </ul>
            );
        });

        return <SortableList items={items} onSortEnd={this.onSortEnd} useDragHandle={true}/>;
    }
}

export default FirstApp;
