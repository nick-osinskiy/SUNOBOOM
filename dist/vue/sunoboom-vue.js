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
}, l = Object.prototype.hasOwnProperty, u = (e, t) => l.call(e, t), d = Array.isArray, f = (e) => x(e) === "[object Map]", p = (e) => x(e) === "[object Set]", m = (e) => x(e) === "[object Date]", h = (e) => typeof e == "function", g = (e) => typeof e == "string", _ = (e) => typeof e == "symbol", v = (e) => typeof e == "object" && !!e, y = (e) => (v(e) || h(e)) && h(e.then) && h(e.catch), b = Object.prototype.toString, x = (e) => b.call(e), ee = (e) => x(e).slice(8, -1), S = (e) => x(e) === "[object Object]", te = (e) => g(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ne = /* @__PURE__ */ e(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), re = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, ie = /-\w/g, C = /* @__PURE__ */ re((e) => e.replace(ie, (e) => e.slice(1).toUpperCase())), ae = /\B([A-Z])/g, w = /* @__PURE__ */ re((e) => e.replace(ae, "-$1").toLowerCase()), oe = /* @__PURE__ */ re((e) => e.charAt(0).toUpperCase() + e.slice(1)), se = /* @__PURE__ */ re((e) => e ? `on${oe(e)}` : ""), T = (e, t) => !Object.is(e, t), ce = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, E = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, le = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, ue, de = () => ue ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function D(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = g(r) ? he(r) : D(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	}
	if (g(e) || v(e)) return e;
}
var fe = /;(?![^(]*\))/g, pe = /:([^]+)/, me = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function he(e) {
	let t = {};
	return e.replace(me, (e) => e.startsWith("/*") ? "" : e).split(fe).forEach((e) => {
		if (e) {
			let n = e.split(pe);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function O(e) {
	let t = "";
	if (g(e)) t = e;
	else if (d(e)) for (let n = 0; n < e.length; n++) {
		let r = O(e[n]);
		r && (t += r + " ");
	}
	else if (v(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
function ge(e) {
	if (!e) return null;
	let { class: t, style: n } = e;
	return t && !g(t) && (e.class = O(t)), n && (e.style = D(n)), e;
}
var _e = /* @__PURE__ */ e("itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly");
function ve(e) {
	return !!e || e === "";
}
function ye(e, t, n) {
	if (e.length !== t.length) return !1;
	let r = !0;
	for (let i = 0; r && i < e.length; i++) r = Ce(e[i], t[i], n);
	return r;
}
function be(e, t, n) {
	if (e.size !== t.size) return !1;
	let r = Array.from(t), i = new Uint8Array(r.length);
	for (let t of e) {
		let e = -1;
		for (let a = 0; a < r.length; a++) if (!i[a] && Ce(t, r[a], n)) {
			e = a;
			break;
		}
		if (e < 0) return !1;
		i[e] = 1;
	}
	return !0;
}
function xe(e, t, n) {
	let r = f(e), i = f(t);
	if (r || i || (r = p(e), i = p(t), r || i)) return r && i ? be(e, t, n) : !1;
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let r in e) {
		let i = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
		if (i && !a || !i && a || !Ce(e[r], t[r], n)) return !1;
	}
	return String(e) === String(t);
}
function Se(e, t, n, r) {
	n ||= [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()];
	let [i, a] = n;
	if (i.has(e) || a.has(t)) return i.get(e) === t && a.get(t) === e;
	i.set(e, t), a.set(t, e);
	let o = r(e, t, n);
	return i.delete(e), a.delete(t), o;
}
function Ce(e, t, n) {
	if (e === t) return !0;
	let r = m(e), i = m(t);
	return r || i ? r && i ? e.getTime() === t.getTime() : !1 : (r = _(e), i = _(t), r || i ? e === t : (r = d(e), i = d(t), r || i ? r && i ? Se(e, t, n, ye) : !1 : (r = v(e), i = v(t), r || i ? !r || !i ? !1 : Se(e, t, n, xe) : String(e) === String(t))));
}
function we(e, t) {
	return e.findIndex((e) => Ce(e, t));
}
var Te = (e) => !!(e && e.__v_isRef === !0), k = (e) => g(e) ? e : e == null ? "" : d(e) || v(e) && (e.toString === b || !h(e.toString)) ? Te(e) ? k(e.value) : JSON.stringify(e, Ee, 2) : String(e), Ee = (e, t) => Te(t) ? Ee(e, t.value) : f(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[De(t, r) + " =>"] = n, e), {}) } : p(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => De(e)) } : _(t) ? De(t) : v(t) && !d(t) && !S(t) ? String(t) : t, De = (e, t = "") => _(e) ? `Symbol(${e.description ?? t})` : e, A, Oe = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && A && (A.active ? (this.parent = A, this.index = (A.scopes || (A.scopes = [])).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
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
			let t = A;
			try {
				return A = this, e();
			} finally {
				A = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = A, A = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (A === this) A = this.prevScope;
			else {
				let e = A;
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
function ke(e) {
	return new Oe(e);
}
function Ae() {
	return A;
}
var j, je = /* @__PURE__ */ new WeakSet(), Me = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, A && (A.active ? A.effects.push(this) : this.flags &= -2);
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
		(t.version === 0 || T(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
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
function M(e, t, n) {
	if (Ge && j) {
		let t = et.get(e);
		t || et.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new Qe()), r.map = t, r.key = n), r.track();
	}
}
function it(e, t, n, r, i, a) {
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
		let i = d(e), a = i && te(n);
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
function at(e) {
	let t = /* @__PURE__ */ P(e);
	return t === e || (M(t, "iterate", rt), /* @__PURE__ */ N(e)) ? t : /* @__PURE__ */ Wt(e) ? /* @__PURE__ */ Ut(e) ? t.map((e) => Jt(qt(e))) : t.map(Jt) : t.map(qt);
}
function ot(e) {
	return M(e = /* @__PURE__ */ P(e), "iterate", rt), e;
}
function st(e, t) {
	return /* @__PURE__ */ Wt(e) ? Jt(/* @__PURE__ */ Ut(e) ? qt(t) : t) : qt(t);
}
var ct = {
	__proto__: null,
	[Symbol.iterator]() {
		return lt(this, Symbol.iterator, (e) => st(this, e));
	},
	concat(...e) {
		return at(this).concat(...e.map((e) => d(e) ? at(e) : e));
	},
	entries() {
		return lt(this, "entries", (e) => (e[1] = st(this, e[1]), e));
	},
	every(e, t) {
		return ft(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return ft(this, "filter", e, t, (e) => e.map((e) => st(this, e)), arguments);
	},
	find(e, t) {
		return ft(this, "find", e, t, (e) => st(this, e), arguments);
	},
	findIndex(e, t) {
		return ft(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return ft(this, "findLast", e, t, (e) => st(this, e), arguments);
	},
	findLastIndex(e, t) {
		return ft(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return ft(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return mt(this, "includes", e);
	},
	indexOf(...e) {
		return mt(this, "indexOf", e);
	},
	join(e) {
		return at(this).join(e);
	},
	lastIndexOf(...e) {
		return mt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return ft(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return ht(this, "pop");
	},
	push(...e) {
		return ht(this, "push", e);
	},
	reduce(e, ...t) {
		return pt(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return pt(this, "reduceRight", e, t);
	},
	shift() {
		return ht(this, "shift");
	},
	some(e, t) {
		return ft(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return ht(this, "splice", e);
	},
	toReversed() {
		return at(this).toReversed();
	},
	toSorted(e) {
		return at(this).toSorted(e);
	},
	toSpliced(...e) {
		return at(this).toSpliced(...e);
	},
	unshift(...e) {
		return ht(this, "unshift", e);
	},
	values() {
		return lt(this, "values", (e) => st(this, e));
	}
};
function lt(e, t, n) {
	let r = ot(e), i = r[t], a = i.call(r);
	if (r !== e && !/* @__PURE__ */ N(e)) {
		if (a[Symbol.toStringTag] === "Array Iterator") {
			let e = Object.create(Object.getPrototypeOf(a));
			return e.next = () => ut(a.next(), n), i !== dt[t] && Object.defineProperties(e, {
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
		a._next = a.next, a.next = () => ut(a._next(), n);
	}
	return a;
}
function ut(e, t) {
	return e.done || (e.value = t(e.value)), e;
}
var dt = Array.prototype;
function ft(e, t, n, r, i, a) {
	let o = ot(e), s = o !== e && !/* @__PURE__ */ N(e), c = o[t];
	if (c !== dt[t]) {
		let t = c.apply(e, a);
		return s ? qt(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, st(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function pt(e, t, n, r) {
	let i = ot(e), a = i !== e && !/* @__PURE__ */ N(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = st(e, t)), n.call(this, t, st(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? st(e, c) : c;
}
function mt(e, t, n) {
	let r = /* @__PURE__ */ P(e);
	M(r, "iterate", rt);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Gt(n[0]) ? (n[0] = /* @__PURE__ */ P(n[0]), r[t](...n)) : i;
}
function ht(e, t, n = []) {
	qe(), Le();
	let r = (/* @__PURE__ */ P(e))[t].apply(e, n);
	return Re(), Je(), r;
}
var gt = /* @__PURE__ */ e("__proto__,__v_isRef,__isVue"), _t = /* @__PURE__ */ new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_));
function vt(e) {
	_(e) || (e = String(e));
	let t = /* @__PURE__ */ P(this);
	return M(t, "has", e), t.hasOwnProperty(e);
}
var yt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Lt : It : i ? Ft : Pt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = d(e);
		if (!r) {
			let e;
			if (a && (e = ct[t])) return e;
			if (t === "hasOwnProperty") return vt;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ F(e) ? e : n);
		if ((_(t) ? _t.has(t) : gt(t)) || (r || M(e, "get", t), i)) return o;
		if (/* @__PURE__ */ F(o)) {
			let e = a && te(t) ? o : o.value;
			return r && v(e) ? /* @__PURE__ */ Vt(e) : e;
		}
		return v(o) ? r ? /* @__PURE__ */ Vt(o) : /* @__PURE__ */ zt(o) : o;
	}
}, bt = class extends yt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = d(e) && te(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Wt(i);
			if (!/* @__PURE__ */ N(n) && !/* @__PURE__ */ Wt(n) && (i = /* @__PURE__ */ P(i), n = /* @__PURE__ */ P(n)), !a && /* @__PURE__ */ F(i) && !/* @__PURE__ */ F(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : u(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ F(e) ? e : r);
		return e === /* @__PURE__ */ P(r) && s && (o ? T(n, i) && it(e, "set", t, n, i) : it(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = u(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && it(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return _(t) && _t.has(t) || M(e, "has", t), n;
	}
	ownKeys(e) {
		return M(e, "iterate", d(e) ? "length" : tt), Reflect.ownKeys(e);
	}
}, xt = class extends yt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, St = /* @__PURE__ */ new bt(), Ct = /* @__PURE__ */ new xt(), wt = /* @__PURE__ */ new bt(!0), Tt = (e) => e, Et = (e) => Reflect.getPrototypeOf(e);
function Dt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ P(i), o = f(a), c = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = i[e](...r), d = n ? Tt : t ? Jt : qt;
		return !t && M(a, "iterate", l ? nt : tt), s(Object.create(u), { next() {
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
function Ot(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function kt(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ P(r), a = /* @__PURE__ */ P(n);
			e || (T(n, a) && M(i, "get", n), M(i, "get", a));
			let { has: o } = Et(i), s = t ? Tt : e ? Jt : qt;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && M(/* @__PURE__ */ P(t), "iterate", tt), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ P(n), i = /* @__PURE__ */ P(t);
			return e || (T(t, i) && M(r, "has", t), M(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ P(a), s = t ? Tt : e ? Jt : qt;
			return !e && M(o, "iterate", tt), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return s(n, e ? {
		add: Ot("add"),
		set: Ot("set"),
		delete: Ot("delete"),
		clear: Ot("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ P(this), r = Et(n), i = /* @__PURE__ */ P(e), a = !t && !/* @__PURE__ */ N(e) && !/* @__PURE__ */ Wt(e) ? i : e;
			return r.has.call(n, a) || T(e, a) && r.has.call(n, e) || T(i, a) && r.has.call(n, i) || (n.add(a), it(n, "add", a, a)), this;
		},
		set(e, n) {
			t || /* @__PURE__ */ N(n) || /* @__PURE__ */ Wt(n) || (n = /* @__PURE__ */ P(n));
			let r = /* @__PURE__ */ P(this), { has: i, get: a } = Et(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ P(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? T(n, s) && it(r, "set", e, n, s) : it(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ P(this), { has: n, get: r } = Et(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ P(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && it(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ P(this), t = e.size !== 0, n = e.clear();
			return t && it(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = Dt(r, e, t);
	}), n;
}
function At(e, t) {
	let n = kt(e, t);
	return (r, i, a) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_isShallow" ? t : i === "__v_raw" ? r : Reflect.get(u(n, i) && i in r ? n : r, i, a);
}
var jt = { get: /* @__PURE__ */ At(!1, !1) }, Mt = { get: /* @__PURE__ */ At(!1, !0) }, Nt = { get: /* @__PURE__ */ At(!0, !1) }, Pt = /* @__PURE__ */ new WeakMap(), Ft = /* @__PURE__ */ new WeakMap(), It = /* @__PURE__ */ new WeakMap(), Lt = /* @__PURE__ */ new WeakMap();
function Rt(e) {
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
function zt(e) {
	return /* @__PURE__ */ Wt(e) ? e : Ht(e, !1, St, jt, Pt);
}
// @__NO_SIDE_EFFECTS__
function Bt(e) {
	return Ht(e, !1, wt, Mt, Ft);
}
// @__NO_SIDE_EFFECTS__
function Vt(e) {
	return Ht(e, !0, Ct, Nt, It);
}
function Ht(e, t, n, r, i) {
	if (!v(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Rt(ee(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function Ut(e) {
	return /* @__PURE__ */ Wt(e) ? /* @__PURE__ */ Ut(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Wt(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function N(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Gt(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function P(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ P(t) : e;
}
function Kt(e) {
	return !u(e, "__v_skip") && Object.isExtensible(e) && E(e, "__v_skip", !0), e;
}
var qt = (e) => v(e) ? /* @__PURE__ */ zt(e) : e, Jt = (e) => v(e) ? /* @__PURE__ */ Vt(e) : e;
// @__NO_SIDE_EFFECTS__
function F(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Yt(e) {
	return Zt(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Xt(e) {
	return Zt(e, !0);
}
function Zt(e, t) {
	return /* @__PURE__ */ F(e) ? e : new Qt(e, t);
}
var Qt = class {
	constructor(e, t) {
		this.dep = new Qe(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ P(e), this._value = t ? e : qt(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ N(e) || /* @__PURE__ */ Wt(e);
		e = n ? e : /* @__PURE__ */ P(e), T(e, t) && (this._rawValue = e, this._value = n ? e : qt(e), this.dep.trigger());
	}
};
function $t(e) {
	return /* @__PURE__ */ F(e) ? e.value : e;
}
var en = {
	get: (e, t, n) => t === "__v_raw" ? e : $t(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ F(i) && !/* @__PURE__ */ F(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function tn(e) {
	return /* @__PURE__ */ Ut(e) ? e : new Proxy(e, en);
}
var nn = class {
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
function rn(e, t, n = !1) {
	let r, i;
	return h(e) ? r = e : (r = e.get, i = e.set), new nn(r, i, n);
}
var an = {}, on = /* @__PURE__ */ new WeakMap(), sn = void 0;
function cn(e, t = !1, n = sn) {
	if (n) {
		let t = on.get(n);
		t || on.set(n, t = []), t.push(e);
	}
}
function ln(e, n, i = t) {
	let { immediate: a, deep: o, once: s, scheduler: l, augmentJob: u, call: f } = i, p = (e) => o ? e : /* @__PURE__ */ N(e) || o === !1 || o === 0 ? un(e, 1) : un(e), m, g, _, v, y = !1, b = !1;
	if (/* @__PURE__ */ F(e) ? (g = () => e.value, y = /* @__PURE__ */ N(e)) : /* @__PURE__ */ Ut(e) ? (g = () => p(e), y = !0) : d(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ Ut(e) || /* @__PURE__ */ N(e)), g = () => e.map((e) => {
		if (/* @__PURE__ */ F(e)) return e.value;
		if (/* @__PURE__ */ Ut(e)) return p(e);
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
		let t = sn;
		sn = m;
		try {
			return f ? f(e, 3, [v]) : e(v);
		} finally {
			sn = t;
		}
	} : r, n && o) {
		let e = g, t = o === !0 ? Infinity : o;
		g = () => un(e(), t);
	}
	let x = Ae(), ee = () => {
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
	let S = b ? Array(e.length).fill(an) : an, te = (e) => {
		if (m.flags & 1 && (m.dirty || e)) {
			if (n) {
				let t = m.run();
				if (e || o || y || (b ? t.some((e, t) => T(e, S[t])) : T(t, S))) {
					let e = sn;
					qe();
					try {
						_ && _(), sn = m;
						let e = [
							t,
							S === an ? void 0 : b && S[0] === an ? [] : S,
							v
						];
						S = t, f ? f(n, 3, e) : n(...e);
					} finally {
						sn = e, Je();
					}
				}
			} else m.run();
		}
	};
	return u && u(te), m = new Me(g), m.scheduler = l ? () => l(te, !1) : te, v = (e) => cn(e, !1, m), _ = m.onStop = () => {
		let e = on.get(m);
		if (e) {
			if (f) f(e, 4);
			else for (let t of e) t();
			on.delete(m);
		}
	}, n ? a ? te(!0) : S = m.run() : l ? l(te.bind(null, !0), !0) : m.run(), ee.pause = m.pause.bind(m), ee.resume = m.resume.bind(m), ee.stop = ee, ee;
}
function un(e, t = Infinity, n) {
	if (t <= 0 || !v(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ F(e)) un(e.value, t, n);
	else if (d(e)) for (let r = 0; r < e.length; r++) un(e[r], t, n);
	else if (p(e) || f(e)) e.forEach((e) => {
		un(e, t, n);
	});
	else if (S(e)) {
		for (let r in e) un(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && un(e[r], t, n);
	}
	return e;
}
// node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function dn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		pn(e, t, n);
	}
}
function fn(e, t, n, r) {
	if (h(e)) {
		let i = dn(e, t, n, r);
		return i && y(i) && i.catch((e) => {
			pn(e, t, n, void 0, !0);
		}), i;
	}
	if (d(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(fn(e[a], t, n, r));
		return i;
	}
}
function pn(e, n, r, i = !0, a = !1) {
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
			qe(), dn(s, null, 10, [
				e,
				i,
				o
			]), Je();
			return;
		}
	}
	mn(e, r, o, i, c);
}
function mn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var I = [], hn = -1, gn = [], _n = null, vn = 0, yn = /* @__PURE__ */ Promise.resolve(), bn = null;
function xn(e) {
	let t = bn || yn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function Sn(e) {
	let t = hn + 1, n = I.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = I[r], a = An(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function Cn(e) {
	if (!(e.flags & 1)) {
		let t = An(e), n = I[I.length - 1];
		!n || !(e.flags & 2) && t >= An(n) ? I.push(e) : I.splice(Sn(t), 0, e), e.flags |= 1, wn();
	}
}
function wn() {
	bn ||= yn.then(jn);
}
function Tn(e) {
	if (!d(e)) _n && e.id === -1 ? _n.splice(vn + 1, 0, e) : e.flags & 1 || (gn.push(e), e.flags |= 1);
	else for (let t = 0; t < e.length; t++) gn.push(e[t]);
	wn();
}
function En(e, t, n, r = hn + 1) {
	for (; r < I.length; r++) {
		let n = I[r];
		if (n && n.flags & 2) {
			if (e && n.id !== e.uid || t !== void 0 && !(n.id >= t)) continue;
			I.splice(r, 1), r = e ? r - 1 : hn, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
		}
	}
}
function Dn(e, t, n = 0) {
	if (gn.length) {
		let e = gn, r = 0;
		if (t) {
			e = [];
			for (let i = 0; i < gn.length; i++) {
				let a = gn[i];
				(a.i === void 0 ? t.has(a) : !a.i || a.i.uid < n) ? gn[r++] = a : e.push(a);
			}
		}
		let i = [...new Set(e)].sort((e, t) => An(e) - An(t));
		if (gn.length = r, _n) {
			for (let e = 0; e < i.length; e++) _n.push(i[e]);
			return;
		}
		for (_n = i, vn = 0; vn < _n.length; vn++) {
			let e = _n[vn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		_n = null, vn = 0;
	}
}
var On = !1;
function kn(e, t) {
	if (On) {
		e();
		return;
	}
	let n = t === void 0 ? void 0 : new Set(gn);
	e(), On = !0;
	try {
		En(void 0, t), Dn(void 0, n, t);
	} finally {
		On = !1;
	}
}
var An = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function jn(e) {
	try {
		for (hn = 0; hn < I.length; hn++) {
			let e = I[hn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), dn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; hn < I.length; hn++) {
			let e = I[hn];
			e && (e.flags &= -2);
		}
		hn = -1, I.length = 0, Dn(e), bn = null, (I.length || gn.length) && jn(e);
	}
}
var L = null, Mn = null;
function Nn(e) {
	let t = L;
	return L = e, Mn = e && e.type.__scopeId || null, t;
}
function Pn(e, t = L, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && Ui(-1);
		let i = Nn(t), a = Bi.length, o;
		try {
			o = e(...n);
		} finally {
			for (let e = Bi.length; e > a; e--) Vi();
			Nn(i), r._d && Ui(1);
		}
		return o;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function R(e, n) {
	if (L === null) return e;
	let r = Ca(L), i = e.dirs ||= [];
	for (let e = 0; e < n.length; e++) {
		let [a, o, s, c = t] = n[e];
		a && (h(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && un(o), i.push({
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
function Fn(e, t, n, r) {
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
		u && (qe(), fn(u, n, 8, [
			e.el,
			l,
			i,
			t
		]), Je());
	}
}
function In(e, t) {
	if (Z) {
		let n = Z.provides, r = Z.parent && Z.parent.provides;
		r === n && (n = Z.provides = Object.create(r)), n[e] = t;
	}
}
function Ln(e, t, n = !1) {
	let r = la();
	if (r || Kr) {
		let i = Kr ? Kr._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && h(t) ? t.call(r && r.proxy) : t;
	}
}
var Rn = /* @__PURE__ */ Symbol.for("v-scx"), zn = () => Ln(Rn);
function Bn(e, t, n) {
	return Vn(e, t, n);
}
function Vn(e, n, i = t) {
	let { immediate: a, deep: o, flush: c, once: l } = i, u = s({}, i), d = n && a || !n && c !== "post", f;
	if (ha) {
		if (c === "sync") {
			let e = zn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = r, e.resume = r, e.pause = r, e;
		}
	}
	let p = Z;
	u.call = (e, t, n) => fn(e, p, t, n);
	let m = !1;
	c === "post" ? u.scheduler = (e) => {
		e.i = p, H(e, p && p.suspense);
	} : c !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : Cn(e);
	}), u.augmentJob = (e) => {
		n && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = ln(e, n, u);
	return ha && (f ? f.push(h) : d && h()), h;
}
function Hn(e, t, n) {
	let r = this.proxy, i = g(e) ? e.includes(".") ? Un(r, e) : () => r[e] : e.bind(r, r), a;
	h(t) ? a = t : (a = t.handler, n = t);
	let o = fa(this), s = Vn(i, a.bind(r), n);
	return o(), s;
}
function Un(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Wn = /* @__PURE__ */ Symbol("_vte"), Gn = (e) => e.__isTeleport, Kn = /* @__PURE__ */ Symbol("_leaveCb");
function qn(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== Ri) {
			t = n;
			break;
		}
	}
	return t;
}
function Jn(e) {
	if (!rr(e)) return Gn(e.type) && e.children ? qn(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && h(n.default)) return n.default();
	}
}
function Yn(e, t) {
	if (e.shapeFlag & 6 && e.component) {
		e.transition = t;
		let n = e.component.subTree;
		Yn(Gn(n.type) && Jn(n) || n, t);
	} else if (e.shapeFlag & 128) {
		let n = e.suspense;
		if (n) {
			let e = n.isHydrating ? n.pendingBranch : n.activeBranch;
			e && Yn(e, t.clone(e));
		} else e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback);
	} else if (e.transition = t, e.type === U && d(e.children)) {
		let n = $r(e.children, !1);
		n && Yn(n, t);
	}
}
function Xn(e) {
	if (e.component) return Xn(e.component.subTree);
	if (e.type === U) {
		let t = d(e.children) && $r(e.children, !1);
		return t ? Xn(t) : void 0;
	}
	if (e.type !== Ri) return e;
}
function Zn(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function Qn(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var $n = /* @__PURE__ */ new WeakMap();
function er(e, n, r, a, o = !1) {
	if (d(e)) {
		e.forEach((e, t) => er(e, n && (d(n) ? n[t] : n), r, a, o));
		return;
	}
	if (nr(a) && !o) {
		a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && er(e, n, r, a.component.subTree);
		return;
	}
	let s = a.shapeFlag & 4 ? Ca(a.component) : a.el, l = o ? null : s, { i: f, r: p } = e, m = n && n.r, _ = f.refs === t ? f.refs = {} : f.refs, v = f.setupState, y = /* @__PURE__ */ P(v), b = v === t ? i : (e) => !Qn(_, e) && u(y, e), x = (e, t) => !(t && Qn(_, t));
	if (m != null && m !== p) {
		if (tr(n), g(m)) _[m] = null, b(m) && (v[m] = null);
		else if (/* @__PURE__ */ F(m)) {
			let e = n;
			x(m, e.k) && (m.value = null), e.k && (_[e.k] = null);
		}
	}
	if (h(p)) dn(p, f, 12, [l, _]);
	else {
		let t = g(p), n = /* @__PURE__ */ F(p);
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
					i(), $n.delete(e);
				};
				t.id = -1, $n.set(e, t), H(t, r);
			} else tr(e), i();
		}
	}
}
function tr(e) {
	let t = $n.get(e);
	t && (t.flags |= 8, $n.delete(e));
}
de().requestIdleCallback, de().cancelIdleCallback;
var nr = (e) => !!e.type.__asyncLoader, rr = (e) => e.type.__isKeepAlive;
function ir(e, t) {
	or(e, "a", t);
}
function ar(e, t) {
	or(e, "da", t);
}
function or(e, t, n = Z) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (cr(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) rr(e.parent.vnode) && sr(r, t, n, e), e = e.parent;
	}
}
function sr(e, t, n, r) {
	let i = cr(t, e, r, !0), a = cr("um", () => c(r[t], i), n);
	a.flags = 16;
}
function cr(e, t, n = Z, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			qe();
			let i = fa(n), a = fn(t, n, e, r);
			return i(), Je(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var lr = (e) => (t, n = Z) => {
	ha && e !== "sp" || cr(e, (...e) => t(...e), n);
}, ur = lr("bm"), z = lr("m"), dr = lr("bu"), fr = lr("u"), pr = lr("bum"), mr = lr("um"), hr = lr("sp"), gr = lr("rtg"), _r = lr("rtc");
function vr(e, t = Z) {
	cr("ec", e, t);
}
var yr = "components", br = /* @__PURE__ */ Symbol.for("v-ndc");
function xr(e) {
	return g(e) ? Sr(yr, e, !1) || e : e || br;
}
function Sr(e, t, n = !0, r = !1) {
	let i = L || Z;
	if (i) {
		let n = i.type;
		if (e === yr) {
			let e = wa(n, !1);
			if (e && (e === t || e === C(t) || e === oe(C(t)))) return n;
		}
		let a = Cr(i[e] || n[e], t) || Cr(i.appContext[e], t);
		return !a && r ? n : a;
	}
}
function Cr(e, t) {
	return e && (e[t] || e[C(t)] || e[oe(C(t))]);
}
function B(e, t, n, r) {
	let i, a = n && n[r], o = d(e);
	if (o || g(e)) {
		let n = o && /* @__PURE__ */ Ut(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ N(e), s = /* @__PURE__ */ Wt(e), e = ot(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? Jt(qt(e[n])) : qt(e[n]) : e[n], n, void 0, a && a[n]);
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
var wr = (e) => e ? ma(e) ? Ca(e) : wr(e.parent) : null, Tr = /* @__PURE__ */ s(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => wr(e.parent),
	$root: (e) => wr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Pr(e),
	$forceUpdate: (e) => e.f ||= () => {
		Cn(e.update);
	},
	$nextTick: (e) => e.n ||= xn.bind(e.proxy),
	$watch: (e) => Hn.bind(e)
}), Er = (e, n) => e !== t && !e.__isScriptSetup && u(e, n), Dr = {
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
			else if (Er(i, n)) return s[n] = 1, i[n];
			else if (a !== t && u(a, n)) return s[n] = 2, a[n];
			else if (u(o, n)) return s[n] = 3, o[n];
			else if (r !== t && u(r, n)) return s[n] = 4, r[n];
			else kr && (s[n] = 0);
		}
		let d = Tr[n], f, p;
		if (d) return n === "$attrs" && M(e.attrs, "get", ""), d(e);
		if ((f = c.__cssModules) && (f = f[n])) return f;
		if (r !== t && u(r, n)) return s[n] = 4, r[n];
		if (p = l.config.globalProperties, u(p, n)) return p[n];
	},
	set({ _: e }, n, r) {
		let { data: i, setupState: a, ctx: o } = e;
		return Er(a, n) ? (a[n] = r, !0) : i !== t && u(i, n) ? (i[n] = r, !0) : u(e.props, n) || n[0] === "$" && n.slice(1) in e ? !1 : (o[n] = r, !0);
	},
	has({ _: { data: e, setupState: n, accessCache: r, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(r[c] || e !== t && c[0] !== "$" && u(e, c) || Er(n, c) || u(o, c) || u(i, c) || u(Tr, c) || u(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? u(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function Or(e) {
	return d(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var kr = !0;
function Ar(e) {
	let t = Pr(e), n = e.proxy, i = e.ctx;
	kr = !1, t.beforeCreate && Mr(t.beforeCreate, e, "bc");
	let { data: a, computed: o, methods: s, watch: c, provide: l, inject: u, created: f, beforeMount: p, mounted: m, beforeUpdate: g, updated: _, activated: y, deactivated: b, beforeDestroy: x, beforeUnmount: ee, destroyed: S, unmounted: te, render: ne, renderTracked: re, renderTriggered: ie, errorCaptured: C, serverPrefetch: ae, expose: w, inheritAttrs: oe, components: se, directives: T, filters: ce } = t;
	if (u && jr(u, i, null), s) for (let e in s) {
		let t = s[e];
		h(t) && (i[e] = t.bind(n));
	}
	if (a) {
		let t = a.call(n, n);
		v(t) && (e.data = /* @__PURE__ */ zt(t));
	}
	if (kr = !0, o) for (let e in o) {
		let t = o[e], a = Q({
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
	if (c) for (let e in c) Nr(c[e], i, n, e);
	if (l) {
		let e = h(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			In(t, e[t]);
		});
	}
	f && Mr(f, e, "c");
	function E(e, t) {
		d(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (E(ur, p), E(z, m), E(dr, g), E(fr, _), E(ir, y), E(ar, b), E(vr, C), E(_r, re), E(gr, ie), E(pr, ee), E(mr, te), E(hr, ae), d(w)) {
		if (w.length) {
			let t = e.exposed ||= {};
			w.forEach((e) => {
				Object.defineProperty(t, e, {
					get: () => n[e],
					set: (t) => n[e] = t,
					enumerable: !0
				});
			});
		} else e.exposed ||= {};
	}
	ne && e.render === r && (e.render = ne), oe != null && (e.inheritAttrs = oe), se && (e.components = se), T && (e.directives = T), ae && Zn(e);
}
function jr(e, t, n = r) {
	d(e) && (e = zr(e));
	for (let n in e) {
		let r = e[n], i;
		i = v(r) ? "default" in r ? Ln(r.from || n, r.default, !0) : Ln(r.from || n) : Ln(r), /* @__PURE__ */ F(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Mr(e, t, n) {
	fn(d(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Nr(e, t, n, r) {
	let i = r.includes(".") ? Un(n, r) : () => n[r];
	if (g(e)) {
		let n = t[e];
		h(n) && Bn(i, n);
	} else if (h(e)) Bn(i, e.bind(n));
	else if (v(e)) {
		if (d(e)) e.forEach((e) => Nr(e, t, n, r));
		else {
			let r = h(e.handler) ? e.handler.bind(n) : t[e.handler];
			h(r) && Bn(i, r, e);
		}
	}
}
function Pr(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => Fr(c, e, o, !0)), Fr(c, t, o)), v(t) && a.set(t, c), c;
}
function Fr(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && Fr(e, a, n, !0), i && i.forEach((t) => Fr(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = Ir[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var Ir = {
	data: Lr,
	props: Vr,
	emits: Vr,
	methods: Br,
	computed: Br,
	beforeCreate: V,
	created: V,
	beforeMount: V,
	mounted: V,
	beforeUpdate: V,
	updated: V,
	beforeDestroy: V,
	beforeUnmount: V,
	destroyed: V,
	unmounted: V,
	activated: V,
	deactivated: V,
	errorCaptured: V,
	serverPrefetch: V,
	components: Br,
	directives: Br,
	watch: Hr,
	provide: Lr,
	inject: Rr
};
function Lr(e, t) {
	return t ? e ? function() {
		return s(h(e) ? e.call(this, this) : e, h(t) ? t.call(this, this) : t);
	} : t : e;
}
function Rr(e, t) {
	return Br(zr(e), zr(t));
}
function zr(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function V(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Br(e, t) {
	return e ? s(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Vr(e, t) {
	return e ? d(e) && d(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : s(/* @__PURE__ */ Object.create(null), Or(e), Or(t ?? {})) : t;
}
function Hr(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = s(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = V(e[r], t[r]);
	return n;
}
function Ur() {
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
var Wr = 0;
function Gr(e, t) {
	return function(n, r = null) {
		h(n) || (n = s({}, n)), r != null && !v(r) && (r = null);
		let i = Ur(), a = /* @__PURE__ */ new WeakSet(), o = [], c = !1, l = i.app = {
			_uid: Wr++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: Ea,
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
					let u = l._ceVNode || J(n, r);
					return u.appContext = i, s === !0 ? s = "svg" : s === !1 && (s = void 0), o && t ? t(u, a) : e(u, a, s), c = !0, l._container = a, a.__vue_app__ = l, Ca(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				c && (fn(o, l._instance, 16), e(null, l._container), delete l._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, l;
			},
			runWithContext(e) {
				let t = Kr;
				Kr = l;
				try {
					return e();
				} finally {
					Kr = t;
				}
			}
		};
		return l;
	};
}
var Kr = null, qr = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${C(t)}Modifiers`] || e[`${w(t)}Modifiers`];
function Jr(e, n, ...r) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || t, a = r, o = n.startsWith("update:"), s = o && qr(i, n.slice(7));
	s && (s.trim && (a = r.map((e) => g(e) ? e.trim() : e)), s.number && (a = a.map(le)));
	let c, l = i[c = se(n)] || i[c = se(C(n))];
	!l && o && (l = i[c = se(w(n))]), l && fn(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, fn(u, e, 6, a);
	}
}
var Yr = /* @__PURE__ */ new WeakMap();
function Xr(e, t, n = !1) {
	let r = n ? Yr : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, c = !1;
	if (!h(e)) {
		let r = (e) => {
			let n = Xr(e, t, !0);
			n && (c = !0, s(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !c ? (v(e) && r.set(e, null), null) : (d(a) ? a.forEach((e) => o[e] = null) : s(o, a), v(e) && r.set(e, o), o);
}
function Zr(e, t) {
	return !e || !a(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), u(e, t[0].toLowerCase() + t.slice(1)) || u(e, w(t)) || u(e, t));
}
function Qr(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: s, attrs: c, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = Nn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = ea(u.call(t, e, d, f, m, p, h)), y = c;
		} else {
			let e = t;
			v = ea(e.length > 1 ? e(f, {
				attrs: c,
				slots: s,
				emit: l
			}) : e(f, null)), y = t.props ? c : ei(c);
		}
	} catch (t) {
		Bi.length = 0, pn(t, e, 1), v = J(Ri);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(o) && (y = ti(y, a)), b = Qi(b, y, !1, !0));
	}
	return n.dirs && (b = Qi(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && Yn(Gn(b.type) && Jn(b) || b, n.transition), v = b, Nn(_), v;
}
function $r(e, t = !0) {
	let n;
	for (let t = 0; t < e.length; t++) {
		let r = e[t];
		if (Ki(r)) {
			if (r.type !== Ri || r.children === "v-if") {
				if (n) return;
				n = r;
			}
		} else return;
	}
	return n;
}
var ei = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || a(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, ti = (e, t) => {
	let n = {};
	for (let r in e) o(r) && r.slice(9) in t || (n[r] = e[r]);
	return n;
};
function ni(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? ri(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (ii(o, r, n) && !Zr(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? !o || ri(r, o, l) : !!o;
	return !1;
}
function ri(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (!u(e, a) || ii(t, e, a) && !Zr(n, a)) return !0;
	}
	return !1;
}
function ii(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && v(r) && v(i) ? !Ce(r, i) : r !== i;
}
function ai({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var oi = {}, si = () => Object.create(oi), ci = (e) => Object.getPrototypeOf(e) === oi;
function li(e, t, n, r = !1) {
	let i = {}, a = si();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), di(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	e.props = n ? r ? i : /* @__PURE__ */ Bt(i) : e.type.props ? i : a, e.attrs = a;
}
function ui(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ P(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (Zr(e.emitsOptions, o)) continue;
				let d = t[o];
				if (c) {
					if (u(a, o)) d !== a[o] && (a[o] = d, l = !0);
					else {
						let t = C(o);
						i[t] = fi(c, s, t, d, e, !1);
					}
				} else d !== a[o] && (a[o] = d, l = !0);
			}
		}
	} else {
		di(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) t && (u(t, a) || (r = w(a)) !== a && u(t, r)) || (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = fi(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) t && u(t, e) || (delete a[e], l = !0);
	}
	l && it(e.attrs, "set", "");
}
function di(e, n, r, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (n) for (let t in n) {
		if (ne(t)) continue;
		let l = n[t], d;
		a && u(a, d = C(t)) ? !o || !o.includes(d) ? r[d] = l : (c ||= {})[d] = l : Zr(e.emitsOptions, t) || t in i && l === i[t] || (i[t] = l, s = !0);
	}
	if (o) {
		let n = /* @__PURE__ */ P(r), i = c || t;
		for (let t = 0; t < o.length; t++) {
			let s = o[t];
			r[s] = fi(a, n, s, i[s], e, !u(i, s));
		}
	}
	return s;
}
function fi(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = u(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && h(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = fa(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === w(n)) && (r = !0));
	}
	return r;
}
var pi = /* @__PURE__ */ new WeakMap();
function mi(e, r, i = !1) {
	let a = i ? pi : r.propsCache, o = a.get(e);
	if (o) return o;
	let c = e.props, l = {}, f = [], p = !1;
	if (!h(e)) {
		let t = (e) => {
			p = !0;
			let [t, n] = mi(e, r, !0);
			s(l, t), n && f.push(...n);
		};
		!i && r.mixins.length && r.mixins.forEach(t), e.extends && t(e.extends), e.mixins && e.mixins.forEach(t);
	}
	if (!c && !p) return v(e) && a.set(e, n), n;
	if (d(c)) for (let e = 0; e < c.length; e++) {
		let n = C(c[e]);
		hi(n) && (l[n] = t);
	}
	else if (c) for (let e in c) {
		let t = C(e);
		if (hi(t)) {
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
function hi(e) {
	return e[0] !== "$" && !ne(e);
}
var gi = (e) => e === "_" || e === "_ctx" || e === "$stable", _i = (e) => d(e) ? e.map(ea) : [ea(e)], vi = (e, t, n) => {
	if (t._n) return t;
	let r = Pn((...e) => _i(t(...e)), n);
	return r._c = !1, r;
}, yi = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (gi(n)) continue;
		let i = e[n];
		if (h(i)) t[n] = vi(n, i, r);
		else if (i != null) {
			let e = _i(i);
			t[n] = () => e;
		}
	}
}, bi = (e, t) => {
	let n = _i(t);
	e.slots.default = () => n;
}, xi = (e, t, n) => {
	for (let r in t) (n || !gi(r)) && (e[r] = t[r]);
}, Si = (e, t, n) => {
	let r = e.slots = si();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (xi(r, t, n), n && E(r, "_", e, !0)) : yi(t, r);
	} else t && bi(e, t);
}, Ci = (e, n, r) => {
	let { vnode: i, slots: a } = e, o = !0, s = t;
	if (i.shapeFlag & 32) {
		let e = n._;
		e ? r && e === 1 ? o = !1 : xi(a, n, r) : (o = !n.$stable, yi(n, a)), s = n;
	} else n && (bi(e, n), s = { default: 1 });
	if (o) for (let e in a) !gi(e) && s[e] == null && delete a[e];
}, H = Ii;
function wi(e) {
	return Ti(e);
}
function Ti(e, i) {
	let a = de();
	a.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = r, insertStaticContent: _ } = e, v = (e, t, r, i = null, a = null, o = null, s = void 0, c = null, l = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !qi(e, t) && (i = be(e), O(e, a, o, !0), e = null), t.patchFlag === -2 && (l = !1, t.dynamicChildren = null), t.dynamicChildren && e && e.dynamicChildren && e.dynamicChildren.hasOnce && (t.dynamicChildren === n && (t.dynamicChildren = []), t.dynamicChildren.hasOnce = !0);
		let { type: u, ref: d, shapeFlag: f } = t;
		switch (u) {
			case Li:
				y(e, t, r, i);
				break;
			case Ri:
				b(e, t, r, i);
				break;
			case zi:
				e ?? x(t, r, i, s);
				break;
			case U:
				se(e, t, r, i, a, o, s, c, l);
				break;
			default: f & 1 ? te(e, t, r, i, a, o, s, c, l) : f & 6 ? T(e, t, r, i, a, o, s, c, l) : (f & 64 || f & 128) && u.process(e, t, r, i, a, o, s, c, l, Se);
		}
		d != null && a ? er(d, e && e.ref, o, t || e, !t) : d == null && e && e.ref != null && er(e.ref, null, o, e, !0);
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
	}, te = (e, t, n, r, i, a, o, s, c) => {
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) re(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), ae(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, re = (e, t, n, r, i, a, s, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && C(e.children, d, null, r, i, Ei(e, a), s, u), _ && Fn(e, null, r, "created"), ie(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !ne(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && ia(f, r, e);
		}
		_ && Fn(e, null, r, "beforeMount");
		let v = Oi(i, g);
		v ? g.beforeEnter(d) : g && !g.persisted && (d[Fi] = !0), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && H(() => {
			try {
				f && ia(f, r, e), v && g.enter(d), _ && Fn(e, null, r, "mounted");
			} finally {}
		}, i);
	}, ie = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || Pi(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				ie(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, C = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) {
			let c = e[l] = s ? ta(e[l]) : ea(e[l]);
			v(null, c, t, n, r, i, a, o, s);
		}
	}, ae = (e, n, r, i, a, o, s) => {
		let l = n.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = n;
		u |= e.patchFlag & 16;
		let m = e.props || t, h = n.props || t, g;
		if (r && Di(r, !1), (g = h.onVnodeBeforeUpdate) && ia(g, r, n, e), f && Fn(n, e, r, "beforeUpdate"), r && Di(r, !0), d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length) && (u = 0, s = !1, d = null), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? w(e.dynamicChildren, d, l, r, i, Ei(n, a), o) : s || fe(e, n, l, null, r, i, Ei(n, a), o, !1), u > 0) {
			if (u & 16) oe(l, m, h, r, a);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, a), u & 4 && c(l, "style", m.style, h.style, a), u & 8) {
				let e = n.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let n = e[t], i = m[n], o = h[n];
					(o !== i || n === "value") && c(l, n, i, o, a, r);
				}
			}
			u & 1 && e.children !== n.children && p(l, n.children);
		} else !s && d == null && oe(l, m, h, r, a);
		((g = h.onVnodeUpdated) || f) && H(() => {
			g && ia(g, r, n, e), f && Fn(n, e, r, "updated");
		}, i);
	}, w = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el || Ni(c), d = u && (c.type === U || !qi(c, l) || c.shapeFlag & 198) ? m(u) : n;
			v(c, l, d, null, r, i, a, o, !0);
		}
	}, oe = (e, n, r, i, a) => {
		if (n !== r) {
			if (n !== t) for (let t in n) !ne(t) && !(t in r) && c(e, t, n[t], null, a, i);
			for (let t in r) {
				if (ne(t)) continue;
				let o = r[t], s = n[t];
				o !== s && t !== "value" && c(e, t, s, o, a, i);
			}
			"value" in r && c(e, "value", n.value, r.value, a);
		}
	}, se = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), C(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (w(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && ki(e, t, !0)) : fe(e, t, n, f, i, a, s, c, l);
	}, T = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : E(t, n, r, i, a, o, c) : le(e, t, c);
	}, E = (e, t, n, r, i, a, o) => {
		let s = e.component = ca(e, r, i);
		if (rr(e) && (s.ctx.renderer = Se), ga(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, ue, o, a), !e.el) {
				let r = s.subTree = J(Ri);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else ue(s, e, t, n, i, a, o);
	}, le = (e, t, n) => {
		let r = t.component = e.component;
		if (ni(e, t, n)) {
			if (r.asyncDep && !r.asyncResolved) {
				t.el = e.el, t.placeholder = e.placeholder, D(r, t, n);
				return;
			}
			r.next = t, r.update();
		} else t.el = e.el, t.placeholder = e.placeholder, r.vnode = t;
	}, ue = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = ji(e);
					if (n) {
						t && (t.el = c.el, D(e, t, o)), n.asyncDep.then(() => {
							let t = () => {
								e.job.flags & 8 || (i && i.pendingBranch ? H(t, i) : l());
							};
							t.flags = 48, H(t, i);
						});
						return;
					}
				}
				let u = t, d;
				Di(e, !1), t ? (t.el = c.el, D(e, t, o)) : t = c, n && ce(n), (d = t.props && t.props.onVnodeBeforeUpdate) && ia(d, s, t, c), Di(e, !0);
				let f = Qr(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el || Ni(p)), be(p), e, i, a), t.el = f.el, u === null && ai(e, f.el), r && H(r, i), (d = t.props && t.props.onVnodeUpdated) && H(() => ia(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = nr(t);
				if (Di(e, !1), l && ce(l), !m && (o = c && c.onVnodeBeforeMount) && ia(o, d, t), Di(e, !0), s && we) {
					let t = () => {
						e.subTree = Qr(e), we(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = Qr(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && H(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					H(() => ia(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && nr(d.vnode) && d.vnode.shapeFlag & 256) && e.a && H(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Me(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => Cn(u), Di(e, !0), l();
	}, D = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, ui(e, t.props, r, n), Ci(e, t.children, n), qe(), En(e), Je();
	}, fe = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				me(l, d, n, r, i, a, o, s, c);
				return;
			}
			if (f & 256) {
				pe(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && ye(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? me(l, d, n, r, i, a, o, s, c) : ye(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && C(d, n, r, i, a, o, s, c));
	}, pe = (e, t, r, i, a, o, s, c, l) => {
		e ||= n, t ||= n;
		let u = e.length, d = t.length, f = Math.min(u, d), p = 0;
		for (; p < f; p++) {
			let n = t[p] = l ? ta(t[p]) : ea(t[p]);
			v(e[p], n, r, null, a, o, s, c, l);
		}
		u > d ? ye(e, a, o, !0, !1, f) : C(t, r, i, a, o, s, c, l, f);
	}, me = (e, t, r, i, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let n = e[u], i = t[u] = l ? ta(t[u]) : ea(t[u]);
			if (qi(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let n = e[f], i = t[p] = l ? ta(t[p]) : ea(t[p]);
			if (qi(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, n = e < d ? t[e].el : i;
				for (; u <= p;) v(null, t[u] = l ? ta(t[u]) : ea(t[u]), r, n, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) O(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? ta(t[u]) : ea(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let _, y = 0, b = p - h + 1, x = !1, ee = 0, S = Array(b);
			for (u = 0; u < b; u++) S[u] = 0;
			for (u = m; u <= f; u++) {
				let n = e[u];
				if (y >= b) {
					O(n, a, o, !0);
					continue;
				}
				let i;
				if (n.key != null) i = g.get(n.key);
				else for (_ = h; _ <= p; _++) if (S[_ - h] === 0 && qi(n, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? O(n, a, o, !0) : (S[i - h] = u + 1, i >= ee ? ee = i : x = !0, v(n, t[i], r, null, a, o, s, c, l), y++);
			}
			let te = x ? Ai(S) : n;
			for (_ = te.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, n = t[e], f = t[e + 1], p = e + 1 < d ? f.el || Ni(f) : i;
				S[u] === 0 ? v(null, n, r, p, a, o, s, c, l) : x && (_ < 0 || u !== te[_] ? he(n, r, p, 2) : _--);
			}
		}
	}, he = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) he(e.component.subTree, t, n, r);
		else if (d & 128) e.suspense.move(t, n, r);
		else if (d & 64) c.move(e, t, n, Se);
		else if (c === U) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) he(u[e], t, n, r);
			o(e.anchor, t, n);
		} else if (c === zi) ee(e, t, n);
		else if (r !== 2 && d & 1 && l) {
			if (r === 0) l.persisted && !a[Kn] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), H(() => l.enter(a), i));
			else {
				let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
					e.ctx.isUnmounted ? s(a) : o(a, t, n);
				}, d = () => {
					let e = a._isLeaving || !!a[Kn];
					a._isLeaving && a[Kn](!0), l.persisted && !e ? u() : r(a, () => {
						u(), c && c();
					});
				};
				i ? i(a, u, d) : d();
			}
		} else o(a, t, n);
	}, O = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if ((d === -2 || l && l.hasOnce) && (i = !1), s != null && (qe(), er(s, null, n, e, !0), Je()), p == null || e.ctx && e.ctx !== t || (t.renderCache[p] = void 0), u & 256 && t.ctx.deactivate(e)) return;
		let h = u & 1 && f, g = !nr(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && ia(_, t, e), u & 6) ve(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Fn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, Se, r) : l && !l.hasOnce && (a !== U || d > 0 && d & 64) ? ye(l, t, n, !1, !0) : (a === U && d & 384 || !i && u & 16) && ye(c, t, n), r && ge(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && H(() => {
			_ && ia(_, t, e), h && Fn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, ge = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e, a = t === U;
		if (a && !i) {
			_e(n, r);
			return;
		}
		if (t === zi) {
			S(e), i && !i.persisted && i.afterLeave && i.afterLeave();
			return;
		}
		let o = a ? Xn(e) : e, c = () => {
			a ? m(n) && _e(n, r) : s(n), i && !i.persisted && i.afterLeave && i.afterLeave();
		};
		if (o && o.shapeFlag & 1 && i && !i.persisted) {
			let { leave: e, delayLeave: t } = i, n = o.el, r = () => e(n, c);
			t ? t(n, c, r) : r();
		} else c();
	}, _e = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, ve = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		Mi(c), Mi(l), r && ce(r), i.stop(), a ? (a.flags |= 8, O(o, e, t, n)) : o && (o.transition = e.vnode.transition, O(o, e, t, n)), s && H(s, t);
		let u = () => {
			e.isUnmounted = !0;
		};
		u.flags = 16, H(u, t);
	}, ye = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) O(e[o], t, n, r, i);
	}, be = (e) => {
		if (e.shapeFlag & 6) return be(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Wn];
		return n ? h(n) : t;
	}, xe = (e, t, n) => {
		kn(() => {
			e == null ? t._vnode && O(t._vnode, null, null, !0) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e;
		}, e && t._vnode ? void 0 : e && e.component ? e.component.uid : sa());
	}, Se = {
		p: v,
		um: O,
		m: he,
		r: ge,
		mt: E,
		mc: C,
		pc: fe,
		pbc: w,
		n: be,
		o: e
	}, Ce, we;
	return i && ([Ce, we] = i(Se)), {
		render: xe,
		hydrate: Ce,
		createApp: Gr(xe, Ce)
	};
}
function Ei({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Di({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Oi(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ki(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (d(r) && d(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = ta(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && ki(t, a)), a.type === Li && (a.patchFlag === -1 && (a = i[e] = ta(a)), a.el = t.el), a.type === Ri && !a.el && (a.el = t.el);
	}
}
function Ai(e) {
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
function ji(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : ji(t);
}
function Mi(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Ni(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	if (t) return Ni(t.subTree);
	let n = e.suspense;
	return n && n.activeBranch ? Ni(n.activeBranch) : null;
}
var Pi = (e) => e.__isSuspense, Fi = /* @__PURE__ */ Symbol("_deferredEnter");
function Ii(e, t) {
	t && t.pendingBranch ? d(e) ? t.effects.push(...e) : t.effects.push(e) : Tn(e);
}
var U = /* @__PURE__ */ Symbol.for("v-fgt"), Li = /* @__PURE__ */ Symbol.for("v-txt"), Ri = /* @__PURE__ */ Symbol.for("v-cmt"), zi = /* @__PURE__ */ Symbol.for("v-stc"), Bi = [], W = null;
function G(e = !1) {
	Bi.push(W = e ? null : []);
}
function Vi() {
	Bi.pop(), W = Bi[Bi.length - 1] || null;
}
var Hi = 1;
function Ui(e, t = !1) {
	Hi += e, e < 0 && W && t && (W.hasOnce = !0);
}
function Wi(e) {
	return e.dynamicChildren = Hi > 0 ? W || n : null, Vi(), Hi > 0 && W && W.push(e), e;
}
function K(e, t, n, r, i, a) {
	return Wi(q(e, t, n, r, i, a, !0));
}
function Gi(e, t, n, r, i) {
	return Wi(J(e, t, n, r, i, !0));
}
function Ki(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function qi(e, t) {
	return e.type === t.type && e.key === t.key;
}
var Ji = ({ key: e }) => e ?? null, Yi = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : g(e) || /* @__PURE__ */ F(e) || h(e) ? {
	i: L,
	r: e,
	k: t,
	f: !!n
} : e);
function q(e, t = null, n = null, r = 0, i = null, a = e === U ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && Ji(t),
		ref: t && Yi(t),
		scopeId: Mn,
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
		ctx: L
	};
	return s ? (na(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= g(n) ? 8 : 16), Hi > 0 && !o && W && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && W.push(c), c;
}
var J = Xi;
function Xi(e, t = null, n = null, r = 0, i = null, a = !1) {
	if (e && e !== br || (e = Ri), Ki(e)) {
		let r = Qi(e, t, !0);
		return n && na(r, n), Hi > 0 && !a && W && (r.shapeFlag & 6 ? W[W.indexOf(e)] = r : W.push(r)), r.patchFlag = -2, r;
	}
	if (Ta(e) && (e = e.__vccOpts), t) {
		t = Zi(t);
		let { class: e, style: n } = t;
		e && !g(e) && (t.class = O(e)), v(n) && (/* @__PURE__ */ Gt(n) && !d(n) && (n = s({}, n)), t.style = D(n));
	}
	let o = g(e) ? 1 : Pi(e) ? 128 : Gn(e) ? 64 : v(e) ? 4 : h(e) ? 2 : 0;
	return q(e, t, n, r, i, o, a, !0);
}
function Zi(e) {
	return e ? /* @__PURE__ */ Gt(e) ? s({}, e) : ci(e) ? s({}, e[ba] || e) : e : null;
}
function Qi(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? ra(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && Ji(l),
		ref: t && t.ref ? n && a ? d(a) ? a.concat(Yi(t)) : [a, Yi(t)] : Yi(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== U ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && Qi(e.ssContent),
		ssFallback: e.ssFallback && Qi(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce,
		cacheIndex: e.cacheIndex
	};
	return c && r && Yn(u, c.clone(u)), u;
}
function Y(e = " ", t = 0) {
	return J(Li, null, e, t);
}
function $i(e, t) {
	let n = J(zi, null, e);
	return n.staticCount = t, n;
}
function X(e = "", t = !1) {
	return t ? (G(), Gi(Ri, null, e)) : J(Ri, null, e);
}
function ea(e) {
	return e == null || typeof e == "boolean" ? J(Ri) : d(e) ? J(U, null, e.slice()) : Ki(e) ? ta(e) : J(Li, null, String(e));
}
function ta(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : Qi(e);
}
function na(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (d(t)) n = 16;
	else if (typeof t == "object") {
		if (r & 65) {
			let n = t.default;
			n && (n._c && (n._d = !1), na(e, n()), n._c && (n._d = !0));
			return;
		}
		{
			n = 32;
			let r = t._;
			!r && !ci(t) ? t._ctx = L : r === 3 && L && (L.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
		}
	} else if (h(t)) {
		if (r & 65) {
			na(e, { default: t });
			return;
		}
		t = {
			default: t,
			_ctx: L
		}, n = 32;
	} else t = String(t), r & 64 ? (n = 16, t = [Y(t)]) : n = 8;
	e.children = t, e.shapeFlag |= n;
}
function ra(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = O([t.class, r.class]));
		else if (e === "style") t.style = D([t.style, r.style]);
		else if (a(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(d(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !o(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function ia(e, t, n, r = null) {
	fn(e, t, 7, [n, r]);
}
var aa = /* @__PURE__ */ Ur(), oa = 0;
function sa() {
	return oa;
}
function ca(e, n, r) {
	let i = e.type, a = (n ? n.appContext : e.appContext) || aa, o = {
		uid: oa++,
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
		scope: new Oe(!0),
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
		propsOptions: mi(i, a),
		emitsOptions: Xr(i, a),
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
	return o.ctx = { _: o }, o.root = n ? n.root : o, o.emit = Jr.bind(null, o), e.ce && e.ce(o), o;
}
var Z = null, la = () => Z || L, ua, da;
{
	let e = de(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	ua = t("__VUE_INSTANCE_SETTERS__", (e) => Z = e), da = t("__VUE_SSR_SETTERS__", (e) => ha = e);
}
var fa = (e) => {
	let t = Z;
	return ua(e), e.scope.on(), () => {
		e.scope.off(), ua(t);
	};
}, pa = () => {
	Z && Z.scope.off(), ua(null);
};
function ma(e) {
	return e.vnode.shapeFlag & 4;
}
var ha = !1;
function ga(e, t = !1, n = !1) {
	t && da(t);
	let { props: r, children: i } = e.vnode, a = ma(e);
	li(e, r, a, t), Si(e, i, n || t);
	let o = a ? _a(e, t) : void 0;
	return t && da(!1), o;
}
function _a(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Dr);
	let { setup: r } = n;
	if (r) {
		qe();
		let n = e.setupContext = r.length > 1 ? Sa(e) : null, i = fa(e), a = dn(r, e, 0, [e.props, n]), o = y(a);
		if (Je(), i(), (o || e.sp) && !nr(e) && Zn(e), o) {
			if (a.then(pa, pa), t) return a.then((n) => {
				da(!0);
				try {
					va(e, n, t);
				} finally {
					da(!1);
				}
			}).catch((t) => {
				pn(t, e, 0, void 0, !0), e.ssrRender = (e, t) => t("<!---->");
			});
			e.asyncDep = a;
		} else va(e, a, t);
	} else ya(e, t);
}
function va(e, t, n) {
	h(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : v(t) && (e.setupState = tn(t)), ya(e, n);
}
function ya(e, t, n) {
	let i = e.type;
	e.render ||= i.render || r;
	{
		let t = fa(e);
		qe();
		try {
			Ar(e);
		} finally {
			Je(), t();
		}
	}
}
var ba = /* @__PURE__ */ Symbol(), xa = { get(e, t) {
	return M(e, "get", ""), t === ba ? e : e[t];
} };
function Sa(e) {
	return {
		attrs: new Proxy(e.attrs, xa),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function Ca(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(tn(Kt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Tr) return Tr[n](e);
		},
		has(e, t) {
			return t in e || t in Tr;
		}
	}) : e.proxy;
}
function wa(e, t = !0) {
	return h(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ta(e) {
	return h(e) && "__vccOpts" in e;
}
var Q = (e, t) => /* @__PURE__ */ rn(e, t, ha), Ea = "3.5.45", Da = void 0, Oa = typeof window < "u" && window.trustedTypes;
if (Oa) try {
	Da = /* @__PURE__ */ Oa.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var ka = Da ? (e) => Da.createHTML(e) : (e) => e, Aa = "http://www.w3.org/2000/svg", ja = "http://www.w3.org/1998/Math/MathML", Ma = typeof document < "u" ? document : null, Na = Ma && /* @__PURE__ */ Ma.createElement("template"), Pa = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? Ma.createElementNS(Aa, e) : t === "mathml" ? Ma.createElementNS(ja, e) : n ? Ma.createElement(e, { is: n }) : Ma.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => Ma.createTextNode(e),
	createComment: (e) => Ma.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => Ma.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), i !== a && (i = i.nextSibling););
		else {
			Na.innerHTML = ka(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = Na.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, Fa = /* @__PURE__ */ Symbol("_vtc");
function Ia(e, t, n) {
	let r = e[Fa];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var La = /* @__PURE__ */ Symbol("_vod"), Ra = /* @__PURE__ */ Symbol("_vsh"), za = {
	name: "show",
	beforeMount(e, { value: t }, { transition: n }) {
		e[La] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ba(e, t);
	},
	mounted(e, { value: t }, { transition: n }) {
		n && t && n.enter(e);
	},
	updated(e, { value: t, oldValue: n }, { transition: r }) {
		!t != !n && (r ? t ? (r.beforeEnter(e), Ba(e, !0), r.enter(e)) : r.leave(e, () => {
			Ba(e, !1);
		}) : Ba(e, t));
	},
	beforeUnmount(e, { value: t }) {
		Ba(e, t);
	}
};
function Ba(e, t) {
	e.style.display = t ? e[La] : "none", e[Ra] = !t;
}
var Va = /* @__PURE__ */ Symbol(""), Ha = /(?:^|;)\s*display\s*:/;
function Ua(e, t, n) {
	let r = e.style, i = g(n), a = !1;
	if (n && !i) {
		if (t) {
			if (g(t)) for (let e of t.split(";")) {
				let t = e.slice(0, e.indexOf(":")).trim();
				n[t] ?? Ga(r, t, "");
			}
			else for (let e in t) n[e] ?? Ga(r, e, "");
		}
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? Ga(r, i, "") : Ya(e, i, !g(t) && t ? t[i] : void 0, o) || Ga(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[Va];
			e && (n += ";" + e), r.cssText = n, a = Ha.test(n);
		}
	} else t && e.removeAttribute("style");
	La in e && (i && t === n || (e[La] = a ? r.display : ""), e[Ra] && (r.display = "none"));
}
var Wa = /\s*!important$/;
function Ga(e, t, n) {
	if (d(n)) n.forEach((n) => Ga(e, t, n));
	else if (n ??= "", t.startsWith("--")) Wa.test(n) ? e.setProperty(t, n.replace(Wa, ""), "important") : e.setProperty(t, n);
	else {
		let r = Ja(e, t);
		Wa.test(n) ? e.setProperty(w(r), n.replace(Wa, ""), "important") : e[r] = n;
	}
}
var Ka = [
	"Webkit",
	"Moz",
	"ms"
], qa = {};
function Ja(e, t) {
	let n = qa[t];
	if (n) return n;
	let r = C(t);
	if (r !== "filter" && r in e) return qa[t] = r;
	r = oe(r);
	for (let n = 0; n < Ka.length; n++) {
		let i = Ka[n] + r;
		if (i in e) return qa[t] = i;
	}
	return t;
}
function Ya(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && g(r) && n === r;
}
var Xa = "http://www.w3.org/1999/xlink";
function Za(e, t, n, r, i, a = _e(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Xa, t.slice(6, t.length)) : e.setAttributeNS(Xa, t, n) : n == null || a && !ve(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : _(n) ? String(n) : n);
}
function Qa(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? ka(n) : n);
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
		r === "boolean" ? n = ve(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function $a(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function eo(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var to = /* @__PURE__ */ Symbol("_vei");
function no(e, t, n, r, i = null) {
	let a = e[to] || (e[to] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = ao(t);
		r ? $a(e, n, a[t] = lo(r, i), s) : o && (eo(e, n, o, s), a[t] = void 0);
	}
}
var ro = /(Once|Passive|Capture)$/, io = /^on:?(?:Once|Passive|Capture)$/;
function ao(e) {
	let t, n;
	for (; (n = e.match(ro)) && !io.test(e);) t ||= {}, e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
	return [e[2] === ":" ? e.slice(3) : w(e.slice(2)), t];
}
var oo = 0, so = /* @__PURE__ */ Promise.resolve(), co = () => oo ||= (so.then(() => oo = 0), Date.now());
function lo(e, t) {
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
				e && fn(e, t, 5, a);
			}
		} else fn(r, t, 5, [e]);
	};
	return n.value = e, n.attached = co(), n;
}
var uo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, fo = (e, t, n, r, i, s) => {
	let c = i === "svg";
	t === "class" ? Ia(e, r, c) : t === "style" ? Ua(e, n, r) : a(t) ? o(t) || no(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), 1) : t[0] === "^" ? (t = t.slice(1), 0) : po(e, t, r, c)) ? (Qa(e, t, r), e.tagName.includes("-") || t !== "value" && t !== "checked" && t !== "selected" || Za(e, t, r, c, s, t !== "value")) : e._isVueCE && (mo(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !g(r))) ? Qa(e, C(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Za(e, t, r, c));
};
function po(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && uo(t) && h(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return uo(t) && g(n) ? !1 : t in e;
}
function mo(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = C(t);
	return Array.isArray(n) ? n.some((e) => C(e) === r) : Object.keys(n).some((e) => C(e) === r);
}
var ho = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return d(t) ? (e) => ce(t, e) : t;
};
function go(e) {
	e.target.composing = !0;
}
function _o(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var vo = /* @__PURE__ */ Symbol("_assign"), yo = /* @__PURE__ */ Symbol("_initialValue");
function bo(e, t, n) {
	return t && (e = e.trim()), n && (e = le(e)), e;
}
var xo = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e.parentNode && (e.type === "text" ? e[yo] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[yo] = e.defaultValue.replace(/\r\n?/g, "\n"))), e[vo] = ho(i);
		let a = r || i.props && i.props.type === "number";
		$a(e, t ? "change" : "input", (t) => {
			t.target.composing || e[vo](bo(e.value, n, a));
		}), (n || a) && $a(e, "change", () => {
			e.value = bo(e.value, n, a);
		}), t || ($a(e, "compositionstart", go), $a(e, "compositionend", _o), $a(e, "change", _o));
	},
	mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
		let i = t ?? "", a = e[yo];
		delete e[yo], a !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== a ? e[vo](bo(e.value, n, r)) : e.value = i;
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[vo] = ho(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? le(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, So = {
	deep: !0,
	created(e, t, n) {
		e[vo] = ho(n), $a(e, "change", () => {
			let t = e._modelValue, n = Do(e), r = e.checked, i = e[vo];
			if (d(t)) {
				let e = we(t, n), a = e !== -1;
				if (r && !a) i(t.concat(n));
				else if (!r && a) {
					let n = [...t];
					n.splice(e, 1), i(n);
				}
			} else if (p(t)) {
				let e = new Set(t);
				r ? e.add(n) : e.delete(n), i(e);
			} else i(Oo(e, r));
		});
	},
	mounted: Co,
	beforeUpdate(e, t, n) {
		e[vo] = ho(n), Co(e, t, n);
	}
};
function Co(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (d(t)) i = we(t, r.props.value) > -1;
	else if (p(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = Ce(t, Oo(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var wo = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		e._modelValue = t, $a(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? le(Do(e)) : Do(e)), r = e.multiple, i = r ? p(e._modelValue) ? new Set(t) : t : t[0], a = e._pendingValue = [r, r ? d(i) ? t.slice() : t : i];
			try {
				e[vo](i);
			} finally {
				xn(() => {
					e._pendingValue === a && (e._pendingValue = void 0);
				});
			}
		}), e[vo] = ho(r);
	},
	mounted(e, { value: t, modifiers: { number: n } }) {
		Eo(e, t, n);
	},
	beforeUpdate(e, { value: t }, n) {
		e._modelValue = t, e[vo] = ho(n);
	},
	updated(e, { value: t, modifiers: { number: n } }) {
		let r = e._pendingValue;
		e._pendingValue = void 0, r && r[0] === e.multiple && To(t, r[1], r[0]) || Eo(e, t, n);
	}
};
function To(e, t, n) {
	if (!n || d(e)) return Ce(e, t);
	if (p(e)) {
		if (e.size !== t.length) return !1;
		for (let n of t) if (!e.has(n)) return !1;
		return !0;
	}
	return !1;
}
function Eo(e, t, n = !1) {
	let r = e.multiple, i = d(t);
	if (!r || i || p(t)) {
		for (let a = 0, o = e.options.length; a < o; a++) {
			let o = e.options[a], s = Do(o);
			if (r) {
				if (i) {
					let e = typeof s;
					o.selected = e === "string" || e === "number" ? t.some((e) => String(e) === String(s)) : we(t, s) > -1;
				} else o.selected = t.has(s) || n && typeof s == "string" && t.has(le(s));
			} else if (Ce(Do(o), t)) {
				e.selectedIndex !== a && (e.selectedIndex = a);
				return;
			}
		}
		!r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function Do(e) {
	return "_value" in e ? e._value : e.value;
}
function Oo(e, t) {
	let n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t;
}
var ko = /* @__PURE__ */ s({ patchProp: fo }, Pa), Ao;
function jo() {
	return Ao ||= wi(ko);
}
var Mo = ((...e) => {
	let t = jo().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = Po(e);
		if (!r) return;
		let i = t._component;
		h(i) || i.render || i.template || (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, No(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function No(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function Po(e) {
	return g(e) ? document.querySelector(e) : e;
}
// src/vue/poetry/IdeaCollections.vue
var Fo = { class: "section-title" }, Io = {
	key: 0,
	class: "btn ghost small",
	"data-action": "nav",
	"data-nav": "ideas"
}, Lo = ["data-idea-collection"], Ro = { class: "idea-badge" }, zo = {
	key: 0,
	class: "generator-story"
}, Bo = {
	key: 1,
	class: "song-has-lyrics"
}, Vo = { key: 0 }, Ho = {
	key: 3,
	class: "generator-detail"
}, Uo = { class: "actions" }, Wo = [
	"data-action",
	"data-id",
	"data-i",
	"aria-label"
], Go = ["innerHTML"], Ko = {
	key: 1,
	class: "empty"
}, qo = ["innerHTML"], Jo = {
	__name: "IdeaCollections",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (G(!0), K(U, null, B(e.model.groups, (t) => (G(), K(U, { key: t.kind }, [q("div", Fo, [q("h2", null, k(t.title) + " (" + k(t.items.length) + ")", 1), t.kind === "generated" ? (G(), K("button", Io, "Создать идеи →")) : X("", !0)]), t.items.length ? (G(), K("div", {
			key: 0,
			class: "idea-grid",
			"data-idea-collection": t.kind
		}, [(G(!0), K(U, null, B(t.items, (n) => (G(), Gi(xr(t.kind === "academy" ? "div" : "article"), {
			key: n.key,
			class: O(["idea", { "generated-card": t.kind === "generated" }])
		}, {
			default: Pn(() => [
				q("div", Ro, k(n.badge), 1),
				q("h3", null, k(n.title), 1),
				q("p", null, k(n.pitch), 1),
				t.kind === "generated" ? (G(), K("p", zo, k(n.storyLine), 1)) : X("", !0),
				t.kind === "manual" && n.lyrics ? (G(), K("p", Bo, "🎼 Текст песни сохранён · " + k(n.sunoLyrics ? "теги для Suno готовы" : "без разметки"), 1)) : X("", !0),
				n.hook || t.kind === "generated" ? (G(), Gi(xr(t.kind === "generated" ? "div" : "p"), {
					key: 2,
					class: "generator-hook"
				}, {
					default: Pn(() => [t.kind === "generated" ? (G(), K("span", Vo, "ХУК ПРИПЕВА")) : X("", !0), q("strong", null, k(n.hook), 1)]),
					_: 2
				}, 1024)) : X("", !0),
				t.kind === "generated" && n.detail ? (G(), K("p", Ho, "Твоя деталь: " + k(n.detail), 1)) : X("", !0),
				q("div", Uo, [(G(!0), K(U, null, B(n.actions, (t) => (G(), K("button", {
					key: t.name,
					type: "button",
					class: O(t.className),
					"data-action": t.name,
					"data-id": n.id,
					"data-i": n.index,
					"aria-label": t.label || void 0
				}, [t.icon ? (G(), K("span", {
					key: 0,
					"aria-hidden": "true",
					innerHTML: e.model.icons[t.icon]
				}, null, 8, Go)) : X("", !0), Y(k(t.text), 1)], 10, Wo))), 128))])
			]),
			_: 2
		}, 1032, ["class"]))), 128))], 8, Lo)) : (G(), K("div", Ko, [
			q("span", {
				"aria-hidden": "true",
				innerHTML: e.model.icons.music
			}, null, 8, qo),
			q("strong", null, k(t.emptyTitle), 1),
			Y(k(t.emptyText), 1)
		]))], 64))), 128));
	}
};
// src/vue/poetry/legacyIdeaCollectionsBridge.js
function Yo({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_IDEA_COLLECTIONS, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-idea-collections");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, Jo, { model: o });
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
// src/vue/account/PromptCollection.vue
var Xo = { class: "section-title" }, Zo = {
	key: 0,
	class: "saved-list"
}, Qo = { class: "row" }, $o = { class: "actions" }, es = ["data-id"], ts = ["innerHTML"], ns = ["data-id"], rs = ["data-id", "aria-label"], is = ["innerHTML"], as = { class: "sub" }, os = {
	key: 1,
	class: "empty"
}, ss = ["innerHTML"], cs = {
	__name: "PromptCollection",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (G(), K(U, null, [q("div", Xo, [q("h2", null, "Сохранённые промпты (" + k(e.model.items.length) + ")", 1)]), e.model.items.length ? (G(), K("div", Zo, [(G(!0), K(U, null, B(e.model.items, (t) => (G(), K("article", {
			key: t.id,
			class: "saved-item"
		}, [
			q("div", Qo, [q("h3", null, k(t.title), 1), q("div", $o, [
				q("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "copy-saved",
					"data-id": t.id
				}, [q("span", {
					"aria-hidden": "true",
					innerHTML: e.model.icons.copy
				}, null, 8, ts), n[0] ||= Y(" Копировать", -1)], 8, es),
				q("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "edit-manual-prompt",
					"data-id": t.id
				}, "Изменить", 8, ns),
				q("button", {
					type: "button",
					class: "btn danger small",
					"data-action": "delete-saved",
					"data-id": t.id,
					"aria-label": "Удалить промпт «" + t.title + "»"
				}, [q("span", {
					"aria-hidden": "true",
					innerHTML: e.model.icons.trash
				}, null, 8, is)], 8, rs)
			])]),
			q("p", null, k(t.text), 1),
			q("span", as, k(t.genre) + " · " + k(t.date), 1)
		]))), 128))])) : (G(), K("div", os, [
			q("span", {
				"aria-hidden": "true",
				innerHTML: e.model.icons.music
			}, null, 8, ss),
			n[1] ||= q("strong", null, "Промптов пока нет", -1),
			n[2] ||= Y("Сохрани первый здесь или в Suno Studio.", -1)
		]))], 64));
	}
};
// src/vue/account/legacyPromptCollectionBridge.js
function ls({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PROMPT_LIST, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-prompts-list");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, cs, { model: o });
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
var us = { class: "field" }, ds = { class: "field" }, fs = ["value"], ps = { class: "field" }, ms = { class: "field" }, hs = {
	__name: "IdeaFields",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = /* @__PURE__ */ zt({ ...e.initial.values });
		return (n, r) => (G(), K(U, null, [
			q("div", us, [r[4] ||= q("label", { for: "custom-idea-title" }, "Название песни", -1), R(q("input", {
				id: "custom-idea-title",
				"onUpdate:modelValue": r[0] ||= (e) => t.title = e,
				maxlength: "100",
				placeholder: "Например, Город на ладони"
			}, null, 512), [[xo, t.title]])]),
			q("div", ds, [r[5] ||= q("label", { for: "custom-idea-genre" }, "Музыкальный жанр", -1), R(q("select", {
				id: "custom-idea-genre",
				"onUpdate:modelValue": r[1] ||= (e) => t.genre = e
			}, [(G(!0), K(U, null, B(e.initial.genres, (e) => (G(), K("option", {
				key: e.id,
				value: e.id
			}, k(e.name), 9, fs))), 128))], 512), [[wo, t.genre]])]),
			q("div", ps, [r[6] ||= q("label", { for: "custom-idea-text" }, "Сюжет и основная идея", -1), R(q("textarea", {
				id: "custom-idea-text",
				"onUpdate:modelValue": r[2] ||= (e) => t.text = e,
				rows: "5",
				maxlength: "3000",
				placeholder: "О чём песня и что происходит с героем?"
			}, null, 512), [[xo, t.text]])]),
			q("div", ms, [r[7] ||= q("label", { for: "custom-idea-hook" }, "Фраза для припева (необязательно)", -1), R(q("input", {
				id: "custom-idea-hook",
				"onUpdate:modelValue": r[3] ||= (e) => t.hook = e,
				maxlength: "240",
				placeholder: "Запоминающаяся строчка"
			}, null, 512), [[xo, t.hook]])])
		], 64));
	}
}, gs = ["value"], _s = {
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
		let t = e, n = /* @__PURE__ */ Yt(null);
		return z(() => {
			t.initial.highlighted && t.api.enableHighlight(n.value);
		}), (t, r) => (G(), K(U, null, [r[0] ||= q("label", { for: "custom-idea-lyrics" }, "Оригинальный текст (необязательно)", -1), q("textarea", {
			id: "custom-idea-lyrics",
			ref_key: "area",
			ref: n,
			value: e.initial.values.lyrics,
			rows: "12",
			maxlength: "20000",
			placeholder: "Куплет 1:\nТекст первого куплета...\n\nПрипев:\nТекст припева..."
		}, null, 8, gs)], 64));
	}
}, vs = { class: "field" }, ys = ["value"], bs = { class: "workbench-switches" }, xs = ["id", "onUpdate:modelValue"], Ss = { class: "field" }, Cs = { class: "detail-actions" }, ws = {
	type: "button",
	class: "btn ghost",
	"data-action": "copy-current-lyrics"
}, Ts = ["innerHTML"], Es = { class: "field" }, Ds = { class: "detail-actions" }, Os = {
	type: "button",
	class: "btn ghost",
	"data-action": "copy-current-style"
}, ks = ["innerHTML"], As = {
	__name: "LyricsTools",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ zt({ ...t.initial.values }), r = /* @__PURE__ */ zt({ ...t.initial.switches }), i = [
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
		return (t, o) => (G(), K(U, null, [
			q("div", vs, [o[3] ||= q("label", { for: "lyrics-tag-preset" }, "Характер аранжировки", -1), R(q("select", {
				id: "lyrics-tag-preset",
				"onUpdate:modelValue": o[0] ||= (e) => n.preset = e
			}, [(G(), K(U, null, B(i, ([e, t]) => q("option", {
				key: e,
				value: e
			}, k(t), 9, ys)), 64))], 512), [[wo, n.preset]])]),
			q("div", bs, [(G(), K(U, null, B(a, ([e, t]) => q("label", { key: e }, [R(q("input", {
				id: "lyrics-" + e,
				"onUpdate:modelValue": (t) => r[e] = t,
				type: "checkbox"
			}, null, 8, xs), [[So, r[e]]]), Y(" " + k(t), 1)])), 64))]),
			o[8] ||= q("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "format-idea-lyrics"
			}, "✨ Создать теги и усилители", -1),
			o[9] ||= q("p", { class: "workbench-note" }, "Разметка примерная: если в тексте нет названий секций, куплеты и припевы определяются по абзацам. Проверь расположение тегов перед копированием.", -1),
			q("div", Ss, [o[4] ||= q("label", { for: "custom-idea-tagged" }, "Готовая версия для поля Lyrics в Suno (можно исправить вручную)", -1), R(q("textarea", {
				id: "custom-idea-tagged",
				"onUpdate:modelValue": o[1] ||= (e) => n.tagged = e,
				rows: "13",
				maxlength: "25000",
				placeholder: "[Verse 1]\n...\n\n[Chorus - powerful melodic hook]\n..."
			}, null, 512), [[xo, n.tagged]])]),
			q("div", Cs, [q("button", ws, [q("span", { innerHTML: e.initial.copyIcon }, null, 8, Ts), o[5] ||= Y(" Копировать Lyrics", -1)])]),
			q("div", Es, [o[6] ||= q("label", { for: "custom-idea-style" }, "Дополнительное описание для поля Style (до 1000 символов)", -1), R(q("textarea", {
				id: "custom-idea-style",
				"onUpdate:modelValue": o[2] ||= (e) => n.style = e,
				rows: "4",
				maxlength: "1000",
				placeholder: "Описание жанра, вокала и динамики для Suno"
			}, null, 512), [[xo, n.style]])]),
			q("div", Ds, [q("button", Os, [q("span", { innerHTML: e.initial.copyIcon }, null, 8, ks), o[7] ||= Y(" Копировать Style", -1)])])
		], 64));
	}
};
// src/vue/poetry/legacyIdeaEditorBridge.js
function js({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_IDEA_EDITOR, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = /* @__PURE__ */ new Map(), i = !1;
	function a() {
		if (!i) for (let [i, a] of [
			["sb-vue-idea-fields", hs],
			["sb-vue-lyrics-source", _s],
			["sb-vue-lyrics-tools", As]
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
var Ms = typeof window < "u", Ns = Symbol(), Ps;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Ps ||= {});
var Fs = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function Is(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function Ls(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		Hs(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function Rs(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function zs(e) {
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
var Bs = typeof navigator == "object" ? navigator : { userAgent: "" }, Vs = /Macintosh/.test(Bs.userAgent) && /AppleWebKit/.test(Bs.userAgent) && !/Safari/.test(Bs.userAgent), Hs = Ms ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Vs ? Us : "msSaveOrOpenBlob" in Bs ? Ws : Gs : () => {};
function Us(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? zs(r) : Rs(r.href) ? Ls(e, t, n) : (r.target = "_blank", zs(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		zs(r);
	}, 0));
}
function Ws(e, t = "download", n) {
	if (typeof e == "string") {
		if (Rs(e)) Ls(e, t, n);
		else {
			let t = document.createElement("a");
			t.href = e, t.target = "_blank", setTimeout(function() {
				zs(t);
			});
		}
	} else navigator.msSaveOrOpenBlob(Is(e, n), t);
}
function Gs(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return Ls(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(Fs.HTMLElement)) || "safari" in Fs, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || Vs) && typeof FileReader < "u") {
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
var { assign: Ks } = Object;
function qs() {
	let e = ke(!0), t = e.run(() => /* @__PURE__ */ Yt({})), n = [], r = [], i = Kt({
		install(e) {
			i._a = e, e.provide(Ns, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
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
var { assign: Js } = Object, Ys = {
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
		return (t, n) => (G(), Gi(xr(e.component), ge(Zi(e.componentProps)), null, 16));
	}
}, Xs = [
	"data-nav",
	"aria-current",
	"aria-label",
	"title",
	"onClick"
], Zs = ["innerHTML"], Qs = { key: 0 }, $s = {
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
		return (t, n) => (G(!0), K(U, null, B(e.items, (t) => (G(), K("button", {
			key: t.id,
			type: "button",
			class: O(e.mobile ? t.active ? "active" : "" : ["nav-button", { active: t.active }]),
			"data-nav": t.id,
			"aria-current": t.active ? "page" : void 0,
			"aria-label": e.mobile ? t.label : void 0,
			title: e.mobile ? t.label : void 0,
			onClick: (n) => e.onNavigate(t.id)
		}, [q("span", {
			class: "sb-vue-nav-icon",
			"aria-hidden": "true",
			innerHTML: t.iconHtml
		}, null, 8, Zs), e.mobile ? (G(), K("span", Qs, k(t.shortLabel), 1)) : (G(), K(U, { key: 1 }, [Y(k(t.label), 1)], 64))], 10, Xs))), 128));
	}
}, ec = /* @__PURE__ */ new Set([
	"projects",
	"saved",
	"myideas",
	"myprompts",
	"events",
	"tracks",
	"artists"
]);
function tc(e) {
	return e === "detail" ? "catalog" : ec.has(e) ? "account" : e;
}
function nc(e) {
	let t = tc(e?.active), n = /* @__PURE__ */ new Set(), r = [];
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
var rc = [{
	key: "sidebar",
	selector: "[data-sb-vue-sidebar]",
	mobile: !1
}, {
	key: "mobile",
	selector: "[data-sb-vue-mobile]",
	mobile: !0
}];
function ic({ mountVueFeature: e, unmountVueFeature: t }) {
	let n = window.SUNOBOOM_LEGACY_NAV, r = document.getElementById("app");
	if (!n || !r || typeof n.snapshot != "function") return () => {};
	let i = /* @__PURE__ */ new Map(), a = !1;
	function o() {
		if (a) return;
		let t = nc(n.snapshot()), o = JSON.stringify(t);
		for (let { key: a, selector: s, mobile: c } of rc) {
			let l = r.querySelector(s), u = i.get(a);
			if (!l) {
				u?.unmount(), i.delete(a);
				continue;
			}
			if (u?.target === l && u.signature === o) continue;
			u?.unmount();
			let d = e(l, $s, {
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
var ac = ["data-id"], oc = { class: "genre-content" }, sc = { class: "kicker" }, cc = { class: "foot" }, lc = {
	__name: "GenreCards",
	props: { genres: {
		type: Array,
		required: !0
	} },
	setup(e) {
		return (t, n) => (G(!0), K(U, null, B(e.genres, (e) => (G(), K("button", {
			key: e.id,
			type: "button",
			class: "genre-card",
			style: D({ "--accent": e.color }),
			"data-action": "genre",
			"data-id": e.id
		}, [n[1] ||= q("div", {
			class: "art",
			"aria-hidden": "true"
		}, null, -1), q("div", oc, [q("div", null, [
			q("div", sc, k(e.family) + " · " + k(e.bpm[0]) + "–" + k(e.bpm[1]) + " BPM", 1),
			q("h3", null, k(e.name), 1),
			q("p", null, k(e.tagline), 1)
		]), q("div", cc, [q("span", null, k(e.era), 1), n[0] ||= q("span", { style: { color: "#ffacd9" } }, "Открыть →", -1)])])], 12, ac))), 128));
	}
}, uc = { class: "genre-family-toolbar" }, dc = { class: "search-box" }, fc = ["innerHTML"], pc = { class: "hint" }, mc = { class: "genre-family-summary" }, hc = { id: "catalog-count" }, gc = {
	class: "hint",
	id: "sb-academy-search-hint"
}, _c = {
	id: "catalog-cards",
	class: "genre-families"
}, vc = [
	"data-family",
	"open",
	"onToggle"
], yc = {
	class: "genre-family-icon",
	"aria-hidden": "true"
}, bc = { class: "genre-family-heading" }, xc = { class: "genre-family-right" }, Sc = { class: "genre-family-count" }, Cc = { class: "genre-family-body" }, wc = {
	key: 0,
	class: "sb-sacred-index"
}, Tc = {
	key: 0,
	class: "sb-sacred-overview"
}, Ec = { class: "genre-grid" }, Dc = { class: "sb-sacred-religions" }, Oc = [
	"data-sb-religion",
	"open",
	"onToggle"
], kc = { class: "sb-sacred-religion-header" }, Ac = {
	class: "sb-sacred-religion-icon",
	"aria-hidden": "true"
}, jc = { class: "sb-sacred-religion-label" }, Mc = { class: "sb-sacred-count" }, Nc = { class: "sb-sacred-religion-content" }, Pc = [
	"data-sb-branch",
	"open",
	"onToggle"
], Fc = { class: "sb-sacred-branch-header" }, Ic = { class: "sb-sacred-branch-label" }, Lc = { class: "sb-sacred-count" }, Rc = { class: "sb-sacred-branch-content" }, zc = { class: "genre-grid" }, Bc = {
	key: 1,
	class: "genre-grid"
}, Vc = {
	key: 1,
	class: "genre-family-empty"
}, Hc = {
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
		let t = e, n = /* @__PURE__ */ Yt(t.snapshot.query || ""), r = /* @__PURE__ */ zt({
			family: { ...t.snapshot.expanded?.family || {} },
			religion: { ...t.snapshot.expanded?.religion || {} },
			branch: { ...t.snapshot.expanded?.branch || {} }
		}), i = Q(() => t.search(n.value)), a = Q(() => !!n.value.trim()), o = Q(() => {
			let e = i.value.ids == null ? null : new Set(i.value.ids);
			return (t.snapshot.families || []).map((t) => ({
				...t,
				genres: t.genres.filter((t) => !e || e.has(t.id))
			})).filter((e) => e.genres.length);
		}), s = Q(() => o.value.reduce((e, t) => e + t.genres.length, 0)), c = Q(() => a.value ? {
			name: "По названиям жанров",
			family: "По направлениям",
			artist: "По исполнителям",
			description: "По описаниям и звучанию"
		}[i.value.mode] || "" : "Поиск работает при вводе"), l = Q(() => o.value.find((e) => e.name === "Религиозная музыка")), u = Q(() => l.value?.genres.find((e) => e.id === "sacred-music")), d = Q(() => {
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
		return (t, r) => (G(), K(U, null, [
			q("div", uc, [q("label", dc, [q("span", {
				innerHTML: e.searchIcon,
				"aria-hidden": "true"
			}, null, 8, fc), R(q("input", {
				id: "genre-search",
				"onUpdate:modelValue": r[0] ||= (e) => n.value = e,
				type: "search",
				enterkeyhint: "search",
				autocapitalize: "off",
				spellcheck: "false",
				"aria-label": "Поиск жанров",
				placeholder: "Поиск жанра, поджанра или исполнителя…",
				autocomplete: "off"
			}, null, 512), [[xo, n.value]])]), q("span", pc, k(e.snapshot.families.length) + " разделов · " + k(e.snapshot.families.reduce((e, t) => e + t.genres.length, 0)) + " жанров", 1)]),
			q("div", mc, [q("h2", hc, k(a.value ? "Найдено жанров" : "Музыкальные жанры") + " · " + k(s.value), 1), q("span", gc, k(c.value), 1)]),
			q("div", _c, [o.value.length ? (G(!0), K(U, { key: 0 }, B(o.value, (e) => (G(), K("details", {
				key: e.name,
				class: "genre-family",
				"data-family": e.name,
				style: D({ "--family-accent": e.meta.accent }),
				open: f("family", e.name),
				onToggle: (t) => p("family", e.name, t)
			}, [q("summary", null, [
				q("span", yc, k(e.meta.icon), 1),
				q("span", bc, [q("strong", null, k(e.name), 1), q("small", null, k(e.meta.desc), 1)]),
				q("span", xc, [q("span", Sc, k(e.genres.length) + " " + k(m(e.genres.length)), 1), r[1] ||= q("svg", {
					class: "genre-family-chevron",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2",
					"aria-hidden": "true"
				}, [q("path", { d: "m5 9 7 7 7-7" })], -1)])
			]), q("div", Cc, [e.name === "Религиозная музыка" ? (G(), K("div", wc, [
				r[5] ||= q("div", { class: "sb-sacred-intro" }, [
					q("span", { class: "sb-sacred-eyebrow" }, "МУЗЫКА МИРОВЫХ РЕЛИГИЙ"),
					q("h3", null, "Религии и музыкальные традиции"),
					q("p", null, "Открой религию, затем её направление или течение. Здесь представлены музыкальные традиции — их границы не всегда совпадают с конфессиональными.")
				], -1),
				u.value ? (G(), K("div", Tc, [r[2] ||= q("div", { class: "sb-sacred-overview-label" }, "📖 Обзор раздела", -1), q("div", Ec, [J(lc, { genres: [u.value] }, null, 8, ["genres"])])])) : X("", !0),
				q("div", Dc, [(G(!0), K(U, null, B(d.value, (e) => (G(), K("details", {
					key: e.id,
					class: "sb-sacred-religion",
					"data-sb-religion": e.id,
					open: f("religion", e.id),
					onToggle: (t) => p("religion", e.id, t)
				}, [q("summary", kc, [
					q("span", Ac, k(e.icon), 1),
					q("span", jc, [q("strong", null, k(e.name), 1), q("small", null, k(e.description), 1)]),
					q("span", Mc, k(e.count), 1),
					r[3] ||= q("span", {
						class: "sb-sacred-chevron",
						"aria-hidden": "true"
					}, "⌄", -1)
				]), q("div", Nc, [(G(!0), K(U, null, B(e.branches, (e) => (G(), K("details", {
					key: e.id,
					class: "sb-sacred-branch",
					"data-sb-branch": e.id,
					open: f("branch", e.id),
					onToggle: (t) => p("branch", e.id, t)
				}, [q("summary", Fc, [
					q("span", Ic, [q("strong", null, k(e.name), 1), q("small", null, k(e.description), 1)]),
					q("span", Lc, k(e.genres.length) + " " + k(h(e.genres.length)), 1),
					r[4] ||= q("span", {
						class: "sb-sacred-chevron",
						"aria-hidden": "true"
					}, "⌄", -1)
				]), q("div", Rc, [q("div", zc, [J(lc, { genres: e.genres }, null, 8, ["genres"])])])], 40, Pc))), 128))])], 40, Oc))), 128))])
			])) : (G(), K("div", Bc, [J(lc, { genres: e.genres }, null, 8, ["genres"])]))])], 44, vc))), 128)) : (G(), K("div", Vc, "Ничего не найдено. Попробуй другой запрос."))])
		], 64));
	}
};
// src/vue/academy/legacyAcademyBridge.js
function Uc({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ACADEMY, n = document.getElementById("app");
	if (!t || !n || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-academy-root");
		if (r?.target === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o?.families?.length) return;
		let s = e(a, Hc, {
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
var Wc = {
	class: "gb-grid",
	"data-sb-vue-overview": ""
}, Gc = { class: "gb-column" }, Kc = { class: "gb-panel pink" }, qc = { class: "gb-unit" }, Jc = { class: "gb-unit" }, Yc = { class: "gb-unit" }, Xc = { class: "gb-panel" }, Zc = ["innerHTML"], Qc = { class: "gb-column" }, $c = { class: "gb-panel blue" }, el = { style: {
	"font-size": "26px",
	"font-weight": "900",
	color: "#ffe2b0"
} }, tl = { class: "gb-artists" }, nl = { class: "gb-panel pink" }, rl = ["data-id"], il = ["innerHTML"], al = {
	__name: "GenreOverview",
	props: { genre: {
		type: Object,
		required: !0
	} },
	emits: ["select-tab"],
	setup(e) {
		return (t, n) => (G(), K("div", Wc, [q("div", Gc, [q("section", Kc, [
			n[7] ||= q("div", { class: "gb-sup" }, "01 / ЗНАКОМСТВО С ЖАНРОМ", -1),
			n[8] ||= q("h2", null, "Характер и звучание", -1),
			q("p", null, [q("strong", null, k(e.genre.tagline), 1)]),
			q("p", null, k(e.genre.description), 1),
			q("div", qc, [n[2] ||= q("b", null, "🎸", -1), q("div", null, [n[1] ||= q("strong", null, "Инструменты", -1), q("span", null, k(e.genre.instruments) + ".", 1)])]),
			q("div", Jc, [n[4] ||= q("b", null, "🎛️", -1), q("div", null, [n[3] ||= q("strong", null, "Саунд", -1), q("span", null, k(e.genre.style) + ".", 1)])]),
			q("div", Yc, [n[6] ||= q("b", null, "✍️", -1), q("div", null, [n[5] ||= q("strong", null, "Тематика песен", -1), q("span", null, k(e.genre.themes) + ".", 1)])])
		]), q("section", Xc, [
			n[10] ||= q("div", { class: "gb-sup" }, "03 / ИДЕИ ДЛЯ СТАРТА", -1),
			n[11] ||= q("h2", null, "Что можно спеть", -1),
			(G(!0), K(U, null, B(e.genre.ideas, (e, t) => (G(), K("div", {
				key: t,
				class: "gb-idea"
			}, [q("strong", null, k(e.title), 1), q("p", null, k(e.pitch), 1)]))), 128)),
			q("button", {
				type: "button",
				class: "btn ghost small",
				onClick: n[0] ||= (e) => t.$emit("select-tab", "ideas")
			}, [n[9] ||= Y(" Все идеи ", -1), q("span", {
				"aria-hidden": "true",
				innerHTML: e.genre.icons.arrow
			}, null, 8, Zc)])
		])]), q("div", Qc, [q("section", $c, [
			n[12] ||= q("div", { class: "gb-sup" }, "02 / ПАСПОРТ НАПРАВЛЕНИЯ", -1),
			n[13] ||= q("h2", null, "История и сцена", -1),
			n[14] ||= q("div", { class: "info-label" }, "Эпоха", -1),
			q("p", null, k(e.genre.era), 1),
			n[15] ||= q("div", { class: "info-label" }, "Диапазон темпа", -1),
			q("p", el, k(e.genre.bpm[0]) + "–" + k(e.genre.bpm[1]) + " BPM", 1),
			n[16] ||= q("div", { class: "info-label" }, "Исполнители для знакомства", -1),
			q("div", tl, [(G(!0), K(U, null, B(e.genre.artists, (e) => (G(), K("span", { key: e }, k(e), 1))), 128))])
		]), q("section", nl, [n[18] ||= $i("<div class=\"gb-sup\">04 / ТВОЯ МУЗЫКА</div><h2>Преврати знания в трек</h2><p>Выбери вокал, настроение и темп, затем создай промпт и структуру песни в Suno Studio.</p><div class=\"gb-unit\"><b>🎤</b><div><strong>Вокал</strong><span>Мужской, женский или дуэт; можно использовать русский язык.</span></div></div><div class=\"gb-unit\"><b>⚡</b><div><strong>Динамика</strong><span>Настрой энергию и характер припева под историю.</span></div></div>", 5), q("button", {
			type: "button",
			class: "btn primary small",
			"data-action": "use-genre",
			"data-id": e.genre.id
		}, [q("span", {
			innerHTML: e.genre.icons.studio,
			"aria-hidden": "true"
		}, null, 8, il), n[17] ||= Y(" Открыть студию ", -1)], 8, rl)])])]));
	}
}, ol = {
	key: 0,
	id: "sb-artist-expanded",
	class: "ahx-wrap",
	"data-sb-vue-artists": ""
}, sl = { class: "ahx-intro" }, cl = { class: "gb-eyebrow" }, ll = {
	class: "ahx-toolbar",
	role: "group",
	"aria-label": "Музыкальные сцены"
}, ul = ["aria-pressed"], dl = ["aria-pressed"], fl = { class: "ahx-filters" }, pl = { class: "ahx-search" }, ml = ["innerHTML"], hl = {
	class: "ahx-filter-buttons",
	role: "group",
	"aria-label": "Фильтр исполнителей"
}, gl = [
	"data-vue-artist-filter",
	"aria-pressed",
	"onClick"
], _l = {
	id: "ahx-count",
	class: "ahx-count",
	"aria-live": "polite"
}, vl = { class: "ahx-section-head" }, yl = { class: "ahx-eyebrow" }, bl = { class: "ahx-num" }, xl = { class: "ahx-grid" }, Sl = ["data-ahx-group"], Cl = { class: "ahx-card-top" }, wl = {
	class: "ahx-avatar",
	"aria-hidden": "true"
}, Tl = { class: "ahx-title" }, El = { class: "ahx-era" }, Dl = {
	key: 0,
	class: "ahx-track"
}, Ol = {
	id: "ahx-no-results",
	class: "ahx-no-results"
}, kl = {
	key: 1,
	class: "ahx-empty"
}, Al = {
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
		let t = e, n = /* @__PURE__ */ Yt(t.catalog.initialScene()), r = /* @__PURE__ */ Yt(""), i = /* @__PURE__ */ Yt("all"), a = Q(() => t.catalog.getScene(t.genre.id, n.value)), o = Q(() => (a.value?.groups || []).map((e) => ({
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
		}))), s = Q(() => o.value.reduce((e, t) => e + t.artists.length, 0)), c = Q(() => (a.value?.groups || []).reduce((e, t) => e + t.artists.length, 0));
		async function l(e) {
			(e === "ru" || e === "world") && (n.value = e, t.catalog.setScene(e), r.value = "", i.value = "all", await xn(), t.enhanceProfiles?.());
		}
		return z(() => t.enhanceProfiles?.()), fr(() => t.enhanceProfiles?.()), (t, u) => a.value ? (G(), K("div", ol, [
			q("div", sl, [
				q("div", cl, "АКАДЕМИЯ SUNOBOOM · " + k(e.genre.name), 1),
				u[4] ||= q("h2", null, "Исполнители и композиторы", -1),
				q("p", null, k(a.value.description), 1)
			]),
			q("div", ll, [q("button", {
				type: "button",
				"data-vue-artist-scene": "world",
				"aria-pressed": n.value === "world",
				class: O({ on: n.value === "world" }),
				onClick: u[0] ||= (e) => l("world")
			}, [u[5] ||= Y(" 🌍 Мировая сцена ", -1), q("span", null, k(a.value.worldCount), 1)], 10, ul), q("button", {
				type: "button",
				"data-vue-artist-scene": "ru",
				"aria-pressed": n.value === "ru",
				class: O({ on: n.value === "ru" }),
				onClick: u[1] ||= (e) => l("ru")
			}, [u[6] ||= Y(" 🎤 Русскоязычные ", -1), q("span", null, k(a.value.ruCount), 1)], 10, dl)]),
			c.value ? (G(), K(U, { key: 0 }, [
				q("div", fl, [q("label", pl, [q("span", {
					"aria-hidden": "true",
					innerHTML: e.genre.icons.overview
				}, null, 8, ml), R(q("input", {
					"onUpdate:modelValue": u[2] ||= (e) => r.value = e,
					type: "search",
					"data-vue-artist-search": "",
					placeholder: "Найти исполнителя или произведение…",
					"aria-label": "Поиск по исполнителям"
				}, null, 512), [[xo, r.value]])]), q("div", hl, [(G(), K(U, null, B([
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
				], (e) => q("button", {
					key: e.id,
					type: "button",
					"data-vue-artist-filter": e.id,
					"aria-pressed": i.value === e.id,
					onClick: (t) => i.value = e.id
				}, k(e.label), 9, gl)), 64))])]),
				q("p", _l, "Показано " + k(s.value) + " из " + k(c.value) + " исполнителей.", 1),
				(G(!0), K(U, null, B(o.value, (e) => R((G(), K("section", {
					key: e.index,
					class: "ahx-section",
					"data-ahx-section": ""
				}, [q("div", vl, [q("div", null, [q("span", yl, "0" + k(e.index + 1) + " / ИСПОЛНИТЕЛИ", 1), q("h3", null, k(e.index ? "Современная сцена и продолжатели" : "Классика и предшественники"), 1)]), q("span", bl, k(e.artists.length), 1)]), q("div", xl, [(G(!0), K(U, null, B(e.artists, (e) => (G(), K("article", {
					key: e.key,
					class: "ahx-card",
					"data-ahx-group": e.group
				}, [
					q("div", Cl, [q("span", wl, k(e.initials), 1), q("div", Tl, [q("h4", null, k(e.name), 1), q("span", El, k(e.period || "Музыкальная сцена"), 1)])]),
					q("span", { class: O(["ahx-role", { "ahx-role-neighbor": e.group === "adjacent" }]) }, k(e.label), 3),
					q("p", null, k(e.bio || "Музыкальное направление и характерный творческий почерк."), 1),
					e.track ? (G(), K("div", Dl, [u[7] ||= q("small", null, "Ориентир для прослушивания", -1), q("strong", null, "♫ " + k(e.track), 1)])) : X("", !0)
				], 8, Sl))), 128))])])), [[za, e.artists.length]])), 128)),
				R(q("div", Ol, " По заданному поиску исполнители не найдены. Попробуй другой запрос или выбери «Все». ", 512), [[za, s.value === 0]])
			], 64)) : (G(), K("div", kl, [
				u[8] ||= q("strong", null, "Русскоязычная подборка ещё уточняется", -1),
				u[9] ||= q("p", null, "Для этого узкого направления пока нет достаточно подтверждённых примеров. Мы не будем подставлять артистов из других жанров без пояснения.", -1),
				q("button", {
					class: "btn ghost",
					type: "button",
					onClick: u[3] ||= (e) => l("world")
				}, "Посмотреть мировую сцену")
			])),
			u[10] ||= q("p", { class: "ahx-footnote" }, "В подборках могут встречаться близкие стили, кино- и игровая музыка, инструментальные коллективы. Их связь с жанром поясняется в карточке. Указанные произведения — ориентиры для знакомства, а не ссылки на конкретные релизы.", -1)
		])) : X("", !0);
	}
}, jl = {
	class: "idea-grid",
	"data-sb-vue-ideas": ""
}, Ml = { class: "idea-badge" }, Nl = { class: "actions" }, Pl = ["data-id", "data-i"], Fl = ["innerHTML"], Il = [
	"data-id",
	"data-i",
	"aria-pressed"
], Ll = ["innerHTML"], Rl = {
	__name: "GenreIdeas",
	props: { genre: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (G(), K("div", jl, [(G(!0), K(U, null, B(e.genre.allIdeas, (t) => (G(), K("div", {
			key: t.index,
			class: "idea"
		}, [
			q("div", Ml, k(e.genre.name) + " · " + k(t.mood), 1),
			q("h3", null, k(t.title), 1),
			q("p", null, k(t.pitch), 1),
			q("div", Nl, [q("button", {
				type: "button",
				class: "btn primary small",
				"data-action": "idea-use",
				"data-id": e.genre.id,
				"data-i": t.index
			}, [q("span", {
				"aria-hidden": "true",
				innerHTML: e.genre.icons.studio
			}, null, 8, Fl), n[0] ||= Y(" В студию ", -1)], 8, Pl), q("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "idea-save",
				"data-id": e.genre.id,
				"data-i": t.index,
				"aria-pressed": t.saved ? "true" : "false"
			}, [q("span", {
				"aria-hidden": "true",
				innerHTML: e.genre.icons.heart
			}, null, 8, Ll), Y(" " + k(t.saved ? "Сохранено" : "Сохранить"), 1)], 8, Il)])
		]))), 128))]));
	}
}, zl = {
	class: "panel",
	"data-sb-vue-prompts": ""
}, Bl = { class: "idea-grid" }, Vl = { class: "idea" }, Hl = ["data-id"], Ul = ["innerHTML"], Wl = { class: "idea" }, Gl = ["data-id"], Kl = ["innerHTML"], ql = {
	__name: "GenrePrompts",
	props: { genre: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (G(), K("div", zl, [
			n[5] ||= q("h3", null, "Шаблоны звучания", -1),
			n[6] ||= q("p", null, "Начни с одного из вариантов. Он перенесёт настройки жанра в конструктор — там можно выбрать вокал, настроение и язык.", -1),
			q("div", Bl, [q("div", Vl, [
				n[1] ||= q("div", { class: "idea-badge" }, "Оригинальное звучание", -1),
				q("h3", null, k(e.genre.name), 1),
				q("p", null, k(e.genre.style) + ".", 1),
				q("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "use-genre",
					"data-id": e.genre.id
				}, [n[0] ||= Y(" Настроить в студии ", -1), q("span", {
					"aria-hidden": "true",
					innerHTML: e.genre.icons.arrow
				}, null, 8, Ul)], 8, Hl)
			]), q("div", Wl, [
				n[3] ||= q("div", { class: "idea-badge" }, "Альтернативная версия", -1),
				n[4] ||= q("h3", null, "Мягкая атмосфера", -1),
				q("p", null, k(e.genre.style) + ", restrained dynamics, warm intimate production, emotional melodies.", 1),
				q("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "use-soft",
					"data-id": e.genre.id
				}, [n[2] ||= Y(" Настроить в студии ", -1), q("span", {
					"aria-hidden": "true",
					innerHTML: e.genre.icons.arrow
				}, null, 8, Kl)], 8, Gl)
			])])
		]));
	}
}, Jl = { class: "gb-hero" }, Yl = { class: "gb-content" }, Xl = { class: "gb-eyebrow" }, Zl = { class: "gb-title" }, Ql = { class: "gb-desc" }, $l = { class: "gb-tags" }, eu = { class: "gb-buttons" }, tu = ["data-id"], nu = ["innerHTML"], ru = ["data-id"], iu = ["innerHTML"], au = {
	class: "gb-vinyl",
	"aria-hidden": "true"
}, ou = { class: "gb-equalizer" }, su = { class: "gb-facts" }, cu = { class: "gb-fact" }, lu = { class: "gb-fact" }, uu = { class: "gb-fact" }, du = { class: "gb-fact" }, fu = { class: "genre-detail-layout" }, pu = {
	class: "genre-side-nav",
	"aria-label": "ЖАНР-НАВ — меню жанра"
}, mu = {
	class: "genre-side-links",
	"aria-label": "Разделы жанра"
}, hu = [
	"data-tab",
	"aria-current",
	"onClick"
], gu = ["innerHTML"], _u = {
	class: "genre-detail-content",
	id: "genre-nav-content",
	"aria-label": "Содержимое раздела жанра"
}, vu = ["innerHTML"], yu = {
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
		], r = /* @__PURE__ */ Yt(t.genre.tab), i = /* @__PURE__ */ Yt(t.tabContent(t.genre.id, r.value) || "");
		async function a(e) {
			if (r.value === e || !n.some((t) => t.id === e)) return;
			let a = t.tabContent(t.genre.id, e);
			typeof a == "string" && (r.value = e, i.value = a, await xn(), window.innerWidth <= 850 && document.getElementById("genre-nav-content")?.scrollIntoView({
				block: "start",
				behavior: "smooth"
			}));
		}
		return (t, o) => (G(), K("div", {
			class: "genre-bright",
			style: D({ "--accent": e.genre.color })
		}, [q("div", Jl, [
			o[5] ||= q("div", { class: "gb-top" }, [q("button", {
				type: "button",
				class: "back",
				"data-action": "academy-back",
				"aria-label": "Назад к разделу Академии"
			}, "← Назад"), q("small", null, "SUNOBOOM · MUSIC ATLAS")], -1),
			q("div", Yl, [q("div", null, [
				q("div", Xl, k(e.genre.family) + " · " + k(e.genre.era), 1),
				q("h1", Zl, k(e.genre.name), 1),
				q("p", Ql, k(e.genre.description), 1),
				q("div", $l, [
					q("span", null, k(e.genre.tagline), 1),
					q("span", null, k(e.genre.bpm[0]) + "–" + k(e.genre.bpm[1]) + " BPM", 1),
					q("span", null, k(e.genre.ideasCount) + " идеи", 1)
				]),
				q("div", eu, [q("button", {
					type: "button",
					class: "btn primary",
					"data-action": "use-genre",
					"data-id": e.genre.id
				}, [q("span", {
					innerHTML: e.genre.icons.studio,
					"aria-hidden": "true"
				}, null, 8, nu), o[0] ||= Y(" Создать в Suno ", -1)], 8, tu), q("button", {
					type: "button",
					class: "btn ghost",
					"data-action": "favorite",
					"data-id": e.genre.id
				}, [q("span", {
					innerHTML: e.genre.icons.heart,
					"aria-hidden": "true"
				}, null, 8, iu), Y(" " + k(e.genre.favorite ? "В избранном" : "В избранное"), 1)], 8, ru)])
			]), q("div", au, [q("div", ou, [(G(), K(U, null, B(9, (e) => q("i", { key: e })), 64))])])]),
			q("div", su, [
				q("div", cu, [o[1] ||= q("small", null, "История", -1), q("strong", null, k(e.genre.era), 1)]),
				q("div", lu, [o[2] ||= q("small", null, "Темп", -1), q("strong", null, k(e.genre.bpm[0]) + "–" + k(e.genre.bpm[1]) + " BPM", 1)]),
				q("div", uu, [o[3] ||= q("small", null, "Треки", -1), q("strong", null, k(e.genre.ideasCount) + " сюжетных идеи", 1)]),
				q("div", du, [o[4] ||= q("small", null, "Артисты", -1), q("strong", null, k(e.genre.artistCount) + " ориентиров", 1)])
			])
		]), q("div", fu, [q("aside", pu, [o[7] ||= q("div", { class: "genre-side-head" }, [q("span", null, "ЖАНР-НАВ"), q("small", null, "Разделы карточки")], -1), q("nav", mu, [(G(), K(U, null, B(n, (t) => q("button", {
			key: t.id,
			type: "button",
			class: O(["genre-side-item", { active: r.value === t.id }]),
			"data-tab": t.id,
			"aria-controls": "genre-nav-content",
			"aria-current": r.value === t.id ? "page" : "false",
			onClick: (e) => a(t.id)
		}, [
			q("span", {
				class: "genre-side-icon",
				innerHTML: e.genre.icons[t.id],
				"aria-hidden": "true"
			}, null, 8, gu),
			q("span", null, k(t.label), 1),
			o[6] ||= q("span", {
				class: "genre-side-chevron",
				"aria-hidden": "true"
			}, "›", -1)
		], 10, hu)), 64))])]), q("section", _u, [r.value === "overview" ? (G(), Gi(al, {
			key: 0,
			genre: e.genre,
			onSelectTab: a
		}, null, 8, ["genre"])) : r.value === "artists" && e.artistCatalog ? (G(), Gi(Al, {
			key: 1,
			genre: e.genre,
			catalog: e.artistCatalog,
			"enhance-profiles": e.enhanceArtistProfiles
		}, null, 8, [
			"genre",
			"catalog",
			"enhance-profiles"
		])) : r.value === "ideas" ? (G(), Gi(Rl, {
			key: 2,
			genre: e.genre
		}, null, 8, ["genre"])) : r.value === "prompts" ? (G(), Gi(ql, {
			key: 3,
			genre: e.genre
		}, null, 8, ["genre"])) : (G(), K("div", {
			key: 4,
			innerHTML: i.value
		}, null, 8, vu))])])], 4));
	}
};
// src/vue/academy/legacyGenreDetailBridge.js
function bu({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_GENRE, n = document.getElementById("app");
	if (!n || !t || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-genre-detail");
		if (r?.target === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o?.id) return;
		let s = e(a, yu, {
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
var xu = { class: "panel" }, Su = { class: "field" }, Cu = ["value"], wu = ["value"], Tu = { class: "form-grid" }, Eu = { class: "field" }, Du = ["value"], Ou = ["value"], ku = { class: "field" }, Au = ["value"], ju = ["value"], Mu = { class: "field" }, Nu = ["value"], Pu = ["value"], Fu = { class: "field" }, Iu = ["value"], Lu = ["value"], Ru = { class: "field" }, zu = { for: "b-tempo" }, Bu = {
	id: "tempo-num",
	style: { color: "#ffa8d5" }
}, Vu = { class: "range" }, Hu = ["value"], Uu = { id: "bpm-output" }, Wu = {
	class: "muted",
	style: { "font-size": "11px" }
}, Gu = { class: "field" }, Ku = ["value"], qu = { class: "field" }, Ju = ["value"], Yu = { class: "checkrow" }, Xu = ["checked", "onChange"], Zu = {
	class: "panel",
	style: {
		position: "sticky",
		top: "20px"
	}
}, Qu = {
	class: "output",
	id: "prompt-output"
}, $u = { class: "counter" }, ed = { id: "prompt-count" }, td = { class: "two-col" }, nd = {
	class: "btn primary",
	type: "button",
	"data-action": "copy-prompt"
}, rd = ["innerHTML"], id = {
	class: "btn ghost",
	type: "button",
	"data-action": "save-prompt"
}, ad = ["innerHTML"], od = { class: "list-pills" }, sd = {
	__name: "StudioBuilder",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Xt(t.api.snapshot()), r = Q(() => n.value?.settings || {}), i = Q(() => n.value?.genre || {
			name: "",
			family: "",
			bpm: [0, 0]
		}), a = Q(() => String(n.value?.prompt || "")), o = [
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
		return z(() => window.addEventListener("sunoboom:studio-updated", d)), mr(() => window.removeEventListener("sunoboom:studio-updated", d)), (e, t) => (G(), K(U, null, [q("div", xu, [
			t[17] ||= q("h3", null, "Параметры трека", -1),
			q("div", Su, [t[8] ||= q("label", { for: "b-genre" }, "Жанр", -1), q("select", {
				id: "b-genre",
				value: r.value.genre,
				onChange: t[0] ||= (e) => f("genre", e.target.value)
			}, [(G(!0), K(U, null, B(n.value.genres, (e) => (G(), K("option", {
				key: e.id,
				value: e.id
			}, k(e.name), 9, wu))), 128))], 40, Cu)]),
			q("div", Tu, [
				q("div", Eu, [t[9] ||= q("label", { for: "b-mood" }, "Настроение", -1), q("select", {
					id: "b-mood",
					value: r.value.mood,
					onChange: t[1] ||= (e) => f("mood", e.target.value)
				}, [(G(), K(U, null, B(o, ([e, t]) => q("option", {
					key: e,
					value: e
				}, k(t), 9, Ou)), 64))], 40, Du)]),
				q("div", ku, [t[10] ||= q("label", { for: "b-vocal" }, "Вокал", -1), q("select", {
					id: "b-vocal",
					value: r.value.vocal,
					onChange: t[2] ||= (e) => f("vocal", e.target.value)
				}, [(G(), K(U, null, B(s, ([e, t]) => q("option", {
					key: e,
					value: e
				}, k(t), 9, ju)), 64))], 40, Au)]),
				q("div", Mu, [t[11] ||= q("label", { for: "b-lang" }, "Язык текста", -1), q("select", {
					id: "b-lang",
					value: r.value.language,
					onChange: t[3] ||= (e) => f("language", e.target.value)
				}, [(G(), K(U, null, B(c, ([e, t]) => q("option", {
					key: e,
					value: e
				}, k(t), 9, Pu)), 64))], 40, Nu)]),
				q("div", Fu, [t[12] ||= q("label", { for: "b-energy" }, "Энергия", -1), q("select", {
					id: "b-energy",
					value: r.value.energy,
					onChange: t[4] ||= (e) => f("energy", e.target.value)
				}, [(G(), K(U, null, B(l, ([e, t]) => q("option", {
					key: e,
					value: e
				}, k(t), 9, Lu)), 64))], 40, Iu)])
			]),
			q("div", Ru, [
				q("label", zu, [
					t[13] ||= Y("Темп · ", -1),
					q("span", Bu, k(r.value.tempo), 1),
					t[14] ||= Y(" BPM", -1)
				]),
				q("div", Vu, [q("input", {
					type: "range",
					id: "b-tempo",
					min: "65",
					max: "200",
					step: "1",
					value: r.value.tempo,
					onInput: t[5] ||= (e) => f("tempo", Number(e.target.value))
				}, null, 40, Hu), q("output", Uu, k(r.value.tempo) + " BPM", 1)]),
				q("span", Wu, " Обычно для «" + k(i.value.name) + "»: " + k(i.value.bpm[0]) + "–" + k(i.value.bpm[1]) + " BPM ", 1)
			]),
			q("div", Gu, [t[15] ||= q("label", { for: "b-theme" }, "Тема / история трека", -1), q("textarea", {
				id: "b-theme",
				rows: "2",
				value: r.value.theme,
				onInput: t[6] ||= (e) => f("theme", e.target.value),
				placeholder: "О чём будет песня?"
			}, null, 40, Ku)]),
			q("div", qu, [t[16] ||= q("label", { for: "b-extra" }, "Дополнительные инструкции (необязательно)", -1), q("textarea", {
				id: "b-extra",
				rows: "2",
				value: r.value.extra,
				onInput: t[7] ||= (e) => f("extra", e.target.value),
				placeholder: "Например: memorable chorus, short guitar solo"
			}, null, 40, Ju)]),
			q("div", Yu, [(G(), K(U, null, B(u, ([e, t]) => q("label", { key: e }, [q("input", {
				type: "checkbox",
				checked: r.value[e],
				onChange: (t) => f(e, t.target.checked)
			}, null, 40, Xu), Y(k(t), 1)])), 64))])
		]), q("div", Zu, [
			t[21] ||= q("div", { class: "eyebrow" }, "Готово к Suno", -1),
			t[22] ||= q("h3", null, "Твой промпт", -1),
			q("div", Qu, k(a.value), 1),
			q("div", $u, [t[18] ||= q("span", null, "Максимум 1000 символов", -1), q("b", ed, k(a.value.length) + " / 1000", 1)]),
			q("div", td, [q("button", nd, [q("span", {
				"aria-hidden": "true",
				innerHTML: n.value.icons.copy
			}, null, 8, rd), t[19] ||= Y(" Копировать ", -1)]), q("button", id, [q("span", {
				"aria-hidden": "true",
				innerHTML: n.value.icons.save
			}, null, 8, ad), t[20] ||= Y(" Сохранить ", -1)])]),
			t[23] ||= q("div", { class: "spacer" }, null, -1),
			t[24] ||= q("div", { class: "notice" }, [q("strong", null, "Подсказка:"), Y(" промпт задаёт стиль, а текст песни можно вводить отдельно в Suno. Результат генерации может отличаться от запроса.")], -1),
			t[25] ||= q("div", { class: "spacer" }, null, -1),
			t[26] ||= q("div", { class: "info-label" }, "Музыкальный профиль", -1),
			q("div", od, [
				q("span", null, k(i.value.name), 1),
				q("span", null, k(i.value.family), 1),
				q("span", null, k(i.value.bpm[0]) + "–" + k(i.value.bpm[1]) + " BPM", 1)
			])
		])], 64));
	}
};
// src/vue/studio/legacyStudioBridge.js
function cd({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_STUDIO, n = document.getElementById("app");
	if (!n || !t || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector(".studio-grid");
		if (r?.target === a || (r &&= (r.unmount(), null), !a || !t.snapshot())) return;
		let o = e(a, sd, { api: t });
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
var ld = { class: "gm-layout" }, ud = { class: "gm-panel" }, dd = { class: "gm-stack" }, fd = { class: "gm-row-top" }, pd = { class: "gm-rank" }, md = { class: "gm-field gm-genre-select" }, hd = ["for"], gd = [
	"id",
	"value",
	"data-gm-genre"
], _d = ["label"], vd = ["value"], yd = ["data-gm-value"], bd = [
	"data-slot",
	"aria-label",
	"disabled"
], xd = { class: "gm-slider-line" }, Sd = [
	"max",
	"value",
	"data-gm-weight",
	"aria-label"
], Cd = { class: "gm-meter" }, wd = ["data-gm-meter"], Td = { class: "gm-sub" }, Ed = { class: "gm-actions" }, Dd = ["disabled"], Od = {
	class: "gm-mixture",
	"aria-label": "Доли музыкальных жанров"
}, kd = ["data-gm-mixbar", "title"], Ad = { class: "gm-form-grid" }, jd = ["for"], Md = [
	"id",
	"value",
	"data-gm-setting"
], Nd = ["value"], Pd = { class: "gm-tempo" }, Fd = ["checked"], Id = { class: "gm-tempo-row" }, Ld = ["value", "disabled"], Rd = { id: "gm-bpm" }, zd = { class: "gm-field" }, Bd = ["value"], Vd = { class: "gm-checks" }, Hd = ["data-gm-setting", "checked"], Ud = { class: "gm-panel gm-output-panel" }, Wd = {
	class: "gm-output",
	id: "gm-prompt",
	"aria-live": "polite"
}, Gd = { class: "gm-prompt-meta" }, Kd = { id: "gm-count" }, qd = { class: "gm-field" }, Jd = ["value"], Yd = { class: "gm-saved-list" }, Xd = {
	key: 0,
	class: "gm-muted"
}, Zd = { class: "gm-saved-actions" }, Qd = ["data-id"], $d = ["data-id", "aria-label"], ef = {
	__name: "GenreMixer",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Xt(t.api.snapshot()), r = Q(() => n.value?.rows || []), i = Q(() => n.value?.genres || []), a = Q(() => n.value?.settings || {}), o = Q(() => n.value?.options || {}), s = Q(() => n.value?.saved || []), c = Q(() => n.value?.prompt || ""), l = Q(() => n.value?.tempo || 115), u = Q(() => n.value?.title || "");
		function d() {
			let e = t.api.snapshot();
			e && (n.value = e);
		}
		z(() => window.addEventListener("sunoboom:mixer-updated", d)), mr(() => window.removeEventListener("sunoboom:mixer-updated", d));
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
		let p = Q(() => [
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
		return (e, t) => (G(), K(U, null, [t[14] ||= q("header", { class: "heading" }, [
			q("div", { class: "eyebrow" }, "Suno Studio · новый инструмент"),
			q("h1", null, [Y("Жанровый "), q("span", { class: "gm-highlight" }, "миксер")]),
			q("p", null, "Соединяй от 2 до 4 жанров из Академии SUNOBOOM, задавай пропорции и создавай готовый Style-промпт для Suno.")
		], -1), q("div", ld, [q("section", ud, [
			t[3] ||= q("div", { class: "gm-section-head" }, [q("div", null, [q("h2", null, "Формула звучания"), q("p", null, "Меняй жанры и двигай ползунки — сумма всегда равна 100%.")]), q("span", { class: "gm-total" }, "Σ 100%")], -1),
			q("div", dd, [(G(!0), K(U, null, B(r.value, (e, t) => (G(), K("article", {
				key: e.id,
				class: "gm-row",
				style: D({ "--gm-color": e.color })
			}, [
				q("div", fd, [
					q("span", pd, k(String(t + 1).padStart(2, "0")), 1),
					q("div", md, [q("label", { for: "gm-genre-" + t }, "Музыкальное направление", 8, hd), q("select", {
						id: "gm-genre-" + t,
						value: e.id,
						"data-gm-genre": t
					}, [(G(!0), K(U, null, B(f(t), (e) => (G(), K("optgroup", {
						key: e.family,
						label: e.family
					}, [(G(!0), K(U, null, B(e.items, (e) => (G(), K("option", {
						key: e.id,
						value: e.id
					}, k(e.name), 9, vd))), 128))], 8, _d))), 128))], 8, gd)]),
					q("span", {
						class: "gm-percent",
						"data-gm-value": t
					}, k(e.weight) + "%", 9, yd),
					q("button", {
						type: "button",
						class: "gm-remove",
						"data-action": "gm-remove",
						"data-slot": t,
						"aria-label": "Убрать жанр " + e.name,
						title: "Убрать жанр",
						disabled: r.value.length <= 2
					}, "×", 8, bd)
				]),
				q("div", xd, [q("input", {
					type: "range",
					min: "5",
					max: 100 - 5 * (r.value.length - 1),
					step: "1",
					value: e.weight,
					"data-gm-weight": t,
					"aria-label": "Доля жанра " + e.name
				}, null, 8, Sd), q("div", Cd, [q("span", {
					"data-gm-meter": t,
					style: D({ width: e.weight + "%" })
				}, null, 12, wd)])]),
				q("p", Td, k(e.family) + " · " + k(e.tagline) + " · " + k(e.instruments), 1)
			], 4))), 128))]),
			q("div", Ed, [q("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "gm-add",
				disabled: r.value.length >= 4
			}, "＋ Добавить жанр", 8, Dd), t[0] ||= q("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "gm-equal"
			}, "Поровну", -1)]),
			q("div", Od, [(G(!0), K(U, null, B(r.value, (e) => (G(), K("span", {
				key: e.id,
				"data-gm-mixbar": e.id,
				style: D({
					width: e.weight + "%",
					background: e.color
				}),
				title: e.name + ": " + e.weight + "%"
			}, null, 12, kd))), 128))]),
			t[4] ||= q("p", { class: "gm-muted" }, "Проценты — творческий ориентир для генерации, а не гарантия точного соотношения в готовой музыке.", -1),
			t[5] ||= q("div", { class: "gm-divider" }, null, -1),
			t[6] ||= q("h2", null, "Характер композиции", -1),
			q("div", Ad, [(G(!0), K(U, null, B(p.value, (e) => (G(), K("div", {
				key: e.key,
				class: "gm-field"
			}, [q("label", { for: "gm-" + e.key }, k(e.label), 9, jd), q("select", {
				id: "gm-" + e.key,
				value: a.value[e.key],
				"data-gm-setting": e.key
			}, [(G(!0), K(U, null, B(e.choices, ([e, t]) => (G(), K("option", {
				key: e,
				value: e
			}, k(t), 9, Nd))), 128))], 8, Md)]))), 128))]),
			q("div", Pd, [q("label", null, [q("input", {
				type: "checkbox",
				"data-gm-setting": "autoTempo",
				checked: a.value.autoTempo
			}, null, 8, Fd), t[1] ||= Y(" Определять темп по жанрам", -1)]), q("div", Id, [q("input", {
				id: "gm-tempo",
				type: "range",
				min: "65",
				max: "200",
				value: l.value,
				"data-gm-setting": "tempo",
				disabled: a.value.autoTempo
			}, null, 8, Ld), q("b", Rd, k(l.value) + " BPM", 1)])]),
			q("div", zd, [t[2] ||= q("label", { for: "gm-theme" }, "Тема песни (необязательно)", -1), q("textarea", {
				id: "gm-theme",
				rows: "2",
				maxlength: "170",
				"data-gm-setting": "theme",
				value: a.value.theme,
				placeholder: "Например: ночной город, встреча после долгой разлуки"
			}, null, 8, Bd)]),
			q("div", Vd, [(G(), K(U, null, B(m, ([e, t]) => q("label", { key: e }, [q("input", {
				type: "checkbox",
				"data-gm-setting": e,
				checked: a.value[e]
			}, null, 8, Hd), Y(" " + k(t), 1)])), 64))])
		]), q("aside", Ud, [
			t[9] ||= q("div", { class: "eyebrow" }, "Результат микширования", -1),
			t[10] ||= q("h2", null, "Гибридный Style-промпт", -1),
			q("div", Wd, k(c.value), 1),
			q("div", Gd, [t[7] ||= q("span", null, "На английском · готово для Suno", -1), q("b", Kd, k(c.value.length) + " / 1000", 1)]),
			t[11] ||= $i("<div class=\"gm-output-actions\"><button type=\"button\" class=\"btn primary\" data-action=\"gm-copy\">Копировать</button><button type=\"button\" class=\"btn ghost\" data-action=\"gm-to-studio\">В Suno Studio</button></div><button type=\"button\" class=\"btn ghost gm-full\" data-action=\"gm-save-prompt\">Сохранить в «Мои промпты»</button><div class=\"gm-divider\"></div><h3>Мои сочетания</h3>", 4),
			q("div", qd, [t[8] ||= q("label", { for: "gm-title" }, "Название сочетания", -1), q("input", {
				id: "gm-title",
				type: "text",
				maxlength: "90",
				"data-gm-title": "",
				value: u.value,
				placeholder: "Например: Северный электро-фолк"
			}, null, 8, Jd)]),
			t[12] ||= q("button", {
				type: "button",
				class: "btn ghost gm-full",
				"data-action": "gm-save-mix"
			}, "Сохранить формулу", -1),
			q("div", Yd, [s.value.length ? X("", !0) : (G(), K("p", Xd, "Сохранённых сочетаний пока нет. Придумай свой микс и сохрани его.")), (G(!0), K(U, null, B(s.value, (e) => (G(), K("article", {
				key: e.id,
				class: "gm-saved"
			}, [q("div", null, [q("strong", null, k(e.title), 1), q("small", null, k(e.summary), 1)]), q("div", Zd, [q("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "gm-load",
				"data-id": e.id
			}, "Открыть", 8, Qd), q("button", {
				type: "button",
				class: "btn danger small",
				"data-action": "gm-delete",
				"data-id": e.id,
				"aria-label": "Удалить " + e.title
			}, "×", 8, $d)])]))), 128))]),
			t[13] ||= q("p", { class: "gm-muted" }, "Сохраняется в этом браузере и входит в общую JSON-копию данных SUNOBOOM. Подключение к ИИ для смешивания не требуется.", -1)
		])])], 64));
	}
};
// src/vue/studio/legacyMixerBridge.js
function tf({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_MIXER, n = document.getElementById("app");
	if (!t || !n || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-mixer-root");
		if (r?.target === a || (r &&= (r.unmount(), null), !a || !t.snapshot())) return;
		let o = e(a, ef, { api: t });
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
var nf = {
	class: "sbpa-tabs",
	role: "group",
	"aria-label": "Источник промпта"
}, rf = ["aria-pressed"], af = ["aria-pressed"], of = {
	key: 0,
	class: "sbpa-manual"
}, sf = ["value"], cf = ["value"], lf = ["value"], uf = {
	key: 1,
	class: "sbpa-context"
}, df = {
	id: "sbpa-results",
	"aria-live": "polite"
}, ff = { class: "sbpa-scoreline" }, pf = {
	class: "sbpa-score",
	"aria-label": "Эвристическая оценка промпта"
}, mf = { class: "sbpa-score-info" }, hf = ["aria-valuenow"], gf = {
	key: 0,
	class: "sbpa-issues"
}, _f = {
	key: 1,
	class: "sbpa-clear"
}, vf = { class: "sbpa-actions" }, yf = {
	key: 0,
	type: "button",
	"data-sbpa-action": "load-studio"
}, bf = { id: "sbpa-proposal-slot" }, xf = {
	key: 0,
	class: "sbpa-proposal"
}, Sf = { key: 0 }, Cf = { key: 1 }, wf = { key: 2 }, Tf = {
	key: 3,
	class: "sbpa-alert"
}, Ef = ["value"], Df = {
	__name: "PromptAuditor",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Xt(t.api.snapshot()), r = Q(() => n.value?.mode === "manual"), i = Q(() => n.value?.report || {
			score: 0,
			length: 0,
			issues: [],
			status: ""
		}), a = Q(() => n.value?.genreId || ""), o = Q(() => n.value?.genres || []), s = Q(() => !!n.value?.proposalOpen), c = Q(() => n.value?.proposal || {
			text: "",
			removed: [],
			complete: !0
		});
		function l() {
			let e = t.api.snapshot();
			e && (n.value = e);
		}
		return z(() => window.addEventListener("sunoboom:auditor-updated", l)), mr(() => window.removeEventListener("sunoboom:auditor-updated", l)), (e, t) => (G(), K(U, null, [
			t[10] ||= q("header", { class: "sbpa-head" }, [q("div", null, [
				q("span", { class: "sbpa-eyebrow" }, "SUNOBOOM · ПРОВЕРКА"),
				q("h2", null, "Интеллектуальный аудитор промптов"),
				q("p", null, "Ищет повторы, противоречия, перегрузку и особенности жанра до отправки в Suno.")
			]), q("span", { class: "sbpa-local" }, "Проверка по правилам · без API")], -1),
			q("div", nf, [q("button", {
				type: "button",
				"data-sbpa-action": "studio",
				class: O({ active: !r.value }),
				"aria-pressed": !r.value
			}, "Текущий промпт Studio", 10, rf), q("button", {
				type: "button",
				"data-sbpa-action": "manual",
				class: O({ active: r.value }),
				"aria-pressed": r.value
			}, "Свой текст / вставка", 10, af)]),
			r.value ? (G(), K("div", of, [
				t[0] ||= q("label", { for: "sbpa-text" }, "Текст промпта", -1),
				q("textarea", {
					id: "sbpa-text",
					rows: "5",
					spellcheck: "false",
					placeholder: "Вставь текст на русском или английском…",
					value: n.value.manual
				}, null, 8, sf),
				t[1] ||= q("label", { for: "sbpa-genre" }, "Жанр для сопоставления с Академией", -1),
				q("select", {
					id: "sbpa-genre",
					value: a.value
				}, [(G(!0), K(U, null, B(o.value, (e) => (G(), K("option", {
					key: e.id,
					value: e.id
				}, k(e.name), 9, lf))), 128))], 8, cf)
			])) : (G(), K("p", uf, " Проверяется актуальный промпт конструктора. Изменения настроек Studio отражаются здесь автоматически. ")),
			q("div", df, [q("div", ff, [
				q("div", pf, [Y(k(i.value.score), 1), t[2] ||= q("small", null, "/ 100", -1)]),
				q("div", mf, [
					q("strong", null, k(i.value.status), 1),
					t[3] ||= q("span", null, "Оценка ориентировочная: проверяется структура текста, а не качество будущей музыки.", -1),
					q("div", {
						class: "sbpa-meter",
						role: "progressbar",
						"aria-label": "Оценка промпта",
						"aria-valuenow": i.value.score,
						"aria-valuemin": "0",
						"aria-valuemax": "100"
					}, [q("span", { style: D({ width: i.value.score + "%" }) }, null, 4)], 8, hf)
				]),
				q("div", { class: O(["sbpa-limit", { over: i.value.length > 1e3 }]) }, k(i.value.length) + " / 1000 символов ", 3)
			]), i.value.issues?.length ? (G(), K("ul", gf, [(G(!0), K(U, null, B(i.value.issues, (e, t) => (G(), K("li", {
				key: t,
				class: O(["sbpa-item", "sbpa-" + e.kind])
			}, [q("div", null, [
				q("strong", null, k(e.title), 1),
				q("p", null, k(e.detail), 1),
				q("small", null, k(e.fix), 1)
			])], 2))), 128))])) : (G(), K("p", _f, " Явных противоречий и повторов по проверяемым правилам не найдено. "))]),
			q("div", vf, [t[4] ||= q("button", {
				type: "button",
				"data-sbpa-action": "preview",
				class: "sbpa-primary"
			}, " Показать улучшенный вариант ", -1), r.value ? (G(), K("button", yf, " Вставить текущий промпт Studio ")) : X("", !0)]),
			q("div", bf, [s.value ? (G(), K("div", xf, [
				q("h4", null, [t[5] ||= Y("Предлагаемый вариант ", -1), q("small", null, k(c.value.text.length) + " / 1000", 1)]),
				c.value.removed.length ? (G(), K("p", Cf, "Удалено фрагментов: " + k(c.value.removed.length) + ". Проверь смысл до копирования.", 1)) : (G(), K("p", Sf, "Удалять нечего: текст уже без точных повторов.")),
				c.value.removed.length ? (G(), K("details", wf, [t[6] ||= q("summary", null, "Что изменилось", -1), q("ul", null, [(G(!0), K(U, null, B(c.value.removed, (e, t) => (G(), K("li", { key: t }, [q("b", null, k(e.reason) + ":", 1), Y(" " + k(e.part), 1)]))), 128))])])) : X("", !0),
				c.value.complete ? X("", !0) : (G(), K("p", Tf, " Автоматического сокращения недостаточно. Уменьши текст вручную минимум на " + k(c.value.text.length - 1e3) + " символов. ", 1)),
				t[7] ||= q("label", { for: "sbpa-preview-text" }, "Редактируемый предпросмотр", -1),
				q("textarea", {
					id: "sbpa-preview-text",
					rows: "5",
					spellcheck: "false",
					value: c.value.text
				}, null, 8, Ef),
				t[8] ||= q("div", { class: "sbpa-actions" }, [q("button", {
					type: "button",
					"data-sbpa-action": "copy-preview",
					class: "sbpa-primary"
				}, " Подтвердить и скопировать "), q("button", {
					type: "button",
					"data-sbpa-action": "close-preview"
				}, "Закрыть")], -1),
				t[9] ||= q("small", null, "Исходный промпт и параметры Studio не меняются. Копируется только текст предпросмотра после нажатия.", -1)
			])) : X("", !0)]),
			t[11] ||= q("p", { class: "sbpa-foot" }, " Аудитор не вызывает Gemini и не оценивает реальный звук. Жанровые отклонения могут быть творческим решением, а рекомендации не изменяют исходник без твоего действия. ", -1)
		], 64));
	}
};
// src/vue/studio/legacyAuditorBridge.js
function Of({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_AUDITOR, n = document.getElementById("app");
	if (!t || !n || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sbpa-auditor");
		if (r?.target === a || (r &&= (r.unmount(), null), !a || !t.snapshot())) return;
		let o = e(a, Df, { api: t });
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
var kf = ["data-sba-id", "data-sba-energy"], Af = { class: "sba-block-head" }, jf = ["data-sba-drag", "aria-label"], Mf = { class: "sba-index" }, Nf = {
	class: "sba-emoji",
	"aria-hidden": "true"
}, Pf = { class: "sba-head-energy" }, Ff = { class: "sba-block-actions" }, If = ["data-id", "disabled"], Lf = ["data-id", "disabled"], Rf = ["data-id"], zf = ["data-id"], Bf = { class: "sba-block-fields" }, Vf = ["data-id", "value"], Hf = ["value"], Uf = ["data-id", "value"], Wf = ["value"], Gf = ["data-id", "value"], Kf = ["value"], qf = { class: "sba-energy-field" }, Jf = ["data-sba-output"], Yf = ["value", "data-id"], Xf = { class: "sba-instrument-field" }, Zf = ["for"], Qf = { class: "sba-instrument-row" }, $f = [
	"id",
	"data-id",
	"value"
], ep = ["id", "innerHTML"], tp = ["id"], np = { class: "sba-sound-head" }, rp = ["data-id"], ip = ["data-id"], ap = ["id"], op = {
	key: 0,
	class: "sba-sound-back"
}, sp = ["data-id"], cp = [
	"data-sba-sound-search",
	"data-id",
	"value",
	"placeholder"
], lp = ["id"], up = { class: "sba-sound-info" }, dp = { key: 0 }, fp = ["data-id", "data-genre-id"], pp = {
	key: 0,
	class: "sba-sound-none"
}, mp = { class: "sba-sound-group" }, hp = [
	"disabled",
	"aria-disabled",
	"data-id",
	"data-sound-value"
], gp = {
	key: 0,
	class: "sba-sound-none"
}, _p = {
	key: 1,
	class: "sba-sound-foot"
}, vp = ["data-id"], yp = {
	key: 0,
	class: "sba-custom-label"
}, bp = ["data-id", "value"], xp = ["innerHTML"], Sp = ["data-id", "aria-label"], Cp = {
	key: 0,
	class: "sba-empty"
}, wp = ["aria-label"], Tp = [
	"data-sba-snake-id",
	"data-sba-energy",
	"aria-label",
	"title"
], Ep = { class: "sba-snake-num" }, Dp = {
	class: "sba-snake-icon",
	"aria-hidden": "true"
}, Op = { class: "sba-snake-title" }, kp = { class: "sba-snake-level" }, Ap = ["title"], jp = {
	key: 0,
	class: "sba-snake-more"
}, Mp = {
	key: 1,
	class: "sba-snake-empty"
}, Np = ["data-sba-hub-from"], Pp = { class: "sba-transition-hub-route" }, Fp = { class: "sba-transition-hub-number" }, Ip = { class: "sba-transition-hub-names" }, Lp = { class: "sba-transition-hub-controls" }, Rp = [
	"data-id",
	"value",
	"aria-label"
], zp = ["value"], Bp = [
	"data-id",
	"value",
	"aria-label"
], Vp = ["value"], Hp = [
	"data-id",
	"value",
	"aria-label"
], Up = ["value"], Wp = { class: "sba-transition-hub-actions" }, Gp = ["data-id", "title"], Kp = ["data-id"], qp = {
	key: 1,
	class: "sba-transition-hub-empty"
}, Jp = ["title"], Yp = { class: "sba-chart-column" }, Xp = {
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
		let t = e, n = /* @__PURE__ */ Xt(t.api.snapshot()), r = Q(() => n.value?.blocks || []), i = Q(() => n.value?.sections || []), a = Q(() => n.value?.voices || []), o = Q(() => n.value?.energies || {}), s = Q(() => n.value?.transitions || []), c = Q(() => n.value?.transitionTypes || []), l = Q(() => n.value?.transitionLengths || []), u = Q(() => n.value?.transitionStrengths || []), d = Q(() => n.value?.snakeExpanded ? r.value : r.value.slice(0, 12)), f = Q(() => n.value?.transitionHubExpanded ? s.value : s.value.slice(0, 3)), p = [
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
		z(() => window.addEventListener("sunoboom:arranger-updated", m)), mr(() => window.removeEventListener("sunoboom:arranger-updated", m));
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
		let g = Q(() => d.value.map((e, t) => t + 1 + ". " + e.snakeLabel).join(" → "));
		return (t, n) => e.kind === "cards" ? (G(), K(U, { key: 0 }, [(G(!0), K(U, null, B(r.value, (e, t) => (G(), K(U, { key: e.id }, [
			q("article", {
				class: "sba-block",
				"data-sba-id": e.id,
				"data-sba-energy": e.energy
			}, [q("div", Af, [
				q("span", {
					class: "sba-drag",
					draggable: "true",
					"data-sba-drag": e.id,
					title: "Перетащить блок",
					"aria-label": "Перетащить " + e.sectionName
				}, "⠿", 8, jf),
				q("span", Mf, k(String(t + 1).padStart(2, "0")), 1),
				q("span", Nf, k(e.icon), 1),
				q("strong", null, k(e.label), 1),
				q("span", Pf, "Энергия " + k(e.energy) + "/5", 1),
				q("div", Ff, [
					q("button", {
						type: "button",
						"data-sba-action": "up",
						"data-id": e.id,
						"aria-label": "Переместить вверх",
						disabled: t === 0
					}, "↑", 8, If),
					q("button", {
						type: "button",
						"data-sba-action": "down",
						"data-id": e.id,
						"aria-label": "Переместить вниз",
						disabled: t === r.value.length - 1
					}, "↓", 8, Lf),
					q("button", {
						type: "button",
						"data-sba-action": "duplicate",
						"data-id": e.id,
						"aria-label": "Дублировать блок"
					}, "⧉", 8, Rf),
					q("button", {
						type: "button",
						"data-sba-action": "remove",
						"data-id": e.id,
						"aria-label": "Удалить блок"
					}, "×", 8, zf)
				])
			]), q("div", Bf, [
				q("label", null, [n[0] ||= Y("Раздел ", -1), q("select", {
					"data-sba-field": "type",
					"data-id": e.id,
					value: e.type
				}, [(G(!0), K(U, null, B(i.value, (e) => (G(), K("option", {
					key: e.id,
					value: e.id
				}, k(e.name), 9, Hf))), 128))], 8, Vf)]),
				q("label", null, [n[1] ||= Y("Тактов ", -1), q("select", {
					"data-sba-field": "bars",
					"data-id": e.id,
					value: e.bars
				}, [(G(), K(U, null, B(p, (e) => q("option", {
					key: e,
					value: e
				}, k(e), 9, Wf)), 64))], 8, Uf)]),
				q("label", null, [n[2] ||= Y("Вокал ", -1), q("select", {
					"data-sba-field": "vocal",
					"data-id": e.id,
					value: e.vocal
				}, [(G(!0), K(U, null, B(a.value, (e) => (G(), K("option", {
					key: e.id,
					value: e.id
				}, k(e.name), 9, Kf))), 128))], 8, Gf)]),
				q("label", qf, [
					n[3] ||= Y("Энергия ", -1),
					q("output", { "data-sba-output": e.id }, k(e.energy) + "/5 · " + k(o.value[e.energy]), 9, Jf),
					q("input", {
						type: "range",
						min: "1",
						max: "5",
						step: "1",
						value: e.energy,
						"data-sba-field": "energy",
						"data-id": e.id
					}, null, 8, Yf)
				]),
				q("div", Xf, [
					q("label", { for: "sba-instruments-" + e.id }, "Инструменты / приём", 8, Zf),
					q("div", Qf, [q("input", {
						type: "text",
						id: "sba-instruments-" + e.id,
						maxlength: "300",
						"data-sba-field": "instruments",
						"data-id": e.id,
						value: e.instruments,
						placeholder: "Введи вручную или выбери рекомендацию",
						autocomplete: "off"
					}, null, 8, $f)]),
					q("div", {
						class: "sba-quick-sounds",
						id: "sba-quick-" + e.id,
						innerHTML: e.quickSounds
					}, null, 8, ep),
					e.soundPanel ? (G(), K("div", {
						key: 0,
						class: "sba-sound-panel",
						id: "sba-sound-panel-" + e.id,
						"aria-label": "Выбор инструментов и приёмов"
					}, [
						q("div", np, [n[4] ||= q("strong", null, "Библиотека инструментов и приёмов", -1), q("button", {
							type: "button",
							"data-sba-action": "sound-close",
							"data-id": e.id,
							"aria-label": "Закрыть подбор"
						}, "×", 8, rp)]),
						q("button", {
							type: "button",
							class: "sba-sound-genre-trigger",
							"data-sba-action": "sound-switch-mode",
							"data-id": e.id
						}, [
							n[5] ||= Y(" Жанр: ", -1),
							q("b", null, k(e.soundPanel.genreName), 1),
							n[6] ||= q("span", null, "⌄", -1)
						], 8, ip),
						q("div", { id: "sba-sound-body-" + e.id }, [
							e.soundPanel.mode === "genres" ? (G(), K("div", op, [q("button", {
								type: "button",
								"data-sba-action": "sound-switch-mode",
								"data-id": e.id
							}, " ← К инструментам ", 8, sp)])) : X("", !0),
							q("input", {
								type: "search",
								class: "sba-sound-search",
								"data-sba-sound-search": e.soundPanel.mode,
								"data-id": e.id,
								value: e.soundPanel.query,
								placeholder: e.soundPanel.mode === "genres" ? "Поиск по всей Академии..." : "Поиск инструмента или приёма...",
								autocomplete: "off",
								"aria-label": "Поиск инструментов или жанров"
							}, null, 8, cp),
							q("div", {
								class: "sba-sound-list",
								id: "sba-sound-results-" + e.id
							}, [e.soundPanel.mode === "genres" ? (G(), K(U, { key: 0 }, [
								q("div", up, [Y(" Найдено жанров: " + k(e.soundPanel.total) + " ", 1), e.soundPanel.total > e.soundPanel.matches.length ? (G(), K("span", dp, " · уточни запрос ")) : X("", !0)]),
								(G(!0), K(U, null, B(e.soundPanel.matches, (t) => (G(), K("button", {
									key: t.id,
									type: "button",
									class: "sba-sound-genre-row",
									"data-sba-action": "sound-set-genre",
									"data-id": e.id,
									"data-genre-id": t.id
								}, [q("span", null, k(t.name), 1), q("small", null, k(t.family), 1)], 8, fp))), 128)),
								e.soundPanel.matches.length ? X("", !0) : (G(), K("p", pp, " Жанр не найден "))
							], 64)) : (G(), K(U, { key: 1 }, [(G(!0), K(U, null, B(e.soundPanel.groups, (t) => (G(), K(U, { key: t.title }, [q("div", mp, k(t.title), 1), (G(!0), K(U, null, B(t.items, (t) => (G(), K("button", {
								key: t.name,
								type: "button",
								class: "sba-sound-option",
								disabled: t.added,
								"aria-disabled": t.added,
								"data-sba-action": "sound-add",
								"data-id": e.id,
								"data-sound-value": t.name
							}, [q("span", null, k(t.name), 1), q("small", null, k(t.added ? "✓ Добавлено" : "+ Добавить"), 1)], 8, hp))), 128))], 64))), 128)), e.soundPanel.groups.length ? X("", !0) : (G(), K("p", gp, " Совпадений нет. Можно ввести инструмент вручную. "))], 64))], 8, lp),
							e.soundPanel.mode === "genres" ? X("", !0) : (G(), K("div", _p, [n[7] ||= q("span", null, "Нажми «Добавить», чтобы дополнить поле. Свой текст сохраняется.", -1), q("button", {
								type: "button",
								"data-sba-action": "sound-clear",
								"data-id": e.id
							}, " Очистить поле ", 8, vp)]))
						], 8, ap)
					], 8, tp)) : X("", !0)
				]),
				e.type === "custom" ? (G(), K("label", yp, [n[8] ||= Y("Своё название ", -1), q("input", {
					type: "text",
					maxlength: "48",
					"data-sba-field": "customName",
					"data-id": e.id,
					value: e.customName,
					placeholder: "Название для тега Suno"
				}, null, 8, bp)])) : X("", !0)
			])], 8, kf),
			e.transitionHTML ? (G(), K("div", {
				key: 0,
				style: { display: "contents" },
				innerHTML: e.transitionHTML
			}, null, 8, xp)) : X("", !0),
			q("button", {
				type: "button",
				class: "sba-between-add",
				"data-sba-action": "insert-after",
				"data-id": e.id,
				"aria-label": "Добавить блок после " + e.label
			}, [...n[9] ||= [q("span", { "aria-hidden": "true" }, "＋", -1), Y(" Добавить после ", -1)]], 8, Sp)
		], 64))), 128)), r.value.length ? X("", !0) : (G(), K("div", Cp, "Пока нет блоков. Добавь первый фрагмент снизу."))], 64)) : e.kind === "snake" ? (G(), K(U, { key: 1 }, [r.value.length ? (G(), K(U, { key: 0 }, [(G(), K(U, null, B([6, 3], (e) => q("div", {
			key: e,
			class: O(e === 6 ? "sba-snake-desktop" : "sba-snake-mobile"),
			role: "group",
			"aria-label": "Схема блоков: " + g.value
		}, [(G(!0), K(U, null, B(h(e), (e) => (G(), K("div", {
			key: e.id,
			class: O(["sba-snake-row", {
				"sba-snake-reverse": e.reverse,
				"sba-snake-continues": e.continued
			}])
		}, [(G(!0), K(U, null, B(e.items, (e) => (G(), K("button", {
			key: e.id,
			type: "button",
			draggable: "true",
			class: "sba-snake-chip",
			"data-sba-snake-id": e.id,
			"data-sba-energy": e.energy,
			"aria-label": "Переместить " + e.snakeLabel + ", позиция " + (e.index + 1) + " из " + r.value.length + ", энергия " + e.energy + "/5",
			title: e.index + 1 + ". " + e.snakeLabel + " · энергия " + e.energy + "/5 · перетащи для перестановки"
		}, [
			q("span", Ep, k(e.index + 1), 1),
			q("span", Dp, k(e.icon), 1),
			q("span", Op, k(e.snakeLabel), 1),
			q("span", kp, k(e.energy) + "/5", 1),
			e.hasTransition ? (G(), K("span", {
				key: 0,
				class: "sba-snake-transition",
				title: "Переход: " + e.transitionLabel,
				"aria-hidden": "true"
			}, "↝", 8, Ap)) : X("", !0)
		], 8, Tp))), 128))], 2))), 128))], 10, wp)), 64)), d.value.length < r.value.length ? (G(), K("p", jp, " … и ещё " + k(r.value.length - d.value.length) + " блоков ", 1)) : X("", !0)], 64)) : (G(), K("p", Mp, "Добавь первый блок, и здесь появится схема композиции."))], 64)) : e.kind === "transitions" ? (G(), K(U, { key: 2 }, [s.value.length ? (G(!0), K(U, { key: 0 }, B(f.value, (e) => (G(), K("div", {
			key: e.id,
			class: O(["sba-transition-hub-row", { "sba-transition-hub-active": e.current.type !== "none" }]),
			"data-sba-hub-from": e.id
		}, [
			q("div", Pp, [q("span", Fp, k(e.index + 1) + " → " + k(e.index + 2), 1), q("span", Ip, [
				Y(k(e.from) + " ", 1),
				n[10] ||= q("b", null, "→", -1),
				Y(" " + k(e.to), 1)
			])]),
			q("div", Lp, [
				q("label", null, [n[11] ||= Y("Эффект ", -1), q("select", {
					"data-sba-transition": "type",
					"data-id": e.id,
					value: e.current.type,
					"aria-label": "Переход " + (e.index + 1) + " к " + (e.index + 2)
				}, [(G(!0), K(U, null, B(c.value, (e) => (G(), K("option", {
					key: e.id,
					value: e.id
				}, k(e.name), 9, zp))), 128))], 8, Rp)]),
				q("label", null, [n[12] ||= Y("Длина ", -1), q("select", {
					"data-sba-transition": "length",
					"data-id": e.id,
					value: e.current.length,
					"aria-label": "Длительность перехода " + (e.index + 1)
				}, [(G(!0), K(U, null, B(l.value, (e) => (G(), K("option", {
					key: e.id,
					value: e.id
				}, k(e.name), 9, Vp))), 128))], 8, Bp)]),
				q("label", null, [n[13] ||= Y("Сила ", -1), q("select", {
					"data-sba-transition": "strength",
					"data-id": e.id,
					value: e.current.strength,
					"aria-label": "Выраженность перехода " + (e.index + 1)
				}, [(G(!0), K(U, null, B(u.value, (e) => (G(), K("option", {
					key: e.id,
					value: e.id
				}, k(e.name), 9, Up))), 128))], 8, Hp)])
			]),
			q("div", Wp, [q("button", {
				type: "button",
				"data-sba-action": "transition-suggest",
				"data-id": e.id,
				title: "Совет: " + e.advice
			}, "✧ Совет", 8, Gp), q("button", {
				type: "button",
				"data-sba-action": "transition-hub-jump",
				"data-id": e.id
			}, "Подробнее ↓", 8, Kp)])
		], 10, Np))), 128)) : (G(), K("p", qp, "Добавь второй блок, и здесь можно будет настроить переходы."))], 64)) : e.kind === "energy" ? (G(!0), K(U, { key: 3 }, B(r.value, (e) => (G(), K("div", {
			key: e.id,
			class: "sba-chart-step",
			title: e.label + " · " + e.energy + "/5",
			style: D({
				"--energy": e.energy,
				"--bar-width": 100 / r.value.length + "%"
			})
		}, [q("div", Yp, [q("i", { style: D({ "--level": e.energy }) }, null, 4)]), q("small", null, k(e.icon), 1)], 12, Jp))), 128)) : X("", !0);
	}
}, Zp = ["aria-expanded"], Qp = { id: "sba-picked-label" }, $p = ["hidden"], em = { class: "sba-preset-search-row" }, tm = ["value"], nm = {
	class: "sba-preset-filters",
	role: "group",
	"aria-label": "Тип вариантов"
}, rm = ["data-filter", "aria-pressed"], im = {
	id: "sba-preset-results",
	class: "sba-preset-results",
	role: "listbox",
	"aria-label": "Доступные шаблоны и жанры"
}, am = { class: "sba-preset-group-title" }, om = { key: 0 }, sm = ["aria-selected", "data-choice"], cm = {
	key: 0,
	class: "sba-preset-no-results"
}, lm = {
	__name: "ArrangementPicker",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Xt(t.api.snapshot()), r = Q(() => n.value?.picker || {
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
		return z(() => window.addEventListener("sunoboom:arranger-updated", i)), mr(() => window.removeEventListener("sunoboom:arranger-updated", i)), (e, t) => (G(), K(U, null, [
			t[2] ||= q("span", { class: "sba-preset-caption" }, "Шаблон композиции / жанр", -1),
			q("button", {
				type: "button",
				id: "sba-presets",
				class: "sba-preset-trigger",
				"data-sba-action": "menu-toggle",
				"aria-haspopup": "dialog",
				"aria-expanded": r.value.open,
				"aria-controls": "sba-preset-menu"
			}, [q("span", Qp, k(r.value.selected), 1), t[0] ||= q("span", {
				class: "sba-preset-chevron",
				"aria-hidden": "true"
			}, "⌄", -1)], 8, Zp),
			q("div", {
				id: "sba-preset-menu",
				class: "sba-preset-menu",
				role: "dialog",
				"aria-label": "Поиск шаблона или жанра",
				hidden: !r.value.open
			}, [
				q("div", em, [q("input", {
					type: "search",
					id: "sba-preset-search",
					autocomplete: "off",
					value: r.value.query,
					placeholder: "Найти жанр или шаблон...",
					"aria-label": "Поиск жанра"
				}, null, 8, tm), t[1] ||= q("button", {
					type: "button",
					"data-sba-action": "menu-close",
					"aria-label": "Закрыть меню"
				}, "×", -1)]),
				q("div", nm, [(G(!0), K(U, null, B([
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
				], (e) => (G(), K("button", {
					key: e.id,
					type: "button",
					"data-sba-action": "menu-filter",
					"data-filter": e.id,
					"aria-pressed": r.value.filter === e.id
				}, k(e.title), 9, rm))), 128))]),
				q("div", im, [(G(!0), K(U, null, B(r.value.groups, (e) => (G(), K(U, { key: e.title }, [q("div", am, [Y(k(e.title) + " ", 1), e.count === null ? X("", !0) : (G(), K("small", om, k(e.count), 1))]), (G(!0), K(U, null, B(e.items, (e) => (G(), K("button", {
					key: e.key,
					type: "button",
					role: "option",
					"aria-selected": e.key === r.value.selectedKey,
					"data-sba-action": "menu-choose",
					"data-choice": e.key
				}, [q("span", null, k(e.title), 1), q("small", null, k(e.subtitle), 1)], 8, sm))), 128))], 64))), 128)), r.value.groups.length ? X("", !0) : (G(), K("p", cm, " Ничего не найдено. Попробуй другое название или направление. "))])
			], 8, $p)
		], 64));
	}
}, um = {
	class: "sba-preview-tabs",
	role: "group",
	"aria-label": "Тип результата"
}, dm = ["aria-pressed"], fm = ["aria-pressed"], pm = ["value"], mm = {
	class: "sba-preview-count",
	id: "sba-preview-count"
}, hm = {
	id: "sba-transfer-confirm",
	"aria-live": "polite"
}, gm = {
	key: 0,
	class: "sba-transfer-preview"
}, _m = ["hidden"], vm = [
	["#sba-cards", "cards"],
	["#sba-snake-track", "snake"],
	["#sba-transition-hub-list", "transitions"],
	["#sba-energy-chart", "energy"],
	[
		".sba-preset-picker",
		"picker",
		lm
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
				let t = e, n = /* @__PURE__ */ Xt(t.api.snapshot()), r = Q(() => n.value?.result || {
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
				return z(() => window.addEventListener("sunoboom:arranger-updated", i)), mr(() => window.removeEventListener("sunoboom:arranger-updated", i)), (e, t) => (G(), K(U, null, [
					t[3] ||= q("div", { class: "sba-result-header" }, [
						q("span", { class: "sba-eyebrow" }, "ПРЕДПРОСМОТР"),
						q("h3", null, "Результат для Suno"),
						q("p", null, "Lyrics — теги по секциям; Style — короткое описание динамики.")
					], -1),
					q("div", um, [q("button", {
						type: "button",
						"data-sba-action": "tab",
						"data-tab": "lyrics",
						"aria-pressed": r.value.tab === "lyrics"
					}, "Теги Lyrics", 8, dm), q("button", {
						type: "button",
						"data-sba-action": "tab",
						"data-tab": "style",
						"aria-pressed": r.value.tab === "style"
					}, "Style", 8, fm)]),
					q("textarea", {
						id: "sba-preview",
						readonly: "",
						spellcheck: "false",
						"aria-label": "Готовые теги структуры песни",
						value: r.value.text
					}, null, 8, pm),
					q("div", mm, k(r.value.count), 1),
					t[4] ||= q("div", { class: "sba-result-actions" }, [q("button", {
						type: "button",
						class: "sba-btn sba-copy-btn",
						"data-sba-action": "copy"
					}, " Копировать результат "), q("button", {
						type: "button",
						class: "sba-btn sba-transfer-btn",
						"data-sba-action": "prepare-transfer"
					}, " Перенести стиль в Studio ")], -1),
					q("div", hm, [r.value.transfer ? (G(), K("div", gm, [
						t[0] ||= q("strong", null, "Предпросмотр переноса в Style", -1),
						t[1] ||= q("p", null, "Добавим описание аранжировки в дополнительные инструкции Suno Studio, не удаляя твои записи.", -1),
						q("code", null, k(r.value.transfer.candidate), 1),
						t[2] ||= q("div", { class: "sba-preview-buttons" }, [q("button", {
							type: "button",
							"data-sba-action": "transfer-accept"
						}, "Подтвердить перенос"), q("button", {
							type: "button",
							"data-sba-action": "transfer-cancel"
						}, "Отмена")], -1),
						q("small", null, "Итоговый промпт Studio: " + k(r.value.transfer.promptLength) + " / 1000 символов", 1)
					])) : X("", !0)]),
					q("p", {
						id: "sba-message",
						class: "sba-message",
						role: "status",
						"aria-live": "polite",
						hidden: !r.value.message
					}, k(r.value.message), 9, _m),
					t[5] ||= q("div", { class: "sba-help" }, [
						q("strong", null, "Как применять"),
						q("p", null, [
							Y("Теги секций вставляй в поле "),
							q("b", null, "Lyrics"),
							Y(" в Suno рядом с текстом песни. Краткую динамику можно добавить в "),
							q("b", null, "Style"),
							Y(" через Suno Studio после подтверждения.")
						]),
						q("p", null, "Ориентир длительности рассчитан по 4/4 и BPM Studio, это не гарантия точной длины аудио.")
					], -1)
				], 64));
			}
		}
	]
];
function ym({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ARRANGER, n = document.getElementById("app");
	if (!n || !t || typeof t.snapshot != "function") return () => {};
	let r = /* @__PURE__ */ new Map(), i = !1;
	function a() {
		if (!i) for (let [i, a, o = Xp] of vm) {
			let s = n.querySelector(i), c = r.get(a);
			if (c?.target === s || (c && (c.unmount(), r.delete(a)), !s || !t.snapshot())) continue;
			let l = e(s, o, o === Xp ? {
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
var bm = {
	key: 0,
	class: "sb-poetry-empty"
}, xm = { class: "sb-poetry-stats" }, Sm = { class: "sb-poetry-subline" }, Cm = { class: "sb-poetry-sections" }, wm = { class: "sb-poetry-stanzas" }, Tm = { class: "sb-poetry-stanza-name" }, Em = { class: "sb-poetry-stanza-data" }, Dm = { class: "sb-poetry-lines" }, Om = { class: "sb-poetry-line-main" }, km = { class: "sb-poetry-index" }, Am = { class: "sb-poetry-verse" }, jm = {
	class: "sb-poetry-syllable",
	title: "Оценка слогов"
}, Mm = ["title"], Nm = {
	key: 0,
	class: "sb-poetry-footnote"
}, Pm = {
	key: 1,
	class: "sb-poetry-words"
}, Fm = { class: "sb-poetry-tips" }, Im = {
	__name: "PoetryAnalysis",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Xt(t.api.analysis()), r = Q(() => n.value || {
			analyzed: !1,
			message: ""
		});
		function i() {
			let e = t.api.analysis();
			e && (n.value = e);
		}
		return z(() => window.addEventListener("sunoboom:poetry-updated", i)), mr(() => window.removeEventListener("sunoboom:poetry-updated", i)), (e, t) => r.value.analyzed ? (G(), K(U, { key: 1 }, [
			q("div", xm, [(G(!0), K(U, null, B(r.value.stats, (e) => (G(), K("div", {
				key: e.label,
				class: "sb-poetry-stat"
			}, [q("strong", null, k(e.value), 1), q("span", null, k(e.label), 1)]))), 128))]),
			q("p", Sm, " Диапазон: " + k(r.value.lower) + "–" + k(r.value.upper) + " слогов на строку · меток ударения: " + k(r.value.markedStress) + ". ", 1),
			q("div", Cm, [t[1] ||= q("h4", null, "Строфы и предполагаемая рифмовка", -1), q("div", wm, [(G(!0), K(U, null, B(r.value.stanzas, (e) => (G(), K("div", {
				key: e.id,
				class: "sb-poetry-stanza"
			}, [q("div", Tm, k(e.section) + " · строфа " + k(e.position), 1), q("div", Em, [
				Y(" Схема " + k(e.scheme) + " ", 1),
				t[0] ||= q("span", null, "·", -1),
				Y(" разброс " + k(e.spread) + " сл. ", 1)
			])]))), 128))])]),
			t[4] ||= q("div", { class: "sb-poetry-lines-head" }, [q("strong", null, "Построчный анализ"), q("span", null, "Слоги · рифма")], -1),
			q("div", Dm, [(G(!0), K(U, null, B(r.value.lines, (e) => (G(), K("div", {
				key: e.number,
				class: "sb-poetry-line"
			}, [
				q("div", Om, [q("span", km, k(e.number) + ".", 1), q("span", Am, k(e.text), 1)]),
				q("div", jm, [q("span", null, k(e.syllables) + " сл.", 1), q("i", { style: D({ width: e.width + "%" }) }, null, 4)]),
				q("span", {
					class: O(["sb-poetry-letter", { "sb-poetry-letter-match": e.rhyme }]),
					title: e.repeat ? "Совпадение последнего слова" : e.rhyme ? "Предполагаемая рифма" : "Метка окончания"
				}, k(e.mark), 11, Mm)
			]))), 128))]),
			r.value.rowCount > 120 ? (G(), K("p", Nm, " Показаны первые 120 строк из " + k(r.value.rowCount) + "; статистика рассчитана по всему тексту. ", 1)) : X("", !0),
			r.value.frequent.length ? (G(), K("div", Pm, [t[2] ||= q("strong", null, "Повторяющиеся слова:", -1), (G(!0), K(U, null, B(r.value.frequent, (e) => (G(), K("span", { key: e.word }, k(e.word) + " · " + k(e.count), 1))), 128))])) : X("", !0),
			q("div", Fm, [t[3] ||= q("h4", null, "На что обратить внимание", -1), q("ul", null, [(G(!0), K(U, null, B(r.value.suggestions, (e, t) => (G(), K("li", { key: t }, k(e), 1))), 128))])]),
			t[5] ||= q("p", { class: "sb-poetry-footnote" }, " Анализ ориентировочный: счёт гласных не равен точной метрической скансии, совпадение окончаний не гарантирует рифму, а вокальная удобность зависит от темпа и мелодии. Исходный текст автоматически не изменяется. ", -1)
		], 64)) : (G(), K("p", bm, k(r.value.message), 1));
	}
}, Lm = {
	key: 0,
	class: "sb-stress-ambig-clear"
}, Rm = { class: "sb-stress-ambig-heading" }, zm = { class: "sb-stress-ambig-variants" }, Bm = ["data-word", "data-variant"], Vm = {
	key: 0,
	class: "sb-poetry-small"
}, Hm = {
	__name: "PoetryAmbiguities",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Xt(t.api.ambiguities()), r = Q(() => n.value || {
			count: 0,
			words: [],
			total: 0
		});
		function i() {
			n.value = t.api.ambiguities();
		}
		return z(() => window.addEventListener("sunoboom:poetry-stress-updated", i)), mr(() => window.removeEventListener("sunoboom:poetry-stress-updated", i)), (e, t) => r.value.count ? (G(), K(U, { key: 1 }, [
			q("div", Rm, " 🔴 Требуют проверки: " + k(r.value.count) + " вхождений (" + k(r.value.total) + " разных слов). Нажми нужный вариант для каждого вхождения. ", 1),
			(G(!0), K(U, null, B(r.value.words, (e) => (G(), K("div", {
				key: e.key,
				class: "sb-stress-ambig-choice"
			}, [q("strong", null, k(e.key) + k(e.count > 1 ? " ×" + e.count : ""), 1), q("div", zm, [(G(!0), K(U, null, B(e.variants, (t) => (G(), K("button", {
				key: t,
				type: "button",
				"data-action": "sb-poetry-stress-choice",
				"data-word": e.key,
				"data-variant": t,
				title: "Указать ударение для следующего вхождения"
			}, k(t), 9, Bm))), 128))])]))), 128)),
			r.value.total > 30 ? (G(), K("p", Vm, " Показаны первые 30 разных слов; другие можно исправить вручную. ")) : X("", !0)
		], 64)) : (G(), K("p", Lm, " ✓ Все найденные неоднозначные слова проверены. "));
	}
};
// src/vue/poetry/legacyPoetryBridge.js
function Um({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_POETRY, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = !1, i = /* @__PURE__ */ new Map();
	function a() {
		if (r) return;
		let a = [[
			"analysis",
			"#sb-poetry-result",
			Im
		], [
			"ambiguities",
			"#sb-poetry-ambiguous-choices",
			Hm
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
var Wm = { class: "sb-vt-field" }, Gm = ["value"], Km = ["value"], qm = {
	class: "sb-vt-hint",
	id: "sb-vt-mode-hint"
}, Jm = { class: "sb-vt-grid" }, Ym = { class: "sb-vt-field" }, Xm = ["value"], Zm = ["value"], Qm = { class: "sb-vt-field" }, $m = ["value"], eh = ["value"], th = {
	key: 0,
	class: "sb-vt-field"
}, nh = ["value"], rh = ["value"], ih = { class: "sb-vt-intensity" }, ah = { class: "sb-vt-between" }, oh = { id: "sb-vt-intensity-label" }, sh = ["value"], ch = { class: "sb-vt-options" }, lh = ["data-vt-pref", "checked"], uh = {
	key: 1,
	class: "sb-vt-consent",
	id: "sb-vt-consent-row"
}, dh = { class: "sb-vt-buttons" }, fh = ["disabled"], ph = {
	id: "sb-vt-result",
	"aria-live": "polite"
}, mh = {
	key: 0,
	class: "sb-vt-draft"
}, hh = { class: "sb-vt-draft-head" }, gh = { class: "sb-vt-method" }, _h = { class: "sb-vt-section-list" }, vh = { class: "sb-vt-section-heading" }, yh = { class: "sb-vt-section-controls" }, bh = [
	"data-vt-preset",
	"value",
	"aria-label"
], xh = ["value"], Sh = [
	"data-vt-cue",
	"value",
	"aria-label"
], Ch = { class: "sb-vt-field" }, wh = ["value"], Th = {
	class: "sb-vt-small",
	id: "sb-vt-preview-state"
}, Eh = {
	__name: "PerformanceTags",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Xt(t.api.snapshot()), r = Q(() => n.value?.prefs || {}), i = Q(() => n.value?.draft || null), a = [
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
		return z(() => window.addEventListener("sunoboom:tags-updated", l)), mr(() => window.removeEventListener("sunoboom:tags-updated", l)), (e, t) => (G(), K(U, null, [
			t[12] ||= q("div", { class: "sb-vt-header" }, [q("span", { class: "sb-vt-symbol" }, "🎭"), q("div", null, [q("h3", null, "Генератор тегов исполнения"), q("p", null, "Вокальная драматургия по секциям. Без изменения слов песни; результат можно проверить и применить только вручную.")])], -1),
			q("div", Wm, [t[0] ||= q("label", { for: "sb-vt-mode" }, "Способ генерации", -1), q("select", {
				id: "sb-vt-mode",
				"data-vt-pref": "mode",
				value: r.value.mode
			}, [(G(), K(U, null, B(a, ([e, t]) => q("option", {
				key: e,
				value: e
			}, k(t), 9, Km)), 64))], 8, Gm)]),
			q("p", qm, k(n.value.modeHint), 1),
			q("div", Jm, [q("div", Ym, [t[1] ||= q("label", { for: "sb-vt-source" }, "Источник текста", -1), q("select", {
				id: "sb-vt-source",
				"data-vt-pref": "source",
				value: r.value.source
			}, [(G(), K(U, null, B(s, ([e, t]) => q("option", {
				key: e,
				value: e
			}, k(t), 9, Zm)), 64))], 8, Xm)]), q("div", Qm, [t[2] ||= q("label", { for: "sb-vt-density" }, "Детализация метатегов", -1), q("select", {
				id: "sb-vt-density",
				"data-vt-pref": "density",
				value: r.value.density
			}, [(G(), K(U, null, B(o, ([e, t]) => q("option", {
				key: e,
				value: e
			}, k(t), 9, eh)), 64))], 8, $m)])]),
			n.value.artists?.length ? (G(), K("div", th, [t[4] ||= q("label", { for: "sb-vt-artist" }, "Учесть «ДНК артиста» (необязательно)", -1), q("select", {
				id: "sb-vt-artist",
				"data-vt-pref": "artistId",
				value: r.value.artistId
			}, [t[3] ||= q("option", { value: "" }, "Без привязки к артисту", -1), (G(!0), K(U, null, B(n.value.artists, (e) => (G(), K("option", {
				key: e.id,
				value: e.id
			}, k(e.name), 9, rh))), 128))], 8, nh)])) : X("", !0),
			q("div", ih, [
				q("div", ah, [t[5] ||= q("label", { for: "sb-vt-intensity" }, "Максимальная интенсивность исполнения", -1), q("strong", oh, k(r.value.intensity) + " / 5", 1)]),
				q("input", {
					type: "range",
					id: "sb-vt-intensity",
					min: "1",
					max: "5",
					step: "1",
					value: r.value.intensity,
					"data-vt-pref": "intensity"
				}, null, 8, sh),
				t[6] ||= q("div", { class: "sb-vt-between sb-vt-scale" }, [q("span", null, "Сдержанная"), q("span", null, "Экспрессивная")], -1)
			]),
			q("div", ch, [(G(), K(U, null, B(c, ([e, t]) => q("label", { key: e }, [q("input", {
				type: "checkbox",
				"data-vt-pref": e,
				checked: r.value[e]
			}, null, 8, lh), Y(" " + k(t), 1)])), 64))]),
			n.value.hasEndpoint ? (G(), K("label", uh, [...t[7] ||= [q("input", {
				type: "checkbox",
				id: "sb-vt-consent"
			}, null, -1), Y(" Разрешаю отправить выбранный текст песни на защищённый сервер для анализа Gemini. ", -1)]])) : X("", !0),
			q("div", dh, [q("button", {
				type: "button",
				class: "btn primary",
				"data-action": "vt-generate",
				disabled: n.value.busy
			}, "✨ Создать предпросмотр", 8, fh), t[8] ||= q("span", { class: "sb-vt-note" }, "Никакого автоматического применения к Lyrics.", -1)]),
			q("div", {
				id: "sb-vt-notice",
				class: O(["sb-vt-notice", n.value.notice?.kind]),
				role: "status",
				"aria-live": "polite"
			}, k(n.value.notice?.text), 3),
			q("div", ph, [i.value ? (G(), K("div", mh, [
				q("div", hh, [q("h4", null, "Предпросмотр · " + k(i.value.sections.length) + " секций", 1), q("span", gh, k(i.value.method), 1)]),
				t[10] ||= q("p", { class: "sb-vt-small" }, " Проверь каждую секцию. Теги можно выбрать из списка или переписать вручную. Оригинальные строки песни остаются неизменными. ", -1),
				q("div", _h, [(G(!0), K(U, null, B(i.value.sections, (e, t) => (G(), K("div", {
					key: e.id,
					class: "sb-vt-section"
				}, [q("div", vh, [q("strong", null, k(e.label), 1), q("span", null, k(t + 1) + "/" + k(i.value.sections.length), 1)]), q("div", yh, [q("select", {
					"data-vt-preset": t,
					value: i.value.tags[t],
					"aria-label": "Готовые теги для " + e.label
				}, [(G(!0), K(U, null, B(n.value.presets, ([e, t]) => (G(), K("option", {
					key: e,
					value: e
				}, k(t), 9, xh))), 128))], 8, bh), q("input", {
					"data-vt-cue": t,
					value: i.value.tags[t],
					maxlength: "165",
					placeholder: "Например: Warm Emotional Vocals",
					"aria-label": "Тег исполнения " + e.label
				}, null, 8, Sh)])]))), 128))]),
				q("div", Ch, [t[9] ||= q("label", { for: "sb-vt-preview" }, " Готовый Lyrics — разрешено редактировать только инструкции, не слова песни ", -1), q("textarea", {
					id: "sb-vt-preview",
					spellcheck: "false",
					rows: "13",
					maxlength: "25000",
					value: i.value.preview
				}, null, 8, wh)]),
				q("p", Th, k(n.value.previewState), 1),
				t[11] ||= $i("<div class=\"sb-vt-draft-actions\"><button type=\"button\" class=\"btn primary\" data-action=\"vt-apply\"> ✓ Применить к Lyrics </button><button type=\"button\" class=\"btn ghost\" data-action=\"vt-copy\"> Копировать предпросмотр </button><button type=\"button\" class=\"btn ghost\" data-action=\"vt-refresh\"> Обновить предпросмотр </button><button type=\"button\" class=\"btn ghost\" data-action=\"vt-cancel\"> Отменить </button></div>", 1)
			])) : X("", !0)])
		], 64));
	}
};
// src/vue/poetry/legacyTagsBridge.js
function Dh({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_TAGS, n = document.getElementById("app");
	if (!t || !n || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vt-workbench");
		if (r?.target === a || (r &&= (r.unmount(), null), !a || !t.snapshot())) return;
		let o = e(a, Eh, { api: t });
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
var Oh = qs(), kh = /* @__PURE__ */ new WeakMap();
function Ah(e) {
	return typeof document > "u" ? null : typeof e == "string" ? document.querySelector(e) : e;
}
function $(e, t, n = {}) {
	let r = Ah(e);
	if (!r || r.nodeType !== 1 || !t) return null;
	let i = kh.get(r);
	i && i.unmount();
	let a = r.innerHTML, o = Mo(Ys, {
		component: t,
		componentProps: n
	});
	o.use(Oh);
	try {
		o.mount(r);
	} catch (e) {
		return r.innerHTML = a, console.warn("[SUNOBOOM] Vue mount failed; legacy navigation retained.", e), null;
	}
	return kh.set(r, o), () => {
		kh.get(r) === o && (o.unmount(), kh.delete(r));
	};
}
function jh(e) {
	let t = Ah(e);
	if (!t) return;
	let n = kh.get(t);
	n && (n.unmount(), kh.delete(t));
}
function Mh() {
	return ic({
		mountVueFeature: $,
		unmountVueFeature: jh
	});
}
function Nh() {
	return Uc({ mountVueFeature: $ });
}
function Ph() {
	return bu({ mountVueFeature: $ });
}
function Fh() {
	return cd({ mountVueFeature: $ });
}
function Ih() {
	return tf({ mountVueFeature: $ });
}
function Lh() {
	return Of({ mountVueFeature: $ });
}
function Rh() {
	return ym({ mountVueFeature: $ });
}
function zh() {
	return Um({ mountVueFeature: $ });
}
function Bh() {
	return Dh({ mountVueFeature: $ });
}
function Vh() {
	return js({ mountVueFeature: $ });
}
function Hh() {
	return Yo({ mountVueFeature: $ });
}
function Uh() {
	return ls({ mountVueFeature: $ });
}
export { $ as mountVueFeature, Nh as startLegacyAcademy, Rh as startLegacyArranger, Lh as startLegacyAuditor, Ph as startLegacyGenreDetail, Hh as startLegacyIdeaCollections, Vh as startLegacyIdeaEditor, Ih as startLegacyMixer, Mh as startLegacyNavigation, zh as startLegacyPoetry, Uh as startLegacyPromptCollection, Fh as startLegacyStudio, Bh as startLegacyTags, jh as unmountVueFeature };
