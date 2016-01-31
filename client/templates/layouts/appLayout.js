Template.appLayout.rendered = function () {
  Session.set('currentTab', 'trending');
};

Template.appLayout.events({
  'click .logo-icon': function (event, template) {
    Router.go('/');
  }
});
