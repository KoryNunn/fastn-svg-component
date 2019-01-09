# fastn-svg-component

svg renderer for fastn

# usage

```javascript
var svgComponent = require('fastn-svg-component');
var fastn = require('fastn')(
    require('fastn/domComponents')({
        svg: svgComponent
    })
);

// Use as a mixin like `{elementType}:svg`

// eg...

fastn('svg', { height: "250", width: "250" },
    fastn('rect:svg', { x:"25", y:"25", width:"200", height:"200", fill:"lime", 'stroke-width':"4", stroke:"pink", }),
    fastn('circle:svg', { cx:"125", cy:"125", r:"75", fill:"orange", }),
    fastn('polyline:svg', { points:"50,150 50,200 200,200 200,100", stroke:"red", 'stroke-width':"4", fill:"none", }),
    fastn('line:svg', { x1:"50", y1:"50", x2:"200", y2:"200", stroke:"blue", 'stroke-width':"4", })
);
```
