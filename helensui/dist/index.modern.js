import React from 'react';

var styles = {"test":"_3ybTi","button":"_2hTXI","primary":"_3ljpl","default":"_3UK6o","dashed":"_27xYC","text":"_5bXm4","link":"_71S8l"};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};
var Button = function Button(_ref2) {
  var type = _ref2.type,
    text = _ref2.text;
  return /*#__PURE__*/React.createElement("button", {
    className: styles.button + " " + styles[type]
  }, text);
};

export { Button, ExampleComponent };
//# sourceMappingURL=index.modern.js.map
