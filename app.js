(function() {
    function r(e, n, t) {
        function o(i, f) {
            if (!n[i]) {
                if (!e[i]) {
                    var c = "function" == typeof require && require;
                    if (!f && c)
                        return c(i, !0);
                    if (u)
                        return u(i, !0);
                    var a = new Error("Cannot find module '" + i + "'");
                    throw a.code = "MODULE_NOT_FOUND",
                    a
                }
                var p = n[i] = {
                    exports: {}
                };
                e[i][0].call(p.exports, function(r) {
                    var n = e[i][1][r];
                    return o(n || r)
                }, p, p.exports, r, e, n, t)
            }
            return n[i].exports
        }
        for (var u = "function" == typeof require && require, i = 0; i < t.length; i++)
            o(t[i]);
        return o
    }
    return r
}
)()({
    1: [function(require, module, exports) {
        "use strict";
        var ToObject = require("es-abstract/2022/ToObject")
          , ToLength = require("es-abstract/2022/ToLength")
          , IsCallable = require("es-abstract/2022/IsCallable");
        module.exports = function(e) {
            var r = ToObject(this)
              , t = ToLength(r.length);
            if (!IsCallable(e))
                throw new TypeError("Array#find: predicate must be a function");
            if (0 !== t) {
                var a;
                arguments.length > 0 && (a = arguments[1]);
                for (var s, l = 0; l < t; l++)
                    if (s = r[l],
                    e.apply(a, [s, l, r]))
                        return s
            }
        }
        ;

    }
    , {
        "es-abstract/2022/IsCallable": 20,
        "es-abstract/2022/ToLength": 27,
        "es-abstract/2022/ToObject": 29
    }],
    2: [function(require, module, exports) {
        "use strict";
        var define = require("define-properties")
          , callBound = require("call-bind/callBound")
          , RequireObjectCoercible = require("es-abstract/2022/RequireObjectCoercible")
          , implementation = require("./implementation")
          , getPolyfill = require("./polyfill")
          , shim = require("./shim")
          , $slice = callBound("Array.prototype.slice")
          , polyfill = getPolyfill()
          , boundFindShim = function(e, i) {
            RequireObjectCoercible(e);
            var l = $slice(arguments, 1);
            return polyfill.apply(e, l)
        };
        define(boundFindShim, {
            getPolyfill: getPolyfill,
            implementation: implementation,
            shim: shim
        }),
        module.exports = boundFindShim;

    }
    , {
        "./implementation": 1,
        "./polyfill": 3,
        "./shim": 4,
        "call-bind/callBound": 13,
        "define-properties": 16,
        "es-abstract/2022/RequireObjectCoercible": 23
    }],
    3: [function(require, module, exports) {
        "use strict";
        module.exports = function() {
            return Array.prototype.find && 1 !== [, 1].find(function() {
                return !0
            }) ? Array.prototype.find : require("./implementation")
        }
        ;

    }
    , {
        "./implementation": 1
    }],
    4: [function(require, module, exports) {
        "use strict";
        var define = require("define-properties")
          , shimUnscopables = require("es-shim-unscopables")
          , getPolyfill = require("./polyfill");
        module.exports = function() {
            var e = getPolyfill();
            return define(Array.prototype, {
                find: e
            }, {
                find: function() {
                    return Array.prototype.find !== e
                }
            }),
            shimUnscopables("find"),
            e
        }
        ;

    }
    , {
        "./polyfill": 3,
        "define-properties": 16,
        "es-shim-unscopables": 43
    }],
    5: [function(require, module, exports) {
        "use strict";
        var Call = require("es-abstract/2022/Call")
          , Get = require("es-abstract/2022/Get")
          , IsCallable = require("es-abstract/2022/IsCallable")
          , LengthOfArrayLike = require("es-abstract/2022/LengthOfArrayLike")
          , ToBoolean = require("es-abstract/2022/ToBoolean")
          , ToObject = require("es-abstract/2022/ToObject")
          , ToString = require("es-abstract/2022/ToString");
        module.exports = function(e) {
            var r = ToObject(this)
              , t = LengthOfArrayLike(r);
            if (!IsCallable(e))
                throw new TypeError("Array#findIndex: predicate must be a function");
            for (var a = arguments.length > 1 ? arguments[1] : void 0, o = 0; o < t; ) {
                var i = ToString(o)
                  , s = Get(r, i);
                if (ToBoolean(Call(e, a, [s, o, r])))
                    return o;
                o += 1
            }
            return -1
        }
        ;

    }
    , {
        "es-abstract/2022/Call": 17,
        "es-abstract/2022/Get": 18,
        "es-abstract/2022/IsCallable": 20,
        "es-abstract/2022/LengthOfArrayLike": 22,
        "es-abstract/2022/ToBoolean": 25,
        "es-abstract/2022/ToObject": 29,
        "es-abstract/2022/ToString": 31
    }],
    6: [function(require, module, exports) {
        "use strict";
        var define = require("define-properties")
          , RequireObjectCoercible = require("es-abstract/2022/RequireObjectCoercible")
          , callBind = require("call-bind")
          , callBound = require("call-bind/callBound")
          , implementation = require("./implementation")
          , getPolyfill = require("./polyfill")
          , shim = require("./shim")
          , $slice = callBound("Array.prototype.slice")
          , polyfill = callBind.apply(getPolyfill())
          , boundShim = function(e, i) {
            RequireObjectCoercible(e);
            var l = $slice(arguments, 1);
            return polyfill(e, l)
        };
        define(boundShim, {
            getPolyfill: getPolyfill,
            implementation: implementation,
            shim: shim
        }),
        module.exports = boundShim;

    }
    , {
        "./implementation": 5,
        "./polyfill": 7,
        "./shim": 8,
        "call-bind": 14,
        "call-bind/callBound": 13,
        "define-properties": 16,
        "es-abstract/2022/RequireObjectCoercible": 23
    }],
    7: [function(require, module, exports) {
        "use strict";
        var implementation = require("./implementation");
        module.exports = function() {
            return Array.prototype.findIndex && 0 === [, 1].findIndex(function(e, n) {
                return 0 === n
            }) ? Array.prototype.findIndex : implementation
        }
        ;

    }
    , {
        "./implementation": 5
    }],
    8: [function(require, module, exports) {
        "use strict";
        var define = require("define-properties")
          , shimUnscopables = require("es-shim-unscopables")
          , getPolyfill = require("./polyfill");
        module.exports = function() {
            var e = getPolyfill();
            return define(Array.prototype, {
                findIndex: e
            }, {
                findIndex: function() {
                    return Array.prototype.findIndex !== e
                }
            }),
            shimUnscopables("findIndex"),
            e
        }
        ;

    }
    , {
        "./polyfill": 7,
        "define-properties": 16,
        "es-shim-unscopables": 43
    }],
    9: [function(require, module, exports) {
        function applyHook(o, p, n, a, c, f) {
            o.forEach(function(o) {
                o(p, n, a, c, f)
            })
        }
        module.exports = applyHook;

    }
    , {}],
    10: [function(require, module, exports) {
        var mutate = require("xtend/mutable")
          , nanotick = require("nanotick")
          , xtend = require("xtend")
          , applyHook = require("./apply-hook");
        function dispatcher(t) {
            var r = []
              , n = []
              , e = []
              , o = []
              , a = []
              , u = []
              , i = [];
            y(t = t || {});
            var c = !1
              , s = !1
              , f = !1
              , p = !1
              , l = !1
              , d = m._subscriptions = {}
              , h = m._reducers = {}
              , v = m._effects = {}
              , w = m._models = []
              , k = {}
              , E = nanotick();
            return m.model = b,
            m.state = function(t) {
                var r = (t = t || {}).state;
                if (!t.state && !1 === t.freeze)
                    return xtend(k);
                if (!t.state)
                    return Object.freeze(xtend(k));
                var n = []
                  , e = {};
                w.forEach(function(t) {
                    var o = t.namespace;
                    n.push(o);
                    var a = t.state || {};
                    o ? (e[o] = e[o] || {},
                    apply(o, a, e),
                    e[o] = xtend(e[o], r[o])) : mutate(e, a)
                }),
                Object.keys(r).forEach(function(t) {
                    -1 === n.indexOf(t) && (e[t] = r[t])
                });
                var o = wrapHook(xtend(k, xtend(r, e)), a);
                return !1 === t.freeze ? o : Object.freeze(o)
            }
            ,
            m.start = m,
            m.stop = function() {
                l = !0
            }
            ,
            m.use = y,
            m;
            function y(t) {
                t.onStateChange && r.push(t.onStateChange),
                t.onError && e.push(wrapOnError(t.onError)),
                t.onAction && n.push(t.onAction),
                t.wrapSubscriptions && o.push(t.wrapSubscriptions),
                t.wrapInitialState && a.push(t.wrapInitialState),
                t.wrapReducers && u.push(t.wrapReducers),
                t.wrapEffects && i.push(t.wrapEffects),
                t.models && t.models.forEach(b)
            }
            function b(t) {
                w.push(t)
            }
            function m(t) {
                return t = t || {},
                w.forEach(function(r) {
                    var n = r.namespace;
                    if (!f && r.state && !1 !== t.state) {
                        var a = r.state || {};
                        n ? (k[n] = k[n] || {},
                        apply(n, a, k)) : mutate(k, a)
                    }
                    !c && r.reducers && !1 !== t.reducers && apply(n, r.reducers, h, function(t) {
                        return wrapHook(t, u)
                    }),
                    !s && r.effects && !1 !== t.effects && apply(n, r.effects, v, function(t) {
                        return wrapHook(t, i)
                    }),
                    !p && r.subscriptions && !1 !== t.subscriptions && apply(n, r.subscriptions, d, function(t, r) {
                        var a = y("subscription: " + (n ? n + ":" + r : r));
                        return (t = wrapHook(t, o))(a, function(t) {
                            applyHook(e, t, k, y)
                        }),
                        t
                    })
                }),
                f || !1 === t.state || (k = wrapHook(k, a)),
                t.noSubscriptions || (p = !0),
                t.noReducers || (c = !0),
                t.noEffects || (s = !0),
                t.noState || (f = !0),
                e.length || e.push(wrapOnError(defaultOnError)),
                y;
                function y(t, r) {
                    return function(n, o, a) {
                        a || r || (a = o,
                        o = null);
                        var u = r ? function(t) {
                            (t = t || null) && applyHook(e, t, k, function(t) {
                                return function(r, n) {
                                    b(r, n = void 0 === n ? null : n, t, u)
                                }
                            })
                        }
                        : a;
                        b(n, o = void 0 === o ? null : o, t, u)
                    }
                }
                function b(t, e, o, a) {
                    l || E(function() {
                        var u = !1
                          , i = !1
                          , c = xtend(k);
                        n.length && applyHook(n, k, e, t, o, y);
                        var s = t;
                        if (/:/.test(t)) {
                            var f = t.split(":")
                              , p = f.shift();
                            s = f.join(":")
                        }
                        var l = p ? h[p] : h;
                        if (l && l[s]) {
                            if (p) {
                                var d = l[s](k[p], e);
                                c[p] = xtend(k[p], d)
                            } else
                                mutate(c, h[s](k, e));
                            u = !0,
                            r.length && applyHook(r, c, e, k, s, y),
                            k = c,
                            a(null, c)
                        }
                        var w = p ? v[p] : v;
                        if (!u && w && w[s]) {
                            var E = y("effect: " + t);
                            p ? w[s](k[p], e, E, a) : w[s](k, e, E, a),
                            i = !0
                        }
                        if (!u && !i)
                            throw new Error("Could not find action " + s)
                    })()
                }
            }
        }
        function apply(t, r, n, e) {
            t && !n[t] && (n[t] = {}),
            Object.keys(r).forEach(function(o) {
                var a = e ? e(r[o], o) : r[o];
                t ? n[t][o] = a : n[o] = a
            })
        }
        function defaultOnError(t) {
            throw t
        }
        function wrapOnError(t) {
            return function(r, n, e) {
                r && t(r, n, e)
            }
        }
        function wrapHook(t, r) {
            return r.forEach(function(r) {
                t = r(t)
            }),
            t
        }
        module.exports = dispatcher;

    }
    , {
        "./apply-hook": 9,
        "nanotick": 67,
        "xtend": 92,
        "xtend/mutable": 93
    }],
    11: [function(require, module, exports) {
        var document = require("global/document")
          , hyperx = require("hyperx")
          , onload = require("on-load")
          , SVGNS = "http://www.w3.org/2000/svg"
          , XLINKNS = "http://www.w3.org/1999/xlink"
          , BOOL_PROPS = {
            autofocus: 1,
            checked: 1,
            defaultchecked: 1,
            disabled: 1,
            formnovalidate: 1,
            indeterminate: 1,
            readonly: 1,
            required: 1,
            selected: 1,
            willvalidate: 1
        }
          , COMMENT_TAG = "!--"
          , SVG_TAGS = ["svg", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "linearGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "set", "stop", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"];
        function belCreateElement(e, t, n) {
            var a;
            -1 !== SVG_TAGS.indexOf(e) && (t.namespace = SVGNS);
            var o = !1;
            if (t.namespace && (o = t.namespace,
            delete t.namespace),
            o)
                a = document.createElementNS(o, e);
            else {
                if (e === COMMENT_TAG)
                    return document.createComment(t.comment);
                a = document.createElement(e)
            }
            if (t.onload || t.onunload) {
                var l = t.onload || function() {}
                  , r = t.onunload || function() {}
                ;
                onload(a, function() {
                    l(a)
                }, function() {
                    r(a)
                }, belCreateElement.caller.caller.caller),
                delete t.onload,
                delete t.onunload
            }
            for (var i in t)
                if (t.hasOwnProperty(i)) {
                    var f = i.toLowerCase()
                      , c = t[i];
                    if ("classname" === f && (f = "class",
                    i = "class"),
                    "htmlFor" === i && (i = "for"),
                    BOOL_PROPS[f])
                        if ("true" === c)
                            c = f;
                        else if ("false" === c)
                            continue;
                    "on" === f.slice(0, 2) ? a[i] = c : o ? "xlink:href" === i ? a.setAttributeNS(XLINKNS, i, c) : /^xmlns($|:)/i.test(i) || a.setAttributeNS(null, i, c) : a.setAttribute(i, c)
                }
            return function e(t) {
                if (Array.isArray(t))
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        if (Array.isArray(o))
                            e(o);
                        else {
                            if (("number" == typeof o || "boolean" == typeof o || "function" == typeof o || o instanceof Date || o instanceof RegExp) && (o = o.toString()),
                            "string" == typeof o) {
                                if (a.lastChild && "#text" === a.lastChild.nodeName) {
                                    a.lastChild.nodeValue += o;
                                    continue
                                }
                                o = document.createTextNode(o)
                            }
                            o && o.nodeType && a.appendChild(o)
                        }
                    }
            }(n),
            a
        }
        module.exports = hyperx(belCreateElement, {
            comments: !0
        }),
        module.exports.default = module.exports,
        module.exports.createElement = belCreateElement;

    }
    , {
        "global/document": 49,
        "hyperx": 59,
        "on-load": 72
    }],
    12: [function(require, module, exports) {
    }
    , {}],
    13: [function(require, module, exports) {
        "use strict";
        var GetIntrinsic = require("get-intrinsic")
          , callBind = require("./")
          , $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
        module.exports = function(i, n) {
            var t = GetIntrinsic(i, !!n);
            return "function" == typeof t && $indexOf(i, ".prototype.") > -1 ? callBind(t) : t
        }
        ;

    }
    , {
        "./": 14,
        "get-intrinsic": 48
    }],
    14: [function(require, module, exports) {
        "use strict";
        var bind = require("function-bind")
          , GetIntrinsic = require("get-intrinsic")
          , $apply = GetIntrinsic("%Function.prototype.apply%")
          , $call = GetIntrinsic("%Function.prototype.call%")
          , $reflectApply = GetIntrinsic("%Reflect.apply%", !0) || bind.call($call, $apply)
          , $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", !0)
          , $defineProperty = GetIntrinsic("%Object.defineProperty%", !0)
          , $max = GetIntrinsic("%Math.max%");
        if ($defineProperty)
            try {
                $defineProperty({}, "a", {
                    value: 1
                })
            } catch (e) {
                $defineProperty = null
            }
        module.exports = function(e) {
            var t = $reflectApply(bind, $call, arguments);
            $gOPD && $defineProperty && ($gOPD(t, "length").configurable && $defineProperty(t, "length", {
                value: 1 + $max(0, e.length - (arguments.length - 1))
            }));
            return t
        }
        ;
        var applyBind = function() {
            return $reflectApply(bind, $apply, arguments)
        };
        $defineProperty ? $defineProperty(module.exports, "apply", {
            value: applyBind
        }) : module.exports.apply = applyBind;

    }
    , {
        "function-bind": 47,
        "get-intrinsic": 48
    }],
    15: [function(require, module, exports) {
        const createLocation = require("sheet-router/create-location")
          , onHistoryChange = require("sheet-router/history")
          , sheetRouter = require("sheet-router")
          , onHref = require("sheet-router/href")
          , walk = require("sheet-router/walk")
          , mutate = require("xtend/mutable")
          , barracks = require("barracks")
          , nanoraf = require("nanoraf")
          , xtend = require("xtend")
          , yo = require("yo-yo");
        function choo(t) {
            t = t || {};
            const e = a._store = barracks();
            var n = a._router = null
              , o = null
              , r = null
              , u = null
              , c = null;
            return "undefined" != typeof window && e.use({
                onStateChange: function(t, e, o, u, a) {
                    c || (c = nanoraf(function(t, e) {
                        const o = n(t.location.href, t, e);
                        r = yo.update(r, o)
                    }));
                    c(t, o)
                }
            }),
            e.use(t),
            a.toString = function(t, n) {
                n = n || {},
                e.start({
                    subscriptions: !1,
                    reducers: !1,
                    effects: !1
                });
                const r = e.state({
                    state: n
                })
                  , c = i(o, u, function() {
                    return function() {}
                })(t, r);
                return c.outerHTML || c.toString()
            }
            ,
            a.router = function(t, e) {
                o = t,
                u = e
            }
            ,
            a.model = function(t) {
                e.model(t)
            }
            ,
            a.start = a,
            a.stop = e.stop,
            a.use = function(t) {
                e.use(t)
            }
            ,
            a;
            function a() {
                e.model(createLocationModel(t));
                const c = e.start(t);
                n = a._router = i(o, u, c);
                const s = e.state({
                    state: {}
                })
                  , f = n(s.location.href, s);
                return r = f,
                f.done = function(t) {
                    r = t
                }
                ,
                f
            }
            function i(e, n, o) {
                var r = null;
                n || (n = e,
                e = {}),
                e = mutate({
                    thunk: "match"
                }, e);
                const u = sheetRouter(e, n);
                return walk(u, function(e, n) {
                    const u = o("view: " + e, !0);
                    return function(e) {
                        return function(o) {
                            const c = xtend(o);
                            c.location = xtend(c.location, {
                                params: e
                            });
                            const a = r;
                            return r = c,
                            !1 !== t.freeze && Object.freeze(c),
                            n(c, a, u)
                        }
                    }
                }),
                u
            }
        }
        function createLocationModel(t) {
            return {
                namespace: "location",
                state: mutate(createLocation(), {
                    params: {}
                }),
                subscriptions: function(t) {
                    const e = {};
                    !1 !== t.history && (e.handleHistory = function(t, e) {
                        onHistoryChange(function(n) {
                            t("location:touch", n, e)
                        })
                    }
                    );
                    !1 !== t.href && (e.handleHref = function(t, e) {
                        onHref(function(n) {
                            t("location:set", n, e)
                        })
                    }
                    );
                    return e
                }(t),
                effects: {
                    set: function(e, n, o, r) {
                        const u = createLocation(e, n);
                        !1 !== t.history && u.href !== e.href && window.history.pushState({}, null, u.href);
                        o("location:update", u, r)
                    },
                    touch: function(t, e, n, o) {
                        const r = createLocation(t, e);
                        n("location:update", r, o)
                    }
                },
                reducers: {
                    update: function(e, n) {
                        if (!1 !== t.history && n.hash && n.hash !== e.hash)
                            try {
                                const t = document.querySelector(n.hash);
                                t && t.scrollIntoView(!0)
                            } catch (t) {
                                return n
                            }
                        return n
                    }
                }
            }
        }
        module.exports = choo;

    }
    , {
        "barracks": 10,
        "nanoraf": 66,
        "sheet-router": 80,
        "sheet-router/create-location": 77,
        "sheet-router/history": 78,
        "sheet-router/href": 79,
        "sheet-router/walk": 82,
        "xtend": 92,
        "xtend/mutable": 93,
        "yo-yo": 94
    }],
    16: [function(require, module, exports) {
        "use strict";
        var keys = require("object-keys")
          , hasSymbols = "function" == typeof Symbol && "symbol" == typeof Symbol("foo")
          , toStr = Object.prototype.toString
          , concat = Array.prototype.concat
          , origDefineProperty = Object.defineProperty
          , isFunction = function(e) {
            return "function" == typeof e && "[object Function]" === toStr.call(e)
        }
          , hasPropertyDescriptors = require("has-property-descriptors")()
          , supportsDescriptors = origDefineProperty && hasPropertyDescriptors
          , defineProperty = function(e, r, t, o) {
            if (r in e)
                if (!0 === o) {
                    if (e[r] === t)
                        return
                } else if (!isFunction(o) || !o())
                    return;
            supportsDescriptors ? origDefineProperty(e, r, {
                configurable: !0,
                enumerable: !1,
                value: t,
                writable: !0
            }) : e[r] = t
        }
          , defineProperties = function(e, r) {
            var t = arguments.length > 2 ? arguments[2] : {}
              , o = keys(r);
            hasSymbols && (o = concat.call(o, Object.getOwnPropertySymbols(r)));
            for (var i = 0; i < o.length; i += 1)
                defineProperty(e, o[i], r[o[i]], t[o[i]])
        };
        defineProperties.supportsDescriptors = !!supportsDescriptors,
        module.exports = defineProperties;

    }
    , {
        "has-property-descriptors": 51,
        "object-keys": 70
    }],
    17: [function(require, module, exports) {
        "use strict";
        var GetIntrinsic = require("get-intrinsic")
          , callBound = require("call-bind/callBound")
          , $TypeError = GetIntrinsic("%TypeError%")
          , IsArray = require("./IsArray")
          , $apply = GetIntrinsic("%Reflect.apply%", !0) || callBound("Function.prototype.apply");
        module.exports = function(r, e) {
            var t = arguments.length > 2 ? arguments[2] : [];
            if (!IsArray(t))
                throw new $TypeError("Assertion failed: optional `argumentsList`, if provided, must be a List");
            return $apply(r, e, t)
        }
        ;

    }
    , {
        "./IsArray": 19,
        "call-bind/callBound": 13,
        "get-intrinsic": 48
    }],
    18: [function(require, module, exports) {
        "use strict";
        var GetIntrinsic = require("get-intrinsic")
          , $TypeError = GetIntrinsic("%TypeError%")
          , inspect = require("object-inspect")
          , IsPropertyKey = require("./IsPropertyKey")
          , Type = require("./Type");
        module.exports = function(e, r) {
            if ("Object" !== Type(e))
                throw new $TypeError("Assertion failed: Type(O) is not Object");
            if (!IsPropertyKey(r))
                throw new $TypeError("Assertion failed: IsPropertyKey(P) is not true, got " + inspect(r));
            return e[r]
        }
        ;

    }
    , {
        "./IsPropertyKey": 21,
        "./Type": 32,
        "get-intrinsic": 48,
        "object-inspect": 68
    }],
    19: [function(require, module, exports) {
        "use strict";
        module.exports = require("../helpers/IsArray");

    }
    , {
        "../helpers/IsArray": 37
    }],
    20: [function(require, module, exports) {
        "use strict";
        module.exports = require("is-callable");

    }
    , {
        "is-callable": 60
    }],
    21: [function(require, module, exports) {
        "use strict";
        module.exports = function(t) {
            return "string" == typeof t || "symbol" == typeof t
        }
        ;

    }
    , {}],
    22: [function(require, module, exports) {
        "use strict";
        var GetIntrinsic = require("get-intrinsic")
          , $TypeError = GetIntrinsic("%TypeError%")
          , Get = require("./Get")
          , ToLength = require("./ToLength")
          , Type = require("./Type");
        module.exports = function(e) {
            if ("Object" !== Type(e))
                throw new $TypeError("Assertion failed: `obj` must be an Object");
            return ToLength(Get(e, "length"))
        }
        ;

    }
    , {
        "./Get": 18,
        "./ToLength": 27,
        "./Type": 32,
        "get-intrinsic": 48
    }],
    23: [function(require, module, exports) {
        "use strict";
        module.exports = require("../5/CheckObjectCoercible");

    }
    , {
        "../5/CheckObjectCoercible": 35
    }],
    24: [function(require, module, exports) {
        "use strict";
        var GetIntrinsic = require("get-intrinsic")
          , $Number = GetIntrinsic("%Number%")
          , $RegExp = GetIntrinsic("%RegExp%")
          , $TypeError = GetIntrinsic("%TypeError%")
          , $parseInteger = GetIntrinsic("%parseInt%")
          , callBound = require("call-bind/callBound")
          , regexTester = require("safe-regex-test")
          , $strSlice = callBound("String.prototype.slice")
          , isBinary = regexTester(/^0b[01]+$/i)
          , isOctal = regexTester(/^0o[0-7]+$/i)
          , isInvalidHexLiteral = regexTester(/^[-+]0x[0-9a-f]+$/i)
          , nonWS = ["", "​", "￾"].join("")
          , nonWSregex = new $RegExp("[" + nonWS + "]","g")
          , hasNonWS = regexTester(nonWSregex)
          , $trim = require("string.prototype.trim")
          , Type = require("./Type");
        module.exports = function e(r) {
            if ("String" !== Type(r))
                throw new $TypeError("Assertion failed: `argument` is not a String");
            if (isBinary(r))
                return $Number($parseInteger($strSlice(r, 2), 2));
            if (isOctal(r))
                return $Number($parseInteger($strSlice(r, 2), 8));
            if (hasNonWS(r) || isInvalidHexLiteral(r))
                return NaN;
            var i = $trim(r);
            return i !== r ? e(i) : $Number(r)
        }
        ;

    }
    , {
        "./Type": 32,
        "call-bind/callBound": 13,
        "get-intrinsic": 48,
        "safe-regex-test": 75,
        "string.prototype.trim": 84
    }],
    25: [function(require, module, exports) {
        "use strict";
        module.exports = function(t) {
            return !!t
        }
        ;

    }
    , {}],
    26: [function(require, module, exports) {
        "use strict";
        var abs = require("./abs")
          , floor = require("./floor")
          , ToNumber = require("./ToNumber")
          , $isNaN = require("../helpers/isNaN")
          , $isFinite = require("../helpers/isFinite")
          , $sign = require("../helpers/sign");
        module.exports = function(r) {
            var e = ToNumber(r);
            if ($isNaN(e) || 0 === e)
                return 0;
            if (!$isFinite(e))
                return e;
            var i = floor(abs(e));
            return 0 === i ? 0 : $sign(e) * i
        }
        ;

    }
    , {
        "../helpers/isFinite": 38,
        "../helpers/isNaN": 39,
        "../helpers/sign": 42,
        "./ToNumber": 28,
        "./abs": 33,
        "./floor": 34
    }],
    27: [function(require, module, exports) {
        "use strict";
        var MAX_SAFE_INTEGER = require("../helpers/maxSafeInteger")
          , ToIntegerOrInfinity = require("./ToIntegerOrInfinity");
        module.exports = function(e) {
            var r = ToIntegerOrInfinity(e);
            return r <= 0 ? 0 : r > MAX_SAFE_INTEGER ? MAX_SAFE_INTEGER : r
        }
        ;

    }
    , {
        "../helpers/maxSafeInteger": 41,
        "./ToIntegerOrInfinity": 26
    }],
    28: [function(require, module, exports) {
        "use strict";
        var GetIntrinsic = require("get-intrinsic")
          , $TypeError = GetIntrinsic("%TypeError%")
          , $Number = GetIntrinsic("%Number%")
          , isPrimitive = require("../helpers/isPrimitive")
          , ToPrimitive = require("./ToPrimitive")
          , StringToNumber = require("./StringToNumber");
        module.exports = function(r) {
            var i = isPrimitive(r) ? r : ToPrimitive(r, $Number);
            if ("symbol" == typeof i)
                throw new $TypeError("Cannot convert a Symbol value to a number");
            if ("bigint" == typeof i)
                throw new $TypeError("Conversion from 'BigInt' to 'number' is not allowed.");
            return "string" == typeof i ? StringToNumber(i) : $Number(i)
        }
        ;

    }
    , {
        "../helpers/isPrimitive": 40,
        "./StringToNumber": 24,
        "./ToPrimitive": 30,
        "get-intrinsic": 48
    }],
    29: [function(require, module, exports) {
        "use strict";
        var GetIntrinsic = require("get-intrinsic")
          , $Object = GetIntrinsic("%Object%")
          , RequireObjectCoercible = require("./RequireObjectCoercible");
        module.exports = function(e) {
            return RequireObjectCoercible(e),
            $Object(e)
        }
        ;

    }
    , {
        "./RequireObjectCoercible": 23,
        "get-intrinsic": 48
    }],
    30: [function(require, module, exports) {
        "use strict";
        var toPrimitive = require("es-to-primitive/es2015");
        module.exports = function(i) {
            return arguments.length > 1 ? toPrimitive(i, arguments[1]) : toPrimitive(i)
        }
        ;

    }
    , {
        "es-to-primitive/es2015": 44
    }],
    31: [function(require, module, exports) {
        "use strict";
        var GetIntrinsic = require("get-intrinsic")
          , $String = GetIntrinsic("%String%")
          , $TypeError = GetIntrinsic("%TypeError%");
        module.exports = function(r) {
            if ("symbol" == typeof r)
                throw new $TypeError("Cannot convert a Symbol value to a string");
            return $String(r)
        }
        ;

    }
    , {
        "get-intrinsic": 48
    }],
    32: [function(require, module, exports) {
        "use strict";
        var ES5Type = require("../5/Type");
        module.exports = function(e) {
            return "symbol" == typeof e ? "Symbol" : "bigint" == typeof e ? "BigInt" : ES5Type(e)
        }
        ;

    }
    , {
        "../5/Type": 36
    }],
    33: [function(require, module, exports) {
        "use strict";
        var GetIntrinsic = require("get-intrinsic")
          , $abs = GetIntrinsic("%Math.abs%");
        module.exports = function(t) {
            return $abs(t)
        }
        ;

    }
    , {
        "get-intrinsic": 48
    }],
    34: [function(require, module, exports) {
        "use strict";
        var Type = require("./Type")
          , $floor = Math.floor;
        module.exports = function(r) {
            return "BigInt" === Type(r) ? r : $floor(r)
        }
        ;

    }
    , {
        "./Type": 32
    }],
    35: [function(require, module, exports) {
        "use strict";
        var GetIntrinsic = require("get-intrinsic")
          , $TypeError = GetIntrinsic("%TypeError%");
        module.exports = function(r, e) {
            if (null == r)
                throw new $TypeError(e || "Cannot call method on " + r);
            return r
        }
        ;

    }
    , {
        "get-intrinsic": 48
    }],
    36: [function(require, module, exports) {
        "use strict";
        module.exports = function(e) {
            return null === e ? "Null" : void 0 === e ? "Undefined" : "function" == typeof e || "object" == typeof e ? "Object" : "number" == typeof e ? "Number" : "boolean" == typeof e ? "Boolean" : "string" == typeof e ? "String" : void 0
        }
        ;

    }
    , {}],
    37: [function(require, module, exports) {
        "use strict";
        var GetIntrinsic = require("get-intrinsic")
          , $Array = GetIntrinsic("%Array%")
          , toStr = !$Array.isArray && require("call-bind/callBound")("Object.prototype.toString");
        module.exports = $Array.isArray || function(r) {
            return "[object Array]" === toStr(r)
        }
        ;

    }
    , {
        "call-bind/callBound": 13,
        "get-intrinsic": 48
    }],
    38: [function(require, module, exports) {
        "use strict";
        var $isNaN = require("./isNaN");
        module.exports = function(e) {
            return ("number" == typeof e || "bigint" == typeof e) && !$isNaN(e) && e !== 1 / 0 && e !== -1 / 0
        }
        ;

    }
    , {
        "./isNaN": 39
    }],
    39: [function(require, module, exports) {
        "use strict";
        module.exports = Number.isNaN || function(e) {
            return e != e
        }
        ;

    }
    , {}],
    40: [function(require, module, exports) {
        "use strict";
        module.exports = function(t) {
            return null === t || "function" != typeof t && "object" != typeof t
        }
        ;

    }
    , {}],
    41: [function(require, module, exports) {
        "use strict";
        var GetIntrinsic = require("get-intrinsic")
          , $Math = GetIntrinsic("%Math%")
          , $Number = GetIntrinsic("%Number%");
        module.exports = $Number.MAX_SAFE_INTEGER || $Math.pow(2, 53) - 1;

    }
    , {
        "get-intrinsic": 48
    }],
    42: [function(require, module, exports) {
        "use strict";
        module.exports = function(t) {
            return t >= 0 ? 1 : -1
        }
        ;

    }
    , {}],
    43: [function(require, module, exports) {
        "use strict";
        var has = require("has")
          , hasUnscopables = "function" == typeof Symbol && "symbol" == typeof Symbol.unscopables
          , map = hasUnscopables && Array.prototype[Symbol.unscopables]
          , $TypeError = TypeError;
        module.exports = function(o) {
            if ("string" != typeof o || !o)
                throw new $TypeError("method must be a non-empty string");
            if (!has(Array.prototype, o))
                throw new $TypeError("method must be on Array.prototype");
            hasUnscopables && (map[o] = !0)
        }
        ;

    }
    , {
        "has": 56
    }],
    44: [function(require, module, exports) {
        "use strict";
        var hasSymbols = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          , isPrimitive = require("./helpers/isPrimitive")
          , isCallable = require("is-callable")
          , isDate = require("is-date-object")
          , isSymbol = require("is-symbol")
          , ordinaryToPrimitive = function(r, e) {
            if (null == r)
                throw new TypeError("Cannot call method on " + r);
            if ("string" != typeof e || "number" !== e && "string" !== e)
                throw new TypeError('hint must be "string" or "number"');
            var i, t, o, l = "string" === e ? ["toString", "valueOf"] : ["valueOf", "toString"];
            for (o = 0; o < l.length; ++o)
                if (i = r[l[o]],
                isCallable(i) && (t = i.call(r),
                isPrimitive(t)))
                    return t;
            throw new TypeError("No default value")
        }
          , GetMethod = function(r, e) {
            var i = r[e];
            if (null != i) {
                if (!isCallable(i))
                    throw new TypeError(i + " returned for property " + e + " of object " + r + " is not a function");
                return i
            }
        };
        module.exports = function(r) {
            if (isPrimitive(r))
                return r;
            var e, i = "default";
            if (arguments.length > 1 && (arguments[1] === String ? i = "string" : arguments[1] === Number && (i = "number")),
            hasSymbols && (Symbol.toPrimitive ? e = GetMethod(r, Symbol.toPrimitive) : isSymbol(r) && (e = Symbol.prototype.valueOf)),
            void 0 !== e) {
                var t = e.call(r, i);
                if (isPrimitive(t))
                    return t;
                throw new TypeError("unable to convert exotic object to primitive")
            }
            return "default" === i && (isDate(r) || isSymbol(r)) && (i = "string"),
            ordinaryToPrimitive(r, "default" === i ? "number" : i)
        }
        ;

    }
    , {
        "./helpers/isPrimitive": 45,
        "is-callable": 60,
        "is-date-object": 61,
        "is-symbol": 64
    }],
    45: [function(require, module, exports) {
        "use strict";
        module.exports = function(t) {
            return null === t || "function" != typeof t && "object" != typeof t
        }
        ;

    }
    , {}],
    46: [function(require, module, exports) {
        "use strict";
        var ERROR_MESSAGE = "Function.prototype.bind called on incompatible "
          , slice = Array.prototype.slice
          , toStr = Object.prototype.toString
          , funcType = "[object Function]";
        module.exports = function(t) {
            var n = this;
            if ("function" != typeof n || toStr.call(n) !== funcType)
                throw new TypeError(ERROR_MESSAGE + n);
            for (var o, e = slice.call(arguments, 1), r = Math.max(0, n.length - e.length), c = [], i = 0; i < r; i++)
                c.push("$" + i);
            if (o = Function("binder", "return function (" + c.join(",") + "){ return binder.apply(this,arguments); }")(function() {
                if (this instanceof o) {
                    var r = n.apply(this, e.concat(slice.call(arguments)));
                    return Object(r) === r ? r : this
                }
                return n.apply(t, e.concat(slice.call(arguments)))
            }),
            n.prototype) {
                var p = function() {};
                p.prototype = n.prototype,
                o.prototype = new p,
                p.prototype = null
            }
            return o
        }
        ;

    }
    , {}],
    47: [function(require, module, exports) {
        "use strict";
        var implementation = require("./implementation");
        module.exports = Function.prototype.bind || implementation;

    }
    , {
        "./implementation": 46
    }],
    48: [function(require, module, exports) {
        "use strict";
        var undefined, $SyntaxError = SyntaxError, $Function = Function, $TypeError = TypeError, getEvalledConstructor = function(r) {
            try {
                return $Function('"use strict"; return (' + r + ").constructor;")()
            } catch (r) {}
        }, $gOPD = Object.getOwnPropertyDescriptor;
        if ($gOPD)
            try {
                $gOPD({}, "")
            } catch (r) {
                $gOPD = null
            }
        var throwTypeError = function() {
            throw new $TypeError
        }
          , ThrowTypeError = $gOPD ? function() {
            try {
                return arguments.callee,
                throwTypeError
            } catch (r) {
                try {
                    return $gOPD(arguments, "callee").get
                } catch (r) {
                    return throwTypeError
                }
            }
        }() : throwTypeError
          , hasSymbols = require("has-symbols")()
          , hasProto = require("has-proto")()
          , getProto = Object.getPrototypeOf || (hasProto ? function(r) {
            return r.__proto__
        }
        : null)
          , needsEval = {}
          , TypedArray = "undefined" != typeof Uint8Array && getProto ? getProto(Uint8Array) : undefined
          , INTRINSICS = {
            "%AggregateError%": "undefined" == typeof AggregateError ? undefined : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? undefined : ArrayBuffer,
            "%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,
            "%AsyncFromSyncIteratorPrototype%": undefined,
            "%AsyncFunction%": needsEval,
            "%AsyncGenerator%": needsEval,
            "%AsyncGeneratorFunction%": needsEval,
            "%AsyncIteratorPrototype%": needsEval,
            "%Atomics%": "undefined" == typeof Atomics ? undefined : Atomics,
            "%BigInt%": "undefined" == typeof BigInt ? undefined : BigInt,
            "%BigInt64Array%": "undefined" == typeof BigInt64Array ? undefined : BigInt64Array,
            "%BigUint64Array%": "undefined" == typeof BigUint64Array ? undefined : BigUint64Array,
            "%Boolean%": Boolean,
            "%DataView%": "undefined" == typeof DataView ? undefined : DataView,
            "%Date%": Date,
            "%decodeURI%": decodeURI,
            "%decodeURIComponent%": decodeURIComponent,
            "%encodeURI%": encodeURI,
            "%encodeURIComponent%": encodeURIComponent,
            "%Error%": Error,
            "%eval%": eval,
            "%EvalError%": EvalError,
            "%Float32Array%": "undefined" == typeof Float32Array ? undefined : Float32Array,
            "%Float64Array%": "undefined" == typeof Float64Array ? undefined : Float64Array,
            "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? undefined : FinalizationRegistry,
            "%Function%": $Function,
            "%GeneratorFunction%": needsEval,
            "%Int8Array%": "undefined" == typeof Int8Array ? undefined : Int8Array,
            "%Int16Array%": "undefined" == typeof Int16Array ? undefined : Int16Array,
            "%Int32Array%": "undefined" == typeof Int32Array ? undefined : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,
            "%JSON%": "object" == typeof JSON ? JSON : undefined,
            "%Map%": "undefined" == typeof Map ? undefined : Map,
            "%MapIteratorPrototype%": "undefined" != typeof Map && hasSymbols && getProto ? getProto((new Map)[Symbol.iterator]()) : undefined,
            "%Math%": Math,
            "%Number%": Number,
            "%Object%": Object,
            "%parseFloat%": parseFloat,
            "%parseInt%": parseInt,
            "%Promise%": "undefined" == typeof Promise ? undefined : Promise,
            "%Proxy%": "undefined" == typeof Proxy ? undefined : Proxy,
            "%RangeError%": RangeError,
            "%ReferenceError%": ReferenceError,
            "%Reflect%": "undefined" == typeof Reflect ? undefined : Reflect,
            "%RegExp%": RegExp,
            "%Set%": "undefined" == typeof Set ? undefined : Set,
            "%SetIteratorPrototype%": "undefined" != typeof Set && hasSymbols && getProto ? getProto((new Set)[Symbol.iterator]()) : undefined,
            "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? undefined : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined,
            "%Symbol%": hasSymbols ? Symbol : undefined,
            "%SyntaxError%": $SyntaxError,
            "%ThrowTypeError%": ThrowTypeError,
            "%TypedArray%": TypedArray,
            "%TypeError%": $TypeError,
            "%Uint8Array%": "undefined" == typeof Uint8Array ? undefined : Uint8Array,
            "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? undefined : Uint8ClampedArray,
            "%Uint16Array%": "undefined" == typeof Uint16Array ? undefined : Uint16Array,
            "%Uint32Array%": "undefined" == typeof Uint32Array ? undefined : Uint32Array,
            "%URIError%": URIError,
            "%WeakMap%": "undefined" == typeof WeakMap ? undefined : WeakMap,
            "%WeakRef%": "undefined" == typeof WeakRef ? undefined : WeakRef,
            "%WeakSet%": "undefined" == typeof WeakSet ? undefined : WeakSet
        };
        if (getProto)
            try {
                null.error
            } catch (r) {
                var errorProto = getProto(getProto(r));
                INTRINSICS["%Error.prototype%"] = errorProto
            }
        var doEval = function r(e) {
            var t;
            if ("%AsyncFunction%" === e)
                t = getEvalledConstructor("async function () {}");
            else if ("%GeneratorFunction%" === e)
                t = getEvalledConstructor("function* () {}");
            else if ("%AsyncGeneratorFunction%" === e)
                t = getEvalledConstructor("async function* () {}");
            else if ("%AsyncGenerator%" === e) {
                var o = r("%AsyncGeneratorFunction%");
                o && (t = o.prototype)
            } else if ("%AsyncIteratorPrototype%" === e) {
                var n = r("%AsyncGenerator%");
                n && getProto && (t = getProto(n.prototype))
            }
            return INTRINSICS[e] = t,
            t
        }
          , LEGACY_ALIASES = {
            "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
            "%ArrayPrototype%": ["Array", "prototype"],
            "%ArrayProto_entries%": ["Array", "prototype", "entries"],
            "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
            "%ArrayProto_keys%": ["Array", "prototype", "keys"],
            "%ArrayProto_values%": ["Array", "prototype", "values"],
            "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
            "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
            "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
            "%BooleanPrototype%": ["Boolean", "prototype"],
            "%DataViewPrototype%": ["DataView", "prototype"],
            "%DatePrototype%": ["Date", "prototype"],
            "%ErrorPrototype%": ["Error", "prototype"],
            "%EvalErrorPrototype%": ["EvalError", "prototype"],
            "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
            "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
            "%FunctionPrototype%": ["Function", "prototype"],
            "%Generator%": ["GeneratorFunction", "prototype"],
            "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
            "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
            "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
            "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
            "%JSONParse%": ["JSON", "parse"],
            "%JSONStringify%": ["JSON", "stringify"],
            "%MapPrototype%": ["Map", "prototype"],
            "%NumberPrototype%": ["Number", "prototype"],
            "%ObjectPrototype%": ["Object", "prototype"],
            "%ObjProto_toString%": ["Object", "prototype", "toString"],
            "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
            "%PromisePrototype%": ["Promise", "prototype"],
            "%PromiseProto_then%": ["Promise", "prototype", "then"],
            "%Promise_all%": ["Promise", "all"],
            "%Promise_reject%": ["Promise", "reject"],
            "%Promise_resolve%": ["Promise", "resolve"],
            "%RangeErrorPrototype%": ["RangeError", "prototype"],
            "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
            "%RegExpPrototype%": ["RegExp", "prototype"],
            "%SetPrototype%": ["Set", "prototype"],
            "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
            "%StringPrototype%": ["String", "prototype"],
            "%SymbolPrototype%": ["Symbol", "prototype"],
            "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
            "%TypedArrayPrototype%": ["TypedArray", "prototype"],
            "%TypeErrorPrototype%": ["TypeError", "prototype"],
            "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
            "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
            "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
            "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
            "%URIErrorPrototype%": ["URIError", "prototype"],
            "%WeakMapPrototype%": ["WeakMap", "prototype"],
            "%WeakSetPrototype%": ["WeakSet", "prototype"]
        }
          , bind = require("function-bind")
          , hasOwn = require("has")
          , $concat = bind.call(Function.call, Array.prototype.concat)
          , $spliceApply = bind.call(Function.apply, Array.prototype.splice)
          , $replace = bind.call(Function.call, String.prototype.replace)
          , $strSlice = bind.call(Function.call, String.prototype.slice)
          , $exec = bind.call(Function.call, RegExp.prototype.exec)
          , rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g
          , reEscapeChar = /\\(\\)?/g
          , stringToPath = function(r) {
            var e = $strSlice(r, 0, 1)
              , t = $strSlice(r, -1);
            if ("%" === e && "%" !== t)
                throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
            if ("%" === t && "%" !== e)
                throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
            var o = [];
            return $replace(r, rePropName, function(r, e, t, n) {
                o[o.length] = t ? $replace(n, reEscapeChar, "$1") : e || r
            }),
            o
        }
          , getBaseIntrinsic = function(r, e) {
            var t, o = r;
            if (hasOwn(LEGACY_ALIASES, o) && (o = "%" + (t = LEGACY_ALIASES[o])[0] + "%"),
            hasOwn(INTRINSICS, o)) {
                var n = INTRINSICS[o];
                if (n === needsEval && (n = doEval(o)),
                void 0 === n && !e)
                    throw new $TypeError("intrinsic " + r + " exists, but is not available. Please file an issue!");
                return {
                    alias: t,
                    name: o,
                    value: n
                }
            }
            throw new $SyntaxError("intrinsic " + r + " does not exist!")
        };
        module.exports = function(r, e) {
            if ("string" != typeof r || 0 === r.length)
                throw new $TypeError("intrinsic name must be a non-empty string");
            if (arguments.length > 1 && "boolean" != typeof e)
                throw new $TypeError('"allowMissing" argument must be a boolean');
            if (null === $exec(/^%?[^%]*%?$/, r))
                throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
            var t = stringToPath(r)
              , o = t.length > 0 ? t[0] : ""
              , n = getBaseIntrinsic("%" + o + "%", e)
              , a = n.name
              , y = n.value
              , i = !1
              , p = n.alias;
            p && (o = p[0],
            $spliceApply(t, $concat([0, 1], p)));
            for (var d = 1, f = !0; d < t.length; d += 1) {
                var u = t[d]
                  , s = $strSlice(u, 0, 1)
                  , c = $strSlice(u, -1);
                if (('"' === s || "'" === s || "`" === s || '"' === c || "'" === c || "`" === c) && s !== c)
                    throw new $SyntaxError("property names with quotes must have matching quotes");
                if ("constructor" !== u && f || (i = !0),
                hasOwn(INTRINSICS, a = "%" + (o += "." + u) + "%"))
                    y = INTRINSICS[a];
                else if (null != y) {
                    if (!(u in y)) {
                        if (!e)
                            throw new $TypeError("base intrinsic for " + r + " exists, but the property is not available.");
                        return
                    }
                    if ($gOPD && d + 1 >= t.length) {
                        var l = $gOPD(y, u);
                        y = (f = !!l) && "get"in l && !("originalValue"in l.get) ? l.get : y[u]
                    } else
                        f = hasOwn(y, u),
                        y = y[u];
                    f && !i && (INTRINSICS[a] = y)
                }
            }
            return y
        }
        ;

    }
    , {
        "function-bind": 47,
        "has": 56,
        "has-proto": 52,
        "has-symbols": 53
    }],
    49: [function(require, module, exports) {
        (function(global) {
            (function() {
                var doccy, topLevel = "undefined" != typeof global ? global : "undefined" != typeof window ? window : {}, minDoc = require("min-document");
                "undefined" != typeof document ? doccy = document : (doccy = topLevel["__GLOBAL_DOCUMENT_CACHE@4"]) || (doccy = topLevel["__GLOBAL_DOCUMENT_CACHE@4"] = minDoc),
                module.exports = doccy;

            }
            ).call(this)
        }
        ).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    }
    , {
        "min-document": 12
    }],
    50: [function(require, module, exports) {
        (function(global) {
            (function() {
                var win;
                win = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
                module.exports = win;

            }
            ).call(this)
        }
        ).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    }
    , {}],
    51: [function(require, module, exports) {
        "use strict";
        var GetIntrinsic = require("get-intrinsic")
          , $defineProperty = GetIntrinsic("%Object.defineProperty%", !0)
          , hasPropertyDescriptors = function() {
            if ($defineProperty)
                try {
                    return $defineProperty({}, "a", {
                        value: 1
                    }),
                    !0
                } catch (r) {
                    return !1
                }
            return !1
        };
        hasPropertyDescriptors.hasArrayLengthDefineBug = function() {
            if (!hasPropertyDescriptors())
                return null;
            try {
                return 1 !== $defineProperty([], "length", {
                    value: 1
                }).length
            } catch (r) {
                return !0
            }
        }
        ,
        module.exports = hasPropertyDescriptors;

    }
    , {
        "get-intrinsic": 48
    }],
    52: [function(require, module, exports) {
        "use strict";
        var test = {
            foo: {}
        }
          , $Object = Object;
        module.exports = function() {
            return {
                __proto__: test
            }.foo === test.foo && !({
                __proto__: null
            }instanceof $Object)
        }
        ;

    }
    , {}],
    53: [function(require, module, exports) {
        "use strict";
        var origSymbol = "undefined" != typeof Symbol && Symbol
          , hasSymbolSham = require("./shams");
        module.exports = function() {
            return "function" == typeof origSymbol && ("function" == typeof Symbol && ("symbol" == typeof origSymbol("foo") && ("symbol" == typeof Symbol("bar") && hasSymbolSham())))
        }
        ;

    }
    , {
        "./shams": 54
    }],
    54: [function(require, module, exports) {
        "use strict";
        module.exports = function() {
            if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols)
                return !1;
            if ("symbol" == typeof Symbol.iterator)
                return !0;
            var t = {}
              , e = Symbol("test")
              , r = Object(e);
            if ("string" == typeof e)
                return !1;
            if ("[object Symbol]" !== Object.prototype.toString.call(e))
                return !1;
            if ("[object Symbol]" !== Object.prototype.toString.call(r))
                return !1;
            for (e in t[e] = 42,
            t)
                return !1;
            if ("function" == typeof Object.keys && 0 !== Object.keys(t).length)
                return !1;
            if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(t).length)
                return !1;
            var o = Object.getOwnPropertySymbols(t);
            if (1 !== o.length || o[0] !== e)
                return !1;
            if (!Object.prototype.propertyIsEnumerable.call(t, e))
                return !1;
            if ("function" == typeof Object.getOwnPropertyDescriptor) {
                var n = Object.getOwnPropertyDescriptor(t, e);
                if (42 !== n.value || !0 !== n.enumerable)
                    return !1
            }
            return !0
        }
        ;

    }
    , {}],
    55: [function(require, module, exports) {
        "use strict";
        var hasSymbols = require("has-symbols/shams");
        module.exports = function() {
            return hasSymbols() && !!Symbol.toStringTag
        }
        ;

    }
    , {
        "has-symbols/shams": 54
    }],
    56: [function(require, module, exports) {
        "use strict";
        var bind = require("function-bind");
        module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);

    }
    , {
        "function-bind": 47
    }],
    57: [function(require, module, exports) {
        (function(global) {
            (function() {
                !function(r) {
                    var e = "object" == typeof exports && exports
                      , a = "object" == typeof module && module && module.exports == e && module
                      , t = "object" == typeof global && global;
                    t.global !== t && t.window !== t || (r = t);
                    var o = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g
                      , s = /[\x01-\x7F]/g
                      , u = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g
                      , c = /<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g
                      , l = {
                        "­": "shy",
                        "‌": "zwnj",
                        "‍": "zwj",
                        "‎": "lrm",
                        "⁣": "ic",
                        "⁢": "it",
                        "⁡": "af",
                        "‏": "rlm",
                        "​": "ZeroWidthSpace",
                        "⁠": "NoBreak",
                        "̑": "DownBreve",
                        "⃛": "tdot",
                        "⃜": "DotDot",
                        "\t": "Tab",
                        "\n": "NewLine",
                        " ": "puncsp",
                        " ": "MediumSpace",
                        " ": "thinsp",
                        " ": "hairsp",
                        " ": "emsp13",
                        " ": "ensp",
                        " ": "emsp14",
                        " ": "emsp",
                        " ": "numsp",
                        " ": "nbsp",
                        "  ": "ThickSpace",
                        "‾": "oline",
                        _: "lowbar",
                        "‐": "dash",
                        "–": "ndash",
                        "—": "mdash",
                        "―": "horbar",
                        ",": "comma",
                        ";": "semi",
                        "⁏": "bsemi",
                        ":": "colon",
                        "⩴": "Colone",
                        "!": "excl",
                        "¡": "iexcl",
                        "?": "quest",
                        "¿": "iquest",
                        ".": "period",
                        "‥": "nldr",
                        "…": "mldr",
                        "·": "middot",
                        "'": "apos",
                        "‘": "lsquo",
                        "’": "rsquo",
                        "‚": "sbquo",
                        "‹": "lsaquo",
                        "›": "rsaquo",
                        '"': "quot",
                        "“": "ldquo",
                        "”": "rdquo",
                        "„": "bdquo",
                        "«": "laquo",
                        "»": "raquo",
                        "(": "lpar",
                        ")": "rpar",
                        "[": "lsqb",
                        "]": "rsqb",
                        "{": "lcub",
                        "}": "rcub",
                        "⌈": "lceil",
                        "⌉": "rceil",
                        "⌊": "lfloor",
                        "⌋": "rfloor",
                        "⦅": "lopar",
                        "⦆": "ropar",
                        "⦋": "lbrke",
                        "⦌": "rbrke",
                        "⦍": "lbrkslu",
                        "⦎": "rbrksld",
                        "⦏": "lbrksld",
                        "⦐": "rbrkslu",
                        "⦑": "langd",
                        "⦒": "rangd",
                        "⦓": "lparlt",
                        "⦔": "rpargt",
                        "⦕": "gtlPar",
                        "⦖": "ltrPar",
                        "⟦": "lobrk",
                        "⟧": "robrk",
                        "⟨": "lang",
                        "⟩": "rang",
                        "⟪": "Lang",
                        "⟫": "Rang",
                        "⟬": "loang",
                        "⟭": "roang",
                        "❲": "lbbrk",
                        "❳": "rbbrk",
                        "‖": "Vert",
                        "§": "sect",
                        "¶": "para",
                        "@": "commat",
                        "*": "ast",
                        "/": "sol",
                        undefined: null,
                        "&": "amp",
                        "#": "num",
                        "%": "percnt",
                        "‰": "permil",
                        "‱": "pertenk",
                        "†": "dagger",
                        "‡": "Dagger",
                        "•": "bull",
                        "⁃": "hybull",
                        "′": "prime",
                        "″": "Prime",
                        "‴": "tprime",
                        "⁗": "qprime",
                        "‵": "bprime",
                        "⁁": "caret",
                        "`": "grave",
                        "´": "acute",
                        "˜": "tilde",
                        "^": "Hat",
                        "¯": "macr",
                        "˘": "breve",
                        "˙": "dot",
                        "¨": "die",
                        "˚": "ring",
                        "˝": "dblac",
                        "¸": "cedil",
                        "˛": "ogon",
                        "ˆ": "circ",
                        "ˇ": "caron",
                        "°": "deg",
                        "©": "copy",
                        "®": "reg",
                        "℗": "copysr",
                        "℘": "wp",
                        "℞": "rx",
                        "℧": "mho",
                        "℩": "iiota",
                        "←": "larr",
                        "↚": "nlarr",
                        "→": "rarr",
                        "↛": "nrarr",
                        "↑": "uarr",
                        "↓": "darr",
                        "↔": "harr",
                        "↮": "nharr",
                        "↕": "varr",
                        "↖": "nwarr",
                        "↗": "nearr",
                        "↘": "searr",
                        "↙": "swarr",
                        "↝": "rarrw",
                        "↝̸": "nrarrw",
                        "↞": "Larr",
                        "↟": "Uarr",
                        "↠": "Rarr",
                        "↡": "Darr",
                        "↢": "larrtl",
                        "↣": "rarrtl",
                        "↤": "mapstoleft",
                        "↥": "mapstoup",
                        "↦": "map",
                        "↧": "mapstodown",
                        "↩": "larrhk",
                        "↪": "rarrhk",
                        "↫": "larrlp",
                        "↬": "rarrlp",
                        "↭": "harrw",
                        "↰": "lsh",
                        "↱": "rsh",
                        "↲": "ldsh",
                        "↳": "rdsh",
                        "↵": "crarr",
                        "↶": "cularr",
                        "↷": "curarr",
                        "↺": "olarr",
                        "↻": "orarr",
                        "↼": "lharu",
                        "↽": "lhard",
                        "↾": "uharr",
                        "↿": "uharl",
                        "⇀": "rharu",
                        "⇁": "rhard",
                        "⇂": "dharr",
                        "⇃": "dharl",
                        "⇄": "rlarr",
                        "⇅": "udarr",
                        "⇆": "lrarr",
                        "⇇": "llarr",
                        "⇈": "uuarr",
                        "⇉": "rrarr",
                        "⇊": "ddarr",
                        "⇋": "lrhar",
                        "⇌": "rlhar",
                        "⇐": "lArr",
                        "⇍": "nlArr",
                        "⇑": "uArr",
                        "⇒": "rArr",
                        "⇏": "nrArr",
                        "⇓": "dArr",
                        "⇔": "iff",
                        "⇎": "nhArr",
                        "⇕": "vArr",
                        "⇖": "nwArr",
                        "⇗": "neArr",
                        "⇘": "seArr",
                        "⇙": "swArr",
                        "⇚": "lAarr",
                        "⇛": "rAarr",
                        "⇝": "zigrarr",
                        "⇤": "larrb",
                        "⇥": "rarrb",
                        "⇵": "duarr",
                        "⇽": "loarr",
                        "⇾": "roarr",
                        "⇿": "hoarr",
                        "∀": "forall",
                        "∁": "comp",
                        "∂": "part",
                        "∂̸": "npart",
                        "∃": "exist",
                        "∄": "nexist",
                        "∅": "empty",
                        "∇": "Del",
                        "∈": "in",
                        "∉": "notin",
                        "∋": "ni",
                        "∌": "notni",
                        "϶": "bepsi",
                        "∏": "prod",
                        "∐": "coprod",
                        "∑": "sum",
                        "+": "plus",
                        "±": "pm",
                        "÷": "div",
                        "×": "times",
                        "<": "lt",
                        "≮": "nlt",
                        "<⃒": "nvlt",
                        "=": "equals",
                        "≠": "ne",
                        "=⃥": "bne",
                        "⩵": "Equal",
                        ">": "gt",
                        "≯": "ngt",
                        ">⃒": "nvgt",
                        "¬": "not",
                        "|": "vert",
                        "¦": "brvbar",
                        "−": "minus",
                        "∓": "mp",
                        "∔": "plusdo",
                        "⁄": "frasl",
                        "∖": "setmn",
                        "∗": "lowast",
                        "∘": "compfn",
                        "√": "Sqrt",
                        "∝": "prop",
                        "∞": "infin",
                        "∟": "angrt",
                        "∠": "ang",
                        "∠⃒": "nang",
                        "∡": "angmsd",
                        "∢": "angsph",
                        "∣": "mid",
                        "∤": "nmid",
                        "∥": "par",
                        "∦": "npar",
                        "∧": "and",
                        "∨": "or",
                        "∩": "cap",
                        "∩︀": "caps",
                        "∪": "cup",
                        "∪︀": "cups",
                        "∫": "int",
                        "∬": "Int",
                        "∭": "tint",
                        "⨌": "qint",
                        "∮": "oint",
                        "∯": "Conint",
                        "∰": "Cconint",
                        "∱": "cwint",
                        "∲": "cwconint",
                        "∳": "awconint",
                        "∴": "there4",
                        "∵": "becaus",
                        "∶": "ratio",
                        "∷": "Colon",
                        "∸": "minusd",
                        "∺": "mDDot",
                        "∻": "homtht",
                        "∼": "sim",
                        "≁": "nsim",
                        "∼⃒": "nvsim",
                        "∽": "bsim",
                        "∽̱": "race",
                        "∾": "ac",
                        "∾̳": "acE",
                        "∿": "acd",
                        "≀": "wr",
                        "≂": "esim",
                        "≂̸": "nesim",
                        "≃": "sime",
                        "≄": "nsime",
                        "≅": "cong",
                        "≇": "ncong",
                        "≆": "simne",
                        "≈": "ap",
                        "≉": "nap",
                        "≊": "ape",
                        "≋": "apid",
                        "≋̸": "napid",
                        "≌": "bcong",
                        "≍": "CupCap",
                        "≭": "NotCupCap",
                        "≍⃒": "nvap",
                        "≎": "bump",
                        "≎̸": "nbump",
                        "≏": "bumpe",
                        "≏̸": "nbumpe",
                        "≐": "doteq",
                        "≐̸": "nedot",
                        "≑": "eDot",
                        "≒": "efDot",
                        "≓": "erDot",
                        "≔": "colone",
                        "≕": "ecolon",
                        "≖": "ecir",
                        "≗": "cire",
                        "≙": "wedgeq",
                        "≚": "veeeq",
                        "≜": "trie",
                        "≟": "equest",
                        "≡": "equiv",
                        "≢": "nequiv",
                        "≡⃥": "bnequiv",
                        "≤": "le",
                        "≰": "nle",
                        "≤⃒": "nvle",
                        "≥": "ge",
                        "≱": "nge",
                        "≥⃒": "nvge",
                        "≦": "lE",
                        "≦̸": "nlE",
                        "≧": "gE",
                        "≧̸": "ngE",
                        "≨︀": "lvnE",
                        "≨": "lnE",
                        "≩": "gnE",
                        "≩︀": "gvnE",
                        "≪": "ll",
                        "≪̸": "nLtv",
                        "≪⃒": "nLt",
                        "≫": "gg",
                        "≫̸": "nGtv",
                        "≫⃒": "nGt",
                        "≬": "twixt",
                        "≲": "lsim",
                        "≴": "nlsim",
                        "≳": "gsim",
                        "≵": "ngsim",
                        "≶": "lg",
                        "≸": "ntlg",
                        "≷": "gl",
                        "≹": "ntgl",
                        "≺": "pr",
                        "⊀": "npr",
                        "≻": "sc",
                        "⊁": "nsc",
                        "≼": "prcue",
                        "⋠": "nprcue",
                        "≽": "sccue",
                        "⋡": "nsccue",
                        "≾": "prsim",
                        "≿": "scsim",
                        "≿̸": "NotSucceedsTilde",
                        "⊂": "sub",
                        "⊄": "nsub",
                        "⊂⃒": "vnsub",
                        "⊃": "sup",
                        "⊅": "nsup",
                        "⊃⃒": "vnsup",
                        "⊆": "sube",
                        "⊈": "nsube",
                        "⊇": "supe",
                        "⊉": "nsupe",
                        "⊊︀": "vsubne",
                        "⊊": "subne",
                        "⊋︀": "vsupne",
                        "⊋": "supne",
                        "⊍": "cupdot",
                        "⊎": "uplus",
                        "⊏": "sqsub",
                        "⊏̸": "NotSquareSubset",
                        "⊐": "sqsup",
                        "⊐̸": "NotSquareSuperset",
                        "⊑": "sqsube",
                        "⋢": "nsqsube",
                        "⊒": "sqsupe",
                        "⋣": "nsqsupe",
                        "⊓": "sqcap",
                        "⊓︀": "sqcaps",
                        "⊔": "sqcup",
                        "⊔︀": "sqcups",
                        "⊕": "oplus",
                        "⊖": "ominus",
                        "⊗": "otimes",
                        "⊘": "osol",
                        "⊙": "odot",
                        "⊚": "ocir",
                        "⊛": "oast",
                        "⊝": "odash",
                        "⊞": "plusb",
                        "⊟": "minusb",
                        "⊠": "timesb",
                        "⊡": "sdotb",
                        "⊢": "vdash",
                        "⊬": "nvdash",
                        "⊣": "dashv",
                        "⊤": "top",
                        "⊥": "bot",
                        "⊧": "models",
                        "⊨": "vDash",
                        "⊭": "nvDash",
                        "⊩": "Vdash",
                        "⊮": "nVdash",
                        "⊪": "Vvdash",
                        "⊫": "VDash",
                        "⊯": "nVDash",
                        "⊰": "prurel",
                        "⊲": "vltri",
                        "⋪": "nltri",
                        "⊳": "vrtri",
                        "⋫": "nrtri",
                        "⊴": "ltrie",
                        "⋬": "nltrie",
                        "⊴⃒": "nvltrie",
                        "⊵": "rtrie",
                        "⋭": "nrtrie",
                        "⊵⃒": "nvrtrie",
                        "⊶": "origof",
                        "⊷": "imof",
                        "⊸": "mumap",
                        "⊹": "hercon",
                        "⊺": "intcal",
                        "⊻": "veebar",
                        "⊽": "barvee",
                        "⊾": "angrtvb",
                        "⊿": "lrtri",
                        "⋀": "Wedge",
                        "⋁": "Vee",
                        "⋂": "xcap",
                        "⋃": "xcup",
                        "⋄": "diam",
                        "⋅": "sdot",
                        "⋆": "Star",
                        "⋇": "divonx",
                        "⋈": "bowtie",
                        "⋉": "ltimes",
                        "⋊": "rtimes",
                        "⋋": "lthree",
                        "⋌": "rthree",
                        "⋍": "bsime",
                        "⋎": "cuvee",
                        "⋏": "cuwed",
                        "⋐": "Sub",
                        "⋑": "Sup",
                        "⋒": "Cap",
                        "⋓": "Cup",
                        "⋔": "fork",
                        "⋕": "epar",
                        "⋖": "ltdot",
                        "⋗": "gtdot",
                        "⋘": "Ll",
                        "⋘̸": "nLl",
                        "⋙": "Gg",
                        "⋙̸": "nGg",
                        "⋚︀": "lesg",
                        "⋚": "leg",
                        "⋛": "gel",
                        "⋛︀": "gesl",
                        "⋞": "cuepr",
                        "⋟": "cuesc",
                        "⋦": "lnsim",
                        "⋧": "gnsim",
                        "⋨": "prnsim",
                        "⋩": "scnsim",
                        "⋮": "vellip",
                        "⋯": "ctdot",
                        "⋰": "utdot",
                        "⋱": "dtdot",
                        "⋲": "disin",
                        "⋳": "isinsv",
                        "⋴": "isins",
                        "⋵": "isindot",
                        "⋵̸": "notindot",
                        "⋶": "notinvc",
                        "⋷": "notinvb",
                        "⋹": "isinE",
                        "⋹̸": "notinE",
                        "⋺": "nisd",
                        "⋻": "xnis",
                        "⋼": "nis",
                        "⋽": "notnivc",
                        "⋾": "notnivb",
                        "⌅": "barwed",
                        "⌆": "Barwed",
                        "⌌": "drcrop",
                        "⌍": "dlcrop",
                        "⌎": "urcrop",
                        "⌏": "ulcrop",
                        "⌐": "bnot",
                        "⌒": "profline",
                        "⌓": "profsurf",
                        "⌕": "telrec",
                        "⌖": "target",
                        "⌜": "ulcorn",
                        "⌝": "urcorn",
                        "⌞": "dlcorn",
                        "⌟": "drcorn",
                        "⌢": "frown",
                        "⌣": "smile",
                        "⌭": "cylcty",
                        "⌮": "profalar",
                        "⌶": "topbot",
                        "⌽": "ovbar",
                        "⌿": "solbar",
                        "⍼": "angzarr",
                        "⎰": "lmoust",
                        "⎱": "rmoust",
                        "⎴": "tbrk",
                        "⎵": "bbrk",
                        "⎶": "bbrktbrk",
                        "⏜": "OverParenthesis",
                        "⏝": "UnderParenthesis",
                        "⏞": "OverBrace",
                        "⏟": "UnderBrace",
                        "⏢": "trpezium",
                        "⏧": "elinters",
                        "␣": "blank",
                        "─": "boxh",
                        "│": "boxv",
                        "┌": "boxdr",
                        "┐": "boxdl",
                        "└": "boxur",
                        "┘": "boxul",
                        "├": "boxvr",
                        "┤": "boxvl",
                        "┬": "boxhd",
                        "┴": "boxhu",
                        "┼": "boxvh",
                        "═": "boxH",
                        "║": "boxV",
                        "╒": "boxdR",
                        "╓": "boxDr",
                        "╔": "boxDR",
                        "╕": "boxdL",
                        "╖": "boxDl",
                        "╗": "boxDL",
                        "╘": "boxuR",
                        "╙": "boxUr",
                        "╚": "boxUR",
                        "╛": "boxuL",
                        "╜": "boxUl",
                        "╝": "boxUL",
                        "╞": "boxvR",
                        "╟": "boxVr",
                        "╠": "boxVR",
                        "╡": "boxvL",
                        "╢": "boxVl",
                        "╣": "boxVL",
                        "╤": "boxHd",
                        "╥": "boxhD",
                        "╦": "boxHD",
                        "╧": "boxHu",
                        "╨": "boxhU",
                        "╩": "boxHU",
                        "╪": "boxvH",
                        "╫": "boxVh",
                        "╬": "boxVH",
                        "▀": "uhblk",
                        "▄": "lhblk",
                        "█": "block",
                        "░": "blk14",
                        "▒": "blk12",
                        "▓": "blk34",
                        "□": "squ",
                        "▪": "squf",
                        "▫": "EmptyVerySmallSquare",
                        "▭": "rect",
                        "▮": "marker",
                        "▱": "fltns",
                        "△": "xutri",
                        "▴": "utrif",
                        "▵": "utri",
                        "▸": "rtrif",
                        "▹": "rtri",
                        "▽": "xdtri",
                        "▾": "dtrif",
                        "▿": "dtri",
                        "◂": "ltrif",
                        "◃": "ltri",
                        "◊": "loz",
                        "○": "cir",
                        "◬": "tridot",
                        "◯": "xcirc",
                        "◸": "ultri",
                        "◹": "urtri",
                        "◺": "lltri",
                        "◻": "EmptySmallSquare",
                        "◼": "FilledSmallSquare",
                        "★": "starf",
                        "☆": "star",
                        "☎": "phone",
                        "♀": "female",
                        "♂": "male",
                        "♠": "spades",
                        "♣": "clubs",
                        "♥": "hearts",
                        "♦": "diams",
                        "♪": "sung",
                        "✓": "check",
                        "✗": "cross",
                        "✠": "malt",
                        "✶": "sext",
                        "❘": "VerticalSeparator",
                        "⟈": "bsolhsub",
                        "⟉": "suphsol",
                        "⟵": "xlarr",
                        "⟶": "xrarr",
                        "⟷": "xharr",
                        "⟸": "xlArr",
                        "⟹": "xrArr",
                        "⟺": "xhArr",
                        "⟼": "xmap",
                        "⟿": "dzigrarr",
                        "⤂": "nvlArr",
                        "⤃": "nvrArr",
                        "⤄": "nvHarr",
                        "⤅": "Map",
                        "⤌": "lbarr",
                        "⤍": "rbarr",
                        "⤎": "lBarr",
                        "⤏": "rBarr",
                        "⤐": "RBarr",
                        "⤑": "DDotrahd",
                        "⤒": "UpArrowBar",
                        "⤓": "DownArrowBar",
                        "⤖": "Rarrtl",
                        "⤙": "latail",
                        "⤚": "ratail",
                        "⤛": "lAtail",
                        "⤜": "rAtail",
                        "⤝": "larrfs",
                        "⤞": "rarrfs",
                        "⤟": "larrbfs",
                        "⤠": "rarrbfs",
                        "⤣": "nwarhk",
                        "⤤": "nearhk",
                        "⤥": "searhk",
                        "⤦": "swarhk",
                        "⤧": "nwnear",
                        "⤨": "toea",
                        "⤩": "tosa",
                        "⤪": "swnwar",
                        "⤳": "rarrc",
                        "⤳̸": "nrarrc",
                        "⤵": "cudarrr",
                        "⤶": "ldca",
                        "⤷": "rdca",
                        "⤸": "cudarrl",
                        "⤹": "larrpl",
                        "⤼": "curarrm",
                        "⤽": "cularrp",
                        "⥅": "rarrpl",
                        "⥈": "harrcir",
                        "⥉": "Uarrocir",
                        "⥊": "lurdshar",
                        "⥋": "ldrushar",
                        "⥎": "LeftRightVector",
                        "⥏": "RightUpDownVector",
                        "⥐": "DownLeftRightVector",
                        "⥑": "LeftUpDownVector",
                        "⥒": "LeftVectorBar",
                        "⥓": "RightVectorBar",
                        "⥔": "RightUpVectorBar",
                        "⥕": "RightDownVectorBar",
                        "⥖": "DownLeftVectorBar",
                        "⥗": "DownRightVectorBar",
                        "⥘": "LeftUpVectorBar",
                        "⥙": "LeftDownVectorBar",
                        "⥚": "LeftTeeVector",
                        "⥛": "RightTeeVector",
                        "⥜": "RightUpTeeVector",
                        "⥝": "RightDownTeeVector",
                        "⥞": "DownLeftTeeVector",
                        "⥟": "DownRightTeeVector",
                        "⥠": "LeftUpTeeVector",
                        "⥡": "LeftDownTeeVector",
                        "⥢": "lHar",
                        "⥣": "uHar",
                        "⥤": "rHar",
                        "⥥": "dHar",
                        "⥦": "luruhar",
                        "⥧": "ldrdhar",
                        "⥨": "ruluhar",
                        "⥩": "rdldhar",
                        "⥪": "lharul",
                        "⥫": "llhard",
                        "⥬": "rharul",
                        "⥭": "lrhard",
                        "⥮": "udhar",
                        "⥯": "duhar",
                        "⥰": "RoundImplies",
                        "⥱": "erarr",
                        "⥲": "simrarr",
                        "⥳": "larrsim",
                        "⥴": "rarrsim",
                        "⥵": "rarrap",
                        "⥶": "ltlarr",
                        "⥸": "gtrarr",
                        "⥹": "subrarr",
                        "⥻": "suplarr",
                        "⥼": "lfisht",
                        "⥽": "rfisht",
                        "⥾": "ufisht",
                        "⥿": "dfisht",
                        "⦚": "vzigzag",
                        "⦜": "vangrt",
                        "⦝": "angrtvbd",
                        "⦤": "ange",
                        "⦥": "range",
                        "⦦": "dwangle",
                        "⦧": "uwangle",
                        "⦨": "angmsdaa",
                        "⦩": "angmsdab",
                        "⦪": "angmsdac",
                        "⦫": "angmsdad",
                        "⦬": "angmsdae",
                        "⦭": "angmsdaf",
                        "⦮": "angmsdag",
                        "⦯": "angmsdah",
                        "⦰": "bemptyv",
                        "⦱": "demptyv",
                        "⦲": "cemptyv",
                        "⦳": "raemptyv",
                        "⦴": "laemptyv",
                        "⦵": "ohbar",
                        "⦶": "omid",
                        "⦷": "opar",
                        "⦹": "operp",
                        "⦻": "olcross",
                        "⦼": "odsold",
                        "⦾": "olcir",
                        "⦿": "ofcir",
                        "⧀": "olt",
                        "⧁": "ogt",
                        "⧂": "cirscir",
                        "⧃": "cirE",
                        "⧄": "solb",
                        "⧅": "bsolb",
                        "⧉": "boxbox",
                        "⧍": "trisb",
                        "⧎": "rtriltri",
                        "⧏": "LeftTriangleBar",
                        "⧏̸": "NotLeftTriangleBar",
                        "⧐": "RightTriangleBar",
                        "⧐̸": "NotRightTriangleBar",
                        "⧜": "iinfin",
                        "⧝": "infintie",
                        "⧞": "nvinfin",
                        "⧣": "eparsl",
                        "⧤": "smeparsl",
                        "⧥": "eqvparsl",
                        "⧫": "lozf",
                        "⧴": "RuleDelayed",
                        "⧶": "dsol",
                        "⨀": "xodot",
                        "⨁": "xoplus",
                        "⨂": "xotime",
                        "⨄": "xuplus",
                        "⨆": "xsqcup",
                        "⨍": "fpartint",
                        "⨐": "cirfnint",
                        "⨑": "awint",
                        "⨒": "rppolint",
                        "⨓": "scpolint",
                        "⨔": "npolint",
                        "⨕": "pointint",
                        "⨖": "quatint",
                        "⨗": "intlarhk",
                        "⨢": "pluscir",
                        "⨣": "plusacir",
                        "⨤": "simplus",
                        "⨥": "plusdu",
                        "⨦": "plussim",
                        "⨧": "plustwo",
                        "⨩": "mcomma",
                        "⨪": "minusdu",
                        "⨭": "loplus",
                        "⨮": "roplus",
                        "⨯": "Cross",
                        "⨰": "timesd",
                        "⨱": "timesbar",
                        "⨳": "smashp",
                        "⨴": "lotimes",
                        "⨵": "rotimes",
                        "⨶": "otimesas",
                        "⨷": "Otimes",
                        "⨸": "odiv",
                        "⨹": "triplus",
                        "⨺": "triminus",
                        "⨻": "tritime",
                        "⨼": "iprod",
                        "⨿": "amalg",
                        "⩀": "capdot",
                        "⩂": "ncup",
                        "⩃": "ncap",
                        "⩄": "capand",
                        "⩅": "cupor",
                        "⩆": "cupcap",
                        "⩇": "capcup",
                        "⩈": "cupbrcap",
                        "⩉": "capbrcup",
                        "⩊": "cupcup",
                        "⩋": "capcap",
                        "⩌": "ccups",
                        "⩍": "ccaps",
                        "⩐": "ccupssm",
                        "⩓": "And",
                        "⩔": "Or",
                        "⩕": "andand",
                        "⩖": "oror",
                        "⩗": "orslope",
                        "⩘": "andslope",
                        "⩚": "andv",
                        "⩛": "orv",
                        "⩜": "andd",
                        "⩝": "ord",
                        "⩟": "wedbar",
                        "⩦": "sdote",
                        "⩪": "simdot",
                        "⩭": "congdot",
                        "⩭̸": "ncongdot",
                        "⩮": "easter",
                        "⩯": "apacir",
                        "⩰": "apE",
                        "⩰̸": "napE",
                        "⩱": "eplus",
                        "⩲": "pluse",
                        "⩳": "Esim",
                        "⩷": "eDDot",
                        "⩸": "equivDD",
                        "⩹": "ltcir",
                        "⩺": "gtcir",
                        "⩻": "ltquest",
                        "⩼": "gtquest",
                        "⩽": "les",
                        "⩽̸": "nles",
                        "⩾": "ges",
                        "⩾̸": "nges",
                        "⩿": "lesdot",
                        "⪀": "gesdot",
                        "⪁": "lesdoto",
                        "⪂": "gesdoto",
                        "⪃": "lesdotor",
                        "⪄": "gesdotol",
                        "⪅": "lap",
                        "⪆": "gap",
                        "⪇": "lne",
                        "⪈": "gne",
                        "⪉": "lnap",
                        "⪊": "gnap",
                        "⪋": "lEg",
                        "⪌": "gEl",
                        "⪍": "lsime",
                        "⪎": "gsime",
                        "⪏": "lsimg",
                        "⪐": "gsiml",
                        "⪑": "lgE",
                        "⪒": "glE",
                        "⪓": "lesges",
                        "⪔": "gesles",
                        "⪕": "els",
                        "⪖": "egs",
                        "⪗": "elsdot",
                        "⪘": "egsdot",
                        "⪙": "el",
                        "⪚": "eg",
                        "⪝": "siml",
                        "⪞": "simg",
                        "⪟": "simlE",
                        "⪠": "simgE",
                        "⪡": "LessLess",
                        "⪡̸": "NotNestedLessLess",
                        "⪢": "GreaterGreater",
                        "⪢̸": "NotNestedGreaterGreater",
                        "⪤": "glj",
                        "⪥": "gla",
                        "⪦": "ltcc",
                        "⪧": "gtcc",
                        "⪨": "lescc",
                        "⪩": "gescc",
                        "⪪": "smt",
                        "⪫": "lat",
                        "⪬": "smte",
                        "⪬︀": "smtes",
                        "⪭": "late",
                        "⪭︀": "lates",
                        "⪮": "bumpE",
                        "⪯": "pre",
                        "⪯̸": "npre",
                        "⪰": "sce",
                        "⪰̸": "nsce",
                        "⪳": "prE",
                        "⪴": "scE",
                        "⪵": "prnE",
                        "⪶": "scnE",
                        "⪷": "prap",
                        "⪸": "scap",
                        "⪹": "prnap",
                        "⪺": "scnap",
                        "⪻": "Pr",
                        "⪼": "Sc",
                        "⪽": "subdot",
                        "⪾": "supdot",
                        "⪿": "subplus",
                        "⫀": "supplus",
                        "⫁": "submult",
                        "⫂": "supmult",
                        "⫃": "subedot",
                        "⫄": "supedot",
                        "⫅": "subE",
                        "⫅̸": "nsubE",
                        "⫆": "supE",
                        "⫆̸": "nsupE",
                        "⫇": "subsim",
                        "⫈": "supsim",
                        "⫋︀": "vsubnE",
                        "⫋": "subnE",
                        "⫌︀": "vsupnE",
                        "⫌": "supnE",
                        "⫏": "csub",
                        "⫐": "csup",
                        "⫑": "csube",
                        "⫒": "csupe",
                        "⫓": "subsup",
                        "⫔": "supsub",
                        "⫕": "subsub",
                        "⫖": "supsup",
                        "⫗": "suphsub",
                        "⫘": "supdsub",
                        "⫙": "forkv",
                        "⫚": "topfork",
                        "⫛": "mlcp",
                        "⫤": "Dashv",
                        "⫦": "Vdashl",
                        "⫧": "Barv",
                        "⫨": "vBar",
                        "⫩": "vBarv",
                        "⫫": "Vbar",
                        "⫬": "Not",
                        "⫭": "bNot",
                        "⫮": "rnmid",
                        "⫯": "cirmid",
                        "⫰": "midcir",
                        "⫱": "topcir",
                        "⫲": "nhpar",
                        "⫳": "parsim",
                        "⫽": "parsl",
                        "⫽⃥": "nparsl",
                        "♭": "flat",
                        "♮": "natur",
                        "♯": "sharp",
                        "¤": "curren",
                        "¢": "cent",
                        $: "dollar",
                        "£": "pound",
                        "¥": "yen",
                        "€": "euro",
                        "¹": "sup1",
                        "½": "half",
                        "⅓": "frac13",
                        "¼": "frac14",
                        "⅕": "frac15",
                        "⅙": "frac16",
                        "⅛": "frac18",
                        "²": "sup2",
                        "⅔": "frac23",
                        "⅖": "frac25",
                        "³": "sup3",
                        "¾": "frac34",
                        "⅗": "frac35",
                        "⅜": "frac38",
                        "⅘": "frac45",
                        "⅚": "frac56",
                        "⅝": "frac58",
                        "⅞": "frac78",
                        "𝒶": "ascr",
                        "𝕒": "aopf",
                        "𝔞": "afr",
                        "𝔸": "Aopf",
                        "𝔄": "Afr",
                        "𝒜": "Ascr",
                        "ª": "ordf",
                        "á": "aacute",
                        "Á": "Aacute",
                        "à": "agrave",
                        "À": "Agrave",
                        "ă": "abreve",
                        "Ă": "Abreve",
                        "â": "acirc",
                        "Â": "Acirc",
                        "å": "aring",
                        "Å": "angst",
                        "ä": "auml",
                        "Ä": "Auml",
                        "ã": "atilde",
                        "Ã": "Atilde",
                        "ą": "aogon",
                        "Ą": "Aogon",
                        "ā": "amacr",
                        "Ā": "Amacr",
                        "æ": "aelig",
                        "Æ": "AElig",
                        "𝒷": "bscr",
                        "𝕓": "bopf",
                        "𝔟": "bfr",
                        "𝔹": "Bopf",
                        "ℬ": "Bscr",
                        "𝔅": "Bfr",
                        "𝔠": "cfr",
                        "𝒸": "cscr",
                        "𝕔": "copf",
                        "ℭ": "Cfr",
                        "𝒞": "Cscr",
                        "ℂ": "Copf",
                        "ć": "cacute",
                        "Ć": "Cacute",
                        "ĉ": "ccirc",
                        "Ĉ": "Ccirc",
                        "č": "ccaron",
                        "Č": "Ccaron",
                        "ċ": "cdot",
                        "Ċ": "Cdot",
                        "ç": "ccedil",
                        "Ç": "Ccedil",
                        "℅": "incare",
                        "𝔡": "dfr",
                        "ⅆ": "dd",
                        "𝕕": "dopf",
                        "𝒹": "dscr",
                        "𝒟": "Dscr",
                        "𝔇": "Dfr",
                        "ⅅ": "DD",
                        "𝔻": "Dopf",
                        "ď": "dcaron",
                        "Ď": "Dcaron",
                        "đ": "dstrok",
                        "Đ": "Dstrok",
                        "ð": "eth",
                        "Ð": "ETH",
                        "ⅇ": "ee",
                        "ℯ": "escr",
                        "𝔢": "efr",
                        "𝕖": "eopf",
                        "ℰ": "Escr",
                        "𝔈": "Efr",
                        "𝔼": "Eopf",
                        "é": "eacute",
                        "É": "Eacute",
                        "è": "egrave",
                        "È": "Egrave",
                        "ê": "ecirc",
                        "Ê": "Ecirc",
                        "ě": "ecaron",
                        "Ě": "Ecaron",
                        "ë": "euml",
                        "Ë": "Euml",
                        "ė": "edot",
                        "Ė": "Edot",
                        "ę": "eogon",
                        "Ę": "Eogon",
                        "ē": "emacr",
                        "Ē": "Emacr",
                        "𝔣": "ffr",
                        "𝕗": "fopf",
                        "𝒻": "fscr",
                        "𝔉": "Ffr",
                        "𝔽": "Fopf",
                        "ℱ": "Fscr",
                        "ﬀ": "fflig",
                        "ﬃ": "ffilig",
                        "ﬄ": "ffllig",
                        "ﬁ": "filig",
                        fj: "fjlig",
                        "ﬂ": "fllig",
                        "ƒ": "fnof",
                        "ℊ": "gscr",
                        "𝕘": "gopf",
                        "𝔤": "gfr",
                        "𝒢": "Gscr",
                        "𝔾": "Gopf",
                        "𝔊": "Gfr",
                        "ǵ": "gacute",
                        "ğ": "gbreve",
                        "Ğ": "Gbreve",
                        "ĝ": "gcirc",
                        "Ĝ": "Gcirc",
                        "ġ": "gdot",
                        "Ġ": "Gdot",
                        "Ģ": "Gcedil",
                        "𝔥": "hfr",
                        "ℎ": "planckh",
                        "𝒽": "hscr",
                        "𝕙": "hopf",
                        "ℋ": "Hscr",
                        "ℌ": "Hfr",
                        "ℍ": "Hopf",
                        "ĥ": "hcirc",
                        "Ĥ": "Hcirc",
                        "ℏ": "hbar",
                        "ħ": "hstrok",
                        "Ħ": "Hstrok",
                        "𝕚": "iopf",
                        "𝔦": "ifr",
                        "𝒾": "iscr",
                        "ⅈ": "ii",
                        "𝕀": "Iopf",
                        "ℐ": "Iscr",
                        "ℑ": "Im",
                        "í": "iacute",
                        "Í": "Iacute",
                        "ì": "igrave",
                        "Ì": "Igrave",
                        "î": "icirc",
                        "Î": "Icirc",
                        "ï": "iuml",
                        "Ï": "Iuml",
                        "ĩ": "itilde",
                        "Ĩ": "Itilde",
                        "İ": "Idot",
                        "į": "iogon",
                        "Į": "Iogon",
                        "ī": "imacr",
                        "Ī": "Imacr",
                        "ĳ": "ijlig",
                        "Ĳ": "IJlig",
                        "ı": "imath",
                        "𝒿": "jscr",
                        "𝕛": "jopf",
                        "𝔧": "jfr",
                        "𝒥": "Jscr",
                        "𝔍": "Jfr",
                        "𝕁": "Jopf",
                        "ĵ": "jcirc",
                        "Ĵ": "Jcirc",
                        "ȷ": "jmath",
                        "𝕜": "kopf",
                        "𝓀": "kscr",
                        "𝔨": "kfr",
                        "𝒦": "Kscr",
                        "𝕂": "Kopf",
                        "𝔎": "Kfr",
                        "ķ": "kcedil",
                        "Ķ": "Kcedil",
                        "𝔩": "lfr",
                        "𝓁": "lscr",
                        "ℓ": "ell",
                        "𝕝": "lopf",
                        "ℒ": "Lscr",
                        "𝔏": "Lfr",
                        "𝕃": "Lopf",
                        "ĺ": "lacute",
                        "Ĺ": "Lacute",
                        "ľ": "lcaron",
                        "Ľ": "Lcaron",
                        "ļ": "lcedil",
                        "Ļ": "Lcedil",
                        "ł": "lstrok",
                        "Ł": "Lstrok",
                        "ŀ": "lmidot",
                        "Ŀ": "Lmidot",
                        "𝔪": "mfr",
                        "𝕞": "mopf",
                        "𝓂": "mscr",
                        "𝔐": "Mfr",
                        "𝕄": "Mopf",
                        "ℳ": "Mscr",
                        "𝔫": "nfr",
                        "𝕟": "nopf",
                        "𝓃": "nscr",
                        "ℕ": "Nopf",
                        "𝒩": "Nscr",
                        "𝔑": "Nfr",
                        "ń": "nacute",
                        "Ń": "Nacute",
                        "ň": "ncaron",
                        "Ň": "Ncaron",
                        "ñ": "ntilde",
                        "Ñ": "Ntilde",
                        "ņ": "ncedil",
                        "Ņ": "Ncedil",
                        "№": "numero",
                        "ŋ": "eng",
                        "Ŋ": "ENG",
                        "𝕠": "oopf",
                        "𝔬": "ofr",
                        "ℴ": "oscr",
                        "𝒪": "Oscr",
                        "𝔒": "Ofr",
                        "𝕆": "Oopf",
                        "º": "ordm",
                        "ó": "oacute",
                        "Ó": "Oacute",
                        "ò": "ograve",
                        "Ò": "Ograve",
                        "ô": "ocirc",
                        "Ô": "Ocirc",
                        "ö": "ouml",
                        "Ö": "Ouml",
                        "ő": "odblac",
                        "Ő": "Odblac",
                        "õ": "otilde",
                        "Õ": "Otilde",
                        "ø": "oslash",
                        "Ø": "Oslash",
                        "ō": "omacr",
                        "Ō": "Omacr",
                        "œ": "oelig",
                        "Œ": "OElig",
                        "𝔭": "pfr",
                        "𝓅": "pscr",
                        "𝕡": "popf",
                        "ℙ": "Popf",
                        "𝔓": "Pfr",
                        "𝒫": "Pscr",
                        "𝕢": "qopf",
                        "𝔮": "qfr",
                        "𝓆": "qscr",
                        "𝒬": "Qscr",
                        "𝔔": "Qfr",
                        "ℚ": "Qopf",
                        "ĸ": "kgreen",
                        "𝔯": "rfr",
                        "𝕣": "ropf",
                        "𝓇": "rscr",
                        "ℛ": "Rscr",
                        "ℜ": "Re",
                        "ℝ": "Ropf",
                        "ŕ": "racute",
                        "Ŕ": "Racute",
                        "ř": "rcaron",
                        "Ř": "Rcaron",
                        "ŗ": "rcedil",
                        "Ŗ": "Rcedil",
                        "𝕤": "sopf",
                        "𝓈": "sscr",
                        "𝔰": "sfr",
                        "𝕊": "Sopf",
                        "𝔖": "Sfr",
                        "𝒮": "Sscr",
                        "Ⓢ": "oS",
                        "ś": "sacute",
                        "Ś": "Sacute",
                        "ŝ": "scirc",
                        "Ŝ": "Scirc",
                        "š": "scaron",
                        "Š": "Scaron",
                        "ş": "scedil",
                        "Ş": "Scedil",
                        "ß": "szlig",
                        "𝔱": "tfr",
                        "𝓉": "tscr",
                        "𝕥": "topf",
                        "𝒯": "Tscr",
                        "𝔗": "Tfr",
                        "𝕋": "Topf",
                        "ť": "tcaron",
                        "Ť": "Tcaron",
                        "ţ": "tcedil",
                        "Ţ": "Tcedil",
                        "™": "trade",
                        "ŧ": "tstrok",
                        "Ŧ": "Tstrok",
                        "𝓊": "uscr",
                        "𝕦": "uopf",
                        "𝔲": "ufr",
                        "𝕌": "Uopf",
                        "𝔘": "Ufr",
                        "𝒰": "Uscr",
                        "ú": "uacute",
                        "Ú": "Uacute",
                        "ù": "ugrave",
                        "Ù": "Ugrave",
                        "ŭ": "ubreve",
                        "Ŭ": "Ubreve",
                        "û": "ucirc",
                        "Û": "Ucirc",
                        "ů": "uring",
                        "Ů": "Uring",
                        "ü": "uuml",
                        "Ü": "Uuml",
                        "ű": "udblac",
                        "Ű": "Udblac",
                        "ũ": "utilde",
                        "Ũ": "Utilde",
                        "ų": "uogon",
                        "Ų": "Uogon",
                        "ū": "umacr",
                        "Ū": "Umacr",
                        "𝔳": "vfr",
                        "𝕧": "vopf",
                        "𝓋": "vscr",
                        "𝔙": "Vfr",
                        "𝕍": "Vopf",
                        "𝒱": "Vscr",
                        "𝕨": "wopf",
                        "𝓌": "wscr",
                        "𝔴": "wfr",
                        "𝒲": "Wscr",
                        "𝕎": "Wopf",
                        "𝔚": "Wfr",
                        "ŵ": "wcirc",
                        "Ŵ": "Wcirc",
                        "𝔵": "xfr",
                        "𝓍": "xscr",
                        "𝕩": "xopf",
                        "𝕏": "Xopf",
                        "𝔛": "Xfr",
                        "𝒳": "Xscr",
                        "𝔶": "yfr",
                        "𝓎": "yscr",
                        "𝕪": "yopf",
                        "𝒴": "Yscr",
                        "𝔜": "Yfr",
                        "𝕐": "Yopf",
                        "ý": "yacute",
                        "Ý": "Yacute",
                        "ŷ": "ycirc",
                        "Ŷ": "Ycirc",
                        "ÿ": "yuml",
                        "Ÿ": "Yuml",
                        "𝓏": "zscr",
                        "𝔷": "zfr",
                        "𝕫": "zopf",
                        "ℨ": "Zfr",
                        "ℤ": "Zopf",
                        "𝒵": "Zscr",
                        "ź": "zacute",
                        "Ź": "Zacute",
                        "ž": "zcaron",
                        "Ž": "Zcaron",
                        "ż": "zdot",
                        "Ż": "Zdot",
                        "Ƶ": "imped",
                        "þ": "thorn",
                        "Þ": "THORN",
                        "ŉ": "napos",
                        "α": "alpha",
                        "Α": "Alpha",
                        "β": "beta",
                        "Β": "Beta",
                        "γ": "gamma",
                        "Γ": "Gamma",
                        "δ": "delta",
                        "Δ": "Delta",
                        "ε": "epsi",
                        "ϵ": "epsiv",
                        "Ε": "Epsilon",
                        "ϝ": "gammad",
                        "Ϝ": "Gammad",
                        "ζ": "zeta",
                        "Ζ": "Zeta",
                        "η": "eta",
                        "Η": "Eta",
                        "θ": "theta",
                        "ϑ": "thetav",
                        "Θ": "Theta",
                        "ι": "iota",
                        "Ι": "Iota",
                        "κ": "kappa",
                        "ϰ": "kappav",
                        "Κ": "Kappa",
                        "λ": "lambda",
                        "Λ": "Lambda",
                        "μ": "mu",
                        "µ": "micro",
                        "Μ": "Mu",
                        "ν": "nu",
                        "Ν": "Nu",
                        "ξ": "xi",
                        "Ξ": "Xi",
                        "ο": "omicron",
                        "Ο": "Omicron",
                        "π": "pi",
                        "ϖ": "piv",
                        "Π": "Pi",
                        "ρ": "rho",
                        "ϱ": "rhov",
                        "Ρ": "Rho",
                        "σ": "sigma",
                        "Σ": "Sigma",
                        "ς": "sigmaf",
                        "τ": "tau",
                        "Τ": "Tau",
                        "υ": "upsi",
                        "Υ": "Upsilon",
                        "ϒ": "Upsi",
                        "φ": "phi",
                        "ϕ": "phiv",
                        "Φ": "Phi",
                        "χ": "chi",
                        "Χ": "Chi",
                        "ψ": "psi",
                        "Ψ": "Psi",
                        "ω": "omega",
                        "Ω": "ohm",
                        "а": "acy",
                        "А": "Acy",
                        "б": "bcy",
                        "Б": "Bcy",
                        "в": "vcy",
                        "В": "Vcy",
                        "г": "gcy",
                        "Г": "Gcy",
                        "ѓ": "gjcy",
                        "Ѓ": "GJcy",
                        "д": "dcy",
                        "Д": "Dcy",
                        "ђ": "djcy",
                        "Ђ": "DJcy",
                        "е": "iecy",
                        "Е": "IEcy",
                        "ё": "iocy",
                        "Ё": "IOcy",
                        "є": "jukcy",
                        "Є": "Jukcy",
                        "ж": "zhcy",
                        "Ж": "ZHcy",
                        "з": "zcy",
                        "З": "Zcy",
                        "ѕ": "dscy",
                        "Ѕ": "DScy",
                        "и": "icy",
                        "И": "Icy",
                        "і": "iukcy",
                        "І": "Iukcy",
                        "ї": "yicy",
                        "Ї": "YIcy",
                        "й": "jcy",
                        "Й": "Jcy",
                        "ј": "jsercy",
                        "Ј": "Jsercy",
                        "к": "kcy",
                        "К": "Kcy",
                        "ќ": "kjcy",
                        "Ќ": "KJcy",
                        "л": "lcy",
                        "Л": "Lcy",
                        "љ": "ljcy",
                        "Љ": "LJcy",
                        "м": "mcy",
                        "М": "Mcy",
                        "н": "ncy",
                        "Н": "Ncy",
                        "њ": "njcy",
                        "Њ": "NJcy",
                        "о": "ocy",
                        "О": "Ocy",
                        "п": "pcy",
                        "П": "Pcy",
                        "р": "rcy",
                        "Р": "Rcy",
                        "с": "scy",
                        "С": "Scy",
                        "т": "tcy",
                        "Т": "Tcy",
                        "ћ": "tshcy",
                        "Ћ": "TSHcy",
                        "у": "ucy",
                        "У": "Ucy",
                        "ў": "ubrcy",
                        "Ў": "Ubrcy",
                        "ф": "fcy",
                        "Ф": "Fcy",
                        "х": "khcy",
                        "Х": "KHcy",
                        "ц": "tscy",
                        "Ц": "TScy",
                        "ч": "chcy",
                        "Ч": "CHcy",
                        "џ": "dzcy",
                        "Џ": "DZcy",
                        "ш": "shcy",
                        "Ш": "SHcy",
                        "щ": "shchcy",
                        "Щ": "SHCHcy",
                        "ъ": "hardcy",
                        "Ъ": "HARDcy",
                        "ы": "ycy",
                        "Ы": "Ycy",
                        "ь": "softcy",
                        "Ь": "SOFTcy",
                        "э": "ecy",
                        "Э": "Ecy",
                        "ю": "yucy",
                        "Ю": "YUcy",
                        "я": "yacy",
                        "Я": "YAcy",
                        "ℵ": "aleph",
                        "ℶ": "beth",
                        "ℷ": "gimel",
                        "ℸ": "daleth"
                    }
                      , i = /["&'<>`]/g
                      , n = {
                        '"': "&quot;",
                        "&": "&amp;",
                        "'": "&#x27;",
                        "<": "&lt;",
                        ">": "&gt;",
                        "`": "&#x60;"
                    }
                      , p = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/
                      , d = /[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/
                      , g = /&(CounterClockwiseContourIntegral|DoubleLongLeftRightArrow|ClockwiseContourIntegral|NotNestedGreaterGreater|NotSquareSupersetEqual|DiacriticalDoubleAcute|NotRightTriangleEqual|NotSucceedsSlantEqual|NotPrecedesSlantEqual|CloseCurlyDoubleQuote|NegativeVeryThinSpace|DoubleContourIntegral|FilledVerySmallSquare|CapitalDifferentialD|OpenCurlyDoubleQuote|EmptyVerySmallSquare|NestedGreaterGreater|DoubleLongRightArrow|NotLeftTriangleEqual|NotGreaterSlantEqual|ReverseUpEquilibrium|DoubleLeftRightArrow|NotSquareSubsetEqual|NotDoubleVerticalBar|RightArrowLeftArrow|NotGreaterFullEqual|NotRightTriangleBar|SquareSupersetEqual|DownLeftRightVector|DoubleLongLeftArrow|leftrightsquigarrow|LeftArrowRightArrow|NegativeMediumSpace|blacktriangleright|RightDownVectorBar|PrecedesSlantEqual|RightDoubleBracket|SucceedsSlantEqual|NotLeftTriangleBar|RightTriangleEqual|SquareIntersection|RightDownTeeVector|ReverseEquilibrium|NegativeThickSpace|longleftrightarrow|Longleftrightarrow|LongLeftRightArrow|DownRightTeeVector|DownRightVectorBar|GreaterSlantEqual|SquareSubsetEqual|LeftDownVectorBar|LeftDoubleBracket|VerticalSeparator|rightleftharpoons|NotGreaterGreater|NotSquareSuperset|blacktriangleleft|blacktriangledown|NegativeThinSpace|LeftDownTeeVector|NotLessSlantEqual|leftrightharpoons|DoubleUpDownArrow|DoubleVerticalBar|LeftTriangleEqual|FilledSmallSquare|twoheadrightarrow|NotNestedLessLess|DownLeftTeeVector|DownLeftVectorBar|RightAngleBracket|NotTildeFullEqual|NotReverseElement|RightUpDownVector|DiacriticalTilde|NotSucceedsTilde|circlearrowright|NotPrecedesEqual|rightharpoondown|DoubleRightArrow|NotSucceedsEqual|NonBreakingSpace|NotRightTriangle|LessEqualGreater|RightUpTeeVector|LeftAngleBracket|GreaterFullEqual|DownArrowUpArrow|RightUpVectorBar|twoheadleftarrow|GreaterEqualLess|downharpoonright|RightTriangleBar|ntrianglerighteq|NotSupersetEqual|LeftUpDownVector|DiacriticalAcute|rightrightarrows|vartriangleright|UpArrowDownArrow|DiacriticalGrave|UnderParenthesis|EmptySmallSquare|LeftUpVectorBar|leftrightarrows|DownRightVector|downharpoonleft|trianglerighteq|ShortRightArrow|OverParenthesis|DoubleLeftArrow|DoubleDownArrow|NotSquareSubset|bigtriangledown|ntrianglelefteq|UpperRightArrow|curvearrowright|vartriangleleft|NotLeftTriangle|nleftrightarrow|LowerRightArrow|NotHumpDownHump|NotGreaterTilde|rightthreetimes|LeftUpTeeVector|NotGreaterEqual|straightepsilon|LeftTriangleBar|rightsquigarrow|ContourIntegral|rightleftarrows|CloseCurlyQuote|RightDownVector|LeftRightVector|nLeftrightarrow|leftharpoondown|circlearrowleft|SquareSuperset|OpenCurlyQuote|hookrightarrow|HorizontalLine|DiacriticalDot|NotLessGreater|ntriangleright|DoubleRightTee|InvisibleComma|InvisibleTimes|LowerLeftArrow|DownLeftVector|NotSubsetEqual|curvearrowleft|trianglelefteq|NotVerticalBar|TildeFullEqual|downdownarrows|NotGreaterLess|RightTeeVector|ZeroWidthSpace|looparrowright|LongRightArrow|doublebarwedge|ShortLeftArrow|ShortDownArrow|RightVectorBar|GreaterGreater|ReverseElement|rightharpoonup|LessSlantEqual|leftthreetimes|upharpoonright|rightarrowtail|LeftDownVector|Longrightarrow|NestedLessLess|UpperLeftArrow|nshortparallel|leftleftarrows|leftrightarrow|Leftrightarrow|LeftRightArrow|longrightarrow|upharpoonleft|RightArrowBar|ApplyFunction|LeftTeeVector|leftarrowtail|NotEqualTilde|varsubsetneqq|varsupsetneqq|RightTeeArrow|SucceedsEqual|SucceedsTilde|LeftVectorBar|SupersetEqual|hookleftarrow|DifferentialD|VerticalTilde|VeryThinSpace|blacktriangle|bigtriangleup|LessFullEqual|divideontimes|leftharpoonup|UpEquilibrium|ntriangleleft|RightTriangle|measuredangle|shortparallel|longleftarrow|Longleftarrow|LongLeftArrow|DoubleLeftTee|Poincareplane|PrecedesEqual|triangleright|DoubleUpArrow|RightUpVector|fallingdotseq|looparrowleft|PrecedesTilde|NotTildeEqual|NotTildeTilde|smallsetminus|Proportional|triangleleft|triangledown|UnderBracket|NotHumpEqual|exponentiale|ExponentialE|NotLessTilde|HilbertSpace|RightCeiling|blacklozenge|varsupsetneq|HumpDownHump|GreaterEqual|VerticalLine|LeftTeeArrow|NotLessEqual|DownTeeArrow|LeftTriangle|varsubsetneq|Intersection|NotCongruent|DownArrowBar|LeftUpVector|LeftArrowBar|risingdotseq|GreaterTilde|RoundImplies|SquareSubset|ShortUpArrow|NotSuperset|quaternions|precnapprox|backepsilon|preccurlyeq|OverBracket|blacksquare|MediumSpace|VerticalBar|circledcirc|circleddash|CircleMinus|CircleTimes|LessGreater|curlyeqprec|curlyeqsucc|diamondsuit|UpDownArrow|Updownarrow|RuleDelayed|Rrightarrow|updownarrow|RightVector|nRightarrow|nrightarrow|eqslantless|LeftCeiling|Equilibrium|SmallCircle|expectation|NotSucceeds|thickapprox|GreaterLess|SquareUnion|NotPrecedes|NotLessLess|straightphi|succnapprox|succcurlyeq|SubsetEqual|sqsupseteq|Proportion|Laplacetrf|ImaginaryI|supsetneqq|NotGreater|gtreqqless|NotElement|ThickSpace|TildeEqual|TildeTilde|Fouriertrf|rmoustache|EqualTilde|eqslantgtr|UnderBrace|LeftVector|UpArrowBar|nLeftarrow|nsubseteqq|subsetneqq|nsupseteqq|nleftarrow|succapprox|lessapprox|UpTeeArrow|upuparrows|curlywedge|lesseqqgtr|varepsilon|varnothing|RightFloor|complement|CirclePlus|sqsubseteq|Lleftarrow|circledast|RightArrow|Rightarrow|rightarrow|lmoustache|Bernoullis|precapprox|mapstoleft|mapstodown|longmapsto|dotsquare|downarrow|DoubleDot|nsubseteq|supsetneq|leftarrow|nsupseteq|subsetneq|ThinSpace|ngeqslant|subseteqq|HumpEqual|NotSubset|triangleq|NotCupCap|lesseqgtr|heartsuit|TripleDot|Leftarrow|Coproduct|Congruent|varpropto|complexes|gvertneqq|LeftArrow|LessTilde|supseteqq|MinusPlus|CircleDot|nleqslant|NotExists|gtreqless|nparallel|UnionPlus|LeftFloor|checkmark|CenterDot|centerdot|Mellintrf|gtrapprox|bigotimes|OverBrace|spadesuit|therefore|pitchfork|rationals|PlusMinus|Backslash|Therefore|DownBreve|backsimeq|backprime|DownArrow|nshortmid|Downarrow|lvertneqq|eqvparsl|imagline|imagpart|infintie|integers|Integral|intercal|LessLess|Uarrocir|intlarhk|sqsupset|angmsdaf|sqsubset|llcorner|vartheta|cupbrcap|lnapprox|Superset|SuchThat|succnsim|succneqq|angmsdag|biguplus|curlyvee|trpezium|Succeeds|NotTilde|bigwedge|angmsdah|angrtvbd|triminus|cwconint|fpartint|lrcorner|smeparsl|subseteq|urcorner|lurdshar|laemptyv|DDotrahd|approxeq|ldrushar|awconint|mapstoup|backcong|shortmid|triangle|geqslant|gesdotol|timesbar|circledR|circledS|setminus|multimap|naturals|scpolint|ncongdot|RightTee|boxminus|gnapprox|boxtimes|andslope|thicksim|angmsdaa|varsigma|cirfnint|rtriltri|angmsdab|rppolint|angmsdac|barwedge|drbkarow|clubsuit|thetasym|bsolhsub|capbrcup|dzigrarr|doteqdot|DotEqual|dotminus|UnderBar|NotEqual|realpart|otimesas|ulcorner|hksearow|hkswarow|parallel|PartialD|elinters|emptyset|plusacir|bbrktbrk|angmsdad|pointint|bigoplus|angmsdae|Precedes|bigsqcup|varkappa|notindot|supseteq|precneqq|precnsim|profalar|profline|profsurf|leqslant|lesdotor|raemptyv|subplus|notnivb|notnivc|subrarr|zigrarr|vzigzag|submult|subedot|Element|between|cirscir|larrbfs|larrsim|lotimes|lbrksld|lbrkslu|lozenge|ldrdhar|dbkarow|bigcirc|epsilon|simrarr|simplus|ltquest|Epsilon|luruhar|gtquest|maltese|npolint|eqcolon|npreceq|bigodot|ddagger|gtrless|bnequiv|harrcir|ddotseq|equivDD|backsim|demptyv|nsqsube|nsqsupe|Upsilon|nsubset|upsilon|minusdu|nsucceq|swarrow|nsupset|coloneq|searrow|boxplus|napprox|natural|asympeq|alefsym|congdot|nearrow|bigstar|diamond|supplus|tritime|LeftTee|nvinfin|triplus|NewLine|nvltrie|nvrtrie|nwarrow|nexists|Diamond|ruluhar|Implies|supmult|angzarr|suplarr|suphsub|questeq|because|digamma|Because|olcross|bemptyv|omicron|Omicron|rotimes|NoBreak|intprod|angrtvb|orderof|uwangle|suphsol|lesdoto|orslope|DownTee|realine|cudarrl|rdldhar|OverBar|supedot|lessdot|supdsub|topfork|succsim|rbrkslu|rbrksld|pertenk|cudarrr|isindot|planckh|lessgtr|pluscir|gesdoto|plussim|plustwo|lesssim|cularrp|rarrsim|Cayleys|notinva|notinvb|notinvc|UpArrow|Uparrow|uparrow|NotLess|dwangle|precsim|Product|curarrm|Cconint|dotplus|rarrbfs|ccupssm|Cedilla|cemptyv|notniva|quatint|frac35|frac38|frac45|frac56|frac58|frac78|tridot|xoplus|gacute|gammad|Gammad|lfisht|lfloor|bigcup|sqsupe|gbreve|Gbreve|lharul|sqsube|sqcups|Gcedil|apacir|llhard|lmidot|Lmidot|lmoust|andand|sqcaps|approx|Abreve|spades|circeq|tprime|divide|topcir|Assign|topbot|gesdot|divonx|xuplus|timesd|gesles|atilde|solbar|SOFTcy|loplus|timesb|lowast|lowbar|dlcorn|dlcrop|softcy|dollar|lparlt|thksim|lrhard|Atilde|lsaquo|smashp|bigvee|thinsp|wreath|bkarow|lsquor|lstrok|Lstrok|lthree|ltimes|ltlarr|DotDot|simdot|ltrPar|weierp|xsqcup|angmsd|sigmav|sigmaf|zeetrf|Zcaron|zcaron|mapsto|vsupne|thetav|cirmid|marker|mcomma|Zacute|vsubnE|there4|gtlPar|vsubne|bottom|gtrarr|SHCHcy|shchcy|midast|midcir|middot|minusb|minusd|gtrdot|bowtie|sfrown|mnplus|models|colone|seswar|Colone|mstpos|searhk|gtrsim|nacute|Nacute|boxbox|telrec|hairsp|Tcedil|nbumpe|scnsim|ncaron|Ncaron|ncedil|Ncedil|hamilt|Scedil|nearhk|hardcy|HARDcy|tcedil|Tcaron|commat|nequiv|nesear|tcaron|target|hearts|nexist|varrho|scedil|Scaron|scaron|hellip|Sacute|sacute|hercon|swnwar|compfn|rtimes|rthree|rsquor|rsaquo|zacute|wedgeq|homtht|barvee|barwed|Barwed|rpargt|horbar|conint|swarhk|roplus|nltrie|hslash|hstrok|Hstrok|rmoust|Conint|bprime|hybull|hyphen|iacute|Iacute|supsup|supsub|supsim|varphi|coprod|brvbar|agrave|Supset|supset|igrave|Igrave|notinE|Agrave|iiiint|iinfin|copysr|wedbar|Verbar|vangrt|becaus|incare|verbar|inodot|bullet|drcorn|intcal|drcrop|cularr|vellip|Utilde|bumpeq|cupcap|dstrok|Dstrok|CupCap|cupcup|cupdot|eacute|Eacute|supdot|iquest|easter|ecaron|Ecaron|ecolon|isinsv|utilde|itilde|Itilde|curarr|succeq|Bumpeq|cacute|ulcrop|nparsl|Cacute|nprcue|egrave|Egrave|nrarrc|nrarrw|subsup|subsub|nrtrie|jsercy|nsccue|Jsercy|kappav|kcedil|Kcedil|subsim|ulcorn|nsimeq|egsdot|veebar|kgreen|capand|elsdot|Subset|subset|curren|aacute|lacute|Lacute|emptyv|ntilde|Ntilde|lagran|lambda|Lambda|capcap|Ugrave|langle|subdot|emsp13|numero|emsp14|nvdash|nvDash|nVdash|nVDash|ugrave|ufisht|nvHarr|larrfs|nvlArr|larrhk|larrlp|larrpl|nvrArr|Udblac|nwarhk|larrtl|nwnear|oacute|Oacute|latail|lAtail|sstarf|lbrace|odblac|Odblac|lbrack|udblac|odsold|eparsl|lcaron|Lcaron|ograve|Ograve|lcedil|Lcedil|Aacute|ssmile|ssetmn|squarf|ldquor|capcup|ominus|cylcty|rharul|eqcirc|dagger|rfloor|rfisht|Dagger|daleth|equals|origof|capdot|equest|dcaron|Dcaron|rdquor|oslash|Oslash|otilde|Otilde|otimes|Otimes|urcrop|Ubreve|ubreve|Yacute|Uacute|uacute|Rcedil|rcedil|urcorn|parsim|Rcaron|Vdashl|rcaron|Tstrok|percnt|period|permil|Exists|yacute|rbrack|rbrace|phmmat|ccaron|Ccaron|planck|ccedil|plankv|tstrok|female|plusdo|plusdu|ffilig|plusmn|ffllig|Ccedil|rAtail|dfisht|bernou|ratail|Rarrtl|rarrtl|angsph|rarrpl|rarrlp|rarrhk|xwedge|xotime|forall|ForAll|Vvdash|vsupnE|preceq|bigcap|frac12|frac13|frac14|primes|rarrfs|prnsim|frac15|Square|frac16|square|lesdot|frac18|frac23|propto|prurel|rarrap|rangle|puncsp|frac25|Racute|qprime|racute|lesges|frac34|abreve|AElig|eqsim|utdot|setmn|urtri|Equal|Uring|seArr|uring|searr|dashv|Dashv|mumap|nabla|iogon|Iogon|sdote|sdotb|scsim|napid|napos|equiv|natur|Acirc|dblac|erarr|nbump|iprod|erDot|ucirc|awint|esdot|angrt|ncong|isinE|scnap|Scirc|scirc|ndash|isins|Ubrcy|nearr|neArr|isinv|nedot|ubrcy|acute|Ycirc|iukcy|Iukcy|xutri|nesim|caret|jcirc|Jcirc|caron|twixt|ddarr|sccue|exist|jmath|sbquo|ngeqq|angst|ccaps|lceil|ngsim|UpTee|delta|Delta|rtrif|nharr|nhArr|nhpar|rtrie|jukcy|Jukcy|kappa|rsquo|Kappa|nlarr|nlArr|TSHcy|rrarr|aogon|Aogon|fflig|xrarr|tshcy|ccirc|nleqq|filig|upsih|nless|dharl|nlsim|fjlig|ropar|nltri|dharr|robrk|roarr|fllig|fltns|roang|rnmid|subnE|subne|lAarr|trisb|Ccirc|acirc|ccups|blank|VDash|forkv|Vdash|langd|cedil|blk12|blk14|laquo|strns|diams|notin|vDash|larrb|blk34|block|disin|uplus|vdash|vBarv|aelig|starf|Wedge|check|xrArr|lates|lbarr|lBarr|notni|lbbrk|bcong|frasl|lbrke|frown|vrtri|vprop|vnsup|gamma|Gamma|wedge|xodot|bdquo|srarr|doteq|ldquo|boxdl|boxdL|gcirc|Gcirc|boxDl|boxDL|boxdr|boxdR|boxDr|TRADE|trade|rlhar|boxDR|vnsub|npart|vltri|rlarr|boxhd|boxhD|nprec|gescc|nrarr|nrArr|boxHd|boxHD|boxhu|boxhU|nrtri|boxHu|clubs|boxHU|times|colon|Colon|gimel|xlArr|Tilde|nsime|tilde|nsmid|nspar|THORN|thorn|xlarr|nsube|nsubE|thkap|xhArr|comma|nsucc|boxul|boxuL|nsupe|nsupE|gneqq|gnsim|boxUl|boxUL|grave|boxur|boxuR|boxUr|boxUR|lescc|angle|bepsi|boxvh|varpi|boxvH|numsp|Theta|gsime|gsiml|theta|boxVh|boxVH|boxvl|gtcir|gtdot|boxvL|boxVl|boxVL|crarr|cross|Cross|nvsim|boxvr|nwarr|nwArr|sqsup|dtdot|Uogon|lhard|lharu|dtrif|ocirc|Ocirc|lhblk|duarr|odash|sqsub|Hacek|sqcup|llarr|duhar|oelig|OElig|ofcir|boxvR|uogon|lltri|boxVr|csube|uuarr|ohbar|csupe|ctdot|olarr|olcir|harrw|oline|sqcap|omacr|Omacr|omega|Omega|boxVR|aleph|lneqq|lnsim|loang|loarr|rharu|lobrk|hcirc|operp|oplus|rhard|Hcirc|orarr|Union|order|ecirc|Ecirc|cuepr|szlig|cuesc|breve|reals|eDDot|Breve|hoarr|lopar|utrif|rdquo|Umacr|umacr|efDot|swArr|ultri|alpha|rceil|ovbar|swarr|Wcirc|wcirc|smtes|smile|bsemi|lrarr|aring|parsl|lrhar|bsime|uhblk|lrtri|cupor|Aring|uharr|uharl|slarr|rbrke|bsolb|lsime|rbbrk|RBarr|lsimg|phone|rBarr|rbarr|icirc|lsquo|Icirc|emacr|Emacr|ratio|simne|plusb|simlE|simgE|simeq|pluse|ltcir|ltdot|empty|xharr|xdtri|iexcl|Alpha|ltrie|rarrw|pound|ltrif|xcirc|bumpe|prcue|bumpE|asymp|amacr|cuvee|Sigma|sigma|iiint|udhar|iiota|ijlig|IJlig|supnE|imacr|Imacr|prime|Prime|image|prnap|eogon|Eogon|rarrc|mdash|mDDot|cuwed|imath|supne|imped|Amacr|udarr|prsim|micro|rarrb|cwint|raquo|infin|eplus|range|rangd|Ucirc|radic|minus|amalg|veeeq|rAarr|epsiv|ycirc|quest|sharp|quot|zwnj|Qscr|race|qscr|Qopf|qopf|qint|rang|Rang|Zscr|zscr|Zopf|zopf|rarr|rArr|Rarr|Pscr|pscr|prop|prod|prnE|prec|ZHcy|zhcy|prap|Zeta|zeta|Popf|popf|Zdot|plus|zdot|Yuml|yuml|phiv|YUcy|yucy|Yscr|yscr|perp|Yopf|yopf|part|para|YIcy|Ouml|rcub|yicy|YAcy|rdca|ouml|osol|Oscr|rdsh|yacy|real|oscr|xvee|andd|rect|andv|Xscr|oror|ordm|ordf|xscr|ange|aopf|Aopf|rHar|Xopf|opar|Oopf|xopf|xnis|rhov|oopf|omid|xmap|oint|apid|apos|ogon|ascr|Ascr|odot|odiv|xcup|xcap|ocir|oast|nvlt|nvle|nvgt|nvge|nvap|Wscr|wscr|auml|ntlg|ntgl|nsup|nsub|nsim|Nscr|nscr|nsce|Wopf|ring|npre|wopf|npar|Auml|Barv|bbrk|Nopf|nopf|nmid|nLtv|beta|ropf|Ropf|Beta|beth|nles|rpar|nleq|bnot|bNot|nldr|NJcy|rscr|Rscr|Vscr|vscr|rsqb|njcy|bopf|nisd|Bopf|rtri|Vopf|nGtv|ngtr|vopf|boxh|boxH|boxv|nges|ngeq|boxV|bscr|scap|Bscr|bsim|Vert|vert|bsol|bull|bump|caps|cdot|ncup|scnE|ncap|nbsp|napE|Cdot|cent|sdot|Vbar|nang|vBar|chcy|Mscr|mscr|sect|semi|CHcy|Mopf|mopf|sext|circ|cire|mldr|mlcp|cirE|comp|shcy|SHcy|vArr|varr|cong|copf|Copf|copy|COPY|malt|male|macr|lvnE|cscr|ltri|sime|ltcc|simg|Cscr|siml|csub|Uuml|lsqb|lsim|uuml|csup|Lscr|lscr|utri|smid|lpar|cups|smte|lozf|darr|Lopf|Uscr|solb|lopf|sopf|Sopf|lneq|uscr|spar|dArr|lnap|Darr|dash|Sqrt|LJcy|ljcy|lHar|dHar|Upsi|upsi|diam|lesg|djcy|DJcy|leqq|dopf|Dopf|dscr|Dscr|dscy|ldsh|ldca|squf|DScy|sscr|Sscr|dsol|lcub|late|star|Star|Uopf|Larr|lArr|larr|uopf|dtri|dzcy|sube|subE|Lang|lang|Kscr|kscr|Kopf|kopf|KJcy|kjcy|KHcy|khcy|DZcy|ecir|edot|eDot|Jscr|jscr|succ|Jopf|jopf|Edot|uHar|emsp|ensp|Iuml|iuml|eopf|isin|Iscr|iscr|Eopf|epar|sung|epsi|escr|sup1|sup2|sup3|Iota|iota|supe|supE|Iopf|iopf|IOcy|iocy|Escr|esim|Esim|imof|Uarr|QUOT|uArr|uarr|euml|IEcy|iecy|Idot|Euml|euro|excl|Hscr|hscr|Hopf|hopf|TScy|tscy|Tscr|hbar|tscr|flat|tbrk|fnof|hArr|harr|half|fopf|Fopf|tdot|gvnE|fork|trie|gtcc|fscr|Fscr|gdot|gsim|Gscr|gscr|Gopf|gopf|gneq|Gdot|tosa|gnap|Topf|topf|geqq|toea|GJcy|gjcy|tint|gesl|mid|Sfr|ggg|top|ges|gla|glE|glj|geq|gne|gEl|gel|gnE|Gcy|gcy|gap|Tfr|tfr|Tcy|tcy|Hat|Tau|Ffr|tau|Tab|hfr|Hfr|ffr|Fcy|fcy|icy|Icy|iff|ETH|eth|ifr|Ifr|Eta|eta|int|Int|Sup|sup|ucy|Ucy|Sum|sum|jcy|ENG|ufr|Ufr|eng|Jcy|jfr|els|ell|egs|Efr|efr|Jfr|uml|kcy|Kcy|Ecy|ecy|kfr|Kfr|lap|Sub|sub|lat|lcy|Lcy|leg|Dot|dot|lEg|leq|les|squ|div|die|lfr|Lfr|lgE|Dfr|dfr|Del|deg|Dcy|dcy|lne|lnE|sol|loz|smt|Cup|lrm|cup|lsh|Lsh|sim|shy|map|Map|mcy|Mcy|mfr|Mfr|mho|gfr|Gfr|sfr|cir|Chi|chi|nap|Cfr|vcy|Vcy|cfr|Scy|scy|ncy|Ncy|vee|Vee|Cap|cap|nfr|scE|sce|Nfr|nge|ngE|nGg|vfr|Vfr|ngt|bot|nGt|nis|niv|Rsh|rsh|nle|nlE|bne|Bfr|bfr|nLl|nlt|nLt|Bcy|bcy|not|Not|rlm|wfr|Wfr|npr|nsc|num|ocy|ast|Ocy|ofr|xfr|Xfr|Ofr|ogt|ohm|apE|olt|Rho|ape|rho|Rfr|rfr|ord|REG|ang|reg|orv|And|and|AMP|Rcy|amp|Afr|ycy|Ycy|yen|yfr|Yfr|rcy|par|pcy|Pcy|pfr|Pfr|phi|Phi|afr|Acy|acy|zcy|Zcy|piv|acE|acd|zfr|Zfr|pre|prE|psi|Psi|qfr|Qfr|zwj|Or|ge|Gg|gt|gg|el|oS|lt|Lt|LT|Re|lg|gl|eg|ne|Im|it|le|DD|wp|wr|nu|Nu|dd|lE|Sc|sc|pi|Pi|ee|af|ll|Ll|rx|gE|xi|pm|Xi|ic|pr|Pr|in|ni|mp|mu|ac|Mu|or|ap|Gt|GT|ii);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)(?!;)([=a-zA-Z0-9]?)|&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+)/g
                      , m = {
                        aacute: "á",
                        Aacute: "Á",
                        abreve: "ă",
                        Abreve: "Ă",
                        ac: "∾",
                        acd: "∿",
                        acE: "∾̳",
                        acirc: "â",
                        Acirc: "Â",
                        acute: "´",
                        acy: "а",
                        Acy: "А",
                        aelig: "æ",
                        AElig: "Æ",
                        af: "⁡",
                        afr: "𝔞",
                        Afr: "𝔄",
                        agrave: "à",
                        Agrave: "À",
                        alefsym: "ℵ",
                        aleph: "ℵ",
                        alpha: "α",
                        Alpha: "Α",
                        amacr: "ā",
                        Amacr: "Ā",
                        amalg: "⨿",
                        amp: "&",
                        AMP: "&",
                        and: "∧",
                        And: "⩓",
                        andand: "⩕",
                        andd: "⩜",
                        andslope: "⩘",
                        andv: "⩚",
                        ang: "∠",
                        ange: "⦤",
                        angle: "∠",
                        angmsd: "∡",
                        angmsdaa: "⦨",
                        angmsdab: "⦩",
                        angmsdac: "⦪",
                        angmsdad: "⦫",
                        angmsdae: "⦬",
                        angmsdaf: "⦭",
                        angmsdag: "⦮",
                        angmsdah: "⦯",
                        angrt: "∟",
                        angrtvb: "⊾",
                        angrtvbd: "⦝",
                        angsph: "∢",
                        angst: "Å",
                        angzarr: "⍼",
                        aogon: "ą",
                        Aogon: "Ą",
                        aopf: "𝕒",
                        Aopf: "𝔸",
                        ap: "≈",
                        apacir: "⩯",
                        ape: "≊",
                        apE: "⩰",
                        apid: "≋",
                        apos: "'",
                        ApplyFunction: "⁡",
                        approx: "≈",
                        approxeq: "≊",
                        aring: "å",
                        Aring: "Å",
                        ascr: "𝒶",
                        Ascr: "𝒜",
                        Assign: "≔",
                        ast: "*",
                        asymp: "≈",
                        asympeq: "≍",
                        atilde: "ã",
                        Atilde: "Ã",
                        auml: "ä",
                        Auml: "Ä",
                        awconint: "∳",
                        awint: "⨑",
                        backcong: "≌",
                        backepsilon: "϶",
                        backprime: "‵",
                        backsim: "∽",
                        backsimeq: "⋍",
                        Backslash: "∖",
                        Barv: "⫧",
                        barvee: "⊽",
                        barwed: "⌅",
                        Barwed: "⌆",
                        barwedge: "⌅",
                        bbrk: "⎵",
                        bbrktbrk: "⎶",
                        bcong: "≌",
                        bcy: "б",
                        Bcy: "Б",
                        bdquo: "„",
                        becaus: "∵",
                        because: "∵",
                        Because: "∵",
                        bemptyv: "⦰",
                        bepsi: "϶",
                        bernou: "ℬ",
                        Bernoullis: "ℬ",
                        beta: "β",
                        Beta: "Β",
                        beth: "ℶ",
                        between: "≬",
                        bfr: "𝔟",
                        Bfr: "𝔅",
                        bigcap: "⋂",
                        bigcirc: "◯",
                        bigcup: "⋃",
                        bigodot: "⨀",
                        bigoplus: "⨁",
                        bigotimes: "⨂",
                        bigsqcup: "⨆",
                        bigstar: "★",
                        bigtriangledown: "▽",
                        bigtriangleup: "△",
                        biguplus: "⨄",
                        bigvee: "⋁",
                        bigwedge: "⋀",
                        bkarow: "⤍",
                        blacklozenge: "⧫",
                        blacksquare: "▪",
                        blacktriangle: "▴",
                        blacktriangledown: "▾",
                        blacktriangleleft: "◂",
                        blacktriangleright: "▸",
                        blank: "␣",
                        blk12: "▒",
                        blk14: "░",
                        blk34: "▓",
                        block: "█",
                        bne: "=⃥",
                        bnequiv: "≡⃥",
                        bnot: "⌐",
                        bNot: "⫭",
                        bopf: "𝕓",
                        Bopf: "𝔹",
                        bot: "⊥",
                        bottom: "⊥",
                        bowtie: "⋈",
                        boxbox: "⧉",
                        boxdl: "┐",
                        boxdL: "╕",
                        boxDl: "╖",
                        boxDL: "╗",
                        boxdr: "┌",
                        boxdR: "╒",
                        boxDr: "╓",
                        boxDR: "╔",
                        boxh: "─",
                        boxH: "═",
                        boxhd: "┬",
                        boxhD: "╥",
                        boxHd: "╤",
                        boxHD: "╦",
                        boxhu: "┴",
                        boxhU: "╨",
                        boxHu: "╧",
                        boxHU: "╩",
                        boxminus: "⊟",
                        boxplus: "⊞",
                        boxtimes: "⊠",
                        boxul: "┘",
                        boxuL: "╛",
                        boxUl: "╜",
                        boxUL: "╝",
                        boxur: "└",
                        boxuR: "╘",
                        boxUr: "╙",
                        boxUR: "╚",
                        boxv: "│",
                        boxV: "║",
                        boxvh: "┼",
                        boxvH: "╪",
                        boxVh: "╫",
                        boxVH: "╬",
                        boxvl: "┤",
                        boxvL: "╡",
                        boxVl: "╢",
                        boxVL: "╣",
                        boxvr: "├",
                        boxvR: "╞",
                        boxVr: "╟",
                        boxVR: "╠",
                        bprime: "‵",
                        breve: "˘",
                        Breve: "˘",
                        brvbar: "¦",
                        bscr: "𝒷",
                        Bscr: "ℬ",
                        bsemi: "⁏",
                        bsim: "∽",
                        bsime: "⋍",
                        bsol: "\\",
                        bsolb: "⧅",
                        bsolhsub: "⟈",
                        bull: "•",
                        bullet: "•",
                        bump: "≎",
                        bumpe: "≏",
                        bumpE: "⪮",
                        bumpeq: "≏",
                        Bumpeq: "≎",
                        cacute: "ć",
                        Cacute: "Ć",
                        cap: "∩",
                        Cap: "⋒",
                        capand: "⩄",
                        capbrcup: "⩉",
                        capcap: "⩋",
                        capcup: "⩇",
                        capdot: "⩀",
                        CapitalDifferentialD: "ⅅ",
                        caps: "∩︀",
                        caret: "⁁",
                        caron: "ˇ",
                        Cayleys: "ℭ",
                        ccaps: "⩍",
                        ccaron: "č",
                        Ccaron: "Č",
                        ccedil: "ç",
                        Ccedil: "Ç",
                        ccirc: "ĉ",
                        Ccirc: "Ĉ",
                        Cconint: "∰",
                        ccups: "⩌",
                        ccupssm: "⩐",
                        cdot: "ċ",
                        Cdot: "Ċ",
                        cedil: "¸",
                        Cedilla: "¸",
                        cemptyv: "⦲",
                        cent: "¢",
                        centerdot: "·",
                        CenterDot: "·",
                        cfr: "𝔠",
                        Cfr: "ℭ",
                        chcy: "ч",
                        CHcy: "Ч",
                        check: "✓",
                        checkmark: "✓",
                        chi: "χ",
                        Chi: "Χ",
                        cir: "○",
                        circ: "ˆ",
                        circeq: "≗",
                        circlearrowleft: "↺",
                        circlearrowright: "↻",
                        circledast: "⊛",
                        circledcirc: "⊚",
                        circleddash: "⊝",
                        CircleDot: "⊙",
                        circledR: "®",
                        circledS: "Ⓢ",
                        CircleMinus: "⊖",
                        CirclePlus: "⊕",
                        CircleTimes: "⊗",
                        cire: "≗",
                        cirE: "⧃",
                        cirfnint: "⨐",
                        cirmid: "⫯",
                        cirscir: "⧂",
                        ClockwiseContourIntegral: "∲",
                        CloseCurlyDoubleQuote: "”",
                        CloseCurlyQuote: "’",
                        clubs: "♣",
                        clubsuit: "♣",
                        colon: ":",
                        Colon: "∷",
                        colone: "≔",
                        Colone: "⩴",
                        coloneq: "≔",
                        comma: ",",
                        commat: "@",
                        comp: "∁",
                        compfn: "∘",
                        complement: "∁",
                        complexes: "ℂ",
                        cong: "≅",
                        congdot: "⩭",
                        Congruent: "≡",
                        conint: "∮",
                        Conint: "∯",
                        ContourIntegral: "∮",
                        copf: "𝕔",
                        Copf: "ℂ",
                        coprod: "∐",
                        Coproduct: "∐",
                        copy: "©",
                        COPY: "©",
                        copysr: "℗",
                        CounterClockwiseContourIntegral: "∳",
                        crarr: "↵",
                        cross: "✗",
                        Cross: "⨯",
                        cscr: "𝒸",
                        Cscr: "𝒞",
                        csub: "⫏",
                        csube: "⫑",
                        csup: "⫐",
                        csupe: "⫒",
                        ctdot: "⋯",
                        cudarrl: "⤸",
                        cudarrr: "⤵",
                        cuepr: "⋞",
                        cuesc: "⋟",
                        cularr: "↶",
                        cularrp: "⤽",
                        cup: "∪",
                        Cup: "⋓",
                        cupbrcap: "⩈",
                        cupcap: "⩆",
                        CupCap: "≍",
                        cupcup: "⩊",
                        cupdot: "⊍",
                        cupor: "⩅",
                        cups: "∪︀",
                        curarr: "↷",
                        curarrm: "⤼",
                        curlyeqprec: "⋞",
                        curlyeqsucc: "⋟",
                        curlyvee: "⋎",
                        curlywedge: "⋏",
                        curren: "¤",
                        curvearrowleft: "↶",
                        curvearrowright: "↷",
                        cuvee: "⋎",
                        cuwed: "⋏",
                        cwconint: "∲",
                        cwint: "∱",
                        cylcty: "⌭",
                        dagger: "†",
                        Dagger: "‡",
                        daleth: "ℸ",
                        darr: "↓",
                        dArr: "⇓",
                        Darr: "↡",
                        dash: "‐",
                        dashv: "⊣",
                        Dashv: "⫤",
                        dbkarow: "⤏",
                        dblac: "˝",
                        dcaron: "ď",
                        Dcaron: "Ď",
                        dcy: "д",
                        Dcy: "Д",
                        dd: "ⅆ",
                        DD: "ⅅ",
                        ddagger: "‡",
                        ddarr: "⇊",
                        DDotrahd: "⤑",
                        ddotseq: "⩷",
                        deg: "°",
                        Del: "∇",
                        delta: "δ",
                        Delta: "Δ",
                        demptyv: "⦱",
                        dfisht: "⥿",
                        dfr: "𝔡",
                        Dfr: "𝔇",
                        dHar: "⥥",
                        dharl: "⇃",
                        dharr: "⇂",
                        DiacriticalAcute: "´",
                        DiacriticalDot: "˙",
                        DiacriticalDoubleAcute: "˝",
                        DiacriticalGrave: "`",
                        DiacriticalTilde: "˜",
                        diam: "⋄",
                        diamond: "⋄",
                        Diamond: "⋄",
                        diamondsuit: "♦",
                        diams: "♦",
                        die: "¨",
                        DifferentialD: "ⅆ",
                        digamma: "ϝ",
                        disin: "⋲",
                        div: "÷",
                        divide: "÷",
                        divideontimes: "⋇",
                        divonx: "⋇",
                        djcy: "ђ",
                        DJcy: "Ђ",
                        dlcorn: "⌞",
                        dlcrop: "⌍",
                        dollar: "$",
                        dopf: "𝕕",
                        Dopf: "𝔻",
                        dot: "˙",
                        Dot: "¨",
                        DotDot: "⃜",
                        doteq: "≐",
                        doteqdot: "≑",
                        DotEqual: "≐",
                        dotminus: "∸",
                        dotplus: "∔",
                        dotsquare: "⊡",
                        doublebarwedge: "⌆",
                        DoubleContourIntegral: "∯",
                        DoubleDot: "¨",
                        DoubleDownArrow: "⇓",
                        DoubleLeftArrow: "⇐",
                        DoubleLeftRightArrow: "⇔",
                        DoubleLeftTee: "⫤",
                        DoubleLongLeftArrow: "⟸",
                        DoubleLongLeftRightArrow: "⟺",
                        DoubleLongRightArrow: "⟹",
                        DoubleRightArrow: "⇒",
                        DoubleRightTee: "⊨",
                        DoubleUpArrow: "⇑",
                        DoubleUpDownArrow: "⇕",
                        DoubleVerticalBar: "∥",
                        downarrow: "↓",
                        Downarrow: "⇓",
                        DownArrow: "↓",
                        DownArrowBar: "⤓",
                        DownArrowUpArrow: "⇵",
                        DownBreve: "̑",
                        downdownarrows: "⇊",
                        downharpoonleft: "⇃",
                        downharpoonright: "⇂",
                        DownLeftRightVector: "⥐",
                        DownLeftTeeVector: "⥞",
                        DownLeftVector: "↽",
                        DownLeftVectorBar: "⥖",
                        DownRightTeeVector: "⥟",
                        DownRightVector: "⇁",
                        DownRightVectorBar: "⥗",
                        DownTee: "⊤",
                        DownTeeArrow: "↧",
                        drbkarow: "⤐",
                        drcorn: "⌟",
                        drcrop: "⌌",
                        dscr: "𝒹",
                        Dscr: "𝒟",
                        dscy: "ѕ",
                        DScy: "Ѕ",
                        dsol: "⧶",
                        dstrok: "đ",
                        Dstrok: "Đ",
                        dtdot: "⋱",
                        dtri: "▿",
                        dtrif: "▾",
                        duarr: "⇵",
                        duhar: "⥯",
                        dwangle: "⦦",
                        dzcy: "џ",
                        DZcy: "Џ",
                        dzigrarr: "⟿",
                        eacute: "é",
                        Eacute: "É",
                        easter: "⩮",
                        ecaron: "ě",
                        Ecaron: "Ě",
                        ecir: "≖",
                        ecirc: "ê",
                        Ecirc: "Ê",
                        ecolon: "≕",
                        ecy: "э",
                        Ecy: "Э",
                        eDDot: "⩷",
                        edot: "ė",
                        eDot: "≑",
                        Edot: "Ė",
                        ee: "ⅇ",
                        efDot: "≒",
                        efr: "𝔢",
                        Efr: "𝔈",
                        eg: "⪚",
                        egrave: "è",
                        Egrave: "È",
                        egs: "⪖",
                        egsdot: "⪘",
                        el: "⪙",
                        Element: "∈",
                        elinters: "⏧",
                        ell: "ℓ",
                        els: "⪕",
                        elsdot: "⪗",
                        emacr: "ē",
                        Emacr: "Ē",
                        empty: "∅",
                        emptyset: "∅",
                        EmptySmallSquare: "◻",
                        emptyv: "∅",
                        EmptyVerySmallSquare: "▫",
                        emsp: " ",
                        emsp13: " ",
                        emsp14: " ",
                        eng: "ŋ",
                        ENG: "Ŋ",
                        ensp: " ",
                        eogon: "ę",
                        Eogon: "Ę",
                        eopf: "𝕖",
                        Eopf: "𝔼",
                        epar: "⋕",
                        eparsl: "⧣",
                        eplus: "⩱",
                        epsi: "ε",
                        epsilon: "ε",
                        Epsilon: "Ε",
                        epsiv: "ϵ",
                        eqcirc: "≖",
                        eqcolon: "≕",
                        eqsim: "≂",
                        eqslantgtr: "⪖",
                        eqslantless: "⪕",
                        Equal: "⩵",
                        equals: "=",
                        EqualTilde: "≂",
                        equest: "≟",
                        Equilibrium: "⇌",
                        equiv: "≡",
                        equivDD: "⩸",
                        eqvparsl: "⧥",
                        erarr: "⥱",
                        erDot: "≓",
                        escr: "ℯ",
                        Escr: "ℰ",
                        esdot: "≐",
                        esim: "≂",
                        Esim: "⩳",
                        eta: "η",
                        Eta: "Η",
                        eth: "ð",
                        ETH: "Ð",
                        euml: "ë",
                        Euml: "Ë",
                        euro: "€",
                        excl: "!",
                        exist: "∃",
                        Exists: "∃",
                        expectation: "ℰ",
                        exponentiale: "ⅇ",
                        ExponentialE: "ⅇ",
                        fallingdotseq: "≒",
                        fcy: "ф",
                        Fcy: "Ф",
                        female: "♀",
                        ffilig: "ﬃ",
                        fflig: "ﬀ",
                        ffllig: "ﬄ",
                        ffr: "𝔣",
                        Ffr: "𝔉",
                        filig: "ﬁ",
                        FilledSmallSquare: "◼",
                        FilledVerySmallSquare: "▪",
                        fjlig: "fj",
                        flat: "♭",
                        fllig: "ﬂ",
                        fltns: "▱",
                        fnof: "ƒ",
                        fopf: "𝕗",
                        Fopf: "𝔽",
                        forall: "∀",
                        ForAll: "∀",
                        fork: "⋔",
                        forkv: "⫙",
                        Fouriertrf: "ℱ",
                        fpartint: "⨍",
                        frac12: "½",
                        frac13: "⅓",
                        frac14: "¼",
                        frac15: "⅕",
                        frac16: "⅙",
                        frac18: "⅛",
                        frac23: "⅔",
                        frac25: "⅖",
                        frac34: "¾",
                        frac35: "⅗",
                        frac38: "⅜",
                        frac45: "⅘",
                        frac56: "⅚",
                        frac58: "⅝",
                        frac78: "⅞",
                        frasl: "⁄",
                        frown: "⌢",
                        fscr: "𝒻",
                        Fscr: "ℱ",
                        gacute: "ǵ",
                        gamma: "γ",
                        Gamma: "Γ",
                        gammad: "ϝ",
                        Gammad: "Ϝ",
                        gap: "⪆",
                        gbreve: "ğ",
                        Gbreve: "Ğ",
                        Gcedil: "Ģ",
                        gcirc: "ĝ",
                        Gcirc: "Ĝ",
                        gcy: "г",
                        Gcy: "Г",
                        gdot: "ġ",
                        Gdot: "Ġ",
                        ge: "≥",
                        gE: "≧",
                        gel: "⋛",
                        gEl: "⪌",
                        geq: "≥",
                        geqq: "≧",
                        geqslant: "⩾",
                        ges: "⩾",
                        gescc: "⪩",
                        gesdot: "⪀",
                        gesdoto: "⪂",
                        gesdotol: "⪄",
                        gesl: "⋛︀",
                        gesles: "⪔",
                        gfr: "𝔤",
                        Gfr: "𝔊",
                        gg: "≫",
                        Gg: "⋙",
                        ggg: "⋙",
                        gimel: "ℷ",
                        gjcy: "ѓ",
                        GJcy: "Ѓ",
                        gl: "≷",
                        gla: "⪥",
                        glE: "⪒",
                        glj: "⪤",
                        gnap: "⪊",
                        gnapprox: "⪊",
                        gne: "⪈",
                        gnE: "≩",
                        gneq: "⪈",
                        gneqq: "≩",
                        gnsim: "⋧",
                        gopf: "𝕘",
                        Gopf: "𝔾",
                        grave: "`",
                        GreaterEqual: "≥",
                        GreaterEqualLess: "⋛",
                        GreaterFullEqual: "≧",
                        GreaterGreater: "⪢",
                        GreaterLess: "≷",
                        GreaterSlantEqual: "⩾",
                        GreaterTilde: "≳",
                        gscr: "ℊ",
                        Gscr: "𝒢",
                        gsim: "≳",
                        gsime: "⪎",
                        gsiml: "⪐",
                        gt: ">",
                        Gt: "≫",
                        GT: ">",
                        gtcc: "⪧",
                        gtcir: "⩺",
                        gtdot: "⋗",
                        gtlPar: "⦕",
                        gtquest: "⩼",
                        gtrapprox: "⪆",
                        gtrarr: "⥸",
                        gtrdot: "⋗",
                        gtreqless: "⋛",
                        gtreqqless: "⪌",
                        gtrless: "≷",
                        gtrsim: "≳",
                        gvertneqq: "≩︀",
                        gvnE: "≩︀",
                        Hacek: "ˇ",
                        hairsp: " ",
                        half: "½",
                        hamilt: "ℋ",
                        hardcy: "ъ",
                        HARDcy: "Ъ",
                        harr: "↔",
                        hArr: "⇔",
                        harrcir: "⥈",
                        harrw: "↭",
                        Hat: "^",
                        hbar: "ℏ",
                        hcirc: "ĥ",
                        Hcirc: "Ĥ",
                        hearts: "♥",
                        heartsuit: "♥",
                        hellip: "…",
                        hercon: "⊹",
                        hfr: "𝔥",
                        Hfr: "ℌ",
                        HilbertSpace: "ℋ",
                        hksearow: "⤥",
                        hkswarow: "⤦",
                        hoarr: "⇿",
                        homtht: "∻",
                        hookleftarrow: "↩",
                        hookrightarrow: "↪",
                        hopf: "𝕙",
                        Hopf: "ℍ",
                        horbar: "―",
                        HorizontalLine: "─",
                        hscr: "𝒽",
                        Hscr: "ℋ",
                        hslash: "ℏ",
                        hstrok: "ħ",
                        Hstrok: "Ħ",
                        HumpDownHump: "≎",
                        HumpEqual: "≏",
                        hybull: "⁃",
                        hyphen: "‐",
                        iacute: "í",
                        Iacute: "Í",
                        ic: "⁣",
                        icirc: "î",
                        Icirc: "Î",
                        icy: "и",
                        Icy: "И",
                        Idot: "İ",
                        iecy: "е",
                        IEcy: "Е",
                        iexcl: "¡",
                        iff: "⇔",
                        ifr: "𝔦",
                        Ifr: "ℑ",
                        igrave: "ì",
                        Igrave: "Ì",
                        ii: "ⅈ",
                        iiiint: "⨌",
                        iiint: "∭",
                        iinfin: "⧜",
                        iiota: "℩",
                        ijlig: "ĳ",
                        IJlig: "Ĳ",
                        Im: "ℑ",
                        imacr: "ī",
                        Imacr: "Ī",
                        image: "ℑ",
                        ImaginaryI: "ⅈ",
                        imagline: "ℐ",
                        imagpart: "ℑ",
                        imath: "ı",
                        imof: "⊷",
                        imped: "Ƶ",
                        Implies: "⇒",
                        in: "∈",
                        incare: "℅",
                        infin: "∞",
                        infintie: "⧝",
                        inodot: "ı",
                        int: "∫",
                        Int: "∬",
                        intcal: "⊺",
                        integers: "ℤ",
                        Integral: "∫",
                        intercal: "⊺",
                        Intersection: "⋂",
                        intlarhk: "⨗",
                        intprod: "⨼",
                        InvisibleComma: "⁣",
                        InvisibleTimes: "⁢",
                        iocy: "ё",
                        IOcy: "Ё",
                        iogon: "į",
                        Iogon: "Į",
                        iopf: "𝕚",
                        Iopf: "𝕀",
                        iota: "ι",
                        Iota: "Ι",
                        iprod: "⨼",
                        iquest: "¿",
                        iscr: "𝒾",
                        Iscr: "ℐ",
                        isin: "∈",
                        isindot: "⋵",
                        isinE: "⋹",
                        isins: "⋴",
                        isinsv: "⋳",
                        isinv: "∈",
                        it: "⁢",
                        itilde: "ĩ",
                        Itilde: "Ĩ",
                        iukcy: "і",
                        Iukcy: "І",
                        iuml: "ï",
                        Iuml: "Ï",
                        jcirc: "ĵ",
                        Jcirc: "Ĵ",
                        jcy: "й",
                        Jcy: "Й",
                        jfr: "𝔧",
                        Jfr: "𝔍",
                        jmath: "ȷ",
                        jopf: "𝕛",
                        Jopf: "𝕁",
                        jscr: "𝒿",
                        Jscr: "𝒥",
                        jsercy: "ј",
                        Jsercy: "Ј",
                        jukcy: "є",
                        Jukcy: "Є",
                        kappa: "κ",
                        Kappa: "Κ",
                        kappav: "ϰ",
                        kcedil: "ķ",
                        Kcedil: "Ķ",
                        kcy: "к",
                        Kcy: "К",
                        kfr: "𝔨",
                        Kfr: "𝔎",
                        kgreen: "ĸ",
                        khcy: "х",
                        KHcy: "Х",
                        kjcy: "ќ",
                        KJcy: "Ќ",
                        kopf: "𝕜",
                        Kopf: "𝕂",
                        kscr: "𝓀",
                        Kscr: "𝒦",
                        lAarr: "⇚",
                        lacute: "ĺ",
                        Lacute: "Ĺ",
                        laemptyv: "⦴",
                        lagran: "ℒ",
                        lambda: "λ",
                        Lambda: "Λ",
                        lang: "⟨",
                        Lang: "⟪",
                        langd: "⦑",
                        langle: "⟨",
                        lap: "⪅",
                        Laplacetrf: "ℒ",
                        laquo: "«",
                        larr: "←",
                        lArr: "⇐",
                        Larr: "↞",
                        larrb: "⇤",
                        larrbfs: "⤟",
                        larrfs: "⤝",
                        larrhk: "↩",
                        larrlp: "↫",
                        larrpl: "⤹",
                        larrsim: "⥳",
                        larrtl: "↢",
                        lat: "⪫",
                        latail: "⤙",
                        lAtail: "⤛",
                        late: "⪭",
                        lates: "⪭︀",
                        lbarr: "⤌",
                        lBarr: "⤎",
                        lbbrk: "❲",
                        lbrace: "{",
                        lbrack: "[",
                        lbrke: "⦋",
                        lbrksld: "⦏",
                        lbrkslu: "⦍",
                        lcaron: "ľ",
                        Lcaron: "Ľ",
                        lcedil: "ļ",
                        Lcedil: "Ļ",
                        lceil: "⌈",
                        lcub: "{",
                        lcy: "л",
                        Lcy: "Л",
                        ldca: "⤶",
                        ldquo: "“",
                        ldquor: "„",
                        ldrdhar: "⥧",
                        ldrushar: "⥋",
                        ldsh: "↲",
                        le: "≤",
                        lE: "≦",
                        LeftAngleBracket: "⟨",
                        leftarrow: "←",
                        Leftarrow: "⇐",
                        LeftArrow: "←",
                        LeftArrowBar: "⇤",
                        LeftArrowRightArrow: "⇆",
                        leftarrowtail: "↢",
                        LeftCeiling: "⌈",
                        LeftDoubleBracket: "⟦",
                        LeftDownTeeVector: "⥡",
                        LeftDownVector: "⇃",
                        LeftDownVectorBar: "⥙",
                        LeftFloor: "⌊",
                        leftharpoondown: "↽",
                        leftharpoonup: "↼",
                        leftleftarrows: "⇇",
                        leftrightarrow: "↔",
                        Leftrightarrow: "⇔",
                        LeftRightArrow: "↔",
                        leftrightarrows: "⇆",
                        leftrightharpoons: "⇋",
                        leftrightsquigarrow: "↭",
                        LeftRightVector: "⥎",
                        LeftTee: "⊣",
                        LeftTeeArrow: "↤",
                        LeftTeeVector: "⥚",
                        leftthreetimes: "⋋",
                        LeftTriangle: "⊲",
                        LeftTriangleBar: "⧏",
                        LeftTriangleEqual: "⊴",
                        LeftUpDownVector: "⥑",
                        LeftUpTeeVector: "⥠",
                        LeftUpVector: "↿",
                        LeftUpVectorBar: "⥘",
                        LeftVector: "↼",
                        LeftVectorBar: "⥒",
                        leg: "⋚",
                        lEg: "⪋",
                        leq: "≤",
                        leqq: "≦",
                        leqslant: "⩽",
                        les: "⩽",
                        lescc: "⪨",
                        lesdot: "⩿",
                        lesdoto: "⪁",
                        lesdotor: "⪃",
                        lesg: "⋚︀",
                        lesges: "⪓",
                        lessapprox: "⪅",
                        lessdot: "⋖",
                        lesseqgtr: "⋚",
                        lesseqqgtr: "⪋",
                        LessEqualGreater: "⋚",
                        LessFullEqual: "≦",
                        LessGreater: "≶",
                        lessgtr: "≶",
                        LessLess: "⪡",
                        lesssim: "≲",
                        LessSlantEqual: "⩽",
                        LessTilde: "≲",
                        lfisht: "⥼",
                        lfloor: "⌊",
                        lfr: "𝔩",
                        Lfr: "𝔏",
                        lg: "≶",
                        lgE: "⪑",
                        lHar: "⥢",
                        lhard: "↽",
                        lharu: "↼",
                        lharul: "⥪",
                        lhblk: "▄",
                        ljcy: "љ",
                        LJcy: "Љ",
                        ll: "≪",
                        Ll: "⋘",
                        llarr: "⇇",
                        llcorner: "⌞",
                        Lleftarrow: "⇚",
                        llhard: "⥫",
                        lltri: "◺",
                        lmidot: "ŀ",
                        Lmidot: "Ŀ",
                        lmoust: "⎰",
                        lmoustache: "⎰",
                        lnap: "⪉",
                        lnapprox: "⪉",
                        lne: "⪇",
                        lnE: "≨",
                        lneq: "⪇",
                        lneqq: "≨",
                        lnsim: "⋦",
                        loang: "⟬",
                        loarr: "⇽",
                        lobrk: "⟦",
                        longleftarrow: "⟵",
                        Longleftarrow: "⟸",
                        LongLeftArrow: "⟵",
                        longleftrightarrow: "⟷",
                        Longleftrightarrow: "⟺",
                        LongLeftRightArrow: "⟷",
                        longmapsto: "⟼",
                        longrightarrow: "⟶",
                        Longrightarrow: "⟹",
                        LongRightArrow: "⟶",
                        looparrowleft: "↫",
                        looparrowright: "↬",
                        lopar: "⦅",
                        lopf: "𝕝",
                        Lopf: "𝕃",
                        loplus: "⨭",
                        lotimes: "⨴",
                        lowast: "∗",
                        lowbar: "_",
                        LowerLeftArrow: "↙",
                        LowerRightArrow: "↘",
                        loz: "◊",
                        lozenge: "◊",
                        lozf: "⧫",
                        lpar: "(",
                        lparlt: "⦓",
                        lrarr: "⇆",
                        lrcorner: "⌟",
                        lrhar: "⇋",
                        lrhard: "⥭",
                        lrm: "‎",
                        lrtri: "⊿",
                        lsaquo: "‹",
                        lscr: "𝓁",
                        Lscr: "ℒ",
                        lsh: "↰",
                        Lsh: "↰",
                        lsim: "≲",
                        lsime: "⪍",
                        lsimg: "⪏",
                        lsqb: "[",
                        lsquo: "‘",
                        lsquor: "‚",
                        lstrok: "ł",
                        Lstrok: "Ł",
                        lt: "<",
                        Lt: "≪",
                        LT: "<",
                        ltcc: "⪦",
                        ltcir: "⩹",
                        ltdot: "⋖",
                        lthree: "⋋",
                        ltimes: "⋉",
                        ltlarr: "⥶",
                        ltquest: "⩻",
                        ltri: "◃",
                        ltrie: "⊴",
                        ltrif: "◂",
                        ltrPar: "⦖",
                        lurdshar: "⥊",
                        luruhar: "⥦",
                        lvertneqq: "≨︀",
                        lvnE: "≨︀",
                        macr: "¯",
                        male: "♂",
                        malt: "✠",
                        maltese: "✠",
                        map: "↦",
                        Map: "⤅",
                        mapsto: "↦",
                        mapstodown: "↧",
                        mapstoleft: "↤",
                        mapstoup: "↥",
                        marker: "▮",
                        mcomma: "⨩",
                        mcy: "м",
                        Mcy: "М",
                        mdash: "—",
                        mDDot: "∺",
                        measuredangle: "∡",
                        MediumSpace: " ",
                        Mellintrf: "ℳ",
                        mfr: "𝔪",
                        Mfr: "𝔐",
                        mho: "℧",
                        micro: "µ",
                        mid: "∣",
                        midast: "*",
                        midcir: "⫰",
                        middot: "·",
                        minus: "−",
                        minusb: "⊟",
                        minusd: "∸",
                        minusdu: "⨪",
                        MinusPlus: "∓",
                        mlcp: "⫛",
                        mldr: "…",
                        mnplus: "∓",
                        models: "⊧",
                        mopf: "𝕞",
                        Mopf: "𝕄",
                        mp: "∓",
                        mscr: "𝓂",
                        Mscr: "ℳ",
                        mstpos: "∾",
                        mu: "μ",
                        Mu: "Μ",
                        multimap: "⊸",
                        mumap: "⊸",
                        nabla: "∇",
                        nacute: "ń",
                        Nacute: "Ń",
                        nang: "∠⃒",
                        nap: "≉",
                        napE: "⩰̸",
                        napid: "≋̸",
                        napos: "ŉ",
                        napprox: "≉",
                        natur: "♮",
                        natural: "♮",
                        naturals: "ℕ",
                        nbsp: " ",
                        nbump: "≎̸",
                        nbumpe: "≏̸",
                        ncap: "⩃",
                        ncaron: "ň",
                        Ncaron: "Ň",
                        ncedil: "ņ",
                        Ncedil: "Ņ",
                        ncong: "≇",
                        ncongdot: "⩭̸",
                        ncup: "⩂",
                        ncy: "н",
                        Ncy: "Н",
                        ndash: "–",
                        ne: "≠",
                        nearhk: "⤤",
                        nearr: "↗",
                        neArr: "⇗",
                        nearrow: "↗",
                        nedot: "≐̸",
                        NegativeMediumSpace: "​",
                        NegativeThickSpace: "​",
                        NegativeThinSpace: "​",
                        NegativeVeryThinSpace: "​",
                        nequiv: "≢",
                        nesear: "⤨",
                        nesim: "≂̸",
                        NestedGreaterGreater: "≫",
                        NestedLessLess: "≪",
                        NewLine: "\n",
                        nexist: "∄",
                        nexists: "∄",
                        nfr: "𝔫",
                        Nfr: "𝔑",
                        nge: "≱",
                        ngE: "≧̸",
                        ngeq: "≱",
                        ngeqq: "≧̸",
                        ngeqslant: "⩾̸",
                        nges: "⩾̸",
                        nGg: "⋙̸",
                        ngsim: "≵",
                        ngt: "≯",
                        nGt: "≫⃒",
                        ngtr: "≯",
                        nGtv: "≫̸",
                        nharr: "↮",
                        nhArr: "⇎",
                        nhpar: "⫲",
                        ni: "∋",
                        nis: "⋼",
                        nisd: "⋺",
                        niv: "∋",
                        njcy: "њ",
                        NJcy: "Њ",
                        nlarr: "↚",
                        nlArr: "⇍",
                        nldr: "‥",
                        nle: "≰",
                        nlE: "≦̸",
                        nleftarrow: "↚",
                        nLeftarrow: "⇍",
                        nleftrightarrow: "↮",
                        nLeftrightarrow: "⇎",
                        nleq: "≰",
                        nleqq: "≦̸",
                        nleqslant: "⩽̸",
                        nles: "⩽̸",
                        nless: "≮",
                        nLl: "⋘̸",
                        nlsim: "≴",
                        nlt: "≮",
                        nLt: "≪⃒",
                        nltri: "⋪",
                        nltrie: "⋬",
                        nLtv: "≪̸",
                        nmid: "∤",
                        NoBreak: "⁠",
                        NonBreakingSpace: " ",
                        nopf: "𝕟",
                        Nopf: "ℕ",
                        not: "¬",
                        Not: "⫬",
                        NotCongruent: "≢",
                        NotCupCap: "≭",
                        NotDoubleVerticalBar: "∦",
                        NotElement: "∉",
                        NotEqual: "≠",
                        NotEqualTilde: "≂̸",
                        NotExists: "∄",
                        NotGreater: "≯",
                        NotGreaterEqual: "≱",
                        NotGreaterFullEqual: "≧̸",
                        NotGreaterGreater: "≫̸",
                        NotGreaterLess: "≹",
                        NotGreaterSlantEqual: "⩾̸",
                        NotGreaterTilde: "≵",
                        NotHumpDownHump: "≎̸",
                        NotHumpEqual: "≏̸",
                        notin: "∉",
                        notindot: "⋵̸",
                        notinE: "⋹̸",
                        notinva: "∉",
                        notinvb: "⋷",
                        notinvc: "⋶",
                        NotLeftTriangle: "⋪",
                        NotLeftTriangleBar: "⧏̸",
                        NotLeftTriangleEqual: "⋬",
                        NotLess: "≮",
                        NotLessEqual: "≰",
                        NotLessGreater: "≸",
                        NotLessLess: "≪̸",
                        NotLessSlantEqual: "⩽̸",
                        NotLessTilde: "≴",
                        NotNestedGreaterGreater: "⪢̸",
                        NotNestedLessLess: "⪡̸",
                        notni: "∌",
                        notniva: "∌",
                        notnivb: "⋾",
                        notnivc: "⋽",
                        NotPrecedes: "⊀",
                        NotPrecedesEqual: "⪯̸",
                        NotPrecedesSlantEqual: "⋠",
                        NotReverseElement: "∌",
                        NotRightTriangle: "⋫",
                        NotRightTriangleBar: "⧐̸",
                        NotRightTriangleEqual: "⋭",
                        NotSquareSubset: "⊏̸",
                        NotSquareSubsetEqual: "⋢",
                        NotSquareSuperset: "⊐̸",
                        NotSquareSupersetEqual: "⋣",
                        NotSubset: "⊂⃒",
                        NotSubsetEqual: "⊈",
                        NotSucceeds: "⊁",
                        NotSucceedsEqual: "⪰̸",
                        NotSucceedsSlantEqual: "⋡",
                        NotSucceedsTilde: "≿̸",
                        NotSuperset: "⊃⃒",
                        NotSupersetEqual: "⊉",
                        NotTilde: "≁",
                        NotTildeEqual: "≄",
                        NotTildeFullEqual: "≇",
                        NotTildeTilde: "≉",
                        NotVerticalBar: "∤",
                        npar: "∦",
                        nparallel: "∦",
                        nparsl: "⫽⃥",
                        npart: "∂̸",
                        npolint: "⨔",
                        npr: "⊀",
                        nprcue: "⋠",
                        npre: "⪯̸",
                        nprec: "⊀",
                        npreceq: "⪯̸",
                        nrarr: "↛",
                        nrArr: "⇏",
                        nrarrc: "⤳̸",
                        nrarrw: "↝̸",
                        nrightarrow: "↛",
                        nRightarrow: "⇏",
                        nrtri: "⋫",
                        nrtrie: "⋭",
                        nsc: "⊁",
                        nsccue: "⋡",
                        nsce: "⪰̸",
                        nscr: "𝓃",
                        Nscr: "𝒩",
                        nshortmid: "∤",
                        nshortparallel: "∦",
                        nsim: "≁",
                        nsime: "≄",
                        nsimeq: "≄",
                        nsmid: "∤",
                        nspar: "∦",
                        nsqsube: "⋢",
                        nsqsupe: "⋣",
                        nsub: "⊄",
                        nsube: "⊈",
                        nsubE: "⫅̸",
                        nsubset: "⊂⃒",
                        nsubseteq: "⊈",
                        nsubseteqq: "⫅̸",
                        nsucc: "⊁",
                        nsucceq: "⪰̸",
                        nsup: "⊅",
                        nsupe: "⊉",
                        nsupE: "⫆̸",
                        nsupset: "⊃⃒",
                        nsupseteq: "⊉",
                        nsupseteqq: "⫆̸",
                        ntgl: "≹",
                        ntilde: "ñ",
                        Ntilde: "Ñ",
                        ntlg: "≸",
                        ntriangleleft: "⋪",
                        ntrianglelefteq: "⋬",
                        ntriangleright: "⋫",
                        ntrianglerighteq: "⋭",
                        nu: "ν",
                        Nu: "Ν",
                        num: "#",
                        numero: "№",
                        numsp: " ",
                        nvap: "≍⃒",
                        nvdash: "⊬",
                        nvDash: "⊭",
                        nVdash: "⊮",
                        nVDash: "⊯",
                        nvge: "≥⃒",
                        nvgt: ">⃒",
                        nvHarr: "⤄",
                        nvinfin: "⧞",
                        nvlArr: "⤂",
                        nvle: "≤⃒",
                        nvlt: "<⃒",
                        nvltrie: "⊴⃒",
                        nvrArr: "⤃",
                        nvrtrie: "⊵⃒",
                        nvsim: "∼⃒",
                        nwarhk: "⤣",
                        nwarr: "↖",
                        nwArr: "⇖",
                        nwarrow: "↖",
                        nwnear: "⤧",
                        oacute: "ó",
                        Oacute: "Ó",
                        oast: "⊛",
                        ocir: "⊚",
                        ocirc: "ô",
                        Ocirc: "Ô",
                        ocy: "о",
                        Ocy: "О",
                        odash: "⊝",
                        odblac: "ő",
                        Odblac: "Ő",
                        odiv: "⨸",
                        odot: "⊙",
                        odsold: "⦼",
                        oelig: "œ",
                        OElig: "Œ",
                        ofcir: "⦿",
                        ofr: "𝔬",
                        Ofr: "𝔒",
                        ogon: "˛",
                        ograve: "ò",
                        Ograve: "Ò",
                        ogt: "⧁",
                        ohbar: "⦵",
                        ohm: "Ω",
                        oint: "∮",
                        olarr: "↺",
                        olcir: "⦾",
                        olcross: "⦻",
                        oline: "‾",
                        olt: "⧀",
                        omacr: "ō",
                        Omacr: "Ō",
                        omega: "ω",
                        Omega: "Ω",
                        omicron: "ο",
                        Omicron: "Ο",
                        omid: "⦶",
                        ominus: "⊖",
                        oopf: "𝕠",
                        Oopf: "𝕆",
                        opar: "⦷",
                        OpenCurlyDoubleQuote: "“",
                        OpenCurlyQuote: "‘",
                        operp: "⦹",
                        oplus: "⊕",
                        or: "∨",
                        Or: "⩔",
                        orarr: "↻",
                        ord: "⩝",
                        order: "ℴ",
                        orderof: "ℴ",
                        ordf: "ª",
                        ordm: "º",
                        origof: "⊶",
                        oror: "⩖",
                        orslope: "⩗",
                        orv: "⩛",
                        oS: "Ⓢ",
                        oscr: "ℴ",
                        Oscr: "𝒪",
                        oslash: "ø",
                        Oslash: "Ø",
                        osol: "⊘",
                        otilde: "õ",
                        Otilde: "Õ",
                        otimes: "⊗",
                        Otimes: "⨷",
                        otimesas: "⨶",
                        ouml: "ö",
                        Ouml: "Ö",
                        ovbar: "⌽",
                        OverBar: "‾",
                        OverBrace: "⏞",
                        OverBracket: "⎴",
                        OverParenthesis: "⏜",
                        par: "∥",
                        para: "¶",
                        parallel: "∥",
                        parsim: "⫳",
                        parsl: "⫽",
                        part: "∂",
                        PartialD: "∂",
                        pcy: "п",
                        Pcy: "П",
                        percnt: "%",
                        period: ".",
                        permil: "‰",
                        perp: "⊥",
                        pertenk: "‱",
                        pfr: "𝔭",
                        Pfr: "𝔓",
                        phi: "φ",
                        Phi: "Φ",
                        phiv: "ϕ",
                        phmmat: "ℳ",
                        phone: "☎",
                        pi: "π",
                        Pi: "Π",
                        pitchfork: "⋔",
                        piv: "ϖ",
                        planck: "ℏ",
                        planckh: "ℎ",
                        plankv: "ℏ",
                        plus: "+",
                        plusacir: "⨣",
                        plusb: "⊞",
                        pluscir: "⨢",
                        plusdo: "∔",
                        plusdu: "⨥",
                        pluse: "⩲",
                        PlusMinus: "±",
                        plusmn: "±",
                        plussim: "⨦",
                        plustwo: "⨧",
                        pm: "±",
                        Poincareplane: "ℌ",
                        pointint: "⨕",
                        popf: "𝕡",
                        Popf: "ℙ",
                        pound: "£",
                        pr: "≺",
                        Pr: "⪻",
                        prap: "⪷",
                        prcue: "≼",
                        pre: "⪯",
                        prE: "⪳",
                        prec: "≺",
                        precapprox: "⪷",
                        preccurlyeq: "≼",
                        Precedes: "≺",
                        PrecedesEqual: "⪯",
                        PrecedesSlantEqual: "≼",
                        PrecedesTilde: "≾",
                        preceq: "⪯",
                        precnapprox: "⪹",
                        precneqq: "⪵",
                        precnsim: "⋨",
                        precsim: "≾",
                        prime: "′",
                        Prime: "″",
                        primes: "ℙ",
                        prnap: "⪹",
                        prnE: "⪵",
                        prnsim: "⋨",
                        prod: "∏",
                        Product: "∏",
                        profalar: "⌮",
                        profline: "⌒",
                        profsurf: "⌓",
                        prop: "∝",
                        Proportion: "∷",
                        Proportional: "∝",
                        propto: "∝",
                        prsim: "≾",
                        prurel: "⊰",
                        pscr: "𝓅",
                        Pscr: "𝒫",
                        psi: "ψ",
                        Psi: "Ψ",
                        puncsp: " ",
                        qfr: "𝔮",
                        Qfr: "𝔔",
                        qint: "⨌",
                        qopf: "𝕢",
                        Qopf: "ℚ",
                        qprime: "⁗",
                        qscr: "𝓆",
                        Qscr: "𝒬",
                        quaternions: "ℍ",
                        quatint: "⨖",
                        quest: "?",
                        questeq: "≟",
                        quot: '"',
                        QUOT: '"',
                        rAarr: "⇛",
                        race: "∽̱",
                        racute: "ŕ",
                        Racute: "Ŕ",
                        radic: "√",
                        raemptyv: "⦳",
                        rang: "⟩",
                        Rang: "⟫",
                        rangd: "⦒",
                        range: "⦥",
                        rangle: "⟩",
                        raquo: "»",
                        rarr: "→",
                        rArr: "⇒",
                        Rarr: "↠",
                        rarrap: "⥵",
                        rarrb: "⇥",
                        rarrbfs: "⤠",
                        rarrc: "⤳",
                        rarrfs: "⤞",
                        rarrhk: "↪",
                        rarrlp: "↬",
                        rarrpl: "⥅",
                        rarrsim: "⥴",
                        rarrtl: "↣",
                        Rarrtl: "⤖",
                        rarrw: "↝",
                        ratail: "⤚",
                        rAtail: "⤜",
                        ratio: "∶",
                        rationals: "ℚ",
                        rbarr: "⤍",
                        rBarr: "⤏",
                        RBarr: "⤐",
                        rbbrk: "❳",
                        rbrace: "}",
                        rbrack: "]",
                        rbrke: "⦌",
                        rbrksld: "⦎",
                        rbrkslu: "⦐",
                        rcaron: "ř",
                        Rcaron: "Ř",
                        rcedil: "ŗ",
                        Rcedil: "Ŗ",
                        rceil: "⌉",
                        rcub: "}",
                        rcy: "р",
                        Rcy: "Р",
                        rdca: "⤷",
                        rdldhar: "⥩",
                        rdquo: "”",
                        rdquor: "”",
                        rdsh: "↳",
                        Re: "ℜ",
                        real: "ℜ",
                        realine: "ℛ",
                        realpart: "ℜ",
                        reals: "ℝ",
                        rect: "▭",
                        reg: "®",
                        REG: "®",
                        ReverseElement: "∋",
                        ReverseEquilibrium: "⇋",
                        ReverseUpEquilibrium: "⥯",
                        rfisht: "⥽",
                        rfloor: "⌋",
                        rfr: "𝔯",
                        Rfr: "ℜ",
                        rHar: "⥤",
                        rhard: "⇁",
                        rharu: "⇀",
                        rharul: "⥬",
                        rho: "ρ",
                        Rho: "Ρ",
                        rhov: "ϱ",
                        RightAngleBracket: "⟩",
                        rightarrow: "→",
                        Rightarrow: "⇒",
                        RightArrow: "→",
                        RightArrowBar: "⇥",
                        RightArrowLeftArrow: "⇄",
                        rightarrowtail: "↣",
                        RightCeiling: "⌉",
                        RightDoubleBracket: "⟧",
                        RightDownTeeVector: "⥝",
                        RightDownVector: "⇂",
                        RightDownVectorBar: "⥕",
                        RightFloor: "⌋",
                        rightharpoondown: "⇁",
                        rightharpoonup: "⇀",
                        rightleftarrows: "⇄",
                        rightleftharpoons: "⇌",
                        rightrightarrows: "⇉",
                        rightsquigarrow: "↝",
                        RightTee: "⊢",
                        RightTeeArrow: "↦",
                        RightTeeVector: "⥛",
                        rightthreetimes: "⋌",
                        RightTriangle: "⊳",
                        RightTriangleBar: "⧐",
                        RightTriangleEqual: "⊵",
                        RightUpDownVector: "⥏",
                        RightUpTeeVector: "⥜",
                        RightUpVector: "↾",
                        RightUpVectorBar: "⥔",
                        RightVector: "⇀",
                        RightVectorBar: "⥓",
                        ring: "˚",
                        risingdotseq: "≓",
                        rlarr: "⇄",
                        rlhar: "⇌",
                        rlm: "‏",
                        rmoust: "⎱",
                        rmoustache: "⎱",
                        rnmid: "⫮",
                        roang: "⟭",
                        roarr: "⇾",
                        robrk: "⟧",
                        ropar: "⦆",
                        ropf: "𝕣",
                        Ropf: "ℝ",
                        roplus: "⨮",
                        rotimes: "⨵",
                        RoundImplies: "⥰",
                        rpar: ")",
                        rpargt: "⦔",
                        rppolint: "⨒",
                        rrarr: "⇉",
                        Rrightarrow: "⇛",
                        rsaquo: "›",
                        rscr: "𝓇",
                        Rscr: "ℛ",
                        rsh: "↱",
                        Rsh: "↱",
                        rsqb: "]",
                        rsquo: "’",
                        rsquor: "’",
                        rthree: "⋌",
                        rtimes: "⋊",
                        rtri: "▹",
                        rtrie: "⊵",
                        rtrif: "▸",
                        rtriltri: "⧎",
                        RuleDelayed: "⧴",
                        ruluhar: "⥨",
                        rx: "℞",
                        sacute: "ś",
                        Sacute: "Ś",
                        sbquo: "‚",
                        sc: "≻",
                        Sc: "⪼",
                        scap: "⪸",
                        scaron: "š",
                        Scaron: "Š",
                        sccue: "≽",
                        sce: "⪰",
                        scE: "⪴",
                        scedil: "ş",
                        Scedil: "Ş",
                        scirc: "ŝ",
                        Scirc: "Ŝ",
                        scnap: "⪺",
                        scnE: "⪶",
                        scnsim: "⋩",
                        scpolint: "⨓",
                        scsim: "≿",
                        scy: "с",
                        Scy: "С",
                        sdot: "⋅",
                        sdotb: "⊡",
                        sdote: "⩦",
                        searhk: "⤥",
                        searr: "↘",
                        seArr: "⇘",
                        searrow: "↘",
                        sect: "§",
                        semi: ";",
                        seswar: "⤩",
                        setminus: "∖",
                        setmn: "∖",
                        sext: "✶",
                        sfr: "𝔰",
                        Sfr: "𝔖",
                        sfrown: "⌢",
                        sharp: "♯",
                        shchcy: "щ",
                        SHCHcy: "Щ",
                        shcy: "ш",
                        SHcy: "Ш",
                        ShortDownArrow: "↓",
                        ShortLeftArrow: "←",
                        shortmid: "∣",
                        shortparallel: "∥",
                        ShortRightArrow: "→",
                        ShortUpArrow: "↑",
                        shy: "­",
                        sigma: "σ",
                        Sigma: "Σ",
                        sigmaf: "ς",
                        sigmav: "ς",
                        sim: "∼",
                        simdot: "⩪",
                        sime: "≃",
                        simeq: "≃",
                        simg: "⪞",
                        simgE: "⪠",
                        siml: "⪝",
                        simlE: "⪟",
                        simne: "≆",
                        simplus: "⨤",
                        simrarr: "⥲",
                        slarr: "←",
                        SmallCircle: "∘",
                        smallsetminus: "∖",
                        smashp: "⨳",
                        smeparsl: "⧤",
                        smid: "∣",
                        smile: "⌣",
                        smt: "⪪",
                        smte: "⪬",
                        smtes: "⪬︀",
                        softcy: "ь",
                        SOFTcy: "Ь",
                        sol: "/",
                        solb: "⧄",
                        solbar: "⌿",
                        sopf: "𝕤",
                        Sopf: "𝕊",
                        spades: "♠",
                        spadesuit: "♠",
                        spar: "∥",
                        sqcap: "⊓",
                        sqcaps: "⊓︀",
                        sqcup: "⊔",
                        sqcups: "⊔︀",
                        Sqrt: "√",
                        sqsub: "⊏",
                        sqsube: "⊑",
                        sqsubset: "⊏",
                        sqsubseteq: "⊑",
                        sqsup: "⊐",
                        sqsupe: "⊒",
                        sqsupset: "⊐",
                        sqsupseteq: "⊒",
                        squ: "□",
                        square: "□",
                        Square: "□",
                        SquareIntersection: "⊓",
                        SquareSubset: "⊏",
                        SquareSubsetEqual: "⊑",
                        SquareSuperset: "⊐",
                        SquareSupersetEqual: "⊒",
                        SquareUnion: "⊔",
                        squarf: "▪",
                        squf: "▪",
                        srarr: "→",
                        sscr: "𝓈",
                        Sscr: "𝒮",
                        ssetmn: "∖",
                        ssmile: "⌣",
                        sstarf: "⋆",
                        star: "☆",
                        Star: "⋆",
                        starf: "★",
                        straightepsilon: "ϵ",
                        straightphi: "ϕ",
                        strns: "¯",
                        sub: "⊂",
                        Sub: "⋐",
                        subdot: "⪽",
                        sube: "⊆",
                        subE: "⫅",
                        subedot: "⫃",
                        submult: "⫁",
                        subne: "⊊",
                        subnE: "⫋",
                        subplus: "⪿",
                        subrarr: "⥹",
                        subset: "⊂",
                        Subset: "⋐",
                        subseteq: "⊆",
                        subseteqq: "⫅",
                        SubsetEqual: "⊆",
                        subsetneq: "⊊",
                        subsetneqq: "⫋",
                        subsim: "⫇",
                        subsub: "⫕",
                        subsup: "⫓",
                        succ: "≻",
                        succapprox: "⪸",
                        succcurlyeq: "≽",
                        Succeeds: "≻",
                        SucceedsEqual: "⪰",
                        SucceedsSlantEqual: "≽",
                        SucceedsTilde: "≿",
                        succeq: "⪰",
                        succnapprox: "⪺",
                        succneqq: "⪶",
                        succnsim: "⋩",
                        succsim: "≿",
                        SuchThat: "∋",
                        sum: "∑",
                        Sum: "∑",
                        sung: "♪",
                        sup: "⊃",
                        Sup: "⋑",
                        sup1: "¹",
                        sup2: "²",
                        sup3: "³",
                        supdot: "⪾",
                        supdsub: "⫘",
                        supe: "⊇",
                        supE: "⫆",
                        supedot: "⫄",
                        Superset: "⊃",
                        SupersetEqual: "⊇",
                        suphsol: "⟉",
                        suphsub: "⫗",
                        suplarr: "⥻",
                        supmult: "⫂",
                        supne: "⊋",
                        supnE: "⫌",
                        supplus: "⫀",
                        supset: "⊃",
                        Supset: "⋑",
                        supseteq: "⊇",
                        supseteqq: "⫆",
                        supsetneq: "⊋",
                        supsetneqq: "⫌",
                        supsim: "⫈",
                        supsub: "⫔",
                        supsup: "⫖",
                        swarhk: "⤦",
                        swarr: "↙",
                        swArr: "⇙",
                        swarrow: "↙",
                        swnwar: "⤪",
                        szlig: "ß",
                        Tab: "\t",
                        target: "⌖",
                        tau: "τ",
                        Tau: "Τ",
                        tbrk: "⎴",
                        tcaron: "ť",
                        Tcaron: "Ť",
                        tcedil: "ţ",
                        Tcedil: "Ţ",
                        tcy: "т",
                        Tcy: "Т",
                        tdot: "⃛",
                        telrec: "⌕",
                        tfr: "𝔱",
                        Tfr: "𝔗",
                        there4: "∴",
                        therefore: "∴",
                        Therefore: "∴",
                        theta: "θ",
                        Theta: "Θ",
                        thetasym: "ϑ",
                        thetav: "ϑ",
                        thickapprox: "≈",
                        thicksim: "∼",
                        ThickSpace: "  ",
                        thinsp: " ",
                        ThinSpace: " ",
                        thkap: "≈",
                        thksim: "∼",
                        thorn: "þ",
                        THORN: "Þ",
                        tilde: "˜",
                        Tilde: "∼",
                        TildeEqual: "≃",
                        TildeFullEqual: "≅",
                        TildeTilde: "≈",
                        times: "×",
                        timesb: "⊠",
                        timesbar: "⨱",
                        timesd: "⨰",
                        tint: "∭",
                        toea: "⤨",
                        top: "⊤",
                        topbot: "⌶",
                        topcir: "⫱",
                        topf: "𝕥",
                        Topf: "𝕋",
                        topfork: "⫚",
                        tosa: "⤩",
                        tprime: "‴",
                        trade: "™",
                        TRADE: "™",
                        triangle: "▵",
                        triangledown: "▿",
                        triangleleft: "◃",
                        trianglelefteq: "⊴",
                        triangleq: "≜",
                        triangleright: "▹",
                        trianglerighteq: "⊵",
                        tridot: "◬",
                        trie: "≜",
                        triminus: "⨺",
                        TripleDot: "⃛",
                        triplus: "⨹",
                        trisb: "⧍",
                        tritime: "⨻",
                        trpezium: "⏢",
                        tscr: "𝓉",
                        Tscr: "𝒯",
                        tscy: "ц",
                        TScy: "Ц",
                        tshcy: "ћ",
                        TSHcy: "Ћ",
                        tstrok: "ŧ",
                        Tstrok: "Ŧ",
                        twixt: "≬",
                        twoheadleftarrow: "↞",
                        twoheadrightarrow: "↠",
                        uacute: "ú",
                        Uacute: "Ú",
                        uarr: "↑",
                        uArr: "⇑",
                        Uarr: "↟",
                        Uarrocir: "⥉",
                        ubrcy: "ў",
                        Ubrcy: "Ў",
                        ubreve: "ŭ",
                        Ubreve: "Ŭ",
                        ucirc: "û",
                        Ucirc: "Û",
                        ucy: "у",
                        Ucy: "У",
                        udarr: "⇅",
                        udblac: "ű",
                        Udblac: "Ű",
                        udhar: "⥮",
                        ufisht: "⥾",
                        ufr: "𝔲",
                        Ufr: "𝔘",
                        ugrave: "ù",
                        Ugrave: "Ù",
                        uHar: "⥣",
                        uharl: "↿",
                        uharr: "↾",
                        uhblk: "▀",
                        ulcorn: "⌜",
                        ulcorner: "⌜",
                        ulcrop: "⌏",
                        ultri: "◸",
                        umacr: "ū",
                        Umacr: "Ū",
                        uml: "¨",
                        UnderBar: "_",
                        UnderBrace: "⏟",
                        UnderBracket: "⎵",
                        UnderParenthesis: "⏝",
                        Union: "⋃",
                        UnionPlus: "⊎",
                        uogon: "ų",
                        Uogon: "Ų",
                        uopf: "𝕦",
                        Uopf: "𝕌",
                        uparrow: "↑",
                        Uparrow: "⇑",
                        UpArrow: "↑",
                        UpArrowBar: "⤒",
                        UpArrowDownArrow: "⇅",
                        updownarrow: "↕",
                        Updownarrow: "⇕",
                        UpDownArrow: "↕",
                        UpEquilibrium: "⥮",
                        upharpoonleft: "↿",
                        upharpoonright: "↾",
                        uplus: "⊎",
                        UpperLeftArrow: "↖",
                        UpperRightArrow: "↗",
                        upsi: "υ",
                        Upsi: "ϒ",
                        upsih: "ϒ",
                        upsilon: "υ",
                        Upsilon: "Υ",
                        UpTee: "⊥",
                        UpTeeArrow: "↥",
                        upuparrows: "⇈",
                        urcorn: "⌝",
                        urcorner: "⌝",
                        urcrop: "⌎",
                        uring: "ů",
                        Uring: "Ů",
                        urtri: "◹",
                        uscr: "𝓊",
                        Uscr: "𝒰",
                        utdot: "⋰",
                        utilde: "ũ",
                        Utilde: "Ũ",
                        utri: "▵",
                        utrif: "▴",
                        uuarr: "⇈",
                        uuml: "ü",
                        Uuml: "Ü",
                        uwangle: "⦧",
                        vangrt: "⦜",
                        varepsilon: "ϵ",
                        varkappa: "ϰ",
                        varnothing: "∅",
                        varphi: "ϕ",
                        varpi: "ϖ",
                        varpropto: "∝",
                        varr: "↕",
                        vArr: "⇕",
                        varrho: "ϱ",
                        varsigma: "ς",
                        varsubsetneq: "⊊︀",
                        varsubsetneqq: "⫋︀",
                        varsupsetneq: "⊋︀",
                        varsupsetneqq: "⫌︀",
                        vartheta: "ϑ",
                        vartriangleleft: "⊲",
                        vartriangleright: "⊳",
                        vBar: "⫨",
                        Vbar: "⫫",
                        vBarv: "⫩",
                        vcy: "в",
                        Vcy: "В",
                        vdash: "⊢",
                        vDash: "⊨",
                        Vdash: "⊩",
                        VDash: "⊫",
                        Vdashl: "⫦",
                        vee: "∨",
                        Vee: "⋁",
                        veebar: "⊻",
                        veeeq: "≚",
                        vellip: "⋮",
                        verbar: "|",
                        Verbar: "‖",
                        vert: "|",
                        Vert: "‖",
                        VerticalBar: "∣",
                        VerticalLine: "|",
                        VerticalSeparator: "❘",
                        VerticalTilde: "≀",
                        VeryThinSpace: " ",
                        vfr: "𝔳",
                        Vfr: "𝔙",
                        vltri: "⊲",
                        vnsub: "⊂⃒",
                        vnsup: "⊃⃒",
                        vopf: "𝕧",
                        Vopf: "𝕍",
                        vprop: "∝",
                        vrtri: "⊳",
                        vscr: "𝓋",
                        Vscr: "𝒱",
                        vsubne: "⊊︀",
                        vsubnE: "⫋︀",
                        vsupne: "⊋︀",
                        vsupnE: "⫌︀",
                        Vvdash: "⊪",
                        vzigzag: "⦚",
                        wcirc: "ŵ",
                        Wcirc: "Ŵ",
                        wedbar: "⩟",
                        wedge: "∧",
                        Wedge: "⋀",
                        wedgeq: "≙",
                        weierp: "℘",
                        wfr: "𝔴",
                        Wfr: "𝔚",
                        wopf: "𝕨",
                        Wopf: "𝕎",
                        wp: "℘",
                        wr: "≀",
                        wreath: "≀",
                        wscr: "𝓌",
                        Wscr: "𝒲",
                        xcap: "⋂",
                        xcirc: "◯",
                        xcup: "⋃",
                        xdtri: "▽",
                        xfr: "𝔵",
                        Xfr: "𝔛",
                        xharr: "⟷",
                        xhArr: "⟺",
                        xi: "ξ",
                        Xi: "Ξ",
                        xlarr: "⟵",
                        xlArr: "⟸",
                        xmap: "⟼",
                        xnis: "⋻",
                        xodot: "⨀",
                        xopf: "𝕩",
                        Xopf: "𝕏",
                        xoplus: "⨁",
                        xotime: "⨂",
                        xrarr: "⟶",
                        xrArr: "⟹",
                        xscr: "𝓍",
                        Xscr: "𝒳",
                        xsqcup: "⨆",
                        xuplus: "⨄",
                        xutri: "△",
                        xvee: "⋁",
                        xwedge: "⋀",
                        yacute: "ý",
                        Yacute: "Ý",
                        yacy: "я",
                        YAcy: "Я",
                        ycirc: "ŷ",
                        Ycirc: "Ŷ",
                        ycy: "ы",
                        Ycy: "Ы",
                        yen: "¥",
                        yfr: "𝔶",
                        Yfr: "𝔜",
                        yicy: "ї",
                        YIcy: "Ї",
                        yopf: "𝕪",
                        Yopf: "𝕐",
                        yscr: "𝓎",
                        Yscr: "𝒴",
                        yucy: "ю",
                        YUcy: "Ю",
                        yuml: "ÿ",
                        Yuml: "Ÿ",
                        zacute: "ź",
                        Zacute: "Ź",
                        zcaron: "ž",
                        Zcaron: "Ž",
                        zcy: "з",
                        Zcy: "З",
                        zdot: "ż",
                        Zdot: "Ż",
                        zeetrf: "ℨ",
                        ZeroWidthSpace: "​",
                        zeta: "ζ",
                        Zeta: "Ζ",
                        zfr: "𝔷",
                        Zfr: "ℨ",
                        zhcy: "ж",
                        ZHcy: "Ж",
                        zigrarr: "⇝",
                        zopf: "𝕫",
                        Zopf: "ℤ",
                        zscr: "𝓏",
                        Zscr: "𝒵",
                        zwj: "‍",
                        zwnj: "‌"
                    }
                      , f = {
                        aacute: "á",
                        Aacute: "Á",
                        acirc: "â",
                        Acirc: "Â",
                        acute: "´",
                        aelig: "æ",
                        AElig: "Æ",
                        agrave: "à",
                        Agrave: "À",
                        amp: "&",
                        AMP: "&",
                        aring: "å",
                        Aring: "Å",
                        atilde: "ã",
                        Atilde: "Ã",
                        auml: "ä",
                        Auml: "Ä",
                        brvbar: "¦",
                        ccedil: "ç",
                        Ccedil: "Ç",
                        cedil: "¸",
                        cent: "¢",
                        copy: "©",
                        COPY: "©",
                        curren: "¤",
                        deg: "°",
                        divide: "÷",
                        eacute: "é",
                        Eacute: "É",
                        ecirc: "ê",
                        Ecirc: "Ê",
                        egrave: "è",
                        Egrave: "È",
                        eth: "ð",
                        ETH: "Ð",
                        euml: "ë",
                        Euml: "Ë",
                        frac12: "½",
                        frac14: "¼",
                        frac34: "¾",
                        gt: ">",
                        GT: ">",
                        iacute: "í",
                        Iacute: "Í",
                        icirc: "î",
                        Icirc: "Î",
                        iexcl: "¡",
                        igrave: "ì",
                        Igrave: "Ì",
                        iquest: "¿",
                        iuml: "ï",
                        Iuml: "Ï",
                        laquo: "«",
                        lt: "<",
                        LT: "<",
                        macr: "¯",
                        micro: "µ",
                        middot: "·",
                        nbsp: " ",
                        not: "¬",
                        ntilde: "ñ",
                        Ntilde: "Ñ",
                        oacute: "ó",
                        Oacute: "Ó",
                        ocirc: "ô",
                        Ocirc: "Ô",
                        ograve: "ò",
                        Ograve: "Ò",
                        ordf: "ª",
                        ordm: "º",
                        oslash: "ø",
                        Oslash: "Ø",
                        otilde: "õ",
                        Otilde: "Õ",
                        ouml: "ö",
                        Ouml: "Ö",
                        para: "¶",
                        plusmn: "±",
                        pound: "£",
                        quot: '"',
                        QUOT: '"',
                        raquo: "»",
                        reg: "®",
                        REG: "®",
                        sect: "§",
                        shy: "­",
                        sup1: "¹",
                        sup2: "²",
                        sup3: "³",
                        szlig: "ß",
                        thorn: "þ",
                        THORN: "Þ",
                        times: "×",
                        uacute: "ú",
                        Uacute: "Ú",
                        ucirc: "û",
                        Ucirc: "Û",
                        ugrave: "ù",
                        Ugrave: "Ù",
                        uml: "¨",
                        uuml: "ü",
                        Uuml: "Ü",
                        yacute: "ý",
                        Yacute: "Ý",
                        yen: "¥",
                        yuml: "ÿ"
                    }
                      , b = {
                        0: "�",
                        128: "€",
                        130: "‚",
                        131: "ƒ",
                        132: "„",
                        133: "…",
                        134: "†",
                        135: "‡",
                        136: "ˆ",
                        137: "‰",
                        138: "Š",
                        139: "‹",
                        140: "Œ",
                        142: "Ž",
                        145: "‘",
                        146: "’",
                        147: "“",
                        148: "”",
                        149: "•",
                        150: "–",
                        151: "—",
                        152: "˜",
                        153: "™",
                        154: "š",
                        155: "›",
                        156: "œ",
                        158: "ž",
                        159: "Ÿ"
                    }
                      , h = [1, 2, 3, 4, 5, 6, 7, 8, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 64976, 64977, 64978, 64979, 64980, 64981, 64982, 64983, 64984, 64985, 64986, 64987, 64988, 64989, 64990, 64991, 64992, 64993, 64994, 64995, 64996, 64997, 64998, 64999, 65e3, 65001, 65002, 65003, 65004, 65005, 65006, 65007, 65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678, 327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822, 589823, 655358, 655359, 720894, 720895, 786430, 786431, 851966, 851967, 917502, 917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111]
                      , q = String.fromCharCode
                      , v = {}.hasOwnProperty
                      , w = function(r, e) {
                        return v.call(r, e)
                    }
                      , D = function(r, e) {
                        if (!r)
                            return e;
                        var a, t = {};
                        for (a in e)
                            t[a] = w(r, a) ? r[a] : e[a];
                        return t
                    }
                      , y = function(r, e) {
                        var a = "";
                        return r >= 55296 && r <= 57343 || r > 1114111 ? (e && x("character reference outside the permissible Unicode range"),
                        "�") : w(b, r) ? (e && x("disallowed character reference"),
                        b[r]) : (e && function(r, e) {
                            for (var a = -1, t = r.length; ++a < t; )
                                if (r[a] == e)
                                    return !0;
                            return !1
                        }(h, r) && x("disallowed character reference"),
                        r > 65535 && (a += q((r -= 65536) >>> 10 & 1023 | 55296),
                        r = 56320 | 1023 & r),
                        a += q(r))
                    }
                      , A = function(r) {
                        return "&#x" + r.toString(16).toUpperCase() + ";"
                    }
                      , E = function(r) {
                        return "&#" + r + ";"
                    }
                      , x = function(r) {
                        throw Error("Parse error: " + r)
                    }
                      , k = function(r, e) {
                        (e = D(e, k.options)).strict && d.test(r) && x("forbidden code point");
                        var a = e.encodeEverything
                          , t = e.useNamedReferences
                          , n = e.allowUnsafeSymbols
                          , p = e.decimal ? E : A
                          , g = function(r) {
                            return p(r.charCodeAt(0))
                        };
                        return a ? (r = r.replace(s, function(r) {
                            return t && w(l, r) ? "&" + l[r] + ";" : g(r)
                        }),
                        t && (r = r.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;").replace(/&#x66;&#x6A;/g, "&fjlig;")),
                        t && (r = r.replace(c, function(r) {
                            return "&" + l[r] + ";"
                        }))) : t ? (n || (r = r.replace(i, function(r) {
                            return "&" + l[r] + ";"
                        })),
                        r = (r = r.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;")).replace(c, function(r) {
                            return "&" + l[r] + ";"
                        })) : n || (r = r.replace(i, g)),
                        r.replace(o, function(r) {
                            var e = r.charCodeAt(0)
                              , a = r.charCodeAt(1);
                            return p(1024 * (e - 55296) + a - 56320 + 65536)
                        }).replace(u, g)
                    };
                    k.options = {
                        allowUnsafeSymbols: !1,
                        encodeEverything: !1,
                        strict: !1,
                        useNamedReferences: !1,
                        decimal: !1
                    };
                    var L = function(r, e) {
                        var a = (e = D(e, L.options)).strict;
                        return a && p.test(r) && x("malformed character reference"),
                        r.replace(g, function(r, t, o, s, u, c, l, i, n) {
                            var p, d, g, b, h, q;
                            return t ? m[h = t] : o ? (h = o,
                            (q = s) && e.isAttributeValue ? (a && "=" == q && x("`&` did not start a character reference"),
                            r) : (a && x("named character reference was not terminated by a semicolon"),
                            f[h] + (q || ""))) : u ? (g = u,
                            d = c,
                            a && !d && x("character reference was not terminated by a semicolon"),
                            p = parseInt(g, 10),
                            y(p, a)) : l ? (b = l,
                            d = i,
                            a && !d && x("character reference was not terminated by a semicolon"),
                            p = parseInt(b, 16),
                            y(p, a)) : (a && x("named character reference was not terminated by a semicolon"),
                            r)
                        })
                    };
                    L.options = {
                        isAttributeValue: !1,
                        strict: !1
                    };
                    var S = {
                        version: "1.2.0",
                        encode: k,
                        decode: L,
                        escape: function(r) {
                            return r.replace(i, function(r) {
                                return n[r]
                            })
                        },
                        unescape: L
                    };
                    if ("function" == typeof define && "object" == typeof define.amd && define.amd)
                        define(function() {
                            return S
                        });
                    else if (e && !e.nodeType)
                        if (a)
                            a.exports = S;
                        else
                            for (var C in S)
                                w(S, C) && (e[C] = S[C]);
                    else
                        r.he = S
                }(this);

            }
            ).call(this)
        }
        ).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    }
    , {}],
    58: [function(require, module, exports) {
        module.exports = attributeToProperty;
        var transform = {
            class: "className",
            for: "htmlFor",
            "http-equiv": "httpEquiv"
        };
        function attributeToProperty(r) {
            return function(t, o, e) {
                for (var n in o)
                    n in transform && (o[transform[n]] = o[n],
                    delete o[n]);
                return r(t, o, e)
            }
        }

    }
    , {}],
    59: [function(require, module, exports) {
        var attrToProp = require("hyperscript-attribute-to-property")
          , VAR = 0
          , TEXT = 1
          , OPEN = 2
          , CLOSE = 3
          , ATTR = 4
          , ATTR_KEY = 5
          , ATTR_KEY_W = 6
          , ATTR_VALUE_W = 7
          , ATTR_VALUE = 8
          , ATTR_VALUE_SQ = 9
          , ATTR_VALUE_DQ = 10
          , ATTR_EQ = 11
          , ATTR_BREAK = 12
          , COMMENT = 13;
        function quot(T) {
            return T === ATTR_VALUE_SQ || T === ATTR_VALUE_DQ
        }
        module.exports = function(T, e) {
            e || (e = {});
            var A = e.concat || function(T, e) {
                return String(T) + String(e)
            }
            ;
            return !1 !== e.attrToProp && (T = attrToProp(T)),
            function(E) {
                for (var n = TEXT, r = "", R = arguments.length, s = [], _ = 0; _ < E.length; _++)
                    if (_ < R - 1) {
                        var o = arguments[_ + 1]
                          , l = U(E[_])
                          , h = n;
                        h === ATTR_VALUE_DQ && (h = ATTR_VALUE),
                        h === ATTR_VALUE_SQ && (h = ATTR_VALUE),
                        h === ATTR_VALUE_W && (h = ATTR_VALUE),
                        h === ATTR && (h = ATTR_KEY),
                        h === OPEN ? "/" === r ? (l.push([OPEN, "/", o]),
                        r = "") : l.push([OPEN, o]) : h === COMMENT && e.comments ? r += String(o) : h !== COMMENT && l.push([VAR, h, o]),
                        s.push.apply(s, l)
                    } else
                        s.push.apply(s, U(E[_]));
                var i = [null, {}, []]
                  , f = [[i, -1]];
                for (_ = 0; _ < s.length; _++) {
                    var p = f[f.length - 1][0]
                      , u = (l = s[_])[0];
                    if (u === OPEN && /^\//.test(l[1])) {
                        var a = f[f.length - 1][1];
                        f.length > 1 && (f.pop(),
                        f[f.length - 1][0][2][a] = T(p[0], p[1], p[2].length ? p[2] : void 0))
                    } else if (u === OPEN) {
                        var g = [l[1], {}, []];
                        p[2].push(g),
                        f.push([g, p[2].length - 1])
                    } else if (u === ATTR_KEY || u === VAR && l[1] === ATTR_KEY) {
                        for (var L, V = ""; _ < s.length; _++)
                            if (s[_][0] === ATTR_KEY)
                                V = A(V, s[_][1]);
                            else {
                                if (s[_][0] !== VAR || s[_][1] !== ATTR_KEY)
                                    break;
                                if ("object" != typeof s[_][2] || V)
                                    V = A(V, s[_][2]);
                                else
                                    for (L in s[_][2])
                                        s[_][2].hasOwnProperty(L) && !p[1][L] && (p[1][L] = s[_][2][L])
                            }
                        s[_][0] === ATTR_EQ && _++;
                        for (var c = _; _ < s.length; _++)
                            if (s[_][0] === ATTR_VALUE || s[_][0] === ATTR_KEY)
                                p[1][V] ? "" === s[_][1] || (p[1][V] = A(p[1][V], s[_][1])) : p[1][V] = t(s[_][1]);
                            else {
                                if (s[_][0] !== VAR || s[_][1] !== ATTR_VALUE && s[_][1] !== ATTR_KEY) {
                                    !V.length || p[1][V] || _ !== c || s[_][0] !== CLOSE && s[_][0] !== ATTR_BREAK || (p[1][V] = V.toLowerCase()),
                                    s[_][0] === CLOSE && _--;
                                    break
                                }
                                p[1][V] ? "" === s[_][2] || (p[1][V] = A(p[1][V], s[_][2])) : p[1][V] = t(s[_][2])
                            }
                    } else if (u === ATTR_KEY)
                        p[1][l[1]] = !0;
                    else if (u === VAR && l[1] === ATTR_KEY)
                        p[1][l[2]] = !0;
                    else if (u === CLOSE) {
                        if (selfClosing(p[0]) && f.length) {
                            a = f[f.length - 1][1];
                            f.pop(),
                            f[f.length - 1][0][2][a] = T(p[0], p[1], p[2].length ? p[2] : void 0)
                        }
                    } else if (u === VAR && l[1] === TEXT)
                        void 0 === l[2] || null === l[2] ? l[2] = "" : l[2] || (l[2] = A("", l[2])),
                        Array.isArray(l[2][0]) ? p[2].push.apply(p[2], l[2]) : p[2].push(l[2]);
                    else if (u === TEXT)
                        p[2].push(l[1]);
                    else if (u !== ATTR_EQ && u !== ATTR_BREAK)
                        throw new Error("unhandled: " + u)
                }
                if (i[2].length > 1 && /^\s*$/.test(i[2][0]) && i[2].shift(),
                i[2].length > 2 || 2 === i[2].length && /\S/.test(i[2][1])) {
                    if (e.createFragment)
                        return e.createFragment(i[2]);
                    throw new Error("multiple root elements must be wrapped in an enclosing tag")
                }
                return Array.isArray(i[2][0]) && "string" == typeof i[2][0][0] && Array.isArray(i[2][0][2]) && (i[2][0] = T(i[2][0][0], i[2][0][1], i[2][0][2])),
                i[2][0];
                function U(T) {
                    var A = [];
                    n === ATTR_VALUE_W && (n = ATTR);
                    for (var t = 0; t < T.length; t++) {
                        var E = T.charAt(t);
                        n === TEXT && "<" === E ? (r.length && A.push([TEXT, r]),
                        r = "",
                        n = OPEN) : ">" !== E || quot(n) || n === COMMENT ? n === COMMENT && /-$/.test(r) && "-" === E ? (e.comments && A.push([ATTR_VALUE, r.substr(0, r.length - 1)]),
                        r = "",
                        n = TEXT) : n === OPEN && /^!--$/.test(r) ? (e.comments && A.push([OPEN, r], [ATTR_KEY, "comment"], [ATTR_EQ]),
                        r = E,
                        n = COMMENT) : n === TEXT || n === COMMENT ? r += E : n === OPEN && "/" === E && r.length || (n === OPEN && /\s/.test(E) ? (r.length && A.push([OPEN, r]),
                        r = "",
                        n = ATTR) : n === OPEN ? r += E : n === ATTR && /[^\s"'=/]/.test(E) ? (n = ATTR_KEY,
                        r = E) : n === ATTR && /\s/.test(E) ? (r.length && A.push([ATTR_KEY, r]),
                        A.push([ATTR_BREAK])) : n === ATTR_KEY && /\s/.test(E) ? (A.push([ATTR_KEY, r]),
                        r = "",
                        n = ATTR_KEY_W) : n === ATTR_KEY && "=" === E ? (A.push([ATTR_KEY, r], [ATTR_EQ]),
                        r = "",
                        n = ATTR_VALUE_W) : n === ATTR_KEY ? r += E : n !== ATTR_KEY_W && n !== ATTR || "=" !== E ? n !== ATTR_KEY_W && n !== ATTR || /\s/.test(E) ? n === ATTR_VALUE_W && '"' === E ? n = ATTR_VALUE_DQ : n === ATTR_VALUE_W && "'" === E ? n = ATTR_VALUE_SQ : n === ATTR_VALUE_DQ && '"' === E ? (A.push([ATTR_VALUE, r], [ATTR_BREAK]),
                        r = "",
                        n = ATTR) : n === ATTR_VALUE_SQ && "'" === E ? (A.push([ATTR_VALUE, r], [ATTR_BREAK]),
                        r = "",
                        n = ATTR) : n !== ATTR_VALUE_W || /\s/.test(E) ? n === ATTR_VALUE && /\s/.test(E) ? (A.push([ATTR_VALUE, r], [ATTR_BREAK]),
                        r = "",
                        n = ATTR) : n !== ATTR_VALUE && n !== ATTR_VALUE_SQ && n !== ATTR_VALUE_DQ || (r += E) : (n = ATTR_VALUE,
                        t--) : (A.push([ATTR_BREAK]),
                        /[\w-]/.test(E) ? (r += E,
                        n = ATTR_KEY) : n = ATTR) : (A.push([ATTR_EQ]),
                        n = ATTR_VALUE_W)) : (n === OPEN && r.length ? A.push([OPEN, r]) : n === ATTR_KEY ? A.push([ATTR_KEY, r]) : n === ATTR_VALUE && r.length && A.push([ATTR_VALUE, r]),
                        A.push([CLOSE]),
                        r = "",
                        n = TEXT)
                    }
                    return n === TEXT && r.length ? (A.push([TEXT, r]),
                    r = "") : n === ATTR_VALUE && r.length ? (A.push([ATTR_VALUE, r]),
                    r = "") : n === ATTR_VALUE_DQ && r.length ? (A.push([ATTR_VALUE, r]),
                    r = "") : n === ATTR_VALUE_SQ && r.length ? (A.push([ATTR_VALUE, r]),
                    r = "") : n === ATTR_KEY && (A.push([ATTR_KEY, r]),
                    r = ""),
                    A
                }
            }
            ;
            function t(T) {
                return "function" == typeof T ? T : "string" == typeof T ? T : T && "object" == typeof T ? T : null == T ? T : A("", T)
            }
        }
        ;
        var closeRE = RegExp("^(" + ["area", "base", "basefont", "bgsound", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr", "!--", "animate", "animateTransform", "circle", "cursor", "desc", "ellipse", "feBlend", "feColorMatrix", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "font-face-format", "font-face-name", "font-face-uri", "glyph", "glyphRef", "hkern", "image", "line", "missing-glyph", "mpath", "path", "polygon", "polyline", "rect", "set", "stop", "tref", "use", "view", "vkern"].join("|") + ")(?:[.#][a-zA-Z0-9-￿_:-]+)*$");
        function selfClosing(T) {
            return closeRE.test(T)
        }

    }
    , {
        "hyperscript-attribute-to-property": 58
    }],
    60: [function(require, module, exports) {
        "use strict";
        var badArrayLike, isCallableMarker, fnToStr = Function.prototype.toString, reflectApply = "object" == typeof Reflect && null !== Reflect && Reflect.apply;
        if ("function" == typeof reflectApply && "function" == typeof Object.defineProperty)
            try {
                badArrayLike = Object.defineProperty({}, "length", {
                    get: function() {
                        throw isCallableMarker
                    }
                }),
                isCallableMarker = {},
                reflectApply(function() {
                    throw 42
                }, null, badArrayLike)
            } catch (t) {
                t !== isCallableMarker && (reflectApply = null)
            }
        else
            reflectApply = null;
        var constructorRegex = /^\s*class\b/
          , isES6ClassFn = function(t) {
            try {
                var e = fnToStr.call(t);
                return constructorRegex.test(e)
            } catch (t) {
                return !1
            }
        }
          , tryFunctionObject = function(t) {
            try {
                return !isES6ClassFn(t) && (fnToStr.call(t),
                !0)
            } catch (t) {
                return !1
            }
        }
          , toStr = Object.prototype.toString
          , objectClass = "[object Object]"
          , fnClass = "[object Function]"
          , genClass = "[object GeneratorFunction]"
          , ddaClass = "[object HTMLAllCollection]"
          , ddaClass2 = "[object HTML document.all class]"
          , ddaClass3 = "[object HTMLCollection]"
          , hasToStringTag = "function" == typeof Symbol && !!Symbol.toStringTag
          , isIE68 = !(0 in [, ])
          , isDDA = function() {
            return !1
        };
        if ("object" == typeof document) {
            var all = document.all;
            toStr.call(all) === toStr.call(document.all) && (isDDA = function(t) {
                if ((isIE68 || !t) && (void 0 === t || "object" == typeof t))
                    try {
                        var e = toStr.call(t);
                        return (e === ddaClass || e === ddaClass2 || e === ddaClass3 || e === objectClass) && null == t("")
                    } catch (t) {}
                return !1
            }
            )
        }
        module.exports = reflectApply ? function(t) {
            if (isDDA(t))
                return !0;
            if (!t)
                return !1;
            if ("function" != typeof t && "object" != typeof t)
                return !1;
            try {
                reflectApply(t, null, badArrayLike)
            } catch (t) {
                if (t !== isCallableMarker)
                    return !1
            }
            return !isES6ClassFn(t) && tryFunctionObject(t)
        }
        : function(t) {
            if (isDDA(t))
                return !0;
            if (!t)
                return !1;
            if ("function" != typeof t && "object" != typeof t)
                return !1;
            if (hasToStringTag)
                return tryFunctionObject(t);
            if (isES6ClassFn(t))
                return !1;
            var e = toStr.call(t);
            return !(e !== fnClass && e !== genClass && !/^\[object HTML/.test(e)) && tryFunctionObject(t)
        }
        ;

    }
    , {}],
    61: [function(require, module, exports) {
        "use strict";
        var getDay = Date.prototype.getDay
          , tryDateObject = function(t) {
            try {
                return getDay.call(t),
                !0
            } catch (t) {
                return !1
            }
        }
          , toStr = Object.prototype.toString
          , dateClass = "[object Date]"
          , hasToStringTag = require("has-tostringtag/shams")();
        module.exports = function(t) {
            return "object" == typeof t && null !== t && (hasToStringTag ? tryDateObject(t) : toStr.call(t) === dateClass)
        }
        ;

    }
    , {
        "has-tostringtag/shams": 55
    }],
    62: [function(require, module, exports) {
        module.exports = isFunction;
        var toString = Object.prototype.toString;
        function isFunction(t) {
            if (!t)
                return !1;
            var o = toString.call(t);
            return "[object Function]" === o || "function" == typeof t && "[object RegExp]" !== o || "undefined" != typeof window && (t === window.setTimeout || t === window.alert || t === window.confirm || t === window.prompt)
        }

    }
    , {}],
    63: [function(require, module, exports) {
        "use strict";
        var has, $exec, isRegexMarker, badStringifier, callBound = require("call-bind/callBound"), hasToStringTag = require("has-tostringtag/shams")();
        if (hasToStringTag) {
            has = callBound("Object.prototype.hasOwnProperty"),
            $exec = callBound("RegExp.prototype.exec"),
            isRegexMarker = {};
            var throwRegexMarker = function() {
                throw isRegexMarker
            };
            badStringifier = {
                toString: throwRegexMarker,
                valueOf: throwRegexMarker
            },
            "symbol" == typeof Symbol.toPrimitive && (badStringifier[Symbol.toPrimitive] = throwRegexMarker)
        }
        var $toString = callBound("Object.prototype.toString")
          , gOPD = Object.getOwnPropertyDescriptor
          , regexClass = "[object RegExp]";
        module.exports = hasToStringTag ? function(e) {
            if (!e || "object" != typeof e)
                return !1;
            var r = gOPD(e, "lastIndex");
            if (!(r && has(r, "value")))
                return !1;
            try {
                $exec(e, badStringifier)
            } catch (e) {
                return e === isRegexMarker
            }
        }
        : function(e) {
            return !(!e || "object" != typeof e && "function" != typeof e) && $toString(e) === regexClass
        }
        ;

    }
    , {
        "call-bind/callBound": 13,
        "has-tostringtag/shams": 55
    }],
    64: [function(require, module, exports) {
        "use strict";
        var toStr = Object.prototype.toString
          , hasSymbols = require("has-symbols")();
        if (hasSymbols) {
            var symToStr = Symbol.prototype.toString
              , symStringRegex = /^Symbol\(.*\)$/
              , isSymbolObject = function(t) {
                return "symbol" == typeof t.valueOf() && symStringRegex.test(symToStr.call(t))
            };
            module.exports = function(t) {
                if ("symbol" == typeof t)
                    return !0;
                if ("[object Symbol]" !== toStr.call(t))
                    return !1;
                try {
                    return isSymbolObject(t)
                } catch (t) {
                    return !1
                }
            }
        } else
            module.exports = function(t) {
                return !1
            }
            ;

    }
    , {
        "has-symbols": 53
    }],
    65: [function(require, module, exports) {
        "use strict";
        var range, DOCUMENT_FRAGMENT_NODE = 11;
        function morphAttrs(e, t) {
            var n, r, o, a, i = t.attributes;
            if (t.nodeType !== DOCUMENT_FRAGMENT_NODE && e.nodeType !== DOCUMENT_FRAGMENT_NODE) {
                for (var d = i.length - 1; d >= 0; d--)
                    r = (n = i[d]).name,
                    o = n.namespaceURI,
                    a = n.value,
                    o ? (r = n.localName || r,
                    e.getAttributeNS(o, r) !== a && ("xmlns" === n.prefix && (r = n.name),
                    e.setAttributeNS(o, r, a))) : e.getAttribute(r) !== a && e.setAttribute(r, a);
                for (var l = e.attributes, c = l.length - 1; c >= 0; c--)
                    r = (n = l[c]).name,
                    (o = n.namespaceURI) ? (r = n.localName || r,
                    t.hasAttributeNS(o, r) || e.removeAttributeNS(o, r)) : t.hasAttribute(r) || e.removeAttribute(r)
            }
        }
        var NS_XHTML = "http://www.w3.org/1999/xhtml"
          , doc = "undefined" == typeof document ? void 0 : document
          , HAS_TEMPLATE_SUPPORT = !!doc && "content"in doc.createElement("template")
          , HAS_RANGE_SUPPORT = !!doc && doc.createRange && "createContextualFragment"in doc.createRange();
        function createFragmentFromTemplate(e) {
            var t = doc.createElement("template");
            return t.innerHTML = e,
            t.content.childNodes[0]
        }
        function createFragmentFromRange(e) {
            return range || (range = doc.createRange()).selectNode(doc.body),
            range.createContextualFragment(e).childNodes[0]
        }
        function createFragmentFromWrap(e) {
            var t = doc.createElement("body");
            return t.innerHTML = e,
            t.childNodes[0]
        }
        function toElement(e) {
            return e = e.trim(),
            HAS_TEMPLATE_SUPPORT ? createFragmentFromTemplate(e) : HAS_RANGE_SUPPORT ? createFragmentFromRange(e) : createFragmentFromWrap(e)
        }
        function compareNodeNames(e, t) {
            var n, r, o = e.nodeName, a = t.nodeName;
            return o === a || (n = o.charCodeAt(0),
            r = a.charCodeAt(0),
            n <= 90 && r >= 97 ? o === a.toUpperCase() : r <= 90 && n >= 97 && a === o.toUpperCase())
        }
        function createElementNS(e, t) {
            return t && t !== NS_XHTML ? doc.createElementNS(t, e) : doc.createElement(e)
        }
        function moveChildren(e, t) {
            for (var n = e.firstChild; n; ) {
                var r = n.nextSibling;
                t.appendChild(n),
                n = r
            }
            return t
        }
        function syncBooleanAttrProp(e, t, n) {
            e[n] !== t[n] && (e[n] = t[n],
            e[n] ? e.setAttribute(n, "") : e.removeAttribute(n))
        }
        var specialElHandlers = {
            OPTION: function(e, t) {
                var n = e.parentNode;
                if (n) {
                    var r = n.nodeName.toUpperCase();
                    "OPTGROUP" === r && (r = (n = n.parentNode) && n.nodeName.toUpperCase()),
                    "SELECT" !== r || n.hasAttribute("multiple") || (e.hasAttribute("selected") && !t.selected && (e.setAttribute("selected", "selected"),
                    e.removeAttribute("selected")),
                    n.selectedIndex = -1)
                }
                syncBooleanAttrProp(e, t, "selected")
            },
            INPUT: function(e, t) {
                syncBooleanAttrProp(e, t, "checked"),
                syncBooleanAttrProp(e, t, "disabled"),
                e.value !== t.value && (e.value = t.value),
                t.hasAttribute("value") || e.removeAttribute("value")
            },
            TEXTAREA: function(e, t) {
                var n = t.value;
                e.value !== n && (e.value = n);
                var r = e.firstChild;
                if (r) {
                    var o = r.nodeValue;
                    if (o == n || !n && o == e.placeholder)
                        return;
                    r.nodeValue = n
                }
            },
            SELECT: function(e, t) {
                if (!t.hasAttribute("multiple")) {
                    for (var n, r, o = -1, a = 0, i = e.firstChild; i; )
                        if ("OPTGROUP" === (r = i.nodeName && i.nodeName.toUpperCase()))
                            i = (n = i).firstChild;
                        else {
                            if ("OPTION" === r) {
                                if (i.hasAttribute("selected")) {
                                    o = a;
                                    break
                                }
                                a++
                            }
                            !(i = i.nextSibling) && n && (i = n.nextSibling,
                            n = null)
                        }
                    e.selectedIndex = o
                }
            }
        }
          , ELEMENT_NODE = 1
          , DOCUMENT_FRAGMENT_NODE$1 = 11
          , TEXT_NODE = 3
          , COMMENT_NODE = 8;
        function noop() {}
        function defaultGetNodeKey(e) {
            if (e)
                return e.getAttribute && e.getAttribute("id") || e.id
        }
        function morphdomFactory(e) {
            return function(t, n, r) {
                if (r || (r = {}),
                "string" == typeof n)
                    if ("#document" === t.nodeName || "HTML" === t.nodeName || "BODY" === t.nodeName) {
                        var o = n;
                        (n = doc.createElement("html")).innerHTML = o
                    } else
                        n = toElement(n);
                else
                    n.nodeType === DOCUMENT_FRAGMENT_NODE$1 && (n = n.firstElementChild);
                var a = r.getNodeKey || defaultGetNodeKey
                  , i = r.onBeforeNodeAdded || noop
                  , d = r.onNodeAdded || noop
                  , l = r.onBeforeElUpdated || noop
                  , c = r.onElUpdated || noop
                  , u = r.onBeforeNodeDiscarded || noop
                  , N = r.onNodeDiscarded || noop
                  , m = r.onBeforeElChildrenUpdated || noop
                  , E = r.skipFromChildren || noop
                  , f = r.addChild || function(e, t) {
                    return e.appendChild(t)
                }
                  , s = !0 === r.childrenOnly
                  , p = Object.create(null)
                  , T = [];
                function v(e) {
                    T.push(e)
                }
                function A(e, t, n) {
                    !1 !== u(e) && (t && t.removeChild(e),
                    N(e),
                    function e(t, n) {
                        if (t.nodeType === ELEMENT_NODE)
                            for (var r = t.firstChild; r; ) {
                                var o = void 0;
                                n && (o = a(r)) ? v(o) : (N(r),
                                r.firstChild && e(r, n)),
                                r = r.nextSibling
                            }
                    }(e, n))
                }
                function h(e) {
                    d(e);
                    for (var t = e.firstChild; t; ) {
                        var n = t.nextSibling
                          , r = a(t);
                        if (r) {
                            var o = p[r];
                            o && compareNodeNames(t, o) ? (t.parentNode.replaceChild(o, t),
                            O(o, t)) : h(t)
                        } else
                            h(t);
                        t = n
                    }
                }
                function O(t, n, r) {
                    var o = a(n);
                    if (o && delete p[o],
                    !r) {
                        if (!1 === l(t, n))
                            return;
                        if (e(t, n),
                        c(t),
                        !1 === m(t, n))
                            return
                    }
                    "TEXTAREA" !== t.nodeName ? function(e, t) {
                        var n, r, o, d, l, c = E(e), u = t.firstChild, N = e.firstChild;
                        e: for (; u; ) {
                            for (d = u.nextSibling,
                            n = a(u); !c && N; ) {
                                if (o = N.nextSibling,
                                u.isSameNode && u.isSameNode(N)) {
                                    u = d,
                                    N = o;
                                    continue e
                                }
                                r = a(N);
                                var m = N.nodeType
                                  , s = void 0;
                                if (m === u.nodeType && (m === ELEMENT_NODE ? (n ? n !== r && ((l = p[n]) ? o === l ? s = !1 : (e.insertBefore(l, N),
                                r ? v(r) : A(N, e, !0),
                                N = l) : s = !1) : r && (s = !1),
                                (s = !1 !== s && compareNodeNames(N, u)) && O(N, u)) : m !== TEXT_NODE && m != COMMENT_NODE || (s = !0,
                                N.nodeValue !== u.nodeValue && (N.nodeValue = u.nodeValue))),
                                s) {
                                    u = d,
                                    N = o;
                                    continue e
                                }
                                r ? v(r) : A(N, e, !0),
                                N = o
                            }
                            if (n && (l = p[n]) && compareNodeNames(l, u))
                                c || f(e, l),
                                O(l, u);
                            else {
                                var T = i(u);
                                !1 !== T && (T && (u = T),
                                u.actualize && (u = u.actualize(e.ownerDocument || doc)),
                                f(e, u),
                                h(u))
                            }
                            u = d,
                            N = o
                        }
                        !function(e, t, n) {
                            for (; t; ) {
                                var r = t.nextSibling;
                                (n = a(t)) ? v(n) : A(t, e, !0),
                                t = r
                            }
                        }(e, N, r);
                        var C = specialElHandlers[e.nodeName];
                        C && C(e, t)
                    }(t, n) : specialElHandlers.TEXTAREA(t, n)
                }
                !function e(t) {
                    if (t.nodeType === ELEMENT_NODE || t.nodeType === DOCUMENT_FRAGMENT_NODE$1)
                        for (var n = t.firstChild; n; ) {
                            var r = a(n);
                            r && (p[r] = n),
                            e(n),
                            n = n.nextSibling
                        }
                }(t);
                var C = t
                  , b = C.nodeType
                  , g = n.nodeType;
                if (!s)
                    if (b === ELEMENT_NODE)
                        g === ELEMENT_NODE ? compareNodeNames(t, n) || (N(t),
                        C = moveChildren(t, createElementNS(n.nodeName, n.namespaceURI))) : C = n;
                    else if (b === TEXT_NODE || b === COMMENT_NODE) {
                        if (g === b)
                            return C.nodeValue !== n.nodeValue && (C.nodeValue = n.nodeValue),
                            C;
                        C = n
                    }
                if (C === n)
                    N(t);
                else {
                    if (n.isSameNode && n.isSameNode(C))
                        return;
                    if (O(C, n, s),
                    T)
                        for (var _ = 0, M = T.length; _ < M; _++) {
                            var S = p[T[_]];
                            S && A(S, S.parentNode, !1)
                        }
                }
                return !s && C !== t && t.parentNode && (C.actualize && (C = C.actualize(t.ownerDocument || doc)),
                t.parentNode.replaceChild(C, t)),
                C
            }
        }
        var morphdom = morphdomFactory(morphAttrs);
        module.exports = morphdom;

    }
    , {}],
    66: [function(require, module, exports) {
        var window = require("global/window");
        function nanoraf(n, o) {
            o = o || window.requestAnimationFrame;
            var r = !1
              , u = null;
            return function(a, i) {
                null !== u || r || (r = !0,
                o(function() {
                    r = !1,
                    u && (!0,
                    n(u, i),
                    !1,
                    u = null)
                })),
                u = a
            }
        }
        module.exports = nanoraf;

    }
    , {
        "global/window": 50
    }],
    67: [function(require, module, exports) {
        (function(setImmediate) {
            (function() {
                module.exports = nanotick;
                var delay = "undefined" != typeof window && window.document ? "undefined" != typeof setImmediate ? setImmediate : setTimeout : eval("process.nextTick");
                function nanotick() {
                    var n = []
                      , e = !1;
                    return function(n) {
                        var e = !1;
                        return t(function() {
                            e = !0
                        }),
                        function() {
                            for (var o = arguments.length, i = new Array(o), u = 0; u < o; u++)
                                i[u] = arguments[u];
                            e ? n.apply(n, i) : t(function() {
                                n.apply(n, i)
                            })
                        }
                    }
                    ;
                    function t(t) {
                        n.push(t),
                        e || (e = !0,
                        delay(function() {
                            for (; n.length > 0; )
                                n.shift()();
                            e = !1
                        }))
                    }
                }

            }
            ).call(this)
        }
        ).call(this, require("timers").setImmediate)
    }
    , {
        "timers": 87
    }],
    68: [function(require, module, exports) {
        var hasMap = "function" == typeof Map && Map.prototype
          , mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null
          , mapSize = hasMap && mapSizeDescriptor && "function" == typeof mapSizeDescriptor.get ? mapSizeDescriptor.get : null
          , mapForEach = hasMap && Map.prototype.forEach
          , hasSet = "function" == typeof Set && Set.prototype
          , setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null
          , setSize = hasSet && setSizeDescriptor && "function" == typeof setSizeDescriptor.get ? setSizeDescriptor.get : null
          , setForEach = hasSet && Set.prototype.forEach
          , hasWeakMap = "function" == typeof WeakMap && WeakMap.prototype
          , weakMapHas = hasWeakMap ? WeakMap.prototype.has : null
          , hasWeakSet = "function" == typeof WeakSet && WeakSet.prototype
          , weakSetHas = hasWeakSet ? WeakSet.prototype.has : null
          , hasWeakRef = "function" == typeof WeakRef && WeakRef.prototype
          , weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null
          , booleanValueOf = Boolean.prototype.valueOf
          , objectToString = Object.prototype.toString
          , functionToString = Function.prototype.toString
          , $match = String.prototype.match
          , $slice = String.prototype.slice
          , $replace = String.prototype.replace
          , $toUpperCase = String.prototype.toUpperCase
          , $toLowerCase = String.prototype.toLowerCase
          , $test = RegExp.prototype.test
          , $concat = Array.prototype.concat
          , $join = Array.prototype.join
          , $arrSlice = Array.prototype.slice
          , $floor = Math.floor
          , bigIntValueOf = "function" == typeof BigInt ? BigInt.prototype.valueOf : null
          , gOPS = Object.getOwnPropertySymbols
          , symToString = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? Symbol.prototype.toString : null
          , hasShammedSymbols = "function" == typeof Symbol && "object" == typeof Symbol.iterator
          , toStringTag = "function" == typeof Symbol && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols || "symbol") ? Symbol.toStringTag : null
          , isEnumerable = Object.prototype.propertyIsEnumerable
          , gPO = ("function" == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
            return t.__proto__
        }
        : null);
        function addNumericSeparator(t, e) {
            if (t === 1 / 0 || t === -1 / 0 || t != t || t && t > -1e3 && t < 1e3 || $test.call(/e/, e))
                return e;
            var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
            if ("number" == typeof t) {
                var n = t < 0 ? -$floor(-t) : $floor(t);
                if (n !== t) {
                    var o = String(n)
                      , a = $slice.call(e, o.length + 1);
                    return $replace.call(o, r, "$&_") + "." + $replace.call($replace.call(a, /([0-9]{3})/g, "$&_"), /_$/, "")
                }
            }
            return $replace.call(e, r, "$&_")
        }
        var utilInspect = require("./util.inspect")
          , inspectCustom = utilInspect.custom
          , inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
        function wrapQuotes(t, e, r) {
            var n = "double" === (r.quoteStyle || e) ? '"' : "'";
            return n + t + n
        }
        function quote(t) {
            return $replace.call(String(t), /"/g, "&quot;")
        }
        function isArray(t) {
            return !("[object Array]" !== toStr(t) || toStringTag && "object" == typeof t && toStringTag in t)
        }
        function isDate(t) {
            return !("[object Date]" !== toStr(t) || toStringTag && "object" == typeof t && toStringTag in t)
        }
        function isRegExp(t) {
            return !("[object RegExp]" !== toStr(t) || toStringTag && "object" == typeof t && toStringTag in t)
        }
        function isError(t) {
            return !("[object Error]" !== toStr(t) || toStringTag && "object" == typeof t && toStringTag in t)
        }
        function isString(t) {
            return !("[object String]" !== toStr(t) || toStringTag && "object" == typeof t && toStringTag in t)
        }
        function isNumber(t) {
            return !("[object Number]" !== toStr(t) || toStringTag && "object" == typeof t && toStringTag in t)
        }
        function isBoolean(t) {
            return !("[object Boolean]" !== toStr(t) || toStringTag && "object" == typeof t && toStringTag in t)
        }
        function isSymbol(t) {
            if (hasShammedSymbols)
                return t && "object" == typeof t && t instanceof Symbol;
            if ("symbol" == typeof t)
                return !0;
            if (!t || "object" != typeof t || !symToString)
                return !1;
            try {
                return symToString.call(t),
                !0
            } catch (t) {}
            return !1
        }
        function isBigInt(t) {
            if (!t || "object" != typeof t || !bigIntValueOf)
                return !1;
            try {
                return bigIntValueOf.call(t),
                !0
            } catch (t) {}
            return !1
        }
        module.exports = function t(e, r, n, o) {
            var a = r || {};
            if (has(a, "quoteStyle") && "single" !== a.quoteStyle && "double" !== a.quoteStyle)
                throw new TypeError('option "quoteStyle" must be "single" or "double"');
            if (has(a, "maxStringLength") && ("number" == typeof a.maxStringLength ? a.maxStringLength < 0 && a.maxStringLength !== 1 / 0 : null !== a.maxStringLength))
                throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
            var i = !has(a, "customInspect") || a.customInspect;
            if ("boolean" != typeof i && "symbol" !== i)
                throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
            if (has(a, "indent") && null !== a.indent && "\t" !== a.indent && !(parseInt(a.indent, 10) === a.indent && a.indent > 0))
                throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
            if (has(a, "numericSeparator") && "boolean" != typeof a.numericSeparator)
                throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
            var c = a.numericSeparator;
            if (void 0 === e)
                return "undefined";
            if (null === e)
                return "null";
            if ("boolean" == typeof e)
                return e ? "true" : "false";
            if ("string" == typeof e)
                return inspectString(e, a);
            if ("number" == typeof e) {
                if (0 === e)
                    return 1 / 0 / e > 0 ? "0" : "-0";
                var l = String(e);
                return c ? addNumericSeparator(e, l) : l
            }
            if ("bigint" == typeof e) {
                var u = String(e) + "n";
                return c ? addNumericSeparator(e, u) : u
            }
            var p = void 0 === a.depth ? 5 : a.depth;
            if (void 0 === n && (n = 0),
            n >= p && p > 0 && "object" == typeof e)
                return isArray(e) ? "[Array]" : "[Object]";
            var f = getIndent(a, n);
            if (void 0 === o)
                o = [];
            else if (indexOf(o, e) >= 0)
                return "[Circular]";
            function s(e, r, i) {
                if (r && (o = $arrSlice.call(o)).push(r),
                i) {
                    var c = {
                        depth: a.depth
                    };
                    return has(a, "quoteStyle") && (c.quoteStyle = a.quoteStyle),
                    t(e, c, n + 1, o)
                }
                return t(e, a, n + 1, o)
            }
            if ("function" == typeof e && !isRegExp(e)) {
                var y = nameOf(e)
                  , S = arrObjKeys(e, s);
                return "[Function" + (y ? ": " + y : " (anonymous)") + "]" + (S.length > 0 ? " { " + $join.call(S, ", ") + " }" : "")
            }
            if (isSymbol(e)) {
                var g = hasShammedSymbols ? $replace.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(e);
                return "object" != typeof e || hasShammedSymbols ? g : markBoxed(g)
            }
            if (isElement(e)) {
                for (var m = "<" + $toLowerCase.call(String(e.nodeName)), b = e.attributes || [], h = 0; h < b.length; h++)
                    m += " " + b[h].name + "=" + wrapQuotes(quote(b[h].value), "double", a);
                return m += ">",
                e.childNodes && e.childNodes.length && (m += "..."),
                m += "</" + $toLowerCase.call(String(e.nodeName)) + ">"
            }
            if (isArray(e)) {
                if (0 === e.length)
                    return "[]";
                var d = arrObjKeys(e, s);
                return f && !singleLineValues(d) ? "[" + indentedJoin(d, f) + "]" : "[ " + $join.call(d, ", ") + " ]"
            }
            if (isError(e)) {
                var j = arrObjKeys(e, s);
                return "cause"in Error.prototype || !("cause"in e) || isEnumerable.call(e, "cause") ? 0 === j.length ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + $join.call(j, ", ") + " }" : "{ [" + String(e) + "] " + $join.call($concat.call("[cause]: " + s(e.cause), j), ", ") + " }"
            }
            if ("object" == typeof e && i) {
                if (inspectSymbol && "function" == typeof e[inspectSymbol] && utilInspect)
                    return utilInspect(e, {
                        depth: p - n
                    });
                if ("symbol" !== i && "function" == typeof e.inspect)
                    return e.inspect()
            }
            if (isMap(e)) {
                var O = [];
                return mapForEach && mapForEach.call(e, function(t, r) {
                    O.push(s(r, e, !0) + " => " + s(t, e))
                }),
                collectionOf("Map", mapSize.call(e), O, f)
            }
            if (isSet(e)) {
                var $ = [];
                return setForEach && setForEach.call(e, function(t) {
                    $.push(s(t, e))
                }),
                collectionOf("Set", setSize.call(e), $, f)
            }
            if (isWeakMap(e))
                return weakCollectionOf("WeakMap");
            if (isWeakSet(e))
                return weakCollectionOf("WeakSet");
            if (isWeakRef(e))
                return weakCollectionOf("WeakRef");
            if (isNumber(e))
                return markBoxed(s(Number(e)));
            if (isBigInt(e))
                return markBoxed(s(bigIntValueOf.call(e)));
            if (isBoolean(e))
                return markBoxed(booleanValueOf.call(e));
            if (isString(e))
                return markBoxed(s(String(e)));
            if (!isDate(e) && !isRegExp(e)) {
                var k = arrObjKeys(e, s)
                  , v = gPO ? gPO(e) === Object.prototype : e instanceof Object || e.constructor === Object
                  , w = e instanceof Object ? "" : "null prototype"
                  , T = !v && toStringTag && Object(e) === e && toStringTag in e ? $slice.call(toStr(e), 8, -1) : w ? "Object" : ""
                  , E = (v || "function" != typeof e.constructor ? "" : e.constructor.name ? e.constructor.name + " " : "") + (T || w ? "[" + $join.call($concat.call([], T || [], w || []), ": ") + "] " : "");
                return 0 === k.length ? E + "{}" : f ? E + "{" + indentedJoin(k, f) + "}" : E + "{ " + $join.call(k, ", ") + " }"
            }
            return String(e)
        }
        ;
        var hasOwn = Object.prototype.hasOwnProperty || function(t) {
            return t in this
        }
        ;
        function has(t, e) {
            return hasOwn.call(t, e)
        }
        function toStr(t) {
            return objectToString.call(t)
        }
        function nameOf(t) {
            if (t.name)
                return t.name;
            var e = $match.call(functionToString.call(t), /^function\s*([\w$]+)/);
            return e ? e[1] : null
        }
        function indexOf(t, e) {
            if (t.indexOf)
                return t.indexOf(e);
            for (var r = 0, n = t.length; r < n; r++)
                if (t[r] === e)
                    return r;
            return -1
        }
        function isMap(t) {
            if (!mapSize || !t || "object" != typeof t)
                return !1;
            try {
                mapSize.call(t);
                try {
                    setSize.call(t)
                } catch (t) {
                    return !0
                }
                return t instanceof Map
            } catch (t) {}
            return !1
        }
        function isWeakMap(t) {
            if (!weakMapHas || !t || "object" != typeof t)
                return !1;
            try {
                weakMapHas.call(t, weakMapHas);
                try {
                    weakSetHas.call(t, weakSetHas)
                } catch (t) {
                    return !0
                }
                return t instanceof WeakMap
            } catch (t) {}
            return !1
        }
        function isWeakRef(t) {
            if (!weakRefDeref || !t || "object" != typeof t)
                return !1;
            try {
                return weakRefDeref.call(t),
                !0
            } catch (t) {}
            return !1
        }
        function isSet(t) {
            if (!setSize || !t || "object" != typeof t)
                return !1;
            try {
                setSize.call(t);
                try {
                    mapSize.call(t)
                } catch (t) {
                    return !0
                }
                return t instanceof Set
            } catch (t) {}
            return !1
        }
        function isWeakSet(t) {
            if (!weakSetHas || !t || "object" != typeof t)
                return !1;
            try {
                weakSetHas.call(t, weakSetHas);
                try {
                    weakMapHas.call(t, weakMapHas)
                } catch (t) {
                    return !0
                }
                return t instanceof WeakSet
            } catch (t) {}
            return !1
        }
        function isElement(t) {
            return !(!t || "object" != typeof t) && ("undefined" != typeof HTMLElement && t instanceof HTMLElement || "string" == typeof t.nodeName && "function" == typeof t.getAttribute)
        }
        function inspectString(t, e) {
            if (t.length > e.maxStringLength) {
                var r = t.length - e.maxStringLength
                  , n = "... " + r + " more character" + (r > 1 ? "s" : "");
                return inspectString($slice.call(t, 0, e.maxStringLength), e) + n
            }
            return wrapQuotes($replace.call($replace.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, lowbyte), "single", e)
        }
        function lowbyte(t) {
            var e = t.charCodeAt(0)
              , r = {
                8: "b",
                9: "t",
                10: "n",
                12: "f",
                13: "r"
            }[e];
            return r ? "\\" + r : "\\x" + (e < 16 ? "0" : "") + $toUpperCase.call(e.toString(16))
        }
        function markBoxed(t) {
            return "Object(" + t + ")"
        }
        function weakCollectionOf(t) {
            return t + " { ? }"
        }
        function collectionOf(t, e, r, n) {
            return t + " (" + e + ") {" + (n ? indentedJoin(r, n) : $join.call(r, ", ")) + "}"
        }
        function singleLineValues(t) {
            for (var e = 0; e < t.length; e++)
                if (indexOf(t[e], "\n") >= 0)
                    return !1;
            return !0
        }
        function getIndent(t, e) {
            var r;
            if ("\t" === t.indent)
                r = "\t";
            else {
                if (!("number" == typeof t.indent && t.indent > 0))
                    return null;
                r = $join.call(Array(t.indent + 1), " ")
            }
            return {
                base: r,
                prev: $join.call(Array(e + 1), r)
            }
        }
        function indentedJoin(t, e) {
            if (0 === t.length)
                return "";
            var r = "\n" + e.prev + e.base;
            return r + $join.call(t, "," + r) + "\n" + e.prev
        }
        function arrObjKeys(t, e) {
            var r = isArray(t)
              , n = [];
            if (r) {
                n.length = t.length;
                for (var o = 0; o < t.length; o++)
                    n[o] = has(t, o) ? e(t[o], t) : ""
            }
            var a, i = "function" == typeof gOPS ? gOPS(t) : [];
            if (hasShammedSymbols) {
                a = {};
                for (var c = 0; c < i.length; c++)
                    a["$" + i[c]] = i[c]
            }
            for (var l in t)
                has(t, l) && (r && String(Number(l)) === l && l < t.length || hasShammedSymbols && a["$" + l]instanceof Symbol || ($test.call(/[^\w$]/, l) ? n.push(e(l, t) + ": " + e(t[l], t)) : n.push(l + ": " + e(t[l], t))));
            if ("function" == typeof gOPS)
                for (var u = 0; u < i.length; u++)
                    isEnumerable.call(t, i[u]) && n.push("[" + e(i[u]) + "]: " + e(t[i[u]], t));
            return n
        }

    }
    , {
        "./util.inspect": 12
    }],
    69: [function(require, module, exports) {
        "use strict";
        var keysShim;
        if (!Object.keys) {
            var has = Object.prototype.hasOwnProperty
              , toStr = Object.prototype.toString
              , isArgs = require("./isArguments")
              , isEnumerable = Object.prototype.propertyIsEnumerable
              , hasDontEnumBug = !isEnumerable.call({
                toString: null
            }, "toString")
              , hasProtoEnumBug = isEnumerable.call(function() {}, "prototype")
              , dontEnums = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]
              , equalsConstructorPrototype = function(t) {
                var o = t.constructor;
                return o && o.prototype === t
            }
              , excludedKeys = {
                $applicationCache: !0,
                $console: !0,
                $external: !0,
                $frame: !0,
                $frameElement: !0,
                $frames: !0,
                $innerHeight: !0,
                $innerWidth: !0,
                $onmozfullscreenchange: !0,
                $onmozfullscreenerror: !0,
                $outerHeight: !0,
                $outerWidth: !0,
                $pageXOffset: !0,
                $pageYOffset: !0,
                $parent: !0,
                $scrollLeft: !0,
                $scrollTop: !0,
                $scrollX: !0,
                $scrollY: !0,
                $self: !0,
                $webkitIndexedDB: !0,
                $webkitStorageInfo: !0,
                $window: !0
            }
              , hasAutomationEqualityBug = function() {
                if ("undefined" == typeof window)
                    return !1;
                for (var t in window)
                    try {
                        if (!excludedKeys["$" + t] && has.call(window, t) && null !== window[t] && "object" == typeof window[t])
                            try {
                                equalsConstructorPrototype(window[t])
                            } catch (t) {
                                return !0
                            }
                    } catch (t) {
                        return !0
                    }
                return !1
            }()
              , equalsConstructorPrototypeIfNotBuggy = function(t) {
                if ("undefined" == typeof window || !hasAutomationEqualityBug)
                    return equalsConstructorPrototype(t);
                try {
                    return equalsConstructorPrototype(t)
                } catch (t) {
                    return !1
                }
            };
            keysShim = function(t) {
                var o = null !== t && "object" == typeof t
                  , r = "[object Function]" === toStr.call(t)
                  , e = isArgs(t)
                  , n = o && "[object String]" === toStr.call(t)
                  , u = [];
                if (!o && !r && !e)
                    throw new TypeError("Object.keys called on a non-object");
                var s = hasProtoEnumBug && r;
                if (n && t.length > 0 && !has.call(t, 0))
                    for (var a = 0; a < t.length; ++a)
                        u.push(String(a));
                if (e && t.length > 0)
                    for (var l = 0; l < t.length; ++l)
                        u.push(String(l));
                else
                    for (var i in t)
                        s && "prototype" === i || !has.call(t, i) || u.push(String(i));
                if (hasDontEnumBug)
                    for (var c = equalsConstructorPrototypeIfNotBuggy(t), p = 0; p < dontEnums.length; ++p)
                        c && "constructor" === dontEnums[p] || !has.call(t, dontEnums[p]) || u.push(dontEnums[p]);
                return u
            }
        }
        module.exports = keysShim;

    }
    , {
        "./isArguments": 71
    }],
    70: [function(require, module, exports) {
        "use strict";
        var slice = Array.prototype.slice
          , isArgs = require("./isArguments")
          , origKeys = Object.keys
          , keysShim = origKeys ? function(e) {
            return origKeys(e)
        }
        : require("./implementation")
          , originalKeys = Object.keys;
        keysShim.shim = function() {
            Object.keys ? function() {
                var e = Object.keys(arguments);
                return e && e.length === arguments.length
            }(1, 2) || (Object.keys = function(e) {
                return isArgs(e) ? originalKeys(slice.call(e)) : originalKeys(e)
            }
            ) : Object.keys = keysShim;
            return Object.keys || keysShim
        }
        ,
        module.exports = keysShim;

    }
    , {
        "./implementation": 69,
        "./isArguments": 71
    }],
    71: [function(require, module, exports) {
        "use strict";
        var toStr = Object.prototype.toString;
        module.exports = function(t) {
            var e = toStr.call(t)
              , o = "[object Arguments]" === e;
            return o || (o = "[object Array]" !== e && null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && "[object Function]" === toStr.call(t.callee)),
            o
        }
        ;

    }
    , {}],
    72: [function(require, module, exports) {
        var document = require("global/document")
          , window = require("global/window")
          , watch = Object.create(null)
          , KEY_ID = "onloadid" + (new Date % 9e6).toString(36)
          , KEY_ATTR = "data-" + KEY_ID
          , INDEX = 0;
        if (window && window.MutationObserver) {
            var observer = new MutationObserver(function(t) {
                if (!(Object.keys(watch).length < 1))
                    for (var e = 0; e < t.length; e++)
                        t[e].attributeName !== KEY_ATTR ? (eachMutation(t[e].removedNodes, turnoff),
                        eachMutation(t[e].addedNodes, turnon)) : eachAttr(t[e], turnon, turnoff)
            }
            );
            document.body ? beginObserve(observer) : document.addEventListener("DOMContentLoaded", function(t) {
                beginObserve(observer)
            })
        }
        function beginObserve(t) {
            t.observe(document.documentElement, {
                childList: !0,
                subtree: !0,
                attributes: !0,
                attributeOldValue: !0,
                attributeFilter: [KEY_ATTR]
            })
        }
        function turnon(t, e) {
            watch[t][0] && 0 === watch[t][2] && (watch[t][0](e),
            watch[t][2] = 1)
        }
        function turnoff(t, e) {
            watch[t][1] && 1 === watch[t][2] && (watch[t][1](e),
            watch[t][2] = 0)
        }
        function eachAttr(t, e, n) {
            var o = t.target.getAttribute(KEY_ATTR);
            sameOrigin(t.oldValue, o) ? watch[o] = watch[t.oldValue] : (watch[t.oldValue] && n(t.oldValue, t.target),
            watch[o] && e(o, t.target))
        }
        function sameOrigin(t, e) {
            return !(!t || !e) && watch[t][3] === watch[e][3]
        }
        function eachMutation(t, e) {
            for (var n = Object.keys(watch), o = 0; o < t.length; o++) {
                if (t[o] && t[o].getAttribute && t[o].getAttribute(KEY_ATTR)) {
                    var a = t[o].getAttribute(KEY_ATTR);
                    n.forEach(function(n) {
                        a === n && e(n, t[o])
                    })
                }
                t[o].childNodes.length > 0 && eachMutation(t[o].childNodes, e)
            }
        }
        module.exports = function t(e, n, o, a) {
            return n = n || function() {}
            ,
            o = o || function() {}
            ,
            e.setAttribute(KEY_ATTR, "o" + INDEX),
            watch["o" + INDEX] = [n, o, 0, a || t.caller],
            INDEX += 1,
            e
        }
        ,
        module.exports.KEY_ATTR = KEY_ATTR,
        module.exports.KEY_ID = KEY_ID;

    }
    , {
        "global/document": 49,
        "global/window": 50
    }],
    73: [function(require, module, exports) {
        var trim = function(r) {
            return r.replace(/^\s+|\s+$/g, "")
        }
          , isArray = function(r) {
            return "[object Array]" === Object.prototype.toString.call(r)
        };
        module.exports = function(r) {
            if (!r)
                return {};
            for (var t = {}, e = trim(r).split("\n"), i = 0; i < e.length; i++) {
                var n = e[i]
                  , o = n.indexOf(":")
                  , s = trim(n.slice(0, o)).toLowerCase()
                  , a = trim(n.slice(o + 1));
                void 0 === t[s] ? t[s] = a : isArray(t[s]) ? t[s].push(a) : t[s] = [t[s], a]
            }
            return t
        }
        ;

    }
    , {}],
    74: [function(require, module, exports) {
        var cachedSetTimeout, cachedClearTimeout, process = module.exports = {};
        function defaultSetTimout() {
            throw new Error("setTimeout has not been defined")
        }
        function defaultClearTimeout() {
            throw new Error("clearTimeout has not been defined")
        }
        function runTimeout(e) {
            if (cachedSetTimeout === setTimeout)
                return setTimeout(e, 0);
            if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout)
                return cachedSetTimeout = setTimeout,
                setTimeout(e, 0);
            try {
                return cachedSetTimeout(e, 0)
            } catch (t) {
                try {
                    return cachedSetTimeout.call(null, e, 0)
                } catch (t) {
                    return cachedSetTimeout.call(this, e, 0)
                }
            }
        }
        function runClearTimeout(e) {
            if (cachedClearTimeout === clearTimeout)
                return clearTimeout(e);
            if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout)
                return cachedClearTimeout = clearTimeout,
                clearTimeout(e);
            try {
                return cachedClearTimeout(e)
            } catch (t) {
                try {
                    return cachedClearTimeout.call(null, e)
                } catch (t) {
                    return cachedClearTimeout.call(this, e)
                }
            }
        }
        !function() {
            try {
                cachedSetTimeout = "function" == typeof setTimeout ? setTimeout : defaultSetTimout
            } catch (e) {
                cachedSetTimeout = defaultSetTimout
            }
            try {
                cachedClearTimeout = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout
            } catch (e) {
                cachedClearTimeout = defaultClearTimeout
            }
        }();
        var currentQueue, queue = [], draining = !1, queueIndex = -1;
        function cleanUpNextTick() {
            draining && currentQueue && (draining = !1,
            currentQueue.length ? queue = currentQueue.concat(queue) : queueIndex = -1,
            queue.length && drainQueue())
        }
        function drainQueue() {
            if (!draining) {
                var e = runTimeout(cleanUpNextTick);
                draining = !0;
                for (var t = queue.length; t; ) {
                    for (currentQueue = queue,
                    queue = []; ++queueIndex < t; )
                        currentQueue && currentQueue[queueIndex].run();
                    queueIndex = -1,
                    t = queue.length
                }
                currentQueue = null,
                draining = !1,
                runClearTimeout(e)
            }
        }
        function Item(e, t) {
            this.fun = e,
            this.array = t
        }
        function noop() {}
        process.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var r = 1; r < arguments.length; r++)
                    t[r - 1] = arguments[r];
            queue.push(new Item(e,t)),
            1 !== queue.length || draining || runTimeout(drainQueue)
        }
        ,
        Item.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        process.title = "browser",
        process.browser = !0,
        process.env = {},
        process.argv = [],
        process.version = "",
        process.versions = {},
        process.on = noop,
        process.addListener = noop,
        process.once = noop,
        process.off = noop,
        process.removeListener = noop,
        process.removeAllListeners = noop,
        process.emit = noop,
        process.prependListener = noop,
        process.prependOnceListener = noop,
        process.listeners = function(e) {
            return []
        }
        ,
        process.binding = function(e) {
            throw new Error("process.binding is not supported")
        }
        ,
        process.cwd = function() {
            return "/"
        }
        ,
        process.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }
        ,
        process.umask = function() {
            return 0
        }
        ;

    }
    , {}],
    75: [function(require, module, exports) {
        "use strict";
        var callBound = require("call-bind/callBound")
          , GetIntrinsic = require("get-intrinsic")
          , isRegex = require("is-regex")
          , $exec = callBound("RegExp.prototype.exec")
          , $TypeError = GetIntrinsic("%TypeError%");
        module.exports = function(e) {
            if (!isRegex(e))
                throw new $TypeError("`regex` must be a RegExp");
            return function(r) {
                return null !== $exec(e, r)
            }
        }
        ;

    }
    , {
        "call-bind/callBound": 13,
        "get-intrinsic": 48,
        "is-regex": 63
    }],
    76: [function(require, module, exports) {
        var electron = "^(file://|/)(.*.html?/?)?"
          , protocol = "^(http(s)?(://))?(www.)?"
          , domain = "[a-zA-Z0-9-_.]+(:[0-9]{1,5})?(/{1})?"
          , qs = "[?].*$"
          , stripElectron = new RegExp(electron)
          , prefix = new RegExp(protocol + domain)
          , normalize = new RegExp("#")
          , suffix = new RegExp(qs);
        function pathname(e, r) {
            return (e = r ? e.replace(stripElectron, "") : e.replace(prefix, "")).replace(suffix, "").replace(normalize, "/")
        }
        module.exports = pathname;

    }
    , {}],
    77: [function(require, module, exports) {
        var document = require("global/document")
          , xtend = require("xtend")
          , qs = require("./qs");
        function createLocation(e, a) {
            return e ? "string" == typeof a ? (t = a,
            (n = document.createElement("a")).href = t,
            {
                href: n.href,
                pathname: n.pathname,
                search: n.search ? qs(n.search) : {},
                hash: n.hash
            }) : xtend(e, a) : {
                pathname: document.location.pathname,
                search: document.location.search ? qs(document.location.search) : {},
                hash: document.location.hash,
                href: document.location.href
            };
            var t, n
        }
        module.exports = createLocation;

    }
    , {
        "./qs": 81,
        "global/document": 49,
        "xtend": 92
    }],
    78: [function(require, module, exports) {
        var document = require("global/document")
          , window = require("global/window");
        function history(o) {
            window.onpopstate = function() {
                o({
                    pathname: document.location.pathname,
                    search: document.location.search,
                    href: document.location.href,
                    hash: document.location.hash
                })
            }
        }
        module.exports = history;

    }
    , {
        "global/document": 49,
        "global/window": 50
    }],
    79: [function(require, module, exports) {
        var window = require("global/window")
          , qs = require("./qs");
        module.exports = href;
        var noRoutingAttrName = "data-no-routing";
        function href(e, t) {
            window.onclick = function(a) {
                if (!(a.button && 0 !== a.button || a.ctrlKey || a.metaKey || a.altKey || a.shiftKey)) {
                    var o = function e(a) {
                        if (a && a !== t)
                            return "a" !== a.localName ? e(a.parentNode) : void 0 === a.href ? e(a.parentNode) : window.location.host !== a.host ? e(a.parentNode) : a
                    }(a.target);
                    if (o)
                        o.hasAttribute(noRoutingAttrName) || (a.preventDefault(),
                        e({
                            pathname: o.pathname,
                            search: o.search ? qs(o.search) : {},
                            href: o.href,
                            hash: o.hash
                        }))
                }
            }
        }

    }
    , {
        "./qs": 81,
        "global/window": 50
    }],
    80: [function(require, module, exports) {
        var pathname = require("./_pathname")
          , wayfarer = require("wayfarer")
          , isLocalFile = /file:\/\//.test("object" == typeof window && window.location && window.location.origin);
        function sheetRouter(n, r) {
            r || (r = n,
            n = {});
            var t = n.default || "/404"
              , e = wayfarer(t)
              , a = null
              , i = null;
            return o._router = e,
            function r(t, a) {
                if ("string" == typeof t[0])
                    var i = t[0].replace(/^[#/]/, "");
                else
                    var o = t[0];
                var u = "function" == typeof t[1] ? t[1] : null
                  , l = Array.isArray(t[1]) ? t[1] : Array.isArray(t[2]) ? t[2] : null;
                if (o && t.forEach(function(n) {
                    r(n, a)
                }),
                u) {
                    var c = i ? a.concat(i).join("/") : a.length ? a.join("/") : i
                      , f = !1 === n.thunk || "match" === n.thunk ? u : thunkify(u);
                    e.on(c, f)
                }
                Array.isArray(l) && r(l, a.concat(i))
            }(r, []),
            o;
            function o(r, t, o, u, l, c) {
                return !1 === n.thunk ? e(pathname(r, isLocalFile), t, o, u, l, c) : r === i ? a(t, o, u, l, c) : (i = pathname(r, isLocalFile),
                (a = e(i))(t, o, u, l, c))
            }
        }
        function thunkify(n) {
            return function(r) {
                return function(t, e, a, i, o) {
                    return n(r, t, e, a, i, o)
                }
            }
        }
        module.exports = sheetRouter;

    }
    , {
        "./_pathname": 76,
        "wayfarer": 88
    }],
    81: [function(require, module, exports) {
        var window = require("global/window")
          , decodeURIComponent = window.decodeURIComponent
          , reg = new RegExp("([^?=&]+)(=([^&]*))?","g");
        function qs(e) {
            var o = {};
            return e.replace(/^.*\?/, "").replace(reg, function(e, n, d, r) {
                o[decodeURIComponent(n)] = decodeURIComponent(r)
            }),
            o
        }
        module.exports = qs;

    }
    , {
        "global/window": 50
    }],
    82: [function(require, module, exports) {
        const walk = require("wayfarer/walk");
        function walkSheetRouter(e, r) {
            return e = e._router,
            walk(e, r)
        }
        module.exports = walkSheetRouter;

    }
    , {
        "wayfarer/walk": 90
    }],
    83: [function(require, module, exports) {
        "use strict";
        var RequireObjectCoercible = require("es-abstract/2022/RequireObjectCoercible")
          , ToString = require("es-abstract/2022/ToString")
          , callBound = require("call-bind/callBound")
          , $replace = callBound("String.prototype.replace")
          , mvsIsWS = /^\s$/.test("᠎")
          , leftWhitespace = mvsIsWS ? /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/ : /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/
          , rightWhitespace = mvsIsWS ? /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/ : /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/;
        module.exports = function() {
            var u = ToString(RequireObjectCoercible(this));
            return $replace($replace(u, leftWhitespace, ""), rightWhitespace, "")
        }
        ;

    }
    , {
        "call-bind/callBound": 13,
        "es-abstract/2022/RequireObjectCoercible": 23,
        "es-abstract/2022/ToString": 31
    }],
    84: [function(require, module, exports) {
        "use strict";
        var callBind = require("call-bind")
          , define = require("define-properties")
          , RequireObjectCoercible = require("es-abstract/2022/RequireObjectCoercible")
          , implementation = require("./implementation")
          , getPolyfill = require("./polyfill")
          , shim = require("./shim")
          , bound = callBind(getPolyfill())
          , boundMethod = function(e) {
            return RequireObjectCoercible(e),
            bound(e)
        };
        define(boundMethod, {
            getPolyfill: getPolyfill,
            implementation: implementation,
            shim: shim
        }),
        module.exports = boundMethod;

    }
    , {
        "./implementation": 83,
        "./polyfill": 85,
        "./shim": 86,
        "call-bind": 14,
        "define-properties": 16,
        "es-abstract/2022/RequireObjectCoercible": 23
    }],
    85: [function(require, module, exports) {
        "use strict";
        var implementation = require("./implementation")
          , zeroWidthSpace = "​"
          , mongolianVowelSeparator = "᠎";
        module.exports = function() {
            return String.prototype.trim && zeroWidthSpace.trim() === zeroWidthSpace && mongolianVowelSeparator.trim() === mongolianVowelSeparator && ("_" + mongolianVowelSeparator).trim() === "_" + mongolianVowelSeparator && (mongolianVowelSeparator + "_").trim() === mongolianVowelSeparator + "_" ? String.prototype.trim : implementation
        }
        ;

    }
    , {
        "./implementation": 83
    }],
    86: [function(require, module, exports) {
        "use strict";
        var define = require("define-properties")
          , getPolyfill = require("./polyfill");
        module.exports = function() {
            var e = getPolyfill();
            return define(String.prototype, {
                trim: e
            }, {
                trim: function() {
                    return String.prototype.trim !== e
                }
            }),
            e
        }
        ;

    }
    , {
        "./polyfill": 85,
        "define-properties": 16
    }],
    87: [function(require, module, exports) {
        (function(setImmediate, clearImmediate) {
            (function() {
                var nextTick = require("process/browser.js").nextTick
                  , apply = Function.prototype.apply
                  , slice = Array.prototype.slice
                  , immediateIds = {}
                  , nextImmediateId = 0;
                function Timeout(e, t) {
                    this._id = e,
                    this._clearFn = t
                }
                exports.setTimeout = function() {
                    return new Timeout(apply.call(setTimeout, window, arguments),clearTimeout)
                }
                ,
                exports.setInterval = function() {
                    return new Timeout(apply.call(setInterval, window, arguments),clearInterval)
                }
                ,
                exports.clearTimeout = exports.clearInterval = function(e) {
                    e.close()
                }
                ,
                Timeout.prototype.unref = Timeout.prototype.ref = function() {}
                ,
                Timeout.prototype.close = function() {
                    this._clearFn.call(window, this._id)
                }
                ,
                exports.enroll = function(e, t) {
                    clearTimeout(e._idleTimeoutId),
                    e._idleTimeout = t
                }
                ,
                exports.unenroll = function(e) {
                    clearTimeout(e._idleTimeoutId),
                    e._idleTimeout = -1
                }
                ,
                exports._unrefActive = exports.active = function(e) {
                    clearTimeout(e._idleTimeoutId);
                    var t = e._idleTimeout;
                    t >= 0 && (e._idleTimeoutId = setTimeout(function() {
                        e._onTimeout && e._onTimeout()
                    }, t))
                }
                ,
                exports.setImmediate = "function" == typeof setImmediate ? setImmediate : function(e) {
                    var t = nextImmediateId++
                      , i = !(arguments.length < 2) && slice.call(arguments, 1);
                    return immediateIds[t] = !0,
                    nextTick(function() {
                        immediateIds[t] && (i ? e.apply(null, i) : e.call(null),
                        exports.clearImmediate(t))
                    }),
                    t
                }
                ,
                exports.clearImmediate = "function" == typeof clearImmediate ? clearImmediate : function(e) {
                    delete immediateIds[e]
                }
                ;

            }
            ).call(this)
        }
        ).call(this, require("timers").setImmediate, require("timers").clearImmediate)
    }
    , {
        "process/browser.js": 74,
        "timers": 87
    }],
    88: [function(require, module, exports) {
        var trie = require("./trie");
        function Wayfarer(r) {
            if (!(this instanceof Wayfarer))
                return new Wayfarer(r);
            var e = (r || "").replace(/^\//, "")
              , t = trie();
            return a._trie = t,
            a.on = function(r, e) {
                var n = e._wayfarer && e._trie ? e : function() {
                    return e.apply(this, Array.prototype.slice.call(arguments))
                }
                ;
                if (r = r || "/",
                n.route = r,
                n._wayfarer && n._trie)
                    t.mount(r, n._trie.trie);
                else {
                    var i = t.create(r);
                    i.cb = n
                }
                return a
            }
            ,
            a.emit = a,
            a.match = n,
            a._wayfarer = !0,
            a;
            function a(r) {
                var e = n(r)
                  , t = new Array(arguments.length);
                t[0] = e.params;
                for (var a = 1; a < t.length; a++)
                    t[a] = arguments[a];
                return e.cb.apply(e.cb, t)
            }
            function n(r) {
                var a = t.match(r);
                if (a && a.cb)
                    return new i(a);
                var n = t.match(e);
                if (n && n.cb)
                    return new i(n);
                throw new Error("route '" + r + "' did not match")
            }
            function i(r) {
                this.cb = r.cb,
                this.route = r.cb.route,
                this.params = r.params
            }
        }
        module.exports = Wayfarer;

    }
    , {
        "./trie": 89
    }],
    89: [function(require, module, exports) {
        var mutate = require("xtend/mutable")
          , xtend = require("xtend");
        function Trie() {
            if (!(this instanceof Trie))
                return new Trie;
            this.trie = {
                nodes: {}
            }
        }
        module.exports = Trie,
        Trie.prototype.create = function(e) {
            var n = e.replace(/^\//, "").split("/");
            return function e(r, t) {
                var o = n.hasOwnProperty(r) && n[r];
                if (!1 === o)
                    return t;
                var i = null;
                return /^:|^\*/.test(o) ? (t.nodes.hasOwnProperty("$$") ? i = t.nodes.$$ : (i = {
                    nodes: {}
                },
                t.nodes.$$ = i),
                "*" === o[0] && (t.wildcard = !0),
                t.name = o.replace(/^:|^\*/, "")) : t.nodes.hasOwnProperty(o) ? i = t.nodes[o] : (i = {
                    nodes: {}
                },
                t.nodes[o] = i),
                e(r + 1, i)
            }(0, this.trie)
        }
        ,
        Trie.prototype.match = function(e) {
            var n = e.replace(/^\//, "").split("/")
              , r = {};
            var t = function e(t, o) {
                if (void 0 !== o) {
                    var i = n[t];
                    if (void 0 === i)
                        return o;
                    if (o.nodes.hasOwnProperty(i))
                        return e(t + 1, o.nodes[i]);
                    if (o.name) {
                        try {
                            r[o.name] = decodeURIComponent(i)
                        } catch (n) {
                            return e(t, void 0)
                        }
                        return e(t + 1, o.nodes.$$)
                    }
                    if (o.wildcard) {
                        try {
                            r.wildcard = decodeURIComponent(n.slice(t).join("/"))
                        } catch (n) {
                            return e(t, void 0)
                        }
                        return o.nodes.$$
                    }
                    return e(t + 1)
                }
            }(0, this.trie);
            if (t)
                return (t = xtend(t)).params = r,
                t
        }
        ,
        Trie.prototype.mount = function(e, n) {
            var r = e.replace(/^\//, "").split("/")
              , t = null
              , o = null;
            if (1 === r.length)
                o = r[0],
                t = this.create(o);
            else {
                var i = r.join("/");
                o = r[0],
                t = this.create(i)
            }
            mutate(t.nodes, n.nodes),
            n.name && (t.name = n.name),
            t.nodes[""] && (Object.keys(t.nodes[""]).forEach(function(e) {
                "nodes" !== e && (t[e] = t.nodes[""][e])
            }),
            mutate(t.nodes, t.nodes[""].nodes),
            delete t.nodes[""].nodes)
        }
        ;

    }
    , {
        "xtend": 92,
        "xtend/mutable": 93
    }],
    90: [function(require, module, exports) {
        function walk(e, n) {
            !function e(c, o) {
                if (o.cb && (o.cb = n(c, o.cb)),
                o.nodes) {
                    var t = o.nodes;
                    Object.keys(t).forEach(function(n) {
                        var a = t[n]
                          , i = "$$" === n ? c + "/:" + o.name : c + "/" + n;
                        e(i, a)
                    })
                }
            }("", e._trie.trie)
        }
        module.exports = walk;

    }
    , {}],
    91: [function(require, module, exports) {
        "use strict";
        var window = require("global/window")
          , isFunction = require("is-function")
          , parseHeaders = require("parse-headers")
          , xtend = require("xtend");
        function forEachArray(e, t) {
            for (var r = 0; r < e.length; r++)
                t(e[r])
        }
        function isEmpty(e) {
            for (var t in e)
                if (e.hasOwnProperty(t))
                    return !1;
            return !0
        }
        function initParams(e, t, r) {
            var n = e;
            return isFunction(t) ? (r = t,
            "string" == typeof e && (n = {
                uri: e
            })) : n = xtend(t, {
                uri: e
            }),
            n.callback = r,
            n
        }
        function createXHR(e, t, r) {
            return _createXHR(t = initParams(e, t, r))
        }
        function _createXHR(e) {
            if (void 0 === e.callback)
                throw new Error("callback argument missing");
            var t = !1
              , r = function(r, n, o) {
                t || (t = !0,
                e.callback(r, n, o))
            };
            function n() {
                var e = void 0;
                if (e = u.response ? u.response : u.responseText || getXml(u),
                R)
                    try {
                        e = JSON.parse(e)
                    } catch (e) {}
                return e
            }
            function o(e) {
                return clearTimeout(c),
                e instanceof Error || (e = new Error("" + (e || "Unknown XMLHttpRequest Error"))),
                e.statusCode = 0,
                r(e, X)
            }
            function s() {
                if (!i) {
                    var t;
                    clearTimeout(c),
                    t = e.useXDR && void 0 === u.status ? 200 : 1223 === u.status ? 204 : u.status;
                    var o = X
                      , s = null;
                    return 0 !== t ? (o = {
                        body: n(),
                        statusCode: t,
                        method: p,
                        headers: {},
                        url: d,
                        rawRequest: u
                    },
                    u.getAllResponseHeaders && (o.headers = parseHeaders(u.getAllResponseHeaders()))) : s = new Error("Internal XMLHttpRequest Error"),
                    r(s, o, o.body)
                }
            }
            var a, i, u = e.xhr || null;
            u || (u = e.cors || e.useXDR ? new createXHR.XDomainRequest : new createXHR.XMLHttpRequest);
            var c, d = u.url = e.uri || e.url, p = u.method = e.method || "GET", l = e.body || e.data, f = u.headers = e.headers || {}, m = !!e.sync, R = !1, X = {
                body: void 0,
                headers: {},
                statusCode: 0,
                method: p,
                url: d,
                rawRequest: u
            };
            if ("json"in e && !1 !== e.json && (R = !0,
            f.accept || f.Accept || (f.Accept = "application/json"),
            "GET" !== p && "HEAD" !== p && (f["content-type"] || f["Content-Type"] || (f["Content-Type"] = "application/json"),
            l = JSON.stringify(!0 === e.json ? l : e.json))),
            u.onreadystatechange = function() {
                4 === u.readyState && setTimeout(s, 0)
            }
            ,
            u.onload = s,
            u.onerror = o,
            u.onprogress = function() {}
            ,
            u.onabort = function() {
                i = !0
            }
            ,
            u.ontimeout = o,
            u.open(p, d, !m, e.username, e.password),
            m || (u.withCredentials = !!e.withCredentials),
            !m && e.timeout > 0 && (c = setTimeout(function() {
                if (!i) {
                    i = !0,
                    u.abort("timeout");
                    var e = new Error("XMLHttpRequest timeout");
                    e.code = "ETIMEDOUT",
                    o(e)
                }
            }, e.timeout)),
            u.setRequestHeader)
                for (a in f)
                    f.hasOwnProperty(a) && u.setRequestHeader(a, f[a]);
            else if (e.headers && !isEmpty(e.headers))
                throw new Error("Headers cannot be set on an XDomainRequest object");
            return "responseType"in e && (u.responseType = e.responseType),
            "beforeSend"in e && "function" == typeof e.beforeSend && e.beforeSend(u),
            u.send(l || null),
            u
        }
        function getXml(e) {
            try {
                if ("document" === e.responseType)
                    return e.responseXML;
                var t = e.responseXML && "parsererror" === e.responseXML.documentElement.nodeName;
                if ("" === e.responseType && !t)
                    return e.responseXML
            } catch (e) {}
            return null
        }
        function noop() {}
        module.exports = createXHR,
        module.exports.default = createXHR,
        createXHR.XMLHttpRequest = window.XMLHttpRequest || noop,
        createXHR.XDomainRequest = "withCredentials"in new createXHR.XMLHttpRequest ? createXHR.XMLHttpRequest : window.XDomainRequest,
        forEachArray(["get", "put", "post", "patch", "head", "delete"], function(e) {
            createXHR["delete" === e ? "del" : e] = function(t, r, n) {
                return (r = initParams(t, r, n)).method = e.toUpperCase(),
                _createXHR(r)
            }
        });

    }
    , {
        "global/window": 50,
        "is-function": 62,
        "parse-headers": 73,
        "xtend": 92
    }],
    92: [function(require, module, exports) {
        module.exports = extend;
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        function extend() {
            for (var r = {}, e = 0; e < arguments.length; e++) {
                var t = arguments[e];
                for (var n in t)
                    hasOwnProperty.call(t, n) && (r[n] = t[n])
            }
            return r
        }

    }
    , {}],
    93: [function(require, module, exports) {
        module.exports = extend;
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        function extend(r) {
            for (var e = 1; e < arguments.length; e++) {
                var t = arguments[e];
                for (var n in t)
                    hasOwnProperty.call(t, n) && (r[n] = t[n])
            }
            return r
        }

    }
    , {}],
    94: [function(require, module, exports) {
        var bel = require("bel")
          , morphdom = require("morphdom")
          , defaultEvents = require("./update-events.js");
        module.exports = bel,
        module.exports.update = function(e, t, u) {
            return u || (u = {}),
            !1 !== u.events && (u.onBeforeElUpdated || (u.onBeforeElUpdated = function(e, t) {
                for (var a = u.events || defaultEvents, l = 0; l < a.length; l++) {
                    var r = a[l];
                    t[r] ? e[r] = t[r] : e[r] && (e[r] = void 0)
                }
                var o = e.value
                  , v = t.value;
                "INPUT" === e.nodeName && "file" !== e.type || "SELECT" === e.nodeName ? v || t.hasAttribute("value") ? v !== o && (e.value = v) : t.value = e.value : "TEXTAREA" === e.nodeName && null === t.getAttribute("value") && (e.value = t.value)
            }
            )),
            morphdom(e, t, u)
        }
        ;

    }
    , {
        "./update-events.js": 95,
        "bel": 11,
        "morphdom": 65
    }],
    95: [function(require, module, exports) {
        module.exports = ["onclick", "ondblclick", "onmousedown", "onmouseup", "onmouseover", "onmousemove", "onmouseout", "ondragstart", "ondrag", "ondragenter", "ondragleave", "ondragover", "ondrop", "ondragend", "onkeydown", "onkeypress", "onkeyup", "onunload", "onabort", "onerror", "onresize", "onscroll", "onselect", "onchange", "onsubmit", "onreset", "onfocus", "onblur", "oninput", "oncontextmenu", "onfocusin", "onfocusout"];

    }
    , {}],
    96: [function(require, module, exports) {
        module.exports = function e(t, n) {
            for (var o = 0; o < n.length; o++) {
                var i = n[o];
                if (Array.isArray(i))
                    e(t, i);
                else {
                    if (("number" == typeof i || "boolean" == typeof i || i instanceof Date || i instanceof RegExp) && (i = i.toString()),
                    "string" == typeof i) {
                        if (/^[\n\r\s]+$/.test(i))
                            continue;
                        if (t.lastChild && "#text" === t.lastChild.nodeName) {
                            t.lastChild.nodeValue += i;
                            continue
                        }
                        i = document.createTextNode(i)
                    }
                    i && i.nodeType && t.appendChild(i)
                }
            }
        }
        ;

    }
    , {}],
    97: [function(require, module, exports) {
        "use strict";
        var _choo = _interopRequireDefault(require("choo"))
          , _requestCamera = _interopRequireDefault(require("./effects/request-camera"))
          , _requestFullscreen = _interopRequireDefault(require("./effects/request-fullscreen"))
          , _snap = _interopRequireDefault(require("./effects/snap"))
          , _translate = _interopRequireDefault(require("./effects/translate"))
          , _baseView = _interopRequireDefault(require("./views/base-view"))
          , _config = require("./config");
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        require("array.prototype.find").shim(),
        require("array.prototype.findindex").shim();
        var app = (0,
        _choo.default)();
        app.model({
            state: {
                activeView: "main",
                cameraReady: !1,
                cameraError: !1,
                stream: null,
                video: null,
                ctx: null,
                canvas: null,
                isSnapping: !1,
                firstTime: !0,
                fullscreen: !1,
                label: "",
                translation: "",
                activeLang: _config.langList[0],
                targetLang: "english",
                guesses: "",
                rotateTerms: !0
            },
            subscriptions: [function(e, r) {
                return window.document.addEventListener("DOMContentLoaded", function() {
                    return e("requestCamera", r)
                })
            }
            ],
            reducers: {
                showList: function() {
                    return {
                        activeView: "list"
                    }
                },
                showMain: function() {
                    return {
                        activeView: "main"
                    }
                },
                cameraError: function() {
                    return {
                        cameraError: !0
                    }
                },
                startSnap: function() {
                    return {
                        isSnapping: !0,
                        firstTime: !1
                    }
                },
                endSnap: function() {
                    return {
                        isSnapping: !1
                    }
                },
                setFullscreen: function() {
                    return {
                        fullscreen: !0
                    }
                },
                setLabelPair: function(e, r) {
                    return r
                },
                changeLang: function(e, r) {
                    return {
                        activeView: "main",
                        activeLang: r,
                        label: "",
                        translation: ""
                    }
                },
                setStream: function(e, r) {
                    return {
                        cameraReady: !0,
                        stream: r.stream,
                        video: r.video,
                        ctx: r.ctx,
                        canvas: r.canvas
                    }
                }
            },
            effects: {
                requestCamera: _requestCamera.default,
                snap: _snap.default,
                translate: _translate.default,
                requestFullscreen: _requestFullscreen.default
            }
        }),
        app.router({
            default: "/"
        }, [["/", _baseView.default]]),
        window.document.body.appendChild(app.start());

    }
    , {
        "./config": 98,
        "./effects/request-camera": 99,
        "./effects/request-fullscreen": 100,
        "./effects/snap": 101,
        "./effects/translate": 102,
        "./views/base-view": 103,
        "array.prototype.find": 2,
        "array.prototype.findindex": 6,
        "choo": 15
    }],
    98: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.langList = exports.apiUrls = void 0;
        var googleKey = "QR6VC3AuyUBQWp4IBJjfKtWI_OMWO1jLDySazIA".split("").reverse().join("")
          , apiUrls = {
            cloudVision: "https://vision.googleapis.com/v1/images:annotate?key=" + googleKey,
            translate: "https://www.googleapis.com/language/translate/v2?key=" + googleKey
        };
        exports.apiUrls = apiUrls;
        var queryLangs = window.location.search.slice(1)
          , langList = queryLangs ? queryLangs.split(",") : ["spanish", "french", "german", "italian", "chinese", "japanese", "korean", "hindi", "dutch"];
        exports.langList = langList;

    }
    , {}],
    99: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.default = requestCamera;
        var _window = window
          , MediaStreamTrack = _window.MediaStreamTrack
          , _navigator = navigator
          , mediaDevices = _navigator.mediaDevices
          , sourceEnumSupport = mediaDevices && mediaDevices.enumerateDevices
          , streamTrackSupport = MediaStreamTrack && MediaStreamTrack.getSources
          , sourceSupport = sourceEnumSupport || streamTrackSupport
          , attemptedTwice = !1
          , getUserMedia = function() {
            var e = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
            return e ? e.bind(navigator) : null
        }()
          , findBestSource = function(e) {
            var a = null;
            if (sourceSupport && e && e.length)
                if (sourceEnumSupport)
                    for (var t = 0; t < e.length; t++) {
                        var r = e[t];
                        if ("videoinput" === r.kind) {
                            if ("function" == typeof r.getCapabilities) {
                                var i = r.getCapabilities();
                                if (i && "environment" === i.facingMode) {
                                    a = r;
                                    break
                                }
                            }
                            if (/facing back/i.test(r.label)) {
                                a = r;
                                break
                            }
                        }
                    }
                else
                    (a = e.find(function(e) {
                        return "environment" === e.facing
                    })) || (a = e.find(function(e) {
                        return "video" === e.kind
                    }));
            return a
        }
          , activateCamera = function e(a, t, r) {
            navigator.mediaDevices.getUserMedia({
                audio: !1,
                video: r || {
                    facingMode: "environment"
                }
            }).then(function(e) {
                return cameraSuccess(e, a, t)
            }).catch(function(i) {
                if (!r && "ConstraintNotSatisfiedError" === i.name)
                    return e(a, t, !0);
                console.error(i),
                a("cameraError", t)
            })
        }
          , activateCameraLegacy = function(e, a, t) {
            var r = findBestSource(e);
            getUserMedia({
                audio: !1,
                video: !r || {
                    optional: [{
                        sourceId: sourceEnumSupport ? r.deviceId : r.id
                    }]
                }
            }, function(e) {
                if (sourceEnumSupport && !r && !attemptedTwice)
                    return attemptedTwice = !0,
                    void setTimeout(function() {
                        e.getTracks().forEach(function(e) {
                            return e.stop()
                        }),
                        enumerateDevices(a, t)
                    }, 1);
                cameraSuccess(e, a, t)
            }, function(e) {
                console.error(e),
                a("cameraError", t)
            })
        }
          , cameraSuccess = function(e, a, t) {
            var r = window.document.getElementById("canvas")
              , i = window.document.getElementById("video");
            i.srcObject = e,
            a("setStream", {
                video: i,
                ctx: r.getContext("2d"),
                stream: e,
                canvas: r
            }, t)
        }
          , enumerateDevices = function(e, a) {
            return mediaDevices.enumerateDevices().then(function(t) {
                return activateCameraLegacy(t, e, a)
            }).catch(function() {
                return activateCameraLegacy(null, e, a)
            })
        };
        function requestCamera(e, a, t, r) {
            if (!e.cameraReady)
                return navigator.mediaDevices && navigator.mediaDevices.getUserMedia ? activateCamera(t, r) : getUserMedia ? void (sourceEnumSupport ? enumerateDevices(t, r) : streamTrackSupport ? MediaStreamTrack.getSources(function(e) {
                    return activateCameraLegacy(e, t, r)
                }) : activateCameraLegacy(null, t, r)) : t("cameraError", r)
        }

    }
    , {}],
    100: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.default = requestFullscreen;
        var body = window.document.body;
        function requestFullscreen(e, s, u, l) {
            body.requestFullscreen ? body.requestFullscreen() : body.webkitRequestFullscreen ? body.webkitRequestFullscreen() : body.mozRequestFullScreen ? body.mozRequestFullScreen() : body.msRequestFullscreen && body.msRequestFullscreen(),
            u("setFullscreen", l)
        }

    }
    , {}],
    101: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.default = snap;
        var _xhr = _interopRequireDefault(require("xhr"))
          , _config = require("../config");
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var breakPoint = 800
          , canvSize = 640
          , targetPct = .7
          , targetTop = .4;
        function snap(e, t, a, n) {
            a("startSnap", n);
            var i = window.innerWidth
              , r = window.innerHeight
              , o = e.video.videoWidth
              , s = e.video.videoHeight;
            if (i >= breakPoint) {
                var d = Math.min(i, r) * targetPct
                  , u = d / Math.max(i, r) * o;
                e.canvas.width = e.canvas.height = canvSize,
                e.ctx.drawImage(e.video, Math.round((i / 2 - d / 2) / i * o), Math.round((r * targetTop - d / 2) / r * s), u, u, 0, 0, canvSize, canvSize)
            } else
                e.canvas.width = o,
                e.canvas.height = s,
                e.ctx.drawImage(e.video, 0, 0);
            _xhr.default.post(_config.apiUrls.cloudVision, {
                json: {
                    requests: [{
                        image: {
                            content: e.canvas.toDataURL("image/jpeg", 1).replace("data:image/jpeg;base64,", "")
                        },
                        features: {
                            type: "LABEL_DETECTION",
                            maxResults: 10
                        }
                    }]
                }
            }, function(e, t, i) {
                var r;
                r = !e && i.responses && i.responses.length && i.responses[0].labelAnnotations ? i.responses[0].labelAnnotations : [],
                a("translate", r, n),
                setTimeout(a.bind(null, "endSnap", n), 200)
            })
        }

    }
    , {
        "../config": 98,
        "xhr": 91
    }],
    102: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.default = translate;
        var _xhr = _interopRequireDefault(require("xhr"))
          , _he = _interopRequireDefault(require("he"))
          , _config = require("../config");
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var _window = window
          , speechSynthesis = _window.speechSynthesis
          , SpeechSynthesisUtterance = _window.SpeechSynthesisUtterance
          , speechSupport = speechSynthesis && SpeechSynthesisUtterance
          , filterLong = !0
          , lengthLimit = 8
          , speak = function(e, n, t) {
            if (speechSupport) {
                var a = new SpeechSynthesisUtterance;
                a.text = e,
                a.lang = voices[voiceMap[n]].lang,
                a.voiceURI = voices[voiceMap[n]].voiceURI,
                t && a.addEventListener("end", t),
                e ? speechSynthesis.speak(a) : t && t()
            } else
                t && t()
        }
          , voices = speechSupport ? speechSynthesis.getVoices() : []
          , voiceMap = null
          , setVoiceMap = function(e) {
            voices = e;
            var n = {
                english: /en(-|_)gb/i,
                spanish: /es(-|_)(mx|es)/i,
                german: /de(-|_)de/i,
                french: /fr(-|_)fr/i,
                chinese: /zh(-|_)cn/i,
                italian: /it(-|_)it/i,
                korean: /ko(-|_)kr/i,
                japanese: /ja(-|_)jp/i,
                dutch: /nl(-|_)nl/i,
                hindi: /hi(-|_)in/i
            };
            voiceMap = Object.keys(n).reduce(function(e, t) {
                return e[t] = voices.findIndex(function(e) {
                    return n[t].test(e.lang)
                }),
                e
            }, {})
        };
        voices.length ? setVoiceMap(voices) : speechSupport && (speechSynthesis.onvoiceschanged = function() {
            return setVoiceMap(speechSynthesis.getVoices())
        }
        );
        var langMap = {
            english: "en",
            spanish: "es",
            german: "de",
            french: "fr",
            chinese: "zh",
            italian: "it",
            korean: "ko",
            japanese: "ja",
            dutch: "nl",
            hindi: "hi"
        }
          , cache = {};
        function translate(e, n, t, a) {
            var i = function() {
                return t("setLabelPair", {
                    label: "?",
                    translation: "?",
                    guesses: ""
                }, a)
            };
            if (!n.length)
                return i();
            var s = n.map(function(e) {
                return e.description
            })
              , c = filterLong ? s.filter(function(e) {
                return e.length <= lengthLimit
            }) : s;
            c.length || (c = s);
            var r = n.slice(0, 3).map(function(e) {
                return "".concat(e.description, ": ").concat(Math.round(100 * e.score), "%")
            }).join(", ")
              , o = c[0];
            e.rotateTerms && o === e.label && c.length > 1 && (o = c.slice(1)[Math.floor(Math.random() * (c.length - 1))]),
            cache[e.activeLang] || (cache[e.activeLang] = {});
            var h = cache[e.activeLang][o];
            if (h)
                return t("setLabelPair", {
                    label: _he.default.decode(o),
                    translation: h,
                    guesses: r
                }, a),
                void speak(h, e.activeLang, speak.bind(null, o, e.targetLang));
            _xhr.default.get("".concat(_config.apiUrls.translate, "&q=").concat(o, "&source=en&target=").concat(langMap[e.activeLang]), function(n, s, c) {
                if (n)
                    return i();
                var h = _he.default.decode(JSON.parse(c).data.translations[0].translatedText);
                t("setLabelPair", {
                    label: _he.default.decode(o),
                    translation: h,
                    guesses: r
                }, a),
                speak(h, e.activeLang, speak.bind(null, o, e.targetLang)),
                cache[e.activeLang][o] = h
            })
        }

    }
    , {
        "../config": 98,
        "he": 57,
        "xhr": 91
    }],
    103: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.default = void 0;
        var _errorView = _interopRequireDefault(require("./error-view"))
          , _targetView = _interopRequireDefault(require("./target-view"))
          , _mainView = _interopRequireDefault(require("./main-view"))
          , _listView = _interopRequireDefault(require("./list-view"))
          , _appendChild = require("yo-yoify/lib/appendChild")
          , _svgNamespace = "http://www.w3.org/2000/svg";
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var _default = function(e, t, i) {
            var r, a, u, n, l;
            return (n = document.createElement("main")).ontouchstart = e.fullscreen ? null : i.bind(null, "requestFullscreen"),
            n.setAttribute("class", "app"),
            _appendChild(n, [" ", (r = document.createElement("div"),
            r.setAttribute("id", "shroud"),
            r), " ", (u = document.createElementNS(_svgNamespace, "svg"),
            u.setAttribute("id", "spinner"),
            u.setAttribute("width", "65px"),
            u.setAttribute("height", "65px"),
            u.setAttribute("viewBox", "0 0 66 66"),
            u.setAttribute("class", "" + String(e.isSnapping ? "active" : "")),
            _appendChild(u, [" ", (a = document.createElementNS(_svgNamespace, "circle"),
            a), " "]),
            u), " ", e.cameraError ? (0,
            _errorView.default)() : (l = document.createElement("div"),
            _appendChild(l, [" ", (0,
            _targetView.default)(e, t, i), " ", "main" === e.activeView ? (0,
            _mainView.default)(e, t, i) : (0,
            _listView.default)(e, t, i), " "]),
            l), " "]),
            n
        };
        exports.default = _default;

    }
    , {
        "./error-view": 104,
        "./list-view": 105,
        "./main-view": 106,
        "./target-view": 107,
        "yo-yoify/lib/appendChild": 96
    }],
    104: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.default = void 0;
        var _appendChild = require("yo-yoify/lib/appendChild")
          , _default = function() {
            var e;
            return (e = document.createElement("h1")).setAttribute("id", "cam-error"),
            _appendChild(e, [" ", /iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream ? "On iOS, Safari is the only browser allowed to use the camera. Please try using Safari." : "Your browser or device doesn’t allow access to the camera. Please try using a modern browser.", " "]),
            e
        };
        exports.default = _default;

    }
    , {
        "yo-yoify/lib/appendChild": 96
    }],
    105: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.default = void 0;
        var _config = require("../config")
          , _appendChild = require("yo-yoify/lib/appendChild")
          , _default = function(e, t, n) {
            var i, a, r;
            return (r = document.createElement("section")).setAttribute("id", "lang-list"),
            _appendChild(r, [" ", (i = document.createElement("div"),
            i.onclick = function() {
                return n("showMain")
            }
            ,
            i.setAttribute("class", "x"),
            i.appendChild(document.createTextNode("×")),
            i), " ", (a = document.createElement("ul"),
            _appendChild(a, [" ", _config.langList.map(function(t) {
                var i;
                return (i = document.createElement("li")).onclick = function() {
                    return n("changeLang", t)
                }
                ,
                i.setAttribute("class", "" + String(t === e.activeLang ? "active" : "")),
                _appendChild(i, [" ", t, " "]),
                i
            }), " "]),
            a), " "]),
            r
        };
        exports.default = _default;

    }
    , {
        "../config": 98,
        "yo-yoify/lib/appendChild": 96
    }],
    106: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.default = void 0;
        var _appendChild = require("yo-yoify/lib/appendChild")
          , _default = function(e, t, n) {
            var i, a, d, r, l, u, s, c, o, p;
            return (a = document.createElement("section")).setAttribute("id", "main-view"),
            a.setAttribute("class", "" + String(e.isSnapping ? "faded" : "")),
            _appendChild(a, [" ", !e.firstTime && e.translation ? (l = document.createElement("div"),
            l.setAttribute("class", "row"),
            _appendChild(l, [" ", (d = document.createElement("h2"),
            _appendChild(d, [e.translation]),
            d), " ", (r = document.createElement("h4"),
            r.onclick = function() {
                return n("showList")
            }
            ,
            _appendChild(r, [e.activeLang]),
            r), " "]),
            l) : null, " ", !e.firstTime && e.label ? (c = document.createElement("div"),
            c.setAttribute("class", "row"),
            _appendChild(c, [" ", (u = document.createElement("h2"),
            _appendChild(u, [e.label]),
            u), " ", (s = document.createElement("h4"),
            _appendChild(s, [e.targetLang]),
            s), " "]),
            c) : null, " ", e.cameraReady ? (o = document.createElement("div"),
            o.setAttribute("id", "shutter-button"),
            o.onclick = function() {
                return n("snap")
            }
            ,
            o.setAttribute("class", "" + String(e.isSnapping ? "busy" : "")),
            o) : null, " ", e.firstTime && e.cameraReady ? (p = document.createElement("h5"),
            p.setAttribute("id", "first-time"),
            p.appendChild(document.createTextNode("Try taking a picture of something.")),
            p) : null, " ", (i = document.createElement("div"),
            i.setAttribute("class", "debug"),
            _appendChild(i, [e.guesses]),
            i), " "]),
            a
        };
        exports.default = _default;

    }
    , {
        "yo-yoify/lib/appendChild": 96
    }],
    107: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.default = void 0;
        var _default = function(t) {
            var e;
            return "list" === t.activeView || t.firstTime ? null : ((e = document.createElement("div")).setAttribute("id", "target"),
            e.setAttribute("class", "" + String(t.isSnapping ? "flashing" : "")),
            e)
        };
        exports.default = _default;

    }
    , {}]
}, {}, [97]);
