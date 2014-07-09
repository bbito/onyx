(function (enyo, scope) {
	/**
	* _onyx.Groupbox_ displays rows of controls as a vertically-stacked group. It
	* is designed to have container controls as its children, with each container
	* representing a row in the Groupbox.
	*
	* To add a header, specify an {@link onyx.GroupboxHeader) as the
	* first control in the Groupbox, e.g.:
	*
	* ```
	* {kind: 'onyx.Groupbox', components: [
	* 	{kind: 'onyx.GroupboxHeader', content: 'Sounds'},
	* 		{components: [
	* 			{content: 'System Sounds'},
	* 			{kind: 'onyx.ToggleButton', value: true}
	* 		]},
	* 		{kind: 'onyx.InputDecorator', components: [
	* 			{kind: 'onyx.Input'}
	* 		]}
	* 	]}
	* ]}
	* ```
	*
	* @class  onyx.Groupbox
	* @extends enyo.Control
	* @public
	*/
	enyo.kind(
		/** @lends onyx.Groupbox.prototype */ {
		
		/**
		* @private
		*/
		name: 'onyx.Groupbox',

		/**
		* @private
		*/
		classes: 'onyx-groupbox'
	});

	/**
	* _onyx.GroupboxHeader_ is a control designed to be placed inside an {@link onyx.Groupbox}.
	* When a header is desired, make a GroupboxHeader the first control inside the Groupbox.
	*
	* ```
	* {kind: 'onyx.Groupbox', components: [
	* 	{kind: 'onyx.GroupboxHeader', content: 'Sounds'},
	* 	{content: 'Yawn'},
	* 	{content: 'Beep'}
	* ]}
	* ```
	*
	* @class  onyx.GroupboxHeader
	* @extends enyo.Control
	* @public
	*/
	enyo.kind({
		name: 'onyx.GroupboxHeader',
		classes: 'onyx-groupbox-header'
	});
})(enyo, this);
