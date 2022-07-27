! function (e, t) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
	"use strict";

	function n(e, t) {
		var n = (t = t || Z).createElement("script");
		n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
	}

	function i(e) {
		var t = !!e && "length" in e && e.length,
			n = ae.type(e);
		return "function" !== n && !ae.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
	}

	function r(e, t) {
		return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
	}

	function o(e, t, n) {
		return ae.isFunction(t) ? ae.grep(e, function (e, i) {
			return !!t.call(e, i, e) !== n
		}) : t.nodeType ? ae.grep(e, function (e) {
			return e === t !== n
		}) : "string" != typeof t ? ae.grep(e, function (e) {
			return ee.call(t, e) > -1 !== n
		}) : ve.test(t) ? ae.filter(t, e, n) : (t = ae.filter(t, e), ae.grep(e, function (e) {
			return ee.call(t, e) > -1 !== n && 1 === e.nodeType
		}))
	}

	function s(e, t) {
		for (;
			(e = e[t]) && 1 !== e.nodeType;);
		return e
	}

	function a(e) {
		return e
	}

	function l(e) {
		throw e
	}

	function c(e, t, n, i) {
		var r;
		try {
			e && ae.isFunction(r = e.promise) ? r.call(e).done(t).fail(n) : e && ae.isFunction(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
		} catch (e) {
			n.apply(void 0, [e])
		}
	}

	function u() {
		Z.removeEventListener("DOMContentLoaded", u), e.removeEventListener("load", u), ae.ready()
	}

	function d() {
		this.expando = ae.expando + d.uid++
	}

	function f(e, t, n) {
		var i;
		if (void 0 === n && 1 === e.nodeType)
			if (i = "data-" + t.replace(je, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
				try {
					n = function (e) {
						return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Ee.test(e) ? JSON.parse(e) : e)
					}(n)
				} catch (e) {}
				Pe.set(e, t, n)
			} else n = void 0;
		return n
	}

	function h(e, t, n, i) {
		var r, o = 1,
			s = 20,
			a = i ? function () {
				return i.cur()
			} : function () {
				return ae.css(e, t, "")
			},
			l = a(),
			c = n && n[3] || (ae.cssNumber[t] ? "" : "px"),
			u = (ae.cssNumber[t] || "px" !== c && +l) && He.exec(ae.css(e, t));
		if (u && u[3] !== c) {
			c = c || u[3], n = n || [], u = +l || 1;
			do {
				o = o || ".5", u /= o, ae.style(e, t, u + c)
			} while (o !== (o = a() / l) && 1 !== o && --s)
		}
		return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
	}

	function p(e) {
		var t, n = e.ownerDocument,
			i = e.nodeName,
			r = qe[i];
		return r || (t = n.body.appendChild(n.createElement(i)), r = ae.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), qe[i] = r, r)
	}

	function g(e, t) {
		for (var n, i, r = [], o = 0, s = e.length; o < s; o++)(i = e[o]).style && (n = i.style.display, t ? ("none" === n && (r[o] = Ie.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && Fe(i) && (r[o] = p(i))) : "none" !== n && (r[o] = "none", Ie.set(i, "display", n)));
		for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
		return e
	}

	function m(e, t) {
		var n;
		return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && r(e, t) ? ae.merge([e], n) : n
	}

	function v(e, t) {
		for (var n = 0, i = e.length; n < i; n++) Ie.set(e[n], "globalEval", !t || Ie.get(t[n], "globalEval"))
	}

	function y(e, t, n, i, r) {
		for (var o, s, a, l, c, u, d = t.createDocumentFragment(), f = [], h = 0, p = e.length; h < p; h++)
			if ((o = e[h]) || 0 === o)
				if ("object" === ae.type(o)) ae.merge(f, o.nodeType ? [o] : o);
				else if (_e.test(o)) {
			for (s = s || d.appendChild(t.createElement("div")), a = (Me.exec(o) || ["", ""])[1].toLowerCase(), l = $e[a] || $e._default, s.innerHTML = l[1] + ae.htmlPrefilter(o) + l[2], u = l[0]; u--;) s = s.lastChild;
			ae.merge(f, s.childNodes), (s = d.firstChild).textContent = ""
		} else f.push(t.createTextNode(o));
		for (d.textContent = "", h = 0; o = f[h++];)
			if (i && ae.inArray(o, i) > -1) r && r.push(o);
			else if (c = ae.contains(o.ownerDocument, o), s = m(d.appendChild(o), "script"), c && v(s), n)
			for (u = 0; o = s[u++];) Re.test(o.type || "") && n.push(o);
		return d
	}

	function b() {
		return !0
	}

	function x() {
		return !1
	}

	function w() {
		try {
			return Z.activeElement
		} catch (e) {}
	}

	function C(e, t, n, i, r, o) {
		var s, a;
		if ("object" == typeof t) {
			"string" != typeof n && (i = i || n, n = void 0);
			for (a in t) C(e, a, n, i, t[a], o);
			return e
		}
		if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = x;
		else if (!r) return e;
		return 1 === o && (s = r, r = function (e) {
			return ae().off(e), s.apply(this, arguments)
		}, r.guid = s.guid || (s.guid = ae.guid++)), e.each(function () {
			ae.event.add(this, t, r, i, n)
		})
	}

	function T(e, t) {
		return r(e, "table") && r(11 !== t.nodeType ? t : t.firstChild, "tr") ? ae(">tbody", e)[0] || e : e
	}

	function A(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
	}

	function S(e) {
		var t = Ze.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}

	function k(e, t) {
		var n, i, r, o, s, a, l, c;
		if (1 === t.nodeType) {
			if (Ie.hasData(e) && (o = Ie.access(e), s = Ie.set(t, o), c = o.events)) {
				delete s.handle, s.events = {};
				for (r in c)
					for (n = 0, i = c[r].length; n < i; n++) ae.event.add(t, r, c[r][n])
			}
			Pe.hasData(e) && (a = Pe.access(e), l = ae.extend({}, a), Pe.set(t, l))
		}
	}

	function I(e, t) {
		var n = t.nodeName.toLowerCase();
		"input" === n && Oe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
	}

	function P(e, t, i, r) {
		t = Y.apply([], t);
		var o, s, a, l, c, u, d = 0,
			f = e.length,
			h = f - 1,
			p = t[0],
			g = ae.isFunction(p);
		if (g || f > 1 && "string" == typeof p && !se.checkClone && Xe.test(p)) return e.each(function (n) {
			var o = e.eq(n);
			g && (t[0] = p.call(this, n, o.html())), P(o, t, i, r)
		});
		if (f && (o = y(t, e[0].ownerDocument, !1, e, r), s = o.firstChild, 1 === o.childNodes.length && (o = s), s || r)) {
			for (l = (a = ae.map(m(o, "script"), A)).length; d < f; d++) c = o, d !== h && (c = ae.clone(c, !0, !0), l && ae.merge(a, m(c, "script"))), i.call(e[d], c, d);
			if (l)
				for (u = a[a.length - 1].ownerDocument, ae.map(a, S), d = 0; d < l; d++) c = a[d], Re.test(c.type || "") && !Ie.access(c, "globalEval") && ae.contains(u, c) && (c.src ? ae._evalUrl && ae._evalUrl(c.src) : n(c.textContent.replace(Je, ""), u))
		}
		return e
	}

	function E(e, t, n) {
		for (var i, r = t ? ae.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || ae.cleanData(m(i)), i.parentNode && (n && ae.contains(i.ownerDocument, i) && v(m(i, "script")), i.parentNode.removeChild(i));
		return e
	}

	function j(e, t, n) {
		var i, r, o, s, a = e.style;
		return (n = n || Ke(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || ae.contains(e.ownerDocument, e) || (s = ae.style(e, t)), !se.pixelMarginRight() && Ye.test(s) && Ge.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
	}

	function N(e, t) {
		return {
			get: function () {
				return e() ? void delete this.get : (this.get = t).apply(this, arguments)
			}
		}
	}

	function H(e) {
		var t = ae.cssProps[e];
		return t || (t = ae.cssProps[e] = function (e) {
			if (e in ot) return e;
			for (var t = e[0].toUpperCase() + e.slice(1), n = rt.length; n--;)
				if ((e = rt[n] + t) in ot) return e
		}(e) || e), t
	}

	function L(e, t, n) {
		var i = He.exec(t);
		return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
	}

	function F(e, t, n, i, r) {
		var o, s = 0;
		for (o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === n && (s += ae.css(e, n + Le[o], !0, r)), i ? ("content" === n && (s -= ae.css(e, "padding" + Le[o], !0, r)), "margin" !== n && (s -= ae.css(e, "border" + Le[o] + "Width", !0, r))) : (s += ae.css(e, "padding" + Le[o], !0, r), "padding" !== n && (s += ae.css(e, "border" + Le[o] + "Width", !0, r)));
		return s
	}

	function D(e, t, n) {
		var i, r = Ke(e),
			o = j(e, t, r),
			s = "border-box" === ae.css(e, "boxSizing", !1, r);
		return Ye.test(o) ? o : (i = s && (se.boxSizingReliable() || o === e.style[t]), "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]), (o = parseFloat(o) || 0) + F(e, t, n || (s ? "border" : "content"), i, r) + "px")
	}

	function q(e, t, n, i, r) {
		return new q.prototype.init(e, t, n, i, r)
	}

	function O() {
		at && (!1 === Z.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(O) : e.setTimeout(O, ae.fx.interval), ae.fx.tick())
	}

	function M() {
		return e.setTimeout(function () {
			st = void 0
		}), st = ae.now()
	}

	function R(e, t) {
		var n, i = 0,
			r = {
				height: e
			};
		for (t = t ? 1 : 0; i < 4; i += 2 - t) n = Le[i], r["margin" + n] = r["padding" + n] = e;
		return t && (r.opacity = r.width = e), r
	}

	function $(e, t, n) {
		for (var i, r = (_.tweeners[t] || []).concat(_.tweeners["*"]), o = 0, s = r.length; o < s; o++)
			if (i = r[o].call(n, t, e)) return i
	}

	function _(e, t, n) {
		var i, r, o = 0,
			s = _.prefilters.length,
			a = ae.Deferred().always(function () {
				delete l.elem
			}),
			l = function () {
				if (r) return !1;
				for (var t = st || M(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++) c.tweens[o].run(i);
				return a.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
			},
			c = a.promise({
				elem: e,
				props: ae.extend({}, t),
				opts: ae.extend(!0, {
					specialEasing: {},
					easing: ae.easing._default
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: st || M(),
				duration: n.duration,
				tweens: [],
				createTween: function (t, n) {
					var i = ae.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
					return c.tweens.push(i), i
				},
				stop: function (t) {
					var n = 0,
						i = t ? c.tweens.length : 0;
					if (r) return this;
					for (r = !0; n < i; n++) c.tweens[n].run(1);
					return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
				}
			}),
			u = c.props;
		for (function (e, t) {
				var n, i, r, o, s;
				for (n in e)
					if (i = ae.camelCase(n), r = t[i], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = ae.cssHooks[i]) && "expand" in s) {
						o = s.expand(o), delete e[i];
						for (n in o) n in e || (e[n] = o[n], t[n] = r)
					} else t[i] = r
			}(u, c.opts.specialEasing); o < s; o++)
			if (i = _.prefilters[o].call(c, e, u, c.opts)) return ae.isFunction(i.stop) && (ae._queueHooks(c.elem, c.opts.queue).stop = ae.proxy(i.stop, i)), i;
		return ae.map(u, $, c), ae.isFunction(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), ae.fx.timer(ae.extend(l, {
			elem: e,
			anim: c,
			queue: c.opts.queue
		})), c
	}

	function z(e) {
		return (e.match(Ce) || []).join(" ")
	}

	function B(e) {
		return e.getAttribute && e.getAttribute("class") || ""
	}

	function W(e, t, n, i) {
		var r;
		if (Array.isArray(t)) ae.each(t, function (t, r) {
			n || bt.test(e) ? i(e, r) : W(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
		});
		else if (n || "object" !== ae.type(t)) i(e, t);
		else
			for (r in t) W(e + "[" + r + "]", t[r], n, i)
	}

	function Q(e) {
		return function (t, n) {
			"string" != typeof t && (n = t, t = "*");
			var i, r = 0,
				o = t.toLowerCase().match(Ce) || [];
			if (ae.isFunction(n))
				for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
		}
	}

	function V(e, t, n, i) {
		function r(a) {
			var l;
			return o[a] = !0, ae.each(e[a] || [], function (e, a) {
				var c = a(t, n, i);
				return "string" != typeof c || s || o[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1)
			}), l
		}
		var o = {},
			s = e === jt;
		return r(t.dataTypes[0]) || !o["*"] && r("*")
	}

	function U(e, t) {
		var n, i, r = ae.ajaxSettings.flatOptions || {};
		for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
		return i && ae.extend(!0, e, i), e
	}
	var X = [],
		Z = e.document,
		J = Object.getPrototypeOf,
		G = X.slice,
		Y = X.concat,
		K = X.push,
		ee = X.indexOf,
		te = {},
		ne = te.toString,
		ie = te.hasOwnProperty,
		re = ie.toString,
		oe = re.call(Object),
		se = {},
		ae = function (e, t) {
			return new ae.fn.init(e, t)
		},
		le = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		ce = /^-ms-/,
		ue = /-([a-z])/g,
		de = function (e, t) {
			return t.toUpperCase()
		};
	ae.fn = ae.prototype = {
		jquery: "3.2.1",
		constructor: ae,
		length: 0,
		toArray: function () {
			return G.call(this)
		},
		get: function (e) {
			return null == e ? G.call(this) : e < 0 ? this[e + this.length] : this[e]
		},
		pushStack: function (e) {
			var t = ae.merge(this.constructor(), e);
			return t.prevObject = this, t
		},
		each: function (e) {
			return ae.each(this, e)
		},
		map: function (e) {
			return this.pushStack(ae.map(this, function (t, n) {
				return e.call(t, n, t)
			}))
		},
		slice: function () {
			return this.pushStack(G.apply(this, arguments))
		},
		first: function () {
			return this.eq(0)
		},
		last: function () {
			return this.eq(-1)
		},
		eq: function (e) {
			var t = this.length,
				n = +e + (e < 0 ? t : 0);
			return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
		},
		end: function () {
			return this.prevObject || this.constructor()
		},
		push: K,
		sort: X.sort,
		splice: X.splice
	}, ae.extend = ae.fn.extend = function () {
		var e, t, n, i, r, o, s = arguments[0] || {},
			a = 1,
			l = arguments.length,
			c = !1;
		for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || ae.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
			if (null != (e = arguments[a]))
				for (t in e) n = s[t], i = e[t], s !== i && (c && i && (ae.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, o = n && Array.isArray(n) ? n : []) : o = n && ae.isPlainObject(n) ? n : {}, s[t] = ae.extend(c, o, i)) : void 0 !== i && (s[t] = i));
		return s
	}, ae.extend({
		expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function (e) {
			throw new Error(e)
		},
		noop: function () {},
		isFunction: function (e) {
			return "function" === ae.type(e)
		},
		isWindow: function (e) {
			return null != e && e === e.window
		},
		isNumeric: function (e) {
			var t = ae.type(e);
			return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
		},
		isPlainObject: function (e) {
			var t, n;
			return !(!e || "[object Object]" !== ne.call(e) || (t = J(e)) && ("function" != typeof (n = ie.call(t, "constructor") && t.constructor) || re.call(n) !== oe))
		},
		isEmptyObject: function (e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		type: function (e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? te[ne.call(e)] || "object" : typeof e
		},
		globalEval: function (e) {
			n(e)
		},
		camelCase: function (e) {
			return e.replace(ce, "ms-").replace(ue, de)
		},
		each: function (e, t) {
			var n, r = 0;
			if (i(e))
				for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
			else
				for (r in e)
					if (!1 === t.call(e[r], r, e[r])) break;
			return e
		},
		trim: function (e) {
			return null == e ? "" : (e + "").replace(le, "")
		},
		makeArray: function (e, t) {
			var n = t || [];
			return null != e && (i(Object(e)) ? ae.merge(n, "string" == typeof e ? [e] : e) : K.call(n, e)), n
		},
		inArray: function (e, t, n) {
			return null == t ? -1 : ee.call(t, e, n)
		},
		merge: function (e, t) {
			for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
			return e.length = r, e
		},
		grep: function (e, t, n) {
			for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
			return i
		},
		map: function (e, t, n) {
			var r, o, s = 0,
				a = [];
			if (i(e))
				for (r = e.length; s < r; s++) null != (o = t(e[s], s, n)) && a.push(o);
			else
				for (s in e) null != (o = t(e[s], s, n)) && a.push(o);
			return Y.apply([], a)
		},
		guid: 1,
		proxy: function (e, t) {
			var n, i, r;
			if ("string" == typeof t && (n = e[t], t = e, e = n), ae.isFunction(e)) return i = G.call(arguments, 2), r = function () {
				return e.apply(t || this, i.concat(G.call(arguments)))
			}, r.guid = e.guid = e.guid || ae.guid++, r
		},
		now: Date.now,
		support: se
	}), "function" == typeof Symbol && (ae.fn[Symbol.iterator] = X[Symbol.iterator]), ae.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
		te["[object " + t + "]"] = t.toLowerCase()
	});
	var fe = function (e) {
		function t(e, t, n, i) {
			var r, o, s, a, l, c, u, f = t && t.ownerDocument,
				p = t ? t.nodeType : 9;
			if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
			if (!i && ((t ? t.ownerDocument || t : R) !== N && j(t), t = t || N, L)) {
				if (11 !== p && (l = ge.exec(e)))
					if (r = l[1]) {
						if (9 === p) {
							if (!(s = t.getElementById(r))) return n;
							if (s.id === r) return n.push(s), n
						} else if (f && (s = f.getElementById(r)) && O(t, s) && s.id === r) return n.push(s), n
					} else {
						if (l[2]) return J.apply(n, t.getElementsByTagName(e)), n;
						if ((r = l[3]) && x.getElementsByClassName && t.getElementsByClassName) return J.apply(n, t.getElementsByClassName(r)), n
					} if (x.qsa && !W[e + " "] && (!F || !F.test(e))) {
					if (1 !== p) f = t, u = e;
					else if ("object" !== t.nodeName.toLowerCase()) {
						for ((a = t.getAttribute("id")) ? a = a.replace(be, xe) : t.setAttribute("id", a = M), o = (c = A(e)).length; o--;) c[o] = "#" + a + " " + h(c[o]);
						u = c.join(","), f = me.test(e) && d(t.parentNode) || t
					}
					if (u) try {
						return J.apply(n, f.querySelectorAll(u)), n
					} catch (e) {} finally {
						a === M && t.removeAttribute("id")
					}
				}
			}
			return k(e.replace(oe, "$1"), t, n, i)
		}

		function n() {
			function e(n, i) {
				return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = i
			}
			var t = [];
			return e
		}

		function i(e) {
			return e[M] = !0, e
		}

		function r(e) {
			var t = N.createElement("fieldset");
			try {
				return !!e(t)
			} catch (e) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function o(e, t) {
			for (var n = e.split("|"), i = n.length; i--;) w.attrHandle[n[i]] = t
		}

		function s(e, t) {
			var n = t && e,
				i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
			if (i) return i;
			if (n)
				for (; n = n.nextSibling;)
					if (n === t) return -1;
			return e ? 1 : -1
		}

		function a(e) {
			return function (t) {
				return "input" === t.nodeName.toLowerCase() && t.type === e
			}
		}

		function l(e) {
			return function (t) {
				var n = t.nodeName.toLowerCase();
				return ("input" === n || "button" === n) && t.type === e
			}
		}

		function c(e) {
			return function (t) {
				return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Ce(t) === e : t.disabled === e : "label" in t && t.disabled === e
			}
		}

		function u(e) {
			return i(function (t) {
				return t = +t, i(function (n, i) {
					for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
				})
			})
		}

		function d(e) {
			return e && void 0 !== e.getElementsByTagName && e
		}

		function f() {}

		function h(e) {
			for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
			return i
		}

		function p(e, t, n) {
			var i = t.dir,
				r = t.next,
				o = r || i,
				s = n && "parentNode" === o,
				a = _++;
			return t.first ? function (t, n, r) {
				for (; t = t[i];)
					if (1 === t.nodeType || s) return e(t, n, r);
				return !1
			} : function (t, n, l) {
				var c, u, d, f = [$, a];
				if (l) {
					for (; t = t[i];)
						if ((1 === t.nodeType || s) && e(t, n, l)) return !0
				} else
					for (; t = t[i];)
						if (1 === t.nodeType || s)
							if (d = t[M] || (t[M] = {}), u = d[t.uniqueID] || (d[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
							else {
								if ((c = u[o]) && c[0] === $ && c[1] === a) return f[2] = c[2];
								if (u[o] = f, f[2] = e(t, n, l)) return !0
							} return !1
			}
		}

		function g(e) {
			return e.length > 1 ? function (t, n, i) {
				for (var r = e.length; r--;)
					if (!e[r](t, n, i)) return !1;
				return !0
			} : e[0]
		}

		function m(e, t, n, i, r) {
			for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(o = e[a]) && (n && !n(o, i, r) || (s.push(o), c && t.push(a)));
			return s
		}

		function v(e, n, r, o, s, a) {
			return o && !o[M] && (o = v(o)), s && !s[M] && (s = v(s, a)), i(function (i, a, l, c) {
				var u, d, f, h = [],
					p = [],
					g = a.length,
					v = i || function (e, n, i) {
						for (var r = 0, o = n.length; r < o; r++) t(e, n[r], i);
						return i
					}(n || "*", l.nodeType ? [l] : l, []),
					y = !e || !i && n ? v : m(v, h, e, l, c),
					b = r ? s || (i ? e : g || o) ? [] : a : y;
				if (r && r(y, b, l, c), o)
					for (u = m(b, p), o(u, [], l, c), d = u.length; d--;)(f = u[d]) && (b[p[d]] = !(y[p[d]] = f));
				if (i) {
					if (s || e) {
						if (s) {
							for (u = [], d = b.length; d--;)(f = b[d]) && u.push(y[d] = f);
							s(null, b = [], u, c)
						}
						for (d = b.length; d--;)(f = b[d]) && (u = s ? Y(i, f) : h[d]) > -1 && (i[u] = !(a[u] = f))
					}
				} else b = m(b === a ? b.splice(g, b.length) : b), s ? s(null, a, b, c) : J.apply(a, b)
			})
		}

		function y(e) {
			for (var t, n, i, r = e.length, o = w.relative[e[0].type], s = o || w.relative[" "], a = o ? 1 : 0, l = p(function (e) {
					return e === t
				}, s, !0), c = p(function (e) {
					return Y(t, e) > -1
				}, s, !0), u = [function (e, n, i) {
					var r = !o && (i || n !== I) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
					return t = null, r
				}]; a < r; a++)
				if (n = w.relative[e[a].type]) u = [p(g(u), n)];
				else {
					if ((n = w.filter[e[a].type].apply(null, e[a].matches))[M]) {
						for (i = ++a; i < r && !w.relative[e[i].type]; i++);
						return v(a > 1 && g(u), a > 1 && h(e.slice(0, a - 1).concat({
							value: " " === e[a - 2].type ? "*" : ""
						})).replace(oe, "$1"), n, a < i && y(e.slice(a, i)), i < r && y(e = e.slice(i)), i < r && h(e))
					}
					u.push(n)
				} return g(u)
		}
		var b, x, w, C, T, A, S, k, I, P, E, j, N, H, L, F, D, q, O, M = "sizzle" + 1 * new Date,
			R = e.document,
			$ = 0,
			_ = 0,
			z = n(),
			B = n(),
			W = n(),
			Q = function (e, t) {
				return e === t && (E = !0), 0
			},
			V = {}.hasOwnProperty,
			U = [],
			X = U.pop,
			Z = U.push,
			J = U.push,
			G = U.slice,
			Y = function (e, t) {
				for (var n = 0, i = e.length; n < i; n++)
					if (e[n] === t) return n;
				return -1
			},
			K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			ee = "[\\x20\\t\\r\\n\\f]",
			te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
			ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
			ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
			re = new RegExp(ee + "+", "g"),
			oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
			se = new RegExp("^" + ee + "*," + ee + "*"),
			ae = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
			le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
			ce = new RegExp(ie),
			ue = new RegExp("^" + te + "$"),
			de = {
				ID: new RegExp("^#(" + te + ")"),
				CLASS: new RegExp("^\\.(" + te + ")"),
				TAG: new RegExp("^(" + te + "|[*])"),
				ATTR: new RegExp("^" + ne),
				PSEUDO: new RegExp("^" + ie),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + K + ")$", "i"),
				needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
			},
			fe = /^(?:input|select|textarea|button)$/i,
			he = /^h\d$/i,
			pe = /^[^{]+\{\s*\[native \w/,
			ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			me = /[+~]/,
			ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
			ye = function (e, t, n) {
				var i = "0x" + t - 65536;
				return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
			},
			be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
			xe = function (e, t) {
				return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
			},
			we = function () {
				j()
			},
			Ce = p(function (e) {
				return !0 === e.disabled && ("form" in e || "label" in e)
			}, {
				dir: "parentNode",
				next: "legend"
			});
		try {
			J.apply(U = G.call(R.childNodes), R.childNodes), U[R.childNodes.length].nodeType
		} catch (e) {
			J = {
				apply: U.length ? function (e, t) {
					Z.apply(e, G.call(t))
				} : function (e, t) {
					for (var n = e.length, i = 0; e[n++] = t[i++];);
					e.length = n - 1
				}
			}
		}
		x = t.support = {}, T = t.isXML = function (e) {
			var t = e && (e.ownerDocument || e).documentElement;
			return !!t && "HTML" !== t.nodeName
		}, j = t.setDocument = function (e) {
			var t, n, i = e ? e.ownerDocument || e : R;
			return i !== N && 9 === i.nodeType && i.documentElement ? (N = i, H = N.documentElement, L = !T(N), R !== N && (n = N.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), x.attributes = r(function (e) {
				return e.className = "i", !e.getAttribute("className")
			}), x.getElementsByTagName = r(function (e) {
				return e.appendChild(N.createComment("")), !e.getElementsByTagName("*").length
			}), x.getElementsByClassName = pe.test(N.getElementsByClassName), x.getById = r(function (e) {
				return H.appendChild(e).id = M, !N.getElementsByName || !N.getElementsByName(M).length
			}), x.getById ? (w.filter.ID = function (e) {
				var t = e.replace(ve, ye);
				return function (e) {
					return e.getAttribute("id") === t
				}
			}, w.find.ID = function (e, t) {
				if (void 0 !== t.getElementById && L) {
					var n = t.getElementById(e);
					return n ? [n] : []
				}
			}) : (w.filter.ID = function (e) {
				var t = e.replace(ve, ye);
				return function (e) {
					var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
					return n && n.value === t
				}
			}, w.find.ID = function (e, t) {
				if (void 0 !== t.getElementById && L) {
					var n, i, r, o = t.getElementById(e);
					if (o) {
						if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
						for (r = t.getElementsByName(e), i = 0; o = r[i++];)
							if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
					}
					return []
				}
			}), w.find.TAG = x.getElementsByTagName ? function (e, t) {
				return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
			} : function (e, t) {
				var n, i = [],
					r = 0,
					o = t.getElementsByTagName(e);
				if ("*" === e) {
					for (; n = o[r++];) 1 === n.nodeType && i.push(n);
					return i
				}
				return o
			}, w.find.CLASS = x.getElementsByClassName && function (e, t) {
				if (void 0 !== t.getElementsByClassName && L) return t.getElementsByClassName(e)
			}, D = [], F = [], (x.qsa = pe.test(N.querySelectorAll)) && (r(function (e) {
				H.appendChild(e).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + ee + "*(?:value|" + K + ")"), e.querySelectorAll("[id~=" + M + "-]").length || F.push("~="), e.querySelectorAll(":checked").length || F.push(":checked"), e.querySelectorAll("a#" + M + "+*").length || F.push(".#.+[+~]")
			}), r(function (e) {
				e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
				var t = N.createElement("input");
				t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && F.push(":enabled", ":disabled"), H.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
			})), (x.matchesSelector = pe.test(q = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && r(function (e) {
				x.disconnectedMatch = q.call(e, "*"), q.call(e, "[s!='']:x"), D.push("!=", ie)
			}), F = F.length && new RegExp(F.join("|")), D = D.length && new RegExp(D.join("|")), t = pe.test(H.compareDocumentPosition), O = t || pe.test(H.contains) ? function (e, t) {
				var n = 9 === e.nodeType ? e.documentElement : e,
					i = t && t.parentNode;
				return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
			} : function (e, t) {
				if (t)
					for (; t = t.parentNode;)
						if (t === e) return !0;
				return !1
			}, Q = t ? function (e, t) {
				if (e === t) return E = !0, 0;
				var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
				return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === N || e.ownerDocument === R && O(R, e) ? -1 : t === N || t.ownerDocument === R && O(R, t) ? 1 : P ? Y(P, e) - Y(P, t) : 0 : 4 & n ? -1 : 1)
			} : function (e, t) {
				if (e === t) return E = !0, 0;
				var n, i = 0,
					r = e.parentNode,
					o = t.parentNode,
					a = [e],
					l = [t];
				if (!r || !o) return e === N ? -1 : t === N ? 1 : r ? -1 : o ? 1 : P ? Y(P, e) - Y(P, t) : 0;
				if (r === o) return s(e, t);
				for (n = e; n = n.parentNode;) a.unshift(n);
				for (n = t; n = n.parentNode;) l.unshift(n);
				for (; a[i] === l[i];) i++;
				return i ? s(a[i], l[i]) : a[i] === R ? -1 : l[i] === R ? 1 : 0
			}, N) : N
		}, t.matches = function (e, n) {
			return t(e, null, null, n)
		}, t.matchesSelector = function (e, n) {
			if ((e.ownerDocument || e) !== N && j(e), n = n.replace(le, "='$1']"), x.matchesSelector && L && !W[n + " "] && (!D || !D.test(n)) && (!F || !F.test(n))) try {
				var i = q.call(e, n);
				if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
			} catch (e) {}
			return t(n, N, null, [e]).length > 0
		}, t.contains = function (e, t) {
			return (e.ownerDocument || e) !== N && j(e), O(e, t)
		}, t.attr = function (e, t) {
			(e.ownerDocument || e) !== N && j(e);
			var n = w.attrHandle[t.toLowerCase()],
				i = n && V.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !L) : void 0;
			return void 0 !== i ? i : x.attributes || !L ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
		}, t.escape = function (e) {
			return (e + "").replace(be, xe)
		}, t.error = function (e) {
			throw new Error("Syntax error, unrecognized expression: " + e)
		}, t.uniqueSort = function (e) {
			var t, n = [],
				i = 0,
				r = 0;
			if (E = !x.detectDuplicates, P = !x.sortStable && e.slice(0), e.sort(Q), E) {
				for (; t = e[r++];) t === e[r] && (i = n.push(r));
				for (; i--;) e.splice(n[i], 1)
			}
			return P = null, e
		}, C = t.getText = function (e) {
			var t, n = "",
				i = 0,
				r = e.nodeType;
			if (r) {
				if (1 === r || 9 === r || 11 === r) {
					if ("string" == typeof e.textContent) return e.textContent;
					for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
				} else if (3 === r || 4 === r) return e.nodeValue
			} else
				for (; t = e[i++];) n += C(t);
			return n
		}, (w = t.selectors = {
			cacheLength: 50,
			createPseudo: i,
			match: de,
			attrHandle: {},
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function (e) {
					return e[1] = e[1].replace(ve, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(ve, ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
				},
				CHILD: function (e) {
					return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
				},
				PSEUDO: function (e) {
					var t, n = !e[6] && e[2];
					return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = A(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
				}
			},
			filter: {
				TAG: function (e) {
					var t = e.replace(ve, ye).toLowerCase();
					return "*" === e ? function () {
						return !0
					} : function (e) {
						return e.nodeName && e.nodeName.toLowerCase() === t
					}
				},
				CLASS: function (e) {
					var t = z[e + " "];
					return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && z(e, function (e) {
						return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
					})
				},
				ATTR: function (e, n, i) {
					return function (r) {
						var o = t.attr(r, e);
						return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(re, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
					}
				},
				CHILD: function (e, t, n, i, r) {
					var o = "nth" !== e.slice(0, 3),
						s = "last" !== e.slice(-4),
						a = "of-type" === t;
					return 1 === i && 0 === r ? function (e) {
						return !!e.parentNode
					} : function (t, n, l) {
						var c, u, d, f, h, p, g = o !== s ? "nextSibling" : "previousSibling",
							m = t.parentNode,
							v = a && t.nodeName.toLowerCase(),
							y = !l && !a,
							b = !1;
						if (m) {
							if (o) {
								for (; g;) {
									for (f = t; f = f[g];)
										if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
									p = g = "only" === e && !p && "nextSibling"
								}
								return !0
							}
							if (p = [s ? m.firstChild : m.lastChild], s && y) {
								for (b = (h = (c = (u = (d = (f = m)[M] || (f[M] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === $ && c[1]) && c[2], f = h && m.childNodes[h]; f = ++h && f && f[g] || (b = h = 0) || p.pop();)
									if (1 === f.nodeType && ++b && f === t) {
										u[e] = [$, h, b];
										break
									}
							} else if (y && (f = t, d = f[M] || (f[M] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), c = u[e] || [], h = c[0] === $ && c[1], b = h), !1 === b)
								for (;
									(f = ++h && f && f[g] || (b = h = 0) || p.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && (d = f[M] || (f[M] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), u[e] = [$, b]), f !== t)););
							return (b -= r) === i || b % i == 0 && b / i >= 0
						}
					}
				},
				PSEUDO: function (e, n) {
					var r, o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
					return o[M] ? o(n) : o.length > 1 ? (r = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
						for (var i, r = o(e, n), s = r.length; s--;) i = Y(e, r[s]), e[i] = !(t[i] = r[s])
					}) : function (e) {
						return o(e, 0, r)
					}) : o
				}
			},
			pseudos: {
				not: i(function (e) {
					var t = [],
						n = [],
						r = S(e.replace(oe, "$1"));
					return r[M] ? i(function (e, t, n, i) {
						for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
					}) : function (e, i, o) {
						return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
					}
				}),
				has: i(function (e) {
					return function (n) {
						return t(e, n).length > 0
					}
				}),
				contains: i(function (e) {
					return e = e.replace(ve, ye),
						function (t) {
							return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
						}
				}),
				lang: i(function (e) {
					return ue.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ve, ye).toLowerCase(),
						function (t) {
							var n;
							do {
								if (n = L ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
							} while ((t = t.parentNode) && 1 === t.nodeType);
							return !1
						}
				}),
				target: function (t) {
					var n = e.location && e.location.hash;
					return n && n.slice(1) === t.id
				},
				root: function (e) {
					return e === H
				},
				focus: function (e) {
					return e === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
				},
				enabled: c(!1),
				disabled: c(!0),
				checked: function (e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && !!e.checked || "option" === t && !!e.selected
				},
				selected: function (e) {
					return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
				},
				empty: function (e) {
					for (e = e.firstChild; e; e = e.nextSibling)
						if (e.nodeType < 6) return !1;
					return !0
				},
				parent: function (e) {
					return !w.pseudos.empty(e)
				},
				header: function (e) {
					return he.test(e.nodeName)
				},
				input: function (e) {
					return fe.test(e.nodeName)
				},
				button: function (e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && "button" === e.type || "button" === t
				},
				text: function (e) {
					var t;
					return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
				},
				first: u(function () {
					return [0]
				}),
				last: u(function (e, t) {
					return [t - 1]
				}),
				eq: u(function (e, t, n) {
					return [n < 0 ? n + t : n]
				}),
				even: u(function (e, t) {
					for (var n = 0; n < t; n += 2) e.push(n);
					return e
				}),
				odd: u(function (e, t) {
					for (var n = 1; n < t; n += 2) e.push(n);
					return e
				}),
				lt: u(function (e, t, n) {
					for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
					return e
				}),
				gt: u(function (e, t, n) {
					for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
					return e
				})
			}
		}).pseudos.nth = w.pseudos.eq;
		for (b in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) w.pseudos[b] = a(b);
		for (b in {
				submit: !0,
				reset: !0
			}) w.pseudos[b] = l(b);
		return f.prototype = w.filters = w.pseudos, w.setFilters = new f, A = t.tokenize = function (e, n) {
			var i, r, o, s, a, l, c, u = B[e + " "];
			if (u) return n ? 0 : u.slice(0);
			for (a = e, l = [], c = w.preFilter; a;) {
				i && !(r = se.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = ae.exec(a)) && (i = r.shift(), o.push({
					value: i,
					type: r[0].replace(oe, " ")
				}), a = a.slice(i.length));
				for (s in w.filter) !(r = de[s].exec(a)) || c[s] && !(r = c[s](r)) || (i = r.shift(), o.push({
					value: i,
					type: s,
					matches: r
				}), a = a.slice(i.length));
				if (!i) break
			}
			return n ? a.length : a ? t.error(e) : B(e, l).slice(0)
		}, S = t.compile = function (e, n) {
			var r, o = [],
				s = [],
				a = W[e + " "];
			if (!a) {
				for (n || (n = A(e)), r = n.length; r--;)(a = y(n[r]))[M] ? o.push(a) : s.push(a);
				(a = W(e, function (e, n) {
					var r = n.length > 0,
						o = e.length > 0,
						s = function (i, s, a, l, c) {
							var u, d, f, h = 0,
								p = "0",
								g = i && [],
								v = [],
								y = I,
								b = i || o && w.find.TAG("*", c),
								x = $ += null == y ? 1 : Math.random() || .1,
								C = b.length;
							for (c && (I = s === N || s || c); p !== C && null != (u = b[p]); p++) {
								if (o && u) {
									for (d = 0, s || u.ownerDocument === N || (j(u), a = !L); f = e[d++];)
										if (f(u, s || N, a)) {
											l.push(u);
											break
										} c && ($ = x)
								}
								r && ((u = !f && u) && h--, i && g.push(u))
							}
							if (h += p, r && p !== h) {
								for (d = 0; f = n[d++];) f(g, v, s, a);
								if (i) {
									if (h > 0)
										for (; p--;) g[p] || v[p] || (v[p] = X.call(l));
									v = m(v)
								}
								J.apply(l, v), c && !i && v.length > 0 && h + n.length > 1 && t.uniqueSort(l)
							}
							return c && ($ = x, I = y), g
						};
					return r ? i(s) : s
				}(s, o))).selector = e
			}
			return a
		}, k = t.select = function (e, t, n, i) {
			var r, o, s, a, l, c = "function" == typeof e && e,
				u = !i && A(e = c.selector || e);
			if (n = n || [], 1 === u.length) {
				if ((o = u[0] = u[0].slice(0)).length > 2 && "ID" === (s = o[0]).type && 9 === t.nodeType && L && w.relative[o[1].type]) {
					if (!(t = (w.find.ID(s.matches[0].replace(ve, ye), t) || [])[0])) return n;
					c && (t = t.parentNode), e = e.slice(o.shift().value.length)
				}
				for (r = de.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !w.relative[a = s.type]);)
					if ((l = w.find[a]) && (i = l(s.matches[0].replace(ve, ye), me.test(o[0].type) && d(t.parentNode) || t))) {
						if (o.splice(r, 1), !(e = i.length && h(o))) return J.apply(n, i), n;
						break
					}
			}
			return (c || S(e, u))(i, t, !L, n, !t || me.test(e) && d(t.parentNode) || t), n
		}, x.sortStable = M.split("").sort(Q).join("") === M, x.detectDuplicates = !!E, j(), x.sortDetached = r(function (e) {
			return 1 & e.compareDocumentPosition(N.createElement("fieldset"))
		}), r(function (e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		}) || o("type|href|height|width", function (e, t, n) {
			if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		}), x.attributes && r(function (e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
		}) || o("value", function (e, t, n) {
			if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
		}), r(function (e) {
			return null == e.getAttribute("disabled")
		}) || o(K, function (e, t, n) {
			var i;
			if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
		}), t
	}(e);
	ae.find = fe, ae.expr = fe.selectors, ae.expr[":"] = ae.expr.pseudos, ae.uniqueSort = ae.unique = fe.uniqueSort, ae.text = fe.getText, ae.isXMLDoc = fe.isXML, ae.contains = fe.contains, ae.escapeSelector = fe.escape;
	var he = function (e, t, n) {
			for (var i = [], r = void 0 !== n;
				(e = e[t]) && 9 !== e.nodeType;)
				if (1 === e.nodeType) {
					if (r && ae(e).is(n)) break;
					i.push(e)
				} return i
		},
		pe = function (e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		},
		ge = ae.expr.match.needsContext,
		me = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
		ve = /^.[^:#\[\.,]*$/;
	ae.filter = function (e, t, n) {
		var i = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? ae.find.matchesSelector(i, e) ? [i] : [] : ae.find.matches(e, ae.grep(t, function (e) {
			return 1 === e.nodeType
		}))
	}, ae.fn.extend({
		find: function (e) {
			var t, n, i = this.length,
				r = this;
			if ("string" != typeof e) return this.pushStack(ae(e).filter(function () {
				for (t = 0; t < i; t++)
					if (ae.contains(r[t], this)) return !0
			}));
			for (n = this.pushStack([]), t = 0; t < i; t++) ae.find(e, r[t], n);
			return i > 1 ? ae.uniqueSort(n) : n
		},
		filter: function (e) {
			return this.pushStack(o(this, e || [], !1))
		},
		not: function (e) {
			return this.pushStack(o(this, e || [], !0))
		},
		is: function (e) {
			return !!o(this, "string" == typeof e && ge.test(e) ? ae(e) : e || [], !1).length
		}
	});
	var ye, be = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
	(ae.fn.init = function (e, t, n) {
		var i, r;
		if (!e) return this;
		if (n = n || ye, "string" == typeof e) {
			if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : be.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
			if (i[1]) {
				if (t = t instanceof ae ? t[0] : t, ae.merge(this, ae.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : Z, !0)), me.test(i[1]) && ae.isPlainObject(t))
					for (i in t) ae.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
				return this
			}
			return (r = Z.getElementById(i[2])) && (this[0] = r, this.length = 1), this
		}
		return e.nodeType ? (this[0] = e, this.length = 1, this) : ae.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(ae) : ae.makeArray(e, this)
	}).prototype = ae.fn, ye = ae(Z);
	var xe = /^(?:parents|prev(?:Until|All))/,
		we = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	ae.fn.extend({
		has: function (e) {
			var t = ae(e, this),
				n = t.length;
			return this.filter(function () {
				for (var e = 0; e < n; e++)
					if (ae.contains(this, t[e])) return !0
			})
		},
		closest: function (e, t) {
			var n, i = 0,
				r = this.length,
				o = [],
				s = "string" != typeof e && ae(e);
			if (!ge.test(e))
				for (; i < r; i++)
					for (n = this[i]; n && n !== t; n = n.parentNode)
						if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ae.find.matchesSelector(n, e))) {
							o.push(n);
							break
						} return this.pushStack(o.length > 1 ? ae.uniqueSort(o) : o)
		},
		index: function (e) {
			return e ? "string" == typeof e ? ee.call(ae(e), this[0]) : ee.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function (e, t) {
			return this.pushStack(ae.uniqueSort(ae.merge(this.get(), ae(e, t))))
		},
		addBack: function (e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), ae.each({
		parent: function (e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function (e) {
			return he(e, "parentNode")
		},
		parentsUntil: function (e, t, n) {
			return he(e, "parentNode", n)
		},
		next: function (e) {
			return s(e, "nextSibling")
		},
		prev: function (e) {
			return s(e, "previousSibling")
		},
		nextAll: function (e) {
			return he(e, "nextSibling")
		},
		prevAll: function (e) {
			return he(e, "previousSibling")
		},
		nextUntil: function (e, t, n) {
			return he(e, "nextSibling", n)
		},
		prevUntil: function (e, t, n) {
			return he(e, "previousSibling", n)
		},
		siblings: function (e) {
			return pe((e.parentNode || {}).firstChild, e)
		},
		children: function (e) {
			return pe(e.firstChild)
		},
		contents: function (e) {
			return r(e, "iframe") ? e.contentDocument : (r(e, "template") && (e = e.content || e), ae.merge([], e.childNodes))
		}
	}, function (e, t) {
		ae.fn[e] = function (n, i) {
			var r = ae.map(this, t, n);
			return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = ae.filter(i, r)), this.length > 1 && (we[e] || ae.uniqueSort(r), xe.test(e) && r.reverse()), this.pushStack(r)
		}
	});
	var Ce = /[^\x20\t\r\n\f]+/g;
	ae.Callbacks = function (e) {
		e = "string" == typeof e ? function (e) {
			var t = {};
			return ae.each(e.match(Ce) || [], function (e, n) {
				t[n] = !0
			}), t
		}(e) : ae.extend({}, e);
		var t, n, i, r, o = [],
			s = [],
			a = -1,
			l = function () {
				for (r = r || e.once, i = t = !0; s.length; a = -1)
					for (n = s.shift(); ++a < o.length;) !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && (a = o.length, n = !1);
				e.memory || (n = !1), t = !1, r && (o = n ? [] : "")
			},
			c = {
				add: function () {
					return o && (n && !t && (a = o.length - 1, s.push(n)), function t(n) {
						ae.each(n, function (n, i) {
							ae.isFunction(i) ? e.unique && c.has(i) || o.push(i) : i && i.length && "string" !== ae.type(i) && t(i)
						})
					}(arguments), n && !t && l()), this
				},
				remove: function () {
					return ae.each(arguments, function (e, t) {
						for (var n;
							(n = ae.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= a && a--
					}), this
				},
				has: function (e) {
					return e ? ae.inArray(e, o) > -1 : o.length > 0
				},
				empty: function () {
					return o && (o = []), this
				},
				disable: function () {
					return r = s = [], o = n = "", this
				},
				disabled: function () {
					return !o
				},
				lock: function () {
					return r = s = [], n || t || (o = n = ""), this
				},
				locked: function () {
					return !!r
				},
				fireWith: function (e, n) {
					return r || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || l()), this
				},
				fire: function () {
					return c.fireWith(this, arguments), this
				},
				fired: function () {
					return !!i
				}
			};
		return c
	}, ae.extend({
		Deferred: function (t) {
			var n = [
					["notify", "progress", ae.Callbacks("memory"), ae.Callbacks("memory"), 2],
					["resolve", "done", ae.Callbacks("once memory"), ae.Callbacks("once memory"), 0, "resolved"],
					["reject", "fail", ae.Callbacks("once memory"), ae.Callbacks("once memory"), 1, "rejected"]
				],
				i = "pending",
				r = {
					state: function () {
						return i
					},
					always: function () {
						return o.done(arguments).fail(arguments), this
					},
					catch: function (e) {
						return r.then(null, e)
					},
					pipe: function () {
						var e = arguments;
						return ae.Deferred(function (t) {
							ae.each(n, function (n, i) {
								var r = ae.isFunction(e[i[4]]) && e[i[4]];
								o[i[1]](function () {
									var e = r && r.apply(this, arguments);
									e && ae.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					then: function (t, i, r) {
						function o(t, n, i, r) {
							return function () {
								var c = this,
									u = arguments,
									d = function () {
										var e, d;
										if (!(t < s)) {
											if ((e = i.apply(c, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
											d = e && ("object" == typeof e || "function" == typeof e) && e.then, ae.isFunction(d) ? r ? d.call(e, o(s, n, a, r), o(s, n, l, r)) : (s++, d.call(e, o(s, n, a, r), o(s, n, l, r), o(s, n, a, n.notifyWith))) : (i !== a && (c = void 0, u = [e]), (r || n.resolveWith)(c, u))
										}
									},
									f = r ? d : function () {
										try {
											d()
										} catch (e) {
											ae.Deferred.exceptionHook && ae.Deferred.exceptionHook(e, f.stackTrace), t + 1 >= s && (i !== l && (c = void 0, u = [e]), n.rejectWith(c, u))
										}
									};
								t ? f() : (ae.Deferred.getStackHook && (f.stackTrace = ae.Deferred.getStackHook()), e.setTimeout(f))
							}
						}
						var s = 0;
						return ae.Deferred(function (e) {
							n[0][3].add(o(0, e, ae.isFunction(r) ? r : a, e.notifyWith)), n[1][3].add(o(0, e, ae.isFunction(t) ? t : a)), n[2][3].add(o(0, e, ae.isFunction(i) ? i : l))
						}).promise()
					},
					promise: function (e) {
						return null != e ? ae.extend(e, r) : r
					}
				},
				o = {};
			return ae.each(n, function (e, t) {
				var s = t[2],
					a = t[5];
				r[t[1]] = s.add, a && s.add(function () {
					i = a
				}, n[3 - e][2].disable, n[0][2].lock), s.add(t[3].fire), o[t[0]] = function () {
					return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
				}, o[t[0] + "With"] = s.fireWith
			}), r.promise(o), t && t.call(o, o), o
		},
		when: function (e) {
			var t = arguments.length,
				n = t,
				i = Array(n),
				r = G.call(arguments),
				o = ae.Deferred(),
				s = function (e) {
					return function (n) {
						i[e] = this, r[e] = arguments.length > 1 ? G.call(arguments) : n, --t || o.resolveWith(i, r)
					}
				};
			if (t <= 1 && (c(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || ae.isFunction(r[n] && r[n].then))) return o.then();
			for (; n--;) c(r[n], s(n), o.reject);
			return o.promise()
		}
	});
	var Te = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	ae.Deferred.exceptionHook = function (t, n) {
		e.console && e.console.warn && t && Te.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
	}, ae.readyException = function (t) {
		e.setTimeout(function () {
			throw t
		})
	};
	var Ae = ae.Deferred();
	ae.fn.ready = function (e) {
		return Ae.then(e).catch(function (e) {
			ae.readyException(e)
		}), this
	}, ae.extend({
		isReady: !1,
		readyWait: 1,
		ready: function (e) {
			(!0 === e ? --ae.readyWait : ae.isReady) || (ae.isReady = !0, !0 !== e && --ae.readyWait > 0 || Ae.resolveWith(Z, [ae]))
		}
	}), ae.ready.then = Ae.then, "complete" === Z.readyState || "loading" !== Z.readyState && !Z.documentElement.doScroll ? e.setTimeout(ae.ready) : (Z.addEventListener("DOMContentLoaded", u), e.addEventListener("load", u));
	var Se = function (e, t, n, i, r, o, s) {
			var a = 0,
				l = e.length,
				c = null == n;
			if ("object" === ae.type(n)) {
				r = !0;
				for (a in n) Se(e, t, a, n[a], !0, o, s)
			} else if (void 0 !== i && (r = !0, ae.isFunction(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
					return c.call(ae(e), n)
				})), t))
				for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
			return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
		},
		ke = function (e) {
			return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
		};
	d.uid = 1, d.prototype = {
		cache: function (e) {
			var t = e[this.expando];
			return t || (t = {}, ke(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
				value: t,
				configurable: !0
			}))), t
		},
		set: function (e, t, n) {
			var i, r = this.cache(e);
			if ("string" == typeof t) r[ae.camelCase(t)] = n;
			else
				for (i in t) r[ae.camelCase(i)] = t[i];
			return r
		},
		get: function (e, t) {
			return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][ae.camelCase(t)]
		},
		access: function (e, t, n) {
			return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
		},
		remove: function (e, t) {
			var n, i = e[this.expando];
			if (void 0 !== i) {
				if (void 0 !== t) {
					Array.isArray(t) ? t = t.map(ae.camelCase) : (t = ae.camelCase(t), t = t in i ? [t] : t.match(Ce) || []), n = t.length;
					for (; n--;) delete i[t[n]]
				}(void 0 === t || ae.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
			}
		},
		hasData: function (e) {
			var t = e[this.expando];
			return void 0 !== t && !ae.isEmptyObject(t)
		}
	};
	var Ie = new d,
		Pe = new d,
		Ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		je = /[A-Z]/g;
	ae.extend({
		hasData: function (e) {
			return Pe.hasData(e) || Ie.hasData(e)
		},
		data: function (e, t, n) {
			return Pe.access(e, t, n)
		},
		removeData: function (e, t) {
			Pe.remove(e, t)
		},
		_data: function (e, t, n) {
			return Ie.access(e, t, n)
		},
		_removeData: function (e, t) {
			Ie.remove(e, t)
		}
	}), ae.fn.extend({
		data: function (e, t) {
			var n, i, r, o = this[0],
				s = o && o.attributes;
			if (void 0 === e) {
				if (this.length && (r = Pe.get(o), 1 === o.nodeType && !Ie.get(o, "hasDataAttrs"))) {
					for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = ae.camelCase(i.slice(5)), f(o, i, r[i]));
					Ie.set(o, "hasDataAttrs", !0)
				}
				return r
			}
			return "object" == typeof e ? this.each(function () {
				Pe.set(this, e)
			}) : Se(this, function (t) {
				var n;
				if (o && void 0 === t) {
					if (void 0 !== (n = Pe.get(o, e))) return n;
					if (void 0 !== (n = f(o, e))) return n
				} else this.each(function () {
					Pe.set(this, e, t)
				})
			}, null, t, arguments.length > 1, null, !0)
		},
		removeData: function (e) {
			return this.each(function () {
				Pe.remove(this, e)
			})
		}
	}), ae.extend({
		queue: function (e, t, n) {
			var i;
			if (e) return t = (t || "fx") + "queue", i = Ie.get(e, t), n && (!i || Array.isArray(n) ? i = Ie.access(e, t, ae.makeArray(n)) : i.push(n)), i || []
		},
		dequeue: function (e, t) {
			t = t || "fx";
			var n = ae.queue(e, t),
				i = n.length,
				r = n.shift(),
				o = ae._queueHooks(e, t);
			"inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function () {
				ae.dequeue(e, t)
			}, o)), !i && o && o.empty.fire()
		},
		_queueHooks: function (e, t) {
			var n = t + "queueHooks";
			return Ie.get(e, n) || Ie.access(e, n, {
				empty: ae.Callbacks("once memory").add(function () {
					Ie.remove(e, [t + "queue", n])
				})
			})
		}
	}), ae.fn.extend({
		queue: function (e, t) {
			var n = 2;
			return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ae.queue(this[0], e) : void 0 === t ? this : this.each(function () {
				var n = ae.queue(this, e, t);
				ae._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ae.dequeue(this, e)
			})
		},
		dequeue: function (e) {
			return this.each(function () {
				ae.dequeue(this, e)
			})
		},
		clearQueue: function (e) {
			return this.queue(e || "fx", [])
		},
		promise: function (e, t) {
			var n, i = 1,
				r = ae.Deferred(),
				o = this,
				s = this.length,
				a = function () {
					--i || r.resolveWith(o, [o])
				};
			for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = Ie.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
			return a(), r.promise(t)
		}
	});
	var Ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		He = new RegExp("^(?:([+-])=|)(" + Ne + ")([a-z%]*)$", "i"),
		Le = ["Top", "Right", "Bottom", "Left"],
		Fe = function (e, t) {
			return "none" === (e = t || e).style.display || "" === e.style.display && ae.contains(e.ownerDocument, e) && "none" === ae.css(e, "display")
		},
		De = function (e, t, n, i) {
			var r, o, s = {};
			for (o in t) s[o] = e.style[o], e.style[o] = t[o];
			r = n.apply(e, i || []);
			for (o in t) e.style[o] = s[o];
			return r
		},
		qe = {};
	ae.fn.extend({
		show: function () {
			return g(this, !0)
		},
		hide: function () {
			return g(this)
		},
		toggle: function (e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
				Fe(this) ? ae(this).show() : ae(this).hide()
			})
		}
	});
	var Oe = /^(?:checkbox|radio)$/i,
		Me = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
		Re = /^$|\/(?:java|ecma)script/i,
		$e = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
	$e.optgroup = $e.option, $e.tbody = $e.tfoot = $e.colgroup = $e.caption = $e.thead, $e.th = $e.td;
	var _e = /<|&#?\w+;/;
	! function () {
		var e = Z.createDocumentFragment().appendChild(Z.createElement("div")),
			t = Z.createElement("input");
		t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), se.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", se.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
	}();
	var ze = Z.documentElement,
		Be = /^key/,
		We = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		Qe = /^([^.]*)(?:\.(.+)|)/;
	ae.event = {
		global: {},
		add: function (e, t, n, i, r) {
			var o, s, a, l, c, u, d, f, h, p, g, m = Ie.get(e);
			if (m)
				for (n.handler && (o = n, n = o.handler, r = o.selector), r && ae.find.matchesSelector(ze, r), n.guid || (n.guid = ae.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function (t) {
						return void 0 !== ae && ae.event.triggered !== t.type ? ae.event.dispatch.apply(e, arguments) : void 0
					}), c = (t = (t || "").match(Ce) || [""]).length; c--;) a = Qe.exec(t[c]) || [], h = g = a[1], p = (a[2] || "").split(".").sort(), h && (d = ae.event.special[h] || {}, h = (r ? d.delegateType : d.bindType) || h, d = ae.event.special[h] || {}, u = ae.extend({
					type: h,
					origType: g,
					data: i,
					handler: n,
					guid: n.guid,
					selector: r,
					needsContext: r && ae.expr.match.needsContext.test(r),
					namespace: p.join(".")
				}, o), (f = l[h]) || (f = l[h] = [], f.delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(h, s)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, u) : f.push(u), ae.event.global[h] = !0)
		},
		remove: function (e, t, n, i, r) {
			var o, s, a, l, c, u, d, f, h, p, g, m = Ie.hasData(e) && Ie.get(e);
			if (m && (l = m.events)) {
				for (c = (t = (t || "").match(Ce) || [""]).length; c--;)
					if (a = Qe.exec(t[c]) || [], h = g = a[1], p = (a[2] || "").split(".").sort(), h) {
						for (d = ae.event.special[h] || {}, f = l[h = (i ? d.delegateType : d.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = f.length; o--;) u = f[o], !r && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (f.splice(o, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
						s && !f.length && (d.teardown && !1 !== d.teardown.call(e, p, m.handle) || ae.removeEvent(e, h, m.handle), delete l[h])
					} else
						for (h in l) ae.event.remove(e, h + t[c], n, i, !0);
				ae.isEmptyObject(l) && Ie.remove(e, "handle events")
			}
		},
		dispatch: function (e) {
			var t, n, i, r, o, s, a = ae.event.fix(e),
				l = new Array(arguments.length),
				c = (Ie.get(this, "events") || {})[a.type] || [],
				u = ae.event.special[a.type] || {};
			for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
			if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
				for (s = ae.event.handlers.call(this, a, c), t = 0;
					(r = s[t++]) && !a.isPropagationStopped();)
					for (a.currentTarget = r.elem, n = 0;
						(o = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (i = ((ae.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
				return u.postDispatch && u.postDispatch.call(this, a), a.result
			}
		},
		handlers: function (e, t) {
			var n, i, r, o, s, a = [],
				l = t.delegateCount,
				c = e.target;
			if (l && c.nodeType && !("click" === e.type && e.button >= 1))
				for (; c !== this; c = c.parentNode || this)
					if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
						for (o = [], s = {}, n = 0; n < l; n++) i = t[n], r = i.selector + " ", void 0 === s[r] && (s[r] = i.needsContext ? ae(r, this).index(c) > -1 : ae.find(r, this, null, [c]).length), s[r] && o.push(i);
						o.length && a.push({
							elem: c,
							handlers: o
						})
					} return c = this, l < t.length && a.push({
				elem: c,
				handlers: t.slice(l)
			}), a
		},
		addProp: function (e, t) {
			Object.defineProperty(ae.Event.prototype, e, {
				enumerable: !0,
				configurable: !0,
				get: ae.isFunction(t) ? function () {
					if (this.originalEvent) return t(this.originalEvent)
				} : function () {
					if (this.originalEvent) return this.originalEvent[e]
				},
				set: function (t) {
					Object.defineProperty(this, e, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: t
					})
				}
			})
		},
		fix: function (e) {
			return e[ae.expando] ? e : new ae.Event(e)
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function () {
					if (this !== w() && this.focus) return this.focus(), !1
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function () {
					if (this === w() && this.blur) return this.blur(), !1
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function () {
					if ("checkbox" === this.type && this.click && r(this, "input")) return this.click(), !1
				},
				_default: function (e) {
					return r(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function (e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		}
	}, ae.removeEvent = function (e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n)
	}, ae.Event = function (e, t) {
		return this instanceof ae.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? b : x, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && ae.extend(this, t), this.timeStamp = e && e.timeStamp || ae.now(), void(this[ae.expando] = !0)) : new ae.Event(e, t)
	}, ae.Event.prototype = {
		constructor: ae.Event,
		isDefaultPrevented: x,
		isPropagationStopped: x,
		isImmediatePropagationStopped: x,
		isSimulated: !1,
		preventDefault: function () {
			var e = this.originalEvent;
			this.isDefaultPrevented = b, e && !this.isSimulated && e.preventDefault()
		},
		stopPropagation: function () {
			var e = this.originalEvent;
			this.isPropagationStopped = b, e && !this.isSimulated && e.stopPropagation()
		},
		stopImmediatePropagation: function () {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = b, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, ae.each({
		altKey: !0,
		bubbles: !0,
		cancelable: !0,
		changedTouches: !0,
		ctrlKey: !0,
		detail: !0,
		eventPhase: !0,
		metaKey: !0,
		pageX: !0,
		pageY: !0,
		shiftKey: !0,
		view: !0,
		char: !0,
		charCode: !0,
		key: !0,
		keyCode: !0,
		button: !0,
		buttons: !0,
		clientX: !0,
		clientY: !0,
		offsetX: !0,
		offsetY: !0,
		pointerId: !0,
		pointerType: !0,
		screenX: !0,
		screenY: !0,
		targetTouches: !0,
		toElement: !0,
		touches: !0,
		which: function (e) {
			var t = e.button;
			return null == e.which && Be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && We.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
		}
	}, ae.event.addProp), ae.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function (e, t) {
		ae.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function (e) {
				var n, i = e.relatedTarget,
					r = e.handleObj;
				return i && (i === this || ae.contains(this, i)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
			}
		}
	}), ae.fn.extend({
		on: function (e, t, n, i) {
			return C(this, e, t, n, i)
		},
		one: function (e, t, n, i) {
			return C(this, e, t, n, i, 1)
		},
		off: function (e, t, n) {
			var i, r;
			if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ae(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
			if ("object" == typeof e) {
				for (r in e) this.off(r, t, e[r]);
				return this
			}
			return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = x), this.each(function () {
				ae.event.remove(this, e, n, t)
			})
		}
	});
	var Ve = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
		Ue = /<script|<style|<link/i,
		Xe = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Ze = /^true\/(.*)/,
		Je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	ae.extend({
		htmlPrefilter: function (e) {
			return e.replace(Ve, "<$1></$2>")
		},
		clone: function (e, t, n) {
			var i, r, o, s, a = e.cloneNode(!0),
				l = ae.contains(e.ownerDocument, e);
			if (!(se.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ae.isXMLDoc(e)))
				for (s = m(a), o = m(e), i = 0, r = o.length; i < r; i++) I(o[i], s[i]);
			if (t)
				if (n)
					for (o = o || m(e), s = s || m(a), i = 0, r = o.length; i < r; i++) k(o[i], s[i]);
				else k(e, a);
			return (s = m(a, "script")).length > 0 && v(s, !l && m(e, "script")), a
		},
		cleanData: function (e) {
			for (var t, n, i, r = ae.event.special, o = 0; void 0 !== (n = e[o]); o++)
				if (ke(n)) {
					if (t = n[Ie.expando]) {
						if (t.events)
							for (i in t.events) r[i] ? ae.event.remove(n, i) : ae.removeEvent(n, i, t.handle);
						n[Ie.expando] = void 0
					}
					n[Pe.expando] && (n[Pe.expando] = void 0)
				}
		}
	}), ae.fn.extend({
		detach: function (e) {
			return E(this, e, !0)
		},
		remove: function (e) {
			return E(this, e)
		},
		text: function (e) {
			return Se(this, function (e) {
				return void 0 === e ? ae.text(this) : this.empty().each(function () {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
				})
			}, null, e, arguments.length)
		},
		append: function () {
			return P(this, arguments, function (e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					T(this, e).appendChild(e)
				}
			})
		},
		prepend: function () {
			return P(this, arguments, function (e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = T(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function () {
			return P(this, arguments, function (e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function () {
			return P(this, arguments, function (e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		empty: function () {
			for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ae.cleanData(m(e, !1)), e.textContent = "");
			return this
		},
		clone: function (e, t) {
			return e = null != e && e, t = null == t ? e : t, this.map(function () {
				return ae.clone(this, e, t)
			})
		},
		html: function (e) {
			return Se(this, function (e) {
				var t = this[0] || {},
					n = 0,
					i = this.length;
				if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
				if ("string" == typeof e && !Ue.test(e) && !$e[(Me.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = ae.htmlPrefilter(e);
					try {
						for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (ae.cleanData(m(t, !1)), t.innerHTML = e);
						t = 0
					} catch (e) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function () {
			var e = [];
			return P(this, arguments, function (t) {
				var n = this.parentNode;
				ae.inArray(this, e) < 0 && (ae.cleanData(m(this)), n && n.replaceChild(t, this))
			}, e)
		}
	}), ae.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (e, t) {
		ae.fn[e] = function (e) {
			for (var n, i = [], r = ae(e), o = r.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), ae(r[s])[t](n), K.apply(i, n.get());
			return this.pushStack(i)
		}
	});
	var Ge = /^margin/,
		Ye = new RegExp("^(" + Ne + ")(?!px)[a-z%]+$", "i"),
		Ke = function (t) {
			var n = t.ownerDocument.defaultView;
			return n && n.opener || (n = e), n.getComputedStyle(t)
		};
	! function () {
		function t() {
			if (a) {
				a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", ze.appendChild(s);
				var t = e.getComputedStyle(a);
				n = "1%" !== t.top, o = "2px" === t.marginLeft, i = "4px" === t.width, a.style.marginRight = "50%", r = "4px" === t.marginRight, ze.removeChild(s), a = null
			}
		}
		var n, i, r, o, s = Z.createElement("div"),
			a = Z.createElement("div");
		a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", se.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), ae.extend(se, {
			pixelPosition: function () {
				return t(), n
			},
			boxSizingReliable: function () {
				return t(), i
			},
			pixelMarginRight: function () {
				return t(), r
			},
			reliableMarginLeft: function () {
				return t(), o
			}
		}))
	}();
	var et = /^(none|table(?!-c[ea]).+)/,
		tt = /^--/,
		nt = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		it = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		rt = ["Webkit", "Moz", "ms"],
		ot = Z.createElement("div").style;
	ae.extend({
		cssHooks: {
			opacity: {
				get: function (e, t) {
					if (t) {
						var n = j(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			float: "cssFloat"
		},
		style: function (e, t, n, i) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var r, o, s, a = ae.camelCase(t),
					l = tt.test(t),
					c = e.style;
				return l || (t = H(a)), s = ae.cssHooks[t] || ae.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : c[t] : ("string" === (o = typeof n) && (r = He.exec(n)) && r[1] && (n = h(e, t, r), o = "number"), void(null != n && n == n && ("number" === o && (n += r && r[3] || (ae.cssNumber[a] ? "" : "px")), se.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))))
			}
		},
		css: function (e, t, n, i) {
			var r, o, s, a = ae.camelCase(t);
			return tt.test(t) || (t = H(a)), (s = ae.cssHooks[t] || ae.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = j(e, t, i)), "normal" === r && t in it && (r = it[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
		}
	}), ae.each(["height", "width"], function (e, t) {
		ae.cssHooks[t] = {
			get: function (e, n, i) {
				if (n) return !et.test(ae.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? D(e, t, i) : De(e, nt, function () {
					return D(e, t, i)
				})
			},
			set: function (e, n, i) {
				var r, o = i && Ke(e),
					s = i && F(e, t, i, "border-box" === ae.css(e, "boxSizing", !1, o), o);
				return s && (r = He.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = ae.css(e, t)), L(0, n, s)
			}
		}
	}), ae.cssHooks.marginLeft = N(se.reliableMarginLeft, function (e, t) {
		if (t) return (parseFloat(j(e, "marginLeft")) || e.getBoundingClientRect().left - De(e, {
			marginLeft: 0
		}, function () {
			return e.getBoundingClientRect().left
		})) + "px"
	}), ae.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function (e, t) {
		ae.cssHooks[e + t] = {
			expand: function (n) {
				for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + Le[i] + t] = o[i] || o[i - 2] || o[0];
				return r
			}
		}, Ge.test(e) || (ae.cssHooks[e + t].set = L)
	}), ae.fn.extend({
		css: function (e, t) {
			return Se(this, function (e, t, n) {
				var i, r, o = {},
					s = 0;
				if (Array.isArray(t)) {
					for (i = Ke(e), r = t.length; s < r; s++) o[t[s]] = ae.css(e, t[s], !1, i);
					return o
				}
				return void 0 !== n ? ae.style(e, t, n) : ae.css(e, t)
			}, e, t, arguments.length > 1)
		}
	}), ae.Tween = q, (q.prototype = {
		constructor: q,
		init: function (e, t, n, i, r, o) {
			this.elem = e, this.prop = n, this.easing = r || ae.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (ae.cssNumber[n] ? "" : "px")
		},
		cur: function () {
			var e = q.propHooks[this.prop];
			return e && e.get ? e.get(this) : q.propHooks._default.get(this)
		},
		run: function (e) {
			var t, n = q.propHooks[this.prop];
			return this.options.duration ? this.pos = t = ae.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : q.propHooks._default.set(this), this
		}
	}).init.prototype = q.prototype, (q.propHooks = {
		_default: {
			get: function (e) {
				var t;
				return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ae.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
			},
			set: function (e) {
				ae.fx.step[e.prop] ? ae.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ae.cssProps[e.prop]] && !ae.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ae.style(e.elem, e.prop, e.now + e.unit)
			}
		}
	}).scrollTop = q.propHooks.scrollLeft = {
		set: function (e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, ae.easing = {
		linear: function (e) {
			return e
		},
		swing: function (e) {
			return .5 - Math.cos(e * Math.PI) / 2
		},
		_default: "swing"
	}, ae.fx = q.prototype.init, ae.fx.step = {};
	var st, at, lt = /^(?:toggle|show|hide)$/,
		ct = /queueHooks$/;
	ae.Animation = ae.extend(_, {
			tweeners: {
				"*": [function (e, t) {
					var n = this.createTween(e, t);
					return h(n.elem, e, He.exec(t), n), n
				}]
			},
			tweener: function (e, t) {
				ae.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ce);
				for (var n, i = 0, r = e.length; i < r; i++) n = e[i], _.tweeners[n] = _.tweeners[n] || [], _.tweeners[n].unshift(t)
			},
			prefilters: [function (e, t, n) {
				var i, r, o, s, a, l, c, u, d = "width" in t || "height" in t,
					f = this,
					h = {},
					p = e.style,
					m = e.nodeType && Fe(e),
					v = Ie.get(e, "fxshow");
				n.queue || (null == (s = ae._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
					s.unqueued || a()
				}), s.unqueued++, f.always(function () {
					f.always(function () {
						s.unqueued--, ae.queue(e, "fx").length || s.empty.fire()
					})
				}));
				for (i in t)
					if (r = t[i], lt.test(r)) {
						if (delete t[i], o = o || "toggle" === r, r === (m ? "hide" : "show")) {
							if ("show" !== r || !v || void 0 === v[i]) continue;
							m = !0
						}
						h[i] = v && v[i] || ae.style(e, i)
					} if ((l = !ae.isEmptyObject(t)) || !ae.isEmptyObject(h)) {
					d && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = v && v.display) && (c = Ie.get(e, "display")), "none" === (u = ae.css(e, "display")) && (c ? u = c : (g([e], !0), c = e.style.display || c, u = ae.css(e, "display"), g([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === ae.css(e, "float") && (l || (f.done(function () {
						p.display = c
					}), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function () {
						p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
					})), l = !1;
					for (i in h) l || (v ? "hidden" in v && (m = v.hidden) : v = Ie.access(e, "fxshow", {
						display: c
					}), o && (v.hidden = !m), m && g([e], !0), f.done(function () {
						m || g([e]), Ie.remove(e, "fxshow");
						for (i in h) ae.style(e, i, h[i])
					})), l = $(m ? v[i] : 0, i, f), i in v || (v[i] = l.start, m && (l.end = l.start, l.start = 0))
				}
			}],
			prefilter: function (e, t) {
				t ? _.prefilters.unshift(e) : _.prefilters.push(e)
			}
		}), ae.speed = function (e, t, n) {
			var i = e && "object" == typeof e ? ae.extend({}, e) : {
				complete: n || !n && t || ae.isFunction(e) && e,
				duration: e,
				easing: n && t || t && !ae.isFunction(t) && t
			};
			return ae.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in ae.fx.speeds ? i.duration = ae.fx.speeds[i.duration] : i.duration = ae.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
				ae.isFunction(i.old) && i.old.call(this), i.queue && ae.dequeue(this, i.queue)
			}, i
		}, ae.fn.extend({
			fadeTo: function (e, t, n, i) {
				return this.filter(Fe).css("opacity", 0).show().end().animate({
					opacity: t
				}, e, n, i)
			},
			animate: function (e, t, n, i) {
				var r = ae.isEmptyObject(e),
					o = ae.speed(t, n, i),
					s = function () {
						var t = _(this, ae.extend({}, e), o);
						(r || Ie.get(this, "finish")) && t.stop(!0)
					};
				return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
			},
			stop: function (e, t, n) {
				var i = function (e) {
					var t = e.stop;
					delete e.stop, t(n)
				};
				return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
					var t = !0,
						r = null != e && e + "queueHooks",
						o = ae.timers,
						s = Ie.get(this);
					if (r) s[r] && s[r].stop && i(s[r]);
					else
						for (r in s) s[r] && s[r].stop && ct.test(r) && i(s[r]);
					for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
					!t && n || ae.dequeue(this, e)
				})
			},
			finish: function (e) {
				return !1 !== e && (e = e || "fx"), this.each(function () {
					var t, n = Ie.get(this),
						i = n[e + "queue"],
						r = n[e + "queueHooks"],
						o = ae.timers,
						s = i ? i.length : 0;
					for (n.finish = !0, ae.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
					for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
					delete n.finish
				})
			}
		}), ae.each(["toggle", "show", "hide"], function (e, t) {
			var n = ae.fn[t];
			ae.fn[t] = function (e, i, r) {
				return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(R(t, !0), e, i, r)
			}
		}), ae.each({
			slideDown: R("show"),
			slideUp: R("hide"),
			slideToggle: R("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function (e, t) {
			ae.fn[e] = function (e, n, i) {
				return this.animate(t, e, n, i)
			}
		}), ae.timers = [], ae.fx.tick = function () {
			var e, t = 0,
				n = ae.timers;
			for (st = ae.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
			n.length || ae.fx.stop(), st = void 0
		}, ae.fx.timer = function (e) {
			ae.timers.push(e), ae.fx.start()
		}, ae.fx.interval = 13, ae.fx.start = function () {
			at || (at = !0, O())
		}, ae.fx.stop = function () {
			at = null
		}, ae.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, ae.fn.delay = function (t, n) {
			return t = ae.fx ? ae.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, i) {
				var r = e.setTimeout(n, t);
				i.stop = function () {
					e.clearTimeout(r)
				}
			})
		},
		function () {
			var e = Z.createElement("input"),
				t = Z.createElement("select").appendChild(Z.createElement("option"));
			e.type = "checkbox", se.checkOn = "" !== e.value, se.optSelected = t.selected, (e = Z.createElement("input")).value = "t", e.type = "radio", se.radioValue = "t" === e.value
		}();
	var ut, dt = ae.expr.attrHandle;
	ae.fn.extend({
		attr: function (e, t) {
			return Se(this, ae.attr, e, t, arguments.length > 1)
		},
		removeAttr: function (e) {
			return this.each(function () {
				ae.removeAttr(this, e)
			})
		}
	}), ae.extend({
		attr: function (e, t, n) {
			var i, r, o = e.nodeType;
			if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? ae.prop(e, t, n) : (1 === o && ae.isXMLDoc(e) || (r = ae.attrHooks[t.toLowerCase()] || (ae.expr.match.bool.test(t) ? ut : void 0)), void 0 !== n ? null === n ? void ae.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = ae.find.attr(e, t)) ? void 0 : i)
		},
		attrHooks: {
			type: {
				set: function (e, t) {
					if (!se.radioValue && "radio" === t && r(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		removeAttr: function (e, t) {
			var n, i = 0,
				r = t && t.match(Ce);
			if (r && 1 === e.nodeType)
				for (; n = r[i++];) e.removeAttribute(n)
		}
	}), ut = {
		set: function (e, t, n) {
			return !1 === t ? ae.removeAttr(e, n) : e.setAttribute(n, n), n
		}
	}, ae.each(ae.expr.match.bool.source.match(/\w+/g), function (e, t) {
		var n = dt[t] || ae.find.attr;
		dt[t] = function (e, t, i) {
			var r, o, s = t.toLowerCase();
			return i || (o = dt[s], dt[s] = r, r = null != n(e, t, i) ? s : null, dt[s] = o), r
		}
	});
	var ft = /^(?:input|select|textarea|button)$/i,
		ht = /^(?:a|area)$/i;
	ae.fn.extend({
		prop: function (e, t) {
			return Se(this, ae.prop, e, t, arguments.length > 1)
		},
		removeProp: function (e) {
			return this.each(function () {
				delete this[ae.propFix[e] || e]
			})
		}
	}), ae.extend({
		prop: function (e, t, n) {
			var i, r, o = e.nodeType;
			if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ae.isXMLDoc(e) || (t = ae.propFix[t] || t, r = ae.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function (e) {
					var t = ae.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : ft.test(e.nodeName) || ht.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		},
		propFix: {
			for: "htmlFor",
			class: "className"
		}
	}), se.optSelected || (ae.propHooks.selected = {
		get: function (e) {
			var t = e.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex, null
		},
		set: function (e) {
			var t = e.parentNode;
			t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
		}
	}), ae.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		ae.propFix[this.toLowerCase()] = this
	}), ae.fn.extend({
		addClass: function (e) {
			var t, n, i, r, o, s, a, l = 0;
			if (ae.isFunction(e)) return this.each(function (t) {
				ae(this).addClass(e.call(this, t, B(this)))
			});
			if ("string" == typeof e && e)
				for (t = e.match(Ce) || []; n = this[l++];)
					if (r = B(n), i = 1 === n.nodeType && " " + z(r) + " ") {
						for (s = 0; o = t[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
						r !== (a = z(i)) && n.setAttribute("class", a)
					} return this
		},
		removeClass: function (e) {
			var t, n, i, r, o, s, a, l = 0;
			if (ae.isFunction(e)) return this.each(function (t) {
				ae(this).removeClass(e.call(this, t, B(this)))
			});
			if (!arguments.length) return this.attr("class", "");
			if ("string" == typeof e && e)
				for (t = e.match(Ce) || []; n = this[l++];)
					if (r = B(n), i = 1 === n.nodeType && " " + z(r) + " ") {
						for (s = 0; o = t[s++];)
							for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
						r !== (a = z(i)) && n.setAttribute("class", a)
					} return this
		},
		toggleClass: function (e, t) {
			var n = typeof e;
			return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ae.isFunction(e) ? this.each(function (n) {
				ae(this).toggleClass(e.call(this, n, B(this), t), t)
			}) : this.each(function () {
				var t, i, r, o;
				if ("string" === n)
					for (i = 0, r = ae(this), o = e.match(Ce) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
				else void 0 !== e && "boolean" !== n || ((t = B(this)) && Ie.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Ie.get(this, "__className__") || ""))
			})
		},
		hasClass: function (e) {
			var t, n, i = 0;
			for (t = " " + e + " "; n = this[i++];)
				if (1 === n.nodeType && (" " + z(B(n)) + " ").indexOf(t) > -1) return !0;
			return !1
		}
	});
	var pt = /\r/g;
	ae.fn.extend({
		val: function (e) {
			var t, n, i, r = this[0];
			return arguments.length ? (i = ae.isFunction(e), this.each(function (n) {
				var r;
				1 === this.nodeType && (null == (r = i ? e.call(this, n, ae(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = ae.map(r, function (e) {
					return null == e ? "" : e + ""
				})), (t = ae.valHooks[this.type] || ae.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
			})) : r ? (t = ae.valHooks[r.type] || ae.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(pt, "") : null == n ? "" : n : void 0
		}
	}), ae.extend({
		valHooks: {
			option: {
				get: function (e) {
					var t = ae.find.attr(e, "value");
					return null != t ? t : z(ae.text(e))
				}
			},
			select: {
				get: function (e) {
					var t, n, i, o = e.options,
						s = e.selectedIndex,
						a = "select-one" === e.type,
						l = a ? null : [],
						c = a ? s + 1 : o.length;
					for (i = s < 0 ? c : a ? s : 0; i < c; i++)
						if (((n = o[i]).selected || i === s) && !n.disabled && (!n.parentNode.disabled || !r(n.parentNode, "optgroup"))) {
							if (t = ae(n).val(), a) return t;
							l.push(t)
						} return l
				},
				set: function (e, t) {
					for (var n, i, r = e.options, o = ae.makeArray(t), s = r.length; s--;) i = r[s], (i.selected = ae.inArray(ae.valHooks.option.get(i), o) > -1) && (n = !0);
					return n || (e.selectedIndex = -1), o
				}
			}
		}
	}), ae.each(["radio", "checkbox"], function () {
		ae.valHooks[this] = {
			set: function (e, t) {
				if (Array.isArray(t)) return e.checked = ae.inArray(ae(e).val(), t) > -1
			}
		}, se.checkOn || (ae.valHooks[this].get = function (e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	});
	var gt = /^(?:focusinfocus|focusoutblur)$/;
	ae.extend(ae.event, {
		trigger: function (t, n, i, r) {
			var o, s, a, l, c, u, d, f = [i || Z],
				h = ie.call(t, "type") ? t.type : t,
				p = ie.call(t, "namespace") ? t.namespace.split(".") : [];
			if (s = a = i = i || Z, 3 !== i.nodeType && 8 !== i.nodeType && !gt.test(h + ae.event.triggered) && (h.indexOf(".") > -1 && (p = h.split("."), h = p.shift(), p.sort()), c = h.indexOf(":") < 0 && "on" + h, t = t[ae.expando] ? t : new ae.Event(h, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : ae.makeArray(n, [t]), d = ae.event.special[h] || {}, r || !d.trigger || !1 !== d.trigger.apply(i, n))) {
				if (!r && !d.noBubble && !ae.isWindow(i)) {
					for (l = d.delegateType || h, gt.test(l + h) || (s = s.parentNode); s; s = s.parentNode) f.push(s), a = s;
					a === (i.ownerDocument || Z) && f.push(a.defaultView || a.parentWindow || e)
				}
				for (o = 0;
					(s = f[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? l : d.bindType || h, (u = (Ie.get(s, "events") || {})[t.type] && Ie.get(s, "handle")) && u.apply(s, n), (u = c && s[c]) && u.apply && ke(s) && (t.result = u.apply(s, n), !1 === t.result && t.preventDefault());
				return t.type = h, r || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(f.pop(), n) || !ke(i) || c && ae.isFunction(i[h]) && !ae.isWindow(i) && ((a = i[c]) && (i[c] = null), ae.event.triggered = h, i[h](), ae.event.triggered = void 0, a && (i[c] = a)), t.result
			}
		},
		simulate: function (e, t, n) {
			var i = ae.extend(new ae.Event, n, {
				type: e,
				isSimulated: !0
			});
			ae.event.trigger(i, null, t)
		}
	}), ae.fn.extend({
		trigger: function (e, t) {
			return this.each(function () {
				ae.event.trigger(e, t, this)
			})
		},
		triggerHandler: function (e, t) {
			var n = this[0];
			if (n) return ae.event.trigger(e, t, n, !0)
		}
	}), ae.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
		ae.fn[t] = function (e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}), ae.fn.extend({
		hover: function (e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		}
	}), se.focusin = "onfocusin" in e, se.focusin || ae.each({
		focus: "focusin",
		blur: "focusout"
	}, function (e, t) {
		var n = function (e) {
			ae.event.simulate(t, e.target, ae.event.fix(e))
		};
		ae.event.special[t] = {
			setup: function () {
				var i = this.ownerDocument || this,
					r = Ie.access(i, t);
				r || i.addEventListener(e, n, !0), Ie.access(i, t, (r || 0) + 1)
			},
			teardown: function () {
				var i = this.ownerDocument || this,
					r = Ie.access(i, t) - 1;
				r ? Ie.access(i, t, r) : (i.removeEventListener(e, n, !0), Ie.remove(i, t))
			}
		}
	});
	var mt = e.location,
		vt = ae.now(),
		yt = /\?/;
	ae.parseXML = function (t) {
		var n;
		if (!t || "string" != typeof t) return null;
		try {
			n = (new e.DOMParser).parseFromString(t, "text/xml")
		} catch (e) {
			n = void 0
		}
		return n && !n.getElementsByTagName("parsererror").length || ae.error("Invalid XML: " + t), n
	};
	var bt = /\[\]$/,
		xt = /\r?\n/g,
		wt = /^(?:submit|button|image|reset|file)$/i,
		Ct = /^(?:input|select|textarea|keygen)/i;
	ae.param = function (e, t) {
		var n, i = [],
			r = function (e, t) {
				var n = ae.isFunction(t) ? t() : t;
				i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
			};
		if (Array.isArray(e) || e.jquery && !ae.isPlainObject(e)) ae.each(e, function () {
			r(this.name, this.value)
		});
		else
			for (n in e) W(n, e[n], t, r);
		return i.join("&")
	}, ae.fn.extend({
		serialize: function () {
			return ae.param(this.serializeArray())
		},
		serializeArray: function () {
			return this.map(function () {
				var e = ae.prop(this, "elements");
				return e ? ae.makeArray(e) : this
			}).filter(function () {
				var e = this.type;
				return this.name && !ae(this).is(":disabled") && Ct.test(this.nodeName) && !wt.test(e) && (this.checked || !Oe.test(e))
			}).map(function (e, t) {
				var n = ae(this).val();
				return null == n ? null : Array.isArray(n) ? ae.map(n, function (e) {
					return {
						name: t.name,
						value: e.replace(xt, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(xt, "\r\n")
				}
			}).get()
		}
	});
	var Tt = /%20/g,
		At = /#.*$/,
		St = /([?&])_=[^&]*/,
		kt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		It = /^(?:GET|HEAD)$/,
		Pt = /^\/\//,
		Et = {},
		jt = {},
		Nt = "*/".concat("*"),
		Ht = Z.createElement("a");
	Ht.href = mt.href, ae.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: mt.href,
			type: "GET",
			isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(mt.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Nt,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": JSON.parse,
				"text xml": ae.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function (e, t) {
			return t ? U(U(e, ae.ajaxSettings), t) : U(ae.ajaxSettings, e)
		},
		ajaxPrefilter: Q(Et),
		ajaxTransport: Q(jt),
		ajax: function (t, n) {
			function i(t, n, i, a) {
				var c, f, h, x, w, C = n;
				u || (u = !0, l && e.clearTimeout(l), r = void 0, s = a || "", T.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, i && (x = function (e, t, n) {
					for (var i, r, o, s, a = e.contents, l = e.dataTypes;
						"*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
					if (i)
						for (r in a)
							if (a[r] && a[r].test(i)) {
								l.unshift(r);
								break
							} if (l[0] in n) o = l[0];
					else {
						for (r in n) {
							if (!l[0] || e.converters[r + " " + l[0]]) {
								o = r;
								break
							}
							s || (s = r)
						}
						o = o || s
					}
					if (o) return o !== l[0] && l.unshift(o), n[o]
				}(p, T, i)), x = function (e, t, n, i) {
					var r, o, s, a, l, c = {},
						u = e.dataTypes.slice();
					if (u[1])
						for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
					for (o = u.shift(); o;)
						if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
							if ("*" === o) o = l;
							else if ("*" !== l && l !== o) {
						if (!(s = c[l + " " + o] || c["* " + o]))
							for (r in c)
								if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
									!0 === s ? s = c[r] : !0 !== c[r] && (o = a[0], u.unshift(a[1]));
									break
								} if (!0 !== s)
							if (s && e.throws) t = s(t);
							else try {
								t = s(t)
							} catch (e) {
								return {
									state: "parsererror",
									error: s ? e : "No conversion from " + l + " to " + o
								}
							}
					}
					return {
						state: "success",
						data: t
					}
				}(p, x, T, c), c ? (p.ifModified && ((w = T.getResponseHeader("Last-Modified")) && (ae.lastModified[o] = w), (w = T.getResponseHeader("etag")) && (ae.etag[o] = w)), 204 === t || "HEAD" === p.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = x.state, f = x.data, h = x.error, c = !h)) : (h = C, !t && C || (C = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (n || C) + "", c ? v.resolveWith(g, [f, C, T]) : v.rejectWith(g, [T, C, h]), T.statusCode(b), b = void 0, d && m.trigger(c ? "ajaxSuccess" : "ajaxError", [T, p, c ? f : h]), y.fireWith(g, [T, C]), d && (m.trigger("ajaxComplete", [T, p]), --ae.active || ae.event.trigger("ajaxStop")))
			}
			"object" == typeof t && (n = t, t = void 0), n = n || {};
			var r, o, s, a, l, c, u, d, f, h, p = ae.ajaxSetup({}, n),
				g = p.context || p,
				m = p.context && (g.nodeType || g.jquery) ? ae(g) : ae.event,
				v = ae.Deferred(),
				y = ae.Callbacks("once memory"),
				b = p.statusCode || {},
				x = {},
				w = {},
				C = "canceled",
				T = {
					readyState: 0,
					getResponseHeader: function (e) {
						var t;
						if (u) {
							if (!a)
								for (a = {}; t = kt.exec(s);) a[t[1].toLowerCase()] = t[2];
							t = a[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function () {
						return u ? s : null
					},
					setRequestHeader: function (e, t) {
						return null == u && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = t), this
					},
					overrideMimeType: function (e) {
						return null == u && (p.mimeType = e), this
					},
					statusCode: function (e) {
						var t;
						if (e)
							if (u) T.always(e[T.status]);
							else
								for (t in e) b[t] = [b[t], e[t]];
						return this
					},
					abort: function (e) {
						var t = e || C;
						return r && r.abort(t), i(0, t), this
					}
				};
			if (v.promise(T), p.url = ((t || p.url || mt.href) + "").replace(Pt, mt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(Ce) || [""], null == p.crossDomain) {
				c = Z.createElement("a");
				try {
					c.href = p.url, c.href = c.href, p.crossDomain = Ht.protocol + "//" + Ht.host != c.protocol + "//" + c.host
				} catch (e) {
					p.crossDomain = !0
				}
			}
			if (p.data && p.processData && "string" != typeof p.data && (p.data = ae.param(p.data, p.traditional)), V(Et, p, n, T), u) return T;
			(d = ae.event && p.global) && 0 == ae.active++ && ae.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !It.test(p.type), o = p.url.replace(At, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Tt, "+")) : (h = p.url.slice(o.length), p.data && (o += (yt.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(St, "$1"), h = (yt.test(o) ? "&" : "?") + "_=" + vt++ + h), p.url = o + h), p.ifModified && (ae.lastModified[o] && T.setRequestHeader("If-Modified-Since", ae.lastModified[o]), ae.etag[o] && T.setRequestHeader("If-None-Match", ae.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Nt + "; q=0.01" : "") : p.accepts["*"]);
			for (f in p.headers) T.setRequestHeader(f, p.headers[f]);
			if (p.beforeSend && (!1 === p.beforeSend.call(g, T, p) || u)) return T.abort();
			if (C = "abort", y.add(p.complete), T.done(p.success), T.fail(p.error), r = V(jt, p, n, T)) {
				if (T.readyState = 1, d && m.trigger("ajaxSend", [T, p]), u) return T;
				p.async && p.timeout > 0 && (l = e.setTimeout(function () {
					T.abort("timeout")
				}, p.timeout));
				try {
					u = !1, r.send(x, i)
				} catch (e) {
					if (u) throw e;
					i(-1, e)
				}
			} else i(-1, "No Transport");
			return T
		},
		getJSON: function (e, t, n) {
			return ae.get(e, t, n, "json")
		},
		getScript: function (e, t) {
			return ae.get(e, void 0, t, "script")
		}
	}), ae.each(["get", "post"], function (e, t) {
		ae[t] = function (e, n, i, r) {
			return ae.isFunction(n) && (r = r || i, i = n, n = void 0), ae.ajax(ae.extend({
				url: e,
				type: t,
				dataType: r,
				data: n,
				success: i
			}, ae.isPlainObject(e) && e))
		}
	}), ae._evalUrl = function (e) {
		return ae.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			throws: !0
		})
	}, ae.fn.extend({
		wrapAll: function (e) {
			var t;
			return this[0] && (ae.isFunction(e) && (e = e.call(this[0])), t = ae(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
				for (var e = this; e.firstElementChild;) e = e.firstElementChild;
				return e
			}).append(this)), this
		},
		wrapInner: function (e) {
			return ae.isFunction(e) ? this.each(function (t) {
				ae(this).wrapInner(e.call(this, t))
			}) : this.each(function () {
				var t = ae(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function (e) {
			var t = ae.isFunction(e);
			return this.each(function (n) {
				ae(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function (e) {
			return this.parent(e).not("body").each(function () {
				ae(this).replaceWith(this.childNodes)
			}), this
		}
	}), ae.expr.pseudos.hidden = function (e) {
		return !ae.expr.pseudos.visible(e)
	}, ae.expr.pseudos.visible = function (e) {
		return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
	}, ae.ajaxSettings.xhr = function () {
		try {
			return new e.XMLHttpRequest
		} catch (e) {}
	};
	var Lt = {
			0: 200,
			1223: 204
		},
		Ft = ae.ajaxSettings.xhr();
	se.cors = !!Ft && "withCredentials" in Ft, se.ajax = Ft = !!Ft, ae.ajaxTransport(function (t) {
		var n, i;
		if (se.cors || Ft && !t.crossDomain) return {
			send: function (r, o) {
				var s, a = t.xhr();
				if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
					for (s in t.xhrFields) a[s] = t.xhrFields[s];
				t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
				for (s in r) a.setRequestHeader(s, r[s]);
				n = function (e) {
					return function () {
						n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Lt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
							binary: a.response
						} : {
							text: a.responseText
						}, a.getAllResponseHeaders()))
					}
				}, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
					4 === a.readyState && e.setTimeout(function () {
						n && i()
					})
				}, n = n("abort");
				try {
					a.send(t.hasContent && t.data || null)
				} catch (e) {
					if (n) throw e
				}
			},
			abort: function () {
				n && n()
			}
		}
	}), ae.ajaxPrefilter(function (e) {
		e.crossDomain && (e.contents.script = !1)
	}), ae.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function (e) {
				return ae.globalEval(e), e
			}
		}
	}), ae.ajaxPrefilter("script", function (e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
	}), ae.ajaxTransport("script", function (e) {
		if (e.crossDomain) {
			var t, n;
			return {
				send: function (i, r) {
					t = ae("<script>").prop({
						charset: e.scriptCharset,
						src: e.url
					}).on("load error", n = function (e) {
						t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
					}), Z.head.appendChild(t[0])
				},
				abort: function () {
					n && n()
				}
			}
		}
	});
	var Dt = [],
		qt = /(=)\?(?=&|$)|\?\?/;
	ae.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function () {
			var e = Dt.pop() || ae.expando + "_" + vt++;
			return this[e] = !0, e
		}
	}), ae.ajaxPrefilter("json jsonp", function (t, n, i) {
		var r, o, s, a = !1 !== t.jsonp && (qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && qt.test(t.data) && "data");
		if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = ae.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(qt, "$1" + r) : !1 !== t.jsonp && (t.url += (yt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
			return s || ae.error(r + " was not called"), s[0]
		}, t.dataTypes[0] = "json", o = e[r], e[r] = function () {
			s = arguments
		}, i.always(function () {
			void 0 === o ? ae(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Dt.push(r)), s && ae.isFunction(o) && o(s[0]), s = o = void 0
		}), "script"
	}), se.createHTMLDocument = function () {
		var e = Z.implementation.createHTMLDocument("").body;
		return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
	}(), ae.parseHTML = function (e, t, n) {
		if ("string" != typeof e) return [];
		"boolean" == typeof t && (n = t, t = !1);
		var i, r, o;
		return t || (se.createHTMLDocument ? (t = Z.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = Z.location.href, t.head.appendChild(i)) : t = Z), r = me.exec(e), o = !n && [], r ? [t.createElement(r[1])] : (r = y([e], t, o), o && o.length && ae(o).remove(), ae.merge([], r.childNodes))
	}, ae.fn.load = function (e, t, n) {
		var i, r, o, s = this,
			a = e.indexOf(" ");
		return a > -1 && (i = z(e.slice(a)), e = e.slice(0, a)), ae.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && ae.ajax({
			url: e,
			type: r || "GET",
			dataType: "html",
			data: t
		}).done(function (e) {
			o = arguments, s.html(i ? ae("<div>").append(ae.parseHTML(e)).find(i) : e)
		}).always(n && function (e, t) {
			s.each(function () {
				n.apply(this, o || [e.responseText, t, e])
			})
		}), this
	}, ae.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
		ae.fn[t] = function (e) {
			return this.on(t, e)
		}
	}), ae.expr.pseudos.animated = function (e) {
		return ae.grep(ae.timers, function (t) {
			return e === t.elem
		}).length
	}, ae.offset = {
		setOffset: function (e, t, n) {
			var i, r, o, s, a, l, c = ae.css(e, "position"),
				u = ae(e),
				d = {};
			"static" === c && (e.style.position = "relative"), a = u.offset(), o = ae.css(e, "top"), l = ae.css(e, "left"), ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (i = u.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), ae.isFunction(t) && (t = t.call(e, n, ae.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + r), "using" in t ? t.using.call(e, d) : u.css(d)
		}
	}, ae.fn.extend({
		offset: function (e) {
			if (arguments.length) return void 0 === e ? this : this.each(function (t) {
				ae.offset.setOffset(this, e, t)
			});
			var t, n, i, r, o = this[0];
			return o ? o.getClientRects().length ? (i = o.getBoundingClientRect(), t = o.ownerDocument, n = t.documentElement, r = t.defaultView, {
				top: i.top + r.pageYOffset - n.clientTop,
				left: i.left + r.pageXOffset - n.clientLeft
			}) : {
				top: 0,
				left: 0
			} : void 0
		},
		position: function () {
			if (this[0]) {
				var e, t, n = this[0],
					i = {
						top: 0,
						left: 0
					};
				return "fixed" === ae.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), r(e[0], "html") || (i = e.offset()), i = {
					top: i.top + ae.css(e[0], "borderTopWidth", !0),
					left: i.left + ae.css(e[0], "borderLeftWidth", !0)
				}), {
					top: t.top - i.top - ae.css(n, "marginTop", !0),
					left: t.left - i.left - ae.css(n, "marginLeft", !0)
				}
			}
		},
		offsetParent: function () {
			return this.map(function () {
				for (var e = this.offsetParent; e && "static" === ae.css(e, "position");) e = e.offsetParent;
				return e || ze
			})
		}
	}), ae.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function (e, t) {
		var n = "pageYOffset" === t;
		ae.fn[e] = function (i) {
			return Se(this, function (e, i, r) {
				var o;
				return ae.isWindow(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r ? o ? o[t] : e[i] : void(o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r)
			}, e, i, arguments.length)
		}
	}), ae.each(["top", "left"], function (e, t) {
		ae.cssHooks[t] = N(se.pixelPosition, function (e, n) {
			if (n) return n = j(e, t), Ye.test(n) ? ae(e).position()[t] + "px" : n
		})
	}), ae.each({
		Height: "height",
		Width: "width"
	}, function (e, t) {
		ae.each({
			padding: "inner" + e,
			content: t,
			"": "outer" + e
		}, function (n, i) {
			ae.fn[i] = function (r, o) {
				var s = arguments.length && (n || "boolean" != typeof r),
					a = n || (!0 === r || !0 === o ? "margin" : "border");
				return Se(this, function (t, n, r) {
					var o;
					return ae.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? ae.css(t, n, a) : ae.style(t, n, r, a)
				}, t, s ? r : void 0, s)
			}
		})
	}), ae.fn.extend({
		bind: function (e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function (e, t) {
			return this.off(e, null, t)
		},
		delegate: function (e, t, n, i) {
			return this.on(t, e, n, i)
		},
		undelegate: function (e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	}), ae.holdReady = function (e) {
		e ? ae.readyWait++ : ae.ready(!0)
	}, ae.isArray = Array.isArray, ae.parseJSON = JSON.parse, ae.nodeName = r, "function" == typeof define && define.amd && define("jquery", [], function () {
		return ae
	});
	var Ot = e.jQuery,
		Mt = e.$;
	return ae.noConflict = function (t) {
		return e.$ === ae && (e.$ = Mt), t && e.jQuery === ae && (e.jQuery = Ot), ae
	}, t || (e.jQuery = e.$ = ae), ae
}),
function (e, t, n) {
	"use strict";

	function i(t, n) {
		this.$element = e(t), n && ("string" === e.type(n.delay) || "number" === e.type(n.delay)) && (n.delay = {
			show: n.delay,
			hide: n.delay
		}), this.options = e.extend({}, a, n), this._defaults = a, this._name = r, this._targetclick = !1, this.init(), l.push(this.$element)
	}
	var r = "webuiPopover",
		o = "webui-popover",
		s = "webui.popover",
		a = {
			placement: "auto",
			width: "auto",
			height: "auto",
			trigger: "click",
			style: "",
			delay: {
				show: null,
				hide: null
			},
			async: {
				before: null,
				success: null
			},
			cache: !0,
			multi: !1,
			arrow: !0,
			title: "",
			content: "",
			closeable: !1,
			padding: !0,
			url: "",
			type: "html",
			animation: null,
			template: '<div class="webui-popover"><div class="arrow"></div><div class="webui-popover-inner"><a href="#" class="close">x</a><h3 class="webui-popover-title"></h3><div class="webui-popover-content"><i class="icon-refresh"></i> <p>&nbsp;</p></div></div></div>',
			backdrop: !1,
			dismissible: !0,
			onShow: null,
			onHide: null,
			abortXHR: !0,
			autoHide: !1,
			offsetTop: 0,
			offsetLeft: 0
		},
		l = [],
		c = e('<div class="webui-popover-backdrop"></div>'),
		u = 0,
		d = !1,
		f = e(n),
		h = function (e, t) {
			return isNaN(e) ? t || 0 : Number(e)
		};
	i.prototype = {
		init: function () {
			"click" === this.getTrigger() ? this.$element.off("click touchend").on("click touchend", e.proxy(this.toggle, this)) : "hover" === this.getTrigger() && this.$element.off("mouseenter mouseleave click").on("mouseenter", e.proxy(this.mouseenterHandler, this)).on("mouseleave", e.proxy(this.mouseleaveHandler, this)), this._poped = !1, this._inited = !0, this._opened = !1, this._idSeed = u, this.options.backdrop && c.appendTo(n.body).hide(), u++, "sticky" === this.getTrigger() && this.show()
		},
		destroy: function () {
			for (var e = -1, t = 0; t < l.length; t++)
				if (l[t] === this.$element) {
					e = t;
					break
				} l.splice(e, 1), this.hide(), this.$element.data("plugin_" + r, null), "click" === this.getTrigger() ? this.$element.off("click") : "hover" === this.getTrigger() && this.$element.off("mouseenter mouseleave"), this.$target && this.$target.remove()
		},
		hide: function (t, n) {
			if ((t || "sticky" !== this.getTrigger()) && this._opened) {
				n && (n.preventDefault(), n.stopPropagation()), this.xhr && !0 === this.options.abortXHR && (this.xhr.abort(), this.xhr = null);
				var i = e.Event("hide." + s);
				if (this.$element.trigger(i, [this.$target]), this.$target) {
					this.$target.removeClass("in").addClass(this.getHideAnimation());
					var r = this;
					setTimeout(function () {
						r.$target.hide()
					}, 300)
				}
				this.options.backdrop && c.hide(), this._opened = !1, this.$element.trigger("hidden." + s, [this.$target]), this.options.onHide && this.options.onHide(this.$target)
			}
		},
		resetAutoHide: function () {
			var e = this,
				t = e.getAutoHide();
			t && (e.autoHideHandler && clearTimeout(e.autoHideHandler), e.autoHideHandler = setTimeout(function () {
				e.hide()
			}, t))
		},
		toggle: function (e) {
			e && (e.preventDefault(), e.stopPropagation()), this[this.getTarget().hasClass("in") ? "hide" : "show"]()
		},
		hideAll: function () {
			for (var e = 0; e < l.length; e++) l[e].webuiPopover("hide");
			f.trigger("hiddenAll." + s)
		},
		show: function () {
			var e = this.getTarget().removeClass().addClass(o).addClass(this._customTargetClass);
			this.options.multi || this.hideAll(), this._opened || (this.getCache() && this._poped && "" !== this.content || (this.content = "", this.setTitle(this.getTitle()), this.options.closeable || e.find(".close").off("click").remove(), this.isAsync() ? this.setContentASync(this.options.content) : this.setContent(this.getContent()), e.show()), this.displayContent(), this.options.onShow && this.options.onShow(e), this.bindBodyEvents(), this.options.backdrop && c.show(), this._opened = !0, this.resetAutoHide())
		},
		displayContent: function () {
			var t = this.getElementPosition(),
				i = this.getTarget().removeClass().addClass(o).addClass(this._customTargetClass),
				r = this.getContentElement(),
				a = i[0].offsetWidth,
				l = i[0].offsetHeight,
				c = "bottom",
				u = e.Event("show." + s);
			this.$element.trigger(u, [i]), "auto" !== this.options.width && i.width(this.options.width), "auto" !== this.options.height && r.height(this.options.height), this.options.style && this.$target.addClass(o + "-" + this.options.style), this.options.arrow || i.find(".arrow").remove(), i.detach().css({
				top: -2e3,
				left: -2e3,
				display: "block"
			}), this.getAnimation() && i.addClass(this.getAnimation()), i.appendTo(n.body), c = this.getPlacement(t), this.$element.trigger("added." + s), this.initTargetEvents(), this.options.padding || ("auto" !== this.options.height && r.css("height", r.outerHeight()), this.$target.addClass("webui-no-padding")), a = i[0].offsetWidth, l = i[0].offsetHeight;
			var d = this.getTargetPositin(t, c, a, l);
			if (this.$target.css(d.position).addClass(c).addClass("in"), "iframe" === this.options.type) {
				var f = i.find("iframe");
				f.width(i.width()).height(f.parent().height())
			}
			if (this.options.arrow || this.$target.css({
					margin: 0
				}), this.options.arrow) {
				var h = this.$target.find(".arrow");
				h.removeAttr("style"), d.arrowOffset && (-1 === d.arrowOffset.left || -1 === d.arrowOffset.top ? h.hide() : h.css(d.arrowOffset))
			}
			this._poped = !0, this.$element.trigger("shown." + s, [this.$target])
		},
		isTargetLoaded: function () {
			return 0 === this.getTarget().find("i.glyphicon-refresh").length
		},
		getTriggerElement: function () {
			return this.$element
		},
		getTarget: function () {
			if (!this.$target) {
				var t = r + this._idSeed;
				this.$target = e(this.options.template).attr("id", t).data("trigger-element", this.getTriggerElement()), this._customTargetClass = this.$target.attr("class") !== o ? this.$target.attr("class") : null, this.getTriggerElement().attr("data-target", t)
			}
			return this.$target
		},
		getTitleElement: function () {
			return this.getTarget().find("." + o + "-title")
		},
		getContentElement: function () {
			return this.$contentElement || (this.$contentElement = this.getTarget().find("." + o + "-content"), console.log(this.$contentElement), this.$contentElement.show()), this.$contentElement
		},
		getTitle: function () {
			return this.$element.attr("data-title") || this.options.title || this.$element.attr("title")
		},
		getUrl: function () {
			return this.$element.attr("data-url") || this.options.url
		},
		getAutoHide: function () {
			return this.$element.attr("data-auto-hide") || this.options.autoHide
		},
		getOffsetTop: function () {
			return h(this.$element.attr("data-offset-top")) || this.options.offsetTop
		},
		getOffsetLeft: function () {
			return h(this.$element.attr("data-offset-left")) || this.options.offsetLeft
		},
		getCache: function () {
			var e = this.$element.attr("data-cache");
			if (void 0 !== e) switch (e.toLowerCase()) {
				case "true":
				case "yes":
				case "1":
					return !0;
				case "false":
				case "no":
				case "0":
					return !1
			}
			return this.options.cache
		},
		getTrigger: function () {
			return this.$element.attr("data-trigger") || this.options.trigger
		},
		getDelayShow: function () {
			var e = this.$element.attr("data-delay-show");
			return void 0 !== e ? e : 0 === this.options.delay.show ? 0 : this.options.delay.show || 100
		},
		getHideDelay: function () {
			var e = this.$element.attr("data-delay-hide");
			return void 0 !== e ? e : 0 === this.options.delay.hide ? 0 : this.options.delay.hide || 100
		},
		getAnimation: function () {
			return this.$element.attr("data-animation") || this.options.animation
		},
		getHideAnimation: function () {
			var e = this.getAnimation();
			return e ? e + "-out" : "out"
		},
		setTitle: function (e) {
			var t = this.getTitleElement();
			e ? t.html(e) : t.remove()
		},
		hasContent: function () {
			return this.getContent()
		},
		getContent: function () {
			if (this.getUrl()) switch (this.options.type) {
				case "iframe":
					this.content = e('<iframe frameborder="0"></iframe>').attr("src", this.getUrl());
					break;
				case "html":
					try {
						this.content = e(this.getUrl()), this.content.is(":visible") || this.content.show()
					} catch (e) {
						throw new Error("Unable to get popover content. Invalid selector specified.")
					}
			} else if (!this.content) {
				var t = "";
				if (t = e.isFunction(this.options.content) ? this.options.content.apply(this.$element[0], [this]) : this.options.content, this.content = this.$element.attr("data-content") || t, !this.content) {
					var n = this.$element.next();
					n && n.hasClass(o + "-content") && (this.content = n)
				}
			} return this.content
		},
		setContent: function (e) {
			var t = this.getTarget(),
				n = this.getContentElement();
			"string" == typeof e ? n.html(e) : e instanceof jQuery && (e.removeClass(o + "-content"), n.html(""), e.appendTo(n)), this.$target = t
		},
		isAsync: function () {
			return "async" === this.options.type
		},
		setContentASync: function (t) {
			var n = this;
			this.xhr || (this.xhr = e.ajax({
				url: this.getUrl(),
				type: "GET",
				cache: this.getCache(),
				beforeSend: function (e) {
					n.options.async.before && n.options.async.before(n, e)
				},
				success: function (i) {
					n.bindBodyEvents(), n.content = t && e.isFunction(t) ? t.apply(n.$element[0], [i]) : i, n.setContent(n.content);
					n.getContentElement().removeAttr("style"), n.displayContent(), n.options.async.success && n.options.async.success(n, i)
				},
				complete: function () {
					n.xhr = null
				}
			}))
		},
		bindBodyEvents: function () {
			this.options.dismissible && "click" === this.getTrigger() && !d && (f.off("keyup.webui-popover").on("keyup.webui-popover", e.proxy(this.escapeHandler, this)), f.off("click.webui-popover touchend.webui-popover").on("click.webui-popover touchend.webui-popover", e.proxy(this.bodyClickHandler, this)))
		},
		mouseenterHandler: function () {
			var e = this;
			e._timeout && clearTimeout(e._timeout), e._enterTimeout = setTimeout(function () {
				e.getTarget().is(":visible") || e.show()
			}, this.getDelayShow())
		},
		mouseleaveHandler: function () {
			var e = this;
			clearTimeout(e._enterTimeout), e._timeout = setTimeout(function () {
				e.hide()
			}, this.getHideDelay())
		},
		escapeHandler: function (e) {
			27 === e.keyCode && this.hideAll()
		},
		bodyClickHandler: function () {
			d = !0, "click" === this.getTrigger() && (this._targetclick ? this._targetclick = !1 : this.hideAll())
		},
		targetClickHandler: function () {
			this._targetclick = !0
		},
		initTargetEvents: function () {
			"hover" === this.getTrigger() && this.$target.off("mouseenter mouseleave").on("mouseenter", e.proxy(this.mouseenterHandler, this)).on("mouseleave", e.proxy(this.mouseleaveHandler, this)), this.$target.find(".close").off("click").on("click", e.proxy(this.hide, this, !0)), this.$target.off("click.webui-popover").on("click.webui-popover", e.proxy(this.targetClickHandler, this))
		},
		getPlacement: function (e) {
			var t, i = n.documentElement,
				r = n.body,
				o = i.clientWidth,
				s = i.clientHeight,
				a = Math.max(r.scrollTop, i.scrollTop),
				l = Math.max(r.scrollLeft, i.scrollLeft),
				c = Math.max(0, e.left - l),
				u = Math.max(0, e.top - a),
				d = "horizontal" === (t = "function" == typeof this.options.placement ? this.options.placement.call(this, this.getTarget()[0], this.$element[0]) : this.$element.data("placement") || this.options.placement),
				f = "vertical" === t;
			return "auto" === t || d || f ? t = o / 3 > c ? s / 3 > u ? d ? "right-bottom" : "bottom-right" : 2 * s / 3 > u ? f ? s / 2 >= u ? "bottom-right" : "top-right" : "right" : d ? "right-top" : "top-right" : 2 * o / 3 > c ? s / 3 > u ? d ? o / 2 >= c ? "right-bottom" : "left-bottom" : "bottom" : 2 * s / 3 > u ? d ? o / 2 >= c ? "right" : "left" : s / 2 >= u ? "bottom" : "top" : d ? o / 2 >= c ? "right-top" : "left-top" : "top" : s / 3 > u ? d ? "left-bottom" : "bottom-left" : 2 * s / 3 > u ? f ? s / 2 >= u ? "bottom-left" : "top-left" : "left" : d ? "left-top" : "top-left" : "auto-top" === t ? t = o / 3 > c ? "top-right" : 2 * o / 3 > c ? "top" : "top-left" : "auto-bottom" === t ? t = o / 3 > c ? "bottom-right" : 2 * o / 3 > c ? "bottom" : "bottom-left" : "auto-left" === t ? t = s / 3 > u ? "left-top" : 2 * s / 3 > u ? "left" : "left-bottom" : "auto-right" === t && (t = s / 3 > u ? "right-top" : 2 * s / 3 > u ? "right" : "right-bottom"), t
		},
		getElementPosition: function () {
			return e.extend({}, this.$element.offset(), {
				width: this.$element[0].offsetWidth,
				height: this.$element[0].offsetHeight
			})
		},
		getTargetPositin: function (e, t, i, r) {
			var o = e,
				s = n.documentElement,
				a = n.body,
				l = s.clientWidth,
				c = s.clientHeight,
				u = this.$element.outerWidth(),
				d = this.$element.outerHeight(),
				f = Math.max(a.scrollTop, s.scrollTop),
				h = Math.max(a.scrollLeft, s.scrollLeft),
				p = {},
				g = null,
				m = this.options.arrow ? 20 : 0,
				v = m + 10 > u ? m : 0,
				y = m + 10 > d ? m : 0,
				b = 0,
				x = c + f,
				w = l + h,
				C = o.left + o.width / 2 - v > 0,
				T = o.left + o.width / 2 + v < w,
				A = o.top + o.height / 2 - y > 0,
				S = o.top + o.height / 2 + y < x;
			switch (t) {
				case "bottom":
					p = {
						top: o.top + o.height,
						left: o.left + o.width / 2 - i / 2
					};
					break;
				case "top":
					p = {
						top: o.top - r,
						left: o.left + o.width / 2 - i / 2
					};
					break;
				case "left":
					p = {
						top: o.top + o.height / 2 - r / 2,
						left: o.left - i
					};
					break;
				case "right":
					p = {
						top: o.top + o.height / 2 - r / 2,
						left: o.left + o.width
					};
					break;
				case "top-right":
					p = {
						top: o.top - r,
						left: C ? o.left - v : 10
					}, g = {
						left: C ? Math.min(u, i) / 2 + v : -2e3
					};
					break;
				case "top-left":
					b = T ? v : -10, p = {
						top: o.top - r,
						left: o.left - i + o.width + b
					}, g = {
						left: T ? i - Math.min(u, i) / 2 - v : -2e3
					};
					break;
				case "bottom-right":
					p = {
						top: o.top + o.height,
						left: C ? o.left - v : 10
					}, g = {
						left: C ? Math.min(u, i) / 2 + v : -2e3
					};
					break;
				case "bottom-left":
					b = T ? v : -10, p = {
						top: o.top + o.height,
						left: o.left - i + o.width + b
					}, g = {
						left: T ? i - Math.min(u, i) / 2 - v : -2e3
					};
					break;
				case "right-top":
					b = S ? y : -10, p = {
						top: o.top - r + o.height + b,
						left: o.left + o.width
					}, g = {
						top: S ? r - Math.min(d, r) / 2 - y : -2e3
					};
					break;
				case "right-bottom":
					p = {
						top: A ? o.top - y : 10,
						left: o.left + o.width
					}, g = {
						top: A ? Math.min(d, r) / 2 + y : -2e3
					};
					break;
				case "left-top":
					b = S ? y : -10, p = {
						top: o.top - r + o.height + b,
						left: o.left - i
					}, g = {
						top: S ? r - Math.min(d, r) / 2 - y : -2e3
					};
					break;
				case "left-bottom":
					p = {
						top: A ? o.top - y : 10,
						left: o.left - i
					}, g = {
						top: A ? Math.min(d, r) / 2 + y : -2e3
					}
			}
			return p.top += this.getOffsetTop(), p.left += this.getOffsetLeft(), {
				position: p,
				arrowOffset: g
			}
		}
	}, e.fn[r] = function (t, n) {
		var o = [],
			s = this.each(function () {
				var s = e.data(this, "plugin_" + r);
				s ? "destroy" === t ? s.destroy() : "string" == typeof t && o.push(s[t]()) : (t ? "string" == typeof t ? "destroy" !== t && (n || (s = new i(this, null), o.push(s[t]()))) : "object" == typeof t && (s = new i(this, t)) : s = new i(this, null), e.data(this, "plugin_" + r, s))
			});
		return o.length ? o : s
	}
}(jQuery, window, document), void 0 === jQuery.migrateMute && (jQuery.migrateMute = !0),
	function (e, t, n) {
		function i(n) {
			var i = t.console;
			o[n] || (o[n] = !0, e.migrateWarnings.push(n), i && i.warn && !e.migrateMute && (i.warn("JQMIGRATE: " + n), e.migrateTrace && i.trace && i.trace()))
		}

		function r(t, n, r, o) {
			if (Object.defineProperty) try {
				return void Object.defineProperty(t, n, {
					configurable: !0,
					enumerable: !0,
					get: function () {
						return i(o), r
					},
					set: function (e) {
						i(o), r = e
					}
				})
			} catch (e) {}
			e._definePropertyBroken = !0, t[n] = r
		}
		e.migrateVersion = "1.4.1";
		var o = {};
		e.migrateWarnings = [], t.console && t.console.log && t.console.log("JQMIGRATE: Migrate is installed" + (e.migrateMute ? "" : " with logging active") + ", version " + e.migrateVersion), void 0 === e.migrateTrace && (e.migrateTrace = !0), e.migrateReset = function () {
			o = {}, e.migrateWarnings.length = 0
		}, "BackCompat" === document.compatMode && i("jQuery is not compatible with Quirks Mode");
		var s = e("<input/>", {
				size: 1
			}).attr("size") && e.attrFn,
			a = e.attr,
			l = e.attrHooks.value && e.attrHooks.value.get || function () {
				return null
			},
			c = e.attrHooks.value && e.attrHooks.value.set || function () {},
			u = /^(?:input|button)$/i,
			d = /^[238]$/,
			f = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
			h = /^(?:checked|selected)$/i;
		r(e, "attrFn", s || {}, "jQuery.attrFn is deprecated"), e.attr = function (t, n, r, o) {
			var l = n.toLowerCase(),
				c = t && t.nodeType;
			return o && (a.length < 4 && i("jQuery.fn.attr( props, pass ) is deprecated"), t && !d.test(c) && (s ? n in s : e.isFunction(e.fn[n]))) ? e(t)[n](r) : ("type" === n && void 0 !== r && u.test(t.nodeName) && t.parentNode && i("Can't change the 'type' of an input or button in IE 6/7/8"), !e.attrHooks[l] && f.test(l) && (e.attrHooks[l] = {
				get: function (t, n) {
					var i, r = e.prop(t, n);
					return !0 === r || "boolean" != typeof r && (i = t.getAttributeNode(n)) && !1 !== i.nodeValue ? n.toLowerCase() : void 0
				},
				set: function (t, n, i) {
					var r;
					return !1 === n ? e.removeAttr(t, i) : ((r = e.propFix[i] || i) in t && (t[r] = !0), t.setAttribute(i, i.toLowerCase())), i
				}
			}, h.test(l) && i("jQuery.fn.attr('" + l + "') might use property instead of attribute")), a.call(e, t, n, r))
		}, e.attrHooks.value = {
			get: function (e, t) {
				var n = (e.nodeName || "").toLowerCase();
				return "button" === n ? l.apply(this, arguments) : ("input" !== n && "option" !== n && i("jQuery.fn.attr('value') no longer gets properties"), t in e ? e.value : null)
			},
			set: function (e, t) {
				var n = (e.nodeName || "").toLowerCase();
				return "button" === n ? c.apply(this, arguments) : ("input" !== n && "option" !== n && i("jQuery.fn.attr('value', val) no longer sets properties"), void(e.value = t))
			}
		};
		var p, g, m = e.fn.init,
			v = e.find,
			y = e.parseJSON,
			b = /^\s*</,
			x = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
			w = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
			C = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
		e.fn.init = function (t, n, r) {
			var o, s;
			return t && "string" == typeof t && !e.isPlainObject(n) && (o = C.exec(e.trim(t))) && o[0] && (b.test(t) || i("$(html) HTML strings must start with '<' character"), o[3] && i("$(html) HTML text after last tag is ignored"), "#" === o[0].charAt(0) && (i("HTML string cannot start with a '#' character"), e.error("JQMIGRATE: Invalid selector string (XSS)")), n && n.context && n.context.nodeType && (n = n.context), e.parseHTML) ? m.call(this, e.parseHTML(o[2], n && n.ownerDocument || n || document, !0), n, r) : (s = m.apply(this, arguments), t && void 0 !== t.selector ? (s.selector = t.selector, s.context = t.context) : (s.selector = "string" == typeof t ? t : "", t && (s.context = t.nodeType ? t : n || document)), s)
		}, e.fn.init.prototype = e.fn, e.find = function (e) {
			var t = Array.prototype.slice.call(arguments);
			if ("string" == typeof e && x.test(e)) try {
				document.querySelector(e)
			} catch (n) {
				e = e.replace(w, function (e, t, n, i) {
					return "[" + t + n + '"' + i + '"]'
				});
				try {
					document.querySelector(e), i("Attribute selector with '#' must be quoted: " + t[0]), t[0] = e
				} catch (e) {
					i("Attribute selector with '#' was not fixed: " + t[0])
				}
			}
			return v.apply(this, t)
		};
		var T;
		for (T in v) Object.prototype.hasOwnProperty.call(v, T) && (e.find[T] = v[T]);
		e.parseJSON = function (e) {
			return e ? y.apply(this, arguments) : (i("jQuery.parseJSON requires a valid JSON string"), null)
		}, e.uaMatch = function (e) {
			e = e.toLowerCase();
			var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
			return {
				browser: t[1] || "",
				version: t[2] || "0"
			}
		}, e.browser || (p = e.uaMatch(navigator.userAgent), g = {}, p.browser && (g[p.browser] = !0, g.version = p.version), g.chrome ? g.webkit = !0 : g.webkit && (g.safari = !0), e.browser = g), r(e, "browser", e.browser, "jQuery.browser is deprecated"), e.boxModel = e.support.boxModel = "CSS1Compat" === document.compatMode, r(e, "boxModel", e.boxModel, "jQuery.boxModel is deprecated"), r(e.support, "boxModel", e.support.boxModel, "jQuery.support.boxModel is deprecated"), e.sub = function () {
			function t(e, n) {
				return new t.fn.init(e, n)
			}
			e.extend(!0, t, this), t.superclass = this, (t.fn = t.prototype = this()).constructor = t, t.sub = this.sub, t.fn.init = function (i, r) {
				var o = e.fn.init.call(this, i, r, n);
				return o instanceof t ? o : t(o)
			}, t.fn.init.prototype = t.fn;
			var n = t(document);
			return i("jQuery.sub() is deprecated"), t
		}, e.fn.size = function () {
			return i("jQuery.fn.size() is deprecated; use the .length property"), this.length
		};
		var A = !1;
		e.swap && e.each(["height", "width", "reliableMarginRight"], function (t, n) {
			var i = e.cssHooks[n] && e.cssHooks[n].get;
			i && (e.cssHooks[n].get = function () {
				var e;
				return A = !0, e = i.apply(this, arguments), A = !1, e
			})
		}), e.swap = function (e, t, n, r) {
			var o, s, a = {};
			A || i("jQuery.swap() is undocumented and deprecated");
			for (s in t) a[s] = e.style[s], e.style[s] = t[s];
			o = n.apply(e, r || []);
			for (s in t) e.style[s] = a[s];
			return o
		}, e.ajaxSetup({
			converters: {
				"text json": e.parseJSON
			}
		});
		var S = e.fn.data;
		e.fn.data = function (t) {
			var n, r, o = this[0];
			return !o || "events" !== t || 1 !== arguments.length || (n = e.data(o, t), r = e._data(o, t), void 0 !== n && n !== r || void 0 === r) ? S.apply(this, arguments) : (i("Use of jQuery.fn.data('events') is deprecated"), r)
		};
		var k = /\/(java|ecma)script/i;
		e.clean || (e.clean = function (t, n, r, o) {
			n = (n = !(n = n || document).nodeType && n[0] || n).ownerDocument || n, i("jQuery.clean() is deprecated");
			var s, a, l, c, u = [];
			if (e.merge(u, e.buildFragment(t, n).childNodes), r)
				for (l = function (e) {
						return !e.type || k.test(e.type) ? o ? o.push(e.parentNode ? e.parentNode.removeChild(e) : e) : r.appendChild(e) : void 0
					}, s = 0; null != (a = u[s]); s++) e.nodeName(a, "script") && l(a) || (r.appendChild(a), void 0 !== a.getElementsByTagName && (c = e.grep(e.merge([], a.getElementsByTagName("script")), l), u.splice.apply(u, [s + 1, 0].concat(c)), s += c.length));
			return u
		});
		var I = e.event.add,
			P = e.event.remove,
			E = e.event.trigger,
			j = e.fn.toggle,
			N = e.fn.live,
			H = e.fn.die,
			L = e.fn.load,
			F = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
			D = new RegExp("\\b(?:" + F + ")\\b"),
			q = /(?:^|\s)hover(\.\S+|)\b/,
			O = function (t) {
				return "string" != typeof t || e.event.special.hover ? t : (q.test(t) && i("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), t && t.replace(q, "mouseenter$1 mouseleave$1"))
			};
		e.event.props && "attrChange" !== e.event.props[0] && e.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), e.event.dispatch && r(e.event, "handle", e.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), e.event.add = function (e, t, n, r, o) {
			e !== document && D.test(t) && i("AJAX events should be attached to document: " + t), I.call(this, e, O(t || ""), n, r, o)
		}, e.event.remove = function (e, t, n, i, r) {
			P.call(this, e, O(t) || "", n, i, r)
		}, e.each(["load", "unload", "error"], function (t, n) {
			e.fn[n] = function () {
				var e = Array.prototype.slice.call(arguments, 0);
				return "load" === n && "string" == typeof e[0] ? L.apply(this, e) : (i("jQuery.fn." + n + "() is deprecated"), e.splice(0, 0, n), arguments.length ? this.bind.apply(this, e) : (this.triggerHandler.apply(this, e), this))
			}
		}), e.fn.toggle = function (t, n) {
			if (!e.isFunction(t) || !e.isFunction(n)) return j.apply(this, arguments);
			i("jQuery.fn.toggle(handler, handler...) is deprecated");
			var r = arguments,
				o = t.guid || e.guid++,
				s = 0,
				a = function (n) {
					var i = (e._data(this, "lastToggle" + t.guid) || 0) % s;
					return e._data(this, "lastToggle" + t.guid, i + 1), n.preventDefault(), r[i].apply(this, arguments) || !1
				};
			for (a.guid = o; s < r.length;) r[s++].guid = o;
			return this.click(a)
		}, e.fn.live = function (t, n, r) {
			return i("jQuery.fn.live() is deprecated"), N ? N.apply(this, arguments) : (e(this.context).on(t, this.selector, n, r), this)
		}, e.fn.die = function (t, n) {
			return i("jQuery.fn.die() is deprecated"), H ? H.apply(this, arguments) : (e(this.context).off(t, this.selector || "**", n), this)
		}, e.event.trigger = function (e, t, n, r) {
			return n || D.test(e) || i("Global events are undocumented and deprecated"), E.call(this, e, t, n || document, r)
		}, e.each(F.split("|"), function (t, n) {
			e.event.special[n] = {
				setup: function () {
					var t = this;
					return t !== document && (e.event.add(document, n + "." + e.guid, function () {
						e.event.trigger(n, Array.prototype.slice.call(arguments, 1), t, !0)
					}), e._data(this, n, e.guid++)), !1
				},
				teardown: function () {
					return this !== document && e.event.remove(document, n + "." + e._data(this, n)), !1
				}
			}
		}), e.event.special.ready = {
			setup: function () {
				this === document && i("'ready' event is deprecated")
			}
		};
		var M = e.fn.andSelf || e.fn.addBack,
			R = e.fn.find;
		if (e.fn.andSelf = function () {
				return i("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments)
			}, e.fn.find = function (e) {
				var t = R.apply(this, arguments);
				return t.context = this.context, t.selector = this.selector ? this.selector + " " + e : e, t
			}, e.Callbacks) {
			var $ = e.Deferred,
				_ = [
					["resolve", "done", e.Callbacks("once memory"), e.Callbacks("once memory"), "resolved"],
					["reject", "fail", e.Callbacks("once memory"), e.Callbacks("once memory"), "rejected"],
					["notify", "progress", e.Callbacks("memory"), e.Callbacks("memory")]
				];
			e.Deferred = function (t) {
				var n = $(),
					r = n.promise();
				return n.pipe = r.pipe = function () {
					var t = arguments;
					return i("deferred.pipe() is deprecated"), e.Deferred(function (i) {
						e.each(_, function (o, s) {
							var a = e.isFunction(t[o]) && t[o];
							n[s[1]](function () {
								var t = a && a.apply(this, arguments);
								t && e.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[s[0] + "With"](this === r ? i.promise() : this, a ? [t] : arguments)
							})
						}), t = null
					}).promise()
				}, n.isResolved = function () {
					return i("deferred.isResolved is deprecated"), "resolved" === n.state()
				}, n.isRejected = function () {
					return i("deferred.isRejected is deprecated"), "rejected" === n.state()
				}, t && t.call(n, n), n
			}
		}
	}(jQuery, window),
	function (e) {
		"use strict";

		function t(e) {
			return (e || "").toLowerCase()
		}
		e.fn.cycle = function (n) {
			var i;
			return 0 !== this.length || e.isReady ? this.each(function () {
				var i, r, o, s, a = e(this),
					l = e.fn.cycle.log;
				if (!a.data("cycle.opts")) {
					(!1 === a.data("cycle-log") || n && !1 === n.log || r && !1 === r.log) && (l = e.noop), l("--c2 init--"), i = a.data();
					for (var c in i) i.hasOwnProperty(c) && /^cycle[A-Z]+/.test(c) && (s = i[c], o = c.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, t), l(o + ":", s, "(" + typeof s + ")"), i[o] = s);
					(r = e.extend({}, e.fn.cycle.defaults, i, n || {})).timeoutId = 0, r.paused = r.paused || !1, r.container = a, r._maxZ = r.maxZ, r.API = e.extend({
						_container: a
					}, e.fn.cycle.API), r.API.log = l, r.API.trigger = function (e, t) {
						return r.container.trigger(e, t), r.API
					}, a.data("cycle.opts", r), a.data("cycle.API", r.API), r.API.trigger("cycle-bootstrap", [r, r.API]), r.API.addInitialSlides(), r.API.preInitSlideshow(), r.slides.length && r.API.initSlideshow()
				}
			}) : (i = {
				s: this.selector,
				c: this.context
			}, e.fn.cycle.log("requeuing slideshow (dom not ready)"), e(function () {
				e(i.s, i.c).cycle(n)
			}), this)
		}, e.fn.cycle.API = {
			opts: function () {
				return this._container.data("cycle.opts")
			},
			addInitialSlides: function () {
				var t = this.opts(),
					n = t.slides;
				t.slideCount = 0, t.slides = e(), n = n.jquery ? n : t.container.find(n), t.random && n.sort(function () {
					return Math.random() - .5
				}), t.API.add(n)
			},
			preInitSlideshow: function () {
				var t = this.opts();
				t.API.trigger("cycle-pre-initialize", [t]);
				var n = e.fn.cycle.transitions[t.fx];
				n && e.isFunction(n.preInit) && n.preInit(t), t._preInitialized = !0
			},
			postInitSlideshow: function () {
				var t = this.opts();
				t.API.trigger("cycle-post-initialize", [t]);
				var n = e.fn.cycle.transitions[t.fx];
				n && e.isFunction(n.postInit) && n.postInit(t)
			},
			initSlideshow: function () {
				var t, n = this.opts(),
					i = n.container;
				n.API.calcFirstSlide(), "static" == n.container.css("position") && n.container.css("position", "relative"), e(n.slides[n.currSlide]).css({
					opacity: 1,
					display: "block",
					visibility: "visible"
				}), n.API.stackSlides(n.slides[n.currSlide], n.slides[n.nextSlide], !n.reverse), n.pauseOnHover && (!0 !== n.pauseOnHover && (i = e(n.pauseOnHover)), i.hover(function () {
					n.API.pause(!0)
				}, function () {
					n.API.resume(!0)
				})), n.timeout && (t = n.API.getSlideOpts(n.currSlide), n.API.queueTransition(t, t.timeout + n.delay)), n._initialized = !0, n.API.updateView(!0), n.API.trigger("cycle-initialized", [n]), n.API.postInitSlideshow()
			},
			pause: function (t) {
				var n = this.opts(),
					i = n.API.getSlideOpts(),
					r = n.hoverPaused || n.paused;
				t ? n.hoverPaused = !0 : n.paused = !0, r || (n.container.addClass("cycle-paused"), n.API.trigger("cycle-paused", [n]).log("cycle-paused"), i.timeout && (clearTimeout(n.timeoutId), n.timeoutId = 0, n._remainingTimeout -= e.now() - n._lastQueue, (n._remainingTimeout < 0 || isNaN(n._remainingTimeout)) && (n._remainingTimeout = void 0)))
			},
			resume: function (e) {
				var t = this.opts(),
					n = !t.hoverPaused && !t.paused;
				e ? t.hoverPaused = !1 : t.paused = !1, n || (t.container.removeClass("cycle-paused"), 0 === t.slides.filter(":animated").length && t.API.queueTransition(t.API.getSlideOpts(), t._remainingTimeout), t.API.trigger("cycle-resumed", [t, t._remainingTimeout]).log("cycle-resumed"))
			},
			add: function (t, n) {
				var i, r = this.opts(),
					o = r.slideCount;
				"string" == e.type(t) && (t = e.trim(t)), e(t).each(function () {
					var t, i = e(this);
					n ? r.container.prepend(i) : r.container.append(i), r.slideCount++, t = r.API.buildSlideOpts(i), r.slides = n ? e(i).add(r.slides) : r.slides.add(i), r.API.initSlide(t, i, --r._maxZ), i.data("cycle.opts", t), r.API.trigger("cycle-slide-added", [r, t, i])
				}), r.API.updateView(!0), r._preInitialized && 2 > o && r.slideCount >= 1 && (r._initialized ? r.timeout && (i = r.slides.length, r.nextSlide = r.reverse ? i - 1 : 1, r.timeoutId || r.API.queueTransition(r)) : r.API.initSlideshow())
			},
			calcFirstSlide: function () {
				var e, t = this.opts();
				((e = parseInt(t.startingSlide || 0, 10)) >= t.slides.length || 0 > e) && (e = 0), t.currSlide = e, t.reverse ? (t.nextSlide = e - 1, t.nextSlide < 0 && (t.nextSlide = t.slides.length - 1)) : (t.nextSlide = e + 1, t.nextSlide == t.slides.length && (t.nextSlide = 0))
			},
			calcNextSlide: function () {
				var e, t = this.opts();
				t.reverse ? (e = t.nextSlide - 1 < 0, t.nextSlide = e ? t.slideCount - 1 : t.nextSlide - 1, t.currSlide = e ? 0 : t.nextSlide + 1) : (e = t.nextSlide + 1 == t.slides.length, t.nextSlide = e ? 0 : t.nextSlide + 1, t.currSlide = e ? t.slides.length - 1 : t.nextSlide - 1)
			},
			calcTx: function (t, n) {
				var i, r = t;
				return r._tempFx ? i = e.fn.cycle.transitions[r._tempFx] : n && r.manualFx && (i = e.fn.cycle.transitions[r.manualFx]), i || (i = e.fn.cycle.transitions[r.fx]), r._tempFx = null, this.opts()._tempFx = null, i || (i = e.fn.cycle.transitions.fade, r.API.log('Transition "' + r.fx + '" not found.  Using fade.')), i
			},
			prepareTx: function (e, t) {
				var n, i, r, o, s, a = this.opts();
				return a.slideCount < 2 ? void(a.timeoutId = 0) : (!e || a.busy && !a.manualTrump || (a.API.stopTransition(), a.busy = !1, clearTimeout(a.timeoutId), a.timeoutId = 0), void(a.busy || (0 !== a.timeoutId || e) && (i = a.slides[a.currSlide], r = a.slides[a.nextSlide], o = a.API.getSlideOpts(a.nextSlide), s = a.API.calcTx(o, e), a._tx = s, e && void 0 !== o.manualSpeed && (o.speed = o.manualSpeed), a.nextSlide != a.currSlide && (e || !a.paused && !a.hoverPaused && a.timeout) ? (a.API.trigger("cycle-before", [o, i, r, t]), s.before && s.before(o, i, r, t), n = function () {
					a.busy = !1, a.container.data("cycle.opts") && (s.after && s.after(o, i, r, t), a.API.trigger("cycle-after", [o, i, r, t]), a.API.queueTransition(o), a.API.updateView(!0))
				}, a.busy = !0, s.transition ? s.transition(o, i, r, t, n) : a.API.doTransition(o, i, r, t, n), a.API.calcNextSlide(), a.API.updateView()) : a.API.queueTransition(o))))
			},
			doTransition: function (t, n, i, r, o) {
				var s = t,
					a = e(n),
					l = e(i),
					c = function () {
						l.animate(s.animIn || {
							opacity: 1
						}, s.speed, s.easeIn || s.easing, o)
					};
				l.css(s.cssBefore || {}), a.animate(s.animOut || {}, s.speed, s.easeOut || s.easing, function () {
					a.css(s.cssAfter || {}), s.sync || c()
				}), s.sync && c()
			},
			queueTransition: function (t, n) {
				var i = this.opts(),
					r = void 0 !== n ? n : t.timeout;
				return 0 === i.nextSlide && 0 == --i.loop ? (i.API.log("terminating; loop=0"), i.timeout = 0, r ? setTimeout(function () {
					i.API.trigger("cycle-finished", [i])
				}, r) : i.API.trigger("cycle-finished", [i]), void(i.nextSlide = i.currSlide)) : void 0 !== i.continueAuto && (!1 === i.continueAuto || e.isFunction(i.continueAuto) && !1 === i.continueAuto()) ? (i.API.log("terminating automatic transitions"), i.timeout = 0, void(i.timeoutId && clearTimeout(i.timeoutId))) : void(r && (i._lastQueue = e.now(), void 0 === n && (i._remainingTimeout = t.timeout), i.paused || i.hoverPaused || (i.timeoutId = setTimeout(function () {
					i.API.prepareTx(!1, !i.reverse)
				}, r))))
			},
			stopTransition: function () {
				var e = this.opts();
				e.slides.filter(":animated").length && (e.slides.stop(!1, !0), e.API.trigger("cycle-transition-stopped", [e])), e._tx && e._tx.stopTransition && e._tx.stopTransition(e)
			},
			advanceSlide: function (e) {
				var t = this.opts();
				return clearTimeout(t.timeoutId), t.timeoutId = 0, t.nextSlide = t.currSlide + e, t.nextSlide < 0 ? t.nextSlide = t.slides.length - 1 : t.nextSlide >= t.slides.length && (t.nextSlide = 0), t.API.prepareTx(!0, e >= 0), !1
			},
			buildSlideOpts: function (n) {
				var i, r, o = this.opts(),
					s = n.data() || {};
				for (var a in s) s.hasOwnProperty(a) && /^cycle[A-Z]+/.test(a) && (i = s[a], r = a.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, t), o.API.log("[" + (o.slideCount - 1) + "]", r + ":", i, "(" + typeof i + ")"), s[r] = i);
				(s = e.extend({}, e.fn.cycle.defaults, o, s)).slideNum = o.slideCount;
				try {
					delete s.API, delete s.slideCount, delete s.currSlide, delete s.nextSlide, delete s.slides
				} catch (e) {}
				return s
			},
			getSlideOpts: function (t) {
				var n = this.opts();
				void 0 === t && (t = n.currSlide);
				var i = n.slides[t],
					r = e(i).data("cycle.opts");
				return e.extend({}, n, r)
			},
			initSlide: function (t, n, i) {
				var r = this.opts();
				n.css(t.slideCss || {}), i > 0 && n.css("zIndex", i), isNaN(t.speed) && (t.speed = e.fx.speeds[t.speed] || e.fx.speeds._default), t.sync || (t.speed = t.speed / 2), n.addClass(r.slideClass)
			},
			updateView: function (e, t) {
				var n = this.opts();
				if (n._initialized) {
					var i = n.API.getSlideOpts(),
						r = n.slides[n.currSlide];
					!e && !0 !== t && (n.API.trigger("cycle-update-view-before", [n, i, r]), n.updateView < 0) || (n.slideActiveClass && n.slides.removeClass(n.slideActiveClass).eq(n.currSlide).addClass(n.slideActiveClass), e && n.hideNonActive && n.slides.filter(":not(." + n.slideActiveClass + ")").css("visibility", "hidden"), 0 === n.updateView && setTimeout(function () {
						n.API.trigger("cycle-update-view", [n, i, r, e])
					}, i.speed / (n.sync ? 2 : 1)), 0 !== n.updateView && n.API.trigger("cycle-update-view", [n, i, r, e]), e && n.API.trigger("cycle-update-view-after", [n, i, r]))
				}
			},
			getComponent: function (t) {
				var n = this.opts(),
					i = n[t];
				return "string" == typeof i ? /^\s*[\>|\+|~]/.test(i) ? n.container.find(i) : e(i) : i.jquery ? i : e(i)
			},
			stackSlides: function (t, n, i) {
				var r = this.opts();
				t || (t = r.slides[r.currSlide], n = r.slides[r.nextSlide], i = !r.reverse), e(t).css("zIndex", r.maxZ);
				var o, s = r.maxZ - 2,
					a = r.slideCount;
				if (i) {
					for (o = r.currSlide + 1; a > o; o++) e(r.slides[o]).css("zIndex", s--);
					for (o = 0; o < r.currSlide; o++) e(r.slides[o]).css("zIndex", s--)
				} else {
					for (o = r.currSlide - 1; o >= 0; o--) e(r.slides[o]).css("zIndex", s--);
					for (o = a - 1; o > r.currSlide; o--) e(r.slides[o]).css("zIndex", s--)
				}
				e(n).css("zIndex", r.maxZ - 1)
			},
			getSlideIndex: function (e) {
				return this.opts().slides.index(e)
			}
		}, e.fn.cycle.log = function () {
			window.console && console.log && console.log("[cycle2] " + Array.prototype.join.call(arguments, " "))
		}, e.fn.cycle.version = function () {
			return "Cycle2: 2.1.6"
		}, e.fn.cycle.transitions = {
			custom: {},
			none: {
				before: function (e, t, n, i) {
					e.API.stackSlides(n, t, i), e.cssBefore = {
						opacity: 1,
						visibility: "visible",
						display: "block"
					}
				}
			},
			fade: {
				before: function (t, n, i, r) {
					var o = t.API.getSlideOpts(t.nextSlide).slideCss || {};
					t.API.stackSlides(n, i, r), t.cssBefore = e.extend(o, {
						opacity: 0,
						visibility: "visible",
						display: "block"
					}), t.animIn = {
						opacity: 1
					}, t.animOut = {
						opacity: 0
					}
				}
			},
			fadeout: {
				before: function (t, n, i, r) {
					var o = t.API.getSlideOpts(t.nextSlide).slideCss || {};
					t.API.stackSlides(n, i, r), t.cssBefore = e.extend(o, {
						opacity: 1,
						visibility: "visible",
						display: "block"
					}), t.animOut = {
						opacity: 0
					}
				}
			},
			scrollHorz: {
				before: function (e, t, n, i) {
					e.API.stackSlides(t, n, i);
					var r = e.container.css("overflow", "hidden").width();
					e.cssBefore = {
						left: i ? r : -r,
						top: 0,
						opacity: 1,
						visibility: "visible",
						display: "block"
					}, e.cssAfter = {
						zIndex: e._maxZ - 2,
						left: 0
					}, e.animIn = {
						left: 0
					}, e.animOut = {
						left: i ? -r : r
					}
				}
			}
		}, e.fn.cycle.defaults = {
			allowWrap: !0,
			autoSelector: ".cycle-slideshow[data-cycle-auto-init!=false]",
			delay: 0,
			easing: null,
			fx: "fade",
			hideNonActive: !0,
			loop: 0,
			manualFx: void 0,
			manualSpeed: void 0,
			manualTrump: !0,
			maxZ: 100,
			pauseOnHover: !1,
			reverse: !1,
			slideActiveClass: "cycle-slide-active",
			slideClass: "cycle-slide",
			slideCss: {
				position: "absolute",
				top: 0,
				left: 0
			},
			slides: "> img",
			speed: 500,
			startingSlide: 0,
			sync: !0,
			timeout: 4e3,
			updateView: 0
		}, e(document).ready(function () {
			e(e.fn.cycle.defaults.autoSelector).cycle()
		})
	}(jQuery),
	function (e) {
		"use strict";

		function t(t, n) {
			var i, r, o, s = n.autoHeight;
			if ("container" == s) r = e(n.slides[n.currSlide]).outerHeight(), n.container.height(r);
			else if (n._autoHeightRatio) n.container.height(n.container.width() / n._autoHeightRatio);
			else if ("calc" === s || "number" == e.type(s) && s >= 0) {
				if ((o = "calc" === s ? function (t, n) {
						var i = 0,
							r = -1;
						return n.slides.each(function (t) {
							var n = e(this).height();
							n > r && (r = n, i = t)
						}), i
					}(0, n) : s >= n.slides.length ? 0 : s) == n._sentinelIndex) return;
				n._sentinelIndex = o, n._sentinel && n._sentinel.remove(), (i = e(n.slides[o].cloneNode(!0))).removeAttr("id name rel").find("[id],[name],[rel]").removeAttr("id name rel"), i.css({
					position: "static",
					visibility: "hidden",
					display: "block"
				}).prependTo(n.container).addClass("cycle-sentinel cycle-slide").removeClass("cycle-slide-active"), i.find("*").css("visibility", "hidden"), n._sentinel = i
			}
		}

		function n(t, n, i, r) {
			var o = e(r).outerHeight();
			n.container.animate({
				height: o
			}, n.autoHeightSpeed, n.autoHeightEasing)
		}

		function i(r, o) {
			o._autoHeightOnResize && (e(window).off("resize orientationchange", o._autoHeightOnResize), o._autoHeightOnResize = null), o.container.off("cycle-slide-added cycle-slide-removed", t), o.container.off("cycle-destroyed", i), o.container.off("cycle-before", n), o._sentinel && (o._sentinel.remove(), o._sentinel = null)
		}
		e.extend(e.fn.cycle.defaults, {
			autoHeight: 0,
			autoHeightSpeed: 250,
			autoHeightEasing: null
		}), e(document).on("cycle-initialized", function (r, o) {
			function s() {
				t(0, o)
			}
			var a, l = o.autoHeight,
				c = e.type(l),
				u = null;
			("string" === c || "number" === c) && (o.container.on("cycle-slide-added cycle-slide-removed", t), o.container.on("cycle-destroyed", i), "container" == l ? o.container.on("cycle-before", n) : "string" === c && /\d+\:\d+/.test(l) && (a = l.match(/(\d+)\:(\d+)/), a = a[1] / a[2], o._autoHeightRatio = a), "number" !== c && (o._autoHeightOnResize = function () {
				clearTimeout(u), u = setTimeout(s, 50)
			}, e(window).on("resize orientationchange", o._autoHeightOnResize)), setTimeout(s, 30))
		})
	}(jQuery),
	function (e) {
		"use strict";
		e.extend(e.fn.cycle.defaults, {
			caption: "> .cycle-caption",
			captionTemplate: "{{slideNum}} / {{slideCount}}",
			overlay: "> .cycle-overlay",
			overlayTemplate: "<div>{{title}}</div><div>{{desc}}</div>",
			captionModule: "caption"
		}), e(document).on("cycle-update-view", function (t, n, i, r) {
			"caption" === n.captionModule && e.each(["caption", "overlay"], function () {
				var e = i[this + "Template"],
					t = n.API.getComponent(this);
				t.length && e ? (t.html(n.API.tmpl(e, i, n, r)), t.show()) : t.hide()
			})
		}), e(document).on("cycle-destroyed", function (t, n) {
			var i;
			e.each(["caption", "overlay"], function () {
				var e = n[this + "Template"];
				n[this] && e && (i = n.API.getComponent("caption")).empty()
			})
		})
	}(jQuery),
	function (e) {
		"use strict";
		var t = e.fn.cycle;
		e.fn.cycle = function (n) {
			var i, r, o, s = e.makeArray(arguments);
			return "number" == e.type(n) ? this.cycle("goto", n) : "string" == e.type(n) ? this.each(function () {
				var a;
				return i = n, void 0 === (o = e(this).data("cycle.opts")) ? void t.log('slideshow must be initialized before sending commands; "' + i + '" ignored') : (i = "goto" == i ? "jump" : i, r = o.API[i], e.isFunction(r) ? ((a = e.makeArray(s)).shift(), r.apply(o.API, a)) : void t.log("unknown command: ", i))
			}) : t.apply(this, arguments)
		}, e.extend(e.fn.cycle, t), e.extend(t.API, {
			next: function () {
				var e = this.opts();
				if (!e.busy || e.manualTrump) {
					var t = e.reverse ? -1 : 1;
					!1 === e.allowWrap && e.currSlide + t >= e.slideCount || (e.API.advanceSlide(t), e.API.trigger("cycle-next", [e]).log("cycle-next"))
				}
			},
			prev: function () {
				var e = this.opts();
				if (!e.busy || e.manualTrump) {
					var t = e.reverse ? 1 : -1;
					!1 === e.allowWrap && e.currSlide + t < 0 || (e.API.advanceSlide(t), e.API.trigger("cycle-prev", [e]).log("cycle-prev"))
				}
			},
			destroy: function () {
				this.stop();
				var t = this.opts(),
					n = e.isFunction(e._data) ? e._data : e.noop;
				clearTimeout(t.timeoutId), t.timeoutId = 0, t.API.stop(), t.API.trigger("cycle-destroyed", [t]).log("cycle-destroyed"), t.container.removeData(), n(t.container[0], "parsedAttrs", !1), t.retainStylesOnDestroy || (t.container.removeAttr("style"), t.slides.removeAttr("style"), t.slides.removeClass(t.slideActiveClass)), t.slides.each(function () {
					var i = e(this);
					i.removeData(), i.removeClass(t.slideClass), n(this, "parsedAttrs", !1)
				})
			},
			jump: function (e, t) {
				var n, i = this.opts();
				if (!i.busy || i.manualTrump) {
					var r = parseInt(e, 10);
					if (isNaN(r) || 0 > r || r >= i.slides.length) return void i.API.log("goto: invalid slide index: " + r);
					if (r == i.currSlide) return void i.API.log("goto: skipping, already on slide", r);
					i.nextSlide = r, clearTimeout(i.timeoutId), i.timeoutId = 0, i.API.log("goto: ", r, " (zero-index)"), n = i.currSlide < i.nextSlide, i._tempFx = t, i.API.prepareTx(!0, n)
				}
			},
			stop: function () {
				var t = this.opts(),
					n = t.container;
				clearTimeout(t.timeoutId), t.timeoutId = 0, t.API.stopTransition(), t.pauseOnHover && (!0 !== t.pauseOnHover && (n = e(t.pauseOnHover)), n.off("mouseenter mouseleave")), t.API.trigger("cycle-stopped", [t]).log("cycle-stopped")
			},
			reinit: function () {
				var e = this.opts();
				e.API.destroy(), e.container.cycle()
			},
			remove: function (t) {
				for (var n, i, r = this.opts(), o = [], s = 1, a = 0; a < r.slides.length; a++) n = r.slides[a], a == t ? i = n : (o.push(n), e(n).data("cycle.opts").slideNum = s, s++);
				i && (r.slides = e(o), r.slideCount--, e(i).remove(), t == r.currSlide ? r.API.advanceSlide(1) : t < r.currSlide ? r.currSlide-- : r.currSlide++, r.API.trigger("cycle-slide-removed", [r, t, i]).log("cycle-slide-removed"), r.API.updateView())
			}
		}), e(document).on("click.cycle", "[data-cycle-cmd]", function (t) {
			t.preventDefault();
			var n = e(this),
				i = n.data("cycle-cmd"),
				r = n.data("cycle-context") || ".cycle-slideshow";
			e(r).cycle(i, n.data("cycle-arg"))
		})
	}(jQuery),
	function (e) {
		"use strict";

		function t(t, n) {
			var i;
			return t._hashFence ? void(t._hashFence = !1) : (i = window.location.hash.substring(1), void t.slides.each(function (r) {
				if (e(this).data("cycle-hash") == i) {
					if (!0 === n) t.startingSlide = r;
					else {
						var o = t.currSlide < r;
						t.nextSlide = r, t.API.prepareTx(!0, o)
					}
					return !1
				}
			}))
		}
		e(document).on("cycle-pre-initialize", function (n, i) {
			t(i, !0), i._onHashChange = function () {
				t(i, !1)
			}, e(window).on("hashchange", i._onHashChange)
		}), e(document).on("cycle-update-view", function (e, t, n) {
			n.hash && "#" + n.hash != window.location.hash && (t._hashFence = !0, window.location.hash = n.hash)
		}), e(document).on("cycle-destroyed", function (t, n) {
			n._onHashChange && e(window).off("hashchange", n._onHashChange)
		})
	}(jQuery),
	function (e) {
		"use strict";
		e.extend(e.fn.cycle.defaults, {
			loader: !1
		}), e(document).on("cycle-bootstrap", function (t, n) {
			var i;
			n.loader && (i = n.API.add, n.API.add = function (t, r) {
				function o(e, t) {
					return e.data("index") - t.data("index")
				}
				var s = [];
				if ("string" == e.type(t)) t = e.trim(t);
				else if ("array" === e.type(t))
					for (var a = 0; a < t.length; a++) t[a] = e(t[a])[0];
				var l = (t = e(t)).length;
				l && (t.css("visibility", "hidden").appendTo("body").each(function (t) {
					function a() {
						0 == --c && (--l, function (t) {
							var a;
							"wait" == n.loader ? (s.push(t), 0 === l && (s.sort(o), i.apply(n.API, [s, r]), n.container.removeClass("cycle-loading"))) : (a = e(n.slides[n.currSlide]), i.apply(n.API, [t, r]), a.show(), n.container.removeClass("cycle-loading"))
						}(u))
					}
					var c = 0,
						u = e(this),
						d = u.is("img") ? u : u.find("img");
					return u.data("index", t), (d = d.filter(":not(.cycle-loader-ignore)").filter(':not([src=""])')).length ? (c = d.length, void d.each(function () {
						this.complete ? a() : e(this).load(function () {
							a()
						}).on("error", function () {
							0 == --c && (n.API.log("slide skipped; img not loaded:", this.src), 0 == --l && "wait" == n.loader && i.apply(n.API, [s, r]))
						})
					})) : (--l, void s.push(u))
				}), l && n.container.addClass("cycle-loading"))
			})
		})
	}(jQuery),
	function (e) {
		"use strict";

		function t(t, n, i) {
			var r;
			t.API.getComponent("pager").each(function () {
				var o = e(this);
				if (n.pagerTemplate) {
					var s = t.API.tmpl(n.pagerTemplate, n, t, i[0]);
					r = e(s).appendTo(o)
				} else r = o.children().eq(t.slideCount - 1);
				r.on(t.pagerEvent, function (e) {
					t.pagerEventBubble || e.preventDefault(), t.API.page(o, e.currentTarget)
				})
			})
		}

		function n(e, t) {
			var n = this.opts();
			if (!n.busy || n.manualTrump) {
				var i = e.children().index(t),
					r = n.currSlide < i;
				n.currSlide != i && (n.nextSlide = i, n._tempFx = n.pagerFx, n.API.prepareTx(!0, r), n.API.trigger("cycle-pager-activated", [n, e, t]))
			}
		}
		e.extend(e.fn.cycle.defaults, {
			pager: "> .cycle-pager",
			pagerActiveClass: "cycle-pager-active",
			pagerEvent: "click.cycle",
			pagerEventBubble: void 0,
			pagerTemplate: "<span>&bull;</span>"
		}), e(document).on("cycle-bootstrap", function (e, n, i) {
			i.buildPagerLink = t
		}), e(document).on("cycle-slide-added", function (e, t, i, r) {
			t.pager && (t.API.buildPagerLink(t, i, r), t.API.page = n)
		}), e(document).on("cycle-slide-removed", function (t, n, i) {
			if (n.pager) {
				n.API.getComponent("pager").each(function () {
					var t = e(this);
					e(t.children()[i]).remove()
				})
			}
		}), e(document).on("cycle-update-view", function (t, n) {
			n.pager && n.API.getComponent("pager").each(function () {
				e(this).children().removeClass(n.pagerActiveClass).eq(n.currSlide).addClass(n.pagerActiveClass)
			})
		}), e(document).on("cycle-destroyed", function (e, t) {
			var n = t.API.getComponent("pager");
			n && (n.children().off(t.pagerEvent), t.pagerTemplate && n.empty())
		})
	}(jQuery),
	function (e) {
		"use strict";
		e.extend(e.fn.cycle.defaults, {
			next: "> .cycle-next",
			nextEvent: "click.cycle",
			disabledClass: "disabled",
			prev: "> .cycle-prev",
			prevEvent: "click.cycle",
			swipe: !1
		}), e(document).on("cycle-initialized", function (e, t) {
			if (t.API.getComponent("next").on(t.nextEvent, function (e) {
					e.preventDefault(), t.API.next()
				}), t.API.getComponent("prev").on(t.prevEvent, function (e) {
					e.preventDefault(), t.API.prev()
				}), t.swipe) {
				var n = t.swipeVert ? "swipeUp.cycle" : "swipeLeft.cycle swipeleft.cycle",
					i = t.swipeVert ? "swipeDown.cycle" : "swipeRight.cycle swiperight.cycle";
				t.container.on(n, function () {
					t._tempFx = t.swipeFx, t.API.next()
				}), t.container.on(i, function () {
					t._tempFx = t.swipeFx, t.API.prev()
				})
			}
		}), e(document).on("cycle-update-view", function (e, t) {
			if (!t.allowWrap) {
				var n = t.disabledClass,
					i = t.API.getComponent("next"),
					r = t.API.getComponent("prev"),
					o = t._prevBoundry || 0,
					s = void 0 !== t._nextBoundry ? t._nextBoundry : t.slideCount - 1;
				t.currSlide == s ? i.addClass(n).prop("disabled", !0) : i.removeClass(n).prop("disabled", !1), t.currSlide === o ? r.addClass(n).prop("disabled", !0) : r.removeClass(n).prop("disabled", !1)
			}
		}), e(document).on("cycle-destroyed", function (e, t) {
			t.API.getComponent("prev").off(t.nextEvent), t.API.getComponent("next").off(t.prevEvent), t.container.off("swipeleft.cycle swiperight.cycle swipeLeft.cycle swipeRight.cycle swipeUp.cycle swipeDown.cycle")
		})
	}(jQuery),
	function (e) {
		"use strict";
		e.extend(e.fn.cycle.defaults, {
			progressive: !1
		}), e(document).on("cycle-pre-initialize", function (t, n) {
			if (n.progressive) {
				var i, r, o = n.API,
					s = o.next,
					a = o.prev,
					l = o.prepareTx,
					c = e.type(n.progressive);
				if ("array" == c) i = n.progressive;
				else if (e.isFunction(n.progressive)) i = n.progressive(n);
				else if ("string" == c) {
					if (r = e(n.progressive), !(i = e.trim(r.html()))) return;
					if (/^(\[)/.test(i)) try {
						i = e.parseJSON(i)
					} catch (e) {
						return void o.log("error parsing progressive slides", e)
					} else(i = i.split(new RegExp(r.data("cycle-split") || "\n")))[i.length - 1] || i.pop()
				}
				l && (o.prepareTx = function (e, t) {
					var r, o;
					return e || 0 === i.length ? void l.apply(n.API, [e, t]) : void(t && n.currSlide == n.slideCount - 1 ? (o = i[0], i = i.slice(1), n.container.one("cycle-slide-added", function (e, t) {
						setTimeout(function () {
							t.API.advanceSlide(1)
						}, 50)
					}), n.API.add(o)) : t || 0 !== n.currSlide ? l.apply(n.API, [e, t]) : (r = i.length - 1, o = i[r], i = i.slice(0, r), n.container.one("cycle-slide-added", function (e, t) {
						setTimeout(function () {
							t.currSlide = 1, t.API.advanceSlide(-1)
						}, 50)
					}), n.API.add(o, !0)))
				}), s && (o.next = function () {
					var e = this.opts();
					if (i.length && e.currSlide == e.slideCount - 1) {
						var t = i[0];
						i = i.slice(1), e.container.one("cycle-slide-added", function (e, t) {
							s.apply(t.API), t.container.removeClass("cycle-loading")
						}), e.container.addClass("cycle-loading"), e.API.add(t)
					} else s.apply(e.API)
				}), a && (o.prev = function () {
					var e = this.opts();
					if (i.length && 0 === e.currSlide) {
						var t = i.length - 1,
							n = i[t];
						i = i.slice(0, t), e.container.one("cycle-slide-added", function (e, t) {
							t.currSlide = 1, t.API.advanceSlide(-1), t.container.removeClass("cycle-loading")
						}), e.container.addClass("cycle-loading"), e.API.add(n, !0)
					} else a.apply(e.API)
				})
			}
		})
	}(jQuery),
	function (e) {
		"use strict";
		e.extend(e.fn.cycle.defaults, {
			tmplRegex: "{{((.)?.*?)}}"
		}), e.extend(e.fn.cycle.API, {
			tmpl: function (t, n) {
				var i = new RegExp(n.tmplRegex || e.fn.cycle.defaults.tmplRegex, "g"),
					r = e.makeArray(arguments);
				return r.shift(), t.replace(i, function (t, n) {
					var i, o, s, a, l = n.split(".");
					for (i = 0; i < r.length; i++)
						if (s = r[i]) {
							if (l.length > 1)
								for (a = s, o = 0; o < l.length; o++) s = a, a = a[l[o]] || n;
							else a = s[n];
							if (e.isFunction(a)) return a.apply(s, r);
							if (void 0 !== a && null !== a && a != n) return a
						} return n
				})
			}
		})
	}(jQuery),
	function (e) {
		if ("function" == typeof define && define.amd) define(["jquery"], e);
		else if ("object" == typeof module && module.exports) {
			var t = require("jquery");
			e(t), module.exports = t
		} else e(jQuery)
	}(function (e) {
		function t(e) {
			this.init(e)
		}
		t.prototype = {
			value: 0,
			size: 100,
			startAngle: -Math.PI,
			thickness: "auto",
			fill: {
				gradient: ["#3aeabb", "#fdd250"]
			},
			emptyFill: "rgba(0, 0, 0, .1)",
			animation: {
				duration: 1200,
				easing: "circleProgressEasing"
			},
			animationStartValue: 0,
			reverse: !1,
			lineCap: "butt",
			insertMode: "prepend",
			constructor: t,
			el: null,
			canvas: null,
			ctx: null,
			radius: 0,
			arcFill: null,
			lastFrameValue: 0,
			init: function (t) {
				e.extend(this, t), this.radius = this.size / 2, this.initWidget(), this.initFill(), this.draw(), this.el.trigger("circle-inited")
			},
			initWidget: function () {
				this.canvas || (this.canvas = e("<canvas>")["prepend" == this.insertMode ? "prependTo" : "appendTo"](this.el)[0]);
				var t = this.canvas;
				if (t.width = this.size, t.height = this.size, this.ctx = t.getContext("2d"), window.devicePixelRatio > 1) {
					var n = window.devicePixelRatio;
					t.style.width = t.style.height = this.size + "px", t.width = t.height = this.size * n, this.ctx.scale(n, n)
				}
			},
			initFill: function () {
				function t() {
					var t = e("<canvas>")[0];
					t.width = n.size, t.height = n.size, t.getContext("2d").drawImage(h, 0, 0, o, o), n.arcFill = n.ctx.createPattern(t, "no-repeat"), n.drawFrame(n.lastFrameValue)
				}
				var n = this,
					i = this.fill,
					r = this.ctx,
					o = this.size;
				if (!i) throw Error("The fill is not specified!");
				if ("string" == typeof i && (i = {
						color: i
					}), i.color && (this.arcFill = i.color), i.gradient) {
					var s = i.gradient;
					if (1 == s.length) this.arcFill = s[0];
					else if (s.length > 1) {
						for (var a = i.gradientAngle || 0, l = i.gradientDirection || [o / 2 * (1 - Math.cos(a)), o / 2 * (1 + Math.sin(a)), o / 2 * (1 + Math.cos(a)), o / 2 * (1 - Math.sin(a))], c = r.createLinearGradient.apply(r, l), u = 0; u < s.length; u++) {
							var d = s[u],
								f = u / (s.length - 1);
							e.isArray(d) && (f = d[1], d = d[0]), c.addColorStop(f, d)
						}
						this.arcFill = c
					}
				}
				if (i.image) {
					var h;
					i.image instanceof Image ? h = i.image : (h = new Image, h.src = i.image), h.complete ? t() : h.onload = t
				}
			},
			draw: function () {
				this.animation ? this.drawAnimated(this.value) : this.drawFrame(this.value)
			},
			drawFrame: function (e) {
				this.lastFrameValue = e, this.ctx.clearRect(0, 0, this.size, this.size), this.drawEmptyArc(e), this.drawArc(e)
			},
			drawArc: function (e) {
				if (0 !== e) {
					var t = this.ctx,
						n = this.radius,
						i = this.getThickness(),
						r = this.startAngle;
					t.save(), t.beginPath(), this.reverse ? t.arc(n, n, n - i / 2, r - 2 * Math.PI * e, r) : t.arc(n, n, n - i / 2, r, r + 2 * Math.PI * e), t.lineWidth = i, t.lineCap = this.lineCap, t.strokeStyle = this.arcFill, t.stroke(), t.restore()
				}
			},
			drawEmptyArc: function (e) {
				var t = this.ctx,
					n = this.radius,
					i = this.getThickness(),
					r = this.startAngle;
				e < 1 && (t.save(), t.beginPath(), e <= 0 ? t.arc(n, n, n - i / 2, 0, 2 * Math.PI) : this.reverse ? t.arc(n, n, n - i / 2, r, r - 2 * Math.PI * e) : t.arc(n, n, n - i / 2, r + 2 * Math.PI * e, r), t.lineWidth = i, t.strokeStyle = this.emptyFill, t.stroke(), t.restore())
			},
			drawAnimated: function (t) {
				var n = this,
					i = this.el,
					r = e(this.canvas);
				r.stop(!0, !1), i.trigger("circle-animation-start"), r.css({
					animationProgress: 0
				}).animate({
					animationProgress: 1
				}, e.extend({}, this.animation, {
					step: function (e) {
						var r = n.animationStartValue * (1 - e) + t * e;
						n.drawFrame(r), i.trigger("circle-animation-progress", [e, r])
					}
				})).promise().always(function () {
					i.trigger("circle-animation-end")
				})
			},
			getThickness: function () {
				return e.isNumeric(this.thickness) ? this.thickness : this.size / 14
			},
			getValue: function () {
				return this.value
			},
			setValue: function (e) {
				this.animation && (this.animationStartValue = this.lastFrameValue), this.value = e, this.draw()
			}
		}, e.circleProgress = {
			defaults: t.prototype
		}, e.easing.circleProgressEasing = function (e) {
			return e < .5 ? .5 * (e *= 2) * e * e : 1 - .5 * (e = 2 - 2 * e) * e * e
		}, e.fn.circleProgress = function (n, i) {
			var r = "circle-progress",
				o = this.data(r);
			if ("widget" == n) {
				if (!o) throw Error('Calling "widget" method on not initialized instance is forbidden');
				return o.canvas
			}
			if ("value" == n) {
				if (!o) throw Error('Calling "value" method on not initialized instance is forbidden');
				if (void 0 === i) return o.getValue();
				var s = arguments[1];
				return this.each(function () {
					e(this).data(r).setValue(s)
				})
			}
			return this.each(function () {
				var i = e(this),
					o = i.data(r),
					s = e.isPlainObject(n) ? n : {};
				if (o) o.init(s);
				else {
					var a = e.extend({}, i.data());
					"string" == typeof a.fill && (a.fill = JSON.parse(a.fill)), "string" == typeof a.animation && (a.animation = JSON.parse(a.animation)), (s = e.extend(a, s)).el = i, o = new t(s), i.data(r, o)
				}
			})
		}
	}),
	function (e) {
		"function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
	}(function (e) {
		e.extend(e.fn, {
			validate: function (t) {
				if (this.length) {
					var n = e.data(this[0], "validator");
					return n || (this.attr("novalidate", "novalidate"), n = new e.validator(t, this[0]), e.data(this[0], "validator", n), n.settings.onsubmit && (this.on("click.validate", ":submit", function (t) {
						n.submitButton = t.currentTarget, e(this).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== e(this).attr("formnovalidate") && (n.cancelSubmit = !0)
					}), this.on("submit.validate", function (t) {
						function i() {
							var i, r;
							return n.submitButton && (n.settings.submitHandler || n.formSubmitted) && (i = e("<input type='hidden'/>").attr("name", n.submitButton.name).val(e(n.submitButton).val()).appendTo(n.currentForm)), !n.settings.submitHandler || (r = n.settings.submitHandler.call(n, n.currentForm, t), i && i.remove(), void 0 !== r && r)
						}
						return n.settings.debug && t.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, i()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : i() : (n.focusInvalid(), !1)
					})), n)
				}
				t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
			},
			valid: function () {
				var t, n, i;
				return e(this[0]).is("form") ? t = this.validate().form() : (i = [], t = !0, n = e(this[0].form).validate(), this.each(function () {
					(t = n.element(this) && t) || (i = i.concat(n.errorList))
				}), n.errorList = i), t
			},
			rules: function (t, n) {
				var i, r, o, s, a, l, c = this[0];
				if (null != c && (!c.form && c.hasAttribute("contenteditable") && (c.form = this.closest("form")[0], c.name = this.attr("name")), null != c.form)) {
					if (t) switch (i = e.data(c.form, "validator").settings, r = i.rules, o = e.validator.staticRules(c), t) {
						case "add":
							e.extend(o, e.validator.normalizeRule(n)), delete o.messages, r[c.name] = o, n.messages && (i.messages[c.name] = e.extend(i.messages[c.name], n.messages));
							break;
						case "remove":
							return n ? (l = {}, e.each(n.split(/\s/), function (e, t) {
								l[t] = o[t], delete o[t]
							}), l) : (delete r[c.name], o)
					}
					return (s = e.validator.normalizeRules(e.extend({}, e.validator.classRules(c), e.validator.attributeRules(c), e.validator.dataRules(c), e.validator.staticRules(c)), c)).required && (a = s.required, delete s.required, s = e.extend({
						required: a
					}, s)), s.remote && (a = s.remote, delete s.remote, s = e.extend(s, {
						remote: a
					})), s
				}
			}
		}), e.extend(e.expr.pseudos || e.expr[":"], {
			blank: function (t) {
				return !e.trim("" + e(t).val())
			},
			filled: function (t) {
				var n = e(t).val();
				return null !== n && !!e.trim("" + n)
			},
			unchecked: function (t) {
				return !e(t).prop("checked")
			}
		}), e.validator = function (t, n) {
			this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = n, this.init()
		}, e.validator.format = function (t, n) {
			return 1 === arguments.length ? function () {
				var n = e.makeArray(arguments);
				return n.unshift(t), e.validator.format.apply(this, n)
			} : void 0 === n ? t : (arguments.length > 2 && n.constructor !== Array && (n = e.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), e.each(n, function (e, n) {
				t = t.replace(new RegExp("\\{" + e + "\\}", "g"), function () {
					return n
				})
			}), t)
		}, e.extend(e.validator, {
			defaults: {
				messages: {},
				groups: {},
				rules: {},
				errorClass: "error",
				pendingClass: "pending",
				validClass: "valid",
				errorElement: "label",
				focusCleanup: !1,
				focusInvalid: !0,
				errorContainer: e([]),
				errorLabelContainer: e([]),
				onsubmit: !0,
				ignore: ":hidden",
				ignoreTitle: !1,
				onfocusin: function (e) {
					this.lastActive = e, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(e)))
				},
				onfocusout: function (e) {
					this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
				},
				onkeyup: function (t, n) {
					9 === n.which && "" === this.elementValue(t) || -1 !== e.inArray(n.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (t.name in this.submitted || t.name in this.invalid) && this.element(t)
				},
				onclick: function (e) {
					e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
				},
				highlight: function (t, n, i) {
					"radio" === t.type ? this.findByName(t.name).addClass(n).removeClass(i) : e(t).addClass(n).removeClass(i)
				},
				unhighlight: function (t, n, i) {
					"radio" === t.type ? this.findByName(t.name).removeClass(n).addClass(i) : e(t).removeClass(n).addClass(i)
				}
			},
			setDefaults: function (t) {
				e.extend(e.validator.defaults, t)
			},
			messages: {
				required: "This field is required.",
				remote: "Please fix this field.",
				email: "Please enter a valid email address.",
				url: "Please enter a valid URL.",
				date: "Please enter a valid date.",
				dateISO: "Please enter a valid date (ISO).",
				number: "Please enter a valid number.",
				digits: "Please enter only digits.",
				equalTo: "Please enter the same value again.",
				maxlength: e.validator.format("Please enter no more than {0} characters."),
				minlength: e.validator.format("Please enter at least {0} characters."),
				rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
				range: e.validator.format("Please enter a value between {0} and {1}."),
				max: e.validator.format("Please enter a value less than or equal to {0}."),
				min: e.validator.format("Please enter a value greater than or equal to {0}."),
				step: e.validator.format("Please enter a multiple of {0}.")
			},
			autoCreateRanges: !1,
			prototype: {
				init: function () {
					function t(t) {
						!this.form && this.hasAttribute("contenteditable") && (this.form = e(this).closest("form")[0], this.name = e(this).attr("name"));
						var n = e.data(this.form, "validator"),
							i = "on" + t.type.replace(/^validate/, ""),
							r = n.settings;
						r[i] && !e(this).is(r.ignore) && r[i].call(n, this, t)
					}
					this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
					var n, i = this.groups = {};
					e.each(this.settings.groups, function (t, n) {
						"string" == typeof n && (n = n.split(/\s/)), e.each(n, function (e, n) {
							i[n] = t
						})
					}), n = this.settings.rules, e.each(n, function (t, i) {
						n[t] = e.validator.normalizeRule(i)
					}), e(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", t).on("click.validate", "select, option, [type='radio'], [type='checkbox']", t), this.settings.invalidHandler && e(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
				},
				form: function () {
					return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
				},
				checkForm: function () {
					this.prepareForm();
					for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]);
					return this.valid()
				},
				element: function (t) {
					var n, i, r = this.clean(t),
						o = this.validationTargetFor(r),
						s = this,
						a = !0;
					return void 0 === o ? delete this.invalid[r.name] : (this.prepareElement(o), this.currentElements = e(o), (i = this.groups[o.name]) && e.each(this.groups, function (e, t) {
						t === i && e !== o.name && (r = s.validationTargetFor(s.clean(s.findByName(e)))) && r.name in s.invalid && (s.currentElements.push(r), a = s.check(r) && a)
					}), n = !1 !== this.check(o), a = a && n, this.invalid[o.name] = !n, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e(t).attr("aria-invalid", !n)), a
				},
				showErrors: function (t) {
					if (t) {
						var n = this;
						e.extend(this.errorMap, t), this.errorList = e.map(this.errorMap, function (e, t) {
							return {
								message: e,
								element: n.findByName(t)[0]
							}
						}), this.successList = e.grep(this.successList, function (e) {
							return !(e.name in t)
						})
					}
					this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
				},
				resetForm: function () {
					e.fn.resetForm && e(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
					var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
					this.resetElements(t)
				},
				resetElements: function (e) {
					var t;
					if (this.settings.unhighlight)
						for (t = 0; e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, ""), this.findByName(e[t].name).removeClass(this.settings.validClass);
					else e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
				},
				numberOfInvalids: function () {
					return this.objectLength(this.invalid)
				},
				objectLength: function (e) {
					var t, n = 0;
					for (t in e) void 0 !== e[t] && null !== e[t] && !1 !== e[t] && n++;
					return n
				},
				hideErrors: function () {
					this.hideThese(this.toHide)
				},
				hideThese: function (e) {
					e.not(this.containers).text(""), this.addWrapper(e).hide()
				},
				valid: function () {
					return 0 === this.size()
				},
				size: function () {
					return this.errorList.length
				},
				focusInvalid: function () {
					if (this.settings.focusInvalid) try {
						e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
					} catch (e) {}
				},
				findLastActive: function () {
					var t = this.lastActive;
					return t && 1 === e.grep(this.errorList, function (e) {
						return e.element.name === t.name
					}).length && t
				},
				elements: function () {
					var t = this,
						n = {};
					return e(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
						var i = this.name || e(this).attr("name");
						return !i && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = e(this).closest("form")[0], this.name = i), !(i in n || !t.objectLength(e(this).rules()) || (n[i] = !0, 0))
					})
				},
				clean: function (t) {
					return e(t)[0]
				},
				errors: function () {
					var t = this.settings.errorClass.split(" ").join(".");
					return e(this.settings.errorElement + "." + t, this.errorContext)
				},
				resetInternals: function () {
					this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([])
				},
				reset: function () {
					this.resetInternals(), this.currentElements = e([])
				},
				prepareForm: function () {
					this.reset(), this.toHide = this.errors().add(this.containers)
				},
				prepareElement: function (e) {
					this.reset(), this.toHide = this.errorsFor(e)
				},
				elementValue: function (t) {
					var n, i, r = e(t),
						o = t.type;
					return "radio" === o || "checkbox" === o ? this.findByName(t.name).filter(":checked").val() : "number" === o && void 0 !== t.validity ? t.validity.badInput ? "NaN" : r.val() : (n = t.hasAttribute("contenteditable") ? r.text() : r.val(), "file" === o ? "C:\\fakepath\\" === n.substr(0, 12) ? n.substr(12) : (i = n.lastIndexOf("/")) >= 0 ? n.substr(i + 1) : (i = n.lastIndexOf("\\")) >= 0 ? n.substr(i + 1) : n : "string" == typeof n ? n.replace(/\r/g, "") : n)
				},
				check: function (t) {
					t = this.validationTargetFor(this.clean(t));
					var n, i, r, o, s = e(t).rules(),
						a = e.map(s, function (e, t) {
							return t
						}).length,
						l = !1,
						c = this.elementValue(t);
					if ("function" == typeof s.normalizer ? o = s.normalizer : "function" == typeof this.settings.normalizer && (o = this.settings.normalizer), o) {
						if ("string" != typeof (c = o.call(t, c))) throw new TypeError("The normalizer should return a string value.");
						delete s.normalizer
					}
					for (i in s) {
						r = {
							method: i,
							parameters: s[i]
						};
						try {
							if ("dependency-mismatch" === (n = e.validator.methods[i].call(this, c, t, r.parameters)) && 1 === a) {
								l = !0;
								continue
							}
							if (l = !1, "pending" === n) return void(this.toHide = this.toHide.not(this.errorsFor(t)));
							if (!n) return this.formatAndAdd(t, r), !1
						} catch (e) {
							throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method.", e), e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method."), e
						}
					}
					if (!l) return this.objectLength(s) && this.successList.push(t), !0
				},
				customDataMessage: function (t, n) {
					return e(t).data("msg" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()) || e(t).data("msg")
				},
				customMessage: function (e, t) {
					var n = this.settings.messages[e];
					return n && (n.constructor === String ? n : n[t])
				},
				findDefined: function () {
					for (var e = 0; e < arguments.length; e++)
						if (void 0 !== arguments[e]) return arguments[e]
				},
				defaultMessage: function (t, n) {
					"string" == typeof n && (n = {
						method: n
					});
					var i = this.findDefined(this.customMessage(t.name, n.method), this.customDataMessage(t, n.method), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[n.method], "<strong>Warning: No message defined for " + t.name + "</strong>"),
						r = /\$?\{(\d+)\}/g;
					return "function" == typeof i ? i = i.call(this, n.parameters, t) : r.test(i) && (i = e.validator.format(i.replace(r, "{$1}"), n.parameters)), i
				},
				formatAndAdd: function (e, t) {
					var n = this.defaultMessage(e, t);
					this.errorList.push({
						message: n,
						element: e,
						method: t.method
					}), this.errorMap[e.name] = n, this.submitted[e.name] = n
				},
				addWrapper: function (e) {
					return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e
				},
				defaultShowErrors: function () {
					var e, t, n;
					for (e = 0; this.errorList[e]; e++) n = this.errorList[e], this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message);
					if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
						for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
					if (this.settings.unhighlight)
						for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
					this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
				},
				validElements: function () {
					return this.currentElements.not(this.invalidElements())
				},
				invalidElements: function () {
					return e(this.errorList).map(function () {
						return this.element
					})
				},
				showLabel: function (t, n) {
					var i, r, o, s, a = this.errorsFor(t),
						l = this.idOrName(t),
						c = e(t).attr("aria-describedby");
					a.length ? (a.removeClass(this.settings.validClass).addClass(this.settings.errorClass), a.html(n)) : (a = e("<" + this.settings.errorElement + ">").attr("id", l + "-error").addClass(this.settings.errorClass).html(n || ""), i = a, this.settings.wrapper && (i = a.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(i) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, i, e(t)) : i.insertAfter(t), a.is("label") ? a.attr("for", l) : 0 === a.parents("label[for='" + this.escapeCssMeta(l) + "']").length && (o = a.attr("id"), c ? c.match(new RegExp("\\b" + this.escapeCssMeta(o) + "\\b")) || (c += " " + o) : c = o, e(t).attr("aria-describedby", c), (r = this.groups[t.name]) && (s = this, e.each(s.groups, function (t, n) {
						n === r && e("[name='" + s.escapeCssMeta(t) + "']", s.currentForm).attr("aria-describedby", a.attr("id"))
					})))), !n && this.settings.success && (a.text(""), "string" == typeof this.settings.success ? a.addClass(this.settings.success) : this.settings.success(a, t)), this.toShow = this.toShow.add(a)
				},
				errorsFor: function (t) {
					var n = this.escapeCssMeta(this.idOrName(t)),
						i = e(t).attr("aria-describedby"),
						r = "label[for='" + n + "'], label[for='" + n + "'] *";
					return i && (r = r + ", #" + this.escapeCssMeta(i).replace(/\s+/g, ", #")), this.errors().filter(r)
				},
				escapeCssMeta: function (e) {
					return e.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1")
				},
				idOrName: function (e) {
					return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
				},
				validationTargetFor: function (t) {
					return this.checkable(t) && (t = this.findByName(t.name)), e(t).not(this.settings.ignore)[0]
				},
				checkable: function (e) {
					return /radio|checkbox/i.test(e.type)
				},
				findByName: function (t) {
					return e(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']")
				},
				getLength: function (t, n) {
					switch (n.nodeName.toLowerCase()) {
						case "select":
							return e("option:selected", n).length;
						case "input":
							if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length
					}
					return t.length
				},
				depend: function (e, t) {
					return !this.dependTypes[typeof e] || this.dependTypes[typeof e](e, t)
				},
				dependTypes: {
					boolean: function (e) {
						return e
					},
					string: function (t, n) {
						return !!e(t, n.form).length
					},
					function: function (e, t) {
						return e(t)
					}
				},
				optional: function (t) {
					var n = this.elementValue(t);
					return !e.validator.methods.required.call(this, n, t) && "dependency-mismatch"
				},
				startRequest: function (t) {
					this.pending[t.name] || (this.pendingRequest++, e(t).addClass(this.settings.pendingClass), this.pending[t.name] = !0)
				},
				stopRequest: function (t, n) {
					this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], e(t).removeClass(this.settings.pendingClass), n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.submitButton && e("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
				},
				previousValue: function (t, n) {
					return n = "string" == typeof n && n || "remote", e.data(t, "previousValue") || e.data(t, "previousValue", {
						old: null,
						valid: !0,
						message: this.defaultMessage(t, {
							method: n
						})
					})
				},
				destroy: function () {
					this.resetForm(), e(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
				}
			},
			classRuleSettings: {
				required: {
					required: !0
				},
				email: {
					email: !0
				},
				url: {
					url: !0
				},
				date: {
					date: !0
				},
				dateISO: {
					dateISO: !0
				},
				number: {
					number: !0
				},
				digits: {
					digits: !0
				},
				creditcard: {
					creditcard: !0
				}
			},
			addClassRules: function (t, n) {
				t.constructor === String ? this.classRuleSettings[t] = n : e.extend(this.classRuleSettings, t)
			},
			classRules: function (t) {
				var n = {},
					i = e(t).attr("class");
				return i && e.each(i.split(" "), function () {
					this in e.validator.classRuleSettings && e.extend(n, e.validator.classRuleSettings[this])
				}), n
			},
			normalizeAttributeRule: function (e, t, n, i) {
				/min|max|step/.test(n) && (null === t || /number|range|text/.test(t)) && (i = Number(i), isNaN(i) && (i = void 0)), i || 0 === i ? e[n] = i : t === n && "range" !== t && (e[n] = !0)
			},
			attributeRules: function (t) {
				var n, i, r = {},
					o = e(t),
					s = t.getAttribute("type");
				for (n in e.validator.methods) "required" === n ? ("" === (i = t.getAttribute(n)) && (i = !0), i = !!i) : i = o.attr(n), this.normalizeAttributeRule(r, s, n, i);
				return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, r
			},
			dataRules: function (t) {
				var n, i, r = {},
					o = e(t),
					s = t.getAttribute("type");
				for (n in e.validator.methods) i = o.data("rule" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()), this.normalizeAttributeRule(r, s, n, i);
				return r
			},
			staticRules: function (t) {
				var n = {},
					i = e.data(t.form, "validator");
				return i.settings.rules && (n = e.validator.normalizeRule(i.settings.rules[t.name]) || {}), n
			},
			normalizeRules: function (t, n) {
				return e.each(t, function (i, r) {
					if (!1 !== r) {
						if (r.param || r.depends) {
							var o = !0;
							switch (typeof r.depends) {
								case "string":
									o = !!e(r.depends, n.form).length;
									break;
								case "function":
									o = r.depends.call(n, n)
							}
							o ? t[i] = void 0 === r.param || r.param : (e.data(n.form, "validator").resetElements(e(n)), delete t[i])
						}
					} else delete t[i]
				}), e.each(t, function (i, r) {
					t[i] = e.isFunction(r) && "normalizer" !== i ? r(n) : r
				}), e.each(["minlength", "maxlength"], function () {
					t[this] && (t[this] = Number(t[this]))
				}), e.each(["rangelength", "range"], function () {
					var n;
					t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (n = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/), t[this] = [Number(n[0]), Number(n[1])]))
				}), e.validator.autoCreateRanges && (null != t.min && null != t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), null != t.minlength && null != t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t
			},
			normalizeRule: function (t) {
				if ("string" == typeof t) {
					var n = {};
					e.each(t.split(/\s/), function () {
						n[this] = !0
					}), t = n
				}
				return t
			},
			addMethod: function (t, n, i) {
				e.validator.methods[t] = n, e.validator.messages[t] = void 0 !== i ? i : e.validator.messages[t], n.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t))
			},
			methods: {
				required: function (t, n, i) {
					if (!this.depend(i, n)) return "dependency-mismatch";
					if ("select" === n.nodeName.toLowerCase()) {
						var r = e(n).val();
						return r && r.length > 0
					}
					return this.checkable(n) ? this.getLength(t, n) > 0 : t.length > 0
				},
				email: function (e, t) {
					return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)
				},
				url: function (e, t) {
					return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(e)
				},
				date: function (e, t) {
					return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString())
				},
				dateISO: function (e, t) {
					return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)
				},
				number: function (e, t) {
					return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
				},
				digits: function (e, t) {
					return this.optional(t) || /^\d+$/.test(e)
				},
				minlength: function (t, n, i) {
					var r = e.isArray(t) ? t.length : this.getLength(t, n);
					return this.optional(n) || r >= i
				},
				maxlength: function (t, n, i) {
					var r = e.isArray(t) ? t.length : this.getLength(t, n);
					return this.optional(n) || r <= i
				},
				rangelength: function (t, n, i) {
					var r = e.isArray(t) ? t.length : this.getLength(t, n);
					return this.optional(n) || r >= i[0] && r <= i[1]
				},
				min: function (e, t, n) {
					return this.optional(t) || e >= n
				},
				max: function (e, t, n) {
					return this.optional(t) || e <= n
				},
				range: function (e, t, n) {
					return this.optional(t) || e >= n[0] && e <= n[1]
				},
				step: function (t, n, i) {
					var r, o = e(n).attr("type"),
						s = "Step attribute on input type " + o + " is not supported.",
						a = new RegExp("\\b" + o + "\\b"),
						l = function (e) {
							var t = ("" + e).match(/(?:\.(\d+))?$/);
							return t && t[1] ? t[1].length : 0
						},
						c = function (e) {
							return Math.round(e * Math.pow(10, r))
						},
						u = !0;
					if (o && !a.test(["text", "number", "range"].join())) throw new Error(s);
					return r = l(i), (l(t) > r || c(t) % c(i) != 0) && (u = !1), this.optional(n) || u
				},
				equalTo: function (t, n, i) {
					var r = e(i);
					return this.settings.onfocusout && r.not(".validate-equalTo-blur").length && r.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
						e(n).valid()
					}), t === r.val()
				},
				remote: function (t, n, i, r) {
					if (this.optional(n)) return "dependency-mismatch";
					r = "string" == typeof r && r || "remote";
					var o, s, a, l = this.previousValue(n, r);
					return this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), l.originalMessage = l.originalMessage || this.settings.messages[n.name][r], this.settings.messages[n.name][r] = l.message, i = "string" == typeof i && {
						url: i
					} || i, a = e.param(e.extend({
						data: t
					}, i.data)), l.old === a ? l.valid : (l.old = a, o = this, this.startRequest(n), s = {}, s[n.name] = t, e.ajax(e.extend(!0, {
						mode: "abort",
						port: "validate" + n.name,
						dataType: "json",
						data: s,
						context: o.currentForm,
						success: function (e) {
							var i, s, a, c = !0 === e || "true" === e;
							o.settings.messages[n.name][r] = l.originalMessage, c ? (a = o.formSubmitted, o.resetInternals(), o.toHide = o.errorsFor(n), o.formSubmitted = a, o.successList.push(n), o.invalid[n.name] = !1, o.showErrors()) : (i = {}, s = e || o.defaultMessage(n, {
								method: r,
								parameters: t
							}), i[n.name] = l.message = s, o.invalid[n.name] = !0, o.showErrors(i)), l.valid = c, o.stopRequest(n, c)
						}
					}, i)), "pending")
				}
			}
		});
		var t, n = {};
		return e.ajaxPrefilter ? e.ajaxPrefilter(function (e, t, i) {
			var r = e.port;
			"abort" === e.mode && (n[r] && n[r].abort(), n[r] = i)
		}) : (t = e.ajax, e.ajax = function (i) {
			var r = ("mode" in i ? i : e.ajaxSettings).mode,
				o = ("port" in i ? i : e.ajaxSettings).port;
			return "abort" === r ? (n[o] && n[o].abort(), n[o] = t.apply(this, arguments), n[o]) : t.apply(this, arguments)
		}), e
	});
