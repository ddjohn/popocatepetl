console.log('methods.js','loading...');

import { Meteor } from 'meteor/meteor';
import { Chats, Messages } from '../lib/collections';
 
Meteor.methods({

    newMessage(message) {
        console.log('methods.js','newMessage()');
        message.timestamp = new Date();
 
        const messageId = Messages.insert(message);
        Chats.update(message.chatId, { $set: { lastMessage: message } });
 
        return messageId;
    }
});