/*****************************************************************************/
/* Nearby: Event Handlers */
/*****************************************************************************/
Template.Nearby.events({
    'click .place'() {
        if(Session.get('selectedPlace').indexOf(this.name) >= 0) {
            let newPlace = Session.get('selectedPlace');
        
            newPlace.splice(newPlace.indexOf(this.name), 1);
            
            Session.set('selectedPlace', newPlace);
        }
        else {
            let newPlace = Session.get('selectedPlace');
        
            newPlace.push(this.name);
            
            Session.set('selectedPlace', newPlace);
        }
    }
});

/*****************************************************************************/
/* Nearby: Helpers */
/*****************************************************************************/
Template.Nearby.helpers({
    'places'() {
        return Session.get('nearbyPlaces');
    }
});

/*****************************************************************************/
/* Nearby: Lifecycle Hooks */
/*****************************************************************************/
Template.Nearby.onCreated(function () {
   
});

Template.Nearby.onRendered(function () {
    Session.set('selectedPlace', []);
    Session.set('nearbyPlaces', [
        {
            name: 'Chowking',
            description: 'Western fast food service style with Chinese food.',
            img: '/chowking.png'
        },
        {
            name: 'Jollibee',
            description: 'Bida ang saya!',
            img: '/jollibee.png'
        },
        {
            name: 'McDonalds',
            description: 'Classic, long-running fast-food chain known for its burgers, fries & shakes.',
            img: '/mcdo.png'
        },
        {
            name: 'KFC',
            description: 'Finger Lickin Good!',
            img: '/kfc.png'
        }
    ]);
});

Template.Nearby.onDestroyed(function () {
});
