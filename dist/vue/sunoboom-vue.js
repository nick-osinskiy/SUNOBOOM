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
}, J = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = Uo[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, Wo = {
	esc: "escape",
	space: " ",
	up: "arrow-up",
	left: "arrow-left",
	right: "arrow-right",
	down: "arrow-down",
	delete: "backspace"
}, Go = (e, t) => {
	let n = e._withKeys ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n) => {
		if (!("key" in n)) return;
		let r = ae(n.key);
		if (t.some((e) => e === r || Wo[e] === r)) return e(n);
	}));
}, Ko = /* @__PURE__ */ s({ patchProp: Eo }, Ja), qo;
function Jo() {
	return qo ||= Pi(Ko);
}
var Yo = ((...e) => {
	let t = Jo().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = Zo(e);
		if (!r) return;
		let i = t._component;
		h(i) || i.render || i.template || (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, Xo(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function Xo(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function Zo(e) {
	return g(e) ? document.querySelector(e) : e;
}
// src/vue/academy/ArtistProfileDialog.vue
var Qo = { class: "sb-ap-dialog-title" }, $o = { class: "sb-ap-profile-hero" }, es = { class: "sb-ap-profile-logo" }, ts = { class: "sb-ap-overline" }, ns = { id: "sb-ap-dialog-heading" }, rs = { class: "sb-ap-profile-fields" }, is = { class: "sb-ap-profile-section" }, as = { class: "sb-ap-profile-section" }, os = {
	key: 0,
	class: "sb-ap-fine"
}, ss = { class: "sb-ap-profile-section" }, cs = {
	key: 0,
	class: "sb-ap-pills"
}, ls = {
	key: 1,
	class: "sb-ap-muted"
}, us = {
	key: 2,
	class: "sb-ap-fine"
}, ds = { class: "sb-ap-profile-section" }, fs = {
	key: 0,
	class: "sb-ap-songs"
}, ps = {
	key: 1,
	class: "sb-ap-muted"
}, ms = { class: "sb-ap-profile-section" }, hs = {
	key: 0,
	class: "sb-ap-related"
}, gs = ["data-genre", "onClick"], _s = {
	key: 1,
	class: "sb-ap-muted"
}, vs = { class: "sb-ap-profile-buttons" }, ys = ["data-name", "aria-pressed"], bs = ["data-name"], xs = {
	__name: "ArtistProfileDialog",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ P(t.api.profileSnapshot()), r = /* @__PURE__ */ N(null), i = () => Dn(() => r.value?.focus()), a = t.api.subscribe(() => {
			let e = n.value?.key;
			n.value = t.api.profileSnapshot(), n.value && e !== n.value.key && i();
		});
		return R(i), Sr(a), (t, i) => n.value ? (V(), H(B, { key: 0 }, [
			U("div", Qo, [i[3] ||= U("span", null, "🎙️ Профиль исполнителя", -1), U("button", {
				ref_key: "close",
				ref: r,
				type: "button",
				"data-sb-ap-action": "close",
				class: "sb-ap-close",
				"aria-label": "Закрыть профиль",
				onClick: i[0] ||= J((t) => e.api.closeProfile(), ["stop"])
			}, "×", 512)]),
			U("div", $o, [U("div", es, O(n.value.initials), 1), U("div", null, [
				U("span", ts, O(n.value.scene), 1),
				U("h2", ns, O(n.value.name), 1),
				U("p", null, O(n.value.editorial ? "Редакционная справка SUNOBOOM" : "Сведения из карточек Академии"), 1)
			])]),
			U("div", rs, [
				U("section", null, [U("small", null, O(n.value.exactYears ? "Годы активности" : "Период в подборке"), 1), U("strong", null, O(n.value.period), 1)]),
				U("section", null, [i[4] ||= U("small", null, "Направлений в Академии", -1), U("strong", null, O(n.value.genres.length), 1)]),
				U("section", null, [i[5] ||= U("small", null, "Ориентиры для прослушивания", -1), U("strong", null, O(n.value.songs.length), 1)])
			]),
			U("div", is, [i[6] ||= U("h3", null, "Биография и творческий путь", -1), U("p", null, O(n.value.biography), 1)]),
			U("div", as, [
				i[7] ||= U("h3", null, "Особенности звучания", -1),
				U("p", null, O(n.value.sound), 1),
				n.value.editorial ? G("", !0) : (V(), H("p", os, "Описание относится к музыкальному направлению и не является подтверждённым персональным анализом артиста."))
			]),
			U("div", ss, [
				U("h3", null, O(n.value.editorial ? "Музыкальные влияния и стилистика" : "Истоки музыкального направления"), 1),
				n.value.roots.length ? (V(), H("div", cs, [(V(!0), H(B, null, z(n.value.roots, (e) => (V(), H("span", { key: e }, O(e), 1))), 128))])) : (V(), H("p", ls, "Персональные музыкальные влияния ещё не документированы в этой карточке.")),
				!n.value.editorial && n.value.roots.length ? (V(), H("p", us, "Это контекст жанра, а не утверждение о личных влияниях музыканта.")) : G("", !0)
			]),
			U("div", ds, [i[8] ||= U("h3", null, "Произведения для знакомства", -1), n.value.songs.length ? (V(), H("ul", fs, [(V(!0), H(B, null, z(n.value.songs.slice(0, 10), (e) => (V(), H("li", { key: e }, "♫ " + O(e), 1))), 128))])) : (V(), H("p", ps, "Список произведений пока не заполнен."))]),
			U("div", ms, [i[9] ||= U("h3", null, "Жанры и связанные подборки", -1), n.value.genres.length ? (V(), H("div", hs, [(V(!0), H(B, null, z(n.value.genres.slice(0, 15), (t) => (V(), H("button", {
				key: t.id,
				type: "button",
				"data-sb-ap-action": "genre",
				"data-genre": t.id,
				onClick: J((n) => e.api.openGenre(t.id), ["stop"])
			}, O(t.name) + " →", 9, gs))), 128))])) : (V(), H("p", _s, "Жанровые ссылки пока не добавлены."))]),
			U("div", vs, [U("button", {
				type: "button",
				"data-sb-ap-action": "favorite",
				"data-name": n.value.name,
				"aria-pressed": n.value.favorite,
				class: "sb-ap-fav-main",
				onClick: i[1] ||= J((t) => e.api.toggleFavorite(n.value.name), ["stop"])
			}, O(n.value.favorite ? "★ В избранном" : "☆ Сохранить в избранное"), 9, ys), U("button", {
				type: "button",
				"data-sb-ap-action": "copy",
				"data-name": n.value.name,
				class: "sb-ap-copy",
				onClick: i[2] ||= J((t) => e.api.copy(n.value.name), ["stop"])
			}, "Скопировать справку", 8, bs)]),
			i[10] ||= U("p", { class: "sb-ap-fine" }, "Профиль не связан с отдельной функцией «ДНК артиста». Это справочный материал Академии, не личный творческий проект пользователя.", -1)
		], 64)) : G("", !0);
	}
};
// src/vue/legacy/observeLegacyIsland.js
function Y({ root: e, selectTarget: t, readSnapshot: n, mount: r, subscribe: i, createObserver: a = (e) => new MutationObserver(e) }) {
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
// src/vue/academy/legacyArtistProfilesBridge.js
function Ss({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_ARTIST_PROFILES;
	return t?.profileSnapshot ? Y({
		root: document.body,
		selectTarget: (e) => e.querySelector("#sb-ap-dialog-body"),
		readSnapshot: () => t.profileSnapshot(),
		subscribe: (e) => t.subscribe(e),
		mount: (n) => e(n, xs, { api: t })
	}) : () => {};
}
// src/vue/account/SharedSongPage.vue
var Cs = { class: "sbsong-hero" }, ws = {
	key: 0,
	class: "sbsong-public-card"
}, Ts = ["src"], Es = {
	key: 1,
	class: "sbsong-public-art"
}, Ds = { class: "sbsong-detail-tags" }, Os = { key: 0 }, ks = { key: 1 }, As = {
	key: 2,
	class: "sbsong-detail-description"
}, js = ["src"], Ms = { key: 4 }, Ns = ["href"], Ps = {
	key: 5,
	class: "sbsong-public-notice"
}, Fs = {
	key: 1,
	class: "sbsong-empty"
}, Is = {
	__name: "SharedSongPage",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = /* @__PURE__ */ N(null);
		return xr(() => {
			t.value && (t.value.pause(), t.value.removeAttribute("src"), t.value.load());
		}), (n, r) => (V(), H(B, null, [
			U("header", Cs, [
				r[0] ||= U("span", { class: "sbsong-eyebrow" }, "SUNOBOOM · КАРТОЧКА ПЕСНИ", -1),
				U("h1", null, O(e.model.song?.title || "Карточка недоступна"), 1),
				U("p", null, O(e.model.song?.artist || ""), 1)
			]),
			e.model.song ? (V(), H("div", ws, [
				e.model.song.coverUrl ? (V(), H("img", {
					key: 0,
					class: "sbsong-public-art",
					style: {
						"object-fit": "cover",
						width: "100%",
						"max-width": "300px"
					},
					alt: "Обложка",
					src: e.model.song.coverUrl
				}, null, 8, Ts)) : (V(), H("div", Es, "♫")),
				U("p", Ds, [e.model.song.genre ? (V(), H("span", Os, O(e.model.song.genre), 1)) : G("", !0), e.model.song.album ? (V(), H("span", ks, O(e.model.song.album), 1)) : G("", !0)]),
				e.model.song.description ? (V(), H("p", As, O(e.model.song.description), 1)) : G("", !0),
				e.model.song.audioUrl ? (V(), H("audio", {
					key: 3,
					ref_key: "audio",
					ref: t,
					controls: "",
					preload: "metadata",
					src: e.model.song.audioUrl
				}, null, 8, js)) : G("", !0),
				e.model.song.listenUrl ? (V(), H("p", Ms, [U("a", {
					href: e.model.song.listenUrl,
					target: "_blank",
					rel: "noopener noreferrer"
				}, "Послушать песню на внешнем сайте ↗", 8, Ns)])) : G("", !0),
				!e.model.song.audioUrl && !e.model.song.listenUrl ? (V(), H("p", Ps, "В этой ссылке есть информация о песне, но нет аудиозаписи. Автор может отправить MP3 отдельно.")) : G("", !0)
			])) : (V(), H("p", Fs, "Ссылка повреждена или карточка не найдена.")),
			r[1] ||= U("button", {
				type: "button",
				class: "sbsong-main-btn",
				"data-sbsong-action": "shared-home"
			}, "Открыть SUNOBOOM", -1),
			r[2] ||= U("p", { class: "sbsong-public-notice" }, "Ссылка открывает выбранные автором сведения. Карточка не требует входа, поэтому её сможет посмотреть любой получатель ссылки.", -1)
		], 64));
	}
};
// src/vue/account/legacySharedSongBridge.js
function Ls({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SHARED_SONG, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sbsong-shared"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, Is, { model: n })
	});
}
// src/vue/ideas/IdeasPage.vue
var Rs = { class: "generator-panel" }, zs = { class: "generator-form" }, Bs = ["for"], Vs = [
	"id",
	"onUpdate:modelValue",
	"data-idea-generator"
], Hs = ["value"], Us = { class: "field generator-detail-field" }, Ws = { class: "generator-bar" }, Gs = {
	type: "button",
	class: "btn primary",
	"data-action": "generate-ideas"
}, Ks = ["innerHTML"], qs = {
	id: "generated-results",
	class: "section-title"
}, Js = {
	type: "button",
	class: "btn ghost small",
	"data-action": "generate-ideas"
}, Ys = ["innerHTML"], Xs = { class: "idea-grid" }, Zs = { class: "idea-badge" }, Qs = { class: "generator-story" }, $s = { class: "generator-hook" }, ec = {
	key: 0,
	class: "generator-detail"
}, tc = { class: "actions" }, nc = ["data-id"], rc = ["innerHTML"], ic = ["data-id"], ac = ["innerHTML"], oc = ["data-id"], sc = ["innerHTML"], cc = { class: "section-title" }, lc = { class: "filters" }, uc = ["data-filter"], dc = { class: "section-title" }, fc = { class: "idea-grid" }, pc = { class: "idea-badge" }, mc = { class: "actions" }, hc = ["data-id", "data-i"], gc = ["innerHTML"], _c = ["data-id", "data-i"], vc = ["innerHTML"], yc = {
	__name: "IdeasPage",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = /* @__PURE__ */ A({ ...e.initial.values });
		return (n, r) => (V(), H(B, null, [
			r[12] ||= U("header", { class: "heading" }, [U("h1", null, [W("Идеи песен "), U("span", { style: { color: "#fb7bbd" } }, "✦")]), U("p", null, "Создавай новые истории в генераторе или выбирай готовые идеи из каталога.")], -1),
			U("section", Rs, [
				r[5] ||= U("div", { class: "generator-panel-top" }, [U("div", null, [
					U("div", { class: "eyebrow" }, "SUNOBOOM · IDEA LAB"),
					U("h2", null, [W("Создай новую идею "), U("span", null, "✦")]),
					U("p", null, "Подбери жанр, тему, настроение и сюжетную подачу. Получи несколько свежих концепций с названием, историей и хуком припева.")
				]), U("span", { class: "generator-orb" }, "💡")], -1),
				U("div", zs, [(V(!0), H(B, null, z(e.initial.fields, (e) => (V(), H("div", {
					key: e.key,
					class: "field"
				}, [U("label", { for: e.id }, O(e.label), 9, Bs), I(U("select", {
					id: e.id,
					"onUpdate:modelValue": (n) => t[e.key] = n,
					"data-idea-generator": e.key
				}, [(V(!0), H(B, null, z(e.options, (e) => (V(), H("option", {
					key: e.value,
					value: e.value
				}, O(e.label), 9, Hs))), 128))], 8, Vs), [[Lo, t[e.key]]])]))), 128)), U("div", Us, [r[1] ||= U("label", { for: "gen-detail" }, "Своя деталь (необязательно)", -1), I(U("input", {
					id: "gen-detail",
					"onUpdate:modelValue": r[0] ||= (e) => t.detail = e,
					"data-idea-generator": "detail",
					maxlength: "220",
					placeholder: "Например: ночной Алматы, поезд, летний дождь"
				}, null, 512), [[q, t.detail]])])]),
				U("div", Ws, [
					U("button", Gs, [U("span", {
						style: { display: "contents" },
						"aria-hidden": "true",
						innerHTML: e.initial.icons.ideas
					}, null, 8, Ks), r[2] ||= W(" Сгенерировать идеи", -1)]),
					r[3] ||= U("button", {
						type: "button",
						class: "btn ghost",
						"data-action": "surprise-ideas"
					}, "🎲 Удиви меня", -1),
					r[4] ||= U("span", { class: "generator-note" }, "Работает офлайн · без внешнего ИИ", -1)
				])
			]),
			e.initial.generated.length ? (V(), H(B, { key: 0 }, [U("div", qs, [U("h2", null, "Твои новые идеи · " + O(e.initial.generated.length), 1), U("button", Js, [U("span", {
				style: { display: "contents" },
				"aria-hidden": "true",
				innerHTML: e.initial.icons.arrow
			}, null, 8, Ys), r[6] ||= W(" Ещё варианты", -1)])]), U("div", Xs, [(V(!0), H(B, null, z(e.initial.generated, (t) => (V(), H("article", {
				key: t.id,
				class: "idea generated-card"
			}, [
				U("div", Zs, O(t.badge), 1),
				U("h3", null, O(t.title), 1),
				U("p", null, O(t.pitch), 1),
				U("p", Qs, O(t.storyLine), 1),
				U("div", $s, [r[7] ||= U("span", null, "ХУК ПРИПЕВА", -1), U("strong", null, O(t.hook), 1)]),
				t.detail ? (V(), H("p", ec, "Твоя деталь: " + O(t.detail), 1)) : G("", !0),
				U("div", tc, [
					U("button", {
						type: "button",
						class: "btn primary small",
						"data-action": "generated-use",
						"data-id": t.id
					}, [U("span", {
						style: { display: "contents" },
						"aria-hidden": "true",
						innerHTML: e.initial.icons.studio
					}, null, 8, rc), r[8] ||= W(" В Suno Studio", -1)], 8, nc),
					U("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "generated-copy",
						"data-id": t.id
					}, [U("span", {
						style: { display: "contents" },
						"aria-hidden": "true",
						innerHTML: e.initial.icons.copy
					}, null, 8, ac), r[9] ||= W(" Копировать", -1)], 8, ic),
					U("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "generated-save",
						"data-id": t.id
					}, [U("span", {
						style: { display: "contents" },
						"aria-hidden": "true",
						innerHTML: e.initial.icons.heart
					}, null, 8, sc), W(" " + O(t.saved ? "Сохранено" : "Сохранить"), 1)], 8, oc)
				])
			]))), 128))])], 64)) : G("", !0),
			U("div", cc, [U("h2", null, "Библиотека готовых сюжетов · " + O(e.initial.catalog.length), 1)]),
			U("div", lc, [(V(!0), H(B, null, z(e.initial.families, (t) => (V(), H("button", {
				key: t,
				type: "button",
				class: D(["filter", { on: e.initial.family === t }]),
				"data-action": "idea-filter",
				"data-filter": t
			}, O(t), 11, uc))), 128))]),
			U("div", dc, [U("h2", null, "Идеи · " + O(e.initial.catalog.length), 1), r[10] ||= U("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "random-idea"
			}, "🎲 Случайная идея", -1)]),
			U("div", fc, [(V(!0), H(B, null, z(e.initial.catalog, (t) => (V(), H("div", {
				key: t.key,
				class: "idea"
			}, [
				U("div", pc, O(t.badge), 1),
				U("h3", null, O(t.title), 1),
				U("p", null, O(t.pitch), 1),
				U("div", mc, [U("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "idea-use",
					"data-id": t.genre,
					"data-i": t.index
				}, [U("span", {
					style: { display: "contents" },
					"aria-hidden": "true",
					innerHTML: e.initial.icons.studio
				}, null, 8, gc), r[11] ||= W(" В студию", -1)], 8, hc), U("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "idea-save",
					"data-id": t.genre,
					"data-i": t.index
				}, [U("span", {
					style: { display: "contents" },
					"aria-hidden": "true",
					innerHTML: e.initial.icons.heart
				}, null, 8, vc), W(" " + O(t.saved ? "Сохранено" : "Сохранить"), 1)], 8, _c)])
			]))), 128))])
		], 64));
	}
};
// src/vue/ideas/legacyIdeasPageBridge.js
function bc({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_IDEAS_PAGE, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-ideas-page"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, yc, { initial: n })
	});
}
// src/vue/account/AccountSummary.vue
var xc = { class: "account-avatar" }, Sc = { class: "stat" }, Cc = { class: "stat" }, wc = { class: "stat" }, Tc = {
	__name: "AccountSummary",
	props: {
		model: {
			type: Object,
			required: !0
		},
		kind: {
			type: String,
			required: !0
		}
	},
	setup(e) {
		return (t, n) => e.kind === "profile" ? (V(), H(B, { key: 0 }, [U("div", xc, O(e.model.avatar), 1), U("div", null, [
			U("h2", null, O(e.model.name), 1),
			n[0] ||= U("p", null, "Локальный профиль · SUNOBOOM 0.55", -1),
			n[1] ||= U("span", { class: "small-chip" }, "Данные хранятся в этом браузере", -1)
		])], 64)) : (V(), H(B, { key: 1 }, [
			U("div", Sc, [U("div", null, [U("strong", null, O(e.model.counts.projects), 1), n[2] ||= U("span", null, "моих проектов", -1)])]),
			U("div", Cc, [U("div", null, [U("strong", null, O(e.model.counts.favorites), 1), n[3] ||= U("span", null, "любимых жанров", -1)])]),
			U("div", wc, [U("div", null, [U("strong", null, O(e.model.counts.saved), 1), n[4] ||= U("span", null, "сохранённых идей и промптов", -1)])])
		], 64));
	}
}, Ec = {
	id: "sb-vue-account-profile",
	class: "account-head panel"
}, Dc = { class: "account-grid" }, Oc = { class: "two-col account-settings" }, kc = { class: "panel" }, Ac = { class: "field" }, jc = {
	type: "button",
	class: "btn primary",
	"data-action": "save-profile"
}, Mc = ["innerHTML"], Nc = { class: "panel" }, Pc = { class: "detail-actions" }, Fc = {
	type: "button",
	class: "btn ghost",
	"data-action": "export"
}, Ic = ["innerHTML"], Lc = {
	type: "button",
	class: "btn ghost",
	"data-action": "import"
}, Rc = ["innerHTML"], zc = {
	__name: "AccountHome",
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
		let t = e, n = /* @__PURE__ */ A({ name: t.initial.profileName }), r = /* @__PURE__ */ N(null), i = () => t.api.syncStats(r.value);
		return R(i), (t, a) => (V(), H(B, null, [
			a[10] ||= U("header", { class: "heading" }, [
				U("div", { class: "eyebrow" }, "ЛИЧНОЕ ПРОСТРАНСТВО"),
				U("h1", null, "Личный кабинет"),
				U("p", null, "Твои музыкальные проекты, избранные материалы и резервные копии — всё в одном месте.")
			], -1),
			U("div", Ec, [sa(Tc, {
				model: e.initial.summary,
				kind: "profile"
			}, null, 8, ["model"])]),
			U("div", {
				id: "sb-vue-account-stats",
				ref_key: "stats",
				ref: r,
				class: "account-stats",
				onScrollPassive: i
			}, [sa(Tc, {
				model: e.initial.summary,
				kind: "stats"
			}, null, 8, ["model"])], 544),
			U("div", Dc, [(V(!0), H(B, null, z(e.initial.tiles, (e) => (V(), H("button", ha({ key: e.key }, { ref_for: !0 }, e.attrs), [(V(!0), H(B, null, z(e.parts, (e, t) => (V(), H(B, { key: t }, [e.icon ? (V(), na(kr(e.tag), ha({
				key: 0,
				ref_for: !0
			}, e.attrs, { innerHTML: e.html }), null, 16, ["innerHTML"])) : (V(), na(kr(e.tag), ha({
				key: 1,
				ref_for: !0
			}, e.attrs), {
				default: Vn(() => [W(O(e.text), 1)]),
				_: 2
			}, 1040))], 64))), 128))], 16))), 128))]),
			U("div", Oc, [U("div", kc, [
				a[3] ||= U("h3", null, "👤 Настройки профиля", -1),
				a[4] ||= U("p", null, "Это отображаемое имя только для этого устройства, без регистрации и пароля.", -1),
				U("div", Ac, [a[1] ||= U("label", { for: "profile-name" }, "Имя в кабинете", -1), I(U("input", {
					id: "profile-name",
					"onUpdate:modelValue": a[0] ||= (e) => n.name = e,
					type: "text",
					maxlength: "60",
					autocomplete: "off",
					placeholder: "Как тебя называть?"
				}, null, 512), [[q, n.name]])]),
				U("button", jc, [U("span", {
					style: { display: "contents" },
					"aria-hidden": "true",
					innerHTML: e.initial.icons.check
				}, null, 8, Mc), a[2] ||= W(" Сохранить имя", -1)])
			]), U("div", Nc, [
				a[8] ||= U("h3", null, "💾 Резервная копия", -1),
				a[9] ||= U("p", null, "Сохраняй проекты и избранное в JSON-файл или восстанавливай данные из ранее созданной копии.", -1),
				U("div", Pc, [
					U("button", Fc, [U("span", {
						style: { display: "contents" },
						"aria-hidden": "true",
						innerHTML: e.initial.icons.download
					}, null, 8, Ic), a[5] ||= W(" Экспорт данных", -1)]),
					U("button", Lc, [U("span", {
						style: { display: "contents" },
						"aria-hidden": "true",
						innerHTML: e.initial.icons.plus
					}, null, 8, Rc), a[6] ||= W(" Импорт данных", -1)]),
					a[7] ||= U("input", {
						id: "import-file",
						type: "file",
						accept: ".json,application/json",
						style: { display: "none" }
					}, null, -1)
				])
			])]),
			a[11] ||= U("div", { class: "account-notice" }, "🔒 Этот кабинет пока не является защищённой учётной записью. Данные сохраняются локально в браузере и не синхронизируются между устройствами. Адрес сайта GitHub Pages остаётся публичным.", -1)
		], 64));
	}
};
// src/vue/account/account-home-model.js
function Bc(e) {
	let t = [...e.querySelectorAll(".account-grid > .account-tile")];
	if (!t.length) return null;
	let n = (e) => Object.fromEntries([...e.attributes].filter((e) => /^(class|title|role|type|style|viewBox|preserveAspectRatio|width|height|fill|stroke|xmlns)$/.test(e.name) || /^(data-|aria-|stroke-)/.test(e.name)).map((e) => [e.name, e.value])), r = [];
	for (let [e, i] of t.entries()) {
		let t = i.querySelector("strong");
		if (!t) return null;
		let a = [...i.children], o = a.indexOf(t);
		if (o < 0) return null;
		let s = [];
		for (let [e, t] of a.entries()) {
			let r = t.tagName.toLowerCase();
			if (![
				"svg",
				"span",
				"strong",
				"b",
				"em"
			].includes(r)) return null;
			let i = e < o && !t.classList.contains("tile-count");
			s.push({
				tag: r,
				attrs: n(t),
				icon: i,
				...i ? { html: t.innerHTML } : { text: t.textContent }
			});
		}
		r.push({
			key: e,
			attrs: {
				...n(i),
				type: "button"
			},
			parts: s
		});
	}
	return r;
}
// src/vue/account/legacyAccountHomeBridge.js
function Vc({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ACCOUNT_HOME, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-account-home"),
		readSnapshot: (e) => {
			let n = t.snapshot(), r = Bc(e);
			return n && r ? {
				...n,
				tiles: r
			} : null;
		},
		mount: (n, r) => e(n, zc, {
			initial: r,
			api: t
		})
	});
}
// src/vue/legacy/observeLegacyIslands.js
function Hc({ root: e, islands: t, subscribe: n, beforeSync: r, createObserver: i = (e) => new MutationObserver(e) }) {
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
// src/vue/account/legacyAccountSummaryBridge.js
function Uc({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ACCOUNT_SUMMARY, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Hc({
		root: n,
		islands: [["profile", "sb-vue-account-profile"], ["stats", "sb-vue-account-stats"]].map(([n, r]) => ({
			key: n,
			selectTarget: (e) => {
				let t = e.querySelector("#" + r);
				return t?.closest("#sb-vue-account-home") ? null : t;
			},
			readSnapshot: () => t.snapshot(),
			mount: (t, r) => e(t, Tc, {
				model: r,
				kind: n
			})
		}))
	});
}
// src/vue/account/EventActions.vue
var Wc = {
	type: "button",
	class: "btn primary",
	"data-action": "event-save"
}, Gc = {
	key: 0,
	type: "button",
	class: "btn ghost",
	"data-action": "event-cancel"
}, Kc = {
	__name: "EventActions",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (V(), H(B, null, [U("button", Wc, O(e.model.editing ? "Сохранить изменения" : "Сохранить событие"), 1), e.model.editing ? (V(), H("button", Gc, "Отменить")) : G("", !0)], 64));
	}
};
// src/vue/account/legacyEventActionsBridge.js
function qc({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_EVENT_ACTIONS, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-event-actions"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, Kc, { model: n })
	});
}
// src/vue/account/EventReminders.vue
var Jc = { class: "sb-reminder-picker" }, Yc = { class: "sb-reminder-choices" }, Xc = ["value"], Zc = { class: "sb-reminder-custom-label" }, Qc = ["hidden"], $c = {
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
		return (t, r) => (V(), H("fieldset", Jc, [
			r[7] ||= U("legend", null, "🔔 Когда напомнить?", -1),
			r[8] ||= U("p", { class: "sb-reminder-help" }, "Выбери один или несколько сроков. Убери все галочки, чтобы отключить уведомления.", -1),
			U("div", Yc, [(V(!0), H(B, null, z(e.initial.presets, (e) => (V(), H("label", {
				key: e.days,
				class: "sb-reminder-choice"
			}, [
				I(U("input", {
					"onUpdate:modelValue": r[0] ||= (e) => n.selected = e,
					type: "checkbox",
					name: "event-reminder-preset",
					value: e.days
				}, null, 8, Xc), [[Fo, n.selected]]),
				r[3] ||= W(),
				U("span", null, O(e.label), 1)
			]))), 128))]),
			U("label", Zc, [I(U("input", {
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
			], 8, Qc)
		]));
	}
};
// src/vue/account/legacyEventRemindersBridge.js
function el({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_EVENT_REMINDERS, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-event-reminders"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, $c, { initial: n })
	});
}
// src/vue/account/EventEditor.vue
var tl = { class: "field" }, nl = { class: "dash-event-fields" }, rl = { class: "field" }, il = { class: "field" }, al = { class: "field" }, ol = ["value"], sl = { class: "field" }, cl = {
	__name: "EventEditor",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = /* @__PURE__ */ A({ ...e.initial.values });
		return (n, r) => (V(), H(B, null, [
			U("h2", null, O(e.initial.editing ? "Редактирование события" : "Добавить событие"), 1),
			U("div", tl, [r[5] ||= U("label", { for: "event-title" }, "Название события", -1), I(U("input", {
				id: "event-title",
				"onUpdate:modelValue": r[0] ||= (e) => t.title = e,
				type: "text",
				maxlength: "120",
				placeholder: "Например, релиз нового EP"
			}, null, 512), [[q, t.title]])]),
			U("div", nl, [
				U("div", rl, [r[6] ||= U("label", { for: "event-date" }, "Дата", -1), I(U("input", {
					id: "event-date",
					"onUpdate:modelValue": r[1] ||= (e) => t.date = e,
					type: "date"
				}, null, 512), [[q, t.date]])]),
				U("div", il, [r[7] ||= U("label", { for: "event-time" }, "Время (необязательно)", -1), I(U("input", {
					id: "event-time",
					"onUpdate:modelValue": r[2] ||= (e) => t.time = e,
					type: "time"
				}, null, 512), [[q, t.time]])]),
				U("div", al, [r[8] ||= U("label", { for: "event-type" }, "Тип события", -1), I(U("select", {
					id: "event-type",
					"onUpdate:modelValue": r[3] ||= (e) => t.type = e
				}, [(V(!0), H(B, null, z(e.initial.types, (e) => (V(), H("option", {
					key: e.id,
					value: e.id
				}, O(e.label), 9, ol))), 128))], 512), [[Lo, t.type]])])
			]),
			U("div", sl, [r[9] ||= U("label", { for: "event-notes" }, "Описание (необязательно)", -1), I(U("textarea", {
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
function ll({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_EVENT_EDITOR, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-event-fields"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, cl, { initial: n })
	});
}
// src/vue/account/EventCollection.vue
var ul = { class: "section-title" }, dl = {
	key: 0,
	class: "dash-event-list"
}, fl = { class: "dash-event-date" }, pl = { class: "dash-event-main" }, ml = { class: "dash-entry-meta" }, hl = { key: 0 }, gl = { class: "sb-event-reminder-summary" }, _l = { class: "dash-event-controls" }, vl = ["data-id"], yl = ["data-id"], bl = {
	key: 1,
	class: "dash-simple-empty"
}, xl = {
	__name: "EventCollection",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (V(!0), H(B, null, z(e.model.groups, (e) => (V(), H(B, { key: e.key }, [U("div", ul, [U("h2", null, O(e.title) + " (" + O(e.items.length) + ")", 1)]), e.items.length ? (V(), H("div", dl, [(V(!0), H(B, null, z(e.items, (e) => (V(), H("article", {
			key: e.id,
			class: "dash-event-row"
		}, [
			U("div", fl, [U("strong", null, O(e.date), 1), U("span", null, O(e.time), 1)]),
			U("div", pl, [
				U("div", ml, O(e.type), 1),
				U("h3", null, O(e.title), 1),
				e.notes ? (V(), H("p", hl, O(e.notes), 1)) : G("", !0),
				U("div", gl, O(e.reminder), 1)
			]),
			U("div", _l, [U("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "event-edit",
				"data-id": e.id
			}, "Изменить", 8, vl), U("button", {
				type: "button",
				class: "btn danger small",
				"data-action": "event-delete",
				"data-id": e.id
			}, "Удалить", 8, yl)])
		]))), 128))])) : (V(), H("div", bl, O(e.empty), 1))], 64))), 128));
	}
};
// src/vue/account/legacyEventCollectionBridge.js
function Sl({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_EVENT_LIST, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-events-list"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, xl, { model: n })
	});
}
// src/vue/account/ProjectDetail.vue
var Cl = { class: "field" }, wl = { class: "detail-actions" }, Tl = ["data-id"], El = ["innerHTML"], Dl = ["data-id"], Ol = ["innerHTML"], kl = ["data-id"], Al = ["innerHTML"], jl = {
	key: 1,
	class: "empty"
}, Ml = {
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
			U("div", Cl, [r[1] ||= U("label", { for: "project-notes" }, "Заметки, треклист, идеи и задачи", -1), I(U("textarea", {
				id: "project-notes",
				"onUpdate:modelValue": r[0] ||= (e) => t.value = e,
				rows: "12"
			}, null, 512), [[q, t.value]])]),
			U("div", wl, [
				U("button", {
					type: "button",
					class: "btn primary",
					"data-action": "save-project",
					"data-id": e.initial.project.id
				}, [U("span", {
					style: { display: "contents" },
					"aria-hidden": "true",
					innerHTML: e.initial.icons.check
				}, null, 8, El), r[2] ||= W(" Сохранить заметки", -1)], 8, Tl),
				U("button", {
					type: "button",
					class: "btn ghost",
					"data-action": "use-genre",
					"data-id": e.initial.project.genre
				}, [U("span", {
					style: { display: "contents" },
					"aria-hidden": "true",
					innerHTML: e.initial.icons.studio
				}, null, 8, Ol), r[3] ||= W(" В студию", -1)], 8, Dl),
				U("button", {
					type: "button",
					class: "btn danger",
					"data-action": "delete-project",
					"data-id": e.initial.project.id
				}, [U("span", {
					style: { display: "contents" },
					"aria-hidden": "true",
					innerHTML: e.initial.icons.trash
				}, null, 8, Al), r[4] ||= W(" Удалить", -1)], 8, kl)
			])
		], 64)) : (V(), H("div", jl, [...r[6] ||= [U("strong", null, "Начни со своего проекта", -1), W("Здесь появятся заметки и рабочая карточка выбранного проекта.", -1)]]));
	}
};
// src/vue/account/legacyProjectDetailBridge.js
function Nl({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PROJECT_DETAIL, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-project-detail"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, Ml, { initial: n })
	});
}
// src/vue/account/ProjectCreator.vue
var Pl = { class: "field" }, Fl = { class: "field" }, Il = ["value"], Ll = {
	type: "button",
	class: "btn primary",
	"data-action": "create-project"
}, Rl = ["innerHTML"], zl = {
	__name: "ProjectCreator",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = /* @__PURE__ */ A({ ...e.initial.values });
		return (n, r) => (V(), H(B, null, [
			r[5] ||= U("h3", null, "Новый проект", -1),
			U("div", Pl, [r[2] ||= U("label", { for: "p-title" }, "Название", -1), I(U("input", {
				id: "p-title",
				"onUpdate:modelValue": r[0] ||= (e) => t.title = e,
				placeholder: "Например, дебютный EP"
			}, null, 512), [[q, t.title]])]),
			U("div", Fl, [r[3] ||= U("label", { for: "p-genre" }, "Основной жанр", -1), I(U("select", {
				id: "p-genre",
				"onUpdate:modelValue": r[1] ||= (e) => t.genre = e
			}, [(V(!0), H(B, null, z(e.initial.genres, (e) => (V(), H("option", {
				key: e.id,
				value: e.id
			}, O(e.name), 9, Il))), 128))], 512), [[Lo, t.genre]])]),
			U("button", Ll, [U("span", {
				style: { display: "contents" },
				"aria-hidden": "true",
				innerHTML: e.initial.plusIcon
			}, null, 8, Rl), r[4] ||= W(" Создать проект", -1)])
		], 64));
	}
};
// src/vue/account/legacyProjectCreatorBridge.js
function Bl({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PROJECT_CREATOR, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-project-creator"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, zl, { initial: n })
	});
}
// src/vue/account/ProjectCollection.vue
var Vl = { class: "section-title" }, Hl = ["data-id", "aria-pressed"], Ul = {
	key: 1,
	class: "empty"
}, Wl = ["innerHTML"], Gl = {
	__name: "ProjectCollection",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (V(), H(B, null, [U("div", Vl, [U("h2", null, "Мои проекты (" + O(e.model.items.length) + ")", 1)]), e.model.items.length ? (V(!0), H(B, { key: 0 }, z(e.model.items, (t) => (V(), H("div", {
			key: t.id,
			class: D(["project-card", { selected: t.id === e.model.selectedId }]),
			"data-action": "select-project",
			"data-id": t.id,
			role: "button",
			tabindex: "0",
			"aria-pressed": t.id === e.model.selectedId
		}, [U("h3", null, O(t.title), 1), U("p", null, O(t.genre) + " · " + O(t.date), 1)], 10, Hl))), 128)) : (V(), H("div", Ul, [
			U("span", {
				style: { display: "contents" },
				"aria-hidden": "true",
				innerHTML: e.model.musicIcon
			}, null, 8, Wl),
			n[0] ||= U("strong", null, "Проектов пока нет", -1),
			n[1] ||= W("Создай первый проект выше.", -1)
		]))], 64));
	}
};
// src/vue/account/legacyProjectCollectionBridge.js
function Kl({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PROJECT_LIST, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-projects-list"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, Gl, { model: n })
	});
}
// src/vue/legacy/createFeatureMounter.js
function ql({ createApp: e, host: t, pinia: n, router: r, resolveTarget: i, warn: a = (...e) => console.warn(...e) }) {
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
var Jl = typeof window < "u", Yl, Xl = (e) => Yl = e, Zl = Symbol();
function Ql(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var $l;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})($l ||= {});
var eu = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function tu(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function nu(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		su(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function ru(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function iu(e) {
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
var au = typeof navigator == "object" ? navigator : { userAgent: "" }, ou = /Macintosh/.test(au.userAgent) && /AppleWebKit/.test(au.userAgent) && !/Safari/.test(au.userAgent), su = Jl ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !ou ? cu : "msSaveOrOpenBlob" in au ? lu : uu : () => {};
function cu(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? iu(r) : ru(r.href) ? nu(e, t, n) : (r.target = "_blank", iu(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		iu(r);
	}, 0));
}
function lu(e, t = "download", n) {
	if (typeof e == "string") {
		if (ru(e)) nu(e, t, n);
		else {
			let t = document.createElement("a");
			t.href = e, t.target = "_blank", setTimeout(function() {
				iu(t);
			});
		}
	} else navigator.msSaveOrOpenBlob(tu(e, n), t);
}
function uu(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return nu(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(eu.HTMLElement)) || "safari" in eu, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || ou) && typeof FileReader < "u") {
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
var { assign: du } = Object;
function fu() {
	let e = je(!0), t = e.run(() => /* @__PURE__ */ N({})), n = [], r = [], i = Zt({
		install(e) {
			Xl(i), i._a = e, e.provide(Zl, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
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
var pu = () => {};
function mu(e, t, n, r = pu) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && Me() && Ne(i), i;
}
function hu(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var gu = (e) => e(), _u = Symbol(), vu = Symbol();
function yu(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!t.hasOwnProperty(n)) continue;
		let r = t[n], i = e[n];
		e[n] = Ql(i) && Ql(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ M(r) && !/* @__PURE__ */ qt(r) ? yu(i, r) : r;
	}
	return e;
}
var bu = Symbol();
function xu(e) {
	return !Ql(e) || !Object.prototype.hasOwnProperty.call(e, bu);
}
var { assign: Su } = Object;
function Cu(e) {
	return !!(/* @__PURE__ */ M(e) && e.effect);
}
function wu(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || 
		/* istanbul ignore if */
		(n.state.value[e] = i ? i() : {}), Su(/* @__PURE__ */ an(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = Zt(K(() => {
			Xl(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return c = Tu(e, l, t, n, r, !0), c;
}
function Tu(e, t, n = {}, r, i, a) {
	let o, s = Su({ actions: {} }, n), c = { deep: !0 }, l, u, d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p, m = r.state.value[e];
	!a && !m && 
	/* istanbul ignore if */
	(r.state.value[e] = {});
	let h;
	function g(t) {
		let n;
		l = u = !1, typeof t == "function" ? (t(r.state.value[e]), n = {
			type: $l.patchFunction,
			storeId: e,
			events: p
		}) : (yu(r.state.value[e], t), n = {
			type: $l.patchObject,
			payload: t,
			storeId: e,
			events: p
		});
		let i = h = Symbol();
		Dn().then(() => {
			h === i && (l = !0);
		}), u = !0, hu(d, n, r.state.value[e]);
	}
	let _ = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			Su(e, t);
		});
	} : pu;
	function v() {
		o.stop(), d.clear(), f.clear(), r._s.delete(e);
	}
	let y = (t, n = "") => {
		if (_u in t) return t[vu] = n, t;
		let i = function() {
			Xl(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			hu(f, {
				args: n,
				name: i[vu],
				store: b,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : b, n);
			} catch (e) {
				throw hu(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (hu(a, e), e)).catch((e) => (hu(o, e), Promise.reject(e))) : (hu(a, l), l);
		};
		return i[_u] = !0, i[vu] = n, i;
	}, b = /* @__PURE__ */ A({
		_p: r,
		$id: e,
		$onAction: mu.bind(null, f),
		$patch: g,
		$reset: _,
		$subscribe(t, n = {}) {
			let i = mu(d, t, n.detached, () => a()), a = o.run(() => L(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? u : l) && t({
					storeId: e,
					type: $l.direct,
					events: p
				}, r);
			}, Su({}, c, n)));
			return i;
		},
		$dispose: v
	});
	r._s.set(e, b);
	let x = (r._a && r._a.runWithContext || gu)(() => r._e.run(() => (o = je()).run(() => t({ action: y }))));
	for (let t in x) {
		let n = x[t];
		/* @__PURE__ */ M(n) && !Cu(n) || /* @__PURE__ */ qt(n) ? a || (m && xu(n) && (/* @__PURE__ */ M(n) ? n.value = m[t] : yu(n, m[t])), r.state.value[e][t] = n) : typeof n == "function" && (x[t] = y(n, t), s.actions[t] = n);
	}
	return Su(b, x), Su(/* @__PURE__ */ j(b), x), Object.defineProperty(b, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			g((t) => {
				Su(t, e);
			});
		}
	}), r._p.forEach((e) => {
		Su(b, o.run(() => e({
			store: b,
			app: r._a,
			pinia: r,
			options: s
		})));
	}), m && a && n.hydrate && n.hydrate(b.$state, m), l = !0, u = !0, b;
}
function Eu(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function a(n, a) {
		let o = Gn();
		return n ||= o ? Wn(Zl, null) : null, n && Xl(n), n = Yl, n._s.has(e) || (i ? Tu(e, t, r, n) : wu(e, r, n)), n._s.get(e);
	}
	return a.$id = e, a;
}
// src/vue/navigation/nav-model.js
var Du = /* @__PURE__ */ new Set([
	"projects",
	"saved",
	"myideas",
	"myprompts",
	"events",
	"tracks",
	"artists"
]);
function Ou(e) {
	return e === "detail" ? "catalog" : Du.has(e) ? "account" : e;
}
function ku(e) {
	let t = Ou(e?.active), n = /* @__PURE__ */ new Set(), r = !1, i = [];
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
// node_modules/vue-router/dist/devtools-C3Hva4Qk.mjs
var Au = typeof document < "u";
function ju(e) {
	return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Mu(e) {
	return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && ju(e.default);
}
var X = Object.assign;
function Nu(e, t) {
	let n = {};
	for (let r in t) {
		let i = t[r];
		n[r] = Fu(i) ? i.map(e) : e(i);
	}
	return n;
}
var Pu = () => {}, Fu = Array.isArray;
function Iu(e, t) {
	let n = {};
	for (let r in e) n[r] = r in t ? t[r] : e[r];
	return n;
}
var Lu = /#/g, Ru = /&/g, zu = /\//g, Bu = /=/g, Vu = /\?/g, Hu = /\+/g, Uu = /%5B/g, Wu = /%5D/g, Gu = /%5E/g, Ku = /%60/g, qu = /%7B/g, Ju = /%7C/g, Yu = /%7D/g, Xu = /%20/g;
function Zu(e) {
	return e == null ? "" : encodeURI("" + e).replace(Ju, "|").replace(Uu, "[").replace(Wu, "]");
}
function Qu(e) {
	return Zu(e).replace(qu, "{").replace(Yu, "}").replace(Gu, "^");
}
function $u(e) {
	return Zu(e).replace(Hu, "%2B").replace(Xu, "+").replace(Lu, "%23").replace(Ru, "%26").replace(Ku, "`").replace(qu, "{").replace(Yu, "}").replace(Gu, "^");
}
function ed(e) {
	return $u(e).replace(Bu, "%3D");
}
function td(e) {
	return Zu(e).replace(Lu, "%23").replace(Vu, "%3F");
}
function nd(e) {
	return td(e).replace(zu, "%2F");
}
function rd(e) {
	if (e == null) return null;
	try {
		return decodeURIComponent("" + e);
	} catch {}
	return "" + e;
}
var id = /\/$/, ad = (e) => e.replace(id, "");
function od(e, t, n = "/") {
	let r, i = {}, a = "", o = "", s = t.indexOf("#"), c = t.indexOf("?");
	return c = s >= 0 && c > s ? -1 : c, c >= 0 && (r = t.slice(0, c), a = t.slice(c, s > 0 ? s : t.length), i = e(a.slice(1))), s >= 0 && (r ||= t.slice(0, s), o = t.slice(s, t.length)), r = pd(r ?? t, n), {
		fullPath: r + a + o,
		path: r,
		query: i,
		hash: rd(o)
	};
}
function sd(e, t) {
	let n = t.query ? e(t.query) : "";
	return t.path + (n && "?") + n + (t.hash || "");
}
function cd(e, t, n) {
	let r = t.matched.length - 1, i = n.matched.length - 1;
	return r > -1 && r === i && ld(t.matched[r], n.matched[i]) && ud(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function ld(e, t) {
	return (e.aliasOf || e) === (t.aliasOf || t);
}
function ud(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (var n in e) if (!dd(e[n], t[n])) return !1;
	return !0;
}
function dd(e, t) {
	return Fu(e) ? fd(e, t) : Fu(t) ? fd(t, e) : e?.valueOf() === t?.valueOf();
}
function fd(e, t) {
	return Fu(t) ? e.length === t.length && e.every((e, n) => e === t[n]) : e.length === 1 && e[0] === t;
}
function pd(e, t) {
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
var md = {
	path: "/",
	name: void 0,
	params: {},
	query: {},
	hash: "",
	fullPath: "/",
	matched: [],
	meta: {},
	redirectedFrom: void 0
}, hd = /* @__PURE__ */ function(e) {
	return e.pop = "pop", e.push = "push", e;
}({}), gd = /* @__PURE__ */ function(e) {
	return e.back = "back", e.forward = "forward", e.unknown = "", e;
}({});
function _d(e) {
	if (!e) {
		if (Au) {
			let t = document.querySelector("base");
			e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
		} else e = "/";
	}
	return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), ad(e);
}
var vd = /^[^#]+#/;
function yd(e, t) {
	return e.replace(vd, "#") + t;
}
function bd(e, t) {
	let n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
	return {
		behavior: t.behavior,
		left: r.left - n.left - (t.left || 0),
		top: r.top - n.top - (t.top || 0)
	};
}
var xd = () => ({
	left: window.scrollX,
	top: window.scrollY
});
function Sd(e) {
	let t;
	if ("el" in e) {
		let n = e.el, r = typeof n == "string" && n.startsWith("#"), i = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
		if (!i) return;
		t = bd(i, e);
	} else t = e;
	"scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left == null ? window.scrollX : t.left, t.top == null ? window.scrollY : t.top);
}
function Cd(e, t) {
	return (history.state ? history.state.position - t : -1) + e;
}
var wd = /* @__PURE__ */ new Map();
function Td(e, t) {
	wd.set(e, t);
}
function Ed(e) {
	let t = wd.get(e);
	return wd.delete(e), t;
}
function Dd(e) {
	return typeof e == "string" || e && typeof e == "object";
}
function Od(e) {
	return typeof e == "string" || typeof e == "symbol";
}
var Z = /* @__PURE__ */ function(e) {
	return e[e.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", e[e.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", e[e.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", e[e.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", e[e.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", e;
}({}), kd = Symbol("");
Z.MATCHER_NOT_FOUND, Z.NAVIGATION_GUARD_REDIRECT, Z.NAVIGATION_ABORTED, Z.NAVIGATION_CANCELLED, Z.NAVIGATION_DUPLICATED;
function Ad(e, t) {
	return X(/* @__PURE__ */ Error(), {
		type: e,
		[kd]: !0
	}, t);
}
function jd(e, t) {
	return e instanceof Error && kd in e && (t == null || !!(e.type & t));
}
function Md(e) {
	let t = {};
	if (e === "" || e === "?") return t;
	let n = (e[0] === "?" ? e.slice(1) : e).split("&");
	for (let e = 0; e < n.length; ++e) {
		let r = n[e].replace(Hu, " "), i = r.indexOf("="), a = rd(i < 0 ? r : r.slice(0, i)), o = i < 0 ? null : rd(r.slice(i + 1));
		if (a in t) {
			let e = t[a];
			Fu(e) || (e = t[a] = [e]), e.push(o);
		} else t[a] = o;
	}
	return t;
}
function Nd(e) {
	let t = "";
	for (let n in e) {
		let r = e[n];
		n = ed(n), r == null ? r !== void 0 && (t += (t.length ? "&" : "") + n) : (Fu(r) ? r.map((e) => e && $u(e)) : [r && $u(r)]).forEach((e) => {
			e !== void 0 && (t += (t.length ? "&" : "") + n, e != null && (t += "=" + e));
		});
	}
	return t;
}
function Pd(e) {
	let t = {};
	for (let n in e) {
		let r = e[n];
		r !== void 0 && (t[n] = Fu(r) ? r.map((e) => e == null ? null : "" + e) : r == null ? r : "" + r);
	}
	return t;
}
var Fd = Symbol(""), Id = Symbol(""), Ld = Symbol(""), Rd = Symbol(""), zd = Symbol("");
function Bd() {
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
function Vd(e, t, n, r, i, a = (e) => e()) {
	let o = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
	return () => new Promise((s, c) => {
		let l = (e) => {
			e === !1 ? c(Ad(Z.NAVIGATION_ABORTED, {
				from: n,
				to: t
			})) : e instanceof Error ? c(e) : Dd(e) ? c(Ad(Z.NAVIGATION_GUARD_REDIRECT, {
				from: t,
				to: e
			})) : (o && r.enterCallbacks[i] === o && typeof e == "function" && o.push(e), s());
		}, u = a(() => e.call(r && r.instances[i], t, n, l)), d = Promise.resolve(u);
		e.length < 3 && (d = d.then(l)), d.catch((e) => c(e));
	});
}
function Hd(e, t, n, r, i = (e) => e()) {
	let a = [];
	for (let o of e) for (let e in o.components) {
		let s = o.components[e];
		if (t === "beforeRouteEnter" || o.instances[e]) {
			if (ju(s)) {
				let c = (s.__vccOpts || s)[t];
				c && a.push(Vd(c, n, r, o, e, i));
			} else {
				let c = s();
				a.push(() => c.then((a) => {
					if (!a) throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);
					let s = Mu(a) ? a.default : a;
					o.mods[e] = a, o.components[e] = s;
					let c = (s.__vccOpts || s)[t];
					return c && Vd(c, n, r, o, e, i)();
				}));
			}
		}
	}
	return a;
}
function Ud(e, t) {
	let n = [], r = [], i = [], a = Math.max(t.matched.length, e.matched.length);
	for (let o = 0; o < a; o++) {
		let a = t.matched[o];
		a && (e.matched.find((e) => ld(e, a)) ? r.push(a) : n.push(a));
		let s = e.matched[o];
		s && (t.matched.find((e) => ld(e, s)) || i.push(s));
	}
	return [
		n,
		r,
		i
	];
}
// node_modules/vue-router/dist/vue-router.mjs
function Wd(e = "") {
	let t = [], n = [["", {}]], r = 0;
	e = _d(e);
	function i(e, t = {}) {
		r++, r !== n.length && n.splice(r), n.push([e, t]);
	}
	function a(e, n, { direction: r, delta: i }) {
		let a = {
			direction: r,
			delta: i,
			type: hd.pop
		};
		for (let r of t) r(e, n, a);
	}
	let o = {
		location: "",
		state: {},
		base: e,
		createHref: yd.bind(null, e),
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
			let i = this.location, o = e < 0 ? gd.back : gd.forward;
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
var Gd = /* @__PURE__ */ function(e) {
	return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.Group = 2] = "Group", e;
}({}), Kd = /* @__PURE__ */ function(e) {
	return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.ParamRegExp = 2] = "ParamRegExp", e[e.ParamRegExpEnd = 3] = "ParamRegExpEnd", e[e.EscapeNext = 4] = "EscapeNext", e;
}(Kd || {}), qd = {
	type: Gd.Static,
	value: ""
}, Jd = /[a-zA-Z0-9_]/;
function Yd(e) {
	if (!e) return [[]];
	if (e === "/") return [[qd]];
	if (!e.startsWith("/")) throw Error(`Invalid path "${e}"`);
	function t(e) {
		throw Error(`ERR (${n})/"${l}": ${e}`);
	}
	let n = Kd.Static, r = n, i = [], a;
	function o() {
		a && i.push(a), a = [];
	}
	let s = 0, c, l = "", u = "";
	function d() {
		l &&= (n === Kd.Static ? a.push({
			type: Gd.Static,
			value: l
		}) : n === Kd.Param || n === Kd.ParamRegExp || n === Kd.ParamRegExpEnd ? (a.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`), a.push({
			type: Gd.Param,
			value: l,
			regexp: u,
			repeatable: c === "*" || c === "+",
			optional: c === "*" || c === "?"
		})) : t("Invalid state to consume buffer"), "");
	}
	function f() {
		l += c;
	}
	for (; s < e.length;) if (c = e[s++], c === "\\" && n !== Kd.ParamRegExp) r = n, n = Kd.EscapeNext;
	else switch (n) {
		case Kd.Static:
			c === "/" ? (l && d(), o()) : c === ":" ? (d(), n = Kd.Param) : f();
			break;
		case Kd.EscapeNext:
			f(), n = r;
			break;
		case Kd.Param:
			c === "(" ? n = Kd.ParamRegExp : Jd.test(c) ? f() : (d(), n = Kd.Static, c !== "*" && c !== "?" && c !== "+" && s--);
			break;
		case Kd.ParamRegExp:
			c === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + c : n = Kd.ParamRegExpEnd : u += c;
			break;
		case Kd.ParamRegExpEnd:
			d(), n = Kd.Static, c !== "*" && c !== "?" && c !== "+" && s--, u = "";
			break;
		default: t("Unknown state");
	}
	return n === Kd.ParamRegExp && t(`Unfinished custom RegExp for param "${l}"`), d(), o(), i;
}
var Xd = "[^/]+?", Zd = {
	sensitive: !1,
	strict: !1,
	start: !0,
	end: !0
}, Qd = /* @__PURE__ */ function(e) {
	return e[e._multiplier = 10] = "_multiplier", e[e.Root = 90] = "Root", e[e.Segment = 40] = "Segment", e[e.SubSegment = 30] = "SubSegment", e[e.Static = 40] = "Static", e[e.Dynamic = 20] = "Dynamic", e[e.BonusCustomRegExp = 10] = "BonusCustomRegExp", e[e.BonusWildcard = -50] = "BonusWildcard", e[e.BonusRepeatable = -20] = "BonusRepeatable", e[e.BonusOptional = -8] = "BonusOptional", e[e.BonusStrict = .7000000000000001] = "BonusStrict", e[e.BonusCaseSensitive = .25] = "BonusCaseSensitive", e;
}(Qd || {}), $d = /[.+*?^${}()[\]/\\|]/g;
function ef(e, t) {
	let n = X({}, Zd, t), r = [], i = n.start ? "^" : "", a = [], o = e.some((e) => e.some((e) => e.type === Gd.Param && /\\[1-9k]/.test(e.regexp || "")));
	for (let t of e) {
		let e = t.length ? [] : [Qd.Root];
		n.strict && !t.length && (i += "/");
		for (let r = 0; r < t.length; r++) {
			let s = t[r], c = Qd.Segment + (n.sensitive ? Qd.BonusCaseSensitive : 0);
			if (s.type === Gd.Static) r || (i += "/"), i += s.value.replace($d, "\\$&"), c += Qd.Static;
			else if (s.type === Gd.Param) {
				let { value: e, repeatable: n, optional: l, regexp: u } = s;
				a.push({
					name: e,
					repeatable: n,
					optional: l
				});
				let d = u || Xd;
				if (d !== Xd) {
					c += Qd.BonusCustomRegExp;
					try {
						`${d}`;
					} catch (t) {
						throw Error(`Invalid custom RegExp for param "${e}" (${d}): ` + t.message);
					}
				}
				let f = n ? `((?:${d})(?:/(?:${d}))*)` : `(${d})`, p = t[r + 1], m = t[r + 2];
				o || u || n || !m || m.type !== Gd.Param || m.regexp || p.type !== Gd.Static || (f = `([^/](?:(?!${p.value.replace($d, "\\$&")})[^/])*)`), r || (f = l && t.length < 2 ? `(?:/${f})` : "/" + f), l && (f += "?"), i += f, c += Qd.Dynamic, l && (c += Qd.BonusOptional), n && (c += Qd.BonusRepeatable), d === ".*" && (c += Qd.BonusWildcard);
			}
			e.push(c);
		}
		r.push(e);
	}
	if (n.strict && n.end) {
		let e = r.length - 1;
		r[e][r[e].length - 1] += Qd.BonusStrict;
	}
	n.strict || (i += "/?"), n.end ? i += "$" : n.strict && !i.endsWith("/") && (i += "(?:/|$)");
	let s = new RegExp(i, n.sensitive ? "" : "i");
	function c(e) {
		let t = e.match(s), n = {};
		if (!t) return null;
		for (let e = 1; e < t.length; e++) {
			let r = t[e] || "", i = a[e - 1];
			n[i.name] = r && i.repeatable ? r.split("/") : r;
		}
		return n;
	}
	function l(t) {
		let n = "", r = !1;
		for (let i of e) {
			r && n.endsWith("/") || (n += "/"), r = !1;
			for (let e of i) if (e.type === Gd.Static) n += e.value;
			else if (e.type === Gd.Param) {
				let { value: a, repeatable: o, optional: s } = e, c = a in t ? t[a] : "";
				if (Fu(c) && !o) throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);
				let l = Fu(c) ? c.join("/") : c;
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
		re: s,
		score: r,
		keys: a,
		parse: c,
		stringify: l
	};
}
function tf(e, t) {
	let n = 0;
	for (; n < e.length && n < t.length;) {
		let r = t[n] - e[n];
		if (r) return r;
		n++;
	}
	return e.length < t.length ? e.length === 1 && e[0] === Qd.Static + Qd.Segment ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === Qd.Static + Qd.Segment ? 1 : -1 : 0;
}
function nf(e, t) {
	let n = 0, r = e.score, i = t.score;
	for (; n < r.length && n < i.length;) {
		let e = tf(r[n], i[n]);
		if (e) return e;
		n++;
	}
	if (Math.abs(i.length - r.length) === 1) {
		if (rf(r)) return 1;
		if (rf(i)) return -1;
	}
	return i.length - r.length;
}
function rf(e) {
	let t = e[e.length - 1];
	return e.length > 0 && t[t.length - 1] < 0;
}
var af = {
	strict: !1,
	end: !0,
	sensitive: !1
};
function of(e, t, n) {
	let r = X(ef(Yd(e.path), n), {
		record: e,
		parent: t,
		children: [],
		alias: []
	});
	return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function sf(e, t) {
	let n = [], r = /* @__PURE__ */ new Map();
	t = Iu(af, t);
	function i(e) {
		return r.get(e);
	}
	function a(e, n, r) {
		let i = !r, s = lf(e);
		s.aliasOf = r && r.record;
		let l = Iu(t, e), u = [s];
		if ("alias" in e) {
			let t = typeof e.alias == "string" ? [e.alias] : e.alias;
			for (let e of t) u.push(lf(X({}, s, {
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
			if (d = of(t, n, l), r ? r.alias.push(d) : (f ||= d, f !== d && f.alias.push(d), i && e.name && !df(d) && o(e.name)), hf(d) && c(d), s.children) {
				let e = s.children;
				for (let t = 0; t < e.length; t++) a(e[t], d, r && r.children[t]);
			}
			r ||= d;
		}
		return f ? () => {
			o(f);
		} : Pu;
	}
	function o(e) {
		if (Od(e)) {
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
		let t = pf(e, n);
		n.splice(t, 0, e), e.record.name && !df(e) && r.set(e.record.name, e);
	}
	function l(e, t) {
		let i, a = {}, o, s;
		if ("name" in e && e.name) {
			if (i = r.get(e.name), !i) throw Ad(Z.MATCHER_NOT_FOUND, { location: e });
			s = i.record.name, a = X(cf(t.params, i.keys.filter((e) => !e.optional).concat(i.parent ? i.parent.keys.filter((e) => e.optional) : []).map((e) => e.name)), e.params && cf(e.params, i.keys.map((e) => e.name))), o = i.stringify(a);
		} else if (e.path != null) o = e.path, i = n.find((e) => e.re.test(o)), i && (a = i.parse(o), s = i.record.name);
		else {
			if (i = t.name ? r.get(t.name) : n.find((e) => e.re.test(t.path)), !i) throw Ad(Z.MATCHER_NOT_FOUND, {
				location: e,
				currentLocation: t
			});
			s = i.record.name, a = X({}, t.params, e.params), o = i.stringify(a);
		}
		let c = [], l = i;
		for (; l;) c.unshift(l.record), l = l.parent;
		return {
			name: s,
			path: o,
			params: a,
			matched: c,
			meta: ff(c)
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
function cf(e, t) {
	let n = {};
	for (let r of t) r in e && (n[r] = e[r]);
	return n;
}
function lf(e) {
	let t = {
		path: e.path,
		redirect: e.redirect,
		name: e.name,
		meta: e.meta || {},
		aliasOf: e.aliasOf,
		beforeEnter: e.beforeEnter,
		props: uf(e),
		children: e.children || [],
		instances: {},
		leaveGuards: /* @__PURE__ */ new Set(),
		updateGuards: /* @__PURE__ */ new Set(),
		enterCallbacks: {},
		components: "components" in e ? e.components || null : e.component && { default: e.component }
	};
	return Object.defineProperty(t, "mods", { value: {} }), t;
}
function uf(e) {
	let t = {}, n = e.props || !1;
	if ("component" in e) t.default = n;
	else for (let r in e.components) t[r] = typeof n == "object" ? n[r] : n;
	return t;
}
function df(e) {
	for (; e;) {
		if (e.record.aliasOf) return !0;
		e = e.parent;
	}
	return !1;
}
function ff(e) {
	return e.reduce((e, t) => X(e, t.meta), {});
}
function pf(e, t) {
	let n = 0, r = t.length;
	for (; n !== r;) {
		let i = n + r >> 1;
		nf(e, t[i]) < 0 ? r = i : n = i + 1;
	}
	let i = mf(e);
	return i && (r = t.lastIndexOf(i, r - 1)), r;
}
function mf(e) {
	let t = e;
	for (; t = t.parent;) if (hf(t) && nf(e, t) === 0) return t;
}
function hf({ record: e }) {
	return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function gf(e) {
	let t = Wn(Ld), n = Wn(Rd), r = K(() => {
		let n = F(e.to);
		return t.resolve(n);
	}), i = K(() => {
		let { matched: e } = r.value, { length: t } = e, i = e[t - 1], a = n.matched;
		if (!i || !a.length) return -1;
		let o = a.findIndex(ld.bind(null, i));
		if (o > -1) return o;
		let s = xf(e[t - 2]);
		return t > 1 && xf(i) === s && a[a.length - 1].path !== s ? a.findIndex(ld.bind(null, e[t - 2])) : o;
	}), a = K(() => i.value > -1 && bf(n.params, r.value.params)), o = K(() => i.value > -1 && i.value === n.matched.length - 1 && ud(n.params, r.value.params));
	function s(n = {}) {
		if (yf(n)) {
			let n = t[F(e.replace) ? "replace" : "push"](F(e.to)).catch(Pu);
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
function _f(e) {
	return e.length === 1 ? e[0] : e;
}
var vf = /* @__PURE__ */ ir({
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
	useLink: gf,
	setup(e, { slots: t }) {
		let n = /* @__PURE__ */ A(gf(e)), { options: r } = Wn(Ld), i = K(() => ({
			[Sf(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
			[Sf(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
		}));
		return () => {
			let r = t.default && _f(t.default(n));
			return e.custom ? r : za("a", {
				"aria-current": n.isExactActive ? e.ariaCurrentValue : null,
				href: n.href,
				onClick: n.navigate,
				class: i.value
			}, r);
		};
	}
});
function yf(e) {
	if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && (e.button === void 0 || e.button === 0)) {
		if (e.currentTarget && e.currentTarget.getAttribute) {
			let t = e.currentTarget.getAttribute("target");
			if (/\b_blank\b/i.test(t)) return;
		}
		return e.preventDefault && e.preventDefault(), !0;
	}
}
function bf(e, t) {
	for (let n in t) {
		let r = t[n], i = e[n];
		if (typeof r == "string") {
			if (r !== i) return !1;
		} else if (!Fu(i) || i.length !== r.length || r.some((e, t) => e.valueOf() !== i[t].valueOf())) return !1;
	}
	return !0;
}
function xf(e) {
	return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
var Sf = (e, t, n) => e ?? t ?? n, Cf = /* @__PURE__ */ ir({
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
		let r = Wn(zd), i = K(() => e.route || r.value), a = Wn(Id, 0), o = K(() => {
			let e = F(a), { matched: t } = i.value, n;
			for (; (n = t[e]) && !n.components;) e++;
			return e;
		}), s = K(() => i.value.matched[o.value]);
		Un(Id, K(() => o.value + 1)), Un(Fd, s), Un(zd, i);
		let c = /* @__PURE__ */ N();
		return L(() => [
			c.value,
			s.value,
			e.name
		], ([e, t, n], [r, i, a]) => {
			t && (t.instances[n] = e, i && i !== t && e && e === r && (t.leaveGuards.size || (t.leaveGuards = i.leaveGuards), t.updateGuards.size || (t.updateGuards = i.updateGuards))), !e || !t || i && ld(t, i) && r || (t.enterCallbacks[n] || []).forEach((t) => t(e));
		}, { flush: "post" }), () => {
			let r = i.value, a = e.name, o = s.value, l = o && o.components[a];
			if (!l) return wf(n.default, {
				Component: l,
				route: r
			});
			let u = o.props[a], d = za(l, X({}, u ? u === !0 ? r.params : typeof u == "function" ? u(r) : u : null, t, {
				onVnodeUnmounted: (e) => {
					e.component.isUnmounted && (o.instances[a] = null);
				},
				ref: c
			}));
			return wf(n.default, {
				Component: d,
				route: r
			}) || d;
		};
	}
});
function wf(e, t) {
	if (!e) return null;
	let n = e(t);
	return n.length === 1 ? n[0] : n;
}
var Tf = Cf;
function Ef(e) {
	let t = sf(e.routes, e), n = e.parseQuery || Md, r = e.stringifyQuery || Nd, i = e.history, a = Bd(), o = Bd(), s = Bd(), c = /* @__PURE__ */ P(md), l = md;
	Au && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
	let u = Nu.bind(null, (e) => "" + e), d = Nu.bind(null, nd), f = Nu.bind(null, rd);
	function p(e, n) {
		let r, i;
		return Od(e) ? (r = t.getRecordMatcher(e), i = n) : i = e, t.addRoute(i, r);
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
		if (a = X({}, a || c.value), typeof e == "string") {
			let r = od(n, e, a.path), o = t.resolve({ path: r.path }, a), s = i.createHref(r.fullPath);
			return X(r, o, {
				params: f(o.params),
				hash: rd(r.hash),
				redirectedFrom: void 0,
				href: s
			});
		}
		let o;
		if (e.path != null) o = X({}, e, { path: od(n, e.path, a.path).path });
		else {
			let t = X({}, e.params);
			for (let e in t) t[e] ?? delete t[e];
			o = X({}, e, { params: d(t) }), a.params = d(a.params);
		}
		let s = t.resolve(o, a), l = e.hash || "";
		s.params = u(f(s.params));
		let p = sd(r, X({}, e, {
			hash: Qu(l),
			path: s.path
		})), m = i.createHref(p);
		return X({
			fullPath: p,
			hash: l,
			query: r === Nd ? Pd(e.query) : e.query || {}
		}, s, {
			redirectedFrom: void 0,
			href: m
		});
	}
	function v(e) {
		return typeof e == "string" ? od(n, e, c.value.path) : X({}, e);
	}
	function y(e, t) {
		if (l !== e) return Ad(Z.NAVIGATION_CANCELLED, {
			from: t,
			to: e
		});
	}
	function b(e) {
		return S(e);
	}
	function x(e) {
		return b(X(v(e), { replace: !0 }));
	}
	function ee(e, t) {
		let n = e.matched[e.matched.length - 1];
		if (n && n.redirect) {
			let { redirect: r } = n, i = typeof r == "function" ? r(e, t) : r;
			return typeof i == "string" && (i = i.includes("?") || i.includes("#") ? i = v(i) : { path: i }, i.params = {}), X({
				query: e.query,
				hash: e.hash,
				params: i.path == null ? e.params : {}
			}, i);
		}
	}
	function S(e, t) {
		let n = l = _(e), i = c.value, a = e.state, o = e.force, s = e.replace === !0, u = ee(n, i);
		if (u) return S(X(v(u), {
			state: typeof u == "object" ? X({}, a, u.state) : a,
			force: o,
			replace: s
		}), t || n);
		let d = n;
		d.redirectedFrom = t;
		let f;
		return !o && cd(r, i, n) && (f = Ad(Z.NAVIGATION_DUPLICATED, {
			to: d,
			from: i
		}), de(i, i, !0, !1)), (f ? Promise.resolve(f) : ne(d, i)).catch((e) => jd(e) ? jd(e, Z.NAVIGATION_GUARD_REDIRECT) ? e : ue(e) : ce(e, d, i)).then((e) => {
			if (e) {
				if (jd(e, Z.NAVIGATION_GUARD_REDIRECT)) return S(X({ replace: s }, v(e.to), {
					state: typeof e.to == "object" ? X({}, a, e.to.state) : a,
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
		let n, [r, i, s] = Ud(e, t);
		n = Hd(r.reverse(), "beforeRouteLeave", e, t);
		for (let i of r) i.leaveGuards.forEach((r) => {
			n.push(Vd(r, e, t));
		});
		let c = C.bind(null, e, t);
		return n.push(c), he(n).then(() => {
			n = [];
			for (let r of a.list()) n.push(Vd(r, e, t));
			return n.push(c), he(n);
		}).then(() => {
			n = Hd(i, "beforeRouteUpdate", e, t);
			for (let r of i) r.updateGuards.forEach((r) => {
				n.push(Vd(r, e, t));
			});
			return n.push(c), he(n);
		}).then(() => {
			n = [];
			for (let r of s) if (r.beforeEnter) {
				if (Fu(r.beforeEnter)) for (let i of r.beforeEnter) n.push(Vd(i, e, t));
				else n.push(Vd(r.beforeEnter, e, t));
			}
			return n.push(c), he(n);
		}).then(() => (e.matched.forEach((e) => e.enterCallbacks = {}), n = Hd(s, "beforeRouteEnter", e, t, te), n.push(c), he(n))).then(() => {
			n = [];
			for (let r of o.list()) n.push(Vd(r, e, t));
			return n.push(c), he(n);
		}).catch((e) => jd(e, Z.NAVIGATION_CANCELLED) ? e : Promise.reject(e));
	}
	function re(e, t, n) {
		s.list().forEach((r) => te(() => r(e, t, n)));
	}
	function w(e, t, n, r, a) {
		let o = y(e, t);
		if (o) return o;
		let s = t === md, l = Au ? history.state : {};
		n && (r || s ? i.replace(e.fullPath, X({ scroll: s && l && l.scroll }, a)) : i.push(e.fullPath, a)), c.value = e, de(e, t, n, s), ue();
	}
	let ie;
	function ae() {
		ie ||= i.listen((e, t, n) => {
			if (!me.listening) return;
			let r = _(e), a = ee(r, me.currentRoute.value);
			if (a) {
				S(X(a, {
					replace: !0,
					force: !0
				}), r).catch(Pu);
				return;
			}
			l = r;
			let o = c.value;
			Au && Td(Cd(o.fullPath, n.delta), xd()), ne(r, o).catch((e) => jd(e, Z.NAVIGATION_ABORTED | Z.NAVIGATION_CANCELLED) ? e : jd(e, Z.NAVIGATION_GUARD_REDIRECT) ? (S(X(v(e.to), { force: !0 }), r).then((e) => {
				jd(e, Z.NAVIGATION_ABORTED | Z.NAVIGATION_DUPLICATED) && !n.delta && n.type === hd.pop && i.go(-1, !1);
			}).catch(Pu), Promise.reject()) : (n.delta && i.go(-n.delta, !1), ce(e, r, o))).then((e) => {
				e ||= w(r, o, !1), e && (n.delta && !jd(e, Z.NAVIGATION_CANCELLED) ? i.go(-n.delta, !1) : n.type === hd.pop && jd(e, Z.NAVIGATION_ABORTED | Z.NAVIGATION_DUPLICATED) && i.go(-1, !1)), re(r, o, e);
			}).catch(Pu);
		});
	}
	let T = Bd(), oe = Bd(), se;
	function ce(e, t, n) {
		ue(e);
		let r = oe.list();
		return r.length ? r.forEach((r) => r(e, t, n)) : console.error(e), Promise.reject(e);
	}
	function le() {
		return se && c.value !== md ? Promise.resolve() : new Promise((e, t) => {
			T.add([e, t]);
		});
	}
	function ue(e) {
		return se || (se = !e, ae(), T.list().forEach(([t, n]) => e ? n(e) : t()), T.reset()), e;
	}
	function de(t, n, r, i) {
		let { scrollBehavior: a } = e;
		if (!Au || !a) return Promise.resolve();
		let o = !r && Ed(Cd(t.fullPath, 0)) || (i || !r) && history.state && history.state.scroll || null;
		return Dn().then(() => a(t, n, o)).then((e) => e && Sd(e)).catch((e) => ce(e, t, n));
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
			e.component("RouterLink", vf), e.component("RouterView", Tf), e.config.globalProperties.$router = me, Object.defineProperty(e.config.globalProperties, "$route", {
				enumerable: !0,
				get: () => F(c)
			}), Au && !E && c.value === md && (E = !0, b(i.location).catch((e) => {}));
			let t = {};
			for (let e in md) Object.defineProperty(t, e, {
				get: () => c.value[e],
				enumerable: !0
			});
			e.provide(Ld, me), e.provide(Rd, /* @__PURE__ */ Wt(t)), e.provide(zd, c);
			let n = e.unmount;
			pe.add(e), e.unmount = function() {
				pe.delete(e), pe.size < 1 && (l = md, ie && ie(), ie = null, c.value = md, E = !1, se = !1), n();
			};
		}
	};
	function he(e) {
		return e.reduce((e, t) => e.then(() => te(t)), Promise.resolve());
	}
	return me;
}
function Df() {
	return Wn(Ld);
}
function Of(e) {
	return Wn(Rd);
}
var kf = Ef({
	history: Wd(),
	routes: [{
		path: "/:view(.*)*",
		name: "legacy-view",
		component: { render: () => null }
	}]
}), Af = /* @__PURE__ */ new Set([
	"projects",
	"saved",
	"myideas",
	"myprompts",
	"events",
	"tracks",
	"artists"
]);
function jf(e, t = null) {
	let n = typeof e == "string" && e ? e : "home";
	return n === "producer" && t?.kind === "production" && typeof t.id == "string" && /^[a-zA-Z0-9_-]{1,128}$/.test(t.id) ? "/producer/detail/" + encodeURIComponent(t.id) : n === "tracks" && t?.kind === "track" ? "/account/tracks/detail" : n === "detail" ? "/catalog/detail" : Af.has(n) ? "/account/" + n : "/" + encodeURIComponent(n);
}
function Mf(e) {
	if (e === "/catalog/detail") return "catalog";
	if (e === "/producer/detail" || e.startsWith("/producer/detail/")) return "producer";
	if (e.startsWith("/account/")) return "account";
	try {
		return decodeURIComponent(e.slice(1)) || "home";
	} catch {
		return "home";
	}
}
var Nf = null, Pf = Promise.resolve(), Ff = "replace", If = 0, Lf = 0, Rf = [], zf = [], Bf = -1, Vf = /* @__PURE__ */ P(0), Hf = /* @__PURE__ */ Gt(Vf);
function Uf() {
	Vf.value++;
}
var Wf = /* @__PURE__ */ new Set([
	"overview",
	"ideas",
	"prompts",
	"artists"
]);
function Gf(e) {
	return e?.kind !== "genre" || typeof e.id != "string" || !/^[a-z0-9-]{1,100}$/.test(e.id) || !Wf.has(e.tab) ? null : Object.freeze({
		kind: "genre",
		id: e.id,
		tab: e.tab
	});
}
function Kf(e) {
	return e?.kind !== "track" || typeof e.id != "string" || !/^[a-zA-Z0-9_-]{1,128}$/.test(e.id) ? null : Object.freeze({
		kind: "track",
		id: e.id
	});
}
function qf(e) {
	return Gf(e) || Kf(e) || (e?.kind === "production" && typeof e.id == "string" && /^[a-zA-Z0-9_-]{1,128}$/.test(e.id) ? Object.freeze({
		kind: "production",
		id: e.id
	}) : null);
}
function Jf(e, t, n = null) {
	let r = qf(n);
	if (Bf < 0) Rf = [e], zf = [r], Bf = 0;
	else if (t === "push") Rf = Rf.slice(0, Bf + 1), zf = zf.slice(0, Bf + 1), Rf.push(e), zf.push(r), Bf = Rf.length - 1;
	else {
		let t = Rf[Bf] === e ? zf[Bf] : null;
		Rf[Bf] = e, zf[Bf] = r || t || null;
	}
	Uf();
}
function Yf(e) {
	let t = e === "back" ? -1 : +(e === "forward"), n = Bf + t;
	return t && n >= 0 && n < Rf.length ? Object.freeze({
		path: Rf[n],
		context: zf[n] || null,
		index: n,
		offset: t
	}) : null;
}
function Xf(e) {
	return Yf(e);
}
function Zf(e) {
	if (typeof e != "string" || !/^\/[a-z][a-z0-9-]*$/i.test(e)) return null;
	try {
		return decodeURIComponent(e.slice(1));
	} catch {
		return null;
	}
}
function Qf(e, { historyMode: t = "replace", context: n = null, source: r = "legacy" } = {}) {
	let i = qf(n), a = jf(e, i);
	if (a === Nf) return i && (Pf = Pf.then(() => {
		kf.currentRoute.value.path === a && Bf >= 0 && Rf[Bf] === a && (zf[Bf] = i, Uf());
	})), Pf;
	Nf = a;
	let o = t === "push" ? "push" : "replace";
	return Pf = Pf.then(async () => {
		kf.currentRoute.value.path === a ? i && Bf >= 0 && (zf[Bf] = i, Uf()) : await kf[o](a) || (Jf(a, o, i), Ff = o, o === "push" && !i && r === "menu" && If++, o === "push" && !i && r === "shortcut" && Lf++);
	}).catch((e) => {
		console.warn("[SUNOBOOM] Vue Router memory navigation failed; legacy routing remains active.", e);
	}), Pf;
}
function $f() {
	return Pf;
}
function ep(e) {
	let t = Pf.then(() => {
		let t = Yf(e);
		return t ? new Promise((n) => {
			let r = !1, i = () => {}, a;
			function o(o) {
				r || (r = !0, i(), clearTimeout(a), o && (Bf = t.index, Nf = t.path, Ff = e, Uf()), n(o));
			}
			i = kf.afterEach((e, n, r) => o(!r && e.path === t.path)), a = setTimeout(() => o(!1), 2500), kf.go(t.offset);
		}) : !1;
	}).catch((e) => (console.warn("[SUNOBOOM] Vue memory history traversal failed; legacy navigation retained.", e), !1));
	return Pf = t.then(() => void 0), t;
}
function tp() {
	let e = kf.currentRoute.value;
	return Object.freeze({
		path: e.path,
		name: e.name,
		active: Mf(e.path),
		transition: Ff,
		menuPushes: If,
		shortcutPushes: Lf,
		canGoBack: Bf > 0,
		canGoForward: Bf >= 0 && Bf < Rf.length - 1,
		historyDepth: Rf.length,
		historyPosition: Bf,
		context: zf[Bf] || null
	});
}
// src/vue/navigation/route-state.js
var np = /* @__PURE__ */ P(Object.freeze({
	route: "home",
	active: "home",
	revision: 0
})), rp = /* @__PURE__ */ Gt(np);
function ip(e, { historyMode: t = "replace", context: n = null, source: r = "legacy" } = {}) {
	let i = typeof e == "string" && e ? e : "home";
	if (Qf(i, {
		historyMode: t,
		context: n,
		source: r
	}), i === np.value.route) return np.value;
	let a = Object.freeze({
		route: i,
		active: Ou(i),
		revision: np.value.revision + 1
	});
	return np.value = a, a;
}
// src/vue/state/appearance-model.js
function ap(e) {
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
var op = /* @__PURE__ */ new Set([
	"all",
	"",
	"name",
	"family",
	"artist",
	"description"
]), sp = /* @__PURE__ */ new Set([
	"overview",
	"ideas",
	"prompts",
	"artists"
]), cp = /^[a-z0-9][a-z0-9-]{0,99}$/;
function lp({ query: e, results: t, total: n, mode: r } = {}) {
	return typeof e != "string" || e.length > 160 || !Number.isSafeInteger(n) || n < 0 || !Number.isSafeInteger(t) || t < 0 || t > n || !op.has(r) ? null : Object.freeze({
		query: e,
		results: t,
		total: n,
		mode: r
	});
}
function up(e, t) {
	return typeof e != "string" || !cp.test(e) || !sp.has(t) ? null : Object.freeze({
		genreId: e,
		tab: t
	});
}
function dp({ tree: e, selected: t, zoom: n, query: r } = {}) {
	return typeof e != "string" || !cp.test(e) || typeof t != "string" || !cp.test(t) || typeof n != "number" || !Number.isFinite(n) || n < .75 || n > 1.5 || typeof r != "string" || r.length > 160 ? null : Object.freeze({
		tree: e,
		selected: t,
		zoom: n,
		query: r
	});
}
// src/vue/state/production-ui-model.js
var fp = /^[a-z0-9][a-z0-9-]{0,99}$/, pp = (e, t, n) => Number.isSafeInteger(e) && e >= t && e <= n;
function mp(e) {
	let t = e?.settings, n = e?.prompt, r = t?.genre;
	return typeof r != "string" || !fp.test(r) || !pp(t?.tempo, 65, 200) || typeof n != "string" || n.length > 1e3 ? null : Object.freeze({
		ready: !0,
		genreId: r,
		tempo: t.tempo,
		promptLength: n.length
	});
}
function hp(e) {
	let t = e?.rows, n = e?.prompt;
	return !Array.isArray(t) || t.length < 2 || t.length > 4 || !pp(e?.tempo, 65, 200) || typeof n != "string" || n.length > 1e3 || !t.every((e) => typeof e?.id == "string" && fp.test(e.id) && pp(e.weight, 0, 100)) || t.reduce((e, t) => e + t.weight, 0) !== 100 || new Set(t.map((e) => e.id)).size !== t.length ? null : Object.freeze({
		ready: !0,
		genreCount: t.length,
		tempo: e.tempo,
		promptLength: n.length
	});
}
function gp(e) {
	let t = e?.report;
	return !["manual", "studio"].includes(e?.mode) || !pp(t?.score, 0, 100) || !pp(t?.length, 0, 1e5) ? null : Object.freeze({
		ready: !0,
		mode: e.mode,
		score: t.score,
		checkedLength: t.length
	});
}
function _p(e) {
	let t = e?.blocks;
	if (!Array.isArray(t) || t.length > 64 || !t.every((e) => e && [
		2,
		4,
		8,
		12,
		16,
		24,
		32
	].includes(e.bars) && pp(e.energy, 1, 5) && typeof e.hasTransition == "boolean")) return null;
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
var vp = (e, t, n) => Number.isSafeInteger(e) && e >= t && e <= n, yp = (e) => typeof e == "boolean";
function bp(e) {
	return !vp(e?.count, 0, 150) || !vp(e?.currentIndex, -1, e.count - 1) || e.count === 0 && e.currentIndex !== -1 || !yp(e.playing) || e.playing && e.currentIndex === -1 || !yp(e.shuffle) || ![
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
function xp(e) {
	let t = e?.files?.A?.ready, n = e?.files?.B?.ready;
	return !["player", "compare"].includes(e?.mode) || !["A", "B"].includes(e?.active) || !yp(e.playing) || !yp(e.loop) || !yp(e.hasBoth) || !yp(t) || !yp(n) || e.hasBoth !== (t && n) || e.playing && !(e.active === "A" ? t : n) ? null : Object.freeze({
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
var Sp = (e) => Number.isSafeInteger(e) && e >= 0 && e <= 1e4, Cp = Object.freeze([
	"all",
	"idea",
	"lyrics",
	"generation",
	"selection",
	"mastering",
	"publisher",
	"released"
]);
function wp(e) {
	let t = e?.records;
	return !Array.isArray(t) || !Sp(t.length) || typeof e.hasRecords != "boolean" || e.hasRecords !== t.length > 0 || !t.every((e) => e && Number.isSafeInteger(e.done) && e.done >= 0 && e.total === 6 && e.done <= e.total && e.percent === Math.round(e.done / e.total * 100)) ? null : Object.freeze({
		ready: !0,
		workCount: t.length,
		finishedCount: t.filter((e) => e.done === e.total).length,
		hasSelection: t.some((t) => typeof t.id == "string" && t.id === e.selectedId)
	});
}
function Tp(e) {
	let t = e?.records;
	return !Array.isArray(t) || !Sp(t.length) || typeof e.hasRecords != "boolean" || !Cp.includes(e.active) || t.length > 0 && !e.hasRecords || e.active === "all" && e.hasRecords !== t.length > 0 ? null : Object.freeze({
		ready: !0,
		visibleCount: t.length,
		hasRecords: e.hasRecords,
		filter: e.active
	});
}
function Ep(e) {
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
function Dp(e) {
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
var Op = (e, t = 1e4) => Number.isSafeInteger(e) && e >= 0 && e <= t, kp = (e) => typeof e == "boolean";
function Ap(e) {
	let t = e?.items;
	return !Op(e?.total) || !Array.isArray(t) || !Op(t.length) || t.length > e.total || !t.every((e) => e && kp(e.hasCover)) ? null : Object.freeze({
		ready: !0,
		totalCount: e.total,
		visibleCount: t.length,
		localCoverCount: t.filter((e) => e.hasCover).length
	});
}
function jp(e) {
	let t = e?.versions;
	return !Array.isArray(t) || !Op(t.length, 1e3) || !kp(e.hasAudio) || !kp(e.hasCover) || !kp(e.hasPlayableAudio) || !kp(e.compareOpen) || e.compareOpen && t.length < 2 || !t.every((e) => e && kp(e.isMain) && kp(e.isPlaying)) || t.filter((e) => e.isMain).length > 1 || t.filter((e) => e.isPlaying).length > 1 ? null : Object.freeze({
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
var Mp = (e, t = 1e4) => Number.isSafeInteger(e) && e >= 0 && e <= t;
function Np(e, t) {
	return !Array.isArray(e?.artists) || !Mp(e.artists.length) || !Mp(t) || t > e.artists.length || !Mp(e.dnaCount) ? null : Object.freeze({
		ready: !0,
		artistCount: e.artists.length,
		visibleCount: t,
		dnaCount: e.dnaCount
	});
}
function Pp(e) {
	let t = e?.profiles, n = e?.detail;
	return !Array.isArray(t) || !Mp(t.length) || n !== null && (!n || typeof n != "object") || n !== null && (!Array.isArray(n.related) || !Mp(n.related.length) || !Array.isArray(n.forbids) || !Mp(n.forbids.length, 32) || !Array.isArray(n.facts) || !Mp(n.facts.length, 32) || !Array.isArray(n.textFields) || !Mp(n.textFields.length, 32)) ? null : Object.freeze({
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
var Fp = (e) => Number.isSafeInteger(e) && e >= 0 && e <= 1e4, Ip = Object.freeze([
	"genres",
	"ideas",
	"own",
	"generated",
	"prompts"
]);
function Lp(e) {
	if (!e || !Ip.every((t) => Array.isArray(e[t]) && Fp(e[t].length) && e[t].every((e) => typeof e == "object" && !!e))) return null;
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
var Rp = (e, t) => typeof e == "string" && e.length <= t;
function zp(e) {
	return !e || !Rp(e.title, 100) || !Rp(e.genre, 128) || !Rp(e.text, 3e3) || !Rp(e.hook, 240) ? null : Object.freeze({
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
function Bp(e, t) {
	return !e || typeof t != "boolean" || !Rp(e.title, 100) || !Rp(e.genre, 128) || !Rp(e.text, 1e3) ? null : Object.freeze({
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
function Vp(e) {
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
function Hp(e) {
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
function Up(e) {
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
var Wp = /* @__PURE__ */ new Set([
	"smart",
	"rules",
	"manual"
]), Gp = /* @__PURE__ */ new Set([
	"auto",
	"original",
	"tagged"
]), Kp = /* @__PURE__ */ new Set([
	"minimal",
	"balanced",
	"detailed"
]), qp = [
	"melisma",
	"falsetto",
	"harmonies",
	"noWhisper",
	"noRasp"
];
function Jp(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) return null;
	let t = e.prefs;
	if (!t || typeof t != "object" || Array.isArray(t) || !Wp.has(t.mode) || !Gp.has(t.source) || !Kp.has(t.density) || !Number.isSafeInteger(t.intensity) || t.intensity < 1 || t.intensity > 5 || qp.some((e) => typeof t[e] != "boolean") || typeof e.busy != "boolean") return null;
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
var Yp = Object.freeze([]), Xp = Object.freeze({
	ideaCount: 0,
	promptCount: 0,
	eventCount: 0,
	revision: 0
}), Zp = (e) => Number.isSafeInteger(e) && e >= 0 ? e : 0, Q = Eu("sunoboom-legacy-ui", () => {
	let e = rp, t = /* @__PURE__ */ P(Yp), n = /* @__PURE__ */ P(Xp), r = /* @__PURE__ */ P(Object.freeze({
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
		let t = lp(e);
		if (!t) return !1;
		let n = i.value;
		return n.query === t.query && n.results === t.results && n.total === t.total && n.mode === t.mode ? !1 : (i.value = Object.freeze({
			...t,
			revision: n.revision + 1
		}), !0);
	}
	function c(e, t) {
		let n = up(e, t);
		if (!n) return !1;
		let r = a.value;
		return r.genreId === n.genreId && r.tab === n.tab ? !1 : (a.value = Object.freeze({
			...n,
			revision: r.revision + 1
		}), !0);
	}
	function l(e) {
		let t = dp(e);
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
	let oe = (e) => T(u, mp, e), se = (e) => T(d, hp, e), ce = (e) => T(f, gp, e), le = (e) => T(p, _p, e), ue = (e) => T(m, bp, e), de = (e) => T(h, xp, e), fe = (e) => T(g, wp, e), E = (e) => T(_, Tp, e), pe = (e) => T(v, Ep, e), me = (e) => T(y, Dp, e), he = (e) => T(b, Ap, e), ge = (e) => T(x, jp, e), D = (e, t) => T(ee, (e) => Np(e, t), e), _e = (e) => T(S, Pp, e), ve = (e) => T(C, Lp, e), ye = (e) => T(te, zp, e), be = (e, t) => T(ne, (e) => Bp(e, t), e), xe = (e) => T(re, Vp, e), Se = (e) => T(w, Hp, e), Ce = (e) => T(ie, Up, e);
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
	let Te = (e) => T(ae, Jp, e);
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
			ideaCount: Zp(e.ideaCount),
			promptCount: Zp(e.promptCount),
			eventCount: Zp(e.eventCount)
		}, r = n.value;
		return r.ideaCount === t.ideaCount && r.promptCount === t.promptCount && r.eventCount === t.eventCount ? !1 : (n.value = Object.freeze({
			...t,
			revision: r.revision + 1
		}), !0);
	}
	function Oe(e) {
		let t = ap(e);
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
}), Qp = {
	key: 0,
	class: "sub",
	"data-sb-vue-idea-library-recap": ""
}, $p = { class: "section-title" }, em = {
	key: 0,
	class: "btn ghost small",
	"data-action": "nav",
	"data-nav": "ideas"
}, tm = ["data-idea-collection"], nm = { class: "idea-badge" }, rm = {
	key: 0,
	class: "generator-story"
}, im = {
	key: 1,
	class: "song-has-lyrics"
}, am = { key: 0 }, om = {
	key: 3,
	class: "generator-detail"
}, sm = { class: "actions" }, cm = [
	"data-action",
	"data-id",
	"data-i",
	"aria-label"
], lm = ["innerHTML"], um = {
	key: 1,
	class: "empty"
}, dm = ["innerHTML"], fm = {
	__name: "IdeaCollections",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = Q();
		return (n, r) => (V(), H(B, null, [F(t).librarySummary.ready ? (V(), H("p", Qp, " Последний просмотр библиотеки: " + O(F(t).librarySummary.totalIdeaCount) + " идей ", 1)) : G("", !0), (V(!0), H(B, null, z(e.model.groups, (t) => (V(), H(B, { key: t.kind }, [U("div", $p, [U("h2", null, O(t.title) + " (" + O(t.items.length) + ")", 1), t.kind === "generated" ? (V(), H("button", em, "Создать идеи →")) : G("", !0)]), t.items.length ? (V(), H("div", {
			key: 0,
			class: "idea-grid",
			"data-idea-collection": t.kind
		}, [(V(!0), H(B, null, z(t.items, (n) => (V(), na(kr(t.kind === "academy" ? "div" : "article"), {
			key: n.key,
			class: D(["idea", { "generated-card": t.kind === "generated" }])
		}, {
			default: Vn(() => [
				U("div", nm, O(n.badge), 1),
				U("h3", null, O(n.title), 1),
				U("p", null, O(n.pitch), 1),
				t.kind === "generated" ? (V(), H("p", rm, O(n.storyLine), 1)) : G("", !0),
				t.kind === "manual" && n.lyrics ? (V(), H("p", im, "🎼 Текст песни сохранён · " + O(n.sunoLyrics ? "теги для Suno готовы" : "без разметки"), 1)) : G("", !0),
				n.hook || t.kind === "generated" ? (V(), na(kr(t.kind === "generated" ? "div" : "p"), {
					key: 2,
					class: "generator-hook"
				}, {
					default: Vn(() => [t.kind === "generated" ? (V(), H("span", am, "ХУК ПРИПЕВА")) : G("", !0), U("strong", null, O(n.hook), 1)]),
					_: 2
				}, 1024)) : G("", !0),
				t.kind === "generated" && n.detail ? (V(), H("p", om, "Твоя деталь: " + O(n.detail), 1)) : G("", !0),
				U("div", sm, [(V(!0), H(B, null, z(n.actions, (t) => (V(), H("button", {
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
				}, null, 8, lm)) : G("", !0), W(O(t.text), 1)], 10, cm))), 128))])
			]),
			_: 2
		}, 1032, ["class"]))), 128))], 8, tm)) : (V(), H("div", um, [
			U("span", {
				"aria-hidden": "true",
				innerHTML: e.model.icons.music
			}, null, 8, dm),
			U("strong", null, O(t.emptyTitle), 1),
			W(O(t.emptyText), 1)
		]))], 64))), 128))], 64));
	}
};
// src/vue/poetry/legacyIdeaCollectionsBridge.js
function pm({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_IDEA_COLLECTIONS, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-idea-collections"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, fm, { model: n })
	});
}
// src/vue/version-history/version-model.js
function mm(e) {
	return /^\d{4}-\d{2}-\d{2}$/.test(String(e || "")) ? e.slice(8, 10) + "." + e.slice(5, 7) + "." + e.slice(0, 4) : "";
}
var hm = (e) => String(e ?? "").trim().normalize("NFKC").toLocaleLowerCase("ru"), gm = (e, t) => hm(e).includes(t);
function _m(e) {
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
function vm(e, { tab: t = "major", size: n = "all", search: r = "" } = {}) {
	let i = Array.isArray(e) ? e : [], a = _m(i), o = hm(r);
	if (o) {
		let e = a.filter((e) => o === "v" + e.major || o === e.major || gm("мажорная версия " + e.major, o)), t = i.filter((e) => gm("v" + e[0] + " " + e[0] + " " + e[1] + " " + mm(e[2]), o));
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
var ym = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, bm = {
	class: "sb-vh-vue-layout",
	"data-sb-vue-version-history": ""
}, xm = { class: "sb-vh-header" }, Sm = [
	"aria-selected",
	"tabindex",
	"onClick"
], Cm = [
	"aria-selected",
	"tabindex",
	"onClick"
], wm = {
	id: "sb-vh-legend",
	class: "sb-vh-legend"
}, Tm = { class: "sb-vh-controls" }, Em = {
	class: "sb-vh-search-label",
	for: "sb-vue-vh-search"
}, Dm = {
	id: "sb-vh-subcount",
	class: "sb-vh-count",
	role: "status"
}, Om = {
	key: 0,
	class: "sb-vh-search-all"
}, km = {
	key: 0,
	class: "sb-vh-search-group"
}, Am = { class: "sb-vh-release-no" }, jm = { class: "sb-vh-release-text" }, Mm = { class: "sb-vh-version-range" }, Nm = { class: "sb-vh-release-list" }, Pm = { class: "sb-vh-release-no" }, Fm = { class: "sb-vh-release-text" }, Im = { class: "sb-vh-search-meta" }, Lm = ["datetime"], Rm = { class: "sb-vh-search-tag" }, zm = {
	key: 1,
	class: "sb-vh-empty"
}, Bm = {
	key: 2,
	class: "sb-vh-release-list sb-vh-major-list"
}, Vm = { class: "sb-vh-release-no" }, Hm = { class: "sb-vh-release-text" }, Um = { class: "sb-vh-version-range" }, Wm = {
	key: 3,
	class: "sb-vh-release-list"
}, Gm = { class: "sb-vh-release-no" }, Km = { class: "sb-vh-release-text" }, qm = { class: "sb-vh-search-meta" }, Jm = ["datetime"], Ym = {
	key: 0,
	class: "sb-vh-search-tag"
}, Xm = {
	key: 4,
	class: "sb-vh-empty"
}, Zm = /*#__PURE__*/ ym({
	__name: "VersionHistory",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ N("major"), r = /* @__PURE__ */ N("all"), i = /* @__PURE__ */ N(""), a = K(() => vm(t.model.releases, {
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
		return R(() => Dn(() => s.value?.focus({ preventScroll: !0 }))), (t, m) => (V(), H("div", bm, [
			U("header", xm, [U("div", null, [
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
			}, O(e.label), 11, Sm)), 64))], 32),
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
			}, O(e.label), 11, Cm)), 64))], 32)) : G("", !0),
			U("p", wm, O(a.value.legend), 1),
			U("div", Tm, [U("label", Em, [m[8] ||= U("span", { class: "sb-vh-visually-hidden" }, "Поиск по истории версий", -1), I(U("input", {
				id: "sb-vue-vh-search",
				"onUpdate:modelValue": m[3] ||= (e) => i.value = e,
				type: "search",
				autocomplete: "off",
				placeholder: "Поиск по всем версиям и вкладкам…",
				onInput: l
			}, null, 544), [[q, i.value]])]), U("span", Dm, O(a.value.count), 1)]),
			U("div", {
				id: "sb-vh-content",
				ref_key: "content",
				ref: o,
				class: "sb-vh-content",
				role: "tabpanel",
				"aria-labelledby": "sb-vh-tabs"
			}, [a.value.mode === "search" && (a.value.majors.length || a.value.large.length || a.value.small.length) ? (V(), H("div", Om, [a.value.majors.length ? (V(), H("section", km, [U("h3", null, [m[9] ||= W("Мажорные версии ", -1), U("span", null, O(a.value.majors.length), 1)]), (V(!0), H(B, null, z(a.value.majors, (e) => (V(), H("article", {
				key: "major-" + e.major,
				class: "sb-vh-release sb-vh-major-release"
			}, [U("span", Am, "v" + O(e.major), 1), U("div", jm, [U("p", null, "Мажорная версия " + O(e.major), 1), U("p", Mm, " От v" + O(e.items[e.items.length - 1][0]) + " до v" + O(e.items[0][0]), 1)])]))), 128))])) : G("", !0), (V(!0), H(B, null, z([{
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
			}, [U("h3", null, [W(O(e.title) + " ", 1), U("span", null, O(e.entries.length), 1)]), U("div", Nm, [(V(!0), H(B, null, z(e.entries, (t) => (V(), H("article", {
				key: t[0],
				class: "sb-vh-release"
			}, [U("span", Pm, "v" + O(t[0]), 1), U("div", Fm, [U("p", null, O(t[1]), 1), U("div", Im, [U("time", { datetime: t[2] }, O(F(mm)(t[2])), 9, Lm), U("span", Rm, O(e.badge), 1)])])]))), 128))])])), [[$a, e.entries.length]])), 128))])) : a.value.mode === "search" ? (V(), H("p", zm, " По запросу совпадений нет ни в одном разделе истории. ")) : a.value.mode === "major" ? (V(), H("div", Bm, [(V(!0), H(B, null, z(a.value.majors, (e) => (V(), H("article", {
				key: e.major,
				class: "sb-vh-release sb-vh-major-release"
			}, [U("span", Vm, "v" + O(e.major), 1), U("div", Hm, [
				U("h3", null, "Мажорная версия " + O(e.major), 1),
				U("p", null, "Ветка v" + O(e.major) + ".x — " + O(e.items.length) + " сохранённых минорных обновлений.", 1),
				U("p", Um, " От v" + O(e.items[e.items.length - 1][0]) + " (" + O(F(mm)(e.items[e.items.length - 1][2])) + ") до v" + O(e.items[0][0]) + " (" + O(F(mm)(e.items[0][2])) + ") ", 1),
				U("button", {
					type: "button",
					class: "sb-vh-view-minors",
					onClick: f
				}, "Просмотреть минорные версии")
			])]))), 128))])) : a.value.mode === "minor" && a.value.entries.length ? (V(), H("div", Wm, [(V(!0), H(B, null, z(a.value.entries, (e) => (V(), H("article", {
				key: e[0],
				class: "sb-vh-release"
			}, [U("span", Gm, "v" + O(e[0]), 1), U("div", Km, [U("p", null, O(e[1]), 1), U("div", qm, [U("time", { datetime: e[2] }, O(F(mm)(e[2])), 9, Jm), r.value === "all" ? (V(), H("span", Ym, O(e[3] === "large" ? "Крупное" : "Мелкое"), 1)) : G("", !0)])])]))), 128))])) : (V(), H("p", Xm, "По запросу минорные версии не найдены."))], 512)
		]));
	}
}, [["__scopeId", "data-v-ce1fc81b"]]);
// src/vue/version-history/legacyVersionHistoryBridge.js
function Qm({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_VERSION_HISTORY;
	return !t?.snapshot || !document.body ? () => {} : Y({
		root: document.body,
		selectTarget: (e) => e.querySelector("#sb-vue-version-history"),
		readSnapshot: () => {
			let e = t.snapshot();
			return e && Array.isArray(e.releases) ? e : null;
		},
		mount: (n, r) => e(n, Zm, { model: {
			...r,
			close: t.close
		} })
	});
}
// src/vue/home/HomeDashboard.vue
var $m = ["data-sb-applied-theme"], eh = { class: "dash-head" }, th = { class: "dash-actions" }, nh = { class: "dash-metrics" }, rh = { class: "dash-metric" }, ih = { class: "dash-metric" }, ah = { class: "dash-metric" }, oh = { class: "dash-layout" }, sh = { class: "dash-panel" }, ch = { class: "dash-panel-head" }, lh = { class: "dash-list" }, uh = { class: "dash-entry-meta" }, dh = ["data-kind", "data-id"], fh = {
	key: 0,
	class: "dash-empty"
}, ph = { class: "dash-panel" }, mh = { class: "dash-panel-head" }, hh = { class: "dash-list" }, gh = { class: "dash-entry-meta" }, _h = { class: "dash-entry-actions" }, vh = ["data-id"], yh = ["data-id"], bh = {
	key: 0,
	class: "dash-empty"
}, xh = { class: "dash-panel dash-panel-events" }, Sh = { class: "dash-panel-head" }, Ch = { class: "dash-list" }, wh = { class: "dash-event-date" }, Th = { class: "dash-event-main" }, Eh = { class: "dash-entry-meta" }, Dh = { key: 0 }, Oh = ["data-id"], kh = {
	key: 0,
	class: "dash-empty"
}, Ah = {
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
			U("div", eh, [
				r[9] ||= U("div", { class: "dash-eyebrow" }, "ЛИЧНАЯ МУЗЫКАЛЬНАЯ МАСТЕРСКАЯ", -1),
				r[10] ||= U("h1", null, [W("Твоя музыкальная "), U("span", null, "лаборатория.")], -1),
				U("p", null, O(e.model.profileName) + ", здесь твои последние идеи, промпты и музыкальные события — всё под рукой.", 1),
				U("div", th, [
					U("button", {
						type: "button",
						class: "btn primary",
						"data-action": "nav",
						"data-nav": "myideas",
						onClick: r[0] ||= J((t) => e.navigate("myideas"), ["stop"])
					}, "＋ Новая идея"),
					U("button", {
						type: "button",
						class: "btn ghost",
						"data-action": "nav",
						"data-nav": "myprompts",
						onClick: r[1] ||= J((t) => e.navigate("myprompts"), ["stop"])
					}, "＋ Новый промпт"),
					U("button", {
						type: "button",
						class: "btn ghost",
						"data-action": "nav",
						"data-nav": "events",
						onClick: r[2] ||= J((t) => e.navigate("events"), ["stop"])
					}, "＋ Событие")
				])
			]),
			U("div", nh, [
				U("div", rh, [U("b", null, O(F(t).dashboardStats.ideaCount), 1), r[11] ||= U("span", null, "Мои идеи", -1)]),
				U("div", ih, [U("b", null, O(F(t).dashboardStats.promptCount), 1), r[12] ||= U("span", null, "Мои промпты", -1)]),
				U("div", ah, [U("b", null, O(F(t).dashboardStats.eventCount), 1), r[13] ||= U("span", null, "Мои события", -1)])
			]),
			U("div", oh, [
				U("section", sh, [U("header", ch, [r[14] ||= U("div", null, [U("span", { class: "dash-kicker" }, "💡 ЛИЧНАЯ БИБЛИОТЕКА"), U("h2", null, "Мои последние идеи")], -1), U("button", {
					type: "button",
					class: "dash-view-all",
					"data-action": "nav",
					"data-nav": "myideas",
					onClick: r[3] ||= J((t) => e.navigate("myideas"), ["stop"])
				}, "Все идеи →")]), U("div", lh, [(V(!0), H(B, null, z(e.model.ideas, (e) => (V(), H("article", {
					key: e.kind + ":" + e.key,
					class: "dash-entry"
				}, [
					U("div", uh, O(e.label), 1),
					U("h3", null, O(e.title), 1),
					U("p", null, O(String(e.pitch).slice(0, 180)), 1),
					U("button", {
						type: "button",
						class: "dash-entry-link",
						"data-action": "dash-open-idea",
						"data-kind": e.kind,
						"data-id": String(e.key)
					}, "Открыть идею →", 8, dh)
				]))), 128)), e.model.ideas.length ? G("", !0) : (V(), H("div", fh, [
					r[15] ||= U("span", null, "💡", -1),
					r[16] ||= U("strong", null, "Пока нет сохранённых идей", -1),
					r[17] ||= U("p", null, "Добавь идею в личном кабинете или сохрани сюжет из Idea Lab.", -1),
					U("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "nav",
						"data-nav": "myideas",
						onClick: r[4] ||= J((t) => e.navigate("myideas"), ["stop"])
					}, "Добавить идею →")
				]))])]),
				U("section", ph, [U("header", mh, [r[18] ||= U("div", null, [U("span", { class: "dash-kicker" }, "🎛️ SUNO STUDIO"), U("h2", null, "Мои последние промпты")], -1), U("button", {
					type: "button",
					class: "dash-view-all",
					"data-action": "nav",
					"data-nav": "myprompts",
					onClick: r[5] ||= J((t) => e.navigate("myprompts"), ["stop"])
				}, "Все промпты →")]), U("div", hh, [(V(!0), H(B, null, z(e.model.prompts, (e) => (V(), H("article", {
					key: String(e.id),
					class: "dash-entry"
				}, [
					U("div", gh, O(e.genre || "Suno Studio") + O(e.date ? " · " + e.date : ""), 1),
					U("h3", null, O(e.title || (e.genre || "Промпт") + " · " + (e.mood || "студия")), 1),
					U("p", null, O(String(e.text || "").slice(0, 180)), 1),
					U("div", _h, [U("button", {
						type: "button",
						class: "dash-entry-link",
						"data-action": "dash-open-prompt",
						"data-id": String(e.id)
					}, "Открыть промпт →", 8, vh), U("button", {
						type: "button",
						class: "dash-copy",
						"data-action": "copy-saved",
						"data-id": String(e.id)
					}, "Копировать", 8, yh)])
				]))), 128)), e.model.prompts.length ? G("", !0) : (V(), H("div", bh, [
					r[19] ||= U("span", null, "🎛️", -1),
					r[20] ||= U("strong", null, "Пока нет сохранённых промптов", -1),
					r[21] ||= U("p", null, "Сохрани промпт в Suno Studio или создай собственный.", -1),
					U("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "nav",
						"data-nav": "myprompts",
						onClick: r[6] ||= J((t) => e.navigate("myprompts"), ["stop"])
					}, "Добавить промпт →")
				]))])]),
				U("section", xh, [U("header", Sh, [r[22] ||= U("div", null, [U("span", { class: "dash-kicker" }, "🗓️ ТВОРЧЕСКИЙ КАЛЕНДАРЬ"), U("h2", null, "Мои события")], -1), U("button", {
					type: "button",
					class: "dash-view-all",
					"data-action": "nav",
					"data-nav": "events",
					onClick: r[7] ||= J((t) => e.navigate("events"), ["stop"])
				}, "Все события →")]), U("div", Ch, [(V(!0), H(B, null, z(e.model.events, (e) => (V(), H("article", {
					key: String(e.id),
					class: "dash-entry dash-event"
				}, [
					U("div", wh, [U("strong", null, O(e.formattedDate), 1), U("span", null, O(e.time || "Весь день"), 1)]),
					U("div", Th, [
						U("div", Eh, O(e.typeLabel) + O(e.past ? " · Прошедшее" : ""), 1),
						U("h3", null, O(e.title), 1),
						e.notes ? (V(), H("p", Dh, O(String(e.notes).slice(0, 160)), 1)) : G("", !0)
					]),
					U("button", {
						type: "button",
						class: "dash-entry-link",
						"data-action": "dash-open-event",
						"data-id": String(e.id)
					}, "Подробнее →", 8, Oh)
				]))), 128)), e.model.events.length ? G("", !0) : (V(), H("div", kh, [
					r[23] ||= U("span", null, "🗓️", -1),
					r[24] ||= U("strong", null, "Событий пока нет", -1),
					r[25] ||= U("p", null, "Добавь даты релизов, записи, встречи и другие планы своей музыкальной работы.", -1),
					U("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "nav",
						"data-nav": "events",
						onClick: r[8] ||= J((t) => e.navigate("events"), ["stop"])
					}, "Добавить событие →")
				]))])])
			])
		], 8, $m));
	}
}, jh = Object.freeze([
	"myideas",
	"myprompts",
	"events"
]);
function Mh(e, { router: t, legacyApi: n, syncRoute: r = ip } = {}, i) {
	if (typeof e != "string" || !e || !n || typeof n.snapshot != "function") return !1;
	let a = i === "menu", o = n.snapshot()?.items, s = a ? Array.isArray(o) && o.some((t) => t?.id === e) : jh.includes(e), c = a ? n.navigate : n.navigateWorkspace;
	if (!s || typeof c != "function") return !1;
	let l = !1;
	try {
		let n = jf(e);
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
function Nh(e, t = {}) {
	return Mh(e, t, "menu");
}
function Ph(e, t = {}) {
	return Mh(e, t, "shortcut");
}
// src/vue/home/legacyHomeDashboardBridge.js
function Fh({ mountVueFeature: e, sharedUi: t }) {
	let n = window.SUNOBOOM_LEGACY_DASHBOARD, r = document.getElementById("app");
	return !n?.snapshot || !r ? () => {} : Y({
		root: r,
		selectTarget: (e) => e.querySelector("#sb-vue-dashboard"),
		readSnapshot: () => n.snapshot(),
		mount: (n, r) => (t.publishDashboardStats(r), e(n, Ah, {
			model: r,
			navigate: (e) => Ph(e, {
				router: kf,
				legacyApi: window.SUNOBOOM_LEGACY_NAV
			})
		}))
	});
}
// src/vue/account/PromptCollection.vue
var Ih = {
	key: 0,
	class: "sub",
	"data-sb-vue-prompt-library-recap": ""
}, Lh = { class: "section-title" }, Rh = {
	key: 1,
	class: "saved-list"
}, zh = { class: "row" }, Bh = { class: "actions" }, Vh = ["data-id"], Hh = ["innerHTML"], Uh = ["data-id"], Wh = ["data-id", "aria-label"], Gh = ["innerHTML"], Kh = { class: "sub" }, qh = {
	key: 2,
	class: "empty"
}, Jh = ["innerHTML"], Yh = {
	__name: "PromptCollection",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = Q();
		return (n, r) => (V(), H(B, null, [
			F(t).librarySummary.ready ? (V(), H("p", Ih, " Последний просмотр библиотеки: " + O(F(t).librarySummary.promptCount) + " промптов ", 1)) : G("", !0),
			U("div", Lh, [U("h2", null, "Сохранённые промпты (" + O(e.model.items.length) + ")", 1)]),
			e.model.items.length ? (V(), H("div", Rh, [(V(!0), H(B, null, z(e.model.items, (t) => (V(), H("article", {
				key: t.id,
				class: "saved-item"
			}, [
				U("div", zh, [U("h3", null, O(t.title), 1), U("div", Bh, [
					U("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "copy-saved",
						"data-id": t.id
					}, [U("span", {
						"aria-hidden": "true",
						innerHTML: e.model.icons.copy
					}, null, 8, Hh), r[0] ||= W(" Копировать", -1)], 8, Vh),
					U("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "edit-manual-prompt",
						"data-id": t.id
					}, "Изменить", 8, Uh),
					U("button", {
						type: "button",
						class: "btn danger small",
						"data-action": "delete-saved",
						"data-id": t.id,
						"aria-label": "Удалить промпт «" + t.title + "»"
					}, [U("span", {
						"aria-hidden": "true",
						innerHTML: e.model.icons.trash
					}, null, 8, Gh)], 8, Wh)
				])]),
				U("p", null, O(t.text), 1),
				U("span", Kh, O(t.genre) + " · " + O(t.date), 1)
			]))), 128))])) : (V(), H("div", qh, [
				U("span", {
					"aria-hidden": "true",
					innerHTML: e.model.icons.music
				}, null, 8, Jh),
				r[1] ||= U("strong", null, "Промптов пока нет", -1),
				r[2] ||= W("Сохрани первый здесь или в Suno Studio.", -1)
			]))
		], 64));
	}
};
// src/vue/account/legacyPromptCollectionBridge.js
function Xh({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PROMPT_LIST, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-prompts-list"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, Yh, { model: n })
	});
}
// src/vue/account/PromptEditor.vue
var Zh = {
	key: 0,
	class: "sub",
	"data-sb-vue-last-idea-draft": ""
}, Qh = { class: "field" }, $h = { class: "field" }, eg = ["value"], tg = { class: "field" }, ng = {
	id: "sb-prompt-char-count",
	class: "sub"
}, rg = {
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
			F(i).ideaDraftSummary.ready ? (V(), H("p", Zh, "Последний открытый черновик идеи: " + O(F(i).ideaDraftSummary.ideaLength) + " / 3000 символов", 1)) : G("", !0),
			U("div", Qh, [a[3] ||= U("label", { for: "custom-prompt-title" }, "Название", -1), I(U("input", {
				id: "custom-prompt-title",
				"onUpdate:modelValue": a[0] ||= (e) => n.title = e,
				maxlength: "100",
				placeholder: "Например, Романтичный афро-поп"
			}, null, 512), [[q, n.title]])]),
			U("div", $h, [a[4] ||= U("label", { for: "custom-prompt-genre" }, "Жанр", -1), I(U("select", {
				id: "custom-prompt-genre",
				"onUpdate:modelValue": a[1] ||= (e) => n.genre = e
			}, [(V(!0), H(B, null, z(e.initial.genres, (e) => (V(), H("option", {
				key: e.id,
				value: e.id
			}, O(e.name), 9, eg))), 128))], 512), [[Lo, n.genre]])]),
			U("div", tg, [
				a[5] ||= U("label", { for: "custom-prompt-text" }, "Текст промпта (до 1000 символов)", -1),
				I(U("textarea", {
					id: "custom-prompt-text",
					"onUpdate:modelValue": a[2] ||= (e) => n.text = e,
					rows: "7",
					maxlength: "1000",
					"aria-describedby": "sb-prompt-char-count",
					placeholder: "Modern Russian-language afropop, 105 BPM, clean vocals, groovy bass..."
				}, null, 512), [[q, n.text]]),
				U("span", ng, O(r.value) + " / 1000 символов", 1)
			])
		], 64));
	}
};
// src/vue/account/legacyPromptEditorBridge.js
function ig({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PROMPT_EDITOR, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-prompt-form"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, rg, { initial: n })
	});
}
// src/vue/account/LibraryCollection.vue
var ag = { class: "account-back" }, og = {
	type: "button",
	class: "btn ghost small",
	"data-action": "workspace-back"
}, sg = {
	key: 0,
	class: "sb-dna-summary",
	"data-sb-vue-library-summary": ""
}, cg = { class: "section-title" }, lg = {
	key: 1,
	class: "genre-grid"
}, ug = ["data-id"], dg = { class: "genre-content" }, fg = { class: "kicker" }, pg = { class: "foot" }, mg = {
	key: 2,
	class: "empty"
}, hg = { class: "section-title" }, gg = {
	key: 3,
	class: "idea-grid"
}, _g = { class: "idea-badge" }, vg = { class: "actions" }, yg = ["data-id", "data-i"], bg = ["data-id", "data-i"], xg = {
	key: 4,
	class: "empty"
}, Sg = { class: "section-title" }, Cg = {
	key: 5,
	class: "idea-grid"
}, wg = { class: "idea-badge" }, Tg = ["data-id"], Eg = {
	key: 6,
	class: "empty"
}, Dg = { class: "section-title" }, Og = {
	key: 7,
	class: "idea-grid"
}, kg = { class: "idea-badge" }, Ag = { class: "generator-story" }, jg = { class: "generator-hook" }, Mg = {
	key: 0,
	class: "generator-detail"
}, Ng = { class: "actions" }, Pg = ["data-id"], Fg = ["data-id"], Ig = ["data-id", "aria-label"], Lg = {
	key: 8,
	class: "empty"
}, Rg = { class: "section-title" }, zg = {
	key: 9,
	class: "saved-list"
}, Bg = { class: "row" }, Vg = { class: "actions" }, Hg = ["data-id"], Ug = ["data-id", "aria-label"], Wg = { class: "sub" }, Gg = {
	key: 10,
	class: "empty"
}, Kg = {
	__name: "LibraryCollection",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = Q();
		return L(() => t.model, (e) => n.publishLibrarySummary(e), { immediate: !0 }), (t, r) => (V(), H(B, null, [
			U("div", ag, [U("button", og, O(e.model.backLabel), 1)]),
			r[14] ||= U("header", { class: "heading" }, [U("h1", null, "Моя библиотека"), U("p", null, "Любимые жанры, идеи и промпты. Сохраняются локально в этом браузере.")], -1),
			F(n).librarySummary.ready ? (V(), H("div", sg, [
				U("div", null, [U("b", null, O(F(n).librarySummary.genreCount), 1), r[0] ||= U("span", null, "Избранных жанров", -1)]),
				U("div", null, [U("b", null, O(F(n).librarySummary.totalIdeaCount), 1), r[1] ||= U("span", null, "Идей в библиотеке", -1)]),
				U("div", null, [U("b", null, O(F(n).librarySummary.promptCount), 1), r[2] ||= U("span", null, "Сохранённых промптов", -1)])
			])) : G("", !0),
			U("div", cg, [U("h2", null, "Избранные жанры (" + O(e.model.genres.length) + ")", 1)]),
			e.model.genres.length ? (V(), H("div", lg, [(V(!0), H(B, null, z(e.model.genres, (e) => (V(), H("button", {
				key: e.id,
				type: "button",
				class: "genre-card",
				style: E({ "--accent": e.color }),
				"data-action": "genre",
				"data-id": e.id
			}, [r[4] ||= U("div", { class: "art" }, null, -1), U("div", dg, [U("div", null, [
				U("div", fg, O(e.family) + " · " + O(e.bpm[0]) + "–" + O(e.bpm[1]) + " BPM", 1),
				U("h3", null, O(e.name), 1),
				U("p", null, O(e.tagline), 1)
			]), U("div", pg, [U("span", null, O(e.era), 1), r[3] ||= U("span", { style: { color: "#ffacd9" } }, "Открыть →", -1)])])], 12, ug))), 128))])) : (V(), H("div", mg, [...r[5] ||= [U("strong", null, "Пока нет избранных жанров", -1), W("Добавляй их в карточках Академии.", -1)]])),
			U("div", hg, [U("h2", null, "Сохранённые идеи (" + O(e.model.ideas.length) + ")", 1)]),
			e.model.ideas.length ? (V(), H("div", gg, [(V(!0), H(B, null, z(e.model.ideas, (e) => (V(), H("article", {
				key: e.key,
				class: "idea"
			}, [
				U("div", _g, O(e.genre) + " · " + O(e.mood), 1),
				U("h3", null, O(e.title), 1),
				U("p", null, O(e.pitch), 1),
				U("div", vg, [U("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "idea-use",
					"data-id": e.genreId,
					"data-i": e.index
				}, "В студию", 8, yg), U("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "idea-save",
					"data-id": e.genreId,
					"data-i": e.index
				}, "Сохранено", 8, bg)])
			]))), 128))])) : (V(), H("div", xg, [...r[6] ||= [U("strong", null, "Нет сохранённых идей", -1), W("Найди интересный сюжет и нажми «Сохранить».", -1)]])),
			U("div", Sg, [U("h2", null, "Мои собственные идеи (" + O(e.model.own.length) + ")", 1), r[7] ||= U("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "nav",
				"data-nav": "myideas"
			}, "Добавить или изменить →", -1)]),
			e.model.own.length ? (V(), H("div", Cg, [(V(!0), H(B, null, z(e.model.own, (e) => (V(), H("article", {
				key: e.id,
				class: "idea"
			}, [
				U("div", wg, O(e.genre), 1),
				U("h3", null, O(e.title), 1),
				U("p", null, O(e.pitch), 1),
				U("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "edit-manual-idea",
					"data-id": e.id
				}, "Открыть запись →", 8, Tg)
			]))), 128))])) : (V(), H("div", Eg, [...r[8] ||= [U("strong", null, "Пока нет своих идей", -1), W("Добавь их в личном кабинете.", -1)]])),
			U("div", Dg, [U("h2", null, "Идеи из генератора (" + O(e.model.generated.length) + ")", 1), r[9] ||= U("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "nav",
				"data-nav": "ideas"
			}, "＋ Создать ещё", -1)]),
			e.model.generated.length ? (V(), H("div", Og, [(V(!0), H(B, null, z(e.model.generated, (e) => (V(), H("article", {
				key: e.id,
				class: "idea generated-card"
			}, [
				U("div", kg, O(e.genre) + " · " + O(e.topic), 1),
				U("h3", null, O(e.title), 1),
				U("p", null, O(e.pitch), 1),
				U("p", Ag, O(e.storyLine), 1),
				U("div", jg, [r[10] ||= U("span", null, "ХУК ПРИПЕВА", -1), U("strong", null, O(e.hook), 1)]),
				e.detail ? (V(), H("p", Mg, "Твоя деталь: " + O(e.detail), 1)) : G("", !0),
				U("div", Ng, [
					U("button", {
						type: "button",
						class: "btn primary small",
						"data-action": "generated-use",
						"data-id": e.id
					}, "В Suno Studio", 8, Pg),
					U("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "generated-copy",
						"data-id": e.id
					}, "Копировать", 8, Fg),
					U("button", {
						type: "button",
						class: "btn danger small",
						"data-action": "generated-delete",
						"data-id": e.id,
						"aria-label": "Удалить идею «" + e.title + "»"
					}, "Удалить", 8, Ig)
				])
			]))), 128))])) : (V(), H("div", Lg, [...r[11] ||= [U("strong", null, "Сохранённых новых идей нет", -1), W("Создай идеи в генераторе и нажми «Сохранить».", -1)]])),
			U("div", Rg, [U("h2", null, "Мои промпты (" + O(e.model.prompts.length) + ")", 1), r[12] ||= U("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "nav",
				"data-nav": "myprompts"
			}, "Добавить или изменить →", -1)]),
			e.model.prompts.length ? (V(), H("div", zg, [(V(!0), H(B, null, z(e.model.prompts, (e) => (V(), H("article", {
				key: e.id,
				class: "saved-item"
			}, [
				U("div", Bg, [U("h3", null, O(e.title), 1), U("div", Vg, [U("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "copy-saved",
					"data-id": e.id
				}, "Копировать", 8, Hg), U("button", {
					type: "button",
					class: "btn danger small",
					"data-action": "delete-saved",
					"data-id": e.id,
					"aria-label": "Удалить промпт «" + e.title + "»"
				}, "Удалить", 8, Ug)])]),
				U("p", null, O(e.text), 1),
				U("span", Wg, O(e.date), 1)
			]))), 128))])) : (V(), H("div", Gg, [...r[13] ||= [U("strong", null, "Промптов пока нет", -1), W("Создай первый в Suno Studio и сохрани в библиотеке.", -1)]]))
		], 64));
	}
};
// src/vue/account/legacyLibraryBridge.js
function qg({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_LIBRARY, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-library-collection"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, Kg, { model: n })
	});
}
// src/vue/account/SongCards.vue
var Jg = {
	key: 0,
	class: "sbsong-artist-hint",
	"data-sb-vue-song-collection-recap": ""
}, Yg = {
	key: 1,
	class: "sbsong-grid"
}, Xg = ["data-id", "aria-label"], Zg = ["data-sbsong-cover"], Qg = ["src"], $g = { class: "sbsong-card-text" }, e_ = { class: "sbsong-card-flags" }, t_ = { class: "sbsong-card-actions" }, n_ = ["data-id"], r_ = ["data-id"], i_ = ["data-id"], a_ = {
	key: 2,
	class: "sbsong-empty"
}, o_ = {
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
		}), xr(() => window.removeEventListener("sunoboom:songs-search", i)), (e, t) => (V(), H(B, null, [F(r).songCollectionSummary.ready ? (V(), H("p", Jg, " Найдено " + O(F(r).songCollectionSummary.visibleCount) + " из " + O(F(r).songCollectionSummary.totalCount) + " песен ", 1)) : G("", !0), n.value.items.length ? (V(), H("div", Yg, [(V(!0), H(B, null, z(n.value.items, (e) => (V(), H("article", {
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
		}, null, 8, Zg)) : e.coverUrl ? (V(), H("img", {
			key: 1,
			alt: "",
			src: e.coverUrl,
			style: { display: "block" },
			loading: "lazy"
		}, null, 8, Qg)) : G("", !0), t[0] ||= U("span", {
			class: "sbsong-no-cover",
			"aria-hidden": "true"
		}, "♫", -1)], 8, Xg), U("div", $g, [
			U("small", null, O(e.genre), 1),
			U("h3", null, O(e.title), 1),
			U("p", null, O(e.artist), 1),
			U("div", e_, [U("span", null, O(e.status), 1)]),
			U("div", t_, [
				U("button", {
					type: "button",
					"data-sbsong-action": "open",
					"data-id": e.id
				}, "Открыть", 8, n_),
				U("button", {
					type: "button",
					"data-sbsong-action": "edit",
					"data-id": e.id
				}, "Изменить", 8, r_),
				U("button", {
					type: "button",
					"data-sbsong-action": "share",
					"data-id": e.id
				}, "Поделиться", 8, i_)
			])
		])]))), 128))])) : (V(), H("div", a_, O(n.value.total ? "По этому запросу песен нет." : "Песен пока нет. Добавь первую карточку и загрузи аудиофайл."), 1))], 64));
	}
};
// src/vue/account/legacySongCardsBridge.js
function s_({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SONG_CARDS, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-song-cards"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, o_, { api: t })
	});
}
// src/vue/account/SongVersions.vue
var c_ = {
	class: "sbsong-versions",
	"data-sb-vue-song-versions": "",
	"aria-label": "Версии записи"
}, l_ = { class: "sbsong-version-heading" }, u_ = { key: 0 }, d_ = { class: "sbsong-version-row-head" }, f_ = {
	key: 0,
	class: "sbsong-version-main-badge"
}, p_ = {
	key: 1,
	class: "sbsong-version-play-badge"
}, m_ = { class: "sbsong-version-actions" }, h_ = ["data-version-id"], g_ = ["data-version-id"], __ = ["data-id", "data-version-id"], v_ = ["data-version-id"], y_ = { class: "sbsong-version-notes" }, b_ = ["data-sbsong-version-title", "value"], x_ = ["data-sbsong-version-note", "value"], S_ = ["data-version-id"], C_ = { key: 0 }, w_ = {
	type: "button",
	class: "sbsong-compare-toggle",
	"data-sbsong-action": "compare-toggle"
}, T_ = {
	key: 0,
	class: "sbsong-compare-grid"
}, E_ = ["value"], D_ = ["value"], O_ = ["value"], k_ = ["value"], A_ = {
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
		return (t, n) => (V(), H("section", c_, [
			U("div", l_, [U("h3", null, "Версии записи (" + O(e.versions.length) + ")", 1), e.playingLabel ? (V(), H("small", u_, "В основном плеере: " + O(e.playingLabel), 1)) : G("", !0)]),
			(V(!0), H(B, null, z(e.versions, (t) => (V(), H("article", {
				key: t.id,
				class: "sbsong-version-row"
			}, [
				U("div", d_, [U("div", null, [
					U("strong", null, O(t.label), 1),
					t.isMain ? (V(), H("span", f_, "★ Основная")) : G("", !0),
					t.isPlaying ? (V(), H("span", p_, "♫ Выбрана")) : G("", !0),
					U("small", null, O(t.fileName) + " · " + O(t.sizeLabel) + " · " + O(t.addedDate), 1)
				])]),
				U("div", m_, [
					U("button", {
						type: "button",
						"data-sbsong-action": "version-play",
						"data-version-id": t.id
					}, "Выбрать для плеера", 8, h_),
					t.isMain ? G("", !0) : (V(), H("button", {
						key: 0,
						type: "button",
						"data-sbsong-action": "version-main",
						"data-version-id": t.id
					}, "★ Сделать основной", 8, g_)),
					U("button", {
						type: "button",
						"data-sbsong-action": "share-file",
						"data-id": e.songId,
						"data-version-id": t.id
					}, "Сохранить / отправить", 8, __),
					U("button", {
						type: "button",
						class: "sbsong-version-danger",
						"data-sbsong-action": "version-remove",
						"data-version-id": t.id
					}, "Удалить дубль", 8, v_)
				]),
				U("details", y_, [
					n[2] ||= U("summary", null, "Название и заметки", -1),
					U("label", null, [n[0] ||= W("Название версии ", -1), U("input", {
						type: "text",
						maxlength: "90",
						"data-sbsong-version-title": t.id,
						value: t.label
					}, null, 8, b_)]),
					U("label", null, [n[1] ||= W("Чем отличается этот дубль ", -1), U("textarea", {
						maxlength: "800",
						rows: "2",
						"data-sbsong-version-note": t.id,
						value: t.notes,
						placeholder: "Например: более плотный припев, удачный вокал..."
					}, null, 8, x_)]),
					U("button", {
						type: "button",
						"data-sbsong-action": "version-save",
						"data-version-id": t.id
					}, "Сохранить заметки", 8, S_)
				])
			]))), 128)),
			e.versions.length ? G("", !0) : (V(), H("p", C_, "Пока нет локальных версий. Загрузи первую запись в MP3, M4A или WAV.")),
			e.versions.length > 1 ? (V(), H(B, { key: 1 }, [U("button", w_, O(e.compareOpen ? "Скрыть сравнение A/B" : "Сравнить версии A/B"), 1), e.compareOpen ? (V(), H("div", T_, [
				U("label", null, [
					n[3] ||= W("Версия A ", -1),
					U("select", {
						id: "sbsong-compare-a",
						value: e.compareAId
					}, [(V(!0), H(B, null, z(e.versions, (e) => (V(), H("option", {
						key: e.id,
						value: e.id
					}, O(e.label), 9, D_))), 128))], 8, E_),
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
					}, O(e.label), 9, k_))), 128))], 8, O_),
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
}, j_ = { class: "sbsong-detail" }, M_ = { class: "sbsong-subhead" }, N_ = {
	key: 0,
	class: "sbsong-artist-hint",
	"data-sb-vue-song-detail-recap": ""
}, P_ = { class: "sbsong-detail-layout" }, F_ = { class: "sbsong-detail-cover" }, I_ = ["data-sbsong-cover", "alt"], L_ = ["src", "alt"], R_ = {
	key: 2,
	class: "sbsong-no-cover",
	"aria-hidden": "true"
}, z_ = { class: "sbsong-detail-artist" }, B_ = { class: "sbsong-detail-tags" }, V_ = { key: 0 }, H_ = { key: 1 }, U_ = {
	key: 0,
	class: "sbsong-detail-description"
}, W_ = {
	class: "sbsong-audio-box",
	id: "sbsong-audio-box"
}, G_ = {
	key: 0,
	controls: "",
	preload: "metadata",
	id: "sbsong-audio-player"
}, K_ = { key: 1 }, q_ = { class: "sbsong-detail-actions" }, J_ = ["data-id"], Y_ = ["data-id"], X_ = ["href"], Z_ = ["data-id"], Q_ = ["data-id"], $_ = ["data-id"], ev = {
	key: 1,
	class: "sbsong-delete-confirm"
}, tv = ["data-id"], nv = {
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
		}), (t, r) => (V(), H("section", j_, [
			U("div", M_, [U("h2", null, O(e.model.title), 1), r[0] ||= U("button", {
				type: "button",
				"data-sbsong-action": "close-detail"
			}, "Закрыть ×", -1)]),
			F(n).songCollectionSummary.ready ? (V(), H("p", N_, " В личной коллекции: " + O(F(n).songCollectionSummary.totalCount) + " песен ", 1)) : G("", !0),
			U("div", P_, [U("div", F_, [e.model.hasCover ? (V(), H("img", {
				key: 0,
				"data-sbsong-cover": e.model.id,
				alt: "Обложка песни " + e.model.title
			}, null, 8, I_)) : e.model.coverUrl ? (V(), H("img", {
				key: 1,
				src: e.model.coverUrl,
				alt: "Обложка песни " + e.model.title,
				style: { display: "block" }
			}, null, 8, L_)) : (V(), H("span", R_, "♫"))]), U("div", null, [
				U("p", z_, O(e.model.artist), 1),
				U("p", B_, [e.model.genre ? (V(), H("span", V_, O(e.model.genre), 1)) : G("", !0), e.model.album ? (V(), H("span", H_, O(e.model.album), 1)) : G("", !0)]),
				e.model.description ? (V(), H("p", U_, O(e.model.description), 1)) : G("", !0),
				U("div", W_, [e.model.hasPlayableAudio ? (V(), H("audio", G_)) : (V(), H("p", K_, "Аудио ещё не добавлено. Добавь первую версию в этой карточке."))]),
				sa(A_, {
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
				U("div", q_, [
					U("button", {
						type: "button",
						class: "sbsong-main-btn",
						"data-sbsong-action": "share",
						"data-id": e.model.id
					}, "🔗 Поделиться ссылкой", 8, J_),
					e.model.hasAudio ? (V(), H("button", {
						key: 0,
						type: "button",
						"data-sbsong-action": "share-file",
						"data-id": e.model.id
					}, "Отправить аудиофайл", 8, Y_)) : G("", !0),
					e.model.listenUrl ? (V(), H("a", {
						key: 1,
						href: e.model.listenUrl,
						target: "_blank",
						rel: "noopener noreferrer"
					}, "Открыть публичную запись ↗", 8, X_)) : G("", !0),
					U("button", {
						type: "button",
						"data-sbsong-action": "producer",
						"data-id": e.model.id
					}, "🎛 Мастер", 8, Z_),
					U("button", {
						type: "button",
						"data-sbsong-action": "edit",
						"data-id": e.model.id
					}, "Изменить", 8, Q_),
					U("button", {
						type: "button",
						class: "sbsong-danger",
						"data-sbsong-action": "delete",
						"data-id": e.model.id
					}, "Удалить", 8, $_)
				]),
				e.model.confirmDelete ? (V(), H("div", ev, [
					r[1] ||= U("strong", null, "Удалить карточку вместе с локальными файлами?", -1),
					U("button", {
						type: "button",
						"data-sbsong-action": "delete-confirm",
						"data-id": e.model.id
					}, "Да, удалить", 8, tv),
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
function rv({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SONG_DETAIL, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-song-detail"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, nv, {
			api: t,
			model: r
		})
	});
}
// src/vue/account/SongEditor.vue
var iv = {
	id: "sbsong-form",
	class: "sbsong-form-panel"
}, av = { class: "sbsong-subhead" }, ov = {
	id: "sbsong-save-form",
	class: "sbsong-form"
}, sv = { class: "sbsong-form-columns" }, cv = { class: "sbsong-field" }, lv = { class: "sbsong-artist-field" }, uv = {
	class: "sbsong-field",
	for: "sbsong-artist-input"
}, dv = ["aria-expanded"], fv = {
	id: "sbsong-artist-options",
	class: "sbsong-artist-options",
	role: "listbox",
	"aria-label": "Список артистов"
}, pv = ["onClick"], mv = {
	key: 0,
	class: "sbsong-artist-hint"
}, hv = {
	key: 1,
	class: "sbsong-artist-hint"
}, gv = { class: "sbsong-genre-field" }, _v = {
	class: "sbsong-field",
	for: "sbsong-genre-input"
}, vv = ["aria-expanded"], yv = ["aria-expanded"], bv = {
	id: "sbsong-genre-options",
	class: "sbsong-genre-options",
	role: "region",
	"aria-label": "Выбор жанра из Академии"
}, xv = { class: "sbsong-genre-picker-head" }, Sv = ["value"], Cv = {
	id: "sbsong-genre-results",
	class: "sbsong-genre-results",
	role: "listbox",
	"aria-label": "Жанры и поджанры"
}, wv = ["aria-label"], Tv = { class: "sbsong-genre-group-title" }, Ev = ["onClick"], Dv = {
	key: 0,
	class: "sbsong-genre-hint"
}, Ov = { class: "sbsong-field" }, kv = { class: "sbsong-field" }, Av = { class: "sbsong-form-columns" }, jv = { class: "sbsong-field" }, Mv = {
	class: "sbsong-cover-auto",
	"aria-live": "polite"
}, Nv = { id: "sbsong-cover-status" }, Pv = { class: "sbsong-form-columns" }, Fv = { class: "sbsong-field" }, Iv = { class: "sbsong-field" }, Lv = { class: "sbsong-field" }, Rv = {
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
		}), xr(() => document.removeEventListener("pointerdown", x)), (t, d) => (V(), H("section", iv, [U("div", av, [U("h2", null, O(e.model.editId ? "Изменить песню" : "Новая песня"), 1), d[16] ||= U("button", {
			type: "button",
			"data-sbsong-action": "cancel"
		}, "Закрыть ×", -1)]), U("form", ov, [
			U("div", sv, [
				U("label", cv, [d[17] ||= U("span", null, "Название *", -1), I(U("input", {
					"onUpdate:modelValue": d[0] ||= (e) => n.title = e,
					type: "text",
					name: "title",
					maxlength: "120",
					placeholder: "Название песни"
				}, null, 512), [[q, n.title]])]),
				U("div", lv, [
					U("label", uv, [d[18] ||= U("span", null, "Исполнитель / проект", -1), I(U("input", {
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
						onKeydown: d[4] ||= Go(J((e) => r.value = !1, ["prevent"]), ["esc"])
					}, null, 40, dv), [[q, n.artist]])]),
					U("div", { class: "sbsong-artist-shortcuts" }, [U("button", {
						type: "button",
						onClick: y
					}, "▾ Выбрать из списка"), U("button", {
						type: "button",
						onClick: g
					}, "+ Сохранить артиста")]),
					I(U("div", fv, [
						(V(!0), H(B, null, z(f.value, (e) => (V(), H("button", {
							key: e.name,
							type: "button",
							role: "option",
							class: "sbsong-artist-option",
							onClick: (t) => _(e.name)
						}, [U("strong", null, O(e.name), 1), U("small", null, O(e.origin), 1)], 8, pv))), 128)),
						p.value ? (V(), H("p", mv, "Уточни поиск, чтобы увидеть остальные варианты.")) : G("", !0),
						f.value.length ? G("", !0) : (V(), H("p", hv, O(a.value.length ? "Совпадений нет. Нового артиста можно сохранить кнопкой выше." : "Список пуст. Введи имя и сохрани первого артиста."), 1))
					], 512), [[$a, r.value]])
				]),
				U("div", gv, [
					U("label", _v, [d[19] ||= U("span", null, "Жанр", -1), I(U("input", {
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
						onKeydown: d[8] ||= Go(J((e) => o.value = !1, ["prevent"]), ["esc"])
					}, null, 40, vv), [[q, n.genre]])]),
					U("button", {
						type: "button",
						class: "sbsong-genre-toggle",
						"aria-controls": "sbsong-genre-options",
						"aria-expanded": String(o.value),
						onClick: b
					}, "▾ Выбрать из Академии", 8, yv),
					I(U("div", bv, [U("div", xv, [
						d[21] ||= U("label", { for: "sbsong-genre-family" }, "Направление", -1),
						I(U("select", {
							id: "sbsong-genre-family",
							"onUpdate:modelValue": d[9] ||= (e) => c.value = e,
							"aria-label": "Фильтр по направлению",
							onChange: d[10] ||= (e) => s.value = !0
						}, [d[20] ||= U("option", { value: "Все" }, "Все направления", -1), (V(!0), H(B, null, z(u.value, (e) => (V(), H("option", {
							key: e,
							value: e
						}, O(e), 9, Sv))), 128))], 544), [[Lo, c.value]]),
						U("small", null, O(m.value.length) + " из " + O(l.value.length), 1)
					]), U("div", Cv, [(V(!0), H(B, null, z(h.value, (e) => (V(), H("div", {
						key: e.name,
						class: "sbsong-genre-group",
						role: "group",
						"aria-label": e.name
					}, [U("div", Tv, [W(O(e.name) + " ", 1), U("span", null, O(e.genres.length), 1)]), (V(!0), H(B, null, z(e.genres, (e) => (V(), H("button", {
						key: e.id,
						type: "button",
						class: "sbsong-genre-option",
						role: "option",
						onClick: (t) => v(e.name)
					}, [U("span", null, O(e.name), 1)], 8, Ev))), 128))], 8, wv))), 128)), m.value.length ? G("", !0) : (V(), H("p", Dv, O(l.value.length ? "Не найдено. Можно ввести свой жанр вручную." : "Каталог Академии пока недоступен. Введи жанр вручную."), 1))])], 512), [[$a, o.value]])
				]),
				U("label", Ov, [d[22] ||= U("span", null, "Альбом / релиз", -1), I(U("input", {
					"onUpdate:modelValue": d[11] ||= (e) => n.album = e,
					type: "text",
					name: "album",
					maxlength: "120",
					placeholder: "Название альбома"
				}, null, 512), [[q, n.album]])])
			]),
			U("label", kv, [d[23] ||= U("span", null, "Описание", -1), I(U("textarea", {
				"onUpdate:modelValue": d[12] ||= (e) => n.description = e,
				name: "description",
				maxlength: "700",
				rows: "3",
				placeholder: "История, настроение или заметки"
			}, null, 512), [[q, n.description]])]),
			U("div", Av, [U("label", jv, [U("span", null, O(e.model.hasAudio ? "Добавить новую аудиоверсию" : "Загрузить аудиофайл (MP3, M4A, WAV и другие)"), 1), d[24] ||= U("input", {
				name: "audio",
				type: "file",
				accept: "audio/*,.mp3,.wav,.wave,.m4a,.aac,.flac,.ogg,.opus"
			}, null, -1)]), d[25] ||= U("label", { class: "sbsong-field" }, [U("span", null, "Обложка вручную (необязательно)"), U("input", {
				name: "cover",
				type: "file",
				accept: "image/png,image/jpeg,image/webp,image/gif"
			})], -1)]),
			U("div", Mv, [d[28] ||= U("div", { class: "sbsong-cover-preview-figure" }, [U("img", {
				id: "sbsong-cover-preview-img",
				alt: "Предпросмотр обложки",
				hidden: ""
			}), U("span", {
				id: "sbsong-cover-preview-placeholder",
				"aria-hidden": "true"
			}, "♫")], -1), U("div", null, [
				d[26] ||= U("strong", null, "Обложка из аудиофайла", -1),
				U("p", Nv, O(e.model.hasCover ? "Загружаю сохранённую обложку…" : "Выбери MP3, M4A или FLAC — попробую найти обложку автоматически"), 1),
				d[27] ||= U("small", null, "Ручная обложка имеет приоритет, если ты её выберешь.", -1)
			])]),
			U("div", Pv, [
				U("label", Fv, [d[29] ||= U("span", null, "Прямая ссылка на MP3 (если есть)", -1), I(U("input", {
					"onUpdate:modelValue": d[13] ||= (e) => n.audioUrl = e,
					type: "text",
					name: "audioUrl",
					maxlength: "700",
					placeholder: "https://.../song.mp3"
				}, null, 512), [[q, n.audioUrl]])]),
				U("label", Iv, [d[30] ||= U("span", null, "Публичная страница песни", -1), I(U("input", {
					"onUpdate:modelValue": d[14] ||= (e) => n.listenUrl = e,
					type: "text",
					name: "listenUrl",
					maxlength: "700",
					placeholder: "https://suno.com/..."
				}, null, 512), [[q, n.listenUrl]])]),
				U("label", Lv, [d[31] ||= U("span", null, "Публичная обложка (по желанию)", -1), I(U("input", {
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
function zv({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SONG_EDITOR, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-song-editor"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, Rv, {
			api: t,
			model: r
		})
	});
}
// src/vue/account/ArtistManager.vue
var Bv = {
	id: "sbsong-artist-manager",
	class: "sbsong-artist-manager",
	"data-sb-vue-artist-manager": ""
}, Vv = {
	key: 0,
	class: "sbsong-artist-hint"
}, Hv = {
	key: 1,
	class: "sbsong-artist-hint",
	"data-sb-vue-dna-recap": ""
}, Uv = { id: "sbsong-artist-manager-results" }, Wv = ["data-id", "aria-label"], Gv = {
	key: 0,
	class: "sbsong-artist-hint"
}, Kv = {
	__name: "ArtistManager",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ N(t.model.filter || ""), r = (e) => String(e || "").normalize("NFKC").toLocaleLowerCase("ru"), i = K(() => t.model.artists.filter((e) => r(e.name).includes(r(n.value)))), a = Q();
		return L(() => [t.model, i.value.length], ([e, t]) => a.publishArtistManagerSummary(e, t), { immediate: !0 }), (t, r) => (V(), H("section", Bv, [
			r[1] ||= U("div", { class: "sbsong-subhead" }, [U("h2", null, "Мои артисты"), U("button", {
				type: "button",
				"data-sbsong-action": "artists-manage"
			}, "Закрыть ×")], -1),
			r[2] ||= U("p", null, "Создавай свой список исполнителей и музыкальных проектов. Артисты из «ДНК артиста» и сохранённых песен также доступны при выборе. Удаление из списка не меняет существующие песни.", -1),
			e.model.dnaCount ? (V(), H("p", Vv, " Профилей ДНК артиста доступно для выбора: " + O(e.model.dnaCount) + ". Они не удаляются при изменении этого списка. ", 1)) : G("", !0),
			F(a).artistDnaSummary.ready ? (V(), H("p", Hv, " Последний просмотр ДНК артиста: " + O(F(a).artistDnaSummary.profileCount) + " профилей ", 1)) : G("", !0),
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
			U("div", Uv, [(V(!0), H(B, null, z(i.value, (e) => (V(), H("div", {
				key: e.id,
				class: "sbsong-artist-entry"
			}, [U("span", null, O(e.name), 1), U("button", {
				type: "button",
				"data-sbsong-action": "artist-remove",
				"data-id": e.id,
				"aria-label": "Удалить артиста " + e.name
			}, "Удалить", 8, Wv)]))), 128)), i.value.length ? G("", !0) : (V(), H("p", Gv, O(e.model.artists.length ? "Ничего не найдено." : "Пока нет добавленных вручную артистов."), 1))])
		]));
	}
};
// src/vue/account/legacyArtistManagerBridge.js
function qv({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ARTIST_MANAGER, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-artist-manager"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, Kv, { model: n })
	});
}
// src/vue/account/ArtistDNA.vue
var Jv = {
	key: 0,
	class: "sb-dna-summary",
	"data-sb-vue-artist-manager-recap": ""
}, Yv = { key: 1 }, Xv = {
	key: 0,
	class: "sb-dna-grid"
}, Zv = ["data-id"], Qv = { class: "sb-dna-cardimg" }, $v = ["src"], ey = {
	key: 1,
	class: "sb-dna-empty"
}, ty = {
	key: 2,
	class: "sb-dna-detail"
}, ny = { class: "sb-dna-actions" }, ry = ["data-id"], iy = ["data-id"], ay = ["data-id"], oy = { class: "sb-dna-hero" }, sy = { class: "sb-dna-portrait" }, cy = ["src"], ly = { class: "sb-dna-facts" }, uy = {
	key: 0,
	class: "sb-dna-restrictions"
}, dy = { class: "sb-dna-descr" }, fy = { class: "sb-dna-style" }, py = { class: "sb-dna-actions" }, my = ["data-id"], hy = ["data-id"], gy = { class: "sb-dna-related" }, _y = ["data-id"], vy = { key: 1 }, yy = {
	__name: "ArtistDNA",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = Q();
		return L(() => t.model, (e) => n.publishArtistDnaSummary(e), { immediate: !0 }), (t, r) => (V(), H(B, null, [F(n).artistManagerSummary.ready ? (V(), H("div", Jv, [U("div", null, [U("b", null, O(F(n).artistManagerSummary.artistCount), 1), r[0] ||= U("span", null, "В ручном списке артистов", -1)])])) : G("", !0), e.model.detail ? (V(), H("div", ty, [
			U("div", ny, [
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
				}, "В Suno Studio", 8, ry),
				U("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "dna-edit",
					"data-id": e.model.detail.id
				}, "Изменить", 8, iy),
				U("button", {
					type: "button",
					class: "btn danger small",
					"data-action": "dna-delete",
					"data-id": e.model.detail.id
				}, "Удалить", 8, ay)
			]),
			U("div", oy, [U("div", sy, [e.model.detail.portrait ? (V(), H("img", {
				key: 0,
				src: e.model.detail.portrait,
				alt: "Портрет артиста",
				loading: "lazy"
			}, null, 8, cy)) : (V(), H(B, { key: 1 }, [W("♫")], 64))]), U("div", null, [
				r[3] ||= U("span", null, "МУЗЫКАЛЬНАЯ ИДЕНТИЧНОСТЬ", -1),
				U("h2", null, O(e.model.detail.name), 1),
				U("p", null, O(e.model.detail.subtitle), 1)
			])]),
			U("div", ly, [(V(!0), H(B, null, z(e.model.detail.facts, (e) => (V(), H("div", {
				key: e.label,
				class: "sb-dna-fact"
			}, [U("span", null, O(e.label), 1), U("strong", null, O(e.value), 1)]))), 128))]),
			(V(!0), H(B, null, z(e.model.detail.textFields, (e) => (V(), H("section", {
				key: e.label,
				class: "sb-dna-descr"
			}, [U("h3", null, O(e.label), 1), U("p", null, O(e.value), 1)]))), 128)),
			e.model.detail.forbids.length ? (V(), H("div", uy, [r[4] ||= U("strong", null, "Запреты:", -1), (V(!0), H(B, null, z(e.model.detail.forbids, (e) => (V(), H("span", { key: e }, O(e), 1))), 128))])) : G("", !0),
			U("section", dy, [
				r[5] ||= U("h3", null, "Промпт для Suno Style", -1),
				U("div", fy, O(e.model.detail.style), 1),
				U("div", py, [U("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "dna-copy",
					"data-id": e.model.detail.id
				}, "Копировать Style", 8, my), U("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "dna-apply",
					"data-id": e.model.detail.id
				}, "Применить в Suno Studio", 8, hy)])
			]),
			U("div", gy, [U("h3", null, "Связанные паспорта треков (" + O(e.model.detail.related.length) + ")", 1), e.model.detail.related.length ? (V(!0), H(B, { key: 0 }, z(e.model.detail.related, (e) => (V(), H("button", {
				key: e.id,
				type: "button",
				class: "sb-dna-tracklink",
				"data-action": "dna-track",
				"data-id": e.id
			}, [U("strong", null, O(e.title), 1), U("span", null, O(e.status) + " →", 1)], 8, _y))), 128)) : (V(), H("p", vy, "Пока нет привязанных треков. В «Паспорте трека» можно выбрать этого артиста."))])
		])) : (V(), H("div", Yv, [e.model.profiles.length ? (V(), H("div", Xv, [(V(!0), H(B, null, z(e.model.profiles, (e) => (V(), H("button", {
			key: e.id,
			type: "button",
			class: "sb-dna-card",
			"data-action": "dna-open",
			"data-id": e.id
		}, [
			U("div", Qv, [e.portrait ? (V(), H("img", {
				key: 0,
				src: e.portrait,
				alt: "",
				loading: "lazy"
			}, null, 8, $v)) : (V(), H(B, { key: 1 }, [W("♫")], 64))]),
			U("div", null, [
				U("strong", null, O(e.name), 1),
				U("span", null, O(e.genre), 1),
				U("small", null, O(e.timbre), 1)
			]),
			r[1] ||= U("span", { class: "sb-dna-arrow" }, "→", -1)
		], 8, Zv))), 128))])) : (V(), H("div", ey, " Здесь будут музыкальные персонажи со своим вокалом, инструментами, стилем и визуальным образом. Создай первый профиль. "))]))], 64));
	}
};
// src/vue/account/legacyArtistDNABridge.js
function by({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_DNA, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-dna-view"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, yy, { model: n })
	});
}
// src/vue/account/ArtistDNAEditor.vue
var xy = {
	id: "dna-editor",
	class: "panel sb-dna-editor",
	"data-sb-vue-dna-editor": ""
}, Sy = { class: "sb-dna-formheader" }, Cy = { class: "sb-dna-fields" }, wy = { class: "field" }, Ty = { class: "field" }, Ey = ["value"], Dy = { class: "field" }, Oy = ["value"], ky = { class: "field" }, Ay = { class: "field" }, jy = { class: "field" }, My = {
	key: 0,
	class: "sb-dna-fields"
}, Ny = { class: "field" }, Py = { class: "field" }, Fy = { class: "field" }, Iy = ["for"], Ly = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"rows"
], Ry = { class: "sb-dna-checkboxes" }, zy = ["id", "onUpdate:modelValue"], By = { class: "field" }, Vy = ["for"], Hy = [
	"id",
	"onUpdate:modelValue",
	"rows",
	"maxlength"
], Uy = { class: "field" }, Wy = { class: "sb-dna-previewbox" }, Gy = { id: "dna-style-preview" }, Ky = { id: "dna-style-count" }, qy = {
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
		return (t, s) => (V(), H("div", xy, [
			U("div", Sy, [U("div", null, [U("h2", null, O(e.model.editing ? "Редактирование ДНК" : "Новый артист"), 1), s[10] ||= U("p", null, "Сохрани характер звучания — он будет доступен в Suno Studio и «Паспорте трека».", -1)]), s[11] ||= U("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "dna-cancel"
			}, "Закрыть", -1)]),
			U("div", Cy, [
				U("div", wy, [s[12] ||= U("label", { for: "dna-name" }, "Имя артиста *", -1), I(U("input", {
					id: "dna-name",
					"onUpdate:modelValue": s[0] ||= (e) => n.name = e,
					maxlength: "120",
					placeholder: "Название музыкального проекта"
				}, null, 512), [[q, n.name]])]),
				U("div", Ty, [s[13] ||= U("label", { for: "dna-project" }, "Связанный проект", -1), I(U("select", {
					id: "dna-project",
					"onUpdate:modelValue": s[1] ||= (e) => n.projectId = e
				}, [(V(!0), H(B, null, z(e.model.projects, (e) => (V(), H("option", {
					key: e.id,
					value: e.id
				}, O(e.title), 9, Ey))), 128))], 512), [[Lo, n.projectId]])]),
				U("div", Dy, [s[14] ||= U("label", { for: "dna-genre" }, "Основной жанр", -1), I(U("select", {
					id: "dna-genre",
					"onUpdate:modelValue": s[2] ||= (e) => n.genre = e
				}, [(V(!0), H(B, null, z(e.model.genres, (e) => (V(), H("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, Oy))), 128))], 512), [[Lo, n.genre]])]),
				U("div", ky, [s[15] ||= U("label", { for: "dna-othergenres" }, "Дополнительные жанры", -1), I(U("input", {
					id: "dna-othergenres",
					"onUpdate:modelValue": s[3] ||= (e) => n.otherGenres = e,
					maxlength: "240",
					placeholder: "Например, pop, R&B, electropop"
				}, null, 512), [[q, n.otherGenres]])]),
				U("div", Ay, [s[17] ||= U("label", { for: "dna-vocal" }, "Тип вокала", -1), I(U("select", {
					id: "dna-vocal",
					"onUpdate:modelValue": s[4] ||= (e) => n.vocal = e
				}, [...s[16] ||= [
					U("option", { value: "male" }, "Мужской", -1),
					U("option", { value: "female" }, "Женский", -1),
					U("option", { value: "duet" }, "Дуэт", -1)
				]], 512), [[Lo, n.vocal]])]),
				U("div", jy, [s[19] ||= U("label", { for: "dna-language" }, "Язык песни", -1), I(U("select", {
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
			(V(), H(B, null, z(i, (e) => (V(), H(B, { key: e.id }, [e.id === "mood" ? (V(), H("div", My, [U("div", Ny, [s[20] ||= U("label", { for: "dna-tempo-min" }, "Темп от (BPM)", -1), I(U("input", {
				id: "dna-tempo-min",
				"onUpdate:modelValue": s[6] ||= (e) => n.tempoMin = e,
				maxlength: "3",
				placeholder: "Например, 90"
			}, null, 512), [[q, n.tempoMin]])]), U("div", Py, [s[21] ||= U("label", { for: "dna-tempo-max" }, "Темп до (BPM)", -1), I(U("input", {
				id: "dna-tempo-max",
				"onUpdate:modelValue": s[7] ||= (e) => n.tempoMax = e,
				maxlength: "3",
				placeholder: "Например, 120"
			}, null, 512), [[q, n.tempoMax]])])])) : G("", !0), U("div", Fy, [U("label", { for: "dna-" + e.id }, O(e.label), 9, Iy), I(U("textarea", {
				id: "dna-" + e.id,
				"onUpdate:modelValue": (t) => n[e.key] = t,
				maxlength: e.max,
				rows: e.rows
			}, null, 8, Ly), [[q, n[e.key]]])])], 64))), 64)),
			s[25] ||= U("h3", { class: "sb-dna-formsection" }, "Запреты и ограничения", -1),
			U("div", Ry, [(V(), H(B, null, z(a, (e) => U("label", { key: e.id }, [I(U("input", {
				id: "dna-" + e.id,
				"onUpdate:modelValue": (t) => n[e.key] = t,
				type: "checkbox"
			}, null, 8, zy), [[Fo, n[e.key]]]), W(" " + O(e.label), 1)])), 64))]),
			U("div", By, [s[22] ||= U("label", { for: "dna-extra" }, "Дополнительные требования к аранжировке", -1), I(U("textarea", {
				id: "dna-extra",
				"onUpdate:modelValue": s[8] ||= (e) => n.extra = e,
				rows: "3",
				maxlength: "650"
			}, null, 512), [[q, n.extra]])]),
			s[26] ||= U("h3", { class: "sb-dna-formsection" }, "Творческий образ", -1),
			(V(), H(B, null, z(o, (e) => U("div", {
				key: e.id,
				class: "field"
			}, [U("label", { for: "dna-" + e.id }, O(e.label), 9, Vy), I(U("textarea", {
				id: "dna-" + e.id,
				"onUpdate:modelValue": (t) => n[e.key] = t,
				rows: e.rows,
				maxlength: e.max
			}, null, 8, Hy), [[q, n[e.key]]])])), 64)),
			U("div", Uy, [s[23] ||= U("label", { for: "dna-portrait" }, "Ссылка на портрет (HTTPS)", -1), I(U("input", {
				id: "dna-portrait",
				"onUpdate:modelValue": s[9] ||= (e) => n.portrait = e,
				maxlength: "2000",
				placeholder: "https://…"
			}, null, 512), [[q, n.portrait]])]),
			s[27] ||= U("h3", { class: "sb-dna-formsection" }, "Промпт ДНК для Suno", -1),
			U("div", Wy, [U("div", Gy, O(r.value), 1), U("span", Ky, O(r.value.length) + " / 1000", 1)]),
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
function Jy({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_DNA_EDITOR, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-dna-editor"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, qy, {
			model: r,
			api: t
		})
	});
}
// src/vue/account/AccountSettings.vue
var Yy = ["data-sb-preferred-theme", "data-sb-applied-theme"], Xy = { class: "sbs-layout" }, Zy = { class: "sbs-main-column" }, Qy = { class: "sbs-panel" }, $y = {
	class: "sbs-field sbs-theme-field",
	for: "sbs-theme"
}, eb = ["value"], tb = ["for"], nb = { class: "sbs-option-text" }, rb = { class: "sbs-switch" }, ib = [
	"id",
	"onUpdate:modelValue",
	"data-sbs-setting",
	"aria-label"
], ab = { class: "sbs-panel" }, ob = {
	class: "sbs-field",
	for: "sbs-start"
}, sb = ["value"], cb = { class: "sbs-panel" }, lb = {
	class: "sbs-field",
	for: "sbs-name"
}, ub = { class: "sbs-side-column" }, db = { class: "sbs-panel sbs-reset-panel" }, fb = {
	key: 0,
	class: "sbs-confirm"
}, pb = {
	key: 1,
	type: "button",
	class: "sbs-secondary",
	"data-sbs-action": "reset"
}, mb = ["hidden"], hb = {
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
			U("div", Xy, [U("div", Zy, [
				U("section", Qy, [
					o[5] ||= U("div", { class: "sbs-panel-head" }, [U("span", {
						class: "sbs-symbol",
						"aria-hidden": "true"
					}, "🎨"), U("div", null, [U("h2", null, "Внешний вид"), U("p", null, "Удобная работа на компьютере и телефоне")])], -1),
					U("label", $y, [o[3] ||= U("span", null, "Тема приложения", -1), I(U("select", {
						id: "sbs-theme",
						"onUpdate:modelValue": o[0] ||= (e) => r.theme = e,
						"data-sbs-setting": "theme",
						"aria-label": "Тема приложения"
					}, [(V(!0), H(B, null, z(e.model.themes, (e) => (V(), H("option", {
						key: e.id,
						value: e.id
					}, O(e.title), 9, eb))), 128))], 512), [[Lo, r.theme]])]),
					o[6] ||= U("p", { class: "sbs-help sbs-theme-help" }, "Выбери палитру: тёмную, светлую, системную или одну из шести цветных тем. Изменения сохраняются.", -1),
					(V(), H(B, null, z(a, (e) => U("label", {
						key: e.key,
						class: "sbs-option",
						for: "sbs-" + e.key
					}, [U("span", nb, [U("strong", null, O(e.title), 1), U("small", null, O(e.desc), 1)]), U("span", rb, [I(U("input", {
						id: "sbs-" + e.key,
						"onUpdate:modelValue": (t) => r[e.key] = t,
						type: "checkbox",
						"data-sbs-setting": e.key,
						role: "switch",
						"aria-label": e.title
					}, null, 8, ib), [[Fo, r[e.key]]]), o[4] ||= U("span", {
						class: "sbs-switch-track",
						"aria-hidden": "true"
					}, null, -1)])], 8, tb)), 64))
				]),
				U("section", ab, [
					o[8] ||= U("div", { class: "sbs-panel-head" }, [U("span", {
						class: "sbs-symbol",
						"aria-hidden": "true"
					}, "🏠"), U("div", null, [U("h2", null, "При открытии сайта"), U("p", null, "Выбери стартовый раздел SUNOBOOM")])], -1),
					U("label", ob, [o[7] ||= U("span", null, "Стартовая страница", -1), I(U("select", {
						id: "sbs-start",
						"onUpdate:modelValue": o[1] ||= (e) => r.startPage = e,
						"data-sbs-setting": "startPage"
					}, [(V(!0), H(B, null, z(e.model.pages, (e) => (V(), H("option", {
						key: e.id,
						value: e.id
					}, O(e.title), 9, sb))), 128))], 512), [[Lo, r.startPage]])]),
					o[9] ||= U("p", { class: "sbs-help" }, "Применяется при следующем открытии или обновлении сайта. Ссылки на конкретные карточки жанров сохраняют свой переход.", -1)
				]),
				U("section", cb, [
					o[11] ||= U("div", { class: "sbs-panel-head" }, [U("span", {
						class: "sbs-symbol",
						"aria-hidden": "true"
					}, "👤"), U("div", null, [U("h2", null, "Профиль"), U("p", null, "Имя отображается только в локальном кабинете")])], -1),
					U("label", lb, [o[10] ||= U("span", null, "Имя в кабинете", -1), I(U("input", {
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
			]), U("aside", ub, [o[16] ||= da("<section class=\"sbs-panel\"><div class=\"sbs-panel-head\"><span class=\"sbs-symbol\" aria-hidden=\"true\">🔒</span><div><h2>Данные и приватность</h2></div></div><p class=\"sbs-info\">Сейчас SUNOBOOM работает как локальный прототип: твои проекты и настройки сохраняются в браузере. Синхронизации между устройствами пока нет.</p><p class=\"sbs-info\">GitHub Pages остаётся публичной демонстрационной площадкой — полноценный закрытый вход по приглашениям ещё не подключён.</p><button type=\"button\" class=\"sbs-secondary\" data-sbs-action=\"backup\">↓ Перейти к резервным копиям</button></section>", 1), U("section", db, [
				o[14] ||= U("div", { class: "sbs-panel-head" }, [U("span", {
					class: "sbs-symbol",
					"aria-hidden": "true"
				}, "↺"), U("div", null, [U("h2", null, "Сброс предпочтений")])], -1),
				o[15] ||= U("p", { class: "sbs-info" }, "Вернуть стандартные параметры отображения. Песни, проекты, избранное и имя профиля не удаляются.", -1),
				e.model.resetPending ? (V(), H("div", fb, [...o[13] ||= [U("strong", null, "Сбросить настройки интерфейса?", -1), U("div", null, [U("button", {
					type: "button",
					class: "sbs-secondary",
					"data-sbs-action": "cancel-reset"
				}, "Отмена"), U("button", {
					type: "button",
					class: "sbs-confirm-button",
					"data-sbs-action": "confirm-reset"
				}, "Да, сбросить")], -1)]])) : (V(), H("button", pb, "Сбросить настройки"))
			])])]),
			U("p", {
				id: "sbs-message",
				class: "sbs-message",
				role: "status",
				"aria-live": "polite",
				hidden: !e.model.message
			}, O(e.model.message), 9, mb)
		], 8, Yy));
	}
};
// src/vue/account/legacyAccountSettingsBridge.js
function gb({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SETTINGS, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-account-settings"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, hb, { model: n })
	});
}
// src/vue/player/PlayerLab.vue
var _b = {
	class: "sbp-layout",
	"data-sb-vue-player-lab": ""
}, vb = {
	class: "sbp-main",
	"aria-label": "Плеер"
}, yb = {
	class: "sbp-bars",
	"aria-hidden": "true"
}, bb = { class: "sbp-title-area" }, xb = {
	id: "sbp-now-tag",
	class: "sbp-now-tag"
}, Sb = { id: "sbp-title" }, Cb = { id: "sbp-artist" }, wb = {
	id: "sbp-counter",
	class: "sbp-counter"
}, Tb = {
	key: 0,
	class: "sbp-now-tag",
	"data-sb-vue-ab-recap": ""
}, Eb = { class: "sbp-progress" }, Db = ["value", "disabled"], Ob = { class: "sbp-times" }, kb = { id: "sbp-time-current" }, Ab = { id: "sbp-time-total" }, jb = { class: "sbp-transport" }, Mb = ["aria-pressed"], Nb = ["aria-label", "disabled"], Pb = ["title", "aria-label"], Fb = { class: "sbp-extras" }, Ib = { class: "sbp-volume" }, Lb = {
	key: 0,
	class: "sbp-ios-volume"
}, Rb = ["value"], zb = { id: "sbp-volume-label" }, Bb = {
	class: "sbp-speed",
	for: "sbp-rate"
}, Vb = ["value"], Hb = ["value"], Ub = { class: "sbp-side" }, Wb = { class: "sbp-side-head" }, Gb = { id: "sbp-list-count" }, Kb = ["disabled"], qb = {
	class: "sbp-track-list",
	id: "sbp-list",
	"aria-label": "Список треков"
}, Jb = ["data-sbp-item"], Yb = ["data-index", "aria-label"], Xb = { class: "sbp-track-index" }, Zb = { class: "sbp-track-meta" }, Qb = { class: "sbp-track-duration" }, $b = ["data-index", "aria-label"], ex = {
	key: 0,
	class: "sbp-empty"
}, tx = {
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
		return (e, t) => (V(), H("div", _b, [U("section", vb, [
			U("div", { class: D(["sbp-art", { "is-playing": n.value.playing }]) }, [
				t[0] ||= U("div", { class: "sbp-art-orb" }, "♫", -1),
				U("div", yb, [(V(!0), H(B, null, z(F(a), (e) => (V(), H("i", {
					key: e.index,
					style: E({
						"--sbp-i": e.index,
						"--sbp-h": e.height
					})
				}, null, 4))), 128))]),
				t[1] ||= U("span", null, "SONIC LAB / PRIVATE PREVIEW", -1)
			], 2),
			U("div", bb, [U("div", null, [
				U("div", xb, O(n.value.nowTag), 1),
				U("h2", Sb, O(n.value.title), 1),
				U("p", Cb, O(n.value.artist), 1)
			]), U("span", wb, O(n.value.counter), 1)]),
			F(r).playerAbSummary.ready && F(r).playerAbSummary.readyCount ? (V(), H("p", Tb, "A/B: загружено " + O(F(r).playerAbSummary.readyCount) + " из 2 · активна " + O(F(r).playerAbSummary.active), 1)) : G("", !0),
			U("div", Eb, [
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
				}, null, 12, Db),
				U("div", Ob, [U("span", kb, O(n.value.currentTime), 1), U("span", Ab, O(n.value.totalTime), 1)])
			]),
			U("div", jb, [
				U("button", {
					type: "button",
					class: D(["sbp-secondary", { "is-on": n.value.shuffle }]),
					id: "sbp-shuffle",
					"data-sbp-action": "shuffle",
					"aria-label": "Случайный порядок",
					"aria-pressed": String(n.value.shuffle),
					title: "Случайный порядок"
				}, "⤨", 10, Mb),
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
				}, O(n.value.playing ? "❚❚" : "▶"), 9, Nb),
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
				}, O(n.value.repeat === "one" ? "↻₁" : "↻"), 11, Pb)
			]),
			U("div", Fb, [U("div", Ib, [n.value.ios ? (V(), H("span", Lb, "📱 Громкость регулируется кнопками телефона")) : (V(), H(B, { key: 1 }, [
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
				}, null, 8, Rb),
				U("output", zb, O(n.value.volume) + "%", 1)
			], 64))]), U("label", Bb, [t[7] ||= W(" Скорость ", -1), U("select", {
				id: "sbp-rate",
				"aria-label": "Скорость воспроизведения",
				value: n.value.rate
			}, [(V(), H(B, null, z(o, (e) => U("option", {
				key: e,
				value: e
			}, O(e) + "×", 9, Hb)), 64))], 8, Vb)])]),
			I(U("div", {
				class: "sbp-message",
				id: "sbp-message",
				role: "status",
				"aria-live": "polite"
			}, O(n.value.message), 513), [[$a, n.value.message]])
		]), U("aside", Ub, [
			U("div", Wb, [U("div", null, [t[8] ||= U("h2", null, "Очередь воспроизведения", -1), U("small", Gb, O(n.value.count) + " " + O(n.value.count === 1 ? "трек" : n.value.count > 1 && n.value.count < 5 ? "трека" : "треков"), 1)]), U("button", {
				type: "button",
				class: "sbp-clear",
				"data-sbp-action": "clear",
				id: "sbp-clear",
				disabled: !n.value.count
			}, "Очистить", 8, Kb)]),
			t[9] ||= da("<div class=\"sbp-dropzone\" id=\"sbp-dropzone\"><div class=\"sbp-drop-icon\">↥</div><strong>Загрузи свои треки</strong><p>MP3, WAV, M4A, AAC, OGG, FLAC — если формат поддерживается браузером. Файлы никуда не отправляются.</p><label class=\"sbp-upload-label\" for=\"sbp-file\">Выбрать аудиофайлы</label><input id=\"sbp-file\" type=\"file\" accept=\"audio/*,.mp3,.m4a,.aac,.wav,.ogg,.flac,.opus\" multiple></div><div class=\"sbp-demo-box\"><div><strong>Нет аудиофайлов?</strong><p>Создать 3 коротких оригинальных демо-сигнала для проверки управления.</p></div><button type=\"button\" data-sbp-action=\"demo\" id=\"sbp-demo\">+ Демо-треки</button></div>", 2),
			U("div", qb, [(V(!0), H(B, null, z(n.value.tracks, (e) => (V(), H("article", {
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
				}, [U("span", Xb, O(e.playLabel), 1), U("span", Zb, [U("strong", null, O(e.name), 1), U("small", null, O(e.artist) + " · " + O(e.sourceLabel), 1)])], 8, Yb),
				U("span", Qb, O(e.durationLabel), 1),
				U("button", {
					type: "button",
					class: "sbp-track-remove",
					"data-sbp-action": "remove",
					"data-index": e.index,
					title: "Удалить из списка",
					"aria-label": "Удалить " + e.name
				}, "×", 8, $b)
			], 10, Jb))), 128)), n.value.tracks.length ? G("", !0) : (V(), H("div", ex, " Плейлист пока пуст. Добавь MP3 или нажми «Демо-треки», чтобы начать тест. "))])
		])]));
	}
};
// src/vue/player/legacyPlayerLabBridge.js
function nx({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PLAYER_LAB, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-player-lab"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, tx, {
			api: t,
			initialModel: r
		})
	});
}
// src/vue/player/PlayerAB.vue
var rx = { class: "sbab-heading" }, ix = {
	key: 0,
	class: "sbab-kicker",
	"data-sb-vue-player-recap": ""
}, ax = { class: "sbab-files" }, ox = ["data-sbab-card"], sx = { class: "sbab-file-top" }, cx = { class: "sbab-side-label" }, lx = ["id"], ux = ["id"], dx = ["id"], fx = { class: "sbab-file-bottom" }, px = ["for"], mx = ["id", "data-sbab-file"], hx = ["data-side", "disabled"], gx = ["id"], _x = { class: "sbab-console" }, vx = { class: "sbab-console-top" }, yx = { id: "sbab-active-label" }, bx = { class: "sbab-wave" }, xx = {
	class: "sbab-wave-bars",
	"aria-hidden": "true"
}, Sx = {
	class: "sbab-toggle",
	role: "group",
	"aria-label": "Выбор версии для прослушивания"
}, Cx = ["data-side", "aria-pressed"], wx = { class: "sbab-scrub" }, Tx = ["value", "disabled"], Ex = { class: "sbab-times" }, Dx = { id: "sbab-current" }, Ox = { id: "sbab-duration" }, kx = { class: "sbab-transport" }, Ax = ["disabled", "aria-label"], jx = { class: "sbab-clip" }, Mx = { class: "sbab-clip-actions" }, Nx = {
	type: "button",
	"data-sbab-action": "mark-start"
}, Px = { id: "sbab-start" }, Fx = {
	type: "button",
	"data-sbab-action": "mark-end"
}, Ix = { id: "sbab-end" }, Lx = ["aria-pressed", "aria-label"], Rx = { class: "sbab-volume" }, zx = { key: 0 }, Bx = ["for"], Vx = [
	"id",
	"data-sbab-vol",
	"value"
], Hx = ["hidden"], Ux = { class: "sbab-review" }, Wx = { class: "sbab-rating-grid" }, Gx = { class: "sbab-rating-label" }, Kx = [
	"data-sbab-score",
	"aria-label",
	"value"
], qx = ["value"], Jx = { class: "sbab-note-grid" }, Yx = ["for"], Xx = [
	"id",
	"data-sbab-note",
	"placeholder",
	"value"
], Zx = {
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
			U("header", rx, [U("div", null, [
				t[0] ||= U("span", { class: "sbab-kicker" }, "SUNOBOOM · AUDIO TEST LAB", -1),
				t[1] ||= U("h2", null, "A/B-сравнение аудиоверсий", -1),
				t[2] ||= U("p", null, "Загрузи два варианта песни и переключайся между ними в одной временной точке. Сравнивай вокал, аранжировку и финальное звучание.", -1),
				F(r).playerLabSummary.ready ? (V(), H("p", ix, "Очередь плеера LAB: " + O(F(r).playerLabSummary.queueCount) + " треков · " + O(F(r).playerLabSummary.playing ? "воспроизведение" : "пауза"), 1)) : G("", !0)
			]), t[3] ||= U("span", { class: "sbab-lab-badge" }, "A ↔ B", -1)]),
			U("div", ax, [(V(), H(B, null, z(i, (e) => U("div", {
				key: e,
				class: D(["sbab-file-card", [e === "A" ? "sbab-card-a" : "sbab-card-b", { "sbab-active-card": n.value.active === e }]]),
				"data-sbab-card": e
			}, [
				U("div", sx, [U("span", cx, "ВЕРСИЯ " + O(e), 1), U("span", {
					class: "sbab-loaded",
					id: "sbab-ready-" + e
				}, O(n.value.files[e].ready ? "Файл добавлен" : "Ожидает файл"), 9, lx)]),
				U("strong", {
					class: "sbab-filename",
					id: "sbab-name-" + e
				}, O(n.value.files[e].name), 9, ux),
				U("p", {
					class: "sbab-filesub",
					id: "sbab-info-" + e
				}, O(n.value.files[e].info), 9, dx),
				U("div", fx, [
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
					})], -1), W(" " + O(n.value.files[e].ready ? "Заменить файл" : "Выбрать файл"), 1)], 8, px),
					U("input", {
						type: "file",
						id: "sbab-file-" + e,
						accept: "audio/*,.mp3,.wav,.m4a,.aac,.ogg,.flac,.opus",
						"data-sbab-file": e
					}, null, 8, mx),
					U("button", {
						type: "button",
						"data-sbab-action": "remove",
						"data-side": e,
						class: "sbab-remove",
						disabled: !n.value.files[e].ready
					}, "Удалить", 8, hx),
					U("span", {
						class: "sbab-length",
						id: "sbab-length-" + e
					}, O(n.value.files[e].duration), 9, gx)
				])
			], 10, ox)), 64))]),
			t[20] ||= U("div", { class: "sbab-demo-row" }, [U("p", null, "Для первого теста можно создать два разных оригинальных коротких аудиофрагмента."), U("button", {
				type: "button",
				"data-sbab-action": "demo"
			}, "Создать демо A и B")], -1),
			U("div", _x, [
				U("div", vx, [t[5] ||= U("span", { class: "sbab-kicker" }, "АКТИВНОЕ ПРОСЛУШИВАНИЕ", -1), U("span", yx, "Версия " + O(n.value.active) + O(n.value.playing ? " · Воспроизведение" : ""), 1)]),
				U("div", bx, [U("div", xx, [(V(!0), H(B, null, z(F(o), (e, t) => (V(), H("i", {
					key: t,
					style: E({ "--bar-height": e })
				}, null, 4))), 128))]), t[6] ||= U("div", { class: "sbab-wave-center" }, "A / B", -1)]),
				U("div", Sx, [(V(), H(B, null, z(i, (e) => U("button", {
					key: e,
					type: "button",
					class: D(e === "A" ? "sbab-btn-a" : "sbab-btn-b"),
					"data-sbab-action": "select",
					"data-side": e,
					"aria-pressed": String(n.value.active === e)
				}, [W(O(e) + " ", 1), U("small", null, "Версия " + O(e), 1)], 10, Cx)), 64))]),
				U("div", wx, [
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
					}, null, 8, Tx),
					U("div", Ex, [U("span", Dx, O(n.value.currentTime), 1), U("span", Ox, O(n.value.duration), 1)])
				]),
				U("div", kx, [
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
					}, O(n.value.playing ? "❚❚" : "▶"), 9, Ax),
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
				U("div", jx, [t[13] ||= U("div", { class: "sbab-clip-title" }, [U("strong", null, "Повтор выбранного фрагмента"), U("small", null, "Например, только припев или куплет")], -1), U("div", Mx, [
					U("button", Nx, [t[10] ||= W("Начало: ", -1), U("span", Px, O(n.value.start), 1)]),
					U("button", Fx, [t[11] ||= W("Конец: ", -1), U("span", Ix, O(n.value.end), 1)]),
					U("button", {
						type: "button",
						"data-sbab-action": "loop",
						id: "sbab-loop",
						"aria-pressed": String(n.value.loop),
						"aria-label": n.value.loop ? "Повтор фрагмента включён" : "Повтор фрагмента выключен"
					}, O(n.value.loop ? "↻ Повтор включён" : "↻ Повтор выкл."), 9, Lx),
					t[12] ||= U("button", {
						type: "button",
						"data-sbab-action": "clear-segment",
						"aria-label": "Очистить границы фрагмента"
					}, "✕", -1)
				])]),
				U("div", Rx, [n.value.ios ? (V(), H("span", zx, "📱 Громкость регулируется кнопками телефона")) : (V(), H(B, { key: 1 }, z(i, (e) => U("label", {
					key: e,
					for: "sbab-vol-" + e
				}, [W(" Уровень " + O(e) + " ", 1), U("input", {
					id: "sbab-vol-" + e,
					"data-sbab-vol": e,
					type: "range",
					min: "0",
					max: "100",
					value: n.value.volume[e]
				}, null, 8, Vx)], 8, Bx)), 64))]),
				U("p", {
					id: "sbab-status",
					class: "sbab-status",
					role: "status",
					"aria-live": "polite",
					hidden: !n.value.status
				}, O(n.value.status), 9, Hx)
			]),
			U("section", Ux, [
				t[18] ||= U("header", null, [U("h3", null, "Оценка на слух"), U("p", null, "Субъективное сравнение. Оценки выставляешь ты — автоматического анализа качества здесь нет.")], -1),
				U("div", Wx, [
					t[15] ||= U("div", { class: "sbab-rating-head" }, "Параметр", -1),
					t[16] ||= U("div", { class: "sbab-rating-head" }, "A", -1),
					t[17] ||= U("div", { class: "sbab-rating-head" }, "B", -1),
					(V(), H(B, null, z(a, (e) => (V(), H(B, { key: e.key }, [U("div", Gx, O(e.label), 1), (V(), H(B, null, z(i, (r) => U("div", { key: r }, [U("select", {
						"data-sbab-score": r + ":" + e.key,
						"aria-label": e.label + " — версия " + r,
						value: n.value.scores[r][e.key]
					}, [t[14] ||= U("option", { value: 0 }, "—", -1), (V(), H(B, null, z(5, (e) => U("option", {
						key: e,
						value: e
					}, O(e) + "/5", 9, qx)), 64))], 8, Kx)])), 64))], 64))), 64))
				]),
				U("div", Jx, [(V(), H(B, null, z(i, (e) => U("label", {
					key: e,
					for: "sbab-note-" + e
				}, [W(" Заметки по " + O(e) + " ", 1), U("textarea", {
					id: "sbab-note-" + e,
					"data-sbab-note": e,
					rows: "3",
					maxlength: "1000",
					placeholder: e === "A" ? "Сильные стороны, что улучшить…" : "Вокал, баланс, пространство…",
					value: n.value.notes[e]
				}, null, 8, Xx)], 8, Yx)), 64))]),
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
function Qx({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PLAYER_AB, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-player-ab"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, Zx, {
			api: t,
			initialModel: r
		})
	});
}
// src/vue/producer/ProducerSongList.vue
var $x = ["data-id", "aria-pressed"], eS = { class: "sbpc-song-main" }, tS = { class: "sbpc-song-meta" }, nS = { class: "sbpc-tiny-progress" }, rS = {
	key: 0,
	class: "sbpc-help",
	"data-sb-vue-passport-recap": ""
}, iS = {
	key: 1,
	class: "sbpc-empty"
}, aS = {
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
				U("span", eS, [U("strong", null, O(t.title), 1), U("span", null, O(t.artist), 1)]),
				U("span", tS, [U("b", null, O(t.done) + "/" + O(t.total), 1), U("small", null, O(t.nextLabel ? "Следующий этап: " + t.nextLabel : "Все этапы отмечены готовыми"), 1)]),
				U("span", nS, [U("i", { style: E({ width: t.percent + "%" }) }, null, 4)])
			], 10, $x))), 128)),
			F(r).passportListSummary.ready ? (V(), H("p", rS, " Паспорта треков · последний фильтр: " + O(F(r).passportListSummary.visibleCount), 1)) : G("", !0),
			a.value.length ? G("", !0) : (V(), H("p", iS, O(e.model.hasRecords ? "Поиск не дал результатов. Измени запрос или создай новую рабочую карточку." : "Пока нет рабочих карточек. Начни с первой песни выше."), 1))
		], 64));
	}
};
// src/vue/producer/legacyProducerSongListBridge.js
function oS({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PRODUCER_LIST, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sbpc-list[data-sb-vue-producer-list]"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, aS, { model: n })
	});
}
// src/vue/producer/ProducerSongDetail.vue
var sS = {
	class: "sbpc-workspace",
	"data-sb-vue-producer-detail": ""
}, cS = { class: "sbpc-panel sbpc-song-head" }, lS = { class: "sbpc-head-top" }, uS = { class: "sbpc-completion" }, dS = { class: "sbpc-next" }, fS = {
	key: 0,
	class: "sbpc-help",
	"data-sb-vue-passport-detail-recap": ""
}, pS = { class: "sbpc-meta-editor" }, mS = { class: "sbpc-wide" }, hS = { class: "sbpc-panel" }, gS = { class: "sbpc-panel-head" }, _S = ["aria-valuenow"], vS = { class: "sbpc-stages" }, yS = ["data-status"], bS = { class: "sbpc-stage-index" }, xS = { class: "sbpc-stage-body" }, SS = { class: "sbpc-stage-title" }, CS = { class: "sbpc-stage-state" }, wS = {
	key: 0,
	class: "sbpc-resource-present"
}, TS = {
	key: 1,
	class: "sbpc-resource-empty"
}, ES = { class: "sbpc-stage-actions" }, DS = [
	"onUpdate:modelValue",
	"data-pc-stage",
	"aria-label"
], OS = ["value"], kS = ["data-step"], AS = { class: "sbpc-panel" }, jS = { class: "sbpc-links" }, MS = ["for"], NS = [
	"id",
	"onUpdate:modelValue",
	"data-pc-link"
], PS = ["value"], FS = ["data-type", "data-id"], IS = { class: "sbpc-panel sbpc-arrangement" }, LS = { class: "sbpc-panel-head" }, RS = { class: "sbpc-arrangement-actions" }, zS = {
	key: 0,
	type: "button",
	"data-pc-action": "restore-arrangement"
}, BS = {
	key: 0,
	class: "sbpc-subnote"
}, VS = { class: "sbpc-panel" }, HS = { class: "sbpc-panel-head" }, US = {
	key: 0,
	class: "sbpc-log"
}, WS = {
	key: 1,
	class: "sbpc-empty"
}, GS = {
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
		return (t, o) => (V(), H("div", sS, [
			U("section", cS, [
				U("div", lS, [o[3] ||= U("span", { class: "sbpc-kicker" }, "КАРТОЧКА ПРОДЮСИРОВАНИЯ", -1), U("span", uS, O(e.model.percent) + "% готовности", 1)]),
				U("h2", null, O(e.model.title || "Без названия"), 1),
				U("p", null, O(e.model.artist || "Исполнитель пока не указан") + O(e.model.projectTitle ? " · " + e.model.projectTitle : ""), 1),
				U("p", dS, O(e.model.nextLabel ? "Следующий этап: " + e.model.nextLabel : "Все этапы отмечены готовыми"), 1),
				F(n).passportDetailSummary.ready ? (V(), H("p", fS, " Последний открытый паспорт: " + O(F(n).passportDetailSummary.versionCount) + " аудиоверсий · " + O(F(n).passportDetailSummary.linkedCount) + " из 3 материалов связано ", 1)) : G("", !0),
				U("div", pS, [
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
					U("label", mS, [o[6] ||= W("Продюсерские заметки ", -1), I(U("textarea", {
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
			U("section", hS, [
				U("header", gS, [o[9] ||= U("h3", null, "Маршрут песни", -1), U("span", null, O(e.model.done) + " из " + O(e.model.total) + " этапов", 1)]),
				U("div", {
					class: "sbpc-progress",
					role: "progressbar",
					"aria-label": "Готовность работы",
					"aria-valuemin": "0",
					"aria-valuemax": "100",
					"aria-valuenow": e.model.percent
				}, [U("span", { style: E({ width: e.model.percent + "%" }) }, null, 4)], 8, _S),
				U("div", vS, [(V(!0), H(B, null, z(e.model.stages, (t) => (V(), H("article", {
					key: t.key,
					class: "sbpc-stage",
					"data-status": a[t.key]
				}, [U("div", bS, O(a[t.key] === "done" ? "✓" : t.index), 1), U("div", xS, [
					U("div", SS, [U("strong", null, O(t.title), 1), U("small", null, O(t.desc), 1)]),
					U("div", CS, [t.hasMaterial ? (V(), H("span", wS, "● " + O(t.materialLabel), 1)) : (V(), H("span", TS, "○ Подтверждённых материалов нет"))]),
					U("div", ES, [U("label", null, [o[10] ||= W("Готовность ", -1), I(U("select", {
						"onUpdate:modelValue": (e) => a[t.key] = e,
						"data-pc-stage": t.key,
						"aria-label": "Этап " + t.title
					}, [(V(!0), H(B, null, z(e.model.statuses, (e) => (V(), H("option", {
						key: e.id,
						value: e.id
					}, O(e.label), 9, OS))), 128))], 8, DS), [[Lo, a[t.key]]])]), U("button", {
						type: "button",
						"data-pc-action": "open-stage",
						"data-step": t.key
					}, "Открыть инструмент ↗", 8, kS)])
				])], 8, yS))), 128))]),
				o[11] ||= U("p", { class: "sbpc-help" }, "Готовность отмечается вручную. Наличие материала показано отдельно и не считается автоматически завершённым этапом.", -1)
			]),
			U("section", AS, [
				o[12] ||= U("header", { class: "sbpc-panel-head" }, [U("h3", null, "Связанные материалы"), U("span", null, "Без копирования данных")], -1),
				o[13] ||= U("p", { class: "sbpc-help" }, "Свяжи существующие идеи, промпты, паспорт трека и карточку с аудио. Исходные записи останутся в своих разделах.", -1),
				U("div", jS, [(V(!0), H(B, null, z(e.model.links, (e) => (V(), H("div", {
					key: e.field,
					class: "sbpc-link-field"
				}, [
					U("label", { for: "sbpc-" + e.field }, O(e.label), 9, MS),
					I(U("select", {
						id: "sbpc-" + e.field,
						"onUpdate:modelValue": (t) => i[e.field] = t,
						"data-pc-link": e.field
					}, [(V(!0), H(B, null, z(e.options, (e) => (V(), H("option", {
						key: e.value,
						value: e.value
					}, O(e.label), 9, PS))), 128))], 8, NS), [[Lo, i[e.field]]]),
					e.value ? (V(), H("button", {
						key: 0,
						type: "button",
						"data-pc-action": "open-link",
						"data-type": e.type,
						"data-id": e.value
					}, O(e.available ? "Перейти к материалу" : "Материал недоступен") + " ↗ ", 9, FS)) : G("", !0)
				]))), 128))]),
				o[14] ||= U("button", {
					type: "button",
					class: "sbpc-main-btn",
					"data-pc-action": "save-links"
				}, "Сохранить связи", -1)
			]),
			U("section", IS, [
				U("header", LS, [o[15] ||= U("h3", null, "Аранжировка для этой песни", -1), U("span", null, O(e.model.arrangement.count ? e.model.arrangement.count + " блоков сохранено" : "Снимок ещё не сохранён"), 1)]),
				o[18] ||= U("p", { class: "sbpc-help" }, "Конструктор Suno Studio использует текущий рабочий черновик. Сохрани его сюда отдельно для песни; восстановление выполняется только по твоей команде.", -1),
				U("div", RS, [
					o[16] ||= U("button", {
						type: "button",
						"data-pc-action": "capture-arrangement"
					}, "Сохранить текущую аранжировку", -1),
					e.model.arrangement.count ? (V(), H("button", zS, "Восстановить в Studio")) : G("", !0),
					o[17] ||= U("button", {
						type: "button",
						"data-pc-action": "open-stage",
						"data-step": "arrangement"
					}, "Открыть аранжировщик ↗", -1)
				]),
				e.model.arrangement.count ? (V(), H("p", BS, " Сохранено: " + O(e.model.arrangement.savedAt) + " · " + O(e.model.arrangement.count) + " блоков · " + O(e.model.arrangement.duration || "длительность не рассчитана"), 1)) : G("", !0)
			]),
			U("section", VS, [
				U("header", HS, [o[19] ||= U("h3", null, "История работы", -1), U("span", null, O(e.model.history.length) + " событий", 1)]),
				o[20] ||= U("div", { class: "sbpc-log-input" }, [U("input", {
					id: "sbpc-history-note",
					type: "text",
					maxlength: "350",
					placeholder: "Добавить запись: что изменилось или что сделать дальше"
				}), U("button", {
					type: "button",
					"data-pc-action": "add-note"
				}, "Добавить")], -1),
				e.model.history.length ? (V(), H("ol", US, [(V(!0), H(B, null, z(e.model.history, (e, t) => (V(), H("li", { key: t }, [U("time", null, O(e.date), 1), U("span", null, O(e.text), 1)]))), 128))])) : (V(), H("p", WS, "История пока пуста."))
			])
		]));
	}
};
// src/vue/producer/legacyProducerSongDetailBridge.js
function KS({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PRODUCER_DETAIL, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-producer-detail[data-sb-vue-producer-host]"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, GS, { model: n })
	});
}
// src/vue/account/TrackPassportList.vue
var qS = {
	key: 0,
	class: "sb-track-disclaimer",
	"data-sb-vue-master-recap": ""
}, JS = {
	class: "sb-track-filters",
	role: "group",
	"aria-label": "Фильтр паспортов по этапу"
}, YS = ["data-filter", "aria-pressed"], XS = {
	key: 1,
	class: "sb-track-list"
}, ZS = ["data-id"], QS = {
	key: 2,
	class: "sb-track-empty"
}, $S = {
	__name: "TrackPassportList",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = Q();
		return L(() => t.model, (e) => n.publishPassportListSummary(e), { immediate: !0 }), (t, r) => (V(), H(B, null, [
			F(n).masterListSummary.ready ? (V(), H("p", qS, " В Мастере: " + O(F(n).masterListSummary.workCount) + " песен в работе · " + O(F(n).masterListSummary.finishedCount) + " маршрутов полностью пройдено ", 1)) : G("", !0),
			U("div", JS, [(V(!0), H(B, null, z(e.model.filters, (t) => (V(), H("button", {
				key: t.key,
				type: "button",
				"data-action": "tp-filter",
				"data-filter": t.key,
				class: D({ active: e.model.active === t.key }),
				"aria-pressed": e.model.active === t.key
			}, O(t.label), 11, YS))), 128))]),
			e.model.records.length ? (V(), H("div", XS, [(V(!0), H(B, null, z(e.model.records, (e) => (V(), H("button", {
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
			], 8, ZS))), 128))])) : (V(), H("div", QS, O(e.model.hasRecords ? "В этой категории пока нет треков." : "Паспортов пока нет. Создай первый, чтобы объединить материалы песни."), 1))
		], 64));
	}
};
// src/vue/account/legacyTrackPassportListBridge.js
function eC({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_TRACK_LIST, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-track-list[data-sb-vue-track-list]"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, $S, { model: n })
	});
}
// src/vue/account/TrackPassportDetail.vue
var tC = {
	class: "sb-track-detail",
	"data-sb-vue-track-detail-view": ""
}, nC = {
	key: 0,
	class: "sb-track-disclaimer",
	"data-sb-vue-master-detail-recap": ""
}, rC = { class: "sb-track-buttons" }, iC = ["data-id"], aC = ["data-id"], oC = ["data-id"], sC = { class: "sb-track-hero" }, cC = { class: "sb-track-cover" }, lC = ["src"], uC = { class: "sb-track-phase" }, dC = { class: "sb-track-facts" }, fC = { class: "sb-track-buttons" }, pC = ["href"], mC = ["href"], hC = { class: "sb-track-linkgrid" }, gC = ["data-action", "data-id"], _C = {
	key: 1,
	class: "sb-track-linked sb-track-linked-empty"
}, vC = ["data-action", "data-id"], yC = {
	key: 3,
	class: "sb-track-linked sb-track-linked-empty"
}, bC = ["data-action", "data-id"], xC = {
	key: 5,
	class: "sb-track-linked sb-track-linked-empty"
}, SC = { class: "sb-track-section" }, CC = { key: 0 }, wC = ["href"], TC = [
	"data-id",
	"data-version",
	"aria-label"
], EC = {
	key: 2,
	class: "sb-track-disclaimer"
}, DC = { class: "sb-track-versionform" }, OC = ["data-id"], kC = {
	__name: "TrackPassportDetail",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = Q();
		return L(() => t.model, (e) => n.publishPassportDetailSummary(e), { immediate: !0 }), (t, r) => (V(), H("div", tC, [
			F(n).masterDetailSummary.ready ? (V(), H("p", nC, " Последняя карточка Мастера: " + O(F(n).masterDetailSummary.done) + " из " + O(F(n).masterDetailSummary.total) + " этапов · " + O(F(n).masterDetailSummary.linkedCount) + " из 6 связей ", 1)) : G("", !0),
			U("div", rC, [
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
				}, "Изменить", 8, iC),
				U("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "tp-event",
					"data-id": e.model.id
				}, "В календарь релизов", 8, aC),
				U("button", {
					type: "button",
					class: "btn danger small",
					"data-action": "tp-delete",
					"data-id": e.model.id
				}, "Удалить", 8, oC)
			]),
			U("div", sC, [U("div", cC, [e.model.cover ? (V(), H("img", {
				key: 0,
				src: e.model.cover,
				alt: "Обложка",
				loading: "lazy"
			}, null, 8, lC)) : (V(), H(B, { key: 1 }, [W("♫")], 64))]), U("div", null, [
				U("span", uC, O(e.model.phase), 1),
				U("h2", null, O(e.model.title), 1),
				U("p", null, O(e.model.artist), 1)
			])]),
			U("div", dC, [(V(!0), H(B, null, z(e.model.facts, (e) => (V(), H("div", {
				key: e.label,
				class: "sb-track-fact"
			}, [U("span", null, O(e.label), 1), U("strong", null, O(e.value || "Не указано"), 1)]))), 128))]),
			U("div", fC, [e.model.audio ? (V(), H("a", {
				key: 0,
				class: "btn ghost",
				href: e.model.audio,
				rel: "noopener noreferrer",
				target: "_blank"
			}, "Прослушать ↗", 8, pC)) : G("", !0), e.model.cover ? (V(), H("a", {
				key: 1,
				class: "btn ghost",
				href: e.model.cover,
				rel: "noopener noreferrer",
				target: "_blank"
			}, "Обложка ↗", 8, mC)) : G("", !0)]),
			r[8] ||= U("h3", { class: "sb-track-section" }, "Связанные материалы", -1),
			U("div", hC, [
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
				], 8, gC)) : (V(), H("div", _C, [U("small", null, O(e.model.links[0].label), 1), r[2] ||= U("strong", null, "Не привязан", -1)])),
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
				], 8, vC)) : (V(), H("div", yC, [U("small", null, O(e.model.links[1].label), 1), r[4] ||= U("strong", null, "Не привязан", -1)])),
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
				], 8, bC)) : (V(), H("div", xC, [U("small", null, O(e.model.links[2].label), 1), r[6] ||= U("strong", null, "Не привязан", -1)]))
			]),
			(V(!0), H(B, null, z(e.model.sections, (e) => (V(), H("section", {
				key: e.label,
				class: "sb-track-sectionbox"
			}, [U("h3", null, O(e.label), 1), U("pre", null, O(e.text), 1)]))), 128)),
			U("h3", SC, "Версии трека (" + O(e.model.versions.length) + ")", 1),
			e.model.versions.length ? (V(!0), H(B, { key: 1 }, z(e.model.versions, (t) => (V(), H("div", {
				key: t.id,
				class: "sb-track-version"
			}, [U("div", null, [
				U("strong", null, O(t.label), 1),
				U("small", null, O(t.date), 1),
				t.notes ? (V(), H("p", CC, O(t.notes), 1)) : G("", !0)
			]), U("div", null, [t.url ? (V(), H("a", {
				key: 0,
				href: t.url,
				rel: "noopener noreferrer",
				target: "_blank"
			}, "Прослушать ↗", 8, wC)) : G("", !0), U("button", {
				type: "button",
				class: "btn danger small",
				"data-action": "tp-version-remove",
				"data-id": e.model.id,
				"data-version": t.id,
				"aria-label": "Удалить версию " + t.label
			}, "×", 8, TC)])]))), 128)) : (V(), H("p", EC, "Версий пока нет.")),
			U("div", DC, [r[7] ||= da("<div class=\"field\"><label for=\"tp-version-title\">Название новой версии</label><input id=\"tp-version-title\" maxlength=\"100\" placeholder=\"Демо 2 / Финальный мастер\"></div><div class=\"field\"><label for=\"tp-version-url\">Ссылка (HTTPS)</label><input id=\"tp-version-url\" type=\"url\" maxlength=\"2000\" placeholder=\"https://…\"></div><div class=\"field\"><label for=\"tp-version-notes\">Что изменилось?</label><input id=\"tp-version-notes\" maxlength=\"300\" placeholder=\"Необязательно\"></div>", 3), U("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "tp-version-add",
				"data-id": e.model.id
			}, "+ Добавить версию", 8, OC)]),
			r[9] ||= U("p", { class: "sb-track-disclaimer" }, " Связанный текст и промпт показываются из оригинальных разделов. Расчётные даты — ориентир, окончательная дата определяется издательством. ", -1)
		]));
	}
};
// src/vue/account/legacyTrackPassportDetailBridge.js
function AC({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_TRACK_DETAIL, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-track-detail[data-sb-vue-track-detail]"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, kC, { model: n })
	});
}
// src/vue/account/TrackPassportEditor.vue
var jC = {
	id: "sb-track-form",
	class: "panel sb-track-form",
	"data-sb-vue-track-editor-view": ""
}, MC = { class: "sb-track-formhead" }, NC = { class: "sb-track-fields" }, PC = ["for"], FC = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"placeholder"
], IC = { class: "field" }, LC = ["value"], RC = { class: "field" }, zC = ["value"], BC = { class: "field" }, VC = ["value"], HC = { class: "field" }, UC = ["value"], WC = { class: "field" }, GC = ["value"], KC = { class: "field" }, qC = { class: "sb-track-fields" }, JC = { class: "field" }, YC = { class: "field" }, XC = ["disabled"], ZC = { class: "sb-track-manual" }, QC = {
	id: "tp-date-hint",
	class: "sb-track-hint"
}, $C = { class: "sb-track-fields" }, ew = ["for"], tw = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"placeholder"
], nw = ["for"], rw = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"rows"
], iw = {
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
		return (t, r) => (V(), H("div", jC, [
			U("div", MC, [U("h2", null, O(e.model.editing ? "Редактировать паспорт" : "Новый паспорт трека"), 1), r[9] ||= U("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "tp-cancel"
			}, "Закрыть", -1)]),
			U("div", NC, [
				(V(!0), H(B, null, z(o.slice(0, 2), (e) => (V(), H("div", {
					key: e.id,
					class: "field"
				}, [U("label", { for: "tp-" + e.id }, O(e.label), 9, PC), I(U("input", {
					id: "tp-" + e.id,
					"onUpdate:modelValue": (t) => n[e.id] = t,
					maxlength: e.max,
					placeholder: e.placeholder
				}, null, 8, FC), [[q, n[e.id]]])]))), 128)),
				U("div", IC, [r[10] ||= U("label", { for: "tp-status" }, "Этап работы", -1), I(U("select", {
					id: "tp-status",
					"onUpdate:modelValue": r[0] ||= (e) => n.status = e
				}, [(V(!0), H(B, null, z(e.model.stages, (e) => (V(), H("option", {
					key: e.value,
					value: e.value
				}, O(e.label), 9, LC))), 128))], 512), [[Lo, n.status]])]),
				U("div", RC, [r[11] ||= U("label", { for: "tp-genre" }, "Жанр", -1), I(U("select", {
					id: "tp-genre",
					"onUpdate:modelValue": r[1] ||= (e) => n.genre = e
				}, [(V(!0), H(B, null, z(e.model.genres, (e) => (V(), H("option", {
					key: e.value,
					value: e.value
				}, O(e.label), 9, zC))), 128))], 512), [[Lo, n.genre]])]),
				U("div", BC, [r[13] ||= U("label", { for: "tp-project" }, "Мой проект / артист", -1), I(U("select", {
					id: "tp-project",
					"onUpdate:modelValue": r[2] ||= (e) => n.project = e
				}, [r[12] ||= U("option", { value: "" }, "Без связи", -1), (V(!0), H(B, null, z(e.model.projects, (e) => (V(), H("option", {
					key: e.value,
					value: e.value
				}, O(e.label), 9, VC))), 128))], 512), [[Lo, n.project]])]),
				U("div", HC, [r[15] ||= U("label", { for: "tp-idea" }, "Идея и текст песни", -1), I(U("select", {
					id: "tp-idea",
					"onUpdate:modelValue": r[3] ||= (e) => n.idea = e
				}, [r[14] ||= U("option", { value: "" }, "Без связи", -1), (V(!0), H(B, null, z(e.model.ideas, (e) => (V(), H("option", {
					key: e.value,
					value: e.value
				}, O(e.label), 9, UC))), 128))], 512), [[Lo, n.idea]])]),
				U("div", WC, [r[17] ||= U("label", { for: "tp-prompt" }, "Мой промпт Suno", -1), I(U("select", {
					id: "tp-prompt",
					"onUpdate:modelValue": r[4] ||= (e) => n.prompt = e
				}, [r[16] ||= U("option", { value: "" }, "Без связи", -1), (V(!0), H(B, null, z(e.model.prompts, (e) => (V(), H("option", {
					key: e.value,
					value: e.value
				}, O(e.label), 9, GC))), 128))], 512), [[Lo, n.prompt]])]),
				U("div", KC, [r[18] ||= U("label", { for: "tp-publisher" }, "Издательство / дистрибьютор", -1), I(U("input", {
					id: "tp-publisher",
					"onUpdate:modelValue": r[5] ||= (e) => n.publisher = e,
					maxlength: "120",
					placeholder: "Название издательства"
				}, null, 512), [[q, n.publisher]])])
			]),
			r[22] ||= U("h3", { class: "sb-track-section" }, "Даты релиза", -1),
			U("div", qC, [U("div", JC, [r[19] ||= U("label", { for: "tp-submitted" }, "Передано издательству", -1), I(U("input", {
				id: "tp-submitted",
				"onUpdate:modelValue": r[6] ||= (e) => n.submitted = e,
				type: "date",
				onChange: a
			}, null, 544), [[q, n.submitted]])]), U("div", YC, [
				r[21] ||= U("label", { for: "tp-release" }, "Дата выхода", -1),
				I(U("input", {
					id: "tp-release",
					"onUpdate:modelValue": r[7] ||= (e) => n.release = e,
					type: "date",
					disabled: !n.override
				}, null, 8, XC), [[q, n.release]]),
				U("label", ZC, [I(U("input", {
					id: "tp-override",
					"onUpdate:modelValue": r[8] ||= (e) => n.override = e,
					type: "checkbox",
					onChange: a
				}, null, 544), [[Fo, n.override]]), r[20] ||= W(" Установить дату вручную ", -1)])
			])]),
			U("p", QC, O(i.value), 1),
			r[23] ||= U("h3", { class: "sb-track-section" }, "Материалы и метаданные", -1),
			U("div", $C, [(V(), H(B, null, z(s, (e) => U("div", {
				key: e.id,
				class: "field"
			}, [U("label", { for: "tp-" + e.id }, O(e.label), 9, ew), I(U("input", {
				id: "tp-" + e.id,
				"onUpdate:modelValue": (t) => n[e.id] = t,
				maxlength: e.max,
				placeholder: e.placeholder
			}, null, 8, tw), [[q, n[e.id]]])])), 64))]),
			(V(), H(B, null, z(c, (e) => U("div", {
				key: e.id,
				class: "field"
			}, [U("label", { for: "tp-" + e.id }, O(e.label), 9, nw), I(U("textarea", {
				id: "tp-" + e.id,
				"onUpdate:modelValue": (t) => n[e.id] = t,
				maxlength: e.max,
				rows: e.rows
			}, null, 8, rw), [[q, n[e.id]]])])), 64)),
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
function aw({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_TRACK_EDITOR, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-track-editor[data-sb-vue-track-editor]"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, iw, {
			model: r,
			api: t
		})
	});
}
// src/vue/poetry/IdeaFields.vue
var ow = { class: "field" }, sw = { class: "field" }, cw = ["value"], lw = { class: "field" }, uw = {
	class: "sub",
	"data-sb-vue-idea-draft-progress": ""
}, dw = {
	key: 0,
	class: "sub",
	"data-sb-vue-last-prompt-draft": ""
}, fw = { class: "field" }, pw = {
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
			U("div", ow, [i[4] ||= U("label", { for: "custom-idea-title" }, "Название песни", -1), I(U("input", {
				id: "custom-idea-title",
				"onUpdate:modelValue": i[0] ||= (e) => t.title = e,
				maxlength: "100",
				placeholder: "Например, Город на ладони"
			}, null, 512), [[q, t.title]])]),
			U("div", sw, [i[5] ||= U("label", { for: "custom-idea-genre" }, "Музыкальный жанр", -1), I(U("select", {
				id: "custom-idea-genre",
				"onUpdate:modelValue": i[1] ||= (e) => t.genre = e
			}, [(V(!0), H(B, null, z(e.initial.genres, (e) => (V(), H("option", {
				key: e.id,
				value: e.id
			}, O(e.name), 9, cw))), 128))], 512), [[Lo, t.genre]])]),
			U("div", lw, [i[6] ||= U("label", { for: "custom-idea-text" }, "Сюжет и основная идея", -1), I(U("textarea", {
				id: "custom-idea-text",
				"onUpdate:modelValue": i[2] ||= (e) => t.text = e,
				rows: "5",
				maxlength: "3000",
				placeholder: "О чём песня и что происходит с героем?"
			}, null, 512), [[q, t.text]])]),
			U("p", uw, "Сюжет: " + O(F(n).ideaDraftSummary.ideaLength) + " / 3000 · Название: " + O(F(n).ideaDraftSummary.titleLength) + " / 100", 1),
			F(n).promptDraftSummary.ready ? (V(), H("p", dw, "Последний открытый черновик промпта: " + O(F(n).promptDraftSummary.textLength) + " / 1000 символов", 1)) : G("", !0),
			U("div", fw, [i[7] ||= U("label", { for: "custom-idea-hook" }, "Фраза для припева (необязательно)", -1), I(U("input", {
				id: "custom-idea-hook",
				"onUpdate:modelValue": i[3] ||= (e) => t.hook = e,
				maxlength: "240",
				placeholder: "Запоминающаяся строчка"
			}, null, 512), [[q, t.hook]])])
		], 64));
	}
}, mw = {
	key: 0,
	class: "sub",
	"data-sb-vue-poetry-source-count": ""
}, hw = {
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
			F(r).poetrySourceSummary.ready ? (V(), H("p", mw, " Исходный текст: " + O(F(r).poetrySourceSummary.charCount) + " / 20000 символов · " + O(F(r).poetrySourceSummary.lineCount) + " непустых строк ", 1)) : G("", !0)
		], 64));
	}
}, gw = {
	key: 0,
	class: "workbench-note",
	"data-sb-vue-poetry-tools-count": ""
}, _w = {
	key: 1,
	class: "workbench-note",
	"data-sb-vue-poetry-analysis-count": ""
}, vw = {
	key: 2,
	class: "workbench-note",
	"data-sb-vue-poetry-ambiguity-count": ""
}, yw = {
	key: 3,
	class: "workbench-note",
	"data-sb-vue-tags-summary": ""
}, bw = {
	key: 0,
	"data-sb-vue-tags-freshness": "",
	role: "status"
}, xw = { key: 0 }, Sw = { key: 1 }, Cw = { key: 2 }, ww = { class: "field" }, Tw = ["value"], Ew = { class: "workbench-switches" }, Dw = ["id", "onUpdate:modelValue"], Ow = { class: "field" }, kw = { class: "detail-actions" }, Aw = {
	type: "button",
	class: "btn ghost",
	"data-action": "copy-current-lyrics"
}, jw = ["innerHTML"], Mw = { class: "field" }, Nw = { class: "detail-actions" }, Pw = {
	type: "button",
	class: "btn ghost",
	"data-action": "copy-current-style"
}, Fw = ["innerHTML"], Iw = {
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
			F(i).poetrySourceSummary.ready ? (V(), H("p", gw, " Исходник для аранжировки: " + O(F(i).poetrySourceSummary.lineCount) + " строк, " + O(F(i).poetrySourceSummary.wordCount) + " слов ", 1)) : G("", !0),
			F(i).poetryAnalysisSummary.analyzed ? (V(), H("p", _w, " Последний анализ: " + O(F(i).poetryAnalysisSummary.rowCount) + " строк · " + O(F(i).poetryAnalysisSummary.stressMarkCount) + " меток ударения · " + O(F(i).poetryAnalysisSummary.suggestionCount) + " рекомендаций ", 1)) : G("", !0),
			F(i).poetryAmbiguitySummary.ready ? (V(), H("p", vw, " Предпросмотр ударений: " + O(F(i).poetryAmbiguitySummary.occurrenceCount) + " неоднозначных вхождений · " + O(F(i).poetryAmbiguitySummary.distinctCount) + " разных слов ", 1)) : G("", !0),
			F(i).performanceTagsSummary.ready ? (V(), H("p", yw, [W(" Теги исполнения: " + O(a[F(i).performanceTagsSummary.mode]) + " · интенсивность " + O(F(i).performanceTagsSummary.intensity) + "/5 · " + O(F(i).performanceTagsSummary.enabledTechniques) + " приёмов · " + O(F(i).performanceTagsSummary.busy ? "идёт генерация" : F(i).performanceTagsSummary.previewOpen ? F(i).performanceTagsSummary.sectionCount + " секций в предпросмотре" : "предпросмотр закрыт") + " ", 1), F(i).performanceTagsSummary.previewOpen ? (V(), H("span", bw, [
				W(" · " + O(F(i).performanceTagsSummary.previewFresh ? "Текст и настройки не изменены; проверь теги перед применением." : "Предпросмотр устарел — создай новый.") + " ", 1),
				F(i).performanceTagsSummary.sourceChanged ? (V(), H("span", xw, " Изменён исходник.")) : G("", !0),
				F(i).performanceTagsSummary.targetChanged ? (V(), H("span", Sw, " Изменено готовое поле Lyrics.")) : G("", !0),
				F(i).performanceTagsSummary.settingsChanged ? (V(), H("span", Cw, " Изменены настройки.")) : G("", !0)
			])) : G("", !0)])) : G("", !0),
			U("div", ww, [c[3] ||= U("label", { for: "lyrics-tag-preset" }, "Характер аранжировки", -1), I(U("select", {
				id: "lyrics-tag-preset",
				"onUpdate:modelValue": c[0] ||= (e) => n.preset = e
			}, [(V(), H(B, null, z(o, ([e, t]) => U("option", {
				key: e,
				value: e
			}, O(t), 9, Tw)), 64))], 512), [[Lo, n.preset]])]),
			U("div", Ew, [(V(), H(B, null, z(s, ([e, t]) => U("label", { key: e }, [I(U("input", {
				id: "lyrics-" + e,
				"onUpdate:modelValue": (t) => r[e] = t,
				type: "checkbox"
			}, null, 8, Dw), [[Fo, r[e]]]), W(" " + O(t), 1)])), 64))]),
			c[8] ||= U("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "format-idea-lyrics"
			}, "✨ Создать теги и усилители", -1),
			c[9] ||= U("p", { class: "workbench-note" }, "Разметка примерная: если в тексте нет названий секций, куплеты и припевы определяются по абзацам. Проверь расположение тегов перед копированием.", -1),
			U("div", Ow, [c[4] ||= U("label", { for: "custom-idea-tagged" }, "Готовая версия для поля Lyrics в Suno (можно исправить вручную)", -1), I(U("textarea", {
				id: "custom-idea-tagged",
				"onUpdate:modelValue": c[1] ||= (e) => n.tagged = e,
				rows: "13",
				maxlength: "25000",
				placeholder: "[Verse 1]\n...\n\n[Chorus - powerful melodic hook]\n..."
			}, null, 512), [[q, n.tagged]])]),
			U("div", kw, [U("button", Aw, [U("span", { innerHTML: e.initial.copyIcon }, null, 8, jw), c[5] ||= W(" Копировать Lyrics", -1)])]),
			U("div", Mw, [c[6] ||= U("label", { for: "custom-idea-style" }, "Дополнительное описание для поля Style (до 1000 символов)", -1), I(U("textarea", {
				id: "custom-idea-style",
				"onUpdate:modelValue": c[2] ||= (e) => n.style = e,
				rows: "4",
				maxlength: "1000",
				placeholder: "Описание жанра, вокала и динамики для Suno"
			}, null, 512), [[q, n.style]])]),
			U("div", Nw, [U("button", Pw, [U("span", { innerHTML: e.initial.copyIcon }, null, 8, Fw), c[7] ||= W(" Копировать Style", -1)])])
		], 64));
	}
};
// src/vue/poetry/legacyIdeaEditorBridge.js
function Lw({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_IDEA_EDITOR, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Hc({
		root: n,
		islands: [
			["sb-vue-idea-fields", pw],
			["sb-vue-lyrics-source", hw],
			["sb-vue-lyrics-tools", Iw]
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
function Rw({ sharedUi: e }) {
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
var zw = {
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
}, Bw = [
	"data-nav",
	"data-vue-router-path",
	"aria-current",
	"aria-label",
	"title",
	"onClick"
], Vw = ["innerHTML"], Hw = { class: "sb-vue-nav-label" }, Uw = {
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
		let t = Of(), n = Df(), r = Q(), i = e, a = K(() => r.navigationItems.length ? r.navigationItems : i.items);
		function o(e) {
			i.onNavigate(e, n);
		}
		let s = (e) => {
			let n = r.route;
			return (t.path === jf(n.route) ? Mf(t.path) : n.active) === e;
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
		}, null, 8, Vw), U("span", Hw, O(e.mobile ? n.shortLabel : n.label), 1)], 10, Bw))), 128));
	}
}, Ww = {
	class: "sb-vue-history-toolbar",
	role: "group",
	"aria-label": "История разделов SUNOBOOM"
}, Gw = ["disabled"], Kw = ["disabled"], qw = /*#__PURE__*/ ym({
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
		let t = e, n = Of(), r = Q(), i = /* @__PURE__ */ N(!1), a = K(() => (n.path, r.route.revision, Hf.value, {
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
		return (e, t) => (V(), H("div", Ww, [
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
			}, [U("path", { d: "m15 18-6-6 6-6" })], -1)]], 8, Gw),
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
			}, [U("path", { d: "m9 18 6-6-6-6" })], -1)]], 8, Kw)
		]));
	}
}, [["__scopeId", "data-v-c738b8ec"]]), Jw = Object.freeze({
	"/account/myideas": "myideas",
	"/account/myprompts": "myprompts",
	"/account/events": "events"
});
function Yw(e) {
	if (e?.active === "producer" && e?.production?.id) return jf("producer", {
		kind: "production",
		id: e.production.id
	});
	let t = e?.track;
	return jf(e?.active, t?.id ? {
		kind: "track",
		id: t.id
	} : null);
}
function Xw(e, t) {
	if (!e || typeof t?.snapshot != "function") return null;
	let n = t.snapshot();
	if (n?.trackEditing) return null;
	let r = Zf(e.path);
	if (r && n?.items?.some((e) => e?.id === r)) return {
		kind: "menu",
		id: r
	};
	let i = Jw[e.path];
	if (i && typeof t.navigateWorkspace == "function") return {
		kind: "workspace",
		id: i
	};
	let a = e.context;
	return e.path === "/catalog/detail" && a?.kind === "genre" && typeof t.canRestoreGenre == "function" && t.canRestoreGenre(a.id, a.tab) && typeof t.restoreGenre == "function" ? {
		kind: "genre",
		id: a.id,
		tab: a.tab
	} : a?.kind === "production" && e.path === jf("producer", a) && t.canRestoreProduction?.(a.id) === !0 && typeof t.restoreProduction == "function" ? {
		kind: "production",
		id: a.id
	} : e.path === "/account/tracks" && t.canRestoreTrackList?.() === !0 && typeof t.restoreTrackList == "function" ? { kind: "track-list" } : e.path === "/account/tracks/detail" && a?.kind === "track" && t.canRestoreTrack?.(a.id) === !0 && typeof t.restoreTrack == "function" ? {
		kind: "track",
		id: a.id
	} : null;
}
var Zw = !1;
function Qw(e, { legacyApi: t } = {}) {
	if (Zw || !["back", "forward"].includes(e) || typeof t?.snapshot != "function") return !1;
	let n = Xf(e), r = t.snapshot();
	return !!Xw(n, t) && tp().path === Yw(r);
}
async function $w(e, { legacyApi: t, syncRoute: n = ip } = {}) {
	if (Zw || !["back", "forward"].includes(e) || !t || typeof t.snapshot != "function" || typeof t.navigate != "function") return !1;
	Zw = !0;
	try {
		await $f();
		let r = Xw(Xf(e), t), i = t.snapshot();
		if (!r || tp().path !== Yw(i) || !await ep(e)) return !1;
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
		Zw = !1;
	}
}
// src/vue/navigation/legacyBridge.js
var eT = [{
	key: "sidebar",
	selector: "[data-sb-vue-sidebar]",
	mobile: !1
}, {
	key: "mobile",
	selector: "[data-sb-vue-mobile]",
	mobile: !0
}];
function tT({ mountVueFeature: e, unmountVueFeature: t, sharedUi: n }) {
	let r = window.SUNOBOOM_LEGACY_NAV, i = document.getElementById("app");
	if (!r || !i || typeof r.snapshot != "function") return () => {};
	let a = () => {}, o = [], s, c = !1;
	window.SUNOBOOM_VUE_ROUTE = Object.freeze({
		snapshot: () => rp.value,
		routerSnapshot: () => tp(),
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
		back: () => $w("back", { legacyApi: r }),
		forward: () => $w("forward", { legacyApi: r }),
		recordGenre: (e, t, n = "push") => {
			let i = r.snapshot();
			return i.active !== "detail" || i.detail?.id !== e || i.detail?.tab !== t || !r.canRestoreGenre?.(e, t) ? !1 : (ip("detail", {
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
			return n.active !== "producer" || n.production?.id !== e || !r.canRestoreProduction?.(e) ? !1 : (ip("producer", {
				historyMode: t,
				context: {
					kind: "production",
					id: e
				}
			}), !0);
		},
		recordTrackList: () => {
			let e = r.snapshot();
			return e.active !== "tracks" || e.track?.id || e.trackEditing ? !1 : (ip("tracks"), !0);
		},
		recordTrack: (e, t = "push") => {
			let n = r.snapshot();
			return n.active !== "tracks" || n.track?.id !== e || n.trackEditing || !r.canRestoreTrack?.(e) ? !1 : (ip("tracks", {
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
		ip(e.active, { context: e.track?.id ? {
			kind: "track",
			id: e.track.id
		} : e.active === "producer" && e.production?.id ? {
			kind: "production",
			id: e.production.id
		} : null }), o = ku(e), n.publishNavigation(o), s = JSON.stringify(o.map(({ active: e, ...t }) => t));
	}
	let u = r.snapshot();
	return ip(u.active, { context: u.track?.id ? {
		kind: "track",
		id: u.track.id
	} : u.active === "producer" && u.production?.id ? {
		kind: "production",
		id: u.production.id
	} : null }), $f().then(() => {
		c || (a = Hc({
			root: i,
			beforeSync: l,
			islands: [{
				key: "history",
				selectTarget: (e) => e.querySelector("[data-sb-vue-history]"),
				readSnapshot: () => r,
				mount: (t) => e(t, qw, {
					canRestore: (e) => Qw(e, { legacyApi: r }),
					onRestore: (e) => $w(e, { legacyApi: r })
				}, { vueRouter: !0 })
			}, ...eT.map(({ key: t, selector: n, mobile: i }) => ({
				key: t,
				selectTarget: (e) => e.querySelector(n),
				readRevision: () => s,
				readSnapshot: () => o,
				mount: (t, n) => e(t, Uw, {
					items: n,
					mobile: i,
					onNavigate: (e, t) => Nh(e, {
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
var nT = { class: "breadcrumbs" }, rT = {
	class: "brand-mobile",
	style: { display: "none" }
}, iT = { class: "sb-logo-lockup" }, aT = ["src"], oT = ["aria-label"], sT = { class: "top-right" }, cT = ["aria-label"], lT = [
	"aria-label",
	"aria-expanded",
	"title"
], uT = ["aria-hidden"], dT = {
	class: "avatar account-shortcut",
	type: "button",
	title: "Личный кабинет",
	"aria-label": "Открыть личный кабинет",
	"data-action": "nav",
	"data-nav": "account"
}, fT = {
	__name: "TopHeader",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (V(), H(B, null, [
			U("div", nT, [n[0] ||= W("Рабочее пространство / ", -1), U("b", null, O(e.model.breadcrumb), 1)]),
			U("div", rT, [U("div", iT, [U("img", {
				class: "sb-mobile-logo",
				src: e.model.logoSrc,
				alt: "SUNOBOOM — фирменный логотип"
			}, null, 8, aT), n[1] ||= U("span", { class: "sb-brand-tagline" }, "Больше, чем музыка", -1)]), U("button", {
				type: "button",
				class: "sb-app-version sb-version-trigger",
				"aria-label": "Версия SUNOBOOM " + e.model.version + " — открыть историю обновлений",
				"aria-haspopup": "dialog",
				title: "История версий SUNOBOOM"
			}, "v" + O(e.model.version), 9, oT)]),
			U("div", sT, [
				n[3] ||= U("span", { class: "pill sb-prototype-pill" }, "🧪 Прототип", -1),
				U("button", {
					type: "button",
					class: "sb-app-version sb-version-trigger",
					"aria-label": "Версия SUNOBOOM " + e.model.version + " — открыть историю обновлений",
					"aria-haspopup": "dialog",
					title: "История версий SUNOBOOM"
				}, "v" + O(e.model.version), 9, cT),
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
				}, O(e.model.noticeBadge === 99 && e.model.unreadCount > 99 ? "99+" : e.model.noticeBadge), 11, uT)], 10, lT),
				n[4] ||= da("<button type=\"button\" class=\"sb-notice-bell sb-settings-shortcut\" data-sbs-action=\"open-top\" aria-label=\"Открыть настройки приложения\" title=\"Настройки\" aria-haspopup=\"false\"><span class=\"sb-notice-bell-icon\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M10.5 2h3l.5 2.2 1.6.7 2-1.1 2.1 2.1-1 2 .7 1.7 2.1.4v3l-2.1.5-.7 1.6 1 2-2.1 2.1-2-1-.1.1-1.5.6-.5 2.1h-3l-.5-2.1-1.6-.7-2 1-2.1-2.1 1.1-2-.7-1.6-2.2-.5v-3l2.2-.4.7-1.7-1.1-2 2.1-2.1 2 1.1 1.6-.7z\"></path><circle cx=\"12\" cy=\"11.5\" r=\"3\"></circle></svg></span></button>", 1),
				U("button", dT, O(e.model.avatarInitial), 1)
			])
		], 64));
	}
};
// src/vue/navigation/top-header-model.js
function pT(e) {
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
function mT({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_HEADER, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector(".top[data-sb-vue-top]"),
		readSnapshot: () => pT(t.snapshot()),
		mount: (t, n) => e(t, fT, { model: n })
	});
}
// src/vue/academy/GenreCards.vue
var hT = ["data-id"], gT = { class: "genre-content" }, _T = { class: "kicker" }, vT = { class: "foot" }, yT = {
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
		}, null, -1), U("div", gT, [U("div", null, [
			U("div", _T, O(e.family) + " · " + O(e.bpm[0]) + "–" + O(e.bpm[1]) + " BPM", 1),
			U("h3", null, O(e.name), 1),
			U("p", null, O(e.tagline), 1)
		]), U("div", vT, [U("span", null, O(e.era), 1), n[0] ||= U("span", { style: { color: "#ffacd9" } }, "Открыть →", -1)])])], 12, hT))), 128));
	}
}, bT = ["open"], xT = {
	key: 0,
	id: "sb-ap-hub-content"
}, ST = { class: "sb-ap-heading" }, CT = { class: "sb-ap-total" }, wT = { class: "sb-ap-tools" }, TT = ["value"], ET = ["value"], DT = { class: "sb-ap-check" }, OT = ["checked"], kT = {
	id: "sb-ap-count",
	class: "sb-ap-count",
	"aria-live": "polite"
}, AT = {
	id: "sb-ap-results",
	class: "sb-ap-index-grid"
}, jT = { class: "sb-ap-index-title" }, MT = { class: "sb-ap-avatar" }, NT = { class: "sb-ap-chips" }, PT = { class: "sb-ap-card-actions" }, FT = ["data-name", "onClick"], IT = [
	"data-name",
	"aria-pressed",
	"aria-label",
	"onClick"
], LT = {
	key: 0,
	class: "sb-ap-empty"
}, RT = ["hidden"], zT = {
	__name: "ArtistProfileHub",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ P(t.api.hubSnapshot());
		return Sr(t.api.subscribe(() => {
			n.value = t.api.hubSnapshot();
		})), (t, r) => (V(), H("details", {
			id: "sb-ap-hub",
			class: "sb-ap-hub",
			"data-sb-vue-profile-hub": "",
			open: n.value.open,
			onToggle: r[4] ||= (t) => e.api.setOpen(t.currentTarget.open)
		}, [r[11] ||= U("summary", null, [
			U("span", { class: "sb-ap-sym" }, "🎙️"),
			U("span", null, [U("strong", null, "Профили исполнителей"), U("small", null, "Мировая и русскоязычная сцены SUNOBOOM")]),
			U("span", { class: "sb-ap-chevron" }, "⌄")
		], -1), n.value.open ? (V(), H("div", xT, [
			U("div", ST, [r[5] ||= U("div", null, [
				U("span", { class: "sb-ap-overline" }, "SUNOBOOM · МУЗЫКАЛЬНАЯ АКАДЕМИЯ"),
				U("h2", null, "Энциклопедия исполнителей"),
				U("p", null, "Все существующие подборки артистов собраны в единый указатель. Профиль показывает сведения из Академии, а для отдельных исполнителей — расширенную редакционную справку.")
			], -1), U("div", CT, O(n.value.total) + " имён в базе", 1)]),
			U("div", wT, [
				U("label", null, [r[6] ||= W("Поиск по имени или жанру", -1), U("input", {
					id: "sb-ap-search",
					type: "search",
					placeholder: "Например: Distemper или поп",
					autocomplete: "off",
					value: n.value.query,
					onInput: r[0] ||= J((t) => e.api.filter({ query: t.target.value }), ["stop"])
				}, null, 40, TT)]),
				U("label", null, [r[8] ||= W("Подборка", -1), U("select", {
					id: "sb-ap-locale",
					value: n.value.locale,
					onChange: r[1] ||= J((t) => e.api.filter({ locale: t.target.value }), ["stop"])
				}, [...r[7] ||= [
					U("option", { value: "all" }, "Все сцены", -1),
					U("option", { value: "ru" }, "Русскоязычная сцена", -1),
					U("option", { value: "world" }, "Мировая сцена", -1)
				]], 40, ET)]),
				U("label", DT, [U("input", {
					id: "sb-ap-saved-only",
					type: "checkbox",
					checked: n.value.savedOnly,
					onChange: r[2] ||= J((t) => e.api.filter({ savedOnly: t.target.checked }), ["stop"])
				}, null, 40, OT), r[9] ||= W(" Только избранные", -1)])
			]),
			U("p", kT, "Найдено " + O(n.value.count) + " исполнителей · в избранном " + O(n.value.favorites), 1),
			U("div", AT, [(V(!0), H(B, null, z(n.value.artists, (t) => (V(), H("article", {
				key: t.key,
				class: "sb-ap-index-card"
			}, [
				U("div", jT, [U("span", MT, O(t.initials), 1), U("div", null, [U("strong", null, O(t.name), 1), U("small", null, O(t.scene), 1)])]),
				U("p", null, O(t.overview), 1),
				U("div", NT, [(V(!0), H(B, null, z(t.genres, (e) => (V(), H("span", { key: e }, O(e), 1))), 128))]),
				U("div", PT, [U("button", {
					type: "button",
					"data-sb-ap-action": "profile",
					"data-name": t.name,
					onClick: J((n) => e.api.openProfile(t.name, null, n.currentTarget), ["stop"])
				}, "Открыть профиль", 8, FT), U("button", {
					type: "button",
					"data-sb-ap-action": "favorite",
					"data-name": t.name,
					"aria-pressed": t.favorite,
					title: "Сохранить профиль",
					"aria-label": "Сохранить профиль " + t.name,
					onClick: J((n) => e.api.toggleFavorite(t.name), ["stop"])
				}, O(t.favorite ? "★" : "☆"), 9, IT)])
			]))), 128)), n.value.artists.length ? G("", !0) : (V(), H("div", LT, "По этому запросу исполнители не найдены. Попробуй другое название или отключи фильтры."))]),
			U("button", {
				type: "button",
				id: "sb-ap-more",
				class: "sb-ap-more",
				"data-sb-ap-action": "more",
				hidden: !n.value.remaining,
				onClick: r[3] ||= J((t) => e.api.more(), ["stop"])
			}, "Показать ещё · " + O(n.value.remaining), 9, RT),
			r[10] ||= U("p", { class: "sb-ap-disclaimer" }, "Периоды в исходных карточках ориентировочные. Присутствие в подборке жанра не обязательно означает, что это единственное направление или прямое влияние на исполнителя.", -1)
		])) : G("", !0)], 40, bT));
	}
}, BT = { class: "genre-family-toolbar" }, VT = { class: "search-box" }, HT = ["innerHTML"], UT = { class: "hint" }, WT = { class: "genre-family-summary" }, GT = { id: "catalog-count" }, KT = ["data-id"], qT = {
	class: "hint",
	id: "sb-academy-search-hint"
}, JT = {
	id: "catalog-cards",
	class: "genre-families"
}, YT = [
	"data-family",
	"open",
	"onToggle"
], XT = {
	class: "genre-family-icon",
	"aria-hidden": "true"
}, ZT = { class: "genre-family-heading" }, QT = { class: "genre-family-right" }, $T = { class: "genre-family-count" }, eE = { class: "genre-family-body" }, tE = {
	key: 0,
	class: "sb-sacred-index"
}, nE = {
	key: 0,
	class: "sb-sacred-overview"
}, rE = { class: "genre-grid" }, iE = { class: "sb-sacred-religions" }, aE = [
	"data-sb-religion",
	"open",
	"onToggle"
], oE = { class: "sb-sacred-religion-header" }, sE = {
	class: "sb-sacred-religion-icon",
	"aria-hidden": "true"
}, cE = { class: "sb-sacred-religion-label" }, lE = { class: "sb-sacred-count" }, uE = { class: "sb-sacred-religion-content" }, dE = [
	"data-sb-branch",
	"open",
	"onToggle"
], fE = { class: "sb-sacred-branch-header" }, pE = { class: "sb-sacred-branch-label" }, mE = { class: "sb-sacred-count" }, hE = { class: "sb-sacred-branch-content" }, gE = { class: "genre-grid" }, _E = {
	key: 1,
	class: "genre-grid"
}, vE = {
	key: 1,
	class: "genre-family-empty"
}, yE = {
	__name: "AcademyCatalog",
	props: {
		artistProfiles: {
			type: Object,
			default: null
		},
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
			e.artistProfiles ? (V(), na(zT, {
				key: 0,
				api: e.artistProfiles
			}, null, 8, ["api"])) : G("", !0),
			U("div", BT, [U("label", VT, [U("span", {
				innerHTML: e.searchIcon,
				"aria-hidden": "true"
			}, null, 8, HT), I(U("input", {
				id: "genre-search",
				"onUpdate:modelValue": n[0] ||= (e) => r.value = e,
				type: "search",
				enterkeyhint: "search",
				autocapitalize: "off",
				spellcheck: "false",
				"aria-label": "Поиск жанров",
				placeholder: "Поиск жанра, поджанра или исполнителя…",
				autocomplete: "off"
			}, null, 512), [[q, r.value]])]), U("span", UT, O(e.snapshot.families.length) + " разделов · " + O(e.snapshot.families.reduce((e, t) => e + t.genres.length, 0)) + " жанров", 1)]),
			U("div", WT, [
				U("h2", GT, O(o.value ? "Найдено жанров" : "Музыкальные жанры") + " · " + O(c.value), 1),
				m.value ? (V(), H("button", {
					key: 0,
					type: "button",
					class: "btn ghost small",
					"data-sb-last-genre": "",
					"data-action": "genre",
					"data-id": m.value.id
				}, " ↶ Последний жанр: " + O(m.value.name), 9, KT)) : G("", !0),
				U("span", qT, O(l.value), 1)
			]),
			U("div", JT, [s.value.length ? (V(!0), H(B, { key: 0 }, z(s.value, (e) => (V(), H("details", {
				key: e.name,
				class: "genre-family",
				"data-family": e.name,
				style: E({ "--family-accent": e.meta.accent }),
				open: h("family", e.name),
				onToggle: (t) => g("family", e.name, t)
			}, [U("summary", null, [
				U("span", XT, O(e.meta.icon), 1),
				U("span", ZT, [U("strong", null, O(e.name), 1), U("small", null, O(e.meta.desc), 1)]),
				U("span", QT, [U("span", $T, O(e.genres.length) + " " + O(_(e.genres.length)), 1), n[1] ||= U("svg", {
					class: "genre-family-chevron",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2",
					"aria-hidden": "true"
				}, [U("path", { d: "m5 9 7 7 7-7" })], -1)])
			]), U("div", eE, [e.name === "Религиозная музыка" ? (V(), H("div", tE, [
				n[5] ||= U("div", { class: "sb-sacred-intro" }, [
					U("span", { class: "sb-sacred-eyebrow" }, "МУЗЫКА МИРОВЫХ РЕЛИГИЙ"),
					U("h3", null, "Религии и музыкальные традиции"),
					U("p", null, "Открой религию, затем её направление или течение. Здесь представлены музыкальные традиции — их границы не всегда совпадают с конфессиональными.")
				], -1),
				d.value ? (V(), H("div", nE, [n[2] ||= U("div", { class: "sb-sacred-overview-label" }, "📖 Обзор раздела", -1), U("div", rE, [sa(yT, { genres: [d.value] }, null, 8, ["genres"])])])) : G("", !0),
				U("div", iE, [(V(!0), H(B, null, z(f.value, (e) => (V(), H("details", {
					key: e.id,
					class: "sb-sacred-religion",
					"data-sb-religion": e.id,
					open: h("religion", e.id),
					onToggle: (t) => g("religion", e.id, t)
				}, [U("summary", oE, [
					U("span", sE, O(e.icon), 1),
					U("span", cE, [U("strong", null, O(e.name), 1), U("small", null, O(e.description), 1)]),
					U("span", lE, O(e.count), 1),
					n[3] ||= U("span", {
						class: "sb-sacred-chevron",
						"aria-hidden": "true"
					}, "⌄", -1)
				]), U("div", uE, [(V(!0), H(B, null, z(e.branches, (e) => (V(), H("details", {
					key: e.id,
					class: "sb-sacred-branch",
					"data-sb-branch": e.id,
					open: h("branch", e.id),
					onToggle: (t) => g("branch", e.id, t)
				}, [U("summary", fE, [
					U("span", pE, [U("strong", null, O(e.name), 1), U("small", null, O(e.description), 1)]),
					U("span", mE, O(e.genres.length) + " " + O(v(e.genres.length)), 1),
					n[4] ||= U("span", {
						class: "sb-sacred-chevron",
						"aria-hidden": "true"
					}, "⌄", -1)
				]), U("div", hE, [U("div", gE, [sa(yT, { genres: e.genres }, null, 8, ["genres"])])])], 40, dE))), 128))])], 40, aE))), 128))])
			])) : (V(), H("div", _E, [sa(yT, { genres: e.genres }, null, 8, ["genres"])]))])], 44, YT))), 128)) : (V(), H("div", vE, "Ничего не найдено. Попробуй другой запрос."))])
		], 64));
	}
};
// src/vue/academy/legacyAcademyBridge.js
function bE({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ACADEMY, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-academy-root"),
		readSnapshot: () => {
			let e = t.snapshot();
			return e?.families?.length ? e : null;
		},
		mount: (n, r) => {
			let i = e(n, yE, {
				artistProfiles: window.SUNOBOOM_ARTIST_PROFILES || null,
				snapshot: r,
				search: (e) => t.search(e),
				searchIcon: n.querySelector("label.search-box > svg")?.outerHTML || "",
				setExpanded: (e, n, r) => t.setExpanded(e, n, r)
			});
			return i || window.SUNOBOOM_ARTIST_PROFILES?.restoreNativeHub?.(), i;
		}
	});
}
// src/vue/academy/genre-tree-model.js
var xE = (e) => String(e ?? "").trim().normalize("NFKC").toLocaleLowerCase("ru");
function SE(e, t, n, r = "all", i = 30) {
	let a = xE(n);
	if (!a) return {
		count: 0,
		items: []
	};
	let o = new Map(e.map((e) => [e.id, e])), s = /* @__PURE__ */ new Set(), c = [];
	function l(e, t) {
		let n = o.get(t);
		n && !s.has(t) && xE(n.name).includes(a) && (s.add(t), c.push({
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
function CE(e, t) {
	return t === "zoom-reset" ? 1 : t !== "zoom-in" && t !== "zoom-out" ? e : Math.min(1.5, Math.max(.75, Math.round((e + (t === "zoom-in" ? .15 : -.15)) * 100) / 100));
}
function wE(e, t) {
	let n = Array.isArray(e?.edges) ? e.edges : [];
	return e?.id === "all" ? n.filter(([e, n]) => e === t || n === t) : n;
}
// src/vue/academy/GenreTree.vue
var TE = {
	class: "sb-gt-vue-content",
	"data-sb-vue-genre-tree": ""
}, EE = { class: "sb-gt-head" }, DE = { class: "sb-gt-count" }, OE = { class: "sb-gt-controls" }, kE = ["value"], AE = ["value"], jE = ["value"], ME = ["value"], NE = { class: "sb-gt-extra" }, PE = {
	class: "sb-gt-search-label",
	for: "sb-gt-search"
}, FE = ["value"], IE = { class: "sb-gt-zoom" }, LE = { id: "sb-gt-zoom-label" }, RE = {
	id: "sb-gt-search-results",
	class: "sb-gt-search-results",
	"aria-live": "polite"
}, zE = { class: "sb-gt-search-title" }, BE = { class: "sb-gt-search-links" }, VE = [
	"data-id",
	"data-tree",
	"onClick"
], HE = {
	key: 1,
	class: "sb-gt-search-empty"
}, UE = { class: "sb-gt-intro" }, WE = { class: "sb-gt-legend" }, GE = ["aria-label"], KE = ["data-sb-gt-family"], qE = {
	key: 1,
	class: "sb-gt-stage"
}, JE = { class: "sb-gt-node-list" }, YE = [
	"data-id",
	"aria-pressed",
	"onClick"
], XE = { class: "sb-gt-node-name" }, ZE = { class: "sb-gt-node-era" }, QE = {
	key: 0,
	id: "sb-gt-description",
	class: "sb-gt-detail",
	"aria-live": "polite"
}, $E = { class: "sb-gt-detail-top" }, eD = { class: "sb-gt-sub" }, tD = ["data-id"], nD = { class: "sb-gt-description" }, rD = { class: "sb-gt-related" }, iD = ["data-id", "onClick"], aD = {
	key: 1,
	class: "sb-gt-note"
}, oD = { class: "sb-gt-related" }, sD = ["data-id", "onClick"], cD = /*#__PURE__*/ ym({
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
		}))), v = K(() => _.value.reduce((e, t) => e + t.entries.length, 0)), y = K(() => d.get(i.value) || d.get(h.value.focus)), b = K(() => wE(h.value, i.value).filter(([e, t]) => e === i.value || t === i.value).map(([e, t, n, r]) => {
			let a = d.get(e === i.value ? t : e);
			return a ? {
				id: a.id,
				name: a.name,
				type: n,
				note: r,
				direction: e === i.value ? "→" : "←"
			} : null;
		}).filter(Boolean)), x = K(() => g.value && y.value ? u.filter((e) => e.id !== i.value && e.family === y.value.family).slice(0, 8) : []), ee = K(() => SE(u, f, a.value, r.value)), S = (e) => !!a.value.trim() && !e.name.toLocaleLowerCase("ru").includes(a.value.trim().toLocaleLowerCase("ru"));
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
			let n = CE(o.value, e);
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
		return R(C), (t, n) => (V(), H("div", TE, [
			U("div", EE, [n[5] ||= U("div", null, [
				U("span", { class: "sb-gt-kicker" }, "SUNOBOOM · ИСТОРИЯ МУЗЫКИ"),
				U("h2", null, "От истоков к новым жанрам"),
				U("p", null, "Нажми на жанр в схеме, чтобы увидеть его историю и связи. Затем открой его существующую карточку в Академии.")
			], -1), U("div", DE, O(v.value) + " жанров" + O(g.value ? " · " + h.value.groups.length + " направлений" : " в схеме"), 1)]),
			U("div", OE, [
				n[8] ||= U("label", { for: "sb-gt-tree-choice" }, "Карта жанров", -1),
				U("select", {
					id: "sb-gt-tree-choice",
					value: r.value,
					"aria-label": "Выберите музыкальное древо",
					onChange: n[0] ||= (e) => te(e.target.value)
				}, [(V(!0), H(B, null, z(F(f), (e) => (V(), H("option", {
					key: e.id,
					value: e.id
				}, O(e.icon) + " " + O(e.label), 9, AE))), 128))], 40, kE),
				g.value ? (V(), H(B, { key: 0 }, [n[7] ||= U("label", { for: "sb-gt-group-jump" }, "Перейти к направлению", -1), U("select", {
					id: "sb-gt-group-jump",
					value: s.value,
					"aria-label": "Перейти к музыкальному направлению",
					onChange: ae
				}, [n[6] ||= U("option", { value: "" }, "Выберите раздел…", -1), (V(!0), H(B, null, z(h.value.groups, (e, t) => (V(), H("option", {
					key: e.name,
					value: String(t)
				}, O(e.icon) + " " + O(e.name) + " (" + O(e.ids.length) + ") ", 9, ME))), 128))], 40, jE)], 64)) : G("", !0)
			]),
			U("div", NE, [U("label", PE, [n[9] ||= W(" Поиск жанра по древу ", -1), U("input", {
				id: "sb-gt-search",
				value: a.value,
				type: "search",
				placeholder: "Например: ска-панк",
				autocomplete: "off",
				onInput: w
			}, null, 40, FE)]), U("div", IE, [
				n[10] ||= U("span", null, "Масштаб карты", -1),
				U("button", {
					type: "button",
					"data-sb-gt-action": "zoom-out",
					"aria-label": "Уменьшить масштаб",
					onClick: n[1] ||= (e) => re("zoom-out")
				}, "−"),
				U("output", LE, O(Math.round(o.value * 100)) + "%", 1),
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
			U("div", RE, [a.value.trim() ? (V(), H(B, { key: 0 }, [ee.value.count ? (V(), H(B, { key: 0 }, [U("div", zE, " Найдено в коллекции: " + O(ee.value.count) + O(ee.value.count > 30 ? " · показаны первые 30" : ""), 1), U("div", BE, [(V(!0), H(B, null, z(ee.value.items, (e) => (V(), H("button", {
				key: e.id,
				type: "button",
				"data-sb-gt-action": "search-jump",
				"data-id": e.id,
				"data-tree": e.tree,
				onClick: (t) => ie(e)
			}, [W(O(e.name) + " ", 1), U("small", null, "(" + O(e.family) + ")", 1)], 8, VE))), 128))])], 64)) : (V(), H("p", HE, "Жанр не найден в коллекции Академии."))], 64)) : G("", !0)]),
			U("p", UE, O(h.value.intro), 1),
			U("div", WE, [(V(!0), H(B, null, z(F(p), (e, t) => (V(), H("span", { key: t }, [U("i", { style: E({ "--rel-color": e.color }) }, null, 4), W(O(e.label), 1)]))), 128))]),
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
			}, [U("strong", null, O(e.group.icon) + " " + O(e.group.name), 1), U("span", null, O(e.entries.length), 1)], 4)) : (V(), H("div", qE, [U("span", null, "0" + O(e.index + 1), 1), W(O(F(m)[e.index]), 1)])), U("div", JE, [(V(!0), H(B, null, z(e.entries, (e) => (V(), H("button", {
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
			}, [U("span", XE, O(e.name), 1), U("span", ZE, O(e.era || e.family || ""), 1)], 10, YE))), 128))])], 10, KE))), 128))], 2)], 6)], 8, GE),
			y.value ? (V(), H("div", QE, [
				U("div", $E, [U("div", null, [
					n[12] ||= U("div", { class: "sb-gt-kicker" }, "ВЫБРАННОЕ НАПРАВЛЕНИЕ", -1),
					U("h3", null, O(y.value.name), 1),
					U("p", eD, O(y.value.era || "") + " · " + O(y.value.family || ""), 1)
				]), U("button", {
					type: "button",
					class: "btn primary sb-gt-open",
					"data-sb-gt-action": "open",
					"data-id": y.value.id,
					onClick: n[4] ||= (t) => e.treeApi.openGenre(y.value.id)
				}, "Открыть карточку ↗", 8, tD)]),
				U("p", nD, O(y.value.description || y.value.tagline || "Описание в карточке жанра."), 1),
				b.value.length ? (V(), H(B, { key: 0 }, [n[13] ||= U("h4", null, "Исторические связи", -1), U("div", rD, [(V(!0), H(B, null, z(b.value, (e) => (V(), H("button", {
					key: e.id + ":" + e.type,
					type: "button",
					class: "sb-gt-related-btn",
					"data-sb-gt-action": "select",
					"data-id": e.id,
					onClick: (t) => ne(e.id)
				}, [U("span", { class: D(["sb-gt-related-mark", "sb-gt-" + e.type]) }, O(e.direction), 3), U("span", null, [U("strong", null, O(e.name), 1), U("small", null, O(e.note), 1)])], 8, iD))), 128))])], 64)) : g.value ? G("", !0) : (V(), H("p", aD, "У этого узла пока нет нарисованных связей в выбранной схеме.")),
				g.value && x.value.length ? (V(), H(B, { key: 2 }, [U("h4", null, "Другие жанры раздела «" + O(y.value.family) + "»", 1), U("div", oD, [(V(!0), H(B, null, z(x.value, (e) => (V(), H("button", {
					key: e.id,
					type: "button",
					class: "sb-gt-related-btn",
					"data-sb-gt-action": "select",
					"data-id": e.id,
					onClick: (t) => ne(e.id)
				}, [n[14] ||= U("span", { class: "sb-gt-related-mark" }, "♫", -1), U("span", null, [U("strong", null, O(e.name), 1)])], 8, sD))), 128))])], 64)) : G("", !0)
			])) : G("", !0),
			n[15] ||= U("p", { class: "sb-gt-note" }, "Схема показывает основные исторические влияния и стилистические пересечения. Жанры могут развиваться параллельно; стрелки не означают единственное происхождение.", -1)
		]));
	}
}, [["__scopeId", "data-v-6e70f61e"]]);
// src/vue/academy/legacyGenreTreeBridge.js
function lD({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_GENRE_TREE, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => {
			let t = e.querySelector("#sb-genre-tree");
			return t?.open ? t.querySelector("#sb-gt-inner") : null;
		},
		readSnapshot: () => {
			let e = t.snapshot();
			return e?.trees?.length && e?.genres?.length ? e : null;
		},
		mount: (n, r) => e(n, cD, {
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
var uD = {
	class: "gb-grid",
	"data-sb-vue-overview": ""
}, dD = { class: "gb-column" }, fD = { class: "gb-panel pink" }, pD = { class: "gb-unit" }, mD = { class: "gb-unit" }, hD = { class: "gb-unit" }, gD = { class: "gb-panel" }, _D = ["innerHTML"], vD = { class: "gb-column" }, yD = { class: "gb-panel blue" }, bD = {
	class: "gb-bpm-value",
	style: {
		"font-size": "26px",
		"font-weight": "900"
	}
}, xD = { class: "gb-artists" }, SD = { class: "gb-panel pink" }, CD = ["data-id"], wD = ["innerHTML"], TD = {
	__name: "GenreOverview",
	props: { genre: {
		type: Object,
		required: !0
	} },
	emits: ["select-tab"],
	setup(e) {
		return (t, n) => (V(), H("div", uD, [U("div", dD, [U("section", fD, [
			n[7] ||= U("div", { class: "gb-sup" }, "01 / ЗНАКОМСТВО С ЖАНРОМ", -1),
			n[8] ||= U("h2", null, "Характер и звучание", -1),
			U("p", null, [U("strong", null, O(e.genre.tagline), 1)]),
			U("p", null, O(e.genre.description), 1),
			U("div", pD, [n[2] ||= U("b", null, "🎸", -1), U("div", null, [n[1] ||= U("strong", null, "Инструменты", -1), U("span", null, O(e.genre.instruments) + ".", 1)])]),
			U("div", mD, [n[4] ||= U("b", null, "🎛️", -1), U("div", null, [n[3] ||= U("strong", null, "Саунд", -1), U("span", null, O(e.genre.style) + ".", 1)])]),
			U("div", hD, [n[6] ||= U("b", null, "✍️", -1), U("div", null, [n[5] ||= U("strong", null, "Тематика песен", -1), U("span", null, O(e.genre.themes) + ".", 1)])])
		]), U("section", gD, [
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
			}, null, 8, _D)])
		])]), U("div", vD, [U("section", yD, [
			n[12] ||= U("div", { class: "gb-sup" }, "02 / ПАСПОРТ НАПРАВЛЕНИЯ", -1),
			n[13] ||= U("h2", null, "История и сцена", -1),
			n[14] ||= U("div", { class: "info-label" }, "Эпоха", -1),
			U("p", null, O(e.genre.era), 1),
			n[15] ||= U("div", { class: "info-label" }, "Диапазон темпа", -1),
			U("p", bD, O(e.genre.bpm[0]) + "–" + O(e.genre.bpm[1]) + " BPM", 1),
			n[16] ||= U("div", { class: "info-label" }, "Исполнители для знакомства", -1),
			U("div", xD, [(V(!0), H(B, null, z(e.genre.artists, (e) => (V(), H("span", { key: e }, O(e), 1))), 128))])
		]), U("section", SD, [n[18] ||= da("<div class=\"gb-sup\">04 / ТВОЯ МУЗЫКА</div><h2>Преврати знания в трек</h2><p>Выбери вокал, настроение и темп, затем создай промпт и структуру песни в Suno Studio.</p><div class=\"gb-unit\"><b>🎤</b><div><strong>Вокал</strong><span>Мужской, женский или дуэт; можно использовать русский язык.</span></div></div><div class=\"gb-unit\"><b>⚡</b><div><strong>Динамика</strong><span>Настрой энергию и характер припева под историю.</span></div></div>", 5), U("button", {
			type: "button",
			class: "btn primary small",
			"data-action": "use-genre",
			"data-id": e.genre.id
		}, [U("span", {
			innerHTML: e.genre.icons.studio,
			"aria-hidden": "true"
		}, null, 8, wD), n[17] ||= W(" Открыть студию ", -1)], 8, CD)])])]));
	}
}, ED = {
	key: 0,
	id: "sb-artist-expanded",
	class: "ahx-wrap",
	"data-sb-vue-artists": ""
}, DD = { class: "ahx-intro" }, OD = { class: "gb-eyebrow" }, kD = {
	class: "ahx-toolbar",
	role: "group",
	"aria-label": "Музыкальные сцены"
}, AD = ["aria-pressed"], jD = ["aria-pressed"], MD = { class: "ahx-filters" }, ND = { class: "ahx-search" }, PD = ["innerHTML"], FD = {
	class: "ahx-filter-buttons",
	role: "group",
	"aria-label": "Фильтр исполнителей"
}, ID = [
	"data-vue-artist-filter",
	"aria-pressed",
	"onClick"
], LD = {
	id: "ahx-count",
	class: "ahx-count",
	"aria-live": "polite"
}, RD = { class: "ahx-section-head" }, zD = { class: "ahx-eyebrow" }, BD = { class: "ahx-num" }, VD = { class: "ahx-grid" }, HD = ["data-ahx-group"], UD = { class: "ahx-card-top" }, WD = {
	class: "ahx-avatar",
	"aria-hidden": "true"
}, GD = { class: "ahx-title" }, KD = { class: "ahx-era" }, qD = {
	key: 0,
	class: "ahx-track"
}, JD = {
	key: 1,
	class: "sb-ap-inline-actions"
}, YD = ["data-name", "onClick"], XD = [
	"data-name",
	"aria-label",
	"aria-pressed",
	"onClick"
], ZD = {
	id: "ahx-no-results",
	class: "ahx-no-results"
}, QD = {
	key: 1,
	class: "ahx-empty"
}, $D = {
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
		profiles: {
			type: Object,
			default: null
		}
	},
	setup(e) {
		let t = e, n = /* @__PURE__ */ P(new Set(t.profiles?.favoriteKeys() || [])), r = t.profiles?.subscribe(() => {
			n.value = new Set(t.profiles.favoriteKeys());
		});
		Sr(() => r?.());
		let i = (e) => n.value.has(t.profiles?.key(e));
		function a(e, n) {
			t.profiles?.openProfile(e.name, {
				genre: t.genre.id,
				locale: o.value,
				period: e.period,
				bio: e.bio,
				track: e.track
			}, n);
		}
		let o = /* @__PURE__ */ N(t.catalog.initialScene()), s = /* @__PURE__ */ N(""), c = /* @__PURE__ */ N("all"), l = K(() => t.catalog.getScene(t.genre.id, o.value)), u = K(() => (l.value?.groups || []).map((e) => ({
			...e,
			artists: e.artists.filter((e) => {
				let t = !s.value.trim() || [
					e.name,
					e.period || "Музыкальная сцена",
					e.label,
					e.bio || "Музыкальное направление и характерный творческий почерк.",
					e.track
				].join(" ").toLocaleLowerCase("ru").includes(s.value.toLocaleLowerCase("ru").trim()), n = c.value === "all" || (c.value === "adjacent" ? e.group === "adjacent" : e.group !== "adjacent");
				return t && n;
			})
		}))), d = K(() => u.value.reduce((e, t) => e + t.artists.length, 0)), f = K(() => (l.value?.groups || []).reduce((e, t) => e + t.artists.length, 0));
		function p(e) {
			(e === "ru" || e === "world") && (o.value = e, t.catalog.setScene(e), s.value = "", c.value = "all");
		}
		function m(e) {
			return "Добавить в избранное: " + e.name;
		}
		return (t, n) => l.value ? (V(), H("div", ED, [
			U("div", DD, [
				U("div", OD, "АКАДЕМИЯ SUNOBOOM · " + O(e.genre.name), 1),
				n[4] ||= U("h2", null, "Исполнители и композиторы", -1),
				U("p", null, O(l.value.description), 1)
			]),
			U("div", kD, [U("button", {
				type: "button",
				"data-vue-artist-scene": "world",
				"aria-pressed": o.value === "world",
				class: D({ on: o.value === "world" }),
				onClick: n[0] ||= (e) => p("world")
			}, [n[5] ||= W(" 🌍 Мировая сцена ", -1), U("span", null, O(l.value.worldCount), 1)], 10, AD), U("button", {
				type: "button",
				"data-vue-artist-scene": "ru",
				"aria-pressed": o.value === "ru",
				class: D({ on: o.value === "ru" }),
				onClick: n[1] ||= (e) => p("ru")
			}, [n[6] ||= W(" 🎤 Русскоязычные ", -1), U("span", null, O(l.value.ruCount), 1)], 10, jD)]),
			f.value ? (V(), H(B, { key: 0 }, [
				U("div", MD, [U("label", ND, [U("span", {
					"aria-hidden": "true",
					innerHTML: e.genre.icons.overview
				}, null, 8, PD), I(U("input", {
					"onUpdate:modelValue": n[2] ||= (e) => s.value = e,
					type: "search",
					"data-vue-artist-search": "",
					placeholder: "Найти исполнителя или произведение…",
					"aria-label": "Поиск по исполнителям"
				}, null, 512), [[q, s.value]])]), U("div", FD, [(V(), H(B, null, z([
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
					"aria-pressed": c.value === e.id,
					onClick: (t) => c.value = e.id
				}, O(e.label), 9, ID)), 64))])]),
				U("p", LD, "Показано " + O(d.value) + " из " + O(f.value) + " исполнителей.", 1),
				(V(!0), H(B, null, z(u.value, (t) => I((V(), H("section", {
					key: t.index,
					class: "ahx-section",
					"data-ahx-section": ""
				}, [U("div", RD, [U("div", null, [U("span", zD, "0" + O(t.index + 1) + " / ИСПОЛНИТЕЛИ", 1), U("h3", null, O(t.index ? "Современная сцена и продолжатели" : "Классика и предшественники"), 1)]), U("span", BD, O(t.artists.length), 1)]), U("div", VD, [(V(!0), H(B, null, z(t.artists, (t) => (V(), H("article", {
					key: t.key,
					class: "ahx-card",
					"data-ahx-group": t.group
				}, [
					U("div", UD, [U("span", WD, O(t.initials), 1), U("div", GD, [U("h4", null, O(t.name), 1), U("span", KD, O(t.period || "Музыкальная сцена"), 1)])]),
					U("span", { class: D(["ahx-role", { "ahx-role-neighbor": t.group === "adjacent" }]) }, O(t.label), 3),
					U("p", null, O(t.bio || "Музыкальное направление и характерный творческий почерк."), 1),
					t.track ? (V(), H("div", qD, [n[7] ||= U("small", null, "Ориентир для прослушивания", -1), U("strong", null, "♫ " + O(t.track), 1)])) : G("", !0),
					e.profiles ? (V(), H("div", JD, [U("button", {
						type: "button",
						class: "sb-ap-inline-open",
						"data-sb-ap-action": "profile",
						"data-name": t.name,
						onClick: J((e) => a(t, e.currentTarget), ["stop"])
					}, "Полный профиль →", 8, YD), U("button", {
						type: "button",
						class: "sb-ap-inline-star",
						"data-sb-ap-action": "favorite",
						"data-name": t.name,
						"aria-label": m(t),
						"aria-pressed": i(t.name),
						onClick: J((n) => e.profiles.toggleFavorite(t.name), ["stop"])
					}, O(i(t.name) ? "★" : "☆"), 9, XD)])) : G("", !0)
				], 8, HD))), 128))])])), [[$a, t.artists.length]])), 128)),
				I(U("div", ZD, " По заданному поиску исполнители не найдены. Попробуй другой запрос или выбери «Все». ", 512), [[$a, d.value === 0]])
			], 64)) : (V(), H("div", QD, [
				n[8] ||= U("strong", null, "Русскоязычная подборка ещё уточняется", -1),
				n[9] ||= U("p", null, "Для этого узкого направления пока нет достаточно подтверждённых примеров. Мы не будем подставлять артистов из других жанров без пояснения.", -1),
				U("button", {
					class: "btn ghost",
					type: "button",
					onClick: n[3] ||= (e) => p("world")
				}, "Посмотреть мировую сцену")
			])),
			n[10] ||= U("p", { class: "ahx-footnote" }, "В подборках могут встречаться близкие стили, кино- и игровая музыка, инструментальные коллективы. Их связь с жанром поясняется в карточке. Указанные произведения — ориентиры для знакомства, а не ссылки на конкретные релизы.", -1)
		])) : G("", !0);
	}
}, eO = {
	class: "idea-grid",
	"data-sb-vue-ideas": ""
}, tO = { class: "idea-badge" }, nO = { class: "actions" }, rO = ["data-id", "data-i"], iO = ["innerHTML"], aO = [
	"data-id",
	"data-i",
	"aria-pressed"
], oO = ["innerHTML"], sO = {
	__name: "GenreIdeas",
	props: { genre: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (V(), H("div", eO, [(V(!0), H(B, null, z(e.genre.allIdeas, (t) => (V(), H("div", {
			key: t.index,
			class: "idea"
		}, [
			U("div", tO, O(e.genre.name) + " · " + O(t.mood), 1),
			U("h3", null, O(t.title), 1),
			U("p", null, O(t.pitch), 1),
			U("div", nO, [U("button", {
				type: "button",
				class: "btn primary small",
				"data-action": "idea-use",
				"data-id": e.genre.id,
				"data-i": t.index
			}, [U("span", {
				"aria-hidden": "true",
				innerHTML: e.genre.icons.studio
			}, null, 8, iO), n[0] ||= W(" В студию ", -1)], 8, rO), U("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "idea-save",
				"data-id": e.genre.id,
				"data-i": t.index,
				"aria-pressed": t.saved ? "true" : "false"
			}, [U("span", {
				"aria-hidden": "true",
				innerHTML: e.genre.icons.heart
			}, null, 8, oO), W(" " + O(t.saved ? "Сохранено" : "Сохранить"), 1)], 8, aO)])
		]))), 128))]));
	}
}, cO = {
	class: "panel",
	"data-sb-vue-prompts": ""
}, lO = { class: "idea-grid" }, uO = { class: "idea" }, dO = ["data-id"], fO = ["innerHTML"], pO = { class: "idea" }, mO = ["data-id"], hO = ["innerHTML"], gO = {
	__name: "GenrePrompts",
	props: { genre: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (V(), H("div", cO, [
			n[5] ||= U("h3", null, "Шаблоны звучания", -1),
			n[6] ||= U("p", null, "Начни с одного из вариантов. Он перенесёт настройки жанра в конструктор — там можно выбрать вокал, настроение и язык.", -1),
			U("div", lO, [U("div", uO, [
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
				}, null, 8, fO)], 8, dO)
			]), U("div", pO, [
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
				}, null, 8, hO)], 8, mO)
			])])
		]));
	}
}, _O = { class: "gb-hero" }, vO = { class: "gb-content" }, yO = { class: "gb-eyebrow" }, bO = { class: "gb-title" }, xO = { class: "gb-desc" }, SO = { class: "gb-tags" }, CO = { class: "gb-buttons" }, wO = ["data-id"], TO = ["innerHTML"], EO = ["data-id"], DO = ["innerHTML"], OO = {
	class: "gb-vinyl",
	"aria-hidden": "true"
}, kO = { class: "gb-equalizer" }, AO = { class: "gb-facts" }, jO = { class: "gb-fact" }, MO = { class: "gb-fact" }, NO = { class: "gb-fact" }, PO = { class: "gb-fact" }, FO = { class: "genre-detail-layout" }, IO = {
	class: "genre-side-nav",
	"aria-label": "ЖАНР-НАВ — меню жанра"
}, LO = {
	class: "genre-side-links",
	"aria-label": "Разделы жанра"
}, RO = [
	"data-tab",
	"aria-current",
	"onClick"
], zO = ["innerHTML"], BO = {
	class: "genre-detail-content",
	id: "genre-nav-content",
	"aria-label": "Содержимое раздела жанра"
}, VO = ["innerHTML"], HO = {
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
		artistProfiles: {
			type: Object,
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
		}, [U("div", _O, [
			r[5] ||= U("div", { class: "gb-top" }, [U("button", {
				type: "button",
				class: "back",
				"data-action": "academy-back",
				"aria-label": "Назад к разделу Академии"
			}, "← Назад"), U("small", null, "SUNOBOOM · MUSIC ATLAS")], -1),
			U("div", vO, [U("div", null, [
				U("div", yO, O(e.genre.family) + " · " + O(e.genre.era), 1),
				U("h1", bO, O(e.genre.name), 1),
				U("p", xO, O(e.genre.description), 1),
				U("div", SO, [
					U("span", null, O(e.genre.tagline), 1),
					U("span", null, O(e.genre.bpm[0]) + "–" + O(e.genre.bpm[1]) + " BPM", 1),
					U("span", null, O(e.genre.ideasCount) + " идеи", 1)
				]),
				U("div", CO, [U("button", {
					type: "button",
					class: "btn primary",
					"data-action": "use-genre",
					"data-id": e.genre.id
				}, [U("span", {
					innerHTML: e.genre.icons.studio,
					"aria-hidden": "true"
				}, null, 8, TO), r[0] ||= W(" Создать в Suno ", -1)], 8, wO), U("button", {
					type: "button",
					class: "btn ghost",
					"data-action": "favorite",
					"data-id": e.genre.id
				}, [U("span", {
					innerHTML: e.genre.icons.heart,
					"aria-hidden": "true"
				}, null, 8, DO), W(" " + O(e.genre.favorite ? "В избранном" : "В избранное"), 1)], 8, EO)])
			]), U("div", OO, [U("div", kO, [(V(), H(B, null, z(9, (e) => U("i", { key: e })), 64))])])]),
			U("div", AO, [
				U("div", jO, [r[1] ||= U("small", null, "История", -1), U("strong", null, O(e.genre.era), 1)]),
				U("div", MO, [r[2] ||= U("small", null, "Темп", -1), U("strong", null, O(e.genre.bpm[0]) + "–" + O(e.genre.bpm[1]) + " BPM", 1)]),
				U("div", NO, [r[3] ||= U("small", null, "Треки", -1), U("strong", null, O(e.genre.ideasCount) + " сюжетных идеи", 1)]),
				U("div", PO, [r[4] ||= U("small", null, "Артисты", -1), U("strong", null, O(e.genre.artistCount) + " ориентиров", 1)])
			])
		]), U("div", FO, [U("aside", IO, [r[7] ||= U("div", { class: "genre-side-head" }, [U("span", null, "ЖАНР-НАВ"), U("small", null, "Разделы карточки")], -1), U("nav", LO, [(V(), H(B, null, z(n, (t) => U("button", {
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
			}, null, 8, zO),
			U("span", null, O(t.label), 1),
			r[6] ||= U("span", {
				class: "genre-side-chevron",
				"aria-hidden": "true"
			}, "›", -1)
		], 10, RO)), 64))])]), U("section", BO, [i.value === "overview" ? (V(), na(TD, {
			key: 0,
			genre: e.genre,
			onSelectTab: o
		}, null, 8, ["genre"])) : i.value === "artists" && e.artistCatalog ? (V(), na($D, {
			key: 1,
			genre: e.genre,
			catalog: e.artistCatalog,
			profiles: e.artistProfiles
		}, null, 8, [
			"genre",
			"catalog",
			"profiles"
		])) : i.value === "ideas" ? (V(), na(sO, {
			key: 2,
			genre: e.genre
		}, null, 8, ["genre"])) : i.value === "prompts" ? (V(), na(gO, {
			key: 3,
			genre: e.genre
		}, null, 8, ["genre"])) : (V(), H("div", {
			key: 4,
			innerHTML: a.value
		}, null, 8, VO))])])], 4));
	}
};
// src/vue/academy/legacyGenreDetailBridge.js
function UO({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_GENRE, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-genre-detail"),
		readSnapshot: () => {
			let e = t.snapshot();
			return e?.id ? e : null;
		},
		mount: (n, r) => e(n, HO, {
			genre: r,
			tabContent: (e, n) => t.tabContent(e, n),
			artistCatalog: window.SUNOBOOM_ARTIST_CATALOG || null,
			artistProfiles: window.SUNOBOOM_ARTIST_PROFILES || null
		})
	});
}
// src/vue/studio/StudioBuilder.vue
var WO = { class: "panel" }, GO = { class: "field" }, KO = ["value"], qO = ["value"], JO = { class: "form-grid" }, YO = { class: "field" }, XO = ["value"], ZO = ["value"], QO = { class: "field" }, $O = ["value"], ek = ["value"], tk = { class: "field" }, nk = ["value"], rk = ["value"], ik = { class: "field" }, ak = ["value"], ok = ["value"], sk = { class: "field" }, ck = { for: "b-tempo" }, lk = {
	id: "tempo-num",
	style: { color: "#ffa8d5" }
}, uk = { class: "range" }, dk = ["value"], fk = { id: "bpm-output" }, pk = {
	class: "muted",
	style: { "font-size": "11px" }
}, mk = { class: "field" }, hk = ["value"], gk = { class: "field" }, _k = ["value"], vk = { class: "checkrow" }, yk = ["checked", "onChange"], bk = {
	class: "panel",
	style: {
		position: "sticky",
		top: "20px"
	}
}, xk = {
	class: "output",
	id: "prompt-output"
}, Sk = { class: "counter" }, Ck = { id: "prompt-count" }, wk = { class: "two-col" }, Tk = {
	class: "btn primary",
	type: "button",
	"data-action": "copy-prompt"
}, Ek = ["innerHTML"], Dk = {
	class: "btn ghost",
	type: "button",
	"data-action": "save-prompt"
}, Ok = ["innerHTML"], kk = {
	key: 0,
	class: "notice",
	"data-sb-vue-mixer-recap": ""
}, Ak = {
	key: 1,
	class: "notice",
	"data-sb-vue-arranger-recap": ""
}, jk = { class: "list-pills" }, Mk = {
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
		return R(() => window.addEventListener("sunoboom:studio-updated", f)), Sr(() => window.removeEventListener("sunoboom:studio-updated", f)), (e, t) => (V(), H(B, null, [U("div", WO, [
			t[17] ||= U("h3", null, "Параметры трека", -1),
			U("div", GO, [t[8] ||= U("label", { for: "b-genre" }, "Жанр", -1), U("select", {
				id: "b-genre",
				value: i.value.genre,
				onChange: t[0] ||= (e) => p("genre", e.target.value)
			}, [(V(!0), H(B, null, z(n.value.genres, (e) => (V(), H("option", {
				key: e.id,
				value: e.id
			}, O(e.name), 9, qO))), 128))], 40, KO)]),
			U("div", JO, [
				U("div", YO, [t[9] ||= U("label", { for: "b-mood" }, "Настроение", -1), U("select", {
					id: "b-mood",
					value: i.value.mood,
					onChange: t[1] ||= (e) => p("mood", e.target.value)
				}, [(V(), H(B, null, z(s, ([e, t]) => U("option", {
					key: e,
					value: e
				}, O(t), 9, ZO)), 64))], 40, XO)]),
				U("div", QO, [t[10] ||= U("label", { for: "b-vocal" }, "Вокал", -1), U("select", {
					id: "b-vocal",
					value: i.value.vocal,
					onChange: t[2] ||= (e) => p("vocal", e.target.value)
				}, [(V(), H(B, null, z(c, ([e, t]) => U("option", {
					key: e,
					value: e
				}, O(t), 9, ek)), 64))], 40, $O)]),
				U("div", tk, [t[11] ||= U("label", { for: "b-lang" }, "Язык текста", -1), U("select", {
					id: "b-lang",
					value: i.value.language,
					onChange: t[3] ||= (e) => p("language", e.target.value)
				}, [(V(), H(B, null, z(l, ([e, t]) => U("option", {
					key: e,
					value: e
				}, O(t), 9, rk)), 64))], 40, nk)]),
				U("div", ik, [t[12] ||= U("label", { for: "b-energy" }, "Энергия", -1), U("select", {
					id: "b-energy",
					value: i.value.energy,
					onChange: t[4] ||= (e) => p("energy", e.target.value)
				}, [(V(), H(B, null, z(u, ([e, t]) => U("option", {
					key: e,
					value: e
				}, O(t), 9, ok)), 64))], 40, ak)])
			]),
			U("div", sk, [
				U("label", ck, [
					t[13] ||= W("Темп · ", -1),
					U("span", lk, O(i.value.tempo), 1),
					t[14] ||= W(" BPM", -1)
				]),
				U("div", uk, [U("input", {
					type: "range",
					id: "b-tempo",
					min: "65",
					max: "200",
					step: "1",
					value: i.value.tempo,
					onInput: t[5] ||= (e) => p("tempo", Number(e.target.value))
				}, null, 40, dk), U("output", fk, O(i.value.tempo) + " BPM", 1)]),
				U("span", pk, " Обычно для «" + O(a.value.name) + "»: " + O(a.value.bpm[0]) + "–" + O(a.value.bpm[1]) + " BPM ", 1)
			]),
			U("div", mk, [t[15] ||= U("label", { for: "b-theme" }, "Тема / история трека", -1), U("textarea", {
				id: "b-theme",
				rows: "2",
				value: i.value.theme,
				onInput: t[6] ||= (e) => p("theme", e.target.value),
				placeholder: "О чём будет песня?"
			}, null, 40, hk)]),
			U("div", gk, [t[16] ||= U("label", { for: "b-extra" }, "Дополнительные инструкции (необязательно)", -1), U("textarea", {
				id: "b-extra",
				rows: "2",
				value: i.value.extra,
				onInput: t[7] ||= (e) => p("extra", e.target.value),
				placeholder: "Например: memorable chorus, short guitar solo"
			}, null, 40, _k)]),
			U("div", vk, [(V(), H(B, null, z(d, ([e, t]) => U("label", { key: e }, [U("input", {
				type: "checkbox",
				checked: i.value[e],
				onChange: (t) => p(e, t.target.checked)
			}, null, 40, yk), W(O(t), 1)])), 64))])
		]), U("div", bk, [
			t[22] ||= U("div", { class: "eyebrow" }, "Готово к Suno", -1),
			t[23] ||= U("h3", null, "Твой промпт", -1),
			U("div", xk, O(o.value), 1),
			U("div", Sk, [t[18] ||= U("span", null, "Максимум 1000 символов", -1), U("b", Ck, O(o.value.length) + " / 1000", 1)]),
			U("div", wk, [U("button", Tk, [U("span", {
				"aria-hidden": "true",
				innerHTML: n.value.icons.copy
			}, null, 8, Ek), t[19] ||= W(" Копировать ", -1)]), U("button", Dk, [U("span", {
				"aria-hidden": "true",
				innerHTML: n.value.icons.save
			}, null, 8, Ok), t[20] ||= W(" Сохранить ", -1)])]),
			t[24] ||= U("div", { class: "spacer" }, null, -1),
			F(r).mixerSummary.ready ? (V(), H("div", kk, [W(" Последний микс: " + O(F(r).mixerSummary.genreCount) + " жанра · " + O(F(r).mixerSummary.tempo) + " BPM · " + O(F(r).mixerSummary.promptLength) + " / 1000 символов. ", 1), t[21] ||= U("button", {
				type: "button",
				class: "link-action",
				"data-action": "nav",
				"data-nav": "mixer"
			}, "Перейти в Миксер →", -1)])) : G("", !0),
			F(r).arrangerSummary.ready ? (V(), H("div", Ak, " Аранжировка: " + O(F(r).arrangerSummary.blockCount) + " блоков · " + O(F(r).arrangerSummary.barCount) + " тактов · средняя энергия " + O(F(r).arrangerSummary.averageEnergy) + "/5 · " + O(F(r).arrangerSummary.transitionCount) + " переходов. ", 1)) : G("", !0),
			t[25] ||= U("div", { class: "notice" }, [U("strong", null, "Подсказка:"), W(" промпт задаёт стиль, а текст песни можно вводить отдельно в Suno. Результат генерации может отличаться от запроса.")], -1),
			t[26] ||= U("div", { class: "spacer" }, null, -1),
			t[27] ||= U("div", { class: "info-label" }, "Музыкальный профиль", -1),
			U("div", jk, [
				U("span", null, O(a.value.name), 1),
				U("span", null, O(a.value.family), 1),
				U("span", null, O(a.value.bpm[0]) + "–" + O(a.value.bpm[1]) + " BPM", 1)
			])
		])], 64));
	}
};
// src/vue/studio/legacyStudioBridge.js
function Nk({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_STUDIO, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector(".studio-grid"),
		readSnapshot: () => t.snapshot(),
		mount: (n) => {
			let r = e(n, Mk, { api: t });
			return r && (n.dataset.sbVueStudio = "true"), r;
		}
	});
}
// src/vue/studio/GenreMixer.vue
var Pk = { class: "heading" }, Fk = {
	key: 0,
	class: "gm-muted",
	"data-sb-vue-studio-recap": ""
}, Ik = { class: "gm-layout" }, Lk = { class: "gm-panel" }, Rk = { class: "gm-stack" }, zk = { class: "gm-row-top" }, Bk = { class: "gm-rank" }, Vk = { class: "gm-field gm-genre-select" }, Hk = ["for"], Uk = [
	"id",
	"value",
	"data-gm-genre"
], Wk = ["label"], Gk = ["value"], Kk = ["data-gm-value"], qk = [
	"data-slot",
	"aria-label",
	"disabled"
], Jk = { class: "gm-slider-line" }, Yk = [
	"max",
	"value",
	"data-gm-weight",
	"aria-label"
], Xk = { class: "gm-meter" }, Zk = ["data-gm-meter"], Qk = { class: "gm-sub" }, $k = { class: "gm-actions" }, eA = ["disabled"], tA = {
	class: "gm-mixture",
	"aria-label": "Доли музыкальных жанров"
}, nA = ["data-gm-mixbar", "title"], rA = { class: "gm-form-grid" }, iA = ["for"], aA = [
	"id",
	"value",
	"data-gm-setting"
], oA = ["value"], sA = { class: "gm-tempo" }, cA = ["checked"], lA = { class: "gm-tempo-row" }, uA = ["value", "disabled"], dA = { id: "gm-bpm" }, fA = { class: "gm-field" }, pA = ["value"], mA = { class: "gm-checks" }, hA = ["data-gm-setting", "checked"], gA = { class: "gm-panel gm-output-panel" }, _A = {
	class: "gm-output",
	id: "gm-prompt",
	"aria-live": "polite"
}, vA = { class: "gm-prompt-meta" }, yA = { id: "gm-count" }, bA = { class: "gm-field" }, xA = ["value"], SA = { class: "gm-saved-list" }, CA = {
	key: 0,
	class: "gm-muted"
}, wA = { class: "gm-saved-actions" }, TA = ["data-id"], EA = ["data-id", "aria-label"], DA = {
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
		return (e, t) => (V(), H(B, null, [U("header", Pk, [
			t[1] ||= U("div", { class: "eyebrow" }, "Suno Studio · новый инструмент", -1),
			t[2] ||= U("h1", null, [W("Жанровый "), U("span", { class: "gm-highlight" }, "миксер")], -1),
			t[3] ||= U("p", null, "Соединяй от 2 до 4 жанров из Академии SUNOBOOM, задавай пропорции и создавай готовый Style-промпт для Suno.", -1),
			F(r).studioSummary.ready ? (V(), H("p", Fk, [W(" Текущая Студия: " + O(F(r).studioSummary.tempo) + " BPM · " + O(F(r).studioSummary.promptLength) + " / 1000 символов. ", 1), t[0] ||= U("button", {
				type: "button",
				class: "link-action",
				"data-action": "nav",
				"data-nav": "studio"
			}, "Вернуться в Студию →", -1)])) : G("", !0)
		]), U("div", Ik, [U("section", Lk, [
			t[7] ||= U("div", { class: "gm-section-head" }, [U("div", null, [U("h2", null, "Формула звучания"), U("p", null, "Меняй жанры и двигай ползунки — сумма всегда равна 100%.")]), U("span", { class: "gm-total" }, "Σ 100%")], -1),
			U("div", Rk, [(V(!0), H(B, null, z(i.value, (e, t) => (V(), H("article", {
				key: e.id,
				class: "gm-row",
				style: E({ "--gm-color": e.color })
			}, [
				U("div", zk, [
					U("span", Bk, O(String(t + 1).padStart(2, "0")), 1),
					U("div", Vk, [U("label", { for: "gm-genre-" + t }, "Музыкальное направление", 8, Hk), U("select", {
						id: "gm-genre-" + t,
						value: e.id,
						"data-gm-genre": t
					}, [(V(!0), H(B, null, z(p(t), (e) => (V(), H("optgroup", {
						key: e.family,
						label: e.family
					}, [(V(!0), H(B, null, z(e.items, (e) => (V(), H("option", {
						key: e.id,
						value: e.id
					}, O(e.name), 9, Gk))), 128))], 8, Wk))), 128))], 8, Uk)]),
					U("span", {
						class: "gm-percent",
						"data-gm-value": t
					}, O(e.weight) + "%", 9, Kk),
					U("button", {
						type: "button",
						class: "gm-remove",
						"data-action": "gm-remove",
						"data-slot": t,
						"aria-label": "Убрать жанр " + e.name,
						title: "Убрать жанр",
						disabled: i.value.length <= 2
					}, "×", 8, qk)
				]),
				U("div", Jk, [U("input", {
					type: "range",
					min: "5",
					max: 100 - 5 * (i.value.length - 1),
					step: "1",
					value: e.weight,
					"data-gm-weight": t,
					"aria-label": "Доля жанра " + e.name
				}, null, 8, Yk), U("div", Xk, [U("span", {
					"data-gm-meter": t,
					style: E({ width: e.weight + "%" })
				}, null, 12, Zk)])]),
				U("p", Qk, O(e.family) + " · " + O(e.tagline) + " · " + O(e.instruments), 1)
			], 4))), 128))]),
			U("div", $k, [U("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "gm-add",
				disabled: i.value.length >= 4
			}, "＋ Добавить жанр", 8, eA), t[4] ||= U("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "gm-equal"
			}, "Поровну", -1)]),
			U("div", tA, [(V(!0), H(B, null, z(i.value, (e) => (V(), H("span", {
				key: e.id,
				"data-gm-mixbar": e.id,
				style: E({
					width: e.weight + "%",
					background: e.color
				}),
				title: e.name + ": " + e.weight + "%"
			}, null, 12, nA))), 128))]),
			t[8] ||= U("p", { class: "gm-muted" }, "Проценты — творческий ориентир для генерации, а не гарантия точного соотношения в готовой музыке.", -1),
			t[9] ||= U("div", { class: "gm-divider" }, null, -1),
			t[10] ||= U("h2", null, "Характер композиции", -1),
			U("div", rA, [(V(!0), H(B, null, z(m.value, (e) => (V(), H("div", {
				key: e.key,
				class: "gm-field"
			}, [U("label", { for: "gm-" + e.key }, O(e.label), 9, iA), U("select", {
				id: "gm-" + e.key,
				value: o.value[e.key],
				"data-gm-setting": e.key
			}, [(V(!0), H(B, null, z(e.choices, ([e, t]) => (V(), H("option", {
				key: e,
				value: e
			}, O(t), 9, oA))), 128))], 8, aA)]))), 128))]),
			U("div", sA, [U("label", null, [U("input", {
				type: "checkbox",
				"data-gm-setting": "autoTempo",
				checked: o.value.autoTempo
			}, null, 8, cA), t[5] ||= W(" Определять темп по жанрам", -1)]), U("div", lA, [U("input", {
				id: "gm-tempo",
				type: "range",
				min: "65",
				max: "200",
				value: u.value,
				"data-gm-setting": "tempo",
				disabled: o.value.autoTempo
			}, null, 8, uA), U("b", dA, O(u.value) + " BPM", 1)])]),
			U("div", fA, [t[6] ||= U("label", { for: "gm-theme" }, "Тема песни (необязательно)", -1), U("textarea", {
				id: "gm-theme",
				rows: "2",
				maxlength: "170",
				"data-gm-setting": "theme",
				value: o.value.theme,
				placeholder: "Например: ночной город, встреча после долгой разлуки"
			}, null, 8, pA)]),
			U("div", mA, [(V(), H(B, null, z(h, ([e, t]) => U("label", { key: e }, [U("input", {
				type: "checkbox",
				"data-gm-setting": e,
				checked: o.value[e]
			}, null, 8, hA), W(" " + O(t), 1)])), 64))])
		]), U("aside", gA, [
			t[13] ||= U("div", { class: "eyebrow" }, "Результат микширования", -1),
			t[14] ||= U("h2", null, "Гибридный Style-промпт", -1),
			U("div", _A, O(l.value), 1),
			U("div", vA, [t[11] ||= U("span", null, "На английском · готово для Suno", -1), U("b", yA, O(l.value.length) + " / 1000", 1)]),
			t[15] ||= da("<div class=\"gm-output-actions\"><button type=\"button\" class=\"btn primary\" data-action=\"gm-copy\">Копировать</button><button type=\"button\" class=\"btn ghost\" data-action=\"gm-to-studio\">В Suno Studio</button></div><button type=\"button\" class=\"btn ghost gm-full\" data-action=\"gm-save-prompt\">Сохранить в «Мои промпты»</button><div class=\"gm-divider\"></div><h3>Мои сочетания</h3>", 4),
			U("div", bA, [t[12] ||= U("label", { for: "gm-title" }, "Название сочетания", -1), U("input", {
				id: "gm-title",
				type: "text",
				maxlength: "90",
				"data-gm-title": "",
				value: d.value,
				placeholder: "Например: Северный электро-фолк"
			}, null, 8, xA)]),
			t[16] ||= U("button", {
				type: "button",
				class: "btn ghost gm-full",
				"data-action": "gm-save-mix"
			}, "Сохранить формулу", -1),
			U("div", SA, [c.value.length ? G("", !0) : (V(), H("p", CA, "Сохранённых сочетаний пока нет. Придумай свой микс и сохрани его.")), (V(!0), H(B, null, z(c.value, (e) => (V(), H("article", {
				key: e.id,
				class: "gm-saved"
			}, [U("div", null, [U("strong", null, O(e.title), 1), U("small", null, O(e.summary), 1)]), U("div", wA, [U("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "gm-load",
				"data-id": e.id
			}, "Открыть", 8, TA), U("button", {
				type: "button",
				class: "btn danger small",
				"data-action": "gm-delete",
				"data-id": e.id,
				"aria-label": "Удалить " + e.title
			}, "×", 8, EA)])]))), 128))]),
			t[17] ||= U("p", { class: "gm-muted" }, "Сохраняется в этом браузере и входит в общую JSON-копию данных SUNOBOOM. Подключение к ИИ для смешивания не требуется.", -1)
		])])], 64));
	}
};
// src/vue/studio/legacyMixerBridge.js
function OA({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_MIXER, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-mixer-root"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, DA, { api: t })
	});
}
// src/vue/studio/PromptAuditor.vue
var kA = {
	class: "sbpa-tabs",
	role: "group",
	"aria-label": "Источник промпта"
}, AA = ["aria-pressed"], jA = ["aria-pressed"], MA = {
	key: 0,
	class: "sbpa-manual"
}, NA = ["value"], PA = ["value"], FA = ["value"], IA = {
	key: 1,
	class: "sbpa-context"
}, LA = {
	id: "sbpa-results",
	"aria-live": "polite"
}, RA = { class: "sbpa-scoreline" }, zA = {
	class: "sbpa-score",
	"aria-label": "Эвристическая оценка промпта"
}, BA = { class: "sbpa-score-info" }, VA = ["aria-valuenow"], HA = {
	key: 0,
	class: "sbpa-issues"
}, UA = {
	key: 1,
	class: "sbpa-clear"
}, WA = { class: "sbpa-actions" }, GA = {
	key: 0,
	type: "button",
	"data-sbpa-action": "load-studio"
}, KA = { id: "sbpa-proposal-slot" }, qA = {
	key: 0,
	class: "sbpa-proposal"
}, JA = { key: 0 }, YA = { key: 1 }, XA = { key: 2 }, ZA = {
	key: 3,
	class: "sbpa-alert"
}, QA = ["value"], $A = {
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
			U("div", kA, [U("button", {
				type: "button",
				"data-sbpa-action": "studio",
				class: D({ active: !i.value }),
				"aria-pressed": !i.value
			}, "Текущий промпт Studio", 10, AA), U("button", {
				type: "button",
				"data-sbpa-action": "manual",
				class: D({ active: i.value }),
				"aria-pressed": i.value
			}, "Свой текст / вставка", 10, jA)]),
			i.value ? (V(), H("div", MA, [
				t[0] ||= U("label", { for: "sbpa-text" }, "Текст промпта", -1),
				U("textarea", {
					id: "sbpa-text",
					rows: "5",
					spellcheck: "false",
					placeholder: "Вставь текст на русском или английском…",
					value: n.value.manual
				}, null, 8, NA),
				t[1] ||= U("label", { for: "sbpa-genre" }, "Жанр для сопоставления с Академией", -1),
				U("select", {
					id: "sbpa-genre",
					value: o.value
				}, [(V(!0), H(B, null, z(s.value, (e) => (V(), H("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, FA))), 128))], 8, PA)
			])) : (V(), H("p", IA, " Проверяется актуальный промпт конструктора. Изменения настроек Studio отражаются здесь автоматически. ")),
			U("div", LA, [U("div", RA, [
				U("div", zA, [W(O(a.value.score), 1), t[2] ||= U("small", null, "/ 100", -1)]),
				U("div", BA, [
					U("strong", null, O(a.value.status), 1),
					t[3] ||= U("span", null, "Оценка ориентировочная: проверяется структура текста, а не качество будущей музыки.", -1),
					U("div", {
						class: "sbpa-meter",
						role: "progressbar",
						"aria-label": "Оценка промпта",
						"aria-valuenow": a.value.score,
						"aria-valuemin": "0",
						"aria-valuemax": "100"
					}, [U("span", { style: E({ width: a.value.score + "%" }) }, null, 4)], 8, VA)
				]),
				U("div", { class: D(["sbpa-limit", { over: a.value.length > 1e3 }]) }, O(a.value.length) + " / 1000 символов ", 3)
			]), a.value.issues?.length ? (V(), H("ul", HA, [(V(!0), H(B, null, z(a.value.issues, (e, t) => (V(), H("li", {
				key: t,
				class: D(["sbpa-item", "sbpa-" + e.kind])
			}, [U("div", null, [
				U("strong", null, O(e.title), 1),
				U("p", null, O(e.detail), 1),
				U("small", null, O(e.fix), 1)
			])], 2))), 128))])) : (V(), H("p", UA, " Явных противоречий и повторов по проверяемым правилам не найдено. "))]),
			U("div", WA, [t[4] ||= U("button", {
				type: "button",
				"data-sbpa-action": "preview",
				class: "sbpa-primary"
			}, " Показать улучшенный вариант ", -1), i.value ? (V(), H("button", GA, " Вставить текущий промпт Studio ")) : G("", !0)]),
			U("div", KA, [c.value ? (V(), H("div", qA, [
				U("h4", null, [t[5] ||= W("Предлагаемый вариант ", -1), U("small", null, O(l.value.text.length) + " / 1000", 1)]),
				l.value.removed.length ? (V(), H("p", YA, "Удалено фрагментов: " + O(l.value.removed.length) + ". Проверь смысл до копирования.", 1)) : (V(), H("p", JA, "Удалять нечего: текст уже без точных повторов.")),
				l.value.removed.length ? (V(), H("details", XA, [t[6] ||= U("summary", null, "Что изменилось", -1), U("ul", null, [(V(!0), H(B, null, z(l.value.removed, (e, t) => (V(), H("li", { key: t }, [U("b", null, O(e.reason) + ":", 1), W(" " + O(e.part), 1)]))), 128))])])) : G("", !0),
				l.value.complete ? G("", !0) : (V(), H("p", ZA, " Автоматического сокращения недостаточно. Уменьши текст вручную минимум на " + O(l.value.text.length - 1e3) + " символов. ", 1)),
				t[7] ||= U("label", { for: "sbpa-preview-text" }, "Редактируемый предпросмотр", -1),
				U("textarea", {
					id: "sbpa-preview-text",
					rows: "5",
					spellcheck: "false",
					value: l.value.text
				}, null, 8, QA),
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
function ej({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_AUDITOR, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sbpa-auditor"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, $A, { api: t })
	});
}
// src/vue/studio/ArrangementPanel.vue
var tj = ["data-sba-id", "data-sba-energy"], nj = { class: "sba-block-head" }, rj = ["data-sba-drag", "aria-label"], ij = { class: "sba-index" }, aj = {
	class: "sba-emoji",
	"aria-hidden": "true"
}, oj = { class: "sba-head-energy" }, sj = { class: "sba-block-actions" }, cj = ["data-id", "disabled"], lj = ["data-id", "disabled"], uj = ["data-id"], dj = ["data-id"], fj = { class: "sba-block-fields" }, pj = ["data-id", "value"], mj = ["value"], hj = ["data-id", "value"], gj = ["value"], _j = ["data-id", "value"], vj = ["value"], yj = { class: "sba-energy-field" }, bj = ["data-sba-output"], xj = ["value", "data-id"], Sj = { class: "sba-instrument-field" }, Cj = ["for"], wj = { class: "sba-instrument-row" }, Tj = [
	"id",
	"data-id",
	"value"
], Ej = ["id", "innerHTML"], Dj = ["id"], Oj = { class: "sba-sound-head" }, kj = ["data-id"], Aj = ["data-id"], jj = ["id"], Mj = {
	key: 0,
	class: "sba-sound-back"
}, Nj = ["data-id"], Pj = [
	"data-sba-sound-search",
	"data-id",
	"value",
	"placeholder"
], Fj = ["id"], Ij = { class: "sba-sound-info" }, Lj = { key: 0 }, Rj = ["data-id", "data-genre-id"], zj = {
	key: 0,
	class: "sba-sound-none"
}, Bj = { class: "sba-sound-group" }, Vj = [
	"disabled",
	"aria-disabled",
	"data-id",
	"data-sound-value"
], Hj = {
	key: 0,
	class: "sba-sound-none"
}, Uj = {
	key: 1,
	class: "sba-sound-foot"
}, Wj = ["data-id"], Gj = {
	key: 0,
	class: "sba-custom-label"
}, Kj = ["data-id", "value"], qj = ["innerHTML"], Jj = ["data-id", "aria-label"], Yj = {
	key: 0,
	class: "sba-empty"
}, Xj = ["aria-label"], Zj = [
	"data-sba-snake-id",
	"data-sba-energy",
	"aria-label",
	"title"
], Qj = { class: "sba-snake-num" }, $j = {
	class: "sba-snake-icon",
	"aria-hidden": "true"
}, eM = { class: "sba-snake-title" }, tM = { class: "sba-snake-level" }, nM = ["title"], rM = {
	key: 0,
	class: "sba-snake-more"
}, iM = {
	key: 1,
	class: "sba-snake-empty"
}, aM = ["data-sba-hub-from"], oM = { class: "sba-transition-hub-route" }, sM = { class: "sba-transition-hub-number" }, cM = { class: "sba-transition-hub-names" }, lM = { class: "sba-transition-hub-controls" }, uM = [
	"data-id",
	"value",
	"aria-label"
], dM = ["value"], fM = [
	"data-id",
	"value",
	"aria-label"
], pM = ["value"], mM = [
	"data-id",
	"value",
	"aria-label"
], hM = ["value"], gM = { class: "sba-transition-hub-actions" }, _M = ["data-id", "title"], vM = ["data-id"], yM = {
	key: 1,
	class: "sba-transition-hub-empty"
}, bM = ["title"], xM = { class: "sba-chart-column" }, SM = {
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
			}, [U("div", nj, [
				U("span", {
					class: "sba-drag",
					draggable: "true",
					"data-sba-drag": e.id,
					title: "Перетащить блок",
					"aria-label": "Перетащить " + e.sectionName
				}, "⠿", 8, rj),
				U("span", ij, O(String(t + 1).padStart(2, "0")), 1),
				U("span", aj, O(e.icon), 1),
				U("strong", null, O(e.label), 1),
				U("span", oj, "Энергия " + O(e.energy) + "/5", 1),
				U("div", sj, [
					U("button", {
						type: "button",
						"data-sba-action": "up",
						"data-id": e.id,
						"aria-label": "Переместить вверх",
						disabled: t === 0
					}, "↑", 8, cj),
					U("button", {
						type: "button",
						"data-sba-action": "down",
						"data-id": e.id,
						"aria-label": "Переместить вниз",
						disabled: t === i.value.length - 1
					}, "↓", 8, lj),
					U("button", {
						type: "button",
						"data-sba-action": "duplicate",
						"data-id": e.id,
						"aria-label": "Дублировать блок"
					}, "⧉", 8, uj),
					U("button", {
						type: "button",
						"data-sba-action": "remove",
						"data-id": e.id,
						"aria-label": "Удалить блок"
					}, "×", 8, dj)
				])
			]), U("div", fj, [
				U("label", null, [n[0] ||= W("Раздел ", -1), U("select", {
					"data-sba-field": "type",
					"data-id": e.id,
					value: e.type
				}, [(V(!0), H(B, null, z(a.value, (e) => (V(), H("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, mj))), 128))], 8, pj)]),
				U("label", null, [n[1] ||= W("Тактов ", -1), U("select", {
					"data-sba-field": "bars",
					"data-id": e.id,
					value: e.bars
				}, [(V(), H(B, null, z(m, (e) => U("option", {
					key: e,
					value: e
				}, O(e), 9, gj)), 64))], 8, hj)]),
				U("label", null, [n[2] ||= W("Вокал ", -1), U("select", {
					"data-sba-field": "vocal",
					"data-id": e.id,
					value: e.vocal
				}, [(V(!0), H(B, null, z(o.value, (e) => (V(), H("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, vj))), 128))], 8, _j)]),
				U("label", yj, [
					n[3] ||= W("Энергия ", -1),
					U("output", { "data-sba-output": e.id }, O(e.energy) + "/5 · " + O(s.value[e.energy]), 9, bj),
					U("input", {
						type: "range",
						min: "1",
						max: "5",
						step: "1",
						value: e.energy,
						"data-sba-field": "energy",
						"data-id": e.id
					}, null, 8, xj)
				]),
				U("div", Sj, [
					U("label", { for: "sba-instruments-" + e.id }, "Инструменты / приём", 8, Cj),
					U("div", wj, [U("input", {
						type: "text",
						id: "sba-instruments-" + e.id,
						maxlength: "300",
						"data-sba-field": "instruments",
						"data-id": e.id,
						value: e.instruments,
						placeholder: "Введи вручную или выбери рекомендацию",
						autocomplete: "off"
					}, null, 8, Tj)]),
					U("div", {
						class: "sba-quick-sounds",
						id: "sba-quick-" + e.id,
						innerHTML: e.quickSounds
					}, null, 8, Ej),
					e.soundPanel ? (V(), H("div", {
						key: 0,
						class: "sba-sound-panel",
						id: "sba-sound-panel-" + e.id,
						"aria-label": "Выбор инструментов и приёмов"
					}, [
						U("div", Oj, [n[4] ||= U("strong", null, "Библиотека инструментов и приёмов", -1), U("button", {
							type: "button",
							"data-sba-action": "sound-close",
							"data-id": e.id,
							"aria-label": "Закрыть подбор"
						}, "×", 8, kj)]),
						U("button", {
							type: "button",
							class: "sba-sound-genre-trigger",
							"data-sba-action": "sound-switch-mode",
							"data-id": e.id
						}, [
							n[5] ||= W(" Жанр: ", -1),
							U("b", null, O(e.soundPanel.genreName), 1),
							n[6] ||= U("span", null, "⌄", -1)
						], 8, Aj),
						U("div", { id: "sba-sound-body-" + e.id }, [
							e.soundPanel.mode === "genres" ? (V(), H("div", Mj, [U("button", {
								type: "button",
								"data-sba-action": "sound-switch-mode",
								"data-id": e.id
							}, " ← К инструментам ", 8, Nj)])) : G("", !0),
							U("input", {
								type: "search",
								class: "sba-sound-search",
								"data-sba-sound-search": e.soundPanel.mode,
								"data-id": e.id,
								value: e.soundPanel.query,
								placeholder: e.soundPanel.mode === "genres" ? "Поиск по всей Академии..." : "Поиск инструмента или приёма...",
								autocomplete: "off",
								"aria-label": "Поиск инструментов или жанров"
							}, null, 8, Pj),
							U("div", {
								class: "sba-sound-list",
								id: "sba-sound-results-" + e.id
							}, [e.soundPanel.mode === "genres" ? (V(), H(B, { key: 0 }, [
								U("div", Ij, [W(" Найдено жанров: " + O(e.soundPanel.total) + " ", 1), e.soundPanel.total > e.soundPanel.matches.length ? (V(), H("span", Lj, " · уточни запрос ")) : G("", !0)]),
								(V(!0), H(B, null, z(e.soundPanel.matches, (t) => (V(), H("button", {
									key: t.id,
									type: "button",
									class: "sba-sound-genre-row",
									"data-sba-action": "sound-set-genre",
									"data-id": e.id,
									"data-genre-id": t.id
								}, [U("span", null, O(t.name), 1), U("small", null, O(t.family), 1)], 8, Rj))), 128)),
								e.soundPanel.matches.length ? G("", !0) : (V(), H("p", zj, " Жанр не найден "))
							], 64)) : (V(), H(B, { key: 1 }, [(V(!0), H(B, null, z(e.soundPanel.groups, (t) => (V(), H(B, { key: t.title }, [U("div", Bj, O(t.title), 1), (V(!0), H(B, null, z(t.items, (t) => (V(), H("button", {
								key: t.name,
								type: "button",
								class: "sba-sound-option",
								disabled: t.added,
								"aria-disabled": t.added,
								"data-sba-action": "sound-add",
								"data-id": e.id,
								"data-sound-value": t.name
							}, [U("span", null, O(t.name), 1), U("small", null, O(t.added ? "✓ Добавлено" : "+ Добавить"), 1)], 8, Vj))), 128))], 64))), 128)), e.soundPanel.groups.length ? G("", !0) : (V(), H("p", Hj, " Совпадений нет. Можно ввести инструмент вручную. "))], 64))], 8, Fj),
							e.soundPanel.mode === "genres" ? G("", !0) : (V(), H("div", Uj, [n[7] ||= U("span", null, "Нажми «Добавить», чтобы дополнить поле. Свой текст сохраняется.", -1), U("button", {
								type: "button",
								"data-sba-action": "sound-clear",
								"data-id": e.id
							}, " Очистить поле ", 8, Wj)]))
						], 8, jj)
					], 8, Dj)) : G("", !0)
				]),
				e.type === "custom" ? (V(), H("label", Gj, [n[8] ||= W("Своё название ", -1), U("input", {
					type: "text",
					maxlength: "48",
					"data-sba-field": "customName",
					"data-id": e.id,
					value: e.customName,
					placeholder: "Название для тега Suno"
				}, null, 8, Kj)])) : G("", !0)
			])], 8, tj),
			e.transitionHTML ? (V(), H("div", {
				key: 0,
				style: { display: "contents" },
				innerHTML: e.transitionHTML
			}, null, 8, qj)) : G("", !0),
			U("button", {
				type: "button",
				class: "sba-between-add",
				"data-sba-action": "insert-after",
				"data-id": e.id,
				"aria-label": "Добавить блок после " + e.label
			}, [...n[9] ||= [U("span", { "aria-hidden": "true" }, "＋", -1), W(" Добавить после ", -1)]], 8, Jj)
		], 64))), 128)), i.value.length ? G("", !0) : (V(), H("div", Yj, "Пока нет блоков. Добавь первый фрагмент снизу."))], 64)) : e.kind === "snake" ? (V(), H(B, { key: 1 }, [i.value.length ? (V(), H(B, { key: 0 }, [(V(), H(B, null, z([6, 3], (e) => U("div", {
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
			U("span", Qj, O(e.index + 1), 1),
			U("span", $j, O(e.icon), 1),
			U("span", eM, O(e.snakeLabel), 1),
			U("span", tM, O(e.energy) + "/5", 1),
			e.hasTransition ? (V(), H("span", {
				key: 0,
				class: "sba-snake-transition",
				title: "Переход: " + e.transitionLabel,
				"aria-hidden": "true"
			}, "↝", 8, nM)) : G("", !0)
		], 8, Zj))), 128))], 2))), 128))], 10, Xj)), 64)), f.value.length < i.value.length ? (V(), H("p", rM, " … и ещё " + O(i.value.length - f.value.length) + " блоков ", 1)) : G("", !0)], 64)) : (V(), H("p", iM, "Добавь первый блок, и здесь появится схема композиции."))], 64)) : e.kind === "transitions" ? (V(), H(B, { key: 2 }, [c.value.length ? (V(!0), H(B, { key: 0 }, z(p.value, (e) => (V(), H("div", {
			key: e.id,
			class: D(["sba-transition-hub-row", { "sba-transition-hub-active": e.current.type !== "none" }]),
			"data-sba-hub-from": e.id
		}, [
			U("div", oM, [U("span", sM, O(e.index + 1) + " → " + O(e.index + 2), 1), U("span", cM, [
				W(O(e.from) + " ", 1),
				n[10] ||= U("b", null, "→", -1),
				W(" " + O(e.to), 1)
			])]),
			U("div", lM, [
				U("label", null, [n[11] ||= W("Эффект ", -1), U("select", {
					"data-sba-transition": "type",
					"data-id": e.id,
					value: e.current.type,
					"aria-label": "Переход " + (e.index + 1) + " к " + (e.index + 2)
				}, [(V(!0), H(B, null, z(l.value, (e) => (V(), H("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, dM))), 128))], 8, uM)]),
				U("label", null, [n[12] ||= W("Длина ", -1), U("select", {
					"data-sba-transition": "length",
					"data-id": e.id,
					value: e.current.length,
					"aria-label": "Длительность перехода " + (e.index + 1)
				}, [(V(!0), H(B, null, z(u.value, (e) => (V(), H("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, pM))), 128))], 8, fM)]),
				U("label", null, [n[13] ||= W("Сила ", -1), U("select", {
					"data-sba-transition": "strength",
					"data-id": e.id,
					value: e.current.strength,
					"aria-label": "Выраженность перехода " + (e.index + 1)
				}, [(V(!0), H(B, null, z(d.value, (e) => (V(), H("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, hM))), 128))], 8, mM)])
			]),
			U("div", gM, [U("button", {
				type: "button",
				"data-sba-action": "transition-suggest",
				"data-id": e.id,
				title: "Совет: " + e.advice
			}, "✧ Совет", 8, _M), U("button", {
				type: "button",
				"data-sba-action": "transition-hub-jump",
				"data-id": e.id
			}, "Подробнее ↓", 8, vM)])
		], 10, aM))), 128)) : (V(), H("p", yM, "Добавь второй блок, и здесь можно будет настроить переходы."))], 64)) : e.kind === "energy" ? (V(!0), H(B, { key: 3 }, z(i.value, (e) => (V(), H("div", {
			key: e.id,
			class: "sba-chart-step",
			title: e.label + " · " + e.energy + "/5",
			style: E({
				"--energy": e.energy,
				"--bar-width": 100 / i.value.length + "%"
			})
		}, [U("div", xM, [U("i", { style: E({ "--level": e.energy }) }, null, 4)]), U("small", null, O(e.icon), 1)], 12, bM))), 128)) : G("", !0);
	}
}, CM = ["aria-expanded"], wM = { id: "sba-picked-label" }, TM = ["hidden"], EM = { class: "sba-preset-search-row" }, DM = ["value"], OM = {
	class: "sba-preset-filters",
	role: "group",
	"aria-label": "Тип вариантов"
}, kM = ["data-filter", "aria-pressed"], AM = {
	id: "sba-preset-results",
	class: "sba-preset-results",
	role: "listbox",
	"aria-label": "Доступные шаблоны и жанры"
}, jM = { class: "sba-preset-group-title" }, MM = { key: 0 }, NM = ["aria-selected", "data-choice"], PM = {
	key: 0,
	class: "sba-preset-no-results"
}, FM = {
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
			}, [U("span", wM, O(r.value.selected), 1), t[0] ||= U("span", {
				class: "sba-preset-chevron",
				"aria-hidden": "true"
			}, "⌄", -1)], 8, CM),
			U("div", {
				id: "sba-preset-menu",
				class: "sba-preset-menu",
				role: "dialog",
				"aria-label": "Поиск шаблона или жанра",
				hidden: !r.value.open
			}, [
				U("div", EM, [U("input", {
					type: "search",
					id: "sba-preset-search",
					autocomplete: "off",
					value: r.value.query,
					placeholder: "Найти жанр или шаблон...",
					"aria-label": "Поиск жанра"
				}, null, 8, DM), t[1] ||= U("button", {
					type: "button",
					"data-sba-action": "menu-close",
					"aria-label": "Закрыть меню"
				}, "×", -1)]),
				U("div", OM, [(V(!0), H(B, null, z([
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
				}, O(e.title), 9, kM))), 128))]),
				U("div", AM, [(V(!0), H(B, null, z(r.value.groups, (e) => (V(), H(B, { key: e.title }, [U("div", jM, [W(O(e.title) + " ", 1), e.count === null ? G("", !0) : (V(), H("small", MM, O(e.count), 1))]), (V(!0), H(B, null, z(e.items, (e) => (V(), H("button", {
					key: e.key,
					type: "button",
					role: "option",
					"aria-selected": e.key === r.value.selectedKey,
					"data-sba-action": "menu-choose",
					"data-choice": e.key
				}, [U("span", null, O(e.title), 1), U("small", null, O(e.subtitle), 1)], 8, NM))), 128))], 64))), 128)), r.value.groups.length ? G("", !0) : (V(), H("p", PM, " Ничего не найдено. Попробуй другое название или направление. "))])
			], 8, TM)
		], 64));
	}
}, IM = {
	class: "sba-preview-tabs",
	role: "group",
	"aria-label": "Тип результата"
}, LM = ["aria-pressed"], RM = ["aria-pressed"], zM = ["value"], BM = {
	class: "sba-preview-count",
	id: "sba-preview-count"
}, VM = {
	id: "sba-transfer-confirm",
	"aria-live": "polite"
}, HM = {
	key: 0,
	class: "sba-transfer-preview"
}, UM = ["hidden"], WM = [
	["#sba-cards", "cards"],
	["#sba-snake-track", "snake"],
	["#sba-transition-hub-list", "transitions"],
	["#sba-energy-chart", "energy"],
	[
		".sba-preset-picker",
		"picker",
		FM
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
					U("div", IM, [U("button", {
						type: "button",
						"data-sba-action": "tab",
						"data-tab": "lyrics",
						"aria-pressed": r.value.tab === "lyrics"
					}, "Теги Lyrics", 8, LM), U("button", {
						type: "button",
						"data-sba-action": "tab",
						"data-tab": "style",
						"aria-pressed": r.value.tab === "style"
					}, "Style", 8, RM)]),
					U("textarea", {
						id: "sba-preview",
						readonly: "",
						spellcheck: "false",
						"aria-label": "Готовые теги структуры песни",
						value: r.value.text
					}, null, 8, zM),
					U("div", BM, O(r.value.count), 1),
					t[4] ||= U("div", { class: "sba-result-actions" }, [U("button", {
						type: "button",
						class: "sba-btn sba-copy-btn",
						"data-sba-action": "copy"
					}, " Копировать результат "), U("button", {
						type: "button",
						class: "sba-btn sba-transfer-btn",
						"data-sba-action": "prepare-transfer"
					}, " Перенести стиль в Studio ")], -1),
					U("div", VM, [r.value.transfer ? (V(), H("div", HM, [
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
					}, O(r.value.message), 9, UM),
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
function GM({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ARRANGER, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Hc({
		root: n,
		islands: WM.map(([n, r, i = SM]) => ({
			key: r,
			selectTarget: (e) => e.querySelector(n),
			readSnapshot: () => t.snapshot(),
			mount: (n) => e(n, i, i === SM ? {
				api: t,
				kind: r
			} : { api: t })
		}))
	});
}
// src/vue/poetry/PoetryAnalysis.vue
var KM = {
	key: 0,
	class: "sb-poetry-empty"
}, qM = { class: "sb-poetry-stats" }, JM = { class: "sb-poetry-subline" }, YM = { class: "sb-poetry-sections" }, XM = { class: "sb-poetry-stanzas" }, ZM = { class: "sb-poetry-stanza-name" }, QM = { class: "sb-poetry-stanza-data" }, $M = { class: "sb-poetry-lines" }, eN = { class: "sb-poetry-line-main" }, tN = { class: "sb-poetry-index" }, nN = { class: "sb-poetry-verse" }, rN = {
	class: "sb-poetry-syllable",
	title: "Оценка слогов"
}, iN = ["title"], aN = {
	key: 0,
	class: "sb-poetry-footnote"
}, oN = {
	key: 1,
	class: "sb-poetry-words"
}, sN = { class: "sb-poetry-tips" }, cN = {
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
			U("div", qM, [(V(!0), H(B, null, z(r.value.stats, (e) => (V(), H("div", {
				key: e.label,
				class: "sb-poetry-stat"
			}, [U("strong", null, O(e.value), 1), U("span", null, O(e.label), 1)]))), 128))]),
			U("p", JM, " Диапазон: " + O(r.value.lower) + "–" + O(r.value.upper) + " слогов на строку · меток ударения: " + O(r.value.markedStress) + ". ", 1),
			U("div", YM, [t[1] ||= U("h4", null, "Строфы и предполагаемая рифмовка", -1), U("div", XM, [(V(!0), H(B, null, z(r.value.stanzas, (e) => (V(), H("div", {
				key: e.id,
				class: "sb-poetry-stanza"
			}, [U("div", ZM, O(e.section) + " · строфа " + O(e.position), 1), U("div", QM, [
				W(" Схема " + O(e.scheme) + " ", 1),
				t[0] ||= U("span", null, "·", -1),
				W(" разброс " + O(e.spread) + " сл. ", 1)
			])]))), 128))])]),
			t[4] ||= U("div", { class: "sb-poetry-lines-head" }, [U("strong", null, "Построчный анализ"), U("span", null, "Слоги · рифма")], -1),
			U("div", $M, [(V(!0), H(B, null, z(r.value.lines, (e) => (V(), H("div", {
				key: e.number,
				class: "sb-poetry-line"
			}, [
				U("div", eN, [U("span", tN, O(e.number) + ".", 1), U("span", nN, O(e.text), 1)]),
				U("div", rN, [U("span", null, O(e.syllables) + " сл.", 1), U("i", { style: E({ width: e.width + "%" }) }, null, 4)]),
				U("span", {
					class: D(["sb-poetry-letter", { "sb-poetry-letter-match": e.rhyme }]),
					title: e.repeat ? "Совпадение последнего слова" : e.rhyme ? "Предполагаемая рифма" : "Метка окончания"
				}, O(e.mark), 11, iN)
			]))), 128))]),
			r.value.rowCount > 120 ? (V(), H("p", aN, " Показаны первые 120 строк из " + O(r.value.rowCount) + "; статистика рассчитана по всему тексту. ", 1)) : G("", !0),
			r.value.frequent.length ? (V(), H("div", oN, [t[2] ||= U("strong", null, "Повторяющиеся слова:", -1), (V(!0), H(B, null, z(r.value.frequent, (e) => (V(), H("span", { key: e.word }, O(e.word) + " · " + O(e.count), 1))), 128))])) : G("", !0),
			U("div", sN, [t[3] ||= U("h4", null, "На что обратить внимание", -1), U("ul", null, [(V(!0), H(B, null, z(r.value.suggestions, (e, t) => (V(), H("li", { key: t }, O(e), 1))), 128))])]),
			t[5] ||= U("p", { class: "sb-poetry-footnote" }, " Анализ ориентировочный: счёт гласных не равен точной метрической скансии, совпадение окончаний не гарантирует рифму, а вокальная удобность зависит от темпа и мелодии. Исходный текст автоматически не изменяется. ", -1)
		], 64)) : (V(), H("p", KM, O(r.value.message), 1));
	}
}, lN = {
	key: 0,
	class: "sb-stress-ambig-clear"
}, uN = { class: "sb-stress-ambig-heading" }, dN = { class: "sb-stress-ambig-variants" }, fN = ["data-word", "data-variant"], pN = {
	key: 0,
	class: "sb-poetry-small"
}, mN = {
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
			U("div", uN, " 🔴 Требуют проверки: " + O(r.value.count) + " вхождений (" + O(r.value.total) + " разных слов). Нажми нужный вариант для каждого вхождения. ", 1),
			(V(!0), H(B, null, z(r.value.words, (e) => (V(), H("div", {
				key: e.key,
				class: "sb-stress-ambig-choice"
			}, [U("strong", null, O(e.key) + O(e.count > 1 ? " ×" + e.count : ""), 1), U("div", dN, [(V(!0), H(B, null, z(e.variants, (t) => (V(), H("button", {
				key: t,
				type: "button",
				"data-action": "sb-poetry-stress-choice",
				"data-word": e.key,
				"data-variant": t,
				title: "Указать ударение для следующего вхождения"
			}, O(t), 9, fN))), 128))])]))), 128)),
			r.value.total > 30 ? (V(), H("p", pN, " Показаны первые 30 разных слов; другие можно исправить вручную. ")) : G("", !0)
		], 64)) : (V(), H("p", lN, " ✓ Все найденные неоднозначные слова проверены. "));
	}
};
// src/vue/poetry/legacyPoetryBridge.js
function hN({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_POETRY, n = document.getElementById("app");
	return !t?.analysis || !t?.ambiguities || !n ? () => {} : Hc({
		root: n,
		islands: [[
			"analysis",
			"#sb-poetry-result",
			cN
		], [
			"ambiguities",
			"#sb-poetry-ambiguous-choices",
			mN
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
var gN = { class: "sb-vt-field" }, _N = ["value"], vN = ["value"], yN = {
	class: "sb-vt-hint",
	id: "sb-vt-mode-hint"
}, bN = { class: "sb-vt-grid" }, xN = { class: "sb-vt-field" }, SN = ["value"], CN = ["value"], wN = { class: "sb-vt-field" }, TN = ["value"], EN = ["value"], DN = {
	key: 0,
	class: "sb-vt-field"
}, ON = ["value"], kN = ["value"], AN = { class: "sb-vt-intensity" }, jN = { class: "sb-vt-between" }, MN = { id: "sb-vt-intensity-label" }, NN = ["value"], PN = { class: "sb-vt-options" }, FN = ["data-vt-pref", "checked"], IN = {
	key: 1,
	class: "sb-vt-consent",
	id: "sb-vt-consent-row"
}, LN = { class: "sb-vt-buttons" }, RN = ["disabled"], zN = {
	id: "sb-vt-result",
	"aria-live": "polite"
}, BN = {
	key: 0,
	class: "sb-vt-draft"
}, VN = { class: "sb-vt-draft-head" }, HN = { class: "sb-vt-method" }, UN = { class: "sb-vt-section-list" }, WN = { class: "sb-vt-section-heading" }, GN = { class: "sb-vt-section-controls" }, KN = [
	"data-vt-preset",
	"value",
	"aria-label"
], qN = ["value"], JN = [
	"data-vt-cue",
	"value",
	"aria-label"
], YN = { class: "sb-vt-field" }, XN = ["value"], ZN = {
	class: "sb-vt-small",
	id: "sb-vt-preview-state"
}, QN = {
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
			U("div", gN, [t[0] ||= U("label", { for: "sb-vt-mode" }, "Способ генерации", -1), U("select", {
				id: "sb-vt-mode",
				"data-vt-pref": "mode",
				value: i.value.mode
			}, [(V(), H(B, null, z(o, ([e, t]) => U("option", {
				key: e,
				value: e
			}, O(t), 9, vN)), 64))], 8, _N)]),
			U("p", yN, O(n.value.modeHint), 1),
			U("div", bN, [U("div", xN, [t[1] ||= U("label", { for: "sb-vt-source" }, "Источник текста", -1), U("select", {
				id: "sb-vt-source",
				"data-vt-pref": "source",
				value: i.value.source
			}, [(V(), H(B, null, z(c, ([e, t]) => U("option", {
				key: e,
				value: e
			}, O(t), 9, CN)), 64))], 8, SN)]), U("div", wN, [t[2] ||= U("label", { for: "sb-vt-density" }, "Детализация метатегов", -1), U("select", {
				id: "sb-vt-density",
				"data-vt-pref": "density",
				value: i.value.density
			}, [(V(), H(B, null, z(s, ([e, t]) => U("option", {
				key: e,
				value: e
			}, O(t), 9, EN)), 64))], 8, TN)])]),
			n.value.artists?.length ? (V(), H("div", DN, [t[4] ||= U("label", { for: "sb-vt-artist" }, "Учесть «ДНК артиста» (необязательно)", -1), U("select", {
				id: "sb-vt-artist",
				"data-vt-pref": "artistId",
				value: i.value.artistId
			}, [t[3] ||= U("option", { value: "" }, "Без привязки к артисту", -1), (V(!0), H(B, null, z(n.value.artists, (e) => (V(), H("option", {
				key: e.id,
				value: e.id
			}, O(e.name), 9, kN))), 128))], 8, ON)])) : G("", !0),
			U("div", AN, [
				U("div", jN, [t[5] ||= U("label", { for: "sb-vt-intensity" }, "Максимальная интенсивность исполнения", -1), U("strong", MN, O(i.value.intensity) + " / 5", 1)]),
				U("input", {
					type: "range",
					id: "sb-vt-intensity",
					min: "1",
					max: "5",
					step: "1",
					value: i.value.intensity,
					"data-vt-pref": "intensity"
				}, null, 8, NN),
				t[6] ||= U("div", { class: "sb-vt-between sb-vt-scale" }, [U("span", null, "Сдержанная"), U("span", null, "Экспрессивная")], -1)
			]),
			U("div", PN, [(V(), H(B, null, z(l, ([e, t]) => U("label", { key: e }, [U("input", {
				type: "checkbox",
				"data-vt-pref": e,
				checked: i.value[e]
			}, null, 8, FN), W(" " + O(t), 1)])), 64))]),
			n.value.hasEndpoint ? (V(), H("label", IN, [...t[7] ||= [U("input", {
				type: "checkbox",
				id: "sb-vt-consent"
			}, null, -1), W(" Разрешаю отправить выбранный текст песни на защищённый сервер для анализа Gemini. ", -1)]])) : G("", !0),
			U("div", LN, [U("button", {
				type: "button",
				class: "btn primary",
				"data-action": "vt-generate",
				disabled: n.value.busy
			}, "✨ Создать предпросмотр", 8, RN), t[8] ||= U("span", { class: "sb-vt-note" }, "Никакого автоматического применения к Lyrics.", -1)]),
			U("div", {
				id: "sb-vt-notice",
				class: D(["sb-vt-notice", n.value.notice?.kind]),
				role: "status",
				"aria-live": "polite"
			}, O(n.value.notice?.text), 3),
			U("div", zN, [a.value ? (V(), H("div", BN, [
				U("div", VN, [U("h4", null, "Предпросмотр · " + O(a.value.sections.length) + " секций", 1), U("span", HN, O(a.value.method), 1)]),
				t[10] ||= U("p", { class: "sb-vt-small" }, " Проверь каждую секцию. Теги можно выбрать из списка или переписать вручную. Оригинальные строки песни остаются неизменными. ", -1),
				U("div", UN, [(V(!0), H(B, null, z(a.value.sections, (e, t) => (V(), H("div", {
					key: e.id,
					class: "sb-vt-section"
				}, [U("div", WN, [U("strong", null, O(e.label), 1), U("span", null, O(t + 1) + "/" + O(a.value.sections.length), 1)]), U("div", GN, [U("select", {
					"data-vt-preset": t,
					value: a.value.tags[t],
					"aria-label": "Готовые теги для " + e.label
				}, [(V(!0), H(B, null, z(n.value.presets, ([e, t]) => (V(), H("option", {
					key: e,
					value: e
				}, O(t), 9, qN))), 128))], 8, KN), U("input", {
					"data-vt-cue": t,
					value: a.value.tags[t],
					maxlength: "165",
					placeholder: "Например: Warm Emotional Vocals",
					"aria-label": "Тег исполнения " + e.label
				}, null, 8, JN)])]))), 128))]),
				U("div", YN, [t[9] ||= U("label", { for: "sb-vt-preview" }, " Готовый Lyrics — разрешено редактировать только инструкции, не слова песни ", -1), U("textarea", {
					id: "sb-vt-preview",
					spellcheck: "false",
					rows: "13",
					maxlength: "25000",
					value: a.value.preview
				}, null, 8, XN)]),
				U("p", ZN, O(n.value.previewState), 1),
				t[11] ||= da("<div class=\"sb-vt-draft-actions\"><button type=\"button\" class=\"btn primary\" data-action=\"vt-apply\"> ✓ Применить к Lyrics </button><button type=\"button\" class=\"btn ghost\" data-action=\"vt-copy\"> Копировать предпросмотр </button><button type=\"button\" class=\"btn ghost\" data-action=\"vt-refresh\"> Обновить предпросмотр </button><button type=\"button\" class=\"btn ghost\" data-action=\"vt-cancel\"> Отменить </button></div>", 1)
			])) : G("", !0)])
		], 64));
	}
};
// src/vue/poetry/legacyTagsBridge.js
function $N({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_TAGS, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vt-workbench"),
		readSnapshot: () => t.snapshot(),
		mount: (n) => e(n, QN, { api: t })
	});
}
// src/vue/entry.js
var eP = fu(), tP = Q(eP);
function nP(e) {
	return typeof document > "u" ? null : typeof e == "string" ? document.querySelector(e) : e;
}
var { mountVueFeature: $, unmountVueFeature: rP } = ql({
	createApp: Yo,
	host: zw,
	pinia: eP,
	router: kf,
	resolveTarget: nP
});
function iP() {
	return Rw({ sharedUi: tP });
}
function aP() {
	return tT({
		mountVueFeature: $,
		unmountVueFeature: rP,
		sharedUi: tP
	});
}
function oP() {
	return mT({ mountVueFeature: $ });
}
function sP() {
	return bE({ mountVueFeature: $ });
}
function cP() {
	return UO({ mountVueFeature: $ });
}
function lP() {
	return Nk({ mountVueFeature: $ });
}
function uP() {
	return OA({ mountVueFeature: $ });
}
function dP() {
	return ej({ mountVueFeature: $ });
}
function fP() {
	return GM({ mountVueFeature: $ });
}
function pP() {
	return hN({ mountVueFeature: $ });
}
function mP() {
	return $N({ mountVueFeature: $ });
}
function hP() {
	return Lw({ mountVueFeature: $ });
}
function gP() {
	return pm({ mountVueFeature: $ });
}
function _P() {
	return ig({ mountVueFeature: $ });
}
function vP() {
	return Xh({ mountVueFeature: $ });
}
function yP() {
	return qg({ mountVueFeature: $ });
}
function bP() {
	return s_({ mountVueFeature: $ });
}
function xP() {
	return rv({ mountVueFeature: $ });
}
function SP() {
	return zv({ mountVueFeature: $ });
}
function CP() {
	return qv({ mountVueFeature: $ });
}
function wP() {
	return by({ mountVueFeature: $ });
}
function TP() {
	return Jy({ mountVueFeature: $ });
}
function EP() {
	return gb({ mountVueFeature: $ });
}
function DP() {
	return nx({ mountVueFeature: $ });
}
function OP() {
	return Qx({ mountVueFeature: $ });
}
function kP() {
	return oS({ mountVueFeature: $ });
}
function AP() {
	return KS({ mountVueFeature: $ });
}
function jP() {
	return eC({ mountVueFeature: $ });
}
function MP() {
	return AC({ mountVueFeature: $ });
}
function NP() {
	return aw({ mountVueFeature: $ });
}
function PP() {
	return Qm({ mountVueFeature: $ });
}
function FP() {
	return Fh({
		mountVueFeature: $,
		sharedUi: tP
	});
}
function IP() {
	return lD({ mountVueFeature: $ });
}
function LP() {
	return Kl({ mountVueFeature: $ });
}
function RP() {
	return Bl({ mountVueFeature: $ });
}
function zP() {
	return Nl({ mountVueFeature: $ });
}
function BP() {
	return Sl({ mountVueFeature: $ });
}
function VP() {
	return ll({ mountVueFeature: $ });
}
function HP() {
	return el({ mountVueFeature: $ });
}
function UP() {
	return qc({ mountVueFeature: $ });
}
function WP() {
	return Uc({ mountVueFeature: $ });
}
function GP() {
	return Vc({ mountVueFeature: $ });
}
function KP() {
	return bc({ mountVueFeature: $ });
}
function qP() {
	return Ls({ mountVueFeature: $ });
}
function JP() {
	return Ss({ mountVueFeature: $ });
}
export { $ as mountVueFeature, sP as startLegacyAcademy, GP as startLegacyAccountHome, EP as startLegacyAccountSettings, WP as startLegacyAccountSummary, iP as startLegacyAppearance, fP as startLegacyArranger, wP as startLegacyArtistDNA, TP as startLegacyArtistDNAEditor, CP as startLegacyArtistManager, JP as startLegacyArtistProfiles, dP as startLegacyAuditor, UP as startLegacyEventActions, BP as startLegacyEventCollection, VP as startLegacyEventEditor, HP as startLegacyEventReminders, cP as startLegacyGenreDetail, IP as startLegacyGenreTree, FP as startLegacyHomeDashboard, gP as startLegacyIdeaCollections, hP as startLegacyIdeaEditor, KP as startLegacyIdeasPage, yP as startLegacyLibrary, uP as startLegacyMixer, aP as startLegacyNavigation, OP as startLegacyPlayerAB, DP as startLegacyPlayerLab, pP as startLegacyPoetry, AP as startLegacyProducerSongDetail, kP as startLegacyProducerSongList, LP as startLegacyProjectCollection, RP as startLegacyProjectCreator, zP as startLegacyProjectDetail, vP as startLegacyPromptCollection, _P as startLegacyPromptEditor, qP as startLegacySharedSong, bP as startLegacySongCards, xP as startLegacySongDetail, SP as startLegacySongEditor, lP as startLegacyStudio, mP as startLegacyTags, oP as startLegacyTopHeader, MP as startLegacyTrackPassportDetail, NP as startLegacyTrackPassportEditor, jP as startLegacyTrackPassportList, PP as startLegacyVersionHistory, rP as unmountVueFeature };
