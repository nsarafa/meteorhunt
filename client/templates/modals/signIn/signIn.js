Template.signIn.events({
  'click [data-action=meteor-sign-in]': function (event, template) {
    Meteor.loginWithMeteorDeveloperAccount({}, function (error) {
      if (error) {
        alert(error);
      } else {
        IonModal.close();
      }
    });
  }
});

// disables account-ui drop down behavior
Template.signIn.rendered = function() {
  Accounts._loginButtonsSession.set('dropdownVisible', true);
};
