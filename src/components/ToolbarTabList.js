import React from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import ToolbarListButton from './ToolbarListButton';

const SortableItem = SortableElement(({value}) => (
	<li className="toolbar-list-button-ctn">
		<ToolbarListButton title={value.title} />
	</li>
));

const SortableList = SortableContainer(({items}) => {
  return (
    <ul className="buttons-ctn">
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
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

		return(
			<div className="toolbar-tab-list" data-name={this.props.name}>
				<SortableList
					items={items}
					lockAxis="y"
					onSortEnd={this.handleReorder}
				/>
				<div className="items-ctn">
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default ToolbarTabList;