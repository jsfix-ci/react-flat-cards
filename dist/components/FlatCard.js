"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlatCard;

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

require("./FlatCard.scss");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function FlatCard(_ref) {
  let {
    thumbnail,
    title,
    description,
    secondaryText,
    className,
    thumbnailClass,
    contentWrapperClass,
    contentHeaderClass,
    secondaryContainer,
    readMoreEnabled,
    readMoreCharacterLimit,
    togglerItems,
    togglerClass
  } = _ref;
  const [isShowingMore, setIsShowingMore] = (0, _react.useState)(false);

  const _className = className ? className + " " : "";

  const _thumbnailClass = thumbnailClass ? thumbnailClass + " " : "";

  const _contentWrapperClass = contentWrapperClass ? contentWrapperClass + " " : "";

  const _contentHeaderClass = contentHeaderClass ? contentHeaderClass + " " : "";

  const _readMoreCharacterLimit = readMoreCharacterLimit ? readMoreCharacterLimit : 100;

  const _togglerItems = togglerItems ? togglerItems : [];

  const handleReadMoreToggle = () => {
    setIsShowingMore(!isShowingMore);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: _className + 'FlatCard'
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: _thumbnailClass + 'FlatCard--Img',
    src: thumbnail,
    alt: "card thumbnail"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: _contentWrapperClass + 'FlatCard--Content'
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _contentHeaderClass + 'FlatCard--ContentHeader'
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "FlatCard--Title"
  }, title), secondaryContainer ? secondaryContainer : /*#__PURE__*/_react.default.createElement("p", {
    className: "FlatCard--Price"
  }, secondaryText)), readMoreEnabled === true ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", {
    className: "FlatCard--Description ReadMoreEnabled"
  }, isShowingMore ? description : description.substring(0, _readMoreCharacterLimit) + "..."), /*#__PURE__*/_react.default.createElement("button", {
    className: isShowingMore ? "FlatCard--ReadMoreBtn Active" : "FlatCard--ReadMoreBtn",
    onClick: handleReadMoreToggle,
    type: "text"
  }, isShowingMore ? "Read Less" : "Read More")) : /*#__PURE__*/_react.default.createElement("p", {
    className: "FlatCard--Description"
  }, description)));
}