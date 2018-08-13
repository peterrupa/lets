/*****************************************************************************/
/* Place: Event Handlers */
/*****************************************************************************/
Template.Place.events({
});

/*****************************************************************************/
/* Place: Helpers */
/*****************************************************************************/
Template.Place.helpers({
    'selected'() {  
        return Session.get('selectedPlace').indexOf(this.name) >= 0? 'blue lighten-4': '';
    }
});

/*****************************************************************************/
/* Place: Lifecycle Hooks */
/*****************************************************************************/
Template.Place.onCreated(function () {
});

Template.Place.onRendered(function () {
});

Template.Place.onDestroyed(function () {
});
