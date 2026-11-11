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
}, re = /-\w/g, w = /* @__PURE__ */ ne((e) => e.replace(re, (e) => e.slice(1).toUpperCase())), ie = /\B([A-Z])/g, T = /* @__PURE__ */ ne((e) => e.replace(ie, "-$1").toLowerCase()), E = /* @__PURE__ */ ne((e) => e.charAt(0).toUpperCase() + e.slice(1)), ae = /* @__PURE__ */ ne((e) => e ? `on${E(e)}` : ""), oe = (e, t) => !Object.is(e, t), se = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, ce = (e, t, n, r = !1) => {
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
function je(e, t = !1) {
	A && (A.active ? A.cleanups.push(e) : e());
}
var j, Me = /* @__PURE__ */ new WeakSet(), Ne = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, A && (A.active ? A.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Me.has(this) && (Me.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Le(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, Xe(this), Be(this);
		let e = j, t = Ke;
		j = this, Ke = !0;
		try {
			return this.fn();
		} finally {
			Ve(this), j = e, Ke = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) We(e);
			this.deps = this.depsTail = void 0, Xe(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Me.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		He(this) && this.run();
	}
	get dirty() {
		return He(this);
	}
}, Pe = 0, Fe, Ie;
function Le(e, t = !1) {
	e.flags |= 8, t ? (e.next = Ie, Ie = e) : (e.next = Fe, Fe = e);
}
function Re() {
	Pe++;
}
function ze() {
	if (--Pe > 0) return;
	if (Ie) {
		let e = Ie;
		for (Ie = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Fe;) {
		let t = Fe;
		for (Fe = void 0; t;) {
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
function Be(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ve(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), We(r), Ge(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function He(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Ue(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function Ue(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ze) || (e.globalVersion = Ze, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !He(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = j, r = Ke;
	j = e, Ke = !0;
	try {
		Be(e);
		let n = e.fn(e._value);
		(t.version === 0 || oe(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		j = n, Ke = r, Ve(e), e.flags &= -3;
	}
}
function We(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) We(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ge(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var Ke = !0, qe = [];
function Je() {
	qe.push(Ke), Ke = !1;
}
function Ye() {
	let e = qe.pop();
	Ke = e === void 0 || e;
}
function Xe(e) {
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
var Ze = 0, Qe = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, $e = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!j || !Ke || j === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== j) t = this.activeLink = new Qe(j, this), j.deps ? (t.prevDep = j.depsTail, j.depsTail.nextDep = t, j.depsTail = t) : j.deps = j.depsTail = t, et(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = j.depsTail, t.nextDep = void 0, j.depsTail.nextDep = t, j.depsTail = t, j.deps === t && (j.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, Ze++, this.notify(e);
	}
	notify(e) {
		Re();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			ze();
		}
	}
};
function et(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) et(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var tt = /* @__PURE__ */ new WeakMap(), nt = /* @__PURE__ */ Symbol(""), rt = /* @__PURE__ */ Symbol(""), it = /* @__PURE__ */ Symbol("");
function at(e, t, n) {
	if (Ke && j) {
		let t = tt.get(e);
		t || tt.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new $e()), r.map = t, r.key = n), r.track();
	}
}
function ot(e, t, n, r, i, a) {
	let o = tt.get(e);
	if (!o) {
		Ze++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Re(), t === "clear") o.forEach(s);
	else {
		let i = d(e), a = i && C(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === it || !_(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(it)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(nt)), f(e) && s(o.get(rt)));
				break;
			case "delete":
				i || (s(o.get(nt)), f(e) && s(o.get(rt)));
				break;
			case "set": f(e) && s(o.get(nt));
		}
	}
	ze();
}
function st(e, t) {
	let n = tt.get(e);
	return n && n.get(t);
}
function ct(e) {
	let t = /* @__PURE__ */ M(e);
	return t === e || (at(t, "iterate", it), /* @__PURE__ */ Jt(e)) ? t : /* @__PURE__ */ qt(e) ? /* @__PURE__ */ Kt(e) ? t.map((e) => Qt(Zt(e))) : t.map(Qt) : t.map(Zt);
}
function lt(e) {
	return at(e = /* @__PURE__ */ M(e), "iterate", it), e;
}
function ut(e, t) {
	return /* @__PURE__ */ qt(e) ? Qt(/* @__PURE__ */ Kt(e) ? Zt(t) : t) : Zt(t);
}
var dt = {
	__proto__: null,
	[Symbol.iterator]() {
		return ft(this, Symbol.iterator, (e) => ut(this, e));
	},
	concat(...e) {
		return ct(this).concat(...e.map((e) => d(e) ? ct(e) : e));
	},
	entries() {
		return ft(this, "entries", (e) => (e[1] = ut(this, e[1]), e));
	},
	every(e, t) {
		return ht(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return ht(this, "filter", e, t, (e) => e.map((e) => ut(this, e)), arguments);
	},
	find(e, t) {
		return ht(this, "find", e, t, (e) => ut(this, e), arguments);
	},
	findIndex(e, t) {
		return ht(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return ht(this, "findLast", e, t, (e) => ut(this, e), arguments);
	},
	findLastIndex(e, t) {
		return ht(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return ht(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return _t(this, "includes", e);
	},
	indexOf(...e) {
		return _t(this, "indexOf", e);
	},
	join(e) {
		return ct(this).join(e);
	},
	lastIndexOf(...e) {
		return _t(this, "lastIndexOf", e);
	},
	map(e, t) {
		return ht(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return vt(this, "pop");
	},
	push(...e) {
		return vt(this, "push", e);
	},
	reduce(e, ...t) {
		return gt(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return gt(this, "reduceRight", e, t);
	},
	shift() {
		return vt(this, "shift");
	},
	some(e, t) {
		return ht(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return vt(this, "splice", e);
	},
	toReversed() {
		return ct(this).toReversed();
	},
	toSorted(e) {
		return ct(this).toSorted(e);
	},
	toSpliced(...e) {
		return ct(this).toSpliced(...e);
	},
	unshift(...e) {
		return vt(this, "unshift", e);
	},
	values() {
		return ft(this, "values", (e) => ut(this, e));
	}
};
function ft(e, t, n) {
	let r = lt(e), i = r[t], a = i.call(r);
	if (r !== e && !/* @__PURE__ */ Jt(e)) {
		if (a[Symbol.toStringTag] === "Array Iterator") {
			let e = Object.create(Object.getPrototypeOf(a));
			return e.next = () => pt(a.next(), n), i !== mt[t] && Object.defineProperties(e, {
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
		a._next = a.next, a.next = () => pt(a._next(), n);
	}
	return a;
}
function pt(e, t) {
	return e.done || (e.value = t(e.value)), e;
}
var mt = Array.prototype;
function ht(e, t, n, r, i, a) {
	let o = lt(e), s = o !== e && !/* @__PURE__ */ Jt(e), c = o[t];
	if (c !== mt[t]) {
		let t = c.apply(e, a);
		return s ? Zt(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, ut(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function gt(e, t, n, r) {
	let i = lt(e), a = i !== e && !/* @__PURE__ */ Jt(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = ut(e, t)), n.call(this, t, ut(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? ut(e, c) : c;
}
function _t(e, t, n) {
	let r = /* @__PURE__ */ M(e);
	at(r, "iterate", it);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Yt(n[0]) ? (n[0] = /* @__PURE__ */ M(n[0]), r[t](...n)) : i;
}
function vt(e, t, n = []) {
	Je(), Re();
	let r = (/* @__PURE__ */ M(e))[t].apply(e, n);
	return ze(), Ye(), r;
}
var yt = /* @__PURE__ */ e("__proto__,__v_isRef,__isVue"), bt = /* @__PURE__ */ new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_));
function xt(e) {
	_(e) || (e = String(e));
	let t = /* @__PURE__ */ M(this);
	return at(t, "has", e), t.hasOwnProperty(e);
}
var St = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Bt : zt : i ? Rt : Lt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = d(e);
		if (!r) {
			let e;
			if (a && (e = dt[t])) return e;
			if (t === "hasOwnProperty") return xt;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ N(e) ? e : n);
		if ((_(t) ? bt.has(t) : yt(t)) || (r || at(e, "get", t), i)) return o;
		if (/* @__PURE__ */ N(o)) {
			let e = a && C(t) ? o : o.value;
			return r && v(e) ? /* @__PURE__ */ Wt(e) : e;
		}
		return v(o) ? r ? /* @__PURE__ */ Wt(o) : /* @__PURE__ */ Ht(o) : o;
	}
}, Ct = class extends St {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = d(e) && C(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ qt(i);
			if (!/* @__PURE__ */ Jt(n) && !/* @__PURE__ */ qt(n) && (i = /* @__PURE__ */ M(i), n = /* @__PURE__ */ M(n)), !a && /* @__PURE__ */ N(i) && !/* @__PURE__ */ N(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : u(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ N(e) ? e : r);
		return e === /* @__PURE__ */ M(r) && s && (o ? oe(n, i) && ot(e, "set", t, n, i) : ot(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = u(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && ot(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return _(t) && bt.has(t) || at(e, "has", t), n;
	}
	ownKeys(e) {
		return at(e, "iterate", d(e) ? "length" : nt), Reflect.ownKeys(e);
	}
}, wt = class extends St {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, Tt = /* @__PURE__ */ new Ct(), Et = /* @__PURE__ */ new wt(), Dt = /* @__PURE__ */ new Ct(!0), Ot = (e) => e, kt = (e) => Reflect.getPrototypeOf(e);
function At(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ M(i), o = f(a), c = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = i[e](...r), d = n ? Ot : t ? Qt : Zt;
		return !t && at(a, "iterate", l ? rt : nt), s(Object.create(u), { next() {
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
function jt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function Mt(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ M(r), a = /* @__PURE__ */ M(n);
			e || (oe(n, a) && at(i, "get", n), at(i, "get", a));
			let { has: o } = kt(i), s = t ? Ot : e ? Qt : Zt;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && at(/* @__PURE__ */ M(t), "iterate", nt), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ M(n), i = /* @__PURE__ */ M(t);
			return e || (oe(t, i) && at(r, "has", t), at(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ M(a), s = t ? Ot : e ? Qt : Zt;
			return !e && at(o, "iterate", nt), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return s(n, e ? {
		add: jt("add"),
		set: jt("set"),
		delete: jt("delete"),
		clear: jt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ M(this), r = kt(n), i = /* @__PURE__ */ M(e), a = !t && !/* @__PURE__ */ Jt(e) && !/* @__PURE__ */ qt(e) ? i : e;
			return r.has.call(n, a) || oe(e, a) && r.has.call(n, e) || oe(i, a) && r.has.call(n, i) || (n.add(a), ot(n, "add", a, a)), this;
		},
		set(e, n) {
			t || /* @__PURE__ */ Jt(n) || /* @__PURE__ */ qt(n) || (n = /* @__PURE__ */ M(n));
			let r = /* @__PURE__ */ M(this), { has: i, get: a } = kt(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ M(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? oe(n, s) && ot(r, "set", e, n, s) : ot(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ M(this), { has: n, get: r } = kt(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ M(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && ot(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ M(this), t = e.size !== 0, n = e.clear();
			return t && ot(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = At(r, e, t);
	}), n;
}
function Nt(e, t) {
	let n = Mt(e, t);
	return (r, i, a) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_isShallow" ? t : i === "__v_raw" ? r : Reflect.get(u(n, i) && i in r ? n : r, i, a);
}
var Pt = { get: /* @__PURE__ */ Nt(!1, !1) }, Ft = { get: /* @__PURE__ */ Nt(!1, !0) }, It = { get: /* @__PURE__ */ Nt(!0, !1) }, Lt = /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ new WeakMap(), zt = /* @__PURE__ */ new WeakMap(), Bt = /* @__PURE__ */ new WeakMap();
function Vt(e) {
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
function Ht(e) {
	return /* @__PURE__ */ qt(e) ? e : Gt(e, !1, Tt, Pt, Lt);
}
// @__NO_SIDE_EFFECTS__
function Ut(e) {
	return Gt(e, !1, Dt, Ft, Rt);
}
// @__NO_SIDE_EFFECTS__
function Wt(e) {
	return Gt(e, !0, Et, It, zt);
}
function Gt(e, t, n, r, i) {
	if (!v(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Vt(ee(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function Kt(e) {
	return /* @__PURE__ */ qt(e) ? /* @__PURE__ */ Kt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function qt(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Jt(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Yt(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function M(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ M(t) : e;
}
function Xt(e) {
	return !u(e, "__v_skip") && Object.isExtensible(e) && ce(e, "__v_skip", !0), e;
}
var Zt = (e) => v(e) ? /* @__PURE__ */ Ht(e) : e, Qt = (e) => v(e) ? /* @__PURE__ */ Wt(e) : e;
// @__NO_SIDE_EFFECTS__
function N(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function P(e) {
	return $t(e, !1);
}
// @__NO_SIDE_EFFECTS__
function F(e) {
	return $t(e, !0);
}
function $t(e, t) {
	return /* @__PURE__ */ N(e) ? e : new en(e, t);
}
var en = class {
	constructor(e, t) {
		this.dep = new $e(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ M(e), this._value = t ? e : Zt(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Jt(e) || /* @__PURE__ */ qt(e);
		e = n ? e : /* @__PURE__ */ M(e), oe(e, t) && (this._rawValue = e, this._value = n ? e : Zt(e), this.dep.trigger());
	}
};
function I(e) {
	return /* @__PURE__ */ N(e) ? e.value : e;
}
var tn = {
	get: (e, t, n) => t === "__v_raw" ? e : I(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ N(i) && !/* @__PURE__ */ N(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function nn(e) {
	return /* @__PURE__ */ Kt(e) ? e : new Proxy(e, tn);
}
// @__NO_SIDE_EFFECTS__
function rn(e) {
	let t = d(e) ? Array(e.length) : {};
	for (let n in e) t[n] = on(e, n);
	return t;
}
var an = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = _(t) ? t : String(t), this._raw = /* @__PURE__ */ M(e);
		let r = !0, i = e;
		if (!d(e) || _(this._key) || !C(this._key)) do
			r = !/* @__PURE__ */ Yt(i) || /* @__PURE__ */ Jt(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = I(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ N(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ N(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return st(this._raw, this._key);
	}
};
function on(e, t, n) {
	return new an(e, t, n);
}
var sn = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new $e(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ze - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && j !== this) return Le(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return Ue(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function cn(e, t, n = !1) {
	let r, i;
	return h(e) ? r = e : (r = e.get, i = e.set), new sn(r, i, n);
}
var ln = {}, un = /* @__PURE__ */ new WeakMap(), dn = void 0;
function fn(e, t = !1, n = dn) {
	if (n) {
		let t = un.get(n);
		t || un.set(n, t = []), t.push(e);
	}
}
function pn(e, n, i = t) {
	let { immediate: a, deep: o, once: s, scheduler: l, augmentJob: u, call: f } = i, p = (e) => o ? e : /* @__PURE__ */ Jt(e) || o === !1 || o === 0 ? mn(e, 1) : mn(e), m, g, _, v, y = !1, b = !1;
	if (/* @__PURE__ */ N(e) ? (g = () => e.value, y = /* @__PURE__ */ Jt(e)) : /* @__PURE__ */ Kt(e) ? (g = () => p(e), y = !0) : d(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ Kt(e) || /* @__PURE__ */ Jt(e)), g = () => e.map((e) => {
		if (/* @__PURE__ */ N(e)) return e.value;
		if (/* @__PURE__ */ Kt(e)) return p(e);
		if (h(e)) return f ? f(e, 2) : e();
	})) : g = h(e) ? n ? f ? () => f(e, 2) : e : () => {
		if (_) {
			Je();
			try {
				_();
			} finally {
				Ye();
			}
		}
		let t = dn;
		dn = m;
		try {
			return f ? f(e, 3, [v]) : e(v);
		} finally {
			dn = t;
		}
	} : r, n && o) {
		let e = g, t = o === !0 ? Infinity : o;
		g = () => mn(e(), t);
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
	let S = b ? Array(e.length).fill(ln) : ln, C = (e) => {
		if (m.flags & 1 && (m.dirty || e)) {
			if (n) {
				let t = m.run();
				if (e || o || y || (b ? t.some((e, t) => oe(e, S[t])) : oe(t, S))) {
					let e = dn;
					Je();
					try {
						_ && _(), dn = m;
						let e = [
							t,
							S === ln ? void 0 : b && S[0] === ln ? [] : S,
							v
						];
						S = t, f ? f(n, 3, e) : n(...e);
					} finally {
						dn = e, Ye();
					}
				}
			} else m.run();
		}
	};
	return u && u(C), m = new Ne(g), m.scheduler = l ? () => l(C, !1) : C, v = (e) => fn(e, !1, m), _ = m.onStop = () => {
		let e = un.get(m);
		if (e) {
			if (f) f(e, 4);
			else for (let t of e) t();
			un.delete(m);
		}
	}, n ? a ? C(!0) : S = m.run() : l ? l(C.bind(null, !0), !0) : m.run(), ee.pause = m.pause.bind(m), ee.resume = m.resume.bind(m), ee.stop = ee, ee;
}
function mn(e, t = Infinity, n) {
	if (t <= 0 || !v(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ N(e)) mn(e.value, t, n);
	else if (d(e)) for (let r = 0; r < e.length; r++) mn(e[r], t, n);
	else if (p(e) || f(e)) e.forEach((e) => {
		mn(e, t, n);
	});
	else if (S(e)) {
		for (let r in e) mn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && mn(e[r], t, n);
	}
	return e;
}
// node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function hn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		_n(e, t, n);
	}
}
function gn(e, t, n, r) {
	if (h(e)) {
		let i = hn(e, t, n, r);
		return i && y(i) && i.catch((e) => {
			_n(e, t, n, void 0, !0);
		}), i;
	}
	if (d(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(gn(e[a], t, n, r));
		return i;
	}
}
function _n(e, n, r, i = !0, a = !1) {
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
			Je(), hn(s, null, 10, [
				e,
				i,
				o
			]), Ye();
			return;
		}
	}
	vn(e, r, o, i, c);
}
function vn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var yn = [], bn = -1, xn = [], Sn = null, Cn = 0, wn = /* @__PURE__ */ Promise.resolve(), Tn = null;
function En(e) {
	let t = Tn || wn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function Dn(e) {
	let t = bn + 1, n = yn.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = yn[r], a = Fn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function On(e) {
	if (!(e.flags & 1)) {
		let t = Fn(e), n = yn[yn.length - 1];
		!n || !(e.flags & 2) && t >= Fn(n) ? yn.push(e) : yn.splice(Dn(t), 0, e), e.flags |= 1, kn();
	}
}
function kn() {
	Tn ||= wn.then(In);
}
function An(e) {
	if (!d(e)) Sn && e.id === -1 ? Sn.splice(Cn + 1, 0, e) : e.flags & 1 || (xn.push(e), e.flags |= 1);
	else for (let t = 0; t < e.length; t++) xn.push(e[t]);
	kn();
}
function jn(e, t, n, r = bn + 1) {
	for (; r < yn.length; r++) {
		let n = yn[r];
		if (n && n.flags & 2) {
			if (e && n.id !== e.uid || t !== void 0 && !(n.id >= t)) continue;
			yn.splice(r, 1), r = e ? r - 1 : bn, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
		}
	}
}
function Mn(e, t, n = 0) {
	if (xn.length) {
		let e = xn, r = 0;
		if (t) {
			e = [];
			for (let i = 0; i < xn.length; i++) {
				let a = xn[i];
				(a.i === void 0 ? t.has(a) : !a.i || a.i.uid < n) ? xn[r++] = a : e.push(a);
			}
		}
		let i = [...new Set(e)].sort((e, t) => Fn(e) - Fn(t));
		if (xn.length = r, Sn) {
			for (let e = 0; e < i.length; e++) Sn.push(i[e]);
			return;
		}
		for (Sn = i, Cn = 0; Cn < Sn.length; Cn++) {
			let e = Sn[Cn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		Sn = null, Cn = 0;
	}
}
var Nn = !1;
function Pn(e, t) {
	if (Nn) {
		e();
		return;
	}
	let n = t === void 0 ? void 0 : new Set(xn);
	e(), Nn = !0;
	try {
		jn(void 0, t), Mn(void 0, n, t);
	} finally {
		Nn = !1;
	}
}
var Fn = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function In(e) {
	try {
		for (bn = 0; bn < yn.length; bn++) {
			let e = yn[bn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), hn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; bn < yn.length; bn++) {
			let e = yn[bn];
			e && (e.flags &= -2);
		}
		bn = -1, yn.length = 0, Mn(e), Tn = null, (yn.length || xn.length) && In(e);
	}
}
var Ln = null, Rn = null;
function zn(e) {
	let t = Ln;
	return Ln = e, Rn = e && e.type.__scopeId || null, t;
}
function Bn(e, t = Ln, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && $i(-1);
		let i = zn(t), a = Yi.length, o;
		try {
			o = e(...n);
		} finally {
			for (let e = Yi.length; e > a; e--) Zi();
			zn(i), r._d && $i(1);
		}
		return o;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function L(e, n) {
	if (Ln === null) return e;
	let r = Fa(Ln), i = e.dirs ||= [];
	for (let e = 0; e < n.length; e++) {
		let [a, o, s, c = t] = n[e];
		a && (h(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && mn(o), i.push({
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
function Vn(e, t, n, r) {
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
		u && (Je(), gn(u, n, 8, [
			e.el,
			l,
			i,
			t
		]), Ye());
	}
}
function Hn(e, t) {
	if (ba) {
		let n = ba.provides, r = ba.parent && ba.parent.provides;
		r === n && (n = ba.provides = Object.create(r)), n[e] = t;
	}
}
function Un(e, t, n = !1) {
	let r = xa();
	if (r || ei) {
		let i = ei ? ei._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && h(t) ? t.call(r && r.proxy) : t;
	}
}
function Wn() {
	return !!(xa() || ei);
}
var Gn = /* @__PURE__ */ Symbol.for("v-scx"), Kn = () => Un(Gn);
function R(e, t, n) {
	return qn(e, t, n);
}
function qn(e, n, i = t) {
	let { immediate: a, deep: o, flush: c, once: l } = i, u = s({}, i), d = n && a || !n && c !== "post", f;
	if (Da) {
		if (c === "sync") {
			let e = Kn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = r, e.resume = r, e.pause = r, e;
		}
	}
	let p = ba;
	u.call = (e, t, n) => gn(e, p, t, n);
	let m = !1;
	c === "post" ? u.scheduler = (e) => {
		e.i = p, Mi(e, p && p.suspense);
	} : c !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : On(e);
	}), u.augmentJob = (e) => {
		n && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = pn(e, n, u);
	return Da && (f ? f.push(h) : d && h()), h;
}
function Jn(e, t, n) {
	let r = this.proxy, i = g(e) ? e.includes(".") ? Yn(r, e) : () => r[e] : e.bind(r, r), a;
	h(t) ? a = t : (a = t.handler, n = t);
	let o = wa(this), s = qn(i, a.bind(r), n);
	return o(), s;
}
function Yn(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Xn = /* @__PURE__ */ Symbol("_vte"), Zn = (e) => e.__isTeleport, Qn = /* @__PURE__ */ Symbol("_leaveCb");
function $n(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== qi) {
			t = n;
			break;
		}
	}
	return t;
}
function er(e) {
	if (!ur(e)) return Zn(e.type) && e.children ? $n(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && h(n.default)) return n.default();
	}
}
function tr(e, t) {
	if (e.shapeFlag & 6 && e.component) {
		e.transition = t;
		let n = e.component.subTree;
		tr(Zn(n.type) && er(n) || n, t);
	} else if (e.shapeFlag & 128) {
		let n = e.suspense;
		if (n) {
			let e = n.isHydrating ? n.pendingBranch : n.activeBranch;
			e && tr(e, t.clone(e));
		} else e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback);
	} else if (e.transition = t, e.type === V && d(e.children)) {
		let n = si(e.children, !1);
		n && tr(n, t);
	}
}
function nr(e) {
	if (e.component) return nr(e.component.subTree);
	if (e.type === V) {
		let t = d(e.children) && si(e.children, !1);
		return t ? nr(t) : void 0;
	}
	if (e.type !== qi) return e;
}
// @__NO_SIDE_EFFECTS__
function rr(e, t) {
	return h(e) ? /* @__PURE__ */ s({ name: e.name }, t, { setup: e }) : e;
}
function ir(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function ar(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var or = /* @__PURE__ */ new WeakMap();
function sr(e, n, r, a, o = !1) {
	if (d(e)) {
		e.forEach((e, t) => sr(e, n && (d(n) ? n[t] : n), r, a, o));
		return;
	}
	if (lr(a) && !o) {
		a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && sr(e, n, r, a.component.subTree);
		return;
	}
	let s = a.shapeFlag & 4 ? Fa(a.component) : a.el, l = o ? null : s, { i: f, r: p } = e, m = n && n.r, _ = f.refs === t ? f.refs = {} : f.refs, v = f.setupState, y = /* @__PURE__ */ M(v), b = v === t ? i : (e) => !ar(_, e) && u(y, e), x = (e, t) => !(t && ar(_, t));
	if (m != null && m !== p) {
		if (cr(n), g(m)) _[m] = null, b(m) && (v[m] = null);
		else if (/* @__PURE__ */ N(m)) {
			let e = n;
			x(m, e.k) && (m.value = null), e.k && (_[e.k] = null);
		}
	}
	if (h(p)) hn(p, f, 12, [l, _]);
	else {
		let t = g(p), n = /* @__PURE__ */ N(p);
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
					i(), or.delete(e);
				};
				t.id = -1, or.set(e, t), Mi(t, r);
			} else cr(e), i();
		}
	}
}
function cr(e) {
	let t = or.get(e);
	t && (t.flags |= 8, or.delete(e));
}
de().requestIdleCallback, de().cancelIdleCallback;
var lr = (e) => !!e.type.__asyncLoader, ur = (e) => e.type.__isKeepAlive;
function dr(e, t) {
	pr(e, "a", t);
}
function fr(e, t) {
	pr(e, "da", t);
}
function pr(e, t, n = ba) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (hr(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) ur(e.parent.vnode) && mr(r, t, n, e), e = e.parent;
	}
}
function mr(e, t, n, r) {
	let i = hr(t, e, r, !0), a = hr("um", () => c(r[t], i), n);
	a.flags = 16;
}
function hr(e, t, n = ba, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Je();
			let i = wa(n), a = gn(t, n, e, r);
			return i(), Ye(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var gr = (e) => (t, n = ba) => {
	Da && e !== "sp" || hr(e, (...e) => t(...e), n);
}, _r = gr("bm"), z = gr("m"), vr = gr("bu"), yr = gr("u"), br = gr("bum"), xr = gr("um"), Sr = gr("sp"), Cr = gr("rtg"), wr = gr("rtc");
function Tr(e, t = ba) {
	hr("ec", e, t);
}
var Er = "components", Dr = /* @__PURE__ */ Symbol.for("v-ndc");
function Or(e) {
	return g(e) ? kr(Er, e, !1) || e : e || Dr;
}
function kr(e, t, n = !0, r = !1) {
	let i = Ln || ba;
	if (i) {
		let n = i.type;
		if (e === Er) {
			let e = Ia(n, !1);
			if (e && (e === t || e === w(t) || e === E(w(t)))) return n;
		}
		let a = Ar(i[e] || n[e], t) || Ar(i.appContext[e], t);
		return !a && r ? n : a;
	}
}
function Ar(e, t) {
	return e && (e[t] || e[w(t)] || e[E(w(t))]);
}
function B(e, t, n, r) {
	let i, a = n && n[r], o = d(e);
	if (o || g(e)) {
		let n = o && /* @__PURE__ */ Kt(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ Jt(e), s = /* @__PURE__ */ qt(e), e = lt(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? Qt(Zt(e[n])) : Zt(e[n]) : e[n], n, void 0, a && a[n]);
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
var jr = (e) => e ? Ea(e) ? Fa(e) : jr(e.parent) : null, Mr = /* @__PURE__ */ s(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => jr(e.parent),
	$root: (e) => jr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Vr(e),
	$forceUpdate: (e) => e.f ||= () => {
		On(e.update);
	},
	$nextTick: (e) => e.n ||= En.bind(e.proxy),
	$watch: (e) => Jn.bind(e)
}), Nr = (e, n) => e !== t && !e.__isScriptSetup && u(e, n), Pr = {
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
			else if (Nr(i, n)) return s[n] = 1, i[n];
			else if (a !== t && u(a, n)) return s[n] = 2, a[n];
			else if (u(o, n)) return s[n] = 3, o[n];
			else if (r !== t && u(r, n)) return s[n] = 4, r[n];
			else Ir && (s[n] = 0);
		}
		let d = Mr[n], f, p;
		if (d) return n === "$attrs" && at(e.attrs, "get", ""), d(e);
		if ((f = c.__cssModules) && (f = f[n])) return f;
		if (r !== t && u(r, n)) return s[n] = 4, r[n];
		if (p = l.config.globalProperties, u(p, n)) return p[n];
	},
	set({ _: e }, n, r) {
		let { data: i, setupState: a, ctx: o } = e;
		return Nr(a, n) ? (a[n] = r, !0) : i !== t && u(i, n) ? (i[n] = r, !0) : u(e.props, n) || n[0] === "$" && n.slice(1) in e ? !1 : (o[n] = r, !0);
	},
	has({ _: { data: e, setupState: n, accessCache: r, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(r[c] || e !== t && c[0] !== "$" && u(e, c) || Nr(n, c) || u(o, c) || u(i, c) || u(Mr, c) || u(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? u(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function Fr(e) {
	return d(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var Ir = !0;
function Lr(e) {
	let t = Vr(e), n = e.proxy, i = e.ctx;
	Ir = !1, t.beforeCreate && zr(t.beforeCreate, e, "bc");
	let { data: a, computed: o, methods: s, watch: c, provide: l, inject: u, created: f, beforeMount: p, mounted: m, beforeUpdate: g, updated: _, activated: y, deactivated: b, beforeDestroy: x, beforeUnmount: ee, destroyed: S, unmounted: C, render: te, renderTracked: ne, renderTriggered: re, errorCaptured: w, serverPrefetch: ie, expose: T, inheritAttrs: E, components: ae, directives: oe, filters: se } = t;
	if (u && Rr(u, i, null), s) for (let e in s) {
		let t = s[e];
		h(t) && (i[e] = t.bind(n));
	}
	if (a) {
		let t = a.call(n, n);
		v(t) && (e.data = /* @__PURE__ */ Ht(t));
	}
	if (Ir = !0, o) for (let e in o) {
		let t = o[e], a = q({
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
	if (c) for (let e in c) Br(c[e], i, n, e);
	if (l) {
		let e = h(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Hn(t, e[t]);
		});
	}
	f && zr(f, e, "c");
	function ce(e, t) {
		d(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (ce(_r, p), ce(z, m), ce(vr, g), ce(yr, _), ce(dr, y), ce(fr, b), ce(Tr, w), ce(wr, ne), ce(Cr, re), ce(br, ee), ce(xr, C), ce(Sr, ie), d(T)) {
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
	te && e.render === r && (e.render = te), E != null && (e.inheritAttrs = E), ae && (e.components = ae), oe && (e.directives = oe), ie && ir(e);
}
function Rr(e, t, n = r) {
	d(e) && (e = Kr(e));
	for (let n in e) {
		let r = e[n], i;
		i = v(r) ? "default" in r ? Un(r.from || n, r.default, !0) : Un(r.from || n) : Un(r), /* @__PURE__ */ N(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function zr(e, t, n) {
	gn(d(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Br(e, t, n, r) {
	let i = r.includes(".") ? Yn(n, r) : () => n[r];
	if (g(e)) {
		let n = t[e];
		h(n) && R(i, n);
	} else if (h(e)) R(i, e.bind(n));
	else if (v(e)) {
		if (d(e)) e.forEach((e) => Br(e, t, n, r));
		else {
			let r = h(e.handler) ? e.handler.bind(n) : t[e.handler];
			h(r) && R(i, r, e);
		}
	}
}
function Vr(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => Hr(c, e, o, !0)), Hr(c, t, o)), v(t) && a.set(t, c), c;
}
function Hr(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && Hr(e, a, n, !0), i && i.forEach((t) => Hr(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = Ur[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var Ur = {
	data: Wr,
	props: Yr,
	emits: Yr,
	methods: Jr,
	computed: Jr,
	beforeCreate: qr,
	created: qr,
	beforeMount: qr,
	mounted: qr,
	beforeUpdate: qr,
	updated: qr,
	beforeDestroy: qr,
	beforeUnmount: qr,
	destroyed: qr,
	unmounted: qr,
	activated: qr,
	deactivated: qr,
	errorCaptured: qr,
	serverPrefetch: qr,
	components: Jr,
	directives: Jr,
	watch: Xr,
	provide: Wr,
	inject: Gr
};
function Wr(e, t) {
	return t ? e ? function() {
		return s(h(e) ? e.call(this, this) : e, h(t) ? t.call(this, this) : t);
	} : t : e;
}
function Gr(e, t) {
	return Jr(Kr(e), Kr(t));
}
function Kr(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function qr(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Jr(e, t) {
	return e ? s(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Yr(e, t) {
	return e ? d(e) && d(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : s(/* @__PURE__ */ Object.create(null), Fr(e), Fr(t ?? {})) : t;
}
function Xr(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = s(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = qr(e[r], t[r]);
	return n;
}
function Zr() {
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
var Qr = 0;
function $r(e, t) {
	return function(n, r = null) {
		h(n) || (n = s({}, n)), r != null && !v(r) && (r = null);
		let i = Zr(), a = /* @__PURE__ */ new WeakSet(), o = [], c = !1, l = i.app = {
			_uid: Qr++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: za,
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
					let u = l._ceVNode || oa(n, r);
					return u.appContext = i, s === !0 ? s = "svg" : s === !1 && (s = void 0), o && t ? t(u, a) : e(u, a, s), c = !0, l._container = a, a.__vue_app__ = l, Fa(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				c && (gn(o, l._instance, 16), e(null, l._container), delete l._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, l;
			},
			runWithContext(e) {
				let t = ei;
				ei = l;
				try {
					return e();
				} finally {
					ei = t;
				}
			}
		};
		return l;
	};
}
var ei = null, ti = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${w(t)}Modifiers`] || e[`${T(t)}Modifiers`];
function ni(e, n, ...r) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || t, a = r, o = n.startsWith("update:"), s = o && ti(i, n.slice(7));
	s && (s.trim && (a = r.map((e) => g(e) ? e.trim() : e)), s.number && (a = a.map(le)));
	let c, l = i[c = ae(n)] || i[c = ae(w(n))];
	!l && o && (l = i[c = ae(T(n))]), l && gn(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, gn(u, e, 6, a);
	}
}
var ri = /* @__PURE__ */ new WeakMap();
function ii(e, t, n = !1) {
	let r = n ? ri : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, c = !1;
	if (!h(e)) {
		let r = (e) => {
			let n = ii(e, t, !0);
			n && (c = !0, s(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !c ? (v(e) && r.set(e, null), null) : (d(a) ? a.forEach((e) => o[e] = null) : s(o, a), v(e) && r.set(e, o), o);
}
function ai(e, t) {
	return !e || !a(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), u(e, t[0].toLowerCase() + t.slice(1)) || u(e, T(t)) || u(e, t));
}
function oi(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: s, attrs: c, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = zn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = da(u.call(t, e, d, f, m, p, h)), y = c;
		} else {
			let e = t;
			v = da(e.length > 1 ? e(f, {
				attrs: c,
				slots: s,
				emit: l
			}) : e(f, null)), y = t.props ? c : ci(c);
		}
	} catch (t) {
		Yi.length = 0, _n(t, e, 1), v = oa(qi);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(o) && (y = li(y, a)), b = la(b, y, !1, !0));
	}
	return n.dirs && (b = la(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && tr(Zn(b.type) && er(b) || b, n.transition), v = b, zn(_), v;
}
function si(e, t = !0) {
	let n;
	for (let t = 0; t < e.length; t++) {
		let r = e[t];
		if (na(r)) {
			if (r.type !== qi || r.children === "v-if") {
				if (n) return;
				n = r;
			}
		} else return;
	}
	return n;
}
var ci = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || a(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, li = (e, t) => {
	let n = {};
	for (let r in e) o(r) && r.slice(9) in t || (n[r] = e[r]);
	return n;
};
function ui(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? di(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (fi(o, r, n) && !ai(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? !o || di(r, o, l) : !!o;
	return !1;
}
function di(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (!u(e, a) || fi(t, e, a) && !ai(n, a)) return !0;
	}
	return !1;
}
function fi(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && v(r) && v(i) ? !Ce(r, i) : r !== i;
}
function pi({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var mi = {}, hi = () => Object.create(mi), gi = (e) => Object.getPrototypeOf(e) === mi;
function _i(e, t, n, r = !1) {
	let i = {}, a = hi();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), yi(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	e.props = n ? r ? i : /* @__PURE__ */ Ut(i) : e.type.props ? i : a, e.attrs = a;
}
function vi(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ M(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (ai(e.emitsOptions, o)) continue;
				let d = t[o];
				if (c) {
					if (u(a, o)) d !== a[o] && (a[o] = d, l = !0);
					else {
						let t = w(o);
						i[t] = bi(c, s, t, d, e, !1);
					}
				} else d !== a[o] && (a[o] = d, l = !0);
			}
		}
	} else {
		yi(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) t && (u(t, a) || (r = T(a)) !== a && u(t, r)) || (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = bi(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) t && u(t, e) || (delete a[e], l = !0);
	}
	l && ot(e.attrs, "set", "");
}
function yi(e, n, r, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (n) for (let t in n) {
		if (te(t)) continue;
		let l = n[t], d;
		a && u(a, d = w(t)) ? !o || !o.includes(d) ? r[d] = l : (c ||= {})[d] = l : ai(e.emitsOptions, t) || t in i && l === i[t] || (i[t] = l, s = !0);
	}
	if (o) {
		let n = /* @__PURE__ */ M(r), i = c || t;
		for (let t = 0; t < o.length; t++) {
			let s = o[t];
			r[s] = bi(a, n, s, i[s], e, !u(i, s));
		}
	}
	return s;
}
function bi(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = u(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && h(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = wa(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === T(n)) && (r = !0));
	}
	return r;
}
var xi = /* @__PURE__ */ new WeakMap();
function Si(e, r, i = !1) {
	let a = i ? xi : r.propsCache, o = a.get(e);
	if (o) return o;
	let c = e.props, l = {}, f = [], p = !1;
	if (!h(e)) {
		let t = (e) => {
			p = !0;
			let [t, n] = Si(e, r, !0);
			s(l, t), n && f.push(...n);
		};
		!i && r.mixins.length && r.mixins.forEach(t), e.extends && t(e.extends), e.mixins && e.mixins.forEach(t);
	}
	if (!c && !p) return v(e) && a.set(e, n), n;
	if (d(c)) for (let e = 0; e < c.length; e++) {
		let n = w(c[e]);
		Ci(n) && (l[n] = t);
	}
	else if (c) for (let e in c) {
		let t = w(e);
		if (Ci(t)) {
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
function Ci(e) {
	return e[0] !== "$" && !te(e);
}
var wi = (e) => e === "_" || e === "_ctx" || e === "$stable", Ti = (e) => d(e) ? e.map(da) : [da(e)], Ei = (e, t, n) => {
	if (t._n) return t;
	let r = Bn((...e) => Ti(t(...e)), n);
	return r._c = !1, r;
}, Di = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (wi(n)) continue;
		let i = e[n];
		if (h(i)) t[n] = Ei(n, i, r);
		else if (i != null) {
			let e = Ti(i);
			t[n] = () => e;
		}
	}
}, Oi = (e, t) => {
	let n = Ti(t);
	e.slots.default = () => n;
}, ki = (e, t, n) => {
	for (let r in t) (n || !wi(r)) && (e[r] = t[r]);
}, Ai = (e, t, n) => {
	let r = e.slots = hi();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (ki(r, t, n), n && ce(r, "_", e, !0)) : Di(t, r);
	} else t && Oi(e, t);
}, ji = (e, n, r) => {
	let { vnode: i, slots: a } = e, o = !0, s = t;
	if (i.shapeFlag & 32) {
		let e = n._;
		e ? r && e === 1 ? o = !1 : ki(a, n, r) : (o = !n.$stable, Di(n, a)), s = n;
	} else n && (Oi(e, n), s = { default: 1 });
	if (o) for (let e in a) !wi(e) && s[e] == null && delete a[e];
}, Mi = Gi;
function Ni(e) {
	return Pi(e);
}
function Pi(e, i) {
	let a = de();
	a.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = r, insertStaticContent: _ } = e, v = (e, t, r, i = null, a = null, o = null, s = void 0, c = null, l = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !ra(e, t) && (i = be(e), O(e, a, o, !0), e = null), t.patchFlag === -2 && (l = !1, t.dynamicChildren = null), t.dynamicChildren && e && e.dynamicChildren && e.dynamicChildren.hasOnce && (t.dynamicChildren === n && (t.dynamicChildren = []), t.dynamicChildren.hasOnce = !0);
		let { type: u, ref: d, shapeFlag: f } = t;
		switch (u) {
			case Ki:
				y(e, t, r, i);
				break;
			case qi:
				b(e, t, r, i);
				break;
			case Ji:
				e ?? x(t, r, i, s);
				break;
			case V:
				ae(e, t, r, i, a, o, s, c, l);
				break;
			default: f & 1 ? C(e, t, r, i, a, o, s, c, l) : f & 6 ? oe(e, t, r, i, a, o, s, c, l) : (f & 64 || f & 128) && u.process(e, t, r, i, a, o, s, c, l, Se);
		}
		d != null && a ? sr(d, e && e.ref, o, t || e, !t) : d == null && e && e.ref != null && sr(e.ref, null, o, e, !0);
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
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && w(e.children, d, null, r, i, Fi(e, a), s, u), _ && Vn(e, null, r, "created"), re(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !te(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && ha(f, r, e);
		}
		_ && Vn(e, null, r, "beforeMount");
		let v = Li(i, g);
		v ? g.beforeEnter(d) : g && !g.persisted && (d[Wi] = !0), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && Mi(() => {
			try {
				f && ha(f, r, e), v && g.enter(d), _ && Vn(e, null, r, "mounted");
			} finally {}
		}, i);
	}, re = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || Ui(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				re(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, w = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) {
			let c = e[l] = s ? fa(e[l]) : da(e[l]);
			v(null, c, t, n, r, i, a, o, s);
		}
	}, ie = (e, n, r, i, a, o, s) => {
		let l = n.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = n;
		u |= e.patchFlag & 16;
		let m = e.props || t, h = n.props || t, g;
		if (r && Ii(r, !1), (g = h.onVnodeBeforeUpdate) && ha(g, r, n, e), f && Vn(n, e, r, "beforeUpdate"), r && Ii(r, !0), d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length) && (u = 0, s = !1, d = null), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? T(e.dynamicChildren, d, l, r, i, Fi(n, a), o) : s || fe(e, n, l, null, r, i, Fi(n, a), o, !1), u > 0) {
			if (u & 16) E(l, m, h, r, a);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, a), u & 4 && c(l, "style", m.style, h.style, a), u & 8) {
				let e = n.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let n = e[t], i = m[n], o = h[n];
					(o !== i || n === "value") && c(l, n, i, o, a, r);
				}
			}
			u & 1 && e.children !== n.children && p(l, n.children);
		} else !s && d == null && E(l, m, h, r, a);
		((g = h.onVnodeUpdated) || f) && Mi(() => {
			g && ha(g, r, n, e), f && Vn(n, e, r, "updated");
		}, i);
	}, T = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el || Hi(c), d = u && (c.type === V || !ra(c, l) || c.shapeFlag & 198) ? m(u) : n;
			v(c, l, d, null, r, i, a, o, !0);
		}
	}, E = (e, n, r, i, a) => {
		if (n !== r) {
			if (n !== t) for (let t in n) !te(t) && !(t in r) && c(e, t, n[t], null, a, i);
			for (let t in r) {
				if (te(t)) continue;
				let o = r[t], s = n[t];
				o !== s && t !== "value" && c(e, t, s, o, a, i);
			}
			"value" in r && c(e, "value", n.value, r.value, a);
		}
	}, ae = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), w(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (T(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && Ri(e, t, !0)) : fe(e, t, n, f, i, a, s, c, l);
	}, oe = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : ce(t, n, r, i, a, o, c) : le(e, t, c);
	}, ce = (e, t, n, r, i, a, o) => {
		let s = e.component = ya(e, r, i);
		if (ur(e) && (s.ctx.renderer = Se), Oa(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, ue, o, a), !e.el) {
				let r = s.subTree = oa(qi);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else ue(s, e, t, n, i, a, o);
	}, le = (e, t, n) => {
		let r = t.component = e.component;
		if (ui(e, t, n)) {
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
					let n = Bi(e);
					if (n) {
						t && (t.el = c.el, D(e, t, o)), n.asyncDep.then(() => {
							let t = () => {
								e.job.flags & 8 || (i && i.pendingBranch ? Mi(t, i) : l());
							};
							t.flags = 48, Mi(t, i);
						});
						return;
					}
				}
				let u = t, d;
				Ii(e, !1), t ? (t.el = c.el, D(e, t, o)) : t = c, n && se(n), (d = t.props && t.props.onVnodeBeforeUpdate) && ha(d, s, t, c), Ii(e, !0);
				let f = oi(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el || Hi(p)), be(p), e, i, a), t.el = f.el, u === null && pi(e, f.el), r && Mi(r, i), (d = t.props && t.props.onVnodeUpdated) && Mi(() => ha(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = lr(t);
				if (Ii(e, !1), l && se(l), !m && (o = c && c.onVnodeBeforeMount) && ha(o, d, t), Ii(e, !0), s && we) {
					let t = () => {
						e.subTree = oi(e), we(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = oi(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && Mi(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					Mi(() => ha(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && lr(d.vnode) && d.vnode.shapeFlag & 256) && e.a && Mi(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Ne(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => On(u), Ii(e, !0), l();
	}, D = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, vi(e, t.props, r, n), ji(e, t.children, n), Je(), jn(e), Ye();
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
		m & 8 ? (u & 16 && ye(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? me(l, d, n, r, i, a, o, s, c) : ye(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && w(d, n, r, i, a, o, s, c));
	}, pe = (e, t, r, i, a, o, s, c, l) => {
		e ||= n, t ||= n;
		let u = e.length, d = t.length, f = Math.min(u, d), p = 0;
		for (; p < f; p++) {
			let n = t[p] = l ? fa(t[p]) : da(t[p]);
			v(e[p], n, r, null, a, o, s, c, l);
		}
		u > d ? ye(e, a, o, !0, !1, f) : w(t, r, i, a, o, s, c, l, f);
	}, me = (e, t, r, i, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let n = e[u], i = t[u] = l ? fa(t[u]) : da(t[u]);
			if (ra(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let n = e[f], i = t[p] = l ? fa(t[p]) : da(t[p]);
			if (ra(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, n = e < d ? t[e].el : i;
				for (; u <= p;) v(null, t[u] = l ? fa(t[u]) : da(t[u]), r, n, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) O(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? fa(t[u]) : da(t[u]);
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
				else for (_ = h; _ <= p; _++) if (S[_ - h] === 0 && ra(n, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? O(n, a, o, !0) : (S[i - h] = u + 1, i >= ee ? ee = i : x = !0, v(n, t[i], r, null, a, o, s, c, l), y++);
			}
			let C = x ? zi(S) : n;
			for (_ = C.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, n = t[e], f = t[e + 1], p = e + 1 < d ? f.el || Hi(f) : i;
				S[u] === 0 ? v(null, n, r, p, a, o, s, c, l) : x && (_ < 0 || u !== C[_] ? he(n, r, p, 2) : _--);
			}
		}
	}, he = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) he(e.component.subTree, t, n, r);
		else if (d & 128) e.suspense.move(t, n, r);
		else if (d & 64) c.move(e, t, n, Se);
		else if (c === V) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) he(u[e], t, n, r);
			o(e.anchor, t, n);
		} else if (c === Ji) ee(e, t, n);
		else if (r !== 2 && d & 1 && l) {
			if (r === 0) l.persisted && !a[Qn] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), Mi(() => l.enter(a), i));
			else {
				let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
					e.ctx.isUnmounted ? s(a) : o(a, t, n);
				}, d = () => {
					let e = a._isLeaving || !!a[Qn];
					a._isLeaving && a[Qn](!0), l.persisted && !e ? u() : r(a, () => {
						u(), c && c();
					});
				};
				i ? i(a, u, d) : d();
			}
		} else o(a, t, n);
	}, O = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if ((d === -2 || l && l.hasOnce) && (i = !1), s != null && (Je(), sr(s, null, n, e, !0), Ye()), p == null || e.ctx && e.ctx !== t || (t.renderCache[p] = void 0), u & 256 && t.ctx.deactivate(e)) return;
		let h = u & 1 && f, g = !lr(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && ha(_, t, e), u & 6) ve(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Vn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, Se, r) : l && !l.hasOnce && (a !== V || d > 0 && d & 64) ? ye(l, t, n, !1, !0) : (a === V && d & 384 || !i && u & 16) && ye(c, t, n), r && ge(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && Mi(() => {
			_ && ha(_, t, e), h && Vn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, ge = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e, a = t === V;
		if (a && !i) {
			_e(n, r);
			return;
		}
		if (t === Ji) {
			S(e), i && !i.persisted && i.afterLeave && i.afterLeave();
			return;
		}
		let o = a ? nr(e) : e, c = () => {
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
		Vi(c), Vi(l), r && se(r), i.stop(), a ? (a.flags |= 8, O(o, e, t, n)) : o && (o.transition = e.vnode.transition, O(o, e, t, n)), s && Mi(s, t);
		let u = () => {
			e.isUnmounted = !0;
		};
		u.flags = 16, Mi(u, t);
	}, ye = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) O(e[o], t, n, r, i);
	}, be = (e) => {
		if (e.shapeFlag & 6) return be(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Xn];
		return n ? h(n) : t;
	}, xe = (e, t, n) => {
		Pn(() => {
			e == null ? t._vnode && O(t._vnode, null, null, !0) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e;
		}, e && t._vnode ? void 0 : e && e.component ? e.component.uid : va());
	}, Se = {
		p: v,
		um: O,
		m: he,
		r: ge,
		mt: ce,
		mc: w,
		pc: fe,
		pbc: T,
		n: be,
		o: e
	}, Ce, we;
	return i && ([Ce, we] = i(Se)), {
		render: xe,
		hydrate: Ce,
		createApp: $r(xe, Ce)
	};
}
function Fi({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ii({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Li(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ri(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (d(r) && d(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = fa(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Ri(t, a)), a.type === Ki && (a.patchFlag === -1 && (a = i[e] = fa(a)), a.el = t.el), a.type === qi && !a.el && (a.el = t.el);
	}
}
function zi(e) {
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
function Bi(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Bi(t);
}
function Vi(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Hi(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	if (t) return Hi(t.subTree);
	let n = e.suspense;
	return n && n.activeBranch ? Hi(n.activeBranch) : null;
}
var Ui = (e) => e.__isSuspense, Wi = /* @__PURE__ */ Symbol("_deferredEnter");
function Gi(e, t) {
	t && t.pendingBranch ? d(e) ? t.effects.push(...e) : t.effects.push(e) : An(e);
}
var V = /* @__PURE__ */ Symbol.for("v-fgt"), Ki = /* @__PURE__ */ Symbol.for("v-txt"), qi = /* @__PURE__ */ Symbol.for("v-cmt"), Ji = /* @__PURE__ */ Symbol.for("v-stc"), Yi = [], Xi = null;
function H(e = !1) {
	Yi.push(Xi = e ? null : []);
}
function Zi() {
	Yi.pop(), Xi = Yi[Yi.length - 1] || null;
}
var Qi = 1;
function $i(e, t = !1) {
	Qi += e, e < 0 && Xi && t && (Xi.hasOnce = !0);
}
function ea(e) {
	return e.dynamicChildren = Qi > 0 ? Xi || n : null, Zi(), Qi > 0 && Xi && Xi.push(e), e;
}
function U(e, t, n, r, i, a) {
	return ea(W(e, t, n, r, i, a, !0));
}
function ta(e, t, n, r, i) {
	return ea(oa(e, t, n, r, i, !0));
}
function na(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function ra(e, t) {
	return e.type === t.type && e.key === t.key;
}
var ia = ({ key: e }) => e ?? null, aa = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : g(e) || /* @__PURE__ */ N(e) || h(e) ? {
	i: Ln,
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
		key: t && ia(t),
		ref: t && aa(t),
		scopeId: Rn,
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
		ctx: Ln
	};
	return s ? (pa(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= g(n) ? 8 : 16), Qi > 0 && !o && Xi && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && Xi.push(c), c;
}
var oa = sa;
function sa(e, t = null, n = null, r = 0, i = null, a = !1) {
	if (e && e !== Dr || (e = qi), na(e)) {
		let r = la(e, t, !0);
		return n && pa(r, n), Qi > 0 && !a && Xi && (r.shapeFlag & 6 ? Xi[Xi.indexOf(e)] = r : Xi.push(r)), r.patchFlag = -2, r;
	}
	if (La(e) && (e = e.__vccOpts), t) {
		t = ca(t);
		let { class: e, style: n } = t;
		e && !g(e) && (t.class = O(e)), v(n) && (/* @__PURE__ */ Yt(n) && !d(n) && (n = s({}, n)), t.style = D(n));
	}
	let o = g(e) ? 1 : Ui(e) ? 128 : Zn(e) ? 64 : v(e) ? 4 : h(e) ? 2 : 0;
	return W(e, t, n, r, i, o, a, !0);
}
function ca(e) {
	return e ? /* @__PURE__ */ Yt(e) ? s({}, e) : gi(e) ? s({}, e[Ma] || e) : e : null;
}
function la(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? ma(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && ia(l),
		ref: t && t.ref ? n && a ? d(a) ? a.concat(aa(t)) : [a, aa(t)] : aa(t) : a,
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
		ssContent: e.ssContent && la(e.ssContent),
		ssFallback: e.ssFallback && la(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce,
		cacheIndex: e.cacheIndex
	};
	return c && r && tr(u, c.clone(u)), u;
}
function G(e = " ", t = 0) {
	return oa(Ki, null, e, t);
}
function ua(e, t) {
	let n = oa(Ji, null, e);
	return n.staticCount = t, n;
}
function K(e = "", t = !1) {
	return t ? (H(), ta(qi, null, e)) : oa(qi, null, e);
}
function da(e) {
	return e == null || typeof e == "boolean" ? oa(qi) : d(e) ? oa(V, null, e.slice()) : na(e) ? fa(e) : oa(Ki, null, String(e));
}
function fa(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : la(e);
}
function pa(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (d(t)) n = 16;
	else if (typeof t == "object") {
		if (r & 65) {
			let n = t.default;
			n && (n._c && (n._d = !1), pa(e, n()), n._c && (n._d = !0));
			return;
		}
		{
			n = 32;
			let r = t._;
			!r && !gi(t) ? t._ctx = Ln : r === 3 && Ln && (Ln.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
		}
	} else if (h(t)) {
		if (r & 65) {
			pa(e, { default: t });
			return;
		}
		t = {
			default: t,
			_ctx: Ln
		}, n = 32;
	} else t = String(t), r & 64 ? (n = 16, t = [G(t)]) : n = 8;
	e.children = t, e.shapeFlag |= n;
}
function ma(...e) {
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
function ha(e, t, n, r = null) {
	gn(e, t, 7, [n, r]);
}
var ga = /* @__PURE__ */ Zr(), _a = 0;
function va() {
	return _a;
}
function ya(e, n, r) {
	let i = e.type, a = (n ? n.appContext : e.appContext) || ga, o = {
		uid: _a++,
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
		propsOptions: Si(i, a),
		emitsOptions: ii(i, a),
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
	return o.ctx = { _: o }, o.root = n ? n.root : o, o.emit = ni.bind(null, o), e.ce && e.ce(o), o;
}
var ba = null, xa = () => ba || Ln, Sa, Ca;
{
	let e = de(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	Sa = t("__VUE_INSTANCE_SETTERS__", (e) => ba = e), Ca = t("__VUE_SSR_SETTERS__", (e) => Da = e);
}
var wa = (e) => {
	let t = ba;
	return Sa(e), e.scope.on(), () => {
		e.scope.off(), Sa(t);
	};
}, Ta = () => {
	ba && ba.scope.off(), Sa(null);
};
function Ea(e) {
	return e.vnode.shapeFlag & 4;
}
var Da = !1;
function Oa(e, t = !1, n = !1) {
	t && Ca(t);
	let { props: r, children: i } = e.vnode, a = Ea(e);
	_i(e, r, a, t), Ai(e, i, n || t);
	let o = a ? ka(e, t) : void 0;
	return t && Ca(!1), o;
}
function ka(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Pr);
	let { setup: r } = n;
	if (r) {
		Je();
		let n = e.setupContext = r.length > 1 ? Pa(e) : null, i = wa(e), a = hn(r, e, 0, [e.props, n]), o = y(a);
		if (Ye(), i(), (o || e.sp) && !lr(e) && ir(e), o) {
			if (a.then(Ta, Ta), t) return a.then((n) => {
				Ca(!0);
				try {
					Aa(e, n, t);
				} finally {
					Ca(!1);
				}
			}).catch((t) => {
				_n(t, e, 0, void 0, !0), e.ssrRender = (e, t) => t("<!---->");
			});
			e.asyncDep = a;
		} else Aa(e, a, t);
	} else ja(e, t);
}
function Aa(e, t, n) {
	h(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : v(t) && (e.setupState = nn(t)), ja(e, n);
}
function ja(e, t, n) {
	let i = e.type;
	e.render ||= i.render || r;
	{
		let t = wa(e);
		Je();
		try {
			Lr(e);
		} finally {
			Ye(), t();
		}
	}
}
var Ma = /* @__PURE__ */ Symbol(), Na = { get(e, t) {
	return at(e, "get", ""), t === Ma ? e : e[t];
} };
function Pa(e) {
	return {
		attrs: new Proxy(e.attrs, Na),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function Fa(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(nn(Xt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Mr) return Mr[n](e);
		},
		has(e, t) {
			return t in e || t in Mr;
		}
	}) : e.proxy;
}
function Ia(e, t = !0) {
	return h(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function La(e) {
	return h(e) && "__vccOpts" in e;
}
var q = (e, t) => /* @__PURE__ */ cn(e, t, Da);
function Ra(e, t, n) {
	try {
		$i(-1);
		let r = arguments.length;
		return r === 2 ? v(t) && !d(t) ? na(t) ? oa(e, null, [t]) : oa(e, t) : oa(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && na(n) && (n = [n]), oa(e, t, n));
	} finally {
		$i(1);
	}
}
var za = "3.5.45", Ba = void 0, Va = typeof window < "u" && window.trustedTypes;
if (Va) try {
	Ba = /* @__PURE__ */ Va.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var Ha = Ba ? (e) => Ba.createHTML(e) : (e) => e, Ua = "http://www.w3.org/2000/svg", Wa = "http://www.w3.org/1998/Math/MathML", Ga = typeof document < "u" ? document : null, Ka = Ga && /* @__PURE__ */ Ga.createElement("template"), qa = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? Ga.createElementNS(Ua, e) : t === "mathml" ? Ga.createElementNS(Wa, e) : n ? Ga.createElement(e, { is: n }) : Ga.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => Ga.createTextNode(e),
	createComment: (e) => Ga.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => Ga.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), i !== a && (i = i.nextSibling););
		else {
			Ka.innerHTML = Ha(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = Ka.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, Ja = /* @__PURE__ */ Symbol("_vtc");
function Ya(e, t, n) {
	let r = e[Ja];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var Xa = /* @__PURE__ */ Symbol("_vod"), Za = /* @__PURE__ */ Symbol("_vsh"), Qa = {
	name: "show",
	beforeMount(e, { value: t }, { transition: n }) {
		e[Xa] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : $a(e, t);
	},
	mounted(e, { value: t }, { transition: n }) {
		n && t && n.enter(e);
	},
	updated(e, { value: t, oldValue: n }, { transition: r }) {
		!t != !n && (r ? t ? (r.beforeEnter(e), $a(e, !0), r.enter(e)) : r.leave(e, () => {
			$a(e, !1);
		}) : $a(e, t));
	},
	beforeUnmount(e, { value: t }) {
		$a(e, t);
	}
};
function $a(e, t) {
	e.style.display = t ? e[Xa] : "none", e[Za] = !t;
}
var eo = /* @__PURE__ */ Symbol(""), to = /(?:^|;)\s*display\s*:/;
function no(e, t, n) {
	let r = e.style, i = g(n), a = !1;
	if (n && !i) {
		if (t) {
			if (g(t)) for (let e of t.split(";")) {
				let t = e.slice(0, e.indexOf(":")).trim();
				n[t] ?? io(r, t, "");
			}
			else for (let e in t) n[e] ?? io(r, e, "");
		}
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? io(r, i, "") : co(e, i, !g(t) && t ? t[i] : void 0, o) || io(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[eo];
			e && (n += ";" + e), r.cssText = n, a = to.test(n);
		}
	} else t && e.removeAttribute("style");
	Xa in e && (i && t === n || (e[Xa] = a ? r.display : ""), e[Za] && (r.display = "none"));
}
var ro = /\s*!important$/;
function io(e, t, n) {
	if (d(n)) n.forEach((n) => io(e, t, n));
	else if (n ??= "", t.startsWith("--")) ro.test(n) ? e.setProperty(t, n.replace(ro, ""), "important") : e.setProperty(t, n);
	else {
		let r = so(e, t);
		ro.test(n) ? e.setProperty(T(r), n.replace(ro, ""), "important") : e[r] = n;
	}
}
var ao = [
	"Webkit",
	"Moz",
	"ms"
], oo = {};
function so(e, t) {
	let n = oo[t];
	if (n) return n;
	let r = w(t);
	if (r !== "filter" && r in e) return oo[t] = r;
	r = E(r);
	for (let n = 0; n < ao.length; n++) {
		let i = ao[n] + r;
		if (i in e) return oo[t] = i;
	}
	return t;
}
function co(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && g(r) && n === r;
}
var lo = "http://www.w3.org/1999/xlink";
function uo(e, t, n, r, i, a = _e(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(lo, t.slice(6, t.length)) : e.setAttributeNS(lo, t, n) : n == null || a && !ve(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : _(n) ? String(n) : n);
}
function fo(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? Ha(n) : n);
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
function po(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function mo(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var ho = /* @__PURE__ */ Symbol("_vei");
function go(e, t, n, r, i = null) {
	let a = e[ho] || (e[ho] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = yo(t);
		r ? po(e, n, a[t] = Co(r, i), s) : o && (mo(e, n, o, s), a[t] = void 0);
	}
}
var _o = /(Once|Passive|Capture)$/, vo = /^on:?(?:Once|Passive|Capture)$/;
function yo(e) {
	let t, n;
	for (; (n = e.match(_o)) && !vo.test(e);) t ||= {}, e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
	return [e[2] === ":" ? e.slice(3) : T(e.slice(2)), t];
}
var bo = 0, xo = /* @__PURE__ */ Promise.resolve(), So = () => bo ||= (xo.then(() => bo = 0), Date.now());
function Co(e, t) {
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
				e && gn(e, t, 5, a);
			}
		} else gn(r, t, 5, [e]);
	};
	return n.value = e, n.attached = So(), n;
}
var wo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, To = (e, t, n, r, i, s) => {
	let c = i === "svg";
	t === "class" ? Ya(e, r, c) : t === "style" ? no(e, n, r) : a(t) ? o(t) || go(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), 1) : t[0] === "^" ? (t = t.slice(1), 0) : Eo(e, t, r, c)) ? (fo(e, t, r), e.tagName.includes("-") || t !== "value" && t !== "checked" && t !== "selected" || uo(e, t, r, c, s, t !== "value")) : e._isVueCE && (Do(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !g(r))) ? fo(e, w(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), uo(e, t, r, c));
};
function Eo(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && wo(t) && h(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return wo(t) && g(n) ? !1 : t in e;
}
function Do(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = w(t);
	return Array.isArray(n) ? n.some((e) => w(e) === r) : Object.keys(n).some((e) => w(e) === r);
}
var Oo = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return d(t) ? (e) => se(t, e) : t;
};
function ko(e) {
	e.target.composing = !0;
}
function Ao(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var jo = /* @__PURE__ */ Symbol("_assign"), Mo = /* @__PURE__ */ Symbol("_initialValue");
function No(e, t, n) {
	return t && (e = e.trim()), n && (e = le(e)), e;
}
var J = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e.parentNode && (e.type === "text" ? e[Mo] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Mo] = e.defaultValue.replace(/\r\n?/g, "\n"))), e[jo] = Oo(i);
		let a = r || i.props && i.props.type === "number";
		po(e, t ? "change" : "input", (t) => {
			t.target.composing || e[jo](No(e.value, n, a));
		}), (n || a) && po(e, "change", () => {
			e.value = No(e.value, n, a);
		}), t || (po(e, "compositionstart", ko), po(e, "compositionend", Ao), po(e, "change", Ao));
	},
	mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
		let i = t ?? "", a = e[Mo];
		delete e[Mo], a !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== a ? e[jo](No(e.value, n, r)) : e.value = i;
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[jo] = Oo(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? le(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, Po = {
	deep: !0,
	created(e, t, n) {
		e[jo] = Oo(n), po(e, "change", () => {
			let t = e._modelValue, n = zo(e), r = e.checked, i = e[jo];
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
			} else i(Bo(e, r));
		});
	},
	mounted: Fo,
	beforeUpdate(e, t, n) {
		e[jo] = Oo(n), Fo(e, t, n);
	}
};
function Fo(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (d(t)) i = we(t, r.props.value) > -1;
	else if (p(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = Ce(t, Bo(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var Io = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		e._modelValue = t, po(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? le(zo(e)) : zo(e)), r = e.multiple, i = r ? p(e._modelValue) ? new Set(t) : t : t[0], a = e._pendingValue = [r, r ? d(i) ? t.slice() : t : i];
			try {
				e[jo](i);
			} finally {
				En(() => {
					e._pendingValue === a && (e._pendingValue = void 0);
				});
			}
		}), e[jo] = Oo(r);
	},
	mounted(e, { value: t, modifiers: { number: n } }) {
		Ro(e, t, n);
	},
	beforeUpdate(e, { value: t }, n) {
		e._modelValue = t, e[jo] = Oo(n);
	},
	updated(e, { value: t, modifiers: { number: n } }) {
		let r = e._pendingValue;
		e._pendingValue = void 0, r && r[0] === e.multiple && Lo(t, r[1], r[0]) || Ro(e, t, n);
	}
};
function Lo(e, t, n) {
	if (!n || d(e)) return Ce(e, t);
	if (p(e)) {
		if (e.size !== t.length) return !1;
		for (let n of t) if (!e.has(n)) return !1;
		return !0;
	}
	return !1;
}
function Ro(e, t, n = !1) {
	let r = e.multiple, i = d(t);
	if (!r || i || p(t)) {
		for (let a = 0, o = e.options.length; a < o; a++) {
			let o = e.options[a], s = zo(o);
			if (r) {
				if (i) {
					let e = typeof s;
					o.selected = e === "string" || e === "number" ? t.some((e) => String(e) === String(s)) : we(t, s) > -1;
				} else o.selected = t.has(s) || n && typeof s == "string" && t.has(le(s));
			} else if (Ce(zo(o), t)) {
				e.selectedIndex !== a && (e.selectedIndex = a);
				return;
			}
		}
		!r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function zo(e) {
	return "_value" in e ? e._value : e.value;
}
function Bo(e, t) {
	let n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t;
}
var Vo = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], Ho = {
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
	exact: (e, t) => Vo.some((n) => e[`${n}Key`] && !t.includes(n))
}, Uo = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = Ho[t[e]];
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
		let r = T(n.key);
		if (t.some((e) => e === r || Wo[e] === r)) return e(n);
	}));
}, Ko = /* @__PURE__ */ s({ patchProp: To }, qa), qo;
function Jo() {
	return qo ||= Ni(Ko);
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
// node_modules/pinia/dist/pinia.mjs
var Qo = typeof window < "u", $o, es = (e) => $o = e, ts = Symbol();
function ns(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var rs;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(rs ||= {});
var is = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function as(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function os(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		ds(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function ss(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function cs(e) {
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
var ls = typeof navigator == "object" ? navigator : { userAgent: "" }, us = /Macintosh/.test(ls.userAgent) && /AppleWebKit/.test(ls.userAgent) && !/Safari/.test(ls.userAgent), ds = Qo ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !us ? fs : "msSaveOrOpenBlob" in ls ? ps : ms : () => {};
function fs(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? cs(r) : ss(r.href) ? os(e, t, n) : (r.target = "_blank", cs(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		cs(r);
	}, 0));
}
function ps(e, t = "download", n) {
	if (typeof e == "string") {
		if (ss(e)) os(e, t, n);
		else {
			let t = document.createElement("a");
			t.href = e, t.target = "_blank", setTimeout(function() {
				cs(t);
			});
		}
	} else navigator.msSaveOrOpenBlob(as(e, n), t);
}
function ms(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return os(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(is.HTMLElement)) || "safari" in is, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || us) && typeof FileReader < "u") {
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
var { assign: hs } = Object;
function gs() {
	let e = ke(!0), t = e.run(() => /* @__PURE__ */ P({})), n = [], r = [], i = Xt({
		install(e) {
			es(i), i._a = e, e.provide(ts, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
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
var _s = () => {};
function vs(e, t, n, r = _s) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && Ae() && je(i), i;
}
function ys(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var bs = (e) => e(), xs = Symbol(), Ss = Symbol();
function Cs(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!t.hasOwnProperty(n)) continue;
		let r = t[n], i = e[n];
		e[n] = ns(i) && ns(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ N(r) && !/* @__PURE__ */ Kt(r) ? Cs(i, r) : r;
	}
	return e;
}
var ws = Symbol();
function Ts(e) {
	return !ns(e) || !Object.prototype.hasOwnProperty.call(e, ws);
}
var { assign: Es } = Object;
function Ds(e) {
	return !!(/* @__PURE__ */ N(e) && e.effect);
}
function Os(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || 
		/* istanbul ignore if */
		(n.state.value[e] = i ? i() : {}), Es(/* @__PURE__ */ rn(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = Xt(q(() => {
			es(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return c = ks(e, l, t, n, r, !0), c;
}
function ks(e, t, n = {}, r, i, a) {
	let o, s = Es({ actions: {} }, n), c = { deep: !0 }, l, u, d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p, m = r.state.value[e];
	!a && !m && 
	/* istanbul ignore if */
	(r.state.value[e] = {});
	let h;
	function g(t) {
		let n;
		l = u = !1, typeof t == "function" ? (t(r.state.value[e]), n = {
			type: rs.patchFunction,
			storeId: e,
			events: p
		}) : (Cs(r.state.value[e], t), n = {
			type: rs.patchObject,
			payload: t,
			storeId: e,
			events: p
		});
		let i = h = Symbol();
		En().then(() => {
			h === i && (l = !0);
		}), u = !0, ys(d, n, r.state.value[e]);
	}
	let _ = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			Es(e, t);
		});
	} : _s;
	function v() {
		o.stop(), d.clear(), f.clear(), r._s.delete(e);
	}
	let y = (t, n = "") => {
		if (xs in t) return t[Ss] = n, t;
		let i = function() {
			es(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			ys(f, {
				args: n,
				name: i[Ss],
				store: b,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : b, n);
			} catch (e) {
				throw ys(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (ys(a, e), e)).catch((e) => (ys(o, e), Promise.reject(e))) : (ys(a, l), l);
		};
		return i[xs] = !0, i[Ss] = n, i;
	}, b = /* @__PURE__ */ Ht({
		_p: r,
		$id: e,
		$onAction: vs.bind(null, f),
		$patch: g,
		$reset: _,
		$subscribe(t, n = {}) {
			let i = vs(d, t, n.detached, () => a()), a = o.run(() => R(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? u : l) && t({
					storeId: e,
					type: rs.direct,
					events: p
				}, r);
			}, Es({}, c, n)));
			return i;
		},
		$dispose: v
	});
	r._s.set(e, b);
	let x = (r._a && r._a.runWithContext || bs)(() => r._e.run(() => (o = ke()).run(() => t({ action: y }))));
	for (let t in x) {
		let n = x[t];
		/* @__PURE__ */ N(n) && !Ds(n) || /* @__PURE__ */ Kt(n) ? a || (m && Ts(n) && (/* @__PURE__ */ N(n) ? n.value = m[t] : Cs(n, m[t])), r.state.value[e][t] = n) : typeof n == "function" && (x[t] = y(n, t), s.actions[t] = n);
	}
	return Es(b, x), Es(/* @__PURE__ */ M(b), x), Object.defineProperty(b, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			g((t) => {
				Es(t, e);
			});
		}
	}), r._p.forEach((e) => {
		Es(b, o.run(() => e({
			store: b,
			app: r._a,
			pinia: r,
			options: s
		})));
	}), m && a && n.hydrate && n.hydrate(b.$state, m), l = !0, u = !0, b;
}
function As(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function a(n, a) {
		let o = Wn();
		return n ||= o ? Un(ts, null) : null, n && es(n), n = $o, n._s.has(e) || (i ? ks(e, t, r, n) : Os(e, r, n)), n._s.get(e);
	}
	return a.$id = e, a;
}
// src/vue/navigation/nav-model.js
var js = /* @__PURE__ */ new Set([
	"projects",
	"saved",
	"myideas",
	"myprompts",
	"events",
	"tracks",
	"artists"
]);
function Ms(e) {
	return e === "detail" ? "catalog" : js.has(e) ? "account" : e;
}
function Ns(e) {
	let t = Ms(e?.active), n = /* @__PURE__ */ new Set(), r = !1, i = [];
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
var Ps = typeof document < "u";
function Fs(e) {
	return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Is(e) {
	return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && Fs(e.default);
}
var Y = Object.assign;
function Ls(e, t) {
	let n = {};
	for (let r in t) {
		let i = t[r];
		n[r] = zs(i) ? i.map(e) : e(i);
	}
	return n;
}
var Rs = () => {}, zs = Array.isArray;
function Bs(e, t) {
	let n = {};
	for (let r in e) n[r] = r in t ? t[r] : e[r];
	return n;
}
var Vs = /#/g, Hs = /&/g, Us = /\//g, Ws = /=/g, Gs = /\?/g, Ks = /\+/g, qs = /%5B/g, Js = /%5D/g, Ys = /%5E/g, Xs = /%60/g, Zs = /%7B/g, Qs = /%7C/g, $s = /%7D/g, ec = /%20/g;
function tc(e) {
	return e == null ? "" : encodeURI("" + e).replace(Qs, "|").replace(qs, "[").replace(Js, "]");
}
function nc(e) {
	return tc(e).replace(Zs, "{").replace($s, "}").replace(Ys, "^");
}
function rc(e) {
	return tc(e).replace(Ks, "%2B").replace(ec, "+").replace(Vs, "%23").replace(Hs, "%26").replace(Xs, "`").replace(Zs, "{").replace($s, "}").replace(Ys, "^");
}
function ic(e) {
	return rc(e).replace(Ws, "%3D");
}
function ac(e) {
	return tc(e).replace(Vs, "%23").replace(Gs, "%3F");
}
function oc(e) {
	return ac(e).replace(Us, "%2F");
}
function sc(e) {
	if (e == null) return null;
	try {
		return decodeURIComponent("" + e);
	} catch {}
	return "" + e;
}
var cc = /\/$/, lc = (e) => e.replace(cc, "");
function uc(e, t, n = "/") {
	let r, i = {}, a = "", o = "", s = t.indexOf("#"), c = t.indexOf("?");
	return c = s >= 0 && c > s ? -1 : c, c >= 0 && (r = t.slice(0, c), a = t.slice(c, s > 0 ? s : t.length), i = e(a.slice(1))), s >= 0 && (r ||= t.slice(0, s), o = t.slice(s, t.length)), r = _c(r ?? t, n), {
		fullPath: r + a + o,
		path: r,
		query: i,
		hash: sc(o)
	};
}
function dc(e, t) {
	let n = t.query ? e(t.query) : "";
	return t.path + (n && "?") + n + (t.hash || "");
}
function fc(e, t, n) {
	let r = t.matched.length - 1, i = n.matched.length - 1;
	return r > -1 && r === i && pc(t.matched[r], n.matched[i]) && mc(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function pc(e, t) {
	return (e.aliasOf || e) === (t.aliasOf || t);
}
function mc(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (var n in e) if (!hc(e[n], t[n])) return !1;
	return !0;
}
function hc(e, t) {
	return zs(e) ? gc(e, t) : zs(t) ? gc(t, e) : e?.valueOf() === t?.valueOf();
}
function gc(e, t) {
	return zs(t) ? e.length === t.length && e.every((e, n) => e === t[n]) : e.length === 1 && e[0] === t;
}
function _c(e, t) {
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
var vc = {
	path: "/",
	name: void 0,
	params: {},
	query: {},
	hash: "",
	fullPath: "/",
	matched: [],
	meta: {},
	redirectedFrom: void 0
}, yc = /* @__PURE__ */ function(e) {
	return e.pop = "pop", e.push = "push", e;
}({}), bc = /* @__PURE__ */ function(e) {
	return e.back = "back", e.forward = "forward", e.unknown = "", e;
}({});
function xc(e) {
	if (!e) {
		if (Ps) {
			let t = document.querySelector("base");
			e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
		} else e = "/";
	}
	return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), lc(e);
}
var Sc = /^[^#]+#/;
function Cc(e, t) {
	return e.replace(Sc, "#") + t;
}
function wc(e, t) {
	let n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
	return {
		behavior: t.behavior,
		left: r.left - n.left - (t.left || 0),
		top: r.top - n.top - (t.top || 0)
	};
}
var Tc = () => ({
	left: window.scrollX,
	top: window.scrollY
});
function Ec(e) {
	let t;
	if ("el" in e) {
		let n = e.el, r = typeof n == "string" && n.startsWith("#"), i = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
		if (!i) return;
		t = wc(i, e);
	} else t = e;
	"scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left == null ? window.scrollX : t.left, t.top == null ? window.scrollY : t.top);
}
function Dc(e, t) {
	return (history.state ? history.state.position - t : -1) + e;
}
var Oc = /* @__PURE__ */ new Map();
function kc(e, t) {
	Oc.set(e, t);
}
function Ac(e) {
	let t = Oc.get(e);
	return Oc.delete(e), t;
}
function jc(e) {
	return typeof e == "string" || e && typeof e == "object";
}
function Mc(e) {
	return typeof e == "string" || typeof e == "symbol";
}
var X = /* @__PURE__ */ function(e) {
	return e[e.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", e[e.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", e[e.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", e[e.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", e[e.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", e;
}({}), Nc = Symbol("");
X.MATCHER_NOT_FOUND, X.NAVIGATION_GUARD_REDIRECT, X.NAVIGATION_ABORTED, X.NAVIGATION_CANCELLED, X.NAVIGATION_DUPLICATED;
function Pc(e, t) {
	return Y(/* @__PURE__ */ Error(), {
		type: e,
		[Nc]: !0
	}, t);
}
function Fc(e, t) {
	return e instanceof Error && Nc in e && (t == null || !!(e.type & t));
}
function Ic(e) {
	let t = {};
	if (e === "" || e === "?") return t;
	let n = (e[0] === "?" ? e.slice(1) : e).split("&");
	for (let e = 0; e < n.length; ++e) {
		let r = n[e].replace(Ks, " "), i = r.indexOf("="), a = sc(i < 0 ? r : r.slice(0, i)), o = i < 0 ? null : sc(r.slice(i + 1));
		if (a in t) {
			let e = t[a];
			zs(e) || (e = t[a] = [e]), e.push(o);
		} else t[a] = o;
	}
	return t;
}
function Lc(e) {
	let t = "";
	for (let n in e) {
		let r = e[n];
		n = ic(n), r == null ? r !== void 0 && (t += (t.length ? "&" : "") + n) : (zs(r) ? r.map((e) => e && rc(e)) : [r && rc(r)]).forEach((e) => {
			e !== void 0 && (t += (t.length ? "&" : "") + n, e != null && (t += "=" + e));
		});
	}
	return t;
}
function Rc(e) {
	let t = {};
	for (let n in e) {
		let r = e[n];
		r !== void 0 && (t[n] = zs(r) ? r.map((e) => e == null ? null : "" + e) : r == null ? r : "" + r);
	}
	return t;
}
var zc = Symbol(""), Bc = Symbol(""), Vc = Symbol(""), Hc = Symbol(""), Uc = Symbol("");
function Wc() {
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
function Gc(e, t, n, r, i, a = (e) => e()) {
	let o = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
	return () => new Promise((s, c) => {
		let l = (e) => {
			e === !1 ? c(Pc(X.NAVIGATION_ABORTED, {
				from: n,
				to: t
			})) : e instanceof Error ? c(e) : jc(e) ? c(Pc(X.NAVIGATION_GUARD_REDIRECT, {
				from: t,
				to: e
			})) : (o && r.enterCallbacks[i] === o && typeof e == "function" && o.push(e), s());
		}, u = a(() => e.call(r && r.instances[i], t, n, l)), d = Promise.resolve(u);
		e.length < 3 && (d = d.then(l)), d.catch((e) => c(e));
	});
}
function Kc(e, t, n, r, i = (e) => e()) {
	let a = [];
	for (let o of e) for (let e in o.components) {
		let s = o.components[e];
		if (t === "beforeRouteEnter" || o.instances[e]) {
			if (Fs(s)) {
				let c = (s.__vccOpts || s)[t];
				c && a.push(Gc(c, n, r, o, e, i));
			} else {
				let c = s();
				a.push(() => c.then((a) => {
					if (!a) throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);
					let s = Is(a) ? a.default : a;
					o.mods[e] = a, o.components[e] = s;
					let c = (s.__vccOpts || s)[t];
					return c && Gc(c, n, r, o, e, i)();
				}));
			}
		}
	}
	return a;
}
function qc(e, t) {
	let n = [], r = [], i = [], a = Math.max(t.matched.length, e.matched.length);
	for (let o = 0; o < a; o++) {
		let a = t.matched[o];
		a && (e.matched.find((e) => pc(e, a)) ? r.push(a) : n.push(a));
		let s = e.matched[o];
		s && (t.matched.find((e) => pc(e, s)) || i.push(s));
	}
	return [
		n,
		r,
		i
	];
}
// node_modules/vue-router/dist/vue-router.mjs
function Jc(e = "") {
	let t = [], n = [["", {}]], r = 0;
	e = xc(e);
	function i(e, t = {}) {
		r++, r !== n.length && n.splice(r), n.push([e, t]);
	}
	function a(e, n, { direction: r, delta: i }) {
		let a = {
			direction: r,
			delta: i,
			type: yc.pop
		};
		for (let r of t) r(e, n, a);
	}
	let o = {
		location: "",
		state: {},
		base: e,
		createHref: Cc.bind(null, e),
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
			let i = this.location, o = e < 0 ? bc.back : bc.forward;
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
var Yc = /* @__PURE__ */ function(e) {
	return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.Group = 2] = "Group", e;
}({}), Xc = /* @__PURE__ */ function(e) {
	return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.ParamRegExp = 2] = "ParamRegExp", e[e.ParamRegExpEnd = 3] = "ParamRegExpEnd", e[e.EscapeNext = 4] = "EscapeNext", e;
}(Xc || {}), Zc = {
	type: Yc.Static,
	value: ""
}, Qc = /[a-zA-Z0-9_]/;
function $c(e) {
	if (!e) return [[]];
	if (e === "/") return [[Zc]];
	if (!e.startsWith("/")) throw Error(`Invalid path "${e}"`);
	function t(e) {
		throw Error(`ERR (${n})/"${l}": ${e}`);
	}
	let n = Xc.Static, r = n, i = [], a;
	function o() {
		a && i.push(a), a = [];
	}
	let s = 0, c, l = "", u = "";
	function d() {
		l &&= (n === Xc.Static ? a.push({
			type: Yc.Static,
			value: l
		}) : n === Xc.Param || n === Xc.ParamRegExp || n === Xc.ParamRegExpEnd ? (a.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`), a.push({
			type: Yc.Param,
			value: l,
			regexp: u,
			repeatable: c === "*" || c === "+",
			optional: c === "*" || c === "?"
		})) : t("Invalid state to consume buffer"), "");
	}
	function f() {
		l += c;
	}
	for (; s < e.length;) if (c = e[s++], c === "\\" && n !== Xc.ParamRegExp) r = n, n = Xc.EscapeNext;
	else switch (n) {
		case Xc.Static:
			c === "/" ? (l && d(), o()) : c === ":" ? (d(), n = Xc.Param) : f();
			break;
		case Xc.EscapeNext:
			f(), n = r;
			break;
		case Xc.Param:
			c === "(" ? n = Xc.ParamRegExp : Qc.test(c) ? f() : (d(), n = Xc.Static, c !== "*" && c !== "?" && c !== "+" && s--);
			break;
		case Xc.ParamRegExp:
			c === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + c : n = Xc.ParamRegExpEnd : u += c;
			break;
		case Xc.ParamRegExpEnd:
			d(), n = Xc.Static, c !== "*" && c !== "?" && c !== "+" && s--, u = "";
			break;
		default: t("Unknown state");
	}
	return n === Xc.ParamRegExp && t(`Unfinished custom RegExp for param "${l}"`), d(), o(), i;
}
var el = "[^/]+?", tl = {
	sensitive: !1,
	strict: !1,
	start: !0,
	end: !0
}, nl = /* @__PURE__ */ function(e) {
	return e[e._multiplier = 10] = "_multiplier", e[e.Root = 90] = "Root", e[e.Segment = 40] = "Segment", e[e.SubSegment = 30] = "SubSegment", e[e.Static = 40] = "Static", e[e.Dynamic = 20] = "Dynamic", e[e.BonusCustomRegExp = 10] = "BonusCustomRegExp", e[e.BonusWildcard = -50] = "BonusWildcard", e[e.BonusRepeatable = -20] = "BonusRepeatable", e[e.BonusOptional = -8] = "BonusOptional", e[e.BonusStrict = .7000000000000001] = "BonusStrict", e[e.BonusCaseSensitive = .25] = "BonusCaseSensitive", e;
}(nl || {}), rl = /[.+*?^${}()[\]/\\]/g;
function il(e, t) {
	let n = Y({}, tl, t), r = [], i = n.start ? "^" : "", a = [];
	for (let t of e) {
		let e = t.length ? [] : [nl.Root];
		n.strict && !t.length && (i += "/");
		for (let r = 0; r < t.length; r++) {
			let o = t[r], s = nl.Segment + (n.sensitive ? nl.BonusCaseSensitive : 0);
			if (o.type === Yc.Static) r || (i += "/"), i += o.value.replace(rl, "\\$&"), s += nl.Static;
			else if (o.type === Yc.Param) {
				let { value: e, repeatable: n, optional: c, regexp: l } = o;
				a.push({
					name: e,
					repeatable: n,
					optional: c
				});
				let u = l || el;
				if (u !== el) {
					s += nl.BonusCustomRegExp;
					try {
						`${u}`;
					} catch (t) {
						throw Error(`Invalid custom RegExp for param "${e}" (${u}): ` + t.message);
					}
				}
				let d = n ? `((?:${u})(?:/(?:${u}))*)` : `(${u})`;
				r || (d = c && t.length < 2 ? `(?:/${d})` : "/" + d), c && (d += "?"), i += d, s += nl.Dynamic, c && (s += nl.BonusOptional), n && (s += nl.BonusRepeatable), u === ".*" && (s += nl.BonusWildcard);
			}
			e.push(s);
		}
		r.push(e);
	}
	if (n.strict && n.end) {
		let e = r.length - 1;
		r[e][r[e].length - 1] += nl.BonusStrict;
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
			for (let e of i) if (e.type === Yc.Static) n += e.value;
			else if (e.type === Yc.Param) {
				let { value: a, repeatable: o, optional: s } = e, c = a in t ? t[a] : "";
				if (zs(c) && !o) throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);
				let l = zs(c) ? c.join("/") : c;
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
function al(e, t) {
	let n = 0;
	for (; n < e.length && n < t.length;) {
		let r = t[n] - e[n];
		if (r) return r;
		n++;
	}
	return e.length < t.length ? e.length === 1 && e[0] === nl.Static + nl.Segment ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === nl.Static + nl.Segment ? 1 : -1 : 0;
}
function ol(e, t) {
	let n = 0, r = e.score, i = t.score;
	for (; n < r.length && n < i.length;) {
		let e = al(r[n], i[n]);
		if (e) return e;
		n++;
	}
	if (Math.abs(i.length - r.length) === 1) {
		if (sl(r)) return 1;
		if (sl(i)) return -1;
	}
	return i.length - r.length;
}
function sl(e) {
	let t = e[e.length - 1];
	return e.length > 0 && t[t.length - 1] < 0;
}
var cl = {
	strict: !1,
	end: !0,
	sensitive: !1
};
function ll(e, t, n) {
	let r = Y(il($c(e.path), n), {
		record: e,
		parent: t,
		children: [],
		alias: []
	});
	return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function ul(e, t) {
	let n = [], r = /* @__PURE__ */ new Map();
	t = Bs(cl, t);
	function i(e) {
		return r.get(e);
	}
	function a(e, n, r) {
		let i = !r, s = fl(e);
		s.aliasOf = r && r.record;
		let l = Bs(t, e), u = [s];
		if ("alias" in e) {
			let t = typeof e.alias == "string" ? [e.alias] : e.alias;
			for (let e of t) u.push(fl(Y({}, s, {
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
			if (d = ll(t, n, l), r ? r.alias.push(d) : (f ||= d, f !== d && f.alias.push(d), i && e.name && !ml(d) && o(e.name)), vl(d) && c(d), s.children) {
				let e = s.children;
				for (let t = 0; t < e.length; t++) a(e[t], d, r && r.children[t]);
			}
			r ||= d;
		}
		return f ? () => {
			o(f);
		} : Rs;
	}
	function o(e) {
		if (Mc(e)) {
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
		let t = gl(e, n);
		n.splice(t, 0, e), e.record.name && !ml(e) && r.set(e.record.name, e);
	}
	function l(e, t) {
		let i, a = {}, o, s;
		if ("name" in e && e.name) {
			if (i = r.get(e.name), !i) throw Pc(X.MATCHER_NOT_FOUND, { location: e });
			s = i.record.name, a = Y(dl(t.params, i.keys.filter((e) => !e.optional).concat(i.parent ? i.parent.keys.filter((e) => e.optional) : []).map((e) => e.name)), e.params && dl(e.params, i.keys.map((e) => e.name))), o = i.stringify(a);
		} else if (e.path != null) o = e.path, i = n.find((e) => e.re.test(o)), i && (a = i.parse(o), s = i.record.name);
		else {
			if (i = t.name ? r.get(t.name) : n.find((e) => e.re.test(t.path)), !i) throw Pc(X.MATCHER_NOT_FOUND, {
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
			meta: hl(c)
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
function dl(e, t) {
	let n = {};
	for (let r of t) r in e && (n[r] = e[r]);
	return n;
}
function fl(e) {
	let t = {
		path: e.path,
		redirect: e.redirect,
		name: e.name,
		meta: e.meta || {},
		aliasOf: e.aliasOf,
		beforeEnter: e.beforeEnter,
		props: pl(e),
		children: e.children || [],
		instances: {},
		leaveGuards: /* @__PURE__ */ new Set(),
		updateGuards: /* @__PURE__ */ new Set(),
		enterCallbacks: {},
		components: "components" in e ? e.components || null : e.component && { default: e.component }
	};
	return Object.defineProperty(t, "mods", { value: {} }), t;
}
function pl(e) {
	let t = {}, n = e.props || !1;
	if ("component" in e) t.default = n;
	else for (let r in e.components) t[r] = typeof n == "object" ? n[r] : n;
	return t;
}
function ml(e) {
	for (; e;) {
		if (e.record.aliasOf) return !0;
		e = e.parent;
	}
	return !1;
}
function hl(e) {
	return e.reduce((e, t) => Y(e, t.meta), {});
}
function gl(e, t) {
	let n = 0, r = t.length;
	for (; n !== r;) {
		let i = n + r >> 1;
		ol(e, t[i]) < 0 ? r = i : n = i + 1;
	}
	let i = _l(e);
	return i && (r = t.lastIndexOf(i, r - 1)), r;
}
function _l(e) {
	let t = e;
	for (; t = t.parent;) if (vl(t) && ol(e, t) === 0) return t;
}
function vl({ record: e }) {
	return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function yl(e) {
	let t = Un(Vc), n = Un(Hc), r = q(() => {
		let n = I(e.to);
		return t.resolve(n);
	}), i = q(() => {
		let { matched: e } = r.value, { length: t } = e, i = e[t - 1], a = n.matched;
		if (!i || !a.length) return -1;
		let o = a.findIndex(pc.bind(null, i));
		if (o > -1) return o;
		let s = wl(e[t - 2]);
		return t > 1 && wl(i) === s && a[a.length - 1].path !== s ? a.findIndex(pc.bind(null, e[t - 2])) : o;
	}), a = q(() => i.value > -1 && Cl(n.params, r.value.params)), o = q(() => i.value > -1 && i.value === n.matched.length - 1 && mc(n.params, r.value.params));
	function s(n = {}) {
		if (Sl(n)) {
			let n = t[I(e.replace) ? "replace" : "push"](I(e.to)).catch(Rs);
			return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => n), n;
		}
		return Promise.resolve();
	}
	return {
		route: r,
		href: q(() => r.value.href),
		isActive: a,
		isExactActive: o,
		navigate: s
	};
}
function bl(e) {
	return e.length === 1 ? e[0] : e;
}
var xl = /* @__PURE__ */ rr({
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
	useLink: yl,
	setup(e, { slots: t }) {
		let n = /* @__PURE__ */ Ht(yl(e)), { options: r } = Un(Vc), i = q(() => ({
			[Tl(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
			[Tl(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
		}));
		return () => {
			let r = t.default && bl(t.default(n));
			return e.custom ? r : Ra("a", {
				"aria-current": n.isExactActive ? e.ariaCurrentValue : null,
				href: n.href,
				onClick: n.navigate,
				class: i.value
			}, r);
		};
	}
});
function Sl(e) {
	if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && (e.button === void 0 || e.button === 0)) {
		if (e.currentTarget && e.currentTarget.getAttribute) {
			let t = e.currentTarget.getAttribute("target");
			if (/\b_blank\b/i.test(t)) return;
		}
		return e.preventDefault && e.preventDefault(), !0;
	}
}
function Cl(e, t) {
	for (let n in t) {
		let r = t[n], i = e[n];
		if (typeof r == "string") {
			if (r !== i) return !1;
		} else if (!zs(i) || i.length !== r.length || r.some((e, t) => e.valueOf() !== i[t].valueOf())) return !1;
	}
	return !0;
}
function wl(e) {
	return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
var Tl = (e, t, n) => e ?? t ?? n, El = /* @__PURE__ */ rr({
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
		let r = Un(Uc), i = q(() => e.route || r.value), a = Un(Bc, 0), o = q(() => {
			let e = I(a), { matched: t } = i.value, n;
			for (; (n = t[e]) && !n.components;) e++;
			return e;
		}), s = q(() => i.value.matched[o.value]);
		Hn(Bc, q(() => o.value + 1)), Hn(zc, s), Hn(Uc, i);
		let c = /* @__PURE__ */ P();
		return R(() => [
			c.value,
			s.value,
			e.name
		], ([e, t, n], [r, i, a]) => {
			t && (t.instances[n] = e, i && i !== t && e && e === r && (t.leaveGuards.size || (t.leaveGuards = i.leaveGuards), t.updateGuards.size || (t.updateGuards = i.updateGuards))), !e || !t || i && pc(t, i) && r || (t.enterCallbacks[n] || []).forEach((t) => t(e));
		}, { flush: "post" }), () => {
			let r = i.value, a = e.name, o = s.value, l = o && o.components[a];
			if (!l) return Dl(n.default, {
				Component: l,
				route: r
			});
			let u = o.props[a], d = Ra(l, Y({}, u ? u === !0 ? r.params : typeof u == "function" ? u(r) : u : null, t, {
				onVnodeUnmounted: (e) => {
					e.component.isUnmounted && (o.instances[a] = null);
				},
				ref: c
			}));
			return Dl(n.default, {
				Component: d,
				route: r
			}) || d;
		};
	}
});
function Dl(e, t) {
	if (!e) return null;
	let n = e(t);
	return n.length === 1 ? n[0] : n;
}
var Ol = El;
function kl(e) {
	let t = ul(e.routes, e), n = e.parseQuery || Ic, r = e.stringifyQuery || Lc, i = e.history, a = Wc(), o = Wc(), s = Wc(), c = /* @__PURE__ */ F(vc), l = vc;
	Ps && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
	let u = Ls.bind(null, (e) => "" + e), d = Ls.bind(null, oc), f = Ls.bind(null, sc);
	function p(e, n) {
		let r, i;
		return Mc(e) ? (r = t.getRecordMatcher(e), i = n) : i = e, t.addRoute(i, r);
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
			let r = uc(n, e, a.path), o = t.resolve({ path: r.path }, a), s = i.createHref(r.fullPath);
			return Y(r, o, {
				params: f(o.params),
				hash: sc(r.hash),
				redirectedFrom: void 0,
				href: s
			});
		}
		let o;
		if (e.path != null) o = Y({}, e, { path: uc(n, e.path, a.path).path });
		else {
			let t = Y({}, e.params);
			for (let e in t) t[e] ?? delete t[e];
			o = Y({}, e, { params: d(t) }), a.params = d(a.params);
		}
		let s = t.resolve(o, a), l = e.hash || "";
		s.params = u(f(s.params));
		let p = dc(r, Y({}, e, {
			hash: nc(l),
			path: s.path
		})), m = i.createHref(p);
		return Y({
			fullPath: p,
			hash: l,
			query: r === Lc ? Rc(e.query) : e.query || {}
		}, s, {
			redirectedFrom: void 0,
			href: m
		});
	}
	function v(e) {
		return typeof e == "string" ? uc(n, e, c.value.path) : Y({}, e);
	}
	function y(e, t) {
		if (l !== e) return Pc(X.NAVIGATION_CANCELLED, {
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
		return !o && fc(r, i, n) && (f = Pc(X.NAVIGATION_DUPLICATED, {
			to: d,
			from: i
		}), ue(i, i, !0, !1)), (f ? Promise.resolve(f) : ne(d, i)).catch((e) => Fc(e) ? Fc(e, X.NAVIGATION_GUARD_REDIRECT) ? e : le(e) : se(e, d, i)).then((e) => {
			if (e) {
				if (Fc(e, X.NAVIGATION_GUARD_REDIRECT)) return S(Y({ replace: s }, v(e.to), {
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
		let t = fe.values().next().value;
		return t && typeof t.runWithContext == "function" ? t.runWithContext(e) : e();
	}
	function ne(e, t) {
		let n, [r, i, s] = qc(e, t);
		n = Kc(r.reverse(), "beforeRouteLeave", e, t);
		for (let i of r) i.leaveGuards.forEach((r) => {
			n.push(Gc(r, e, t));
		});
		let c = C.bind(null, e, t);
		return n.push(c), me(n).then(() => {
			n = [];
			for (let r of a.list()) n.push(Gc(r, e, t));
			return n.push(c), me(n);
		}).then(() => {
			n = Kc(i, "beforeRouteUpdate", e, t);
			for (let r of i) r.updateGuards.forEach((r) => {
				n.push(Gc(r, e, t));
			});
			return n.push(c), me(n);
		}).then(() => {
			n = [];
			for (let r of s) if (r.beforeEnter) {
				if (zs(r.beforeEnter)) for (let i of r.beforeEnter) n.push(Gc(i, e, t));
				else n.push(Gc(r.beforeEnter, e, t));
			}
			return n.push(c), me(n);
		}).then(() => (e.matched.forEach((e) => e.enterCallbacks = {}), n = Kc(s, "beforeRouteEnter", e, t, te), n.push(c), me(n))).then(() => {
			n = [];
			for (let r of o.list()) n.push(Gc(r, e, t));
			return n.push(c), me(n);
		}).catch((e) => Fc(e, X.NAVIGATION_CANCELLED) ? e : Promise.reject(e));
	}
	function re(e, t, n) {
		s.list().forEach((r) => te(() => r(e, t, n)));
	}
	function w(e, t, n, r, a) {
		let o = y(e, t);
		if (o) return o;
		let s = t === vc, l = Ps ? history.state : {};
		n && (r || s ? i.replace(e.fullPath, Y({ scroll: s && l && l.scroll }, a)) : i.push(e.fullPath, a)), c.value = e, ue(e, t, n, s), le();
	}
	let ie;
	function T() {
		ie ||= i.listen((e, t, n) => {
			if (!pe.listening) return;
			let r = _(e), a = ee(r, pe.currentRoute.value);
			if (a) {
				S(Y(a, {
					replace: !0,
					force: !0
				}), r).catch(Rs);
				return;
			}
			l = r;
			let o = c.value;
			Ps && kc(Dc(o.fullPath, n.delta), Tc()), ne(r, o).catch((e) => Fc(e, X.NAVIGATION_ABORTED | X.NAVIGATION_CANCELLED) ? e : Fc(e, X.NAVIGATION_GUARD_REDIRECT) ? (S(Y(v(e.to), { force: !0 }), r).then((e) => {
				Fc(e, X.NAVIGATION_ABORTED | X.NAVIGATION_DUPLICATED) && !n.delta && n.type === yc.pop && i.go(-1, !1);
			}).catch(Rs), Promise.reject()) : (n.delta && i.go(-n.delta, !1), se(e, r, o))).then((e) => {
				e ||= w(r, o, !1), e && (n.delta && !Fc(e, X.NAVIGATION_CANCELLED) ? i.go(-n.delta, !1) : n.type === yc.pop && Fc(e, X.NAVIGATION_ABORTED | X.NAVIGATION_DUPLICATED) && i.go(-1, !1)), re(r, o, e);
			}).catch(Rs);
		});
	}
	let E = Wc(), ae = Wc(), oe;
	function se(e, t, n) {
		le(e);
		let r = ae.list();
		return r.length ? r.forEach((r) => r(e, t, n)) : console.error(e), Promise.reject(e);
	}
	function ce() {
		return oe && c.value !== vc ? Promise.resolve() : new Promise((e, t) => {
			E.add([e, t]);
		});
	}
	function le(e) {
		return oe || (oe = !e, T(), E.list().forEach(([t, n]) => e ? n(e) : t()), E.reset()), e;
	}
	function ue(t, n, r, i) {
		let { scrollBehavior: a } = e;
		if (!Ps || !a) return Promise.resolve();
		let o = !r && Ac(Dc(t.fullPath, 0)) || (i || !r) && history.state && history.state.scroll || null;
		return En().then(() => a(t, n, o)).then((e) => e && Ec(e)).catch((e) => se(e, t, n));
	}
	let de = (e) => i.go(e), D, fe = /* @__PURE__ */ new Set(), pe = {
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
		go: de,
		back: () => de(-1),
		forward: () => de(1),
		beforeEach: a.add,
		beforeResolve: o.add,
		afterEach: s.add,
		onError: ae.add,
		isReady: ce,
		install(e) {
			e.component("RouterLink", xl), e.component("RouterView", Ol), e.config.globalProperties.$router = pe, Object.defineProperty(e.config.globalProperties, "$route", {
				enumerable: !0,
				get: () => I(c)
			}), Ps && !D && c.value === vc && (D = !0, b(i.location).catch((e) => {}));
			let t = {};
			for (let e in vc) Object.defineProperty(t, e, {
				get: () => c.value[e],
				enumerable: !0
			});
			e.provide(Vc, pe), e.provide(Hc, /* @__PURE__ */ Ut(t)), e.provide(Uc, c);
			let n = e.unmount;
			fe.add(e), e.unmount = function() {
				fe.delete(e), fe.size < 1 && (l = vc, ie && ie(), ie = null, c.value = vc, D = !1, oe = !1), n();
			};
		}
	};
	function me(e) {
		return e.reduce((e, t) => e.then(() => te(t)), Promise.resolve());
	}
	return pe;
}
function Al() {
	return Un(Vc);
}
function jl(e) {
	return Un(Hc);
}
var Ml = kl({
	history: Jc(),
	routes: [{
		path: "/:view(.*)*",
		name: "legacy-view",
		component: { render: () => null }
	}]
}), Nl = /* @__PURE__ */ new Set([
	"projects",
	"saved",
	"myideas",
	"myprompts",
	"events",
	"tracks",
	"artists"
]);
function Pl(e, t = null) {
	let n = typeof e == "string" && e ? e : "home";
	return n === "producer" && t?.kind === "production" && typeof t.id == "string" && /^[a-zA-Z0-9_-]{1,128}$/.test(t.id) ? "/producer/detail/" + encodeURIComponent(t.id) : n === "tracks" && t?.kind === "track" ? "/account/tracks/detail" : n === "detail" ? "/catalog/detail" : Nl.has(n) ? "/account/" + n : "/" + encodeURIComponent(n);
}
function Fl(e) {
	if (e === "/catalog/detail") return "catalog";
	if (e === "/producer/detail" || e.startsWith("/producer/detail/")) return "producer";
	if (e.startsWith("/account/")) return "account";
	try {
		return decodeURIComponent(e.slice(1)) || "home";
	} catch {
		return "home";
	}
}
var Il = null, Ll = Promise.resolve(), Rl = "replace", zl = 0, Bl = 0, Vl = [], Hl = [], Z = -1, Ul = /* @__PURE__ */ F(0), Wl = /* @__PURE__ */ Wt(Ul);
function Gl() {
	Ul.value++;
}
var Kl = /* @__PURE__ */ new Set([
	"overview",
	"ideas",
	"prompts",
	"artists"
]);
function ql(e) {
	return e?.kind !== "genre" || typeof e.id != "string" || !/^[a-z0-9-]{1,100}$/.test(e.id) || !Kl.has(e.tab) ? null : Object.freeze({
		kind: "genre",
		id: e.id,
		tab: e.tab
	});
}
function Jl(e) {
	return e?.kind !== "track" || typeof e.id != "string" || !/^[a-zA-Z0-9_-]{1,128}$/.test(e.id) ? null : Object.freeze({
		kind: "track",
		id: e.id
	});
}
function Yl(e) {
	return ql(e) || Jl(e) || (e?.kind === "production" && typeof e.id == "string" && /^[a-zA-Z0-9_-]{1,128}$/.test(e.id) ? Object.freeze({
		kind: "production",
		id: e.id
	}) : null);
}
function Xl(e, t, n = null) {
	let r = Yl(n);
	if (Z < 0) Vl = [e], Hl = [r], Z = 0;
	else if (t === "push") Vl = Vl.slice(0, Z + 1), Hl = Hl.slice(0, Z + 1), Vl.push(e), Hl.push(r), Z = Vl.length - 1;
	else {
		let t = Vl[Z] === e ? Hl[Z] : null;
		Vl[Z] = e, Hl[Z] = r || t || null;
	}
	Gl();
}
function Zl(e) {
	let t = e === "back" ? -1 : +(e === "forward"), n = Z + t;
	return t && n >= 0 && n < Vl.length ? Object.freeze({
		path: Vl[n],
		context: Hl[n] || null,
		index: n,
		offset: t
	}) : null;
}
function Ql(e) {
	return Zl(e);
}
function $l(e) {
	if (typeof e != "string" || !/^\/[a-z][a-z0-9-]*$/i.test(e)) return null;
	try {
		return decodeURIComponent(e.slice(1));
	} catch {
		return null;
	}
}
function eu(e, { historyMode: t = "replace", context: n = null, source: r = "legacy" } = {}) {
	let i = Yl(n), a = Pl(e, i);
	if (a === Il) return i && (Ll = Ll.then(() => {
		Ml.currentRoute.value.path === a && Z >= 0 && Vl[Z] === a && (Hl[Z] = i, Gl());
	})), Ll;
	Il = a;
	let o = t === "push" ? "push" : "replace";
	return Ll = Ll.then(async () => {
		Ml.currentRoute.value.path === a ? i && Z >= 0 && (Hl[Z] = i, Gl()) : await Ml[o](a) || (Xl(a, o, i), Rl = o, o === "push" && !i && r === "menu" && zl++, o === "push" && !i && r === "shortcut" && Bl++);
	}).catch((e) => {
		console.warn("[SUNOBOOM] Vue Router memory navigation failed; legacy routing remains active.", e);
	}), Ll;
}
function tu() {
	return Ll;
}
function nu(e) {
	let t = Ll.then(() => {
		let t = Zl(e);
		return t ? new Promise((n) => {
			let r = !1, i = () => {}, a;
			function o(o) {
				r || (r = !0, i(), clearTimeout(a), o && (Z = t.index, Il = t.path, Rl = e, Gl()), n(o));
			}
			i = Ml.afterEach((e, n, r) => o(!r && e.path === t.path)), a = setTimeout(() => o(!1), 2500), Ml.go(t.offset);
		}) : !1;
	}).catch((e) => (console.warn("[SUNOBOOM] Vue memory history traversal failed; legacy navigation retained.", e), !1));
	return Ll = t.then(() => void 0), t;
}
function ru() {
	let e = Ml.currentRoute.value;
	return Object.freeze({
		path: e.path,
		name: e.name,
		active: Fl(e.path),
		transition: Rl,
		menuPushes: zl,
		shortcutPushes: Bl,
		canGoBack: Z > 0,
		canGoForward: Z >= 0 && Z < Vl.length - 1,
		historyDepth: Vl.length,
		historyPosition: Z,
		context: Hl[Z] || null
	});
}
// src/vue/navigation/route-state.js
var iu = /* @__PURE__ */ F(Object.freeze({
	route: "home",
	active: "home",
	revision: 0
})), au = /* @__PURE__ */ Wt(iu);
function ou(e, { historyMode: t = "replace", context: n = null, source: r = "legacy" } = {}) {
	let i = typeof e == "string" && e ? e : "home";
	if (eu(i, {
		historyMode: t,
		context: n,
		source: r
	}), i === iu.value.route) return iu.value;
	let a = Object.freeze({
		route: i,
		active: Ms(i),
		revision: iu.value.revision + 1
	});
	return iu.value = a, a;
}
// src/vue/state/appearance-model.js
function su(e) {
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
var cu = /* @__PURE__ */ new Set([
	"all",
	"",
	"name",
	"family",
	"artist",
	"description"
]), lu = /* @__PURE__ */ new Set([
	"overview",
	"ideas",
	"prompts",
	"artists"
]), uu = /^[a-z0-9][a-z0-9-]{0,99}$/;
function du({ query: e, results: t, total: n, mode: r } = {}) {
	return typeof e != "string" || e.length > 160 || !Number.isSafeInteger(n) || n < 0 || !Number.isSafeInteger(t) || t < 0 || t > n || !cu.has(r) ? null : Object.freeze({
		query: e,
		results: t,
		total: n,
		mode: r
	});
}
function fu(e, t) {
	return typeof e != "string" || !uu.test(e) || !lu.has(t) ? null : Object.freeze({
		genreId: e,
		tab: t
	});
}
function pu({ tree: e, selected: t, zoom: n, query: r } = {}) {
	return typeof e != "string" || !uu.test(e) || typeof t != "string" || !uu.test(t) || typeof n != "number" || !Number.isFinite(n) || n < .75 || n > 1.5 || typeof r != "string" || r.length > 160 ? null : Object.freeze({
		tree: e,
		selected: t,
		zoom: n,
		query: r
	});
}
// src/vue/state/production-ui-model.js
var mu = /^[a-z0-9][a-z0-9-]{0,99}$/, hu = (e, t, n) => Number.isSafeInteger(e) && e >= t && e <= n;
function gu(e) {
	let t = e?.settings, n = e?.prompt, r = t?.genre;
	return typeof r != "string" || !mu.test(r) || !hu(t?.tempo, 65, 200) || typeof n != "string" || n.length > 1e3 ? null : Object.freeze({
		ready: !0,
		genreId: r,
		tempo: t.tempo,
		promptLength: n.length
	});
}
function _u(e) {
	let t = e?.rows, n = e?.prompt;
	return !Array.isArray(t) || t.length < 2 || t.length > 4 || !hu(e?.tempo, 65, 200) || typeof n != "string" || n.length > 1e3 || !t.every((e) => typeof e?.id == "string" && mu.test(e.id) && hu(e.weight, 0, 100)) || t.reduce((e, t) => e + t.weight, 0) !== 100 || new Set(t.map((e) => e.id)).size !== t.length ? null : Object.freeze({
		ready: !0,
		genreCount: t.length,
		tempo: e.tempo,
		promptLength: n.length
	});
}
function vu(e) {
	let t = e?.report;
	return !["manual", "studio"].includes(e?.mode) || !hu(t?.score, 0, 100) || !hu(t?.length, 0, 1e5) ? null : Object.freeze({
		ready: !0,
		mode: e.mode,
		score: t.score,
		checkedLength: t.length
	});
}
function yu(e) {
	let t = e?.blocks;
	if (!Array.isArray(t) || t.length > 64 || !t.every((e) => e && [
		2,
		4,
		8,
		12,
		16,
		24,
		32
	].includes(e.bars) && hu(e.energy, 1, 5) && typeof e.hasTransition == "boolean")) return null;
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
var bu = (e, t, n) => Number.isSafeInteger(e) && e >= t && e <= n, xu = (e) => typeof e == "boolean";
function Su(e) {
	return !bu(e?.count, 0, 150) || !bu(e?.currentIndex, -1, e.count - 1) || e.count === 0 && e.currentIndex !== -1 || !xu(e.playing) || e.playing && e.currentIndex === -1 || !xu(e.shuffle) || ![
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
function Cu(e) {
	let t = e?.files?.A?.ready, n = e?.files?.B?.ready;
	return !["player", "compare"].includes(e?.mode) || !["A", "B"].includes(e?.active) || !xu(e.playing) || !xu(e.loop) || !xu(e.hasBoth) || !xu(t) || !xu(n) || e.hasBoth !== (t && n) || e.playing && !(e.active === "A" ? t : n) ? null : Object.freeze({
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
var wu = (e) => Number.isSafeInteger(e) && e >= 0 && e <= 1e4, Tu = Object.freeze([
	"all",
	"idea",
	"lyrics",
	"generation",
	"selection",
	"mastering",
	"publisher",
	"released"
]);
function Eu(e) {
	let t = e?.records;
	return !Array.isArray(t) || !wu(t.length) || typeof e.hasRecords != "boolean" || e.hasRecords !== t.length > 0 || !t.every((e) => e && Number.isSafeInteger(e.done) && e.done >= 0 && e.total === 6 && e.done <= e.total && e.percent === Math.round(e.done / e.total * 100)) ? null : Object.freeze({
		ready: !0,
		workCount: t.length,
		finishedCount: t.filter((e) => e.done === e.total).length,
		hasSelection: t.some((t) => typeof t.id == "string" && t.id === e.selectedId)
	});
}
function Du(e) {
	let t = e?.records;
	return !Array.isArray(t) || !wu(t.length) || typeof e.hasRecords != "boolean" || !Tu.includes(e.active) || t.length > 0 && !e.hasRecords || e.active === "all" && e.hasRecords !== t.length > 0 ? null : Object.freeze({
		ready: !0,
		visibleCount: t.length,
		hasRecords: e.hasRecords,
		filter: e.active
	});
}
function Ou(e) {
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
function ku(e) {
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
var Au = (e, t = 1e4) => Number.isSafeInteger(e) && e >= 0 && e <= t, ju = (e) => typeof e == "boolean";
function Mu(e) {
	let t = e?.items;
	return !Au(e?.total) || !Array.isArray(t) || !Au(t.length) || t.length > e.total || !t.every((e) => e && ju(e.hasCover)) ? null : Object.freeze({
		ready: !0,
		totalCount: e.total,
		visibleCount: t.length,
		localCoverCount: t.filter((e) => e.hasCover).length
	});
}
function Nu(e) {
	let t = e?.versions;
	return !Array.isArray(t) || !Au(t.length, 1e3) || !ju(e.hasAudio) || !ju(e.hasCover) || !ju(e.hasPlayableAudio) || !ju(e.compareOpen) || e.compareOpen && t.length < 2 || !t.every((e) => e && ju(e.isMain) && ju(e.isPlaying)) || t.filter((e) => e.isMain).length > 1 || t.filter((e) => e.isPlaying).length > 1 ? null : Object.freeze({
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
var Pu = (e, t = 1e4) => Number.isSafeInteger(e) && e >= 0 && e <= t;
function Fu(e, t) {
	return !Array.isArray(e?.artists) || !Pu(e.artists.length) || !Pu(t) || t > e.artists.length || !Pu(e.dnaCount) ? null : Object.freeze({
		ready: !0,
		artistCount: e.artists.length,
		visibleCount: t,
		dnaCount: e.dnaCount
	});
}
function Iu(e) {
	let t = e?.profiles, n = e?.detail;
	return !Array.isArray(t) || !Pu(t.length) || n !== null && (!n || typeof n != "object") || n !== null && (!Array.isArray(n.related) || !Pu(n.related.length) || !Array.isArray(n.forbids) || !Pu(n.forbids.length, 32) || !Array.isArray(n.facts) || !Pu(n.facts.length, 32) || !Array.isArray(n.textFields) || !Pu(n.textFields.length, 32)) ? null : Object.freeze({
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
var Lu = (e) => Number.isSafeInteger(e) && e >= 0 && e <= 1e4, Ru = Object.freeze([
	"genres",
	"ideas",
	"own",
	"generated",
	"prompts"
]);
function zu(e) {
	if (!e || !Ru.every((t) => Array.isArray(e[t]) && Lu(e[t].length) && e[t].every((e) => typeof e == "object" && !!e))) return null;
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
var Bu = (e, t) => typeof e == "string" && e.length <= t;
function Vu(e) {
	return !e || !Bu(e.title, 100) || !Bu(e.genre, 128) || !Bu(e.text, 3e3) || !Bu(e.hook, 240) ? null : Object.freeze({
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
function Hu(e, t) {
	return !e || typeof t != "boolean" || !Bu(e.title, 100) || !Bu(e.genre, 128) || !Bu(e.text, 1e3) ? null : Object.freeze({
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
function Uu(e) {
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
function Wu(e) {
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
function Gu(e) {
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
var Ku = /* @__PURE__ */ new Set([
	"smart",
	"rules",
	"manual"
]), qu = /* @__PURE__ */ new Set([
	"auto",
	"original",
	"tagged"
]), Ju = /* @__PURE__ */ new Set([
	"minimal",
	"balanced",
	"detailed"
]), Yu = [
	"melisma",
	"falsetto",
	"harmonies",
	"noWhisper",
	"noRasp"
];
function Xu(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) return null;
	let t = e.prefs;
	if (!t || typeof t != "object" || Array.isArray(t) || !Ku.has(t.mode) || !qu.has(t.source) || !Ju.has(t.density) || !Number.isSafeInteger(t.intensity) || t.intensity < 1 || t.intensity > 5 || Yu.some((e) => typeof t[e] != "boolean") || typeof e.busy != "boolean") return null;
	let n = e.draft;
	return n !== null && (typeof n != "object" || Array.isArray(n) || !Array.isArray(n.sections) || n.sections.length > 2e4) ? null : Object.freeze({
		ready: !0,
		mode: t.mode,
		source: t.source,
		density: t.density,
		intensity: t.intensity,
		enabledTechniques: Number(t.melisma) + Number(t.falsetto) + Number(t.harmonies),
		vocalRestrictions: Number(t.noWhisper) + Number(t.noRasp),
		busy: e.busy,
		previewOpen: n !== null,
		sectionCount: n ? n.sections.length : 0
	});
}
// src/vue/state/legacy-ui-store.js
var Zu = Object.freeze([]), Qu = Object.freeze({
	ideaCount: 0,
	promptCount: 0,
	eventCount: 0,
	revision: 0
}), $u = (e) => Number.isSafeInteger(e) && e >= 0 ? e : 0, Q = As("sunoboom-legacy-ui", () => {
	let e = au, t = /* @__PURE__ */ F(Zu), n = /* @__PURE__ */ F(Qu), r = /* @__PURE__ */ F(Object.freeze({
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
		let t = du(e);
		if (!t) return !1;
		let n = i.value;
		return n.query === t.query && n.results === t.results && n.total === t.total && n.mode === t.mode ? !1 : (i.value = Object.freeze({
			...t,
			revision: n.revision + 1
		}), !0);
	}
	function c(e, t) {
		let n = fu(e, t);
		if (!n) return !1;
		let r = a.value;
		return r.genreId === n.genreId && r.tab === n.tab ? !1 : (a.value = Object.freeze({
			...n,
			revision: r.revision + 1
		}), !0);
	}
	function l(e) {
		let t = pu(e);
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
	})), ee = /* @__PURE__ */ F(Object.freeze({
		ready: !1,
		artistCount: 0,
		visibleCount: 0,
		dnaCount: 0,
		revision: 0
	})), S = /* @__PURE__ */ F(Object.freeze({
		ready: !1,
		profileCount: 0,
		detailOpen: !1,
		linkedTrackCount: 0,
		restrictionsCount: 0,
		factCount: 0,
		sectionCount: 0,
		revision: 0
	})), C = /* @__PURE__ */ F(Object.freeze({
		ready: !1,
		genreCount: 0,
		academyIdeaCount: 0,
		ownIdeaCount: 0,
		generatedIdeaCount: 0,
		promptCount: 0,
		totalIdeaCount: 0,
		revision: 0
	})), te = /* @__PURE__ */ F(Object.freeze({
		ready: !1,
		titleLength: 0,
		ideaLength: 0,
		hookLength: 0,
		hasTitle: !1,
		hasGenre: !1,
		hasIdea: !1,
		hasHook: !1,
		revision: 0
	})), ne = /* @__PURE__ */ F(Object.freeze({
		ready: !1,
		editing: !1,
		titleLength: 0,
		textLength: 0,
		hasTitle: !1,
		hasGenre: !1,
		hasPrompt: !1,
		revision: 0
	})), re = /* @__PURE__ */ F(Object.freeze({
		ready: !1,
		charCount: 0,
		lineCount: 0,
		wordCount: 0,
		hasText: !1,
		revision: 0
	})), w = /* @__PURE__ */ F(Object.freeze({
		ready: !1,
		analyzed: !1,
		rowCount: 0,
		previewStanzaCount: 0,
		stressMarkCount: 0,
		suggestionCount: 0,
		revision: 0
	})), ie = /* @__PURE__ */ F(Object.freeze({
		ready: !1,
		occurrenceCount: 0,
		distinctCount: 0,
		visibleCount: 0,
		revision: 0
	})), T = /* @__PURE__ */ F(Object.freeze({
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
		revision: 0
	}));
	function E(e, t, n) {
		let r = t(n);
		if (!r) return !1;
		let i = e.value;
		return !Object.keys(r).every((e) => i[e] === r[e]) && (e.value = Object.freeze({
			...r,
			revision: i.revision + 1
		}), !0);
	}
	let ae = (e) => E(u, gu, e), oe = (e) => E(d, _u, e), se = (e) => E(f, vu, e), ce = (e) => E(p, yu, e), le = (e) => E(m, Su, e), ue = (e) => E(h, Cu, e), de = (e) => E(g, Eu, e), D = (e) => E(_, Du, e), fe = (e) => E(v, Ou, e), pe = (e) => E(y, ku, e), me = (e) => E(b, Mu, e), he = (e) => E(x, Nu, e), O = (e, t) => E(ee, (e) => Fu(e, t), e), ge = (e) => E(S, Iu, e), _e = (e) => E(C, zu, e), ve = (e) => E(te, Vu, e), ye = (e, t) => E(ne, (e) => Hu(e, t), e), be = (e) => E(re, Uu, e), xe = (e) => E(w, Wu, e), Se = (e) => E(ie, Gu, e);
	function Ce() {
		let e = ie.value;
		return e.ready ? (ie.value = Object.freeze({
			ready: !1,
			occurrenceCount: 0,
			distinctCount: 0,
			visibleCount: 0,
			revision: e.revision + 1
		}), !0) : !1;
	}
	let we = (e) => E(T, Xu, e);
	function Te() {
		let e = T.value;
		return e.ready ? (T.value = Object.freeze({
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
			revision: e.revision + 1
		}), !0) : !1;
	}
	function k(e) {
		if (!Array.isArray(e)) return !1;
		let n = Object.freeze(e.filter((e) => e && typeof e.id == "string" && e.id).map((e) => Object.freeze({
			id: e.id,
			label: e.label,
			shortLabel: e.shortLabel,
			iconHtml: e.iconHtml
		}))), r = t.value;
		return r.length === n.length && r.every((e, t) => e.id === n[t].id && e.label === n[t].label && e.shortLabel === n[t].shortLabel && e.iconHtml === n[t].iconHtml) ? !1 : (t.value = n, !0);
	}
	function Ee(e) {
		if (!e || typeof e != "object") return !1;
		let t = {
			ideaCount: $u(e.ideaCount),
			promptCount: $u(e.promptCount),
			eventCount: $u(e.eventCount)
		}, r = n.value;
		return r.ideaCount === t.ideaCount && r.promptCount === t.promptCount && r.eventCount === t.eventCount ? !1 : (n.value = Object.freeze({
			...t,
			revision: r.revision + 1
		}), !0);
	}
	function De(e) {
		let t = su(e);
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
		performanceTagsSummary: T,
		publishNavigation: k,
		publishDashboardStats: Ee,
		publishAppearance: De,
		publishAcademyCatalog: s,
		publishAcademyFocus: c,
		publishAcademyTree: l,
		publishStudioSummary: ae,
		publishMixerSummary: oe,
		publishAuditorSummary: se,
		publishArrangerSummary: ce,
		publishPlayerLabSummary: le,
		publishPlayerAbSummary: ue,
		publishMasterListSummary: de,
		publishPassportListSummary: D,
		publishMasterDetailSummary: fe,
		publishPassportDetailSummary: pe,
		publishSongCollectionSummary: me,
		publishSongDetailSummary: he,
		publishArtistManagerSummary: O,
		publishArtistDnaSummary: ge,
		publishLibrarySummary: _e,
		publishIdeaDraftSummary: ve,
		publishPromptDraftSummary: ye,
		publishPoetrySourceSummary: be,
		publishPoetryAnalysisSummary: xe,
		publishPoetryAmbiguitySummary: Se,
		clearPoetryAmbiguitySummary: Ce,
		publishPerformanceTagsSummary: we,
		clearPerformanceTagsSummary: Te
	};
}), ed = {
	key: 0,
	class: "sub",
	"data-sb-vue-idea-library-recap": ""
}, td = { class: "section-title" }, nd = {
	key: 0,
	class: "btn ghost small",
	"data-action": "nav",
	"data-nav": "ideas"
}, rd = ["data-idea-collection"], id = { class: "idea-badge" }, ad = {
	key: 0,
	class: "generator-story"
}, od = {
	key: 1,
	class: "song-has-lyrics"
}, sd = { key: 0 }, cd = {
	key: 3,
	class: "generator-detail"
}, ld = { class: "actions" }, ud = [
	"data-action",
	"data-id",
	"data-i",
	"aria-label"
], dd = ["innerHTML"], fd = {
	key: 1,
	class: "empty"
}, pd = ["innerHTML"], md = {
	__name: "IdeaCollections",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = Q();
		return (n, r) => (H(), U(V, null, [I(t).librarySummary.ready ? (H(), U("p", ed, " Последний просмотр библиотеки: " + k(I(t).librarySummary.totalIdeaCount) + " идей ", 1)) : K("", !0), (H(!0), U(V, null, B(e.model.groups, (t) => (H(), U(V, { key: t.kind }, [W("div", td, [W("h2", null, k(t.title) + " (" + k(t.items.length) + ")", 1), t.kind === "generated" ? (H(), U("button", nd, "Создать идеи →")) : K("", !0)]), t.items.length ? (H(), U("div", {
			key: 0,
			class: "idea-grid",
			"data-idea-collection": t.kind
		}, [(H(!0), U(V, null, B(t.items, (n) => (H(), ta(Or(t.kind === "academy" ? "div" : "article"), {
			key: n.key,
			class: O(["idea", { "generated-card": t.kind === "generated" }])
		}, {
			default: Bn(() => [
				W("div", id, k(n.badge), 1),
				W("h3", null, k(n.title), 1),
				W("p", null, k(n.pitch), 1),
				t.kind === "generated" ? (H(), U("p", ad, k(n.storyLine), 1)) : K("", !0),
				t.kind === "manual" && n.lyrics ? (H(), U("p", od, "🎼 Текст песни сохранён · " + k(n.sunoLyrics ? "теги для Suno готовы" : "без разметки"), 1)) : K("", !0),
				n.hook || t.kind === "generated" ? (H(), ta(Or(t.kind === "generated" ? "div" : "p"), {
					key: 2,
					class: "generator-hook"
				}, {
					default: Bn(() => [t.kind === "generated" ? (H(), U("span", sd, "ХУК ПРИПЕВА")) : K("", !0), W("strong", null, k(n.hook), 1)]),
					_: 2
				}, 1024)) : K("", !0),
				t.kind === "generated" && n.detail ? (H(), U("p", cd, "Твоя деталь: " + k(n.detail), 1)) : K("", !0),
				W("div", ld, [(H(!0), U(V, null, B(n.actions, (t) => (H(), U("button", {
					key: t.name,
					type: "button",
					class: O(t.className),
					"data-action": t.name,
					"data-id": n.id,
					"data-i": n.index,
					"aria-label": t.label || void 0
				}, [t.icon ? (H(), U("span", {
					key: 0,
					"aria-hidden": "true",
					innerHTML: e.model.icons[t.icon]
				}, null, 8, dd)) : K("", !0), G(k(t.text), 1)], 10, ud))), 128))])
			]),
			_: 2
		}, 1032, ["class"]))), 128))], 8, rd)) : (H(), U("div", fd, [
			W("span", {
				"aria-hidden": "true",
				innerHTML: e.model.icons.music
			}, null, 8, pd),
			W("strong", null, k(t.emptyTitle), 1),
			G(k(t.emptyText), 1)
		]))], 64))), 128))], 64));
	}
};
// src/vue/poetry/legacyIdeaCollectionsBridge.js
function hd({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_IDEA_COLLECTIONS, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-idea-collections");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, md, { model: o });
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
// src/vue/version-history/version-model.js
function gd(e) {
	return /^\d{4}-\d{2}-\d{2}$/.test(String(e || "")) ? e.slice(8, 10) + "." + e.slice(5, 7) + "." + e.slice(0, 4) : "";
}
var _d = (e) => String(e ?? "").trim().normalize("NFKC").toLocaleLowerCase("ru"), vd = (e, t) => _d(e).includes(t);
function yd(e) {
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
function bd(e, { tab: t = "major", size: n = "all", search: r = "" } = {}) {
	let i = Array.isArray(e) ? e : [], a = yd(i), o = _d(r);
	if (o) {
		let e = a.filter((e) => o === "v" + e.major || o === e.major || vd("мажорная версия " + e.major, o)), t = i.filter((e) => vd("v" + e[0] + " " + e[0] + " " + e[1] + " " + gd(e[2]), o));
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
var xd = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, Sd = {
	class: "sb-vh-vue-layout",
	"data-sb-vue-version-history": ""
}, Cd = { class: "sb-vh-header" }, wd = [
	"aria-selected",
	"tabindex",
	"onClick"
], Td = [
	"aria-selected",
	"tabindex",
	"onClick"
], Ed = {
	id: "sb-vh-legend",
	class: "sb-vh-legend"
}, Dd = { class: "sb-vh-controls" }, Od = {
	class: "sb-vh-search-label",
	for: "sb-vue-vh-search"
}, kd = {
	id: "sb-vh-subcount",
	class: "sb-vh-count",
	role: "status"
}, Ad = {
	key: 0,
	class: "sb-vh-search-all"
}, jd = {
	key: 0,
	class: "sb-vh-search-group"
}, Md = { class: "sb-vh-release-no" }, Nd = { class: "sb-vh-release-text" }, Pd = { class: "sb-vh-version-range" }, Fd = { class: "sb-vh-release-list" }, Id = { class: "sb-vh-release-no" }, Ld = { class: "sb-vh-release-text" }, Rd = { class: "sb-vh-search-meta" }, zd = ["datetime"], Bd = { class: "sb-vh-search-tag" }, Vd = {
	key: 1,
	class: "sb-vh-empty"
}, Hd = {
	key: 2,
	class: "sb-vh-release-list sb-vh-major-list"
}, Ud = { class: "sb-vh-release-no" }, Wd = { class: "sb-vh-release-text" }, Gd = { class: "sb-vh-version-range" }, Kd = {
	key: 3,
	class: "sb-vh-release-list"
}, qd = { class: "sb-vh-release-no" }, Jd = { class: "sb-vh-release-text" }, Yd = { class: "sb-vh-search-meta" }, Xd = ["datetime"], Zd = {
	key: 0,
	class: "sb-vh-search-tag"
}, Qd = {
	key: 4,
	class: "sb-vh-empty"
}, $d = /*#__PURE__*/ xd({
	__name: "VersionHistory",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ P("major"), r = /* @__PURE__ */ P("all"), i = /* @__PURE__ */ P(""), a = q(() => bd(t.model.releases, {
			tab: n.value,
			size: r.value,
			search: i.value
		})), o = /* @__PURE__ */ P(null), s = /* @__PURE__ */ P(null), c = q(() => !!i.value.trim());
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
			e.preventDefault(), r(t[a]), En(() => {
				let e = t.length === 2 ? "#sb-vh-tabs [aria-selected=\"true\"]" : "#sb-vh-minor-tabs [aria-selected=\"true\"]";
				document.querySelector(e)?.focus();
			});
		}
		return z(() => En(() => s.value?.focus({ preventScroll: !0 }))), (t, m) => (H(), U("div", Sd, [
			W("header", Cd, [W("div", null, [
				m[6] ||= W("div", { class: "sb-vh-kicker" }, "SUNOBOOM · РАЗВИТИЕ ПРОЕКТА", -1),
				m[7] ||= W("h2", { id: "sb-vh-title" }, "История версий", -1),
				W("p", null, [
					m[4] ||= G("Текущая версия ", -1),
					W("strong", null, "v" + k(e.model.currentVersion), 1),
					m[5] ||= G(". Версии сгруппированы по номеру.", -1)
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
				class: O(["sb-vh-tab", { active: n.value === e.id }]),
				role: "tab",
				"aria-selected": n.value === e.id,
				tabindex: n.value === e.id ? 0 : -1,
				"aria-controls": "sb-vh-content",
				onClick: (t) => u(e.id)
			}, k(e.label), 11, wd)), 64))], 32),
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
				class: O(["sb-vh-size-tab", { active: r.value === e.id }]),
				role: "tab",
				"aria-selected": r.value === e.id,
				tabindex: r.value === e.id ? 0 : -1,
				"aria-controls": "sb-vh-content",
				onClick: (t) => d(e.id)
			}, k(e.label), 11, Td)), 64))], 32)) : K("", !0),
			W("p", Ed, k(a.value.legend), 1),
			W("div", Dd, [W("label", Od, [m[8] ||= W("span", { class: "sb-vh-visually-hidden" }, "Поиск по истории версий", -1), L(W("input", {
				id: "sb-vue-vh-search",
				"onUpdate:modelValue": m[3] ||= (e) => i.value = e,
				type: "search",
				autocomplete: "off",
				placeholder: "Поиск по всем версиям и вкладкам…",
				onInput: l
			}, null, 544), [[J, i.value]])]), W("span", kd, k(a.value.count), 1)]),
			W("div", {
				id: "sb-vh-content",
				ref_key: "content",
				ref: o,
				class: "sb-vh-content",
				role: "tabpanel",
				"aria-labelledby": "sb-vh-tabs"
			}, [a.value.mode === "search" && (a.value.majors.length || a.value.large.length || a.value.small.length) ? (H(), U("div", Ad, [a.value.majors.length ? (H(), U("section", jd, [W("h3", null, [m[9] ||= G("Мажорные версии ", -1), W("span", null, k(a.value.majors.length), 1)]), (H(!0), U(V, null, B(a.value.majors, (e) => (H(), U("article", {
				key: "major-" + e.major,
				class: "sb-vh-release sb-vh-major-release"
			}, [W("span", Md, "v" + k(e.major), 1), W("div", Nd, [W("p", null, "Мажорная версия " + k(e.major), 1), W("p", Pd, " От v" + k(e.items[e.items.length - 1][0]) + " до v" + k(e.items[0][0]), 1)])]))), 128))])) : K("", !0), (H(!0), U(V, null, B([{
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
			}, [W("h3", null, [G(k(e.title) + " ", 1), W("span", null, k(e.entries.length), 1)]), W("div", Fd, [(H(!0), U(V, null, B(e.entries, (t) => (H(), U("article", {
				key: t[0],
				class: "sb-vh-release"
			}, [W("span", Id, "v" + k(t[0]), 1), W("div", Ld, [W("p", null, k(t[1]), 1), W("div", Rd, [W("time", { datetime: t[2] }, k(I(gd)(t[2])), 9, zd), W("span", Bd, k(e.badge), 1)])])]))), 128))])])), [[Qa, e.entries.length]])), 128))])) : a.value.mode === "search" ? (H(), U("p", Vd, " По запросу совпадений нет ни в одном разделе истории. ")) : a.value.mode === "major" ? (H(), U("div", Hd, [(H(!0), U(V, null, B(a.value.majors, (e) => (H(), U("article", {
				key: e.major,
				class: "sb-vh-release sb-vh-major-release"
			}, [W("span", Ud, "v" + k(e.major), 1), W("div", Wd, [
				W("h3", null, "Мажорная версия " + k(e.major), 1),
				W("p", null, "Ветка v" + k(e.major) + ".x — " + k(e.items.length) + " сохранённых минорных обновлений.", 1),
				W("p", Gd, " От v" + k(e.items[e.items.length - 1][0]) + " (" + k(I(gd)(e.items[e.items.length - 1][2])) + ") до v" + k(e.items[0][0]) + " (" + k(I(gd)(e.items[0][2])) + ") ", 1),
				W("button", {
					type: "button",
					class: "sb-vh-view-minors",
					onClick: f
				}, "Просмотреть минорные версии")
			])]))), 128))])) : a.value.mode === "minor" && a.value.entries.length ? (H(), U("div", Kd, [(H(!0), U(V, null, B(a.value.entries, (e) => (H(), U("article", {
				key: e[0],
				class: "sb-vh-release"
			}, [W("span", qd, "v" + k(e[0]), 1), W("div", Jd, [W("p", null, k(e[1]), 1), W("div", Yd, [W("time", { datetime: e[2] }, k(I(gd)(e[2])), 9, Xd), r.value === "all" ? (H(), U("span", Zd, k(e[3] === "large" ? "Крупное" : "Мелкое"), 1)) : K("", !0)])])]))), 128))])) : (H(), U("p", Qd, "По запросу минорные версии не найдены."))], 512)
		]));
	}
}, [["__scopeId", "data-v-ce1fc81b"]]);
// src/vue/version-history/legacyVersionHistoryBridge.js
function ef({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_VERSION_HISTORY;
	if (!t?.snapshot || !document.body) return () => {};
	let n = null, r = !1;
	function i() {
		if (r) return;
		let i = document.getElementById("sb-vue-version-history");
		if (n?.node === i && i?.isConnected || (n &&= (n.unmount(), null), !i)) return;
		let a = t.snapshot();
		if (!a || !Array.isArray(a.releases)) return;
		let o = e(i, $d, { model: {
			...a,
			close: t.close
		} });
		o && (n = {
			node: i,
			unmount: o
		});
	}
	let a = new MutationObserver(i);
	return a.observe(document.body, { childList: !0 }), i(), () => {
		r = !0, a.disconnect(), n?.unmount(), n = null;
	};
}
// src/vue/home/HomeDashboard.vue
var tf = ["data-sb-applied-theme"], nf = { class: "dash-head" }, rf = { class: "dash-actions" }, af = { class: "dash-metrics" }, of = { class: "dash-metric" }, sf = { class: "dash-metric" }, cf = { class: "dash-metric" }, lf = { class: "dash-layout" }, uf = { class: "dash-panel" }, df = { class: "dash-panel-head" }, ff = { class: "dash-list" }, pf = { class: "dash-entry-meta" }, mf = ["data-kind", "data-id"], hf = {
	key: 0,
	class: "dash-empty"
}, gf = { class: "dash-panel" }, _f = { class: "dash-panel-head" }, vf = { class: "dash-list" }, yf = { class: "dash-entry-meta" }, bf = { class: "dash-entry-actions" }, xf = ["data-id"], Sf = ["data-id"], Cf = {
	key: 0,
	class: "dash-empty"
}, wf = { class: "dash-panel dash-panel-events" }, Tf = { class: "dash-panel-head" }, Ef = { class: "dash-list" }, Df = { class: "dash-event-date" }, Of = { class: "dash-event-main" }, kf = { class: "dash-entry-meta" }, Af = { key: 0 }, jf = ["data-id"], Mf = {
	key: 0,
	class: "dash-empty"
}, Nf = {
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
		return (n, r) => (H(), U("div", {
			class: "sb-vue-dashboard",
			"data-sb-vue-dashboard": "",
			"data-sb-applied-theme": I(t).appearance.resolvedTheme
		}, [
			W("div", nf, [
				r[9] ||= W("div", { class: "dash-eyebrow" }, "ЛИЧНАЯ МУЗЫКАЛЬНАЯ МАСТЕРСКАЯ", -1),
				r[10] ||= W("h1", null, [G("Твоя музыкальная "), W("span", null, "лаборатория.")], -1),
				W("p", null, k(e.model.profileName) + ", здесь твои последние идеи, промпты и музыкальные события — всё под рукой.", 1),
				W("div", rf, [
					W("button", {
						type: "button",
						class: "btn primary",
						"data-action": "nav",
						"data-nav": "myideas",
						onClick: r[0] ||= Uo((t) => e.navigate("myideas"), ["stop"])
					}, "＋ Новая идея"),
					W("button", {
						type: "button",
						class: "btn ghost",
						"data-action": "nav",
						"data-nav": "myprompts",
						onClick: r[1] ||= Uo((t) => e.navigate("myprompts"), ["stop"])
					}, "＋ Новый промпт"),
					W("button", {
						type: "button",
						class: "btn ghost",
						"data-action": "nav",
						"data-nav": "events",
						onClick: r[2] ||= Uo((t) => e.navigate("events"), ["stop"])
					}, "＋ Событие")
				])
			]),
			W("div", af, [
				W("div", of, [W("b", null, k(I(t).dashboardStats.ideaCount), 1), r[11] ||= W("span", null, "Мои идеи", -1)]),
				W("div", sf, [W("b", null, k(I(t).dashboardStats.promptCount), 1), r[12] ||= W("span", null, "Мои промпты", -1)]),
				W("div", cf, [W("b", null, k(I(t).dashboardStats.eventCount), 1), r[13] ||= W("span", null, "Мои события", -1)])
			]),
			W("div", lf, [
				W("section", uf, [W("header", df, [r[14] ||= W("div", null, [W("span", { class: "dash-kicker" }, "💡 ЛИЧНАЯ БИБЛИОТЕКА"), W("h2", null, "Мои последние идеи")], -1), W("button", {
					type: "button",
					class: "dash-view-all",
					"data-action": "nav",
					"data-nav": "myideas",
					onClick: r[3] ||= Uo((t) => e.navigate("myideas"), ["stop"])
				}, "Все идеи →")]), W("div", ff, [(H(!0), U(V, null, B(e.model.ideas, (e) => (H(), U("article", {
					key: e.kind + ":" + e.key,
					class: "dash-entry"
				}, [
					W("div", pf, k(e.label), 1),
					W("h3", null, k(e.title), 1),
					W("p", null, k(String(e.pitch).slice(0, 180)), 1),
					W("button", {
						type: "button",
						class: "dash-entry-link",
						"data-action": "dash-open-idea",
						"data-kind": e.kind,
						"data-id": String(e.key)
					}, "Открыть идею →", 8, mf)
				]))), 128)), e.model.ideas.length ? K("", !0) : (H(), U("div", hf, [
					r[15] ||= W("span", null, "💡", -1),
					r[16] ||= W("strong", null, "Пока нет сохранённых идей", -1),
					r[17] ||= W("p", null, "Добавь идею в личном кабинете или сохрани сюжет из Idea Lab.", -1),
					W("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "nav",
						"data-nav": "myideas",
						onClick: r[4] ||= Uo((t) => e.navigate("myideas"), ["stop"])
					}, "Добавить идею →")
				]))])]),
				W("section", gf, [W("header", _f, [r[18] ||= W("div", null, [W("span", { class: "dash-kicker" }, "🎛️ SUNO STUDIO"), W("h2", null, "Мои последние промпты")], -1), W("button", {
					type: "button",
					class: "dash-view-all",
					"data-action": "nav",
					"data-nav": "myprompts",
					onClick: r[5] ||= Uo((t) => e.navigate("myprompts"), ["stop"])
				}, "Все промпты →")]), W("div", vf, [(H(!0), U(V, null, B(e.model.prompts, (e) => (H(), U("article", {
					key: String(e.id),
					class: "dash-entry"
				}, [
					W("div", yf, k(e.genre || "Suno Studio") + k(e.date ? " · " + e.date : ""), 1),
					W("h3", null, k(e.title || (e.genre || "Промпт") + " · " + (e.mood || "студия")), 1),
					W("p", null, k(String(e.text || "").slice(0, 180)), 1),
					W("div", bf, [W("button", {
						type: "button",
						class: "dash-entry-link",
						"data-action": "dash-open-prompt",
						"data-id": String(e.id)
					}, "Открыть промпт →", 8, xf), W("button", {
						type: "button",
						class: "dash-copy",
						"data-action": "copy-saved",
						"data-id": String(e.id)
					}, "Копировать", 8, Sf)])
				]))), 128)), e.model.prompts.length ? K("", !0) : (H(), U("div", Cf, [
					r[19] ||= W("span", null, "🎛️", -1),
					r[20] ||= W("strong", null, "Пока нет сохранённых промптов", -1),
					r[21] ||= W("p", null, "Сохрани промпт в Suno Studio или создай собственный.", -1),
					W("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "nav",
						"data-nav": "myprompts",
						onClick: r[6] ||= Uo((t) => e.navigate("myprompts"), ["stop"])
					}, "Добавить промпт →")
				]))])]),
				W("section", wf, [W("header", Tf, [r[22] ||= W("div", null, [W("span", { class: "dash-kicker" }, "🗓️ ТВОРЧЕСКИЙ КАЛЕНДАРЬ"), W("h2", null, "Мои события")], -1), W("button", {
					type: "button",
					class: "dash-view-all",
					"data-action": "nav",
					"data-nav": "events",
					onClick: r[7] ||= Uo((t) => e.navigate("events"), ["stop"])
				}, "Все события →")]), W("div", Ef, [(H(!0), U(V, null, B(e.model.events, (e) => (H(), U("article", {
					key: String(e.id),
					class: "dash-entry dash-event"
				}, [
					W("div", Df, [W("strong", null, k(e.formattedDate), 1), W("span", null, k(e.time || "Весь день"), 1)]),
					W("div", Of, [
						W("div", kf, k(e.typeLabel) + k(e.past ? " · Прошедшее" : ""), 1),
						W("h3", null, k(e.title), 1),
						e.notes ? (H(), U("p", Af, k(String(e.notes).slice(0, 160)), 1)) : K("", !0)
					]),
					W("button", {
						type: "button",
						class: "dash-entry-link",
						"data-action": "dash-open-event",
						"data-id": String(e.id)
					}, "Подробнее →", 8, jf)
				]))), 128)), e.model.events.length ? K("", !0) : (H(), U("div", Mf, [
					r[23] ||= W("span", null, "🗓️", -1),
					r[24] ||= W("strong", null, "Событий пока нет", -1),
					r[25] ||= W("p", null, "Добавь даты релизов, записи, встречи и другие планы своей музыкальной работы.", -1),
					W("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "nav",
						"data-nav": "events",
						onClick: r[8] ||= Uo((t) => e.navigate("events"), ["stop"])
					}, "Добавить событие →")
				]))])])
			])
		], 8, tf));
	}
}, Pf = Object.freeze([
	"myideas",
	"myprompts",
	"events"
]);
function Ff(e, { router: t, legacyApi: n, syncRoute: r = ou } = {}, i) {
	if (typeof e != "string" || !e || !n || typeof n.snapshot != "function") return !1;
	let a = i === "menu", o = n.snapshot()?.items, s = a ? Array.isArray(o) && o.some((t) => t?.id === e) : Pf.includes(e), c = a ? n.navigate : n.navigateWorkspace;
	if (!s || typeof c != "function") return !1;
	let l = !1;
	try {
		let n = Pl(e);
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
function If(e, t = {}) {
	return Ff(e, t, "menu");
}
function Lf(e, t = {}) {
	return Ff(e, t, "shortcut");
}
// src/vue/home/legacyHomeDashboardBridge.js
function Rf({ mountVueFeature: e, sharedUi: t }) {
	let n = window.SUNOBOOM_LEGACY_DASHBOARD, r = document.getElementById("app");
	if (!n?.snapshot || !r) return () => {};
	let i = null, a = !1;
	function o() {
		if (a) return;
		let o = r.querySelector("#sb-vue-dashboard");
		if (i?.node === o || (i &&= (i.unmount(), null), !o)) return;
		let s = n.snapshot();
		if (!s) return;
		t.publishDashboardStats(s);
		let c = e(o, Nf, {
			model: s,
			navigate: (e) => Lf(e, {
				router: Ml,
				legacyApi: window.SUNOBOOM_LEGACY_NAV
			})
		});
		c && (i = {
			node: o,
			unmount: c
		});
	}
	let s = new MutationObserver(o);
	return s.observe(r, { childList: !0 }), o(), () => {
		a = !0, s.disconnect(), i?.unmount(), i = null;
	};
}
// src/vue/account/PromptCollection.vue
var zf = {
	key: 0,
	class: "sub",
	"data-sb-vue-prompt-library-recap": ""
}, Bf = { class: "section-title" }, Vf = {
	key: 1,
	class: "saved-list"
}, Hf = { class: "row" }, Uf = { class: "actions" }, Wf = ["data-id"], Gf = ["innerHTML"], Kf = ["data-id"], qf = ["data-id", "aria-label"], Jf = ["innerHTML"], Yf = { class: "sub" }, Xf = {
	key: 2,
	class: "empty"
}, Zf = ["innerHTML"], Qf = {
	__name: "PromptCollection",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = Q();
		return (n, r) => (H(), U(V, null, [
			I(t).librarySummary.ready ? (H(), U("p", zf, " Последний просмотр библиотеки: " + k(I(t).librarySummary.promptCount) + " промптов ", 1)) : K("", !0),
			W("div", Bf, [W("h2", null, "Сохранённые промпты (" + k(e.model.items.length) + ")", 1)]),
			e.model.items.length ? (H(), U("div", Vf, [(H(!0), U(V, null, B(e.model.items, (t) => (H(), U("article", {
				key: t.id,
				class: "saved-item"
			}, [
				W("div", Hf, [W("h3", null, k(t.title), 1), W("div", Uf, [
					W("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "copy-saved",
						"data-id": t.id
					}, [W("span", {
						"aria-hidden": "true",
						innerHTML: e.model.icons.copy
					}, null, 8, Gf), r[0] ||= G(" Копировать", -1)], 8, Wf),
					W("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "edit-manual-prompt",
						"data-id": t.id
					}, "Изменить", 8, Kf),
					W("button", {
						type: "button",
						class: "btn danger small",
						"data-action": "delete-saved",
						"data-id": t.id,
						"aria-label": "Удалить промпт «" + t.title + "»"
					}, [W("span", {
						"aria-hidden": "true",
						innerHTML: e.model.icons.trash
					}, null, 8, Jf)], 8, qf)
				])]),
				W("p", null, k(t.text), 1),
				W("span", Yf, k(t.genre) + " · " + k(t.date), 1)
			]))), 128))])) : (H(), U("div", Xf, [
				W("span", {
					"aria-hidden": "true",
					innerHTML: e.model.icons.music
				}, null, 8, Zf),
				r[1] ||= W("strong", null, "Промптов пока нет", -1),
				r[2] ||= G("Сохрани первый здесь или в Suno Studio.", -1)
			]))
		], 64));
	}
};
// src/vue/account/legacyPromptCollectionBridge.js
function $f({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PROMPT_LIST, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-prompts-list");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, Qf, { model: o });
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
// src/vue/account/PromptEditor.vue
var ep = {
	key: 0,
	class: "sub",
	"data-sb-vue-last-idea-draft": ""
}, tp = { class: "field" }, np = { class: "field" }, rp = ["value"], ip = { class: "field" }, ap = {
	id: "sb-prompt-char-count",
	class: "sub"
}, op = {
	__name: "PromptEditor",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Ht({ ...t.initial.values }), r = q(() => n.text.length), i = Q();
		return R(() => [
			n.title,
			n.genre,
			n.text,
			t.initial.editing
		], () => i.publishPromptDraftSummary(n, t.initial.editing), { immediate: !0 }), (t, a) => (H(), U(V, null, [
			W("h3", null, k(e.initial.editing ? "Редактирование промпта" : "Новый промпт для Suno"), 1),
			I(i).ideaDraftSummary.ready ? (H(), U("p", ep, "Последний открытый черновик идеи: " + k(I(i).ideaDraftSummary.ideaLength) + " / 3000 символов", 1)) : K("", !0),
			W("div", tp, [a[3] ||= W("label", { for: "custom-prompt-title" }, "Название", -1), L(W("input", {
				id: "custom-prompt-title",
				"onUpdate:modelValue": a[0] ||= (e) => n.title = e,
				maxlength: "100",
				placeholder: "Например, Романтичный афро-поп"
			}, null, 512), [[J, n.title]])]),
			W("div", np, [a[4] ||= W("label", { for: "custom-prompt-genre" }, "Жанр", -1), L(W("select", {
				id: "custom-prompt-genre",
				"onUpdate:modelValue": a[1] ||= (e) => n.genre = e
			}, [(H(!0), U(V, null, B(e.initial.genres, (e) => (H(), U("option", {
				key: e.id,
				value: e.id
			}, k(e.name), 9, rp))), 128))], 512), [[Io, n.genre]])]),
			W("div", ip, [
				a[5] ||= W("label", { for: "custom-prompt-text" }, "Текст промпта (до 1000 символов)", -1),
				L(W("textarea", {
					id: "custom-prompt-text",
					"onUpdate:modelValue": a[2] ||= (e) => n.text = e,
					rows: "7",
					maxlength: "1000",
					"aria-describedby": "sb-prompt-char-count",
					placeholder: "Modern Russian-language afropop, 105 BPM, clean vocals, groovy bass..."
				}, null, 512), [[J, n.text]]),
				W("span", ap, k(r.value) + " / 1000 символов", 1)
			])
		], 64));
	}
};
// src/vue/account/legacyPromptEditorBridge.js
function sp({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PROMPT_EDITOR, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-prompt-form");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, op, { initial: o });
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
// src/vue/account/LibraryCollection.vue
var cp = { class: "account-back" }, lp = {
	type: "button",
	class: "btn ghost small",
	"data-action": "workspace-back"
}, up = {
	key: 0,
	class: "sb-dna-summary",
	"data-sb-vue-library-summary": ""
}, dp = { class: "section-title" }, fp = {
	key: 1,
	class: "genre-grid"
}, pp = ["data-id"], mp = { class: "genre-content" }, hp = { class: "kicker" }, gp = { class: "foot" }, _p = {
	key: 2,
	class: "empty"
}, vp = { class: "section-title" }, yp = {
	key: 3,
	class: "idea-grid"
}, bp = { class: "idea-badge" }, xp = { class: "actions" }, Sp = ["data-id", "data-i"], Cp = ["data-id", "data-i"], wp = {
	key: 4,
	class: "empty"
}, Tp = { class: "section-title" }, Ep = {
	key: 5,
	class: "idea-grid"
}, Dp = { class: "idea-badge" }, Op = ["data-id"], kp = {
	key: 6,
	class: "empty"
}, Ap = { class: "section-title" }, jp = {
	key: 7,
	class: "idea-grid"
}, Mp = { class: "idea-badge" }, Np = { class: "generator-story" }, Pp = { class: "generator-hook" }, Fp = {
	key: 0,
	class: "generator-detail"
}, Ip = { class: "actions" }, Lp = ["data-id"], Rp = ["data-id"], zp = ["data-id", "aria-label"], Bp = {
	key: 8,
	class: "empty"
}, Vp = { class: "section-title" }, Hp = {
	key: 9,
	class: "saved-list"
}, Up = { class: "row" }, Wp = { class: "actions" }, Gp = ["data-id"], Kp = ["data-id", "aria-label"], qp = { class: "sub" }, Jp = {
	key: 10,
	class: "empty"
}, Yp = {
	__name: "LibraryCollection",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = Q();
		return R(() => t.model, (e) => n.publishLibrarySummary(e), { immediate: !0 }), (t, r) => (H(), U(V, null, [
			W("div", cp, [W("button", lp, k(e.model.backLabel), 1)]),
			r[14] ||= W("header", { class: "heading" }, [W("h1", null, "Моя библиотека"), W("p", null, "Любимые жанры, идеи и промпты. Сохраняются локально в этом браузере.")], -1),
			I(n).librarySummary.ready ? (H(), U("div", up, [
				W("div", null, [W("b", null, k(I(n).librarySummary.genreCount), 1), r[0] ||= W("span", null, "Избранных жанров", -1)]),
				W("div", null, [W("b", null, k(I(n).librarySummary.totalIdeaCount), 1), r[1] ||= W("span", null, "Идей в библиотеке", -1)]),
				W("div", null, [W("b", null, k(I(n).librarySummary.promptCount), 1), r[2] ||= W("span", null, "Сохранённых промптов", -1)])
			])) : K("", !0),
			W("div", dp, [W("h2", null, "Избранные жанры (" + k(e.model.genres.length) + ")", 1)]),
			e.model.genres.length ? (H(), U("div", fp, [(H(!0), U(V, null, B(e.model.genres, (e) => (H(), U("button", {
				key: e.id,
				type: "button",
				class: "genre-card",
				style: D({ "--accent": e.color }),
				"data-action": "genre",
				"data-id": e.id
			}, [r[4] ||= W("div", { class: "art" }, null, -1), W("div", mp, [W("div", null, [
				W("div", hp, k(e.family) + " · " + k(e.bpm[0]) + "–" + k(e.bpm[1]) + " BPM", 1),
				W("h3", null, k(e.name), 1),
				W("p", null, k(e.tagline), 1)
			]), W("div", gp, [W("span", null, k(e.era), 1), r[3] ||= W("span", { style: { color: "#ffacd9" } }, "Открыть →", -1)])])], 12, pp))), 128))])) : (H(), U("div", _p, [...r[5] ||= [W("strong", null, "Пока нет избранных жанров", -1), G("Добавляй их в карточках Академии.", -1)]])),
			W("div", vp, [W("h2", null, "Сохранённые идеи (" + k(e.model.ideas.length) + ")", 1)]),
			e.model.ideas.length ? (H(), U("div", yp, [(H(!0), U(V, null, B(e.model.ideas, (e) => (H(), U("article", {
				key: e.key,
				class: "idea"
			}, [
				W("div", bp, k(e.genre) + " · " + k(e.mood), 1),
				W("h3", null, k(e.title), 1),
				W("p", null, k(e.pitch), 1),
				W("div", xp, [W("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "idea-use",
					"data-id": e.genreId,
					"data-i": e.index
				}, "В студию", 8, Sp), W("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "idea-save",
					"data-id": e.genreId,
					"data-i": e.index
				}, "Сохранено", 8, Cp)])
			]))), 128))])) : (H(), U("div", wp, [...r[6] ||= [W("strong", null, "Нет сохранённых идей", -1), G("Найди интересный сюжет и нажми «Сохранить».", -1)]])),
			W("div", Tp, [W("h2", null, "Мои собственные идеи (" + k(e.model.own.length) + ")", 1), r[7] ||= W("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "nav",
				"data-nav": "myideas"
			}, "Добавить или изменить →", -1)]),
			e.model.own.length ? (H(), U("div", Ep, [(H(!0), U(V, null, B(e.model.own, (e) => (H(), U("article", {
				key: e.id,
				class: "idea"
			}, [
				W("div", Dp, k(e.genre), 1),
				W("h3", null, k(e.title), 1),
				W("p", null, k(e.pitch), 1),
				W("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "edit-manual-idea",
					"data-id": e.id
				}, "Открыть запись →", 8, Op)
			]))), 128))])) : (H(), U("div", kp, [...r[8] ||= [W("strong", null, "Пока нет своих идей", -1), G("Добавь их в личном кабинете.", -1)]])),
			W("div", Ap, [W("h2", null, "Идеи из генератора (" + k(e.model.generated.length) + ")", 1), r[9] ||= W("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "nav",
				"data-nav": "ideas"
			}, "＋ Создать ещё", -1)]),
			e.model.generated.length ? (H(), U("div", jp, [(H(!0), U(V, null, B(e.model.generated, (e) => (H(), U("article", {
				key: e.id,
				class: "idea generated-card"
			}, [
				W("div", Mp, k(e.genre) + " · " + k(e.topic), 1),
				W("h3", null, k(e.title), 1),
				W("p", null, k(e.pitch), 1),
				W("p", Np, k(e.storyLine), 1),
				W("div", Pp, [r[10] ||= W("span", null, "ХУК ПРИПЕВА", -1), W("strong", null, k(e.hook), 1)]),
				e.detail ? (H(), U("p", Fp, "Твоя деталь: " + k(e.detail), 1)) : K("", !0),
				W("div", Ip, [
					W("button", {
						type: "button",
						class: "btn primary small",
						"data-action": "generated-use",
						"data-id": e.id
					}, "В Suno Studio", 8, Lp),
					W("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "generated-copy",
						"data-id": e.id
					}, "Копировать", 8, Rp),
					W("button", {
						type: "button",
						class: "btn danger small",
						"data-action": "generated-delete",
						"data-id": e.id,
						"aria-label": "Удалить идею «" + e.title + "»"
					}, "Удалить", 8, zp)
				])
			]))), 128))])) : (H(), U("div", Bp, [...r[11] ||= [W("strong", null, "Сохранённых новых идей нет", -1), G("Создай идеи в генераторе и нажми «Сохранить».", -1)]])),
			W("div", Vp, [W("h2", null, "Мои промпты (" + k(e.model.prompts.length) + ")", 1), r[12] ||= W("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "nav",
				"data-nav": "myprompts"
			}, "Добавить или изменить →", -1)]),
			e.model.prompts.length ? (H(), U("div", Hp, [(H(!0), U(V, null, B(e.model.prompts, (e) => (H(), U("article", {
				key: e.id,
				class: "saved-item"
			}, [
				W("div", Up, [W("h3", null, k(e.title), 1), W("div", Wp, [W("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "copy-saved",
					"data-id": e.id
				}, "Копировать", 8, Gp), W("button", {
					type: "button",
					class: "btn danger small",
					"data-action": "delete-saved",
					"data-id": e.id,
					"aria-label": "Удалить промпт «" + e.title + "»"
				}, "Удалить", 8, Kp)])]),
				W("p", null, k(e.text), 1),
				W("span", qp, k(e.date), 1)
			]))), 128))])) : (H(), U("div", Jp, [...r[13] ||= [W("strong", null, "Промптов пока нет", -1), G("Создай первый в Suno Studio и сохрани в библиотеке.", -1)]]))
		], 64));
	}
};
// src/vue/account/legacyLibraryBridge.js
function Xp({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_LIBRARY, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-library-collection");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, Yp, { model: o });
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
// src/vue/account/SongCards.vue
var Zp = {
	key: 0,
	class: "sbsong-artist-hint",
	"data-sb-vue-song-collection-recap": ""
}, Qp = {
	key: 1,
	class: "sbsong-grid"
}, $p = ["data-id", "aria-label"], em = ["data-sbsong-cover"], tm = ["src"], nm = { class: "sbsong-card-text" }, rm = { class: "sbsong-card-flags" }, im = { class: "sbsong-card-actions" }, am = ["data-id"], om = ["data-id"], sm = ["data-id"], cm = {
	key: 2,
	class: "sbsong-empty"
}, lm = {
	__name: "SongCards",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ P(t.api.snapshot() || {
			items: [],
			total: 0
		}), r = Q();
		R(n, (e) => r.publishSongCollectionSummary(e), { immediate: !0 });
		function i() {
			let e = t.api.snapshot();
			e && (n.value = e, En(() => t.api.hydrateCovers()));
		}
		return z(() => {
			window.addEventListener("sunoboom:songs-search", i), En(() => t.api.hydrateCovers());
		}), br(() => window.removeEventListener("sunoboom:songs-search", i)), (e, t) => (H(), U(V, null, [I(r).songCollectionSummary.ready ? (H(), U("p", Zp, " Найдено " + k(I(r).songCollectionSummary.visibleCount) + " из " + k(I(r).songCollectionSummary.totalCount) + " песен ", 1)) : K("", !0), n.value.items.length ? (H(), U("div", Qp, [(H(!0), U(V, null, B(n.value.items, (e) => (H(), U("article", {
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
		}, null, 8, em)) : e.coverUrl ? (H(), U("img", {
			key: 1,
			alt: "",
			src: e.coverUrl,
			style: { display: "block" },
			loading: "lazy"
		}, null, 8, tm)) : K("", !0), t[0] ||= W("span", {
			class: "sbsong-no-cover",
			"aria-hidden": "true"
		}, "♫", -1)], 8, $p), W("div", nm, [
			W("small", null, k(e.genre), 1),
			W("h3", null, k(e.title), 1),
			W("p", null, k(e.artist), 1),
			W("div", rm, [W("span", null, k(e.status), 1)]),
			W("div", im, [
				W("button", {
					type: "button",
					"data-sbsong-action": "open",
					"data-id": e.id
				}, "Открыть", 8, am),
				W("button", {
					type: "button",
					"data-sbsong-action": "edit",
					"data-id": e.id
				}, "Изменить", 8, om),
				W("button", {
					type: "button",
					"data-sbsong-action": "share",
					"data-id": e.id
				}, "Поделиться", 8, sm)
			])
		])]))), 128))])) : (H(), U("div", cm, k(n.value.total ? "По этому запросу песен нет." : "Песен пока нет. Добавь первую карточку и загрузи аудиофайл."), 1))], 64));
	}
};
// src/vue/account/legacySongCardsBridge.js
function um({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SONG_CARDS, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-song-cards");
		if (r?.node === a || (r &&= (r.unmount(), null), !a || !t.snapshot())) return;
		let o = e(a, lm, { api: t });
		o && (r = {
			node: a,
			unmount: o
		});
	}
	let o = new MutationObserver(a);
	return o.observe(n, { childList: !0 }), a(), () => {
		i = !0, o.disconnect(), r?.unmount(), r = null;
	};
}
// src/vue/account/SongVersions.vue
var dm = {
	class: "sbsong-versions",
	"data-sb-vue-song-versions": "",
	"aria-label": "Версии записи"
}, fm = { class: "sbsong-version-heading" }, pm = { key: 0 }, mm = { class: "sbsong-version-row-head" }, hm = {
	key: 0,
	class: "sbsong-version-main-badge"
}, gm = {
	key: 1,
	class: "sbsong-version-play-badge"
}, _m = { class: "sbsong-version-actions" }, vm = ["data-version-id"], ym = ["data-version-id"], bm = ["data-id", "data-version-id"], xm = ["data-version-id"], Sm = { class: "sbsong-version-notes" }, Cm = ["data-sbsong-version-title", "value"], wm = ["data-sbsong-version-note", "value"], Tm = ["data-version-id"], Em = { key: 0 }, Dm = {
	type: "button",
	class: "sbsong-compare-toggle",
	"data-sbsong-action": "compare-toggle"
}, Om = {
	key: 0,
	class: "sbsong-compare-grid"
}, km = ["value"], Am = ["value"], jm = ["value"], Mm = ["value"], Nm = {
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
		return (t, n) => (H(), U("section", dm, [
			W("div", fm, [W("h3", null, "Версии записи (" + k(e.versions.length) + ")", 1), e.playingLabel ? (H(), U("small", pm, "В основном плеере: " + k(e.playingLabel), 1)) : K("", !0)]),
			(H(!0), U(V, null, B(e.versions, (t) => (H(), U("article", {
				key: t.id,
				class: "sbsong-version-row"
			}, [
				W("div", mm, [W("div", null, [
					W("strong", null, k(t.label), 1),
					t.isMain ? (H(), U("span", hm, "★ Основная")) : K("", !0),
					t.isPlaying ? (H(), U("span", gm, "♫ Выбрана")) : K("", !0),
					W("small", null, k(t.fileName) + " · " + k(t.sizeLabel) + " · " + k(t.addedDate), 1)
				])]),
				W("div", _m, [
					W("button", {
						type: "button",
						"data-sbsong-action": "version-play",
						"data-version-id": t.id
					}, "Выбрать для плеера", 8, vm),
					t.isMain ? K("", !0) : (H(), U("button", {
						key: 0,
						type: "button",
						"data-sbsong-action": "version-main",
						"data-version-id": t.id
					}, "★ Сделать основной", 8, ym)),
					W("button", {
						type: "button",
						"data-sbsong-action": "share-file",
						"data-id": e.songId,
						"data-version-id": t.id
					}, "Сохранить / отправить", 8, bm),
					W("button", {
						type: "button",
						class: "sbsong-version-danger",
						"data-sbsong-action": "version-remove",
						"data-version-id": t.id
					}, "Удалить дубль", 8, xm)
				]),
				W("details", Sm, [
					n[2] ||= W("summary", null, "Название и заметки", -1),
					W("label", null, [n[0] ||= G("Название версии ", -1), W("input", {
						type: "text",
						maxlength: "90",
						"data-sbsong-version-title": t.id,
						value: t.label
					}, null, 8, Cm)]),
					W("label", null, [n[1] ||= G("Чем отличается этот дубль ", -1), W("textarea", {
						maxlength: "800",
						rows: "2",
						"data-sbsong-version-note": t.id,
						value: t.notes,
						placeholder: "Например: более плотный припев, удачный вокал..."
					}, null, 8, wm)]),
					W("button", {
						type: "button",
						"data-sbsong-action": "version-save",
						"data-version-id": t.id
					}, "Сохранить заметки", 8, Tm)
				])
			]))), 128)),
			e.versions.length ? K("", !0) : (H(), U("p", Em, "Пока нет локальных версий. Загрузи первую запись в MP3, M4A или WAV.")),
			e.versions.length > 1 ? (H(), U(V, { key: 1 }, [W("button", Dm, k(e.compareOpen ? "Скрыть сравнение A/B" : "Сравнить версии A/B"), 1), e.compareOpen ? (H(), U("div", Om, [
				W("label", null, [
					n[3] ||= G("Версия A ", -1),
					W("select", {
						id: "sbsong-compare-a",
						value: e.compareAId
					}, [(H(!0), U(V, null, B(e.versions, (e) => (H(), U("option", {
						key: e.id,
						value: e.id
					}, k(e.label), 9, Am))), 128))], 8, km),
					n[4] ||= W("audio", {
						id: "sbsong-ab-a",
						controls: "",
						preload: "metadata"
					}, null, -1)
				]),
				W("label", null, [
					n[5] ||= G("Версия B ", -1),
					W("select", {
						id: "sbsong-compare-b",
						value: e.compareBId
					}, [(H(!0), U(V, null, B(e.versions, (e) => (H(), U("option", {
						key: e.id,
						value: e.id
					}, k(e.label), 9, Mm))), 128))], 8, jm),
					n[6] ||= W("audio", {
						id: "sbsong-ab-b",
						controls: "",
						preload: "metadata"
					}, null, -1)
				]),
				n[7] ||= W("p", null, "Два независимых плеера для сравнения дублей. Воспроизведение запускается вручную.", -1)
			])) : K("", !0)], 64)) : K("", !0),
			n[8] ||= ua("<div class=\"sbsong-version-add\"><h4>+ Добавить новую версию</h4><label>Аудиофайл (MP3, M4A, WAV и другие) <input id=\"sbsong-version-file\" type=\"file\" accept=\"audio/*,.mp3,.m4a,.wav,.wave,.flac,.ogg,.opus,.aac\"></label><label>Название дубля <input id=\"sbsong-new-version-title\" maxlength=\"90\" type=\"text\" placeholder=\"Например: Версия с новым припевом\"></label><label>Заметка <textarea id=\"sbsong-new-version-notes\" maxlength=\"800\" rows=\"2\" placeholder=\"Что изменилось в этой записи?\"></textarea></label><button type=\"button\" class=\"sbsong-main-btn\" data-sbsong-action=\"version-add\" id=\"sbsong-version-submit\">Сохранить новую версию</button><p>WAV — до 500 МБ, другие форматы — до 150 МБ. Каждая версия хранится отдельно в браузере этого устройства. Старые записи не перезаписываются.</p></div>", 1)
		]));
	}
}, Pm = { class: "sbsong-detail" }, Fm = { class: "sbsong-subhead" }, Im = {
	key: 0,
	class: "sbsong-artist-hint",
	"data-sb-vue-song-detail-recap": ""
}, Lm = { class: "sbsong-detail-layout" }, Rm = { class: "sbsong-detail-cover" }, zm = ["data-sbsong-cover", "alt"], Bm = ["src", "alt"], Vm = {
	key: 2,
	class: "sbsong-no-cover",
	"aria-hidden": "true"
}, Hm = { class: "sbsong-detail-artist" }, Um = { class: "sbsong-detail-tags" }, Wm = { key: 0 }, Gm = { key: 1 }, Km = {
	key: 0,
	class: "sbsong-detail-description"
}, qm = {
	class: "sbsong-audio-box",
	id: "sbsong-audio-box"
}, Jm = {
	key: 0,
	controls: "",
	preload: "metadata",
	id: "sbsong-audio-player"
}, Ym = { key: 1 }, Xm = { class: "sbsong-detail-actions" }, Zm = ["data-id"], Qm = ["data-id"], $m = ["href"], eh = ["data-id"], th = ["data-id"], nh = ["data-id"], rh = {
	key: 1,
	class: "sbsong-delete-confirm"
}, ih = ["data-id"], ah = {
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
		return R(() => t.model, (e) => n.publishSongDetailSummary(e), { immediate: !0 }), z(() => {
			En(() => t.api.hydrateMedia());
		}), (t, r) => (H(), U("section", Pm, [
			W("div", Fm, [W("h2", null, k(e.model.title), 1), r[0] ||= W("button", {
				type: "button",
				"data-sbsong-action": "close-detail"
			}, "Закрыть ×", -1)]),
			I(n).songCollectionSummary.ready ? (H(), U("p", Im, " В личной коллекции: " + k(I(n).songCollectionSummary.totalCount) + " песен ", 1)) : K("", !0),
			W("div", Lm, [W("div", Rm, [e.model.hasCover ? (H(), U("img", {
				key: 0,
				"data-sbsong-cover": e.model.id,
				alt: "Обложка песни " + e.model.title
			}, null, 8, zm)) : e.model.coverUrl ? (H(), U("img", {
				key: 1,
				src: e.model.coverUrl,
				alt: "Обложка песни " + e.model.title,
				style: { display: "block" }
			}, null, 8, Bm)) : (H(), U("span", Vm, "♫"))]), W("div", null, [
				W("p", Hm, k(e.model.artist), 1),
				W("p", Um, [e.model.genre ? (H(), U("span", Wm, k(e.model.genre), 1)) : K("", !0), e.model.album ? (H(), U("span", Gm, k(e.model.album), 1)) : K("", !0)]),
				e.model.description ? (H(), U("p", Km, k(e.model.description), 1)) : K("", !0),
				W("div", qm, [e.model.hasPlayableAudio ? (H(), U("audio", Jm)) : (H(), U("p", Ym, "Аудио ещё не добавлено. Добавь первую версию в этой карточке."))]),
				oa(Nm, {
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
				W("div", Xm, [
					W("button", {
						type: "button",
						class: "sbsong-main-btn",
						"data-sbsong-action": "share",
						"data-id": e.model.id
					}, "🔗 Поделиться ссылкой", 8, Zm),
					e.model.hasAudio ? (H(), U("button", {
						key: 0,
						type: "button",
						"data-sbsong-action": "share-file",
						"data-id": e.model.id
					}, "Отправить аудиофайл", 8, Qm)) : K("", !0),
					e.model.listenUrl ? (H(), U("a", {
						key: 1,
						href: e.model.listenUrl,
						target: "_blank",
						rel: "noopener noreferrer"
					}, "Открыть публичную запись ↗", 8, $m)) : K("", !0),
					W("button", {
						type: "button",
						"data-sbsong-action": "producer",
						"data-id": e.model.id
					}, "🎛 Мастер", 8, eh),
					W("button", {
						type: "button",
						"data-sbsong-action": "edit",
						"data-id": e.model.id
					}, "Изменить", 8, th),
					W("button", {
						type: "button",
						class: "sbsong-danger",
						"data-sbsong-action": "delete",
						"data-id": e.model.id
					}, "Удалить", 8, nh)
				]),
				e.model.confirmDelete ? (H(), U("div", rh, [
					r[1] ||= W("strong", null, "Удалить карточку вместе с локальными файлами?", -1),
					W("button", {
						type: "button",
						"data-sbsong-action": "delete-confirm",
						"data-id": e.model.id
					}, "Да, удалить", 8, ih),
					r[2] ||= W("button", {
						type: "button",
						"data-sbsong-action": "delete-cancel"
					}, "Отмена", -1)
				])) : K("", !0)
			])])
		]));
	}
};
// src/vue/account/legacySongDetailBridge.js
function oh({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SONG_DETAIL, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-song-detail");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, ah, {
			api: t,
			model: o
		});
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
// src/vue/account/SongEditor.vue
var sh = {
	id: "sbsong-form",
	class: "sbsong-form-panel"
}, ch = { class: "sbsong-subhead" }, lh = {
	id: "sbsong-save-form",
	class: "sbsong-form"
}, uh = { class: "sbsong-form-columns" }, dh = { class: "sbsong-field" }, fh = { class: "sbsong-artist-field" }, ph = {
	class: "sbsong-field",
	for: "sbsong-artist-input"
}, mh = ["aria-expanded"], hh = {
	id: "sbsong-artist-options",
	class: "sbsong-artist-options",
	role: "listbox",
	"aria-label": "Список артистов"
}, gh = ["onClick"], _h = {
	key: 0,
	class: "sbsong-artist-hint"
}, vh = {
	key: 1,
	class: "sbsong-artist-hint"
}, yh = { class: "sbsong-genre-field" }, bh = {
	class: "sbsong-field",
	for: "sbsong-genre-input"
}, xh = ["aria-expanded"], Sh = ["aria-expanded"], Ch = {
	id: "sbsong-genre-options",
	class: "sbsong-genre-options",
	role: "region",
	"aria-label": "Выбор жанра из Академии"
}, wh = { class: "sbsong-genre-picker-head" }, Th = ["value"], Eh = {
	id: "sbsong-genre-results",
	class: "sbsong-genre-results",
	role: "listbox",
	"aria-label": "Жанры и поджанры"
}, Dh = ["aria-label"], Oh = { class: "sbsong-genre-group-title" }, kh = ["onClick"], Ah = {
	key: 0,
	class: "sbsong-genre-hint"
}, jh = { class: "sbsong-field" }, Mh = { class: "sbsong-field" }, Nh = { class: "sbsong-form-columns" }, Ph = { class: "sbsong-field" }, Fh = {
	class: "sbsong-cover-auto",
	"aria-live": "polite"
}, Ih = { id: "sbsong-cover-status" }, Lh = { class: "sbsong-form-columns" }, Rh = { class: "sbsong-field" }, zh = { class: "sbsong-field" }, Bh = { class: "sbsong-field" }, Vh = {
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
		let t = e, n = /* @__PURE__ */ Ht({
			title: t.model.title,
			artist: t.model.artist,
			genre: t.model.genre,
			album: t.model.album,
			description: t.model.description,
			audioUrl: t.model.audioUrl,
			listenUrl: t.model.listenUrl,
			coverUrl: t.model.coverUrl
		}), r = /* @__PURE__ */ P(!1), i = /* @__PURE__ */ P(!1), a = /* @__PURE__ */ P(t.api.artistChoices()), o = /* @__PURE__ */ P(!1), s = /* @__PURE__ */ P(!1), c = /* @__PURE__ */ P("Все"), l = /* @__PURE__ */ P(t.api.genreChoices()), u = /* @__PURE__ */ P(t.api.genreFamilies()), d = (e) => String(e || "").normalize("NFKC").toLocaleLowerCase("ru"), f = q(() => {
			let e = d(n.artist);
			return (i.value ? a.value : a.value.filter((t) => d(t.name).includes(e))).slice(0, 40);
		}), p = q(() => i.value ? a.value.length > 40 : a.value.filter((e) => d(e.name).includes(d(n.artist))).length > 40), m = q(() => {
			let e = s.value ? "" : d(n.genre.trim());
			return l.value.filter((t) => (c.value === "Все" || t.family === c.value) && (!e || d(t.name + " " + t.family).includes(e)));
		}), h = q(() => u.value.map((e) => ({
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
			document.addEventListener("pointerdown", x), En(() => t.api.hydrateCover());
		}), br(() => document.removeEventListener("pointerdown", x)), (t, d) => (H(), U("section", sh, [W("div", ch, [W("h2", null, k(e.model.editId ? "Изменить песню" : "Новая песня"), 1), d[16] ||= W("button", {
			type: "button",
			"data-sbsong-action": "cancel"
		}, "Закрыть ×", -1)]), W("form", lh, [
			W("div", uh, [
				W("label", dh, [d[17] ||= W("span", null, "Название *", -1), L(W("input", {
					"onUpdate:modelValue": d[0] ||= (e) => n.title = e,
					type: "text",
					name: "title",
					maxlength: "120",
					placeholder: "Название песни"
				}, null, 512), [[J, n.title]])]),
				W("div", fh, [
					W("label", ph, [d[18] ||= W("span", null, "Исполнитель / проект", -1), L(W("input", {
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
						onKeydown: d[4] ||= Go(Uo((e) => r.value = !1, ["prevent"]), ["esc"])
					}, null, 40, mh), [[J, n.artist]])]),
					W("div", { class: "sbsong-artist-shortcuts" }, [W("button", {
						type: "button",
						onClick: y
					}, "▾ Выбрать из списка"), W("button", {
						type: "button",
						onClick: g
					}, "+ Сохранить артиста")]),
					L(W("div", hh, [
						(H(!0), U(V, null, B(f.value, (e) => (H(), U("button", {
							key: e.name,
							type: "button",
							role: "option",
							class: "sbsong-artist-option",
							onClick: (t) => _(e.name)
						}, [W("strong", null, k(e.name), 1), W("small", null, k(e.origin), 1)], 8, gh))), 128)),
						p.value ? (H(), U("p", _h, "Уточни поиск, чтобы увидеть остальные варианты.")) : K("", !0),
						f.value.length ? K("", !0) : (H(), U("p", vh, k(a.value.length ? "Совпадений нет. Нового артиста можно сохранить кнопкой выше." : "Список пуст. Введи имя и сохрани первого артиста."), 1))
					], 512), [[Qa, r.value]])
				]),
				W("div", yh, [
					W("label", bh, [d[19] ||= W("span", null, "Жанр", -1), L(W("input", {
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
						onKeydown: d[8] ||= Go(Uo((e) => o.value = !1, ["prevent"]), ["esc"])
					}, null, 40, xh), [[J, n.genre]])]),
					W("button", {
						type: "button",
						class: "sbsong-genre-toggle",
						"aria-controls": "sbsong-genre-options",
						"aria-expanded": String(o.value),
						onClick: b
					}, "▾ Выбрать из Академии", 8, Sh),
					L(W("div", Ch, [W("div", wh, [
						d[21] ||= W("label", { for: "sbsong-genre-family" }, "Направление", -1),
						L(W("select", {
							id: "sbsong-genre-family",
							"onUpdate:modelValue": d[9] ||= (e) => c.value = e,
							"aria-label": "Фильтр по направлению",
							onChange: d[10] ||= (e) => s.value = !0
						}, [d[20] ||= W("option", { value: "Все" }, "Все направления", -1), (H(!0), U(V, null, B(u.value, (e) => (H(), U("option", {
							key: e,
							value: e
						}, k(e), 9, Th))), 128))], 544), [[Io, c.value]]),
						W("small", null, k(m.value.length) + " из " + k(l.value.length), 1)
					]), W("div", Eh, [(H(!0), U(V, null, B(h.value, (e) => (H(), U("div", {
						key: e.name,
						class: "sbsong-genre-group",
						role: "group",
						"aria-label": e.name
					}, [W("div", Oh, [G(k(e.name) + " ", 1), W("span", null, k(e.genres.length), 1)]), (H(!0), U(V, null, B(e.genres, (e) => (H(), U("button", {
						key: e.id,
						type: "button",
						class: "sbsong-genre-option",
						role: "option",
						onClick: (t) => v(e.name)
					}, [W("span", null, k(e.name), 1)], 8, kh))), 128))], 8, Dh))), 128)), m.value.length ? K("", !0) : (H(), U("p", Ah, k(l.value.length ? "Не найдено. Можно ввести свой жанр вручную." : "Каталог Академии пока недоступен. Введи жанр вручную."), 1))])], 512), [[Qa, o.value]])
				]),
				W("label", jh, [d[22] ||= W("span", null, "Альбом / релиз", -1), L(W("input", {
					"onUpdate:modelValue": d[11] ||= (e) => n.album = e,
					type: "text",
					name: "album",
					maxlength: "120",
					placeholder: "Название альбома"
				}, null, 512), [[J, n.album]])])
			]),
			W("label", Mh, [d[23] ||= W("span", null, "Описание", -1), L(W("textarea", {
				"onUpdate:modelValue": d[12] ||= (e) => n.description = e,
				name: "description",
				maxlength: "700",
				rows: "3",
				placeholder: "История, настроение или заметки"
			}, null, 512), [[J, n.description]])]),
			W("div", Nh, [W("label", Ph, [W("span", null, k(e.model.hasAudio ? "Добавить новую аудиоверсию" : "Загрузить аудиофайл (MP3, M4A, WAV и другие)"), 1), d[24] ||= W("input", {
				name: "audio",
				type: "file",
				accept: "audio/*,.mp3,.wav,.wave,.m4a,.aac,.flac,.ogg,.opus"
			}, null, -1)]), d[25] ||= W("label", { class: "sbsong-field" }, [W("span", null, "Обложка вручную (необязательно)"), W("input", {
				name: "cover",
				type: "file",
				accept: "image/png,image/jpeg,image/webp,image/gif"
			})], -1)]),
			W("div", Fh, [d[28] ||= W("div", { class: "sbsong-cover-preview-figure" }, [W("img", {
				id: "sbsong-cover-preview-img",
				alt: "Предпросмотр обложки",
				hidden: ""
			}), W("span", {
				id: "sbsong-cover-preview-placeholder",
				"aria-hidden": "true"
			}, "♫")], -1), W("div", null, [
				d[26] ||= W("strong", null, "Обложка из аудиофайла", -1),
				W("p", Ih, k(e.model.hasCover ? "Загружаю сохранённую обложку…" : "Выбери MP3, M4A или FLAC — попробую найти обложку автоматически"), 1),
				d[27] ||= W("small", null, "Ручная обложка имеет приоритет, если ты её выберешь.", -1)
			])]),
			W("div", Lh, [
				W("label", Rh, [d[29] ||= W("span", null, "Прямая ссылка на MP3 (если есть)", -1), L(W("input", {
					"onUpdate:modelValue": d[13] ||= (e) => n.audioUrl = e,
					type: "text",
					name: "audioUrl",
					maxlength: "700",
					placeholder: "https://.../song.mp3"
				}, null, 512), [[J, n.audioUrl]])]),
				W("label", zh, [d[30] ||= W("span", null, "Публичная страница песни", -1), L(W("input", {
					"onUpdate:modelValue": d[14] ||= (e) => n.listenUrl = e,
					type: "text",
					name: "listenUrl",
					maxlength: "700",
					placeholder: "https://suno.com/..."
				}, null, 512), [[J, n.listenUrl]])]),
				W("label", Bh, [d[31] ||= W("span", null, "Публичная обложка (по желанию)", -1), L(W("input", {
					"onUpdate:modelValue": d[15] ||= (e) => n.coverUrl = e,
					type: "text",
					name: "coverUrl",
					maxlength: "700",
					placeholder: "https://.../cover.jpg"
				}, null, 512), [[J, n.coverUrl]])])
			]),
			d[32] ||= W("p", { class: "sbsong-form-help" }, " MP3, M4A, WAV, FLAC и другие аудиофайлы сохраняются локально (IndexedDB): WAV — до 500 МБ, остальные — до 150 МБ при наличии свободной памяти браузера. Новая загрузка добавляет версию, не заменяя старую. Обложка ищется в MP3, M4A и FLAC; для WAV её обычно добавляют вручную. Локальное аудио по общей ссылке не передаётся. ", -1),
			d[33] ||= W("div", { class: "sbsong-form-actions" }, [W("button", {
				type: "submit",
				class: "sbsong-main-btn",
				id: "sbsong-submit"
			}, "Сохранить песню"), W("button", {
				type: "button",
				"data-sbsong-action": "cancel"
			}, "Отмена")], -1)
		])]));
	}
};
// src/vue/account/legacySongEditorBridge.js
function Hh({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SONG_EDITOR, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-song-editor");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, Vh, {
			api: t,
			model: o
		});
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
// src/vue/account/ArtistManager.vue
var Uh = {
	id: "sbsong-artist-manager",
	class: "sbsong-artist-manager",
	"data-sb-vue-artist-manager": ""
}, Wh = {
	key: 0,
	class: "sbsong-artist-hint"
}, Gh = {
	key: 1,
	class: "sbsong-artist-hint",
	"data-sb-vue-dna-recap": ""
}, Kh = { id: "sbsong-artist-manager-results" }, qh = ["data-id", "aria-label"], Jh = {
	key: 0,
	class: "sbsong-artist-hint"
}, Yh = {
	__name: "ArtistManager",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ P(t.model.filter || ""), r = (e) => String(e || "").normalize("NFKC").toLocaleLowerCase("ru"), i = q(() => t.model.artists.filter((e) => r(e.name).includes(r(n.value)))), a = Q();
		return R(() => [t.model, i.value.length], ([e, t]) => a.publishArtistManagerSummary(e, t), { immediate: !0 }), (t, r) => (H(), U("section", Uh, [
			r[1] ||= W("div", { class: "sbsong-subhead" }, [W("h2", null, "Мои артисты"), W("button", {
				type: "button",
				"data-sbsong-action": "artists-manage"
			}, "Закрыть ×")], -1),
			r[2] ||= W("p", null, "Создавай свой список исполнителей и музыкальных проектов. Артисты из «ДНК артиста» и сохранённых песен также доступны при выборе. Удаление из списка не меняет существующие песни.", -1),
			e.model.dnaCount ? (H(), U("p", Wh, " Профилей ДНК артиста доступно для выбора: " + k(e.model.dnaCount) + ". Они не удаляются при изменении этого списка. ", 1)) : K("", !0),
			I(a).artistDnaSummary.ready ? (H(), U("p", Gh, " Последний просмотр ДНК артиста: " + k(I(a).artistDnaSummary.profileCount) + " профилей ", 1)) : K("", !0),
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
			}, null, 512), [[J, n.value]]),
			W("div", Kh, [(H(!0), U(V, null, B(i.value, (e) => (H(), U("div", {
				key: e.id,
				class: "sbsong-artist-entry"
			}, [W("span", null, k(e.name), 1), W("button", {
				type: "button",
				"data-sbsong-action": "artist-remove",
				"data-id": e.id,
				"aria-label": "Удалить артиста " + e.name
			}, "Удалить", 8, qh)]))), 128)), i.value.length ? K("", !0) : (H(), U("p", Jh, k(e.model.artists.length ? "Ничего не найдено." : "Пока нет добавленных вручную артистов."), 1))])
		]));
	}
};
// src/vue/account/legacyArtistManagerBridge.js
function Xh({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ARTIST_MANAGER, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-artist-manager");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, Yh, { model: o });
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
// src/vue/account/ArtistDNA.vue
var Zh = {
	key: 0,
	class: "sb-dna-summary",
	"data-sb-vue-artist-manager-recap": ""
}, Qh = { key: 1 }, $h = {
	key: 0,
	class: "sb-dna-grid"
}, eg = ["data-id"], tg = { class: "sb-dna-cardimg" }, ng = ["src"], rg = {
	key: 1,
	class: "sb-dna-empty"
}, ig = {
	key: 2,
	class: "sb-dna-detail"
}, ag = { class: "sb-dna-actions" }, og = ["data-id"], sg = ["data-id"], cg = ["data-id"], lg = { class: "sb-dna-hero" }, ug = { class: "sb-dna-portrait" }, dg = ["src"], fg = { class: "sb-dna-facts" }, pg = {
	key: 0,
	class: "sb-dna-restrictions"
}, mg = { class: "sb-dna-descr" }, hg = { class: "sb-dna-style" }, gg = { class: "sb-dna-actions" }, _g = ["data-id"], vg = ["data-id"], yg = { class: "sb-dna-related" }, bg = ["data-id"], xg = { key: 1 }, Sg = {
	__name: "ArtistDNA",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = Q();
		return R(() => t.model, (e) => n.publishArtistDnaSummary(e), { immediate: !0 }), (t, r) => (H(), U(V, null, [I(n).artistManagerSummary.ready ? (H(), U("div", Zh, [W("div", null, [W("b", null, k(I(n).artistManagerSummary.artistCount), 1), r[0] ||= W("span", null, "В ручном списке артистов", -1)])])) : K("", !0), e.model.detail ? (H(), U("div", ig, [
			W("div", ag, [
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
				}, "В Suno Studio", 8, og),
				W("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "dna-edit",
					"data-id": e.model.detail.id
				}, "Изменить", 8, sg),
				W("button", {
					type: "button",
					class: "btn danger small",
					"data-action": "dna-delete",
					"data-id": e.model.detail.id
				}, "Удалить", 8, cg)
			]),
			W("div", lg, [W("div", ug, [e.model.detail.portrait ? (H(), U("img", {
				key: 0,
				src: e.model.detail.portrait,
				alt: "Портрет артиста",
				loading: "lazy"
			}, null, 8, dg)) : (H(), U(V, { key: 1 }, [G("♫")], 64))]), W("div", null, [
				r[3] ||= W("span", null, "МУЗЫКАЛЬНАЯ ИДЕНТИЧНОСТЬ", -1),
				W("h2", null, k(e.model.detail.name), 1),
				W("p", null, k(e.model.detail.subtitle), 1)
			])]),
			W("div", fg, [(H(!0), U(V, null, B(e.model.detail.facts, (e) => (H(), U("div", {
				key: e.label,
				class: "sb-dna-fact"
			}, [W("span", null, k(e.label), 1), W("strong", null, k(e.value), 1)]))), 128))]),
			(H(!0), U(V, null, B(e.model.detail.textFields, (e) => (H(), U("section", {
				key: e.label,
				class: "sb-dna-descr"
			}, [W("h3", null, k(e.label), 1), W("p", null, k(e.value), 1)]))), 128)),
			e.model.detail.forbids.length ? (H(), U("div", pg, [r[4] ||= W("strong", null, "Запреты:", -1), (H(!0), U(V, null, B(e.model.detail.forbids, (e) => (H(), U("span", { key: e }, k(e), 1))), 128))])) : K("", !0),
			W("section", mg, [
				r[5] ||= W("h3", null, "Промпт для Suno Style", -1),
				W("div", hg, k(e.model.detail.style), 1),
				W("div", gg, [W("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "dna-copy",
					"data-id": e.model.detail.id
				}, "Копировать Style", 8, _g), W("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "dna-apply",
					"data-id": e.model.detail.id
				}, "Применить в Suno Studio", 8, vg)])
			]),
			W("div", yg, [W("h3", null, "Связанные паспорта треков (" + k(e.model.detail.related.length) + ")", 1), e.model.detail.related.length ? (H(!0), U(V, { key: 0 }, B(e.model.detail.related, (e) => (H(), U("button", {
				key: e.id,
				type: "button",
				class: "sb-dna-tracklink",
				"data-action": "dna-track",
				"data-id": e.id
			}, [W("strong", null, k(e.title), 1), W("span", null, k(e.status) + " →", 1)], 8, bg))), 128)) : (H(), U("p", xg, "Пока нет привязанных треков. В «Паспорте трека» можно выбрать этого артиста."))])
		])) : (H(), U("div", Qh, [e.model.profiles.length ? (H(), U("div", $h, [(H(!0), U(V, null, B(e.model.profiles, (e) => (H(), U("button", {
			key: e.id,
			type: "button",
			class: "sb-dna-card",
			"data-action": "dna-open",
			"data-id": e.id
		}, [
			W("div", tg, [e.portrait ? (H(), U("img", {
				key: 0,
				src: e.portrait,
				alt: "",
				loading: "lazy"
			}, null, 8, ng)) : (H(), U(V, { key: 1 }, [G("♫")], 64))]),
			W("div", null, [
				W("strong", null, k(e.name), 1),
				W("span", null, k(e.genre), 1),
				W("small", null, k(e.timbre), 1)
			]),
			r[1] ||= W("span", { class: "sb-dna-arrow" }, "→", -1)
		], 8, eg))), 128))])) : (H(), U("div", rg, " Здесь будут музыкальные персонажи со своим вокалом, инструментами, стилем и визуальным образом. Создай первый профиль. "))]))], 64));
	}
};
// src/vue/account/legacyArtistDNABridge.js
function Cg({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_DNA, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-dna-view");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, Sg, { model: o });
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
// src/vue/account/ArtistDNAEditor.vue
var wg = {
	id: "dna-editor",
	class: "panel sb-dna-editor",
	"data-sb-vue-dna-editor": ""
}, Tg = { class: "sb-dna-formheader" }, Eg = { class: "sb-dna-fields" }, Dg = { class: "field" }, Og = { class: "field" }, kg = ["value"], Ag = { class: "field" }, jg = ["value"], Mg = { class: "field" }, Ng = { class: "field" }, Pg = { class: "field" }, Fg = {
	key: 0,
	class: "sb-dna-fields"
}, Ig = { class: "field" }, Lg = { class: "field" }, Rg = { class: "field" }, zg = ["for"], Bg = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"rows"
], Vg = { class: "sb-dna-checkboxes" }, Hg = ["id", "onUpdate:modelValue"], Ug = { class: "field" }, Wg = ["for"], Gg = [
	"id",
	"onUpdate:modelValue",
	"rows",
	"maxlength"
], Kg = { class: "field" }, qg = { class: "sb-dna-previewbox" }, Jg = { id: "dna-style-preview" }, Yg = { id: "dna-style-count" }, Xg = {
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
		let t = e, n = /* @__PURE__ */ Ht({ ...t.model.fields }), r = q(() => t.api.stylePreview(n)), i = [
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
		return (t, s) => (H(), U("div", wg, [
			W("div", Tg, [W("div", null, [W("h2", null, k(e.model.editing ? "Редактирование ДНК" : "Новый артист"), 1), s[10] ||= W("p", null, "Сохрани характер звучания — он будет доступен в Suno Studio и «Паспорте трека».", -1)]), s[11] ||= W("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "dna-cancel"
			}, "Закрыть", -1)]),
			W("div", Eg, [
				W("div", Dg, [s[12] ||= W("label", { for: "dna-name" }, "Имя артиста *", -1), L(W("input", {
					id: "dna-name",
					"onUpdate:modelValue": s[0] ||= (e) => n.name = e,
					maxlength: "120",
					placeholder: "Название музыкального проекта"
				}, null, 512), [[J, n.name]])]),
				W("div", Og, [s[13] ||= W("label", { for: "dna-project" }, "Связанный проект", -1), L(W("select", {
					id: "dna-project",
					"onUpdate:modelValue": s[1] ||= (e) => n.projectId = e
				}, [(H(!0), U(V, null, B(e.model.projects, (e) => (H(), U("option", {
					key: e.id,
					value: e.id
				}, k(e.title), 9, kg))), 128))], 512), [[Io, n.projectId]])]),
				W("div", Ag, [s[14] ||= W("label", { for: "dna-genre" }, "Основной жанр", -1), L(W("select", {
					id: "dna-genre",
					"onUpdate:modelValue": s[2] ||= (e) => n.genre = e
				}, [(H(!0), U(V, null, B(e.model.genres, (e) => (H(), U("option", {
					key: e.id,
					value: e.id
				}, k(e.name), 9, jg))), 128))], 512), [[Io, n.genre]])]),
				W("div", Mg, [s[15] ||= W("label", { for: "dna-othergenres" }, "Дополнительные жанры", -1), L(W("input", {
					id: "dna-othergenres",
					"onUpdate:modelValue": s[3] ||= (e) => n.otherGenres = e,
					maxlength: "240",
					placeholder: "Например, pop, R&B, electropop"
				}, null, 512), [[J, n.otherGenres]])]),
				W("div", Ng, [s[17] ||= W("label", { for: "dna-vocal" }, "Тип вокала", -1), L(W("select", {
					id: "dna-vocal",
					"onUpdate:modelValue": s[4] ||= (e) => n.vocal = e
				}, [...s[16] ||= [
					W("option", { value: "male" }, "Мужской", -1),
					W("option", { value: "female" }, "Женский", -1),
					W("option", { value: "duet" }, "Дуэт", -1)
				]], 512), [[Io, n.vocal]])]),
				W("div", Pg, [s[19] ||= W("label", { for: "dna-language" }, "Язык песни", -1), L(W("select", {
					id: "dna-language",
					"onUpdate:modelValue": s[5] ||= (e) => n.language = e
				}, [...s[18] ||= [
					W("option", { value: "Russian" }, "Русский", -1),
					W("option", { value: "English" }, "Английский", -1),
					W("option", { value: "Spanish" }, "Испанский", -1),
					W("option", { value: "Kazakh" }, "Казахский", -1)
				]], 512), [[Io, n.language]])])
			]),
			s[24] ||= W("h3", { class: "sb-dna-formsection" }, "Голос и музыкальный почерк", -1),
			(H(), U(V, null, B(i, (e) => (H(), U(V, { key: e.id }, [e.id === "mood" ? (H(), U("div", Fg, [W("div", Ig, [s[20] ||= W("label", { for: "dna-tempo-min" }, "Темп от (BPM)", -1), L(W("input", {
				id: "dna-tempo-min",
				"onUpdate:modelValue": s[6] ||= (e) => n.tempoMin = e,
				maxlength: "3",
				placeholder: "Например, 90"
			}, null, 512), [[J, n.tempoMin]])]), W("div", Lg, [s[21] ||= W("label", { for: "dna-tempo-max" }, "Темп до (BPM)", -1), L(W("input", {
				id: "dna-tempo-max",
				"onUpdate:modelValue": s[7] ||= (e) => n.tempoMax = e,
				maxlength: "3",
				placeholder: "Например, 120"
			}, null, 512), [[J, n.tempoMax]])])])) : K("", !0), W("div", Rg, [W("label", { for: "dna-" + e.id }, k(e.label), 9, zg), L(W("textarea", {
				id: "dna-" + e.id,
				"onUpdate:modelValue": (t) => n[e.key] = t,
				maxlength: e.max,
				rows: e.rows
			}, null, 8, Bg), [[J, n[e.key]]])])], 64))), 64)),
			s[25] ||= W("h3", { class: "sb-dna-formsection" }, "Запреты и ограничения", -1),
			W("div", Vg, [(H(), U(V, null, B(a, (e) => W("label", { key: e.id }, [L(W("input", {
				id: "dna-" + e.id,
				"onUpdate:modelValue": (t) => n[e.key] = t,
				type: "checkbox"
			}, null, 8, Hg), [[Po, n[e.key]]]), G(" " + k(e.label), 1)])), 64))]),
			W("div", Ug, [s[22] ||= W("label", { for: "dna-extra" }, "Дополнительные требования к аранжировке", -1), L(W("textarea", {
				id: "dna-extra",
				"onUpdate:modelValue": s[8] ||= (e) => n.extra = e,
				rows: "3",
				maxlength: "650"
			}, null, 512), [[J, n.extra]])]),
			s[26] ||= W("h3", { class: "sb-dna-formsection" }, "Творческий образ", -1),
			(H(), U(V, null, B(o, (e) => W("div", {
				key: e.id,
				class: "field"
			}, [W("label", { for: "dna-" + e.id }, k(e.label), 9, Wg), L(W("textarea", {
				id: "dna-" + e.id,
				"onUpdate:modelValue": (t) => n[e.key] = t,
				rows: e.rows,
				maxlength: e.max
			}, null, 8, Gg), [[J, n[e.key]]])])), 64)),
			W("div", Kg, [s[23] ||= W("label", { for: "dna-portrait" }, "Ссылка на портрет (HTTPS)", -1), L(W("input", {
				id: "dna-portrait",
				"onUpdate:modelValue": s[9] ||= (e) => n.portrait = e,
				maxlength: "2000",
				placeholder: "https://…"
			}, null, 512), [[J, n.portrait]])]),
			s[27] ||= W("h3", { class: "sb-dna-formsection" }, "Промпт ДНК для Suno", -1),
			W("div", qg, [W("div", Jg, k(r.value), 1), W("span", Yg, k(r.value.length) + " / 1000", 1)]),
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
};
// src/vue/account/legacyArtistDNAEditorBridge.js
function Zg({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_DNA_EDITOR, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-dna-editor");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, Xg, {
			model: o,
			api: t
		});
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
// src/vue/account/AccountSettings.vue
var Qg = ["data-sb-preferred-theme", "data-sb-applied-theme"], $g = { class: "sbs-layout" }, e_ = { class: "sbs-main-column" }, t_ = { class: "sbs-panel" }, n_ = {
	class: "sbs-field sbs-theme-field",
	for: "sbs-theme"
}, r_ = ["value"], i_ = ["for"], a_ = { class: "sbs-option-text" }, o_ = { class: "sbs-switch" }, s_ = [
	"id",
	"onUpdate:modelValue",
	"data-sbs-setting",
	"aria-label"
], c_ = { class: "sbs-panel" }, l_ = {
	class: "sbs-field",
	for: "sbs-start"
}, u_ = ["value"], d_ = { class: "sbs-panel" }, f_ = {
	class: "sbs-field",
	for: "sbs-name"
}, p_ = { class: "sbs-side-column" }, m_ = { class: "sbs-panel sbs-reset-panel" }, h_ = {
	key: 0,
	class: "sbs-confirm"
}, g_ = {
	key: 1,
	type: "button",
	class: "sbs-secondary",
	"data-sbs-action": "reset"
}, __ = ["hidden"], v_ = {
	__name: "AccountSettings",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = Q(), r = /* @__PURE__ */ Ht({ ...t.model.settings });
		R(() => n.appearance, (e) => {
			for (let t of [
				"theme",
				"compact",
				"largeText",
				"reduceMotion",
				"startPage"
			]) r[t] = e[t];
		});
		let i = /* @__PURE__ */ Ht({ value: t.model.name }), a = [
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
			t.model.resetPending && En(() => document.querySelector("#sb-vue-account-settings .sbs-confirm-button")?.focus());
		}), (t, o) => (H(), U("section", {
			id: "sbs-page",
			class: "sbs-page",
			"data-sb-vue-settings": "",
			"data-sb-preferred-theme": I(n).appearance.theme,
			"data-sb-applied-theme": I(n).appearance.resolvedTheme
		}, [
			o[17] ||= ua("<header class=\"sbs-heading\"><button type=\"button\" class=\"sbs-back\" data-sbs-action=\"close\">← Вернуться в кабинет</button><div class=\"sbs-eyebrow\">SUNOBOOM · ЛИЧНЫЙ КАБИНЕТ</div><div class=\"sbs-heading-row\"><div><h1>Настройки</h1><p>Настрой музыкальную мастерскую под себя. Изменения применяются сразу и сохраняются в этом браузере.</p></div><span class=\"sbs-badge\">⚙️ ПЕРСОНАЛИЗАЦИЯ</span></div></header>", 1),
			W("div", $g, [W("div", e_, [
				W("section", t_, [
					o[5] ||= W("div", { class: "sbs-panel-head" }, [W("span", {
						class: "sbs-symbol",
						"aria-hidden": "true"
					}, "🎨"), W("div", null, [W("h2", null, "Внешний вид"), W("p", null, "Удобная работа на компьютере и телефоне")])], -1),
					W("label", n_, [o[3] ||= W("span", null, "Тема приложения", -1), L(W("select", {
						id: "sbs-theme",
						"onUpdate:modelValue": o[0] ||= (e) => r.theme = e,
						"data-sbs-setting": "theme",
						"aria-label": "Тема приложения"
					}, [(H(!0), U(V, null, B(e.model.themes, (e) => (H(), U("option", {
						key: e.id,
						value: e.id
					}, k(e.title), 9, r_))), 128))], 512), [[Io, r.theme]])]),
					o[6] ||= W("p", { class: "sbs-help sbs-theme-help" }, "Выбери палитру: тёмную, светлую, системную или одну из шести цветных тем. Изменения сохраняются.", -1),
					(H(), U(V, null, B(a, (e) => W("label", {
						key: e.key,
						class: "sbs-option",
						for: "sbs-" + e.key
					}, [W("span", a_, [W("strong", null, k(e.title), 1), W("small", null, k(e.desc), 1)]), W("span", o_, [L(W("input", {
						id: "sbs-" + e.key,
						"onUpdate:modelValue": (t) => r[e.key] = t,
						type: "checkbox",
						"data-sbs-setting": e.key,
						role: "switch",
						"aria-label": e.title
					}, null, 8, s_), [[Po, r[e.key]]]), o[4] ||= W("span", {
						class: "sbs-switch-track",
						"aria-hidden": "true"
					}, null, -1)])], 8, i_)), 64))
				]),
				W("section", c_, [
					o[8] ||= W("div", { class: "sbs-panel-head" }, [W("span", {
						class: "sbs-symbol",
						"aria-hidden": "true"
					}, "🏠"), W("div", null, [W("h2", null, "При открытии сайта"), W("p", null, "Выбери стартовый раздел SUNOBOOM")])], -1),
					W("label", l_, [o[7] ||= W("span", null, "Стартовая страница", -1), L(W("select", {
						id: "sbs-start",
						"onUpdate:modelValue": o[1] ||= (e) => r.startPage = e,
						"data-sbs-setting": "startPage"
					}, [(H(!0), U(V, null, B(e.model.pages, (e) => (H(), U("option", {
						key: e.id,
						value: e.id
					}, k(e.title), 9, u_))), 128))], 512), [[Io, r.startPage]])]),
					o[9] ||= W("p", { class: "sbs-help" }, "Применяется при следующем открытии или обновлении сайта. Ссылки на конкретные карточки жанров сохраняют свой переход.", -1)
				]),
				W("section", d_, [
					o[11] ||= W("div", { class: "sbs-panel-head" }, [W("span", {
						class: "sbs-symbol",
						"aria-hidden": "true"
					}, "👤"), W("div", null, [W("h2", null, "Профиль"), W("p", null, "Имя отображается только в локальном кабинете")])], -1),
					W("label", f_, [o[10] ||= W("span", null, "Имя в кабинете", -1), L(W("input", {
						id: "sbs-name",
						"onUpdate:modelValue": o[2] ||= (e) => i.value = e,
						type: "text",
						maxlength: "60",
						autocomplete: "off",
						placeholder: "Твоё имя"
					}, null, 512), [[J, i.value]])]),
					o[12] ||= W("button", {
						type: "button",
						class: "sbs-primary",
						"data-sbs-action": "save-name"
					}, "Сохранить имя", -1)
				])
			]), W("aside", p_, [o[16] ||= ua("<section class=\"sbs-panel\"><div class=\"sbs-panel-head\"><span class=\"sbs-symbol\" aria-hidden=\"true\">🔒</span><div><h2>Данные и приватность</h2></div></div><p class=\"sbs-info\">Сейчас SUNOBOOM работает как локальный прототип: твои проекты и настройки сохраняются в браузере. Синхронизации между устройствами пока нет.</p><p class=\"sbs-info\">GitHub Pages остаётся публичной демонстрационной площадкой — полноценный закрытый вход по приглашениям ещё не подключён.</p><button type=\"button\" class=\"sbs-secondary\" data-sbs-action=\"backup\">↓ Перейти к резервным копиям</button></section>", 1), W("section", m_, [
				o[14] ||= W("div", { class: "sbs-panel-head" }, [W("span", {
					class: "sbs-symbol",
					"aria-hidden": "true"
				}, "↺"), W("div", null, [W("h2", null, "Сброс предпочтений")])], -1),
				o[15] ||= W("p", { class: "sbs-info" }, "Вернуть стандартные параметры отображения. Песни, проекты, избранное и имя профиля не удаляются.", -1),
				e.model.resetPending ? (H(), U("div", h_, [...o[13] ||= [W("strong", null, "Сбросить настройки интерфейса?", -1), W("div", null, [W("button", {
					type: "button",
					class: "sbs-secondary",
					"data-sbs-action": "cancel-reset"
				}, "Отмена"), W("button", {
					type: "button",
					class: "sbs-confirm-button",
					"data-sbs-action": "confirm-reset"
				}, "Да, сбросить")], -1)]])) : (H(), U("button", g_, "Сбросить настройки"))
			])])]),
			W("p", {
				id: "sbs-message",
				class: "sbs-message",
				role: "status",
				"aria-live": "polite",
				hidden: !e.model.message
			}, k(e.model.message), 9, __)
		], 8, Qg));
	}
};
// src/vue/account/legacyAccountSettingsBridge.js
function y_({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SETTINGS, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-account-settings");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, v_, { model: o });
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
// src/vue/player/PlayerLab.vue
var b_ = {
	class: "sbp-layout",
	"data-sb-vue-player-lab": ""
}, x_ = {
	class: "sbp-main",
	"aria-label": "Плеер"
}, S_ = {
	class: "sbp-bars",
	"aria-hidden": "true"
}, C_ = { class: "sbp-title-area" }, w_ = {
	id: "sbp-now-tag",
	class: "sbp-now-tag"
}, T_ = { id: "sbp-title" }, E_ = { id: "sbp-artist" }, D_ = {
	id: "sbp-counter",
	class: "sbp-counter"
}, O_ = {
	key: 0,
	class: "sbp-now-tag",
	"data-sb-vue-ab-recap": ""
}, k_ = { class: "sbp-progress" }, A_ = ["value", "disabled"], j_ = { class: "sbp-times" }, M_ = { id: "sbp-time-current" }, N_ = { id: "sbp-time-total" }, P_ = { class: "sbp-transport" }, F_ = ["aria-pressed"], I_ = ["aria-label", "disabled"], L_ = ["title", "aria-label"], R_ = { class: "sbp-extras" }, z_ = { class: "sbp-volume" }, B_ = {
	key: 0,
	class: "sbp-ios-volume"
}, V_ = ["value"], H_ = { id: "sbp-volume-label" }, U_ = {
	class: "sbp-speed",
	for: "sbp-rate"
}, W_ = ["value"], G_ = ["value"], K_ = { class: "sbp-side" }, q_ = { class: "sbp-side-head" }, J_ = { id: "sbp-list-count" }, Y_ = ["disabled"], X_ = {
	class: "sbp-track-list",
	id: "sbp-list",
	"aria-label": "Список треков"
}, Z_ = ["data-sbp-item"], Q_ = ["data-index", "aria-label"], $_ = { class: "sbp-track-index" }, ev = { class: "sbp-track-meta" }, tv = { class: "sbp-track-duration" }, nv = ["data-index", "aria-label"], rv = {
	key: 0,
	class: "sbp-empty"
}, iv = {
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
		let t = e, n = /* @__PURE__ */ P(t.initialModel), r = Q();
		R(n, (e) => r.publishPlayerLabSummary(e), { immediate: !0 });
		function i() {
			let e = t.api.snapshot();
			e && (n.value = e);
		}
		z(() => {
			window.addEventListener("sunoboom:player-lab-update", i), i();
		}), br(() => window.removeEventListener("sunoboom:player-lab-update", i));
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
		return (e, t) => (H(), U("div", b_, [W("section", x_, [
			W("div", { class: O(["sbp-art", { "is-playing": n.value.playing }]) }, [
				t[0] ||= W("div", { class: "sbp-art-orb" }, "♫", -1),
				W("div", S_, [(H(!0), U(V, null, B(I(a), (e) => (H(), U("i", {
					key: e.index,
					style: D({
						"--sbp-i": e.index,
						"--sbp-h": e.height
					})
				}, null, 4))), 128))]),
				t[1] ||= W("span", null, "SONIC LAB / PRIVATE PREVIEW", -1)
			], 2),
			W("div", C_, [W("div", null, [
				W("div", w_, k(n.value.nowTag), 1),
				W("h2", T_, k(n.value.title), 1),
				W("p", E_, k(n.value.artist), 1)
			]), W("span", D_, k(n.value.counter), 1)]),
			I(r).playerAbSummary.ready && I(r).playerAbSummary.readyCount ? (H(), U("p", O_, "A/B: загружено " + k(I(r).playerAbSummary.readyCount) + " из 2 · активна " + k(I(r).playerAbSummary.active), 1)) : K("", !0),
			W("div", k_, [
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
					style: D({ "--fill": n.value.seekValue / 10 + "%" })
				}, null, 12, A_),
				W("div", j_, [W("span", M_, k(n.value.currentTime), 1), W("span", N_, k(n.value.totalTime), 1)])
			]),
			W("div", P_, [
				W("button", {
					type: "button",
					class: O(["sbp-secondary", { "is-on": n.value.shuffle }]),
					id: "sbp-shuffle",
					"data-sbp-action": "shuffle",
					"aria-label": "Случайный порядок",
					"aria-pressed": String(n.value.shuffle),
					title: "Случайный порядок"
				}, "⤨", 10, F_),
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
				}, k(n.value.playing ? "❚❚" : "▶"), 9, I_),
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
					class: O(["sbp-secondary", { "is-on": n.value.repeat !== "off" }]),
					"data-sbp-action": "repeat",
					id: "sbp-repeat",
					title: n.value.repeatLabel,
					"aria-label": n.value.repeatLabel
				}, k(n.value.repeat === "one" ? "↻₁" : "↻"), 11, L_)
			]),
			W("div", R_, [W("div", z_, [n.value.ios ? (H(), U("span", B_, "📱 Громкость регулируется кнопками телефона")) : (H(), U(V, { key: 1 }, [
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
				}, null, 8, V_),
				W("output", H_, k(n.value.volume) + "%", 1)
			], 64))]), W("label", U_, [t[7] ||= G(" Скорость ", -1), W("select", {
				id: "sbp-rate",
				"aria-label": "Скорость воспроизведения",
				value: n.value.rate
			}, [(H(), U(V, null, B(o, (e) => W("option", {
				key: e,
				value: e
			}, k(e) + "×", 9, G_)), 64))], 8, W_)])]),
			L(W("div", {
				class: "sbp-message",
				id: "sbp-message",
				role: "status",
				"aria-live": "polite"
			}, k(n.value.message), 513), [[Qa, n.value.message]])
		]), W("aside", K_, [
			W("div", q_, [W("div", null, [t[8] ||= W("h2", null, "Очередь воспроизведения", -1), W("small", J_, k(n.value.count) + " " + k(n.value.count === 1 ? "трек" : n.value.count > 1 && n.value.count < 5 ? "трека" : "треков"), 1)]), W("button", {
				type: "button",
				class: "sbp-clear",
				"data-sbp-action": "clear",
				id: "sbp-clear",
				disabled: !n.value.count
			}, "Очистить", 8, Y_)]),
			t[9] ||= ua("<div class=\"sbp-dropzone\" id=\"sbp-dropzone\"><div class=\"sbp-drop-icon\">↥</div><strong>Загрузи свои треки</strong><p>MP3, WAV, M4A, AAC, OGG, FLAC — если формат поддерживается браузером. Файлы никуда не отправляются.</p><label class=\"sbp-upload-label\" for=\"sbp-file\">Выбрать аудиофайлы</label><input id=\"sbp-file\" type=\"file\" accept=\"audio/*,.mp3,.m4a,.aac,.wav,.ogg,.flac,.opus\" multiple></div><div class=\"sbp-demo-box\"><div><strong>Нет аудиофайлов?</strong><p>Создать 3 коротких оригинальных демо-сигнала для проверки управления.</p></div><button type=\"button\" data-sbp-action=\"demo\" id=\"sbp-demo\">+ Демо-треки</button></div>", 2),
			W("div", X_, [(H(!0), U(V, null, B(n.value.tracks, (e) => (H(), U("article", {
				key: e.id,
				class: O(["sbp-track", { "is-current": e.isCurrent }]),
				"data-sbp-item": e.id
			}, [
				W("button", {
					type: "button",
					class: "sbp-track-play",
					"data-sbp-action": "select",
					"data-index": e.index,
					"aria-label": "Включить " + e.name
				}, [W("span", $_, k(e.playLabel), 1), W("span", ev, [W("strong", null, k(e.name), 1), W("small", null, k(e.artist) + " · " + k(e.sourceLabel), 1)])], 8, Q_),
				W("span", tv, k(e.durationLabel), 1),
				W("button", {
					type: "button",
					class: "sbp-track-remove",
					"data-sbp-action": "remove",
					"data-index": e.index,
					title: "Удалить из списка",
					"aria-label": "Удалить " + e.name
				}, "×", 8, nv)
			], 10, Z_))), 128)), n.value.tracks.length ? K("", !0) : (H(), U("div", rv, " Плейлист пока пуст. Добавь MP3 или нажми «Демо-треки», чтобы начать тест. "))])
		])]));
	}
};
// src/vue/player/legacyPlayerLabBridge.js
function av({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PLAYER_LAB, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-player-lab");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, iv, {
			api: t,
			initialModel: o
		});
		s && (r = {
			node: a,
			unmount: s
		});
	}
	let o = new MutationObserver(a);
	return o.observe(n, { childList: !0 }), a(), () => {
		i = !0, o.disconnect(), r && r.unmount(), r = null;
	};
}
// src/vue/player/PlayerAB.vue
var ov = { class: "sbab-heading" }, sv = {
	key: 0,
	class: "sbab-kicker",
	"data-sb-vue-player-recap": ""
}, cv = { class: "sbab-files" }, lv = ["data-sbab-card"], uv = { class: "sbab-file-top" }, dv = { class: "sbab-side-label" }, fv = ["id"], pv = ["id"], mv = ["id"], hv = { class: "sbab-file-bottom" }, gv = ["for"], _v = ["id", "data-sbab-file"], vv = ["data-side", "disabled"], yv = ["id"], bv = { class: "sbab-console" }, xv = { class: "sbab-console-top" }, Sv = { id: "sbab-active-label" }, Cv = { class: "sbab-wave" }, wv = {
	class: "sbab-wave-bars",
	"aria-hidden": "true"
}, Tv = {
	class: "sbab-toggle",
	role: "group",
	"aria-label": "Выбор версии для прослушивания"
}, Ev = ["data-side", "aria-pressed"], Dv = { class: "sbab-scrub" }, Ov = ["value", "disabled"], kv = { class: "sbab-times" }, Av = { id: "sbab-current" }, jv = { id: "sbab-duration" }, Mv = { class: "sbab-transport" }, Nv = ["disabled", "aria-label"], Pv = { class: "sbab-clip" }, Fv = { class: "sbab-clip-actions" }, Iv = {
	type: "button",
	"data-sbab-action": "mark-start"
}, Lv = { id: "sbab-start" }, Rv = {
	type: "button",
	"data-sbab-action": "mark-end"
}, zv = { id: "sbab-end" }, Bv = ["aria-pressed", "aria-label"], Vv = { class: "sbab-volume" }, Hv = { key: 0 }, Uv = ["for"], Wv = [
	"id",
	"data-sbab-vol",
	"value"
], Gv = ["hidden"], Kv = { class: "sbab-review" }, qv = { class: "sbab-rating-grid" }, Jv = { class: "sbab-rating-label" }, Yv = [
	"data-sbab-score",
	"aria-label",
	"value"
], Xv = ["value"], Zv = { class: "sbab-note-grid" }, Qv = ["for"], $v = [
	"id",
	"data-sbab-note",
	"placeholder",
	"value"
], ey = {
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
		let t = e, n = /* @__PURE__ */ P(t.initialModel), r = Q();
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
		}), br(() => window.removeEventListener("sunoboom:player-ab-update", s)), (e, t) => (H(), U("section", {
			id: "sbab-compare",
			class: O(["sbab-shell", {
				"sbab-is-playing": n.value.playing,
				"sbab-has-files": n.value.hasBoth
			}]),
			"aria-label": "Сравнение аудиоверсий A и B",
			"data-sb-vue-player-ab": ""
		}, [
			W("header", ov, [W("div", null, [
				t[0] ||= W("span", { class: "sbab-kicker" }, "SUNOBOOM · AUDIO TEST LAB", -1),
				t[1] ||= W("h2", null, "A/B-сравнение аудиоверсий", -1),
				t[2] ||= W("p", null, "Загрузи два варианта песни и переключайся между ними в одной временной точке. Сравнивай вокал, аранжировку и финальное звучание.", -1),
				I(r).playerLabSummary.ready ? (H(), U("p", sv, "Очередь плеера LAB: " + k(I(r).playerLabSummary.queueCount) + " треков · " + k(I(r).playerLabSummary.playing ? "воспроизведение" : "пауза"), 1)) : K("", !0)
			]), t[3] ||= W("span", { class: "sbab-lab-badge" }, "A ↔ B", -1)]),
			W("div", cv, [(H(), U(V, null, B(i, (e) => W("div", {
				key: e,
				class: O(["sbab-file-card", [e === "A" ? "sbab-card-a" : "sbab-card-b", { "sbab-active-card": n.value.active === e }]]),
				"data-sbab-card": e
			}, [
				W("div", uv, [W("span", dv, "ВЕРСИЯ " + k(e), 1), W("span", {
					class: "sbab-loaded",
					id: "sbab-ready-" + e
				}, k(n.value.files[e].ready ? "Файл добавлен" : "Ожидает файл"), 9, fv)]),
				W("strong", {
					class: "sbab-filename",
					id: "sbab-name-" + e
				}, k(n.value.files[e].name), 9, pv),
				W("p", {
					class: "sbab-filesub",
					id: "sbab-info-" + e
				}, k(n.value.files[e].info), 9, mv),
				W("div", hv, [
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
					})], -1), G(" " + k(n.value.files[e].ready ? "Заменить файл" : "Выбрать файл"), 1)], 8, gv),
					W("input", {
						type: "file",
						id: "sbab-file-" + e,
						accept: "audio/*,.mp3,.wav,.m4a,.aac,.ogg,.flac,.opus",
						"data-sbab-file": e
					}, null, 8, _v),
					W("button", {
						type: "button",
						"data-sbab-action": "remove",
						"data-side": e,
						class: "sbab-remove",
						disabled: !n.value.files[e].ready
					}, "Удалить", 8, vv),
					W("span", {
						class: "sbab-length",
						id: "sbab-length-" + e
					}, k(n.value.files[e].duration), 9, yv)
				])
			], 10, lv)), 64))]),
			t[20] ||= W("div", { class: "sbab-demo-row" }, [W("p", null, "Для первого теста можно создать два разных оригинальных коротких аудиофрагмента."), W("button", {
				type: "button",
				"data-sbab-action": "demo"
			}, "Создать демо A и B")], -1),
			W("div", bv, [
				W("div", xv, [t[5] ||= W("span", { class: "sbab-kicker" }, "АКТИВНОЕ ПРОСЛУШИВАНИЕ", -1), W("span", Sv, "Версия " + k(n.value.active) + k(n.value.playing ? " · Воспроизведение" : ""), 1)]),
				W("div", Cv, [W("div", wv, [(H(!0), U(V, null, B(I(o), (e, t) => (H(), U("i", {
					key: t,
					style: D({ "--bar-height": e })
				}, null, 4))), 128))]), t[6] ||= W("div", { class: "sbab-wave-center" }, "A / B", -1)]),
				W("div", Tv, [(H(), U(V, null, B(i, (e) => W("button", {
					key: e,
					type: "button",
					class: O(e === "A" ? "sbab-btn-a" : "sbab-btn-b"),
					"data-sbab-action": "select",
					"data-side": e,
					"aria-pressed": String(n.value.active === e)
				}, [G(k(e) + " ", 1), W("small", null, "Версия " + k(e), 1)], 10, Ev)), 64))]),
				W("div", Dv, [
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
					}, null, 8, Ov),
					W("div", kv, [W("span", Av, k(n.value.currentTime), 1), W("span", jv, k(n.value.duration), 1)])
				]),
				W("div", Mv, [
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
					}, k(n.value.playing ? "❚❚" : "▶"), 9, Nv),
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
				W("div", Pv, [t[13] ||= W("div", { class: "sbab-clip-title" }, [W("strong", null, "Повтор выбранного фрагмента"), W("small", null, "Например, только припев или куплет")], -1), W("div", Fv, [
					W("button", Iv, [t[10] ||= G("Начало: ", -1), W("span", Lv, k(n.value.start), 1)]),
					W("button", Rv, [t[11] ||= G("Конец: ", -1), W("span", zv, k(n.value.end), 1)]),
					W("button", {
						type: "button",
						"data-sbab-action": "loop",
						id: "sbab-loop",
						"aria-pressed": String(n.value.loop),
						"aria-label": n.value.loop ? "Повтор фрагмента включён" : "Повтор фрагмента выключен"
					}, k(n.value.loop ? "↻ Повтор включён" : "↻ Повтор выкл."), 9, Bv),
					t[12] ||= W("button", {
						type: "button",
						"data-sbab-action": "clear-segment",
						"aria-label": "Очистить границы фрагмента"
					}, "✕", -1)
				])]),
				W("div", Vv, [n.value.ios ? (H(), U("span", Hv, "📱 Громкость регулируется кнопками телефона")) : (H(), U(V, { key: 1 }, B(i, (e) => W("label", {
					key: e,
					for: "sbab-vol-" + e
				}, [G(" Уровень " + k(e) + " ", 1), W("input", {
					id: "sbab-vol-" + e,
					"data-sbab-vol": e,
					type: "range",
					min: "0",
					max: "100",
					value: n.value.volume[e]
				}, null, 8, Wv)], 8, Uv)), 64))]),
				W("p", {
					id: "sbab-status",
					class: "sbab-status",
					role: "status",
					"aria-live": "polite",
					hidden: !n.value.status
				}, k(n.value.status), 9, Gv)
			]),
			W("section", Kv, [
				t[18] ||= W("header", null, [W("h3", null, "Оценка на слух"), W("p", null, "Субъективное сравнение. Оценки выставляешь ты — автоматического анализа качества здесь нет.")], -1),
				W("div", qv, [
					t[15] ||= W("div", { class: "sbab-rating-head" }, "Параметр", -1),
					t[16] ||= W("div", { class: "sbab-rating-head" }, "A", -1),
					t[17] ||= W("div", { class: "sbab-rating-head" }, "B", -1),
					(H(), U(V, null, B(a, (e) => (H(), U(V, { key: e.key }, [W("div", Jv, k(e.label), 1), (H(), U(V, null, B(i, (r) => W("div", { key: r }, [W("select", {
						"data-sbab-score": r + ":" + e.key,
						"aria-label": e.label + " — версия " + r,
						value: n.value.scores[r][e.key]
					}, [t[14] ||= W("option", { value: 0 }, "—", -1), (H(), U(V, null, B(5, (e) => W("option", {
						key: e,
						value: e
					}, k(e) + "/5", 9, Xv)), 64))], 8, Yv)])), 64))], 64))), 64))
				]),
				W("div", Zv, [(H(), U(V, null, B(i, (e) => W("label", {
					key: e,
					for: "sbab-note-" + e
				}, [G(" Заметки по " + k(e) + " ", 1), W("textarea", {
					id: "sbab-note-" + e,
					"data-sbab-note": e,
					rows: "3",
					maxlength: "1000",
					placeholder: e === "A" ? "Сильные стороны, что улучшить…" : "Вокал, баланс, пространство…",
					value: n.value.notes[e]
				}, null, 8, $v)], 8, Qv)), 64))]),
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
};
// src/vue/player/legacyPlayerABBridge.js
function ty({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PLAYER_AB, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-player-ab");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, ey, {
			api: t,
			initialModel: o
		});
		s && (r = {
			node: a,
			unmount: s
		});
	}
	let o = new MutationObserver(a);
	return o.observe(n, { childList: !0 }), a(), () => {
		i = !0, o.disconnect(), r && r.unmount(), r = null;
	};
}
// src/vue/producer/ProducerSongList.vue
var ny = ["data-id", "aria-pressed"], ry = { class: "sbpc-song-main" }, iy = { class: "sbpc-song-meta" }, ay = { class: "sbpc-tiny-progress" }, oy = {
	key: 0,
	class: "sbpc-help",
	"data-sb-vue-passport-recap": ""
}, sy = {
	key: 1,
	class: "sbpc-empty"
}, cy = {
	__name: "ProducerSongList",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ P(t.model.query || ""), r = Q();
		R(() => t.model, (e) => r.publishMasterListSummary(e), { immediate: !0 });
		let i = (e) => String(e ?? "").normalize("NFKC").toLocaleLowerCase("ru"), a = q(() => {
			let e = i(n.value.trim());
			return t.model.records.filter((t) => i(t.searchText).includes(e));
		});
		function o(e) {
			n.value = String(e.detail?.query ?? "");
		}
		return z(() => window.addEventListener("sunoboom:producer-search", o)), xr(() => window.removeEventListener("sunoboom:producer-search", o)), (t, n) => (H(), U(V, null, [
			(H(!0), U(V, null, B(a.value, (t) => (H(), U("button", {
				key: t.id,
				type: "button",
				class: O(["sbpc-song", { active: t.id === e.model.selectedId }]),
				"data-pc-action": "open",
				"data-id": t.id,
				"aria-pressed": t.id === e.model.selectedId
			}, [
				W("span", ry, [W("strong", null, k(t.title), 1), W("span", null, k(t.artist), 1)]),
				W("span", iy, [W("b", null, k(t.done) + "/" + k(t.total), 1), W("small", null, k(t.nextLabel ? "Следующий этап: " + t.nextLabel : "Все этапы отмечены готовыми"), 1)]),
				W("span", ay, [W("i", { style: D({ width: t.percent + "%" }) }, null, 4)])
			], 10, ny))), 128)),
			I(r).passportListSummary.ready ? (H(), U("p", oy, " Паспорта треков · последний фильтр: " + k(I(r).passportListSummary.visibleCount), 1)) : K("", !0),
			a.value.length ? K("", !0) : (H(), U("p", sy, k(e.model.hasRecords ? "Поиск не дал результатов. Измени запрос или создай новую рабочую карточку." : "Пока нет рабочих карточек. Начни с первой песни выше."), 1))
		], 64));
	}
};
// src/vue/producer/legacyProducerSongListBridge.js
function ly({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PRODUCER_LIST, n = document.getElementById("app");
	if (!t || typeof t.snapshot != "function" || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sbpc-list[data-sb-vue-producer-list]");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, cy, { model: o });
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
// src/vue/producer/ProducerSongDetail.vue
var uy = {
	class: "sbpc-workspace",
	"data-sb-vue-producer-detail": ""
}, dy = { class: "sbpc-panel sbpc-song-head" }, fy = { class: "sbpc-head-top" }, py = { class: "sbpc-completion" }, my = { class: "sbpc-next" }, hy = {
	key: 0,
	class: "sbpc-help",
	"data-sb-vue-passport-detail-recap": ""
}, gy = { class: "sbpc-meta-editor" }, _y = { class: "sbpc-wide" }, vy = { class: "sbpc-panel" }, yy = { class: "sbpc-panel-head" }, by = ["aria-valuenow"], xy = { class: "sbpc-stages" }, Sy = ["data-status"], Cy = { class: "sbpc-stage-index" }, wy = { class: "sbpc-stage-body" }, Ty = { class: "sbpc-stage-title" }, Ey = { class: "sbpc-stage-state" }, Dy = {
	key: 0,
	class: "sbpc-resource-present"
}, Oy = {
	key: 1,
	class: "sbpc-resource-empty"
}, ky = { class: "sbpc-stage-actions" }, Ay = [
	"onUpdate:modelValue",
	"data-pc-stage",
	"aria-label"
], jy = ["value"], My = ["data-step"], Ny = { class: "sbpc-panel" }, Py = { class: "sbpc-links" }, Fy = ["for"], Iy = [
	"id",
	"onUpdate:modelValue",
	"data-pc-link"
], Ly = ["value"], Ry = ["data-type", "data-id"], zy = { class: "sbpc-panel sbpc-arrangement" }, By = { class: "sbpc-panel-head" }, Vy = { class: "sbpc-arrangement-actions" }, Hy = {
	key: 0,
	type: "button",
	"data-pc-action": "restore-arrangement"
}, Uy = {
	key: 0,
	class: "sbpc-subnote"
}, Wy = { class: "sbpc-panel" }, Gy = { class: "sbpc-panel-head" }, Ky = {
	key: 0,
	class: "sbpc-log"
}, qy = {
	key: 1,
	class: "sbpc-empty"
}, Jy = {
	__name: "ProducerSongDetail",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = Q();
		R(() => t.model, (e) => n.publishMasterDetailSummary(e), { immediate: !0 });
		let r = /* @__PURE__ */ Ht({
			title: t.model.title,
			artist: t.model.artist,
			notes: t.model.notes
		}), i = /* @__PURE__ */ Ht(Object.fromEntries(t.model.links.map((e) => [e.field, e.value]))), a = /* @__PURE__ */ Ht(Object.fromEntries(t.model.stages.map((e) => [e.key, e.status])));
		return (t, o) => (H(), U("div", uy, [
			W("section", dy, [
				W("div", fy, [o[3] ||= W("span", { class: "sbpc-kicker" }, "КАРТОЧКА ПРОДЮСИРОВАНИЯ", -1), W("span", py, k(e.model.percent) + "% готовности", 1)]),
				W("h2", null, k(e.model.title || "Без названия"), 1),
				W("p", null, k(e.model.artist || "Исполнитель пока не указан") + k(e.model.projectTitle ? " · " + e.model.projectTitle : ""), 1),
				W("p", my, k(e.model.nextLabel ? "Следующий этап: " + e.model.nextLabel : "Все этапы отмечены готовыми"), 1),
				I(n).passportDetailSummary.ready ? (H(), U("p", hy, " Последний открытый паспорт: " + k(I(n).passportDetailSummary.versionCount) + " аудиоверсий · " + k(I(n).passportDetailSummary.linkedCount) + " из 3 материалов связано ", 1)) : K("", !0),
				W("div", gy, [
					W("label", null, [o[4] ||= G("Название песни ", -1), L(W("input", {
						id: "sbpc-title",
						"onUpdate:modelValue": o[0] ||= (e) => r.title = e,
						type: "text",
						maxlength: "120"
					}, null, 512), [[J, r.title]])]),
					W("label", null, [o[5] ||= G("Артист / проект ", -1), L(W("input", {
						id: "sbpc-artist",
						"onUpdate:modelValue": o[1] ||= (e) => r.artist = e,
						type: "text",
						maxlength: "120"
					}, null, 512), [[J, r.artist]])]),
					W("label", _y, [o[6] ||= G("Продюсерские заметки ", -1), L(W("textarea", {
						id: "sbpc-notes",
						"onUpdate:modelValue": o[2] ||= (e) => r.notes = e,
						rows: "3",
						maxlength: "3500",
						placeholder: "Что важно сохранить об этой песне?"
					}, null, 512), [[J, r.notes]])])
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
			W("section", vy, [
				W("header", yy, [o[9] ||= W("h3", null, "Маршрут песни", -1), W("span", null, k(e.model.done) + " из " + k(e.model.total) + " этапов", 1)]),
				W("div", {
					class: "sbpc-progress",
					role: "progressbar",
					"aria-label": "Готовность работы",
					"aria-valuemin": "0",
					"aria-valuemax": "100",
					"aria-valuenow": e.model.percent
				}, [W("span", { style: D({ width: e.model.percent + "%" }) }, null, 4)], 8, by),
				W("div", xy, [(H(!0), U(V, null, B(e.model.stages, (t) => (H(), U("article", {
					key: t.key,
					class: "sbpc-stage",
					"data-status": a[t.key]
				}, [W("div", Cy, k(a[t.key] === "done" ? "✓" : t.index), 1), W("div", wy, [
					W("div", Ty, [W("strong", null, k(t.title), 1), W("small", null, k(t.desc), 1)]),
					W("div", Ey, [t.hasMaterial ? (H(), U("span", Dy, "● " + k(t.materialLabel), 1)) : (H(), U("span", Oy, "○ Подтверждённых материалов нет"))]),
					W("div", ky, [W("label", null, [o[10] ||= G("Готовность ", -1), L(W("select", {
						"onUpdate:modelValue": (e) => a[t.key] = e,
						"data-pc-stage": t.key,
						"aria-label": "Этап " + t.title
					}, [(H(!0), U(V, null, B(e.model.statuses, (e) => (H(), U("option", {
						key: e.id,
						value: e.id
					}, k(e.label), 9, jy))), 128))], 8, Ay), [[Io, a[t.key]]])]), W("button", {
						type: "button",
						"data-pc-action": "open-stage",
						"data-step": t.key
					}, "Открыть инструмент ↗", 8, My)])
				])], 8, Sy))), 128))]),
				o[11] ||= W("p", { class: "sbpc-help" }, "Готовность отмечается вручную. Наличие материала показано отдельно и не считается автоматически завершённым этапом.", -1)
			]),
			W("section", Ny, [
				o[12] ||= W("header", { class: "sbpc-panel-head" }, [W("h3", null, "Связанные материалы"), W("span", null, "Без копирования данных")], -1),
				o[13] ||= W("p", { class: "sbpc-help" }, "Свяжи существующие идеи, промпты, паспорт трека и карточку с аудио. Исходные записи останутся в своих разделах.", -1),
				W("div", Py, [(H(!0), U(V, null, B(e.model.links, (e) => (H(), U("div", {
					key: e.field,
					class: "sbpc-link-field"
				}, [
					W("label", { for: "sbpc-" + e.field }, k(e.label), 9, Fy),
					L(W("select", {
						id: "sbpc-" + e.field,
						"onUpdate:modelValue": (t) => i[e.field] = t,
						"data-pc-link": e.field
					}, [(H(!0), U(V, null, B(e.options, (e) => (H(), U("option", {
						key: e.value,
						value: e.value
					}, k(e.label), 9, Ly))), 128))], 8, Iy), [[Io, i[e.field]]]),
					e.value ? (H(), U("button", {
						key: 0,
						type: "button",
						"data-pc-action": "open-link",
						"data-type": e.type,
						"data-id": e.value
					}, k(e.available ? "Перейти к материалу" : "Материал недоступен") + " ↗ ", 9, Ry)) : K("", !0)
				]))), 128))]),
				o[14] ||= W("button", {
					type: "button",
					class: "sbpc-main-btn",
					"data-pc-action": "save-links"
				}, "Сохранить связи", -1)
			]),
			W("section", zy, [
				W("header", By, [o[15] ||= W("h3", null, "Аранжировка для этой песни", -1), W("span", null, k(e.model.arrangement.count ? e.model.arrangement.count + " блоков сохранено" : "Снимок ещё не сохранён"), 1)]),
				o[18] ||= W("p", { class: "sbpc-help" }, "Конструктор Suno Studio использует текущий рабочий черновик. Сохрани его сюда отдельно для песни; восстановление выполняется только по твоей команде.", -1),
				W("div", Vy, [
					o[16] ||= W("button", {
						type: "button",
						"data-pc-action": "capture-arrangement"
					}, "Сохранить текущую аранжировку", -1),
					e.model.arrangement.count ? (H(), U("button", Hy, "Восстановить в Studio")) : K("", !0),
					o[17] ||= W("button", {
						type: "button",
						"data-pc-action": "open-stage",
						"data-step": "arrangement"
					}, "Открыть аранжировщик ↗", -1)
				]),
				e.model.arrangement.count ? (H(), U("p", Uy, " Сохранено: " + k(e.model.arrangement.savedAt) + " · " + k(e.model.arrangement.count) + " блоков · " + k(e.model.arrangement.duration || "длительность не рассчитана"), 1)) : K("", !0)
			]),
			W("section", Wy, [
				W("header", Gy, [o[19] ||= W("h3", null, "История работы", -1), W("span", null, k(e.model.history.length) + " событий", 1)]),
				o[20] ||= W("div", { class: "sbpc-log-input" }, [W("input", {
					id: "sbpc-history-note",
					type: "text",
					maxlength: "350",
					placeholder: "Добавить запись: что изменилось или что сделать дальше"
				}), W("button", {
					type: "button",
					"data-pc-action": "add-note"
				}, "Добавить")], -1),
				e.model.history.length ? (H(), U("ol", Ky, [(H(!0), U(V, null, B(e.model.history, (e, t) => (H(), U("li", { key: t }, [W("time", null, k(e.date), 1), W("span", null, k(e.text), 1)]))), 128))])) : (H(), U("p", qy, "История пока пуста."))
			])
		]));
	}
};
// src/vue/producer/legacyProducerSongDetailBridge.js
function Yy({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PRODUCER_DETAIL, n = document.getElementById("app");
	if (!t || typeof t.snapshot != "function" || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-producer-detail[data-sb-vue-producer-host]");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, Jy, { model: o });
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
// src/vue/account/TrackPassportList.vue
var Xy = {
	key: 0,
	class: "sb-track-disclaimer",
	"data-sb-vue-master-recap": ""
}, Zy = {
	class: "sb-track-filters",
	role: "group",
	"aria-label": "Фильтр паспортов по этапу"
}, Qy = ["data-filter", "aria-pressed"], $y = {
	key: 1,
	class: "sb-track-list"
}, eb = ["data-id"], tb = {
	key: 2,
	class: "sb-track-empty"
}, nb = {
	__name: "TrackPassportList",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = Q();
		return R(() => t.model, (e) => n.publishPassportListSummary(e), { immediate: !0 }), (t, r) => (H(), U(V, null, [
			I(n).masterListSummary.ready ? (H(), U("p", Xy, " В Мастере: " + k(I(n).masterListSummary.workCount) + " песен в работе · " + k(I(n).masterListSummary.finishedCount) + " маршрутов полностью пройдено ", 1)) : K("", !0),
			W("div", Zy, [(H(!0), U(V, null, B(e.model.filters, (t) => (H(), U("button", {
				key: t.key,
				type: "button",
				"data-action": "tp-filter",
				"data-filter": t.key,
				class: O({ active: e.model.active === t.key }),
				"aria-pressed": e.model.active === t.key
			}, k(t.label), 11, Qy))), 128))]),
			e.model.records.length ? (H(), U("div", $y, [(H(!0), U(V, null, B(e.model.records, (e) => (H(), U("button", {
				key: e.id,
				type: "button",
				class: "sb-track-tile",
				"data-action": "tp-open",
				"data-id": e.id
			}, [
				r[0] ||= W("span", { class: "sb-track-note" }, "♫", -1),
				W("span", null, [
					W("strong", null, k(e.title), 1),
					W("small", null, k(e.artist), 1),
					W("small", null, k(e.statusLabel) + k(e.releaseLabel ? " · " + e.releaseLabel : ""), 1)
				]),
				r[1] ||= W("i", { "aria-hidden": "true" }, "→", -1)
			], 8, eb))), 128))])) : (H(), U("div", tb, k(e.model.hasRecords ? "В этой категории пока нет треков." : "Паспортов пока нет. Создай первый, чтобы объединить материалы песни."), 1))
		], 64));
	}
};
// src/vue/account/legacyTrackPassportListBridge.js
function rb({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_TRACK_LIST, n = document.getElementById("app");
	if (!t || typeof t.snapshot != "function" || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-track-list[data-sb-vue-track-list]");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, nb, { model: o });
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
// src/vue/account/TrackPassportDetail.vue
var ib = {
	class: "sb-track-detail",
	"data-sb-vue-track-detail-view": ""
}, ab = {
	key: 0,
	class: "sb-track-disclaimer",
	"data-sb-vue-master-detail-recap": ""
}, ob = { class: "sb-track-buttons" }, sb = ["data-id"], cb = ["data-id"], lb = ["data-id"], ub = { class: "sb-track-hero" }, db = { class: "sb-track-cover" }, fb = ["src"], pb = { class: "sb-track-phase" }, mb = { class: "sb-track-facts" }, hb = { class: "sb-track-buttons" }, gb = ["href"], _b = ["href"], vb = { class: "sb-track-linkgrid" }, yb = ["data-action", "data-id"], bb = {
	key: 1,
	class: "sb-track-linked sb-track-linked-empty"
}, xb = ["data-action", "data-id"], Sb = {
	key: 3,
	class: "sb-track-linked sb-track-linked-empty"
}, Cb = ["data-action", "data-id"], wb = {
	key: 5,
	class: "sb-track-linked sb-track-linked-empty"
}, Tb = { class: "sb-track-section" }, Eb = { key: 0 }, Db = ["href"], Ob = [
	"data-id",
	"data-version",
	"aria-label"
], kb = {
	key: 2,
	class: "sb-track-disclaimer"
}, Ab = { class: "sb-track-versionform" }, jb = ["data-id"], Mb = {
	__name: "TrackPassportDetail",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = Q();
		return R(() => t.model, (e) => n.publishPassportDetailSummary(e), { immediate: !0 }), (t, r) => (H(), U("div", ib, [
			I(n).masterDetailSummary.ready ? (H(), U("p", ab, " Последняя карточка Мастера: " + k(I(n).masterDetailSummary.done) + " из " + k(I(n).masterDetailSummary.total) + " этапов · " + k(I(n).masterDetailSummary.linkedCount) + " из 6 связей ", 1)) : K("", !0),
			W("div", ob, [
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
				}, "Изменить", 8, sb),
				W("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "tp-event",
					"data-id": e.model.id
				}, "В календарь релизов", 8, cb),
				W("button", {
					type: "button",
					class: "btn danger small",
					"data-action": "tp-delete",
					"data-id": e.model.id
				}, "Удалить", 8, lb)
			]),
			W("div", ub, [W("div", db, [e.model.cover ? (H(), U("img", {
				key: 0,
				src: e.model.cover,
				alt: "Обложка",
				loading: "lazy"
			}, null, 8, fb)) : (H(), U(V, { key: 1 }, [G("♫")], 64))]), W("div", null, [
				W("span", pb, k(e.model.phase), 1),
				W("h2", null, k(e.model.title), 1),
				W("p", null, k(e.model.artist), 1)
			])]),
			W("div", mb, [(H(!0), U(V, null, B(e.model.facts, (e) => (H(), U("div", {
				key: e.label,
				class: "sb-track-fact"
			}, [W("span", null, k(e.label), 1), W("strong", null, k(e.value || "Не указано"), 1)]))), 128))]),
			W("div", hb, [e.model.audio ? (H(), U("a", {
				key: 0,
				class: "btn ghost",
				href: e.model.audio,
				rel: "noopener noreferrer",
				target: "_blank"
			}, "Прослушать ↗", 8, gb)) : K("", !0), e.model.cover ? (H(), U("a", {
				key: 1,
				class: "btn ghost",
				href: e.model.cover,
				rel: "noopener noreferrer",
				target: "_blank"
			}, "Обложка ↗", 8, _b)) : K("", !0)]),
			r[8] ||= W("h3", { class: "sb-track-section" }, "Связанные материалы", -1),
			W("div", vb, [
				e.model.links[0].exists ? (H(), U("button", {
					key: 0,
					type: "button",
					class: "sb-track-linked",
					"data-action": e.model.links[0].action,
					"data-id": e.model.links[0].id
				}, [
					W("small", null, k(e.model.links[0].label), 1),
					W("strong", null, k(e.model.links[0].title), 1),
					r[1] ||= W("span", null, "Открыть →", -1)
				], 8, yb)) : (H(), U("div", bb, [W("small", null, k(e.model.links[0].label), 1), r[2] ||= W("strong", null, "Не привязан", -1)])),
				e.model.links[1].exists ? (H(), U("button", {
					key: 2,
					type: "button",
					class: "sb-track-linked",
					"data-action": e.model.links[1].action,
					"data-id": e.model.links[1].id
				}, [
					W("small", null, k(e.model.links[1].label), 1),
					W("strong", null, k(e.model.links[1].title), 1),
					r[3] ||= W("span", null, "Открыть →", -1)
				], 8, xb)) : (H(), U("div", Sb, [W("small", null, k(e.model.links[1].label), 1), r[4] ||= W("strong", null, "Не привязан", -1)])),
				e.model.links[2].exists ? (H(), U("button", {
					key: 4,
					type: "button",
					class: "sb-track-linked",
					"data-action": e.model.links[2].action,
					"data-id": e.model.links[2].id
				}, [
					W("small", null, k(e.model.links[2].label), 1),
					W("strong", null, k(e.model.links[2].title), 1),
					r[5] ||= W("span", null, "Открыть →", -1)
				], 8, Cb)) : (H(), U("div", wb, [W("small", null, k(e.model.links[2].label), 1), r[6] ||= W("strong", null, "Не привязан", -1)]))
			]),
			(H(!0), U(V, null, B(e.model.sections, (e) => (H(), U("section", {
				key: e.label,
				class: "sb-track-sectionbox"
			}, [W("h3", null, k(e.label), 1), W("pre", null, k(e.text), 1)]))), 128)),
			W("h3", Tb, "Версии трека (" + k(e.model.versions.length) + ")", 1),
			e.model.versions.length ? (H(!0), U(V, { key: 1 }, B(e.model.versions, (t) => (H(), U("div", {
				key: t.id,
				class: "sb-track-version"
			}, [W("div", null, [
				W("strong", null, k(t.label), 1),
				W("small", null, k(t.date), 1),
				t.notes ? (H(), U("p", Eb, k(t.notes), 1)) : K("", !0)
			]), W("div", null, [t.url ? (H(), U("a", {
				key: 0,
				href: t.url,
				rel: "noopener noreferrer",
				target: "_blank"
			}, "Прослушать ↗", 8, Db)) : K("", !0), W("button", {
				type: "button",
				class: "btn danger small",
				"data-action": "tp-version-remove",
				"data-id": e.model.id,
				"data-version": t.id,
				"aria-label": "Удалить версию " + t.label
			}, "×", 8, Ob)])]))), 128)) : (H(), U("p", kb, "Версий пока нет.")),
			W("div", Ab, [r[7] ||= ua("<div class=\"field\"><label for=\"tp-version-title\">Название новой версии</label><input id=\"tp-version-title\" maxlength=\"100\" placeholder=\"Демо 2 / Финальный мастер\"></div><div class=\"field\"><label for=\"tp-version-url\">Ссылка (HTTPS)</label><input id=\"tp-version-url\" type=\"url\" maxlength=\"2000\" placeholder=\"https://…\"></div><div class=\"field\"><label for=\"tp-version-notes\">Что изменилось?</label><input id=\"tp-version-notes\" maxlength=\"300\" placeholder=\"Необязательно\"></div>", 3), W("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "tp-version-add",
				"data-id": e.model.id
			}, "+ Добавить версию", 8, jb)]),
			r[9] ||= W("p", { class: "sb-track-disclaimer" }, " Связанный текст и промпт показываются из оригинальных разделов. Расчётные даты — ориентир, окончательная дата определяется издательством. ", -1)
		]));
	}
};
// src/vue/account/legacyTrackPassportDetailBridge.js
function Nb({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_TRACK_DETAIL, n = document.getElementById("app");
	if (!t || typeof t.snapshot != "function" || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-track-detail[data-sb-vue-track-detail]");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, Mb, { model: o });
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
// src/vue/account/TrackPassportEditor.vue
var Pb = {
	id: "sb-track-form",
	class: "panel sb-track-form",
	"data-sb-vue-track-editor-view": ""
}, Fb = { class: "sb-track-formhead" }, Ib = { class: "sb-track-fields" }, Lb = ["for"], Rb = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"placeholder"
], zb = { class: "field" }, Bb = ["value"], Vb = { class: "field" }, Hb = ["value"], Ub = { class: "field" }, Wb = ["value"], Gb = { class: "field" }, Kb = ["value"], qb = { class: "field" }, Jb = ["value"], Yb = { class: "field" }, Xb = { class: "sb-track-fields" }, Zb = { class: "field" }, Qb = { class: "field" }, $b = ["disabled"], ex = { class: "sb-track-manual" }, tx = {
	id: "tp-date-hint",
	class: "sb-track-hint"
}, nx = { class: "sb-track-fields" }, rx = ["for"], ix = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"placeholder"
], ax = ["for"], ox = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"rows"
], sx = {
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
		let t = e, n = /* @__PURE__ */ Ht({ ...t.model.fields }), r = q(() => t.api.date7(n.submitted)), i = q(() => r.value ? "Автоматический расчёт: " + t.api.dateLabel(r.value) + " (через 7 календарных дней)." : "Укажи дату передачи издательству: релиз автоматически через 7 дней.");
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
		return (t, r) => (H(), U("div", Pb, [
			W("div", Fb, [W("h2", null, k(e.model.editing ? "Редактировать паспорт" : "Новый паспорт трека"), 1), r[9] ||= W("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "tp-cancel"
			}, "Закрыть", -1)]),
			W("div", Ib, [
				(H(!0), U(V, null, B(o.slice(0, 2), (e) => (H(), U("div", {
					key: e.id,
					class: "field"
				}, [W("label", { for: "tp-" + e.id }, k(e.label), 9, Lb), L(W("input", {
					id: "tp-" + e.id,
					"onUpdate:modelValue": (t) => n[e.id] = t,
					maxlength: e.max,
					placeholder: e.placeholder
				}, null, 8, Rb), [[J, n[e.id]]])]))), 128)),
				W("div", zb, [r[10] ||= W("label", { for: "tp-status" }, "Этап работы", -1), L(W("select", {
					id: "tp-status",
					"onUpdate:modelValue": r[0] ||= (e) => n.status = e
				}, [(H(!0), U(V, null, B(e.model.stages, (e) => (H(), U("option", {
					key: e.value,
					value: e.value
				}, k(e.label), 9, Bb))), 128))], 512), [[Io, n.status]])]),
				W("div", Vb, [r[11] ||= W("label", { for: "tp-genre" }, "Жанр", -1), L(W("select", {
					id: "tp-genre",
					"onUpdate:modelValue": r[1] ||= (e) => n.genre = e
				}, [(H(!0), U(V, null, B(e.model.genres, (e) => (H(), U("option", {
					key: e.value,
					value: e.value
				}, k(e.label), 9, Hb))), 128))], 512), [[Io, n.genre]])]),
				W("div", Ub, [r[13] ||= W("label", { for: "tp-project" }, "Мой проект / артист", -1), L(W("select", {
					id: "tp-project",
					"onUpdate:modelValue": r[2] ||= (e) => n.project = e
				}, [r[12] ||= W("option", { value: "" }, "Без связи", -1), (H(!0), U(V, null, B(e.model.projects, (e) => (H(), U("option", {
					key: e.value,
					value: e.value
				}, k(e.label), 9, Wb))), 128))], 512), [[Io, n.project]])]),
				W("div", Gb, [r[15] ||= W("label", { for: "tp-idea" }, "Идея и текст песни", -1), L(W("select", {
					id: "tp-idea",
					"onUpdate:modelValue": r[3] ||= (e) => n.idea = e
				}, [r[14] ||= W("option", { value: "" }, "Без связи", -1), (H(!0), U(V, null, B(e.model.ideas, (e) => (H(), U("option", {
					key: e.value,
					value: e.value
				}, k(e.label), 9, Kb))), 128))], 512), [[Io, n.idea]])]),
				W("div", qb, [r[17] ||= W("label", { for: "tp-prompt" }, "Мой промпт Suno", -1), L(W("select", {
					id: "tp-prompt",
					"onUpdate:modelValue": r[4] ||= (e) => n.prompt = e
				}, [r[16] ||= W("option", { value: "" }, "Без связи", -1), (H(!0), U(V, null, B(e.model.prompts, (e) => (H(), U("option", {
					key: e.value,
					value: e.value
				}, k(e.label), 9, Jb))), 128))], 512), [[Io, n.prompt]])]),
				W("div", Yb, [r[18] ||= W("label", { for: "tp-publisher" }, "Издательство / дистрибьютор", -1), L(W("input", {
					id: "tp-publisher",
					"onUpdate:modelValue": r[5] ||= (e) => n.publisher = e,
					maxlength: "120",
					placeholder: "Название издательства"
				}, null, 512), [[J, n.publisher]])])
			]),
			r[22] ||= W("h3", { class: "sb-track-section" }, "Даты релиза", -1),
			W("div", Xb, [W("div", Zb, [r[19] ||= W("label", { for: "tp-submitted" }, "Передано издательству", -1), L(W("input", {
				id: "tp-submitted",
				"onUpdate:modelValue": r[6] ||= (e) => n.submitted = e,
				type: "date",
				onChange: a
			}, null, 544), [[J, n.submitted]])]), W("div", Qb, [
				r[21] ||= W("label", { for: "tp-release" }, "Дата выхода", -1),
				L(W("input", {
					id: "tp-release",
					"onUpdate:modelValue": r[7] ||= (e) => n.release = e,
					type: "date",
					disabled: !n.override
				}, null, 8, $b), [[J, n.release]]),
				W("label", ex, [L(W("input", {
					id: "tp-override",
					"onUpdate:modelValue": r[8] ||= (e) => n.override = e,
					type: "checkbox",
					onChange: a
				}, null, 544), [[Po, n.override]]), r[20] ||= G(" Установить дату вручную ", -1)])
			])]),
			W("p", tx, k(i.value), 1),
			r[23] ||= W("h3", { class: "sb-track-section" }, "Материалы и метаданные", -1),
			W("div", nx, [(H(), U(V, null, B(s, (e) => W("div", {
				key: e.id,
				class: "field"
			}, [W("label", { for: "tp-" + e.id }, k(e.label), 9, rx), L(W("input", {
				id: "tp-" + e.id,
				"onUpdate:modelValue": (t) => n[e.id] = t,
				maxlength: e.max,
				placeholder: e.placeholder
			}, null, 8, ix), [[J, n[e.id]]])])), 64))]),
			(H(), U(V, null, B(c, (e) => W("div", {
				key: e.id,
				class: "field"
			}, [W("label", { for: "tp-" + e.id }, k(e.label), 9, ax), L(W("textarea", {
				id: "tp-" + e.id,
				"onUpdate:modelValue": (t) => n[e.id] = t,
				maxlength: e.max,
				rows: e.rows
			}, null, 8, ox), [[J, n[e.id]]])])), 64)),
			r[24] ||= W("div", { class: "sb-track-buttons" }, [W("button", {
				type: "button",
				class: "btn primary",
				"data-action": "tp-save"
			}, "Сохранить паспорт"), W("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "tp-cancel"
			}, "Отмена")], -1),
			r[25] ||= W("p", { class: "sb-track-disclaimer" }, " Обложка и аудио пока прикрепляются ссылками. Загрузка файлов будет доступна после переноса на сервер. Данные сохраняются локально и попадают в резервную копию SUNOBOOM. ", -1)
		]));
	}
};
// src/vue/account/legacyTrackPassportEditorBridge.js
function cx({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_TRACK_EDITOR, n = document.getElementById("app");
	if (!n || !t || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-track-editor[data-sb-vue-track-editor]");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, sx, {
			model: o,
			api: t
		});
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
var lx = { class: "field" }, ux = { class: "field" }, dx = ["value"], fx = { class: "field" }, px = {
	class: "sub",
	"data-sb-vue-idea-draft-progress": ""
}, mx = {
	key: 0,
	class: "sub",
	"data-sb-vue-last-prompt-draft": ""
}, hx = { class: "field" }, gx = {
	__name: "IdeaFields",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = /* @__PURE__ */ Ht({ ...e.initial.values }), n = Q();
		return R(() => [
			t.title,
			t.genre,
			t.text,
			t.hook
		], () => n.publishIdeaDraftSummary(t), { immediate: !0 }), (r, i) => (H(), U(V, null, [
			W("div", lx, [i[4] ||= W("label", { for: "custom-idea-title" }, "Название песни", -1), L(W("input", {
				id: "custom-idea-title",
				"onUpdate:modelValue": i[0] ||= (e) => t.title = e,
				maxlength: "100",
				placeholder: "Например, Город на ладони"
			}, null, 512), [[J, t.title]])]),
			W("div", ux, [i[5] ||= W("label", { for: "custom-idea-genre" }, "Музыкальный жанр", -1), L(W("select", {
				id: "custom-idea-genre",
				"onUpdate:modelValue": i[1] ||= (e) => t.genre = e
			}, [(H(!0), U(V, null, B(e.initial.genres, (e) => (H(), U("option", {
				key: e.id,
				value: e.id
			}, k(e.name), 9, dx))), 128))], 512), [[Io, t.genre]])]),
			W("div", fx, [i[6] ||= W("label", { for: "custom-idea-text" }, "Сюжет и основная идея", -1), L(W("textarea", {
				id: "custom-idea-text",
				"onUpdate:modelValue": i[2] ||= (e) => t.text = e,
				rows: "5",
				maxlength: "3000",
				placeholder: "О чём песня и что происходит с героем?"
			}, null, 512), [[J, t.text]])]),
			W("p", px, "Сюжет: " + k(I(n).ideaDraftSummary.ideaLength) + " / 3000 · Название: " + k(I(n).ideaDraftSummary.titleLength) + " / 100", 1),
			I(n).promptDraftSummary.ready ? (H(), U("p", mx, "Последний открытый черновик промпта: " + k(I(n).promptDraftSummary.textLength) + " / 1000 символов", 1)) : K("", !0),
			W("div", hx, [i[7] ||= W("label", { for: "custom-idea-hook" }, "Фраза для припева (необязательно)", -1), L(W("input", {
				id: "custom-idea-hook",
				"onUpdate:modelValue": i[3] ||= (e) => t.hook = e,
				maxlength: "240",
				placeholder: "Запоминающаяся строчка"
			}, null, 512), [[J, t.hook]])])
		], 64));
	}
}, _x = {
	key: 0,
	class: "sub",
	"data-sb-vue-poetry-source-count": ""
}, vx = {
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
		let t = e, n = /* @__PURE__ */ P(null), r = Q(), i = () => {
			n.value && r.publishPoetrySourceSummary(n.value.value);
		}, a = (e) => {
			e.target.closest?.("[data-action=\"sb-poetry-accent\"]") && i();
		};
		return z(() => {
			t.initial.highlighted && t.api.enableHighlight(n.value), i(), document.addEventListener("click", a);
		}), br(() => document.removeEventListener("click", a)), (t, a) => (H(), U(V, null, [
			a[1] ||= W("label", { for: "custom-idea-lyrics" }, "Оригинальный текст (необязательно)", -1),
			a[0] || ($i(-1, !0), (a[0] = W("textarea", {
				id: "custom-idea-lyrics",
				ref_key: "area",
				ref: n,
				value: e.initial.values.lyrics,
				onInput: i,
				rows: "12",
				maxlength: "20000",
				placeholder: "Куплет 1:\nТекст первого куплета...\n\nПрипев:\nТекст припева..."
			}, null, 40, ["value"])).cacheIndex = 0, $i(1), a[0]),
			I(r).poetrySourceSummary.ready ? (H(), U("p", _x, " Исходный текст: " + k(I(r).poetrySourceSummary.charCount) + " / 20000 символов · " + k(I(r).poetrySourceSummary.lineCount) + " непустых строк ", 1)) : K("", !0)
		], 64));
	}
}, yx = {
	key: 0,
	class: "workbench-note",
	"data-sb-vue-poetry-tools-count": ""
}, bx = {
	key: 1,
	class: "workbench-note",
	"data-sb-vue-poetry-analysis-count": ""
}, xx = {
	key: 2,
	class: "workbench-note",
	"data-sb-vue-poetry-ambiguity-count": ""
}, Sx = {
	key: 3,
	class: "workbench-note",
	"data-sb-vue-tags-summary": ""
}, Cx = { class: "field" }, wx = ["value"], Tx = { class: "workbench-switches" }, Ex = ["id", "onUpdate:modelValue"], Dx = { class: "field" }, Ox = { class: "detail-actions" }, kx = {
	type: "button",
	class: "btn ghost",
	"data-action": "copy-current-lyrics"
}, Ax = ["innerHTML"], jx = { class: "field" }, Mx = { class: "detail-actions" }, Nx = {
	type: "button",
	class: "btn ghost",
	"data-action": "copy-current-style"
}, Px = ["innerHTML"], Fx = {
	__name: "LyricsTools",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Ht({ ...t.initial.values }), r = /* @__PURE__ */ Ht({ ...t.initial.switches }), i = Q(), a = {
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
			I(i).poetrySourceSummary.ready ? (H(), U("p", yx, " Исходник для аранжировки: " + k(I(i).poetrySourceSummary.lineCount) + " строк, " + k(I(i).poetrySourceSummary.wordCount) + " слов ", 1)) : K("", !0),
			I(i).poetryAnalysisSummary.analyzed ? (H(), U("p", bx, " Последний анализ: " + k(I(i).poetryAnalysisSummary.rowCount) + " строк · " + k(I(i).poetryAnalysisSummary.stressMarkCount) + " меток ударения · " + k(I(i).poetryAnalysisSummary.suggestionCount) + " рекомендаций ", 1)) : K("", !0),
			I(i).poetryAmbiguitySummary.ready ? (H(), U("p", xx, " Предпросмотр ударений: " + k(I(i).poetryAmbiguitySummary.occurrenceCount) + " неоднозначных вхождений · " + k(I(i).poetryAmbiguitySummary.distinctCount) + " разных слов ", 1)) : K("", !0),
			I(i).performanceTagsSummary.ready ? (H(), U("p", Sx, " Теги исполнения: " + k(a[I(i).performanceTagsSummary.mode]) + " · интенсивность " + k(I(i).performanceTagsSummary.intensity) + "/5 · " + k(I(i).performanceTagsSummary.enabledTechniques) + " приёмов · " + k(I(i).performanceTagsSummary.busy ? "идёт генерация" : I(i).performanceTagsSummary.previewOpen ? I(i).performanceTagsSummary.sectionCount + " секций в предпросмотре" : "предпросмотр закрыт"), 1)) : K("", !0),
			W("div", Cx, [c[3] ||= W("label", { for: "lyrics-tag-preset" }, "Характер аранжировки", -1), L(W("select", {
				id: "lyrics-tag-preset",
				"onUpdate:modelValue": c[0] ||= (e) => n.preset = e
			}, [(H(), U(V, null, B(o, ([e, t]) => W("option", {
				key: e,
				value: e
			}, k(t), 9, wx)), 64))], 512), [[Io, n.preset]])]),
			W("div", Tx, [(H(), U(V, null, B(s, ([e, t]) => W("label", { key: e }, [L(W("input", {
				id: "lyrics-" + e,
				"onUpdate:modelValue": (t) => r[e] = t,
				type: "checkbox"
			}, null, 8, Ex), [[Po, r[e]]]), G(" " + k(t), 1)])), 64))]),
			c[8] ||= W("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "format-idea-lyrics"
			}, "✨ Создать теги и усилители", -1),
			c[9] ||= W("p", { class: "workbench-note" }, "Разметка примерная: если в тексте нет названий секций, куплеты и припевы определяются по абзацам. Проверь расположение тегов перед копированием.", -1),
			W("div", Dx, [c[4] ||= W("label", { for: "custom-idea-tagged" }, "Готовая версия для поля Lyrics в Suno (можно исправить вручную)", -1), L(W("textarea", {
				id: "custom-idea-tagged",
				"onUpdate:modelValue": c[1] ||= (e) => n.tagged = e,
				rows: "13",
				maxlength: "25000",
				placeholder: "[Verse 1]\n...\n\n[Chorus - powerful melodic hook]\n..."
			}, null, 512), [[J, n.tagged]])]),
			W("div", Ox, [W("button", kx, [W("span", { innerHTML: e.initial.copyIcon }, null, 8, Ax), c[5] ||= G(" Копировать Lyrics", -1)])]),
			W("div", jx, [c[6] ||= W("label", { for: "custom-idea-style" }, "Дополнительное описание для поля Style (до 1000 символов)", -1), L(W("textarea", {
				id: "custom-idea-style",
				"onUpdate:modelValue": c[2] ||= (e) => n.style = e,
				rows: "4",
				maxlength: "1000",
				placeholder: "Описание жанра, вокала и динамики для Suno"
			}, null, 512), [[J, n.style]])]),
			W("div", Mx, [W("button", Nx, [W("span", { innerHTML: e.initial.copyIcon }, null, 8, Px), c[7] ||= G(" Копировать Style", -1)])])
		], 64));
	}
};
// src/vue/poetry/legacyIdeaEditorBridge.js
function Ix({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_IDEA_EDITOR, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = /* @__PURE__ */ new Map(), i = !1;
	function a() {
		if (!i) for (let [i, a] of [
			["sb-vue-idea-fields", gx],
			["sb-vue-lyrics-source", vx],
			["sb-vue-lyrics-tools", Fx]
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
// src/vue/state/legacyAppearanceBridge.js
function Lx({ sharedUi: e }) {
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
var Rx = {
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
		return (t, n) => (H(), ta(Or(e.component), ge(ca(e.componentProps)), null, 16));
	}
}, zx = [
	"data-nav",
	"data-vue-router-path",
	"aria-current",
	"aria-label",
	"title",
	"onClick"
], Bx = ["innerHTML"], Vx = { class: "sb-vue-nav-label" }, Hx = {
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
		let t = jl(), n = Al(), r = Q(), i = e, a = q(() => r.navigationItems.length ? r.navigationItems : i.items);
		function o(e) {
			i.onNavigate(e, n);
		}
		let s = (e) => {
			let n = r.route;
			return (t.path === Pl(n.route) ? Fl(t.path) : n.active) === e;
		};
		return (n, r) => (H(!0), U(V, null, B(a.value, (n) => (H(), U("button", {
			key: n.id,
			type: "button",
			class: O(e.mobile ? s(n.id) ? "active" : "" : ["nav-button", { active: s(n.id) }]),
			"data-nav": n.id,
			"data-vue-router-path": I(t).path,
			"aria-current": s(n.id) ? "page" : void 0,
			"aria-label": e.mobile ? n.label : void 0,
			title: e.mobile ? n.label : void 0,
			onClick: (e) => o(n.id)
		}, [W("span", {
			class: "sb-vue-nav-icon",
			"aria-hidden": "true",
			innerHTML: n.iconHtml
		}, null, 8, Bx), W("span", Vx, k(e.mobile ? n.shortLabel : n.label), 1)], 10, zx))), 128));
	}
}, Ux = {
	class: "sb-vue-history-toolbar",
	role: "group",
	"aria-label": "История разделов SUNOBOOM"
}, Wx = ["disabled"], Gx = ["disabled"], Kx = /*#__PURE__*/ xd({
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
		let t = e, n = jl(), r = Q(), i = /* @__PURE__ */ P(!1), a = q(() => (n.path, r.route.revision, Wl.value, {
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
		return (e, t) => (H(), U("div", Ux, [
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
			}, [W("path", { d: "m15 18-6-6 6-6" })], -1)]], 8, Wx),
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
			}, [W("path", { d: "m9 18 6-6-6-6" })], -1)]], 8, Gx)
		]));
	}
}, [["__scopeId", "data-v-c738b8ec"]]), qx = Object.freeze({
	"/account/myideas": "myideas",
	"/account/myprompts": "myprompts",
	"/account/events": "events"
});
function Jx(e) {
	if (e?.active === "producer" && e?.production?.id) return Pl("producer", {
		kind: "production",
		id: e.production.id
	});
	let t = e?.track;
	return Pl(e?.active, t?.id ? {
		kind: "track",
		id: t.id
	} : null);
}
function Yx(e, t) {
	if (!e || typeof t?.snapshot != "function") return null;
	let n = t.snapshot();
	if (n?.trackEditing) return null;
	let r = $l(e.path);
	if (r && n?.items?.some((e) => e?.id === r)) return {
		kind: "menu",
		id: r
	};
	let i = qx[e.path];
	if (i && typeof t.navigateWorkspace == "function") return {
		kind: "workspace",
		id: i
	};
	let a = e.context;
	return e.path === "/catalog/detail" && a?.kind === "genre" && typeof t.canRestoreGenre == "function" && t.canRestoreGenre(a.id, a.tab) && typeof t.restoreGenre == "function" ? {
		kind: "genre",
		id: a.id,
		tab: a.tab
	} : a?.kind === "production" && e.path === Pl("producer", a) && t.canRestoreProduction?.(a.id) === !0 && typeof t.restoreProduction == "function" ? {
		kind: "production",
		id: a.id
	} : e.path === "/account/tracks" && t.canRestoreTrackList?.() === !0 && typeof t.restoreTrackList == "function" ? { kind: "track-list" } : e.path === "/account/tracks/detail" && a?.kind === "track" && t.canRestoreTrack?.(a.id) === !0 && typeof t.restoreTrack == "function" ? {
		kind: "track",
		id: a.id
	} : null;
}
var Xx = !1;
function Zx(e, { legacyApi: t } = {}) {
	if (Xx || !["back", "forward"].includes(e) || typeof t?.snapshot != "function") return !1;
	let n = Ql(e), r = t.snapshot();
	return !!Yx(n, t) && ru().path === Jx(r);
}
async function Qx(e, { legacyApi: t, syncRoute: n = ou } = {}) {
	if (Xx || !["back", "forward"].includes(e) || !t || typeof t.snapshot != "function" || typeof t.navigate != "function") return !1;
	Xx = !0;
	try {
		await tu();
		let r = Yx(Ql(e), t), i = t.snapshot();
		if (!r || ru().path !== Jx(i) || !await nu(e)) return !1;
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
		Xx = !1;
	}
}
// src/vue/navigation/legacyBridge.js
var $x = [{
	key: "sidebar",
	selector: "[data-sb-vue-sidebar]",
	mobile: !1
}, {
	key: "mobile",
	selector: "[data-sb-vue-mobile]",
	mobile: !0
}];
function eS({ mountVueFeature: e, unmountVueFeature: t, sharedUi: n }) {
	let r = window.SUNOBOOM_LEGACY_NAV, i = document.getElementById("app");
	if (!r || !i || typeof r.snapshot != "function") return () => {};
	let a = /* @__PURE__ */ new Map(), o = !1;
	window.SUNOBOOM_VUE_ROUTE = Object.freeze({
		snapshot: () => au.value,
		routerSnapshot: () => ru(),
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
		back: () => Qx("back", { legacyApi: r }),
		forward: () => Qx("forward", { legacyApi: r }),
		recordGenre: (e, t, n = "push") => {
			let i = r.snapshot();
			return i.active !== "detail" || i.detail?.id !== e || i.detail?.tab !== t || !r.canRestoreGenre?.(e, t) ? !1 : (ou("detail", {
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
			return n.active !== "producer" || n.production?.id !== e || !r.canRestoreProduction?.(e) ? !1 : (ou("producer", {
				historyMode: t,
				context: {
					kind: "production",
					id: e
				}
			}), !0);
		},
		recordTrackList: () => {
			let e = r.snapshot();
			return e.active !== "tracks" || e.track?.id || e.trackEditing ? !1 : (ou("tracks"), !0);
		},
		recordTrack: (e, t = "push") => {
			let n = r.snapshot();
			return n.active !== "tracks" || n.track?.id !== e || n.trackEditing || !r.canRestoreTrack?.(e) ? !1 : (ou("tracks", {
				historyMode: t,
				context: {
					kind: "track",
					id: e
				}
			}), !0);
		}
	});
	function s() {
		if (o) return;
		let t = r.snapshot();
		ou(t.active, { context: t.track?.id ? {
			kind: "track",
			id: t.track.id
		} : t.active === "producer" && t.production?.id ? {
			kind: "production",
			id: t.production.id
		} : null });
		let s = Ns(t);
		n.publishNavigation(s);
		let c = JSON.stringify(s.map(({ active: e, ...t }) => t)), l = i.querySelector("[data-sb-vue-history]"), u = a.get("history");
		if (!l) u?.unmount(), a.delete("history");
		else if (u?.target !== l) {
			u?.unmount();
			let t = e(l, Kx, {
				canRestore: (e) => Zx(e, { legacyApi: r }),
				onRestore: (e) => Qx(e, { legacyApi: r })
			}, { vueRouter: !0 });
			t && a.set("history", {
				target: l,
				unmount: t
			});
		}
		for (let { key: t, selector: n, mobile: o } of $x) {
			let l = i.querySelector(n), u = a.get(t);
			if (!l) {
				u?.unmount(), a.delete(t);
				continue;
			}
			if (u?.target === l && u.signature === c) continue;
			u?.unmount();
			let d = e(l, Hx, {
				items: s,
				mobile: o,
				onNavigate: (e, t) => If(e, {
					router: t,
					legacyApi: r
				})
			}, { vueRouter: !0 });
			d && a.set(t, {
				target: l,
				signature: c,
				unmount: d
			});
		}
	}
	let c = new MutationObserver(s), l = r.snapshot();
	return ou(l.active, { context: l.track?.id ? {
		kind: "track",
		id: l.track.id
	} : l.active === "producer" && l.production?.id ? {
		kind: "production",
		id: l.production.id
	} : null }), tu().then(() => {
		o || (c.observe(i, { childList: !0 }), s());
	}), function() {
		if (!o) {
			o = !0, c.disconnect();
			for (let e of a.values()) e.unmount();
			a.clear();
		}
	};
}
// src/vue/academy/GenreCards.vue
var tS = ["data-id"], nS = { class: "genre-content" }, rS = { class: "kicker" }, iS = { class: "foot" }, aS = {
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
			style: D({ "--accent": e.color }),
			"data-action": "genre",
			"data-id": e.id
		}, [n[1] ||= W("div", {
			class: "art",
			"aria-hidden": "true"
		}, null, -1), W("div", nS, [W("div", null, [
			W("div", rS, k(e.family) + " · " + k(e.bpm[0]) + "–" + k(e.bpm[1]) + " BPM", 1),
			W("h3", null, k(e.name), 1),
			W("p", null, k(e.tagline), 1)
		]), W("div", iS, [W("span", null, k(e.era), 1), n[0] ||= W("span", { style: { color: "#ffacd9" } }, "Открыть →", -1)])])], 12, tS))), 128));
	}
}, oS = { class: "genre-family-toolbar" }, sS = { class: "search-box" }, cS = ["innerHTML"], lS = { class: "hint" }, uS = { class: "genre-family-summary" }, dS = { id: "catalog-count" }, fS = ["data-id"], pS = {
	class: "hint",
	id: "sb-academy-search-hint"
}, mS = {
	id: "catalog-cards",
	class: "genre-families"
}, hS = [
	"data-family",
	"open",
	"onToggle"
], gS = {
	class: "genre-family-icon",
	"aria-hidden": "true"
}, _S = { class: "genre-family-heading" }, vS = { class: "genre-family-right" }, yS = { class: "genre-family-count" }, bS = { class: "genre-family-body" }, xS = {
	key: 0,
	class: "sb-sacred-index"
}, SS = {
	key: 0,
	class: "sb-sacred-overview"
}, CS = { class: "genre-grid" }, wS = { class: "sb-sacred-religions" }, TS = [
	"data-sb-religion",
	"open",
	"onToggle"
], ES = { class: "sb-sacred-religion-header" }, DS = {
	class: "sb-sacred-religion-icon",
	"aria-hidden": "true"
}, OS = { class: "sb-sacred-religion-label" }, kS = { class: "sb-sacred-count" }, AS = { class: "sb-sacred-religion-content" }, jS = [
	"data-sb-branch",
	"open",
	"onToggle"
], MS = { class: "sb-sacred-branch-header" }, NS = { class: "sb-sacred-branch-label" }, PS = { class: "sb-sacred-count" }, FS = { class: "sb-sacred-branch-content" }, IS = { class: "genre-grid" }, LS = {
	key: 1,
	class: "genre-grid"
}, RS = {
	key: 1,
	class: "genre-family-empty"
}, zS = {
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
		let t = e, n = Q(), r = /* @__PURE__ */ P(t.snapshot.query || ""), i = /* @__PURE__ */ Ht({
			family: { ...t.snapshot.expanded?.family || {} },
			religion: { ...t.snapshot.expanded?.religion || {} },
			branch: { ...t.snapshot.expanded?.branch || {} }
		}), a = q(() => t.search(r.value)), o = q(() => !!r.value.trim()), s = q(() => {
			let e = a.value.ids == null ? null : new Set(a.value.ids);
			return (t.snapshot.families || []).map((t) => ({
				...t,
				genres: t.genres.filter((t) => !e || e.has(t.id))
			})).filter((e) => e.genres.length);
		}), c = q(() => s.value.reduce((e, t) => e + t.genres.length, 0)), l = q(() => o.value ? {
			name: "По названиям жанров",
			family: "По направлениям",
			artist: "По исполнителям",
			description: "По описаниям и звучанию"
		}[a.value.mode] || "" : "Поиск работает при вводе"), u = q(() => s.value.find((e) => e.name === "Религиозная музыка")), d = q(() => u.value?.genres.find((e) => e.id === "sacred-music")), f = q(() => {
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
		let m = q(() => (t.snapshot.families || []).flatMap((e) => e.genres).find((e) => e.id === n.academyFocus.genreId) || null);
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
			W("div", oS, [W("label", sS, [W("span", {
				innerHTML: e.searchIcon,
				"aria-hidden": "true"
			}, null, 8, cS), L(W("input", {
				id: "genre-search",
				"onUpdate:modelValue": n[0] ||= (e) => r.value = e,
				type: "search",
				enterkeyhint: "search",
				autocapitalize: "off",
				spellcheck: "false",
				"aria-label": "Поиск жанров",
				placeholder: "Поиск жанра, поджанра или исполнителя…",
				autocomplete: "off"
			}, null, 512), [[J, r.value]])]), W("span", lS, k(e.snapshot.families.length) + " разделов · " + k(e.snapshot.families.reduce((e, t) => e + t.genres.length, 0)) + " жанров", 1)]),
			W("div", uS, [
				W("h2", dS, k(o.value ? "Найдено жанров" : "Музыкальные жанры") + " · " + k(c.value), 1),
				m.value ? (H(), U("button", {
					key: 0,
					type: "button",
					class: "btn ghost small",
					"data-sb-last-genre": "",
					"data-action": "genre",
					"data-id": m.value.id
				}, " ↶ Последний жанр: " + k(m.value.name), 9, fS)) : K("", !0),
				W("span", pS, k(l.value), 1)
			]),
			W("div", mS, [s.value.length ? (H(!0), U(V, { key: 0 }, B(s.value, (e) => (H(), U("details", {
				key: e.name,
				class: "genre-family",
				"data-family": e.name,
				style: D({ "--family-accent": e.meta.accent }),
				open: h("family", e.name),
				onToggle: (t) => g("family", e.name, t)
			}, [W("summary", null, [
				W("span", gS, k(e.meta.icon), 1),
				W("span", _S, [W("strong", null, k(e.name), 1), W("small", null, k(e.meta.desc), 1)]),
				W("span", vS, [W("span", yS, k(e.genres.length) + " " + k(_(e.genres.length)), 1), n[1] ||= W("svg", {
					class: "genre-family-chevron",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2",
					"aria-hidden": "true"
				}, [W("path", { d: "m5 9 7 7 7-7" })], -1)])
			]), W("div", bS, [e.name === "Религиозная музыка" ? (H(), U("div", xS, [
				n[5] ||= W("div", { class: "sb-sacred-intro" }, [
					W("span", { class: "sb-sacred-eyebrow" }, "МУЗЫКА МИРОВЫХ РЕЛИГИЙ"),
					W("h3", null, "Религии и музыкальные традиции"),
					W("p", null, "Открой религию, затем её направление или течение. Здесь представлены музыкальные традиции — их границы не всегда совпадают с конфессиональными.")
				], -1),
				d.value ? (H(), U("div", SS, [n[2] ||= W("div", { class: "sb-sacred-overview-label" }, "📖 Обзор раздела", -1), W("div", CS, [oa(aS, { genres: [d.value] }, null, 8, ["genres"])])])) : K("", !0),
				W("div", wS, [(H(!0), U(V, null, B(f.value, (e) => (H(), U("details", {
					key: e.id,
					class: "sb-sacred-religion",
					"data-sb-religion": e.id,
					open: h("religion", e.id),
					onToggle: (t) => g("religion", e.id, t)
				}, [W("summary", ES, [
					W("span", DS, k(e.icon), 1),
					W("span", OS, [W("strong", null, k(e.name), 1), W("small", null, k(e.description), 1)]),
					W("span", kS, k(e.count), 1),
					n[3] ||= W("span", {
						class: "sb-sacred-chevron",
						"aria-hidden": "true"
					}, "⌄", -1)
				]), W("div", AS, [(H(!0), U(V, null, B(e.branches, (e) => (H(), U("details", {
					key: e.id,
					class: "sb-sacred-branch",
					"data-sb-branch": e.id,
					open: h("branch", e.id),
					onToggle: (t) => g("branch", e.id, t)
				}, [W("summary", MS, [
					W("span", NS, [W("strong", null, k(e.name), 1), W("small", null, k(e.description), 1)]),
					W("span", PS, k(e.genres.length) + " " + k(v(e.genres.length)), 1),
					n[4] ||= W("span", {
						class: "sb-sacred-chevron",
						"aria-hidden": "true"
					}, "⌄", -1)
				]), W("div", FS, [W("div", IS, [oa(aS, { genres: e.genres }, null, 8, ["genres"])])])], 40, jS))), 128))])], 40, TS))), 128))])
			])) : (H(), U("div", LS, [oa(aS, { genres: e.genres }, null, 8, ["genres"])]))])], 44, hS))), 128)) : (H(), U("div", RS, "Ничего не найдено. Попробуй другой запрос."))])
		], 64));
	}
};
// src/vue/academy/legacyAcademyBridge.js
function BS({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ACADEMY, n = document.getElementById("app");
	if (!t || !n || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-academy-root");
		if (r?.target === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o?.families?.length) return;
		let s = e(a, zS, {
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
// src/vue/academy/genre-tree-model.js
var VS = (e) => String(e ?? "").trim().normalize("NFKC").toLocaleLowerCase("ru");
function HS(e, t, n, r = "all", i = 30) {
	let a = VS(n);
	if (!a) return {
		count: 0,
		items: []
	};
	let o = new Map(e.map((e) => [e.id, e])), s = /* @__PURE__ */ new Set(), c = [];
	function l(e, t) {
		let n = o.get(t);
		n && !s.has(t) && VS(n.name).includes(a) && (s.add(t), c.push({
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
function US(e, t) {
	return t === "zoom-reset" ? 1 : t !== "zoom-in" && t !== "zoom-out" ? e : Math.min(1.5, Math.max(.75, Math.round((e + (t === "zoom-in" ? .15 : -.15)) * 100) / 100));
}
function WS(e, t) {
	let n = Array.isArray(e?.edges) ? e.edges : [];
	return e?.id === "all" ? n.filter(([e, n]) => e === t || n === t) : n;
}
// src/vue/academy/GenreTree.vue
var GS = {
	class: "sb-gt-vue-content",
	"data-sb-vue-genre-tree": ""
}, KS = { class: "sb-gt-head" }, qS = { class: "sb-gt-count" }, JS = { class: "sb-gt-controls" }, YS = ["value"], XS = ["value"], ZS = ["value"], QS = ["value"], $S = { class: "sb-gt-extra" }, eC = {
	class: "sb-gt-search-label",
	for: "sb-gt-search"
}, tC = ["value"], nC = { class: "sb-gt-zoom" }, rC = { id: "sb-gt-zoom-label" }, iC = {
	id: "sb-gt-search-results",
	class: "sb-gt-search-results",
	"aria-live": "polite"
}, aC = { class: "sb-gt-search-title" }, oC = { class: "sb-gt-search-links" }, sC = [
	"data-id",
	"data-tree",
	"onClick"
], cC = {
	key: 1,
	class: "sb-gt-search-empty"
}, lC = { class: "sb-gt-intro" }, uC = { class: "sb-gt-legend" }, dC = ["aria-label"], fC = ["data-sb-gt-family"], pC = {
	key: 1,
	class: "sb-gt-stage"
}, mC = { class: "sb-gt-node-list" }, hC = [
	"data-id",
	"aria-pressed",
	"onClick"
], gC = { class: "sb-gt-node-name" }, _C = { class: "sb-gt-node-era" }, vC = {
	key: 0,
	id: "sb-gt-description",
	class: "sb-gt-detail",
	"aria-live": "polite"
}, yC = { class: "sb-gt-detail-top" }, bC = { class: "sb-gt-sub" }, xC = ["data-id"], SC = { class: "sb-gt-description" }, CC = { class: "sb-gt-related" }, wC = ["data-id", "onClick"], TC = {
	key: 1,
	class: "sb-gt-note"
}, EC = { class: "sb-gt-related" }, DC = ["data-id", "onClick"], OC = /*#__PURE__*/ xd({
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
		let t = e, n = Q(), r = /* @__PURE__ */ P(t.snapshot.tree), i = /* @__PURE__ */ P(t.snapshot.selected), a = /* @__PURE__ */ P(t.snapshot.query || ""), o = /* @__PURE__ */ P(t.snapshot.zoom || 1), s = /* @__PURE__ */ P("");
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
		let c = /* @__PURE__ */ P(null), l = /* @__PURE__ */ P(null), u = t.snapshot.genres, d = new Map(u.map((e) => [e.id, e])), f = t.snapshot.trees, p = t.snapshot.relations, m = t.snapshot.stageLabels, h = q(() => f.find((e) => e.id === r.value) || f[0]), g = q(() => h.value.id === "all"), _ = q(() => h.value.columns.map((e, t) => ({
			index: t,
			group: g.value ? h.value.groups[t] : null,
			entries: e.map((e) => d.get(e)).filter(Boolean)
		}))), v = q(() => _.value.reduce((e, t) => e + t.entries.length, 0)), y = q(() => d.get(i.value) || d.get(h.value.focus)), b = q(() => WS(h.value, i.value).filter(([e, t]) => e === i.value || t === i.value).map(([e, t, n, r]) => {
			let a = d.get(e === i.value ? t : e);
			return a ? {
				id: a.id,
				name: a.name,
				type: n,
				note: r,
				direction: e === i.value ? "→" : "←"
			} : null;
		}).filter(Boolean)), x = q(() => g.value && y.value ? u.filter((e) => e.id !== i.value && e.family === y.value.family).slice(0, 8) : []), ee = q(() => HS(u, f, a.value, r.value)), S = (e) => !!a.value.trim() && !e.name.toLocaleLowerCase("ru").includes(a.value.trim().toLocaleLowerCase("ru"));
		function C() {
			En(() => requestAnimationFrame(() => t.treeApi.drawLines()));
		}
		function te(e) {
			let n = t.treeApi.changeTree(e);
			n && (r.value = n.tree, i.value = n.selected, a.value = "", s.value = "", C());
		}
		function ne(e) {
			d.has(e) && t.treeApi.select(e) && (i.value = e, C());
		}
		function re(e) {
			let n = US(o.value, e);
			t.treeApi.setZoom(n), o.value = n, C();
		}
		function w(e) {
			a.value = e.target.value, t.treeApi.setQuery(a.value);
		}
		function ie(e) {
			let n = t.treeApi.searchJump(e.tree, e.id);
			n && (r.value = n.tree, i.value = n.selected, a.value = "", s.value = "", En(() => {
				[...l.value?.querySelectorAll(".sb-gt-node") || []].find((t) => t.dataset.id === e.id)?.scrollIntoView({
					behavior: "smooth",
					block: "nearest",
					inline: "center"
				}), C();
			}));
		}
		function T(e) {
			s.value = e.target.value, [...l.value?.querySelectorAll("[data-sb-gt-family]") || []].find((e) => e.dataset.sbGtFamily === s.value)?.scrollIntoView({
				behavior: "smooth",
				block: "nearest",
				inline: "start"
			});
		}
		return z(C), (t, n) => (H(), U("div", GS, [
			W("div", KS, [n[5] ||= W("div", null, [
				W("span", { class: "sb-gt-kicker" }, "SUNOBOOM · ИСТОРИЯ МУЗЫКИ"),
				W("h2", null, "От истоков к новым жанрам"),
				W("p", null, "Нажми на жанр в схеме, чтобы увидеть его историю и связи. Затем открой его существующую карточку в Академии.")
			], -1), W("div", qS, k(v.value) + " жанров" + k(g.value ? " · " + h.value.groups.length + " направлений" : " в схеме"), 1)]),
			W("div", JS, [
				n[8] ||= W("label", { for: "sb-gt-tree-choice" }, "Карта жанров", -1),
				W("select", {
					id: "sb-gt-tree-choice",
					value: r.value,
					"aria-label": "Выберите музыкальное древо",
					onChange: n[0] ||= (e) => te(e.target.value)
				}, [(H(!0), U(V, null, B(I(f), (e) => (H(), U("option", {
					key: e.id,
					value: e.id
				}, k(e.icon) + " " + k(e.label), 9, XS))), 128))], 40, YS),
				g.value ? (H(), U(V, { key: 0 }, [n[7] ||= W("label", { for: "sb-gt-group-jump" }, "Перейти к направлению", -1), W("select", {
					id: "sb-gt-group-jump",
					value: s.value,
					"aria-label": "Перейти к музыкальному направлению",
					onChange: T
				}, [n[6] ||= W("option", { value: "" }, "Выберите раздел…", -1), (H(!0), U(V, null, B(h.value.groups, (e, t) => (H(), U("option", {
					key: e.name,
					value: String(t)
				}, k(e.icon) + " " + k(e.name) + " (" + k(e.ids.length) + ") ", 9, QS))), 128))], 40, ZS)], 64)) : K("", !0)
			]),
			W("div", $S, [W("label", eC, [n[9] ||= G(" Поиск жанра по древу ", -1), W("input", {
				id: "sb-gt-search",
				value: a.value,
				type: "search",
				placeholder: "Например: ска-панк",
				autocomplete: "off",
				onInput: w
			}, null, 40, tC)]), W("div", nC, [
				n[10] ||= W("span", null, "Масштаб карты", -1),
				W("button", {
					type: "button",
					"data-sb-gt-action": "zoom-out",
					"aria-label": "Уменьшить масштаб",
					onClick: n[1] ||= (e) => re("zoom-out")
				}, "−"),
				W("output", rC, k(Math.round(o.value * 100)) + "%", 1),
				W("button", {
					type: "button",
					"data-sb-gt-action": "zoom-in",
					"aria-label": "Увеличить масштаб",
					onClick: n[2] ||= (e) => re("zoom-in")
				}, "+"),
				W("button", {
					type: "button",
					"data-sb-gt-action": "zoom-reset",
					onClick: n[3] ||= (e) => re("zoom-reset")
				}, "Сброс")
			])]),
			W("div", iC, [a.value.trim() ? (H(), U(V, { key: 0 }, [ee.value.count ? (H(), U(V, { key: 0 }, [W("div", aC, " Найдено в коллекции: " + k(ee.value.count) + k(ee.value.count > 30 ? " · показаны первые 30" : ""), 1), W("div", oC, [(H(!0), U(V, null, B(ee.value.items, (e) => (H(), U("button", {
				key: e.id,
				type: "button",
				"data-sb-gt-action": "search-jump",
				"data-id": e.id,
				"data-tree": e.tree,
				onClick: (t) => ie(e)
			}, [G(k(e.name) + " ", 1), W("small", null, "(" + k(e.family) + ")", 1)], 8, sC))), 128))])], 64)) : (H(), U("p", cC, "Жанр не найден в коллекции Академии."))], 64)) : K("", !0)]),
			W("p", lC, k(h.value.intro), 1),
			W("div", uC, [(H(!0), U(V, null, B(I(p), (e, t) => (H(), U("span", { key: t }, [W("i", { style: D({ "--rel-color": e.color }) }, null, 4), G(k(e.label), 1)]))), 128))]),
			W("div", {
				ref_key: "viewport",
				ref: c,
				class: "sb-gt-viewport",
				tabindex: "0",
				"aria-label": g.value ? "Все жанры Академии по музыкальным направлениям, горизонтальная прокрутка" : "Схема связей: горизонтально прокручиваемая карта жанров"
			}, [W("div", {
				ref_key: "canvas",
				ref: l,
				class: O(["sb-gt-canvas", { "sb-gt-canvas-all": g.value }]),
				style: D({
					zoom: o.value,
					"--sb-gt-family-count": g.value ? h.value.columns.length : 4
				})
			}, [n[11] ||= W("svg", {
				class: "sb-gt-lines",
				"aria-hidden": "true"
			}, null, -1), W("div", { class: O(["sb-gt-columns", { "sb-gt-columns-all": g.value }]) }, [(H(!0), U(V, null, B(_.value, (e) => (H(), U("div", {
				key: r.value + ":" + e.index,
				class: O(["sb-gt-column", { "sb-gt-column-all": g.value }]),
				"data-sb-gt-family": g.value ? String(e.index) : null
			}, [g.value ? (H(), U("div", {
				key: 0,
				class: "sb-gt-stage sb-gt-family-heading",
				style: D({ "--sb-gt-family-accent": e.group.accent })
			}, [W("strong", null, k(e.group.icon) + " " + k(e.group.name), 1), W("span", null, k(e.entries.length), 1)], 4)) : (H(), U("div", pC, [W("span", null, "0" + k(e.index + 1), 1), G(k(I(m)[e.index]), 1)])), W("div", mC, [(H(!0), U(V, null, B(e.entries, (e) => (H(), U("button", {
				key: e.id,
				type: "button",
				class: O(["sb-gt-node", {
					"is-selected": i.value === e.id,
					"sb-gt-search-dim": S(e)
				}]),
				"data-sb-gt-action": "select",
				"data-id": e.id,
				"aria-pressed": i.value === e.id,
				onClick: (t) => ne(e.id)
			}, [W("span", gC, k(e.name), 1), W("span", _C, k(e.era || e.family || ""), 1)], 10, hC))), 128))])], 10, fC))), 128))], 2)], 6)], 8, dC),
			y.value ? (H(), U("div", vC, [
				W("div", yC, [W("div", null, [
					n[12] ||= W("div", { class: "sb-gt-kicker" }, "ВЫБРАННОЕ НАПРАВЛЕНИЕ", -1),
					W("h3", null, k(y.value.name), 1),
					W("p", bC, k(y.value.era || "") + " · " + k(y.value.family || ""), 1)
				]), W("button", {
					type: "button",
					class: "btn primary sb-gt-open",
					"data-sb-gt-action": "open",
					"data-id": y.value.id,
					onClick: n[4] ||= (t) => e.treeApi.openGenre(y.value.id)
				}, "Открыть карточку ↗", 8, xC)]),
				W("p", SC, k(y.value.description || y.value.tagline || "Описание в карточке жанра."), 1),
				b.value.length ? (H(), U(V, { key: 0 }, [n[13] ||= W("h4", null, "Исторические связи", -1), W("div", CC, [(H(!0), U(V, null, B(b.value, (e) => (H(), U("button", {
					key: e.id + ":" + e.type,
					type: "button",
					class: "sb-gt-related-btn",
					"data-sb-gt-action": "select",
					"data-id": e.id,
					onClick: (t) => ne(e.id)
				}, [W("span", { class: O(["sb-gt-related-mark", "sb-gt-" + e.type]) }, k(e.direction), 3), W("span", null, [W("strong", null, k(e.name), 1), W("small", null, k(e.note), 1)])], 8, wC))), 128))])], 64)) : g.value ? K("", !0) : (H(), U("p", TC, "У этого узла пока нет нарисованных связей в выбранной схеме.")),
				g.value && x.value.length ? (H(), U(V, { key: 2 }, [W("h4", null, "Другие жанры раздела «" + k(y.value.family) + "»", 1), W("div", EC, [(H(!0), U(V, null, B(x.value, (e) => (H(), U("button", {
					key: e.id,
					type: "button",
					class: "sb-gt-related-btn",
					"data-sb-gt-action": "select",
					"data-id": e.id,
					onClick: (t) => ne(e.id)
				}, [n[14] ||= W("span", { class: "sb-gt-related-mark" }, "♫", -1), W("span", null, [W("strong", null, k(e.name), 1)])], 8, DC))), 128))])], 64)) : K("", !0)
			])) : K("", !0),
			n[15] ||= W("p", { class: "sb-gt-note" }, "Схема показывает основные исторические влияния и стилистические пересечения. Жанры могут развиваться параллельно; стрелки не означают единственное происхождение.", -1)
		]));
	}
}, [["__scopeId", "data-v-6e70f61e"]]);
// src/vue/academy/legacyGenreTreeBridge.js
function kC({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_GENRE_TREE, n = document.getElementById("app");
	if (!t?.snapshot || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-genre-tree"), o = a?.open ? a.querySelector("#sb-gt-inner") : null;
		if (r?.target === o && o?.isConnected || (r &&= (r.unmount(), null), !o)) return;
		let s = t.snapshot();
		if (!s?.trees?.length || !s?.genres?.length) return;
		let c = e(o, OC, {
			snapshot: s,
			treeApi: t
		});
		c && (r = {
			target: o,
			unmount: c
		});
	}
	let o = new MutationObserver(a);
	o.observe(n, { childList: !0 });
	let s = (e) => {
		e.target.id === "sb-genre-tree" && queueMicrotask(a);
	}, c = (e) => {
		e.target.closest?.("[data-sb-gt-action=\"reveal\"]") && queueMicrotask(a);
	};
	return document.addEventListener("toggle", s, !0), document.addEventListener("click", c), a(), () => {
		i = !0, o.disconnect(), document.removeEventListener("toggle", s, !0), document.removeEventListener("click", c), r?.unmount(), r = null;
	};
}
// src/vue/academy/GenreOverview.vue
var AC = {
	class: "gb-grid",
	"data-sb-vue-overview": ""
}, jC = { class: "gb-column" }, MC = { class: "gb-panel pink" }, NC = { class: "gb-unit" }, PC = { class: "gb-unit" }, FC = { class: "gb-unit" }, IC = { class: "gb-panel" }, LC = ["innerHTML"], RC = { class: "gb-column" }, zC = { class: "gb-panel blue" }, BC = {
	class: "gb-bpm-value",
	style: {
		"font-size": "26px",
		"font-weight": "900"
	}
}, VC = { class: "gb-artists" }, HC = { class: "gb-panel pink" }, UC = ["data-id"], WC = ["innerHTML"], GC = {
	__name: "GenreOverview",
	props: { genre: {
		type: Object,
		required: !0
	} },
	emits: ["select-tab"],
	setup(e) {
		return (t, n) => (H(), U("div", AC, [W("div", jC, [W("section", MC, [
			n[7] ||= W("div", { class: "gb-sup" }, "01 / ЗНАКОМСТВО С ЖАНРОМ", -1),
			n[8] ||= W("h2", null, "Характер и звучание", -1),
			W("p", null, [W("strong", null, k(e.genre.tagline), 1)]),
			W("p", null, k(e.genre.description), 1),
			W("div", NC, [n[2] ||= W("b", null, "🎸", -1), W("div", null, [n[1] ||= W("strong", null, "Инструменты", -1), W("span", null, k(e.genre.instruments) + ".", 1)])]),
			W("div", PC, [n[4] ||= W("b", null, "🎛️", -1), W("div", null, [n[3] ||= W("strong", null, "Саунд", -1), W("span", null, k(e.genre.style) + ".", 1)])]),
			W("div", FC, [n[6] ||= W("b", null, "✍️", -1), W("div", null, [n[5] ||= W("strong", null, "Тематика песен", -1), W("span", null, k(e.genre.themes) + ".", 1)])])
		]), W("section", IC, [
			n[10] ||= W("div", { class: "gb-sup" }, "03 / ИДЕИ ДЛЯ СТАРТА", -1),
			n[11] ||= W("h2", null, "Что можно спеть", -1),
			(H(!0), U(V, null, B(e.genre.ideas, (e, t) => (H(), U("div", {
				key: t,
				class: "gb-idea"
			}, [W("strong", null, k(e.title), 1), W("p", null, k(e.pitch), 1)]))), 128)),
			W("button", {
				type: "button",
				class: "btn ghost small",
				onClick: n[0] ||= (e) => t.$emit("select-tab", "ideas")
			}, [n[9] ||= G(" Все идеи ", -1), W("span", {
				"aria-hidden": "true",
				innerHTML: e.genre.icons.arrow
			}, null, 8, LC)])
		])]), W("div", RC, [W("section", zC, [
			n[12] ||= W("div", { class: "gb-sup" }, "02 / ПАСПОРТ НАПРАВЛЕНИЯ", -1),
			n[13] ||= W("h2", null, "История и сцена", -1),
			n[14] ||= W("div", { class: "info-label" }, "Эпоха", -1),
			W("p", null, k(e.genre.era), 1),
			n[15] ||= W("div", { class: "info-label" }, "Диапазон темпа", -1),
			W("p", BC, k(e.genre.bpm[0]) + "–" + k(e.genre.bpm[1]) + " BPM", 1),
			n[16] ||= W("div", { class: "info-label" }, "Исполнители для знакомства", -1),
			W("div", VC, [(H(!0), U(V, null, B(e.genre.artists, (e) => (H(), U("span", { key: e }, k(e), 1))), 128))])
		]), W("section", HC, [n[18] ||= ua("<div class=\"gb-sup\">04 / ТВОЯ МУЗЫКА</div><h2>Преврати знания в трек</h2><p>Выбери вокал, настроение и темп, затем создай промпт и структуру песни в Suno Studio.</p><div class=\"gb-unit\"><b>🎤</b><div><strong>Вокал</strong><span>Мужской, женский или дуэт; можно использовать русский язык.</span></div></div><div class=\"gb-unit\"><b>⚡</b><div><strong>Динамика</strong><span>Настрой энергию и характер припева под историю.</span></div></div>", 5), W("button", {
			type: "button",
			class: "btn primary small",
			"data-action": "use-genre",
			"data-id": e.genre.id
		}, [W("span", {
			innerHTML: e.genre.icons.studio,
			"aria-hidden": "true"
		}, null, 8, WC), n[17] ||= G(" Открыть студию ", -1)], 8, UC)])])]));
	}
}, KC = {
	key: 0,
	id: "sb-artist-expanded",
	class: "ahx-wrap",
	"data-sb-vue-artists": ""
}, qC = { class: "ahx-intro" }, JC = { class: "gb-eyebrow" }, YC = {
	class: "ahx-toolbar",
	role: "group",
	"aria-label": "Музыкальные сцены"
}, XC = ["aria-pressed"], ZC = ["aria-pressed"], QC = { class: "ahx-filters" }, $C = { class: "ahx-search" }, ew = ["innerHTML"], tw = {
	class: "ahx-filter-buttons",
	role: "group",
	"aria-label": "Фильтр исполнителей"
}, nw = [
	"data-vue-artist-filter",
	"aria-pressed",
	"onClick"
], rw = {
	id: "ahx-count",
	class: "ahx-count",
	"aria-live": "polite"
}, iw = { class: "ahx-section-head" }, aw = { class: "ahx-eyebrow" }, ow = { class: "ahx-num" }, sw = { class: "ahx-grid" }, cw = ["data-ahx-group"], lw = { class: "ahx-card-top" }, uw = {
	class: "ahx-avatar",
	"aria-hidden": "true"
}, dw = { class: "ahx-title" }, fw = { class: "ahx-era" }, pw = {
	key: 0,
	class: "ahx-track"
}, mw = {
	id: "ahx-no-results",
	class: "ahx-no-results"
}, hw = {
	key: 1,
	class: "ahx-empty"
}, gw = {
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
		let t = e, n = /* @__PURE__ */ P(t.catalog.initialScene()), r = /* @__PURE__ */ P(""), i = /* @__PURE__ */ P("all"), a = q(() => t.catalog.getScene(t.genre.id, n.value)), o = q(() => (a.value?.groups || []).map((e) => ({
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
		}))), s = q(() => o.value.reduce((e, t) => e + t.artists.length, 0)), c = q(() => (a.value?.groups || []).reduce((e, t) => e + t.artists.length, 0));
		async function l(e) {
			(e === "ru" || e === "world") && (n.value = e, t.catalog.setScene(e), r.value = "", i.value = "all", await En(), t.enhanceProfiles?.());
		}
		return z(() => t.enhanceProfiles?.()), yr(() => t.enhanceProfiles?.()), (t, u) => a.value ? (H(), U("div", KC, [
			W("div", qC, [
				W("div", JC, "АКАДЕМИЯ SUNOBOOM · " + k(e.genre.name), 1),
				u[4] ||= W("h2", null, "Исполнители и композиторы", -1),
				W("p", null, k(a.value.description), 1)
			]),
			W("div", YC, [W("button", {
				type: "button",
				"data-vue-artist-scene": "world",
				"aria-pressed": n.value === "world",
				class: O({ on: n.value === "world" }),
				onClick: u[0] ||= (e) => l("world")
			}, [u[5] ||= G(" 🌍 Мировая сцена ", -1), W("span", null, k(a.value.worldCount), 1)], 10, XC), W("button", {
				type: "button",
				"data-vue-artist-scene": "ru",
				"aria-pressed": n.value === "ru",
				class: O({ on: n.value === "ru" }),
				onClick: u[1] ||= (e) => l("ru")
			}, [u[6] ||= G(" 🎤 Русскоязычные ", -1), W("span", null, k(a.value.ruCount), 1)], 10, ZC)]),
			c.value ? (H(), U(V, { key: 0 }, [
				W("div", QC, [W("label", $C, [W("span", {
					"aria-hidden": "true",
					innerHTML: e.genre.icons.overview
				}, null, 8, ew), L(W("input", {
					"onUpdate:modelValue": u[2] ||= (e) => r.value = e,
					type: "search",
					"data-vue-artist-search": "",
					placeholder: "Найти исполнителя или произведение…",
					"aria-label": "Поиск по исполнителям"
				}, null, 512), [[J, r.value]])]), W("div", tw, [(H(), U(V, null, B([
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
					"aria-pressed": i.value === e.id,
					onClick: (t) => i.value = e.id
				}, k(e.label), 9, nw)), 64))])]),
				W("p", rw, "Показано " + k(s.value) + " из " + k(c.value) + " исполнителей.", 1),
				(H(!0), U(V, null, B(o.value, (e) => L((H(), U("section", {
					key: e.index,
					class: "ahx-section",
					"data-ahx-section": ""
				}, [W("div", iw, [W("div", null, [W("span", aw, "0" + k(e.index + 1) + " / ИСПОЛНИТЕЛИ", 1), W("h3", null, k(e.index ? "Современная сцена и продолжатели" : "Классика и предшественники"), 1)]), W("span", ow, k(e.artists.length), 1)]), W("div", sw, [(H(!0), U(V, null, B(e.artists, (e) => (H(), U("article", {
					key: e.key,
					class: "ahx-card",
					"data-ahx-group": e.group
				}, [
					W("div", lw, [W("span", uw, k(e.initials), 1), W("div", dw, [W("h4", null, k(e.name), 1), W("span", fw, k(e.period || "Музыкальная сцена"), 1)])]),
					W("span", { class: O(["ahx-role", { "ahx-role-neighbor": e.group === "adjacent" }]) }, k(e.label), 3),
					W("p", null, k(e.bio || "Музыкальное направление и характерный творческий почерк."), 1),
					e.track ? (H(), U("div", pw, [u[7] ||= W("small", null, "Ориентир для прослушивания", -1), W("strong", null, "♫ " + k(e.track), 1)])) : K("", !0)
				], 8, cw))), 128))])])), [[Qa, e.artists.length]])), 128)),
				L(W("div", mw, " По заданному поиску исполнители не найдены. Попробуй другой запрос или выбери «Все». ", 512), [[Qa, s.value === 0]])
			], 64)) : (H(), U("div", hw, [
				u[8] ||= W("strong", null, "Русскоязычная подборка ещё уточняется", -1),
				u[9] ||= W("p", null, "Для этого узкого направления пока нет достаточно подтверждённых примеров. Мы не будем подставлять артистов из других жанров без пояснения.", -1),
				W("button", {
					class: "btn ghost",
					type: "button",
					onClick: u[3] ||= (e) => l("world")
				}, "Посмотреть мировую сцену")
			])),
			u[10] ||= W("p", { class: "ahx-footnote" }, "В подборках могут встречаться близкие стили, кино- и игровая музыка, инструментальные коллективы. Их связь с жанром поясняется в карточке. Указанные произведения — ориентиры для знакомства, а не ссылки на конкретные релизы.", -1)
		])) : K("", !0);
	}
}, _w = {
	class: "idea-grid",
	"data-sb-vue-ideas": ""
}, vw = { class: "idea-badge" }, yw = { class: "actions" }, bw = ["data-id", "data-i"], xw = ["innerHTML"], Sw = [
	"data-id",
	"data-i",
	"aria-pressed"
], Cw = ["innerHTML"], ww = {
	__name: "GenreIdeas",
	props: { genre: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (H(), U("div", _w, [(H(!0), U(V, null, B(e.genre.allIdeas, (t) => (H(), U("div", {
			key: t.index,
			class: "idea"
		}, [
			W("div", vw, k(e.genre.name) + " · " + k(t.mood), 1),
			W("h3", null, k(t.title), 1),
			W("p", null, k(t.pitch), 1),
			W("div", yw, [W("button", {
				type: "button",
				class: "btn primary small",
				"data-action": "idea-use",
				"data-id": e.genre.id,
				"data-i": t.index
			}, [W("span", {
				"aria-hidden": "true",
				innerHTML: e.genre.icons.studio
			}, null, 8, xw), n[0] ||= G(" В студию ", -1)], 8, bw), W("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "idea-save",
				"data-id": e.genre.id,
				"data-i": t.index,
				"aria-pressed": t.saved ? "true" : "false"
			}, [W("span", {
				"aria-hidden": "true",
				innerHTML: e.genre.icons.heart
			}, null, 8, Cw), G(" " + k(t.saved ? "Сохранено" : "Сохранить"), 1)], 8, Sw)])
		]))), 128))]));
	}
}, Tw = {
	class: "panel",
	"data-sb-vue-prompts": ""
}, Ew = { class: "idea-grid" }, Dw = { class: "idea" }, Ow = ["data-id"], kw = ["innerHTML"], Aw = { class: "idea" }, jw = ["data-id"], Mw = ["innerHTML"], Nw = {
	__name: "GenrePrompts",
	props: { genre: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (H(), U("div", Tw, [
			n[5] ||= W("h3", null, "Шаблоны звучания", -1),
			n[6] ||= W("p", null, "Начни с одного из вариантов. Он перенесёт настройки жанра в конструктор — там можно выбрать вокал, настроение и язык.", -1),
			W("div", Ew, [W("div", Dw, [
				n[1] ||= W("div", { class: "idea-badge" }, "Оригинальное звучание", -1),
				W("h3", null, k(e.genre.name), 1),
				W("p", null, k(e.genre.style) + ".", 1),
				W("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "use-genre",
					"data-id": e.genre.id
				}, [n[0] ||= G(" Настроить в студии ", -1), W("span", {
					"aria-hidden": "true",
					innerHTML: e.genre.icons.arrow
				}, null, 8, kw)], 8, Ow)
			]), W("div", Aw, [
				n[3] ||= W("div", { class: "idea-badge" }, "Альтернативная версия", -1),
				n[4] ||= W("h3", null, "Мягкая атмосфера", -1),
				W("p", null, k(e.genre.style) + ", restrained dynamics, warm intimate production, emotional melodies.", 1),
				W("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "use-soft",
					"data-id": e.genre.id
				}, [n[2] ||= G(" Настроить в студии ", -1), W("span", {
					"aria-hidden": "true",
					innerHTML: e.genre.icons.arrow
				}, null, 8, Mw)], 8, jw)
			])])
		]));
	}
}, Pw = { class: "gb-hero" }, Fw = { class: "gb-content" }, Iw = { class: "gb-eyebrow" }, Lw = { class: "gb-title" }, Rw = { class: "gb-desc" }, zw = { class: "gb-tags" }, Bw = { class: "gb-buttons" }, Vw = ["data-id"], Hw = ["innerHTML"], Uw = ["data-id"], Ww = ["innerHTML"], Gw = {
	class: "gb-vinyl",
	"aria-hidden": "true"
}, Kw = { class: "gb-equalizer" }, qw = { class: "gb-facts" }, Jw = { class: "gb-fact" }, Yw = { class: "gb-fact" }, Xw = { class: "gb-fact" }, Zw = { class: "gb-fact" }, Qw = { class: "genre-detail-layout" }, $w = {
	class: "genre-side-nav",
	"aria-label": "ЖАНР-НАВ — меню жанра"
}, eT = {
	class: "genre-side-links",
	"aria-label": "Разделы жанра"
}, tT = [
	"data-tab",
	"aria-current",
	"onClick"
], nT = ["innerHTML"], rT = {
	class: "genre-detail-content",
	id: "genre-nav-content",
	"aria-label": "Содержимое раздела жанра"
}, iT = ["innerHTML"], aT = {
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
		], r = Q(), i = /* @__PURE__ */ P(t.genre.tab);
		R(i, (e) => r.publishAcademyFocus(t.genre.id, e), { immediate: !0 });
		let a = /* @__PURE__ */ P(t.tabContent(t.genre.id, i.value) || "");
		async function o(e) {
			if (i.value === e || !n.some((t) => t.id === e)) return;
			let r = t.tabContent(t.genre.id, e);
			typeof r == "string" && (i.value = e, a.value = r, await En(), window.innerWidth <= 850 && document.getElementById("genre-nav-content")?.scrollIntoView({
				block: "start",
				behavior: "smooth"
			}));
		}
		return (t, r) => (H(), U("div", {
			class: "genre-bright",
			style: D({ "--accent": e.genre.color })
		}, [W("div", Pw, [
			r[5] ||= W("div", { class: "gb-top" }, [W("button", {
				type: "button",
				class: "back",
				"data-action": "academy-back",
				"aria-label": "Назад к разделу Академии"
			}, "← Назад"), W("small", null, "SUNOBOOM · MUSIC ATLAS")], -1),
			W("div", Fw, [W("div", null, [
				W("div", Iw, k(e.genre.family) + " · " + k(e.genre.era), 1),
				W("h1", Lw, k(e.genre.name), 1),
				W("p", Rw, k(e.genre.description), 1),
				W("div", zw, [
					W("span", null, k(e.genre.tagline), 1),
					W("span", null, k(e.genre.bpm[0]) + "–" + k(e.genre.bpm[1]) + " BPM", 1),
					W("span", null, k(e.genre.ideasCount) + " идеи", 1)
				]),
				W("div", Bw, [W("button", {
					type: "button",
					class: "btn primary",
					"data-action": "use-genre",
					"data-id": e.genre.id
				}, [W("span", {
					innerHTML: e.genre.icons.studio,
					"aria-hidden": "true"
				}, null, 8, Hw), r[0] ||= G(" Создать в Suno ", -1)], 8, Vw), W("button", {
					type: "button",
					class: "btn ghost",
					"data-action": "favorite",
					"data-id": e.genre.id
				}, [W("span", {
					innerHTML: e.genre.icons.heart,
					"aria-hidden": "true"
				}, null, 8, Ww), G(" " + k(e.genre.favorite ? "В избранном" : "В избранное"), 1)], 8, Uw)])
			]), W("div", Gw, [W("div", Kw, [(H(), U(V, null, B(9, (e) => W("i", { key: e })), 64))])])]),
			W("div", qw, [
				W("div", Jw, [r[1] ||= W("small", null, "История", -1), W("strong", null, k(e.genre.era), 1)]),
				W("div", Yw, [r[2] ||= W("small", null, "Темп", -1), W("strong", null, k(e.genre.bpm[0]) + "–" + k(e.genre.bpm[1]) + " BPM", 1)]),
				W("div", Xw, [r[3] ||= W("small", null, "Треки", -1), W("strong", null, k(e.genre.ideasCount) + " сюжетных идеи", 1)]),
				W("div", Zw, [r[4] ||= W("small", null, "Артисты", -1), W("strong", null, k(e.genre.artistCount) + " ориентиров", 1)])
			])
		]), W("div", Qw, [W("aside", $w, [r[7] ||= W("div", { class: "genre-side-head" }, [W("span", null, "ЖАНР-НАВ"), W("small", null, "Разделы карточки")], -1), W("nav", eT, [(H(), U(V, null, B(n, (t) => W("button", {
			key: t.id,
			type: "button",
			class: O(["genre-side-item", { active: i.value === t.id }]),
			"data-tab": t.id,
			"aria-controls": "genre-nav-content",
			"aria-current": i.value === t.id ? "page" : "false",
			onClick: (e) => o(t.id)
		}, [
			W("span", {
				class: "genre-side-icon",
				innerHTML: e.genre.icons[t.id],
				"aria-hidden": "true"
			}, null, 8, nT),
			W("span", null, k(t.label), 1),
			r[6] ||= W("span", {
				class: "genre-side-chevron",
				"aria-hidden": "true"
			}, "›", -1)
		], 10, tT)), 64))])]), W("section", rT, [i.value === "overview" ? (H(), ta(GC, {
			key: 0,
			genre: e.genre,
			onSelectTab: o
		}, null, 8, ["genre"])) : i.value === "artists" && e.artistCatalog ? (H(), ta(gw, {
			key: 1,
			genre: e.genre,
			catalog: e.artistCatalog,
			"enhance-profiles": e.enhanceArtistProfiles
		}, null, 8, [
			"genre",
			"catalog",
			"enhance-profiles"
		])) : i.value === "ideas" ? (H(), ta(ww, {
			key: 2,
			genre: e.genre
		}, null, 8, ["genre"])) : i.value === "prompts" ? (H(), ta(Nw, {
			key: 3,
			genre: e.genre
		}, null, 8, ["genre"])) : (H(), U("div", {
			key: 4,
			innerHTML: a.value
		}, null, 8, iT))])])], 4));
	}
};
// src/vue/academy/legacyGenreDetailBridge.js
function oT({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_GENRE, n = document.getElementById("app");
	if (!n || !t || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-genre-detail");
		if (r?.target === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o?.id) return;
		let s = e(a, aT, {
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
var sT = { class: "panel" }, cT = { class: "field" }, lT = ["value"], uT = ["value"], dT = { class: "form-grid" }, fT = { class: "field" }, pT = ["value"], mT = ["value"], hT = { class: "field" }, gT = ["value"], _T = ["value"], vT = { class: "field" }, yT = ["value"], bT = ["value"], xT = { class: "field" }, ST = ["value"], CT = ["value"], wT = { class: "field" }, TT = { for: "b-tempo" }, ET = {
	id: "tempo-num",
	style: { color: "#ffa8d5" }
}, DT = { class: "range" }, OT = ["value"], kT = { id: "bpm-output" }, AT = {
	class: "muted",
	style: { "font-size": "11px" }
}, jT = { class: "field" }, MT = ["value"], NT = { class: "field" }, PT = ["value"], FT = { class: "checkrow" }, IT = ["checked", "onChange"], LT = {
	class: "panel",
	style: {
		position: "sticky",
		top: "20px"
	}
}, RT = {
	class: "output",
	id: "prompt-output"
}, zT = { class: "counter" }, BT = { id: "prompt-count" }, VT = { class: "two-col" }, HT = {
	class: "btn primary",
	type: "button",
	"data-action": "copy-prompt"
}, UT = ["innerHTML"], WT = {
	class: "btn ghost",
	type: "button",
	"data-action": "save-prompt"
}, GT = ["innerHTML"], KT = {
	key: 0,
	class: "notice",
	"data-sb-vue-mixer-recap": ""
}, qT = {
	key: 1,
	class: "notice",
	"data-sb-vue-arranger-recap": ""
}, JT = { class: "list-pills" }, YT = {
	__name: "StudioBuilder",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ F(t.api.snapshot()), r = Q();
		R(n, (e) => r.publishStudioSummary(e), { immediate: !0 });
		let i = q(() => n.value?.settings || {}), a = q(() => n.value?.genre || {
			name: "",
			family: "",
			bpm: [0, 0]
		}), o = q(() => String(n.value?.prompt || "")), s = [
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
		return z(() => window.addEventListener("sunoboom:studio-updated", f)), xr(() => window.removeEventListener("sunoboom:studio-updated", f)), (e, t) => (H(), U(V, null, [W("div", sT, [
			t[17] ||= W("h3", null, "Параметры трека", -1),
			W("div", cT, [t[8] ||= W("label", { for: "b-genre" }, "Жанр", -1), W("select", {
				id: "b-genre",
				value: i.value.genre,
				onChange: t[0] ||= (e) => p("genre", e.target.value)
			}, [(H(!0), U(V, null, B(n.value.genres, (e) => (H(), U("option", {
				key: e.id,
				value: e.id
			}, k(e.name), 9, uT))), 128))], 40, lT)]),
			W("div", dT, [
				W("div", fT, [t[9] ||= W("label", { for: "b-mood" }, "Настроение", -1), W("select", {
					id: "b-mood",
					value: i.value.mood,
					onChange: t[1] ||= (e) => p("mood", e.target.value)
				}, [(H(), U(V, null, B(s, ([e, t]) => W("option", {
					key: e,
					value: e
				}, k(t), 9, mT)), 64))], 40, pT)]),
				W("div", hT, [t[10] ||= W("label", { for: "b-vocal" }, "Вокал", -1), W("select", {
					id: "b-vocal",
					value: i.value.vocal,
					onChange: t[2] ||= (e) => p("vocal", e.target.value)
				}, [(H(), U(V, null, B(c, ([e, t]) => W("option", {
					key: e,
					value: e
				}, k(t), 9, _T)), 64))], 40, gT)]),
				W("div", vT, [t[11] ||= W("label", { for: "b-lang" }, "Язык текста", -1), W("select", {
					id: "b-lang",
					value: i.value.language,
					onChange: t[3] ||= (e) => p("language", e.target.value)
				}, [(H(), U(V, null, B(l, ([e, t]) => W("option", {
					key: e,
					value: e
				}, k(t), 9, bT)), 64))], 40, yT)]),
				W("div", xT, [t[12] ||= W("label", { for: "b-energy" }, "Энергия", -1), W("select", {
					id: "b-energy",
					value: i.value.energy,
					onChange: t[4] ||= (e) => p("energy", e.target.value)
				}, [(H(), U(V, null, B(u, ([e, t]) => W("option", {
					key: e,
					value: e
				}, k(t), 9, CT)), 64))], 40, ST)])
			]),
			W("div", wT, [
				W("label", TT, [
					t[13] ||= G("Темп · ", -1),
					W("span", ET, k(i.value.tempo), 1),
					t[14] ||= G(" BPM", -1)
				]),
				W("div", DT, [W("input", {
					type: "range",
					id: "b-tempo",
					min: "65",
					max: "200",
					step: "1",
					value: i.value.tempo,
					onInput: t[5] ||= (e) => p("tempo", Number(e.target.value))
				}, null, 40, OT), W("output", kT, k(i.value.tempo) + " BPM", 1)]),
				W("span", AT, " Обычно для «" + k(a.value.name) + "»: " + k(a.value.bpm[0]) + "–" + k(a.value.bpm[1]) + " BPM ", 1)
			]),
			W("div", jT, [t[15] ||= W("label", { for: "b-theme" }, "Тема / история трека", -1), W("textarea", {
				id: "b-theme",
				rows: "2",
				value: i.value.theme,
				onInput: t[6] ||= (e) => p("theme", e.target.value),
				placeholder: "О чём будет песня?"
			}, null, 40, MT)]),
			W("div", NT, [t[16] ||= W("label", { for: "b-extra" }, "Дополнительные инструкции (необязательно)", -1), W("textarea", {
				id: "b-extra",
				rows: "2",
				value: i.value.extra,
				onInput: t[7] ||= (e) => p("extra", e.target.value),
				placeholder: "Например: memorable chorus, short guitar solo"
			}, null, 40, PT)]),
			W("div", FT, [(H(), U(V, null, B(d, ([e, t]) => W("label", { key: e }, [W("input", {
				type: "checkbox",
				checked: i.value[e],
				onChange: (t) => p(e, t.target.checked)
			}, null, 40, IT), G(k(t), 1)])), 64))])
		]), W("div", LT, [
			t[22] ||= W("div", { class: "eyebrow" }, "Готово к Suno", -1),
			t[23] ||= W("h3", null, "Твой промпт", -1),
			W("div", RT, k(o.value), 1),
			W("div", zT, [t[18] ||= W("span", null, "Максимум 1000 символов", -1), W("b", BT, k(o.value.length) + " / 1000", 1)]),
			W("div", VT, [W("button", HT, [W("span", {
				"aria-hidden": "true",
				innerHTML: n.value.icons.copy
			}, null, 8, UT), t[19] ||= G(" Копировать ", -1)]), W("button", WT, [W("span", {
				"aria-hidden": "true",
				innerHTML: n.value.icons.save
			}, null, 8, GT), t[20] ||= G(" Сохранить ", -1)])]),
			t[24] ||= W("div", { class: "spacer" }, null, -1),
			I(r).mixerSummary.ready ? (H(), U("div", KT, [G(" Последний микс: " + k(I(r).mixerSummary.genreCount) + " жанра · " + k(I(r).mixerSummary.tempo) + " BPM · " + k(I(r).mixerSummary.promptLength) + " / 1000 символов. ", 1), t[21] ||= W("button", {
				type: "button",
				class: "link-action",
				"data-action": "nav",
				"data-nav": "mixer"
			}, "Перейти в Миксер →", -1)])) : K("", !0),
			I(r).arrangerSummary.ready ? (H(), U("div", qT, " Аранжировка: " + k(I(r).arrangerSummary.blockCount) + " блоков · " + k(I(r).arrangerSummary.barCount) + " тактов · средняя энергия " + k(I(r).arrangerSummary.averageEnergy) + "/5 · " + k(I(r).arrangerSummary.transitionCount) + " переходов. ", 1)) : K("", !0),
			t[25] ||= W("div", { class: "notice" }, [W("strong", null, "Подсказка:"), G(" промпт задаёт стиль, а текст песни можно вводить отдельно в Suno. Результат генерации может отличаться от запроса.")], -1),
			t[26] ||= W("div", { class: "spacer" }, null, -1),
			t[27] ||= W("div", { class: "info-label" }, "Музыкальный профиль", -1),
			W("div", JT, [
				W("span", null, k(a.value.name), 1),
				W("span", null, k(a.value.family), 1),
				W("span", null, k(a.value.bpm[0]) + "–" + k(a.value.bpm[1]) + " BPM", 1)
			])
		])], 64));
	}
};
// src/vue/studio/legacyStudioBridge.js
function XT({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_STUDIO, n = document.getElementById("app");
	if (!n || !t || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector(".studio-grid");
		if (r?.target === a || (r &&= (r.unmount(), null), !a || !t.snapshot())) return;
		let o = e(a, YT, { api: t });
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
var ZT = { class: "heading" }, QT = {
	key: 0,
	class: "gm-muted",
	"data-sb-vue-studio-recap": ""
}, $T = { class: "gm-layout" }, eE = { class: "gm-panel" }, tE = { class: "gm-stack" }, nE = { class: "gm-row-top" }, rE = { class: "gm-rank" }, iE = { class: "gm-field gm-genre-select" }, aE = ["for"], oE = [
	"id",
	"value",
	"data-gm-genre"
], sE = ["label"], cE = ["value"], lE = ["data-gm-value"], uE = [
	"data-slot",
	"aria-label",
	"disabled"
], dE = { class: "gm-slider-line" }, fE = [
	"max",
	"value",
	"data-gm-weight",
	"aria-label"
], pE = { class: "gm-meter" }, mE = ["data-gm-meter"], hE = { class: "gm-sub" }, gE = { class: "gm-actions" }, _E = ["disabled"], vE = {
	class: "gm-mixture",
	"aria-label": "Доли музыкальных жанров"
}, yE = ["data-gm-mixbar", "title"], bE = { class: "gm-form-grid" }, xE = ["for"], SE = [
	"id",
	"value",
	"data-gm-setting"
], CE = ["value"], wE = { class: "gm-tempo" }, TE = ["checked"], EE = { class: "gm-tempo-row" }, DE = ["value", "disabled"], OE = { id: "gm-bpm" }, kE = { class: "gm-field" }, AE = ["value"], jE = { class: "gm-checks" }, ME = ["data-gm-setting", "checked"], NE = { class: "gm-panel gm-output-panel" }, PE = {
	class: "gm-output",
	id: "gm-prompt",
	"aria-live": "polite"
}, FE = { class: "gm-prompt-meta" }, IE = { id: "gm-count" }, LE = { class: "gm-field" }, RE = ["value"], zE = { class: "gm-saved-list" }, BE = {
	key: 0,
	class: "gm-muted"
}, VE = { class: "gm-saved-actions" }, HE = ["data-id"], UE = ["data-id", "aria-label"], WE = {
	__name: "GenreMixer",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ F(t.api.snapshot()), r = Q();
		R(n, (e) => r.publishMixerSummary(e), { immediate: !0 });
		let i = q(() => n.value?.rows || []), a = q(() => n.value?.genres || []), o = q(() => n.value?.settings || {}), s = q(() => n.value?.options || {}), c = q(() => n.value?.saved || []), l = q(() => n.value?.prompt || ""), u = q(() => n.value?.tempo || 115), d = q(() => n.value?.title || "");
		function f() {
			let e = t.api.snapshot();
			e && (n.value = e);
		}
		z(() => window.addEventListener("sunoboom:mixer-updated", f)), xr(() => window.removeEventListener("sunoboom:mixer-updated", f));
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
		let m = q(() => [
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
		return (e, t) => (H(), U(V, null, [W("header", ZT, [
			t[1] ||= W("div", { class: "eyebrow" }, "Suno Studio · новый инструмент", -1),
			t[2] ||= W("h1", null, [G("Жанровый "), W("span", { class: "gm-highlight" }, "миксер")], -1),
			t[3] ||= W("p", null, "Соединяй от 2 до 4 жанров из Академии SUNOBOOM, задавай пропорции и создавай готовый Style-промпт для Suno.", -1),
			I(r).studioSummary.ready ? (H(), U("p", QT, [G(" Текущая Студия: " + k(I(r).studioSummary.tempo) + " BPM · " + k(I(r).studioSummary.promptLength) + " / 1000 символов. ", 1), t[0] ||= W("button", {
				type: "button",
				class: "link-action",
				"data-action": "nav",
				"data-nav": "studio"
			}, "Вернуться в Студию →", -1)])) : K("", !0)
		]), W("div", $T, [W("section", eE, [
			t[7] ||= W("div", { class: "gm-section-head" }, [W("div", null, [W("h2", null, "Формула звучания"), W("p", null, "Меняй жанры и двигай ползунки — сумма всегда равна 100%.")]), W("span", { class: "gm-total" }, "Σ 100%")], -1),
			W("div", tE, [(H(!0), U(V, null, B(i.value, (e, t) => (H(), U("article", {
				key: e.id,
				class: "gm-row",
				style: D({ "--gm-color": e.color })
			}, [
				W("div", nE, [
					W("span", rE, k(String(t + 1).padStart(2, "0")), 1),
					W("div", iE, [W("label", { for: "gm-genre-" + t }, "Музыкальное направление", 8, aE), W("select", {
						id: "gm-genre-" + t,
						value: e.id,
						"data-gm-genre": t
					}, [(H(!0), U(V, null, B(p(t), (e) => (H(), U("optgroup", {
						key: e.family,
						label: e.family
					}, [(H(!0), U(V, null, B(e.items, (e) => (H(), U("option", {
						key: e.id,
						value: e.id
					}, k(e.name), 9, cE))), 128))], 8, sE))), 128))], 8, oE)]),
					W("span", {
						class: "gm-percent",
						"data-gm-value": t
					}, k(e.weight) + "%", 9, lE),
					W("button", {
						type: "button",
						class: "gm-remove",
						"data-action": "gm-remove",
						"data-slot": t,
						"aria-label": "Убрать жанр " + e.name,
						title: "Убрать жанр",
						disabled: i.value.length <= 2
					}, "×", 8, uE)
				]),
				W("div", dE, [W("input", {
					type: "range",
					min: "5",
					max: 100 - 5 * (i.value.length - 1),
					step: "1",
					value: e.weight,
					"data-gm-weight": t,
					"aria-label": "Доля жанра " + e.name
				}, null, 8, fE), W("div", pE, [W("span", {
					"data-gm-meter": t,
					style: D({ width: e.weight + "%" })
				}, null, 12, mE)])]),
				W("p", hE, k(e.family) + " · " + k(e.tagline) + " · " + k(e.instruments), 1)
			], 4))), 128))]),
			W("div", gE, [W("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "gm-add",
				disabled: i.value.length >= 4
			}, "＋ Добавить жанр", 8, _E), t[4] ||= W("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "gm-equal"
			}, "Поровну", -1)]),
			W("div", vE, [(H(!0), U(V, null, B(i.value, (e) => (H(), U("span", {
				key: e.id,
				"data-gm-mixbar": e.id,
				style: D({
					width: e.weight + "%",
					background: e.color
				}),
				title: e.name + ": " + e.weight + "%"
			}, null, 12, yE))), 128))]),
			t[8] ||= W("p", { class: "gm-muted" }, "Проценты — творческий ориентир для генерации, а не гарантия точного соотношения в готовой музыке.", -1),
			t[9] ||= W("div", { class: "gm-divider" }, null, -1),
			t[10] ||= W("h2", null, "Характер композиции", -1),
			W("div", bE, [(H(!0), U(V, null, B(m.value, (e) => (H(), U("div", {
				key: e.key,
				class: "gm-field"
			}, [W("label", { for: "gm-" + e.key }, k(e.label), 9, xE), W("select", {
				id: "gm-" + e.key,
				value: o.value[e.key],
				"data-gm-setting": e.key
			}, [(H(!0), U(V, null, B(e.choices, ([e, t]) => (H(), U("option", {
				key: e,
				value: e
			}, k(t), 9, CE))), 128))], 8, SE)]))), 128))]),
			W("div", wE, [W("label", null, [W("input", {
				type: "checkbox",
				"data-gm-setting": "autoTempo",
				checked: o.value.autoTempo
			}, null, 8, TE), t[5] ||= G(" Определять темп по жанрам", -1)]), W("div", EE, [W("input", {
				id: "gm-tempo",
				type: "range",
				min: "65",
				max: "200",
				value: u.value,
				"data-gm-setting": "tempo",
				disabled: o.value.autoTempo
			}, null, 8, DE), W("b", OE, k(u.value) + " BPM", 1)])]),
			W("div", kE, [t[6] ||= W("label", { for: "gm-theme" }, "Тема песни (необязательно)", -1), W("textarea", {
				id: "gm-theme",
				rows: "2",
				maxlength: "170",
				"data-gm-setting": "theme",
				value: o.value.theme,
				placeholder: "Например: ночной город, встреча после долгой разлуки"
			}, null, 8, AE)]),
			W("div", jE, [(H(), U(V, null, B(h, ([e, t]) => W("label", { key: e }, [W("input", {
				type: "checkbox",
				"data-gm-setting": e,
				checked: o.value[e]
			}, null, 8, ME), G(" " + k(t), 1)])), 64))])
		]), W("aside", NE, [
			t[13] ||= W("div", { class: "eyebrow" }, "Результат микширования", -1),
			t[14] ||= W("h2", null, "Гибридный Style-промпт", -1),
			W("div", PE, k(l.value), 1),
			W("div", FE, [t[11] ||= W("span", null, "На английском · готово для Suno", -1), W("b", IE, k(l.value.length) + " / 1000", 1)]),
			t[15] ||= ua("<div class=\"gm-output-actions\"><button type=\"button\" class=\"btn primary\" data-action=\"gm-copy\">Копировать</button><button type=\"button\" class=\"btn ghost\" data-action=\"gm-to-studio\">В Suno Studio</button></div><button type=\"button\" class=\"btn ghost gm-full\" data-action=\"gm-save-prompt\">Сохранить в «Мои промпты»</button><div class=\"gm-divider\"></div><h3>Мои сочетания</h3>", 4),
			W("div", LE, [t[12] ||= W("label", { for: "gm-title" }, "Название сочетания", -1), W("input", {
				id: "gm-title",
				type: "text",
				maxlength: "90",
				"data-gm-title": "",
				value: d.value,
				placeholder: "Например: Северный электро-фолк"
			}, null, 8, RE)]),
			t[16] ||= W("button", {
				type: "button",
				class: "btn ghost gm-full",
				"data-action": "gm-save-mix"
			}, "Сохранить формулу", -1),
			W("div", zE, [c.value.length ? K("", !0) : (H(), U("p", BE, "Сохранённых сочетаний пока нет. Придумай свой микс и сохрани его.")), (H(!0), U(V, null, B(c.value, (e) => (H(), U("article", {
				key: e.id,
				class: "gm-saved"
			}, [W("div", null, [W("strong", null, k(e.title), 1), W("small", null, k(e.summary), 1)]), W("div", VE, [W("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "gm-load",
				"data-id": e.id
			}, "Открыть", 8, HE), W("button", {
				type: "button",
				class: "btn danger small",
				"data-action": "gm-delete",
				"data-id": e.id,
				"aria-label": "Удалить " + e.title
			}, "×", 8, UE)])]))), 128))]),
			t[17] ||= W("p", { class: "gm-muted" }, "Сохраняется в этом браузере и входит в общую JSON-копию данных SUNOBOOM. Подключение к ИИ для смешивания не требуется.", -1)
		])])], 64));
	}
};
// src/vue/studio/legacyMixerBridge.js
function GE({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_MIXER, n = document.getElementById("app");
	if (!t || !n || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-mixer-root");
		if (r?.target === a || (r &&= (r.unmount(), null), !a || !t.snapshot())) return;
		let o = e(a, WE, { api: t });
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
var KE = {
	class: "sbpa-tabs",
	role: "group",
	"aria-label": "Источник промпта"
}, qE = ["aria-pressed"], JE = ["aria-pressed"], YE = {
	key: 0,
	class: "sbpa-manual"
}, XE = ["value"], ZE = ["value"], QE = ["value"], $E = {
	key: 1,
	class: "sbpa-context"
}, eD = {
	id: "sbpa-results",
	"aria-live": "polite"
}, tD = { class: "sbpa-scoreline" }, nD = {
	class: "sbpa-score",
	"aria-label": "Эвристическая оценка промпта"
}, rD = { class: "sbpa-score-info" }, iD = ["aria-valuenow"], aD = {
	key: 0,
	class: "sbpa-issues"
}, oD = {
	key: 1,
	class: "sbpa-clear"
}, sD = { class: "sbpa-actions" }, cD = {
	key: 0,
	type: "button",
	"data-sbpa-action": "load-studio"
}, lD = { id: "sbpa-proposal-slot" }, uD = {
	key: 0,
	class: "sbpa-proposal"
}, dD = { key: 0 }, fD = { key: 1 }, pD = { key: 2 }, mD = {
	key: 3,
	class: "sbpa-alert"
}, hD = ["value"], gD = {
	__name: "PromptAuditor",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ F(t.api.snapshot()), r = Q();
		R(n, (e) => r.publishAuditorSummary(e), { immediate: !0 });
		let i = q(() => n.value?.mode === "manual"), a = q(() => n.value?.report || {
			score: 0,
			length: 0,
			issues: [],
			status: ""
		}), o = q(() => n.value?.genreId || ""), s = q(() => n.value?.genres || []), c = q(() => !!n.value?.proposalOpen), l = q(() => n.value?.proposal || {
			text: "",
			removed: [],
			complete: !0
		});
		function u() {
			let e = t.api.snapshot();
			e && (n.value = e);
		}
		return z(() => window.addEventListener("sunoboom:auditor-updated", u)), xr(() => window.removeEventListener("sunoboom:auditor-updated", u)), (e, t) => (H(), U(V, null, [
			t[10] ||= W("header", { class: "sbpa-head" }, [W("div", null, [
				W("span", { class: "sbpa-eyebrow" }, "SUNOBOOM · ПРОВЕРКА"),
				W("h2", null, "Интеллектуальный аудитор промптов"),
				W("p", null, "Ищет повторы, противоречия, перегрузку и особенности жанра до отправки в Suno.")
			]), W("span", { class: "sbpa-local" }, "Проверка по правилам · без API")], -1),
			W("div", KE, [W("button", {
				type: "button",
				"data-sbpa-action": "studio",
				class: O({ active: !i.value }),
				"aria-pressed": !i.value
			}, "Текущий промпт Studio", 10, qE), W("button", {
				type: "button",
				"data-sbpa-action": "manual",
				class: O({ active: i.value }),
				"aria-pressed": i.value
			}, "Свой текст / вставка", 10, JE)]),
			i.value ? (H(), U("div", YE, [
				t[0] ||= W("label", { for: "sbpa-text" }, "Текст промпта", -1),
				W("textarea", {
					id: "sbpa-text",
					rows: "5",
					spellcheck: "false",
					placeholder: "Вставь текст на русском или английском…",
					value: n.value.manual
				}, null, 8, XE),
				t[1] ||= W("label", { for: "sbpa-genre" }, "Жанр для сопоставления с Академией", -1),
				W("select", {
					id: "sbpa-genre",
					value: o.value
				}, [(H(!0), U(V, null, B(s.value, (e) => (H(), U("option", {
					key: e.id,
					value: e.id
				}, k(e.name), 9, QE))), 128))], 8, ZE)
			])) : (H(), U("p", $E, " Проверяется актуальный промпт конструктора. Изменения настроек Studio отражаются здесь автоматически. ")),
			W("div", eD, [W("div", tD, [
				W("div", nD, [G(k(a.value.score), 1), t[2] ||= W("small", null, "/ 100", -1)]),
				W("div", rD, [
					W("strong", null, k(a.value.status), 1),
					t[3] ||= W("span", null, "Оценка ориентировочная: проверяется структура текста, а не качество будущей музыки.", -1),
					W("div", {
						class: "sbpa-meter",
						role: "progressbar",
						"aria-label": "Оценка промпта",
						"aria-valuenow": a.value.score,
						"aria-valuemin": "0",
						"aria-valuemax": "100"
					}, [W("span", { style: D({ width: a.value.score + "%" }) }, null, 4)], 8, iD)
				]),
				W("div", { class: O(["sbpa-limit", { over: a.value.length > 1e3 }]) }, k(a.value.length) + " / 1000 символов ", 3)
			]), a.value.issues?.length ? (H(), U("ul", aD, [(H(!0), U(V, null, B(a.value.issues, (e, t) => (H(), U("li", {
				key: t,
				class: O(["sbpa-item", "sbpa-" + e.kind])
			}, [W("div", null, [
				W("strong", null, k(e.title), 1),
				W("p", null, k(e.detail), 1),
				W("small", null, k(e.fix), 1)
			])], 2))), 128))])) : (H(), U("p", oD, " Явных противоречий и повторов по проверяемым правилам не найдено. "))]),
			W("div", sD, [t[4] ||= W("button", {
				type: "button",
				"data-sbpa-action": "preview",
				class: "sbpa-primary"
			}, " Показать улучшенный вариант ", -1), i.value ? (H(), U("button", cD, " Вставить текущий промпт Studio ")) : K("", !0)]),
			W("div", lD, [c.value ? (H(), U("div", uD, [
				W("h4", null, [t[5] ||= G("Предлагаемый вариант ", -1), W("small", null, k(l.value.text.length) + " / 1000", 1)]),
				l.value.removed.length ? (H(), U("p", fD, "Удалено фрагментов: " + k(l.value.removed.length) + ". Проверь смысл до копирования.", 1)) : (H(), U("p", dD, "Удалять нечего: текст уже без точных повторов.")),
				l.value.removed.length ? (H(), U("details", pD, [t[6] ||= W("summary", null, "Что изменилось", -1), W("ul", null, [(H(!0), U(V, null, B(l.value.removed, (e, t) => (H(), U("li", { key: t }, [W("b", null, k(e.reason) + ":", 1), G(" " + k(e.part), 1)]))), 128))])])) : K("", !0),
				l.value.complete ? K("", !0) : (H(), U("p", mD, " Автоматического сокращения недостаточно. Уменьши текст вручную минимум на " + k(l.value.text.length - 1e3) + " символов. ", 1)),
				t[7] ||= W("label", { for: "sbpa-preview-text" }, "Редактируемый предпросмотр", -1),
				W("textarea", {
					id: "sbpa-preview-text",
					rows: "5",
					spellcheck: "false",
					value: l.value.text
				}, null, 8, hD),
				t[8] ||= W("div", { class: "sbpa-actions" }, [W("button", {
					type: "button",
					"data-sbpa-action": "copy-preview",
					class: "sbpa-primary"
				}, " Подтвердить и скопировать "), W("button", {
					type: "button",
					"data-sbpa-action": "close-preview"
				}, "Закрыть")], -1),
				t[9] ||= W("small", null, "Исходный промпт и параметры Studio не меняются. Копируется только текст предпросмотра после нажатия.", -1)
			])) : K("", !0)]),
			t[11] ||= W("p", { class: "sbpa-foot" }, " Аудитор не вызывает Gemini и не оценивает реальный звук. Жанровые отклонения могут быть творческим решением, а рекомендации не изменяют исходник без твоего действия. ", -1)
		], 64));
	}
};
// src/vue/studio/legacyAuditorBridge.js
function _D({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_AUDITOR, n = document.getElementById("app");
	if (!t || !n || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sbpa-auditor");
		if (r?.target === a || (r &&= (r.unmount(), null), !a || !t.snapshot())) return;
		let o = e(a, gD, { api: t });
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
var vD = ["data-sba-id", "data-sba-energy"], yD = { class: "sba-block-head" }, bD = ["data-sba-drag", "aria-label"], xD = { class: "sba-index" }, SD = {
	class: "sba-emoji",
	"aria-hidden": "true"
}, CD = { class: "sba-head-energy" }, wD = { class: "sba-block-actions" }, TD = ["data-id", "disabled"], ED = ["data-id", "disabled"], DD = ["data-id"], OD = ["data-id"], kD = { class: "sba-block-fields" }, AD = ["data-id", "value"], jD = ["value"], MD = ["data-id", "value"], ND = ["value"], PD = ["data-id", "value"], FD = ["value"], ID = { class: "sba-energy-field" }, LD = ["data-sba-output"], RD = ["value", "data-id"], zD = { class: "sba-instrument-field" }, BD = ["for"], VD = { class: "sba-instrument-row" }, HD = [
	"id",
	"data-id",
	"value"
], UD = ["id", "innerHTML"], WD = ["id"], GD = { class: "sba-sound-head" }, KD = ["data-id"], qD = ["data-id"], JD = ["id"], YD = {
	key: 0,
	class: "sba-sound-back"
}, XD = ["data-id"], ZD = [
	"data-sba-sound-search",
	"data-id",
	"value",
	"placeholder"
], QD = ["id"], $D = { class: "sba-sound-info" }, eO = { key: 0 }, tO = ["data-id", "data-genre-id"], nO = {
	key: 0,
	class: "sba-sound-none"
}, rO = { class: "sba-sound-group" }, iO = [
	"disabled",
	"aria-disabled",
	"data-id",
	"data-sound-value"
], aO = {
	key: 0,
	class: "sba-sound-none"
}, oO = {
	key: 1,
	class: "sba-sound-foot"
}, sO = ["data-id"], cO = {
	key: 0,
	class: "sba-custom-label"
}, lO = ["data-id", "value"], uO = ["innerHTML"], dO = ["data-id", "aria-label"], fO = {
	key: 0,
	class: "sba-empty"
}, pO = ["aria-label"], mO = [
	"data-sba-snake-id",
	"data-sba-energy",
	"aria-label",
	"title"
], hO = { class: "sba-snake-num" }, gO = {
	class: "sba-snake-icon",
	"aria-hidden": "true"
}, _O = { class: "sba-snake-title" }, vO = { class: "sba-snake-level" }, yO = ["title"], bO = {
	key: 0,
	class: "sba-snake-more"
}, xO = {
	key: 1,
	class: "sba-snake-empty"
}, SO = ["data-sba-hub-from"], CO = { class: "sba-transition-hub-route" }, wO = { class: "sba-transition-hub-number" }, TO = { class: "sba-transition-hub-names" }, EO = { class: "sba-transition-hub-controls" }, DO = [
	"data-id",
	"value",
	"aria-label"
], OO = ["value"], kO = [
	"data-id",
	"value",
	"aria-label"
], AO = ["value"], jO = [
	"data-id",
	"value",
	"aria-label"
], MO = ["value"], NO = { class: "sba-transition-hub-actions" }, PO = ["data-id", "title"], FO = ["data-id"], IO = {
	key: 1,
	class: "sba-transition-hub-empty"
}, LO = ["title"], RO = { class: "sba-chart-column" }, zO = {
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
		let t = e, n = /* @__PURE__ */ F(t.api.snapshot()), r = Q();
		t.kind === "cards" && R(n, (e) => r.publishArrangerSummary(e), { immediate: !0 });
		let i = q(() => n.value?.blocks || []), a = q(() => n.value?.sections || []), o = q(() => n.value?.voices || []), s = q(() => n.value?.energies || {}), c = q(() => n.value?.transitions || []), l = q(() => n.value?.transitionTypes || []), u = q(() => n.value?.transitionLengths || []), d = q(() => n.value?.transitionStrengths || []), f = q(() => n.value?.snakeExpanded ? i.value : i.value.slice(0, 12)), p = q(() => n.value?.transitionHubExpanded ? c.value : c.value.slice(0, 3)), m = [
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
		z(() => window.addEventListener("sunoboom:arranger-updated", h)), xr(() => window.removeEventListener("sunoboom:arranger-updated", h));
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
		let _ = q(() => f.value.map((e, t) => t + 1 + ". " + e.snakeLabel).join(" → "));
		return (t, n) => e.kind === "cards" ? (H(), U(V, { key: 0 }, [(H(!0), U(V, null, B(i.value, (e, t) => (H(), U(V, { key: e.id }, [
			W("article", {
				class: "sba-block",
				"data-sba-id": e.id,
				"data-sba-energy": e.energy
			}, [W("div", yD, [
				W("span", {
					class: "sba-drag",
					draggable: "true",
					"data-sba-drag": e.id,
					title: "Перетащить блок",
					"aria-label": "Перетащить " + e.sectionName
				}, "⠿", 8, bD),
				W("span", xD, k(String(t + 1).padStart(2, "0")), 1),
				W("span", SD, k(e.icon), 1),
				W("strong", null, k(e.label), 1),
				W("span", CD, "Энергия " + k(e.energy) + "/5", 1),
				W("div", wD, [
					W("button", {
						type: "button",
						"data-sba-action": "up",
						"data-id": e.id,
						"aria-label": "Переместить вверх",
						disabled: t === 0
					}, "↑", 8, TD),
					W("button", {
						type: "button",
						"data-sba-action": "down",
						"data-id": e.id,
						"aria-label": "Переместить вниз",
						disabled: t === i.value.length - 1
					}, "↓", 8, ED),
					W("button", {
						type: "button",
						"data-sba-action": "duplicate",
						"data-id": e.id,
						"aria-label": "Дублировать блок"
					}, "⧉", 8, DD),
					W("button", {
						type: "button",
						"data-sba-action": "remove",
						"data-id": e.id,
						"aria-label": "Удалить блок"
					}, "×", 8, OD)
				])
			]), W("div", kD, [
				W("label", null, [n[0] ||= G("Раздел ", -1), W("select", {
					"data-sba-field": "type",
					"data-id": e.id,
					value: e.type
				}, [(H(!0), U(V, null, B(a.value, (e) => (H(), U("option", {
					key: e.id,
					value: e.id
				}, k(e.name), 9, jD))), 128))], 8, AD)]),
				W("label", null, [n[1] ||= G("Тактов ", -1), W("select", {
					"data-sba-field": "bars",
					"data-id": e.id,
					value: e.bars
				}, [(H(), U(V, null, B(m, (e) => W("option", {
					key: e,
					value: e
				}, k(e), 9, ND)), 64))], 8, MD)]),
				W("label", null, [n[2] ||= G("Вокал ", -1), W("select", {
					"data-sba-field": "vocal",
					"data-id": e.id,
					value: e.vocal
				}, [(H(!0), U(V, null, B(o.value, (e) => (H(), U("option", {
					key: e.id,
					value: e.id
				}, k(e.name), 9, FD))), 128))], 8, PD)]),
				W("label", ID, [
					n[3] ||= G("Энергия ", -1),
					W("output", { "data-sba-output": e.id }, k(e.energy) + "/5 · " + k(s.value[e.energy]), 9, LD),
					W("input", {
						type: "range",
						min: "1",
						max: "5",
						step: "1",
						value: e.energy,
						"data-sba-field": "energy",
						"data-id": e.id
					}, null, 8, RD)
				]),
				W("div", zD, [
					W("label", { for: "sba-instruments-" + e.id }, "Инструменты / приём", 8, BD),
					W("div", VD, [W("input", {
						type: "text",
						id: "sba-instruments-" + e.id,
						maxlength: "300",
						"data-sba-field": "instruments",
						"data-id": e.id,
						value: e.instruments,
						placeholder: "Введи вручную или выбери рекомендацию",
						autocomplete: "off"
					}, null, 8, HD)]),
					W("div", {
						class: "sba-quick-sounds",
						id: "sba-quick-" + e.id,
						innerHTML: e.quickSounds
					}, null, 8, UD),
					e.soundPanel ? (H(), U("div", {
						key: 0,
						class: "sba-sound-panel",
						id: "sba-sound-panel-" + e.id,
						"aria-label": "Выбор инструментов и приёмов"
					}, [
						W("div", GD, [n[4] ||= W("strong", null, "Библиотека инструментов и приёмов", -1), W("button", {
							type: "button",
							"data-sba-action": "sound-close",
							"data-id": e.id,
							"aria-label": "Закрыть подбор"
						}, "×", 8, KD)]),
						W("button", {
							type: "button",
							class: "sba-sound-genre-trigger",
							"data-sba-action": "sound-switch-mode",
							"data-id": e.id
						}, [
							n[5] ||= G(" Жанр: ", -1),
							W("b", null, k(e.soundPanel.genreName), 1),
							n[6] ||= W("span", null, "⌄", -1)
						], 8, qD),
						W("div", { id: "sba-sound-body-" + e.id }, [
							e.soundPanel.mode === "genres" ? (H(), U("div", YD, [W("button", {
								type: "button",
								"data-sba-action": "sound-switch-mode",
								"data-id": e.id
							}, " ← К инструментам ", 8, XD)])) : K("", !0),
							W("input", {
								type: "search",
								class: "sba-sound-search",
								"data-sba-sound-search": e.soundPanel.mode,
								"data-id": e.id,
								value: e.soundPanel.query,
								placeholder: e.soundPanel.mode === "genres" ? "Поиск по всей Академии..." : "Поиск инструмента или приёма...",
								autocomplete: "off",
								"aria-label": "Поиск инструментов или жанров"
							}, null, 8, ZD),
							W("div", {
								class: "sba-sound-list",
								id: "sba-sound-results-" + e.id
							}, [e.soundPanel.mode === "genres" ? (H(), U(V, { key: 0 }, [
								W("div", $D, [G(" Найдено жанров: " + k(e.soundPanel.total) + " ", 1), e.soundPanel.total > e.soundPanel.matches.length ? (H(), U("span", eO, " · уточни запрос ")) : K("", !0)]),
								(H(!0), U(V, null, B(e.soundPanel.matches, (t) => (H(), U("button", {
									key: t.id,
									type: "button",
									class: "sba-sound-genre-row",
									"data-sba-action": "sound-set-genre",
									"data-id": e.id,
									"data-genre-id": t.id
								}, [W("span", null, k(t.name), 1), W("small", null, k(t.family), 1)], 8, tO))), 128)),
								e.soundPanel.matches.length ? K("", !0) : (H(), U("p", nO, " Жанр не найден "))
							], 64)) : (H(), U(V, { key: 1 }, [(H(!0), U(V, null, B(e.soundPanel.groups, (t) => (H(), U(V, { key: t.title }, [W("div", rO, k(t.title), 1), (H(!0), U(V, null, B(t.items, (t) => (H(), U("button", {
								key: t.name,
								type: "button",
								class: "sba-sound-option",
								disabled: t.added,
								"aria-disabled": t.added,
								"data-sba-action": "sound-add",
								"data-id": e.id,
								"data-sound-value": t.name
							}, [W("span", null, k(t.name), 1), W("small", null, k(t.added ? "✓ Добавлено" : "+ Добавить"), 1)], 8, iO))), 128))], 64))), 128)), e.soundPanel.groups.length ? K("", !0) : (H(), U("p", aO, " Совпадений нет. Можно ввести инструмент вручную. "))], 64))], 8, QD),
							e.soundPanel.mode === "genres" ? K("", !0) : (H(), U("div", oO, [n[7] ||= W("span", null, "Нажми «Добавить», чтобы дополнить поле. Свой текст сохраняется.", -1), W("button", {
								type: "button",
								"data-sba-action": "sound-clear",
								"data-id": e.id
							}, " Очистить поле ", 8, sO)]))
						], 8, JD)
					], 8, WD)) : K("", !0)
				]),
				e.type === "custom" ? (H(), U("label", cO, [n[8] ||= G("Своё название ", -1), W("input", {
					type: "text",
					maxlength: "48",
					"data-sba-field": "customName",
					"data-id": e.id,
					value: e.customName,
					placeholder: "Название для тега Suno"
				}, null, 8, lO)])) : K("", !0)
			])], 8, vD),
			e.transitionHTML ? (H(), U("div", {
				key: 0,
				style: { display: "contents" },
				innerHTML: e.transitionHTML
			}, null, 8, uO)) : K("", !0),
			W("button", {
				type: "button",
				class: "sba-between-add",
				"data-sba-action": "insert-after",
				"data-id": e.id,
				"aria-label": "Добавить блок после " + e.label
			}, [...n[9] ||= [W("span", { "aria-hidden": "true" }, "＋", -1), G(" Добавить после ", -1)]], 8, dO)
		], 64))), 128)), i.value.length ? K("", !0) : (H(), U("div", fO, "Пока нет блоков. Добавь первый фрагмент снизу."))], 64)) : e.kind === "snake" ? (H(), U(V, { key: 1 }, [i.value.length ? (H(), U(V, { key: 0 }, [(H(), U(V, null, B([6, 3], (e) => W("div", {
			key: e,
			class: O(e === 6 ? "sba-snake-desktop" : "sba-snake-mobile"),
			role: "group",
			"aria-label": "Схема блоков: " + _.value
		}, [(H(!0), U(V, null, B(g(e), (e) => (H(), U("div", {
			key: e.id,
			class: O(["sba-snake-row", {
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
			W("span", hO, k(e.index + 1), 1),
			W("span", gO, k(e.icon), 1),
			W("span", _O, k(e.snakeLabel), 1),
			W("span", vO, k(e.energy) + "/5", 1),
			e.hasTransition ? (H(), U("span", {
				key: 0,
				class: "sba-snake-transition",
				title: "Переход: " + e.transitionLabel,
				"aria-hidden": "true"
			}, "↝", 8, yO)) : K("", !0)
		], 8, mO))), 128))], 2))), 128))], 10, pO)), 64)), f.value.length < i.value.length ? (H(), U("p", bO, " … и ещё " + k(i.value.length - f.value.length) + " блоков ", 1)) : K("", !0)], 64)) : (H(), U("p", xO, "Добавь первый блок, и здесь появится схема композиции."))], 64)) : e.kind === "transitions" ? (H(), U(V, { key: 2 }, [c.value.length ? (H(!0), U(V, { key: 0 }, B(p.value, (e) => (H(), U("div", {
			key: e.id,
			class: O(["sba-transition-hub-row", { "sba-transition-hub-active": e.current.type !== "none" }]),
			"data-sba-hub-from": e.id
		}, [
			W("div", CO, [W("span", wO, k(e.index + 1) + " → " + k(e.index + 2), 1), W("span", TO, [
				G(k(e.from) + " ", 1),
				n[10] ||= W("b", null, "→", -1),
				G(" " + k(e.to), 1)
			])]),
			W("div", EO, [
				W("label", null, [n[11] ||= G("Эффект ", -1), W("select", {
					"data-sba-transition": "type",
					"data-id": e.id,
					value: e.current.type,
					"aria-label": "Переход " + (e.index + 1) + " к " + (e.index + 2)
				}, [(H(!0), U(V, null, B(l.value, (e) => (H(), U("option", {
					key: e.id,
					value: e.id
				}, k(e.name), 9, OO))), 128))], 8, DO)]),
				W("label", null, [n[12] ||= G("Длина ", -1), W("select", {
					"data-sba-transition": "length",
					"data-id": e.id,
					value: e.current.length,
					"aria-label": "Длительность перехода " + (e.index + 1)
				}, [(H(!0), U(V, null, B(u.value, (e) => (H(), U("option", {
					key: e.id,
					value: e.id
				}, k(e.name), 9, AO))), 128))], 8, kO)]),
				W("label", null, [n[13] ||= G("Сила ", -1), W("select", {
					"data-sba-transition": "strength",
					"data-id": e.id,
					value: e.current.strength,
					"aria-label": "Выраженность перехода " + (e.index + 1)
				}, [(H(!0), U(V, null, B(d.value, (e) => (H(), U("option", {
					key: e.id,
					value: e.id
				}, k(e.name), 9, MO))), 128))], 8, jO)])
			]),
			W("div", NO, [W("button", {
				type: "button",
				"data-sba-action": "transition-suggest",
				"data-id": e.id,
				title: "Совет: " + e.advice
			}, "✧ Совет", 8, PO), W("button", {
				type: "button",
				"data-sba-action": "transition-hub-jump",
				"data-id": e.id
			}, "Подробнее ↓", 8, FO)])
		], 10, SO))), 128)) : (H(), U("p", IO, "Добавь второй блок, и здесь можно будет настроить переходы."))], 64)) : e.kind === "energy" ? (H(!0), U(V, { key: 3 }, B(i.value, (e) => (H(), U("div", {
			key: e.id,
			class: "sba-chart-step",
			title: e.label + " · " + e.energy + "/5",
			style: D({
				"--energy": e.energy,
				"--bar-width": 100 / i.value.length + "%"
			})
		}, [W("div", RO, [W("i", { style: D({ "--level": e.energy }) }, null, 4)]), W("small", null, k(e.icon), 1)], 12, LO))), 128)) : K("", !0);
	}
}, BO = ["aria-expanded"], VO = { id: "sba-picked-label" }, HO = ["hidden"], UO = { class: "sba-preset-search-row" }, WO = ["value"], GO = {
	class: "sba-preset-filters",
	role: "group",
	"aria-label": "Тип вариантов"
}, KO = ["data-filter", "aria-pressed"], qO = {
	id: "sba-preset-results",
	class: "sba-preset-results",
	role: "listbox",
	"aria-label": "Доступные шаблоны и жанры"
}, JO = { class: "sba-preset-group-title" }, YO = { key: 0 }, XO = ["aria-selected", "data-choice"], ZO = {
	key: 0,
	class: "sba-preset-no-results"
}, QO = {
	__name: "ArrangementPicker",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ F(t.api.snapshot()), r = q(() => n.value?.picker || {
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
		return z(() => window.addEventListener("sunoboom:arranger-updated", i)), xr(() => window.removeEventListener("sunoboom:arranger-updated", i)), (e, t) => (H(), U(V, null, [
			t[2] ||= W("span", { class: "sba-preset-caption" }, "Шаблон композиции / жанр", -1),
			W("button", {
				type: "button",
				id: "sba-presets",
				class: "sba-preset-trigger",
				"data-sba-action": "menu-toggle",
				"aria-haspopup": "dialog",
				"aria-expanded": r.value.open,
				"aria-controls": "sba-preset-menu"
			}, [W("span", VO, k(r.value.selected), 1), t[0] ||= W("span", {
				class: "sba-preset-chevron",
				"aria-hidden": "true"
			}, "⌄", -1)], 8, BO),
			W("div", {
				id: "sba-preset-menu",
				class: "sba-preset-menu",
				role: "dialog",
				"aria-label": "Поиск шаблона или жанра",
				hidden: !r.value.open
			}, [
				W("div", UO, [W("input", {
					type: "search",
					id: "sba-preset-search",
					autocomplete: "off",
					value: r.value.query,
					placeholder: "Найти жанр или шаблон...",
					"aria-label": "Поиск жанра"
				}, null, 8, WO), t[1] ||= W("button", {
					type: "button",
					"data-sba-action": "menu-close",
					"aria-label": "Закрыть меню"
				}, "×", -1)]),
				W("div", GO, [(H(!0), U(V, null, B([
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
				}, k(e.title), 9, KO))), 128))]),
				W("div", qO, [(H(!0), U(V, null, B(r.value.groups, (e) => (H(), U(V, { key: e.title }, [W("div", JO, [G(k(e.title) + " ", 1), e.count === null ? K("", !0) : (H(), U("small", YO, k(e.count), 1))]), (H(!0), U(V, null, B(e.items, (e) => (H(), U("button", {
					key: e.key,
					type: "button",
					role: "option",
					"aria-selected": e.key === r.value.selectedKey,
					"data-sba-action": "menu-choose",
					"data-choice": e.key
				}, [W("span", null, k(e.title), 1), W("small", null, k(e.subtitle), 1)], 8, XO))), 128))], 64))), 128)), r.value.groups.length ? K("", !0) : (H(), U("p", ZO, " Ничего не найдено. Попробуй другое название или направление. "))])
			], 8, HO)
		], 64));
	}
}, $O = {
	class: "sba-preview-tabs",
	role: "group",
	"aria-label": "Тип результата"
}, ek = ["aria-pressed"], tk = ["aria-pressed"], nk = ["value"], rk = {
	class: "sba-preview-count",
	id: "sba-preview-count"
}, ik = {
	id: "sba-transfer-confirm",
	"aria-live": "polite"
}, ak = {
	key: 0,
	class: "sba-transfer-preview"
}, ok = ["hidden"], sk = [
	["#sba-cards", "cards"],
	["#sba-snake-track", "snake"],
	["#sba-transition-hub-list", "transitions"],
	["#sba-energy-chart", "energy"],
	[
		".sba-preset-picker",
		"picker",
		QO
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
				let t = e, n = /* @__PURE__ */ F(t.api.snapshot()), r = q(() => n.value?.result || {
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
				return z(() => window.addEventListener("sunoboom:arranger-updated", i)), xr(() => window.removeEventListener("sunoboom:arranger-updated", i)), (e, t) => (H(), U(V, null, [
					t[3] ||= W("div", { class: "sba-result-header" }, [
						W("span", { class: "sba-eyebrow" }, "ПРЕДПРОСМОТР"),
						W("h3", null, "Результат для Suno"),
						W("p", null, "Lyrics — теги по секциям; Style — короткое описание динамики.")
					], -1),
					W("div", $O, [W("button", {
						type: "button",
						"data-sba-action": "tab",
						"data-tab": "lyrics",
						"aria-pressed": r.value.tab === "lyrics"
					}, "Теги Lyrics", 8, ek), W("button", {
						type: "button",
						"data-sba-action": "tab",
						"data-tab": "style",
						"aria-pressed": r.value.tab === "style"
					}, "Style", 8, tk)]),
					W("textarea", {
						id: "sba-preview",
						readonly: "",
						spellcheck: "false",
						"aria-label": "Готовые теги структуры песни",
						value: r.value.text
					}, null, 8, nk),
					W("div", rk, k(r.value.count), 1),
					t[4] ||= W("div", { class: "sba-result-actions" }, [W("button", {
						type: "button",
						class: "sba-btn sba-copy-btn",
						"data-sba-action": "copy"
					}, " Копировать результат "), W("button", {
						type: "button",
						class: "sba-btn sba-transfer-btn",
						"data-sba-action": "prepare-transfer"
					}, " Перенести стиль в Studio ")], -1),
					W("div", ik, [r.value.transfer ? (H(), U("div", ak, [
						t[0] ||= W("strong", null, "Предпросмотр переноса в Style", -1),
						t[1] ||= W("p", null, "Добавим описание аранжировки в дополнительные инструкции Suno Studio, не удаляя твои записи.", -1),
						W("code", null, k(r.value.transfer.candidate), 1),
						t[2] ||= W("div", { class: "sba-preview-buttons" }, [W("button", {
							type: "button",
							"data-sba-action": "transfer-accept"
						}, "Подтвердить перенос"), W("button", {
							type: "button",
							"data-sba-action": "transfer-cancel"
						}, "Отмена")], -1),
						W("small", null, "Итоговый промпт Studio: " + k(r.value.transfer.promptLength) + " / 1000 символов", 1)
					])) : K("", !0)]),
					W("p", {
						id: "sba-message",
						class: "sba-message",
						role: "status",
						"aria-live": "polite",
						hidden: !r.value.message
					}, k(r.value.message), 9, ok),
					t[5] ||= W("div", { class: "sba-help" }, [
						W("strong", null, "Как применять"),
						W("p", null, [
							G("Теги секций вставляй в поле "),
							W("b", null, "Lyrics"),
							G(" в Suno рядом с текстом песни. Краткую динамику можно добавить в "),
							W("b", null, "Style"),
							G(" через Suno Studio после подтверждения.")
						]),
						W("p", null, "Ориентир длительности рассчитан по 4/4 и BPM Studio, это не гарантия точной длины аудио.")
					], -1)
				], 64));
			}
		}
	]
];
function ck({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ARRANGER, n = document.getElementById("app");
	if (!n || !t || typeof t.snapshot != "function") return () => {};
	let r = /* @__PURE__ */ new Map(), i = !1;
	function a() {
		if (!i) for (let [i, a, o = zO] of sk) {
			let s = n.querySelector(i), c = r.get(a);
			if (c?.target === s || (c && (c.unmount(), r.delete(a)), !s || !t.snapshot())) continue;
			let l = e(s, o, o === zO ? {
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
var lk = {
	key: 0,
	class: "sb-poetry-empty"
}, uk = { class: "sb-poetry-stats" }, dk = { class: "sb-poetry-subline" }, fk = { class: "sb-poetry-sections" }, pk = { class: "sb-poetry-stanzas" }, mk = { class: "sb-poetry-stanza-name" }, hk = { class: "sb-poetry-stanza-data" }, gk = { class: "sb-poetry-lines" }, _k = { class: "sb-poetry-line-main" }, vk = { class: "sb-poetry-index" }, yk = { class: "sb-poetry-verse" }, bk = {
	class: "sb-poetry-syllable",
	title: "Оценка слогов"
}, xk = ["title"], Sk = {
	key: 0,
	class: "sb-poetry-footnote"
}, Ck = {
	key: 1,
	class: "sb-poetry-words"
}, wk = { class: "sb-poetry-tips" }, Tk = {
	__name: "PoetryAnalysis",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ F(t.api.analysis()), r = q(() => n.value || {
			analyzed: !1,
			message: ""
		}), i = Q();
		function a() {
			let e = t.api.analysis();
			e && (n.value = e, i.publishPoetryAnalysisSummary(e));
		}
		return z(() => {
			i.publishPoetryAnalysisSummary(n.value), window.addEventListener("sunoboom:poetry-updated", a);
		}), xr(() => window.removeEventListener("sunoboom:poetry-updated", a)), (e, t) => r.value.analyzed ? (H(), U(V, { key: 1 }, [
			W("div", uk, [(H(!0), U(V, null, B(r.value.stats, (e) => (H(), U("div", {
				key: e.label,
				class: "sb-poetry-stat"
			}, [W("strong", null, k(e.value), 1), W("span", null, k(e.label), 1)]))), 128))]),
			W("p", dk, " Диапазон: " + k(r.value.lower) + "–" + k(r.value.upper) + " слогов на строку · меток ударения: " + k(r.value.markedStress) + ". ", 1),
			W("div", fk, [t[1] ||= W("h4", null, "Строфы и предполагаемая рифмовка", -1), W("div", pk, [(H(!0), U(V, null, B(r.value.stanzas, (e) => (H(), U("div", {
				key: e.id,
				class: "sb-poetry-stanza"
			}, [W("div", mk, k(e.section) + " · строфа " + k(e.position), 1), W("div", hk, [
				G(" Схема " + k(e.scheme) + " ", 1),
				t[0] ||= W("span", null, "·", -1),
				G(" разброс " + k(e.spread) + " сл. ", 1)
			])]))), 128))])]),
			t[4] ||= W("div", { class: "sb-poetry-lines-head" }, [W("strong", null, "Построчный анализ"), W("span", null, "Слоги · рифма")], -1),
			W("div", gk, [(H(!0), U(V, null, B(r.value.lines, (e) => (H(), U("div", {
				key: e.number,
				class: "sb-poetry-line"
			}, [
				W("div", _k, [W("span", vk, k(e.number) + ".", 1), W("span", yk, k(e.text), 1)]),
				W("div", bk, [W("span", null, k(e.syllables) + " сл.", 1), W("i", { style: D({ width: e.width + "%" }) }, null, 4)]),
				W("span", {
					class: O(["sb-poetry-letter", { "sb-poetry-letter-match": e.rhyme }]),
					title: e.repeat ? "Совпадение последнего слова" : e.rhyme ? "Предполагаемая рифма" : "Метка окончания"
				}, k(e.mark), 11, xk)
			]))), 128))]),
			r.value.rowCount > 120 ? (H(), U("p", Sk, " Показаны первые 120 строк из " + k(r.value.rowCount) + "; статистика рассчитана по всему тексту. ", 1)) : K("", !0),
			r.value.frequent.length ? (H(), U("div", Ck, [t[2] ||= W("strong", null, "Повторяющиеся слова:", -1), (H(!0), U(V, null, B(r.value.frequent, (e) => (H(), U("span", { key: e.word }, k(e.word) + " · " + k(e.count), 1))), 128))])) : K("", !0),
			W("div", wk, [t[3] ||= W("h4", null, "На что обратить внимание", -1), W("ul", null, [(H(!0), U(V, null, B(r.value.suggestions, (e, t) => (H(), U("li", { key: t }, k(e), 1))), 128))])]),
			t[5] ||= W("p", { class: "sb-poetry-footnote" }, " Анализ ориентировочный: счёт гласных не равен точной метрической скансии, совпадение окончаний не гарантирует рифму, а вокальная удобность зависит от темпа и мелодии. Исходный текст автоматически не изменяется. ", -1)
		], 64)) : (H(), U("p", lk, k(r.value.message), 1));
	}
}, Ek = {
	key: 0,
	class: "sb-stress-ambig-clear"
}, Dk = { class: "sb-stress-ambig-heading" }, Ok = { class: "sb-stress-ambig-variants" }, kk = ["data-word", "data-variant"], Ak = {
	key: 0,
	class: "sb-poetry-small"
}, jk = {
	__name: "PoetryAmbiguities",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ F(t.api.ambiguities()), r = q(() => n.value || {
			count: 0,
			words: [],
			total: 0
		}), i = Q();
		function a() {
			let e = t.api.ambiguities();
			e && (n.value = e, i.publishPoetryAmbiguitySummary(e));
		}
		return z(() => {
			i.publishPoetryAmbiguitySummary(n.value), window.addEventListener("sunoboom:poetry-stress-updated", a);
		}), xr(() => {
			window.removeEventListener("sunoboom:poetry-stress-updated", a), i.clearPoetryAmbiguitySummary();
		}), (e, t) => r.value.count ? (H(), U(V, { key: 1 }, [
			W("div", Dk, " 🔴 Требуют проверки: " + k(r.value.count) + " вхождений (" + k(r.value.total) + " разных слов). Нажми нужный вариант для каждого вхождения. ", 1),
			(H(!0), U(V, null, B(r.value.words, (e) => (H(), U("div", {
				key: e.key,
				class: "sb-stress-ambig-choice"
			}, [W("strong", null, k(e.key) + k(e.count > 1 ? " ×" + e.count : ""), 1), W("div", Ok, [(H(!0), U(V, null, B(e.variants, (t) => (H(), U("button", {
				key: t,
				type: "button",
				"data-action": "sb-poetry-stress-choice",
				"data-word": e.key,
				"data-variant": t,
				title: "Указать ударение для следующего вхождения"
			}, k(t), 9, kk))), 128))])]))), 128)),
			r.value.total > 30 ? (H(), U("p", Ak, " Показаны первые 30 разных слов; другие можно исправить вручную. ")) : K("", !0)
		], 64)) : (H(), U("p", Ek, " ✓ Все найденные неоднозначные слова проверены. "));
	}
};
// src/vue/poetry/legacyPoetryBridge.js
function Mk({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_POETRY, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = !1, i = /* @__PURE__ */ new Map();
	function a() {
		if (r) return;
		let a = [[
			"analysis",
			"#sb-poetry-result",
			Tk
		], [
			"ambiguities",
			"#sb-poetry-ambiguous-choices",
			jk
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
	return o.observe(n, { childList: !0 }), window.addEventListener("sunoboom:poetry-stress-ready", a), window.addEventListener("sunoboom:poetry-stress-closed", a), a(), () => {
		r = !0, o.disconnect(), window.removeEventListener("sunoboom:poetry-stress-ready", a), window.removeEventListener("sunoboom:poetry-stress-closed", a);
		for (let e of i.values()) e.unmount();
		i.clear();
	};
}
// src/vue/poetry/PerformanceTags.vue
var Nk = { class: "sb-vt-field" }, Pk = ["value"], Fk = ["value"], Ik = {
	class: "sb-vt-hint",
	id: "sb-vt-mode-hint"
}, Lk = { class: "sb-vt-grid" }, Rk = { class: "sb-vt-field" }, zk = ["value"], Bk = ["value"], Vk = { class: "sb-vt-field" }, Hk = ["value"], Uk = ["value"], Wk = {
	key: 0,
	class: "sb-vt-field"
}, Gk = ["value"], Kk = ["value"], qk = { class: "sb-vt-intensity" }, Jk = { class: "sb-vt-between" }, Yk = { id: "sb-vt-intensity-label" }, Xk = ["value"], Zk = { class: "sb-vt-options" }, Qk = ["data-vt-pref", "checked"], $k = {
	key: 1,
	class: "sb-vt-consent",
	id: "sb-vt-consent-row"
}, eA = { class: "sb-vt-buttons" }, tA = ["disabled"], nA = {
	id: "sb-vt-result",
	"aria-live": "polite"
}, rA = {
	key: 0,
	class: "sb-vt-draft"
}, iA = { class: "sb-vt-draft-head" }, aA = { class: "sb-vt-method" }, oA = { class: "sb-vt-section-list" }, sA = { class: "sb-vt-section-heading" }, cA = { class: "sb-vt-section-controls" }, lA = [
	"data-vt-preset",
	"value",
	"aria-label"
], uA = ["value"], dA = [
	"data-vt-cue",
	"value",
	"aria-label"
], fA = { class: "sb-vt-field" }, pA = ["value"], mA = {
	class: "sb-vt-small",
	id: "sb-vt-preview-state"
}, hA = {
	__name: "PerformanceTags",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ F(t.api.snapshot()), r = Q(), i = q(() => n.value?.prefs || {}), a = q(() => n.value?.draft || null), o = [
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
		}), xr(() => {
			window.removeEventListener("sunoboom:tags-updated", u), r.clearPerformanceTagsSummary();
		}), (e, t) => (H(), U(V, null, [
			t[12] ||= W("div", { class: "sb-vt-header" }, [W("span", { class: "sb-vt-symbol" }, "🎭"), W("div", null, [W("h3", null, "Генератор тегов исполнения"), W("p", null, "Вокальная драматургия по секциям. Без изменения слов песни; результат можно проверить и применить только вручную.")])], -1),
			W("div", Nk, [t[0] ||= W("label", { for: "sb-vt-mode" }, "Способ генерации", -1), W("select", {
				id: "sb-vt-mode",
				"data-vt-pref": "mode",
				value: i.value.mode
			}, [(H(), U(V, null, B(o, ([e, t]) => W("option", {
				key: e,
				value: e
			}, k(t), 9, Fk)), 64))], 8, Pk)]),
			W("p", Ik, k(n.value.modeHint), 1),
			W("div", Lk, [W("div", Rk, [t[1] ||= W("label", { for: "sb-vt-source" }, "Источник текста", -1), W("select", {
				id: "sb-vt-source",
				"data-vt-pref": "source",
				value: i.value.source
			}, [(H(), U(V, null, B(c, ([e, t]) => W("option", {
				key: e,
				value: e
			}, k(t), 9, Bk)), 64))], 8, zk)]), W("div", Vk, [t[2] ||= W("label", { for: "sb-vt-density" }, "Детализация метатегов", -1), W("select", {
				id: "sb-vt-density",
				"data-vt-pref": "density",
				value: i.value.density
			}, [(H(), U(V, null, B(s, ([e, t]) => W("option", {
				key: e,
				value: e
			}, k(t), 9, Uk)), 64))], 8, Hk)])]),
			n.value.artists?.length ? (H(), U("div", Wk, [t[4] ||= W("label", { for: "sb-vt-artist" }, "Учесть «ДНК артиста» (необязательно)", -1), W("select", {
				id: "sb-vt-artist",
				"data-vt-pref": "artistId",
				value: i.value.artistId
			}, [t[3] ||= W("option", { value: "" }, "Без привязки к артисту", -1), (H(!0), U(V, null, B(n.value.artists, (e) => (H(), U("option", {
				key: e.id,
				value: e.id
			}, k(e.name), 9, Kk))), 128))], 8, Gk)])) : K("", !0),
			W("div", qk, [
				W("div", Jk, [t[5] ||= W("label", { for: "sb-vt-intensity" }, "Максимальная интенсивность исполнения", -1), W("strong", Yk, k(i.value.intensity) + " / 5", 1)]),
				W("input", {
					type: "range",
					id: "sb-vt-intensity",
					min: "1",
					max: "5",
					step: "1",
					value: i.value.intensity,
					"data-vt-pref": "intensity"
				}, null, 8, Xk),
				t[6] ||= W("div", { class: "sb-vt-between sb-vt-scale" }, [W("span", null, "Сдержанная"), W("span", null, "Экспрессивная")], -1)
			]),
			W("div", Zk, [(H(), U(V, null, B(l, ([e, t]) => W("label", { key: e }, [W("input", {
				type: "checkbox",
				"data-vt-pref": e,
				checked: i.value[e]
			}, null, 8, Qk), G(" " + k(t), 1)])), 64))]),
			n.value.hasEndpoint ? (H(), U("label", $k, [...t[7] ||= [W("input", {
				type: "checkbox",
				id: "sb-vt-consent"
			}, null, -1), G(" Разрешаю отправить выбранный текст песни на защищённый сервер для анализа Gemini. ", -1)]])) : K("", !0),
			W("div", eA, [W("button", {
				type: "button",
				class: "btn primary",
				"data-action": "vt-generate",
				disabled: n.value.busy
			}, "✨ Создать предпросмотр", 8, tA), t[8] ||= W("span", { class: "sb-vt-note" }, "Никакого автоматического применения к Lyrics.", -1)]),
			W("div", {
				id: "sb-vt-notice",
				class: O(["sb-vt-notice", n.value.notice?.kind]),
				role: "status",
				"aria-live": "polite"
			}, k(n.value.notice?.text), 3),
			W("div", nA, [a.value ? (H(), U("div", rA, [
				W("div", iA, [W("h4", null, "Предпросмотр · " + k(a.value.sections.length) + " секций", 1), W("span", aA, k(a.value.method), 1)]),
				t[10] ||= W("p", { class: "sb-vt-small" }, " Проверь каждую секцию. Теги можно выбрать из списка или переписать вручную. Оригинальные строки песни остаются неизменными. ", -1),
				W("div", oA, [(H(!0), U(V, null, B(a.value.sections, (e, t) => (H(), U("div", {
					key: e.id,
					class: "sb-vt-section"
				}, [W("div", sA, [W("strong", null, k(e.label), 1), W("span", null, k(t + 1) + "/" + k(a.value.sections.length), 1)]), W("div", cA, [W("select", {
					"data-vt-preset": t,
					value: a.value.tags[t],
					"aria-label": "Готовые теги для " + e.label
				}, [(H(!0), U(V, null, B(n.value.presets, ([e, t]) => (H(), U("option", {
					key: e,
					value: e
				}, k(t), 9, uA))), 128))], 8, lA), W("input", {
					"data-vt-cue": t,
					value: a.value.tags[t],
					maxlength: "165",
					placeholder: "Например: Warm Emotional Vocals",
					"aria-label": "Тег исполнения " + e.label
				}, null, 8, dA)])]))), 128))]),
				W("div", fA, [t[9] ||= W("label", { for: "sb-vt-preview" }, " Готовый Lyrics — разрешено редактировать только инструкции, не слова песни ", -1), W("textarea", {
					id: "sb-vt-preview",
					spellcheck: "false",
					rows: "13",
					maxlength: "25000",
					value: a.value.preview
				}, null, 8, pA)]),
				W("p", mA, k(n.value.previewState), 1),
				t[11] ||= ua("<div class=\"sb-vt-draft-actions\"><button type=\"button\" class=\"btn primary\" data-action=\"vt-apply\"> ✓ Применить к Lyrics </button><button type=\"button\" class=\"btn ghost\" data-action=\"vt-copy\"> Копировать предпросмотр </button><button type=\"button\" class=\"btn ghost\" data-action=\"vt-refresh\"> Обновить предпросмотр </button><button type=\"button\" class=\"btn ghost\" data-action=\"vt-cancel\"> Отменить </button></div>", 1)
			])) : K("", !0)])
		], 64));
	}
};
// src/vue/poetry/legacyTagsBridge.js
function gA({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_TAGS, n = document.getElementById("app");
	if (!t || !n || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vt-workbench");
		if (r?.target === a || (r &&= (r.unmount(), null), !a || !t.snapshot())) return;
		let o = e(a, hA, { api: t });
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
var _A = gs(), vA = Q(_A), yA = /* @__PURE__ */ new WeakMap();
function bA(e) {
	return typeof document > "u" ? null : typeof e == "string" ? document.querySelector(e) : e;
}
function $(e, t, n = {}, { vueRouter: r = !1 } = {}) {
	let i = bA(e);
	if (!i || i.nodeType !== 1 || !t) return null;
	let a = yA.get(i);
	a && a.unmount();
	let o = i.innerHTML, s = Yo(Rx, {
		component: t,
		componentProps: n
	});
	s.use(_A), r && s.use(Ml);
	try {
		s.mount(i);
	} catch (e) {
		return i.innerHTML = o, console.warn("[SUNOBOOM] Vue mount failed; legacy navigation retained.", e), null;
	}
	return yA.set(i, s), () => {
		yA.get(i) === s && (s.unmount(), yA.delete(i));
	};
}
function xA(e) {
	let t = bA(e);
	if (!t) return;
	let n = yA.get(t);
	n && (n.unmount(), yA.delete(t));
}
function SA() {
	return Lx({ sharedUi: vA });
}
function CA() {
	return eS({
		mountVueFeature: $,
		unmountVueFeature: xA,
		sharedUi: vA
	});
}
function wA() {
	return BS({ mountVueFeature: $ });
}
function TA() {
	return oT({ mountVueFeature: $ });
}
function EA() {
	return XT({ mountVueFeature: $ });
}
function DA() {
	return GE({ mountVueFeature: $ });
}
function OA() {
	return _D({ mountVueFeature: $ });
}
function kA() {
	return ck({ mountVueFeature: $ });
}
function AA() {
	return Mk({ mountVueFeature: $ });
}
function jA() {
	return gA({ mountVueFeature: $ });
}
function MA() {
	return Ix({ mountVueFeature: $ });
}
function NA() {
	return hd({ mountVueFeature: $ });
}
function PA() {
	return sp({ mountVueFeature: $ });
}
function FA() {
	return $f({ mountVueFeature: $ });
}
function IA() {
	return Xp({ mountVueFeature: $ });
}
function LA() {
	return um({ mountVueFeature: $ });
}
function RA() {
	return oh({ mountVueFeature: $ });
}
function zA() {
	return Hh({ mountVueFeature: $ });
}
function BA() {
	return Xh({ mountVueFeature: $ });
}
function VA() {
	return Cg({ mountVueFeature: $ });
}
function HA() {
	return Zg({ mountVueFeature: $ });
}
function UA() {
	return y_({ mountVueFeature: $ });
}
function WA() {
	return av({ mountVueFeature: $ });
}
function GA() {
	return ty({ mountVueFeature: $ });
}
function KA() {
	return ly({ mountVueFeature: $ });
}
function qA() {
	return Yy({ mountVueFeature: $ });
}
function JA() {
	return rb({ mountVueFeature: $ });
}
function YA() {
	return Nb({ mountVueFeature: $ });
}
function XA() {
	return cx({ mountVueFeature: $ });
}
function ZA() {
	return ef({ mountVueFeature: $ });
}
function QA() {
	return Rf({
		mountVueFeature: $,
		sharedUi: vA
	});
}
function $A() {
	return kC({ mountVueFeature: $ });
}
export { $ as mountVueFeature, wA as startLegacyAcademy, UA as startLegacyAccountSettings, SA as startLegacyAppearance, kA as startLegacyArranger, VA as startLegacyArtistDNA, HA as startLegacyArtistDNAEditor, BA as startLegacyArtistManager, OA as startLegacyAuditor, TA as startLegacyGenreDetail, $A as startLegacyGenreTree, QA as startLegacyHomeDashboard, NA as startLegacyIdeaCollections, MA as startLegacyIdeaEditor, IA as startLegacyLibrary, DA as startLegacyMixer, CA as startLegacyNavigation, GA as startLegacyPlayerAB, WA as startLegacyPlayerLab, AA as startLegacyPoetry, qA as startLegacyProducerSongDetail, KA as startLegacyProducerSongList, FA as startLegacyPromptCollection, PA as startLegacyPromptEditor, LA as startLegacySongCards, RA as startLegacySongDetail, zA as startLegacySongEditor, EA as startLegacyStudio, jA as startLegacyTags, YA as startLegacyTrackPassportDetail, XA as startLegacyTrackPassportEditor, JA as startLegacyTrackPassportList, ZA as startLegacyVersionHistory, xA as unmountVueFeature };
