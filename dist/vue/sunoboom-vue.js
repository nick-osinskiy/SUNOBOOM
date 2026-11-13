// src/vue/legacy/createFeatureMounter.js
function e({ createApp: e, host: t, pinia: n, router: r, resolveTarget: i, warn: a = (...e) => console.warn(...e) }) {
	let o = /* @__PURE__ */ new WeakMap();
	function s(e, t) {
		e.innerHTML = t.html;
		for (let [n, r] of t.attributes) r === null ? e.removeAttribute(n) : e.setAttribute(n, r);
	}
	function c(e, t) {
		if (o.get(e) === t) {
			o.delete(e);
			try {
				t.app.unmount();
			} catch (e) {
				a("[SUNOBOOM] Vue cleanup failed.", e);
			} finally {
				s(e, t.fallback);
			}
		}
	}
	function l(l, u, d = {}, { vueRouter: f = !1 } = {}) {
		let p = i(l);
		if (!p || p.nodeType !== 1 || !u) return null;
		let m = o.get(p);
		m && c(p, m);
		let h = {
			html: p.innerHTML,
			attributes: ["data-v-app", "v-cloak"].map((e) => [e, p.getAttribute(e)])
		}, g, _, v;
		try {
			if (g = e(t, {
				component: u,
				componentProps: d
			}), g.use(n), f && g.use(r), v = g.config.errorHandler, g.config.errorHandler = (e) => {
				_ ??= e;
			}, g.mount(p), _) throw _;
		} catch (e) {
			try {
				g?.unmount();
			} catch (e) {
				a("[SUNOBOOM] Vue cleanup failed.", e);
			} finally {
				s(p, h);
			}
			return a("[SUNOBOOM] Vue mount failed; legacy interface retained.", e), null;
		} finally {
			g && (g.config.errorHandler = v);
		}
		let y = {
			app: g,
			fallback: h
		};
		return o.set(p, y), () => c(p, y);
	}
	function u(e) {
		let t = i(e);
		if (!t) return;
		let n = o.get(t);
		n && c(t, n);
	}
	return {
		mountVueFeature: l,
		unmountVueFeature: u
	};
}
// node_modules/@vue/shared/dist/shared.esm-bundler.js
// @__NO_SIDE_EFFECTS__
function t(e) {
	let t = /* @__PURE__ */ Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var n = {}, r = [], i = () => {}, a = () => !1, o = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), s = (e) => e.startsWith("onUpdate:"), c = Object.assign, l = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, u = Object.prototype.hasOwnProperty, d = (e, t) => u.call(e, t), f = Array.isArray, p = (e) => S(e) === "[object Map]", m = (e) => S(e) === "[object Set]", h = (e) => S(e) === "[object Date]", g = (e) => typeof e == "function", _ = (e) => typeof e == "string", v = (e) => typeof e == "symbol", y = (e) => typeof e == "object" && !!e, b = (e) => (y(e) || g(e)) && g(e.then) && g(e.catch), x = Object.prototype.toString, S = (e) => x.call(e), C = (e) => S(e).slice(8, -1), ee = (e) => S(e) === "[object Object]", te = (e) => _(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ne = /* @__PURE__ */ t(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), re = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, ie = /-\w/g, w = /* @__PURE__ */ re((e) => e.replace(ie, (e) => e.slice(1).toUpperCase())), ae = /\B([A-Z])/g, T = /* @__PURE__ */ re((e) => e.replace(ae, "-$1").toLowerCase()), oe = /* @__PURE__ */ re((e) => e.charAt(0).toUpperCase() + e.slice(1)), se = /* @__PURE__ */ re((e) => e ? `on${oe(e)}` : ""), ce = (e, t) => !Object.is(e, t), le = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, ue = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, de = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, fe, pe = () => fe ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function E(e) {
	if (f(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = _(r) ? _e(r) : E(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	}
	if (_(e) || y(e)) return e;
}
var me = /;(?![^(]*\))/g, he = /:([^]+)/, ge = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function _e(e) {
	let t = {};
	return e.replace(ge, (e) => e.startsWith("/*") ? "" : e).split(me).forEach((e) => {
		if (e) {
			let n = e.split(he);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function D(e) {
	let t = "";
	if (_(e)) t = e;
	else if (f(e)) for (let n = 0; n < e.length; n++) {
		let r = D(e[n]);
		r && (t += r + " ");
	}
	else if (y(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
function ve(e) {
	if (!e) return null;
	let { class: t, style: n } = e;
	return t && !_(t) && (e.class = D(t)), n && (e.style = E(n)), e;
}
var ye = /* @__PURE__ */ t("itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly");
function be(e) {
	return !!e || e === "";
}
function xe(e, t, n) {
	if (e.length !== t.length) return !1;
	let r = !0;
	for (let i = 0; r && i < e.length; i++) r = Te(e[i], t[i], n);
	return r;
}
function Se(e, t, n) {
	if (e.size !== t.size) return !1;
	let r = Array.from(t), i = new Uint8Array(r.length);
	for (let t of e) {
		let e = -1;
		for (let a = 0; a < r.length; a++) if (!i[a] && Te(t, r[a], n)) {
			e = a;
			break;
		}
		if (e < 0) return !1;
		i[e] = 1;
	}
	return !0;
}
function Ce(e, t, n) {
	let r = p(e), i = p(t);
	if (r || i || (r = m(e), i = m(t), r || i)) return r && i ? Se(e, t, n) : !1;
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let r in e) {
		let i = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
		if (i && !a || !i && a || !Te(e[r], t[r], n)) return !1;
	}
	return String(e) === String(t);
}
function we(e, t, n, r) {
	n ||= [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()];
	let [i, a] = n;
	if (i.has(e) || a.has(t)) return i.get(e) === t && a.get(t) === e;
	i.set(e, t), a.set(t, e);
	let o = r(e, t, n);
	return i.delete(e), a.delete(t), o;
}
function Te(e, t, n) {
	if (e === t) return !0;
	let r = h(e), i = h(t);
	return r || i ? r && i ? e.getTime() === t.getTime() : !1 : (r = v(e), i = v(t), r || i ? e === t : (r = f(e), i = f(t), r || i ? r && i ? we(e, t, n, xe) : !1 : (r = y(e), i = y(t), r || i ? !r || !i ? !1 : we(e, t, n, Ce) : String(e) === String(t))));
}
function Ee(e, t) {
	return e.findIndex((e) => Te(e, t));
}
var De = (e) => !!(e && e.__v_isRef === !0), O = (e) => _(e) ? e : e == null ? "" : f(e) || y(e) && (e.toString === x || !g(e.toString)) ? De(e) ? O(e.value) : JSON.stringify(e, Oe, 2) : String(e), Oe = (e, t) => De(t) ? Oe(e, t.value) : p(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[ke(t, r) + " =>"] = n, e), {}) } : m(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => ke(e)) } : v(t) ? ke(t) : y(t) && !f(t) && !ee(t) ? String(t) : t, ke = (e, t = "") => v(e) ? `Symbol(${e.description ?? t})` : e, k, Ae = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && k && (k.active ? (this.parent = k, this.index = (k.scopes || (k.scopes = [])).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
	}
	get active() {
		return this._active;
	}
	pause() {
		if (this._active) {
			this._isPaused = !0;
			let e, t;
			if (this.scopes) {
				let n = this.scopes.slice();
				for (e = 0, t = n.length; e < t; e++) n[e].pause();
			}
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].pause();
		}
	}
	resume() {
		if (this._active && this._isPaused) {
			this._isPaused = !1;
			let e, t;
			if (this.scopes) {
				let n = this.scopes.slice();
				for (e = 0, t = n.length; e < t; e++) n[e].resume();
			}
			let n = this.effects.slice();
			for (e = 0, t = n.length; e < t; e++) n[e].resume();
		}
	}
	run(e) {
		if (this._active) {
			let t = k;
			try {
				return k = this, e();
			} finally {
				k = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = k, k = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (k === this) k = this.prevScope;
			else {
				let e = k;
				for (; e;) {
					if (e.prevScope === this) {
						e.prevScope = this.prevScope;
						break;
					}
					e = e.prevScope;
				}
			}
			this.prevScope = void 0;
		}
	}
	stop(e) {
		if (this._active) {
			this._active = !1;
			let t, n;
			for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
			for (this.effects.length = 0, t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
			if (this.cleanups.length = 0, this.scopes) {
				let e = this.scopes.slice();
				for (t = 0, n = e.length; t < n; t++) e[t].stop(!0);
				this.scopes.length = 0;
			}
			if (!this.detached && this.parent && !e) {
				let e = this.parent.scopes.pop();
				e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index);
			}
			this.parent = void 0;
		}
	}
};
function je(e) {
	return new Ae(e);
}
function Me() {
	return k;
}
function Ne(e, t = !1) {
	k && (k.active ? k.cleanups.push(e) : e());
}
var A, Pe = /* @__PURE__ */ new WeakSet(), Fe = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, k && (k.active ? k.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Pe.has(this) && (Pe.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ze(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, Qe(this), He(this);
		let e = A, t = Je;
		A = this, Je = !0;
		try {
			return this.fn();
		} finally {
			Ue(this), A = e, Je = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) Ke(e);
			this.deps = this.depsTail = void 0, Qe(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Pe.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		We(this) && this.run();
	}
	get dirty() {
		return We(this);
	}
}, Ie = 0, Le, Re;
function ze(e, t = !1) {
	e.flags |= 8, t ? (e.next = Re, Re = e) : (e.next = Le, Le = e);
}
function Be() {
	Ie++;
}
function Ve() {
	if (--Ie > 0) return;
	if (Re) {
		let e = Re;
		for (Re = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Le;) {
		let t = Le;
		for (Le = void 0; t;) {
			let n = t.next;
			if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
				t.trigger();
			} catch (t) {
				e ||= t;
			}
			t = n;
		}
	}
	if (e) throw e;
}
function He(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ue(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), Ke(r), qe(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function We(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Ge(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function Ge(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === $e) || (e.globalVersion = $e, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !We(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = A, r = Je;
	A = e, Je = !0;
	try {
		He(e);
		let n = e.fn(e._value);
		(t.version === 0 || ce(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		A = n, Je = r, Ue(e), e.flags &= -3;
	}
}
function Ke(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) Ke(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function qe(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var Je = !0, Ye = [];
function Xe() {
	Ye.push(Je), Je = !1;
}
function Ze() {
	let e = Ye.pop();
	Je = e === void 0 || e;
}
function Qe(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = A;
		A = void 0;
		try {
			t();
		} finally {
			A = e;
		}
	}
}
var $e = 0, et = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, tt = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!A || !Je || A === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== A) t = this.activeLink = new et(A, this), A.deps ? (t.prevDep = A.depsTail, A.depsTail.nextDep = t, A.depsTail = t) : A.deps = A.depsTail = t, nt(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = A.depsTail, t.nextDep = void 0, A.depsTail.nextDep = t, A.depsTail = t, A.deps === t && (A.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, $e++, this.notify(e);
	}
	notify(e) {
		Be();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Ve();
		}
	}
};
function nt(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) nt(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var rt = /* @__PURE__ */ new WeakMap(), it = /* @__PURE__ */ Symbol(""), at = /* @__PURE__ */ Symbol(""), ot = /* @__PURE__ */ Symbol("");
function st(e, t, n) {
	if (Je && A) {
		let t = rt.get(e);
		t || rt.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new tt()), r.map = t, r.key = n), r.track();
	}
}
function ct(e, t, n, r, i, a) {
	let o = rt.get(e);
	if (!o) {
		$e++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Be(), t === "clear") o.forEach(s);
	else {
		let i = f(e), a = i && te(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === ot || !v(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(ot)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(it)), p(e) && s(o.get(at)));
				break;
			case "delete":
				i || (s(o.get(it)), p(e) && s(o.get(at)));
				break;
			case "set": p(e) && s(o.get(it));
		}
	}
	Ve();
}
function lt(e, t) {
	let n = rt.get(e);
	return n && n.get(t);
}
function ut(e) {
	let t = /* @__PURE__ */ j(e);
	return t === e || (st(t, "iterate", ot), /* @__PURE__ */ Xt(e)) ? t : /* @__PURE__ */ Yt(e) ? /* @__PURE__ */ Jt(e) ? t.map((e) => en($t(e))) : t.map(en) : t.map($t);
}
function dt(e) {
	return st(e = /* @__PURE__ */ j(e), "iterate", ot), e;
}
function ft(e, t) {
	return /* @__PURE__ */ Yt(e) ? en(/* @__PURE__ */ Jt(e) ? $t(t) : t) : $t(t);
}
var pt = {
	__proto__: null,
	[Symbol.iterator]() {
		return mt(this, Symbol.iterator, (e) => ft(this, e));
	},
	concat(...e) {
		return ut(this).concat(...e.map((e) => f(e) ? ut(e) : e));
	},
	entries() {
		return mt(this, "entries", (e) => (e[1] = ft(this, e[1]), e));
	},
	every(e, t) {
		return _t(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return _t(this, "filter", e, t, (e) => e.map((e) => ft(this, e)), arguments);
	},
	find(e, t) {
		return _t(this, "find", e, t, (e) => ft(this, e), arguments);
	},
	findIndex(e, t) {
		return _t(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return _t(this, "findLast", e, t, (e) => ft(this, e), arguments);
	},
	findLastIndex(e, t) {
		return _t(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return _t(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return yt(this, "includes", e);
	},
	indexOf(...e) {
		return yt(this, "indexOf", e);
	},
	join(e) {
		return ut(this).join(e);
	},
	lastIndexOf(...e) {
		return yt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return _t(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return bt(this, "pop");
	},
	push(...e) {
		return bt(this, "push", e);
	},
	reduce(e, ...t) {
		return vt(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return vt(this, "reduceRight", e, t);
	},
	shift() {
		return bt(this, "shift");
	},
	some(e, t) {
		return _t(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return bt(this, "splice", e);
	},
	toReversed() {
		return ut(this).toReversed();
	},
	toSorted(e) {
		return ut(this).toSorted(e);
	},
	toSpliced(...e) {
		return ut(this).toSpliced(...e);
	},
	unshift(...e) {
		return bt(this, "unshift", e);
	},
	values() {
		return mt(this, "values", (e) => ft(this, e));
	}
};
function mt(e, t, n) {
	let r = dt(e), i = r[t], a = i.call(r);
	if (r !== e && !/* @__PURE__ */ Xt(e)) {
		if (a[Symbol.toStringTag] === "Array Iterator") {
			let e = Object.create(Object.getPrototypeOf(a));
			return e.next = () => ht(a.next(), n), i !== gt[t] && Object.defineProperties(e, {
				return: { get() {
					let e = a.return;
					return typeof e == "function" ? e.bind(a) : e;
				} },
				throw: { get() {
					let e = a.throw;
					return typeof e == "function" ? e.bind(a) : e;
				} }
			}), e;
		}
		a._next = a.next, a.next = () => ht(a._next(), n);
	}
	return a;
}
function ht(e, t) {
	return e.done || (e.value = t(e.value)), e;
}
var gt = Array.prototype;
function _t(e, t, n, r, i, a) {
	let o = dt(e), s = o !== e && !/* @__PURE__ */ Xt(e), c = o[t];
	if (c !== gt[t]) {
		let t = c.apply(e, a);
		return s ? $t(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, ft(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function vt(e, t, n, r) {
	let i = dt(e), a = i !== e && !/* @__PURE__ */ Xt(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = ft(e, t)), n.call(this, t, ft(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? ft(e, c) : c;
}
function yt(e, t, n) {
	let r = /* @__PURE__ */ j(e);
	st(r, "iterate", ot);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Zt(n[0]) ? (n[0] = /* @__PURE__ */ j(n[0]), r[t](...n)) : i;
}
function bt(e, t, n = []) {
	Xe(), Be();
	let r = (/* @__PURE__ */ j(e))[t].apply(e, n);
	return Ve(), Ze(), r;
}
var xt = /* @__PURE__ */ t("__proto__,__v_isRef,__isVue"), St = /* @__PURE__ */ new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(v));
function Ct(e) {
	v(e) || (e = String(e));
	let t = /* @__PURE__ */ j(this);
	return st(t, "has", e), t.hasOwnProperty(e);
}
var wt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Ht : Vt : i ? Bt : zt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = f(e);
		if (!r) {
			let e;
			if (a && (e = pt[t])) return e;
			if (t === "hasOwnProperty") return Ct;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ M(e) ? e : n);
		if ((v(t) ? St.has(t) : xt(t)) || (r || st(e, "get", t), i)) return o;
		if (/* @__PURE__ */ M(o)) {
			let e = a && te(t) ? o : o.value;
			return r && y(e) ? /* @__PURE__ */ Kt(e) : e;
		}
		return y(o) ? r ? /* @__PURE__ */ Kt(o) : /* @__PURE__ */ Wt(o) : o;
	}
}, Tt = class extends wt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = f(e) && te(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Yt(i);
			if (!/* @__PURE__ */ Xt(n) && !/* @__PURE__ */ Yt(n) && (i = /* @__PURE__ */ j(i), n = /* @__PURE__ */ j(n)), !a && /* @__PURE__ */ M(i) && !/* @__PURE__ */ M(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : d(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ M(e) ? e : r);
		return e === /* @__PURE__ */ j(r) && s && (o ? ce(n, i) && ct(e, "set", t, n, i) : ct(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = d(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && ct(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return v(t) && St.has(t) || st(e, "has", t), n;
	}
	ownKeys(e) {
		return st(e, "iterate", f(e) ? "length" : it), Reflect.ownKeys(e);
	}
}, Et = class extends wt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, Dt = /* @__PURE__ */ new Tt(), Ot = /* @__PURE__ */ new Et(), kt = /* @__PURE__ */ new Tt(!0), At = (e) => e, jt = (e) => Reflect.getPrototypeOf(e);
function Mt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ j(i), o = p(a), s = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = i[e](...r), d = n ? At : t ? en : $t;
		return !t && st(a, "iterate", l ? at : it), c(Object.create(u), { next() {
			let { value: e, done: t } = u.next();
			return t ? {
				value: e,
				done: t
			} : {
				value: s ? [d(e[0]), d(e[1])] : d(e),
				done: t
			};
		} });
	};
}
function Nt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function Pt(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ j(r), a = /* @__PURE__ */ j(n);
			e || (ce(n, a) && st(i, "get", n), st(i, "get", a));
			let { has: o } = jt(i), s = t ? At : e ? en : $t;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && st(/* @__PURE__ */ j(t), "iterate", it), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ j(n), i = /* @__PURE__ */ j(t);
			return e || (ce(t, i) && st(r, "has", t), st(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ j(a), s = t ? At : e ? en : $t;
			return !e && st(o, "iterate", it), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return c(n, e ? {
		add: Nt("add"),
		set: Nt("set"),
		delete: Nt("delete"),
		clear: Nt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ j(this), r = jt(n), i = /* @__PURE__ */ j(e), a = !t && !/* @__PURE__ */ Xt(e) && !/* @__PURE__ */ Yt(e) ? i : e;
			return r.has.call(n, a) || ce(e, a) && r.has.call(n, e) || ce(i, a) && r.has.call(n, i) || (n.add(a), ct(n, "add", a, a)), this;
		},
		set(e, n) {
			t || /* @__PURE__ */ Xt(n) || /* @__PURE__ */ Yt(n) || (n = /* @__PURE__ */ j(n));
			let r = /* @__PURE__ */ j(this), { has: i, get: a } = jt(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ j(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? ce(n, s) && ct(r, "set", e, n, s) : ct(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ j(this), { has: n, get: r } = jt(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ j(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && ct(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ j(this), t = e.size !== 0, n = e.clear();
			return t && ct(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = Mt(r, e, t);
	}), n;
}
function Ft(e, t) {
	let n = Pt(e, t);
	return (r, i, a) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_isShallow" ? t : i === "__v_raw" ? r : Reflect.get(d(n, i) && i in r ? n : r, i, a);
}
var It = { get: /* @__PURE__ */ Ft(!1, !1) }, Lt = { get: /* @__PURE__ */ Ft(!1, !0) }, Rt = { get: /* @__PURE__ */ Ft(!0, !1) }, zt = /* @__PURE__ */ new WeakMap(), Bt = /* @__PURE__ */ new WeakMap(), Vt = /* @__PURE__ */ new WeakMap(), Ht = /* @__PURE__ */ new WeakMap();
function Ut(e) {
	switch (e) {
		case "Object":
		case "Array": return 1;
		case "Map":
		case "Set":
		case "WeakMap":
		case "WeakSet": return 2;
		default: return 0;
	}
}
// @__NO_SIDE_EFFECTS__
function Wt(e) {
	return /* @__PURE__ */ Yt(e) ? e : qt(e, !1, Dt, It, zt);
}
// @__NO_SIDE_EFFECTS__
function Gt(e) {
	return qt(e, !1, kt, Lt, Bt);
}
// @__NO_SIDE_EFFECTS__
function Kt(e) {
	return qt(e, !0, Ot, Rt, Vt);
}
function qt(e, t, n, r, i) {
	if (!y(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Ut(C(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function Jt(e) {
	return /* @__PURE__ */ Yt(e) ? /* @__PURE__ */ Jt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Yt(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Xt(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Zt(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function j(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ j(t) : e;
}
function Qt(e) {
	return !d(e, "__v_skip") && Object.isExtensible(e) && ue(e, "__v_skip", !0), e;
}
var $t = (e) => y(e) ? /* @__PURE__ */ Wt(e) : e, en = (e) => y(e) ? /* @__PURE__ */ Kt(e) : e;
// @__NO_SIDE_EFFECTS__
function M(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function N(e) {
	return tn(e, !1);
}
// @__NO_SIDE_EFFECTS__
function P(e) {
	return tn(e, !0);
}
function tn(e, t) {
	return /* @__PURE__ */ M(e) ? e : new nn(e, t);
}
var nn = class {
	constructor(e, t) {
		this.dep = new tt(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ j(e), this._value = t ? e : $t(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Xt(e) || /* @__PURE__ */ Yt(e);
		e = n ? e : /* @__PURE__ */ j(e), ce(e, t) && (this._rawValue = e, this._value = n ? e : $t(e), this.dep.trigger());
	}
};
function F(e) {
	return /* @__PURE__ */ M(e) ? e.value : e;
}
var rn = {
	get: (e, t, n) => t === "__v_raw" ? e : F(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ M(i) && !/* @__PURE__ */ M(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function an(e) {
	return /* @__PURE__ */ Jt(e) ? e : new Proxy(e, rn);
}
// @__NO_SIDE_EFFECTS__
function on(e) {
	let t = f(e) ? Array(e.length) : {};
	for (let n in e) t[n] = cn(e, n);
	return t;
}
var sn = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = v(t) ? t : String(t), this._raw = /* @__PURE__ */ j(e);
		let r = !0, i = e;
		if (!f(e) || v(this._key) || !te(this._key)) do
			r = !/* @__PURE__ */ Zt(i) || /* @__PURE__ */ Xt(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = F(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ M(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ M(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return lt(this._raw, this._key);
	}
};
function cn(e, t, n) {
	return new sn(e, t, n);
}
var ln = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new tt(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = $e - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && A !== this) return ze(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return Ge(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function un(e, t, n = !1) {
	let r, i;
	return g(e) ? r = e : (r = e.get, i = e.set), new ln(r, i, n);
}
var dn = {}, fn = /* @__PURE__ */ new WeakMap(), pn = void 0;
function mn(e, t = !1, n = pn) {
	if (n) {
		let t = fn.get(n);
		t || fn.set(n, t = []), t.push(e);
	}
}
function hn(e, t, r = n) {
	let { immediate: a, deep: o, once: s, scheduler: c, augmentJob: u, call: d } = r, p = (e) => o ? e : /* @__PURE__ */ Xt(e) || o === !1 || o === 0 ? gn(e, 1) : gn(e), m, h, _, v, y = !1, b = !1;
	if (/* @__PURE__ */ M(e) ? (h = () => e.value, y = /* @__PURE__ */ Xt(e)) : /* @__PURE__ */ Jt(e) ? (h = () => p(e), y = !0) : f(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ Jt(e) || /* @__PURE__ */ Xt(e)), h = () => e.map((e) => {
		if (/* @__PURE__ */ M(e)) return e.value;
		if (/* @__PURE__ */ Jt(e)) return p(e);
		if (g(e)) return d ? d(e, 2) : e();
	})) : h = g(e) ? t ? d ? () => d(e, 2) : e : () => {
		if (_) {
			Xe();
			try {
				_();
			} finally {
				Ze();
			}
		}
		let t = pn;
		pn = m;
		try {
			return d ? d(e, 3, [v]) : e(v);
		} finally {
			pn = t;
		}
	} : i, t && o) {
		let e = h, t = o === !0 ? Infinity : o;
		h = () => gn(e(), t);
	}
	let x = Me(), S = () => {
		m.stop(), x && x.active && l(x.effects, m);
	};
	if (s && t) {
		let e = t;
		t = (...t) => {
			try {
				return e(...t);
			} finally {
				S();
			}
		};
	}
	let C = b ? Array(e.length).fill(dn) : dn, ee = (e) => {
		if (m.flags & 1 && (m.dirty || e)) {
			if (t) {
				let n = m.run();
				if (e || o || y || (b ? n.some((e, t) => ce(e, C[t])) : ce(n, C))) {
					let e = pn;
					Xe();
					try {
						_ && _(), pn = m;
						let e = [
							n,
							C === dn ? void 0 : b && C[0] === dn ? [] : C,
							v
						];
						C = n, d ? d(t, 3, e) : t(...e);
					} finally {
						pn = e, Ze();
					}
				}
			} else m.run();
		}
	};
	return u && u(ee), m = new Fe(h), m.scheduler = c ? () => c(ee, !1) : ee, v = (e) => mn(e, !1, m), _ = m.onStop = () => {
		let e = fn.get(m);
		if (e) {
			if (d) d(e, 4);
			else for (let t of e) t();
			fn.delete(m);
		}
	}, t ? a ? ee(!0) : C = m.run() : c ? c(ee.bind(null, !0), !0) : m.run(), S.pause = m.pause.bind(m), S.resume = m.resume.bind(m), S.stop = S, S;
}
function gn(e, t = Infinity, n) {
	if (t <= 0 || !y(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ M(e)) gn(e.value, t, n);
	else if (f(e)) for (let r = 0; r < e.length; r++) gn(e[r], t, n);
	else if (m(e) || p(e)) e.forEach((e) => {
		gn(e, t, n);
	});
	else if (ee(e)) {
		for (let r in e) gn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && gn(e[r], t, n);
	}
	return e;
}
// node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function _n(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		yn(e, t, n);
	}
}
function vn(e, t, n, r) {
	if (g(e)) {
		let i = _n(e, t, n, r);
		return i && b(i) && i.catch((e) => {
			yn(e, t, n, void 0, !0);
		}), i;
	}
	if (f(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(vn(e[a], t, n, r));
		return i;
	}
}
function yn(e, t, r, i = !0, a = !1) {
	let o = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: c } = t && t.appContext.config || n;
	if (t) {
		let n = t.parent, i = t.proxy, o = `https://vuejs.org/error-reference/#runtime-${r}`;
		for (; n;) {
			let t = n.ec;
			if (t && !n.isUnmounted && (!a || n.scope.active)) {
				for (let n = 0; n < t.length; n++) if (t[n](e, i, o) === !1) return;
			}
			n = n.parent;
		}
		if (s) {
			Xe(), _n(s, null, 10, [
				e,
				i,
				o
			]), Ze();
			return;
		}
	}
	bn(e, r, o, i, c);
}
function bn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var xn = [], Sn = -1, Cn = [], wn = null, Tn = 0, En = /* @__PURE__ */ Promise.resolve(), Dn = null;
function On(e) {
	let t = Dn || En;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function kn(e) {
	let t = Sn + 1, n = xn.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = xn[r], a = Ln(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function An(e) {
	if (!(e.flags & 1)) {
		let t = Ln(e), n = xn[xn.length - 1];
		!n || !(e.flags & 2) && t >= Ln(n) ? xn.push(e) : xn.splice(kn(t), 0, e), e.flags |= 1, jn();
	}
}
function jn() {
	Dn ||= En.then(Rn);
}
function Mn(e) {
	if (!f(e)) wn && e.id === -1 ? wn.splice(Tn + 1, 0, e) : e.flags & 1 || (Cn.push(e), e.flags |= 1);
	else for (let t = 0; t < e.length; t++) Cn.push(e[t]);
	jn();
}
function Nn(e, t, n, r = Sn + 1) {
	for (; r < xn.length; r++) {
		let n = xn[r];
		if (n && n.flags & 2) {
			if (e && n.id !== e.uid || t !== void 0 && !(n.id >= t)) continue;
			xn.splice(r, 1), r = e ? r - 1 : Sn, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
		}
	}
}
function Pn(e, t, n = 0) {
	if (Cn.length) {
		let e = Cn, r = 0;
		if (t) {
			e = [];
			for (let i = 0; i < Cn.length; i++) {
				let a = Cn[i];
				(a.i === void 0 ? t.has(a) : !a.i || a.i.uid < n) ? Cn[r++] = a : e.push(a);
			}
		}
		let i = [...new Set(e)].sort((e, t) => Ln(e) - Ln(t));
		if (Cn.length = r, wn) {
			for (let e = 0; e < i.length; e++) wn.push(i[e]);
			return;
		}
		for (wn = i, Tn = 0; Tn < wn.length; Tn++) {
			let e = wn[Tn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		wn = null, Tn = 0;
	}
}
var Fn = !1;
function In(e, t) {
	if (Fn) {
		e();
		return;
	}
	let n = t === void 0 ? void 0 : new Set(Cn);
	e(), Fn = !0;
	try {
		Nn(void 0, t), Pn(void 0, n, t);
	} finally {
		Fn = !1;
	}
}
var Ln = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function Rn(e) {
	try {
		for (Sn = 0; Sn < xn.length; Sn++) {
			let e = xn[Sn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), _n(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; Sn < xn.length; Sn++) {
			let e = xn[Sn];
			e && (e.flags &= -2);
		}
		Sn = -1, xn.length = 0, Pn(e), Dn = null, (xn.length || Cn.length) && Rn(e);
	}
}
var zn = null, Bn = null;
function Vn(e) {
	let t = zn;
	return zn = e, Bn = e && e.type.__scopeId || null, t;
}
function Hn(e, t = zn, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && ta(-1);
		let i = Vn(t), a = Zi.length, o;
		try {
			o = e(...n);
		} finally {
			for (let e = Zi.length; e > a; e--) $i();
			Vn(i), r._d && ta(1);
		}
		return o;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function I(e, t) {
	if (zn === null) return e;
	let r = La(zn), i = e.dirs ||= [];
	for (let e = 0; e < t.length; e++) {
		let [a, o, s, c = n] = t[e];
		a && (g(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && gn(o), i.push({
			dir: a,
			instance: r,
			value: o,
			oldValue: void 0,
			arg: s,
			modifiers: c
		}));
	}
	return e;
}
function Un(e, t, n, r) {
	let i = e;
	if (r === "beforeMount") e._mount = e;
	else if (r === "beforeUpdate") {
		let n = t && t._mount;
		n && (n._latest = e, e._mount = n);
	} else if (r === "mounted") {
		let t = e._latest;
		e._mount = e._latest = void 0, t && (i = t, t._mount = void 0);
	}
	let a = i.dirs, o = t && t.dirs;
	for (let s = 0; s < a.length; s++) {
		let l = a[s];
		o ? l.oldValue = o[s].value : r === "mounted" && l.oldValue !== void 0 && (l = c({}, l, { oldValue: void 0 }));
		let u = l.dir[r];
		u && (Xe(), vn(u, n, 8, [
			e.el,
			l,
			i,
			t
		]), Ze());
	}
}
function Wn(e, t) {
	if (Sa) {
		let n = Sa.provides, r = Sa.parent && Sa.parent.provides;
		r === n && (n = Sa.provides = Object.create(r)), n[e] = t;
	}
}
function Gn(e, t, n = !1) {
	let r = Ca();
	if (r || ni) {
		let i = ni ? ni._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && g(t) ? t.call(r && r.proxy) : t;
	}
}
function Kn() {
	return !!(Ca() || ni);
}
var qn = /* @__PURE__ */ Symbol.for("v-scx"), Jn = () => Gn(qn);
function L(e, t, n) {
	return Yn(e, t, n);
}
function Yn(e, t, r = n) {
	let { immediate: a, deep: o, flush: s, once: l } = r, u = c({}, r), d = t && a || !t && s !== "post", f;
	if (ka) {
		if (s === "sync") {
			let e = Jn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = i, e.resume = i, e.pause = i, e;
		}
	}
	let p = Sa;
	u.call = (e, t, n) => vn(e, p, t, n);
	let m = !1;
	s === "post" ? u.scheduler = (e) => {
		e.i = p, Pi(e, p && p.suspense);
	} : s !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : An(e);
	}), u.augmentJob = (e) => {
		t && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = hn(e, t, u);
	return ka && (f ? f.push(h) : d && h()), h;
}
function Xn(e, t, n) {
	let r = this.proxy, i = _(e) ? e.includes(".") ? Zn(r, e) : () => r[e] : e.bind(r, r), a;
	g(t) ? a = t : (a = t.handler, n = t);
	let o = Ea(this), s = Yn(i, a.bind(r), n);
	return o(), s;
}
function Zn(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Qn = /* @__PURE__ */ Symbol("_vte"), $n = (e) => e.__isTeleport, er = /* @__PURE__ */ Symbol("_leaveCb");
function tr(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== Yi) {
			t = n;
			break;
		}
	}
	return t;
}
function nr(e) {
	if (!fr(e)) return $n(e.type) && e.children ? tr(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && g(n.default)) return n.default();
	}
}
function rr(e, t) {
	if (e.shapeFlag & 6 && e.component) {
		e.transition = t;
		let n = e.component.subTree;
		rr($n(n.type) && nr(n) || n, t);
	} else if (e.shapeFlag & 128) {
		let n = e.suspense;
		if (n) {
			let e = n.isHydrating ? n.pendingBranch : n.activeBranch;
			e && rr(e, t.clone(e));
		} else e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback);
	} else if (e.transition = t, e.type === B && f(e.children)) {
		let n = li(e.children, !1);
		n && rr(n, t);
	}
}
function ir(e) {
	if (e.component) return ir(e.component.subTree);
	if (e.type === B) {
		let t = f(e.children) && li(e.children, !1);
		return t ? ir(t) : void 0;
	}
	if (e.type !== Yi) return e;
}
// @__NO_SIDE_EFFECTS__
function ar(e, t) {
	return g(e) ? /* @__PURE__ */ c({ name: e.name }, t, { setup: e }) : e;
}
function or(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function sr(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var cr = /* @__PURE__ */ new WeakMap();
function lr(e, t, r, i, o = !1) {
	if (f(e)) {
		e.forEach((e, n) => lr(e, t && (f(t) ? t[n] : t), r, i, o));
		return;
	}
	if (dr(i) && !o) {
		i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && lr(e, t, r, i.component.subTree);
		return;
	}
	let s = i.shapeFlag & 4 ? La(i.component) : i.el, c = o ? null : s, { i: u, r: p } = e, m = t && t.r, h = u.refs === n ? u.refs = {} : u.refs, v = u.setupState, y = /* @__PURE__ */ j(v), b = v === n ? a : (e) => !sr(h, e) && d(y, e), x = (e, t) => !(t && sr(h, t));
	if (m != null && m !== p) {
		if (ur(t), _(m)) h[m] = null, b(m) && (v[m] = null);
		else if (/* @__PURE__ */ M(m)) {
			let e = t;
			x(m, e.k) && (m.value = null), e.k && (h[e.k] = null);
		}
	}
	if (g(p)) _n(p, u, 12, [c, h]);
	else {
		let t = _(p), n = /* @__PURE__ */ M(p);
		if (t || n) {
			let i = () => {
				if (e.f) {
					let n = t ? b(p) ? v[p] : h[p] : x(p) || !e.k ? p.value : h[e.k];
					if (o) f(n) && l(n, s);
					else if (f(n)) n.includes(s) || n.push(s);
					else if (t) h[p] = [s], b(p) && (v[p] = h[p]);
					else {
						let t = [s];
						x(p, e.k) && (p.value = t), e.k && (h[e.k] = t);
					}
				} else t ? (h[p] = c, b(p) && (v[p] = c)) : n && (x(p, e.k) && (p.value = c), e.k && (h[e.k] = c));
			};
			if (c) {
				let t = () => {
					i(), cr.delete(e);
				};
				t.id = -1, cr.set(e, t), Pi(t, r);
			} else ur(e), i();
		}
	}
}
function ur(e) {
	let t = cr.get(e);
	t && (t.flags |= 8, cr.delete(e));
}
pe().requestIdleCallback, pe().cancelIdleCallback;
var dr = (e) => !!e.type.__asyncLoader, fr = (e) => e.type.__isKeepAlive;
function pr(e, t) {
	hr(e, "a", t);
}
function mr(e, t) {
	hr(e, "da", t);
}
function hr(e, t, n = Sa) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (_r(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) fr(e.parent.vnode) && gr(r, t, n, e), e = e.parent;
	}
}
function gr(e, t, n, r) {
	let i = _r(t, e, r, !0), a = _r("um", () => l(r[t], i), n);
	a.flags = 16;
}
function _r(e, t, n = Sa, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Xe();
			let i = Ea(n), a = vn(t, n, e, r);
			return i(), Ze(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var vr = (e) => (t, n = Sa) => {
	ka && e !== "sp" || _r(e, (...e) => t(...e), n);
}, yr = vr("bm"), R = vr("m"), br = vr("bu"), xr = vr("u"), Sr = vr("bum"), Cr = vr("um"), wr = vr("sp"), Tr = vr("rtg"), Er = vr("rtc");
function Dr(e, t = Sa) {
	_r("ec", e, t);
}
var Or = "components", kr = /* @__PURE__ */ Symbol.for("v-ndc");
function Ar(e) {
	return _(e) ? jr(Or, e, !1) || e : e || kr;
}
function jr(e, t, n = !0, r = !1) {
	let i = zn || Sa;
	if (i) {
		let n = i.type;
		if (e === Or) {
			let e = Ra(n, !1);
			if (e && (e === t || e === w(t) || e === oe(w(t)))) return n;
		}
		let a = Mr(i[e] || n[e], t) || Mr(i.appContext[e], t);
		return !a && r ? n : a;
	}
}
function Mr(e, t) {
	return e && (e[t] || e[w(t)] || e[oe(w(t))]);
}
function z(e, t, n, r) {
	let i, a = n && n[r], o = f(e);
	if (o || _(e)) {
		let n = o && /* @__PURE__ */ Jt(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ Xt(e), s = /* @__PURE__ */ Yt(e), e = dt(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? en($t(e[n])) : $t(e[n]) : e[n], n, void 0, a && a[n]);
	} else if (typeof e == "number") {
		if (!Number.isInteger(e) || e < 0) i = [];
		else {
			i = Array(e);
			for (let n = 0; n < e; n++) i[n] = t(n + 1, n, void 0, a && a[n]);
		}
	} else if (y(e)) {
		if (e[Symbol.iterator]) i = Array.from(e, (e, n) => t(e, n, void 0, a && a[n]));
		else {
			let n = Object.keys(e);
			i = Array(n.length);
			for (let r = 0, o = n.length; r < o; r++) {
				let o = n[r];
				i[r] = t(e[o], o, r, a && a[r]);
			}
		}
	} else i = [];
	return n && (n[r] = i), i;
}
var Nr = (e) => e ? Oa(e) ? La(e) : Nr(e.parent) : null, Pr = /* @__PURE__ */ c(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => Nr(e.parent),
	$root: (e) => Nr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Ur(e),
	$forceUpdate: (e) => e.f ||= () => {
		An(e.update);
	},
	$nextTick: (e) => e.n ||= On.bind(e.proxy),
	$watch: (e) => Xn.bind(e)
}), Fr = (e, t) => e !== n && !e.__isScriptSetup && d(e, t), Ir = {
	get({ _: e }, t) {
		if (t === "__v_skip") return !0;
		let { ctx: r, setupState: i, data: a, props: o, accessCache: s, type: c, appContext: l } = e;
		if (t[0] !== "$") {
			let e = s[t];
			if (e !== void 0) switch (e) {
				case 1: return i[t];
				case 2: return a[t];
				case 4: return r[t];
				case 3: return o[t];
			}
			else if (Fr(i, t)) return s[t] = 1, i[t];
			else if (a !== n && d(a, t)) return s[t] = 2, a[t];
			else if (d(o, t)) return s[t] = 3, o[t];
			else if (r !== n && d(r, t)) return s[t] = 4, r[t];
			else Rr && (s[t] = 0);
		}
		let u = Pr[t], f, p;
		if (u) return t === "$attrs" && st(e.attrs, "get", ""), u(e);
		if ((f = c.__cssModules) && (f = f[t])) return f;
		if (r !== n && d(r, t)) return s[t] = 4, r[t];
		if (p = l.config.globalProperties, d(p, t)) return p[t];
	},
	set({ _: e }, t, r) {
		let { data: i, setupState: a, ctx: o } = e;
		return Fr(a, t) ? (a[t] = r, !0) : i !== n && d(i, t) ? (i[t] = r, !0) : d(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = r, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: r, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(r[c] || e !== n && c[0] !== "$" && d(e, c) || Fr(t, c) || d(o, c) || d(i, c) || d(Pr, c) || d(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? d(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function Lr(e) {
	return f(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var Rr = !0;
function zr(e) {
	let t = Ur(e), n = e.proxy, r = e.ctx;
	Rr = !1, t.beforeCreate && Vr(t.beforeCreate, e, "bc");
	let { data: a, computed: o, methods: s, watch: c, provide: l, inject: u, created: d, beforeMount: p, mounted: m, beforeUpdate: h, updated: _, activated: v, deactivated: b, beforeDestroy: x, beforeUnmount: S, destroyed: C, unmounted: ee, render: te, renderTracked: ne, renderTriggered: re, errorCaptured: ie, serverPrefetch: w, expose: ae, inheritAttrs: T, components: oe, directives: se, filters: ce } = t;
	if (u && Br(u, r, null), s) for (let e in s) {
		let t = s[e];
		g(t) && (r[e] = t.bind(n));
	}
	if (a) {
		let t = a.call(n, n);
		y(t) && (e.data = /* @__PURE__ */ Wt(t));
	}
	if (Rr = !0, o) for (let e in o) {
		let t = o[e], a = K({
			get: g(t) ? t.bind(n, n) : g(t.get) ? t.get.bind(n, n) : i,
			set: !g(t) && g(t.set) ? t.set.bind(n) : i
		});
		Object.defineProperty(r, e, {
			enumerable: !0,
			configurable: !0,
			get: () => a.value,
			set: (e) => a.value = e
		});
	}
	if (c) for (let e in c) Hr(c[e], r, n, e);
	if (l) {
		let e = g(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Wn(t, e[t]);
		});
	}
	d && Vr(d, e, "c");
	function le(e, t) {
		f(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (le(yr, p), le(R, m), le(br, h), le(xr, _), le(pr, v), le(mr, b), le(Dr, ie), le(Er, ne), le(Tr, re), le(Sr, S), le(Cr, ee), le(wr, w), f(ae)) {
		if (ae.length) {
			let t = e.exposed ||= {};
			ae.forEach((e) => {
				Object.defineProperty(t, e, {
					get: () => n[e],
					set: (t) => n[e] = t,
					enumerable: !0
				});
			});
		} else e.exposed ||= {};
	}
	te && e.render === i && (e.render = te), T != null && (e.inheritAttrs = T), oe && (e.components = oe), se && (e.directives = se), w && or(e);
}
function Br(e, t, n = i) {
	f(e) && (e = Jr(e));
	for (let n in e) {
		let r = e[n], i;
		i = y(r) ? "default" in r ? Gn(r.from || n, r.default, !0) : Gn(r.from || n) : Gn(r), /* @__PURE__ */ M(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Vr(e, t, n) {
	vn(f(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Hr(e, t, n, r) {
	let i = r.includes(".") ? Zn(n, r) : () => n[r];
	if (_(e)) {
		let n = t[e];
		g(n) && L(i, n);
	} else if (g(e)) L(i, e.bind(n));
	else if (y(e)) {
		if (f(e)) e.forEach((e) => Hr(e, t, n, r));
		else {
			let r = g(e.handler) ? e.handler.bind(n) : t[e.handler];
			g(r) && L(i, r, e);
		}
	}
}
function Ur(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => Wr(c, e, o, !0)), Wr(c, t, o)), y(t) && a.set(t, c), c;
}
function Wr(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && Wr(e, a, n, !0), i && i.forEach((t) => Wr(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = Gr[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var Gr = {
	data: Kr,
	props: Zr,
	emits: Zr,
	methods: Xr,
	computed: Xr,
	beforeCreate: Yr,
	created: Yr,
	beforeMount: Yr,
	mounted: Yr,
	beforeUpdate: Yr,
	updated: Yr,
	beforeDestroy: Yr,
	beforeUnmount: Yr,
	destroyed: Yr,
	unmounted: Yr,
	activated: Yr,
	deactivated: Yr,
	errorCaptured: Yr,
	serverPrefetch: Yr,
	components: Xr,
	directives: Xr,
	watch: Qr,
	provide: Kr,
	inject: qr
};
function Kr(e, t) {
	return t ? e ? function() {
		return c(g(e) ? e.call(this, this) : e, g(t) ? t.call(this, this) : t);
	} : t : e;
}
function qr(e, t) {
	return Xr(Jr(e), Jr(t));
}
function Jr(e) {
	if (f(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function Yr(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Xr(e, t) {
	return e ? c(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Zr(e, t) {
	return e ? f(e) && f(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : c(/* @__PURE__ */ Object.create(null), Lr(e), Lr(t ?? {})) : t;
}
function Qr(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = c(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = Yr(e[r], t[r]);
	return n;
}
function $r() {
	return {
		app: null,
		config: {
			isNativeTag: a,
			performance: !1,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {}
		},
		mixins: [],
		components: {},
		directives: {},
		provides: /* @__PURE__ */ Object.create(null),
		optionsCache: /* @__PURE__ */ new WeakMap(),
		propsCache: /* @__PURE__ */ new WeakMap(),
		emitsCache: /* @__PURE__ */ new WeakMap()
	};
}
var ei = 0;
function ti(e, t) {
	return function(n, r = null) {
		g(n) || (n = c({}, n)), r != null && !y(r) && (r = null);
		let i = $r(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, l = i.app = {
			_uid: ei++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: Va,
			get config() {
				return i.config;
			},
			set config(e) {},
			use(e, ...t) {
				return a.has(e) || (e && g(e.install) ? (a.add(e), e.install(l, ...t)) : g(e) && (a.add(e), e(l, ...t))), l;
			},
			mixin(e) {
				return i.mixins.includes(e) || i.mixins.push(e), l;
			},
			component(e, t) {
				return t ? (i.components[e] = t, l) : i.components[e];
			},
			directive(e, t) {
				return t ? (i.directives[e] = t, l) : i.directives[e];
			},
			mount(a, o, c) {
				if (!s) {
					let u = l._ceVNode || ca(n, r);
					return u.appContext = i, c === !0 ? c = "svg" : c === !1 && (c = void 0), o && t ? t(u, a) : e(u, a, c), s = !0, l._container = a, a.__vue_app__ = l, La(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				s && (vn(o, l._instance, 16), e(null, l._container), delete l._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, l;
			},
			runWithContext(e) {
				let t = ni;
				ni = l;
				try {
					return e();
				} finally {
					ni = t;
				}
			}
		};
		return l;
	};
}
var ni = null, ri = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${w(t)}Modifiers`] || e[`${T(t)}Modifiers`];
function ii(e, t, ...r) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || n, a = r, o = t.startsWith("update:"), s = o && ri(i, t.slice(7));
	s && (s.trim && (a = r.map((e) => _(e) ? e.trim() : e)), s.number && (a = a.map(de)));
	let c, l = i[c = se(t)] || i[c = se(w(t))];
	!l && o && (l = i[c = se(T(t))]), l && vn(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, vn(u, e, 6, a);
	}
}
var ai = /* @__PURE__ */ new WeakMap();
function oi(e, t, n = !1) {
	let r = n ? ai : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, s = !1;
	if (!g(e)) {
		let r = (e) => {
			let n = oi(e, t, !0);
			n && (s = !0, c(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !s ? (y(e) && r.set(e, null), null) : (f(a) ? a.forEach((e) => o[e] = null) : c(o, a), y(e) && r.set(e, o), o);
}
function si(e, t) {
	return !e || !o(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), d(e, t[0].toLowerCase() + t.slice(1)) || d(e, T(t)) || d(e, t));
}
function ci(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: c, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = Vn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = pa(u.call(t, e, d, f, m, p, h)), y = c;
		} else {
			let e = t;
			v = pa(e.length > 1 ? e(f, {
				attrs: c,
				slots: o,
				emit: l
			}) : e(f, null)), y = t.props ? c : ui(c);
		}
	} catch (t) {
		Zi.length = 0, yn(t, e, 1), v = ca(Yi);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(s) && (y = di(y, a)), b = da(b, y, !1, !0));
	}
	return n.dirs && (b = da(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && rr($n(b.type) && nr(b) || b, n.transition), v = b, Vn(_), v;
}
function li(e, t = !0) {
	let n;
	for (let t = 0; t < e.length; t++) {
		let r = e[t];
		if (ia(r)) {
			if (r.type !== Yi || r.children === "v-if") {
				if (n) return;
				n = r;
			}
		} else return;
	}
	return n;
}
var ui = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || o(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, di = (e, t) => {
	let n = {};
	for (let r in e) s(r) && r.slice(9) in t || (n[r] = e[r]);
	return n;
};
function fi(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? pi(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (mi(o, r, n) && !si(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? !o || pi(r, o, l) : !!o;
	return !1;
}
function pi(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (!d(e, a) || mi(t, e, a) && !si(n, a)) return !0;
	}
	return !1;
}
function mi(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && y(r) && y(i) ? !Te(r, i) : r !== i;
}
function hi({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var gi = {}, _i = () => Object.create(gi), vi = (e) => Object.getPrototypeOf(e) === gi;
function yi(e, t, n, r = !1) {
	let i = {}, a = _i();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), xi(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	e.props = n ? r ? i : /* @__PURE__ */ Gt(i) : e.type.props ? i : a, e.attrs = a;
}
function bi(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ j(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (si(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) {
					if (d(a, o)) u !== a[o] && (a[o] = u, l = !0);
					else {
						let t = w(o);
						i[t] = Si(c, s, t, u, e, !1);
					}
				} else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		xi(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) t && (d(t, a) || (r = T(a)) !== a && d(t, r)) || (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = Si(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) t && d(t, e) || (delete a[e], l = !0);
	}
	l && ct(e.attrs, "set", "");
}
function xi(e, t, r, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (t) for (let n in t) {
		if (ne(n)) continue;
		let l = t[n], u;
		a && d(a, u = w(n)) ? !o || !o.includes(u) ? r[u] = l : (c ||= {})[u] = l : si(e.emitsOptions, n) || n in i && l === i[n] || (i[n] = l, s = !0);
	}
	if (o) {
		let t = /* @__PURE__ */ j(r), i = c || n;
		for (let n = 0; n < o.length; n++) {
			let s = o[n];
			r[s] = Si(a, t, s, i[s], e, !d(i, s));
		}
	}
	return s;
}
function Si(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = d(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && g(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = Ea(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === T(n)) && (r = !0));
	}
	return r;
}
var Ci = /* @__PURE__ */ new WeakMap();
function wi(e, t, i = !1) {
	let a = i ? Ci : t.propsCache, o = a.get(e);
	if (o) return o;
	let s = e.props, l = {}, u = [], p = !1;
	if (!g(e)) {
		let n = (e) => {
			p = !0;
			let [n, r] = wi(e, t, !0);
			c(l, n), r && u.push(...r);
		};
		!i && t.mixins.length && t.mixins.forEach(n), e.extends && n(e.extends), e.mixins && e.mixins.forEach(n);
	}
	if (!s && !p) return y(e) && a.set(e, r), r;
	if (f(s)) for (let e = 0; e < s.length; e++) {
		let t = w(s[e]);
		Ti(t) && (l[t] = n);
	}
	else if (s) for (let e in s) {
		let t = w(e);
		if (Ti(t)) {
			let n = s[e], r = l[t] = f(n) || g(n) ? { type: n } : c({}, n), i = r.type, a = !1, o = !0;
			if (f(i)) for (let e = 0; e < i.length; ++e) {
				let t = i[e], n = g(t) && t.name;
				if (n === "Boolean") {
					a = !0;
					break;
				}
				n === "String" && (o = !1);
			}
			else a = g(i) && i.name === "Boolean";
			r[0] = a, r[1] = o, (a || d(r, "default")) && u.push(t);
		}
	}
	let m = [l, u];
	return y(e) && a.set(e, m), m;
}
function Ti(e) {
	return e[0] !== "$" && !ne(e);
}
var Ei = (e) => e === "_" || e === "_ctx" || e === "$stable", Di = (e) => f(e) ? e.map(pa) : [pa(e)], Oi = (e, t, n) => {
	if (t._n) return t;
	let r = Hn((...e) => Di(t(...e)), n);
	return r._c = !1, r;
}, ki = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (Ei(n)) continue;
		let i = e[n];
		if (g(i)) t[n] = Oi(n, i, r);
		else if (i != null) {
			let e = Di(i);
			t[n] = () => e;
		}
	}
}, Ai = (e, t) => {
	let n = Di(t);
	e.slots.default = () => n;
}, ji = (e, t, n) => {
	for (let r in t) (n || !Ei(r)) && (e[r] = t[r]);
}, Mi = (e, t, n) => {
	let r = e.slots = _i();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (ji(r, t, n), n && ue(r, "_", e, !0)) : ki(t, r);
	} else t && Ai(e, t);
}, Ni = (e, t, r) => {
	let { vnode: i, slots: a } = e, o = !0, s = n;
	if (i.shapeFlag & 32) {
		let e = t._;
		e ? r && e === 1 ? o = !1 : ji(a, t, r) : (o = !t.$stable, ki(t, a)), s = t;
	} else t && (Ai(e, t), s = { default: 1 });
	if (o) for (let e in a) !Ei(e) && s[e] == null && delete a[e];
}, Pi = qi;
function Fi(e) {
	return Ii(e);
}
function Ii(e, t) {
	let a = pe();
	a.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = i, insertStaticContent: _ } = e, v = (e, t, n, i = null, a = null, o = null, s = void 0, c = null, l = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !aa(e, t) && (i = xe(e), _e(e, a, o, !0), e = null), t.patchFlag === -2 && (l = !1, t.dynamicChildren = null), t.dynamicChildren && e && e.dynamicChildren && e.dynamicChildren.hasOnce && (t.dynamicChildren === r && (t.dynamicChildren = []), t.dynamicChildren.hasOnce = !0);
		let { type: u, ref: d, shapeFlag: f } = t;
		switch (u) {
			case Ji:
				y(e, t, n, i);
				break;
			case Yi:
				b(e, t, n, i);
				break;
			case Xi:
				e ?? x(t, n, i, s);
				break;
			case B:
				oe(e, t, n, i, a, o, s, c, l);
				break;
			default: f & 1 ? ee(e, t, n, i, a, o, s, c, l) : f & 6 ? se(e, t, n, i, a, o, s, c, l) : (f & 64 || f & 128) && u.process(e, t, n, i, a, o, s, c, l, Ce);
		}
		d != null && a ? lr(d, e && e.ref, o, t || e, !t) : d == null && e && e.ref != null && lr(e.ref, null, o, e, !0);
	}, y = (e, t, n, r) => {
		if (e == null) o(t.el = u(t.children), n, r);
		else {
			let n = t.el = e.el;
			t.children !== e.children && f(n, t.children);
		}
	}, b = (e, t, n, r) => {
		e == null ? o(t.el = d(t.children || ""), n, r) : t.el = e.el;
	}, x = (e, t, n, r) => {
		[e.el, e.anchor] = _(e.children, t, n, r, e.el, e.anchor);
	}, S = ({ el: e, anchor: t }, n, r) => {
		let i;
		for (; e && e !== t;) i = h(e), o(e, n, r), e = i;
		o(t, n, r);
	}, C = ({ el: e, anchor: t }) => {
		let n;
		for (; e && e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, ee = (e, t, n, r, i, a, o, s, c) => {
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) te(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), w(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, te = (e, t, n, r, i, a, s, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && ie(e.children, d, null, r, i, Li(e, a), s, u), _ && Un(e, null, r, "created"), re(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !ne(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && _a(f, r, e);
		}
		_ && Un(e, null, r, "beforeMount");
		let v = zi(i, g);
		v ? g.beforeEnter(d) : g && !g.persisted && (d[Ki] = !0), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && Pi(() => {
			try {
				f && _a(f, r, e), v && g.enter(d), _ && Un(e, null, r, "mounted");
			} finally {}
		}, i);
	}, re = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || Gi(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				re(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, ie = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) {
			let c = e[l] = s ? ma(e[l]) : pa(e[l]);
			v(null, c, t, n, r, i, a, o, s);
		}
	}, w = (e, t, r, i, a, o, s) => {
		let l = t.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = t;
		u |= e.patchFlag & 16;
		let m = e.props || n, h = t.props || n, g;
		if (r && Ri(r, !1), (g = h.onVnodeBeforeUpdate) && _a(g, r, t, e), f && Un(t, e, r, "beforeUpdate"), r && Ri(r, !0), d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length) && (u = 0, s = !1, d = null), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? ae(e.dynamicChildren, d, l, r, i, Li(t, a), o) : s || E(e, t, l, null, r, i, Li(t, a), o, !1), u > 0) {
			if (u & 16) T(l, m, h, r, a);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, a), u & 4 && c(l, "style", m.style, h.style, a), u & 8) {
				let e = t.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let n = e[t], i = m[n], o = h[n];
					(o !== i || n === "value") && c(l, n, i, o, a, r);
				}
			}
			u & 1 && e.children !== t.children && p(l, t.children);
		} else !s && d == null && T(l, m, h, r, a);
		((g = h.onVnodeUpdated) || f) && Pi(() => {
			g && _a(g, r, t, e), f && Un(t, e, r, "updated");
		}, i);
	}, ae = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el || Wi(c), d = u && (c.type === B || !aa(c, l) || c.shapeFlag & 198) ? m(u) : n;
			v(c, l, d, null, r, i, a, o, !0);
		}
	}, T = (e, t, r, i, a) => {
		if (t !== r) {
			if (t !== n) for (let n in t) !ne(n) && !(n in r) && c(e, n, t[n], null, a, i);
			for (let n in r) {
				if (ne(n)) continue;
				let o = r[n], s = t[n];
				o !== s && n !== "value" && c(e, n, s, o, a, i);
			}
			"value" in r && c(e, "value", t.value, r.value, a);
		}
	}, oe = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), ie(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (ae(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && Bi(e, t, !0)) : E(e, t, n, f, i, a, s, c, l);
	}, se = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : ce(t, n, r, i, a, o, c) : ue(e, t, c);
	}, ce = (e, t, n, r, i, a, o) => {
		let s = e.component = xa(e, r, i);
		if (fr(e) && (s.ctx.renderer = Ce), Aa(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, de, o, a), !e.el) {
				let r = s.subTree = ca(Yi);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else de(s, e, t, n, i, a, o);
	}, ue = (e, t, n) => {
		let r = t.component = e.component;
		if (fi(e, t, n)) {
			if (r.asyncDep && !r.asyncResolved) {
				t.el = e.el, t.placeholder = e.placeholder, fe(r, t, n);
				return;
			}
			r.next = t, r.update();
		} else t.el = e.el, t.placeholder = e.placeholder, r.vnode = t;
	}, de = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = Hi(e);
					if (n) {
						t && (t.el = c.el, fe(e, t, o)), n.asyncDep.then(() => {
							let t = () => {
								e.job.flags & 8 || (i && i.pendingBranch ? Pi(t, i) : l());
							};
							t.flags = 48, Pi(t, i);
						});
						return;
					}
				}
				let u = t, d;
				Ri(e, !1), t ? (t.el = c.el, fe(e, t, o)) : t = c, n && le(n), (d = t.props && t.props.onVnodeBeforeUpdate) && _a(d, s, t, c), Ri(e, !0);
				let f = ci(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el || Wi(p)), xe(p), e, i, a), t.el = f.el, u === null && hi(e, f.el), r && Pi(r, i), (d = t.props && t.props.onVnodeUpdated) && Pi(() => _a(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = dr(t);
				if (Ri(e, !1), l && le(l), !m && (o = c && c.onVnodeBeforeMount) && _a(o, d, t), Ri(e, !0), s && Te) {
					let t = () => {
						e.subTree = ci(e), Te(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = ci(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && Pi(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					Pi(() => _a(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && dr(d.vnode) && d.vnode.shapeFlag & 256) && e.a && Pi(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Fe(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => An(u), Ri(e, !0), l();
	}, fe = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, bi(e, t.props, r, n), Ni(e, t.children, n), Xe(), Nn(e), Ze();
	}, E = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				he(l, d, n, r, i, a, o, s, c);
				return;
			}
			if (f & 256) {
				me(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && be(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? he(l, d, n, r, i, a, o, s, c) : be(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && ie(d, n, r, i, a, o, s, c));
	}, me = (e, t, n, i, a, o, s, c, l) => {
		e ||= r, t ||= r;
		let u = e.length, d = t.length, f = Math.min(u, d), p = 0;
		for (; p < f; p++) {
			let r = t[p] = l ? ma(t[p]) : pa(t[p]);
			v(e[p], r, n, null, a, o, s, c, l);
		}
		u > d ? be(e, a, o, !0, !1, f) : ie(t, n, i, a, o, s, c, l, f);
	}, he = (e, t, n, i, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let r = e[u], i = t[u] = l ? ma(t[u]) : pa(t[u]);
			if (aa(r, i)) v(r, i, n, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let r = e[f], i = t[p] = l ? ma(t[p]) : pa(t[p]);
			if (aa(r, i)) v(r, i, n, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, r = e < d ? t[e].el : i;
				for (; u <= p;) v(null, t[u] = l ? ma(t[u]) : pa(t[u]), n, r, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) _e(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? ma(t[u]) : pa(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let _, y = 0, b = p - h + 1, x = !1, S = 0, C = Array(b);
			for (u = 0; u < b; u++) C[u] = 0;
			for (u = m; u <= f; u++) {
				let r = e[u];
				if (y >= b) {
					_e(r, a, o, !0);
					continue;
				}
				let i;
				if (r.key != null) i = g.get(r.key);
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && aa(r, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? _e(r, a, o, !0) : (C[i - h] = u + 1, i >= S ? S = i : x = !0, v(r, t[i], n, null, a, o, s, c, l), y++);
			}
			let ee = x ? Vi(C) : r;
			for (_ = ee.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, r = t[e], f = t[e + 1], p = e + 1 < d ? f.el || Wi(f) : i;
				C[u] === 0 ? v(null, r, n, p, a, o, s, c, l) : x && (_ < 0 || u !== ee[_] ? ge(r, n, p, 2) : _--);
			}
		}
	}, ge = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) ge(e.component.subTree, t, n, r);
		else if (d & 128) e.suspense.move(t, n, r);
		else if (d & 64) c.move(e, t, n, Ce);
		else if (c === B) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) ge(u[e], t, n, r);
			o(e.anchor, t, n);
		} else if (c === Xi) S(e, t, n);
		else if (r !== 2 && d & 1 && l) {
			if (r === 0) l.persisted && !a[er] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), Pi(() => l.enter(a), i));
			else {
				let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
					e.ctx.isUnmounted ? s(a) : o(a, t, n);
				}, d = () => {
					let e = a._isLeaving || !!a[er];
					a._isLeaving && a[er](!0), l.persisted && !e ? u() : r(a, () => {
						u(), c && c();
					});
				};
				i ? i(a, u, d) : d();
			}
		} else o(a, t, n);
	}, _e = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if ((d === -2 || l && l.hasOnce) && (i = !1), s != null && (Xe(), lr(s, null, n, e, !0), Ze()), p == null || e.ctx && e.ctx !== t || (t.renderCache[p] = void 0), u & 256 && t.ctx.deactivate(e)) return;
		let h = u & 1 && f, g = !dr(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && _a(_, t, e), u & 6) ye(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Un(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, Ce, r) : l && !l.hasOnce && (a !== B || d > 0 && d & 64) ? be(l, t, n, !1, !0) : (a === B && d & 384 || !i && u & 16) && be(c, t, n), r && D(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && Pi(() => {
			_ && _a(_, t, e), h && Un(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, D = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e, a = t === B;
		if (a && !i) {
			ve(n, r);
			return;
		}
		if (t === Xi) {
			C(e), i && !i.persisted && i.afterLeave && i.afterLeave();
			return;
		}
		let o = a ? ir(e) : e, c = () => {
			a ? m(n) && ve(n, r) : s(n), i && !i.persisted && i.afterLeave && i.afterLeave();
		};
		if (o && o.shapeFlag & 1 && i && !i.persisted) {
			let { leave: e, delayLeave: t } = i, n = o.el, r = () => e(n, c);
			t ? t(n, c, r) : r();
		} else c();
	}, ve = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, ye = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		Ui(c), Ui(l), r && le(r), i.stop(), a ? (a.flags |= 8, _e(o, e, t, n)) : o && (o.transition = e.vnode.transition, _e(o, e, t, n)), s && Pi(s, t);
		let u = () => {
			e.isUnmounted = !0;
		};
		u.flags = 16, Pi(u, t);
	}, be = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) _e(e[o], t, n, r, i);
	}, xe = (e) => {
		if (e.shapeFlag & 6) return xe(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Qn];
		return n ? h(n) : t;
	}, Se = (e, t, n) => {
		In(() => {
			e == null ? t._vnode && _e(t._vnode, null, null, !0) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e;
		}, e && t._vnode ? void 0 : e && e.component ? e.component.uid : ba());
	}, Ce = {
		p: v,
		um: _e,
		m: ge,
		r: D,
		mt: ce,
		mc: ie,
		pc: E,
		pbc: ae,
		n: xe,
		o: e
	}, we, Te;
	return t && ([we, Te] = t(Ce)), {
		render: Se,
		hydrate: we,
		createApp: ti(Se, we)
	};
}
function Li({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ri({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function zi(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Bi(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (f(r) && f(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = ma(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Bi(t, a)), a.type === Ji && (a.patchFlag === -1 && (a = i[e] = ma(a)), a.el = t.el), a.type === Yi && !a.el && (a.el = t.el);
	}
}
function Vi(e) {
	let t = e.slice(), n = [0], r, i, a, o, s, c = e.length;
	for (r = 0; r < c; r++) {
		let c = e[r];
		if (c !== 0) {
			if (i = n[n.length - 1], e[i] < c) {
				t[r] = i, n.push(r);
				continue;
			}
			for (a = 0, o = n.length - 1; a < o;) s = a + o >> 1, e[n[s]] < c ? a = s + 1 : o = s;
			c < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
		}
	}
	for (a = n.length, o = n[a - 1]; a-- > 0;) n[a] = o, o = t[o];
	return n;
}
function Hi(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Hi(t);
}
function Ui(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Wi(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	if (t) return Wi(t.subTree);
	let n = e.suspense;
	return n && n.activeBranch ? Wi(n.activeBranch) : null;
}
var Gi = (e) => e.__isSuspense, Ki = /* @__PURE__ */ Symbol("_deferredEnter");
function qi(e, t) {
	t && t.pendingBranch ? f(e) ? t.effects.push(...e) : t.effects.push(e) : Mn(e);
}
var B = /* @__PURE__ */ Symbol.for("v-fgt"), Ji = /* @__PURE__ */ Symbol.for("v-txt"), Yi = /* @__PURE__ */ Symbol.for("v-cmt"), Xi = /* @__PURE__ */ Symbol.for("v-stc"), Zi = [], Qi = null;
function V(e = !1) {
	Zi.push(Qi = e ? null : []);
}
function $i() {
	Zi.pop(), Qi = Zi[Zi.length - 1] || null;
}
var ea = 1;
function ta(e, t = !1) {
	ea += e, e < 0 && Qi && t && (Qi.hasOnce = !0);
}
function na(e) {
	return e.dynamicChildren = ea > 0 ? Qi || r : null, $i(), ea > 0 && Qi && Qi.push(e), e;
}
function H(e, t, n, r, i, a) {
	return na(U(e, t, n, r, i, a, !0));
}
function ra(e, t, n, r, i) {
	return na(ca(e, t, n, r, i, !0));
}
function ia(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function aa(e, t) {
	return e.type === t.type && e.key === t.key;
}
var oa = ({ key: e }) => e ?? null, sa = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : _(e) || /* @__PURE__ */ M(e) || g(e) ? {
	i: zn,
	r: e,
	k: t,
	f: !!n
} : e);
function U(e, t = null, n = null, r = 0, i = null, a = e === B ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && oa(t),
		ref: t && sa(t),
		scopeId: Bn,
		slotScopeIds: null,
		children: n,
		component: null,
		suspense: null,
		ssContent: null,
		ssFallback: null,
		dirs: null,
		transition: null,
		el: null,
		anchor: null,
		target: null,
		targetStart: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag: a,
		patchFlag: r,
		dynamicProps: i,
		dynamicChildren: null,
		appContext: null,
		ctx: zn
	};
	return s ? (ha(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= _(n) ? 8 : 16), ea > 0 && !o && Qi && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && Qi.push(c), c;
}
var ca = la;
function la(e, t = null, n = null, r = 0, i = null, a = !1) {
	if (e && e !== kr || (e = Yi), ia(e)) {
		let r = da(e, t, !0);
		return n && ha(r, n), ea > 0 && !a && Qi && (r.shapeFlag & 6 ? Qi[Qi.indexOf(e)] = r : Qi.push(r)), r.patchFlag = -2, r;
	}
	if (za(e) && (e = e.__vccOpts), t) {
		t = ua(t);
		let { class: e, style: n } = t;
		e && !_(e) && (t.class = D(e)), y(n) && (/* @__PURE__ */ Zt(n) && !f(n) && (n = c({}, n)), t.style = E(n));
	}
	let o = _(e) ? 1 : Gi(e) ? 128 : $n(e) ? 64 : y(e) ? 4 : g(e) ? 2 : 0;
	return U(e, t, n, r, i, o, a, !0);
}
function ua(e) {
	return e ? /* @__PURE__ */ Zt(e) ? c({}, e) : vi(e) ? c({}, e[Pa] || e) : e : null;
}
function da(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? ga(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && oa(l),
		ref: t && t.ref ? n && a ? f(a) ? a.concat(sa(t)) : [a, sa(t)] : sa(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== B ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && da(e.ssContent),
		ssFallback: e.ssFallback && da(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce,
		cacheIndex: e.cacheIndex
	};
	return c && r && rr(u, c.clone(u)), u;
}
function W(e = " ", t = 0) {
	return ca(Ji, null, e, t);
}
function fa(e, t) {
	let n = ca(Xi, null, e);
	return n.staticCount = t, n;
}
function G(e = "", t = !1) {
	return t ? (V(), ra(Yi, null, e)) : ca(Yi, null, e);
}
function pa(e) {
	return e == null || typeof e == "boolean" ? ca(Yi) : f(e) ? ca(B, null, e.slice()) : ia(e) ? ma(e) : ca(Ji, null, String(e));
}
function ma(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : da(e);
}
function ha(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (f(t)) n = 16;
	else if (typeof t == "object") {
		if (r & 65) {
			let n = t.default;
			n && (n._c && (n._d = !1), ha(e, n()), n._c && (n._d = !0));
			return;
		}
		{
			n = 32;
			let r = t._;
			!r && !vi(t) ? t._ctx = zn : r === 3 && zn && (zn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
		}
	} else if (g(t)) {
		if (r & 65) {
			ha(e, { default: t });
			return;
		}
		t = {
			default: t,
			_ctx: zn
		}, n = 32;
	} else t = String(t), r & 64 ? (n = 16, t = [W(t)]) : n = 8;
	e.children = t, e.shapeFlag |= n;
}
function ga(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = D([t.class, r.class]));
		else if (e === "style") t.style = E([t.style, r.style]);
		else if (o(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(f(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !s(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function _a(e, t, n, r = null) {
	vn(e, t, 7, [n, r]);
}
var va = /* @__PURE__ */ $r(), ya = 0;
function ba() {
	return ya;
}
function xa(e, t, r) {
	let i = e.type, a = (t ? t.appContext : e.appContext) || va, o = {
		uid: ya++,
		vnode: e,
		type: i,
		parent: t,
		appContext: a,
		root: null,
		next: null,
		subTree: null,
		effect: null,
		update: null,
		job: null,
		scope: new Ae(!0),
		render: null,
		proxy: null,
		exposed: null,
		exposeProxy: null,
		withProxy: null,
		provides: t ? t.provides : Object.create(a.provides),
		ids: t ? t.ids : [
			"",
			0,
			0
		],
		accessCache: null,
		renderCache: [],
		components: null,
		directives: null,
		propsOptions: wi(i, a),
		emitsOptions: oi(i, a),
		emit: null,
		emitted: null,
		propsDefaults: n,
		inheritAttrs: i.inheritAttrs,
		ctx: n,
		data: n,
		props: n,
		attrs: n,
		slots: n,
		refs: n,
		setupState: n,
		setupContext: null,
		suspense: r,
		suspenseId: r ? r.pendingId : 0,
		asyncDep: null,
		asyncResolved: !1,
		isMounted: !1,
		isUnmounted: !1,
		isDeactivated: !1,
		bc: null,
		c: null,
		bm: null,
		m: null,
		bu: null,
		u: null,
		um: null,
		bum: null,
		da: null,
		a: null,
		rtg: null,
		rtc: null,
		ec: null,
		sp: null
	};
	return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = ii.bind(null, o), e.ce && e.ce(o), o;
}
var Sa = null, Ca = () => Sa || zn, wa, Ta;
{
	let e = pe(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	wa = t("__VUE_INSTANCE_SETTERS__", (e) => Sa = e), Ta = t("__VUE_SSR_SETTERS__", (e) => ka = e);
}
var Ea = (e) => {
	let t = Sa;
	return wa(e), e.scope.on(), () => {
		e.scope.off(), wa(t);
	};
}, Da = () => {
	Sa && Sa.scope.off(), wa(null);
};
function Oa(e) {
	return e.vnode.shapeFlag & 4;
}
var ka = !1;
function Aa(e, t = !1, n = !1) {
	t && Ta(t);
	let { props: r, children: i } = e.vnode, a = Oa(e);
	yi(e, r, a, t), Mi(e, i, n || t);
	let o = a ? ja(e, t) : void 0;
	return t && Ta(!1), o;
}
function ja(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ir);
	let { setup: r } = n;
	if (r) {
		Xe();
		let n = e.setupContext = r.length > 1 ? Ia(e) : null, i = Ea(e), a = _n(r, e, 0, [e.props, n]), o = b(a);
		if (Ze(), i(), (o || e.sp) && !dr(e) && or(e), o) {
			if (a.then(Da, Da), t) return a.then((n) => {
				Ta(!0);
				try {
					Ma(e, n, t);
				} finally {
					Ta(!1);
				}
			}).catch((t) => {
				yn(t, e, 0, void 0, !0), e.ssrRender = (e, t) => t("<!---->");
			});
			e.asyncDep = a;
		} else Ma(e, a, t);
	} else Na(e, t);
}
function Ma(e, t, n) {
	g(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : y(t) && (e.setupState = an(t)), Na(e, n);
}
function Na(e, t, n) {
	let r = e.type;
	e.render ||= r.render || i;
	{
		let t = Ea(e);
		Xe();
		try {
			zr(e);
		} finally {
			Ze(), t();
		}
	}
}
var Pa = /* @__PURE__ */ Symbol(), Fa = { get(e, t) {
	return st(e, "get", ""), t === Pa ? e : e[t];
} };
function Ia(e) {
	return {
		attrs: new Proxy(e.attrs, Fa),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function La(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(an(Qt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Pr) return Pr[n](e);
		},
		has(e, t) {
			return t in e || t in Pr;
		}
	}) : e.proxy;
}
function Ra(e, t = !0) {
	return g(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function za(e) {
	return g(e) && "__vccOpts" in e;
}
var K = (e, t) => /* @__PURE__ */ un(e, t, ka);
function Ba(e, t, n) {
	try {
		ta(-1);
		let r = arguments.length;
		return r === 2 ? y(t) && !f(t) ? ia(t) ? ca(e, null, [t]) : ca(e, t) : ca(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && ia(n) && (n = [n]), ca(e, t, n));
	} finally {
		ta(1);
	}
}
var Va = "3.5.45", Ha = void 0, Ua = typeof window < "u" && window.trustedTypes;
if (Ua) try {
	Ha = /* @__PURE__ */ Ua.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var Wa = Ha ? (e) => Ha.createHTML(e) : (e) => e, Ga = "http://www.w3.org/2000/svg", Ka = "http://www.w3.org/1998/Math/MathML", qa = typeof document < "u" ? document : null, Ja = qa && /* @__PURE__ */ qa.createElement("template"), Ya = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? qa.createElementNS(Ga, e) : t === "mathml" ? qa.createElementNS(Ka, e) : n ? qa.createElement(e, { is: n }) : qa.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => qa.createTextNode(e),
	createComment: (e) => qa.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => qa.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), i !== a && (i = i.nextSibling););
		else {
			Ja.innerHTML = Wa(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = Ja.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, Xa = /* @__PURE__ */ Symbol("_vtc");
function Za(e, t, n) {
	let r = e[Xa];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var Qa = /* @__PURE__ */ Symbol("_vod"), $a = /* @__PURE__ */ Symbol("_vsh"), eo = {
	name: "show",
	beforeMount(e, { value: t }, { transition: n }) {
		e[Qa] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : to(e, t);
	},
	mounted(e, { value: t }, { transition: n }) {
		n && t && n.enter(e);
	},
	updated(e, { value: t, oldValue: n }, { transition: r }) {
		!t != !n && (r ? t ? (r.beforeEnter(e), to(e, !0), r.enter(e)) : r.leave(e, () => {
			to(e, !1);
		}) : to(e, t));
	},
	beforeUnmount(e, { value: t }) {
		to(e, t);
	}
};
function to(e, t) {
	e.style.display = t ? e[Qa] : "none", e[$a] = !t;
}
var no = /* @__PURE__ */ Symbol(""), ro = /(?:^|;)\s*display\s*:/;
function io(e, t, n) {
	let r = e.style, i = _(n), a = !1;
	if (n && !i) {
		if (t) {
			if (_(t)) for (let e of t.split(";")) {
				let t = e.slice(0, e.indexOf(":")).trim();
				n[t] ?? oo(r, t, "");
			}
			else for (let e in t) n[e] ?? oo(r, e, "");
		}
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? oo(r, i, "") : uo(e, i, !_(t) && t ? t[i] : void 0, o) || oo(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[no];
			e && (n += ";" + e), r.cssText = n, a = ro.test(n);
		}
	} else t && e.removeAttribute("style");
	Qa in e && (i && t === n || (e[Qa] = a ? r.display : ""), e[$a] && (r.display = "none"));
}
var ao = /\s*!important$/;
function oo(e, t, n) {
	if (f(n)) n.forEach((n) => oo(e, t, n));
	else if (n ??= "", t.startsWith("--")) ao.test(n) ? e.setProperty(t, n.replace(ao, ""), "important") : e.setProperty(t, n);
	else {
		let r = lo(e, t);
		ao.test(n) ? e.setProperty(T(r), n.replace(ao, ""), "important") : e[r] = n;
	}
}
var so = [
	"Webkit",
	"Moz",
	"ms"
], co = {};
function lo(e, t) {
	let n = co[t];
	if (n) return n;
	let r = w(t);
	if (r !== "filter" && r in e) return co[t] = r;
	r = oe(r);
	for (let n = 0; n < so.length; n++) {
		let i = so[n] + r;
		if (i in e) return co[t] = i;
	}
	return t;
}
function uo(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && _(r) && n === r;
}
var fo = "http://www.w3.org/1999/xlink";
function po(e, t, n, r, i, a = ye(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(fo, t.slice(6, t.length)) : e.setAttributeNS(fo, t, n) : n == null || a && !be(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : v(n) ? String(n) : n);
}
function mo(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? Wa(n) : n);
		return;
	}
	let a = e.tagName;
	if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
		let r = a === "OPTION" ? e.getAttribute("value") || "" : e.value, i = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
		r === i && "_value" in e || (e.value = i), n ?? e.removeAttribute(t), e._value = n;
		return;
	}
	let o = !1;
	if (n === "" || n == null) {
		let r = typeof e[t];
		r === "boolean" ? n = be(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function ho(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function go(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var _o = /* @__PURE__ */ Symbol("_vei");
function vo(e, t, n, r, i = null) {
	let a = e[_o] || (e[_o] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = xo(t);
		r ? ho(e, n, a[t] = To(r, i), s) : o && (go(e, n, o, s), a[t] = void 0);
	}
}
var yo = /(Once|Passive|Capture)$/, bo = /^on:?(?:Once|Passive|Capture)$/;
function xo(e) {
	let t, n;
	for (; (n = e.match(yo)) && !bo.test(e);) t ||= {}, e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
	return [e[2] === ":" ? e.slice(3) : T(e.slice(2)), t];
}
var So = 0, Co = /* @__PURE__ */ Promise.resolve(), wo = () => So ||= (Co.then(() => So = 0), Date.now());
function To(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		let r = n.value;
		if (f(r)) {
			let n = e.stopImmediatePropagation;
			e.stopImmediatePropagation = () => {
				n.call(e), e._stopped = !0;
			};
			let i = r.slice(), a = [e];
			for (let n = 0; n < i.length && !e._stopped; n++) {
				let e = i[n];
				e && vn(e, t, 5, a);
			}
		} else vn(r, t, 5, [e]);
	};
	return n.value = e, n.attached = wo(), n;
}
var Eo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Do = (e, t, n, r, i, a) => {
	let c = i === "svg";
	t === "class" ? Za(e, r, c) : t === "style" ? io(e, n, r) : o(t) ? s(t) || vo(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), 1) : t[0] === "^" ? (t = t.slice(1), 0) : Oo(e, t, r, c)) ? (mo(e, t, r), e.tagName.includes("-") || t !== "value" && t !== "checked" && t !== "selected" || po(e, t, r, c, a, t !== "value")) : e._isVueCE && (ko(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !_(r))) ? mo(e, w(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), po(e, t, r, c));
};
function Oo(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Eo(t) && g(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return Eo(t) && _(n) ? !1 : t in e;
}
function ko(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = w(t);
	return Array.isArray(n) ? n.some((e) => w(e) === r) : Object.keys(n).some((e) => w(e) === r);
}
var Ao = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return f(t) ? (e) => le(t, e) : t;
};
function jo(e) {
	e.target.composing = !0;
}
function Mo(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var No = /* @__PURE__ */ Symbol("_assign"), Po = /* @__PURE__ */ Symbol("_initialValue");
function Fo(e, t, n) {
	return t && (e = e.trim()), n && (e = de(e)), e;
}
var q = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e.parentNode && (e.type === "text" ? e[Po] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Po] = e.defaultValue.replace(/\r\n?/g, "\n"))), e[No] = Ao(i);
		let a = r || i.props && i.props.type === "number";
		ho(e, t ? "change" : "input", (t) => {
			t.target.composing || e[No](Fo(e.value, n, a));
		}), (n || a) && ho(e, "change", () => {
			e.value = Fo(e.value, n, a);
		}), t || (ho(e, "compositionstart", jo), ho(e, "compositionend", Mo), ho(e, "change", Mo));
	},
	mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
		let i = t ?? "", a = e[Po];
		delete e[Po], a !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== a ? e[No](Fo(e.value, n, r)) : e.value = i;
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[No] = Ao(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? de(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, Io = {
	deep: !0,
	created(e, t, n) {
		e[No] = Ao(n), ho(e, "change", () => {
			let t = e._modelValue, n = Vo(e), r = e.checked, i = e[No];
			if (f(t)) {
				let e = Ee(t, n), a = e !== -1;
				if (r && !a) i(t.concat(n));
				else if (!r && a) {
					let n = [...t];
					n.splice(e, 1), i(n);
				}
			} else if (m(t)) {
				let e = new Set(t);
				r ? e.add(n) : e.delete(n), i(e);
			} else i(Ho(e, r));
		});
	},
	mounted: Lo,
	beforeUpdate(e, t, n) {
		e[No] = Ao(n), Lo(e, t, n);
	}
};
function Lo(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (f(t)) i = Ee(t, r.props.value) > -1;
	else if (m(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = Te(t, Ho(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var Ro = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		e._modelValue = t, ho(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? de(Vo(e)) : Vo(e)), r = e.multiple, i = r ? m(e._modelValue) ? new Set(t) : t : t[0], a = e._pendingValue = [r, r ? f(i) ? t.slice() : t : i];
			try {
				e[No](i);
			} finally {
				On(() => {
					e._pendingValue === a && (e._pendingValue = void 0);
				});
			}
		}), e[No] = Ao(r);
	},
	mounted(e, { value: t, modifiers: { number: n } }) {
		Bo(e, t, n);
	},
	beforeUpdate(e, { value: t }, n) {
		e._modelValue = t, e[No] = Ao(n);
	},
	updated(e, { value: t, modifiers: { number: n } }) {
		let r = e._pendingValue;
		e._pendingValue = void 0, r && r[0] === e.multiple && zo(t, r[1], r[0]) || Bo(e, t, n);
	}
};
function zo(e, t, n) {
	if (!n || f(e)) return Te(e, t);
	if (m(e)) {
		if (e.size !== t.length) return !1;
		for (let n of t) if (!e.has(n)) return !1;
		return !0;
	}
	return !1;
}
function Bo(e, t, n = !1) {
	let r = e.multiple, i = f(t);
	if (!r || i || m(t)) {
		for (let a = 0, o = e.options.length; a < o; a++) {
			let o = e.options[a], s = Vo(o);
			if (r) {
				if (i) {
					let e = typeof s;
					o.selected = e === "string" || e === "number" ? t.some((e) => String(e) === String(s)) : Ee(t, s) > -1;
				} else o.selected = t.has(s) || n && typeof s == "string" && t.has(de(s));
			} else if (Te(Vo(o), t)) {
				e.selectedIndex !== a && (e.selectedIndex = a);
				return;
			}
		}
		!r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function Vo(e) {
	return "_value" in e ? e._value : e.value;
}
function Ho(e, t) {
	let n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t;
}
var Uo = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], Wo = {
	stop: (e) => e.stopPropagation(),
	prevent: (e) => e.preventDefault(),
	self: (e) => e.target !== e.currentTarget,
	ctrl: (e) => !e.ctrlKey,
	shift: (e) => !e.shiftKey,
	alt: (e) => !e.altKey,
	meta: (e) => !e.metaKey,
	left: (e) => "button" in e && e.button !== 0,
	middle: (e) => "button" in e && e.button !== 1,
	right: (e) => "button" in e && e.button !== 2,
	exact: (e, t) => Uo.some((n) => e[`${n}Key`] && !t.includes(n))
}, Go = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = Wo[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, Ko = {
	esc: "escape",
	space: " ",
	up: "arrow-up",
	left: "arrow-left",
	right: "arrow-right",
	down: "arrow-down",
	delete: "backspace"
}, qo = (e, t) => {
	let n = e._withKeys ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n) => {
		if (!("key" in n)) return;
		let r = T(n.key);
		if (t.some((e) => e === r || Ko[e] === r)) return e(n);
	}));
}, Jo = /* @__PURE__ */ c({ patchProp: Do }, Ya), Yo;
function Xo() {
	return Yo ||= Fi(Jo);
}
var Zo = ((...e) => {
	let t = Xo().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = $o(e);
		if (!r) return;
		let i = t._component;
		g(i) || i.render || i.template || (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, Qo(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function Qo(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function $o(e) {
	return _(e) ? document.querySelector(e) : e;
}
// node_modules/pinia/dist/pinia.mjs
var es = typeof window < "u", ts, ns = (e) => ts = e, rs = Symbol();
function is(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var as;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(as ||= {});
var os = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function ss(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function cs(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		ps(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function ls(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function us(e) {
	try {
		e.dispatchEvent(new MouseEvent("click"));
	} catch {
		let t = new MouseEvent("click", {
			bubbles: !0,
			cancelable: !0,
			view: window,
			detail: 0,
			screenX: 80,
			screenY: 20,
			clientX: 80,
			clientY: 20,
			ctrlKey: !1,
			altKey: !1,
			shiftKey: !1,
			metaKey: !1,
			button: 0,
			relatedTarget: null
		});
		e.dispatchEvent(t);
	}
}
var ds = typeof navigator == "object" ? navigator : { userAgent: "" }, fs = /Macintosh/.test(ds.userAgent) && /AppleWebKit/.test(ds.userAgent) && !/Safari/.test(ds.userAgent), ps = es ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !fs ? ms : "msSaveOrOpenBlob" in ds ? hs : gs : () => {};
function ms(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? us(r) : ls(r.href) ? cs(e, t, n) : (r.target = "_blank", us(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		us(r);
	}, 0));
}
function hs(e, t = "download", n) {
	if (typeof e == "string") {
		if (ls(e)) cs(e, t, n);
		else {
			let t = document.createElement("a");
			t.href = e, t.target = "_blank", setTimeout(function() {
				us(t);
			});
		}
	} else navigator.msSaveOrOpenBlob(ss(e, n), t);
}
function gs(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return cs(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(os.HTMLElement)) || "safari" in os, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || fs) && typeof FileReader < "u") {
		let t = new FileReader();
		t.onloadend = function() {
			let e = t.result;
			if (typeof e != "string") throw r = null, Error("Wrong reader.result type");
			e = o ? e : e.replace(/^data:[^;]*;/, "data:attachment/file;"), r ? r.location.href = e : location.assign(e), r = null;
		}, t.readAsDataURL(e);
	} else {
		let t = URL.createObjectURL(e);
		r ? r.location.assign(t) : location.href = t, r = null, setTimeout(function() {
			URL.revokeObjectURL(t);
		}, 4e4);
	}
}
var { assign: _s } = Object;
function vs() {
	let e = je(!0), t = e.run(() => /* @__PURE__ */ N({})), n = [], r = [], i = Qt({
		install(e) {
			ns(i), i._a = e, e.provide(rs, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
		},
		use(e) {
			return this._a ? n.push(e) : r.push(e), this;
		},
		_p: n,
		_a: null,
		_e: e,
		_s: /* @__PURE__ */ new Map(),
		state: t
	});
	return i;
}
var ys = () => {};
function bs(e, t, n, r = ys) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && Me() && Ne(i), i;
}
function xs(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var Ss = (e) => e(), Cs = Symbol(), ws = Symbol();
function Ts(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!t.hasOwnProperty(n)) continue;
		let r = t[n], i = e[n];
		e[n] = is(i) && is(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ M(r) && !/* @__PURE__ */ Jt(r) ? Ts(i, r) : r;
	}
	return e;
}
var Es = Symbol();
function Ds(e) {
	return !is(e) || !Object.prototype.hasOwnProperty.call(e, Es);
}
var { assign: Os } = Object;
function ks(e) {
	return !!(/* @__PURE__ */ M(e) && e.effect);
}
function As(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || 
		/* istanbul ignore if */
		(n.state.value[e] = i ? i() : {}), Os(/* @__PURE__ */ on(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = Qt(K(() => {
			ns(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return c = js(e, l, t, n, r, !0), c;
}
function js(e, t, n = {}, r, i, a) {
	let o, s = Os({ actions: {} }, n), c = { deep: !0 }, l, u, d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p, m = r.state.value[e];
	!a && !m && 
	/* istanbul ignore if */
	(r.state.value[e] = {});
	let h;
	function g(t) {
		let n;
		l = u = !1, typeof t == "function" ? (t(r.state.value[e]), n = {
			type: as.patchFunction,
			storeId: e,
			events: p
		}) : (Ts(r.state.value[e], t), n = {
			type: as.patchObject,
			payload: t,
			storeId: e,
			events: p
		});
		let i = h = Symbol();
		On().then(() => {
			h === i && (l = !0);
		}), u = !0, xs(d, n, r.state.value[e]);
	}
	let _ = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			Os(e, t);
		});
	} : ys;
	function v() {
		o.stop(), d.clear(), f.clear(), r._s.delete(e);
	}
	let y = (t, n = "") => {
		if (Cs in t) return t[ws] = n, t;
		let i = function() {
			ns(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			xs(f, {
				args: n,
				name: i[ws],
				store: b,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : b, n);
			} catch (e) {
				throw xs(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (xs(a, e), e)).catch((e) => (xs(o, e), Promise.reject(e))) : (xs(a, l), l);
		};
		return i[Cs] = !0, i[ws] = n, i;
	}, b = /* @__PURE__ */ Wt({
		_p: r,
		$id: e,
		$onAction: bs.bind(null, f),
		$patch: g,
		$reset: _,
		$subscribe(t, n = {}) {
			let i = bs(d, t, n.detached, () => a()), a = o.run(() => L(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? u : l) && t({
					storeId: e,
					type: as.direct,
					events: p
				}, r);
			}, Os({}, c, n)));
			return i;
		},
		$dispose: v
	});
	r._s.set(e, b);
	let x = (r._a && r._a.runWithContext || Ss)(() => r._e.run(() => (o = je()).run(() => t({ action: y }))));
	for (let t in x) {
		let n = x[t];
		/* @__PURE__ */ M(n) && !ks(n) || /* @__PURE__ */ Jt(n) ? a || (m && Ds(n) && (/* @__PURE__ */ M(n) ? n.value = m[t] : Ts(n, m[t])), r.state.value[e][t] = n) : typeof n == "function" && (x[t] = y(n, t), s.actions[t] = n);
	}
	return Os(b, x), Os(/* @__PURE__ */ j(b), x), Object.defineProperty(b, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			g((t) => {
				Os(t, e);
			});
		}
	}), r._p.forEach((e) => {
		Os(b, o.run(() => e({
			store: b,
			app: r._a,
			pinia: r,
			options: s
		})));
	}), m && a && n.hydrate && n.hydrate(b.$state, m), l = !0, u = !0, b;
}
function Ms(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function a(n, a) {
		let o = Kn();
		return n ||= o ? Gn(rs, null) : null, n && ns(n), n = ts, n._s.has(e) || (i ? js(e, t, r, n) : As(e, r, n)), n._s.get(e);
	}
	return a.$id = e, a;
}
// src/vue/navigation/nav-model.js
var Ns = /* @__PURE__ */ new Set([
	"projects",
	"saved",
	"myideas",
	"myprompts",
	"events",
	"tracks",
	"artists"
]);
function Ps(e) {
	return e === "detail" ? "catalog" : Ns.has(e) ? "account" : e;
}
function Fs(e) {
	let t = Ps(e?.active), n = /* @__PURE__ */ new Set(), r = !1, i = [];
	for (let a of Array.isArray(e?.items) ? e.items : []) {
		let e = typeof a?.id == "string" ? a.id : "", o = typeof a?.label == "string" ? a.label : "";
		if (!e || !o || n.has(e)) continue;
		let s = e === "mixer" || /(^|\s)миксер(\s|$)/i.test(o.trim());
		s && r || (s && (r = !0), n.add(e), i.push({
			id: e,
			label: o,
			shortLabel: e === "mixer" ? "Миксер" : o.replace("Жанровый миксер", "Миксер").replace("Идеи песен", "Идеи").replace("Suno Studio", "Студия").replace("Личный кабинет", "Кабинет"),
			iconHtml: typeof a.iconHtml == "string" ? a.iconHtml : "",
			active: e === t
		}));
	}
	return i;
}
// node_modules/vue-router/dist/devtools-EWN81iOl.mjs
var Is = typeof document < "u";
function Ls(e) {
	return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Rs(e) {
	return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && Ls(e.default);
}
var J = Object.assign;
function zs(e, t) {
	let n = {};
	for (let r in t) {
		let i = t[r];
		n[r] = Vs(i) ? i.map(e) : e(i);
	}
	return n;
}
var Bs = () => {}, Vs = Array.isArray;
function Hs(e, t) {
	let n = {};
	for (let r in e) n[r] = r in t ? t[r] : e[r];
	return n;
}
var Us = /#/g, Ws = /&/g, Gs = /\//g, Ks = /=/g, qs = /\?/g, Js = /\+/g, Ys = /%5B/g, Xs = /%5D/g, Zs = /%5E/g, Qs = /%60/g, $s = /%7B/g, ec = /%7C/g, tc = /%7D/g, nc = /%20/g;
function rc(e) {
	return e == null ? "" : encodeURI("" + e).replace(ec, "|").replace(Ys, "[").replace(Xs, "]");
}
function ic(e) {
	return rc(e).replace($s, "{").replace(tc, "}").replace(Zs, "^");
}
function ac(e) {
	return rc(e).replace(Js, "%2B").replace(nc, "+").replace(Us, "%23").replace(Ws, "%26").replace(Qs, "`").replace($s, "{").replace(tc, "}").replace(Zs, "^");
}
function oc(e) {
	return ac(e).replace(Ks, "%3D");
}
function sc(e) {
	return rc(e).replace(Us, "%23").replace(qs, "%3F");
}
function cc(e) {
	return sc(e).replace(Gs, "%2F");
}
function lc(e) {
	if (e == null) return null;
	try {
		return decodeURIComponent("" + e);
	} catch {}
	return "" + e;
}
var uc = /\/$/, dc = (e) => e.replace(uc, "");
function fc(e, t, n = "/") {
	let r, i = {}, a = "", o = "", s = t.indexOf("#"), c = t.indexOf("?");
	return c = s >= 0 && c > s ? -1 : c, c >= 0 && (r = t.slice(0, c), a = t.slice(c, s > 0 ? s : t.length), i = e(a.slice(1))), s >= 0 && (r ||= t.slice(0, s), o = t.slice(s, t.length)), r = yc(r ?? t, n), {
		fullPath: r + a + o,
		path: r,
		query: i,
		hash: lc(o)
	};
}
function pc(e, t) {
	let n = t.query ? e(t.query) : "";
	return t.path + (n && "?") + n + (t.hash || "");
}
function mc(e, t, n) {
	let r = t.matched.length - 1, i = n.matched.length - 1;
	return r > -1 && r === i && hc(t.matched[r], n.matched[i]) && gc(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function hc(e, t) {
	return (e.aliasOf || e) === (t.aliasOf || t);
}
function gc(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (var n in e) if (!_c(e[n], t[n])) return !1;
	return !0;
}
function _c(e, t) {
	return Vs(e) ? vc(e, t) : Vs(t) ? vc(t, e) : e?.valueOf() === t?.valueOf();
}
function vc(e, t) {
	return Vs(t) ? e.length === t.length && e.every((e, n) => e === t[n]) : e.length === 1 && e[0] === t;
}
function yc(e, t) {
	if (e.startsWith("/")) return e;
	if (!e) return t;
	let n = t.split("/"), r = e.split("/"), i = r[r.length - 1];
	(i === ".." || i === ".") && r.push("");
	let a = n.length - 1, o, s;
	for (o = 0; o < r.length; o++) if (s = r[o], s !== ".") {
		if (s === "..") a > 1 && a--;
		else break;
	}
	return n.slice(0, a).join("/") + "/" + r.slice(o).join("/");
}
var bc = {
	path: "/",
	name: void 0,
	params: {},
	query: {},
	hash: "",
	fullPath: "/",
	matched: [],
	meta: {},
	redirectedFrom: void 0
}, xc = /* @__PURE__ */ function(e) {
	return e.pop = "pop", e.push = "push", e;
}({}), Sc = /* @__PURE__ */ function(e) {
	return e.back = "back", e.forward = "forward", e.unknown = "", e;
}({});
function Cc(e) {
	if (!e) {
		if (Is) {
			let t = document.querySelector("base");
			e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
		} else e = "/";
	}
	return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), dc(e);
}
var wc = /^[^#]+#/;
function Tc(e, t) {
	return e.replace(wc, "#") + t;
}
function Ec(e, t) {
	let n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
	return {
		behavior: t.behavior,
		left: r.left - n.left - (t.left || 0),
		top: r.top - n.top - (t.top || 0)
	};
}
var Dc = () => ({
	left: window.scrollX,
	top: window.scrollY
});
function Oc(e) {
	let t;
	if ("el" in e) {
		let n = e.el, r = typeof n == "string" && n.startsWith("#"), i = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
		if (!i) return;
		t = Ec(i, e);
	} else t = e;
	"scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left == null ? window.scrollX : t.left, t.top == null ? window.scrollY : t.top);
}
function kc(e, t) {
	return (history.state ? history.state.position - t : -1) + e;
}
var Ac = /* @__PURE__ */ new Map();
function jc(e, t) {
	Ac.set(e, t);
}
function Mc(e) {
	let t = Ac.get(e);
	return Ac.delete(e), t;
}
function Nc(e) {
	return typeof e == "string" || e && typeof e == "object";
}
function Pc(e) {
	return typeof e == "string" || typeof e == "symbol";
}
var Y = /* @__PURE__ */ function(e) {
	return e[e.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", e[e.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", e[e.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", e[e.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", e[e.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", e;
}({}), Fc = Symbol("");
Y.MATCHER_NOT_FOUND, Y.NAVIGATION_GUARD_REDIRECT, Y.NAVIGATION_ABORTED, Y.NAVIGATION_CANCELLED, Y.NAVIGATION_DUPLICATED;
function Ic(e, t) {
	return J(/* @__PURE__ */ Error(), {
		type: e,
		[Fc]: !0
	}, t);
}
function Lc(e, t) {
	return e instanceof Error && Fc in e && (t == null || !!(e.type & t));
}
function Rc(e) {
	let t = {};
	if (e === "" || e === "?") return t;
	let n = (e[0] === "?" ? e.slice(1) : e).split("&");
	for (let e = 0; e < n.length; ++e) {
		let r = n[e].replace(Js, " "), i = r.indexOf("="), a = lc(i < 0 ? r : r.slice(0, i)), o = i < 0 ? null : lc(r.slice(i + 1));
		if (a in t) {
			let e = t[a];
			Vs(e) || (e = t[a] = [e]), e.push(o);
		} else t[a] = o;
	}
	return t;
}
function zc(e) {
	let t = "";
	for (let n in e) {
		let r = e[n];
		n = oc(n), r == null ? r !== void 0 && (t += (t.length ? "&" : "") + n) : (Vs(r) ? r.map((e) => e && ac(e)) : [r && ac(r)]).forEach((e) => {
			e !== void 0 && (t += (t.length ? "&" : "") + n, e != null && (t += "=" + e));
		});
	}
	return t;
}
function Bc(e) {
	let t = {};
	for (let n in e) {
		let r = e[n];
		r !== void 0 && (t[n] = Vs(r) ? r.map((e) => e == null ? null : "" + e) : r == null ? r : "" + r);
	}
	return t;
}
var Vc = Symbol(""), Hc = Symbol(""), Uc = Symbol(""), Wc = Symbol(""), Gc = Symbol("");
function Kc() {
	let e = [];
	function t(t) {
		return e.push(t), () => {
			let n = e.indexOf(t);
			n > -1 && e.splice(n, 1);
		};
	}
	function n() {
		e = [];
	}
	return {
		add: t,
		list: () => e.slice(),
		reset: n
	};
}
function qc(e, t, n, r, i, a = (e) => e()) {
	let o = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
	return () => new Promise((s, c) => {
		let l = (e) => {
			e === !1 ? c(Ic(Y.NAVIGATION_ABORTED, {
				from: n,
				to: t
			})) : e instanceof Error ? c(e) : Nc(e) ? c(Ic(Y.NAVIGATION_GUARD_REDIRECT, {
				from: t,
				to: e
			})) : (o && r.enterCallbacks[i] === o && typeof e == "function" && o.push(e), s());
		}, u = a(() => e.call(r && r.instances[i], t, n, l)), d = Promise.resolve(u);
		e.length < 3 && (d = d.then(l)), d.catch((e) => c(e));
	});
}
function Jc(e, t, n, r, i = (e) => e()) {
	let a = [];
	for (let o of e) for (let e in o.components) {
		let s = o.components[e];
		if (t === "beforeRouteEnter" || o.instances[e]) {
			if (Ls(s)) {
				let c = (s.__vccOpts || s)[t];
				c && a.push(qc(c, n, r, o, e, i));
			} else {
				let c = s();
				a.push(() => c.then((a) => {
					if (!a) throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);
					let s = Rs(a) ? a.default : a;
					o.mods[e] = a, o.components[e] = s;
					let c = (s.__vccOpts || s)[t];
					return c && qc(c, n, r, o, e, i)();
				}));
			}
		}
	}
	return a;
}
function Yc(e, t) {
	let n = [], r = [], i = [], a = Math.max(t.matched.length, e.matched.length);
	for (let o = 0; o < a; o++) {
		let a = t.matched[o];
		a && (e.matched.find((e) => hc(e, a)) ? r.push(a) : n.push(a));
		let s = e.matched[o];
		s && (t.matched.find((e) => hc(e, s)) || i.push(s));
	}
	return [
		n,
		r,
		i
	];
}
// node_modules/vue-router/dist/vue-router.mjs
function Xc(e = "") {
	let t = [], n = [["", {}]], r = 0;
	e = Cc(e);
	function i(e, t = {}) {
		r++, r !== n.length && n.splice(r), n.push([e, t]);
	}
	function a(e, n, { direction: r, delta: i }) {
		let a = {
			direction: r,
			delta: i,
			type: xc.pop
		};
		for (let r of t) r(e, n, a);
	}
	let o = {
		location: "",
		state: {},
		base: e,
		createHref: Tc.bind(null, e),
		replace(e, t) {
			n.splice(r--, 1), i(e, t);
		},
		push(e, t) {
			i(e, t);
		},
		listen(e) {
			return t.push(e), () => {
				let n = t.indexOf(e);
				n > -1 && t.splice(n, 1);
			};
		},
		destroy() {
			t = [], n = [["", {}]], r = 0;
		},
		go(e, t = !0) {
			let i = this.location, o = e < 0 ? Sc.back : Sc.forward;
			r = Math.max(0, Math.min(r + e, n.length - 1)), t && a(this.location, i, {
				direction: o,
				delta: e
			});
		}
	};
	return Object.defineProperty(o, "location", {
		enumerable: !0,
		get: () => n[r][0]
	}), Object.defineProperty(o, "state", {
		enumerable: !0,
		get: () => n[r][1]
	}), o;
}
var Zc = /* @__PURE__ */ function(e) {
	return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.Group = 2] = "Group", e;
}({}), Qc = /* @__PURE__ */ function(e) {
	return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.ParamRegExp = 2] = "ParamRegExp", e[e.ParamRegExpEnd = 3] = "ParamRegExpEnd", e[e.EscapeNext = 4] = "EscapeNext", e;
}(Qc || {}), $c = {
	type: Zc.Static,
	value: ""
}, el = /[a-zA-Z0-9_]/;
function tl(e) {
	if (!e) return [[]];
	if (e === "/") return [[$c]];
	if (!e.startsWith("/")) throw Error(`Invalid path "${e}"`);
	function t(e) {
		throw Error(`ERR (${n})/"${l}": ${e}`);
	}
	let n = Qc.Static, r = n, i = [], a;
	function o() {
		a && i.push(a), a = [];
	}
	let s = 0, c, l = "", u = "";
	function d() {
		l &&= (n === Qc.Static ? a.push({
			type: Zc.Static,
			value: l
		}) : n === Qc.Param || n === Qc.ParamRegExp || n === Qc.ParamRegExpEnd ? (a.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`), a.push({
			type: Zc.Param,
			value: l,
			regexp: u,
			repeatable: c === "*" || c === "+",
			optional: c === "*" || c === "?"
		})) : t("Invalid state to consume buffer"), "");
	}
	function f() {
		l += c;
	}
	for (; s < e.length;) if (c = e[s++], c === "\\" && n !== Qc.ParamRegExp) r = n, n = Qc.EscapeNext;
	else switch (n) {
		case Qc.Static:
			c === "/" ? (l && d(), o()) : c === ":" ? (d(), n = Qc.Param) : f();
			break;
		case Qc.EscapeNext:
			f(), n = r;
			break;
		case Qc.Param:
			c === "(" ? n = Qc.ParamRegExp : el.test(c) ? f() : (d(), n = Qc.Static, c !== "*" && c !== "?" && c !== "+" && s--);
			break;
		case Qc.ParamRegExp:
			c === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + c : n = Qc.ParamRegExpEnd : u += c;
			break;
		case Qc.ParamRegExpEnd:
			d(), n = Qc.Static, c !== "*" && c !== "?" && c !== "+" && s--, u = "";
			break;
		default: t("Unknown state");
	}
	return n === Qc.ParamRegExp && t(`Unfinished custom RegExp for param "${l}"`), d(), o(), i;
}
var nl = "[^/]+?", rl = {
	sensitive: !1,
	strict: !1,
	start: !0,
	end: !0
}, il = /* @__PURE__ */ function(e) {
	return e[e._multiplier = 10] = "_multiplier", e[e.Root = 90] = "Root", e[e.Segment = 40] = "Segment", e[e.SubSegment = 30] = "SubSegment", e[e.Static = 40] = "Static", e[e.Dynamic = 20] = "Dynamic", e[e.BonusCustomRegExp = 10] = "BonusCustomRegExp", e[e.BonusWildcard = -50] = "BonusWildcard", e[e.BonusRepeatable = -20] = "BonusRepeatable", e[e.BonusOptional = -8] = "BonusOptional", e[e.BonusStrict = .7000000000000001] = "BonusStrict", e[e.BonusCaseSensitive = .25] = "BonusCaseSensitive", e;
}(il || {}), al = /[.+*?^${}()[\]/\\]/g;
function ol(e, t) {
	let n = J({}, rl, t), r = [], i = n.start ? "^" : "", a = [];
	for (let t of e) {
		let e = t.length ? [] : [il.Root];
		n.strict && !t.length && (i += "/");
		for (let r = 0; r < t.length; r++) {
			let o = t[r], s = il.Segment + (n.sensitive ? il.BonusCaseSensitive : 0);
			if (o.type === Zc.Static) r || (i += "/"), i += o.value.replace(al, "\\$&"), s += il.Static;
			else if (o.type === Zc.Param) {
				let { value: e, repeatable: n, optional: c, regexp: l } = o;
				a.push({
					name: e,
					repeatable: n,
					optional: c
				});
				let u = l || nl;
				if (u !== nl) {
					s += il.BonusCustomRegExp;
					try {
						`${u}`;
					} catch (t) {
						throw Error(`Invalid custom RegExp for param "${e}" (${u}): ` + t.message);
					}
				}
				let d = n ? `((?:${u})(?:/(?:${u}))*)` : `(${u})`;
				r || (d = c && t.length < 2 ? `(?:/${d})` : "/" + d), c && (d += "?"), i += d, s += il.Dynamic, c && (s += il.BonusOptional), n && (s += il.BonusRepeatable), u === ".*" && (s += il.BonusWildcard);
			}
			e.push(s);
		}
		r.push(e);
	}
	if (n.strict && n.end) {
		let e = r.length - 1;
		r[e][r[e].length - 1] += il.BonusStrict;
	}
	n.strict || (i += "/?"), n.end ? i += "$" : n.strict && !i.endsWith("/") && (i += "(?:/|$)");
	let o = new RegExp(i, n.sensitive ? "" : "i");
	function s(e) {
		let t = e.match(o), n = {};
		if (!t) return null;
		for (let e = 1; e < t.length; e++) {
			let r = t[e] || "", i = a[e - 1];
			n[i.name] = r && i.repeatable ? r.split("/") : r;
		}
		return n;
	}
	function c(t) {
		let n = "", r = !1;
		for (let i of e) {
			r && n.endsWith("/") || (n += "/"), r = !1;
			for (let e of i) if (e.type === Zc.Static) n += e.value;
			else if (e.type === Zc.Param) {
				let { value: a, repeatable: o, optional: s } = e, c = a in t ? t[a] : "";
				if (Vs(c) && !o) throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);
				let l = Vs(c) ? c.join("/") : c;
				if (!l) {
					if (s) i.length < 2 && (n.endsWith("/") ? n = n.slice(0, -1) : r = !0);
					else throw Error(`Missing required param "${a}"`);
				}
				n += l;
			}
		}
		return n || "/";
	}
	return {
		re: o,
		score: r,
		keys: a,
		parse: s,
		stringify: c
	};
}
function sl(e, t) {
	let n = 0;
	for (; n < e.length && n < t.length;) {
		let r = t[n] - e[n];
		if (r) return r;
		n++;
	}
	return e.length < t.length ? e.length === 1 && e[0] === il.Static + il.Segment ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === il.Static + il.Segment ? 1 : -1 : 0;
}
function cl(e, t) {
	let n = 0, r = e.score, i = t.score;
	for (; n < r.length && n < i.length;) {
		let e = sl(r[n], i[n]);
		if (e) return e;
		n++;
	}
	if (Math.abs(i.length - r.length) === 1) {
		if (ll(r)) return 1;
		if (ll(i)) return -1;
	}
	return i.length - r.length;
}
function ll(e) {
	let t = e[e.length - 1];
	return e.length > 0 && t[t.length - 1] < 0;
}
var ul = {
	strict: !1,
	end: !0,
	sensitive: !1
};
function dl(e, t, n) {
	let r = J(ol(tl(e.path), n), {
		record: e,
		parent: t,
		children: [],
		alias: []
	});
	return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function fl(e, t) {
	let n = [], r = /* @__PURE__ */ new Map();
	t = Hs(ul, t);
	function i(e) {
		return r.get(e);
	}
	function a(e, n, r) {
		let i = !r, s = ml(e);
		s.aliasOf = r && r.record;
		let l = Hs(t, e), u = [s];
		if ("alias" in e) {
			let t = typeof e.alias == "string" ? [e.alias] : e.alias;
			for (let e of t) u.push(ml(J({}, s, {
				components: r ? r.record.components : s.components,
				path: e,
				aliasOf: r ? r.record : s
			})));
		}
		let d, f;
		for (let t of u) {
			let { path: u } = t;
			if (n && u[0] !== "/") {
				let e = n.record.path, r = e[e.length - 1] === "/" ? "" : "/";
				t.path = n.record.path + (u && r + u);
			}
			if (d = dl(t, n, l), r ? r.alias.push(d) : (f ||= d, f !== d && f.alias.push(d), i && e.name && !gl(d) && o(e.name)), bl(d) && c(d), s.children) {
				let e = s.children;
				for (let t = 0; t < e.length; t++) a(e[t], d, r && r.children[t]);
			}
			r ||= d;
		}
		return f ? () => {
			o(f);
		} : Bs;
	}
	function o(e) {
		if (Pc(e)) {
			let t = r.get(e);
			t && (r.delete(e), n.splice(n.indexOf(t), 1), t.children.forEach(o), t.alias.forEach(o));
		} else {
			let t = n.indexOf(e);
			t > -1 && (n.splice(t, 1), e.record.name && r.delete(e.record.name), e.children.forEach(o), e.alias.forEach(o));
		}
	}
	function s() {
		return n;
	}
	function c(e) {
		let t = vl(e, n);
		n.splice(t, 0, e), e.record.name && !gl(e) && r.set(e.record.name, e);
	}
	function l(e, t) {
		let i, a = {}, o, s;
		if ("name" in e && e.name) {
			if (i = r.get(e.name), !i) throw Ic(Y.MATCHER_NOT_FOUND, { location: e });
			s = i.record.name, a = J(pl(t.params, i.keys.filter((e) => !e.optional).concat(i.parent ? i.parent.keys.filter((e) => e.optional) : []).map((e) => e.name)), e.params && pl(e.params, i.keys.map((e) => e.name))), o = i.stringify(a);
		} else if (e.path != null) o = e.path, i = n.find((e) => e.re.test(o)), i && (a = i.parse(o), s = i.record.name);
		else {
			if (i = t.name ? r.get(t.name) : n.find((e) => e.re.test(t.path)), !i) throw Ic(Y.MATCHER_NOT_FOUND, {
				location: e,
				currentLocation: t
			});
			s = i.record.name, a = J({}, t.params, e.params), o = i.stringify(a);
		}
		let c = [], l = i;
		for (; l;) c.unshift(l.record), l = l.parent;
		return {
			name: s,
			path: o,
			params: a,
			matched: c,
			meta: _l(c)
		};
	}
	e.forEach((e) => a(e));
	function u() {
		n.length = 0, r.clear();
	}
	return {
		addRoute: a,
		resolve: l,
		removeRoute: o,
		clearRoutes: u,
		getRoutes: s,
		getRecordMatcher: i
	};
}
function pl(e, t) {
	let n = {};
	for (let r of t) r in e && (n[r] = e[r]);
	return n;
}
function ml(e) {
	let t = {
		path: e.path,
		redirect: e.redirect,
		name: e.name,
		meta: e.meta || {},
		aliasOf: e.aliasOf,
		beforeEnter: e.beforeEnter,
		props: hl(e),
		children: e.children || [],
		instances: {},
		leaveGuards: /* @__PURE__ */ new Set(),
		updateGuards: /* @__PURE__ */ new Set(),
		enterCallbacks: {},
		components: "components" in e ? e.components || null : e.component && { default: e.component }
	};
	return Object.defineProperty(t, "mods", { value: {} }), t;
}
function hl(e) {
	let t = {}, n = e.props || !1;
	if ("component" in e) t.default = n;
	else for (let r in e.components) t[r] = typeof n == "object" ? n[r] : n;
	return t;
}
function gl(e) {
	for (; e;) {
		if (e.record.aliasOf) return !0;
		e = e.parent;
	}
	return !1;
}
function _l(e) {
	return e.reduce((e, t) => J(e, t.meta), {});
}
function vl(e, t) {
	let n = 0, r = t.length;
	for (; n !== r;) {
		let i = n + r >> 1;
		cl(e, t[i]) < 0 ? r = i : n = i + 1;
	}
	let i = yl(e);
	return i && (r = t.lastIndexOf(i, r - 1)), r;
}
function yl(e) {
	let t = e;
	for (; t = t.parent;) if (bl(t) && cl(e, t) === 0) return t;
}
function bl({ record: e }) {
	return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function xl(e) {
	let t = Gn(Uc), n = Gn(Wc), r = K(() => {
		let n = F(e.to);
		return t.resolve(n);
	}), i = K(() => {
		let { matched: e } = r.value, { length: t } = e, i = e[t - 1], a = n.matched;
		if (!i || !a.length) return -1;
		let o = a.findIndex(hc.bind(null, i));
		if (o > -1) return o;
		let s = El(e[t - 2]);
		return t > 1 && El(i) === s && a[a.length - 1].path !== s ? a.findIndex(hc.bind(null, e[t - 2])) : o;
	}), a = K(() => i.value > -1 && Tl(n.params, r.value.params)), o = K(() => i.value > -1 && i.value === n.matched.length - 1 && gc(n.params, r.value.params));
	function s(n = {}) {
		if (wl(n)) {
			let n = t[F(e.replace) ? "replace" : "push"](F(e.to)).catch(Bs);
			return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => n), n;
		}
		return Promise.resolve();
	}
	return {
		route: r,
		href: K(() => r.value.href),
		isActive: a,
		isExactActive: o,
		navigate: s
	};
}
function Sl(e) {
	return e.length === 1 ? e[0] : e;
}
var Cl = /* @__PURE__ */ ar({
	name: "RouterLink",
	compatConfig: { MODE: 3 },
	props: {
		to: {
			type: [String, Object],
			required: !0
		},
		replace: Boolean,
		activeClass: String,
		exactActiveClass: String,
		custom: Boolean,
		ariaCurrentValue: {
			type: String,
			default: "page"
		},
		viewTransition: Boolean
	},
	useLink: xl,
	setup(e, { slots: t }) {
		let n = /* @__PURE__ */ Wt(xl(e)), { options: r } = Gn(Uc), i = K(() => ({
			[Dl(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
			[Dl(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
		}));
		return () => {
			let r = t.default && Sl(t.default(n));
			return e.custom ? r : Ba("a", {
				"aria-current": n.isExactActive ? e.ariaCurrentValue : null,
				href: n.href,
				onClick: n.navigate,
				class: i.value
			}, r);
		};
	}
});
function wl(e) {
	if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && (e.button === void 0 || e.button === 0)) {
		if (e.currentTarget && e.currentTarget.getAttribute) {
			let t = e.currentTarget.getAttribute("target");
			if (/\b_blank\b/i.test(t)) return;
		}
		return e.preventDefault && e.preventDefault(), !0;
	}
}
function Tl(e, t) {
	for (let n in t) {
		let r = t[n], i = e[n];
		if (typeof r == "string") {
			if (r !== i) return !1;
		} else if (!Vs(i) || i.length !== r.length || r.some((e, t) => e.valueOf() !== i[t].valueOf())) return !1;
	}
	return !0;
}
function El(e) {
	return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
var Dl = (e, t, n) => e ?? t ?? n, Ol = /* @__PURE__ */ ar({
	name: "RouterView",
	inheritAttrs: !1,
	props: {
		name: {
			type: String,
			default: "default"
		},
		route: Object
	},
	compatConfig: { MODE: 3 },
	setup(e, { attrs: t, slots: n }) {
		let r = Gn(Gc), i = K(() => e.route || r.value), a = Gn(Hc, 0), o = K(() => {
			let e = F(a), { matched: t } = i.value, n;
			for (; (n = t[e]) && !n.components;) e++;
			return e;
		}), s = K(() => i.value.matched[o.value]);
		Wn(Hc, K(() => o.value + 1)), Wn(Vc, s), Wn(Gc, i);
		let c = /* @__PURE__ */ N();
		return L(() => [
			c.value,
			s.value,
			e.name
		], ([e, t, n], [r, i, a]) => {
			t && (t.instances[n] = e, i && i !== t && e && e === r && (t.leaveGuards.size || (t.leaveGuards = i.leaveGuards), t.updateGuards.size || (t.updateGuards = i.updateGuards))), !e || !t || i && hc(t, i) && r || (t.enterCallbacks[n] || []).forEach((t) => t(e));
		}, { flush: "post" }), () => {
			let r = i.value, a = e.name, o = s.value, l = o && o.components[a];
			if (!l) return kl(n.default, {
				Component: l,
				route: r
			});
			let u = o.props[a], d = Ba(l, J({}, u ? u === !0 ? r.params : typeof u == "function" ? u(r) : u : null, t, {
				onVnodeUnmounted: (e) => {
					e.component.isUnmounted && (o.instances[a] = null);
				},
				ref: c
			}));
			return kl(n.default, {
				Component: d,
				route: r
			}) || d;
		};
	}
});
function kl(e, t) {
	if (!e) return null;
	let n = e(t);
	return n.length === 1 ? n[0] : n;
}
var Al = Ol;
function jl(e) {
	let t = fl(e.routes, e), n = e.parseQuery || Rc, r = e.stringifyQuery || zc, i = e.history, a = Kc(), o = Kc(), s = Kc(), c = /* @__PURE__ */ P(bc), l = bc;
	Is && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
	let u = zs.bind(null, (e) => "" + e), d = zs.bind(null, cc), f = zs.bind(null, lc);
	function p(e, n) {
		let r, i;
		return Pc(e) ? (r = t.getRecordMatcher(e), i = n) : i = e, t.addRoute(i, r);
	}
	function m(e) {
		let n = t.getRecordMatcher(e);
		n && t.removeRoute(n);
	}
	function h() {
		return t.getRoutes().map((e) => e.record);
	}
	function g(e) {
		return !!t.getRecordMatcher(e);
	}
	function _(e, a) {
		if (a = J({}, a || c.value), typeof e == "string") {
			let r = fc(n, e, a.path), o = t.resolve({ path: r.path }, a), s = i.createHref(r.fullPath);
			return J(r, o, {
				params: f(o.params),
				hash: lc(r.hash),
				redirectedFrom: void 0,
				href: s
			});
		}
		let o;
		if (e.path != null) o = J({}, e, { path: fc(n, e.path, a.path).path });
		else {
			let t = J({}, e.params);
			for (let e in t) t[e] ?? delete t[e];
			o = J({}, e, { params: d(t) }), a.params = d(a.params);
		}
		let s = t.resolve(o, a), l = e.hash || "";
		s.params = u(f(s.params));
		let p = pc(r, J({}, e, {
			hash: ic(l),
			path: s.path
		})), m = i.createHref(p);
		return J({
			fullPath: p,
			hash: l,
			query: r === zc ? Bc(e.query) : e.query || {}
		}, s, {
			redirectedFrom: void 0,
			href: m
		});
	}
	function v(e) {
		return typeof e == "string" ? fc(n, e, c.value.path) : J({}, e);
	}
	function y(e, t) {
		if (l !== e) return Ic(Y.NAVIGATION_CANCELLED, {
			from: t,
			to: e
		});
	}
	function b(e) {
		return C(e);
	}
	function x(e) {
		return b(J(v(e), { replace: !0 }));
	}
	function S(e, t) {
		let n = e.matched[e.matched.length - 1];
		if (n && n.redirect) {
			let { redirect: r } = n, i = typeof r == "function" ? r(e, t) : r;
			return typeof i == "string" && (i = i.includes("?") || i.includes("#") ? i = v(i) : { path: i }, i.params = {}), J({
				query: e.query,
				hash: e.hash,
				params: i.path == null ? e.params : {}
			}, i);
		}
	}
	function C(e, t) {
		let n = l = _(e), i = c.value, a = e.state, o = e.force, s = e.replace === !0, u = S(n, i);
		if (u) return C(J(v(u), {
			state: typeof u == "object" ? J({}, a, u.state) : a,
			force: o,
			replace: s
		}), t || n);
		let d = n;
		d.redirectedFrom = t;
		let f;
		return !o && mc(r, i, n) && (f = Ic(Y.NAVIGATION_DUPLICATED, {
			to: d,
			from: i
		}), de(i, i, !0, !1)), (f ? Promise.resolve(f) : ne(d, i)).catch((e) => Lc(e) ? Lc(e, Y.NAVIGATION_GUARD_REDIRECT) ? e : ue(e) : ce(e, d, i)).then((e) => {
			if (e) {
				if (Lc(e, Y.NAVIGATION_GUARD_REDIRECT)) return C(J({ replace: s }, v(e.to), {
					state: typeof e.to == "object" ? J({}, a, e.to.state) : a,
					force: o
				}), t || d);
			} else e = ie(d, i, !0, s, a);
			return re(d, i, e), e;
		});
	}
	function ee(e, t) {
		let n = y(e, t);
		return n ? Promise.reject(n) : Promise.resolve();
	}
	function te(e) {
		let t = E.values().next().value;
		return t && typeof t.runWithContext == "function" ? t.runWithContext(e) : e();
	}
	function ne(e, t) {
		let n, [r, i, s] = Yc(e, t);
		n = Jc(r.reverse(), "beforeRouteLeave", e, t);
		for (let i of r) i.leaveGuards.forEach((r) => {
			n.push(qc(r, e, t));
		});
		let c = ee.bind(null, e, t);
		return n.push(c), he(n).then(() => {
			n = [];
			for (let r of a.list()) n.push(qc(r, e, t));
			return n.push(c), he(n);
		}).then(() => {
			n = Jc(i, "beforeRouteUpdate", e, t);
			for (let r of i) r.updateGuards.forEach((r) => {
				n.push(qc(r, e, t));
			});
			return n.push(c), he(n);
		}).then(() => {
			n = [];
			for (let r of s) if (r.beforeEnter) {
				if (Vs(r.beforeEnter)) for (let i of r.beforeEnter) n.push(qc(i, e, t));
				else n.push(qc(r.beforeEnter, e, t));
			}
			return n.push(c), he(n);
		}).then(() => (e.matched.forEach((e) => e.enterCallbacks = {}), n = Jc(s, "beforeRouteEnter", e, t, te), n.push(c), he(n))).then(() => {
			n = [];
			for (let r of o.list()) n.push(qc(r, e, t));
			return n.push(c), he(n);
		}).catch((e) => Lc(e, Y.NAVIGATION_CANCELLED) ? e : Promise.reject(e));
	}
	function re(e, t, n) {
		s.list().forEach((r) => te(() => r(e, t, n)));
	}
	function ie(e, t, n, r, a) {
		let o = y(e, t);
		if (o) return o;
		let s = t === bc, l = Is ? history.state : {};
		n && (r || s ? i.replace(e.fullPath, J({ scroll: s && l && l.scroll }, a)) : i.push(e.fullPath, a)), c.value = e, de(e, t, n, s), ue();
	}
	let w;
	function ae() {
		w ||= i.listen((e, t, n) => {
			if (!me.listening) return;
			let r = _(e), a = S(r, me.currentRoute.value);
			if (a) {
				C(J(a, {
					replace: !0,
					force: !0
				}), r).catch(Bs);
				return;
			}
			l = r;
			let o = c.value;
			Is && jc(kc(o.fullPath, n.delta), Dc()), ne(r, o).catch((e) => Lc(e, Y.NAVIGATION_ABORTED | Y.NAVIGATION_CANCELLED) ? e : Lc(e, Y.NAVIGATION_GUARD_REDIRECT) ? (C(J(v(e.to), { force: !0 }), r).then((e) => {
				Lc(e, Y.NAVIGATION_ABORTED | Y.NAVIGATION_DUPLICATED) && !n.delta && n.type === xc.pop && i.go(-1, !1);
			}).catch(Bs), Promise.reject()) : (n.delta && i.go(-n.delta, !1), ce(e, r, o))).then((e) => {
				e ||= ie(r, o, !1), e && (n.delta && !Lc(e, Y.NAVIGATION_CANCELLED) ? i.go(-n.delta, !1) : n.type === xc.pop && Lc(e, Y.NAVIGATION_ABORTED | Y.NAVIGATION_DUPLICATED) && i.go(-1, !1)), re(r, o, e);
			}).catch(Bs);
		});
	}
	let T = Kc(), oe = Kc(), se;
	function ce(e, t, n) {
		ue(e);
		let r = oe.list();
		return r.length ? r.forEach((r) => r(e, t, n)) : console.error(e), Promise.reject(e);
	}
	function le() {
		return se && c.value !== bc ? Promise.resolve() : new Promise((e, t) => {
			T.add([e, t]);
		});
	}
	function ue(e) {
		return se || (se = !e, ae(), T.list().forEach(([t, n]) => e ? n(e) : t()), T.reset()), e;
	}
	function de(t, n, r, i) {
		let { scrollBehavior: a } = e;
		if (!Is || !a) return Promise.resolve();
		let o = !r && Mc(kc(t.fullPath, 0)) || (i || !r) && history.state && history.state.scroll || null;
		return On().then(() => a(t, n, o)).then((e) => e && Oc(e)).catch((e) => ce(e, t, n));
	}
	let fe = (e) => i.go(e), pe, E = /* @__PURE__ */ new Set(), me = {
		currentRoute: c,
		listening: !0,
		addRoute: p,
		removeRoute: m,
		clearRoutes: t.clearRoutes,
		hasRoute: g,
		getRoutes: h,
		resolve: _,
		options: e,
		push: b,
		replace: x,
		go: fe,
		back: () => fe(-1),
		forward: () => fe(1),
		beforeEach: a.add,
		beforeResolve: o.add,
		afterEach: s.add,
		onError: oe.add,
		isReady: le,
		install(e) {
			e.component("RouterLink", Cl), e.component("RouterView", Al), e.config.globalProperties.$router = me, Object.defineProperty(e.config.globalProperties, "$route", {
				enumerable: !0,
				get: () => F(c)
			}), Is && !pe && c.value === bc && (pe = !0, b(i.location).catch((e) => {}));
			let t = {};
			for (let e in bc) Object.defineProperty(t, e, {
				get: () => c.value[e],
				enumerable: !0
			});
			e.provide(Uc, me), e.provide(Wc, /* @__PURE__ */ Gt(t)), e.provide(Gc, c);
			let n = e.unmount;
			E.add(e), e.unmount = function() {
				E.delete(e), E.size < 1 && (l = bc, w && w(), w = null, c.value = bc, pe = !1, se = !1), n();
			};
		}
	};
	function he(e) {
		return e.reduce((e, t) => e.then(() => te(t)), Promise.resolve());
	}
	return me;
}
function Ml() {
	return Gn(Uc);
}
function Nl(e) {
	return Gn(Wc);
}
var Pl = jl({
	history: Xc(),
	routes: [{
		path: "/:view(.*)*",
		name: "legacy-view",
		component: { render: () => null }
	}]
}), Fl = /* @__PURE__ */ new Set([
	"projects",
	"saved",
	"myideas",
	"myprompts",
	"events",
	"tracks",
	"artists"
]);
function Il(e, t = null) {
	let n = typeof e == "string" && e ? e : "home";
	return n === "producer" && t?.kind === "production" && typeof t.id == "string" && /^[a-zA-Z0-9_-]{1,128}$/.test(t.id) ? "/producer/detail/" + encodeURIComponent(t.id) : n === "tracks" && t?.kind === "track" ? "/account/tracks/detail" : n === "detail" ? "/catalog/detail" : Fl.has(n) ? "/account/" + n : "/" + encodeURIComponent(n);
}
function Ll(e) {
	if (e === "/catalog/detail") return "catalog";
	if (e === "/producer/detail" || e.startsWith("/producer/detail/")) return "producer";
	if (e.startsWith("/account/")) return "account";
	try {
		return decodeURIComponent(e.slice(1)) || "home";
	} catch {
		return "home";
	}
}
var Rl = null, zl = Promise.resolve(), Bl = "replace", Vl = 0, Hl = 0, Ul = [], Wl = [], X = -1, Gl = /* @__PURE__ */ P(0), Kl = /* @__PURE__ */ Kt(Gl);
function ql() {
	Gl.value++;
}
var Jl = /* @__PURE__ */ new Set([
	"overview",
	"ideas",
	"prompts",
	"artists"
]);
function Yl(e) {
	return e?.kind !== "genre" || typeof e.id != "string" || !/^[a-z0-9-]{1,100}$/.test(e.id) || !Jl.has(e.tab) ? null : Object.freeze({
		kind: "genre",
		id: e.id,
		tab: e.tab
	});
}
function Xl(e) {
	return e?.kind !== "track" || typeof e.id != "string" || !/^[a-zA-Z0-9_-]{1,128}$/.test(e.id) ? null : Object.freeze({
		kind: "track",
		id: e.id
	});
}
function Zl(e) {
	return Yl(e) || Xl(e) || (e?.kind === "production" && typeof e.id == "string" && /^[a-zA-Z0-9_-]{1,128}$/.test(e.id) ? Object.freeze({
		kind: "production",
		id: e.id
	}) : null);
}
function Ql(e, t, n = null) {
	let r = Zl(n);
	if (X < 0) Ul = [e], Wl = [r], X = 0;
	else if (t === "push") Ul = Ul.slice(0, X + 1), Wl = Wl.slice(0, X + 1), Ul.push(e), Wl.push(r), X = Ul.length - 1;
	else {
		let t = Ul[X] === e ? Wl[X] : null;
		Ul[X] = e, Wl[X] = r || t || null;
	}
	ql();
}
function $l(e) {
	let t = e === "back" ? -1 : +(e === "forward"), n = X + t;
	return t && n >= 0 && n < Ul.length ? Object.freeze({
		path: Ul[n],
		context: Wl[n] || null,
		index: n,
		offset: t
	}) : null;
}
function eu(e) {
	return $l(e);
}
function tu(e) {
	if (typeof e != "string" || !/^\/[a-z][a-z0-9-]*$/i.test(e)) return null;
	try {
		return decodeURIComponent(e.slice(1));
	} catch {
		return null;
	}
}
function nu(e, { historyMode: t = "replace", context: n = null, source: r = "legacy" } = {}) {
	let i = Zl(n), a = Il(e, i);
	if (a === Rl) return i && (zl = zl.then(() => {
		Pl.currentRoute.value.path === a && X >= 0 && Ul[X] === a && (Wl[X] = i, ql());
	})), zl;
	Rl = a;
	let o = t === "push" ? "push" : "replace";
	return zl = zl.then(async () => {
		Pl.currentRoute.value.path === a ? i && X >= 0 && (Wl[X] = i, ql()) : await Pl[o](a) || (Ql(a, o, i), Bl = o, o === "push" && !i && r === "menu" && Vl++, o === "push" && !i && r === "shortcut" && Hl++);
	}).catch((e) => {
		console.warn("[SUNOBOOM] Vue Router memory navigation failed; legacy routing remains active.", e);
	}), zl;
}
function ru() {
	return zl;
}
function iu(e) {
	let t = zl.then(() => {
		let t = $l(e);
		return t ? new Promise((n) => {
			let r = !1, i = () => {}, a;
			function o(o) {
				r || (r = !0, i(), clearTimeout(a), o && (X = t.index, Rl = t.path, Bl = e, ql()), n(o));
			}
			i = Pl.afterEach((e, n, r) => o(!r && e.path === t.path)), a = setTimeout(() => o(!1), 2500), Pl.go(t.offset);
		}) : !1;
	}).catch((e) => (console.warn("[SUNOBOOM] Vue memory history traversal failed; legacy navigation retained.", e), !1));
	return zl = t.then(() => void 0), t;
}
function au() {
	let e = Pl.currentRoute.value;
	return Object.freeze({
		path: e.path,
		name: e.name,
		active: Ll(e.path),
		transition: Bl,
		menuPushes: Vl,
		shortcutPushes: Hl,
		canGoBack: X > 0,
		canGoForward: X >= 0 && X < Ul.length - 1,
		historyDepth: Ul.length,
		historyPosition: X,
		context: Wl[X] || null
	});
}
// src/vue/navigation/route-state.js
var ou = /* @__PURE__ */ P(Object.freeze({
	route: "home",
	active: "home",
	revision: 0
})), su = /* @__PURE__ */ Kt(ou);
function cu(e, { historyMode: t = "replace", context: n = null, source: r = "legacy" } = {}) {
	let i = typeof e == "string" && e ? e : "home";
	if (nu(i, {
		historyMode: t,
		context: n,
		source: r
	}), i === ou.value.route) return ou.value;
	let a = Object.freeze({
		route: i,
		active: Ps(i),
		revision: ou.value.revision + 1
	});
	return ou.value = a, a;
}
// src/vue/state/appearance-model.js
function lu(e) {
	let t = e?.settings, n = e?.themes, r = e?.pages;
	if (!t || !Array.isArray(n) || !Array.isArray(r)) return null;
	let i = new Set(n.map((e) => e?.id).filter(Boolean)), a = new Set(r.map((e) => e?.id).filter(Boolean)), { theme: o, compact: s, largeText: c, reduceMotion: l, startPage: u } = t, d = e.resolvedTheme;
	return !i.has(o) || !a.has(u) || typeof s != "boolean" || typeof c != "boolean" || typeof l != "boolean" || (o === "system" ? !["light", "dark"].includes(d) : d !== o) ? null : Object.freeze({
		theme: o,
		resolvedTheme: d,
		compact: s,
		largeText: c,
		reduceMotion: l,
		startPage: u
	});
}
// src/vue/state/academy-ui-model.js
var uu = /* @__PURE__ */ new Set([
	"all",
	"",
	"name",
	"family",
	"artist",
	"description"
]), du = /* @__PURE__ */ new Set([
	"overview",
	"ideas",
	"prompts",
	"artists"
]), fu = /^[a-z0-9][a-z0-9-]{0,99}$/;
function pu({ query: e, results: t, total: n, mode: r } = {}) {
	return typeof e != "string" || e.length > 160 || !Number.isSafeInteger(n) || n < 0 || !Number.isSafeInteger(t) || t < 0 || t > n || !uu.has(r) ? null : Object.freeze({
		query: e,
		results: t,
		total: n,
		mode: r
	});
}
function mu(e, t) {
	return typeof e != "string" || !fu.test(e) || !du.has(t) ? null : Object.freeze({
		genreId: e,
		tab: t
	});
}
function hu({ tree: e, selected: t, zoom: n, query: r } = {}) {
	return typeof e != "string" || !fu.test(e) || typeof t != "string" || !fu.test(t) || typeof n != "number" || !Number.isFinite(n) || n < .75 || n > 1.5 || typeof r != "string" || r.length > 160 ? null : Object.freeze({
		tree: e,
		selected: t,
		zoom: n,
		query: r
	});
}
// src/vue/state/production-ui-model.js
var gu = /^[a-z0-9][a-z0-9-]{0,99}$/, _u = (e, t, n) => Number.isSafeInteger(e) && e >= t && e <= n;
function vu(e) {
	let t = e?.settings, n = e?.prompt, r = t?.genre;
	return typeof r != "string" || !gu.test(r) || !_u(t?.tempo, 65, 200) || typeof n != "string" || n.length > 1e3 ? null : Object.freeze({
		ready: !0,
		genreId: r,
		tempo: t.tempo,
		promptLength: n.length
	});
}
function yu(e) {
	let t = e?.rows, n = e?.prompt;
	return !Array.isArray(t) || t.length < 2 || t.length > 4 || !_u(e?.tempo, 65, 200) || typeof n != "string" || n.length > 1e3 || !t.every((e) => typeof e?.id == "string" && gu.test(e.id) && _u(e.weight, 0, 100)) || t.reduce((e, t) => e + t.weight, 0) !== 100 || new Set(t.map((e) => e.id)).size !== t.length ? null : Object.freeze({
		ready: !0,
		genreCount: t.length,
		tempo: e.tempo,
		promptLength: n.length
	});
}
function bu(e) {
	let t = e?.report;
	return !["manual", "studio"].includes(e?.mode) || !_u(t?.score, 0, 100) || !_u(t?.length, 0, 1e5) ? null : Object.freeze({
		ready: !0,
		mode: e.mode,
		score: t.score,
		checkedLength: t.length
	});
}
function xu(e) {
	let t = e?.blocks;
	if (!Array.isArray(t) || t.length > 64 || !t.every((e) => e && [
		2,
		4,
		8,
		12,
		16,
		24,
		32
	].includes(e.bars) && _u(e.energy, 1, 5) && typeof e.hasTransition == "boolean")) return null;
	let n = t.reduce((e, t) => e + t.bars, 0), r = t.reduce((e, t) => e + t.energy, 0);
	return Object.freeze({
		ready: !0,
		blockCount: t.length,
		barCount: n,
		averageEnergy: t.length ? Math.round(r * 10 / t.length) / 10 : 0,
		transitionCount: t.slice(0, -1).filter((e) => e.hasTransition).length
	});
}
// src/vue/state/player-ui-model.js
var Su = (e, t, n) => Number.isSafeInteger(e) && e >= t && e <= n, Cu = (e) => typeof e == "boolean";
function wu(e) {
	return !Su(e?.count, 0, 150) || !Su(e?.currentIndex, -1, e.count - 1) || e.count === 0 && e.currentIndex !== -1 || !Cu(e.playing) || e.playing && e.currentIndex === -1 || !Cu(e.shuffle) || ![
		"off",
		"all",
		"one"
	].includes(e.repeat) ? null : Object.freeze({
		ready: !0,
		queueCount: e.count,
		selectedPosition: e.currentIndex + 1,
		playing: e.playing,
		shuffle: e.shuffle,
		repeat: e.repeat
	});
}
function Tu(e) {
	let t = e?.files?.A?.ready, n = e?.files?.B?.ready;
	return !["player", "compare"].includes(e?.mode) || !["A", "B"].includes(e?.active) || !Cu(e.playing) || !Cu(e.loop) || !Cu(e.hasBoth) || !Cu(t) || !Cu(n) || e.hasBoth !== (t && n) || e.playing && !(e.active === "A" ? t : n) ? null : Object.freeze({
		ready: !0,
		mode: e.mode,
		active: e.active,
		readyCount: Number(t) + Number(n),
		hasBoth: e.hasBoth,
		playing: e.playing,
		loop: e.loop
	});
}
// src/vue/state/workflow-ui-model.js
var Eu = (e) => Number.isSafeInteger(e) && e >= 0 && e <= 1e4, Du = Object.freeze([
	"all",
	"idea",
	"lyrics",
	"generation",
	"selection",
	"mastering",
	"publisher",
	"released"
]);
function Ou(e) {
	let t = e?.records;
	return !Array.isArray(t) || !Eu(t.length) || typeof e.hasRecords != "boolean" || e.hasRecords !== t.length > 0 || !t.every((e) => e && Number.isSafeInteger(e.done) && e.done >= 0 && e.total === 6 && e.done <= e.total && e.percent === Math.round(e.done / e.total * 100)) ? null : Object.freeze({
		ready: !0,
		workCount: t.length,
		finishedCount: t.filter((e) => e.done === e.total).length,
		hasSelection: t.some((t) => typeof t.id == "string" && t.id === e.selectedId)
	});
}
function ku(e) {
	let t = e?.records;
	return !Array.isArray(t) || !Eu(t.length) || typeof e.hasRecords != "boolean" || !Du.includes(e.active) || t.length > 0 && !e.hasRecords || e.active === "all" && e.hasRecords !== t.length > 0 ? null : Object.freeze({
		ready: !0,
		visibleCount: t.length,
		hasRecords: e.hasRecords,
		filter: e.active
	});
}
function Au(e) {
	let t = e?.stages, n = e?.links;
	return e?.total !== 6 || !Number.isSafeInteger(e.done) || e.done < 0 || e.done > 6 || e.percent !== Math.round(e.done / 6 * 100) || !Array.isArray(t) || t.length !== 6 || !t.every((e) => e && [
		"todo",
		"working",
		"done"
	].includes(e.status) && typeof e.hasMaterial == "boolean") || t.filter((e) => e.status === "done").length !== e.done || !Array.isArray(n) || n.length !== 6 || !n.every((e) => e && typeof e.value == "string" && typeof e.available == "boolean") || !Number.isSafeInteger(e.arrangement?.count) || e.arrangement.count < 0 || e.arrangement.count > 1e3 || !Array.isArray(e.history) || e.history.length > 80 ? null : Object.freeze({
		ready: !0,
		done: e.done,
		total: 6,
		percent: e.percent,
		materialCount: t.filter((e) => e.hasMaterial).length,
		linkedCount: n.filter((e) => e.value !== "").length,
		arrangementBlocks: e.arrangement.count,
		historyCount: e.history.length
	});
}
function ju(e) {
	let t = e?.links, n = e?.versions, r = e?.sections;
	return !Array.isArray(e?.facts) || e.facts.length !== 6 || !Array.isArray(t) || t.length !== 3 || !t.every((e) => e && typeof e.exists == "boolean") || !Array.isArray(n) || n.length > 1e3 || !Array.isArray(r) || r.length > 4 || typeof e.audio != "string" || typeof e.cover != "string" ? null : Object.freeze({
		ready: !0,
		versionCount: n.length,
		linkedCount: t.filter((e) => e.exists).length,
		sectionCount: r.length,
		hasAudio: !!e.audio,
		hasCover: !!e.cover
	});
}
// src/vue/state/song-ui-model.js
var Mu = (e, t = 1e4) => Number.isSafeInteger(e) && e >= 0 && e <= t, Nu = (e) => typeof e == "boolean";
function Pu(e) {
	let t = e?.items;
	return !Mu(e?.total) || !Array.isArray(t) || !Mu(t.length) || t.length > e.total || !t.every((e) => e && Nu(e.hasCover)) ? null : Object.freeze({
		ready: !0,
		totalCount: e.total,
		visibleCount: t.length,
		localCoverCount: t.filter((e) => e.hasCover).length
	});
}
function Fu(e) {
	let t = e?.versions;
	return !Array.isArray(t) || !Mu(t.length, 1e3) || !Nu(e.hasAudio) || !Nu(e.hasCover) || !Nu(e.hasPlayableAudio) || !Nu(e.compareOpen) || e.compareOpen && t.length < 2 || !t.every((e) => e && Nu(e.isMain) && Nu(e.isPlaying)) || t.filter((e) => e.isMain).length > 1 || t.filter((e) => e.isPlaying).length > 1 ? null : Object.freeze({
		ready: !0,
		versionCount: t.length,
		hasPrimary: t.some((e) => e.isMain),
		hasLocalAudio: e.hasAudio,
		canPlay: e.hasPlayableAudio,
		hasCover: e.hasCover,
		comparisonAvailable: t.length >= 2,
		comparisonOpen: e.compareOpen
	});
}
// src/vue/state/artist-ui-model.js
var Iu = (e, t = 1e4) => Number.isSafeInteger(e) && e >= 0 && e <= t;
function Lu(e, t) {
	return !Array.isArray(e?.artists) || !Iu(e.artists.length) || !Iu(t) || t > e.artists.length || !Iu(e.dnaCount) ? null : Object.freeze({
		ready: !0,
		artistCount: e.artists.length,
		visibleCount: t,
		dnaCount: e.dnaCount
	});
}
function Ru(e) {
	let t = e?.profiles, n = e?.detail;
	return !Array.isArray(t) || !Iu(t.length) || n !== null && (!n || typeof n != "object") || n !== null && (!Array.isArray(n.related) || !Iu(n.related.length) || !Array.isArray(n.forbids) || !Iu(n.forbids.length, 32) || !Array.isArray(n.facts) || !Iu(n.facts.length, 32) || !Array.isArray(n.textFields) || !Iu(n.textFields.length, 32)) ? null : Object.freeze({
		ready: !0,
		profileCount: t.length,
		detailOpen: n !== null,
		linkedTrackCount: n?.related.length ?? 0,
		restrictionsCount: n?.forbids.length ?? 0,
		factCount: n?.facts.length ?? 0,
		sectionCount: n?.textFields.length ?? 0
	});
}
// src/vue/state/library-ui-model.js
var zu = (e) => Number.isSafeInteger(e) && e >= 0 && e <= 1e4, Bu = Object.freeze([
	"genres",
	"ideas",
	"own",
	"generated",
	"prompts"
]);
function Vu(e) {
	if (!e || !Bu.every((t) => Array.isArray(e[t]) && zu(e[t].length) && e[t].every((e) => typeof e == "object" && !!e))) return null;
	let t = e.genres.length, n = e.ideas.length, r = e.own.length, i = e.generated.length, a = e.prompts.length;
	return Object.freeze({
		ready: !0,
		genreCount: t,
		academyIdeaCount: n,
		ownIdeaCount: r,
		generatedIdeaCount: i,
		promptCount: a,
		totalIdeaCount: n + r + i
	});
}
// src/vue/state/editor-ui-model.js
var Hu = (e, t) => typeof e == "string" && e.length <= t;
function Uu(e) {
	return !e || !Hu(e.title, 100) || !Hu(e.genre, 128) || !Hu(e.text, 3e3) || !Hu(e.hook, 240) ? null : Object.freeze({
		ready: !0,
		titleLength: e.title.length,
		ideaLength: e.text.length,
		hookLength: e.hook.length,
		hasTitle: !!e.title.trim(),
		hasGenre: !!e.genre.trim(),
		hasIdea: !!e.text.trim(),
		hasHook: !!e.hook.trim()
	});
}
function Wu(e, t) {
	return !e || typeof t != "boolean" || !Hu(e.title, 100) || !Hu(e.genre, 128) || !Hu(e.text, 1e3) ? null : Object.freeze({
		ready: !0,
		editing: t,
		titleLength: e.title.length,
		textLength: e.text.length,
		hasTitle: !!e.title.trim(),
		hasGenre: !!e.genre.trim(),
		hasPrompt: !!e.text.trim()
	});
}
// src/vue/state/poetry-ui-model.js
function Gu(e) {
	if (typeof e != "string" || e.length > 2e4) return null;
	let t = e.split(/\r\n?|\n/u).filter((e) => e.trim()).length, n = (e.match(/[\p{L}\p{M}\p{N}]+(?:[-’'][\p{L}\p{M}\p{N}]+)*/gu) || []).length;
	return Object.freeze({
		ready: !0,
		charCount: e.length,
		lineCount: t,
		wordCount: n,
		hasText: !!e.trim()
	});
}
function Ku(e) {
	if (!e || typeof e != "object" || typeof e.analyzed != "boolean") return null;
	if (!e.analyzed) return Object.freeze({
		ready: !0,
		analyzed: !1,
		rowCount: 0,
		previewStanzaCount: 0,
		stressMarkCount: 0,
		suggestionCount: 0
	});
	let t = (e) => Number.isSafeInteger(e) && e >= 0 && e <= 2e4;
	return !t(e.rowCount) || e.rowCount === 0 || !t(e.markedStress) || !Array.isArray(e.stanzas) || e.stanzas.length > 18 || !Array.isArray(e.suggestions) || e.suggestions.length > 6 || e.stanzas.some((e) => !e || typeof e != "object") || e.suggestions.some((e) => typeof e != "string") ? null : Object.freeze({
		ready: !0,
		analyzed: !0,
		rowCount: e.rowCount,
		previewStanzaCount: e.stanzas.length,
		stressMarkCount: e.markedStress,
		suggestionCount: e.suggestions.length
	});
}
function qu(e) {
	if (!e || typeof e != "object" || !Number.isSafeInteger(e.count) || e.count < 0 || e.count > 2e4 || !Number.isSafeInteger(e.total) || e.total < 0 || e.total > e.count || !Array.isArray(e.words) || e.words.length > 30 || e.words.length !== Math.min(e.total, 30)) return null;
	let t = 0;
	for (let n of e.words) {
		if (!n || typeof n.key != "string" || !n.key.length || n.key.length > 128 || !Number.isSafeInteger(n.count) || n.count < 1 || n.count > e.count || !Array.isArray(n.variants) || n.variants.length > 16) return null;
		t += n.count;
	}
	return t > e.count || e.count === 0 != (e.total === 0) ? null : Object.freeze({
		ready: !0,
		occurrenceCount: e.count,
		distinctCount: e.total,
		visibleCount: e.words.length
	});
}
// src/vue/state/performance-tags-ui-model.js
var Ju = /* @__PURE__ */ new Set([
	"smart",
	"rules",
	"manual"
]), Yu = /* @__PURE__ */ new Set([
	"auto",
	"original",
	"tagged"
]), Xu = /* @__PURE__ */ new Set([
	"minimal",
	"balanced",
	"detailed"
]), Zu = [
	"melisma",
	"falsetto",
	"harmonies",
	"noWhisper",
	"noRasp"
];
function Qu(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) return null;
	let t = e.prefs;
	if (!t || typeof t != "object" || Array.isArray(t) || !Ju.has(t.mode) || !Yu.has(t.source) || !Xu.has(t.density) || !Number.isSafeInteger(t.intensity) || t.intensity < 1 || t.intensity > 5 || Zu.some((e) => typeof t[e] != "boolean") || typeof e.busy != "boolean") return null;
	let n = e.draft;
	if (n !== null && (typeof n != "object" || Array.isArray(n) || !Array.isArray(n.sections) || n.sections.length > 2e4)) return null;
	let r = e.freshness;
	return !r || typeof r != "object" || Array.isArray(r) || [
		"previewFresh",
		"sourceChanged",
		"targetChanged",
		"settingsChanged"
	].some((e) => typeof r[e] != "boolean") || n === null && (r.sourceChanged || r.targetChanged || r.settingsChanged) || r.previewFresh !== (n !== null && !r.sourceChanged && !r.targetChanged && !r.settingsChanged) ? null : Object.freeze({
		ready: !0,
		mode: t.mode,
		source: t.source,
		density: t.density,
		intensity: t.intensity,
		enabledTechniques: Number(t.melisma) + Number(t.falsetto) + Number(t.harmonies),
		vocalRestrictions: Number(t.noWhisper) + Number(t.noRasp),
		busy: e.busy,
		previewOpen: n !== null,
		sectionCount: n ? n.sections.length : 0,
		previewFresh: r.previewFresh,
		sourceChanged: r.sourceChanged,
		targetChanged: r.targetChanged,
		settingsChanged: r.settingsChanged
	});
}
// src/vue/state/legacy-ui-store.js
var $u = Object.freeze([]), ed = Object.freeze({
	ideaCount: 0,
	promptCount: 0,
	eventCount: 0,
	revision: 0
}), td = (e) => Number.isSafeInteger(e) && e >= 0 ? e : 0, Z = Ms("sunoboom-legacy-ui", () => {
	let e = su, t = /* @__PURE__ */ P($u), n = /* @__PURE__ */ P(ed), r = /* @__PURE__ */ P(Object.freeze({
		theme: "dark",
		resolvedTheme: "dark",
		compact: !1,
		largeText: !1,
		reduceMotion: !1,
		startPage: "home",
		revision: 0
	})), i = /* @__PURE__ */ P(Object.freeze({
		query: "",
		results: 0,
		total: 0,
		mode: "",
		revision: 0
	})), a = /* @__PURE__ */ P(Object.freeze({
		genreId: null,
		tab: "overview",
		revision: 0
	})), o = /* @__PURE__ */ P(Object.freeze({
		tree: "ska",
		selected: null,
		zoom: 1,
		query: "",
		revision: 0
	}));
	function s(e) {
		let t = pu(e);
		if (!t) return !1;
		let n = i.value;
		return n.query === t.query && n.results === t.results && n.total === t.total && n.mode === t.mode ? !1 : (i.value = Object.freeze({
			...t,
			revision: n.revision + 1
		}), !0);
	}
	function c(e, t) {
		let n = mu(e, t);
		if (!n) return !1;
		let r = a.value;
		return r.genreId === n.genreId && r.tab === n.tab ? !1 : (a.value = Object.freeze({
			...n,
			revision: r.revision + 1
		}), !0);
	}
	function l(e) {
		let t = hu(e);
		if (!t) return !1;
		let n = o.value;
		return n.tree === t.tree && n.selected === t.selected && n.zoom === t.zoom && n.query === t.query ? !1 : (o.value = Object.freeze({
			...t,
			revision: n.revision + 1
		}), !0);
	}
	let u = /* @__PURE__ */ P(Object.freeze({
		ready: !1,
		genreId: null,
		tempo: 0,
		promptLength: 0,
		revision: 0
	})), d = /* @__PURE__ */ P(Object.freeze({
		ready: !1,
		genreCount: 0,
		tempo: 0,
		promptLength: 0,
		revision: 0
	})), f = /* @__PURE__ */ P(Object.freeze({
		ready: !1,
		mode: "studio",
		score: 0,
		checkedLength: 0,
		revision: 0
	})), p = /* @__PURE__ */ P(Object.freeze({
		ready: !1,
		blockCount: 0,
		barCount: 0,
		averageEnergy: 0,
		transitionCount: 0,
		revision: 0
	})), m = /* @__PURE__ */ P(Object.freeze({
		ready: !1,
		queueCount: 0,
		selectedPosition: 0,
		playing: !1,
		shuffle: !1,
		repeat: "off",
		revision: 0
	})), h = /* @__PURE__ */ P(Object.freeze({
		ready: !1,
		mode: "player",
		active: "A",
		readyCount: 0,
		hasBoth: !1,
		playing: !1,
		loop: !1,
		revision: 0
	})), g = /* @__PURE__ */ P(Object.freeze({
		ready: !1,
		workCount: 0,
		finishedCount: 0,
		hasSelection: !1,
		revision: 0
	})), _ = /* @__PURE__ */ P(Object.freeze({
		ready: !1,
		visibleCount: 0,
		hasRecords: !1,
		filter: "all",
		revision: 0
	})), v = /* @__PURE__ */ P(Object.freeze({
		ready: !1,
		done: 0,
		total: 6,
		percent: 0,
		materialCount: 0,
		linkedCount: 0,
		arrangementBlocks: 0,
		historyCount: 0,
		revision: 0
	})), y = /* @__PURE__ */ P(Object.freeze({
		ready: !1,
		versionCount: 0,
		linkedCount: 0,
		sectionCount: 0,
		hasAudio: !1,
		hasCover: !1,
		revision: 0
	})), b = /* @__PURE__ */ P(Object.freeze({
		ready: !1,
		totalCount: 0,
		visibleCount: 0,
		localCoverCount: 0,
		revision: 0
	})), x = /* @__PURE__ */ P(Object.freeze({
		ready: !1,
		versionCount: 0,
		hasPrimary: !1,
		hasLocalAudio: !1,
		canPlay: !1,
		hasCover: !1,
		comparisonAvailable: !1,
		comparisonOpen: !1,
		revision: 0
	})), S = /* @__PURE__ */ P(Object.freeze({
		ready: !1,
		artistCount: 0,
		visibleCount: 0,
		dnaCount: 0,
		revision: 0
	})), C = /* @__PURE__ */ P(Object.freeze({
		ready: !1,
		profileCount: 0,
		detailOpen: !1,
		linkedTrackCount: 0,
		restrictionsCount: 0,
		factCount: 0,
		sectionCount: 0,
		revision: 0
	})), ee = /* @__PURE__ */ P(Object.freeze({
		ready: !1,
		genreCount: 0,
		academyIdeaCount: 0,
		ownIdeaCount: 0,
		generatedIdeaCount: 0,
		promptCount: 0,
		totalIdeaCount: 0,
		revision: 0
	})), te = /* @__PURE__ */ P(Object.freeze({
		ready: !1,
		titleLength: 0,
		ideaLength: 0,
		hookLength: 0,
		hasTitle: !1,
		hasGenre: !1,
		hasIdea: !1,
		hasHook: !1,
		revision: 0
	})), ne = /* @__PURE__ */ P(Object.freeze({
		ready: !1,
		editing: !1,
		titleLength: 0,
		textLength: 0,
		hasTitle: !1,
		hasGenre: !1,
		hasPrompt: !1,
		revision: 0
	})), re = /* @__PURE__ */ P(Object.freeze({
		ready: !1,
		charCount: 0,
		lineCount: 0,
		wordCount: 0,
		hasText: !1,
		revision: 0
	})), ie = /* @__PURE__ */ P(Object.freeze({
		ready: !1,
		analyzed: !1,
		rowCount: 0,
		previewStanzaCount: 0,
		stressMarkCount: 0,
		suggestionCount: 0,
		revision: 0
	})), w = /* @__PURE__ */ P(Object.freeze({
		ready: !1,
		occurrenceCount: 0,
		distinctCount: 0,
		visibleCount: 0,
		revision: 0
	})), ae = /* @__PURE__ */ P(Object.freeze({
		ready: !1,
		mode: "smart",
		source: "auto",
		density: "balanced",
		intensity: 3,
		enabledTechniques: 3,
		vocalRestrictions: 2,
		busy: !1,
		previewOpen: !1,
		sectionCount: 0,
		revision: 0,
		previewFresh: !1,
		sourceChanged: !1,
		targetChanged: !1,
		settingsChanged: !1
	}));
	function T(e, t, n) {
		let r = t(n);
		if (!r) return !1;
		let i = e.value;
		return !Object.keys(r).every((e) => i[e] === r[e]) && (e.value = Object.freeze({
			...r,
			revision: i.revision + 1
		}), !0);
	}
	let oe = (e) => T(u, vu, e), se = (e) => T(d, yu, e), ce = (e) => T(f, bu, e), le = (e) => T(p, xu, e), ue = (e) => T(m, wu, e), de = (e) => T(h, Tu, e), fe = (e) => T(g, Ou, e), pe = (e) => T(_, ku, e), E = (e) => T(v, Au, e), me = (e) => T(y, ju, e), he = (e) => T(b, Pu, e), ge = (e) => T(x, Fu, e), _e = (e, t) => T(S, (e) => Lu(e, t), e), D = (e) => T(C, Ru, e), ve = (e) => T(ee, Vu, e), ye = (e) => T(te, Uu, e), be = (e, t) => T(ne, (e) => Wu(e, t), e), xe = (e) => T(re, Gu, e), Se = (e) => T(ie, Ku, e), Ce = (e) => T(w, qu, e);
	function we() {
		let e = w.value;
		return e.ready ? (w.value = Object.freeze({
			ready: !1,
			occurrenceCount: 0,
			distinctCount: 0,
			visibleCount: 0,
			revision: e.revision + 1
		}), !0) : !1;
	}
	let Te = (e) => T(ae, Qu, e);
	function Ee() {
		let e = ae.value;
		return e.ready ? (ae.value = Object.freeze({
			ready: !1,
			mode: "smart",
			source: "auto",
			density: "balanced",
			intensity: 3,
			enabledTechniques: 3,
			vocalRestrictions: 2,
			busy: !1,
			previewOpen: !1,
			sectionCount: 0,
			previewFresh: !1,
			sourceChanged: !1,
			targetChanged: !1,
			settingsChanged: !1,
			revision: e.revision + 1
		}), !0) : !1;
	}
	function De(e) {
		if (!Array.isArray(e)) return !1;
		let n = Object.freeze(e.filter((e) => e && typeof e.id == "string" && e.id).map((e) => Object.freeze({
			id: e.id,
			label: e.label,
			shortLabel: e.shortLabel,
			iconHtml: e.iconHtml
		}))), r = t.value;
		return r.length === n.length && r.every((e, t) => e.id === n[t].id && e.label === n[t].label && e.shortLabel === n[t].shortLabel && e.iconHtml === n[t].iconHtml) ? !1 : (t.value = n, !0);
	}
	function O(e) {
		if (!e || typeof e != "object") return !1;
		let t = {
			ideaCount: td(e.ideaCount),
			promptCount: td(e.promptCount),
			eventCount: td(e.eventCount)
		}, r = n.value;
		return r.ideaCount === t.ideaCount && r.promptCount === t.promptCount && r.eventCount === t.eventCount ? !1 : (n.value = Object.freeze({
			...t,
			revision: r.revision + 1
		}), !0);
	}
	function Oe(e) {
		let t = lu(e);
		if (!t) return !1;
		let n = r.value;
		return n.theme === t.theme && n.resolvedTheme === t.resolvedTheme && n.compact === t.compact && n.largeText === t.largeText && n.reduceMotion === t.reduceMotion && n.startPage === t.startPage ? !1 : (r.value = Object.freeze({
			...t,
			revision: n.revision + 1
		}), !0);
	}
	return {
		route: e,
		navigationItems: t,
		dashboardStats: n,
		appearance: r,
		academyCatalog: i,
		academyFocus: a,
		academyTree: o,
		studioSummary: u,
		mixerSummary: d,
		auditorSummary: f,
		arrangerSummary: p,
		playerLabSummary: m,
		playerAbSummary: h,
		masterListSummary: g,
		passportListSummary: _,
		masterDetailSummary: v,
		passportDetailSummary: y,
		songCollectionSummary: b,
		songDetailSummary: x,
		artistManagerSummary: S,
		artistDnaSummary: C,
		librarySummary: ee,
		ideaDraftSummary: te,
		promptDraftSummary: ne,
		poetrySourceSummary: re,
		poetryAnalysisSummary: ie,
		poetryAmbiguitySummary: w,
		performanceTagsSummary: ae,
		publishNavigation: De,
		publishDashboardStats: O,
		publishAppearance: Oe,
		publishAcademyCatalog: s,
		publishAcademyFocus: c,
		publishAcademyTree: l,
		publishStudioSummary: oe,
		publishMixerSummary: se,
		publishAuditorSummary: ce,
		publishArrangerSummary: le,
		publishPlayerLabSummary: ue,
		publishPlayerAbSummary: de,
		publishMasterListSummary: fe,
		publishPassportListSummary: pe,
		publishMasterDetailSummary: E,
		publishPassportDetailSummary: me,
		publishSongCollectionSummary: he,
		publishSongDetailSummary: ge,
		publishArtistManagerSummary: _e,
		publishArtistDnaSummary: D,
		publishLibrarySummary: ve,
		publishIdeaDraftSummary: ye,
		publishPromptDraftSummary: be,
		publishPoetrySourceSummary: xe,
		publishPoetryAnalysisSummary: Se,
		publishPoetryAmbiguitySummary: Ce,
		clearPoetryAmbiguitySummary: we,
		publishPerformanceTagsSummary: Te,
		clearPerformanceTagsSummary: Ee
	};
}), nd = {
	key: 0,
	class: "sub",
	"data-sb-vue-idea-library-recap": ""
}, rd = { class: "section-title" }, id = {
	key: 0,
	class: "btn ghost small",
	"data-action": "nav",
	"data-nav": "ideas"
}, ad = ["data-idea-collection"], od = { class: "idea-badge" }, sd = {
	key: 0,
	class: "generator-story"
}, cd = {
	key: 1,
	class: "song-has-lyrics"
}, ld = { key: 0 }, ud = {
	key: 3,
	class: "generator-detail"
}, dd = { class: "actions" }, fd = [
	"data-action",
	"data-id",
	"data-i",
	"aria-label"
], pd = ["innerHTML"], md = {
	key: 1,
	class: "empty"
}, hd = ["innerHTML"], gd = {
	__name: "IdeaCollections",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = Z();
		return (n, r) => (V(), H(B, null, [F(t).librarySummary.ready ? (V(), H("p", nd, " Последний просмотр библиотеки: " + O(F(t).librarySummary.totalIdeaCount) + " идей ", 1)) : G("", !0), (V(!0), H(B, null, z(e.model.groups, (t) => (V(), H(B, { key: t.kind }, [U("div", rd, [U("h2", null, O(t.title) + " (" + O(t.items.length) + ")", 1), t.kind === "generated" ? (V(), H("button", id, "Создать идеи →")) : G("", !0)]), t.items.length ? (V(), H("div", {
			key: 0,
			class: "idea-grid",
			"data-idea-collection": t.kind
		}, [(V(!0), H(B, null, z(t.items, (n) => (V(), ra(Ar(t.kind === "academy" ? "div" : "article"), {
			key: n.key,
			class: D(["idea", { "generated-card": t.kind === "generated" }])
		}, {
			default: Hn(() => [
				U("div", od, O(n.badge), 1),
				U("h3", null, O(n.title), 1),
				U("p", null, O(n.pitch), 1),
				t.kind === "generated" ? (V(), H("p", sd, O(n.storyLine), 1)) : G("", !0),
				t.kind === "manual" && n.lyrics ? (V(), H("p", cd, "🎼 Текст песни сохранён · " + O(n.sunoLyrics ? "теги для Suno готовы" : "без разметки"), 1)) : G("", !0),
				n.hook || t.kind === "generated" ? (V(), ra(Ar(t.kind === "generated" ? "div" : "p"), {
					key: 2,
					class: "generator-hook"
				}, {
					default: Hn(() => [t.kind === "generated" ? (V(), H("span", ld, "ХУК ПРИПЕВА")) : G("", !0), U("strong", null, O(n.hook), 1)]),
					_: 2
				}, 1024)) : G("", !0),
				t.kind === "generated" && n.detail ? (V(), H("p", ud, "Твоя деталь: " + O(n.detail), 1)) : G("", !0),
				U("div", dd, [(V(!0), H(B, null, z(n.actions, (t) => (V(), H("button", {
					key: t.name,
					type: "button",
					class: D(t.className),
					"data-action": t.name,
					"data-id": n.id,
					"data-i": n.index,
					"aria-label": t.label || void 0
				}, [t.icon ? (V(), H("span", {
					key: 0,
					"aria-hidden": "true",
					innerHTML: e.model.icons[t.icon]
				}, null, 8, pd)) : G("", !0), W(O(t.text), 1)], 10, fd))), 128))])
			]),
			_: 2
		}, 1032, ["class"]))), 128))], 8, ad)) : (V(), H("div", md, [
			U("span", {
				"aria-hidden": "true",
				innerHTML: e.model.icons.music
			}, null, 8, hd),
			U("strong", null, O(t.emptyTitle), 1),
			W(O(t.emptyText), 1)
		]))], 64))), 128))], 64));
	}
};
// src/vue/legacy/observeLegacyIsland.js
function Q({ root: e, selectTarget: t, readSnapshot: n, mount: r, subscribe: i, createObserver: a = (e) => new MutationObserver(e) }) {
	if (!e || typeof t != "function" || typeof n != "function" || typeof r != "function") return () => {};
	let o = !1, s = null;
	function c() {
		let e = s;
		s = null, e && e.unmount();
	}
	function l() {
		if (o) return;
		let i = t(e);
		if (s?.target === i && i?.isConnected || (c(), !i?.isConnected)) return;
		let a = n(i);
		if (!a) return;
		let l = r(i, a);
		typeof l == "function" && (s = {
			target: i,
			unmount: l
		});
	}
	let u = a(l);
	u.observe(e, { childList: !0 });
	let d = typeof i == "function" ? i(l) : null;
	return l(), () => {
		o || (o = !0, u.disconnect(), typeof d == "function" && d(), c());
	};
}
// src/vue/poetry/legacyIdeaCollectionsBridge.js
function _d({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_IDEA_COLLECTIONS, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Q({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-idea-collections"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, gd, { model: n })
	});
}
// src/vue/version-history/version-model.js
function vd(e) {
	return /^\d{4}-\d{2}-\d{2}$/.test(String(e || "")) ? e.slice(8, 10) + "." + e.slice(5, 7) + "." + e.slice(0, 4) : "";
}
var yd = (e) => String(e ?? "").trim().normalize("NFKC").toLocaleLowerCase("ru"), bd = (e, t) => yd(e).includes(t);
function xd(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = /^(\d+)\.(\d+)$/.exec(String(n?.[0] || ""))?.[1];
		e !== void 0 && (t.has(e) || t.set(e, []), t.get(e).push(n));
	}
	return [...t].map(([e, t]) => ({
		major: e,
		items: t
	}));
}
function Sd(e, { tab: t = "major", size: n = "all", search: r = "" } = {}) {
	let i = Array.isArray(e) ? e : [], a = xd(i), o = yd(r);
	if (o) {
		let e = a.filter((e) => o === "v" + e.major || o === e.major || bd("мажорная версия " + e.major, o)), t = i.filter((e) => bd("v" + e[0] + " " + e[0] + " " + e[1] + " " + vd(e[2]), o));
		return {
			mode: "search",
			majors: e,
			large: t.filter((e) => e[3] === "large"),
			small: t.filter((e) => e[3] === "small"),
			count: "Найдено: " + (e.length + t.length),
			legend: "Глобальный поиск: результаты из всех вкладок. Очисти поиск, чтобы вернуться к выбранному разделу."
		};
	}
	if (t === "major") return {
		mode: "major",
		majors: a,
		count: a.length + " из " + a.length + " мажорных версий",
		legend: "Мажорная версия — первое число до точки. Сейчас SUNOBOOM развивается в ветке v0."
	};
	let s = n === "all" ? i : i.filter((e) => e[3] === n);
	return {
		mode: "minor",
		entries: s,
		count: s.length + " из " + s.length + " обновлений",
		legend: n === "all" ? "Все минорные обновления в одном списке — от новейших к самым ранним." : n === "large" ? "Крупные обновления — новые разделы, инструменты и значимые возможности внутри версии 0.x." : "Мелкие обновления — улучшения интерфейса, уточнения, небольшие функции и исправления."
	};
}
// \0plugin-vue:export-helper
var Cd = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, wd = {
	class: "sb-vh-vue-layout",
	"data-sb-vue-version-history": ""
}, Td = { class: "sb-vh-header" }, Ed = [
	"aria-selected",
	"tabindex",
	"onClick"
], Dd = [
	"aria-selected",
	"tabindex",
	"onClick"
], Od = {
	id: "sb-vh-legend",
	class: "sb-vh-legend"
}, kd = { class: "sb-vh-controls" }, Ad = {
	class: "sb-vh-search-label",
	for: "sb-vue-vh-search"
}, jd = {
	id: "sb-vh-subcount",
	class: "sb-vh-count",
	role: "status"
}, Md = {
	key: 0,
	class: "sb-vh-search-all"
}, Nd = {
	key: 0,
	class: "sb-vh-search-group"
}, Pd = { class: "sb-vh-release-no" }, Fd = { class: "sb-vh-release-text" }, Id = { class: "sb-vh-version-range" }, Ld = { class: "sb-vh-release-list" }, Rd = { class: "sb-vh-release-no" }, zd = { class: "sb-vh-release-text" }, Bd = { class: "sb-vh-search-meta" }, Vd = ["datetime"], Hd = { class: "sb-vh-search-tag" }, Ud = {
	key: 1,
	class: "sb-vh-empty"
}, Wd = {
	key: 2,
	class: "sb-vh-release-list sb-vh-major-list"
}, Gd = { class: "sb-vh-release-no" }, Kd = { class: "sb-vh-release-text" }, qd = { class: "sb-vh-version-range" }, Jd = {
	key: 3,
	class: "sb-vh-release-list"
}, Yd = { class: "sb-vh-release-no" }, Xd = { class: "sb-vh-release-text" }, Zd = { class: "sb-vh-search-meta" }, Qd = ["datetime"], $d = {
	key: 0,
	class: "sb-vh-search-tag"
}, ef = {
	key: 4,
	class: "sb-vh-empty"
}, tf = /*#__PURE__*/ Cd({
	__name: "VersionHistory",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ N("major"), r = /* @__PURE__ */ N("all"), i = /* @__PURE__ */ N(""), a = K(() => Sd(t.model.releases, {
			tab: n.value,
			size: r.value,
			search: i.value
		})), o = /* @__PURE__ */ N(null), s = /* @__PURE__ */ N(null), c = K(() => !!i.value.trim());
		function l() {
			o.value?.scrollTo({
				top: 0,
				behavior: "instant"
			});
		}
		function u(e) {
			n.value = e, l();
		}
		function d(e) {
			r.value = e, l();
		}
		function f() {
			i.value = "", n.value = "minor", r.value = "all", l();
		}
		function p(e, t, n, r) {
			let i = t.indexOf(n), a = i;
			if (e.key === "ArrowRight") a = (i + 1) % t.length;
			else if (e.key === "ArrowLeft") a = (i + t.length - 1) % t.length;
			else if (e.key === "Home") a = 0;
			else if (e.key === "End") a = t.length - 1;
			else return;
			e.preventDefault(), r(t[a]), On(() => {
				let e = t.length === 2 ? "#sb-vh-tabs [aria-selected=\"true\"]" : "#sb-vh-minor-tabs [aria-selected=\"true\"]";
				document.querySelector(e)?.focus();
			});
		}
		return R(() => On(() => s.value?.focus({ preventScroll: !0 }))), (t, m) => (V(), H("div", wd, [
			U("header", Td, [U("div", null, [
				m[6] ||= U("div", { class: "sb-vh-kicker" }, "SUNOBOOM · РАЗВИТИЕ ПРОЕКТА", -1),
				m[7] ||= U("h2", { id: "sb-vh-title" }, "История версий", -1),
				U("p", null, [
					m[4] ||= W("Текущая версия ", -1),
					U("strong", null, "v" + O(e.model.currentVersion), 1),
					m[5] ||= W(". Версии сгруппированы по номеру.", -1)
				])
			]), U("button", {
				ref_key: "closeButton",
				ref: s,
				type: "button",
				class: "sb-vh-close",
				"aria-label": "Закрыть историю версий",
				onClick: m[0] ||= (t) => e.model.close()
			}, "×", 512)]),
			U("div", {
				id: "sb-vh-tabs",
				class: "sb-vh-tabs",
				role: "tablist",
				"aria-label": "Части номера версии",
				onKeydown: m[1] ||= (e) => p(e, ["major", "minor"], n.value, u)
			}, [(V(), H(B, null, z([{
				id: "major",
				label: "Мажорная версия"
			}, {
				id: "minor",
				label: "Минорные версии"
			}], (e) => U("button", {
				key: e.id,
				type: "button",
				class: D(["sb-vh-tab", { active: n.value === e.id }]),
				role: "tab",
				"aria-selected": n.value === e.id,
				tabindex: n.value === e.id ? 0 : -1,
				"aria-controls": "sb-vh-content",
				onClick: (t) => u(e.id)
			}, O(e.label), 11, Ed)), 64))], 32),
			n.value === "minor" && !c.value ? (V(), H("div", {
				key: 0,
				id: "sb-vh-minor-tabs",
				class: "sb-vh-minor-tabs",
				role: "tablist",
				"aria-label": "Масштаб минорных обновлений",
				onKeydown: m[2] ||= (e) => p(e, [
					"all",
					"large",
					"small"
				], r.value, d)
			}, [(V(), H(B, null, z([
				{
					id: "all",
					label: "Все обновления"
				},
				{
					id: "large",
					label: "Крупные обновления"
				},
				{
					id: "small",
					label: "Мелкие обновления"
				}
			], (e) => U("button", {
				key: e.id,
				type: "button",
				class: D(["sb-vh-size-tab", { active: r.value === e.id }]),
				role: "tab",
				"aria-selected": r.value === e.id,
				tabindex: r.value === e.id ? 0 : -1,
				"aria-controls": "sb-vh-content",
				onClick: (t) => d(e.id)
			}, O(e.label), 11, Dd)), 64))], 32)) : G("", !0),
			U("p", Od, O(a.value.legend), 1),
			U("div", kd, [U("label", Ad, [m[8] ||= U("span", { class: "sb-vh-visually-hidden" }, "Поиск по истории версий", -1), I(U("input", {
				id: "sb-vue-vh-search",
				"onUpdate:modelValue": m[3] ||= (e) => i.value = e,
				type: "search",
				autocomplete: "off",
				placeholder: "Поиск по всем версиям и вкладкам…",
				onInput: l
			}, null, 544), [[q, i.value]])]), U("span", jd, O(a.value.count), 1)]),
			U("div", {
				id: "sb-vh-content",
				ref_key: "content",
				ref: o,
				class: "sb-vh-content",
				role: "tabpanel",
				"aria-labelledby": "sb-vh-tabs"
			}, [a.value.mode === "search" && (a.value.majors.length || a.value.large.length || a.value.small.length) ? (V(), H("div", Md, [a.value.majors.length ? (V(), H("section", Nd, [U("h3", null, [m[9] ||= W("Мажорные версии ", -1), U("span", null, O(a.value.majors.length), 1)]), (V(!0), H(B, null, z(a.value.majors, (e) => (V(), H("article", {
				key: "major-" + e.major,
				class: "sb-vh-release sb-vh-major-release"
			}, [U("span", Pd, "v" + O(e.major), 1), U("div", Fd, [U("p", null, "Мажорная версия " + O(e.major), 1), U("p", Id, " От v" + O(e.items[e.items.length - 1][0]) + " до v" + O(e.items[0][0]), 1)])]))), 128))])) : G("", !0), (V(!0), H(B, null, z([{
				title: "Крупные обновления",
				entries: a.value.large,
				badge: "Крупное"
			}, {
				title: "Мелкие обновления",
				entries: a.value.small,
				badge: "Мелкое"
			}], (e) => I((V(), H("section", {
				key: e.title,
				class: "sb-vh-search-group"
			}, [U("h3", null, [W(O(e.title) + " ", 1), U("span", null, O(e.entries.length), 1)]), U("div", Ld, [(V(!0), H(B, null, z(e.entries, (t) => (V(), H("article", {
				key: t[0],
				class: "sb-vh-release"
			}, [U("span", Rd, "v" + O(t[0]), 1), U("div", zd, [U("p", null, O(t[1]), 1), U("div", Bd, [U("time", { datetime: t[2] }, O(F(vd)(t[2])), 9, Vd), U("span", Hd, O(e.badge), 1)])])]))), 128))])])), [[eo, e.entries.length]])), 128))])) : a.value.mode === "search" ? (V(), H("p", Ud, " По запросу совпадений нет ни в одном разделе истории. ")) : a.value.mode === "major" ? (V(), H("div", Wd, [(V(!0), H(B, null, z(a.value.majors, (e) => (V(), H("article", {
				key: e.major,
				class: "sb-vh-release sb-vh-major-release"
			}, [U("span", Gd, "v" + O(e.major), 1), U("div", Kd, [
				U("h3", null, "Мажорная версия " + O(e.major), 1),
				U("p", null, "Ветка v" + O(e.major) + ".x — " + O(e.items.length) + " сохранённых минорных обновлений.", 1),
				U("p", qd, " От v" + O(e.items[e.items.length - 1][0]) + " (" + O(F(vd)(e.items[e.items.length - 1][2])) + ") до v" + O(e.items[0][0]) + " (" + O(F(vd)(e.items[0][2])) + ") ", 1),
				U("button", {
					type: "button",
					class: "sb-vh-view-minors",
					onClick: f
				}, "Просмотреть минорные версии")
			])]))), 128))])) : a.value.mode === "minor" && a.value.entries.length ? (V(), H("div", Jd, [(V(!0), H(B, null, z(a.value.entries, (e) => (V(), H("article", {
				key: e[0],
				class: "sb-vh-release"
			}, [U("span", Yd, "v" + O(e[0]), 1), U("div", Xd, [U("p", null, O(e[1]), 1), U("div", Zd, [U("time", { datetime: e[2] }, O(F(vd)(e[2])), 9, Qd), r.value === "all" ? (V(), H("span", $d, O(e[3] === "large" ? "Крупное" : "Мелкое"), 1)) : G("", !0)])])]))), 128))])) : (V(), H("p", ef, "По запросу минорные версии не найдены."))], 512)
		]));
	}
}, [["__scopeId", "data-v-ce1fc81b"]]);
// src/vue/version-history/legacyVersionHistoryBridge.js
function nf({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_VERSION_HISTORY;
	return !t?.snapshot || !document.body ? () => {} : Q({
		root: document.body,
		selectTarget: (e) => e.querySelector("#sb-vue-version-history"),
		readSnapshot: () => {
			let e = t.snapshot();
			return e && Array.isArray(e.releases) ? e : null;
		},
		mount: (n, r) => e(n, tf, { model: {
			...r,
			close: t.close
		} })
	});
}
// src/vue/home/HomeDashboard.vue
var rf = ["data-sb-applied-theme"], af = { class: "dash-head" }, of = { class: "dash-actions" }, sf = { class: "dash-metrics" }, cf = { class: "dash-metric" }, lf = { class: "dash-metric" }, uf = { class: "dash-metric" }, df = { class: "dash-layout" }, ff = { class: "dash-panel" }, pf = { class: "dash-panel-head" }, mf = { class: "dash-list" }, hf = { class: "dash-entry-meta" }, gf = ["data-kind", "data-id"], _f = {
	key: 0,
	class: "dash-empty"
}, vf = { class: "dash-panel" }, yf = { class: "dash-panel-head" }, bf = { class: "dash-list" }, xf = { class: "dash-entry-meta" }, Sf = { class: "dash-entry-actions" }, Cf = ["data-id"], wf = ["data-id"], Tf = {
	key: 0,
	class: "dash-empty"
}, Ef = { class: "dash-panel dash-panel-events" }, Df = { class: "dash-panel-head" }, Of = { class: "dash-list" }, kf = { class: "dash-event-date" }, Af = { class: "dash-event-main" }, jf = { class: "dash-entry-meta" }, Mf = { key: 0 }, Nf = ["data-id"], Pf = {
	key: 0,
	class: "dash-empty"
}, Ff = {
	__name: "HomeDashboard",
	props: {
		model: {
			type: Object,
			required: !0
		},
		navigate: {
			type: Function,
			required: !0
		}
	},
	setup(e) {
		let t = Z();
		return (n, r) => (V(), H("div", {
			class: "sb-vue-dashboard",
			"data-sb-vue-dashboard": "",
			"data-sb-applied-theme": F(t).appearance.resolvedTheme
		}, [
			U("div", af, [
				r[9] ||= U("div", { class: "dash-eyebrow" }, "ЛИЧНАЯ МУЗЫКАЛЬНАЯ МАСТЕРСКАЯ", -1),
				r[10] ||= U("h1", null, [W("Твоя музыкальная "), U("span", null, "лаборатория.")], -1),
				U("p", null, O(e.model.profileName) + ", здесь твои последние идеи, промпты и музыкальные события — всё под рукой.", 1),
				U("div", of, [
					U("button", {
						type: "button",
						class: "btn primary",
						"data-action": "nav",
						"data-nav": "myideas",
						onClick: r[0] ||= Go((t) => e.navigate("myideas"), ["stop"])
					}, "＋ Новая идея"),
					U("button", {
						type: "button",
						class: "btn ghost",
						"data-action": "nav",
						"data-nav": "myprompts",
						onClick: r[1] ||= Go((t) => e.navigate("myprompts"), ["stop"])
					}, "＋ Новый промпт"),
					U("button", {
						type: "button",
						class: "btn ghost",
						"data-action": "nav",
						"data-nav": "events",
						onClick: r[2] ||= Go((t) => e.navigate("events"), ["stop"])
					}, "＋ Событие")
				])
			]),
			U("div", sf, [
				U("div", cf, [U("b", null, O(F(t).dashboardStats.ideaCount), 1), r[11] ||= U("span", null, "Мои идеи", -1)]),
				U("div", lf, [U("b", null, O(F(t).dashboardStats.promptCount), 1), r[12] ||= U("span", null, "Мои промпты", -1)]),
				U("div", uf, [U("b", null, O(F(t).dashboardStats.eventCount), 1), r[13] ||= U("span", null, "Мои события", -1)])
			]),
			U("div", df, [
				U("section", ff, [U("header", pf, [r[14] ||= U("div", null, [U("span", { class: "dash-kicker" }, "💡 ЛИЧНАЯ БИБЛИОТЕКА"), U("h2", null, "Мои последние идеи")], -1), U("button", {
					type: "button",
					class: "dash-view-all",
					"data-action": "nav",
					"data-nav": "myideas",
					onClick: r[3] ||= Go((t) => e.navigate("myideas"), ["stop"])
				}, "Все идеи →")]), U("div", mf, [(V(!0), H(B, null, z(e.model.ideas, (e) => (V(), H("article", {
					key: e.kind + ":" + e.key,
					class: "dash-entry"
				}, [
					U("div", hf, O(e.label), 1),
					U("h3", null, O(e.title), 1),
					U("p", null, O(String(e.pitch).slice(0, 180)), 1),
					U("button", {
						type: "button",
						class: "dash-entry-link",
						"data-action": "dash-open-idea",
						"data-kind": e.kind,
						"data-id": String(e.key)
					}, "Открыть идею →", 8, gf)
				]))), 128)), e.model.ideas.length ? G("", !0) : (V(), H("div", _f, [
					r[15] ||= U("span", null, "💡", -1),
					r[16] ||= U("strong", null, "Пока нет сохранённых идей", -1),
					r[17] ||= U("p", null, "Добавь идею в личном кабинете или сохрани сюжет из Idea Lab.", -1),
					U("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "nav",
						"data-nav": "myideas",
						onClick: r[4] ||= Go((t) => e.navigate("myideas"), ["stop"])
					}, "Добавить идею →")
				]))])]),
				U("section", vf, [U("header", yf, [r[18] ||= U("div", null, [U("span", { class: "dash-kicker" }, "🎛️ SUNO STUDIO"), U("h2", null, "Мои последние промпты")], -1), U("button", {
					type: "button",
					class: "dash-view-all",
					"data-action": "nav",
					"data-nav": "myprompts",
					onClick: r[5] ||= Go((t) => e.navigate("myprompts"), ["stop"])
				}, "Все промпты →")]), U("div", bf, [(V(!0), H(B, null, z(e.model.prompts, (e) => (V(), H("article", {
					key: String(e.id),
					class: "dash-entry"
				}, [
					U("div", xf, O(e.genre || "Suno Studio") + O(e.date ? " · " + e.date : ""), 1),
					U("h3", null, O(e.title || (e.genre || "Промпт") + " · " + (e.mood || "студия")), 1),
					U("p", null, O(String(e.text || "").slice(0, 180)), 1),
					U("div", Sf, [U("button", {
						type: "button",
						class: "dash-entry-link",
						"data-action": "dash-open-prompt",
						"data-id": String(e.id)
					}, "Открыть промпт →", 8, Cf), U("button", {
						type: "button",
						class: "dash-copy",
						"data-action": "copy-saved",
						"data-id": String(e.id)
					}, "Копировать", 8, wf)])
				]))), 128)), e.model.prompts.length ? G("", !0) : (V(), H("div", Tf, [
					r[19] ||= U("span", null, "🎛️", -1),
					r[20] ||= U("strong", null, "Пока нет сохранённых промптов", -1),
					r[21] ||= U("p", null, "Сохрани промпт в Suno Studio или создай собственный.", -1),
					U("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "nav",
						"data-nav": "myprompts",
						onClick: r[6] ||= Go((t) => e.navigate("myprompts"), ["stop"])
					}, "Добавить промпт →")
				]))])]),
				U("section", Ef, [U("header", Df, [r[22] ||= U("div", null, [U("span", { class: "dash-kicker" }, "🗓️ ТВОРЧЕСКИЙ КАЛЕНДАРЬ"), U("h2", null, "Мои события")], -1), U("button", {
					type: "button",
					class: "dash-view-all",
					"data-action": "nav",
					"data-nav": "events",
					onClick: r[7] ||= Go((t) => e.navigate("events"), ["stop"])
				}, "Все события →")]), U("div", Of, [(V(!0), H(B, null, z(e.model.events, (e) => (V(), H("article", {
					key: String(e.id),
					class: "dash-entry dash-event"
				}, [
					U("div", kf, [U("strong", null, O(e.formattedDate), 1), U("span", null, O(e.time || "Весь день"), 1)]),
					U("div", Af, [
						U("div", jf, O(e.typeLabel) + O(e.past ? " · Прошедшее" : ""), 1),
						U("h3", null, O(e.title), 1),
						e.notes ? (V(), H("p", Mf, O(String(e.notes).slice(0, 160)), 1)) : G("", !0)
					]),
					U("button", {
						type: "button",
						class: "dash-entry-link",
						"data-action": "dash-open-event",
						"data-id": String(e.id)
					}, "Подробнее →", 8, Nf)
				]))), 128)), e.model.events.length ? G("", !0) : (V(), H("div", Pf, [
					r[23] ||= U("span", null, "🗓️", -1),
					r[24] ||= U("strong", null, "Событий пока нет", -1),
					r[25] ||= U("p", null, "Добавь даты релизов, записи, встречи и другие планы своей музыкальной работы.", -1),
					U("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "nav",
						"data-nav": "events",
						onClick: r[8] ||= Go((t) => e.navigate("events"), ["stop"])
					}, "Добавить событие →")
				]))])])
			])
		], 8, rf));
	}
}, If = Object.freeze([
	"myideas",
	"myprompts",
	"events"
]);
function Lf(e, { router: t, legacyApi: n, syncRoute: r = cu } = {}, i) {
	if (typeof e != "string" || !e || !n || typeof n.snapshot != "function") return !1;
	let a = i === "menu", o = n.snapshot()?.items, s = a ? Array.isArray(o) && o.some((t) => t?.id === e) : If.includes(e), c = a ? n.navigate : n.navigateWorkspace;
	if (!s || typeof c != "function") return !1;
	let l = !1;
	try {
		let n = Il(e);
		l = !!t?.resolve && t.resolve(n)?.path === n, l || console.warn("[SUNOBOOM] Vue route unavailable; using legacy navigation:", e);
	} catch (e) {
		console.warn("[SUNOBOOM] Vue route resolution failed; using legacy navigation:", e);
	}
	c.call(n, e);
	let u = n.snapshot()?.active;
	return r(u, {
		historyMode: l && u === e ? "push" : "replace",
		source: i
	}), !0;
}
function Rf(e, t = {}) {
	return Lf(e, t, "menu");
}
function zf(e, t = {}) {
	return Lf(e, t, "shortcut");
}
// src/vue/home/legacyHomeDashboardBridge.js
function Bf({ mountVueFeature: e, sharedUi: t }) {
	let n = window.SUNOBOOM_LEGACY_DASHBOARD, r = document.getElementById("app");
	return !n?.snapshot || !r ? () => {} : Q({
		root: r,
		selectTarget: (e) => e.querySelector("#sb-vue-dashboard"),
		readSnapshot: () => n.snapshot(),
		mount: (n, r) => (t.publishDashboardStats(r), e(n, Ff, {
			model: r,
			navigate: (e) => zf(e, {
				router: Pl,
				legacyApi: window.SUNOBOOM_LEGACY_NAV
			})
		}))
	});
}
// src/vue/account/PromptCollection.vue
var Vf = {
	key: 0,
	class: "sub",
	"data-sb-vue-prompt-library-recap": ""
}, Hf = { class: "section-title" }, Uf = {
	key: 1,
	class: "saved-list"
}, Wf = { class: "row" }, Gf = { class: "actions" }, Kf = ["data-id"], qf = ["innerHTML"], Jf = ["data-id"], Yf = ["data-id", "aria-label"], Xf = ["innerHTML"], Zf = { class: "sub" }, Qf = {
	key: 2,
	class: "empty"
}, $f = ["innerHTML"], ep = {
	__name: "PromptCollection",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = Z();
		return (n, r) => (V(), H(B, null, [
			F(t).librarySummary.ready ? (V(), H("p", Vf, " Последний просмотр библиотеки: " + O(F(t).librarySummary.promptCount) + " промптов ", 1)) : G("", !0),
			U("div", Hf, [U("h2", null, "Сохранённые промпты (" + O(e.model.items.length) + ")", 1)]),
			e.model.items.length ? (V(), H("div", Uf, [(V(!0), H(B, null, z(e.model.items, (t) => (V(), H("article", {
				key: t.id,
				class: "saved-item"
			}, [
				U("div", Wf, [U("h3", null, O(t.title), 1), U("div", Gf, [
					U("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "copy-saved",
						"data-id": t.id
					}, [U("span", {
						"aria-hidden": "true",
						innerHTML: e.model.icons.copy
					}, null, 8, qf), r[0] ||= W(" Копировать", -1)], 8, Kf),
					U("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "edit-manual-prompt",
						"data-id": t.id
					}, "Изменить", 8, Jf),
					U("button", {
						type: "button",
						class: "btn danger small",
						"data-action": "delete-saved",
						"data-id": t.id,
						"aria-label": "Удалить промпт «" + t.title + "»"
					}, [U("span", {
						"aria-hidden": "true",
						innerHTML: e.model.icons.trash
					}, null, 8, Xf)], 8, Yf)
				])]),
				U("p", null, O(t.text), 1),
				U("span", Zf, O(t.genre) + " · " + O(t.date), 1)
			]))), 128))])) : (V(), H("div", Qf, [
				U("span", {
					"aria-hidden": "true",
					innerHTML: e.model.icons.music
				}, null, 8, $f),
				r[1] ||= U("strong", null, "Промптов пока нет", -1),
				r[2] ||= W("Сохрани первый здесь или в Suno Studio.", -1)
			]))
		], 64));
	}
};
// src/vue/account/legacyPromptCollectionBridge.js
function tp({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PROMPT_LIST, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Q({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-prompts-list"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, ep, { model: n })
	});
}
// src/vue/account/PromptEditor.vue
var np = {
	key: 0,
	class: "sub",
	"data-sb-vue-last-idea-draft": ""
}, rp = { class: "field" }, ip = { class: "field" }, ap = ["value"], op = { class: "field" }, sp = {
	id: "sb-prompt-char-count",
	class: "sub"
}, cp = {
	__name: "PromptEditor",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Wt({ ...t.initial.values }), r = K(() => n.text.length), i = Z();
		return L(() => [
			n.title,
			n.genre,
			n.text,
			t.initial.editing
		], () => i.publishPromptDraftSummary(n, t.initial.editing), { immediate: !0 }), (t, a) => (V(), H(B, null, [
			U("h3", null, O(e.initial.editing ? "Редактирование промпта" : "Новый промпт для Suno"), 1),
			F(i).ideaDraftSummary.ready ? (V(), H("p", np, "Последний открытый черновик идеи: " + O(F(i).ideaDraftSummary.ideaLength) + " / 3000 символов", 1)) : G("", !0),
			U("div", rp, [a[3] ||= U("label", { for: "custom-prompt-title" }, "Название", -1), I(U("input", {
				id: "custom-prompt-title",
				"onUpdate:modelValue": a[0] ||= (e) => n.title = e,
				maxlength: "100",
				placeholder: "Например, Романтичный афро-поп"
			}, null, 512), [[q, n.title]])]),
			U("div", ip, [a[4] ||= U("label", { for: "custom-prompt-genre" }, "Жанр", -1), I(U("select", {
				id: "custom-prompt-genre",
				"onUpdate:modelValue": a[1] ||= (e) => n.genre = e
			}, [(V(!0), H(B, null, z(e.initial.genres, (e) => (V(), H("option", {
				key: e.id,
				value: e.id
			}, O(e.name), 9, ap))), 128))], 512), [[Ro, n.genre]])]),
			U("div", op, [
				a[5] ||= U("label", { for: "custom-prompt-text" }, "Текст промпта (до 1000 символов)", -1),
				I(U("textarea", {
					id: "custom-prompt-text",
					"onUpdate:modelValue": a[2] ||= (e) => n.text = e,
					rows: "7",
					maxlength: "1000",
					"aria-describedby": "sb-prompt-char-count",
					placeholder: "Modern Russian-language afropop, 105 BPM, clean vocals, groovy bass..."
				}, null, 512), [[q, n.text]]),
				U("span", sp, O(r.value) + " / 1000 символов", 1)
			])
		], 64));
	}
};
// src/vue/account/legacyPromptEditorBridge.js
function lp({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PROMPT_EDITOR, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Q({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-prompt-form"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, cp, { initial: n })
	});
}
// src/vue/account/LibraryCollection.vue
var up = { class: "account-back" }, dp = {
	type: "button",
	class: "btn ghost small",
	"data-action": "workspace-back"
}, fp = {
	key: 0,
	class: "sb-dna-summary",
	"data-sb-vue-library-summary": ""
}, pp = { class: "section-title" }, mp = {
	key: 1,
	class: "genre-grid"
}, hp = ["data-id"], gp = { class: "genre-content" }, _p = { class: "kicker" }, vp = { class: "foot" }, yp = {
	key: 2,
	class: "empty"
}, bp = { class: "section-title" }, xp = {
	key: 3,
	class: "idea-grid"
}, Sp = { class: "idea-badge" }, Cp = { class: "actions" }, wp = ["data-id", "data-i"], Tp = ["data-id", "data-i"], Ep = {
	key: 4,
	class: "empty"
}, Dp = { class: "section-title" }, Op = {
	key: 5,
	class: "idea-grid"
}, kp = { class: "idea-badge" }, Ap = ["data-id"], jp = {
	key: 6,
	class: "empty"
}, Mp = { class: "section-title" }, Np = {
	key: 7,
	class: "idea-grid"
}, Pp = { class: "idea-badge" }, Fp = { class: "generator-story" }, Ip = { class: "generator-hook" }, Lp = {
	key: 0,
	class: "generator-detail"
}, Rp = { class: "actions" }, zp = ["data-id"], Bp = ["data-id"], Vp = ["data-id", "aria-label"], Hp = {
	key: 8,
	class: "empty"
}, Up = { class: "section-title" }, Wp = {
	key: 9,
	class: "saved-list"
}, Gp = { class: "row" }, Kp = { class: "actions" }, qp = ["data-id"], Jp = ["data-id", "aria-label"], Yp = { class: "sub" }, Xp = {
	key: 10,
	class: "empty"
}, Zp = {
	__name: "LibraryCollection",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = Z();
		return L(() => t.model, (e) => n.publishLibrarySummary(e), { immediate: !0 }), (t, r) => (V(), H(B, null, [
			U("div", up, [U("button", dp, O(e.model.backLabel), 1)]),
			r[14] ||= U("header", { class: "heading" }, [U("h1", null, "Моя библиотека"), U("p", null, "Любимые жанры, идеи и промпты. Сохраняются локально в этом браузере.")], -1),
			F(n).librarySummary.ready ? (V(), H("div", fp, [
				U("div", null, [U("b", null, O(F(n).librarySummary.genreCount), 1), r[0] ||= U("span", null, "Избранных жанров", -1)]),
				U("div", null, [U("b", null, O(F(n).librarySummary.totalIdeaCount), 1), r[1] ||= U("span", null, "Идей в библиотеке", -1)]),
				U("div", null, [U("b", null, O(F(n).librarySummary.promptCount), 1), r[2] ||= U("span", null, "Сохранённых промптов", -1)])
			])) : G("", !0),
			U("div", pp, [U("h2", null, "Избранные жанры (" + O(e.model.genres.length) + ")", 1)]),
			e.model.genres.length ? (V(), H("div", mp, [(V(!0), H(B, null, z(e.model.genres, (e) => (V(), H("button", {
				key: e.id,
				type: "button",
				class: "genre-card",
				style: E({ "--accent": e.color }),
				"data-action": "genre",
				"data-id": e.id
			}, [r[4] ||= U("div", { class: "art" }, null, -1), U("div", gp, [U("div", null, [
				U("div", _p, O(e.family) + " · " + O(e.bpm[0]) + "–" + O(e.bpm[1]) + " BPM", 1),
				U("h3", null, O(e.name), 1),
				U("p", null, O(e.tagline), 1)
			]), U("div", vp, [U("span", null, O(e.era), 1), r[3] ||= U("span", { style: { color: "#ffacd9" } }, "Открыть →", -1)])])], 12, hp))), 128))])) : (V(), H("div", yp, [...r[5] ||= [U("strong", null, "Пока нет избранных жанров", -1), W("Добавляй их в карточках Академии.", -1)]])),
			U("div", bp, [U("h2", null, "Сохранённые идеи (" + O(e.model.ideas.length) + ")", 1)]),
			e.model.ideas.length ? (V(), H("div", xp, [(V(!0), H(B, null, z(e.model.ideas, (e) => (V(), H("article", {
				key: e.key,
				class: "idea"
			}, [
				U("div", Sp, O(e.genre) + " · " + O(e.mood), 1),
				U("h3", null, O(e.title), 1),
				U("p", null, O(e.pitch), 1),
				U("div", Cp, [U("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "idea-use",
					"data-id": e.genreId,
					"data-i": e.index
				}, "В студию", 8, wp), U("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "idea-save",
					"data-id": e.genreId,
					"data-i": e.index
				}, "Сохранено", 8, Tp)])
			]))), 128))])) : (V(), H("div", Ep, [...r[6] ||= [U("strong", null, "Нет сохранённых идей", -1), W("Найди интересный сюжет и нажми «Сохранить».", -1)]])),
			U("div", Dp, [U("h2", null, "Мои собственные идеи (" + O(e.model.own.length) + ")", 1), r[7] ||= U("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "nav",
				"data-nav": "myideas"
			}, "Добавить или изменить →", -1)]),
			e.model.own.length ? (V(), H("div", Op, [(V(!0), H(B, null, z(e.model.own, (e) => (V(), H("article", {
				key: e.id,
				class: "idea"
			}, [
				U("div", kp, O(e.genre), 1),
				U("h3", null, O(e.title), 1),
				U("p", null, O(e.pitch), 1),
				U("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "edit-manual-idea",
					"data-id": e.id
				}, "Открыть запись →", 8, Ap)
			]))), 128))])) : (V(), H("div", jp, [...r[8] ||= [U("strong", null, "Пока нет своих идей", -1), W("Добавь их в личном кабинете.", -1)]])),
			U("div", Mp, [U("h2", null, "Идеи из генератора (" + O(e.model.generated.length) + ")", 1), r[9] ||= U("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "nav",
				"data-nav": "ideas"
			}, "＋ Создать ещё", -1)]),
			e.model.generated.length ? (V(), H("div", Np, [(V(!0), H(B, null, z(e.model.generated, (e) => (V(), H("article", {
				key: e.id,
				class: "idea generated-card"
			}, [
				U("div", Pp, O(e.genre) + " · " + O(e.topic), 1),
				U("h3", null, O(e.title), 1),
				U("p", null, O(e.pitch), 1),
				U("p", Fp, O(e.storyLine), 1),
				U("div", Ip, [r[10] ||= U("span", null, "ХУК ПРИПЕВА", -1), U("strong", null, O(e.hook), 1)]),
				e.detail ? (V(), H("p", Lp, "Твоя деталь: " + O(e.detail), 1)) : G("", !0),
				U("div", Rp, [
					U("button", {
						type: "button",
						class: "btn primary small",
						"data-action": "generated-use",
						"data-id": e.id
					}, "В Suno Studio", 8, zp),
					U("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "generated-copy",
						"data-id": e.id
					}, "Копировать", 8, Bp),
					U("button", {
						type: "button",
						class: "btn danger small",
						"data-action": "generated-delete",
						"data-id": e.id,
						"aria-label": "Удалить идею «" + e.title + "»"
					}, "Удалить", 8, Vp)
				])
			]))), 128))])) : (V(), H("div", Hp, [...r[11] ||= [U("strong", null, "Сохранённых новых идей нет", -1), W("Создай идеи в генераторе и нажми «Сохранить».", -1)]])),
			U("div", Up, [U("h2", null, "Мои промпты (" + O(e.model.prompts.length) + ")", 1), r[12] ||= U("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "nav",
				"data-nav": "myprompts"
			}, "Добавить или изменить →", -1)]),
			e.model.prompts.length ? (V(), H("div", Wp, [(V(!0), H(B, null, z(e.model.prompts, (e) => (V(), H("article", {
				key: e.id,
				class: "saved-item"
			}, [
				U("div", Gp, [U("h3", null, O(e.title), 1), U("div", Kp, [U("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "copy-saved",
					"data-id": e.id
				}, "Копировать", 8, qp), U("button", {
					type: "button",
					class: "btn danger small",
					"data-action": "delete-saved",
					"data-id": e.id,
					"aria-label": "Удалить промпт «" + e.title + "»"
				}, "Удалить", 8, Jp)])]),
				U("p", null, O(e.text), 1),
				U("span", Yp, O(e.date), 1)
			]))), 128))])) : (V(), H("div", Xp, [...r[13] ||= [U("strong", null, "Промптов пока нет", -1), W("Создай первый в Suno Studio и сохрани в библиотеке.", -1)]]))
		], 64));
	}
};
// src/vue/account/legacyLibraryBridge.js
function Qp({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_LIBRARY, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Q({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-library-collection"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, Zp, { model: n })
	});
}
// src/vue/account/SongCards.vue
var $p = {
	key: 0,
	class: "sbsong-artist-hint",
	"data-sb-vue-song-collection-recap": ""
}, em = {
	key: 1,
	class: "sbsong-grid"
}, tm = ["data-id", "aria-label"], nm = ["data-sbsong-cover"], rm = ["src"], im = { class: "sbsong-card-text" }, am = { class: "sbsong-card-flags" }, om = { class: "sbsong-card-actions" }, sm = ["data-id"], cm = ["data-id"], lm = ["data-id"], um = {
	key: 2,
	class: "sbsong-empty"
}, dm = {
	__name: "SongCards",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ N(t.api.snapshot() || {
			items: [],
			total: 0
		}), r = Z();
		L(n, (e) => r.publishSongCollectionSummary(e), { immediate: !0 });
		function i() {
			let e = t.api.snapshot();
			e && (n.value = e, On(() => t.api.hydrateCovers()));
		}
		return R(() => {
			window.addEventListener("sunoboom:songs-search", i), On(() => t.api.hydrateCovers());
		}), Sr(() => window.removeEventListener("sunoboom:songs-search", i)), (e, t) => (V(), H(B, null, [F(r).songCollectionSummary.ready ? (V(), H("p", $p, " Найдено " + O(F(r).songCollectionSummary.visibleCount) + " из " + O(F(r).songCollectionSummary.totalCount) + " песен ", 1)) : G("", !0), n.value.items.length ? (V(), H("div", em, [(V(!0), H(B, null, z(n.value.items, (e) => (V(), H("article", {
			key: e.id,
			class: "sbsong-card"
		}, [U("button", {
			type: "button",
			class: "sbsong-art-button",
			"data-sbsong-action": "open",
			"data-id": e.id,
			"aria-label": "Открыть " + e.title
		}, [e.hasCover ? (V(), H("img", {
			key: 0,
			alt: "",
			"data-sbsong-cover": e.id,
			loading: "lazy"
		}, null, 8, nm)) : e.coverUrl ? (V(), H("img", {
			key: 1,
			alt: "",
			src: e.coverUrl,
			style: { display: "block" },
			loading: "lazy"
		}, null, 8, rm)) : G("", !0), t[0] ||= U("span", {
			class: "sbsong-no-cover",
			"aria-hidden": "true"
		}, "♫", -1)], 8, tm), U("div", im, [
			U("small", null, O(e.genre), 1),
			U("h3", null, O(e.title), 1),
			U("p", null, O(e.artist), 1),
			U("div", am, [U("span", null, O(e.status), 1)]),
			U("div", om, [
				U("button", {
					type: "button",
					"data-sbsong-action": "open",
					"data-id": e.id
				}, "Открыть", 8, sm),
				U("button", {
					type: "button",
					"data-sbsong-action": "edit",
					"data-id": e.id
				}, "Изменить", 8, cm),
				U("button", {
					type: "button",
					"data-sbsong-action": "share",
					"data-id": e.id
				}, "Поделиться", 8, lm)
			])
		])]))), 128))])) : (V(), H("div", um, O(n.value.total ? "По этому запросу песен нет." : "Песен пока нет. Добавь первую карточку и загрузи аудиофайл."), 1))], 64));
	}
};
// src/vue/account/legacySongCardsBridge.js
function fm({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SONG_CARDS, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Q({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-song-cards"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, dm, { api: t })
	});
}
// src/vue/account/SongVersions.vue
var pm = {
	class: "sbsong-versions",
	"data-sb-vue-song-versions": "",
	"aria-label": "Версии записи"
}, mm = { class: "sbsong-version-heading" }, hm = { key: 0 }, gm = { class: "sbsong-version-row-head" }, _m = {
	key: 0,
	class: "sbsong-version-main-badge"
}, vm = {
	key: 1,
	class: "sbsong-version-play-badge"
}, ym = { class: "sbsong-version-actions" }, bm = ["data-version-id"], xm = ["data-version-id"], Sm = ["data-id", "data-version-id"], Cm = ["data-version-id"], wm = { class: "sbsong-version-notes" }, Tm = ["data-sbsong-version-title", "value"], Em = ["data-sbsong-version-note", "value"], Dm = ["data-version-id"], Om = { key: 0 }, km = {
	type: "button",
	class: "sbsong-compare-toggle",
	"data-sbsong-action": "compare-toggle"
}, Am = {
	key: 0,
	class: "sbsong-compare-grid"
}, jm = ["value"], Mm = ["value"], Nm = ["value"], Pm = ["value"], Fm = {
	__name: "SongVersions",
	props: {
		songId: {
			type: String,
			required: !0
		},
		versions: {
			type: Array,
			required: !0
		},
		playingLabel: {
			type: String,
			default: ""
		},
		compareOpen: {
			type: Boolean,
			default: !1
		},
		compareAId: {
			type: String,
			default: ""
		},
		compareBId: {
			type: String,
			default: ""
		}
	},
	setup(e) {
		return (t, n) => (V(), H("section", pm, [
			U("div", mm, [U("h3", null, "Версии записи (" + O(e.versions.length) + ")", 1), e.playingLabel ? (V(), H("small", hm, "В основном плеере: " + O(e.playingLabel), 1)) : G("", !0)]),
			(V(!0), H(B, null, z(e.versions, (t) => (V(), H("article", {
				key: t.id,
				class: "sbsong-version-row"
			}, [
				U("div", gm, [U("div", null, [
					U("strong", null, O(t.label), 1),
					t.isMain ? (V(), H("span", _m, "★ Основная")) : G("", !0),
					t.isPlaying ? (V(), H("span", vm, "♫ Выбрана")) : G("", !0),
					U("small", null, O(t.fileName) + " · " + O(t.sizeLabel) + " · " + O(t.addedDate), 1)
				])]),
				U("div", ym, [
					U("button", {
						type: "button",
						"data-sbsong-action": "version-play",
						"data-version-id": t.id
					}, "Выбрать для плеера", 8, bm),
					t.isMain ? G("", !0) : (V(), H("button", {
						key: 0,
						type: "button",
						"data-sbsong-action": "version-main",
						"data-version-id": t.id
					}, "★ Сделать основной", 8, xm)),
					U("button", {
						type: "button",
						"data-sbsong-action": "share-file",
						"data-id": e.songId,
						"data-version-id": t.id
					}, "Сохранить / отправить", 8, Sm),
					U("button", {
						type: "button",
						class: "sbsong-version-danger",
						"data-sbsong-action": "version-remove",
						"data-version-id": t.id
					}, "Удалить дубль", 8, Cm)
				]),
				U("details", wm, [
					n[2] ||= U("summary", null, "Название и заметки", -1),
					U("label", null, [n[0] ||= W("Название версии ", -1), U("input", {
						type: "text",
						maxlength: "90",
						"data-sbsong-version-title": t.id,
						value: t.label
					}, null, 8, Tm)]),
					U("label", null, [n[1] ||= W("Чем отличается этот дубль ", -1), U("textarea", {
						maxlength: "800",
						rows: "2",
						"data-sbsong-version-note": t.id,
						value: t.notes,
						placeholder: "Например: более плотный припев, удачный вокал..."
					}, null, 8, Em)]),
					U("button", {
						type: "button",
						"data-sbsong-action": "version-save",
						"data-version-id": t.id
					}, "Сохранить заметки", 8, Dm)
				])
			]))), 128)),
			e.versions.length ? G("", !0) : (V(), H("p", Om, "Пока нет локальных версий. Загрузи первую запись в MP3, M4A или WAV.")),
			e.versions.length > 1 ? (V(), H(B, { key: 1 }, [U("button", km, O(e.compareOpen ? "Скрыть сравнение A/B" : "Сравнить версии A/B"), 1), e.compareOpen ? (V(), H("div", Am, [
				U("label", null, [
					n[3] ||= W("Версия A ", -1),
					U("select", {
						id: "sbsong-compare-a",
						value: e.compareAId
					}, [(V(!0), H(B, null, z(e.versions, (e) => (V(), H("option", {
						key: e.id,
						value: e.id
					}, O(e.label), 9, Mm))), 128))], 8, jm),
					n[4] ||= U("audio", {
						id: "sbsong-ab-a",
						controls: "",
						preload: "metadata"
					}, null, -1)
				]),
				U("label", null, [
					n[5] ||= W("Версия B ", -1),
					U("select", {
						id: "sbsong-compare-b",
						value: e.compareBId
					}, [(V(!0), H(B, null, z(e.versions, (e) => (V(), H("option", {
						key: e.id,
						value: e.id
					}, O(e.label), 9, Pm))), 128))], 8, Nm),
					n[6] ||= U("audio", {
						id: "sbsong-ab-b",
						controls: "",
						preload: "metadata"
					}, null, -1)
				]),
				n[7] ||= U("p", null, "Два независимых плеера для сравнения дублей. Воспроизведение запускается вручную.", -1)
			])) : G("", !0)], 64)) : G("", !0),
			n[8] ||= fa("<div class=\"sbsong-version-add\"><h4>+ Добавить новую версию</h4><label>Аудиофайл (MP3, M4A, WAV и другие) <input id=\"sbsong-version-file\" type=\"file\" accept=\"audio/*,.mp3,.m4a,.wav,.wave,.flac,.ogg,.opus,.aac\"></label><label>Название дубля <input id=\"sbsong-new-version-title\" maxlength=\"90\" type=\"text\" placeholder=\"Например: Версия с новым припевом\"></label><label>Заметка <textarea id=\"sbsong-new-version-notes\" maxlength=\"800\" rows=\"2\" placeholder=\"Что изменилось в этой записи?\"></textarea></label><button type=\"button\" class=\"sbsong-main-btn\" data-sbsong-action=\"version-add\" id=\"sbsong-version-submit\">Сохранить новую версию</button><p>WAV — до 500 МБ, другие форматы — до 150 МБ. Каждая версия хранится отдельно в браузере этого устройства. Старые записи не перезаписываются.</p></div>", 1)
		]));
	}
}, Im = { class: "sbsong-detail" }, Lm = { class: "sbsong-subhead" }, Rm = {
	key: 0,
	class: "sbsong-artist-hint",
	"data-sb-vue-song-detail-recap": ""
}, zm = { class: "sbsong-detail-layout" }, Bm = { class: "sbsong-detail-cover" }, Vm = ["data-sbsong-cover", "alt"], Hm = ["src", "alt"], Um = {
	key: 2,
	class: "sbsong-no-cover",
	"aria-hidden": "true"
}, Wm = { class: "sbsong-detail-artist" }, Gm = { class: "sbsong-detail-tags" }, Km = { key: 0 }, qm = { key: 1 }, Jm = {
	key: 0,
	class: "sbsong-detail-description"
}, Ym = {
	class: "sbsong-audio-box",
	id: "sbsong-audio-box"
}, Xm = {
	key: 0,
	controls: "",
	preload: "metadata",
	id: "sbsong-audio-player"
}, Zm = { key: 1 }, Qm = { class: "sbsong-detail-actions" }, $m = ["data-id"], eh = ["data-id"], th = ["href"], nh = ["data-id"], rh = ["data-id"], ih = ["data-id"], ah = {
	key: 1,
	class: "sbsong-delete-confirm"
}, oh = ["data-id"], sh = {
	__name: "SongDetail",
	props: {
		model: {
			type: Object,
			required: !0
		},
		api: {
			type: Object,
			required: !0
		}
	},
	setup(e) {
		let t = e, n = Z();
		return L(() => t.model, (e) => n.publishSongDetailSummary(e), { immediate: !0 }), R(() => {
			On(() => t.api.hydrateMedia());
		}), (t, r) => (V(), H("section", Im, [
			U("div", Lm, [U("h2", null, O(e.model.title), 1), r[0] ||= U("button", {
				type: "button",
				"data-sbsong-action": "close-detail"
			}, "Закрыть ×", -1)]),
			F(n).songCollectionSummary.ready ? (V(), H("p", Rm, " В личной коллекции: " + O(F(n).songCollectionSummary.totalCount) + " песен ", 1)) : G("", !0),
			U("div", zm, [U("div", Bm, [e.model.hasCover ? (V(), H("img", {
				key: 0,
				"data-sbsong-cover": e.model.id,
				alt: "Обложка песни " + e.model.title
			}, null, 8, Vm)) : e.model.coverUrl ? (V(), H("img", {
				key: 1,
				src: e.model.coverUrl,
				alt: "Обложка песни " + e.model.title,
				style: { display: "block" }
			}, null, 8, Hm)) : (V(), H("span", Um, "♫"))]), U("div", null, [
				U("p", Wm, O(e.model.artist), 1),
				U("p", Gm, [e.model.genre ? (V(), H("span", Km, O(e.model.genre), 1)) : G("", !0), e.model.album ? (V(), H("span", qm, O(e.model.album), 1)) : G("", !0)]),
				e.model.description ? (V(), H("p", Jm, O(e.model.description), 1)) : G("", !0),
				U("div", Ym, [e.model.hasPlayableAudio ? (V(), H("audio", Xm)) : (V(), H("p", Zm, "Аудио ещё не добавлено. Добавь первую версию в этой карточке."))]),
				ca(Fm, {
					"song-id": e.model.id,
					versions: e.model.versions,
					"playing-label": e.model.playingLabel,
					"compare-open": e.model.compareOpen,
					"compare-a-id": e.model.compareAId,
					"compare-b-id": e.model.compareBId
				}, null, 8, [
					"song-id",
					"versions",
					"playing-label",
					"compare-open",
					"compare-a-id",
					"compare-b-id"
				]),
				U("div", Qm, [
					U("button", {
						type: "button",
						class: "sbsong-main-btn",
						"data-sbsong-action": "share",
						"data-id": e.model.id
					}, "🔗 Поделиться ссылкой", 8, $m),
					e.model.hasAudio ? (V(), H("button", {
						key: 0,
						type: "button",
						"data-sbsong-action": "share-file",
						"data-id": e.model.id
					}, "Отправить аудиофайл", 8, eh)) : G("", !0),
					e.model.listenUrl ? (V(), H("a", {
						key: 1,
						href: e.model.listenUrl,
						target: "_blank",
						rel: "noopener noreferrer"
					}, "Открыть публичную запись ↗", 8, th)) : G("", !0),
					U("button", {
						type: "button",
						"data-sbsong-action": "producer",
						"data-id": e.model.id
					}, "🎛 Мастер", 8, nh),
					U("button", {
						type: "button",
						"data-sbsong-action": "edit",
						"data-id": e.model.id
					}, "Изменить", 8, rh),
					U("button", {
						type: "button",
						class: "sbsong-danger",
						"data-sbsong-action": "delete",
						"data-id": e.model.id
					}, "Удалить", 8, ih)
				]),
				e.model.confirmDelete ? (V(), H("div", ah, [
					r[1] ||= U("strong", null, "Удалить карточку вместе с локальными файлами?", -1),
					U("button", {
						type: "button",
						"data-sbsong-action": "delete-confirm",
						"data-id": e.model.id
					}, "Да, удалить", 8, oh),
					r[2] ||= U("button", {
						type: "button",
						"data-sbsong-action": "delete-cancel"
					}, "Отмена", -1)
				])) : G("", !0)
			])])
		]));
	}
};
// src/vue/account/legacySongDetailBridge.js
function ch({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SONG_DETAIL, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Q({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-song-detail"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, sh, {
			api: t,
			model: r
		})
	});
}
// src/vue/account/SongEditor.vue
var lh = {
	id: "sbsong-form",
	class: "sbsong-form-panel"
}, uh = { class: "sbsong-subhead" }, dh = {
	id: "sbsong-save-form",
	class: "sbsong-form"
}, fh = { class: "sbsong-form-columns" }, ph = { class: "sbsong-field" }, mh = { class: "sbsong-artist-field" }, hh = {
	class: "sbsong-field",
	for: "sbsong-artist-input"
}, gh = ["aria-expanded"], _h = {
	id: "sbsong-artist-options",
	class: "sbsong-artist-options",
	role: "listbox",
	"aria-label": "Список артистов"
}, vh = ["onClick"], yh = {
	key: 0,
	class: "sbsong-artist-hint"
}, bh = {
	key: 1,
	class: "sbsong-artist-hint"
}, xh = { class: "sbsong-genre-field" }, Sh = {
	class: "sbsong-field",
	for: "sbsong-genre-input"
}, Ch = ["aria-expanded"], wh = ["aria-expanded"], Th = {
	id: "sbsong-genre-options",
	class: "sbsong-genre-options",
	role: "region",
	"aria-label": "Выбор жанра из Академии"
}, Eh = { class: "sbsong-genre-picker-head" }, Dh = ["value"], Oh = {
	id: "sbsong-genre-results",
	class: "sbsong-genre-results",
	role: "listbox",
	"aria-label": "Жанры и поджанры"
}, kh = ["aria-label"], Ah = { class: "sbsong-genre-group-title" }, jh = ["onClick"], Mh = {
	key: 0,
	class: "sbsong-genre-hint"
}, Nh = { class: "sbsong-field" }, Ph = { class: "sbsong-field" }, Fh = { class: "sbsong-form-columns" }, Ih = { class: "sbsong-field" }, Lh = {
	class: "sbsong-cover-auto",
	"aria-live": "polite"
}, Rh = { id: "sbsong-cover-status" }, zh = { class: "sbsong-form-columns" }, Bh = { class: "sbsong-field" }, Vh = { class: "sbsong-field" }, Hh = { class: "sbsong-field" }, Uh = {
	__name: "SongEditor",
	props: {
		api: {
			type: Object,
			required: !0
		},
		model: {
			type: Object,
			required: !0
		}
	},
	setup(e) {
		let t = e, n = /* @__PURE__ */ Wt({
			title: t.model.title,
			artist: t.model.artist,
			genre: t.model.genre,
			album: t.model.album,
			description: t.model.description,
			audioUrl: t.model.audioUrl,
			listenUrl: t.model.listenUrl,
			coverUrl: t.model.coverUrl
		}), r = /* @__PURE__ */ N(!1), i = /* @__PURE__ */ N(!1), a = /* @__PURE__ */ N(t.api.artistChoices()), o = /* @__PURE__ */ N(!1), s = /* @__PURE__ */ N(!1), c = /* @__PURE__ */ N("Все"), l = /* @__PURE__ */ N(t.api.genreChoices()), u = /* @__PURE__ */ N(t.api.genreFamilies()), d = (e) => String(e || "").normalize("NFKC").toLocaleLowerCase("ru"), f = K(() => {
			let e = d(n.artist);
			return (i.value ? a.value : a.value.filter((t) => d(t.name).includes(e))).slice(0, 40);
		}), p = K(() => i.value ? a.value.length > 40 : a.value.filter((e) => d(e.name).includes(d(n.artist))).length > 40), m = K(() => {
			let e = s.value ? "" : d(n.genre.trim());
			return l.value.filter((t) => (c.value === "Все" || t.family === c.value) && (!e || d(t.name + " " + t.family).includes(e)));
		}), h = K(() => u.value.map((e) => ({
			name: e,
			genres: m.value.filter((t) => t.family === e)
		})).filter((e) => e.genres.length));
		function g() {
			t.api.saveArtist(n.artist) && (a.value = t.api.artistChoices(), r.value = !1);
		}
		function _(e) {
			n.artist = e, r.value = !1, i.value = !1;
		}
		function v(e) {
			n.genre = e, o.value = !1, s.value = !1, c.value = "Все";
		}
		function y() {
			i.value = !0, r.value = !r.value;
		}
		function b() {
			let e = !o.value;
			o.value = e, s.value = e, e && (c.value = "Все");
		}
		function x(e) {
			e.target?.closest?.("#sb-vue-song-editor .sbsong-artist-field") || (r.value = !1), e.target?.closest?.("#sb-vue-song-editor .sbsong-genre-field") || (o.value = !1);
		}
		return R(() => {
			document.addEventListener("pointerdown", x), On(() => t.api.hydrateCover());
		}), Sr(() => document.removeEventListener("pointerdown", x)), (t, d) => (V(), H("section", lh, [U("div", uh, [U("h2", null, O(e.model.editId ? "Изменить песню" : "Новая песня"), 1), d[16] ||= U("button", {
			type: "button",
			"data-sbsong-action": "cancel"
		}, "Закрыть ×", -1)]), U("form", dh, [
			U("div", fh, [
				U("label", ph, [d[17] ||= U("span", null, "Название *", -1), I(U("input", {
					"onUpdate:modelValue": d[0] ||= (e) => n.title = e,
					type: "text",
					name: "title",
					maxlength: "120",
					placeholder: "Название песни"
				}, null, 512), [[q, n.title]])]),
				U("div", mh, [
					U("label", hh, [d[18] ||= U("span", null, "Исполнитель / проект", -1), I(U("input", {
						id: "sbsong-artist-input",
						"onUpdate:modelValue": d[1] ||= (e) => n.artist = e,
						name: "artist",
						type: "text",
						maxlength: "120",
						placeholder: "Поиск или новое имя артиста",
						autocomplete: "off",
						"aria-autocomplete": "list",
						"aria-expanded": String(r.value),
						"aria-controls": "sbsong-artist-options",
						onFocus: d[2] ||= (e) => {
							r.value = !0, i.value = !1;
						},
						onInput: d[3] ||= (e) => {
							r.value = !0, i.value = !1;
						},
						onKeydown: d[4] ||= qo(Go((e) => r.value = !1, ["prevent"]), ["esc"])
					}, null, 40, gh), [[q, n.artist]])]),
					U("div", { class: "sbsong-artist-shortcuts" }, [U("button", {
						type: "button",
						onClick: y
					}, "▾ Выбрать из списка"), U("button", {
						type: "button",
						onClick: g
					}, "+ Сохранить артиста")]),
					I(U("div", _h, [
						(V(!0), H(B, null, z(f.value, (e) => (V(), H("button", {
							key: e.name,
							type: "button",
							role: "option",
							class: "sbsong-artist-option",
							onClick: (t) => _(e.name)
						}, [U("strong", null, O(e.name), 1), U("small", null, O(e.origin), 1)], 8, vh))), 128)),
						p.value ? (V(), H("p", yh, "Уточни поиск, чтобы увидеть остальные варианты.")) : G("", !0),
						f.value.length ? G("", !0) : (V(), H("p", bh, O(a.value.length ? "Совпадений нет. Нового артиста можно сохранить кнопкой выше." : "Список пуст. Введи имя и сохрани первого артиста."), 1))
					], 512), [[eo, r.value]])
				]),
				U("div", xh, [
					U("label", Sh, [d[19] ||= U("span", null, "Жанр", -1), I(U("input", {
						id: "sbsong-genre-input",
						"onUpdate:modelValue": d[5] ||= (e) => n.genre = e,
						name: "genre",
						type: "text",
						maxlength: "80",
						placeholder: "Найти жанр или ввести свой",
						autocomplete: "off",
						"aria-autocomplete": "list",
						"aria-expanded": String(o.value),
						"aria-controls": "sbsong-genre-results",
						onFocus: d[6] ||= (e) => {
							o.value = !0, s.value = !1;
						},
						onInput: d[7] ||= (e) => {
							o.value = !0, s.value = !1, c.value = "Все";
						},
						onKeydown: d[8] ||= qo(Go((e) => o.value = !1, ["prevent"]), ["esc"])
					}, null, 40, Ch), [[q, n.genre]])]),
					U("button", {
						type: "button",
						class: "sbsong-genre-toggle",
						"aria-controls": "sbsong-genre-options",
						"aria-expanded": String(o.value),
						onClick: b
					}, "▾ Выбрать из Академии", 8, wh),
					I(U("div", Th, [U("div", Eh, [
						d[21] ||= U("label", { for: "sbsong-genre-family" }, "Направление", -1),
						I(U("select", {
							id: "sbsong-genre-family",
							"onUpdate:modelValue": d[9] ||= (e) => c.value = e,
							"aria-label": "Фильтр по направлению",
							onChange: d[10] ||= (e) => s.value = !0
						}, [d[20] ||= U("option", { value: "Все" }, "Все направления", -1), (V(!0), H(B, null, z(u.value, (e) => (V(), H("option", {
							key: e,
							value: e
						}, O(e), 9, Dh))), 128))], 544), [[Ro, c.value]]),
						U("small", null, O(m.value.length) + " из " + O(l.value.length), 1)
					]), U("div", Oh, [(V(!0), H(B, null, z(h.value, (e) => (V(), H("div", {
						key: e.name,
						class: "sbsong-genre-group",
						role: "group",
						"aria-label": e.name
					}, [U("div", Ah, [W(O(e.name) + " ", 1), U("span", null, O(e.genres.length), 1)]), (V(!0), H(B, null, z(e.genres, (e) => (V(), H("button", {
						key: e.id,
						type: "button",
						class: "sbsong-genre-option",
						role: "option",
						onClick: (t) => v(e.name)
					}, [U("span", null, O(e.name), 1)], 8, jh))), 128))], 8, kh))), 128)), m.value.length ? G("", !0) : (V(), H("p", Mh, O(l.value.length ? "Не найдено. Можно ввести свой жанр вручную." : "Каталог Академии пока недоступен. Введи жанр вручную."), 1))])], 512), [[eo, o.value]])
				]),
				U("label", Nh, [d[22] ||= U("span", null, "Альбом / релиз", -1), I(U("input", {
					"onUpdate:modelValue": d[11] ||= (e) => n.album = e,
					type: "text",
					name: "album",
					maxlength: "120",
					placeholder: "Название альбома"
				}, null, 512), [[q, n.album]])])
			]),
			U("label", Ph, [d[23] ||= U("span", null, "Описание", -1), I(U("textarea", {
				"onUpdate:modelValue": d[12] ||= (e) => n.description = e,
				name: "description",
				maxlength: "700",
				rows: "3",
				placeholder: "История, настроение или заметки"
			}, null, 512), [[q, n.description]])]),
			U("div", Fh, [U("label", Ih, [U("span", null, O(e.model.hasAudio ? "Добавить новую аудиоверсию" : "Загрузить аудиофайл (MP3, M4A, WAV и другие)"), 1), d[24] ||= U("input", {
				name: "audio",
				type: "file",
				accept: "audio/*,.mp3,.wav,.wave,.m4a,.aac,.flac,.ogg,.opus"
			}, null, -1)]), d[25] ||= U("label", { class: "sbsong-field" }, [U("span", null, "Обложка вручную (необязательно)"), U("input", {
				name: "cover",
				type: "file",
				accept: "image/png,image/jpeg,image/webp,image/gif"
			})], -1)]),
			U("div", Lh, [d[28] ||= U("div", { class: "sbsong-cover-preview-figure" }, [U("img", {
				id: "sbsong-cover-preview-img",
				alt: "Предпросмотр обложки",
				hidden: ""
			}), U("span", {
				id: "sbsong-cover-preview-placeholder",
				"aria-hidden": "true"
			}, "♫")], -1), U("div", null, [
				d[26] ||= U("strong", null, "Обложка из аудиофайла", -1),
				U("p", Rh, O(e.model.hasCover ? "Загружаю сохранённую обложку…" : "Выбери MP3, M4A или FLAC — попробую найти обложку автоматически"), 1),
				d[27] ||= U("small", null, "Ручная обложка имеет приоритет, если ты её выберешь.", -1)
			])]),
			U("div", zh, [
				U("label", Bh, [d[29] ||= U("span", null, "Прямая ссылка на MP3 (если есть)", -1), I(U("input", {
					"onUpdate:modelValue": d[13] ||= (e) => n.audioUrl = e,
					type: "text",
					name: "audioUrl",
					maxlength: "700",
					placeholder: "https://.../song.mp3"
				}, null, 512), [[q, n.audioUrl]])]),
				U("label", Vh, [d[30] ||= U("span", null, "Публичная страница песни", -1), I(U("input", {
					"onUpdate:modelValue": d[14] ||= (e) => n.listenUrl = e,
					type: "text",
					name: "listenUrl",
					maxlength: "700",
					placeholder: "https://suno.com/..."
				}, null, 512), [[q, n.listenUrl]])]),
				U("label", Hh, [d[31] ||= U("span", null, "Публичная обложка (по желанию)", -1), I(U("input", {
					"onUpdate:modelValue": d[15] ||= (e) => n.coverUrl = e,
					type: "text",
					name: "coverUrl",
					maxlength: "700",
					placeholder: "https://.../cover.jpg"
				}, null, 512), [[q, n.coverUrl]])])
			]),
			d[32] ||= U("p", { class: "sbsong-form-help" }, " MP3, M4A, WAV, FLAC и другие аудиофайлы сохраняются локально (IndexedDB): WAV — до 500 МБ, остальные — до 150 МБ при наличии свободной памяти браузера. Новая загрузка добавляет версию, не заменяя старую. Обложка ищется в MP3, M4A и FLAC; для WAV её обычно добавляют вручную. Локальное аудио по общей ссылке не передаётся. ", -1),
			d[33] ||= U("div", { class: "sbsong-form-actions" }, [U("button", {
				type: "submit",
				class: "sbsong-main-btn",
				id: "sbsong-submit"
			}, "Сохранить песню"), U("button", {
				type: "button",
				"data-sbsong-action": "cancel"
			}, "Отмена")], -1)
		])]));
	}
};
// src/vue/account/legacySongEditorBridge.js
function Wh({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SONG_EDITOR, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Q({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-song-editor"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, Uh, {
			api: t,
			model: r
		})
	});
}
// src/vue/account/ArtistManager.vue
var Gh = {
	id: "sbsong-artist-manager",
	class: "sbsong-artist-manager",
	"data-sb-vue-artist-manager": ""
}, Kh = {
	key: 0,
	class: "sbsong-artist-hint"
}, qh = {
	key: 1,
	class: "sbsong-artist-hint",
	"data-sb-vue-dna-recap": ""
}, Jh = { id: "sbsong-artist-manager-results" }, Yh = ["data-id", "aria-label"], Xh = {
	key: 0,
	class: "sbsong-artist-hint"
}, Zh = {
	__name: "ArtistManager",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ N(t.model.filter || ""), r = (e) => String(e || "").normalize("NFKC").toLocaleLowerCase("ru"), i = K(() => t.model.artists.filter((e) => r(e.name).includes(r(n.value)))), a = Z();
		return L(() => [t.model, i.value.length], ([e, t]) => a.publishArtistManagerSummary(e, t), { immediate: !0 }), (t, r) => (V(), H("section", Gh, [
			r[1] ||= U("div", { class: "sbsong-subhead" }, [U("h2", null, "Мои артисты"), U("button", {
				type: "button",
				"data-sbsong-action": "artists-manage"
			}, "Закрыть ×")], -1),
			r[2] ||= U("p", null, "Создавай свой список исполнителей и музыкальных проектов. Артисты из «ДНК артиста» и сохранённых песен также доступны при выборе. Удаление из списка не меняет существующие песни.", -1),
			e.model.dnaCount ? (V(), H("p", Kh, " Профилей ДНК артиста доступно для выбора: " + O(e.model.dnaCount) + ". Они не удаляются при изменении этого списка. ", 1)) : G("", !0),
			F(a).artistDnaSummary.ready ? (V(), H("p", qh, " Последний просмотр ДНК артиста: " + O(F(a).artistDnaSummary.profileCount) + " профилей ", 1)) : G("", !0),
			r[3] ||= U("div", { class: "sbsong-artist-manager-new" }, [U("input", {
				id: "sbsong-artist-manager-add",
				type: "text",
				maxlength: "120",
				placeholder: "Имя артиста или проекта",
				"aria-label": "Новый артист"
			}), U("button", {
				type: "button",
				class: "sbsong-main-btn",
				"data-sbsong-action": "artist-manager-add"
			}, " + Добавить артиста ")], -1),
			I(U("input", {
				"onUpdate:modelValue": r[0] ||= (e) => n.value = e,
				id: "sbsong-artist-manager-filter",
				type: "search",
				placeholder: "Фильтр по имени…",
				"aria-label": "Фильтр моих артистов"
			}, null, 512), [[q, n.value]]),
			U("div", Jh, [(V(!0), H(B, null, z(i.value, (e) => (V(), H("div", {
				key: e.id,
				class: "sbsong-artist-entry"
			}, [U("span", null, O(e.name), 1), U("button", {
				type: "button",
				"data-sbsong-action": "artist-remove",
				"data-id": e.id,
				"aria-label": "Удалить артиста " + e.name
			}, "Удалить", 8, Yh)]))), 128)), i.value.length ? G("", !0) : (V(), H("p", Xh, O(e.model.artists.length ? "Ничего не найдено." : "Пока нет добавленных вручную артистов."), 1))])
		]));
	}
};
// src/vue/account/legacyArtistManagerBridge.js
function Qh({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ARTIST_MANAGER, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Q({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-artist-manager"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, Zh, { model: n })
	});
}
// src/vue/account/ArtistDNA.vue
var $h = {
	key: 0,
	class: "sb-dna-summary",
	"data-sb-vue-artist-manager-recap": ""
}, eg = { key: 1 }, tg = {
	key: 0,
	class: "sb-dna-grid"
}, ng = ["data-id"], rg = { class: "sb-dna-cardimg" }, ig = ["src"], ag = {
	key: 1,
	class: "sb-dna-empty"
}, og = {
	key: 2,
	class: "sb-dna-detail"
}, sg = { class: "sb-dna-actions" }, cg = ["data-id"], lg = ["data-id"], ug = ["data-id"], dg = { class: "sb-dna-hero" }, fg = { class: "sb-dna-portrait" }, pg = ["src"], mg = { class: "sb-dna-facts" }, hg = {
	key: 0,
	class: "sb-dna-restrictions"
}, gg = { class: "sb-dna-descr" }, _g = { class: "sb-dna-style" }, vg = { class: "sb-dna-actions" }, yg = ["data-id"], bg = ["data-id"], xg = { class: "sb-dna-related" }, Sg = ["data-id"], Cg = { key: 1 }, wg = {
	__name: "ArtistDNA",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = Z();
		return L(() => t.model, (e) => n.publishArtistDnaSummary(e), { immediate: !0 }), (t, r) => (V(), H(B, null, [F(n).artistManagerSummary.ready ? (V(), H("div", $h, [U("div", null, [U("b", null, O(F(n).artistManagerSummary.artistCount), 1), r[0] ||= U("span", null, "В ручном списке артистов", -1)])])) : G("", !0), e.model.detail ? (V(), H("div", og, [
			U("div", sg, [
				r[2] ||= U("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "dna-list"
				}, "← Все артисты", -1),
				U("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "dna-apply",
					"data-id": e.model.detail.id
				}, "В Suno Studio", 8, cg),
				U("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "dna-edit",
					"data-id": e.model.detail.id
				}, "Изменить", 8, lg),
				U("button", {
					type: "button",
					class: "btn danger small",
					"data-action": "dna-delete",
					"data-id": e.model.detail.id
				}, "Удалить", 8, ug)
			]),
			U("div", dg, [U("div", fg, [e.model.detail.portrait ? (V(), H("img", {
				key: 0,
				src: e.model.detail.portrait,
				alt: "Портрет артиста",
				loading: "lazy"
			}, null, 8, pg)) : (V(), H(B, { key: 1 }, [W("♫")], 64))]), U("div", null, [
				r[3] ||= U("span", null, "МУЗЫКАЛЬНАЯ ИДЕНТИЧНОСТЬ", -1),
				U("h2", null, O(e.model.detail.name), 1),
				U("p", null, O(e.model.detail.subtitle), 1)
			])]),
			U("div", mg, [(V(!0), H(B, null, z(e.model.detail.facts, (e) => (V(), H("div", {
				key: e.label,
				class: "sb-dna-fact"
			}, [U("span", null, O(e.label), 1), U("strong", null, O(e.value), 1)]))), 128))]),
			(V(!0), H(B, null, z(e.model.detail.textFields, (e) => (V(), H("section", {
				key: e.label,
				class: "sb-dna-descr"
			}, [U("h3", null, O(e.label), 1), U("p", null, O(e.value), 1)]))), 128)),
			e.model.detail.forbids.length ? (V(), H("div", hg, [r[4] ||= U("strong", null, "Запреты:", -1), (V(!0), H(B, null, z(e.model.detail.forbids, (e) => (V(), H("span", { key: e }, O(e), 1))), 128))])) : G("", !0),
			U("section", gg, [
				r[5] ||= U("h3", null, "Промпт для Suno Style", -1),
				U("div", _g, O(e.model.detail.style), 1),
				U("div", vg, [U("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "dna-copy",
					"data-id": e.model.detail.id
				}, "Копировать Style", 8, yg), U("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "dna-apply",
					"data-id": e.model.detail.id
				}, "Применить в Suno Studio", 8, bg)])
			]),
			U("div", xg, [U("h3", null, "Связанные паспорта треков (" + O(e.model.detail.related.length) + ")", 1), e.model.detail.related.length ? (V(!0), H(B, { key: 0 }, z(e.model.detail.related, (e) => (V(), H("button", {
				key: e.id,
				type: "button",
				class: "sb-dna-tracklink",
				"data-action": "dna-track",
				"data-id": e.id
			}, [U("strong", null, O(e.title), 1), U("span", null, O(e.status) + " →", 1)], 8, Sg))), 128)) : (V(), H("p", Cg, "Пока нет привязанных треков. В «Паспорте трека» можно выбрать этого артиста."))])
		])) : (V(), H("div", eg, [e.model.profiles.length ? (V(), H("div", tg, [(V(!0), H(B, null, z(e.model.profiles, (e) => (V(), H("button", {
			key: e.id,
			type: "button",
			class: "sb-dna-card",
			"data-action": "dna-open",
			"data-id": e.id
		}, [
			U("div", rg, [e.portrait ? (V(), H("img", {
				key: 0,
				src: e.portrait,
				alt: "",
				loading: "lazy"
			}, null, 8, ig)) : (V(), H(B, { key: 1 }, [W("♫")], 64))]),
			U("div", null, [
				U("strong", null, O(e.name), 1),
				U("span", null, O(e.genre), 1),
				U("small", null, O(e.timbre), 1)
			]),
			r[1] ||= U("span", { class: "sb-dna-arrow" }, "→", -1)
		], 8, ng))), 128))])) : (V(), H("div", ag, " Здесь будут музыкальные персонажи со своим вокалом, инструментами, стилем и визуальным образом. Создай первый профиль. "))]))], 64));
	}
};
// src/vue/account/legacyArtistDNABridge.js
function Tg({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_DNA, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Q({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-dna-view"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, wg, { model: n })
	});
}
// src/vue/account/ArtistDNAEditor.vue
var Eg = {
	id: "dna-editor",
	class: "panel sb-dna-editor",
	"data-sb-vue-dna-editor": ""
}, Dg = { class: "sb-dna-formheader" }, Og = { class: "sb-dna-fields" }, kg = { class: "field" }, Ag = { class: "field" }, jg = ["value"], Mg = { class: "field" }, Ng = ["value"], Pg = { class: "field" }, Fg = { class: "field" }, Ig = { class: "field" }, Lg = {
	key: 0,
	class: "sb-dna-fields"
}, Rg = { class: "field" }, zg = { class: "field" }, Bg = { class: "field" }, Vg = ["for"], Hg = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"rows"
], Ug = { class: "sb-dna-checkboxes" }, Wg = ["id", "onUpdate:modelValue"], Gg = { class: "field" }, Kg = ["for"], qg = [
	"id",
	"onUpdate:modelValue",
	"rows",
	"maxlength"
], Jg = { class: "field" }, Yg = { class: "sb-dna-previewbox" }, Xg = { id: "dna-style-preview" }, Zg = { id: "dna-style-count" }, Qg = {
	__name: "ArtistDNAEditor",
	props: {
		model: {
			type: Object,
			required: !0
		},
		api: {
			type: Object,
			required: !0
		}
	},
	setup(e) {
		let t = e, n = /* @__PURE__ */ Wt({ ...t.model.fields }), r = K(() => t.api.stylePreview(n)), i = [
			{
				id: "timbre",
				key: "timbre",
				label: "Тембр голоса",
				max: 350,
				rows: 3
			},
			{
				id: "delivery",
				key: "delivery",
				label: "Манера исполнения",
				max: 350,
				rows: 3
			},
			{
				id: "mood",
				key: "mood",
				label: "Настроение и энергетика",
				max: 250,
				rows: 3
			},
			{
				id: "instruments",
				key: "instruments",
				label: "Фирменные инструменты и грув",
				max: 550,
				rows: 3
			},
			{
				id: "production",
				key: "production",
				label: "Продакшн и звучание",
				max: 500,
				rows: 3
			},
			{
				id: "signature",
				key: "signature",
				label: "Узнаваемая музыкальная особенность",
				max: 450,
				rows: 3
			}
		], a = [
			{
				id: "whisper",
				key: "noWhisper",
				label: "Без шёпота"
			},
			{
				id: "rasp",
				key: "noRasp",
				label: "Без хрипотцы"
			},
			{
				id: "live",
				key: "noLive",
				label: "Без шума публики и концерта"
			},
			{
				id: "choir",
				key: "noChoir",
				label: "Без хора"
			}
		], o = [{
			id: "themes",
			key: "themes",
			label: "Типичные темы песен (не добавляются в Style автоматически)",
			max: 800,
			rows: 3
		}, {
			id: "visual",
			key: "visual",
			label: "Внешность, одежда, обложки, палитра",
			max: 1500,
			rows: 3
		}];
		return (t, s) => (V(), H("div", Eg, [
			U("div", Dg, [U("div", null, [U("h2", null, O(e.model.editing ? "Редактирование ДНК" : "Новый артист"), 1), s[10] ||= U("p", null, "Сохрани характер звучания — он будет доступен в Suno Studio и «Паспорте трека».", -1)]), s[11] ||= U("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "dna-cancel"
			}, "Закрыть", -1)]),
			U("div", Og, [
				U("div", kg, [s[12] ||= U("label", { for: "dna-name" }, "Имя артиста *", -1), I(U("input", {
					id: "dna-name",
					"onUpdate:modelValue": s[0] ||= (e) => n.name = e,
					maxlength: "120",
					placeholder: "Название музыкального проекта"
				}, null, 512), [[q, n.name]])]),
				U("div", Ag, [s[13] ||= U("label", { for: "dna-project" }, "Связанный проект", -1), I(U("select", {
					id: "dna-project",
					"onUpdate:modelValue": s[1] ||= (e) => n.projectId = e
				}, [(V(!0), H(B, null, z(e.model.projects, (e) => (V(), H("option", {
					key: e.id,
					value: e.id
				}, O(e.title), 9, jg))), 128))], 512), [[Ro, n.projectId]])]),
				U("div", Mg, [s[14] ||= U("label", { for: "dna-genre" }, "Основной жанр", -1), I(U("select", {
					id: "dna-genre",
					"onUpdate:modelValue": s[2] ||= (e) => n.genre = e
				}, [(V(!0), H(B, null, z(e.model.genres, (e) => (V(), H("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, Ng))), 128))], 512), [[Ro, n.genre]])]),
				U("div", Pg, [s[15] ||= U("label", { for: "dna-othergenres" }, "Дополнительные жанры", -1), I(U("input", {
					id: "dna-othergenres",
					"onUpdate:modelValue": s[3] ||= (e) => n.otherGenres = e,
					maxlength: "240",
					placeholder: "Например, pop, R&B, electropop"
				}, null, 512), [[q, n.otherGenres]])]),
				U("div", Fg, [s[17] ||= U("label", { for: "dna-vocal" }, "Тип вокала", -1), I(U("select", {
					id: "dna-vocal",
					"onUpdate:modelValue": s[4] ||= (e) => n.vocal = e
				}, [...s[16] ||= [
					U("option", { value: "male" }, "Мужской", -1),
					U("option", { value: "female" }, "Женский", -1),
					U("option", { value: "duet" }, "Дуэт", -1)
				]], 512), [[Ro, n.vocal]])]),
				U("div", Ig, [s[19] ||= U("label", { for: "dna-language" }, "Язык песни", -1), I(U("select", {
					id: "dna-language",
					"onUpdate:modelValue": s[5] ||= (e) => n.language = e
				}, [...s[18] ||= [
					U("option", { value: "Russian" }, "Русский", -1),
					U("option", { value: "English" }, "Английский", -1),
					U("option", { value: "Spanish" }, "Испанский", -1),
					U("option", { value: "Kazakh" }, "Казахский", -1)
				]], 512), [[Ro, n.language]])])
			]),
			s[24] ||= U("h3", { class: "sb-dna-formsection" }, "Голос и музыкальный почерк", -1),
			(V(), H(B, null, z(i, (e) => (V(), H(B, { key: e.id }, [e.id === "mood" ? (V(), H("div", Lg, [U("div", Rg, [s[20] ||= U("label", { for: "dna-tempo-min" }, "Темп от (BPM)", -1), I(U("input", {
				id: "dna-tempo-min",
				"onUpdate:modelValue": s[6] ||= (e) => n.tempoMin = e,
				maxlength: "3",
				placeholder: "Например, 90"
			}, null, 512), [[q, n.tempoMin]])]), U("div", zg, [s[21] ||= U("label", { for: "dna-tempo-max" }, "Темп до (BPM)", -1), I(U("input", {
				id: "dna-tempo-max",
				"onUpdate:modelValue": s[7] ||= (e) => n.tempoMax = e,
				maxlength: "3",
				placeholder: "Например, 120"
			}, null, 512), [[q, n.tempoMax]])])])) : G("", !0), U("div", Bg, [U("label", { for: "dna-" + e.id }, O(e.label), 9, Vg), I(U("textarea", {
				id: "dna-" + e.id,
				"onUpdate:modelValue": (t) => n[e.key] = t,
				maxlength: e.max,
				rows: e.rows
			}, null, 8, Hg), [[q, n[e.key]]])])], 64))), 64)),
			s[25] ||= U("h3", { class: "sb-dna-formsection" }, "Запреты и ограничения", -1),
			U("div", Ug, [(V(), H(B, null, z(a, (e) => U("label", { key: e.id }, [I(U("input", {
				id: "dna-" + e.id,
				"onUpdate:modelValue": (t) => n[e.key] = t,
				type: "checkbox"
			}, null, 8, Wg), [[Io, n[e.key]]]), W(" " + O(e.label), 1)])), 64))]),
			U("div", Gg, [s[22] ||= U("label", { for: "dna-extra" }, "Дополнительные требования к аранжировке", -1), I(U("textarea", {
				id: "dna-extra",
				"onUpdate:modelValue": s[8] ||= (e) => n.extra = e,
				rows: "3",
				maxlength: "650"
			}, null, 512), [[q, n.extra]])]),
			s[26] ||= U("h3", { class: "sb-dna-formsection" }, "Творческий образ", -1),
			(V(), H(B, null, z(o, (e) => U("div", {
				key: e.id,
				class: "field"
			}, [U("label", { for: "dna-" + e.id }, O(e.label), 9, Kg), I(U("textarea", {
				id: "dna-" + e.id,
				"onUpdate:modelValue": (t) => n[e.key] = t,
				rows: e.rows,
				maxlength: e.max
			}, null, 8, qg), [[q, n[e.key]]])])), 64)),
			U("div", Jg, [s[23] ||= U("label", { for: "dna-portrait" }, "Ссылка на портрет (HTTPS)", -1), I(U("input", {
				id: "dna-portrait",
				"onUpdate:modelValue": s[9] ||= (e) => n.portrait = e,
				maxlength: "2000",
				placeholder: "https://…"
			}, null, 512), [[q, n.portrait]])]),
			s[27] ||= U("h3", { class: "sb-dna-formsection" }, "Промпт ДНК для Suno", -1),
			U("div", Yg, [U("div", Xg, O(r.value), 1), U("span", Zg, O(r.value.length) + " / 1000", 1)]),
			s[28] ||= U("div", { class: "sb-dna-actions" }, [U("button", {
				type: "button",
				class: "btn primary",
				"data-action": "dna-save"
			}, "Сохранить ДНК артиста"), U("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "dna-copy-form"
			}, "Копировать промпт")], -1),
			s[29] ||= U("p", { class: "sb-dna-muted" }, " Описания и запреты — подсказки для генерации, а не гарантия идентичного голоса. Все данные пока хранятся локально в браузере. ", -1)
		]));
	}
};
// src/vue/account/legacyArtistDNAEditorBridge.js
function $g({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_DNA_EDITOR, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Q({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-dna-editor"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, Qg, {
			model: r,
			api: t
		})
	});
}
// src/vue/account/AccountSettings.vue
var e_ = ["data-sb-preferred-theme", "data-sb-applied-theme"], t_ = { class: "sbs-layout" }, n_ = { class: "sbs-main-column" }, r_ = { class: "sbs-panel" }, i_ = {
	class: "sbs-field sbs-theme-field",
	for: "sbs-theme"
}, a_ = ["value"], o_ = ["for"], s_ = { class: "sbs-option-text" }, c_ = { class: "sbs-switch" }, l_ = [
	"id",
	"onUpdate:modelValue",
	"data-sbs-setting",
	"aria-label"
], u_ = { class: "sbs-panel" }, d_ = {
	class: "sbs-field",
	for: "sbs-start"
}, f_ = ["value"], p_ = { class: "sbs-panel" }, m_ = {
	class: "sbs-field",
	for: "sbs-name"
}, h_ = { class: "sbs-side-column" }, g_ = { class: "sbs-panel sbs-reset-panel" }, __ = {
	key: 0,
	class: "sbs-confirm"
}, v_ = {
	key: 1,
	type: "button",
	class: "sbs-secondary",
	"data-sbs-action": "reset"
}, y_ = ["hidden"], b_ = {
	__name: "AccountSettings",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = Z(), r = /* @__PURE__ */ Wt({ ...t.model.settings });
		L(() => n.appearance, (e) => {
			for (let t of [
				"theme",
				"compact",
				"largeText",
				"reduceMotion",
				"startPage"
			]) r[t] = e[t];
		});
		let i = /* @__PURE__ */ Wt({ value: t.model.name }), a = [
			{
				key: "compact",
				title: "Компактный интерфейс",
				desc: "Уменьшает отступы и высоту карточек. Больше материалов помещается на экране."
			},
			{
				key: "largeText",
				title: "Увеличенный текст",
				desc: "Делает основной пояснительный текст в каталогах, карточках и инструментах крупнее."
			},
			{
				key: "reduceMotion",
				title: "Меньше анимации",
				desc: "Отключает декоративные движения и плавные переходы, не влияя на воспроизведение музыки."
			}
		];
		return R(() => {
			t.model.resetPending && On(() => document.querySelector("#sb-vue-account-settings .sbs-confirm-button")?.focus());
		}), (t, o) => (V(), H("section", {
			id: "sbs-page",
			class: "sbs-page",
			"data-sb-vue-settings": "",
			"data-sb-preferred-theme": F(n).appearance.theme,
			"data-sb-applied-theme": F(n).appearance.resolvedTheme
		}, [
			o[17] ||= fa("<header class=\"sbs-heading\"><button type=\"button\" class=\"sbs-back\" data-sbs-action=\"close\">← Вернуться в кабинет</button><div class=\"sbs-eyebrow\">SUNOBOOM · ЛИЧНЫЙ КАБИНЕТ</div><div class=\"sbs-heading-row\"><div><h1>Настройки</h1><p>Настрой музыкальную мастерскую под себя. Изменения применяются сразу и сохраняются в этом браузере.</p></div><span class=\"sbs-badge\">⚙️ ПЕРСОНАЛИЗАЦИЯ</span></div></header>", 1),
			U("div", t_, [U("div", n_, [
				U("section", r_, [
					o[5] ||= U("div", { class: "sbs-panel-head" }, [U("span", {
						class: "sbs-symbol",
						"aria-hidden": "true"
					}, "🎨"), U("div", null, [U("h2", null, "Внешний вид"), U("p", null, "Удобная работа на компьютере и телефоне")])], -1),
					U("label", i_, [o[3] ||= U("span", null, "Тема приложения", -1), I(U("select", {
						id: "sbs-theme",
						"onUpdate:modelValue": o[0] ||= (e) => r.theme = e,
						"data-sbs-setting": "theme",
						"aria-label": "Тема приложения"
					}, [(V(!0), H(B, null, z(e.model.themes, (e) => (V(), H("option", {
						key: e.id,
						value: e.id
					}, O(e.title), 9, a_))), 128))], 512), [[Ro, r.theme]])]),
					o[6] ||= U("p", { class: "sbs-help sbs-theme-help" }, "Выбери палитру: тёмную, светлую, системную или одну из шести цветных тем. Изменения сохраняются.", -1),
					(V(), H(B, null, z(a, (e) => U("label", {
						key: e.key,
						class: "sbs-option",
						for: "sbs-" + e.key
					}, [U("span", s_, [U("strong", null, O(e.title), 1), U("small", null, O(e.desc), 1)]), U("span", c_, [I(U("input", {
						id: "sbs-" + e.key,
						"onUpdate:modelValue": (t) => r[e.key] = t,
						type: "checkbox",
						"data-sbs-setting": e.key,
						role: "switch",
						"aria-label": e.title
					}, null, 8, l_), [[Io, r[e.key]]]), o[4] ||= U("span", {
						class: "sbs-switch-track",
						"aria-hidden": "true"
					}, null, -1)])], 8, o_)), 64))
				]),
				U("section", u_, [
					o[8] ||= U("div", { class: "sbs-panel-head" }, [U("span", {
						class: "sbs-symbol",
						"aria-hidden": "true"
					}, "🏠"), U("div", null, [U("h2", null, "При открытии сайта"), U("p", null, "Выбери стартовый раздел SUNOBOOM")])], -1),
					U("label", d_, [o[7] ||= U("span", null, "Стартовая страница", -1), I(U("select", {
						id: "sbs-start",
						"onUpdate:modelValue": o[1] ||= (e) => r.startPage = e,
						"data-sbs-setting": "startPage"
					}, [(V(!0), H(B, null, z(e.model.pages, (e) => (V(), H("option", {
						key: e.id,
						value: e.id
					}, O(e.title), 9, f_))), 128))], 512), [[Ro, r.startPage]])]),
					o[9] ||= U("p", { class: "sbs-help" }, "Применяется при следующем открытии или обновлении сайта. Ссылки на конкретные карточки жанров сохраняют свой переход.", -1)
				]),
				U("section", p_, [
					o[11] ||= U("div", { class: "sbs-panel-head" }, [U("span", {
						class: "sbs-symbol",
						"aria-hidden": "true"
					}, "👤"), U("div", null, [U("h2", null, "Профиль"), U("p", null, "Имя отображается только в локальном кабинете")])], -1),
					U("label", m_, [o[10] ||= U("span", null, "Имя в кабинете", -1), I(U("input", {
						id: "sbs-name",
						"onUpdate:modelValue": o[2] ||= (e) => i.value = e,
						type: "text",
						maxlength: "60",
						autocomplete: "off",
						placeholder: "Твоё имя"
					}, null, 512), [[q, i.value]])]),
					o[12] ||= U("button", {
						type: "button",
						class: "sbs-primary",
						"data-sbs-action": "save-name"
					}, "Сохранить имя", -1)
				])
			]), U("aside", h_, [o[16] ||= fa("<section class=\"sbs-panel\"><div class=\"sbs-panel-head\"><span class=\"sbs-symbol\" aria-hidden=\"true\">🔒</span><div><h2>Данные и приватность</h2></div></div><p class=\"sbs-info\">Сейчас SUNOBOOM работает как локальный прототип: твои проекты и настройки сохраняются в браузере. Синхронизации между устройствами пока нет.</p><p class=\"sbs-info\">GitHub Pages остаётся публичной демонстрационной площадкой — полноценный закрытый вход по приглашениям ещё не подключён.</p><button type=\"button\" class=\"sbs-secondary\" data-sbs-action=\"backup\">↓ Перейти к резервным копиям</button></section>", 1), U("section", g_, [
				o[14] ||= U("div", { class: "sbs-panel-head" }, [U("span", {
					class: "sbs-symbol",
					"aria-hidden": "true"
				}, "↺"), U("div", null, [U("h2", null, "Сброс предпочтений")])], -1),
				o[15] ||= U("p", { class: "sbs-info" }, "Вернуть стандартные параметры отображения. Песни, проекты, избранное и имя профиля не удаляются.", -1),
				e.model.resetPending ? (V(), H("div", __, [...o[13] ||= [U("strong", null, "Сбросить настройки интерфейса?", -1), U("div", null, [U("button", {
					type: "button",
					class: "sbs-secondary",
					"data-sbs-action": "cancel-reset"
				}, "Отмена"), U("button", {
					type: "button",
					class: "sbs-confirm-button",
					"data-sbs-action": "confirm-reset"
				}, "Да, сбросить")], -1)]])) : (V(), H("button", v_, "Сбросить настройки"))
			])])]),
			U("p", {
				id: "sbs-message",
				class: "sbs-message",
				role: "status",
				"aria-live": "polite",
				hidden: !e.model.message
			}, O(e.model.message), 9, y_)
		], 8, e_));
	}
};
// src/vue/account/legacyAccountSettingsBridge.js
function x_({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SETTINGS, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Q({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-account-settings"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, b_, { model: n })
	});
}
// src/vue/player/PlayerLab.vue
var S_ = {
	class: "sbp-layout",
	"data-sb-vue-player-lab": ""
}, C_ = {
	class: "sbp-main",
	"aria-label": "Плеер"
}, w_ = {
	class: "sbp-bars",
	"aria-hidden": "true"
}, T_ = { class: "sbp-title-area" }, E_ = {
	id: "sbp-now-tag",
	class: "sbp-now-tag"
}, D_ = { id: "sbp-title" }, O_ = { id: "sbp-artist" }, k_ = {
	id: "sbp-counter",
	class: "sbp-counter"
}, A_ = {
	key: 0,
	class: "sbp-now-tag",
	"data-sb-vue-ab-recap": ""
}, j_ = { class: "sbp-progress" }, M_ = ["value", "disabled"], N_ = { class: "sbp-times" }, P_ = { id: "sbp-time-current" }, F_ = { id: "sbp-time-total" }, I_ = { class: "sbp-transport" }, L_ = ["aria-pressed"], R_ = ["aria-label", "disabled"], z_ = ["title", "aria-label"], B_ = { class: "sbp-extras" }, V_ = { class: "sbp-volume" }, H_ = {
	key: 0,
	class: "sbp-ios-volume"
}, U_ = ["value"], W_ = { id: "sbp-volume-label" }, G_ = {
	class: "sbp-speed",
	for: "sbp-rate"
}, K_ = ["value"], q_ = ["value"], J_ = { class: "sbp-side" }, Y_ = { class: "sbp-side-head" }, X_ = { id: "sbp-list-count" }, Z_ = ["disabled"], Q_ = {
	class: "sbp-track-list",
	id: "sbp-list",
	"aria-label": "Список треков"
}, $_ = ["data-sbp-item"], ev = ["data-index", "aria-label"], tv = { class: "sbp-track-index" }, nv = { class: "sbp-track-meta" }, rv = { class: "sbp-track-duration" }, iv = ["data-index", "aria-label"], av = {
	key: 0,
	class: "sbp-empty"
}, ov = {
	__name: "PlayerLab",
	props: {
		api: {
			type: Object,
			required: !0
		},
		initialModel: {
			type: Object,
			required: !0
		}
	},
	setup(e) {
		let t = e, n = /* @__PURE__ */ N(t.initialModel), r = Z();
		L(n, (e) => r.publishPlayerLabSummary(e), { immediate: !0 });
		function i() {
			let e = t.api.snapshot();
			e && (n.value = e);
		}
		R(() => {
			window.addEventListener("sunoboom:player-lab-update", i), i();
		}), Sr(() => window.removeEventListener("sunoboom:player-lab-update", i));
		let a = Array.from({ length: 37 }, (e, t) => ({
			index: t,
			height: 17 + (t * 37 + t * t * 19) % 72 + "%"
		})), o = [
			"0.75",
			"1",
			"1.25",
			"1.5",
			"2"
		];
		return (e, t) => (V(), H("div", S_, [U("section", C_, [
			U("div", { class: D(["sbp-art", { "is-playing": n.value.playing }]) }, [
				t[0] ||= U("div", { class: "sbp-art-orb" }, "♫", -1),
				U("div", w_, [(V(!0), H(B, null, z(F(a), (e) => (V(), H("i", {
					key: e.index,
					style: E({
						"--sbp-i": e.index,
						"--sbp-h": e.height
					})
				}, null, 4))), 128))]),
				t[1] ||= U("span", null, "SONIC LAB / PRIVATE PREVIEW", -1)
			], 2),
			U("div", T_, [U("div", null, [
				U("div", E_, O(n.value.nowTag), 1),
				U("h2", D_, O(n.value.title), 1),
				U("p", O_, O(n.value.artist), 1)
			]), U("span", k_, O(n.value.counter), 1)]),
			F(r).playerAbSummary.ready && F(r).playerAbSummary.readyCount ? (V(), H("p", A_, "A/B: загружено " + O(F(r).playerAbSummary.readyCount) + " из 2 · активна " + O(F(r).playerAbSummary.active), 1)) : G("", !0),
			U("div", j_, [
				t[2] ||= U("label", {
					for: "sbp-seek",
					class: "sbp-sr"
				}, "Позиция воспроизведения", -1),
				U("input", {
					id: "sbp-seek",
					type: "range",
					min: "0",
					max: "1000",
					step: "1",
					value: n.value.seekValue,
					disabled: n.value.seekDisabled,
					"aria-label": "Перемотка трека",
					style: E({ "--fill": n.value.seekValue / 10 + "%" })
				}, null, 12, M_),
				U("div", N_, [U("span", P_, O(n.value.currentTime), 1), U("span", F_, O(n.value.totalTime), 1)])
			]),
			U("div", I_, [
				U("button", {
					type: "button",
					class: D(["sbp-secondary", { "is-on": n.value.shuffle }]),
					id: "sbp-shuffle",
					"data-sbp-action": "shuffle",
					"aria-label": "Случайный порядок",
					"aria-pressed": String(n.value.shuffle),
					title: "Случайный порядок"
				}, "⤨", 10, L_),
				t[3] ||= U("button", {
					type: "button",
					class: "sbp-secondary sbp-skip",
					"data-sbp-action": "prev",
					"aria-label": "Предыдущий трек"
				}, [U("svg", {
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					focusable: "false"
				}, [U("path", {
					d: "M6 5v14",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2.5",
					"stroke-linecap": "round"
				}), U("path", {
					d: "M18 5 8 12l10 7V5Z",
					fill: "currentColor"
				})])], -1),
				U("button", {
					type: "button",
					class: "sbp-play",
					id: "sbp-play",
					"data-sbp-action": "play",
					"aria-label": n.value.playing ? "Пауза" : "Воспроизвести",
					disabled: !n.value.count
				}, O(n.value.playing ? "❚❚" : "▶"), 9, R_),
				t[4] ||= U("button", {
					type: "button",
					class: "sbp-secondary sbp-skip",
					"data-sbp-action": "next",
					"aria-label": "Следующий трек"
				}, [U("svg", {
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					focusable: "false"
				}, [U("path", {
					d: "M18 5v14",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2.5",
					"stroke-linecap": "round"
				}), U("path", {
					d: "m6 5 10 7-10 7V5Z",
					fill: "currentColor"
				})])], -1),
				U("button", {
					type: "button",
					class: D(["sbp-secondary", { "is-on": n.value.repeat !== "off" }]),
					"data-sbp-action": "repeat",
					id: "sbp-repeat",
					title: n.value.repeatLabel,
					"aria-label": n.value.repeatLabel
				}, O(n.value.repeat === "one" ? "↻₁" : "↻"), 11, z_)
			]),
			U("div", B_, [U("div", V_, [n.value.ios ? (V(), H("span", H_, "📱 Громкость регулируется кнопками телефона")) : (V(), H(B, { key: 1 }, [
				t[5] ||= U("label", { for: "sbp-volume" }, "Громкость", -1),
				t[6] ||= U("span", {
					id: "sbp-volume-icon",
					"aria-hidden": "true"
				}, "◖))", -1),
				U("input", {
					id: "sbp-volume",
					type: "range",
					min: "0",
					max: "100",
					value: n.value.volume,
					"aria-label": "Громкость"
				}, null, 8, U_),
				U("output", W_, O(n.value.volume) + "%", 1)
			], 64))]), U("label", G_, [t[7] ||= W(" Скорость ", -1), U("select", {
				id: "sbp-rate",
				"aria-label": "Скорость воспроизведения",
				value: n.value.rate
			}, [(V(), H(B, null, z(o, (e) => U("option", {
				key: e,
				value: e
			}, O(e) + "×", 9, q_)), 64))], 8, K_)])]),
			I(U("div", {
				class: "sbp-message",
				id: "sbp-message",
				role: "status",
				"aria-live": "polite"
			}, O(n.value.message), 513), [[eo, n.value.message]])
		]), U("aside", J_, [
			U("div", Y_, [U("div", null, [t[8] ||= U("h2", null, "Очередь воспроизведения", -1), U("small", X_, O(n.value.count) + " " + O(n.value.count === 1 ? "трек" : n.value.count > 1 && n.value.count < 5 ? "трека" : "треков"), 1)]), U("button", {
				type: "button",
				class: "sbp-clear",
				"data-sbp-action": "clear",
				id: "sbp-clear",
				disabled: !n.value.count
			}, "Очистить", 8, Z_)]),
			t[9] ||= fa("<div class=\"sbp-dropzone\" id=\"sbp-dropzone\"><div class=\"sbp-drop-icon\">↥</div><strong>Загрузи свои треки</strong><p>MP3, WAV, M4A, AAC, OGG, FLAC — если формат поддерживается браузером. Файлы никуда не отправляются.</p><label class=\"sbp-upload-label\" for=\"sbp-file\">Выбрать аудиофайлы</label><input id=\"sbp-file\" type=\"file\" accept=\"audio/*,.mp3,.m4a,.aac,.wav,.ogg,.flac,.opus\" multiple></div><div class=\"sbp-demo-box\"><div><strong>Нет аудиофайлов?</strong><p>Создать 3 коротких оригинальных демо-сигнала для проверки управления.</p></div><button type=\"button\" data-sbp-action=\"demo\" id=\"sbp-demo\">+ Демо-треки</button></div>", 2),
			U("div", Q_, [(V(!0), H(B, null, z(n.value.tracks, (e) => (V(), H("article", {
				key: e.id,
				class: D(["sbp-track", { "is-current": e.isCurrent }]),
				"data-sbp-item": e.id
			}, [
				U("button", {
					type: "button",
					class: "sbp-track-play",
					"data-sbp-action": "select",
					"data-index": e.index,
					"aria-label": "Включить " + e.name
				}, [U("span", tv, O(e.playLabel), 1), U("span", nv, [U("strong", null, O(e.name), 1), U("small", null, O(e.artist) + " · " + O(e.sourceLabel), 1)])], 8, ev),
				U("span", rv, O(e.durationLabel), 1),
				U("button", {
					type: "button",
					class: "sbp-track-remove",
					"data-sbp-action": "remove",
					"data-index": e.index,
					title: "Удалить из списка",
					"aria-label": "Удалить " + e.name
				}, "×", 8, iv)
			], 10, $_))), 128)), n.value.tracks.length ? G("", !0) : (V(), H("div", av, " Плейлист пока пуст. Добавь MP3 или нажми «Демо-треки», чтобы начать тест. "))])
		])]));
	}
};
// src/vue/player/legacyPlayerLabBridge.js
function sv({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PLAYER_LAB, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Q({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-player-lab"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, ov, {
			api: t,
			initialModel: r
		})
	});
}
// src/vue/player/PlayerAB.vue
var cv = { class: "sbab-heading" }, lv = {
	key: 0,
	class: "sbab-kicker",
	"data-sb-vue-player-recap": ""
}, uv = { class: "sbab-files" }, dv = ["data-sbab-card"], fv = { class: "sbab-file-top" }, pv = { class: "sbab-side-label" }, mv = ["id"], hv = ["id"], gv = ["id"], _v = { class: "sbab-file-bottom" }, vv = ["for"], yv = ["id", "data-sbab-file"], bv = ["data-side", "disabled"], xv = ["id"], Sv = { class: "sbab-console" }, Cv = { class: "sbab-console-top" }, wv = { id: "sbab-active-label" }, Tv = { class: "sbab-wave" }, Ev = {
	class: "sbab-wave-bars",
	"aria-hidden": "true"
}, Dv = {
	class: "sbab-toggle",
	role: "group",
	"aria-label": "Выбор версии для прослушивания"
}, Ov = ["data-side", "aria-pressed"], kv = { class: "sbab-scrub" }, Av = ["value", "disabled"], jv = { class: "sbab-times" }, Mv = { id: "sbab-current" }, Nv = { id: "sbab-duration" }, Pv = { class: "sbab-transport" }, Fv = ["disabled", "aria-label"], Iv = { class: "sbab-clip" }, Lv = { class: "sbab-clip-actions" }, Rv = {
	type: "button",
	"data-sbab-action": "mark-start"
}, zv = { id: "sbab-start" }, Bv = {
	type: "button",
	"data-sbab-action": "mark-end"
}, Vv = { id: "sbab-end" }, Hv = ["aria-pressed", "aria-label"], Uv = { class: "sbab-volume" }, Wv = { key: 0 }, Gv = ["for"], Kv = [
	"id",
	"data-sbab-vol",
	"value"
], qv = ["hidden"], Jv = { class: "sbab-review" }, Yv = { class: "sbab-rating-grid" }, Xv = { class: "sbab-rating-label" }, Zv = [
	"data-sbab-score",
	"aria-label",
	"value"
], Qv = ["value"], $v = { class: "sbab-note-grid" }, ey = ["for"], ty = [
	"id",
	"data-sbab-note",
	"placeholder",
	"value"
], ny = {
	__name: "PlayerAB",
	props: {
		api: {
			type: Object,
			required: !0
		},
		initialModel: {
			type: Object,
			required: !0
		}
	},
	setup(e) {
		let t = e, n = /* @__PURE__ */ N(t.initialModel), r = Z();
		L(n, (e) => r.publishPlayerAbSummary(e), { immediate: !0 });
		let i = ["A", "B"], a = [
			{
				key: "vocal",
				label: "Вокал"
			},
			{
				key: "arrangement",
				label: "Аранжировка"
			},
			{
				key: "mix",
				label: "Сведение и мастеринг"
			}
		], o = Array.from({ length: 43 }, (e, t) => 15 + (t * t * 23 + t * 11) % 70 + "%");
		function s() {
			let e = t.api.snapshot();
			e && (n.value = e);
		}
		return R(() => {
			window.addEventListener("sunoboom:player-ab-update", s), s();
		}), Sr(() => window.removeEventListener("sunoboom:player-ab-update", s)), (e, t) => (V(), H("section", {
			id: "sbab-compare",
			class: D(["sbab-shell", {
				"sbab-is-playing": n.value.playing,
				"sbab-has-files": n.value.hasBoth
			}]),
			"aria-label": "Сравнение аудиоверсий A и B",
			"data-sb-vue-player-ab": ""
		}, [
			U("header", cv, [U("div", null, [
				t[0] ||= U("span", { class: "sbab-kicker" }, "SUNOBOOM · AUDIO TEST LAB", -1),
				t[1] ||= U("h2", null, "A/B-сравнение аудиоверсий", -1),
				t[2] ||= U("p", null, "Загрузи два варианта песни и переключайся между ними в одной временной точке. Сравнивай вокал, аранжировку и финальное звучание.", -1),
				F(r).playerLabSummary.ready ? (V(), H("p", lv, "Очередь плеера LAB: " + O(F(r).playerLabSummary.queueCount) + " треков · " + O(F(r).playerLabSummary.playing ? "воспроизведение" : "пауза"), 1)) : G("", !0)
			]), t[3] ||= U("span", { class: "sbab-lab-badge" }, "A ↔ B", -1)]),
			U("div", uv, [(V(), H(B, null, z(i, (e) => U("div", {
				key: e,
				class: D(["sbab-file-card", [e === "A" ? "sbab-card-a" : "sbab-card-b", { "sbab-active-card": n.value.active === e }]]),
				"data-sbab-card": e
			}, [
				U("div", fv, [U("span", pv, "ВЕРСИЯ " + O(e), 1), U("span", {
					class: "sbab-loaded",
					id: "sbab-ready-" + e
				}, O(n.value.files[e].ready ? "Файл добавлен" : "Ожидает файл"), 9, mv)]),
				U("strong", {
					class: "sbab-filename",
					id: "sbab-name-" + e
				}, O(n.value.files[e].name), 9, hv),
				U("p", {
					class: "sbab-filesub",
					id: "sbab-info-" + e
				}, O(n.value.files[e].info), 9, gv),
				U("div", _v, [
					U("label", {
						class: "sbab-upload",
						for: "sbab-file-" + e
					}, [t[4] ||= U("svg", {
						viewBox: "0 0 24 24",
						width: "19",
						height: "19",
						"aria-hidden": "true"
					}, [U("path", {
						d: "M12 5v14M5 12h14",
						stroke: "currentColor",
						"stroke-width": "2",
						"stroke-linecap": "round"
					})], -1), W(" " + O(n.value.files[e].ready ? "Заменить файл" : "Выбрать файл"), 1)], 8, vv),
					U("input", {
						type: "file",
						id: "sbab-file-" + e,
						accept: "audio/*,.mp3,.wav,.m4a,.aac,.ogg,.flac,.opus",
						"data-sbab-file": e
					}, null, 8, yv),
					U("button", {
						type: "button",
						"data-sbab-action": "remove",
						"data-side": e,
						class: "sbab-remove",
						disabled: !n.value.files[e].ready
					}, "Удалить", 8, bv),
					U("span", {
						class: "sbab-length",
						id: "sbab-length-" + e
					}, O(n.value.files[e].duration), 9, xv)
				])
			], 10, dv)), 64))]),
			t[20] ||= U("div", { class: "sbab-demo-row" }, [U("p", null, "Для первого теста можно создать два разных оригинальных коротких аудиофрагмента."), U("button", {
				type: "button",
				"data-sbab-action": "demo"
			}, "Создать демо A и B")], -1),
			U("div", Sv, [
				U("div", Cv, [t[5] ||= U("span", { class: "sbab-kicker" }, "АКТИВНОЕ ПРОСЛУШИВАНИЕ", -1), U("span", wv, "Версия " + O(n.value.active) + O(n.value.playing ? " · Воспроизведение" : ""), 1)]),
				U("div", Tv, [U("div", Ev, [(V(!0), H(B, null, z(F(o), (e, t) => (V(), H("i", {
					key: t,
					style: E({ "--bar-height": e })
				}, null, 4))), 128))]), t[6] ||= U("div", { class: "sbab-wave-center" }, "A / B", -1)]),
				U("div", Dv, [(V(), H(B, null, z(i, (e) => U("button", {
					key: e,
					type: "button",
					class: D(e === "A" ? "sbab-btn-a" : "sbab-btn-b"),
					"data-sbab-action": "select",
					"data-side": e,
					"aria-pressed": String(n.value.active === e)
				}, [W(O(e) + " ", 1), U("small", null, "Версия " + O(e), 1)], 10, Ov)), 64))]),
				U("div", kv, [
					t[7] ||= U("label", {
						for: "sbab-seek",
						class: "sbab-sr"
					}, "Перемотка A/B", -1),
					U("input", {
						type: "range",
						id: "sbab-seek",
						min: "0",
						max: "1000",
						step: "1",
						value: n.value.seek,
						disabled: !n.value.canSeek
					}, null, 8, Av),
					U("div", jv, [U("span", Mv, O(n.value.currentTime), 1), U("span", Nv, O(n.value.duration), 1)])
				]),
				U("div", Pv, [
					t[8] ||= U("button", {
						type: "button",
						"data-sbab-action": "back",
						"aria-label": "На 5 секунд назад"
					}, [U("svg", {
						viewBox: "0 0 24 24",
						width: "21",
						height: "21",
						"aria-hidden": "true"
					}, [U("path", {
						d: "M7 5v14M18 5 8 12l10 7V5Z",
						stroke: "currentColor",
						"stroke-width": "2",
						fill: "currentColor",
						"stroke-linejoin": "round",
						"stroke-linecap": "round"
					})])], -1),
					U("button", {
						type: "button",
						class: "sbab-big-play",
						id: "sbab-play",
						"data-sbab-action": "toggle",
						disabled: !n.value.canPlay,
						"aria-label": n.value.playing ? "Пауза" : "Воспроизвести"
					}, O(n.value.playing ? "❚❚" : "▶"), 9, Fv),
					t[9] ||= U("button", {
						type: "button",
						"data-sbab-action": "forward",
						"aria-label": "На 5 секунд вперёд"
					}, [U("svg", {
						viewBox: "0 0 24 24",
						width: "21",
						height: "21",
						"aria-hidden": "true"
					}, [U("path", {
						d: "M17 5v14M6 5l10 7-10 7V5Z",
						stroke: "currentColor",
						"stroke-width": "2",
						fill: "currentColor",
						"stroke-linejoin": "round",
						"stroke-linecap": "round"
					})])], -1)
				]),
				U("div", Iv, [t[13] ||= U("div", { class: "sbab-clip-title" }, [U("strong", null, "Повтор выбранного фрагмента"), U("small", null, "Например, только припев или куплет")], -1), U("div", Lv, [
					U("button", Rv, [t[10] ||= W("Начало: ", -1), U("span", zv, O(n.value.start), 1)]),
					U("button", Bv, [t[11] ||= W("Конец: ", -1), U("span", Vv, O(n.value.end), 1)]),
					U("button", {
						type: "button",
						"data-sbab-action": "loop",
						id: "sbab-loop",
						"aria-pressed": String(n.value.loop),
						"aria-label": n.value.loop ? "Повтор фрагмента включён" : "Повтор фрагмента выключен"
					}, O(n.value.loop ? "↻ Повтор включён" : "↻ Повтор выкл."), 9, Hv),
					t[12] ||= U("button", {
						type: "button",
						"data-sbab-action": "clear-segment",
						"aria-label": "Очистить границы фрагмента"
					}, "✕", -1)
				])]),
				U("div", Uv, [n.value.ios ? (V(), H("span", Wv, "📱 Громкость регулируется кнопками телефона")) : (V(), H(B, { key: 1 }, z(i, (e) => U("label", {
					key: e,
					for: "sbab-vol-" + e
				}, [W(" Уровень " + O(e) + " ", 1), U("input", {
					id: "sbab-vol-" + e,
					"data-sbab-vol": e,
					type: "range",
					min: "0",
					max: "100",
					value: n.value.volume[e]
				}, null, 8, Kv)], 8, Gv)), 64))]),
				U("p", {
					id: "sbab-status",
					class: "sbab-status",
					role: "status",
					"aria-live": "polite",
					hidden: !n.value.status
				}, O(n.value.status), 9, qv)
			]),
			U("section", Jv, [
				t[18] ||= U("header", null, [U("h3", null, "Оценка на слух"), U("p", null, "Субъективное сравнение. Оценки выставляешь ты — автоматического анализа качества здесь нет.")], -1),
				U("div", Yv, [
					t[15] ||= U("div", { class: "sbab-rating-head" }, "Параметр", -1),
					t[16] ||= U("div", { class: "sbab-rating-head" }, "A", -1),
					t[17] ||= U("div", { class: "sbab-rating-head" }, "B", -1),
					(V(), H(B, null, z(a, (e) => (V(), H(B, { key: e.key }, [U("div", Xv, O(e.label), 1), (V(), H(B, null, z(i, (r) => U("div", { key: r }, [U("select", {
						"data-sbab-score": r + ":" + e.key,
						"aria-label": e.label + " — версия " + r,
						value: n.value.scores[r][e.key]
					}, [t[14] ||= U("option", { value: 0 }, "—", -1), (V(), H(B, null, z(5, (e) => U("option", {
						key: e,
						value: e
					}, O(e) + "/5", 9, Qv)), 64))], 8, Zv)])), 64))], 64))), 64))
				]),
				U("div", $v, [(V(), H(B, null, z(i, (e) => U("label", {
					key: e,
					for: "sbab-note-" + e
				}, [W(" Заметки по " + O(e) + " ", 1), U("textarea", {
					id: "sbab-note-" + e,
					"data-sbab-note": e,
					rows: "3",
					maxlength: "1000",
					placeholder: e === "A" ? "Сильные стороны, что улучшить…" : "Вокал, баланс, пространство…",
					value: n.value.notes[e]
				}, null, 8, ty)], 8, ey)), 64))]),
				t[19] ||= U("div", { class: "sbab-review-actions" }, [U("button", {
					type: "button",
					"data-sbab-action": "copy",
					class: "sbab-review-copy"
				}, "Скопировать результаты"), U("button", {
					type: "button",
					"data-sbab-action": "reset-review",
					class: "sbab-review-clear"
				}, "Очистить оценки")], -1)
			]),
			t[21] ||= U("p", { class: "sbab-footer-note" }, "Файлы не передаются на сервер. При переключении используется одинаковая временная позиция в секундах; точное совпадение музыкальных моментов зависит от самих версий. Для честного сравнения выровняй их громкость. На телефоне переключение может иметь небольшую паузу из-за браузера.", -1)
		], 2));
	}
};
// src/vue/player/legacyPlayerABBridge.js
function ry({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PLAYER_AB, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Q({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-player-ab"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, ny, {
			api: t,
			initialModel: r
		})
	});
}
// src/vue/producer/ProducerSongList.vue
var iy = ["data-id", "aria-pressed"], ay = { class: "sbpc-song-main" }, oy = { class: "sbpc-song-meta" }, sy = { class: "sbpc-tiny-progress" }, cy = {
	key: 0,
	class: "sbpc-help",
	"data-sb-vue-passport-recap": ""
}, ly = {
	key: 1,
	class: "sbpc-empty"
}, uy = {
	__name: "ProducerSongList",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ N(t.model.query || ""), r = Z();
		L(() => t.model, (e) => r.publishMasterListSummary(e), { immediate: !0 });
		let i = (e) => String(e ?? "").normalize("NFKC").toLocaleLowerCase("ru"), a = K(() => {
			let e = i(n.value.trim());
			return t.model.records.filter((t) => i(t.searchText).includes(e));
		});
		function o(e) {
			n.value = String(e.detail?.query ?? "");
		}
		return R(() => window.addEventListener("sunoboom:producer-search", o)), Cr(() => window.removeEventListener("sunoboom:producer-search", o)), (t, n) => (V(), H(B, null, [
			(V(!0), H(B, null, z(a.value, (t) => (V(), H("button", {
				key: t.id,
				type: "button",
				class: D(["sbpc-song", { active: t.id === e.model.selectedId }]),
				"data-pc-action": "open",
				"data-id": t.id,
				"aria-pressed": t.id === e.model.selectedId
			}, [
				U("span", ay, [U("strong", null, O(t.title), 1), U("span", null, O(t.artist), 1)]),
				U("span", oy, [U("b", null, O(t.done) + "/" + O(t.total), 1), U("small", null, O(t.nextLabel ? "Следующий этап: " + t.nextLabel : "Все этапы отмечены готовыми"), 1)]),
				U("span", sy, [U("i", { style: E({ width: t.percent + "%" }) }, null, 4)])
			], 10, iy))), 128)),
			F(r).passportListSummary.ready ? (V(), H("p", cy, " Паспорта треков · последний фильтр: " + O(F(r).passportListSummary.visibleCount), 1)) : G("", !0),
			a.value.length ? G("", !0) : (V(), H("p", ly, O(e.model.hasRecords ? "Поиск не дал результатов. Измени запрос или создай новую рабочую карточку." : "Пока нет рабочих карточек. Начни с первой песни выше."), 1))
		], 64));
	}
};
// src/vue/producer/legacyProducerSongListBridge.js
function dy({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PRODUCER_LIST, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Q({
		root: n,
		selectTarget: (e) => e.querySelector("#sbpc-list[data-sb-vue-producer-list]"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, uy, { model: n })
	});
}
// src/vue/producer/ProducerSongDetail.vue
var fy = {
	class: "sbpc-workspace",
	"data-sb-vue-producer-detail": ""
}, py = { class: "sbpc-panel sbpc-song-head" }, my = { class: "sbpc-head-top" }, hy = { class: "sbpc-completion" }, gy = { class: "sbpc-next" }, _y = {
	key: 0,
	class: "sbpc-help",
	"data-sb-vue-passport-detail-recap": ""
}, vy = { class: "sbpc-meta-editor" }, yy = { class: "sbpc-wide" }, by = { class: "sbpc-panel" }, xy = { class: "sbpc-panel-head" }, Sy = ["aria-valuenow"], Cy = { class: "sbpc-stages" }, wy = ["data-status"], Ty = { class: "sbpc-stage-index" }, Ey = { class: "sbpc-stage-body" }, Dy = { class: "sbpc-stage-title" }, Oy = { class: "sbpc-stage-state" }, ky = {
	key: 0,
	class: "sbpc-resource-present"
}, Ay = {
	key: 1,
	class: "sbpc-resource-empty"
}, jy = { class: "sbpc-stage-actions" }, My = [
	"onUpdate:modelValue",
	"data-pc-stage",
	"aria-label"
], Ny = ["value"], Py = ["data-step"], Fy = { class: "sbpc-panel" }, Iy = { class: "sbpc-links" }, Ly = ["for"], Ry = [
	"id",
	"onUpdate:modelValue",
	"data-pc-link"
], zy = ["value"], By = ["data-type", "data-id"], Vy = { class: "sbpc-panel sbpc-arrangement" }, Hy = { class: "sbpc-panel-head" }, Uy = { class: "sbpc-arrangement-actions" }, Wy = {
	key: 0,
	type: "button",
	"data-pc-action": "restore-arrangement"
}, Gy = {
	key: 0,
	class: "sbpc-subnote"
}, Ky = { class: "sbpc-panel" }, qy = { class: "sbpc-panel-head" }, Jy = {
	key: 0,
	class: "sbpc-log"
}, Yy = {
	key: 1,
	class: "sbpc-empty"
}, Xy = {
	__name: "ProducerSongDetail",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = Z();
		L(() => t.model, (e) => n.publishMasterDetailSummary(e), { immediate: !0 });
		let r = /* @__PURE__ */ Wt({
			title: t.model.title,
			artist: t.model.artist,
			notes: t.model.notes
		}), i = /* @__PURE__ */ Wt(Object.fromEntries(t.model.links.map((e) => [e.field, e.value]))), a = /* @__PURE__ */ Wt(Object.fromEntries(t.model.stages.map((e) => [e.key, e.status])));
		return (t, o) => (V(), H("div", fy, [
			U("section", py, [
				U("div", my, [o[3] ||= U("span", { class: "sbpc-kicker" }, "КАРТОЧКА ПРОДЮСИРОВАНИЯ", -1), U("span", hy, O(e.model.percent) + "% готовности", 1)]),
				U("h2", null, O(e.model.title || "Без названия"), 1),
				U("p", null, O(e.model.artist || "Исполнитель пока не указан") + O(e.model.projectTitle ? " · " + e.model.projectTitle : ""), 1),
				U("p", gy, O(e.model.nextLabel ? "Следующий этап: " + e.model.nextLabel : "Все этапы отмечены готовыми"), 1),
				F(n).passportDetailSummary.ready ? (V(), H("p", _y, " Последний открытый паспорт: " + O(F(n).passportDetailSummary.versionCount) + " аудиоверсий · " + O(F(n).passportDetailSummary.linkedCount) + " из 3 материалов связано ", 1)) : G("", !0),
				U("div", vy, [
					U("label", null, [o[4] ||= W("Название песни ", -1), I(U("input", {
						id: "sbpc-title",
						"onUpdate:modelValue": o[0] ||= (e) => r.title = e,
						type: "text",
						maxlength: "120"
					}, null, 512), [[q, r.title]])]),
					U("label", null, [o[5] ||= W("Артист / проект ", -1), I(U("input", {
						id: "sbpc-artist",
						"onUpdate:modelValue": o[1] ||= (e) => r.artist = e,
						type: "text",
						maxlength: "120"
					}, null, 512), [[q, r.artist]])]),
					U("label", yy, [o[6] ||= W("Продюсерские заметки ", -1), I(U("textarea", {
						id: "sbpc-notes",
						"onUpdate:modelValue": o[2] ||= (e) => r.notes = e,
						rows: "3",
						maxlength: "3500",
						placeholder: "Что важно сохранить об этой песне?"
					}, null, 512), [[q, r.notes]])])
				]),
				o[7] ||= U("div", { class: "sbpc-head-actions" }, [U("button", {
					type: "button",
					class: "sbpc-main-btn",
					"data-pc-action": "save-details"
				}, "Сохранить карточку"), U("button", {
					type: "button",
					class: "sbpc-delete-btn",
					"data-pc-action": "delete"
				}, "Удалить рабочую карточку")], -1),
				o[8] ||= U("p", { class: "sbpc-help" }, "Удаление рабочей карточки не удаляет идеи, паспорта, промпты и аудио.", -1)
			]),
			U("section", by, [
				U("header", xy, [o[9] ||= U("h3", null, "Маршрут песни", -1), U("span", null, O(e.model.done) + " из " + O(e.model.total) + " этапов", 1)]),
				U("div", {
					class: "sbpc-progress",
					role: "progressbar",
					"aria-label": "Готовность работы",
					"aria-valuemin": "0",
					"aria-valuemax": "100",
					"aria-valuenow": e.model.percent
				}, [U("span", { style: E({ width: e.model.percent + "%" }) }, null, 4)], 8, Sy),
				U("div", Cy, [(V(!0), H(B, null, z(e.model.stages, (t) => (V(), H("article", {
					key: t.key,
					class: "sbpc-stage",
					"data-status": a[t.key]
				}, [U("div", Ty, O(a[t.key] === "done" ? "✓" : t.index), 1), U("div", Ey, [
					U("div", Dy, [U("strong", null, O(t.title), 1), U("small", null, O(t.desc), 1)]),
					U("div", Oy, [t.hasMaterial ? (V(), H("span", ky, "● " + O(t.materialLabel), 1)) : (V(), H("span", Ay, "○ Подтверждённых материалов нет"))]),
					U("div", jy, [U("label", null, [o[10] ||= W("Готовность ", -1), I(U("select", {
						"onUpdate:modelValue": (e) => a[t.key] = e,
						"data-pc-stage": t.key,
						"aria-label": "Этап " + t.title
					}, [(V(!0), H(B, null, z(e.model.statuses, (e) => (V(), H("option", {
						key: e.id,
						value: e.id
					}, O(e.label), 9, Ny))), 128))], 8, My), [[Ro, a[t.key]]])]), U("button", {
						type: "button",
						"data-pc-action": "open-stage",
						"data-step": t.key
					}, "Открыть инструмент ↗", 8, Py)])
				])], 8, wy))), 128))]),
				o[11] ||= U("p", { class: "sbpc-help" }, "Готовность отмечается вручную. Наличие материала показано отдельно и не считается автоматически завершённым этапом.", -1)
			]),
			U("section", Fy, [
				o[12] ||= U("header", { class: "sbpc-panel-head" }, [U("h3", null, "Связанные материалы"), U("span", null, "Без копирования данных")], -1),
				o[13] ||= U("p", { class: "sbpc-help" }, "Свяжи существующие идеи, промпты, паспорт трека и карточку с аудио. Исходные записи останутся в своих разделах.", -1),
				U("div", Iy, [(V(!0), H(B, null, z(e.model.links, (e) => (V(), H("div", {
					key: e.field,
					class: "sbpc-link-field"
				}, [
					U("label", { for: "sbpc-" + e.field }, O(e.label), 9, Ly),
					I(U("select", {
						id: "sbpc-" + e.field,
						"onUpdate:modelValue": (t) => i[e.field] = t,
						"data-pc-link": e.field
					}, [(V(!0), H(B, null, z(e.options, (e) => (V(), H("option", {
						key: e.value,
						value: e.value
					}, O(e.label), 9, zy))), 128))], 8, Ry), [[Ro, i[e.field]]]),
					e.value ? (V(), H("button", {
						key: 0,
						type: "button",
						"data-pc-action": "open-link",
						"data-type": e.type,
						"data-id": e.value
					}, O(e.available ? "Перейти к материалу" : "Материал недоступен") + " ↗ ", 9, By)) : G("", !0)
				]))), 128))]),
				o[14] ||= U("button", {
					type: "button",
					class: "sbpc-main-btn",
					"data-pc-action": "save-links"
				}, "Сохранить связи", -1)
			]),
			U("section", Vy, [
				U("header", Hy, [o[15] ||= U("h3", null, "Аранжировка для этой песни", -1), U("span", null, O(e.model.arrangement.count ? e.model.arrangement.count + " блоков сохранено" : "Снимок ещё не сохранён"), 1)]),
				o[18] ||= U("p", { class: "sbpc-help" }, "Конструктор Suno Studio использует текущий рабочий черновик. Сохрани его сюда отдельно для песни; восстановление выполняется только по твоей команде.", -1),
				U("div", Uy, [
					o[16] ||= U("button", {
						type: "button",
						"data-pc-action": "capture-arrangement"
					}, "Сохранить текущую аранжировку", -1),
					e.model.arrangement.count ? (V(), H("button", Wy, "Восстановить в Studio")) : G("", !0),
					o[17] ||= U("button", {
						type: "button",
						"data-pc-action": "open-stage",
						"data-step": "arrangement"
					}, "Открыть аранжировщик ↗", -1)
				]),
				e.model.arrangement.count ? (V(), H("p", Gy, " Сохранено: " + O(e.model.arrangement.savedAt) + " · " + O(e.model.arrangement.count) + " блоков · " + O(e.model.arrangement.duration || "длительность не рассчитана"), 1)) : G("", !0)
			]),
			U("section", Ky, [
				U("header", qy, [o[19] ||= U("h3", null, "История работы", -1), U("span", null, O(e.model.history.length) + " событий", 1)]),
				o[20] ||= U("div", { class: "sbpc-log-input" }, [U("input", {
					id: "sbpc-history-note",
					type: "text",
					maxlength: "350",
					placeholder: "Добавить запись: что изменилось или что сделать дальше"
				}), U("button", {
					type: "button",
					"data-pc-action": "add-note"
				}, "Добавить")], -1),
				e.model.history.length ? (V(), H("ol", Jy, [(V(!0), H(B, null, z(e.model.history, (e, t) => (V(), H("li", { key: t }, [U("time", null, O(e.date), 1), U("span", null, O(e.text), 1)]))), 128))])) : (V(), H("p", Yy, "История пока пуста."))
			])
		]));
	}
};
// src/vue/producer/legacyProducerSongDetailBridge.js
function Zy({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PRODUCER_DETAIL, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Q({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-producer-detail[data-sb-vue-producer-host]"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, Xy, { model: n })
	});
}
// src/vue/account/TrackPassportList.vue
var Qy = {
	key: 0,
	class: "sb-track-disclaimer",
	"data-sb-vue-master-recap": ""
}, $y = {
	class: "sb-track-filters",
	role: "group",
	"aria-label": "Фильтр паспортов по этапу"
}, eb = ["data-filter", "aria-pressed"], tb = {
	key: 1,
	class: "sb-track-list"
}, nb = ["data-id"], rb = {
	key: 2,
	class: "sb-track-empty"
}, ib = {
	__name: "TrackPassportList",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = Z();
		return L(() => t.model, (e) => n.publishPassportListSummary(e), { immediate: !0 }), (t, r) => (V(), H(B, null, [
			F(n).masterListSummary.ready ? (V(), H("p", Qy, " В Мастере: " + O(F(n).masterListSummary.workCount) + " песен в работе · " + O(F(n).masterListSummary.finishedCount) + " маршрутов полностью пройдено ", 1)) : G("", !0),
			U("div", $y, [(V(!0), H(B, null, z(e.model.filters, (t) => (V(), H("button", {
				key: t.key,
				type: "button",
				"data-action": "tp-filter",
				"data-filter": t.key,
				class: D({ active: e.model.active === t.key }),
				"aria-pressed": e.model.active === t.key
			}, O(t.label), 11, eb))), 128))]),
			e.model.records.length ? (V(), H("div", tb, [(V(!0), H(B, null, z(e.model.records, (e) => (V(), H("button", {
				key: e.id,
				type: "button",
				class: "sb-track-tile",
				"data-action": "tp-open",
				"data-id": e.id
			}, [
				r[0] ||= U("span", { class: "sb-track-note" }, "♫", -1),
				U("span", null, [
					U("strong", null, O(e.title), 1),
					U("small", null, O(e.artist), 1),
					U("small", null, O(e.statusLabel) + O(e.releaseLabel ? " · " + e.releaseLabel : ""), 1)
				]),
				r[1] ||= U("i", { "aria-hidden": "true" }, "→", -1)
			], 8, nb))), 128))])) : (V(), H("div", rb, O(e.model.hasRecords ? "В этой категории пока нет треков." : "Паспортов пока нет. Создай первый, чтобы объединить материалы песни."), 1))
		], 64));
	}
};
// src/vue/account/legacyTrackPassportListBridge.js
function ab({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_TRACK_LIST, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Q({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-track-list[data-sb-vue-track-list]"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, ib, { model: n })
	});
}
// src/vue/account/TrackPassportDetail.vue
var ob = {
	class: "sb-track-detail",
	"data-sb-vue-track-detail-view": ""
}, sb = {
	key: 0,
	class: "sb-track-disclaimer",
	"data-sb-vue-master-detail-recap": ""
}, cb = { class: "sb-track-buttons" }, lb = ["data-id"], ub = ["data-id"], db = ["data-id"], fb = { class: "sb-track-hero" }, pb = { class: "sb-track-cover" }, mb = ["src"], hb = { class: "sb-track-phase" }, gb = { class: "sb-track-facts" }, _b = { class: "sb-track-buttons" }, vb = ["href"], yb = ["href"], bb = { class: "sb-track-linkgrid" }, xb = ["data-action", "data-id"], Sb = {
	key: 1,
	class: "sb-track-linked sb-track-linked-empty"
}, Cb = ["data-action", "data-id"], wb = {
	key: 3,
	class: "sb-track-linked sb-track-linked-empty"
}, Tb = ["data-action", "data-id"], Eb = {
	key: 5,
	class: "sb-track-linked sb-track-linked-empty"
}, Db = { class: "sb-track-section" }, Ob = { key: 0 }, kb = ["href"], Ab = [
	"data-id",
	"data-version",
	"aria-label"
], jb = {
	key: 2,
	class: "sb-track-disclaimer"
}, Mb = { class: "sb-track-versionform" }, Nb = ["data-id"], Pb = {
	__name: "TrackPassportDetail",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = Z();
		return L(() => t.model, (e) => n.publishPassportDetailSummary(e), { immediate: !0 }), (t, r) => (V(), H("div", ob, [
			F(n).masterDetailSummary.ready ? (V(), H("p", sb, " Последняя карточка Мастера: " + O(F(n).masterDetailSummary.done) + " из " + O(F(n).masterDetailSummary.total) + " этапов · " + O(F(n).masterDetailSummary.linkedCount) + " из 6 связей ", 1)) : G("", !0),
			U("div", cb, [
				r[0] ||= U("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "tp-list"
				}, "← К списку", -1),
				U("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "tp-edit",
					"data-id": e.model.id
				}, "Изменить", 8, lb),
				U("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "tp-event",
					"data-id": e.model.id
				}, "В календарь релизов", 8, ub),
				U("button", {
					type: "button",
					class: "btn danger small",
					"data-action": "tp-delete",
					"data-id": e.model.id
				}, "Удалить", 8, db)
			]),
			U("div", fb, [U("div", pb, [e.model.cover ? (V(), H("img", {
				key: 0,
				src: e.model.cover,
				alt: "Обложка",
				loading: "lazy"
			}, null, 8, mb)) : (V(), H(B, { key: 1 }, [W("♫")], 64))]), U("div", null, [
				U("span", hb, O(e.model.phase), 1),
				U("h2", null, O(e.model.title), 1),
				U("p", null, O(e.model.artist), 1)
			])]),
			U("div", gb, [(V(!0), H(B, null, z(e.model.facts, (e) => (V(), H("div", {
				key: e.label,
				class: "sb-track-fact"
			}, [U("span", null, O(e.label), 1), U("strong", null, O(e.value || "Не указано"), 1)]))), 128))]),
			U("div", _b, [e.model.audio ? (V(), H("a", {
				key: 0,
				class: "btn ghost",
				href: e.model.audio,
				rel: "noopener noreferrer",
				target: "_blank"
			}, "Прослушать ↗", 8, vb)) : G("", !0), e.model.cover ? (V(), H("a", {
				key: 1,
				class: "btn ghost",
				href: e.model.cover,
				rel: "noopener noreferrer",
				target: "_blank"
			}, "Обложка ↗", 8, yb)) : G("", !0)]),
			r[8] ||= U("h3", { class: "sb-track-section" }, "Связанные материалы", -1),
			U("div", bb, [
				e.model.links[0].exists ? (V(), H("button", {
					key: 0,
					type: "button",
					class: "sb-track-linked",
					"data-action": e.model.links[0].action,
					"data-id": e.model.links[0].id
				}, [
					U("small", null, O(e.model.links[0].label), 1),
					U("strong", null, O(e.model.links[0].title), 1),
					r[1] ||= U("span", null, "Открыть →", -1)
				], 8, xb)) : (V(), H("div", Sb, [U("small", null, O(e.model.links[0].label), 1), r[2] ||= U("strong", null, "Не привязан", -1)])),
				e.model.links[1].exists ? (V(), H("button", {
					key: 2,
					type: "button",
					class: "sb-track-linked",
					"data-action": e.model.links[1].action,
					"data-id": e.model.links[1].id
				}, [
					U("small", null, O(e.model.links[1].label), 1),
					U("strong", null, O(e.model.links[1].title), 1),
					r[3] ||= U("span", null, "Открыть →", -1)
				], 8, Cb)) : (V(), H("div", wb, [U("small", null, O(e.model.links[1].label), 1), r[4] ||= U("strong", null, "Не привязан", -1)])),
				e.model.links[2].exists ? (V(), H("button", {
					key: 4,
					type: "button",
					class: "sb-track-linked",
					"data-action": e.model.links[2].action,
					"data-id": e.model.links[2].id
				}, [
					U("small", null, O(e.model.links[2].label), 1),
					U("strong", null, O(e.model.links[2].title), 1),
					r[5] ||= U("span", null, "Открыть →", -1)
				], 8, Tb)) : (V(), H("div", Eb, [U("small", null, O(e.model.links[2].label), 1), r[6] ||= U("strong", null, "Не привязан", -1)]))
			]),
			(V(!0), H(B, null, z(e.model.sections, (e) => (V(), H("section", {
				key: e.label,
				class: "sb-track-sectionbox"
			}, [U("h3", null, O(e.label), 1), U("pre", null, O(e.text), 1)]))), 128)),
			U("h3", Db, "Версии трека (" + O(e.model.versions.length) + ")", 1),
			e.model.versions.length ? (V(!0), H(B, { key: 1 }, z(e.model.versions, (t) => (V(), H("div", {
				key: t.id,
				class: "sb-track-version"
			}, [U("div", null, [
				U("strong", null, O(t.label), 1),
				U("small", null, O(t.date), 1),
				t.notes ? (V(), H("p", Ob, O(t.notes), 1)) : G("", !0)
			]), U("div", null, [t.url ? (V(), H("a", {
				key: 0,
				href: t.url,
				rel: "noopener noreferrer",
				target: "_blank"
			}, "Прослушать ↗", 8, kb)) : G("", !0), U("button", {
				type: "button",
				class: "btn danger small",
				"data-action": "tp-version-remove",
				"data-id": e.model.id,
				"data-version": t.id,
				"aria-label": "Удалить версию " + t.label
			}, "×", 8, Ab)])]))), 128)) : (V(), H("p", jb, "Версий пока нет.")),
			U("div", Mb, [r[7] ||= fa("<div class=\"field\"><label for=\"tp-version-title\">Название новой версии</label><input id=\"tp-version-title\" maxlength=\"100\" placeholder=\"Демо 2 / Финальный мастер\"></div><div class=\"field\"><label for=\"tp-version-url\">Ссылка (HTTPS)</label><input id=\"tp-version-url\" type=\"url\" maxlength=\"2000\" placeholder=\"https://…\"></div><div class=\"field\"><label for=\"tp-version-notes\">Что изменилось?</label><input id=\"tp-version-notes\" maxlength=\"300\" placeholder=\"Необязательно\"></div>", 3), U("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "tp-version-add",
				"data-id": e.model.id
			}, "+ Добавить версию", 8, Nb)]),
			r[9] ||= U("p", { class: "sb-track-disclaimer" }, " Связанный текст и промпт показываются из оригинальных разделов. Расчётные даты — ориентир, окончательная дата определяется издательством. ", -1)
		]));
	}
};
// src/vue/account/legacyTrackPassportDetailBridge.js
function Fb({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_TRACK_DETAIL, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Q({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-track-detail[data-sb-vue-track-detail]"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, Pb, { model: n })
	});
}
// src/vue/account/TrackPassportEditor.vue
var Ib = {
	id: "sb-track-form",
	class: "panel sb-track-form",
	"data-sb-vue-track-editor-view": ""
}, Lb = { class: "sb-track-formhead" }, Rb = { class: "sb-track-fields" }, zb = ["for"], Bb = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"placeholder"
], Vb = { class: "field" }, Hb = ["value"], Ub = { class: "field" }, Wb = ["value"], Gb = { class: "field" }, Kb = ["value"], qb = { class: "field" }, Jb = ["value"], Yb = { class: "field" }, Xb = ["value"], Zb = { class: "field" }, Qb = { class: "sb-track-fields" }, $b = { class: "field" }, ex = { class: "field" }, tx = ["disabled"], nx = { class: "sb-track-manual" }, rx = {
	id: "tp-date-hint",
	class: "sb-track-hint"
}, ix = { class: "sb-track-fields" }, ax = ["for"], ox = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"placeholder"
], sx = ["for"], cx = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"rows"
], lx = {
	__name: "TrackPassportEditor",
	props: {
		model: {
			type: Object,
			required: !0
		},
		api: {
			type: Object,
			required: !0
		}
	},
	setup(e) {
		let t = e, n = /* @__PURE__ */ Wt({ ...t.model.fields }), r = K(() => t.api.date7(n.submitted)), i = K(() => r.value ? "Автоматический расчёт: " + t.api.dateLabel(r.value) + " (через 7 календарных дней)." : "Укажи дату передачи издательству: релиз автоматически через 7 дней.");
		function a() {
			n.override || (n.release = r.value);
		}
		let o = [
			{
				id: "title",
				label: "Название трека *",
				placeholder: "Название песни",
				max: 120
			},
			{
				id: "artist",
				label: "Исполнитель",
				placeholder: "Например, Лада Искра",
				max: 120
			},
			{
				id: "publisher",
				label: "Издательство / дистрибьютор",
				placeholder: "Название издательства",
				max: 120
			}
		], s = [
			{
				id: "cover",
				label: "Ссылка на обложку (HTTPS)",
				placeholder: "https://…",
				max: 2e3
			},
			{
				id: "audio",
				label: "Ссылка на трек в Suno / облаке (HTTPS)",
				placeholder: "https://…",
				max: 2e3
			},
			{
				id: "authors",
				label: "Авторы текста и музыки",
				placeholder: "Необязательно",
				max: 250
			},
			{
				id: "isrc",
				label: "ISRC",
				placeholder: "Если уже присвоен",
				max: 24
			}
		], c = [
			{
				id: "arrangement",
				label: "Аранжировка / вокал / звук",
				max: 4e3,
				rows: 4
			},
			{
				id: "lyrics",
				label: "Текст песни, если нет связанной идеи",
				max: 2e4,
				rows: 6
			},
			{
				id: "style",
				label: "Промпт Suno Style, если нет связанного промпта",
				max: 1e3,
				rows: 4
			},
			{
				id: "notes",
				label: "Продюсерские заметки",
				max: 5e3,
				rows: 4
			}
		];
		return (t, r) => (V(), H("div", Ib, [
			U("div", Lb, [U("h2", null, O(e.model.editing ? "Редактировать паспорт" : "Новый паспорт трека"), 1), r[9] ||= U("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "tp-cancel"
			}, "Закрыть", -1)]),
			U("div", Rb, [
				(V(!0), H(B, null, z(o.slice(0, 2), (e) => (V(), H("div", {
					key: e.id,
					class: "field"
				}, [U("label", { for: "tp-" + e.id }, O(e.label), 9, zb), I(U("input", {
					id: "tp-" + e.id,
					"onUpdate:modelValue": (t) => n[e.id] = t,
					maxlength: e.max,
					placeholder: e.placeholder
				}, null, 8, Bb), [[q, n[e.id]]])]))), 128)),
				U("div", Vb, [r[10] ||= U("label", { for: "tp-status" }, "Этап работы", -1), I(U("select", {
					id: "tp-status",
					"onUpdate:modelValue": r[0] ||= (e) => n.status = e
				}, [(V(!0), H(B, null, z(e.model.stages, (e) => (V(), H("option", {
					key: e.value,
					value: e.value
				}, O(e.label), 9, Hb))), 128))], 512), [[Ro, n.status]])]),
				U("div", Ub, [r[11] ||= U("label", { for: "tp-genre" }, "Жанр", -1), I(U("select", {
					id: "tp-genre",
					"onUpdate:modelValue": r[1] ||= (e) => n.genre = e
				}, [(V(!0), H(B, null, z(e.model.genres, (e) => (V(), H("option", {
					key: e.value,
					value: e.value
				}, O(e.label), 9, Wb))), 128))], 512), [[Ro, n.genre]])]),
				U("div", Gb, [r[13] ||= U("label", { for: "tp-project" }, "Мой проект / артист", -1), I(U("select", {
					id: "tp-project",
					"onUpdate:modelValue": r[2] ||= (e) => n.project = e
				}, [r[12] ||= U("option", { value: "" }, "Без связи", -1), (V(!0), H(B, null, z(e.model.projects, (e) => (V(), H("option", {
					key: e.value,
					value: e.value
				}, O(e.label), 9, Kb))), 128))], 512), [[Ro, n.project]])]),
				U("div", qb, [r[15] ||= U("label", { for: "tp-idea" }, "Идея и текст песни", -1), I(U("select", {
					id: "tp-idea",
					"onUpdate:modelValue": r[3] ||= (e) => n.idea = e
				}, [r[14] ||= U("option", { value: "" }, "Без связи", -1), (V(!0), H(B, null, z(e.model.ideas, (e) => (V(), H("option", {
					key: e.value,
					value: e.value
				}, O(e.label), 9, Jb))), 128))], 512), [[Ro, n.idea]])]),
				U("div", Yb, [r[17] ||= U("label", { for: "tp-prompt" }, "Мой промпт Suno", -1), I(U("select", {
					id: "tp-prompt",
					"onUpdate:modelValue": r[4] ||= (e) => n.prompt = e
				}, [r[16] ||= U("option", { value: "" }, "Без связи", -1), (V(!0), H(B, null, z(e.model.prompts, (e) => (V(), H("option", {
					key: e.value,
					value: e.value
				}, O(e.label), 9, Xb))), 128))], 512), [[Ro, n.prompt]])]),
				U("div", Zb, [r[18] ||= U("label", { for: "tp-publisher" }, "Издательство / дистрибьютор", -1), I(U("input", {
					id: "tp-publisher",
					"onUpdate:modelValue": r[5] ||= (e) => n.publisher = e,
					maxlength: "120",
					placeholder: "Название издательства"
				}, null, 512), [[q, n.publisher]])])
			]),
			r[22] ||= U("h3", { class: "sb-track-section" }, "Даты релиза", -1),
			U("div", Qb, [U("div", $b, [r[19] ||= U("label", { for: "tp-submitted" }, "Передано издательству", -1), I(U("input", {
				id: "tp-submitted",
				"onUpdate:modelValue": r[6] ||= (e) => n.submitted = e,
				type: "date",
				onChange: a
			}, null, 544), [[q, n.submitted]])]), U("div", ex, [
				r[21] ||= U("label", { for: "tp-release" }, "Дата выхода", -1),
				I(U("input", {
					id: "tp-release",
					"onUpdate:modelValue": r[7] ||= (e) => n.release = e,
					type: "date",
					disabled: !n.override
				}, null, 8, tx), [[q, n.release]]),
				U("label", nx, [I(U("input", {
					id: "tp-override",
					"onUpdate:modelValue": r[8] ||= (e) => n.override = e,
					type: "checkbox",
					onChange: a
				}, null, 544), [[Io, n.override]]), r[20] ||= W(" Установить дату вручную ", -1)])
			])]),
			U("p", rx, O(i.value), 1),
			r[23] ||= U("h3", { class: "sb-track-section" }, "Материалы и метаданные", -1),
			U("div", ix, [(V(), H(B, null, z(s, (e) => U("div", {
				key: e.id,
				class: "field"
			}, [U("label", { for: "tp-" + e.id }, O(e.label), 9, ax), I(U("input", {
				id: "tp-" + e.id,
				"onUpdate:modelValue": (t) => n[e.id] = t,
				maxlength: e.max,
				placeholder: e.placeholder
			}, null, 8, ox), [[q, n[e.id]]])])), 64))]),
			(V(), H(B, null, z(c, (e) => U("div", {
				key: e.id,
				class: "field"
			}, [U("label", { for: "tp-" + e.id }, O(e.label), 9, sx), I(U("textarea", {
				id: "tp-" + e.id,
				"onUpdate:modelValue": (t) => n[e.id] = t,
				maxlength: e.max,
				rows: e.rows
			}, null, 8, cx), [[q, n[e.id]]])])), 64)),
			r[24] ||= U("div", { class: "sb-track-buttons" }, [U("button", {
				type: "button",
				class: "btn primary",
				"data-action": "tp-save"
			}, "Сохранить паспорт"), U("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "tp-cancel"
			}, "Отмена")], -1),
			r[25] ||= U("p", { class: "sb-track-disclaimer" }, " Обложка и аудио пока прикрепляются ссылками. Загрузка файлов будет доступна после переноса на сервер. Данные сохраняются локально и попадают в резервную копию SUNOBOOM. ", -1)
		]));
	}
};
// src/vue/account/legacyTrackPassportEditorBridge.js
function ux({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_TRACK_EDITOR, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Q({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-track-editor[data-sb-vue-track-editor]"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, lx, {
			model: r,
			api: t
		})
	});
}
// src/vue/poetry/IdeaFields.vue
var dx = { class: "field" }, fx = { class: "field" }, px = ["value"], mx = { class: "field" }, hx = {
	class: "sub",
	"data-sb-vue-idea-draft-progress": ""
}, gx = {
	key: 0,
	class: "sub",
	"data-sb-vue-last-prompt-draft": ""
}, _x = { class: "field" }, vx = {
	__name: "IdeaFields",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = /* @__PURE__ */ Wt({ ...e.initial.values }), n = Z();
		return L(() => [
			t.title,
			t.genre,
			t.text,
			t.hook
		], () => n.publishIdeaDraftSummary(t), { immediate: !0 }), (r, i) => (V(), H(B, null, [
			U("div", dx, [i[4] ||= U("label", { for: "custom-idea-title" }, "Название песни", -1), I(U("input", {
				id: "custom-idea-title",
				"onUpdate:modelValue": i[0] ||= (e) => t.title = e,
				maxlength: "100",
				placeholder: "Например, Город на ладони"
			}, null, 512), [[q, t.title]])]),
			U("div", fx, [i[5] ||= U("label", { for: "custom-idea-genre" }, "Музыкальный жанр", -1), I(U("select", {
				id: "custom-idea-genre",
				"onUpdate:modelValue": i[1] ||= (e) => t.genre = e
			}, [(V(!0), H(B, null, z(e.initial.genres, (e) => (V(), H("option", {
				key: e.id,
				value: e.id
			}, O(e.name), 9, px))), 128))], 512), [[Ro, t.genre]])]),
			U("div", mx, [i[6] ||= U("label", { for: "custom-idea-text" }, "Сюжет и основная идея", -1), I(U("textarea", {
				id: "custom-idea-text",
				"onUpdate:modelValue": i[2] ||= (e) => t.text = e,
				rows: "5",
				maxlength: "3000",
				placeholder: "О чём песня и что происходит с героем?"
			}, null, 512), [[q, t.text]])]),
			U("p", hx, "Сюжет: " + O(F(n).ideaDraftSummary.ideaLength) + " / 3000 · Название: " + O(F(n).ideaDraftSummary.titleLength) + " / 100", 1),
			F(n).promptDraftSummary.ready ? (V(), H("p", gx, "Последний открытый черновик промпта: " + O(F(n).promptDraftSummary.textLength) + " / 1000 символов", 1)) : G("", !0),
			U("div", _x, [i[7] ||= U("label", { for: "custom-idea-hook" }, "Фраза для припева (необязательно)", -1), I(U("input", {
				id: "custom-idea-hook",
				"onUpdate:modelValue": i[3] ||= (e) => t.hook = e,
				maxlength: "240",
				placeholder: "Запоминающаяся строчка"
			}, null, 512), [[q, t.hook]])])
		], 64));
	}
}, yx = {
	key: 0,
	class: "sub",
	"data-sb-vue-poetry-source-count": ""
}, bx = {
	__name: "LyricsSource",
	props: {
		initial: {
			type: Object,
			required: !0
		},
		api: {
			type: Object,
			required: !0
		}
	},
	setup(e) {
		let t = e, n = /* @__PURE__ */ N(null), r = Z(), i = () => {
			n.value && r.publishPoetrySourceSummary(n.value.value);
		}, a = (e) => {
			e.target.closest?.("[data-action=\"sb-poetry-accent\"]") && i();
		};
		return R(() => {
			t.initial.highlighted && t.api.enableHighlight(n.value), i(), document.addEventListener("click", a);
		}), Sr(() => document.removeEventListener("click", a)), (t, a) => (V(), H(B, null, [
			a[1] ||= U("label", { for: "custom-idea-lyrics" }, "Оригинальный текст (необязательно)", -1),
			a[0] || (ta(-1, !0), (a[0] = U("textarea", {
				id: "custom-idea-lyrics",
				ref_key: "area",
				ref: n,
				value: e.initial.values.lyrics,
				onInput: i,
				rows: "12",
				maxlength: "20000",
				placeholder: "Куплет 1:\nТекст первого куплета...\n\nПрипев:\nТекст припева..."
			}, null, 40, ["value"])).cacheIndex = 0, ta(1), a[0]),
			F(r).poetrySourceSummary.ready ? (V(), H("p", yx, " Исходный текст: " + O(F(r).poetrySourceSummary.charCount) + " / 20000 символов · " + O(F(r).poetrySourceSummary.lineCount) + " непустых строк ", 1)) : G("", !0)
		], 64));
	}
}, xx = {
	key: 0,
	class: "workbench-note",
	"data-sb-vue-poetry-tools-count": ""
}, Sx = {
	key: 1,
	class: "workbench-note",
	"data-sb-vue-poetry-analysis-count": ""
}, Cx = {
	key: 2,
	class: "workbench-note",
	"data-sb-vue-poetry-ambiguity-count": ""
}, wx = {
	key: 3,
	class: "workbench-note",
	"data-sb-vue-tags-summary": ""
}, Tx = {
	key: 0,
	"data-sb-vue-tags-freshness": "",
	role: "status"
}, Ex = { key: 0 }, Dx = { key: 1 }, Ox = { key: 2 }, kx = { class: "field" }, Ax = ["value"], jx = { class: "workbench-switches" }, Mx = ["id", "onUpdate:modelValue"], Nx = { class: "field" }, Px = { class: "detail-actions" }, Fx = {
	type: "button",
	class: "btn ghost",
	"data-action": "copy-current-lyrics"
}, Ix = ["innerHTML"], Lx = { class: "field" }, Rx = { class: "detail-actions" }, zx = {
	type: "button",
	class: "btn ghost",
	"data-action": "copy-current-style"
}, Bx = ["innerHTML"], Vx = {
	__name: "LyricsTools",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Wt({ ...t.initial.values }), r = /* @__PURE__ */ Wt({ ...t.initial.switches }), i = Z(), a = {
			smart: "Smart",
			rules: "По правилам",
			manual: "Ручной"
		}, o = [
			["power", "Сильный, качающий припев"],
			["emotional", "Эмоциональная песня"],
			["dance", "Танцевальный трек"],
			["epic", "Эпический финал"],
			["soft", "Мягкое звучание"]
		], s = [
			["build", "Нарастание перед припевом"],
			["harmonies", "Бэк-вокал и гармонии в припеве"],
			["final", "Усиленный финальный припев"],
			["drop", "Дроп после припева (для танцевального)"],
			["short", "Короткое вступление"]
		];
		return (t, c) => (V(), H(B, null, [
			F(i).poetrySourceSummary.ready ? (V(), H("p", xx, " Исходник для аранжировки: " + O(F(i).poetrySourceSummary.lineCount) + " строк, " + O(F(i).poetrySourceSummary.wordCount) + " слов ", 1)) : G("", !0),
			F(i).poetryAnalysisSummary.analyzed ? (V(), H("p", Sx, " Последний анализ: " + O(F(i).poetryAnalysisSummary.rowCount) + " строк · " + O(F(i).poetryAnalysisSummary.stressMarkCount) + " меток ударения · " + O(F(i).poetryAnalysisSummary.suggestionCount) + " рекомендаций ", 1)) : G("", !0),
			F(i).poetryAmbiguitySummary.ready ? (V(), H("p", Cx, " Предпросмотр ударений: " + O(F(i).poetryAmbiguitySummary.occurrenceCount) + " неоднозначных вхождений · " + O(F(i).poetryAmbiguitySummary.distinctCount) + " разных слов ", 1)) : G("", !0),
			F(i).performanceTagsSummary.ready ? (V(), H("p", wx, [W(" Теги исполнения: " + O(a[F(i).performanceTagsSummary.mode]) + " · интенсивность " + O(F(i).performanceTagsSummary.intensity) + "/5 · " + O(F(i).performanceTagsSummary.enabledTechniques) + " приёмов · " + O(F(i).performanceTagsSummary.busy ? "идёт генерация" : F(i).performanceTagsSummary.previewOpen ? F(i).performanceTagsSummary.sectionCount + " секций в предпросмотре" : "предпросмотр закрыт") + " ", 1), F(i).performanceTagsSummary.previewOpen ? (V(), H("span", Tx, [
				W(" · " + O(F(i).performanceTagsSummary.previewFresh ? "Текст и настройки не изменены; проверь теги перед применением." : "Предпросмотр устарел — создай новый.") + " ", 1),
				F(i).performanceTagsSummary.sourceChanged ? (V(), H("span", Ex, " Изменён исходник.")) : G("", !0),
				F(i).performanceTagsSummary.targetChanged ? (V(), H("span", Dx, " Изменено готовое поле Lyrics.")) : G("", !0),
				F(i).performanceTagsSummary.settingsChanged ? (V(), H("span", Ox, " Изменены настройки.")) : G("", !0)
			])) : G("", !0)])) : G("", !0),
			U("div", kx, [c[3] ||= U("label", { for: "lyrics-tag-preset" }, "Характер аранжировки", -1), I(U("select", {
				id: "lyrics-tag-preset",
				"onUpdate:modelValue": c[0] ||= (e) => n.preset = e
			}, [(V(), H(B, null, z(o, ([e, t]) => U("option", {
				key: e,
				value: e
			}, O(t), 9, Ax)), 64))], 512), [[Ro, n.preset]])]),
			U("div", jx, [(V(), H(B, null, z(s, ([e, t]) => U("label", { key: e }, [I(U("input", {
				id: "lyrics-" + e,
				"onUpdate:modelValue": (t) => r[e] = t,
				type: "checkbox"
			}, null, 8, Mx), [[Io, r[e]]]), W(" " + O(t), 1)])), 64))]),
			c[8] ||= U("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "format-idea-lyrics"
			}, "✨ Создать теги и усилители", -1),
			c[9] ||= U("p", { class: "workbench-note" }, "Разметка примерная: если в тексте нет названий секций, куплеты и припевы определяются по абзацам. Проверь расположение тегов перед копированием.", -1),
			U("div", Nx, [c[4] ||= U("label", { for: "custom-idea-tagged" }, "Готовая версия для поля Lyrics в Suno (можно исправить вручную)", -1), I(U("textarea", {
				id: "custom-idea-tagged",
				"onUpdate:modelValue": c[1] ||= (e) => n.tagged = e,
				rows: "13",
				maxlength: "25000",
				placeholder: "[Verse 1]\n...\n\n[Chorus - powerful melodic hook]\n..."
			}, null, 512), [[q, n.tagged]])]),
			U("div", Px, [U("button", Fx, [U("span", { innerHTML: e.initial.copyIcon }, null, 8, Ix), c[5] ||= W(" Копировать Lyrics", -1)])]),
			U("div", Lx, [c[6] ||= U("label", { for: "custom-idea-style" }, "Дополнительное описание для поля Style (до 1000 символов)", -1), I(U("textarea", {
				id: "custom-idea-style",
				"onUpdate:modelValue": c[2] ||= (e) => n.style = e,
				rows: "4",
				maxlength: "1000",
				placeholder: "Описание жанра, вокала и динамики для Suno"
			}, null, 512), [[q, n.style]])]),
			U("div", Rx, [U("button", zx, [U("span", { innerHTML: e.initial.copyIcon }, null, 8, Bx), c[7] ||= W(" Копировать Style", -1)])])
		], 64));
	}
};
// src/vue/legacy/observeLegacyIslands.js
function Hx({ root: e, islands: t, subscribe: n, beforeSync: r, createObserver: i = (e) => new MutationObserver(e) }) {
	if (!e || !Array.isArray(t) || !t.length || t.some((e) => !e || typeof e.key != "string" || !e.key || typeof e.selectTarget != "function" || typeof e.readSnapshot != "function" || typeof e.mount != "function") || new Set(t.map((e) => e.key)).size !== t.length) return () => {};
	let a = /* @__PURE__ */ new Map(), o = !1;
	function s() {
		if (!o) {
			typeof r == "function" && r();
			for (let n of t) {
				let t = n.selectTarget(e), r = a.get(n.key), i = typeof n.readRevision == "function" ? n.readRevision() : void 0;
				if (r?.target === t && t?.isConnected && r.revision === i || (r && (a.delete(n.key), r.unmount()), !t?.isConnected)) continue;
				let o = n.readSnapshot(t);
				if (!o) continue;
				let s = n.mount(t, o);
				typeof s == "function" && a.set(n.key, {
					target: t,
					revision: i,
					unmount: s
				});
			}
		}
	}
	let c = i(s);
	c.observe(e, { childList: !0 });
	let l = typeof n == "function" ? n(s) : null;
	return s(), () => {
		if (!o) {
			o = !0, c.disconnect(), typeof l == "function" && l();
			for (let { unmount: e } of a.values()) e();
			a.clear();
		}
	};
}
// src/vue/poetry/legacyIdeaEditorBridge.js
function Ux({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_IDEA_EDITOR, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Hx({
		root: n,
		islands: [
			["sb-vue-idea-fields", vx],
			["sb-vue-lyrics-source", bx],
			["sb-vue-lyrics-tools", Vx]
		].map(([n, r]) => ({
			key: n,
			selectTarget: (e) => e.querySelector("#" + n),
			readSnapshot: () => t.snapshot(),
			mount: (n, i) => e(n, r, {
				api: t,
				initial: i
			})
		}))
	});
}
// src/vue/state/legacyAppearanceBridge.js
function Wx({ sharedUi: e }) {
	let t = window.SUNOBOOM_LEGACY_SETTINGS;
	if (!t || typeof t.snapshot != "function" || !e?.publishAppearance) return () => {};
	let n = !1;
	function r() {
		n || e.publishAppearance(t.snapshot());
	}
	return window.addEventListener("sunoboom:appearance-change", r), r(), () => {
		n = !0, window.removeEventListener("sunoboom:appearance-change", r);
	};
}
// src/vue/VueFeatureHost.vue
var Gx = {
	__name: "VueFeatureHost",
	props: {
		component: {
			type: [Object, Function],
			required: !0
		},
		componentProps: {
			type: Object,
			default: () => ({})
		}
	},
	setup(e) {
		return (t, n) => (V(), ra(Ar(e.component), ve(ua(e.componentProps)), null, 16));
	}
}, Kx = [
	"data-nav",
	"data-vue-router-path",
	"aria-current",
	"aria-label",
	"title",
	"onClick"
], qx = ["innerHTML"], Jx = { class: "sb-vue-nav-label" }, Yx = {
	__name: "NavigationMenu",
	props: {
		items: {
			type: Array,
			required: !0
		},
		mobile: {
			type: Boolean,
			default: !1
		},
		onNavigate: {
			type: Function,
			required: !0
		}
	},
	setup(e) {
		let t = Nl(), n = Ml(), r = Z(), i = e, a = K(() => r.navigationItems.length ? r.navigationItems : i.items);
		function o(e) {
			i.onNavigate(e, n);
		}
		let s = (e) => {
			let n = r.route;
			return (t.path === Il(n.route) ? Ll(t.path) : n.active) === e;
		};
		return (n, r) => (V(!0), H(B, null, z(a.value, (n) => (V(), H("button", {
			key: n.id,
			type: "button",
			class: D(e.mobile ? s(n.id) ? "active" : "" : ["nav-button", { active: s(n.id) }]),
			"data-nav": n.id,
			"data-vue-router-path": F(t).path,
			"aria-current": s(n.id) ? "page" : void 0,
			"aria-label": e.mobile ? n.label : void 0,
			title: e.mobile ? n.label : void 0,
			onClick: (e) => o(n.id)
		}, [U("span", {
			class: "sb-vue-nav-icon",
			"aria-hidden": "true",
			innerHTML: n.iconHtml
		}, null, 8, qx), U("span", Jx, O(e.mobile ? n.shortLabel : n.label), 1)], 10, Kx))), 128));
	}
}, Xx = {
	class: "sb-vue-history-toolbar",
	role: "group",
	"aria-label": "История разделов SUNOBOOM"
}, Zx = ["disabled"], Qx = ["disabled"], $x = /*#__PURE__*/ Cd({
	__name: "VueHistoryControls",
	props: {
		canRestore: {
			type: Function,
			required: !0
		},
		onRestore: {
			type: Function,
			required: !0
		}
	},
	setup(e) {
		let t = e, n = Nl(), r = Z(), i = /* @__PURE__ */ N(!1), a = K(() => (n.path, r.route.revision, Kl.value, {
			back: !i.value && t.canRestore("back"),
			forward: !i.value && t.canRestore("forward")
		}));
		async function o(e) {
			if (a.value[e]) {
				i.value = !0;
				try {
					await t.onRestore(e);
				} finally {
					i.value = !1;
				}
			}
		}
		return (e, t) => (V(), H("div", Xx, [
			t[4] ||= U("span", { class: "sb-vue-history-caption" }, "История разделов", -1),
			U("button", {
				type: "button",
				class: "sb-vue-history-button",
				"data-sb-history-back": "",
				disabled: !a.value.back,
				"aria-label": "Назад по разделам",
				title: "К предыдущему разделу",
				onClick: t[0] ||= (e) => o("back")
			}, [...t[2] ||= [U("svg", {
				viewBox: "0 0 24 24",
				width: "16",
				height: "16",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				"aria-hidden": "true"
			}, [U("path", { d: "m15 18-6-6 6-6" })], -1)]], 8, Zx),
			U("button", {
				type: "button",
				class: "sb-vue-history-button",
				"data-sb-history-forward": "",
				disabled: !a.value.forward,
				"aria-label": "Вперёд по разделам",
				title: "К следующему разделу",
				onClick: t[1] ||= (e) => o("forward")
			}, [...t[3] ||= [U("svg", {
				viewBox: "0 0 24 24",
				width: "16",
				height: "16",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				"aria-hidden": "true"
			}, [U("path", { d: "m9 18 6-6-6-6" })], -1)]], 8, Qx)
		]));
	}
}, [["__scopeId", "data-v-c738b8ec"]]), eS = Object.freeze({
	"/account/myideas": "myideas",
	"/account/myprompts": "myprompts",
	"/account/events": "events"
});
function tS(e) {
	if (e?.active === "producer" && e?.production?.id) return Il("producer", {
		kind: "production",
		id: e.production.id
	});
	let t = e?.track;
	return Il(e?.active, t?.id ? {
		kind: "track",
		id: t.id
	} : null);
}
function nS(e, t) {
	if (!e || typeof t?.snapshot != "function") return null;
	let n = t.snapshot();
	if (n?.trackEditing) return null;
	let r = tu(e.path);
	if (r && n?.items?.some((e) => e?.id === r)) return {
		kind: "menu",
		id: r
	};
	let i = eS[e.path];
	if (i && typeof t.navigateWorkspace == "function") return {
		kind: "workspace",
		id: i
	};
	let a = e.context;
	return e.path === "/catalog/detail" && a?.kind === "genre" && typeof t.canRestoreGenre == "function" && t.canRestoreGenre(a.id, a.tab) && typeof t.restoreGenre == "function" ? {
		kind: "genre",
		id: a.id,
		tab: a.tab
	} : a?.kind === "production" && e.path === Il("producer", a) && t.canRestoreProduction?.(a.id) === !0 && typeof t.restoreProduction == "function" ? {
		kind: "production",
		id: a.id
	} : e.path === "/account/tracks" && t.canRestoreTrackList?.() === !0 && typeof t.restoreTrackList == "function" ? { kind: "track-list" } : e.path === "/account/tracks/detail" && a?.kind === "track" && t.canRestoreTrack?.(a.id) === !0 && typeof t.restoreTrack == "function" ? {
		kind: "track",
		id: a.id
	} : null;
}
var rS = !1;
function iS(e, { legacyApi: t } = {}) {
	if (rS || !["back", "forward"].includes(e) || typeof t?.snapshot != "function") return !1;
	let n = eu(e), r = t.snapshot();
	return !!nS(n, t) && au().path === tS(r);
}
async function aS(e, { legacyApi: t, syncRoute: n = cu } = {}) {
	if (rS || !["back", "forward"].includes(e) || !t || typeof t.snapshot != "function" || typeof t.navigate != "function") return !1;
	rS = !0;
	try {
		await ru();
		let r = nS(eu(e), t), i = t.snapshot();
		if (!r || au().path !== tS(i) || !await iu(e)) return !1;
		if (r.kind === "genre") {
			if (t.restoreGenre(r.id, r.tab) !== !0) return n(t.snapshot()?.active), !1;
		} else if (r.kind === "production") {
			if (t.restoreProduction(r.id) !== !0) return n(t.snapshot()?.active), !1;
		} else if (r.kind === "track-list") {
			if (t.restoreTrackList() !== !0) return n(t.snapshot()?.active), !1;
		} else if (r.kind === "track") {
			if (t.restoreTrack(r.id) !== !0) return n(t.snapshot()?.active), !1;
		} else if (r.kind === "workspace") t.navigateWorkspace(r.id);
		else if (r.id === "catalog" && i.active === "detail" && typeof t.returnToAcademy == "function") {
			if (t.returnToAcademy() !== !0) return n(t.snapshot()?.active), !1;
		} else t.navigate(r.id);
		let a = t.snapshot(), o = a?.active;
		return n(o, { context: r.kind === "track" ? {
			kind: "track",
			id: r.id
		} : r.kind === "production" ? {
			kind: "production",
			id: r.id
		} : null }), r.kind === "production" ? o === "producer" && a?.production?.id === r.id : r.kind === "track" ? o === "tracks" && a?.track?.id === r.id : r.kind === "track-list" ? o === "tracks" && !a?.track && !a?.trackEditing : o === (r.kind === "genre" ? "detail" : r.id);
	} catch (e) {
		return console.warn("[SUNOBOOM] Vue history restore skipped; legacy navigation remains active.", e), !1;
	} finally {
		rS = !1;
	}
}
// src/vue/navigation/legacyBridge.js
var oS = [{
	key: "sidebar",
	selector: "[data-sb-vue-sidebar]",
	mobile: !1
}, {
	key: "mobile",
	selector: "[data-sb-vue-mobile]",
	mobile: !0
}];
function sS({ mountVueFeature: e, unmountVueFeature: t, sharedUi: n }) {
	let r = window.SUNOBOOM_LEGACY_NAV, i = document.getElementById("app");
	if (!r || !i || typeof r.snapshot != "function") return () => {};
	let a = () => {}, o = [], s, c = !1;
	window.SUNOBOOM_VUE_ROUTE = Object.freeze({
		snapshot: () => su.value,
		routerSnapshot: () => au(),
		sharedState: () => Object.freeze({
			route: n.route.route,
			active: n.route.active,
			menuIds: n.navigationItems.map((e) => e.id),
			dashboardStats: { ...n.dashboardStats },
			appearance: { ...n.appearance },
			academyCatalog: { ...n.academyCatalog },
			academyFocus: { ...n.academyFocus },
			academyTree: { ...n.academyTree },
			studioSummary: { ...n.studioSummary },
			mixerSummary: { ...n.mixerSummary },
			auditorSummary: { ...n.auditorSummary },
			arrangerSummary: { ...n.arrangerSummary },
			playerLabSummary: { ...n.playerLabSummary },
			playerAbSummary: { ...n.playerAbSummary },
			masterListSummary: { ...n.masterListSummary },
			passportListSummary: { ...n.passportListSummary },
			masterDetailSummary: { ...n.masterDetailSummary },
			passportDetailSummary: { ...n.passportDetailSummary },
			songCollectionSummary: { ...n.songCollectionSummary },
			songDetailSummary: { ...n.songDetailSummary },
			artistManagerSummary: { ...n.artistManagerSummary },
			artistDnaSummary: { ...n.artistDnaSummary },
			librarySummary: { ...n.librarySummary },
			ideaDraftSummary: { ...n.ideaDraftSummary },
			promptDraftSummary: { ...n.promptDraftSummary },
			poetrySourceSummary: { ...n.poetrySourceSummary },
			poetryAnalysisSummary: { ...n.poetryAnalysisSummary },
			poetryAmbiguitySummary: { ...n.poetryAmbiguitySummary },
			performanceTagsSummary: { ...n.performanceTagsSummary }
		}),
		back: () => aS("back", { legacyApi: r }),
		forward: () => aS("forward", { legacyApi: r }),
		recordGenre: (e, t, n = "push") => {
			let i = r.snapshot();
			return i.active !== "detail" || i.detail?.id !== e || i.detail?.tab !== t || !r.canRestoreGenre?.(e, t) ? !1 : (cu("detail", {
				historyMode: n,
				context: {
					kind: "genre",
					id: e,
					tab: t
				}
			}), !0);
		},
		recordProduction: (e, t = "push") => {
			let n = r.snapshot();
			return n.active !== "producer" || n.production?.id !== e || !r.canRestoreProduction?.(e) ? !1 : (cu("producer", {
				historyMode: t,
				context: {
					kind: "production",
					id: e
				}
			}), !0);
		},
		recordTrackList: () => {
			let e = r.snapshot();
			return e.active !== "tracks" || e.track?.id || e.trackEditing ? !1 : (cu("tracks"), !0);
		},
		recordTrack: (e, t = "push") => {
			let n = r.snapshot();
			return n.active !== "tracks" || n.track?.id !== e || n.trackEditing || !r.canRestoreTrack?.(e) ? !1 : (cu("tracks", {
				historyMode: t,
				context: {
					kind: "track",
					id: e
				}
			}), !0);
		}
	});
	function l() {
		let e = r.snapshot();
		cu(e.active, { context: e.track?.id ? {
			kind: "track",
			id: e.track.id
		} : e.active === "producer" && e.production?.id ? {
			kind: "production",
			id: e.production.id
		} : null }), o = Fs(e), n.publishNavigation(o), s = JSON.stringify(o.map(({ active: e, ...t }) => t));
	}
	let u = r.snapshot();
	return cu(u.active, { context: u.track?.id ? {
		kind: "track",
		id: u.track.id
	} : u.active === "producer" && u.production?.id ? {
		kind: "production",
		id: u.production.id
	} : null }), ru().then(() => {
		c || (a = Hx({
			root: i,
			beforeSync: l,
			islands: [{
				key: "history",
				selectTarget: (e) => e.querySelector("[data-sb-vue-history]"),
				readSnapshot: () => r,
				mount: (t) => e(t, $x, {
					canRestore: (e) => iS(e, { legacyApi: r }),
					onRestore: (e) => aS(e, { legacyApi: r })
				}, { vueRouter: !0 })
			}, ...oS.map(({ key: t, selector: n, mobile: i }) => ({
				key: t,
				selectTarget: (e) => e.querySelector(n),
				readRevision: () => s,
				readSnapshot: () => o,
				mount: (t, n) => e(t, Yx, {
					items: n,
					mobile: i,
					onNavigate: (e, t) => Rf(e, {
						router: t,
						legacyApi: r
					})
				}, { vueRouter: !0 })
			}))]
		}));
	}), function() {
		c || (c = !0, a());
	};
}
// src/vue/navigation/TopHeader.vue
var cS = { class: "breadcrumbs" }, lS = {
	class: "brand-mobile",
	style: { display: "none" }
}, uS = { class: "sb-logo-lockup" }, dS = ["src"], fS = ["aria-label"], pS = { class: "top-right" }, mS = ["aria-label"], hS = [
	"aria-label",
	"aria-expanded",
	"title"
], gS = ["aria-hidden"], _S = {
	class: "avatar account-shortcut",
	type: "button",
	title: "Личный кабинет",
	"aria-label": "Открыть личный кабинет",
	"data-action": "nav",
	"data-nav": "account"
}, vS = {
	__name: "TopHeader",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (V(), H(B, null, [
			U("div", cS, [n[0] ||= W("Рабочее пространство / ", -1), U("b", null, O(e.model.breadcrumb), 1)]),
			U("div", lS, [U("div", uS, [U("img", {
				class: "sb-mobile-logo",
				src: e.model.logoSrc,
				alt: "SUNOBOOM — фирменный логотип"
			}, null, 8, dS), n[1] ||= U("span", { class: "sb-brand-tagline" }, "Больше, чем музыка", -1)]), U("button", {
				type: "button",
				class: "sb-app-version sb-version-trigger",
				"aria-label": "Версия SUNOBOOM " + e.model.version + " — открыть историю обновлений",
				"aria-haspopup": "dialog",
				title: "История версий SUNOBOOM"
			}, "v" + O(e.model.version), 9, fS)]),
			U("div", pS, [
				n[3] ||= U("span", { class: "pill sb-prototype-pill" }, "🧪 Прототип", -1),
				U("button", {
					type: "button",
					class: "sb-app-version sb-version-trigger",
					"aria-label": "Версия SUNOBOOM " + e.model.version + " — открыть историю обновлений",
					"aria-haspopup": "dialog",
					title: "История версий SUNOBOOM"
				}, "v" + O(e.model.version), 9, mS),
				U("button", {
					type: "button",
					class: D(["sb-notice-bell", { "sb-notice-bell-unread": e.model.unreadCount > 0 }]),
					"data-action": "sb-notice-toggle",
					"aria-label": e.model.unreadCount ? "Уведомления, непрочитанных: " + e.model.unreadCount : "Уведомления, демонстрация счётчика уведомлений",
					"aria-expanded": String(e.model.noticeOpen),
					title: e.model.unreadCount ? "Напоминания о событиях" : "Пример счётчика: 3 (настоящих уведомлений пока нет)"
				}, [n[2] ||= U("span", {
					class: "sb-notice-bell-icon",
					"aria-hidden": "true"
				}, [U("svg", {
					viewBox: "0 0 24 24",
					"aria-hidden": "true"
				}, [U("path", { d: "M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" }), U("path", { d: "M10 21h4" })])], -1), U("span", {
					class: D(["sb-notice-count", { "sb-notice-count-preview": e.model.noticePreview }]),
					"aria-hidden": e.model.noticePreview ? "true" : void 0
				}, O(e.model.noticeBadge === 99 && e.model.unreadCount > 99 ? "99+" : e.model.noticeBadge), 11, gS)], 10, hS),
				n[4] ||= fa("<button type=\"button\" class=\"sb-notice-bell sb-settings-shortcut\" data-sbs-action=\"open-top\" aria-label=\"Открыть настройки приложения\" title=\"Настройки\" aria-haspopup=\"false\"><span class=\"sb-notice-bell-icon\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M10.5 2h3l.5 2.2 1.6.7 2-1.1 2.1 2.1-1 2 .7 1.7 2.1.4v3l-2.1.5-.7 1.6 1 2-2.1 2.1-2-1-.1.1-1.5.6-.5 2.1h-3l-.5-2.1-1.6-.7-2 1-2.1-2.1 1.1-2-.7-1.6-2.2-.5v-3l2.2-.4.7-1.7-1.1-2 2.1-2.1 2 1.1 1.6-.7z\"></path><circle cx=\"12\" cy=\"11.5\" r=\"3\"></circle></svg></span></button>", 1),
				U("button", _S, O(e.model.avatarInitial), 1)
			])
		], 64));
	}
};
// src/vue/navigation/top-header-model.js
function yS(e) {
	return !e || typeof e != "object" || Array.isArray(e) || typeof e.breadcrumb != "string" || e.breadcrumb.length > 160 || typeof e.logoSrc != "string" || !e.logoSrc || e.logoSrc.length > 2e4 || typeof e.version != "string" || !/^\d+\.\d+$/.test(e.version) || typeof e.avatarInitial != "string" || e.avatarInitial.length !== 1 || !Number.isSafeInteger(e.unreadCount) || e.unreadCount < 0 || typeof e.noticeOpen != "boolean" ? null : Object.freeze({
		breadcrumb: e.breadcrumb,
		logoSrc: e.logoSrc,
		version: e.version,
		avatarInitial: e.avatarInitial,
		unreadCount: e.unreadCount,
		noticeOpen: e.noticeOpen,
		noticeBadge: e.unreadCount ? Math.min(e.unreadCount, 99) : 3,
		noticePreview: e.unreadCount === 0
	});
}
// src/vue/navigation/legacyTopHeaderBridge.js
function bS({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_HEADER, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Q({
		root: n,
		selectTarget: (e) => e.querySelector(".top[data-sb-vue-top]"),
		readSnapshot: () => yS(t.snapshot()),
		mount: (t, n) => e(t, vS, { model: n })
	});
}
// src/vue/academy/GenreCards.vue
var xS = ["data-id"], SS = { class: "genre-content" }, CS = { class: "kicker" }, wS = { class: "foot" }, TS = {
	__name: "GenreCards",
	props: { genres: {
		type: Array,
		required: !0
	} },
	setup(e) {
		return (t, n) => (V(!0), H(B, null, z(e.genres, (e) => (V(), H("button", {
			key: e.id,
			type: "button",
			class: "genre-card",
			style: E({ "--accent": e.color }),
			"data-action": "genre",
			"data-id": e.id
		}, [n[1] ||= U("div", {
			class: "art",
			"aria-hidden": "true"
		}, null, -1), U("div", SS, [U("div", null, [
			U("div", CS, O(e.family) + " · " + O(e.bpm[0]) + "–" + O(e.bpm[1]) + " BPM", 1),
			U("h3", null, O(e.name), 1),
			U("p", null, O(e.tagline), 1)
		]), U("div", wS, [U("span", null, O(e.era), 1), n[0] ||= U("span", { style: { color: "#ffacd9" } }, "Открыть →", -1)])])], 12, xS))), 128));
	}
}, ES = { class: "genre-family-toolbar" }, DS = { class: "search-box" }, OS = ["innerHTML"], kS = { class: "hint" }, AS = { class: "genre-family-summary" }, jS = { id: "catalog-count" }, MS = ["data-id"], NS = {
	class: "hint",
	id: "sb-academy-search-hint"
}, PS = {
	id: "catalog-cards",
	class: "genre-families"
}, FS = [
	"data-family",
	"open",
	"onToggle"
], IS = {
	class: "genre-family-icon",
	"aria-hidden": "true"
}, LS = { class: "genre-family-heading" }, RS = { class: "genre-family-right" }, zS = { class: "genre-family-count" }, BS = { class: "genre-family-body" }, VS = {
	key: 0,
	class: "sb-sacred-index"
}, HS = {
	key: 0,
	class: "sb-sacred-overview"
}, US = { class: "genre-grid" }, WS = { class: "sb-sacred-religions" }, GS = [
	"data-sb-religion",
	"open",
	"onToggle"
], KS = { class: "sb-sacred-religion-header" }, qS = {
	class: "sb-sacred-religion-icon",
	"aria-hidden": "true"
}, JS = { class: "sb-sacred-religion-label" }, YS = { class: "sb-sacred-count" }, XS = { class: "sb-sacred-religion-content" }, ZS = [
	"data-sb-branch",
	"open",
	"onToggle"
], QS = { class: "sb-sacred-branch-header" }, $S = { class: "sb-sacred-branch-label" }, eC = { class: "sb-sacred-count" }, tC = { class: "sb-sacred-branch-content" }, nC = { class: "genre-grid" }, rC = {
	key: 1,
	class: "genre-grid"
}, iC = {
	key: 1,
	class: "genre-family-empty"
}, aC = {
	__name: "AcademyCatalog",
	props: {
		snapshot: {
			type: Object,
			required: !0
		},
		search: {
			type: Function,
			required: !0
		},
		setExpanded: {
			type: Function,
			required: !0
		},
		searchIcon: {
			type: String,
			default: ""
		}
	},
	setup(e) {
		let t = e, n = Z(), r = /* @__PURE__ */ N(t.snapshot.query || ""), i = /* @__PURE__ */ Wt({
			family: { ...t.snapshot.expanded?.family || {} },
			religion: { ...t.snapshot.expanded?.religion || {} },
			branch: { ...t.snapshot.expanded?.branch || {} }
		}), a = K(() => t.search(r.value)), o = K(() => !!r.value.trim()), s = K(() => {
			let e = a.value.ids == null ? null : new Set(a.value.ids);
			return (t.snapshot.families || []).map((t) => ({
				...t,
				genres: t.genres.filter((t) => !e || e.has(t.id))
			})).filter((e) => e.genres.length);
		}), c = K(() => s.value.reduce((e, t) => e + t.genres.length, 0)), l = K(() => o.value ? {
			name: "По названиям жанров",
			family: "По направлениям",
			artist: "По исполнителям",
			description: "По описаниям и звучанию"
		}[a.value.mode] || "" : "Поиск работает при вводе"), u = K(() => s.value.find((e) => e.name === "Религиозная музыка")), d = K(() => u.value?.genres.find((e) => e.id === "sacred-music")), f = K(() => {
			if (!u.value) return [];
			let e = new Map(u.value.genres.map((e) => [e.id, e]));
			return (t.snapshot.sacred || []).map((t) => {
				let n = t.branches.map((t) => ({
					...t,
					genres: t.ids.map((t) => e.get(t)).filter(Boolean)
				})).filter((e) => e.genres.length);
				return {
					...t,
					branches: n,
					count: n.reduce((e, t) => e + t.genres.length, 0)
				};
			}).filter((e) => e.branches.length);
		}), p = t.snapshot.families.reduce((e, t) => e + t.genres.length, 0);
		L([
			r,
			a,
			c
		], ([e, t, r]) => {
			n.publishAcademyCatalog({
				query: e,
				results: r,
				total: p,
				mode: t?.mode || ""
			});
		}, { immediate: !0 });
		let m = K(() => (t.snapshot.families || []).flatMap((e) => e.genres).find((e) => e.id === n.academyFocus.genreId) || null);
		function h(e, t) {
			return o.value || !!i[e][t];
		}
		function g(e, n, r) {
			if (o.value) return;
			let a = r.currentTarget.open;
			i[e][n] !== a && (i[e][n] = a, t.setExpanded(e, n, a));
		}
		function _(e) {
			return e === 1 ? "жанр" : e >= 2 && e <= 4 ? "жанра" : "жанров";
		}
		function v(e) {
			return e === 1 ? "направление" : e >= 2 && e <= 4 ? "направления" : "направлений";
		}
		return (t, n) => (V(), H(B, null, [
			U("div", ES, [U("label", DS, [U("span", {
				innerHTML: e.searchIcon,
				"aria-hidden": "true"
			}, null, 8, OS), I(U("input", {
				id: "genre-search",
				"onUpdate:modelValue": n[0] ||= (e) => r.value = e,
				type: "search",
				enterkeyhint: "search",
				autocapitalize: "off",
				spellcheck: "false",
				"aria-label": "Поиск жанров",
				placeholder: "Поиск жанра, поджанра или исполнителя…",
				autocomplete: "off"
			}, null, 512), [[q, r.value]])]), U("span", kS, O(e.snapshot.families.length) + " разделов · " + O(e.snapshot.families.reduce((e, t) => e + t.genres.length, 0)) + " жанров", 1)]),
			U("div", AS, [
				U("h2", jS, O(o.value ? "Найдено жанров" : "Музыкальные жанры") + " · " + O(c.value), 1),
				m.value ? (V(), H("button", {
					key: 0,
					type: "button",
					class: "btn ghost small",
					"data-sb-last-genre": "",
					"data-action": "genre",
					"data-id": m.value.id
				}, " ↶ Последний жанр: " + O(m.value.name), 9, MS)) : G("", !0),
				U("span", NS, O(l.value), 1)
			]),
			U("div", PS, [s.value.length ? (V(!0), H(B, { key: 0 }, z(s.value, (e) => (V(), H("details", {
				key: e.name,
				class: "genre-family",
				"data-family": e.name,
				style: E({ "--family-accent": e.meta.accent }),
				open: h("family", e.name),
				onToggle: (t) => g("family", e.name, t)
			}, [U("summary", null, [
				U("span", IS, O(e.meta.icon), 1),
				U("span", LS, [U("strong", null, O(e.name), 1), U("small", null, O(e.meta.desc), 1)]),
				U("span", RS, [U("span", zS, O(e.genres.length) + " " + O(_(e.genres.length)), 1), n[1] ||= U("svg", {
					class: "genre-family-chevron",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2",
					"aria-hidden": "true"
				}, [U("path", { d: "m5 9 7 7 7-7" })], -1)])
			]), U("div", BS, [e.name === "Религиозная музыка" ? (V(), H("div", VS, [
				n[5] ||= U("div", { class: "sb-sacred-intro" }, [
					U("span", { class: "sb-sacred-eyebrow" }, "МУЗЫКА МИРОВЫХ РЕЛИГИЙ"),
					U("h3", null, "Религии и музыкальные традиции"),
					U("p", null, "Открой религию, затем её направление или течение. Здесь представлены музыкальные традиции — их границы не всегда совпадают с конфессиональными.")
				], -1),
				d.value ? (V(), H("div", HS, [n[2] ||= U("div", { class: "sb-sacred-overview-label" }, "📖 Обзор раздела", -1), U("div", US, [ca(TS, { genres: [d.value] }, null, 8, ["genres"])])])) : G("", !0),
				U("div", WS, [(V(!0), H(B, null, z(f.value, (e) => (V(), H("details", {
					key: e.id,
					class: "sb-sacred-religion",
					"data-sb-religion": e.id,
					open: h("religion", e.id),
					onToggle: (t) => g("religion", e.id, t)
				}, [U("summary", KS, [
					U("span", qS, O(e.icon), 1),
					U("span", JS, [U("strong", null, O(e.name), 1), U("small", null, O(e.description), 1)]),
					U("span", YS, O(e.count), 1),
					n[3] ||= U("span", {
						class: "sb-sacred-chevron",
						"aria-hidden": "true"
					}, "⌄", -1)
				]), U("div", XS, [(V(!0), H(B, null, z(e.branches, (e) => (V(), H("details", {
					key: e.id,
					class: "sb-sacred-branch",
					"data-sb-branch": e.id,
					open: h("branch", e.id),
					onToggle: (t) => g("branch", e.id, t)
				}, [U("summary", QS, [
					U("span", $S, [U("strong", null, O(e.name), 1), U("small", null, O(e.description), 1)]),
					U("span", eC, O(e.genres.length) + " " + O(v(e.genres.length)), 1),
					n[4] ||= U("span", {
						class: "sb-sacred-chevron",
						"aria-hidden": "true"
					}, "⌄", -1)
				]), U("div", tC, [U("div", nC, [ca(TS, { genres: e.genres }, null, 8, ["genres"])])])], 40, ZS))), 128))])], 40, GS))), 128))])
			])) : (V(), H("div", rC, [ca(TS, { genres: e.genres }, null, 8, ["genres"])]))])], 44, FS))), 128)) : (V(), H("div", iC, "Ничего не найдено. Попробуй другой запрос."))])
		], 64));
	}
};
// src/vue/academy/legacyAcademyBridge.js
function oC({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ACADEMY, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Q({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-academy-root"),
		readSnapshot: () => {
			let e = t.snapshot();
			return e?.families?.length ? e : null;
		},
		mount: (n, r) => e(n, aC, {
			snapshot: r,
			search: (e) => t.search(e),
			searchIcon: n.querySelector("label.search-box > svg")?.outerHTML || "",
			setExpanded: (e, n, r) => t.setExpanded(e, n, r)
		})
	});
}
// src/vue/academy/genre-tree-model.js
var sC = (e) => String(e ?? "").trim().normalize("NFKC").toLocaleLowerCase("ru");
function cC(e, t, n, r = "all", i = 30) {
	let a = sC(n);
	if (!a) return {
		count: 0,
		items: []
	};
	let o = new Map(e.map((e) => [e.id, e])), s = /* @__PURE__ */ new Set(), c = [];
	function l(e, t) {
		let n = o.get(t);
		n && !s.has(t) && sC(n.name).includes(a) && (s.add(t), c.push({
			id: t,
			tree: e,
			name: n.name,
			family: n.family || ""
		}));
	}
	if (r !== "all") {
		for (let e of t) if (e.id !== "all") for (let t of e.columns.flat()) l(e.id, t);
	}
	for (let t of e) l("all", t.id);
	return {
		count: c.length,
		items: c.slice(0, i)
	};
}
function lC(e, t) {
	return t === "zoom-reset" ? 1 : t !== "zoom-in" && t !== "zoom-out" ? e : Math.min(1.5, Math.max(.75, Math.round((e + (t === "zoom-in" ? .15 : -.15)) * 100) / 100));
}
function uC(e, t) {
	let n = Array.isArray(e?.edges) ? e.edges : [];
	return e?.id === "all" ? n.filter(([e, n]) => e === t || n === t) : n;
}
// src/vue/academy/GenreTree.vue
var dC = {
	class: "sb-gt-vue-content",
	"data-sb-vue-genre-tree": ""
}, fC = { class: "sb-gt-head" }, pC = { class: "sb-gt-count" }, mC = { class: "sb-gt-controls" }, hC = ["value"], gC = ["value"], _C = ["value"], vC = ["value"], yC = { class: "sb-gt-extra" }, bC = {
	class: "sb-gt-search-label",
	for: "sb-gt-search"
}, xC = ["value"], SC = { class: "sb-gt-zoom" }, CC = { id: "sb-gt-zoom-label" }, wC = {
	id: "sb-gt-search-results",
	class: "sb-gt-search-results",
	"aria-live": "polite"
}, TC = { class: "sb-gt-search-title" }, EC = { class: "sb-gt-search-links" }, DC = [
	"data-id",
	"data-tree",
	"onClick"
], OC = {
	key: 1,
	class: "sb-gt-search-empty"
}, kC = { class: "sb-gt-intro" }, AC = { class: "sb-gt-legend" }, jC = ["aria-label"], MC = ["data-sb-gt-family"], NC = {
	key: 1,
	class: "sb-gt-stage"
}, PC = { class: "sb-gt-node-list" }, FC = [
	"data-id",
	"aria-pressed",
	"onClick"
], IC = { class: "sb-gt-node-name" }, LC = { class: "sb-gt-node-era" }, RC = {
	key: 0,
	id: "sb-gt-description",
	class: "sb-gt-detail",
	"aria-live": "polite"
}, zC = { class: "sb-gt-detail-top" }, BC = { class: "sb-gt-sub" }, VC = ["data-id"], HC = { class: "sb-gt-description" }, UC = { class: "sb-gt-related" }, WC = ["data-id", "onClick"], GC = {
	key: 1,
	class: "sb-gt-note"
}, KC = { class: "sb-gt-related" }, qC = ["data-id", "onClick"], JC = /*#__PURE__*/ Cd({
	__name: "GenreTree",
	props: {
		snapshot: {
			type: Object,
			required: !0
		},
		treeApi: {
			type: Object,
			required: !0
		}
	},
	setup(e) {
		let t = e, n = Z(), r = /* @__PURE__ */ N(t.snapshot.tree), i = /* @__PURE__ */ N(t.snapshot.selected), a = /* @__PURE__ */ N(t.snapshot.query || ""), o = /* @__PURE__ */ N(t.snapshot.zoom || 1), s = /* @__PURE__ */ N("");
		L([
			r,
			i,
			o,
			a
		], ([e, t, r, i]) => {
			n.publishAcademyTree({
				tree: e,
				selected: t,
				zoom: r,
				query: i
			});
		}, { immediate: !0 });
		let c = /* @__PURE__ */ N(null), l = /* @__PURE__ */ N(null), u = t.snapshot.genres, d = new Map(u.map((e) => [e.id, e])), f = t.snapshot.trees, p = t.snapshot.relations, m = t.snapshot.stageLabels, h = K(() => f.find((e) => e.id === r.value) || f[0]), g = K(() => h.value.id === "all"), _ = K(() => h.value.columns.map((e, t) => ({
			index: t,
			group: g.value ? h.value.groups[t] : null,
			entries: e.map((e) => d.get(e)).filter(Boolean)
		}))), v = K(() => _.value.reduce((e, t) => e + t.entries.length, 0)), y = K(() => d.get(i.value) || d.get(h.value.focus)), b = K(() => uC(h.value, i.value).filter(([e, t]) => e === i.value || t === i.value).map(([e, t, n, r]) => {
			let a = d.get(e === i.value ? t : e);
			return a ? {
				id: a.id,
				name: a.name,
				type: n,
				note: r,
				direction: e === i.value ? "→" : "←"
			} : null;
		}).filter(Boolean)), x = K(() => g.value && y.value ? u.filter((e) => e.id !== i.value && e.family === y.value.family).slice(0, 8) : []), S = K(() => cC(u, f, a.value, r.value)), C = (e) => !!a.value.trim() && !e.name.toLocaleLowerCase("ru").includes(a.value.trim().toLocaleLowerCase("ru"));
		function ee() {
			On(() => requestAnimationFrame(() => t.treeApi.drawLines()));
		}
		function te(e) {
			let n = t.treeApi.changeTree(e);
			n && (r.value = n.tree, i.value = n.selected, a.value = "", s.value = "", ee());
		}
		function ne(e) {
			d.has(e) && t.treeApi.select(e) && (i.value = e, ee());
		}
		function re(e) {
			let n = lC(o.value, e);
			t.treeApi.setZoom(n), o.value = n, ee();
		}
		function ie(e) {
			a.value = e.target.value, t.treeApi.setQuery(a.value);
		}
		function w(e) {
			let n = t.treeApi.searchJump(e.tree, e.id);
			n && (r.value = n.tree, i.value = n.selected, a.value = "", s.value = "", On(() => {
				[...l.value?.querySelectorAll(".sb-gt-node") || []].find((t) => t.dataset.id === e.id)?.scrollIntoView({
					behavior: "smooth",
					block: "nearest",
					inline: "center"
				}), ee();
			}));
		}
		function ae(e) {
			s.value = e.target.value, [...l.value?.querySelectorAll("[data-sb-gt-family]") || []].find((e) => e.dataset.sbGtFamily === s.value)?.scrollIntoView({
				behavior: "smooth",
				block: "nearest",
				inline: "start"
			});
		}
		return R(ee), (t, n) => (V(), H("div", dC, [
			U("div", fC, [n[5] ||= U("div", null, [
				U("span", { class: "sb-gt-kicker" }, "SUNOBOOM · ИСТОРИЯ МУЗЫКИ"),
				U("h2", null, "От истоков к новым жанрам"),
				U("p", null, "Нажми на жанр в схеме, чтобы увидеть его историю и связи. Затем открой его существующую карточку в Академии.")
			], -1), U("div", pC, O(v.value) + " жанров" + O(g.value ? " · " + h.value.groups.length + " направлений" : " в схеме"), 1)]),
			U("div", mC, [
				n[8] ||= U("label", { for: "sb-gt-tree-choice" }, "Карта жанров", -1),
				U("select", {
					id: "sb-gt-tree-choice",
					value: r.value,
					"aria-label": "Выберите музыкальное древо",
					onChange: n[0] ||= (e) => te(e.target.value)
				}, [(V(!0), H(B, null, z(F(f), (e) => (V(), H("option", {
					key: e.id,
					value: e.id
				}, O(e.icon) + " " + O(e.label), 9, gC))), 128))], 40, hC),
				g.value ? (V(), H(B, { key: 0 }, [n[7] ||= U("label", { for: "sb-gt-group-jump" }, "Перейти к направлению", -1), U("select", {
					id: "sb-gt-group-jump",
					value: s.value,
					"aria-label": "Перейти к музыкальному направлению",
					onChange: ae
				}, [n[6] ||= U("option", { value: "" }, "Выберите раздел…", -1), (V(!0), H(B, null, z(h.value.groups, (e, t) => (V(), H("option", {
					key: e.name,
					value: String(t)
				}, O(e.icon) + " " + O(e.name) + " (" + O(e.ids.length) + ") ", 9, vC))), 128))], 40, _C)], 64)) : G("", !0)
			]),
			U("div", yC, [U("label", bC, [n[9] ||= W(" Поиск жанра по древу ", -1), U("input", {
				id: "sb-gt-search",
				value: a.value,
				type: "search",
				placeholder: "Например: ска-панк",
				autocomplete: "off",
				onInput: ie
			}, null, 40, xC)]), U("div", SC, [
				n[10] ||= U("span", null, "Масштаб карты", -1),
				U("button", {
					type: "button",
					"data-sb-gt-action": "zoom-out",
					"aria-label": "Уменьшить масштаб",
					onClick: n[1] ||= (e) => re("zoom-out")
				}, "−"),
				U("output", CC, O(Math.round(o.value * 100)) + "%", 1),
				U("button", {
					type: "button",
					"data-sb-gt-action": "zoom-in",
					"aria-label": "Увеличить масштаб",
					onClick: n[2] ||= (e) => re("zoom-in")
				}, "+"),
				U("button", {
					type: "button",
					"data-sb-gt-action": "zoom-reset",
					onClick: n[3] ||= (e) => re("zoom-reset")
				}, "Сброс")
			])]),
			U("div", wC, [a.value.trim() ? (V(), H(B, { key: 0 }, [S.value.count ? (V(), H(B, { key: 0 }, [U("div", TC, " Найдено в коллекции: " + O(S.value.count) + O(S.value.count > 30 ? " · показаны первые 30" : ""), 1), U("div", EC, [(V(!0), H(B, null, z(S.value.items, (e) => (V(), H("button", {
				key: e.id,
				type: "button",
				"data-sb-gt-action": "search-jump",
				"data-id": e.id,
				"data-tree": e.tree,
				onClick: (t) => w(e)
			}, [W(O(e.name) + " ", 1), U("small", null, "(" + O(e.family) + ")", 1)], 8, DC))), 128))])], 64)) : (V(), H("p", OC, "Жанр не найден в коллекции Академии."))], 64)) : G("", !0)]),
			U("p", kC, O(h.value.intro), 1),
			U("div", AC, [(V(!0), H(B, null, z(F(p), (e, t) => (V(), H("span", { key: t }, [U("i", { style: E({ "--rel-color": e.color }) }, null, 4), W(O(e.label), 1)]))), 128))]),
			U("div", {
				ref_key: "viewport",
				ref: c,
				class: "sb-gt-viewport",
				tabindex: "0",
				"aria-label": g.value ? "Все жанры Академии по музыкальным направлениям, горизонтальная прокрутка" : "Схема связей: горизонтально прокручиваемая карта жанров"
			}, [U("div", {
				ref_key: "canvas",
				ref: l,
				class: D(["sb-gt-canvas", { "sb-gt-canvas-all": g.value }]),
				style: E({
					zoom: o.value,
					"--sb-gt-family-count": g.value ? h.value.columns.length : 4
				})
			}, [n[11] ||= U("svg", {
				class: "sb-gt-lines",
				"aria-hidden": "true"
			}, null, -1), U("div", { class: D(["sb-gt-columns", { "sb-gt-columns-all": g.value }]) }, [(V(!0), H(B, null, z(_.value, (e) => (V(), H("div", {
				key: r.value + ":" + e.index,
				class: D(["sb-gt-column", { "sb-gt-column-all": g.value }]),
				"data-sb-gt-family": g.value ? String(e.index) : null
			}, [g.value ? (V(), H("div", {
				key: 0,
				class: "sb-gt-stage sb-gt-family-heading",
				style: E({ "--sb-gt-family-accent": e.group.accent })
			}, [U("strong", null, O(e.group.icon) + " " + O(e.group.name), 1), U("span", null, O(e.entries.length), 1)], 4)) : (V(), H("div", NC, [U("span", null, "0" + O(e.index + 1), 1), W(O(F(m)[e.index]), 1)])), U("div", PC, [(V(!0), H(B, null, z(e.entries, (e) => (V(), H("button", {
				key: e.id,
				type: "button",
				class: D(["sb-gt-node", {
					"is-selected": i.value === e.id,
					"sb-gt-search-dim": C(e)
				}]),
				"data-sb-gt-action": "select",
				"data-id": e.id,
				"aria-pressed": i.value === e.id,
				onClick: (t) => ne(e.id)
			}, [U("span", IC, O(e.name), 1), U("span", LC, O(e.era || e.family || ""), 1)], 10, FC))), 128))])], 10, MC))), 128))], 2)], 6)], 8, jC),
			y.value ? (V(), H("div", RC, [
				U("div", zC, [U("div", null, [
					n[12] ||= U("div", { class: "sb-gt-kicker" }, "ВЫБРАННОЕ НАПРАВЛЕНИЕ", -1),
					U("h3", null, O(y.value.name), 1),
					U("p", BC, O(y.value.era || "") + " · " + O(y.value.family || ""), 1)
				]), U("button", {
					type: "button",
					class: "btn primary sb-gt-open",
					"data-sb-gt-action": "open",
					"data-id": y.value.id,
					onClick: n[4] ||= (t) => e.treeApi.openGenre(y.value.id)
				}, "Открыть карточку ↗", 8, VC)]),
				U("p", HC, O(y.value.description || y.value.tagline || "Описание в карточке жанра."), 1),
				b.value.length ? (V(), H(B, { key: 0 }, [n[13] ||= U("h4", null, "Исторические связи", -1), U("div", UC, [(V(!0), H(B, null, z(b.value, (e) => (V(), H("button", {
					key: e.id + ":" + e.type,
					type: "button",
					class: "sb-gt-related-btn",
					"data-sb-gt-action": "select",
					"data-id": e.id,
					onClick: (t) => ne(e.id)
				}, [U("span", { class: D(["sb-gt-related-mark", "sb-gt-" + e.type]) }, O(e.direction), 3), U("span", null, [U("strong", null, O(e.name), 1), U("small", null, O(e.note), 1)])], 8, WC))), 128))])], 64)) : g.value ? G("", !0) : (V(), H("p", GC, "У этого узла пока нет нарисованных связей в выбранной схеме.")),
				g.value && x.value.length ? (V(), H(B, { key: 2 }, [U("h4", null, "Другие жанры раздела «" + O(y.value.family) + "»", 1), U("div", KC, [(V(!0), H(B, null, z(x.value, (e) => (V(), H("button", {
					key: e.id,
					type: "button",
					class: "sb-gt-related-btn",
					"data-sb-gt-action": "select",
					"data-id": e.id,
					onClick: (t) => ne(e.id)
				}, [n[14] ||= U("span", { class: "sb-gt-related-mark" }, "♫", -1), U("span", null, [U("strong", null, O(e.name), 1)])], 8, qC))), 128))])], 64)) : G("", !0)
			])) : G("", !0),
			n[15] ||= U("p", { class: "sb-gt-note" }, "Схема показывает основные исторические влияния и стилистические пересечения. Жанры могут развиваться параллельно; стрелки не означают единственное происхождение.", -1)
		]));
	}
}, [["__scopeId", "data-v-6e70f61e"]]);
// src/vue/academy/legacyGenreTreeBridge.js
function YC({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_GENRE_TREE, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Q({
		root: n,
		selectTarget: (e) => {
			let t = e.querySelector("#sb-genre-tree");
			return t?.open ? t.querySelector("#sb-gt-inner") : null;
		},
		readSnapshot: () => {
			let e = t.snapshot();
			return e?.trees?.length && e?.genres?.length ? e : null;
		},
		mount: (n, r) => e(n, JC, {
			snapshot: r,
			treeApi: t
		}),
		subscribe: (e) => {
			let t = (t) => {
				t.target.id === "sb-genre-tree" && queueMicrotask(e);
			}, n = (t) => {
				t.target.closest?.("[data-sb-gt-action=\"reveal\"]") && queueMicrotask(e);
			};
			return document.addEventListener("toggle", t, !0), document.addEventListener("click", n), () => {
				document.removeEventListener("toggle", t, !0), document.removeEventListener("click", n);
			};
		}
	});
}
// src/vue/academy/GenreOverview.vue
var XC = {
	class: "gb-grid",
	"data-sb-vue-overview": ""
}, ZC = { class: "gb-column" }, QC = { class: "gb-panel pink" }, $C = { class: "gb-unit" }, ew = { class: "gb-unit" }, tw = { class: "gb-unit" }, nw = { class: "gb-panel" }, rw = ["innerHTML"], iw = { class: "gb-column" }, aw = { class: "gb-panel blue" }, ow = {
	class: "gb-bpm-value",
	style: {
		"font-size": "26px",
		"font-weight": "900"
	}
}, sw = { class: "gb-artists" }, cw = { class: "gb-panel pink" }, lw = ["data-id"], uw = ["innerHTML"], dw = {
	__name: "GenreOverview",
	props: { genre: {
		type: Object,
		required: !0
	} },
	emits: ["select-tab"],
	setup(e) {
		return (t, n) => (V(), H("div", XC, [U("div", ZC, [U("section", QC, [
			n[7] ||= U("div", { class: "gb-sup" }, "01 / ЗНАКОМСТВО С ЖАНРОМ", -1),
			n[8] ||= U("h2", null, "Характер и звучание", -1),
			U("p", null, [U("strong", null, O(e.genre.tagline), 1)]),
			U("p", null, O(e.genre.description), 1),
			U("div", $C, [n[2] ||= U("b", null, "🎸", -1), U("div", null, [n[1] ||= U("strong", null, "Инструменты", -1), U("span", null, O(e.genre.instruments) + ".", 1)])]),
			U("div", ew, [n[4] ||= U("b", null, "🎛️", -1), U("div", null, [n[3] ||= U("strong", null, "Саунд", -1), U("span", null, O(e.genre.style) + ".", 1)])]),
			U("div", tw, [n[6] ||= U("b", null, "✍️", -1), U("div", null, [n[5] ||= U("strong", null, "Тематика песен", -1), U("span", null, O(e.genre.themes) + ".", 1)])])
		]), U("section", nw, [
			n[10] ||= U("div", { class: "gb-sup" }, "03 / ИДЕИ ДЛЯ СТАРТА", -1),
			n[11] ||= U("h2", null, "Что можно спеть", -1),
			(V(!0), H(B, null, z(e.genre.ideas, (e, t) => (V(), H("div", {
				key: t,
				class: "gb-idea"
			}, [U("strong", null, O(e.title), 1), U("p", null, O(e.pitch), 1)]))), 128)),
			U("button", {
				type: "button",
				class: "btn ghost small",
				onClick: n[0] ||= (e) => t.$emit("select-tab", "ideas")
			}, [n[9] ||= W(" Все идеи ", -1), U("span", {
				"aria-hidden": "true",
				innerHTML: e.genre.icons.arrow
			}, null, 8, rw)])
		])]), U("div", iw, [U("section", aw, [
			n[12] ||= U("div", { class: "gb-sup" }, "02 / ПАСПОРТ НАПРАВЛЕНИЯ", -1),
			n[13] ||= U("h2", null, "История и сцена", -1),
			n[14] ||= U("div", { class: "info-label" }, "Эпоха", -1),
			U("p", null, O(e.genre.era), 1),
			n[15] ||= U("div", { class: "info-label" }, "Диапазон темпа", -1),
			U("p", ow, O(e.genre.bpm[0]) + "–" + O(e.genre.bpm[1]) + " BPM", 1),
			n[16] ||= U("div", { class: "info-label" }, "Исполнители для знакомства", -1),
			U("div", sw, [(V(!0), H(B, null, z(e.genre.artists, (e) => (V(), H("span", { key: e }, O(e), 1))), 128))])
		]), U("section", cw, [n[18] ||= fa("<div class=\"gb-sup\">04 / ТВОЯ МУЗЫКА</div><h2>Преврати знания в трек</h2><p>Выбери вокал, настроение и темп, затем создай промпт и структуру песни в Suno Studio.</p><div class=\"gb-unit\"><b>🎤</b><div><strong>Вокал</strong><span>Мужской, женский или дуэт; можно использовать русский язык.</span></div></div><div class=\"gb-unit\"><b>⚡</b><div><strong>Динамика</strong><span>Настрой энергию и характер припева под историю.</span></div></div>", 5), U("button", {
			type: "button",
			class: "btn primary small",
			"data-action": "use-genre",
			"data-id": e.genre.id
		}, [U("span", {
			innerHTML: e.genre.icons.studio,
			"aria-hidden": "true"
		}, null, 8, uw), n[17] ||= W(" Открыть студию ", -1)], 8, lw)])])]));
	}
}, fw = {
	key: 0,
	id: "sb-artist-expanded",
	class: "ahx-wrap",
	"data-sb-vue-artists": ""
}, pw = { class: "ahx-intro" }, mw = { class: "gb-eyebrow" }, hw = {
	class: "ahx-toolbar",
	role: "group",
	"aria-label": "Музыкальные сцены"
}, gw = ["aria-pressed"], _w = ["aria-pressed"], vw = { class: "ahx-filters" }, yw = { class: "ahx-search" }, bw = ["innerHTML"], xw = {
	class: "ahx-filter-buttons",
	role: "group",
	"aria-label": "Фильтр исполнителей"
}, Sw = [
	"data-vue-artist-filter",
	"aria-pressed",
	"onClick"
], Cw = {
	id: "ahx-count",
	class: "ahx-count",
	"aria-live": "polite"
}, ww = { class: "ahx-section-head" }, Tw = { class: "ahx-eyebrow" }, Ew = { class: "ahx-num" }, Dw = { class: "ahx-grid" }, Ow = ["data-ahx-group"], kw = { class: "ahx-card-top" }, Aw = {
	class: "ahx-avatar",
	"aria-hidden": "true"
}, jw = { class: "ahx-title" }, Mw = { class: "ahx-era" }, Nw = {
	key: 0,
	class: "ahx-track"
}, Pw = {
	id: "ahx-no-results",
	class: "ahx-no-results"
}, Fw = {
	key: 1,
	class: "ahx-empty"
}, Iw = {
	__name: "GenreArtists",
	props: {
		genre: {
			type: Object,
			required: !0
		},
		catalog: {
			type: Object,
			required: !0
		},
		enhanceProfiles: {
			type: Function,
			default: null
		}
	},
	setup(e) {
		let t = e, n = /* @__PURE__ */ N(t.catalog.initialScene()), r = /* @__PURE__ */ N(""), i = /* @__PURE__ */ N("all"), a = K(() => t.catalog.getScene(t.genre.id, n.value)), o = K(() => (a.value?.groups || []).map((e) => ({
			...e,
			artists: e.artists.filter((e) => {
				let t = !r.value.trim() || [
					e.name,
					e.period || "Музыкальная сцена",
					e.label,
					e.bio || "Музыкальное направление и характерный творческий почерк.",
					e.track
				].join(" ").toLocaleLowerCase("ru").includes(r.value.toLocaleLowerCase("ru").trim()), n = i.value === "all" || (i.value === "adjacent" ? e.group === "adjacent" : e.group !== "adjacent");
				return t && n;
			})
		}))), s = K(() => o.value.reduce((e, t) => e + t.artists.length, 0)), c = K(() => (a.value?.groups || []).reduce((e, t) => e + t.artists.length, 0));
		async function l(e) {
			(e === "ru" || e === "world") && (n.value = e, t.catalog.setScene(e), r.value = "", i.value = "all", await On(), t.enhanceProfiles?.());
		}
		return R(() => t.enhanceProfiles?.()), xr(() => t.enhanceProfiles?.()), (t, u) => a.value ? (V(), H("div", fw, [
			U("div", pw, [
				U("div", mw, "АКАДЕМИЯ SUNOBOOM · " + O(e.genre.name), 1),
				u[4] ||= U("h2", null, "Исполнители и композиторы", -1),
				U("p", null, O(a.value.description), 1)
			]),
			U("div", hw, [U("button", {
				type: "button",
				"data-vue-artist-scene": "world",
				"aria-pressed": n.value === "world",
				class: D({ on: n.value === "world" }),
				onClick: u[0] ||= (e) => l("world")
			}, [u[5] ||= W(" 🌍 Мировая сцена ", -1), U("span", null, O(a.value.worldCount), 1)], 10, gw), U("button", {
				type: "button",
				"data-vue-artist-scene": "ru",
				"aria-pressed": n.value === "ru",
				class: D({ on: n.value === "ru" }),
				onClick: u[1] ||= (e) => l("ru")
			}, [u[6] ||= W(" 🎤 Русскоязычные ", -1), U("span", null, O(a.value.ruCount), 1)], 10, _w)]),
			c.value ? (V(), H(B, { key: 0 }, [
				U("div", vw, [U("label", yw, [U("span", {
					"aria-hidden": "true",
					innerHTML: e.genre.icons.overview
				}, null, 8, bw), I(U("input", {
					"onUpdate:modelValue": u[2] ||= (e) => r.value = e,
					type: "search",
					"data-vue-artist-search": "",
					placeholder: "Найти исполнителя или произведение…",
					"aria-label": "Поиск по исполнителям"
				}, null, 512), [[q, r.value]])]), U("div", xw, [(V(), H(B, null, z([
					{
						id: "all",
						label: "Все"
					},
					{
						id: "main",
						label: "По жанру"
					},
					{
						id: "adjacent",
						label: "Смежные"
					}
				], (e) => U("button", {
					key: e.id,
					type: "button",
					"data-vue-artist-filter": e.id,
					"aria-pressed": i.value === e.id,
					onClick: (t) => i.value = e.id
				}, O(e.label), 9, Sw)), 64))])]),
				U("p", Cw, "Показано " + O(s.value) + " из " + O(c.value) + " исполнителей.", 1),
				(V(!0), H(B, null, z(o.value, (e) => I((V(), H("section", {
					key: e.index,
					class: "ahx-section",
					"data-ahx-section": ""
				}, [U("div", ww, [U("div", null, [U("span", Tw, "0" + O(e.index + 1) + " / ИСПОЛНИТЕЛИ", 1), U("h3", null, O(e.index ? "Современная сцена и продолжатели" : "Классика и предшественники"), 1)]), U("span", Ew, O(e.artists.length), 1)]), U("div", Dw, [(V(!0), H(B, null, z(e.artists, (e) => (V(), H("article", {
					key: e.key,
					class: "ahx-card",
					"data-ahx-group": e.group
				}, [
					U("div", kw, [U("span", Aw, O(e.initials), 1), U("div", jw, [U("h4", null, O(e.name), 1), U("span", Mw, O(e.period || "Музыкальная сцена"), 1)])]),
					U("span", { class: D(["ahx-role", { "ahx-role-neighbor": e.group === "adjacent" }]) }, O(e.label), 3),
					U("p", null, O(e.bio || "Музыкальное направление и характерный творческий почерк."), 1),
					e.track ? (V(), H("div", Nw, [u[7] ||= U("small", null, "Ориентир для прослушивания", -1), U("strong", null, "♫ " + O(e.track), 1)])) : G("", !0)
				], 8, Ow))), 128))])])), [[eo, e.artists.length]])), 128)),
				I(U("div", Pw, " По заданному поиску исполнители не найдены. Попробуй другой запрос или выбери «Все». ", 512), [[eo, s.value === 0]])
			], 64)) : (V(), H("div", Fw, [
				u[8] ||= U("strong", null, "Русскоязычная подборка ещё уточняется", -1),
				u[9] ||= U("p", null, "Для этого узкого направления пока нет достаточно подтверждённых примеров. Мы не будем подставлять артистов из других жанров без пояснения.", -1),
				U("button", {
					class: "btn ghost",
					type: "button",
					onClick: u[3] ||= (e) => l("world")
				}, "Посмотреть мировую сцену")
			])),
			u[10] ||= U("p", { class: "ahx-footnote" }, "В подборках могут встречаться близкие стили, кино- и игровая музыка, инструментальные коллективы. Их связь с жанром поясняется в карточке. Указанные произведения — ориентиры для знакомства, а не ссылки на конкретные релизы.", -1)
		])) : G("", !0);
	}
}, Lw = {
	class: "idea-grid",
	"data-sb-vue-ideas": ""
}, Rw = { class: "idea-badge" }, zw = { class: "actions" }, Bw = ["data-id", "data-i"], Vw = ["innerHTML"], Hw = [
	"data-id",
	"data-i",
	"aria-pressed"
], Uw = ["innerHTML"], Ww = {
	__name: "GenreIdeas",
	props: { genre: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (V(), H("div", Lw, [(V(!0), H(B, null, z(e.genre.allIdeas, (t) => (V(), H("div", {
			key: t.index,
			class: "idea"
		}, [
			U("div", Rw, O(e.genre.name) + " · " + O(t.mood), 1),
			U("h3", null, O(t.title), 1),
			U("p", null, O(t.pitch), 1),
			U("div", zw, [U("button", {
				type: "button",
				class: "btn primary small",
				"data-action": "idea-use",
				"data-id": e.genre.id,
				"data-i": t.index
			}, [U("span", {
				"aria-hidden": "true",
				innerHTML: e.genre.icons.studio
			}, null, 8, Vw), n[0] ||= W(" В студию ", -1)], 8, Bw), U("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "idea-save",
				"data-id": e.genre.id,
				"data-i": t.index,
				"aria-pressed": t.saved ? "true" : "false"
			}, [U("span", {
				"aria-hidden": "true",
				innerHTML: e.genre.icons.heart
			}, null, 8, Uw), W(" " + O(t.saved ? "Сохранено" : "Сохранить"), 1)], 8, Hw)])
		]))), 128))]));
	}
}, Gw = {
	class: "panel",
	"data-sb-vue-prompts": ""
}, Kw = { class: "idea-grid" }, qw = { class: "idea" }, Jw = ["data-id"], Yw = ["innerHTML"], Xw = { class: "idea" }, Zw = ["data-id"], Qw = ["innerHTML"], $w = {
	__name: "GenrePrompts",
	props: { genre: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (V(), H("div", Gw, [
			n[5] ||= U("h3", null, "Шаблоны звучания", -1),
			n[6] ||= U("p", null, "Начни с одного из вариантов. Он перенесёт настройки жанра в конструктор — там можно выбрать вокал, настроение и язык.", -1),
			U("div", Kw, [U("div", qw, [
				n[1] ||= U("div", { class: "idea-badge" }, "Оригинальное звучание", -1),
				U("h3", null, O(e.genre.name), 1),
				U("p", null, O(e.genre.style) + ".", 1),
				U("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "use-genre",
					"data-id": e.genre.id
				}, [n[0] ||= W(" Настроить в студии ", -1), U("span", {
					"aria-hidden": "true",
					innerHTML: e.genre.icons.arrow
				}, null, 8, Yw)], 8, Jw)
			]), U("div", Xw, [
				n[3] ||= U("div", { class: "idea-badge" }, "Альтернативная версия", -1),
				n[4] ||= U("h3", null, "Мягкая атмосфера", -1),
				U("p", null, O(e.genre.style) + ", restrained dynamics, warm intimate production, emotional melodies.", 1),
				U("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "use-soft",
					"data-id": e.genre.id
				}, [n[2] ||= W(" Настроить в студии ", -1), U("span", {
					"aria-hidden": "true",
					innerHTML: e.genre.icons.arrow
				}, null, 8, Qw)], 8, Zw)
			])])
		]));
	}
}, eT = { class: "gb-hero" }, tT = { class: "gb-content" }, nT = { class: "gb-eyebrow" }, rT = { class: "gb-title" }, iT = { class: "gb-desc" }, aT = { class: "gb-tags" }, oT = { class: "gb-buttons" }, sT = ["data-id"], cT = ["innerHTML"], lT = ["data-id"], uT = ["innerHTML"], dT = {
	class: "gb-vinyl",
	"aria-hidden": "true"
}, fT = { class: "gb-equalizer" }, pT = { class: "gb-facts" }, mT = { class: "gb-fact" }, hT = { class: "gb-fact" }, gT = { class: "gb-fact" }, _T = { class: "gb-fact" }, vT = { class: "genre-detail-layout" }, yT = {
	class: "genre-side-nav",
	"aria-label": "ЖАНР-НАВ — меню жанра"
}, bT = {
	class: "genre-side-links",
	"aria-label": "Разделы жанра"
}, xT = [
	"data-tab",
	"aria-current",
	"onClick"
], ST = ["innerHTML"], CT = {
	class: "genre-detail-content",
	id: "genre-nav-content",
	"aria-label": "Содержимое раздела жанра"
}, wT = ["innerHTML"], TT = {
	__name: "GenreDetail",
	props: {
		genre: {
			type: Object,
			required: !0
		},
		tabContent: {
			type: Function,
			required: !0
		},
		artistCatalog: {
			type: Object,
			default: null
		},
		enhanceArtistProfiles: {
			type: Function,
			default: null
		}
	},
	setup(e) {
		let t = e, n = [
			{
				id: "overview",
				label: "Обзор"
			},
			{
				id: "ideas",
				label: "Идеи песен"
			},
			{
				id: "prompts",
				label: "Промпты Suno"
			},
			{
				id: "artists",
				label: "Исполнители"
			}
		], r = Z(), i = /* @__PURE__ */ N(t.genre.tab);
		L(i, (e) => r.publishAcademyFocus(t.genre.id, e), { immediate: !0 });
		let a = /* @__PURE__ */ N(t.tabContent(t.genre.id, i.value) || "");
		async function o(e) {
			if (i.value === e || !n.some((t) => t.id === e)) return;
			let r = t.tabContent(t.genre.id, e);
			typeof r == "string" && (i.value = e, a.value = r, await On(), window.innerWidth <= 850 && document.getElementById("genre-nav-content")?.scrollIntoView({
				block: "start",
				behavior: "smooth"
			}));
		}
		return (t, r) => (V(), H("div", {
			class: "genre-bright",
			style: E({ "--accent": e.genre.color })
		}, [U("div", eT, [
			r[5] ||= U("div", { class: "gb-top" }, [U("button", {
				type: "button",
				class: "back",
				"data-action": "academy-back",
				"aria-label": "Назад к разделу Академии"
			}, "← Назад"), U("small", null, "SUNOBOOM · MUSIC ATLAS")], -1),
			U("div", tT, [U("div", null, [
				U("div", nT, O(e.genre.family) + " · " + O(e.genre.era), 1),
				U("h1", rT, O(e.genre.name), 1),
				U("p", iT, O(e.genre.description), 1),
				U("div", aT, [
					U("span", null, O(e.genre.tagline), 1),
					U("span", null, O(e.genre.bpm[0]) + "–" + O(e.genre.bpm[1]) + " BPM", 1),
					U("span", null, O(e.genre.ideasCount) + " идеи", 1)
				]),
				U("div", oT, [U("button", {
					type: "button",
					class: "btn primary",
					"data-action": "use-genre",
					"data-id": e.genre.id
				}, [U("span", {
					innerHTML: e.genre.icons.studio,
					"aria-hidden": "true"
				}, null, 8, cT), r[0] ||= W(" Создать в Suno ", -1)], 8, sT), U("button", {
					type: "button",
					class: "btn ghost",
					"data-action": "favorite",
					"data-id": e.genre.id
				}, [U("span", {
					innerHTML: e.genre.icons.heart,
					"aria-hidden": "true"
				}, null, 8, uT), W(" " + O(e.genre.favorite ? "В избранном" : "В избранное"), 1)], 8, lT)])
			]), U("div", dT, [U("div", fT, [(V(), H(B, null, z(9, (e) => U("i", { key: e })), 64))])])]),
			U("div", pT, [
				U("div", mT, [r[1] ||= U("small", null, "История", -1), U("strong", null, O(e.genre.era), 1)]),
				U("div", hT, [r[2] ||= U("small", null, "Темп", -1), U("strong", null, O(e.genre.bpm[0]) + "–" + O(e.genre.bpm[1]) + " BPM", 1)]),
				U("div", gT, [r[3] ||= U("small", null, "Треки", -1), U("strong", null, O(e.genre.ideasCount) + " сюжетных идеи", 1)]),
				U("div", _T, [r[4] ||= U("small", null, "Артисты", -1), U("strong", null, O(e.genre.artistCount) + " ориентиров", 1)])
			])
		]), U("div", vT, [U("aside", yT, [r[7] ||= U("div", { class: "genre-side-head" }, [U("span", null, "ЖАНР-НАВ"), U("small", null, "Разделы карточки")], -1), U("nav", bT, [(V(), H(B, null, z(n, (t) => U("button", {
			key: t.id,
			type: "button",
			class: D(["genre-side-item", { active: i.value === t.id }]),
			"data-tab": t.id,
			"aria-controls": "genre-nav-content",
			"aria-current": i.value === t.id ? "page" : "false",
			onClick: (e) => o(t.id)
		}, [
			U("span", {
				class: "genre-side-icon",
				innerHTML: e.genre.icons[t.id],
				"aria-hidden": "true"
			}, null, 8, ST),
			U("span", null, O(t.label), 1),
			r[6] ||= U("span", {
				class: "genre-side-chevron",
				"aria-hidden": "true"
			}, "›", -1)
		], 10, xT)), 64))])]), U("section", CT, [i.value === "overview" ? (V(), ra(dw, {
			key: 0,
			genre: e.genre,
			onSelectTab: o
		}, null, 8, ["genre"])) : i.value === "artists" && e.artistCatalog ? (V(), ra(Iw, {
			key: 1,
			genre: e.genre,
			catalog: e.artistCatalog,
			"enhance-profiles": e.enhanceArtistProfiles
		}, null, 8, [
			"genre",
			"catalog",
			"enhance-profiles"
		])) : i.value === "ideas" ? (V(), ra(Ww, {
			key: 2,
			genre: e.genre
		}, null, 8, ["genre"])) : i.value === "prompts" ? (V(), ra($w, {
			key: 3,
			genre: e.genre
		}, null, 8, ["genre"])) : (V(), H("div", {
			key: 4,
			innerHTML: a.value
		}, null, 8, wT))])])], 4));
	}
};
// src/vue/academy/legacyGenreDetailBridge.js
function ET({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_GENRE, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Q({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-genre-detail"),
		readSnapshot: () => {
			let e = t.snapshot();
			return e?.id ? e : null;
		},
		mount: (n, r) => e(n, TT, {
			genre: r,
			tabContent: (e, n) => t.tabContent(e, n),
			artistCatalog: window.SUNOBOOM_ARTIST_CATALOG || null,
			enhanceArtistProfiles: () => window.SUNOBOOM_ARTIST_PROFILES?.enhanceCards?.()
		})
	});
}
// src/vue/studio/StudioBuilder.vue
var DT = { class: "panel" }, OT = { class: "field" }, kT = ["value"], AT = ["value"], jT = { class: "form-grid" }, MT = { class: "field" }, NT = ["value"], PT = ["value"], FT = { class: "field" }, IT = ["value"], LT = ["value"], RT = { class: "field" }, zT = ["value"], BT = ["value"], VT = { class: "field" }, HT = ["value"], UT = ["value"], WT = { class: "field" }, GT = { for: "b-tempo" }, KT = {
	id: "tempo-num",
	style: { color: "#ffa8d5" }
}, qT = { class: "range" }, JT = ["value"], YT = { id: "bpm-output" }, XT = {
	class: "muted",
	style: { "font-size": "11px" }
}, ZT = { class: "field" }, QT = ["value"], $T = { class: "field" }, eE = ["value"], tE = { class: "checkrow" }, nE = ["checked", "onChange"], rE = {
	class: "panel",
	style: {
		position: "sticky",
		top: "20px"
	}
}, iE = {
	class: "output",
	id: "prompt-output"
}, aE = { class: "counter" }, oE = { id: "prompt-count" }, sE = { class: "two-col" }, cE = {
	class: "btn primary",
	type: "button",
	"data-action": "copy-prompt"
}, lE = ["innerHTML"], uE = {
	class: "btn ghost",
	type: "button",
	"data-action": "save-prompt"
}, dE = ["innerHTML"], fE = {
	key: 0,
	class: "notice",
	"data-sb-vue-mixer-recap": ""
}, pE = {
	key: 1,
	class: "notice",
	"data-sb-vue-arranger-recap": ""
}, mE = { class: "list-pills" }, hE = {
	__name: "StudioBuilder",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ P(t.api.snapshot()), r = Z();
		L(n, (e) => r.publishStudioSummary(e), { immediate: !0 });
		let i = K(() => n.value?.settings || {}), a = K(() => n.value?.genre || {
			name: "",
			family: "",
			bpm: [0, 0]
		}), o = K(() => String(n.value?.prompt || "")), s = [
			["melancholic", "Меланхоличное"],
			["energetic", "Энергичное"],
			["romantic", "Романтичное"],
			["dark", "Мрачное"],
			["uplifting", "Воодушевляющее"],
			["dreamy", "Мечтательное"],
			["playful", "Игривое"],
			["epic", "Эпическое"],
			["nostalgic", "Ностальгическое"]
		], c = [
			["male", "Мужской"],
			["female", "Женский"],
			["duet", "Дуэт"]
		], l = [
			["Russian", "Русский"],
			["English", "Английский"],
			["Spanish", "Испанский"],
			["Kazakh", "Казахский"]
		], u = [
			["soft", "Мягкая"],
			["medium", "Средняя"],
			["high", "Мощная"]
		], d = [
			["studio", "Без публики и live-атмосферы"],
			["noWhisper", "Без шёпота"],
			["noChoir", "Без хора"],
			["noIntro", "Без длинного интро"]
		];
		function f() {
			let e = t.api.snapshot();
			e && (n.value = e);
		}
		function p(e, n) {
			t.api.update(e, n), f();
		}
		return R(() => window.addEventListener("sunoboom:studio-updated", f)), Cr(() => window.removeEventListener("sunoboom:studio-updated", f)), (e, t) => (V(), H(B, null, [U("div", DT, [
			t[17] ||= U("h3", null, "Параметры трека", -1),
			U("div", OT, [t[8] ||= U("label", { for: "b-genre" }, "Жанр", -1), U("select", {
				id: "b-genre",
				value: i.value.genre,
				onChange: t[0] ||= (e) => p("genre", e.target.value)
			}, [(V(!0), H(B, null, z(n.value.genres, (e) => (V(), H("option", {
				key: e.id,
				value: e.id
			}, O(e.name), 9, AT))), 128))], 40, kT)]),
			U("div", jT, [
				U("div", MT, [t[9] ||= U("label", { for: "b-mood" }, "Настроение", -1), U("select", {
					id: "b-mood",
					value: i.value.mood,
					onChange: t[1] ||= (e) => p("mood", e.target.value)
				}, [(V(), H(B, null, z(s, ([e, t]) => U("option", {
					key: e,
					value: e
				}, O(t), 9, PT)), 64))], 40, NT)]),
				U("div", FT, [t[10] ||= U("label", { for: "b-vocal" }, "Вокал", -1), U("select", {
					id: "b-vocal",
					value: i.value.vocal,
					onChange: t[2] ||= (e) => p("vocal", e.target.value)
				}, [(V(), H(B, null, z(c, ([e, t]) => U("option", {
					key: e,
					value: e
				}, O(t), 9, LT)), 64))], 40, IT)]),
				U("div", RT, [t[11] ||= U("label", { for: "b-lang" }, "Язык текста", -1), U("select", {
					id: "b-lang",
					value: i.value.language,
					onChange: t[3] ||= (e) => p("language", e.target.value)
				}, [(V(), H(B, null, z(l, ([e, t]) => U("option", {
					key: e,
					value: e
				}, O(t), 9, BT)), 64))], 40, zT)]),
				U("div", VT, [t[12] ||= U("label", { for: "b-energy" }, "Энергия", -1), U("select", {
					id: "b-energy",
					value: i.value.energy,
					onChange: t[4] ||= (e) => p("energy", e.target.value)
				}, [(V(), H(B, null, z(u, ([e, t]) => U("option", {
					key: e,
					value: e
				}, O(t), 9, UT)), 64))], 40, HT)])
			]),
			U("div", WT, [
				U("label", GT, [
					t[13] ||= W("Темп · ", -1),
					U("span", KT, O(i.value.tempo), 1),
					t[14] ||= W(" BPM", -1)
				]),
				U("div", qT, [U("input", {
					type: "range",
					id: "b-tempo",
					min: "65",
					max: "200",
					step: "1",
					value: i.value.tempo,
					onInput: t[5] ||= (e) => p("tempo", Number(e.target.value))
				}, null, 40, JT), U("output", YT, O(i.value.tempo) + " BPM", 1)]),
				U("span", XT, " Обычно для «" + O(a.value.name) + "»: " + O(a.value.bpm[0]) + "–" + O(a.value.bpm[1]) + " BPM ", 1)
			]),
			U("div", ZT, [t[15] ||= U("label", { for: "b-theme" }, "Тема / история трека", -1), U("textarea", {
				id: "b-theme",
				rows: "2",
				value: i.value.theme,
				onInput: t[6] ||= (e) => p("theme", e.target.value),
				placeholder: "О чём будет песня?"
			}, null, 40, QT)]),
			U("div", $T, [t[16] ||= U("label", { for: "b-extra" }, "Дополнительные инструкции (необязательно)", -1), U("textarea", {
				id: "b-extra",
				rows: "2",
				value: i.value.extra,
				onInput: t[7] ||= (e) => p("extra", e.target.value),
				placeholder: "Например: memorable chorus, short guitar solo"
			}, null, 40, eE)]),
			U("div", tE, [(V(), H(B, null, z(d, ([e, t]) => U("label", { key: e }, [U("input", {
				type: "checkbox",
				checked: i.value[e],
				onChange: (t) => p(e, t.target.checked)
			}, null, 40, nE), W(O(t), 1)])), 64))])
		]), U("div", rE, [
			t[22] ||= U("div", { class: "eyebrow" }, "Готово к Suno", -1),
			t[23] ||= U("h3", null, "Твой промпт", -1),
			U("div", iE, O(o.value), 1),
			U("div", aE, [t[18] ||= U("span", null, "Максимум 1000 символов", -1), U("b", oE, O(o.value.length) + " / 1000", 1)]),
			U("div", sE, [U("button", cE, [U("span", {
				"aria-hidden": "true",
				innerHTML: n.value.icons.copy
			}, null, 8, lE), t[19] ||= W(" Копировать ", -1)]), U("button", uE, [U("span", {
				"aria-hidden": "true",
				innerHTML: n.value.icons.save
			}, null, 8, dE), t[20] ||= W(" Сохранить ", -1)])]),
			t[24] ||= U("div", { class: "spacer" }, null, -1),
			F(r).mixerSummary.ready ? (V(), H("div", fE, [W(" Последний микс: " + O(F(r).mixerSummary.genreCount) + " жанра · " + O(F(r).mixerSummary.tempo) + " BPM · " + O(F(r).mixerSummary.promptLength) + " / 1000 символов. ", 1), t[21] ||= U("button", {
				type: "button",
				class: "link-action",
				"data-action": "nav",
				"data-nav": "mixer"
			}, "Перейти в Миксер →", -1)])) : G("", !0),
			F(r).arrangerSummary.ready ? (V(), H("div", pE, " Аранжировка: " + O(F(r).arrangerSummary.blockCount) + " блоков · " + O(F(r).arrangerSummary.barCount) + " тактов · средняя энергия " + O(F(r).arrangerSummary.averageEnergy) + "/5 · " + O(F(r).arrangerSummary.transitionCount) + " переходов. ", 1)) : G("", !0),
			t[25] ||= U("div", { class: "notice" }, [U("strong", null, "Подсказка:"), W(" промпт задаёт стиль, а текст песни можно вводить отдельно в Suno. Результат генерации может отличаться от запроса.")], -1),
			t[26] ||= U("div", { class: "spacer" }, null, -1),
			t[27] ||= U("div", { class: "info-label" }, "Музыкальный профиль", -1),
			U("div", mE, [
				U("span", null, O(a.value.name), 1),
				U("span", null, O(a.value.family), 1),
				U("span", null, O(a.value.bpm[0]) + "–" + O(a.value.bpm[1]) + " BPM", 1)
			])
		])], 64));
	}
};
// src/vue/studio/legacyStudioBridge.js
function gE({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_STUDIO, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Q({
		root: n,
		selectTarget: (e) => e.querySelector(".studio-grid"),
		readSnapshot: () => t.snapshot(),
		mount: (n) => {
			let r = e(n, hE, { api: t });
			return r && (n.dataset.sbVueStudio = "true"), r;
		}
	});
}
// src/vue/studio/GenreMixer.vue
var _E = { class: "heading" }, vE = {
	key: 0,
	class: "gm-muted",
	"data-sb-vue-studio-recap": ""
}, yE = { class: "gm-layout" }, bE = { class: "gm-panel" }, xE = { class: "gm-stack" }, SE = { class: "gm-row-top" }, CE = { class: "gm-rank" }, wE = { class: "gm-field gm-genre-select" }, TE = ["for"], EE = [
	"id",
	"value",
	"data-gm-genre"
], DE = ["label"], OE = ["value"], kE = ["data-gm-value"], AE = [
	"data-slot",
	"aria-label",
	"disabled"
], jE = { class: "gm-slider-line" }, ME = [
	"max",
	"value",
	"data-gm-weight",
	"aria-label"
], NE = { class: "gm-meter" }, PE = ["data-gm-meter"], FE = { class: "gm-sub" }, IE = { class: "gm-actions" }, LE = ["disabled"], RE = {
	class: "gm-mixture",
	"aria-label": "Доли музыкальных жанров"
}, zE = ["data-gm-mixbar", "title"], BE = { class: "gm-form-grid" }, VE = ["for"], HE = [
	"id",
	"value",
	"data-gm-setting"
], UE = ["value"], WE = { class: "gm-tempo" }, GE = ["checked"], KE = { class: "gm-tempo-row" }, qE = ["value", "disabled"], JE = { id: "gm-bpm" }, YE = { class: "gm-field" }, XE = ["value"], ZE = { class: "gm-checks" }, QE = ["data-gm-setting", "checked"], $E = { class: "gm-panel gm-output-panel" }, eD = {
	class: "gm-output",
	id: "gm-prompt",
	"aria-live": "polite"
}, tD = { class: "gm-prompt-meta" }, nD = { id: "gm-count" }, rD = { class: "gm-field" }, iD = ["value"], aD = { class: "gm-saved-list" }, oD = {
	key: 0,
	class: "gm-muted"
}, sD = { class: "gm-saved-actions" }, cD = ["data-id"], lD = ["data-id", "aria-label"], uD = {
	__name: "GenreMixer",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ P(t.api.snapshot()), r = Z();
		L(n, (e) => r.publishMixerSummary(e), { immediate: !0 });
		let i = K(() => n.value?.rows || []), a = K(() => n.value?.genres || []), o = K(() => n.value?.settings || {}), s = K(() => n.value?.options || {}), c = K(() => n.value?.saved || []), l = K(() => n.value?.prompt || ""), u = K(() => n.value?.tempo || 115), d = K(() => n.value?.title || "");
		function f() {
			let e = t.api.snapshot();
			e && (n.value = e);
		}
		R(() => window.addEventListener("sunoboom:mixer-updated", f)), Cr(() => window.removeEventListener("sunoboom:mixer-updated", f));
		function p(e) {
			let t = new Set(i.value.filter((t, n) => n !== e).map((e) => e.id)), n = /* @__PURE__ */ new Map();
			for (let e of a.value) {
				if (t.has(e.id)) continue;
				let r = e.family || "Прочее";
				n.has(r) || n.set(r, []), n.get(r).push(e);
			}
			return [...n.entries()].sort(([e], [t]) => e.localeCompare(t, "ru")).map(([e, t]) => ({
				family: e,
				items: t.sort((e, t) => e.name.localeCompare(t.name, "ru"))
			}));
		}
		let m = K(() => [
			{
				key: "mood",
				label: "Настроение",
				choices: s.value.moods || []
			},
			{
				key: "energy",
				label: "Энергия",
				choices: s.value.energies || []
			},
			{
				key: "vocal",
				label: "Вокал",
				choices: s.value.vocals || []
			},
			{
				key: "language",
				label: "Язык",
				choices: s.value.languages || []
			}
		]), h = [
			["noLive", "Студийный звук без публики"],
			["noWhisper", "Без шёпота"],
			["noRasp", "Без хрипотцы"],
			["noChoir", "Без хора"],
			["noIntro", "Без длинного интро"]
		];
		return (e, t) => (V(), H(B, null, [U("header", _E, [
			t[1] ||= U("div", { class: "eyebrow" }, "Suno Studio · новый инструмент", -1),
			t[2] ||= U("h1", null, [W("Жанровый "), U("span", { class: "gm-highlight" }, "миксер")], -1),
			t[3] ||= U("p", null, "Соединяй от 2 до 4 жанров из Академии SUNOBOOM, задавай пропорции и создавай готовый Style-промпт для Suno.", -1),
			F(r).studioSummary.ready ? (V(), H("p", vE, [W(" Текущая Студия: " + O(F(r).studioSummary.tempo) + " BPM · " + O(F(r).studioSummary.promptLength) + " / 1000 символов. ", 1), t[0] ||= U("button", {
				type: "button",
				class: "link-action",
				"data-action": "nav",
				"data-nav": "studio"
			}, "Вернуться в Студию →", -1)])) : G("", !0)
		]), U("div", yE, [U("section", bE, [
			t[7] ||= U("div", { class: "gm-section-head" }, [U("div", null, [U("h2", null, "Формула звучания"), U("p", null, "Меняй жанры и двигай ползунки — сумма всегда равна 100%.")]), U("span", { class: "gm-total" }, "Σ 100%")], -1),
			U("div", xE, [(V(!0), H(B, null, z(i.value, (e, t) => (V(), H("article", {
				key: e.id,
				class: "gm-row",
				style: E({ "--gm-color": e.color })
			}, [
				U("div", SE, [
					U("span", CE, O(String(t + 1).padStart(2, "0")), 1),
					U("div", wE, [U("label", { for: "gm-genre-" + t }, "Музыкальное направление", 8, TE), U("select", {
						id: "gm-genre-" + t,
						value: e.id,
						"data-gm-genre": t
					}, [(V(!0), H(B, null, z(p(t), (e) => (V(), H("optgroup", {
						key: e.family,
						label: e.family
					}, [(V(!0), H(B, null, z(e.items, (e) => (V(), H("option", {
						key: e.id,
						value: e.id
					}, O(e.name), 9, OE))), 128))], 8, DE))), 128))], 8, EE)]),
					U("span", {
						class: "gm-percent",
						"data-gm-value": t
					}, O(e.weight) + "%", 9, kE),
					U("button", {
						type: "button",
						class: "gm-remove",
						"data-action": "gm-remove",
						"data-slot": t,
						"aria-label": "Убрать жанр " + e.name,
						title: "Убрать жанр",
						disabled: i.value.length <= 2
					}, "×", 8, AE)
				]),
				U("div", jE, [U("input", {
					type: "range",
					min: "5",
					max: 100 - 5 * (i.value.length - 1),
					step: "1",
					value: e.weight,
					"data-gm-weight": t,
					"aria-label": "Доля жанра " + e.name
				}, null, 8, ME), U("div", NE, [U("span", {
					"data-gm-meter": t,
					style: E({ width: e.weight + "%" })
				}, null, 12, PE)])]),
				U("p", FE, O(e.family) + " · " + O(e.tagline) + " · " + O(e.instruments), 1)
			], 4))), 128))]),
			U("div", IE, [U("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "gm-add",
				disabled: i.value.length >= 4
			}, "＋ Добавить жанр", 8, LE), t[4] ||= U("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "gm-equal"
			}, "Поровну", -1)]),
			U("div", RE, [(V(!0), H(B, null, z(i.value, (e) => (V(), H("span", {
				key: e.id,
				"data-gm-mixbar": e.id,
				style: E({
					width: e.weight + "%",
					background: e.color
				}),
				title: e.name + ": " + e.weight + "%"
			}, null, 12, zE))), 128))]),
			t[8] ||= U("p", { class: "gm-muted" }, "Проценты — творческий ориентир для генерации, а не гарантия точного соотношения в готовой музыке.", -1),
			t[9] ||= U("div", { class: "gm-divider" }, null, -1),
			t[10] ||= U("h2", null, "Характер композиции", -1),
			U("div", BE, [(V(!0), H(B, null, z(m.value, (e) => (V(), H("div", {
				key: e.key,
				class: "gm-field"
			}, [U("label", { for: "gm-" + e.key }, O(e.label), 9, VE), U("select", {
				id: "gm-" + e.key,
				value: o.value[e.key],
				"data-gm-setting": e.key
			}, [(V(!0), H(B, null, z(e.choices, ([e, t]) => (V(), H("option", {
				key: e,
				value: e
			}, O(t), 9, UE))), 128))], 8, HE)]))), 128))]),
			U("div", WE, [U("label", null, [U("input", {
				type: "checkbox",
				"data-gm-setting": "autoTempo",
				checked: o.value.autoTempo
			}, null, 8, GE), t[5] ||= W(" Определять темп по жанрам", -1)]), U("div", KE, [U("input", {
				id: "gm-tempo",
				type: "range",
				min: "65",
				max: "200",
				value: u.value,
				"data-gm-setting": "tempo",
				disabled: o.value.autoTempo
			}, null, 8, qE), U("b", JE, O(u.value) + " BPM", 1)])]),
			U("div", YE, [t[6] ||= U("label", { for: "gm-theme" }, "Тема песни (необязательно)", -1), U("textarea", {
				id: "gm-theme",
				rows: "2",
				maxlength: "170",
				"data-gm-setting": "theme",
				value: o.value.theme,
				placeholder: "Например: ночной город, встреча после долгой разлуки"
			}, null, 8, XE)]),
			U("div", ZE, [(V(), H(B, null, z(h, ([e, t]) => U("label", { key: e }, [U("input", {
				type: "checkbox",
				"data-gm-setting": e,
				checked: o.value[e]
			}, null, 8, QE), W(" " + O(t), 1)])), 64))])
		]), U("aside", $E, [
			t[13] ||= U("div", { class: "eyebrow" }, "Результат микширования", -1),
			t[14] ||= U("h2", null, "Гибридный Style-промпт", -1),
			U("div", eD, O(l.value), 1),
			U("div", tD, [t[11] ||= U("span", null, "На английском · готово для Suno", -1), U("b", nD, O(l.value.length) + " / 1000", 1)]),
			t[15] ||= fa("<div class=\"gm-output-actions\"><button type=\"button\" class=\"btn primary\" data-action=\"gm-copy\">Копировать</button><button type=\"button\" class=\"btn ghost\" data-action=\"gm-to-studio\">В Suno Studio</button></div><button type=\"button\" class=\"btn ghost gm-full\" data-action=\"gm-save-prompt\">Сохранить в «Мои промпты»</button><div class=\"gm-divider\"></div><h3>Мои сочетания</h3>", 4),
			U("div", rD, [t[12] ||= U("label", { for: "gm-title" }, "Название сочетания", -1), U("input", {
				id: "gm-title",
				type: "text",
				maxlength: "90",
				"data-gm-title": "",
				value: d.value,
				placeholder: "Например: Северный электро-фолк"
			}, null, 8, iD)]),
			t[16] ||= U("button", {
				type: "button",
				class: "btn ghost gm-full",
				"data-action": "gm-save-mix"
			}, "Сохранить формулу", -1),
			U("div", aD, [c.value.length ? G("", !0) : (V(), H("p", oD, "Сохранённых сочетаний пока нет. Придумай свой микс и сохрани его.")), (V(!0), H(B, null, z(c.value, (e) => (V(), H("article", {
				key: e.id,
				class: "gm-saved"
			}, [U("div", null, [U("strong", null, O(e.title), 1), U("small", null, O(e.summary), 1)]), U("div", sD, [U("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "gm-load",
				"data-id": e.id
			}, "Открыть", 8, cD), U("button", {
				type: "button",
				class: "btn danger small",
				"data-action": "gm-delete",
				"data-id": e.id,
				"aria-label": "Удалить " + e.title
			}, "×", 8, lD)])]))), 128))]),
			t[17] ||= U("p", { class: "gm-muted" }, "Сохраняется в этом браузере и входит в общую JSON-копию данных SUNOBOOM. Подключение к ИИ для смешивания не требуется.", -1)
		])])], 64));
	}
};
// src/vue/studio/legacyMixerBridge.js
function dD({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_MIXER, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Q({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-mixer-root"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, uD, { api: t })
	});
}
// src/vue/studio/PromptAuditor.vue
var fD = {
	class: "sbpa-tabs",
	role: "group",
	"aria-label": "Источник промпта"
}, pD = ["aria-pressed"], mD = ["aria-pressed"], hD = {
	key: 0,
	class: "sbpa-manual"
}, gD = ["value"], _D = ["value"], vD = ["value"], yD = {
	key: 1,
	class: "sbpa-context"
}, bD = {
	id: "sbpa-results",
	"aria-live": "polite"
}, xD = { class: "sbpa-scoreline" }, SD = {
	class: "sbpa-score",
	"aria-label": "Эвристическая оценка промпта"
}, CD = { class: "sbpa-score-info" }, wD = ["aria-valuenow"], TD = {
	key: 0,
	class: "sbpa-issues"
}, ED = {
	key: 1,
	class: "sbpa-clear"
}, DD = { class: "sbpa-actions" }, OD = {
	key: 0,
	type: "button",
	"data-sbpa-action": "load-studio"
}, kD = { id: "sbpa-proposal-slot" }, AD = {
	key: 0,
	class: "sbpa-proposal"
}, jD = { key: 0 }, MD = { key: 1 }, ND = { key: 2 }, PD = {
	key: 3,
	class: "sbpa-alert"
}, FD = ["value"], ID = {
	__name: "PromptAuditor",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ P(t.api.snapshot()), r = Z();
		L(n, (e) => r.publishAuditorSummary(e), { immediate: !0 });
		let i = K(() => n.value?.mode === "manual"), a = K(() => n.value?.report || {
			score: 0,
			length: 0,
			issues: [],
			status: ""
		}), o = K(() => n.value?.genreId || ""), s = K(() => n.value?.genres || []), c = K(() => !!n.value?.proposalOpen), l = K(() => n.value?.proposal || {
			text: "",
			removed: [],
			complete: !0
		});
		function u() {
			let e = t.api.snapshot();
			e && (n.value = e);
		}
		return R(() => window.addEventListener("sunoboom:auditor-updated", u)), Cr(() => window.removeEventListener("sunoboom:auditor-updated", u)), (e, t) => (V(), H(B, null, [
			t[10] ||= U("header", { class: "sbpa-head" }, [U("div", null, [
				U("span", { class: "sbpa-eyebrow" }, "SUNOBOOM · ПРОВЕРКА"),
				U("h2", null, "Интеллектуальный аудитор промптов"),
				U("p", null, "Ищет повторы, противоречия, перегрузку и особенности жанра до отправки в Suno.")
			]), U("span", { class: "sbpa-local" }, "Проверка по правилам · без API")], -1),
			U("div", fD, [U("button", {
				type: "button",
				"data-sbpa-action": "studio",
				class: D({ active: !i.value }),
				"aria-pressed": !i.value
			}, "Текущий промпт Studio", 10, pD), U("button", {
				type: "button",
				"data-sbpa-action": "manual",
				class: D({ active: i.value }),
				"aria-pressed": i.value
			}, "Свой текст / вставка", 10, mD)]),
			i.value ? (V(), H("div", hD, [
				t[0] ||= U("label", { for: "sbpa-text" }, "Текст промпта", -1),
				U("textarea", {
					id: "sbpa-text",
					rows: "5",
					spellcheck: "false",
					placeholder: "Вставь текст на русском или английском…",
					value: n.value.manual
				}, null, 8, gD),
				t[1] ||= U("label", { for: "sbpa-genre" }, "Жанр для сопоставления с Академией", -1),
				U("select", {
					id: "sbpa-genre",
					value: o.value
				}, [(V(!0), H(B, null, z(s.value, (e) => (V(), H("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, vD))), 128))], 8, _D)
			])) : (V(), H("p", yD, " Проверяется актуальный промпт конструктора. Изменения настроек Studio отражаются здесь автоматически. ")),
			U("div", bD, [U("div", xD, [
				U("div", SD, [W(O(a.value.score), 1), t[2] ||= U("small", null, "/ 100", -1)]),
				U("div", CD, [
					U("strong", null, O(a.value.status), 1),
					t[3] ||= U("span", null, "Оценка ориентировочная: проверяется структура текста, а не качество будущей музыки.", -1),
					U("div", {
						class: "sbpa-meter",
						role: "progressbar",
						"aria-label": "Оценка промпта",
						"aria-valuenow": a.value.score,
						"aria-valuemin": "0",
						"aria-valuemax": "100"
					}, [U("span", { style: E({ width: a.value.score + "%" }) }, null, 4)], 8, wD)
				]),
				U("div", { class: D(["sbpa-limit", { over: a.value.length > 1e3 }]) }, O(a.value.length) + " / 1000 символов ", 3)
			]), a.value.issues?.length ? (V(), H("ul", TD, [(V(!0), H(B, null, z(a.value.issues, (e, t) => (V(), H("li", {
				key: t,
				class: D(["sbpa-item", "sbpa-" + e.kind])
			}, [U("div", null, [
				U("strong", null, O(e.title), 1),
				U("p", null, O(e.detail), 1),
				U("small", null, O(e.fix), 1)
			])], 2))), 128))])) : (V(), H("p", ED, " Явных противоречий и повторов по проверяемым правилам не найдено. "))]),
			U("div", DD, [t[4] ||= U("button", {
				type: "button",
				"data-sbpa-action": "preview",
				class: "sbpa-primary"
			}, " Показать улучшенный вариант ", -1), i.value ? (V(), H("button", OD, " Вставить текущий промпт Studio ")) : G("", !0)]),
			U("div", kD, [c.value ? (V(), H("div", AD, [
				U("h4", null, [t[5] ||= W("Предлагаемый вариант ", -1), U("small", null, O(l.value.text.length) + " / 1000", 1)]),
				l.value.removed.length ? (V(), H("p", MD, "Удалено фрагментов: " + O(l.value.removed.length) + ". Проверь смысл до копирования.", 1)) : (V(), H("p", jD, "Удалять нечего: текст уже без точных повторов.")),
				l.value.removed.length ? (V(), H("details", ND, [t[6] ||= U("summary", null, "Что изменилось", -1), U("ul", null, [(V(!0), H(B, null, z(l.value.removed, (e, t) => (V(), H("li", { key: t }, [U("b", null, O(e.reason) + ":", 1), W(" " + O(e.part), 1)]))), 128))])])) : G("", !0),
				l.value.complete ? G("", !0) : (V(), H("p", PD, " Автоматического сокращения недостаточно. Уменьши текст вручную минимум на " + O(l.value.text.length - 1e3) + " символов. ", 1)),
				t[7] ||= U("label", { for: "sbpa-preview-text" }, "Редактируемый предпросмотр", -1),
				U("textarea", {
					id: "sbpa-preview-text",
					rows: "5",
					spellcheck: "false",
					value: l.value.text
				}, null, 8, FD),
				t[8] ||= U("div", { class: "sbpa-actions" }, [U("button", {
					type: "button",
					"data-sbpa-action": "copy-preview",
					class: "sbpa-primary"
				}, " Подтвердить и скопировать "), U("button", {
					type: "button",
					"data-sbpa-action": "close-preview"
				}, "Закрыть")], -1),
				t[9] ||= U("small", null, "Исходный промпт и параметры Studio не меняются. Копируется только текст предпросмотра после нажатия.", -1)
			])) : G("", !0)]),
			t[11] ||= U("p", { class: "sbpa-foot" }, " Аудитор не вызывает Gemini и не оценивает реальный звук. Жанровые отклонения могут быть творческим решением, а рекомендации не изменяют исходник без твоего действия. ", -1)
		], 64));
	}
};
// src/vue/studio/legacyAuditorBridge.js
function LD({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_AUDITOR, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Q({
		root: n,
		selectTarget: (e) => e.querySelector("#sbpa-auditor"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, ID, { api: t })
	});
}
// src/vue/studio/ArrangementPanel.vue
var RD = ["data-sba-id", "data-sba-energy"], zD = { class: "sba-block-head" }, BD = ["data-sba-drag", "aria-label"], VD = { class: "sba-index" }, HD = {
	class: "sba-emoji",
	"aria-hidden": "true"
}, UD = { class: "sba-head-energy" }, WD = { class: "sba-block-actions" }, GD = ["data-id", "disabled"], KD = ["data-id", "disabled"], qD = ["data-id"], JD = ["data-id"], YD = { class: "sba-block-fields" }, XD = ["data-id", "value"], ZD = ["value"], QD = ["data-id", "value"], $D = ["value"], eO = ["data-id", "value"], tO = ["value"], nO = { class: "sba-energy-field" }, rO = ["data-sba-output"], iO = ["value", "data-id"], aO = { class: "sba-instrument-field" }, oO = ["for"], sO = { class: "sba-instrument-row" }, cO = [
	"id",
	"data-id",
	"value"
], lO = ["id", "innerHTML"], uO = ["id"], dO = { class: "sba-sound-head" }, fO = ["data-id"], pO = ["data-id"], mO = ["id"], hO = {
	key: 0,
	class: "sba-sound-back"
}, gO = ["data-id"], _O = [
	"data-sba-sound-search",
	"data-id",
	"value",
	"placeholder"
], vO = ["id"], yO = { class: "sba-sound-info" }, bO = { key: 0 }, xO = ["data-id", "data-genre-id"], SO = {
	key: 0,
	class: "sba-sound-none"
}, CO = { class: "sba-sound-group" }, wO = [
	"disabled",
	"aria-disabled",
	"data-id",
	"data-sound-value"
], TO = {
	key: 0,
	class: "sba-sound-none"
}, EO = {
	key: 1,
	class: "sba-sound-foot"
}, DO = ["data-id"], OO = {
	key: 0,
	class: "sba-custom-label"
}, kO = ["data-id", "value"], AO = ["innerHTML"], jO = ["data-id", "aria-label"], MO = {
	key: 0,
	class: "sba-empty"
}, NO = ["aria-label"], PO = [
	"data-sba-snake-id",
	"data-sba-energy",
	"aria-label",
	"title"
], FO = { class: "sba-snake-num" }, IO = {
	class: "sba-snake-icon",
	"aria-hidden": "true"
}, LO = { class: "sba-snake-title" }, RO = { class: "sba-snake-level" }, zO = ["title"], BO = {
	key: 0,
	class: "sba-snake-more"
}, VO = {
	key: 1,
	class: "sba-snake-empty"
}, HO = ["data-sba-hub-from"], UO = { class: "sba-transition-hub-route" }, WO = { class: "sba-transition-hub-number" }, GO = { class: "sba-transition-hub-names" }, KO = { class: "sba-transition-hub-controls" }, qO = [
	"data-id",
	"value",
	"aria-label"
], JO = ["value"], YO = [
	"data-id",
	"value",
	"aria-label"
], XO = ["value"], ZO = [
	"data-id",
	"value",
	"aria-label"
], QO = ["value"], $O = { class: "sba-transition-hub-actions" }, ek = ["data-id", "title"], tk = ["data-id"], nk = {
	key: 1,
	class: "sba-transition-hub-empty"
}, rk = ["title"], ik = { class: "sba-chart-column" }, ak = {
	__name: "ArrangementPanel",
	props: {
		api: {
			type: Object,
			required: !0
		},
		kind: {
			type: String,
			required: !0
		}
	},
	setup(e) {
		let t = e, n = /* @__PURE__ */ P(t.api.snapshot()), r = Z();
		t.kind === "cards" && L(n, (e) => r.publishArrangerSummary(e), { immediate: !0 });
		let i = K(() => n.value?.blocks || []), a = K(() => n.value?.sections || []), o = K(() => n.value?.voices || []), s = K(() => n.value?.energies || {}), c = K(() => n.value?.transitions || []), l = K(() => n.value?.transitionTypes || []), u = K(() => n.value?.transitionLengths || []), d = K(() => n.value?.transitionStrengths || []), f = K(() => n.value?.snakeExpanded ? i.value : i.value.slice(0, 12)), p = K(() => n.value?.transitionHubExpanded ? c.value : c.value.slice(0, 3)), m = [
			2,
			4,
			8,
			12,
			16,
			24,
			32
		];
		function h() {
			let e = t.api.snapshot();
			e && (n.value = e);
		}
		R(() => window.addEventListener("sunoboom:arranger-updated", h)), Cr(() => window.removeEventListener("sunoboom:arranger-updated", h));
		function g(e) {
			let t = [];
			for (let n = 0; n < f.value.length; n += e) t.push({
				id: n,
				reverse: Math.floor(n / e) % 2 == 1,
				continued: n + e < f.value.length,
				items: f.value.slice(n, n + e)
			});
			return t;
		}
		let _ = K(() => f.value.map((e, t) => t + 1 + ". " + e.snakeLabel).join(" → "));
		return (t, n) => e.kind === "cards" ? (V(), H(B, { key: 0 }, [(V(!0), H(B, null, z(i.value, (e, t) => (V(), H(B, { key: e.id }, [
			U("article", {
				class: "sba-block",
				"data-sba-id": e.id,
				"data-sba-energy": e.energy
			}, [U("div", zD, [
				U("span", {
					class: "sba-drag",
					draggable: "true",
					"data-sba-drag": e.id,
					title: "Перетащить блок",
					"aria-label": "Перетащить " + e.sectionName
				}, "⠿", 8, BD),
				U("span", VD, O(String(t + 1).padStart(2, "0")), 1),
				U("span", HD, O(e.icon), 1),
				U("strong", null, O(e.label), 1),
				U("span", UD, "Энергия " + O(e.energy) + "/5", 1),
				U("div", WD, [
					U("button", {
						type: "button",
						"data-sba-action": "up",
						"data-id": e.id,
						"aria-label": "Переместить вверх",
						disabled: t === 0
					}, "↑", 8, GD),
					U("button", {
						type: "button",
						"data-sba-action": "down",
						"data-id": e.id,
						"aria-label": "Переместить вниз",
						disabled: t === i.value.length - 1
					}, "↓", 8, KD),
					U("button", {
						type: "button",
						"data-sba-action": "duplicate",
						"data-id": e.id,
						"aria-label": "Дублировать блок"
					}, "⧉", 8, qD),
					U("button", {
						type: "button",
						"data-sba-action": "remove",
						"data-id": e.id,
						"aria-label": "Удалить блок"
					}, "×", 8, JD)
				])
			]), U("div", YD, [
				U("label", null, [n[0] ||= W("Раздел ", -1), U("select", {
					"data-sba-field": "type",
					"data-id": e.id,
					value: e.type
				}, [(V(!0), H(B, null, z(a.value, (e) => (V(), H("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, ZD))), 128))], 8, XD)]),
				U("label", null, [n[1] ||= W("Тактов ", -1), U("select", {
					"data-sba-field": "bars",
					"data-id": e.id,
					value: e.bars
				}, [(V(), H(B, null, z(m, (e) => U("option", {
					key: e,
					value: e
				}, O(e), 9, $D)), 64))], 8, QD)]),
				U("label", null, [n[2] ||= W("Вокал ", -1), U("select", {
					"data-sba-field": "vocal",
					"data-id": e.id,
					value: e.vocal
				}, [(V(!0), H(B, null, z(o.value, (e) => (V(), H("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, tO))), 128))], 8, eO)]),
				U("label", nO, [
					n[3] ||= W("Энергия ", -1),
					U("output", { "data-sba-output": e.id }, O(e.energy) + "/5 · " + O(s.value[e.energy]), 9, rO),
					U("input", {
						type: "range",
						min: "1",
						max: "5",
						step: "1",
						value: e.energy,
						"data-sba-field": "energy",
						"data-id": e.id
					}, null, 8, iO)
				]),
				U("div", aO, [
					U("label", { for: "sba-instruments-" + e.id }, "Инструменты / приём", 8, oO),
					U("div", sO, [U("input", {
						type: "text",
						id: "sba-instruments-" + e.id,
						maxlength: "300",
						"data-sba-field": "instruments",
						"data-id": e.id,
						value: e.instruments,
						placeholder: "Введи вручную или выбери рекомендацию",
						autocomplete: "off"
					}, null, 8, cO)]),
					U("div", {
						class: "sba-quick-sounds",
						id: "sba-quick-" + e.id,
						innerHTML: e.quickSounds
					}, null, 8, lO),
					e.soundPanel ? (V(), H("div", {
						key: 0,
						class: "sba-sound-panel",
						id: "sba-sound-panel-" + e.id,
						"aria-label": "Выбор инструментов и приёмов"
					}, [
						U("div", dO, [n[4] ||= U("strong", null, "Библиотека инструментов и приёмов", -1), U("button", {
							type: "button",
							"data-sba-action": "sound-close",
							"data-id": e.id,
							"aria-label": "Закрыть подбор"
						}, "×", 8, fO)]),
						U("button", {
							type: "button",
							class: "sba-sound-genre-trigger",
							"data-sba-action": "sound-switch-mode",
							"data-id": e.id
						}, [
							n[5] ||= W(" Жанр: ", -1),
							U("b", null, O(e.soundPanel.genreName), 1),
							n[6] ||= U("span", null, "⌄", -1)
						], 8, pO),
						U("div", { id: "sba-sound-body-" + e.id }, [
							e.soundPanel.mode === "genres" ? (V(), H("div", hO, [U("button", {
								type: "button",
								"data-sba-action": "sound-switch-mode",
								"data-id": e.id
							}, " ← К инструментам ", 8, gO)])) : G("", !0),
							U("input", {
								type: "search",
								class: "sba-sound-search",
								"data-sba-sound-search": e.soundPanel.mode,
								"data-id": e.id,
								value: e.soundPanel.query,
								placeholder: e.soundPanel.mode === "genres" ? "Поиск по всей Академии..." : "Поиск инструмента или приёма...",
								autocomplete: "off",
								"aria-label": "Поиск инструментов или жанров"
							}, null, 8, _O),
							U("div", {
								class: "sba-sound-list",
								id: "sba-sound-results-" + e.id
							}, [e.soundPanel.mode === "genres" ? (V(), H(B, { key: 0 }, [
								U("div", yO, [W(" Найдено жанров: " + O(e.soundPanel.total) + " ", 1), e.soundPanel.total > e.soundPanel.matches.length ? (V(), H("span", bO, " · уточни запрос ")) : G("", !0)]),
								(V(!0), H(B, null, z(e.soundPanel.matches, (t) => (V(), H("button", {
									key: t.id,
									type: "button",
									class: "sba-sound-genre-row",
									"data-sba-action": "sound-set-genre",
									"data-id": e.id,
									"data-genre-id": t.id
								}, [U("span", null, O(t.name), 1), U("small", null, O(t.family), 1)], 8, xO))), 128)),
								e.soundPanel.matches.length ? G("", !0) : (V(), H("p", SO, " Жанр не найден "))
							], 64)) : (V(), H(B, { key: 1 }, [(V(!0), H(B, null, z(e.soundPanel.groups, (t) => (V(), H(B, { key: t.title }, [U("div", CO, O(t.title), 1), (V(!0), H(B, null, z(t.items, (t) => (V(), H("button", {
								key: t.name,
								type: "button",
								class: "sba-sound-option",
								disabled: t.added,
								"aria-disabled": t.added,
								"data-sba-action": "sound-add",
								"data-id": e.id,
								"data-sound-value": t.name
							}, [U("span", null, O(t.name), 1), U("small", null, O(t.added ? "✓ Добавлено" : "+ Добавить"), 1)], 8, wO))), 128))], 64))), 128)), e.soundPanel.groups.length ? G("", !0) : (V(), H("p", TO, " Совпадений нет. Можно ввести инструмент вручную. "))], 64))], 8, vO),
							e.soundPanel.mode === "genres" ? G("", !0) : (V(), H("div", EO, [n[7] ||= U("span", null, "Нажми «Добавить», чтобы дополнить поле. Свой текст сохраняется.", -1), U("button", {
								type: "button",
								"data-sba-action": "sound-clear",
								"data-id": e.id
							}, " Очистить поле ", 8, DO)]))
						], 8, mO)
					], 8, uO)) : G("", !0)
				]),
				e.type === "custom" ? (V(), H("label", OO, [n[8] ||= W("Своё название ", -1), U("input", {
					type: "text",
					maxlength: "48",
					"data-sba-field": "customName",
					"data-id": e.id,
					value: e.customName,
					placeholder: "Название для тега Suno"
				}, null, 8, kO)])) : G("", !0)
			])], 8, RD),
			e.transitionHTML ? (V(), H("div", {
				key: 0,
				style: { display: "contents" },
				innerHTML: e.transitionHTML
			}, null, 8, AO)) : G("", !0),
			U("button", {
				type: "button",
				class: "sba-between-add",
				"data-sba-action": "insert-after",
				"data-id": e.id,
				"aria-label": "Добавить блок после " + e.label
			}, [...n[9] ||= [U("span", { "aria-hidden": "true" }, "＋", -1), W(" Добавить после ", -1)]], 8, jO)
		], 64))), 128)), i.value.length ? G("", !0) : (V(), H("div", MO, "Пока нет блоков. Добавь первый фрагмент снизу."))], 64)) : e.kind === "snake" ? (V(), H(B, { key: 1 }, [i.value.length ? (V(), H(B, { key: 0 }, [(V(), H(B, null, z([6, 3], (e) => U("div", {
			key: e,
			class: D(e === 6 ? "sba-snake-desktop" : "sba-snake-mobile"),
			role: "group",
			"aria-label": "Схема блоков: " + _.value
		}, [(V(!0), H(B, null, z(g(e), (e) => (V(), H("div", {
			key: e.id,
			class: D(["sba-snake-row", {
				"sba-snake-reverse": e.reverse,
				"sba-snake-continues": e.continued
			}])
		}, [(V(!0), H(B, null, z(e.items, (e) => (V(), H("button", {
			key: e.id,
			type: "button",
			draggable: "true",
			class: "sba-snake-chip",
			"data-sba-snake-id": e.id,
			"data-sba-energy": e.energy,
			"aria-label": "Переместить " + e.snakeLabel + ", позиция " + (e.index + 1) + " из " + i.value.length + ", энергия " + e.energy + "/5",
			title: e.index + 1 + ". " + e.snakeLabel + " · энергия " + e.energy + "/5 · перетащи для перестановки"
		}, [
			U("span", FO, O(e.index + 1), 1),
			U("span", IO, O(e.icon), 1),
			U("span", LO, O(e.snakeLabel), 1),
			U("span", RO, O(e.energy) + "/5", 1),
			e.hasTransition ? (V(), H("span", {
				key: 0,
				class: "sba-snake-transition",
				title: "Переход: " + e.transitionLabel,
				"aria-hidden": "true"
			}, "↝", 8, zO)) : G("", !0)
		], 8, PO))), 128))], 2))), 128))], 10, NO)), 64)), f.value.length < i.value.length ? (V(), H("p", BO, " … и ещё " + O(i.value.length - f.value.length) + " блоков ", 1)) : G("", !0)], 64)) : (V(), H("p", VO, "Добавь первый блок, и здесь появится схема композиции."))], 64)) : e.kind === "transitions" ? (V(), H(B, { key: 2 }, [c.value.length ? (V(!0), H(B, { key: 0 }, z(p.value, (e) => (V(), H("div", {
			key: e.id,
			class: D(["sba-transition-hub-row", { "sba-transition-hub-active": e.current.type !== "none" }]),
			"data-sba-hub-from": e.id
		}, [
			U("div", UO, [U("span", WO, O(e.index + 1) + " → " + O(e.index + 2), 1), U("span", GO, [
				W(O(e.from) + " ", 1),
				n[10] ||= U("b", null, "→", -1),
				W(" " + O(e.to), 1)
			])]),
			U("div", KO, [
				U("label", null, [n[11] ||= W("Эффект ", -1), U("select", {
					"data-sba-transition": "type",
					"data-id": e.id,
					value: e.current.type,
					"aria-label": "Переход " + (e.index + 1) + " к " + (e.index + 2)
				}, [(V(!0), H(B, null, z(l.value, (e) => (V(), H("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, JO))), 128))], 8, qO)]),
				U("label", null, [n[12] ||= W("Длина ", -1), U("select", {
					"data-sba-transition": "length",
					"data-id": e.id,
					value: e.current.length,
					"aria-label": "Длительность перехода " + (e.index + 1)
				}, [(V(!0), H(B, null, z(u.value, (e) => (V(), H("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, XO))), 128))], 8, YO)]),
				U("label", null, [n[13] ||= W("Сила ", -1), U("select", {
					"data-sba-transition": "strength",
					"data-id": e.id,
					value: e.current.strength,
					"aria-label": "Выраженность перехода " + (e.index + 1)
				}, [(V(!0), H(B, null, z(d.value, (e) => (V(), H("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, QO))), 128))], 8, ZO)])
			]),
			U("div", $O, [U("button", {
				type: "button",
				"data-sba-action": "transition-suggest",
				"data-id": e.id,
				title: "Совет: " + e.advice
			}, "✧ Совет", 8, ek), U("button", {
				type: "button",
				"data-sba-action": "transition-hub-jump",
				"data-id": e.id
			}, "Подробнее ↓", 8, tk)])
		], 10, HO))), 128)) : (V(), H("p", nk, "Добавь второй блок, и здесь можно будет настроить переходы."))], 64)) : e.kind === "energy" ? (V(!0), H(B, { key: 3 }, z(i.value, (e) => (V(), H("div", {
			key: e.id,
			class: "sba-chart-step",
			title: e.label + " · " + e.energy + "/5",
			style: E({
				"--energy": e.energy,
				"--bar-width": 100 / i.value.length + "%"
			})
		}, [U("div", ik, [U("i", { style: E({ "--level": e.energy }) }, null, 4)]), U("small", null, O(e.icon), 1)], 12, rk))), 128)) : G("", !0);
	}
}, ok = ["aria-expanded"], sk = { id: "sba-picked-label" }, ck = ["hidden"], lk = { class: "sba-preset-search-row" }, uk = ["value"], dk = {
	class: "sba-preset-filters",
	role: "group",
	"aria-label": "Тип вариантов"
}, fk = ["data-filter", "aria-pressed"], pk = {
	id: "sba-preset-results",
	class: "sba-preset-results",
	role: "listbox",
	"aria-label": "Доступные шаблоны и жанры"
}, mk = { class: "sba-preset-group-title" }, hk = { key: 0 }, gk = ["aria-selected", "data-choice"], _k = {
	key: 0,
	class: "sba-preset-no-results"
}, vk = {
	__name: "ArrangementPicker",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ P(t.api.snapshot()), r = K(() => n.value?.picker || {
			selected: "",
			open: !1,
			filter: "all",
			query: "",
			genreCount: 0,
			groups: []
		});
		function i() {
			let e = t.api.snapshot();
			e && (n.value = e);
		}
		return R(() => window.addEventListener("sunoboom:arranger-updated", i)), Cr(() => window.removeEventListener("sunoboom:arranger-updated", i)), (e, t) => (V(), H(B, null, [
			t[2] ||= U("span", { class: "sba-preset-caption" }, "Шаблон композиции / жанр", -1),
			U("button", {
				type: "button",
				id: "sba-presets",
				class: "sba-preset-trigger",
				"data-sba-action": "menu-toggle",
				"aria-haspopup": "dialog",
				"aria-expanded": r.value.open,
				"aria-controls": "sba-preset-menu"
			}, [U("span", sk, O(r.value.selected), 1), t[0] ||= U("span", {
				class: "sba-preset-chevron",
				"aria-hidden": "true"
			}, "⌄", -1)], 8, ok),
			U("div", {
				id: "sba-preset-menu",
				class: "sba-preset-menu",
				role: "dialog",
				"aria-label": "Поиск шаблона или жанра",
				hidden: !r.value.open
			}, [
				U("div", lk, [U("input", {
					type: "search",
					id: "sba-preset-search",
					autocomplete: "off",
					value: r.value.query,
					placeholder: "Найти жанр или шаблон...",
					"aria-label": "Поиск жанра"
				}, null, 8, uk), t[1] ||= U("button", {
					type: "button",
					"data-sba-action": "menu-close",
					"aria-label": "Закрыть меню"
				}, "×", -1)]),
				U("div", dk, [(V(!0), H(B, null, z([
					{
						id: "all",
						title: "Все"
					},
					{
						id: "templates",
						title: "Шаблоны"
					},
					{
						id: "genres",
						title: "Жанры Академии (" + r.value.genreCount + ")"
					}
				], (e) => (V(), H("button", {
					key: e.id,
					type: "button",
					"data-sba-action": "menu-filter",
					"data-filter": e.id,
					"aria-pressed": r.value.filter === e.id
				}, O(e.title), 9, fk))), 128))]),
				U("div", pk, [(V(!0), H(B, null, z(r.value.groups, (e) => (V(), H(B, { key: e.title }, [U("div", mk, [W(O(e.title) + " ", 1), e.count === null ? G("", !0) : (V(), H("small", hk, O(e.count), 1))]), (V(!0), H(B, null, z(e.items, (e) => (V(), H("button", {
					key: e.key,
					type: "button",
					role: "option",
					"aria-selected": e.key === r.value.selectedKey,
					"data-sba-action": "menu-choose",
					"data-choice": e.key
				}, [U("span", null, O(e.title), 1), U("small", null, O(e.subtitle), 1)], 8, gk))), 128))], 64))), 128)), r.value.groups.length ? G("", !0) : (V(), H("p", _k, " Ничего не найдено. Попробуй другое название или направление. "))])
			], 8, ck)
		], 64));
	}
}, yk = {
	class: "sba-preview-tabs",
	role: "group",
	"aria-label": "Тип результата"
}, bk = ["aria-pressed"], xk = ["aria-pressed"], Sk = ["value"], Ck = {
	class: "sba-preview-count",
	id: "sba-preview-count"
}, wk = {
	id: "sba-transfer-confirm",
	"aria-live": "polite"
}, Tk = {
	key: 0,
	class: "sba-transfer-preview"
}, Ek = ["hidden"], Dk = [
	["#sba-cards", "cards"],
	["#sba-snake-track", "snake"],
	["#sba-transition-hub-list", "transitions"],
	["#sba-energy-chart", "energy"],
	[
		".sba-preset-picker",
		"picker",
		vk
	],
	[
		".sba-result",
		"result",
		{
			__name: "ArrangementResult",
			props: { api: {
				type: Object,
				required: !0
			} },
			setup(e) {
				let t = e, n = /* @__PURE__ */ P(t.api.snapshot()), r = K(() => n.value?.result || {
					tab: "lyrics",
					text: "",
					count: "",
					transfer: null,
					message: ""
				});
				function i() {
					let e = t.api.snapshot();
					e && (n.value = e);
				}
				return R(() => window.addEventListener("sunoboom:arranger-updated", i)), Cr(() => window.removeEventListener("sunoboom:arranger-updated", i)), (e, t) => (V(), H(B, null, [
					t[3] ||= U("div", { class: "sba-result-header" }, [
						U("span", { class: "sba-eyebrow" }, "ПРЕДПРОСМОТР"),
						U("h3", null, "Результат для Suno"),
						U("p", null, "Lyrics — теги по секциям; Style — короткое описание динамики.")
					], -1),
					U("div", yk, [U("button", {
						type: "button",
						"data-sba-action": "tab",
						"data-tab": "lyrics",
						"aria-pressed": r.value.tab === "lyrics"
					}, "Теги Lyrics", 8, bk), U("button", {
						type: "button",
						"data-sba-action": "tab",
						"data-tab": "style",
						"aria-pressed": r.value.tab === "style"
					}, "Style", 8, xk)]),
					U("textarea", {
						id: "sba-preview",
						readonly: "",
						spellcheck: "false",
						"aria-label": "Готовые теги структуры песни",
						value: r.value.text
					}, null, 8, Sk),
					U("div", Ck, O(r.value.count), 1),
					t[4] ||= U("div", { class: "sba-result-actions" }, [U("button", {
						type: "button",
						class: "sba-btn sba-copy-btn",
						"data-sba-action": "copy"
					}, " Копировать результат "), U("button", {
						type: "button",
						class: "sba-btn sba-transfer-btn",
						"data-sba-action": "prepare-transfer"
					}, " Перенести стиль в Studio ")], -1),
					U("div", wk, [r.value.transfer ? (V(), H("div", Tk, [
						t[0] ||= U("strong", null, "Предпросмотр переноса в Style", -1),
						t[1] ||= U("p", null, "Добавим описание аранжировки в дополнительные инструкции Suno Studio, не удаляя твои записи.", -1),
						U("code", null, O(r.value.transfer.candidate), 1),
						t[2] ||= U("div", { class: "sba-preview-buttons" }, [U("button", {
							type: "button",
							"data-sba-action": "transfer-accept"
						}, "Подтвердить перенос"), U("button", {
							type: "button",
							"data-sba-action": "transfer-cancel"
						}, "Отмена")], -1),
						U("small", null, "Итоговый промпт Studio: " + O(r.value.transfer.promptLength) + " / 1000 символов", 1)
					])) : G("", !0)]),
					U("p", {
						id: "sba-message",
						class: "sba-message",
						role: "status",
						"aria-live": "polite",
						hidden: !r.value.message
					}, O(r.value.message), 9, Ek),
					t[5] ||= U("div", { class: "sba-help" }, [
						U("strong", null, "Как применять"),
						U("p", null, [
							W("Теги секций вставляй в поле "),
							U("b", null, "Lyrics"),
							W(" в Suno рядом с текстом песни. Краткую динамику можно добавить в "),
							U("b", null, "Style"),
							W(" через Suno Studio после подтверждения.")
						]),
						U("p", null, "Ориентир длительности рассчитан по 4/4 и BPM Studio, это не гарантия точной длины аудио.")
					], -1)
				], 64));
			}
		}
	]
];
function Ok({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ARRANGER, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Hx({
		root: n,
		islands: Dk.map(([n, r, i = ak]) => ({
			key: r,
			selectTarget: (e) => e.querySelector(n),
			readSnapshot: () => t.snapshot(),
			mount: (n) => e(n, i, i === ak ? {
				api: t,
				kind: r
			} : { api: t })
		}))
	});
}
// src/vue/poetry/PoetryAnalysis.vue
var kk = {
	key: 0,
	class: "sb-poetry-empty"
}, Ak = { class: "sb-poetry-stats" }, jk = { class: "sb-poetry-subline" }, Mk = { class: "sb-poetry-sections" }, Nk = { class: "sb-poetry-stanzas" }, Pk = { class: "sb-poetry-stanza-name" }, Fk = { class: "sb-poetry-stanza-data" }, Ik = { class: "sb-poetry-lines" }, Lk = { class: "sb-poetry-line-main" }, Rk = { class: "sb-poetry-index" }, zk = { class: "sb-poetry-verse" }, Bk = {
	class: "sb-poetry-syllable",
	title: "Оценка слогов"
}, Vk = ["title"], Hk = {
	key: 0,
	class: "sb-poetry-footnote"
}, Uk = {
	key: 1,
	class: "sb-poetry-words"
}, Wk = { class: "sb-poetry-tips" }, Gk = {
	__name: "PoetryAnalysis",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ P(t.api.analysis()), r = K(() => n.value || {
			analyzed: !1,
			message: ""
		}), i = Z();
		function a() {
			let e = t.api.analysis();
			e && (n.value = e, i.publishPoetryAnalysisSummary(e));
		}
		return R(() => {
			i.publishPoetryAnalysisSummary(n.value), window.addEventListener("sunoboom:poetry-updated", a);
		}), Cr(() => window.removeEventListener("sunoboom:poetry-updated", a)), (e, t) => r.value.analyzed ? (V(), H(B, { key: 1 }, [
			U("div", Ak, [(V(!0), H(B, null, z(r.value.stats, (e) => (V(), H("div", {
				key: e.label,
				class: "sb-poetry-stat"
			}, [U("strong", null, O(e.value), 1), U("span", null, O(e.label), 1)]))), 128))]),
			U("p", jk, " Диапазон: " + O(r.value.lower) + "–" + O(r.value.upper) + " слогов на строку · меток ударения: " + O(r.value.markedStress) + ". ", 1),
			U("div", Mk, [t[1] ||= U("h4", null, "Строфы и предполагаемая рифмовка", -1), U("div", Nk, [(V(!0), H(B, null, z(r.value.stanzas, (e) => (V(), H("div", {
				key: e.id,
				class: "sb-poetry-stanza"
			}, [U("div", Pk, O(e.section) + " · строфа " + O(e.position), 1), U("div", Fk, [
				W(" Схема " + O(e.scheme) + " ", 1),
				t[0] ||= U("span", null, "·", -1),
				W(" разброс " + O(e.spread) + " сл. ", 1)
			])]))), 128))])]),
			t[4] ||= U("div", { class: "sb-poetry-lines-head" }, [U("strong", null, "Построчный анализ"), U("span", null, "Слоги · рифма")], -1),
			U("div", Ik, [(V(!0), H(B, null, z(r.value.lines, (e) => (V(), H("div", {
				key: e.number,
				class: "sb-poetry-line"
			}, [
				U("div", Lk, [U("span", Rk, O(e.number) + ".", 1), U("span", zk, O(e.text), 1)]),
				U("div", Bk, [U("span", null, O(e.syllables) + " сл.", 1), U("i", { style: E({ width: e.width + "%" }) }, null, 4)]),
				U("span", {
					class: D(["sb-poetry-letter", { "sb-poetry-letter-match": e.rhyme }]),
					title: e.repeat ? "Совпадение последнего слова" : e.rhyme ? "Предполагаемая рифма" : "Метка окончания"
				}, O(e.mark), 11, Vk)
			]))), 128))]),
			r.value.rowCount > 120 ? (V(), H("p", Hk, " Показаны первые 120 строк из " + O(r.value.rowCount) + "; статистика рассчитана по всему тексту. ", 1)) : G("", !0),
			r.value.frequent.length ? (V(), H("div", Uk, [t[2] ||= U("strong", null, "Повторяющиеся слова:", -1), (V(!0), H(B, null, z(r.value.frequent, (e) => (V(), H("span", { key: e.word }, O(e.word) + " · " + O(e.count), 1))), 128))])) : G("", !0),
			U("div", Wk, [t[3] ||= U("h4", null, "На что обратить внимание", -1), U("ul", null, [(V(!0), H(B, null, z(r.value.suggestions, (e, t) => (V(), H("li", { key: t }, O(e), 1))), 128))])]),
			t[5] ||= U("p", { class: "sb-poetry-footnote" }, " Анализ ориентировочный: счёт гласных не равен точной метрической скансии, совпадение окончаний не гарантирует рифму, а вокальная удобность зависит от темпа и мелодии. Исходный текст автоматически не изменяется. ", -1)
		], 64)) : (V(), H("p", kk, O(r.value.message), 1));
	}
}, Kk = {
	key: 0,
	class: "sb-stress-ambig-clear"
}, qk = { class: "sb-stress-ambig-heading" }, Jk = { class: "sb-stress-ambig-variants" }, Yk = ["data-word", "data-variant"], Xk = {
	key: 0,
	class: "sb-poetry-small"
}, Zk = {
	__name: "PoetryAmbiguities",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ P(t.api.ambiguities()), r = K(() => n.value || {
			count: 0,
			words: [],
			total: 0
		}), i = Z();
		function a() {
			let e = t.api.ambiguities();
			e && (n.value = e, i.publishPoetryAmbiguitySummary(e));
		}
		return R(() => {
			i.publishPoetryAmbiguitySummary(n.value), window.addEventListener("sunoboom:poetry-stress-updated", a);
		}), Cr(() => {
			window.removeEventListener("sunoboom:poetry-stress-updated", a), i.clearPoetryAmbiguitySummary();
		}), (e, t) => r.value.count ? (V(), H(B, { key: 1 }, [
			U("div", qk, " 🔴 Требуют проверки: " + O(r.value.count) + " вхождений (" + O(r.value.total) + " разных слов). Нажми нужный вариант для каждого вхождения. ", 1),
			(V(!0), H(B, null, z(r.value.words, (e) => (V(), H("div", {
				key: e.key,
				class: "sb-stress-ambig-choice"
			}, [U("strong", null, O(e.key) + O(e.count > 1 ? " ×" + e.count : ""), 1), U("div", Jk, [(V(!0), H(B, null, z(e.variants, (t) => (V(), H("button", {
				key: t,
				type: "button",
				"data-action": "sb-poetry-stress-choice",
				"data-word": e.key,
				"data-variant": t,
				title: "Указать ударение для следующего вхождения"
			}, O(t), 9, Yk))), 128))])]))), 128)),
			r.value.total > 30 ? (V(), H("p", Xk, " Показаны первые 30 разных слов; другие можно исправить вручную. ")) : G("", !0)
		], 64)) : (V(), H("p", Kk, " ✓ Все найденные неоднозначные слова проверены. "));
	}
};
// src/vue/poetry/legacyPoetryBridge.js
function Qk({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_POETRY, n = document.getElementById("app");
	return !t?.analysis || !t?.ambiguities || !n ? () => {} : Hx({
		root: n,
		islands: [[
			"analysis",
			"#sb-poetry-result",
			Gk
		], [
			"ambiguities",
			"#sb-poetry-ambiguous-choices",
			Zk
		]].map(([n, r, i]) => ({
			key: n,
			selectTarget: (e) => e.querySelector(r),
			readSnapshot: () => t,
			mount: (n) => e(n, i, { api: t })
		})),
		subscribe: (e) => {
			let t = ["sunoboom:poetry-stress-ready", "sunoboom:poetry-stress-closed"];
			for (let n of t) window.addEventListener(n, e);
			return () => {
				for (let n of t) window.removeEventListener(n, e);
			};
		}
	});
}
// src/vue/poetry/PerformanceTags.vue
var $k = { class: "sb-vt-field" }, eA = ["value"], tA = ["value"], nA = {
	class: "sb-vt-hint",
	id: "sb-vt-mode-hint"
}, rA = { class: "sb-vt-grid" }, iA = { class: "sb-vt-field" }, aA = ["value"], oA = ["value"], sA = { class: "sb-vt-field" }, cA = ["value"], lA = ["value"], uA = {
	key: 0,
	class: "sb-vt-field"
}, dA = ["value"], fA = ["value"], pA = { class: "sb-vt-intensity" }, mA = { class: "sb-vt-between" }, hA = { id: "sb-vt-intensity-label" }, gA = ["value"], _A = { class: "sb-vt-options" }, vA = ["data-vt-pref", "checked"], yA = {
	key: 1,
	class: "sb-vt-consent",
	id: "sb-vt-consent-row"
}, bA = { class: "sb-vt-buttons" }, xA = ["disabled"], SA = {
	id: "sb-vt-result",
	"aria-live": "polite"
}, CA = {
	key: 0,
	class: "sb-vt-draft"
}, wA = { class: "sb-vt-draft-head" }, TA = { class: "sb-vt-method" }, EA = { class: "sb-vt-section-list" }, DA = { class: "sb-vt-section-heading" }, OA = { class: "sb-vt-section-controls" }, kA = [
	"data-vt-preset",
	"value",
	"aria-label"
], AA = ["value"], jA = [
	"data-vt-cue",
	"value",
	"aria-label"
], MA = { class: "sb-vt-field" }, NA = ["value"], PA = {
	class: "sb-vt-small",
	id: "sb-vt-preview-state"
}, FA = {
	__name: "PerformanceTags",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ P(t.api.snapshot()), r = Z(), i = K(() => n.value?.prefs || {}), a = K(() => n.value?.draft || null), o = [
			["smart", "Интеллектуальный · Gemini"],
			["rules", "Автоматический · без API"],
			["manual", "Ручной · по секциям"]
		], s = [
			["minimal", "Минимально"],
			["balanced", "Сбалансированно"],
			["detailed", "Подробно"]
		], c = [
			["auto", "Авто: готовая Lyrics, если есть"],
			["original", "Оригинальный текст"],
			["tagged", "Готовая версия Lyrics"]
		], l = [
			["melisma", "Мелизмы"],
			["falsetto", "Фальцет"],
			["harmonies", "Гармонии"],
			["noWhisper", "Без шёпота"],
			["noRasp", "Без хрипотцы"]
		];
		function u() {
			let e = t.api.snapshot();
			e && (n.value = e, r.publishPerformanceTagsSummary(e));
		}
		return R(() => {
			r.publishPerformanceTagsSummary(n.value), window.addEventListener("sunoboom:tags-updated", u);
		}), Cr(() => {
			window.removeEventListener("sunoboom:tags-updated", u), r.clearPerformanceTagsSummary();
		}), (e, t) => (V(), H(B, null, [
			t[12] ||= U("div", { class: "sb-vt-header" }, [U("span", { class: "sb-vt-symbol" }, "🎭"), U("div", null, [U("h3", null, "Генератор тегов исполнения"), U("p", null, "Вокальная драматургия по секциям. Без изменения слов песни; результат можно проверить и применить только вручную.")])], -1),
			U("div", $k, [t[0] ||= U("label", { for: "sb-vt-mode" }, "Способ генерации", -1), U("select", {
				id: "sb-vt-mode",
				"data-vt-pref": "mode",
				value: i.value.mode
			}, [(V(), H(B, null, z(o, ([e, t]) => U("option", {
				key: e,
				value: e
			}, O(t), 9, tA)), 64))], 8, eA)]),
			U("p", nA, O(n.value.modeHint), 1),
			U("div", rA, [U("div", iA, [t[1] ||= U("label", { for: "sb-vt-source" }, "Источник текста", -1), U("select", {
				id: "sb-vt-source",
				"data-vt-pref": "source",
				value: i.value.source
			}, [(V(), H(B, null, z(c, ([e, t]) => U("option", {
				key: e,
				value: e
			}, O(t), 9, oA)), 64))], 8, aA)]), U("div", sA, [t[2] ||= U("label", { for: "sb-vt-density" }, "Детализация метатегов", -1), U("select", {
				id: "sb-vt-density",
				"data-vt-pref": "density",
				value: i.value.density
			}, [(V(), H(B, null, z(s, ([e, t]) => U("option", {
				key: e,
				value: e
			}, O(t), 9, lA)), 64))], 8, cA)])]),
			n.value.artists?.length ? (V(), H("div", uA, [t[4] ||= U("label", { for: "sb-vt-artist" }, "Учесть «ДНК артиста» (необязательно)", -1), U("select", {
				id: "sb-vt-artist",
				"data-vt-pref": "artistId",
				value: i.value.artistId
			}, [t[3] ||= U("option", { value: "" }, "Без привязки к артисту", -1), (V(!0), H(B, null, z(n.value.artists, (e) => (V(), H("option", {
				key: e.id,
				value: e.id
			}, O(e.name), 9, fA))), 128))], 8, dA)])) : G("", !0),
			U("div", pA, [
				U("div", mA, [t[5] ||= U("label", { for: "sb-vt-intensity" }, "Максимальная интенсивность исполнения", -1), U("strong", hA, O(i.value.intensity) + " / 5", 1)]),
				U("input", {
					type: "range",
					id: "sb-vt-intensity",
					min: "1",
					max: "5",
					step: "1",
					value: i.value.intensity,
					"data-vt-pref": "intensity"
				}, null, 8, gA),
				t[6] ||= U("div", { class: "sb-vt-between sb-vt-scale" }, [U("span", null, "Сдержанная"), U("span", null, "Экспрессивная")], -1)
			]),
			U("div", _A, [(V(), H(B, null, z(l, ([e, t]) => U("label", { key: e }, [U("input", {
				type: "checkbox",
				"data-vt-pref": e,
				checked: i.value[e]
			}, null, 8, vA), W(" " + O(t), 1)])), 64))]),
			n.value.hasEndpoint ? (V(), H("label", yA, [...t[7] ||= [U("input", {
				type: "checkbox",
				id: "sb-vt-consent"
			}, null, -1), W(" Разрешаю отправить выбранный текст песни на защищённый сервер для анализа Gemini. ", -1)]])) : G("", !0),
			U("div", bA, [U("button", {
				type: "button",
				class: "btn primary",
				"data-action": "vt-generate",
				disabled: n.value.busy
			}, "✨ Создать предпросмотр", 8, xA), t[8] ||= U("span", { class: "sb-vt-note" }, "Никакого автоматического применения к Lyrics.", -1)]),
			U("div", {
				id: "sb-vt-notice",
				class: D(["sb-vt-notice", n.value.notice?.kind]),
				role: "status",
				"aria-live": "polite"
			}, O(n.value.notice?.text), 3),
			U("div", SA, [a.value ? (V(), H("div", CA, [
				U("div", wA, [U("h4", null, "Предпросмотр · " + O(a.value.sections.length) + " секций", 1), U("span", TA, O(a.value.method), 1)]),
				t[10] ||= U("p", { class: "sb-vt-small" }, " Проверь каждую секцию. Теги можно выбрать из списка или переписать вручную. Оригинальные строки песни остаются неизменными. ", -1),
				U("div", EA, [(V(!0), H(B, null, z(a.value.sections, (e, t) => (V(), H("div", {
					key: e.id,
					class: "sb-vt-section"
				}, [U("div", DA, [U("strong", null, O(e.label), 1), U("span", null, O(t + 1) + "/" + O(a.value.sections.length), 1)]), U("div", OA, [U("select", {
					"data-vt-preset": t,
					value: a.value.tags[t],
					"aria-label": "Готовые теги для " + e.label
				}, [(V(!0), H(B, null, z(n.value.presets, ([e, t]) => (V(), H("option", {
					key: e,
					value: e
				}, O(t), 9, AA))), 128))], 8, kA), U("input", {
					"data-vt-cue": t,
					value: a.value.tags[t],
					maxlength: "165",
					placeholder: "Например: Warm Emotional Vocals",
					"aria-label": "Тег исполнения " + e.label
				}, null, 8, jA)])]))), 128))]),
				U("div", MA, [t[9] ||= U("label", { for: "sb-vt-preview" }, " Готовый Lyrics — разрешено редактировать только инструкции, не слова песни ", -1), U("textarea", {
					id: "sb-vt-preview",
					spellcheck: "false",
					rows: "13",
					maxlength: "25000",
					value: a.value.preview
				}, null, 8, NA)]),
				U("p", PA, O(n.value.previewState), 1),
				t[11] ||= fa("<div class=\"sb-vt-draft-actions\"><button type=\"button\" class=\"btn primary\" data-action=\"vt-apply\"> ✓ Применить к Lyrics </button><button type=\"button\" class=\"btn ghost\" data-action=\"vt-copy\"> Копировать предпросмотр </button><button type=\"button\" class=\"btn ghost\" data-action=\"vt-refresh\"> Обновить предпросмотр </button><button type=\"button\" class=\"btn ghost\" data-action=\"vt-cancel\"> Отменить </button></div>", 1)
			])) : G("", !0)])
		], 64));
	}
};
// src/vue/poetry/legacyTagsBridge.js
function IA({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_TAGS, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Q({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vt-workbench"),
		readSnapshot: () => t.snapshot(),
		mount: (n) => e(n, FA, { api: t })
	});
}
// src/vue/entry.js
var LA = vs(), RA = Z(LA);
function zA(e) {
	return typeof document > "u" ? null : typeof e == "string" ? document.querySelector(e) : e;
}
var { mountVueFeature: $, unmountVueFeature: BA } = e({
	createApp: Zo,
	host: Gx,
	pinia: LA,
	router: Pl,
	resolveTarget: zA
});
function VA() {
	return Wx({ sharedUi: RA });
}
function HA() {
	return sS({
		mountVueFeature: $,
		unmountVueFeature: BA,
		sharedUi: RA
	});
}
function UA() {
	return bS({ mountVueFeature: $ });
}
function WA() {
	return oC({ mountVueFeature: $ });
}
function GA() {
	return ET({ mountVueFeature: $ });
}
function KA() {
	return gE({ mountVueFeature: $ });
}
function qA() {
	return dD({ mountVueFeature: $ });
}
function JA() {
	return LD({ mountVueFeature: $ });
}
function YA() {
	return Ok({ mountVueFeature: $ });
}
function XA() {
	return Qk({ mountVueFeature: $ });
}
function ZA() {
	return IA({ mountVueFeature: $ });
}
function QA() {
	return Ux({ mountVueFeature: $ });
}
function $A() {
	return _d({ mountVueFeature: $ });
}
function ej() {
	return lp({ mountVueFeature: $ });
}
function tj() {
	return tp({ mountVueFeature: $ });
}
function nj() {
	return Qp({ mountVueFeature: $ });
}
function rj() {
	return fm({ mountVueFeature: $ });
}
function ij() {
	return ch({ mountVueFeature: $ });
}
function aj() {
	return Wh({ mountVueFeature: $ });
}
function oj() {
	return Qh({ mountVueFeature: $ });
}
function sj() {
	return Tg({ mountVueFeature: $ });
}
function cj() {
	return $g({ mountVueFeature: $ });
}
function lj() {
	return x_({ mountVueFeature: $ });
}
function uj() {
	return sv({ mountVueFeature: $ });
}
function dj() {
	return ry({ mountVueFeature: $ });
}
function fj() {
	return dy({ mountVueFeature: $ });
}
function pj() {
	return Zy({ mountVueFeature: $ });
}
function mj() {
	return ab({ mountVueFeature: $ });
}
function hj() {
	return Fb({ mountVueFeature: $ });
}
function gj() {
	return ux({ mountVueFeature: $ });
}
function _j() {
	return nf({ mountVueFeature: $ });
}
function vj() {
	return Bf({
		mountVueFeature: $,
		sharedUi: RA
	});
}
function yj() {
	return YC({ mountVueFeature: $ });
}
export { $ as mountVueFeature, WA as startLegacyAcademy, lj as startLegacyAccountSettings, VA as startLegacyAppearance, YA as startLegacyArranger, sj as startLegacyArtistDNA, cj as startLegacyArtistDNAEditor, oj as startLegacyArtistManager, JA as startLegacyAuditor, GA as startLegacyGenreDetail, yj as startLegacyGenreTree, vj as startLegacyHomeDashboard, $A as startLegacyIdeaCollections, QA as startLegacyIdeaEditor, nj as startLegacyLibrary, qA as startLegacyMixer, HA as startLegacyNavigation, dj as startLegacyPlayerAB, uj as startLegacyPlayerLab, XA as startLegacyPoetry, pj as startLegacyProducerSongDetail, fj as startLegacyProducerSongList, tj as startLegacyPromptCollection, ej as startLegacyPromptEditor, rj as startLegacySongCards, ij as startLegacySongDetail, aj as startLegacySongEditor, KA as startLegacyStudio, ZA as startLegacyTags, UA as startLegacyTopHeader, hj as startLegacyTrackPassportDetail, gj as startLegacyTrackPassportEditor, mj as startLegacyTrackPassportList, _j as startLegacyVersionHistory, BA as unmountVueFeature };
