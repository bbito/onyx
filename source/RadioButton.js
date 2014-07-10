(function (enyo, scope) {

	/**
	* _onyx.RadioButton_ is a radio button designed for use within an {@link onyx.RadioGroup}.
	* 
	* For more information, see the documentation on
	* [Buttons](building-apps/controls/buttons.html) in the Enyo Developer Guide.
	*
	* @class  onyx.RadioButton
	* @extends enyo.Button
	* @public
	*/
	enyo.kind(
		/** @lends  onyx.RadioButton.prototype */ {

		/**
		* @private
		*/
		name: 'onyx.RadioButton',

		/**
		* @private
		*/
		kind: 'enyo.Button',

		/**
		* @private
		*/
		classes: 'onyx-radiobutton'
	});

})(enyo, this);
