Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('letseat', {
  name: 'letseat',
  controller: 'LetseatController',
  layoutTemplate: 'Layout',
  where: 'client'
});

Router.route('settings', {
  name: 'settings',
  controller: 'SettingsController',
  layoutTemplate: 'Layout',
  where: 'client'
});

Router.route('nearby', {
  name: 'nearby',
  controller: 'NearbyController',
  layoutTemplate: 'Layout',
  where: 'client'
});

Router.route('finding', {
  name: 'finding',
  controller: 'FindingController',
  layoutTemplate: 'Layout',
  where: 'client'
});

Router.route('found', {
  name: 'found',
  controller: 'FoundController',
  layoutTemplate: 'Layout',
  where: 'client'
});

Router.route('groupchat', {
  name: 'groupchat',
  controller: 'GroupchatController',
  layoutTemplate: 'Layout',
  where: 'client'
});

Router.route('waiting', {
  name: 'waiting',
  controller: 'WaitingController',
  layoutTemplate: 'Layout',
  where: 'client'
});