console.log('input.directive.js','loading...');

import { Directive } from 'angular-ecmascript/module-helpers';
 
export default class InputDirective extends Directive {

    constructor() {
        console.log('input.directive.js','constructor()');

        super(...arguments);
 
        this.restrict = 'E';
 
        this.scope = {
            'returnClose': '=',
            'onReturn': '&',
            'onFocus': '&',
            'onBlur': '&'
        };
    }
 
    link(scope, element) {
        console.log('input.directive.js','link()');

        element.bind('focus', (e) => {
            console.log('input.directive.js','bind.focus()');

            if (!scope.onFocus) return;
 
            this.$timeout(() => {
                scope.onFocus();
            });
        });
 
        element.bind('blur', (e) => {
            console.log('input.directive.js','bind.blur()');

            if (!scope.onBlur) return;
 
            this.$timeout(() => {
                console.log('input.directive.js','timeout()');

                scope.onBlur();
            });
        });
 
        element.bind('keydown', (e) => {
            console.log('input.directive.js','bind.keydown()');

            if (e.which != 13) return;
 
            if (scope.returnClose) {
                element[0].blur();
            }
 
            if (scope.onReturn) {
                this.$timeout(() => {
                    console.log('input.directive.js','timeout()');
                    scope.onReturn();
                });
            }
        });
    }
}

InputDirective.$name = 'input';
InputDirective.$inject = ['$timeout'];