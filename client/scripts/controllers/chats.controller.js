console.log('chats.controller.js', 'loading...');

import Moment from 'moment';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Chats } from '../../../lib/collections';

export default class ChatsCtrl extends Controller {

    constructor() {
        console.log('chats.controller.js','constructor()');
        super(...arguments);

        this.helpers({
            data() {
                console.log('chats.controller.js','data()');
                return Chats.find();
            }
        });
    }

    remove(chat) {
        console.log('chats.controller.js','remove()');
        Chats.remove(chat._id);
    }
}

ChatsCtrl.$name = 'ChatsCtrl';