class Article extends React.Component {
	render() {
		var modules = [];
		var options = this.props.options;
		this.props.modules.forEach(function(module) {
			modules.push(
				<Content
					element="section"
					options={options}
					properties={module.properties}
					content={module.content}
					attr={module.attr}
				/>
			);
		});

		return (
			<article>
				{modules}
			</article>
		);
	}
}
