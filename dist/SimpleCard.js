'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_Component) {
  _inherits(Card, _Component);

  function Card(props) {
    _classCallCheck(this, Card);

    var _this = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this, props));

    _this.state = { initialPosition: { x: 0, y: 0 } };
    _this.setInitialPosition = _this.setInitialPosition.bind(_this);
    return _this;
  }

  _createClass(Card, [{
    key: 'setInitialPosition',
    value: function setInitialPosition() {
      var card = _reactDom2.default.findDOMNode(this);
      var initialPosition = {
        x: Math.round((this.props.containerSize.x - card.offsetWidth) / 2),
        y: Math.round((this.props.containerSize.y - card.offsetHeight) / 2)
      };
      this.setState({ initialPosition: initialPosition });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setInitialPosition();
      window.addEventListener('resize', this.setInitialPosition);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.setInitialPosition);
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props,
          state = this.state;
      var _state$initialPositio = state.initialPosition,
          x = _state$initialPositio.x,
          y = _state$initialPositio.y;
      var active = props.active,
          _props$className = props.className,
          className = _props$className === undefined ? 'inactive' : _props$className;

      var style = _extends({}, (0, _utils.translate3d)(x, y), {
        zIndex: props.index
      }, props.style);

      return _react2.default.createElement(
        'div',
        { style: style, className: 'card ' + className + ' ' + (active ? 'top-card' : '') },
        props.children
      );
    }
  }]);

  return Card;
}(_react.Component);

exports.default = Card;