import React from 'react';
import {SortableContainer, SortableElement, SortableHandle, arrayMove} from 'react-sortable-hoc';
import ToolbarListButton from './ToolbarListButton';

const DragHandle = SortableHandle(() => <span className="drag-handle">:::</span>);

const SortableItem = SortableElement(({value, onClick}) => (
	<li className="toolbar-list-button-ctn">
		<DragHandle />
		<ToolbarListButton title={value.title} id={value.id} onClick={onClick} />
	</li>
));

const SortableList = SortableContainer(({items, onButtonClick}) => {
	return (
		<ul className="buttons-ctn">
			{items.map((value, index) => (
				<SortableItem 
					key={`item-${index}`} 
					index={index} 
					value={value} 
					onClick={onButtonClick}
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
		console.log(newOrder);
		this.props.onReorder(newOrder);
	}

	render() {
		const listId = this.props.listId;
		const items = this.props.items;
		const onButtonClick = this.props.onButtonClick;

		return(
			<div className="toolbar-tab-list" data-name={this.props.name}>
				<SortableList
					items={items}
					lockAxis="y"
					onSortEnd={this.handleReorder}
					onButtonClick={onButtonClick}
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