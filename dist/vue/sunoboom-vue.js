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
function Ce(e, t) {
	return e.findIndex((e) => Se(e, t));
}
var we = (e) => !!(e && e.__v_isRef === !0), A = (e) => g(e) ? e : e == null ? "" : d(e) || v(e) && (e.toString === b || !h(e.toString)) ? we(e) ? A(e.value) : JSON.stringify(e, Te, 2) : String(e), Te = (e, t) => we(t) ? Te(e, t.value) : f(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Ee(t, r) + " =>"] = n, e), {}) } : p(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Ee(e)) } : _(t) ? Ee(t) : v(t) && !d(t) && !S(t) ? String(t) : t, Ee = (e, t = "") => _(e) ? `Symbol(${e.description ?? t})` : e, j, De = class {
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
function Oe(e) {
	return new De(e);
}
function ke() {
	return j;
}
var M, Ae = /* @__PURE__ */ new WeakSet(), je = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, j && (j.active ? j.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Ae.has(this) && (Ae.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Fe(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, Je(this), Re(this);
		let e = M, t = We;
		M = this, We = !0;
		try {
			return this.fn();
		} finally {
			ze(this), M = e, We = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) He(e);
			this.deps = this.depsTail = void 0, Je(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Ae.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		Be(this) && this.run();
	}
	get dirty() {
		return Be(this);
	}
}, Me = 0, Ne, Pe;
function Fe(e, t = !1) {
	e.flags |= 8, t ? (e.next = Pe, Pe = e) : (e.next = Ne, Ne = e);
}
function Ie() {
	Me++;
}
function Le() {
	if (--Me > 0) return;
	if (Pe) {
		let e = Pe;
		for (Pe = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Ne;) {
		let t = Ne;
		for (Ne = void 0; t;) {
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
function Re(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ze(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), He(r), Ue(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function Be(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Ve(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function Ve(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ye) || (e.globalVersion = Ye, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Be(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = M, r = We;
	M = e, We = !0;
	try {
		Re(e);
		let n = e.fn(e._value);
		(t.version === 0 || E(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		M = n, We = r, ze(e), e.flags &= -3;
	}
}
function He(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) He(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ue(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var We = !0, Ge = [];
function Ke() {
	Ge.push(We), We = !1;
}
function qe() {
	let e = Ge.pop();
	We = e === void 0 || e;
}
function Je(e) {
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
var Ye = 0, Xe = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, Ze = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!M || !We || M === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== M) t = this.activeLink = new Xe(M, this), M.deps ? (t.prevDep = M.depsTail, M.depsTail.nextDep = t, M.depsTail = t) : M.deps = M.depsTail = t, Qe(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = M.depsTail, t.nextDep = void 0, M.depsTail.nextDep = t, M.depsTail = t, M.deps === t && (M.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, Ye++, this.notify(e);
	}
	notify(e) {
		Ie();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Le();
		}
	}
};
function Qe(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) Qe(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var $e = /* @__PURE__ */ new WeakMap(), et = /* @__PURE__ */ Symbol(""), tt = /* @__PURE__ */ Symbol(""), nt = /* @__PURE__ */ Symbol("");
function N(e, t, n) {
	if (We && M) {
		let t = $e.get(e);
		t || $e.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new Ze()), r.map = t, r.key = n), r.track();
	}
}
function rt(e, t, n, r, i, a) {
	let o = $e.get(e);
	if (!o) {
		Ye++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Ie(), t === "clear") o.forEach(s);
	else {
		let i = d(e), a = i && C(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === nt || !_(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(nt)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(et)), f(e) && s(o.get(tt)));
				break;
			case "delete":
				i || (s(o.get(et)), f(e) && s(o.get(tt)));
				break;
			case "set": f(e) && s(o.get(et));
		}
	}
	Le();
}
function it(e) {
	let t = /* @__PURE__ */ F(e);
	return t === e || (N(t, "iterate", nt), /* @__PURE__ */ P(e)) ? t : /* @__PURE__ */ Ut(e) ? /* @__PURE__ */ Ht(e) ? t.map((e) => qt(Kt(e))) : t.map(qt) : t.map(Kt);
}
function at(e) {
	return N(e = /* @__PURE__ */ F(e), "iterate", nt), e;
}
function ot(e, t) {
	return /* @__PURE__ */ Ut(e) ? qt(/* @__PURE__ */ Ht(e) ? Kt(t) : t) : Kt(t);
}
var st = {
	__proto__: null,
	[Symbol.iterator]() {
		return ct(this, Symbol.iterator, (e) => ot(this, e));
	},
	concat(...e) {
		return it(this).concat(...e.map((e) => d(e) ? it(e) : e));
	},
	entries() {
		return ct(this, "entries", (e) => (e[1] = ot(this, e[1]), e));
	},
	every(e, t) {
		return dt(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return dt(this, "filter", e, t, (e) => e.map((e) => ot(this, e)), arguments);
	},
	find(e, t) {
		return dt(this, "find", e, t, (e) => ot(this, e), arguments);
	},
	findIndex(e, t) {
		return dt(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return dt(this, "findLast", e, t, (e) => ot(this, e), arguments);
	},
	findLastIndex(e, t) {
		return dt(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return dt(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return pt(this, "includes", e);
	},
	indexOf(...e) {
		return pt(this, "indexOf", e);
	},
	join(e) {
		return it(this).join(e);
	},
	lastIndexOf(...e) {
		return pt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return dt(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return mt(this, "pop");
	},
	push(...e) {
		return mt(this, "push", e);
	},
	reduce(e, ...t) {
		return ft(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return ft(this, "reduceRight", e, t);
	},
	shift() {
		return mt(this, "shift");
	},
	some(e, t) {
		return dt(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return mt(this, "splice", e);
	},
	toReversed() {
		return it(this).toReversed();
	},
	toSorted(e) {
		return it(this).toSorted(e);
	},
	toSpliced(...e) {
		return it(this).toSpliced(...e);
	},
	unshift(...e) {
		return mt(this, "unshift", e);
	},
	values() {
		return ct(this, "values", (e) => ot(this, e));
	}
};
function ct(e, t, n) {
	let r = at(e), i = r[t], a = i.call(r);
	if (r !== e && !/* @__PURE__ */ P(e)) {
		if (a[Symbol.toStringTag] === "Array Iterator") {
			let e = Object.create(Object.getPrototypeOf(a));
			return e.next = () => lt(a.next(), n), i !== ut[t] && Object.defineProperties(e, {
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
		a._next = a.next, a.next = () => lt(a._next(), n);
	}
	return a;
}
function lt(e, t) {
	return e.done || (e.value = t(e.value)), e;
}
var ut = Array.prototype;
function dt(e, t, n, r, i, a) {
	let o = at(e), s = o !== e && !/* @__PURE__ */ P(e), c = o[t];
	if (c !== ut[t]) {
		let t = c.apply(e, a);
		return s ? Kt(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, ot(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function ft(e, t, n, r) {
	let i = at(e), a = i !== e && !/* @__PURE__ */ P(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = ot(e, t)), n.call(this, t, ot(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? ot(e, c) : c;
}
function pt(e, t, n) {
	let r = /* @__PURE__ */ F(e);
	N(r, "iterate", nt);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Wt(n[0]) ? (n[0] = /* @__PURE__ */ F(n[0]), r[t](...n)) : i;
}
function mt(e, t, n = []) {
	Ke(), Ie();
	let r = (/* @__PURE__ */ F(e))[t].apply(e, n);
	return Le(), qe(), r;
}
var ht = /* @__PURE__ */ e("__proto__,__v_isRef,__isVue"), gt = /* @__PURE__ */ new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_));
function _t(e) {
	_(e) || (e = String(e));
	let t = /* @__PURE__ */ F(this);
	return N(t, "has", e), t.hasOwnProperty(e);
}
var vt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? It : Ft : i ? Pt : Nt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = d(e);
		if (!r) {
			let e;
			if (a && (e = st[t])) return e;
			if (t === "hasOwnProperty") return _t;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ I(e) ? e : n);
		if ((_(t) ? gt.has(t) : ht(t)) || (r || N(e, "get", t), i)) return o;
		if (/* @__PURE__ */ I(o)) {
			let e = a && C(t) ? o : o.value;
			return r && v(e) ? /* @__PURE__ */ Bt(e) : e;
		}
		return v(o) ? r ? /* @__PURE__ */ Bt(o) : /* @__PURE__ */ Rt(o) : o;
	}
}, yt = class extends vt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = d(e) && C(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Ut(i);
			if (!/* @__PURE__ */ P(n) && !/* @__PURE__ */ Ut(n) && (i = /* @__PURE__ */ F(i), n = /* @__PURE__ */ F(n)), !a && /* @__PURE__ */ I(i) && !/* @__PURE__ */ I(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : u(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ I(e) ? e : r);
		return e === /* @__PURE__ */ F(r) && s && (o ? E(n, i) && rt(e, "set", t, n, i) : rt(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = u(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && rt(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return _(t) && gt.has(t) || N(e, "has", t), n;
	}
	ownKeys(e) {
		return N(e, "iterate", d(e) ? "length" : et), Reflect.ownKeys(e);
	}
}, bt = class extends vt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, xt = /* @__PURE__ */ new yt(), St = /* @__PURE__ */ new bt(), Ct = /* @__PURE__ */ new yt(!0), wt = (e) => e, Tt = (e) => Reflect.getPrototypeOf(e);
function Et(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ F(i), o = f(a), c = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = i[e](...r), d = n ? wt : t ? qt : Kt;
		return !t && N(a, "iterate", l ? tt : et), s(Object.create(u), { next() {
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
function Dt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function Ot(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ F(r), a = /* @__PURE__ */ F(n);
			e || (E(n, a) && N(i, "get", n), N(i, "get", a));
			let { has: o } = Tt(i), s = t ? wt : e ? qt : Kt;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && N(/* @__PURE__ */ F(t), "iterate", et), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ F(n), i = /* @__PURE__ */ F(t);
			return e || (E(t, i) && N(r, "has", t), N(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ F(a), s = t ? wt : e ? qt : Kt;
			return !e && N(o, "iterate", et), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return s(n, e ? {
		add: Dt("add"),
		set: Dt("set"),
		delete: Dt("delete"),
		clear: Dt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ F(this), r = Tt(n), i = /* @__PURE__ */ F(e), a = !t && !/* @__PURE__ */ P(e) && !/* @__PURE__ */ Ut(e) ? i : e;
			return r.has.call(n, a) || E(e, a) && r.has.call(n, e) || E(i, a) && r.has.call(n, i) || (n.add(a), rt(n, "add", a, a)), this;
		},
		set(e, n) {
			t || /* @__PURE__ */ P(n) || /* @__PURE__ */ Ut(n) || (n = /* @__PURE__ */ F(n));
			let r = /* @__PURE__ */ F(this), { has: i, get: a } = Tt(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ F(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? E(n, s) && rt(r, "set", e, n, s) : rt(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ F(this), { has: n, get: r } = Tt(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ F(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && rt(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ F(this), t = e.size !== 0, n = e.clear();
			return t && rt(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = Et(r, e, t);
	}), n;
}
function kt(e, t) {
	let n = Ot(e, t);
	return (r, i, a) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_isShallow" ? t : i === "__v_raw" ? r : Reflect.get(u(n, i) && i in r ? n : r, i, a);
}
var At = { get: /* @__PURE__ */ kt(!1, !1) }, jt = { get: /* @__PURE__ */ kt(!1, !0) }, Mt = { get: /* @__PURE__ */ kt(!0, !1) }, Nt = /* @__PURE__ */ new WeakMap(), Pt = /* @__PURE__ */ new WeakMap(), Ft = /* @__PURE__ */ new WeakMap(), It = /* @__PURE__ */ new WeakMap();
function Lt(e) {
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
function Rt(e) {
	return /* @__PURE__ */ Ut(e) ? e : Vt(e, !1, xt, At, Nt);
}
// @__NO_SIDE_EFFECTS__
function zt(e) {
	return Vt(e, !1, Ct, jt, Pt);
}
// @__NO_SIDE_EFFECTS__
function Bt(e) {
	return Vt(e, !0, St, Mt, Ft);
}
function Vt(e, t, n, r, i) {
	if (!v(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Lt(ee(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function Ht(e) {
	return /* @__PURE__ */ Ut(e) ? /* @__PURE__ */ Ht(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Ut(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function P(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Wt(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function F(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ F(t) : e;
}
function Gt(e) {
	return !u(e, "__v_skip") && Object.isExtensible(e) && D(e, "__v_skip", !0), e;
}
var Kt = (e) => v(e) ? /* @__PURE__ */ Rt(e) : e, qt = (e) => v(e) ? /* @__PURE__ */ Bt(e) : e;
// @__NO_SIDE_EFFECTS__
function I(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Jt(e) {
	return Xt(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Yt(e) {
	return Xt(e, !0);
}
function Xt(e, t) {
	return /* @__PURE__ */ I(e) ? e : new Zt(e, t);
}
var Zt = class {
	constructor(e, t) {
		this.dep = new Ze(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ F(e), this._value = t ? e : Kt(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ P(e) || /* @__PURE__ */ Ut(e);
		e = n ? e : /* @__PURE__ */ F(e), E(e, t) && (this._rawValue = e, this._value = n ? e : Kt(e), this.dep.trigger());
	}
};
function Qt(e) {
	return /* @__PURE__ */ I(e) ? e.value : e;
}
var $t = {
	get: (e, t, n) => t === "__v_raw" ? e : Qt(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ I(i) && !/* @__PURE__ */ I(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function en(e) {
	return /* @__PURE__ */ Ht(e) ? e : new Proxy(e, $t);
}
var tn = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new Ze(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ye - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && M !== this) return Fe(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return Ve(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function nn(e, t, n = !1) {
	let r, i;
	return h(e) ? r = e : (r = e.get, i = e.set), new tn(r, i, n);
}
var rn = {}, an = /* @__PURE__ */ new WeakMap(), on = void 0;
function sn(e, t = !1, n = on) {
	if (n) {
		let t = an.get(n);
		t || an.set(n, t = []), t.push(e);
	}
}
function cn(e, n, i = t) {
	let { immediate: a, deep: o, once: s, scheduler: l, augmentJob: u, call: f } = i, p = (e) => o ? e : /* @__PURE__ */ P(e) || o === !1 || o === 0 ? ln(e, 1) : ln(e), m, g, _, v, y = !1, b = !1;
	if (/* @__PURE__ */ I(e) ? (g = () => e.value, y = /* @__PURE__ */ P(e)) : /* @__PURE__ */ Ht(e) ? (g = () => p(e), y = !0) : d(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ Ht(e) || /* @__PURE__ */ P(e)), g = () => e.map((e) => {
		if (/* @__PURE__ */ I(e)) return e.value;
		if (/* @__PURE__ */ Ht(e)) return p(e);
		if (h(e)) return f ? f(e, 2) : e();
	})) : g = h(e) ? n ? f ? () => f(e, 2) : e : () => {
		if (_) {
			Ke();
			try {
				_();
			} finally {
				qe();
			}
		}
		let t = on;
		on = m;
		try {
			return f ? f(e, 3, [v]) : e(v);
		} finally {
			on = t;
		}
	} : r, n && o) {
		let e = g, t = o === !0 ? Infinity : o;
		g = () => ln(e(), t);
	}
	let x = ke(), ee = () => {
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
	let S = b ? Array(e.length).fill(rn) : rn, C = (e) => {
		if (m.flags & 1 && (m.dirty || e)) {
			if (n) {
				let t = m.run();
				if (e || o || y || (b ? t.some((e, t) => E(e, S[t])) : E(t, S))) {
					let e = on;
					Ke();
					try {
						_ && _(), on = m;
						let e = [
							t,
							S === rn ? void 0 : b && S[0] === rn ? [] : S,
							v
						];
						S = t, f ? f(n, 3, e) : n(...e);
					} finally {
						on = e, qe();
					}
				}
			} else m.run();
		}
	};
	return u && u(C), m = new je(g), m.scheduler = l ? () => l(C, !1) : C, v = (e) => sn(e, !1, m), _ = m.onStop = () => {
		let e = an.get(m);
		if (e) {
			if (f) f(e, 4);
			else for (let t of e) t();
			an.delete(m);
		}
	}, n ? a ? C(!0) : S = m.run() : l ? l(C.bind(null, !0), !0) : m.run(), ee.pause = m.pause.bind(m), ee.resume = m.resume.bind(m), ee.stop = ee, ee;
}
function ln(e, t = Infinity, n) {
	if (t <= 0 || !v(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ I(e)) ln(e.value, t, n);
	else if (d(e)) for (let r = 0; r < e.length; r++) ln(e[r], t, n);
	else if (p(e) || f(e)) e.forEach((e) => {
		ln(e, t, n);
	});
	else if (S(e)) {
		for (let r in e) ln(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && ln(e[r], t, n);
	}
	return e;
}
// node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function un(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		fn(e, t, n);
	}
}
function dn(e, t, n, r) {
	if (h(e)) {
		let i = un(e, t, n, r);
		return i && y(i) && i.catch((e) => {
			fn(e, t, n, void 0, !0);
		}), i;
	}
	if (d(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(dn(e[a], t, n, r));
		return i;
	}
}
function fn(e, n, r, i = !0, a = !1) {
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
			Ke(), un(s, null, 10, [
				e,
				i,
				o
			]), qe();
			return;
		}
	}
	pn(e, r, o, i, c);
}
function pn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var L = [], mn = -1, hn = [], gn = null, _n = 0, vn = /* @__PURE__ */ Promise.resolve(), yn = null;
function bn(e) {
	let t = yn || vn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function xn(e) {
	let t = mn + 1, n = L.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = L[r], a = kn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function Sn(e) {
	if (!(e.flags & 1)) {
		let t = kn(e), n = L[L.length - 1];
		!n || !(e.flags & 2) && t >= kn(n) ? L.push(e) : L.splice(xn(t), 0, e), e.flags |= 1, Cn();
	}
}
function Cn() {
	yn ||= vn.then(An);
}
function wn(e) {
	if (!d(e)) gn && e.id === -1 ? gn.splice(_n + 1, 0, e) : e.flags & 1 || (hn.push(e), e.flags |= 1);
	else for (let t = 0; t < e.length; t++) hn.push(e[t]);
	Cn();
}
function Tn(e, t, n, r = mn + 1) {
	for (; r < L.length; r++) {
		let n = L[r];
		if (n && n.flags & 2) {
			if (e && n.id !== e.uid || t !== void 0 && !(n.id >= t)) continue;
			L.splice(r, 1), r = e ? r - 1 : mn, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
		}
	}
}
function En(e, t, n = 0) {
	if (hn.length) {
		let e = hn, r = 0;
		if (t) {
			e = [];
			for (let i = 0; i < hn.length; i++) {
				let a = hn[i];
				(a.i === void 0 ? t.has(a) : !a.i || a.i.uid < n) ? hn[r++] = a : e.push(a);
			}
		}
		let i = [...new Set(e)].sort((e, t) => kn(e) - kn(t));
		if (hn.length = r, gn) {
			for (let e = 0; e < i.length; e++) gn.push(i[e]);
			return;
		}
		for (gn = i, _n = 0; _n < gn.length; _n++) {
			let e = gn[_n];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		gn = null, _n = 0;
	}
}
var Dn = !1;
function On(e, t) {
	if (Dn) {
		e();
		return;
	}
	let n = t === void 0 ? void 0 : new Set(hn);
	e(), Dn = !0;
	try {
		Tn(void 0, t), En(void 0, n, t);
	} finally {
		Dn = !1;
	}
}
var kn = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function An(e) {
	try {
		for (mn = 0; mn < L.length; mn++) {
			let e = L[mn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), un(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; mn < L.length; mn++) {
			let e = L[mn];
			e && (e.flags &= -2);
		}
		mn = -1, L.length = 0, En(e), yn = null, (L.length || hn.length) && An(e);
	}
}
var R = null, jn = null;
function Mn(e) {
	let t = R;
	return R = e, jn = e && e.type.__scopeId || null, t;
}
function Nn(e, t = R, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && Hi(-1);
		let i = Mn(t), a = zi.length, o;
		try {
			o = e(...n);
		} finally {
			for (let e = zi.length; e > a; e--) Bi();
			Mn(i), r._d && Hi(1);
		}
		return o;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function z(e, n) {
	if (R === null) return e;
	let r = Sa(R), i = e.dirs ||= [];
	for (let e = 0; e < n.length; e++) {
		let [a, o, s, c = t] = n[e];
		a && (h(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && ln(o), i.push({
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
function Pn(e, t, n, r) {
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
		u && (Ke(), dn(u, n, 8, [
			e.el,
			l,
			i,
			t
		]), qe());
	}
}
function Fn(e, t) {
	if (Q) {
		let n = Q.provides, r = Q.parent && Q.parent.provides;
		r === n && (n = Q.provides = Object.create(r)), n[e] = t;
	}
}
function In(e, t, n = !1) {
	let r = ca();
	if (r || Gr) {
		let i = Gr ? Gr._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && h(t) ? t.call(r && r.proxy) : t;
	}
}
var Ln = /* @__PURE__ */ Symbol.for("v-scx"), Rn = () => In(Ln);
function zn(e, t, n) {
	return Bn(e, t, n);
}
function Bn(e, n, i = t) {
	let { immediate: a, deep: o, flush: c, once: l } = i, u = s({}, i), d = n && a || !n && c !== "post", f;
	if (ma) {
		if (c === "sync") {
			let e = Rn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = r, e.resume = r, e.pause = r, e;
		}
	}
	let p = Q;
	u.call = (e, t, n) => dn(e, p, t, n);
	let m = !1;
	c === "post" ? u.scheduler = (e) => {
		e.i = p, U(e, p && p.suspense);
	} : c !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : Sn(e);
	}), u.augmentJob = (e) => {
		n && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = cn(e, n, u);
	return ma && (f ? f.push(h) : d && h()), h;
}
function Vn(e, t, n) {
	let r = this.proxy, i = g(e) ? e.includes(".") ? Hn(r, e) : () => r[e] : e.bind(r, r), a;
	h(t) ? a = t : (a = t.handler, n = t);
	let o = da(this), s = Bn(i, a.bind(r), n);
	return o(), s;
}
function Hn(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Un = /* @__PURE__ */ Symbol("_vte"), Wn = (e) => e.__isTeleport, Gn = /* @__PURE__ */ Symbol("_leaveCb");
function Kn(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== Li) {
			t = n;
			break;
		}
	}
	return t;
}
function qn(e) {
	if (!nr(e)) return Wn(e.type) && e.children ? Kn(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && h(n.default)) return n.default();
	}
}
function Jn(e, t) {
	if (e.shapeFlag & 6 && e.component) {
		e.transition = t;
		let n = e.component.subTree;
		Jn(Wn(n.type) && qn(n) || n, t);
	} else if (e.shapeFlag & 128) {
		let n = e.suspense;
		if (n) {
			let e = n.isHydrating ? n.pendingBranch : n.activeBranch;
			e && Jn(e, t.clone(e));
		} else e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback);
	} else if (e.transition = t, e.type === W && d(e.children)) {
		let n = Qr(e.children, !1);
		n && Jn(n, t);
	}
}
function Yn(e) {
	if (e.component) return Yn(e.component.subTree);
	if (e.type === W) {
		let t = d(e.children) && Qr(e.children, !1);
		return t ? Yn(t) : void 0;
	}
	if (e.type !== Li) return e;
}
function Xn(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function Zn(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var Qn = /* @__PURE__ */ new WeakMap();
function $n(e, n, r, a, o = !1) {
	if (d(e)) {
		e.forEach((e, t) => $n(e, n && (d(n) ? n[t] : n), r, a, o));
		return;
	}
	if (tr(a) && !o) {
		a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && $n(e, n, r, a.component.subTree);
		return;
	}
	let s = a.shapeFlag & 4 ? Sa(a.component) : a.el, l = o ? null : s, { i: f, r: p } = e, m = n && n.r, _ = f.refs === t ? f.refs = {} : f.refs, v = f.setupState, y = /* @__PURE__ */ F(v), b = v === t ? i : (e) => !Zn(_, e) && u(y, e), x = (e, t) => !(t && Zn(_, t));
	if (m != null && m !== p) {
		if (er(n), g(m)) _[m] = null, b(m) && (v[m] = null);
		else if (/* @__PURE__ */ I(m)) {
			let e = n;
			x(m, e.k) && (m.value = null), e.k && (_[e.k] = null);
		}
	}
	if (h(p)) un(p, f, 12, [l, _]);
	else {
		let t = g(p), n = /* @__PURE__ */ I(p);
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
					i(), Qn.delete(e);
				};
				t.id = -1, Qn.set(e, t), U(t, r);
			} else er(e), i();
		}
	}
}
function er(e) {
	let t = Qn.get(e);
	t && (t.flags |= 8, Qn.delete(e));
}
ue().requestIdleCallback, ue().cancelIdleCallback;
var tr = (e) => !!e.type.__asyncLoader, nr = (e) => e.type.__isKeepAlive;
function rr(e, t) {
	ar(e, "a", t);
}
function ir(e, t) {
	ar(e, "da", t);
}
function ar(e, t, n = Q) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (sr(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) nr(e.parent.vnode) && or(r, t, n, e), e = e.parent;
	}
}
function or(e, t, n, r) {
	let i = sr(t, e, r, !0), a = sr("um", () => c(r[t], i), n);
	a.flags = 16;
}
function sr(e, t, n = Q, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Ke();
			let i = da(n), a = dn(t, n, e, r);
			return i(), qe(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var cr = (e) => (t, n = Q) => {
	ma && e !== "sp" || sr(e, (...e) => t(...e), n);
}, lr = cr("bm"), B = cr("m"), ur = cr("bu"), dr = cr("u"), fr = cr("bum"), pr = cr("um"), mr = cr("sp"), hr = cr("rtg"), gr = cr("rtc");
function _r(e, t = Q) {
	sr("ec", e, t);
}
var vr = "components", yr = /* @__PURE__ */ Symbol.for("v-ndc");
function br(e) {
	return g(e) ? xr(vr, e, !1) || e : e || yr;
}
function xr(e, t, n = !0, r = !1) {
	let i = R || Q;
	if (i) {
		let n = i.type;
		if (e === vr) {
			let e = Ca(n, !1);
			if (e && (e === t || e === w(t) || e === ae(w(t)))) return n;
		}
		let a = Sr(i[e] || n[e], t) || Sr(i.appContext[e], t);
		return !a && r ? n : a;
	}
}
function Sr(e, t) {
	return e && (e[t] || e[w(t)] || e[ae(w(t))]);
}
function V(e, t, n, r) {
	let i, a = n && n[r], o = d(e);
	if (o || g(e)) {
		let n = o && /* @__PURE__ */ Ht(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ P(e), s = /* @__PURE__ */ Ut(e), e = at(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? qt(Kt(e[n])) : Kt(e[n]) : e[n], n, void 0, a && a[n]);
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
var Cr = (e) => e ? pa(e) ? Sa(e) : Cr(e.parent) : null, wr = /* @__PURE__ */ s(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => Cr(e.parent),
	$root: (e) => Cr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Nr(e),
	$forceUpdate: (e) => e.f ||= () => {
		Sn(e.update);
	},
	$nextTick: (e) => e.n ||= bn.bind(e.proxy),
	$watch: (e) => Vn.bind(e)
}), Tr = (e, n) => e !== t && !e.__isScriptSetup && u(e, n), Er = {
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
			else if (Tr(i, n)) return s[n] = 1, i[n];
			else if (a !== t && u(a, n)) return s[n] = 2, a[n];
			else if (u(o, n)) return s[n] = 3, o[n];
			else if (r !== t && u(r, n)) return s[n] = 4, r[n];
			else Or && (s[n] = 0);
		}
		let d = wr[n], f, p;
		if (d) return n === "$attrs" && N(e.attrs, "get", ""), d(e);
		if ((f = c.__cssModules) && (f = f[n])) return f;
		if (r !== t && u(r, n)) return s[n] = 4, r[n];
		if (p = l.config.globalProperties, u(p, n)) return p[n];
	},
	set({ _: e }, n, r) {
		let { data: i, setupState: a, ctx: o } = e;
		return Tr(a, n) ? (a[n] = r, !0) : i !== t && u(i, n) ? (i[n] = r, !0) : u(e.props, n) || n[0] === "$" && n.slice(1) in e ? !1 : (o[n] = r, !0);
	},
	has({ _: { data: e, setupState: n, accessCache: r, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(r[c] || e !== t && c[0] !== "$" && u(e, c) || Tr(n, c) || u(o, c) || u(i, c) || u(wr, c) || u(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? u(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function Dr(e) {
	return d(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var Or = !0;
function kr(e) {
	let t = Nr(e), n = e.proxy, i = e.ctx;
	Or = !1, t.beforeCreate && jr(t.beforeCreate, e, "bc");
	let { data: a, computed: o, methods: s, watch: c, provide: l, inject: u, created: f, beforeMount: p, mounted: m, beforeUpdate: g, updated: _, activated: y, deactivated: b, beforeDestroy: x, beforeUnmount: ee, destroyed: S, unmounted: C, render: te, renderTracked: ne, renderTriggered: re, errorCaptured: w, serverPrefetch: ie, expose: T, inheritAttrs: ae, components: oe, directives: E, filters: se } = t;
	if (u && Ar(u, i, null), s) for (let e in s) {
		let t = s[e];
		h(t) && (i[e] = t.bind(n));
	}
	if (a) {
		let t = a.call(n, n);
		v(t) && (e.data = /* @__PURE__ */ Rt(t));
	}
	if (Or = !0, o) for (let e in o) {
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
	if (c) for (let e in c) Mr(c[e], i, n, e);
	if (l) {
		let e = h(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Fn(t, e[t]);
		});
	}
	f && jr(f, e, "c");
	function D(e, t) {
		d(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (D(lr, p), D(B, m), D(ur, g), D(dr, _), D(rr, y), D(ir, b), D(_r, w), D(gr, ne), D(hr, re), D(fr, ee), D(pr, C), D(mr, ie), d(T)) {
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
	te && e.render === r && (e.render = te), ae != null && (e.inheritAttrs = ae), oe && (e.components = oe), E && (e.directives = E), ie && Xn(e);
}
function Ar(e, t, n = r) {
	d(e) && (e = Rr(e));
	for (let n in e) {
		let r = e[n], i;
		i = v(r) ? "default" in r ? In(r.from || n, r.default, !0) : In(r.from || n) : In(r), /* @__PURE__ */ I(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function jr(e, t, n) {
	dn(d(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Mr(e, t, n, r) {
	let i = r.includes(".") ? Hn(n, r) : () => n[r];
	if (g(e)) {
		let n = t[e];
		h(n) && zn(i, n);
	} else if (h(e)) zn(i, e.bind(n));
	else if (v(e)) {
		if (d(e)) e.forEach((e) => Mr(e, t, n, r));
		else {
			let r = h(e.handler) ? e.handler.bind(n) : t[e.handler];
			h(r) && zn(i, r, e);
		}
	}
}
function Nr(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => Pr(c, e, o, !0)), Pr(c, t, o)), v(t) && a.set(t, c), c;
}
function Pr(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && Pr(e, a, n, !0), i && i.forEach((t) => Pr(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = Fr[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var Fr = {
	data: Ir,
	props: Br,
	emits: Br,
	methods: zr,
	computed: zr,
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
	components: zr,
	directives: zr,
	watch: Vr,
	provide: Ir,
	inject: Lr
};
function Ir(e, t) {
	return t ? e ? function() {
		return s(h(e) ? e.call(this, this) : e, h(t) ? t.call(this, this) : t);
	} : t : e;
}
function Lr(e, t) {
	return zr(Rr(e), Rr(t));
}
function Rr(e) {
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
function zr(e, t) {
	return e ? s(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Br(e, t) {
	return e ? d(e) && d(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : s(/* @__PURE__ */ Object.create(null), Dr(e), Dr(t ?? {})) : t;
}
function Vr(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = s(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = H(e[r], t[r]);
	return n;
}
function Hr() {
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
var Ur = 0;
function Wr(e, t) {
	return function(n, r = null) {
		h(n) || (n = s({}, n)), r != null && !v(r) && (r = null);
		let i = Hr(), a = /* @__PURE__ */ new WeakSet(), o = [], c = !1, l = i.app = {
			_uid: Ur++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: Ta,
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
					return u.appContext = i, s === !0 ? s = "svg" : s === !1 && (s = void 0), o && t ? t(u, a) : e(u, a, s), c = !0, l._container = a, a.__vue_app__ = l, Sa(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				c && (dn(o, l._instance, 16), e(null, l._container), delete l._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, l;
			},
			runWithContext(e) {
				let t = Gr;
				Gr = l;
				try {
					return e();
				} finally {
					Gr = t;
				}
			}
		};
		return l;
	};
}
var Gr = null, Kr = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${w(t)}Modifiers`] || e[`${T(t)}Modifiers`];
function qr(e, n, ...r) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || t, a = r, o = n.startsWith("update:"), s = o && Kr(i, n.slice(7));
	s && (s.trim && (a = r.map((e) => g(e) ? e.trim() : e)), s.number && (a = a.map(ce)));
	let c, l = i[c = oe(n)] || i[c = oe(w(n))];
	!l && o && (l = i[c = oe(T(n))]), l && dn(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, dn(u, e, 6, a);
	}
}
var Jr = /* @__PURE__ */ new WeakMap();
function Yr(e, t, n = !1) {
	let r = n ? Jr : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, c = !1;
	if (!h(e)) {
		let r = (e) => {
			let n = Yr(e, t, !0);
			n && (c = !0, s(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !c ? (v(e) && r.set(e, null), null) : (d(a) ? a.forEach((e) => o[e] = null) : s(o, a), v(e) && r.set(e, o), o);
}
function Xr(e, t) {
	return !e || !a(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), u(e, t[0].toLowerCase() + t.slice(1)) || u(e, T(t)) || u(e, t));
}
function Zr(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: s, attrs: c, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = Mn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = $i(u.call(t, e, d, f, m, p, h)), y = c;
		} else {
			let e = t;
			v = $i(e.length > 1 ? e(f, {
				attrs: c,
				slots: s,
				emit: l
			}) : e(f, null)), y = t.props ? c : $r(c);
		}
	} catch (t) {
		zi.length = 0, fn(t, e, 1), v = Y(Li);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(o) && (y = ei(y, a)), b = Zi(b, y, !1, !0));
	}
	return n.dirs && (b = Zi(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && Jn(Wn(b.type) && qn(b) || b, n.transition), v = b, Mn(_), v;
}
function Qr(e, t = !0) {
	let n;
	for (let t = 0; t < e.length; t++) {
		let r = e[t];
		if (Gi(r)) {
			if (r.type !== Li || r.children === "v-if") {
				if (n) return;
				n = r;
			}
		} else return;
	}
	return n;
}
var $r = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || a(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, ei = (e, t) => {
	let n = {};
	for (let r in e) o(r) && r.slice(9) in t || (n[r] = e[r]);
	return n;
};
function ti(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? ni(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (ri(o, r, n) && !Xr(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? !o || ni(r, o, l) : !!o;
	return !1;
}
function ni(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (!u(e, a) || ri(t, e, a) && !Xr(n, a)) return !0;
	}
	return !1;
}
function ri(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && v(r) && v(i) ? !Se(r, i) : r !== i;
}
function ii({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var ai = {}, oi = () => Object.create(ai), si = (e) => Object.getPrototypeOf(e) === ai;
function ci(e, t, n, r = !1) {
	let i = {}, a = oi();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), ui(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	e.props = n ? r ? i : /* @__PURE__ */ zt(i) : e.type.props ? i : a, e.attrs = a;
}
function li(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ F(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (Xr(e.emitsOptions, o)) continue;
				let d = t[o];
				if (c) {
					if (u(a, o)) d !== a[o] && (a[o] = d, l = !0);
					else {
						let t = w(o);
						i[t] = di(c, s, t, d, e, !1);
					}
				} else d !== a[o] && (a[o] = d, l = !0);
			}
		}
	} else {
		ui(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) t && (u(t, a) || (r = T(a)) !== a && u(t, r)) || (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = di(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) t && u(t, e) || (delete a[e], l = !0);
	}
	l && rt(e.attrs, "set", "");
}
function ui(e, n, r, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (n) for (let t in n) {
		if (te(t)) continue;
		let l = n[t], d;
		a && u(a, d = w(t)) ? !o || !o.includes(d) ? r[d] = l : (c ||= {})[d] = l : Xr(e.emitsOptions, t) || t in i && l === i[t] || (i[t] = l, s = !0);
	}
	if (o) {
		let n = /* @__PURE__ */ F(r), i = c || t;
		for (let t = 0; t < o.length; t++) {
			let s = o[t];
			r[s] = di(a, n, s, i[s], e, !u(i, s));
		}
	}
	return s;
}
function di(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = u(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && h(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = da(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === T(n)) && (r = !0));
	}
	return r;
}
var fi = /* @__PURE__ */ new WeakMap();
function pi(e, r, i = !1) {
	let a = i ? fi : r.propsCache, o = a.get(e);
	if (o) return o;
	let c = e.props, l = {}, f = [], p = !1;
	if (!h(e)) {
		let t = (e) => {
			p = !0;
			let [t, n] = pi(e, r, !0);
			s(l, t), n && f.push(...n);
		};
		!i && r.mixins.length && r.mixins.forEach(t), e.extends && t(e.extends), e.mixins && e.mixins.forEach(t);
	}
	if (!c && !p) return v(e) && a.set(e, n), n;
	if (d(c)) for (let e = 0; e < c.length; e++) {
		let n = w(c[e]);
		mi(n) && (l[n] = t);
	}
	else if (c) for (let e in c) {
		let t = w(e);
		if (mi(t)) {
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
function mi(e) {
	return e[0] !== "$" && !te(e);
}
var hi = (e) => e === "_" || e === "_ctx" || e === "$stable", gi = (e) => d(e) ? e.map($i) : [$i(e)], _i = (e, t, n) => {
	if (t._n) return t;
	let r = Nn((...e) => gi(t(...e)), n);
	return r._c = !1, r;
}, vi = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (hi(n)) continue;
		let i = e[n];
		if (h(i)) t[n] = _i(n, i, r);
		else if (i != null) {
			let e = gi(i);
			t[n] = () => e;
		}
	}
}, yi = (e, t) => {
	let n = gi(t);
	e.slots.default = () => n;
}, bi = (e, t, n) => {
	for (let r in t) (n || !hi(r)) && (e[r] = t[r]);
}, xi = (e, t, n) => {
	let r = e.slots = oi();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (bi(r, t, n), n && D(r, "_", e, !0)) : vi(t, r);
	} else t && yi(e, t);
}, Si = (e, n, r) => {
	let { vnode: i, slots: a } = e, o = !0, s = t;
	if (i.shapeFlag & 32) {
		let e = n._;
		e ? r && e === 1 ? o = !1 : bi(a, n, r) : (o = !n.$stable, vi(n, a)), s = n;
	} else n && (yi(e, n), s = { default: 1 });
	if (o) for (let e in a) !hi(e) && s[e] == null && delete a[e];
}, U = Fi;
function Ci(e) {
	return wi(e);
}
function wi(e, i) {
	let a = ue();
	a.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = r, insertStaticContent: _ } = e, v = (e, t, r, i = null, a = null, o = null, s = void 0, c = null, l = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !Ki(e, t) && (i = ye(e), k(e, a, o, !0), e = null), t.patchFlag === -2 && (l = !1, t.dynamicChildren = null), t.dynamicChildren && e && e.dynamicChildren && e.dynamicChildren.hasOnce && (t.dynamicChildren === n && (t.dynamicChildren = []), t.dynamicChildren.hasOnce = !0);
		let { type: u, ref: d, shapeFlag: f } = t;
		switch (u) {
			case Ii:
				y(e, t, r, i);
				break;
			case Li:
				b(e, t, r, i);
				break;
			case Ri:
				e ?? x(t, r, i, s);
				break;
			case W:
				oe(e, t, r, i, a, o, s, c, l);
				break;
			default: f & 1 ? C(e, t, r, i, a, o, s, c, l) : f & 6 ? E(e, t, r, i, a, o, s, c, l) : (f & 64 || f & 128) && u.process(e, t, r, i, a, o, s, c, l, xe);
		}
		d != null && a ? $n(d, e && e.ref, o, t || e, !t) : d == null && e && e.ref != null && $n(e.ref, null, o, e, !0);
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
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && w(e.children, d, null, r, i, Ti(e, a), s, u), _ && Pn(e, null, r, "created"), re(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !te(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && ra(f, r, e);
		}
		_ && Pn(e, null, r, "beforeMount");
		let v = Di(i, g);
		v ? g.beforeEnter(d) : g && !g.persisted && (d[Pi] = !0), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && U(() => {
			try {
				f && ra(f, r, e), v && g.enter(d), _ && Pn(e, null, r, "mounted");
			} finally {}
		}, i);
	}, re = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || Ni(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				re(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, w = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) {
			let c = e[l] = s ? ea(e[l]) : $i(e[l]);
			v(null, c, t, n, r, i, a, o, s);
		}
	}, ie = (e, n, r, i, a, o, s) => {
		let l = n.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = n;
		u |= e.patchFlag & 16;
		let m = e.props || t, h = n.props || t, g;
		if (r && Ei(r, !1), (g = h.onVnodeBeforeUpdate) && ra(g, r, n, e), f && Pn(n, e, r, "beforeUpdate"), r && Ei(r, !0), d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length) && (u = 0, s = !1, d = null), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? T(e.dynamicChildren, d, l, r, i, Ti(n, a), o) : s || de(e, n, l, null, r, i, Ti(n, a), o, !1), u > 0) {
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
			g && ra(g, r, n, e), f && Pn(n, e, r, "updated");
		}, i);
	}, T = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el || Mi(c), d = u && (c.type === W || !Ki(c, l) || c.shapeFlag & 198) ? m(u) : n;
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
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), w(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (T(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && Oi(e, t, !0)) : de(e, t, n, f, i, a, s, c, l);
	}, E = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : D(t, n, r, i, a, o, c) : ce(e, t, c);
	}, D = (e, t, n, r, i, a, o) => {
		let s = e.component = sa(e, r, i);
		if (nr(e) && (s.ctx.renderer = xe), ha(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, le, o, a), !e.el) {
				let r = s.subTree = Y(Li);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else le(s, e, t, n, i, a, o);
	}, ce = (e, t, n) => {
		let r = t.component = e.component;
		if (ti(e, t, n)) {
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
					let n = Ai(e);
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
				Ei(e, !1), t ? (t.el = c.el, O(e, t, o)) : t = c, n && se(n), (d = t.props && t.props.onVnodeBeforeUpdate) && ra(d, s, t, c), Ei(e, !0);
				let f = Zr(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el || Mi(p)), ye(p), e, i, a), t.el = f.el, u === null && ii(e, f.el), r && U(r, i), (d = t.props && t.props.onVnodeUpdated) && U(() => ra(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = tr(t);
				if (Ei(e, !1), l && se(l), !m && (o = c && c.onVnodeBeforeMount) && ra(o, d, t), Ei(e, !0), s && Ce) {
					let t = () => {
						e.subTree = Zr(e), Ce(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = Zr(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && U(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					U(() => ra(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && tr(d.vnode) && d.vnode.shapeFlag & 256) && e.a && U(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new je(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => Sn(u), Ei(e, !0), l();
	}, O = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, li(e, t.props, r, n), Si(e, t.children, n), Ke(), Tn(e), qe();
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
			let n = t[p] = l ? ea(t[p]) : $i(t[p]);
			v(e[p], n, r, null, a, o, s, c, l);
		}
		u > d ? ve(e, a, o, !0, !1, f) : w(t, r, i, a, o, s, c, l, f);
	}, pe = (e, t, r, i, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let n = e[u], i = t[u] = l ? ea(t[u]) : $i(t[u]);
			if (Ki(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let n = e[f], i = t[p] = l ? ea(t[p]) : $i(t[p]);
			if (Ki(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, n = e < d ? t[e].el : i;
				for (; u <= p;) v(null, t[u] = l ? ea(t[u]) : $i(t[u]), r, n, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) k(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? ea(t[u]) : $i(t[u]);
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
				else for (_ = h; _ <= p; _++) if (S[_ - h] === 0 && Ki(n, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? k(n, a, o, !0) : (S[i - h] = u + 1, i >= ee ? ee = i : x = !0, v(n, t[i], r, null, a, o, s, c, l), y++);
			}
			let C = x ? ki(S) : n;
			for (_ = C.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, n = t[e], f = t[e + 1], p = e + 1 < d ? f.el || Mi(f) : i;
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
		} else if (c === Ri) ee(e, t, n);
		else if (r !== 2 && d & 1 && l) {
			if (r === 0) l.persisted && !a[Gn] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), U(() => l.enter(a), i));
			else {
				let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
					e.ctx.isUnmounted ? s(a) : o(a, t, n);
				}, d = () => {
					let e = a._isLeaving || !!a[Gn];
					a._isLeaving && a[Gn](!0), l.persisted && !e ? u() : r(a, () => {
						u(), c && c();
					});
				};
				i ? i(a, u, d) : d();
			}
		} else o(a, t, n);
	}, k = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if ((d === -2 || l && l.hasOnce) && (i = !1), s != null && (Ke(), $n(s, null, n, e, !0), qe()), p == null || e.ctx && e.ctx !== t || (t.renderCache[p] = void 0), u & 256 && t.ctx.deactivate(e)) return;
		let h = u & 1 && f, g = !tr(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && ra(_, t, e), u & 6) _e(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Pn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, xe, r) : l && !l.hasOnce && (a !== W || d > 0 && d & 64) ? ve(l, t, n, !1, !0) : (a === W && d & 384 || !i && u & 16) && ve(c, t, n), r && he(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && U(() => {
			_ && ra(_, t, e), h && Pn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, he = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e, a = t === W;
		if (a && !i) {
			ge(n, r);
			return;
		}
		if (t === Ri) {
			S(e), i && !i.persisted && i.afterLeave && i.afterLeave();
			return;
		}
		let o = a ? Yn(e) : e, c = () => {
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
		ji(c), ji(l), r && se(r), i.stop(), a ? (a.flags |= 8, k(o, e, t, n)) : o && (o.transition = e.vnode.transition, k(o, e, t, n)), s && U(s, t);
		let u = () => {
			e.isUnmounted = !0;
		};
		u.flags = 16, U(u, t);
	}, ve = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) k(e[o], t, n, r, i);
	}, ye = (e) => {
		if (e.shapeFlag & 6) return ye(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Un];
		return n ? h(n) : t;
	}, be = (e, t, n) => {
		On(() => {
			e == null ? t._vnode && k(t._vnode, null, null, !0) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e;
		}, e && t._vnode ? void 0 : e && e.component ? e.component.uid : oa());
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
		createApp: Wr(be, Se)
	};
}
function Ti({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ei({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Di(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Oi(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (d(r) && d(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = ea(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Oi(t, a)), a.type === Ii && (a.patchFlag === -1 && (a = i[e] = ea(a)), a.el = t.el), a.type === Li && !a.el && (a.el = t.el);
	}
}
function ki(e) {
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
function Ai(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Ai(t);
}
function ji(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Mi(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	if (t) return Mi(t.subTree);
	let n = e.suspense;
	return n && n.activeBranch ? Mi(n.activeBranch) : null;
}
var Ni = (e) => e.__isSuspense, Pi = /* @__PURE__ */ Symbol("_deferredEnter");
function Fi(e, t) {
	t && t.pendingBranch ? d(e) ? t.effects.push(...e) : t.effects.push(e) : wn(e);
}
var W = /* @__PURE__ */ Symbol.for("v-fgt"), Ii = /* @__PURE__ */ Symbol.for("v-txt"), Li = /* @__PURE__ */ Symbol.for("v-cmt"), Ri = /* @__PURE__ */ Symbol.for("v-stc"), zi = [], G = null;
function K(e = !1) {
	zi.push(G = e ? null : []);
}
function Bi() {
	zi.pop(), G = zi[zi.length - 1] || null;
}
var Vi = 1;
function Hi(e, t = !1) {
	Vi += e, e < 0 && G && t && (G.hasOnce = !0);
}
function Ui(e) {
	return e.dynamicChildren = Vi > 0 ? G || n : null, Bi(), Vi > 0 && G && G.push(e), e;
}
function q(e, t, n, r, i, a) {
	return Ui(J(e, t, n, r, i, a, !0));
}
function Wi(e, t, n, r, i) {
	return Ui(Y(e, t, n, r, i, !0));
}
function Gi(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function Ki(e, t) {
	return e.type === t.type && e.key === t.key;
}
var qi = ({ key: e }) => e ?? null, Ji = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : g(e) || /* @__PURE__ */ I(e) || h(e) ? {
	i: R,
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
		key: t && qi(t),
		ref: t && Ji(t),
		scopeId: jn,
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
		ctx: R
	};
	return s ? (ta(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= g(n) ? 8 : 16), Vi > 0 && !o && G && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && G.push(c), c;
}
var Y = Yi;
function Yi(e, t = null, n = null, r = 0, i = null, a = !1) {
	if (e && e !== yr || (e = Li), Gi(e)) {
		let r = Zi(e, t, !0);
		return n && ta(r, n), Vi > 0 && !a && G && (r.shapeFlag & 6 ? G[G.indexOf(e)] = r : G.push(r)), r.patchFlag = -2, r;
	}
	if (wa(e) && (e = e.__vccOpts), t) {
		t = Xi(t);
		let { class: e, style: n } = t;
		e && !g(e) && (t.class = k(e)), v(n) && (/* @__PURE__ */ Wt(n) && !d(n) && (n = s({}, n)), t.style = O(n));
	}
	let o = g(e) ? 1 : Ni(e) ? 128 : Wn(e) ? 64 : v(e) ? 4 : h(e) ? 2 : 0;
	return J(e, t, n, r, i, o, a, !0);
}
function Xi(e) {
	return e ? /* @__PURE__ */ Wt(e) ? s({}, e) : si(e) ? s({}, e[ya] || e) : e : null;
}
function Zi(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? na(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && qi(l),
		ref: t && t.ref ? n && a ? d(a) ? a.concat(Ji(t)) : [a, Ji(t)] : Ji(t) : a,
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
		ssContent: e.ssContent && Zi(e.ssContent),
		ssFallback: e.ssFallback && Zi(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce,
		cacheIndex: e.cacheIndex
	};
	return c && r && Jn(u, c.clone(u)), u;
}
function X(e = " ", t = 0) {
	return Y(Ii, null, e, t);
}
function Qi(e, t) {
	let n = Y(Ri, null, e);
	return n.staticCount = t, n;
}
function Z(e = "", t = !1) {
	return t ? (K(), Wi(Li, null, e)) : Y(Li, null, e);
}
function $i(e) {
	return e == null || typeof e == "boolean" ? Y(Li) : d(e) ? Y(W, null, e.slice()) : Gi(e) ? ea(e) : Y(Ii, null, String(e));
}
function ea(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : Zi(e);
}
function ta(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (d(t)) n = 16;
	else if (typeof t == "object") {
		if (r & 65) {
			let n = t.default;
			n && (n._c && (n._d = !1), ta(e, n()), n._c && (n._d = !0));
			return;
		}
		{
			n = 32;
			let r = t._;
			!r && !si(t) ? t._ctx = R : r === 3 && R && (R.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
		}
	} else if (h(t)) {
		if (r & 65) {
			ta(e, { default: t });
			return;
		}
		t = {
			default: t,
			_ctx: R
		}, n = 32;
	} else t = String(t), r & 64 ? (n = 16, t = [X(t)]) : n = 8;
	e.children = t, e.shapeFlag |= n;
}
function na(...e) {
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
function ra(e, t, n, r = null) {
	dn(e, t, 7, [n, r]);
}
var ia = /* @__PURE__ */ Hr(), aa = 0;
function oa() {
	return aa;
}
function sa(e, n, r) {
	let i = e.type, a = (n ? n.appContext : e.appContext) || ia, o = {
		uid: aa++,
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
		propsOptions: pi(i, a),
		emitsOptions: Yr(i, a),
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
	return o.ctx = { _: o }, o.root = n ? n.root : o, o.emit = qr.bind(null, o), e.ce && e.ce(o), o;
}
var Q = null, ca = () => Q || R, la, ua;
{
	let e = ue(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	la = t("__VUE_INSTANCE_SETTERS__", (e) => Q = e), ua = t("__VUE_SSR_SETTERS__", (e) => ma = e);
}
var da = (e) => {
	let t = Q;
	return la(e), e.scope.on(), () => {
		e.scope.off(), la(t);
	};
}, fa = () => {
	Q && Q.scope.off(), la(null);
};
function pa(e) {
	return e.vnode.shapeFlag & 4;
}
var ma = !1;
function ha(e, t = !1, n = !1) {
	t && ua(t);
	let { props: r, children: i } = e.vnode, a = pa(e);
	ci(e, r, a, t), xi(e, i, n || t);
	let o = a ? ga(e, t) : void 0;
	return t && ua(!1), o;
}
function ga(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Er);
	let { setup: r } = n;
	if (r) {
		Ke();
		let n = e.setupContext = r.length > 1 ? xa(e) : null, i = da(e), a = un(r, e, 0, [e.props, n]), o = y(a);
		if (qe(), i(), (o || e.sp) && !tr(e) && Xn(e), o) {
			if (a.then(fa, fa), t) return a.then((n) => {
				ua(!0);
				try {
					_a(e, n, t);
				} finally {
					ua(!1);
				}
			}).catch((t) => {
				fn(t, e, 0, void 0, !0), e.ssrRender = (e, t) => t("<!---->");
			});
			e.asyncDep = a;
		} else _a(e, a, t);
	} else va(e, t);
}
function _a(e, t, n) {
	h(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : v(t) && (e.setupState = en(t)), va(e, n);
}
function va(e, t, n) {
	let i = e.type;
	e.render ||= i.render || r;
	{
		let t = da(e);
		Ke();
		try {
			kr(e);
		} finally {
			qe(), t();
		}
	}
}
var ya = /* @__PURE__ */ Symbol(), ba = { get(e, t) {
	return N(e, "get", ""), t === ya ? e : e[t];
} };
function xa(e) {
	return {
		attrs: new Proxy(e.attrs, ba),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function Sa(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(en(Gt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in wr) return wr[n](e);
		},
		has(e, t) {
			return t in e || t in wr;
		}
	}) : e.proxy;
}
function Ca(e, t = !0) {
	return h(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function wa(e) {
	return h(e) && "__vccOpts" in e;
}
var $ = (e, t) => /* @__PURE__ */ nn(e, t, ma), Ta = "3.5.45", Ea = void 0, Da = typeof window < "u" && window.trustedTypes;
if (Da) try {
	Ea = /* @__PURE__ */ Da.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var Oa = Ea ? (e) => Ea.createHTML(e) : (e) => e, ka = "http://www.w3.org/2000/svg", Aa = "http://www.w3.org/1998/Math/MathML", ja = typeof document < "u" ? document : null, Ma = ja && /* @__PURE__ */ ja.createElement("template"), Na = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? ja.createElementNS(ka, e) : t === "mathml" ? ja.createElementNS(Aa, e) : n ? ja.createElement(e, { is: n }) : ja.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => ja.createTextNode(e),
	createComment: (e) => ja.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => ja.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), i !== a && (i = i.nextSibling););
		else {
			Ma.innerHTML = Oa(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = Ma.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, Pa = /* @__PURE__ */ Symbol("_vtc");
function Fa(e, t, n) {
	let r = e[Pa];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var Ia = /* @__PURE__ */ Symbol("_vod"), La = /* @__PURE__ */ Symbol("_vsh"), Ra = {
	name: "show",
	beforeMount(e, { value: t }, { transition: n }) {
		e[Ia] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : za(e, t);
	},
	mounted(e, { value: t }, { transition: n }) {
		n && t && n.enter(e);
	},
	updated(e, { value: t, oldValue: n }, { transition: r }) {
		!t != !n && (r ? t ? (r.beforeEnter(e), za(e, !0), r.enter(e)) : r.leave(e, () => {
			za(e, !1);
		}) : za(e, t));
	},
	beforeUnmount(e, { value: t }) {
		za(e, t);
	}
};
function za(e, t) {
	e.style.display = t ? e[Ia] : "none", e[La] = !t;
}
var Ba = /* @__PURE__ */ Symbol(""), Va = /(?:^|;)\s*display\s*:/;
function Ha(e, t, n) {
	let r = e.style, i = g(n), a = !1;
	if (n && !i) {
		if (t) {
			if (g(t)) for (let e of t.split(";")) {
				let t = e.slice(0, e.indexOf(":")).trim();
				n[t] ?? Wa(r, t, "");
			}
			else for (let e in t) n[e] ?? Wa(r, e, "");
		}
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? Wa(r, i, "") : Ja(e, i, !g(t) && t ? t[i] : void 0, o) || Wa(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[Ba];
			e && (n += ";" + e), r.cssText = n, a = Va.test(n);
		}
	} else t && e.removeAttribute("style");
	Ia in e && (i && t === n || (e[Ia] = a ? r.display : ""), e[La] && (r.display = "none"));
}
var Ua = /\s*!important$/;
function Wa(e, t, n) {
	if (d(n)) n.forEach((n) => Wa(e, t, n));
	else if (n ??= "", t.startsWith("--")) Ua.test(n) ? e.setProperty(t, n.replace(Ua, ""), "important") : e.setProperty(t, n);
	else {
		let r = qa(e, t);
		Ua.test(n) ? e.setProperty(T(r), n.replace(Ua, ""), "important") : e[r] = n;
	}
}
var Ga = [
	"Webkit",
	"Moz",
	"ms"
], Ka = {};
function qa(e, t) {
	let n = Ka[t];
	if (n) return n;
	let r = w(t);
	if (r !== "filter" && r in e) return Ka[t] = r;
	r = ae(r);
	for (let n = 0; n < Ga.length; n++) {
		let i = Ga[n] + r;
		if (i in e) return Ka[t] = i;
	}
	return t;
}
function Ja(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && g(r) && n === r;
}
var Ya = "http://www.w3.org/1999/xlink";
function Xa(e, t, n, r, i, a = ge(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ya, t.slice(6, t.length)) : e.setAttributeNS(Ya, t, n) : n == null || a && !_e(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : _(n) ? String(n) : n);
}
function Za(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? Oa(n) : n);
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
function Qa(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function $a(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var eo = /* @__PURE__ */ Symbol("_vei");
function to(e, t, n, r, i = null) {
	let a = e[eo] || (e[eo] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = io(t);
		r ? Qa(e, n, a[t] = co(r, i), s) : o && ($a(e, n, o, s), a[t] = void 0);
	}
}
var no = /(Once|Passive|Capture)$/, ro = /^on:?(?:Once|Passive|Capture)$/;
function io(e) {
	let t, n;
	for (; (n = e.match(no)) && !ro.test(e);) t ||= {}, e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
	return [e[2] === ":" ? e.slice(3) : T(e.slice(2)), t];
}
var ao = 0, oo = /* @__PURE__ */ Promise.resolve(), so = () => ao ||= (oo.then(() => ao = 0), Date.now());
function co(e, t) {
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
				e && dn(e, t, 5, a);
			}
		} else dn(r, t, 5, [e]);
	};
	return n.value = e, n.attached = so(), n;
}
var lo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, uo = (e, t, n, r, i, s) => {
	let c = i === "svg";
	t === "class" ? Fa(e, r, c) : t === "style" ? Ha(e, n, r) : a(t) ? o(t) || to(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), 1) : t[0] === "^" ? (t = t.slice(1), 0) : fo(e, t, r, c)) ? (Za(e, t, r), e.tagName.includes("-") || t !== "value" && t !== "checked" && t !== "selected" || Xa(e, t, r, c, s, t !== "value")) : e._isVueCE && (po(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !g(r))) ? Za(e, w(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Xa(e, t, r, c));
};
function fo(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && lo(t) && h(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return lo(t) && g(n) ? !1 : t in e;
}
function po(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = w(t);
	return Array.isArray(n) ? n.some((e) => w(e) === r) : Object.keys(n).some((e) => w(e) === r);
}
var mo = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return d(t) ? (e) => se(t, e) : t;
};
function ho(e) {
	e.target.composing = !0;
}
function go(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var _o = /* @__PURE__ */ Symbol("_assign"), vo = /* @__PURE__ */ Symbol("_initialValue");
function yo(e, t, n) {
	return t && (e = e.trim()), n && (e = ce(e)), e;
}
var bo = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e.parentNode && (e.type === "text" ? e[vo] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[vo] = e.defaultValue.replace(/\r\n?/g, "\n"))), e[_o] = mo(i);
		let a = r || i.props && i.props.type === "number";
		Qa(e, t ? "change" : "input", (t) => {
			t.target.composing || e[_o](yo(e.value, n, a));
		}), (n || a) && Qa(e, "change", () => {
			e.value = yo(e.value, n, a);
		}), t || (Qa(e, "compositionstart", ho), Qa(e, "compositionend", go), Qa(e, "change", go));
	},
	mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
		let i = t ?? "", a = e[vo];
		delete e[vo], a !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== a ? e[_o](yo(e.value, n, r)) : e.value = i;
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[_o] = mo(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? ce(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, xo = {
	deep: !0,
	created(e, t, n) {
		e[_o] = mo(n), Qa(e, "change", () => {
			let t = e._modelValue, n = Eo(e), r = e.checked, i = e[_o];
			if (d(t)) {
				let e = Ce(t, n), a = e !== -1;
				if (r && !a) i(t.concat(n));
				else if (!r && a) {
					let n = [...t];
					n.splice(e, 1), i(n);
				}
			} else if (p(t)) {
				let e = new Set(t);
				r ? e.add(n) : e.delete(n), i(e);
			} else i(Do(e, r));
		});
	},
	mounted: So,
	beforeUpdate(e, t, n) {
		e[_o] = mo(n), So(e, t, n);
	}
};
function So(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (d(t)) i = Ce(t, r.props.value) > -1;
	else if (p(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = Se(t, Do(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var Co = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		e._modelValue = t, Qa(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? ce(Eo(e)) : Eo(e)), r = e.multiple, i = r ? p(e._modelValue) ? new Set(t) : t : t[0], a = e._pendingValue = [r, r ? d(i) ? t.slice() : t : i];
			try {
				e[_o](i);
			} finally {
				bn(() => {
					e._pendingValue === a && (e._pendingValue = void 0);
				});
			}
		}), e[_o] = mo(r);
	},
	mounted(e, { value: t, modifiers: { number: n } }) {
		To(e, t, n);
	},
	beforeUpdate(e, { value: t }, n) {
		e._modelValue = t, e[_o] = mo(n);
	},
	updated(e, { value: t, modifiers: { number: n } }) {
		let r = e._pendingValue;
		e._pendingValue = void 0, r && r[0] === e.multiple && wo(t, r[1], r[0]) || To(e, t, n);
	}
};
function wo(e, t, n) {
	if (!n || d(e)) return Se(e, t);
	if (p(e)) {
		if (e.size !== t.length) return !1;
		for (let n of t) if (!e.has(n)) return !1;
		return !0;
	}
	return !1;
}
function To(e, t, n = !1) {
	let r = e.multiple, i = d(t);
	if (!r || i || p(t)) {
		for (let a = 0, o = e.options.length; a < o; a++) {
			let o = e.options[a], s = Eo(o);
			if (r) {
				if (i) {
					let e = typeof s;
					o.selected = e === "string" || e === "number" ? t.some((e) => String(e) === String(s)) : Ce(t, s) > -1;
				} else o.selected = t.has(s) || n && typeof s == "string" && t.has(ce(s));
			} else if (Se(Eo(o), t)) {
				e.selectedIndex !== a && (e.selectedIndex = a);
				return;
			}
		}
		!r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function Eo(e) {
	return "_value" in e ? e._value : e.value;
}
function Do(e, t) {
	let n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t;
}
var Oo = /* @__PURE__ */ s({ patchProp: uo }, Na), ko;
function Ao() {
	return ko ||= Ci(Oo);
}
var jo = ((...e) => {
	let t = Ao().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = No(e);
		if (!r) return;
		let i = t._component;
		h(i) || i.render || i.template || (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, Mo(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function Mo(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function No(e) {
	return g(e) ? document.querySelector(e) : e;
}
// src/vue/poetry/IdeaCollections.vue
var Po = { class: "section-title" }, Fo = {
	key: 0,
	class: "btn ghost small",
	"data-action": "nav",
	"data-nav": "ideas"
}, Io = ["data-idea-collection"], Lo = { class: "idea-badge" }, Ro = {
	key: 0,
	class: "generator-story"
}, zo = {
	key: 1,
	class: "song-has-lyrics"
}, Bo = { key: 0 }, Vo = {
	key: 3,
	class: "generator-detail"
}, Ho = { class: "actions" }, Uo = [
	"data-action",
	"data-id",
	"data-i",
	"aria-label"
], Wo = ["innerHTML"], Go = {
	key: 1,
	class: "empty"
}, Ko = ["innerHTML"], qo = {
	__name: "IdeaCollections",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (K(!0), q(W, null, V(e.model.groups, (t) => (K(), q(W, { key: t.kind }, [J("div", Po, [J("h2", null, A(t.title) + " (" + A(t.items.length) + ")", 1), t.kind === "generated" ? (K(), q("button", Fo, "Создать идеи →")) : Z("", !0)]), t.items.length ? (K(), q("div", {
			key: 0,
			class: "idea-grid",
			"data-idea-collection": t.kind
		}, [(K(!0), q(W, null, V(t.items, (n) => (K(), Wi(br(t.kind === "academy" ? "div" : "article"), {
			key: n.key,
			class: k(["idea", { "generated-card": t.kind === "generated" }])
		}, {
			default: Nn(() => [
				J("div", Lo, A(n.badge), 1),
				J("h3", null, A(n.title), 1),
				J("p", null, A(n.pitch), 1),
				t.kind === "generated" ? (K(), q("p", Ro, A(n.storyLine), 1)) : Z("", !0),
				t.kind === "manual" && n.lyrics ? (K(), q("p", zo, "🎼 Текст песни сохранён · " + A(n.sunoLyrics ? "теги для Suno готовы" : "без разметки"), 1)) : Z("", !0),
				n.hook || t.kind === "generated" ? (K(), Wi(br(t.kind === "generated" ? "div" : "p"), {
					key: 2,
					class: "generator-hook"
				}, {
					default: Nn(() => [t.kind === "generated" ? (K(), q("span", Bo, "ХУК ПРИПЕВА")) : Z("", !0), J("strong", null, A(n.hook), 1)]),
					_: 2
				}, 1024)) : Z("", !0),
				t.kind === "generated" && n.detail ? (K(), q("p", Vo, "Твоя деталь: " + A(n.detail), 1)) : Z("", !0),
				J("div", Ho, [(K(!0), q(W, null, V(n.actions, (t) => (K(), q("button", {
					key: t.name,
					type: "button",
					class: k(t.className),
					"data-action": t.name,
					"data-id": n.id,
					"data-i": n.index,
					"aria-label": t.label || void 0
				}, [t.icon ? (K(), q("span", {
					key: 0,
					"aria-hidden": "true",
					innerHTML: e.model.icons[t.icon]
				}, null, 8, Wo)) : Z("", !0), X(A(t.text), 1)], 10, Uo))), 128))])
			]),
			_: 2
		}, 1032, ["class"]))), 128))], 8, Io)) : (K(), q("div", Go, [
			J("span", {
				"aria-hidden": "true",
				innerHTML: e.model.icons.music
			}, null, 8, Ko),
			J("strong", null, A(t.emptyTitle), 1),
			X(A(t.emptyText), 1)
		]))], 64))), 128));
	}
};
// src/vue/poetry/legacyIdeaCollectionsBridge.js
function Jo({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_IDEA_COLLECTIONS, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-idea-collections");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, qo, { model: o });
		s && (r = {
			node: a,
			unmount: s
		});
	}
	let o = new MutationObserver(a);
	return o.observe(n, { childList: !0 }), a(), () => {
		i = !0, o.disconnect(), r?.unmount(), r = null;
	};
}
// src/vue/poetry/IdeaFields.vue
var Yo = { class: "field" }, Xo = { class: "field" }, Zo = ["value"], Qo = { class: "field" }, $o = { class: "field" }, es = {
	__name: "IdeaFields",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = /* @__PURE__ */ Rt({ ...e.initial.values });
		return (n, r) => (K(), q(W, null, [
			J("div", Yo, [r[4] ||= J("label", { for: "custom-idea-title" }, "Название песни", -1), z(J("input", {
				id: "custom-idea-title",
				"onUpdate:modelValue": r[0] ||= (e) => t.title = e,
				maxlength: "100",
				placeholder: "Например, Город на ладони"
			}, null, 512), [[bo, t.title]])]),
			J("div", Xo, [r[5] ||= J("label", { for: "custom-idea-genre" }, "Музыкальный жанр", -1), z(J("select", {
				id: "custom-idea-genre",
				"onUpdate:modelValue": r[1] ||= (e) => t.genre = e
			}, [(K(!0), q(W, null, V(e.initial.genres, (e) => (K(), q("option", {
				key: e.id,
				value: e.id
			}, A(e.name), 9, Zo))), 128))], 512), [[Co, t.genre]])]),
			J("div", Qo, [r[6] ||= J("label", { for: "custom-idea-text" }, "Сюжет и основная идея", -1), z(J("textarea", {
				id: "custom-idea-text",
				"onUpdate:modelValue": r[2] ||= (e) => t.text = e,
				rows: "5",
				maxlength: "3000",
				placeholder: "О чём песня и что происходит с героем?"
			}, null, 512), [[bo, t.text]])]),
			J("div", $o, [r[7] ||= J("label", { for: "custom-idea-hook" }, "Фраза для припева (необязательно)", -1), z(J("input", {
				id: "custom-idea-hook",
				"onUpdate:modelValue": r[3] ||= (e) => t.hook = e,
				maxlength: "240",
				placeholder: "Запоминающаяся строчка"
			}, null, 512), [[bo, t.hook]])])
		], 64));
	}
}, ts = ["value"], ns = {
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
		let t = e, n = /* @__PURE__ */ Jt(null);
		return B(() => {
			t.initial.highlighted && t.api.enableHighlight(n.value);
		}), (t, r) => (K(), q(W, null, [r[0] ||= J("label", { for: "custom-idea-lyrics" }, "Оригинальный текст (необязательно)", -1), J("textarea", {
			id: "custom-idea-lyrics",
			ref_key: "area",
			ref: n,
			value: e.initial.values.lyrics,
			rows: "12",
			maxlength: "20000",
			placeholder: "Куплет 1:\nТекст первого куплета...\n\nПрипев:\nТекст припева..."
		}, null, 8, ts)], 64));
	}
}, rs = { class: "field" }, is = ["value"], as = { class: "workbench-switches" }, os = ["id", "onUpdate:modelValue"], ss = { class: "field" }, cs = { class: "detail-actions" }, ls = {
	type: "button",
	class: "btn ghost",
	"data-action": "copy-current-lyrics"
}, us = ["innerHTML"], ds = { class: "field" }, fs = { class: "detail-actions" }, ps = {
	type: "button",
	class: "btn ghost",
	"data-action": "copy-current-style"
}, ms = ["innerHTML"], hs = {
	__name: "LyricsTools",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Rt({ ...t.initial.values }), r = /* @__PURE__ */ Rt({ ...t.initial.switches }), i = [
			["power", "Сильный, качающий припев"],
			["emotional", "Эмоциональная песня"],
			["dance", "Танцевальный трек"],
			["epic", "Эпический финал"],
			["soft", "Мягкое звучание"]
		], a = [
			["build", "Нарастание перед припевом"],
			["harmonies", "Бэк-вокал и гармонии в припеве"],
			["final", "Усиленный финальный припев"],
			["drop", "Дроп после припева (для танцевального)"],
			["short", "Короткое вступление"]
		];
		return (t, o) => (K(), q(W, null, [
			J("div", rs, [o[3] ||= J("label", { for: "lyrics-tag-preset" }, "Характер аранжировки", -1), z(J("select", {
				id: "lyrics-tag-preset",
				"onUpdate:modelValue": o[0] ||= (e) => n.preset = e
			}, [(K(), q(W, null, V(i, ([e, t]) => J("option", {
				key: e,
				value: e
			}, A(t), 9, is)), 64))], 512), [[Co, n.preset]])]),
			J("div", as, [(K(), q(W, null, V(a, ([e, t]) => J("label", { key: e }, [z(J("input", {
				id: "lyrics-" + e,
				"onUpdate:modelValue": (t) => r[e] = t,
				type: "checkbox"
			}, null, 8, os), [[xo, r[e]]]), X(" " + A(t), 1)])), 64))]),
			o[8] ||= J("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "format-idea-lyrics"
			}, "✨ Создать теги и усилители", -1),
			o[9] ||= J("p", { class: "workbench-note" }, "Разметка примерная: если в тексте нет названий секций, куплеты и припевы определяются по абзацам. Проверь расположение тегов перед копированием.", -1),
			J("div", ss, [o[4] ||= J("label", { for: "custom-idea-tagged" }, "Готовая версия для поля Lyrics в Suno (можно исправить вручную)", -1), z(J("textarea", {
				id: "custom-idea-tagged",
				"onUpdate:modelValue": o[1] ||= (e) => n.tagged = e,
				rows: "13",
				maxlength: "25000",
				placeholder: "[Verse 1]\n...\n\n[Chorus - powerful melodic hook]\n..."
			}, null, 512), [[bo, n.tagged]])]),
			J("div", cs, [J("button", ls, [J("span", { innerHTML: e.initial.copyIcon }, null, 8, us), o[5] ||= X(" Копировать Lyrics", -1)])]),
			J("div", ds, [o[6] ||= J("label", { for: "custom-idea-style" }, "Дополнительное описание для поля Style (до 1000 символов)", -1), z(J("textarea", {
				id: "custom-idea-style",
				"onUpdate:modelValue": o[2] ||= (e) => n.style = e,
				rows: "4",
				maxlength: "1000",
				placeholder: "Описание жанра, вокала и динамики для Suno"
			}, null, 512), [[bo, n.style]])]),
			J("div", fs, [J("button", ps, [J("span", { innerHTML: e.initial.copyIcon }, null, 8, ms), o[7] ||= X(" Копировать Style", -1)])])
		], 64));
	}
};
// src/vue/poetry/legacyIdeaEditorBridge.js
function gs({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_IDEA_EDITOR, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = /* @__PURE__ */ new Map(), i = !1;
	function a() {
		if (!i) for (let [i, a] of [
			["sb-vue-idea-fields", es],
			["sb-vue-lyrics-source", ns],
			["sb-vue-lyrics-tools", hs]
		]) {
			let o = n.querySelector("#" + i), s = r.get(i);
			if (s?.node === o || (s && (s.unmount(), r.delete(i)), !o)) continue;
			let c = t.snapshot();
			if (!c) continue;
			let l = e(o, a, {
				api: t,
				initial: c
			});
			l && r.set(i, {
				node: o,
				unmount: l
			});
		}
	}
	let o = new MutationObserver(a);
	return o.observe(n, { childList: !0 }), a(), () => {
		i = !0, o.disconnect();
		for (let e of r.values()) e.unmount();
		r.clear();
	};
}
// node_modules/pinia/dist/pinia.mjs
var _s = typeof window < "u", vs = Symbol(), ys;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(ys ||= {});
var bs = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function xs(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function Ss(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		Ds(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function Cs(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function ws(e) {
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
var Ts = typeof navigator == "object" ? navigator : { userAgent: "" }, Es = /Macintosh/.test(Ts.userAgent) && /AppleWebKit/.test(Ts.userAgent) && !/Safari/.test(Ts.userAgent), Ds = _s ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Es ? Os : "msSaveOrOpenBlob" in Ts ? ks : As : () => {};
function Os(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? ws(r) : Cs(r.href) ? Ss(e, t, n) : (r.target = "_blank", ws(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		ws(r);
	}, 0));
}
function ks(e, t = "download", n) {
	if (typeof e == "string") {
		if (Cs(e)) Ss(e, t, n);
		else {
			let t = document.createElement("a");
			t.href = e, t.target = "_blank", setTimeout(function() {
				ws(t);
			});
		}
	} else navigator.msSaveOrOpenBlob(xs(e, n), t);
}
function As(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return Ss(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(bs.HTMLElement)) || "safari" in bs, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || Es) && typeof FileReader < "u") {
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
var { assign: js } = Object;
function Ms() {
	let e = Oe(!0), t = e.run(() => /* @__PURE__ */ Jt({})), n = [], r = [], i = Gt({
		install(e) {
			i._a = e, e.provide(vs, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
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
var { assign: Ns } = Object, Ps = {
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
		return (t, n) => (K(), Wi(br(e.component), he(Xi(e.componentProps)), null, 16));
	}
}, Fs = [
	"data-nav",
	"aria-current",
	"aria-label",
	"title",
	"onClick"
], Is = ["innerHTML"], Ls = { key: 0 }, Rs = {
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
		}, null, 8, Is), e.mobile ? (K(), q("span", Ls, A(t.shortLabel), 1)) : (K(), q(W, { key: 1 }, [X(A(t.label), 1)], 64))], 10, Fs))), 128));
	}
}, zs = /* @__PURE__ */ new Set([
	"projects",
	"saved",
	"myideas",
	"myprompts",
	"events",
	"tracks",
	"artists"
]);
function Bs(e) {
	return e === "detail" ? "catalog" : zs.has(e) ? "account" : e;
}
function Vs(e) {
	let t = Bs(e?.active), n = /* @__PURE__ */ new Set(), r = [];
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
var Hs = [{
	key: "sidebar",
	selector: "[data-sb-vue-sidebar]",
	mobile: !1
}, {
	key: "mobile",
	selector: "[data-sb-vue-mobile]",
	mobile: !0
}];
function Us({ mountVueFeature: e, unmountVueFeature: t }) {
	let n = window.SUNOBOOM_LEGACY_NAV, r = document.getElementById("app");
	if (!n || !r || typeof n.snapshot != "function") return () => {};
	let i = /* @__PURE__ */ new Map(), a = !1;
	function o() {
		if (a) return;
		let t = Vs(n.snapshot()), o = JSON.stringify(t);
		for (let { key: a, selector: s, mobile: c } of Hs) {
			let l = r.querySelector(s), u = i.get(a);
			if (!l) {
				u?.unmount(), i.delete(a);
				continue;
			}
			if (u?.target === l && u.signature === o) continue;
			u?.unmount();
			let d = e(l, Rs, {
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
var Ws = ["data-id"], Gs = { class: "genre-content" }, Ks = { class: "kicker" }, qs = { class: "foot" }, Js = {
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
		}, null, -1), J("div", Gs, [J("div", null, [
			J("div", Ks, A(e.family) + " · " + A(e.bpm[0]) + "–" + A(e.bpm[1]) + " BPM", 1),
			J("h3", null, A(e.name), 1),
			J("p", null, A(e.tagline), 1)
		]), J("div", qs, [J("span", null, A(e.era), 1), n[0] ||= J("span", { style: { color: "#ffacd9" } }, "Открыть →", -1)])])], 12, Ws))), 128));
	}
}, Ys = { class: "genre-family-toolbar" }, Xs = { class: "search-box" }, Zs = ["innerHTML"], Qs = { class: "hint" }, $s = { class: "genre-family-summary" }, ec = { id: "catalog-count" }, tc = {
	class: "hint",
	id: "sb-academy-search-hint"
}, nc = {
	id: "catalog-cards",
	class: "genre-families"
}, rc = [
	"data-family",
	"open",
	"onToggle"
], ic = {
	class: "genre-family-icon",
	"aria-hidden": "true"
}, ac = { class: "genre-family-heading" }, oc = { class: "genre-family-right" }, sc = { class: "genre-family-count" }, cc = { class: "genre-family-body" }, lc = {
	key: 0,
	class: "sb-sacred-index"
}, uc = {
	key: 0,
	class: "sb-sacred-overview"
}, dc = { class: "genre-grid" }, fc = { class: "sb-sacred-religions" }, pc = [
	"data-sb-religion",
	"open",
	"onToggle"
], mc = { class: "sb-sacred-religion-header" }, hc = {
	class: "sb-sacred-religion-icon",
	"aria-hidden": "true"
}, gc = { class: "sb-sacred-religion-label" }, _c = { class: "sb-sacred-count" }, vc = { class: "sb-sacred-religion-content" }, yc = [
	"data-sb-branch",
	"open",
	"onToggle"
], bc = { class: "sb-sacred-branch-header" }, xc = { class: "sb-sacred-branch-label" }, Sc = { class: "sb-sacred-count" }, Cc = { class: "sb-sacred-branch-content" }, wc = { class: "genre-grid" }, Tc = {
	key: 1,
	class: "genre-grid"
}, Ec = {
	key: 1,
	class: "genre-family-empty"
}, Dc = {
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
		let t = e, n = /* @__PURE__ */ Jt(t.snapshot.query || ""), r = /* @__PURE__ */ Rt({
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
			J("div", Ys, [J("label", Xs, [J("span", {
				innerHTML: e.searchIcon,
				"aria-hidden": "true"
			}, null, 8, Zs), z(J("input", {
				id: "genre-search",
				"onUpdate:modelValue": r[0] ||= (e) => n.value = e,
				type: "search",
				enterkeyhint: "search",
				autocapitalize: "off",
				spellcheck: "false",
				"aria-label": "Поиск жанров",
				placeholder: "Поиск жанра, поджанра или исполнителя…",
				autocomplete: "off"
			}, null, 512), [[bo, n.value]])]), J("span", Qs, A(e.snapshot.families.length) + " разделов · " + A(e.snapshot.families.reduce((e, t) => e + t.genres.length, 0)) + " жанров", 1)]),
			J("div", $s, [J("h2", ec, A(a.value ? "Найдено жанров" : "Музыкальные жанры") + " · " + A(s.value), 1), J("span", tc, A(c.value), 1)]),
			J("div", nc, [o.value.length ? (K(!0), q(W, { key: 0 }, V(o.value, (e) => (K(), q("details", {
				key: e.name,
				class: "genre-family",
				"data-family": e.name,
				style: O({ "--family-accent": e.meta.accent }),
				open: f("family", e.name),
				onToggle: (t) => p("family", e.name, t)
			}, [J("summary", null, [
				J("span", ic, A(e.meta.icon), 1),
				J("span", ac, [J("strong", null, A(e.name), 1), J("small", null, A(e.meta.desc), 1)]),
				J("span", oc, [J("span", sc, A(e.genres.length) + " " + A(m(e.genres.length)), 1), r[1] ||= J("svg", {
					class: "genre-family-chevron",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2",
					"aria-hidden": "true"
				}, [J("path", { d: "m5 9 7 7 7-7" })], -1)])
			]), J("div", cc, [e.name === "Религиозная музыка" ? (K(), q("div", lc, [
				r[5] ||= J("div", { class: "sb-sacred-intro" }, [
					J("span", { class: "sb-sacred-eyebrow" }, "МУЗЫКА МИРОВЫХ РЕЛИГИЙ"),
					J("h3", null, "Религии и музыкальные традиции"),
					J("p", null, "Открой религию, затем её направление или течение. Здесь представлены музыкальные традиции — их границы не всегда совпадают с конфессиональными.")
				], -1),
				u.value ? (K(), q("div", uc, [r[2] ||= J("div", { class: "sb-sacred-overview-label" }, "📖 Обзор раздела", -1), J("div", dc, [Y(Js, { genres: [u.value] }, null, 8, ["genres"])])])) : Z("", !0),
				J("div", fc, [(K(!0), q(W, null, V(d.value, (e) => (K(), q("details", {
					key: e.id,
					class: "sb-sacred-religion",
					"data-sb-religion": e.id,
					open: f("religion", e.id),
					onToggle: (t) => p("religion", e.id, t)
				}, [J("summary", mc, [
					J("span", hc, A(e.icon), 1),
					J("span", gc, [J("strong", null, A(e.name), 1), J("small", null, A(e.description), 1)]),
					J("span", _c, A(e.count), 1),
					r[3] ||= J("span", {
						class: "sb-sacred-chevron",
						"aria-hidden": "true"
					}, "⌄", -1)
				]), J("div", vc, [(K(!0), q(W, null, V(e.branches, (e) => (K(), q("details", {
					key: e.id,
					class: "sb-sacred-branch",
					"data-sb-branch": e.id,
					open: f("branch", e.id),
					onToggle: (t) => p("branch", e.id, t)
				}, [J("summary", bc, [
					J("span", xc, [J("strong", null, A(e.name), 1), J("small", null, A(e.description), 1)]),
					J("span", Sc, A(e.genres.length) + " " + A(h(e.genres.length)), 1),
					r[4] ||= J("span", {
						class: "sb-sacred-chevron",
						"aria-hidden": "true"
					}, "⌄", -1)
				]), J("div", Cc, [J("div", wc, [Y(Js, { genres: e.genres }, null, 8, ["genres"])])])], 40, yc))), 128))])], 40, pc))), 128))])
			])) : (K(), q("div", Tc, [Y(Js, { genres: e.genres }, null, 8, ["genres"])]))])], 44, rc))), 128)) : (K(), q("div", Ec, "Ничего не найдено. Попробуй другой запрос."))])
		], 64));
	}
};
// src/vue/academy/legacyAcademyBridge.js
function Oc({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ACADEMY, n = document.getElementById("app");
	if (!t || !n || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-academy-root");
		if (r?.target === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o?.families?.length) return;
		let s = e(a, Dc, {
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
var kc = {
	class: "gb-grid",
	"data-sb-vue-overview": ""
}, Ac = { class: "gb-column" }, jc = { class: "gb-panel pink" }, Mc = { class: "gb-unit" }, Nc = { class: "gb-unit" }, Pc = { class: "gb-unit" }, Fc = { class: "gb-panel" }, Ic = ["innerHTML"], Lc = { class: "gb-column" }, Rc = { class: "gb-panel blue" }, zc = { style: {
	"font-size": "26px",
	"font-weight": "900",
	color: "#ffe2b0"
} }, Bc = { class: "gb-artists" }, Vc = { class: "gb-panel pink" }, Hc = ["data-id"], Uc = ["innerHTML"], Wc = {
	__name: "GenreOverview",
	props: { genre: {
		type: Object,
		required: !0
	} },
	emits: ["select-tab"],
	setup(e) {
		return (t, n) => (K(), q("div", kc, [J("div", Ac, [J("section", jc, [
			n[7] ||= J("div", { class: "gb-sup" }, "01 / ЗНАКОМСТВО С ЖАНРОМ", -1),
			n[8] ||= J("h2", null, "Характер и звучание", -1),
			J("p", null, [J("strong", null, A(e.genre.tagline), 1)]),
			J("p", null, A(e.genre.description), 1),
			J("div", Mc, [n[2] ||= J("b", null, "🎸", -1), J("div", null, [n[1] ||= J("strong", null, "Инструменты", -1), J("span", null, A(e.genre.instruments) + ".", 1)])]),
			J("div", Nc, [n[4] ||= J("b", null, "🎛️", -1), J("div", null, [n[3] ||= J("strong", null, "Саунд", -1), J("span", null, A(e.genre.style) + ".", 1)])]),
			J("div", Pc, [n[6] ||= J("b", null, "✍️", -1), J("div", null, [n[5] ||= J("strong", null, "Тематика песен", -1), J("span", null, A(e.genre.themes) + ".", 1)])])
		]), J("section", Fc, [
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
			}, null, 8, Ic)])
		])]), J("div", Lc, [J("section", Rc, [
			n[12] ||= J("div", { class: "gb-sup" }, "02 / ПАСПОРТ НАПРАВЛЕНИЯ", -1),
			n[13] ||= J("h2", null, "История и сцена", -1),
			n[14] ||= J("div", { class: "info-label" }, "Эпоха", -1),
			J("p", null, A(e.genre.era), 1),
			n[15] ||= J("div", { class: "info-label" }, "Диапазон темпа", -1),
			J("p", zc, A(e.genre.bpm[0]) + "–" + A(e.genre.bpm[1]) + " BPM", 1),
			n[16] ||= J("div", { class: "info-label" }, "Исполнители для знакомства", -1),
			J("div", Bc, [(K(!0), q(W, null, V(e.genre.artists, (e) => (K(), q("span", { key: e }, A(e), 1))), 128))])
		]), J("section", Vc, [n[18] ||= Qi("<div class=\"gb-sup\">04 / ТВОЯ МУЗЫКА</div><h2>Преврати знания в трек</h2><p>Выбери вокал, настроение и темп, затем создай промпт и структуру песни в Suno Studio.</p><div class=\"gb-unit\"><b>🎤</b><div><strong>Вокал</strong><span>Мужской, женский или дуэт; можно использовать русский язык.</span></div></div><div class=\"gb-unit\"><b>⚡</b><div><strong>Динамика</strong><span>Настрой энергию и характер припева под историю.</span></div></div>", 5), J("button", {
			type: "button",
			class: "btn primary small",
			"data-action": "use-genre",
			"data-id": e.genre.id
		}, [J("span", {
			innerHTML: e.genre.icons.studio,
			"aria-hidden": "true"
		}, null, 8, Uc), n[17] ||= X(" Открыть студию ", -1)], 8, Hc)])])]));
	}
}, Gc = {
	key: 0,
	id: "sb-artist-expanded",
	class: "ahx-wrap",
	"data-sb-vue-artists": ""
}, Kc = { class: "ahx-intro" }, qc = { class: "gb-eyebrow" }, Jc = {
	class: "ahx-toolbar",
	role: "group",
	"aria-label": "Музыкальные сцены"
}, Yc = ["aria-pressed"], Xc = ["aria-pressed"], Zc = { class: "ahx-filters" }, Qc = { class: "ahx-search" }, $c = ["innerHTML"], el = {
	class: "ahx-filter-buttons",
	role: "group",
	"aria-label": "Фильтр исполнителей"
}, tl = [
	"data-vue-artist-filter",
	"aria-pressed",
	"onClick"
], nl = {
	id: "ahx-count",
	class: "ahx-count",
	"aria-live": "polite"
}, rl = { class: "ahx-section-head" }, il = { class: "ahx-eyebrow" }, al = { class: "ahx-num" }, ol = { class: "ahx-grid" }, sl = ["data-ahx-group"], cl = { class: "ahx-card-top" }, ll = {
	class: "ahx-avatar",
	"aria-hidden": "true"
}, ul = { class: "ahx-title" }, dl = { class: "ahx-era" }, fl = {
	key: 0,
	class: "ahx-track"
}, pl = {
	id: "ahx-no-results",
	class: "ahx-no-results"
}, ml = {
	key: 1,
	class: "ahx-empty"
}, hl = {
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
		let t = e, n = /* @__PURE__ */ Jt(t.catalog.initialScene()), r = /* @__PURE__ */ Jt(""), i = /* @__PURE__ */ Jt("all"), a = $(() => t.catalog.getScene(t.genre.id, n.value)), o = $(() => (a.value?.groups || []).map((e) => ({
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
			(e === "ru" || e === "world") && (n.value = e, t.catalog.setScene(e), r.value = "", i.value = "all", await bn(), t.enhanceProfiles?.());
		}
		return B(() => t.enhanceProfiles?.()), dr(() => t.enhanceProfiles?.()), (t, u) => a.value ? (K(), q("div", Gc, [
			J("div", Kc, [
				J("div", qc, "АКАДЕМИЯ SUNOBOOM · " + A(e.genre.name), 1),
				u[4] ||= J("h2", null, "Исполнители и композиторы", -1),
				J("p", null, A(a.value.description), 1)
			]),
			J("div", Jc, [J("button", {
				type: "button",
				"data-vue-artist-scene": "world",
				"aria-pressed": n.value === "world",
				class: k({ on: n.value === "world" }),
				onClick: u[0] ||= (e) => l("world")
			}, [u[5] ||= X(" 🌍 Мировая сцена ", -1), J("span", null, A(a.value.worldCount), 1)], 10, Yc), J("button", {
				type: "button",
				"data-vue-artist-scene": "ru",
				"aria-pressed": n.value === "ru",
				class: k({ on: n.value === "ru" }),
				onClick: u[1] ||= (e) => l("ru")
			}, [u[6] ||= X(" 🎤 Русскоязычные ", -1), J("span", null, A(a.value.ruCount), 1)], 10, Xc)]),
			c.value ? (K(), q(W, { key: 0 }, [
				J("div", Zc, [J("label", Qc, [J("span", {
					"aria-hidden": "true",
					innerHTML: e.genre.icons.overview
				}, null, 8, $c), z(J("input", {
					"onUpdate:modelValue": u[2] ||= (e) => r.value = e,
					type: "search",
					"data-vue-artist-search": "",
					placeholder: "Найти исполнителя или произведение…",
					"aria-label": "Поиск по исполнителям"
				}, null, 512), [[bo, r.value]])]), J("div", el, [(K(), q(W, null, V([
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
				}, A(e.label), 9, tl)), 64))])]),
				J("p", nl, "Показано " + A(s.value) + " из " + A(c.value) + " исполнителей.", 1),
				(K(!0), q(W, null, V(o.value, (e) => z((K(), q("section", {
					key: e.index,
					class: "ahx-section",
					"data-ahx-section": ""
				}, [J("div", rl, [J("div", null, [J("span", il, "0" + A(e.index + 1) + " / ИСПОЛНИТЕЛИ", 1), J("h3", null, A(e.index ? "Современная сцена и продолжатели" : "Классика и предшественники"), 1)]), J("span", al, A(e.artists.length), 1)]), J("div", ol, [(K(!0), q(W, null, V(e.artists, (e) => (K(), q("article", {
					key: e.key,
					class: "ahx-card",
					"data-ahx-group": e.group
				}, [
					J("div", cl, [J("span", ll, A(e.initials), 1), J("div", ul, [J("h4", null, A(e.name), 1), J("span", dl, A(e.period || "Музыкальная сцена"), 1)])]),
					J("span", { class: k(["ahx-role", { "ahx-role-neighbor": e.group === "adjacent" }]) }, A(e.label), 3),
					J("p", null, A(e.bio || "Музыкальное направление и характерный творческий почерк."), 1),
					e.track ? (K(), q("div", fl, [u[7] ||= J("small", null, "Ориентир для прослушивания", -1), J("strong", null, "♫ " + A(e.track), 1)])) : Z("", !0)
				], 8, sl))), 128))])])), [[Ra, e.artists.length]])), 128)),
				z(J("div", pl, " По заданному поиску исполнители не найдены. Попробуй другой запрос или выбери «Все». ", 512), [[Ra, s.value === 0]])
			], 64)) : (K(), q("div", ml, [
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
}, gl = {
	class: "idea-grid",
	"data-sb-vue-ideas": ""
}, _l = { class: "idea-badge" }, vl = { class: "actions" }, yl = ["data-id", "data-i"], bl = ["innerHTML"], xl = [
	"data-id",
	"data-i",
	"aria-pressed"
], Sl = ["innerHTML"], Cl = {
	__name: "GenreIdeas",
	props: { genre: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (K(), q("div", gl, [(K(!0), q(W, null, V(e.genre.allIdeas, (t) => (K(), q("div", {
			key: t.index,
			class: "idea"
		}, [
			J("div", _l, A(e.genre.name) + " · " + A(t.mood), 1),
			J("h3", null, A(t.title), 1),
			J("p", null, A(t.pitch), 1),
			J("div", vl, [J("button", {
				type: "button",
				class: "btn primary small",
				"data-action": "idea-use",
				"data-id": e.genre.id,
				"data-i": t.index
			}, [J("span", {
				"aria-hidden": "true",
				innerHTML: e.genre.icons.studio
			}, null, 8, bl), n[0] ||= X(" В студию ", -1)], 8, yl), J("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "idea-save",
				"data-id": e.genre.id,
				"data-i": t.index,
				"aria-pressed": t.saved ? "true" : "false"
			}, [J("span", {
				"aria-hidden": "true",
				innerHTML: e.genre.icons.heart
			}, null, 8, Sl), X(" " + A(t.saved ? "Сохранено" : "Сохранить"), 1)], 8, xl)])
		]))), 128))]));
	}
}, wl = {
	class: "panel",
	"data-sb-vue-prompts": ""
}, Tl = { class: "idea-grid" }, El = { class: "idea" }, Dl = ["data-id"], Ol = ["innerHTML"], kl = { class: "idea" }, Al = ["data-id"], jl = ["innerHTML"], Ml = {
	__name: "GenrePrompts",
	props: { genre: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (K(), q("div", wl, [
			n[5] ||= J("h3", null, "Шаблоны звучания", -1),
			n[6] ||= J("p", null, "Начни с одного из вариантов. Он перенесёт настройки жанра в конструктор — там можно выбрать вокал, настроение и язык.", -1),
			J("div", Tl, [J("div", El, [
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
				}, null, 8, Ol)], 8, Dl)
			]), J("div", kl, [
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
				}, null, 8, jl)], 8, Al)
			])])
		]));
	}
}, Nl = { class: "gb-hero" }, Pl = { class: "gb-content" }, Fl = { class: "gb-eyebrow" }, Il = { class: "gb-title" }, Ll = { class: "gb-desc" }, Rl = { class: "gb-tags" }, zl = { class: "gb-buttons" }, Bl = ["data-id"], Vl = ["innerHTML"], Hl = ["data-id"], Ul = ["innerHTML"], Wl = {
	class: "gb-vinyl",
	"aria-hidden": "true"
}, Gl = { class: "gb-equalizer" }, Kl = { class: "gb-facts" }, ql = { class: "gb-fact" }, Jl = { class: "gb-fact" }, Yl = { class: "gb-fact" }, Xl = { class: "gb-fact" }, Zl = { class: "genre-detail-layout" }, Ql = {
	class: "genre-side-nav",
	"aria-label": "ЖАНР-НАВ — меню жанра"
}, $l = {
	class: "genre-side-links",
	"aria-label": "Разделы жанра"
}, eu = [
	"data-tab",
	"aria-current",
	"onClick"
], tu = ["innerHTML"], nu = {
	class: "genre-detail-content",
	id: "genre-nav-content",
	"aria-label": "Содержимое раздела жанра"
}, ru = ["innerHTML"], iu = {
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
		], r = /* @__PURE__ */ Jt(t.genre.tab), i = /* @__PURE__ */ Jt(t.tabContent(t.genre.id, r.value) || "");
		async function a(e) {
			if (r.value === e || !n.some((t) => t.id === e)) return;
			let a = t.tabContent(t.genre.id, e);
			typeof a == "string" && (r.value = e, i.value = a, await bn(), window.innerWidth <= 850 && document.getElementById("genre-nav-content")?.scrollIntoView({
				block: "start",
				behavior: "smooth"
			}));
		}
		return (t, o) => (K(), q("div", {
			class: "genre-bright",
			style: O({ "--accent": e.genre.color })
		}, [J("div", Nl, [
			o[5] ||= J("div", { class: "gb-top" }, [J("button", {
				type: "button",
				class: "back",
				"data-action": "academy-back",
				"aria-label": "Назад к разделу Академии"
			}, "← Назад"), J("small", null, "SUNOBOOM · MUSIC ATLAS")], -1),
			J("div", Pl, [J("div", null, [
				J("div", Fl, A(e.genre.family) + " · " + A(e.genre.era), 1),
				J("h1", Il, A(e.genre.name), 1),
				J("p", Ll, A(e.genre.description), 1),
				J("div", Rl, [
					J("span", null, A(e.genre.tagline), 1),
					J("span", null, A(e.genre.bpm[0]) + "–" + A(e.genre.bpm[1]) + " BPM", 1),
					J("span", null, A(e.genre.ideasCount) + " идеи", 1)
				]),
				J("div", zl, [J("button", {
					type: "button",
					class: "btn primary",
					"data-action": "use-genre",
					"data-id": e.genre.id
				}, [J("span", {
					innerHTML: e.genre.icons.studio,
					"aria-hidden": "true"
				}, null, 8, Vl), o[0] ||= X(" Создать в Suno ", -1)], 8, Bl), J("button", {
					type: "button",
					class: "btn ghost",
					"data-action": "favorite",
					"data-id": e.genre.id
				}, [J("span", {
					innerHTML: e.genre.icons.heart,
					"aria-hidden": "true"
				}, null, 8, Ul), X(" " + A(e.genre.favorite ? "В избранном" : "В избранное"), 1)], 8, Hl)])
			]), J("div", Wl, [J("div", Gl, [(K(), q(W, null, V(9, (e) => J("i", { key: e })), 64))])])]),
			J("div", Kl, [
				J("div", ql, [o[1] ||= J("small", null, "История", -1), J("strong", null, A(e.genre.era), 1)]),
				J("div", Jl, [o[2] ||= J("small", null, "Темп", -1), J("strong", null, A(e.genre.bpm[0]) + "–" + A(e.genre.bpm[1]) + " BPM", 1)]),
				J("div", Yl, [o[3] ||= J("small", null, "Треки", -1), J("strong", null, A(e.genre.ideasCount) + " сюжетных идеи", 1)]),
				J("div", Xl, [o[4] ||= J("small", null, "Артисты", -1), J("strong", null, A(e.genre.artistCount) + " ориентиров", 1)])
			])
		]), J("div", Zl, [J("aside", Ql, [o[7] ||= J("div", { class: "genre-side-head" }, [J("span", null, "ЖАНР-НАВ"), J("small", null, "Разделы карточки")], -1), J("nav", $l, [(K(), q(W, null, V(n, (t) => J("button", {
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
			}, null, 8, tu),
			J("span", null, A(t.label), 1),
			o[6] ||= J("span", {
				class: "genre-side-chevron",
				"aria-hidden": "true"
			}, "›", -1)
		], 10, eu)), 64))])]), J("section", nu, [r.value === "overview" ? (K(), Wi(Wc, {
			key: 0,
			genre: e.genre,
			onSelectTab: a
		}, null, 8, ["genre"])) : r.value === "artists" && e.artistCatalog ? (K(), Wi(hl, {
			key: 1,
			genre: e.genre,
			catalog: e.artistCatalog,
			"enhance-profiles": e.enhanceArtistProfiles
		}, null, 8, [
			"genre",
			"catalog",
			"enhance-profiles"
		])) : r.value === "ideas" ? (K(), Wi(Cl, {
			key: 2,
			genre: e.genre
		}, null, 8, ["genre"])) : r.value === "prompts" ? (K(), Wi(Ml, {
			key: 3,
			genre: e.genre
		}, null, 8, ["genre"])) : (K(), q("div", {
			key: 4,
			innerHTML: i.value
		}, null, 8, ru))])])], 4));
	}
};
// src/vue/academy/legacyGenreDetailBridge.js
function au({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_GENRE, n = document.getElementById("app");
	if (!n || !t || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-genre-detail");
		if (r?.target === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o?.id) return;
		let s = e(a, iu, {
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
var ou = { class: "panel" }, su = { class: "field" }, cu = ["value"], lu = ["value"], uu = { class: "form-grid" }, du = { class: "field" }, fu = ["value"], pu = ["value"], mu = { class: "field" }, hu = ["value"], gu = ["value"], _u = { class: "field" }, vu = ["value"], yu = ["value"], bu = { class: "field" }, xu = ["value"], Su = ["value"], Cu = { class: "field" }, wu = { for: "b-tempo" }, Tu = {
	id: "tempo-num",
	style: { color: "#ffa8d5" }
}, Eu = { class: "range" }, Du = ["value"], Ou = { id: "bpm-output" }, ku = {
	class: "muted",
	style: { "font-size": "11px" }
}, Au = { class: "field" }, ju = ["value"], Mu = { class: "field" }, Nu = ["value"], Pu = { class: "checkrow" }, Fu = ["checked", "onChange"], Iu = {
	class: "panel",
	style: {
		position: "sticky",
		top: "20px"
	}
}, Lu = {
	class: "output",
	id: "prompt-output"
}, Ru = { class: "counter" }, zu = { id: "prompt-count" }, Bu = { class: "two-col" }, Vu = {
	class: "btn primary",
	type: "button",
	"data-action": "copy-prompt"
}, Hu = ["innerHTML"], Uu = {
	class: "btn ghost",
	type: "button",
	"data-action": "save-prompt"
}, Wu = ["innerHTML"], Gu = { class: "list-pills" }, Ku = {
	__name: "StudioBuilder",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Yt(t.api.snapshot()), r = $(() => n.value?.settings || {}), i = $(() => n.value?.genre || {
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
		return B(() => window.addEventListener("sunoboom:studio-updated", d)), pr(() => window.removeEventListener("sunoboom:studio-updated", d)), (e, t) => (K(), q(W, null, [J("div", ou, [
			t[17] ||= J("h3", null, "Параметры трека", -1),
			J("div", su, [t[8] ||= J("label", { for: "b-genre" }, "Жанр", -1), J("select", {
				id: "b-genre",
				value: r.value.genre,
				onChange: t[0] ||= (e) => f("genre", e.target.value)
			}, [(K(!0), q(W, null, V(n.value.genres, (e) => (K(), q("option", {
				key: e.id,
				value: e.id
			}, A(e.name), 9, lu))), 128))], 40, cu)]),
			J("div", uu, [
				J("div", du, [t[9] ||= J("label", { for: "b-mood" }, "Настроение", -1), J("select", {
					id: "b-mood",
					value: r.value.mood,
					onChange: t[1] ||= (e) => f("mood", e.target.value)
				}, [(K(), q(W, null, V(o, ([e, t]) => J("option", {
					key: e,
					value: e
				}, A(t), 9, pu)), 64))], 40, fu)]),
				J("div", mu, [t[10] ||= J("label", { for: "b-vocal" }, "Вокал", -1), J("select", {
					id: "b-vocal",
					value: r.value.vocal,
					onChange: t[2] ||= (e) => f("vocal", e.target.value)
				}, [(K(), q(W, null, V(s, ([e, t]) => J("option", {
					key: e,
					value: e
				}, A(t), 9, gu)), 64))], 40, hu)]),
				J("div", _u, [t[11] ||= J("label", { for: "b-lang" }, "Язык текста", -1), J("select", {
					id: "b-lang",
					value: r.value.language,
					onChange: t[3] ||= (e) => f("language", e.target.value)
				}, [(K(), q(W, null, V(c, ([e, t]) => J("option", {
					key: e,
					value: e
				}, A(t), 9, yu)), 64))], 40, vu)]),
				J("div", bu, [t[12] ||= J("label", { for: "b-energy" }, "Энергия", -1), J("select", {
					id: "b-energy",
					value: r.value.energy,
					onChange: t[4] ||= (e) => f("energy", e.target.value)
				}, [(K(), q(W, null, V(l, ([e, t]) => J("option", {
					key: e,
					value: e
				}, A(t), 9, Su)), 64))], 40, xu)])
			]),
			J("div", Cu, [
				J("label", wu, [
					t[13] ||= X("Темп · ", -1),
					J("span", Tu, A(r.value.tempo), 1),
					t[14] ||= X(" BPM", -1)
				]),
				J("div", Eu, [J("input", {
					type: "range",
					id: "b-tempo",
					min: "65",
					max: "200",
					step: "1",
					value: r.value.tempo,
					onInput: t[5] ||= (e) => f("tempo", Number(e.target.value))
				}, null, 40, Du), J("output", Ou, A(r.value.tempo) + " BPM", 1)]),
				J("span", ku, " Обычно для «" + A(i.value.name) + "»: " + A(i.value.bpm[0]) + "–" + A(i.value.bpm[1]) + " BPM ", 1)
			]),
			J("div", Au, [t[15] ||= J("label", { for: "b-theme" }, "Тема / история трека", -1), J("textarea", {
				id: "b-theme",
				rows: "2",
				value: r.value.theme,
				onInput: t[6] ||= (e) => f("theme", e.target.value),
				placeholder: "О чём будет песня?"
			}, null, 40, ju)]),
			J("div", Mu, [t[16] ||= J("label", { for: "b-extra" }, "Дополнительные инструкции (необязательно)", -1), J("textarea", {
				id: "b-extra",
				rows: "2",
				value: r.value.extra,
				onInput: t[7] ||= (e) => f("extra", e.target.value),
				placeholder: "Например: memorable chorus, short guitar solo"
			}, null, 40, Nu)]),
			J("div", Pu, [(K(), q(W, null, V(u, ([e, t]) => J("label", { key: e }, [J("input", {
				type: "checkbox",
				checked: r.value[e],
				onChange: (t) => f(e, t.target.checked)
			}, null, 40, Fu), X(A(t), 1)])), 64))])
		]), J("div", Iu, [
			t[21] ||= J("div", { class: "eyebrow" }, "Готово к Suno", -1),
			t[22] ||= J("h3", null, "Твой промпт", -1),
			J("div", Lu, A(a.value), 1),
			J("div", Ru, [t[18] ||= J("span", null, "Максимум 1000 символов", -1), J("b", zu, A(a.value.length) + " / 1000", 1)]),
			J("div", Bu, [J("button", Vu, [J("span", {
				"aria-hidden": "true",
				innerHTML: n.value.icons.copy
			}, null, 8, Hu), t[19] ||= X(" Копировать ", -1)]), J("button", Uu, [J("span", {
				"aria-hidden": "true",
				innerHTML: n.value.icons.save
			}, null, 8, Wu), t[20] ||= X(" Сохранить ", -1)])]),
			t[23] ||= J("div", { class: "spacer" }, null, -1),
			t[24] ||= J("div", { class: "notice" }, [J("strong", null, "Подсказка:"), X(" промпт задаёт стиль, а текст песни можно вводить отдельно в Suno. Результат генерации может отличаться от запроса.")], -1),
			t[25] ||= J("div", { class: "spacer" }, null, -1),
			t[26] ||= J("div", { class: "info-label" }, "Музыкальный профиль", -1),
			J("div", Gu, [
				J("span", null, A(i.value.name), 1),
				J("span", null, A(i.value.family), 1),
				J("span", null, A(i.value.bpm[0]) + "–" + A(i.value.bpm[1]) + " BPM", 1)
			])
		])], 64));
	}
};
// src/vue/studio/legacyStudioBridge.js
function qu({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_STUDIO, n = document.getElementById("app");
	if (!n || !t || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector(".studio-grid");
		if (r?.target === a || (r &&= (r.unmount(), null), !a || !t.snapshot())) return;
		let o = e(a, Ku, { api: t });
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
var Ju = { class: "gm-layout" }, Yu = { class: "gm-panel" }, Xu = { class: "gm-stack" }, Zu = { class: "gm-row-top" }, Qu = { class: "gm-rank" }, $u = { class: "gm-field gm-genre-select" }, ed = ["for"], td = [
	"id",
	"value",
	"data-gm-genre"
], nd = ["label"], rd = ["value"], id = ["data-gm-value"], ad = [
	"data-slot",
	"aria-label",
	"disabled"
], od = { class: "gm-slider-line" }, sd = [
	"max",
	"value",
	"data-gm-weight",
	"aria-label"
], cd = { class: "gm-meter" }, ld = ["data-gm-meter"], ud = { class: "gm-sub" }, dd = { class: "gm-actions" }, fd = ["disabled"], pd = {
	class: "gm-mixture",
	"aria-label": "Доли музыкальных жанров"
}, md = ["data-gm-mixbar", "title"], hd = { class: "gm-form-grid" }, gd = ["for"], _d = [
	"id",
	"value",
	"data-gm-setting"
], vd = ["value"], yd = { class: "gm-tempo" }, bd = ["checked"], xd = { class: "gm-tempo-row" }, Sd = ["value", "disabled"], Cd = { id: "gm-bpm" }, wd = { class: "gm-field" }, Td = ["value"], Ed = { class: "gm-checks" }, Dd = ["data-gm-setting", "checked"], Od = { class: "gm-panel gm-output-panel" }, kd = {
	class: "gm-output",
	id: "gm-prompt",
	"aria-live": "polite"
}, Ad = { class: "gm-prompt-meta" }, jd = { id: "gm-count" }, Md = { class: "gm-field" }, Nd = ["value"], Pd = { class: "gm-saved-list" }, Fd = {
	key: 0,
	class: "gm-muted"
}, Id = { class: "gm-saved-actions" }, Ld = ["data-id"], Rd = ["data-id", "aria-label"], zd = {
	__name: "GenreMixer",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Yt(t.api.snapshot()), r = $(() => n.value?.rows || []), i = $(() => n.value?.genres || []), a = $(() => n.value?.settings || {}), o = $(() => n.value?.options || {}), s = $(() => n.value?.saved || []), c = $(() => n.value?.prompt || ""), l = $(() => n.value?.tempo || 115), u = $(() => n.value?.title || "");
		function d() {
			let e = t.api.snapshot();
			e && (n.value = e);
		}
		B(() => window.addEventListener("sunoboom:mixer-updated", d)), pr(() => window.removeEventListener("sunoboom:mixer-updated", d));
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
		], -1), J("div", Ju, [J("section", Yu, [
			t[3] ||= J("div", { class: "gm-section-head" }, [J("div", null, [J("h2", null, "Формула звучания"), J("p", null, "Меняй жанры и двигай ползунки — сумма всегда равна 100%.")]), J("span", { class: "gm-total" }, "Σ 100%")], -1),
			J("div", Xu, [(K(!0), q(W, null, V(r.value, (e, t) => (K(), q("article", {
				key: e.id,
				class: "gm-row",
				style: O({ "--gm-color": e.color })
			}, [
				J("div", Zu, [
					J("span", Qu, A(String(t + 1).padStart(2, "0")), 1),
					J("div", $u, [J("label", { for: "gm-genre-" + t }, "Музыкальное направление", 8, ed), J("select", {
						id: "gm-genre-" + t,
						value: e.id,
						"data-gm-genre": t
					}, [(K(!0), q(W, null, V(f(t), (e) => (K(), q("optgroup", {
						key: e.family,
						label: e.family
					}, [(K(!0), q(W, null, V(e.items, (e) => (K(), q("option", {
						key: e.id,
						value: e.id
					}, A(e.name), 9, rd))), 128))], 8, nd))), 128))], 8, td)]),
					J("span", {
						class: "gm-percent",
						"data-gm-value": t
					}, A(e.weight) + "%", 9, id),
					J("button", {
						type: "button",
						class: "gm-remove",
						"data-action": "gm-remove",
						"data-slot": t,
						"aria-label": "Убрать жанр " + e.name,
						title: "Убрать жанр",
						disabled: r.value.length <= 2
					}, "×", 8, ad)
				]),
				J("div", od, [J("input", {
					type: "range",
					min: "5",
					max: 100 - 5 * (r.value.length - 1),
					step: "1",
					value: e.weight,
					"data-gm-weight": t,
					"aria-label": "Доля жанра " + e.name
				}, null, 8, sd), J("div", cd, [J("span", {
					"data-gm-meter": t,
					style: O({ width: e.weight + "%" })
				}, null, 12, ld)])]),
				J("p", ud, A(e.family) + " · " + A(e.tagline) + " · " + A(e.instruments), 1)
			], 4))), 128))]),
			J("div", dd, [J("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "gm-add",
				disabled: r.value.length >= 4
			}, "＋ Добавить жанр", 8, fd), t[0] ||= J("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "gm-equal"
			}, "Поровну", -1)]),
			J("div", pd, [(K(!0), q(W, null, V(r.value, (e) => (K(), q("span", {
				key: e.id,
				"data-gm-mixbar": e.id,
				style: O({
					width: e.weight + "%",
					background: e.color
				}),
				title: e.name + ": " + e.weight + "%"
			}, null, 12, md))), 128))]),
			t[4] ||= J("p", { class: "gm-muted" }, "Проценты — творческий ориентир для генерации, а не гарантия точного соотношения в готовой музыке.", -1),
			t[5] ||= J("div", { class: "gm-divider" }, null, -1),
			t[6] ||= J("h2", null, "Характер композиции", -1),
			J("div", hd, [(K(!0), q(W, null, V(p.value, (e) => (K(), q("div", {
				key: e.key,
				class: "gm-field"
			}, [J("label", { for: "gm-" + e.key }, A(e.label), 9, gd), J("select", {
				id: "gm-" + e.key,
				value: a.value[e.key],
				"data-gm-setting": e.key
			}, [(K(!0), q(W, null, V(e.choices, ([e, t]) => (K(), q("option", {
				key: e,
				value: e
			}, A(t), 9, vd))), 128))], 8, _d)]))), 128))]),
			J("div", yd, [J("label", null, [J("input", {
				type: "checkbox",
				"data-gm-setting": "autoTempo",
				checked: a.value.autoTempo
			}, null, 8, bd), t[1] ||= X(" Определять темп по жанрам", -1)]), J("div", xd, [J("input", {
				id: "gm-tempo",
				type: "range",
				min: "65",
				max: "200",
				value: l.value,
				"data-gm-setting": "tempo",
				disabled: a.value.autoTempo
			}, null, 8, Sd), J("b", Cd, A(l.value) + " BPM", 1)])]),
			J("div", wd, [t[2] ||= J("label", { for: "gm-theme" }, "Тема песни (необязательно)", -1), J("textarea", {
				id: "gm-theme",
				rows: "2",
				maxlength: "170",
				"data-gm-setting": "theme",
				value: a.value.theme,
				placeholder: "Например: ночной город, встреча после долгой разлуки"
			}, null, 8, Td)]),
			J("div", Ed, [(K(), q(W, null, V(m, ([e, t]) => J("label", { key: e }, [J("input", {
				type: "checkbox",
				"data-gm-setting": e,
				checked: a.value[e]
			}, null, 8, Dd), X(" " + A(t), 1)])), 64))])
		]), J("aside", Od, [
			t[9] ||= J("div", { class: "eyebrow" }, "Результат микширования", -1),
			t[10] ||= J("h2", null, "Гибридный Style-промпт", -1),
			J("div", kd, A(c.value), 1),
			J("div", Ad, [t[7] ||= J("span", null, "На английском · готово для Suno", -1), J("b", jd, A(c.value.length) + " / 1000", 1)]),
			t[11] ||= Qi("<div class=\"gm-output-actions\"><button type=\"button\" class=\"btn primary\" data-action=\"gm-copy\">Копировать</button><button type=\"button\" class=\"btn ghost\" data-action=\"gm-to-studio\">В Suno Studio</button></div><button type=\"button\" class=\"btn ghost gm-full\" data-action=\"gm-save-prompt\">Сохранить в «Мои промпты»</button><div class=\"gm-divider\"></div><h3>Мои сочетания</h3>", 4),
			J("div", Md, [t[8] ||= J("label", { for: "gm-title" }, "Название сочетания", -1), J("input", {
				id: "gm-title",
				type: "text",
				maxlength: "90",
				"data-gm-title": "",
				value: u.value,
				placeholder: "Например: Северный электро-фолк"
			}, null, 8, Nd)]),
			t[12] ||= J("button", {
				type: "button",
				class: "btn ghost gm-full",
				"data-action": "gm-save-mix"
			}, "Сохранить формулу", -1),
			J("div", Pd, [s.value.length ? Z("", !0) : (K(), q("p", Fd, "Сохранённых сочетаний пока нет. Придумай свой микс и сохрани его.")), (K(!0), q(W, null, V(s.value, (e) => (K(), q("article", {
				key: e.id,
				class: "gm-saved"
			}, [J("div", null, [J("strong", null, A(e.title), 1), J("small", null, A(e.summary), 1)]), J("div", Id, [J("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "gm-load",
				"data-id": e.id
			}, "Открыть", 8, Ld), J("button", {
				type: "button",
				class: "btn danger small",
				"data-action": "gm-delete",
				"data-id": e.id,
				"aria-label": "Удалить " + e.title
			}, "×", 8, Rd)])]))), 128))]),
			t[13] ||= J("p", { class: "gm-muted" }, "Сохраняется в этом браузере и входит в общую JSON-копию данных SUNOBOOM. Подключение к ИИ для смешивания не требуется.", -1)
		])])], 64));
	}
};
// src/vue/studio/legacyMixerBridge.js
function Bd({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_MIXER, n = document.getElementById("app");
	if (!t || !n || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-mixer-root");
		if (r?.target === a || (r &&= (r.unmount(), null), !a || !t.snapshot())) return;
		let o = e(a, zd, { api: t });
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
var Vd = {
	class: "sbpa-tabs",
	role: "group",
	"aria-label": "Источник промпта"
}, Hd = ["aria-pressed"], Ud = ["aria-pressed"], Wd = {
	key: 0,
	class: "sbpa-manual"
}, Gd = ["value"], Kd = ["value"], qd = ["value"], Jd = {
	key: 1,
	class: "sbpa-context"
}, Yd = {
	id: "sbpa-results",
	"aria-live": "polite"
}, Xd = { class: "sbpa-scoreline" }, Zd = {
	class: "sbpa-score",
	"aria-label": "Эвристическая оценка промпта"
}, Qd = { class: "sbpa-score-info" }, $d = ["aria-valuenow"], ef = {
	key: 0,
	class: "sbpa-issues"
}, tf = {
	key: 1,
	class: "sbpa-clear"
}, nf = { class: "sbpa-actions" }, rf = {
	key: 0,
	type: "button",
	"data-sbpa-action": "load-studio"
}, af = { id: "sbpa-proposal-slot" }, of = {
	key: 0,
	class: "sbpa-proposal"
}, sf = { key: 0 }, cf = { key: 1 }, lf = { key: 2 }, uf = {
	key: 3,
	class: "sbpa-alert"
}, df = ["value"], ff = {
	__name: "PromptAuditor",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Yt(t.api.snapshot()), r = $(() => n.value?.mode === "manual"), i = $(() => n.value?.report || {
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
		return B(() => window.addEventListener("sunoboom:auditor-updated", l)), pr(() => window.removeEventListener("sunoboom:auditor-updated", l)), (e, t) => (K(), q(W, null, [
			t[10] ||= J("header", { class: "sbpa-head" }, [J("div", null, [
				J("span", { class: "sbpa-eyebrow" }, "SUNOBOOM · ПРОВЕРКА"),
				J("h2", null, "Интеллектуальный аудитор промптов"),
				J("p", null, "Ищет повторы, противоречия, перегрузку и особенности жанра до отправки в Suno.")
			]), J("span", { class: "sbpa-local" }, "Проверка по правилам · без API")], -1),
			J("div", Vd, [J("button", {
				type: "button",
				"data-sbpa-action": "studio",
				class: k({ active: !r.value }),
				"aria-pressed": !r.value
			}, "Текущий промпт Studio", 10, Hd), J("button", {
				type: "button",
				"data-sbpa-action": "manual",
				class: k({ active: r.value }),
				"aria-pressed": r.value
			}, "Свой текст / вставка", 10, Ud)]),
			r.value ? (K(), q("div", Wd, [
				t[0] ||= J("label", { for: "sbpa-text" }, "Текст промпта", -1),
				J("textarea", {
					id: "sbpa-text",
					rows: "5",
					spellcheck: "false",
					placeholder: "Вставь текст на русском или английском…",
					value: n.value.manual
				}, null, 8, Gd),
				t[1] ||= J("label", { for: "sbpa-genre" }, "Жанр для сопоставления с Академией", -1),
				J("select", {
					id: "sbpa-genre",
					value: a.value
				}, [(K(!0), q(W, null, V(o.value, (e) => (K(), q("option", {
					key: e.id,
					value: e.id
				}, A(e.name), 9, qd))), 128))], 8, Kd)
			])) : (K(), q("p", Jd, " Проверяется актуальный промпт конструктора. Изменения настроек Studio отражаются здесь автоматически. ")),
			J("div", Yd, [J("div", Xd, [
				J("div", Zd, [X(A(i.value.score), 1), t[2] ||= J("small", null, "/ 100", -1)]),
				J("div", Qd, [
					J("strong", null, A(i.value.status), 1),
					t[3] ||= J("span", null, "Оценка ориентировочная: проверяется структура текста, а не качество будущей музыки.", -1),
					J("div", {
						class: "sbpa-meter",
						role: "progressbar",
						"aria-label": "Оценка промпта",
						"aria-valuenow": i.value.score,
						"aria-valuemin": "0",
						"aria-valuemax": "100"
					}, [J("span", { style: O({ width: i.value.score + "%" }) }, null, 4)], 8, $d)
				]),
				J("div", { class: k(["sbpa-limit", { over: i.value.length > 1e3 }]) }, A(i.value.length) + " / 1000 символов ", 3)
			]), i.value.issues?.length ? (K(), q("ul", ef, [(K(!0), q(W, null, V(i.value.issues, (e, t) => (K(), q("li", {
				key: t,
				class: k(["sbpa-item", "sbpa-" + e.kind])
			}, [J("div", null, [
				J("strong", null, A(e.title), 1),
				J("p", null, A(e.detail), 1),
				J("small", null, A(e.fix), 1)
			])], 2))), 128))])) : (K(), q("p", tf, " Явных противоречий и повторов по проверяемым правилам не найдено. "))]),
			J("div", nf, [t[4] ||= J("button", {
				type: "button",
				"data-sbpa-action": "preview",
				class: "sbpa-primary"
			}, " Показать улучшенный вариант ", -1), r.value ? (K(), q("button", rf, " Вставить текущий промпт Studio ")) : Z("", !0)]),
			J("div", af, [s.value ? (K(), q("div", of, [
				J("h4", null, [t[5] ||= X("Предлагаемый вариант ", -1), J("small", null, A(c.value.text.length) + " / 1000", 1)]),
				c.value.removed.length ? (K(), q("p", cf, "Удалено фрагментов: " + A(c.value.removed.length) + ". Проверь смысл до копирования.", 1)) : (K(), q("p", sf, "Удалять нечего: текст уже без точных повторов.")),
				c.value.removed.length ? (K(), q("details", lf, [t[6] ||= J("summary", null, "Что изменилось", -1), J("ul", null, [(K(!0), q(W, null, V(c.value.removed, (e, t) => (K(), q("li", { key: t }, [J("b", null, A(e.reason) + ":", 1), X(" " + A(e.part), 1)]))), 128))])])) : Z("", !0),
				c.value.complete ? Z("", !0) : (K(), q("p", uf, " Автоматического сокращения недостаточно. Уменьши текст вручную минимум на " + A(c.value.text.length - 1e3) + " символов. ", 1)),
				t[7] ||= J("label", { for: "sbpa-preview-text" }, "Редактируемый предпросмотр", -1),
				J("textarea", {
					id: "sbpa-preview-text",
					rows: "5",
					spellcheck: "false",
					value: c.value.text
				}, null, 8, df),
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
function pf({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_AUDITOR, n = document.getElementById("app");
	if (!t || !n || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sbpa-auditor");
		if (r?.target === a || (r &&= (r.unmount(), null), !a || !t.snapshot())) return;
		let o = e(a, ff, { api: t });
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
var mf = ["data-sba-id", "data-sba-energy"], hf = { class: "sba-block-head" }, gf = ["data-sba-drag", "aria-label"], _f = { class: "sba-index" }, vf = {
	class: "sba-emoji",
	"aria-hidden": "true"
}, yf = { class: "sba-head-energy" }, bf = { class: "sba-block-actions" }, xf = ["data-id", "disabled"], Sf = ["data-id", "disabled"], Cf = ["data-id"], wf = ["data-id"], Tf = { class: "sba-block-fields" }, Ef = ["data-id", "value"], Df = ["value"], Of = ["data-id", "value"], kf = ["value"], Af = ["data-id", "value"], jf = ["value"], Mf = { class: "sba-energy-field" }, Nf = ["data-sba-output"], Pf = ["value", "data-id"], Ff = { class: "sba-instrument-field" }, If = ["for"], Lf = { class: "sba-instrument-row" }, Rf = [
	"id",
	"data-id",
	"value"
], zf = ["id", "innerHTML"], Bf = ["id"], Vf = { class: "sba-sound-head" }, Hf = ["data-id"], Uf = ["data-id"], Wf = ["id"], Gf = {
	key: 0,
	class: "sba-sound-back"
}, Kf = ["data-id"], qf = [
	"data-sba-sound-search",
	"data-id",
	"value",
	"placeholder"
], Jf = ["id"], Yf = { class: "sba-sound-info" }, Xf = { key: 0 }, Zf = ["data-id", "data-genre-id"], Qf = {
	key: 0,
	class: "sba-sound-none"
}, $f = { class: "sba-sound-group" }, ep = [
	"disabled",
	"aria-disabled",
	"data-id",
	"data-sound-value"
], tp = {
	key: 0,
	class: "sba-sound-none"
}, np = {
	key: 1,
	class: "sba-sound-foot"
}, rp = ["data-id"], ip = {
	key: 0,
	class: "sba-custom-label"
}, ap = ["data-id", "value"], op = ["innerHTML"], sp = ["data-id", "aria-label"], cp = {
	key: 0,
	class: "sba-empty"
}, lp = ["aria-label"], up = [
	"data-sba-snake-id",
	"data-sba-energy",
	"aria-label",
	"title"
], dp = { class: "sba-snake-num" }, fp = {
	class: "sba-snake-icon",
	"aria-hidden": "true"
}, pp = { class: "sba-snake-title" }, mp = { class: "sba-snake-level" }, hp = ["title"], gp = {
	key: 0,
	class: "sba-snake-more"
}, _p = {
	key: 1,
	class: "sba-snake-empty"
}, vp = ["data-sba-hub-from"], yp = { class: "sba-transition-hub-route" }, bp = { class: "sba-transition-hub-number" }, xp = { class: "sba-transition-hub-names" }, Sp = { class: "sba-transition-hub-controls" }, Cp = [
	"data-id",
	"value",
	"aria-label"
], wp = ["value"], Tp = [
	"data-id",
	"value",
	"aria-label"
], Ep = ["value"], Dp = [
	"data-id",
	"value",
	"aria-label"
], Op = ["value"], kp = { class: "sba-transition-hub-actions" }, Ap = ["data-id", "title"], jp = ["data-id"], Mp = {
	key: 1,
	class: "sba-transition-hub-empty"
}, Np = ["title"], Pp = { class: "sba-chart-column" }, Fp = {
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
		let t = e, n = /* @__PURE__ */ Yt(t.api.snapshot()), r = $(() => n.value?.blocks || []), i = $(() => n.value?.sections || []), a = $(() => n.value?.voices || []), o = $(() => n.value?.energies || {}), s = $(() => n.value?.transitions || []), c = $(() => n.value?.transitionTypes || []), l = $(() => n.value?.transitionLengths || []), u = $(() => n.value?.transitionStrengths || []), d = $(() => n.value?.snakeExpanded ? r.value : r.value.slice(0, 12)), f = $(() => n.value?.transitionHubExpanded ? s.value : s.value.slice(0, 3)), p = [
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
		B(() => window.addEventListener("sunoboom:arranger-updated", m)), pr(() => window.removeEventListener("sunoboom:arranger-updated", m));
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
			}, [J("div", hf, [
				J("span", {
					class: "sba-drag",
					draggable: "true",
					"data-sba-drag": e.id,
					title: "Перетащить блок",
					"aria-label": "Перетащить " + e.sectionName
				}, "⠿", 8, gf),
				J("span", _f, A(String(t + 1).padStart(2, "0")), 1),
				J("span", vf, A(e.icon), 1),
				J("strong", null, A(e.label), 1),
				J("span", yf, "Энергия " + A(e.energy) + "/5", 1),
				J("div", bf, [
					J("button", {
						type: "button",
						"data-sba-action": "up",
						"data-id": e.id,
						"aria-label": "Переместить вверх",
						disabled: t === 0
					}, "↑", 8, xf),
					J("button", {
						type: "button",
						"data-sba-action": "down",
						"data-id": e.id,
						"aria-label": "Переместить вниз",
						disabled: t === r.value.length - 1
					}, "↓", 8, Sf),
					J("button", {
						type: "button",
						"data-sba-action": "duplicate",
						"data-id": e.id,
						"aria-label": "Дублировать блок"
					}, "⧉", 8, Cf),
					J("button", {
						type: "button",
						"data-sba-action": "remove",
						"data-id": e.id,
						"aria-label": "Удалить блок"
					}, "×", 8, wf)
				])
			]), J("div", Tf, [
				J("label", null, [n[0] ||= X("Раздел ", -1), J("select", {
					"data-sba-field": "type",
					"data-id": e.id,
					value: e.type
				}, [(K(!0), q(W, null, V(i.value, (e) => (K(), q("option", {
					key: e.id,
					value: e.id
				}, A(e.name), 9, Df))), 128))], 8, Ef)]),
				J("label", null, [n[1] ||= X("Тактов ", -1), J("select", {
					"data-sba-field": "bars",
					"data-id": e.id,
					value: e.bars
				}, [(K(), q(W, null, V(p, (e) => J("option", {
					key: e,
					value: e
				}, A(e), 9, kf)), 64))], 8, Of)]),
				J("label", null, [n[2] ||= X("Вокал ", -1), J("select", {
					"data-sba-field": "vocal",
					"data-id": e.id,
					value: e.vocal
				}, [(K(!0), q(W, null, V(a.value, (e) => (K(), q("option", {
					key: e.id,
					value: e.id
				}, A(e.name), 9, jf))), 128))], 8, Af)]),
				J("label", Mf, [
					n[3] ||= X("Энергия ", -1),
					J("output", { "data-sba-output": e.id }, A(e.energy) + "/5 · " + A(o.value[e.energy]), 9, Nf),
					J("input", {
						type: "range",
						min: "1",
						max: "5",
						step: "1",
						value: e.energy,
						"data-sba-field": "energy",
						"data-id": e.id
					}, null, 8, Pf)
				]),
				J("div", Ff, [
					J("label", { for: "sba-instruments-" + e.id }, "Инструменты / приём", 8, If),
					J("div", Lf, [J("input", {
						type: "text",
						id: "sba-instruments-" + e.id,
						maxlength: "300",
						"data-sba-field": "instruments",
						"data-id": e.id,
						value: e.instruments,
						placeholder: "Введи вручную или выбери рекомендацию",
						autocomplete: "off"
					}, null, 8, Rf)]),
					J("div", {
						class: "sba-quick-sounds",
						id: "sba-quick-" + e.id,
						innerHTML: e.quickSounds
					}, null, 8, zf),
					e.soundPanel ? (K(), q("div", {
						key: 0,
						class: "sba-sound-panel",
						id: "sba-sound-panel-" + e.id,
						"aria-label": "Выбор инструментов и приёмов"
					}, [
						J("div", Vf, [n[4] ||= J("strong", null, "Библиотека инструментов и приёмов", -1), J("button", {
							type: "button",
							"data-sba-action": "sound-close",
							"data-id": e.id,
							"aria-label": "Закрыть подбор"
						}, "×", 8, Hf)]),
						J("button", {
							type: "button",
							class: "sba-sound-genre-trigger",
							"data-sba-action": "sound-switch-mode",
							"data-id": e.id
						}, [
							n[5] ||= X(" Жанр: ", -1),
							J("b", null, A(e.soundPanel.genreName), 1),
							n[6] ||= J("span", null, "⌄", -1)
						], 8, Uf),
						J("div", { id: "sba-sound-body-" + e.id }, [
							e.soundPanel.mode === "genres" ? (K(), q("div", Gf, [J("button", {
								type: "button",
								"data-sba-action": "sound-switch-mode",
								"data-id": e.id
							}, " ← К инструментам ", 8, Kf)])) : Z("", !0),
							J("input", {
								type: "search",
								class: "sba-sound-search",
								"data-sba-sound-search": e.soundPanel.mode,
								"data-id": e.id,
								value: e.soundPanel.query,
								placeholder: e.soundPanel.mode === "genres" ? "Поиск по всей Академии..." : "Поиск инструмента или приёма...",
								autocomplete: "off",
								"aria-label": "Поиск инструментов или жанров"
							}, null, 8, qf),
							J("div", {
								class: "sba-sound-list",
								id: "sba-sound-results-" + e.id
							}, [e.soundPanel.mode === "genres" ? (K(), q(W, { key: 0 }, [
								J("div", Yf, [X(" Найдено жанров: " + A(e.soundPanel.total) + " ", 1), e.soundPanel.total > e.soundPanel.matches.length ? (K(), q("span", Xf, " · уточни запрос ")) : Z("", !0)]),
								(K(!0), q(W, null, V(e.soundPanel.matches, (t) => (K(), q("button", {
									key: t.id,
									type: "button",
									class: "sba-sound-genre-row",
									"data-sba-action": "sound-set-genre",
									"data-id": e.id,
									"data-genre-id": t.id
								}, [J("span", null, A(t.name), 1), J("small", null, A(t.family), 1)], 8, Zf))), 128)),
								e.soundPanel.matches.length ? Z("", !0) : (K(), q("p", Qf, " Жанр не найден "))
							], 64)) : (K(), q(W, { key: 1 }, [(K(!0), q(W, null, V(e.soundPanel.groups, (t) => (K(), q(W, { key: t.title }, [J("div", $f, A(t.title), 1), (K(!0), q(W, null, V(t.items, (t) => (K(), q("button", {
								key: t.name,
								type: "button",
								class: "sba-sound-option",
								disabled: t.added,
								"aria-disabled": t.added,
								"data-sba-action": "sound-add",
								"data-id": e.id,
								"data-sound-value": t.name
							}, [J("span", null, A(t.name), 1), J("small", null, A(t.added ? "✓ Добавлено" : "+ Добавить"), 1)], 8, ep))), 128))], 64))), 128)), e.soundPanel.groups.length ? Z("", !0) : (K(), q("p", tp, " Совпадений нет. Можно ввести инструмент вручную. "))], 64))], 8, Jf),
							e.soundPanel.mode === "genres" ? Z("", !0) : (K(), q("div", np, [n[7] ||= J("span", null, "Нажми «Добавить», чтобы дополнить поле. Свой текст сохраняется.", -1), J("button", {
								type: "button",
								"data-sba-action": "sound-clear",
								"data-id": e.id
							}, " Очистить поле ", 8, rp)]))
						], 8, Wf)
					], 8, Bf)) : Z("", !0)
				]),
				e.type === "custom" ? (K(), q("label", ip, [n[8] ||= X("Своё название ", -1), J("input", {
					type: "text",
					maxlength: "48",
					"data-sba-field": "customName",
					"data-id": e.id,
					value: e.customName,
					placeholder: "Название для тега Suno"
				}, null, 8, ap)])) : Z("", !0)
			])], 8, mf),
			e.transitionHTML ? (K(), q("div", {
				key: 0,
				style: { display: "contents" },
				innerHTML: e.transitionHTML
			}, null, 8, op)) : Z("", !0),
			J("button", {
				type: "button",
				class: "sba-between-add",
				"data-sba-action": "insert-after",
				"data-id": e.id,
				"aria-label": "Добавить блок после " + e.label
			}, [...n[9] ||= [J("span", { "aria-hidden": "true" }, "＋", -1), X(" Добавить после ", -1)]], 8, sp)
		], 64))), 128)), r.value.length ? Z("", !0) : (K(), q("div", cp, "Пока нет блоков. Добавь первый фрагмент снизу."))], 64)) : e.kind === "snake" ? (K(), q(W, { key: 1 }, [r.value.length ? (K(), q(W, { key: 0 }, [(K(), q(W, null, V([6, 3], (e) => J("div", {
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
			J("span", dp, A(e.index + 1), 1),
			J("span", fp, A(e.icon), 1),
			J("span", pp, A(e.snakeLabel), 1),
			J("span", mp, A(e.energy) + "/5", 1),
			e.hasTransition ? (K(), q("span", {
				key: 0,
				class: "sba-snake-transition",
				title: "Переход: " + e.transitionLabel,
				"aria-hidden": "true"
			}, "↝", 8, hp)) : Z("", !0)
		], 8, up))), 128))], 2))), 128))], 10, lp)), 64)), d.value.length < r.value.length ? (K(), q("p", gp, " … и ещё " + A(r.value.length - d.value.length) + " блоков ", 1)) : Z("", !0)], 64)) : (K(), q("p", _p, "Добавь первый блок, и здесь появится схема композиции."))], 64)) : e.kind === "transitions" ? (K(), q(W, { key: 2 }, [s.value.length ? (K(!0), q(W, { key: 0 }, V(f.value, (e) => (K(), q("div", {
			key: e.id,
			class: k(["sba-transition-hub-row", { "sba-transition-hub-active": e.current.type !== "none" }]),
			"data-sba-hub-from": e.id
		}, [
			J("div", yp, [J("span", bp, A(e.index + 1) + " → " + A(e.index + 2), 1), J("span", xp, [
				X(A(e.from) + " ", 1),
				n[10] ||= J("b", null, "→", -1),
				X(" " + A(e.to), 1)
			])]),
			J("div", Sp, [
				J("label", null, [n[11] ||= X("Эффект ", -1), J("select", {
					"data-sba-transition": "type",
					"data-id": e.id,
					value: e.current.type,
					"aria-label": "Переход " + (e.index + 1) + " к " + (e.index + 2)
				}, [(K(!0), q(W, null, V(c.value, (e) => (K(), q("option", {
					key: e.id,
					value: e.id
				}, A(e.name), 9, wp))), 128))], 8, Cp)]),
				J("label", null, [n[12] ||= X("Длина ", -1), J("select", {
					"data-sba-transition": "length",
					"data-id": e.id,
					value: e.current.length,
					"aria-label": "Длительность перехода " + (e.index + 1)
				}, [(K(!0), q(W, null, V(l.value, (e) => (K(), q("option", {
					key: e.id,
					value: e.id
				}, A(e.name), 9, Ep))), 128))], 8, Tp)]),
				J("label", null, [n[13] ||= X("Сила ", -1), J("select", {
					"data-sba-transition": "strength",
					"data-id": e.id,
					value: e.current.strength,
					"aria-label": "Выраженность перехода " + (e.index + 1)
				}, [(K(!0), q(W, null, V(u.value, (e) => (K(), q("option", {
					key: e.id,
					value: e.id
				}, A(e.name), 9, Op))), 128))], 8, Dp)])
			]),
			J("div", kp, [J("button", {
				type: "button",
				"data-sba-action": "transition-suggest",
				"data-id": e.id,
				title: "Совет: " + e.advice
			}, "✧ Совет", 8, Ap), J("button", {
				type: "button",
				"data-sba-action": "transition-hub-jump",
				"data-id": e.id
			}, "Подробнее ↓", 8, jp)])
		], 10, vp))), 128)) : (K(), q("p", Mp, "Добавь второй блок, и здесь можно будет настроить переходы."))], 64)) : e.kind === "energy" ? (K(!0), q(W, { key: 3 }, V(r.value, (e) => (K(), q("div", {
			key: e.id,
			class: "sba-chart-step",
			title: e.label + " · " + e.energy + "/5",
			style: O({
				"--energy": e.energy,
				"--bar-width": 100 / r.value.length + "%"
			})
		}, [J("div", Pp, [J("i", { style: O({ "--level": e.energy }) }, null, 4)]), J("small", null, A(e.icon), 1)], 12, Np))), 128)) : Z("", !0);
	}
}, Ip = ["aria-expanded"], Lp = { id: "sba-picked-label" }, Rp = ["hidden"], zp = { class: "sba-preset-search-row" }, Bp = ["value"], Vp = {
	class: "sba-preset-filters",
	role: "group",
	"aria-label": "Тип вариантов"
}, Hp = ["data-filter", "aria-pressed"], Up = {
	id: "sba-preset-results",
	class: "sba-preset-results",
	role: "listbox",
	"aria-label": "Доступные шаблоны и жанры"
}, Wp = { class: "sba-preset-group-title" }, Gp = { key: 0 }, Kp = ["aria-selected", "data-choice"], qp = {
	key: 0,
	class: "sba-preset-no-results"
}, Jp = {
	__name: "ArrangementPicker",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Yt(t.api.snapshot()), r = $(() => n.value?.picker || {
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
		return B(() => window.addEventListener("sunoboom:arranger-updated", i)), pr(() => window.removeEventListener("sunoboom:arranger-updated", i)), (e, t) => (K(), q(W, null, [
			t[2] ||= J("span", { class: "sba-preset-caption" }, "Шаблон композиции / жанр", -1),
			J("button", {
				type: "button",
				id: "sba-presets",
				class: "sba-preset-trigger",
				"data-sba-action": "menu-toggle",
				"aria-haspopup": "dialog",
				"aria-expanded": r.value.open,
				"aria-controls": "sba-preset-menu"
			}, [J("span", Lp, A(r.value.selected), 1), t[0] ||= J("span", {
				class: "sba-preset-chevron",
				"aria-hidden": "true"
			}, "⌄", -1)], 8, Ip),
			J("div", {
				id: "sba-preset-menu",
				class: "sba-preset-menu",
				role: "dialog",
				"aria-label": "Поиск шаблона или жанра",
				hidden: !r.value.open
			}, [
				J("div", zp, [J("input", {
					type: "search",
					id: "sba-preset-search",
					autocomplete: "off",
					value: r.value.query,
					placeholder: "Найти жанр или шаблон...",
					"aria-label": "Поиск жанра"
				}, null, 8, Bp), t[1] ||= J("button", {
					type: "button",
					"data-sba-action": "menu-close",
					"aria-label": "Закрыть меню"
				}, "×", -1)]),
				J("div", Vp, [(K(!0), q(W, null, V([
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
				}, A(e.title), 9, Hp))), 128))]),
				J("div", Up, [(K(!0), q(W, null, V(r.value.groups, (e) => (K(), q(W, { key: e.title }, [J("div", Wp, [X(A(e.title) + " ", 1), e.count === null ? Z("", !0) : (K(), q("small", Gp, A(e.count), 1))]), (K(!0), q(W, null, V(e.items, (e) => (K(), q("button", {
					key: e.key,
					type: "button",
					role: "option",
					"aria-selected": e.key === r.value.selectedKey,
					"data-sba-action": "menu-choose",
					"data-choice": e.key
				}, [J("span", null, A(e.title), 1), J("small", null, A(e.subtitle), 1)], 8, Kp))), 128))], 64))), 128)), r.value.groups.length ? Z("", !0) : (K(), q("p", qp, " Ничего не найдено. Попробуй другое название или направление. "))])
			], 8, Rp)
		], 64));
	}
}, Yp = {
	class: "sba-preview-tabs",
	role: "group",
	"aria-label": "Тип результата"
}, Xp = ["aria-pressed"], Zp = ["aria-pressed"], Qp = ["value"], $p = {
	class: "sba-preview-count",
	id: "sba-preview-count"
}, em = {
	id: "sba-transfer-confirm",
	"aria-live": "polite"
}, tm = {
	key: 0,
	class: "sba-transfer-preview"
}, nm = ["hidden"], rm = [
	["#sba-cards", "cards"],
	["#sba-snake-track", "snake"],
	["#sba-transition-hub-list", "transitions"],
	["#sba-energy-chart", "energy"],
	[
		".sba-preset-picker",
		"picker",
		Jp
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
				let t = e, n = /* @__PURE__ */ Yt(t.api.snapshot()), r = $(() => n.value?.result || {
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
				return B(() => window.addEventListener("sunoboom:arranger-updated", i)), pr(() => window.removeEventListener("sunoboom:arranger-updated", i)), (e, t) => (K(), q(W, null, [
					t[3] ||= J("div", { class: "sba-result-header" }, [
						J("span", { class: "sba-eyebrow" }, "ПРЕДПРОСМОТР"),
						J("h3", null, "Результат для Suno"),
						J("p", null, "Lyrics — теги по секциям; Style — короткое описание динамики.")
					], -1),
					J("div", Yp, [J("button", {
						type: "button",
						"data-sba-action": "tab",
						"data-tab": "lyrics",
						"aria-pressed": r.value.tab === "lyrics"
					}, "Теги Lyrics", 8, Xp), J("button", {
						type: "button",
						"data-sba-action": "tab",
						"data-tab": "style",
						"aria-pressed": r.value.tab === "style"
					}, "Style", 8, Zp)]),
					J("textarea", {
						id: "sba-preview",
						readonly: "",
						spellcheck: "false",
						"aria-label": "Готовые теги структуры песни",
						value: r.value.text
					}, null, 8, Qp),
					J("div", $p, A(r.value.count), 1),
					t[4] ||= J("div", { class: "sba-result-actions" }, [J("button", {
						type: "button",
						class: "sba-btn sba-copy-btn",
						"data-sba-action": "copy"
					}, " Копировать результат "), J("button", {
						type: "button",
						class: "sba-btn sba-transfer-btn",
						"data-sba-action": "prepare-transfer"
					}, " Перенести стиль в Studio ")], -1),
					J("div", em, [r.value.transfer ? (K(), q("div", tm, [
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
					}, A(r.value.message), 9, nm),
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
function im({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ARRANGER, n = document.getElementById("app");
	if (!n || !t || typeof t.snapshot != "function") return () => {};
	let r = /* @__PURE__ */ new Map(), i = !1;
	function a() {
		if (!i) for (let [i, a, o = Fp] of rm) {
			let s = n.querySelector(i), c = r.get(a);
			if (c?.target === s || (c && (c.unmount(), r.delete(a)), !s || !t.snapshot())) continue;
			let l = e(s, o, o === Fp ? {
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
// src/vue/poetry/PoetryAnalysis.vue
var am = {
	key: 0,
	class: "sb-poetry-empty"
}, om = { class: "sb-poetry-stats" }, sm = { class: "sb-poetry-subline" }, cm = { class: "sb-poetry-sections" }, lm = { class: "sb-poetry-stanzas" }, um = { class: "sb-poetry-stanza-name" }, dm = { class: "sb-poetry-stanza-data" }, fm = { class: "sb-poetry-lines" }, pm = { class: "sb-poetry-line-main" }, mm = { class: "sb-poetry-index" }, hm = { class: "sb-poetry-verse" }, gm = {
	class: "sb-poetry-syllable",
	title: "Оценка слогов"
}, _m = ["title"], vm = {
	key: 0,
	class: "sb-poetry-footnote"
}, ym = {
	key: 1,
	class: "sb-poetry-words"
}, bm = { class: "sb-poetry-tips" }, xm = {
	__name: "PoetryAnalysis",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Yt(t.api.analysis()), r = $(() => n.value || {
			analyzed: !1,
			message: ""
		});
		function i() {
			let e = t.api.analysis();
			e && (n.value = e);
		}
		return B(() => window.addEventListener("sunoboom:poetry-updated", i)), pr(() => window.removeEventListener("sunoboom:poetry-updated", i)), (e, t) => r.value.analyzed ? (K(), q(W, { key: 1 }, [
			J("div", om, [(K(!0), q(W, null, V(r.value.stats, (e) => (K(), q("div", {
				key: e.label,
				class: "sb-poetry-stat"
			}, [J("strong", null, A(e.value), 1), J("span", null, A(e.label), 1)]))), 128))]),
			J("p", sm, " Диапазон: " + A(r.value.lower) + "–" + A(r.value.upper) + " слогов на строку · меток ударения: " + A(r.value.markedStress) + ". ", 1),
			J("div", cm, [t[1] ||= J("h4", null, "Строфы и предполагаемая рифмовка", -1), J("div", lm, [(K(!0), q(W, null, V(r.value.stanzas, (e) => (K(), q("div", {
				key: e.id,
				class: "sb-poetry-stanza"
			}, [J("div", um, A(e.section) + " · строфа " + A(e.position), 1), J("div", dm, [
				X(" Схема " + A(e.scheme) + " ", 1),
				t[0] ||= J("span", null, "·", -1),
				X(" разброс " + A(e.spread) + " сл. ", 1)
			])]))), 128))])]),
			t[4] ||= J("div", { class: "sb-poetry-lines-head" }, [J("strong", null, "Построчный анализ"), J("span", null, "Слоги · рифма")], -1),
			J("div", fm, [(K(!0), q(W, null, V(r.value.lines, (e) => (K(), q("div", {
				key: e.number,
				class: "sb-poetry-line"
			}, [
				J("div", pm, [J("span", mm, A(e.number) + ".", 1), J("span", hm, A(e.text), 1)]),
				J("div", gm, [J("span", null, A(e.syllables) + " сл.", 1), J("i", { style: O({ width: e.width + "%" }) }, null, 4)]),
				J("span", {
					class: k(["sb-poetry-letter", { "sb-poetry-letter-match": e.rhyme }]),
					title: e.repeat ? "Совпадение последнего слова" : e.rhyme ? "Предполагаемая рифма" : "Метка окончания"
				}, A(e.mark), 11, _m)
			]))), 128))]),
			r.value.rowCount > 120 ? (K(), q("p", vm, " Показаны первые 120 строк из " + A(r.value.rowCount) + "; статистика рассчитана по всему тексту. ", 1)) : Z("", !0),
			r.value.frequent.length ? (K(), q("div", ym, [t[2] ||= J("strong", null, "Повторяющиеся слова:", -1), (K(!0), q(W, null, V(r.value.frequent, (e) => (K(), q("span", { key: e.word }, A(e.word) + " · " + A(e.count), 1))), 128))])) : Z("", !0),
			J("div", bm, [t[3] ||= J("h4", null, "На что обратить внимание", -1), J("ul", null, [(K(!0), q(W, null, V(r.value.suggestions, (e, t) => (K(), q("li", { key: t }, A(e), 1))), 128))])]),
			t[5] ||= J("p", { class: "sb-poetry-footnote" }, " Анализ ориентировочный: счёт гласных не равен точной метрической скансии, совпадение окончаний не гарантирует рифму, а вокальная удобность зависит от темпа и мелодии. Исходный текст автоматически не изменяется. ", -1)
		], 64)) : (K(), q("p", am, A(r.value.message), 1));
	}
}, Sm = {
	key: 0,
	class: "sb-stress-ambig-clear"
}, Cm = { class: "sb-stress-ambig-heading" }, wm = { class: "sb-stress-ambig-variants" }, Tm = ["data-word", "data-variant"], Em = {
	key: 0,
	class: "sb-poetry-small"
}, Dm = {
	__name: "PoetryAmbiguities",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Yt(t.api.ambiguities()), r = $(() => n.value || {
			count: 0,
			words: [],
			total: 0
		});
		function i() {
			n.value = t.api.ambiguities();
		}
		return B(() => window.addEventListener("sunoboom:poetry-stress-updated", i)), pr(() => window.removeEventListener("sunoboom:poetry-stress-updated", i)), (e, t) => r.value.count ? (K(), q(W, { key: 1 }, [
			J("div", Cm, " 🔴 Требуют проверки: " + A(r.value.count) + " вхождений (" + A(r.value.total) + " разных слов). Нажми нужный вариант для каждого вхождения. ", 1),
			(K(!0), q(W, null, V(r.value.words, (e) => (K(), q("div", {
				key: e.key,
				class: "sb-stress-ambig-choice"
			}, [J("strong", null, A(e.key) + A(e.count > 1 ? " ×" + e.count : ""), 1), J("div", wm, [(K(!0), q(W, null, V(e.variants, (t) => (K(), q("button", {
				key: t,
				type: "button",
				"data-action": "sb-poetry-stress-choice",
				"data-word": e.key,
				"data-variant": t,
				title: "Указать ударение для следующего вхождения"
			}, A(t), 9, Tm))), 128))])]))), 128)),
			r.value.total > 30 ? (K(), q("p", Em, " Показаны первые 30 разных слов; другие можно исправить вручную. ")) : Z("", !0)
		], 64)) : (K(), q("p", Sm, " ✓ Все найденные неоднозначные слова проверены. "));
	}
};
// src/vue/poetry/legacyPoetryBridge.js
function Om({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_POETRY, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = !1, i = /* @__PURE__ */ new Map();
	function a() {
		if (r) return;
		let a = [[
			"analysis",
			"#sb-poetry-result",
			xm
		], [
			"ambiguities",
			"#sb-poetry-ambiguous-choices",
			Dm
		]];
		for (let [r, o, s] of a) {
			let a = n.querySelector(o), c = i.get(r);
			if (c?.node === a || (c && (c.unmount(), i.delete(r)), !a)) continue;
			let l = e(a, s, { api: t });
			l && i.set(r, {
				node: a,
				unmount: l
			});
		}
	}
	let o = new MutationObserver(a);
	return o.observe(n, { childList: !0 }), window.addEventListener("sunoboom:poetry-stress-ready", a), a(), () => {
		r = !0, o.disconnect(), window.removeEventListener("sunoboom:poetry-stress-ready", a);
		for (let e of i.values()) e.unmount();
		i.clear();
	};
}
// src/vue/poetry/PerformanceTags.vue
var km = { class: "sb-vt-field" }, Am = ["value"], jm = ["value"], Mm = {
	class: "sb-vt-hint",
	id: "sb-vt-mode-hint"
}, Nm = { class: "sb-vt-grid" }, Pm = { class: "sb-vt-field" }, Fm = ["value"], Im = ["value"], Lm = { class: "sb-vt-field" }, Rm = ["value"], zm = ["value"], Bm = {
	key: 0,
	class: "sb-vt-field"
}, Vm = ["value"], Hm = ["value"], Um = { class: "sb-vt-intensity" }, Wm = { class: "sb-vt-between" }, Gm = { id: "sb-vt-intensity-label" }, Km = ["value"], qm = { class: "sb-vt-options" }, Jm = ["data-vt-pref", "checked"], Ym = {
	key: 1,
	class: "sb-vt-consent",
	id: "sb-vt-consent-row"
}, Xm = { class: "sb-vt-buttons" }, Zm = ["disabled"], Qm = {
	id: "sb-vt-result",
	"aria-live": "polite"
}, $m = {
	key: 0,
	class: "sb-vt-draft"
}, eh = { class: "sb-vt-draft-head" }, th = { class: "sb-vt-method" }, nh = { class: "sb-vt-section-list" }, rh = { class: "sb-vt-section-heading" }, ih = { class: "sb-vt-section-controls" }, ah = [
	"data-vt-preset",
	"value",
	"aria-label"
], oh = ["value"], sh = [
	"data-vt-cue",
	"value",
	"aria-label"
], ch = { class: "sb-vt-field" }, lh = ["value"], uh = {
	class: "sb-vt-small",
	id: "sb-vt-preview-state"
}, dh = {
	__name: "PerformanceTags",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Yt(t.api.snapshot()), r = $(() => n.value?.prefs || {}), i = $(() => n.value?.draft || null), a = [
			["smart", "Интеллектуальный · Gemini"],
			["rules", "Автоматический · без API"],
			["manual", "Ручной · по секциям"]
		], o = [
			["minimal", "Минимально"],
			["balanced", "Сбалансированно"],
			["detailed", "Подробно"]
		], s = [
			["auto", "Авто: готовая Lyrics, если есть"],
			["original", "Оригинальный текст"],
			["tagged", "Готовая версия Lyrics"]
		], c = [
			["melisma", "Мелизмы"],
			["falsetto", "Фальцет"],
			["harmonies", "Гармонии"],
			["noWhisper", "Без шёпота"],
			["noRasp", "Без хрипотцы"]
		];
		function l() {
			let e = t.api.snapshot();
			e && (n.value = e);
		}
		return B(() => window.addEventListener("sunoboom:tags-updated", l)), pr(() => window.removeEventListener("sunoboom:tags-updated", l)), (e, t) => (K(), q(W, null, [
			t[12] ||= J("div", { class: "sb-vt-header" }, [J("span", { class: "sb-vt-symbol" }, "🎭"), J("div", null, [J("h3", null, "Генератор тегов исполнения"), J("p", null, "Вокальная драматургия по секциям. Без изменения слов песни; результат можно проверить и применить только вручную.")])], -1),
			J("div", km, [t[0] ||= J("label", { for: "sb-vt-mode" }, "Способ генерации", -1), J("select", {
				id: "sb-vt-mode",
				"data-vt-pref": "mode",
				value: r.value.mode
			}, [(K(), q(W, null, V(a, ([e, t]) => J("option", {
				key: e,
				value: e
			}, A(t), 9, jm)), 64))], 8, Am)]),
			J("p", Mm, A(n.value.modeHint), 1),
			J("div", Nm, [J("div", Pm, [t[1] ||= J("label", { for: "sb-vt-source" }, "Источник текста", -1), J("select", {
				id: "sb-vt-source",
				"data-vt-pref": "source",
				value: r.value.source
			}, [(K(), q(W, null, V(s, ([e, t]) => J("option", {
				key: e,
				value: e
			}, A(t), 9, Im)), 64))], 8, Fm)]), J("div", Lm, [t[2] ||= J("label", { for: "sb-vt-density" }, "Детализация метатегов", -1), J("select", {
				id: "sb-vt-density",
				"data-vt-pref": "density",
				value: r.value.density
			}, [(K(), q(W, null, V(o, ([e, t]) => J("option", {
				key: e,
				value: e
			}, A(t), 9, zm)), 64))], 8, Rm)])]),
			n.value.artists?.length ? (K(), q("div", Bm, [t[4] ||= J("label", { for: "sb-vt-artist" }, "Учесть «ДНК артиста» (необязательно)", -1), J("select", {
				id: "sb-vt-artist",
				"data-vt-pref": "artistId",
				value: r.value.artistId
			}, [t[3] ||= J("option", { value: "" }, "Без привязки к артисту", -1), (K(!0), q(W, null, V(n.value.artists, (e) => (K(), q("option", {
				key: e.id,
				value: e.id
			}, A(e.name), 9, Hm))), 128))], 8, Vm)])) : Z("", !0),
			J("div", Um, [
				J("div", Wm, [t[5] ||= J("label", { for: "sb-vt-intensity" }, "Максимальная интенсивность исполнения", -1), J("strong", Gm, A(r.value.intensity) + " / 5", 1)]),
				J("input", {
					type: "range",
					id: "sb-vt-intensity",
					min: "1",
					max: "5",
					step: "1",
					value: r.value.intensity,
					"data-vt-pref": "intensity"
				}, null, 8, Km),
				t[6] ||= J("div", { class: "sb-vt-between sb-vt-scale" }, [J("span", null, "Сдержанная"), J("span", null, "Экспрессивная")], -1)
			]),
			J("div", qm, [(K(), q(W, null, V(c, ([e, t]) => J("label", { key: e }, [J("input", {
				type: "checkbox",
				"data-vt-pref": e,
				checked: r.value[e]
			}, null, 8, Jm), X(" " + A(t), 1)])), 64))]),
			n.value.hasEndpoint ? (K(), q("label", Ym, [...t[7] ||= [J("input", {
				type: "checkbox",
				id: "sb-vt-consent"
			}, null, -1), X(" Разрешаю отправить выбранный текст песни на защищённый сервер для анализа Gemini. ", -1)]])) : Z("", !0),
			J("div", Xm, [J("button", {
				type: "button",
				class: "btn primary",
				"data-action": "vt-generate",
				disabled: n.value.busy
			}, "✨ Создать предпросмотр", 8, Zm), t[8] ||= J("span", { class: "sb-vt-note" }, "Никакого автоматического применения к Lyrics.", -1)]),
			J("div", {
				id: "sb-vt-notice",
				class: k(["sb-vt-notice", n.value.notice?.kind]),
				role: "status",
				"aria-live": "polite"
			}, A(n.value.notice?.text), 3),
			J("div", Qm, [i.value ? (K(), q("div", $m, [
				J("div", eh, [J("h4", null, "Предпросмотр · " + A(i.value.sections.length) + " секций", 1), J("span", th, A(i.value.method), 1)]),
				t[10] ||= J("p", { class: "sb-vt-small" }, " Проверь каждую секцию. Теги можно выбрать из списка или переписать вручную. Оригинальные строки песни остаются неизменными. ", -1),
				J("div", nh, [(K(!0), q(W, null, V(i.value.sections, (e, t) => (K(), q("div", {
					key: e.id,
					class: "sb-vt-section"
				}, [J("div", rh, [J("strong", null, A(e.label), 1), J("span", null, A(t + 1) + "/" + A(i.value.sections.length), 1)]), J("div", ih, [J("select", {
					"data-vt-preset": t,
					value: i.value.tags[t],
					"aria-label": "Готовые теги для " + e.label
				}, [(K(!0), q(W, null, V(n.value.presets, ([e, t]) => (K(), q("option", {
					key: e,
					value: e
				}, A(t), 9, oh))), 128))], 8, ah), J("input", {
					"data-vt-cue": t,
					value: i.value.tags[t],
					maxlength: "165",
					placeholder: "Например: Warm Emotional Vocals",
					"aria-label": "Тег исполнения " + e.label
				}, null, 8, sh)])]))), 128))]),
				J("div", ch, [t[9] ||= J("label", { for: "sb-vt-preview" }, " Готовый Lyrics — разрешено редактировать только инструкции, не слова песни ", -1), J("textarea", {
					id: "sb-vt-preview",
					spellcheck: "false",
					rows: "13",
					maxlength: "25000",
					value: i.value.preview
				}, null, 8, lh)]),
				J("p", uh, A(n.value.previewState), 1),
				t[11] ||= Qi("<div class=\"sb-vt-draft-actions\"><button type=\"button\" class=\"btn primary\" data-action=\"vt-apply\"> ✓ Применить к Lyrics </button><button type=\"button\" class=\"btn ghost\" data-action=\"vt-copy\"> Копировать предпросмотр </button><button type=\"button\" class=\"btn ghost\" data-action=\"vt-refresh\"> Обновить предпросмотр </button><button type=\"button\" class=\"btn ghost\" data-action=\"vt-cancel\"> Отменить </button></div>", 1)
			])) : Z("", !0)])
		], 64));
	}
};
// src/vue/poetry/legacyTagsBridge.js
function fh({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_TAGS, n = document.getElementById("app");
	if (!t || !n || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vt-workbench");
		if (r?.target === a || (r &&= (r.unmount(), null), !a || !t.snapshot())) return;
		let o = e(a, dh, { api: t });
		o && (r = {
			target: a,
			unmount: o
		});
	}
	let o = new MutationObserver(a);
	return o.observe(n, { childList: !0 }), a(), () => {
		i = !0, o.disconnect(), r?.unmount(), r = null;
	};
}
// src/vue/entry.js
var ph = Ms(), mh = /* @__PURE__ */ new WeakMap();
function hh(e) {
	return typeof document > "u" ? null : typeof e == "string" ? document.querySelector(e) : e;
}
function gh(e, t, n = {}) {
	let r = hh(e);
	if (!r || r.nodeType !== 1 || !t) return null;
	let i = mh.get(r);
	i && i.unmount();
	let a = r.innerHTML, o = jo(Ps, {
		component: t,
		componentProps: n
	});
	o.use(ph);
	try {
		o.mount(r);
	} catch (e) {
		return r.innerHTML = a, console.warn("[SUNOBOOM] Vue mount failed; legacy navigation retained.", e), null;
	}
	return mh.set(r, o), () => {
		mh.get(r) === o && (o.unmount(), mh.delete(r));
	};
}
function _h(e) {
	let t = hh(e);
	if (!t) return;
	let n = mh.get(t);
	n && (n.unmount(), mh.delete(t));
}
function vh() {
	return Us({
		mountVueFeature: gh,
		unmountVueFeature: _h
	});
}
function yh() {
	return Oc({ mountVueFeature: gh });
}
function bh() {
	return au({ mountVueFeature: gh });
}
function xh() {
	return qu({ mountVueFeature: gh });
}
function Sh() {
	return Bd({ mountVueFeature: gh });
}
function Ch() {
	return pf({ mountVueFeature: gh });
}
function wh() {
	return im({ mountVueFeature: gh });
}
function Th() {
	return Om({ mountVueFeature: gh });
}
function Eh() {
	return fh({ mountVueFeature: gh });
}
function Dh() {
	return gs({ mountVueFeature: gh });
}
function Oh() {
	return Jo({ mountVueFeature: gh });
}
export { gh as mountVueFeature, yh as startLegacyAcademy, wh as startLegacyArranger, Ch as startLegacyAuditor, bh as startLegacyGenreDetail, Oh as startLegacyIdeaCollections, Dh as startLegacyIdeaEditor, Sh as startLegacyMixer, vh as startLegacyNavigation, Th as startLegacyPoetry, xh as startLegacyStudio, Eh as startLegacyTags, _h as unmountVueFeature };
