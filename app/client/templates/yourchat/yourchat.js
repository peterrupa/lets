/*****************************************************************************/
/* Yourchat: Event Handlers */
/*****************************************************************************/
Template.Yourchat.events({
});

/*****************************************************************************/
/* Yourchat: Helpers */
/*****************************************************************************/
Template.Yourchat.helpers({
});

/*****************************************************************************/
/* Yourchat: Lifecycle Hooks */
/*****************************************************************************/
Template.Yourchat.onCreated(function () {
});

Template.Yourchat.onRendered(function () {
    $(Template.instance().firstNode).hide();
    $(Template.instance().firstNode).fadeIn(500);
});

Template.Yourchat.onDestroyed(function () {
});