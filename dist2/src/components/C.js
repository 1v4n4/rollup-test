
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { R as React, B as Button } from '../../Button-cc2a7a2e.js';
import { S as Slider } from '../../Slider-77229989.js';

const Ccomponent = () => {
  console.log("Ccomponent");
  return /*#__PURE__*/React.createElement("div", null, " ", /*#__PURE__*/React.createElement("p", null, " Hello World from C "), /*#__PURE__*/React.createElement(Button, {
    variant: "contained",
    color: "primary"
  }, "Button C"), /*#__PURE__*/React.createElement(Slider, null));
};

export { Ccomponent as default };
//# sourceMappingURL=C.js.map
