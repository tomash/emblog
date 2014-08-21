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

App.ApplicationStore = DS.Store.extend();

// Override the default adapter with the `DS.ActiveModelAdapter` which
// is built to work nicely with the ActiveModel::Serializers gem.
App.ApplicationAdapter = DS.ActiveModelAdapter.extend();

App.Post = DS.Model.extend({
  title:  DS.attr('string'),
  body: DS.attr('string')
});

App.Router.map(function() {
  this.resource('posts', function() {
    this.route('new');
    this.resource('post', { path: '/:post_id' }, function() {
    });
  });
});

App.PostsIndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('post');
  }
});

App.PostsNewRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('post');
  }
});
