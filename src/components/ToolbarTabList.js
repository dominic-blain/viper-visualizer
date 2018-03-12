import React from 'react';
import {SortableContainer, SortableElement, SortableHandle, arrayMove} from 'react-sortable-hoc';
import ToolbarListButton from './ToolbarListButton';
import ButtonDeleteModule from './ButtonDeleteModule';

const DragHandle = SortableHandle(() => <span className="drag-handle">:::</span>);

const SortableItem = SortableElement(({value, onClick, onDelete}) => (
	<li className="toolbar-list-button-ctn">
		<DragHandle />
		<ToolbarListButton title={value.title} id={value.id} onClick={onClick} />
		<ButtonDeleteModule onDelete={onDelete} id={value.id} />
	</li>
));

const SortableList = SortableContainer(({items, onButtonClick, onDelete}) => {
	return (
		<ul className="buttons-ctn">
			{items.map((value, index) => (
				<SortableItem 
					key={`item-${index}`} 
					index={index} 
					value={value} 
					onClick={onButtonClick}
					onDelete={onDelete}
				/>
			))}
		</ul>
	);
});

class ToolbarTabList extends React.Component {
	constructor(props) {
		super(props);
		this.handleReorder = this.handleReorder.bind(this);
	}

	handleReorder({oldIndex, newIndex}) {
		const newArray = arrayMove(this.props.items, oldIndex, newIndex);
		var newOrder = [];
		newArray.map(item => {
			newOrder.push(item.id);
		});
		this.props.onReorder(newOrder);
	}

	render() {
		const listId = this.props.listId;
		const items = this.props.items;
		const onButtonClick = this.props.onButtonClick;
		const onDelete = this.props.onDelete;

		return(
			<div className="toolbar-tab-list" data-name={this.props.name}>
				<SortableList
					items={items}
					lockAxis="y"
					onSortEnd={this.handleReorder}
					onButtonClick={onButtonClick}
					onDelete={onDelete}
					useDragHandle={true}
				/>
				<div className="items-ctn">
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default ToolbarTabList;