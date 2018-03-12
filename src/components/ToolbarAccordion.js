import React from 'react';
import {SortableContainer, SortableElement, SortableHandle, arrayMove} from 'react-sortable-hoc';
import ToolbarAccordionButton from './ToolbarAccordionButton';
import ToolbarAccordionContent from './ToolbarAccordionContent';
import ButtonDeleteItem from './ButtonDeleteItem';

const DragHandle = SortableHandle(() => <span className="drag-handle">:::</span>);

const SortableItem = SortableElement(({item, onClick, onDelete, component, activeItem, listId}) => {
	const computedClass = 'toolbar-accordion-item' + ((activeItem == item.id) ? ' is-active' : '');
	return (
		<li className={computedClass}>
			<div className="toolbar-accordion-header">
				<DragHandle />
				<ToolbarAccordionButton title={item.title} id={item.id} onClick={onClick} />
				<ButtonDeleteItem onDelete={onDelete} id={item.id} moduleId={listId} />
			</div>
			<ToolbarAccordionContent>
				{component}
			</ToolbarAccordionContent>
		</li>
	);
});

const SortableList = SortableContainer(({items, onButtonClick, onDelete, components, activeItem, listId}) => {
	return (
		<ul className="buttons-ctn">
			{items.map((item, index) => (
				<SortableItem 
					key={`item-${index}`} 
					index={index} 
					activeItem={activeItem}
					item={item}
					component={components[index]}
					onClick={onButtonClick}
					onDelete={onDelete}
					listId={listId}
				/>
			))}
		</ul>
	);
});

class ToolbarAccordion extends React.Component {
	constructor(props) {
		super(props);
		this.handleReorder = this.handleReorder.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			activeItem: ''
		}
	}

	handleReorder({oldIndex, newIndex}) {
		const id = this.props.id;
		const newArray = arrayMove(this.props.items, oldIndex, newIndex);
		var newOrder = [];
		newArray.map(item => {
			newOrder.push(item.id);
		});
		this.props.onReorder(id, newOrder);
	}

	handleClick(id) {
		const newId = this.state.activeItem == id ? '' : id;
		this.setState({activeItem: newId});
	}

	render() {
		const activeItem = this.state.activeItem;
		const listId = this.props.listId;
		const items = this.props.items;
		const components = this.props.components;
		const onDelete = this.props.onDelete;

		const computedClass = 'toolbar-accordion';

		return(
			<div className={computedClass} data-name={this.props.name}>
				<SortableList
					items={items}
					components={components}
					lockAxis="y"
					onSortEnd={this.handleReorder}
					onButtonClick={this.handleClick}
					onDelete={onDelete}
					activeItem={activeItem}
					useDragHandle={true}
					listId={listId}
				/>
			</div>
		);
	}
}

export default ToolbarAccordion;