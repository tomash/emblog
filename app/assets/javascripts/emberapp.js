//= require jquery
//= require jquery_ujs

//= require handlebars
//= require ember
//= require ember-data

//= require_self

// for more details see: http://emberjs.com/guides/application/
window.App = Ember.Application.create({
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true,
  rootElement: '#ember-container'
});
