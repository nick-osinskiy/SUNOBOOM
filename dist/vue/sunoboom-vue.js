// node_modules/@vue/shared/dist/shared.esm-bundler.js
// @__NO_SIDE_EFFECTS__
function e(e) {
	let t = /* @__PURE__ */ Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var t = {}, n = [], r = () => {}, i = () => !1, a = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), o = (e) => e.startsWith("onUpdate:"), s = Object.assign, c = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, l = Object.prototype.hasOwnProperty, u = (e, t) => l.call(e, t), d = Array.isArray, f = (e) => x(e) === "[object Map]", p = (e) => x(e) === "[object Set]", m = (e) => x(e) === "[object Date]", h = (e) => typeof e == "function", g = (e) => typeof e == "string", _ = (e) => typeof e == "symbol", v = (e) => typeof e == "object" && !!e, y = (e) => (v(e) || h(e)) && h(e.then) && h(e.catch), b = Object.prototype.toString, x = (e) => b.call(e), ee = (e) => x(e).slice(8, -1), S = (e) => x(e) === "[object Object]", C = (e) => g(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, te = /* @__PURE__ */ e(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), ne = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, re = /-\w/g, w = /* @__PURE__ */ ne((e) => e.replace(re, (e) => e.slice(1).toUpperCase())), ie = /\B([A-Z])/g, ae = /* @__PURE__ */ ne((e) => e.replace(ie, "-$1").toLowerCase()), T = /* @__PURE__ */ ne((e) => e.charAt(0).toUpperCase() + e.slice(1)), oe = /* @__PURE__ */ ne((e) => e ? `on${T(e)}` : ""), se = (e, t) => !Object.is(e, t), ce = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, le = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, ue = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, de, fe = () => de ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function E(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = g(r) ? ge(r) : E(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	}
	if (g(e) || v(e)) return e;
}
var pe = /;(?![^(]*\))/g, me = /:([^]+)/, he = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function ge(e) {
	let t = {};
	return e.replace(he, (e) => e.startsWith("/*") ? "" : e).split(pe).forEach((e) => {
		if (e) {
			let n = e.split(me);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function D(e) {
	let t = "";
	if (g(e)) t = e;
	else if (d(e)) for (let n = 0; n < e.length; n++) {
		let r = D(e[n]);
		r && (t += r + " ");
	}
	else if (v(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
function _e(e) {
	if (!e) return null;
	let { class: t, style: n } = e;
	return t && !g(t) && (e.class = D(t)), n && (e.style = E(n)), e;
}
var ve = /* @__PURE__ */ e("itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly");
function ye(e) {
	return !!e || e === "";
}
function be(e, t, n) {
	if (e.length !== t.length) return !1;
	let r = !0;
	for (let i = 0; r && i < e.length; i++) r = we(e[i], t[i], n);
	return r;
}
function xe(e, t, n) {
	if (e.size !== t.size) return !1;
	let r = Array.from(t), i = new Uint8Array(r.length);
	for (let t of e) {
		let e = -1;
		for (let a = 0; a < r.length; a++) if (!i[a] && we(t, r[a], n)) {
			e = a;
			break;
		}
		if (e < 0) return !1;
		i[e] = 1;
	}
	return !0;
}
function Se(e, t, n) {
	let r = f(e), i = f(t);
	if (r || i || (r = p(e), i = p(t), r || i)) return r && i ? xe(e, t, n) : !1;
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let r in e) {
		let i = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
		if (i && !a || !i && a || !we(e[r], t[r], n)) return !1;
	}
	return String(e) === String(t);
}
function Ce(e, t, n, r) {
	n ||= [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()];
	let [i, a] = n;
	if (i.has(e) || a.has(t)) return i.get(e) === t && a.get(t) === e;
	i.set(e, t), a.set(t, e);
	let o = r(e, t, n);
	return i.delete(e), a.delete(t), o;
}
function we(e, t, n) {
	if (e === t) return !0;
	let r = m(e), i = m(t);
	return r || i ? r && i ? e.getTime() === t.getTime() : !1 : (r = _(e), i = _(t), r || i ? e === t : (r = d(e), i = d(t), r || i ? r && i ? Ce(e, t, n, be) : !1 : (r = v(e), i = v(t), r || i ? !r || !i ? !1 : Ce(e, t, n, Se) : String(e) === String(t))));
}
function Te(e, t) {
	return e.findIndex((e) => we(e, t));
}
var Ee = (e) => !!(e && e.__v_isRef === !0), O = (e) => g(e) ? e : e == null ? "" : d(e) || v(e) && (e.toString === b || !h(e.toString)) ? Ee(e) ? O(e.value) : JSON.stringify(e, De, 2) : String(e), De = (e, t) => Ee(t) ? De(e, t.value) : f(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Oe(t, r) + " =>"] = n, e), {}) } : p(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Oe(e)) } : _(t) ? Oe(t) : v(t) && !d(t) && !S(t) ? String(t) : t, Oe = (e, t = "") => _(e) ? `Symbol(${e.description ?? t})` : e, ke, Ae = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && ke && (ke.active ? (this.parent = ke, this.index = (ke.scopes || (ke.scopes = [])).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
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
			let t = ke;
			try {
				return ke = this, e();
			} finally {
				ke = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = ke, ke = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (ke === this) ke = this.prevScope;
			else {
				let e = ke;
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
	return ke;
}
function Ne(e, t = !1) {
	ke && (ke.active ? ke.cleanups.push(e) : e());
}
var k, Pe = /* @__PURE__ */ new WeakSet(), Fe = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ke && (ke.active ? ke.effects.push(this) : this.flags &= -2);
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
		let e = k, t = Je;
		k = this, Je = !0;
		try {
			return this.fn();
		} finally {
			Ue(this), k = e, Je = t, this.flags &= -3;
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
	let t = e.dep, n = k, r = Je;
	k = e, Je = !0;
	try {
		He(e);
		let n = e.fn(e._value);
		(t.version === 0 || se(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		k = n, Je = r, Ue(e), e.flags &= -3;
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
		let e = k;
		k = void 0;
		try {
			t();
		} finally {
			k = e;
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
		if (!k || !Je || k === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== k) t = this.activeLink = new et(k, this), k.deps ? (t.prevDep = k.depsTail, k.depsTail.nextDep = t, k.depsTail = t) : k.deps = k.depsTail = t, nt(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = k.depsTail, t.nextDep = void 0, k.depsTail.nextDep = t, k.depsTail = t, k.deps === t && (k.deps = e);
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
	if (Je && k) {
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
		let i = d(e), a = i && C(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === ot || !_(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(ot)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(it)), f(e) && s(o.get(at)));
				break;
			case "delete":
				i || (s(o.get(it)), f(e) && s(o.get(at)));
				break;
			case "set": f(e) && s(o.get(it));
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
	return t === e || (st(t, "iterate", ot), /* @__PURE__ */ Yt(e)) ? t : /* @__PURE__ */ Jt(e) ? /* @__PURE__ */ qt(e) ? t.map((e) => $t(Qt(e))) : t.map($t) : t.map(Qt);
}
function dt(e) {
	return st(e = /* @__PURE__ */ j(e), "iterate", ot), e;
}
function ft(e, t) {
	return /* @__PURE__ */ Jt(e) ? $t(/* @__PURE__ */ qt(e) ? Qt(t) : t) : Qt(t);
}
var pt = {
	__proto__: null,
	[Symbol.iterator]() {
		return mt(this, Symbol.iterator, (e) => ft(this, e));
	},
	concat(...e) {
		return ut(this).concat(...e.map((e) => d(e) ? ut(e) : e));
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
	if (r !== e && !/* @__PURE__ */ Yt(e)) {
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
	let o = dt(e), s = o !== e && !/* @__PURE__ */ Yt(e), c = o[t];
	if (c !== gt[t]) {
		let t = c.apply(e, a);
		return s ? Qt(t) : t;
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
	let i = dt(e), a = i !== e && !/* @__PURE__ */ Yt(e), o = n, s = !1;
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
	return (i === -1 || i === !1) && /* @__PURE__ */ Xt(n[0]) ? (n[0] = /* @__PURE__ */ j(n[0]), r[t](...n)) : i;
}
function bt(e, t, n = []) {
	Xe(), Be();
	let r = (/* @__PURE__ */ j(e))[t].apply(e, n);
	return Ve(), Ze(), r;
}
var xt = /* @__PURE__ */ e("__proto__,__v_isRef,__isVue"), St = /* @__PURE__ */ new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_));
function Ct(e) {
	_(e) || (e = String(e));
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
		let a = d(e);
		if (!r) {
			let e;
			if (a && (e = pt[t])) return e;
			if (t === "hasOwnProperty") return Ct;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ M(e) ? e : n);
		if ((_(t) ? St.has(t) : xt(t)) || (r || st(e, "get", t), i)) return o;
		if (/* @__PURE__ */ M(o)) {
			let e = a && C(t) ? o : o.value;
			return r && v(e) ? /* @__PURE__ */ Gt(e) : e;
		}
		return v(o) ? r ? /* @__PURE__ */ Gt(o) : /* @__PURE__ */ A(o) : o;
	}
}, Tt = class extends wt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = d(e) && C(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Jt(i);
			if (!/* @__PURE__ */ Yt(n) && !/* @__PURE__ */ Jt(n) && (i = /* @__PURE__ */ j(i), n = /* @__PURE__ */ j(n)), !a && /* @__PURE__ */ M(i) && !/* @__PURE__ */ M(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : u(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ M(e) ? e : r);
		return e === /* @__PURE__ */ j(r) && s && (o ? se(n, i) && ct(e, "set", t, n, i) : ct(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = u(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && ct(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return _(t) && St.has(t) || st(e, "has", t), n;
	}
	ownKeys(e) {
		return st(e, "iterate", d(e) ? "length" : it), Reflect.ownKeys(e);
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
		let i = this.__v_raw, a = /* @__PURE__ */ j(i), o = f(a), c = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = i[e](...r), d = n ? At : t ? $t : Qt;
		return !t && st(a, "iterate", l ? at : it), s(Object.create(u), { next() {
			let { value: e, done: t } = u.next();
			return t ? {
				value: e,
				done: t
			} : {
				value: c ? [d(e[0]), d(e[1])] : d(e),
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
			e || (se(n, a) && st(i, "get", n), st(i, "get", a));
			let { has: o } = jt(i), s = t ? At : e ? $t : Qt;
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
			return e || (se(t, i) && st(r, "has", t), st(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ j(a), s = t ? At : e ? $t : Qt;
			return !e && st(o, "iterate", it), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return s(n, e ? {
		add: Nt("add"),
		set: Nt("set"),
		delete: Nt("delete"),
		clear: Nt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ j(this), r = jt(n), i = /* @__PURE__ */ j(e), a = !t && !/* @__PURE__ */ Yt(e) && !/* @__PURE__ */ Jt(e) ? i : e;
			return r.has.call(n, a) || se(e, a) && r.has.call(n, e) || se(i, a) && r.has.call(n, i) || (n.add(a), ct(n, "add", a, a)), this;
		},
		set(e, n) {
			t || /* @__PURE__ */ Yt(n) || /* @__PURE__ */ Jt(n) || (n = /* @__PURE__ */ j(n));
			let r = /* @__PURE__ */ j(this), { has: i, get: a } = jt(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ j(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? se(n, s) && ct(r, "set", e, n, s) : ct(r, "add", e, n), this;
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
	return (r, i, a) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_isShallow" ? t : i === "__v_raw" ? r : Reflect.get(u(n, i) && i in r ? n : r, i, a);
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
function A(e) {
	return /* @__PURE__ */ Jt(e) ? e : Kt(e, !1, Dt, It, zt);
}
// @__NO_SIDE_EFFECTS__
function Wt(e) {
	return Kt(e, !1, kt, Lt, Bt);
}
// @__NO_SIDE_EFFECTS__
function Gt(e) {
	return Kt(e, !0, Ot, Rt, Vt);
}
function Kt(e, t, n, r, i) {
	if (!v(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Ut(ee(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function qt(e) {
	return /* @__PURE__ */ Jt(e) ? /* @__PURE__ */ qt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Jt(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Yt(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Xt(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function j(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ j(t) : e;
}
function Zt(e) {
	return !u(e, "__v_skip") && Object.isExtensible(e) && le(e, "__v_skip", !0), e;
}
var Qt = (e) => v(e) ? /* @__PURE__ */ A(e) : e, $t = (e) => v(e) ? /* @__PURE__ */ Gt(e) : e;
// @__NO_SIDE_EFFECTS__
function M(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function N(e) {
	return en(e, !1);
}
// @__NO_SIDE_EFFECTS__
function P(e) {
	return en(e, !0);
}
function en(e, t) {
	return /* @__PURE__ */ M(e) ? e : new tn(e, t);
}
var tn = class {
	constructor(e, t) {
		this.dep = new tt(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ j(e), this._value = t ? e : Qt(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Yt(e) || /* @__PURE__ */ Jt(e);
		e = n ? e : /* @__PURE__ */ j(e), se(e, t) && (this._rawValue = e, this._value = n ? e : Qt(e), this.dep.trigger());
	}
};
function F(e) {
	return /* @__PURE__ */ M(e) ? e.value : e;
}
var nn = {
	get: (e, t, n) => t === "__v_raw" ? e : F(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ M(i) && !/* @__PURE__ */ M(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function rn(e) {
	return /* @__PURE__ */ qt(e) ? e : new Proxy(e, nn);
}
// @__NO_SIDE_EFFECTS__
function an(e) {
	let t = d(e) ? Array(e.length) : {};
	for (let n in e) t[n] = sn(e, n);
	return t;
}
var on = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = _(t) ? t : String(t), this._raw = /* @__PURE__ */ j(e);
		let r = !0, i = e;
		if (!d(e) || _(this._key) || !C(this._key)) do
			r = !/* @__PURE__ */ Xt(i) || /* @__PURE__ */ Yt(i);
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
function sn(e, t, n) {
	return new on(e, t, n);
}
var cn = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new tt(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = $e - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && k !== this) return ze(this, !0), !0;
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
function ln(e, t, n = !1) {
	let r, i;
	return h(e) ? r = e : (r = e.get, i = e.set), new cn(r, i, n);
}
var un = {}, dn = /* @__PURE__ */ new WeakMap(), fn = void 0;
function pn(e, t = !1, n = fn) {
	if (n) {
		let t = dn.get(n);
		t || dn.set(n, t = []), t.push(e);
	}
}
function mn(e, n, i = t) {
	let { immediate: a, deep: o, once: s, scheduler: l, augmentJob: u, call: f } = i, p = (e) => o ? e : /* @__PURE__ */ Yt(e) || o === !1 || o === 0 ? hn(e, 1) : hn(e), m, g, _, v, y = !1, b = !1;
	if (/* @__PURE__ */ M(e) ? (g = () => e.value, y = /* @__PURE__ */ Yt(e)) : /* @__PURE__ */ qt(e) ? (g = () => p(e), y = !0) : d(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ qt(e) || /* @__PURE__ */ Yt(e)), g = () => e.map((e) => {
		if (/* @__PURE__ */ M(e)) return e.value;
		if (/* @__PURE__ */ qt(e)) return p(e);
		if (h(e)) return f ? f(e, 2) : e();
	})) : g = h(e) ? n ? f ? () => f(e, 2) : e : () => {
		if (_) {
			Xe();
			try {
				_();
			} finally {
				Ze();
			}
		}
		let t = fn;
		fn = m;
		try {
			return f ? f(e, 3, [v]) : e(v);
		} finally {
			fn = t;
		}
	} : r, n && o) {
		let e = g, t = o === !0 ? Infinity : o;
		g = () => hn(e(), t);
	}
	let x = Me(), ee = () => {
		m.stop(), x && x.active && c(x.effects, m);
	};
	if (s && n) {
		let e = n;
		n = (...t) => {
			try {
				return e(...t);
			} finally {
				ee();
			}
		};
	}
	let S = b ? Array(e.length).fill(un) : un, C = (e) => {
		if (m.flags & 1 && (m.dirty || e)) {
			if (n) {
				let t = m.run();
				if (e || o || y || (b ? t.some((e, t) => se(e, S[t])) : se(t, S))) {
					let e = fn;
					Xe();
					try {
						_ && _(), fn = m;
						let e = [
							t,
							S === un ? void 0 : b && S[0] === un ? [] : S,
							v
						];
						S = t, f ? f(n, 3, e) : n(...e);
					} finally {
						fn = e, Ze();
					}
				}
			} else m.run();
		}
	};
	return u && u(C), m = new Fe(g), m.scheduler = l ? () => l(C, !1) : C, v = (e) => pn(e, !1, m), _ = m.onStop = () => {
		let e = dn.get(m);
		if (e) {
			if (f) f(e, 4);
			else for (let t of e) t();
			dn.delete(m);
		}
	}, n ? a ? C(!0) : S = m.run() : l ? l(C.bind(null, !0), !0) : m.run(), ee.pause = m.pause.bind(m), ee.resume = m.resume.bind(m), ee.stop = ee, ee;
}
function hn(e, t = Infinity, n) {
	if (t <= 0 || !v(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ M(e)) hn(e.value, t, n);
	else if (d(e)) for (let r = 0; r < e.length; r++) hn(e[r], t, n);
	else if (p(e) || f(e)) e.forEach((e) => {
		hn(e, t, n);
	});
	else if (S(e)) {
		for (let r in e) hn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && hn(e[r], t, n);
	}
	return e;
}
// node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function gn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		vn(e, t, n);
	}
}
function _n(e, t, n, r) {
	if (h(e)) {
		let i = gn(e, t, n, r);
		return i && y(i) && i.catch((e) => {
			vn(e, t, n, void 0, !0);
		}), i;
	}
	if (d(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(_n(e[a], t, n, r));
		return i;
	}
}
function vn(e, n, r, i = !0, a = !1) {
	let o = n ? n.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: c } = n && n.appContext.config || t;
	if (n) {
		let t = n.parent, i = n.proxy, o = `https://vuejs.org/error-reference/#runtime-${r}`;
		for (; t;) {
			let n = t.ec;
			if (n && !t.isUnmounted && (!a || t.scope.active)) {
				for (let t = 0; t < n.length; t++) if (n[t](e, i, o) === !1) return;
			}
			t = t.parent;
		}
		if (s) {
			Xe(), gn(s, null, 10, [
				e,
				i,
				o
			]), Ze();
			return;
		}
	}
	yn(e, r, o, i, c);
}
function yn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var bn = [], xn = -1, Sn = [], Cn = null, wn = 0, Tn = /* @__PURE__ */ Promise.resolve(), En = null;
function Dn(e) {
	let t = En || Tn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function On(e) {
	let t = xn + 1, n = bn.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = bn[r], a = In(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function kn(e) {
	if (!(e.flags & 1)) {
		let t = In(e), n = bn[bn.length - 1];
		!n || !(e.flags & 2) && t >= In(n) ? bn.push(e) : bn.splice(On(t), 0, e), e.flags |= 1, An();
	}
}
function An() {
	En ||= Tn.then(Ln);
}
function jn(e) {
	if (!d(e)) Cn && e.id === -1 ? Cn.splice(wn + 1, 0, e) : e.flags & 1 || (Sn.push(e), e.flags |= 1);
	else for (let t = 0; t < e.length; t++) Sn.push(e[t]);
	An();
}
function Mn(e, t, n, r = xn + 1) {
	for (; r < bn.length; r++) {
		let n = bn[r];
		if (n && n.flags & 2) {
			if (e && n.id !== e.uid || t !== void 0 && !(n.id >= t)) continue;
			bn.splice(r, 1), r = e ? r - 1 : xn, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
		}
	}
}
function Nn(e, t, n = 0) {
	if (Sn.length) {
		let e = Sn, r = 0;
		if (t) {
			e = [];
			for (let i = 0; i < Sn.length; i++) {
				let a = Sn[i];
				(a.i === void 0 ? t.has(a) : !a.i || a.i.uid < n) ? Sn[r++] = a : e.push(a);
			}
		}
		let i = [...new Set(e)].sort((e, t) => In(e) - In(t));
		if (Sn.length = r, Cn) {
			for (let e = 0; e < i.length; e++) Cn.push(i[e]);
			return;
		}
		for (Cn = i, wn = 0; wn < Cn.length; wn++) {
			let e = Cn[wn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		Cn = null, wn = 0;
	}
}
var Pn = !1;
function Fn(e, t) {
	if (Pn) {
		e();
		return;
	}
	let n = t === void 0 ? void 0 : new Set(Sn);
	e(), Pn = !0;
	try {
		Mn(void 0, t), Nn(void 0, n, t);
	} finally {
		Pn = !1;
	}
}
var In = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function Ln(e) {
	try {
		for (xn = 0; xn < bn.length; xn++) {
			let e = bn[xn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), gn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; xn < bn.length; xn++) {
			let e = bn[xn];
			e && (e.flags &= -2);
		}
		xn = -1, bn.length = 0, Nn(e), En = null, (bn.length || Sn.length) && Ln(e);
	}
}
var Rn = null, zn = null;
function Bn(e) {
	let t = Rn;
	return Rn = e, zn = e && e.type.__scopeId || null, t;
}
function Vn(e, t = Rn, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && ea(-1);
		let i = Bn(t), a = Xi.length, o;
		try {
			o = e(...n);
		} finally {
			for (let e = Xi.length; e > a; e--) Qi();
			Bn(i), r._d && ea(1);
		}
		return o;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function I(e, n) {
	if (Rn === null) return e;
	let r = Ia(Rn), i = e.dirs ||= [];
	for (let e = 0; e < n.length; e++) {
		let [a, o, s, c = t] = n[e];
		a && (h(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && hn(o), i.push({
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
function Hn(e, t, n, r) {
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
	for (let c = 0; c < a.length; c++) {
		let l = a[c];
		o ? l.oldValue = o[c].value : r === "mounted" && l.oldValue !== void 0 && (l = s({}, l, { oldValue: void 0 }));
		let u = l.dir[r];
		u && (Xe(), _n(u, n, 8, [
			e.el,
			l,
			i,
			t
		]), Ze());
	}
}
function Un(e, t) {
	if (xa) {
		let n = xa.provides, r = xa.parent && xa.parent.provides;
		r === n && (n = xa.provides = Object.create(r)), n[e] = t;
	}
}
function Wn(e, t, n = !1) {
	let r = Sa();
	if (r || ti) {
		let i = ti ? ti._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && h(t) ? t.call(r && r.proxy) : t;
	}
}
function Gn() {
	return !!(Sa() || ti);
}
var Kn = /* @__PURE__ */ Symbol.for("v-scx"), qn = () => Wn(Kn);
function L(e, t, n) {
	return Jn(e, t, n);
}
function Jn(e, n, i = t) {
	let { immediate: a, deep: o, flush: c, once: l } = i, u = s({}, i), d = n && a || !n && c !== "post", f;
	if (Oa) {
		if (c === "sync") {
			let e = qn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = r, e.resume = r, e.pause = r, e;
		}
	}
	let p = xa;
	u.call = (e, t, n) => _n(e, p, t, n);
	let m = !1;
	c === "post" ? u.scheduler = (e) => {
		e.i = p, Ni(e, p && p.suspense);
	} : c !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : kn(e);
	}), u.augmentJob = (e) => {
		n && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = mn(e, n, u);
	return Oa && (f ? f.push(h) : d && h()), h;
}
function Yn(e, t, n) {
	let r = this.proxy, i = g(e) ? e.includes(".") ? Xn(r, e) : () => r[e] : e.bind(r, r), a;
	h(t) ? a = t : (a = t.handler, n = t);
	let o = Ta(this), s = Jn(i, a.bind(r), n);
	return o(), s;
}
function Xn(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Zn = /* @__PURE__ */ Symbol("_vte"), Qn = (e) => e.__isTeleport, $n = /* @__PURE__ */ Symbol("_leaveCb");
function er(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== Ji) {
			t = n;
			break;
		}
	}
	return t;
}
function tr(e) {
	if (!dr(e)) return Qn(e.type) && e.children ? er(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && h(n.default)) return n.default();
	}
}
function nr(e, t) {
	if (e.shapeFlag & 6 && e.component) {
		e.transition = t;
		let n = e.component.subTree;
		nr(Qn(n.type) && tr(n) || n, t);
	} else if (e.shapeFlag & 128) {
		let n = e.suspense;
		if (n) {
			let e = n.isHydrating ? n.pendingBranch : n.activeBranch;
			e && nr(e, t.clone(e));
		} else e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback);
	} else if (e.transition = t, e.type === B && d(e.children)) {
		let n = ci(e.children, !1);
		n && nr(n, t);
	}
}
function rr(e) {
	if (e.component) return rr(e.component.subTree);
	if (e.type === B) {
		let t = d(e.children) && ci(e.children, !1);
		return t ? rr(t) : void 0;
	}
	if (e.type !== Ji) return e;
}
// @__NO_SIDE_EFFECTS__
function ir(e, t) {
	return h(e) ? /* @__PURE__ */ s({ name: e.name }, t, { setup: e }) : e;
}
function ar(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function or(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var sr = /* @__PURE__ */ new WeakMap();
function cr(e, n, r, a, o = !1) {
	if (d(e)) {
		e.forEach((e, t) => cr(e, n && (d(n) ? n[t] : n), r, a, o));
		return;
	}
	if (ur(a) && !o) {
		a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && cr(e, n, r, a.component.subTree);
		return;
	}
	let s = a.shapeFlag & 4 ? Ia(a.component) : a.el, l = o ? null : s, { i: f, r: p } = e, m = n && n.r, _ = f.refs === t ? f.refs = {} : f.refs, v = f.setupState, y = /* @__PURE__ */ j(v), b = v === t ? i : (e) => !or(_, e) && u(y, e), x = (e, t) => !(t && or(_, t));
	if (m != null && m !== p) {
		if (lr(n), g(m)) _[m] = null, b(m) && (v[m] = null);
		else if (/* @__PURE__ */ M(m)) {
			let e = n;
			x(m, e.k) && (m.value = null), e.k && (_[e.k] = null);
		}
	}
	if (h(p)) gn(p, f, 12, [l, _]);
	else {
		let t = g(p), n = /* @__PURE__ */ M(p);
		if (t || n) {
			let i = () => {
				if (e.f) {
					let n = t ? b(p) ? v[p] : _[p] : x(p) || !e.k ? p.value : _[e.k];
					if (o) d(n) && c(n, s);
					else if (d(n)) n.includes(s) || n.push(s);
					else if (t) _[p] = [s], b(p) && (v[p] = _[p]);
					else {
						let t = [s];
						x(p, e.k) && (p.value = t), e.k && (_[e.k] = t);
					}
				} else t ? (_[p] = l, b(p) && (v[p] = l)) : n && (x(p, e.k) && (p.value = l), e.k && (_[e.k] = l));
			};
			if (l) {
				let t = () => {
					i(), sr.delete(e);
				};
				t.id = -1, sr.set(e, t), Ni(t, r);
			} else lr(e), i();
		}
	}
}
function lr(e) {
	let t = sr.get(e);
	t && (t.flags |= 8, sr.delete(e));
}
fe().requestIdleCallback, fe().cancelIdleCallback;
var ur = (e) => !!e.type.__asyncLoader, dr = (e) => e.type.__isKeepAlive;
function fr(e, t) {
	mr(e, "a", t);
}
function pr(e, t) {
	mr(e, "da", t);
}
function mr(e, t, n = xa) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (gr(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) dr(e.parent.vnode) && hr(r, t, n, e), e = e.parent;
	}
}
function hr(e, t, n, r) {
	let i = gr(t, e, r, !0), a = gr("um", () => c(r[t], i), n);
	a.flags = 16;
}
function gr(e, t, n = xa, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Xe();
			let i = Ta(n), a = _n(t, n, e, r);
			return i(), Ze(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var _r = (e) => (t, n = xa) => {
	Oa && e !== "sp" || gr(e, (...e) => t(...e), n);
}, vr = _r("bm"), R = _r("m"), yr = _r("bu"), br = _r("u"), xr = _r("bum"), Sr = _r("um"), Cr = _r("sp"), wr = _r("rtg"), Tr = _r("rtc");
function Er(e, t = xa) {
	gr("ec", e, t);
}
var Dr = "components", Or = /* @__PURE__ */ Symbol.for("v-ndc");
function kr(e) {
	return g(e) ? Ar(Dr, e, !1) || e : e || Or;
}
function Ar(e, t, n = !0, r = !1) {
	let i = Rn || xa;
	if (i) {
		let n = i.type;
		if (e === Dr) {
			let e = La(n, !1);
			if (e && (e === t || e === w(t) || e === T(w(t)))) return n;
		}
		let a = jr(i[e] || n[e], t) || jr(i.appContext[e], t);
		return !a && r ? n : a;
	}
}
function jr(e, t) {
	return e && (e[t] || e[w(t)] || e[T(w(t))]);
}
function z(e, t, n, r) {
	let i, a = n && n[r], o = d(e);
	if (o || g(e)) {
		let n = o && /* @__PURE__ */ qt(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ Yt(e), s = /* @__PURE__ */ Jt(e), e = dt(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? $t(Qt(e[n])) : Qt(e[n]) : e[n], n, void 0, a && a[n]);
	} else if (typeof e == "number") {
		if (!Number.isInteger(e) || e < 0) i = [];
		else {
			i = Array(e);
			for (let n = 0; n < e; n++) i[n] = t(n + 1, n, void 0, a && a[n]);
		}
	} else if (v(e)) {
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
var Mr = (e) => e ? Da(e) ? Ia(e) : Mr(e.parent) : null, Nr = /* @__PURE__ */ s(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => Mr(e.parent),
	$root: (e) => Mr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Hr(e),
	$forceUpdate: (e) => e.f ||= () => {
		kn(e.update);
	},
	$nextTick: (e) => e.n ||= Dn.bind(e.proxy),
	$watch: (e) => Yn.bind(e)
}), Pr = (e, n) => e !== t && !e.__isScriptSetup && u(e, n), Fr = {
	get({ _: e }, n) {
		if (n === "__v_skip") return !0;
		let { ctx: r, setupState: i, data: a, props: o, accessCache: s, type: c, appContext: l } = e;
		if (n[0] !== "$") {
			let e = s[n];
			if (e !== void 0) switch (e) {
				case 1: return i[n];
				case 2: return a[n];
				case 4: return r[n];
				case 3: return o[n];
			}
			else if (Pr(i, n)) return s[n] = 1, i[n];
			else if (a !== t && u(a, n)) return s[n] = 2, a[n];
			else if (u(o, n)) return s[n] = 3, o[n];
			else if (r !== t && u(r, n)) return s[n] = 4, r[n];
			else Lr && (s[n] = 0);
		}
		let d = Nr[n], f, p;
		if (d) return n === "$attrs" && st(e.attrs, "get", ""), d(e);
		if ((f = c.__cssModules) && (f = f[n])) return f;
		if (r !== t && u(r, n)) return s[n] = 4, r[n];
		if (p = l.config.globalProperties, u(p, n)) return p[n];
	},
	set({ _: e }, n, r) {
		let { data: i, setupState: a, ctx: o } = e;
		return Pr(a, n) ? (a[n] = r, !0) : i !== t && u(i, n) ? (i[n] = r, !0) : u(e.props, n) || n[0] === "$" && n.slice(1) in e ? !1 : (o[n] = r, !0);
	},
	has({ _: { data: e, setupState: n, accessCache: r, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(r[c] || e !== t && c[0] !== "$" && u(e, c) || Pr(n, c) || u(o, c) || u(i, c) || u(Nr, c) || u(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? u(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function Ir(e) {
	return d(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var Lr = !0;
function Rr(e) {
	let t = Hr(e), n = e.proxy, i = e.ctx;
	Lr = !1, t.beforeCreate && Br(t.beforeCreate, e, "bc");
	let { data: a, computed: o, methods: s, watch: c, provide: l, inject: u, created: f, beforeMount: p, mounted: m, beforeUpdate: g, updated: _, activated: y, deactivated: b, beforeDestroy: x, beforeUnmount: ee, destroyed: S, unmounted: C, render: te, renderTracked: ne, renderTriggered: re, errorCaptured: w, serverPrefetch: ie, expose: ae, inheritAttrs: T, components: oe, directives: se, filters: ce } = t;
	if (u && zr(u, i, null), s) for (let e in s) {
		let t = s[e];
		h(t) && (i[e] = t.bind(n));
	}
	if (a) {
		let t = a.call(n, n);
		v(t) && (e.data = /* @__PURE__ */ A(t));
	}
	if (Lr = !0, o) for (let e in o) {
		let t = o[e], a = K({
			get: h(t) ? t.bind(n, n) : h(t.get) ? t.get.bind(n, n) : r,
			set: !h(t) && h(t.set) ? t.set.bind(n) : r
		});
		Object.defineProperty(i, e, {
			enumerable: !0,
			configurable: !0,
			get: () => a.value,
			set: (e) => a.value = e
		});
	}
	if (c) for (let e in c) Vr(c[e], i, n, e);
	if (l) {
		let e = h(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Un(t, e[t]);
		});
	}
	f && Br(f, e, "c");
	function le(e, t) {
		d(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (le(vr, p), le(R, m), le(yr, g), le(br, _), le(fr, y), le(pr, b), le(Er, w), le(Tr, ne), le(wr, re), le(xr, ee), le(Sr, C), le(Cr, ie), d(ae)) {
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
	te && e.render === r && (e.render = te), T != null && (e.inheritAttrs = T), oe && (e.components = oe), se && (e.directives = se), ie && ar(e);
}
function zr(e, t, n = r) {
	d(e) && (e = qr(e));
	for (let n in e) {
		let r = e[n], i;
		i = v(r) ? "default" in r ? Wn(r.from || n, r.default, !0) : Wn(r.from || n) : Wn(r), /* @__PURE__ */ M(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Br(e, t, n) {
	_n(d(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Vr(e, t, n, r) {
	let i = r.includes(".") ? Xn(n, r) : () => n[r];
	if (g(e)) {
		let n = t[e];
		h(n) && L(i, n);
	} else if (h(e)) L(i, e.bind(n));
	else if (v(e)) {
		if (d(e)) e.forEach((e) => Vr(e, t, n, r));
		else {
			let r = h(e.handler) ? e.handler.bind(n) : t[e.handler];
			h(r) && L(i, r, e);
		}
	}
}
function Hr(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => Ur(c, e, o, !0)), Ur(c, t, o)), v(t) && a.set(t, c), c;
}
function Ur(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && Ur(e, a, n, !0), i && i.forEach((t) => Ur(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = Wr[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var Wr = {
	data: Gr,
	props: Xr,
	emits: Xr,
	methods: Yr,
	computed: Yr,
	beforeCreate: Jr,
	created: Jr,
	beforeMount: Jr,
	mounted: Jr,
	beforeUpdate: Jr,
	updated: Jr,
	beforeDestroy: Jr,
	beforeUnmount: Jr,
	destroyed: Jr,
	unmounted: Jr,
	activated: Jr,
	deactivated: Jr,
	errorCaptured: Jr,
	serverPrefetch: Jr,
	components: Yr,
	directives: Yr,
	watch: Zr,
	provide: Gr,
	inject: Kr
};
function Gr(e, t) {
	return t ? e ? function() {
		return s(h(e) ? e.call(this, this) : e, h(t) ? t.call(this, this) : t);
	} : t : e;
}
function Kr(e, t) {
	return Yr(qr(e), qr(t));
}
function qr(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function Jr(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Yr(e, t) {
	return e ? s(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Xr(e, t) {
	return e ? d(e) && d(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : s(/* @__PURE__ */ Object.create(null), Ir(e), Ir(t ?? {})) : t;
}
function Zr(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = s(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = Jr(e[r], t[r]);
	return n;
}
function Qr() {
	return {
		app: null,
		config: {
			isNativeTag: i,
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
var $r = 0;
function ei(e, t) {
	return function(n, r = null) {
		h(n) || (n = s({}, n)), r != null && !v(r) && (r = null);
		let i = Qr(), a = /* @__PURE__ */ new WeakSet(), o = [], c = !1, l = i.app = {
			_uid: $r++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: Ba,
			get config() {
				return i.config;
			},
			set config(e) {},
			use(e, ...t) {
				return a.has(e) || (e && h(e.install) ? (a.add(e), e.install(l, ...t)) : h(e) && (a.add(e), e(l, ...t))), l;
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
			mount(a, o, s) {
				if (!c) {
					let u = l._ceVNode || sa(n, r);
					return u.appContext = i, s === !0 ? s = "svg" : s === !1 && (s = void 0), o && t ? t(u, a) : e(u, a, s), c = !0, l._container = a, a.__vue_app__ = l, Ia(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				c && (_n(o, l._instance, 16), e(null, l._container), delete l._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, l;
			},
			runWithContext(e) {
				let t = ti;
				ti = l;
				try {
					return e();
				} finally {
					ti = t;
				}
			}
		};
		return l;
	};
}
var ti = null, ni = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${w(t)}Modifiers`] || e[`${ae(t)}Modifiers`];
function ri(e, n, ...r) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || t, a = r, o = n.startsWith("update:"), s = o && ni(i, n.slice(7));
	s && (s.trim && (a = r.map((e) => g(e) ? e.trim() : e)), s.number && (a = a.map(ue)));
	let c, l = i[c = oe(n)] || i[c = oe(w(n))];
	!l && o && (l = i[c = oe(ae(n))]), l && _n(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, _n(u, e, 6, a);
	}
}
var ii = /* @__PURE__ */ new WeakMap();
function ai(e, t, n = !1) {
	let r = n ? ii : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, c = !1;
	if (!h(e)) {
		let r = (e) => {
			let n = ai(e, t, !0);
			n && (c = !0, s(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !c ? (v(e) && r.set(e, null), null) : (d(a) ? a.forEach((e) => o[e] = null) : s(o, a), v(e) && r.set(e, o), o);
}
function oi(e, t) {
	return !e || !a(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), u(e, t[0].toLowerCase() + t.slice(1)) || u(e, ae(t)) || u(e, t));
}
function si(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: s, attrs: c, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = Bn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = fa(u.call(t, e, d, f, m, p, h)), y = c;
		} else {
			let e = t;
			v = fa(e.length > 1 ? e(f, {
				attrs: c,
				slots: s,
				emit: l
			}) : e(f, null)), y = t.props ? c : li(c);
		}
	} catch (t) {
		Xi.length = 0, vn(t, e, 1), v = sa(Ji);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(o) && (y = ui(y, a)), b = ua(b, y, !1, !0));
	}
	return n.dirs && (b = ua(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && nr(Qn(b.type) && tr(b) || b, n.transition), v = b, Bn(_), v;
}
function ci(e, t = !0) {
	let n;
	for (let t = 0; t < e.length; t++) {
		let r = e[t];
		if (ra(r)) {
			if (r.type !== Ji || r.children === "v-if") {
				if (n) return;
				n = r;
			}
		} else return;
	}
	return n;
}
var li = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || a(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, ui = (e, t) => {
	let n = {};
	for (let r in e) o(r) && r.slice(9) in t || (n[r] = e[r]);
	return n;
};
function di(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? fi(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (pi(o, r, n) && !oi(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? !o || fi(r, o, l) : !!o;
	return !1;
}
function fi(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (!u(e, a) || pi(t, e, a) && !oi(n, a)) return !0;
	}
	return !1;
}
function pi(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && v(r) && v(i) ? !we(r, i) : r !== i;
}
function mi({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var hi = {}, gi = () => Object.create(hi), _i = (e) => Object.getPrototypeOf(e) === hi;
function vi(e, t, n, r = !1) {
	let i = {}, a = gi();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), bi(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	e.props = n ? r ? i : /* @__PURE__ */ Wt(i) : e.type.props ? i : a, e.attrs = a;
}
function yi(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ j(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (oi(e.emitsOptions, o)) continue;
				let d = t[o];
				if (c) {
					if (u(a, o)) d !== a[o] && (a[o] = d, l = !0);
					else {
						let t = w(o);
						i[t] = xi(c, s, t, d, e, !1);
					}
				} else d !== a[o] && (a[o] = d, l = !0);
			}
		}
	} else {
		bi(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) t && (u(t, a) || (r = ae(a)) !== a && u(t, r)) || (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = xi(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) t && u(t, e) || (delete a[e], l = !0);
	}
	l && ct(e.attrs, "set", "");
}
function bi(e, n, r, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (n) for (let t in n) {
		if (te(t)) continue;
		let l = n[t], d;
		a && u(a, d = w(t)) ? !o || !o.includes(d) ? r[d] = l : (c ||= {})[d] = l : oi(e.emitsOptions, t) || t in i && l === i[t] || (i[t] = l, s = !0);
	}
	if (o) {
		let n = /* @__PURE__ */ j(r), i = c || t;
		for (let t = 0; t < o.length; t++) {
			let s = o[t];
			r[s] = xi(a, n, s, i[s], e, !u(i, s));
		}
	}
	return s;
}
function xi(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = u(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && h(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = Ta(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === ae(n)) && (r = !0));
	}
	return r;
}
var Si = /* @__PURE__ */ new WeakMap();
function Ci(e, r, i = !1) {
	let a = i ? Si : r.propsCache, o = a.get(e);
	if (o) return o;
	let c = e.props, l = {}, f = [], p = !1;
	if (!h(e)) {
		let t = (e) => {
			p = !0;
			let [t, n] = Ci(e, r, !0);
			s(l, t), n && f.push(...n);
		};
		!i && r.mixins.length && r.mixins.forEach(t), e.extends && t(e.extends), e.mixins && e.mixins.forEach(t);
	}
	if (!c && !p) return v(e) && a.set(e, n), n;
	if (d(c)) for (let e = 0; e < c.length; e++) {
		let n = w(c[e]);
		wi(n) && (l[n] = t);
	}
	else if (c) for (let e in c) {
		let t = w(e);
		if (wi(t)) {
			let n = c[e], r = l[t] = d(n) || h(n) ? { type: n } : s({}, n), i = r.type, a = !1, o = !0;
			if (d(i)) for (let e = 0; e < i.length; ++e) {
				let t = i[e], n = h(t) && t.name;
				if (n === "Boolean") {
					a = !0;
					break;
				}
				n === "String" && (o = !1);
			}
			else a = h(i) && i.name === "Boolean";
			r[0] = a, r[1] = o, (a || u(r, "default")) && f.push(t);
		}
	}
	let m = [l, f];
	return v(e) && a.set(e, m), m;
}
function wi(e) {
	return e[0] !== "$" && !te(e);
}
var Ti = (e) => e === "_" || e === "_ctx" || e === "$stable", Ei = (e) => d(e) ? e.map(fa) : [fa(e)], Di = (e, t, n) => {
	if (t._n) return t;
	let r = Vn((...e) => Ei(t(...e)), n);
	return r._c = !1, r;
}, Oi = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (Ti(n)) continue;
		let i = e[n];
		if (h(i)) t[n] = Di(n, i, r);
		else if (i != null) {
			let e = Ei(i);
			t[n] = () => e;
		}
	}
}, ki = (e, t) => {
	let n = Ei(t);
	e.slots.default = () => n;
}, Ai = (e, t, n) => {
	for (let r in t) (n || !Ti(r)) && (e[r] = t[r]);
}, ji = (e, t, n) => {
	let r = e.slots = gi();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (Ai(r, t, n), n && le(r, "_", e, !0)) : Oi(t, r);
	} else t && ki(e, t);
}, Mi = (e, n, r) => {
	let { vnode: i, slots: a } = e, o = !0, s = t;
	if (i.shapeFlag & 32) {
		let e = n._;
		e ? r && e === 1 ? o = !1 : Ai(a, n, r) : (o = !n.$stable, Oi(n, a)), s = n;
	} else n && (ki(e, n), s = { default: 1 });
	if (o) for (let e in a) !Ti(e) && s[e] == null && delete a[e];
}, Ni = Ki;
function Pi(e) {
	return Fi(e);
}
function Fi(e, i) {
	let a = fe();
	a.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = r, insertStaticContent: _ } = e, v = (e, t, r, i = null, a = null, o = null, s = void 0, c = null, l = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !ia(e, t) && (i = xe(e), D(e, a, o, !0), e = null), t.patchFlag === -2 && (l = !1, t.dynamicChildren = null), t.dynamicChildren && e && e.dynamicChildren && e.dynamicChildren.hasOnce && (t.dynamicChildren === n && (t.dynamicChildren = []), t.dynamicChildren.hasOnce = !0);
		let { type: u, ref: d, shapeFlag: f } = t;
		switch (u) {
			case qi:
				y(e, t, r, i);
				break;
			case Ji:
				b(e, t, r, i);
				break;
			case Yi:
				e ?? x(t, r, i, s);
				break;
			case B:
				oe(e, t, r, i, a, o, s, c, l);
				break;
			default: f & 1 ? C(e, t, r, i, a, o, s, c, l) : f & 6 ? se(e, t, r, i, a, o, s, c, l) : (f & 64 || f & 128) && u.process(e, t, r, i, a, o, s, c, l, Ce);
		}
		d != null && a ? cr(d, e && e.ref, o, t || e, !t) : d == null && e && e.ref != null && cr(e.ref, null, o, e, !0);
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
	}, ee = ({ el: e, anchor: t }, n, r) => {
		let i;
		for (; e && e !== t;) i = h(e), o(e, n, r), e = i;
		o(t, n, r);
	}, S = ({ el: e, anchor: t }) => {
		let n;
		for (; e && e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, C = (e, t, n, r, i, a, o, s, c) => {
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) ne(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), ie(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, ne = (e, t, n, r, i, a, s, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && w(e.children, d, null, r, i, Ii(e, a), s, u), _ && Hn(e, null, r, "created"), re(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !te(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && ga(f, r, e);
		}
		_ && Hn(e, null, r, "beforeMount");
		let v = Ri(i, g);
		v ? g.beforeEnter(d) : g && !g.persisted && (d[Gi] = !0), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && Ni(() => {
			try {
				f && ga(f, r, e), v && g.enter(d), _ && Hn(e, null, r, "mounted");
			} finally {}
		}, i);
	}, re = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || Wi(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				re(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, w = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) {
			let c = e[l] = s ? pa(e[l]) : fa(e[l]);
			v(null, c, t, n, r, i, a, o, s);
		}
	}, ie = (e, n, r, i, a, o, s) => {
		let l = n.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = n;
		u |= e.patchFlag & 16;
		let m = e.props || t, h = n.props || t, g;
		if (r && Li(r, !1), (g = h.onVnodeBeforeUpdate) && ga(g, r, n, e), f && Hn(n, e, r, "beforeUpdate"), r && Li(r, !0), d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length) && (u = 0, s = !1, d = null), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? ae(e.dynamicChildren, d, l, r, i, Ii(n, a), o) : s || pe(e, n, l, null, r, i, Ii(n, a), o, !1), u > 0) {
			if (u & 16) T(l, m, h, r, a);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, a), u & 4 && c(l, "style", m.style, h.style, a), u & 8) {
				let e = n.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let n = e[t], i = m[n], o = h[n];
					(o !== i || n === "value") && c(l, n, i, o, a, r);
				}
			}
			u & 1 && e.children !== n.children && p(l, n.children);
		} else !s && d == null && T(l, m, h, r, a);
		((g = h.onVnodeUpdated) || f) && Ni(() => {
			g && ga(g, r, n, e), f && Hn(n, e, r, "updated");
		}, i);
	}, ae = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el || Ui(c), d = u && (c.type === B || !ia(c, l) || c.shapeFlag & 198) ? m(u) : n;
			v(c, l, d, null, r, i, a, o, !0);
		}
	}, T = (e, n, r, i, a) => {
		if (n !== r) {
			if (n !== t) for (let t in n) !te(t) && !(t in r) && c(e, t, n[t], null, a, i);
			for (let t in r) {
				if (te(t)) continue;
				let o = r[t], s = n[t];
				o !== s && t !== "value" && c(e, t, s, o, a, i);
			}
			"value" in r && c(e, "value", n.value, r.value, a);
		}
	}, oe = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), w(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (ae(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && zi(e, t, !0)) : pe(e, t, n, f, i, a, s, c, l);
	}, se = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : le(t, n, r, i, a, o, c) : ue(e, t, c);
	}, le = (e, t, n, r, i, a, o) => {
		let s = e.component = ba(e, r, i);
		if (dr(e) && (s.ctx.renderer = Ce), ka(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, de, o, a), !e.el) {
				let r = s.subTree = sa(Ji);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else de(s, e, t, n, i, a, o);
	}, ue = (e, t, n) => {
		let r = t.component = e.component;
		if (di(e, t, n)) {
			if (r.asyncDep && !r.asyncResolved) {
				t.el = e.el, t.placeholder = e.placeholder, E(r, t, n);
				return;
			}
			r.next = t, r.update();
		} else t.el = e.el, t.placeholder = e.placeholder, r.vnode = t;
	}, de = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = Vi(e);
					if (n) {
						t && (t.el = c.el, E(e, t, o)), n.asyncDep.then(() => {
							let t = () => {
								e.job.flags & 8 || (i && i.pendingBranch ? Ni(t, i) : l());
							};
							t.flags = 48, Ni(t, i);
						});
						return;
					}
				}
				let u = t, d;
				Li(e, !1), t ? (t.el = c.el, E(e, t, o)) : t = c, n && ce(n), (d = t.props && t.props.onVnodeBeforeUpdate) && ga(d, s, t, c), Li(e, !0);
				let f = si(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el || Ui(p)), xe(p), e, i, a), t.el = f.el, u === null && mi(e, f.el), r && Ni(r, i), (d = t.props && t.props.onVnodeUpdated) && Ni(() => ga(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = ur(t);
				if (Li(e, !1), l && ce(l), !m && (o = c && c.onVnodeBeforeMount) && ga(o, d, t), Li(e, !0), s && Te) {
					let t = () => {
						e.subTree = si(e), Te(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = si(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && Ni(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					Ni(() => ga(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && ur(d.vnode) && d.vnode.shapeFlag & 256) && e.a && Ni(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Fe(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => kn(u), Li(e, !0), l();
	}, E = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, yi(e, t.props, r, n), Mi(e, t.children, n), Xe(), Mn(e), Ze();
	}, pe = (e, t, n, r, i, a, o, s, c = !1) => {
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
		m & 8 ? (u & 16 && be(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? he(l, d, n, r, i, a, o, s, c) : be(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && w(d, n, r, i, a, o, s, c));
	}, me = (e, t, r, i, a, o, s, c, l) => {
		e ||= n, t ||= n;
		let u = e.length, d = t.length, f = Math.min(u, d), p = 0;
		for (; p < f; p++) {
			let n = t[p] = l ? pa(t[p]) : fa(t[p]);
			v(e[p], n, r, null, a, o, s, c, l);
		}
		u > d ? be(e, a, o, !0, !1, f) : w(t, r, i, a, o, s, c, l, f);
	}, he = (e, t, r, i, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let n = e[u], i = t[u] = l ? pa(t[u]) : fa(t[u]);
			if (ia(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let n = e[f], i = t[p] = l ? pa(t[p]) : fa(t[p]);
			if (ia(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, n = e < d ? t[e].el : i;
				for (; u <= p;) v(null, t[u] = l ? pa(t[u]) : fa(t[u]), r, n, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) D(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? pa(t[u]) : fa(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let _, y = 0, b = p - h + 1, x = !1, ee = 0, S = Array(b);
			for (u = 0; u < b; u++) S[u] = 0;
			for (u = m; u <= f; u++) {
				let n = e[u];
				if (y >= b) {
					D(n, a, o, !0);
					continue;
				}
				let i;
				if (n.key != null) i = g.get(n.key);
				else for (_ = h; _ <= p; _++) if (S[_ - h] === 0 && ia(n, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? D(n, a, o, !0) : (S[i - h] = u + 1, i >= ee ? ee = i : x = !0, v(n, t[i], r, null, a, o, s, c, l), y++);
			}
			let C = x ? Bi(S) : n;
			for (_ = C.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, n = t[e], f = t[e + 1], p = e + 1 < d ? f.el || Ui(f) : i;
				S[u] === 0 ? v(null, n, r, p, a, o, s, c, l) : x && (_ < 0 || u !== C[_] ? ge(n, r, p, 2) : _--);
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
		} else if (c === Yi) ee(e, t, n);
		else if (r !== 2 && d & 1 && l) {
			if (r === 0) l.persisted && !a[$n] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), Ni(() => l.enter(a), i));
			else {
				let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
					e.ctx.isUnmounted ? s(a) : o(a, t, n);
				}, d = () => {
					let e = a._isLeaving || !!a[$n];
					a._isLeaving && a[$n](!0), l.persisted && !e ? u() : r(a, () => {
						u(), c && c();
					});
				};
				i ? i(a, u, d) : d();
			}
		} else o(a, t, n);
	}, D = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if ((d === -2 || l && l.hasOnce) && (i = !1), s != null && (Xe(), cr(s, null, n, e, !0), Ze()), p == null || e.ctx && e.ctx !== t || (t.renderCache[p] = void 0), u & 256 && t.ctx.deactivate(e)) return;
		let h = u & 1 && f, g = !ur(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && ga(_, t, e), u & 6) ye(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Hn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, Ce, r) : l && !l.hasOnce && (a !== B || d > 0 && d & 64) ? be(l, t, n, !1, !0) : (a === B && d & 384 || !i && u & 16) && be(c, t, n), r && _e(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && Ni(() => {
			_ && ga(_, t, e), h && Hn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, _e = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e, a = t === B;
		if (a && !i) {
			ve(n, r);
			return;
		}
		if (t === Yi) {
			S(e), i && !i.persisted && i.afterLeave && i.afterLeave();
			return;
		}
		let o = a ? rr(e) : e, c = () => {
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
		Hi(c), Hi(l), r && ce(r), i.stop(), a ? (a.flags |= 8, D(o, e, t, n)) : o && (o.transition = e.vnode.transition, D(o, e, t, n)), s && Ni(s, t);
		let u = () => {
			e.isUnmounted = !0;
		};
		u.flags = 16, Ni(u, t);
	}, be = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) D(e[o], t, n, r, i);
	}, xe = (e) => {
		if (e.shapeFlag & 6) return xe(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Zn];
		return n ? h(n) : t;
	}, Se = (e, t, n) => {
		Fn(() => {
			e == null ? t._vnode && D(t._vnode, null, null, !0) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e;
		}, e && t._vnode ? void 0 : e && e.component ? e.component.uid : ya());
	}, Ce = {
		p: v,
		um: D,
		m: ge,
		r: _e,
		mt: le,
		mc: w,
		pc: pe,
		pbc: ae,
		n: xe,
		o: e
	}, we, Te;
	return i && ([we, Te] = i(Ce)), {
		render: Se,
		hydrate: we,
		createApp: ei(Se, we)
	};
}
function Ii({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Li({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ri(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function zi(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (d(r) && d(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = pa(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && zi(t, a)), a.type === qi && (a.patchFlag === -1 && (a = i[e] = pa(a)), a.el = t.el), a.type === Ji && !a.el && (a.el = t.el);
	}
}
function Bi(e) {
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
function Vi(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Vi(t);
}
function Hi(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Ui(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	if (t) return Ui(t.subTree);
	let n = e.suspense;
	return n && n.activeBranch ? Ui(n.activeBranch) : null;
}
var Wi = (e) => e.__isSuspense, Gi = /* @__PURE__ */ Symbol("_deferredEnter");
function Ki(e, t) {
	t && t.pendingBranch ? d(e) ? t.effects.push(...e) : t.effects.push(e) : jn(e);
}
var B = /* @__PURE__ */ Symbol.for("v-fgt"), qi = /* @__PURE__ */ Symbol.for("v-txt"), Ji = /* @__PURE__ */ Symbol.for("v-cmt"), Yi = /* @__PURE__ */ Symbol.for("v-stc"), Xi = [], Zi = null;
function V(e = !1) {
	Xi.push(Zi = e ? null : []);
}
function Qi() {
	Xi.pop(), Zi = Xi[Xi.length - 1] || null;
}
var $i = 1;
function ea(e, t = !1) {
	$i += e, e < 0 && Zi && t && (Zi.hasOnce = !0);
}
function ta(e) {
	return e.dynamicChildren = $i > 0 ? Zi || n : null, Qi(), $i > 0 && Zi && Zi.push(e), e;
}
function H(e, t, n, r, i, a) {
	return ta(U(e, t, n, r, i, a, !0));
}
function na(e, t, n, r, i) {
	return ta(sa(e, t, n, r, i, !0));
}
function ra(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function ia(e, t) {
	return e.type === t.type && e.key === t.key;
}
var aa = ({ key: e }) => e ?? null, oa = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : g(e) || /* @__PURE__ */ M(e) || h(e) ? {
	i: Rn,
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
		key: t && aa(t),
		ref: t && oa(t),
		scopeId: zn,
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
		ctx: Rn
	};
	return s ? (ma(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= g(n) ? 8 : 16), $i > 0 && !o && Zi && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && Zi.push(c), c;
}
var sa = ca;
function ca(e, t = null, n = null, r = 0, i = null, a = !1) {
	if (e && e !== Or || (e = Ji), ra(e)) {
		let r = ua(e, t, !0);
		return n && ma(r, n), $i > 0 && !a && Zi && (r.shapeFlag & 6 ? Zi[Zi.indexOf(e)] = r : Zi.push(r)), r.patchFlag = -2, r;
	}
	if (Ra(e) && (e = e.__vccOpts), t) {
		t = la(t);
		let { class: e, style: n } = t;
		e && !g(e) && (t.class = D(e)), v(n) && (/* @__PURE__ */ Xt(n) && !d(n) && (n = s({}, n)), t.style = E(n));
	}
	let o = g(e) ? 1 : Wi(e) ? 128 : Qn(e) ? 64 : v(e) ? 4 : h(e) ? 2 : 0;
	return U(e, t, n, r, i, o, a, !0);
}
function la(e) {
	return e ? /* @__PURE__ */ Xt(e) ? s({}, e) : _i(e) ? s({}, e[Na] || e) : e : null;
}
function ua(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? ha(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && aa(l),
		ref: t && t.ref ? n && a ? d(a) ? a.concat(oa(t)) : [a, oa(t)] : oa(t) : a,
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
		ssContent: e.ssContent && ua(e.ssContent),
		ssFallback: e.ssFallback && ua(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce,
		cacheIndex: e.cacheIndex
	};
	return c && r && nr(u, c.clone(u)), u;
}
function W(e = " ", t = 0) {
	return sa(qi, null, e, t);
}
function da(e, t) {
	let n = sa(Yi, null, e);
	return n.staticCount = t, n;
}
function G(e = "", t = !1) {
	return t ? (V(), na(Ji, null, e)) : sa(Ji, null, e);
}
function fa(e) {
	return e == null || typeof e == "boolean" ? sa(Ji) : d(e) ? sa(B, null, e.slice()) : ra(e) ? pa(e) : sa(qi, null, String(e));
}
function pa(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : ua(e);
}
function ma(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (d(t)) n = 16;
	else if (typeof t == "object") {
		if (r & 65) {
			let n = t.default;
			n && (n._c && (n._d = !1), ma(e, n()), n._c && (n._d = !0));
			return;
		}
		{
			n = 32;
			let r = t._;
			!r && !_i(t) ? t._ctx = Rn : r === 3 && Rn && (Rn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
		}
	} else if (h(t)) {
		if (r & 65) {
			ma(e, { default: t });
			return;
		}
		t = {
			default: t,
			_ctx: Rn
		}, n = 32;
	} else t = String(t), r & 64 ? (n = 16, t = [W(t)]) : n = 8;
	e.children = t, e.shapeFlag |= n;
}
function ha(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = D([t.class, r.class]));
		else if (e === "style") t.style = E([t.style, r.style]);
		else if (a(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(d(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !o(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function ga(e, t, n, r = null) {
	_n(e, t, 7, [n, r]);
}
var _a = /* @__PURE__ */ Qr(), va = 0;
function ya() {
	return va;
}
function ba(e, n, r) {
	let i = e.type, a = (n ? n.appContext : e.appContext) || _a, o = {
		uid: va++,
		vnode: e,
		type: i,
		parent: n,
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
		provides: n ? n.provides : Object.create(a.provides),
		ids: n ? n.ids : [
			"",
			0,
			0
		],
		accessCache: null,
		renderCache: [],
		components: null,
		directives: null,
		propsOptions: Ci(i, a),
		emitsOptions: ai(i, a),
		emit: null,
		emitted: null,
		propsDefaults: t,
		inheritAttrs: i.inheritAttrs,
		ctx: t,
		data: t,
		props: t,
		attrs: t,
		slots: t,
		refs: t,
		setupState: t,
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
	return o.ctx = { _: o }, o.root = n ? n.root : o, o.emit = ri.bind(null, o), e.ce && e.ce(o), o;
}
var xa = null, Sa = () => xa || Rn, Ca, wa;
{
	let e = fe(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	Ca = t("__VUE_INSTANCE_SETTERS__", (e) => xa = e), wa = t("__VUE_SSR_SETTERS__", (e) => Oa = e);
}
var Ta = (e) => {
	let t = xa;
	return Ca(e), e.scope.on(), () => {
		e.scope.off(), Ca(t);
	};
}, Ea = () => {
	xa && xa.scope.off(), Ca(null);
};
function Da(e) {
	return e.vnode.shapeFlag & 4;
}
var Oa = !1;
function ka(e, t = !1, n = !1) {
	t && wa(t);
	let { props: r, children: i } = e.vnode, a = Da(e);
	vi(e, r, a, t), ji(e, i, n || t);
	let o = a ? Aa(e, t) : void 0;
	return t && wa(!1), o;
}
function Aa(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Fr);
	let { setup: r } = n;
	if (r) {
		Xe();
		let n = e.setupContext = r.length > 1 ? Fa(e) : null, i = Ta(e), a = gn(r, e, 0, [e.props, n]), o = y(a);
		if (Ze(), i(), (o || e.sp) && !ur(e) && ar(e), o) {
			if (a.then(Ea, Ea), t) return a.then((n) => {
				wa(!0);
				try {
					ja(e, n, t);
				} finally {
					wa(!1);
				}
			}).catch((t) => {
				vn(t, e, 0, void 0, !0), e.ssrRender = (e, t) => t("<!---->");
			});
			e.asyncDep = a;
		} else ja(e, a, t);
	} else Ma(e, t);
}
function ja(e, t, n) {
	h(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : v(t) && (e.setupState = rn(t)), Ma(e, n);
}
function Ma(e, t, n) {
	let i = e.type;
	e.render ||= i.render || r;
	{
		let t = Ta(e);
		Xe();
		try {
			Rr(e);
		} finally {
			Ze(), t();
		}
	}
}
var Na = /* @__PURE__ */ Symbol(), Pa = { get(e, t) {
	return st(e, "get", ""), t === Na ? e : e[t];
} };
function Fa(e) {
	return {
		attrs: new Proxy(e.attrs, Pa),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function Ia(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(rn(Zt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Nr) return Nr[n](e);
		},
		has(e, t) {
			return t in e || t in Nr;
		}
	}) : e.proxy;
}
function La(e, t = !0) {
	return h(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ra(e) {
	return h(e) && "__vccOpts" in e;
}
var K = (e, t) => /* @__PURE__ */ ln(e, t, Oa);
function za(e, t, n) {
	try {
		ea(-1);
		let r = arguments.length;
		return r === 2 ? v(t) && !d(t) ? ra(t) ? sa(e, null, [t]) : sa(e, t) : sa(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && ra(n) && (n = [n]), sa(e, t, n));
	} finally {
		ea(1);
	}
}
var Ba = "3.5.45", Va = void 0, Ha = typeof window < "u" && window.trustedTypes;
if (Ha) try {
	Va = /* @__PURE__ */ Ha.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var Ua = Va ? (e) => Va.createHTML(e) : (e) => e, Wa = "http://www.w3.org/2000/svg", Ga = "http://www.w3.org/1998/Math/MathML", Ka = typeof document < "u" ? document : null, qa = Ka && /* @__PURE__ */ Ka.createElement("template"), Ja = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? Ka.createElementNS(Wa, e) : t === "mathml" ? Ka.createElementNS(Ga, e) : n ? Ka.createElement(e, { is: n }) : Ka.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => Ka.createTextNode(e),
	createComment: (e) => Ka.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => Ka.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), i !== a && (i = i.nextSibling););
		else {
			qa.innerHTML = Ua(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = qa.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, Ya = /* @__PURE__ */ Symbol("_vtc");
function Xa(e, t, n) {
	let r = e[Ya];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var Za = /* @__PURE__ */ Symbol("_vod"), Qa = /* @__PURE__ */ Symbol("_vsh"), $a = {
	name: "show",
	beforeMount(e, { value: t }, { transition: n }) {
		e[Za] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : eo(e, t);
	},
	mounted(e, { value: t }, { transition: n }) {
		n && t && n.enter(e);
	},
	updated(e, { value: t, oldValue: n }, { transition: r }) {
		!t != !n && (r ? t ? (r.beforeEnter(e), eo(e, !0), r.enter(e)) : r.leave(e, () => {
			eo(e, !1);
		}) : eo(e, t));
	},
	beforeUnmount(e, { value: t }) {
		eo(e, t);
	}
};
function eo(e, t) {
	e.style.display = t ? e[Za] : "none", e[Qa] = !t;
}
var to = /* @__PURE__ */ Symbol(""), no = /(?:^|;)\s*display\s*:/;
function ro(e, t, n) {
	let r = e.style, i = g(n), a = !1;
	if (n && !i) {
		if (t) {
			if (g(t)) for (let e of t.split(";")) {
				let t = e.slice(0, e.indexOf(":")).trim();
				n[t] ?? ao(r, t, "");
			}
			else for (let e in t) n[e] ?? ao(r, e, "");
		}
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? ao(r, i, "") : lo(e, i, !g(t) && t ? t[i] : void 0, o) || ao(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[to];
			e && (n += ";" + e), r.cssText = n, a = no.test(n);
		}
	} else t && e.removeAttribute("style");
	Za in e && (i && t === n || (e[Za] = a ? r.display : ""), e[Qa] && (r.display = "none"));
}
var io = /\s*!important$/;
function ao(e, t, n) {
	if (d(n)) n.forEach((n) => ao(e, t, n));
	else if (n ??= "", t.startsWith("--")) io.test(n) ? e.setProperty(t, n.replace(io, ""), "important") : e.setProperty(t, n);
	else {
		let r = co(e, t);
		io.test(n) ? e.setProperty(ae(r), n.replace(io, ""), "important") : e[r] = n;
	}
}
var oo = [
	"Webkit",
	"Moz",
	"ms"
], so = {};
function co(e, t) {
	let n = so[t];
	if (n) return n;
	let r = w(t);
	if (r !== "filter" && r in e) return so[t] = r;
	r = T(r);
	for (let n = 0; n < oo.length; n++) {
		let i = oo[n] + r;
		if (i in e) return so[t] = i;
	}
	return t;
}
function lo(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && g(r) && n === r;
}
var uo = "http://www.w3.org/1999/xlink";
function fo(e, t, n, r, i, a = ve(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(uo, t.slice(6, t.length)) : e.setAttributeNS(uo, t, n) : n == null || a && !ye(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : _(n) ? String(n) : n);
}
function po(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? Ua(n) : n);
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
		r === "boolean" ? n = ye(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function mo(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function ho(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var go = /* @__PURE__ */ Symbol("_vei");
function _o(e, t, n, r, i = null) {
	let a = e[go] || (e[go] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = bo(t);
		r ? mo(e, n, a[t] = wo(r, i), s) : o && (ho(e, n, o, s), a[t] = void 0);
	}
}
var vo = /(Once|Passive|Capture)$/, yo = /^on:?(?:Once|Passive|Capture)$/;
function bo(e) {
	let t, n;
	for (; (n = e.match(vo)) && !yo.test(e);) t ||= {}, e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
	return [e[2] === ":" ? e.slice(3) : ae(e.slice(2)), t];
}
var xo = 0, So = /* @__PURE__ */ Promise.resolve(), Co = () => xo ||= (So.then(() => xo = 0), Date.now());
function wo(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		let r = n.value;
		if (d(r)) {
			let n = e.stopImmediatePropagation;
			e.stopImmediatePropagation = () => {
				n.call(e), e._stopped = !0;
			};
			let i = r.slice(), a = [e];
			for (let n = 0; n < i.length && !e._stopped; n++) {
				let e = i[n];
				e && _n(e, t, 5, a);
			}
		} else _n(r, t, 5, [e]);
	};
	return n.value = e, n.attached = Co(), n;
}
var To = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Eo = (e, t, n, r, i, s) => {
	let c = i === "svg";
	t === "class" ? Xa(e, r, c) : t === "style" ? ro(e, n, r) : a(t) ? o(t) || _o(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), 1) : t[0] === "^" ? (t = t.slice(1), 0) : Do(e, t, r, c)) ? (po(e, t, r), e.tagName.includes("-") || t !== "value" && t !== "checked" && t !== "selected" || fo(e, t, r, c, s, t !== "value")) : e._isVueCE && (Oo(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !g(r))) ? po(e, w(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), fo(e, t, r, c));
};
function Do(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && To(t) && h(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return To(t) && g(n) ? !1 : t in e;
}
function Oo(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = w(t);
	return Array.isArray(n) ? n.some((e) => w(e) === r) : Object.keys(n).some((e) => w(e) === r);
}
var ko = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return d(t) ? (e) => ce(t, e) : t;
};
function Ao(e) {
	e.target.composing = !0;
}
function jo(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var Mo = /* @__PURE__ */ Symbol("_assign"), No = /* @__PURE__ */ Symbol("_initialValue");
function Po(e, t, n) {
	return t && (e = e.trim()), n && (e = ue(e)), e;
}
var q = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e.parentNode && (e.type === "text" ? e[No] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[No] = e.defaultValue.replace(/\r\n?/g, "\n"))), e[Mo] = ko(i);
		let a = r || i.props && i.props.type === "number";
		mo(e, t ? "change" : "input", (t) => {
			t.target.composing || e[Mo](Po(e.value, n, a));
		}), (n || a) && mo(e, "change", () => {
			e.value = Po(e.value, n, a);
		}), t || (mo(e, "compositionstart", Ao), mo(e, "compositionend", jo), mo(e, "change", jo));
	},
	mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
		let i = t ?? "", a = e[No];
		delete e[No], a !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== a ? e[Mo](Po(e.value, n, r)) : e.value = i;
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[Mo] = ko(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? ue(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, Fo = {
	deep: !0,
	created(e, t, n) {
		e[Mo] = ko(n), mo(e, "change", () => {
			let t = e._modelValue, n = Bo(e), r = e.checked, i = e[Mo];
			if (d(t)) {
				let e = Te(t, n), a = e !== -1;
				if (r && !a) i(t.concat(n));
				else if (!r && a) {
					let n = [...t];
					n.splice(e, 1), i(n);
				}
			} else if (p(t)) {
				let e = new Set(t);
				r ? e.add(n) : e.delete(n), i(e);
			} else i(Vo(e, r));
		});
	},
	mounted: Io,
	beforeUpdate(e, t, n) {
		e[Mo] = ko(n), Io(e, t, n);
	}
};
function Io(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (d(t)) i = Te(t, r.props.value) > -1;
	else if (p(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = we(t, Vo(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var Lo = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		e._modelValue = t, mo(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? ue(Bo(e)) : Bo(e)), r = e.multiple, i = r ? p(e._modelValue) ? new Set(t) : t : t[0], a = e._pendingValue = [r, r ? d(i) ? t.slice() : t : i];
			try {
				e[Mo](i);
			} finally {
				Dn(() => {
					e._pendingValue === a && (e._pendingValue = void 0);
				});
			}
		}), e[Mo] = ko(r);
	},
	mounted(e, { value: t, modifiers: { number: n } }) {
		zo(e, t, n);
	},
	beforeUpdate(e, { value: t }, n) {
		e._modelValue = t, e[Mo] = ko(n);
	},
	updated(e, { value: t, modifiers: { number: n } }) {
		let r = e._pendingValue;
		e._pendingValue = void 0, r && r[0] === e.multiple && Ro(t, r[1], r[0]) || zo(e, t, n);
	}
};
function Ro(e, t, n) {
	if (!n || d(e)) return we(e, t);
	if (p(e)) {
		if (e.size !== t.length) return !1;
		for (let n of t) if (!e.has(n)) return !1;
		return !0;
	}
	return !1;
}
function zo(e, t, n = !1) {
	let r = e.multiple, i = d(t);
	if (!r || i || p(t)) {
		for (let a = 0, o = e.options.length; a < o; a++) {
			let o = e.options[a], s = Bo(o);
			if (r) {
				if (i) {
					let e = typeof s;
					o.selected = e === "string" || e === "number" ? t.some((e) => String(e) === String(s)) : Te(t, s) > -1;
				} else o.selected = t.has(s) || n && typeof s == "string" && t.has(ue(s));
			} else if (we(Bo(o), t)) {
				e.selectedIndex !== a && (e.selectedIndex = a);
				return;
			}
		}
		!r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function Bo(e) {
	return "_value" in e ? e._value : e.value;
}
function Vo(e, t) {
	let n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t;
}
var Ho = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], Uo = {
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
	exact: (e, t) => Ho.some((n) => e[`${n}Key`] && !t.includes(n))
}, Wo = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = Uo[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, Go = {
	esc: "escape",
	space: " ",
	up: "arrow-up",
	left: "arrow-left",
	right: "arrow-right",
	down: "arrow-down",
	delete: "backspace"
}, Ko = (e, t) => {
	let n = e._withKeys ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n) => {
		if (!("key" in n)) return;
		let r = ae(n.key);
		if (t.some((e) => e === r || Go[e] === r)) return e(n);
	}));
}, qo = /* @__PURE__ */ s({ patchProp: Eo }, Ja), Jo;
function Yo() {
	return Jo ||= Pi(qo);
}
var Xo = ((...e) => {
	let t = Yo().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = Qo(e);
		if (!r) return;
		let i = t._component;
		h(i) || i.render || i.template || (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, Zo(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function Zo(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function Qo(e) {
	return g(e) ? document.querySelector(e) : e;
}
// src/vue/account/EventReminders.vue
var $o = { class: "sb-reminder-picker" }, es = { class: "sb-reminder-choices" }, ts = ["value"], ns = { class: "sb-reminder-custom-label" }, rs = ["hidden"], is = {
	__name: "EventReminders",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ A({
			...t.initial.values,
			selected: [...t.initial.values.selected]
		});
		return (t, r) => (V(), H("fieldset", $o, [
			r[7] ||= U("legend", null, "🔔 Когда напомнить?", -1),
			r[8] ||= U("p", { class: "sb-reminder-help" }, "Выбери один или несколько сроков. Убери все галочки, чтобы отключить уведомления.", -1),
			U("div", es, [(V(!0), H(B, null, z(e.initial.presets, (e) => (V(), H("label", {
				key: e.days,
				class: "sb-reminder-choice"
			}, [
				I(U("input", {
					"onUpdate:modelValue": r[0] ||= (e) => n.selected = e,
					type: "checkbox",
					name: "event-reminder-preset",
					value: e.days
				}, null, 8, ts), [[Fo, n.selected]]),
				r[3] ||= W(),
				U("span", null, O(e.label), 1)
			]))), 128))]),
			U("label", ns, [I(U("input", {
				id: "event-reminder-custom",
				"onUpdate:modelValue": r[1] ||= (e) => n.custom = e,
				type: "checkbox"
			}, null, 512), [[Fo, n.custom]]), r[4] ||= W(" Свой срок до события", -1)]),
			U("div", {
				id: "event-reminder-custom-wrap",
				class: "sb-reminder-custom-input",
				hidden: !n.custom
			}, [
				r[5] ||= U("label", { for: "event-reminder-custom-days" }, "За сколько дней?", -1),
				I(U("input", {
					id: "event-reminder-custom-days",
					"onUpdate:modelValue": r[2] ||= (e) => n.customDays = e,
					type: "number",
					min: "1",
					max: "365",
					step: "1",
					inputmode: "numeric"
				}, null, 512), [[q, n.customDays]]),
				r[6] ||= U("span", null, "дней до события", -1)
			], 8, rs)
		]));
	}
};
// src/vue/legacy/observeLegacyIsland.js
function J({ root: e, selectTarget: t, readSnapshot: n, mount: r, subscribe: i, createObserver: a = (e) => new MutationObserver(e) }) {
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
// src/vue/account/legacyEventRemindersBridge.js
function as({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_EVENT_REMINDERS, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : J({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-event-reminders"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, is, { initial: n })
	});
}
// src/vue/account/EventEditor.vue
var os = { class: "field" }, ss = { class: "dash-event-fields" }, cs = { class: "field" }, ls = { class: "field" }, us = { class: "field" }, ds = ["value"], fs = { class: "field" }, ps = {
	__name: "EventEditor",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = /* @__PURE__ */ A({ ...e.initial.values });
		return (n, r) => (V(), H(B, null, [
			U("h2", null, O(e.initial.editing ? "Редактирование события" : "Добавить событие"), 1),
			U("div", os, [r[5] ||= U("label", { for: "event-title" }, "Название события", -1), I(U("input", {
				id: "event-title",
				"onUpdate:modelValue": r[0] ||= (e) => t.title = e,
				type: "text",
				maxlength: "120",
				placeholder: "Например, релиз нового EP"
			}, null, 512), [[q, t.title]])]),
			U("div", ss, [
				U("div", cs, [r[6] ||= U("label", { for: "event-date" }, "Дата", -1), I(U("input", {
					id: "event-date",
					"onUpdate:modelValue": r[1] ||= (e) => t.date = e,
					type: "date"
				}, null, 512), [[q, t.date]])]),
				U("div", ls, [r[7] ||= U("label", { for: "event-time" }, "Время (необязательно)", -1), I(U("input", {
					id: "event-time",
					"onUpdate:modelValue": r[2] ||= (e) => t.time = e,
					type: "time"
				}, null, 512), [[q, t.time]])]),
				U("div", us, [r[8] ||= U("label", { for: "event-type" }, "Тип события", -1), I(U("select", {
					id: "event-type",
					"onUpdate:modelValue": r[3] ||= (e) => t.type = e
				}, [(V(!0), H(B, null, z(e.initial.types, (e) => (V(), H("option", {
					key: e.id,
					value: e.id
				}, O(e.label), 9, ds))), 128))], 512), [[Lo, t.type]])])
			]),
			U("div", fs, [r[9] ||= U("label", { for: "event-notes" }, "Описание (необязательно)", -1), I(U("textarea", {
				id: "event-notes",
				"onUpdate:modelValue": r[4] ||= (e) => t.notes = e,
				rows: "3",
				maxlength: "1200",
				placeholder: "Детали, место или заметки"
			}, null, 512), [[q, t.notes]])])
		], 64));
	}
};
// src/vue/account/legacyEventEditorBridge.js
function ms({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_EVENT_EDITOR, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : J({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-event-fields"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, ps, { initial: n })
	});
}
// src/vue/account/EventCollection.vue
var hs = { class: "section-title" }, gs = {
	key: 0,
	class: "dash-event-list"
}, _s = { class: "dash-event-date" }, vs = { class: "dash-event-main" }, ys = { class: "dash-entry-meta" }, bs = { key: 0 }, xs = { class: "sb-event-reminder-summary" }, Ss = { class: "dash-event-controls" }, Cs = ["data-id"], ws = ["data-id"], Ts = {
	key: 1,
	class: "dash-simple-empty"
}, Es = {
	__name: "EventCollection",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (V(!0), H(B, null, z(e.model.groups, (e) => (V(), H(B, { key: e.key }, [U("div", hs, [U("h2", null, O(e.title) + " (" + O(e.items.length) + ")", 1)]), e.items.length ? (V(), H("div", gs, [(V(!0), H(B, null, z(e.items, (e) => (V(), H("article", {
			key: e.id,
			class: "dash-event-row"
		}, [
			U("div", _s, [U("strong", null, O(e.date), 1), U("span", null, O(e.time), 1)]),
			U("div", vs, [
				U("div", ys, O(e.type), 1),
				U("h3", null, O(e.title), 1),
				e.notes ? (V(), H("p", bs, O(e.notes), 1)) : G("", !0),
				U("div", xs, O(e.reminder), 1)
			]),
			U("div", Ss, [U("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "event-edit",
				"data-id": e.id
			}, "Изменить", 8, Cs), U("button", {
				type: "button",
				class: "btn danger small",
				"data-action": "event-delete",
				"data-id": e.id
			}, "Удалить", 8, ws)])
		]))), 128))])) : (V(), H("div", Ts, O(e.empty), 1))], 64))), 128));
	}
};
// src/vue/account/legacyEventCollectionBridge.js
function Ds({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_EVENT_LIST, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : J({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-events-list"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, Es, { model: n })
	});
}
// src/vue/account/ProjectDetail.vue
var Os = { class: "field" }, ks = { class: "detail-actions" }, As = ["data-id"], js = ["innerHTML"], Ms = ["data-id"], Ns = ["innerHTML"], Ps = ["data-id"], Fs = ["innerHTML"], Is = {
	key: 1,
	class: "empty"
}, Ls = {
	__name: "ProjectDetail",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = /* @__PURE__ */ N(e.initial.project?.notes ?? "");
		return (n, r) => e.initial.project ? (V(), H(B, { key: 0 }, [
			r[5] ||= U("div", { class: "eyebrow" }, "Рабочая карточка", -1),
			U("h3", null, O(e.initial.project.title), 1),
			U("p", null, O(e.initial.project.genreName) + " · создан " + O(e.initial.project.date), 1),
			U("div", Os, [r[1] ||= U("label", { for: "project-notes" }, "Заметки, треклист, идеи и задачи", -1), I(U("textarea", {
				id: "project-notes",
				"onUpdate:modelValue": r[0] ||= (e) => t.value = e,
				rows: "12"
			}, null, 512), [[q, t.value]])]),
			U("div", ks, [
				U("button", {
					type: "button",
					class: "btn primary",
					"data-action": "save-project",
					"data-id": e.initial.project.id
				}, [U("span", {
					style: { display: "contents" },
					"aria-hidden": "true",
					innerHTML: e.initial.icons.check
				}, null, 8, js), r[2] ||= W(" Сохранить заметки", -1)], 8, As),
				U("button", {
					type: "button",
					class: "btn ghost",
					"data-action": "use-genre",
					"data-id": e.initial.project.genre
				}, [U("span", {
					style: { display: "contents" },
					"aria-hidden": "true",
					innerHTML: e.initial.icons.studio
				}, null, 8, Ns), r[3] ||= W(" В студию", -1)], 8, Ms),
				U("button", {
					type: "button",
					class: "btn danger",
					"data-action": "delete-project",
					"data-id": e.initial.project.id
				}, [U("span", {
					style: { display: "contents" },
					"aria-hidden": "true",
					innerHTML: e.initial.icons.trash
				}, null, 8, Fs), r[4] ||= W(" Удалить", -1)], 8, Ps)
			])
		], 64)) : (V(), H("div", Is, [...r[6] ||= [U("strong", null, "Начни со своего проекта", -1), W("Здесь появятся заметки и рабочая карточка выбранного проекта.", -1)]]));
	}
};
// src/vue/account/legacyProjectDetailBridge.js
function Rs({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PROJECT_DETAIL, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : J({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-project-detail"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, Ls, { initial: n })
	});
}
// src/vue/account/ProjectCreator.vue
var zs = { class: "field" }, Bs = { class: "field" }, Vs = ["value"], Hs = {
	type: "button",
	class: "btn primary",
	"data-action": "create-project"
}, Us = ["innerHTML"], Ws = {
	__name: "ProjectCreator",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = /* @__PURE__ */ A({ ...e.initial.values });
		return (n, r) => (V(), H(B, null, [
			r[5] ||= U("h3", null, "Новый проект", -1),
			U("div", zs, [r[2] ||= U("label", { for: "p-title" }, "Название", -1), I(U("input", {
				id: "p-title",
				"onUpdate:modelValue": r[0] ||= (e) => t.title = e,
				placeholder: "Например, дебютный EP"
			}, null, 512), [[q, t.title]])]),
			U("div", Bs, [r[3] ||= U("label", { for: "p-genre" }, "Основной жанр", -1), I(U("select", {
				id: "p-genre",
				"onUpdate:modelValue": r[1] ||= (e) => t.genre = e
			}, [(V(!0), H(B, null, z(e.initial.genres, (e) => (V(), H("option", {
				key: e.id,
				value: e.id
			}, O(e.name), 9, Vs))), 128))], 512), [[Lo, t.genre]])]),
			U("button", Hs, [U("span", {
				style: { display: "contents" },
				"aria-hidden": "true",
				innerHTML: e.initial.plusIcon
			}, null, 8, Us), r[4] ||= W(" Создать проект", -1)])
		], 64));
	}
};
// src/vue/account/legacyProjectCreatorBridge.js
function Gs({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PROJECT_CREATOR, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : J({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-project-creator"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, Ws, { initial: n })
	});
}
// src/vue/account/ProjectCollection.vue
var Ks = { class: "section-title" }, qs = ["data-id", "aria-pressed"], Js = {
	key: 1,
	class: "empty"
}, Ys = ["innerHTML"], Xs = {
	__name: "ProjectCollection",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (V(), H(B, null, [U("div", Ks, [U("h2", null, "Мои проекты (" + O(e.model.items.length) + ")", 1)]), e.model.items.length ? (V(!0), H(B, { key: 0 }, z(e.model.items, (t) => (V(), H("div", {
			key: t.id,
			class: D(["project-card", { selected: t.id === e.model.selectedId }]),
			"data-action": "select-project",
			"data-id": t.id,
			role: "button",
			tabindex: "0",
			"aria-pressed": t.id === e.model.selectedId
		}, [U("h3", null, O(t.title), 1), U("p", null, O(t.genre) + " · " + O(t.date), 1)], 10, qs))), 128)) : (V(), H("div", Js, [
			U("span", {
				style: { display: "contents" },
				"aria-hidden": "true",
				innerHTML: e.model.musicIcon
			}, null, 8, Ys),
			n[0] ||= U("strong", null, "Проектов пока нет", -1),
			n[1] ||= W("Создай первый проект выше.", -1)
		]))], 64));
	}
};
// src/vue/account/legacyProjectCollectionBridge.js
function Zs({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PROJECT_LIST, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : J({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-projects-list"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, Xs, { model: n })
	});
}
// src/vue/legacy/createFeatureMounter.js
function Qs({ createApp: e, host: t, pinia: n, router: r, resolveTarget: i, warn: a = (...e) => console.warn(...e) }) {
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
// node_modules/pinia/dist/pinia.mjs
var $s = typeof window < "u", ec, tc = (e) => ec = e, nc = Symbol();
function rc(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var ic;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(ic ||= {});
var ac = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function oc(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function sc(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		fc(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function cc(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function lc(e) {
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
var uc = typeof navigator == "object" ? navigator : { userAgent: "" }, dc = /Macintosh/.test(uc.userAgent) && /AppleWebKit/.test(uc.userAgent) && !/Safari/.test(uc.userAgent), fc = $s ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !dc ? pc : "msSaveOrOpenBlob" in uc ? mc : hc : () => {};
function pc(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? lc(r) : cc(r.href) ? sc(e, t, n) : (r.target = "_blank", lc(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		lc(r);
	}, 0));
}
function mc(e, t = "download", n) {
	if (typeof e == "string") {
		if (cc(e)) sc(e, t, n);
		else {
			let t = document.createElement("a");
			t.href = e, t.target = "_blank", setTimeout(function() {
				lc(t);
			});
		}
	} else navigator.msSaveOrOpenBlob(oc(e, n), t);
}
function hc(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return sc(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(ac.HTMLElement)) || "safari" in ac, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || dc) && typeof FileReader < "u") {
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
var { assign: gc } = Object;
function _c() {
	let e = je(!0), t = e.run(() => /* @__PURE__ */ N({})), n = [], r = [], i = Zt({
		install(e) {
			tc(i), i._a = e, e.provide(nc, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
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
var vc = () => {};
function yc(e, t, n, r = vc) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && Me() && Ne(i), i;
}
function bc(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var xc = (e) => e(), Sc = Symbol(), Cc = Symbol();
function wc(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!t.hasOwnProperty(n)) continue;
		let r = t[n], i = e[n];
		e[n] = rc(i) && rc(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ M(r) && !/* @__PURE__ */ qt(r) ? wc(i, r) : r;
	}
	return e;
}
var Tc = Symbol();
function Ec(e) {
	return !rc(e) || !Object.prototype.hasOwnProperty.call(e, Tc);
}
var { assign: Dc } = Object;
function Oc(e) {
	return !!(/* @__PURE__ */ M(e) && e.effect);
}
function kc(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || 
		/* istanbul ignore if */
		(n.state.value[e] = i ? i() : {}), Dc(/* @__PURE__ */ an(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = Zt(K(() => {
			tc(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return c = Ac(e, l, t, n, r, !0), c;
}
function Ac(e, t, n = {}, r, i, a) {
	let o, s = Dc({ actions: {} }, n), c = { deep: !0 }, l, u, d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p, m = r.state.value[e];
	!a && !m && 
	/* istanbul ignore if */
	(r.state.value[e] = {});
	let h;
	function g(t) {
		let n;
		l = u = !1, typeof t == "function" ? (t(r.state.value[e]), n = {
			type: ic.patchFunction,
			storeId: e,
			events: p
		}) : (wc(r.state.value[e], t), n = {
			type: ic.patchObject,
			payload: t,
			storeId: e,
			events: p
		});
		let i = h = Symbol();
		Dn().then(() => {
			h === i && (l = !0);
		}), u = !0, bc(d, n, r.state.value[e]);
	}
	let _ = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			Dc(e, t);
		});
	} : vc;
	function v() {
		o.stop(), d.clear(), f.clear(), r._s.delete(e);
	}
	let y = (t, n = "") => {
		if (Sc in t) return t[Cc] = n, t;
		let i = function() {
			tc(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			bc(f, {
				args: n,
				name: i[Cc],
				store: b,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : b, n);
			} catch (e) {
				throw bc(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (bc(a, e), e)).catch((e) => (bc(o, e), Promise.reject(e))) : (bc(a, l), l);
		};
		return i[Sc] = !0, i[Cc] = n, i;
	}, b = /* @__PURE__ */ A({
		_p: r,
		$id: e,
		$onAction: yc.bind(null, f),
		$patch: g,
		$reset: _,
		$subscribe(t, n = {}) {
			let i = yc(d, t, n.detached, () => a()), a = o.run(() => L(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? u : l) && t({
					storeId: e,
					type: ic.direct,
					events: p
				}, r);
			}, Dc({}, c, n)));
			return i;
		},
		$dispose: v
	});
	r._s.set(e, b);
	let x = (r._a && r._a.runWithContext || xc)(() => r._e.run(() => (o = je()).run(() => t({ action: y }))));
	for (let t in x) {
		let n = x[t];
		/* @__PURE__ */ M(n) && !Oc(n) || /* @__PURE__ */ qt(n) ? a || (m && Ec(n) && (/* @__PURE__ */ M(n) ? n.value = m[t] : wc(n, m[t])), r.state.value[e][t] = n) : typeof n == "function" && (x[t] = y(n, t), s.actions[t] = n);
	}
	return Dc(b, x), Dc(/* @__PURE__ */ j(b), x), Object.defineProperty(b, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			g((t) => {
				Dc(t, e);
			});
		}
	}), r._p.forEach((e) => {
		Dc(b, o.run(() => e({
			store: b,
			app: r._a,
			pinia: r,
			options: s
		})));
	}), m && a && n.hydrate && n.hydrate(b.$state, m), l = !0, u = !0, b;
}
function jc(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function a(n, a) {
		let o = Gn();
		return n ||= o ? Wn(nc, null) : null, n && tc(n), n = ec, n._s.has(e) || (i ? Ac(e, t, r, n) : kc(e, r, n)), n._s.get(e);
	}
	return a.$id = e, a;
}
// src/vue/navigation/nav-model.js
var Mc = /* @__PURE__ */ new Set([
	"projects",
	"saved",
	"myideas",
	"myprompts",
	"events",
	"tracks",
	"artists"
]);
function Nc(e) {
	return e === "detail" ? "catalog" : Mc.has(e) ? "account" : e;
}
function Pc(e) {
	let t = Nc(e?.active), n = /* @__PURE__ */ new Set(), r = !1, i = [];
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
var Fc = typeof document < "u";
function Ic(e) {
	return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Lc(e) {
	return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && Ic(e.default);
}
var Y = Object.assign;
function Rc(e, t) {
	let n = {};
	for (let r in t) {
		let i = t[r];
		n[r] = Bc(i) ? i.map(e) : e(i);
	}
	return n;
}
var zc = () => {}, Bc = Array.isArray;
function Vc(e, t) {
	let n = {};
	for (let r in e) n[r] = r in t ? t[r] : e[r];
	return n;
}
var Hc = /#/g, Uc = /&/g, Wc = /\//g, Gc = /=/g, Kc = /\?/g, qc = /\+/g, Jc = /%5B/g, Yc = /%5D/g, Xc = /%5E/g, Zc = /%60/g, Qc = /%7B/g, $c = /%7C/g, el = /%7D/g, tl = /%20/g;
function nl(e) {
	return e == null ? "" : encodeURI("" + e).replace($c, "|").replace(Jc, "[").replace(Yc, "]");
}
function rl(e) {
	return nl(e).replace(Qc, "{").replace(el, "}").replace(Xc, "^");
}
function il(e) {
	return nl(e).replace(qc, "%2B").replace(tl, "+").replace(Hc, "%23").replace(Uc, "%26").replace(Zc, "`").replace(Qc, "{").replace(el, "}").replace(Xc, "^");
}
function al(e) {
	return il(e).replace(Gc, "%3D");
}
function ol(e) {
	return nl(e).replace(Hc, "%23").replace(Kc, "%3F");
}
function sl(e) {
	return ol(e).replace(Wc, "%2F");
}
function cl(e) {
	if (e == null) return null;
	try {
		return decodeURIComponent("" + e);
	} catch {}
	return "" + e;
}
var ll = /\/$/, ul = (e) => e.replace(ll, "");
function dl(e, t, n = "/") {
	let r, i = {}, a = "", o = "", s = t.indexOf("#"), c = t.indexOf("?");
	return c = s >= 0 && c > s ? -1 : c, c >= 0 && (r = t.slice(0, c), a = t.slice(c, s > 0 ? s : t.length), i = e(a.slice(1))), s >= 0 && (r ||= t.slice(0, s), o = t.slice(s, t.length)), r = vl(r ?? t, n), {
		fullPath: r + a + o,
		path: r,
		query: i,
		hash: cl(o)
	};
}
function fl(e, t) {
	let n = t.query ? e(t.query) : "";
	return t.path + (n && "?") + n + (t.hash || "");
}
function pl(e, t, n) {
	let r = t.matched.length - 1, i = n.matched.length - 1;
	return r > -1 && r === i && ml(t.matched[r], n.matched[i]) && hl(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function ml(e, t) {
	return (e.aliasOf || e) === (t.aliasOf || t);
}
function hl(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (var n in e) if (!gl(e[n], t[n])) return !1;
	return !0;
}
function gl(e, t) {
	return Bc(e) ? _l(e, t) : Bc(t) ? _l(t, e) : e?.valueOf() === t?.valueOf();
}
function _l(e, t) {
	return Bc(t) ? e.length === t.length && e.every((e, n) => e === t[n]) : e.length === 1 && e[0] === t;
}
function vl(e, t) {
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
var yl = {
	path: "/",
	name: void 0,
	params: {},
	query: {},
	hash: "",
	fullPath: "/",
	matched: [],
	meta: {},
	redirectedFrom: void 0
}, bl = /* @__PURE__ */ function(e) {
	return e.pop = "pop", e.push = "push", e;
}({}), xl = /* @__PURE__ */ function(e) {
	return e.back = "back", e.forward = "forward", e.unknown = "", e;
}({});
function Sl(e) {
	if (!e) {
		if (Fc) {
			let t = document.querySelector("base");
			e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
		} else e = "/";
	}
	return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), ul(e);
}
var Cl = /^[^#]+#/;
function wl(e, t) {
	return e.replace(Cl, "#") + t;
}
function Tl(e, t) {
	let n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
	return {
		behavior: t.behavior,
		left: r.left - n.left - (t.left || 0),
		top: r.top - n.top - (t.top || 0)
	};
}
var El = () => ({
	left: window.scrollX,
	top: window.scrollY
});
function Dl(e) {
	let t;
	if ("el" in e) {
		let n = e.el, r = typeof n == "string" && n.startsWith("#"), i = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
		if (!i) return;
		t = Tl(i, e);
	} else t = e;
	"scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left == null ? window.scrollX : t.left, t.top == null ? window.scrollY : t.top);
}
function Ol(e, t) {
	return (history.state ? history.state.position - t : -1) + e;
}
var kl = /* @__PURE__ */ new Map();
function Al(e, t) {
	kl.set(e, t);
}
function jl(e) {
	let t = kl.get(e);
	return kl.delete(e), t;
}
function Ml(e) {
	return typeof e == "string" || e && typeof e == "object";
}
function Nl(e) {
	return typeof e == "string" || typeof e == "symbol";
}
var X = /* @__PURE__ */ function(e) {
	return e[e.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", e[e.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", e[e.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", e[e.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", e[e.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", e;
}({}), Pl = Symbol("");
X.MATCHER_NOT_FOUND, X.NAVIGATION_GUARD_REDIRECT, X.NAVIGATION_ABORTED, X.NAVIGATION_CANCELLED, X.NAVIGATION_DUPLICATED;
function Fl(e, t) {
	return Y(/* @__PURE__ */ Error(), {
		type: e,
		[Pl]: !0
	}, t);
}
function Il(e, t) {
	return e instanceof Error && Pl in e && (t == null || !!(e.type & t));
}
function Ll(e) {
	let t = {};
	if (e === "" || e === "?") return t;
	let n = (e[0] === "?" ? e.slice(1) : e).split("&");
	for (let e = 0; e < n.length; ++e) {
		let r = n[e].replace(qc, " "), i = r.indexOf("="), a = cl(i < 0 ? r : r.slice(0, i)), o = i < 0 ? null : cl(r.slice(i + 1));
		if (a in t) {
			let e = t[a];
			Bc(e) || (e = t[a] = [e]), e.push(o);
		} else t[a] = o;
	}
	return t;
}
function Rl(e) {
	let t = "";
	for (let n in e) {
		let r = e[n];
		n = al(n), r == null ? r !== void 0 && (t += (t.length ? "&" : "") + n) : (Bc(r) ? r.map((e) => e && il(e)) : [r && il(r)]).forEach((e) => {
			e !== void 0 && (t += (t.length ? "&" : "") + n, e != null && (t += "=" + e));
		});
	}
	return t;
}
function zl(e) {
	let t = {};
	for (let n in e) {
		let r = e[n];
		r !== void 0 && (t[n] = Bc(r) ? r.map((e) => e == null ? null : "" + e) : r == null ? r : "" + r);
	}
	return t;
}
var Bl = Symbol(""), Vl = Symbol(""), Hl = Symbol(""), Ul = Symbol(""), Wl = Symbol("");
function Gl() {
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
function Kl(e, t, n, r, i, a = (e) => e()) {
	let o = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
	return () => new Promise((s, c) => {
		let l = (e) => {
			e === !1 ? c(Fl(X.NAVIGATION_ABORTED, {
				from: n,
				to: t
			})) : e instanceof Error ? c(e) : Ml(e) ? c(Fl(X.NAVIGATION_GUARD_REDIRECT, {
				from: t,
				to: e
			})) : (o && r.enterCallbacks[i] === o && typeof e == "function" && o.push(e), s());
		}, u = a(() => e.call(r && r.instances[i], t, n, l)), d = Promise.resolve(u);
		e.length < 3 && (d = d.then(l)), d.catch((e) => c(e));
	});
}
function ql(e, t, n, r, i = (e) => e()) {
	let a = [];
	for (let o of e) for (let e in o.components) {
		let s = o.components[e];
		if (t === "beforeRouteEnter" || o.instances[e]) {
			if (Ic(s)) {
				let c = (s.__vccOpts || s)[t];
				c && a.push(Kl(c, n, r, o, e, i));
			} else {
				let c = s();
				a.push(() => c.then((a) => {
					if (!a) throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);
					let s = Lc(a) ? a.default : a;
					o.mods[e] = a, o.components[e] = s;
					let c = (s.__vccOpts || s)[t];
					return c && Kl(c, n, r, o, e, i)();
				}));
			}
		}
	}
	return a;
}
function Jl(e, t) {
	let n = [], r = [], i = [], a = Math.max(t.matched.length, e.matched.length);
	for (let o = 0; o < a; o++) {
		let a = t.matched[o];
		a && (e.matched.find((e) => ml(e, a)) ? r.push(a) : n.push(a));
		let s = e.matched[o];
		s && (t.matched.find((e) => ml(e, s)) || i.push(s));
	}
	return [
		n,
		r,
		i
	];
}
// node_modules/vue-router/dist/vue-router.mjs
function Yl(e = "") {
	let t = [], n = [["", {}]], r = 0;
	e = Sl(e);
	function i(e, t = {}) {
		r++, r !== n.length && n.splice(r), n.push([e, t]);
	}
	function a(e, n, { direction: r, delta: i }) {
		let a = {
			direction: r,
			delta: i,
			type: bl.pop
		};
		for (let r of t) r(e, n, a);
	}
	let o = {
		location: "",
		state: {},
		base: e,
		createHref: wl.bind(null, e),
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
			let i = this.location, o = e < 0 ? xl.back : xl.forward;
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
var Xl = /* @__PURE__ */ function(e) {
	return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.Group = 2] = "Group", e;
}({}), Zl = /* @__PURE__ */ function(e) {
	return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.ParamRegExp = 2] = "ParamRegExp", e[e.ParamRegExpEnd = 3] = "ParamRegExpEnd", e[e.EscapeNext = 4] = "EscapeNext", e;
}(Zl || {}), Ql = {
	type: Xl.Static,
	value: ""
}, $l = /[a-zA-Z0-9_]/;
function eu(e) {
	if (!e) return [[]];
	if (e === "/") return [[Ql]];
	if (!e.startsWith("/")) throw Error(`Invalid path "${e}"`);
	function t(e) {
		throw Error(`ERR (${n})/"${l}": ${e}`);
	}
	let n = Zl.Static, r = n, i = [], a;
	function o() {
		a && i.push(a), a = [];
	}
	let s = 0, c, l = "", u = "";
	function d() {
		l &&= (n === Zl.Static ? a.push({
			type: Xl.Static,
			value: l
		}) : n === Zl.Param || n === Zl.ParamRegExp || n === Zl.ParamRegExpEnd ? (a.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`), a.push({
			type: Xl.Param,
			value: l,
			regexp: u,
			repeatable: c === "*" || c === "+",
			optional: c === "*" || c === "?"
		})) : t("Invalid state to consume buffer"), "");
	}
	function f() {
		l += c;
	}
	for (; s < e.length;) if (c = e[s++], c === "\\" && n !== Zl.ParamRegExp) r = n, n = Zl.EscapeNext;
	else switch (n) {
		case Zl.Static:
			c === "/" ? (l && d(), o()) : c === ":" ? (d(), n = Zl.Param) : f();
			break;
		case Zl.EscapeNext:
			f(), n = r;
			break;
		case Zl.Param:
			c === "(" ? n = Zl.ParamRegExp : $l.test(c) ? f() : (d(), n = Zl.Static, c !== "*" && c !== "?" && c !== "+" && s--);
			break;
		case Zl.ParamRegExp:
			c === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + c : n = Zl.ParamRegExpEnd : u += c;
			break;
		case Zl.ParamRegExpEnd:
			d(), n = Zl.Static, c !== "*" && c !== "?" && c !== "+" && s--, u = "";
			break;
		default: t("Unknown state");
	}
	return n === Zl.ParamRegExp && t(`Unfinished custom RegExp for param "${l}"`), d(), o(), i;
}
var tu = "[^/]+?", nu = {
	sensitive: !1,
	strict: !1,
	start: !0,
	end: !0
}, ru = /* @__PURE__ */ function(e) {
	return e[e._multiplier = 10] = "_multiplier", e[e.Root = 90] = "Root", e[e.Segment = 40] = "Segment", e[e.SubSegment = 30] = "SubSegment", e[e.Static = 40] = "Static", e[e.Dynamic = 20] = "Dynamic", e[e.BonusCustomRegExp = 10] = "BonusCustomRegExp", e[e.BonusWildcard = -50] = "BonusWildcard", e[e.BonusRepeatable = -20] = "BonusRepeatable", e[e.BonusOptional = -8] = "BonusOptional", e[e.BonusStrict = .7000000000000001] = "BonusStrict", e[e.BonusCaseSensitive = .25] = "BonusCaseSensitive", e;
}(ru || {}), iu = /[.+*?^${}()[\]/\\]/g;
function au(e, t) {
	let n = Y({}, nu, t), r = [], i = n.start ? "^" : "", a = [];
	for (let t of e) {
		let e = t.length ? [] : [ru.Root];
		n.strict && !t.length && (i += "/");
		for (let r = 0; r < t.length; r++) {
			let o = t[r], s = ru.Segment + (n.sensitive ? ru.BonusCaseSensitive : 0);
			if (o.type === Xl.Static) r || (i += "/"), i += o.value.replace(iu, "\\$&"), s += ru.Static;
			else if (o.type === Xl.Param) {
				let { value: e, repeatable: n, optional: c, regexp: l } = o;
				a.push({
					name: e,
					repeatable: n,
					optional: c
				});
				let u = l || tu;
				if (u !== tu) {
					s += ru.BonusCustomRegExp;
					try {
						`${u}`;
					} catch (t) {
						throw Error(`Invalid custom RegExp for param "${e}" (${u}): ` + t.message);
					}
				}
				let d = n ? `((?:${u})(?:/(?:${u}))*)` : `(${u})`;
				r || (d = c && t.length < 2 ? `(?:/${d})` : "/" + d), c && (d += "?"), i += d, s += ru.Dynamic, c && (s += ru.BonusOptional), n && (s += ru.BonusRepeatable), u === ".*" && (s += ru.BonusWildcard);
			}
			e.push(s);
		}
		r.push(e);
	}
	if (n.strict && n.end) {
		let e = r.length - 1;
		r[e][r[e].length - 1] += ru.BonusStrict;
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
			for (let e of i) if (e.type === Xl.Static) n += e.value;
			else if (e.type === Xl.Param) {
				let { value: a, repeatable: o, optional: s } = e, c = a in t ? t[a] : "";
				if (Bc(c) && !o) throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);
				let l = Bc(c) ? c.join("/") : c;
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
function ou(e, t) {
	let n = 0;
	for (; n < e.length && n < t.length;) {
		let r = t[n] - e[n];
		if (r) return r;
		n++;
	}
	return e.length < t.length ? e.length === 1 && e[0] === ru.Static + ru.Segment ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === ru.Static + ru.Segment ? 1 : -1 : 0;
}
function su(e, t) {
	let n = 0, r = e.score, i = t.score;
	for (; n < r.length && n < i.length;) {
		let e = ou(r[n], i[n]);
		if (e) return e;
		n++;
	}
	if (Math.abs(i.length - r.length) === 1) {
		if (cu(r)) return 1;
		if (cu(i)) return -1;
	}
	return i.length - r.length;
}
function cu(e) {
	let t = e[e.length - 1];
	return e.length > 0 && t[t.length - 1] < 0;
}
var lu = {
	strict: !1,
	end: !0,
	sensitive: !1
};
function uu(e, t, n) {
	let r = Y(au(eu(e.path), n), {
		record: e,
		parent: t,
		children: [],
		alias: []
	});
	return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function du(e, t) {
	let n = [], r = /* @__PURE__ */ new Map();
	t = Vc(lu, t);
	function i(e) {
		return r.get(e);
	}
	function a(e, n, r) {
		let i = !r, s = pu(e);
		s.aliasOf = r && r.record;
		let l = Vc(t, e), u = [s];
		if ("alias" in e) {
			let t = typeof e.alias == "string" ? [e.alias] : e.alias;
			for (let e of t) u.push(pu(Y({}, s, {
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
			if (d = uu(t, n, l), r ? r.alias.push(d) : (f ||= d, f !== d && f.alias.push(d), i && e.name && !hu(d) && o(e.name)), yu(d) && c(d), s.children) {
				let e = s.children;
				for (let t = 0; t < e.length; t++) a(e[t], d, r && r.children[t]);
			}
			r ||= d;
		}
		return f ? () => {
			o(f);
		} : zc;
	}
	function o(e) {
		if (Nl(e)) {
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
		let t = _u(e, n);
		n.splice(t, 0, e), e.record.name && !hu(e) && r.set(e.record.name, e);
	}
	function l(e, t) {
		let i, a = {}, o, s;
		if ("name" in e && e.name) {
			if (i = r.get(e.name), !i) throw Fl(X.MATCHER_NOT_FOUND, { location: e });
			s = i.record.name, a = Y(fu(t.params, i.keys.filter((e) => !e.optional).concat(i.parent ? i.parent.keys.filter((e) => e.optional) : []).map((e) => e.name)), e.params && fu(e.params, i.keys.map((e) => e.name))), o = i.stringify(a);
		} else if (e.path != null) o = e.path, i = n.find((e) => e.re.test(o)), i && (a = i.parse(o), s = i.record.name);
		else {
			if (i = t.name ? r.get(t.name) : n.find((e) => e.re.test(t.path)), !i) throw Fl(X.MATCHER_NOT_FOUND, {
				location: e,
				currentLocation: t
			});
			s = i.record.name, a = Y({}, t.params, e.params), o = i.stringify(a);
		}
		let c = [], l = i;
		for (; l;) c.unshift(l.record), l = l.parent;
		return {
			name: s,
			path: o,
			params: a,
			matched: c,
			meta: gu(c)
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
function fu(e, t) {
	let n = {};
	for (let r of t) r in e && (n[r] = e[r]);
	return n;
}
function pu(e) {
	let t = {
		path: e.path,
		redirect: e.redirect,
		name: e.name,
		meta: e.meta || {},
		aliasOf: e.aliasOf,
		beforeEnter: e.beforeEnter,
		props: mu(e),
		children: e.children || [],
		instances: {},
		leaveGuards: /* @__PURE__ */ new Set(),
		updateGuards: /* @__PURE__ */ new Set(),
		enterCallbacks: {},
		components: "components" in e ? e.components || null : e.component && { default: e.component }
	};
	return Object.defineProperty(t, "mods", { value: {} }), t;
}
function mu(e) {
	let t = {}, n = e.props || !1;
	if ("component" in e) t.default = n;
	else for (let r in e.components) t[r] = typeof n == "object" ? n[r] : n;
	return t;
}
function hu(e) {
	for (; e;) {
		if (e.record.aliasOf) return !0;
		e = e.parent;
	}
	return !1;
}
function gu(e) {
	return e.reduce((e, t) => Y(e, t.meta), {});
}
function _u(e, t) {
	let n = 0, r = t.length;
	for (; n !== r;) {
		let i = n + r >> 1;
		su(e, t[i]) < 0 ? r = i : n = i + 1;
	}
	let i = vu(e);
	return i && (r = t.lastIndexOf(i, r - 1)), r;
}
function vu(e) {
	let t = e;
	for (; t = t.parent;) if (yu(t) && su(e, t) === 0) return t;
}
function yu({ record: e }) {
	return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function bu(e) {
	let t = Wn(Hl), n = Wn(Ul), r = K(() => {
		let n = F(e.to);
		return t.resolve(n);
	}), i = K(() => {
		let { matched: e } = r.value, { length: t } = e, i = e[t - 1], a = n.matched;
		if (!i || !a.length) return -1;
		let o = a.findIndex(ml.bind(null, i));
		if (o > -1) return o;
		let s = Tu(e[t - 2]);
		return t > 1 && Tu(i) === s && a[a.length - 1].path !== s ? a.findIndex(ml.bind(null, e[t - 2])) : o;
	}), a = K(() => i.value > -1 && wu(n.params, r.value.params)), o = K(() => i.value > -1 && i.value === n.matched.length - 1 && hl(n.params, r.value.params));
	function s(n = {}) {
		if (Cu(n)) {
			let n = t[F(e.replace) ? "replace" : "push"](F(e.to)).catch(zc);
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
function xu(e) {
	return e.length === 1 ? e[0] : e;
}
var Su = /* @__PURE__ */ ir({
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
	useLink: bu,
	setup(e, { slots: t }) {
		let n = /* @__PURE__ */ A(bu(e)), { options: r } = Wn(Hl), i = K(() => ({
			[Eu(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
			[Eu(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
		}));
		return () => {
			let r = t.default && xu(t.default(n));
			return e.custom ? r : za("a", {
				"aria-current": n.isExactActive ? e.ariaCurrentValue : null,
				href: n.href,
				onClick: n.navigate,
				class: i.value
			}, r);
		};
	}
});
function Cu(e) {
	if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && (e.button === void 0 || e.button === 0)) {
		if (e.currentTarget && e.currentTarget.getAttribute) {
			let t = e.currentTarget.getAttribute("target");
			if (/\b_blank\b/i.test(t)) return;
		}
		return e.preventDefault && e.preventDefault(), !0;
	}
}
function wu(e, t) {
	for (let n in t) {
		let r = t[n], i = e[n];
		if (typeof r == "string") {
			if (r !== i) return !1;
		} else if (!Bc(i) || i.length !== r.length || r.some((e, t) => e.valueOf() !== i[t].valueOf())) return !1;
	}
	return !0;
}
function Tu(e) {
	return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
var Eu = (e, t, n) => e ?? t ?? n, Du = /* @__PURE__ */ ir({
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
		let r = Wn(Wl), i = K(() => e.route || r.value), a = Wn(Vl, 0), o = K(() => {
			let e = F(a), { matched: t } = i.value, n;
			for (; (n = t[e]) && !n.components;) e++;
			return e;
		}), s = K(() => i.value.matched[o.value]);
		Un(Vl, K(() => o.value + 1)), Un(Bl, s), Un(Wl, i);
		let c = /* @__PURE__ */ N();
		return L(() => [
			c.value,
			s.value,
			e.name
		], ([e, t, n], [r, i, a]) => {
			t && (t.instances[n] = e, i && i !== t && e && e === r && (t.leaveGuards.size || (t.leaveGuards = i.leaveGuards), t.updateGuards.size || (t.updateGuards = i.updateGuards))), !e || !t || i && ml(t, i) && r || (t.enterCallbacks[n] || []).forEach((t) => t(e));
		}, { flush: "post" }), () => {
			let r = i.value, a = e.name, o = s.value, l = o && o.components[a];
			if (!l) return Ou(n.default, {
				Component: l,
				route: r
			});
			let u = o.props[a], d = za(l, Y({}, u ? u === !0 ? r.params : typeof u == "function" ? u(r) : u : null, t, {
				onVnodeUnmounted: (e) => {
					e.component.isUnmounted && (o.instances[a] = null);
				},
				ref: c
			}));
			return Ou(n.default, {
				Component: d,
				route: r
			}) || d;
		};
	}
});
function Ou(e, t) {
	if (!e) return null;
	let n = e(t);
	return n.length === 1 ? n[0] : n;
}
var ku = Du;
function Au(e) {
	let t = du(e.routes, e), n = e.parseQuery || Ll, r = e.stringifyQuery || Rl, i = e.history, a = Gl(), o = Gl(), s = Gl(), c = /* @__PURE__ */ P(yl), l = yl;
	Fc && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
	let u = Rc.bind(null, (e) => "" + e), d = Rc.bind(null, sl), f = Rc.bind(null, cl);
	function p(e, n) {
		let r, i;
		return Nl(e) ? (r = t.getRecordMatcher(e), i = n) : i = e, t.addRoute(i, r);
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
		if (a = Y({}, a || c.value), typeof e == "string") {
			let r = dl(n, e, a.path), o = t.resolve({ path: r.path }, a), s = i.createHref(r.fullPath);
			return Y(r, o, {
				params: f(o.params),
				hash: cl(r.hash),
				redirectedFrom: void 0,
				href: s
			});
		}
		let o;
		if (e.path != null) o = Y({}, e, { path: dl(n, e.path, a.path).path });
		else {
			let t = Y({}, e.params);
			for (let e in t) t[e] ?? delete t[e];
			o = Y({}, e, { params: d(t) }), a.params = d(a.params);
		}
		let s = t.resolve(o, a), l = e.hash || "";
		s.params = u(f(s.params));
		let p = fl(r, Y({}, e, {
			hash: rl(l),
			path: s.path
		})), m = i.createHref(p);
		return Y({
			fullPath: p,
			hash: l,
			query: r === Rl ? zl(e.query) : e.query || {}
		}, s, {
			redirectedFrom: void 0,
			href: m
		});
	}
	function v(e) {
		return typeof e == "string" ? dl(n, e, c.value.path) : Y({}, e);
	}
	function y(e, t) {
		if (l !== e) return Fl(X.NAVIGATION_CANCELLED, {
			from: t,
			to: e
		});
	}
	function b(e) {
		return S(e);
	}
	function x(e) {
		return b(Y(v(e), { replace: !0 }));
	}
	function ee(e, t) {
		let n = e.matched[e.matched.length - 1];
		if (n && n.redirect) {
			let { redirect: r } = n, i = typeof r == "function" ? r(e, t) : r;
			return typeof i == "string" && (i = i.includes("?") || i.includes("#") ? i = v(i) : { path: i }, i.params = {}), Y({
				query: e.query,
				hash: e.hash,
				params: i.path == null ? e.params : {}
			}, i);
		}
	}
	function S(e, t) {
		let n = l = _(e), i = c.value, a = e.state, o = e.force, s = e.replace === !0, u = ee(n, i);
		if (u) return S(Y(v(u), {
			state: typeof u == "object" ? Y({}, a, u.state) : a,
			force: o,
			replace: s
		}), t || n);
		let d = n;
		d.redirectedFrom = t;
		let f;
		return !o && pl(r, i, n) && (f = Fl(X.NAVIGATION_DUPLICATED, {
			to: d,
			from: i
		}), de(i, i, !0, !1)), (f ? Promise.resolve(f) : ne(d, i)).catch((e) => Il(e) ? Il(e, X.NAVIGATION_GUARD_REDIRECT) ? e : ue(e) : ce(e, d, i)).then((e) => {
			if (e) {
				if (Il(e, X.NAVIGATION_GUARD_REDIRECT)) return S(Y({ replace: s }, v(e.to), {
					state: typeof e.to == "object" ? Y({}, a, e.to.state) : a,
					force: o
				}), t || d);
			} else e = w(d, i, !0, s, a);
			return re(d, i, e), e;
		});
	}
	function C(e, t) {
		let n = y(e, t);
		return n ? Promise.reject(n) : Promise.resolve();
	}
	function te(e) {
		let t = pe.values().next().value;
		return t && typeof t.runWithContext == "function" ? t.runWithContext(e) : e();
	}
	function ne(e, t) {
		let n, [r, i, s] = Jl(e, t);
		n = ql(r.reverse(), "beforeRouteLeave", e, t);
		for (let i of r) i.leaveGuards.forEach((r) => {
			n.push(Kl(r, e, t));
		});
		let c = C.bind(null, e, t);
		return n.push(c), he(n).then(() => {
			n = [];
			for (let r of a.list()) n.push(Kl(r, e, t));
			return n.push(c), he(n);
		}).then(() => {
			n = ql(i, "beforeRouteUpdate", e, t);
			for (let r of i) r.updateGuards.forEach((r) => {
				n.push(Kl(r, e, t));
			});
			return n.push(c), he(n);
		}).then(() => {
			n = [];
			for (let r of s) if (r.beforeEnter) {
				if (Bc(r.beforeEnter)) for (let i of r.beforeEnter) n.push(Kl(i, e, t));
				else n.push(Kl(r.beforeEnter, e, t));
			}
			return n.push(c), he(n);
		}).then(() => (e.matched.forEach((e) => e.enterCallbacks = {}), n = ql(s, "beforeRouteEnter", e, t, te), n.push(c), he(n))).then(() => {
			n = [];
			for (let r of o.list()) n.push(Kl(r, e, t));
			return n.push(c), he(n);
		}).catch((e) => Il(e, X.NAVIGATION_CANCELLED) ? e : Promise.reject(e));
	}
	function re(e, t, n) {
		s.list().forEach((r) => te(() => r(e, t, n)));
	}
	function w(e, t, n, r, a) {
		let o = y(e, t);
		if (o) return o;
		let s = t === yl, l = Fc ? history.state : {};
		n && (r || s ? i.replace(e.fullPath, Y({ scroll: s && l && l.scroll }, a)) : i.push(e.fullPath, a)), c.value = e, de(e, t, n, s), ue();
	}
	let ie;
	function ae() {
		ie ||= i.listen((e, t, n) => {
			if (!me.listening) return;
			let r = _(e), a = ee(r, me.currentRoute.value);
			if (a) {
				S(Y(a, {
					replace: !0,
					force: !0
				}), r).catch(zc);
				return;
			}
			l = r;
			let o = c.value;
			Fc && Al(Ol(o.fullPath, n.delta), El()), ne(r, o).catch((e) => Il(e, X.NAVIGATION_ABORTED | X.NAVIGATION_CANCELLED) ? e : Il(e, X.NAVIGATION_GUARD_REDIRECT) ? (S(Y(v(e.to), { force: !0 }), r).then((e) => {
				Il(e, X.NAVIGATION_ABORTED | X.NAVIGATION_DUPLICATED) && !n.delta && n.type === bl.pop && i.go(-1, !1);
			}).catch(zc), Promise.reject()) : (n.delta && i.go(-n.delta, !1), ce(e, r, o))).then((e) => {
				e ||= w(r, o, !1), e && (n.delta && !Il(e, X.NAVIGATION_CANCELLED) ? i.go(-n.delta, !1) : n.type === bl.pop && Il(e, X.NAVIGATION_ABORTED | X.NAVIGATION_DUPLICATED) && i.go(-1, !1)), re(r, o, e);
			}).catch(zc);
		});
	}
	let T = Gl(), oe = Gl(), se;
	function ce(e, t, n) {
		ue(e);
		let r = oe.list();
		return r.length ? r.forEach((r) => r(e, t, n)) : console.error(e), Promise.reject(e);
	}
	function le() {
		return se && c.value !== yl ? Promise.resolve() : new Promise((e, t) => {
			T.add([e, t]);
		});
	}
	function ue(e) {
		return se || (se = !e, ae(), T.list().forEach(([t, n]) => e ? n(e) : t()), T.reset()), e;
	}
	function de(t, n, r, i) {
		let { scrollBehavior: a } = e;
		if (!Fc || !a) return Promise.resolve();
		let o = !r && jl(Ol(t.fullPath, 0)) || (i || !r) && history.state && history.state.scroll || null;
		return Dn().then(() => a(t, n, o)).then((e) => e && Dl(e)).catch((e) => ce(e, t, n));
	}
	let fe = (e) => i.go(e), E, pe = /* @__PURE__ */ new Set(), me = {
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
			e.component("RouterLink", Su), e.component("RouterView", ku), e.config.globalProperties.$router = me, Object.defineProperty(e.config.globalProperties, "$route", {
				enumerable: !0,
				get: () => F(c)
			}), Fc && !E && c.value === yl && (E = !0, b(i.location).catch((e) => {}));
			let t = {};
			for (let e in yl) Object.defineProperty(t, e, {
				get: () => c.value[e],
				enumerable: !0
			});
			e.provide(Hl, me), e.provide(Ul, /* @__PURE__ */ Wt(t)), e.provide(Wl, c);
			let n = e.unmount;
			pe.add(e), e.unmount = function() {
				pe.delete(e), pe.size < 1 && (l = yl, ie && ie(), ie = null, c.value = yl, E = !1, se = !1), n();
			};
		}
	};
	function he(e) {
		return e.reduce((e, t) => e.then(() => te(t)), Promise.resolve());
	}
	return me;
}
function ju() {
	return Wn(Hl);
}
function Mu(e) {
	return Wn(Ul);
}
var Nu = Au({
	history: Yl(),
	routes: [{
		path: "/:view(.*)*",
		name: "legacy-view",
		component: { render: () => null }
	}]
}), Pu = /* @__PURE__ */ new Set([
	"projects",
	"saved",
	"myideas",
	"myprompts",
	"events",
	"tracks",
	"artists"
]);
function Fu(e, t = null) {
	let n = typeof e == "string" && e ? e : "home";
	return n === "producer" && t?.kind === "production" && typeof t.id == "string" && /^[a-zA-Z0-9_-]{1,128}$/.test(t.id) ? "/producer/detail/" + encodeURIComponent(t.id) : n === "tracks" && t?.kind === "track" ? "/account/tracks/detail" : n === "detail" ? "/catalog/detail" : Pu.has(n) ? "/account/" + n : "/" + encodeURIComponent(n);
}
function Iu(e) {
	if (e === "/catalog/detail") return "catalog";
	if (e === "/producer/detail" || e.startsWith("/producer/detail/")) return "producer";
	if (e.startsWith("/account/")) return "account";
	try {
		return decodeURIComponent(e.slice(1)) || "home";
	} catch {
		return "home";
	}
}
var Lu = null, Ru = Promise.resolve(), zu = "replace", Bu = 0, Vu = 0, Hu = [], Uu = [], Z = -1, Wu = /* @__PURE__ */ P(0), Gu = /* @__PURE__ */ Gt(Wu);
function Ku() {
	Wu.value++;
}
var qu = /* @__PURE__ */ new Set([
	"overview",
	"ideas",
	"prompts",
	"artists"
]);
function Ju(e) {
	return e?.kind !== "genre" || typeof e.id != "string" || !/^[a-z0-9-]{1,100}$/.test(e.id) || !qu.has(e.tab) ? null : Object.freeze({
		kind: "genre",
		id: e.id,
		tab: e.tab
	});
}
function Yu(e) {
	return e?.kind !== "track" || typeof e.id != "string" || !/^[a-zA-Z0-9_-]{1,128}$/.test(e.id) ? null : Object.freeze({
		kind: "track",
		id: e.id
	});
}
function Xu(e) {
	return Ju(e) || Yu(e) || (e?.kind === "production" && typeof e.id == "string" && /^[a-zA-Z0-9_-]{1,128}$/.test(e.id) ? Object.freeze({
		kind: "production",
		id: e.id
	}) : null);
}
function Zu(e, t, n = null) {
	let r = Xu(n);
	if (Z < 0) Hu = [e], Uu = [r], Z = 0;
	else if (t === "push") Hu = Hu.slice(0, Z + 1), Uu = Uu.slice(0, Z + 1), Hu.push(e), Uu.push(r), Z = Hu.length - 1;
	else {
		let t = Hu[Z] === e ? Uu[Z] : null;
		Hu[Z] = e, Uu[Z] = r || t || null;
	}
	Ku();
}
function Qu(e) {
	let t = e === "back" ? -1 : +(e === "forward"), n = Z + t;
	return t && n >= 0 && n < Hu.length ? Object.freeze({
		path: Hu[n],
		context: Uu[n] || null,
		index: n,
		offset: t
	}) : null;
}
function $u(e) {
	return Qu(e);
}
function ed(e) {
	if (typeof e != "string" || !/^\/[a-z][a-z0-9-]*$/i.test(e)) return null;
	try {
		return decodeURIComponent(e.slice(1));
	} catch {
		return null;
	}
}
function td(e, { historyMode: t = "replace", context: n = null, source: r = "legacy" } = {}) {
	let i = Xu(n), a = Fu(e, i);
	if (a === Lu) return i && (Ru = Ru.then(() => {
		Nu.currentRoute.value.path === a && Z >= 0 && Hu[Z] === a && (Uu[Z] = i, Ku());
	})), Ru;
	Lu = a;
	let o = t === "push" ? "push" : "replace";
	return Ru = Ru.then(async () => {
		Nu.currentRoute.value.path === a ? i && Z >= 0 && (Uu[Z] = i, Ku()) : await Nu[o](a) || (Zu(a, o, i), zu = o, o === "push" && !i && r === "menu" && Bu++, o === "push" && !i && r === "shortcut" && Vu++);
	}).catch((e) => {
		console.warn("[SUNOBOOM] Vue Router memory navigation failed; legacy routing remains active.", e);
	}), Ru;
}
function nd() {
	return Ru;
}
function rd(e) {
	let t = Ru.then(() => {
		let t = Qu(e);
		return t ? new Promise((n) => {
			let r = !1, i = () => {}, a;
			function o(o) {
				r || (r = !0, i(), clearTimeout(a), o && (Z = t.index, Lu = t.path, zu = e, Ku()), n(o));
			}
			i = Nu.afterEach((e, n, r) => o(!r && e.path === t.path)), a = setTimeout(() => o(!1), 2500), Nu.go(t.offset);
		}) : !1;
	}).catch((e) => (console.warn("[SUNOBOOM] Vue memory history traversal failed; legacy navigation retained.", e), !1));
	return Ru = t.then(() => void 0), t;
}
function id() {
	let e = Nu.currentRoute.value;
	return Object.freeze({
		path: e.path,
		name: e.name,
		active: Iu(e.path),
		transition: zu,
		menuPushes: Bu,
		shortcutPushes: Vu,
		canGoBack: Z > 0,
		canGoForward: Z >= 0 && Z < Hu.length - 1,
		historyDepth: Hu.length,
		historyPosition: Z,
		context: Uu[Z] || null
	});
}
// src/vue/navigation/route-state.js
var ad = /* @__PURE__ */ P(Object.freeze({
	route: "home",
	active: "home",
	revision: 0
})), od = /* @__PURE__ */ Gt(ad);
function sd(e, { historyMode: t = "replace", context: n = null, source: r = "legacy" } = {}) {
	let i = typeof e == "string" && e ? e : "home";
	if (td(i, {
		historyMode: t,
		context: n,
		source: r
	}), i === ad.value.route) return ad.value;
	let a = Object.freeze({
		route: i,
		active: Nc(i),
		revision: ad.value.revision + 1
	});
	return ad.value = a, a;
}
// src/vue/state/appearance-model.js
function cd(e) {
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
var ld = /* @__PURE__ */ new Set([
	"all",
	"",
	"name",
	"family",
	"artist",
	"description"
]), ud = /* @__PURE__ */ new Set([
	"overview",
	"ideas",
	"prompts",
	"artists"
]), dd = /^[a-z0-9][a-z0-9-]{0,99}$/;
function fd({ query: e, results: t, total: n, mode: r } = {}) {
	return typeof e != "string" || e.length > 160 || !Number.isSafeInteger(n) || n < 0 || !Number.isSafeInteger(t) || t < 0 || t > n || !ld.has(r) ? null : Object.freeze({
		query: e,
		results: t,
		total: n,
		mode: r
	});
}
function pd(e, t) {
	return typeof e != "string" || !dd.test(e) || !ud.has(t) ? null : Object.freeze({
		genreId: e,
		tab: t
	});
}
function md({ tree: e, selected: t, zoom: n, query: r } = {}) {
	return typeof e != "string" || !dd.test(e) || typeof t != "string" || !dd.test(t) || typeof n != "number" || !Number.isFinite(n) || n < .75 || n > 1.5 || typeof r != "string" || r.length > 160 ? null : Object.freeze({
		tree: e,
		selected: t,
		zoom: n,
		query: r
	});
}
// src/vue/state/production-ui-model.js
var hd = /^[a-z0-9][a-z0-9-]{0,99}$/, gd = (e, t, n) => Number.isSafeInteger(e) && e >= t && e <= n;
function _d(e) {
	let t = e?.settings, n = e?.prompt, r = t?.genre;
	return typeof r != "string" || !hd.test(r) || !gd(t?.tempo, 65, 200) || typeof n != "string" || n.length > 1e3 ? null : Object.freeze({
		ready: !0,
		genreId: r,
		tempo: t.tempo,
		promptLength: n.length
	});
}
function vd(e) {
	let t = e?.rows, n = e?.prompt;
	return !Array.isArray(t) || t.length < 2 || t.length > 4 || !gd(e?.tempo, 65, 200) || typeof n != "string" || n.length > 1e3 || !t.every((e) => typeof e?.id == "string" && hd.test(e.id) && gd(e.weight, 0, 100)) || t.reduce((e, t) => e + t.weight, 0) !== 100 || new Set(t.map((e) => e.id)).size !== t.length ? null : Object.freeze({
		ready: !0,
		genreCount: t.length,
		tempo: e.tempo,
		promptLength: n.length
	});
}
function yd(e) {
	let t = e?.report;
	return !["manual", "studio"].includes(e?.mode) || !gd(t?.score, 0, 100) || !gd(t?.length, 0, 1e5) ? null : Object.freeze({
		ready: !0,
		mode: e.mode,
		score: t.score,
		checkedLength: t.length
	});
}
function bd(e) {
	let t = e?.blocks;
	if (!Array.isArray(t) || t.length > 64 || !t.every((e) => e && [
		2,
		4,
		8,
		12,
		16,
		24,
		32
	].includes(e.bars) && gd(e.energy, 1, 5) && typeof e.hasTransition == "boolean")) return null;
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
var xd = (e, t, n) => Number.isSafeInteger(e) && e >= t && e <= n, Sd = (e) => typeof e == "boolean";
function Cd(e) {
	return !xd(e?.count, 0, 150) || !xd(e?.currentIndex, -1, e.count - 1) || e.count === 0 && e.currentIndex !== -1 || !Sd(e.playing) || e.playing && e.currentIndex === -1 || !Sd(e.shuffle) || ![
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
function wd(e) {
	let t = e?.files?.A?.ready, n = e?.files?.B?.ready;
	return !["player", "compare"].includes(e?.mode) || !["A", "B"].includes(e?.active) || !Sd(e.playing) || !Sd(e.loop) || !Sd(e.hasBoth) || !Sd(t) || !Sd(n) || e.hasBoth !== (t && n) || e.playing && !(e.active === "A" ? t : n) ? null : Object.freeze({
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
var Td = (e) => Number.isSafeInteger(e) && e >= 0 && e <= 1e4, Ed = Object.freeze([
	"all",
	"idea",
	"lyrics",
	"generation",
	"selection",
	"mastering",
	"publisher",
	"released"
]);
function Dd(e) {
	let t = e?.records;
	return !Array.isArray(t) || !Td(t.length) || typeof e.hasRecords != "boolean" || e.hasRecords !== t.length > 0 || !t.every((e) => e && Number.isSafeInteger(e.done) && e.done >= 0 && e.total === 6 && e.done <= e.total && e.percent === Math.round(e.done / e.total * 100)) ? null : Object.freeze({
		ready: !0,
		workCount: t.length,
		finishedCount: t.filter((e) => e.done === e.total).length,
		hasSelection: t.some((t) => typeof t.id == "string" && t.id === e.selectedId)
	});
}
function Od(e) {
	let t = e?.records;
	return !Array.isArray(t) || !Td(t.length) || typeof e.hasRecords != "boolean" || !Ed.includes(e.active) || t.length > 0 && !e.hasRecords || e.active === "all" && e.hasRecords !== t.length > 0 ? null : Object.freeze({
		ready: !0,
		visibleCount: t.length,
		hasRecords: e.hasRecords,
		filter: e.active
	});
}
function kd(e) {
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
function Ad(e) {
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
var jd = (e, t = 1e4) => Number.isSafeInteger(e) && e >= 0 && e <= t, Md = (e) => typeof e == "boolean";
function Nd(e) {
	let t = e?.items;
	return !jd(e?.total) || !Array.isArray(t) || !jd(t.length) || t.length > e.total || !t.every((e) => e && Md(e.hasCover)) ? null : Object.freeze({
		ready: !0,
		totalCount: e.total,
		visibleCount: t.length,
		localCoverCount: t.filter((e) => e.hasCover).length
	});
}
function Pd(e) {
	let t = e?.versions;
	return !Array.isArray(t) || !jd(t.length, 1e3) || !Md(e.hasAudio) || !Md(e.hasCover) || !Md(e.hasPlayableAudio) || !Md(e.compareOpen) || e.compareOpen && t.length < 2 || !t.every((e) => e && Md(e.isMain) && Md(e.isPlaying)) || t.filter((e) => e.isMain).length > 1 || t.filter((e) => e.isPlaying).length > 1 ? null : Object.freeze({
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
var Fd = (e, t = 1e4) => Number.isSafeInteger(e) && e >= 0 && e <= t;
function Id(e, t) {
	return !Array.isArray(e?.artists) || !Fd(e.artists.length) || !Fd(t) || t > e.artists.length || !Fd(e.dnaCount) ? null : Object.freeze({
		ready: !0,
		artistCount: e.artists.length,
		visibleCount: t,
		dnaCount: e.dnaCount
	});
}
function Ld(e) {
	let t = e?.profiles, n = e?.detail;
	return !Array.isArray(t) || !Fd(t.length) || n !== null && (!n || typeof n != "object") || n !== null && (!Array.isArray(n.related) || !Fd(n.related.length) || !Array.isArray(n.forbids) || !Fd(n.forbids.length, 32) || !Array.isArray(n.facts) || !Fd(n.facts.length, 32) || !Array.isArray(n.textFields) || !Fd(n.textFields.length, 32)) ? null : Object.freeze({
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
var Rd = (e) => Number.isSafeInteger(e) && e >= 0 && e <= 1e4, zd = Object.freeze([
	"genres",
	"ideas",
	"own",
	"generated",
	"prompts"
]);
function Bd(e) {
	if (!e || !zd.every((t) => Array.isArray(e[t]) && Rd(e[t].length) && e[t].every((e) => typeof e == "object" && !!e))) return null;
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
var Vd = (e, t) => typeof e == "string" && e.length <= t;
function Hd(e) {
	return !e || !Vd(e.title, 100) || !Vd(e.genre, 128) || !Vd(e.text, 3e3) || !Vd(e.hook, 240) ? null : Object.freeze({
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
function Ud(e, t) {
	return !e || typeof t != "boolean" || !Vd(e.title, 100) || !Vd(e.genre, 128) || !Vd(e.text, 1e3) ? null : Object.freeze({
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
function Wd(e) {
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
function Gd(e) {
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
function Kd(e) {
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
var qd = /* @__PURE__ */ new Set([
	"smart",
	"rules",
	"manual"
]), Jd = /* @__PURE__ */ new Set([
	"auto",
	"original",
	"tagged"
]), Yd = /* @__PURE__ */ new Set([
	"minimal",
	"balanced",
	"detailed"
]), Xd = [
	"melisma",
	"falsetto",
	"harmonies",
	"noWhisper",
	"noRasp"
];
function Zd(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) return null;
	let t = e.prefs;
	if (!t || typeof t != "object" || Array.isArray(t) || !qd.has(t.mode) || !Jd.has(t.source) || !Yd.has(t.density) || !Number.isSafeInteger(t.intensity) || t.intensity < 1 || t.intensity > 5 || Xd.some((e) => typeof t[e] != "boolean") || typeof e.busy != "boolean") return null;
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
var Qd = Object.freeze([]), $d = Object.freeze({
	ideaCount: 0,
	promptCount: 0,
	eventCount: 0,
	revision: 0
}), ef = (e) => Number.isSafeInteger(e) && e >= 0 ? e : 0, Q = jc("sunoboom-legacy-ui", () => {
	let e = od, t = /* @__PURE__ */ P(Qd), n = /* @__PURE__ */ P($d), r = /* @__PURE__ */ P(Object.freeze({
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
		let t = fd(e);
		if (!t) return !1;
		let n = i.value;
		return n.query === t.query && n.results === t.results && n.total === t.total && n.mode === t.mode ? !1 : (i.value = Object.freeze({
			...t,
			revision: n.revision + 1
		}), !0);
	}
	function c(e, t) {
		let n = pd(e, t);
		if (!n) return !1;
		let r = a.value;
		return r.genreId === n.genreId && r.tab === n.tab ? !1 : (a.value = Object.freeze({
			...n,
			revision: r.revision + 1
		}), !0);
	}
	function l(e) {
		let t = md(e);
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
	})), ee = /* @__PURE__ */ P(Object.freeze({
		ready: !1,
		artistCount: 0,
		visibleCount: 0,
		dnaCount: 0,
		revision: 0
	})), S = /* @__PURE__ */ P(Object.freeze({
		ready: !1,
		profileCount: 0,
		detailOpen: !1,
		linkedTrackCount: 0,
		restrictionsCount: 0,
		factCount: 0,
		sectionCount: 0,
		revision: 0
	})), C = /* @__PURE__ */ P(Object.freeze({
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
	})), w = /* @__PURE__ */ P(Object.freeze({
		ready: !1,
		analyzed: !1,
		rowCount: 0,
		previewStanzaCount: 0,
		stressMarkCount: 0,
		suggestionCount: 0,
		revision: 0
	})), ie = /* @__PURE__ */ P(Object.freeze({
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
	let oe = (e) => T(u, _d, e), se = (e) => T(d, vd, e), ce = (e) => T(f, yd, e), le = (e) => T(p, bd, e), ue = (e) => T(m, Cd, e), de = (e) => T(h, wd, e), fe = (e) => T(g, Dd, e), E = (e) => T(_, Od, e), pe = (e) => T(v, kd, e), me = (e) => T(y, Ad, e), he = (e) => T(b, Nd, e), ge = (e) => T(x, Pd, e), D = (e, t) => T(ee, (e) => Id(e, t), e), _e = (e) => T(S, Ld, e), ve = (e) => T(C, Bd, e), ye = (e) => T(te, Hd, e), be = (e, t) => T(ne, (e) => Ud(e, t), e), xe = (e) => T(re, Wd, e), Se = (e) => T(w, Gd, e), Ce = (e) => T(ie, Kd, e);
	function we() {
		let e = ie.value;
		return e.ready ? (ie.value = Object.freeze({
			ready: !1,
			occurrenceCount: 0,
			distinctCount: 0,
			visibleCount: 0,
			revision: e.revision + 1
		}), !0) : !1;
	}
	let Te = (e) => T(ae, Zd, e);
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
	function O(e) {
		if (!Array.isArray(e)) return !1;
		let n = Object.freeze(e.filter((e) => e && typeof e.id == "string" && e.id).map((e) => Object.freeze({
			id: e.id,
			label: e.label,
			shortLabel: e.shortLabel,
			iconHtml: e.iconHtml
		}))), r = t.value;
		return r.length === n.length && r.every((e, t) => e.id === n[t].id && e.label === n[t].label && e.shortLabel === n[t].shortLabel && e.iconHtml === n[t].iconHtml) ? !1 : (t.value = n, !0);
	}
	function De(e) {
		if (!e || typeof e != "object") return !1;
		let t = {
			ideaCount: ef(e.ideaCount),
			promptCount: ef(e.promptCount),
			eventCount: ef(e.eventCount)
		}, r = n.value;
		return r.ideaCount === t.ideaCount && r.promptCount === t.promptCount && r.eventCount === t.eventCount ? !1 : (n.value = Object.freeze({
			...t,
			revision: r.revision + 1
		}), !0);
	}
	function Oe(e) {
		let t = cd(e);
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
		artistManagerSummary: ee,
		artistDnaSummary: S,
		librarySummary: C,
		ideaDraftSummary: te,
		promptDraftSummary: ne,
		poetrySourceSummary: re,
		poetryAnalysisSummary: w,
		poetryAmbiguitySummary: ie,
		performanceTagsSummary: ae,
		publishNavigation: O,
		publishDashboardStats: De,
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
		publishPassportListSummary: E,
		publishMasterDetailSummary: pe,
		publishPassportDetailSummary: me,
		publishSongCollectionSummary: he,
		publishSongDetailSummary: ge,
		publishArtistManagerSummary: D,
		publishArtistDnaSummary: _e,
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
}), tf = {
	key: 0,
	class: "sub",
	"data-sb-vue-idea-library-recap": ""
}, nf = { class: "section-title" }, rf = {
	key: 0,
	class: "btn ghost small",
	"data-action": "nav",
	"data-nav": "ideas"
}, af = ["data-idea-collection"], of = { class: "idea-badge" }, sf = {
	key: 0,
	class: "generator-story"
}, cf = {
	key: 1,
	class: "song-has-lyrics"
}, lf = { key: 0 }, uf = {
	key: 3,
	class: "generator-detail"
}, df = { class: "actions" }, ff = [
	"data-action",
	"data-id",
	"data-i",
	"aria-label"
], pf = ["innerHTML"], mf = {
	key: 1,
	class: "empty"
}, hf = ["innerHTML"], gf = {
	__name: "IdeaCollections",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = Q();
		return (n, r) => (V(), H(B, null, [F(t).librarySummary.ready ? (V(), H("p", tf, " Последний просмотр библиотеки: " + O(F(t).librarySummary.totalIdeaCount) + " идей ", 1)) : G("", !0), (V(!0), H(B, null, z(e.model.groups, (t) => (V(), H(B, { key: t.kind }, [U("div", nf, [U("h2", null, O(t.title) + " (" + O(t.items.length) + ")", 1), t.kind === "generated" ? (V(), H("button", rf, "Создать идеи →")) : G("", !0)]), t.items.length ? (V(), H("div", {
			key: 0,
			class: "idea-grid",
			"data-idea-collection": t.kind
		}, [(V(!0), H(B, null, z(t.items, (n) => (V(), na(kr(t.kind === "academy" ? "div" : "article"), {
			key: n.key,
			class: D(["idea", { "generated-card": t.kind === "generated" }])
		}, {
			default: Vn(() => [
				U("div", of, O(n.badge), 1),
				U("h3", null, O(n.title), 1),
				U("p", null, O(n.pitch), 1),
				t.kind === "generated" ? (V(), H("p", sf, O(n.storyLine), 1)) : G("", !0),
				t.kind === "manual" && n.lyrics ? (V(), H("p", cf, "🎼 Текст песни сохранён · " + O(n.sunoLyrics ? "теги для Suno готовы" : "без разметки"), 1)) : G("", !0),
				n.hook || t.kind === "generated" ? (V(), na(kr(t.kind === "generated" ? "div" : "p"), {
					key: 2,
					class: "generator-hook"
				}, {
					default: Vn(() => [t.kind === "generated" ? (V(), H("span", lf, "ХУК ПРИПЕВА")) : G("", !0), U("strong", null, O(n.hook), 1)]),
					_: 2
				}, 1024)) : G("", !0),
				t.kind === "generated" && n.detail ? (V(), H("p", uf, "Твоя деталь: " + O(n.detail), 1)) : G("", !0),
				U("div", df, [(V(!0), H(B, null, z(n.actions, (t) => (V(), H("button", {
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
				}, null, 8, pf)) : G("", !0), W(O(t.text), 1)], 10, ff))), 128))])
			]),
			_: 2
		}, 1032, ["class"]))), 128))], 8, af)) : (V(), H("div", mf, [
			U("span", {
				"aria-hidden": "true",
				innerHTML: e.model.icons.music
			}, null, 8, hf),
			U("strong", null, O(t.emptyTitle), 1),
			W(O(t.emptyText), 1)
		]))], 64))), 128))], 64));
	}
};
// src/vue/poetry/legacyIdeaCollectionsBridge.js
function _f({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_IDEA_COLLECTIONS, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : J({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-idea-collections"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, gf, { model: n })
	});
}
// src/vue/version-history/version-model.js
function vf(e) {
	return /^\d{4}-\d{2}-\d{2}$/.test(String(e || "")) ? e.slice(8, 10) + "." + e.slice(5, 7) + "." + e.slice(0, 4) : "";
}
var yf = (e) => String(e ?? "").trim().normalize("NFKC").toLocaleLowerCase("ru"), bf = (e, t) => yf(e).includes(t);
function xf(e) {
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
function Sf(e, { tab: t = "major", size: n = "all", search: r = "" } = {}) {
	let i = Array.isArray(e) ? e : [], a = xf(i), o = yf(r);
	if (o) {
		let e = a.filter((e) => o === "v" + e.major || o === e.major || bf("мажорная версия " + e.major, o)), t = i.filter((e) => bf("v" + e[0] + " " + e[0] + " " + e[1] + " " + vf(e[2]), o));
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
var Cf = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, wf = {
	class: "sb-vh-vue-layout",
	"data-sb-vue-version-history": ""
}, Tf = { class: "sb-vh-header" }, Ef = [
	"aria-selected",
	"tabindex",
	"onClick"
], Df = [
	"aria-selected",
	"tabindex",
	"onClick"
], Of = {
	id: "sb-vh-legend",
	class: "sb-vh-legend"
}, kf = { class: "sb-vh-controls" }, Af = {
	class: "sb-vh-search-label",
	for: "sb-vue-vh-search"
}, jf = {
	id: "sb-vh-subcount",
	class: "sb-vh-count",
	role: "status"
}, Mf = {
	key: 0,
	class: "sb-vh-search-all"
}, Nf = {
	key: 0,
	class: "sb-vh-search-group"
}, Pf = { class: "sb-vh-release-no" }, Ff = { class: "sb-vh-release-text" }, If = { class: "sb-vh-version-range" }, Lf = { class: "sb-vh-release-list" }, Rf = { class: "sb-vh-release-no" }, zf = { class: "sb-vh-release-text" }, Bf = { class: "sb-vh-search-meta" }, Vf = ["datetime"], Hf = { class: "sb-vh-search-tag" }, Uf = {
	key: 1,
	class: "sb-vh-empty"
}, Wf = {
	key: 2,
	class: "sb-vh-release-list sb-vh-major-list"
}, Gf = { class: "sb-vh-release-no" }, Kf = { class: "sb-vh-release-text" }, qf = { class: "sb-vh-version-range" }, Jf = {
	key: 3,
	class: "sb-vh-release-list"
}, Yf = { class: "sb-vh-release-no" }, Xf = { class: "sb-vh-release-text" }, Zf = { class: "sb-vh-search-meta" }, Qf = ["datetime"], $f = {
	key: 0,
	class: "sb-vh-search-tag"
}, ep = {
	key: 4,
	class: "sb-vh-empty"
}, tp = /*#__PURE__*/ Cf({
	__name: "VersionHistory",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ N("major"), r = /* @__PURE__ */ N("all"), i = /* @__PURE__ */ N(""), a = K(() => Sf(t.model.releases, {
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
			e.preventDefault(), r(t[a]), Dn(() => {
				let e = t.length === 2 ? "#sb-vh-tabs [aria-selected=\"true\"]" : "#sb-vh-minor-tabs [aria-selected=\"true\"]";
				document.querySelector(e)?.focus();
			});
		}
		return R(() => Dn(() => s.value?.focus({ preventScroll: !0 }))), (t, m) => (V(), H("div", wf, [
			U("header", Tf, [U("div", null, [
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
			}, O(e.label), 11, Ef)), 64))], 32),
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
			}, O(e.label), 11, Df)), 64))], 32)) : G("", !0),
			U("p", Of, O(a.value.legend), 1),
			U("div", kf, [U("label", Af, [m[8] ||= U("span", { class: "sb-vh-visually-hidden" }, "Поиск по истории версий", -1), I(U("input", {
				id: "sb-vue-vh-search",
				"onUpdate:modelValue": m[3] ||= (e) => i.value = e,
				type: "search",
				autocomplete: "off",
				placeholder: "Поиск по всем версиям и вкладкам…",
				onInput: l
			}, null, 544), [[q, i.value]])]), U("span", jf, O(a.value.count), 1)]),
			U("div", {
				id: "sb-vh-content",
				ref_key: "content",
				ref: o,
				class: "sb-vh-content",
				role: "tabpanel",
				"aria-labelledby": "sb-vh-tabs"
			}, [a.value.mode === "search" && (a.value.majors.length || a.value.large.length || a.value.small.length) ? (V(), H("div", Mf, [a.value.majors.length ? (V(), H("section", Nf, [U("h3", null, [m[9] ||= W("Мажорные версии ", -1), U("span", null, O(a.value.majors.length), 1)]), (V(!0), H(B, null, z(a.value.majors, (e) => (V(), H("article", {
				key: "major-" + e.major,
				class: "sb-vh-release sb-vh-major-release"
			}, [U("span", Pf, "v" + O(e.major), 1), U("div", Ff, [U("p", null, "Мажорная версия " + O(e.major), 1), U("p", If, " От v" + O(e.items[e.items.length - 1][0]) + " до v" + O(e.items[0][0]), 1)])]))), 128))])) : G("", !0), (V(!0), H(B, null, z([{
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
			}, [U("h3", null, [W(O(e.title) + " ", 1), U("span", null, O(e.entries.length), 1)]), U("div", Lf, [(V(!0), H(B, null, z(e.entries, (t) => (V(), H("article", {
				key: t[0],
				class: "sb-vh-release"
			}, [U("span", Rf, "v" + O(t[0]), 1), U("div", zf, [U("p", null, O(t[1]), 1), U("div", Bf, [U("time", { datetime: t[2] }, O(F(vf)(t[2])), 9, Vf), U("span", Hf, O(e.badge), 1)])])]))), 128))])])), [[$a, e.entries.length]])), 128))])) : a.value.mode === "search" ? (V(), H("p", Uf, " По запросу совпадений нет ни в одном разделе истории. ")) : a.value.mode === "major" ? (V(), H("div", Wf, [(V(!0), H(B, null, z(a.value.majors, (e) => (V(), H("article", {
				key: e.major,
				class: "sb-vh-release sb-vh-major-release"
			}, [U("span", Gf, "v" + O(e.major), 1), U("div", Kf, [
				U("h3", null, "Мажорная версия " + O(e.major), 1),
				U("p", null, "Ветка v" + O(e.major) + ".x — " + O(e.items.length) + " сохранённых минорных обновлений.", 1),
				U("p", qf, " От v" + O(e.items[e.items.length - 1][0]) + " (" + O(F(vf)(e.items[e.items.length - 1][2])) + ") до v" + O(e.items[0][0]) + " (" + O(F(vf)(e.items[0][2])) + ") ", 1),
				U("button", {
					type: "button",
					class: "sb-vh-view-minors",
					onClick: f
				}, "Просмотреть минорные версии")
			])]))), 128))])) : a.value.mode === "minor" && a.value.entries.length ? (V(), H("div", Jf, [(V(!0), H(B, null, z(a.value.entries, (e) => (V(), H("article", {
				key: e[0],
				class: "sb-vh-release"
			}, [U("span", Yf, "v" + O(e[0]), 1), U("div", Xf, [U("p", null, O(e[1]), 1), U("div", Zf, [U("time", { datetime: e[2] }, O(F(vf)(e[2])), 9, Qf), r.value === "all" ? (V(), H("span", $f, O(e[3] === "large" ? "Крупное" : "Мелкое"), 1)) : G("", !0)])])]))), 128))])) : (V(), H("p", ep, "По запросу минорные версии не найдены."))], 512)
		]));
	}
}, [["__scopeId", "data-v-ce1fc81b"]]);
// src/vue/version-history/legacyVersionHistoryBridge.js
function np({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_VERSION_HISTORY;
	return !t?.snapshot || !document.body ? () => {} : J({
		root: document.body,
		selectTarget: (e) => e.querySelector("#sb-vue-version-history"),
		readSnapshot: () => {
			let e = t.snapshot();
			return e && Array.isArray(e.releases) ? e : null;
		},
		mount: (n, r) => e(n, tp, { model: {
			...r,
			close: t.close
		} })
	});
}
// src/vue/home/HomeDashboard.vue
var rp = ["data-sb-applied-theme"], ip = { class: "dash-head" }, ap = { class: "dash-actions" }, op = { class: "dash-metrics" }, sp = { class: "dash-metric" }, cp = { class: "dash-metric" }, lp = { class: "dash-metric" }, up = { class: "dash-layout" }, dp = { class: "dash-panel" }, fp = { class: "dash-panel-head" }, pp = { class: "dash-list" }, mp = { class: "dash-entry-meta" }, hp = ["data-kind", "data-id"], gp = {
	key: 0,
	class: "dash-empty"
}, _p = { class: "dash-panel" }, vp = { class: "dash-panel-head" }, yp = { class: "dash-list" }, bp = { class: "dash-entry-meta" }, xp = { class: "dash-entry-actions" }, Sp = ["data-id"], Cp = ["data-id"], wp = {
	key: 0,
	class: "dash-empty"
}, Tp = { class: "dash-panel dash-panel-events" }, Ep = { class: "dash-panel-head" }, Dp = { class: "dash-list" }, Op = { class: "dash-event-date" }, kp = { class: "dash-event-main" }, Ap = { class: "dash-entry-meta" }, jp = { key: 0 }, Mp = ["data-id"], Np = {
	key: 0,
	class: "dash-empty"
}, Pp = {
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
		let t = Q();
		return (n, r) => (V(), H("div", {
			class: "sb-vue-dashboard",
			"data-sb-vue-dashboard": "",
			"data-sb-applied-theme": F(t).appearance.resolvedTheme
		}, [
			U("div", ip, [
				r[9] ||= U("div", { class: "dash-eyebrow" }, "ЛИЧНАЯ МУЗЫКАЛЬНАЯ МАСТЕРСКАЯ", -1),
				r[10] ||= U("h1", null, [W("Твоя музыкальная "), U("span", null, "лаборатория.")], -1),
				U("p", null, O(e.model.profileName) + ", здесь твои последние идеи, промпты и музыкальные события — всё под рукой.", 1),
				U("div", ap, [
					U("button", {
						type: "button",
						class: "btn primary",
						"data-action": "nav",
						"data-nav": "myideas",
						onClick: r[0] ||= Wo((t) => e.navigate("myideas"), ["stop"])
					}, "＋ Новая идея"),
					U("button", {
						type: "button",
						class: "btn ghost",
						"data-action": "nav",
						"data-nav": "myprompts",
						onClick: r[1] ||= Wo((t) => e.navigate("myprompts"), ["stop"])
					}, "＋ Новый промпт"),
					U("button", {
						type: "button",
						class: "btn ghost",
						"data-action": "nav",
						"data-nav": "events",
						onClick: r[2] ||= Wo((t) => e.navigate("events"), ["stop"])
					}, "＋ Событие")
				])
			]),
			U("div", op, [
				U("div", sp, [U("b", null, O(F(t).dashboardStats.ideaCount), 1), r[11] ||= U("span", null, "Мои идеи", -1)]),
				U("div", cp, [U("b", null, O(F(t).dashboardStats.promptCount), 1), r[12] ||= U("span", null, "Мои промпты", -1)]),
				U("div", lp, [U("b", null, O(F(t).dashboardStats.eventCount), 1), r[13] ||= U("span", null, "Мои события", -1)])
			]),
			U("div", up, [
				U("section", dp, [U("header", fp, [r[14] ||= U("div", null, [U("span", { class: "dash-kicker" }, "💡 ЛИЧНАЯ БИБЛИОТЕКА"), U("h2", null, "Мои последние идеи")], -1), U("button", {
					type: "button",
					class: "dash-view-all",
					"data-action": "nav",
					"data-nav": "myideas",
					onClick: r[3] ||= Wo((t) => e.navigate("myideas"), ["stop"])
				}, "Все идеи →")]), U("div", pp, [(V(!0), H(B, null, z(e.model.ideas, (e) => (V(), H("article", {
					key: e.kind + ":" + e.key,
					class: "dash-entry"
				}, [
					U("div", mp, O(e.label), 1),
					U("h3", null, O(e.title), 1),
					U("p", null, O(String(e.pitch).slice(0, 180)), 1),
					U("button", {
						type: "button",
						class: "dash-entry-link",
						"data-action": "dash-open-idea",
						"data-kind": e.kind,
						"data-id": String(e.key)
					}, "Открыть идею →", 8, hp)
				]))), 128)), e.model.ideas.length ? G("", !0) : (V(), H("div", gp, [
					r[15] ||= U("span", null, "💡", -1),
					r[16] ||= U("strong", null, "Пока нет сохранённых идей", -1),
					r[17] ||= U("p", null, "Добавь идею в личном кабинете или сохрани сюжет из Idea Lab.", -1),
					U("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "nav",
						"data-nav": "myideas",
						onClick: r[4] ||= Wo((t) => e.navigate("myideas"), ["stop"])
					}, "Добавить идею →")
				]))])]),
				U("section", _p, [U("header", vp, [r[18] ||= U("div", null, [U("span", { class: "dash-kicker" }, "🎛️ SUNO STUDIO"), U("h2", null, "Мои последние промпты")], -1), U("button", {
					type: "button",
					class: "dash-view-all",
					"data-action": "nav",
					"data-nav": "myprompts",
					onClick: r[5] ||= Wo((t) => e.navigate("myprompts"), ["stop"])
				}, "Все промпты →")]), U("div", yp, [(V(!0), H(B, null, z(e.model.prompts, (e) => (V(), H("article", {
					key: String(e.id),
					class: "dash-entry"
				}, [
					U("div", bp, O(e.genre || "Suno Studio") + O(e.date ? " · " + e.date : ""), 1),
					U("h3", null, O(e.title || (e.genre || "Промпт") + " · " + (e.mood || "студия")), 1),
					U("p", null, O(String(e.text || "").slice(0, 180)), 1),
					U("div", xp, [U("button", {
						type: "button",
						class: "dash-entry-link",
						"data-action": "dash-open-prompt",
						"data-id": String(e.id)
					}, "Открыть промпт →", 8, Sp), U("button", {
						type: "button",
						class: "dash-copy",
						"data-action": "copy-saved",
						"data-id": String(e.id)
					}, "Копировать", 8, Cp)])
				]))), 128)), e.model.prompts.length ? G("", !0) : (V(), H("div", wp, [
					r[19] ||= U("span", null, "🎛️", -1),
					r[20] ||= U("strong", null, "Пока нет сохранённых промптов", -1),
					r[21] ||= U("p", null, "Сохрани промпт в Suno Studio или создай собственный.", -1),
					U("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "nav",
						"data-nav": "myprompts",
						onClick: r[6] ||= Wo((t) => e.navigate("myprompts"), ["stop"])
					}, "Добавить промпт →")
				]))])]),
				U("section", Tp, [U("header", Ep, [r[22] ||= U("div", null, [U("span", { class: "dash-kicker" }, "🗓️ ТВОРЧЕСКИЙ КАЛЕНДАРЬ"), U("h2", null, "Мои события")], -1), U("button", {
					type: "button",
					class: "dash-view-all",
					"data-action": "nav",
					"data-nav": "events",
					onClick: r[7] ||= Wo((t) => e.navigate("events"), ["stop"])
				}, "Все события →")]), U("div", Dp, [(V(!0), H(B, null, z(e.model.events, (e) => (V(), H("article", {
					key: String(e.id),
					class: "dash-entry dash-event"
				}, [
					U("div", Op, [U("strong", null, O(e.formattedDate), 1), U("span", null, O(e.time || "Весь день"), 1)]),
					U("div", kp, [
						U("div", Ap, O(e.typeLabel) + O(e.past ? " · Прошедшее" : ""), 1),
						U("h3", null, O(e.title), 1),
						e.notes ? (V(), H("p", jp, O(String(e.notes).slice(0, 160)), 1)) : G("", !0)
					]),
					U("button", {
						type: "button",
						class: "dash-entry-link",
						"data-action": "dash-open-event",
						"data-id": String(e.id)
					}, "Подробнее →", 8, Mp)
				]))), 128)), e.model.events.length ? G("", !0) : (V(), H("div", Np, [
					r[23] ||= U("span", null, "🗓️", -1),
					r[24] ||= U("strong", null, "Событий пока нет", -1),
					r[25] ||= U("p", null, "Добавь даты релизов, записи, встречи и другие планы своей музыкальной работы.", -1),
					U("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "nav",
						"data-nav": "events",
						onClick: r[8] ||= Wo((t) => e.navigate("events"), ["stop"])
					}, "Добавить событие →")
				]))])])
			])
		], 8, rp));
	}
}, Fp = Object.freeze([
	"myideas",
	"myprompts",
	"events"
]);
function Ip(e, { router: t, legacyApi: n, syncRoute: r = sd } = {}, i) {
	if (typeof e != "string" || !e || !n || typeof n.snapshot != "function") return !1;
	let a = i === "menu", o = n.snapshot()?.items, s = a ? Array.isArray(o) && o.some((t) => t?.id === e) : Fp.includes(e), c = a ? n.navigate : n.navigateWorkspace;
	if (!s || typeof c != "function") return !1;
	let l = !1;
	try {
		let n = Fu(e);
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
function Lp(e, t = {}) {
	return Ip(e, t, "menu");
}
function Rp(e, t = {}) {
	return Ip(e, t, "shortcut");
}
// src/vue/home/legacyHomeDashboardBridge.js
function zp({ mountVueFeature: e, sharedUi: t }) {
	let n = window.SUNOBOOM_LEGACY_DASHBOARD, r = document.getElementById("app");
	return !n?.snapshot || !r ? () => {} : J({
		root: r,
		selectTarget: (e) => e.querySelector("#sb-vue-dashboard"),
		readSnapshot: () => n.snapshot(),
		mount: (n, r) => (t.publishDashboardStats(r), e(n, Pp, {
			model: r,
			navigate: (e) => Rp(e, {
				router: Nu,
				legacyApi: window.SUNOBOOM_LEGACY_NAV
			})
		}))
	});
}
// src/vue/account/PromptCollection.vue
var Bp = {
	key: 0,
	class: "sub",
	"data-sb-vue-prompt-library-recap": ""
}, Vp = { class: "section-title" }, Hp = {
	key: 1,
	class: "saved-list"
}, Up = { class: "row" }, Wp = { class: "actions" }, Gp = ["data-id"], Kp = ["innerHTML"], qp = ["data-id"], Jp = ["data-id", "aria-label"], Yp = ["innerHTML"], Xp = { class: "sub" }, Zp = {
	key: 2,
	class: "empty"
}, Qp = ["innerHTML"], $p = {
	__name: "PromptCollection",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = Q();
		return (n, r) => (V(), H(B, null, [
			F(t).librarySummary.ready ? (V(), H("p", Bp, " Последний просмотр библиотеки: " + O(F(t).librarySummary.promptCount) + " промптов ", 1)) : G("", !0),
			U("div", Vp, [U("h2", null, "Сохранённые промпты (" + O(e.model.items.length) + ")", 1)]),
			e.model.items.length ? (V(), H("div", Hp, [(V(!0), H(B, null, z(e.model.items, (t) => (V(), H("article", {
				key: t.id,
				class: "saved-item"
			}, [
				U("div", Up, [U("h3", null, O(t.title), 1), U("div", Wp, [
					U("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "copy-saved",
						"data-id": t.id
					}, [U("span", {
						"aria-hidden": "true",
						innerHTML: e.model.icons.copy
					}, null, 8, Kp), r[0] ||= W(" Копировать", -1)], 8, Gp),
					U("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "edit-manual-prompt",
						"data-id": t.id
					}, "Изменить", 8, qp),
					U("button", {
						type: "button",
						class: "btn danger small",
						"data-action": "delete-saved",
						"data-id": t.id,
						"aria-label": "Удалить промпт «" + t.title + "»"
					}, [U("span", {
						"aria-hidden": "true",
						innerHTML: e.model.icons.trash
					}, null, 8, Yp)], 8, Jp)
				])]),
				U("p", null, O(t.text), 1),
				U("span", Xp, O(t.genre) + " · " + O(t.date), 1)
			]))), 128))])) : (V(), H("div", Zp, [
				U("span", {
					"aria-hidden": "true",
					innerHTML: e.model.icons.music
				}, null, 8, Qp),
				r[1] ||= U("strong", null, "Промптов пока нет", -1),
				r[2] ||= W("Сохрани первый здесь или в Suno Studio.", -1)
			]))
		], 64));
	}
};
// src/vue/account/legacyPromptCollectionBridge.js
function em({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PROMPT_LIST, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : J({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-prompts-list"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, $p, { model: n })
	});
}
// src/vue/account/PromptEditor.vue
var tm = {
	key: 0,
	class: "sub",
	"data-sb-vue-last-idea-draft": ""
}, nm = { class: "field" }, rm = { class: "field" }, im = ["value"], am = { class: "field" }, om = {
	id: "sb-prompt-char-count",
	class: "sub"
}, sm = {
	__name: "PromptEditor",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ A({ ...t.initial.values }), r = K(() => n.text.length), i = Q();
		return L(() => [
			n.title,
			n.genre,
			n.text,
			t.initial.editing
		], () => i.publishPromptDraftSummary(n, t.initial.editing), { immediate: !0 }), (t, a) => (V(), H(B, null, [
			U("h3", null, O(e.initial.editing ? "Редактирование промпта" : "Новый промпт для Suno"), 1),
			F(i).ideaDraftSummary.ready ? (V(), H("p", tm, "Последний открытый черновик идеи: " + O(F(i).ideaDraftSummary.ideaLength) + " / 3000 символов", 1)) : G("", !0),
			U("div", nm, [a[3] ||= U("label", { for: "custom-prompt-title" }, "Название", -1), I(U("input", {
				id: "custom-prompt-title",
				"onUpdate:modelValue": a[0] ||= (e) => n.title = e,
				maxlength: "100",
				placeholder: "Например, Романтичный афро-поп"
			}, null, 512), [[q, n.title]])]),
			U("div", rm, [a[4] ||= U("label", { for: "custom-prompt-genre" }, "Жанр", -1), I(U("select", {
				id: "custom-prompt-genre",
				"onUpdate:modelValue": a[1] ||= (e) => n.genre = e
			}, [(V(!0), H(B, null, z(e.initial.genres, (e) => (V(), H("option", {
				key: e.id,
				value: e.id
			}, O(e.name), 9, im))), 128))], 512), [[Lo, n.genre]])]),
			U("div", am, [
				a[5] ||= U("label", { for: "custom-prompt-text" }, "Текст промпта (до 1000 символов)", -1),
				I(U("textarea", {
					id: "custom-prompt-text",
					"onUpdate:modelValue": a[2] ||= (e) => n.text = e,
					rows: "7",
					maxlength: "1000",
					"aria-describedby": "sb-prompt-char-count",
					placeholder: "Modern Russian-language afropop, 105 BPM, clean vocals, groovy bass..."
				}, null, 512), [[q, n.text]]),
				U("span", om, O(r.value) + " / 1000 символов", 1)
			])
		], 64));
	}
};
// src/vue/account/legacyPromptEditorBridge.js
function cm({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PROMPT_EDITOR, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : J({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-prompt-form"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, sm, { initial: n })
	});
}
// src/vue/account/LibraryCollection.vue
var lm = { class: "account-back" }, um = {
	type: "button",
	class: "btn ghost small",
	"data-action": "workspace-back"
}, dm = {
	key: 0,
	class: "sb-dna-summary",
	"data-sb-vue-library-summary": ""
}, fm = { class: "section-title" }, pm = {
	key: 1,
	class: "genre-grid"
}, mm = ["data-id"], hm = { class: "genre-content" }, gm = { class: "kicker" }, _m = { class: "foot" }, vm = {
	key: 2,
	class: "empty"
}, ym = { class: "section-title" }, bm = {
	key: 3,
	class: "idea-grid"
}, xm = { class: "idea-badge" }, Sm = { class: "actions" }, Cm = ["data-id", "data-i"], wm = ["data-id", "data-i"], Tm = {
	key: 4,
	class: "empty"
}, Em = { class: "section-title" }, Dm = {
	key: 5,
	class: "idea-grid"
}, Om = { class: "idea-badge" }, km = ["data-id"], Am = {
	key: 6,
	class: "empty"
}, jm = { class: "section-title" }, Mm = {
	key: 7,
	class: "idea-grid"
}, Nm = { class: "idea-badge" }, Pm = { class: "generator-story" }, Fm = { class: "generator-hook" }, Im = {
	key: 0,
	class: "generator-detail"
}, Lm = { class: "actions" }, Rm = ["data-id"], zm = ["data-id"], Bm = ["data-id", "aria-label"], Vm = {
	key: 8,
	class: "empty"
}, Hm = { class: "section-title" }, Um = {
	key: 9,
	class: "saved-list"
}, Wm = { class: "row" }, Gm = { class: "actions" }, Km = ["data-id"], qm = ["data-id", "aria-label"], Jm = { class: "sub" }, Ym = {
	key: 10,
	class: "empty"
}, Xm = {
	__name: "LibraryCollection",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = Q();
		return L(() => t.model, (e) => n.publishLibrarySummary(e), { immediate: !0 }), (t, r) => (V(), H(B, null, [
			U("div", lm, [U("button", um, O(e.model.backLabel), 1)]),
			r[14] ||= U("header", { class: "heading" }, [U("h1", null, "Моя библиотека"), U("p", null, "Любимые жанры, идеи и промпты. Сохраняются локально в этом браузере.")], -1),
			F(n).librarySummary.ready ? (V(), H("div", dm, [
				U("div", null, [U("b", null, O(F(n).librarySummary.genreCount), 1), r[0] ||= U("span", null, "Избранных жанров", -1)]),
				U("div", null, [U("b", null, O(F(n).librarySummary.totalIdeaCount), 1), r[1] ||= U("span", null, "Идей в библиотеке", -1)]),
				U("div", null, [U("b", null, O(F(n).librarySummary.promptCount), 1), r[2] ||= U("span", null, "Сохранённых промптов", -1)])
			])) : G("", !0),
			U("div", fm, [U("h2", null, "Избранные жанры (" + O(e.model.genres.length) + ")", 1)]),
			e.model.genres.length ? (V(), H("div", pm, [(V(!0), H(B, null, z(e.model.genres, (e) => (V(), H("button", {
				key: e.id,
				type: "button",
				class: "genre-card",
				style: E({ "--accent": e.color }),
				"data-action": "genre",
				"data-id": e.id
			}, [r[4] ||= U("div", { class: "art" }, null, -1), U("div", hm, [U("div", null, [
				U("div", gm, O(e.family) + " · " + O(e.bpm[0]) + "–" + O(e.bpm[1]) + " BPM", 1),
				U("h3", null, O(e.name), 1),
				U("p", null, O(e.tagline), 1)
			]), U("div", _m, [U("span", null, O(e.era), 1), r[3] ||= U("span", { style: { color: "#ffacd9" } }, "Открыть →", -1)])])], 12, mm))), 128))])) : (V(), H("div", vm, [...r[5] ||= [U("strong", null, "Пока нет избранных жанров", -1), W("Добавляй их в карточках Академии.", -1)]])),
			U("div", ym, [U("h2", null, "Сохранённые идеи (" + O(e.model.ideas.length) + ")", 1)]),
			e.model.ideas.length ? (V(), H("div", bm, [(V(!0), H(B, null, z(e.model.ideas, (e) => (V(), H("article", {
				key: e.key,
				class: "idea"
			}, [
				U("div", xm, O(e.genre) + " · " + O(e.mood), 1),
				U("h3", null, O(e.title), 1),
				U("p", null, O(e.pitch), 1),
				U("div", Sm, [U("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "idea-use",
					"data-id": e.genreId,
					"data-i": e.index
				}, "В студию", 8, Cm), U("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "idea-save",
					"data-id": e.genreId,
					"data-i": e.index
				}, "Сохранено", 8, wm)])
			]))), 128))])) : (V(), H("div", Tm, [...r[6] ||= [U("strong", null, "Нет сохранённых идей", -1), W("Найди интересный сюжет и нажми «Сохранить».", -1)]])),
			U("div", Em, [U("h2", null, "Мои собственные идеи (" + O(e.model.own.length) + ")", 1), r[7] ||= U("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "nav",
				"data-nav": "myideas"
			}, "Добавить или изменить →", -1)]),
			e.model.own.length ? (V(), H("div", Dm, [(V(!0), H(B, null, z(e.model.own, (e) => (V(), H("article", {
				key: e.id,
				class: "idea"
			}, [
				U("div", Om, O(e.genre), 1),
				U("h3", null, O(e.title), 1),
				U("p", null, O(e.pitch), 1),
				U("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "edit-manual-idea",
					"data-id": e.id
				}, "Открыть запись →", 8, km)
			]))), 128))])) : (V(), H("div", Am, [...r[8] ||= [U("strong", null, "Пока нет своих идей", -1), W("Добавь их в личном кабинете.", -1)]])),
			U("div", jm, [U("h2", null, "Идеи из генератора (" + O(e.model.generated.length) + ")", 1), r[9] ||= U("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "nav",
				"data-nav": "ideas"
			}, "＋ Создать ещё", -1)]),
			e.model.generated.length ? (V(), H("div", Mm, [(V(!0), H(B, null, z(e.model.generated, (e) => (V(), H("article", {
				key: e.id,
				class: "idea generated-card"
			}, [
				U("div", Nm, O(e.genre) + " · " + O(e.topic), 1),
				U("h3", null, O(e.title), 1),
				U("p", null, O(e.pitch), 1),
				U("p", Pm, O(e.storyLine), 1),
				U("div", Fm, [r[10] ||= U("span", null, "ХУК ПРИПЕВА", -1), U("strong", null, O(e.hook), 1)]),
				e.detail ? (V(), H("p", Im, "Твоя деталь: " + O(e.detail), 1)) : G("", !0),
				U("div", Lm, [
					U("button", {
						type: "button",
						class: "btn primary small",
						"data-action": "generated-use",
						"data-id": e.id
					}, "В Suno Studio", 8, Rm),
					U("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "generated-copy",
						"data-id": e.id
					}, "Копировать", 8, zm),
					U("button", {
						type: "button",
						class: "btn danger small",
						"data-action": "generated-delete",
						"data-id": e.id,
						"aria-label": "Удалить идею «" + e.title + "»"
					}, "Удалить", 8, Bm)
				])
			]))), 128))])) : (V(), H("div", Vm, [...r[11] ||= [U("strong", null, "Сохранённых новых идей нет", -1), W("Создай идеи в генераторе и нажми «Сохранить».", -1)]])),
			U("div", Hm, [U("h2", null, "Мои промпты (" + O(e.model.prompts.length) + ")", 1), r[12] ||= U("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "nav",
				"data-nav": "myprompts"
			}, "Добавить или изменить →", -1)]),
			e.model.prompts.length ? (V(), H("div", Um, [(V(!0), H(B, null, z(e.model.prompts, (e) => (V(), H("article", {
				key: e.id,
				class: "saved-item"
			}, [
				U("div", Wm, [U("h3", null, O(e.title), 1), U("div", Gm, [U("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "copy-saved",
					"data-id": e.id
				}, "Копировать", 8, Km), U("button", {
					type: "button",
					class: "btn danger small",
					"data-action": "delete-saved",
					"data-id": e.id,
					"aria-label": "Удалить промпт «" + e.title + "»"
				}, "Удалить", 8, qm)])]),
				U("p", null, O(e.text), 1),
				U("span", Jm, O(e.date), 1)
			]))), 128))])) : (V(), H("div", Ym, [...r[13] ||= [U("strong", null, "Промптов пока нет", -1), W("Создай первый в Suno Studio и сохрани в библиотеке.", -1)]]))
		], 64));
	}
};
// src/vue/account/legacyLibraryBridge.js
function Zm({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_LIBRARY, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : J({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-library-collection"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, Xm, { model: n })
	});
}
// src/vue/account/SongCards.vue
var Qm = {
	key: 0,
	class: "sbsong-artist-hint",
	"data-sb-vue-song-collection-recap": ""
}, $m = {
	key: 1,
	class: "sbsong-grid"
}, eh = ["data-id", "aria-label"], th = ["data-sbsong-cover"], nh = ["src"], rh = { class: "sbsong-card-text" }, ih = { class: "sbsong-card-flags" }, ah = { class: "sbsong-card-actions" }, oh = ["data-id"], sh = ["data-id"], ch = ["data-id"], lh = {
	key: 2,
	class: "sbsong-empty"
}, uh = {
	__name: "SongCards",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ N(t.api.snapshot() || {
			items: [],
			total: 0
		}), r = Q();
		L(n, (e) => r.publishSongCollectionSummary(e), { immediate: !0 });
		function i() {
			let e = t.api.snapshot();
			e && (n.value = e, Dn(() => t.api.hydrateCovers()));
		}
		return R(() => {
			window.addEventListener("sunoboom:songs-search", i), Dn(() => t.api.hydrateCovers());
		}), xr(() => window.removeEventListener("sunoboom:songs-search", i)), (e, t) => (V(), H(B, null, [F(r).songCollectionSummary.ready ? (V(), H("p", Qm, " Найдено " + O(F(r).songCollectionSummary.visibleCount) + " из " + O(F(r).songCollectionSummary.totalCount) + " песен ", 1)) : G("", !0), n.value.items.length ? (V(), H("div", $m, [(V(!0), H(B, null, z(n.value.items, (e) => (V(), H("article", {
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
		}, null, 8, th)) : e.coverUrl ? (V(), H("img", {
			key: 1,
			alt: "",
			src: e.coverUrl,
			style: { display: "block" },
			loading: "lazy"
		}, null, 8, nh)) : G("", !0), t[0] ||= U("span", {
			class: "sbsong-no-cover",
			"aria-hidden": "true"
		}, "♫", -1)], 8, eh), U("div", rh, [
			U("small", null, O(e.genre), 1),
			U("h3", null, O(e.title), 1),
			U("p", null, O(e.artist), 1),
			U("div", ih, [U("span", null, O(e.status), 1)]),
			U("div", ah, [
				U("button", {
					type: "button",
					"data-sbsong-action": "open",
					"data-id": e.id
				}, "Открыть", 8, oh),
				U("button", {
					type: "button",
					"data-sbsong-action": "edit",
					"data-id": e.id
				}, "Изменить", 8, sh),
				U("button", {
					type: "button",
					"data-sbsong-action": "share",
					"data-id": e.id
				}, "Поделиться", 8, ch)
			])
		])]))), 128))])) : (V(), H("div", lh, O(n.value.total ? "По этому запросу песен нет." : "Песен пока нет. Добавь первую карточку и загрузи аудиофайл."), 1))], 64));
	}
};
// src/vue/account/legacySongCardsBridge.js
function dh({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SONG_CARDS, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : J({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-song-cards"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, uh, { api: t })
	});
}
// src/vue/account/SongVersions.vue
var fh = {
	class: "sbsong-versions",
	"data-sb-vue-song-versions": "",
	"aria-label": "Версии записи"
}, ph = { class: "sbsong-version-heading" }, mh = { key: 0 }, hh = { class: "sbsong-version-row-head" }, gh = {
	key: 0,
	class: "sbsong-version-main-badge"
}, _h = {
	key: 1,
	class: "sbsong-version-play-badge"
}, vh = { class: "sbsong-version-actions" }, yh = ["data-version-id"], bh = ["data-version-id"], xh = ["data-id", "data-version-id"], Sh = ["data-version-id"], Ch = { class: "sbsong-version-notes" }, wh = ["data-sbsong-version-title", "value"], Th = ["data-sbsong-version-note", "value"], Eh = ["data-version-id"], Dh = { key: 0 }, Oh = {
	type: "button",
	class: "sbsong-compare-toggle",
	"data-sbsong-action": "compare-toggle"
}, kh = {
	key: 0,
	class: "sbsong-compare-grid"
}, Ah = ["value"], jh = ["value"], Mh = ["value"], Nh = ["value"], Ph = {
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
		return (t, n) => (V(), H("section", fh, [
			U("div", ph, [U("h3", null, "Версии записи (" + O(e.versions.length) + ")", 1), e.playingLabel ? (V(), H("small", mh, "В основном плеере: " + O(e.playingLabel), 1)) : G("", !0)]),
			(V(!0), H(B, null, z(e.versions, (t) => (V(), H("article", {
				key: t.id,
				class: "sbsong-version-row"
			}, [
				U("div", hh, [U("div", null, [
					U("strong", null, O(t.label), 1),
					t.isMain ? (V(), H("span", gh, "★ Основная")) : G("", !0),
					t.isPlaying ? (V(), H("span", _h, "♫ Выбрана")) : G("", !0),
					U("small", null, O(t.fileName) + " · " + O(t.sizeLabel) + " · " + O(t.addedDate), 1)
				])]),
				U("div", vh, [
					U("button", {
						type: "button",
						"data-sbsong-action": "version-play",
						"data-version-id": t.id
					}, "Выбрать для плеера", 8, yh),
					t.isMain ? G("", !0) : (V(), H("button", {
						key: 0,
						type: "button",
						"data-sbsong-action": "version-main",
						"data-version-id": t.id
					}, "★ Сделать основной", 8, bh)),
					U("button", {
						type: "button",
						"data-sbsong-action": "share-file",
						"data-id": e.songId,
						"data-version-id": t.id
					}, "Сохранить / отправить", 8, xh),
					U("button", {
						type: "button",
						class: "sbsong-version-danger",
						"data-sbsong-action": "version-remove",
						"data-version-id": t.id
					}, "Удалить дубль", 8, Sh)
				]),
				U("details", Ch, [
					n[2] ||= U("summary", null, "Название и заметки", -1),
					U("label", null, [n[0] ||= W("Название версии ", -1), U("input", {
						type: "text",
						maxlength: "90",
						"data-sbsong-version-title": t.id,
						value: t.label
					}, null, 8, wh)]),
					U("label", null, [n[1] ||= W("Чем отличается этот дубль ", -1), U("textarea", {
						maxlength: "800",
						rows: "2",
						"data-sbsong-version-note": t.id,
						value: t.notes,
						placeholder: "Например: более плотный припев, удачный вокал..."
					}, null, 8, Th)]),
					U("button", {
						type: "button",
						"data-sbsong-action": "version-save",
						"data-version-id": t.id
					}, "Сохранить заметки", 8, Eh)
				])
			]))), 128)),
			e.versions.length ? G("", !0) : (V(), H("p", Dh, "Пока нет локальных версий. Загрузи первую запись в MP3, M4A или WAV.")),
			e.versions.length > 1 ? (V(), H(B, { key: 1 }, [U("button", Oh, O(e.compareOpen ? "Скрыть сравнение A/B" : "Сравнить версии A/B"), 1), e.compareOpen ? (V(), H("div", kh, [
				U("label", null, [
					n[3] ||= W("Версия A ", -1),
					U("select", {
						id: "sbsong-compare-a",
						value: e.compareAId
					}, [(V(!0), H(B, null, z(e.versions, (e) => (V(), H("option", {
						key: e.id,
						value: e.id
					}, O(e.label), 9, jh))), 128))], 8, Ah),
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
					}, O(e.label), 9, Nh))), 128))], 8, Mh),
					n[6] ||= U("audio", {
						id: "sbsong-ab-b",
						controls: "",
						preload: "metadata"
					}, null, -1)
				]),
				n[7] ||= U("p", null, "Два независимых плеера для сравнения дублей. Воспроизведение запускается вручную.", -1)
			])) : G("", !0)], 64)) : G("", !0),
			n[8] ||= da("<div class=\"sbsong-version-add\"><h4>+ Добавить новую версию</h4><label>Аудиофайл (MP3, M4A, WAV и другие) <input id=\"sbsong-version-file\" type=\"file\" accept=\"audio/*,.mp3,.m4a,.wav,.wave,.flac,.ogg,.opus,.aac\"></label><label>Название дубля <input id=\"sbsong-new-version-title\" maxlength=\"90\" type=\"text\" placeholder=\"Например: Версия с новым припевом\"></label><label>Заметка <textarea id=\"sbsong-new-version-notes\" maxlength=\"800\" rows=\"2\" placeholder=\"Что изменилось в этой записи?\"></textarea></label><button type=\"button\" class=\"sbsong-main-btn\" data-sbsong-action=\"version-add\" id=\"sbsong-version-submit\">Сохранить новую версию</button><p>WAV — до 500 МБ, другие форматы — до 150 МБ. Каждая версия хранится отдельно в браузере этого устройства. Старые записи не перезаписываются.</p></div>", 1)
		]));
	}
}, Fh = { class: "sbsong-detail" }, Ih = { class: "sbsong-subhead" }, Lh = {
	key: 0,
	class: "sbsong-artist-hint",
	"data-sb-vue-song-detail-recap": ""
}, Rh = { class: "sbsong-detail-layout" }, zh = { class: "sbsong-detail-cover" }, Bh = ["data-sbsong-cover", "alt"], Vh = ["src", "alt"], Hh = {
	key: 2,
	class: "sbsong-no-cover",
	"aria-hidden": "true"
}, Uh = { class: "sbsong-detail-artist" }, Wh = { class: "sbsong-detail-tags" }, Gh = { key: 0 }, Kh = { key: 1 }, qh = {
	key: 0,
	class: "sbsong-detail-description"
}, Jh = {
	class: "sbsong-audio-box",
	id: "sbsong-audio-box"
}, Yh = {
	key: 0,
	controls: "",
	preload: "metadata",
	id: "sbsong-audio-player"
}, Xh = { key: 1 }, Zh = { class: "sbsong-detail-actions" }, Qh = ["data-id"], $h = ["data-id"], eg = ["href"], tg = ["data-id"], ng = ["data-id"], rg = ["data-id"], ig = {
	key: 1,
	class: "sbsong-delete-confirm"
}, ag = ["data-id"], og = {
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
		let t = e, n = Q();
		return L(() => t.model, (e) => n.publishSongDetailSummary(e), { immediate: !0 }), R(() => {
			Dn(() => t.api.hydrateMedia());
		}), (t, r) => (V(), H("section", Fh, [
			U("div", Ih, [U("h2", null, O(e.model.title), 1), r[0] ||= U("button", {
				type: "button",
				"data-sbsong-action": "close-detail"
			}, "Закрыть ×", -1)]),
			F(n).songCollectionSummary.ready ? (V(), H("p", Lh, " В личной коллекции: " + O(F(n).songCollectionSummary.totalCount) + " песен ", 1)) : G("", !0),
			U("div", Rh, [U("div", zh, [e.model.hasCover ? (V(), H("img", {
				key: 0,
				"data-sbsong-cover": e.model.id,
				alt: "Обложка песни " + e.model.title
			}, null, 8, Bh)) : e.model.coverUrl ? (V(), H("img", {
				key: 1,
				src: e.model.coverUrl,
				alt: "Обложка песни " + e.model.title,
				style: { display: "block" }
			}, null, 8, Vh)) : (V(), H("span", Hh, "♫"))]), U("div", null, [
				U("p", Uh, O(e.model.artist), 1),
				U("p", Wh, [e.model.genre ? (V(), H("span", Gh, O(e.model.genre), 1)) : G("", !0), e.model.album ? (V(), H("span", Kh, O(e.model.album), 1)) : G("", !0)]),
				e.model.description ? (V(), H("p", qh, O(e.model.description), 1)) : G("", !0),
				U("div", Jh, [e.model.hasPlayableAudio ? (V(), H("audio", Yh)) : (V(), H("p", Xh, "Аудио ещё не добавлено. Добавь первую версию в этой карточке."))]),
				sa(Ph, {
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
				U("div", Zh, [
					U("button", {
						type: "button",
						class: "sbsong-main-btn",
						"data-sbsong-action": "share",
						"data-id": e.model.id
					}, "🔗 Поделиться ссылкой", 8, Qh),
					e.model.hasAudio ? (V(), H("button", {
						key: 0,
						type: "button",
						"data-sbsong-action": "share-file",
						"data-id": e.model.id
					}, "Отправить аудиофайл", 8, $h)) : G("", !0),
					e.model.listenUrl ? (V(), H("a", {
						key: 1,
						href: e.model.listenUrl,
						target: "_blank",
						rel: "noopener noreferrer"
					}, "Открыть публичную запись ↗", 8, eg)) : G("", !0),
					U("button", {
						type: "button",
						"data-sbsong-action": "producer",
						"data-id": e.model.id
					}, "🎛 Мастер", 8, tg),
					U("button", {
						type: "button",
						"data-sbsong-action": "edit",
						"data-id": e.model.id
					}, "Изменить", 8, ng),
					U("button", {
						type: "button",
						class: "sbsong-danger",
						"data-sbsong-action": "delete",
						"data-id": e.model.id
					}, "Удалить", 8, rg)
				]),
				e.model.confirmDelete ? (V(), H("div", ig, [
					r[1] ||= U("strong", null, "Удалить карточку вместе с локальными файлами?", -1),
					U("button", {
						type: "button",
						"data-sbsong-action": "delete-confirm",
						"data-id": e.model.id
					}, "Да, удалить", 8, ag),
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
function sg({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SONG_DETAIL, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : J({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-song-detail"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, og, {
			api: t,
			model: r
		})
	});
}
// src/vue/account/SongEditor.vue
var cg = {
	id: "sbsong-form",
	class: "sbsong-form-panel"
}, lg = { class: "sbsong-subhead" }, ug = {
	id: "sbsong-save-form",
	class: "sbsong-form"
}, dg = { class: "sbsong-form-columns" }, fg = { class: "sbsong-field" }, pg = { class: "sbsong-artist-field" }, mg = {
	class: "sbsong-field",
	for: "sbsong-artist-input"
}, hg = ["aria-expanded"], gg = {
	id: "sbsong-artist-options",
	class: "sbsong-artist-options",
	role: "listbox",
	"aria-label": "Список артистов"
}, _g = ["onClick"], vg = {
	key: 0,
	class: "sbsong-artist-hint"
}, yg = {
	key: 1,
	class: "sbsong-artist-hint"
}, bg = { class: "sbsong-genre-field" }, xg = {
	class: "sbsong-field",
	for: "sbsong-genre-input"
}, Sg = ["aria-expanded"], Cg = ["aria-expanded"], wg = {
	id: "sbsong-genre-options",
	class: "sbsong-genre-options",
	role: "region",
	"aria-label": "Выбор жанра из Академии"
}, Tg = { class: "sbsong-genre-picker-head" }, Eg = ["value"], Dg = {
	id: "sbsong-genre-results",
	class: "sbsong-genre-results",
	role: "listbox",
	"aria-label": "Жанры и поджанры"
}, Og = ["aria-label"], kg = { class: "sbsong-genre-group-title" }, Ag = ["onClick"], jg = {
	key: 0,
	class: "sbsong-genre-hint"
}, Mg = { class: "sbsong-field" }, Ng = { class: "sbsong-field" }, Pg = { class: "sbsong-form-columns" }, Fg = { class: "sbsong-field" }, Ig = {
	class: "sbsong-cover-auto",
	"aria-live": "polite"
}, Lg = { id: "sbsong-cover-status" }, Rg = { class: "sbsong-form-columns" }, zg = { class: "sbsong-field" }, Bg = { class: "sbsong-field" }, Vg = { class: "sbsong-field" }, Hg = {
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
		let t = e, n = /* @__PURE__ */ A({
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
			document.addEventListener("pointerdown", x), Dn(() => t.api.hydrateCover());
		}), xr(() => document.removeEventListener("pointerdown", x)), (t, d) => (V(), H("section", cg, [U("div", lg, [U("h2", null, O(e.model.editId ? "Изменить песню" : "Новая песня"), 1), d[16] ||= U("button", {
			type: "button",
			"data-sbsong-action": "cancel"
		}, "Закрыть ×", -1)]), U("form", ug, [
			U("div", dg, [
				U("label", fg, [d[17] ||= U("span", null, "Название *", -1), I(U("input", {
					"onUpdate:modelValue": d[0] ||= (e) => n.title = e,
					type: "text",
					name: "title",
					maxlength: "120",
					placeholder: "Название песни"
				}, null, 512), [[q, n.title]])]),
				U("div", pg, [
					U("label", mg, [d[18] ||= U("span", null, "Исполнитель / проект", -1), I(U("input", {
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
						onKeydown: d[4] ||= Ko(Wo((e) => r.value = !1, ["prevent"]), ["esc"])
					}, null, 40, hg), [[q, n.artist]])]),
					U("div", { class: "sbsong-artist-shortcuts" }, [U("button", {
						type: "button",
						onClick: y
					}, "▾ Выбрать из списка"), U("button", {
						type: "button",
						onClick: g
					}, "+ Сохранить артиста")]),
					I(U("div", gg, [
						(V(!0), H(B, null, z(f.value, (e) => (V(), H("button", {
							key: e.name,
							type: "button",
							role: "option",
							class: "sbsong-artist-option",
							onClick: (t) => _(e.name)
						}, [U("strong", null, O(e.name), 1), U("small", null, O(e.origin), 1)], 8, _g))), 128)),
						p.value ? (V(), H("p", vg, "Уточни поиск, чтобы увидеть остальные варианты.")) : G("", !0),
						f.value.length ? G("", !0) : (V(), H("p", yg, O(a.value.length ? "Совпадений нет. Нового артиста можно сохранить кнопкой выше." : "Список пуст. Введи имя и сохрани первого артиста."), 1))
					], 512), [[$a, r.value]])
				]),
				U("div", bg, [
					U("label", xg, [d[19] ||= U("span", null, "Жанр", -1), I(U("input", {
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
						onKeydown: d[8] ||= Ko(Wo((e) => o.value = !1, ["prevent"]), ["esc"])
					}, null, 40, Sg), [[q, n.genre]])]),
					U("button", {
						type: "button",
						class: "sbsong-genre-toggle",
						"aria-controls": "sbsong-genre-options",
						"aria-expanded": String(o.value),
						onClick: b
					}, "▾ Выбрать из Академии", 8, Cg),
					I(U("div", wg, [U("div", Tg, [
						d[21] ||= U("label", { for: "sbsong-genre-family" }, "Направление", -1),
						I(U("select", {
							id: "sbsong-genre-family",
							"onUpdate:modelValue": d[9] ||= (e) => c.value = e,
							"aria-label": "Фильтр по направлению",
							onChange: d[10] ||= (e) => s.value = !0
						}, [d[20] ||= U("option", { value: "Все" }, "Все направления", -1), (V(!0), H(B, null, z(u.value, (e) => (V(), H("option", {
							key: e,
							value: e
						}, O(e), 9, Eg))), 128))], 544), [[Lo, c.value]]),
						U("small", null, O(m.value.length) + " из " + O(l.value.length), 1)
					]), U("div", Dg, [(V(!0), H(B, null, z(h.value, (e) => (V(), H("div", {
						key: e.name,
						class: "sbsong-genre-group",
						role: "group",
						"aria-label": e.name
					}, [U("div", kg, [W(O(e.name) + " ", 1), U("span", null, O(e.genres.length), 1)]), (V(!0), H(B, null, z(e.genres, (e) => (V(), H("button", {
						key: e.id,
						type: "button",
						class: "sbsong-genre-option",
						role: "option",
						onClick: (t) => v(e.name)
					}, [U("span", null, O(e.name), 1)], 8, Ag))), 128))], 8, Og))), 128)), m.value.length ? G("", !0) : (V(), H("p", jg, O(l.value.length ? "Не найдено. Можно ввести свой жанр вручную." : "Каталог Академии пока недоступен. Введи жанр вручную."), 1))])], 512), [[$a, o.value]])
				]),
				U("label", Mg, [d[22] ||= U("span", null, "Альбом / релиз", -1), I(U("input", {
					"onUpdate:modelValue": d[11] ||= (e) => n.album = e,
					type: "text",
					name: "album",
					maxlength: "120",
					placeholder: "Название альбома"
				}, null, 512), [[q, n.album]])])
			]),
			U("label", Ng, [d[23] ||= U("span", null, "Описание", -1), I(U("textarea", {
				"onUpdate:modelValue": d[12] ||= (e) => n.description = e,
				name: "description",
				maxlength: "700",
				rows: "3",
				placeholder: "История, настроение или заметки"
			}, null, 512), [[q, n.description]])]),
			U("div", Pg, [U("label", Fg, [U("span", null, O(e.model.hasAudio ? "Добавить новую аудиоверсию" : "Загрузить аудиофайл (MP3, M4A, WAV и другие)"), 1), d[24] ||= U("input", {
				name: "audio",
				type: "file",
				accept: "audio/*,.mp3,.wav,.wave,.m4a,.aac,.flac,.ogg,.opus"
			}, null, -1)]), d[25] ||= U("label", { class: "sbsong-field" }, [U("span", null, "Обложка вручную (необязательно)"), U("input", {
				name: "cover",
				type: "file",
				accept: "image/png,image/jpeg,image/webp,image/gif"
			})], -1)]),
			U("div", Ig, [d[28] ||= U("div", { class: "sbsong-cover-preview-figure" }, [U("img", {
				id: "sbsong-cover-preview-img",
				alt: "Предпросмотр обложки",
				hidden: ""
			}), U("span", {
				id: "sbsong-cover-preview-placeholder",
				"aria-hidden": "true"
			}, "♫")], -1), U("div", null, [
				d[26] ||= U("strong", null, "Обложка из аудиофайла", -1),
				U("p", Lg, O(e.model.hasCover ? "Загружаю сохранённую обложку…" : "Выбери MP3, M4A или FLAC — попробую найти обложку автоматически"), 1),
				d[27] ||= U("small", null, "Ручная обложка имеет приоритет, если ты её выберешь.", -1)
			])]),
			U("div", Rg, [
				U("label", zg, [d[29] ||= U("span", null, "Прямая ссылка на MP3 (если есть)", -1), I(U("input", {
					"onUpdate:modelValue": d[13] ||= (e) => n.audioUrl = e,
					type: "text",
					name: "audioUrl",
					maxlength: "700",
					placeholder: "https://.../song.mp3"
				}, null, 512), [[q, n.audioUrl]])]),
				U("label", Bg, [d[30] ||= U("span", null, "Публичная страница песни", -1), I(U("input", {
					"onUpdate:modelValue": d[14] ||= (e) => n.listenUrl = e,
					type: "text",
					name: "listenUrl",
					maxlength: "700",
					placeholder: "https://suno.com/..."
				}, null, 512), [[q, n.listenUrl]])]),
				U("label", Vg, [d[31] ||= U("span", null, "Публичная обложка (по желанию)", -1), I(U("input", {
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
function Ug({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SONG_EDITOR, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : J({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-song-editor"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, Hg, {
			api: t,
			model: r
		})
	});
}
// src/vue/account/ArtistManager.vue
var Wg = {
	id: "sbsong-artist-manager",
	class: "sbsong-artist-manager",
	"data-sb-vue-artist-manager": ""
}, Gg = {
	key: 0,
	class: "sbsong-artist-hint"
}, Kg = {
	key: 1,
	class: "sbsong-artist-hint",
	"data-sb-vue-dna-recap": ""
}, qg = { id: "sbsong-artist-manager-results" }, Jg = ["data-id", "aria-label"], Yg = {
	key: 0,
	class: "sbsong-artist-hint"
}, Xg = {
	__name: "ArtistManager",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ N(t.model.filter || ""), r = (e) => String(e || "").normalize("NFKC").toLocaleLowerCase("ru"), i = K(() => t.model.artists.filter((e) => r(e.name).includes(r(n.value)))), a = Q();
		return L(() => [t.model, i.value.length], ([e, t]) => a.publishArtistManagerSummary(e, t), { immediate: !0 }), (t, r) => (V(), H("section", Wg, [
			r[1] ||= U("div", { class: "sbsong-subhead" }, [U("h2", null, "Мои артисты"), U("button", {
				type: "button",
				"data-sbsong-action": "artists-manage"
			}, "Закрыть ×")], -1),
			r[2] ||= U("p", null, "Создавай свой список исполнителей и музыкальных проектов. Артисты из «ДНК артиста» и сохранённых песен также доступны при выборе. Удаление из списка не меняет существующие песни.", -1),
			e.model.dnaCount ? (V(), H("p", Gg, " Профилей ДНК артиста доступно для выбора: " + O(e.model.dnaCount) + ". Они не удаляются при изменении этого списка. ", 1)) : G("", !0),
			F(a).artistDnaSummary.ready ? (V(), H("p", Kg, " Последний просмотр ДНК артиста: " + O(F(a).artistDnaSummary.profileCount) + " профилей ", 1)) : G("", !0),
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
			U("div", qg, [(V(!0), H(B, null, z(i.value, (e) => (V(), H("div", {
				key: e.id,
				class: "sbsong-artist-entry"
			}, [U("span", null, O(e.name), 1), U("button", {
				type: "button",
				"data-sbsong-action": "artist-remove",
				"data-id": e.id,
				"aria-label": "Удалить артиста " + e.name
			}, "Удалить", 8, Jg)]))), 128)), i.value.length ? G("", !0) : (V(), H("p", Yg, O(e.model.artists.length ? "Ничего не найдено." : "Пока нет добавленных вручную артистов."), 1))])
		]));
	}
};
// src/vue/account/legacyArtistManagerBridge.js
function Zg({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ARTIST_MANAGER, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : J({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-artist-manager"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, Xg, { model: n })
	});
}
// src/vue/account/ArtistDNA.vue
var Qg = {
	key: 0,
	class: "sb-dna-summary",
	"data-sb-vue-artist-manager-recap": ""
}, $g = { key: 1 }, e_ = {
	key: 0,
	class: "sb-dna-grid"
}, t_ = ["data-id"], n_ = { class: "sb-dna-cardimg" }, r_ = ["src"], i_ = {
	key: 1,
	class: "sb-dna-empty"
}, a_ = {
	key: 2,
	class: "sb-dna-detail"
}, o_ = { class: "sb-dna-actions" }, s_ = ["data-id"], c_ = ["data-id"], l_ = ["data-id"], u_ = { class: "sb-dna-hero" }, d_ = { class: "sb-dna-portrait" }, f_ = ["src"], p_ = { class: "sb-dna-facts" }, m_ = {
	key: 0,
	class: "sb-dna-restrictions"
}, h_ = { class: "sb-dna-descr" }, g_ = { class: "sb-dna-style" }, __ = { class: "sb-dna-actions" }, v_ = ["data-id"], y_ = ["data-id"], b_ = { class: "sb-dna-related" }, x_ = ["data-id"], S_ = { key: 1 }, C_ = {
	__name: "ArtistDNA",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = Q();
		return L(() => t.model, (e) => n.publishArtistDnaSummary(e), { immediate: !0 }), (t, r) => (V(), H(B, null, [F(n).artistManagerSummary.ready ? (V(), H("div", Qg, [U("div", null, [U("b", null, O(F(n).artistManagerSummary.artistCount), 1), r[0] ||= U("span", null, "В ручном списке артистов", -1)])])) : G("", !0), e.model.detail ? (V(), H("div", a_, [
			U("div", o_, [
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
				}, "В Suno Studio", 8, s_),
				U("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "dna-edit",
					"data-id": e.model.detail.id
				}, "Изменить", 8, c_),
				U("button", {
					type: "button",
					class: "btn danger small",
					"data-action": "dna-delete",
					"data-id": e.model.detail.id
				}, "Удалить", 8, l_)
			]),
			U("div", u_, [U("div", d_, [e.model.detail.portrait ? (V(), H("img", {
				key: 0,
				src: e.model.detail.portrait,
				alt: "Портрет артиста",
				loading: "lazy"
			}, null, 8, f_)) : (V(), H(B, { key: 1 }, [W("♫")], 64))]), U("div", null, [
				r[3] ||= U("span", null, "МУЗЫКАЛЬНАЯ ИДЕНТИЧНОСТЬ", -1),
				U("h2", null, O(e.model.detail.name), 1),
				U("p", null, O(e.model.detail.subtitle), 1)
			])]),
			U("div", p_, [(V(!0), H(B, null, z(e.model.detail.facts, (e) => (V(), H("div", {
				key: e.label,
				class: "sb-dna-fact"
			}, [U("span", null, O(e.label), 1), U("strong", null, O(e.value), 1)]))), 128))]),
			(V(!0), H(B, null, z(e.model.detail.textFields, (e) => (V(), H("section", {
				key: e.label,
				class: "sb-dna-descr"
			}, [U("h3", null, O(e.label), 1), U("p", null, O(e.value), 1)]))), 128)),
			e.model.detail.forbids.length ? (V(), H("div", m_, [r[4] ||= U("strong", null, "Запреты:", -1), (V(!0), H(B, null, z(e.model.detail.forbids, (e) => (V(), H("span", { key: e }, O(e), 1))), 128))])) : G("", !0),
			U("section", h_, [
				r[5] ||= U("h3", null, "Промпт для Suno Style", -1),
				U("div", g_, O(e.model.detail.style), 1),
				U("div", __, [U("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "dna-copy",
					"data-id": e.model.detail.id
				}, "Копировать Style", 8, v_), U("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "dna-apply",
					"data-id": e.model.detail.id
				}, "Применить в Suno Studio", 8, y_)])
			]),
			U("div", b_, [U("h3", null, "Связанные паспорта треков (" + O(e.model.detail.related.length) + ")", 1), e.model.detail.related.length ? (V(!0), H(B, { key: 0 }, z(e.model.detail.related, (e) => (V(), H("button", {
				key: e.id,
				type: "button",
				class: "sb-dna-tracklink",
				"data-action": "dna-track",
				"data-id": e.id
			}, [U("strong", null, O(e.title), 1), U("span", null, O(e.status) + " →", 1)], 8, x_))), 128)) : (V(), H("p", S_, "Пока нет привязанных треков. В «Паспорте трека» можно выбрать этого артиста."))])
		])) : (V(), H("div", $g, [e.model.profiles.length ? (V(), H("div", e_, [(V(!0), H(B, null, z(e.model.profiles, (e) => (V(), H("button", {
			key: e.id,
			type: "button",
			class: "sb-dna-card",
			"data-action": "dna-open",
			"data-id": e.id
		}, [
			U("div", n_, [e.portrait ? (V(), H("img", {
				key: 0,
				src: e.portrait,
				alt: "",
				loading: "lazy"
			}, null, 8, r_)) : (V(), H(B, { key: 1 }, [W("♫")], 64))]),
			U("div", null, [
				U("strong", null, O(e.name), 1),
				U("span", null, O(e.genre), 1),
				U("small", null, O(e.timbre), 1)
			]),
			r[1] ||= U("span", { class: "sb-dna-arrow" }, "→", -1)
		], 8, t_))), 128))])) : (V(), H("div", i_, " Здесь будут музыкальные персонажи со своим вокалом, инструментами, стилем и визуальным образом. Создай первый профиль. "))]))], 64));
	}
};
// src/vue/account/legacyArtistDNABridge.js
function w_({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_DNA, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : J({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-dna-view"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, C_, { model: n })
	});
}
// src/vue/account/ArtistDNAEditor.vue
var T_ = {
	id: "dna-editor",
	class: "panel sb-dna-editor",
	"data-sb-vue-dna-editor": ""
}, E_ = { class: "sb-dna-formheader" }, D_ = { class: "sb-dna-fields" }, O_ = { class: "field" }, k_ = { class: "field" }, A_ = ["value"], j_ = { class: "field" }, M_ = ["value"], N_ = { class: "field" }, P_ = { class: "field" }, F_ = { class: "field" }, I_ = {
	key: 0,
	class: "sb-dna-fields"
}, L_ = { class: "field" }, R_ = { class: "field" }, z_ = { class: "field" }, B_ = ["for"], V_ = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"rows"
], H_ = { class: "sb-dna-checkboxes" }, U_ = ["id", "onUpdate:modelValue"], W_ = { class: "field" }, G_ = ["for"], K_ = [
	"id",
	"onUpdate:modelValue",
	"rows",
	"maxlength"
], q_ = { class: "field" }, J_ = { class: "sb-dna-previewbox" }, Y_ = { id: "dna-style-preview" }, X_ = { id: "dna-style-count" }, Z_ = {
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
		let t = e, n = /* @__PURE__ */ A({ ...t.model.fields }), r = K(() => t.api.stylePreview(n)), i = [
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
		return (t, s) => (V(), H("div", T_, [
			U("div", E_, [U("div", null, [U("h2", null, O(e.model.editing ? "Редактирование ДНК" : "Новый артист"), 1), s[10] ||= U("p", null, "Сохрани характер звучания — он будет доступен в Suno Studio и «Паспорте трека».", -1)]), s[11] ||= U("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "dna-cancel"
			}, "Закрыть", -1)]),
			U("div", D_, [
				U("div", O_, [s[12] ||= U("label", { for: "dna-name" }, "Имя артиста *", -1), I(U("input", {
					id: "dna-name",
					"onUpdate:modelValue": s[0] ||= (e) => n.name = e,
					maxlength: "120",
					placeholder: "Название музыкального проекта"
				}, null, 512), [[q, n.name]])]),
				U("div", k_, [s[13] ||= U("label", { for: "dna-project" }, "Связанный проект", -1), I(U("select", {
					id: "dna-project",
					"onUpdate:modelValue": s[1] ||= (e) => n.projectId = e
				}, [(V(!0), H(B, null, z(e.model.projects, (e) => (V(), H("option", {
					key: e.id,
					value: e.id
				}, O(e.title), 9, A_))), 128))], 512), [[Lo, n.projectId]])]),
				U("div", j_, [s[14] ||= U("label", { for: "dna-genre" }, "Основной жанр", -1), I(U("select", {
					id: "dna-genre",
					"onUpdate:modelValue": s[2] ||= (e) => n.genre = e
				}, [(V(!0), H(B, null, z(e.model.genres, (e) => (V(), H("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, M_))), 128))], 512), [[Lo, n.genre]])]),
				U("div", N_, [s[15] ||= U("label", { for: "dna-othergenres" }, "Дополнительные жанры", -1), I(U("input", {
					id: "dna-othergenres",
					"onUpdate:modelValue": s[3] ||= (e) => n.otherGenres = e,
					maxlength: "240",
					placeholder: "Например, pop, R&B, electropop"
				}, null, 512), [[q, n.otherGenres]])]),
				U("div", P_, [s[17] ||= U("label", { for: "dna-vocal" }, "Тип вокала", -1), I(U("select", {
					id: "dna-vocal",
					"onUpdate:modelValue": s[4] ||= (e) => n.vocal = e
				}, [...s[16] ||= [
					U("option", { value: "male" }, "Мужской", -1),
					U("option", { value: "female" }, "Женский", -1),
					U("option", { value: "duet" }, "Дуэт", -1)
				]], 512), [[Lo, n.vocal]])]),
				U("div", F_, [s[19] ||= U("label", { for: "dna-language" }, "Язык песни", -1), I(U("select", {
					id: "dna-language",
					"onUpdate:modelValue": s[5] ||= (e) => n.language = e
				}, [...s[18] ||= [
					U("option", { value: "Russian" }, "Русский", -1),
					U("option", { value: "English" }, "Английский", -1),
					U("option", { value: "Spanish" }, "Испанский", -1),
					U("option", { value: "Kazakh" }, "Казахский", -1)
				]], 512), [[Lo, n.language]])])
			]),
			s[24] ||= U("h3", { class: "sb-dna-formsection" }, "Голос и музыкальный почерк", -1),
			(V(), H(B, null, z(i, (e) => (V(), H(B, { key: e.id }, [e.id === "mood" ? (V(), H("div", I_, [U("div", L_, [s[20] ||= U("label", { for: "dna-tempo-min" }, "Темп от (BPM)", -1), I(U("input", {
				id: "dna-tempo-min",
				"onUpdate:modelValue": s[6] ||= (e) => n.tempoMin = e,
				maxlength: "3",
				placeholder: "Например, 90"
			}, null, 512), [[q, n.tempoMin]])]), U("div", R_, [s[21] ||= U("label", { for: "dna-tempo-max" }, "Темп до (BPM)", -1), I(U("input", {
				id: "dna-tempo-max",
				"onUpdate:modelValue": s[7] ||= (e) => n.tempoMax = e,
				maxlength: "3",
				placeholder: "Например, 120"
			}, null, 512), [[q, n.tempoMax]])])])) : G("", !0), U("div", z_, [U("label", { for: "dna-" + e.id }, O(e.label), 9, B_), I(U("textarea", {
				id: "dna-" + e.id,
				"onUpdate:modelValue": (t) => n[e.key] = t,
				maxlength: e.max,
				rows: e.rows
			}, null, 8, V_), [[q, n[e.key]]])])], 64))), 64)),
			s[25] ||= U("h3", { class: "sb-dna-formsection" }, "Запреты и ограничения", -1),
			U("div", H_, [(V(), H(B, null, z(a, (e) => U("label", { key: e.id }, [I(U("input", {
				id: "dna-" + e.id,
				"onUpdate:modelValue": (t) => n[e.key] = t,
				type: "checkbox"
			}, null, 8, U_), [[Fo, n[e.key]]]), W(" " + O(e.label), 1)])), 64))]),
			U("div", W_, [s[22] ||= U("label", { for: "dna-extra" }, "Дополнительные требования к аранжировке", -1), I(U("textarea", {
				id: "dna-extra",
				"onUpdate:modelValue": s[8] ||= (e) => n.extra = e,
				rows: "3",
				maxlength: "650"
			}, null, 512), [[q, n.extra]])]),
			s[26] ||= U("h3", { class: "sb-dna-formsection" }, "Творческий образ", -1),
			(V(), H(B, null, z(o, (e) => U("div", {
				key: e.id,
				class: "field"
			}, [U("label", { for: "dna-" + e.id }, O(e.label), 9, G_), I(U("textarea", {
				id: "dna-" + e.id,
				"onUpdate:modelValue": (t) => n[e.key] = t,
				rows: e.rows,
				maxlength: e.max
			}, null, 8, K_), [[q, n[e.key]]])])), 64)),
			U("div", q_, [s[23] ||= U("label", { for: "dna-portrait" }, "Ссылка на портрет (HTTPS)", -1), I(U("input", {
				id: "dna-portrait",
				"onUpdate:modelValue": s[9] ||= (e) => n.portrait = e,
				maxlength: "2000",
				placeholder: "https://…"
			}, null, 512), [[q, n.portrait]])]),
			s[27] ||= U("h3", { class: "sb-dna-formsection" }, "Промпт ДНК для Suno", -1),
			U("div", J_, [U("div", Y_, O(r.value), 1), U("span", X_, O(r.value.length) + " / 1000", 1)]),
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
function Q_({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_DNA_EDITOR, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : J({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-dna-editor"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, Z_, {
			model: r,
			api: t
		})
	});
}
// src/vue/account/AccountSettings.vue
var $_ = ["data-sb-preferred-theme", "data-sb-applied-theme"], ev = { class: "sbs-layout" }, tv = { class: "sbs-main-column" }, nv = { class: "sbs-panel" }, rv = {
	class: "sbs-field sbs-theme-field",
	for: "sbs-theme"
}, iv = ["value"], av = ["for"], ov = { class: "sbs-option-text" }, sv = { class: "sbs-switch" }, cv = [
	"id",
	"onUpdate:modelValue",
	"data-sbs-setting",
	"aria-label"
], lv = { class: "sbs-panel" }, uv = {
	class: "sbs-field",
	for: "sbs-start"
}, dv = ["value"], fv = { class: "sbs-panel" }, pv = {
	class: "sbs-field",
	for: "sbs-name"
}, mv = { class: "sbs-side-column" }, hv = { class: "sbs-panel sbs-reset-panel" }, gv = {
	key: 0,
	class: "sbs-confirm"
}, _v = {
	key: 1,
	type: "button",
	class: "sbs-secondary",
	"data-sbs-action": "reset"
}, vv = ["hidden"], yv = {
	__name: "AccountSettings",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = Q(), r = /* @__PURE__ */ A({ ...t.model.settings });
		L(() => n.appearance, (e) => {
			for (let t of [
				"theme",
				"compact",
				"largeText",
				"reduceMotion",
				"startPage"
			]) r[t] = e[t];
		});
		let i = /* @__PURE__ */ A({ value: t.model.name }), a = [
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
			t.model.resetPending && Dn(() => document.querySelector("#sb-vue-account-settings .sbs-confirm-button")?.focus());
		}), (t, o) => (V(), H("section", {
			id: "sbs-page",
			class: "sbs-page",
			"data-sb-vue-settings": "",
			"data-sb-preferred-theme": F(n).appearance.theme,
			"data-sb-applied-theme": F(n).appearance.resolvedTheme
		}, [
			o[17] ||= da("<header class=\"sbs-heading\"><button type=\"button\" class=\"sbs-back\" data-sbs-action=\"close\">← Вернуться в кабинет</button><div class=\"sbs-eyebrow\">SUNOBOOM · ЛИЧНЫЙ КАБИНЕТ</div><div class=\"sbs-heading-row\"><div><h1>Настройки</h1><p>Настрой музыкальную мастерскую под себя. Изменения применяются сразу и сохраняются в этом браузере.</p></div><span class=\"sbs-badge\">⚙️ ПЕРСОНАЛИЗАЦИЯ</span></div></header>", 1),
			U("div", ev, [U("div", tv, [
				U("section", nv, [
					o[5] ||= U("div", { class: "sbs-panel-head" }, [U("span", {
						class: "sbs-symbol",
						"aria-hidden": "true"
					}, "🎨"), U("div", null, [U("h2", null, "Внешний вид"), U("p", null, "Удобная работа на компьютере и телефоне")])], -1),
					U("label", rv, [o[3] ||= U("span", null, "Тема приложения", -1), I(U("select", {
						id: "sbs-theme",
						"onUpdate:modelValue": o[0] ||= (e) => r.theme = e,
						"data-sbs-setting": "theme",
						"aria-label": "Тема приложения"
					}, [(V(!0), H(B, null, z(e.model.themes, (e) => (V(), H("option", {
						key: e.id,
						value: e.id
					}, O(e.title), 9, iv))), 128))], 512), [[Lo, r.theme]])]),
					o[6] ||= U("p", { class: "sbs-help sbs-theme-help" }, "Выбери палитру: тёмную, светлую, системную или одну из шести цветных тем. Изменения сохраняются.", -1),
					(V(), H(B, null, z(a, (e) => U("label", {
						key: e.key,
						class: "sbs-option",
						for: "sbs-" + e.key
					}, [U("span", ov, [U("strong", null, O(e.title), 1), U("small", null, O(e.desc), 1)]), U("span", sv, [I(U("input", {
						id: "sbs-" + e.key,
						"onUpdate:modelValue": (t) => r[e.key] = t,
						type: "checkbox",
						"data-sbs-setting": e.key,
						role: "switch",
						"aria-label": e.title
					}, null, 8, cv), [[Fo, r[e.key]]]), o[4] ||= U("span", {
						class: "sbs-switch-track",
						"aria-hidden": "true"
					}, null, -1)])], 8, av)), 64))
				]),
				U("section", lv, [
					o[8] ||= U("div", { class: "sbs-panel-head" }, [U("span", {
						class: "sbs-symbol",
						"aria-hidden": "true"
					}, "🏠"), U("div", null, [U("h2", null, "При открытии сайта"), U("p", null, "Выбери стартовый раздел SUNOBOOM")])], -1),
					U("label", uv, [o[7] ||= U("span", null, "Стартовая страница", -1), I(U("select", {
						id: "sbs-start",
						"onUpdate:modelValue": o[1] ||= (e) => r.startPage = e,
						"data-sbs-setting": "startPage"
					}, [(V(!0), H(B, null, z(e.model.pages, (e) => (V(), H("option", {
						key: e.id,
						value: e.id
					}, O(e.title), 9, dv))), 128))], 512), [[Lo, r.startPage]])]),
					o[9] ||= U("p", { class: "sbs-help" }, "Применяется при следующем открытии или обновлении сайта. Ссылки на конкретные карточки жанров сохраняют свой переход.", -1)
				]),
				U("section", fv, [
					o[11] ||= U("div", { class: "sbs-panel-head" }, [U("span", {
						class: "sbs-symbol",
						"aria-hidden": "true"
					}, "👤"), U("div", null, [U("h2", null, "Профиль"), U("p", null, "Имя отображается только в локальном кабинете")])], -1),
					U("label", pv, [o[10] ||= U("span", null, "Имя в кабинете", -1), I(U("input", {
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
			]), U("aside", mv, [o[16] ||= da("<section class=\"sbs-panel\"><div class=\"sbs-panel-head\"><span class=\"sbs-symbol\" aria-hidden=\"true\">🔒</span><div><h2>Данные и приватность</h2></div></div><p class=\"sbs-info\">Сейчас SUNOBOOM работает как локальный прототип: твои проекты и настройки сохраняются в браузере. Синхронизации между устройствами пока нет.</p><p class=\"sbs-info\">GitHub Pages остаётся публичной демонстрационной площадкой — полноценный закрытый вход по приглашениям ещё не подключён.</p><button type=\"button\" class=\"sbs-secondary\" data-sbs-action=\"backup\">↓ Перейти к резервным копиям</button></section>", 1), U("section", hv, [
				o[14] ||= U("div", { class: "sbs-panel-head" }, [U("span", {
					class: "sbs-symbol",
					"aria-hidden": "true"
				}, "↺"), U("div", null, [U("h2", null, "Сброс предпочтений")])], -1),
				o[15] ||= U("p", { class: "sbs-info" }, "Вернуть стандартные параметры отображения. Песни, проекты, избранное и имя профиля не удаляются.", -1),
				e.model.resetPending ? (V(), H("div", gv, [...o[13] ||= [U("strong", null, "Сбросить настройки интерфейса?", -1), U("div", null, [U("button", {
					type: "button",
					class: "sbs-secondary",
					"data-sbs-action": "cancel-reset"
				}, "Отмена"), U("button", {
					type: "button",
					class: "sbs-confirm-button",
					"data-sbs-action": "confirm-reset"
				}, "Да, сбросить")], -1)]])) : (V(), H("button", _v, "Сбросить настройки"))
			])])]),
			U("p", {
				id: "sbs-message",
				class: "sbs-message",
				role: "status",
				"aria-live": "polite",
				hidden: !e.model.message
			}, O(e.model.message), 9, vv)
		], 8, $_));
	}
};
// src/vue/account/legacyAccountSettingsBridge.js
function bv({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SETTINGS, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : J({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-account-settings"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, yv, { model: n })
	});
}
// src/vue/player/PlayerLab.vue
var xv = {
	class: "sbp-layout",
	"data-sb-vue-player-lab": ""
}, Sv = {
	class: "sbp-main",
	"aria-label": "Плеер"
}, Cv = {
	class: "sbp-bars",
	"aria-hidden": "true"
}, wv = { class: "sbp-title-area" }, Tv = {
	id: "sbp-now-tag",
	class: "sbp-now-tag"
}, Ev = { id: "sbp-title" }, Dv = { id: "sbp-artist" }, Ov = {
	id: "sbp-counter",
	class: "sbp-counter"
}, kv = {
	key: 0,
	class: "sbp-now-tag",
	"data-sb-vue-ab-recap": ""
}, Av = { class: "sbp-progress" }, jv = ["value", "disabled"], Mv = { class: "sbp-times" }, Nv = { id: "sbp-time-current" }, Pv = { id: "sbp-time-total" }, Fv = { class: "sbp-transport" }, Iv = ["aria-pressed"], Lv = ["aria-label", "disabled"], Rv = ["title", "aria-label"], zv = { class: "sbp-extras" }, Bv = { class: "sbp-volume" }, Vv = {
	key: 0,
	class: "sbp-ios-volume"
}, Hv = ["value"], Uv = { id: "sbp-volume-label" }, Wv = {
	class: "sbp-speed",
	for: "sbp-rate"
}, Gv = ["value"], Kv = ["value"], qv = { class: "sbp-side" }, Jv = { class: "sbp-side-head" }, Yv = { id: "sbp-list-count" }, Xv = ["disabled"], Zv = {
	class: "sbp-track-list",
	id: "sbp-list",
	"aria-label": "Список треков"
}, Qv = ["data-sbp-item"], $v = ["data-index", "aria-label"], ey = { class: "sbp-track-index" }, ty = { class: "sbp-track-meta" }, ny = { class: "sbp-track-duration" }, ry = ["data-index", "aria-label"], iy = {
	key: 0,
	class: "sbp-empty"
}, ay = {
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
		let t = e, n = /* @__PURE__ */ N(t.initialModel), r = Q();
		L(n, (e) => r.publishPlayerLabSummary(e), { immediate: !0 });
		function i() {
			let e = t.api.snapshot();
			e && (n.value = e);
		}
		R(() => {
			window.addEventListener("sunoboom:player-lab-update", i), i();
		}), xr(() => window.removeEventListener("sunoboom:player-lab-update", i));
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
		return (e, t) => (V(), H("div", xv, [U("section", Sv, [
			U("div", { class: D(["sbp-art", { "is-playing": n.value.playing }]) }, [
				t[0] ||= U("div", { class: "sbp-art-orb" }, "♫", -1),
				U("div", Cv, [(V(!0), H(B, null, z(F(a), (e) => (V(), H("i", {
					key: e.index,
					style: E({
						"--sbp-i": e.index,
						"--sbp-h": e.height
					})
				}, null, 4))), 128))]),
				t[1] ||= U("span", null, "SONIC LAB / PRIVATE PREVIEW", -1)
			], 2),
			U("div", wv, [U("div", null, [
				U("div", Tv, O(n.value.nowTag), 1),
				U("h2", Ev, O(n.value.title), 1),
				U("p", Dv, O(n.value.artist), 1)
			]), U("span", Ov, O(n.value.counter), 1)]),
			F(r).playerAbSummary.ready && F(r).playerAbSummary.readyCount ? (V(), H("p", kv, "A/B: загружено " + O(F(r).playerAbSummary.readyCount) + " из 2 · активна " + O(F(r).playerAbSummary.active), 1)) : G("", !0),
			U("div", Av, [
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
				}, null, 12, jv),
				U("div", Mv, [U("span", Nv, O(n.value.currentTime), 1), U("span", Pv, O(n.value.totalTime), 1)])
			]),
			U("div", Fv, [
				U("button", {
					type: "button",
					class: D(["sbp-secondary", { "is-on": n.value.shuffle }]),
					id: "sbp-shuffle",
					"data-sbp-action": "shuffle",
					"aria-label": "Случайный порядок",
					"aria-pressed": String(n.value.shuffle),
					title: "Случайный порядок"
				}, "⤨", 10, Iv),
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
				}, O(n.value.playing ? "❚❚" : "▶"), 9, Lv),
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
				}, O(n.value.repeat === "one" ? "↻₁" : "↻"), 11, Rv)
			]),
			U("div", zv, [U("div", Bv, [n.value.ios ? (V(), H("span", Vv, "📱 Громкость регулируется кнопками телефона")) : (V(), H(B, { key: 1 }, [
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
				}, null, 8, Hv),
				U("output", Uv, O(n.value.volume) + "%", 1)
			], 64))]), U("label", Wv, [t[7] ||= W(" Скорость ", -1), U("select", {
				id: "sbp-rate",
				"aria-label": "Скорость воспроизведения",
				value: n.value.rate
			}, [(V(), H(B, null, z(o, (e) => U("option", {
				key: e,
				value: e
			}, O(e) + "×", 9, Kv)), 64))], 8, Gv)])]),
			I(U("div", {
				class: "sbp-message",
				id: "sbp-message",
				role: "status",
				"aria-live": "polite"
			}, O(n.value.message), 513), [[$a, n.value.message]])
		]), U("aside", qv, [
			U("div", Jv, [U("div", null, [t[8] ||= U("h2", null, "Очередь воспроизведения", -1), U("small", Yv, O(n.value.count) + " " + O(n.value.count === 1 ? "трек" : n.value.count > 1 && n.value.count < 5 ? "трека" : "треков"), 1)]), U("button", {
				type: "button",
				class: "sbp-clear",
				"data-sbp-action": "clear",
				id: "sbp-clear",
				disabled: !n.value.count
			}, "Очистить", 8, Xv)]),
			t[9] ||= da("<div class=\"sbp-dropzone\" id=\"sbp-dropzone\"><div class=\"sbp-drop-icon\">↥</div><strong>Загрузи свои треки</strong><p>MP3, WAV, M4A, AAC, OGG, FLAC — если формат поддерживается браузером. Файлы никуда не отправляются.</p><label class=\"sbp-upload-label\" for=\"sbp-file\">Выбрать аудиофайлы</label><input id=\"sbp-file\" type=\"file\" accept=\"audio/*,.mp3,.m4a,.aac,.wav,.ogg,.flac,.opus\" multiple></div><div class=\"sbp-demo-box\"><div><strong>Нет аудиофайлов?</strong><p>Создать 3 коротких оригинальных демо-сигнала для проверки управления.</p></div><button type=\"button\" data-sbp-action=\"demo\" id=\"sbp-demo\">+ Демо-треки</button></div>", 2),
			U("div", Zv, [(V(!0), H(B, null, z(n.value.tracks, (e) => (V(), H("article", {
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
				}, [U("span", ey, O(e.playLabel), 1), U("span", ty, [U("strong", null, O(e.name), 1), U("small", null, O(e.artist) + " · " + O(e.sourceLabel), 1)])], 8, $v),
				U("span", ny, O(e.durationLabel), 1),
				U("button", {
					type: "button",
					class: "sbp-track-remove",
					"data-sbp-action": "remove",
					"data-index": e.index,
					title: "Удалить из списка",
					"aria-label": "Удалить " + e.name
				}, "×", 8, ry)
			], 10, Qv))), 128)), n.value.tracks.length ? G("", !0) : (V(), H("div", iy, " Плейлист пока пуст. Добавь MP3 или нажми «Демо-треки», чтобы начать тест. "))])
		])]));
	}
};
// src/vue/player/legacyPlayerLabBridge.js
function oy({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PLAYER_LAB, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : J({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-player-lab"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, ay, {
			api: t,
			initialModel: r
		})
	});
}
// src/vue/player/PlayerAB.vue
var sy = { class: "sbab-heading" }, cy = {
	key: 0,
	class: "sbab-kicker",
	"data-sb-vue-player-recap": ""
}, ly = { class: "sbab-files" }, uy = ["data-sbab-card"], dy = { class: "sbab-file-top" }, fy = { class: "sbab-side-label" }, py = ["id"], my = ["id"], hy = ["id"], gy = { class: "sbab-file-bottom" }, _y = ["for"], vy = ["id", "data-sbab-file"], yy = ["data-side", "disabled"], by = ["id"], xy = { class: "sbab-console" }, Sy = { class: "sbab-console-top" }, Cy = { id: "sbab-active-label" }, wy = { class: "sbab-wave" }, Ty = {
	class: "sbab-wave-bars",
	"aria-hidden": "true"
}, Ey = {
	class: "sbab-toggle",
	role: "group",
	"aria-label": "Выбор версии для прослушивания"
}, Dy = ["data-side", "aria-pressed"], Oy = { class: "sbab-scrub" }, ky = ["value", "disabled"], Ay = { class: "sbab-times" }, jy = { id: "sbab-current" }, My = { id: "sbab-duration" }, Ny = { class: "sbab-transport" }, Py = ["disabled", "aria-label"], Fy = { class: "sbab-clip" }, Iy = { class: "sbab-clip-actions" }, Ly = {
	type: "button",
	"data-sbab-action": "mark-start"
}, Ry = { id: "sbab-start" }, zy = {
	type: "button",
	"data-sbab-action": "mark-end"
}, By = { id: "sbab-end" }, Vy = ["aria-pressed", "aria-label"], Hy = { class: "sbab-volume" }, Uy = { key: 0 }, Wy = ["for"], Gy = [
	"id",
	"data-sbab-vol",
	"value"
], Ky = ["hidden"], qy = { class: "sbab-review" }, Jy = { class: "sbab-rating-grid" }, Yy = { class: "sbab-rating-label" }, Xy = [
	"data-sbab-score",
	"aria-label",
	"value"
], Zy = ["value"], Qy = { class: "sbab-note-grid" }, $y = ["for"], eb = [
	"id",
	"data-sbab-note",
	"placeholder",
	"value"
], tb = {
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
		let t = e, n = /* @__PURE__ */ N(t.initialModel), r = Q();
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
		}), xr(() => window.removeEventListener("sunoboom:player-ab-update", s)), (e, t) => (V(), H("section", {
			id: "sbab-compare",
			class: D(["sbab-shell", {
				"sbab-is-playing": n.value.playing,
				"sbab-has-files": n.value.hasBoth
			}]),
			"aria-label": "Сравнение аудиоверсий A и B",
			"data-sb-vue-player-ab": ""
		}, [
			U("header", sy, [U("div", null, [
				t[0] ||= U("span", { class: "sbab-kicker" }, "SUNOBOOM · AUDIO TEST LAB", -1),
				t[1] ||= U("h2", null, "A/B-сравнение аудиоверсий", -1),
				t[2] ||= U("p", null, "Загрузи два варианта песни и переключайся между ними в одной временной точке. Сравнивай вокал, аранжировку и финальное звучание.", -1),
				F(r).playerLabSummary.ready ? (V(), H("p", cy, "Очередь плеера LAB: " + O(F(r).playerLabSummary.queueCount) + " треков · " + O(F(r).playerLabSummary.playing ? "воспроизведение" : "пауза"), 1)) : G("", !0)
			]), t[3] ||= U("span", { class: "sbab-lab-badge" }, "A ↔ B", -1)]),
			U("div", ly, [(V(), H(B, null, z(i, (e) => U("div", {
				key: e,
				class: D(["sbab-file-card", [e === "A" ? "sbab-card-a" : "sbab-card-b", { "sbab-active-card": n.value.active === e }]]),
				"data-sbab-card": e
			}, [
				U("div", dy, [U("span", fy, "ВЕРСИЯ " + O(e), 1), U("span", {
					class: "sbab-loaded",
					id: "sbab-ready-" + e
				}, O(n.value.files[e].ready ? "Файл добавлен" : "Ожидает файл"), 9, py)]),
				U("strong", {
					class: "sbab-filename",
					id: "sbab-name-" + e
				}, O(n.value.files[e].name), 9, my),
				U("p", {
					class: "sbab-filesub",
					id: "sbab-info-" + e
				}, O(n.value.files[e].info), 9, hy),
				U("div", gy, [
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
					})], -1), W(" " + O(n.value.files[e].ready ? "Заменить файл" : "Выбрать файл"), 1)], 8, _y),
					U("input", {
						type: "file",
						id: "sbab-file-" + e,
						accept: "audio/*,.mp3,.wav,.m4a,.aac,.ogg,.flac,.opus",
						"data-sbab-file": e
					}, null, 8, vy),
					U("button", {
						type: "button",
						"data-sbab-action": "remove",
						"data-side": e,
						class: "sbab-remove",
						disabled: !n.value.files[e].ready
					}, "Удалить", 8, yy),
					U("span", {
						class: "sbab-length",
						id: "sbab-length-" + e
					}, O(n.value.files[e].duration), 9, by)
				])
			], 10, uy)), 64))]),
			t[20] ||= U("div", { class: "sbab-demo-row" }, [U("p", null, "Для первого теста можно создать два разных оригинальных коротких аудиофрагмента."), U("button", {
				type: "button",
				"data-sbab-action": "demo"
			}, "Создать демо A и B")], -1),
			U("div", xy, [
				U("div", Sy, [t[5] ||= U("span", { class: "sbab-kicker" }, "АКТИВНОЕ ПРОСЛУШИВАНИЕ", -1), U("span", Cy, "Версия " + O(n.value.active) + O(n.value.playing ? " · Воспроизведение" : ""), 1)]),
				U("div", wy, [U("div", Ty, [(V(!0), H(B, null, z(F(o), (e, t) => (V(), H("i", {
					key: t,
					style: E({ "--bar-height": e })
				}, null, 4))), 128))]), t[6] ||= U("div", { class: "sbab-wave-center" }, "A / B", -1)]),
				U("div", Ey, [(V(), H(B, null, z(i, (e) => U("button", {
					key: e,
					type: "button",
					class: D(e === "A" ? "sbab-btn-a" : "sbab-btn-b"),
					"data-sbab-action": "select",
					"data-side": e,
					"aria-pressed": String(n.value.active === e)
				}, [W(O(e) + " ", 1), U("small", null, "Версия " + O(e), 1)], 10, Dy)), 64))]),
				U("div", Oy, [
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
					}, null, 8, ky),
					U("div", Ay, [U("span", jy, O(n.value.currentTime), 1), U("span", My, O(n.value.duration), 1)])
				]),
				U("div", Ny, [
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
					}, O(n.value.playing ? "❚❚" : "▶"), 9, Py),
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
				U("div", Fy, [t[13] ||= U("div", { class: "sbab-clip-title" }, [U("strong", null, "Повтор выбранного фрагмента"), U("small", null, "Например, только припев или куплет")], -1), U("div", Iy, [
					U("button", Ly, [t[10] ||= W("Начало: ", -1), U("span", Ry, O(n.value.start), 1)]),
					U("button", zy, [t[11] ||= W("Конец: ", -1), U("span", By, O(n.value.end), 1)]),
					U("button", {
						type: "button",
						"data-sbab-action": "loop",
						id: "sbab-loop",
						"aria-pressed": String(n.value.loop),
						"aria-label": n.value.loop ? "Повтор фрагмента включён" : "Повтор фрагмента выключен"
					}, O(n.value.loop ? "↻ Повтор включён" : "↻ Повтор выкл."), 9, Vy),
					t[12] ||= U("button", {
						type: "button",
						"data-sbab-action": "clear-segment",
						"aria-label": "Очистить границы фрагмента"
					}, "✕", -1)
				])]),
				U("div", Hy, [n.value.ios ? (V(), H("span", Uy, "📱 Громкость регулируется кнопками телефона")) : (V(), H(B, { key: 1 }, z(i, (e) => U("label", {
					key: e,
					for: "sbab-vol-" + e
				}, [W(" Уровень " + O(e) + " ", 1), U("input", {
					id: "sbab-vol-" + e,
					"data-sbab-vol": e,
					type: "range",
					min: "0",
					max: "100",
					value: n.value.volume[e]
				}, null, 8, Gy)], 8, Wy)), 64))]),
				U("p", {
					id: "sbab-status",
					class: "sbab-status",
					role: "status",
					"aria-live": "polite",
					hidden: !n.value.status
				}, O(n.value.status), 9, Ky)
			]),
			U("section", qy, [
				t[18] ||= U("header", null, [U("h3", null, "Оценка на слух"), U("p", null, "Субъективное сравнение. Оценки выставляешь ты — автоматического анализа качества здесь нет.")], -1),
				U("div", Jy, [
					t[15] ||= U("div", { class: "sbab-rating-head" }, "Параметр", -1),
					t[16] ||= U("div", { class: "sbab-rating-head" }, "A", -1),
					t[17] ||= U("div", { class: "sbab-rating-head" }, "B", -1),
					(V(), H(B, null, z(a, (e) => (V(), H(B, { key: e.key }, [U("div", Yy, O(e.label), 1), (V(), H(B, null, z(i, (r) => U("div", { key: r }, [U("select", {
						"data-sbab-score": r + ":" + e.key,
						"aria-label": e.label + " — версия " + r,
						value: n.value.scores[r][e.key]
					}, [t[14] ||= U("option", { value: 0 }, "—", -1), (V(), H(B, null, z(5, (e) => U("option", {
						key: e,
						value: e
					}, O(e) + "/5", 9, Zy)), 64))], 8, Xy)])), 64))], 64))), 64))
				]),
				U("div", Qy, [(V(), H(B, null, z(i, (e) => U("label", {
					key: e,
					for: "sbab-note-" + e
				}, [W(" Заметки по " + O(e) + " ", 1), U("textarea", {
					id: "sbab-note-" + e,
					"data-sbab-note": e,
					rows: "3",
					maxlength: "1000",
					placeholder: e === "A" ? "Сильные стороны, что улучшить…" : "Вокал, баланс, пространство…",
					value: n.value.notes[e]
				}, null, 8, eb)], 8, $y)), 64))]),
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
function nb({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PLAYER_AB, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : J({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-player-ab"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, tb, {
			api: t,
			initialModel: r
		})
	});
}
// src/vue/producer/ProducerSongList.vue
var rb = ["data-id", "aria-pressed"], ib = { class: "sbpc-song-main" }, ab = { class: "sbpc-song-meta" }, ob = { class: "sbpc-tiny-progress" }, sb = {
	key: 0,
	class: "sbpc-help",
	"data-sb-vue-passport-recap": ""
}, cb = {
	key: 1,
	class: "sbpc-empty"
}, lb = {
	__name: "ProducerSongList",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ N(t.model.query || ""), r = Q();
		L(() => t.model, (e) => r.publishMasterListSummary(e), { immediate: !0 });
		let i = (e) => String(e ?? "").normalize("NFKC").toLocaleLowerCase("ru"), a = K(() => {
			let e = i(n.value.trim());
			return t.model.records.filter((t) => i(t.searchText).includes(e));
		});
		function o(e) {
			n.value = String(e.detail?.query ?? "");
		}
		return R(() => window.addEventListener("sunoboom:producer-search", o)), Sr(() => window.removeEventListener("sunoboom:producer-search", o)), (t, n) => (V(), H(B, null, [
			(V(!0), H(B, null, z(a.value, (t) => (V(), H("button", {
				key: t.id,
				type: "button",
				class: D(["sbpc-song", { active: t.id === e.model.selectedId }]),
				"data-pc-action": "open",
				"data-id": t.id,
				"aria-pressed": t.id === e.model.selectedId
			}, [
				U("span", ib, [U("strong", null, O(t.title), 1), U("span", null, O(t.artist), 1)]),
				U("span", ab, [U("b", null, O(t.done) + "/" + O(t.total), 1), U("small", null, O(t.nextLabel ? "Следующий этап: " + t.nextLabel : "Все этапы отмечены готовыми"), 1)]),
				U("span", ob, [U("i", { style: E({ width: t.percent + "%" }) }, null, 4)])
			], 10, rb))), 128)),
			F(r).passportListSummary.ready ? (V(), H("p", sb, " Паспорта треков · последний фильтр: " + O(F(r).passportListSummary.visibleCount), 1)) : G("", !0),
			a.value.length ? G("", !0) : (V(), H("p", cb, O(e.model.hasRecords ? "Поиск не дал результатов. Измени запрос или создай новую рабочую карточку." : "Пока нет рабочих карточек. Начни с первой песни выше."), 1))
		], 64));
	}
};
// src/vue/producer/legacyProducerSongListBridge.js
function ub({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PRODUCER_LIST, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : J({
		root: n,
		selectTarget: (e) => e.querySelector("#sbpc-list[data-sb-vue-producer-list]"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, lb, { model: n })
	});
}
// src/vue/producer/ProducerSongDetail.vue
var db = {
	class: "sbpc-workspace",
	"data-sb-vue-producer-detail": ""
}, fb = { class: "sbpc-panel sbpc-song-head" }, pb = { class: "sbpc-head-top" }, mb = { class: "sbpc-completion" }, hb = { class: "sbpc-next" }, gb = {
	key: 0,
	class: "sbpc-help",
	"data-sb-vue-passport-detail-recap": ""
}, _b = { class: "sbpc-meta-editor" }, vb = { class: "sbpc-wide" }, yb = { class: "sbpc-panel" }, bb = { class: "sbpc-panel-head" }, xb = ["aria-valuenow"], Sb = { class: "sbpc-stages" }, Cb = ["data-status"], wb = { class: "sbpc-stage-index" }, Tb = { class: "sbpc-stage-body" }, Eb = { class: "sbpc-stage-title" }, Db = { class: "sbpc-stage-state" }, Ob = {
	key: 0,
	class: "sbpc-resource-present"
}, kb = {
	key: 1,
	class: "sbpc-resource-empty"
}, Ab = { class: "sbpc-stage-actions" }, jb = [
	"onUpdate:modelValue",
	"data-pc-stage",
	"aria-label"
], Mb = ["value"], Nb = ["data-step"], Pb = { class: "sbpc-panel" }, Fb = { class: "sbpc-links" }, Ib = ["for"], Lb = [
	"id",
	"onUpdate:modelValue",
	"data-pc-link"
], Rb = ["value"], zb = ["data-type", "data-id"], Bb = { class: "sbpc-panel sbpc-arrangement" }, Vb = { class: "sbpc-panel-head" }, Hb = { class: "sbpc-arrangement-actions" }, Ub = {
	key: 0,
	type: "button",
	"data-pc-action": "restore-arrangement"
}, Wb = {
	key: 0,
	class: "sbpc-subnote"
}, Gb = { class: "sbpc-panel" }, Kb = { class: "sbpc-panel-head" }, qb = {
	key: 0,
	class: "sbpc-log"
}, Jb = {
	key: 1,
	class: "sbpc-empty"
}, Yb = {
	__name: "ProducerSongDetail",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = Q();
		L(() => t.model, (e) => n.publishMasterDetailSummary(e), { immediate: !0 });
		let r = /* @__PURE__ */ A({
			title: t.model.title,
			artist: t.model.artist,
			notes: t.model.notes
		}), i = /* @__PURE__ */ A(Object.fromEntries(t.model.links.map((e) => [e.field, e.value]))), a = /* @__PURE__ */ A(Object.fromEntries(t.model.stages.map((e) => [e.key, e.status])));
		return (t, o) => (V(), H("div", db, [
			U("section", fb, [
				U("div", pb, [o[3] ||= U("span", { class: "sbpc-kicker" }, "КАРТОЧКА ПРОДЮСИРОВАНИЯ", -1), U("span", mb, O(e.model.percent) + "% готовности", 1)]),
				U("h2", null, O(e.model.title || "Без названия"), 1),
				U("p", null, O(e.model.artist || "Исполнитель пока не указан") + O(e.model.projectTitle ? " · " + e.model.projectTitle : ""), 1),
				U("p", hb, O(e.model.nextLabel ? "Следующий этап: " + e.model.nextLabel : "Все этапы отмечены готовыми"), 1),
				F(n).passportDetailSummary.ready ? (V(), H("p", gb, " Последний открытый паспорт: " + O(F(n).passportDetailSummary.versionCount) + " аудиоверсий · " + O(F(n).passportDetailSummary.linkedCount) + " из 3 материалов связано ", 1)) : G("", !0),
				U("div", _b, [
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
					U("label", vb, [o[6] ||= W("Продюсерские заметки ", -1), I(U("textarea", {
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
			U("section", yb, [
				U("header", bb, [o[9] ||= U("h3", null, "Маршрут песни", -1), U("span", null, O(e.model.done) + " из " + O(e.model.total) + " этапов", 1)]),
				U("div", {
					class: "sbpc-progress",
					role: "progressbar",
					"aria-label": "Готовность работы",
					"aria-valuemin": "0",
					"aria-valuemax": "100",
					"aria-valuenow": e.model.percent
				}, [U("span", { style: E({ width: e.model.percent + "%" }) }, null, 4)], 8, xb),
				U("div", Sb, [(V(!0), H(B, null, z(e.model.stages, (t) => (V(), H("article", {
					key: t.key,
					class: "sbpc-stage",
					"data-status": a[t.key]
				}, [U("div", wb, O(a[t.key] === "done" ? "✓" : t.index), 1), U("div", Tb, [
					U("div", Eb, [U("strong", null, O(t.title), 1), U("small", null, O(t.desc), 1)]),
					U("div", Db, [t.hasMaterial ? (V(), H("span", Ob, "● " + O(t.materialLabel), 1)) : (V(), H("span", kb, "○ Подтверждённых материалов нет"))]),
					U("div", Ab, [U("label", null, [o[10] ||= W("Готовность ", -1), I(U("select", {
						"onUpdate:modelValue": (e) => a[t.key] = e,
						"data-pc-stage": t.key,
						"aria-label": "Этап " + t.title
					}, [(V(!0), H(B, null, z(e.model.statuses, (e) => (V(), H("option", {
						key: e.id,
						value: e.id
					}, O(e.label), 9, Mb))), 128))], 8, jb), [[Lo, a[t.key]]])]), U("button", {
						type: "button",
						"data-pc-action": "open-stage",
						"data-step": t.key
					}, "Открыть инструмент ↗", 8, Nb)])
				])], 8, Cb))), 128))]),
				o[11] ||= U("p", { class: "sbpc-help" }, "Готовность отмечается вручную. Наличие материала показано отдельно и не считается автоматически завершённым этапом.", -1)
			]),
			U("section", Pb, [
				o[12] ||= U("header", { class: "sbpc-panel-head" }, [U("h3", null, "Связанные материалы"), U("span", null, "Без копирования данных")], -1),
				o[13] ||= U("p", { class: "sbpc-help" }, "Свяжи существующие идеи, промпты, паспорт трека и карточку с аудио. Исходные записи останутся в своих разделах.", -1),
				U("div", Fb, [(V(!0), H(B, null, z(e.model.links, (e) => (V(), H("div", {
					key: e.field,
					class: "sbpc-link-field"
				}, [
					U("label", { for: "sbpc-" + e.field }, O(e.label), 9, Ib),
					I(U("select", {
						id: "sbpc-" + e.field,
						"onUpdate:modelValue": (t) => i[e.field] = t,
						"data-pc-link": e.field
					}, [(V(!0), H(B, null, z(e.options, (e) => (V(), H("option", {
						key: e.value,
						value: e.value
					}, O(e.label), 9, Rb))), 128))], 8, Lb), [[Lo, i[e.field]]]),
					e.value ? (V(), H("button", {
						key: 0,
						type: "button",
						"data-pc-action": "open-link",
						"data-type": e.type,
						"data-id": e.value
					}, O(e.available ? "Перейти к материалу" : "Материал недоступен") + " ↗ ", 9, zb)) : G("", !0)
				]))), 128))]),
				o[14] ||= U("button", {
					type: "button",
					class: "sbpc-main-btn",
					"data-pc-action": "save-links"
				}, "Сохранить связи", -1)
			]),
			U("section", Bb, [
				U("header", Vb, [o[15] ||= U("h3", null, "Аранжировка для этой песни", -1), U("span", null, O(e.model.arrangement.count ? e.model.arrangement.count + " блоков сохранено" : "Снимок ещё не сохранён"), 1)]),
				o[18] ||= U("p", { class: "sbpc-help" }, "Конструктор Suno Studio использует текущий рабочий черновик. Сохрани его сюда отдельно для песни; восстановление выполняется только по твоей команде.", -1),
				U("div", Hb, [
					o[16] ||= U("button", {
						type: "button",
						"data-pc-action": "capture-arrangement"
					}, "Сохранить текущую аранжировку", -1),
					e.model.arrangement.count ? (V(), H("button", Ub, "Восстановить в Studio")) : G("", !0),
					o[17] ||= U("button", {
						type: "button",
						"data-pc-action": "open-stage",
						"data-step": "arrangement"
					}, "Открыть аранжировщик ↗", -1)
				]),
				e.model.arrangement.count ? (V(), H("p", Wb, " Сохранено: " + O(e.model.arrangement.savedAt) + " · " + O(e.model.arrangement.count) + " блоков · " + O(e.model.arrangement.duration || "длительность не рассчитана"), 1)) : G("", !0)
			]),
			U("section", Gb, [
				U("header", Kb, [o[19] ||= U("h3", null, "История работы", -1), U("span", null, O(e.model.history.length) + " событий", 1)]),
				o[20] ||= U("div", { class: "sbpc-log-input" }, [U("input", {
					id: "sbpc-history-note",
					type: "text",
					maxlength: "350",
					placeholder: "Добавить запись: что изменилось или что сделать дальше"
				}), U("button", {
					type: "button",
					"data-pc-action": "add-note"
				}, "Добавить")], -1),
				e.model.history.length ? (V(), H("ol", qb, [(V(!0), H(B, null, z(e.model.history, (e, t) => (V(), H("li", { key: t }, [U("time", null, O(e.date), 1), U("span", null, O(e.text), 1)]))), 128))])) : (V(), H("p", Jb, "История пока пуста."))
			])
		]));
	}
};
// src/vue/producer/legacyProducerSongDetailBridge.js
function Xb({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PRODUCER_DETAIL, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : J({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-producer-detail[data-sb-vue-producer-host]"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, Yb, { model: n })
	});
}
// src/vue/account/TrackPassportList.vue
var Zb = {
	key: 0,
	class: "sb-track-disclaimer",
	"data-sb-vue-master-recap": ""
}, Qb = {
	class: "sb-track-filters",
	role: "group",
	"aria-label": "Фильтр паспортов по этапу"
}, $b = ["data-filter", "aria-pressed"], ex = {
	key: 1,
	class: "sb-track-list"
}, tx = ["data-id"], nx = {
	key: 2,
	class: "sb-track-empty"
}, rx = {
	__name: "TrackPassportList",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = Q();
		return L(() => t.model, (e) => n.publishPassportListSummary(e), { immediate: !0 }), (t, r) => (V(), H(B, null, [
			F(n).masterListSummary.ready ? (V(), H("p", Zb, " В Мастере: " + O(F(n).masterListSummary.workCount) + " песен в работе · " + O(F(n).masterListSummary.finishedCount) + " маршрутов полностью пройдено ", 1)) : G("", !0),
			U("div", Qb, [(V(!0), H(B, null, z(e.model.filters, (t) => (V(), H("button", {
				key: t.key,
				type: "button",
				"data-action": "tp-filter",
				"data-filter": t.key,
				class: D({ active: e.model.active === t.key }),
				"aria-pressed": e.model.active === t.key
			}, O(t.label), 11, $b))), 128))]),
			e.model.records.length ? (V(), H("div", ex, [(V(!0), H(B, null, z(e.model.records, (e) => (V(), H("button", {
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
			], 8, tx))), 128))])) : (V(), H("div", nx, O(e.model.hasRecords ? "В этой категории пока нет треков." : "Паспортов пока нет. Создай первый, чтобы объединить материалы песни."), 1))
		], 64));
	}
};
// src/vue/account/legacyTrackPassportListBridge.js
function ix({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_TRACK_LIST, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : J({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-track-list[data-sb-vue-track-list]"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, rx, { model: n })
	});
}
// src/vue/account/TrackPassportDetail.vue
var ax = {
	class: "sb-track-detail",
	"data-sb-vue-track-detail-view": ""
}, ox = {
	key: 0,
	class: "sb-track-disclaimer",
	"data-sb-vue-master-detail-recap": ""
}, sx = { class: "sb-track-buttons" }, cx = ["data-id"], lx = ["data-id"], ux = ["data-id"], dx = { class: "sb-track-hero" }, fx = { class: "sb-track-cover" }, px = ["src"], mx = { class: "sb-track-phase" }, hx = { class: "sb-track-facts" }, gx = { class: "sb-track-buttons" }, _x = ["href"], vx = ["href"], yx = { class: "sb-track-linkgrid" }, bx = ["data-action", "data-id"], xx = {
	key: 1,
	class: "sb-track-linked sb-track-linked-empty"
}, Sx = ["data-action", "data-id"], Cx = {
	key: 3,
	class: "sb-track-linked sb-track-linked-empty"
}, wx = ["data-action", "data-id"], Tx = {
	key: 5,
	class: "sb-track-linked sb-track-linked-empty"
}, Ex = { class: "sb-track-section" }, Dx = { key: 0 }, Ox = ["href"], kx = [
	"data-id",
	"data-version",
	"aria-label"
], Ax = {
	key: 2,
	class: "sb-track-disclaimer"
}, jx = { class: "sb-track-versionform" }, Mx = ["data-id"], Nx = {
	__name: "TrackPassportDetail",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = Q();
		return L(() => t.model, (e) => n.publishPassportDetailSummary(e), { immediate: !0 }), (t, r) => (V(), H("div", ax, [
			F(n).masterDetailSummary.ready ? (V(), H("p", ox, " Последняя карточка Мастера: " + O(F(n).masterDetailSummary.done) + " из " + O(F(n).masterDetailSummary.total) + " этапов · " + O(F(n).masterDetailSummary.linkedCount) + " из 6 связей ", 1)) : G("", !0),
			U("div", sx, [
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
				}, "Изменить", 8, cx),
				U("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "tp-event",
					"data-id": e.model.id
				}, "В календарь релизов", 8, lx),
				U("button", {
					type: "button",
					class: "btn danger small",
					"data-action": "tp-delete",
					"data-id": e.model.id
				}, "Удалить", 8, ux)
			]),
			U("div", dx, [U("div", fx, [e.model.cover ? (V(), H("img", {
				key: 0,
				src: e.model.cover,
				alt: "Обложка",
				loading: "lazy"
			}, null, 8, px)) : (V(), H(B, { key: 1 }, [W("♫")], 64))]), U("div", null, [
				U("span", mx, O(e.model.phase), 1),
				U("h2", null, O(e.model.title), 1),
				U("p", null, O(e.model.artist), 1)
			])]),
			U("div", hx, [(V(!0), H(B, null, z(e.model.facts, (e) => (V(), H("div", {
				key: e.label,
				class: "sb-track-fact"
			}, [U("span", null, O(e.label), 1), U("strong", null, O(e.value || "Не указано"), 1)]))), 128))]),
			U("div", gx, [e.model.audio ? (V(), H("a", {
				key: 0,
				class: "btn ghost",
				href: e.model.audio,
				rel: "noopener noreferrer",
				target: "_blank"
			}, "Прослушать ↗", 8, _x)) : G("", !0), e.model.cover ? (V(), H("a", {
				key: 1,
				class: "btn ghost",
				href: e.model.cover,
				rel: "noopener noreferrer",
				target: "_blank"
			}, "Обложка ↗", 8, vx)) : G("", !0)]),
			r[8] ||= U("h3", { class: "sb-track-section" }, "Связанные материалы", -1),
			U("div", yx, [
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
				], 8, bx)) : (V(), H("div", xx, [U("small", null, O(e.model.links[0].label), 1), r[2] ||= U("strong", null, "Не привязан", -1)])),
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
				], 8, Sx)) : (V(), H("div", Cx, [U("small", null, O(e.model.links[1].label), 1), r[4] ||= U("strong", null, "Не привязан", -1)])),
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
				], 8, wx)) : (V(), H("div", Tx, [U("small", null, O(e.model.links[2].label), 1), r[6] ||= U("strong", null, "Не привязан", -1)]))
			]),
			(V(!0), H(B, null, z(e.model.sections, (e) => (V(), H("section", {
				key: e.label,
				class: "sb-track-sectionbox"
			}, [U("h3", null, O(e.label), 1), U("pre", null, O(e.text), 1)]))), 128)),
			U("h3", Ex, "Версии трека (" + O(e.model.versions.length) + ")", 1),
			e.model.versions.length ? (V(!0), H(B, { key: 1 }, z(e.model.versions, (t) => (V(), H("div", {
				key: t.id,
				class: "sb-track-version"
			}, [U("div", null, [
				U("strong", null, O(t.label), 1),
				U("small", null, O(t.date), 1),
				t.notes ? (V(), H("p", Dx, O(t.notes), 1)) : G("", !0)
			]), U("div", null, [t.url ? (V(), H("a", {
				key: 0,
				href: t.url,
				rel: "noopener noreferrer",
				target: "_blank"
			}, "Прослушать ↗", 8, Ox)) : G("", !0), U("button", {
				type: "button",
				class: "btn danger small",
				"data-action": "tp-version-remove",
				"data-id": e.model.id,
				"data-version": t.id,
				"aria-label": "Удалить версию " + t.label
			}, "×", 8, kx)])]))), 128)) : (V(), H("p", Ax, "Версий пока нет.")),
			U("div", jx, [r[7] ||= da("<div class=\"field\"><label for=\"tp-version-title\">Название новой версии</label><input id=\"tp-version-title\" maxlength=\"100\" placeholder=\"Демо 2 / Финальный мастер\"></div><div class=\"field\"><label for=\"tp-version-url\">Ссылка (HTTPS)</label><input id=\"tp-version-url\" type=\"url\" maxlength=\"2000\" placeholder=\"https://…\"></div><div class=\"field\"><label for=\"tp-version-notes\">Что изменилось?</label><input id=\"tp-version-notes\" maxlength=\"300\" placeholder=\"Необязательно\"></div>", 3), U("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "tp-version-add",
				"data-id": e.model.id
			}, "+ Добавить версию", 8, Mx)]),
			r[9] ||= U("p", { class: "sb-track-disclaimer" }, " Связанный текст и промпт показываются из оригинальных разделов. Расчётные даты — ориентир, окончательная дата определяется издательством. ", -1)
		]));
	}
};
// src/vue/account/legacyTrackPassportDetailBridge.js
function Px({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_TRACK_DETAIL, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : J({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-track-detail[data-sb-vue-track-detail]"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, Nx, { model: n })
	});
}
// src/vue/account/TrackPassportEditor.vue
var Fx = {
	id: "sb-track-form",
	class: "panel sb-track-form",
	"data-sb-vue-track-editor-view": ""
}, Ix = { class: "sb-track-formhead" }, Lx = { class: "sb-track-fields" }, Rx = ["for"], zx = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"placeholder"
], Bx = { class: "field" }, Vx = ["value"], Hx = { class: "field" }, Ux = ["value"], Wx = { class: "field" }, Gx = ["value"], Kx = { class: "field" }, qx = ["value"], Jx = { class: "field" }, Yx = ["value"], Xx = { class: "field" }, Zx = { class: "sb-track-fields" }, Qx = { class: "field" }, $x = { class: "field" }, eS = ["disabled"], tS = { class: "sb-track-manual" }, nS = {
	id: "tp-date-hint",
	class: "sb-track-hint"
}, rS = { class: "sb-track-fields" }, iS = ["for"], aS = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"placeholder"
], oS = ["for"], sS = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"rows"
], cS = {
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
		let t = e, n = /* @__PURE__ */ A({ ...t.model.fields }), r = K(() => t.api.date7(n.submitted)), i = K(() => r.value ? "Автоматический расчёт: " + t.api.dateLabel(r.value) + " (через 7 календарных дней)." : "Укажи дату передачи издательству: релиз автоматически через 7 дней.");
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
		return (t, r) => (V(), H("div", Fx, [
			U("div", Ix, [U("h2", null, O(e.model.editing ? "Редактировать паспорт" : "Новый паспорт трека"), 1), r[9] ||= U("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "tp-cancel"
			}, "Закрыть", -1)]),
			U("div", Lx, [
				(V(!0), H(B, null, z(o.slice(0, 2), (e) => (V(), H("div", {
					key: e.id,
					class: "field"
				}, [U("label", { for: "tp-" + e.id }, O(e.label), 9, Rx), I(U("input", {
					id: "tp-" + e.id,
					"onUpdate:modelValue": (t) => n[e.id] = t,
					maxlength: e.max,
					placeholder: e.placeholder
				}, null, 8, zx), [[q, n[e.id]]])]))), 128)),
				U("div", Bx, [r[10] ||= U("label", { for: "tp-status" }, "Этап работы", -1), I(U("select", {
					id: "tp-status",
					"onUpdate:modelValue": r[0] ||= (e) => n.status = e
				}, [(V(!0), H(B, null, z(e.model.stages, (e) => (V(), H("option", {
					key: e.value,
					value: e.value
				}, O(e.label), 9, Vx))), 128))], 512), [[Lo, n.status]])]),
				U("div", Hx, [r[11] ||= U("label", { for: "tp-genre" }, "Жанр", -1), I(U("select", {
					id: "tp-genre",
					"onUpdate:modelValue": r[1] ||= (e) => n.genre = e
				}, [(V(!0), H(B, null, z(e.model.genres, (e) => (V(), H("option", {
					key: e.value,
					value: e.value
				}, O(e.label), 9, Ux))), 128))], 512), [[Lo, n.genre]])]),
				U("div", Wx, [r[13] ||= U("label", { for: "tp-project" }, "Мой проект / артист", -1), I(U("select", {
					id: "tp-project",
					"onUpdate:modelValue": r[2] ||= (e) => n.project = e
				}, [r[12] ||= U("option", { value: "" }, "Без связи", -1), (V(!0), H(B, null, z(e.model.projects, (e) => (V(), H("option", {
					key: e.value,
					value: e.value
				}, O(e.label), 9, Gx))), 128))], 512), [[Lo, n.project]])]),
				U("div", Kx, [r[15] ||= U("label", { for: "tp-idea" }, "Идея и текст песни", -1), I(U("select", {
					id: "tp-idea",
					"onUpdate:modelValue": r[3] ||= (e) => n.idea = e
				}, [r[14] ||= U("option", { value: "" }, "Без связи", -1), (V(!0), H(B, null, z(e.model.ideas, (e) => (V(), H("option", {
					key: e.value,
					value: e.value
				}, O(e.label), 9, qx))), 128))], 512), [[Lo, n.idea]])]),
				U("div", Jx, [r[17] ||= U("label", { for: "tp-prompt" }, "Мой промпт Suno", -1), I(U("select", {
					id: "tp-prompt",
					"onUpdate:modelValue": r[4] ||= (e) => n.prompt = e
				}, [r[16] ||= U("option", { value: "" }, "Без связи", -1), (V(!0), H(B, null, z(e.model.prompts, (e) => (V(), H("option", {
					key: e.value,
					value: e.value
				}, O(e.label), 9, Yx))), 128))], 512), [[Lo, n.prompt]])]),
				U("div", Xx, [r[18] ||= U("label", { for: "tp-publisher" }, "Издательство / дистрибьютор", -1), I(U("input", {
					id: "tp-publisher",
					"onUpdate:modelValue": r[5] ||= (e) => n.publisher = e,
					maxlength: "120",
					placeholder: "Название издательства"
				}, null, 512), [[q, n.publisher]])])
			]),
			r[22] ||= U("h3", { class: "sb-track-section" }, "Даты релиза", -1),
			U("div", Zx, [U("div", Qx, [r[19] ||= U("label", { for: "tp-submitted" }, "Передано издательству", -1), I(U("input", {
				id: "tp-submitted",
				"onUpdate:modelValue": r[6] ||= (e) => n.submitted = e,
				type: "date",
				onChange: a
			}, null, 544), [[q, n.submitted]])]), U("div", $x, [
				r[21] ||= U("label", { for: "tp-release" }, "Дата выхода", -1),
				I(U("input", {
					id: "tp-release",
					"onUpdate:modelValue": r[7] ||= (e) => n.release = e,
					type: "date",
					disabled: !n.override
				}, null, 8, eS), [[q, n.release]]),
				U("label", tS, [I(U("input", {
					id: "tp-override",
					"onUpdate:modelValue": r[8] ||= (e) => n.override = e,
					type: "checkbox",
					onChange: a
				}, null, 544), [[Fo, n.override]]), r[20] ||= W(" Установить дату вручную ", -1)])
			])]),
			U("p", nS, O(i.value), 1),
			r[23] ||= U("h3", { class: "sb-track-section" }, "Материалы и метаданные", -1),
			U("div", rS, [(V(), H(B, null, z(s, (e) => U("div", {
				key: e.id,
				class: "field"
			}, [U("label", { for: "tp-" + e.id }, O(e.label), 9, iS), I(U("input", {
				id: "tp-" + e.id,
				"onUpdate:modelValue": (t) => n[e.id] = t,
				maxlength: e.max,
				placeholder: e.placeholder
			}, null, 8, aS), [[q, n[e.id]]])])), 64))]),
			(V(), H(B, null, z(c, (e) => U("div", {
				key: e.id,
				class: "field"
			}, [U("label", { for: "tp-" + e.id }, O(e.label), 9, oS), I(U("textarea", {
				id: "tp-" + e.id,
				"onUpdate:modelValue": (t) => n[e.id] = t,
				maxlength: e.max,
				rows: e.rows
			}, null, 8, sS), [[q, n[e.id]]])])), 64)),
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
function lS({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_TRACK_EDITOR, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : J({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-track-editor[data-sb-vue-track-editor]"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, cS, {
			model: r,
			api: t
		})
	});
}
// src/vue/poetry/IdeaFields.vue
var uS = { class: "field" }, dS = { class: "field" }, fS = ["value"], pS = { class: "field" }, mS = {
	class: "sub",
	"data-sb-vue-idea-draft-progress": ""
}, hS = {
	key: 0,
	class: "sub",
	"data-sb-vue-last-prompt-draft": ""
}, gS = { class: "field" }, _S = {
	__name: "IdeaFields",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = /* @__PURE__ */ A({ ...e.initial.values }), n = Q();
		return L(() => [
			t.title,
			t.genre,
			t.text,
			t.hook
		], () => n.publishIdeaDraftSummary(t), { immediate: !0 }), (r, i) => (V(), H(B, null, [
			U("div", uS, [i[4] ||= U("label", { for: "custom-idea-title" }, "Название песни", -1), I(U("input", {
				id: "custom-idea-title",
				"onUpdate:modelValue": i[0] ||= (e) => t.title = e,
				maxlength: "100",
				placeholder: "Например, Город на ладони"
			}, null, 512), [[q, t.title]])]),
			U("div", dS, [i[5] ||= U("label", { for: "custom-idea-genre" }, "Музыкальный жанр", -1), I(U("select", {
				id: "custom-idea-genre",
				"onUpdate:modelValue": i[1] ||= (e) => t.genre = e
			}, [(V(!0), H(B, null, z(e.initial.genres, (e) => (V(), H("option", {
				key: e.id,
				value: e.id
			}, O(e.name), 9, fS))), 128))], 512), [[Lo, t.genre]])]),
			U("div", pS, [i[6] ||= U("label", { for: "custom-idea-text" }, "Сюжет и основная идея", -1), I(U("textarea", {
				id: "custom-idea-text",
				"onUpdate:modelValue": i[2] ||= (e) => t.text = e,
				rows: "5",
				maxlength: "3000",
				placeholder: "О чём песня и что происходит с героем?"
			}, null, 512), [[q, t.text]])]),
			U("p", mS, "Сюжет: " + O(F(n).ideaDraftSummary.ideaLength) + " / 3000 · Название: " + O(F(n).ideaDraftSummary.titleLength) + " / 100", 1),
			F(n).promptDraftSummary.ready ? (V(), H("p", hS, "Последний открытый черновик промпта: " + O(F(n).promptDraftSummary.textLength) + " / 1000 символов", 1)) : G("", !0),
			U("div", gS, [i[7] ||= U("label", { for: "custom-idea-hook" }, "Фраза для припева (необязательно)", -1), I(U("input", {
				id: "custom-idea-hook",
				"onUpdate:modelValue": i[3] ||= (e) => t.hook = e,
				maxlength: "240",
				placeholder: "Запоминающаяся строчка"
			}, null, 512), [[q, t.hook]])])
		], 64));
	}
}, vS = {
	key: 0,
	class: "sub",
	"data-sb-vue-poetry-source-count": ""
}, yS = {
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
		let t = e, n = /* @__PURE__ */ N(null), r = Q(), i = () => {
			n.value && r.publishPoetrySourceSummary(n.value.value);
		}, a = (e) => {
			e.target.closest?.("[data-action=\"sb-poetry-accent\"]") && i();
		};
		return R(() => {
			t.initial.highlighted && t.api.enableHighlight(n.value), i(), document.addEventListener("click", a);
		}), xr(() => document.removeEventListener("click", a)), (t, a) => (V(), H(B, null, [
			a[1] ||= U("label", { for: "custom-idea-lyrics" }, "Оригинальный текст (необязательно)", -1),
			a[0] || (ea(-1, !0), (a[0] = U("textarea", {
				id: "custom-idea-lyrics",
				ref_key: "area",
				ref: n,
				value: e.initial.values.lyrics,
				onInput: i,
				rows: "12",
				maxlength: "20000",
				placeholder: "Куплет 1:\nТекст первого куплета...\n\nПрипев:\nТекст припева..."
			}, null, 40, ["value"])).cacheIndex = 0, ea(1), a[0]),
			F(r).poetrySourceSummary.ready ? (V(), H("p", vS, " Исходный текст: " + O(F(r).poetrySourceSummary.charCount) + " / 20000 символов · " + O(F(r).poetrySourceSummary.lineCount) + " непустых строк ", 1)) : G("", !0)
		], 64));
	}
}, bS = {
	key: 0,
	class: "workbench-note",
	"data-sb-vue-poetry-tools-count": ""
}, xS = {
	key: 1,
	class: "workbench-note",
	"data-sb-vue-poetry-analysis-count": ""
}, SS = {
	key: 2,
	class: "workbench-note",
	"data-sb-vue-poetry-ambiguity-count": ""
}, CS = {
	key: 3,
	class: "workbench-note",
	"data-sb-vue-tags-summary": ""
}, wS = {
	key: 0,
	"data-sb-vue-tags-freshness": "",
	role: "status"
}, TS = { key: 0 }, ES = { key: 1 }, DS = { key: 2 }, OS = { class: "field" }, kS = ["value"], AS = { class: "workbench-switches" }, jS = ["id", "onUpdate:modelValue"], MS = { class: "field" }, NS = { class: "detail-actions" }, PS = {
	type: "button",
	class: "btn ghost",
	"data-action": "copy-current-lyrics"
}, FS = ["innerHTML"], IS = { class: "field" }, LS = { class: "detail-actions" }, RS = {
	type: "button",
	class: "btn ghost",
	"data-action": "copy-current-style"
}, zS = ["innerHTML"], BS = {
	__name: "LyricsTools",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ A({ ...t.initial.values }), r = /* @__PURE__ */ A({ ...t.initial.switches }), i = Q(), a = {
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
			F(i).poetrySourceSummary.ready ? (V(), H("p", bS, " Исходник для аранжировки: " + O(F(i).poetrySourceSummary.lineCount) + " строк, " + O(F(i).poetrySourceSummary.wordCount) + " слов ", 1)) : G("", !0),
			F(i).poetryAnalysisSummary.analyzed ? (V(), H("p", xS, " Последний анализ: " + O(F(i).poetryAnalysisSummary.rowCount) + " строк · " + O(F(i).poetryAnalysisSummary.stressMarkCount) + " меток ударения · " + O(F(i).poetryAnalysisSummary.suggestionCount) + " рекомендаций ", 1)) : G("", !0),
			F(i).poetryAmbiguitySummary.ready ? (V(), H("p", SS, " Предпросмотр ударений: " + O(F(i).poetryAmbiguitySummary.occurrenceCount) + " неоднозначных вхождений · " + O(F(i).poetryAmbiguitySummary.distinctCount) + " разных слов ", 1)) : G("", !0),
			F(i).performanceTagsSummary.ready ? (V(), H("p", CS, [W(" Теги исполнения: " + O(a[F(i).performanceTagsSummary.mode]) + " · интенсивность " + O(F(i).performanceTagsSummary.intensity) + "/5 · " + O(F(i).performanceTagsSummary.enabledTechniques) + " приёмов · " + O(F(i).performanceTagsSummary.busy ? "идёт генерация" : F(i).performanceTagsSummary.previewOpen ? F(i).performanceTagsSummary.sectionCount + " секций в предпросмотре" : "предпросмотр закрыт") + " ", 1), F(i).performanceTagsSummary.previewOpen ? (V(), H("span", wS, [
				W(" · " + O(F(i).performanceTagsSummary.previewFresh ? "Текст и настройки не изменены; проверь теги перед применением." : "Предпросмотр устарел — создай новый.") + " ", 1),
				F(i).performanceTagsSummary.sourceChanged ? (V(), H("span", TS, " Изменён исходник.")) : G("", !0),
				F(i).performanceTagsSummary.targetChanged ? (V(), H("span", ES, " Изменено готовое поле Lyrics.")) : G("", !0),
				F(i).performanceTagsSummary.settingsChanged ? (V(), H("span", DS, " Изменены настройки.")) : G("", !0)
			])) : G("", !0)])) : G("", !0),
			U("div", OS, [c[3] ||= U("label", { for: "lyrics-tag-preset" }, "Характер аранжировки", -1), I(U("select", {
				id: "lyrics-tag-preset",
				"onUpdate:modelValue": c[0] ||= (e) => n.preset = e
			}, [(V(), H(B, null, z(o, ([e, t]) => U("option", {
				key: e,
				value: e
			}, O(t), 9, kS)), 64))], 512), [[Lo, n.preset]])]),
			U("div", AS, [(V(), H(B, null, z(s, ([e, t]) => U("label", { key: e }, [I(U("input", {
				id: "lyrics-" + e,
				"onUpdate:modelValue": (t) => r[e] = t,
				type: "checkbox"
			}, null, 8, jS), [[Fo, r[e]]]), W(" " + O(t), 1)])), 64))]),
			c[8] ||= U("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "format-idea-lyrics"
			}, "✨ Создать теги и усилители", -1),
			c[9] ||= U("p", { class: "workbench-note" }, "Разметка примерная: если в тексте нет названий секций, куплеты и припевы определяются по абзацам. Проверь расположение тегов перед копированием.", -1),
			U("div", MS, [c[4] ||= U("label", { for: "custom-idea-tagged" }, "Готовая версия для поля Lyrics в Suno (можно исправить вручную)", -1), I(U("textarea", {
				id: "custom-idea-tagged",
				"onUpdate:modelValue": c[1] ||= (e) => n.tagged = e,
				rows: "13",
				maxlength: "25000",
				placeholder: "[Verse 1]\n...\n\n[Chorus - powerful melodic hook]\n..."
			}, null, 512), [[q, n.tagged]])]),
			U("div", NS, [U("button", PS, [U("span", { innerHTML: e.initial.copyIcon }, null, 8, FS), c[5] ||= W(" Копировать Lyrics", -1)])]),
			U("div", IS, [c[6] ||= U("label", { for: "custom-idea-style" }, "Дополнительное описание для поля Style (до 1000 символов)", -1), I(U("textarea", {
				id: "custom-idea-style",
				"onUpdate:modelValue": c[2] ||= (e) => n.style = e,
				rows: "4",
				maxlength: "1000",
				placeholder: "Описание жанра, вокала и динамики для Suno"
			}, null, 512), [[q, n.style]])]),
			U("div", LS, [U("button", RS, [U("span", { innerHTML: e.initial.copyIcon }, null, 8, zS), c[7] ||= W(" Копировать Style", -1)])])
		], 64));
	}
};
// src/vue/legacy/observeLegacyIslands.js
function VS({ root: e, islands: t, subscribe: n, beforeSync: r, createObserver: i = (e) => new MutationObserver(e) }) {
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
function HS({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_IDEA_EDITOR, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : VS({
		root: n,
		islands: [
			["sb-vue-idea-fields", _S],
			["sb-vue-lyrics-source", yS],
			["sb-vue-lyrics-tools", BS]
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
function US({ sharedUi: e }) {
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
var WS = {
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
		return (t, n) => (V(), na(kr(e.component), _e(la(e.componentProps)), null, 16));
	}
}, GS = [
	"data-nav",
	"data-vue-router-path",
	"aria-current",
	"aria-label",
	"title",
	"onClick"
], KS = ["innerHTML"], qS = { class: "sb-vue-nav-label" }, JS = {
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
		let t = Mu(), n = ju(), r = Q(), i = e, a = K(() => r.navigationItems.length ? r.navigationItems : i.items);
		function o(e) {
			i.onNavigate(e, n);
		}
		let s = (e) => {
			let n = r.route;
			return (t.path === Fu(n.route) ? Iu(t.path) : n.active) === e;
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
		}, null, 8, KS), U("span", qS, O(e.mobile ? n.shortLabel : n.label), 1)], 10, GS))), 128));
	}
}, YS = {
	class: "sb-vue-history-toolbar",
	role: "group",
	"aria-label": "История разделов SUNOBOOM"
}, XS = ["disabled"], ZS = ["disabled"], QS = /*#__PURE__*/ Cf({
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
		let t = e, n = Mu(), r = Q(), i = /* @__PURE__ */ N(!1), a = K(() => (n.path, r.route.revision, Gu.value, {
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
		return (e, t) => (V(), H("div", YS, [
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
			}, [U("path", { d: "m15 18-6-6 6-6" })], -1)]], 8, XS),
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
			}, [U("path", { d: "m9 18 6-6-6-6" })], -1)]], 8, ZS)
		]));
	}
}, [["__scopeId", "data-v-c738b8ec"]]), $S = Object.freeze({
	"/account/myideas": "myideas",
	"/account/myprompts": "myprompts",
	"/account/events": "events"
});
function eC(e) {
	if (e?.active === "producer" && e?.production?.id) return Fu("producer", {
		kind: "production",
		id: e.production.id
	});
	let t = e?.track;
	return Fu(e?.active, t?.id ? {
		kind: "track",
		id: t.id
	} : null);
}
function tC(e, t) {
	if (!e || typeof t?.snapshot != "function") return null;
	let n = t.snapshot();
	if (n?.trackEditing) return null;
	let r = ed(e.path);
	if (r && n?.items?.some((e) => e?.id === r)) return {
		kind: "menu",
		id: r
	};
	let i = $S[e.path];
	if (i && typeof t.navigateWorkspace == "function") return {
		kind: "workspace",
		id: i
	};
	let a = e.context;
	return e.path === "/catalog/detail" && a?.kind === "genre" && typeof t.canRestoreGenre == "function" && t.canRestoreGenre(a.id, a.tab) && typeof t.restoreGenre == "function" ? {
		kind: "genre",
		id: a.id,
		tab: a.tab
	} : a?.kind === "production" && e.path === Fu("producer", a) && t.canRestoreProduction?.(a.id) === !0 && typeof t.restoreProduction == "function" ? {
		kind: "production",
		id: a.id
	} : e.path === "/account/tracks" && t.canRestoreTrackList?.() === !0 && typeof t.restoreTrackList == "function" ? { kind: "track-list" } : e.path === "/account/tracks/detail" && a?.kind === "track" && t.canRestoreTrack?.(a.id) === !0 && typeof t.restoreTrack == "function" ? {
		kind: "track",
		id: a.id
	} : null;
}
var nC = !1;
function rC(e, { legacyApi: t } = {}) {
	if (nC || !["back", "forward"].includes(e) || typeof t?.snapshot != "function") return !1;
	let n = $u(e), r = t.snapshot();
	return !!tC(n, t) && id().path === eC(r);
}
async function iC(e, { legacyApi: t, syncRoute: n = sd } = {}) {
	if (nC || !["back", "forward"].includes(e) || !t || typeof t.snapshot != "function" || typeof t.navigate != "function") return !1;
	nC = !0;
	try {
		await nd();
		let r = tC($u(e), t), i = t.snapshot();
		if (!r || id().path !== eC(i) || !await rd(e)) return !1;
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
		nC = !1;
	}
}
// src/vue/navigation/legacyBridge.js
var aC = [{
	key: "sidebar",
	selector: "[data-sb-vue-sidebar]",
	mobile: !1
}, {
	key: "mobile",
	selector: "[data-sb-vue-mobile]",
	mobile: !0
}];
function oC({ mountVueFeature: e, unmountVueFeature: t, sharedUi: n }) {
	let r = window.SUNOBOOM_LEGACY_NAV, i = document.getElementById("app");
	if (!r || !i || typeof r.snapshot != "function") return () => {};
	let a = () => {}, o = [], s, c = !1;
	window.SUNOBOOM_VUE_ROUTE = Object.freeze({
		snapshot: () => od.value,
		routerSnapshot: () => id(),
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
		back: () => iC("back", { legacyApi: r }),
		forward: () => iC("forward", { legacyApi: r }),
		recordGenre: (e, t, n = "push") => {
			let i = r.snapshot();
			return i.active !== "detail" || i.detail?.id !== e || i.detail?.tab !== t || !r.canRestoreGenre?.(e, t) ? !1 : (sd("detail", {
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
			return n.active !== "producer" || n.production?.id !== e || !r.canRestoreProduction?.(e) ? !1 : (sd("producer", {
				historyMode: t,
				context: {
					kind: "production",
					id: e
				}
			}), !0);
		},
		recordTrackList: () => {
			let e = r.snapshot();
			return e.active !== "tracks" || e.track?.id || e.trackEditing ? !1 : (sd("tracks"), !0);
		},
		recordTrack: (e, t = "push") => {
			let n = r.snapshot();
			return n.active !== "tracks" || n.track?.id !== e || n.trackEditing || !r.canRestoreTrack?.(e) ? !1 : (sd("tracks", {
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
		sd(e.active, { context: e.track?.id ? {
			kind: "track",
			id: e.track.id
		} : e.active === "producer" && e.production?.id ? {
			kind: "production",
			id: e.production.id
		} : null }), o = Pc(e), n.publishNavigation(o), s = JSON.stringify(o.map(({ active: e, ...t }) => t));
	}
	let u = r.snapshot();
	return sd(u.active, { context: u.track?.id ? {
		kind: "track",
		id: u.track.id
	} : u.active === "producer" && u.production?.id ? {
		kind: "production",
		id: u.production.id
	} : null }), nd().then(() => {
		c || (a = VS({
			root: i,
			beforeSync: l,
			islands: [{
				key: "history",
				selectTarget: (e) => e.querySelector("[data-sb-vue-history]"),
				readSnapshot: () => r,
				mount: (t) => e(t, QS, {
					canRestore: (e) => rC(e, { legacyApi: r }),
					onRestore: (e) => iC(e, { legacyApi: r })
				}, { vueRouter: !0 })
			}, ...aC.map(({ key: t, selector: n, mobile: i }) => ({
				key: t,
				selectTarget: (e) => e.querySelector(n),
				readRevision: () => s,
				readSnapshot: () => o,
				mount: (t, n) => e(t, JS, {
					items: n,
					mobile: i,
					onNavigate: (e, t) => Lp(e, {
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
var sC = { class: "breadcrumbs" }, cC = {
	class: "brand-mobile",
	style: { display: "none" }
}, lC = { class: "sb-logo-lockup" }, uC = ["src"], dC = ["aria-label"], fC = { class: "top-right" }, pC = ["aria-label"], mC = [
	"aria-label",
	"aria-expanded",
	"title"
], hC = ["aria-hidden"], gC = {
	class: "avatar account-shortcut",
	type: "button",
	title: "Личный кабинет",
	"aria-label": "Открыть личный кабинет",
	"data-action": "nav",
	"data-nav": "account"
}, _C = {
	__name: "TopHeader",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (V(), H(B, null, [
			U("div", sC, [n[0] ||= W("Рабочее пространство / ", -1), U("b", null, O(e.model.breadcrumb), 1)]),
			U("div", cC, [U("div", lC, [U("img", {
				class: "sb-mobile-logo",
				src: e.model.logoSrc,
				alt: "SUNOBOOM — фирменный логотип"
			}, null, 8, uC), n[1] ||= U("span", { class: "sb-brand-tagline" }, "Больше, чем музыка", -1)]), U("button", {
				type: "button",
				class: "sb-app-version sb-version-trigger",
				"aria-label": "Версия SUNOBOOM " + e.model.version + " — открыть историю обновлений",
				"aria-haspopup": "dialog",
				title: "История версий SUNOBOOM"
			}, "v" + O(e.model.version), 9, dC)]),
			U("div", fC, [
				n[3] ||= U("span", { class: "pill sb-prototype-pill" }, "🧪 Прототип", -1),
				U("button", {
					type: "button",
					class: "sb-app-version sb-version-trigger",
					"aria-label": "Версия SUNOBOOM " + e.model.version + " — открыть историю обновлений",
					"aria-haspopup": "dialog",
					title: "История версий SUNOBOOM"
				}, "v" + O(e.model.version), 9, pC),
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
				}, O(e.model.noticeBadge === 99 && e.model.unreadCount > 99 ? "99+" : e.model.noticeBadge), 11, hC)], 10, mC),
				n[4] ||= da("<button type=\"button\" class=\"sb-notice-bell sb-settings-shortcut\" data-sbs-action=\"open-top\" aria-label=\"Открыть настройки приложения\" title=\"Настройки\" aria-haspopup=\"false\"><span class=\"sb-notice-bell-icon\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M10.5 2h3l.5 2.2 1.6.7 2-1.1 2.1 2.1-1 2 .7 1.7 2.1.4v3l-2.1.5-.7 1.6 1 2-2.1 2.1-2-1-.1.1-1.5.6-.5 2.1h-3l-.5-2.1-1.6-.7-2 1-2.1-2.1 1.1-2-.7-1.6-2.2-.5v-3l2.2-.4.7-1.7-1.1-2 2.1-2.1 2 1.1 1.6-.7z\"></path><circle cx=\"12\" cy=\"11.5\" r=\"3\"></circle></svg></span></button>", 1),
				U("button", gC, O(e.model.avatarInitial), 1)
			])
		], 64));
	}
};
// src/vue/navigation/top-header-model.js
function vC(e) {
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
function yC({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_HEADER, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : J({
		root: n,
		selectTarget: (e) => e.querySelector(".top[data-sb-vue-top]"),
		readSnapshot: () => vC(t.snapshot()),
		mount: (t, n) => e(t, _C, { model: n })
	});
}
// src/vue/academy/GenreCards.vue
var bC = ["data-id"], xC = { class: "genre-content" }, SC = { class: "kicker" }, CC = { class: "foot" }, wC = {
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
		}, null, -1), U("div", xC, [U("div", null, [
			U("div", SC, O(e.family) + " · " + O(e.bpm[0]) + "–" + O(e.bpm[1]) + " BPM", 1),
			U("h3", null, O(e.name), 1),
			U("p", null, O(e.tagline), 1)
		]), U("div", CC, [U("span", null, O(e.era), 1), n[0] ||= U("span", { style: { color: "#ffacd9" } }, "Открыть →", -1)])])], 12, bC))), 128));
	}
}, TC = { class: "genre-family-toolbar" }, EC = { class: "search-box" }, DC = ["innerHTML"], OC = { class: "hint" }, kC = { class: "genre-family-summary" }, AC = { id: "catalog-count" }, jC = ["data-id"], MC = {
	class: "hint",
	id: "sb-academy-search-hint"
}, NC = {
	id: "catalog-cards",
	class: "genre-families"
}, PC = [
	"data-family",
	"open",
	"onToggle"
], FC = {
	class: "genre-family-icon",
	"aria-hidden": "true"
}, IC = { class: "genre-family-heading" }, LC = { class: "genre-family-right" }, RC = { class: "genre-family-count" }, zC = { class: "genre-family-body" }, BC = {
	key: 0,
	class: "sb-sacred-index"
}, VC = {
	key: 0,
	class: "sb-sacred-overview"
}, HC = { class: "genre-grid" }, UC = { class: "sb-sacred-religions" }, WC = [
	"data-sb-religion",
	"open",
	"onToggle"
], GC = { class: "sb-sacred-religion-header" }, KC = {
	class: "sb-sacred-religion-icon",
	"aria-hidden": "true"
}, qC = { class: "sb-sacred-religion-label" }, JC = { class: "sb-sacred-count" }, YC = { class: "sb-sacred-religion-content" }, XC = [
	"data-sb-branch",
	"open",
	"onToggle"
], ZC = { class: "sb-sacred-branch-header" }, QC = { class: "sb-sacred-branch-label" }, $C = { class: "sb-sacred-count" }, ew = { class: "sb-sacred-branch-content" }, tw = { class: "genre-grid" }, nw = {
	key: 1,
	class: "genre-grid"
}, rw = {
	key: 1,
	class: "genre-family-empty"
}, iw = {
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
		let t = e, n = Q(), r = /* @__PURE__ */ N(t.snapshot.query || ""), i = /* @__PURE__ */ A({
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
			U("div", TC, [U("label", EC, [U("span", {
				innerHTML: e.searchIcon,
				"aria-hidden": "true"
			}, null, 8, DC), I(U("input", {
				id: "genre-search",
				"onUpdate:modelValue": n[0] ||= (e) => r.value = e,
				type: "search",
				enterkeyhint: "search",
				autocapitalize: "off",
				spellcheck: "false",
				"aria-label": "Поиск жанров",
				placeholder: "Поиск жанра, поджанра или исполнителя…",
				autocomplete: "off"
			}, null, 512), [[q, r.value]])]), U("span", OC, O(e.snapshot.families.length) + " разделов · " + O(e.snapshot.families.reduce((e, t) => e + t.genres.length, 0)) + " жанров", 1)]),
			U("div", kC, [
				U("h2", AC, O(o.value ? "Найдено жанров" : "Музыкальные жанры") + " · " + O(c.value), 1),
				m.value ? (V(), H("button", {
					key: 0,
					type: "button",
					class: "btn ghost small",
					"data-sb-last-genre": "",
					"data-action": "genre",
					"data-id": m.value.id
				}, " ↶ Последний жанр: " + O(m.value.name), 9, jC)) : G("", !0),
				U("span", MC, O(l.value), 1)
			]),
			U("div", NC, [s.value.length ? (V(!0), H(B, { key: 0 }, z(s.value, (e) => (V(), H("details", {
				key: e.name,
				class: "genre-family",
				"data-family": e.name,
				style: E({ "--family-accent": e.meta.accent }),
				open: h("family", e.name),
				onToggle: (t) => g("family", e.name, t)
			}, [U("summary", null, [
				U("span", FC, O(e.meta.icon), 1),
				U("span", IC, [U("strong", null, O(e.name), 1), U("small", null, O(e.meta.desc), 1)]),
				U("span", LC, [U("span", RC, O(e.genres.length) + " " + O(_(e.genres.length)), 1), n[1] ||= U("svg", {
					class: "genre-family-chevron",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2",
					"aria-hidden": "true"
				}, [U("path", { d: "m5 9 7 7 7-7" })], -1)])
			]), U("div", zC, [e.name === "Религиозная музыка" ? (V(), H("div", BC, [
				n[5] ||= U("div", { class: "sb-sacred-intro" }, [
					U("span", { class: "sb-sacred-eyebrow" }, "МУЗЫКА МИРОВЫХ РЕЛИГИЙ"),
					U("h3", null, "Религии и музыкальные традиции"),
					U("p", null, "Открой религию, затем её направление или течение. Здесь представлены музыкальные традиции — их границы не всегда совпадают с конфессиональными.")
				], -1),
				d.value ? (V(), H("div", VC, [n[2] ||= U("div", { class: "sb-sacred-overview-label" }, "📖 Обзор раздела", -1), U("div", HC, [sa(wC, { genres: [d.value] }, null, 8, ["genres"])])])) : G("", !0),
				U("div", UC, [(V(!0), H(B, null, z(f.value, (e) => (V(), H("details", {
					key: e.id,
					class: "sb-sacred-religion",
					"data-sb-religion": e.id,
					open: h("religion", e.id),
					onToggle: (t) => g("religion", e.id, t)
				}, [U("summary", GC, [
					U("span", KC, O(e.icon), 1),
					U("span", qC, [U("strong", null, O(e.name), 1), U("small", null, O(e.description), 1)]),
					U("span", JC, O(e.count), 1),
					n[3] ||= U("span", {
						class: "sb-sacred-chevron",
						"aria-hidden": "true"
					}, "⌄", -1)
				]), U("div", YC, [(V(!0), H(B, null, z(e.branches, (e) => (V(), H("details", {
					key: e.id,
					class: "sb-sacred-branch",
					"data-sb-branch": e.id,
					open: h("branch", e.id),
					onToggle: (t) => g("branch", e.id, t)
				}, [U("summary", ZC, [
					U("span", QC, [U("strong", null, O(e.name), 1), U("small", null, O(e.description), 1)]),
					U("span", $C, O(e.genres.length) + " " + O(v(e.genres.length)), 1),
					n[4] ||= U("span", {
						class: "sb-sacred-chevron",
						"aria-hidden": "true"
					}, "⌄", -1)
				]), U("div", ew, [U("div", tw, [sa(wC, { genres: e.genres }, null, 8, ["genres"])])])], 40, XC))), 128))])], 40, WC))), 128))])
			])) : (V(), H("div", nw, [sa(wC, { genres: e.genres }, null, 8, ["genres"])]))])], 44, PC))), 128)) : (V(), H("div", rw, "Ничего не найдено. Попробуй другой запрос."))])
		], 64));
	}
};
// src/vue/academy/legacyAcademyBridge.js
function aw({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ACADEMY, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : J({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-academy-root"),
		readSnapshot: () => {
			let e = t.snapshot();
			return e?.families?.length ? e : null;
		},
		mount: (n, r) => e(n, iw, {
			snapshot: r,
			search: (e) => t.search(e),
			searchIcon: n.querySelector("label.search-box > svg")?.outerHTML || "",
			setExpanded: (e, n, r) => t.setExpanded(e, n, r)
		})
	});
}
// src/vue/academy/genre-tree-model.js
var ow = (e) => String(e ?? "").trim().normalize("NFKC").toLocaleLowerCase("ru");
function sw(e, t, n, r = "all", i = 30) {
	let a = ow(n);
	if (!a) return {
		count: 0,
		items: []
	};
	let o = new Map(e.map((e) => [e.id, e])), s = /* @__PURE__ */ new Set(), c = [];
	function l(e, t) {
		let n = o.get(t);
		n && !s.has(t) && ow(n.name).includes(a) && (s.add(t), c.push({
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
function cw(e, t) {
	return t === "zoom-reset" ? 1 : t !== "zoom-in" && t !== "zoom-out" ? e : Math.min(1.5, Math.max(.75, Math.round((e + (t === "zoom-in" ? .15 : -.15)) * 100) / 100));
}
function lw(e, t) {
	let n = Array.isArray(e?.edges) ? e.edges : [];
	return e?.id === "all" ? n.filter(([e, n]) => e === t || n === t) : n;
}
// src/vue/academy/GenreTree.vue
var uw = {
	class: "sb-gt-vue-content",
	"data-sb-vue-genre-tree": ""
}, dw = { class: "sb-gt-head" }, fw = { class: "sb-gt-count" }, pw = { class: "sb-gt-controls" }, mw = ["value"], hw = ["value"], gw = ["value"], _w = ["value"], vw = { class: "sb-gt-extra" }, yw = {
	class: "sb-gt-search-label",
	for: "sb-gt-search"
}, bw = ["value"], xw = { class: "sb-gt-zoom" }, Sw = { id: "sb-gt-zoom-label" }, Cw = {
	id: "sb-gt-search-results",
	class: "sb-gt-search-results",
	"aria-live": "polite"
}, ww = { class: "sb-gt-search-title" }, Tw = { class: "sb-gt-search-links" }, Ew = [
	"data-id",
	"data-tree",
	"onClick"
], Dw = {
	key: 1,
	class: "sb-gt-search-empty"
}, Ow = { class: "sb-gt-intro" }, kw = { class: "sb-gt-legend" }, Aw = ["aria-label"], jw = ["data-sb-gt-family"], Mw = {
	key: 1,
	class: "sb-gt-stage"
}, Nw = { class: "sb-gt-node-list" }, Pw = [
	"data-id",
	"aria-pressed",
	"onClick"
], Fw = { class: "sb-gt-node-name" }, Iw = { class: "sb-gt-node-era" }, Lw = {
	key: 0,
	id: "sb-gt-description",
	class: "sb-gt-detail",
	"aria-live": "polite"
}, Rw = { class: "sb-gt-detail-top" }, zw = { class: "sb-gt-sub" }, Bw = ["data-id"], Vw = { class: "sb-gt-description" }, Hw = { class: "sb-gt-related" }, Uw = ["data-id", "onClick"], Ww = {
	key: 1,
	class: "sb-gt-note"
}, Gw = { class: "sb-gt-related" }, Kw = ["data-id", "onClick"], qw = /*#__PURE__*/ Cf({
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
		let t = e, n = Q(), r = /* @__PURE__ */ N(t.snapshot.tree), i = /* @__PURE__ */ N(t.snapshot.selected), a = /* @__PURE__ */ N(t.snapshot.query || ""), o = /* @__PURE__ */ N(t.snapshot.zoom || 1), s = /* @__PURE__ */ N("");
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
		}))), v = K(() => _.value.reduce((e, t) => e + t.entries.length, 0)), y = K(() => d.get(i.value) || d.get(h.value.focus)), b = K(() => lw(h.value, i.value).filter(([e, t]) => e === i.value || t === i.value).map(([e, t, n, r]) => {
			let a = d.get(e === i.value ? t : e);
			return a ? {
				id: a.id,
				name: a.name,
				type: n,
				note: r,
				direction: e === i.value ? "→" : "←"
			} : null;
		}).filter(Boolean)), x = K(() => g.value && y.value ? u.filter((e) => e.id !== i.value && e.family === y.value.family).slice(0, 8) : []), ee = K(() => sw(u, f, a.value, r.value)), S = (e) => !!a.value.trim() && !e.name.toLocaleLowerCase("ru").includes(a.value.trim().toLocaleLowerCase("ru"));
		function C() {
			Dn(() => requestAnimationFrame(() => t.treeApi.drawLines()));
		}
		function te(e) {
			let n = t.treeApi.changeTree(e);
			n && (r.value = n.tree, i.value = n.selected, a.value = "", s.value = "", C());
		}
		function ne(e) {
			d.has(e) && t.treeApi.select(e) && (i.value = e, C());
		}
		function re(e) {
			let n = cw(o.value, e);
			t.treeApi.setZoom(n), o.value = n, C();
		}
		function w(e) {
			a.value = e.target.value, t.treeApi.setQuery(a.value);
		}
		function ie(e) {
			let n = t.treeApi.searchJump(e.tree, e.id);
			n && (r.value = n.tree, i.value = n.selected, a.value = "", s.value = "", Dn(() => {
				[...l.value?.querySelectorAll(".sb-gt-node") || []].find((t) => t.dataset.id === e.id)?.scrollIntoView({
					behavior: "smooth",
					block: "nearest",
					inline: "center"
				}), C();
			}));
		}
		function ae(e) {
			s.value = e.target.value, [...l.value?.querySelectorAll("[data-sb-gt-family]") || []].find((e) => e.dataset.sbGtFamily === s.value)?.scrollIntoView({
				behavior: "smooth",
				block: "nearest",
				inline: "start"
			});
		}
		return R(C), (t, n) => (V(), H("div", uw, [
			U("div", dw, [n[5] ||= U("div", null, [
				U("span", { class: "sb-gt-kicker" }, "SUNOBOOM · ИСТОРИЯ МУЗЫКИ"),
				U("h2", null, "От истоков к новым жанрам"),
				U("p", null, "Нажми на жанр в схеме, чтобы увидеть его историю и связи. Затем открой его существующую карточку в Академии.")
			], -1), U("div", fw, O(v.value) + " жанров" + O(g.value ? " · " + h.value.groups.length + " направлений" : " в схеме"), 1)]),
			U("div", pw, [
				n[8] ||= U("label", { for: "sb-gt-tree-choice" }, "Карта жанров", -1),
				U("select", {
					id: "sb-gt-tree-choice",
					value: r.value,
					"aria-label": "Выберите музыкальное древо",
					onChange: n[0] ||= (e) => te(e.target.value)
				}, [(V(!0), H(B, null, z(F(f), (e) => (V(), H("option", {
					key: e.id,
					value: e.id
				}, O(e.icon) + " " + O(e.label), 9, hw))), 128))], 40, mw),
				g.value ? (V(), H(B, { key: 0 }, [n[7] ||= U("label", { for: "sb-gt-group-jump" }, "Перейти к направлению", -1), U("select", {
					id: "sb-gt-group-jump",
					value: s.value,
					"aria-label": "Перейти к музыкальному направлению",
					onChange: ae
				}, [n[6] ||= U("option", { value: "" }, "Выберите раздел…", -1), (V(!0), H(B, null, z(h.value.groups, (e, t) => (V(), H("option", {
					key: e.name,
					value: String(t)
				}, O(e.icon) + " " + O(e.name) + " (" + O(e.ids.length) + ") ", 9, _w))), 128))], 40, gw)], 64)) : G("", !0)
			]),
			U("div", vw, [U("label", yw, [n[9] ||= W(" Поиск жанра по древу ", -1), U("input", {
				id: "sb-gt-search",
				value: a.value,
				type: "search",
				placeholder: "Например: ска-панк",
				autocomplete: "off",
				onInput: w
			}, null, 40, bw)]), U("div", xw, [
				n[10] ||= U("span", null, "Масштаб карты", -1),
				U("button", {
					type: "button",
					"data-sb-gt-action": "zoom-out",
					"aria-label": "Уменьшить масштаб",
					onClick: n[1] ||= (e) => re("zoom-out")
				}, "−"),
				U("output", Sw, O(Math.round(o.value * 100)) + "%", 1),
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
			U("div", Cw, [a.value.trim() ? (V(), H(B, { key: 0 }, [ee.value.count ? (V(), H(B, { key: 0 }, [U("div", ww, " Найдено в коллекции: " + O(ee.value.count) + O(ee.value.count > 30 ? " · показаны первые 30" : ""), 1), U("div", Tw, [(V(!0), H(B, null, z(ee.value.items, (e) => (V(), H("button", {
				key: e.id,
				type: "button",
				"data-sb-gt-action": "search-jump",
				"data-id": e.id,
				"data-tree": e.tree,
				onClick: (t) => ie(e)
			}, [W(O(e.name) + " ", 1), U("small", null, "(" + O(e.family) + ")", 1)], 8, Ew))), 128))])], 64)) : (V(), H("p", Dw, "Жанр не найден в коллекции Академии."))], 64)) : G("", !0)]),
			U("p", Ow, O(h.value.intro), 1),
			U("div", kw, [(V(!0), H(B, null, z(F(p), (e, t) => (V(), H("span", { key: t }, [U("i", { style: E({ "--rel-color": e.color }) }, null, 4), W(O(e.label), 1)]))), 128))]),
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
			}, [U("strong", null, O(e.group.icon) + " " + O(e.group.name), 1), U("span", null, O(e.entries.length), 1)], 4)) : (V(), H("div", Mw, [U("span", null, "0" + O(e.index + 1), 1), W(O(F(m)[e.index]), 1)])), U("div", Nw, [(V(!0), H(B, null, z(e.entries, (e) => (V(), H("button", {
				key: e.id,
				type: "button",
				class: D(["sb-gt-node", {
					"is-selected": i.value === e.id,
					"sb-gt-search-dim": S(e)
				}]),
				"data-sb-gt-action": "select",
				"data-id": e.id,
				"aria-pressed": i.value === e.id,
				onClick: (t) => ne(e.id)
			}, [U("span", Fw, O(e.name), 1), U("span", Iw, O(e.era || e.family || ""), 1)], 10, Pw))), 128))])], 10, jw))), 128))], 2)], 6)], 8, Aw),
			y.value ? (V(), H("div", Lw, [
				U("div", Rw, [U("div", null, [
					n[12] ||= U("div", { class: "sb-gt-kicker" }, "ВЫБРАННОЕ НАПРАВЛЕНИЕ", -1),
					U("h3", null, O(y.value.name), 1),
					U("p", zw, O(y.value.era || "") + " · " + O(y.value.family || ""), 1)
				]), U("button", {
					type: "button",
					class: "btn primary sb-gt-open",
					"data-sb-gt-action": "open",
					"data-id": y.value.id,
					onClick: n[4] ||= (t) => e.treeApi.openGenre(y.value.id)
				}, "Открыть карточку ↗", 8, Bw)]),
				U("p", Vw, O(y.value.description || y.value.tagline || "Описание в карточке жанра."), 1),
				b.value.length ? (V(), H(B, { key: 0 }, [n[13] ||= U("h4", null, "Исторические связи", -1), U("div", Hw, [(V(!0), H(B, null, z(b.value, (e) => (V(), H("button", {
					key: e.id + ":" + e.type,
					type: "button",
					class: "sb-gt-related-btn",
					"data-sb-gt-action": "select",
					"data-id": e.id,
					onClick: (t) => ne(e.id)
				}, [U("span", { class: D(["sb-gt-related-mark", "sb-gt-" + e.type]) }, O(e.direction), 3), U("span", null, [U("strong", null, O(e.name), 1), U("small", null, O(e.note), 1)])], 8, Uw))), 128))])], 64)) : g.value ? G("", !0) : (V(), H("p", Ww, "У этого узла пока нет нарисованных связей в выбранной схеме.")),
				g.value && x.value.length ? (V(), H(B, { key: 2 }, [U("h4", null, "Другие жанры раздела «" + O(y.value.family) + "»", 1), U("div", Gw, [(V(!0), H(B, null, z(x.value, (e) => (V(), H("button", {
					key: e.id,
					type: "button",
					class: "sb-gt-related-btn",
					"data-sb-gt-action": "select",
					"data-id": e.id,
					onClick: (t) => ne(e.id)
				}, [n[14] ||= U("span", { class: "sb-gt-related-mark" }, "♫", -1), U("span", null, [U("strong", null, O(e.name), 1)])], 8, Kw))), 128))])], 64)) : G("", !0)
			])) : G("", !0),
			n[15] ||= U("p", { class: "sb-gt-note" }, "Схема показывает основные исторические влияния и стилистические пересечения. Жанры могут развиваться параллельно; стрелки не означают единственное происхождение.", -1)
		]));
	}
}, [["__scopeId", "data-v-6e70f61e"]]);
// src/vue/academy/legacyGenreTreeBridge.js
function Jw({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_GENRE_TREE, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : J({
		root: n,
		selectTarget: (e) => {
			let t = e.querySelector("#sb-genre-tree");
			return t?.open ? t.querySelector("#sb-gt-inner") : null;
		},
		readSnapshot: () => {
			let e = t.snapshot();
			return e?.trees?.length && e?.genres?.length ? e : null;
		},
		mount: (n, r) => e(n, qw, {
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
var Yw = {
	class: "gb-grid",
	"data-sb-vue-overview": ""
}, Xw = { class: "gb-column" }, Zw = { class: "gb-panel pink" }, Qw = { class: "gb-unit" }, $w = { class: "gb-unit" }, eT = { class: "gb-unit" }, tT = { class: "gb-panel" }, nT = ["innerHTML"], rT = { class: "gb-column" }, iT = { class: "gb-panel blue" }, aT = {
	class: "gb-bpm-value",
	style: {
		"font-size": "26px",
		"font-weight": "900"
	}
}, oT = { class: "gb-artists" }, sT = { class: "gb-panel pink" }, cT = ["data-id"], lT = ["innerHTML"], uT = {
	__name: "GenreOverview",
	props: { genre: {
		type: Object,
		required: !0
	} },
	emits: ["select-tab"],
	setup(e) {
		return (t, n) => (V(), H("div", Yw, [U("div", Xw, [U("section", Zw, [
			n[7] ||= U("div", { class: "gb-sup" }, "01 / ЗНАКОМСТВО С ЖАНРОМ", -1),
			n[8] ||= U("h2", null, "Характер и звучание", -1),
			U("p", null, [U("strong", null, O(e.genre.tagline), 1)]),
			U("p", null, O(e.genre.description), 1),
			U("div", Qw, [n[2] ||= U("b", null, "🎸", -1), U("div", null, [n[1] ||= U("strong", null, "Инструменты", -1), U("span", null, O(e.genre.instruments) + ".", 1)])]),
			U("div", $w, [n[4] ||= U("b", null, "🎛️", -1), U("div", null, [n[3] ||= U("strong", null, "Саунд", -1), U("span", null, O(e.genre.style) + ".", 1)])]),
			U("div", eT, [n[6] ||= U("b", null, "✍️", -1), U("div", null, [n[5] ||= U("strong", null, "Тематика песен", -1), U("span", null, O(e.genre.themes) + ".", 1)])])
		]), U("section", tT, [
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
			}, null, 8, nT)])
		])]), U("div", rT, [U("section", iT, [
			n[12] ||= U("div", { class: "gb-sup" }, "02 / ПАСПОРТ НАПРАВЛЕНИЯ", -1),
			n[13] ||= U("h2", null, "История и сцена", -1),
			n[14] ||= U("div", { class: "info-label" }, "Эпоха", -1),
			U("p", null, O(e.genre.era), 1),
			n[15] ||= U("div", { class: "info-label" }, "Диапазон темпа", -1),
			U("p", aT, O(e.genre.bpm[0]) + "–" + O(e.genre.bpm[1]) + " BPM", 1),
			n[16] ||= U("div", { class: "info-label" }, "Исполнители для знакомства", -1),
			U("div", oT, [(V(!0), H(B, null, z(e.genre.artists, (e) => (V(), H("span", { key: e }, O(e), 1))), 128))])
		]), U("section", sT, [n[18] ||= da("<div class=\"gb-sup\">04 / ТВОЯ МУЗЫКА</div><h2>Преврати знания в трек</h2><p>Выбери вокал, настроение и темп, затем создай промпт и структуру песни в Suno Studio.</p><div class=\"gb-unit\"><b>🎤</b><div><strong>Вокал</strong><span>Мужской, женский или дуэт; можно использовать русский язык.</span></div></div><div class=\"gb-unit\"><b>⚡</b><div><strong>Динамика</strong><span>Настрой энергию и характер припева под историю.</span></div></div>", 5), U("button", {
			type: "button",
			class: "btn primary small",
			"data-action": "use-genre",
			"data-id": e.genre.id
		}, [U("span", {
			innerHTML: e.genre.icons.studio,
			"aria-hidden": "true"
		}, null, 8, lT), n[17] ||= W(" Открыть студию ", -1)], 8, cT)])])]));
	}
}, dT = {
	key: 0,
	id: "sb-artist-expanded",
	class: "ahx-wrap",
	"data-sb-vue-artists": ""
}, fT = { class: "ahx-intro" }, pT = { class: "gb-eyebrow" }, mT = {
	class: "ahx-toolbar",
	role: "group",
	"aria-label": "Музыкальные сцены"
}, hT = ["aria-pressed"], gT = ["aria-pressed"], _T = { class: "ahx-filters" }, vT = { class: "ahx-search" }, yT = ["innerHTML"], bT = {
	class: "ahx-filter-buttons",
	role: "group",
	"aria-label": "Фильтр исполнителей"
}, xT = [
	"data-vue-artist-filter",
	"aria-pressed",
	"onClick"
], ST = {
	id: "ahx-count",
	class: "ahx-count",
	"aria-live": "polite"
}, CT = { class: "ahx-section-head" }, wT = { class: "ahx-eyebrow" }, TT = { class: "ahx-num" }, ET = { class: "ahx-grid" }, DT = ["data-ahx-group"], OT = { class: "ahx-card-top" }, kT = {
	class: "ahx-avatar",
	"aria-hidden": "true"
}, AT = { class: "ahx-title" }, jT = { class: "ahx-era" }, MT = {
	key: 0,
	class: "ahx-track"
}, NT = {
	id: "ahx-no-results",
	class: "ahx-no-results"
}, PT = {
	key: 1,
	class: "ahx-empty"
}, FT = {
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
			(e === "ru" || e === "world") && (n.value = e, t.catalog.setScene(e), r.value = "", i.value = "all", await Dn(), t.enhanceProfiles?.());
		}
		return R(() => t.enhanceProfiles?.()), br(() => t.enhanceProfiles?.()), (t, u) => a.value ? (V(), H("div", dT, [
			U("div", fT, [
				U("div", pT, "АКАДЕМИЯ SUNOBOOM · " + O(e.genre.name), 1),
				u[4] ||= U("h2", null, "Исполнители и композиторы", -1),
				U("p", null, O(a.value.description), 1)
			]),
			U("div", mT, [U("button", {
				type: "button",
				"data-vue-artist-scene": "world",
				"aria-pressed": n.value === "world",
				class: D({ on: n.value === "world" }),
				onClick: u[0] ||= (e) => l("world")
			}, [u[5] ||= W(" 🌍 Мировая сцена ", -1), U("span", null, O(a.value.worldCount), 1)], 10, hT), U("button", {
				type: "button",
				"data-vue-artist-scene": "ru",
				"aria-pressed": n.value === "ru",
				class: D({ on: n.value === "ru" }),
				onClick: u[1] ||= (e) => l("ru")
			}, [u[6] ||= W(" 🎤 Русскоязычные ", -1), U("span", null, O(a.value.ruCount), 1)], 10, gT)]),
			c.value ? (V(), H(B, { key: 0 }, [
				U("div", _T, [U("label", vT, [U("span", {
					"aria-hidden": "true",
					innerHTML: e.genre.icons.overview
				}, null, 8, yT), I(U("input", {
					"onUpdate:modelValue": u[2] ||= (e) => r.value = e,
					type: "search",
					"data-vue-artist-search": "",
					placeholder: "Найти исполнителя или произведение…",
					"aria-label": "Поиск по исполнителям"
				}, null, 512), [[q, r.value]])]), U("div", bT, [(V(), H(B, null, z([
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
				}, O(e.label), 9, xT)), 64))])]),
				U("p", ST, "Показано " + O(s.value) + " из " + O(c.value) + " исполнителей.", 1),
				(V(!0), H(B, null, z(o.value, (e) => I((V(), H("section", {
					key: e.index,
					class: "ahx-section",
					"data-ahx-section": ""
				}, [U("div", CT, [U("div", null, [U("span", wT, "0" + O(e.index + 1) + " / ИСПОЛНИТЕЛИ", 1), U("h3", null, O(e.index ? "Современная сцена и продолжатели" : "Классика и предшественники"), 1)]), U("span", TT, O(e.artists.length), 1)]), U("div", ET, [(V(!0), H(B, null, z(e.artists, (e) => (V(), H("article", {
					key: e.key,
					class: "ahx-card",
					"data-ahx-group": e.group
				}, [
					U("div", OT, [U("span", kT, O(e.initials), 1), U("div", AT, [U("h4", null, O(e.name), 1), U("span", jT, O(e.period || "Музыкальная сцена"), 1)])]),
					U("span", { class: D(["ahx-role", { "ahx-role-neighbor": e.group === "adjacent" }]) }, O(e.label), 3),
					U("p", null, O(e.bio || "Музыкальное направление и характерный творческий почерк."), 1),
					e.track ? (V(), H("div", MT, [u[7] ||= U("small", null, "Ориентир для прослушивания", -1), U("strong", null, "♫ " + O(e.track), 1)])) : G("", !0)
				], 8, DT))), 128))])])), [[$a, e.artists.length]])), 128)),
				I(U("div", NT, " По заданному поиску исполнители не найдены. Попробуй другой запрос или выбери «Все». ", 512), [[$a, s.value === 0]])
			], 64)) : (V(), H("div", PT, [
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
}, IT = {
	class: "idea-grid",
	"data-sb-vue-ideas": ""
}, LT = { class: "idea-badge" }, RT = { class: "actions" }, zT = ["data-id", "data-i"], BT = ["innerHTML"], VT = [
	"data-id",
	"data-i",
	"aria-pressed"
], HT = ["innerHTML"], UT = {
	__name: "GenreIdeas",
	props: { genre: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (V(), H("div", IT, [(V(!0), H(B, null, z(e.genre.allIdeas, (t) => (V(), H("div", {
			key: t.index,
			class: "idea"
		}, [
			U("div", LT, O(e.genre.name) + " · " + O(t.mood), 1),
			U("h3", null, O(t.title), 1),
			U("p", null, O(t.pitch), 1),
			U("div", RT, [U("button", {
				type: "button",
				class: "btn primary small",
				"data-action": "idea-use",
				"data-id": e.genre.id,
				"data-i": t.index
			}, [U("span", {
				"aria-hidden": "true",
				innerHTML: e.genre.icons.studio
			}, null, 8, BT), n[0] ||= W(" В студию ", -1)], 8, zT), U("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "idea-save",
				"data-id": e.genre.id,
				"data-i": t.index,
				"aria-pressed": t.saved ? "true" : "false"
			}, [U("span", {
				"aria-hidden": "true",
				innerHTML: e.genre.icons.heart
			}, null, 8, HT), W(" " + O(t.saved ? "Сохранено" : "Сохранить"), 1)], 8, VT)])
		]))), 128))]));
	}
}, WT = {
	class: "panel",
	"data-sb-vue-prompts": ""
}, GT = { class: "idea-grid" }, KT = { class: "idea" }, qT = ["data-id"], JT = ["innerHTML"], YT = { class: "idea" }, XT = ["data-id"], ZT = ["innerHTML"], QT = {
	__name: "GenrePrompts",
	props: { genre: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (V(), H("div", WT, [
			n[5] ||= U("h3", null, "Шаблоны звучания", -1),
			n[6] ||= U("p", null, "Начни с одного из вариантов. Он перенесёт настройки жанра в конструктор — там можно выбрать вокал, настроение и язык.", -1),
			U("div", GT, [U("div", KT, [
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
				}, null, 8, JT)], 8, qT)
			]), U("div", YT, [
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
				}, null, 8, ZT)], 8, XT)
			])])
		]));
	}
}, $T = { class: "gb-hero" }, eE = { class: "gb-content" }, tE = { class: "gb-eyebrow" }, nE = { class: "gb-title" }, rE = { class: "gb-desc" }, iE = { class: "gb-tags" }, aE = { class: "gb-buttons" }, oE = ["data-id"], sE = ["innerHTML"], cE = ["data-id"], lE = ["innerHTML"], uE = {
	class: "gb-vinyl",
	"aria-hidden": "true"
}, dE = { class: "gb-equalizer" }, fE = { class: "gb-facts" }, pE = { class: "gb-fact" }, mE = { class: "gb-fact" }, hE = { class: "gb-fact" }, gE = { class: "gb-fact" }, _E = { class: "genre-detail-layout" }, vE = {
	class: "genre-side-nav",
	"aria-label": "ЖАНР-НАВ — меню жанра"
}, yE = {
	class: "genre-side-links",
	"aria-label": "Разделы жанра"
}, bE = [
	"data-tab",
	"aria-current",
	"onClick"
], xE = ["innerHTML"], SE = {
	class: "genre-detail-content",
	id: "genre-nav-content",
	"aria-label": "Содержимое раздела жанра"
}, CE = ["innerHTML"], wE = {
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
		], r = Q(), i = /* @__PURE__ */ N(t.genre.tab);
		L(i, (e) => r.publishAcademyFocus(t.genre.id, e), { immediate: !0 });
		let a = /* @__PURE__ */ N(t.tabContent(t.genre.id, i.value) || "");
		async function o(e) {
			if (i.value === e || !n.some((t) => t.id === e)) return;
			let r = t.tabContent(t.genre.id, e);
			typeof r == "string" && (i.value = e, a.value = r, await Dn(), window.innerWidth <= 850 && document.getElementById("genre-nav-content")?.scrollIntoView({
				block: "start",
				behavior: "smooth"
			}));
		}
		return (t, r) => (V(), H("div", {
			class: "genre-bright",
			style: E({ "--accent": e.genre.color })
		}, [U("div", $T, [
			r[5] ||= U("div", { class: "gb-top" }, [U("button", {
				type: "button",
				class: "back",
				"data-action": "academy-back",
				"aria-label": "Назад к разделу Академии"
			}, "← Назад"), U("small", null, "SUNOBOOM · MUSIC ATLAS")], -1),
			U("div", eE, [U("div", null, [
				U("div", tE, O(e.genre.family) + " · " + O(e.genre.era), 1),
				U("h1", nE, O(e.genre.name), 1),
				U("p", rE, O(e.genre.description), 1),
				U("div", iE, [
					U("span", null, O(e.genre.tagline), 1),
					U("span", null, O(e.genre.bpm[0]) + "–" + O(e.genre.bpm[1]) + " BPM", 1),
					U("span", null, O(e.genre.ideasCount) + " идеи", 1)
				]),
				U("div", aE, [U("button", {
					type: "button",
					class: "btn primary",
					"data-action": "use-genre",
					"data-id": e.genre.id
				}, [U("span", {
					innerHTML: e.genre.icons.studio,
					"aria-hidden": "true"
				}, null, 8, sE), r[0] ||= W(" Создать в Suno ", -1)], 8, oE), U("button", {
					type: "button",
					class: "btn ghost",
					"data-action": "favorite",
					"data-id": e.genre.id
				}, [U("span", {
					innerHTML: e.genre.icons.heart,
					"aria-hidden": "true"
				}, null, 8, lE), W(" " + O(e.genre.favorite ? "В избранном" : "В избранное"), 1)], 8, cE)])
			]), U("div", uE, [U("div", dE, [(V(), H(B, null, z(9, (e) => U("i", { key: e })), 64))])])]),
			U("div", fE, [
				U("div", pE, [r[1] ||= U("small", null, "История", -1), U("strong", null, O(e.genre.era), 1)]),
				U("div", mE, [r[2] ||= U("small", null, "Темп", -1), U("strong", null, O(e.genre.bpm[0]) + "–" + O(e.genre.bpm[1]) + " BPM", 1)]),
				U("div", hE, [r[3] ||= U("small", null, "Треки", -1), U("strong", null, O(e.genre.ideasCount) + " сюжетных идеи", 1)]),
				U("div", gE, [r[4] ||= U("small", null, "Артисты", -1), U("strong", null, O(e.genre.artistCount) + " ориентиров", 1)])
			])
		]), U("div", _E, [U("aside", vE, [r[7] ||= U("div", { class: "genre-side-head" }, [U("span", null, "ЖАНР-НАВ"), U("small", null, "Разделы карточки")], -1), U("nav", yE, [(V(), H(B, null, z(n, (t) => U("button", {
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
			}, null, 8, xE),
			U("span", null, O(t.label), 1),
			r[6] ||= U("span", {
				class: "genre-side-chevron",
				"aria-hidden": "true"
			}, "›", -1)
		], 10, bE)), 64))])]), U("section", SE, [i.value === "overview" ? (V(), na(uT, {
			key: 0,
			genre: e.genre,
			onSelectTab: o
		}, null, 8, ["genre"])) : i.value === "artists" && e.artistCatalog ? (V(), na(FT, {
			key: 1,
			genre: e.genre,
			catalog: e.artistCatalog,
			"enhance-profiles": e.enhanceArtistProfiles
		}, null, 8, [
			"genre",
			"catalog",
			"enhance-profiles"
		])) : i.value === "ideas" ? (V(), na(UT, {
			key: 2,
			genre: e.genre
		}, null, 8, ["genre"])) : i.value === "prompts" ? (V(), na(QT, {
			key: 3,
			genre: e.genre
		}, null, 8, ["genre"])) : (V(), H("div", {
			key: 4,
			innerHTML: a.value
		}, null, 8, CE))])])], 4));
	}
};
// src/vue/academy/legacyGenreDetailBridge.js
function TE({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_GENRE, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : J({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-genre-detail"),
		readSnapshot: () => {
			let e = t.snapshot();
			return e?.id ? e : null;
		},
		mount: (n, r) => e(n, wE, {
			genre: r,
			tabContent: (e, n) => t.tabContent(e, n),
			artistCatalog: window.SUNOBOOM_ARTIST_CATALOG || null,
			enhanceArtistProfiles: () => window.SUNOBOOM_ARTIST_PROFILES?.enhanceCards?.()
		})
	});
}
// src/vue/studio/StudioBuilder.vue
var EE = { class: "panel" }, DE = { class: "field" }, OE = ["value"], kE = ["value"], AE = { class: "form-grid" }, jE = { class: "field" }, ME = ["value"], NE = ["value"], PE = { class: "field" }, FE = ["value"], IE = ["value"], LE = { class: "field" }, RE = ["value"], zE = ["value"], BE = { class: "field" }, VE = ["value"], HE = ["value"], UE = { class: "field" }, WE = { for: "b-tempo" }, GE = {
	id: "tempo-num",
	style: { color: "#ffa8d5" }
}, KE = { class: "range" }, qE = ["value"], JE = { id: "bpm-output" }, YE = {
	class: "muted",
	style: { "font-size": "11px" }
}, XE = { class: "field" }, ZE = ["value"], QE = { class: "field" }, $E = ["value"], eD = { class: "checkrow" }, tD = ["checked", "onChange"], nD = {
	class: "panel",
	style: {
		position: "sticky",
		top: "20px"
	}
}, rD = {
	class: "output",
	id: "prompt-output"
}, iD = { class: "counter" }, aD = { id: "prompt-count" }, oD = { class: "two-col" }, sD = {
	class: "btn primary",
	type: "button",
	"data-action": "copy-prompt"
}, cD = ["innerHTML"], lD = {
	class: "btn ghost",
	type: "button",
	"data-action": "save-prompt"
}, uD = ["innerHTML"], dD = {
	key: 0,
	class: "notice",
	"data-sb-vue-mixer-recap": ""
}, fD = {
	key: 1,
	class: "notice",
	"data-sb-vue-arranger-recap": ""
}, pD = { class: "list-pills" }, mD = {
	__name: "StudioBuilder",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ P(t.api.snapshot()), r = Q();
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
		return R(() => window.addEventListener("sunoboom:studio-updated", f)), Sr(() => window.removeEventListener("sunoboom:studio-updated", f)), (e, t) => (V(), H(B, null, [U("div", EE, [
			t[17] ||= U("h3", null, "Параметры трека", -1),
			U("div", DE, [t[8] ||= U("label", { for: "b-genre" }, "Жанр", -1), U("select", {
				id: "b-genre",
				value: i.value.genre,
				onChange: t[0] ||= (e) => p("genre", e.target.value)
			}, [(V(!0), H(B, null, z(n.value.genres, (e) => (V(), H("option", {
				key: e.id,
				value: e.id
			}, O(e.name), 9, kE))), 128))], 40, OE)]),
			U("div", AE, [
				U("div", jE, [t[9] ||= U("label", { for: "b-mood" }, "Настроение", -1), U("select", {
					id: "b-mood",
					value: i.value.mood,
					onChange: t[1] ||= (e) => p("mood", e.target.value)
				}, [(V(), H(B, null, z(s, ([e, t]) => U("option", {
					key: e,
					value: e
				}, O(t), 9, NE)), 64))], 40, ME)]),
				U("div", PE, [t[10] ||= U("label", { for: "b-vocal" }, "Вокал", -1), U("select", {
					id: "b-vocal",
					value: i.value.vocal,
					onChange: t[2] ||= (e) => p("vocal", e.target.value)
				}, [(V(), H(B, null, z(c, ([e, t]) => U("option", {
					key: e,
					value: e
				}, O(t), 9, IE)), 64))], 40, FE)]),
				U("div", LE, [t[11] ||= U("label", { for: "b-lang" }, "Язык текста", -1), U("select", {
					id: "b-lang",
					value: i.value.language,
					onChange: t[3] ||= (e) => p("language", e.target.value)
				}, [(V(), H(B, null, z(l, ([e, t]) => U("option", {
					key: e,
					value: e
				}, O(t), 9, zE)), 64))], 40, RE)]),
				U("div", BE, [t[12] ||= U("label", { for: "b-energy" }, "Энергия", -1), U("select", {
					id: "b-energy",
					value: i.value.energy,
					onChange: t[4] ||= (e) => p("energy", e.target.value)
				}, [(V(), H(B, null, z(u, ([e, t]) => U("option", {
					key: e,
					value: e
				}, O(t), 9, HE)), 64))], 40, VE)])
			]),
			U("div", UE, [
				U("label", WE, [
					t[13] ||= W("Темп · ", -1),
					U("span", GE, O(i.value.tempo), 1),
					t[14] ||= W(" BPM", -1)
				]),
				U("div", KE, [U("input", {
					type: "range",
					id: "b-tempo",
					min: "65",
					max: "200",
					step: "1",
					value: i.value.tempo,
					onInput: t[5] ||= (e) => p("tempo", Number(e.target.value))
				}, null, 40, qE), U("output", JE, O(i.value.tempo) + " BPM", 1)]),
				U("span", YE, " Обычно для «" + O(a.value.name) + "»: " + O(a.value.bpm[0]) + "–" + O(a.value.bpm[1]) + " BPM ", 1)
			]),
			U("div", XE, [t[15] ||= U("label", { for: "b-theme" }, "Тема / история трека", -1), U("textarea", {
				id: "b-theme",
				rows: "2",
				value: i.value.theme,
				onInput: t[6] ||= (e) => p("theme", e.target.value),
				placeholder: "О чём будет песня?"
			}, null, 40, ZE)]),
			U("div", QE, [t[16] ||= U("label", { for: "b-extra" }, "Дополнительные инструкции (необязательно)", -1), U("textarea", {
				id: "b-extra",
				rows: "2",
				value: i.value.extra,
				onInput: t[7] ||= (e) => p("extra", e.target.value),
				placeholder: "Например: memorable chorus, short guitar solo"
			}, null, 40, $E)]),
			U("div", eD, [(V(), H(B, null, z(d, ([e, t]) => U("label", { key: e }, [U("input", {
				type: "checkbox",
				checked: i.value[e],
				onChange: (t) => p(e, t.target.checked)
			}, null, 40, tD), W(O(t), 1)])), 64))])
		]), U("div", nD, [
			t[22] ||= U("div", { class: "eyebrow" }, "Готово к Suno", -1),
			t[23] ||= U("h3", null, "Твой промпт", -1),
			U("div", rD, O(o.value), 1),
			U("div", iD, [t[18] ||= U("span", null, "Максимум 1000 символов", -1), U("b", aD, O(o.value.length) + " / 1000", 1)]),
			U("div", oD, [U("button", sD, [U("span", {
				"aria-hidden": "true",
				innerHTML: n.value.icons.copy
			}, null, 8, cD), t[19] ||= W(" Копировать ", -1)]), U("button", lD, [U("span", {
				"aria-hidden": "true",
				innerHTML: n.value.icons.save
			}, null, 8, uD), t[20] ||= W(" Сохранить ", -1)])]),
			t[24] ||= U("div", { class: "spacer" }, null, -1),
			F(r).mixerSummary.ready ? (V(), H("div", dD, [W(" Последний микс: " + O(F(r).mixerSummary.genreCount) + " жанра · " + O(F(r).mixerSummary.tempo) + " BPM · " + O(F(r).mixerSummary.promptLength) + " / 1000 символов. ", 1), t[21] ||= U("button", {
				type: "button",
				class: "link-action",
				"data-action": "nav",
				"data-nav": "mixer"
			}, "Перейти в Миксер →", -1)])) : G("", !0),
			F(r).arrangerSummary.ready ? (V(), H("div", fD, " Аранжировка: " + O(F(r).arrangerSummary.blockCount) + " блоков · " + O(F(r).arrangerSummary.barCount) + " тактов · средняя энергия " + O(F(r).arrangerSummary.averageEnergy) + "/5 · " + O(F(r).arrangerSummary.transitionCount) + " переходов. ", 1)) : G("", !0),
			t[25] ||= U("div", { class: "notice" }, [U("strong", null, "Подсказка:"), W(" промпт задаёт стиль, а текст песни можно вводить отдельно в Suno. Результат генерации может отличаться от запроса.")], -1),
			t[26] ||= U("div", { class: "spacer" }, null, -1),
			t[27] ||= U("div", { class: "info-label" }, "Музыкальный профиль", -1),
			U("div", pD, [
				U("span", null, O(a.value.name), 1),
				U("span", null, O(a.value.family), 1),
				U("span", null, O(a.value.bpm[0]) + "–" + O(a.value.bpm[1]) + " BPM", 1)
			])
		])], 64));
	}
};
// src/vue/studio/legacyStudioBridge.js
function hD({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_STUDIO, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : J({
		root: n,
		selectTarget: (e) => e.querySelector(".studio-grid"),
		readSnapshot: () => t.snapshot(),
		mount: (n) => {
			let r = e(n, mD, { api: t });
			return r && (n.dataset.sbVueStudio = "true"), r;
		}
	});
}
// src/vue/studio/GenreMixer.vue
var gD = { class: "heading" }, _D = {
	key: 0,
	class: "gm-muted",
	"data-sb-vue-studio-recap": ""
}, vD = { class: "gm-layout" }, yD = { class: "gm-panel" }, bD = { class: "gm-stack" }, xD = { class: "gm-row-top" }, SD = { class: "gm-rank" }, CD = { class: "gm-field gm-genre-select" }, wD = ["for"], TD = [
	"id",
	"value",
	"data-gm-genre"
], ED = ["label"], DD = ["value"], OD = ["data-gm-value"], kD = [
	"data-slot",
	"aria-label",
	"disabled"
], AD = { class: "gm-slider-line" }, jD = [
	"max",
	"value",
	"data-gm-weight",
	"aria-label"
], MD = { class: "gm-meter" }, ND = ["data-gm-meter"], PD = { class: "gm-sub" }, FD = { class: "gm-actions" }, ID = ["disabled"], LD = {
	class: "gm-mixture",
	"aria-label": "Доли музыкальных жанров"
}, RD = ["data-gm-mixbar", "title"], zD = { class: "gm-form-grid" }, BD = ["for"], VD = [
	"id",
	"value",
	"data-gm-setting"
], HD = ["value"], UD = { class: "gm-tempo" }, WD = ["checked"], GD = { class: "gm-tempo-row" }, KD = ["value", "disabled"], qD = { id: "gm-bpm" }, JD = { class: "gm-field" }, YD = ["value"], XD = { class: "gm-checks" }, ZD = ["data-gm-setting", "checked"], QD = { class: "gm-panel gm-output-panel" }, $D = {
	class: "gm-output",
	id: "gm-prompt",
	"aria-live": "polite"
}, eO = { class: "gm-prompt-meta" }, tO = { id: "gm-count" }, nO = { class: "gm-field" }, rO = ["value"], iO = { class: "gm-saved-list" }, aO = {
	key: 0,
	class: "gm-muted"
}, oO = { class: "gm-saved-actions" }, sO = ["data-id"], cO = ["data-id", "aria-label"], lO = {
	__name: "GenreMixer",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ P(t.api.snapshot()), r = Q();
		L(n, (e) => r.publishMixerSummary(e), { immediate: !0 });
		let i = K(() => n.value?.rows || []), a = K(() => n.value?.genres || []), o = K(() => n.value?.settings || {}), s = K(() => n.value?.options || {}), c = K(() => n.value?.saved || []), l = K(() => n.value?.prompt || ""), u = K(() => n.value?.tempo || 115), d = K(() => n.value?.title || "");
		function f() {
			let e = t.api.snapshot();
			e && (n.value = e);
		}
		R(() => window.addEventListener("sunoboom:mixer-updated", f)), Sr(() => window.removeEventListener("sunoboom:mixer-updated", f));
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
		return (e, t) => (V(), H(B, null, [U("header", gD, [
			t[1] ||= U("div", { class: "eyebrow" }, "Suno Studio · новый инструмент", -1),
			t[2] ||= U("h1", null, [W("Жанровый "), U("span", { class: "gm-highlight" }, "миксер")], -1),
			t[3] ||= U("p", null, "Соединяй от 2 до 4 жанров из Академии SUNOBOOM, задавай пропорции и создавай готовый Style-промпт для Suno.", -1),
			F(r).studioSummary.ready ? (V(), H("p", _D, [W(" Текущая Студия: " + O(F(r).studioSummary.tempo) + " BPM · " + O(F(r).studioSummary.promptLength) + " / 1000 символов. ", 1), t[0] ||= U("button", {
				type: "button",
				class: "link-action",
				"data-action": "nav",
				"data-nav": "studio"
			}, "Вернуться в Студию →", -1)])) : G("", !0)
		]), U("div", vD, [U("section", yD, [
			t[7] ||= U("div", { class: "gm-section-head" }, [U("div", null, [U("h2", null, "Формула звучания"), U("p", null, "Меняй жанры и двигай ползунки — сумма всегда равна 100%.")]), U("span", { class: "gm-total" }, "Σ 100%")], -1),
			U("div", bD, [(V(!0), H(B, null, z(i.value, (e, t) => (V(), H("article", {
				key: e.id,
				class: "gm-row",
				style: E({ "--gm-color": e.color })
			}, [
				U("div", xD, [
					U("span", SD, O(String(t + 1).padStart(2, "0")), 1),
					U("div", CD, [U("label", { for: "gm-genre-" + t }, "Музыкальное направление", 8, wD), U("select", {
						id: "gm-genre-" + t,
						value: e.id,
						"data-gm-genre": t
					}, [(V(!0), H(B, null, z(p(t), (e) => (V(), H("optgroup", {
						key: e.family,
						label: e.family
					}, [(V(!0), H(B, null, z(e.items, (e) => (V(), H("option", {
						key: e.id,
						value: e.id
					}, O(e.name), 9, DD))), 128))], 8, ED))), 128))], 8, TD)]),
					U("span", {
						class: "gm-percent",
						"data-gm-value": t
					}, O(e.weight) + "%", 9, OD),
					U("button", {
						type: "button",
						class: "gm-remove",
						"data-action": "gm-remove",
						"data-slot": t,
						"aria-label": "Убрать жанр " + e.name,
						title: "Убрать жанр",
						disabled: i.value.length <= 2
					}, "×", 8, kD)
				]),
				U("div", AD, [U("input", {
					type: "range",
					min: "5",
					max: 100 - 5 * (i.value.length - 1),
					step: "1",
					value: e.weight,
					"data-gm-weight": t,
					"aria-label": "Доля жанра " + e.name
				}, null, 8, jD), U("div", MD, [U("span", {
					"data-gm-meter": t,
					style: E({ width: e.weight + "%" })
				}, null, 12, ND)])]),
				U("p", PD, O(e.family) + " · " + O(e.tagline) + " · " + O(e.instruments), 1)
			], 4))), 128))]),
			U("div", FD, [U("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "gm-add",
				disabled: i.value.length >= 4
			}, "＋ Добавить жанр", 8, ID), t[4] ||= U("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "gm-equal"
			}, "Поровну", -1)]),
			U("div", LD, [(V(!0), H(B, null, z(i.value, (e) => (V(), H("span", {
				key: e.id,
				"data-gm-mixbar": e.id,
				style: E({
					width: e.weight + "%",
					background: e.color
				}),
				title: e.name + ": " + e.weight + "%"
			}, null, 12, RD))), 128))]),
			t[8] ||= U("p", { class: "gm-muted" }, "Проценты — творческий ориентир для генерации, а не гарантия точного соотношения в готовой музыке.", -1),
			t[9] ||= U("div", { class: "gm-divider" }, null, -1),
			t[10] ||= U("h2", null, "Характер композиции", -1),
			U("div", zD, [(V(!0), H(B, null, z(m.value, (e) => (V(), H("div", {
				key: e.key,
				class: "gm-field"
			}, [U("label", { for: "gm-" + e.key }, O(e.label), 9, BD), U("select", {
				id: "gm-" + e.key,
				value: o.value[e.key],
				"data-gm-setting": e.key
			}, [(V(!0), H(B, null, z(e.choices, ([e, t]) => (V(), H("option", {
				key: e,
				value: e
			}, O(t), 9, HD))), 128))], 8, VD)]))), 128))]),
			U("div", UD, [U("label", null, [U("input", {
				type: "checkbox",
				"data-gm-setting": "autoTempo",
				checked: o.value.autoTempo
			}, null, 8, WD), t[5] ||= W(" Определять темп по жанрам", -1)]), U("div", GD, [U("input", {
				id: "gm-tempo",
				type: "range",
				min: "65",
				max: "200",
				value: u.value,
				"data-gm-setting": "tempo",
				disabled: o.value.autoTempo
			}, null, 8, KD), U("b", qD, O(u.value) + " BPM", 1)])]),
			U("div", JD, [t[6] ||= U("label", { for: "gm-theme" }, "Тема песни (необязательно)", -1), U("textarea", {
				id: "gm-theme",
				rows: "2",
				maxlength: "170",
				"data-gm-setting": "theme",
				value: o.value.theme,
				placeholder: "Например: ночной город, встреча после долгой разлуки"
			}, null, 8, YD)]),
			U("div", XD, [(V(), H(B, null, z(h, ([e, t]) => U("label", { key: e }, [U("input", {
				type: "checkbox",
				"data-gm-setting": e,
				checked: o.value[e]
			}, null, 8, ZD), W(" " + O(t), 1)])), 64))])
		]), U("aside", QD, [
			t[13] ||= U("div", { class: "eyebrow" }, "Результат микширования", -1),
			t[14] ||= U("h2", null, "Гибридный Style-промпт", -1),
			U("div", $D, O(l.value), 1),
			U("div", eO, [t[11] ||= U("span", null, "На английском · готово для Suno", -1), U("b", tO, O(l.value.length) + " / 1000", 1)]),
			t[15] ||= da("<div class=\"gm-output-actions\"><button type=\"button\" class=\"btn primary\" data-action=\"gm-copy\">Копировать</button><button type=\"button\" class=\"btn ghost\" data-action=\"gm-to-studio\">В Suno Studio</button></div><button type=\"button\" class=\"btn ghost gm-full\" data-action=\"gm-save-prompt\">Сохранить в «Мои промпты»</button><div class=\"gm-divider\"></div><h3>Мои сочетания</h3>", 4),
			U("div", nO, [t[12] ||= U("label", { for: "gm-title" }, "Название сочетания", -1), U("input", {
				id: "gm-title",
				type: "text",
				maxlength: "90",
				"data-gm-title": "",
				value: d.value,
				placeholder: "Например: Северный электро-фолк"
			}, null, 8, rO)]),
			t[16] ||= U("button", {
				type: "button",
				class: "btn ghost gm-full",
				"data-action": "gm-save-mix"
			}, "Сохранить формулу", -1),
			U("div", iO, [c.value.length ? G("", !0) : (V(), H("p", aO, "Сохранённых сочетаний пока нет. Придумай свой микс и сохрани его.")), (V(!0), H(B, null, z(c.value, (e) => (V(), H("article", {
				key: e.id,
				class: "gm-saved"
			}, [U("div", null, [U("strong", null, O(e.title), 1), U("small", null, O(e.summary), 1)]), U("div", oO, [U("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "gm-load",
				"data-id": e.id
			}, "Открыть", 8, sO), U("button", {
				type: "button",
				class: "btn danger small",
				"data-action": "gm-delete",
				"data-id": e.id,
				"aria-label": "Удалить " + e.title
			}, "×", 8, cO)])]))), 128))]),
			t[17] ||= U("p", { class: "gm-muted" }, "Сохраняется в этом браузере и входит в общую JSON-копию данных SUNOBOOM. Подключение к ИИ для смешивания не требуется.", -1)
		])])], 64));
	}
};
// src/vue/studio/legacyMixerBridge.js
function uO({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_MIXER, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : J({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-mixer-root"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, lO, { api: t })
	});
}
// src/vue/studio/PromptAuditor.vue
var dO = {
	class: "sbpa-tabs",
	role: "group",
	"aria-label": "Источник промпта"
}, fO = ["aria-pressed"], pO = ["aria-pressed"], mO = {
	key: 0,
	class: "sbpa-manual"
}, hO = ["value"], gO = ["value"], _O = ["value"], vO = {
	key: 1,
	class: "sbpa-context"
}, yO = {
	id: "sbpa-results",
	"aria-live": "polite"
}, bO = { class: "sbpa-scoreline" }, xO = {
	class: "sbpa-score",
	"aria-label": "Эвристическая оценка промпта"
}, SO = { class: "sbpa-score-info" }, CO = ["aria-valuenow"], wO = {
	key: 0,
	class: "sbpa-issues"
}, TO = {
	key: 1,
	class: "sbpa-clear"
}, EO = { class: "sbpa-actions" }, DO = {
	key: 0,
	type: "button",
	"data-sbpa-action": "load-studio"
}, OO = { id: "sbpa-proposal-slot" }, kO = {
	key: 0,
	class: "sbpa-proposal"
}, AO = { key: 0 }, jO = { key: 1 }, MO = { key: 2 }, NO = {
	key: 3,
	class: "sbpa-alert"
}, PO = ["value"], FO = {
	__name: "PromptAuditor",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ P(t.api.snapshot()), r = Q();
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
		return R(() => window.addEventListener("sunoboom:auditor-updated", u)), Sr(() => window.removeEventListener("sunoboom:auditor-updated", u)), (e, t) => (V(), H(B, null, [
			t[10] ||= U("header", { class: "sbpa-head" }, [U("div", null, [
				U("span", { class: "sbpa-eyebrow" }, "SUNOBOOM · ПРОВЕРКА"),
				U("h2", null, "Интеллектуальный аудитор промптов"),
				U("p", null, "Ищет повторы, противоречия, перегрузку и особенности жанра до отправки в Suno.")
			]), U("span", { class: "sbpa-local" }, "Проверка по правилам · без API")], -1),
			U("div", dO, [U("button", {
				type: "button",
				"data-sbpa-action": "studio",
				class: D({ active: !i.value }),
				"aria-pressed": !i.value
			}, "Текущий промпт Studio", 10, fO), U("button", {
				type: "button",
				"data-sbpa-action": "manual",
				class: D({ active: i.value }),
				"aria-pressed": i.value
			}, "Свой текст / вставка", 10, pO)]),
			i.value ? (V(), H("div", mO, [
				t[0] ||= U("label", { for: "sbpa-text" }, "Текст промпта", -1),
				U("textarea", {
					id: "sbpa-text",
					rows: "5",
					spellcheck: "false",
					placeholder: "Вставь текст на русском или английском…",
					value: n.value.manual
				}, null, 8, hO),
				t[1] ||= U("label", { for: "sbpa-genre" }, "Жанр для сопоставления с Академией", -1),
				U("select", {
					id: "sbpa-genre",
					value: o.value
				}, [(V(!0), H(B, null, z(s.value, (e) => (V(), H("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, _O))), 128))], 8, gO)
			])) : (V(), H("p", vO, " Проверяется актуальный промпт конструктора. Изменения настроек Studio отражаются здесь автоматически. ")),
			U("div", yO, [U("div", bO, [
				U("div", xO, [W(O(a.value.score), 1), t[2] ||= U("small", null, "/ 100", -1)]),
				U("div", SO, [
					U("strong", null, O(a.value.status), 1),
					t[3] ||= U("span", null, "Оценка ориентировочная: проверяется структура текста, а не качество будущей музыки.", -1),
					U("div", {
						class: "sbpa-meter",
						role: "progressbar",
						"aria-label": "Оценка промпта",
						"aria-valuenow": a.value.score,
						"aria-valuemin": "0",
						"aria-valuemax": "100"
					}, [U("span", { style: E({ width: a.value.score + "%" }) }, null, 4)], 8, CO)
				]),
				U("div", { class: D(["sbpa-limit", { over: a.value.length > 1e3 }]) }, O(a.value.length) + " / 1000 символов ", 3)
			]), a.value.issues?.length ? (V(), H("ul", wO, [(V(!0), H(B, null, z(a.value.issues, (e, t) => (V(), H("li", {
				key: t,
				class: D(["sbpa-item", "sbpa-" + e.kind])
			}, [U("div", null, [
				U("strong", null, O(e.title), 1),
				U("p", null, O(e.detail), 1),
				U("small", null, O(e.fix), 1)
			])], 2))), 128))])) : (V(), H("p", TO, " Явных противоречий и повторов по проверяемым правилам не найдено. "))]),
			U("div", EO, [t[4] ||= U("button", {
				type: "button",
				"data-sbpa-action": "preview",
				class: "sbpa-primary"
			}, " Показать улучшенный вариант ", -1), i.value ? (V(), H("button", DO, " Вставить текущий промпт Studio ")) : G("", !0)]),
			U("div", OO, [c.value ? (V(), H("div", kO, [
				U("h4", null, [t[5] ||= W("Предлагаемый вариант ", -1), U("small", null, O(l.value.text.length) + " / 1000", 1)]),
				l.value.removed.length ? (V(), H("p", jO, "Удалено фрагментов: " + O(l.value.removed.length) + ". Проверь смысл до копирования.", 1)) : (V(), H("p", AO, "Удалять нечего: текст уже без точных повторов.")),
				l.value.removed.length ? (V(), H("details", MO, [t[6] ||= U("summary", null, "Что изменилось", -1), U("ul", null, [(V(!0), H(B, null, z(l.value.removed, (e, t) => (V(), H("li", { key: t }, [U("b", null, O(e.reason) + ":", 1), W(" " + O(e.part), 1)]))), 128))])])) : G("", !0),
				l.value.complete ? G("", !0) : (V(), H("p", NO, " Автоматического сокращения недостаточно. Уменьши текст вручную минимум на " + O(l.value.text.length - 1e3) + " символов. ", 1)),
				t[7] ||= U("label", { for: "sbpa-preview-text" }, "Редактируемый предпросмотр", -1),
				U("textarea", {
					id: "sbpa-preview-text",
					rows: "5",
					spellcheck: "false",
					value: l.value.text
				}, null, 8, PO),
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
function IO({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_AUDITOR, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : J({
		root: n,
		selectTarget: (e) => e.querySelector("#sbpa-auditor"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, FO, { api: t })
	});
}
// src/vue/studio/ArrangementPanel.vue
var LO = ["data-sba-id", "data-sba-energy"], RO = { class: "sba-block-head" }, zO = ["data-sba-drag", "aria-label"], BO = { class: "sba-index" }, VO = {
	class: "sba-emoji",
	"aria-hidden": "true"
}, HO = { class: "sba-head-energy" }, UO = { class: "sba-block-actions" }, WO = ["data-id", "disabled"], GO = ["data-id", "disabled"], KO = ["data-id"], qO = ["data-id"], JO = { class: "sba-block-fields" }, YO = ["data-id", "value"], XO = ["value"], ZO = ["data-id", "value"], QO = ["value"], $O = ["data-id", "value"], ek = ["value"], tk = { class: "sba-energy-field" }, nk = ["data-sba-output"], rk = ["value", "data-id"], ik = { class: "sba-instrument-field" }, ak = ["for"], ok = { class: "sba-instrument-row" }, sk = [
	"id",
	"data-id",
	"value"
], ck = ["id", "innerHTML"], lk = ["id"], uk = { class: "sba-sound-head" }, dk = ["data-id"], fk = ["data-id"], pk = ["id"], mk = {
	key: 0,
	class: "sba-sound-back"
}, hk = ["data-id"], gk = [
	"data-sba-sound-search",
	"data-id",
	"value",
	"placeholder"
], _k = ["id"], vk = { class: "sba-sound-info" }, yk = { key: 0 }, bk = ["data-id", "data-genre-id"], xk = {
	key: 0,
	class: "sba-sound-none"
}, Sk = { class: "sba-sound-group" }, Ck = [
	"disabled",
	"aria-disabled",
	"data-id",
	"data-sound-value"
], wk = {
	key: 0,
	class: "sba-sound-none"
}, Tk = {
	key: 1,
	class: "sba-sound-foot"
}, Ek = ["data-id"], Dk = {
	key: 0,
	class: "sba-custom-label"
}, Ok = ["data-id", "value"], kk = ["innerHTML"], Ak = ["data-id", "aria-label"], jk = {
	key: 0,
	class: "sba-empty"
}, Mk = ["aria-label"], Nk = [
	"data-sba-snake-id",
	"data-sba-energy",
	"aria-label",
	"title"
], Pk = { class: "sba-snake-num" }, Fk = {
	class: "sba-snake-icon",
	"aria-hidden": "true"
}, Ik = { class: "sba-snake-title" }, Lk = { class: "sba-snake-level" }, Rk = ["title"], zk = {
	key: 0,
	class: "sba-snake-more"
}, Bk = {
	key: 1,
	class: "sba-snake-empty"
}, Vk = ["data-sba-hub-from"], Hk = { class: "sba-transition-hub-route" }, Uk = { class: "sba-transition-hub-number" }, Wk = { class: "sba-transition-hub-names" }, Gk = { class: "sba-transition-hub-controls" }, Kk = [
	"data-id",
	"value",
	"aria-label"
], qk = ["value"], Jk = [
	"data-id",
	"value",
	"aria-label"
], Yk = ["value"], Xk = [
	"data-id",
	"value",
	"aria-label"
], Zk = ["value"], Qk = { class: "sba-transition-hub-actions" }, $k = ["data-id", "title"], eA = ["data-id"], tA = {
	key: 1,
	class: "sba-transition-hub-empty"
}, nA = ["title"], rA = { class: "sba-chart-column" }, iA = {
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
		let t = e, n = /* @__PURE__ */ P(t.api.snapshot()), r = Q();
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
		R(() => window.addEventListener("sunoboom:arranger-updated", h)), Sr(() => window.removeEventListener("sunoboom:arranger-updated", h));
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
			}, [U("div", RO, [
				U("span", {
					class: "sba-drag",
					draggable: "true",
					"data-sba-drag": e.id,
					title: "Перетащить блок",
					"aria-label": "Перетащить " + e.sectionName
				}, "⠿", 8, zO),
				U("span", BO, O(String(t + 1).padStart(2, "0")), 1),
				U("span", VO, O(e.icon), 1),
				U("strong", null, O(e.label), 1),
				U("span", HO, "Энергия " + O(e.energy) + "/5", 1),
				U("div", UO, [
					U("button", {
						type: "button",
						"data-sba-action": "up",
						"data-id": e.id,
						"aria-label": "Переместить вверх",
						disabled: t === 0
					}, "↑", 8, WO),
					U("button", {
						type: "button",
						"data-sba-action": "down",
						"data-id": e.id,
						"aria-label": "Переместить вниз",
						disabled: t === i.value.length - 1
					}, "↓", 8, GO),
					U("button", {
						type: "button",
						"data-sba-action": "duplicate",
						"data-id": e.id,
						"aria-label": "Дублировать блок"
					}, "⧉", 8, KO),
					U("button", {
						type: "button",
						"data-sba-action": "remove",
						"data-id": e.id,
						"aria-label": "Удалить блок"
					}, "×", 8, qO)
				])
			]), U("div", JO, [
				U("label", null, [n[0] ||= W("Раздел ", -1), U("select", {
					"data-sba-field": "type",
					"data-id": e.id,
					value: e.type
				}, [(V(!0), H(B, null, z(a.value, (e) => (V(), H("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, XO))), 128))], 8, YO)]),
				U("label", null, [n[1] ||= W("Тактов ", -1), U("select", {
					"data-sba-field": "bars",
					"data-id": e.id,
					value: e.bars
				}, [(V(), H(B, null, z(m, (e) => U("option", {
					key: e,
					value: e
				}, O(e), 9, QO)), 64))], 8, ZO)]),
				U("label", null, [n[2] ||= W("Вокал ", -1), U("select", {
					"data-sba-field": "vocal",
					"data-id": e.id,
					value: e.vocal
				}, [(V(!0), H(B, null, z(o.value, (e) => (V(), H("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, ek))), 128))], 8, $O)]),
				U("label", tk, [
					n[3] ||= W("Энергия ", -1),
					U("output", { "data-sba-output": e.id }, O(e.energy) + "/5 · " + O(s.value[e.energy]), 9, nk),
					U("input", {
						type: "range",
						min: "1",
						max: "5",
						step: "1",
						value: e.energy,
						"data-sba-field": "energy",
						"data-id": e.id
					}, null, 8, rk)
				]),
				U("div", ik, [
					U("label", { for: "sba-instruments-" + e.id }, "Инструменты / приём", 8, ak),
					U("div", ok, [U("input", {
						type: "text",
						id: "sba-instruments-" + e.id,
						maxlength: "300",
						"data-sba-field": "instruments",
						"data-id": e.id,
						value: e.instruments,
						placeholder: "Введи вручную или выбери рекомендацию",
						autocomplete: "off"
					}, null, 8, sk)]),
					U("div", {
						class: "sba-quick-sounds",
						id: "sba-quick-" + e.id,
						innerHTML: e.quickSounds
					}, null, 8, ck),
					e.soundPanel ? (V(), H("div", {
						key: 0,
						class: "sba-sound-panel",
						id: "sba-sound-panel-" + e.id,
						"aria-label": "Выбор инструментов и приёмов"
					}, [
						U("div", uk, [n[4] ||= U("strong", null, "Библиотека инструментов и приёмов", -1), U("button", {
							type: "button",
							"data-sba-action": "sound-close",
							"data-id": e.id,
							"aria-label": "Закрыть подбор"
						}, "×", 8, dk)]),
						U("button", {
							type: "button",
							class: "sba-sound-genre-trigger",
							"data-sba-action": "sound-switch-mode",
							"data-id": e.id
						}, [
							n[5] ||= W(" Жанр: ", -1),
							U("b", null, O(e.soundPanel.genreName), 1),
							n[6] ||= U("span", null, "⌄", -1)
						], 8, fk),
						U("div", { id: "sba-sound-body-" + e.id }, [
							e.soundPanel.mode === "genres" ? (V(), H("div", mk, [U("button", {
								type: "button",
								"data-sba-action": "sound-switch-mode",
								"data-id": e.id
							}, " ← К инструментам ", 8, hk)])) : G("", !0),
							U("input", {
								type: "search",
								class: "sba-sound-search",
								"data-sba-sound-search": e.soundPanel.mode,
								"data-id": e.id,
								value: e.soundPanel.query,
								placeholder: e.soundPanel.mode === "genres" ? "Поиск по всей Академии..." : "Поиск инструмента или приёма...",
								autocomplete: "off",
								"aria-label": "Поиск инструментов или жанров"
							}, null, 8, gk),
							U("div", {
								class: "sba-sound-list",
								id: "sba-sound-results-" + e.id
							}, [e.soundPanel.mode === "genres" ? (V(), H(B, { key: 0 }, [
								U("div", vk, [W(" Найдено жанров: " + O(e.soundPanel.total) + " ", 1), e.soundPanel.total > e.soundPanel.matches.length ? (V(), H("span", yk, " · уточни запрос ")) : G("", !0)]),
								(V(!0), H(B, null, z(e.soundPanel.matches, (t) => (V(), H("button", {
									key: t.id,
									type: "button",
									class: "sba-sound-genre-row",
									"data-sba-action": "sound-set-genre",
									"data-id": e.id,
									"data-genre-id": t.id
								}, [U("span", null, O(t.name), 1), U("small", null, O(t.family), 1)], 8, bk))), 128)),
								e.soundPanel.matches.length ? G("", !0) : (V(), H("p", xk, " Жанр не найден "))
							], 64)) : (V(), H(B, { key: 1 }, [(V(!0), H(B, null, z(e.soundPanel.groups, (t) => (V(), H(B, { key: t.title }, [U("div", Sk, O(t.title), 1), (V(!0), H(B, null, z(t.items, (t) => (V(), H("button", {
								key: t.name,
								type: "button",
								class: "sba-sound-option",
								disabled: t.added,
								"aria-disabled": t.added,
								"data-sba-action": "sound-add",
								"data-id": e.id,
								"data-sound-value": t.name
							}, [U("span", null, O(t.name), 1), U("small", null, O(t.added ? "✓ Добавлено" : "+ Добавить"), 1)], 8, Ck))), 128))], 64))), 128)), e.soundPanel.groups.length ? G("", !0) : (V(), H("p", wk, " Совпадений нет. Можно ввести инструмент вручную. "))], 64))], 8, _k),
							e.soundPanel.mode === "genres" ? G("", !0) : (V(), H("div", Tk, [n[7] ||= U("span", null, "Нажми «Добавить», чтобы дополнить поле. Свой текст сохраняется.", -1), U("button", {
								type: "button",
								"data-sba-action": "sound-clear",
								"data-id": e.id
							}, " Очистить поле ", 8, Ek)]))
						], 8, pk)
					], 8, lk)) : G("", !0)
				]),
				e.type === "custom" ? (V(), H("label", Dk, [n[8] ||= W("Своё название ", -1), U("input", {
					type: "text",
					maxlength: "48",
					"data-sba-field": "customName",
					"data-id": e.id,
					value: e.customName,
					placeholder: "Название для тега Suno"
				}, null, 8, Ok)])) : G("", !0)
			])], 8, LO),
			e.transitionHTML ? (V(), H("div", {
				key: 0,
				style: { display: "contents" },
				innerHTML: e.transitionHTML
			}, null, 8, kk)) : G("", !0),
			U("button", {
				type: "button",
				class: "sba-between-add",
				"data-sba-action": "insert-after",
				"data-id": e.id,
				"aria-label": "Добавить блок после " + e.label
			}, [...n[9] ||= [U("span", { "aria-hidden": "true" }, "＋", -1), W(" Добавить после ", -1)]], 8, Ak)
		], 64))), 128)), i.value.length ? G("", !0) : (V(), H("div", jk, "Пока нет блоков. Добавь первый фрагмент снизу."))], 64)) : e.kind === "snake" ? (V(), H(B, { key: 1 }, [i.value.length ? (V(), H(B, { key: 0 }, [(V(), H(B, null, z([6, 3], (e) => U("div", {
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
			U("span", Pk, O(e.index + 1), 1),
			U("span", Fk, O(e.icon), 1),
			U("span", Ik, O(e.snakeLabel), 1),
			U("span", Lk, O(e.energy) + "/5", 1),
			e.hasTransition ? (V(), H("span", {
				key: 0,
				class: "sba-snake-transition",
				title: "Переход: " + e.transitionLabel,
				"aria-hidden": "true"
			}, "↝", 8, Rk)) : G("", !0)
		], 8, Nk))), 128))], 2))), 128))], 10, Mk)), 64)), f.value.length < i.value.length ? (V(), H("p", zk, " … и ещё " + O(i.value.length - f.value.length) + " блоков ", 1)) : G("", !0)], 64)) : (V(), H("p", Bk, "Добавь первый блок, и здесь появится схема композиции."))], 64)) : e.kind === "transitions" ? (V(), H(B, { key: 2 }, [c.value.length ? (V(!0), H(B, { key: 0 }, z(p.value, (e) => (V(), H("div", {
			key: e.id,
			class: D(["sba-transition-hub-row", { "sba-transition-hub-active": e.current.type !== "none" }]),
			"data-sba-hub-from": e.id
		}, [
			U("div", Hk, [U("span", Uk, O(e.index + 1) + " → " + O(e.index + 2), 1), U("span", Wk, [
				W(O(e.from) + " ", 1),
				n[10] ||= U("b", null, "→", -1),
				W(" " + O(e.to), 1)
			])]),
			U("div", Gk, [
				U("label", null, [n[11] ||= W("Эффект ", -1), U("select", {
					"data-sba-transition": "type",
					"data-id": e.id,
					value: e.current.type,
					"aria-label": "Переход " + (e.index + 1) + " к " + (e.index + 2)
				}, [(V(!0), H(B, null, z(l.value, (e) => (V(), H("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, qk))), 128))], 8, Kk)]),
				U("label", null, [n[12] ||= W("Длина ", -1), U("select", {
					"data-sba-transition": "length",
					"data-id": e.id,
					value: e.current.length,
					"aria-label": "Длительность перехода " + (e.index + 1)
				}, [(V(!0), H(B, null, z(u.value, (e) => (V(), H("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, Yk))), 128))], 8, Jk)]),
				U("label", null, [n[13] ||= W("Сила ", -1), U("select", {
					"data-sba-transition": "strength",
					"data-id": e.id,
					value: e.current.strength,
					"aria-label": "Выраженность перехода " + (e.index + 1)
				}, [(V(!0), H(B, null, z(d.value, (e) => (V(), H("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, Zk))), 128))], 8, Xk)])
			]),
			U("div", Qk, [U("button", {
				type: "button",
				"data-sba-action": "transition-suggest",
				"data-id": e.id,
				title: "Совет: " + e.advice
			}, "✧ Совет", 8, $k), U("button", {
				type: "button",
				"data-sba-action": "transition-hub-jump",
				"data-id": e.id
			}, "Подробнее ↓", 8, eA)])
		], 10, Vk))), 128)) : (V(), H("p", tA, "Добавь второй блок, и здесь можно будет настроить переходы."))], 64)) : e.kind === "energy" ? (V(!0), H(B, { key: 3 }, z(i.value, (e) => (V(), H("div", {
			key: e.id,
			class: "sba-chart-step",
			title: e.label + " · " + e.energy + "/5",
			style: E({
				"--energy": e.energy,
				"--bar-width": 100 / i.value.length + "%"
			})
		}, [U("div", rA, [U("i", { style: E({ "--level": e.energy }) }, null, 4)]), U("small", null, O(e.icon), 1)], 12, nA))), 128)) : G("", !0);
	}
}, aA = ["aria-expanded"], oA = { id: "sba-picked-label" }, sA = ["hidden"], cA = { class: "sba-preset-search-row" }, lA = ["value"], uA = {
	class: "sba-preset-filters",
	role: "group",
	"aria-label": "Тип вариантов"
}, dA = ["data-filter", "aria-pressed"], fA = {
	id: "sba-preset-results",
	class: "sba-preset-results",
	role: "listbox",
	"aria-label": "Доступные шаблоны и жанры"
}, pA = { class: "sba-preset-group-title" }, mA = { key: 0 }, hA = ["aria-selected", "data-choice"], gA = {
	key: 0,
	class: "sba-preset-no-results"
}, _A = {
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
		return R(() => window.addEventListener("sunoboom:arranger-updated", i)), Sr(() => window.removeEventListener("sunoboom:arranger-updated", i)), (e, t) => (V(), H(B, null, [
			t[2] ||= U("span", { class: "sba-preset-caption" }, "Шаблон композиции / жанр", -1),
			U("button", {
				type: "button",
				id: "sba-presets",
				class: "sba-preset-trigger",
				"data-sba-action": "menu-toggle",
				"aria-haspopup": "dialog",
				"aria-expanded": r.value.open,
				"aria-controls": "sba-preset-menu"
			}, [U("span", oA, O(r.value.selected), 1), t[0] ||= U("span", {
				class: "sba-preset-chevron",
				"aria-hidden": "true"
			}, "⌄", -1)], 8, aA),
			U("div", {
				id: "sba-preset-menu",
				class: "sba-preset-menu",
				role: "dialog",
				"aria-label": "Поиск шаблона или жанра",
				hidden: !r.value.open
			}, [
				U("div", cA, [U("input", {
					type: "search",
					id: "sba-preset-search",
					autocomplete: "off",
					value: r.value.query,
					placeholder: "Найти жанр или шаблон...",
					"aria-label": "Поиск жанра"
				}, null, 8, lA), t[1] ||= U("button", {
					type: "button",
					"data-sba-action": "menu-close",
					"aria-label": "Закрыть меню"
				}, "×", -1)]),
				U("div", uA, [(V(!0), H(B, null, z([
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
				}, O(e.title), 9, dA))), 128))]),
				U("div", fA, [(V(!0), H(B, null, z(r.value.groups, (e) => (V(), H(B, { key: e.title }, [U("div", pA, [W(O(e.title) + " ", 1), e.count === null ? G("", !0) : (V(), H("small", mA, O(e.count), 1))]), (V(!0), H(B, null, z(e.items, (e) => (V(), H("button", {
					key: e.key,
					type: "button",
					role: "option",
					"aria-selected": e.key === r.value.selectedKey,
					"data-sba-action": "menu-choose",
					"data-choice": e.key
				}, [U("span", null, O(e.title), 1), U("small", null, O(e.subtitle), 1)], 8, hA))), 128))], 64))), 128)), r.value.groups.length ? G("", !0) : (V(), H("p", gA, " Ничего не найдено. Попробуй другое название или направление. "))])
			], 8, sA)
		], 64));
	}
}, vA = {
	class: "sba-preview-tabs",
	role: "group",
	"aria-label": "Тип результата"
}, yA = ["aria-pressed"], bA = ["aria-pressed"], xA = ["value"], SA = {
	class: "sba-preview-count",
	id: "sba-preview-count"
}, CA = {
	id: "sba-transfer-confirm",
	"aria-live": "polite"
}, wA = {
	key: 0,
	class: "sba-transfer-preview"
}, TA = ["hidden"], EA = [
	["#sba-cards", "cards"],
	["#sba-snake-track", "snake"],
	["#sba-transition-hub-list", "transitions"],
	["#sba-energy-chart", "energy"],
	[
		".sba-preset-picker",
		"picker",
		_A
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
				return R(() => window.addEventListener("sunoboom:arranger-updated", i)), Sr(() => window.removeEventListener("sunoboom:arranger-updated", i)), (e, t) => (V(), H(B, null, [
					t[3] ||= U("div", { class: "sba-result-header" }, [
						U("span", { class: "sba-eyebrow" }, "ПРЕДПРОСМОТР"),
						U("h3", null, "Результат для Suno"),
						U("p", null, "Lyrics — теги по секциям; Style — короткое описание динамики.")
					], -1),
					U("div", vA, [U("button", {
						type: "button",
						"data-sba-action": "tab",
						"data-tab": "lyrics",
						"aria-pressed": r.value.tab === "lyrics"
					}, "Теги Lyrics", 8, yA), U("button", {
						type: "button",
						"data-sba-action": "tab",
						"data-tab": "style",
						"aria-pressed": r.value.tab === "style"
					}, "Style", 8, bA)]),
					U("textarea", {
						id: "sba-preview",
						readonly: "",
						spellcheck: "false",
						"aria-label": "Готовые теги структуры песни",
						value: r.value.text
					}, null, 8, xA),
					U("div", SA, O(r.value.count), 1),
					t[4] ||= U("div", { class: "sba-result-actions" }, [U("button", {
						type: "button",
						class: "sba-btn sba-copy-btn",
						"data-sba-action": "copy"
					}, " Копировать результат "), U("button", {
						type: "button",
						class: "sba-btn sba-transfer-btn",
						"data-sba-action": "prepare-transfer"
					}, " Перенести стиль в Studio ")], -1),
					U("div", CA, [r.value.transfer ? (V(), H("div", wA, [
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
					}, O(r.value.message), 9, TA),
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
function DA({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ARRANGER, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : VS({
		root: n,
		islands: EA.map(([n, r, i = iA]) => ({
			key: r,
			selectTarget: (e) => e.querySelector(n),
			readSnapshot: () => t.snapshot(),
			mount: (n) => e(n, i, i === iA ? {
				api: t,
				kind: r
			} : { api: t })
		}))
	});
}
// src/vue/poetry/PoetryAnalysis.vue
var OA = {
	key: 0,
	class: "sb-poetry-empty"
}, kA = { class: "sb-poetry-stats" }, AA = { class: "sb-poetry-subline" }, jA = { class: "sb-poetry-sections" }, MA = { class: "sb-poetry-stanzas" }, NA = { class: "sb-poetry-stanza-name" }, PA = { class: "sb-poetry-stanza-data" }, FA = { class: "sb-poetry-lines" }, IA = { class: "sb-poetry-line-main" }, LA = { class: "sb-poetry-index" }, RA = { class: "sb-poetry-verse" }, zA = {
	class: "sb-poetry-syllable",
	title: "Оценка слогов"
}, BA = ["title"], VA = {
	key: 0,
	class: "sb-poetry-footnote"
}, HA = {
	key: 1,
	class: "sb-poetry-words"
}, UA = { class: "sb-poetry-tips" }, WA = {
	__name: "PoetryAnalysis",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ P(t.api.analysis()), r = K(() => n.value || {
			analyzed: !1,
			message: ""
		}), i = Q();
		function a() {
			let e = t.api.analysis();
			e && (n.value = e, i.publishPoetryAnalysisSummary(e));
		}
		return R(() => {
			i.publishPoetryAnalysisSummary(n.value), window.addEventListener("sunoboom:poetry-updated", a);
		}), Sr(() => window.removeEventListener("sunoboom:poetry-updated", a)), (e, t) => r.value.analyzed ? (V(), H(B, { key: 1 }, [
			U("div", kA, [(V(!0), H(B, null, z(r.value.stats, (e) => (V(), H("div", {
				key: e.label,
				class: "sb-poetry-stat"
			}, [U("strong", null, O(e.value), 1), U("span", null, O(e.label), 1)]))), 128))]),
			U("p", AA, " Диапазон: " + O(r.value.lower) + "–" + O(r.value.upper) + " слогов на строку · меток ударения: " + O(r.value.markedStress) + ". ", 1),
			U("div", jA, [t[1] ||= U("h4", null, "Строфы и предполагаемая рифмовка", -1), U("div", MA, [(V(!0), H(B, null, z(r.value.stanzas, (e) => (V(), H("div", {
				key: e.id,
				class: "sb-poetry-stanza"
			}, [U("div", NA, O(e.section) + " · строфа " + O(e.position), 1), U("div", PA, [
				W(" Схема " + O(e.scheme) + " ", 1),
				t[0] ||= U("span", null, "·", -1),
				W(" разброс " + O(e.spread) + " сл. ", 1)
			])]))), 128))])]),
			t[4] ||= U("div", { class: "sb-poetry-lines-head" }, [U("strong", null, "Построчный анализ"), U("span", null, "Слоги · рифма")], -1),
			U("div", FA, [(V(!0), H(B, null, z(r.value.lines, (e) => (V(), H("div", {
				key: e.number,
				class: "sb-poetry-line"
			}, [
				U("div", IA, [U("span", LA, O(e.number) + ".", 1), U("span", RA, O(e.text), 1)]),
				U("div", zA, [U("span", null, O(e.syllables) + " сл.", 1), U("i", { style: E({ width: e.width + "%" }) }, null, 4)]),
				U("span", {
					class: D(["sb-poetry-letter", { "sb-poetry-letter-match": e.rhyme }]),
					title: e.repeat ? "Совпадение последнего слова" : e.rhyme ? "Предполагаемая рифма" : "Метка окончания"
				}, O(e.mark), 11, BA)
			]))), 128))]),
			r.value.rowCount > 120 ? (V(), H("p", VA, " Показаны первые 120 строк из " + O(r.value.rowCount) + "; статистика рассчитана по всему тексту. ", 1)) : G("", !0),
			r.value.frequent.length ? (V(), H("div", HA, [t[2] ||= U("strong", null, "Повторяющиеся слова:", -1), (V(!0), H(B, null, z(r.value.frequent, (e) => (V(), H("span", { key: e.word }, O(e.word) + " · " + O(e.count), 1))), 128))])) : G("", !0),
			U("div", UA, [t[3] ||= U("h4", null, "На что обратить внимание", -1), U("ul", null, [(V(!0), H(B, null, z(r.value.suggestions, (e, t) => (V(), H("li", { key: t }, O(e), 1))), 128))])]),
			t[5] ||= U("p", { class: "sb-poetry-footnote" }, " Анализ ориентировочный: счёт гласных не равен точной метрической скансии, совпадение окончаний не гарантирует рифму, а вокальная удобность зависит от темпа и мелодии. Исходный текст автоматически не изменяется. ", -1)
		], 64)) : (V(), H("p", OA, O(r.value.message), 1));
	}
}, GA = {
	key: 0,
	class: "sb-stress-ambig-clear"
}, KA = { class: "sb-stress-ambig-heading" }, qA = { class: "sb-stress-ambig-variants" }, JA = ["data-word", "data-variant"], YA = {
	key: 0,
	class: "sb-poetry-small"
}, XA = {
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
		}), i = Q();
		function a() {
			let e = t.api.ambiguities();
			e && (n.value = e, i.publishPoetryAmbiguitySummary(e));
		}
		return R(() => {
			i.publishPoetryAmbiguitySummary(n.value), window.addEventListener("sunoboom:poetry-stress-updated", a);
		}), Sr(() => {
			window.removeEventListener("sunoboom:poetry-stress-updated", a), i.clearPoetryAmbiguitySummary();
		}), (e, t) => r.value.count ? (V(), H(B, { key: 1 }, [
			U("div", KA, " 🔴 Требуют проверки: " + O(r.value.count) + " вхождений (" + O(r.value.total) + " разных слов). Нажми нужный вариант для каждого вхождения. ", 1),
			(V(!0), H(B, null, z(r.value.words, (e) => (V(), H("div", {
				key: e.key,
				class: "sb-stress-ambig-choice"
			}, [U("strong", null, O(e.key) + O(e.count > 1 ? " ×" + e.count : ""), 1), U("div", qA, [(V(!0), H(B, null, z(e.variants, (t) => (V(), H("button", {
				key: t,
				type: "button",
				"data-action": "sb-poetry-stress-choice",
				"data-word": e.key,
				"data-variant": t,
				title: "Указать ударение для следующего вхождения"
			}, O(t), 9, JA))), 128))])]))), 128)),
			r.value.total > 30 ? (V(), H("p", YA, " Показаны первые 30 разных слов; другие можно исправить вручную. ")) : G("", !0)
		], 64)) : (V(), H("p", GA, " ✓ Все найденные неоднозначные слова проверены. "));
	}
};
// src/vue/poetry/legacyPoetryBridge.js
function ZA({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_POETRY, n = document.getElementById("app");
	return !t?.analysis || !t?.ambiguities || !n ? () => {} : VS({
		root: n,
		islands: [[
			"analysis",
			"#sb-poetry-result",
			WA
		], [
			"ambiguities",
			"#sb-poetry-ambiguous-choices",
			XA
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
var QA = { class: "sb-vt-field" }, $A = ["value"], ej = ["value"], tj = {
	class: "sb-vt-hint",
	id: "sb-vt-mode-hint"
}, nj = { class: "sb-vt-grid" }, rj = { class: "sb-vt-field" }, ij = ["value"], aj = ["value"], oj = { class: "sb-vt-field" }, sj = ["value"], cj = ["value"], lj = {
	key: 0,
	class: "sb-vt-field"
}, uj = ["value"], dj = ["value"], fj = { class: "sb-vt-intensity" }, pj = { class: "sb-vt-between" }, mj = { id: "sb-vt-intensity-label" }, hj = ["value"], gj = { class: "sb-vt-options" }, _j = ["data-vt-pref", "checked"], vj = {
	key: 1,
	class: "sb-vt-consent",
	id: "sb-vt-consent-row"
}, yj = { class: "sb-vt-buttons" }, bj = ["disabled"], xj = {
	id: "sb-vt-result",
	"aria-live": "polite"
}, Sj = {
	key: 0,
	class: "sb-vt-draft"
}, Cj = { class: "sb-vt-draft-head" }, wj = { class: "sb-vt-method" }, Tj = { class: "sb-vt-section-list" }, Ej = { class: "sb-vt-section-heading" }, Dj = { class: "sb-vt-section-controls" }, Oj = [
	"data-vt-preset",
	"value",
	"aria-label"
], kj = ["value"], Aj = [
	"data-vt-cue",
	"value",
	"aria-label"
], jj = { class: "sb-vt-field" }, Mj = ["value"], Nj = {
	class: "sb-vt-small",
	id: "sb-vt-preview-state"
}, Pj = {
	__name: "PerformanceTags",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ P(t.api.snapshot()), r = Q(), i = K(() => n.value?.prefs || {}), a = K(() => n.value?.draft || null), o = [
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
		}), Sr(() => {
			window.removeEventListener("sunoboom:tags-updated", u), r.clearPerformanceTagsSummary();
		}), (e, t) => (V(), H(B, null, [
			t[12] ||= U("div", { class: "sb-vt-header" }, [U("span", { class: "sb-vt-symbol" }, "🎭"), U("div", null, [U("h3", null, "Генератор тегов исполнения"), U("p", null, "Вокальная драматургия по секциям. Без изменения слов песни; результат можно проверить и применить только вручную.")])], -1),
			U("div", QA, [t[0] ||= U("label", { for: "sb-vt-mode" }, "Способ генерации", -1), U("select", {
				id: "sb-vt-mode",
				"data-vt-pref": "mode",
				value: i.value.mode
			}, [(V(), H(B, null, z(o, ([e, t]) => U("option", {
				key: e,
				value: e
			}, O(t), 9, ej)), 64))], 8, $A)]),
			U("p", tj, O(n.value.modeHint), 1),
			U("div", nj, [U("div", rj, [t[1] ||= U("label", { for: "sb-vt-source" }, "Источник текста", -1), U("select", {
				id: "sb-vt-source",
				"data-vt-pref": "source",
				value: i.value.source
			}, [(V(), H(B, null, z(c, ([e, t]) => U("option", {
				key: e,
				value: e
			}, O(t), 9, aj)), 64))], 8, ij)]), U("div", oj, [t[2] ||= U("label", { for: "sb-vt-density" }, "Детализация метатегов", -1), U("select", {
				id: "sb-vt-density",
				"data-vt-pref": "density",
				value: i.value.density
			}, [(V(), H(B, null, z(s, ([e, t]) => U("option", {
				key: e,
				value: e
			}, O(t), 9, cj)), 64))], 8, sj)])]),
			n.value.artists?.length ? (V(), H("div", lj, [t[4] ||= U("label", { for: "sb-vt-artist" }, "Учесть «ДНК артиста» (необязательно)", -1), U("select", {
				id: "sb-vt-artist",
				"data-vt-pref": "artistId",
				value: i.value.artistId
			}, [t[3] ||= U("option", { value: "" }, "Без привязки к артисту", -1), (V(!0), H(B, null, z(n.value.artists, (e) => (V(), H("option", {
				key: e.id,
				value: e.id
			}, O(e.name), 9, dj))), 128))], 8, uj)])) : G("", !0),
			U("div", fj, [
				U("div", pj, [t[5] ||= U("label", { for: "sb-vt-intensity" }, "Максимальная интенсивность исполнения", -1), U("strong", mj, O(i.value.intensity) + " / 5", 1)]),
				U("input", {
					type: "range",
					id: "sb-vt-intensity",
					min: "1",
					max: "5",
					step: "1",
					value: i.value.intensity,
					"data-vt-pref": "intensity"
				}, null, 8, hj),
				t[6] ||= U("div", { class: "sb-vt-between sb-vt-scale" }, [U("span", null, "Сдержанная"), U("span", null, "Экспрессивная")], -1)
			]),
			U("div", gj, [(V(), H(B, null, z(l, ([e, t]) => U("label", { key: e }, [U("input", {
				type: "checkbox",
				"data-vt-pref": e,
				checked: i.value[e]
			}, null, 8, _j), W(" " + O(t), 1)])), 64))]),
			n.value.hasEndpoint ? (V(), H("label", vj, [...t[7] ||= [U("input", {
				type: "checkbox",
				id: "sb-vt-consent"
			}, null, -1), W(" Разрешаю отправить выбранный текст песни на защищённый сервер для анализа Gemini. ", -1)]])) : G("", !0),
			U("div", yj, [U("button", {
				type: "button",
				class: "btn primary",
				"data-action": "vt-generate",
				disabled: n.value.busy
			}, "✨ Создать предпросмотр", 8, bj), t[8] ||= U("span", { class: "sb-vt-note" }, "Никакого автоматического применения к Lyrics.", -1)]),
			U("div", {
				id: "sb-vt-notice",
				class: D(["sb-vt-notice", n.value.notice?.kind]),
				role: "status",
				"aria-live": "polite"
			}, O(n.value.notice?.text), 3),
			U("div", xj, [a.value ? (V(), H("div", Sj, [
				U("div", Cj, [U("h4", null, "Предпросмотр · " + O(a.value.sections.length) + " секций", 1), U("span", wj, O(a.value.method), 1)]),
				t[10] ||= U("p", { class: "sb-vt-small" }, " Проверь каждую секцию. Теги можно выбрать из списка или переписать вручную. Оригинальные строки песни остаются неизменными. ", -1),
				U("div", Tj, [(V(!0), H(B, null, z(a.value.sections, (e, t) => (V(), H("div", {
					key: e.id,
					class: "sb-vt-section"
				}, [U("div", Ej, [U("strong", null, O(e.label), 1), U("span", null, O(t + 1) + "/" + O(a.value.sections.length), 1)]), U("div", Dj, [U("select", {
					"data-vt-preset": t,
					value: a.value.tags[t],
					"aria-label": "Готовые теги для " + e.label
				}, [(V(!0), H(B, null, z(n.value.presets, ([e, t]) => (V(), H("option", {
					key: e,
					value: e
				}, O(t), 9, kj))), 128))], 8, Oj), U("input", {
					"data-vt-cue": t,
					value: a.value.tags[t],
					maxlength: "165",
					placeholder: "Например: Warm Emotional Vocals",
					"aria-label": "Тег исполнения " + e.label
				}, null, 8, Aj)])]))), 128))]),
				U("div", jj, [t[9] ||= U("label", { for: "sb-vt-preview" }, " Готовый Lyrics — разрешено редактировать только инструкции, не слова песни ", -1), U("textarea", {
					id: "sb-vt-preview",
					spellcheck: "false",
					rows: "13",
					maxlength: "25000",
					value: a.value.preview
				}, null, 8, Mj)]),
				U("p", Nj, O(n.value.previewState), 1),
				t[11] ||= da("<div class=\"sb-vt-draft-actions\"><button type=\"button\" class=\"btn primary\" data-action=\"vt-apply\"> ✓ Применить к Lyrics </button><button type=\"button\" class=\"btn ghost\" data-action=\"vt-copy\"> Копировать предпросмотр </button><button type=\"button\" class=\"btn ghost\" data-action=\"vt-refresh\"> Обновить предпросмотр </button><button type=\"button\" class=\"btn ghost\" data-action=\"vt-cancel\"> Отменить </button></div>", 1)
			])) : G("", !0)])
		], 64));
	}
};
// src/vue/poetry/legacyTagsBridge.js
function Fj({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_TAGS, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : J({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vt-workbench"),
		readSnapshot: () => t.snapshot(),
		mount: (n) => e(n, Pj, { api: t })
	});
}
// src/vue/entry.js
var Ij = _c(), Lj = Q(Ij);
function Rj(e) {
	return typeof document > "u" ? null : typeof e == "string" ? document.querySelector(e) : e;
}
var { mountVueFeature: $, unmountVueFeature: zj } = Qs({
	createApp: Xo,
	host: WS,
	pinia: Ij,
	router: Nu,
	resolveTarget: Rj
});
function Bj() {
	return US({ sharedUi: Lj });
}
function Vj() {
	return oC({
		mountVueFeature: $,
		unmountVueFeature: zj,
		sharedUi: Lj
	});
}
function Hj() {
	return yC({ mountVueFeature: $ });
}
function Uj() {
	return aw({ mountVueFeature: $ });
}
function Wj() {
	return TE({ mountVueFeature: $ });
}
function Gj() {
	return hD({ mountVueFeature: $ });
}
function Kj() {
	return uO({ mountVueFeature: $ });
}
function qj() {
	return IO({ mountVueFeature: $ });
}
function Jj() {
	return DA({ mountVueFeature: $ });
}
function Yj() {
	return ZA({ mountVueFeature: $ });
}
function Xj() {
	return Fj({ mountVueFeature: $ });
}
function Zj() {
	return HS({ mountVueFeature: $ });
}
function Qj() {
	return _f({ mountVueFeature: $ });
}
function $j() {
	return cm({ mountVueFeature: $ });
}
function eM() {
	return em({ mountVueFeature: $ });
}
function tM() {
	return Zm({ mountVueFeature: $ });
}
function nM() {
	return dh({ mountVueFeature: $ });
}
function rM() {
	return sg({ mountVueFeature: $ });
}
function iM() {
	return Ug({ mountVueFeature: $ });
}
function aM() {
	return Zg({ mountVueFeature: $ });
}
function oM() {
	return w_({ mountVueFeature: $ });
}
function sM() {
	return Q_({ mountVueFeature: $ });
}
function cM() {
	return bv({ mountVueFeature: $ });
}
function lM() {
	return oy({ mountVueFeature: $ });
}
function uM() {
	return nb({ mountVueFeature: $ });
}
function dM() {
	return ub({ mountVueFeature: $ });
}
function fM() {
	return Xb({ mountVueFeature: $ });
}
function pM() {
	return ix({ mountVueFeature: $ });
}
function mM() {
	return Px({ mountVueFeature: $ });
}
function hM() {
	return lS({ mountVueFeature: $ });
}
function gM() {
	return np({ mountVueFeature: $ });
}
function _M() {
	return zp({
		mountVueFeature: $,
		sharedUi: Lj
	});
}
function vM() {
	return Jw({ mountVueFeature: $ });
}
function yM() {
	return Zs({ mountVueFeature: $ });
}
function bM() {
	return Gs({ mountVueFeature: $ });
}
function xM() {
	return Rs({ mountVueFeature: $ });
}
function SM() {
	return Ds({ mountVueFeature: $ });
}
function CM() {
	return ms({ mountVueFeature: $ });
}
function wM() {
	return as({ mountVueFeature: $ });
}
export { $ as mountVueFeature, Uj as startLegacyAcademy, cM as startLegacyAccountSettings, Bj as startLegacyAppearance, Jj as startLegacyArranger, oM as startLegacyArtistDNA, sM as startLegacyArtistDNAEditor, aM as startLegacyArtistManager, qj as startLegacyAuditor, SM as startLegacyEventCollection, CM as startLegacyEventEditor, wM as startLegacyEventReminders, Wj as startLegacyGenreDetail, vM as startLegacyGenreTree, _M as startLegacyHomeDashboard, Qj as startLegacyIdeaCollections, Zj as startLegacyIdeaEditor, tM as startLegacyLibrary, Kj as startLegacyMixer, Vj as startLegacyNavigation, uM as startLegacyPlayerAB, lM as startLegacyPlayerLab, Yj as startLegacyPoetry, fM as startLegacyProducerSongDetail, dM as startLegacyProducerSongList, yM as startLegacyProjectCollection, bM as startLegacyProjectCreator, xM as startLegacyProjectDetail, eM as startLegacyPromptCollection, $j as startLegacyPromptEditor, nM as startLegacySongCards, rM as startLegacySongDetail, iM as startLegacySongEditor, Gj as startLegacyStudio, Xj as startLegacyTags, Hj as startLegacyTopHeader, mM as startLegacyTrackPassportDetail, hM as startLegacyTrackPassportEditor, pM as startLegacyTrackPassportList, gM as startLegacyVersionHistory, zj as unmountVueFeature };
