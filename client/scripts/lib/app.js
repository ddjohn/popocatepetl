console.log('app.js', 'loading...');

import 'angular-animate';
import 'angular-meteor';
import 'angular-moment';
import 'angular-sanitize';
import 'angular-ui-router';
import 'ionic-scripts';
import Angular from 'angular';
import Loader from 'angular-ecmascript/module-loader';
import { Meteor } from 'meteor/meteor';
 
import ChatCtrl       from '../controllers/chat.controller';
import ChatsCtrl      from '../controllers/chats.controller';
import InputDirective from '../directives/input.directive';
import CalendarFilter from '../filters/calendar.filter';
import RoutesConfig   from '../routes';

const App = 'Popocatepetl';

Angular.module(App, ['angular-meteor','angularMoment','ionic']);

new Loader(App)
    .load(ChatCtrl)
    .load(ChatsCtrl)
    .load(InputDirective)
    .load(CalendarFilter)
    .load(RoutesConfig);

if (Meteor.isCordova) {
    Angular.element(document).on('deviceready', onReady);
}
else {
    Angular.element(document).ready(onReady);
}
 
function onReady() {
    console.log('app.js','onReady()')

    Angular.bootstrap(document, [App]);
}