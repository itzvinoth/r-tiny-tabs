'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _tinyTabs = require('@htoniv/tiny-tabs');

var _tinyTabs2 = _interopRequireDefault(_tinyTabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactTinyTabs = function (_React$Component) {
    _inherits(ReactTinyTabs, _React$Component);

    function ReactTinyTabs(props) {
        _classCallCheck(this, ReactTinyTabs);

        var _this = _possibleConstructorReturn(this, (ReactTinyTabs.__proto__ || Object.getPrototypeOf(ReactTinyTabs)).call(this, props));

        _this.state = {
            id: props.id,
            anchor: props.anchor,
            closable: props.closable,
            hideTitle: props.hideTitle,
            sectionClass: props.sectionClass,
            titleClass: props.titleClass,
            tabsClass: props.tabsClass,
            tabClass: props.tabClass
        };
        return _this;
    }

    _createClass(ReactTinyTabs, [{
        key: 'handleClose',
        value: function handleClose(id) {
            this.props.onClose(id);
        }
    }, {
        key: 'handleOnBefore',
        value: function handleOnBefore(id) {
            this.props.onBefore(id);
        }
    }, {
        key: 'handleOnAfter',
        value: function handleOnAfter(id) {
            this.props.onAfter(id);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var self = this;
            var _state = this.state,
                anchor = _state.anchor,
                hideTitle = _state.hideTitle,
                closable = _state.closable,
                sectionClass = _state.sectionClass,
                titleClass = _state.titleClass,
                tabsClass = _state.tabsClass,
                tabClass = _state.tabClass;

            (0, _tinyTabs2.default)(document.querySelector("#" + this.state.id), {
                anchor: anchor,
                hideTitle: hideTitle,
                closable: closable,
                sectionClass: sectionClass,
                titleClass: titleClass,
                tabsClass: tabsClass,
                tabClass: tabClass,
                onClose: function onClose(id) {
                    self.handleClose(id);
                },
                onBefore: function onBefore(id, tab) {
                    self.handleOnBefore(id, tab);
                },
                onAfter: function onAfter(id, tab) {
                    self.handleOnAfter(id, tab);
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { id: this.state.id },
                this.props.children
            );
        }
    }]);

    return ReactTinyTabs;
}(_react2.default.Component);

ReactTinyTabs.defaultProps = {
    id: 'mytabs',
    anchor: false,
    closable: true,
    hideTitle: false,
    sectionClass: 'section',
    titleClass: 'title',
    tabsClass: 'tabs',
    tabClass: 'tab'
};

ReactTinyTabs.propTypes = {
    id: _propTypes2.default.string,
    anchor: _propTypes2.default.bool,
    closable: _propTypes2.default.bool,
    hideTitle: _propTypes2.default.bool,
    sectionClass: _propTypes2.default.string,
    titleClass: _propTypes2.default.string,
    tabsClass: _propTypes2.default.string,
    tabClass: _propTypes2.default.string
};

exports.default = ReactTinyTabs;
