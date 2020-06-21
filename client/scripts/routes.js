console.log('routes.js', 'loading...');

import { Config } from 'angular-ecmascript/module-helpers';
 
import  tabsTemplateUrl from '../templates/tabs.html';
import  chatTemplateUrl from '../templates/chat.html';
import chatsTemplateUrl from '../templates/chats.html';

export default class RoutesConfig extends Config {
    
    configure() {
        console.log('routes.js', 'configure()');

        this.$stateProvider
            
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: tabsTemplateUrl
            })

            .state('tab.chats', {
                url: '/chats',
                views: {
                    'tab-chats': {
                        templateUrl: chatsTemplateUrl,
                        controller: 'ChatsCtrl as chats'
                    }
                }
            })
            
            .state('tab.chat', {
                url: '/chats/:chatId',
                views: {
                    'tab-chats': {
                        templateUrl: chatTemplateUrl,
                        controller: 'ChatCtrl as chat'
                    }
                }
            })
            ;

        this.$urlRouterProvider.otherwise('tab/chats');
    }
}
 
RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];