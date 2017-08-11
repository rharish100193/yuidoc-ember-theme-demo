(function (factory) {
    'use strict'; // NO I18N
    /**
    * @module Components
    */
    var module = (window.Components) ? window.Components : window.Components = {};
    factory.call(module, module, function (className) {
        var Namespace = className.split('.');
        var modules = window;
        Namespace.forEach(function (namespace) {
            if (typeof modules[namespace] === 'object') {
                modules = modules[namespace];
            } else {
                return;
            }
        });
        return modules;
    });
}(function (module, require) {
    'use strict'; // NO I18N
    /**
    * @public
    * @class BaseComponent
    * @constructor
    * @param {Object} obj @required
    * @example
    * <pre> obj = { 'id': '' }; </pre>
    */
    var BaseComponent = function (obj) {
        this.id = obj.id || '';
    };
    /**
    * @public
    * @param {Object} obj @required
    * @method addNewNode
    * @return {HTMLElement}
    */
    BaseComponent.prototype.addNewNode = function (obj) {
    };
    module.BaseComponent = BaseComponent;
}));