import Ember from 'ember';

export function formatDate(params/*, hash*/) {
  return moment(params[0]).format('YYYY-MM-DD');
}

export default Ember.Helper.helper(formatDate);
