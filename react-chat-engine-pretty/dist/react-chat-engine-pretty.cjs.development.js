'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var axios = _interopDefault(require('axios'));
var reactChatEngineAdvanced = require('react-chat-engine-advanced');
var icons = require('@ant-design/icons');
var Select = _interopDefault(require('react-select'));

function _regeneratorRuntime() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  _regeneratorRuntime = function () {
    return exports;
  };

  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) keys.push(key);

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

var useIsMobile = function useIsMobile() {
  var _useState = React.useState([0, 0]),
      size = _useState[0],
      setSize = _useState[1];

  React.useLayoutEffect(function () {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener('resize', updateSize);
    updateSize();
    return function () {
      return window.removeEventListener('resize', updateSize);
    };
  }, []);
  return size[0] < 667;
};

var getOtherUsers = function getOtherUsers(chat, username) {
  var otherMembers = chat.people.filter(function (member) {
    return member.person.username !== username;
  });
  return otherMembers.map(function (member) {
    return member.person;
  });
};
var getChatTitle = function getChatTitle(chat, username) {
  var otherUsers = getOtherUsers(chat, username);

  if (otherUsers.length === 1) {
    return otherUsers[0].first_name + " " + otherUsers[0].last_name;
  } else {
    var title = '';

    for (var i = 0; i < otherUsers.length; i++) {
      if (i === otherUsers.length - 1) {
        title += otherUsers[i].first_name;
      } else if (i === otherUsers.length - 2) {
        title += otherUsers[i].first_name + ' & ';
      } else {
        title += otherUsers[i].first_name + ', ';
      }
    }

    return title;
  }
};

var OtherAvatars = function OtherAvatars(props) {
  var otherUsers = getOtherUsers(props.chat, props.username);
  var memberOne = otherUsers.length > 0 ? otherUsers[0] : undefined;
  var memberTwo = otherUsers.length > 1 ? otherUsers[1] : undefined;
  var memberThree = otherUsers.length > 2 ? otherUsers[2] : undefined;
  return React__default.createElement("div", {
    style: props.style
  }, React__default.createElement(reactChatEngineAdvanced.Avatar, {
    className: "ce-custom-header-avatar",
    avatarUrl: memberOne == null ? void 0 : memberOne.avatar,
    username: memberOne == null ? void 0 : memberOne.username,
    style: _extends({}, styles.avatar, memberOne != null && memberOne.is_online ? styles.online : styles.offline, memberTwo && {
      width: '28px',
      height: '28px',
      lineHeight: '28px',
      fontSize: '12px'
    }, memberThree && {
      width: '21px',
      height: '21px',
      lineHeight: '21px',
      fontSize: '10px'
    })
  }), memberTwo && React__default.createElement(reactChatEngineAdvanced.Avatar, {
    className: "ce-custom-header-avatar",
    avatarUrl: memberTwo == null ? void 0 : memberTwo.avatar,
    username: memberTwo == null ? void 0 : memberTwo.username,
    style: _extends({}, styles.avatar, memberOne != null && memberOne.is_online ? styles.online : styles.offline, {
      width: '28px',
      height: '28px',
      lineHeight: '28px',
      fontSize: '12px',
      top: 'calc(40px - 28px - 6px)',
      left: 'calc(40px - 28px)'
    }, memberThree && {
      width: '21px',
      height: '21px',
      lineHeight: '21px',
      fontSize: '10px',
      top: '-5px',
      left: '22px'
    })
  }), memberThree && React__default.createElement(reactChatEngineAdvanced.Avatar, {
    className: "ce-custom-header-avatar",
    avatarUrl: memberThree == null ? void 0 : memberThree.avatar,
    username: memberThree == null ? void 0 : memberThree.username,
    style: _extends({}, styles.avatar, memberThree != null && memberThree.is_online ? styles.online : styles.offline, {
      width: '21px',
      height: '21px',
      lineHeight: '21px',
      fontSize: '10px',
      top: '-7px',
      left: '11px'
    })
  }));
};

var styles = {
  avatar: {
    display: 'inline-block',
    position: 'relative',
    top: '22px',
    marginLeft: '12px',
    width: '38px',
    height: '38px',
    fontSize: '14px',
    lineHeight: '40px',
    transition: 'all 0.66s ease'
  },
  online: {
    border: '1px solid rgb(24, 144, 255)',
    boxShadow: 'rgb(24 144 255 / 35%) 0px 2px 7px'
  },
  offline: {
    border: '1px solid #fa541c',
    boxShadow: 'rgb(245 34 45 / 35%) 0px 2px 7px'
  }
};

var nowTimeStamp = function nowTimeStamp() {
  return new Date().toISOString().replace("T", " ").replace("Z", Math.floor(Math.random() * 1000) + "+00:00");
};

var ChatHeader = function ChatHeader(props) {
  // State
  var _useState = React.useState(false),
      isFilePickerLoading = _useState[0],
      setFilePickerLoading = _useState[1];

  var _useState2 = React.useState(false),
      isDeleteLoading = _useState2[0],
      setDeleteLoading = _useState2[1];

  var otherMembers = props.chat ? getOtherUsers(props.chat, props.username) : [];
  var otherMember = otherMembers.length > 0 ? otherMembers[0] : undefined;

  var onFilesSelect = function onFilesSelect(e) {
    if (!props.chat) return;
    setFilePickerLoading(true);
    var headers = {
      'Project-ID': props.projectId,
      'User-Name': props.username,
      'User-Secret': props.secret
    };
    var formdata = new FormData();
    var filesArr = Array.from(e.target.files !== null ? e.target.files : []);
    filesArr.forEach(function (file) {
      return formdata.append('attachments', file, file.name);
    });
    formdata.append('created', nowTimeStamp());
    formdata.append('sender_username', props.username);
    formdata.append('custom_json', JSON.stringify({}));
    axios.post("https://api.chatengine.io/chats/" + props.chat.id + "/messages/", formdata, {
      headers: headers
    }).then(function () {
      return setFilePickerLoading(false);
    })["catch"](function () {
      return setFilePickerLoading(false);
    });
  };

  var onDelete = function onDelete() {
    if (!props.chat) return;
    setDeleteLoading(true);
    var headers = {
      'Project-ID': props.projectId,
      'User-Name': props.username,
      'User-Secret': props.secret
    };
    axios["delete"]("https://api.chatengine.io/chats/" + props.chat.id + "/", {
      headers: headers
    }).then(function (r) {
      setDeleteLoading(false);
      props.onDeleteChat(r.data);
    });
  };

  if (!otherMember || !props.chat) return React__default.createElement("div", {
    className: "ce-custom-chat-header",
    style: styles$1.chatHeader
  });
  return React__default.createElement("div", {
    className: "ce-custom-chat-header",
    style: styles$1.chatHeader
  }, React__default.createElement(OtherAvatars, {
    chat: props.chat,
    username: props.username,
    style: styles$1.chatAvatars
  }), React__default.createElement("div", {
    className: "ce-custom-header-text",
    style: styles$1.headerText
  }, React__default.createElement("div", {
    className: "ce-custom-header-title",
    style: styles$1.headerTitle
  }, getChatTitle(props.chat, props.username)), React__default.createElement("div", {
    className: "ce-custom-header-subtitle",
    style: styles$1.headerSubtitle
  }, React__default.createElement("h6", {
    style: styles$1.headerSubtitleMain
  }, props.username), React__default.createElement("p", null, otherMember.is_online ? 'Online' : 'Offline'))), React__default.createElement("div", {
    className: "ce-custom-header-icon-wrapper",
    style: styles$1.iconWrapper
  }, React__default.createElement("form", {
    style: {
      display: 'inline-block'
    }
  }, React__default.createElement("label", {
    htmlFor: "ce-files-picker"
  }, isFilePickerLoading ? React__default.createElement(icons.LoadingOutlined, {
    style: {
      color: 'rgb(153, 153, 153)'
    },
    className: "ce-custom-header-icon"
  }) : React__default.createElement(icons.PaperClipOutlined, {
    style: styles$1.headerIcon,
    className: "ce-custom-header-icon"
  })), React__default.createElement("input", {
    multiple: true,
    id: "ce-files-picker",
    style: {
      visibility: 'hidden',
      height: '0px',
      width: '0px'
    },
    type: "file",
    onChange: onFilesSelect
  })), isDeleteLoading ? React__default.createElement(icons.LoadingOutlined, {
    style: {
      color: 'rgb(153, 153, 153)'
    },
    className: "ce-custom-header-icon"
  }) : React__default.createElement(icons.DeleteFilled, {
    onClick: function onClick() {
      return onDelete();
    },
    className: "ce-custom-header-icon",
    style: styles$1.headerIcon
  })), React__default.createElement("style", null, ".ce-custom-header-icon:hover { color: rgb(24, 144, 255) !important; }"));
};

var styles$1 = {
  chatAvatars: {
    width: 'calc(40px + 14px + 14px)',
    height: '100%',
    display: 'block'
  },
  chatHeader: {
    display: 'flex',
    position: 'relative',
    marginLeft: '12px',
    width: 'calc(100% - 12px - 12px)',
    height: '86px'
  },
  headerText: {
    display: 'block',
    width: 'calc(100% - 40px - 14px - 14px - 100px)',
    height: '100%',
    position: 'relative'
  },
  headerTitle: {
    color: 'white',
    fontSize: '13px',
    fontFamily: 'Avenir',
    paddingTop: '26.5px'
  },
  headerSubtitle: {
    fontFamily: 'Avenir',
    color: 'rgb(153, 153, 153)',
    fontSize: '11px'
  },
  headerSubtitleMain: {
    fontFamily: 'Avenir',
    color: 'black',
    fontSize: '18px',
    fontWeight: 'bold'
  },
  iconWrapper: {
    display: 'block',
    width: '100px',
    height: '100%',
    textAlign: 'right'
  },
  headerIcon: {
    marginLeft: '14px',
    paddingTop: 'calc((86px - 15px) / 2)',
    cursor: 'pointer',
    color: 'rgb(153, 153, 153)',
    transition: 'all 0.66s ease',
    ':hover': {
      color: 'rgb(123, 59, 153))'
    }
  }
};

var ChatForm = function ChatForm(props) {
  var didMountRef = React.useRef(false);

  var _useState = React.useState([]),
      options = _useState[0],
      setOptions = _useState[1];

  var _useState2 = React.useState([]),
      selected = _useState2[0],
      setSelected = _useState2[1];

  React.useEffect(function () {
    if (!didMountRef.current) {
      didMountRef.current = true;
      getAllUsers(function (users) {
        var otherUsers = users.filter(function (user) {
          return user.username !== props.username;
        });
        var options = otherUsers.map(function (user) {
          return {
            value: JSON.stringify(user),
            label: user.first_name + " " + user.last_name
          };
        });
        setOptions(options);
      }, function () {
        return console.log('oops!');
      });
    }
  });

  var getAllUsers = function getAllUsers(onSuccess, onError) {
    axios.get('https://api.chatengine.io/users/search/', {
      headers: {
        'Project-ID': props.projectId,
        'User-Name': props.username,
        'User-Secret': props.secret
      }
    }).then(function (r) {
      return onSuccess(r.data);
    })["catch"](function () {
      return onError;
    });
  };

  return React__default.createElement("div", {
    className: "ce-custom-chat-form",
    style: styles$2.chatForm
  }, React__default.createElement(Select, {
    options: options,
    autoFocus: true,
    isMulti: true,
    onChange: function onChange(users) {
      setSelected(users);
      props.onChange(users);
    },
    styles: customStyles,
    placeholder: "Search for users..."
  }), React__default.createElement("button", {
    className: "ce-create-chat-button",
    style: _extends({}, styles$2.createChatButton, selected.length === 0 && styles$2.createChatButtonDisabled),
    onClick: props.onCancel,
    disabled: selected.length === 0
  }, React__default.createElement(icons.PlusOutlined, null)), React__default.createElement("style", null, ".ce-create-chat-button:hover { background-color: #7b3bc8; }"));
};

var customStyles = {
  container: function container() {
    return {
      width: 'calc(100% - 12px - 12px - 38px - 4px)',
      marginLeft: '12px',
      marginTop: '26px'
    };
  },
  control: function control(provided) {
    return _extends({}, provided, {
      outline: 'none',
      fontFamily: 'Avenir',
      color: 'white',
      backgroundColor: 'white',
      borderRadius: '8px',
      border: '1px solid rgb(123, 59, 153)',
      boxShadow: 'rgb(123, 59, 180 / 35%) 0px 2px 7px'
    });
  },
  input: function input(provided) {
    return _extends({}, provided, {
      color: 'white'
    });
  },
  placeholder: function placeholder(provided) {
    return _extends({}, provided, {
      color: 'rgb(197, 197, 197)'
    });
  },
  option: function option(provided, state) {
    return _extends({}, provided, {
      fontFamily: 'Avenir',
      color: 'rgb(197, 197, 197)',
      backgroundColor: state.isFocused ? 'rgb(242, 242, 242)' : 'white'
    });
  },
  noOptionsMessage: function noOptionsMessage(provided) {
    return _extends({}, provided, {
      fontFamily: 'Avenir'
    });
  },
  menu: function menu(provided) {
    return _extends({}, provided, {
      width: 'calc(100% - 12px - 12px - 38px - 4px)',
      backgroundColor: 'white'
    });
  }
};
var styles$2 = {
  chatForm: {
    display: 'inline-block',
    position: 'relative',
    width: '100%',
    height: '86px'
  },
  createChatButton: {
    width: '38px',
    height: '38px',
    position: 'absolute',
    right: '12px',
    top: '26px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.44s ease',
    outline: 'none',
    backgroundColor: 'rgb(123, 59, 153)',
    border: '1px solid rgb(123, 59, 153)',
    fontSize: '18px',
    color: 'white',
    boxShadow: 'rgba(123, 59, 153, 0.35) 0px 5px 15px'
  },
  createChatButtonDisabled: {
    cursor: 'not-allowed',
    color: 'white',
    backgroundColor: '#7b3bc8',
    border: '1px solid #7b3bc8',
    boxShadow: 'none'
  }
};

var CustomChatCard = function CustomChatCard(props) {
  var chat = props.chat;
  if (chat === undefined) return React__default.createElement("div", null);
  var otherUsers = getOtherUsers(chat, props.username);
  var otherMember = otherUsers.length > 0 ? otherUsers[0] : undefined;
  var username = otherMember ? otherMember.username : '';
  var messageText = chat.last_message.text;
  var hasNotification = chat.last_message.sender_username !== props.username;
  return React__default.createElement("div", null, React__default.createElement("style", null, "\n        .ce-chat-card:hover { border: 1px solid #7B3B99 !important; box-shadow: rgb(170 24 255 / 35%) 0px 2px 7px !important; }\n        .ce-chat-card-loading { height: 10px !important; }\n        .ce-chat-card-title-loading { top: 16px !important; }\n        "), React__default.createElement(reactChatEngineAdvanced.ChatCard, {
    title: getChatTitle(chat, props.username),
    description: messageText === null || messageText.length === 0 ? 'Say hello' : messageText,
    hasNotification: hasNotification,
    avatarUrl: otherMember == null ? void 0 : otherMember.avatar,
    avatarUsername: username,
    avatarStyle: {
      top: '12px',
      boxShadow: otherMember != null && otherMember.is_online ? 'rgb(24 144 255 / 35%) 0px 2px 7px' : 'rgb(245 34 45 / 35%) 0px 2px 7px',
      border: otherMember != null && otherMember.is_online ? '1px solid rgb(24 144 255)' : '1px solid rgb(245 34 45)'
    },
    isActive: props.isActive,
    renderAvatar: function renderAvatar() {
      return React__default.createElement(OtherAvatars, {
        chat: chat,
        username: props.username,
        style: {
          position: 'relative',
          width: '52px',
          top: '-8px'
        }
      });
    },
    onClick: function onClick() {
      return props.chat && props.onChatCardClick(props.chat.id);
    },
    style: {
      border: '1px solid #D9D9D9',
      backgroundColor: '#D9D9D9',
      margin: '10px 12px',
      height: '68px'
    },
    titleStyle: {
      color: 'white'
    },
    subtitleStyle: {
      bottom: '16px',
      width: 'calc(70% - 44px)',
      color: 'white'
    },
    timeStampStyle: {
      fontSize: '12px',
      bottom: '16px'
    },
    activeStyle: {
      border: '1px solid #7B3B99',
      backgroundColor: '#7B3B99',
      boxShadow: 'rgb(246 237 247 / 35%) 0px 2px 7px',
      color: 'white !important'
    },
    notificationStyle: {
      top: 'calc((68px - 12px) / 2)'
    }
  }));
};

var MessageForm = function MessageForm(props) {
  var _useState = React.useState(''),
      text = _useState[0],
      setText = _useState[1];

  var _useState2 = React.useState(false),
      isFocused = _useState2[0],
      setIsFocused = _useState2[1];

  var onSubmit = function onSubmit(event) {
    event.preventDefault();

    if (text.trim().length === 0) {
      return;
    }

    setText('');
    var message = {
      text: text,
      sender_username: props.username ? props.username : '',
      created: nowTimeStamp(),
      custom_json: {},
      attachments: []
    };
    props.onSubmit && props.onSubmit(message);
  };

  return React__default.createElement("form", {
    onSubmit: onSubmit,
    style: styles$3.messageForm,
    className: "ce-custom-message-form"
  }, React__default.createElement("input", {
    onChange: function onChange(e) {
      return setText(e.target.value);
    },
    value: text,
    placeholder: "Write a message...",
    className: "ce-custom-message-input",
    style: _extends({}, styles$3.messageInput, isFocused ? styles$3.messageInputFocused : {}),
    onFocus: function onFocus() {
      return setIsFocused(true);
    },
    onBlur: function onBlur() {
      return setIsFocused(false);
    }
  }), React__default.createElement("style", null, ".ce-custom-message-input::placeholder { color: #e1e1e1; font-family: Avenir; }"), React__default.createElement("button", {
    type: "submit",
    className: "ce-custom-send-button",
    style: _extends({}, styles$3.sendButton)
  }, React__default.createElement(icons.CaretUpFilled, null)));
};

var styles$3 = {
  messageForm: {
    height: '68px',
    marginLeft: '12px',
    marginRight: '12px',
    width: 'calc(100% - 12px - 12px)',
    borderRadius: '0px 0px 8px 8px',
    backgroundColor: '#3e404b'
  },
  messageInput: {
    marginTop: '6px',
    marginLeft: '3.3vw',
    marginRight: '4px',
    width: 'calc(100% - 3.3vw - 3.3vw - 12px - 12px - 36px - 4px)',
    boxShadow: 'rgba(24, 144, 255, 0.35) 0px 2px 7px',
    border: '1px solid rgb(24, 144, 255)',
    outline: 'none',
    backgroundColor: '#434756',
    color: 'white',
    fontSize: '14px',
    letterSpacing: '0.17px',
    padding: '0px 15px',
    height: '36px',
    borderRadius: '8px 0 0 8px',
    transition: 'all .44s ease'
  },
  messageInputFocused: {
    boxShadow: 'rgba(64, 169, 255, 0.35) 0px 2px 7px',
    border: '1px solid #40a9ff'
  },
  sendButton: {
    cursor: 'pointer',
    backgroundColor: 'rgb(24, 144, 255)',
    border: '1px solid rgb(24, 144, 255)',
    width: '36px',
    height: '36px',
    borderRadius: '0 8px 8px 0',
    color: 'white',
    boxShadow: 'rgba(24, 144, 255, 0.35) 0px 5px 15px',
    transition: 'all .44s ease'
  }
};

var ChatListHeader = function ChatListHeader(props) {
  return React__default.createElement("div", {
    style: styles$4.chatListHeader
  }, React__default.createElement("div", {
    style: styles$4.chatListHeaderTitle
  }, "All Messages"), React__default.createElement("button", {
    className: "ce-new-chat-button",
    style: styles$4.chatListHeaderButton,
    onClick: props.onNewChatClick
  }, React__default.createElement(icons.FormOutlined, null)), React__default.createElement("style", null, ".ce-new-chat-button:hover { color: rgb(24, 144, 255) !important; }"));
};

var styles$4 = {
  chatListHeader: {
    display: 'inline-block',
    width: 'calc(100% - 12px - 12px)',
    margin: '0px 12px',
    paddingTop: '28px',
    paddingBottom: '32px'
  },
  chatListHeaderTitle: {
    display: 'inline-block',
    color: 'black',
    fontSize: '24px',
    fontFamily: 'Avenir',
    fontWeight: '600'
  },
  chatListHeaderButton: {
    display: 'inline-block',
    "float": 'right',
    cursor: 'pointer',
    transition: 'all 0.33s ease',
    outline: 'none',
    backgroundColor: 'white',
    fontSize: '18px',
    color: 'black'
  }
};

var PrettyChatWindow = function PrettyChatWindow(props) {
  var _useState = React.useState(false),
      isChatFormActive = _useState[0],
      setIsChatFormActive = _useState[1];

  var _useState2 = React.useState([]),
      chatFormUsers = _useState2[0],
      setChatFromUsers = _useState2[1];

  var isMobile = useIsMobile();
  var chatProps = reactChatEngineAdvanced.useMultiChatLogic(props.projectId, props.username, props.secret, props.httpUrl);

  function getOrCreateChat() {
    return _getOrCreateChat.apply(this, arguments);
  }

  function _getOrCreateChat() {
    _getOrCreateChat = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var usernames, data, headers;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              usernames = chatFormUsers.map(function (user) {
                return user.username;
              });
              data = {
                usernames: usernames
              };
              headers = {
                'Project-ID': chatProps.projectId,
                'User-Name': chatProps.username,
                'User-Secret': chatProps.secret
              };
              axios.put('https://api.chatengine.io/chats/', data, {
                headers: headers
              }).then(function (r) {
                setIsChatFormActive(false);
                setChatFromUsers([]);
                chatProps.onChatCardClick(r.data.id);
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getOrCreateChat.apply(this, arguments);
  }

  var onChatFormChange = function onChatFormChange(options) {
    var users = options.map(function (option) {
      return JSON.parse(option.value);
    });
    setChatFromUsers(users);
  };

  return React__default.createElement("div", {
    style: {
      height: props.height ? props.height : '100%',
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      backgroundColor: 'white'
    }
  }, React__default.createElement(reactChatEngineAdvanced.MultiChatSocket, Object.assign({}, chatProps)), React__default.createElement("div", {
    style: isMobile ? styles$5.col0 : styles$5.col8
  }, React__default.createElement(reactChatEngineAdvanced.ChatList, Object.assign({}, chatProps, {
    renderChatForm: function renderChatForm() {
      return React__default.createElement(ChatListHeader, {
        onNewChatClick: function onNewChatClick() {
          chatProps.setActiveChatId(undefined);
          setIsChatFormActive(true);
        }
      });
    },
    renderChatCard: function renderChatCard(props) {
      return React__default.createElement(CustomChatCard, Object.assign({}, props, {
        username: chatProps.username,
        onChatCardClick: function onChatCardClick(chatId) {
          setIsChatFormActive(false);
          setChatFromUsers([]);
          chatProps.onChatCardClick(chatId);
        },
        isActive: props.chat !== undefined && chatProps.activeChatId === props.chat.id,
        chat: props.chat
      }));
    }
  }))), React__default.createElement("div", {
    style: isMobile ? styles$5.col22 : styles$5.col14
  }, React__default.createElement(reactChatEngineAdvanced.ChatFeed, Object.assign({}, chatProps, {
    renderChatHeader: function renderChatHeader(chatHeaderProps) {
      if (isChatFormActive) {
        return React__default.createElement(ChatForm, {
          projectId: chatProps.projectId,
          username: chatProps.username,
          secret: chatProps.secret,
          onChange: onChatFormChange,
          onCancel: getOrCreateChat
        });
      } else {
        return React__default.createElement(ChatHeader, Object.assign({}, chatHeaderProps, {
          chat: chatProps.chat,
          projectId: chatProps.projectId,
          username: chatProps.username,
          secret: chatProps.secret,
          onDeleteChat: chatProps.onDeleteChat
        }));
      }
    },
    renderMessageList: function renderMessageList(props) {
      return React__default.createElement(reactChatEngineAdvanced.MessageList, Object.assign({}, props, {
        renderMessageList: undefined,
        messages: isChatFormActive ? [] : chatProps.messages
      }));
    },
    renderMessageForm: function renderMessageForm(props) {
      if (isChatFormActive) {
        return React__default.createElement("div", {
          style: styles$5.messageForm
        });
      } else {
        return React__default.createElement(MessageForm, Object.assign({}, props));
      }
    }
  }))), React__default.createElement("style", null, "\n      .ce-chat-list { background-color: white !important;border: .5px solid black !important; margin-top: 4vh !important; !important; margin-right: 2vw !important; margin-left: 2vw !important;border-radius: 40px !important ; padding:25px !important; box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px; !important; }\n      .ce-chat-form { background-color: white !important; padding-bottom: 14px !important;  }\n      .ce-chat-form-title { color: black !important; }\n\n      .ce-chat-feed-column { border: none !important;background-color: white  !important; }\n      .ce-chat-feed { background-color: white  !important;border: .5px solid black !important; margin-top: 4vh !important; margin-left: 3vw !important; margin-right: 4vw !important; border-radius: 40px !important ; padding:25px !important; box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px; !important; }\n      .ce-message-list { margin-top: 24px !important; margin-left: 12px !important; margin-right: 12px !important; padding: 0px 3.3vw !important; background: white !important ; border-radius: 8px 8px 0px 0px !important; height: calc((100% - 85px) - 72px - 24px - 12px) !important; }\n\n      .ce-message-date-text { font-weight: 600; letter-spacing: 0.1px !important; font-family: 'Avenir' !important; color: rgb(153, 153, 153) !important; font-size: 14px !important; letter-spacing: -1px; }\n      .ce-my-message-body { font-family: 'Avenir' !important; padding: 15px !important; background-color: #7B3B99 !important ; min-width: 60px !important;}\n      .ce-my-message-timestamp { font-weight: 600; letter-spacing: 0.1px !important; font-family: 'Avenir' !important; font-size: 12px !important; padding: 15px !important; margin-right: 0px !important; letter-spacing: -1px; }\n      .ce-their-message-body { font-family: 'Avenir' !important; padding: 15px !important; background-color: #434756 !important; color: white !important; }\n      .ce-their-message-timestamp { font-weight: 600; letter-spacing: 0.1px !important; font-family: 'Avenir' !important; font-size: 12px !important; padding: 15px !important; margin-left: 0px !important; letter-spacing: -1px; }\n      .ce-their-message-timestamp { color: rgb(241, 240, 240) !important; letter-spacing: -1px; }\n      .ce-their-message-sender-username { color: #999 !important; }\n      .ce-message-file { background-color: #434758 !important; color: #c5c5c5 !important; border-radius: 8px !important; }\n      .ce-message-image { background-color: #434758 !important; color: #c5c5c5 !important; border-radius: 8px !important; padding: 0px !important; max-width: 124px !important; max-height: 124px !important; }\n\n      .ce-mobile-chat-list-button { top: 32px !important; left: 0px !important; }\n      .ce-mobile-chat-settings-button { display: none !important; }\n\n      .ce-avatar-status { border: 2px solid rgb(40,43,54) !important; width: 7px !important; height: 7px !important; }\n      .ce-custom-message-form {background-color: white !important ; color : black !important }\n      .ce-custom-message-input {background-color: white !important ; color : black !important ; border : 1px solid #7B3B99 !important; color : black !important ; margin-right: 0px !important }\n      .ce-custom-send-button {background-color: #7B3B99 !important ; width: 50px ! important; }\n      .ce-custom-chat-header {width: 100% !important; padding-left:2vw !important ; padding-right:2vw !important; border-bottom : 2px solid black !important;}\n      .\n      "));
};
var styles$5 = {
  col0: {
    display: 'block',
    flex: '0 0 0%',
    maxWidth: '0%',
    backgroundColor: 'white'
  },
  col1: {
    display: 'block',
    flex: '0 0 4.16666667%',
    maxWidth: '4.16666667%',
    backgroundColor: 'white'
  },
  col8: {
    display: 'block',
    flex: '0 0 28.33333%',
    maxWidth: '28.3333%',
    backgroundColor: 'white'
  },
  col9: {
    display: 'block',
    flex: '0 0 37.5%',
    maxWidth: '37.5%',
    backgroundColor: 'white'
  },
  col14: {
    display: 'block',
    flex: '0 0 66.33333333%',
    maxWidth: '66.33333333%',
    backgroundColor: 'white'
  },
  col16: {
    display: 'block',
    flex: '0 0 66.66666667%',
    maxWidth: '66.66666667%',
    backgroundColor: 'white'
  },
  col22: {
    display: 'block',
    flex: '0 0 91.66666667%',
    maxWidth: '91.66666667%',
    backgroundColor: 'white'
  },
  col24: {
    display: 'block',
    flex: '0 0 100%',
    maxWidth: '100%',
    backgroundColor: 'white'
  },
  messageForm: {
    height: '68px',
    marginLeft: '12px',
    marginRight: '12px',
    width: 'calc(100% - 12px - 12px)',
    borderRadius: '0px 0px 8px 8px',
    backgroundColor: 'white'
  }
};

exports.PrettyChatWindow = PrettyChatWindow;
//# sourceMappingURL=react-chat-engine-pretty.cjs.development.js.map
