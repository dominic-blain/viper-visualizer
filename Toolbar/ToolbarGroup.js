class ToolbarGroup extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const onInputChange = this.props.onInputChange;
		var options = [];
		this.props.options.forEach(function(option) {
			options.push(
				<ToolbarOption
					label={option.label}
					value={option.value}
					range={option.range}
					optionName={option.name}
					onInputChange={onInputChange}
				/>
			);
		});
		return (
			<section>
				<h2>{this.props.label}</h2>
				{options}
			</section>
		);
	}
}
