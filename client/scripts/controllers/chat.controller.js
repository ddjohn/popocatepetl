console.log('chat.controller.js','loading...');

import Ionic from 'ionic-scripts';
//import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Chats, Messages } from '../../../lib/collections';
import { _ } from 'underscore';

export default class ChatCtrl extends Controller {
    
    constructor() {
        console.log('chat.controller.js', 'constructor');

        super(...arguments);
 
        this.chatId = this.$stateParams.chatId;
        this.isIOS = Ionic.Platform.isWebView() && Ionic.Platform.isIOS();
        this.isCordova = Meteor.isCordova;

        this.helpers({
            messages() {
                console.log('chat.controller.js', 'messages()');
    
                return Messages.find({ chatId: this.chatId });
            },
              
            data() {
                console.log('chat.controller.js', 'date()');
    
                return Chats.findOne(this.chatId);
            }
        });
    }

    sendMessage() {
        if (_.isEmpty(this.message)) return;
 
        this.callMethod('newMessage', {
          text: this.message,
          type: 'text',
          chatId: this.chatId
        });
     
        delete this.message;
    }

    inputUp () {
        if (this.isIOS) {
            this.keyboardHeight = 216;
        }
 
        this.scrollBottom(true);
    }
 
    inputDown () {
        if (this.isIOS) {
            this.keyboardHeight = 0;
        }
 
        this.$ionicScrollDelegate.$getByHandle('chatScroll').resize();
    }
 
    closeKeyboard () {
        if (this.isCordova) {
            cordova.plugins.Keyboard.close();
        }
    }
 
    scrollBottom(animate) {
        this.$timeout(() => {
            this.$ionicScrollDelegate.$getByHandle('chatScroll').scrollBottom(animate);
        }, 300);
    }
}
 
ChatCtrl.$name = 'ChatCtrl';
ChatCtrl.$inject = ['$stateParams', '$timeout', '$ionicScrollDelegate'];