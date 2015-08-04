/* @flow */
"use strict";

var React = require("react-native");
var { Component, PropTypes, View, TouchableWithoutFeedback } = React;

class RoundButton extends Component{
	constructor(props) {
		super(props);
		var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			pressing: false,
		};
	}
	render(){
		return (
			<TouchableWithoutFeedback
				onPressIn={() => this.setState({pressing: true})}
				onPressOut={() => this.setState({pressing: false})}
				onPress={this.props.onPress}
			>
				<View style={[{
					width: this.props.diameter,
					height: this.props.diameter,
					borderRadius: this.props.diameter / 2,
					background: "#FFFFFF",
				}, this.props.style, ,(this.state.pressing && [{
					background: "#666666",
				}, style.buttonPressing])]}>
				{
					this.props.children
				}
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

RoundButton.propTypes = {
	children: PropTypes.renderable.isRequired,
	onPress: PropTypes.func,
	diameter: PropTypes.number.isRequired,
	type: PropTypes.string,
	style: PropTypes.object,
	pressingStyle: PropTypes.object,
}
RoundButton.getDefaultProps = {
	type: "primary",
}

module.exports = RoundButton;