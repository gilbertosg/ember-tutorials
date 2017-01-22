import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ["Guido van Rossum", "Kjarne Stroustrup", "Ken Thompson", "Brian Kernighan", "Dennies Ritchie", "Linus Torvalds"];
  }
});
