module.exports = function(fastn, component, type, settings, children){
    settings.tagName = component._tagName || type;

    component.extend('_generic', settings, children);
    component.createElement = function(tagName){
        return document.createElementNS('http://www.w3.org/2000/svg', settings.tagName);
    }

    component._fancyProps = function(attributeName){
        return function(component, element, value){
            if(arguments.length < 3){
                return element.getAttribute(attributeName);
            }

            return element.setAttribute(attributeName, value);
        };
    };

    return component;
};