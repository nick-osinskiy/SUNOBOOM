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
}, re = /-\w/g, w = /* @__PURE__ */ ne((e) => e.replace(re, (e) => e.slice(1).toUpperCase())), ie = /\B([A-Z])/g, T = /* @__PURE__ */ ne((e) => e.replace(ie, "-$1").toLowerCase()), ae = /* @__PURE__ */ ne((e) => e.charAt(0).toUpperCase() + e.slice(1)), oe = /* @__PURE__ */ ne((e) => e ? `on${ae(e)}` : ""), E = (e, t) => !Object.is(e, t), se = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, D = (e, t, n, r = !1) => {
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
function he(e) {
	if (!e) return null;
	let { class: t, style: n } = e;
	return t && !g(t) && (e.class = k(t)), n && (e.style = O(n)), e;
}
var ge = /* @__PURE__ */ e("itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly");
function _e(e) {
	return !!e || e === "";
}
function ve(e, t, n) {
	if (e.length !== t.length) return !1;
	let r = !0;
	for (let i = 0; r && i < e.length; i++) r = Se(e[i], t[i], n);
	return r;
}
function ye(e, t, n) {
	if (e.size !== t.size) return !1;
	let r = Array.from(t), i = new Uint8Array(r.length);
	for (let t of e) {
		let e = -1;
		for (let a = 0; a < r.length; a++) if (!i[a] && Se(t, r[a], n)) {
			e = a;
			break;
		}
		if (e < 0) return !1;
		i[e] = 1;
	}
	return !0;
}
function be(e, t, n) {
	let r = f(e), i = f(t);
	if (r || i || (r = p(e), i = p(t), r || i)) return r && i ? ye(e, t, n) : !1;
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let r in e) {
		let i = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
		if (i && !a || !i && a || !Se(e[r], t[r], n)) return !1;
	}
	return String(e) === String(t);
}
function xe(e, t, n, r) {
	n ||= [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()];
	let [i, a] = n;
	if (i.has(e) || a.has(t)) return i.get(e) === t && a.get(t) === e;
	i.set(e, t), a.set(t, e);
	let o = r(e, t, n);
	return i.delete(e), a.delete(t), o;
}
function Se(e, t, n) {
	if (e === t) return !0;
	let r = m(e), i = m(t);
	return r || i ? r && i ? e.getTime() === t.getTime() : !1 : (r = _(e), i = _(t), r || i ? e === t : (r = d(e), i = d(t), r || i ? r && i ? xe(e, t, n, ve) : !1 : (r = v(e), i = v(t), r || i ? !r || !i ? !1 : xe(e, t, n, be) : String(e) === String(t))));
}
var Ce = (e) => !!(e && e.__v_isRef === !0), A = (e) => g(e) ? e : e == null ? "" : d(e) || v(e) && (e.toString === b || !h(e.toString)) ? Ce(e) ? A(e.value) : JSON.stringify(e, we, 2) : String(e), we = (e, t) => Ce(t) ? we(e, t.value) : f(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Te(t, r) + " =>"] = n, e), {}) } : p(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Te(e)) } : _(t) ? Te(t) : v(t) && !d(t) && !S(t) ? String(t) : t, Te = (e, t = "") => _(e) ? `Symbol(${e.description ?? t})` : e, j, Ee = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && j && (j.active ? (this.parent = j, this.index = (j.scopes || (j.scopes = [])).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
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
			let t = j;
			try {
				return j = this, e();
			} finally {
				j = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = j, j = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (j === this) j = this.prevScope;
			else {
				let e = j;
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
function De(e) {
	return new Ee(e);
}
function Oe() {
	return j;
}
var M, ke = /* @__PURE__ */ new WeakSet(), Ae = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, j && (j.active ? j.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, ke.has(this) && (ke.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Pe(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, Ke(this), Le(this);
		let e = M, t = N;
		M = this, N = !0;
		try {
			return this.fn();
		} finally {
			Re(this), M = e, N = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) Ve(e);
			this.deps = this.depsTail = void 0, Ke(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? ke.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		ze(this) && this.run();
	}
	get dirty() {
		return ze(this);
	}
}, je = 0, Me, Ne;
function Pe(e, t = !1) {
	e.flags |= 8, t ? (e.next = Ne, Ne = e) : (e.next = Me, Me = e);
}
function Fe() {
	je++;
}
function Ie() {
	if (--je > 0) return;
	if (Ne) {
		let e = Ne;
		for (Ne = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Me;) {
		let t = Me;
		for (Me = void 0; t;) {
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
function Le(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Re(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), Ve(r), He(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function ze(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Be(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function Be(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === qe) || (e.globalVersion = qe, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ze(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = M, r = N;
	M = e, N = !0;
	try {
		Le(e);
		let n = e.fn(e._value);
		(t.version === 0 || E(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		M = n, N = r, Re(e), e.flags &= -3;
	}
}
function Ve(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) Ve(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function He(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var N = !0, Ue = [];
function We() {
	Ue.push(N), N = !1;
}
function Ge() {
	let e = Ue.pop();
	N = e === void 0 || e;
}
function Ke(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = M;
		M = void 0;
		try {
			t();
		} finally {
			M = e;
		}
	}
}
var qe = 0, Je = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, Ye = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!M || !N || M === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== M) t = this.activeLink = new Je(M, this), M.deps ? (t.prevDep = M.depsTail, M.depsTail.nextDep = t, M.depsTail = t) : M.deps = M.depsTail = t, Xe(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = M.depsTail, t.nextDep = void 0, M.depsTail.nextDep = t, M.depsTail = t, M.deps === t && (M.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, qe++, this.notify(e);
	}
	notify(e) {
		Fe();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Ie();
		}
	}
};
function Xe(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) Xe(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var Ze = /* @__PURE__ */ new WeakMap(), Qe = /* @__PURE__ */ Symbol(""), $e = /* @__PURE__ */ Symbol(""), et = /* @__PURE__ */ Symbol("");
function P(e, t, n) {
	if (N && M) {
		let t = Ze.get(e);
		t || Ze.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new Ye()), r.map = t, r.key = n), r.track();
	}
}
function tt(e, t, n, r, i, a) {
	let o = Ze.get(e);
	if (!o) {
		qe++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Fe(), t === "clear") o.forEach(s);
	else {
		let i = d(e), a = i && C(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === et || !_(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(et)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(Qe)), f(e) && s(o.get($e)));
				break;
			case "delete":
				i || (s(o.get(Qe)), f(e) && s(o.get($e)));
				break;
			case "set": f(e) && s(o.get(Qe));
		}
	}
	Ie();
}
function nt(e) {
	let t = /* @__PURE__ */ I(e);
	return t === e || (P(t, "iterate", et), /* @__PURE__ */ F(e)) ? t : /* @__PURE__ */ Vt(e) ? /* @__PURE__ */ Bt(e) ? t.map((e) => Wt(L(e))) : t.map(Wt) : t.map(L);
}
function rt(e) {
	return P(e = /* @__PURE__ */ I(e), "iterate", et), e;
}
function it(e, t) {
	return /* @__PURE__ */ Vt(e) ? Wt(/* @__PURE__ */ Bt(e) ? L(t) : t) : L(t);
}
var at = {
	__proto__: null,
	[Symbol.iterator]() {
		return ot(this, Symbol.iterator, (e) => it(this, e));
	},
	concat(...e) {
		return nt(this).concat(...e.map((e) => d(e) ? nt(e) : e));
	},
	entries() {
		return ot(this, "entries", (e) => (e[1] = it(this, e[1]), e));
	},
	every(e, t) {
		return lt(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return lt(this, "filter", e, t, (e) => e.map((e) => it(this, e)), arguments);
	},
	find(e, t) {
		return lt(this, "find", e, t, (e) => it(this, e), arguments);
	},
	findIndex(e, t) {
		return lt(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return lt(this, "findLast", e, t, (e) => it(this, e), arguments);
	},
	findLastIndex(e, t) {
		return lt(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return lt(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return dt(this, "includes", e);
	},
	indexOf(...e) {
		return dt(this, "indexOf", e);
	},
	join(e) {
		return nt(this).join(e);
	},
	lastIndexOf(...e) {
		return dt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return lt(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return ft(this, "pop");
	},
	push(...e) {
		return ft(this, "push", e);
	},
	reduce(e, ...t) {
		return ut(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return ut(this, "reduceRight", e, t);
	},
	shift() {
		return ft(this, "shift");
	},
	some(e, t) {
		return lt(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return ft(this, "splice", e);
	},
	toReversed() {
		return nt(this).toReversed();
	},
	toSorted(e) {
		return nt(this).toSorted(e);
	},
	toSpliced(...e) {
		return nt(this).toSpliced(...e);
	},
	unshift(...e) {
		return ft(this, "unshift", e);
	},
	values() {
		return ot(this, "values", (e) => it(this, e));
	}
};
function ot(e, t, n) {
	let r = rt(e), i = r[t], a = i.call(r);
	if (r !== e && !/* @__PURE__ */ F(e)) {
		if (a[Symbol.toStringTag] === "Array Iterator") {
			let e = Object.create(Object.getPrototypeOf(a));
			return e.next = () => st(a.next(), n), i !== ct[t] && Object.defineProperties(e, {
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
		a._next = a.next, a.next = () => st(a._next(), n);
	}
	return a;
}
function st(e, t) {
	return e.done || (e.value = t(e.value)), e;
}
var ct = Array.prototype;
function lt(e, t, n, r, i, a) {
	let o = rt(e), s = o !== e && !/* @__PURE__ */ F(e), c = o[t];
	if (c !== ct[t]) {
		let t = c.apply(e, a);
		return s ? L(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, it(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function ut(e, t, n, r) {
	let i = rt(e), a = i !== e && !/* @__PURE__ */ F(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = it(e, t)), n.call(this, t, it(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? it(e, c) : c;
}
function dt(e, t, n) {
	let r = /* @__PURE__ */ I(e);
	P(r, "iterate", et);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Ht(n[0]) ? (n[0] = /* @__PURE__ */ I(n[0]), r[t](...n)) : i;
}
function ft(e, t, n = []) {
	We(), Fe();
	let r = (/* @__PURE__ */ I(e))[t].apply(e, n);
	return Ie(), Ge(), r;
}
var pt = /* @__PURE__ */ e("__proto__,__v_isRef,__isVue"), mt = /* @__PURE__ */ new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_));
function ht(e) {
	_(e) || (e = String(e));
	let t = /* @__PURE__ */ I(this);
	return P(t, "has", e), t.hasOwnProperty(e);
}
var gt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Pt : Nt : i ? Mt : jt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = d(e);
		if (!r) {
			let e;
			if (a && (e = at[t])) return e;
			if (t === "hasOwnProperty") return ht;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ R(e) ? e : n);
		if ((_(t) ? mt.has(t) : pt(t)) || (r || P(e, "get", t), i)) return o;
		if (/* @__PURE__ */ R(o)) {
			let e = a && C(t) ? o : o.value;
			return r && v(e) ? /* @__PURE__ */ Rt(e) : e;
		}
		return v(o) ? r ? /* @__PURE__ */ Rt(o) : /* @__PURE__ */ It(o) : o;
	}
}, _t = class extends gt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = d(e) && C(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Vt(i);
			if (!/* @__PURE__ */ F(n) && !/* @__PURE__ */ Vt(n) && (i = /* @__PURE__ */ I(i), n = /* @__PURE__ */ I(n)), !a && /* @__PURE__ */ R(i) && !/* @__PURE__ */ R(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : u(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ R(e) ? e : r);
		return e === /* @__PURE__ */ I(r) && s && (o ? E(n, i) && tt(e, "set", t, n, i) : tt(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = u(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && tt(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return _(t) && mt.has(t) || P(e, "has", t), n;
	}
	ownKeys(e) {
		return P(e, "iterate", d(e) ? "length" : Qe), Reflect.ownKeys(e);
	}
}, vt = class extends gt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, yt = /* @__PURE__ */ new _t(), bt = /* @__PURE__ */ new vt(), xt = /* @__PURE__ */ new _t(!0), St = (e) => e, Ct = (e) => Reflect.getPrototypeOf(e);
function wt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ I(i), o = f(a), c = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = i[e](...r), d = n ? St : t ? Wt : L;
		return !t && P(a, "iterate", l ? $e : Qe), s(Object.create(u), { next() {
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
function Tt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function Et(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ I(r), a = /* @__PURE__ */ I(n);
			e || (E(n, a) && P(i, "get", n), P(i, "get", a));
			let { has: o } = Ct(i), s = t ? St : e ? Wt : L;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && P(/* @__PURE__ */ I(t), "iterate", Qe), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ I(n), i = /* @__PURE__ */ I(t);
			return e || (E(t, i) && P(r, "has", t), P(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ I(a), s = t ? St : e ? Wt : L;
			return !e && P(o, "iterate", Qe), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return s(n, e ? {
		add: Tt("add"),
		set: Tt("set"),
		delete: Tt("delete"),
		clear: Tt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ I(this), r = Ct(n), i = /* @__PURE__ */ I(e), a = !t && !/* @__PURE__ */ F(e) && !/* @__PURE__ */ Vt(e) ? i : e;
			return r.has.call(n, a) || E(e, a) && r.has.call(n, e) || E(i, a) && r.has.call(n, i) || (n.add(a), tt(n, "add", a, a)), this;
		},
		set(e, n) {
			t || /* @__PURE__ */ F(n) || /* @__PURE__ */ Vt(n) || (n = /* @__PURE__ */ I(n));
			let r = /* @__PURE__ */ I(this), { has: i, get: a } = Ct(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ I(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? E(n, s) && tt(r, "set", e, n, s) : tt(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ I(this), { has: n, get: r } = Ct(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ I(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && tt(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ I(this), t = e.size !== 0, n = e.clear();
			return t && tt(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = wt(r, e, t);
	}), n;
}
function Dt(e, t) {
	let n = Et(e, t);
	return (r, i, a) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_isShallow" ? t : i === "__v_raw" ? r : Reflect.get(u(n, i) && i in r ? n : r, i, a);
}
var Ot = { get: /* @__PURE__ */ Dt(!1, !1) }, kt = { get: /* @__PURE__ */ Dt(!1, !0) }, At = { get: /* @__PURE__ */ Dt(!0, !1) }, jt = /* @__PURE__ */ new WeakMap(), Mt = /* @__PURE__ */ new WeakMap(), Nt = /* @__PURE__ */ new WeakMap(), Pt = /* @__PURE__ */ new WeakMap();
function Ft(e) {
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
function It(e) {
	return /* @__PURE__ */ Vt(e) ? e : zt(e, !1, yt, Ot, jt);
}
// @__NO_SIDE_EFFECTS__
function Lt(e) {
	return zt(e, !1, xt, kt, Mt);
}
// @__NO_SIDE_EFFECTS__
function Rt(e) {
	return zt(e, !0, bt, At, Nt);
}
function zt(e, t, n, r, i) {
	if (!v(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Ft(ee(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function Bt(e) {
	return /* @__PURE__ */ Vt(e) ? /* @__PURE__ */ Bt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Vt(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function F(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ht(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function I(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ I(t) : e;
}
function Ut(e) {
	return !u(e, "__v_skip") && Object.isExtensible(e) && D(e, "__v_skip", !0), e;
}
var L = (e) => v(e) ? /* @__PURE__ */ It(e) : e, Wt = (e) => v(e) ? /* @__PURE__ */ Rt(e) : e;
// @__NO_SIDE_EFFECTS__
function R(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Gt(e) {
	return qt(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Kt(e) {
	return qt(e, !0);
}
function qt(e, t) {
	return /* @__PURE__ */ R(e) ? e : new Jt(e, t);
}
var Jt = class {
	constructor(e, t) {
		this.dep = new Ye(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ I(e), this._value = t ? e : L(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ F(e) || /* @__PURE__ */ Vt(e);
		e = n ? e : /* @__PURE__ */ I(e), E(e, t) && (this._rawValue = e, this._value = n ? e : L(e), this.dep.trigger());
	}
};
function Yt(e) {
	return /* @__PURE__ */ R(e) ? e.value : e;
}
var Xt = {
	get: (e, t, n) => t === "__v_raw" ? e : Yt(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ R(i) && !/* @__PURE__ */ R(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function Zt(e) {
	return /* @__PURE__ */ Bt(e) ? e : new Proxy(e, Xt);
}
var Qt = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new Ye(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = qe - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && M !== this) return Pe(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return Be(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function $t(e, t, n = !1) {
	let r, i;
	return h(e) ? r = e : (r = e.get, i = e.set), new Qt(r, i, n);
}
var en = {}, tn = /* @__PURE__ */ new WeakMap(), nn = void 0;
function rn(e, t = !1, n = nn) {
	if (n) {
		let t = tn.get(n);
		t || tn.set(n, t = []), t.push(e);
	}
}
function an(e, n, i = t) {
	let { immediate: a, deep: o, once: s, scheduler: l, augmentJob: u, call: f } = i, p = (e) => o ? e : /* @__PURE__ */ F(e) || o === !1 || o === 0 ? on(e, 1) : on(e), m, g, _, v, y = !1, b = !1;
	if (/* @__PURE__ */ R(e) ? (g = () => e.value, y = /* @__PURE__ */ F(e)) : /* @__PURE__ */ Bt(e) ? (g = () => p(e), y = !0) : d(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ Bt(e) || /* @__PURE__ */ F(e)), g = () => e.map((e) => {
		if (/* @__PURE__ */ R(e)) return e.value;
		if (/* @__PURE__ */ Bt(e)) return p(e);
		if (h(e)) return f ? f(e, 2) : e();
	})) : g = h(e) ? n ? f ? () => f(e, 2) : e : () => {
		if (_) {
			We();
			try {
				_();
			} finally {
				Ge();
			}
		}
		let t = nn;
		nn = m;
		try {
			return f ? f(e, 3, [v]) : e(v);
		} finally {
			nn = t;
		}
	} : r, n && o) {
		let e = g, t = o === !0 ? Infinity : o;
		g = () => on(e(), t);
	}
	let x = Oe(), ee = () => {
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
	let S = b ? Array(e.length).fill(en) : en, C = (e) => {
		if (m.flags & 1 && (m.dirty || e)) {
			if (n) {
				let t = m.run();
				if (e || o || y || (b ? t.some((e, t) => E(e, S[t])) : E(t, S))) {
					let e = nn;
					We();
					try {
						_ && _(), nn = m;
						let e = [
							t,
							S === en ? void 0 : b && S[0] === en ? [] : S,
							v
						];
						S = t, f ? f(n, 3, e) : n(...e);
					} finally {
						nn = e, Ge();
					}
				}
			} else m.run();
		}
	};
	return u && u(C), m = new Ae(g), m.scheduler = l ? () => l(C, !1) : C, v = (e) => rn(e, !1, m), _ = m.onStop = () => {
		let e = tn.get(m);
		if (e) {
			if (f) f(e, 4);
			else for (let t of e) t();
			tn.delete(m);
		}
	}, n ? a ? C(!0) : S = m.run() : l ? l(C.bind(null, !0), !0) : m.run(), ee.pause = m.pause.bind(m), ee.resume = m.resume.bind(m), ee.stop = ee, ee;
}
function on(e, t = Infinity, n) {
	if (t <= 0 || !v(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ R(e)) on(e.value, t, n);
	else if (d(e)) for (let r = 0; r < e.length; r++) on(e[r], t, n);
	else if (p(e) || f(e)) e.forEach((e) => {
		on(e, t, n);
	});
	else if (S(e)) {
		for (let r in e) on(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && on(e[r], t, n);
	}
	return e;
}
// node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function sn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		ln(e, t, n);
	}
}
function cn(e, t, n, r) {
	if (h(e)) {
		let i = sn(e, t, n, r);
		return i && y(i) && i.catch((e) => {
			ln(e, t, n, void 0, !0);
		}), i;
	}
	if (d(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(cn(e[a], t, n, r));
		return i;
	}
}
function ln(e, n, r, i = !0, a = !1) {
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
			We(), sn(s, null, 10, [
				e,
				i,
				o
			]), Ge();
			return;
		}
	}
	un(e, r, o, i, c);
}
function un(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var z = [], dn = -1, fn = [], pn = null, mn = 0, hn = /* @__PURE__ */ Promise.resolve(), gn = null;
function _n(e) {
	let t = gn || hn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function vn(e) {
	let t = dn + 1, n = z.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = z[r], a = En(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function yn(e) {
	if (!(e.flags & 1)) {
		let t = En(e), n = z[z.length - 1];
		!n || !(e.flags & 2) && t >= En(n) ? z.push(e) : z.splice(vn(t), 0, e), e.flags |= 1, bn();
	}
}
function bn() {
	gn ||= hn.then(Dn);
}
function xn(e) {
	if (!d(e)) pn && e.id === -1 ? pn.splice(mn + 1, 0, e) : e.flags & 1 || (fn.push(e), e.flags |= 1);
	else for (let t = 0; t < e.length; t++) fn.push(e[t]);
	bn();
}
function Sn(e, t, n, r = dn + 1) {
	for (; r < z.length; r++) {
		let n = z[r];
		if (n && n.flags & 2) {
			if (e && n.id !== e.uid || t !== void 0 && !(n.id >= t)) continue;
			z.splice(r, 1), r = e ? r - 1 : dn, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
		}
	}
}
function Cn(e, t, n = 0) {
	if (fn.length) {
		let e = fn, r = 0;
		if (t) {
			e = [];
			for (let i = 0; i < fn.length; i++) {
				let a = fn[i];
				(a.i === void 0 ? t.has(a) : !a.i || a.i.uid < n) ? fn[r++] = a : e.push(a);
			}
		}
		let i = [...new Set(e)].sort((e, t) => En(e) - En(t));
		if (fn.length = r, pn) {
			for (let e = 0; e < i.length; e++) pn.push(i[e]);
			return;
		}
		for (pn = i, mn = 0; mn < pn.length; mn++) {
			let e = pn[mn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		pn = null, mn = 0;
	}
}
var wn = !1;
function Tn(e, t) {
	if (wn) {
		e();
		return;
	}
	let n = t === void 0 ? void 0 : new Set(fn);
	e(), wn = !0;
	try {
		Sn(void 0, t), Cn(void 0, n, t);
	} finally {
		wn = !1;
	}
}
var En = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function Dn(e) {
	try {
		for (dn = 0; dn < z.length; dn++) {
			let e = z[dn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), sn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; dn < z.length; dn++) {
			let e = z[dn];
			e && (e.flags &= -2);
		}
		dn = -1, z.length = 0, Cn(e), gn = null, (z.length || fn.length) && Dn(e);
	}
}
var B = null, On = null;
function kn(e) {
	let t = B;
	return B = e, On = e && e.type.__scopeId || null, t;
}
function An(e, t = B, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && Vi(-1);
		let i = kn(t), a = Ri.length, o;
		try {
			o = e(...n);
		} finally {
			for (let e = Ri.length; e > a; e--) zi();
			kn(i), r._d && Vi(1);
		}
		return o;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function jn(e, n) {
	if (B === null) return e;
	let r = xa(B), i = e.dirs ||= [];
	for (let e = 0; e < n.length; e++) {
		let [a, o, s, c = t] = n[e];
		a && (h(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && on(o), i.push({
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
function Mn(e, t, n, r) {
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
		u && (We(), cn(u, n, 8, [
			e.el,
			l,
			i,
			t
		]), Ge());
	}
}
function Nn(e, t) {
	if (Q) {
		let n = Q.provides, r = Q.parent && Q.parent.provides;
		r === n && (n = Q.provides = Object.create(r)), n[e] = t;
	}
}
function Pn(e, t, n = !1) {
	let r = sa();
	if (r || Wr) {
		let i = Wr ? Wr._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && h(t) ? t.call(r && r.proxy) : t;
	}
}
var Fn = /* @__PURE__ */ Symbol.for("v-scx"), In = () => Pn(Fn);
function Ln(e, t, n) {
	return Rn(e, t, n);
}
function Rn(e, n, i = t) {
	let { immediate: a, deep: o, flush: c, once: l } = i, u = s({}, i), d = n && a || !n && c !== "post", f;
	if (pa) {
		if (c === "sync") {
			let e = In();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = r, e.resume = r, e.pause = r, e;
		}
	}
	let p = Q;
	u.call = (e, t, n) => cn(e, p, t, n);
	let m = !1;
	c === "post" ? u.scheduler = (e) => {
		e.i = p, U(e, p && p.suspense);
	} : c !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : yn(e);
	}), u.augmentJob = (e) => {
		n && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = an(e, n, u);
	return pa && (f ? f.push(h) : d && h()), h;
}
function zn(e, t, n) {
	let r = this.proxy, i = g(e) ? e.includes(".") ? Bn(r, e) : () => r[e] : e.bind(r, r), a;
	h(t) ? a = t : (a = t.handler, n = t);
	let o = ua(this), s = Rn(i, a.bind(r), n);
	return o(), s;
}
function Bn(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Vn = /* @__PURE__ */ Symbol("_vte"), Hn = (e) => e.__isTeleport, Un = /* @__PURE__ */ Symbol("_leaveCb");
function Wn(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== Ii) {
			t = n;
			break;
		}
	}
	return t;
}
function Gn(e) {
	if (!er(e)) return Hn(e.type) && e.children ? Wn(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && h(n.default)) return n.default();
	}
}
function Kn(e, t) {
	if (e.shapeFlag & 6 && e.component) {
		e.transition = t;
		let n = e.component.subTree;
		Kn(Hn(n.type) && Gn(n) || n, t);
	} else if (e.shapeFlag & 128) {
		let n = e.suspense;
		if (n) {
			let e = n.isHydrating ? n.pendingBranch : n.activeBranch;
			e && Kn(e, t.clone(e));
		} else e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback);
	} else if (e.transition = t, e.type === W && d(e.children)) {
		let n = Zr(e.children, !1);
		n && Kn(n, t);
	}
}
function qn(e) {
	if (e.component) return qn(e.component.subTree);
	if (e.type === W) {
		let t = d(e.children) && Zr(e.children, !1);
		return t ? qn(t) : void 0;
	}
	if (e.type !== Ii) return e;
}
function Jn(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function Yn(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var Xn = /* @__PURE__ */ new WeakMap();
function Zn(e, n, r, a, o = !1) {
	if (d(e)) {
		e.forEach((e, t) => Zn(e, n && (d(n) ? n[t] : n), r, a, o));
		return;
	}
	if ($n(a) && !o) {
		a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && Zn(e, n, r, a.component.subTree);
		return;
	}
	let s = a.shapeFlag & 4 ? xa(a.component) : a.el, l = o ? null : s, { i: f, r: p } = e, m = n && n.r, _ = f.refs === t ? f.refs = {} : f.refs, v = f.setupState, y = /* @__PURE__ */ I(v), b = v === t ? i : (e) => !Yn(_, e) && u(y, e), x = (e, t) => !(t && Yn(_, t));
	if (m != null && m !== p) {
		if (Qn(n), g(m)) _[m] = null, b(m) && (v[m] = null);
		else if (/* @__PURE__ */ R(m)) {
			let e = n;
			x(m, e.k) && (m.value = null), e.k && (_[e.k] = null);
		}
	}
	if (h(p)) sn(p, f, 12, [l, _]);
	else {
		let t = g(p), n = /* @__PURE__ */ R(p);
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
					i(), Xn.delete(e);
				};
				t.id = -1, Xn.set(e, t), U(t, r);
			} else Qn(e), i();
		}
	}
}
function Qn(e) {
	let t = Xn.get(e);
	t && (t.flags |= 8, Xn.delete(e));
}
ue().requestIdleCallback, ue().cancelIdleCallback;
var $n = (e) => !!e.type.__asyncLoader, er = (e) => e.type.__isKeepAlive;
function tr(e, t) {
	rr(e, "a", t);
}
function nr(e, t) {
	rr(e, "da", t);
}
function rr(e, t, n = Q) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (ar(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) er(e.parent.vnode) && ir(r, t, n, e), e = e.parent;
	}
}
function ir(e, t, n, r) {
	let i = ar(t, e, r, !0), a = ar("um", () => c(r[t], i), n);
	a.flags = 16;
}
function ar(e, t, n = Q, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			We();
			let i = ua(n), a = cn(t, n, e, r);
			return i(), Ge(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var or = (e) => (t, n = Q) => {
	pa && e !== "sp" || ar(e, (...e) => t(...e), n);
}, sr = or("bm"), cr = or("m"), lr = or("bu"), ur = or("u"), dr = or("bum"), fr = or("um"), pr = or("sp"), mr = or("rtg"), hr = or("rtc");
function gr(e, t = Q) {
	ar("ec", e, t);
}
var _r = "components", vr = /* @__PURE__ */ Symbol.for("v-ndc");
function yr(e) {
	return g(e) ? br(_r, e, !1) || e : e || vr;
}
function br(e, t, n = !0, r = !1) {
	let i = B || Q;
	if (i) {
		let n = i.type;
		if (e === _r) {
			let e = Sa(n, !1);
			if (e && (e === t || e === w(t) || e === ae(w(t)))) return n;
		}
		let a = xr(i[e] || n[e], t) || xr(i.appContext[e], t);
		return !a && r ? n : a;
	}
}
function xr(e, t) {
	return e && (e[t] || e[w(t)] || e[ae(w(t))]);
}
function V(e, t, n, r) {
	let i, a = n && n[r], o = d(e);
	if (o || g(e)) {
		let n = o && /* @__PURE__ */ Bt(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ F(e), s = /* @__PURE__ */ Vt(e), e = rt(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? Wt(L(e[n])) : L(e[n]) : e[n], n, void 0, a && a[n]);
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
var Sr = (e) => e ? fa(e) ? xa(e) : Sr(e.parent) : null, Cr = /* @__PURE__ */ s(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => Sr(e.parent),
	$root: (e) => Sr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Mr(e),
	$forceUpdate: (e) => e.f ||= () => {
		yn(e.update);
	},
	$nextTick: (e) => e.n ||= _n.bind(e.proxy),
	$watch: (e) => zn.bind(e)
}), wr = (e, n) => e !== t && !e.__isScriptSetup && u(e, n), Tr = {
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
			else if (wr(i, n)) return s[n] = 1, i[n];
			else if (a !== t && u(a, n)) return s[n] = 2, a[n];
			else if (u(o, n)) return s[n] = 3, o[n];
			else if (r !== t && u(r, n)) return s[n] = 4, r[n];
			else Dr && (s[n] = 0);
		}
		let d = Cr[n], f, p;
		if (d) return n === "$attrs" && P(e.attrs, "get", ""), d(e);
		if ((f = c.__cssModules) && (f = f[n])) return f;
		if (r !== t && u(r, n)) return s[n] = 4, r[n];
		if (p = l.config.globalProperties, u(p, n)) return p[n];
	},
	set({ _: e }, n, r) {
		let { data: i, setupState: a, ctx: o } = e;
		return wr(a, n) ? (a[n] = r, !0) : i !== t && u(i, n) ? (i[n] = r, !0) : u(e.props, n) || n[0] === "$" && n.slice(1) in e ? !1 : (o[n] = r, !0);
	},
	has({ _: { data: e, setupState: n, accessCache: r, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(r[c] || e !== t && c[0] !== "$" && u(e, c) || wr(n, c) || u(o, c) || u(i, c) || u(Cr, c) || u(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? u(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function Er(e) {
	return d(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var Dr = !0;
function Or(e) {
	let t = Mr(e), n = e.proxy, i = e.ctx;
	Dr = !1, t.beforeCreate && Ar(t.beforeCreate, e, "bc");
	let { data: a, computed: o, methods: s, watch: c, provide: l, inject: u, created: f, beforeMount: p, mounted: m, beforeUpdate: g, updated: _, activated: y, deactivated: b, beforeDestroy: x, beforeUnmount: ee, destroyed: S, unmounted: C, render: te, renderTracked: ne, renderTriggered: re, errorCaptured: w, serverPrefetch: ie, expose: T, inheritAttrs: ae, components: oe, directives: E, filters: se } = t;
	if (u && kr(u, i, null), s) for (let e in s) {
		let t = s[e];
		h(t) && (i[e] = t.bind(n));
	}
	if (a) {
		let t = a.call(n, n);
		v(t) && (e.data = /* @__PURE__ */ It(t));
	}
	if (Dr = !0, o) for (let e in o) {
		let t = o[e], a = $({
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
	if (c) for (let e in c) jr(c[e], i, n, e);
	if (l) {
		let e = h(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Nn(t, e[t]);
		});
	}
	f && Ar(f, e, "c");
	function D(e, t) {
		d(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (D(sr, p), D(cr, m), D(lr, g), D(ur, _), D(tr, y), D(nr, b), D(gr, w), D(hr, ne), D(mr, re), D(dr, ee), D(fr, C), D(pr, ie), d(T)) {
		if (T.length) {
			let t = e.exposed ||= {};
			T.forEach((e) => {
				Object.defineProperty(t, e, {
					get: () => n[e],
					set: (t) => n[e] = t,
					enumerable: !0
				});
			});
		} else e.exposed ||= {};
	}
	te && e.render === r && (e.render = te), ae != null && (e.inheritAttrs = ae), oe && (e.components = oe), E && (e.directives = E), ie && Jn(e);
}
function kr(e, t, n = r) {
	d(e) && (e = Lr(e));
	for (let n in e) {
		let r = e[n], i;
		i = v(r) ? "default" in r ? Pn(r.from || n, r.default, !0) : Pn(r.from || n) : Pn(r), /* @__PURE__ */ R(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Ar(e, t, n) {
	cn(d(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function jr(e, t, n, r) {
	let i = r.includes(".") ? Bn(n, r) : () => n[r];
	if (g(e)) {
		let n = t[e];
		h(n) && Ln(i, n);
	} else if (h(e)) Ln(i, e.bind(n));
	else if (v(e)) {
		if (d(e)) e.forEach((e) => jr(e, t, n, r));
		else {
			let r = h(e.handler) ? e.handler.bind(n) : t[e.handler];
			h(r) && Ln(i, r, e);
		}
	}
}
function Mr(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => Nr(c, e, o, !0)), Nr(c, t, o)), v(t) && a.set(t, c), c;
}
function Nr(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && Nr(e, a, n, !0), i && i.forEach((t) => Nr(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = Pr[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var Pr = {
	data: Fr,
	props: zr,
	emits: zr,
	methods: Rr,
	computed: Rr,
	beforeCreate: H,
	created: H,
	beforeMount: H,
	mounted: H,
	beforeUpdate: H,
	updated: H,
	beforeDestroy: H,
	beforeUnmount: H,
	destroyed: H,
	unmounted: H,
	activated: H,
	deactivated: H,
	errorCaptured: H,
	serverPrefetch: H,
	components: Rr,
	directives: Rr,
	watch: Br,
	provide: Fr,
	inject: Ir
};
function Fr(e, t) {
	return t ? e ? function() {
		return s(h(e) ? e.call(this, this) : e, h(t) ? t.call(this, this) : t);
	} : t : e;
}
function Ir(e, t) {
	return Rr(Lr(e), Lr(t));
}
function Lr(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function H(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Rr(e, t) {
	return e ? s(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function zr(e, t) {
	return e ? d(e) && d(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : s(/* @__PURE__ */ Object.create(null), Er(e), Er(t ?? {})) : t;
}
function Br(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = s(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = H(e[r], t[r]);
	return n;
}
function Vr() {
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
var Hr = 0;
function Ur(e, t) {
	return function(n, r = null) {
		h(n) || (n = s({}, n)), r != null && !v(r) && (r = null);
		let i = Vr(), a = /* @__PURE__ */ new WeakSet(), o = [], c = !1, l = i.app = {
			_uid: Hr++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: wa,
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
					let u = l._ceVNode || Y(n, r);
					return u.appContext = i, s === !0 ? s = "svg" : s === !1 && (s = void 0), o && t ? t(u, a) : e(u, a, s), c = !0, l._container = a, a.__vue_app__ = l, xa(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				c && (cn(o, l._instance, 16), e(null, l._container), delete l._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, l;
			},
			runWithContext(e) {
				let t = Wr;
				Wr = l;
				try {
					return e();
				} finally {
					Wr = t;
				}
			}
		};
		return l;
	};
}
var Wr = null, Gr = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${w(t)}Modifiers`] || e[`${T(t)}Modifiers`];
function Kr(e, n, ...r) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || t, a = r, o = n.startsWith("update:"), s = o && Gr(i, n.slice(7));
	s && (s.trim && (a = r.map((e) => g(e) ? e.trim() : e)), s.number && (a = a.map(ce)));
	let c, l = i[c = oe(n)] || i[c = oe(w(n))];
	!l && o && (l = i[c = oe(T(n))]), l && cn(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, cn(u, e, 6, a);
	}
}
var qr = /* @__PURE__ */ new WeakMap();
function Jr(e, t, n = !1) {
	let r = n ? qr : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, c = !1;
	if (!h(e)) {
		let r = (e) => {
			let n = Jr(e, t, !0);
			n && (c = !0, s(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !c ? (v(e) && r.set(e, null), null) : (d(a) ? a.forEach((e) => o[e] = null) : s(o, a), v(e) && r.set(e, o), o);
}
function Yr(e, t) {
	return !e || !a(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), u(e, t[0].toLowerCase() + t.slice(1)) || u(e, T(t)) || u(e, t));
}
function Xr(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: s, attrs: c, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = kn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = Qi(u.call(t, e, d, f, m, p, h)), y = c;
		} else {
			let e = t;
			v = Qi(e.length > 1 ? e(f, {
				attrs: c,
				slots: s,
				emit: l
			}) : e(f, null)), y = t.props ? c : Qr(c);
		}
	} catch (t) {
		Ri.length = 0, ln(t, e, 1), v = Y(Ii);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(o) && (y = $r(y, a)), b = Xi(b, y, !1, !0));
	}
	return n.dirs && (b = Xi(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && Kn(Hn(b.type) && Gn(b) || b, n.transition), v = b, kn(_), v;
}
function Zr(e, t = !0) {
	let n;
	for (let t = 0; t < e.length; t++) {
		let r = e[t];
		if (Wi(r)) {
			if (r.type !== Ii || r.children === "v-if") {
				if (n) return;
				n = r;
			}
		} else return;
	}
	return n;
}
var Qr = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || a(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, $r = (e, t) => {
	let n = {};
	for (let r in e) o(r) && r.slice(9) in t || (n[r] = e[r]);
	return n;
};
function ei(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? ti(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (ni(o, r, n) && !Yr(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? !o || ti(r, o, l) : !!o;
	return !1;
}
function ti(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (!u(e, a) || ni(t, e, a) && !Yr(n, a)) return !0;
	}
	return !1;
}
function ni(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && v(r) && v(i) ? !Se(r, i) : r !== i;
}
function ri({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var ii = {}, ai = () => Object.create(ii), oi = (e) => Object.getPrototypeOf(e) === ii;
function si(e, t, n, r = !1) {
	let i = {}, a = ai();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), li(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	e.props = n ? r ? i : /* @__PURE__ */ Lt(i) : e.type.props ? i : a, e.attrs = a;
}
function ci(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ I(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (Yr(e.emitsOptions, o)) continue;
				let d = t[o];
				if (c) {
					if (u(a, o)) d !== a[o] && (a[o] = d, l = !0);
					else {
						let t = w(o);
						i[t] = ui(c, s, t, d, e, !1);
					}
				} else d !== a[o] && (a[o] = d, l = !0);
			}
		}
	} else {
		li(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) t && (u(t, a) || (r = T(a)) !== a && u(t, r)) || (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = ui(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) t && u(t, e) || (delete a[e], l = !0);
	}
	l && tt(e.attrs, "set", "");
}
function li(e, n, r, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (n) for (let t in n) {
		if (te(t)) continue;
		let l = n[t], d;
		a && u(a, d = w(t)) ? !o || !o.includes(d) ? r[d] = l : (c ||= {})[d] = l : Yr(e.emitsOptions, t) || t in i && l === i[t] || (i[t] = l, s = !0);
	}
	if (o) {
		let n = /* @__PURE__ */ I(r), i = c || t;
		for (let t = 0; t < o.length; t++) {
			let s = o[t];
			r[s] = ui(a, n, s, i[s], e, !u(i, s));
		}
	}
	return s;
}
function ui(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = u(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && h(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = ua(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === T(n)) && (r = !0));
	}
	return r;
}
var di = /* @__PURE__ */ new WeakMap();
function fi(e, r, i = !1) {
	let a = i ? di : r.propsCache, o = a.get(e);
	if (o) return o;
	let c = e.props, l = {}, f = [], p = !1;
	if (!h(e)) {
		let t = (e) => {
			p = !0;
			let [t, n] = fi(e, r, !0);
			s(l, t), n && f.push(...n);
		};
		!i && r.mixins.length && r.mixins.forEach(t), e.extends && t(e.extends), e.mixins && e.mixins.forEach(t);
	}
	if (!c && !p) return v(e) && a.set(e, n), n;
	if (d(c)) for (let e = 0; e < c.length; e++) {
		let n = w(c[e]);
		pi(n) && (l[n] = t);
	}
	else if (c) for (let e in c) {
		let t = w(e);
		if (pi(t)) {
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
function pi(e) {
	return e[0] !== "$" && !te(e);
}
var mi = (e) => e === "_" || e === "_ctx" || e === "$stable", hi = (e) => d(e) ? e.map(Qi) : [Qi(e)], gi = (e, t, n) => {
	if (t._n) return t;
	let r = An((...e) => hi(t(...e)), n);
	return r._c = !1, r;
}, _i = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (mi(n)) continue;
		let i = e[n];
		if (h(i)) t[n] = gi(n, i, r);
		else if (i != null) {
			let e = hi(i);
			t[n] = () => e;
		}
	}
}, vi = (e, t) => {
	let n = hi(t);
	e.slots.default = () => n;
}, yi = (e, t, n) => {
	for (let r in t) (n || !mi(r)) && (e[r] = t[r]);
}, bi = (e, t, n) => {
	let r = e.slots = ai();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (yi(r, t, n), n && D(r, "_", e, !0)) : _i(t, r);
	} else t && vi(e, t);
}, xi = (e, n, r) => {
	let { vnode: i, slots: a } = e, o = !0, s = t;
	if (i.shapeFlag & 32) {
		let e = n._;
		e ? r && e === 1 ? o = !1 : yi(a, n, r) : (o = !n.$stable, _i(n, a)), s = n;
	} else n && (vi(e, n), s = { default: 1 });
	if (o) for (let e in a) !mi(e) && s[e] == null && delete a[e];
}, U = Pi;
function Si(e) {
	return Ci(e);
}
function Ci(e, i) {
	let a = ue();
	a.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = r, insertStaticContent: _ } = e, v = (e, t, r, i = null, a = null, o = null, s = void 0, c = null, l = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !Gi(e, t) && (i = ye(e), k(e, a, o, !0), e = null), t.patchFlag === -2 && (l = !1, t.dynamicChildren = null), t.dynamicChildren && e && e.dynamicChildren && e.dynamicChildren.hasOnce && (t.dynamicChildren === n && (t.dynamicChildren = []), t.dynamicChildren.hasOnce = !0);
		let { type: u, ref: d, shapeFlag: f } = t;
		switch (u) {
			case Fi:
				y(e, t, r, i);
				break;
			case Ii:
				b(e, t, r, i);
				break;
			case Li:
				e ?? x(t, r, i, s);
				break;
			case W:
				oe(e, t, r, i, a, o, s, c, l);
				break;
			default: f & 1 ? C(e, t, r, i, a, o, s, c, l) : f & 6 ? E(e, t, r, i, a, o, s, c, l) : (f & 64 || f & 128) && u.process(e, t, r, i, a, o, s, c, l, xe);
		}
		d != null && a ? Zn(d, e && e.ref, o, t || e, !t) : d == null && e && e.ref != null && Zn(e.ref, null, o, e, !0);
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
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && w(e.children, d, null, r, i, wi(e, a), s, u), _ && Mn(e, null, r, "created"), re(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !te(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && na(f, r, e);
		}
		_ && Mn(e, null, r, "beforeMount");
		let v = Ei(i, g);
		v ? g.beforeEnter(d) : g && !g.persisted && (d[Ni] = !0), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && U(() => {
			try {
				f && na(f, r, e), v && g.enter(d), _ && Mn(e, null, r, "mounted");
			} finally {}
		}, i);
	}, re = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || Mi(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				re(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, w = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) {
			let c = e[l] = s ? $i(e[l]) : Qi(e[l]);
			v(null, c, t, n, r, i, a, o, s);
		}
	}, ie = (e, n, r, i, a, o, s) => {
		let l = n.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = n;
		u |= e.patchFlag & 16;
		let m = e.props || t, h = n.props || t, g;
		if (r && Ti(r, !1), (g = h.onVnodeBeforeUpdate) && na(g, r, n, e), f && Mn(n, e, r, "beforeUpdate"), r && Ti(r, !0), d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length) && (u = 0, s = !1, d = null), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? T(e.dynamicChildren, d, l, r, i, wi(n, a), o) : s || de(e, n, l, null, r, i, wi(n, a), o, !1), u > 0) {
			if (u & 16) ae(l, m, h, r, a);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, a), u & 4 && c(l, "style", m.style, h.style, a), u & 8) {
				let e = n.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let n = e[t], i = m[n], o = h[n];
					(o !== i || n === "value") && c(l, n, i, o, a, r);
				}
			}
			u & 1 && e.children !== n.children && p(l, n.children);
		} else !s && d == null && ae(l, m, h, r, a);
		((g = h.onVnodeUpdated) || f) && U(() => {
			g && na(g, r, n, e), f && Mn(n, e, r, "updated");
		}, i);
	}, T = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el || ji(c), d = u && (c.type === W || !Gi(c, l) || c.shapeFlag & 198) ? m(u) : n;
			v(c, l, d, null, r, i, a, o, !0);
		}
	}, ae = (e, n, r, i, a) => {
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
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), w(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (T(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && Di(e, t, !0)) : de(e, t, n, f, i, a, s, c, l);
	}, E = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : D(t, n, r, i, a, o, c) : ce(e, t, c);
	}, D = (e, t, n, r, i, a, o) => {
		let s = e.component = oa(e, r, i);
		if (er(e) && (s.ctx.renderer = xe), ma(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, le, o, a), !e.el) {
				let r = s.subTree = Y(Ii);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else le(s, e, t, n, i, a, o);
	}, ce = (e, t, n) => {
		let r = t.component = e.component;
		if (ei(e, t, n)) {
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
					let n = ki(e);
					if (n) {
						t && (t.el = c.el, O(e, t, o)), n.asyncDep.then(() => {
							let t = () => {
								e.job.flags & 8 || (i && i.pendingBranch ? U(t, i) : l());
							};
							t.flags = 48, U(t, i);
						});
						return;
					}
				}
				let u = t, d;
				Ti(e, !1), t ? (t.el = c.el, O(e, t, o)) : t = c, n && se(n), (d = t.props && t.props.onVnodeBeforeUpdate) && na(d, s, t, c), Ti(e, !0);
				let f = Xr(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el || ji(p)), ye(p), e, i, a), t.el = f.el, u === null && ri(e, f.el), r && U(r, i), (d = t.props && t.props.onVnodeUpdated) && U(() => na(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = $n(t);
				if (Ti(e, !1), l && se(l), !m && (o = c && c.onVnodeBeforeMount) && na(o, d, t), Ti(e, !0), s && Ce) {
					let t = () => {
						e.subTree = Xr(e), Ce(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = Xr(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && U(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					U(() => na(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && $n(d.vnode) && d.vnode.shapeFlag & 256) && e.a && U(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Ae(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => yn(u), Ti(e, !0), l();
	}, O = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, ci(e, t.props, r, n), xi(e, t.children, n), We(), Sn(e), Ge();
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
		m & 8 ? (u & 16 && ve(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? pe(l, d, n, r, i, a, o, s, c) : ve(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && w(d, n, r, i, a, o, s, c));
	}, fe = (e, t, r, i, a, o, s, c, l) => {
		e ||= n, t ||= n;
		let u = e.length, d = t.length, f = Math.min(u, d), p = 0;
		for (; p < f; p++) {
			let n = t[p] = l ? $i(t[p]) : Qi(t[p]);
			v(e[p], n, r, null, a, o, s, c, l);
		}
		u > d ? ve(e, a, o, !0, !1, f) : w(t, r, i, a, o, s, c, l, f);
	}, pe = (e, t, r, i, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let n = e[u], i = t[u] = l ? $i(t[u]) : Qi(t[u]);
			if (Gi(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let n = e[f], i = t[p] = l ? $i(t[p]) : Qi(t[p]);
			if (Gi(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, n = e < d ? t[e].el : i;
				for (; u <= p;) v(null, t[u] = l ? $i(t[u]) : Qi(t[u]), r, n, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) k(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? $i(t[u]) : Qi(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let _, y = 0, b = p - h + 1, x = !1, ee = 0, S = Array(b);
			for (u = 0; u < b; u++) S[u] = 0;
			for (u = m; u <= f; u++) {
				let n = e[u];
				if (y >= b) {
					k(n, a, o, !0);
					continue;
				}
				let i;
				if (n.key != null) i = g.get(n.key);
				else for (_ = h; _ <= p; _++) if (S[_ - h] === 0 && Gi(n, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? k(n, a, o, !0) : (S[i - h] = u + 1, i >= ee ? ee = i : x = !0, v(n, t[i], r, null, a, o, s, c, l), y++);
			}
			let C = x ? Oi(S) : n;
			for (_ = C.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, n = t[e], f = t[e + 1], p = e + 1 < d ? f.el || ji(f) : i;
				S[u] === 0 ? v(null, n, r, p, a, o, s, c, l) : x && (_ < 0 || u !== C[_] ? me(n, r, p, 2) : _--);
			}
		}
	}, me = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) me(e.component.subTree, t, n, r);
		else if (d & 128) e.suspense.move(t, n, r);
		else if (d & 64) c.move(e, t, n, xe);
		else if (c === W) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) me(u[e], t, n, r);
			o(e.anchor, t, n);
		} else if (c === Li) ee(e, t, n);
		else if (r !== 2 && d & 1 && l) {
			if (r === 0) l.persisted && !a[Un] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), U(() => l.enter(a), i));
			else {
				let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
					e.ctx.isUnmounted ? s(a) : o(a, t, n);
				}, d = () => {
					let e = a._isLeaving || !!a[Un];
					a._isLeaving && a[Un](!0), l.persisted && !e ? u() : r(a, () => {
						u(), c && c();
					});
				};
				i ? i(a, u, d) : d();
			}
		} else o(a, t, n);
	}, k = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if ((d === -2 || l && l.hasOnce) && (i = !1), s != null && (We(), Zn(s, null, n, e, !0), Ge()), p == null || e.ctx && e.ctx !== t || (t.renderCache[p] = void 0), u & 256 && t.ctx.deactivate(e)) return;
		let h = u & 1 && f, g = !$n(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && na(_, t, e), u & 6) _e(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Mn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, xe, r) : l && !l.hasOnce && (a !== W || d > 0 && d & 64) ? ve(l, t, n, !1, !0) : (a === W && d & 384 || !i && u & 16) && ve(c, t, n), r && he(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && U(() => {
			_ && na(_, t, e), h && Mn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, he = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e, a = t === W;
		if (a && !i) {
			ge(n, r);
			return;
		}
		if (t === Li) {
			S(e), i && !i.persisted && i.afterLeave && i.afterLeave();
			return;
		}
		let o = a ? qn(e) : e, c = () => {
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
		Ai(c), Ai(l), r && se(r), i.stop(), a ? (a.flags |= 8, k(o, e, t, n)) : o && (o.transition = e.vnode.transition, k(o, e, t, n)), s && U(s, t);
		let u = () => {
			e.isUnmounted = !0;
		};
		u.flags = 16, U(u, t);
	}, ve = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) k(e[o], t, n, r, i);
	}, ye = (e) => {
		if (e.shapeFlag & 6) return ye(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Vn];
		return n ? h(n) : t;
	}, be = (e, t, n) => {
		Tn(() => {
			e == null ? t._vnode && k(t._vnode, null, null, !0) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e;
		}, e && t._vnode ? void 0 : e && e.component ? e.component.uid : aa());
	}, xe = {
		p: v,
		um: k,
		m: me,
		r: he,
		mt: D,
		mc: w,
		pc: de,
		pbc: T,
		n: ye,
		o: e
	}, Se, Ce;
	return i && ([Se, Ce] = i(xe)), {
		render: be,
		hydrate: Se,
		createApp: Ur(be, Se)
	};
}
function wi({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ti({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ei(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Di(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (d(r) && d(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = $i(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Di(t, a)), a.type === Fi && (a.patchFlag === -1 && (a = i[e] = $i(a)), a.el = t.el), a.type === Ii && !a.el && (a.el = t.el);
	}
}
function Oi(e) {
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
function ki(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : ki(t);
}
function Ai(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function ji(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	if (t) return ji(t.subTree);
	let n = e.suspense;
	return n && n.activeBranch ? ji(n.activeBranch) : null;
}
var Mi = (e) => e.__isSuspense, Ni = /* @__PURE__ */ Symbol("_deferredEnter");
function Pi(e, t) {
	t && t.pendingBranch ? d(e) ? t.effects.push(...e) : t.effects.push(e) : xn(e);
}
var W = /* @__PURE__ */ Symbol.for("v-fgt"), Fi = /* @__PURE__ */ Symbol.for("v-txt"), Ii = /* @__PURE__ */ Symbol.for("v-cmt"), Li = /* @__PURE__ */ Symbol.for("v-stc"), Ri = [], G = null;
function K(e = !1) {
	Ri.push(G = e ? null : []);
}
function zi() {
	Ri.pop(), G = Ri[Ri.length - 1] || null;
}
var Bi = 1;
function Vi(e, t = !1) {
	Bi += e, e < 0 && G && t && (G.hasOnce = !0);
}
function Hi(e) {
	return e.dynamicChildren = Bi > 0 ? G || n : null, zi(), Bi > 0 && G && G.push(e), e;
}
function q(e, t, n, r, i, a) {
	return Hi(J(e, t, n, r, i, a, !0));
}
function Ui(e, t, n, r, i) {
	return Hi(Y(e, t, n, r, i, !0));
}
function Wi(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function Gi(e, t) {
	return e.type === t.type && e.key === t.key;
}
var Ki = ({ key: e }) => e ?? null, qi = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : g(e) || /* @__PURE__ */ R(e) || h(e) ? {
	i: B,
	r: e,
	k: t,
	f: !!n
} : e);
function J(e, t = null, n = null, r = 0, i = null, a = e === W ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && Ki(t),
		ref: t && qi(t),
		scopeId: On,
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
		ctx: B
	};
	return s ? (ea(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= g(n) ? 8 : 16), Bi > 0 && !o && G && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && G.push(c), c;
}
var Y = Ji;
function Ji(e, t = null, n = null, r = 0, i = null, a = !1) {
	if (e && e !== vr || (e = Ii), Wi(e)) {
		let r = Xi(e, t, !0);
		return n && ea(r, n), Bi > 0 && !a && G && (r.shapeFlag & 6 ? G[G.indexOf(e)] = r : G.push(r)), r.patchFlag = -2, r;
	}
	if (Ca(e) && (e = e.__vccOpts), t) {
		t = Yi(t);
		let { class: e, style: n } = t;
		e && !g(e) && (t.class = k(e)), v(n) && (/* @__PURE__ */ Ht(n) && !d(n) && (n = s({}, n)), t.style = O(n));
	}
	let o = g(e) ? 1 : Mi(e) ? 128 : Hn(e) ? 64 : v(e) ? 4 : h(e) ? 2 : 0;
	return J(e, t, n, r, i, o, a, !0);
}
function Yi(e) {
	return e ? /* @__PURE__ */ Ht(e) ? s({}, e) : oi(e) ? s({}, e[va] || e) : e : null;
}
function Xi(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? ta(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && Ki(l),
		ref: t && t.ref ? n && a ? d(a) ? a.concat(qi(t)) : [a, qi(t)] : qi(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== W ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && Xi(e.ssContent),
		ssFallback: e.ssFallback && Xi(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce,
		cacheIndex: e.cacheIndex
	};
	return c && r && Kn(u, c.clone(u)), u;
}
function X(e = " ", t = 0) {
	return Y(Fi, null, e, t);
}
function Zi(e, t) {
	let n = Y(Li, null, e);
	return n.staticCount = t, n;
}
function Z(e = "", t = !1) {
	return t ? (K(), Ui(Ii, null, e)) : Y(Ii, null, e);
}
function Qi(e) {
	return e == null || typeof e == "boolean" ? Y(Ii) : d(e) ? Y(W, null, e.slice()) : Wi(e) ? $i(e) : Y(Fi, null, String(e));
}
function $i(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : Xi(e);
}
function ea(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (d(t)) n = 16;
	else if (typeof t == "object") {
		if (r & 65) {
			let n = t.default;
			n && (n._c && (n._d = !1), ea(e, n()), n._c && (n._d = !0));
			return;
		}
		{
			n = 32;
			let r = t._;
			!r && !oi(t) ? t._ctx = B : r === 3 && B && (B.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
		}
	} else if (h(t)) {
		if (r & 65) {
			ea(e, { default: t });
			return;
		}
		t = {
			default: t,
			_ctx: B
		}, n = 32;
	} else t = String(t), r & 64 ? (n = 16, t = [X(t)]) : n = 8;
	e.children = t, e.shapeFlag |= n;
}
function ta(...e) {
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
function na(e, t, n, r = null) {
	cn(e, t, 7, [n, r]);
}
var ra = /* @__PURE__ */ Vr(), ia = 0;
function aa() {
	return ia;
}
function oa(e, n, r) {
	let i = e.type, a = (n ? n.appContext : e.appContext) || ra, o = {
		uid: ia++,
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
		scope: new Ee(!0),
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
		propsOptions: fi(i, a),
		emitsOptions: Jr(i, a),
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
	return o.ctx = { _: o }, o.root = n ? n.root : o, o.emit = Kr.bind(null, o), e.ce && e.ce(o), o;
}
var Q = null, sa = () => Q || B, ca, la;
{
	let e = ue(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	ca = t("__VUE_INSTANCE_SETTERS__", (e) => Q = e), la = t("__VUE_SSR_SETTERS__", (e) => pa = e);
}
var ua = (e) => {
	let t = Q;
	return ca(e), e.scope.on(), () => {
		e.scope.off(), ca(t);
	};
}, da = () => {
	Q && Q.scope.off(), ca(null);
};
function fa(e) {
	return e.vnode.shapeFlag & 4;
}
var pa = !1;
function ma(e, t = !1, n = !1) {
	t && la(t);
	let { props: r, children: i } = e.vnode, a = fa(e);
	si(e, r, a, t), bi(e, i, n || t);
	let o = a ? ha(e, t) : void 0;
	return t && la(!1), o;
}
function ha(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Tr);
	let { setup: r } = n;
	if (r) {
		We();
		let n = e.setupContext = r.length > 1 ? ba(e) : null, i = ua(e), a = sn(r, e, 0, [e.props, n]), o = y(a);
		if (Ge(), i(), (o || e.sp) && !$n(e) && Jn(e), o) {
			if (a.then(da, da), t) return a.then((n) => {
				la(!0);
				try {
					ga(e, n, t);
				} finally {
					la(!1);
				}
			}).catch((t) => {
				ln(t, e, 0, void 0, !0), e.ssrRender = (e, t) => t("<!---->");
			});
			e.asyncDep = a;
		} else ga(e, a, t);
	} else _a(e, t);
}
function ga(e, t, n) {
	h(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : v(t) && (e.setupState = Zt(t)), _a(e, n);
}
function _a(e, t, n) {
	let i = e.type;
	e.render ||= i.render || r;
	{
		let t = ua(e);
		We();
		try {
			Or(e);
		} finally {
			Ge(), t();
		}
	}
}
var va = /* @__PURE__ */ Symbol(), ya = { get(e, t) {
	return P(e, "get", ""), t === va ? e : e[t];
} };
function ba(e) {
	return {
		attrs: new Proxy(e.attrs, ya),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function xa(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(Zt(Ut(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Cr) return Cr[n](e);
		},
		has(e, t) {
			return t in e || t in Cr;
		}
	}) : e.proxy;
}
function Sa(e, t = !0) {
	return h(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ca(e) {
	return h(e) && "__vccOpts" in e;
}
var $ = (e, t) => /* @__PURE__ */ $t(e, t, pa), wa = "3.5.45", Ta = void 0, Ea = typeof window < "u" && window.trustedTypes;
if (Ea) try {
	Ta = /* @__PURE__ */ Ea.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var Da = Ta ? (e) => Ta.createHTML(e) : (e) => e, Oa = "http://www.w3.org/2000/svg", ka = "http://www.w3.org/1998/Math/MathML", Aa = typeof document < "u" ? document : null, ja = Aa && /* @__PURE__ */ Aa.createElement("template"), Ma = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? Aa.createElementNS(Oa, e) : t === "mathml" ? Aa.createElementNS(ka, e) : n ? Aa.createElement(e, { is: n }) : Aa.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => Aa.createTextNode(e),
	createComment: (e) => Aa.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => Aa.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), i !== a && (i = i.nextSibling););
		else {
			ja.innerHTML = Da(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = ja.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, Na = /* @__PURE__ */ Symbol("_vtc");
function Pa(e, t, n) {
	let r = e[Na];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var Fa = /* @__PURE__ */ Symbol("_vod"), Ia = /* @__PURE__ */ Symbol("_vsh"), La = {
	name: "show",
	beforeMount(e, { value: t }, { transition: n }) {
		e[Fa] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ra(e, t);
	},
	mounted(e, { value: t }, { transition: n }) {
		n && t && n.enter(e);
	},
	updated(e, { value: t, oldValue: n }, { transition: r }) {
		!t != !n && (r ? t ? (r.beforeEnter(e), Ra(e, !0), r.enter(e)) : r.leave(e, () => {
			Ra(e, !1);
		}) : Ra(e, t));
	},
	beforeUnmount(e, { value: t }) {
		Ra(e, t);
	}
};
function Ra(e, t) {
	e.style.display = t ? e[Fa] : "none", e[Ia] = !t;
}
var za = /* @__PURE__ */ Symbol(""), Ba = /(?:^|;)\s*display\s*:/;
function Va(e, t, n) {
	let r = e.style, i = g(n), a = !1;
	if (n && !i) {
		if (t) {
			if (g(t)) for (let e of t.split(";")) {
				let t = e.slice(0, e.indexOf(":")).trim();
				n[t] ?? Ua(r, t, "");
			}
			else for (let e in t) n[e] ?? Ua(r, e, "");
		}
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? Ua(r, i, "") : qa(e, i, !g(t) && t ? t[i] : void 0, o) || Ua(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[za];
			e && (n += ";" + e), r.cssText = n, a = Ba.test(n);
		}
	} else t && e.removeAttribute("style");
	Fa in e && (i && t === n || (e[Fa] = a ? r.display : ""), e[Ia] && (r.display = "none"));
}
var Ha = /\s*!important$/;
function Ua(e, t, n) {
	if (d(n)) n.forEach((n) => Ua(e, t, n));
	else if (n ??= "", t.startsWith("--")) Ha.test(n) ? e.setProperty(t, n.replace(Ha, ""), "important") : e.setProperty(t, n);
	else {
		let r = Ka(e, t);
		Ha.test(n) ? e.setProperty(T(r), n.replace(Ha, ""), "important") : e[r] = n;
	}
}
var Wa = [
	"Webkit",
	"Moz",
	"ms"
], Ga = {};
function Ka(e, t) {
	let n = Ga[t];
	if (n) return n;
	let r = w(t);
	if (r !== "filter" && r in e) return Ga[t] = r;
	r = ae(r);
	for (let n = 0; n < Wa.length; n++) {
		let i = Wa[n] + r;
		if (i in e) return Ga[t] = i;
	}
	return t;
}
function qa(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && g(r) && n === r;
}
var Ja = "http://www.w3.org/1999/xlink";
function Ya(e, t, n, r, i, a = ge(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ja, t.slice(6, t.length)) : e.setAttributeNS(Ja, t, n) : n == null || a && !_e(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : _(n) ? String(n) : n);
}
function Xa(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? Da(n) : n);
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
		r === "boolean" ? n = _e(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function Za(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function Qa(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var $a = /* @__PURE__ */ Symbol("_vei");
function eo(e, t, n, r, i = null) {
	let a = e[$a] || (e[$a] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = ro(t);
		r ? Za(e, n, a[t] = so(r, i), s) : o && (Qa(e, n, o, s), a[t] = void 0);
	}
}
var to = /(Once|Passive|Capture)$/, no = /^on:?(?:Once|Passive|Capture)$/;
function ro(e) {
	let t, n;
	for (; (n = e.match(to)) && !no.test(e);) t ||= {}, e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
	return [e[2] === ":" ? e.slice(3) : T(e.slice(2)), t];
}
var io = 0, ao = /* @__PURE__ */ Promise.resolve(), oo = () => io ||= (ao.then(() => io = 0), Date.now());
function so(e, t) {
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
				e && cn(e, t, 5, a);
			}
		} else cn(r, t, 5, [e]);
	};
	return n.value = e, n.attached = oo(), n;
}
var co = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, lo = (e, t, n, r, i, s) => {
	let c = i === "svg";
	t === "class" ? Pa(e, r, c) : t === "style" ? Va(e, n, r) : a(t) ? o(t) || eo(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), 1) : t[0] === "^" ? (t = t.slice(1), 0) : uo(e, t, r, c)) ? (Xa(e, t, r), e.tagName.includes("-") || t !== "value" && t !== "checked" && t !== "selected" || Ya(e, t, r, c, s, t !== "value")) : e._isVueCE && (fo(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !g(r))) ? Xa(e, w(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ya(e, t, r, c));
};
function uo(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && co(t) && h(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return co(t) && g(n) ? !1 : t in e;
}
function fo(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = w(t);
	return Array.isArray(n) ? n.some((e) => w(e) === r) : Object.keys(n).some((e) => w(e) === r);
}
var po = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return d(t) ? (e) => se(t, e) : t;
};
function mo(e) {
	e.target.composing = !0;
}
function ho(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var go = /* @__PURE__ */ Symbol("_assign"), _o = /* @__PURE__ */ Symbol("_initialValue");
function vo(e, t, n) {
	return t && (e = e.trim()), n && (e = ce(e)), e;
}
var yo = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e.parentNode && (e.type === "text" ? e[_o] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[_o] = e.defaultValue.replace(/\r\n?/g, "\n"))), e[go] = po(i);
		let a = r || i.props && i.props.type === "number";
		Za(e, t ? "change" : "input", (t) => {
			t.target.composing || e[go](vo(e.value, n, a));
		}), (n || a) && Za(e, "change", () => {
			e.value = vo(e.value, n, a);
		}), t || (Za(e, "compositionstart", mo), Za(e, "compositionend", ho), Za(e, "change", ho));
	},
	mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
		let i = t ?? "", a = e[_o];
		delete e[_o], a !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== a ? e[go](vo(e.value, n, r)) : e.value = i;
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[go] = po(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? ce(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, bo = /* @__PURE__ */ s({ patchProp: lo }, Ma), xo;
function So() {
	return xo ||= Si(bo);
}
var Co = ((...e) => {
	let t = So().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = To(e);
		if (!r) return;
		let i = t._component;
		h(i) || i.render || i.template || (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, wo(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function wo(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function To(e) {
	return g(e) ? document.querySelector(e) : e;
}
// node_modules/pinia/dist/pinia.mjs
var Eo = typeof window < "u", Do = Symbol(), Oo;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Oo ||= {});
var ko = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function Ao(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function jo(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		Io(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function Mo(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function No(e) {
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
var Po = typeof navigator == "object" ? navigator : { userAgent: "" }, Fo = /Macintosh/.test(Po.userAgent) && /AppleWebKit/.test(Po.userAgent) && !/Safari/.test(Po.userAgent), Io = Eo ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Fo ? Lo : "msSaveOrOpenBlob" in Po ? Ro : zo : () => {};
function Lo(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? No(r) : Mo(r.href) ? jo(e, t, n) : (r.target = "_blank", No(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		No(r);
	}, 0));
}
function Ro(e, t = "download", n) {
	if (typeof e == "string") {
		if (Mo(e)) jo(e, t, n);
		else {
			let t = document.createElement("a");
			t.href = e, t.target = "_blank", setTimeout(function() {
				No(t);
			});
		}
	} else navigator.msSaveOrOpenBlob(Ao(e, n), t);
}
function zo(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return jo(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(ko.HTMLElement)) || "safari" in ko, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || Fo) && typeof FileReader < "u") {
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
var { assign: Bo } = Object;
function Vo() {
	let e = De(!0), t = e.run(() => /* @__PURE__ */ Gt({})), n = [], r = [], i = Ut({
		install(e) {
			i._a = e, e.provide(Do, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
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
var { assign: Ho } = Object, Uo = {
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
		return (t, n) => (K(), Ui(yr(e.component), he(Yi(e.componentProps)), null, 16));
	}
}, Wo = [
	"data-nav",
	"aria-current",
	"aria-label",
	"title",
	"onClick"
], Go = ["innerHTML"], Ko = { key: 0 }, qo = {
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
		return (t, n) => (K(!0), q(W, null, V(e.items, (t) => (K(), q("button", {
			key: t.id,
			type: "button",
			class: k(e.mobile ? t.active ? "active" : "" : ["nav-button", { active: t.active }]),
			"data-nav": t.id,
			"aria-current": t.active ? "page" : void 0,
			"aria-label": e.mobile ? t.label : void 0,
			title: e.mobile ? t.label : void 0,
			onClick: (n) => e.onNavigate(t.id)
		}, [J("span", {
			class: "sb-vue-nav-icon",
			"aria-hidden": "true",
			innerHTML: t.iconHtml
		}, null, 8, Go), e.mobile ? (K(), q("span", Ko, A(t.shortLabel), 1)) : (K(), q(W, { key: 1 }, [X(A(t.label), 1)], 64))], 10, Wo))), 128));
	}
}, Jo = /* @__PURE__ */ new Set([
	"projects",
	"saved",
	"myideas",
	"myprompts",
	"events",
	"tracks",
	"artists"
]);
function Yo(e) {
	return e === "detail" ? "catalog" : Jo.has(e) ? "account" : e;
}
function Xo(e) {
	let t = Yo(e?.active), n = /* @__PURE__ */ new Set(), r = [];
	for (let i of Array.isArray(e?.items) ? e.items : []) {
		let e = typeof i?.id == "string" ? i.id : "", a = typeof i?.label == "string" ? i.label : "";
		e && a && !n.has(e) && (n.add(e), r.push({
			id: e,
			label: a,
			shortLabel: a.replace("Идеи песен", "Идеи").replace("Suno Studio", "Студия").replace("Личный кабинет", "Кабинет"),
			iconHtml: typeof i.iconHtml == "string" ? i.iconHtml : "",
			active: e === t
		}));
	}
	return r;
}
// src/vue/navigation/legacyBridge.js
var Zo = [{
	key: "sidebar",
	selector: "[data-sb-vue-sidebar]",
	mobile: !1
}, {
	key: "mobile",
	selector: "[data-sb-vue-mobile]",
	mobile: !0
}];
function Qo({ mountVueFeature: e, unmountVueFeature: t }) {
	let n = window.SUNOBOOM_LEGACY_NAV, r = document.getElementById("app");
	if (!n || !r || typeof n.snapshot != "function") return () => {};
	let i = /* @__PURE__ */ new Map(), a = !1;
	function o() {
		if (a) return;
		let t = Xo(n.snapshot()), o = JSON.stringify(t);
		for (let { key: a, selector: s, mobile: c } of Zo) {
			let l = r.querySelector(s), u = i.get(a);
			if (!l) {
				u?.unmount(), i.delete(a);
				continue;
			}
			if (u?.target === l && u.signature === o) continue;
			u?.unmount();
			let d = e(l, qo, {
				items: t,
				mobile: c,
				onNavigate: (e) => n.navigate(e)
			});
			d && i.set(a, {
				target: l,
				signature: o,
				unmount: d
			});
		}
	}
	let s = new MutationObserver(o);
	return s.observe(r, { childList: !0 }), o(), function() {
		if (!a) {
			a = !0, s.disconnect();
			for (let e of i.values()) e.unmount();
			i.clear();
		}
	};
}
// src/vue/academy/GenreCards.vue
var $o = ["data-id"], es = { class: "genre-content" }, ts = { class: "kicker" }, ns = { class: "foot" }, rs = {
	__name: "GenreCards",
	props: { genres: {
		type: Array,
		required: !0
	} },
	setup(e) {
		return (t, n) => (K(!0), q(W, null, V(e.genres, (e) => (K(), q("button", {
			key: e.id,
			type: "button",
			class: "genre-card",
			style: O({ "--accent": e.color }),
			"data-action": "genre",
			"data-id": e.id
		}, [n[1] ||= J("div", {
			class: "art",
			"aria-hidden": "true"
		}, null, -1), J("div", es, [J("div", null, [
			J("div", ts, A(e.family) + " · " + A(e.bpm[0]) + "–" + A(e.bpm[1]) + " BPM", 1),
			J("h3", null, A(e.name), 1),
			J("p", null, A(e.tagline), 1)
		]), J("div", ns, [J("span", null, A(e.era), 1), n[0] ||= J("span", { style: { color: "#ffacd9" } }, "Открыть →", -1)])])], 12, $o))), 128));
	}
}, is = { class: "genre-family-toolbar" }, as = { class: "search-box" }, os = ["innerHTML"], ss = { class: "hint" }, cs = { class: "genre-family-summary" }, ls = { id: "catalog-count" }, us = {
	class: "hint",
	id: "sb-academy-search-hint"
}, ds = {
	id: "catalog-cards",
	class: "genre-families"
}, fs = [
	"data-family",
	"open",
	"onToggle"
], ps = {
	class: "genre-family-icon",
	"aria-hidden": "true"
}, ms = { class: "genre-family-heading" }, hs = { class: "genre-family-right" }, gs = { class: "genre-family-count" }, _s = { class: "genre-family-body" }, vs = {
	key: 0,
	class: "sb-sacred-index"
}, ys = {
	key: 0,
	class: "sb-sacred-overview"
}, bs = { class: "genre-grid" }, xs = { class: "sb-sacred-religions" }, Ss = [
	"data-sb-religion",
	"open",
	"onToggle"
], Cs = { class: "sb-sacred-religion-header" }, ws = {
	class: "sb-sacred-religion-icon",
	"aria-hidden": "true"
}, Ts = { class: "sb-sacred-religion-label" }, Es = { class: "sb-sacred-count" }, Ds = { class: "sb-sacred-religion-content" }, Os = [
	"data-sb-branch",
	"open",
	"onToggle"
], ks = { class: "sb-sacred-branch-header" }, As = { class: "sb-sacred-branch-label" }, js = { class: "sb-sacred-count" }, Ms = { class: "sb-sacred-branch-content" }, Ns = { class: "genre-grid" }, Ps = {
	key: 1,
	class: "genre-grid"
}, Fs = {
	key: 1,
	class: "genre-family-empty"
}, Is = {
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
		let t = e, n = /* @__PURE__ */ Gt(t.snapshot.query || ""), r = /* @__PURE__ */ It({
			family: { ...t.snapshot.expanded?.family || {} },
			religion: { ...t.snapshot.expanded?.religion || {} },
			branch: { ...t.snapshot.expanded?.branch || {} }
		}), i = $(() => t.search(n.value)), a = $(() => !!n.value.trim()), o = $(() => {
			let e = i.value.ids == null ? null : new Set(i.value.ids);
			return (t.snapshot.families || []).map((t) => ({
				...t,
				genres: t.genres.filter((t) => !e || e.has(t.id))
			})).filter((e) => e.genres.length);
		}), s = $(() => o.value.reduce((e, t) => e + t.genres.length, 0)), c = $(() => a.value ? {
			name: "По названиям жанров",
			family: "По направлениям",
			artist: "По исполнителям",
			description: "По описаниям и звучанию"
		}[i.value.mode] || "" : "Поиск работает при вводе"), l = $(() => o.value.find((e) => e.name === "Религиозная музыка")), u = $(() => l.value?.genres.find((e) => e.id === "sacred-music")), d = $(() => {
			if (!l.value) return [];
			let e = new Map(l.value.genres.map((e) => [e.id, e]));
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
		});
		function f(e, t) {
			return a.value || !!r[e][t];
		}
		function p(e, n, i) {
			if (a.value) return;
			let o = i.currentTarget.open;
			r[e][n] !== o && (r[e][n] = o, t.setExpanded(e, n, o));
		}
		function m(e) {
			return e === 1 ? "жанр" : e >= 2 && e <= 4 ? "жанра" : "жанров";
		}
		function h(e) {
			return e === 1 ? "направление" : e >= 2 && e <= 4 ? "направления" : "направлений";
		}
		return (t, r) => (K(), q(W, null, [
			J("div", is, [J("label", as, [J("span", {
				innerHTML: e.searchIcon,
				"aria-hidden": "true"
			}, null, 8, os), jn(J("input", {
				id: "genre-search",
				"onUpdate:modelValue": r[0] ||= (e) => n.value = e,
				type: "search",
				enterkeyhint: "search",
				autocapitalize: "off",
				spellcheck: "false",
				"aria-label": "Поиск жанров",
				placeholder: "Поиск жанра, поджанра или исполнителя…",
				autocomplete: "off"
			}, null, 512), [[yo, n.value]])]), J("span", ss, A(e.snapshot.families.length) + " разделов · " + A(e.snapshot.families.reduce((e, t) => e + t.genres.length, 0)) + " жанров", 1)]),
			J("div", cs, [J("h2", ls, A(a.value ? "Найдено жанров" : "Музыкальные жанры") + " · " + A(s.value), 1), J("span", us, A(c.value), 1)]),
			J("div", ds, [o.value.length ? (K(!0), q(W, { key: 0 }, V(o.value, (e) => (K(), q("details", {
				key: e.name,
				class: "genre-family",
				"data-family": e.name,
				style: O({ "--family-accent": e.meta.accent }),
				open: f("family", e.name),
				onToggle: (t) => p("family", e.name, t)
			}, [J("summary", null, [
				J("span", ps, A(e.meta.icon), 1),
				J("span", ms, [J("strong", null, A(e.name), 1), J("small", null, A(e.meta.desc), 1)]),
				J("span", hs, [J("span", gs, A(e.genres.length) + " " + A(m(e.genres.length)), 1), r[1] ||= J("svg", {
					class: "genre-family-chevron",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2",
					"aria-hidden": "true"
				}, [J("path", { d: "m5 9 7 7 7-7" })], -1)])
			]), J("div", _s, [e.name === "Религиозная музыка" ? (K(), q("div", vs, [
				r[5] ||= J("div", { class: "sb-sacred-intro" }, [
					J("span", { class: "sb-sacred-eyebrow" }, "МУЗЫКА МИРОВЫХ РЕЛИГИЙ"),
					J("h3", null, "Религии и музыкальные традиции"),
					J("p", null, "Открой религию, затем её направление или течение. Здесь представлены музыкальные традиции — их границы не всегда совпадают с конфессиональными.")
				], -1),
				u.value ? (K(), q("div", ys, [r[2] ||= J("div", { class: "sb-sacred-overview-label" }, "📖 Обзор раздела", -1), J("div", bs, [Y(rs, { genres: [u.value] }, null, 8, ["genres"])])])) : Z("", !0),
				J("div", xs, [(K(!0), q(W, null, V(d.value, (e) => (K(), q("details", {
					key: e.id,
					class: "sb-sacred-religion",
					"data-sb-religion": e.id,
					open: f("religion", e.id),
					onToggle: (t) => p("religion", e.id, t)
				}, [J("summary", Cs, [
					J("span", ws, A(e.icon), 1),
					J("span", Ts, [J("strong", null, A(e.name), 1), J("small", null, A(e.description), 1)]),
					J("span", Es, A(e.count), 1),
					r[3] ||= J("span", {
						class: "sb-sacred-chevron",
						"aria-hidden": "true"
					}, "⌄", -1)
				]), J("div", Ds, [(K(!0), q(W, null, V(e.branches, (e) => (K(), q("details", {
					key: e.id,
					class: "sb-sacred-branch",
					"data-sb-branch": e.id,
					open: f("branch", e.id),
					onToggle: (t) => p("branch", e.id, t)
				}, [J("summary", ks, [
					J("span", As, [J("strong", null, A(e.name), 1), J("small", null, A(e.description), 1)]),
					J("span", js, A(e.genres.length) + " " + A(h(e.genres.length)), 1),
					r[4] ||= J("span", {
						class: "sb-sacred-chevron",
						"aria-hidden": "true"
					}, "⌄", -1)
				]), J("div", Ms, [J("div", Ns, [Y(rs, { genres: e.genres }, null, 8, ["genres"])])])], 40, Os))), 128))])], 40, Ss))), 128))])
			])) : (K(), q("div", Ps, [Y(rs, { genres: e.genres }, null, 8, ["genres"])]))])], 44, fs))), 128)) : (K(), q("div", Fs, "Ничего не найдено. Попробуй другой запрос."))])
		], 64));
	}
};
// src/vue/academy/legacyAcademyBridge.js
function Ls({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ACADEMY, n = document.getElementById("app");
	if (!t || !n || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-academy-root");
		if (r?.target === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o?.families?.length) return;
		let s = e(a, Is, {
			snapshot: o,
			search: (e) => t.search(e),
			searchIcon: n.querySelector("#sb-vue-academy-root label.search-box > svg")?.outerHTML || "",
			setExpanded: (e, n, r) => t.setExpanded(e, n, r)
		});
		s && (r = {
			target: a,
			unmount: s
		});
	}
	let o = new MutationObserver(a);
	return o.observe(n, { childList: !0 }), a(), () => {
		i || (i = !0, o.disconnect(), r?.unmount(), r = null);
	};
}
// src/vue/academy/GenreOverview.vue
var Rs = {
	class: "gb-grid",
	"data-sb-vue-overview": ""
}, zs = { class: "gb-column" }, Bs = { class: "gb-panel pink" }, Vs = { class: "gb-unit" }, Hs = { class: "gb-unit" }, Us = { class: "gb-unit" }, Ws = { class: "gb-panel" }, Gs = ["innerHTML"], Ks = { class: "gb-column" }, qs = { class: "gb-panel blue" }, Js = { style: {
	"font-size": "26px",
	"font-weight": "900",
	color: "#ffe2b0"
} }, Ys = { class: "gb-artists" }, Xs = { class: "gb-panel pink" }, Zs = ["data-id"], Qs = ["innerHTML"], $s = {
	__name: "GenreOverview",
	props: { genre: {
		type: Object,
		required: !0
	} },
	emits: ["select-tab"],
	setup(e) {
		return (t, n) => (K(), q("div", Rs, [J("div", zs, [J("section", Bs, [
			n[7] ||= J("div", { class: "gb-sup" }, "01 / ЗНАКОМСТВО С ЖАНРОМ", -1),
			n[8] ||= J("h2", null, "Характер и звучание", -1),
			J("p", null, [J("strong", null, A(e.genre.tagline), 1)]),
			J("p", null, A(e.genre.description), 1),
			J("div", Vs, [n[2] ||= J("b", null, "🎸", -1), J("div", null, [n[1] ||= J("strong", null, "Инструменты", -1), J("span", null, A(e.genre.instruments) + ".", 1)])]),
			J("div", Hs, [n[4] ||= J("b", null, "🎛️", -1), J("div", null, [n[3] ||= J("strong", null, "Саунд", -1), J("span", null, A(e.genre.style) + ".", 1)])]),
			J("div", Us, [n[6] ||= J("b", null, "✍️", -1), J("div", null, [n[5] ||= J("strong", null, "Тематика песен", -1), J("span", null, A(e.genre.themes) + ".", 1)])])
		]), J("section", Ws, [
			n[10] ||= J("div", { class: "gb-sup" }, "03 / ИДЕИ ДЛЯ СТАРТА", -1),
			n[11] ||= J("h2", null, "Что можно спеть", -1),
			(K(!0), q(W, null, V(e.genre.ideas, (e, t) => (K(), q("div", {
				key: t,
				class: "gb-idea"
			}, [J("strong", null, A(e.title), 1), J("p", null, A(e.pitch), 1)]))), 128)),
			J("button", {
				type: "button",
				class: "btn ghost small",
				onClick: n[0] ||= (e) => t.$emit("select-tab", "ideas")
			}, [n[9] ||= X(" Все идеи ", -1), J("span", {
				"aria-hidden": "true",
				innerHTML: e.genre.icons.arrow
			}, null, 8, Gs)])
		])]), J("div", Ks, [J("section", qs, [
			n[12] ||= J("div", { class: "gb-sup" }, "02 / ПАСПОРТ НАПРАВЛЕНИЯ", -1),
			n[13] ||= J("h2", null, "История и сцена", -1),
			n[14] ||= J("div", { class: "info-label" }, "Эпоха", -1),
			J("p", null, A(e.genre.era), 1),
			n[15] ||= J("div", { class: "info-label" }, "Диапазон темпа", -1),
			J("p", Js, A(e.genre.bpm[0]) + "–" + A(e.genre.bpm[1]) + " BPM", 1),
			n[16] ||= J("div", { class: "info-label" }, "Исполнители для знакомства", -1),
			J("div", Ys, [(K(!0), q(W, null, V(e.genre.artists, (e) => (K(), q("span", { key: e }, A(e), 1))), 128))])
		]), J("section", Xs, [n[18] ||= Zi("<div class=\"gb-sup\">04 / ТВОЯ МУЗЫКА</div><h2>Преврати знания в трек</h2><p>Выбери вокал, настроение и темп, затем создай промпт и структуру песни в Suno Studio.</p><div class=\"gb-unit\"><b>🎤</b><div><strong>Вокал</strong><span>Мужской, женский или дуэт; можно использовать русский язык.</span></div></div><div class=\"gb-unit\"><b>⚡</b><div><strong>Динамика</strong><span>Настрой энергию и характер припева под историю.</span></div></div>", 5), J("button", {
			type: "button",
			class: "btn primary small",
			"data-action": "use-genre",
			"data-id": e.genre.id
		}, [J("span", {
			innerHTML: e.genre.icons.studio,
			"aria-hidden": "true"
		}, null, 8, Qs), n[17] ||= X(" Открыть студию ", -1)], 8, Zs)])])]));
	}
}, ec = {
	key: 0,
	id: "sb-artist-expanded",
	class: "ahx-wrap",
	"data-sb-vue-artists": ""
}, tc = { class: "ahx-intro" }, nc = { class: "gb-eyebrow" }, rc = {
	class: "ahx-toolbar",
	role: "group",
	"aria-label": "Музыкальные сцены"
}, ic = ["aria-pressed"], ac = ["aria-pressed"], oc = { class: "ahx-filters" }, sc = { class: "ahx-search" }, cc = ["innerHTML"], lc = {
	class: "ahx-filter-buttons",
	role: "group",
	"aria-label": "Фильтр исполнителей"
}, uc = [
	"data-vue-artist-filter",
	"aria-pressed",
	"onClick"
], dc = {
	id: "ahx-count",
	class: "ahx-count",
	"aria-live": "polite"
}, fc = { class: "ahx-section-head" }, pc = { class: "ahx-eyebrow" }, mc = { class: "ahx-num" }, hc = { class: "ahx-grid" }, gc = ["data-ahx-group"], _c = { class: "ahx-card-top" }, vc = {
	class: "ahx-avatar",
	"aria-hidden": "true"
}, yc = { class: "ahx-title" }, bc = { class: "ahx-era" }, xc = {
	key: 0,
	class: "ahx-track"
}, Sc = {
	id: "ahx-no-results",
	class: "ahx-no-results"
}, Cc = {
	key: 1,
	class: "ahx-empty"
}, wc = {
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
		let t = e, n = /* @__PURE__ */ Gt(t.catalog.initialScene()), r = /* @__PURE__ */ Gt(""), i = /* @__PURE__ */ Gt("all"), a = $(() => t.catalog.getScene(t.genre.id, n.value)), o = $(() => (a.value?.groups || []).map((e) => ({
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
		}))), s = $(() => o.value.reduce((e, t) => e + t.artists.length, 0)), c = $(() => (a.value?.groups || []).reduce((e, t) => e + t.artists.length, 0));
		async function l(e) {
			(e === "ru" || e === "world") && (n.value = e, t.catalog.setScene(e), r.value = "", i.value = "all", await _n(), t.enhanceProfiles?.());
		}
		return cr(() => t.enhanceProfiles?.()), ur(() => t.enhanceProfiles?.()), (t, u) => a.value ? (K(), q("div", ec, [
			J("div", tc, [
				J("div", nc, "АКАДЕМИЯ SUNOBOOM · " + A(e.genre.name), 1),
				u[4] ||= J("h2", null, "Исполнители и композиторы", -1),
				J("p", null, A(a.value.description), 1)
			]),
			J("div", rc, [J("button", {
				type: "button",
				"data-vue-artist-scene": "world",
				"aria-pressed": n.value === "world",
				class: k({ on: n.value === "world" }),
				onClick: u[0] ||= (e) => l("world")
			}, [u[5] ||= X(" 🌍 Мировая сцена ", -1), J("span", null, A(a.value.worldCount), 1)], 10, ic), J("button", {
				type: "button",
				"data-vue-artist-scene": "ru",
				"aria-pressed": n.value === "ru",
				class: k({ on: n.value === "ru" }),
				onClick: u[1] ||= (e) => l("ru")
			}, [u[6] ||= X(" 🎤 Русскоязычные ", -1), J("span", null, A(a.value.ruCount), 1)], 10, ac)]),
			c.value ? (K(), q(W, { key: 0 }, [
				J("div", oc, [J("label", sc, [J("span", {
					"aria-hidden": "true",
					innerHTML: e.genre.icons.overview
				}, null, 8, cc), jn(J("input", {
					"onUpdate:modelValue": u[2] ||= (e) => r.value = e,
					type: "search",
					"data-vue-artist-search": "",
					placeholder: "Найти исполнителя или произведение…",
					"aria-label": "Поиск по исполнителям"
				}, null, 512), [[yo, r.value]])]), J("div", lc, [(K(), q(W, null, V([
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
				], (e) => J("button", {
					key: e.id,
					type: "button",
					"data-vue-artist-filter": e.id,
					"aria-pressed": i.value === e.id,
					onClick: (t) => i.value = e.id
				}, A(e.label), 9, uc)), 64))])]),
				J("p", dc, "Показано " + A(s.value) + " из " + A(c.value) + " исполнителей.", 1),
				(K(!0), q(W, null, V(o.value, (e) => jn((K(), q("section", {
					key: e.index,
					class: "ahx-section",
					"data-ahx-section": ""
				}, [J("div", fc, [J("div", null, [J("span", pc, "0" + A(e.index + 1) + " / ИСПОЛНИТЕЛИ", 1), J("h3", null, A(e.index ? "Современная сцена и продолжатели" : "Классика и предшественники"), 1)]), J("span", mc, A(e.artists.length), 1)]), J("div", hc, [(K(!0), q(W, null, V(e.artists, (e) => (K(), q("article", {
					key: e.key,
					class: "ahx-card",
					"data-ahx-group": e.group
				}, [
					J("div", _c, [J("span", vc, A(e.initials), 1), J("div", yc, [J("h4", null, A(e.name), 1), J("span", bc, A(e.period || "Музыкальная сцена"), 1)])]),
					J("span", { class: k(["ahx-role", { "ahx-role-neighbor": e.group === "adjacent" }]) }, A(e.label), 3),
					J("p", null, A(e.bio || "Музыкальное направление и характерный творческий почерк."), 1),
					e.track ? (K(), q("div", xc, [u[7] ||= J("small", null, "Ориентир для прослушивания", -1), J("strong", null, "♫ " + A(e.track), 1)])) : Z("", !0)
				], 8, gc))), 128))])])), [[La, e.artists.length]])), 128)),
				jn(J("div", Sc, " По заданному поиску исполнители не найдены. Попробуй другой запрос или выбери «Все». ", 512), [[La, s.value === 0]])
			], 64)) : (K(), q("div", Cc, [
				u[8] ||= J("strong", null, "Русскоязычная подборка ещё уточняется", -1),
				u[9] ||= J("p", null, "Для этого узкого направления пока нет достаточно подтверждённых примеров. Мы не будем подставлять артистов из других жанров без пояснения.", -1),
				J("button", {
					class: "btn ghost",
					type: "button",
					onClick: u[3] ||= (e) => l("world")
				}, "Посмотреть мировую сцену")
			])),
			u[10] ||= J("p", { class: "ahx-footnote" }, "В подборках могут встречаться близкие стили, кино- и игровая музыка, инструментальные коллективы. Их связь с жанром поясняется в карточке. Указанные произведения — ориентиры для знакомства, а не ссылки на конкретные релизы.", -1)
		])) : Z("", !0);
	}
}, Tc = {
	class: "idea-grid",
	"data-sb-vue-ideas": ""
}, Ec = { class: "idea-badge" }, Dc = { class: "actions" }, Oc = ["data-id", "data-i"], kc = ["innerHTML"], Ac = [
	"data-id",
	"data-i",
	"aria-pressed"
], jc = ["innerHTML"], Mc = {
	__name: "GenreIdeas",
	props: { genre: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (K(), q("div", Tc, [(K(!0), q(W, null, V(e.genre.allIdeas, (t) => (K(), q("div", {
			key: t.index,
			class: "idea"
		}, [
			J("div", Ec, A(e.genre.name) + " · " + A(t.mood), 1),
			J("h3", null, A(t.title), 1),
			J("p", null, A(t.pitch), 1),
			J("div", Dc, [J("button", {
				type: "button",
				class: "btn primary small",
				"data-action": "idea-use",
				"data-id": e.genre.id,
				"data-i": t.index
			}, [J("span", {
				"aria-hidden": "true",
				innerHTML: e.genre.icons.studio
			}, null, 8, kc), n[0] ||= X(" В студию ", -1)], 8, Oc), J("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "idea-save",
				"data-id": e.genre.id,
				"data-i": t.index,
				"aria-pressed": t.saved ? "true" : "false"
			}, [J("span", {
				"aria-hidden": "true",
				innerHTML: e.genre.icons.heart
			}, null, 8, jc), X(" " + A(t.saved ? "Сохранено" : "Сохранить"), 1)], 8, Ac)])
		]))), 128))]));
	}
}, Nc = {
	class: "panel",
	"data-sb-vue-prompts": ""
}, Pc = { class: "idea-grid" }, Fc = { class: "idea" }, Ic = ["data-id"], Lc = ["innerHTML"], Rc = { class: "idea" }, zc = ["data-id"], Bc = ["innerHTML"], Vc = {
	__name: "GenrePrompts",
	props: { genre: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (K(), q("div", Nc, [
			n[5] ||= J("h3", null, "Шаблоны звучания", -1),
			n[6] ||= J("p", null, "Начни с одного из вариантов. Он перенесёт настройки жанра в конструктор — там можно выбрать вокал, настроение и язык.", -1),
			J("div", Pc, [J("div", Fc, [
				n[1] ||= J("div", { class: "idea-badge" }, "Оригинальное звучание", -1),
				J("h3", null, A(e.genre.name), 1),
				J("p", null, A(e.genre.style) + ".", 1),
				J("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "use-genre",
					"data-id": e.genre.id
				}, [n[0] ||= X(" Настроить в студии ", -1), J("span", {
					"aria-hidden": "true",
					innerHTML: e.genre.icons.arrow
				}, null, 8, Lc)], 8, Ic)
			]), J("div", Rc, [
				n[3] ||= J("div", { class: "idea-badge" }, "Альтернативная версия", -1),
				n[4] ||= J("h3", null, "Мягкая атмосфера", -1),
				J("p", null, A(e.genre.style) + ", restrained dynamics, warm intimate production, emotional melodies.", 1),
				J("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "use-soft",
					"data-id": e.genre.id
				}, [n[2] ||= X(" Настроить в студии ", -1), J("span", {
					"aria-hidden": "true",
					innerHTML: e.genre.icons.arrow
				}, null, 8, Bc)], 8, zc)
			])])
		]));
	}
}, Hc = { class: "gb-hero" }, Uc = { class: "gb-content" }, Wc = { class: "gb-eyebrow" }, Gc = { class: "gb-title" }, Kc = { class: "gb-desc" }, qc = { class: "gb-tags" }, Jc = { class: "gb-buttons" }, Yc = ["data-id"], Xc = ["innerHTML"], Zc = ["data-id"], Qc = ["innerHTML"], $c = {
	class: "gb-vinyl",
	"aria-hidden": "true"
}, el = { class: "gb-equalizer" }, tl = { class: "gb-facts" }, nl = { class: "gb-fact" }, rl = { class: "gb-fact" }, il = { class: "gb-fact" }, al = { class: "gb-fact" }, ol = { class: "genre-detail-layout" }, sl = {
	class: "genre-side-nav",
	"aria-label": "ЖАНР-НАВ — меню жанра"
}, cl = {
	class: "genre-side-links",
	"aria-label": "Разделы жанра"
}, ll = [
	"data-tab",
	"aria-current",
	"onClick"
], ul = ["innerHTML"], dl = {
	class: "genre-detail-content",
	id: "genre-nav-content",
	"aria-label": "Содержимое раздела жанра"
}, fl = ["innerHTML"], pl = {
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
		], r = /* @__PURE__ */ Gt(t.genre.tab), i = /* @__PURE__ */ Gt(t.tabContent(t.genre.id, r.value) || "");
		async function a(e) {
			if (r.value === e || !n.some((t) => t.id === e)) return;
			let a = t.tabContent(t.genre.id, e);
			typeof a == "string" && (r.value = e, i.value = a, await _n(), window.innerWidth <= 850 && document.getElementById("genre-nav-content")?.scrollIntoView({
				block: "start",
				behavior: "smooth"
			}));
		}
		return (t, o) => (K(), q("div", {
			class: "genre-bright",
			style: O({ "--accent": e.genre.color })
		}, [J("div", Hc, [
			o[5] ||= J("div", { class: "gb-top" }, [J("button", {
				type: "button",
				class: "back",
				"data-action": "academy-back",
				"aria-label": "Назад к разделу Академии"
			}, "← Назад"), J("small", null, "SUNOBOOM · MUSIC ATLAS")], -1),
			J("div", Uc, [J("div", null, [
				J("div", Wc, A(e.genre.family) + " · " + A(e.genre.era), 1),
				J("h1", Gc, A(e.genre.name), 1),
				J("p", Kc, A(e.genre.description), 1),
				J("div", qc, [
					J("span", null, A(e.genre.tagline), 1),
					J("span", null, A(e.genre.bpm[0]) + "–" + A(e.genre.bpm[1]) + " BPM", 1),
					J("span", null, A(e.genre.ideasCount) + " идеи", 1)
				]),
				J("div", Jc, [J("button", {
					type: "button",
					class: "btn primary",
					"data-action": "use-genre",
					"data-id": e.genre.id
				}, [J("span", {
					innerHTML: e.genre.icons.studio,
					"aria-hidden": "true"
				}, null, 8, Xc), o[0] ||= X(" Создать в Suno ", -1)], 8, Yc), J("button", {
					type: "button",
					class: "btn ghost",
					"data-action": "favorite",
					"data-id": e.genre.id
				}, [J("span", {
					innerHTML: e.genre.icons.heart,
					"aria-hidden": "true"
				}, null, 8, Qc), X(" " + A(e.genre.favorite ? "В избранном" : "В избранное"), 1)], 8, Zc)])
			]), J("div", $c, [J("div", el, [(K(), q(W, null, V(9, (e) => J("i", { key: e })), 64))])])]),
			J("div", tl, [
				J("div", nl, [o[1] ||= J("small", null, "История", -1), J("strong", null, A(e.genre.era), 1)]),
				J("div", rl, [o[2] ||= J("small", null, "Темп", -1), J("strong", null, A(e.genre.bpm[0]) + "–" + A(e.genre.bpm[1]) + " BPM", 1)]),
				J("div", il, [o[3] ||= J("small", null, "Треки", -1), J("strong", null, A(e.genre.ideasCount) + " сюжетных идеи", 1)]),
				J("div", al, [o[4] ||= J("small", null, "Артисты", -1), J("strong", null, A(e.genre.artistCount) + " ориентиров", 1)])
			])
		]), J("div", ol, [J("aside", sl, [o[7] ||= J("div", { class: "genre-side-head" }, [J("span", null, "ЖАНР-НАВ"), J("small", null, "Разделы карточки")], -1), J("nav", cl, [(K(), q(W, null, V(n, (t) => J("button", {
			key: t.id,
			type: "button",
			class: k(["genre-side-item", { active: r.value === t.id }]),
			"data-tab": t.id,
			"aria-controls": "genre-nav-content",
			"aria-current": r.value === t.id ? "page" : "false",
			onClick: (e) => a(t.id)
		}, [
			J("span", {
				class: "genre-side-icon",
				innerHTML: e.genre.icons[t.id],
				"aria-hidden": "true"
			}, null, 8, ul),
			J("span", null, A(t.label), 1),
			o[6] ||= J("span", {
				class: "genre-side-chevron",
				"aria-hidden": "true"
			}, "›", -1)
		], 10, ll)), 64))])]), J("section", dl, [r.value === "overview" ? (K(), Ui($s, {
			key: 0,
			genre: e.genre,
			onSelectTab: a
		}, null, 8, ["genre"])) : r.value === "artists" && e.artistCatalog ? (K(), Ui(wc, {
			key: 1,
			genre: e.genre,
			catalog: e.artistCatalog,
			"enhance-profiles": e.enhanceArtistProfiles
		}, null, 8, [
			"genre",
			"catalog",
			"enhance-profiles"
		])) : r.value === "ideas" ? (K(), Ui(Mc, {
			key: 2,
			genre: e.genre
		}, null, 8, ["genre"])) : r.value === "prompts" ? (K(), Ui(Vc, {
			key: 3,
			genre: e.genre
		}, null, 8, ["genre"])) : (K(), q("div", {
			key: 4,
			innerHTML: i.value
		}, null, 8, fl))])])], 4));
	}
};
// src/vue/academy/legacyGenreDetailBridge.js
function ml({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_GENRE, n = document.getElementById("app");
	if (!n || !t || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-genre-detail");
		if (r?.target === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o?.id) return;
		let s = e(a, pl, {
			genre: o,
			tabContent: (e, n) => t.tabContent(e, n),
			artistCatalog: window.SUNOBOOM_ARTIST_CATALOG || null,
			enhanceArtistProfiles: () => window.SUNOBOOM_ARTIST_PROFILES?.enhanceCards?.()
		});
		s && (r = {
			target: a,
			unmount: s
		});
	}
	let o = new MutationObserver(a);
	return o.observe(n, { childList: !0 }), a(), () => {
		i || (i = !0, o.disconnect(), r?.unmount(), r = null);
	};
}
// src/vue/studio/StudioBuilder.vue
var hl = { class: "panel" }, gl = { class: "field" }, _l = ["value"], vl = ["value"], yl = { class: "form-grid" }, bl = { class: "field" }, xl = ["value"], Sl = ["value"], Cl = { class: "field" }, wl = ["value"], Tl = ["value"], El = { class: "field" }, Dl = ["value"], Ol = ["value"], kl = { class: "field" }, Al = ["value"], jl = ["value"], Ml = { class: "field" }, Nl = { for: "b-tempo" }, Pl = {
	id: "tempo-num",
	style: { color: "#ffa8d5" }
}, Fl = { class: "range" }, Il = ["value"], Ll = { id: "bpm-output" }, Rl = {
	class: "muted",
	style: { "font-size": "11px" }
}, zl = { class: "field" }, Bl = ["value"], Vl = { class: "field" }, Hl = ["value"], Ul = { class: "checkrow" }, Wl = ["checked", "onChange"], Gl = {
	class: "panel",
	style: {
		position: "sticky",
		top: "20px"
	}
}, Kl = {
	class: "output",
	id: "prompt-output"
}, ql = { class: "counter" }, Jl = { id: "prompt-count" }, Yl = { class: "two-col" }, Xl = {
	class: "btn primary",
	type: "button",
	"data-action": "copy-prompt"
}, Zl = ["innerHTML"], Ql = {
	class: "btn ghost",
	type: "button",
	"data-action": "save-prompt"
}, $l = ["innerHTML"], eu = { class: "list-pills" }, tu = {
	__name: "StudioBuilder",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Kt(t.api.snapshot()), r = $(() => n.value?.settings || {}), i = $(() => n.value?.genre || {
			name: "",
			family: "",
			bpm: [0, 0]
		}), a = $(() => String(n.value?.prompt || "")), o = [
			["melancholic", "Меланхоличное"],
			["energetic", "Энергичное"],
			["romantic", "Романтичное"],
			["dark", "Мрачное"],
			["uplifting", "Воодушевляющее"],
			["dreamy", "Мечтательное"],
			["playful", "Игривое"],
			["epic", "Эпическое"],
			["nostalgic", "Ностальгическое"]
		], s = [
			["male", "Мужской"],
			["female", "Женский"],
			["duet", "Дуэт"]
		], c = [
			["Russian", "Русский"],
			["English", "Английский"],
			["Spanish", "Испанский"],
			["Kazakh", "Казахский"]
		], l = [
			["soft", "Мягкая"],
			["medium", "Средняя"],
			["high", "Мощная"]
		], u = [
			["studio", "Без публики и live-атмосферы"],
			["noWhisper", "Без шёпота"],
			["noChoir", "Без хора"],
			["noIntro", "Без длинного интро"]
		];
		function d() {
			let e = t.api.snapshot();
			e && (n.value = e);
		}
		function f(e, n) {
			t.api.update(e, n), d();
		}
		return cr(() => window.addEventListener("sunoboom:studio-updated", d)), fr(() => window.removeEventListener("sunoboom:studio-updated", d)), (e, t) => (K(), q(W, null, [J("div", hl, [
			t[17] ||= J("h3", null, "Параметры трека", -1),
			J("div", gl, [t[8] ||= J("label", { for: "b-genre" }, "Жанр", -1), J("select", {
				id: "b-genre",
				value: r.value.genre,
				onChange: t[0] ||= (e) => f("genre", e.target.value)
			}, [(K(!0), q(W, null, V(n.value.genres, (e) => (K(), q("option", {
				key: e.id,
				value: e.id
			}, A(e.name), 9, vl))), 128))], 40, _l)]),
			J("div", yl, [
				J("div", bl, [t[9] ||= J("label", { for: "b-mood" }, "Настроение", -1), J("select", {
					id: "b-mood",
					value: r.value.mood,
					onChange: t[1] ||= (e) => f("mood", e.target.value)
				}, [(K(), q(W, null, V(o, ([e, t]) => J("option", {
					key: e,
					value: e
				}, A(t), 9, Sl)), 64))], 40, xl)]),
				J("div", Cl, [t[10] ||= J("label", { for: "b-vocal" }, "Вокал", -1), J("select", {
					id: "b-vocal",
					value: r.value.vocal,
					onChange: t[2] ||= (e) => f("vocal", e.target.value)
				}, [(K(), q(W, null, V(s, ([e, t]) => J("option", {
					key: e,
					value: e
				}, A(t), 9, Tl)), 64))], 40, wl)]),
				J("div", El, [t[11] ||= J("label", { for: "b-lang" }, "Язык текста", -1), J("select", {
					id: "b-lang",
					value: r.value.language,
					onChange: t[3] ||= (e) => f("language", e.target.value)
				}, [(K(), q(W, null, V(c, ([e, t]) => J("option", {
					key: e,
					value: e
				}, A(t), 9, Ol)), 64))], 40, Dl)]),
				J("div", kl, [t[12] ||= J("label", { for: "b-energy" }, "Энергия", -1), J("select", {
					id: "b-energy",
					value: r.value.energy,
					onChange: t[4] ||= (e) => f("energy", e.target.value)
				}, [(K(), q(W, null, V(l, ([e, t]) => J("option", {
					key: e,
					value: e
				}, A(t), 9, jl)), 64))], 40, Al)])
			]),
			J("div", Ml, [
				J("label", Nl, [
					t[13] ||= X("Темп · ", -1),
					J("span", Pl, A(r.value.tempo), 1),
					t[14] ||= X(" BPM", -1)
				]),
				J("div", Fl, [J("input", {
					type: "range",
					id: "b-tempo",
					min: "65",
					max: "200",
					step: "1",
					value: r.value.tempo,
					onInput: t[5] ||= (e) => f("tempo", Number(e.target.value))
				}, null, 40, Il), J("output", Ll, A(r.value.tempo) + " BPM", 1)]),
				J("span", Rl, " Обычно для «" + A(i.value.name) + "»: " + A(i.value.bpm[0]) + "–" + A(i.value.bpm[1]) + " BPM ", 1)
			]),
			J("div", zl, [t[15] ||= J("label", { for: "b-theme" }, "Тема / история трека", -1), J("textarea", {
				id: "b-theme",
				rows: "2",
				value: r.value.theme,
				onInput: t[6] ||= (e) => f("theme", e.target.value),
				placeholder: "О чём будет песня?"
			}, null, 40, Bl)]),
			J("div", Vl, [t[16] ||= J("label", { for: "b-extra" }, "Дополнительные инструкции (необязательно)", -1), J("textarea", {
				id: "b-extra",
				rows: "2",
				value: r.value.extra,
				onInput: t[7] ||= (e) => f("extra", e.target.value),
				placeholder: "Например: memorable chorus, short guitar solo"
			}, null, 40, Hl)]),
			J("div", Ul, [(K(), q(W, null, V(u, ([e, t]) => J("label", { key: e }, [J("input", {
				type: "checkbox",
				checked: r.value[e],
				onChange: (t) => f(e, t.target.checked)
			}, null, 40, Wl), X(A(t), 1)])), 64))])
		]), J("div", Gl, [
			t[21] ||= J("div", { class: "eyebrow" }, "Готово к Suno", -1),
			t[22] ||= J("h3", null, "Твой промпт", -1),
			J("div", Kl, A(a.value), 1),
			J("div", ql, [t[18] ||= J("span", null, "Максимум 1000 символов", -1), J("b", Jl, A(a.value.length) + " / 1000", 1)]),
			J("div", Yl, [J("button", Xl, [J("span", {
				"aria-hidden": "true",
				innerHTML: n.value.icons.copy
			}, null, 8, Zl), t[19] ||= X(" Копировать ", -1)]), J("button", Ql, [J("span", {
				"aria-hidden": "true",
				innerHTML: n.value.icons.save
			}, null, 8, $l), t[20] ||= X(" Сохранить ", -1)])]),
			t[23] ||= J("div", { class: "spacer" }, null, -1),
			t[24] ||= J("div", { class: "notice" }, [J("strong", null, "Подсказка:"), X(" промпт задаёт стиль, а текст песни можно вводить отдельно в Suno. Результат генерации может отличаться от запроса.")], -1),
			t[25] ||= J("div", { class: "spacer" }, null, -1),
			t[26] ||= J("div", { class: "info-label" }, "Музыкальный профиль", -1),
			J("div", eu, [
				J("span", null, A(i.value.name), 1),
				J("span", null, A(i.value.family), 1),
				J("span", null, A(i.value.bpm[0]) + "–" + A(i.value.bpm[1]) + " BPM", 1)
			])
		])], 64));
	}
};
// src/vue/studio/legacyStudioBridge.js
function nu({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_STUDIO, n = document.getElementById("app");
	if (!n || !t || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector(".studio-grid");
		if (r?.target === a || (r &&= (r.unmount(), null), !a || !t.snapshot())) return;
		let o = e(a, tu, { api: t });
		o && (a.dataset.sbVueStudio = "true", r = {
			target: a,
			unmount: o
		});
	}
	let o = new MutationObserver(a);
	return o.observe(n, { childList: !0 }), a(), () => {
		i || (i = !0, o.disconnect(), r?.unmount(), r = null);
	};
}
// src/vue/studio/GenreMixer.vue
var ru = { class: "gm-layout" }, iu = { class: "gm-panel" }, au = { class: "gm-stack" }, ou = { class: "gm-row-top" }, su = { class: "gm-rank" }, cu = { class: "gm-field gm-genre-select" }, lu = ["for"], uu = [
	"id",
	"value",
	"data-gm-genre"
], du = ["label"], fu = ["value"], pu = ["data-gm-value"], mu = [
	"data-slot",
	"aria-label",
	"disabled"
], hu = { class: "gm-slider-line" }, gu = [
	"max",
	"value",
	"data-gm-weight",
	"aria-label"
], _u = { class: "gm-meter" }, vu = ["data-gm-meter"], yu = { class: "gm-sub" }, bu = { class: "gm-actions" }, xu = ["disabled"], Su = {
	class: "gm-mixture",
	"aria-label": "Доли музыкальных жанров"
}, Cu = ["data-gm-mixbar", "title"], wu = { class: "gm-form-grid" }, Tu = ["for"], Eu = [
	"id",
	"value",
	"data-gm-setting"
], Du = ["value"], Ou = { class: "gm-tempo" }, ku = ["checked"], Au = { class: "gm-tempo-row" }, ju = ["value", "disabled"], Mu = { id: "gm-bpm" }, Nu = { class: "gm-field" }, Pu = ["value"], Fu = { class: "gm-checks" }, Iu = ["data-gm-setting", "checked"], Lu = { class: "gm-panel gm-output-panel" }, Ru = {
	class: "gm-output",
	id: "gm-prompt",
	"aria-live": "polite"
}, zu = { class: "gm-prompt-meta" }, Bu = { id: "gm-count" }, Vu = { class: "gm-field" }, Hu = ["value"], Uu = { class: "gm-saved-list" }, Wu = {
	key: 0,
	class: "gm-muted"
}, Gu = { class: "gm-saved-actions" }, Ku = ["data-id"], qu = ["data-id", "aria-label"], Ju = {
	__name: "GenreMixer",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Kt(t.api.snapshot()), r = $(() => n.value?.rows || []), i = $(() => n.value?.genres || []), a = $(() => n.value?.settings || {}), o = $(() => n.value?.options || {}), s = $(() => n.value?.saved || []), c = $(() => n.value?.prompt || ""), l = $(() => n.value?.tempo || 115), u = $(() => n.value?.title || "");
		function d() {
			let e = t.api.snapshot();
			e && (n.value = e);
		}
		cr(() => window.addEventListener("sunoboom:mixer-updated", d)), fr(() => window.removeEventListener("sunoboom:mixer-updated", d));
		function f(e) {
			let t = new Set(r.value.filter((t, n) => n !== e).map((e) => e.id)), n = /* @__PURE__ */ new Map();
			for (let e of i.value) {
				if (t.has(e.id)) continue;
				let r = e.family || "Прочее";
				n.has(r) || n.set(r, []), n.get(r).push(e);
			}
			return [...n.entries()].sort(([e], [t]) => e.localeCompare(t, "ru")).map(([e, t]) => ({
				family: e,
				items: t.sort((e, t) => e.name.localeCompare(t.name, "ru"))
			}));
		}
		let p = $(() => [
			{
				key: "mood",
				label: "Настроение",
				choices: o.value.moods || []
			},
			{
				key: "energy",
				label: "Энергия",
				choices: o.value.energies || []
			},
			{
				key: "vocal",
				label: "Вокал",
				choices: o.value.vocals || []
			},
			{
				key: "language",
				label: "Язык",
				choices: o.value.languages || []
			}
		]), m = [
			["noLive", "Студийный звук без публики"],
			["noWhisper", "Без шёпота"],
			["noRasp", "Без хрипотцы"],
			["noChoir", "Без хора"],
			["noIntro", "Без длинного интро"]
		];
		return (e, t) => (K(), q(W, null, [t[14] ||= J("header", { class: "heading" }, [
			J("div", { class: "eyebrow" }, "Suno Studio · новый инструмент"),
			J("h1", null, [X("Жанровый "), J("span", { class: "gm-highlight" }, "миксер")]),
			J("p", null, "Соединяй от 2 до 4 жанров из Академии SUNOBOOM, задавай пропорции и создавай готовый Style-промпт для Suno.")
		], -1), J("div", ru, [J("section", iu, [
			t[3] ||= J("div", { class: "gm-section-head" }, [J("div", null, [J("h2", null, "Формула звучания"), J("p", null, "Меняй жанры и двигай ползунки — сумма всегда равна 100%.")]), J("span", { class: "gm-total" }, "Σ 100%")], -1),
			J("div", au, [(K(!0), q(W, null, V(r.value, (e, t) => (K(), q("article", {
				key: e.id,
				class: "gm-row",
				style: O({ "--gm-color": e.color })
			}, [
				J("div", ou, [
					J("span", su, A(String(t + 1).padStart(2, "0")), 1),
					J("div", cu, [J("label", { for: "gm-genre-" + t }, "Музыкальное направление", 8, lu), J("select", {
						id: "gm-genre-" + t,
						value: e.id,
						"data-gm-genre": t
					}, [(K(!0), q(W, null, V(f(t), (e) => (K(), q("optgroup", {
						key: e.family,
						label: e.family
					}, [(K(!0), q(W, null, V(e.items, (e) => (K(), q("option", {
						key: e.id,
						value: e.id
					}, A(e.name), 9, fu))), 128))], 8, du))), 128))], 8, uu)]),
					J("span", {
						class: "gm-percent",
						"data-gm-value": t
					}, A(e.weight) + "%", 9, pu),
					J("button", {
						type: "button",
						class: "gm-remove",
						"data-action": "gm-remove",
						"data-slot": t,
						"aria-label": "Убрать жанр " + e.name,
						title: "Убрать жанр",
						disabled: r.value.length <= 2
					}, "×", 8, mu)
				]),
				J("div", hu, [J("input", {
					type: "range",
					min: "5",
					max: 100 - 5 * (r.value.length - 1),
					step: "1",
					value: e.weight,
					"data-gm-weight": t,
					"aria-label": "Доля жанра " + e.name
				}, null, 8, gu), J("div", _u, [J("span", {
					"data-gm-meter": t,
					style: O({ width: e.weight + "%" })
				}, null, 12, vu)])]),
				J("p", yu, A(e.family) + " · " + A(e.tagline) + " · " + A(e.instruments), 1)
			], 4))), 128))]),
			J("div", bu, [J("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "gm-add",
				disabled: r.value.length >= 4
			}, "＋ Добавить жанр", 8, xu), t[0] ||= J("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "gm-equal"
			}, "Поровну", -1)]),
			J("div", Su, [(K(!0), q(W, null, V(r.value, (e) => (K(), q("span", {
				key: e.id,
				"data-gm-mixbar": e.id,
				style: O({
					width: e.weight + "%",
					background: e.color
				}),
				title: e.name + ": " + e.weight + "%"
			}, null, 12, Cu))), 128))]),
			t[4] ||= J("p", { class: "gm-muted" }, "Проценты — творческий ориентир для генерации, а не гарантия точного соотношения в готовой музыке.", -1),
			t[5] ||= J("div", { class: "gm-divider" }, null, -1),
			t[6] ||= J("h2", null, "Характер композиции", -1),
			J("div", wu, [(K(!0), q(W, null, V(p.value, (e) => (K(), q("div", {
				key: e.key,
				class: "gm-field"
			}, [J("label", { for: "gm-" + e.key }, A(e.label), 9, Tu), J("select", {
				id: "gm-" + e.key,
				value: a.value[e.key],
				"data-gm-setting": e.key
			}, [(K(!0), q(W, null, V(e.choices, ([e, t]) => (K(), q("option", {
				key: e,
				value: e
			}, A(t), 9, Du))), 128))], 8, Eu)]))), 128))]),
			J("div", Ou, [J("label", null, [J("input", {
				type: "checkbox",
				"data-gm-setting": "autoTempo",
				checked: a.value.autoTempo
			}, null, 8, ku), t[1] ||= X(" Определять темп по жанрам", -1)]), J("div", Au, [J("input", {
				id: "gm-tempo",
				type: "range",
				min: "65",
				max: "200",
				value: l.value,
				"data-gm-setting": "tempo",
				disabled: a.value.autoTempo
			}, null, 8, ju), J("b", Mu, A(l.value) + " BPM", 1)])]),
			J("div", Nu, [t[2] ||= J("label", { for: "gm-theme" }, "Тема песни (необязательно)", -1), J("textarea", {
				id: "gm-theme",
				rows: "2",
				maxlength: "170",
				"data-gm-setting": "theme",
				value: a.value.theme,
				placeholder: "Например: ночной город, встреча после долгой разлуки"
			}, null, 8, Pu)]),
			J("div", Fu, [(K(), q(W, null, V(m, ([e, t]) => J("label", { key: e }, [J("input", {
				type: "checkbox",
				"data-gm-setting": e,
				checked: a.value[e]
			}, null, 8, Iu), X(" " + A(t), 1)])), 64))])
		]), J("aside", Lu, [
			t[9] ||= J("div", { class: "eyebrow" }, "Результат микширования", -1),
			t[10] ||= J("h2", null, "Гибридный Style-промпт", -1),
			J("div", Ru, A(c.value), 1),
			J("div", zu, [t[7] ||= J("span", null, "На английском · готово для Suno", -1), J("b", Bu, A(c.value.length) + " / 1000", 1)]),
			t[11] ||= Zi("<div class=\"gm-output-actions\"><button type=\"button\" class=\"btn primary\" data-action=\"gm-copy\">Копировать</button><button type=\"button\" class=\"btn ghost\" data-action=\"gm-to-studio\">В Suno Studio</button></div><button type=\"button\" class=\"btn ghost gm-full\" data-action=\"gm-save-prompt\">Сохранить в «Мои промпты»</button><div class=\"gm-divider\"></div><h3>Мои сочетания</h3>", 4),
			J("div", Vu, [t[8] ||= J("label", { for: "gm-title" }, "Название сочетания", -1), J("input", {
				id: "gm-title",
				type: "text",
				maxlength: "90",
				"data-gm-title": "",
				value: u.value,
				placeholder: "Например: Северный электро-фолк"
			}, null, 8, Hu)]),
			t[12] ||= J("button", {
				type: "button",
				class: "btn ghost gm-full",
				"data-action": "gm-save-mix"
			}, "Сохранить формулу", -1),
			J("div", Uu, [s.value.length ? Z("", !0) : (K(), q("p", Wu, "Сохранённых сочетаний пока нет. Придумай свой микс и сохрани его.")), (K(!0), q(W, null, V(s.value, (e) => (K(), q("article", {
				key: e.id,
				class: "gm-saved"
			}, [J("div", null, [J("strong", null, A(e.title), 1), J("small", null, A(e.summary), 1)]), J("div", Gu, [J("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "gm-load",
				"data-id": e.id
			}, "Открыть", 8, Ku), J("button", {
				type: "button",
				class: "btn danger small",
				"data-action": "gm-delete",
				"data-id": e.id,
				"aria-label": "Удалить " + e.title
			}, "×", 8, qu)])]))), 128))]),
			t[13] ||= J("p", { class: "gm-muted" }, "Сохраняется в этом браузере и входит в общую JSON-копию данных SUNOBOOM. Подключение к ИИ для смешивания не требуется.", -1)
		])])], 64));
	}
};
// src/vue/studio/legacyMixerBridge.js
function Yu({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_MIXER, n = document.getElementById("app");
	if (!t || !n || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-mixer-root");
		if (r?.target === a || (r &&= (r.unmount(), null), !a || !t.snapshot())) return;
		let o = e(a, Ju, { api: t });
		o && (r = {
			target: a,
			unmount: o
		});
	}
	let o = new MutationObserver(a);
	return o.observe(n, { childList: !0 }), a(), () => {
		i || (i = !0, o.disconnect(), r?.unmount(), r = null);
	};
}
// src/vue/studio/PromptAuditor.vue
var Xu = {
	class: "sbpa-tabs",
	role: "group",
	"aria-label": "Источник промпта"
}, Zu = ["aria-pressed"], Qu = ["aria-pressed"], $u = {
	key: 0,
	class: "sbpa-manual"
}, ed = ["value"], td = ["value"], nd = ["value"], rd = {
	key: 1,
	class: "sbpa-context"
}, id = {
	id: "sbpa-results",
	"aria-live": "polite"
}, ad = { class: "sbpa-scoreline" }, od = {
	class: "sbpa-score",
	"aria-label": "Эвристическая оценка промпта"
}, sd = { class: "sbpa-score-info" }, cd = ["aria-valuenow"], ld = {
	key: 0,
	class: "sbpa-issues"
}, ud = {
	key: 1,
	class: "sbpa-clear"
}, dd = { class: "sbpa-actions" }, fd = {
	key: 0,
	type: "button",
	"data-sbpa-action": "load-studio"
}, pd = { id: "sbpa-proposal-slot" }, md = {
	key: 0,
	class: "sbpa-proposal"
}, hd = { key: 0 }, gd = { key: 1 }, _d = { key: 2 }, vd = {
	key: 3,
	class: "sbpa-alert"
}, yd = ["value"], bd = {
	__name: "PromptAuditor",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Kt(t.api.snapshot()), r = $(() => n.value?.mode === "manual"), i = $(() => n.value?.report || {
			score: 0,
			length: 0,
			issues: [],
			status: ""
		}), a = $(() => n.value?.genreId || ""), o = $(() => n.value?.genres || []), s = $(() => !!n.value?.proposalOpen), c = $(() => n.value?.proposal || {
			text: "",
			removed: [],
			complete: !0
		});
		function l() {
			let e = t.api.snapshot();
			e && (n.value = e);
		}
		return cr(() => window.addEventListener("sunoboom:auditor-updated", l)), fr(() => window.removeEventListener("sunoboom:auditor-updated", l)), (e, t) => (K(), q(W, null, [
			t[10] ||= J("header", { class: "sbpa-head" }, [J("div", null, [
				J("span", { class: "sbpa-eyebrow" }, "SUNOBOOM · ПРОВЕРКА"),
				J("h2", null, "Интеллектуальный аудитор промптов"),
				J("p", null, "Ищет повторы, противоречия, перегрузку и особенности жанра до отправки в Suno.")
			]), J("span", { class: "sbpa-local" }, "Проверка по правилам · без API")], -1),
			J("div", Xu, [J("button", {
				type: "button",
				"data-sbpa-action": "studio",
				class: k({ active: !r.value }),
				"aria-pressed": !r.value
			}, "Текущий промпт Studio", 10, Zu), J("button", {
				type: "button",
				"data-sbpa-action": "manual",
				class: k({ active: r.value }),
				"aria-pressed": r.value
			}, "Свой текст / вставка", 10, Qu)]),
			r.value ? (K(), q("div", $u, [
				t[0] ||= J("label", { for: "sbpa-text" }, "Текст промпта", -1),
				J("textarea", {
					id: "sbpa-text",
					rows: "5",
					spellcheck: "false",
					placeholder: "Вставь текст на русском или английском…",
					value: n.value.manual
				}, null, 8, ed),
				t[1] ||= J("label", { for: "sbpa-genre" }, "Жанр для сопоставления с Академией", -1),
				J("select", {
					id: "sbpa-genre",
					value: a.value
				}, [(K(!0), q(W, null, V(o.value, (e) => (K(), q("option", {
					key: e.id,
					value: e.id
				}, A(e.name), 9, nd))), 128))], 8, td)
			])) : (K(), q("p", rd, " Проверяется актуальный промпт конструктора. Изменения настроек Studio отражаются здесь автоматически. ")),
			J("div", id, [J("div", ad, [
				J("div", od, [X(A(i.value.score), 1), t[2] ||= J("small", null, "/ 100", -1)]),
				J("div", sd, [
					J("strong", null, A(i.value.status), 1),
					t[3] ||= J("span", null, "Оценка ориентировочная: проверяется структура текста, а не качество будущей музыки.", -1),
					J("div", {
						class: "sbpa-meter",
						role: "progressbar",
						"aria-label": "Оценка промпта",
						"aria-valuenow": i.value.score,
						"aria-valuemin": "0",
						"aria-valuemax": "100"
					}, [J("span", { style: O({ width: i.value.score + "%" }) }, null, 4)], 8, cd)
				]),
				J("div", { class: k(["sbpa-limit", { over: i.value.length > 1e3 }]) }, A(i.value.length) + " / 1000 символов ", 3)
			]), i.value.issues?.length ? (K(), q("ul", ld, [(K(!0), q(W, null, V(i.value.issues, (e, t) => (K(), q("li", {
				key: t,
				class: k(["sbpa-item", "sbpa-" + e.kind])
			}, [J("div", null, [
				J("strong", null, A(e.title), 1),
				J("p", null, A(e.detail), 1),
				J("small", null, A(e.fix), 1)
			])], 2))), 128))])) : (K(), q("p", ud, " Явных противоречий и повторов по проверяемым правилам не найдено. "))]),
			J("div", dd, [t[4] ||= J("button", {
				type: "button",
				"data-sbpa-action": "preview",
				class: "sbpa-primary"
			}, " Показать улучшенный вариант ", -1), r.value ? (K(), q("button", fd, " Вставить текущий промпт Studio ")) : Z("", !0)]),
			J("div", pd, [s.value ? (K(), q("div", md, [
				J("h4", null, [t[5] ||= X("Предлагаемый вариант ", -1), J("small", null, A(c.value.text.length) + " / 1000", 1)]),
				c.value.removed.length ? (K(), q("p", gd, "Удалено фрагментов: " + A(c.value.removed.length) + ". Проверь смысл до копирования.", 1)) : (K(), q("p", hd, "Удалять нечего: текст уже без точных повторов.")),
				c.value.removed.length ? (K(), q("details", _d, [t[6] ||= J("summary", null, "Что изменилось", -1), J("ul", null, [(K(!0), q(W, null, V(c.value.removed, (e, t) => (K(), q("li", { key: t }, [J("b", null, A(e.reason) + ":", 1), X(" " + A(e.part), 1)]))), 128))])])) : Z("", !0),
				c.value.complete ? Z("", !0) : (K(), q("p", vd, " Автоматического сокращения недостаточно. Уменьши текст вручную минимум на " + A(c.value.text.length - 1e3) + " символов. ", 1)),
				t[7] ||= J("label", { for: "sbpa-preview-text" }, "Редактируемый предпросмотр", -1),
				J("textarea", {
					id: "sbpa-preview-text",
					rows: "5",
					spellcheck: "false",
					value: c.value.text
				}, null, 8, yd),
				t[8] ||= J("div", { class: "sbpa-actions" }, [J("button", {
					type: "button",
					"data-sbpa-action": "copy-preview",
					class: "sbpa-primary"
				}, " Подтвердить и скопировать "), J("button", {
					type: "button",
					"data-sbpa-action": "close-preview"
				}, "Закрыть")], -1),
				t[9] ||= J("small", null, "Исходный промпт и параметры Studio не меняются. Копируется только текст предпросмотра после нажатия.", -1)
			])) : Z("", !0)]),
			t[11] ||= J("p", { class: "sbpa-foot" }, " Аудитор не вызывает Gemini и не оценивает реальный звук. Жанровые отклонения могут быть творческим решением, а рекомендации не изменяют исходник без твоего действия. ", -1)
		], 64));
	}
};
// src/vue/studio/legacyAuditorBridge.js
function xd({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_AUDITOR, n = document.getElementById("app");
	if (!t || !n || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sbpa-auditor");
		if (r?.target === a || (r &&= (r.unmount(), null), !a || !t.snapshot())) return;
		let o = e(a, bd, { api: t });
		o && (r = {
			target: a,
			unmount: o
		});
	}
	let o = new MutationObserver(a);
	return o.observe(n, { childList: !0 }), a(), () => {
		i || (i = !0, o.disconnect(), r?.unmount(), r = null);
	};
}
// src/vue/studio/ArrangementPanel.vue
var Sd = ["data-sba-id", "data-sba-energy"], Cd = { class: "sba-block-head" }, wd = ["data-sba-drag", "aria-label"], Td = { class: "sba-index" }, Ed = {
	class: "sba-emoji",
	"aria-hidden": "true"
}, Dd = { class: "sba-head-energy" }, Od = { class: "sba-block-actions" }, kd = ["data-id", "disabled"], Ad = ["data-id", "disabled"], jd = ["data-id"], Md = ["data-id"], Nd = { class: "sba-block-fields" }, Pd = ["data-id", "value"], Fd = ["value"], Id = ["data-id", "value"], Ld = ["value"], Rd = ["data-id", "value"], zd = ["value"], Bd = { class: "sba-energy-field" }, Vd = ["data-sba-output"], Hd = ["value", "data-id"], Ud = { class: "sba-instrument-field" }, Wd = ["for"], Gd = { class: "sba-instrument-row" }, Kd = [
	"id",
	"data-id",
	"value"
], qd = ["id", "innerHTML"], Jd = ["id"], Yd = { class: "sba-sound-head" }, Xd = ["data-id"], Zd = ["data-id"], Qd = ["id"], $d = {
	key: 0,
	class: "sba-sound-back"
}, ef = ["data-id"], tf = [
	"data-sba-sound-search",
	"data-id",
	"value",
	"placeholder"
], nf = ["id"], rf = { class: "sba-sound-info" }, af = { key: 0 }, of = ["data-id", "data-genre-id"], sf = {
	key: 0,
	class: "sba-sound-none"
}, cf = { class: "sba-sound-group" }, lf = [
	"disabled",
	"aria-disabled",
	"data-id",
	"data-sound-value"
], uf = {
	key: 0,
	class: "sba-sound-none"
}, df = {
	key: 1,
	class: "sba-sound-foot"
}, ff = ["data-id"], pf = {
	key: 0,
	class: "sba-custom-label"
}, mf = ["data-id", "value"], hf = ["innerHTML"], gf = ["data-id", "aria-label"], _f = {
	key: 0,
	class: "sba-empty"
}, vf = ["aria-label"], yf = [
	"data-sba-snake-id",
	"data-sba-energy",
	"aria-label",
	"title"
], bf = { class: "sba-snake-num" }, xf = {
	class: "sba-snake-icon",
	"aria-hidden": "true"
}, Sf = { class: "sba-snake-title" }, Cf = { class: "sba-snake-level" }, wf = ["title"], Tf = {
	key: 0,
	class: "sba-snake-more"
}, Ef = {
	key: 1,
	class: "sba-snake-empty"
}, Df = ["data-sba-hub-from"], Of = { class: "sba-transition-hub-route" }, kf = { class: "sba-transition-hub-number" }, Af = { class: "sba-transition-hub-names" }, jf = { class: "sba-transition-hub-controls" }, Mf = [
	"data-id",
	"value",
	"aria-label"
], Nf = ["value"], Pf = [
	"data-id",
	"value",
	"aria-label"
], Ff = ["value"], If = [
	"data-id",
	"value",
	"aria-label"
], Lf = ["value"], Rf = { class: "sba-transition-hub-actions" }, zf = ["data-id", "title"], Bf = ["data-id"], Vf = {
	key: 1,
	class: "sba-transition-hub-empty"
}, Hf = ["title"], Uf = { class: "sba-chart-column" }, Wf = {
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
		let t = e, n = /* @__PURE__ */ Kt(t.api.snapshot()), r = $(() => n.value?.blocks || []), i = $(() => n.value?.sections || []), a = $(() => n.value?.voices || []), o = $(() => n.value?.energies || {}), s = $(() => n.value?.transitions || []), c = $(() => n.value?.transitionTypes || []), l = $(() => n.value?.transitionLengths || []), u = $(() => n.value?.transitionStrengths || []), d = $(() => n.value?.snakeExpanded ? r.value : r.value.slice(0, 12)), f = $(() => n.value?.transitionHubExpanded ? s.value : s.value.slice(0, 3)), p = [
			2,
			4,
			8,
			12,
			16,
			24,
			32
		];
		function m() {
			let e = t.api.snapshot();
			e && (n.value = e);
		}
		cr(() => window.addEventListener("sunoboom:arranger-updated", m)), fr(() => window.removeEventListener("sunoboom:arranger-updated", m));
		function h(e) {
			let t = [];
			for (let n = 0; n < d.value.length; n += e) t.push({
				id: n,
				reverse: Math.floor(n / e) % 2 == 1,
				continued: n + e < d.value.length,
				items: d.value.slice(n, n + e)
			});
			return t;
		}
		let g = $(() => d.value.map((e, t) => t + 1 + ". " + e.snakeLabel).join(" → "));
		return (t, n) => e.kind === "cards" ? (K(), q(W, { key: 0 }, [(K(!0), q(W, null, V(r.value, (e, t) => (K(), q(W, { key: e.id }, [
			J("article", {
				class: "sba-block",
				"data-sba-id": e.id,
				"data-sba-energy": e.energy
			}, [J("div", Cd, [
				J("span", {
					class: "sba-drag",
					draggable: "true",
					"data-sba-drag": e.id,
					title: "Перетащить блок",
					"aria-label": "Перетащить " + e.sectionName
				}, "⠿", 8, wd),
				J("span", Td, A(String(t + 1).padStart(2, "0")), 1),
				J("span", Ed, A(e.icon), 1),
				J("strong", null, A(e.label), 1),
				J("span", Dd, "Энергия " + A(e.energy) + "/5", 1),
				J("div", Od, [
					J("button", {
						type: "button",
						"data-sba-action": "up",
						"data-id": e.id,
						"aria-label": "Переместить вверх",
						disabled: t === 0
					}, "↑", 8, kd),
					J("button", {
						type: "button",
						"data-sba-action": "down",
						"data-id": e.id,
						"aria-label": "Переместить вниз",
						disabled: t === r.value.length - 1
					}, "↓", 8, Ad),
					J("button", {
						type: "button",
						"data-sba-action": "duplicate",
						"data-id": e.id,
						"aria-label": "Дублировать блок"
					}, "⧉", 8, jd),
					J("button", {
						type: "button",
						"data-sba-action": "remove",
						"data-id": e.id,
						"aria-label": "Удалить блок"
					}, "×", 8, Md)
				])
			]), J("div", Nd, [
				J("label", null, [n[0] ||= X("Раздел ", -1), J("select", {
					"data-sba-field": "type",
					"data-id": e.id,
					value: e.type
				}, [(K(!0), q(W, null, V(i.value, (e) => (K(), q("option", {
					key: e.id,
					value: e.id
				}, A(e.name), 9, Fd))), 128))], 8, Pd)]),
				J("label", null, [n[1] ||= X("Тактов ", -1), J("select", {
					"data-sba-field": "bars",
					"data-id": e.id,
					value: e.bars
				}, [(K(), q(W, null, V(p, (e) => J("option", {
					key: e,
					value: e
				}, A(e), 9, Ld)), 64))], 8, Id)]),
				J("label", null, [n[2] ||= X("Вокал ", -1), J("select", {
					"data-sba-field": "vocal",
					"data-id": e.id,
					value: e.vocal
				}, [(K(!0), q(W, null, V(a.value, (e) => (K(), q("option", {
					key: e.id,
					value: e.id
				}, A(e.name), 9, zd))), 128))], 8, Rd)]),
				J("label", Bd, [
					n[3] ||= X("Энергия ", -1),
					J("output", { "data-sba-output": e.id }, A(e.energy) + "/5 · " + A(o.value[e.energy]), 9, Vd),
					J("input", {
						type: "range",
						min: "1",
						max: "5",
						step: "1",
						value: e.energy,
						"data-sba-field": "energy",
						"data-id": e.id
					}, null, 8, Hd)
				]),
				J("div", Ud, [
					J("label", { for: "sba-instruments-" + e.id }, "Инструменты / приём", 8, Wd),
					J("div", Gd, [J("input", {
						type: "text",
						id: "sba-instruments-" + e.id,
						maxlength: "300",
						"data-sba-field": "instruments",
						"data-id": e.id,
						value: e.instruments,
						placeholder: "Введи вручную или выбери рекомендацию",
						autocomplete: "off"
					}, null, 8, Kd)]),
					J("div", {
						class: "sba-quick-sounds",
						id: "sba-quick-" + e.id,
						innerHTML: e.quickSounds
					}, null, 8, qd),
					e.soundPanel ? (K(), q("div", {
						key: 0,
						class: "sba-sound-panel",
						id: "sba-sound-panel-" + e.id,
						"aria-label": "Выбор инструментов и приёмов"
					}, [
						J("div", Yd, [n[4] ||= J("strong", null, "Библиотека инструментов и приёмов", -1), J("button", {
							type: "button",
							"data-sba-action": "sound-close",
							"data-id": e.id,
							"aria-label": "Закрыть подбор"
						}, "×", 8, Xd)]),
						J("button", {
							type: "button",
							class: "sba-sound-genre-trigger",
							"data-sba-action": "sound-switch-mode",
							"data-id": e.id
						}, [
							n[5] ||= X(" Жанр: ", -1),
							J("b", null, A(e.soundPanel.genreName), 1),
							n[6] ||= J("span", null, "⌄", -1)
						], 8, Zd),
						J("div", { id: "sba-sound-body-" + e.id }, [
							e.soundPanel.mode === "genres" ? (K(), q("div", $d, [J("button", {
								type: "button",
								"data-sba-action": "sound-switch-mode",
								"data-id": e.id
							}, " ← К инструментам ", 8, ef)])) : Z("", !0),
							J("input", {
								type: "search",
								class: "sba-sound-search",
								"data-sba-sound-search": e.soundPanel.mode,
								"data-id": e.id,
								value: e.soundPanel.query,
								placeholder: e.soundPanel.mode === "genres" ? "Поиск по всей Академии..." : "Поиск инструмента или приёма...",
								autocomplete: "off",
								"aria-label": "Поиск инструментов или жанров"
							}, null, 8, tf),
							J("div", {
								class: "sba-sound-list",
								id: "sba-sound-results-" + e.id
							}, [e.soundPanel.mode === "genres" ? (K(), q(W, { key: 0 }, [
								J("div", rf, [X(" Найдено жанров: " + A(e.soundPanel.total) + " ", 1), e.soundPanel.total > e.soundPanel.matches.length ? (K(), q("span", af, " · уточни запрос ")) : Z("", !0)]),
								(K(!0), q(W, null, V(e.soundPanel.matches, (t) => (K(), q("button", {
									key: t.id,
									type: "button",
									class: "sba-sound-genre-row",
									"data-sba-action": "sound-set-genre",
									"data-id": e.id,
									"data-genre-id": t.id
								}, [J("span", null, A(t.name), 1), J("small", null, A(t.family), 1)], 8, of))), 128)),
								e.soundPanel.matches.length ? Z("", !0) : (K(), q("p", sf, " Жанр не найден "))
							], 64)) : (K(), q(W, { key: 1 }, [(K(!0), q(W, null, V(e.soundPanel.groups, (t) => (K(), q(W, { key: t.title }, [J("div", cf, A(t.title), 1), (K(!0), q(W, null, V(t.items, (t) => (K(), q("button", {
								key: t.name,
								type: "button",
								class: "sba-sound-option",
								disabled: t.added,
								"aria-disabled": t.added,
								"data-sba-action": "sound-add",
								"data-id": e.id,
								"data-sound-value": t.name
							}, [J("span", null, A(t.name), 1), J("small", null, A(t.added ? "✓ Добавлено" : "+ Добавить"), 1)], 8, lf))), 128))], 64))), 128)), e.soundPanel.groups.length ? Z("", !0) : (K(), q("p", uf, " Совпадений нет. Можно ввести инструмент вручную. "))], 64))], 8, nf),
							e.soundPanel.mode === "genres" ? Z("", !0) : (K(), q("div", df, [n[7] ||= J("span", null, "Нажми «Добавить», чтобы дополнить поле. Свой текст сохраняется.", -1), J("button", {
								type: "button",
								"data-sba-action": "sound-clear",
								"data-id": e.id
							}, " Очистить поле ", 8, ff)]))
						], 8, Qd)
					], 8, Jd)) : Z("", !0)
				]),
				e.type === "custom" ? (K(), q("label", pf, [n[8] ||= X("Своё название ", -1), J("input", {
					type: "text",
					maxlength: "48",
					"data-sba-field": "customName",
					"data-id": e.id,
					value: e.customName,
					placeholder: "Название для тега Suno"
				}, null, 8, mf)])) : Z("", !0)
			])], 8, Sd),
			e.transitionHTML ? (K(), q("div", {
				key: 0,
				style: { display: "contents" },
				innerHTML: e.transitionHTML
			}, null, 8, hf)) : Z("", !0),
			J("button", {
				type: "button",
				class: "sba-between-add",
				"data-sba-action": "insert-after",
				"data-id": e.id,
				"aria-label": "Добавить блок после " + e.label
			}, [...n[9] ||= [J("span", { "aria-hidden": "true" }, "＋", -1), X(" Добавить после ", -1)]], 8, gf)
		], 64))), 128)), r.value.length ? Z("", !0) : (K(), q("div", _f, "Пока нет блоков. Добавь первый фрагмент снизу."))], 64)) : e.kind === "snake" ? (K(), q(W, { key: 1 }, [r.value.length ? (K(), q(W, { key: 0 }, [(K(), q(W, null, V([6, 3], (e) => J("div", {
			key: e,
			class: k(e === 6 ? "sba-snake-desktop" : "sba-snake-mobile"),
			role: "group",
			"aria-label": "Схема блоков: " + g.value
		}, [(K(!0), q(W, null, V(h(e), (e) => (K(), q("div", {
			key: e.id,
			class: k(["sba-snake-row", {
				"sba-snake-reverse": e.reverse,
				"sba-snake-continues": e.continued
			}])
		}, [(K(!0), q(W, null, V(e.items, (e) => (K(), q("button", {
			key: e.id,
			type: "button",
			draggable: "true",
			class: "sba-snake-chip",
			"data-sba-snake-id": e.id,
			"data-sba-energy": e.energy,
			"aria-label": "Переместить " + e.snakeLabel + ", позиция " + (e.index + 1) + " из " + r.value.length + ", энергия " + e.energy + "/5",
			title: e.index + 1 + ". " + e.snakeLabel + " · энергия " + e.energy + "/5 · перетащи для перестановки"
		}, [
			J("span", bf, A(e.index + 1), 1),
			J("span", xf, A(e.icon), 1),
			J("span", Sf, A(e.snakeLabel), 1),
			J("span", Cf, A(e.energy) + "/5", 1),
			e.hasTransition ? (K(), q("span", {
				key: 0,
				class: "sba-snake-transition",
				title: "Переход: " + e.transitionLabel,
				"aria-hidden": "true"
			}, "↝", 8, wf)) : Z("", !0)
		], 8, yf))), 128))], 2))), 128))], 10, vf)), 64)), d.value.length < r.value.length ? (K(), q("p", Tf, " … и ещё " + A(r.value.length - d.value.length) + " блоков ", 1)) : Z("", !0)], 64)) : (K(), q("p", Ef, "Добавь первый блок, и здесь появится схема композиции."))], 64)) : e.kind === "transitions" ? (K(), q(W, { key: 2 }, [s.value.length ? (K(!0), q(W, { key: 0 }, V(f.value, (e) => (K(), q("div", {
			key: e.id,
			class: k(["sba-transition-hub-row", { "sba-transition-hub-active": e.current.type !== "none" }]),
			"data-sba-hub-from": e.id
		}, [
			J("div", Of, [J("span", kf, A(e.index + 1) + " → " + A(e.index + 2), 1), J("span", Af, [
				X(A(e.from) + " ", 1),
				n[10] ||= J("b", null, "→", -1),
				X(" " + A(e.to), 1)
			])]),
			J("div", jf, [
				J("label", null, [n[11] ||= X("Эффект ", -1), J("select", {
					"data-sba-transition": "type",
					"data-id": e.id,
					value: e.current.type,
					"aria-label": "Переход " + (e.index + 1) + " к " + (e.index + 2)
				}, [(K(!0), q(W, null, V(c.value, (e) => (K(), q("option", {
					key: e.id,
					value: e.id
				}, A(e.name), 9, Nf))), 128))], 8, Mf)]),
				J("label", null, [n[12] ||= X("Длина ", -1), J("select", {
					"data-sba-transition": "length",
					"data-id": e.id,
					value: e.current.length,
					"aria-label": "Длительность перехода " + (e.index + 1)
				}, [(K(!0), q(W, null, V(l.value, (e) => (K(), q("option", {
					key: e.id,
					value: e.id
				}, A(e.name), 9, Ff))), 128))], 8, Pf)]),
				J("label", null, [n[13] ||= X("Сила ", -1), J("select", {
					"data-sba-transition": "strength",
					"data-id": e.id,
					value: e.current.strength,
					"aria-label": "Выраженность перехода " + (e.index + 1)
				}, [(K(!0), q(W, null, V(u.value, (e) => (K(), q("option", {
					key: e.id,
					value: e.id
				}, A(e.name), 9, Lf))), 128))], 8, If)])
			]),
			J("div", Rf, [J("button", {
				type: "button",
				"data-sba-action": "transition-suggest",
				"data-id": e.id,
				title: "Совет: " + e.advice
			}, "✧ Совет", 8, zf), J("button", {
				type: "button",
				"data-sba-action": "transition-hub-jump",
				"data-id": e.id
			}, "Подробнее ↓", 8, Bf)])
		], 10, Df))), 128)) : (K(), q("p", Vf, "Добавь второй блок, и здесь можно будет настроить переходы."))], 64)) : e.kind === "energy" ? (K(!0), q(W, { key: 3 }, V(r.value, (e) => (K(), q("div", {
			key: e.id,
			class: "sba-chart-step",
			title: e.label + " · " + e.energy + "/5",
			style: O({
				"--energy": e.energy,
				"--bar-width": 100 / r.value.length + "%"
			})
		}, [J("div", Uf, [J("i", { style: O({ "--level": e.energy }) }, null, 4)]), J("small", null, A(e.icon), 1)], 12, Hf))), 128)) : Z("", !0);
	}
}, Gf = ["aria-expanded"], Kf = { id: "sba-picked-label" }, qf = ["hidden"], Jf = { class: "sba-preset-search-row" }, Yf = ["value"], Xf = {
	class: "sba-preset-filters",
	role: "group",
	"aria-label": "Тип вариантов"
}, Zf = ["data-filter", "aria-pressed"], Qf = {
	id: "sba-preset-results",
	class: "sba-preset-results",
	role: "listbox",
	"aria-label": "Доступные шаблоны и жанры"
}, $f = { class: "sba-preset-group-title" }, ep = { key: 0 }, tp = ["aria-selected", "data-choice"], np = {
	key: 0,
	class: "sba-preset-no-results"
}, rp = {
	__name: "ArrangementPicker",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Kt(t.api.snapshot()), r = $(() => n.value?.picker || {
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
		return cr(() => window.addEventListener("sunoboom:arranger-updated", i)), fr(() => window.removeEventListener("sunoboom:arranger-updated", i)), (e, t) => (K(), q(W, null, [
			t[2] ||= J("span", { class: "sba-preset-caption" }, "Шаблон композиции / жанр", -1),
			J("button", {
				type: "button",
				id: "sba-presets",
				class: "sba-preset-trigger",
				"data-sba-action": "menu-toggle",
				"aria-haspopup": "dialog",
				"aria-expanded": r.value.open,
				"aria-controls": "sba-preset-menu"
			}, [J("span", Kf, A(r.value.selected), 1), t[0] ||= J("span", {
				class: "sba-preset-chevron",
				"aria-hidden": "true"
			}, "⌄", -1)], 8, Gf),
			J("div", {
				id: "sba-preset-menu",
				class: "sba-preset-menu",
				role: "dialog",
				"aria-label": "Поиск шаблона или жанра",
				hidden: !r.value.open
			}, [
				J("div", Jf, [J("input", {
					type: "search",
					id: "sba-preset-search",
					autocomplete: "off",
					value: r.value.query,
					placeholder: "Найти жанр или шаблон...",
					"aria-label": "Поиск жанра"
				}, null, 8, Yf), t[1] ||= J("button", {
					type: "button",
					"data-sba-action": "menu-close",
					"aria-label": "Закрыть меню"
				}, "×", -1)]),
				J("div", Xf, [(K(!0), q(W, null, V([
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
				], (e) => (K(), q("button", {
					key: e.id,
					type: "button",
					"data-sba-action": "menu-filter",
					"data-filter": e.id,
					"aria-pressed": r.value.filter === e.id
				}, A(e.title), 9, Zf))), 128))]),
				J("div", Qf, [(K(!0), q(W, null, V(r.value.groups, (e) => (K(), q(W, { key: e.title }, [J("div", $f, [X(A(e.title) + " ", 1), e.count === null ? Z("", !0) : (K(), q("small", ep, A(e.count), 1))]), (K(!0), q(W, null, V(e.items, (e) => (K(), q("button", {
					key: e.key,
					type: "button",
					role: "option",
					"aria-selected": e.key === r.value.selectedKey,
					"data-sba-action": "menu-choose",
					"data-choice": e.key
				}, [J("span", null, A(e.title), 1), J("small", null, A(e.subtitle), 1)], 8, tp))), 128))], 64))), 128)), r.value.groups.length ? Z("", !0) : (K(), q("p", np, " Ничего не найдено. Попробуй другое название или направление. "))])
			], 8, qf)
		], 64));
	}
}, ip = {
	class: "sba-preview-tabs",
	role: "group",
	"aria-label": "Тип результата"
}, ap = ["aria-pressed"], op = ["aria-pressed"], sp = ["value"], cp = {
	class: "sba-preview-count",
	id: "sba-preview-count"
}, lp = {
	id: "sba-transfer-confirm",
	"aria-live": "polite"
}, up = {
	key: 0,
	class: "sba-transfer-preview"
}, dp = ["hidden"], fp = [
	["#sba-cards", "cards"],
	["#sba-snake-track", "snake"],
	["#sba-transition-hub-list", "transitions"],
	["#sba-energy-chart", "energy"],
	[
		".sba-preset-picker",
		"picker",
		rp
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
				let t = e, n = /* @__PURE__ */ Kt(t.api.snapshot()), r = $(() => n.value?.result || {
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
				return cr(() => window.addEventListener("sunoboom:arranger-updated", i)), fr(() => window.removeEventListener("sunoboom:arranger-updated", i)), (e, t) => (K(), q(W, null, [
					t[3] ||= J("div", { class: "sba-result-header" }, [
						J("span", { class: "sba-eyebrow" }, "ПРЕДПРОСМОТР"),
						J("h3", null, "Результат для Suno"),
						J("p", null, "Lyrics — теги по секциям; Style — короткое описание динамики.")
					], -1),
					J("div", ip, [J("button", {
						type: "button",
						"data-sba-action": "tab",
						"data-tab": "lyrics",
						"aria-pressed": r.value.tab === "lyrics"
					}, "Теги Lyrics", 8, ap), J("button", {
						type: "button",
						"data-sba-action": "tab",
						"data-tab": "style",
						"aria-pressed": r.value.tab === "style"
					}, "Style", 8, op)]),
					J("textarea", {
						id: "sba-preview",
						readonly: "",
						spellcheck: "false",
						"aria-label": "Готовые теги структуры песни",
						value: r.value.text
					}, null, 8, sp),
					J("div", cp, A(r.value.count), 1),
					t[4] ||= J("div", { class: "sba-result-actions" }, [J("button", {
						type: "button",
						class: "sba-btn sba-copy-btn",
						"data-sba-action": "copy"
					}, " Копировать результат "), J("button", {
						type: "button",
						class: "sba-btn sba-transfer-btn",
						"data-sba-action": "prepare-transfer"
					}, " Перенести стиль в Studio ")], -1),
					J("div", lp, [r.value.transfer ? (K(), q("div", up, [
						t[0] ||= J("strong", null, "Предпросмотр переноса в Style", -1),
						t[1] ||= J("p", null, "Добавим описание аранжировки в дополнительные инструкции Suno Studio, не удаляя твои записи.", -1),
						J("code", null, A(r.value.transfer.candidate), 1),
						t[2] ||= J("div", { class: "sba-preview-buttons" }, [J("button", {
							type: "button",
							"data-sba-action": "transfer-accept"
						}, "Подтвердить перенос"), J("button", {
							type: "button",
							"data-sba-action": "transfer-cancel"
						}, "Отмена")], -1),
						J("small", null, "Итоговый промпт Studio: " + A(r.value.transfer.promptLength) + " / 1000 символов", 1)
					])) : Z("", !0)]),
					J("p", {
						id: "sba-message",
						class: "sba-message",
						role: "status",
						"aria-live": "polite",
						hidden: !r.value.message
					}, A(r.value.message), 9, dp),
					t[5] ||= J("div", { class: "sba-help" }, [
						J("strong", null, "Как применять"),
						J("p", null, [
							X("Теги секций вставляй в поле "),
							J("b", null, "Lyrics"),
							X(" в Suno рядом с текстом песни. Краткую динамику можно добавить в "),
							J("b", null, "Style"),
							X(" через Suno Studio после подтверждения.")
						]),
						J("p", null, "Ориентир длительности рассчитан по 4/4 и BPM Studio, это не гарантия точной длины аудио.")
					], -1)
				], 64));
			}
		}
	]
];
function pp({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ARRANGER, n = document.getElementById("app");
	if (!n || !t || typeof t.snapshot != "function") return () => {};
	let r = /* @__PURE__ */ new Map(), i = !1;
	function a() {
		if (!i) for (let [i, a, o = Wf] of fp) {
			let s = n.querySelector(i), c = r.get(a);
			if (c?.target === s || (c && (c.unmount(), r.delete(a)), !s || !t.snapshot())) continue;
			let l = e(s, o, o === Wf ? {
				api: t,
				kind: a
			} : { api: t });
			l && r.set(a, {
				target: s,
				unmount: l
			});
		}
	}
	let o = new MutationObserver(a);
	return o.observe(n, { childList: !0 }), a(), () => {
		if (!i) {
			i = !0, o.disconnect();
			for (let e of r.values()) e.unmount();
			r.clear();
		}
	};
}
// src/vue/entry.js
var mp = Vo(), hp = /* @__PURE__ */ new WeakMap();
function gp(e) {
	return typeof document > "u" ? null : typeof e == "string" ? document.querySelector(e) : e;
}
function _p(e, t, n = {}) {
	let r = gp(e);
	if (!r || r.nodeType !== 1 || !t) return null;
	let i = hp.get(r);
	i && i.unmount();
	let a = r.innerHTML, o = Co(Uo, {
		component: t,
		componentProps: n
	});
	o.use(mp);
	try {
		o.mount(r);
	} catch (e) {
		return r.innerHTML = a, console.warn("[SUNOBOOM] Vue mount failed; legacy navigation retained.", e), null;
	}
	return hp.set(r, o), () => {
		hp.get(r) === o && (o.unmount(), hp.delete(r));
	};
}
function vp(e) {
	let t = gp(e);
	if (!t) return;
	let n = hp.get(t);
	n && (n.unmount(), hp.delete(t));
}
function yp() {
	return Qo({
		mountVueFeature: _p,
		unmountVueFeature: vp
	});
}
function bp() {
	return Ls({ mountVueFeature: _p });
}
function xp() {
	return ml({ mountVueFeature: _p });
}
function Sp() {
	return nu({ mountVueFeature: _p });
}
function Cp() {
	return Yu({ mountVueFeature: _p });
}
function wp() {
	return xd({ mountVueFeature: _p });
}
function Tp() {
	return pp({ mountVueFeature: _p });
}
export { _p as mountVueFeature, bp as startLegacyAcademy, Tp as startLegacyArranger, wp as startLegacyAuditor, xp as startLegacyGenreDetail, Cp as startLegacyMixer, yp as startLegacyNavigation, Sp as startLegacyStudio, vp as unmountVueFeature };
