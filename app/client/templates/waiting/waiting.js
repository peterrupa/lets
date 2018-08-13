/*****************************************************************************/
/* Waiting: Event Handlers */
/*****************************************************************************/
Template.Waiting.events({
    'click #we-met'() {
        Materialize.toast('Nice! Enjoy your meal!', 4000, 'green');
    }
});

/*****************************************************************************/
/* Waiting: Helpers */
/*****************************************************************************/
Template.Waiting.helpers({
    'tin'() {
        return Session.get('currentTin');
    },
    'add'(x, y) {
        return x + y;
    }
});

/*****************************************************************************/
/* Waiting: Lifecycle Hooks */
/*****************************************************************************/
Template.Waiting.onCreated(function () {
});

Template.Waiting.onRendered(function () {
    Session.set('currentTin', {
        x: 50,
        y: 15
    });
    
    Meteor.setInterval(() => {
        Session.set('currentTin', getPoints(Session.get('currentTin'), {
            x: 46,
            y: 53
        }));
    }, 200);
});

Template.Waiting.onDestroyed(function () {
});

function getPoints(p1, p2){
    //alert("Ho");
    //get the slope
    var x1 = p1.x;
    var y1 = p1.y;
    var x2 = p2.x;
    var y2 = p2.y;
    var xDist = x2-x1;
    var yDist = y2-y1;
    var m = yDist / xDist; 
    
    //get distance
    var distance = Math.sqrt(Math.pow(yDist, 2) , Math.pow(xDist, 2));

    //get angle
    var angle = Math.atan2(yDist, xDist) * 180/Math.PI;

    var point = {
        x: x1,
        y: y1
    };

    return tryy(point, angle, 0.08);
}

function tryy(point, angle, inc) {
    var x = inc * Math.cos(angle);
    var y = inc * Math.sin(angle);
    
    return {
        x: point.x + x,
        y: point.y + y
    };
}