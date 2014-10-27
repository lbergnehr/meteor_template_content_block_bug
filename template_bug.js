if (Meteor.isClient) {
  Template.templateBug.created = function() {
    // Setting a propery on the `templateBug` template instance.
    this.thisIsNotVisible = "This is not visible";
  };

  Template.templateBug.helpers({
    notVisibleString: function() {
      // Accessing the template instance property; however,
      // `Template.instance()` will here return the contentBlock
      // template instance instead, which doesn't contain a
      // `testString` property.
      return Template.instance().thisIsNotVisible;
    },

    visibleString: function() {
      return "This is visible";
    }
  });
}
