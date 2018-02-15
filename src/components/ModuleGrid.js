import React from 'react';
import { computeOptionsClass } from '../utils';

class ModuleGrid extends React.Component {
	render() {
		const schema = this.props.schema;
		const module = this.props.module;
		const items = this.props.items;
		const computedClass = computeOptionsClass('module module-grid', schema, module);


		return (
			<section className={computedClass}>
				<div>
					<div className="grid">
						{items}
					</div>
				</div>
			</section>
		);
	}
}
export default ModuleGrid;
