var test = require('tape');
var svgComponent = require('../');
var fastn = require('fastn')(
    require('fastn/domComponents')({
        svg: svgComponent
    })
);

function createHarness(fn){
    var rootEl = document.createElement('div');

    document.body.appendChild(rootEl);

    fn(rootEl, function(){
        document.body.removeChild(rootEl);
    });
}

test('Create svg element', function(t){
    t.plan(1);
    createHarness(function(rootEl, callback){
        var component = fastn('svg');

        component.render();
        rootEl.appendChild(component.element);

        t.equal(component.element.tagName, 'svg');

        callback();
    });
});

test('Create svg children', function(t){
    t.plan(2);
    createHarness(function(rootEl, callback){
        var component = fastn('svg', { height: "250", width: "250" },
            fastn('rect:svg', { x:"25", y:"25", width:"200", height:"200", fill:"lime", 'stroke-width':"4", stroke:"pink", }),
            fastn('circle:svg', { cx:"125", cy:"125", r:"75", fill:"orange", }),
            fastn('polyline:svg', { points:"50,150 50,200 200,200 200,100", stroke:"red", 'stroke-width':"4", fill:"none", }),
            fastn('line:svg', { x1:"50", y1:"50", x2:"200", y2:"200", stroke:"blue", 'stroke-width':"4", })
        );

        component.render();
        rootEl.appendChild(component.element);

        t.equal(component.element.tagName, 'svg');
        t.equal(component.element.firstChild.tagName, 'rect');

        callback();
    });
});

