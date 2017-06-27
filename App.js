class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			options: OPTIONS,
			optionsGroups: OPTIONS_GROUPS,
			modules: MODULES
		};

		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(newValue, optionName) {
		var newOptions = setValueFrom(optionName, newValue, this.state.options);
		this.setState({options: newOptions});
	}

	render() {
		return (
			<div>
				<Toolbar options={this.state.options} optionsGroups={this.state.optionsGroups} onInputChange={this.handleInputChange} />
				<Article modules={this.state.modules} options={this.state.options} />
			</div>
		);
	}
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
