/*****************************************************************************/
/* Herchat: Event Handlers */
/*****************************************************************************/
Template.Herchat.events({
});

/*****************************************************************************/
/* Herchat: Helpers */
/*****************************************************************************/
Template.Herchat.helpers({
});

/*****************************************************************************/
/* Herchat: Lifecycle Hooks */
/*****************************************************************************/
Template.Herchat.onCreated(function () {
});

Template.Herchat.onRendered(function () {
    $(Template.instance().firstNode).hide();
    $(Template.instance().firstNode).fadeIn(500);
});

Template.Herchat.onDestroyed(function () {
});
