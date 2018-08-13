/*****************************************************************************/
/* Groupchat: Event Handlers */
/*****************************************************************************/

Template.Groupchat.events({
    'submit #chatform'(e) {
        e.preventDefault();
        
        let newChatBox = Session.get('chatbox');
        let message = $('#chattextbox').val();
        
        newChatBox.push({
            type: 'chat',
            sender: 'you',
            message: message
        });
        
        Session.set('chatbox', newChatBox);
        
        $('#chattextbox').val('');
        
        $("#chatbox").animate({ scrollTop: $('#chatbox').prop("scrollHeight")}, 750);
        
        // hard code responses
        if(message === 'hello') {
            reply('Hi Peter! :)', 3500);
        }
        if(message === "i'll be wearing red. you?") {
            reply('green here', 2300);
            reply('let\'s go! i\'m hungry', 4620);
        }
        if(message === "see you!") {
            reply('See you too! :D', 2500);
            addEvent('Anne Kristine is ready.', 4000);
        }
        if(message === "bye") {
            reply('ok', 3000);
            addEvent('Anne Kristine has left the group.', 4123);
        }
    }
});

function reply(message, time) {
    Meteor.setTimeout(() => {
        let newChatBox = Session.get('chatbox');
        
        newChatBox.push({
            type: 'chat',
            sender: 'her',
            message: message
        });
        
        Session.set('chatbox', newChatBox);
        
        $("#chatbox").animate({ scrollTop: $('#chatbox').prop("scrollHeight")}, 750);
    }, time);
}

function addEvent(message, time) {
    Meteor.setTimeout(() => {
        let newChatBox = Session.get('chatbox');
            
        newChatBox.push({
            type: 'event',
            message: message
        });
        
        Session.set('chatbox', newChatBox);
        
        $("#chatbox").animate({ scrollTop: $('#chatbox').prop("scrollHeight")}, 750);
    }, time);
}

/*****************************************************************************/
/* Groupchat: Helpers */
/*****************************************************************************/
Template.Groupchat.helpers({
    'messages'() {
        return Session.get('chatbox');
    },
    'equal'(x, y) {
        return x === y;
    }
});

/*****************************************************************************/
/* Groupchat: Lifecycle Hooks */
/*****************************************************************************/
Template.Groupchat.onCreated(function () {

});
Template.Groupchat.onRendered(function () {
    Session.set('chatbox', [
        {
            type: 'event',
            message: 'You both like KFC.'
        }
        // {
        //     sender: 'her',
        //     message: 'Hi! :)'
        // },
        // {
        //     sender: 'you',
        //     message: 'Hello ate!'
        // },
        // {
        //     sender: 'you',
        //     message: 'ill be wearing red'
        // },
        // {
        //     sender: 'her',
        //     message: 'nice, same'
        // },
        // {
        //     sender: 'her',
        //     message: 'see you!'
        // }
    ]);
});

Template.Groupchat.onDestroyed(function () {
});
