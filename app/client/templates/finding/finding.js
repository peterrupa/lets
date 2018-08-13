/*****************************************************************************/
/* Finding: Event Handlers */
/*****************************************************************************/
Template.Finding.events({
});

/*****************************************************************************/
/* Finding: Helpers */
/*****************************************************************************/
Template.Finding.helpers({
    'time'() {
        return Session.get('timer');
    },
    'displace'() {
        let point = {
            x: Session.get('xDisplace'),
            y: Session.get('yDisplace')
        };
        
        return point
    }
});

/*****************************************************************************/
/* Finding: Lifecycle Hooks */
/*****************************************************************************/
Template.Finding.onCreated(function () {
});

let interval;

Template.Finding.onRendered(function () {
    Session.set('timer', 0);
    Session.set('angle', 0);
    
    interval = Meteor.setInterval(() => {
        Session.set('timer', Session.get('timer') + 1);
        
        if(Session.get('timer') == 8) {
            Router.go('/found');
        }
    }, 1000);
    
    Meteor.setInterval(() => {
        let point = tryy({x:0,y:0}, Session.get('angle'), 10);
        
        Session.set('xDisplace', point.x);
        Session.set('yDisplace', point.y);
        
        Session.set('angle', Session.get('angle') + 30);
    }, 200);
});

function tryy(point, angle, inc) {
    var x = inc * Math.cos(toRad(angle));
    var y = inc * Math.sin(toRad(angle));
    
    return {
        x: point.x + x,
        y: point.y + y
    };
}

function toRad(x) {
    return x * (Math.PI / 180);
}

Template.Finding.onDestroyed(function () {
    Meteor.clearInterval(interval);
});
