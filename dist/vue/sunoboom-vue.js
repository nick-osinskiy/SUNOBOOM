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
}, l = Object.prototype.hasOwnProperty, u = (e, t) => l.call(e, t), d = Array.isArray, f = (e) => x(e) === "[object Map]", p = (e) => x(e) === "[object Set]", m = (e) => x(e) === "[object Date]", h = (e) => typeof e == "function", g = (e) => typeof e == "string", _ = (e) => typeof e == "symbol", v = (e) => typeof e == "object" && !!e, y = (e) => (v(e) || h(e)) && h(e.then) && h(e.catch), b = Object.prototype.toString, x = (e) => b.call(e), S = (e) => x(e).slice(8, -1), C = (e) => x(e) === "[object Object]", w = (e) => g(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ee = /* @__PURE__ */ e(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), te = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, ne = /-\w/g, T = /* @__PURE__ */ te((e) => e.replace(ne, (e) => e.slice(1).toUpperCase())), re = /\B([A-Z])/g, E = /* @__PURE__ */ te((e) => e.replace(re, "-$1").toLowerCase()), D = /* @__PURE__ */ te((e) => e.charAt(0).toUpperCase() + e.slice(1)), ie = /* @__PURE__ */ te((e) => e ? `on${D(e)}` : ""), ae = (e, t) => !Object.is(e, t), oe = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, se = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, ce = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, le, ue = () => le ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function O(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = g(r) ? me(r) : O(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	}
	if (g(e) || v(e)) return e;
}
var de = /;(?![^(]*\))/g, fe = /:([^]+)/, pe = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function me(e) {
	let t = {};
	return e.replace(pe, (e) => e.startsWith("/*") ? "" : e).split(de).forEach((e) => {
		if (e) {
			let n = e.split(fe);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function k(e) {
	let t = "";
	if (g(e)) t = e;
	else if (d(e)) for (let n = 0; n < e.length; n++) {
		let r = k(e[n]);
		r && (t += r + " ");
	}
	else if (v(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var he = /* @__PURE__ */ e("itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly");
function ge(e) {
	return !!e || e === "";
}
function _e(e, t, n) {
	if (e.length !== t.length) return !1;
	let r = !0;
	for (let i = 0; r && i < e.length; i++) r = xe(e[i], t[i], n);
	return r;
}
function ve(e, t, n) {
	if (e.size !== t.size) return !1;
	let r = Array.from(t), i = new Uint8Array(r.length);
	for (let t of e) {
		let e = -1;
		for (let a = 0; a < r.length; a++) if (!i[a] && xe(t, r[a], n)) {
			e = a;
			break;
		}
		if (e < 0) return !1;
		i[e] = 1;
	}
	return !0;
}
function ye(e, t, n) {
	let r = f(e), i = f(t);
	if (r || i || (r = p(e), i = p(t), r || i)) return r && i ? ve(e, t, n) : !1;
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let r in e) {
		let i = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
		if (i && !a || !i && a || !xe(e[r], t[r], n)) return !1;
	}
	return String(e) === String(t);
}
function be(e, t, n, r) {
	n ||= [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()];
	let [i, a] = n;
	if (i.has(e) || a.has(t)) return i.get(e) === t && a.get(t) === e;
	i.set(e, t), a.set(t, e);
	let o = r(e, t, n);
	return i.delete(e), a.delete(t), o;
}
function xe(e, t, n) {
	if (e === t) return !0;
	let r = m(e), i = m(t);
	return r || i ? r && i ? e.getTime() === t.getTime() : !1 : (r = _(e), i = _(t), r || i ? e === t : (r = d(e), i = d(t), r || i ? r && i ? be(e, t, n, _e) : !1 : (r = v(e), i = v(t), r || i ? !r || !i ? !1 : be(e, t, n, ye) : String(e) === String(t))));
}
function Se(e, t) {
	return e.findIndex((e) => xe(e, t));
}
var Ce = (e) => !!(e && e.__v_isRef === !0), A = (e) => g(e) ? e : e == null ? "" : d(e) || v(e) && (e.toString === b || !h(e.toString)) ? Ce(e) ? A(e.value) : JSON.stringify(e, we, 2) : String(e), we = (e, t) => Ce(t) ? we(e, t.value) : f(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Te(t, r) + " =>"] = n, e), {}) } : p(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Te(e)) } : _(t) ? Te(t) : v(t) && !d(t) && !C(t) ? String(t) : t, Te = (e, t = "") => _(e) ? `Symbol(${e.description ?? t})` : e, Ee, De = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && Ee && (Ee.active ? (this.parent = Ee, this.index = (Ee.scopes || (Ee.scopes = [])).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
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
			let t = Ee;
			try {
				return Ee = this, e();
			} finally {
				Ee = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = Ee, Ee = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (Ee === this) Ee = this.prevScope;
			else {
				let e = Ee;
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
function Oe(e) {
	return new De(e);
}
function ke() {
	return Ee;
}
function Ae(e, t = !1) {
	Ee && (Ee.active ? Ee.cleanups.push(e) : e());
}
var j, je = /* @__PURE__ */ new WeakSet(), Me = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ee && (Ee.active ? Ee.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, je.has(this) && (je.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ie(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, Ye(this), ze(this);
		let e = j, t = Ge;
		j = this, Ge = !0;
		try {
			return this.fn();
		} finally {
			Be(this), j = e, Ge = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) Ue(e);
			this.deps = this.depsTail = void 0, Ye(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? je.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		Ve(this) && this.run();
	}
	get dirty() {
		return Ve(this);
	}
}, Ne = 0, Pe, Fe;
function Ie(e, t = !1) {
	e.flags |= 8, t ? (e.next = Fe, Fe = e) : (e.next = Pe, Pe = e);
}
function Le() {
	Ne++;
}
function Re() {
	if (--Ne > 0) return;
	if (Fe) {
		let e = Fe;
		for (Fe = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Pe;) {
		let t = Pe;
		for (Pe = void 0; t;) {
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
function ze(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Be(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), Ue(r), We(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function Ve(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (He(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function He(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Xe) || (e.globalVersion = Xe, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ve(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = j, r = Ge;
	j = e, Ge = !0;
	try {
		ze(e);
		let n = e.fn(e._value);
		(t.version === 0 || ae(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		j = n, Ge = r, Be(e), e.flags &= -3;
	}
}
function Ue(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) Ue(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function We(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var Ge = !0, Ke = [];
function qe() {
	Ke.push(Ge), Ge = !1;
}
function Je() {
	let e = Ke.pop();
	Ge = e === void 0 || e;
}
function Ye(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = j;
		j = void 0;
		try {
			t();
		} finally {
			j = e;
		}
	}
}
var Xe = 0, Ze = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, Qe = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!j || !Ge || j === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== j) t = this.activeLink = new Ze(j, this), j.deps ? (t.prevDep = j.depsTail, j.depsTail.nextDep = t, j.depsTail = t) : j.deps = j.depsTail = t, $e(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = j.depsTail, t.nextDep = void 0, j.depsTail.nextDep = t, j.depsTail = t, j.deps === t && (j.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, Xe++, this.notify(e);
	}
	notify(e) {
		Le();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Re();
		}
	}
};
function $e(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) $e(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var et = /* @__PURE__ */ new WeakMap(), tt = /* @__PURE__ */ Symbol(""), nt = /* @__PURE__ */ Symbol(""), rt = /* @__PURE__ */ Symbol("");
function it(e, t, n) {
	if (Ge && j) {
		let t = et.get(e);
		t || et.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new Qe()), r.map = t, r.key = n), r.track();
	}
}
function at(e, t, n, r, i, a) {
	let o = et.get(e);
	if (!o) {
		Xe++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Le(), t === "clear") o.forEach(s);
	else {
		let i = d(e), a = i && w(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === rt || !_(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(rt)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(tt)), f(e) && s(o.get(nt)));
				break;
			case "delete":
				i || (s(o.get(tt)), f(e) && s(o.get(nt)));
				break;
			case "set": f(e) && s(o.get(tt));
		}
	}
	Re();
}
function ot(e, t) {
	let n = et.get(e);
	return n && n.get(t);
}
function st(e) {
	let t = /* @__PURE__ */ N(e);
	return t === e || (it(t, "iterate", rt), /* @__PURE__ */ Kt(e)) ? t : /* @__PURE__ */ Gt(e) ? /* @__PURE__ */ Wt(e) ? t.map((e) => Xt(Yt(e))) : t.map(Xt) : t.map(Yt);
}
function ct(e) {
	return it(e = /* @__PURE__ */ N(e), "iterate", rt), e;
}
function lt(e, t) {
	return /* @__PURE__ */ Gt(e) ? Xt(/* @__PURE__ */ Wt(e) ? Yt(t) : t) : Yt(t);
}
var ut = {
	__proto__: null,
	[Symbol.iterator]() {
		return dt(this, Symbol.iterator, (e) => lt(this, e));
	},
	concat(...e) {
		return st(this).concat(...e.map((e) => d(e) ? st(e) : e));
	},
	entries() {
		return dt(this, "entries", (e) => (e[1] = lt(this, e[1]), e));
	},
	every(e, t) {
		return mt(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return mt(this, "filter", e, t, (e) => e.map((e) => lt(this, e)), arguments);
	},
	find(e, t) {
		return mt(this, "find", e, t, (e) => lt(this, e), arguments);
	},
	findIndex(e, t) {
		return mt(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return mt(this, "findLast", e, t, (e) => lt(this, e), arguments);
	},
	findLastIndex(e, t) {
		return mt(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return mt(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return gt(this, "includes", e);
	},
	indexOf(...e) {
		return gt(this, "indexOf", e);
	},
	join(e) {
		return st(this).join(e);
	},
	lastIndexOf(...e) {
		return gt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return mt(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return _t(this, "pop");
	},
	push(...e) {
		return _t(this, "push", e);
	},
	reduce(e, ...t) {
		return ht(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return ht(this, "reduceRight", e, t);
	},
	shift() {
		return _t(this, "shift");
	},
	some(e, t) {
		return mt(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return _t(this, "splice", e);
	},
	toReversed() {
		return st(this).toReversed();
	},
	toSorted(e) {
		return st(this).toSorted(e);
	},
	toSpliced(...e) {
		return st(this).toSpliced(...e);
	},
	unshift(...e) {
		return _t(this, "unshift", e);
	},
	values() {
		return dt(this, "values", (e) => lt(this, e));
	}
};
function dt(e, t, n) {
	let r = ct(e), i = r[t], a = i.call(r);
	if (r !== e && !/* @__PURE__ */ Kt(e)) {
		if (a[Symbol.toStringTag] === "Array Iterator") {
			let e = Object.create(Object.getPrototypeOf(a));
			return e.next = () => ft(a.next(), n), i !== pt[t] && Object.defineProperties(e, {
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
		a._next = a.next, a.next = () => ft(a._next(), n);
	}
	return a;
}
function ft(e, t) {
	return e.done || (e.value = t(e.value)), e;
}
var pt = Array.prototype;
function mt(e, t, n, r, i, a) {
	let o = ct(e), s = o !== e && !/* @__PURE__ */ Kt(e), c = o[t];
	if (c !== pt[t]) {
		let t = c.apply(e, a);
		return s ? Yt(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, lt(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function ht(e, t, n, r) {
	let i = ct(e), a = i !== e && !/* @__PURE__ */ Kt(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = lt(e, t)), n.call(this, t, lt(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? lt(e, c) : c;
}
function gt(e, t, n) {
	let r = /* @__PURE__ */ N(e);
	it(r, "iterate", rt);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ qt(n[0]) ? (n[0] = /* @__PURE__ */ N(n[0]), r[t](...n)) : i;
}
function _t(e, t, n = []) {
	qe(), Le();
	let r = (/* @__PURE__ */ N(e))[t].apply(e, n);
	return Re(), Je(), r;
}
var vt = /* @__PURE__ */ e("__proto__,__v_isRef,__isVue"), yt = /* @__PURE__ */ new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_));
function bt(e) {
	_(e) || (e = String(e));
	let t = /* @__PURE__ */ N(this);
	return it(t, "has", e), t.hasOwnProperty(e);
}
var xt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? zt : Rt : i ? Lt : It).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = d(e);
		if (!r) {
			let e;
			if (a && (e = ut[t])) return e;
			if (t === "hasOwnProperty") return bt;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ Zt(e) ? e : n);
		if ((_(t) ? yt.has(t) : vt(t)) || (r || it(e, "get", t), i)) return o;
		if (/* @__PURE__ */ Zt(o)) {
			let e = a && w(t) ? o : o.value;
			return r && v(e) ? /* @__PURE__ */ Ht(e) : e;
		}
		return v(o) ? r ? /* @__PURE__ */ Ht(o) : /* @__PURE__ */ M(o) : o;
	}
}, St = class extends xt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = d(e) && w(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Gt(i);
			if (!/* @__PURE__ */ Kt(n) && !/* @__PURE__ */ Gt(n) && (i = /* @__PURE__ */ N(i), n = /* @__PURE__ */ N(n)), !a && /* @__PURE__ */ Zt(i) && !/* @__PURE__ */ Zt(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : u(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ Zt(e) ? e : r);
		return e === /* @__PURE__ */ N(r) && s && (o ? ae(n, i) && at(e, "set", t, n, i) : at(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = u(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && at(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return _(t) && yt.has(t) || it(e, "has", t), n;
	}
	ownKeys(e) {
		return it(e, "iterate", d(e) ? "length" : tt), Reflect.ownKeys(e);
	}
}, Ct = class extends xt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, wt = /* @__PURE__ */ new St(), Tt = /* @__PURE__ */ new Ct(), Et = /* @__PURE__ */ new St(!0), Dt = (e) => e, Ot = (e) => Reflect.getPrototypeOf(e);
function kt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ N(i), o = f(a), c = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = i[e](...r), d = n ? Dt : t ? Xt : Yt;
		return !t && it(a, "iterate", l ? nt : tt), s(Object.create(u), { next() {
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
function At(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function jt(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ N(r), a = /* @__PURE__ */ N(n);
			e || (ae(n, a) && it(i, "get", n), it(i, "get", a));
			let { has: o } = Ot(i), s = t ? Dt : e ? Xt : Yt;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && it(/* @__PURE__ */ N(t), "iterate", tt), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ N(n), i = /* @__PURE__ */ N(t);
			return e || (ae(t, i) && it(r, "has", t), it(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ N(a), s = t ? Dt : e ? Xt : Yt;
			return !e && it(o, "iterate", tt), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return s(n, e ? {
		add: At("add"),
		set: At("set"),
		delete: At("delete"),
		clear: At("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ N(this), r = Ot(n), i = /* @__PURE__ */ N(e), a = !t && !/* @__PURE__ */ Kt(e) && !/* @__PURE__ */ Gt(e) ? i : e;
			return r.has.call(n, a) || ae(e, a) && r.has.call(n, e) || ae(i, a) && r.has.call(n, i) || (n.add(a), at(n, "add", a, a)), this;
		},
		set(e, n) {
			t || /* @__PURE__ */ Kt(n) || /* @__PURE__ */ Gt(n) || (n = /* @__PURE__ */ N(n));
			let r = /* @__PURE__ */ N(this), { has: i, get: a } = Ot(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ N(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? ae(n, s) && at(r, "set", e, n, s) : at(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ N(this), { has: n, get: r } = Ot(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ N(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && at(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ N(this), t = e.size !== 0, n = e.clear();
			return t && at(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = kt(r, e, t);
	}), n;
}
function Mt(e, t) {
	let n = jt(e, t);
	return (r, i, a) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_isShallow" ? t : i === "__v_raw" ? r : Reflect.get(u(n, i) && i in r ? n : r, i, a);
}
var Nt = { get: /* @__PURE__ */ Mt(!1, !1) }, Pt = { get: /* @__PURE__ */ Mt(!1, !0) }, Ft = { get: /* @__PURE__ */ Mt(!0, !1) }, It = /* @__PURE__ */ new WeakMap(), Lt = /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ new WeakMap(), zt = /* @__PURE__ */ new WeakMap();
function Bt(e) {
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
function M(e) {
	return /* @__PURE__ */ Gt(e) ? e : Ut(e, !1, wt, Nt, It);
}
// @__NO_SIDE_EFFECTS__
function Vt(e) {
	return Ut(e, !1, Et, Pt, Lt);
}
// @__NO_SIDE_EFFECTS__
function Ht(e) {
	return Ut(e, !0, Tt, Ft, Rt);
}
function Ut(e, t, n, r, i) {
	if (!v(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Bt(S(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function Wt(e) {
	return /* @__PURE__ */ Gt(e) ? /* @__PURE__ */ Wt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Gt(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Kt(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function qt(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function N(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ N(t) : e;
}
function Jt(e) {
	return !u(e, "__v_skip") && Object.isExtensible(e) && se(e, "__v_skip", !0), e;
}
var Yt = (e) => v(e) ? /* @__PURE__ */ M(e) : e, Xt = (e) => v(e) ? /* @__PURE__ */ Ht(e) : e;
// @__NO_SIDE_EFFECTS__
function Zt(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function P(e) {
	return Qt(e, !1);
}
// @__NO_SIDE_EFFECTS__
function F(e) {
	return Qt(e, !0);
}
function Qt(e, t) {
	return /* @__PURE__ */ Zt(e) ? e : new $t(e, t);
}
var $t = class {
	constructor(e, t) {
		this.dep = new Qe(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ N(e), this._value = t ? e : Yt(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Kt(e) || /* @__PURE__ */ Gt(e);
		e = n ? e : /* @__PURE__ */ N(e), ae(e, t) && (this._rawValue = e, this._value = n ? e : Yt(e), this.dep.trigger());
	}
};
function I(e) {
	return /* @__PURE__ */ Zt(e) ? e.value : e;
}
var en = {
	get: (e, t, n) => t === "__v_raw" ? e : I(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ Zt(i) && !/* @__PURE__ */ Zt(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function tn(e) {
	return /* @__PURE__ */ Wt(e) ? e : new Proxy(e, en);
}
// @__NO_SIDE_EFFECTS__
function nn(e) {
	let t = d(e) ? Array(e.length) : {};
	for (let n in e) t[n] = an(e, n);
	return t;
}
var rn = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = _(t) ? t : String(t), this._raw = /* @__PURE__ */ N(e);
		let r = !0, i = e;
		if (!d(e) || _(this._key) || !w(this._key)) do
			r = !/* @__PURE__ */ qt(i) || /* @__PURE__ */ Kt(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = I(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ Zt(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ Zt(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return ot(this._raw, this._key);
	}
};
function an(e, t, n) {
	return new rn(e, t, n);
}
var on = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new Qe(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Xe - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && j !== this) return Ie(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return He(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function sn(e, t, n = !1) {
	let r, i;
	return h(e) ? r = e : (r = e.get, i = e.set), new on(r, i, n);
}
var cn = {}, ln = /* @__PURE__ */ new WeakMap(), un = void 0;
function dn(e, t = !1, n = un) {
	if (n) {
		let t = ln.get(n);
		t || ln.set(n, t = []), t.push(e);
	}
}
function fn(e, n, i = t) {
	let { immediate: a, deep: o, once: s, scheduler: l, augmentJob: u, call: f } = i, p = (e) => o ? e : /* @__PURE__ */ Kt(e) || o === !1 || o === 0 ? pn(e, 1) : pn(e), m, g, _, v, y = !1, b = !1;
	if (/* @__PURE__ */ Zt(e) ? (g = () => e.value, y = /* @__PURE__ */ Kt(e)) : /* @__PURE__ */ Wt(e) ? (g = () => p(e), y = !0) : d(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ Wt(e) || /* @__PURE__ */ Kt(e)), g = () => e.map((e) => {
		if (/* @__PURE__ */ Zt(e)) return e.value;
		if (/* @__PURE__ */ Wt(e)) return p(e);
		if (h(e)) return f ? f(e, 2) : e();
	})) : g = h(e) ? n ? f ? () => f(e, 2) : e : () => {
		if (_) {
			qe();
			try {
				_();
			} finally {
				Je();
			}
		}
		let t = un;
		un = m;
		try {
			return f ? f(e, 3, [v]) : e(v);
		} finally {
			un = t;
		}
	} : r, n && o) {
		let e = g, t = o === !0 ? Infinity : o;
		g = () => pn(e(), t);
	}
	let x = ke(), S = () => {
		m.stop(), x && x.active && c(x.effects, m);
	};
	if (s && n) {
		let e = n;
		n = (...t) => {
			try {
				return e(...t);
			} finally {
				S();
			}
		};
	}
	let C = b ? Array(e.length).fill(cn) : cn, w = (e) => {
		if (m.flags & 1 && (m.dirty || e)) {
			if (n) {
				let t = m.run();
				if (e || o || y || (b ? t.some((e, t) => ae(e, C[t])) : ae(t, C))) {
					let e = un;
					qe();
					try {
						_ && _(), un = m;
						let e = [
							t,
							C === cn ? void 0 : b && C[0] === cn ? [] : C,
							v
						];
						C = t, f ? f(n, 3, e) : n(...e);
					} finally {
						un = e, Je();
					}
				}
			} else m.run();
		}
	};
	return u && u(w), m = new Me(g), m.scheduler = l ? () => l(w, !1) : w, v = (e) => dn(e, !1, m), _ = m.onStop = () => {
		let e = ln.get(m);
		if (e) {
			if (f) f(e, 4);
			else for (let t of e) t();
			ln.delete(m);
		}
	}, n ? a ? w(!0) : C = m.run() : l ? l(w.bind(null, !0), !0) : m.run(), S.pause = m.pause.bind(m), S.resume = m.resume.bind(m), S.stop = S, S;
}
function pn(e, t = Infinity, n) {
	if (t <= 0 || !v(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ Zt(e)) pn(e.value, t, n);
	else if (d(e)) for (let r = 0; r < e.length; r++) pn(e[r], t, n);
	else if (p(e) || f(e)) e.forEach((e) => {
		pn(e, t, n);
	});
	else if (C(e)) {
		for (let r in e) pn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && pn(e[r], t, n);
	}
	return e;
}
// node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function mn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		gn(e, t, n);
	}
}
function hn(e, t, n, r) {
	if (h(e)) {
		let i = mn(e, t, n, r);
		return i && y(i) && i.catch((e) => {
			gn(e, t, n, void 0, !0);
		}), i;
	}
	if (d(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(hn(e[a], t, n, r));
		return i;
	}
}
function gn(e, n, r, i = !0, a = !1) {
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
			qe(), mn(s, null, 10, [
				e,
				i,
				o
			]), Je();
			return;
		}
	}
	_n(e, r, o, i, c);
}
function _n(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var vn = [], yn = -1, bn = [], xn = null, Sn = 0, Cn = /* @__PURE__ */ Promise.resolve(), wn = null;
function Tn(e) {
	let t = wn || Cn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function En(e) {
	let t = yn + 1, n = vn.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = vn[r], a = Pn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function Dn(e) {
	if (!(e.flags & 1)) {
		let t = Pn(e), n = vn[vn.length - 1];
		!n || !(e.flags & 2) && t >= Pn(n) ? vn.push(e) : vn.splice(En(t), 0, e), e.flags |= 1, On();
	}
}
function On() {
	wn ||= Cn.then(Fn);
}
function kn(e) {
	if (!d(e)) xn && e.id === -1 ? xn.splice(Sn + 1, 0, e) : e.flags & 1 || (bn.push(e), e.flags |= 1);
	else for (let t = 0; t < e.length; t++) bn.push(e[t]);
	On();
}
function An(e, t, n, r = yn + 1) {
	for (; r < vn.length; r++) {
		let n = vn[r];
		if (n && n.flags & 2) {
			if (e && n.id !== e.uid || t !== void 0 && !(n.id >= t)) continue;
			vn.splice(r, 1), r = e ? r - 1 : yn, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
		}
	}
}
function jn(e, t, n = 0) {
	if (bn.length) {
		let e = bn, r = 0;
		if (t) {
			e = [];
			for (let i = 0; i < bn.length; i++) {
				let a = bn[i];
				(a.i === void 0 ? t.has(a) : !a.i || a.i.uid < n) ? bn[r++] = a : e.push(a);
			}
		}
		let i = [...new Set(e)].sort((e, t) => Pn(e) - Pn(t));
		if (bn.length = r, xn) {
			for (let e = 0; e < i.length; e++) xn.push(i[e]);
			return;
		}
		for (xn = i, Sn = 0; Sn < xn.length; Sn++) {
			let e = xn[Sn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		xn = null, Sn = 0;
	}
}
var Mn = !1;
function Nn(e, t) {
	if (Mn) {
		e();
		return;
	}
	let n = t === void 0 ? void 0 : new Set(bn);
	e(), Mn = !0;
	try {
		An(void 0, t), jn(void 0, n, t);
	} finally {
		Mn = !1;
	}
}
var Pn = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function Fn(e) {
	try {
		for (yn = 0; yn < vn.length; yn++) {
			let e = vn[yn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), mn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; yn < vn.length; yn++) {
			let e = vn[yn];
			e && (e.flags &= -2);
		}
		yn = -1, vn.length = 0, jn(e), wn = null, (vn.length || bn.length) && Fn(e);
	}
}
var In = null, Ln = null;
function Rn(e) {
	let t = In;
	return In = e, Ln = e && e.type.__scopeId || null, t;
}
function zn(e, t = In, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && ua(-1);
		let i = Rn(t), a = oa.length, o;
		try {
			o = e(...n);
		} finally {
			for (let e = oa.length; e > a; e--) ca();
			Rn(i), r._d && ua(1);
		}
		return o;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function L(e, n) {
	if (In === null) return e;
	let r = Ga(In), i = e.dirs ||= [];
	for (let e = 0; e < n.length; e++) {
		let [a, o, s, c = t] = n[e];
		a && (h(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && pn(o), i.push({
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
function Bn(e, t, n, r) {
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
		u && (qe(), hn(u, n, 8, [
			e.el,
			l,
			i,
			t
		]), Je());
	}
}
function Vn(e, t) {
	if (Aa) {
		let n = Aa.provides, r = Aa.parent && Aa.parent.provides;
		r === n && (n = Aa.provides = Object.create(r)), n[e] = t;
	}
}
function Hn(e, t, n = !1) {
	let r = ja();
	if (r || di) {
		let i = di ? di._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && h(t) ? t.call(r && r.proxy) : t;
	}
}
function Un() {
	return !!(ja() || di);
}
var Wn = /* @__PURE__ */ Symbol.for("v-scx"), Gn = () => Hn(Wn);
function R(e, t, n) {
	return Kn(e, t, n);
}
function Kn(e, n, i = t) {
	let { immediate: a, deep: o, flush: c, once: l } = i, u = s({}, i), d = n && a || !n && c !== "post", f;
	if (La) {
		if (c === "sync") {
			let e = Gn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = r, e.resume = r, e.pause = r, e;
		}
	}
	let p = Aa;
	u.call = (e, t, n) => hn(e, p, t, n);
	let m = !1;
	c === "post" ? u.scheduler = (e) => {
		e.i = p, Ui(e, p && p.suspense);
	} : c !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : Dn(e);
	}), u.augmentJob = (e) => {
		n && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = fn(e, n, u);
	return La && (f ? f.push(h) : d && h()), h;
}
function qn(e, t, n) {
	let r = this.proxy, i = g(e) ? e.includes(".") ? Jn(r, e) : () => r[e] : e.bind(r, r), a;
	h(t) ? a = t : (a = t.handler, n = t);
	let o = Pa(this), s = Kn(i, a.bind(r), n);
	return o(), s;
}
function Jn(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Yn = /* @__PURE__ */ new WeakMap(), Xn = /* @__PURE__ */ Symbol("_vte"), Zn = (e) => e.__isTeleport, Qn = (e) => e && (e.disabled || e.disabled === ""), $n = (e) => e && (e.defer || e.defer === ""), er = (e) => typeof SVGElement < "u" && e instanceof SVGElement, tr = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, nr = (e, t) => {
	let n = e && e.to;
	return g(n) ? t ? t(n) : null : n;
}, rr = {
	name: "Teleport",
	__isTeleport: !0,
	process(e, t, n, r, i, a, o, s, c, l) {
		let { mc: u, pc: d, pbc: f, o: { insert: p, querySelector: m, createText: h, createComment: g, parentNode: _ } } = l, v = Qn(t.props), { dynamicChildren: y } = t, b = (e, t, n) => {
			e.shapeFlag & 16 && u(e.children, t, n, i, a, o, s, c);
		}, x = (e = t) => {
			let n = Qn(e.props), r = e.target = nr(e.props, m), a = cr(r, e, h, p);
			r && (o !== "svg" && er(r) ? o = "svg" : o !== "mathml" && tr(r) && (o = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(r), n || (b(e, r, a), sr(e, !1)));
		}, S = (e) => {
			let t = () => {
				if (Yn.get(e) === t) {
					if (Yn.delete(e), Qn(e.props)) {
						let t = _(e.el) || n;
						b(e, t, e.anchor), sr(e, !0);
					}
					x(e);
				}
			};
			Yn.set(e, t), Ui(t, a);
		};
		if (e == null) {
			let e = t.el = h(""), i = t.anchor = h("");
			if (p(e, n, r), p(i, n, r), $n(t.props) || a && a.pendingBranch) {
				S(t);
				return;
			}
			v && (b(t, n, i), sr(t, !0)), x();
		} else {
			t.el = e.el;
			let r = t.anchor = e.anchor, u = Yn.get(e);
			if (u) {
				u.flags |= 8, Yn.delete(e), S(t);
				return;
			}
			t.targetStart = e.targetStart;
			let p = t.target = e.target, h = t.targetAnchor = e.targetAnchor, g = Qn(e.props), _ = g ? n : p, b = g ? r : h;
			if (o === "svg" || er(p) ? o = "svg" : (o === "mathml" || tr(p)) && (o = "mathml"), y ? (f(e.dynamicChildren, y, _, i, a, o, s), Yi(e, t, !0)) : c || d(e, t, _, b, i, a, o, s, !1), v) g ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ir(t, n, r, l, 1);
			else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
				let e = nr(t.props, m);
				e && (t.target = e, ir(t, e, null, l, 0));
			} else g && ir(t, p, h, l, 1);
			sr(t, v);
		}
	},
	remove(e, t, n, { um: r, o: { remove: i } }, a) {
		let { shapeFlag: o, children: s, anchor: c, targetStart: l, targetAnchor: u, target: d, props: f } = e, p = Qn(f), m = a || !p, h = Yn.get(e);
		if (h && (h.flags |= 8, Yn.delete(e)), d && (i(l), i(u)), a && i(c), !h && (p || d) && o & 16) for (let e = 0; e < s.length; e++) {
			let i = s[e];
			r(i, t, n, m, !!i.dynamicChildren);
		}
	},
	move: ir,
	hydrate: ar
};
function ir(e, t, n, { o: { insert: r }, m: i }, a = 2) {
	a === 0 && (e.targetStart && r(e.targetStart, t, n), r(e.targetAnchor, t, n), n = e.targetAnchor);
	let { el: o, anchor: s, shapeFlag: c, children: l, props: u } = e, d = a === 2;
	if (d && r(o, t, n), !Yn.has(e) && (!d || Qn(u)) && c & 16) for (let e = 0; e < l.length; e++) i(l[e], t, n, 2);
	d && r(s, t, n);
}
function ar(e, t, n, r, i, a, { o: { nextSibling: o, parentNode: s, querySelector: c, insert: l, createText: u } }, d) {
	function f(e, n) {
		let r = n;
		for (; r;) {
			if (r && r.nodeType === 8) {
				if (r.data === "teleport start anchor") t.targetStart = r;
				else if (r.data === "teleport anchor") {
					t.targetAnchor = r, e._lpa = t.targetAnchor && o(t.targetAnchor);
					break;
				}
			}
			r = o(r);
		}
	}
	function p(e, t) {
		t.anchor = d(o(e), t, s(e), n, r, i, a);
	}
	let m = t.target = nr(t.props, c), h = Qn(t.props);
	if (m) {
		let c = m._lpa || m.firstChild;
		t.shapeFlag & 16 && (h ? (p(e, t), f(m, c), t.targetAnchor || cr(m, t, u, l, s(e) === m ? e : null)) : (t.anchor = o(e), f(m, c), t.targetAnchor || cr(m, t, u, l), d(c && o(c), t, m, n, r, i, a))), sr(t, h);
	} else h && t.shapeFlag & 16 && (p(e, t), t.targetStart = e, t.targetAnchor = o(e));
	return t.anchor && o(t.anchor);
}
var or = rr;
function sr(e, t) {
	let n = e.ctx;
	if (n && n.ut) {
		let r, i;
		for (t ? (r = e.el, i = e.anchor) : (r = e.targetStart, i = e.targetAnchor); r && r !== i;) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
		n.ut();
	}
}
function cr(e, t, n, r, i = null) {
	let a = t.targetStart = n(""), o = t.targetAnchor = n("");
	return a[Xn] = o, e && (r(a, e, i), r(o, e, i)), o;
}
var lr = /* @__PURE__ */ Symbol("_leaveCb");
function ur(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== ia) {
			t = n;
			break;
		}
	}
	return t;
}
function dr(e) {
	if (!xr(e)) return Zn(e.type) && e.children ? ur(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && h(n.default)) return n.default();
	}
}
function fr(e, t) {
	if (e.shapeFlag & 6 && e.component) {
		e.transition = t;
		let n = e.component.subTree;
		fr(Zn(n.type) && dr(n) || n, t);
	} else if (e.shapeFlag & 128) {
		let n = e.suspense;
		if (n) {
			let e = n.isHydrating ? n.pendingBranch : n.activeBranch;
			e && fr(e, t.clone(e));
		} else e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback);
	} else if (e.transition = t, e.type === V && d(e.children)) {
		let n = vi(e.children, !1);
		n && fr(n, t);
	}
}
function pr(e) {
	if (e.component) return pr(e.component.subTree);
	if (e.type === V) {
		let t = d(e.children) && vi(e.children, !1);
		return t ? pr(t) : void 0;
	}
	if (e.type !== ia) return e;
}
// @__NO_SIDE_EFFECTS__
function mr(e, t) {
	return h(e) ? /* @__PURE__ */ s({ name: e.name }, t, { setup: e }) : e;
}
function hr(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function gr(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var _r = /* @__PURE__ */ new WeakMap();
function vr(e, n, r, a, o = !1) {
	if (d(e)) {
		e.forEach((e, t) => vr(e, n && (d(n) ? n[t] : n), r, a, o));
		return;
	}
	if (br(a) && !o) {
		a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && vr(e, n, r, a.component.subTree);
		return;
	}
	let s = a.shapeFlag & 4 ? Ga(a.component) : a.el, l = o ? null : s, { i: f, r: p } = e, m = n && n.r, _ = f.refs === t ? f.refs = {} : f.refs, v = f.setupState, y = /* @__PURE__ */ N(v), b = v === t ? i : (e) => !gr(_, e) && u(y, e), x = (e, t) => !(t && gr(_, t));
	if (m != null && m !== p) {
		if (yr(n), g(m)) _[m] = null, b(m) && (v[m] = null);
		else if (/* @__PURE__ */ Zt(m)) {
			let e = n;
			x(m, e.k) && (m.value = null), e.k && (_[e.k] = null);
		}
	}
	if (h(p)) mn(p, f, 12, [l, _]);
	else {
		let t = g(p), n = /* @__PURE__ */ Zt(p);
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
					i(), _r.delete(e);
				};
				t.id = -1, _r.set(e, t), Ui(t, r);
			} else yr(e), i();
		}
	}
}
function yr(e) {
	let t = _r.get(e);
	t && (t.flags |= 8, _r.delete(e));
}
ue().requestIdleCallback, ue().cancelIdleCallback;
var br = (e) => !!e.type.__asyncLoader, xr = (e) => e.type.__isKeepAlive;
function Sr(e, t) {
	wr(e, "a", t);
}
function Cr(e, t) {
	wr(e, "da", t);
}
function wr(e, t, n = Aa) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (Er(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) xr(e.parent.vnode) && Tr(r, t, n, e), e = e.parent;
	}
}
function Tr(e, t, n, r) {
	let i = Er(t, e, r, !0), a = Er("um", () => c(r[t], i), n);
	a.flags = 16;
}
function Er(e, t, n = Aa, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			qe();
			let i = Pa(n), a = hn(t, n, e, r);
			return i(), Je(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var Dr = (e) => (t, n = Aa) => {
	La && e !== "sp" || Er(e, (...e) => t(...e), n);
}, Or = Dr("bm"), z = Dr("m"), kr = Dr("bu"), Ar = Dr("u"), jr = Dr("bum"), Mr = Dr("um"), Nr = Dr("sp"), Pr = Dr("rtg"), Fr = Dr("rtc");
function Ir(e, t = Aa) {
	Er("ec", e, t);
}
var Lr = "components", Rr = /* @__PURE__ */ Symbol.for("v-ndc");
function zr(e) {
	return g(e) ? Br(Lr, e, !1) || e : e || Rr;
}
function Br(e, t, n = !0, r = !1) {
	let i = In || Aa;
	if (i) {
		let n = i.type;
		if (e === Lr) {
			let e = Ka(n, !1);
			if (e && (e === t || e === T(t) || e === D(T(t)))) return n;
		}
		let a = Vr(i[e] || n[e], t) || Vr(i.appContext[e], t);
		return !a && r ? n : a;
	}
}
function Vr(e, t) {
	return e && (e[t] || e[T(t)] || e[D(T(t))]);
}
function B(e, t, n, r) {
	let i, a = n && n[r], o = d(e);
	if (o || g(e)) {
		let n = o && /* @__PURE__ */ Wt(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ Kt(e), s = /* @__PURE__ */ Gt(e), e = ct(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? Xt(Yt(e[n])) : Yt(e[n]) : e[n], n, void 0, a && a[n]);
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
var Hr = (e) => e ? Ia(e) ? Ga(e) : Hr(e.parent) : null, Ur = /* @__PURE__ */ s(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => Hr(e.parent),
	$root: (e) => Hr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Qr(e),
	$forceUpdate: (e) => e.f ||= () => {
		Dn(e.update);
	},
	$nextTick: (e) => e.n ||= Tn.bind(e.proxy),
	$watch: (e) => qn.bind(e)
}), Wr = (e, n) => e !== t && !e.__isScriptSetup && u(e, n), Gr = {
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
			else if (Wr(i, n)) return s[n] = 1, i[n];
			else if (a !== t && u(a, n)) return s[n] = 2, a[n];
			else if (u(o, n)) return s[n] = 3, o[n];
			else if (r !== t && u(r, n)) return s[n] = 4, r[n];
			else qr && (s[n] = 0);
		}
		let d = Ur[n], f, p;
		if (d) return n === "$attrs" && it(e.attrs, "get", ""), d(e);
		if ((f = c.__cssModules) && (f = f[n])) return f;
		if (r !== t && u(r, n)) return s[n] = 4, r[n];
		if (p = l.config.globalProperties, u(p, n)) return p[n];
	},
	set({ _: e }, n, r) {
		let { data: i, setupState: a, ctx: o } = e;
		return Wr(a, n) ? (a[n] = r, !0) : i !== t && u(i, n) ? (i[n] = r, !0) : u(e.props, n) || n[0] === "$" && n.slice(1) in e ? !1 : (o[n] = r, !0);
	},
	has({ _: { data: e, setupState: n, accessCache: r, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(r[c] || e !== t && c[0] !== "$" && u(e, c) || Wr(n, c) || u(o, c) || u(i, c) || u(Ur, c) || u(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? u(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function Kr(e) {
	return d(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var qr = !0;
function Jr(e) {
	let t = Qr(e), n = e.proxy, i = e.ctx;
	qr = !1, t.beforeCreate && Xr(t.beforeCreate, e, "bc");
	let { data: a, computed: o, methods: s, watch: c, provide: l, inject: u, created: f, beforeMount: p, mounted: m, beforeUpdate: g, updated: _, activated: y, deactivated: b, beforeDestroy: x, beforeUnmount: S, destroyed: C, unmounted: w, render: ee, renderTracked: te, renderTriggered: ne, errorCaptured: T, serverPrefetch: re, expose: E, inheritAttrs: D, components: ie, directives: ae, filters: oe } = t;
	if (u && Yr(u, i, null), s) for (let e in s) {
		let t = s[e];
		h(t) && (i[e] = t.bind(n));
	}
	if (a) {
		let t = a.call(n, n);
		v(t) && (e.data = /* @__PURE__ */ M(t));
	}
	if (qr = !0, o) for (let e in o) {
		let t = o[e], a = J({
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
	if (c) for (let e in c) Zr(c[e], i, n, e);
	if (l) {
		let e = h(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Vn(t, e[t]);
		});
	}
	f && Xr(f, e, "c");
	function se(e, t) {
		d(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (se(Or, p), se(z, m), se(kr, g), se(Ar, _), se(Sr, y), se(Cr, b), se(Ir, T), se(Fr, te), se(Pr, ne), se(jr, S), se(Mr, w), se(Nr, re), d(E)) {
		if (E.length) {
			let t = e.exposed ||= {};
			E.forEach((e) => {
				Object.defineProperty(t, e, {
					get: () => n[e],
					set: (t) => n[e] = t,
					enumerable: !0
				});
			});
		} else e.exposed ||= {};
	}
	ee && e.render === r && (e.render = ee), D != null && (e.inheritAttrs = D), ie && (e.components = ie), ae && (e.directives = ae), re && hr(e);
}
function Yr(e, t, n = r) {
	d(e) && (e = ri(e));
	for (let n in e) {
		let r = e[n], i;
		i = v(r) ? "default" in r ? Hn(r.from || n, r.default, !0) : Hn(r.from || n) : Hn(r), /* @__PURE__ */ Zt(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Xr(e, t, n) {
	hn(d(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Zr(e, t, n, r) {
	let i = r.includes(".") ? Jn(n, r) : () => n[r];
	if (g(e)) {
		let n = t[e];
		h(n) && R(i, n);
	} else if (h(e)) R(i, e.bind(n));
	else if (v(e)) {
		if (d(e)) e.forEach((e) => Zr(e, t, n, r));
		else {
			let r = h(e.handler) ? e.handler.bind(n) : t[e.handler];
			h(r) && R(i, r, e);
		}
	}
}
function Qr(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => $r(c, e, o, !0)), $r(c, t, o)), v(t) && a.set(t, c), c;
}
function $r(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && $r(e, a, n, !0), i && i.forEach((t) => $r(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = ei[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var ei = {
	data: ti,
	props: oi,
	emits: oi,
	methods: ai,
	computed: ai,
	beforeCreate: ii,
	created: ii,
	beforeMount: ii,
	mounted: ii,
	beforeUpdate: ii,
	updated: ii,
	beforeDestroy: ii,
	beforeUnmount: ii,
	destroyed: ii,
	unmounted: ii,
	activated: ii,
	deactivated: ii,
	errorCaptured: ii,
	serverPrefetch: ii,
	components: ai,
	directives: ai,
	watch: si,
	provide: ti,
	inject: ni
};
function ti(e, t) {
	return t ? e ? function() {
		return s(h(e) ? e.call(this, this) : e, h(t) ? t.call(this, this) : t);
	} : t : e;
}
function ni(e, t) {
	return ai(ri(e), ri(t));
}
function ri(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function ii(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function ai(e, t) {
	return e ? s(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function oi(e, t) {
	return e ? d(e) && d(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : s(/* @__PURE__ */ Object.create(null), Kr(e), Kr(t ?? {})) : t;
}
function si(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = s(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = ii(e[r], t[r]);
	return n;
}
function ci() {
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
var li = 0;
function ui(e, t) {
	return function(n, r = null) {
		h(n) || (n = s({}, n)), r != null && !v(r) && (r = null);
		let i = ci(), a = /* @__PURE__ */ new WeakSet(), o = [], c = !1, l = i.app = {
			_uid: li++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: Ya,
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
					let u = l._ceVNode || G(n, r);
					return u.appContext = i, s === !0 ? s = "svg" : s === !1 && (s = void 0), o && t ? t(u, a) : e(u, a, s), c = !0, l._container = a, a.__vue_app__ = l, Ga(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				c && (hn(o, l._instance, 16), e(null, l._container), delete l._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, l;
			},
			runWithContext(e) {
				let t = di;
				di = l;
				try {
					return e();
				} finally {
					di = t;
				}
			}
		};
		return l;
	};
}
var di = null, fi = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${T(t)}Modifiers`] || e[`${E(t)}Modifiers`];
function pi(e, n, ...r) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || t, a = r, o = n.startsWith("update:"), s = o && fi(i, n.slice(7));
	s && (s.trim && (a = r.map((e) => g(e) ? e.trim() : e)), s.number && (a = a.map(ce)));
	let c, l = i[c = ie(n)] || i[c = ie(T(n))];
	!l && o && (l = i[c = ie(E(n))]), l && hn(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, hn(u, e, 6, a);
	}
}
var mi = /* @__PURE__ */ new WeakMap();
function hi(e, t, n = !1) {
	let r = n ? mi : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, c = !1;
	if (!h(e)) {
		let r = (e) => {
			let n = hi(e, t, !0);
			n && (c = !0, s(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !c ? (v(e) && r.set(e, null), null) : (d(a) ? a.forEach((e) => o[e] = null) : s(o, a), v(e) && r.set(e, o), o);
}
function gi(e, t) {
	return !e || !a(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), u(e, t[0].toLowerCase() + t.slice(1)) || u(e, E(t)) || u(e, t));
}
function _i(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: s, attrs: c, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = Rn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = xa(u.call(t, e, d, f, m, p, h)), y = c;
		} else {
			let e = t;
			v = xa(e.length > 1 ? e(f, {
				attrs: c,
				slots: s,
				emit: l
			}) : e(f, null)), y = t.props ? c : yi(c);
		}
	} catch (t) {
		oa.length = 0, gn(t, e, 1), v = G(ia);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(o) && (y = bi(y, a)), b = ya(b, y, !1, !0));
	}
	return n.dirs && (b = ya(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && fr(Zn(b.type) && dr(b) || b, n.transition), v = b, Rn(_), v;
}
function vi(e, t = !0) {
	let n;
	for (let t = 0; t < e.length; t++) {
		let r = e[t];
		if (pa(r)) {
			if (r.type !== ia || r.children === "v-if") {
				if (n) return;
				n = r;
			}
		} else return;
	}
	return n;
}
var yi = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || a(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, bi = (e, t) => {
	let n = {};
	for (let r in e) o(r) && r.slice(9) in t || (n[r] = e[r]);
	return n;
};
function xi(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? Si(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (Ci(o, r, n) && !gi(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? !o || Si(r, o, l) : !!o;
	return !1;
}
function Si(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (!u(e, a) || Ci(t, e, a) && !gi(n, a)) return !0;
	}
	return !1;
}
function Ci(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && v(r) && v(i) ? !xe(r, i) : r !== i;
}
function wi({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var Ti = {}, Ei = () => Object.create(Ti), Di = (e) => Object.getPrototypeOf(e) === Ti;
function Oi(e, t, n, r = !1) {
	let i = {}, a = Ei();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), Ai(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	e.props = n ? r ? i : /* @__PURE__ */ Vt(i) : e.type.props ? i : a, e.attrs = a;
}
function ki(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ N(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (gi(e.emitsOptions, o)) continue;
				let d = t[o];
				if (c) {
					if (u(a, o)) d !== a[o] && (a[o] = d, l = !0);
					else {
						let t = T(o);
						i[t] = ji(c, s, t, d, e, !1);
					}
				} else d !== a[o] && (a[o] = d, l = !0);
			}
		}
	} else {
		Ai(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) t && (u(t, a) || (r = E(a)) !== a && u(t, r)) || (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = ji(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) t && u(t, e) || (delete a[e], l = !0);
	}
	l && at(e.attrs, "set", "");
}
function Ai(e, n, r, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (n) for (let t in n) {
		if (ee(t)) continue;
		let l = n[t], d;
		a && u(a, d = T(t)) ? !o || !o.includes(d) ? r[d] = l : (c ||= {})[d] = l : gi(e.emitsOptions, t) || t in i && l === i[t] || (i[t] = l, s = !0);
	}
	if (o) {
		let n = /* @__PURE__ */ N(r), i = c || t;
		for (let t = 0; t < o.length; t++) {
			let s = o[t];
			r[s] = ji(a, n, s, i[s], e, !u(i, s));
		}
	}
	return s;
}
function ji(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = u(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && h(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = Pa(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === E(n)) && (r = !0));
	}
	return r;
}
var Mi = /* @__PURE__ */ new WeakMap();
function Ni(e, r, i = !1) {
	let a = i ? Mi : r.propsCache, o = a.get(e);
	if (o) return o;
	let c = e.props, l = {}, f = [], p = !1;
	if (!h(e)) {
		let t = (e) => {
			p = !0;
			let [t, n] = Ni(e, r, !0);
			s(l, t), n && f.push(...n);
		};
		!i && r.mixins.length && r.mixins.forEach(t), e.extends && t(e.extends), e.mixins && e.mixins.forEach(t);
	}
	if (!c && !p) return v(e) && a.set(e, n), n;
	if (d(c)) for (let e = 0; e < c.length; e++) {
		let n = T(c[e]);
		Pi(n) && (l[n] = t);
	}
	else if (c) for (let e in c) {
		let t = T(e);
		if (Pi(t)) {
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
function Pi(e) {
	return e[0] !== "$" && !ee(e);
}
var Fi = (e) => e === "_" || e === "_ctx" || e === "$stable", Ii = (e) => d(e) ? e.map(xa) : [xa(e)], Li = (e, t, n) => {
	if (t._n) return t;
	let r = zn((...e) => Ii(t(...e)), n);
	return r._c = !1, r;
}, Ri = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (Fi(n)) continue;
		let i = e[n];
		if (h(i)) t[n] = Li(n, i, r);
		else if (i != null) {
			let e = Ii(i);
			t[n] = () => e;
		}
	}
}, zi = (e, t) => {
	let n = Ii(t);
	e.slots.default = () => n;
}, Bi = (e, t, n) => {
	for (let r in t) (n || !Fi(r)) && (e[r] = t[r]);
}, Vi = (e, t, n) => {
	let r = e.slots = Ei();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (Bi(r, t, n), n && se(r, "_", e, !0)) : Ri(t, r);
	} else t && zi(e, t);
}, Hi = (e, n, r) => {
	let { vnode: i, slots: a } = e, o = !0, s = t;
	if (i.shapeFlag & 32) {
		let e = n._;
		e ? r && e === 1 ? o = !1 : Bi(a, n, r) : (o = !n.$stable, Ri(n, a)), s = n;
	} else n && (zi(e, n), s = { default: 1 });
	if (o) for (let e in a) !Fi(e) && s[e] == null && delete a[e];
}, Ui = na;
function Wi(e) {
	return Gi(e);
}
function Gi(e, i) {
	let a = ue();
	a.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = r, insertStaticContent: _ } = e, v = (e, t, r, i = null, a = null, o = null, s = void 0, c = null, l = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !ma(e, t) && (i = ye(e), k(e, a, o, !0), e = null), t.patchFlag === -2 && (l = !1, t.dynamicChildren = null), t.dynamicChildren && e && e.dynamicChildren && e.dynamicChildren.hasOnce && (t.dynamicChildren === n && (t.dynamicChildren = []), t.dynamicChildren.hasOnce = !0);
		let { type: u, ref: d, shapeFlag: f } = t;
		switch (u) {
			case ra:
				y(e, t, r, i);
				break;
			case ia:
				b(e, t, r, i);
				break;
			case aa:
				e ?? x(t, r, i, s);
				break;
			case V:
				ie(e, t, r, i, a, o, s, c, l);
				break;
			default: f & 1 ? w(e, t, r, i, a, o, s, c, l) : f & 6 ? ae(e, t, r, i, a, o, s, c, l) : (f & 64 || f & 128) && u.process(e, t, r, i, a, o, s, c, l, xe);
		}
		d != null && a ? vr(d, e && e.ref, o, t || e, !t) : d == null && e && e.ref != null && vr(e.ref, null, o, e, !0);
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
	}, w = (e, t, n, r, i, a, o, s, c) => {
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) te(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), re(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, te = (e, t, n, r, i, a, s, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && T(e.children, d, null, r, i, Ki(e, a), s, u), _ && Bn(e, null, r, "created"), ne(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !ee(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && Ta(f, r, e);
		}
		_ && Bn(e, null, r, "beforeMount");
		let v = Ji(i, g);
		v ? g.beforeEnter(d) : g && !g.persisted && (d[ta] = !0), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && Ui(() => {
			try {
				f && Ta(f, r, e), v && g.enter(d), _ && Bn(e, null, r, "mounted");
			} finally {}
		}, i);
	}, ne = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || ea(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				ne(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, T = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) {
			let c = e[l] = s ? Sa(e[l]) : xa(e[l]);
			v(null, c, t, n, r, i, a, o, s);
		}
	}, re = (e, n, r, i, a, o, s) => {
		let l = n.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = n;
		u |= e.patchFlag & 16;
		let m = e.props || t, h = n.props || t, g;
		if (r && qi(r, !1), (g = h.onVnodeBeforeUpdate) && Ta(g, r, n, e), f && Bn(n, e, r, "beforeUpdate"), r && qi(r, !0), d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length) && (u = 0, s = !1, d = null), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? E(e.dynamicChildren, d, l, r, i, Ki(n, a), o) : s || de(e, n, l, null, r, i, Ki(n, a), o, !1), u > 0) {
			if (u & 16) D(l, m, h, r, a);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, a), u & 4 && c(l, "style", m.style, h.style, a), u & 8) {
				let e = n.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let n = e[t], i = m[n], o = h[n];
					(o !== i || n === "value") && c(l, n, i, o, a, r);
				}
			}
			u & 1 && e.children !== n.children && p(l, n.children);
		} else !s && d == null && D(l, m, h, r, a);
		((g = h.onVnodeUpdated) || f) && Ui(() => {
			g && Ta(g, r, n, e), f && Bn(n, e, r, "updated");
		}, i);
	}, E = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el || $i(c), d = u && (c.type === V || !ma(c, l) || c.shapeFlag & 198) ? m(u) : n;
			v(c, l, d, null, r, i, a, o, !0);
		}
	}, D = (e, n, r, i, a) => {
		if (n !== r) {
			if (n !== t) for (let t in n) !ee(t) && !(t in r) && c(e, t, n[t], null, a, i);
			for (let t in r) {
				if (ee(t)) continue;
				let o = r[t], s = n[t];
				o !== s && t !== "value" && c(e, t, s, o, a, i);
			}
			"value" in r && c(e, "value", n.value, r.value, a);
		}
	}, ie = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), T(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (E(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && Yi(e, t, !0)) : de(e, t, n, f, i, a, s, c, l);
	}, ae = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : se(t, n, r, i, a, o, c) : ce(e, t, c);
	}, se = (e, t, n, r, i, a, o) => {
		let s = e.component = ka(e, r, i);
		if (xr(e) && (s.ctx.renderer = xe), Ra(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, le, o, a), !e.el) {
				let r = s.subTree = G(ia);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else le(s, e, t, n, i, a, o);
	}, ce = (e, t, n) => {
		let r = t.component = e.component;
		if (xi(e, t, n)) {
			if (r.asyncDep && !r.asyncResolved) {
				t.el = e.el, t.placeholder = e.placeholder, O(r, t, n);
				return;
			}
			r.next = t, r.update();
		} else t.el = e.el, t.placeholder = e.placeholder, r.vnode = t;
	}, le = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = Zi(e);
					if (n) {
						t && (t.el = c.el, O(e, t, o)), n.asyncDep.then(() => {
							let t = () => {
								e.job.flags & 8 || (i && i.pendingBranch ? Ui(t, i) : l());
							};
							t.flags = 48, Ui(t, i);
						});
						return;
					}
				}
				let u = t, d;
				qi(e, !1), t ? (t.el = c.el, O(e, t, o)) : t = c, n && oe(n), (d = t.props && t.props.onVnodeBeforeUpdate) && Ta(d, s, t, c), qi(e, !0);
				let f = _i(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el || $i(p)), ye(p), e, i, a), t.el = f.el, u === null && wi(e, f.el), r && Ui(r, i), (d = t.props && t.props.onVnodeUpdated) && Ui(() => Ta(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = br(t);
				if (qi(e, !1), l && oe(l), !m && (o = c && c.onVnodeBeforeMount) && Ta(o, d, t), qi(e, !0), s && Ce) {
					let t = () => {
						e.subTree = _i(e), Ce(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = _i(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && Ui(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					Ui(() => Ta(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && br(d.vnode) && d.vnode.shapeFlag & 256) && e.a && Ui(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Me(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => Dn(u), qi(e, !0), l();
	}, O = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, ki(e, t.props, r, n), Hi(e, t.children, n), qe(), An(e), Je();
	}, de = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				pe(l, d, n, r, i, a, o, s, c);
				return;
			}
			if (f & 256) {
				fe(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && ve(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? pe(l, d, n, r, i, a, o, s, c) : ve(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && T(d, n, r, i, a, o, s, c));
	}, fe = (e, t, r, i, a, o, s, c, l) => {
		e ||= n, t ||= n;
		let u = e.length, d = t.length, f = Math.min(u, d), p = 0;
		for (; p < f; p++) {
			let n = t[p] = l ? Sa(t[p]) : xa(t[p]);
			v(e[p], n, r, null, a, o, s, c, l);
		}
		u > d ? ve(e, a, o, !0, !1, f) : T(t, r, i, a, o, s, c, l, f);
	}, pe = (e, t, r, i, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let n = e[u], i = t[u] = l ? Sa(t[u]) : xa(t[u]);
			if (ma(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let n = e[f], i = t[p] = l ? Sa(t[p]) : xa(t[p]);
			if (ma(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, n = e < d ? t[e].el : i;
				for (; u <= p;) v(null, t[u] = l ? Sa(t[u]) : xa(t[u]), r, n, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) k(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? Sa(t[u]) : xa(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let _, y = 0, b = p - h + 1, x = !1, S = 0, C = Array(b);
			for (u = 0; u < b; u++) C[u] = 0;
			for (u = m; u <= f; u++) {
				let n = e[u];
				if (y >= b) {
					k(n, a, o, !0);
					continue;
				}
				let i;
				if (n.key != null) i = g.get(n.key);
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && ma(n, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? k(n, a, o, !0) : (C[i - h] = u + 1, i >= S ? S = i : x = !0, v(n, t[i], r, null, a, o, s, c, l), y++);
			}
			let w = x ? Xi(C) : n;
			for (_ = w.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, n = t[e], f = t[e + 1], p = e + 1 < d ? f.el || $i(f) : i;
				C[u] === 0 ? v(null, n, r, p, a, o, s, c, l) : x && (_ < 0 || u !== w[_] ? me(n, r, p, 2) : _--);
			}
		}
	}, me = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) me(e.component.subTree, t, n, r);
		else if (d & 128) e.suspense.move(t, n, r);
		else if (d & 64) c.move(e, t, n, xe);
		else if (c === V) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) me(u[e], t, n, r);
			o(e.anchor, t, n);
		} else if (c === aa) S(e, t, n);
		else if (r !== 2 && d & 1 && l) {
			if (r === 0) l.persisted && !a[lr] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), Ui(() => l.enter(a), i));
			else {
				let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
					e.ctx.isUnmounted ? s(a) : o(a, t, n);
				}, d = () => {
					let e = a._isLeaving || !!a[lr];
					a._isLeaving && a[lr](!0), l.persisted && !e ? u() : r(a, () => {
						u(), c && c();
					});
				};
				i ? i(a, u, d) : d();
			}
		} else o(a, t, n);
	}, k = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if ((d === -2 || l && l.hasOnce) && (i = !1), s != null && (qe(), vr(s, null, n, e, !0), Je()), p == null || e.ctx && e.ctx !== t || (t.renderCache[p] = void 0), u & 256 && t.ctx.deactivate(e)) return;
		let h = u & 1 && f, g = !br(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && Ta(_, t, e), u & 6) _e(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Bn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, xe, r) : l && !l.hasOnce && (a !== V || d > 0 && d & 64) ? ve(l, t, n, !1, !0) : (a === V && d & 384 || !i && u & 16) && ve(c, t, n), r && he(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && Ui(() => {
			_ && Ta(_, t, e), h && Bn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, he = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e, a = t === V;
		if (a && !i) {
			ge(n, r);
			return;
		}
		if (t === aa) {
			C(e), i && !i.persisted && i.afterLeave && i.afterLeave();
			return;
		}
		let o = a ? pr(e) : e, c = () => {
			a ? m(n) && ge(n, r) : s(n), i && !i.persisted && i.afterLeave && i.afterLeave();
		};
		if (o && o.shapeFlag & 1 && i && !i.persisted) {
			let { leave: e, delayLeave: t } = i, n = o.el, r = () => e(n, c);
			t ? t(n, c, r) : r();
		} else c();
	}, ge = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, _e = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		Qi(c), Qi(l), r && oe(r), i.stop(), a ? (a.flags |= 8, k(o, e, t, n)) : o && (o.transition = e.vnode.transition, k(o, e, t, n)), s && Ui(s, t);
		let u = () => {
			e.isUnmounted = !0;
		};
		u.flags = 16, Ui(u, t);
	}, ve = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) k(e[o], t, n, r, i);
	}, ye = (e) => {
		if (e.shapeFlag & 6) return ye(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Xn];
		return n ? h(n) : t;
	}, be = (e, t, n) => {
		Nn(() => {
			e == null ? t._vnode && k(t._vnode, null, null, !0) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e;
		}, e && t._vnode ? void 0 : e && e.component ? e.component.uid : Oa());
	}, xe = {
		p: v,
		um: k,
		m: me,
		r: he,
		mt: se,
		mc: T,
		pc: de,
		pbc: E,
		n: ye,
		o: e
	}, Se, Ce;
	return i && ([Se, Ce] = i(xe)), {
		render: be,
		hydrate: Se,
		createApp: ui(be, Se)
	};
}
function Ki({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function qi({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ji(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Yi(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (d(r) && d(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = Sa(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Yi(t, a)), a.type === ra && (a.patchFlag === -1 && (a = i[e] = Sa(a)), a.el = t.el), a.type === ia && !a.el && (a.el = t.el);
	}
}
function Xi(e) {
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
function Zi(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Zi(t);
}
function Qi(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function $i(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	if (t) return $i(t.subTree);
	let n = e.suspense;
	return n && n.activeBranch ? $i(n.activeBranch) : null;
}
var ea = (e) => e.__isSuspense, ta = /* @__PURE__ */ Symbol("_deferredEnter");
function na(e, t) {
	t && t.pendingBranch ? d(e) ? t.effects.push(...e) : t.effects.push(e) : kn(e);
}
var V = /* @__PURE__ */ Symbol.for("v-fgt"), ra = /* @__PURE__ */ Symbol.for("v-txt"), ia = /* @__PURE__ */ Symbol.for("v-cmt"), aa = /* @__PURE__ */ Symbol.for("v-stc"), oa = [], sa = null;
function H(e = !1) {
	oa.push(sa = e ? null : []);
}
function ca() {
	oa.pop(), sa = oa[oa.length - 1] || null;
}
var la = 1;
function ua(e, t = !1) {
	la += e, e < 0 && sa && t && (sa.hasOnce = !0);
}
function da(e) {
	return e.dynamicChildren = la > 0 ? sa || n : null, ca(), la > 0 && sa && sa.push(e), e;
}
function U(e, t, n, r, i, a) {
	return da(W(e, t, n, r, i, a, !0));
}
function fa(e, t, n, r, i) {
	return da(G(e, t, n, r, i, !0));
}
function pa(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function ma(e, t) {
	return e.type === t.type && e.key === t.key;
}
var ha = ({ key: e }) => e ?? null, ga = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : g(e) || /* @__PURE__ */ Zt(e) || h(e) ? {
	i: In,
	r: e,
	k: t,
	f: !!n
} : e);
function W(e, t = null, n = null, r = 0, i = null, a = e === V ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && ha(t),
		ref: t && ga(t),
		scopeId: Ln,
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
		ctx: In
	};
	return s ? (Ca(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= g(n) ? 8 : 16), la > 0 && !o && sa && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && sa.push(c), c;
}
var G = _a;
function _a(e, t = null, n = null, r = 0, i = null, a = !1) {
	if (e && e !== Rr || (e = ia), pa(e)) {
		let r = ya(e, t, !0);
		return n && Ca(r, n), la > 0 && !a && sa && (r.shapeFlag & 6 ? sa[sa.indexOf(e)] = r : sa.push(r)), r.patchFlag = -2, r;
	}
	if (qa(e) && (e = e.__vccOpts), t) {
		t = va(t);
		let { class: e, style: n } = t;
		e && !g(e) && (t.class = k(e)), v(n) && (/* @__PURE__ */ qt(n) && !d(n) && (n = s({}, n)), t.style = O(n));
	}
	let o = g(e) ? 1 : ea(e) ? 128 : Zn(e) ? 64 : v(e) ? 4 : h(e) ? 2 : 0;
	return W(e, t, n, r, i, o, a, !0);
}
function va(e) {
	return e ? /* @__PURE__ */ qt(e) ? s({}, e) : Di(e) ? s({}, e[Ha] || e) : e : null;
}
function ya(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? wa(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && ha(l),
		ref: t && t.ref ? n && a ? d(a) ? a.concat(ga(t)) : [a, ga(t)] : ga(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== V ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && ya(e.ssContent),
		ssFallback: e.ssFallback && ya(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce,
		cacheIndex: e.cacheIndex
	};
	return c && r && fr(u, c.clone(u)), u;
}
function K(e = " ", t = 0) {
	return G(ra, null, e, t);
}
function ba(e, t) {
	let n = G(aa, null, e);
	return n.staticCount = t, n;
}
function q(e = "", t = !1) {
	return t ? (H(), fa(ia, null, e)) : G(ia, null, e);
}
function xa(e) {
	return e == null || typeof e == "boolean" ? G(ia) : d(e) ? G(V, null, e.slice()) : pa(e) ? Sa(e) : G(ra, null, String(e));
}
function Sa(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : ya(e);
}
function Ca(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (d(t)) n = 16;
	else if (typeof t == "object") {
		if (r & 65) {
			let n = t.default;
			n && (n._c && (n._d = !1), Ca(e, n()), n._c && (n._d = !0));
			return;
		}
		{
			n = 32;
			let r = t._;
			!r && !Di(t) ? t._ctx = In : r === 3 && In && (In.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
		}
	} else if (h(t)) {
		if (r & 65) {
			Ca(e, { default: t });
			return;
		}
		t = {
			default: t,
			_ctx: In
		}, n = 32;
	} else t = String(t), r & 64 ? (n = 16, t = [K(t)]) : n = 8;
	e.children = t, e.shapeFlag |= n;
}
function wa(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = k([t.class, r.class]));
		else if (e === "style") t.style = O([t.style, r.style]);
		else if (a(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(d(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !o(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function Ta(e, t, n, r = null) {
	hn(e, t, 7, [n, r]);
}
var Ea = /* @__PURE__ */ ci(), Da = 0;
function Oa() {
	return Da;
}
function ka(e, n, r) {
	let i = e.type, a = (n ? n.appContext : e.appContext) || Ea, o = {
		uid: Da++,
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
		scope: new De(!0),
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
		propsOptions: Ni(i, a),
		emitsOptions: hi(i, a),
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
	return o.ctx = { _: o }, o.root = n ? n.root : o, o.emit = pi.bind(null, o), e.ce && e.ce(o), o;
}
var Aa = null, ja = () => Aa || In, Ma, Na;
{
	let e = ue(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	Ma = t("__VUE_INSTANCE_SETTERS__", (e) => Aa = e), Na = t("__VUE_SSR_SETTERS__", (e) => La = e);
}
var Pa = (e) => {
	let t = Aa;
	return Ma(e), e.scope.on(), () => {
		e.scope.off(), Ma(t);
	};
}, Fa = () => {
	Aa && Aa.scope.off(), Ma(null);
};
function Ia(e) {
	return e.vnode.shapeFlag & 4;
}
var La = !1;
function Ra(e, t = !1, n = !1) {
	t && Na(t);
	let { props: r, children: i } = e.vnode, a = Ia(e);
	Oi(e, r, a, t), Vi(e, i, n || t);
	let o = a ? za(e, t) : void 0;
	return t && Na(!1), o;
}
function za(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Gr);
	let { setup: r } = n;
	if (r) {
		qe();
		let n = e.setupContext = r.length > 1 ? Wa(e) : null, i = Pa(e), a = mn(r, e, 0, [e.props, n]), o = y(a);
		if (Je(), i(), (o || e.sp) && !br(e) && hr(e), o) {
			if (a.then(Fa, Fa), t) return a.then((n) => {
				Na(!0);
				try {
					Ba(e, n, t);
				} finally {
					Na(!1);
				}
			}).catch((t) => {
				gn(t, e, 0, void 0, !0), e.ssrRender = (e, t) => t("<!---->");
			});
			e.asyncDep = a;
		} else Ba(e, a, t);
	} else Va(e, t);
}
function Ba(e, t, n) {
	h(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : v(t) && (e.setupState = tn(t)), Va(e, n);
}
function Va(e, t, n) {
	let i = e.type;
	e.render ||= i.render || r;
	{
		let t = Pa(e);
		qe();
		try {
			Jr(e);
		} finally {
			Je(), t();
		}
	}
}
var Ha = /* @__PURE__ */ Symbol(), Ua = { get(e, t) {
	return it(e, "get", ""), t === Ha ? e : e[t];
} };
function Wa(e) {
	return {
		attrs: new Proxy(e.attrs, Ua),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function Ga(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(tn(Jt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Ur) return Ur[n](e);
		},
		has(e, t) {
			return t in e || t in Ur;
		}
	}) : e.proxy;
}
function Ka(e, t = !0) {
	return h(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function qa(e) {
	return h(e) && "__vccOpts" in e;
}
var J = (e, t) => /* @__PURE__ */ sn(e, t, La);
function Ja(e, t, n) {
	try {
		ua(-1);
		let r = arguments.length;
		return r === 2 ? v(t) && !d(t) ? pa(t) ? G(e, null, [t]) : G(e, t) : G(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && pa(n) && (n = [n]), G(e, t, n));
	} finally {
		ua(1);
	}
}
var Ya = "3.5.45", Xa = void 0, Za = typeof window < "u" && window.trustedTypes;
if (Za) try {
	Xa = /* @__PURE__ */ Za.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var Qa = Xa ? (e) => Xa.createHTML(e) : (e) => e, $a = "http://www.w3.org/2000/svg", eo = "http://www.w3.org/1998/Math/MathML", to = typeof document < "u" ? document : null, no = to && /* @__PURE__ */ to.createElement("template"), ro = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? to.createElementNS($a, e) : t === "mathml" ? to.createElementNS(eo, e) : n ? to.createElement(e, { is: n }) : to.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => to.createTextNode(e),
	createComment: (e) => to.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => to.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), i !== a && (i = i.nextSibling););
		else {
			no.innerHTML = Qa(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = no.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, io = /* @__PURE__ */ Symbol("_vtc");
function ao(e, t, n) {
	let r = e[io];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var oo = /* @__PURE__ */ Symbol("_vod"), so = /* @__PURE__ */ Symbol("_vsh"), co = {
	name: "show",
	beforeMount(e, { value: t }, { transition: n }) {
		e[oo] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : lo(e, t);
	},
	mounted(e, { value: t }, { transition: n }) {
		n && t && n.enter(e);
	},
	updated(e, { value: t, oldValue: n }, { transition: r }) {
		!t != !n && (r ? t ? (r.beforeEnter(e), lo(e, !0), r.enter(e)) : r.leave(e, () => {
			lo(e, !1);
		}) : lo(e, t));
	},
	beforeUnmount(e, { value: t }) {
		lo(e, t);
	}
};
function lo(e, t) {
	e.style.display = t ? e[oo] : "none", e[so] = !t;
}
var uo = /* @__PURE__ */ Symbol(""), fo = /(?:^|;)\s*display\s*:/;
function po(e, t, n) {
	let r = e.style, i = g(n), a = !1;
	if (n && !i) {
		if (t) {
			if (g(t)) for (let e of t.split(";")) {
				let t = e.slice(0, e.indexOf(":")).trim();
				n[t] ?? ho(r, t, "");
			}
			else for (let e in t) n[e] ?? ho(r, e, "");
		}
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? ho(r, i, "") : yo(e, i, !g(t) && t ? t[i] : void 0, o) || ho(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[uo];
			e && (n += ";" + e), r.cssText = n, a = fo.test(n);
		}
	} else t && e.removeAttribute("style");
	oo in e && (i && t === n || (e[oo] = a ? r.display : ""), e[so] && (r.display = "none"));
}
var mo = /\s*!important$/;
function ho(e, t, n) {
	if (d(n)) n.forEach((n) => ho(e, t, n));
	else if (n ??= "", t.startsWith("--")) mo.test(n) ? e.setProperty(t, n.replace(mo, ""), "important") : e.setProperty(t, n);
	else {
		let r = vo(e, t);
		mo.test(n) ? e.setProperty(E(r), n.replace(mo, ""), "important") : e[r] = n;
	}
}
var go = [
	"Webkit",
	"Moz",
	"ms"
], _o = {};
function vo(e, t) {
	let n = _o[t];
	if (n) return n;
	let r = T(t);
	if (r !== "filter" && r in e) return _o[t] = r;
	r = D(r);
	for (let n = 0; n < go.length; n++) {
		let i = go[n] + r;
		if (i in e) return _o[t] = i;
	}
	return t;
}
function yo(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && g(r) && n === r;
}
var bo = "http://www.w3.org/1999/xlink";
function xo(e, t, n, r, i, a = he(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(bo, t.slice(6, t.length)) : e.setAttributeNS(bo, t, n) : n == null || a && !ge(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : _(n) ? String(n) : n);
}
function So(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? Qa(n) : n);
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
		r === "boolean" ? n = ge(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function Co(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function wo(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var To = /* @__PURE__ */ Symbol("_vei");
function Eo(e, t, n, r, i = null) {
	let a = e[To] || (e[To] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = ko(t);
		r ? Co(e, n, a[t] = No(r, i), s) : o && (wo(e, n, o, s), a[t] = void 0);
	}
}
var Do = /(Once|Passive|Capture)$/, Oo = /^on:?(?:Once|Passive|Capture)$/;
function ko(e) {
	let t, n;
	for (; (n = e.match(Do)) && !Oo.test(e);) t ||= {}, e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
	return [e[2] === ":" ? e.slice(3) : E(e.slice(2)), t];
}
var Ao = 0, jo = /* @__PURE__ */ Promise.resolve(), Mo = () => Ao ||= (jo.then(() => Ao = 0), Date.now());
function No(e, t) {
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
				e && hn(e, t, 5, a);
			}
		} else hn(r, t, 5, [e]);
	};
	return n.value = e, n.attached = Mo(), n;
}
var Po = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Fo = (e, t, n, r, i, s) => {
	let c = i === "svg";
	t === "class" ? ao(e, r, c) : t === "style" ? po(e, n, r) : a(t) ? o(t) || Eo(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), 1) : t[0] === "^" ? (t = t.slice(1), 0) : Io(e, t, r, c)) ? (So(e, t, r), e.tagName.includes("-") || t !== "value" && t !== "checked" && t !== "selected" || xo(e, t, r, c, s, t !== "value")) : e._isVueCE && (Lo(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !g(r))) ? So(e, T(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), xo(e, t, r, c));
};
function Io(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Po(t) && h(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return Po(t) && g(n) ? !1 : t in e;
}
function Lo(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = T(t);
	return Array.isArray(n) ? n.some((e) => T(e) === r) : Object.keys(n).some((e) => T(e) === r);
}
var Ro = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return d(t) ? (e) => oe(t, e) : t;
};
function zo(e) {
	e.target.composing = !0;
}
function Bo(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var Vo = /* @__PURE__ */ Symbol("_assign"), Ho = /* @__PURE__ */ Symbol("_initialValue");
function Uo(e, t, n) {
	return t && (e = e.trim()), n && (e = ce(e)), e;
}
var Y = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e.parentNode && (e.type === "text" ? e[Ho] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Ho] = e.defaultValue.replace(/\r\n?/g, "\n"))), e[Vo] = Ro(i);
		let a = r || i.props && i.props.type === "number";
		Co(e, t ? "change" : "input", (t) => {
			t.target.composing || e[Vo](Uo(e.value, n, a));
		}), (n || a) && Co(e, "change", () => {
			e.value = Uo(e.value, n, a);
		}), t || (Co(e, "compositionstart", zo), Co(e, "compositionend", Bo), Co(e, "change", Bo));
	},
	mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
		let i = t ?? "", a = e[Ho];
		delete e[Ho], a !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== a ? e[Vo](Uo(e.value, n, r)) : e.value = i;
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[Vo] = Ro(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? ce(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, Wo = {
	deep: !0,
	created(e, t, n) {
		e[Vo] = Ro(n), Co(e, "change", () => {
			let t = e._modelValue, n = Jo(e), r = e.checked, i = e[Vo];
			if (d(t)) {
				let e = Se(t, n), a = e !== -1;
				if (r && !a) i(t.concat(n));
				else if (!r && a) {
					let n = [...t];
					n.splice(e, 1), i(n);
				}
			} else if (p(t)) {
				let e = new Set(t);
				r ? e.add(n) : e.delete(n), i(e);
			} else i(Yo(e, r));
		});
	},
	mounted: Go,
	beforeUpdate(e, t, n) {
		e[Vo] = Ro(n), Go(e, t, n);
	}
};
function Go(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (d(t)) i = Se(t, r.props.value) > -1;
	else if (p(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = xe(t, Yo(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var X = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		e._modelValue = t, Co(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? ce(Jo(e)) : Jo(e)), r = e.multiple, i = r ? p(e._modelValue) ? new Set(t) : t : t[0], a = e._pendingValue = [r, r ? d(i) ? t.slice() : t : i];
			try {
				e[Vo](i);
			} finally {
				Tn(() => {
					e._pendingValue === a && (e._pendingValue = void 0);
				});
			}
		}), e[Vo] = Ro(r);
	},
	mounted(e, { value: t, modifiers: { number: n } }) {
		qo(e, t, n);
	},
	beforeUpdate(e, { value: t }, n) {
		e._modelValue = t, e[Vo] = Ro(n);
	},
	updated(e, { value: t, modifiers: { number: n } }) {
		let r = e._pendingValue;
		e._pendingValue = void 0, r && r[0] === e.multiple && Ko(t, r[1], r[0]) || qo(e, t, n);
	}
};
function Ko(e, t, n) {
	if (!n || d(e)) return xe(e, t);
	if (p(e)) {
		if (e.size !== t.length) return !1;
		for (let n of t) if (!e.has(n)) return !1;
		return !0;
	}
	return !1;
}
function qo(e, t, n = !1) {
	let r = e.multiple, i = d(t);
	if (!r || i || p(t)) {
		for (let a = 0, o = e.options.length; a < o; a++) {
			let o = e.options[a], s = Jo(o);
			if (r) {
				if (i) {
					let e = typeof s;
					o.selected = e === "string" || e === "number" ? t.some((e) => String(e) === String(s)) : Se(t, s) > -1;
				} else o.selected = t.has(s) || n && typeof s == "string" && t.has(ce(s));
			} else if (xe(Jo(o), t)) {
				e.selectedIndex !== a && (e.selectedIndex = a);
				return;
			}
		}
		!r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function Jo(e) {
	return "_value" in e ? e._value : e.value;
}
function Yo(e, t) {
	let n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t;
}
var Xo = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], Zo = {
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
	exact: (e, t) => Xo.some((n) => e[`${n}Key`] && !t.includes(n))
}, Z = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = Zo[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, Qo = {
	esc: "escape",
	space: " ",
	up: "arrow-up",
	left: "arrow-left",
	right: "arrow-right",
	down: "arrow-down",
	delete: "backspace"
}, $o = (e, t) => {
	let n = e._withKeys ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n) => {
		if (!("key" in n)) return;
		let r = E(n.key);
		if (t.some((e) => e === r || Qo[e] === r)) return e(n);
	}));
}, es = /* @__PURE__ */ s({ patchProp: Fo }, ro), ts;
function ns() {
	return ts ||= Wi(es);
}
var rs = ((...e) => {
	let t = ns().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = as(e);
		if (!r) return;
		let i = t._component;
		h(i) || i.render || i.template || (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, is(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function is(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function as(e) {
	return g(e) ? document.querySelector(e) : e;
}
// src/vue/navigation/nav-model.js
var os = /* @__PURE__ */ new Set([
	"projects",
	"saved",
	"myideas",
	"myprompts",
	"events",
	"tracks",
	"artists"
]);
function ss(e) {
	return e === "detail" ? "catalog" : os.has(e) ? "account" : e;
}
function cs(e) {
	let t = ss(e?.active), n = /* @__PURE__ */ new Set(), r = !1, i = [];
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
// src/vue/navigation/route-state.js
var ls = /* @__PURE__ */ F(Object.freeze({
	route: "home",
	active: "home",
	revision: 0
})), us = /* @__PURE__ */ Ht(ls);
function ds(e) {
	let t = typeof e == "string" && e ? e : "home";
	if (t === ls.value.route) return ls.value;
	let n = Object.freeze({
		route: t,
		active: ss(t),
		revision: ls.value.revision + 1
	});
	return ls.value = n, n;
}
// core/navigation-core.js
(function(e) {
	let t = /* @__PURE__ */ new Set([
		"projects",
		"saved",
		"myideas",
		"myprompts",
		"events",
		"tracks",
		"artists"
	]), n = Object.freeze([
		"home",
		"catalog",
		"detail",
		"ideas",
		"studio",
		"account",
		"projects",
		"saved",
		"myideas",
		"myprompts",
		"events",
		"tracks",
		"artists",
		"player",
		"producer",
		"songs",
		"mixer",
		"sharedSong"
	]), r = (e) => typeof e == "string" && /^[a-zA-Z0-9_-]{1,128}$/.test(e) ? e : "", i = /* @__PURE__ */ new Set([
		"overview",
		"ideas",
		"prompts",
		"artists"
	]), a = (e) => {
		let t = Object.entries(e).filter(([, e]) => e);
		return t.length ? "?" + t.map(([e, t]) => encodeURIComponent(e) + "=" + encodeURIComponent(t)).join("&") : "";
	};
	function o(e) {
		let o = n.includes(e.nav) ? e.nav : "home";
		if (o === "detail") return "/catalog/" + encodeURIComponent(r(e.genre) || "unknown") + "/" + (i.has(e.tab) ? e.tab : "overview");
		if (o === "sharedSong") return "/shared" + a({ card: typeof e.card == "string" ? e.card.slice(0, 14e3) : "broken" });
		if (o === "account" && e.settings) return "/account/settings";
		if (o === "songs") return "/songs" + (e.form ? e.editId ? "/" + r(e.editId) + "/edit" : "/new" : r(e.songId) ? "/" + r(e.songId) : "") + a({ artists: e.manager ? "1" : "" });
		if (o === "producer") return "/producer" + (r(e.productionId) ? "/" + r(e.productionId) : "");
		if (t.has(o)) {
			let t = o === "tracks" ? e.trackId || e.selected : o === "projects" ? e.projectId || e.selected : o === "artists" ? e.dnaId || e.selected : "";
			return "/account/" + o + (r(t) ? "/" + r(t) : "") + a({ edit: e.edit === "new" ? "new" : r(e.edit) });
		}
		return "/" + o;
	}
	function s(e) {
		let a;
		try {
			a = new URL(e, "https://sunoboom.invalid");
		} catch {
			return { nav: "home" };
		}
		let o;
		try {
			o = a.pathname.split("/").filter(Boolean).map(decodeURIComponent);
		} catch {
			return { nav: "home" };
		}
		let s = a.searchParams.get("edit"), c = s === "new" ? "new" : r(s);
		return o[0] === "shared" ? {
			nav: "sharedSong",
			card: (a.searchParams.get("card") || "broken").slice(0, 14e3)
		} : o[0] === "catalog" && o.length > 1 ? {
			nav: "detail",
			genre: r(o[1]),
			tab: i.has(o[2]) ? o[2] : "overview"
		} : o[0] === "account" && o[1] === "settings" ? {
			nav: "account",
			settings: !0
		} : o[0] === "account" && t.has(o[1]) ? {
			nav: o[1],
			selected: r(o[2]),
			edit: c
		} : o[0] === "producer" ? {
			nav: "producer",
			productionId: r(o[1])
		} : o[0] === "songs" ? {
			nav: "songs",
			songId: o[1] === "new" ? "" : r(o[1]),
			form: o[1] === "new" || o[2] === "edit",
			editId: o[2] === "edit" ? r(o[1]) : "",
			manager: a.searchParams.get("artists") === "1"
		} : { nav: n.includes(o[0]) && o[0] !== "detail" && o[0] !== "sharedSong" ? o[0] : "home" };
	}
	function c(e, t) {
		let r = String(e || "").replace(/^#/, "");
		return r.startsWith("/") ? o({
			...s(r),
			...l(s(r))
		}) : r.startsWith("sb-song=") ? o({
			nav: "sharedSong",
			card: r.slice(8)
		}) : r.startsWith("genre-") ? o({
			nav: "detail",
			genre: r.slice(6),
			tab: "overview"
		}) : r.startsWith("view-") && n.includes(r.slice(5)) ? o({ nav: r.slice(5) }) : o(t);
	}
	function l(e) {
		return e.nav === "projects" ? { projectId: e.selected } : e.nav === "tracks" ? { trackId: e.selected } : e.nav === "artists" ? { dnaId: e.selected } : {};
	}
	e.SUNOBOOM_ROUTE_CODEC = Object.freeze({
		routes: n,
		routePath: o,
		parseRoute: s,
		initialPath: c
	});
})(globalThis);
// src/vue/shell/route-codec.js
var { routes: fs, routePath: ps, parseRoute: ms, initialPath: hs } = globalThis.SUNOBOOM_ROUTE_CODEC;
// src/vue/navigation/navigation-service.js
function gs({ shell: e, sharedUi: t, legacyApi: n, root: r = window }) {
	let i = () => {
		let t = ms(e.snapshot().route);
		return t.nav === "detail" ? {
			kind: "genre",
			id: t.genre,
			tab: t.tab
		} : t.nav === "producer" && t.productionId ? {
			kind: "production",
			id: t.productionId
		} : t.nav === "tracks" && t.selected ? {
			kind: "track",
			id: t.selected
		} : null;
	}, a = () => Object.freeze({
		path: e.snapshot().route,
		active: ss(us.value.route),
		canGoBack: e.canGo("back"),
		canGoForward: e.canGo("forward"),
		context: i()
	}), o = (t, r, i) => {
		let a = n.snapshot();
		return a.active !== t || !r(a) ? !1 : (e.recordCurrent(i), !0);
	}, s = Object.freeze({
		snapshot: () => us.value,
		routerSnapshot: a,
		sharedState: () => Object.freeze({
			route: t.route.route,
			active: t.route.active,
			menuIds: t.navigationItems.map((e) => e.id),
			dashboardStats: { ...t.dashboardStats },
			appearance: { ...t.appearance },
			academyCatalog: { ...t.academyCatalog },
			academyFocus: { ...t.academyFocus },
			academyTree: { ...t.academyTree },
			studioSummary: { ...t.studioSummary },
			mixerSummary: { ...t.mixerSummary },
			auditorSummary: { ...t.auditorSummary },
			arrangerSummary: { ...t.arrangerSummary },
			playerLabSummary: { ...t.playerLabSummary },
			playerAbSummary: { ...t.playerAbSummary },
			masterListSummary: { ...t.masterListSummary },
			passportListSummary: { ...t.passportListSummary },
			masterDetailSummary: { ...t.masterDetailSummary },
			passportDetailSummary: { ...t.passportDetailSummary },
			songCollectionSummary: { ...t.songCollectionSummary },
			songDetailSummary: { ...t.songDetailSummary },
			artistManagerSummary: { ...t.artistManagerSummary },
			artistDnaSummary: { ...t.artistDnaSummary },
			librarySummary: { ...t.librarySummary },
			ideaDraftSummary: { ...t.ideaDraftSummary },
			promptDraftSummary: { ...t.promptDraftSummary },
			poetrySourceSummary: { ...t.poetrySourceSummary },
			poetryAnalysisSummary: { ...t.poetryAnalysisSummary },
			poetryAmbiguitySummary: { ...t.poetryAmbiguitySummary },
			performanceTagsSummary: { ...t.performanceTagsSummary }
		}),
		back: () => e.back(),
		forward: () => e.forward(),
		recordGenre: (e, t, r = "push") => o("detail", (r) => r.detail?.id === e && r.detail?.tab === t && n.canRestoreGenre(e, t), r),
		recordProduction: (e, t = "push") => o("producer", (t) => t.production?.id === e && n.canRestoreProduction(e), t),
		recordTrack: (e, t = "push") => o("tracks", (t) => !t.trackEditing && t.track?.id === e && n.canRestoreTrack(e), t),
		recordTrackList: () => o("tracks", (e) => !e.trackEditing && !e.track?.id, "push")
	});
	return r.SUNOBOOM_VUE_ROUTE = s, () => {
		r.SUNOBOOM_VUE_ROUTE === s && delete r.SUNOBOOM_VUE_ROUTE;
	};
}
// src/vue/navigation/top-header-model.js
function _s(e) {
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
// src/vue/navigation/navigation-dispatch.js
var vs = Object.freeze([
	"myideas",
	"myprompts",
	"events"
]);
function ys(e, { legacyApi: t } = {}, n) {
	if (typeof e != "string" || !e || typeof t?.snapshot != "function" || !(n === "menu" ? t.snapshot()?.items?.some((t) => t?.id === e) : vs.includes(e))) return !1;
	let r = globalThis.window?.SUNOBOOM_SHELL;
	if (r?.active) return r.navigate(e), !0;
	let i = n === "menu" ? t.navigate : t.navigateWorkspace;
	return typeof i == "function" && (i.call(t, e), !0);
}
var bs = (e, t) => ys(e, t, "menu"), xs = (e, t) => ys(e, t, "shortcut"), Ss = typeof document < "u";
function Cs(e) {
	return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function ws(e) {
	return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && Cs(e.default);
}
var Q = Object.assign;
function Ts(e, t) {
	let n = {};
	for (let r in t) {
		let i = t[r];
		n[r] = Ds(i) ? i.map(e) : e(i);
	}
	return n;
}
var Es = () => {}, Ds = Array.isArray;
function Os(e, t) {
	let n = {};
	for (let r in e) n[r] = r in t ? t[r] : e[r];
	return n;
}
var ks = /#/g, As = /&/g, js = /\//g, Ms = /=/g, Ns = /\?/g, Ps = /\+/g, Fs = /%5B/g, Is = /%5D/g, Ls = /%5E/g, Rs = /%60/g, zs = /%7B/g, Bs = /%7C/g, Vs = /%7D/g, Hs = /%20/g;
function Us(e) {
	return e == null ? "" : encodeURI("" + e).replace(Bs, "|").replace(Fs, "[").replace(Is, "]");
}
function Ws(e) {
	return Us(e).replace(zs, "{").replace(Vs, "}").replace(Ls, "^");
}
function Gs(e) {
	return Us(e).replace(Ps, "%2B").replace(Hs, "+").replace(ks, "%23").replace(As, "%26").replace(Rs, "`").replace(zs, "{").replace(Vs, "}").replace(Ls, "^");
}
function Ks(e) {
	return Gs(e).replace(Ms, "%3D");
}
function qs(e) {
	return Us(e).replace(ks, "%23").replace(Ns, "%3F");
}
function Js(e) {
	return qs(e).replace(js, "%2F");
}
function Ys(e) {
	if (e == null) return null;
	try {
		return decodeURIComponent("" + e);
	} catch {}
	return "" + e;
}
var Xs = /\/$/, Zs = (e) => e.replace(Xs, "");
function Qs(e, t, n = "/") {
	let r, i = {}, a = "", o = "", s = t.indexOf("#"), c = t.indexOf("?");
	return c = s >= 0 && c > s ? -1 : c, c >= 0 && (r = t.slice(0, c), a = t.slice(c, s > 0 ? s : t.length), i = e(a.slice(1))), s >= 0 && (r ||= t.slice(0, s), o = t.slice(s, t.length)), r = oc(r ?? t, n), {
		fullPath: r + a + o,
		path: r,
		query: i,
		hash: Ys(o)
	};
}
function $s(e, t) {
	let n = t.query ? e(t.query) : "";
	return t.path + (n && "?") + n + (t.hash || "");
}
function ec(e, t) {
	return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function tc(e, t, n) {
	let r = t.matched.length - 1, i = n.matched.length - 1;
	return r > -1 && r === i && nc(t.matched[r], n.matched[i]) && rc(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function nc(e, t) {
	return (e.aliasOf || e) === (t.aliasOf || t);
}
function rc(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (var n in e) if (!ic(e[n], t[n])) return !1;
	return !0;
}
function ic(e, t) {
	return Ds(e) ? ac(e, t) : Ds(t) ? ac(t, e) : e?.valueOf() === t?.valueOf();
}
function ac(e, t) {
	return Ds(t) ? e.length === t.length && e.every((e, n) => e === t[n]) : e.length === 1 && e[0] === t;
}
function oc(e, t) {
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
var sc = {
	path: "/",
	name: void 0,
	params: {},
	query: {},
	hash: "",
	fullPath: "/",
	matched: [],
	meta: {},
	redirectedFrom: void 0
}, cc = /* @__PURE__ */ function(e) {
	return e.pop = "pop", e.push = "push", e;
}({}), lc = /* @__PURE__ */ function(e) {
	return e.back = "back", e.forward = "forward", e.unknown = "", e;
}({});
function uc(e) {
	if (!e) {
		if (Ss) {
			let t = document.querySelector("base");
			e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
		} else e = "/";
	}
	return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Zs(e);
}
var dc = /^[^#]+#/;
function fc(e, t) {
	return e.replace(dc, "#") + t;
}
function pc(e, t) {
	let n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
	return {
		behavior: t.behavior,
		left: r.left - n.left - (t.left || 0),
		top: r.top - n.top - (t.top || 0)
	};
}
var mc = () => ({
	left: window.scrollX,
	top: window.scrollY
});
function hc(e) {
	let t;
	if ("el" in e) {
		let n = e.el, r = typeof n == "string" && n.startsWith("#"), i = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
		if (!i) return;
		t = pc(i, e);
	} else t = e;
	"scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left == null ? window.scrollX : t.left, t.top == null ? window.scrollY : t.top);
}
function gc(e, t) {
	return (history.state ? history.state.position - t : -1) + e;
}
var _c = /* @__PURE__ */ new Map();
function vc(e, t) {
	_c.set(e, t);
}
function yc(e) {
	let t = _c.get(e);
	return _c.delete(e), t;
}
function bc(e) {
	return typeof e == "string" || e && typeof e == "object";
}
function xc(e) {
	return typeof e == "string" || typeof e == "symbol";
}
var Sc = /* @__PURE__ */ function(e) {
	return e[e.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", e[e.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", e[e.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", e[e.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", e[e.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", e;
}({}), Cc = Symbol("");
Sc.MATCHER_NOT_FOUND, Sc.NAVIGATION_GUARD_REDIRECT, Sc.NAVIGATION_ABORTED, Sc.NAVIGATION_CANCELLED, Sc.NAVIGATION_DUPLICATED;
function wc(e, t) {
	return Q(/* @__PURE__ */ Error(), {
		type: e,
		[Cc]: !0
	}, t);
}
function Tc(e, t) {
	return e instanceof Error && Cc in e && (t == null || !!(e.type & t));
}
function Ec(e) {
	let t = {};
	if (e === "" || e === "?") return t;
	let n = (e[0] === "?" ? e.slice(1) : e).split("&");
	for (let e = 0; e < n.length; ++e) {
		let r = n[e].replace(Ps, " "), i = r.indexOf("="), a = Ys(i < 0 ? r : r.slice(0, i)), o = i < 0 ? null : Ys(r.slice(i + 1));
		if (a in t) {
			let e = t[a];
			Ds(e) || (e = t[a] = [e]), e.push(o);
		} else t[a] = o;
	}
	return t;
}
function Dc(e) {
	let t = "";
	for (let n in e) {
		let r = e[n];
		n = Ks(n), r == null ? r !== void 0 && (t += (t.length ? "&" : "") + n) : (Ds(r) ? r.map((e) => e && Gs(e)) : [r && Gs(r)]).forEach((e) => {
			e !== void 0 && (t += (t.length ? "&" : "") + n, e != null && (t += "=" + e));
		});
	}
	return t;
}
function Oc(e) {
	let t = {};
	for (let n in e) {
		let r = e[n];
		r !== void 0 && (t[n] = Ds(r) ? r.map((e) => e == null ? null : "" + e) : r == null ? r : "" + r);
	}
	return t;
}
var kc = Symbol(""), Ac = Symbol(""), jc = Symbol(""), Mc = Symbol(""), Nc = Symbol("");
function Pc() {
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
function Fc(e, t, n, r, i, a = (e) => e()) {
	let o = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
	return () => new Promise((s, c) => {
		let l = (e) => {
			e === !1 ? c(wc(Sc.NAVIGATION_ABORTED, {
				from: n,
				to: t
			})) : e instanceof Error ? c(e) : bc(e) ? c(wc(Sc.NAVIGATION_GUARD_REDIRECT, {
				from: t,
				to: e
			})) : (o && r.enterCallbacks[i] === o && typeof e == "function" && o.push(e), s());
		}, u = a(() => e.call(r && r.instances[i], t, n, l)), d = Promise.resolve(u);
		e.length < 3 && (d = d.then(l)), d.catch((e) => c(e));
	});
}
function Ic(e, t, n, r, i = (e) => e()) {
	let a = [];
	for (let o of e) for (let e in o.components) {
		let s = o.components[e];
		if (t === "beforeRouteEnter" || o.instances[e]) {
			if (Cs(s)) {
				let c = (s.__vccOpts || s)[t];
				c && a.push(Fc(c, n, r, o, e, i));
			} else {
				let c = s();
				a.push(() => c.then((a) => {
					if (!a) throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);
					let s = ws(a) ? a.default : a;
					o.mods[e] = a, o.components[e] = s;
					let c = (s.__vccOpts || s)[t];
					return c && Fc(c, n, r, o, e, i)();
				}));
			}
		}
	}
	return a;
}
function Lc(e, t) {
	let n = [], r = [], i = [], a = Math.max(t.matched.length, e.matched.length);
	for (let o = 0; o < a; o++) {
		let a = t.matched[o];
		a && (e.matched.find((e) => nc(e, a)) ? r.push(a) : n.push(a));
		let s = e.matched[o];
		s && (t.matched.find((e) => nc(e, s)) || i.push(s));
	}
	return [
		n,
		r,
		i
	];
}
// node_modules/vue-router/dist/vue-router.mjs
var Rc = () => location.protocol + "//" + location.host;
function zc(e, t) {
	let { pathname: n, search: r, hash: i } = t, a = e.indexOf("#");
	if (a > -1) {
		let t = i.includes(e.slice(a)) ? e.slice(a).length : 1, n = i.slice(t);
		return n[0] !== "/" && (n = "/" + n), ec(n, "");
	}
	return ec(n, e) + r + i;
}
function Bc(e, t, n, r) {
	let i = [], a = [], o = null, s = ({ state: a }) => {
		let s = zc(e, location), c = n.value, l = t.value, u = 0;
		if (a) {
			if (n.value = s, t.value = a, o && o === c) {
				o = null;
				return;
			}
			u = l ? a.position - l.position : 0;
		} else r(s);
		i.forEach((e) => {
			e(n.value, c, {
				delta: u,
				type: cc.pop,
				direction: u ? u > 0 ? lc.forward : lc.back : lc.unknown
			});
		});
	};
	function c() {
		o = n.value;
	}
	function l(e) {
		i.push(e);
		let t = () => {
			let t = i.indexOf(e);
			t > -1 && i.splice(t, 1);
		};
		return a.push(t), t;
	}
	function u() {
		if (document.visibilityState === "hidden") {
			let { history: e } = window;
			if (!e.state) return;
			e.replaceState(Q({}, e.state, { scroll: mc() }), "");
		}
	}
	function d() {
		for (let e of a) e();
		a = [], window.removeEventListener("popstate", s), window.removeEventListener("pagehide", u), document.removeEventListener("visibilitychange", u);
	}
	return window.addEventListener("popstate", s), window.addEventListener("pagehide", u), document.addEventListener("visibilitychange", u), {
		pauseListeners: c,
		listen: l,
		destroy: d
	};
}
function Vc(e, t, n, r = !1, i = !1) {
	return {
		back: e,
		current: t,
		forward: n,
		replaced: r,
		position: window.history.length,
		scroll: i ? mc() : null
	};
}
function Hc(e) {
	let { history: t, location: n } = window, r = { value: zc(e, n) }, i = { value: t.state };
	i.value || a(r.value, {
		back: null,
		current: r.value,
		forward: null,
		position: t.length - 1,
		replaced: !0,
		scroll: null
	}, !0);
	function a(r, a, o) {
		let s = e.indexOf("#"), c = s > -1 ? (n.host && document.querySelector("base") ? e : e.slice(s)) + r : Rc() + e + r;
		try {
			t[o ? "replaceState" : "pushState"](a, "", c), i.value = a;
		} catch (e) {
			console.error(e), n[o ? "replace" : "assign"](c);
		}
	}
	function o(e, n) {
		a(e, Q({}, t.state, Vc(i.value.back, e, i.value.forward, !0), n, { position: i.value.position }), !0), r.value = e;
	}
	function s(e, n) {
		let o = Q({}, i.value, t.state, {
			forward: e,
			scroll: mc()
		});
		a(o.current, o, !0), a(e, Q({}, Vc(r.value, e, null), { position: o.position + 1 }, n), !1), r.value = e;
	}
	return {
		location: r,
		state: i,
		push: s,
		replace: o
	};
}
function Uc(e) {
	e = uc(e);
	let t = Hc(e), n = Bc(e, t.state, t.location, t.replace);
	function r(e, t = !0) {
		t || n.pauseListeners(), history.go(e);
	}
	let i = Q({
		location: "",
		base: e,
		go: r,
		createHref: fc.bind(null, e)
	}, t, n);
	return Object.defineProperty(i, "location", {
		enumerable: !0,
		get: () => t.location.value
	}), Object.defineProperty(i, "state", {
		enumerable: !0,
		get: () => t.state.value
	}), i;
}
function Wc(e) {
	return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), Uc(e);
}
var Gc = /* @__PURE__ */ function(e) {
	return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.Group = 2] = "Group", e;
}({}), Kc = /* @__PURE__ */ function(e) {
	return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.ParamRegExp = 2] = "ParamRegExp", e[e.ParamRegExpEnd = 3] = "ParamRegExpEnd", e[e.EscapeNext = 4] = "EscapeNext", e;
}(Kc || {}), qc = {
	type: Gc.Static,
	value: ""
}, Jc = /[a-zA-Z0-9_]/;
function Yc(e) {
	if (!e) return [[]];
	if (e === "/") return [[qc]];
	if (!e.startsWith("/")) throw Error(`Invalid path "${e}"`);
	function t(e) {
		throw Error(`ERR (${n})/"${l}": ${e}`);
	}
	let n = Kc.Static, r = n, i = [], a;
	function o() {
		a && i.push(a), a = [];
	}
	let s = 0, c, l = "", u = "";
	function d() {
		l &&= (n === Kc.Static ? a.push({
			type: Gc.Static,
			value: l
		}) : n === Kc.Param || n === Kc.ParamRegExp || n === Kc.ParamRegExpEnd ? (a.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`), a.push({
			type: Gc.Param,
			value: l,
			regexp: u,
			repeatable: c === "*" || c === "+",
			optional: c === "*" || c === "?"
		})) : t("Invalid state to consume buffer"), "");
	}
	function f() {
		l += c;
	}
	for (; s < e.length;) if (c = e[s++], c === "\\" && n !== Kc.ParamRegExp) r = n, n = Kc.EscapeNext;
	else switch (n) {
		case Kc.Static:
			c === "/" ? (l && d(), o()) : c === ":" ? (d(), n = Kc.Param) : f();
			break;
		case Kc.EscapeNext:
			f(), n = r;
			break;
		case Kc.Param:
			c === "(" ? n = Kc.ParamRegExp : Jc.test(c) ? f() : (d(), n = Kc.Static, c !== "*" && c !== "?" && c !== "+" && s--);
			break;
		case Kc.ParamRegExp:
			c === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + c : n = Kc.ParamRegExpEnd : u += c;
			break;
		case Kc.ParamRegExpEnd:
			d(), n = Kc.Static, c !== "*" && c !== "?" && c !== "+" && s--, u = "";
			break;
		default: t("Unknown state");
	}
	return n === Kc.ParamRegExp && t(`Unfinished custom RegExp for param "${l}"`), d(), o(), i;
}
var Xc = "[^/]+?", Zc = {
	sensitive: !1,
	strict: !1,
	start: !0,
	end: !0
}, Qc = /* @__PURE__ */ function(e) {
	return e[e._multiplier = 10] = "_multiplier", e[e.Root = 90] = "Root", e[e.Segment = 40] = "Segment", e[e.SubSegment = 30] = "SubSegment", e[e.Static = 40] = "Static", e[e.Dynamic = 20] = "Dynamic", e[e.BonusCustomRegExp = 10] = "BonusCustomRegExp", e[e.BonusWildcard = -50] = "BonusWildcard", e[e.BonusRepeatable = -20] = "BonusRepeatable", e[e.BonusOptional = -8] = "BonusOptional", e[e.BonusStrict = .7000000000000001] = "BonusStrict", e[e.BonusCaseSensitive = .25] = "BonusCaseSensitive", e;
}(Qc || {}), $c = /[.+*?^${}()[\]/\\|]/g;
function el(e, t) {
	let n = Q({}, Zc, t), r = [], i = n.start ? "^" : "", a = [], o = e.some((e) => e.some((e) => e.type === Gc.Param && /\\[1-9k]/.test(e.regexp || "")));
	for (let t of e) {
		let e = t.length ? [] : [Qc.Root];
		n.strict && !t.length && (i += "/");
		for (let r = 0; r < t.length; r++) {
			let s = t[r], c = Qc.Segment + (n.sensitive ? Qc.BonusCaseSensitive : 0);
			if (s.type === Gc.Static) r || (i += "/"), i += s.value.replace($c, "\\$&"), c += Qc.Static;
			else if (s.type === Gc.Param) {
				let { value: e, repeatable: n, optional: l, regexp: u } = s;
				a.push({
					name: e,
					repeatable: n,
					optional: l
				});
				let d = u || Xc;
				if (d !== Xc) {
					c += Qc.BonusCustomRegExp;
					try {
						`${d}`;
					} catch (t) {
						throw Error(`Invalid custom RegExp for param "${e}" (${d}): ` + t.message);
					}
				}
				let f = n ? `((?:${d})(?:/(?:${d}))*)` : `(${d})`, p = t[r + 1], m = t[r + 2];
				o || u || n || !m || m.type !== Gc.Param || m.regexp || p.type !== Gc.Static || (f = `([^/](?:(?!${p.value.replace($c, "\\$&")})[^/])*)`), r || (f = l && t.length < 2 ? `(?:/${f})` : "/" + f), l && (f += "?"), i += f, c += Qc.Dynamic, l && (c += Qc.BonusOptional), n && (c += Qc.BonusRepeatable), d === ".*" && (c += Qc.BonusWildcard);
			}
			e.push(c);
		}
		r.push(e);
	}
	if (n.strict && n.end) {
		let e = r.length - 1;
		r[e][r[e].length - 1] += Qc.BonusStrict;
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
			for (let e of i) if (e.type === Gc.Static) n += e.value;
			else if (e.type === Gc.Param) {
				let { value: a, repeatable: o, optional: s } = e, c = a in t ? t[a] : "";
				if (Ds(c) && !o) throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);
				let l = Ds(c) ? c.join("/") : c;
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
function tl(e, t) {
	let n = 0;
	for (; n < e.length && n < t.length;) {
		let r = t[n] - e[n];
		if (r) return r;
		n++;
	}
	return e.length < t.length ? e.length === 1 && e[0] === Qc.Static + Qc.Segment ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === Qc.Static + Qc.Segment ? 1 : -1 : 0;
}
function nl(e, t) {
	let n = 0, r = e.score, i = t.score;
	for (; n < r.length && n < i.length;) {
		let e = tl(r[n], i[n]);
		if (e) return e;
		n++;
	}
	if (Math.abs(i.length - r.length) === 1) {
		if (rl(r)) return 1;
		if (rl(i)) return -1;
	}
	return i.length - r.length;
}
function rl(e) {
	let t = e[e.length - 1];
	return e.length > 0 && t[t.length - 1] < 0;
}
var il = {
	strict: !1,
	end: !0,
	sensitive: !1
};
function al(e, t, n) {
	let r = Q(el(Yc(e.path), n), {
		record: e,
		parent: t,
		children: [],
		alias: []
	});
	return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function ol(e, t) {
	let n = [], r = /* @__PURE__ */ new Map();
	t = Os(il, t);
	function i(e) {
		return r.get(e);
	}
	function a(e, n, r) {
		let i = !r, s = cl(e);
		s.aliasOf = r && r.record;
		let l = Os(t, e), u = [s];
		if ("alias" in e) {
			let t = typeof e.alias == "string" ? [e.alias] : e.alias;
			for (let e of t) u.push(cl(Q({}, s, {
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
			if (d = al(t, n, l), r ? r.alias.push(d) : (f ||= d, f !== d && f.alias.push(d), i && e.name && !ul(d) && o(e.name)), ml(d) && c(d), s.children) {
				let e = s.children;
				for (let t = 0; t < e.length; t++) a(e[t], d, r && r.children[t]);
			}
			r ||= d;
		}
		return f ? () => {
			o(f);
		} : Es;
	}
	function o(e) {
		if (xc(e)) {
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
		let t = fl(e, n);
		n.splice(t, 0, e), e.record.name && !ul(e) && r.set(e.record.name, e);
	}
	function l(e, t) {
		let i, a = {}, o, s;
		if ("name" in e && e.name) {
			if (i = r.get(e.name), !i) throw wc(Sc.MATCHER_NOT_FOUND, { location: e });
			s = i.record.name, a = Q(sl(t.params, i.keys.filter((e) => !e.optional).concat(i.parent ? i.parent.keys.filter((e) => e.optional) : []).map((e) => e.name)), e.params && sl(e.params, i.keys.map((e) => e.name))), o = i.stringify(a);
		} else if (e.path != null) o = e.path, i = n.find((e) => e.re.test(o)), i && (a = i.parse(o), s = i.record.name);
		else {
			if (i = t.name ? r.get(t.name) : n.find((e) => e.re.test(t.path)), !i) throw wc(Sc.MATCHER_NOT_FOUND, {
				location: e,
				currentLocation: t
			});
			s = i.record.name, a = Q({}, t.params, e.params), o = i.stringify(a);
		}
		let c = [], l = i;
		for (; l;) c.unshift(l.record), l = l.parent;
		return {
			name: s,
			path: o,
			params: a,
			matched: c,
			meta: dl(c)
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
function sl(e, t) {
	let n = {};
	for (let r of t) r in e && (n[r] = e[r]);
	return n;
}
function cl(e) {
	let t = {
		path: e.path,
		redirect: e.redirect,
		name: e.name,
		meta: e.meta || {},
		aliasOf: e.aliasOf,
		beforeEnter: e.beforeEnter,
		props: ll(e),
		children: e.children || [],
		instances: {},
		leaveGuards: /* @__PURE__ */ new Set(),
		updateGuards: /* @__PURE__ */ new Set(),
		enterCallbacks: {},
		components: "components" in e ? e.components || null : e.component && { default: e.component }
	};
	return Object.defineProperty(t, "mods", { value: {} }), t;
}
function ll(e) {
	let t = {}, n = e.props || !1;
	if ("component" in e) t.default = n;
	else for (let r in e.components) t[r] = typeof n == "object" ? n[r] : n;
	return t;
}
function ul(e) {
	for (; e;) {
		if (e.record.aliasOf) return !0;
		e = e.parent;
	}
	return !1;
}
function dl(e) {
	return e.reduce((e, t) => Q(e, t.meta), {});
}
function fl(e, t) {
	let n = 0, r = t.length;
	for (; n !== r;) {
		let i = n + r >> 1;
		nl(e, t[i]) < 0 ? r = i : n = i + 1;
	}
	let i = pl(e);
	return i && (r = t.lastIndexOf(i, r - 1)), r;
}
function pl(e) {
	let t = e;
	for (; t = t.parent;) if (ml(t) && nl(e, t) === 0) return t;
}
function ml({ record: e }) {
	return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function hl(e) {
	let t = Hn(jc), n = Hn(Mc), r = J(() => {
		let n = I(e.to);
		return t.resolve(n);
	}), i = J(() => {
		let { matched: e } = r.value, { length: t } = e, i = e[t - 1], a = n.matched;
		if (!i || !a.length) return -1;
		let o = a.findIndex(nc.bind(null, i));
		if (o > -1) return o;
		let s = bl(e[t - 2]);
		return t > 1 && bl(i) === s && a[a.length - 1].path !== s ? a.findIndex(nc.bind(null, e[t - 2])) : o;
	}), a = J(() => i.value > -1 && yl(n.params, r.value.params)), o = J(() => i.value > -1 && i.value === n.matched.length - 1 && rc(n.params, r.value.params));
	function s(n = {}) {
		if (vl(n)) {
			let n = t[I(e.replace) ? "replace" : "push"](I(e.to)).catch(Es);
			return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => n), n;
		}
		return Promise.resolve();
	}
	return {
		route: r,
		href: J(() => r.value.href),
		isActive: a,
		isExactActive: o,
		navigate: s
	};
}
function gl(e) {
	return e.length === 1 ? e[0] : e;
}
var _l = /* @__PURE__ */ mr({
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
	useLink: hl,
	setup(e, { slots: t }) {
		let n = /* @__PURE__ */ M(hl(e)), { options: r } = Hn(jc), i = J(() => ({
			[xl(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
			[xl(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
		}));
		return () => {
			let r = t.default && gl(t.default(n));
			return e.custom ? r : Ja("a", {
				"aria-current": n.isExactActive ? e.ariaCurrentValue : null,
				href: n.href,
				onClick: n.navigate,
				class: i.value
			}, r);
		};
	}
});
function vl(e) {
	if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && (e.button === void 0 || e.button === 0)) {
		if (e.currentTarget && e.currentTarget.getAttribute) {
			let t = e.currentTarget.getAttribute("target");
			if (/\b_blank\b/i.test(t)) return;
		}
		return e.preventDefault && e.preventDefault(), !0;
	}
}
function yl(e, t) {
	for (let n in t) {
		let r = t[n], i = e[n];
		if (typeof r == "string") {
			if (r !== i) return !1;
		} else if (!Ds(i) || i.length !== r.length || r.some((e, t) => e.valueOf() !== i[t].valueOf())) return !1;
	}
	return !0;
}
function bl(e) {
	return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
var xl = (e, t, n) => e ?? t ?? n, Sl = /* @__PURE__ */ mr({
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
		let r = Hn(Nc), i = J(() => e.route || r.value), a = Hn(Ac, 0), o = J(() => {
			let e = I(a), { matched: t } = i.value, n;
			for (; (n = t[e]) && !n.components;) e++;
			return e;
		}), s = J(() => i.value.matched[o.value]);
		Vn(Ac, J(() => o.value + 1)), Vn(kc, s), Vn(Nc, i);
		let c = /* @__PURE__ */ P();
		return R(() => [
			c.value,
			s.value,
			e.name
		], ([e, t, n], [r, i, a]) => {
			t && (t.instances[n] = e, i && i !== t && e && e === r && (t.leaveGuards.size || (t.leaveGuards = i.leaveGuards), t.updateGuards.size || (t.updateGuards = i.updateGuards))), !e || !t || i && nc(t, i) && r || (t.enterCallbacks[n] || []).forEach((t) => t(e));
		}, { flush: "post" }), () => {
			let r = i.value, a = e.name, o = s.value, l = o && o.components[a];
			if (!l) return Cl(n.default, {
				Component: l,
				route: r
			});
			let u = o.props[a], d = Ja(l, Q({}, u ? u === !0 ? r.params : typeof u == "function" ? u(r) : u : null, t, {
				onVnodeUnmounted: (e) => {
					e.component.isUnmounted && (o.instances[a] = null);
				},
				ref: c
			}));
			return Cl(n.default, {
				Component: d,
				route: r
			}) || d;
		};
	}
});
function Cl(e, t) {
	if (!e) return null;
	let n = e(t);
	return n.length === 1 ? n[0] : n;
}
var wl = Sl;
function Tl(e) {
	let t = ol(e.routes, e), n = e.parseQuery || Ec, r = e.stringifyQuery || Dc, i = e.history, a = Pc(), o = Pc(), s = Pc(), c = /* @__PURE__ */ F(sc), l = sc;
	Ss && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
	let u = Ts.bind(null, (e) => "" + e), d = Ts.bind(null, Js), f = Ts.bind(null, Ys);
	function p(e, n) {
		let r, i;
		return xc(e) ? (r = t.getRecordMatcher(e), i = n) : i = e, t.addRoute(i, r);
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
		if (a = Q({}, a || c.value), typeof e == "string") {
			let r = Qs(n, e, a.path), o = t.resolve({ path: r.path }, a), s = i.createHref(r.fullPath);
			return Q(r, o, {
				params: f(o.params),
				hash: Ys(r.hash),
				redirectedFrom: void 0,
				href: s
			});
		}
		let o;
		if (e.path != null) o = Q({}, e, { path: Qs(n, e.path, a.path).path });
		else {
			let t = Q({}, e.params);
			for (let e in t) t[e] ?? delete t[e];
			o = Q({}, e, { params: d(t) }), a.params = d(a.params);
		}
		let s = t.resolve(o, a), l = e.hash || "";
		s.params = u(f(s.params));
		let p = $s(r, Q({}, e, {
			hash: Ws(l),
			path: s.path
		})), m = i.createHref(p);
		return Q({
			fullPath: p,
			hash: l,
			query: r === Dc ? Oc(e.query) : e.query || {}
		}, s, {
			redirectedFrom: void 0,
			href: m
		});
	}
	function v(e) {
		return typeof e == "string" ? Qs(n, e, c.value.path) : Q({}, e);
	}
	function y(e, t) {
		if (l !== e) return wc(Sc.NAVIGATION_CANCELLED, {
			from: t,
			to: e
		});
	}
	function b(e) {
		return C(e);
	}
	function x(e) {
		return b(Q(v(e), { replace: !0 }));
	}
	function S(e, t) {
		let n = e.matched[e.matched.length - 1];
		if (n && n.redirect) {
			let { redirect: r } = n, i = typeof r == "function" ? r(e, t) : r;
			return typeof i == "string" && (i = i.includes("?") || i.includes("#") ? i = v(i) : { path: i }, i.params = {}), Q({
				query: e.query,
				hash: e.hash,
				params: i.path == null ? e.params : {}
			}, i);
		}
	}
	function C(e, t) {
		let n = l = _(e), i = c.value, a = e.state, o = e.force, s = e.replace === !0, u = S(n, i);
		if (u) return C(Q(v(u), {
			state: typeof u == "object" ? Q({}, a, u.state) : a,
			force: o,
			replace: s
		}), t || n);
		let d = n;
		d.redirectedFrom = t;
		let f;
		return !o && tc(r, i, n) && (f = wc(Sc.NAVIGATION_DUPLICATED, {
			to: d,
			from: i
		}), le(i, i, !0, !1)), (f ? Promise.resolve(f) : te(d, i)).catch((e) => Tc(e) ? Tc(e, Sc.NAVIGATION_GUARD_REDIRECT) ? e : ce(e) : oe(e, d, i)).then((e) => {
			if (e) {
				if (Tc(e, Sc.NAVIGATION_GUARD_REDIRECT)) return C(Q({ replace: s }, v(e.to), {
					state: typeof e.to == "object" ? Q({}, a, e.to.state) : a,
					force: o
				}), t || d);
			} else e = T(d, i, !0, s, a);
			return ne(d, i, e), e;
		});
	}
	function w(e, t) {
		let n = y(e, t);
		return n ? Promise.reject(n) : Promise.resolve();
	}
	function ee(e) {
		let t = de.values().next().value;
		return t && typeof t.runWithContext == "function" ? t.runWithContext(e) : e();
	}
	function te(e, t) {
		let n, [r, i, s] = Lc(e, t);
		n = Ic(r.reverse(), "beforeRouteLeave", e, t);
		for (let i of r) i.leaveGuards.forEach((r) => {
			n.push(Fc(r, e, t));
		});
		let c = w.bind(null, e, t);
		return n.push(c), pe(n).then(() => {
			n = [];
			for (let r of a.list()) n.push(Fc(r, e, t));
			return n.push(c), pe(n);
		}).then(() => {
			n = Ic(i, "beforeRouteUpdate", e, t);
			for (let r of i) r.updateGuards.forEach((r) => {
				n.push(Fc(r, e, t));
			});
			return n.push(c), pe(n);
		}).then(() => {
			n = [];
			for (let r of s) if (r.beforeEnter) {
				if (Ds(r.beforeEnter)) for (let i of r.beforeEnter) n.push(Fc(i, e, t));
				else n.push(Fc(r.beforeEnter, e, t));
			}
			return n.push(c), pe(n);
		}).then(() => (e.matched.forEach((e) => e.enterCallbacks = {}), n = Ic(s, "beforeRouteEnter", e, t, ee), n.push(c), pe(n))).then(() => {
			n = [];
			for (let r of o.list()) n.push(Fc(r, e, t));
			return n.push(c), pe(n);
		}).catch((e) => Tc(e, Sc.NAVIGATION_CANCELLED) ? e : Promise.reject(e));
	}
	function ne(e, t, n) {
		s.list().forEach((r) => ee(() => r(e, t, n)));
	}
	function T(e, t, n, r, a) {
		let o = y(e, t);
		if (o) return o;
		let s = t === sc, l = Ss ? history.state : {};
		n && (r || s ? i.replace(e.fullPath, Q({ scroll: s && l && l.scroll }, a)) : i.push(e.fullPath, a)), c.value = e, le(e, t, n, s), ce();
	}
	let re;
	function E() {
		re ||= i.listen((e, t, n) => {
			if (!fe.listening) return;
			let r = _(e), a = S(r, fe.currentRoute.value);
			if (a) {
				C(Q(a, {
					replace: !0,
					force: !0
				}), r).catch(Es);
				return;
			}
			l = r;
			let o = c.value;
			Ss && vc(gc(o.fullPath, n.delta), mc()), te(r, o).catch((e) => Tc(e, Sc.NAVIGATION_ABORTED | Sc.NAVIGATION_CANCELLED) ? e : Tc(e, Sc.NAVIGATION_GUARD_REDIRECT) ? (C(Q(v(e.to), { force: !0 }), r).then((e) => {
				Tc(e, Sc.NAVIGATION_ABORTED | Sc.NAVIGATION_DUPLICATED) && !n.delta && n.type === cc.pop && i.go(-1, !1);
			}).catch(Es), Promise.reject()) : (n.delta && i.go(-n.delta, !1), oe(e, r, o))).then((e) => {
				e ||= T(r, o, !1), e && (n.delta && !Tc(e, Sc.NAVIGATION_CANCELLED) ? i.go(-n.delta, !1) : n.type === cc.pop && Tc(e, Sc.NAVIGATION_ABORTED | Sc.NAVIGATION_DUPLICATED) && i.go(-1, !1)), ne(r, o, e);
			}).catch(Es);
		});
	}
	let D = Pc(), ie = Pc(), ae;
	function oe(e, t, n) {
		ce(e);
		let r = ie.list();
		return r.length ? r.forEach((r) => r(e, t, n)) : console.error(e), Promise.reject(e);
	}
	function se() {
		return ae && c.value !== sc ? Promise.resolve() : new Promise((e, t) => {
			D.add([e, t]);
		});
	}
	function ce(e) {
		return ae || (ae = !e, E(), D.list().forEach(([t, n]) => e ? n(e) : t()), D.reset()), e;
	}
	function le(t, n, r, i) {
		let { scrollBehavior: a } = e;
		if (!Ss || !a) return Promise.resolve();
		let o = !r && yc(gc(t.fullPath, 0)) || (i || !r) && history.state && history.state.scroll || null;
		return Tn().then(() => a(t, n, o)).then((e) => e && hc(e)).catch((e) => oe(e, t, n));
	}
	let ue = (e) => i.go(e), O, de = /* @__PURE__ */ new Set(), fe = {
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
		go: ue,
		back: () => ue(-1),
		forward: () => ue(1),
		beforeEach: a.add,
		beforeResolve: o.add,
		afterEach: s.add,
		onError: ie.add,
		isReady: se,
		install(e) {
			e.component("RouterLink", _l), e.component("RouterView", wl), e.config.globalProperties.$router = fe, Object.defineProperty(e.config.globalProperties, "$route", {
				enumerable: !0,
				get: () => I(c)
			}), Ss && !O && c.value === sc && (O = !0, b(i.location).catch((e) => {}));
			let t = {};
			for (let e in sc) Object.defineProperty(t, e, {
				get: () => c.value[e],
				enumerable: !0
			});
			e.provide(jc, fe), e.provide(Mc, /* @__PURE__ */ Vt(t)), e.provide(Nc, c);
			let n = e.unmount;
			de.add(e), e.unmount = function() {
				de.delete(e), de.size < 1 && (l = sc, re && re(), re = null, c.value = sc, O = !1, ae = !1), n();
			};
		}
	};
	function pe(e) {
		return e.reduce((e, t) => e.then(() => ee(t)), Promise.resolve());
	}
	return fe;
}
function El(e) {
	return Hn(Mc);
}
// node_modules/pinia/dist/pinia.mjs
var Dl = typeof window < "u", Ol, kl = (e) => Ol = e, Al = Symbol();
function jl(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Ml;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Ml ||= {});
var Nl = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function Pl(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function Fl(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		Bl(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function Il(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function Ll(e) {
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
var Rl = typeof navigator == "object" ? navigator : { userAgent: "" }, zl = /Macintosh/.test(Rl.userAgent) && /AppleWebKit/.test(Rl.userAgent) && !/Safari/.test(Rl.userAgent), Bl = Dl ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !zl ? Vl : "msSaveOrOpenBlob" in Rl ? Hl : Ul : () => {};
function Vl(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? Ll(r) : Il(r.href) ? Fl(e, t, n) : (r.target = "_blank", Ll(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		Ll(r);
	}, 0));
}
function Hl(e, t = "download", n) {
	if (typeof e == "string") {
		if (Il(e)) Fl(e, t, n);
		else {
			let t = document.createElement("a");
			t.href = e, t.target = "_blank", setTimeout(function() {
				Ll(t);
			});
		}
	} else navigator.msSaveOrOpenBlob(Pl(e, n), t);
}
function Ul(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return Fl(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(Nl.HTMLElement)) || "safari" in Nl, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || zl) && typeof FileReader < "u") {
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
var { assign: Wl } = Object;
function Gl() {
	let e = Oe(!0), t = e.run(() => /* @__PURE__ */ P({})), n = [], r = [], i = Jt({
		install(e) {
			kl(i), i._a = e, e.provide(Al, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
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
var Kl = () => {};
function ql(e, t, n, r = Kl) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && ke() && Ae(i), i;
}
function Jl(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var Yl = (e) => e(), Xl = Symbol(), Zl = Symbol();
function Ql(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!t.hasOwnProperty(n)) continue;
		let r = t[n], i = e[n];
		e[n] = jl(i) && jl(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ Zt(r) && !/* @__PURE__ */ Wt(r) ? Ql(i, r) : r;
	}
	return e;
}
var $l = Symbol();
function eu(e) {
	return !jl(e) || !Object.prototype.hasOwnProperty.call(e, $l);
}
var { assign: tu } = Object;
function nu(e) {
	return !!(/* @__PURE__ */ Zt(e) && e.effect);
}
function ru(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || 
		/* istanbul ignore if */
		(n.state.value[e] = i ? i() : {}), tu(/* @__PURE__ */ nn(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = Jt(J(() => {
			kl(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return c = iu(e, l, t, n, r, !0), c;
}
function iu(e, t, n = {}, r, i, a) {
	let o, s = tu({ actions: {} }, n), c = { deep: !0 }, l, u, d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p, m = r.state.value[e];
	!a && !m && 
	/* istanbul ignore if */
	(r.state.value[e] = {});
	let h;
	function g(t) {
		let n;
		l = u = !1, typeof t == "function" ? (t(r.state.value[e]), n = {
			type: Ml.patchFunction,
			storeId: e,
			events: p
		}) : (Ql(r.state.value[e], t), n = {
			type: Ml.patchObject,
			payload: t,
			storeId: e,
			events: p
		});
		let i = h = Symbol();
		Tn().then(() => {
			h === i && (l = !0);
		}), u = !0, Jl(d, n, r.state.value[e]);
	}
	let _ = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			tu(e, t);
		});
	} : Kl;
	function v() {
		o.stop(), d.clear(), f.clear(), r._s.delete(e);
	}
	let y = (t, n = "") => {
		if (Xl in t) return t[Zl] = n, t;
		let i = function() {
			kl(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			Jl(f, {
				args: n,
				name: i[Zl],
				store: b,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : b, n);
			} catch (e) {
				throw Jl(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (Jl(a, e), e)).catch((e) => (Jl(o, e), Promise.reject(e))) : (Jl(a, l), l);
		};
		return i[Xl] = !0, i[Zl] = n, i;
	}, b = /* @__PURE__ */ M({
		_p: r,
		$id: e,
		$onAction: ql.bind(null, f),
		$patch: g,
		$reset: _,
		$subscribe(t, n = {}) {
			let i = ql(d, t, n.detached, () => a()), a = o.run(() => R(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? u : l) && t({
					storeId: e,
					type: Ml.direct,
					events: p
				}, r);
			}, tu({}, c, n)));
			return i;
		},
		$dispose: v
	});
	r._s.set(e, b);
	let x = (r._a && r._a.runWithContext || Yl)(() => r._e.run(() => (o = Oe()).run(() => t({ action: y }))));
	for (let t in x) {
		let n = x[t];
		/* @__PURE__ */ Zt(n) && !nu(n) || /* @__PURE__ */ Wt(n) ? a || (m && eu(n) && (/* @__PURE__ */ Zt(n) ? n.value = m[t] : Ql(n, m[t])), r.state.value[e][t] = n) : typeof n == "function" && (x[t] = y(n, t), s.actions[t] = n);
	}
	return tu(b, x), tu(/* @__PURE__ */ N(b), x), Object.defineProperty(b, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			g((t) => {
				tu(t, e);
			});
		}
	}), r._p.forEach((e) => {
		tu(b, o.run(() => e({
			store: b,
			app: r._a,
			pinia: r,
			options: s
		})));
	}), m && a && n.hydrate && n.hydrate(b.$state, m), l = !0, u = !0, b;
}
function au(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function a(n, a) {
		let o = Un();
		return n ||= o ? Hn(Al, null) : null, n && kl(n), n = Ol, n._s.has(e) || (i ? iu(e, t, r, n) : ru(e, r, n)), n._s.get(e);
	}
	return a.$id = e, a;
}
// src/vue/state/appearance-model.js
function ou(e) {
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
var su = /* @__PURE__ */ new Set([
	"all",
	"",
	"name",
	"family",
	"artist",
	"description"
]), cu = /* @__PURE__ */ new Set([
	"overview",
	"ideas",
	"prompts",
	"artists"
]), lu = /^[a-z0-9][a-z0-9-]{0,99}$/;
function uu({ query: e, results: t, total: n, mode: r } = {}) {
	return typeof e != "string" || e.length > 160 || !Number.isSafeInteger(n) || n < 0 || !Number.isSafeInteger(t) || t < 0 || t > n || !su.has(r) ? null : Object.freeze({
		query: e,
		results: t,
		total: n,
		mode: r
	});
}
function du(e, t) {
	return typeof e != "string" || !lu.test(e) || !cu.has(t) ? null : Object.freeze({
		genreId: e,
		tab: t
	});
}
function fu({ tree: e, selected: t, zoom: n, query: r } = {}) {
	return typeof e != "string" || !lu.test(e) || typeof t != "string" || !lu.test(t) || typeof n != "number" || !Number.isFinite(n) || n < .75 || n > 1.5 || typeof r != "string" || r.length > 160 ? null : Object.freeze({
		tree: e,
		selected: t,
		zoom: n,
		query: r
	});
}
// src/vue/state/production-ui-model.js
var pu = /^[a-z0-9][a-z0-9-]{0,99}$/, mu = (e, t, n) => Number.isSafeInteger(e) && e >= t && e <= n;
function hu(e) {
	let t = e?.settings, n = e?.prompt, r = t?.genre;
	return typeof r != "string" || !pu.test(r) || !mu(t?.tempo, 65, 200) || typeof n != "string" || n.length > 1e3 ? null : Object.freeze({
		ready: !0,
		genreId: r,
		tempo: t.tempo,
		promptLength: n.length
	});
}
function gu(e) {
	let t = e?.rows, n = e?.prompt;
	return !Array.isArray(t) || t.length < 2 || t.length > 4 || !mu(e?.tempo, 65, 200) || typeof n != "string" || n.length > 1e3 || !t.every((e) => typeof e?.id == "string" && pu.test(e.id) && mu(e.weight, 0, 100)) || t.reduce((e, t) => e + t.weight, 0) !== 100 || new Set(t.map((e) => e.id)).size !== t.length ? null : Object.freeze({
		ready: !0,
		genreCount: t.length,
		tempo: e.tempo,
		promptLength: n.length
	});
}
function _u(e) {
	let t = e?.report;
	return !["manual", "studio"].includes(e?.mode) || !mu(t?.score, 0, 100) || !mu(t?.length, 0, 1e5) ? null : Object.freeze({
		ready: !0,
		mode: e.mode,
		score: t.score,
		checkedLength: t.length
	});
}
function vu(e) {
	let t = e?.blocks;
	if (!Array.isArray(t) || t.length > 64 || !t.every((e) => e && [
		2,
		4,
		8,
		12,
		16,
		24,
		32
	].includes(e.bars) && mu(e.energy, 1, 5) && typeof e.hasTransition == "boolean")) return null;
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
var yu = (e, t, n) => Number.isSafeInteger(e) && e >= t && e <= n, bu = (e) => typeof e == "boolean";
function xu(e) {
	return !yu(e?.count, 0, 150) || !yu(e?.currentIndex, -1, e.count - 1) || e.count === 0 && e.currentIndex !== -1 || !bu(e.playing) || e.playing && e.currentIndex === -1 || !bu(e.shuffle) || ![
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
function Su(e) {
	let t = e?.files?.A?.ready, n = e?.files?.B?.ready;
	return !["player", "compare"].includes(e?.mode) || !["A", "B"].includes(e?.active) || !bu(e.playing) || !bu(e.loop) || !bu(e.hasBoth) || !bu(t) || !bu(n) || e.hasBoth !== (t && n) || e.playing && !(e.active === "A" ? t : n) ? null : Object.freeze({
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
var Cu = (e) => Number.isSafeInteger(e) && e >= 0 && e <= 1e4, wu = Object.freeze([
	"all",
	"idea",
	"lyrics",
	"generation",
	"selection",
	"mastering",
	"publisher",
	"released"
]);
function Tu(e) {
	let t = e?.records;
	return !Array.isArray(t) || !Cu(t.length) || typeof e.hasRecords != "boolean" || e.hasRecords !== t.length > 0 || !t.every((e) => e && Number.isSafeInteger(e.done) && e.done >= 0 && e.total === 6 && e.done <= e.total && e.percent === Math.round(e.done / e.total * 100)) ? null : Object.freeze({
		ready: !0,
		workCount: t.length,
		finishedCount: t.filter((e) => e.done === e.total).length,
		hasSelection: t.some((t) => typeof t.id == "string" && t.id === e.selectedId)
	});
}
function Eu(e) {
	let t = e?.records;
	return !Array.isArray(t) || !Cu(t.length) || typeof e.hasRecords != "boolean" || !wu.includes(e.active) || t.length > 0 && !e.hasRecords || e.active === "all" && e.hasRecords !== t.length > 0 ? null : Object.freeze({
		ready: !0,
		visibleCount: t.length,
		hasRecords: e.hasRecords,
		filter: e.active
	});
}
function Du(e) {
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
function Ou(e) {
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
var ku = (e, t = 1e4) => Number.isSafeInteger(e) && e >= 0 && e <= t, Au = (e) => typeof e == "boolean";
function ju(e) {
	let t = e?.items;
	return !ku(e?.total) || !Array.isArray(t) || !ku(t.length) || t.length > e.total || !t.every((e) => e && Au(e.hasCover)) ? null : Object.freeze({
		ready: !0,
		totalCount: e.total,
		visibleCount: t.length,
		localCoverCount: t.filter((e) => e.hasCover).length
	});
}
function Mu(e) {
	let t = e?.versions;
	return !Array.isArray(t) || !ku(t.length, 1e3) || !Au(e.hasAudio) || !Au(e.hasCover) || !Au(e.hasPlayableAudio) || !Au(e.compareOpen) || e.compareOpen && t.length < 2 || !t.every((e) => e && Au(e.isMain) && Au(e.isPlaying)) || t.filter((e) => e.isMain).length > 1 || t.filter((e) => e.isPlaying).length > 1 ? null : Object.freeze({
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
var Nu = (e, t = 1e4) => Number.isSafeInteger(e) && e >= 0 && e <= t;
function Pu(e, t) {
	return !Array.isArray(e?.artists) || !Nu(e.artists.length) || !Nu(t) || t > e.artists.length || !Nu(e.dnaCount) ? null : Object.freeze({
		ready: !0,
		artistCount: e.artists.length,
		visibleCount: t,
		dnaCount: e.dnaCount
	});
}
function Fu(e) {
	let t = e?.profiles, n = e?.detail;
	return !Array.isArray(t) || !Nu(t.length) || n !== null && (!n || typeof n != "object") || n !== null && (!Array.isArray(n.related) || !Nu(n.related.length) || !Array.isArray(n.forbids) || !Nu(n.forbids.length, 32) || !Array.isArray(n.facts) || !Nu(n.facts.length, 32) || !Array.isArray(n.textFields) || !Nu(n.textFields.length, 32)) ? null : Object.freeze({
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
var Iu = (e) => Number.isSafeInteger(e) && e >= 0 && e <= 1e4, Lu = Object.freeze([
	"genres",
	"ideas",
	"own",
	"generated",
	"prompts"
]);
function Ru(e) {
	if (!e || !Lu.every((t) => Array.isArray(e[t]) && Iu(e[t].length) && e[t].every((e) => typeof e == "object" && !!e))) return null;
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
var zu = (e, t) => typeof e == "string" && e.length <= t;
function Bu(e) {
	return !e || !zu(e.title, 100) || !zu(e.genre, 128) || !zu(e.text, 3e3) || !zu(e.hook, 240) ? null : Object.freeze({
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
function Vu(e, t) {
	return !e || typeof t != "boolean" || !zu(e.title, 100) || !zu(e.genre, 128) || !zu(e.text, 1e3) ? null : Object.freeze({
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
function Hu(e) {
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
function Uu(e) {
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
function Wu(e) {
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
var Gu = /* @__PURE__ */ new Set([
	"smart",
	"rules",
	"manual"
]), Ku = /* @__PURE__ */ new Set([
	"auto",
	"original",
	"tagged"
]), qu = /* @__PURE__ */ new Set([
	"minimal",
	"balanced",
	"detailed"
]), Ju = [
	"melisma",
	"falsetto",
	"harmonies",
	"noWhisper",
	"noRasp"
];
function Yu(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) return null;
	let t = e.prefs;
	if (!t || typeof t != "object" || Array.isArray(t) || !Gu.has(t.mode) || !Ku.has(t.source) || !qu.has(t.density) || !Number.isSafeInteger(t.intensity) || t.intensity < 1 || t.intensity > 5 || Ju.some((e) => typeof t[e] != "boolean") || typeof e.busy != "boolean") return null;
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
var Xu = Object.freeze([]), Zu = Object.freeze({
	ideaCount: 0,
	promptCount: 0,
	eventCount: 0,
	revision: 0
}), Qu = (e) => Number.isSafeInteger(e) && e >= 0 ? e : 0, $ = au("sunoboom-legacy-ui", () => {
	let e = us, t = /* @__PURE__ */ F(Xu), n = /* @__PURE__ */ F(Zu), r = /* @__PURE__ */ F(Object.freeze({
		theme: "dark",
		resolvedTheme: "dark",
		compact: !1,
		largeText: !1,
		reduceMotion: !1,
		startPage: "home",
		revision: 0
	})), i = /* @__PURE__ */ F(Object.freeze({
		query: "",
		results: 0,
		total: 0,
		mode: "",
		revision: 0
	})), a = /* @__PURE__ */ F(Object.freeze({
		genreId: null,
		tab: "overview",
		revision: 0
	})), o = /* @__PURE__ */ F(Object.freeze({
		tree: "ska",
		selected: null,
		zoom: 1,
		query: "",
		revision: 0
	}));
	function s(e) {
		let t = uu(e);
		if (!t) return !1;
		let n = i.value;
		return n.query === t.query && n.results === t.results && n.total === t.total && n.mode === t.mode ? !1 : (i.value = Object.freeze({
			...t,
			revision: n.revision + 1
		}), !0);
	}
	function c(e, t) {
		let n = du(e, t);
		if (!n) return !1;
		let r = a.value;
		return r.genreId === n.genreId && r.tab === n.tab ? !1 : (a.value = Object.freeze({
			...n,
			revision: r.revision + 1
		}), !0);
	}
	function l(e) {
		let t = fu(e);
		if (!t) return !1;
		let n = o.value;
		return n.tree === t.tree && n.selected === t.selected && n.zoom === t.zoom && n.query === t.query ? !1 : (o.value = Object.freeze({
			...t,
			revision: n.revision + 1
		}), !0);
	}
	let u = /* @__PURE__ */ F(Object.freeze({
		ready: !1,
		genreId: null,
		tempo: 0,
		promptLength: 0,
		revision: 0
	})), d = /* @__PURE__ */ F(Object.freeze({
		ready: !1,
		genreCount: 0,
		tempo: 0,
		promptLength: 0,
		revision: 0
	})), f = /* @__PURE__ */ F(Object.freeze({
		ready: !1,
		mode: "studio",
		score: 0,
		checkedLength: 0,
		revision: 0
	})), p = /* @__PURE__ */ F(Object.freeze({
		ready: !1,
		blockCount: 0,
		barCount: 0,
		averageEnergy: 0,
		transitionCount: 0,
		revision: 0
	})), m = /* @__PURE__ */ F(Object.freeze({
		ready: !1,
		queueCount: 0,
		selectedPosition: 0,
		playing: !1,
		shuffle: !1,
		repeat: "off",
		revision: 0
	})), h = /* @__PURE__ */ F(Object.freeze({
		ready: !1,
		mode: "player",
		active: "A",
		readyCount: 0,
		hasBoth: !1,
		playing: !1,
		loop: !1,
		revision: 0
	})), g = /* @__PURE__ */ F(Object.freeze({
		ready: !1,
		workCount: 0,
		finishedCount: 0,
		hasSelection: !1,
		revision: 0
	})), _ = /* @__PURE__ */ F(Object.freeze({
		ready: !1,
		visibleCount: 0,
		hasRecords: !1,
		filter: "all",
		revision: 0
	})), v = /* @__PURE__ */ F(Object.freeze({
		ready: !1,
		done: 0,
		total: 6,
		percent: 0,
		materialCount: 0,
		linkedCount: 0,
		arrangementBlocks: 0,
		historyCount: 0,
		revision: 0
	})), y = /* @__PURE__ */ F(Object.freeze({
		ready: !1,
		versionCount: 0,
		linkedCount: 0,
		sectionCount: 0,
		hasAudio: !1,
		hasCover: !1,
		revision: 0
	})), b = /* @__PURE__ */ F(Object.freeze({
		ready: !1,
		totalCount: 0,
		visibleCount: 0,
		localCoverCount: 0,
		revision: 0
	})), x = /* @__PURE__ */ F(Object.freeze({
		ready: !1,
		versionCount: 0,
		hasPrimary: !1,
		hasLocalAudio: !1,
		canPlay: !1,
		hasCover: !1,
		comparisonAvailable: !1,
		comparisonOpen: !1,
		revision: 0
	})), S = /* @__PURE__ */ F(Object.freeze({
		ready: !1,
		artistCount: 0,
		visibleCount: 0,
		dnaCount: 0,
		revision: 0
	})), C = /* @__PURE__ */ F(Object.freeze({
		ready: !1,
		profileCount: 0,
		detailOpen: !1,
		linkedTrackCount: 0,
		restrictionsCount: 0,
		factCount: 0,
		sectionCount: 0,
		revision: 0
	})), w = /* @__PURE__ */ F(Object.freeze({
		ready: !1,
		genreCount: 0,
		academyIdeaCount: 0,
		ownIdeaCount: 0,
		generatedIdeaCount: 0,
		promptCount: 0,
		totalIdeaCount: 0,
		revision: 0
	})), ee = /* @__PURE__ */ F(Object.freeze({
		ready: !1,
		titleLength: 0,
		ideaLength: 0,
		hookLength: 0,
		hasTitle: !1,
		hasGenre: !1,
		hasIdea: !1,
		hasHook: !1,
		revision: 0
	})), te = /* @__PURE__ */ F(Object.freeze({
		ready: !1,
		editing: !1,
		titleLength: 0,
		textLength: 0,
		hasTitle: !1,
		hasGenre: !1,
		hasPrompt: !1,
		revision: 0
	})), ne = /* @__PURE__ */ F(Object.freeze({
		ready: !1,
		charCount: 0,
		lineCount: 0,
		wordCount: 0,
		hasText: !1,
		revision: 0
	})), T = /* @__PURE__ */ F(Object.freeze({
		ready: !1,
		analyzed: !1,
		rowCount: 0,
		previewStanzaCount: 0,
		stressMarkCount: 0,
		suggestionCount: 0,
		revision: 0
	})), re = /* @__PURE__ */ F(Object.freeze({
		ready: !1,
		occurrenceCount: 0,
		distinctCount: 0,
		visibleCount: 0,
		revision: 0
	})), E = /* @__PURE__ */ F(Object.freeze({
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
	function D(e, t, n) {
		let r = t(n);
		if (!r) return !1;
		let i = e.value;
		return !Object.keys(r).every((e) => i[e] === r[e]) && (e.value = Object.freeze({
			...r,
			revision: i.revision + 1
		}), !0);
	}
	let ie = (e) => D(u, hu, e), ae = (e) => D(d, gu, e), oe = (e) => D(f, _u, e), se = (e) => D(p, vu, e), ce = (e) => D(m, xu, e), le = (e) => D(h, Su, e), ue = (e) => D(g, Tu, e), O = (e) => D(_, Eu, e), de = (e) => D(v, Du, e), fe = (e) => D(y, Ou, e), pe = (e) => D(b, ju, e), me = (e) => D(x, Mu, e), k = (e, t) => D(S, (e) => Pu(e, t), e), he = (e) => D(C, Fu, e), ge = (e) => D(w, Ru, e), _e = (e) => D(ee, Bu, e), ve = (e, t) => D(te, (e) => Vu(e, t), e), ye = (e) => D(ne, Hu, e), be = (e) => D(T, Uu, e), xe = (e) => D(re, Wu, e);
	function Se() {
		let e = re.value;
		return e.ready ? (re.value = Object.freeze({
			ready: !1,
			occurrenceCount: 0,
			distinctCount: 0,
			visibleCount: 0,
			revision: e.revision + 1
		}), !0) : !1;
	}
	let Ce = (e) => D(E, Yu, e);
	function A() {
		let e = E.value;
		return e.ready ? (E.value = Object.freeze({
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
	function we(e) {
		if (!Array.isArray(e)) return !1;
		let n = Object.freeze(e.filter((e) => e && typeof e.id == "string" && e.id).map((e) => Object.freeze({
			id: e.id,
			label: e.label,
			shortLabel: e.shortLabel,
			iconHtml: e.iconHtml
		}))), r = t.value;
		return r.length === n.length && r.every((e, t) => e.id === n[t].id && e.label === n[t].label && e.shortLabel === n[t].shortLabel && e.iconHtml === n[t].iconHtml) ? !1 : (t.value = n, !0);
	}
	function Te(e) {
		if (!e || typeof e != "object") return !1;
		let t = {
			ideaCount: Qu(e.ideaCount),
			promptCount: Qu(e.promptCount),
			eventCount: Qu(e.eventCount)
		}, r = n.value;
		return r.ideaCount === t.ideaCount && r.promptCount === t.promptCount && r.eventCount === t.eventCount ? !1 : (n.value = Object.freeze({
			...t,
			revision: r.revision + 1
		}), !0);
	}
	function Ee(e) {
		let t = ou(e);
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
		librarySummary: w,
		ideaDraftSummary: ee,
		promptDraftSummary: te,
		poetrySourceSummary: ne,
		poetryAnalysisSummary: T,
		poetryAmbiguitySummary: re,
		performanceTagsSummary: E,
		publishNavigation: we,
		publishDashboardStats: Te,
		publishAppearance: Ee,
		publishAcademyCatalog: s,
		publishAcademyFocus: c,
		publishAcademyTree: l,
		publishStudioSummary: ie,
		publishMixerSummary: ae,
		publishAuditorSummary: oe,
		publishArrangerSummary: se,
		publishPlayerLabSummary: ce,
		publishPlayerAbSummary: le,
		publishMasterListSummary: ue,
		publishPassportListSummary: O,
		publishMasterDetailSummary: de,
		publishPassportDetailSummary: fe,
		publishSongCollectionSummary: pe,
		publishSongDetailSummary: me,
		publishArtistManagerSummary: k,
		publishArtistDnaSummary: he,
		publishLibrarySummary: ge,
		publishIdeaDraftSummary: _e,
		publishPromptDraftSummary: ve,
		publishPoetrySourceSummary: ye,
		publishPoetryAnalysisSummary: be,
		publishPoetryAmbiguitySummary: xe,
		clearPoetryAmbiguitySummary: Se,
		publishPerformanceTagsSummary: Ce,
		clearPerformanceTagsSummary: A
	};
}), $u = [
	"data-nav",
	"data-vue-router-path",
	"aria-current",
	"aria-label",
	"title",
	"onClick"
], ed = ["innerHTML"], td = { class: "sb-vue-nav-label" }, nd = {
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
		let t = El(), n = $(), r = e, i = J(() => n.navigationItems.length ? n.navigationItems : r.items);
		function a(e) {
			r.onNavigate(e);
		}
		let o = (e) => {
			let n = ms(t.fullPath).nav;
			return (n === "detail" ? "catalog" : n === "sharedSong" ? "songs" : [
				"projects",
				"saved",
				"myideas",
				"myprompts",
				"events",
				"tracks",
				"artists"
			].includes(n) ? "account" : n) === e;
		};
		return (n, r) => (H(!0), U(V, null, B(i.value, (n) => (H(), U("button", {
			key: n.id,
			type: "button",
			class: k(e.mobile ? o(n.id) ? "active" : "" : ["nav-button", { active: o(n.id) }]),
			"data-nav": n.id,
			"data-vue-router-path": I(t).path,
			"aria-current": o(n.id) ? "page" : void 0,
			"aria-label": e.mobile ? n.label : void 0,
			title: e.mobile ? n.label : void 0,
			onClick: (e) => a(n.id)
		}, [W("span", {
			class: "sb-vue-nav-icon",
			"aria-hidden": "true",
			innerHTML: n.iconHtml
		}, null, 8, ed), W("span", td, A(e.mobile ? n.shortLabel : n.label), 1)], 10, $u))), 128));
	}
}, rd = { class: "breadcrumbs" }, id = {
	class: "brand-mobile",
	style: { display: "none" }
}, ad = { class: "sb-logo-lockup" }, od = ["src"], sd = ["aria-label"], cd = { class: "top-right" }, ld = ["aria-label"], ud = [
	"aria-label",
	"aria-expanded",
	"title"
], dd = ["aria-hidden"], fd = {
	class: "avatar account-shortcut",
	type: "button",
	title: "Личный кабинет",
	"aria-label": "Открыть личный кабинет",
	"data-action": "nav",
	"data-nav": "account"
}, pd = {
	__name: "TopHeader",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (H(), U(V, null, [
			W("div", rd, [n[0] ||= K("Рабочее пространство / ", -1), W("b", null, A(e.model.breadcrumb), 1)]),
			W("div", id, [W("div", ad, [W("img", {
				class: "sb-mobile-logo",
				src: e.model.logoSrc,
				alt: "SUNOBOOM — фирменный логотип"
			}, null, 8, od), n[1] ||= W("span", { class: "sb-brand-tagline" }, "Больше, чем музыка", -1)]), W("button", {
				type: "button",
				class: "sb-app-version sb-version-trigger",
				"aria-label": "Версия SUNOBOOM " + e.model.version + " — открыть историю обновлений",
				"aria-haspopup": "dialog",
				title: "История версий SUNOBOOM"
			}, "v" + A(e.model.version), 9, sd)]),
			W("div", cd, [
				n[3] ||= W("span", { class: "pill sb-prototype-pill" }, "🧪 Прототип", -1),
				W("button", {
					type: "button",
					class: "sb-app-version sb-version-trigger",
					"aria-label": "Версия SUNOBOOM " + e.model.version + " — открыть историю обновлений",
					"aria-haspopup": "dialog",
					title: "История версий SUNOBOOM"
				}, "v" + A(e.model.version), 9, ld),
				W("button", {
					type: "button",
					class: k(["sb-notice-bell", { "sb-notice-bell-unread": e.model.unreadCount > 0 }]),
					"data-action": "sb-notice-toggle",
					"aria-label": e.model.unreadCount ? "Уведомления, непрочитанных: " + e.model.unreadCount : "Уведомления, демонстрация счётчика уведомлений",
					"aria-expanded": String(e.model.noticeOpen),
					title: e.model.unreadCount ? "Напоминания о событиях" : "Пример счётчика: 3 (настоящих уведомлений пока нет)"
				}, [n[2] ||= W("span", {
					class: "sb-notice-bell-icon",
					"aria-hidden": "true"
				}, [W("svg", {
					viewBox: "0 0 24 24",
					"aria-hidden": "true"
				}, [W("path", { d: "M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" }), W("path", { d: "M10 21h4" })])], -1), W("span", {
					class: k(["sb-notice-count", { "sb-notice-count-preview": e.model.noticePreview }]),
					"aria-hidden": e.model.noticePreview ? "true" : void 0
				}, A(e.model.noticeBadge === 99 && e.model.unreadCount > 99 ? "99+" : e.model.noticeBadge), 11, dd)], 10, ud),
				n[4] ||= ba("<button type=\"button\" class=\"sb-notice-bell sb-settings-shortcut\" data-sbs-action=\"open-top\" aria-label=\"Открыть настройки приложения\" title=\"Настройки\" aria-haspopup=\"false\"><span class=\"sb-notice-bell-icon\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M10.5 2h3l.5 2.2 1.6.7 2-1.1 2.1 2.1-1 2 .7 1.7 2.1.4v3l-2.1.5-.7 1.6 1 2-2.1 2.1-2-1-.1.1-1.5.6-.5 2.1h-3l-.5-2.1-1.6-.7-2 1-2.1-2.1 1.1-2-.7-1.6-2.2-.5v-3l2.2-.4.7-1.7-1.1-2 2.1-2.1 2 1.1 1.6-.7z\"></path><circle cx=\"12\" cy=\"11.5\" r=\"3\"></circle></svg></span></button>", 1),
				W("button", fd, A(e.model.avatarInitial), 1)
			])
		], 64));
	}
}, md = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, hd = {
	class: "sb-vue-history-toolbar",
	role: "group",
	"aria-label": "История разделов SUNOBOOM"
}, gd = ["disabled"], _d = ["disabled"], vd = /*#__PURE__*/ md({
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
		let t = e, n = El(), r = $(), i = /* @__PURE__ */ P(!1), a = J(() => (n.fullPath, r.route.revision, {
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
		return (e, t) => (H(), U("div", hd, [
			t[4] ||= W("span", { class: "sb-vue-history-caption" }, "История разделов", -1),
			W("button", {
				type: "button",
				class: "sb-vue-history-button",
				"data-sb-history-back": "",
				disabled: !a.value.back,
				"aria-label": "Назад по разделам",
				title: "К предыдущему разделу",
				onClick: t[0] ||= (e) => o("back")
			}, [...t[2] ||= [W("svg", {
				viewBox: "0 0 24 24",
				width: "16",
				height: "16",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				"aria-hidden": "true"
			}, [W("path", { d: "m15 18-6-6 6-6" })], -1)]], 8, gd),
			W("button", {
				type: "button",
				class: "sb-vue-history-button",
				"data-sb-history-forward": "",
				disabled: !a.value.forward,
				"aria-label": "Вперёд по разделам",
				title: "К следующему разделу",
				onClick: t[1] ||= (e) => o("forward")
			}, [...t[3] ||= [W("svg", {
				viewBox: "0 0 24 24",
				width: "16",
				height: "16",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				"aria-hidden": "true"
			}, [W("path", { d: "m9 18 6-6-6-6" })], -1)]], 8, _d)
		]));
	}
}, [["__scopeId", "data-v-8f3958c9"]]), yd = { class: "sb-notice-panel-head" }, bd = { class: "sb-notice-scroll" }, xd = { class: "sb-notice-item-meta" }, Sd = { class: "sb-notice-period" }, Cd = { key: 0 }, wd = { class: "sb-notice-item-actions" }, Td = ["data-id", "data-key"], Ed = {
	key: 0,
	class: "sb-notice-seen"
}, Dd = ["data-key"], Od = {
	key: 0,
	class: "sb-notice-none"
}, kd = {
	key: 0,
	class: "sb-notice-panel-foot"
}, Ad = {
	key: 1,
	class: "sb-notice-banner",
	"aria-label": "Новые напоминания"
}, jd = { class: "sb-notice-banner-info" }, Md = { class: "sb-notice-banner-actions" }, Nd = ["data-id", "data-key"], Pd = {
	class: "btn ghost small",
	type: "button",
	"data-action": "sb-notice-toggle"
}, Fd = {
	__name: "Notifications",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ P(null), r = /* @__PURE__ */ P(null);
		function i(e) {
			if (!n.value) return;
			if (e.key === "Escape") {
				e.preventDefault(), r.value?.click();
				return;
			}
			if (e.key !== "Tab") return;
			let t = [...n.value.querySelectorAll("button:not(:disabled),a[href]")].filter((e) => e.getClientRects().length), i = t[0], a = t.at(-1);
			e.shiftKey && document.activeElement === i ? (e.preventDefault(), a?.focus()) : !e.shiftKey && document.activeElement === a && (e.preventDefault(), i?.focus());
		}
		return z(() => {
			t.initial.kind === "notice-panel" && (r.value?.focus(), document.addEventListener("keydown", i));
		}), Mr(() => {
			document.removeEventListener("keydown", i), t.initial.kind === "notice-panel" && Tn(() => {
				document.querySelector(".sb-notice-panel") || document.querySelector(".sb-notice-bell[data-action=\"sb-notice-toggle\"]")?.focus();
			});
		}), (t, i) => e.initial.kind === "notice-panel" ? (H(), U(V, { key: 0 }, [i[4] ||= W("button", {
			type: "button",
			class: "sb-notice-overlay",
			"data-action": "sb-notice-close",
			"aria-label": "Закрыть уведомления"
		}, null, -1), W("aside", {
			ref_key: "panel",
			ref: n,
			class: "sb-notice-panel",
			role: "dialog",
			"aria-label": "Напоминания о событиях",
			"aria-modal": "true"
		}, [
			W("div", yd, [i[0] ||= W("div", null, [
				W("div", { class: "sb-notice-eyebrow" }, "🔔 SUNOBOOM"),
				W("h2", null, "Уведомления"),
				W("p", null, "Напоминания о твоих событиях")
			], -1), W("button", {
				ref_key: "close",
				ref: r,
				class: "sb-notice-close",
				type: "button",
				"data-action": "sb-notice-close",
				"aria-label": "Закрыть"
			}, "✕", 512)]),
			W("div", bd, [(H(!0), U(V, null, B(e.initial.items, (e) => (H(), U("article", {
				key: e.key,
				class: k(["sb-notice-item", { "sb-notice-read": e.read }])
			}, [
				W("div", xd, [W("span", { class: k(["sb-notice-when", { "sb-notice-today": e.today }]) }, A(e.when) + A(e.time ? " · " + e.time : ""), 3), W("span", null, A(e.type), 1)]),
				W("h3", null, A(e.title), 1),
				W("div", Sd, A(e.period) + " · " + A(e.date), 1),
				e.notes ? (H(), U("p", Cd, A(e.notes), 1)) : q("", !0),
				W("div", wd, [W("button", {
					type: "button",
					"data-action": "sb-notice-event",
					"data-id": e.id,
					"data-key": e.key
				}, "Открыть событие →", 8, Td), e.read ? (H(), U("span", Ed, "✓ Прочитано")) : (H(), U("button", {
					key: 1,
					type: "button",
					"data-action": "sb-notice-read",
					"data-key": e.key
				}, "Прочитано", 8, Dd))])
			], 2))), 128)), e.initial.items.length ? q("", !0) : (H(), U("div", Od, [...i[1] ||= [
				W("span", null, "🔔", -1),
				W("h3", null, "Пока нет новых напоминаний", -1),
				W("p", null, "Укажи сроки уведомлений при создании события — хоть за неделю, хоть в сам день.", -1),
				W("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "sb-notice-create"
				}, "Создать событие →", -1)
			]]))]),
			e.initial.unread > 1 ? (H(), U("div", kd, [...i[2] ||= [W("button", {
				type: "button",
				"data-action": "sb-notice-read-all"
			}, "Отметить все прочитанными", -1)]])) : q("", !0),
			i[3] ||= W("div", { class: "sb-notice-disclaimer" }, "Напоминания показываются, когда SUNOBOOM открыт. При закрытом сайте push-уведомления пока не отправляются.", -1)
		], 512)], 64)) : (H(), U("section", Ad, [
			i[5] ||= W("span", {
				class: "sb-notice-banner-icon",
				"aria-hidden": "true"
			}, "🔔", -1),
			W("div", jd, [W("strong", null, A(e.initial.title), 1), W("p", null, A(e.initial.first.period) + " · " + A(e.initial.first.date) + A(e.initial.first.time ? " · " + e.initial.first.time : ""), 1)]),
			W("div", Md, [W("button", {
				class: "btn primary small",
				type: "button",
				"data-action": "sb-notice-event",
				"data-id": e.initial.first.id,
				"data-key": e.initial.first.key
			}, "Открыть", 8, Nd), W("button", Pd, "Все (" + A(e.initial.unread) + ")", 1)])
		]));
	}
}, Id = {
	class: "app",
	"data-sb-vue-shell": ""
}, Ld = { class: "side" }, Rd = { class: "brand" }, zd = { class: "sb-brand-version-row" }, Bd = ["src"], Vd = {
	"data-sb-vue-sidebar": "",
	"data-v-app": "",
	"data-sb-shell-owned": "",
	style: { display: "contents" }
}, Hd = { class: "main" }, Ud = {
	class: "top",
	"data-sb-vue-top": "",
	"data-v-app": "",
	"data-sb-shell-owned": ""
}, Wd = {
	"data-sb-vue-history": "",
	"data-v-app": "",
	"data-sb-shell-owned": "",
	class: "sb-vue-history-host"
}, Gd = ["data-sb-page-fallback"], Kd = {
	key: 0,
	"data-sb-workspace": "notice-panel",
	"data-v-app": "",
	"data-sb-shell-owned": "",
	style: { display: "contents" }
}, qd = {
	class: "mobile-nav",
	"data-sb-vue-mobile": "",
	"data-v-app": "",
	"data-sb-shell-owned": ""
}, Jd = {
	__name: "ApplicationShell",
	props: {
		state: Object,
		portals: Array,
		resources: Object
	},
	setup(e) {
		let t = /* @__PURE__ */ mr({
			props: ["entry"],
			setup(e) {
				return Ir((t) => (e.entry.fail(t), !1)), () => Ja(e.entry.component, e.entry.props);
			}
		});
		return (n, r) => (H(), U(V, null, [W("div", Id, [
			W("aside", Ld, [
				W("div", Rd, [W("div", zd, [W("img", {
					class: "sb-brand-logo",
					src: e.state.frame.logo,
					alt: "SUNOBOOM — фирменный логотип"
				}, null, 8, Bd)]), r[0] ||= W("div", { class: "brand-sub sb-brand-tagline" }, "Больше, чем музыка", -1)]),
				r[1] ||= W("div", { class: "side-heading" }, "РАБОЧЕЕ ПРОСТРАНСТВО", -1),
				W("div", Vd, [G(nd, {
					items: e.state.frame.navigation,
					onNavigate: e.resources.navigate
				}, null, 8, ["items", "onNavigate"])]),
				r[2] ||= W("div", { class: "side-bottom" }, [W("strong", null, [W("i", { class: "mini-dot" }), K(" Творческая лаборатория")]), W("p", null, "Прототип без сервера. Данные хранятся на твоём устройстве.")], -1)
			]),
			W("main", Hd, [
				W("div", Ud, [G(pd, { model: e.state.frame.header }, null, 8, ["model"])]),
				W("div", Wd, [G(vd, {
					canRestore: e.resources.canGo,
					onRestore: e.resources.restore
				}, null, 8, ["canRestore", "onRestore"])]),
				W("div", {
					"data-sb-vue-page": "",
					"data-v-app": "",
					"data-sb-page-fallback": e.state.pageError ? "" : void 0,
					style: { display: "contents" }
				}, [G(I(wl), null, {
					default: zn(({ Component: t }) => [(H(), fa(zr(t), {
						key: e.state.revision,
						model: e.state.page,
						revision: e.state.revision,
						resources: e.resources
					}, null, 8, [
						"model",
						"revision",
						"resources"
					]))]),
					_: 1
				})], 8, Gd),
				e.state.frame.noticeOpen ? (H(), U("div", Kd, [G(Fd, { initial: e.state.frame.notices }, null, 8, ["initial"])])) : q("", !0),
				r[3] ||= W("div", { class: "footer" }, "SUNOBOOM · независимая творческая лаборатория · не является продуктом Suno", -1)
			]),
			W("nav", qd, [G(nd, {
				items: e.state.frame.navigation,
				mobile: !0,
				onNavigate: e.resources.navigate
			}, null, 8, ["items", "onNavigate"])])
		]), (H(!0), U(V, null, B(e.portals, (e) => (H(), fa(or, {
			key: e.id,
			to: e.target
		}, [G(I(t), { entry: e }, null, 8, ["entry"])], 8, ["to"]))), 128))], 64));
	}
}, Yd = /* @__PURE__ */ new WeakMap();
function Xd(e, t) {
	Yd.set(/* @__PURE__ */ N(e), t);
}
function Zd(e, t, n) {
	let r = Yd.get(/* @__PURE__ */ N(e))?.get(t);
	n && r && n.replaceChildren(...r);
}
function Qd(e, t) {
	for (let n of Yd.get(/* @__PURE__ */ N(t))?.keys() || []) Zd(t, n, e.querySelector("#" + n));
}
// src/vue/pages/PageView.vue
var $d = /* @__PURE__ */ mr({
	inheritAttrs: !1,
	props: [
		"tag",
		"attrs",
		"boundary",
		"model"
	],
	setup(e) {
		let t = /* @__PURE__ */ P(null);
		return z(() => {
			Zd(e.model, e.boundary, t.value);
		}), () => Ja(e.tag, {
			...e.attrs,
			ref: t
		});
	}
});
function ef(e, t) {
	return "text" in e ? e.text : e.nativeBoundary ? Ja($d, {
		tag: e.tag,
		attrs: e.props,
		boundary: e.nativeBoundary,
		model: t
	}) : e.feature ? Ja(e.tag, e.props, [Ja(e.feature.component, e.feature.props)]) : Ja(e.tag, e.props, e.children.map((e) => ef(e, t)));
}
var tf = /* @__PURE__ */ mr({
	name: "WorkspacePageView",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return () => e.model.layout.map((t) => ef(t, e.model));
	}
}), nf = /* @__PURE__ */ mr({
	props: ["resources", "revision"],
	setup(e) {
		let t = /* @__PURE__ */ P(null);
		return z(() => e.resources.attach(e.revision, t.value)), () => Ja("div", {
			"data-sb-native-page-fallback": "",
			ref: t
		});
	}
}), rf = /* @__PURE__ */ mr({
	name: "ApplicationPage",
	props: [
		"model",
		"revision",
		"resources"
	],
	setup(e) {
		let t = /* @__PURE__ */ P(!1);
		return Ir((n) => (t.value = !0, e.resources.failed(e.revision, n), !1)), () => e.model && !t.value ? Ja(tf, { model: e.model }) : Ja(nf, {
			resources: e.resources,
			revision: e.revision
		});
	}
});
// src/vue/pages/ui-handoff.js
function af(e) {
	return [...e.querySelectorAll("input,select,textarea,button")].map((e, t) => ({
		index: t,
		node: e,
		wrap: e._sbStressMirror ? e.closest(".sb-stress-highlight-wrap") : null,
		id: e.id,
		name: e.name,
		value: e.value,
		checked: e.checked,
		start: e.selectionStart,
		end: e.selectionEnd,
		direction: e.selectionDirection
	}));
}
function of(e, t) {
	let n = [...e.querySelectorAll("input,select,textarea,button")];
	for (let e of t) {
		let t = e.id ? n.find((t) => t.id === e.id) : n[e.index];
		if (t) {
			if (t !== e.node) {
				let n = t.closest(".sb-stress-highlight-wrap");
				e.wrap && n ? n.replaceWith(e.wrap) : t.replaceWith(e.node);
			}
			if (e.node.type !== "file" && (e.node.value = e.value), typeof e.checked == "boolean" && (e.node.checked = e.checked), typeof e.start == "number") try {
				e.node.setSelectionRange(e.start, e.end, e.direction);
			} catch {}
		}
	}
}
function sf(e) {
	return e.id ? e.id : e.dataset?.sbsongVersionTitle ? "version-title:" + e.dataset.sbsongVersionTitle : e.dataset?.sbsongVersionNote ? "version-note:" + e.dataset.sbsongVersionNote : e.dataset?.pcStage ? "stage:" + e.dataset.pcStage : "";
}
function cf(e) {
	let t = {}, n = {};
	for (let r of e?.querySelectorAll("input,select,textarea") || []) {
		let e = {
			value: r.value,
			checked: r.checked,
			_sbStressMirror: !!r._sbStressMirror
		};
		typeof r.selectionStart == "number" && Object.assign(e, {
			start: r.selectionStart,
			end: r.selectionEnd,
			direction: r.selectionDirection
		});
		let i = sf(r);
		i && (t[i] = e), r.name && (n[r.name] ??= []).push(e);
	}
	let r = e?.querySelector("#sb-poetry-result");
	r && (t["sb-poetry-result"] = { dataset: {
		analyzed: r.dataset.analyzed,
		poetryDirty: r.dataset.poetryDirty
	} });
	let i = e?.ownerDocument?.activeElement;
	return {
		fields: t,
		named: n,
		...i && e.contains(i) ? { focus: sf(i) } : {}
	};
}
function lf(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e?.querySelectorAll("[data-sb-native-boundary],#sb-poetry-auto-stress,#sb-gt-inner") || []) n.id && t.set(n.id, [...n.childNodes]);
	return t;
}
function uf(e, t) {
	for (let n of e?.querySelectorAll("input,select,textarea") || []) {
		let e = sf(n), r = t?.fields?.[e];
		if (r && n.type !== "file" && (n.value = r.value, typeof r.checked == "boolean" && (n.checked = r.checked), t.focus === e && n.focus({ preventScroll: !0 }), typeof r.start == "number")) try {
			n.setSelectionRange(r.start, r.end, r.direction);
		} catch {}
	}
}
var df = {
	home: [{
		tag: "div",
		props: { id: "sb-vue-dashboard" },
		slot: "sb-vue-dashboard"
	}],
	account: [{
		tag: "div",
		props: { id: "sb-vue-account-home" },
		slot: "sb-vue-account-home"
	}],
	ideas: [{
		tag: "div",
		props: { id: "sb-vue-ideas-page" },
		slot: "sb-vue-ideas-page"
	}],
	saved: [{
		tag: "div",
		props: { id: "sb-vue-library-collection" },
		slot: "sb-vue-library-collection"
	}],
	projects: [
		{
			tag: "div",
			props: {
				class: "account-back",
				"data-sb-workspace": "back"
			},
			slot: "back"
		},
		{
			tag: "header",
			props: { class: "heading" },
			children: [{
				tag: "h1",
				props: {},
				children: [{ text: "Мои проекты" }]
			}, {
				tag: "p",
				props: {},
				children: [{ text: "Храни замыслы исполнителей, EP и будущих песен. Эта версия работает локально: участники пока не видят проекты друг друга." }]
			}]
		},
		{
			tag: "div",
			props: { class: "projects-layout" },
			children: [{
				tag: "div",
				props: { class: "panel" },
				children: [{
					tag: "div",
					props: { id: "sb-vue-project-creator" },
					slot: "sb-vue-project-creator"
				}, {
					tag: "div",
					props: { id: "sb-vue-projects-list" },
					slot: "sb-vue-projects-list"
				}]
			}, {
				tag: "div",
				props: {
					class: "panel",
					id: "sb-vue-project-detail"
				},
				slot: "sb-vue-project-detail"
			}]
		}
	],
	events: [
		{
			tag: "div",
			props: {
				class: "account-back",
				"data-sb-workspace": "back"
			},
			slot: "back"
		},
		{
			tag: "header",
			props: { class: "heading" },
			children: [
				{
					tag: "div",
					props: { class: "eyebrow" },
					children: [{ text: "ТВОИ ПЛАНЫ" }]
				},
				{
					tag: "h1",
					props: {},
					children: [{ text: "🗓️ Мои события" }]
				},
				{
					tag: "p",
					props: {},
					children: [{ text: "Релизы, студийные записи, встречи и другие важные даты. События сохраняются в этом браузере, без синхронизации с календарём телефона." }]
				}
			]
		},
		{ text: "\n" },
		{
			tag: "div",
			props: {
				class: "panel dash-event-editor",
				id: "event-editor"
			},
			children: [
				{
					tag: "div",
					props: { id: "sb-vue-event-fields" },
					slot: "sb-vue-event-fields"
				},
				{
					tag: "div",
					props: { id: "sb-vue-event-reminders" },
					slot: "sb-vue-event-reminders"
				},
				{ text: "\n" },
				{
					tag: "div",
					props: {
						class: "detail-actions",
						id: "sb-vue-event-actions"
					},
					slot: "sb-vue-event-actions"
				}
			]
		},
		{ text: "\n" },
		{
			tag: "div",
			props: { id: "sb-vue-events-list" },
			slot: "sb-vue-events-list"
		}
	],
	myprompts: [
		{
			tag: "div",
			props: {
				class: "account-back",
				"data-sb-workspace": "back"
			},
			slot: "back"
		},
		{ text: "\n" },
		{
			tag: "header",
			props: { class: "heading" },
			children: [{
				tag: "h1",
				props: {},
				children: [{ text: "🎛️ Мои промпты" }]
			}, {
				tag: "p",
				props: {},
				children: [{ text: "Сохраняй описания звучания для Suno — вручную или из конструктора Suno Studio." }]
			}]
		},
		{ text: "\n" },
		{
			tag: "div",
			props: {
				class: "panel account-editor",
				id: "prompt-editor"
			},
			children: [
				{ text: "\n" },
				{
					tag: "div",
					props: { id: "sb-vue-prompt-form" },
					slot: "sb-vue-prompt-form"
				},
				{ text: "\n" },
				{
					tag: "div",
					props: {
						class: "sbpa-editor-entry",
						"data-sb-workspace": "prompt-auditor"
					},
					slot: "prompt-auditor"
				},
				{
					tag: "div",
					props: {
						class: "detail-actions",
						"data-sb-workspace": "prompt-actions"
					},
					slot: "prompt-actions"
				},
				{ text: "\n" }
			]
		},
		{ text: "\n" },
		{
			tag: "div",
			props: { id: "sb-vue-prompts-list" },
			slot: "sb-vue-prompts-list"
		}
	],
	myideas: [
		{
			tag: "div",
			props: {
				class: "account-back",
				"data-sb-workspace": "back"
			},
			slot: "back"
		},
		{ text: "\n" },
		{
			tag: "header",
			props: { class: "heading" },
			children: [{
				tag: "h1",
				props: {},
				children: [{ text: "💡 Мои идеи" }]
			}, {
				tag: "p",
				props: {},
				children: [{ text: "Сохраняй собственные сюжеты и возвращайся к идеям из каталога и Idea Lab." }]
			}]
		},
		{ text: "\n" },
		{
			tag: "div",
			props: {
				class: "sb-poetry-quickbar",
				"data-sb-workspace": "quick-poetry"
			},
			slot: "quick-poetry"
		},
		{ text: "\n" },
		{
			tag: "div",
			props: {
				class: "panel account-editor",
				id: "idea-editor"
			},
			children: [
				{ text: "\n" },
				{
					tag: "h3",
					props: {},
					children: [{ value: "ideaEditorTitle" }]
				},
				{ text: "\n" },
				{
					tag: "div",
					props: { id: "sb-vue-idea-fields" },
					slot: "sb-vue-idea-fields"
				},
				{ text: "\n" },
				{
					tag: "div",
					props: {
						class: "lyrics-workbench",
						id: "sb-poetry-workbench"
					},
					children: [
						{ text: "\n" },
						{
							tag: "div",
							props: { class: "section-title" },
							children: [{
								tag: "h2",
								props: {},
								children: [{ text: "✍️ Текст песни" }]
							}]
						},
						{ text: "\n" },
						{
							tag: "p",
							props: { class: "workbench-note" },
							children: [{ text: "Вставь готовые слова. Если есть разметка «Куплет 1:», «Припев:» или [Verse], оставь её — мы используем эти пометки. Исходный текст не изменится." }]
						},
						{ text: "\n" },
						{
							tag: "div",
							props: {
								class: "field",
								id: "sb-vue-lyrics-source"
							},
							slot: "sb-vue-lyrics-source"
						},
						{ text: "\n" },
						{
							tag: "section",
							props: {
								class: "sb-poetry-panel",
								"aria-label": "Редактор песенной поэзии"
							},
							children: [
								{ text: "\n" },
								{
									tag: "div",
									props: { class: "sb-poetry-head" },
									children: [{
										tag: "span",
										props: {
											class: "sb-poetry-icon",
											"aria-hidden": "true"
										},
										children: [{ text: "♫" }]
									}, {
										tag: "div",
										props: {},
										children: [{
											tag: "h3",
											props: {},
											children: [{ text: "🔎 Редактор песенной поэзии" }]
										}, {
											tag: "p",
											props: {},
											children: [{ text: "Анализ ритмики, примерных рифм, повторов и удобства строк для пения. Оригинальный текст остаётся твоим." }]
										}]
									}]
								},
								{ text: "\n" },
								{
									tag: "div",
									props: {
										class: "sb-poetry-tools",
										"data-sb-workspace": "poetry-tools"
									},
									slot: "poetry-tools"
								},
								{ text: "\n" },
								{
									tag: "p",
									props: { class: "sb-poetry-small" },
									children: [{ text: "Автоударения используют словарь из более 2 млн словоформ и отдельный словарь неоднозначных слов. Красным подсвечиваются слова, для которых нужно выбрать ударение. Текст остаётся в браузере." }]
								},
								{ text: "\n" },
								{
									tag: "div",
									props: {
										id: "sb-poetry-auto-stress",
										class: "sb-poetry-auto-stress",
										"aria-live": "polite",
										"data-sb-native-boundary": "sb-poetry-auto-stress"
									},
									native: !0
								},
								{ text: "\n" },
								{
									tag: "div",
									props: {
										id: "sb-poetry-result",
										class: "sb-poetry-result",
										role: "region",
										"aria-live": "polite"
									},
									slot: "sb-poetry-result"
								},
								{ text: "\n" },
								{
									tag: "section",
									props: {
										class: "sb-vt-panel",
										id: "sb-vt-workbench",
										"aria-label": "Генератор тегов исполнения"
									},
									slot: "sb-vt-workbench"
								},
								{ text: "\n" }
							]
						},
						{ text: "\n" },
						{
							tag: "div",
							props: { class: "section-title" },
							children: [{
								tag: "h2",
								props: {},
								children: [{ text: "✨ Теги и усиление" }]
							}]
						},
						{ text: "\n" },
						{
							tag: "div",
							props: { id: "sb-vue-lyrics-tools" },
							slot: "sb-vue-lyrics-tools"
						},
						{ text: "\n" }
					]
				},
				{
					tag: "div",
					props: {
						class: "detail-actions",
						"data-sb-workspace": "idea-actions"
					},
					slot: "idea-actions"
				},
				{ text: "\n" }
			]
		},
		{ text: "\n" },
		{
			tag: "div",
			props: { id: "sb-vue-idea-collections" },
			slot: "sb-vue-idea-collections"
		}
	],
	catalog: [
		{
			tag: "header",
			props: { class: "genre-family-intro" },
			children: [
				{
					tag: "div",
					props: { class: "eyebrow" },
					children: [{ text: "SUNOBOOM · БИБЛИОТЕКА ЗНАНИЙ" }]
				},
				{
					tag: "h1",
					props: {},
					children: [{ text: "Академия" }]
				},
				{
					tag: "p",
					props: {},
					children: [{ text: "Музыкальная база знаний SUNOBOOM. Сейчас здесь собраны жанры и поджанры; позже появятся учебники и другие образовательные разделы." }]
				}
			]
		},
		{
			tag: "div",
			props: {
				class: "encyclopedia-sections",
				"aria-label": "Разделы Академии"
			},
			children: [
				{
					tag: "div",
					props: { class: "encyclopedia-section encyclopedia-section-active" },
					children: [
						{
							tag: "span",
							props: {
								class: "encyclopedia-section-icon",
								"aria-hidden": "true"
							},
							children: [{ text: "🎼" }]
						},
						{
							tag: "div",
							props: {},
							children: [{
								tag: "strong",
								props: {},
								children: [{ text: "Музыкальные жанры" }]
							}, {
								tag: "small",
								props: {},
								children: [{ value: "catalogCount" }]
							}]
						},
						{
							tag: "span",
							props: { class: "encyclopedia-section-status" },
							children: [{ text: "Открыто" }]
						}
					]
				},
				{
					tag: "span",
					props: {
						"data-sb-workspace": "tree-launch",
						style: "display:contents"
					},
					slot: "tree-launch"
				},
				{
					tag: "span",
					props: {
						"data-sb-workspace": "artist-launch",
						style: "display:contents"
					},
					slot: "artist-launch"
				},
				{
					tag: "div",
					props: { class: "encyclopedia-section encyclopedia-section-future" },
					children: [
						{
							tag: "span",
							props: {
								class: "encyclopedia-section-icon",
								"aria-hidden": "true"
							},
							children: [{ text: "📚" }]
						},
						{
							tag: "div",
							props: {},
							children: [{
								tag: "strong",
								props: {},
								children: [{ text: "Учебники" }]
							}, {
								tag: "small",
								props: {},
								children: [{ text: "В дальнейшем добавим обучающие материалы" }]
							}]
						},
						{
							tag: "span",
							props: { class: "encyclopedia-section-status" },
							children: [{ text: "Позже" }]
						}
					]
				}
			]
		},
		{
			tag: "details",
			props: {
				id: "sb-genre-tree",
				class: "sb-gt-section"
			},
			children: [{
				tag: "summary",
				props: {},
				children: [
					{
						tag: "span",
						props: { class: "sb-gt-summary-icon" },
						children: [{ text: "🕸️" }]
					},
					{
						tag: "span",
						props: {},
						children: [{
							tag: "strong",
							props: {},
							children: [{ text: "Музыкальное древо жанров" }]
						}, {
							tag: "small",
							props: {},
							children: [{ text: "Интерактивная карта происхождения и смешения музыки" }]
						}]
					},
					{
						tag: "span",
						props: { class: "sb-gt-summary-hint" },
						children: [{ text: "Исследовать связи" }]
					},
					{
						tag: "span",
						props: { class: "sb-gt-chevron" },
						children: [{ text: "⌄" }]
					}
				]
			}, {
				tag: "div",
				props: {
					id: "sb-gt-inner",
					class: "sb-gt-inner",
					"data-sb-native-boundary": "sb-gt-inner"
				},
				native: !0
			}],
			bind: "treeOpen"
		},
		{
			tag: "section",
			props: { id: "sb-vue-academy-root" },
			slot: "sb-vue-academy-root"
		}
	],
	studio: [
		{
			tag: "header",
			props: { class: "heading" },
			children: [{
				tag: "h1",
				props: {},
				children: [{ text: "Suno Studio " }, {
					tag: "span",
					props: { style: "color:#fd83c3" },
					children: [{ text: "✦" }]
				}]
			}, {
				tag: "p",
				props: {},
				children: [{ text: "Управляй звуком и получай английский промпт для генерации. Каждый параметр меняет текст в реальном времени." }]
			}]
		},
		{
			tag: "div",
			props: {
				class: "gm-studio-banner",
				"data-sb-workspace": "mixer-banner"
			},
			slot: "mixer-banner",
			bind: "mixerBanner"
		},
		{
			tag: "span",
			props: {
				"data-sb-workspace": "arranger-jump",
				style: "display:contents"
			},
			slot: "arranger-jump"
		},
		{
			tag: "div",
			props: {
				class: "studio-grid",
				"data-sb-vue-studio": "true"
			},
			slot: "studio-grid"
		},
		{
			tag: "section",
			props: {
				class: "panel",
				style: "margin-top:24px",
				id: "song-blueprint",
				"data-sb-workspace": "blueprint"
			},
			slot: "song-blueprint"
		},
		{
			tag: "section",
			props: {
				id: "sba-arranger",
				class: "sba-shell",
				"aria-labelledby": "sba-heading"
			},
			children: [
				{
					tag: "header",
					props: { class: "sba-hero" },
					children: [{
						tag: "div",
						props: { class: "sba-hero-copy" },
						children: [
							{
								tag: "span",
								props: { class: "sba-eyebrow" },
								children: [{ text: "SUNO STUDIO · КОНСТРУКТОР" }]
							},
							{
								tag: "h2",
								props: { id: "sba-heading" },
								children: [{ text: "Визуальная аранжировка " }, {
									tag: "span",
									props: {},
									children: [{ text: "✦" }]
								}]
							},
							{
								tag: "p",
								props: {},
								children: [{ text: "Собери структуру трека, настрой энергию каждого фрагмента и подготовь теги исполнения для Suno. Стандартные инструменты Studio останутся без изменений." }]
							}
						]
					}, {
						tag: "span",
						props: { class: "sba-hero-label" },
						children: [{ text: "ARRANGEMENT LAB · v0.75" }]
					}]
				},
				{
					tag: "div",
					props: { class: "sba-toolbar" },
					children: [
						{
							tag: "div",
							props: { class: "sba-preset-picker" },
							slot: "sba-preset-picker"
						},
						{
							tag: "span",
							props: {
								"data-sb-arranger-controls": "apply",
								style: "display:contents"
							},
							slot: "arranger-controls:apply"
						},
						{
							tag: "span",
							props: {
								class: "sba-draft-saved",
								id: "sba-saved"
							},
							children: [{ text: "Черновик сохраняется в браузере" }]
						}
					]
				},
				{
					tag: "div",
					props: {
						id: "sba-preset-confirm",
						"data-sb-arranger-controls": "preset-confirm",
						"aria-live": "polite"
					},
					slot: "sba-preset-confirm"
				},
				{
					tag: "section",
					props: {
						class: "sba-snake-overview",
						"aria-label": "Краткая схема последовательности блоков"
					},
					children: [
						{
							tag: "div",
							props: { class: "sba-snake-top" },
							children: [{
								tag: "div",
								props: {},
								children: [{
									tag: "span",
									props: { class: "sba-snake-eyebrow" },
									children: [{ text: "СХЕМА ПЕСНИ" }]
								}, {
									tag: "h3",
									props: {},
									children: [{ text: "Змейка аранжировки " }, {
										tag: "span",
										props: { "aria-hidden": "true" },
										children: [{ text: "〰" }]
									}]
								}]
							}, {
								tag: "div",
								props: {
									class: "sba-snake-tools",
									"data-sb-arranger-controls": "snake-tools"
								},
								slot: "arranger-controls:snake-tools"
							}]
						},
						{
							tag: "div",
							props: {
								id: "sba-snake-track",
								class: "sba-snake-track",
								"aria-live": "polite"
							},
							slot: "sba-snake-track"
						},
						{
							tag: "p",
							props: { class: "sba-snake-footnote" },
							children: [{ text: "Перетаскивай блоки в змейке мышью или пальцем. Порядок и черновик обновятся автоматически." }]
						},
						{
							tag: "span",
							props: {
								id: "sba-snake-status",
								class: "sba-sr-only",
								role: "status",
								"aria-live": "polite"
							},
							children: []
						}
					]
				},
				{
					tag: "section",
					props: {
						class: "sba-transition-hub",
						"aria-labelledby": "sba-transition-hub-title"
					},
					children: [
						{
							tag: "div",
							props: { class: "sba-transition-hub-heading" },
							children: [{
								tag: "div",
								props: { class: "sba-transition-hub-heading-copy" },
								children: [
									{
										tag: "span",
										props: { class: "sba-transition-hub-kicker" },
										children: [{ text: "НОВОЕ · v0.75" }]
									},
									{
										tag: "h3",
										props: { id: "sba-transition-hub-title" },
										children: [{ text: "✦ Конструктор музыкальных переходов" }]
									},
									{
										tag: "p",
										props: {},
										children: [{ text: "Соедини соседние блоки сбивкой, нарастанием, паузой, плавным переходом, затуханием или акцентом. Выбирай здесь — эффект появится в тегах Suno." }]
									}
								]
							}, {
								tag: "span",
								props: {
									id: "sba-transition-hub-meta",
									class: "sba-transition-hub-meta"
								},
								children: [{ value: "transitionCount" }]
							}]
						},
						{
							tag: "div",
							props: {
								id: "sba-transition-hub-list",
								class: "sba-transition-hub-list"
							},
							slot: "sba-transition-hub-list"
						},
						{
							tag: "span",
							props: {
								"data-sb-arranger-controls": "expand",
								style: "display:contents"
							},
							slot: "arranger-controls:expand"
						}
					]
				},
				{
					tag: "div",
					props: { class: "sba-body" },
					children: [{
						tag: "div",
						props: { class: "sba-editor" },
						children: [
							{
								tag: "div",
								props: { class: "sba-panel-title" },
								children: [{
									tag: "div",
									props: {},
									children: [{
										tag: "h3",
										props: {},
										children: [{ text: "Структура песни" }]
									}, {
										tag: "p",
										props: {},
										children: [{ text: "Перетаскивай блоки на компьютере или используй ↑ ↓ на телефоне." }]
									}]
								}, {
									tag: "span",
									props: {
										id: "sba-section-count",
										class: "sba-count"
									},
									children: [{ value: "arrangementCount" }]
								}]
							},
							{
								tag: "div",
								props: {
									class: "sba-add",
									id: "sba-add-editor",
									"data-sb-arranger-controls": "composer"
								},
								slot: "sba-add-editor"
							},
							{
								tag: "div",
								props: {
									id: "sba-cards",
									class: "sba-block-list"
								},
								slot: "sba-cards"
							},
							{
								tag: "span",
								props: {
									"data-sb-arranger-controls": "end-add",
									style: "display:contents"
								},
								slot: "arranger-controls:end-add"
							},
							{
								tag: "div",
								props: { class: "sba-chart-panel" },
								children: [{
									tag: "div",
									props: { class: "sba-panel-title" },
									children: [{
										tag: "div",
										props: {},
										children: [{
											tag: "h3",
											props: {},
											children: [{ text: "Кривая энергии" }]
										}, {
											tag: "p",
											props: {},
											children: [{ text: "Схематичная динамика от тихого вступления до кульминации." }]
										}]
									}]
								}, {
									tag: "div",
									props: {
										id: "sba-energy-chart",
										class: "sba-chart",
										role: "img",
										"aria-label": "Intro: 2 из 5; Verse 1: 2 из 5; Pre-Chorus: 3 из 5; Chorus: 5 из 5; Verse 2: 3 из 5; Chorus: 5 из 5; Bridge: 2 из 5; Final Chorus: 5 из 5; Outro: 1 из 5"
									},
									slot: "sba-energy-chart",
									bind: "energyChart"
								}]
							}
						]
					}, {
						tag: "aside",
						props: { class: "sba-result" },
						slot: "sba-result"
					}]
				}
			]
		},
		{
			tag: "section",
			props: {
				class: "sbpa-auditor",
				id: "sbpa-auditor",
				"aria-label": "Аудитор промптов"
			},
			slot: "sbpa-auditor"
		}
	],
	player: [{
		tag: "section",
		props: {
			class: "sbp-wrap",
			id: "sbp-page"
		},
		children: [
			{
				tag: "header",
				props: { class: "sbp-hero" },
				children: [{
					tag: "div",
					props: {},
					children: [
						{
							tag: "span",
							props: { class: "sbp-eyebrow" },
							children: [{ text: "SUNOBOOM · ЭКСПЕРИМЕНТАЛЬНАЯ ЗОНА" }]
						},
						{
							tag: "h1",
							props: {},
							children: [{ text: "Аудиоплеер " }, {
								tag: "em",
								props: {},
								children: [{ text: "LAB" }]
							}]
						},
						{
							tag: "p",
							props: {},
							children: [{ text: "Тестируем музыкальный плеер перед интеграцией с проектами и паспортами треков. Здесь можно слушать свои аудиофайлы прямо на устройстве." }]
						}
					]
				}, {
					tag: "span",
					props: { class: "sbp-test-badge" },
					children: [{ text: "🧪 ТЕСТОВАЯ ВЕРСИЯ" }]
				}]
			},
			{
				tag: "div",
				props: {
					class: "sbab-modes",
					"data-sb-workspace": "player-modes",
					role: "group",
					"aria-label": "Режим плеера"
				},
				slot: "player-modes"
			},
			{
				tag: "div",
				props: {
					id: "sb-vue-player-ab",
					hidden: !0
				},
				slot: "sb-vue-player-ab",
				bind: "playerAB"
			},
			{
				tag: "div",
				props: { id: "sb-vue-player-lab" },
				slot: "sb-vue-player-lab",
				bind: "playerLab"
			},
			{
				tag: "section",
				props: { class: "sbp-bottom" },
				children: [
					{
						tag: "div",
						props: {},
						children: [{
							tag: "strong",
							props: {},
							children: [{ text: "🔒 Приватность" }]
						}, {
							tag: "p",
							props: {},
							children: [{ text: "Локальные аудиофайлы воспроизводятся из памяти браузера и не загружаются на сервер SUNOBOOM." }]
						}]
					},
					{
						tag: "div",
						props: {},
						children: [{
							tag: "strong",
							props: {},
							children: [{ text: "💾 Сохранение" }]
						}, {
							tag: "p",
							props: {},
							children: [{ text: "После обновления вкладки файлы нужно добавить заново. Сохраняются только настройки громкости, скорости и повтора." }]
						}]
					},
					{
						tag: "div",
						props: {},
						children: [{
							tag: "strong",
							props: {},
							children: [{ text: "🔧 Тестовый режим" }]
						}, {
							tag: "p",
							props: {},
							children: [{ text: "Плеер пока не привязан к «Паспорту трека», «Моим проектам» и другим инструментам сайта." }]
						}]
					}
				]
			}
		]
	}],
	producer: [{
		tag: "div",
		props: { class: "sbpc-page" },
		children: [
			{
				tag: "header",
				props: { class: "sbpc-hero" },
				children: [
					{
						tag: "span",
						props: { class: "sbpc-kicker" },
						children: [{ text: "SUNOBOOM · РАБОЧЕЕ ПРОСТРАНСТВО" }]
					},
					{
						tag: "h1",
						props: {},
						children: [{ text: "Мастер " }, {
							tag: "span",
							props: {},
							children: [{ text: "✦" }]
						}]
					},
					{
						tag: "p",
						props: {},
						children: [{ text: "От идеи до релиза — единая рабочая карточка песни. Материалы связаны с существующими инструментами SUNOBOOM." }]
					},
					{
						tag: "div",
						props: { class: "sbpc-hero-stats" },
						children: [
							{
								tag: "span",
								props: {},
								children: [{
									tag: "strong",
									props: {},
									children: [{ value: "productionCount" }]
								}, { text: " песен в работе" }]
							},
							{
								tag: "span",
								props: {},
								children: [{
									tag: "strong",
									props: {},
									children: [{ value: "productionDone" }]
								}, { text: " полностью пройдено" }]
							},
							{
								tag: "span",
								props: {},
								children: [{ text: "Хранение: этот браузер" }]
							}
						]
					}
				]
			},
			{
				tag: "section",
				props: {
					class: "sbpc-create",
					"data-sb-workspace": "producer-create"
				},
				slot: "producer-create"
			},
			{
				tag: "div",
				props: { class: "sbpc-layout" },
				children: [{
					tag: "aside",
					props: { class: "sbpc-sidebar" },
					children: [{
						tag: "div",
						props: {
							class: "sbpc-side-heading",
							"data-sb-workspace": "producer-search"
						},
						slot: "producer-search"
					}, {
						tag: "div",
						props: {
							id: "sbpc-list",
							class: "sbpc-song-list",
							"data-sb-vue-producer-list": ""
						},
						slot: "sbpc-list"
					}]
				}, {
					tag: "div",
					props: { class: "sbpc-empty-state" },
					children: [{
						tag: "strong",
						props: {},
						children: [{ text: "Пока нет песен в работе" }]
					}, {
						tag: "p",
						props: {},
						children: [{ text: "Мастер объединяет уже созданные идеи, текст, аранжировку, генерации, прослушивание и релизы." }]
					}]
				}]
			},
			{
				tag: "p",
				props: { class: "sbpc-privacy" },
				children: [{ text: "🔒 Локальная работа: синхронизации между устройствами нет. Аудиофайлы остаются в «Мои песни»; сам раздел «Мастер» хранит только ссылки, этапы, заметки, историю и снимок аранжировки." }]
			}
		]
	}],
	tracks: [
		{
			tag: "div",
			props: {
				class: "account-back",
				"data-sb-workspace": "back"
			},
			slot: "back"
		},
		{
			tag: "header",
			props: { class: "heading" },
			children: [
				{
					tag: "div",
					props: { class: "eyebrow" },
					children: [{ text: "ОТ ПЕРВОЙ ИДЕИ ДО РЕЛИЗА" }]
				},
				{
					tag: "h1",
					props: {},
					children: [{ text: "🎼 Паспорт трека" }]
				},
				{
					tag: "p",
					props: {},
					children: [{ text: "Исполнитель, текст, аранжировка, промпты, версии, обложка, издательство и дата релиза — в одной карточке." }]
				}
			]
		},
		{
			tag: "div",
			props: { class: "sb-track-metrics" },
			children: [
				{
					tag: "div",
					props: {},
					children: [{
						tag: "b",
						props: {},
						children: [{ value: "trackCount" }]
					}, {
						tag: "span",
						props: {},
						children: [{ text: "Всего треков" }]
					}]
				},
				{
					tag: "div",
					props: {},
					children: [{
						tag: "b",
						props: {},
						children: [{ value: "trackPublisher" }]
					}, {
						tag: "span",
						props: {},
						children: [{ text: "У издательства" }]
					}]
				},
				{
					tag: "div",
					props: {},
					children: [{
						tag: "b",
						props: {},
						children: [{ value: "trackReleased" }]
					}, {
						tag: "span",
						props: {},
						children: [{ text: "Вышли" }]
					}]
				}
			]
		},
		{
			tag: "div",
			props: {
				class: "sb-track-toolbar",
				"data-sb-workspace": "track-toolbar"
			},
			slot: "track-toolbar"
		},
		{
			tag: "div",
			props: {
				id: "sb-vue-track-list",
				"data-sb-vue-track-list": ""
			},
			slot: "sb-vue-track-list"
		}
	],
	artists: [
		{
			tag: "div",
			props: {
				class: "account-back",
				"data-sb-workspace": "back"
			},
			slot: "back"
		},
		{
			tag: "header",
			props: { class: "heading" },
			children: [
				{
					tag: "div",
					props: { class: "eyebrow" },
					children: [{ text: "ПОСТОЯННОЕ ЗВУЧАНИЕ И ОБРАЗ" }]
				},
				{
					tag: "h1",
					props: {},
					children: [{ text: "🧬 ДНК артиста" }]
				},
				{
					tag: "p",
					props: {},
					children: [{ text: "Храни характер вокала, музыкальный стиль, инструменты, запреты и визуальную идентичность каждого исполнителя." }]
				}
			]
		},
		{
			tag: "div",
			props: { class: "sb-dna-summary" },
			children: [{
				tag: "div",
				props: {},
				children: [{
					tag: "b",
					props: {},
					children: [{ value: "dnaCount" }]
				}, {
					tag: "span",
					props: {},
					children: [{ text: "Профилей артистов" }]
				}]
			}, {
				tag: "div",
				props: {},
				children: [{
					tag: "b",
					props: {},
					children: [{ value: "dnaTracks" }]
				}, {
					tag: "span",
					props: {},
					children: [{ text: "Связанных треков" }]
				}]
			}]
		},
		{
			tag: "div",
			props: {
				class: "sb-dna-toolbar",
				"data-sb-workspace": "dna-toolbar"
			},
			slot: "dna-toolbar"
		},
		{
			tag: "div",
			props: { id: "sb-vue-dna-view" },
			slot: "sb-vue-dna-view"
		}
	],
	songs: [{
		tag: "section",
		props: {
			class: "sbsong-page",
			id: "sbsong-page"
		},
		children: [
			{
				tag: "header",
				props: {
					class: "sbsong-hero",
					"data-sb-workspace": "songs-header"
				},
				slot: "songs-header"
			},
			{
				tag: "div",
				props: { class: "sbsong-privacy" },
				children: [{ text: "🔒 Это локальная библиотека в браузере, а не защищённое облачное хранилище. Карточки не синхронизируются между устройствами. Ссылку на песню можно отправить отдельно — она откроет только выбранные для публикации сведения." }]
			},
			{
				tag: "p",
				props: {
					class: "sbsong-notice",
					id: "sbsong-notice",
					role: "status",
					"aria-live": "polite",
					hidden: !0
				},
				children: [],
				bind: "songNotice"
			},
			{
				tag: "div",
				props: {
					class: "sbsong-collection-head",
					"data-sb-workspace": "songs-search"
				},
				slot: "songs-search"
			},
			{
				tag: "div",
				props: { id: "sb-vue-song-cards" },
				slot: "sb-vue-song-cards"
			}
		]
	}],
	mixer: [{
		tag: "div",
		props: {
			class: "gm-page",
			id: "sb-vue-mixer-root"
		},
		slot: "sb-vue-mixer-root"
	}],
	"account-settings": [{
		tag: "div",
		props: { id: "sb-vue-account-settings" },
		slot: "sb-vue-account-settings"
	}],
	detail: [{
		tag: "div",
		props: { id: "sb-vue-genre-detail" },
		slot: "sb-vue-genre-detail"
	}],
	"tracks-editor": [
		{
			tag: "div",
			props: {
				class: "account-back",
				"data-sb-workspace": "back"
			},
			slot: "back"
		},
		{
			tag: "header",
			props: { class: "heading" },
			children: [
				{
					tag: "div",
					props: { class: "eyebrow" },
					children: [{ text: "ОТ ПЕРВОЙ ИДЕИ ДО РЕЛИЗА" }]
				},
				{
					tag: "h1",
					props: {},
					children: [{ text: "🎼 Паспорт трека" }]
				},
				{
					tag: "p",
					props: {},
					children: [{ text: "Исполнитель, текст, аранжировка, промпты, версии, обложка, издательство и дата релиза — в одной карточке." }]
				}
			]
		},
		{
			tag: "div",
			props: { class: "sb-track-metrics" },
			children: [
				{
					tag: "div",
					props: {},
					children: [{
						tag: "b",
						props: {},
						children: [{ value: "trackCount" }]
					}, {
						tag: "span",
						props: {},
						children: [{ text: "Всего треков" }]
					}]
				},
				{
					tag: "div",
					props: {},
					children: [{
						tag: "b",
						props: {},
						children: [{ value: "trackPublisher" }]
					}, {
						tag: "span",
						props: {},
						children: [{ text: "У издательства" }]
					}]
				},
				{
					tag: "div",
					props: {},
					children: [{
						tag: "b",
						props: {},
						children: [{ value: "trackReleased" }]
					}, {
						tag: "span",
						props: {},
						children: [{ text: "Вышли" }]
					}]
				}
			]
		},
		{
			tag: "div",
			props: {
				class: "sb-track-toolbar",
				"data-sb-workspace": "track-toolbar"
			},
			slot: "track-toolbar"
		},
		{
			tag: "div",
			props: {
				id: "sb-vue-track-editor",
				"data-sb-vue-track-editor": ""
			},
			slot: "sb-vue-track-editor"
		}
	],
	"tracks-detail": [
		{
			tag: "div",
			props: {
				class: "account-back",
				"data-sb-workspace": "back"
			},
			slot: "back"
		},
		{
			tag: "header",
			props: { class: "heading" },
			children: [
				{
					tag: "div",
					props: { class: "eyebrow" },
					children: [{ text: "ОТ ПЕРВОЙ ИДЕИ ДО РЕЛИЗА" }]
				},
				{
					tag: "h1",
					props: {},
					children: [{ text: "🎼 Паспорт трека" }]
				},
				{
					tag: "p",
					props: {},
					children: [{ text: "Исполнитель, текст, аранжировка, промпты, версии, обложка, издательство и дата релиза — в одной карточке." }]
				}
			]
		},
		{
			tag: "div",
			props: { class: "sb-track-metrics" },
			children: [
				{
					tag: "div",
					props: {},
					children: [{
						tag: "b",
						props: {},
						children: [{ value: "trackCount" }]
					}, {
						tag: "span",
						props: {},
						children: [{ text: "Всего треков" }]
					}]
				},
				{
					tag: "div",
					props: {},
					children: [{
						tag: "b",
						props: {},
						children: [{ value: "trackPublisher" }]
					}, {
						tag: "span",
						props: {},
						children: [{ text: "У издательства" }]
					}]
				},
				{
					tag: "div",
					props: {},
					children: [{
						tag: "b",
						props: {},
						children: [{ value: "trackReleased" }]
					}, {
						tag: "span",
						props: {},
						children: [{ text: "Вышли" }]
					}]
				}
			]
		},
		{
			tag: "div",
			props: {
				class: "sb-track-toolbar",
				"data-sb-workspace": "track-toolbar"
			},
			slot: "track-toolbar"
		},
		{
			tag: "div",
			props: {
				id: "sb-vue-track-detail",
				"data-sb-vue-track-detail": ""
			},
			slot: "sb-vue-track-detail"
		}
	],
	"artists-editor": [
		{
			tag: "div",
			props: {
				class: "account-back",
				"data-sb-workspace": "back"
			},
			slot: "back"
		},
		{
			tag: "header",
			props: { class: "heading" },
			children: [
				{
					tag: "div",
					props: { class: "eyebrow" },
					children: [{ text: "ПОСТОЯННОЕ ЗВУЧАНИЕ И ОБРАЗ" }]
				},
				{
					tag: "h1",
					props: {},
					children: [{ text: "🧬 ДНК артиста" }]
				},
				{
					tag: "p",
					props: {},
					children: [{ text: "Храни характер вокала, музыкальный стиль, инструменты, запреты и визуальную идентичность каждого исполнителя." }]
				}
			]
		},
		{
			tag: "div",
			props: { class: "sb-dna-summary" },
			children: [{
				tag: "div",
				props: {},
				children: [{
					tag: "b",
					props: {},
					children: [{ value: "dnaCount" }]
				}, {
					tag: "span",
					props: {},
					children: [{ text: "Профилей артистов" }]
				}]
			}, {
				tag: "div",
				props: {},
				children: [{
					tag: "b",
					props: {},
					children: [{ value: "dnaTracks" }]
				}, {
					tag: "span",
					props: {},
					children: [{ text: "Связанных треков" }]
				}]
			}]
		},
		{
			tag: "div",
			props: {
				class: "sb-dna-toolbar",
				"data-sb-workspace": "dna-toolbar"
			},
			slot: "dna-toolbar"
		},
		{
			tag: "div",
			props: { id: "sb-vue-dna-editor" },
			slot: "sb-vue-dna-editor"
		}
	],
	"producer-detail": [{
		tag: "div",
		props: { class: "sbpc-page" },
		children: [
			{
				tag: "header",
				props: { class: "sbpc-hero" },
				children: [
					{
						tag: "span",
						props: { class: "sbpc-kicker" },
						children: [{ text: "SUNOBOOM · РАБОЧЕЕ ПРОСТРАНСТВО" }]
					},
					{
						tag: "h1",
						props: {},
						children: [{ text: "Мастер " }, {
							tag: "span",
							props: {},
							children: [{ text: "✦" }]
						}]
					},
					{
						tag: "p",
						props: {},
						children: [{ text: "От идеи до релиза — единая рабочая карточка песни. Материалы связаны с существующими инструментами SUNOBOOM." }]
					},
					{
						tag: "div",
						props: { class: "sbpc-hero-stats" },
						children: [
							{
								tag: "span",
								props: {},
								children: [{
									tag: "strong",
									props: {},
									children: [{ value: "productionCount" }]
								}, { text: " песен в работе" }]
							},
							{
								tag: "span",
								props: {},
								children: [{
									tag: "strong",
									props: {},
									children: [{ value: "productionDone" }]
								}, { text: " полностью пройдено" }]
							},
							{
								tag: "span",
								props: {},
								children: [{ text: "Хранение: этот браузер" }]
							}
						]
					}
				]
			},
			{
				tag: "section",
				props: {
					class: "sbpc-create",
					"data-sb-workspace": "producer-create"
				},
				slot: "producer-create"
			},
			{
				tag: "div",
				props: { class: "sbpc-layout" },
				children: [{
					tag: "aside",
					props: { class: "sbpc-sidebar" },
					children: [{
						tag: "div",
						props: {
							class: "sbpc-side-heading",
							"data-sb-workspace": "producer-search"
						},
						slot: "producer-search"
					}, {
						tag: "div",
						props: {
							id: "sbpc-list",
							class: "sbpc-song-list",
							"data-sb-vue-producer-list": ""
						},
						slot: "sbpc-list"
					}]
				}, {
					tag: "div",
					props: {
						id: "sb-vue-producer-detail",
						"data-sb-vue-producer-host": ""
					},
					slot: "sb-vue-producer-detail"
				}]
			},
			{
				tag: "p",
				props: { class: "sbpc-privacy" },
				children: [{ text: "🔒 Локальная работа: синхронизации между устройствами нет. Аудиофайлы остаются в «Мои песни»; сам раздел «Мастер» хранит только ссылки, этапы, заметки, историю и снимок аранжировки." }]
			}
		]
	}],
	"songs-detail": [{
		tag: "section",
		props: {
			class: "sbsong-page",
			id: "sbsong-page"
		},
		children: [
			{
				tag: "header",
				props: {
					class: "sbsong-hero",
					"data-sb-workspace": "songs-header"
				},
				slot: "songs-header"
			},
			{
				tag: "div",
				props: { class: "sbsong-privacy" },
				children: [{ text: "🔒 Это локальная библиотека в браузере, а не защищённое облачное хранилище. Карточки не синхронизируются между устройствами. Ссылку на песню можно отправить отдельно — она откроет только выбранные для публикации сведения." }]
			},
			{
				tag: "p",
				props: {
					class: "sbsong-notice",
					id: "sbsong-notice",
					role: "status",
					"aria-live": "polite",
					hidden: !0
				},
				children: [],
				bind: "songNotice"
			},
			{
				tag: "div",
				props: { id: "sb-vue-song-detail" },
				slot: "sb-vue-song-detail"
			},
			{
				tag: "div",
				props: {
					class: "sbsong-collection-head",
					"data-sb-workspace": "songs-search"
				},
				slot: "songs-search"
			},
			{
				tag: "div",
				props: { id: "sb-vue-song-cards" },
				slot: "sb-vue-song-cards"
			}
		]
	}],
	"songs-manager-detail": [{
		tag: "section",
		props: {
			class: "sbsong-page",
			id: "sbsong-page"
		},
		children: [
			{
				tag: "header",
				props: {
					class: "sbsong-hero",
					"data-sb-workspace": "songs-header"
				},
				slot: "songs-header"
			},
			{
				tag: "div",
				props: { class: "sbsong-privacy" },
				children: [{ text: "🔒 Это локальная библиотека в браузере, а не защищённое облачное хранилище. Карточки не синхронизируются между устройствами. Ссылку на песню можно отправить отдельно — она откроет только выбранные для публикации сведения." }]
			},
			{
				tag: "p",
				props: {
					class: "sbsong-notice",
					id: "sbsong-notice",
					role: "status",
					"aria-live": "polite",
					hidden: !0
				},
				children: [],
				bind: "songNotice"
			},
			{
				tag: "div",
				props: { id: "sb-vue-artist-manager" },
				slot: "sb-vue-artist-manager"
			},
			{
				tag: "div",
				props: { id: "sb-vue-song-detail" },
				slot: "sb-vue-song-detail"
			},
			{
				tag: "div",
				props: {
					class: "sbsong-collection-head",
					"data-sb-workspace": "songs-search"
				},
				slot: "songs-search"
			},
			{
				tag: "div",
				props: { id: "sb-vue-song-cards" },
				slot: "sb-vue-song-cards"
			}
		]
	}],
	"songs-editor": [{
		tag: "section",
		props: {
			class: "sbsong-page",
			id: "sbsong-page"
		},
		children: [
			{
				tag: "header",
				props: {
					class: "sbsong-hero",
					"data-sb-workspace": "songs-header"
				},
				slot: "songs-header"
			},
			{
				tag: "div",
				props: { class: "sbsong-privacy" },
				children: [{ text: "🔒 Это локальная библиотека в браузере, а не защищённое облачное хранилище. Карточки не синхронизируются между устройствами. Ссылку на песню можно отправить отдельно — она откроет только выбранные для публикации сведения." }]
			},
			{
				tag: "p",
				props: {
					class: "sbsong-notice",
					id: "sbsong-notice",
					role: "status",
					"aria-live": "polite",
					hidden: !0
				},
				children: [],
				bind: "songNotice"
			},
			{
				tag: "div",
				props: { id: "sb-vue-song-editor" },
				slot: "sb-vue-song-editor"
			},
			{
				tag: "div",
				props: {
					class: "sbsong-collection-head",
					"data-sb-workspace": "songs-search"
				},
				slot: "songs-search"
			},
			{
				tag: "div",
				props: { id: "sb-vue-song-cards" },
				slot: "sb-vue-song-cards"
			}
		]
	}],
	"songs-manager": [{
		tag: "section",
		props: {
			class: "sbsong-page",
			id: "sbsong-page"
		},
		children: [
			{
				tag: "header",
				props: {
					class: "sbsong-hero",
					"data-sb-workspace": "songs-header"
				},
				slot: "songs-header"
			},
			{
				tag: "div",
				props: { class: "sbsong-privacy" },
				children: [{ text: "🔒 Это локальная библиотека в браузере, а не защищённое облачное хранилище. Карточки не синхронизируются между устройствами. Ссылку на песню можно отправить отдельно — она откроет только выбранные для публикации сведения." }]
			},
			{
				tag: "p",
				props: {
					class: "sbsong-notice",
					id: "sbsong-notice",
					role: "status",
					"aria-live": "polite",
					hidden: !0
				},
				children: [],
				bind: "songNotice"
			},
			{
				tag: "div",
				props: { id: "sb-vue-artist-manager" },
				slot: "sb-vue-artist-manager"
			},
			{
				tag: "div",
				props: {
					class: "sbsong-collection-head",
					"data-sb-workspace": "songs-search"
				},
				slot: "songs-search"
			},
			{
				tag: "div",
				props: { id: "sb-vue-song-cards" },
				slot: "sb-vue-song-cards"
			}
		]
	}],
	sharedSong: [{
		tag: "section",
		props: {
			class: "sbsong-page sbsong-shared",
			id: "sbsong-shared"
		},
		slot: "sbsong-shared"
	}]
};
// src/vue/pages/page-layout-model.js
function ff({ key: e, values: t = {} }) {
	let n = df[e];
	if (!n) throw Error("Unknown page model: " + e);
	function r(e) {
		if (e.value) return { text: String(t[e.value] ?? "") };
		if ("text" in e) return { ...e };
		let n = { ...e.props }, i = e.children?.map(r);
		return e.bind === "songNotice" ? (n.hidden = !t.songNotice, i = [{ text: String(t.songNotice || "") }]) : e.bind === "treeOpen" ? n.open = !!t.treeOpen : e.bind === "energyChart" ? n["aria-label"] = t.energyChart : e.bind === "mixerBanner" ? n.class = "gm-studio-banner" + (t.mixerActive ? " gm-studio-active" : "") : (e.bind === "playerAB" || e.bind === "playerLab") && (n.hidden = !!t[e.bind]), {
			tag: e.tag,
			props: n,
			...i ? { children: i } : {},
			...e.slot ? { slot: e.slot } : {},
			...e.native ? { native: !0 } : {}
		};
	}
	let i = n.map(r);
	return e === "home" && t.noticeBanner && i.unshift({
		tag: "div",
		props: {
			"data-sb-workspace": "notice-banner",
			style: "display:contents"
		},
		slot: "notice-banner"
	}), i;
}
Object.freeze(Object.keys(df));
// src/vue/pages/page-model.js
function pf(e, t) {
	let n = [];
	function r(e) {
		if (e.slot) {
			let r = t(e.slot);
			if (!r) throw Error("Missing feature: " + e.slot);
			return n.push(e.slot), {
				tag: e.tag,
				props: {
					...e.props,
					"data-v-app": "",
					"data-sb-composed-feature": ""
				},
				feature: r
			};
		}
		return e.native ? {
			tag: e.tag,
			props: e.props,
			nativeBoundary: e.props.id
		} : e.children ? {
			...e,
			children: e.children.map(r)
		} : e;
	}
	return {
		layout: ff(e).map(r),
		features: n
	};
}
// src/vue/academy/GenreCards.vue
var mf = ["data-id"], hf = { class: "genre-content" }, gf = { class: "kicker" }, _f = { class: "foot" }, vf = {
	__name: "GenreCards",
	props: { genres: {
		type: Array,
		required: !0
	} },
	setup(e) {
		return (t, n) => (H(!0), U(V, null, B(e.genres, (e) => (H(), U("button", {
			key: e.id,
			type: "button",
			class: "genre-card",
			style: O({ "--accent": e.color }),
			"data-action": "genre",
			"data-id": e.id
		}, [n[1] ||= W("div", {
			class: "art",
			"aria-hidden": "true"
		}, null, -1), W("div", hf, [W("div", null, [
			W("div", gf, A(e.family) + " · " + A(e.bpm[0]) + "–" + A(e.bpm[1]) + " BPM", 1),
			W("h3", null, A(e.name), 1),
			W("p", null, A(e.tagline), 1)
		]), W("div", _f, [W("span", null, A(e.era), 1), n[0] ||= W("span", { style: { color: "#ffacd9" } }, "Открыть →", -1)])])], 12, mf))), 128));
	}
}, yf = ["open"], bf = {
	key: 0,
	id: "sb-ap-hub-content"
}, xf = { class: "sb-ap-heading" }, Sf = { class: "sb-ap-total" }, Cf = { class: "sb-ap-tools" }, wf = ["value"], Tf = ["value"], Ef = { class: "sb-ap-check" }, Df = ["checked"], Of = {
	id: "sb-ap-count",
	class: "sb-ap-count",
	"aria-live": "polite"
}, kf = {
	id: "sb-ap-results",
	class: "sb-ap-index-grid"
}, Af = { class: "sb-ap-index-title" }, jf = { class: "sb-ap-avatar" }, Mf = { class: "sb-ap-chips" }, Nf = { class: "sb-ap-card-actions" }, Pf = ["data-name", "onClick"], Ff = [
	"data-name",
	"aria-pressed",
	"aria-label",
	"onClick"
], If = {
	key: 0,
	class: "sb-ap-empty"
}, Lf = ["hidden"], Rf = {
	__name: "ArtistProfileHub",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ F(t.api.hubSnapshot());
		return Mr(t.api.subscribe(() => {
			n.value = t.api.hubSnapshot();
		})), (t, r) => (H(), U("details", {
			id: "sb-ap-hub",
			class: "sb-ap-hub",
			"data-sb-vue-profile-hub": "",
			open: n.value.open,
			onToggle: r[4] ||= (t) => e.api.setOpen(t.currentTarget.open)
		}, [r[11] ||= W("summary", null, [
			W("span", { class: "sb-ap-sym" }, "🎙️"),
			W("span", null, [W("strong", null, "Профили исполнителей"), W("small", null, "Мировая и русскоязычная сцены SUNOBOOM")]),
			W("span", { class: "sb-ap-chevron" }, "⌄")
		], -1), n.value.open ? (H(), U("div", bf, [
			W("div", xf, [r[5] ||= W("div", null, [
				W("span", { class: "sb-ap-overline" }, "SUNOBOOM · МУЗЫКАЛЬНАЯ АКАДЕМИЯ"),
				W("h2", null, "Энциклопедия исполнителей"),
				W("p", null, "Все существующие подборки артистов собраны в единый указатель. Профиль показывает сведения из Академии, а для отдельных исполнителей — расширенную редакционную справку.")
			], -1), W("div", Sf, A(n.value.total) + " имён в базе", 1)]),
			W("div", Cf, [
				W("label", null, [r[6] ||= K("Поиск по имени или жанру", -1), W("input", {
					id: "sb-ap-search",
					type: "search",
					placeholder: "Например: Distemper или поп",
					autocomplete: "off",
					value: n.value.query,
					onInput: r[0] ||= Z((t) => e.api.filter({ query: t.target.value }), ["stop"])
				}, null, 40, wf)]),
				W("label", null, [r[8] ||= K("Подборка", -1), W("select", {
					id: "sb-ap-locale",
					value: n.value.locale,
					onChange: r[1] ||= Z((t) => e.api.filter({ locale: t.target.value }), ["stop"])
				}, [...r[7] ||= [
					W("option", { value: "all" }, "Все сцены", -1),
					W("option", { value: "ru" }, "Русскоязычная сцена", -1),
					W("option", { value: "world" }, "Мировая сцена", -1)
				]], 40, Tf)]),
				W("label", Ef, [W("input", {
					id: "sb-ap-saved-only",
					type: "checkbox",
					checked: n.value.savedOnly,
					onChange: r[2] ||= Z((t) => e.api.filter({ savedOnly: t.target.checked }), ["stop"])
				}, null, 40, Df), r[9] ||= K(" Только избранные", -1)])
			]),
			W("p", Of, "Найдено " + A(n.value.count) + " исполнителей · в избранном " + A(n.value.favorites), 1),
			W("div", kf, [(H(!0), U(V, null, B(n.value.artists, (t) => (H(), U("article", {
				key: t.key,
				class: "sb-ap-index-card"
			}, [
				W("div", Af, [W("span", jf, A(t.initials), 1), W("div", null, [W("strong", null, A(t.name), 1), W("small", null, A(t.scene), 1)])]),
				W("p", null, A(t.overview), 1),
				W("div", Mf, [(H(!0), U(V, null, B(t.genres, (e) => (H(), U("span", { key: e }, A(e), 1))), 128))]),
				W("div", Nf, [W("button", {
					type: "button",
					"data-sb-ap-action": "profile",
					"data-name": t.name,
					onClick: Z((n) => e.api.openProfile(t.name, null, n.currentTarget), ["stop"])
				}, "Открыть профиль", 8, Pf), W("button", {
					type: "button",
					"data-sb-ap-action": "favorite",
					"data-name": t.name,
					"aria-pressed": t.favorite,
					title: "Сохранить профиль",
					"aria-label": "Сохранить профиль " + t.name,
					onClick: Z((n) => e.api.toggleFavorite(t.name), ["stop"])
				}, A(t.favorite ? "★" : "☆"), 9, Ff)])
			]))), 128)), n.value.artists.length ? q("", !0) : (H(), U("div", If, "По этому запросу исполнители не найдены. Попробуй другое название или отключи фильтры."))]),
			W("button", {
				type: "button",
				id: "sb-ap-more",
				class: "sb-ap-more",
				"data-sb-ap-action": "more",
				hidden: !n.value.remaining,
				onClick: r[3] ||= Z((t) => e.api.more(), ["stop"])
			}, "Показать ещё · " + A(n.value.remaining), 9, Lf),
			r[10] ||= W("p", { class: "sb-ap-disclaimer" }, "Периоды в исходных карточках ориентировочные. Присутствие в подборке жанра не обязательно означает, что это единственное направление или прямое влияние на исполнителя.", -1)
		])) : q("", !0)], 40, yf));
	}
}, zf = { class: "genre-family-toolbar" }, Bf = { class: "search-box" }, Vf = ["innerHTML"], Hf = { class: "hint" }, Uf = { class: "genre-family-summary" }, Wf = { id: "catalog-count" }, Gf = ["data-id"], Kf = {
	class: "hint",
	id: "sb-academy-search-hint"
}, qf = {
	id: "catalog-cards",
	class: "genre-families"
}, Jf = [
	"data-family",
	"open",
	"onToggle"
], Yf = {
	class: "genre-family-icon",
	"aria-hidden": "true"
}, Xf = { class: "genre-family-heading" }, Zf = { class: "genre-family-right" }, Qf = { class: "genre-family-count" }, $f = { class: "genre-family-body" }, ep = {
	key: 0,
	class: "sb-sacred-index"
}, tp = {
	key: 0,
	class: "sb-sacred-overview"
}, np = { class: "genre-grid" }, rp = { class: "sb-sacred-religions" }, ip = [
	"data-sb-religion",
	"open",
	"onToggle"
], ap = { class: "sb-sacred-religion-header" }, op = {
	class: "sb-sacred-religion-icon",
	"aria-hidden": "true"
}, sp = { class: "sb-sacred-religion-label" }, cp = { class: "sb-sacred-count" }, lp = { class: "sb-sacred-religion-content" }, up = [
	"data-sb-branch",
	"open",
	"onToggle"
], dp = { class: "sb-sacred-branch-header" }, fp = { class: "sb-sacred-branch-label" }, pp = { class: "sb-sacred-count" }, mp = { class: "sb-sacred-branch-content" }, hp = { class: "genre-grid" }, gp = {
	key: 1,
	class: "genre-grid"
}, _p = {
	key: 1,
	class: "genre-family-empty"
}, vp = {
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
		let t = e, n = $(), r = /* @__PURE__ */ P(t.snapshot.query || ""), i = /* @__PURE__ */ M({
			family: { ...t.snapshot.expanded?.family || {} },
			religion: { ...t.snapshot.expanded?.religion || {} },
			branch: { ...t.snapshot.expanded?.branch || {} }
		}), a = J(() => t.search(r.value)), o = J(() => !!r.value.trim()), s = J(() => {
			let e = a.value.ids == null ? null : new Set(a.value.ids);
			return (t.snapshot.families || []).map((t) => ({
				...t,
				genres: t.genres.filter((t) => !e || e.has(t.id))
			})).filter((e) => e.genres.length);
		}), c = J(() => s.value.reduce((e, t) => e + t.genres.length, 0)), l = J(() => o.value ? {
			name: "По названиям жанров",
			family: "По направлениям",
			artist: "По исполнителям",
			description: "По описаниям и звучанию"
		}[a.value.mode] || "" : "Поиск работает при вводе"), u = J(() => s.value.find((e) => e.name === "Религиозная музыка")), d = J(() => u.value?.genres.find((e) => e.id === "sacred-music")), f = J(() => {
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
		R([
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
		let m = J(() => (t.snapshot.families || []).flatMap((e) => e.genres).find((e) => e.id === n.academyFocus.genreId) || null);
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
		return (t, n) => (H(), U(V, null, [
			e.artistProfiles ? (H(), fa(Rf, {
				key: 0,
				api: e.artistProfiles
			}, null, 8, ["api"])) : q("", !0),
			W("div", zf, [W("label", Bf, [W("span", {
				innerHTML: e.searchIcon,
				"aria-hidden": "true"
			}, null, 8, Vf), L(W("input", {
				id: "genre-search",
				"onUpdate:modelValue": n[0] ||= (e) => r.value = e,
				type: "search",
				enterkeyhint: "search",
				autocapitalize: "off",
				spellcheck: "false",
				"aria-label": "Поиск жанров",
				placeholder: "Поиск жанра, поджанра или исполнителя…",
				autocomplete: "off"
			}, null, 512), [[Y, r.value]])]), W("span", Hf, A(e.snapshot.families.length) + " разделов · " + A(e.snapshot.families.reduce((e, t) => e + t.genres.length, 0)) + " жанров", 1)]),
			W("div", Uf, [
				W("h2", Wf, A(o.value ? "Найдено жанров" : "Музыкальные жанры") + " · " + A(c.value), 1),
				m.value ? (H(), U("button", {
					key: 0,
					type: "button",
					class: "btn ghost small",
					"data-sb-last-genre": "",
					"data-action": "genre",
					"data-id": m.value.id
				}, " ↶ Последний жанр: " + A(m.value.name), 9, Gf)) : q("", !0),
				W("span", Kf, A(l.value), 1)
			]),
			W("div", qf, [s.value.length ? (H(!0), U(V, { key: 0 }, B(s.value, (e) => (H(), U("details", {
				key: e.name,
				class: "genre-family",
				"data-family": e.name,
				style: O({ "--family-accent": e.meta.accent }),
				open: h("family", e.name),
				onToggle: (t) => g("family", e.name, t)
			}, [W("summary", null, [
				W("span", Yf, A(e.meta.icon), 1),
				W("span", Xf, [W("strong", null, A(e.name), 1), W("small", null, A(e.meta.desc), 1)]),
				W("span", Zf, [W("span", Qf, A(e.genres.length) + " " + A(_(e.genres.length)), 1), n[1] ||= W("svg", {
					class: "genre-family-chevron",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2",
					"aria-hidden": "true"
				}, [W("path", { d: "m5 9 7 7 7-7" })], -1)])
			]), W("div", $f, [e.name === "Религиозная музыка" ? (H(), U("div", ep, [
				n[5] ||= W("div", { class: "sb-sacred-intro" }, [
					W("span", { class: "sb-sacred-eyebrow" }, "МУЗЫКА МИРОВЫХ РЕЛИГИЙ"),
					W("h3", null, "Религии и музыкальные традиции"),
					W("p", null, "Открой религию, затем её направление или течение. Здесь представлены музыкальные традиции — их границы не всегда совпадают с конфессиональными.")
				], -1),
				d.value ? (H(), U("div", tp, [n[2] ||= W("div", { class: "sb-sacred-overview-label" }, "📖 Обзор раздела", -1), W("div", np, [G(vf, { genres: [d.value] }, null, 8, ["genres"])])])) : q("", !0),
				W("div", rp, [(H(!0), U(V, null, B(f.value, (e) => (H(), U("details", {
					key: e.id,
					class: "sb-sacred-religion",
					"data-sb-religion": e.id,
					open: h("religion", e.id),
					onToggle: (t) => g("religion", e.id, t)
				}, [W("summary", ap, [
					W("span", op, A(e.icon), 1),
					W("span", sp, [W("strong", null, A(e.name), 1), W("small", null, A(e.description), 1)]),
					W("span", cp, A(e.count), 1),
					n[3] ||= W("span", {
						class: "sb-sacred-chevron",
						"aria-hidden": "true"
					}, "⌄", -1)
				]), W("div", lp, [(H(!0), U(V, null, B(e.branches, (e) => (H(), U("details", {
					key: e.id,
					class: "sb-sacred-branch",
					"data-sb-branch": e.id,
					open: h("branch", e.id),
					onToggle: (t) => g("branch", e.id, t)
				}, [W("summary", dp, [
					W("span", fp, [W("strong", null, A(e.name), 1), W("small", null, A(e.description), 1)]),
					W("span", pp, A(e.genres.length) + " " + A(v(e.genres.length)), 1),
					n[4] ||= W("span", {
						class: "sb-sacred-chevron",
						"aria-hidden": "true"
					}, "⌄", -1)
				]), W("div", mp, [W("div", hp, [G(vf, { genres: e.genres }, null, 8, ["genres"])])])], 40, up))), 128))])], 40, ip))), 128))])
			])) : (H(), U("div", gp, [G(vf, { genres: e.genres }, null, 8, ["genres"])]))])], 44, Jf))), 128)) : (H(), U("div", _p, "Ничего не найдено. Попробуй другой запрос."))])
		], 64));
	}
}, yp = Symbol("file-input-handoff"), bp = /* @__PURE__ */ mr({
	inheritAttrs: !1,
	setup(e, { attrs: t }) {
		let n = Hn(yp, null)?.(t), r = /* @__PURE__ */ P(null);
		return z(() => {
			n && r.value?.replaceChildren(n);
		}), () => n ? Ja("span", {
			ref: r,
			style: "display:contents",
			"data-sb-file-boundary": ""
		}) : Ja("input", {
			...t,
			type: "file"
		});
	}
});
function xp(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e?.querySelectorAll("input[type=\"file\"]") || []) if (n.files?.length) {
		let e = n.id || n.name;
		e && t.set(e, n);
	}
	return t;
}
// src/vue/account/AccountSummary.vue
var Sp = { class: "account-avatar" }, Cp = { class: "stat" }, wp = { class: "stat" }, Tp = { class: "stat" }, Ep = {
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
		return (t, n) => e.kind === "profile" ? (H(), U(V, { key: 0 }, [W("div", Sp, A(e.model.avatar), 1), W("div", null, [
			W("h2", null, A(e.model.name), 1),
			n[0] ||= W("p", null, "Локальный профиль · SUNOBOOM 0.55", -1),
			n[1] ||= W("span", { class: "small-chip" }, "Данные хранятся в этом браузере", -1)
		])], 64)) : (H(), U(V, { key: 1 }, [
			W("div", Cp, [W("div", null, [W("strong", null, A(e.model.counts.projects), 1), n[2] ||= W("span", null, "моих проектов", -1)])]),
			W("div", wp, [W("div", null, [W("strong", null, A(e.model.counts.favorites), 1), n[3] ||= W("span", null, "любимых жанров", -1)])]),
			W("div", Tp, [W("div", null, [W("strong", null, A(e.model.counts.saved), 1), n[4] ||= W("span", null, "сохранённых идей и промптов", -1)])])
		], 64));
	}
}, Dp = {
	id: "sb-vue-account-profile",
	class: "account-head panel"
}, Op = { class: "account-grid" }, kp = { class: "two-col account-settings" }, Ap = { class: "panel" }, jp = { class: "field" }, Mp = {
	type: "button",
	class: "btn primary",
	"data-action": "save-profile"
}, Np = ["innerHTML"], Pp = { class: "panel" }, Fp = { class: "detail-actions" }, Ip = {
	type: "button",
	class: "btn ghost",
	"data-action": "export"
}, Lp = ["innerHTML"], Rp = {
	type: "button",
	class: "btn ghost",
	"data-action": "import"
}, zp = ["innerHTML"], Bp = {
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
		let t = e, n = /* @__PURE__ */ M({ name: t.initial.profileName }), r = /* @__PURE__ */ P(null), i = () => t.api.syncStats(r.value);
		return z(i), (t, a) => (H(), U(V, null, [
			a[9] ||= W("header", { class: "heading" }, [
				W("div", { class: "eyebrow" }, "ЛИЧНОЕ ПРОСТРАНСТВО"),
				W("h1", null, "Личный кабинет"),
				W("p", null, "Твои музыкальные проекты, избранные материалы и резервные копии — всё в одном месте.")
			], -1),
			W("div", Dp, [G(Ep, {
				model: e.initial.summary,
				kind: "profile"
			}, null, 8, ["model"])]),
			W("div", {
				id: "sb-vue-account-stats",
				ref_key: "stats",
				ref: r,
				class: "account-stats",
				onScrollPassive: i
			}, [G(Ep, {
				model: e.initial.summary,
				kind: "stats"
			}, null, 8, ["model"])], 544),
			W("div", Op, [(H(!0), U(V, null, B(e.initial.tiles, (e) => (H(), U("button", wa({ key: e.key }, { ref_for: !0 }, e.attrs), [(H(!0), U(V, null, B(e.parts, (e, t) => (H(), U(V, { key: t }, [e.icon ? (H(), fa(zr(e.tag), wa({
				key: 0,
				ref_for: !0
			}, e.attrs, { innerHTML: e.html }), null, 16, ["innerHTML"])) : (H(), fa(zr(e.tag), wa({
				key: 1,
				ref_for: !0
			}, e.attrs), {
				default: zn(() => [K(A(e.text), 1)]),
				_: 2
			}, 1040))], 64))), 128))], 16))), 128))]),
			W("div", kp, [W("div", Ap, [
				a[3] ||= W("h3", null, "👤 Настройки профиля", -1),
				a[4] ||= W("p", null, "Это отображаемое имя только для этого устройства, без регистрации и пароля.", -1),
				W("div", jp, [a[1] ||= W("label", { for: "profile-name" }, "Имя в кабинете", -1), L(W("input", {
					id: "profile-name",
					"onUpdate:modelValue": a[0] ||= (e) => n.name = e,
					type: "text",
					maxlength: "60",
					autocomplete: "off",
					placeholder: "Как тебя называть?"
				}, null, 512), [[Y, n.name]])]),
				W("button", Mp, [W("span", {
					style: { display: "contents" },
					"aria-hidden": "true",
					innerHTML: e.initial.icons.check
				}, null, 8, Np), a[2] ||= K(" Сохранить имя", -1)])
			]), W("div", Pp, [
				a[7] ||= W("h3", null, "💾 Резервная копия", -1),
				a[8] ||= W("p", null, "Сохраняй проекты и избранное в JSON-файл или восстанавливай данные из ранее созданной копии.", -1),
				W("div", Fp, [
					W("button", Ip, [W("span", {
						style: { display: "contents" },
						"aria-hidden": "true",
						innerHTML: e.initial.icons.download
					}, null, 8, Lp), a[5] ||= K(" Экспорт данных", -1)]),
					W("button", Rp, [W("span", {
						style: { display: "contents" },
						"aria-hidden": "true",
						innerHTML: e.initial.icons.plus
					}, null, 8, zp), a[6] ||= K(" Импорт данных", -1)]),
					G(I(bp), {
						id: "import-file",
						type: "file",
						accept: ".json,application/json",
						style: { display: "none" }
					})
				])
			])]),
			a[10] ||= W("div", { class: "account-notice" }, "🔒 Этот кабинет пока не является защищённой учётной записью. Данные сохраняются локально в браузере и не синхронизируются между устройствами. Адрес сайта GitHub Pages остаётся публичным.", -1)
		], 64));
	}
}, Vp = ["data-sb-preferred-theme", "data-sb-applied-theme"], Hp = { class: "sbs-layout" }, Up = { class: "sbs-main-column" }, Wp = { class: "sbs-panel" }, Gp = {
	class: "sbs-field sbs-theme-field",
	for: "sbs-theme"
}, Kp = ["value"], qp = ["for"], Jp = { class: "sbs-option-text" }, Yp = { class: "sbs-switch" }, Xp = [
	"id",
	"onUpdate:modelValue",
	"data-sbs-setting",
	"aria-label"
], Zp = { class: "sbs-panel" }, Qp = {
	class: "sbs-field",
	for: "sbs-start"
}, $p = ["value"], em = { class: "sbs-panel" }, tm = {
	class: "sbs-field",
	for: "sbs-name"
}, nm = { class: "sbs-side-column" }, rm = { class: "sbs-panel sbs-reset-panel" }, im = {
	key: 0,
	class: "sbs-confirm"
}, am = {
	key: 1,
	type: "button",
	class: "sbs-secondary",
	"data-sbs-action": "reset"
}, om = ["hidden"], sm = {
	__name: "AccountSettings",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = $(), r = /* @__PURE__ */ M({ ...t.model.settings });
		R(() => n.appearance, (e) => {
			for (let t of [
				"theme",
				"compact",
				"largeText",
				"reduceMotion",
				"startPage"
			]) r[t] = e[t];
		});
		let i = /* @__PURE__ */ M({ value: t.model.name }), a = [
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
		return z(() => {
			t.model.resetPending && Tn(() => document.querySelector("#sb-vue-account-settings .sbs-confirm-button")?.focus());
		}), (t, o) => (H(), U("section", {
			id: "sbs-page",
			class: "sbs-page",
			"data-sb-vue-settings": "",
			"data-sb-preferred-theme": I(n).appearance.theme,
			"data-sb-applied-theme": I(n).appearance.resolvedTheme
		}, [
			o[17] ||= ba("<header class=\"sbs-heading\"><button type=\"button\" class=\"sbs-back\" data-sbs-action=\"close\">← Вернуться в кабинет</button><div class=\"sbs-eyebrow\">SUNOBOOM · ЛИЧНЫЙ КАБИНЕТ</div><div class=\"sbs-heading-row\"><div><h1>Настройки</h1><p>Настрой музыкальную мастерскую под себя. Изменения применяются сразу и сохраняются в этом браузере.</p></div><span class=\"sbs-badge\">⚙️ ПЕРСОНАЛИЗАЦИЯ</span></div></header>", 1),
			W("div", Hp, [W("div", Up, [
				W("section", Wp, [
					o[5] ||= W("div", { class: "sbs-panel-head" }, [W("span", {
						class: "sbs-symbol",
						"aria-hidden": "true"
					}, "🎨"), W("div", null, [W("h2", null, "Внешний вид"), W("p", null, "Удобная работа на компьютере и телефоне")])], -1),
					W("label", Gp, [o[3] ||= W("span", null, "Тема приложения", -1), L(W("select", {
						id: "sbs-theme",
						"onUpdate:modelValue": o[0] ||= (e) => r.theme = e,
						"data-sbs-setting": "theme",
						"aria-label": "Тема приложения"
					}, [(H(!0), U(V, null, B(e.model.themes, (e) => (H(), U("option", {
						key: e.id,
						value: e.id
					}, A(e.title), 9, Kp))), 128))], 512), [[X, r.theme]])]),
					o[6] ||= W("p", { class: "sbs-help sbs-theme-help" }, "Выбери палитру: тёмную, светлую, системную или одну из шести цветных тем. Изменения сохраняются.", -1),
					(H(), U(V, null, B(a, (e) => W("label", {
						key: e.key,
						class: "sbs-option",
						for: "sbs-" + e.key
					}, [W("span", Jp, [W("strong", null, A(e.title), 1), W("small", null, A(e.desc), 1)]), W("span", Yp, [L(W("input", {
						id: "sbs-" + e.key,
						"onUpdate:modelValue": (t) => r[e.key] = t,
						type: "checkbox",
						"data-sbs-setting": e.key,
						role: "switch",
						"aria-label": e.title
					}, null, 8, Xp), [[Wo, r[e.key]]]), o[4] ||= W("span", {
						class: "sbs-switch-track",
						"aria-hidden": "true"
					}, null, -1)])], 8, qp)), 64))
				]),
				W("section", Zp, [
					o[8] ||= W("div", { class: "sbs-panel-head" }, [W("span", {
						class: "sbs-symbol",
						"aria-hidden": "true"
					}, "🏠"), W("div", null, [W("h2", null, "При открытии сайта"), W("p", null, "Выбери стартовый раздел SUNOBOOM")])], -1),
					W("label", Qp, [o[7] ||= W("span", null, "Стартовая страница", -1), L(W("select", {
						id: "sbs-start",
						"onUpdate:modelValue": o[1] ||= (e) => r.startPage = e,
						"data-sbs-setting": "startPage"
					}, [(H(!0), U(V, null, B(e.model.pages, (e) => (H(), U("option", {
						key: e.id,
						value: e.id
					}, A(e.title), 9, $p))), 128))], 512), [[X, r.startPage]])]),
					o[9] ||= W("p", { class: "sbs-help" }, "Применяется при следующем открытии или обновлении сайта. Ссылки на конкретные карточки жанров сохраняют свой переход.", -1)
				]),
				W("section", em, [
					o[11] ||= W("div", { class: "sbs-panel-head" }, [W("span", {
						class: "sbs-symbol",
						"aria-hidden": "true"
					}, "👤"), W("div", null, [W("h2", null, "Профиль"), W("p", null, "Имя отображается только в локальном кабинете")])], -1),
					W("label", tm, [o[10] ||= W("span", null, "Имя в кабинете", -1), L(W("input", {
						id: "sbs-name",
						"onUpdate:modelValue": o[2] ||= (e) => i.value = e,
						type: "text",
						maxlength: "60",
						autocomplete: "off",
						placeholder: "Твоё имя"
					}, null, 512), [[Y, i.value]])]),
					o[12] ||= W("button", {
						type: "button",
						class: "sbs-primary",
						"data-sbs-action": "save-name"
					}, "Сохранить имя", -1)
				])
			]), W("aside", nm, [o[16] ||= ba("<section class=\"sbs-panel\"><div class=\"sbs-panel-head\"><span class=\"sbs-symbol\" aria-hidden=\"true\">🔒</span><div><h2>Данные и приватность</h2></div></div><p class=\"sbs-info\">Сейчас SUNOBOOM работает как локальный прототип: твои проекты и настройки сохраняются в браузере. Синхронизации между устройствами пока нет.</p><p class=\"sbs-info\">GitHub Pages остаётся публичной демонстрационной площадкой — полноценный закрытый вход по приглашениям ещё не подключён.</p><button type=\"button\" class=\"sbs-secondary\" data-sbs-action=\"backup\">↓ Перейти к резервным копиям</button></section>", 1), W("section", rm, [
				o[14] ||= W("div", { class: "sbs-panel-head" }, [W("span", {
					class: "sbs-symbol",
					"aria-hidden": "true"
				}, "↺"), W("div", null, [W("h2", null, "Сброс предпочтений")])], -1),
				o[15] ||= W("p", { class: "sbs-info" }, "Вернуть стандартные параметры отображения. Песни, проекты, избранное и имя профиля не удаляются.", -1),
				e.model.resetPending ? (H(), U("div", im, [...o[13] ||= [W("strong", null, "Сбросить настройки интерфейса?", -1), W("div", null, [W("button", {
					type: "button",
					class: "sbs-secondary",
					"data-sbs-action": "cancel-reset"
				}, "Отмена"), W("button", {
					type: "button",
					class: "sbs-confirm-button",
					"data-sbs-action": "confirm-reset"
				}, "Да, сбросить")], -1)]])) : (H(), U("button", am, "Сбросить настройки"))
			])])]),
			W("p", {
				id: "sbs-message",
				class: "sbs-message",
				role: "status",
				"aria-live": "polite",
				hidden: !e.model.message
			}, A(e.model.message), 9, om)
		], 8, Vp));
	}
}, cm = { class: "sba-add-title" }, lm = {
	id: "sba-add-placement",
	role: "status"
}, um = { class: "sba-add-row" }, dm = { for: "sba-add-type" }, fm = ["value"], pm = ["hidden"], mm = { class: "sba-add-row sba-add-controls" }, hm = ["hidden"], gm = {
	key: 1,
	type: "button",
	"data-sba-action": "request-preset",
	class: "sba-btn sba-preset-btn"
}, _m = ["hidden", "aria-expanded"], vm = {
	id: "sba-snake-meta",
	class: "sba-snake-meta"
}, ym = ["hidden", "aria-expanded"], bm = {
	key: 4,
	class: "sba-confirm"
}, xm = {
	key: 5,
	type: "button",
	class: "sba-end-add",
	"data-sba-action": "insert-end"
}, Sm = {
	__name: "ArrangementComposer",
	props: {
		api: {
			type: Object,
			required: !0
		},
		kind: {
			type: String,
			required: !0
		},
		initial: {
			type: Object,
			required: !0
		}
	},
	setup(e) {
		let t = e, n = /* @__PURE__ */ F(t.initial), r = J(() => n.value.controls), i = /* @__PURE__ */ P(r.value.type), a = () => {
			n.value = t.api.snapshot();
		};
		return window.addEventListener("sunoboom:arranger-updated", a), Mr(() => window.removeEventListener("sunoboom:arranger-updated", a)), (t, a) => e.kind === "composer" ? (H(), U(V, { key: 0 }, [
			W("div", cm, [a[2] ||= W("strong", null, "+ Новый блок", -1), W("span", lm, A(r.value.placement), 1)]),
			W("div", um, [W("label", dm, [a[3] ||= K("Тип фрагмента", -1), L(W("select", {
				id: "sba-add-type",
				"onUpdate:modelValue": a[0] ||= (e) => i.value = e
			}, [(H(!0), U(V, null, B(n.value.sections, (e) => (H(), U("option", {
				key: e.id,
				value: e.id
			}, A(e.name), 9, fm))), 128))], 512), [[X, i.value]])]), W("label", {
				id: "sba-custom-name-wrap",
				for: "sba-new-block-title",
				hidden: i.value !== "custom"
			}, [a[4] ||= K("Название своего блока", -1), a[1] || (ua(-1, !0), (a[1] = W("input", {
				id: "sba-new-block-title",
				value: r.value.title,
				type: "text",
				maxlength: "48",
				placeholder: "Например: Разговорный переход",
				autocomplete: "off"
			}, null, 8, ["value"])).cacheIndex = 1, ua(1), a[1])], 8, pm)]),
			W("div", mm, [a[5] ||= W("button", {
				class: "sba-btn sba-add-btn",
				"data-sba-action": "add",
				type: "button"
			}, "+ Добавить блок", -1), W("button", {
				class: "sba-btn sba-placement-reset",
				"data-sba-action": "reset-insert",
				type: "button",
				hidden: !r.value.inserting
			}, "Добавлять в конец", 8, hm)]),
			a[6] ||= W("p", { class: "sba-add-hint" }, "Выбери куплет, припев, дроп или свой фрагмент. После добавления можно настроить такты, энергию, вокал и инструменты.", -1)
		], 64)) : e.kind === "apply" ? (H(), U("button", gm, "Применить шаблон")) : e.kind === "expand" ? (H(), U("button", {
			key: 2,
			type: "button",
			id: "sba-transition-hub-expand",
			class: "sba-transition-hub-expand",
			"data-sba-action": "transition-hub-expand",
			hidden: r.value.transitions <= 3,
			"aria-expanded": n.value.transitionHubExpanded
		}, A(n.value.transitionHubExpanded ? "Свернуть список" : "Показать все (" + r.value.transitions + ")"), 9, _m)) : e.kind === "snake-tools" ? (H(), U(V, { key: 3 }, [W("span", vm, A(r.value.snakeMeta), 1), W("button", {
			type: "button",
			id: "sba-snake-toggle",
			"data-sba-action": "snake-toggle",
			hidden: r.value.total <= r.value.previewCount,
			"aria-expanded": n.value.snakeExpanded
		}, A(n.value.snakeExpanded ? "Свернуть" : "Показать все (" + r.value.total + ")"), 9, ym)], 64)) : e.kind === "preset-confirm" && r.value.pending ? (H(), U("div", bm, [
			W("span", null, "Заменить текущую структуру шаблоном «" + A(r.value.pending) + "»? Текущие блоки будут заменены.", 1),
			a[7] ||= W("button", {
				type: "button",
				"data-sba-action": "preset-accept"
			}, "Заменить", -1),
			a[8] ||= W("button", {
				type: "button",
				"data-sba-action": "preset-cancel"
			}, "Отмена", -1)
		])) : e.kind === "end-add" ? (H(), U("button", xm, "+ Добавить блок в конец")) : q("", !0);
	}
}, Cm = ["data-sba-id", "data-sba-energy"], wm = { class: "sba-block-head" }, Tm = ["data-sba-drag", "aria-label"], Em = { class: "sba-index" }, Dm = {
	class: "sba-emoji",
	"aria-hidden": "true"
}, Om = { class: "sba-head-energy" }, km = { class: "sba-block-actions" }, Am = ["data-id", "disabled"], jm = ["data-id", "disabled"], Mm = ["data-id"], Nm = ["data-id"], Pm = { class: "sba-block-fields" }, Fm = ["data-id", "value"], Im = ["value"], Lm = ["data-id", "value"], Rm = ["value"], zm = ["data-id", "value"], Bm = ["value"], Vm = { class: "sba-energy-field" }, Hm = ["data-sba-output"], Um = ["value", "data-id"], Wm = { class: "sba-instrument-field" }, Gm = ["for"], Km = { class: "sba-instrument-row" }, qm = [
	"id",
	"data-id",
	"value"
], Jm = ["id", "innerHTML"], Ym = ["id"], Xm = { class: "sba-sound-head" }, Zm = ["data-id"], Qm = ["data-id"], $m = ["id"], eh = {
	key: 0,
	class: "sba-sound-back"
}, th = ["data-id"], nh = [
	"data-sba-sound-search",
	"data-id",
	"value",
	"placeholder"
], rh = ["id"], ih = { class: "sba-sound-info" }, ah = { key: 0 }, oh = ["data-id", "data-genre-id"], sh = {
	key: 0,
	class: "sba-sound-none"
}, ch = { class: "sba-sound-group" }, lh = [
	"disabled",
	"aria-disabled",
	"data-id",
	"data-sound-value"
], uh = {
	key: 0,
	class: "sba-sound-none"
}, dh = {
	key: 1,
	class: "sba-sound-foot"
}, fh = ["data-id"], ph = {
	key: 0,
	class: "sba-custom-label"
}, mh = ["data-id", "value"], hh = ["innerHTML"], gh = ["data-id", "aria-label"], _h = {
	key: 0,
	class: "sba-empty"
}, vh = ["aria-label"], yh = [
	"data-sba-snake-id",
	"data-sba-energy",
	"aria-label",
	"title"
], bh = { class: "sba-snake-num" }, xh = {
	class: "sba-snake-icon",
	"aria-hidden": "true"
}, Sh = { class: "sba-snake-title" }, Ch = { class: "sba-snake-level" }, wh = ["title"], Th = {
	key: 0,
	class: "sba-snake-more"
}, Eh = {
	key: 1,
	class: "sba-snake-empty"
}, Dh = ["data-sba-hub-from"], Oh = { class: "sba-transition-hub-route" }, kh = { class: "sba-transition-hub-number" }, Ah = { class: "sba-transition-hub-names" }, jh = { class: "sba-transition-hub-controls" }, Mh = [
	"data-id",
	"value",
	"aria-label"
], Nh = ["value"], Ph = [
	"data-id",
	"value",
	"aria-label"
], Fh = ["value"], Ih = [
	"data-id",
	"value",
	"aria-label"
], Lh = ["value"], Rh = { class: "sba-transition-hub-actions" }, zh = ["data-id", "title"], Bh = ["data-id"], Vh = {
	key: 1,
	class: "sba-transition-hub-empty"
}, Hh = ["title"], Uh = { class: "sba-chart-column" }, Wh = {
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
		let t = e, n = /* @__PURE__ */ F(t.api.snapshot()), r = $();
		t.kind === "cards" && R(n, (e) => r.publishArrangerSummary(e), { immediate: !0 });
		let i = J(() => n.value?.blocks || []), a = J(() => n.value?.sections || []), o = J(() => n.value?.voices || []), s = J(() => n.value?.energies || {}), c = J(() => n.value?.transitions || []), l = J(() => n.value?.transitionTypes || []), u = J(() => n.value?.transitionLengths || []), d = J(() => n.value?.transitionStrengths || []), f = J(() => n.value?.snakeExpanded ? i.value : i.value.slice(0, 12)), p = J(() => n.value?.transitionHubExpanded ? c.value : c.value.slice(0, 3)), m = [
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
		z(() => window.addEventListener("sunoboom:arranger-updated", h)), Mr(() => window.removeEventListener("sunoboom:arranger-updated", h));
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
		let _ = J(() => f.value.map((e, t) => t + 1 + ". " + e.snakeLabel).join(" → "));
		return (t, n) => e.kind === "cards" ? (H(), U(V, { key: 0 }, [(H(!0), U(V, null, B(i.value, (e, t) => (H(), U(V, { key: e.id }, [
			W("article", {
				class: "sba-block",
				"data-sba-id": e.id,
				"data-sba-energy": e.energy
			}, [W("div", wm, [
				W("span", {
					class: "sba-drag",
					draggable: "true",
					"data-sba-drag": e.id,
					title: "Перетащить блок",
					"aria-label": "Перетащить " + e.sectionName
				}, "⠿", 8, Tm),
				W("span", Em, A(String(t + 1).padStart(2, "0")), 1),
				W("span", Dm, A(e.icon), 1),
				W("strong", null, A(e.label), 1),
				W("span", Om, "Энергия " + A(e.energy) + "/5", 1),
				W("div", km, [
					W("button", {
						type: "button",
						"data-sba-action": "up",
						"data-id": e.id,
						"aria-label": "Переместить вверх",
						disabled: t === 0
					}, "↑", 8, Am),
					W("button", {
						type: "button",
						"data-sba-action": "down",
						"data-id": e.id,
						"aria-label": "Переместить вниз",
						disabled: t === i.value.length - 1
					}, "↓", 8, jm),
					W("button", {
						type: "button",
						"data-sba-action": "duplicate",
						"data-id": e.id,
						"aria-label": "Дублировать блок"
					}, "⧉", 8, Mm),
					W("button", {
						type: "button",
						"data-sba-action": "remove",
						"data-id": e.id,
						"aria-label": "Удалить блок"
					}, "×", 8, Nm)
				])
			]), W("div", Pm, [
				W("label", null, [n[0] ||= K("Раздел ", -1), W("select", {
					"data-sba-field": "type",
					"data-id": e.id,
					value: e.type
				}, [(H(!0), U(V, null, B(a.value, (e) => (H(), U("option", {
					key: e.id,
					value: e.id
				}, A(e.name), 9, Im))), 128))], 8, Fm)]),
				W("label", null, [n[1] ||= K("Тактов ", -1), W("select", {
					"data-sba-field": "bars",
					"data-id": e.id,
					value: e.bars
				}, [(H(), U(V, null, B(m, (e) => W("option", {
					key: e,
					value: e
				}, A(e), 9, Rm)), 64))], 8, Lm)]),
				W("label", null, [n[2] ||= K("Вокал ", -1), W("select", {
					"data-sba-field": "vocal",
					"data-id": e.id,
					value: e.vocal
				}, [(H(!0), U(V, null, B(o.value, (e) => (H(), U("option", {
					key: e.id,
					value: e.id
				}, A(e.name), 9, Bm))), 128))], 8, zm)]),
				W("label", Vm, [
					n[3] ||= K("Энергия ", -1),
					W("output", { "data-sba-output": e.id }, A(e.energy) + "/5 · " + A(s.value[e.energy]), 9, Hm),
					W("input", {
						type: "range",
						min: "1",
						max: "5",
						step: "1",
						value: e.energy,
						"data-sba-field": "energy",
						"data-id": e.id
					}, null, 8, Um)
				]),
				W("div", Wm, [
					W("label", { for: "sba-instruments-" + e.id }, "Инструменты / приём", 8, Gm),
					W("div", Km, [W("input", {
						type: "text",
						id: "sba-instruments-" + e.id,
						maxlength: "300",
						"data-sba-field": "instruments",
						"data-id": e.id,
						value: e.instruments,
						placeholder: "Введи вручную или выбери рекомендацию",
						autocomplete: "off"
					}, null, 8, qm)]),
					W("div", {
						class: "sba-quick-sounds",
						id: "sba-quick-" + e.id,
						innerHTML: e.quickSounds
					}, null, 8, Jm),
					e.soundPanel ? (H(), U("div", {
						key: 0,
						class: "sba-sound-panel",
						id: "sba-sound-panel-" + e.id,
						"aria-label": "Выбор инструментов и приёмов"
					}, [
						W("div", Xm, [n[4] ||= W("strong", null, "Библиотека инструментов и приёмов", -1), W("button", {
							type: "button",
							"data-sba-action": "sound-close",
							"data-id": e.id,
							"aria-label": "Закрыть подбор"
						}, "×", 8, Zm)]),
						W("button", {
							type: "button",
							class: "sba-sound-genre-trigger",
							"data-sba-action": "sound-switch-mode",
							"data-id": e.id
						}, [
							n[5] ||= K(" Жанр: ", -1),
							W("b", null, A(e.soundPanel.genreName), 1),
							n[6] ||= W("span", null, "⌄", -1)
						], 8, Qm),
						W("div", { id: "sba-sound-body-" + e.id }, [
							e.soundPanel.mode === "genres" ? (H(), U("div", eh, [W("button", {
								type: "button",
								"data-sba-action": "sound-switch-mode",
								"data-id": e.id
							}, " ← К инструментам ", 8, th)])) : q("", !0),
							W("input", {
								type: "search",
								class: "sba-sound-search",
								"data-sba-sound-search": e.soundPanel.mode,
								"data-id": e.id,
								value: e.soundPanel.query,
								placeholder: e.soundPanel.mode === "genres" ? "Поиск по всей Академии..." : "Поиск инструмента или приёма...",
								autocomplete: "off",
								"aria-label": "Поиск инструментов или жанров"
							}, null, 8, nh),
							W("div", {
								class: "sba-sound-list",
								id: "sba-sound-results-" + e.id
							}, [e.soundPanel.mode === "genres" ? (H(), U(V, { key: 0 }, [
								W("div", ih, [K(" Найдено жанров: " + A(e.soundPanel.total) + " ", 1), e.soundPanel.total > e.soundPanel.matches.length ? (H(), U("span", ah, " · уточни запрос ")) : q("", !0)]),
								(H(!0), U(V, null, B(e.soundPanel.matches, (t) => (H(), U("button", {
									key: t.id,
									type: "button",
									class: "sba-sound-genre-row",
									"data-sba-action": "sound-set-genre",
									"data-id": e.id,
									"data-genre-id": t.id
								}, [W("span", null, A(t.name), 1), W("small", null, A(t.family), 1)], 8, oh))), 128)),
								e.soundPanel.matches.length ? q("", !0) : (H(), U("p", sh, " Жанр не найден "))
							], 64)) : (H(), U(V, { key: 1 }, [(H(!0), U(V, null, B(e.soundPanel.groups, (t) => (H(), U(V, { key: t.title }, [W("div", ch, A(t.title), 1), (H(!0), U(V, null, B(t.items, (t) => (H(), U("button", {
								key: t.name,
								type: "button",
								class: "sba-sound-option",
								disabled: t.added,
								"aria-disabled": t.added,
								"data-sba-action": "sound-add",
								"data-id": e.id,
								"data-sound-value": t.name
							}, [W("span", null, A(t.name), 1), W("small", null, A(t.added ? "✓ Добавлено" : "+ Добавить"), 1)], 8, lh))), 128))], 64))), 128)), e.soundPanel.groups.length ? q("", !0) : (H(), U("p", uh, " Совпадений нет. Можно ввести инструмент вручную. "))], 64))], 8, rh),
							e.soundPanel.mode === "genres" ? q("", !0) : (H(), U("div", dh, [n[7] ||= W("span", null, "Нажми «Добавить», чтобы дополнить поле. Свой текст сохраняется.", -1), W("button", {
								type: "button",
								"data-sba-action": "sound-clear",
								"data-id": e.id
							}, " Очистить поле ", 8, fh)]))
						], 8, $m)
					], 8, Ym)) : q("", !0)
				]),
				e.type === "custom" ? (H(), U("label", ph, [n[8] ||= K("Своё название ", -1), W("input", {
					type: "text",
					maxlength: "48",
					"data-sba-field": "customName",
					"data-id": e.id,
					value: e.customName,
					placeholder: "Название для тега Suno"
				}, null, 8, mh)])) : q("", !0)
			])], 8, Cm),
			e.transitionHTML ? (H(), U("div", {
				key: 0,
				style: { display: "contents" },
				innerHTML: e.transitionHTML
			}, null, 8, hh)) : q("", !0),
			W("button", {
				type: "button",
				class: "sba-between-add",
				"data-sba-action": "insert-after",
				"data-id": e.id,
				"aria-label": "Добавить блок после " + e.label
			}, [...n[9] ||= [W("span", { "aria-hidden": "true" }, "＋", -1), K(" Добавить после ", -1)]], 8, gh)
		], 64))), 128)), i.value.length ? q("", !0) : (H(), U("div", _h, "Пока нет блоков. Добавь первый фрагмент снизу."))], 64)) : e.kind === "snake" ? (H(), U(V, { key: 1 }, [i.value.length ? (H(), U(V, { key: 0 }, [(H(), U(V, null, B([6, 3], (e) => W("div", {
			key: e,
			class: k(e === 6 ? "sba-snake-desktop" : "sba-snake-mobile"),
			role: "group",
			"aria-label": "Схема блоков: " + _.value
		}, [(H(!0), U(V, null, B(g(e), (e) => (H(), U("div", {
			key: e.id,
			class: k(["sba-snake-row", {
				"sba-snake-reverse": e.reverse,
				"sba-snake-continues": e.continued
			}])
		}, [(H(!0), U(V, null, B(e.items, (e) => (H(), U("button", {
			key: e.id,
			type: "button",
			draggable: "true",
			class: "sba-snake-chip",
			"data-sba-snake-id": e.id,
			"data-sba-energy": e.energy,
			"aria-label": "Переместить " + e.snakeLabel + ", позиция " + (e.index + 1) + " из " + i.value.length + ", энергия " + e.energy + "/5",
			title: e.index + 1 + ". " + e.snakeLabel + " · энергия " + e.energy + "/5 · перетащи для перестановки"
		}, [
			W("span", bh, A(e.index + 1), 1),
			W("span", xh, A(e.icon), 1),
			W("span", Sh, A(e.snakeLabel), 1),
			W("span", Ch, A(e.energy) + "/5", 1),
			e.hasTransition ? (H(), U("span", {
				key: 0,
				class: "sba-snake-transition",
				title: "Переход: " + e.transitionLabel,
				"aria-hidden": "true"
			}, "↝", 8, wh)) : q("", !0)
		], 8, yh))), 128))], 2))), 128))], 10, vh)), 64)), f.value.length < i.value.length ? (H(), U("p", Th, " … и ещё " + A(i.value.length - f.value.length) + " блоков ", 1)) : q("", !0)], 64)) : (H(), U("p", Eh, "Добавь первый блок, и здесь появится схема композиции."))], 64)) : e.kind === "transitions" ? (H(), U(V, { key: 2 }, [c.value.length ? (H(!0), U(V, { key: 0 }, B(p.value, (e) => (H(), U("div", {
			key: e.id,
			class: k(["sba-transition-hub-row", { "sba-transition-hub-active": e.current.type !== "none" }]),
			"data-sba-hub-from": e.id
		}, [
			W("div", Oh, [W("span", kh, A(e.index + 1) + " → " + A(e.index + 2), 1), W("span", Ah, [
				K(A(e.from) + " ", 1),
				n[10] ||= W("b", null, "→", -1),
				K(" " + A(e.to), 1)
			])]),
			W("div", jh, [
				W("label", null, [n[11] ||= K("Эффект ", -1), W("select", {
					"data-sba-transition": "type",
					"data-id": e.id,
					value: e.current.type,
					"aria-label": "Переход " + (e.index + 1) + " к " + (e.index + 2)
				}, [(H(!0), U(V, null, B(l.value, (e) => (H(), U("option", {
					key: e.id,
					value: e.id
				}, A(e.name), 9, Nh))), 128))], 8, Mh)]),
				W("label", null, [n[12] ||= K("Длина ", -1), W("select", {
					"data-sba-transition": "length",
					"data-id": e.id,
					value: e.current.length,
					"aria-label": "Длительность перехода " + (e.index + 1)
				}, [(H(!0), U(V, null, B(u.value, (e) => (H(), U("option", {
					key: e.id,
					value: e.id
				}, A(e.name), 9, Fh))), 128))], 8, Ph)]),
				W("label", null, [n[13] ||= K("Сила ", -1), W("select", {
					"data-sba-transition": "strength",
					"data-id": e.id,
					value: e.current.strength,
					"aria-label": "Выраженность перехода " + (e.index + 1)
				}, [(H(!0), U(V, null, B(d.value, (e) => (H(), U("option", {
					key: e.id,
					value: e.id
				}, A(e.name), 9, Lh))), 128))], 8, Ih)])
			]),
			W("div", Rh, [W("button", {
				type: "button",
				"data-sba-action": "transition-suggest",
				"data-id": e.id,
				title: "Совет: " + e.advice
			}, "✧ Совет", 8, zh), W("button", {
				type: "button",
				"data-sba-action": "transition-hub-jump",
				"data-id": e.id
			}, "Подробнее ↓", 8, Bh)])
		], 10, Dh))), 128)) : (H(), U("p", Vh, "Добавь второй блок, и здесь можно будет настроить переходы."))], 64)) : e.kind === "energy" ? (H(!0), U(V, { key: 3 }, B(i.value, (e) => (H(), U("div", {
			key: e.id,
			class: "sba-chart-step",
			title: e.label + " · " + e.energy + "/5",
			style: O({
				"--energy": e.energy,
				"--bar-width": 100 / i.value.length + "%"
			})
		}, [W("div", Uh, [W("i", { style: O({ "--level": e.energy }) }, null, 4)]), W("small", null, A(e.icon), 1)], 12, Hh))), 128)) : q("", !0);
	}
}, Gh = ["aria-expanded"], Kh = { id: "sba-picked-label" }, qh = ["hidden"], Jh = { class: "sba-preset-search-row" }, Yh = ["value"], Xh = {
	class: "sba-preset-filters",
	role: "group",
	"aria-label": "Тип вариантов"
}, Zh = ["data-filter", "aria-pressed"], Qh = {
	id: "sba-preset-results",
	class: "sba-preset-results",
	role: "listbox",
	"aria-label": "Доступные шаблоны и жанры"
}, $h = { class: "sba-preset-group-title" }, eg = { key: 0 }, tg = ["aria-selected", "data-choice"], ng = {
	key: 0,
	class: "sba-preset-no-results"
}, rg = {
	__name: "ArrangementPicker",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ F(t.api.snapshot()), r = J(() => n.value?.picker || {
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
		return z(() => window.addEventListener("sunoboom:arranger-updated", i)), Mr(() => window.removeEventListener("sunoboom:arranger-updated", i)), (e, t) => (H(), U(V, null, [
			t[2] ||= W("span", { class: "sba-preset-caption" }, "Шаблон композиции / жанр", -1),
			W("button", {
				type: "button",
				id: "sba-presets",
				class: "sba-preset-trigger",
				"data-sba-action": "menu-toggle",
				"aria-haspopup": "dialog",
				"aria-expanded": r.value.open,
				"aria-controls": "sba-preset-menu"
			}, [W("span", Kh, A(r.value.selected), 1), t[0] ||= W("span", {
				class: "sba-preset-chevron",
				"aria-hidden": "true"
			}, "⌄", -1)], 8, Gh),
			W("div", {
				id: "sba-preset-menu",
				class: "sba-preset-menu",
				role: "dialog",
				"aria-label": "Поиск шаблона или жанра",
				hidden: !r.value.open
			}, [
				W("div", Jh, [W("input", {
					type: "search",
					id: "sba-preset-search",
					autocomplete: "off",
					value: r.value.query,
					placeholder: "Найти жанр или шаблон...",
					"aria-label": "Поиск жанра"
				}, null, 8, Yh), t[1] ||= W("button", {
					type: "button",
					"data-sba-action": "menu-close",
					"aria-label": "Закрыть меню"
				}, "×", -1)]),
				W("div", Xh, [(H(!0), U(V, null, B([
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
				], (e) => (H(), U("button", {
					key: e.id,
					type: "button",
					"data-sba-action": "menu-filter",
					"data-filter": e.id,
					"aria-pressed": r.value.filter === e.id
				}, A(e.title), 9, Zh))), 128))]),
				W("div", Qh, [(H(!0), U(V, null, B(r.value.groups, (e) => (H(), U(V, { key: e.title }, [W("div", $h, [K(A(e.title) + " ", 1), e.count === null ? q("", !0) : (H(), U("small", eg, A(e.count), 1))]), (H(!0), U(V, null, B(e.items, (e) => (H(), U("button", {
					key: e.key,
					type: "button",
					role: "option",
					"aria-selected": e.key === r.value.selectedKey,
					"data-sba-action": "menu-choose",
					"data-choice": e.key
				}, [W("span", null, A(e.title), 1), W("small", null, A(e.subtitle), 1)], 8, tg))), 128))], 64))), 128)), r.value.groups.length ? q("", !0) : (H(), U("p", ng, " Ничего не найдено. Попробуй другое название или направление. "))])
			], 8, qh)
		], 64));
	}
}, ig = {
	class: "sba-preview-tabs",
	role: "group",
	"aria-label": "Тип результата"
}, ag = ["aria-pressed"], og = ["aria-pressed"], sg = ["value"], cg = {
	class: "sba-preview-count",
	id: "sba-preview-count"
}, lg = {
	id: "sba-transfer-confirm",
	"aria-live": "polite"
}, ug = {
	key: 0,
	class: "sba-transfer-preview"
}, dg = ["hidden"], fg = {
	__name: "ArrangementResult",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ F(t.api.snapshot()), r = J(() => n.value?.result || {
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
		return z(() => window.addEventListener("sunoboom:arranger-updated", i)), Mr(() => window.removeEventListener("sunoboom:arranger-updated", i)), (e, t) => (H(), U(V, null, [
			t[3] ||= W("div", { class: "sba-result-header" }, [
				W("span", { class: "sba-eyebrow" }, "ПРЕДПРОСМОТР"),
				W("h3", null, "Результат для Suno"),
				W("p", null, "Lyrics — теги по секциям; Style — короткое описание динамики.")
			], -1),
			W("div", ig, [W("button", {
				type: "button",
				"data-sba-action": "tab",
				"data-tab": "lyrics",
				"aria-pressed": r.value.tab === "lyrics"
			}, "Теги Lyrics", 8, ag), W("button", {
				type: "button",
				"data-sba-action": "tab",
				"data-tab": "style",
				"aria-pressed": r.value.tab === "style"
			}, "Style", 8, og)]),
			W("textarea", {
				id: "sba-preview",
				readonly: "",
				spellcheck: "false",
				"aria-label": "Готовые теги структуры песни",
				value: r.value.text
			}, null, 8, sg),
			W("div", cg, A(r.value.count), 1),
			t[4] ||= W("div", { class: "sba-result-actions" }, [W("button", {
				type: "button",
				class: "sba-btn sba-copy-btn",
				"data-sba-action": "copy"
			}, " Копировать результат "), W("button", {
				type: "button",
				class: "sba-btn sba-transfer-btn",
				"data-sba-action": "prepare-transfer"
			}, " Перенести стиль в Studio ")], -1),
			W("div", lg, [r.value.transfer ? (H(), U("div", ug, [
				t[0] ||= W("strong", null, "Предпросмотр переноса в Style", -1),
				t[1] ||= W("p", null, "Добавим описание аранжировки в дополнительные инструкции Suno Studio, не удаляя твои записи.", -1),
				W("code", null, A(r.value.transfer.candidate), 1),
				t[2] ||= W("div", { class: "sba-preview-buttons" }, [W("button", {
					type: "button",
					"data-sba-action": "transfer-accept"
				}, "Подтвердить перенос"), W("button", {
					type: "button",
					"data-sba-action": "transfer-cancel"
				}, "Отмена")], -1),
				W("small", null, "Итоговый промпт Studio: " + A(r.value.transfer.promptLength) + " / 1000 символов", 1)
			])) : q("", !0)]),
			W("p", {
				id: "sba-message",
				class: "sba-message",
				role: "status",
				"aria-live": "polite",
				hidden: !r.value.message
			}, A(r.value.message), 9, dg),
			t[5] ||= W("div", { class: "sba-help" }, [
				W("strong", null, "Как применять"),
				W("p", null, [
					K("Теги секций вставляй в поле "),
					W("b", null, "Lyrics"),
					K(" в Suno рядом с текстом песни. Краткую динамику можно добавить в "),
					W("b", null, "Style"),
					K(" через Suno Studio после подтверждения.")
				]),
				W("p", null, "Ориентир длительности рассчитан по 4/4 и BPM Studio, это не гарантия точной длины аудио.")
			], -1)
		], 64));
	}
}, pg = {
	key: 0,
	class: "sb-dna-summary",
	"data-sb-vue-artist-manager-recap": ""
}, mg = { key: 1 }, hg = {
	key: 0,
	class: "sb-dna-grid"
}, gg = ["data-id"], _g = { class: "sb-dna-cardimg" }, vg = ["src"], yg = {
	key: 1,
	class: "sb-dna-empty"
}, bg = {
	key: 2,
	class: "sb-dna-detail"
}, xg = { class: "sb-dna-actions" }, Sg = ["data-id"], Cg = ["data-id"], wg = ["data-id"], Tg = { class: "sb-dna-hero" }, Eg = { class: "sb-dna-portrait" }, Dg = ["src"], Og = { class: "sb-dna-facts" }, kg = {
	key: 0,
	class: "sb-dna-restrictions"
}, Ag = { class: "sb-dna-descr" }, jg = { class: "sb-dna-style" }, Mg = { class: "sb-dna-actions" }, Ng = ["data-id"], Pg = ["data-id"], Fg = { class: "sb-dna-related" }, Ig = ["data-id"], Lg = { key: 1 }, Rg = {
	__name: "ArtistDNA",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = $();
		return R(() => t.model, (e) => n.publishArtistDnaSummary(e), { immediate: !0 }), (t, r) => (H(), U(V, null, [I(n).artistManagerSummary.ready ? (H(), U("div", pg, [W("div", null, [W("b", null, A(I(n).artistManagerSummary.artistCount), 1), r[0] ||= W("span", null, "В ручном списке артистов", -1)])])) : q("", !0), e.model.detail ? (H(), U("div", bg, [
			W("div", xg, [
				r[2] ||= W("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "dna-list"
				}, "← Все артисты", -1),
				W("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "dna-apply",
					"data-id": e.model.detail.id
				}, "В Suno Studio", 8, Sg),
				W("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "dna-edit",
					"data-id": e.model.detail.id
				}, "Изменить", 8, Cg),
				W("button", {
					type: "button",
					class: "btn danger small",
					"data-action": "dna-delete",
					"data-id": e.model.detail.id
				}, "Удалить", 8, wg)
			]),
			W("div", Tg, [W("div", Eg, [e.model.detail.portrait ? (H(), U("img", {
				key: 0,
				src: e.model.detail.portrait,
				alt: "Портрет артиста",
				loading: "lazy"
			}, null, 8, Dg)) : (H(), U(V, { key: 1 }, [K("♫")], 64))]), W("div", null, [
				r[3] ||= W("span", null, "МУЗЫКАЛЬНАЯ ИДЕНТИЧНОСТЬ", -1),
				W("h2", null, A(e.model.detail.name), 1),
				W("p", null, A(e.model.detail.subtitle), 1)
			])]),
			W("div", Og, [(H(!0), U(V, null, B(e.model.detail.facts, (e) => (H(), U("div", {
				key: e.label,
				class: "sb-dna-fact"
			}, [W("span", null, A(e.label), 1), W("strong", null, A(e.value), 1)]))), 128))]),
			(H(!0), U(V, null, B(e.model.detail.textFields, (e) => (H(), U("section", {
				key: e.label,
				class: "sb-dna-descr"
			}, [W("h3", null, A(e.label), 1), W("p", null, A(e.value), 1)]))), 128)),
			e.model.detail.forbids.length ? (H(), U("div", kg, [r[4] ||= W("strong", null, "Запреты:", -1), (H(!0), U(V, null, B(e.model.detail.forbids, (e) => (H(), U("span", { key: e }, A(e), 1))), 128))])) : q("", !0),
			W("section", Ag, [
				r[5] ||= W("h3", null, "Промпт для Suno Style", -1),
				W("div", jg, A(e.model.detail.style), 1),
				W("div", Mg, [W("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "dna-copy",
					"data-id": e.model.detail.id
				}, "Копировать Style", 8, Ng), W("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "dna-apply",
					"data-id": e.model.detail.id
				}, "Применить в Suno Studio", 8, Pg)])
			]),
			W("div", Fg, [W("h3", null, "Связанные паспорта треков (" + A(e.model.detail.related.length) + ")", 1), e.model.detail.related.length ? (H(!0), U(V, { key: 0 }, B(e.model.detail.related, (e) => (H(), U("button", {
				key: e.id,
				type: "button",
				class: "sb-dna-tracklink",
				"data-action": "dna-track",
				"data-id": e.id
			}, [W("strong", null, A(e.title), 1), W("span", null, A(e.status) + " →", 1)], 8, Ig))), 128)) : (H(), U("p", Lg, "Пока нет привязанных треков. В «Паспорте трека» можно выбрать этого артиста."))])
		])) : (H(), U("div", mg, [e.model.profiles.length ? (H(), U("div", hg, [(H(!0), U(V, null, B(e.model.profiles, (e) => (H(), U("button", {
			key: e.id,
			type: "button",
			class: "sb-dna-card",
			"data-action": "dna-open",
			"data-id": e.id
		}, [
			W("div", _g, [e.portrait ? (H(), U("img", {
				key: 0,
				src: e.portrait,
				alt: "",
				loading: "lazy"
			}, null, 8, vg)) : (H(), U(V, { key: 1 }, [K("♫")], 64))]),
			W("div", null, [
				W("strong", null, A(e.name), 1),
				W("span", null, A(e.genre), 1),
				W("small", null, A(e.timbre), 1)
			]),
			r[1] ||= W("span", { class: "sb-dna-arrow" }, "→", -1)
		], 8, gg))), 128))])) : (H(), U("div", yg, " Здесь будут музыкальные персонажи со своим вокалом, инструментами, стилем и визуальным образом. Создай первый профиль. "))]))], 64));
	}
}, zg = {
	id: "dna-editor",
	class: "panel sb-dna-editor",
	"data-sb-vue-dna-editor": ""
}, Bg = { class: "sb-dna-formheader" }, Vg = { class: "sb-dna-fields" }, Hg = { class: "field" }, Ug = { class: "field" }, Wg = ["value"], Gg = { class: "field" }, Kg = ["value"], qg = { class: "field" }, Jg = { class: "field" }, Yg = { class: "field" }, Xg = {
	key: 0,
	class: "sb-dna-fields"
}, Zg = { class: "field" }, Qg = { class: "field" }, $g = { class: "field" }, e_ = ["for"], t_ = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"rows"
], n_ = { class: "sb-dna-checkboxes" }, r_ = ["id", "onUpdate:modelValue"], i_ = { class: "field" }, a_ = ["for"], o_ = [
	"id",
	"onUpdate:modelValue",
	"rows",
	"maxlength"
], s_ = { class: "field" }, c_ = { class: "sb-dna-previewbox" }, l_ = { id: "dna-style-preview" }, u_ = { id: "dna-style-count" }, d_ = {
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
		let t = e, n = /* @__PURE__ */ M({ ...t.model.fields }), r = J(() => t.api.stylePreview(n)), i = [
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
		return (t, s) => (H(), U("div", zg, [
			W("div", Bg, [W("div", null, [W("h2", null, A(e.model.editing ? "Редактирование ДНК" : "Новый артист"), 1), s[10] ||= W("p", null, "Сохрани характер звучания — он будет доступен в Suno Studio и «Паспорте трека».", -1)]), s[11] ||= W("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "dna-cancel"
			}, "Закрыть", -1)]),
			W("div", Vg, [
				W("div", Hg, [s[12] ||= W("label", { for: "dna-name" }, "Имя артиста *", -1), L(W("input", {
					id: "dna-name",
					"onUpdate:modelValue": s[0] ||= (e) => n.name = e,
					maxlength: "120",
					placeholder: "Название музыкального проекта"
				}, null, 512), [[Y, n.name]])]),
				W("div", Ug, [s[13] ||= W("label", { for: "dna-project" }, "Связанный проект", -1), L(W("select", {
					id: "dna-project",
					"onUpdate:modelValue": s[1] ||= (e) => n.projectId = e
				}, [(H(!0), U(V, null, B(e.model.projects, (e) => (H(), U("option", {
					key: e.id,
					value: e.id
				}, A(e.title), 9, Wg))), 128))], 512), [[X, n.projectId]])]),
				W("div", Gg, [s[14] ||= W("label", { for: "dna-genre" }, "Основной жанр", -1), L(W("select", {
					id: "dna-genre",
					"onUpdate:modelValue": s[2] ||= (e) => n.genre = e
				}, [(H(!0), U(V, null, B(e.model.genres, (e) => (H(), U("option", {
					key: e.id,
					value: e.id
				}, A(e.name), 9, Kg))), 128))], 512), [[X, n.genre]])]),
				W("div", qg, [s[15] ||= W("label", { for: "dna-othergenres" }, "Дополнительные жанры", -1), L(W("input", {
					id: "dna-othergenres",
					"onUpdate:modelValue": s[3] ||= (e) => n.otherGenres = e,
					maxlength: "240",
					placeholder: "Например, pop, R&B, electropop"
				}, null, 512), [[Y, n.otherGenres]])]),
				W("div", Jg, [s[17] ||= W("label", { for: "dna-vocal" }, "Тип вокала", -1), L(W("select", {
					id: "dna-vocal",
					"onUpdate:modelValue": s[4] ||= (e) => n.vocal = e
				}, [...s[16] ||= [
					W("option", { value: "male" }, "Мужской", -1),
					W("option", { value: "female" }, "Женский", -1),
					W("option", { value: "duet" }, "Дуэт", -1)
				]], 512), [[X, n.vocal]])]),
				W("div", Yg, [s[19] ||= W("label", { for: "dna-language" }, "Язык песни", -1), L(W("select", {
					id: "dna-language",
					"onUpdate:modelValue": s[5] ||= (e) => n.language = e
				}, [...s[18] ||= [
					W("option", { value: "Russian" }, "Русский", -1),
					W("option", { value: "English" }, "Английский", -1),
					W("option", { value: "Spanish" }, "Испанский", -1),
					W("option", { value: "Kazakh" }, "Казахский", -1)
				]], 512), [[X, n.language]])])
			]),
			s[24] ||= W("h3", { class: "sb-dna-formsection" }, "Голос и музыкальный почерк", -1),
			(H(), U(V, null, B(i, (e) => (H(), U(V, { key: e.id }, [e.id === "mood" ? (H(), U("div", Xg, [W("div", Zg, [s[20] ||= W("label", { for: "dna-tempo-min" }, "Темп от (BPM)", -1), L(W("input", {
				id: "dna-tempo-min",
				"onUpdate:modelValue": s[6] ||= (e) => n.tempoMin = e,
				maxlength: "3",
				placeholder: "Например, 90"
			}, null, 512), [[Y, n.tempoMin]])]), W("div", Qg, [s[21] ||= W("label", { for: "dna-tempo-max" }, "Темп до (BPM)", -1), L(W("input", {
				id: "dna-tempo-max",
				"onUpdate:modelValue": s[7] ||= (e) => n.tempoMax = e,
				maxlength: "3",
				placeholder: "Например, 120"
			}, null, 512), [[Y, n.tempoMax]])])])) : q("", !0), W("div", $g, [W("label", { for: "dna-" + e.id }, A(e.label), 9, e_), L(W("textarea", {
				id: "dna-" + e.id,
				"onUpdate:modelValue": (t) => n[e.key] = t,
				maxlength: e.max,
				rows: e.rows
			}, null, 8, t_), [[Y, n[e.key]]])])], 64))), 64)),
			s[25] ||= W("h3", { class: "sb-dna-formsection" }, "Запреты и ограничения", -1),
			W("div", n_, [(H(), U(V, null, B(a, (e) => W("label", { key: e.id }, [L(W("input", {
				id: "dna-" + e.id,
				"onUpdate:modelValue": (t) => n[e.key] = t,
				type: "checkbox"
			}, null, 8, r_), [[Wo, n[e.key]]]), K(" " + A(e.label), 1)])), 64))]),
			W("div", i_, [s[22] ||= W("label", { for: "dna-extra" }, "Дополнительные требования к аранжировке", -1), L(W("textarea", {
				id: "dna-extra",
				"onUpdate:modelValue": s[8] ||= (e) => n.extra = e,
				rows: "3",
				maxlength: "650"
			}, null, 512), [[Y, n.extra]])]),
			s[26] ||= W("h3", { class: "sb-dna-formsection" }, "Творческий образ", -1),
			(H(), U(V, null, B(o, (e) => W("div", {
				key: e.id,
				class: "field"
			}, [W("label", { for: "dna-" + e.id }, A(e.label), 9, a_), L(W("textarea", {
				id: "dna-" + e.id,
				"onUpdate:modelValue": (t) => n[e.key] = t,
				rows: e.rows,
				maxlength: e.max
			}, null, 8, o_), [[Y, n[e.key]]])])), 64)),
			W("div", s_, [s[23] ||= W("label", { for: "dna-portrait" }, "Ссылка на портрет (HTTPS)", -1), L(W("input", {
				id: "dna-portrait",
				"onUpdate:modelValue": s[9] ||= (e) => n.portrait = e,
				maxlength: "2000",
				placeholder: "https://…"
			}, null, 512), [[Y, n.portrait]])]),
			s[27] ||= W("h3", { class: "sb-dna-formsection" }, "Промпт ДНК для Suno", -1),
			W("div", c_, [W("div", l_, A(r.value), 1), W("span", u_, A(r.value.length) + " / 1000", 1)]),
			s[28] ||= W("div", { class: "sb-dna-actions" }, [W("button", {
				type: "button",
				class: "btn primary",
				"data-action": "dna-save"
			}, "Сохранить ДНК артиста"), W("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "dna-copy-form"
			}, "Копировать промпт")], -1),
			s[29] ||= W("p", { class: "sb-dna-muted" }, " Описания и запреты — подсказки для генерации, а не гарантия идентичного голоса. Все данные пока хранятся локально в браузере. ", -1)
		]));
	}
}, f_ = {
	id: "sbsong-artist-manager",
	class: "sbsong-artist-manager",
	"data-sb-vue-artist-manager": ""
}, p_ = {
	key: 0,
	class: "sbsong-artist-hint"
}, m_ = {
	key: 1,
	class: "sbsong-artist-hint",
	"data-sb-vue-dna-recap": ""
}, h_ = { id: "sbsong-artist-manager-results" }, g_ = ["data-id", "aria-label"], __ = {
	key: 0,
	class: "sbsong-artist-hint"
}, v_ = {
	__name: "ArtistManager",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ P(t.model.filter || ""), r = (e) => String(e || "").normalize("NFKC").toLocaleLowerCase("ru"), i = J(() => t.model.artists.filter((e) => r(e.name).includes(r(n.value)))), a = $();
		return R(() => [t.model, i.value.length], ([e, t]) => a.publishArtistManagerSummary(e, t), { immediate: !0 }), (t, r) => (H(), U("section", f_, [
			r[1] ||= W("div", { class: "sbsong-subhead" }, [W("h2", null, "Мои артисты"), W("button", {
				type: "button",
				"data-sbsong-action": "artists-manage"
			}, "Закрыть ×")], -1),
			r[2] ||= W("p", null, "Создавай свой список исполнителей и музыкальных проектов. Артисты из «ДНК артиста» и сохранённых песен также доступны при выборе. Удаление из списка не меняет существующие песни.", -1),
			e.model.dnaCount ? (H(), U("p", p_, " Профилей ДНК артиста доступно для выбора: " + A(e.model.dnaCount) + ". Они не удаляются при изменении этого списка. ", 1)) : q("", !0),
			I(a).artistDnaSummary.ready ? (H(), U("p", m_, " Последний просмотр ДНК артиста: " + A(I(a).artistDnaSummary.profileCount) + " профилей ", 1)) : q("", !0),
			r[3] ||= W("div", { class: "sbsong-artist-manager-new" }, [W("input", {
				id: "sbsong-artist-manager-add",
				type: "text",
				maxlength: "120",
				placeholder: "Имя артиста или проекта",
				"aria-label": "Новый артист"
			}), W("button", {
				type: "button",
				class: "sbsong-main-btn",
				"data-sbsong-action": "artist-manager-add"
			}, " + Добавить артиста ")], -1),
			L(W("input", {
				"onUpdate:modelValue": r[0] ||= (e) => n.value = e,
				id: "sbsong-artist-manager-filter",
				type: "search",
				placeholder: "Фильтр по имени…",
				"aria-label": "Фильтр моих артистов"
			}, null, 512), [[Y, n.value]]),
			W("div", h_, [(H(!0), U(V, null, B(i.value, (e) => (H(), U("div", {
				key: e.id,
				class: "sbsong-artist-entry"
			}, [W("span", null, A(e.name), 1), W("button", {
				type: "button",
				"data-sbsong-action": "artist-remove",
				"data-id": e.id,
				"aria-label": "Удалить артиста " + e.name
			}, "Удалить", 8, g_)]))), 128)), i.value.length ? q("", !0) : (H(), U("p", __, A(e.model.artists.length ? "Ничего не найдено." : "Пока нет добавленных вручную артистов."), 1))])
		]));
	}
}, y_ = {
	type: "button",
	class: "btn primary",
	"data-action": "event-save"
}, b_ = {
	key: 0,
	type: "button",
	class: "btn ghost",
	"data-action": "event-cancel"
}, x_ = {
	__name: "EventActions",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (H(), U(V, null, [W("button", y_, A(e.model.editing ? "Сохранить изменения" : "Сохранить событие"), 1), e.model.editing ? (H(), U("button", b_, "Отменить")) : q("", !0)], 64));
	}
}, S_ = { class: "section-title" }, C_ = {
	key: 0,
	class: "dash-event-list"
}, w_ = { class: "dash-event-date" }, T_ = { class: "dash-event-main" }, E_ = { class: "dash-entry-meta" }, D_ = { key: 0 }, O_ = { class: "sb-event-reminder-summary" }, k_ = { class: "dash-event-controls" }, A_ = ["data-id"], j_ = ["data-id"], M_ = {
	key: 1,
	class: "dash-simple-empty"
}, N_ = {
	__name: "EventCollection",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (H(!0), U(V, null, B(e.model.groups, (e) => (H(), U(V, { key: e.key }, [W("div", S_, [W("h2", null, A(e.title) + " (" + A(e.items.length) + ")", 1)]), e.items.length ? (H(), U("div", C_, [(H(!0), U(V, null, B(e.items, (e) => (H(), U("article", {
			key: e.id,
			class: "dash-event-row"
		}, [
			W("div", w_, [W("strong", null, A(e.date), 1), W("span", null, A(e.time), 1)]),
			W("div", T_, [
				W("div", E_, A(e.type), 1),
				W("h3", null, A(e.title), 1),
				e.notes ? (H(), U("p", D_, A(e.notes), 1)) : q("", !0),
				W("div", O_, A(e.reminder), 1)
			]),
			W("div", k_, [W("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "event-edit",
				"data-id": e.id
			}, "Изменить", 8, A_), W("button", {
				type: "button",
				class: "btn danger small",
				"data-action": "event-delete",
				"data-id": e.id
			}, "Удалить", 8, j_)])
		]))), 128))])) : (H(), U("div", M_, A(e.empty), 1))], 64))), 128));
	}
}, P_ = { class: "field" }, F_ = { class: "dash-event-fields" }, I_ = { class: "field" }, L_ = { class: "field" }, R_ = { class: "field" }, z_ = ["value"], B_ = { class: "field" }, V_ = {
	__name: "EventEditor",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = /* @__PURE__ */ M({ ...e.initial.values });
		return (n, r) => (H(), U(V, null, [
			W("h2", null, A(e.initial.editing ? "Редактирование события" : "Добавить событие"), 1),
			W("div", P_, [r[5] ||= W("label", { for: "event-title" }, "Название события", -1), L(W("input", {
				id: "event-title",
				"onUpdate:modelValue": r[0] ||= (e) => t.title = e,
				type: "text",
				maxlength: "120",
				placeholder: "Например, релиз нового EP"
			}, null, 512), [[Y, t.title]])]),
			W("div", F_, [
				W("div", I_, [r[6] ||= W("label", { for: "event-date" }, "Дата", -1), L(W("input", {
					id: "event-date",
					"onUpdate:modelValue": r[1] ||= (e) => t.date = e,
					type: "date"
				}, null, 512), [[Y, t.date]])]),
				W("div", L_, [r[7] ||= W("label", { for: "event-time" }, "Время (необязательно)", -1), L(W("input", {
					id: "event-time",
					"onUpdate:modelValue": r[2] ||= (e) => t.time = e,
					type: "time"
				}, null, 512), [[Y, t.time]])]),
				W("div", R_, [r[8] ||= W("label", { for: "event-type" }, "Тип события", -1), L(W("select", {
					id: "event-type",
					"onUpdate:modelValue": r[3] ||= (e) => t.type = e
				}, [(H(!0), U(V, null, B(e.initial.types, (e) => (H(), U("option", {
					key: e.id,
					value: e.id
				}, A(e.label), 9, z_))), 128))], 512), [[X, t.type]])])
			]),
			W("div", B_, [r[9] ||= W("label", { for: "event-notes" }, "Описание (необязательно)", -1), L(W("textarea", {
				id: "event-notes",
				"onUpdate:modelValue": r[4] ||= (e) => t.notes = e,
				rows: "3",
				maxlength: "1200",
				placeholder: "Детали, место или заметки"
			}, null, 512), [[Y, t.notes]])])
		], 64));
	}
}, H_ = { class: "sb-reminder-picker" }, U_ = { class: "sb-reminder-choices" }, W_ = ["value"], G_ = { class: "sb-reminder-custom-label" }, K_ = ["hidden"], q_ = {
	__name: "EventReminders",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ M({
			...t.initial.values,
			selected: [...t.initial.values.selected]
		});
		return (t, r) => (H(), U("fieldset", H_, [
			r[7] ||= W("legend", null, "🔔 Когда напомнить?", -1),
			r[8] ||= W("p", { class: "sb-reminder-help" }, "Выбери один или несколько сроков. Убери все галочки, чтобы отключить уведомления.", -1),
			W("div", U_, [(H(!0), U(V, null, B(e.initial.presets, (e) => (H(), U("label", {
				key: e.days,
				class: "sb-reminder-choice"
			}, [
				L(W("input", {
					"onUpdate:modelValue": r[0] ||= (e) => n.selected = e,
					type: "checkbox",
					name: "event-reminder-preset",
					value: e.days
				}, null, 8, W_), [[Wo, n.selected]]),
				r[3] ||= K(),
				W("span", null, A(e.label), 1)
			]))), 128))]),
			W("label", G_, [L(W("input", {
				id: "event-reminder-custom",
				"onUpdate:modelValue": r[1] ||= (e) => n.custom = e,
				type: "checkbox"
			}, null, 512), [[Wo, n.custom]]), r[4] ||= K(" Свой срок до события", -1)]),
			W("div", {
				id: "event-reminder-custom-wrap",
				class: "sb-reminder-custom-input",
				hidden: !n.custom
			}, [
				r[5] ||= W("label", { for: "event-reminder-custom-days" }, "За сколько дней?", -1),
				L(W("input", {
					id: "event-reminder-custom-days",
					"onUpdate:modelValue": r[2] ||= (e) => n.customDays = e,
					type: "number",
					min: "1",
					max: "365",
					step: "1",
					inputmode: "numeric"
				}, null, 512), [[Y, n.customDays]]),
				r[6] ||= W("span", null, "дней до события", -1)
			], 8, K_)
		]));
	}
}, J_ = {
	class: "gb-grid",
	"data-sb-vue-overview": ""
}, Y_ = { class: "gb-column" }, X_ = { class: "gb-panel pink" }, Z_ = { class: "gb-unit" }, Q_ = { class: "gb-unit" }, $_ = { class: "gb-unit" }, ev = { class: "gb-panel" }, tv = ["innerHTML"], nv = { class: "gb-column" }, rv = { class: "gb-panel blue" }, iv = {
	class: "gb-bpm-value",
	style: {
		"font-size": "26px",
		"font-weight": "900"
	}
}, av = { class: "gb-artists" }, ov = { class: "gb-panel pink" }, sv = ["data-id"], cv = ["innerHTML"], lv = {
	__name: "GenreOverview",
	props: { genre: {
		type: Object,
		required: !0
	} },
	emits: ["select-tab"],
	setup(e) {
		return (t, n) => (H(), U("div", J_, [W("div", Y_, [W("section", X_, [
			n[7] ||= W("div", { class: "gb-sup" }, "01 / ЗНАКОМСТВО С ЖАНРОМ", -1),
			n[8] ||= W("h2", null, "Характер и звучание", -1),
			W("p", null, [W("strong", null, A(e.genre.tagline), 1)]),
			W("p", null, A(e.genre.description), 1),
			W("div", Z_, [n[2] ||= W("b", null, "🎸", -1), W("div", null, [n[1] ||= W("strong", null, "Инструменты", -1), W("span", null, A(e.genre.instruments) + ".", 1)])]),
			W("div", Q_, [n[4] ||= W("b", null, "🎛️", -1), W("div", null, [n[3] ||= W("strong", null, "Саунд", -1), W("span", null, A(e.genre.style) + ".", 1)])]),
			W("div", $_, [n[6] ||= W("b", null, "✍️", -1), W("div", null, [n[5] ||= W("strong", null, "Тематика песен", -1), W("span", null, A(e.genre.themes) + ".", 1)])])
		]), W("section", ev, [
			n[10] ||= W("div", { class: "gb-sup" }, "03 / ИДЕИ ДЛЯ СТАРТА", -1),
			n[11] ||= W("h2", null, "Что можно спеть", -1),
			(H(!0), U(V, null, B(e.genre.ideas, (e, t) => (H(), U("div", {
				key: t,
				class: "gb-idea"
			}, [W("strong", null, A(e.title), 1), W("p", null, A(e.pitch), 1)]))), 128)),
			W("button", {
				type: "button",
				class: "btn ghost small",
				onClick: n[0] ||= (e) => t.$emit("select-tab", "ideas")
			}, [n[9] ||= K(" Все идеи ", -1), W("span", {
				"aria-hidden": "true",
				innerHTML: e.genre.icons.arrow
			}, null, 8, tv)])
		])]), W("div", nv, [W("section", rv, [
			n[12] ||= W("div", { class: "gb-sup" }, "02 / ПАСПОРТ НАПРАВЛЕНИЯ", -1),
			n[13] ||= W("h2", null, "История и сцена", -1),
			n[14] ||= W("div", { class: "info-label" }, "Эпоха", -1),
			W("p", null, A(e.genre.era), 1),
			n[15] ||= W("div", { class: "info-label" }, "Диапазон темпа", -1),
			W("p", iv, A(e.genre.bpm[0]) + "–" + A(e.genre.bpm[1]) + " BPM", 1),
			n[16] ||= W("div", { class: "info-label" }, "Исполнители для знакомства", -1),
			W("div", av, [(H(!0), U(V, null, B(e.genre.artists, (e) => (H(), U("span", { key: e }, A(e), 1))), 128))])
		]), W("section", ov, [n[18] ||= ba("<div class=\"gb-sup\">04 / ТВОЯ МУЗЫКА</div><h2>Преврати знания в трек</h2><p>Выбери вокал, настроение и темп, затем создай промпт и структуру песни в Suno Studio.</p><div class=\"gb-unit\"><b>🎤</b><div><strong>Вокал</strong><span>Мужской, женский или дуэт; можно использовать русский язык.</span></div></div><div class=\"gb-unit\"><b>⚡</b><div><strong>Динамика</strong><span>Настрой энергию и характер припева под историю.</span></div></div>", 5), W("button", {
			type: "button",
			class: "btn primary small",
			"data-action": "use-genre",
			"data-id": e.genre.id
		}, [W("span", {
			innerHTML: e.genre.icons.studio,
			"aria-hidden": "true"
		}, null, 8, cv), n[17] ||= K(" Открыть студию ", -1)], 8, sv)])])]));
	}
}, uv = {
	key: 0,
	id: "sb-artist-expanded",
	class: "ahx-wrap",
	"data-sb-vue-artists": ""
}, dv = { class: "ahx-intro" }, fv = { class: "gb-eyebrow" }, pv = {
	class: "ahx-toolbar",
	role: "group",
	"aria-label": "Музыкальные сцены"
}, mv = ["aria-pressed"], hv = ["aria-pressed"], gv = { class: "ahx-filters" }, _v = { class: "ahx-search" }, vv = ["innerHTML"], yv = {
	class: "ahx-filter-buttons",
	role: "group",
	"aria-label": "Фильтр исполнителей"
}, bv = [
	"data-vue-artist-filter",
	"aria-pressed",
	"onClick"
], xv = {
	id: "ahx-count",
	class: "ahx-count",
	"aria-live": "polite"
}, Sv = { class: "ahx-section-head" }, Cv = { class: "ahx-eyebrow" }, wv = { class: "ahx-num" }, Tv = { class: "ahx-grid" }, Ev = ["data-ahx-group"], Dv = { class: "ahx-card-top" }, Ov = {
	class: "ahx-avatar",
	"aria-hidden": "true"
}, kv = { class: "ahx-title" }, Av = { class: "ahx-era" }, jv = {
	key: 0,
	class: "ahx-track"
}, Mv = {
	key: 1,
	class: "sb-ap-inline-actions"
}, Nv = ["data-name", "onClick"], Pv = [
	"data-name",
	"aria-label",
	"aria-pressed",
	"onClick"
], Fv = {
	id: "ahx-no-results",
	class: "ahx-no-results"
}, Iv = {
	key: 1,
	class: "ahx-empty"
}, Lv = {
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
		let t = e, n = /* @__PURE__ */ F(new Set(t.profiles?.favoriteKeys() || [])), r = t.profiles?.subscribe(() => {
			n.value = new Set(t.profiles.favoriteKeys());
		});
		Mr(() => r?.());
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
		let o = /* @__PURE__ */ P(t.catalog.initialScene()), s = /* @__PURE__ */ P(""), c = /* @__PURE__ */ P("all"), l = J(() => t.catalog.getScene(t.genre.id, o.value)), u = J(() => (l.value?.groups || []).map((e) => ({
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
		}))), d = J(() => u.value.reduce((e, t) => e + t.artists.length, 0)), f = J(() => (l.value?.groups || []).reduce((e, t) => e + t.artists.length, 0));
		function p(e) {
			(e === "ru" || e === "world") && (o.value = e, t.catalog.setScene(e), s.value = "", c.value = "all");
		}
		function m(e) {
			return "Добавить в избранное: " + e.name;
		}
		return (t, n) => l.value ? (H(), U("div", uv, [
			W("div", dv, [
				W("div", fv, "АКАДЕМИЯ SUNOBOOM · " + A(e.genre.name), 1),
				n[4] ||= W("h2", null, "Исполнители и композиторы", -1),
				W("p", null, A(l.value.description), 1)
			]),
			W("div", pv, [W("button", {
				type: "button",
				"data-vue-artist-scene": "world",
				"aria-pressed": o.value === "world",
				class: k({ on: o.value === "world" }),
				onClick: n[0] ||= (e) => p("world")
			}, [n[5] ||= K(" 🌍 Мировая сцена ", -1), W("span", null, A(l.value.worldCount), 1)], 10, mv), W("button", {
				type: "button",
				"data-vue-artist-scene": "ru",
				"aria-pressed": o.value === "ru",
				class: k({ on: o.value === "ru" }),
				onClick: n[1] ||= (e) => p("ru")
			}, [n[6] ||= K(" 🎤 Русскоязычные ", -1), W("span", null, A(l.value.ruCount), 1)], 10, hv)]),
			f.value ? (H(), U(V, { key: 0 }, [
				W("div", gv, [W("label", _v, [W("span", {
					"aria-hidden": "true",
					innerHTML: e.genre.icons.overview
				}, null, 8, vv), L(W("input", {
					"onUpdate:modelValue": n[2] ||= (e) => s.value = e,
					type: "search",
					"data-vue-artist-search": "",
					placeholder: "Найти исполнителя или произведение…",
					"aria-label": "Поиск по исполнителям"
				}, null, 512), [[Y, s.value]])]), W("div", yv, [(H(), U(V, null, B([
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
				], (e) => W("button", {
					key: e.id,
					type: "button",
					"data-vue-artist-filter": e.id,
					"aria-pressed": c.value === e.id,
					onClick: (t) => c.value = e.id
				}, A(e.label), 9, bv)), 64))])]),
				W("p", xv, "Показано " + A(d.value) + " из " + A(f.value) + " исполнителей.", 1),
				(H(!0), U(V, null, B(u.value, (t) => L((H(), U("section", {
					key: t.index,
					class: "ahx-section",
					"data-ahx-section": ""
				}, [W("div", Sv, [W("div", null, [W("span", Cv, "0" + A(t.index + 1) + " / ИСПОЛНИТЕЛИ", 1), W("h3", null, A(t.index ? "Современная сцена и продолжатели" : "Классика и предшественники"), 1)]), W("span", wv, A(t.artists.length), 1)]), W("div", Tv, [(H(!0), U(V, null, B(t.artists, (t) => (H(), U("article", {
					key: t.key,
					class: "ahx-card",
					"data-ahx-group": t.group
				}, [
					W("div", Dv, [W("span", Ov, A(t.initials), 1), W("div", kv, [W("h4", null, A(t.name), 1), W("span", Av, A(t.period || "Музыкальная сцена"), 1)])]),
					W("span", { class: k(["ahx-role", { "ahx-role-neighbor": t.group === "adjacent" }]) }, A(t.label), 3),
					W("p", null, A(t.bio || "Музыкальное направление и характерный творческий почерк."), 1),
					t.track ? (H(), U("div", jv, [n[7] ||= W("small", null, "Ориентир для прослушивания", -1), W("strong", null, "♫ " + A(t.track), 1)])) : q("", !0),
					e.profiles ? (H(), U("div", Mv, [W("button", {
						type: "button",
						class: "sb-ap-inline-open",
						"data-sb-ap-action": "profile",
						"data-name": t.name,
						onClick: Z((e) => a(t, e.currentTarget), ["stop"])
					}, "Полный профиль →", 8, Nv), W("button", {
						type: "button",
						class: "sb-ap-inline-star",
						"data-sb-ap-action": "favorite",
						"data-name": t.name,
						"aria-label": m(t),
						"aria-pressed": i(t.name),
						onClick: Z((n) => e.profiles.toggleFavorite(t.name), ["stop"])
					}, A(i(t.name) ? "★" : "☆"), 9, Pv)])) : q("", !0)
				], 8, Ev))), 128))])])), [[co, t.artists.length]])), 128)),
				L(W("div", Fv, " По заданному поиску исполнители не найдены. Попробуй другой запрос или выбери «Все». ", 512), [[co, d.value === 0]])
			], 64)) : (H(), U("div", Iv, [
				n[8] ||= W("strong", null, "Русскоязычная подборка ещё уточняется", -1),
				n[9] ||= W("p", null, "Для этого узкого направления пока нет достаточно подтверждённых примеров. Мы не будем подставлять артистов из других жанров без пояснения.", -1),
				W("button", {
					class: "btn ghost",
					type: "button",
					onClick: n[3] ||= (e) => p("world")
				}, "Посмотреть мировую сцену")
			])),
			n[10] ||= W("p", { class: "ahx-footnote" }, "В подборках могут встречаться близкие стили, кино- и игровая музыка, инструментальные коллективы. Их связь с жанром поясняется в карточке. Указанные произведения — ориентиры для знакомства, а не ссылки на конкретные релизы.", -1)
		])) : q("", !0);
	}
}, Rv = {
	class: "idea-grid",
	"data-sb-vue-ideas": ""
}, zv = { class: "idea-badge" }, Bv = { class: "actions" }, Vv = ["data-id", "data-i"], Hv = ["innerHTML"], Uv = [
	"data-id",
	"data-i",
	"aria-pressed"
], Wv = ["innerHTML"], Gv = {
	__name: "GenreIdeas",
	props: { genre: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (H(), U("div", Rv, [(H(!0), U(V, null, B(e.genre.allIdeas, (t) => (H(), U("div", {
			key: t.index,
			class: "idea"
		}, [
			W("div", zv, A(e.genre.name) + " · " + A(t.mood), 1),
			W("h3", null, A(t.title), 1),
			W("p", null, A(t.pitch), 1),
			W("div", Bv, [W("button", {
				type: "button",
				class: "btn primary small",
				"data-action": "idea-use",
				"data-id": e.genre.id,
				"data-i": t.index
			}, [W("span", {
				"aria-hidden": "true",
				innerHTML: e.genre.icons.studio
			}, null, 8, Hv), n[0] ||= K(" В студию ", -1)], 8, Vv), W("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "idea-save",
				"data-id": e.genre.id,
				"data-i": t.index,
				"aria-pressed": t.saved ? "true" : "false"
			}, [W("span", {
				"aria-hidden": "true",
				innerHTML: e.genre.icons.heart
			}, null, 8, Wv), K(" " + A(t.saved ? "Сохранено" : "Сохранить"), 1)], 8, Uv)])
		]))), 128))]));
	}
}, Kv = {
	class: "panel",
	"data-sb-vue-prompts": ""
}, qv = { class: "idea-grid" }, Jv = { class: "idea" }, Yv = ["data-id"], Xv = ["innerHTML"], Zv = { class: "idea" }, Qv = ["data-id"], $v = ["innerHTML"], ey = {
	__name: "GenrePrompts",
	props: { genre: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (H(), U("div", Kv, [
			n[5] ||= W("h3", null, "Шаблоны звучания", -1),
			n[6] ||= W("p", null, "Начни с одного из вариантов. Он перенесёт настройки жанра в конструктор — там можно выбрать вокал, настроение и язык.", -1),
			W("div", qv, [W("div", Jv, [
				n[1] ||= W("div", { class: "idea-badge" }, "Оригинальное звучание", -1),
				W("h3", null, A(e.genre.name), 1),
				W("p", null, A(e.genre.style) + ".", 1),
				W("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "use-genre",
					"data-id": e.genre.id
				}, [n[0] ||= K(" Настроить в студии ", -1), W("span", {
					"aria-hidden": "true",
					innerHTML: e.genre.icons.arrow
				}, null, 8, Xv)], 8, Yv)
			]), W("div", Zv, [
				n[3] ||= W("div", { class: "idea-badge" }, "Альтернативная версия", -1),
				n[4] ||= W("h3", null, "Мягкая атмосфера", -1),
				W("p", null, A(e.genre.style) + ", restrained dynamics, warm intimate production, emotional melodies.", 1),
				W("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "use-soft",
					"data-id": e.genre.id
				}, [n[2] ||= K(" Настроить в студии ", -1), W("span", {
					"aria-hidden": "true",
					innerHTML: e.genre.icons.arrow
				}, null, 8, $v)], 8, Qv)
			])])
		]));
	}
}, ty = { class: "gb-hero" }, ny = { class: "gb-content" }, ry = { class: "gb-eyebrow" }, iy = { class: "gb-title" }, ay = { class: "gb-desc" }, oy = { class: "gb-tags" }, sy = { class: "gb-buttons" }, cy = ["data-id"], ly = ["innerHTML"], uy = ["data-id"], dy = ["innerHTML"], fy = {
	class: "gb-vinyl",
	"aria-hidden": "true"
}, py = { class: "gb-equalizer" }, my = { class: "gb-facts" }, hy = { class: "gb-fact" }, gy = { class: "gb-fact" }, _y = { class: "gb-fact" }, vy = { class: "gb-fact" }, yy = { class: "genre-detail-layout" }, by = {
	class: "genre-side-nav",
	"aria-label": "ЖАНР-НАВ — меню жанра"
}, xy = {
	class: "genre-side-links",
	"aria-label": "Разделы жанра"
}, Sy = [
	"data-tab",
	"aria-current",
	"onClick"
], Cy = ["innerHTML"], wy = {
	class: "genre-detail-content",
	id: "genre-nav-content",
	"aria-label": "Содержимое раздела жанра"
}, Ty = ["innerHTML"], Ey = {
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
		selectTab: {
			type: Function,
			default: null
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
		], r = $(), i = /* @__PURE__ */ P(t.genre.tab);
		R(i, (e) => r.publishAcademyFocus(t.genre.id, e), { immediate: !0 });
		let a = (e) => !t.selectTab || e === "artists" && !t.artistCatalog ? t.tabContent(t.genre.id, e) : "", o = /* @__PURE__ */ P(a(i.value) || "");
		async function s(e) {
			if (i.value === e || !n.some((t) => t.id === e) || t.selectTab && !t.selectTab(t.genre.id, e)) return;
			let r = a(e);
			typeof r == "string" && (i.value = e, o.value = r, await Tn(), window.innerWidth <= 850 && document.getElementById("genre-nav-content")?.scrollIntoView({
				block: "start",
				behavior: "smooth"
			}));
		}
		return (t, r) => (H(), U("div", {
			class: "genre-bright",
			style: O({ "--accent": e.genre.color })
		}, [W("div", ty, [
			r[5] ||= W("div", { class: "gb-top" }, [W("button", {
				type: "button",
				class: "back",
				"data-action": "academy-back",
				"aria-label": "Назад к разделу Академии"
			}, "← Назад"), W("small", null, "SUNOBOOM · MUSIC ATLAS")], -1),
			W("div", ny, [W("div", null, [
				W("div", ry, A(e.genre.family) + " · " + A(e.genre.era), 1),
				W("h1", iy, A(e.genre.name), 1),
				W("p", ay, A(e.genre.description), 1),
				W("div", oy, [
					W("span", null, A(e.genre.tagline), 1),
					W("span", null, A(e.genre.bpm[0]) + "–" + A(e.genre.bpm[1]) + " BPM", 1),
					W("span", null, A(e.genre.ideasCount) + " идеи", 1)
				]),
				W("div", sy, [W("button", {
					type: "button",
					class: "btn primary",
					"data-action": "use-genre",
					"data-id": e.genre.id
				}, [W("span", {
					innerHTML: e.genre.icons.studio,
					"aria-hidden": "true"
				}, null, 8, ly), r[0] ||= K(" Создать в Suno ", -1)], 8, cy), W("button", {
					type: "button",
					class: "btn ghost",
					"data-action": "favorite",
					"data-id": e.genre.id
				}, [W("span", {
					innerHTML: e.genre.icons.heart,
					"aria-hidden": "true"
				}, null, 8, dy), K(" " + A(e.genre.favorite ? "В избранном" : "В избранное"), 1)], 8, uy)])
			]), W("div", fy, [W("div", py, [(H(), U(V, null, B(9, (e) => W("i", { key: e })), 64))])])]),
			W("div", my, [
				W("div", hy, [r[1] ||= W("small", null, "История", -1), W("strong", null, A(e.genre.era), 1)]),
				W("div", gy, [r[2] ||= W("small", null, "Темп", -1), W("strong", null, A(e.genre.bpm[0]) + "–" + A(e.genre.bpm[1]) + " BPM", 1)]),
				W("div", _y, [r[3] ||= W("small", null, "Треки", -1), W("strong", null, A(e.genre.ideasCount) + " сюжетных идеи", 1)]),
				W("div", vy, [r[4] ||= W("small", null, "Артисты", -1), W("strong", null, A(e.genre.artistCount) + " ориентиров", 1)])
			])
		]), W("div", yy, [W("aside", by, [r[7] ||= W("div", { class: "genre-side-head" }, [W("span", null, "ЖАНР-НАВ"), W("small", null, "Разделы карточки")], -1), W("nav", xy, [(H(), U(V, null, B(n, (t) => W("button", {
			key: t.id,
			type: "button",
			class: k(["genre-side-item", { active: i.value === t.id }]),
			"data-tab": t.id,
			"aria-controls": "genre-nav-content",
			"aria-current": i.value === t.id ? "page" : "false",
			onClick: (e) => s(t.id)
		}, [
			W("span", {
				class: "genre-side-icon",
				innerHTML: e.genre.icons[t.id],
				"aria-hidden": "true"
			}, null, 8, Cy),
			W("span", null, A(t.label), 1),
			r[6] ||= W("span", {
				class: "genre-side-chevron",
				"aria-hidden": "true"
			}, "›", -1)
		], 10, Sy)), 64))])]), W("section", wy, [i.value === "overview" ? (H(), fa(lv, {
			key: 0,
			genre: e.genre,
			onSelectTab: s
		}, null, 8, ["genre"])) : i.value === "artists" && e.artistCatalog ? (H(), fa(Lv, {
			key: 1,
			genre: e.genre,
			catalog: e.artistCatalog,
			profiles: e.artistProfiles
		}, null, 8, [
			"genre",
			"catalog",
			"profiles"
		])) : i.value === "ideas" ? (H(), fa(Gv, {
			key: 2,
			genre: e.genre
		}, null, 8, ["genre"])) : i.value === "prompts" ? (H(), fa(ey, {
			key: 3,
			genre: e.genre
		}, null, 8, ["genre"])) : (H(), U("div", {
			key: 4,
			innerHTML: o.value
		}, null, 8, Ty))])])], 4));
	}
}, Dy = { class: "heading" }, Oy = {
	key: 0,
	class: "gm-muted",
	"data-sb-vue-studio-recap": ""
}, ky = { class: "gm-layout" }, Ay = { class: "gm-panel" }, jy = { class: "gm-stack" }, My = { class: "gm-row-top" }, Ny = { class: "gm-rank" }, Py = { class: "gm-field gm-genre-select" }, Fy = ["for"], Iy = [
	"id",
	"value",
	"data-gm-genre"
], Ly = ["label"], Ry = ["value"], zy = ["data-gm-value"], By = [
	"data-slot",
	"aria-label",
	"disabled"
], Vy = { class: "gm-slider-line" }, Hy = [
	"max",
	"value",
	"data-gm-weight",
	"aria-label"
], Uy = { class: "gm-meter" }, Wy = ["data-gm-meter"], Gy = { class: "gm-sub" }, Ky = { class: "gm-actions" }, qy = ["disabled"], Jy = {
	class: "gm-mixture",
	"aria-label": "Доли музыкальных жанров"
}, Yy = ["data-gm-mixbar", "title"], Xy = { class: "gm-form-grid" }, Zy = ["for"], Qy = [
	"id",
	"value",
	"data-gm-setting"
], $y = ["value"], eb = { class: "gm-tempo" }, tb = ["checked"], nb = { class: "gm-tempo-row" }, rb = ["value", "disabled"], ib = { id: "gm-bpm" }, ab = { class: "gm-field" }, ob = ["value"], sb = { class: "gm-checks" }, cb = ["data-gm-setting", "checked"], lb = { class: "gm-panel gm-output-panel" }, ub = {
	class: "gm-output",
	id: "gm-prompt",
	"aria-live": "polite"
}, db = { class: "gm-prompt-meta" }, fb = { id: "gm-count" }, pb = { class: "gm-field" }, mb = ["value"], hb = { class: "gm-saved-list" }, gb = {
	key: 0,
	class: "gm-muted"
}, _b = { class: "gm-saved-actions" }, vb = ["data-id"], yb = ["data-id", "aria-label"], bb = {
	__name: "GenreMixer",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ F(t.api.snapshot()), r = $();
		R(n, (e) => r.publishMixerSummary(e), { immediate: !0 });
		let i = J(() => n.value?.rows || []), a = J(() => n.value?.genres || []), o = J(() => n.value?.settings || {}), s = J(() => n.value?.options || {}), c = J(() => n.value?.saved || []), l = J(() => n.value?.prompt || ""), u = J(() => n.value?.tempo || 115), d = J(() => n.value?.title || "");
		function f() {
			let e = t.api.snapshot();
			e && (n.value = e);
		}
		z(() => window.addEventListener("sunoboom:mixer-updated", f)), Mr(() => window.removeEventListener("sunoboom:mixer-updated", f));
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
		let m = J(() => [
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
		return (e, t) => (H(), U(V, null, [W("header", Dy, [
			t[1] ||= W("div", { class: "eyebrow" }, "Suno Studio · новый инструмент", -1),
			t[2] ||= W("h1", null, [K("Жанровый "), W("span", { class: "gm-highlight" }, "миксер")], -1),
			t[3] ||= W("p", null, "Соединяй от 2 до 4 жанров из Академии SUNOBOOM, задавай пропорции и создавай готовый Style-промпт для Suno.", -1),
			I(r).studioSummary.ready ? (H(), U("p", Oy, [K(" Текущая Студия: " + A(I(r).studioSummary.tempo) + " BPM · " + A(I(r).studioSummary.promptLength) + " / 1000 символов. ", 1), t[0] ||= W("button", {
				type: "button",
				class: "link-action",
				"data-action": "nav",
				"data-nav": "studio"
			}, "Вернуться в Студию →", -1)])) : q("", !0)
		]), W("div", ky, [W("section", Ay, [
			t[7] ||= W("div", { class: "gm-section-head" }, [W("div", null, [W("h2", null, "Формула звучания"), W("p", null, "Меняй жанры и двигай ползунки — сумма всегда равна 100%.")]), W("span", { class: "gm-total" }, "Σ 100%")], -1),
			W("div", jy, [(H(!0), U(V, null, B(i.value, (e, t) => (H(), U("article", {
				key: e.id,
				class: "gm-row",
				style: O({ "--gm-color": e.color })
			}, [
				W("div", My, [
					W("span", Ny, A(String(t + 1).padStart(2, "0")), 1),
					W("div", Py, [W("label", { for: "gm-genre-" + t }, "Музыкальное направление", 8, Fy), W("select", {
						id: "gm-genre-" + t,
						value: e.id,
						"data-gm-genre": t
					}, [(H(!0), U(V, null, B(p(t), (e) => (H(), U("optgroup", {
						key: e.family,
						label: e.family
					}, [(H(!0), U(V, null, B(e.items, (e) => (H(), U("option", {
						key: e.id,
						value: e.id
					}, A(e.name), 9, Ry))), 128))], 8, Ly))), 128))], 8, Iy)]),
					W("span", {
						class: "gm-percent",
						"data-gm-value": t
					}, A(e.weight) + "%", 9, zy),
					W("button", {
						type: "button",
						class: "gm-remove",
						"data-action": "gm-remove",
						"data-slot": t,
						"aria-label": "Убрать жанр " + e.name,
						title: "Убрать жанр",
						disabled: i.value.length <= 2
					}, "×", 8, By)
				]),
				W("div", Vy, [W("input", {
					type: "range",
					min: "5",
					max: 100 - 5 * (i.value.length - 1),
					step: "1",
					value: e.weight,
					"data-gm-weight": t,
					"aria-label": "Доля жанра " + e.name
				}, null, 8, Hy), W("div", Uy, [W("span", {
					"data-gm-meter": t,
					style: O({ width: e.weight + "%" })
				}, null, 12, Wy)])]),
				W("p", Gy, A(e.family) + " · " + A(e.tagline) + " · " + A(e.instruments), 1)
			], 4))), 128))]),
			W("div", Ky, [W("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "gm-add",
				disabled: i.value.length >= 4
			}, "＋ Добавить жанр", 8, qy), t[4] ||= W("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "gm-equal"
			}, "Поровну", -1)]),
			W("div", Jy, [(H(!0), U(V, null, B(i.value, (e) => (H(), U("span", {
				key: e.id,
				"data-gm-mixbar": e.id,
				style: O({
					width: e.weight + "%",
					background: e.color
				}),
				title: e.name + ": " + e.weight + "%"
			}, null, 12, Yy))), 128))]),
			t[8] ||= W("p", { class: "gm-muted" }, "Проценты — творческий ориентир для генерации, а не гарантия точного соотношения в готовой музыке.", -1),
			t[9] ||= W("div", { class: "gm-divider" }, null, -1),
			t[10] ||= W("h2", null, "Характер композиции", -1),
			W("div", Xy, [(H(!0), U(V, null, B(m.value, (e) => (H(), U("div", {
				key: e.key,
				class: "gm-field"
			}, [W("label", { for: "gm-" + e.key }, A(e.label), 9, Zy), W("select", {
				id: "gm-" + e.key,
				value: o.value[e.key],
				"data-gm-setting": e.key
			}, [(H(!0), U(V, null, B(e.choices, ([e, t]) => (H(), U("option", {
				key: e,
				value: e
			}, A(t), 9, $y))), 128))], 8, Qy)]))), 128))]),
			W("div", eb, [W("label", null, [W("input", {
				type: "checkbox",
				"data-gm-setting": "autoTempo",
				checked: o.value.autoTempo
			}, null, 8, tb), t[5] ||= K(" Определять темп по жанрам", -1)]), W("div", nb, [W("input", {
				id: "gm-tempo",
				type: "range",
				min: "65",
				max: "200",
				value: u.value,
				"data-gm-setting": "tempo",
				disabled: o.value.autoTempo
			}, null, 8, rb), W("b", ib, A(u.value) + " BPM", 1)])]),
			W("div", ab, [t[6] ||= W("label", { for: "gm-theme" }, "Тема песни (необязательно)", -1), W("textarea", {
				id: "gm-theme",
				rows: "2",
				maxlength: "170",
				"data-gm-setting": "theme",
				value: o.value.theme,
				placeholder: "Например: ночной город, встреча после долгой разлуки"
			}, null, 8, ob)]),
			W("div", sb, [(H(), U(V, null, B(h, ([e, t]) => W("label", { key: e }, [W("input", {
				type: "checkbox",
				"data-gm-setting": e,
				checked: o.value[e]
			}, null, 8, cb), K(" " + A(t), 1)])), 64))])
		]), W("aside", lb, [
			t[13] ||= W("div", { class: "eyebrow" }, "Результат микширования", -1),
			t[14] ||= W("h2", null, "Гибридный Style-промпт", -1),
			W("div", ub, A(l.value), 1),
			W("div", db, [t[11] ||= W("span", null, "На английском · готово для Suno", -1), W("b", fb, A(l.value.length) + " / 1000", 1)]),
			t[15] ||= ba("<div class=\"gm-output-actions\"><button type=\"button\" class=\"btn primary\" data-action=\"gm-copy\">Копировать</button><button type=\"button\" class=\"btn ghost\" data-action=\"gm-to-studio\">В Suno Studio</button></div><button type=\"button\" class=\"btn ghost gm-full\" data-action=\"gm-save-prompt\">Сохранить в «Мои промпты»</button><div class=\"gm-divider\"></div><h3>Мои сочетания</h3>", 4),
			W("div", pb, [t[12] ||= W("label", { for: "gm-title" }, "Название сочетания", -1), W("input", {
				id: "gm-title",
				type: "text",
				maxlength: "90",
				"data-gm-title": "",
				value: d.value,
				placeholder: "Например: Северный электро-фолк"
			}, null, 8, mb)]),
			t[16] ||= W("button", {
				type: "button",
				class: "btn ghost gm-full",
				"data-action": "gm-save-mix"
			}, "Сохранить формулу", -1),
			W("div", hb, [c.value.length ? q("", !0) : (H(), U("p", gb, "Сохранённых сочетаний пока нет. Придумай свой микс и сохрани его.")), (H(!0), U(V, null, B(c.value, (e) => (H(), U("article", {
				key: e.id,
				class: "gm-saved"
			}, [W("div", null, [W("strong", null, A(e.title), 1), W("small", null, A(e.summary), 1)]), W("div", _b, [W("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "gm-load",
				"data-id": e.id
			}, "Открыть", 8, vb), W("button", {
				type: "button",
				class: "btn danger small",
				"data-action": "gm-delete",
				"data-id": e.id,
				"aria-label": "Удалить " + e.title
			}, "×", 8, yb)])]))), 128))]),
			t[17] ||= W("p", { class: "gm-muted" }, "Сохраняется в этом браузере и входит в общую JSON-копию данных SUNOBOOM. Подключение к ИИ для смешивания не требуется.", -1)
		])])], 64));
	}
}, xb = ["data-sb-applied-theme"], Sb = { class: "dash-head" }, Cb = { class: "dash-actions" }, wb = { class: "dash-metrics" }, Tb = { class: "dash-metric" }, Eb = { class: "dash-metric" }, Db = { class: "dash-metric" }, Ob = { class: "dash-layout" }, kb = { class: "dash-panel" }, Ab = { class: "dash-panel-head" }, jb = { class: "dash-list" }, Mb = { class: "dash-entry-meta" }, Nb = ["data-kind", "data-id"], Pb = {
	key: 0,
	class: "dash-empty"
}, Fb = { class: "dash-panel" }, Ib = { class: "dash-panel-head" }, Lb = { class: "dash-list" }, Rb = { class: "dash-entry-meta" }, zb = { class: "dash-entry-actions" }, Bb = ["data-id"], Vb = ["data-id"], Hb = {
	key: 0,
	class: "dash-empty"
}, Ub = { class: "dash-panel dash-panel-events" }, Wb = { class: "dash-panel-head" }, Gb = { class: "dash-list" }, Kb = { class: "dash-event-date" }, qb = { class: "dash-event-main" }, Jb = { class: "dash-entry-meta" }, Yb = { key: 0 }, Xb = ["data-id"], Zb = {
	key: 0,
	class: "dash-empty"
}, Qb = {
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
		let t = $();
		return (n, r) => (H(), U("div", {
			class: "sb-vue-dashboard",
			"data-sb-vue-dashboard": "",
			"data-sb-applied-theme": I(t).appearance.resolvedTheme
		}, [
			W("div", Sb, [
				r[9] ||= W("div", { class: "dash-eyebrow" }, "ЛИЧНАЯ МУЗЫКАЛЬНАЯ МАСТЕРСКАЯ", -1),
				r[10] ||= W("h1", null, [K("Твоя музыкальная "), W("span", null, "лаборатория.")], -1),
				W("p", null, A(e.model.profileName) + ", здесь твои последние идеи, промпты и музыкальные события — всё под рукой.", 1),
				W("div", Cb, [
					W("button", {
						type: "button",
						class: "btn primary",
						"data-action": "nav",
						"data-nav": "myideas",
						onClick: r[0] ||= Z((t) => e.navigate("myideas"), ["stop"])
					}, "＋ Новая идея"),
					W("button", {
						type: "button",
						class: "btn ghost",
						"data-action": "nav",
						"data-nav": "myprompts",
						onClick: r[1] ||= Z((t) => e.navigate("myprompts"), ["stop"])
					}, "＋ Новый промпт"),
					W("button", {
						type: "button",
						class: "btn ghost",
						"data-action": "nav",
						"data-nav": "events",
						onClick: r[2] ||= Z((t) => e.navigate("events"), ["stop"])
					}, "＋ Событие")
				])
			]),
			W("div", wb, [
				W("div", Tb, [W("b", null, A(I(t).dashboardStats.ideaCount), 1), r[11] ||= W("span", null, "Мои идеи", -1)]),
				W("div", Eb, [W("b", null, A(I(t).dashboardStats.promptCount), 1), r[12] ||= W("span", null, "Мои промпты", -1)]),
				W("div", Db, [W("b", null, A(I(t).dashboardStats.eventCount), 1), r[13] ||= W("span", null, "Мои события", -1)])
			]),
			W("div", Ob, [
				W("section", kb, [W("header", Ab, [r[14] ||= W("div", null, [W("span", { class: "dash-kicker" }, "💡 ЛИЧНАЯ БИБЛИОТЕКА"), W("h2", null, "Мои последние идеи")], -1), W("button", {
					type: "button",
					class: "dash-view-all",
					"data-action": "nav",
					"data-nav": "myideas",
					onClick: r[3] ||= Z((t) => e.navigate("myideas"), ["stop"])
				}, "Все идеи →")]), W("div", jb, [(H(!0), U(V, null, B(e.model.ideas, (e) => (H(), U("article", {
					key: e.kind + ":" + e.key,
					class: "dash-entry"
				}, [
					W("div", Mb, A(e.label), 1),
					W("h3", null, A(e.title), 1),
					W("p", null, A(String(e.pitch).slice(0, 180)), 1),
					W("button", {
						type: "button",
						class: "dash-entry-link",
						"data-action": "dash-open-idea",
						"data-kind": e.kind,
						"data-id": String(e.key)
					}, "Открыть идею →", 8, Nb)
				]))), 128)), e.model.ideas.length ? q("", !0) : (H(), U("div", Pb, [
					r[15] ||= W("span", null, "💡", -1),
					r[16] ||= W("strong", null, "Пока нет сохранённых идей", -1),
					r[17] ||= W("p", null, "Добавь идею в личном кабинете или сохрани сюжет из Idea Lab.", -1),
					W("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "nav",
						"data-nav": "myideas",
						onClick: r[4] ||= Z((t) => e.navigate("myideas"), ["stop"])
					}, "Добавить идею →")
				]))])]),
				W("section", Fb, [W("header", Ib, [r[18] ||= W("div", null, [W("span", { class: "dash-kicker" }, "🎛️ SUNO STUDIO"), W("h2", null, "Мои последние промпты")], -1), W("button", {
					type: "button",
					class: "dash-view-all",
					"data-action": "nav",
					"data-nav": "myprompts",
					onClick: r[5] ||= Z((t) => e.navigate("myprompts"), ["stop"])
				}, "Все промпты →")]), W("div", Lb, [(H(!0), U(V, null, B(e.model.prompts, (e) => (H(), U("article", {
					key: String(e.id),
					class: "dash-entry"
				}, [
					W("div", Rb, A(e.genre || "Suno Studio") + A(e.date ? " · " + e.date : ""), 1),
					W("h3", null, A(e.title || (e.genre || "Промпт") + " · " + (e.mood || "студия")), 1),
					W("p", null, A(String(e.text || "").slice(0, 180)), 1),
					W("div", zb, [W("button", {
						type: "button",
						class: "dash-entry-link",
						"data-action": "dash-open-prompt",
						"data-id": String(e.id)
					}, "Открыть промпт →", 8, Bb), W("button", {
						type: "button",
						class: "dash-copy",
						"data-action": "copy-saved",
						"data-id": String(e.id)
					}, "Копировать", 8, Vb)])
				]))), 128)), e.model.prompts.length ? q("", !0) : (H(), U("div", Hb, [
					r[19] ||= W("span", null, "🎛️", -1),
					r[20] ||= W("strong", null, "Пока нет сохранённых промптов", -1),
					r[21] ||= W("p", null, "Сохрани промпт в Suno Studio или создай собственный.", -1),
					W("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "nav",
						"data-nav": "myprompts",
						onClick: r[6] ||= Z((t) => e.navigate("myprompts"), ["stop"])
					}, "Добавить промпт →")
				]))])]),
				W("section", Ub, [W("header", Wb, [r[22] ||= W("div", null, [W("span", { class: "dash-kicker" }, "🗓️ ТВОРЧЕСКИЙ КАЛЕНДАРЬ"), W("h2", null, "Мои события")], -1), W("button", {
					type: "button",
					class: "dash-view-all",
					"data-action": "nav",
					"data-nav": "events",
					onClick: r[7] ||= Z((t) => e.navigate("events"), ["stop"])
				}, "Все события →")]), W("div", Gb, [(H(!0), U(V, null, B(e.model.events, (e) => (H(), U("article", {
					key: String(e.id),
					class: "dash-entry dash-event"
				}, [
					W("div", Kb, [W("strong", null, A(e.formattedDate), 1), W("span", null, A(e.time || "Весь день"), 1)]),
					W("div", qb, [
						W("div", Jb, A(e.typeLabel) + A(e.past ? " · Прошедшее" : ""), 1),
						W("h3", null, A(e.title), 1),
						e.notes ? (H(), U("p", Yb, A(String(e.notes).slice(0, 160)), 1)) : q("", !0)
					]),
					W("button", {
						type: "button",
						class: "dash-entry-link",
						"data-action": "dash-open-event",
						"data-id": String(e.id)
					}, "Подробнее →", 8, Xb)
				]))), 128)), e.model.events.length ? q("", !0) : (H(), U("div", Zb, [
					r[23] ||= W("span", null, "🗓️", -1),
					r[24] ||= W("strong", null, "Событий пока нет", -1),
					r[25] ||= W("p", null, "Добавь даты релизов, записи, встречи и другие планы своей музыкальной работы.", -1),
					W("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "nav",
						"data-nav": "events",
						onClick: r[8] ||= Z((t) => e.navigate("events"), ["stop"])
					}, "Добавить событие →")
				]))])])
			])
		], 8, xb));
	}
}, $b = {
	key: 0,
	class: "sub",
	"data-sb-vue-idea-library-recap": ""
}, ex = { class: "section-title" }, tx = {
	key: 0,
	class: "btn ghost small",
	"data-action": "nav",
	"data-nav": "ideas"
}, nx = ["data-idea-collection"], rx = { class: "idea-badge" }, ix = {
	key: 0,
	class: "generator-story"
}, ax = {
	key: 1,
	class: "song-has-lyrics"
}, ox = { key: 0 }, sx = {
	key: 3,
	class: "generator-detail"
}, cx = { class: "actions" }, lx = [
	"data-action",
	"data-id",
	"data-i",
	"aria-label"
], ux = ["innerHTML"], dx = {
	key: 1,
	class: "empty"
}, fx = ["innerHTML"], px = {
	__name: "IdeaCollections",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = $();
		return (n, r) => (H(), U(V, null, [I(t).librarySummary.ready ? (H(), U("p", $b, " Последний просмотр библиотеки: " + A(I(t).librarySummary.totalIdeaCount) + " идей ", 1)) : q("", !0), (H(!0), U(V, null, B(e.model.groups, (t) => (H(), U(V, { key: t.kind }, [W("div", ex, [W("h2", null, A(t.title) + " (" + A(t.items.length) + ")", 1), t.kind === "generated" ? (H(), U("button", tx, "Создать идеи →")) : q("", !0)]), t.items.length ? (H(), U("div", {
			key: 0,
			class: "idea-grid",
			"data-idea-collection": t.kind
		}, [(H(!0), U(V, null, B(t.items, (n) => (H(), fa(zr(t.kind === "academy" ? "div" : "article"), {
			key: n.key,
			class: k(["idea", { "generated-card": t.kind === "generated" }])
		}, {
			default: zn(() => [
				W("div", rx, A(n.badge), 1),
				W("h3", null, A(n.title), 1),
				W("p", null, A(n.pitch), 1),
				t.kind === "generated" ? (H(), U("p", ix, A(n.storyLine), 1)) : q("", !0),
				t.kind === "manual" && n.lyrics ? (H(), U("p", ax, "🎼 Текст песни сохранён · " + A(n.sunoLyrics ? "теги для Suno готовы" : "без разметки"), 1)) : q("", !0),
				n.hook || t.kind === "generated" ? (H(), fa(zr(t.kind === "generated" ? "div" : "p"), {
					key: 2,
					class: "generator-hook"
				}, {
					default: zn(() => [t.kind === "generated" ? (H(), U("span", ox, "ХУК ПРИПЕВА")) : q("", !0), W("strong", null, A(n.hook), 1)]),
					_: 2
				}, 1024)) : q("", !0),
				t.kind === "generated" && n.detail ? (H(), U("p", sx, "Твоя деталь: " + A(n.detail), 1)) : q("", !0),
				W("div", cx, [(H(!0), U(V, null, B(n.actions, (t) => (H(), U("button", {
					key: t.name,
					type: "button",
					class: k(t.className),
					"data-action": t.name,
					"data-id": n.id,
					"data-i": n.index,
					"aria-label": t.label || void 0
				}, [t.icon ? (H(), U("span", {
					key: 0,
					"aria-hidden": "true",
					innerHTML: e.model.icons[t.icon]
				}, null, 8, ux)) : q("", !0), K(A(t.text), 1)], 10, lx))), 128))])
			]),
			_: 2
		}, 1032, ["class"]))), 128))], 8, nx)) : (H(), U("div", dx, [
			W("span", {
				"aria-hidden": "true",
				innerHTML: e.model.icons.music
			}, null, 8, fx),
			W("strong", null, A(t.emptyTitle), 1),
			K(A(t.emptyText), 1)
		]))], 64))), 128))], 64));
	}
}, mx = { class: "field" }, hx = { class: "field" }, gx = ["value"], _x = { class: "field" }, vx = {
	class: "sub",
	"data-sb-vue-idea-draft-progress": ""
}, yx = {
	key: 0,
	class: "sub",
	"data-sb-vue-last-prompt-draft": ""
}, bx = { class: "field" }, xx = {
	__name: "IdeaFields",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = /* @__PURE__ */ M({ ...e.initial.values }), n = $();
		return R(() => [
			t.title,
			t.genre,
			t.text,
			t.hook
		], () => n.publishIdeaDraftSummary(t), { immediate: !0 }), (r, i) => (H(), U(V, null, [
			W("div", mx, [i[4] ||= W("label", { for: "custom-idea-title" }, "Название песни", -1), L(W("input", {
				id: "custom-idea-title",
				"onUpdate:modelValue": i[0] ||= (e) => t.title = e,
				maxlength: "100",
				placeholder: "Например, Город на ладони"
			}, null, 512), [[Y, t.title]])]),
			W("div", hx, [i[5] ||= W("label", { for: "custom-idea-genre" }, "Музыкальный жанр", -1), L(W("select", {
				id: "custom-idea-genre",
				"onUpdate:modelValue": i[1] ||= (e) => t.genre = e
			}, [(H(!0), U(V, null, B(e.initial.genres, (e) => (H(), U("option", {
				key: e.id,
				value: e.id
			}, A(e.name), 9, gx))), 128))], 512), [[X, t.genre]])]),
			W("div", _x, [i[6] ||= W("label", { for: "custom-idea-text" }, "Сюжет и основная идея", -1), L(W("textarea", {
				id: "custom-idea-text",
				"onUpdate:modelValue": i[2] ||= (e) => t.text = e,
				rows: "5",
				maxlength: "3000",
				placeholder: "О чём песня и что происходит с героем?"
			}, null, 512), [[Y, t.text]])]),
			W("p", vx, "Сюжет: " + A(I(n).ideaDraftSummary.ideaLength) + " / 3000 · Название: " + A(I(n).ideaDraftSummary.titleLength) + " / 100", 1),
			I(n).promptDraftSummary.ready ? (H(), U("p", yx, "Последний открытый черновик промпта: " + A(I(n).promptDraftSummary.textLength) + " / 1000 символов", 1)) : q("", !0),
			W("div", bx, [i[7] ||= W("label", { for: "custom-idea-hook" }, "Фраза для припева (необязательно)", -1), L(W("input", {
				id: "custom-idea-hook",
				"onUpdate:modelValue": i[3] ||= (e) => t.hook = e,
				maxlength: "240",
				placeholder: "Запоминающаяся строчка"
			}, null, 512), [[Y, t.hook]])])
		], 64));
	}
}, Sx = { class: "generator-panel" }, Cx = { class: "generator-form" }, wx = ["for"], Tx = [
	"id",
	"onUpdate:modelValue",
	"data-idea-generator"
], Ex = ["value"], Dx = { class: "field generator-detail-field" }, Ox = { class: "generator-bar" }, kx = {
	type: "button",
	class: "btn primary",
	"data-action": "generate-ideas"
}, Ax = ["innerHTML"], jx = {
	id: "generated-results",
	class: "section-title"
}, Mx = {
	type: "button",
	class: "btn ghost small",
	"data-action": "generate-ideas"
}, Nx = ["innerHTML"], Px = { class: "idea-grid" }, Fx = { class: "idea-badge" }, Ix = { class: "generator-story" }, Lx = { class: "generator-hook" }, Rx = {
	key: 0,
	class: "generator-detail"
}, zx = { class: "actions" }, Bx = ["data-id"], Vx = ["innerHTML"], Hx = ["data-id"], Ux = ["innerHTML"], Wx = ["data-id"], Gx = ["innerHTML"], Kx = { class: "section-title" }, qx = { class: "filters" }, Jx = ["data-filter"], Yx = { class: "section-title" }, Xx = { class: "idea-grid" }, Zx = { class: "idea-badge" }, Qx = { class: "actions" }, $x = ["data-id", "data-i"], eS = ["innerHTML"], tS = ["data-id", "data-i"], nS = ["innerHTML"], rS = {
	__name: "IdeasPage",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = /* @__PURE__ */ M({ ...e.initial.values });
		return (n, r) => (H(), U(V, null, [
			r[12] ||= W("header", { class: "heading" }, [W("h1", null, [K("Идеи песен "), W("span", { style: { color: "#fb7bbd" } }, "✦")]), W("p", null, "Создавай новые истории в генераторе или выбирай готовые идеи из каталога.")], -1),
			W("section", Sx, [
				r[5] ||= W("div", { class: "generator-panel-top" }, [W("div", null, [
					W("div", { class: "eyebrow" }, "SUNOBOOM · IDEA LAB"),
					W("h2", null, [K("Создай новую идею "), W("span", null, "✦")]),
					W("p", null, "Подбери жанр, тему, настроение и сюжетную подачу. Получи несколько свежих концепций с названием, историей и хуком припева.")
				]), W("span", { class: "generator-orb" }, "💡")], -1),
				W("div", Cx, [(H(!0), U(V, null, B(e.initial.fields, (e) => (H(), U("div", {
					key: e.key,
					class: "field"
				}, [W("label", { for: e.id }, A(e.label), 9, wx), L(W("select", {
					id: e.id,
					"onUpdate:modelValue": (n) => t[e.key] = n,
					"data-idea-generator": e.key
				}, [(H(!0), U(V, null, B(e.options, (e) => (H(), U("option", {
					key: e.value,
					value: e.value
				}, A(e.label), 9, Ex))), 128))], 8, Tx), [[X, t[e.key]]])]))), 128)), W("div", Dx, [r[1] ||= W("label", { for: "gen-detail" }, "Своя деталь (необязательно)", -1), L(W("input", {
					id: "gen-detail",
					"onUpdate:modelValue": r[0] ||= (e) => t.detail = e,
					"data-idea-generator": "detail",
					maxlength: "220",
					placeholder: "Например: ночной Алматы, поезд, летний дождь"
				}, null, 512), [[Y, t.detail]])])]),
				W("div", Ox, [
					W("button", kx, [W("span", {
						style: { display: "contents" },
						"aria-hidden": "true",
						innerHTML: e.initial.icons.ideas
					}, null, 8, Ax), r[2] ||= K(" Сгенерировать идеи", -1)]),
					r[3] ||= W("button", {
						type: "button",
						class: "btn ghost",
						"data-action": "surprise-ideas"
					}, "🎲 Удиви меня", -1),
					r[4] ||= W("span", { class: "generator-note" }, "Работает офлайн · без внешнего ИИ", -1)
				])
			]),
			e.initial.generated.length ? (H(), U(V, { key: 0 }, [W("div", jx, [W("h2", null, "Твои новые идеи · " + A(e.initial.generated.length), 1), W("button", Mx, [W("span", {
				style: { display: "contents" },
				"aria-hidden": "true",
				innerHTML: e.initial.icons.arrow
			}, null, 8, Nx), r[6] ||= K(" Ещё варианты", -1)])]), W("div", Px, [(H(!0), U(V, null, B(e.initial.generated, (t) => (H(), U("article", {
				key: t.id,
				class: "idea generated-card"
			}, [
				W("div", Fx, A(t.badge), 1),
				W("h3", null, A(t.title), 1),
				W("p", null, A(t.pitch), 1),
				W("p", Ix, A(t.storyLine), 1),
				W("div", Lx, [r[7] ||= W("span", null, "ХУК ПРИПЕВА", -1), W("strong", null, A(t.hook), 1)]),
				t.detail ? (H(), U("p", Rx, "Твоя деталь: " + A(t.detail), 1)) : q("", !0),
				W("div", zx, [
					W("button", {
						type: "button",
						class: "btn primary small",
						"data-action": "generated-use",
						"data-id": t.id
					}, [W("span", {
						style: { display: "contents" },
						"aria-hidden": "true",
						innerHTML: e.initial.icons.studio
					}, null, 8, Vx), r[8] ||= K(" В Suno Studio", -1)], 8, Bx),
					W("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "generated-copy",
						"data-id": t.id
					}, [W("span", {
						style: { display: "contents" },
						"aria-hidden": "true",
						innerHTML: e.initial.icons.copy
					}, null, 8, Ux), r[9] ||= K(" Копировать", -1)], 8, Hx),
					W("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "generated-save",
						"data-id": t.id
					}, [W("span", {
						style: { display: "contents" },
						"aria-hidden": "true",
						innerHTML: e.initial.icons.heart
					}, null, 8, Gx), K(" " + A(t.saved ? "Сохранено" : "Сохранить"), 1)], 8, Wx)
				])
			]))), 128))])], 64)) : q("", !0),
			W("div", Kx, [W("h2", null, "Библиотека готовых сюжетов · " + A(e.initial.catalog.length), 1)]),
			W("div", qx, [(H(!0), U(V, null, B(e.initial.families, (t) => (H(), U("button", {
				key: t,
				type: "button",
				class: k(["filter", { on: e.initial.family === t }]),
				"data-action": "idea-filter",
				"data-filter": t
			}, A(t), 11, Jx))), 128))]),
			W("div", Yx, [W("h2", null, "Идеи · " + A(e.initial.catalog.length), 1), r[10] ||= W("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "random-idea"
			}, "🎲 Случайная идея", -1)]),
			W("div", Xx, [(H(!0), U(V, null, B(e.initial.catalog, (t) => (H(), U("div", {
				key: t.key,
				class: "idea"
			}, [
				W("div", Zx, A(t.badge), 1),
				W("h3", null, A(t.title), 1),
				W("p", null, A(t.pitch), 1),
				W("div", Qx, [W("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "idea-use",
					"data-id": t.genre,
					"data-i": t.index
				}, [W("span", {
					style: { display: "contents" },
					"aria-hidden": "true",
					innerHTML: e.initial.icons.studio
				}, null, 8, eS), r[11] ||= K(" В студию", -1)], 8, $x), W("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "idea-save",
					"data-id": t.genre,
					"data-i": t.index
				}, [W("span", {
					style: { display: "contents" },
					"aria-hidden": "true",
					innerHTML: e.initial.icons.heart
				}, null, 8, nS), K(" " + A(t.saved ? "Сохранено" : "Сохранить"), 1)], 8, tS)])
			]))), 128))])
		], 64));
	}
}, iS = { class: "account-back" }, aS = {
	type: "button",
	class: "btn ghost small",
	"data-action": "workspace-back"
}, oS = {
	key: 0,
	class: "sb-dna-summary",
	"data-sb-vue-library-summary": ""
}, sS = { class: "section-title" }, cS = {
	key: 1,
	class: "genre-grid"
}, lS = ["data-id"], uS = { class: "genre-content" }, dS = { class: "kicker" }, fS = { class: "foot" }, pS = {
	key: 2,
	class: "empty"
}, mS = { class: "section-title" }, hS = {
	key: 3,
	class: "idea-grid"
}, gS = { class: "idea-badge" }, _S = { class: "actions" }, vS = ["data-id", "data-i"], yS = ["data-id", "data-i"], bS = {
	key: 4,
	class: "empty"
}, xS = { class: "section-title" }, SS = {
	key: 5,
	class: "idea-grid"
}, CS = { class: "idea-badge" }, wS = ["data-id"], TS = {
	key: 6,
	class: "empty"
}, ES = { class: "section-title" }, DS = {
	key: 7,
	class: "idea-grid"
}, OS = { class: "idea-badge" }, kS = { class: "generator-story" }, AS = { class: "generator-hook" }, jS = {
	key: 0,
	class: "generator-detail"
}, MS = { class: "actions" }, NS = ["data-id"], PS = ["data-id"], FS = ["data-id", "aria-label"], IS = {
	key: 8,
	class: "empty"
}, LS = { class: "section-title" }, RS = {
	key: 9,
	class: "saved-list"
}, zS = { class: "row" }, BS = { class: "actions" }, VS = ["data-id"], HS = ["data-id", "aria-label"], US = { class: "sub" }, WS = {
	key: 10,
	class: "empty"
}, GS = {
	__name: "LibraryCollection",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = $();
		return R(() => t.model, (e) => n.publishLibrarySummary(e), { immediate: !0 }), (t, r) => (H(), U(V, null, [
			W("div", iS, [W("button", aS, A(e.model.backLabel), 1)]),
			r[14] ||= W("header", { class: "heading" }, [W("h1", null, "Моя библиотека"), W("p", null, "Любимые жанры, идеи и промпты. Сохраняются локально в этом браузере.")], -1),
			I(n).librarySummary.ready ? (H(), U("div", oS, [
				W("div", null, [W("b", null, A(I(n).librarySummary.genreCount), 1), r[0] ||= W("span", null, "Избранных жанров", -1)]),
				W("div", null, [W("b", null, A(I(n).librarySummary.totalIdeaCount), 1), r[1] ||= W("span", null, "Идей в библиотеке", -1)]),
				W("div", null, [W("b", null, A(I(n).librarySummary.promptCount), 1), r[2] ||= W("span", null, "Сохранённых промптов", -1)])
			])) : q("", !0),
			W("div", sS, [W("h2", null, "Избранные жанры (" + A(e.model.genres.length) + ")", 1)]),
			e.model.genres.length ? (H(), U("div", cS, [(H(!0), U(V, null, B(e.model.genres, (e) => (H(), U("button", {
				key: e.id,
				type: "button",
				class: "genre-card",
				style: O({ "--accent": e.color }),
				"data-action": "genre",
				"data-id": e.id
			}, [r[4] ||= W("div", { class: "art" }, null, -1), W("div", uS, [W("div", null, [
				W("div", dS, A(e.family) + " · " + A(e.bpm[0]) + "–" + A(e.bpm[1]) + " BPM", 1),
				W("h3", null, A(e.name), 1),
				W("p", null, A(e.tagline), 1)
			]), W("div", fS, [W("span", null, A(e.era), 1), r[3] ||= W("span", { style: { color: "#ffacd9" } }, "Открыть →", -1)])])], 12, lS))), 128))])) : (H(), U("div", pS, [...r[5] ||= [W("strong", null, "Пока нет избранных жанров", -1), K("Добавляй их в карточках Академии.", -1)]])),
			W("div", mS, [W("h2", null, "Сохранённые идеи (" + A(e.model.ideas.length) + ")", 1)]),
			e.model.ideas.length ? (H(), U("div", hS, [(H(!0), U(V, null, B(e.model.ideas, (e) => (H(), U("article", {
				key: e.key,
				class: "idea"
			}, [
				W("div", gS, A(e.genre) + " · " + A(e.mood), 1),
				W("h3", null, A(e.title), 1),
				W("p", null, A(e.pitch), 1),
				W("div", _S, [W("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "idea-use",
					"data-id": e.genreId,
					"data-i": e.index
				}, "В студию", 8, vS), W("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "idea-save",
					"data-id": e.genreId,
					"data-i": e.index
				}, "Сохранено", 8, yS)])
			]))), 128))])) : (H(), U("div", bS, [...r[6] ||= [W("strong", null, "Нет сохранённых идей", -1), K("Найди интересный сюжет и нажми «Сохранить».", -1)]])),
			W("div", xS, [W("h2", null, "Мои собственные идеи (" + A(e.model.own.length) + ")", 1), r[7] ||= W("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "nav",
				"data-nav": "myideas"
			}, "Добавить или изменить →", -1)]),
			e.model.own.length ? (H(), U("div", SS, [(H(!0), U(V, null, B(e.model.own, (e) => (H(), U("article", {
				key: e.id,
				class: "idea"
			}, [
				W("div", CS, A(e.genre), 1),
				W("h3", null, A(e.title), 1),
				W("p", null, A(e.pitch), 1),
				W("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "edit-manual-idea",
					"data-id": e.id
				}, "Открыть запись →", 8, wS)
			]))), 128))])) : (H(), U("div", TS, [...r[8] ||= [W("strong", null, "Пока нет своих идей", -1), K("Добавь их в личном кабинете.", -1)]])),
			W("div", ES, [W("h2", null, "Идеи из генератора (" + A(e.model.generated.length) + ")", 1), r[9] ||= W("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "nav",
				"data-nav": "ideas"
			}, "＋ Создать ещё", -1)]),
			e.model.generated.length ? (H(), U("div", DS, [(H(!0), U(V, null, B(e.model.generated, (e) => (H(), U("article", {
				key: e.id,
				class: "idea generated-card"
			}, [
				W("div", OS, A(e.genre) + " · " + A(e.topic), 1),
				W("h3", null, A(e.title), 1),
				W("p", null, A(e.pitch), 1),
				W("p", kS, A(e.storyLine), 1),
				W("div", AS, [r[10] ||= W("span", null, "ХУК ПРИПЕВА", -1), W("strong", null, A(e.hook), 1)]),
				e.detail ? (H(), U("p", jS, "Твоя деталь: " + A(e.detail), 1)) : q("", !0),
				W("div", MS, [
					W("button", {
						type: "button",
						class: "btn primary small",
						"data-action": "generated-use",
						"data-id": e.id
					}, "В Suno Studio", 8, NS),
					W("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "generated-copy",
						"data-id": e.id
					}, "Копировать", 8, PS),
					W("button", {
						type: "button",
						class: "btn danger small",
						"data-action": "generated-delete",
						"data-id": e.id,
						"aria-label": "Удалить идею «" + e.title + "»"
					}, "Удалить", 8, FS)
				])
			]))), 128))])) : (H(), U("div", IS, [...r[11] ||= [W("strong", null, "Сохранённых новых идей нет", -1), K("Создай идеи в генераторе и нажми «Сохранить».", -1)]])),
			W("div", LS, [W("h2", null, "Мои промпты (" + A(e.model.prompts.length) + ")", 1), r[12] ||= W("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "nav",
				"data-nav": "myprompts"
			}, "Добавить или изменить →", -1)]),
			e.model.prompts.length ? (H(), U("div", RS, [(H(!0), U(V, null, B(e.model.prompts, (e) => (H(), U("article", {
				key: e.id,
				class: "saved-item"
			}, [
				W("div", zS, [W("h3", null, A(e.title), 1), W("div", BS, [W("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "copy-saved",
					"data-id": e.id
				}, "Копировать", 8, VS), W("button", {
					type: "button",
					class: "btn danger small",
					"data-action": "delete-saved",
					"data-id": e.id,
					"aria-label": "Удалить промпт «" + e.title + "»"
				}, "Удалить", 8, HS)])]),
				W("p", null, A(e.text), 1),
				W("span", US, A(e.date), 1)
			]))), 128))])) : (H(), U("div", WS, [...r[13] ||= [W("strong", null, "Промптов пока нет", -1), K("Создай первый в Suno Studio и сохрани в библиотеке.", -1)]]))
		], 64));
	}
}, KS = {
	key: 0,
	class: "sub",
	"data-sb-vue-poetry-source-count": ""
}, qS = {
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
		let t = e, n = /* @__PURE__ */ P(null), r = $(), i = () => {
			n.value && r.publishPoetrySourceSummary(n.value.value);
		}, a = (e) => {
			e.target.closest?.("[data-action=\"sb-poetry-accent\"]") && i();
		};
		return z(() => {
			t.initial.highlighted && t.api.enableHighlight(n.value), i(), document.addEventListener("click", a);
		}), jr(() => document.removeEventListener("click", a)), (t, a) => (H(), U(V, null, [
			a[1] ||= W("label", { for: "custom-idea-lyrics" }, "Оригинальный текст (необязательно)", -1),
			a[0] || (ua(-1, !0), (a[0] = W("textarea", {
				id: "custom-idea-lyrics",
				ref_key: "area",
				ref: n,
				value: e.initial.values.lyrics,
				onInput: i,
				rows: "12",
				maxlength: "20000",
				placeholder: "Куплет 1:\nТекст первого куплета...\n\nПрипев:\nТекст припева..."
			}, null, 40, ["value"])).cacheIndex = 0, ua(1), a[0]),
			I(r).poetrySourceSummary.ready ? (H(), U("p", KS, " Исходный текст: " + A(I(r).poetrySourceSummary.charCount) + " / 20000 символов · " + A(I(r).poetrySourceSummary.lineCount) + " непустых строк ", 1)) : q("", !0)
		], 64));
	}
}, JS = {
	key: 0,
	class: "workbench-note",
	"data-sb-vue-poetry-tools-count": ""
}, YS = {
	key: 1,
	class: "workbench-note",
	"data-sb-vue-poetry-analysis-count": ""
}, XS = {
	key: 2,
	class: "workbench-note",
	"data-sb-vue-poetry-ambiguity-count": ""
}, ZS = {
	key: 3,
	class: "workbench-note",
	"data-sb-vue-tags-summary": ""
}, QS = {
	key: 0,
	"data-sb-vue-tags-freshness": "",
	role: "status"
}, $S = { key: 0 }, eC = { key: 1 }, tC = { key: 2 }, nC = { class: "field" }, rC = ["value"], iC = { class: "workbench-switches" }, aC = ["id", "onUpdate:modelValue"], oC = { class: "field" }, sC = { class: "detail-actions" }, cC = {
	type: "button",
	class: "btn ghost",
	"data-action": "copy-current-lyrics"
}, lC = ["innerHTML"], uC = { class: "field" }, dC = { class: "detail-actions" }, fC = {
	type: "button",
	class: "btn ghost",
	"data-action": "copy-current-style"
}, pC = ["innerHTML"], mC = {
	__name: "LyricsTools",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ M({ ...t.initial.values }), r = /* @__PURE__ */ M({ ...t.initial.switches }), i = $(), a = {
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
		return (t, c) => (H(), U(V, null, [
			I(i).poetrySourceSummary.ready ? (H(), U("p", JS, " Исходник для аранжировки: " + A(I(i).poetrySourceSummary.lineCount) + " строк, " + A(I(i).poetrySourceSummary.wordCount) + " слов ", 1)) : q("", !0),
			I(i).poetryAnalysisSummary.analyzed ? (H(), U("p", YS, " Последний анализ: " + A(I(i).poetryAnalysisSummary.rowCount) + " строк · " + A(I(i).poetryAnalysisSummary.stressMarkCount) + " меток ударения · " + A(I(i).poetryAnalysisSummary.suggestionCount) + " рекомендаций ", 1)) : q("", !0),
			I(i).poetryAmbiguitySummary.ready ? (H(), U("p", XS, " Предпросмотр ударений: " + A(I(i).poetryAmbiguitySummary.occurrenceCount) + " неоднозначных вхождений · " + A(I(i).poetryAmbiguitySummary.distinctCount) + " разных слов ", 1)) : q("", !0),
			I(i).performanceTagsSummary.ready ? (H(), U("p", ZS, [K(" Теги исполнения: " + A(a[I(i).performanceTagsSummary.mode]) + " · интенсивность " + A(I(i).performanceTagsSummary.intensity) + "/5 · " + A(I(i).performanceTagsSummary.enabledTechniques) + " приёмов · " + A(I(i).performanceTagsSummary.busy ? "идёт генерация" : I(i).performanceTagsSummary.previewOpen ? I(i).performanceTagsSummary.sectionCount + " секций в предпросмотре" : "предпросмотр закрыт") + " ", 1), I(i).performanceTagsSummary.previewOpen ? (H(), U("span", QS, [
				K(" · " + A(I(i).performanceTagsSummary.previewFresh ? "Текст и настройки не изменены; проверь теги перед применением." : "Предпросмотр устарел — создай новый.") + " ", 1),
				I(i).performanceTagsSummary.sourceChanged ? (H(), U("span", $S, " Изменён исходник.")) : q("", !0),
				I(i).performanceTagsSummary.targetChanged ? (H(), U("span", eC, " Изменено готовое поле Lyrics.")) : q("", !0),
				I(i).performanceTagsSummary.settingsChanged ? (H(), U("span", tC, " Изменены настройки.")) : q("", !0)
			])) : q("", !0)])) : q("", !0),
			W("div", nC, [c[3] ||= W("label", { for: "lyrics-tag-preset" }, "Характер аранжировки", -1), L(W("select", {
				id: "lyrics-tag-preset",
				"onUpdate:modelValue": c[0] ||= (e) => n.preset = e
			}, [(H(), U(V, null, B(o, ([e, t]) => W("option", {
				key: e,
				value: e
			}, A(t), 9, rC)), 64))], 512), [[X, n.preset]])]),
			W("div", iC, [(H(), U(V, null, B(s, ([e, t]) => W("label", { key: e }, [L(W("input", {
				id: "lyrics-" + e,
				"onUpdate:modelValue": (t) => r[e] = t,
				type: "checkbox"
			}, null, 8, aC), [[Wo, r[e]]]), K(" " + A(t), 1)])), 64))]),
			c[8] ||= W("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "format-idea-lyrics"
			}, "✨ Создать теги и усилители", -1),
			c[9] ||= W("p", { class: "workbench-note" }, "Разметка примерная: если в тексте нет названий секций, куплеты и припевы определяются по абзацам. Проверь расположение тегов перед копированием.", -1),
			W("div", oC, [c[4] ||= W("label", { for: "custom-idea-tagged" }, "Готовая версия для поля Lyrics в Suno (можно исправить вручную)", -1), L(W("textarea", {
				id: "custom-idea-tagged",
				"onUpdate:modelValue": c[1] ||= (e) => n.tagged = e,
				rows: "13",
				maxlength: "25000",
				placeholder: "[Verse 1]\n...\n\n[Chorus - powerful melodic hook]\n..."
			}, null, 512), [[Y, n.tagged]])]),
			W("div", sC, [W("button", cC, [W("span", { innerHTML: e.initial.copyIcon }, null, 8, lC), c[5] ||= K(" Копировать Lyrics", -1)])]),
			W("div", uC, [c[6] ||= W("label", { for: "custom-idea-style" }, "Дополнительное описание для поля Style (до 1000 символов)", -1), L(W("textarea", {
				id: "custom-idea-style",
				"onUpdate:modelValue": c[2] ||= (e) => n.style = e,
				rows: "4",
				maxlength: "1000",
				placeholder: "Описание жанра, вокала и динамики для Suno"
			}, null, 512), [[Y, n.style]])]),
			W("div", dC, [W("button", fC, [W("span", { innerHTML: e.initial.copyIcon }, null, 8, pC), c[7] ||= K(" Копировать Style", -1)])])
		], 64));
	}
}, hC = { class: "sb-vt-field" }, gC = ["value"], _C = ["value"], vC = {
	class: "sb-vt-hint",
	id: "sb-vt-mode-hint"
}, yC = { class: "sb-vt-grid" }, bC = { class: "sb-vt-field" }, xC = ["value"], SC = ["value"], CC = { class: "sb-vt-field" }, wC = ["value"], TC = ["value"], EC = {
	key: 0,
	class: "sb-vt-field"
}, DC = ["value"], OC = ["value"], kC = { class: "sb-vt-intensity" }, AC = { class: "sb-vt-between" }, jC = { id: "sb-vt-intensity-label" }, MC = ["value"], NC = { class: "sb-vt-options" }, PC = ["data-vt-pref", "checked"], FC = {
	key: 1,
	class: "sb-vt-consent",
	id: "sb-vt-consent-row"
}, IC = { class: "sb-vt-buttons" }, LC = ["disabled"], RC = {
	id: "sb-vt-result",
	"aria-live": "polite"
}, zC = {
	key: 0,
	class: "sb-vt-draft"
}, BC = { class: "sb-vt-draft-head" }, VC = { class: "sb-vt-method" }, HC = { class: "sb-vt-section-list" }, UC = { class: "sb-vt-section-heading" }, WC = { class: "sb-vt-section-controls" }, GC = [
	"data-vt-preset",
	"value",
	"aria-label"
], KC = ["value"], qC = [
	"data-vt-cue",
	"value",
	"aria-label"
], JC = { class: "sb-vt-field" }, YC = ["value"], XC = {
	class: "sb-vt-small",
	id: "sb-vt-preview-state"
}, ZC = {
	__name: "PerformanceTags",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ F(t.api.snapshot()), r = $(), i = J(() => n.value?.prefs || {}), a = J(() => n.value?.draft || null), o = [
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
		return z(() => {
			r.publishPerformanceTagsSummary(n.value), window.addEventListener("sunoboom:tags-updated", u);
		}), Mr(() => {
			window.removeEventListener("sunoboom:tags-updated", u), r.clearPerformanceTagsSummary();
		}), (e, t) => (H(), U(V, null, [
			t[12] ||= W("div", { class: "sb-vt-header" }, [W("span", { class: "sb-vt-symbol" }, "🎭"), W("div", null, [W("h3", null, "Генератор тегов исполнения"), W("p", null, "Вокальная драматургия по секциям. Без изменения слов песни; результат можно проверить и применить только вручную.")])], -1),
			W("div", hC, [t[0] ||= W("label", { for: "sb-vt-mode" }, "Способ генерации", -1), W("select", {
				id: "sb-vt-mode",
				"data-vt-pref": "mode",
				value: i.value.mode
			}, [(H(), U(V, null, B(o, ([e, t]) => W("option", {
				key: e,
				value: e
			}, A(t), 9, _C)), 64))], 8, gC)]),
			W("p", vC, A(n.value.modeHint), 1),
			W("div", yC, [W("div", bC, [t[1] ||= W("label", { for: "sb-vt-source" }, "Источник текста", -1), W("select", {
				id: "sb-vt-source",
				"data-vt-pref": "source",
				value: i.value.source
			}, [(H(), U(V, null, B(c, ([e, t]) => W("option", {
				key: e,
				value: e
			}, A(t), 9, SC)), 64))], 8, xC)]), W("div", CC, [t[2] ||= W("label", { for: "sb-vt-density" }, "Детализация метатегов", -1), W("select", {
				id: "sb-vt-density",
				"data-vt-pref": "density",
				value: i.value.density
			}, [(H(), U(V, null, B(s, ([e, t]) => W("option", {
				key: e,
				value: e
			}, A(t), 9, TC)), 64))], 8, wC)])]),
			n.value.artists?.length ? (H(), U("div", EC, [t[4] ||= W("label", { for: "sb-vt-artist" }, "Учесть «ДНК артиста» (необязательно)", -1), W("select", {
				id: "sb-vt-artist",
				"data-vt-pref": "artistId",
				value: i.value.artistId
			}, [t[3] ||= W("option", { value: "" }, "Без привязки к артисту", -1), (H(!0), U(V, null, B(n.value.artists, (e) => (H(), U("option", {
				key: e.id,
				value: e.id
			}, A(e.name), 9, OC))), 128))], 8, DC)])) : q("", !0),
			W("div", kC, [
				W("div", AC, [t[5] ||= W("label", { for: "sb-vt-intensity" }, "Максимальная интенсивность исполнения", -1), W("strong", jC, A(i.value.intensity) + " / 5", 1)]),
				W("input", {
					type: "range",
					id: "sb-vt-intensity",
					min: "1",
					max: "5",
					step: "1",
					value: i.value.intensity,
					"data-vt-pref": "intensity"
				}, null, 8, MC),
				t[6] ||= W("div", { class: "sb-vt-between sb-vt-scale" }, [W("span", null, "Сдержанная"), W("span", null, "Экспрессивная")], -1)
			]),
			W("div", NC, [(H(), U(V, null, B(l, ([e, t]) => W("label", { key: e }, [W("input", {
				type: "checkbox",
				"data-vt-pref": e,
				checked: i.value[e]
			}, null, 8, PC), K(" " + A(t), 1)])), 64))]),
			n.value.hasEndpoint ? (H(), U("label", FC, [...t[7] ||= [W("input", {
				type: "checkbox",
				id: "sb-vt-consent"
			}, null, -1), K(" Разрешаю отправить выбранный текст песни на защищённый сервер для анализа Gemini. ", -1)]])) : q("", !0),
			W("div", IC, [W("button", {
				type: "button",
				class: "btn primary",
				"data-action": "vt-generate",
				disabled: n.value.busy
			}, "✨ Создать предпросмотр", 8, LC), t[8] ||= W("span", { class: "sb-vt-note" }, "Никакого автоматического применения к Lyrics.", -1)]),
			W("div", {
				id: "sb-vt-notice",
				class: k(["sb-vt-notice", n.value.notice?.kind]),
				role: "status",
				"aria-live": "polite"
			}, A(n.value.notice?.text), 3),
			W("div", RC, [a.value ? (H(), U("div", zC, [
				W("div", BC, [W("h4", null, "Предпросмотр · " + A(a.value.sections.length) + " секций", 1), W("span", VC, A(a.value.method), 1)]),
				t[10] ||= W("p", { class: "sb-vt-small" }, " Проверь каждую секцию. Теги можно выбрать из списка или переписать вручную. Оригинальные строки песни остаются неизменными. ", -1),
				W("div", HC, [(H(!0), U(V, null, B(a.value.sections, (e, t) => (H(), U("div", {
					key: e.id,
					class: "sb-vt-section"
				}, [W("div", UC, [W("strong", null, A(e.label), 1), W("span", null, A(t + 1) + "/" + A(a.value.sections.length), 1)]), W("div", WC, [W("select", {
					"data-vt-preset": t,
					value: a.value.tags[t],
					"aria-label": "Готовые теги для " + e.label
				}, [(H(!0), U(V, null, B(n.value.presets, ([e, t]) => (H(), U("option", {
					key: e,
					value: e
				}, A(t), 9, KC))), 128))], 8, GC), W("input", {
					"data-vt-cue": t,
					value: a.value.tags[t],
					maxlength: "165",
					placeholder: "Например: Warm Emotional Vocals",
					"aria-label": "Тег исполнения " + e.label
				}, null, 8, qC)])]))), 128))]),
				W("div", JC, [t[9] ||= W("label", { for: "sb-vt-preview" }, " Готовый Lyrics — разрешено редактировать только инструкции, не слова песни ", -1), W("textarea", {
					id: "sb-vt-preview",
					spellcheck: "false",
					rows: "13",
					maxlength: "25000",
					value: a.value.preview
				}, null, 8, YC)]),
				W("p", XC, A(n.value.previewState), 1),
				t[11] ||= ba("<div class=\"sb-vt-draft-actions\"><button type=\"button\" class=\"btn primary\" data-action=\"vt-apply\"> ✓ Применить к Lyrics </button><button type=\"button\" class=\"btn ghost\" data-action=\"vt-copy\"> Копировать предпросмотр </button><button type=\"button\" class=\"btn ghost\" data-action=\"vt-refresh\"> Обновить предпросмотр </button><button type=\"button\" class=\"btn ghost\" data-action=\"vt-cancel\"> Отменить </button></div>", 1)
			])) : q("", !0)])
		], 64));
	}
}, QC = { class: "sbab-heading" }, $C = {
	key: 0,
	class: "sbab-kicker",
	"data-sb-vue-player-recap": ""
}, ew = { class: "sbab-files" }, tw = ["data-sbab-card"], nw = { class: "sbab-file-top" }, rw = { class: "sbab-side-label" }, iw = ["id"], aw = ["id"], ow = ["id"], sw = { class: "sbab-file-bottom" }, cw = ["for"], lw = ["data-side", "disabled"], uw = ["id"], dw = { class: "sbab-console" }, fw = { class: "sbab-console-top" }, pw = { id: "sbab-active-label" }, mw = { class: "sbab-wave" }, hw = {
	class: "sbab-wave-bars",
	"aria-hidden": "true"
}, gw = {
	class: "sbab-toggle",
	role: "group",
	"aria-label": "Выбор версии для прослушивания"
}, _w = ["data-side", "aria-pressed"], vw = { class: "sbab-scrub" }, yw = ["value", "disabled"], bw = { class: "sbab-times" }, xw = { id: "sbab-current" }, Sw = { id: "sbab-duration" }, Cw = { class: "sbab-transport" }, ww = ["disabled", "aria-label"], Tw = { class: "sbab-clip" }, Ew = { class: "sbab-clip-actions" }, Dw = {
	type: "button",
	"data-sbab-action": "mark-start"
}, Ow = { id: "sbab-start" }, kw = {
	type: "button",
	"data-sbab-action": "mark-end"
}, Aw = { id: "sbab-end" }, jw = ["aria-pressed", "aria-label"], Mw = { class: "sbab-volume" }, Nw = { key: 0 }, Pw = ["for"], Fw = [
	"id",
	"data-sbab-vol",
	"value"
], Iw = ["hidden"], Lw = { class: "sbab-review" }, Rw = { class: "sbab-rating-grid" }, zw = { class: "sbab-rating-label" }, Bw = [
	"data-sbab-score",
	"aria-label",
	"value"
], Vw = ["value"], Hw = { class: "sbab-note-grid" }, Uw = ["for"], Ww = [
	"id",
	"data-sbab-note",
	"placeholder",
	"value"
], Gw = {
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
		let t = e, n = /* @__PURE__ */ P(t.initialModel), r = $();
		R(n, (e) => r.publishPlayerAbSummary(e), { immediate: !0 });
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
		return z(() => {
			window.addEventListener("sunoboom:player-ab-update", s), s();
		}), jr(() => window.removeEventListener("sunoboom:player-ab-update", s)), (e, t) => (H(), U("section", {
			id: "sbab-compare",
			class: k(["sbab-shell", {
				"sbab-is-playing": n.value.playing,
				"sbab-has-files": n.value.hasBoth
			}]),
			"aria-label": "Сравнение аудиоверсий A и B",
			"data-sb-vue-player-ab": ""
		}, [
			W("header", QC, [W("div", null, [
				t[0] ||= W("span", { class: "sbab-kicker" }, "SUNOBOOM · AUDIO TEST LAB", -1),
				t[1] ||= W("h2", null, "A/B-сравнение аудиоверсий", -1),
				t[2] ||= W("p", null, "Загрузи два варианта песни и переключайся между ними в одной временной точке. Сравнивай вокал, аранжировку и финальное звучание.", -1),
				I(r).playerLabSummary.ready ? (H(), U("p", $C, "Очередь плеера LAB: " + A(I(r).playerLabSummary.queueCount) + " треков · " + A(I(r).playerLabSummary.playing ? "воспроизведение" : "пауза"), 1)) : q("", !0)
			]), t[3] ||= W("span", { class: "sbab-lab-badge" }, "A ↔ B", -1)]),
			W("div", ew, [(H(), U(V, null, B(i, (e) => W("div", {
				key: e,
				class: k(["sbab-file-card", [e === "A" ? "sbab-card-a" : "sbab-card-b", { "sbab-active-card": n.value.active === e }]]),
				"data-sbab-card": e
			}, [
				W("div", nw, [W("span", rw, "ВЕРСИЯ " + A(e), 1), W("span", {
					class: "sbab-loaded",
					id: "sbab-ready-" + e
				}, A(n.value.files[e].ready ? "Файл добавлен" : "Ожидает файл"), 9, iw)]),
				W("strong", {
					class: "sbab-filename",
					id: "sbab-name-" + e
				}, A(n.value.files[e].name), 9, aw),
				W("p", {
					class: "sbab-filesub",
					id: "sbab-info-" + e
				}, A(n.value.files[e].info), 9, ow),
				W("div", sw, [
					W("label", {
						class: "sbab-upload",
						for: "sbab-file-" + e
					}, [t[4] ||= W("svg", {
						viewBox: "0 0 24 24",
						width: "19",
						height: "19",
						"aria-hidden": "true"
					}, [W("path", {
						d: "M12 5v14M5 12h14",
						stroke: "currentColor",
						"stroke-width": "2",
						"stroke-linecap": "round"
					})], -1), K(" " + A(n.value.files[e].ready ? "Заменить файл" : "Выбрать файл"), 1)], 8, cw),
					G(I(bp), {
						type: "file",
						id: "sbab-file-" + e,
						accept: "audio/*,.mp3,.wav,.m4a,.aac,.ogg,.flac,.opus",
						"data-sbab-file": e
					}, null, 8, ["id", "data-sbab-file"]),
					W("button", {
						type: "button",
						"data-sbab-action": "remove",
						"data-side": e,
						class: "sbab-remove",
						disabled: !n.value.files[e].ready
					}, "Удалить", 8, lw),
					W("span", {
						class: "sbab-length",
						id: "sbab-length-" + e
					}, A(n.value.files[e].duration), 9, uw)
				])
			], 10, tw)), 64))]),
			t[20] ||= W("div", { class: "sbab-demo-row" }, [W("p", null, "Для первого теста можно создать два разных оригинальных коротких аудиофрагмента."), W("button", {
				type: "button",
				"data-sbab-action": "demo"
			}, "Создать демо A и B")], -1),
			W("div", dw, [
				W("div", fw, [t[5] ||= W("span", { class: "sbab-kicker" }, "АКТИВНОЕ ПРОСЛУШИВАНИЕ", -1), W("span", pw, "Версия " + A(n.value.active) + A(n.value.playing ? " · Воспроизведение" : ""), 1)]),
				W("div", mw, [W("div", hw, [(H(!0), U(V, null, B(I(o), (e, t) => (H(), U("i", {
					key: t,
					style: O({ "--bar-height": e })
				}, null, 4))), 128))]), t[6] ||= W("div", { class: "sbab-wave-center" }, "A / B", -1)]),
				W("div", gw, [(H(), U(V, null, B(i, (e) => W("button", {
					key: e,
					type: "button",
					class: k(e === "A" ? "sbab-btn-a" : "sbab-btn-b"),
					"data-sbab-action": "select",
					"data-side": e,
					"aria-pressed": String(n.value.active === e)
				}, [K(A(e) + " ", 1), W("small", null, "Версия " + A(e), 1)], 10, _w)), 64))]),
				W("div", vw, [
					t[7] ||= W("label", {
						for: "sbab-seek",
						class: "sbab-sr"
					}, "Перемотка A/B", -1),
					W("input", {
						type: "range",
						id: "sbab-seek",
						min: "0",
						max: "1000",
						step: "1",
						value: n.value.seek,
						disabled: !n.value.canSeek
					}, null, 8, yw),
					W("div", bw, [W("span", xw, A(n.value.currentTime), 1), W("span", Sw, A(n.value.duration), 1)])
				]),
				W("div", Cw, [
					t[8] ||= W("button", {
						type: "button",
						"data-sbab-action": "back",
						"aria-label": "На 5 секунд назад"
					}, [W("svg", {
						viewBox: "0 0 24 24",
						width: "21",
						height: "21",
						"aria-hidden": "true"
					}, [W("path", {
						d: "M7 5v14M18 5 8 12l10 7V5Z",
						stroke: "currentColor",
						"stroke-width": "2",
						fill: "currentColor",
						"stroke-linejoin": "round",
						"stroke-linecap": "round"
					})])], -1),
					W("button", {
						type: "button",
						class: "sbab-big-play",
						id: "sbab-play",
						"data-sbab-action": "toggle",
						disabled: !n.value.canPlay,
						"aria-label": n.value.playing ? "Пауза" : "Воспроизвести"
					}, A(n.value.playing ? "❚❚" : "▶"), 9, ww),
					t[9] ||= W("button", {
						type: "button",
						"data-sbab-action": "forward",
						"aria-label": "На 5 секунд вперёд"
					}, [W("svg", {
						viewBox: "0 0 24 24",
						width: "21",
						height: "21",
						"aria-hidden": "true"
					}, [W("path", {
						d: "M17 5v14M6 5l10 7-10 7V5Z",
						stroke: "currentColor",
						"stroke-width": "2",
						fill: "currentColor",
						"stroke-linejoin": "round",
						"stroke-linecap": "round"
					})])], -1)
				]),
				W("div", Tw, [t[13] ||= W("div", { class: "sbab-clip-title" }, [W("strong", null, "Повтор выбранного фрагмента"), W("small", null, "Например, только припев или куплет")], -1), W("div", Ew, [
					W("button", Dw, [t[10] ||= K("Начало: ", -1), W("span", Ow, A(n.value.start), 1)]),
					W("button", kw, [t[11] ||= K("Конец: ", -1), W("span", Aw, A(n.value.end), 1)]),
					W("button", {
						type: "button",
						"data-sbab-action": "loop",
						id: "sbab-loop",
						"aria-pressed": String(n.value.loop),
						"aria-label": n.value.loop ? "Повтор фрагмента включён" : "Повтор фрагмента выключен"
					}, A(n.value.loop ? "↻ Повтор включён" : "↻ Повтор выкл."), 9, jw),
					t[12] ||= W("button", {
						type: "button",
						"data-sbab-action": "clear-segment",
						"aria-label": "Очистить границы фрагмента"
					}, "✕", -1)
				])]),
				W("div", Mw, [n.value.ios ? (H(), U("span", Nw, "📱 Громкость регулируется кнопками телефона")) : (H(), U(V, { key: 1 }, B(i, (e) => W("label", {
					key: e,
					for: "sbab-vol-" + e
				}, [K(" Уровень " + A(e) + " ", 1), W("input", {
					id: "sbab-vol-" + e,
					"data-sbab-vol": e,
					type: "range",
					min: "0",
					max: "100",
					value: n.value.volume[e]
				}, null, 8, Fw)], 8, Pw)), 64))]),
				W("p", {
					id: "sbab-status",
					class: "sbab-status",
					role: "status",
					"aria-live": "polite",
					hidden: !n.value.status
				}, A(n.value.status), 9, Iw)
			]),
			W("section", Lw, [
				t[18] ||= W("header", null, [W("h3", null, "Оценка на слух"), W("p", null, "Субъективное сравнение. Оценки выставляешь ты — автоматического анализа качества здесь нет.")], -1),
				W("div", Rw, [
					t[15] ||= W("div", { class: "sbab-rating-head" }, "Параметр", -1),
					t[16] ||= W("div", { class: "sbab-rating-head" }, "A", -1),
					t[17] ||= W("div", { class: "sbab-rating-head" }, "B", -1),
					(H(), U(V, null, B(a, (e) => (H(), U(V, { key: e.key }, [W("div", zw, A(e.label), 1), (H(), U(V, null, B(i, (r) => W("div", { key: r }, [W("select", {
						"data-sbab-score": r + ":" + e.key,
						"aria-label": e.label + " — версия " + r,
						value: n.value.scores[r][e.key]
					}, [t[14] ||= W("option", { value: 0 }, "—", -1), (H(), U(V, null, B(5, (e) => W("option", {
						key: e,
						value: e
					}, A(e) + "/5", 9, Vw)), 64))], 8, Bw)])), 64))], 64))), 64))
				]),
				W("div", Hw, [(H(), U(V, null, B(i, (e) => W("label", {
					key: e,
					for: "sbab-note-" + e
				}, [K(" Заметки по " + A(e) + " ", 1), W("textarea", {
					id: "sbab-note-" + e,
					"data-sbab-note": e,
					rows: "3",
					maxlength: "1000",
					placeholder: e === "A" ? "Сильные стороны, что улучшить…" : "Вокал, баланс, пространство…",
					value: n.value.notes[e]
				}, null, 8, Ww)], 8, Uw)), 64))]),
				t[19] ||= W("div", { class: "sbab-review-actions" }, [W("button", {
					type: "button",
					"data-sbab-action": "copy",
					class: "sbab-review-copy"
				}, "Скопировать результаты"), W("button", {
					type: "button",
					"data-sbab-action": "reset-review",
					class: "sbab-review-clear"
				}, "Очистить оценки")], -1)
			]),
			t[21] ||= W("p", { class: "sbab-footer-note" }, "Файлы не передаются на сервер. При переключении используется одинаковая временная позиция в секундах; точное совпадение музыкальных моментов зависит от самих версий. Для честного сравнения выровняй их громкость. На телефоне переключение может иметь небольшую паузу из-за браузера.", -1)
		], 2));
	}
}, Kw = {
	class: "sbp-layout",
	"data-sb-vue-player-lab": ""
}, qw = {
	class: "sbp-main",
	"aria-label": "Плеер"
}, Jw = {
	class: "sbp-bars",
	"aria-hidden": "true"
}, Yw = { class: "sbp-title-area" }, Xw = {
	id: "sbp-now-tag",
	class: "sbp-now-tag"
}, Zw = { id: "sbp-title" }, Qw = { id: "sbp-artist" }, $w = {
	id: "sbp-counter",
	class: "sbp-counter"
}, eT = {
	key: 0,
	class: "sbp-now-tag",
	"data-sb-vue-ab-recap": ""
}, tT = { class: "sbp-progress" }, nT = ["value", "disabled"], rT = { class: "sbp-times" }, iT = { id: "sbp-time-current" }, aT = { id: "sbp-time-total" }, oT = { class: "sbp-transport" }, sT = ["aria-pressed"], cT = ["aria-label", "disabled"], lT = ["title", "aria-label"], uT = { class: "sbp-extras" }, dT = { class: "sbp-volume" }, fT = {
	key: 0,
	class: "sbp-ios-volume"
}, pT = ["value"], mT = { id: "sbp-volume-label" }, hT = {
	class: "sbp-speed",
	for: "sbp-rate"
}, gT = ["value"], _T = ["value"], vT = { class: "sbp-side" }, yT = { class: "sbp-side-head" }, bT = { id: "sbp-list-count" }, xT = ["disabled"], ST = {
	class: "sbp-dropzone",
	id: "sbp-dropzone"
}, CT = {
	class: "sbp-track-list",
	id: "sbp-list",
	"aria-label": "Список треков"
}, wT = ["data-sbp-item"], TT = ["data-index", "aria-label"], ET = { class: "sbp-track-index" }, DT = { class: "sbp-track-meta" }, OT = { class: "sbp-track-duration" }, kT = ["data-index", "aria-label"], AT = {
	key: 0,
	class: "sbp-empty"
}, jT = {
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
		let t = e, n = /* @__PURE__ */ P(t.initialModel), r = $();
		R(n, (e) => r.publishPlayerLabSummary(e), { immediate: !0 });
		function i() {
			let e = t.api.snapshot();
			e && (n.value = e);
		}
		z(() => {
			window.addEventListener("sunoboom:player-lab-update", i), i();
		}), jr(() => window.removeEventListener("sunoboom:player-lab-update", i));
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
		return (e, t) => (H(), U("div", Kw, [W("section", qw, [
			W("div", { class: k(["sbp-art", { "is-playing": n.value.playing }]) }, [
				t[0] ||= W("div", { class: "sbp-art-orb" }, "♫", -1),
				W("div", Jw, [(H(!0), U(V, null, B(I(a), (e) => (H(), U("i", {
					key: e.index,
					style: O({
						"--sbp-i": e.index,
						"--sbp-h": e.height
					})
				}, null, 4))), 128))]),
				t[1] ||= W("span", null, "SONIC LAB / PRIVATE PREVIEW", -1)
			], 2),
			W("div", Yw, [W("div", null, [
				W("div", Xw, A(n.value.nowTag), 1),
				W("h2", Zw, A(n.value.title), 1),
				W("p", Qw, A(n.value.artist), 1)
			]), W("span", $w, A(n.value.counter), 1)]),
			I(r).playerAbSummary.ready && I(r).playerAbSummary.readyCount ? (H(), U("p", eT, "A/B: загружено " + A(I(r).playerAbSummary.readyCount) + " из 2 · активна " + A(I(r).playerAbSummary.active), 1)) : q("", !0),
			W("div", tT, [
				t[2] ||= W("label", {
					for: "sbp-seek",
					class: "sbp-sr"
				}, "Позиция воспроизведения", -1),
				W("input", {
					id: "sbp-seek",
					type: "range",
					min: "0",
					max: "1000",
					step: "1",
					value: n.value.seekValue,
					disabled: n.value.seekDisabled,
					"aria-label": "Перемотка трека",
					style: O({ "--fill": n.value.seekValue / 10 + "%" })
				}, null, 12, nT),
				W("div", rT, [W("span", iT, A(n.value.currentTime), 1), W("span", aT, A(n.value.totalTime), 1)])
			]),
			W("div", oT, [
				W("button", {
					type: "button",
					class: k(["sbp-secondary", { "is-on": n.value.shuffle }]),
					id: "sbp-shuffle",
					"data-sbp-action": "shuffle",
					"aria-label": "Случайный порядок",
					"aria-pressed": String(n.value.shuffle),
					title: "Случайный порядок"
				}, "⤨", 10, sT),
				t[3] ||= W("button", {
					type: "button",
					class: "sbp-secondary sbp-skip",
					"data-sbp-action": "prev",
					"aria-label": "Предыдущий трек"
				}, [W("svg", {
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					focusable: "false"
				}, [W("path", {
					d: "M6 5v14",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2.5",
					"stroke-linecap": "round"
				}), W("path", {
					d: "M18 5 8 12l10 7V5Z",
					fill: "currentColor"
				})])], -1),
				W("button", {
					type: "button",
					class: "sbp-play",
					id: "sbp-play",
					"data-sbp-action": "play",
					"aria-label": n.value.playing ? "Пауза" : "Воспроизвести",
					disabled: !n.value.count
				}, A(n.value.playing ? "❚❚" : "▶"), 9, cT),
				t[4] ||= W("button", {
					type: "button",
					class: "sbp-secondary sbp-skip",
					"data-sbp-action": "next",
					"aria-label": "Следующий трек"
				}, [W("svg", {
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					focusable: "false"
				}, [W("path", {
					d: "M18 5v14",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2.5",
					"stroke-linecap": "round"
				}), W("path", {
					d: "m6 5 10 7-10 7V5Z",
					fill: "currentColor"
				})])], -1),
				W("button", {
					type: "button",
					class: k(["sbp-secondary", { "is-on": n.value.repeat !== "off" }]),
					"data-sbp-action": "repeat",
					id: "sbp-repeat",
					title: n.value.repeatLabel,
					"aria-label": n.value.repeatLabel
				}, A(n.value.repeat === "one" ? "↻₁" : "↻"), 11, lT)
			]),
			W("div", uT, [W("div", dT, [n.value.ios ? (H(), U("span", fT, "📱 Громкость регулируется кнопками телефона")) : (H(), U(V, { key: 1 }, [
				t[5] ||= W("label", { for: "sbp-volume" }, "Громкость", -1),
				t[6] ||= W("span", {
					id: "sbp-volume-icon",
					"aria-hidden": "true"
				}, "◖))", -1),
				W("input", {
					id: "sbp-volume",
					type: "range",
					min: "0",
					max: "100",
					value: n.value.volume,
					"aria-label": "Громкость"
				}, null, 8, pT),
				W("output", mT, A(n.value.volume) + "%", 1)
			], 64))]), W("label", hT, [t[7] ||= K(" Скорость ", -1), W("select", {
				id: "sbp-rate",
				"aria-label": "Скорость воспроизведения",
				value: n.value.rate
			}, [(H(), U(V, null, B(o, (e) => W("option", {
				key: e,
				value: e
			}, A(e) + "×", 9, _T)), 64))], 8, gT)])]),
			L(W("div", {
				class: "sbp-message",
				id: "sbp-message",
				role: "status",
				"aria-live": "polite"
			}, A(n.value.message), 513), [[co, n.value.message]])
		]), W("aside", vT, [
			W("div", yT, [W("div", null, [t[8] ||= W("h2", null, "Очередь воспроизведения", -1), W("small", bT, A(n.value.count) + " " + A(n.value.count === 1 ? "трек" : n.value.count > 1 && n.value.count < 5 ? "трека" : "треков"), 1)]), W("button", {
				type: "button",
				class: "sbp-clear",
				"data-sbp-action": "clear",
				id: "sbp-clear",
				disabled: !n.value.count
			}, "Очистить", 8, xT)]),
			W("div", ST, [
				t[9] ||= W("div", { class: "sbp-drop-icon" }, "↥", -1),
				t[10] ||= W("strong", null, "Загрузи свои треки", -1),
				t[11] ||= W("p", null, "MP3, WAV, M4A, AAC, OGG, FLAC — если формат поддерживается браузером. Файлы никуда не отправляются.", -1),
				t[12] ||= W("label", {
					class: "sbp-upload-label",
					for: "sbp-file"
				}, "Выбрать аудиофайлы", -1),
				G(I(bp), {
					id: "sbp-file",
					type: "file",
					accept: "audio/*,.mp3,.m4a,.aac,.wav,.ogg,.flac,.opus",
					multiple: ""
				})
			]),
			t[13] ||= W("div", { class: "sbp-demo-box" }, [W("div", null, [W("strong", null, "Нет аудиофайлов?"), W("p", null, "Создать 3 коротких оригинальных демо-сигнала для проверки управления.")]), W("button", {
				type: "button",
				"data-sbp-action": "demo",
				id: "sbp-demo"
			}, "+ Демо-треки")], -1),
			W("div", CT, [(H(!0), U(V, null, B(n.value.tracks, (e) => (H(), U("article", {
				key: e.id,
				class: k(["sbp-track", { "is-current": e.isCurrent }]),
				"data-sbp-item": e.id
			}, [
				W("button", {
					type: "button",
					class: "sbp-track-play",
					"data-sbp-action": "select",
					"data-index": e.index,
					"aria-label": "Включить " + e.name
				}, [W("span", ET, A(e.playLabel), 1), W("span", DT, [W("strong", null, A(e.name), 1), W("small", null, A(e.artist) + " · " + A(e.sourceLabel), 1)])], 8, TT),
				W("span", OT, A(e.durationLabel), 1),
				W("button", {
					type: "button",
					class: "sbp-track-remove",
					"data-sbp-action": "remove",
					"data-index": e.index,
					title: "Удалить из списка",
					"aria-label": "Удалить " + e.name
				}, "×", 8, kT)
			], 10, wT))), 128)), n.value.tracks.length ? q("", !0) : (H(), U("div", AT, " Плейлист пока пуст. Добавь MP3 или нажми «Демо-треки», чтобы начать тест. "))])
		])]));
	}
}, MT = {
	key: 0,
	class: "sb-poetry-empty"
}, NT = { class: "sb-poetry-stats" }, PT = { class: "sb-poetry-subline" }, FT = { class: "sb-poetry-sections" }, IT = { class: "sb-poetry-stanzas" }, LT = { class: "sb-poetry-stanza-name" }, RT = { class: "sb-poetry-stanza-data" }, zT = { class: "sb-poetry-lines" }, BT = { class: "sb-poetry-line-main" }, VT = { class: "sb-poetry-index" }, HT = { class: "sb-poetry-verse" }, UT = {
	class: "sb-poetry-syllable",
	title: "Оценка слогов"
}, WT = ["title"], GT = {
	key: 0,
	class: "sb-poetry-footnote"
}, KT = {
	key: 1,
	class: "sb-poetry-words"
}, qT = { class: "sb-poetry-tips" }, JT = {
	__name: "PoetryAnalysis",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ F(t.api.analysis()), r = J(() => n.value || {
			analyzed: !1,
			message: ""
		}), i = $();
		function a() {
			let e = t.api.analysis();
			e && (n.value = e, i.publishPoetryAnalysisSummary(e));
		}
		return z(() => {
			i.publishPoetryAnalysisSummary(n.value), window.addEventListener("sunoboom:poetry-updated", a);
		}), Mr(() => window.removeEventListener("sunoboom:poetry-updated", a)), (e, t) => r.value.analyzed ? (H(), U(V, { key: 1 }, [
			W("div", NT, [(H(!0), U(V, null, B(r.value.stats, (e) => (H(), U("div", {
				key: e.label,
				class: "sb-poetry-stat"
			}, [W("strong", null, A(e.value), 1), W("span", null, A(e.label), 1)]))), 128))]),
			W("p", PT, " Диапазон: " + A(r.value.lower) + "–" + A(r.value.upper) + " слогов на строку · меток ударения: " + A(r.value.markedStress) + ". ", 1),
			W("div", FT, [t[1] ||= W("h4", null, "Строфы и предполагаемая рифмовка", -1), W("div", IT, [(H(!0), U(V, null, B(r.value.stanzas, (e) => (H(), U("div", {
				key: e.id,
				class: "sb-poetry-stanza"
			}, [W("div", LT, A(e.section) + " · строфа " + A(e.position), 1), W("div", RT, [
				K(" Схема " + A(e.scheme) + " ", 1),
				t[0] ||= W("span", null, "·", -1),
				K(" разброс " + A(e.spread) + " сл. ", 1)
			])]))), 128))])]),
			t[4] ||= W("div", { class: "sb-poetry-lines-head" }, [W("strong", null, "Построчный анализ"), W("span", null, "Слоги · рифма")], -1),
			W("div", zT, [(H(!0), U(V, null, B(r.value.lines, (e) => (H(), U("div", {
				key: e.number,
				class: "sb-poetry-line"
			}, [
				W("div", BT, [W("span", VT, A(e.number) + ".", 1), W("span", HT, A(e.text), 1)]),
				W("div", UT, [W("span", null, A(e.syllables) + " сл.", 1), W("i", { style: O({ width: e.width + "%" }) }, null, 4)]),
				W("span", {
					class: k(["sb-poetry-letter", { "sb-poetry-letter-match": e.rhyme }]),
					title: e.repeat ? "Совпадение последнего слова" : e.rhyme ? "Предполагаемая рифма" : "Метка окончания"
				}, A(e.mark), 11, WT)
			]))), 128))]),
			r.value.rowCount > 120 ? (H(), U("p", GT, " Показаны первые 120 строк из " + A(r.value.rowCount) + "; статистика рассчитана по всему тексту. ", 1)) : q("", !0),
			r.value.frequent.length ? (H(), U("div", KT, [t[2] ||= W("strong", null, "Повторяющиеся слова:", -1), (H(!0), U(V, null, B(r.value.frequent, (e) => (H(), U("span", { key: e.word }, A(e.word) + " · " + A(e.count), 1))), 128))])) : q("", !0),
			W("div", qT, [t[3] ||= W("h4", null, "На что обратить внимание", -1), W("ul", null, [(H(!0), U(V, null, B(r.value.suggestions, (e, t) => (H(), U("li", { key: t }, A(e), 1))), 128))])]),
			t[5] ||= W("p", { class: "sb-poetry-footnote" }, " Анализ ориентировочный: счёт гласных не равен точной метрической скансии, совпадение окончаний не гарантирует рифму, а вокальная удобность зависит от темпа и мелодии. Исходный текст автоматически не изменяется. ", -1)
		], 64)) : (H(), U("p", MT, A(r.value.message), 1));
	}
}, YT = {
	class: "sbpc-workspace",
	"data-sb-vue-producer-detail": ""
}, XT = { class: "sbpc-panel sbpc-song-head" }, ZT = { class: "sbpc-head-top" }, QT = { class: "sbpc-completion" }, $T = { class: "sbpc-next" }, eE = {
	key: 0,
	class: "sbpc-help",
	"data-sb-vue-passport-detail-recap": ""
}, tE = { class: "sbpc-meta-editor" }, nE = { class: "sbpc-wide" }, rE = { class: "sbpc-panel" }, iE = { class: "sbpc-panel-head" }, aE = ["aria-valuenow"], oE = { class: "sbpc-stages" }, sE = ["data-status"], cE = { class: "sbpc-stage-index" }, lE = { class: "sbpc-stage-body" }, uE = { class: "sbpc-stage-title" }, dE = { class: "sbpc-stage-state" }, fE = {
	key: 0,
	class: "sbpc-resource-present"
}, pE = {
	key: 1,
	class: "sbpc-resource-empty"
}, mE = { class: "sbpc-stage-actions" }, hE = [
	"onUpdate:modelValue",
	"data-pc-stage",
	"aria-label"
], gE = ["value"], _E = ["data-step"], vE = { class: "sbpc-panel" }, yE = { class: "sbpc-links" }, bE = ["for"], xE = [
	"id",
	"onUpdate:modelValue",
	"data-pc-link"
], SE = ["value"], CE = ["data-type", "data-id"], wE = { class: "sbpc-panel sbpc-arrangement" }, TE = { class: "sbpc-panel-head" }, EE = { class: "sbpc-arrangement-actions" }, DE = {
	key: 0,
	type: "button",
	"data-pc-action": "restore-arrangement"
}, OE = {
	key: 0,
	class: "sbpc-subnote"
}, kE = { class: "sbpc-panel" }, AE = { class: "sbpc-panel-head" }, jE = {
	key: 0,
	class: "sbpc-log"
}, ME = {
	key: 1,
	class: "sbpc-empty"
}, NE = {
	__name: "ProducerSongDetail",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = $();
		R(() => t.model, (e) => n.publishMasterDetailSummary(e), { immediate: !0 });
		let r = /* @__PURE__ */ M({
			title: t.model.title,
			artist: t.model.artist,
			notes: t.model.notes
		}), i = /* @__PURE__ */ M(Object.fromEntries(t.model.links.map((e) => [e.field, e.value]))), a = /* @__PURE__ */ M(Object.fromEntries(t.model.stages.map((e) => [e.key, e.status])));
		return (t, o) => (H(), U("div", YT, [
			W("section", XT, [
				W("div", ZT, [o[3] ||= W("span", { class: "sbpc-kicker" }, "КАРТОЧКА ПРОДЮСИРОВАНИЯ", -1), W("span", QT, A(e.model.percent) + "% готовности", 1)]),
				W("h2", null, A(e.model.title || "Без названия"), 1),
				W("p", null, A(e.model.artist || "Исполнитель пока не указан") + A(e.model.projectTitle ? " · " + e.model.projectTitle : ""), 1),
				W("p", $T, A(e.model.nextLabel ? "Следующий этап: " + e.model.nextLabel : "Все этапы отмечены готовыми"), 1),
				I(n).passportDetailSummary.ready ? (H(), U("p", eE, " Последний открытый паспорт: " + A(I(n).passportDetailSummary.versionCount) + " аудиоверсий · " + A(I(n).passportDetailSummary.linkedCount) + " из 3 материалов связано ", 1)) : q("", !0),
				W("div", tE, [
					W("label", null, [o[4] ||= K("Название песни ", -1), L(W("input", {
						id: "sbpc-title",
						"onUpdate:modelValue": o[0] ||= (e) => r.title = e,
						type: "text",
						maxlength: "120"
					}, null, 512), [[Y, r.title]])]),
					W("label", null, [o[5] ||= K("Артист / проект ", -1), L(W("input", {
						id: "sbpc-artist",
						"onUpdate:modelValue": o[1] ||= (e) => r.artist = e,
						type: "text",
						maxlength: "120"
					}, null, 512), [[Y, r.artist]])]),
					W("label", nE, [o[6] ||= K("Продюсерские заметки ", -1), L(W("textarea", {
						id: "sbpc-notes",
						"onUpdate:modelValue": o[2] ||= (e) => r.notes = e,
						rows: "3",
						maxlength: "3500",
						placeholder: "Что важно сохранить об этой песне?"
					}, null, 512), [[Y, r.notes]])])
				]),
				o[7] ||= W("div", { class: "sbpc-head-actions" }, [W("button", {
					type: "button",
					class: "sbpc-main-btn",
					"data-pc-action": "save-details"
				}, "Сохранить карточку"), W("button", {
					type: "button",
					class: "sbpc-delete-btn",
					"data-pc-action": "delete"
				}, "Удалить рабочую карточку")], -1),
				o[8] ||= W("p", { class: "sbpc-help" }, "Удаление рабочей карточки не удаляет идеи, паспорта, промпты и аудио.", -1)
			]),
			W("section", rE, [
				W("header", iE, [o[9] ||= W("h3", null, "Маршрут песни", -1), W("span", null, A(e.model.done) + " из " + A(e.model.total) + " этапов", 1)]),
				W("div", {
					class: "sbpc-progress",
					role: "progressbar",
					"aria-label": "Готовность работы",
					"aria-valuemin": "0",
					"aria-valuemax": "100",
					"aria-valuenow": e.model.percent
				}, [W("span", { style: O({ width: e.model.percent + "%" }) }, null, 4)], 8, aE),
				W("div", oE, [(H(!0), U(V, null, B(e.model.stages, (t) => (H(), U("article", {
					key: t.key,
					class: "sbpc-stage",
					"data-status": a[t.key]
				}, [W("div", cE, A(a[t.key] === "done" ? "✓" : t.index), 1), W("div", lE, [
					W("div", uE, [W("strong", null, A(t.title), 1), W("small", null, A(t.desc), 1)]),
					W("div", dE, [t.hasMaterial ? (H(), U("span", fE, "● " + A(t.materialLabel), 1)) : (H(), U("span", pE, "○ Подтверждённых материалов нет"))]),
					W("div", mE, [W("label", null, [o[10] ||= K("Готовность ", -1), L(W("select", {
						"onUpdate:modelValue": (e) => a[t.key] = e,
						"data-pc-stage": t.key,
						"aria-label": "Этап " + t.title
					}, [(H(!0), U(V, null, B(e.model.statuses, (e) => (H(), U("option", {
						key: e.id,
						value: e.id
					}, A(e.label), 9, gE))), 128))], 8, hE), [[X, a[t.key]]])]), W("button", {
						type: "button",
						"data-pc-action": "open-stage",
						"data-step": t.key
					}, "Открыть инструмент ↗", 8, _E)])
				])], 8, sE))), 128))]),
				o[11] ||= W("p", { class: "sbpc-help" }, "Готовность отмечается вручную. Наличие материала показано отдельно и не считается автоматически завершённым этапом.", -1)
			]),
			W("section", vE, [
				o[12] ||= W("header", { class: "sbpc-panel-head" }, [W("h3", null, "Связанные материалы"), W("span", null, "Без копирования данных")], -1),
				o[13] ||= W("p", { class: "sbpc-help" }, "Свяжи существующие идеи, промпты, паспорт трека и карточку с аудио. Исходные записи останутся в своих разделах.", -1),
				W("div", yE, [(H(!0), U(V, null, B(e.model.links, (e) => (H(), U("div", {
					key: e.field,
					class: "sbpc-link-field"
				}, [
					W("label", { for: "sbpc-" + e.field }, A(e.label), 9, bE),
					L(W("select", {
						id: "sbpc-" + e.field,
						"onUpdate:modelValue": (t) => i[e.field] = t,
						"data-pc-link": e.field
					}, [(H(!0), U(V, null, B(e.options, (e) => (H(), U("option", {
						key: e.value,
						value: e.value
					}, A(e.label), 9, SE))), 128))], 8, xE), [[X, i[e.field]]]),
					e.value ? (H(), U("button", {
						key: 0,
						type: "button",
						"data-pc-action": "open-link",
						"data-type": e.type,
						"data-id": e.value
					}, A(e.available ? "Перейти к материалу" : "Материал недоступен") + " ↗ ", 9, CE)) : q("", !0)
				]))), 128))]),
				o[14] ||= W("button", {
					type: "button",
					class: "sbpc-main-btn",
					"data-pc-action": "save-links"
				}, "Сохранить связи", -1)
			]),
			W("section", wE, [
				W("header", TE, [o[15] ||= W("h3", null, "Аранжировка для этой песни", -1), W("span", null, A(e.model.arrangement.count ? e.model.arrangement.count + " блоков сохранено" : "Снимок ещё не сохранён"), 1)]),
				o[18] ||= W("p", { class: "sbpc-help" }, "Конструктор Suno Studio использует текущий рабочий черновик. Сохрани его сюда отдельно для песни; восстановление выполняется только по твоей команде.", -1),
				W("div", EE, [
					o[16] ||= W("button", {
						type: "button",
						"data-pc-action": "capture-arrangement"
					}, "Сохранить текущую аранжировку", -1),
					e.model.arrangement.count ? (H(), U("button", DE, "Восстановить в Studio")) : q("", !0),
					o[17] ||= W("button", {
						type: "button",
						"data-pc-action": "open-stage",
						"data-step": "arrangement"
					}, "Открыть аранжировщик ↗", -1)
				]),
				e.model.arrangement.count ? (H(), U("p", OE, " Сохранено: " + A(e.model.arrangement.savedAt) + " · " + A(e.model.arrangement.count) + " блоков · " + A(e.model.arrangement.duration || "длительность не рассчитана"), 1)) : q("", !0)
			]),
			W("section", kE, [
				W("header", AE, [o[19] ||= W("h3", null, "История работы", -1), W("span", null, A(e.model.history.length) + " событий", 1)]),
				o[20] ||= W("div", { class: "sbpc-log-input" }, [W("input", {
					id: "sbpc-history-note",
					type: "text",
					maxlength: "350",
					placeholder: "Добавить запись: что изменилось или что сделать дальше"
				}), W("button", {
					type: "button",
					"data-pc-action": "add-note"
				}, "Добавить")], -1),
				e.model.history.length ? (H(), U("ol", jE, [(H(!0), U(V, null, B(e.model.history, (e, t) => (H(), U("li", { key: t }, [W("time", null, A(e.date), 1), W("span", null, A(e.text), 1)]))), 128))])) : (H(), U("p", ME, "История пока пуста."))
			])
		]));
	}
}, PE = ["data-id", "aria-pressed"], FE = { class: "sbpc-song-main" }, IE = { class: "sbpc-song-meta" }, LE = { class: "sbpc-tiny-progress" }, RE = {
	key: 0,
	class: "sbpc-help",
	"data-sb-vue-passport-recap": ""
}, zE = {
	key: 1,
	class: "sbpc-empty"
}, BE = {
	__name: "ProducerSongList",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ P(t.model.query || ""), r = $();
		R(() => t.model, (e) => r.publishMasterListSummary(e), { immediate: !0 });
		let i = (e) => String(e ?? "").normalize("NFKC").toLocaleLowerCase("ru"), a = J(() => {
			let e = i(n.value.trim());
			return t.model.records.filter((t) => i(t.searchText).includes(e));
		});
		function o(e) {
			n.value = String(e.detail?.query ?? "");
		}
		return z(() => window.addEventListener("sunoboom:producer-search", o)), Mr(() => window.removeEventListener("sunoboom:producer-search", o)), (t, n) => (H(), U(V, null, [
			(H(!0), U(V, null, B(a.value, (t) => (H(), U("button", {
				key: t.id,
				type: "button",
				class: k(["sbpc-song", { active: t.id === e.model.selectedId }]),
				"data-pc-action": "open",
				"data-id": t.id,
				"aria-pressed": t.id === e.model.selectedId
			}, [
				W("span", FE, [W("strong", null, A(t.title), 1), W("span", null, A(t.artist), 1)]),
				W("span", IE, [W("b", null, A(t.done) + "/" + A(t.total), 1), W("small", null, A(t.nextLabel ? "Следующий этап: " + t.nextLabel : "Все этапы отмечены готовыми"), 1)]),
				W("span", LE, [W("i", { style: O({ width: t.percent + "%" }) }, null, 4)])
			], 10, PE))), 128)),
			I(r).passportListSummary.ready ? (H(), U("p", RE, " Паспорта треков · последний фильтр: " + A(I(r).passportListSummary.visibleCount), 1)) : q("", !0),
			a.value.length ? q("", !0) : (H(), U("p", zE, A(e.model.hasRecords ? "Поиск не дал результатов. Измени запрос или создай новую рабочую карточку." : "Пока нет рабочих карточек. Начни с первой песни выше."), 1))
		], 64));
	}
}, VE = { class: "section-title" }, HE = ["data-id", "aria-pressed"], UE = {
	key: 1,
	class: "empty"
}, WE = ["innerHTML"], GE = {
	__name: "ProjectCollection",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (H(), U(V, null, [W("div", VE, [W("h2", null, "Мои проекты (" + A(e.model.items.length) + ")", 1)]), e.model.items.length ? (H(!0), U(V, { key: 0 }, B(e.model.items, (t) => (H(), U("div", {
			key: t.id,
			class: k(["project-card", { selected: t.id === e.model.selectedId }]),
			"data-action": "select-project",
			"data-id": t.id,
			role: "button",
			tabindex: "0",
			"aria-pressed": t.id === e.model.selectedId
		}, [W("h3", null, A(t.title), 1), W("p", null, A(t.genre) + " · " + A(t.date), 1)], 10, HE))), 128)) : (H(), U("div", UE, [
			W("span", {
				style: { display: "contents" },
				"aria-hidden": "true",
				innerHTML: e.model.musicIcon
			}, null, 8, WE),
			n[0] ||= W("strong", null, "Проектов пока нет", -1),
			n[1] ||= K("Создай первый проект выше.", -1)
		]))], 64));
	}
}, KE = { class: "field" }, qE = { class: "field" }, JE = ["value"], YE = {
	type: "button",
	class: "btn primary",
	"data-action": "create-project"
}, XE = ["innerHTML"], ZE = {
	__name: "ProjectCreator",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = /* @__PURE__ */ M({ ...e.initial.values });
		return (n, r) => (H(), U(V, null, [
			r[5] ||= W("h3", null, "Новый проект", -1),
			W("div", KE, [r[2] ||= W("label", { for: "p-title" }, "Название", -1), L(W("input", {
				id: "p-title",
				"onUpdate:modelValue": r[0] ||= (e) => t.title = e,
				placeholder: "Например, дебютный EP"
			}, null, 512), [[Y, t.title]])]),
			W("div", qE, [r[3] ||= W("label", { for: "p-genre" }, "Основной жанр", -1), L(W("select", {
				id: "p-genre",
				"onUpdate:modelValue": r[1] ||= (e) => t.genre = e
			}, [(H(!0), U(V, null, B(e.initial.genres, (e) => (H(), U("option", {
				key: e.id,
				value: e.id
			}, A(e.name), 9, JE))), 128))], 512), [[X, t.genre]])]),
			W("button", YE, [W("span", {
				style: { display: "contents" },
				"aria-hidden": "true",
				innerHTML: e.initial.plusIcon
			}, null, 8, XE), r[4] ||= K(" Создать проект", -1)])
		], 64));
	}
}, QE = { class: "field" }, $E = { class: "detail-actions" }, eD = ["data-id"], tD = ["innerHTML"], nD = ["data-id"], rD = ["innerHTML"], iD = ["data-id"], aD = ["innerHTML"], oD = {
	key: 1,
	class: "empty"
}, sD = {
	__name: "ProjectDetail",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = /* @__PURE__ */ P(e.initial.project?.notes ?? "");
		return (n, r) => e.initial.project ? (H(), U(V, { key: 0 }, [
			r[5] ||= W("div", { class: "eyebrow" }, "Рабочая карточка", -1),
			W("h3", null, A(e.initial.project.title), 1),
			W("p", null, A(e.initial.project.genreName) + " · создан " + A(e.initial.project.date), 1),
			W("div", QE, [r[1] ||= W("label", { for: "project-notes" }, "Заметки, треклист, идеи и задачи", -1), L(W("textarea", {
				id: "project-notes",
				"onUpdate:modelValue": r[0] ||= (e) => t.value = e,
				rows: "12"
			}, null, 512), [[Y, t.value]])]),
			W("div", $E, [
				W("button", {
					type: "button",
					class: "btn primary",
					"data-action": "save-project",
					"data-id": e.initial.project.id
				}, [W("span", {
					style: { display: "contents" },
					"aria-hidden": "true",
					innerHTML: e.initial.icons.check
				}, null, 8, tD), r[2] ||= K(" Сохранить заметки", -1)], 8, eD),
				W("button", {
					type: "button",
					class: "btn ghost",
					"data-action": "use-genre",
					"data-id": e.initial.project.genre
				}, [W("span", {
					style: { display: "contents" },
					"aria-hidden": "true",
					innerHTML: e.initial.icons.studio
				}, null, 8, rD), r[3] ||= K(" В студию", -1)], 8, nD),
				W("button", {
					type: "button",
					class: "btn danger",
					"data-action": "delete-project",
					"data-id": e.initial.project.id
				}, [W("span", {
					style: { display: "contents" },
					"aria-hidden": "true",
					innerHTML: e.initial.icons.trash
				}, null, 8, aD), r[4] ||= K(" Удалить", -1)], 8, iD)
			])
		], 64)) : (H(), U("div", oD, [...r[6] ||= [W("strong", null, "Начни со своего проекта", -1), K("Здесь появятся заметки и рабочая карточка выбранного проекта.", -1)]]));
	}
}, cD = {
	class: "sbpa-tabs",
	role: "group",
	"aria-label": "Источник промпта"
}, lD = ["aria-pressed"], uD = ["aria-pressed"], dD = {
	key: 0,
	class: "sbpa-manual"
}, fD = ["value"], pD = ["value"], mD = ["value"], hD = {
	key: 1,
	class: "sbpa-context"
}, gD = {
	id: "sbpa-results",
	"aria-live": "polite"
}, _D = { class: "sbpa-scoreline" }, vD = {
	class: "sbpa-score",
	"aria-label": "Эвристическая оценка промпта"
}, yD = { class: "sbpa-score-info" }, bD = ["aria-valuenow"], xD = {
	key: 0,
	class: "sbpa-issues"
}, SD = {
	key: 1,
	class: "sbpa-clear"
}, CD = { class: "sbpa-actions" }, wD = {
	key: 0,
	type: "button",
	"data-sbpa-action": "load-studio"
}, TD = { id: "sbpa-proposal-slot" }, ED = {
	key: 0,
	class: "sbpa-proposal"
}, DD = { key: 0 }, OD = { key: 1 }, kD = { key: 2 }, AD = {
	key: 3,
	class: "sbpa-alert"
}, jD = ["value"], MD = {
	__name: "PromptAuditor",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ F(t.api.snapshot()), r = $();
		R(n, (e) => r.publishAuditorSummary(e), { immediate: !0 });
		let i = J(() => n.value?.mode === "manual"), a = J(() => n.value?.report || {
			score: 0,
			length: 0,
			issues: [],
			status: ""
		}), o = J(() => n.value?.genreId || ""), s = J(() => n.value?.genres || []), c = J(() => !!n.value?.proposalOpen), l = J(() => n.value?.proposal || {
			text: "",
			removed: [],
			complete: !0
		});
		function u() {
			let e = t.api.snapshot();
			e && (n.value = e);
		}
		return z(() => window.addEventListener("sunoboom:auditor-updated", u)), Mr(() => window.removeEventListener("sunoboom:auditor-updated", u)), (e, t) => (H(), U(V, null, [
			t[10] ||= W("header", { class: "sbpa-head" }, [W("div", null, [
				W("span", { class: "sbpa-eyebrow" }, "SUNOBOOM · ПРОВЕРКА"),
				W("h2", null, "Интеллектуальный аудитор промптов"),
				W("p", null, "Ищет повторы, противоречия, перегрузку и особенности жанра до отправки в Suno.")
			]), W("span", { class: "sbpa-local" }, "Проверка по правилам · без API")], -1),
			W("div", cD, [W("button", {
				type: "button",
				"data-sbpa-action": "studio",
				class: k({ active: !i.value }),
				"aria-pressed": !i.value
			}, "Текущий промпт Studio", 10, lD), W("button", {
				type: "button",
				"data-sbpa-action": "manual",
				class: k({ active: i.value }),
				"aria-pressed": i.value
			}, "Свой текст / вставка", 10, uD)]),
			i.value ? (H(), U("div", dD, [
				t[0] ||= W("label", { for: "sbpa-text" }, "Текст промпта", -1),
				W("textarea", {
					id: "sbpa-text",
					rows: "5",
					spellcheck: "false",
					placeholder: "Вставь текст на русском или английском…",
					value: n.value.manual
				}, null, 8, fD),
				t[1] ||= W("label", { for: "sbpa-genre" }, "Жанр для сопоставления с Академией", -1),
				W("select", {
					id: "sbpa-genre",
					value: o.value
				}, [(H(!0), U(V, null, B(s.value, (e) => (H(), U("option", {
					key: e.id,
					value: e.id
				}, A(e.name), 9, mD))), 128))], 8, pD)
			])) : (H(), U("p", hD, " Проверяется актуальный промпт конструктора. Изменения настроек Studio отражаются здесь автоматически. ")),
			W("div", gD, [W("div", _D, [
				W("div", vD, [K(A(a.value.score), 1), t[2] ||= W("small", null, "/ 100", -1)]),
				W("div", yD, [
					W("strong", null, A(a.value.status), 1),
					t[3] ||= W("span", null, "Оценка ориентировочная: проверяется структура текста, а не качество будущей музыки.", -1),
					W("div", {
						class: "sbpa-meter",
						role: "progressbar",
						"aria-label": "Оценка промпта",
						"aria-valuenow": a.value.score,
						"aria-valuemin": "0",
						"aria-valuemax": "100"
					}, [W("span", { style: O({ width: a.value.score + "%" }) }, null, 4)], 8, bD)
				]),
				W("div", { class: k(["sbpa-limit", { over: a.value.length > 1e3 }]) }, A(a.value.length) + " / 1000 символов ", 3)
			]), a.value.issues?.length ? (H(), U("ul", xD, [(H(!0), U(V, null, B(a.value.issues, (e, t) => (H(), U("li", {
				key: t,
				class: k(["sbpa-item", "sbpa-" + e.kind])
			}, [W("div", null, [
				W("strong", null, A(e.title), 1),
				W("p", null, A(e.detail), 1),
				W("small", null, A(e.fix), 1)
			])], 2))), 128))])) : (H(), U("p", SD, " Явных противоречий и повторов по проверяемым правилам не найдено. "))]),
			W("div", CD, [t[4] ||= W("button", {
				type: "button",
				"data-sbpa-action": "preview",
				class: "sbpa-primary"
			}, " Показать улучшенный вариант ", -1), i.value ? (H(), U("button", wD, " Вставить текущий промпт Studio ")) : q("", !0)]),
			W("div", TD, [c.value ? (H(), U("div", ED, [
				W("h4", null, [t[5] ||= K("Предлагаемый вариант ", -1), W("small", null, A(l.value.text.length) + " / 1000", 1)]),
				l.value.removed.length ? (H(), U("p", OD, "Удалено фрагментов: " + A(l.value.removed.length) + ". Проверь смысл до копирования.", 1)) : (H(), U("p", DD, "Удалять нечего: текст уже без точных повторов.")),
				l.value.removed.length ? (H(), U("details", kD, [t[6] ||= W("summary", null, "Что изменилось", -1), W("ul", null, [(H(!0), U(V, null, B(l.value.removed, (e, t) => (H(), U("li", { key: t }, [W("b", null, A(e.reason) + ":", 1), K(" " + A(e.part), 1)]))), 128))])])) : q("", !0),
				l.value.complete ? q("", !0) : (H(), U("p", AD, " Автоматического сокращения недостаточно. Уменьши текст вручную минимум на " + A(l.value.text.length - 1e3) + " символов. ", 1)),
				t[7] ||= W("label", { for: "sbpa-preview-text" }, "Редактируемый предпросмотр", -1),
				W("textarea", {
					id: "sbpa-preview-text",
					rows: "5",
					spellcheck: "false",
					value: l.value.text
				}, null, 8, jD),
				t[8] ||= W("div", { class: "sbpa-actions" }, [W("button", {
					type: "button",
					"data-sbpa-action": "copy-preview",
					class: "sbpa-primary"
				}, " Подтвердить и скопировать "), W("button", {
					type: "button",
					"data-sbpa-action": "close-preview"
				}, "Закрыть")], -1),
				t[9] ||= W("small", null, "Исходный промпт и параметры Studio не меняются. Копируется только текст предпросмотра после нажатия.", -1)
			])) : q("", !0)]),
			t[11] ||= W("p", { class: "sbpa-foot" }, " Аудитор не вызывает Gemini и не оценивает реальный звук. Жанровые отклонения могут быть творческим решением, а рекомендации не изменяют исходник без твоего действия. ", -1)
		], 64));
	}
}, ND = {
	key: 0,
	class: "sub",
	"data-sb-vue-prompt-library-recap": ""
}, PD = { class: "section-title" }, FD = {
	key: 1,
	class: "saved-list"
}, ID = { class: "row" }, LD = { class: "actions" }, RD = ["data-id"], zD = ["innerHTML"], BD = ["data-id"], VD = ["data-id", "aria-label"], HD = ["innerHTML"], UD = { class: "sub" }, WD = {
	key: 2,
	class: "empty"
}, GD = ["innerHTML"], KD = {
	__name: "PromptCollection",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = $();
		return (n, r) => (H(), U(V, null, [
			I(t).librarySummary.ready ? (H(), U("p", ND, " Последний просмотр библиотеки: " + A(I(t).librarySummary.promptCount) + " промптов ", 1)) : q("", !0),
			W("div", PD, [W("h2", null, "Сохранённые промпты (" + A(e.model.items.length) + ")", 1)]),
			e.model.items.length ? (H(), U("div", FD, [(H(!0), U(V, null, B(e.model.items, (t) => (H(), U("article", {
				key: t.id,
				class: "saved-item"
			}, [
				W("div", ID, [W("h3", null, A(t.title), 1), W("div", LD, [
					W("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "copy-saved",
						"data-id": t.id
					}, [W("span", {
						"aria-hidden": "true",
						innerHTML: e.model.icons.copy
					}, null, 8, zD), r[0] ||= K(" Копировать", -1)], 8, RD),
					W("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "edit-manual-prompt",
						"data-id": t.id
					}, "Изменить", 8, BD),
					W("button", {
						type: "button",
						class: "btn danger small",
						"data-action": "delete-saved",
						"data-id": t.id,
						"aria-label": "Удалить промпт «" + t.title + "»"
					}, [W("span", {
						"aria-hidden": "true",
						innerHTML: e.model.icons.trash
					}, null, 8, HD)], 8, VD)
				])]),
				W("p", null, A(t.text), 1),
				W("span", UD, A(t.genre) + " · " + A(t.date), 1)
			]))), 128))])) : (H(), U("div", WD, [
				W("span", {
					"aria-hidden": "true",
					innerHTML: e.model.icons.music
				}, null, 8, GD),
				r[1] ||= W("strong", null, "Промптов пока нет", -1),
				r[2] ||= K("Сохрани первый здесь или в Suno Studio.", -1)
			]))
		], 64));
	}
}, qD = {
	key: 0,
	class: "sub",
	"data-sb-vue-last-idea-draft": ""
}, JD = { class: "field" }, YD = { class: "field" }, XD = ["value"], ZD = { class: "field" }, QD = {
	id: "sb-prompt-char-count",
	class: "sub"
}, $D = {
	__name: "PromptEditor",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ M({ ...t.initial.values }), r = J(() => n.text.length), i = $();
		return R(() => [
			n.title,
			n.genre,
			n.text,
			t.initial.editing
		], () => i.publishPromptDraftSummary(n, t.initial.editing), { immediate: !0 }), (t, a) => (H(), U(V, null, [
			W("h3", null, A(e.initial.editing ? "Редактирование промпта" : "Новый промпт для Suno"), 1),
			I(i).ideaDraftSummary.ready ? (H(), U("p", qD, "Последний открытый черновик идеи: " + A(I(i).ideaDraftSummary.ideaLength) + " / 3000 символов", 1)) : q("", !0),
			W("div", JD, [a[3] ||= W("label", { for: "custom-prompt-title" }, "Название", -1), L(W("input", {
				id: "custom-prompt-title",
				"onUpdate:modelValue": a[0] ||= (e) => n.title = e,
				maxlength: "100",
				placeholder: "Например, Романтичный афро-поп"
			}, null, 512), [[Y, n.title]])]),
			W("div", YD, [a[4] ||= W("label", { for: "custom-prompt-genre" }, "Жанр", -1), L(W("select", {
				id: "custom-prompt-genre",
				"onUpdate:modelValue": a[1] ||= (e) => n.genre = e
			}, [(H(!0), U(V, null, B(e.initial.genres, (e) => (H(), U("option", {
				key: e.id,
				value: e.id
			}, A(e.name), 9, XD))), 128))], 512), [[X, n.genre]])]),
			W("div", ZD, [
				a[5] ||= W("label", { for: "custom-prompt-text" }, "Текст промпта (до 1000 символов)", -1),
				L(W("textarea", {
					id: "custom-prompt-text",
					"onUpdate:modelValue": a[2] ||= (e) => n.text = e,
					rows: "7",
					maxlength: "1000",
					"aria-describedby": "sb-prompt-char-count",
					placeholder: "Modern Russian-language afropop, 105 BPM, clean vocals, groovy bass..."
				}, null, 512), [[Y, n.text]]),
				W("span", QD, A(r.value) + " / 1000 символов", 1)
			])
		], 64));
	}
}, eO = { class: "sbsong-hero" }, tO = {
	key: 0,
	class: "sbsong-public-card"
}, nO = ["src"], rO = {
	key: 1,
	class: "sbsong-public-art"
}, iO = { class: "sbsong-detail-tags" }, aO = { key: 0 }, oO = { key: 1 }, sO = {
	key: 2,
	class: "sbsong-detail-description"
}, cO = ["src"], lO = { key: 4 }, uO = ["href"], dO = {
	key: 5,
	class: "sbsong-public-notice"
}, fO = {
	key: 1,
	class: "sbsong-empty"
}, pO = {
	__name: "SharedSongPage",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = /* @__PURE__ */ P(null);
		return jr(() => {
			t.value && (t.value.pause(), t.value.removeAttribute("src"), t.value.load());
		}), (n, r) => (H(), U(V, null, [
			W("header", eO, [
				r[0] ||= W("span", { class: "sbsong-eyebrow" }, "SUNOBOOM · КАРТОЧКА ПЕСНИ", -1),
				W("h1", null, A(e.model.song?.title || "Карточка недоступна"), 1),
				W("p", null, A(e.model.song?.artist || ""), 1)
			]),
			e.model.song ? (H(), U("div", tO, [
				e.model.song.coverUrl ? (H(), U("img", {
					key: 0,
					class: "sbsong-public-art",
					style: {
						"object-fit": "cover",
						width: "100%",
						"max-width": "300px"
					},
					alt: "Обложка",
					src: e.model.song.coverUrl
				}, null, 8, nO)) : (H(), U("div", rO, "♫")),
				W("p", iO, [e.model.song.genre ? (H(), U("span", aO, A(e.model.song.genre), 1)) : q("", !0), e.model.song.album ? (H(), U("span", oO, A(e.model.song.album), 1)) : q("", !0)]),
				e.model.song.description ? (H(), U("p", sO, A(e.model.song.description), 1)) : q("", !0),
				e.model.song.audioUrl ? (H(), U("audio", {
					key: 3,
					ref_key: "audio",
					ref: t,
					controls: "",
					preload: "metadata",
					src: e.model.song.audioUrl
				}, null, 8, cO)) : q("", !0),
				e.model.song.listenUrl ? (H(), U("p", lO, [W("a", {
					href: e.model.song.listenUrl,
					target: "_blank",
					rel: "noopener noreferrer"
				}, "Послушать песню на внешнем сайте ↗", 8, uO)])) : q("", !0),
				!e.model.song.audioUrl && !e.model.song.listenUrl ? (H(), U("p", dO, "В этой ссылке есть информация о песне, но нет аудиозаписи. Автор может отправить MP3 отдельно.")) : q("", !0)
			])) : (H(), U("p", fO, "Ссылка повреждена или карточка не найдена.")),
			r[1] ||= W("button", {
				type: "button",
				class: "sbsong-main-btn",
				"data-sbsong-action": "shared-home"
			}, "Открыть SUNOBOOM", -1),
			r[2] ||= W("p", { class: "sbsong-public-notice" }, "Ссылка открывает выбранные автором сведения. Карточка не требует входа, поэтому её сможет посмотреть любой получатель ссылки.", -1)
		], 64));
	}
}, mO = { class: "form-grid" }, hO = { class: "field" }, gO = ["value"], _O = ["value"], vO = { class: "field" }, yO = { class: "notice" }, bO = {
	class: "btn primary",
	"data-action": "song-generate"
}, xO = ["innerHTML"], SO = {
	key: 0,
	class: "panel",
	style: { "margin-top": "16px" }
}, CO = { class: "eyebrow" }, wO = { class: "notice" }, TO = {
	class: "saved-list",
	style: { "margin-top": "14px" }
}, EO = { class: "row" }, DO = { class: "sub" }, OO = {
	class: "detail-actions",
	style: { "margin-top": "14px" }
}, kO = ["data-id"], AO = ["innerHTML"], jO = ["data-id"], MO = ["innerHTML"], NO = {
	__name: "SongBlueprint",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = J(() => t.initial.forms.find((e) => e.id === t.initial.form)?.duration || "");
		return (t, r) => (H(), U(V, null, [
			r[10] ||= W("div", { class: "eyebrow" }, "SUNOBOOM · SONG BLUEPRINT", -1),
			r[11] ||= W("h3", null, "Генератор структуры песни", -1),
			r[12] ||= W("p", null, "Создавай форму трека с учётом текущего жанра, настроения, темпа и темы. Каждый блок включает подсказки для музыки и текста.", -1),
			W("div", mO, [W("div", hO, [r[0] ||= W("label", { for: "song-form" }, "Форма песни", -1), W("select", {
				id: "song-form",
				value: e.initial.form
			}, [(H(!0), U(V, null, B(e.initial.forms, (e) => (H(), U("option", {
				key: e.id,
				value: e.id
			}, A(e.name), 9, _O))), 128))], 8, gO)]), W("div", vO, [r[1] ||= W("label", null, "Длительность (ориентир)", -1), W("div", yO, A(n.value), 1)])]),
			W("button", bO, [W("span", {
				innerHTML: e.initial.icons.ideas,
				"aria-hidden": "true",
				style: { display: "contents" }
			}, null, 8, xO), r[2] ||= K(" Создать структуру", -1)]),
			r[13] ||= W("p", {
				class: "hint",
				style: { "margin-top": "10px" }
			}, "Офлайн-генератор, без внешнего ИИ. Структура — план, а не готовые слова песни.", -1),
			e.initial.song ? (H(), U("div", SO, [
				W("div", CO, "SONG BLUEPRINT · " + A(e.initial.song.duration), 1),
				W("h3", null, A(e.initial.song.title), 1),
				W("p", null, A(e.initial.song.genreName) + " · " + A(e.initial.song.formName) + " · " + A(e.initial.song.bpm) + " BPM", 1),
				W("div", wO, [
					r[3] ||= W("strong", null, "Динамика:", -1),
					K(" " + A(e.initial.song.advice), 1),
					r[4] ||= W("br", null, null, -1),
					r[5] ||= W("strong", null, "Звучание:", -1),
					K(" " + A(e.initial.song.arrangement), 1)
				]),
				W("div", TO, [(H(!0), U(V, null, B(e.initial.song.sections, (e, t) => (H(), U("div", {
					key: t,
					class: "saved-item"
				}, [
					W("div", EO, [W("h3", null, A(t + 1) + ". [" + A(e.tag) + "]", 1), W("span", DO, A(e.bars) + " тактов", 1)]),
					W("p", null, [r[6] ||= W("strong", null, "Аранжировка:", -1), K(" " + A(e.music), 1)]),
					W("p", null, [r[7] ||= W("strong", null, "Текст:", -1), K(" " + A(e.lyrics), 1)])
				]))), 128))]),
				W("div", OO, [W("button", {
					class: "btn primary small",
					"data-action": "song-copy",
					"data-id": e.initial.song.id
				}, [W("span", {
					innerHTML: e.initial.icons.copy,
					"aria-hidden": "true",
					style: { display: "contents" }
				}, null, 8, AO), r[8] ||= K(" Копировать план", -1)], 8, kO), W("button", {
					class: "btn ghost small",
					"data-action": "song-save",
					"data-id": e.initial.song.id
				}, [W("span", {
					innerHTML: e.initial.icons.saved,
					"aria-hidden": "true",
					style: { display: "contents" }
				}, null, 8, MO), r[9] ||= K(" Сохранить", -1)], 8, jO)])
			])) : q("", !0)
		], 64));
	}
}, PO = {
	key: 0,
	class: "sbsong-artist-hint",
	"data-sb-vue-song-collection-recap": ""
}, FO = {
	key: 1,
	class: "sbsong-grid"
}, IO = ["data-id", "aria-label"], LO = ["data-sbsong-cover"], RO = ["src"], zO = { class: "sbsong-card-text" }, BO = { class: "sbsong-card-flags" }, VO = { class: "sbsong-card-actions" }, HO = ["data-id"], UO = ["data-id"], WO = ["data-id"], GO = {
	key: 2,
	class: "sbsong-empty"
}, KO = {
	__name: "SongCards",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ P(t.api.snapshot() || {
			items: [],
			total: 0
		}), r = $();
		R(n, (e) => r.publishSongCollectionSummary(e), { immediate: !0 });
		function i() {
			let e = t.api.snapshot();
			e && (n.value = e, Tn(() => t.api.hydrateCovers()));
		}
		return z(() => {
			window.addEventListener("sunoboom:songs-search", i), Tn(() => t.api.hydrateCovers());
		}), jr(() => window.removeEventListener("sunoboom:songs-search", i)), (e, t) => (H(), U(V, null, [I(r).songCollectionSummary.ready ? (H(), U("p", PO, " Найдено " + A(I(r).songCollectionSummary.visibleCount) + " из " + A(I(r).songCollectionSummary.totalCount) + " песен ", 1)) : q("", !0), n.value.items.length ? (H(), U("div", FO, [(H(!0), U(V, null, B(n.value.items, (e) => (H(), U("article", {
			key: e.id,
			class: "sbsong-card"
		}, [W("button", {
			type: "button",
			class: "sbsong-art-button",
			"data-sbsong-action": "open",
			"data-id": e.id,
			"aria-label": "Открыть " + e.title
		}, [e.hasCover ? (H(), U("img", {
			key: 0,
			alt: "",
			"data-sbsong-cover": e.id,
			loading: "lazy"
		}, null, 8, LO)) : e.coverUrl ? (H(), U("img", {
			key: 1,
			alt: "",
			src: e.coverUrl,
			style: { display: "block" },
			loading: "lazy"
		}, null, 8, RO)) : q("", !0), t[0] ||= W("span", {
			class: "sbsong-no-cover",
			"aria-hidden": "true"
		}, "♫", -1)], 8, IO), W("div", zO, [
			W("small", null, A(e.genre), 1),
			W("h3", null, A(e.title), 1),
			W("p", null, A(e.artist), 1),
			W("div", BO, [W("span", null, A(e.status), 1)]),
			W("div", VO, [
				W("button", {
					type: "button",
					"data-sbsong-action": "open",
					"data-id": e.id
				}, "Открыть", 8, HO),
				W("button", {
					type: "button",
					"data-sbsong-action": "edit",
					"data-id": e.id
				}, "Изменить", 8, UO),
				W("button", {
					type: "button",
					"data-sbsong-action": "share",
					"data-id": e.id
				}, "Поделиться", 8, WO)
			])
		])]))), 128))])) : (H(), U("div", GO, A(n.value.total ? "По этому запросу песен нет." : "Песен пока нет. Добавь первую карточку и загрузи аудиофайл."), 1))], 64));
	}
}, qO = {
	class: "sbsong-versions",
	"data-sb-vue-song-versions": "",
	"aria-label": "Версии записи"
}, JO = { class: "sbsong-version-heading" }, YO = { key: 0 }, XO = { class: "sbsong-version-row-head" }, ZO = {
	key: 0,
	class: "sbsong-version-main-badge"
}, QO = {
	key: 1,
	class: "sbsong-version-play-badge"
}, $O = { class: "sbsong-version-actions" }, ek = ["data-version-id"], tk = ["data-version-id"], nk = ["data-id", "data-version-id"], rk = ["data-version-id"], ik = { class: "sbsong-version-notes" }, ak = ["data-sbsong-version-title", "value"], ok = ["data-sbsong-version-note", "value"], sk = ["data-version-id"], ck = { key: 0 }, lk = {
	type: "button",
	class: "sbsong-compare-toggle",
	"data-sbsong-action": "compare-toggle"
}, uk = {
	key: 0,
	class: "sbsong-compare-grid"
}, dk = ["value"], fk = ["value"], pk = ["value"], mk = ["value"], hk = { class: "sbsong-version-add" }, gk = {
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
		return (t, n) => (H(), U("section", qO, [
			W("div", JO, [W("h3", null, "Версии записи (" + A(e.versions.length) + ")", 1), e.playingLabel ? (H(), U("small", YO, "В основном плеере: " + A(e.playingLabel), 1)) : q("", !0)]),
			(H(!0), U(V, null, B(e.versions, (t) => (H(), U("article", {
				key: t.id,
				class: "sbsong-version-row"
			}, [
				W("div", XO, [W("div", null, [
					W("strong", null, A(t.label), 1),
					t.isMain ? (H(), U("span", ZO, "★ Основная")) : q("", !0),
					t.isPlaying ? (H(), U("span", QO, "♫ Выбрана")) : q("", !0),
					W("small", null, A(t.fileName) + " · " + A(t.sizeLabel) + " · " + A(t.addedDate), 1)
				])]),
				W("div", $O, [
					W("button", {
						type: "button",
						"data-sbsong-action": "version-play",
						"data-version-id": t.id
					}, "Выбрать для плеера", 8, ek),
					t.isMain ? q("", !0) : (H(), U("button", {
						key: 0,
						type: "button",
						"data-sbsong-action": "version-main",
						"data-version-id": t.id
					}, "★ Сделать основной", 8, tk)),
					W("button", {
						type: "button",
						"data-sbsong-action": "share-file",
						"data-id": e.songId,
						"data-version-id": t.id
					}, "Сохранить / отправить", 8, nk),
					W("button", {
						type: "button",
						class: "sbsong-version-danger",
						"data-sbsong-action": "version-remove",
						"data-version-id": t.id
					}, "Удалить дубль", 8, rk)
				]),
				W("details", ik, [
					n[2] ||= W("summary", null, "Название и заметки", -1),
					W("label", null, [n[0] ||= K("Название версии ", -1), W("input", {
						type: "text",
						maxlength: "90",
						"data-sbsong-version-title": t.id,
						value: t.draftLabel ?? t.label
					}, null, 8, ak)]),
					W("label", null, [n[1] ||= K("Чем отличается этот дубль ", -1), W("textarea", {
						maxlength: "800",
						rows: "2",
						"data-sbsong-version-note": t.id,
						value: t.draftNotes ?? t.notes,
						placeholder: "Например: более плотный припев, удачный вокал..."
					}, null, 8, ok)]),
					W("button", {
						type: "button",
						"data-sbsong-action": "version-save",
						"data-version-id": t.id
					}, "Сохранить заметки", 8, sk)
				])
			]))), 128)),
			e.versions.length ? q("", !0) : (H(), U("p", ck, "Пока нет локальных версий. Загрузи первую запись в MP3, M4A или WAV.")),
			e.versions.length > 1 ? (H(), U(V, { key: 1 }, [W("button", lk, A(e.compareOpen ? "Скрыть сравнение A/B" : "Сравнить версии A/B"), 1), e.compareOpen ? (H(), U("div", uk, [
				W("label", null, [
					n[3] ||= K("Версия A ", -1),
					W("select", {
						id: "sbsong-compare-a",
						value: e.compareAId
					}, [(H(!0), U(V, null, B(e.versions, (e) => (H(), U("option", {
						key: e.id,
						value: e.id
					}, A(e.label), 9, fk))), 128))], 8, dk),
					n[4] ||= W("audio", {
						id: "sbsong-ab-a",
						controls: "",
						preload: "metadata"
					}, null, -1)
				]),
				W("label", null, [
					n[5] ||= K("Версия B ", -1),
					W("select", {
						id: "sbsong-compare-b",
						value: e.compareBId
					}, [(H(!0), U(V, null, B(e.versions, (e) => (H(), U("option", {
						key: e.id,
						value: e.id
					}, A(e.label), 9, mk))), 128))], 8, pk),
					n[6] ||= W("audio", {
						id: "sbsong-ab-b",
						controls: "",
						preload: "metadata"
					}, null, -1)
				]),
				n[7] ||= W("p", null, "Два независимых плеера для сравнения дублей. Воспроизведение запускается вручную.", -1)
			])) : q("", !0)], 64)) : q("", !0),
			W("div", hk, [
				n[9] ||= W("h4", null, "+ Добавить новую версию", -1),
				W("label", null, [n[8] ||= K("Аудиофайл (MP3, M4A, WAV и другие) ", -1), G(I(bp), {
					id: "sbsong-version-file",
					type: "file",
					accept: "audio/*,.mp3,.m4a,.wav,.wave,.flac,.ogg,.opus,.aac"
				})]),
				n[10] ||= W("label", null, [K("Название дубля "), W("input", {
					id: "sbsong-new-version-title",
					maxlength: "90",
					type: "text",
					placeholder: "Например: Версия с новым припевом"
				})], -1),
				n[11] ||= W("label", null, [K("Заметка "), W("textarea", {
					id: "sbsong-new-version-notes",
					maxlength: "800",
					rows: "2",
					placeholder: "Что изменилось в этой записи?"
				})], -1),
				n[12] ||= W("button", {
					type: "button",
					class: "sbsong-main-btn",
					"data-sbsong-action": "version-add",
					id: "sbsong-version-submit"
				}, "Сохранить новую версию", -1),
				n[13] ||= W("p", null, "WAV — до 500 МБ, другие форматы — до 150 МБ. Каждая версия хранится отдельно в браузере этого устройства. Старые записи не перезаписываются.", -1)
			])
		]));
	}
}, _k = { class: "sbsong-detail" }, vk = { class: "sbsong-subhead" }, yk = {
	key: 0,
	class: "sbsong-artist-hint",
	"data-sb-vue-song-detail-recap": ""
}, bk = { class: "sbsong-detail-layout" }, xk = { class: "sbsong-detail-cover" }, Sk = ["data-sbsong-cover", "alt"], Ck = ["src", "alt"], wk = {
	key: 2,
	class: "sbsong-no-cover",
	"aria-hidden": "true"
}, Tk = { class: "sbsong-detail-artist" }, Ek = { class: "sbsong-detail-tags" }, Dk = { key: 0 }, Ok = { key: 1 }, kk = {
	key: 0,
	class: "sbsong-detail-description"
}, Ak = {
	class: "sbsong-audio-box",
	id: "sbsong-audio-box"
}, jk = {
	key: 0,
	controls: "",
	preload: "metadata",
	id: "sbsong-audio-player"
}, Mk = { key: 1 }, Nk = { class: "sbsong-detail-actions" }, Pk = ["data-id"], Fk = ["data-id"], Ik = ["href"], Lk = ["data-id"], Rk = ["data-id"], zk = ["data-id"], Bk = {
	key: 1,
	class: "sbsong-delete-confirm"
}, Vk = ["data-id"], Hk = {
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
		let t = e, n = $();
		return R(() => t.model, (e) => n.publishSongDetailSummary(e), { immediate: !0 }), z(() => {
			Tn(() => t.api.hydrateMedia());
		}), (t, r) => (H(), U("section", _k, [
			W("div", vk, [W("h2", null, A(e.model.title), 1), r[0] ||= W("button", {
				type: "button",
				"data-sbsong-action": "close-detail"
			}, "Закрыть ×", -1)]),
			I(n).songCollectionSummary.ready ? (H(), U("p", yk, " В личной коллекции: " + A(I(n).songCollectionSummary.totalCount) + " песен ", 1)) : q("", !0),
			W("div", bk, [W("div", xk, [e.model.hasCover ? (H(), U("img", {
				key: 0,
				"data-sbsong-cover": e.model.id,
				alt: "Обложка песни " + e.model.title
			}, null, 8, Sk)) : e.model.coverUrl ? (H(), U("img", {
				key: 1,
				src: e.model.coverUrl,
				alt: "Обложка песни " + e.model.title,
				style: { display: "block" }
			}, null, 8, Ck)) : (H(), U("span", wk, "♫"))]), W("div", null, [
				W("p", Tk, A(e.model.artist), 1),
				W("p", Ek, [e.model.genre ? (H(), U("span", Dk, A(e.model.genre), 1)) : q("", !0), e.model.album ? (H(), U("span", Ok, A(e.model.album), 1)) : q("", !0)]),
				e.model.description ? (H(), U("p", kk, A(e.model.description), 1)) : q("", !0),
				W("div", Ak, [e.model.hasPlayableAudio ? (H(), U("audio", jk)) : (H(), U("p", Mk, "Аудио ещё не добавлено. Добавь первую версию в этой карточке."))]),
				G(gk, {
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
				W("div", Nk, [
					W("button", {
						type: "button",
						class: "sbsong-main-btn",
						"data-sbsong-action": "share",
						"data-id": e.model.id
					}, "🔗 Поделиться ссылкой", 8, Pk),
					e.model.hasAudio ? (H(), U("button", {
						key: 0,
						type: "button",
						"data-sbsong-action": "share-file",
						"data-id": e.model.id
					}, "Отправить аудиофайл", 8, Fk)) : q("", !0),
					e.model.listenUrl ? (H(), U("a", {
						key: 1,
						href: e.model.listenUrl,
						target: "_blank",
						rel: "noopener noreferrer"
					}, "Открыть публичную запись ↗", 8, Ik)) : q("", !0),
					W("button", {
						type: "button",
						"data-sbsong-action": "producer",
						"data-id": e.model.id
					}, "🎛 Мастер", 8, Lk),
					W("button", {
						type: "button",
						"data-sbsong-action": "edit",
						"data-id": e.model.id
					}, "Изменить", 8, Rk),
					W("button", {
						type: "button",
						class: "sbsong-danger",
						"data-sbsong-action": "delete",
						"data-id": e.model.id
					}, "Удалить", 8, zk)
				]),
				e.model.confirmDelete ? (H(), U("div", Bk, [
					r[1] ||= W("strong", null, "Удалить карточку вместе с локальными файлами?", -1),
					W("button", {
						type: "button",
						"data-sbsong-action": "delete-confirm",
						"data-id": e.model.id
					}, "Да, удалить", 8, Vk),
					r[2] ||= W("button", {
						type: "button",
						"data-sbsong-action": "delete-cancel"
					}, "Отмена", -1)
				])) : q("", !0)
			])])
		]));
	}
}, Uk = {
	id: "sbsong-form",
	class: "sbsong-form-panel"
}, Wk = { class: "sbsong-subhead" }, Gk = {
	id: "sbsong-save-form",
	class: "sbsong-form"
}, Kk = { class: "sbsong-form-columns" }, qk = { class: "sbsong-field" }, Jk = { class: "sbsong-artist-field" }, Yk = {
	class: "sbsong-field",
	for: "sbsong-artist-input"
}, Xk = ["aria-expanded"], Zk = {
	id: "sbsong-artist-options",
	class: "sbsong-artist-options",
	role: "listbox",
	"aria-label": "Список артистов"
}, Qk = ["onClick"], $k = {
	key: 0,
	class: "sbsong-artist-hint"
}, eA = {
	key: 1,
	class: "sbsong-artist-hint"
}, tA = { class: "sbsong-genre-field" }, nA = {
	class: "sbsong-field",
	for: "sbsong-genre-input"
}, rA = ["aria-expanded"], iA = ["aria-expanded"], aA = {
	id: "sbsong-genre-options",
	class: "sbsong-genre-options",
	role: "region",
	"aria-label": "Выбор жанра из Академии"
}, oA = { class: "sbsong-genre-picker-head" }, sA = ["value"], cA = {
	id: "sbsong-genre-results",
	class: "sbsong-genre-results",
	role: "listbox",
	"aria-label": "Жанры и поджанры"
}, lA = ["aria-label"], uA = { class: "sbsong-genre-group-title" }, dA = ["onClick"], fA = {
	key: 0,
	class: "sbsong-genre-hint"
}, pA = { class: "sbsong-field" }, mA = { class: "sbsong-field" }, hA = { class: "sbsong-form-columns" }, gA = { class: "sbsong-field" }, _A = { class: "sbsong-field" }, vA = {
	class: "sbsong-cover-auto",
	"aria-live": "polite"
}, yA = { id: "sbsong-cover-status" }, bA = { class: "sbsong-form-columns" }, xA = { class: "sbsong-field" }, SA = { class: "sbsong-field" }, CA = { class: "sbsong-field" }, wA = {
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
		let t = e, n = /* @__PURE__ */ M({
			title: t.model.title,
			artist: t.model.artist,
			genre: t.model.genre,
			album: t.model.album,
			description: t.model.description,
			audioUrl: t.model.audioUrl,
			listenUrl: t.model.listenUrl,
			coverUrl: t.model.coverUrl
		}), r = /* @__PURE__ */ P(!1), i = /* @__PURE__ */ P(!1), a = /* @__PURE__ */ P(t.api.artistChoices()), o = /* @__PURE__ */ P(!1), s = /* @__PURE__ */ P(!1), c = /* @__PURE__ */ P("Все"), l = /* @__PURE__ */ P(t.api.genreChoices()), u = /* @__PURE__ */ P(t.api.genreFamilies()), d = (e) => String(e || "").normalize("NFKC").toLocaleLowerCase("ru"), f = J(() => {
			let e = d(n.artist);
			return (i.value ? a.value : a.value.filter((t) => d(t.name).includes(e))).slice(0, 40);
		}), p = J(() => i.value ? a.value.length > 40 : a.value.filter((e) => d(e.name).includes(d(n.artist))).length > 40), m = J(() => {
			let e = s.value ? "" : d(n.genre.trim());
			return l.value.filter((t) => (c.value === "Все" || t.family === c.value) && (!e || d(t.name + " " + t.family).includes(e)));
		}), h = J(() => u.value.map((e) => ({
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
		return z(() => {
			document.addEventListener("pointerdown", x), Tn(() => t.api.hydrateCover());
		}), jr(() => document.removeEventListener("pointerdown", x)), (t, d) => (H(), U("section", Uk, [W("div", Wk, [W("h2", null, A(e.model.editId ? "Изменить песню" : "Новая песня"), 1), d[16] ||= W("button", {
			type: "button",
			"data-sbsong-action": "cancel"
		}, "Закрыть ×", -1)]), W("form", Gk, [
			W("div", Kk, [
				W("label", qk, [d[17] ||= W("span", null, "Название *", -1), L(W("input", {
					"onUpdate:modelValue": d[0] ||= (e) => n.title = e,
					type: "text",
					name: "title",
					maxlength: "120",
					placeholder: "Название песни"
				}, null, 512), [[Y, n.title]])]),
				W("div", Jk, [
					W("label", Yk, [d[18] ||= W("span", null, "Исполнитель / проект", -1), L(W("input", {
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
						onKeydown: d[4] ||= $o(Z((e) => r.value = !1, ["prevent"]), ["esc"])
					}, null, 40, Xk), [[Y, n.artist]])]),
					W("div", { class: "sbsong-artist-shortcuts" }, [W("button", {
						type: "button",
						onClick: y
					}, "▾ Выбрать из списка"), W("button", {
						type: "button",
						onClick: g
					}, "+ Сохранить артиста")]),
					L(W("div", Zk, [
						(H(!0), U(V, null, B(f.value, (e) => (H(), U("button", {
							key: e.name,
							type: "button",
							role: "option",
							class: "sbsong-artist-option",
							onClick: (t) => _(e.name)
						}, [W("strong", null, A(e.name), 1), W("small", null, A(e.origin), 1)], 8, Qk))), 128)),
						p.value ? (H(), U("p", $k, "Уточни поиск, чтобы увидеть остальные варианты.")) : q("", !0),
						f.value.length ? q("", !0) : (H(), U("p", eA, A(a.value.length ? "Совпадений нет. Нового артиста можно сохранить кнопкой выше." : "Список пуст. Введи имя и сохрани первого артиста."), 1))
					], 512), [[co, r.value]])
				]),
				W("div", tA, [
					W("label", nA, [d[19] ||= W("span", null, "Жанр", -1), L(W("input", {
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
						onKeydown: d[8] ||= $o(Z((e) => o.value = !1, ["prevent"]), ["esc"])
					}, null, 40, rA), [[Y, n.genre]])]),
					W("button", {
						type: "button",
						class: "sbsong-genre-toggle",
						"aria-controls": "sbsong-genre-options",
						"aria-expanded": String(o.value),
						onClick: b
					}, "▾ Выбрать из Академии", 8, iA),
					L(W("div", aA, [W("div", oA, [
						d[21] ||= W("label", { for: "sbsong-genre-family" }, "Направление", -1),
						L(W("select", {
							id: "sbsong-genre-family",
							"onUpdate:modelValue": d[9] ||= (e) => c.value = e,
							"aria-label": "Фильтр по направлению",
							onChange: d[10] ||= (e) => s.value = !0
						}, [d[20] ||= W("option", { value: "Все" }, "Все направления", -1), (H(!0), U(V, null, B(u.value, (e) => (H(), U("option", {
							key: e,
							value: e
						}, A(e), 9, sA))), 128))], 544), [[X, c.value]]),
						W("small", null, A(m.value.length) + " из " + A(l.value.length), 1)
					]), W("div", cA, [(H(!0), U(V, null, B(h.value, (e) => (H(), U("div", {
						key: e.name,
						class: "sbsong-genre-group",
						role: "group",
						"aria-label": e.name
					}, [W("div", uA, [K(A(e.name) + " ", 1), W("span", null, A(e.genres.length), 1)]), (H(!0), U(V, null, B(e.genres, (e) => (H(), U("button", {
						key: e.id,
						type: "button",
						class: "sbsong-genre-option",
						role: "option",
						onClick: (t) => v(e.name)
					}, [W("span", null, A(e.name), 1)], 8, dA))), 128))], 8, lA))), 128)), m.value.length ? q("", !0) : (H(), U("p", fA, A(l.value.length ? "Не найдено. Можно ввести свой жанр вручную." : "Каталог Академии пока недоступен. Введи жанр вручную."), 1))])], 512), [[co, o.value]])
				]),
				W("label", pA, [d[22] ||= W("span", null, "Альбом / релиз", -1), L(W("input", {
					"onUpdate:modelValue": d[11] ||= (e) => n.album = e,
					type: "text",
					name: "album",
					maxlength: "120",
					placeholder: "Название альбома"
				}, null, 512), [[Y, n.album]])])
			]),
			W("label", mA, [d[23] ||= W("span", null, "Описание", -1), L(W("textarea", {
				"onUpdate:modelValue": d[12] ||= (e) => n.description = e,
				name: "description",
				maxlength: "700",
				rows: "3",
				placeholder: "История, настроение или заметки"
			}, null, 512), [[Y, n.description]])]),
			W("div", hA, [W("label", gA, [W("span", null, A(e.model.hasAudio ? "Добавить новую аудиоверсию" : "Загрузить аудиофайл (MP3, M4A, WAV и другие)"), 1), G(I(bp), {
				name: "audio",
				type: "file",
				accept: "audio/*,.mp3,.wav,.wave,.m4a,.aac,.flac,.ogg,.opus"
			})]), W("label", _A, [d[24] ||= W("span", null, "Обложка вручную (необязательно)", -1), G(I(bp), {
				name: "cover",
				type: "file",
				accept: "image/png,image/jpeg,image/webp,image/gif"
			})])]),
			W("div", vA, [d[27] ||= W("div", { class: "sbsong-cover-preview-figure" }, [W("img", {
				id: "sbsong-cover-preview-img",
				alt: "Предпросмотр обложки",
				hidden: ""
			}), W("span", {
				id: "sbsong-cover-preview-placeholder",
				"aria-hidden": "true"
			}, "♫")], -1), W("div", null, [
				d[25] ||= W("strong", null, "Обложка из аудиофайла", -1),
				W("p", yA, A(e.model.hasCover ? "Загружаю сохранённую обложку…" : "Выбери MP3, M4A или FLAC — попробую найти обложку автоматически"), 1),
				d[26] ||= W("small", null, "Ручная обложка имеет приоритет, если ты её выберешь.", -1)
			])]),
			W("div", bA, [
				W("label", xA, [d[28] ||= W("span", null, "Прямая ссылка на MP3 (если есть)", -1), L(W("input", {
					"onUpdate:modelValue": d[13] ||= (e) => n.audioUrl = e,
					type: "text",
					name: "audioUrl",
					maxlength: "700",
					placeholder: "https://.../song.mp3"
				}, null, 512), [[Y, n.audioUrl]])]),
				W("label", SA, [d[29] ||= W("span", null, "Публичная страница песни", -1), L(W("input", {
					"onUpdate:modelValue": d[14] ||= (e) => n.listenUrl = e,
					type: "text",
					name: "listenUrl",
					maxlength: "700",
					placeholder: "https://suno.com/..."
				}, null, 512), [[Y, n.listenUrl]])]),
				W("label", CA, [d[30] ||= W("span", null, "Публичная обложка (по желанию)", -1), L(W("input", {
					"onUpdate:modelValue": d[15] ||= (e) => n.coverUrl = e,
					type: "text",
					name: "coverUrl",
					maxlength: "700",
					placeholder: "https://.../cover.jpg"
				}, null, 512), [[Y, n.coverUrl]])])
			]),
			d[31] ||= W("p", { class: "sbsong-form-help" }, " MP3, M4A, WAV, FLAC и другие аудиофайлы сохраняются локально (IndexedDB): WAV — до 500 МБ, остальные — до 150 МБ при наличии свободной памяти браузера. Новая загрузка добавляет версию, не заменяя старую. Обложка ищется в MP3, M4A и FLAC; для WAV её обычно добавляют вручную. Локальное аудио по общей ссылке не передаётся. ", -1),
			d[32] ||= W("div", { class: "sbsong-form-actions" }, [W("button", {
				type: "submit",
				class: "sbsong-main-btn",
				id: "sbsong-submit"
			}, "Сохранить песню"), W("button", {
				type: "button",
				"data-sbsong-action": "cancel"
			}, "Отмена")], -1)
		])]));
	}
}, TA = { class: "panel" }, EA = { class: "field" }, DA = ["value"], OA = ["value"], kA = { class: "form-grid" }, AA = { class: "field" }, jA = ["value"], MA = ["value"], NA = { class: "field" }, PA = ["value"], FA = ["value"], IA = { class: "field" }, LA = ["value"], RA = ["value"], zA = { class: "field" }, BA = ["value"], VA = ["value"], HA = { class: "field" }, UA = { for: "b-tempo" }, WA = {
	id: "tempo-num",
	style: { color: "#ffa8d5" }
}, GA = { class: "range" }, KA = ["value"], qA = { id: "bpm-output" }, JA = {
	class: "muted",
	style: { "font-size": "11px" }
}, YA = { class: "field" }, XA = ["value"], ZA = { class: "field" }, QA = ["value"], $A = { class: "checkrow" }, ej = ["checked", "onChange"], tj = {
	class: "panel",
	style: {
		position: "sticky",
		top: "20px"
	}
}, nj = {
	class: "output",
	id: "prompt-output"
}, rj = { class: "counter" }, ij = { id: "prompt-count" }, aj = { class: "two-col" }, oj = {
	class: "btn primary",
	type: "button",
	"data-action": "copy-prompt"
}, sj = ["innerHTML"], cj = {
	class: "btn ghost",
	type: "button",
	"data-action": "save-prompt"
}, lj = ["innerHTML"], uj = {
	key: 0,
	class: "notice",
	"data-sb-vue-mixer-recap": ""
}, dj = {
	key: 1,
	class: "notice",
	"data-sb-vue-arranger-recap": ""
}, fj = { class: "list-pills" }, pj = {
	__name: "StudioBuilder",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ F(t.api.snapshot()), r = $();
		R(n, (e) => r.publishStudioSummary(e), { immediate: !0 });
		let i = J(() => n.value?.settings || {}), a = J(() => n.value?.genre || {
			name: "",
			family: "",
			bpm: [0, 0]
		}), o = J(() => String(n.value?.prompt || "")), s = [
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
		return z(() => window.addEventListener("sunoboom:studio-updated", f)), Mr(() => window.removeEventListener("sunoboom:studio-updated", f)), (e, t) => (H(), U(V, null, [W("div", TA, [
			t[17] ||= W("h3", null, "Параметры трека", -1),
			W("div", EA, [t[8] ||= W("label", { for: "b-genre" }, "Жанр", -1), W("select", {
				id: "b-genre",
				value: i.value.genre,
				onChange: t[0] ||= (e) => p("genre", e.target.value)
			}, [(H(!0), U(V, null, B(n.value.genres, (e) => (H(), U("option", {
				key: e.id,
				value: e.id
			}, A(e.name), 9, OA))), 128))], 40, DA)]),
			W("div", kA, [
				W("div", AA, [t[9] ||= W("label", { for: "b-mood" }, "Настроение", -1), W("select", {
					id: "b-mood",
					value: i.value.mood,
					onChange: t[1] ||= (e) => p("mood", e.target.value)
				}, [(H(), U(V, null, B(s, ([e, t]) => W("option", {
					key: e,
					value: e
				}, A(t), 9, MA)), 64))], 40, jA)]),
				W("div", NA, [t[10] ||= W("label", { for: "b-vocal" }, "Вокал", -1), W("select", {
					id: "b-vocal",
					value: i.value.vocal,
					onChange: t[2] ||= (e) => p("vocal", e.target.value)
				}, [(H(), U(V, null, B(c, ([e, t]) => W("option", {
					key: e,
					value: e
				}, A(t), 9, FA)), 64))], 40, PA)]),
				W("div", IA, [t[11] ||= W("label", { for: "b-lang" }, "Язык текста", -1), W("select", {
					id: "b-lang",
					value: i.value.language,
					onChange: t[3] ||= (e) => p("language", e.target.value)
				}, [(H(), U(V, null, B(l, ([e, t]) => W("option", {
					key: e,
					value: e
				}, A(t), 9, RA)), 64))], 40, LA)]),
				W("div", zA, [t[12] ||= W("label", { for: "b-energy" }, "Энергия", -1), W("select", {
					id: "b-energy",
					value: i.value.energy,
					onChange: t[4] ||= (e) => p("energy", e.target.value)
				}, [(H(), U(V, null, B(u, ([e, t]) => W("option", {
					key: e,
					value: e
				}, A(t), 9, VA)), 64))], 40, BA)])
			]),
			W("div", HA, [
				W("label", UA, [
					t[13] ||= K("Темп · ", -1),
					W("span", WA, A(i.value.tempo), 1),
					t[14] ||= K(" BPM", -1)
				]),
				W("div", GA, [W("input", {
					type: "range",
					id: "b-tempo",
					min: "65",
					max: "200",
					step: "1",
					value: i.value.tempo,
					onInput: t[5] ||= (e) => p("tempo", Number(e.target.value))
				}, null, 40, KA), W("output", qA, A(i.value.tempo) + " BPM", 1)]),
				W("span", JA, " Обычно для «" + A(a.value.name) + "»: " + A(a.value.bpm[0]) + "–" + A(a.value.bpm[1]) + " BPM ", 1)
			]),
			W("div", YA, [t[15] ||= W("label", { for: "b-theme" }, "Тема / история трека", -1), W("textarea", {
				id: "b-theme",
				rows: "2",
				value: i.value.theme,
				onInput: t[6] ||= (e) => p("theme", e.target.value),
				placeholder: "О чём будет песня?"
			}, null, 40, XA)]),
			W("div", ZA, [t[16] ||= W("label", { for: "b-extra" }, "Дополнительные инструкции (необязательно)", -1), W("textarea", {
				id: "b-extra",
				rows: "2",
				value: i.value.extra,
				onInput: t[7] ||= (e) => p("extra", e.target.value),
				placeholder: "Например: memorable chorus, short guitar solo"
			}, null, 40, QA)]),
			W("div", $A, [(H(), U(V, null, B(d, ([e, t]) => W("label", { key: e }, [W("input", {
				type: "checkbox",
				checked: i.value[e],
				onChange: (t) => p(e, t.target.checked)
			}, null, 40, ej), K(A(t), 1)])), 64))])
		]), W("div", tj, [
			t[22] ||= W("div", { class: "eyebrow" }, "Готово к Suno", -1),
			t[23] ||= W("h3", null, "Твой промпт", -1),
			W("div", nj, A(o.value), 1),
			W("div", rj, [t[18] ||= W("span", null, "Максимум 1000 символов", -1), W("b", ij, A(o.value.length) + " / 1000", 1)]),
			W("div", aj, [W("button", oj, [W("span", {
				"aria-hidden": "true",
				innerHTML: n.value.icons.copy
			}, null, 8, sj), t[19] ||= K(" Копировать ", -1)]), W("button", cj, [W("span", {
				"aria-hidden": "true",
				innerHTML: n.value.icons.save
			}, null, 8, lj), t[20] ||= K(" Сохранить ", -1)])]),
			t[24] ||= W("div", { class: "spacer" }, null, -1),
			I(r).mixerSummary.ready ? (H(), U("div", uj, [K(" Последний микс: " + A(I(r).mixerSummary.genreCount) + " жанра · " + A(I(r).mixerSummary.tempo) + " BPM · " + A(I(r).mixerSummary.promptLength) + " / 1000 символов. ", 1), t[21] ||= W("button", {
				type: "button",
				class: "link-action",
				"data-action": "nav",
				"data-nav": "mixer"
			}, "Перейти в Миксер →", -1)])) : q("", !0),
			I(r).arrangerSummary.ready ? (H(), U("div", dj, " Аранжировка: " + A(I(r).arrangerSummary.blockCount) + " блоков · " + A(I(r).arrangerSummary.barCount) + " тактов · средняя энергия " + A(I(r).arrangerSummary.averageEnergy) + "/5 · " + A(I(r).arrangerSummary.transitionCount) + " переходов. ", 1)) : q("", !0),
			t[25] ||= W("div", { class: "notice" }, [W("strong", null, "Подсказка:"), K(" промпт задаёт стиль, а текст песни можно вводить отдельно в Suno. Результат генерации может отличаться от запроса.")], -1),
			t[26] ||= W("div", { class: "spacer" }, null, -1),
			t[27] ||= W("div", { class: "info-label" }, "Музыкальный профиль", -1),
			W("div", fj, [
				W("span", null, A(a.value.name), 1),
				W("span", null, A(a.value.family), 1),
				W("span", null, A(a.value.bpm[0]) + "–" + A(a.value.bpm[1]) + " BPM", 1)
			])
		])], 64));
	}
}, mj = {
	class: "sb-track-detail",
	"data-sb-vue-track-detail-view": ""
}, hj = {
	key: 0,
	class: "sb-track-disclaimer",
	"data-sb-vue-master-detail-recap": ""
}, gj = { class: "sb-track-buttons" }, _j = ["data-id"], vj = ["data-id"], yj = ["data-id"], bj = ["data-id"], xj = { class: "sb-track-hero" }, Sj = { class: "sb-track-cover" }, Cj = ["src"], wj = { class: "sb-track-phase" }, Tj = { class: "sb-track-facts" }, Ej = { class: "sb-track-buttons" }, Dj = ["href"], Oj = ["href"], kj = {
	key: 1,
	class: "sb-dna-track-reference"
}, Aj = ["data-id"], jj = { class: "sb-track-linkgrid" }, Mj = ["data-action", "data-id"], Nj = {
	key: 1,
	class: "sb-track-linked sb-track-linked-empty"
}, Pj = ["data-action", "data-id"], Fj = {
	key: 3,
	class: "sb-track-linked sb-track-linked-empty"
}, Ij = ["data-action", "data-id"], Lj = {
	key: 5,
	class: "sb-track-linked sb-track-linked-empty"
}, Rj = { class: "sb-track-section" }, zj = { key: 0 }, Bj = ["href"], Vj = [
	"data-id",
	"data-version",
	"aria-label"
], Hj = {
	key: 3,
	class: "sb-track-disclaimer"
}, Uj = { class: "sb-track-versionform" }, Wj = ["data-id"], Gj = {
	__name: "TrackPassportDetail",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = $();
		return R(() => t.model, (e) => n.publishPassportDetailSummary(e), { immediate: !0 }), (t, r) => (H(), U("div", mj, [
			I(n).masterDetailSummary.ready ? (H(), U("p", hj, " Последняя карточка Мастера: " + A(I(n).masterDetailSummary.done) + " из " + A(I(n).masterDetailSummary.total) + " этапов · " + A(I(n).masterDetailSummary.linkedCount) + " из 6 связей ", 1)) : q("", !0),
			W("div", gj, [
				r[0] ||= W("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "tp-list"
				}, "← К списку", -1),
				W("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "tp-edit",
					"data-id": e.model.id
				}, "Изменить", 8, _j),
				W("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "tp-event",
					"data-id": e.model.id
				}, "В календарь релизов", 8, vj),
				W("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "pc-from-passport",
					"data-id": e.model.id
				}, "🎛 Мастер", 8, yj),
				W("button", {
					type: "button",
					class: "btn danger small",
					"data-action": "tp-delete",
					"data-id": e.model.id
				}, "Удалить", 8, bj)
			]),
			W("div", xj, [W("div", Sj, [e.model.cover ? (H(), U("img", {
				key: 0,
				src: e.model.cover,
				alt: "Обложка",
				loading: "lazy"
			}, null, 8, Cj)) : (H(), U(V, { key: 1 }, [K("♫")], 64))]), W("div", null, [
				W("span", wj, A(e.model.phase), 1),
				W("h2", null, A(e.model.title), 1),
				W("p", null, A(e.model.artist), 1)
			])]),
			W("div", Tj, [(H(!0), U(V, null, B(e.model.facts, (e) => (H(), U("div", {
				key: e.label,
				class: "sb-track-fact"
			}, [W("span", null, A(e.label), 1), W("strong", null, A(e.value || "Не указано"), 1)]))), 128))]),
			W("div", Ej, [e.model.audio ? (H(), U("a", {
				key: 0,
				class: "btn ghost",
				href: e.model.audio,
				rel: "noopener noreferrer",
				target: "_blank"
			}, "Прослушать ↗", 8, Dj)) : q("", !0), e.model.cover ? (H(), U("a", {
				key: 1,
				class: "btn ghost",
				href: e.model.cover,
				rel: "noopener noreferrer",
				target: "_blank"
			}, "Обложка ↗", 8, Oj)) : q("", !0)]),
			e.model.dna ? (H(), U("div", kj, [r[1] ||= W("span", null, "🧬 ДНК артиста", -1), W("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "dna-open-from-track",
				"data-id": e.model.dna.id
			}, A(e.model.dna.name) + " →", 9, Aj)])) : q("", !0),
			r[9] ||= W("h3", { class: "sb-track-section" }, "Связанные материалы", -1),
			W("div", jj, [
				e.model.links[0].exists ? (H(), U("button", {
					key: 0,
					type: "button",
					class: "sb-track-linked",
					"data-action": e.model.links[0].action,
					"data-id": e.model.links[0].id
				}, [
					W("small", null, A(e.model.links[0].label), 1),
					W("strong", null, A(e.model.links[0].title), 1),
					r[2] ||= W("span", null, "Открыть →", -1)
				], 8, Mj)) : (H(), U("div", Nj, [W("small", null, A(e.model.links[0].label), 1), r[3] ||= W("strong", null, "Не привязан", -1)])),
				e.model.links[1].exists ? (H(), U("button", {
					key: 2,
					type: "button",
					class: "sb-track-linked",
					"data-action": e.model.links[1].action,
					"data-id": e.model.links[1].id
				}, [
					W("small", null, A(e.model.links[1].label), 1),
					W("strong", null, A(e.model.links[1].title), 1),
					r[4] ||= W("span", null, "Открыть →", -1)
				], 8, Pj)) : (H(), U("div", Fj, [W("small", null, A(e.model.links[1].label), 1), r[5] ||= W("strong", null, "Не привязан", -1)])),
				e.model.links[2].exists ? (H(), U("button", {
					key: 4,
					type: "button",
					class: "sb-track-linked",
					"data-action": e.model.links[2].action,
					"data-id": e.model.links[2].id
				}, [
					W("small", null, A(e.model.links[2].label), 1),
					W("strong", null, A(e.model.links[2].title), 1),
					r[6] ||= W("span", null, "Открыть →", -1)
				], 8, Ij)) : (H(), U("div", Lj, [W("small", null, A(e.model.links[2].label), 1), r[7] ||= W("strong", null, "Не привязан", -1)]))
			]),
			(H(!0), U(V, null, B(e.model.sections, (e) => (H(), U("section", {
				key: e.label,
				class: "sb-track-sectionbox"
			}, [W("h3", null, A(e.label), 1), W("pre", null, A(e.text), 1)]))), 128)),
			W("h3", Rj, "Версии трека (" + A(e.model.versions.length) + ")", 1),
			e.model.versions.length ? (H(!0), U(V, { key: 2 }, B(e.model.versions, (t) => (H(), U("div", {
				key: t.id,
				class: "sb-track-version"
			}, [W("div", null, [
				W("strong", null, A(t.label), 1),
				W("small", null, A(t.date), 1),
				t.notes ? (H(), U("p", zj, A(t.notes), 1)) : q("", !0)
			]), W("div", null, [t.url ? (H(), U("a", {
				key: 0,
				href: t.url,
				rel: "noopener noreferrer",
				target: "_blank"
			}, "Прослушать ↗", 8, Bj)) : q("", !0), W("button", {
				type: "button",
				class: "btn danger small",
				"data-action": "tp-version-remove",
				"data-id": e.model.id,
				"data-version": t.id,
				"aria-label": "Удалить версию " + t.label
			}, "×", 8, Vj)])]))), 128)) : (H(), U("p", Hj, "Версий пока нет.")),
			W("div", Uj, [r[8] ||= ba("<div class=\"field\"><label for=\"tp-version-title\">Название новой версии</label><input id=\"tp-version-title\" maxlength=\"100\" placeholder=\"Демо 2 / Финальный мастер\"></div><div class=\"field\"><label for=\"tp-version-url\">Ссылка (HTTPS)</label><input id=\"tp-version-url\" type=\"url\" maxlength=\"2000\" placeholder=\"https://…\"></div><div class=\"field\"><label for=\"tp-version-notes\">Что изменилось?</label><input id=\"tp-version-notes\" maxlength=\"300\" placeholder=\"Необязательно\"></div>", 3), W("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "tp-version-add",
				"data-id": e.model.id
			}, "+ Добавить версию", 8, Wj)]),
			r[10] ||= W("p", { class: "sb-track-disclaimer" }, " Связанный текст и промпт показываются из оригинальных разделов. Расчётные даты — ориентир, окончательная дата определяется издательством. ", -1)
		]));
	}
}, Kj = {
	id: "sb-track-form",
	class: "panel sb-track-form",
	"data-sb-vue-track-editor-view": ""
}, qj = { class: "sb-track-formhead" }, Jj = { class: "sb-track-fields" }, Yj = ["for"], Xj = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"placeholder"
], Zj = { class: "field" }, Qj = ["value"], $j = { class: "field" }, eM = ["value"], tM = { class: "field" }, nM = ["value"], rM = { class: "field" }, iM = ["value"], aM = { class: "field" }, oM = ["value"], sM = { class: "field" }, cM = ["value"], lM = { class: "field" }, uM = { class: "sb-track-fields" }, dM = { class: "field" }, fM = { class: "field" }, pM = ["disabled"], mM = { class: "sb-track-manual" }, hM = {
	id: "tp-date-hint",
	class: "sb-track-hint"
}, gM = { class: "sb-track-fields" }, _M = ["for"], vM = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"placeholder"
], yM = ["for"], bM = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"rows"
], xM = {
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
		let t = e, n = /* @__PURE__ */ M({ ...t.model.fields }), r = J(() => t.api.date7(n.submitted)), i = J(() => r.value ? "Автоматический расчёт: " + t.api.dateLabel(r.value) + " (через 7 календарных дней)." : "Укажи дату передачи издательству: релиз автоматически через 7 дней.");
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
		return (t, r) => (H(), U("div", Kj, [
			W("div", qj, [W("h2", null, A(e.model.editing ? "Редактировать паспорт" : "Новый паспорт трека"), 1), r[10] ||= W("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "tp-cancel"
			}, "Закрыть", -1)]),
			W("div", Jj, [
				(H(!0), U(V, null, B(o.slice(0, 2), (e) => (H(), U("div", {
					key: e.id,
					class: "field"
				}, [W("label", { for: "tp-" + e.id }, A(e.label), 9, Yj), L(W("input", {
					id: "tp-" + e.id,
					"onUpdate:modelValue": (t) => n[e.id] = t,
					maxlength: e.max,
					placeholder: e.placeholder
				}, null, 8, Xj), [[Y, n[e.id]]])]))), 128)),
				W("div", Zj, [r[11] ||= W("label", { for: "tp-status" }, "Этап работы", -1), L(W("select", {
					id: "tp-status",
					"onUpdate:modelValue": r[0] ||= (e) => n.status = e
				}, [(H(!0), U(V, null, B(e.model.stages, (e) => (H(), U("option", {
					key: e.value,
					value: e.value
				}, A(e.label), 9, Qj))), 128))], 512), [[X, n.status]])]),
				W("div", $j, [r[12] ||= W("label", { for: "tp-genre" }, "Жанр", -1), L(W("select", {
					id: "tp-genre",
					"onUpdate:modelValue": r[1] ||= (e) => n.genre = e
				}, [(H(!0), U(V, null, B(e.model.genres, (e) => (H(), U("option", {
					key: e.value,
					value: e.value
				}, A(e.label), 9, eM))), 128))], 512), [[X, n.genre]])]),
				W("div", tM, [r[14] ||= W("label", { for: "tp-project" }, "Мой проект / артист", -1), L(W("select", {
					id: "tp-project",
					"onUpdate:modelValue": r[2] ||= (e) => n.project = e
				}, [r[13] ||= W("option", { value: "" }, "Без связи", -1), (H(!0), U(V, null, B(e.model.projects, (e) => (H(), U("option", {
					key: e.value,
					value: e.value
				}, A(e.label), 9, nM))), 128))], 512), [[X, n.project]])]),
				W("div", rM, [r[16] ||= W("label", { for: "tp-dna" }, "ДНК артиста", -1), L(W("select", {
					id: "tp-dna",
					"onUpdate:modelValue": r[3] ||= (e) => n.dna = e
				}, [r[15] ||= W("option", { value: "" }, "Не привязывать", -1), (H(!0), U(V, null, B(e.model.dnas, (e) => (H(), U("option", {
					key: e.value,
					value: e.value
				}, A(e.label), 9, iM))), 128))], 512), [[X, n.dna]])]),
				W("div", aM, [r[18] ||= W("label", { for: "tp-idea" }, "Идея и текст песни", -1), L(W("select", {
					id: "tp-idea",
					"onUpdate:modelValue": r[4] ||= (e) => n.idea = e
				}, [r[17] ||= W("option", { value: "" }, "Без связи", -1), (H(!0), U(V, null, B(e.model.ideas, (e) => (H(), U("option", {
					key: e.value,
					value: e.value
				}, A(e.label), 9, oM))), 128))], 512), [[X, n.idea]])]),
				W("div", sM, [r[20] ||= W("label", { for: "tp-prompt" }, "Мой промпт Suno", -1), L(W("select", {
					id: "tp-prompt",
					"onUpdate:modelValue": r[5] ||= (e) => n.prompt = e
				}, [r[19] ||= W("option", { value: "" }, "Без связи", -1), (H(!0), U(V, null, B(e.model.prompts, (e) => (H(), U("option", {
					key: e.value,
					value: e.value
				}, A(e.label), 9, cM))), 128))], 512), [[X, n.prompt]])]),
				W("div", lM, [r[21] ||= W("label", { for: "tp-publisher" }, "Издательство / дистрибьютор", -1), L(W("input", {
					id: "tp-publisher",
					"onUpdate:modelValue": r[6] ||= (e) => n.publisher = e,
					maxlength: "120",
					placeholder: "Название издательства"
				}, null, 512), [[Y, n.publisher]])])
			]),
			r[25] ||= W("h3", { class: "sb-track-section" }, "Даты релиза", -1),
			W("div", uM, [W("div", dM, [r[22] ||= W("label", { for: "tp-submitted" }, "Передано издательству", -1), L(W("input", {
				id: "tp-submitted",
				"onUpdate:modelValue": r[7] ||= (e) => n.submitted = e,
				type: "date",
				onChange: a
			}, null, 544), [[Y, n.submitted]])]), W("div", fM, [
				r[24] ||= W("label", { for: "tp-release" }, "Дата выхода", -1),
				L(W("input", {
					id: "tp-release",
					"onUpdate:modelValue": r[8] ||= (e) => n.release = e,
					type: "date",
					disabled: !n.override
				}, null, 8, pM), [[Y, n.release]]),
				W("label", mM, [L(W("input", {
					id: "tp-override",
					"onUpdate:modelValue": r[9] ||= (e) => n.override = e,
					type: "checkbox",
					onChange: a
				}, null, 544), [[Wo, n.override]]), r[23] ||= K(" Установить дату вручную ", -1)])
			])]),
			W("p", hM, A(i.value), 1),
			r[26] ||= W("h3", { class: "sb-track-section" }, "Материалы и метаданные", -1),
			W("div", gM, [(H(), U(V, null, B(s, (e) => W("div", {
				key: e.id,
				class: "field"
			}, [W("label", { for: "tp-" + e.id }, A(e.label), 9, _M), L(W("input", {
				id: "tp-" + e.id,
				"onUpdate:modelValue": (t) => n[e.id] = t,
				maxlength: e.max,
				placeholder: e.placeholder
			}, null, 8, vM), [[Y, n[e.id]]])])), 64))]),
			(H(), U(V, null, B(c, (e) => W("div", {
				key: e.id,
				class: "field"
			}, [W("label", { for: "tp-" + e.id }, A(e.label), 9, yM), L(W("textarea", {
				id: "tp-" + e.id,
				"onUpdate:modelValue": (t) => n[e.id] = t,
				maxlength: e.max,
				rows: e.rows
			}, null, 8, bM), [[Y, n[e.id]]])])), 64)),
			r[27] ||= W("div", { class: "sb-track-buttons" }, [W("button", {
				type: "button",
				class: "btn primary",
				"data-action": "tp-save"
			}, "Сохранить паспорт"), W("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "tp-cancel"
			}, "Отмена")], -1),
			r[28] ||= W("p", { class: "sb-track-disclaimer" }, " Обложка и аудио пока прикрепляются ссылками. Загрузка файлов будет доступна после переноса на сервер. Данные сохраняются локально и попадают в резервную копию SUNOBOOM. ", -1)
		]));
	}
}, SM = {
	key: 0,
	class: "sb-track-disclaimer",
	"data-sb-vue-master-recap": ""
}, CM = {
	class: "sb-track-filters",
	role: "group",
	"aria-label": "Фильтр паспортов по этапу"
}, wM = ["data-filter", "aria-pressed"], TM = {
	key: 1,
	class: "sb-track-list"
}, EM = ["data-id"], DM = {
	key: 2,
	class: "sb-track-empty"
}, OM = {
	__name: "TrackPassportList",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = $();
		return R(() => t.model, (e) => n.publishPassportListSummary(e), { immediate: !0 }), (t, r) => (H(), U(V, null, [
			I(n).masterListSummary.ready ? (H(), U("p", SM, " В Мастере: " + A(I(n).masterListSummary.workCount) + " песен в работе · " + A(I(n).masterListSummary.finishedCount) + " маршрутов полностью пройдено ", 1)) : q("", !0),
			W("div", CM, [(H(!0), U(V, null, B(e.model.filters, (t) => (H(), U("button", {
				key: t.key,
				type: "button",
				"data-action": "tp-filter",
				"data-filter": t.key,
				class: k({ active: e.model.active === t.key }),
				"aria-pressed": e.model.active === t.key
			}, A(t.label), 11, wM))), 128))]),
			e.model.records.length ? (H(), U("div", TM, [(H(!0), U(V, null, B(e.model.records, (e) => (H(), U("button", {
				key: e.id,
				type: "button",
				class: "sb-track-tile",
				"data-action": "tp-open",
				"data-id": e.id
			}, [
				r[0] ||= W("span", { class: "sb-track-note" }, "♫", -1),
				W("span", null, [
					W("strong", null, A(e.title), 1),
					W("small", null, A(e.artist), 1),
					W("small", null, A(e.statusLabel) + A(e.releaseLabel ? " · " + e.releaseLabel : ""), 1)
				]),
				r[1] ||= W("i", { "aria-hidden": "true" }, "→", -1)
			], 8, EM))), 128))])) : (H(), U("div", DM, A(e.model.hasRecords ? "В этой категории пока нет треков." : "Паспортов пока нет. Создай первый, чтобы объединить материалы песни."), 1))
		], 64));
	}
}, kM = {
	class: "encyclopedia-section-icon",
	"aria-hidden": "true"
}, AM = { key: 1 }, jM = ["innerHTML"], MM = { key: 1 }, NM = { key: 0 }, PM = { key: 1 }, FM = { class: "sbpc-create-controls" }, IM = ["value"], LM = ["value"], RM = ["label"], zM = ["value"], BM = ["value"], VM = { class: "sbsong-hero-row" }, HM = { class: "sbsong-hero-tools" }, UM = {
	type: "button",
	class: "sbsong-artists-manage-btn",
	"data-sbsong-action": "artists-manage"
}, WM = { class: "sbsong-stats" }, GM = ["value"], KM = {
	class: "btn ghost small",
	"data-action": "nav",
	"data-nav": "mixer"
}, qM = {
	key: 0,
	class: "btn ghost small",
	"data-action": "gm-unlink"
}, JM = {
	key: 8,
	type: "button",
	class: "sba-jump",
	"data-sba-action": "jump"
}, YM = {
	__name: "WorkspaceControls",
	props: {
		api: {
			type: Object,
			required: !0
		},
		name: {
			type: String,
			required: !0
		},
		initial: {
			type: Object,
			required: !0
		}
	},
	setup(e) {
		let t = e, n = /* @__PURE__ */ F(t.initial), r = () => {
			let e = t.api.snapshot(t.name);
			e && (n.value = e);
		};
		return t.initial.event && window.addEventListener(t.initial.event, r), Mr(() => {
			t.initial.event && window.removeEventListener(t.initial.event, r);
		}), (e, t) => (H(), U(V, null, [
			n.value.kind === "academy-launch" ? (H(), U("button", wa({
				key: 0,
				type: "button",
				class: ["encyclopedia-section", n.value.tree ? "sb-gt-entry" : "sb-ap-tile"]
			}, n.value.tree ? { "data-sb-gt-action": "reveal" } : { "data-sb-ap-action": "hub-open" }), [
				W("span", kM, A(n.value.tree ? "🕸️" : "🎙️"), 1),
				W("span", null, [W("strong", null, A(n.value.tree ? "Музыкальное древо" : "Профили исполнителей"), 1), W("small", null, A(n.value.tree ? "Истоки, связи и влияние жанров" : "История, звучание и важные произведения"), 1)]),
				t[0] ||= W("span", { class: "encyclopedia-section-status" }, "Открыть", -1)
			], 16)) : q("", !0),
			n.value.kind === "quick-poetry" ? (H(), U("span", AM, "✍️ Работа с текстом песни")) : q("", !0),
			n.value.kind === "actions" || n.value.kind === "quick-poetry" || n.value.kind === "prompt-auditor" || n.value.kind === "player-modes" ? (H(), U(V, { key: 2 }, [
				(H(!0), U(V, null, B(n.value.buttons, (e, t) => (H(), U("button", wa({ key: t }, { ref_for: !0 }, e.attrs), [
					e.icon ? (H(), U("span", {
						key: 0,
						innerHTML: e.icon,
						"aria-hidden": "true",
						style: { display: "contents" }
					}, null, 8, jM)) : q("", !0),
					K(A(e.icon ? " " : "") + A(e.label), 1),
					e.badge ? (H(), U("span", MM, A(e.badge), 1)) : q("", !0)
				], 16))), 128)),
				n.value.hint ? (H(), U("span", NM, A(n.value.hint), 1)) : q("", !0),
				n.value.kind === "prompt-auditor" ? (H(), U("span", PM, "Переносит текст на проверку, не сохраняя и не изменяя текущую запись.")) : q("", !0)
			], 64)) : n.value.kind === "producer-create" ? (H(), U(V, { key: 3 }, [t[3] ||= W("div", null, [W("h2", null, "Начать работу над песней"), W("p", null, "Создай новую карточку или выбери существующую идею, песню либо паспорт.")], -1), W("div", FM, [
				W("input", {
					type: "text",
					id: "sbpc-new-title",
					maxlength: "120",
					value: n.value.title,
					placeholder: "Название новой песни (можно оставить пустым при выборе материала)"
				}, null, 8, IM),
				W("select", {
					id: "sbpc-new-source",
					"aria-label": "Исходный материал",
					value: n.value.source
				}, [t[1] ||= W("option", { value: "" }, "Новая песня без привязки", -1), (H(!0), U(V, null, B(n.value.groups, (e) => (H(), U("optgroup", {
					key: e.type,
					label: e.title
				}, [(H(!0), U(V, null, B(e.items, (t) => (H(), U("option", {
					key: t.id,
					value: e.type + ":" + t.id
				}, A(t.name), 9, zM))), 128))], 8, RM))), 128))], 8, LM),
				t[2] ||= W("button", {
					type: "button",
					class: "sbpc-main-btn",
					"data-pc-action": "create"
				}, "+ Создать рабочую карточку", -1)
			])], 64)) : n.value.kind === "producer-search" ? (H(), U(V, { key: 4 }, [W("h2", null, "Песни (" + A(n.value.count) + ")", 1), W("input", {
				id: "sbpc-search",
				type: "search",
				value: n.value.query,
				placeholder: "Найти песню или артиста",
				"aria-label": "Поиск по песням"
			}, null, 8, BM)], 64)) : n.value.kind === "songs-header" ? (H(), U(V, { key: 5 }, [
				t[7] ||= W("div", { class: "sbsong-eyebrow" }, "SUNOBOOM · ЛИЧНЫЙ КАБИНЕТ", -1),
				t[8] ||= W("button", {
					type: "button",
					"data-sbsong-action": "back",
					class: "sbsong-back"
				}, "← В личный кабинет", -1),
				W("div", VM, [t[5] ||= W("div", null, [W("h1", null, "Мои песни"), W("p", null, "Личная коллекция песен: карточки, обложки, MP3, M4A, WAV и версии записей.")], -1), W("div", HM, [W("button", UM, "♬ Мои артисты (" + A(n.value.artists) + ")", 1), t[4] ||= W("button", {
					type: "button",
					class: "sbsong-main-btn",
					"data-sbsong-action": "new"
				}, "+ Добавить песню", -1)])]),
				W("div", WM, [
					W("span", null, A(n.value.count) + " песен", 1),
					W("span", null, A(n.value.versions) + " аудиоверсий на устройстве", 1),
					t[6] ||= W("span", null, "Хранение локально", -1)
				])
			], 64)) : n.value.kind === "songs-search" ? (H(), U(V, { key: 6 }, [t[9] ||= W("h2", null, "Коллекция", -1), W("input", {
				type: "search",
				id: "sbsong-search",
				value: n.value.query,
				placeholder: "Найти песню или исполнителя…",
				"aria-label": "Поиск песен"
			}, null, 8, GM)], 64)) : n.value.kind === "mixer-banner" ? (H(), U(V, { key: 7 }, [
				W("strong", null, A(n.value.active ? "🎛️ Активен жанровый микс" : "🎚️ Жанровый миксер"), 1),
				W("span", null, A(n.value.description), 1),
				W("button", KM, A(n.value.active ? "Изменить микс" : "Открыть миксер →"), 1),
				n.value.active ? (H(), U("button", qM, "Обычный жанр")) : q("", !0)
			], 64)) : n.value.kind === "arranger-jump" ? (H(), U("button", JM, [...t[10] ||= [
				W("span", null, "♬", -1),
				K(" Конструктор аранжировки ", -1),
				W("small", null, "Создать структуру песни", -1),
				K(),
				W("span", null, "↓", -1)
			]])) : q("", !0)
		], 64));
	}
}, XM = {
	"sb-vue-dashboard": [
		Qb,
		"DASHBOARD",
		"model"
	],
	"sb-vue-account-home": [
		Bp,
		"ACCOUNT_HOME",
		"initial"
	],
	"sb-vue-account-settings": [
		sm,
		"SETTINGS",
		"model"
	],
	"sb-vue-ideas-page": [
		rS,
		"IDEAS_PAGE",
		"initial"
	],
	"sb-vue-library-collection": [
		GS,
		"LIBRARY",
		"model"
	],
	"sb-vue-projects-list": [
		GE,
		"PROJECT_LIST",
		"model"
	],
	"sb-vue-project-creator": [
		ZE,
		"PROJECT_CREATOR",
		"initial"
	],
	"sb-vue-project-detail": [
		sD,
		"PROJECT_DETAIL",
		"initial"
	],
	"sb-vue-events-list": [
		N_,
		"EVENT_LIST",
		"model"
	],
	"sb-vue-event-fields": [
		V_,
		"EVENT_EDITOR",
		"initial"
	],
	"sb-vue-event-reminders": [
		q_,
		"EVENT_REMINDERS",
		"initial"
	],
	"sb-vue-event-actions": [
		x_,
		"EVENT_ACTIONS",
		"model"
	],
	"sb-vue-prompts-list": [
		KD,
		"PROMPT_LIST",
		"model"
	],
	"sb-vue-prompt-form": [
		$D,
		"PROMPT_EDITOR",
		"initial"
	],
	"sb-vue-idea-collections": [
		px,
		"IDEA_COLLECTIONS",
		"model"
	],
	"sb-vue-idea-fields": [
		xx,
		"IDEA_EDITOR",
		"initial"
	],
	"sb-vue-lyrics-source": [
		qS,
		"IDEA_EDITOR",
		"initial"
	],
	"sb-vue-lyrics-tools": [
		mC,
		"IDEA_EDITOR",
		"initial"
	],
	"sb-vue-track-list": [
		OM,
		"TRACK_LIST",
		"model"
	],
	"sb-vue-track-detail": [
		Gj,
		"TRACK_DETAIL",
		"model"
	],
	"sb-vue-track-editor": [
		xM,
		"TRACK_EDITOR",
		"model"
	],
	"sb-vue-dna-view": [
		Rg,
		"DNA",
		"model"
	],
	"sb-vue-dna-editor": [
		d_,
		"DNA_EDITOR",
		"model"
	],
	"sbpc-list": [
		BE,
		"PRODUCER_LIST",
		"model"
	],
	"sb-vue-producer-detail": [
		NE,
		"PRODUCER_DETAIL",
		"model"
	],
	"sb-vue-player-lab": [
		jT,
		"PLAYER_LAB",
		"initialModel"
	],
	"sb-vue-player-ab": [
		Gw,
		"PLAYER_AB",
		"initialModel"
	],
	"sb-vue-song-cards": [
		KO,
		"SONG_CARDS",
		""
	],
	"sb-vue-song-detail": [
		Hk,
		"SONG_DETAIL",
		"model"
	],
	"sb-vue-song-editor": [
		wA,
		"SONG_EDITOR",
		"model"
	],
	"sb-vue-artist-manager": [
		v_,
		"ARTIST_MANAGER",
		"model"
	],
	"sbsong-shared": [
		pO,
		"SHARED_SONG",
		"model"
	],
	"sb-vue-genre-detail": [
		Ey,
		"GENRE",
		"genre"
	],
	"sb-vue-academy-root": [
		vp,
		"ACADEMY",
		"snapshot"
	],
	"studio-grid": [
		pj,
		"STUDIO",
		""
	],
	"sb-vue-mixer-root": [
		bb,
		"MIXER",
		""
	],
	"sbpa-auditor": [
		MD,
		"AUDITOR",
		""
	],
	"sb-vt-workbench": [
		ZC,
		"TAGS",
		""
	]
}, ZM = {
	"sba-cards": "cards",
	"sba-snake-track": "snake",
	"sba-transition-hub-list": "transitions",
	"sba-energy-chart": "energy",
	"sba-add-editor": "composer",
	"sba-preset-confirm": "preset-confirm"
};
function QM(e, t) {
	let n = !0;
	return {
		...e,
		snapshot(...r) {
			return n && !r.length ? (n = !1, t) : e.snapshot(...r);
		}
	};
}
function $M({ sharedUi: e, host: t = window }) {
	let n = /* @__PURE__ */ new Map(), r = (e) => {
		if (!n.has(e)) {
			let r = t["SUNOBOOM_LEGACY_" + e];
			if (!r?.snapshot) throw Error("Missing page API: " + e);
			let i = r.snapshot();
			if (!i) throw Error("Unavailable page model: " + e);
			n.set(e, i);
		}
		return n.get(e);
	};
	return (n) => {
		if (XM[n]) {
			let [i, a, o] = XM[n], s = t["SUNOBOOM_LEGACY_" + a], c = r(a);
			a === "ACCOUNT_HOME" && (c = {
				...c,
				profileName: t.SUNOBOOM_VIEW_INPUTS.field("profile-name")?.value ?? c.profileName
			});
			let l = (e, n, r = !1) => {
				let i = t.SUNOBOOM_VIEW_INPUTS.field(e);
				return i ? r ? i.checked : i.value : n;
			};
			if (a === "SETTINGS" && (c = {
				...c,
				name: l("sbs-name", c.name)
			}), a === "DNA_EDITOR") {
				let e = {
					projectId: "project",
					otherGenres: "othergenres",
					tempoMin: "tempo-min",
					tempoMax: "tempo-max",
					noWhisper: "whisper",
					noRasp: "rasp",
					noLive: "live",
					noChoir: "choir"
				};
				c = {
					...c,
					fields: Object.fromEntries(Object.entries(c.fields).map(([t, n]) => [t, l("dna-" + (e[t] || t), n, typeof n == "boolean")]))
				};
			}
			a === "PRODUCER_DETAIL" && (c = {
				...c,
				title: l("sbpc-title", c.title),
				artist: l("sbpc-artist", c.artist),
				notes: l("sbpc-notes", c.notes),
				links: c.links.map((e) => ({
					...e,
					value: l("sbpc-" + e.field, e.value)
				})),
				stages: c.stages.map((e) => ({
					...e,
					status: l("stage:" + e.key, e.status)
				}))
			}), a === "SONG_DETAIL" && (c = {
				...c,
				versions: c.versions.map((e) => ({
					...e,
					draftLabel: l("version-title:" + e.id, e.label),
					draftNotes: l("version-note:" + e.id, e.notes)
				}))
			});
			let u = o ? { [o]: c } : {};
			return i.props?.api && (u.api = o ? s : QM(s, c)), a === "DASHBOARD" && (e.publishDashboardStats(c), u.navigate = (e) => xs(e, { legacyApi: t.SUNOBOOM_LEGACY_NAV })), a === "GENRE" && Object.assign(u, {
				selectTab: (e, t) => s.selectTab(e, t),
				tabContent: (e, t) => s.tabContent(e, t),
				artistCatalog: t.SUNOBOOM_ARTIST_CATALOG || null,
				artistProfiles: t.SUNOBOOM_ARTIST_PROFILES || null
			}), a === "ACADEMY" && Object.assign(u, {
				artistProfiles: t.SUNOBOOM_ARTIST_PROFILES || null,
				search: (e) => s.search(e),
				searchIcon: s.searchIcon || "",
				setExpanded: (e, t, n) => s.setExpanded(e, t, n)
			}), {
				component: i,
				props: u
			};
		}
		if (n === "sb-poetry-result") {
			let e = t.SUNOBOOM_LEGACY_POETRY, n = e.analysis(), r = !0;
			return {
				component: JT,
				props: { api: {
					...e,
					analysis() {
						return r ? (r = !1, n) : e.analysis();
					}
				} }
			};
		}
		if (ZM[n] || n.startsWith("arranger-controls:") || ["sba-preset-picker", "sba-result"].includes(n)) {
			let e = ZM[n] || n.split(":")[1], i = r("ARRANGER"), a = t.SUNOBOOM_LEGACY_ARRANGER, o = n === "sba-preset-picker" ? rg : n === "sba-result" ? fg : [
				"cards",
				"snake",
				"transitions",
				"energy"
			].includes(e) ? Wh : Sm;
			return {
				component: o,
				props: o === Sm ? {
					kind: e,
					initial: i,
					api: a
				} : {
					...o === Wh ? { kind: e } : {},
					api: QM(a, i)
				}
			};
		}
		let i = n === "song-blueprint" ? "blueprint" : n, a = t.SUNOBOOM_WORKSPACE_UI, o = a?.snapshot(i);
		if (!o) throw Error("Missing workspace model: " + i);
		return {
			component: i === "blueprint" ? NO : i === "notice-banner" ? Fd : YM,
			props: {
				api: a,
				name: i,
				initial: o
			}
		};
	};
}
// src/vue/shell/application-shell.js
async function eN({ pinia: e, sharedUi: t }) {
	let n = document.getElementById("app"), r = window.SUNOBOOM_SHELL_ADAPTER;
	if (!n || !r) return null;
	let i = [...n.childNodes], a = Tl({
		history: Wc(location.pathname + location.search),
		routes: [{
			path: "/:pathMatch(.*)*",
			component: rf
		}],
		scrollBehavior: (e, t, n) => n || {
			left: 0,
			top: 0
		}
	});
	function o() {
		let e = window.SUNOBOOM_LEGACY_NAV.snapshot();
		ds(e.active);
		let n = cs(e);
		return t.publishNavigation(n), {
			...r.frame(),
			navigation: n,
			header: _s(window.SUNOBOOM_LEGACY_HEADER.snapshot()),
			notices: window.SUNOBOOM_WORKSPACE_UI.snapshot("notice-panel")
		};
	}
	let s = /* @__PURE__ */ Vt({
		page: null,
		frame: o(),
		revision: 0,
		pageError: !1
	}), c = /* @__PURE__ */ F([]), l = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new Map(), d = 0, f, p = !1, m = 0, h = null, g = !1, _ = !1, v = null, y, b, x = !1, S = 0, C = /* @__PURE__ */ new Map(), w = ps(r.current()), ee = (e, t) => console.warn("[SUNOBOOM] " + e, t);
	function te(e, t) {
		let n = document.getElementById, r = document.querySelector, i = document.querySelectorAll;
		document.getElementById = (t) => t === "app" ? e : e.querySelector("#" + CSS.escape(t)) || (/^(toast|sb-ap-|sb-vh)/.test(t) ? n.call(document, t) : null), document.querySelector = (t) => e.querySelector(t) || (/^meta|^head|^html|^body|sb-ap-|sb-vh/.test(t) ? r.call(document, t) : null), document.querySelectorAll = (t) => e.querySelectorAll(t);
		try {
			return t();
		} finally {
			document.getElementById = n, document.querySelector = r, document.querySelectorAll = i;
		}
	}
	function ne({ inputs: e, page: n = null, run: r = null, fields: i = [], boundaries: a = /* @__PURE__ */ new Map() }) {
		let c = null;
		try {
			c = window.SUNOBOOM_VIEW_INPUTS.withInputs(e, () => pf(window.SUNOBOOM_PAGE_STATE.snapshot(), $M({ sharedUi: t }))), Xd(c, a);
		} catch (e) {
			ee("Page preparation failed; native page retained.", e);
		}
		let l = s.revision + 1;
		u.set(l, {
			page: n,
			model: c,
			run: r,
			fields: i
		}), s.page = c, s.pageError = !c, s.frame = o(), s.revision = l, Tn().then(() => {
			if (!_) {
				for (let e of u.keys()) e !== s.revision && u.delete(e);
				window.dispatchEvent(new Event("sunoboom:shell-rendered"));
			}
		});
	}
	function T(e) {
		if (e.page) return e.page;
		let t = document.createElement("div");
		t.hidden = !0, t.setAttribute("data-sb-native-fallback", ""), document.body.append(t), v = t, S++;
		try {
			return te(t, () => e.run?.()), e.page = t.querySelector("[data-sb-vue-page]"), e.page && (e.model && Qd(e.page, e.model), of(e.page, e.fields)), e.page;
		} finally {
			v = null, t.remove();
		}
	}
	let re = {
		navigate: (e) => bs(e, { legacyApi: window.SUNOBOOM_LEGACY_NAV }),
		canGo: (e) => se(e),
		restore: (e) => ce(e),
		attach(e, t) {
			let n = u.get(e);
			if (!n || !t) return;
			let r = T(n);
			r && (n.model && Qd(r, n.model), t.replaceChildren(...r.childNodes));
		},
		failed(e, t) {
			e === s.revision && (s.pageError = !0), ee("Page component failed; native page retained.", t);
		}
	};
	function E(e) {
		!m && p && (h = {
			path: ps(r.current()),
			mode: e || "push"
		}, g || (g = !0, queueMicrotask(() => {
			g = !1;
			let e = h;
			h = null, !_ && e && e.path !== a.currentRoute.value.fullPath && a[e.mode === "replace" ? "replace" : "push"](e.path).catch((e) => ee("Route unavailable.", e));
		})));
	}
	function D(e) {
		if (v) return e();
		if (!x) {
			x = !0;
			try {
				window.dispatchEvent(new Event("sunoboom:before-page"));
				let t = n.querySelector("[data-sb-vue-page]"), i = ps(r.current()), a = i === w;
				w = i, C = a ? xp(t) : /* @__PURE__ */ new Map(), ne({
					run: e,
					fields: a && t ? af(t) : [],
					boundaries: a ? lf(t) : /* @__PURE__ */ new Map()
				});
			} finally {
				x = !1;
			}
			E();
		}
	}
	function ie(e) {
		if (v) v.innerHTML = e;
		else throw Error("Native HTML outside fallback renderer");
	}
	function ae(e, t = !0) {
		queueMicrotask(() => {
			l.get(e.target) === e && (l.delete(e.target), c.value = c.value.filter((t) => t !== e), Tn().then(() => {
				t && !l.has(e.target) && (e.target.innerHTML = e.html, of(e.target, e.fields), e.hadMarker || e.target.removeAttribute("data-v-app"));
			}));
		});
	}
	function oe(e, t, n = {}) {
		if (typeof e == "string" && (e = document.querySelector(e)), !e || !t) return null;
		let r = l.get(e), i = r ? {
			...r,
			component: t,
			props: n
		} : {
			id: ++d,
			target: e,
			component: t,
			props: n,
			html: e.innerHTML,
			fields: af(e),
			hadMarker: e.hasAttribute("data-v-app")
		};
		return i.fail = (e) => {
			ee("Feature failed; native controls retained.", e), ae(i);
		}, r || (e.replaceChildren(), e.setAttribute("data-v-app", "")), l.set(e, i), c.value = r ? c.value.map((e) => e === r ? i : e) : [...c.value, i], () => ae(i);
	}
	function se(e) {
		if (r.current().nav === "tracks" && r.current().edit) return !1;
		let t = a.options.history.state[e === "back" ? "back" : "forward"];
		return typeof t == "string" && t.startsWith("/") && r.canRestore(ms(t));
	}
	async function ce(e) {
		return se(e) ? new Promise((t) => {
			let n = a.afterEach((e, r, i) => {
				i || (n(), Tn().then(() => t(!0)));
			});
			a.go(e === "back" ? -1 : 1);
		}) : !1;
	}
	let le = {
		get active() {
			return p;
		},
		renderHTML: ie,
		afterRender: (e) => v ? e() : Tn().then(() => {
			_ || e();
		}),
		navigate: (e) => a.push(ps({ nav: e })),
		recordCurrent: E,
		canGo: se,
		back: () => ce("back"),
		forward: () => ce("forward"),
		snapshot: () => ({
			active: p,
			route: a.currentRoute.value.fullPath,
			revision: s.revision,
			nativeFallbacks: S,
			shells: n.querySelectorAll("[data-sb-vue-shell]").length
		}),
		mountFeature: oe,
		unmountFeature: (e) => {
			let t = l.get(e);
			t && ae(t);
		},
		router: a
	};
	a.beforeEach((e) => {
		let t = e.fullPath.replace(/^\//, "");
		if (/^(sb-song=|genre-|view-)/.test(t)) {
			let n = hs("#" + t, r.current());
			if (n !== e.fullPath) {
				let e = a.resolve(n);
				return {
					path: e.path,
					query: e.query,
					replace: !0
				};
			}
		}
		return !0;
	}), a.afterEach(async (e, t, n) => {
		if (n || !p || _) return;
		if (ps(r.current()) !== e.fullPath) {
			m++;
			try {
				r.apply(ms(e.fullPath));
			} finally {
				m--;
			}
		}
		let i = ps(r.current());
		i !== e.fullPath && await a.replace(i);
	});
	try {
		await a.replace(ps(r.current())), b = gs({
			shell: le,
			sharedUi: t,
			legacyApi: window.SUNOBOOM_LEGACY_NAV
		});
		let i = n.querySelector("[data-sb-vue-page]"), l = cf(i);
		C = xp(i), ne({
			page: i,
			inputs: l,
			fields: af(i),
			boundaries: lf(i)
		});
		let u;
		if (f = rs({ setup: () => () => Ja(Jd, {
			state: s,
			portals: c.value,
			resources: re
		}) }), f.provide(yp, (e) => {
			let t = e.id || e.name, n = C.get(t);
			return C.delete(t), n;
		}), f.use(e), f.use(a), f.config.errorHandler = (e, t, n) => {
			u ??= e, ee("Shell error (" + (t?.$options?.name || n) + ").", e);
		}, f.mount(n), await Tn(), u) throw u;
		if (uf(n, l), p = !0, window.SUNOBOOM_SHELL = le, s.frame = o(), y = r.installRenderer(D), ps(r.current()) !== a.currentRoute.value.fullPath) {
			m++;
			try {
				r.apply(ms(a.currentRoute.value.fullPath));
			} finally {
				m--;
			}
		}
		await Tn();
		let d = ps(r.current());
		return d !== a.currentRoute.value.fullPath && await a.replace(d), le;
	} catch (e) {
		_ = !0, p = !1, b?.(), y?.();
		try {
			f?.unmount();
		} finally {
			n.replaceChildren(...i);
		}
		return ee("Shell unavailable; native interface retained.", e), null;
	}
}
function tN(e) {
	return !1;
}
function nN(e) {
	if (!e?.closest) return e;
	if (e.closest("[data-sb-shell-owned]")) return null;
	let t = e.closest("[data-sb-page-fallback]");
	if (t && e !== t) return null;
	let n = e.closest("[data-sb-vue-page][data-v-app]");
	return n && e !== n && !e.closest("[data-sb-native-boundary]") ? null : e;
}
// src/vue/legacy/observeLegacyIslands.js
function rN({ root: e, islands: t, subscribe: n, beforeSync: r, createObserver: i }) {
	if (!e || !Array.isArray(t) || !t.length || t.some((e) => !e || typeof e.key != "string" || !e.key || typeof e.selectTarget != "function" || typeof e.readSnapshot != "function" || typeof e.mount != "function") || new Set(t.map((e) => e.key)).size !== t.length) return () => {};
	if (tN({
		root: e,
		...t[0]
	})) {
		for (let e of t.slice(1)) ({ ...e });
		return () => {};
	}
	let a = /* @__PURE__ */ new Map(), o = !1;
	function s() {
		if (!o) {
			typeof r == "function" && r();
			for (let n of t) {
				let t = nN(n.selectTarget(e)), r = a.get(n.key), i = typeof n.readRevision == "function" ? n.readRevision() : void 0;
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
	let c = i?.(s);
	c?.observe(e, { childList: !0 });
	let l = typeof n == "function" ? n(s) : null;
	return typeof window < "u" && window.addEventListener("sunoboom:shell-rendered", s), s(), () => {
		if (!o) {
			o = !0, typeof window < "u" && window.removeEventListener("sunoboom:shell-rendered", s), c?.disconnect(), typeof l == "function" && l();
			for (let { unmount: e } of a.values()) e();
			a.clear();
		}
	};
}
// src/vue/workspace/legacyWorkspaceBridge.js
var iN = [
	"stress-actions",
	"tree-launch",
	"artist-launch",
	"notice-panel",
	"notice-banner",
	"back",
	"quick-poetry",
	"poetry-tools",
	"idea-actions",
	"prompt-actions",
	"prompt-auditor",
	"track-toolbar",
	"dna-toolbar",
	"blueprint",
	"producer-create",
	"producer-search",
	"songs-header",
	"songs-search",
	"player-modes",
	"mixer-banner",
	"arranger-jump"
];
function aN({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_WORKSPACE_UI, n = document.getElementById("app");
	return !t || !n ? () => {} : rN({
		root: n,
		islands: iN.map((n) => ({
			key: n,
			selectTarget: (e) => e.querySelector(`[data-sb-workspace="${n}"]`),
			readRevision: n === "notice-panel" ? () => JSON.stringify(t.snapshot(n)) : void 0,
			readSnapshot: () => t.snapshot(n),
			mount: (r, i) => {
				let a = e(r, n.startsWith("notice-") ? Fd : n === "blueprint" ? NO : YM, {
					api: t,
					name: n,
					initial: i
				});
				if (!a) {
					let e = {
						"producer-create": {
							"sbpc-new-title": i.title,
							"sbpc-new-source": i.source
						},
						"producer-search": { "sbpc-search": i.query },
						"songs-search": { "sbsong-search": i.query }
					}[n] || {};
					for (let [t, n] of Object.entries(e)) {
						let e = r.querySelector("#" + t);
						e && (e.value = n);
					}
				}
				return a;
			}
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
// src/vue/academy/ArtistProfileDialog.vue
var oN = { class: "sb-ap-dialog-title" }, sN = { class: "sb-ap-profile-hero" }, cN = { class: "sb-ap-profile-logo" }, lN = { class: "sb-ap-overline" }, uN = { id: "sb-ap-dialog-heading" }, dN = { class: "sb-ap-profile-fields" }, fN = { class: "sb-ap-profile-section" }, pN = { class: "sb-ap-profile-section" }, mN = {
	key: 0,
	class: "sb-ap-fine"
}, hN = { class: "sb-ap-profile-section" }, gN = {
	key: 0,
	class: "sb-ap-pills"
}, _N = {
	key: 1,
	class: "sb-ap-muted"
}, vN = {
	key: 2,
	class: "sb-ap-fine"
}, yN = { class: "sb-ap-profile-section" }, bN = {
	key: 0,
	class: "sb-ap-songs"
}, xN = {
	key: 1,
	class: "sb-ap-muted"
}, SN = { class: "sb-ap-profile-section" }, CN = {
	key: 0,
	class: "sb-ap-related"
}, wN = ["data-genre", "onClick"], TN = {
	key: 1,
	class: "sb-ap-muted"
}, EN = { class: "sb-ap-profile-buttons" }, DN = ["data-name", "aria-pressed"], ON = ["data-name"], kN = {
	__name: "ArtistProfileDialog",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ F(t.api.profileSnapshot()), r = /* @__PURE__ */ P(null), i = () => Tn(() => r.value?.focus()), a = t.api.subscribe(() => {
			let e = n.value?.key;
			n.value = t.api.profileSnapshot(), n.value && e !== n.value.key && i();
		});
		return z(i), Mr(a), (t, i) => n.value ? (H(), U(V, { key: 0 }, [
			W("div", oN, [i[3] ||= W("span", null, "🎙️ Профиль исполнителя", -1), W("button", {
				ref_key: "close",
				ref: r,
				type: "button",
				"data-sb-ap-action": "close",
				class: "sb-ap-close",
				"aria-label": "Закрыть профиль",
				onClick: i[0] ||= Z((t) => e.api.closeProfile(), ["stop"])
			}, "×", 512)]),
			W("div", sN, [W("div", cN, A(n.value.initials), 1), W("div", null, [
				W("span", lN, A(n.value.scene), 1),
				W("h2", uN, A(n.value.name), 1),
				W("p", null, A(n.value.editorial ? "Редакционная справка SUNOBOOM" : "Сведения из карточек Академии"), 1)
			])]),
			W("div", dN, [
				W("section", null, [W("small", null, A(n.value.exactYears ? "Годы активности" : "Период в подборке"), 1), W("strong", null, A(n.value.period), 1)]),
				W("section", null, [i[4] ||= W("small", null, "Направлений в Академии", -1), W("strong", null, A(n.value.genres.length), 1)]),
				W("section", null, [i[5] ||= W("small", null, "Ориентиры для прослушивания", -1), W("strong", null, A(n.value.songs.length), 1)])
			]),
			W("div", fN, [i[6] ||= W("h3", null, "Биография и творческий путь", -1), W("p", null, A(n.value.biography), 1)]),
			W("div", pN, [
				i[7] ||= W("h3", null, "Особенности звучания", -1),
				W("p", null, A(n.value.sound), 1),
				n.value.editorial ? q("", !0) : (H(), U("p", mN, "Описание относится к музыкальному направлению и не является подтверждённым персональным анализом артиста."))
			]),
			W("div", hN, [
				W("h3", null, A(n.value.editorial ? "Музыкальные влияния и стилистика" : "Истоки музыкального направления"), 1),
				n.value.roots.length ? (H(), U("div", gN, [(H(!0), U(V, null, B(n.value.roots, (e) => (H(), U("span", { key: e }, A(e), 1))), 128))])) : (H(), U("p", _N, "Персональные музыкальные влияния ещё не документированы в этой карточке.")),
				!n.value.editorial && n.value.roots.length ? (H(), U("p", vN, "Это контекст жанра, а не утверждение о личных влияниях музыканта.")) : q("", !0)
			]),
			W("div", yN, [i[8] ||= W("h3", null, "Произведения для знакомства", -1), n.value.songs.length ? (H(), U("ul", bN, [(H(!0), U(V, null, B(n.value.songs.slice(0, 10), (e) => (H(), U("li", { key: e }, "♫ " + A(e), 1))), 128))])) : (H(), U("p", xN, "Список произведений пока не заполнен."))]),
			W("div", SN, [i[9] ||= W("h3", null, "Жанры и связанные подборки", -1), n.value.genres.length ? (H(), U("div", CN, [(H(!0), U(V, null, B(n.value.genres.slice(0, 15), (t) => (H(), U("button", {
				key: t.id,
				type: "button",
				"data-sb-ap-action": "genre",
				"data-genre": t.id,
				onClick: Z((n) => e.api.openGenre(t.id), ["stop"])
			}, A(t.name) + " →", 9, wN))), 128))])) : (H(), U("p", TN, "Жанровые ссылки пока не добавлены."))]),
			W("div", EN, [W("button", {
				type: "button",
				"data-sb-ap-action": "favorite",
				"data-name": n.value.name,
				"aria-pressed": n.value.favorite,
				class: "sb-ap-fav-main",
				onClick: i[1] ||= Z((t) => e.api.toggleFavorite(n.value.name), ["stop"])
			}, A(n.value.favorite ? "★ В избранном" : "☆ Сохранить в избранное"), 9, DN), W("button", {
				type: "button",
				"data-sb-ap-action": "copy",
				"data-name": n.value.name,
				class: "sb-ap-copy",
				onClick: i[2] ||= Z((t) => e.api.copy(n.value.name), ["stop"])
			}, "Скопировать справку", 8, ON)]),
			i[10] ||= W("p", { class: "sb-ap-fine" }, "Профиль не связан с отдельной функцией «ДНК артиста». Это справочный материал Академии, не личный творческий проект пользователя.", -1)
		], 64)) : q("", !0);
	}
};
// src/vue/legacy/observeLegacyIsland.js
function AN({ root: e, selectTarget: t, readSnapshot: n, mount: r, subscribe: i, readRevision: a, createObserver: o }) {
	if (!e || typeof t != "function" || typeof n != "function" || typeof r != "function" || tN({
		root: e,
		selectTarget: t,
		readSnapshot: n,
		mount: r
	})) return () => {};
	let s = !1, c = null;
	function l() {
		let e = c;
		c = null, e && e.unmount();
	}
	function u() {
		if (s) return;
		let i = nN(t(e)), o = typeof a == "function" ? a(i) : void 0;
		if (c?.target === i && i?.isConnected && c.revision === o || (l(), !i?.isConnected)) return;
		let u = n(i);
		if (!u) return;
		let d = r(i, u);
		typeof d == "function" && (c = {
			target: i,
			unmount: d,
			revision: o
		});
	}
	let d = o?.(u);
	d?.observe(e, { childList: !0 });
	let f = typeof i == "function" ? i(u) : null;
	return typeof window < "u" && window.addEventListener("sunoboom:shell-rendered", u), u(), () => {
		s || (s = !0, typeof window < "u" && window.removeEventListener("sunoboom:shell-rendered", u), d?.disconnect(), typeof f == "function" && f(), l());
	};
}
// src/vue/academy/legacyArtistProfilesBridge.js
function jN({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_ARTIST_PROFILES;
	return t?.profileSnapshot ? AN({
		root: document.body,
		selectTarget: (e) => e.querySelector("#sb-ap-dialog-body"),
		readSnapshot: () => t.profileSnapshot(),
		subscribe: (e) => t.subscribe(e),
		mount: (n) => e(n, kN, { api: t })
	}) : () => {};
}
// src/vue/version-history/version-model.js
function MN(e) {
	return /^\d{4}-\d{2}-\d{2}$/.test(String(e || "")) ? e.slice(8, 10) + "." + e.slice(5, 7) + "." + e.slice(0, 4) : "";
}
var NN = (e) => String(e ?? "").trim().normalize("NFKC").toLocaleLowerCase("ru"), PN = (e, t) => NN(e).includes(t);
function FN(e) {
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
function IN(e, { tab: t = "major", size: n = "all", search: r = "" } = {}) {
	let i = Array.isArray(e) ? e : [], a = FN(i), o = NN(r);
	if (o) {
		let e = a.filter((e) => o === "v" + e.major || o === e.major || PN("мажорная версия " + e.major, o)), t = i.filter((e) => PN("v" + e[0] + " " + e[0] + " " + e[1] + " " + MN(e[2]), o));
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
// src/vue/version-history/VersionHistory.vue
var LN = {
	class: "sb-vh-vue-layout",
	"data-sb-vue-version-history": ""
}, RN = { class: "sb-vh-header" }, zN = [
	"aria-selected",
	"tabindex",
	"onClick"
], BN = [
	"aria-selected",
	"tabindex",
	"onClick"
], VN = {
	id: "sb-vh-legend",
	class: "sb-vh-legend"
}, HN = { class: "sb-vh-controls" }, UN = {
	class: "sb-vh-search-label",
	for: "sb-vue-vh-search"
}, WN = {
	id: "sb-vh-subcount",
	class: "sb-vh-count",
	role: "status"
}, GN = {
	key: 0,
	class: "sb-vh-search-all"
}, KN = {
	key: 0,
	class: "sb-vh-search-group"
}, qN = { class: "sb-vh-release-no" }, JN = { class: "sb-vh-release-text" }, YN = { class: "sb-vh-version-range" }, XN = { class: "sb-vh-release-list" }, ZN = { class: "sb-vh-release-no" }, QN = { class: "sb-vh-release-text" }, $N = { class: "sb-vh-search-meta" }, eP = ["datetime"], tP = { class: "sb-vh-search-tag" }, nP = {
	key: 1,
	class: "sb-vh-empty"
}, rP = {
	key: 2,
	class: "sb-vh-release-list sb-vh-major-list"
}, iP = { class: "sb-vh-release-no" }, aP = { class: "sb-vh-release-text" }, oP = { class: "sb-vh-version-range" }, sP = {
	key: 3,
	class: "sb-vh-release-list"
}, cP = { class: "sb-vh-release-no" }, lP = { class: "sb-vh-release-text" }, uP = { class: "sb-vh-search-meta" }, dP = ["datetime"], fP = {
	key: 0,
	class: "sb-vh-search-tag"
}, pP = {
	key: 4,
	class: "sb-vh-empty"
}, mP = /*#__PURE__*/ md({
	__name: "VersionHistory",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ P("major"), r = /* @__PURE__ */ P("all"), i = /* @__PURE__ */ P(""), a = J(() => IN(t.model.releases, {
			tab: n.value,
			size: r.value,
			search: i.value
		})), o = /* @__PURE__ */ P(null), s = /* @__PURE__ */ P(null), c = J(() => !!i.value.trim());
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
			e.preventDefault(), r(t[a]), Tn(() => {
				let e = t.length === 2 ? "#sb-vh-tabs [aria-selected=\"true\"]" : "#sb-vh-minor-tabs [aria-selected=\"true\"]";
				document.querySelector(e)?.focus();
			});
		}
		return z(() => Tn(() => s.value?.focus({ preventScroll: !0 }))), (t, m) => (H(), U("div", LN, [
			W("header", RN, [W("div", null, [
				m[6] ||= W("div", { class: "sb-vh-kicker" }, "SUNOBOOM · РАЗВИТИЕ ПРОЕКТА", -1),
				m[7] ||= W("h2", { id: "sb-vh-title" }, "История версий", -1),
				W("p", null, [
					m[4] ||= K("Текущая версия ", -1),
					W("strong", null, "v" + A(e.model.currentVersion), 1),
					m[5] ||= K(". Версии сгруппированы по номеру.", -1)
				])
			]), W("button", {
				ref_key: "closeButton",
				ref: s,
				type: "button",
				class: "sb-vh-close",
				"aria-label": "Закрыть историю версий",
				onClick: m[0] ||= (t) => e.model.close()
			}, "×", 512)]),
			W("div", {
				id: "sb-vh-tabs",
				class: "sb-vh-tabs",
				role: "tablist",
				"aria-label": "Части номера версии",
				onKeydown: m[1] ||= (e) => p(e, ["major", "minor"], n.value, u)
			}, [(H(), U(V, null, B([{
				id: "major",
				label: "Мажорная версия"
			}, {
				id: "minor",
				label: "Минорные версии"
			}], (e) => W("button", {
				key: e.id,
				type: "button",
				class: k(["sb-vh-tab", { active: n.value === e.id }]),
				role: "tab",
				"aria-selected": n.value === e.id,
				tabindex: n.value === e.id ? 0 : -1,
				"aria-controls": "sb-vh-content",
				onClick: (t) => u(e.id)
			}, A(e.label), 11, zN)), 64))], 32),
			n.value === "minor" && !c.value ? (H(), U("div", {
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
			}, [(H(), U(V, null, B([
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
			], (e) => W("button", {
				key: e.id,
				type: "button",
				class: k(["sb-vh-size-tab", { active: r.value === e.id }]),
				role: "tab",
				"aria-selected": r.value === e.id,
				tabindex: r.value === e.id ? 0 : -1,
				"aria-controls": "sb-vh-content",
				onClick: (t) => d(e.id)
			}, A(e.label), 11, BN)), 64))], 32)) : q("", !0),
			W("p", VN, A(a.value.legend), 1),
			W("div", HN, [W("label", UN, [m[8] ||= W("span", { class: "sb-vh-visually-hidden" }, "Поиск по истории версий", -1), L(W("input", {
				id: "sb-vue-vh-search",
				"onUpdate:modelValue": m[3] ||= (e) => i.value = e,
				type: "search",
				autocomplete: "off",
				placeholder: "Поиск по всем версиям и вкладкам…",
				onInput: l
			}, null, 544), [[Y, i.value]])]), W("span", WN, A(a.value.count), 1)]),
			W("div", {
				id: "sb-vh-content",
				ref_key: "content",
				ref: o,
				class: "sb-vh-content",
				role: "tabpanel",
				"aria-labelledby": "sb-vh-tabs"
			}, [a.value.mode === "search" && (a.value.majors.length || a.value.large.length || a.value.small.length) ? (H(), U("div", GN, [a.value.majors.length ? (H(), U("section", KN, [W("h3", null, [m[9] ||= K("Мажорные версии ", -1), W("span", null, A(a.value.majors.length), 1)]), (H(!0), U(V, null, B(a.value.majors, (e) => (H(), U("article", {
				key: "major-" + e.major,
				class: "sb-vh-release sb-vh-major-release"
			}, [W("span", qN, "v" + A(e.major), 1), W("div", JN, [W("p", null, "Мажорная версия " + A(e.major), 1), W("p", YN, " От v" + A(e.items[e.items.length - 1][0]) + " до v" + A(e.items[0][0]), 1)])]))), 128))])) : q("", !0), (H(!0), U(V, null, B([{
				title: "Крупные обновления",
				entries: a.value.large,
				badge: "Крупное"
			}, {
				title: "Мелкие обновления",
				entries: a.value.small,
				badge: "Мелкое"
			}], (e) => L((H(), U("section", {
				key: e.title,
				class: "sb-vh-search-group"
			}, [W("h3", null, [K(A(e.title) + " ", 1), W("span", null, A(e.entries.length), 1)]), W("div", XN, [(H(!0), U(V, null, B(e.entries, (t) => (H(), U("article", {
				key: t[0],
				class: "sb-vh-release"
			}, [W("span", ZN, "v" + A(t[0]), 1), W("div", QN, [W("p", null, A(t[1]), 1), W("div", $N, [W("time", { datetime: t[2] }, A(I(MN)(t[2])), 9, eP), W("span", tP, A(e.badge), 1)])])]))), 128))])])), [[co, e.entries.length]])), 128))])) : a.value.mode === "search" ? (H(), U("p", nP, " По запросу совпадений нет ни в одном разделе истории. ")) : a.value.mode === "major" ? (H(), U("div", rP, [(H(!0), U(V, null, B(a.value.majors, (e) => (H(), U("article", {
				key: e.major,
				class: "sb-vh-release sb-vh-major-release"
			}, [W("span", iP, "v" + A(e.major), 1), W("div", aP, [
				W("h3", null, "Мажорная версия " + A(e.major), 1),
				W("p", null, "Ветка v" + A(e.major) + ".x — " + A(e.items.length) + " сохранённых минорных обновлений.", 1),
				W("p", oP, " От v" + A(e.items[e.items.length - 1][0]) + " (" + A(I(MN)(e.items[e.items.length - 1][2])) + ") до v" + A(e.items[0][0]) + " (" + A(I(MN)(e.items[0][2])) + ") ", 1),
				W("button", {
					type: "button",
					class: "sb-vh-view-minors",
					onClick: f
				}, "Просмотреть минорные версии")
			])]))), 128))])) : a.value.mode === "minor" && a.value.entries.length ? (H(), U("div", sP, [(H(!0), U(V, null, B(a.value.entries, (e) => (H(), U("article", {
				key: e[0],
				class: "sb-vh-release"
			}, [W("span", cP, "v" + A(e[0]), 1), W("div", lP, [W("p", null, A(e[1]), 1), W("div", uP, [W("time", { datetime: e[2] }, A(I(MN)(e[2])), 9, dP), r.value === "all" ? (H(), U("span", fP, A(e[3] === "large" ? "Крупное" : "Мелкое"), 1)) : q("", !0)])])]))), 128))])) : (H(), U("p", pP, "По запросу минорные версии не найдены."))], 512)
		]));
	}
}, [["__scopeId", "data-v-ce1fc81b"]]);
// src/vue/version-history/legacyVersionHistoryBridge.js
function hP({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_VERSION_HISTORY;
	return !t?.snapshot || !document.body ? () => {} : AN({
		root: document.body,
		subscribe: (e) => (window.addEventListener("sunoboom:version-dialog", e), () => window.removeEventListener("sunoboom:version-dialog", e)),
		selectTarget: (e) => e.querySelector("#sb-vue-version-history"),
		readSnapshot: () => {
			let e = t.snapshot();
			return e && Array.isArray(e.releases) ? e : null;
		},
		mount: (n, r) => e(n, mP, { model: {
			...r,
			close: t.close
		} })
	});
}
// src/vue/state/legacyAppearanceBridge.js
function gP({ sharedUi: e }) {
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
// src/vue/academy/genre-tree-model.js
var _P = (e) => String(e ?? "").trim().normalize("NFKC").toLocaleLowerCase("ru");
function vP(e, t, n, r = "all", i = 30) {
	let a = _P(n);
	if (!a) return {
		count: 0,
		items: []
	};
	let o = new Map(e.map((e) => [e.id, e])), s = /* @__PURE__ */ new Set(), c = [];
	function l(e, t) {
		let n = o.get(t);
		n && !s.has(t) && _P(n.name).includes(a) && (s.add(t), c.push({
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
function yP(e, t) {
	return t === "zoom-reset" ? 1 : t !== "zoom-in" && t !== "zoom-out" ? e : Math.min(1.5, Math.max(.75, Math.round((e + (t === "zoom-in" ? .15 : -.15)) * 100) / 100));
}
function bP(e, t) {
	let n = Array.isArray(e?.edges) ? e.edges : [];
	return e?.id === "all" ? n.filter(([e, n]) => e === t || n === t) : n;
}
// src/vue/academy/GenreTree.vue
var xP = {
	class: "sb-gt-vue-content",
	"data-sb-vue-genre-tree": ""
}, SP = { class: "sb-gt-head" }, CP = { class: "sb-gt-count" }, wP = { class: "sb-gt-controls" }, TP = ["value"], EP = ["value"], DP = ["value"], OP = ["value"], kP = { class: "sb-gt-extra" }, AP = {
	class: "sb-gt-search-label",
	for: "sb-gt-search"
}, jP = ["value"], MP = { class: "sb-gt-zoom" }, NP = { id: "sb-gt-zoom-label" }, PP = {
	id: "sb-gt-search-results",
	class: "sb-gt-search-results",
	"aria-live": "polite"
}, FP = { class: "sb-gt-search-title" }, IP = { class: "sb-gt-search-links" }, LP = [
	"data-id",
	"data-tree",
	"onClick"
], RP = {
	key: 1,
	class: "sb-gt-search-empty"
}, zP = { class: "sb-gt-intro" }, BP = { class: "sb-gt-legend" }, VP = ["aria-label"], HP = ["data-sb-gt-family"], UP = {
	key: 1,
	class: "sb-gt-stage"
}, WP = { class: "sb-gt-node-list" }, GP = [
	"data-id",
	"aria-pressed",
	"onClick"
], KP = { class: "sb-gt-node-name" }, qP = { class: "sb-gt-node-era" }, JP = {
	key: 0,
	id: "sb-gt-description",
	class: "sb-gt-detail",
	"aria-live": "polite"
}, YP = { class: "sb-gt-detail-top" }, XP = { class: "sb-gt-sub" }, ZP = ["data-id"], QP = { class: "sb-gt-description" }, $P = { class: "sb-gt-related" }, eF = ["data-id", "onClick"], tF = {
	key: 1,
	class: "sb-gt-note"
}, nF = { class: "sb-gt-related" }, rF = ["data-id", "onClick"], iF = /*#__PURE__*/ md({
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
		let t = e, n = $(), r = /* @__PURE__ */ P(t.snapshot.tree), i = /* @__PURE__ */ P(t.snapshot.selected), a = /* @__PURE__ */ P(t.snapshot.query || ""), o = /* @__PURE__ */ P(t.snapshot.zoom || 1), s = /* @__PURE__ */ P("");
		R([
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
		let c = /* @__PURE__ */ P(null), l = /* @__PURE__ */ P(null), u = t.snapshot.genres, d = new Map(u.map((e) => [e.id, e])), f = t.snapshot.trees, p = t.snapshot.relations, m = t.snapshot.stageLabels, h = J(() => f.find((e) => e.id === r.value) || f[0]), g = J(() => h.value.id === "all"), _ = J(() => h.value.columns.map((e, t) => ({
			index: t,
			group: g.value ? h.value.groups[t] : null,
			entries: e.map((e) => d.get(e)).filter(Boolean)
		}))), v = J(() => _.value.reduce((e, t) => e + t.entries.length, 0)), y = J(() => d.get(i.value) || d.get(h.value.focus)), b = J(() => bP(h.value, i.value).filter(([e, t]) => e === i.value || t === i.value).map(([e, t, n, r]) => {
			let a = d.get(e === i.value ? t : e);
			return a ? {
				id: a.id,
				name: a.name,
				type: n,
				note: r,
				direction: e === i.value ? "→" : "←"
			} : null;
		}).filter(Boolean)), x = J(() => g.value && y.value ? u.filter((e) => e.id !== i.value && e.family === y.value.family).slice(0, 8) : []), S = J(() => vP(u, f, a.value, r.value)), C = (e) => !!a.value.trim() && !e.name.toLocaleLowerCase("ru").includes(a.value.trim().toLocaleLowerCase("ru"));
		function w() {
			Tn(() => requestAnimationFrame(() => t.treeApi.drawLines()));
		}
		function ee(e) {
			let n = t.treeApi.changeTree(e);
			n && (r.value = n.tree, i.value = n.selected, a.value = "", s.value = "", w());
		}
		function te(e) {
			d.has(e) && t.treeApi.select(e) && (i.value = e, w());
		}
		function ne(e) {
			let n = yP(o.value, e);
			t.treeApi.setZoom(n), o.value = n, w();
		}
		function T(e) {
			a.value = e.target.value, t.treeApi.setQuery(a.value);
		}
		function re(e) {
			let n = t.treeApi.searchJump(e.tree, e.id);
			n && (r.value = n.tree, i.value = n.selected, a.value = "", s.value = "", Tn(() => {
				[...l.value?.querySelectorAll(".sb-gt-node") || []].find((t) => t.dataset.id === e.id)?.scrollIntoView({
					behavior: "smooth",
					block: "nearest",
					inline: "center"
				}), w();
			}));
		}
		function E(e) {
			s.value = e.target.value, [...l.value?.querySelectorAll("[data-sb-gt-family]") || []].find((e) => e.dataset.sbGtFamily === s.value)?.scrollIntoView({
				behavior: "smooth",
				block: "nearest",
				inline: "start"
			});
		}
		return z(w), (t, n) => (H(), U("div", xP, [
			W("div", SP, [n[5] ||= W("div", null, [
				W("span", { class: "sb-gt-kicker" }, "SUNOBOOM · ИСТОРИЯ МУЗЫКИ"),
				W("h2", null, "От истоков к новым жанрам"),
				W("p", null, "Нажми на жанр в схеме, чтобы увидеть его историю и связи. Затем открой его существующую карточку в Академии.")
			], -1), W("div", CP, A(v.value) + " жанров" + A(g.value ? " · " + h.value.groups.length + " направлений" : " в схеме"), 1)]),
			W("div", wP, [
				n[8] ||= W("label", { for: "sb-gt-tree-choice" }, "Карта жанров", -1),
				W("select", {
					id: "sb-gt-tree-choice",
					value: r.value,
					"aria-label": "Выберите музыкальное древо",
					onChange: n[0] ||= (e) => ee(e.target.value)
				}, [(H(!0), U(V, null, B(I(f), (e) => (H(), U("option", {
					key: e.id,
					value: e.id
				}, A(e.icon) + " " + A(e.label), 9, EP))), 128))], 40, TP),
				g.value ? (H(), U(V, { key: 0 }, [n[7] ||= W("label", { for: "sb-gt-group-jump" }, "Перейти к направлению", -1), W("select", {
					id: "sb-gt-group-jump",
					value: s.value,
					"aria-label": "Перейти к музыкальному направлению",
					onChange: E
				}, [n[6] ||= W("option", { value: "" }, "Выберите раздел…", -1), (H(!0), U(V, null, B(h.value.groups, (e, t) => (H(), U("option", {
					key: e.name,
					value: String(t)
				}, A(e.icon) + " " + A(e.name) + " (" + A(e.ids.length) + ") ", 9, OP))), 128))], 40, DP)], 64)) : q("", !0)
			]),
			W("div", kP, [W("label", AP, [n[9] ||= K(" Поиск жанра по древу ", -1), W("input", {
				id: "sb-gt-search",
				value: a.value,
				type: "search",
				placeholder: "Например: ска-панк",
				autocomplete: "off",
				onInput: T
			}, null, 40, jP)]), W("div", MP, [
				n[10] ||= W("span", null, "Масштаб карты", -1),
				W("button", {
					type: "button",
					"data-sb-gt-action": "zoom-out",
					"aria-label": "Уменьшить масштаб",
					onClick: n[1] ||= (e) => ne("zoom-out")
				}, "−"),
				W("output", NP, A(Math.round(o.value * 100)) + "%", 1),
				W("button", {
					type: "button",
					"data-sb-gt-action": "zoom-in",
					"aria-label": "Увеличить масштаб",
					onClick: n[2] ||= (e) => ne("zoom-in")
				}, "+"),
				W("button", {
					type: "button",
					"data-sb-gt-action": "zoom-reset",
					onClick: n[3] ||= (e) => ne("zoom-reset")
				}, "Сброс")
			])]),
			W("div", PP, [a.value.trim() ? (H(), U(V, { key: 0 }, [S.value.count ? (H(), U(V, { key: 0 }, [W("div", FP, " Найдено в коллекции: " + A(S.value.count) + A(S.value.count > 30 ? " · показаны первые 30" : ""), 1), W("div", IP, [(H(!0), U(V, null, B(S.value.items, (e) => (H(), U("button", {
				key: e.id,
				type: "button",
				"data-sb-gt-action": "search-jump",
				"data-id": e.id,
				"data-tree": e.tree,
				onClick: (t) => re(e)
			}, [K(A(e.name) + " ", 1), W("small", null, "(" + A(e.family) + ")", 1)], 8, LP))), 128))])], 64)) : (H(), U("p", RP, "Жанр не найден в коллекции Академии."))], 64)) : q("", !0)]),
			W("p", zP, A(h.value.intro), 1),
			W("div", BP, [(H(!0), U(V, null, B(I(p), (e, t) => (H(), U("span", { key: t }, [W("i", { style: O({ "--rel-color": e.color }) }, null, 4), K(A(e.label), 1)]))), 128))]),
			W("div", {
				ref_key: "viewport",
				ref: c,
				class: "sb-gt-viewport",
				tabindex: "0",
				"aria-label": g.value ? "Все жанры Академии по музыкальным направлениям, горизонтальная прокрутка" : "Схема связей: горизонтально прокручиваемая карта жанров"
			}, [W("div", {
				ref_key: "canvas",
				ref: l,
				class: k(["sb-gt-canvas", { "sb-gt-canvas-all": g.value }]),
				style: O({
					zoom: o.value,
					"--sb-gt-family-count": g.value ? h.value.columns.length : 4
				})
			}, [n[11] ||= W("svg", {
				class: "sb-gt-lines",
				"aria-hidden": "true"
			}, null, -1), W("div", { class: k(["sb-gt-columns", { "sb-gt-columns-all": g.value }]) }, [(H(!0), U(V, null, B(_.value, (e) => (H(), U("div", {
				key: r.value + ":" + e.index,
				class: k(["sb-gt-column", { "sb-gt-column-all": g.value }]),
				"data-sb-gt-family": g.value ? String(e.index) : null
			}, [g.value ? (H(), U("div", {
				key: 0,
				class: "sb-gt-stage sb-gt-family-heading",
				style: O({ "--sb-gt-family-accent": e.group.accent })
			}, [W("strong", null, A(e.group.icon) + " " + A(e.group.name), 1), W("span", null, A(e.entries.length), 1)], 4)) : (H(), U("div", UP, [W("span", null, "0" + A(e.index + 1), 1), K(A(I(m)[e.index]), 1)])), W("div", WP, [(H(!0), U(V, null, B(e.entries, (e) => (H(), U("button", {
				key: e.id,
				type: "button",
				class: k(["sb-gt-node", {
					"is-selected": i.value === e.id,
					"sb-gt-search-dim": C(e)
				}]),
				"data-sb-gt-action": "select",
				"data-id": e.id,
				"aria-pressed": i.value === e.id,
				onClick: (t) => te(e.id)
			}, [W("span", KP, A(e.name), 1), W("span", qP, A(e.era || e.family || ""), 1)], 10, GP))), 128))])], 10, HP))), 128))], 2)], 6)], 8, VP),
			y.value ? (H(), U("div", JP, [
				W("div", YP, [W("div", null, [
					n[12] ||= W("div", { class: "sb-gt-kicker" }, "ВЫБРАННОЕ НАПРАВЛЕНИЕ", -1),
					W("h3", null, A(y.value.name), 1),
					W("p", XP, A(y.value.era || "") + " · " + A(y.value.family || ""), 1)
				]), W("button", {
					type: "button",
					class: "btn primary sb-gt-open",
					"data-sb-gt-action": "open",
					"data-id": y.value.id,
					onClick: n[4] ||= (t) => e.treeApi.openGenre(y.value.id)
				}, "Открыть карточку ↗", 8, ZP)]),
				W("p", QP, A(y.value.description || y.value.tagline || "Описание в карточке жанра."), 1),
				b.value.length ? (H(), U(V, { key: 0 }, [n[13] ||= W("h4", null, "Исторические связи", -1), W("div", $P, [(H(!0), U(V, null, B(b.value, (e) => (H(), U("button", {
					key: e.id + ":" + e.type,
					type: "button",
					class: "sb-gt-related-btn",
					"data-sb-gt-action": "select",
					"data-id": e.id,
					onClick: (t) => te(e.id)
				}, [W("span", { class: k(["sb-gt-related-mark", "sb-gt-" + e.type]) }, A(e.direction), 3), W("span", null, [W("strong", null, A(e.name), 1), W("small", null, A(e.note), 1)])], 8, eF))), 128))])], 64)) : g.value ? q("", !0) : (H(), U("p", tF, "У этого узла пока нет нарисованных связей в выбранной схеме.")),
				g.value && x.value.length ? (H(), U(V, { key: 2 }, [W("h4", null, "Другие жанры раздела «" + A(y.value.family) + "»", 1), W("div", nF, [(H(!0), U(V, null, B(x.value, (e) => (H(), U("button", {
					key: e.id,
					type: "button",
					class: "sb-gt-related-btn",
					"data-sb-gt-action": "select",
					"data-id": e.id,
					onClick: (t) => te(e.id)
				}, [n[14] ||= W("span", { class: "sb-gt-related-mark" }, "♫", -1), W("span", null, [W("strong", null, A(e.name), 1)])], 8, rF))), 128))])], 64)) : q("", !0)
			])) : q("", !0),
			n[15] ||= W("p", { class: "sb-gt-note" }, "Схема показывает основные исторические влияния и стилистические пересечения. Жанры могут развиваться параллельно; стрелки не означают единственное происхождение.", -1)
		]));
	}
}, [["__scopeId", "data-v-6e70f61e"]]);
// src/vue/academy/legacyGenreTreeBridge.js
function aF({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_GENRE_TREE, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : AN({
		root: n,
		selectTarget: (e) => {
			let t = e.querySelector("#sb-genre-tree");
			return t?.open ? t.querySelector("#sb-gt-inner") : null;
		},
		readSnapshot: () => {
			let e = t.snapshot();
			return e?.trees?.length && e?.genres?.length ? e : null;
		},
		mount: (n, r) => e(n, iF, {
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
// src/vue/poetry/PoetryAmbiguities.vue
var oF = {
	key: 0,
	class: "sb-stress-ambig-clear"
}, sF = { class: "sb-stress-ambig-heading" }, cF = { class: "sb-stress-ambig-variants" }, lF = ["data-word", "data-variant"], uF = {
	key: 0,
	class: "sb-poetry-small"
}, dF = {
	__name: "PoetryAmbiguities",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ F(t.api.ambiguities()), r = J(() => n.value || {
			count: 0,
			words: [],
			total: 0
		}), i = $();
		function a() {
			let e = t.api.ambiguities();
			e && (n.value = e, i.publishPoetryAmbiguitySummary(e));
		}
		return z(() => {
			i.publishPoetryAmbiguitySummary(n.value), window.addEventListener("sunoboom:poetry-stress-updated", a);
		}), Mr(() => {
			window.removeEventListener("sunoboom:poetry-stress-updated", a), i.clearPoetryAmbiguitySummary();
		}), (e, t) => r.value.count ? (H(), U(V, { key: 1 }, [
			W("div", sF, " 🔴 Требуют проверки: " + A(r.value.count) + " вхождений (" + A(r.value.total) + " разных слов). Нажми нужный вариант для каждого вхождения. ", 1),
			(H(!0), U(V, null, B(r.value.words, (e) => (H(), U("div", {
				key: e.key,
				class: "sb-stress-ambig-choice"
			}, [W("strong", null, A(e.key) + A(e.count > 1 ? " ×" + e.count : ""), 1), W("div", cF, [(H(!0), U(V, null, B(e.variants, (t) => (H(), U("button", {
				key: t,
				type: "button",
				"data-action": "sb-poetry-stress-choice",
				"data-word": e.key,
				"data-variant": t,
				title: "Указать ударение для следующего вхождения"
			}, A(t), 9, lF))), 128))])]))), 128)),
			r.value.total > 30 ? (H(), U("p", uF, " Показаны первые 30 разных слов; другие можно исправить вручную. ")) : q("", !0)
		], 64)) : (H(), U("p", oF, " ✓ Все найденные неоднозначные слова проверены. "));
	}
};
// src/vue/poetry/legacyPoetryBridge.js
function fF({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_POETRY, n = document.getElementById("app");
	return !t?.analysis || !t?.ambiguities || !n ? () => {} : rN({
		root: n,
		islands: [[
			"analysis",
			"#sb-poetry-result",
			JT
		], [
			"ambiguities",
			"#sb-poetry-ambiguous-choices",
			dF
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
// src/vue/entry.js
var pF = Gl(), mF = $(pF), hF;
function gF() {
	return window.SUNOBOOM_SHELL?.active ? Promise.resolve(window.SUNOBOOM_SHELL) : hF ??= _F();
}
async function _F() {
	gP({ sharedUi: mF });
	let e = await eN({
		pinia: pF,
		sharedUi: mF
	});
	if (!e) return null;
	let t = e.mountFeature;
	for (let e of [
		jN,
		hP,
		aF,
		fF,
		aN
	]) e({
		mountVueFeature: t,
		sharedUi: mF
	});
	return e;
}
export { gF as startApplication };
