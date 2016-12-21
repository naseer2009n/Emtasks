import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    addTasks: function(){
      var title = this.get('title');
      var date = this.get('date');
      var description = this.get('description');

      //Create New Tasks
      var newTask = this.store.createRecord('task', {
        title: title,
        description: description,
        date: new Date(date),

      });

      //save to firebase

      newTask.save();

      //clear form
      this.setProperties({
        title:'',
        description:'',
        date:''
      });

    }
  }
});
