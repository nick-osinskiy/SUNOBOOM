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
}, ie = /-\w/g, C = /* @__PURE__ */ re((e) => e.replace(ie, (e) => e.slice(1).toUpperCase())), ae = /\B([A-Z])/g, w = /* @__PURE__ */ re((e) => e.replace(ae, "-$1").toLowerCase()), oe = /* @__PURE__ */ re((e) => e.charAt(0).toUpperCase() + e.slice(1)), se = /* @__PURE__ */ re((e) => e ? `on${oe(e)}` : ""), ce = (e, t) => !Object.is(e, t), le = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, T = (e, t, n, r = !1) => {
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
var Ee = (e) => !!(e && e.__v_isRef === !0), O = (e) => g(e) ? e : e == null ? "" : d(e) || v(e) && (e.toString === b || !h(e.toString)) ? Ee(e) ? O(e.value) : JSON.stringify(e, De, 2) : String(e), De = (e, t) => Ee(t) ? De(e, t.value) : f(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Oe(t, r) + " =>"] = n, e), {}) } : p(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Oe(e)) } : _(t) ? Oe(t) : v(t) && !d(t) && !S(t) ? String(t) : t, Oe = (e, t = "") => _(e) ? `Symbol(${e.description ?? t})` : e, k, ke = class {
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
function Ae(e) {
	return new ke(e);
}
function je() {
	return k;
}
var A, Me = /* @__PURE__ */ new WeakSet(), Ne = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, k && (k.active ? k.effects.push(this) : this.flags &= -2);
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
		let e = A, t = Ke;
		A = this, Ke = !0;
		try {
			return this.fn();
		} finally {
			Ve(this), A = e, Ke = t, this.flags &= -3;
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
	let t = e.dep, n = A, r = Ke;
	A = e, Ke = !0;
	try {
		Be(e);
		let n = e.fn(e._value);
		(t.version === 0 || ce(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		A = n, Ke = r, Ve(e), e.flags &= -3;
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
		let e = A;
		A = void 0;
		try {
			t();
		} finally {
			A = e;
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
		if (!A || !Ke || A === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== A) t = this.activeLink = new Qe(A, this), A.deps ? (t.prevDep = A.depsTail, A.depsTail.nextDep = t, A.depsTail = t) : A.deps = A.depsTail = t, et(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = A.depsTail, t.nextDep = void 0, A.depsTail.nextDep = t, A.depsTail = t, A.deps === t && (A.deps = e);
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
function j(e, t, n) {
	if (Ke && A) {
		let t = tt.get(e);
		t || tt.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new $e()), r.map = t, r.key = n), r.track();
	}
}
function at(e, t, n, r, i, a) {
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
		let i = d(e), a = i && te(n);
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
function ot(e) {
	let t = /* @__PURE__ */ M(e);
	return t === e || (j(t, "iterate", it), /* @__PURE__ */ Kt(e)) ? t : /* @__PURE__ */ Gt(e) ? /* @__PURE__ */ Wt(e) ? t.map((e) => Xt(Yt(e))) : t.map(Xt) : t.map(Yt);
}
function st(e) {
	return j(e = /* @__PURE__ */ M(e), "iterate", it), e;
}
function ct(e, t) {
	return /* @__PURE__ */ Gt(e) ? Xt(/* @__PURE__ */ Wt(e) ? Yt(t) : t) : Yt(t);
}
var lt = {
	__proto__: null,
	[Symbol.iterator]() {
		return ut(this, Symbol.iterator, (e) => ct(this, e));
	},
	concat(...e) {
		return ot(this).concat(...e.map((e) => d(e) ? ot(e) : e));
	},
	entries() {
		return ut(this, "entries", (e) => (e[1] = ct(this, e[1]), e));
	},
	every(e, t) {
		return pt(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return pt(this, "filter", e, t, (e) => e.map((e) => ct(this, e)), arguments);
	},
	find(e, t) {
		return pt(this, "find", e, t, (e) => ct(this, e), arguments);
	},
	findIndex(e, t) {
		return pt(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return pt(this, "findLast", e, t, (e) => ct(this, e), arguments);
	},
	findLastIndex(e, t) {
		return pt(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return pt(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return ht(this, "includes", e);
	},
	indexOf(...e) {
		return ht(this, "indexOf", e);
	},
	join(e) {
		return ot(this).join(e);
	},
	lastIndexOf(...e) {
		return ht(this, "lastIndexOf", e);
	},
	map(e, t) {
		return pt(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return gt(this, "pop");
	},
	push(...e) {
		return gt(this, "push", e);
	},
	reduce(e, ...t) {
		return mt(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return mt(this, "reduceRight", e, t);
	},
	shift() {
		return gt(this, "shift");
	},
	some(e, t) {
		return pt(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return gt(this, "splice", e);
	},
	toReversed() {
		return ot(this).toReversed();
	},
	toSorted(e) {
		return ot(this).toSorted(e);
	},
	toSpliced(...e) {
		return ot(this).toSpliced(...e);
	},
	unshift(...e) {
		return gt(this, "unshift", e);
	},
	values() {
		return ut(this, "values", (e) => ct(this, e));
	}
};
function ut(e, t, n) {
	let r = st(e), i = r[t], a = i.call(r);
	if (r !== e && !/* @__PURE__ */ Kt(e)) {
		if (a[Symbol.toStringTag] === "Array Iterator") {
			let e = Object.create(Object.getPrototypeOf(a));
			return e.next = () => dt(a.next(), n), i !== ft[t] && Object.defineProperties(e, {
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
		a._next = a.next, a.next = () => dt(a._next(), n);
	}
	return a;
}
function dt(e, t) {
	return e.done || (e.value = t(e.value)), e;
}
var ft = Array.prototype;
function pt(e, t, n, r, i, a) {
	let o = st(e), s = o !== e && !/* @__PURE__ */ Kt(e), c = o[t];
	if (c !== ft[t]) {
		let t = c.apply(e, a);
		return s ? Yt(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, ct(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function mt(e, t, n, r) {
	let i = st(e), a = i !== e && !/* @__PURE__ */ Kt(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = ct(e, t)), n.call(this, t, ct(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? ct(e, c) : c;
}
function ht(e, t, n) {
	let r = /* @__PURE__ */ M(e);
	j(r, "iterate", it);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ qt(n[0]) ? (n[0] = /* @__PURE__ */ M(n[0]), r[t](...n)) : i;
}
function gt(e, t, n = []) {
	Je(), Re();
	let r = (/* @__PURE__ */ M(e))[t].apply(e, n);
	return ze(), Ye(), r;
}
var _t = /* @__PURE__ */ e("__proto__,__v_isRef,__isVue"), vt = /* @__PURE__ */ new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_));
function yt(e) {
	_(e) || (e = String(e));
	let t = /* @__PURE__ */ M(this);
	return j(t, "has", e), t.hasOwnProperty(e);
}
var bt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Rt : Lt : i ? It : Ft).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = d(e);
		if (!r) {
			let e;
			if (a && (e = lt[t])) return e;
			if (t === "hasOwnProperty") return yt;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ N(e) ? e : n);
		if ((_(t) ? vt.has(t) : _t(t)) || (r || j(e, "get", t), i)) return o;
		if (/* @__PURE__ */ N(o)) {
			let e = a && te(t) ? o : o.value;
			return r && v(e) ? /* @__PURE__ */ Ht(e) : e;
		}
		return v(o) ? r ? /* @__PURE__ */ Ht(o) : /* @__PURE__ */ Bt(o) : o;
	}
}, xt = class extends bt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = d(e) && te(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Gt(i);
			if (!/* @__PURE__ */ Kt(n) && !/* @__PURE__ */ Gt(n) && (i = /* @__PURE__ */ M(i), n = /* @__PURE__ */ M(n)), !a && /* @__PURE__ */ N(i) && !/* @__PURE__ */ N(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : u(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ N(e) ? e : r);
		return e === /* @__PURE__ */ M(r) && s && (o ? ce(n, i) && at(e, "set", t, n, i) : at(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = u(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && at(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return _(t) && vt.has(t) || j(e, "has", t), n;
	}
	ownKeys(e) {
		return j(e, "iterate", d(e) ? "length" : nt), Reflect.ownKeys(e);
	}
}, St = class extends bt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, Ct = /* @__PURE__ */ new xt(), wt = /* @__PURE__ */ new St(), Tt = /* @__PURE__ */ new xt(!0), Et = (e) => e, Dt = (e) => Reflect.getPrototypeOf(e);
function Ot(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ M(i), o = f(a), c = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = i[e](...r), d = n ? Et : t ? Xt : Yt;
		return !t && j(a, "iterate", l ? rt : nt), s(Object.create(u), { next() {
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
function kt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function At(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ M(r), a = /* @__PURE__ */ M(n);
			e || (ce(n, a) && j(i, "get", n), j(i, "get", a));
			let { has: o } = Dt(i), s = t ? Et : e ? Xt : Yt;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && j(/* @__PURE__ */ M(t), "iterate", nt), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ M(n), i = /* @__PURE__ */ M(t);
			return e || (ce(t, i) && j(r, "has", t), j(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ M(a), s = t ? Et : e ? Xt : Yt;
			return !e && j(o, "iterate", nt), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return s(n, e ? {
		add: kt("add"),
		set: kt("set"),
		delete: kt("delete"),
		clear: kt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ M(this), r = Dt(n), i = /* @__PURE__ */ M(e), a = !t && !/* @__PURE__ */ Kt(e) && !/* @__PURE__ */ Gt(e) ? i : e;
			return r.has.call(n, a) || ce(e, a) && r.has.call(n, e) || ce(i, a) && r.has.call(n, i) || (n.add(a), at(n, "add", a, a)), this;
		},
		set(e, n) {
			t || /* @__PURE__ */ Kt(n) || /* @__PURE__ */ Gt(n) || (n = /* @__PURE__ */ M(n));
			let r = /* @__PURE__ */ M(this), { has: i, get: a } = Dt(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ M(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? ce(n, s) && at(r, "set", e, n, s) : at(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ M(this), { has: n, get: r } = Dt(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ M(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && at(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ M(this), t = e.size !== 0, n = e.clear();
			return t && at(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = Ot(r, e, t);
	}), n;
}
function jt(e, t) {
	let n = At(e, t);
	return (r, i, a) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_isShallow" ? t : i === "__v_raw" ? r : Reflect.get(u(n, i) && i in r ? n : r, i, a);
}
var Mt = { get: /* @__PURE__ */ jt(!1, !1) }, Nt = { get: /* @__PURE__ */ jt(!1, !0) }, Pt = { get: /* @__PURE__ */ jt(!0, !1) }, Ft = /* @__PURE__ */ new WeakMap(), It = /* @__PURE__ */ new WeakMap(), Lt = /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ new WeakMap();
function zt(e) {
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
function Bt(e) {
	return /* @__PURE__ */ Gt(e) ? e : Ut(e, !1, Ct, Mt, Ft);
}
// @__NO_SIDE_EFFECTS__
function Vt(e) {
	return Ut(e, !1, Tt, Nt, It);
}
// @__NO_SIDE_EFFECTS__
function Ht(e) {
	return Ut(e, !0, wt, Pt, Lt);
}
function Ut(e, t, n, r, i) {
	if (!v(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = zt(ee(e));
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
function M(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ M(t) : e;
}
function Jt(e) {
	return !u(e, "__v_skip") && Object.isExtensible(e) && T(e, "__v_skip", !0), e;
}
var Yt = (e) => v(e) ? /* @__PURE__ */ Bt(e) : e, Xt = (e) => v(e) ? /* @__PURE__ */ Ht(e) : e;
// @__NO_SIDE_EFFECTS__
function N(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function P(e) {
	return Qt(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Zt(e) {
	return Qt(e, !0);
}
function Qt(e, t) {
	return /* @__PURE__ */ N(e) ? e : new $t(e, t);
}
var $t = class {
	constructor(e, t) {
		this.dep = new $e(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ M(e), this._value = t ? e : Yt(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Kt(e) || /* @__PURE__ */ Gt(e);
		e = n ? e : /* @__PURE__ */ M(e), ce(e, t) && (this._rawValue = e, this._value = n ? e : Yt(e), this.dep.trigger());
	}
};
function en(e) {
	return /* @__PURE__ */ N(e) ? e.value : e;
}
var tn = {
	get: (e, t, n) => t === "__v_raw" ? e : en(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ N(i) && !/* @__PURE__ */ N(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function nn(e) {
	return /* @__PURE__ */ Wt(e) ? e : new Proxy(e, tn);
}
var rn = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new $e(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ze - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && A !== this) return Le(this, !0), !0;
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
function an(e, t, n = !1) {
	let r, i;
	return h(e) ? r = e : (r = e.get, i = e.set), new rn(r, i, n);
}
var on = {}, sn = /* @__PURE__ */ new WeakMap(), cn = void 0;
function ln(e, t = !1, n = cn) {
	if (n) {
		let t = sn.get(n);
		t || sn.set(n, t = []), t.push(e);
	}
}
function un(e, n, i = t) {
	let { immediate: a, deep: o, once: s, scheduler: l, augmentJob: u, call: f } = i, p = (e) => o ? e : /* @__PURE__ */ Kt(e) || o === !1 || o === 0 ? dn(e, 1) : dn(e), m, g, _, v, y = !1, b = !1;
	if (/* @__PURE__ */ N(e) ? (g = () => e.value, y = /* @__PURE__ */ Kt(e)) : /* @__PURE__ */ Wt(e) ? (g = () => p(e), y = !0) : d(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ Wt(e) || /* @__PURE__ */ Kt(e)), g = () => e.map((e) => {
		if (/* @__PURE__ */ N(e)) return e.value;
		if (/* @__PURE__ */ Wt(e)) return p(e);
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
		let t = cn;
		cn = m;
		try {
			return f ? f(e, 3, [v]) : e(v);
		} finally {
			cn = t;
		}
	} : r, n && o) {
		let e = g, t = o === !0 ? Infinity : o;
		g = () => dn(e(), t);
	}
	let x = je(), ee = () => {
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
	let S = b ? Array(e.length).fill(on) : on, te = (e) => {
		if (m.flags & 1 && (m.dirty || e)) {
			if (n) {
				let t = m.run();
				if (e || o || y || (b ? t.some((e, t) => ce(e, S[t])) : ce(t, S))) {
					let e = cn;
					Je();
					try {
						_ && _(), cn = m;
						let e = [
							t,
							S === on ? void 0 : b && S[0] === on ? [] : S,
							v
						];
						S = t, f ? f(n, 3, e) : n(...e);
					} finally {
						cn = e, Ye();
					}
				}
			} else m.run();
		}
	};
	return u && u(te), m = new Ne(g), m.scheduler = l ? () => l(te, !1) : te, v = (e) => ln(e, !1, m), _ = m.onStop = () => {
		let e = sn.get(m);
		if (e) {
			if (f) f(e, 4);
			else for (let t of e) t();
			sn.delete(m);
		}
	}, n ? a ? te(!0) : S = m.run() : l ? l(te.bind(null, !0), !0) : m.run(), ee.pause = m.pause.bind(m), ee.resume = m.resume.bind(m), ee.stop = ee, ee;
}
function dn(e, t = Infinity, n) {
	if (t <= 0 || !v(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ N(e)) dn(e.value, t, n);
	else if (d(e)) for (let r = 0; r < e.length; r++) dn(e[r], t, n);
	else if (p(e) || f(e)) e.forEach((e) => {
		dn(e, t, n);
	});
	else if (S(e)) {
		for (let r in e) dn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && dn(e[r], t, n);
	}
	return e;
}
// node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function fn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		mn(e, t, n);
	}
}
function pn(e, t, n, r) {
	if (h(e)) {
		let i = fn(e, t, n, r);
		return i && y(i) && i.catch((e) => {
			mn(e, t, n, void 0, !0);
		}), i;
	}
	if (d(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(pn(e[a], t, n, r));
		return i;
	}
}
function mn(e, n, r, i = !0, a = !1) {
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
			Je(), fn(s, null, 10, [
				e,
				i,
				o
			]), Ye();
			return;
		}
	}
	hn(e, r, o, i, c);
}
function hn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var F = [], gn = -1, _n = [], vn = null, yn = 0, bn = /* @__PURE__ */ Promise.resolve(), xn = null;
function Sn(e) {
	let t = xn || bn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function Cn(e) {
	let t = gn + 1, n = F.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = F[r], a = jn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function wn(e) {
	if (!(e.flags & 1)) {
		let t = jn(e), n = F[F.length - 1];
		!n || !(e.flags & 2) && t >= jn(n) ? F.push(e) : F.splice(Cn(t), 0, e), e.flags |= 1, Tn();
	}
}
function Tn() {
	xn ||= bn.then(Mn);
}
function En(e) {
	if (!d(e)) vn && e.id === -1 ? vn.splice(yn + 1, 0, e) : e.flags & 1 || (_n.push(e), e.flags |= 1);
	else for (let t = 0; t < e.length; t++) _n.push(e[t]);
	Tn();
}
function Dn(e, t, n, r = gn + 1) {
	for (; r < F.length; r++) {
		let n = F[r];
		if (n && n.flags & 2) {
			if (e && n.id !== e.uid || t !== void 0 && !(n.id >= t)) continue;
			F.splice(r, 1), r = e ? r - 1 : gn, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
		}
	}
}
function On(e, t, n = 0) {
	if (_n.length) {
		let e = _n, r = 0;
		if (t) {
			e = [];
			for (let i = 0; i < _n.length; i++) {
				let a = _n[i];
				(a.i === void 0 ? t.has(a) : !a.i || a.i.uid < n) ? _n[r++] = a : e.push(a);
			}
		}
		let i = [...new Set(e)].sort((e, t) => jn(e) - jn(t));
		if (_n.length = r, vn) {
			for (let e = 0; e < i.length; e++) vn.push(i[e]);
			return;
		}
		for (vn = i, yn = 0; yn < vn.length; yn++) {
			let e = vn[yn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		vn = null, yn = 0;
	}
}
var kn = !1;
function An(e, t) {
	if (kn) {
		e();
		return;
	}
	let n = t === void 0 ? void 0 : new Set(_n);
	e(), kn = !0;
	try {
		Dn(void 0, t), On(void 0, n, t);
	} finally {
		kn = !1;
	}
}
var jn = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function Mn(e) {
	try {
		for (gn = 0; gn < F.length; gn++) {
			let e = F[gn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), fn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; gn < F.length; gn++) {
			let e = F[gn];
			e && (e.flags &= -2);
		}
		gn = -1, F.length = 0, On(e), xn = null, (F.length || _n.length) && Mn(e);
	}
}
var I = null, Nn = null;
function Pn(e) {
	let t = I;
	return I = e, Nn = e && e.type.__scopeId || null, t;
}
function Fn(e, t = I, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && Wi(-1);
		let i = Pn(t), a = Vi.length, o;
		try {
			o = e(...n);
		} finally {
			for (let e = Vi.length; e > a; e--) Hi();
			Pn(i), r._d && Wi(1);
		}
		return o;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function L(e, n) {
	if (I === null) return e;
	let r = wa(I), i = e.dirs ||= [];
	for (let e = 0; e < n.length; e++) {
		let [a, o, s, c = t] = n[e];
		a && (h(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && dn(o), i.push({
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
function In(e, t, n, r) {
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
		u && (Je(), pn(u, n, 8, [
			e.el,
			l,
			i,
			t
		]), Ye());
	}
}
function Ln(e, t) {
	if (X) {
		let n = X.provides, r = X.parent && X.parent.provides;
		r === n && (n = X.provides = Object.create(r)), n[e] = t;
	}
}
function Rn(e, t, n = !1) {
	let r = ua();
	if (r || qr) {
		let i = qr ? qr._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && h(t) ? t.call(r && r.proxy) : t;
	}
}
var zn = /* @__PURE__ */ Symbol.for("v-scx"), Bn = () => Rn(zn);
function Vn(e, t, n) {
	return Hn(e, t, n);
}
function Hn(e, n, i = t) {
	let { immediate: a, deep: o, flush: c, once: l } = i, u = s({}, i), d = n && a || !n && c !== "post", f;
	if (ga) {
		if (c === "sync") {
			let e = Bn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = r, e.resume = r, e.pause = r, e;
		}
	}
	let p = X;
	u.call = (e, t, n) => pn(e, p, t, n);
	let m = !1;
	c === "post" ? u.scheduler = (e) => {
		e.i = p, V(e, p && p.suspense);
	} : c !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : wn(e);
	}), u.augmentJob = (e) => {
		n && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = un(e, n, u);
	return ga && (f ? f.push(h) : d && h()), h;
}
function Un(e, t, n) {
	let r = this.proxy, i = g(e) ? e.includes(".") ? Wn(r, e) : () => r[e] : e.bind(r, r), a;
	h(t) ? a = t : (a = t.handler, n = t);
	let o = pa(this), s = Hn(i, a.bind(r), n);
	return o(), s;
}
function Wn(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Gn = /* @__PURE__ */ Symbol("_vte"), Kn = (e) => e.__isTeleport, qn = /* @__PURE__ */ Symbol("_leaveCb");
function Jn(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== zi) {
			t = n;
			break;
		}
	}
	return t;
}
function Yn(e) {
	if (!ir(e)) return Kn(e.type) && e.children ? Jn(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && h(n.default)) return n.default();
	}
}
function Xn(e, t) {
	if (e.shapeFlag & 6 && e.component) {
		e.transition = t;
		let n = e.component.subTree;
		Xn(Kn(n.type) && Yn(n) || n, t);
	} else if (e.shapeFlag & 128) {
		let n = e.suspense;
		if (n) {
			let e = n.isHydrating ? n.pendingBranch : n.activeBranch;
			e && Xn(e, t.clone(e));
		} else e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback);
	} else if (e.transition = t, e.type === H && d(e.children)) {
		let n = ei(e.children, !1);
		n && Xn(n, t);
	}
}
function Zn(e) {
	if (e.component) return Zn(e.component.subTree);
	if (e.type === H) {
		let t = d(e.children) && ei(e.children, !1);
		return t ? Zn(t) : void 0;
	}
	if (e.type !== zi) return e;
}
function Qn(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function $n(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var er = /* @__PURE__ */ new WeakMap();
function tr(e, n, r, a, o = !1) {
	if (d(e)) {
		e.forEach((e, t) => tr(e, n && (d(n) ? n[t] : n), r, a, o));
		return;
	}
	if (rr(a) && !o) {
		a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && tr(e, n, r, a.component.subTree);
		return;
	}
	let s = a.shapeFlag & 4 ? wa(a.component) : a.el, l = o ? null : s, { i: f, r: p } = e, m = n && n.r, _ = f.refs === t ? f.refs = {} : f.refs, v = f.setupState, y = /* @__PURE__ */ M(v), b = v === t ? i : (e) => !$n(_, e) && u(y, e), x = (e, t) => !(t && $n(_, t));
	if (m != null && m !== p) {
		if (nr(n), g(m)) _[m] = null, b(m) && (v[m] = null);
		else if (/* @__PURE__ */ N(m)) {
			let e = n;
			x(m, e.k) && (m.value = null), e.k && (_[e.k] = null);
		}
	}
	if (h(p)) fn(p, f, 12, [l, _]);
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
					i(), er.delete(e);
				};
				t.id = -1, er.set(e, t), V(t, r);
			} else nr(e), i();
		}
	}
}
function nr(e) {
	let t = er.get(e);
	t && (t.flags |= 8, er.delete(e));
}
fe().requestIdleCallback, fe().cancelIdleCallback;
var rr = (e) => !!e.type.__asyncLoader, ir = (e) => e.type.__isKeepAlive;
function ar(e, t) {
	sr(e, "a", t);
}
function or(e, t) {
	sr(e, "da", t);
}
function sr(e, t, n = X) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (lr(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) ir(e.parent.vnode) && cr(r, t, n, e), e = e.parent;
	}
}
function cr(e, t, n, r) {
	let i = lr(t, e, r, !0), a = lr("um", () => c(r[t], i), n);
	a.flags = 16;
}
function lr(e, t, n = X, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Je();
			let i = pa(n), a = pn(t, n, e, r);
			return i(), Ye(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var ur = (e) => (t, n = X) => {
	ga && e !== "sp" || lr(e, (...e) => t(...e), n);
}, dr = ur("bm"), R = ur("m"), fr = ur("bu"), pr = ur("u"), mr = ur("bum"), hr = ur("um"), gr = ur("sp"), _r = ur("rtg"), vr = ur("rtc");
function yr(e, t = X) {
	lr("ec", e, t);
}
var br = "components", xr = /* @__PURE__ */ Symbol.for("v-ndc");
function Sr(e) {
	return g(e) ? Cr(br, e, !1) || e : e || xr;
}
function Cr(e, t, n = !0, r = !1) {
	let i = I || X;
	if (i) {
		let n = i.type;
		if (e === br) {
			let e = Ta(n, !1);
			if (e && (e === t || e === C(t) || e === oe(C(t)))) return n;
		}
		let a = wr(i[e] || n[e], t) || wr(i.appContext[e], t);
		return !a && r ? n : a;
	}
}
function wr(e, t) {
	return e && (e[t] || e[C(t)] || e[oe(C(t))]);
}
function z(e, t, n, r) {
	let i, a = n && n[r], o = d(e);
	if (o || g(e)) {
		let n = o && /* @__PURE__ */ Wt(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ Kt(e), s = /* @__PURE__ */ Gt(e), e = st(e)), i = Array(e.length);
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
var Tr = (e) => e ? ha(e) ? wa(e) : Tr(e.parent) : null, Er = /* @__PURE__ */ s(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => Tr(e.parent),
	$root: (e) => Tr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Fr(e),
	$forceUpdate: (e) => e.f ||= () => {
		wn(e.update);
	},
	$nextTick: (e) => e.n ||= Sn.bind(e.proxy),
	$watch: (e) => Un.bind(e)
}), Dr = (e, n) => e !== t && !e.__isScriptSetup && u(e, n), Or = {
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
			else if (Dr(i, n)) return s[n] = 1, i[n];
			else if (a !== t && u(a, n)) return s[n] = 2, a[n];
			else if (u(o, n)) return s[n] = 3, o[n];
			else if (r !== t && u(r, n)) return s[n] = 4, r[n];
			else Ar && (s[n] = 0);
		}
		let d = Er[n], f, p;
		if (d) return n === "$attrs" && j(e.attrs, "get", ""), d(e);
		if ((f = c.__cssModules) && (f = f[n])) return f;
		if (r !== t && u(r, n)) return s[n] = 4, r[n];
		if (p = l.config.globalProperties, u(p, n)) return p[n];
	},
	set({ _: e }, n, r) {
		let { data: i, setupState: a, ctx: o } = e;
		return Dr(a, n) ? (a[n] = r, !0) : i !== t && u(i, n) ? (i[n] = r, !0) : u(e.props, n) || n[0] === "$" && n.slice(1) in e ? !1 : (o[n] = r, !0);
	},
	has({ _: { data: e, setupState: n, accessCache: r, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(r[c] || e !== t && c[0] !== "$" && u(e, c) || Dr(n, c) || u(o, c) || u(i, c) || u(Er, c) || u(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? u(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function kr(e) {
	return d(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var Ar = !0;
function jr(e) {
	let t = Fr(e), n = e.proxy, i = e.ctx;
	Ar = !1, t.beforeCreate && Nr(t.beforeCreate, e, "bc");
	let { data: a, computed: o, methods: s, watch: c, provide: l, inject: u, created: f, beforeMount: p, mounted: m, beforeUpdate: g, updated: _, activated: y, deactivated: b, beforeDestroy: x, beforeUnmount: ee, destroyed: S, unmounted: te, render: ne, renderTracked: re, renderTriggered: ie, errorCaptured: C, serverPrefetch: ae, expose: w, inheritAttrs: oe, components: se, directives: ce, filters: le } = t;
	if (u && Mr(u, i, null), s) for (let e in s) {
		let t = s[e];
		h(t) && (i[e] = t.bind(n));
	}
	if (a) {
		let t = a.call(n, n);
		v(t) && (e.data = /* @__PURE__ */ Bt(t));
	}
	if (Ar = !0, o) for (let e in o) {
		let t = o[e], a = Z({
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
	if (c) for (let e in c) Pr(c[e], i, n, e);
	if (l) {
		let e = h(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Ln(t, e[t]);
		});
	}
	f && Nr(f, e, "c");
	function T(e, t) {
		d(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (T(dr, p), T(R, m), T(fr, g), T(pr, _), T(ar, y), T(or, b), T(yr, C), T(vr, re), T(_r, ie), T(mr, ee), T(hr, te), T(gr, ae), d(w)) {
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
	ne && e.render === r && (e.render = ne), oe != null && (e.inheritAttrs = oe), se && (e.components = se), ce && (e.directives = ce), ae && Qn(e);
}
function Mr(e, t, n = r) {
	d(e) && (e = Br(e));
	for (let n in e) {
		let r = e[n], i;
		i = v(r) ? "default" in r ? Rn(r.from || n, r.default, !0) : Rn(r.from || n) : Rn(r), /* @__PURE__ */ N(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Nr(e, t, n) {
	pn(d(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Pr(e, t, n, r) {
	let i = r.includes(".") ? Wn(n, r) : () => n[r];
	if (g(e)) {
		let n = t[e];
		h(n) && Vn(i, n);
	} else if (h(e)) Vn(i, e.bind(n));
	else if (v(e)) {
		if (d(e)) e.forEach((e) => Pr(e, t, n, r));
		else {
			let r = h(e.handler) ? e.handler.bind(n) : t[e.handler];
			h(r) && Vn(i, r, e);
		}
	}
}
function Fr(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => Ir(c, e, o, !0)), Ir(c, t, o)), v(t) && a.set(t, c), c;
}
function Ir(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && Ir(e, a, n, !0), i && i.forEach((t) => Ir(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = Lr[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var Lr = {
	data: Rr,
	props: Hr,
	emits: Hr,
	methods: Vr,
	computed: Vr,
	beforeCreate: B,
	created: B,
	beforeMount: B,
	mounted: B,
	beforeUpdate: B,
	updated: B,
	beforeDestroy: B,
	beforeUnmount: B,
	destroyed: B,
	unmounted: B,
	activated: B,
	deactivated: B,
	errorCaptured: B,
	serverPrefetch: B,
	components: Vr,
	directives: Vr,
	watch: Ur,
	provide: Rr,
	inject: zr
};
function Rr(e, t) {
	return t ? e ? function() {
		return s(h(e) ? e.call(this, this) : e, h(t) ? t.call(this, this) : t);
	} : t : e;
}
function zr(e, t) {
	return Vr(Br(e), Br(t));
}
function Br(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function B(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Vr(e, t) {
	return e ? s(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Hr(e, t) {
	return e ? d(e) && d(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : s(/* @__PURE__ */ Object.create(null), kr(e), kr(t ?? {})) : t;
}
function Ur(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = s(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = B(e[r], t[r]);
	return n;
}
function Wr() {
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
var Gr = 0;
function Kr(e, t) {
	return function(n, r = null) {
		h(n) || (n = s({}, n)), r != null && !v(r) && (r = null);
		let i = Wr(), a = /* @__PURE__ */ new WeakSet(), o = [], c = !1, l = i.app = {
			_uid: Gr++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: Da,
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
					let u = l._ceVNode || q(n, r);
					return u.appContext = i, s === !0 ? s = "svg" : s === !1 && (s = void 0), o && t ? t(u, a) : e(u, a, s), c = !0, l._container = a, a.__vue_app__ = l, wa(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				c && (pn(o, l._instance, 16), e(null, l._container), delete l._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, l;
			},
			runWithContext(e) {
				let t = qr;
				qr = l;
				try {
					return e();
				} finally {
					qr = t;
				}
			}
		};
		return l;
	};
}
var qr = null, Jr = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${C(t)}Modifiers`] || e[`${w(t)}Modifiers`];
function Yr(e, n, ...r) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || t, a = r, o = n.startsWith("update:"), s = o && Jr(i, n.slice(7));
	s && (s.trim && (a = r.map((e) => g(e) ? e.trim() : e)), s.number && (a = a.map(ue)));
	let c, l = i[c = se(n)] || i[c = se(C(n))];
	!l && o && (l = i[c = se(w(n))]), l && pn(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, pn(u, e, 6, a);
	}
}
var Xr = /* @__PURE__ */ new WeakMap();
function Zr(e, t, n = !1) {
	let r = n ? Xr : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, c = !1;
	if (!h(e)) {
		let r = (e) => {
			let n = Zr(e, t, !0);
			n && (c = !0, s(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !c ? (v(e) && r.set(e, null), null) : (d(a) ? a.forEach((e) => o[e] = null) : s(o, a), v(e) && r.set(e, o), o);
}
function Qr(e, t) {
	return !e || !a(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), u(e, t[0].toLowerCase() + t.slice(1)) || u(e, w(t)) || u(e, t));
}
function $r(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: s, attrs: c, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = Pn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = ta(u.call(t, e, d, f, m, p, h)), y = c;
		} else {
			let e = t;
			v = ta(e.length > 1 ? e(f, {
				attrs: c,
				slots: s,
				emit: l
			}) : e(f, null)), y = t.props ? c : ti(c);
		}
	} catch (t) {
		Vi.length = 0, mn(t, e, 1), v = q(zi);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(o) && (y = ni(y, a)), b = $i(b, y, !1, !0));
	}
	return n.dirs && (b = $i(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && Xn(Kn(b.type) && Yn(b) || b, n.transition), v = b, Pn(_), v;
}
function ei(e, t = !0) {
	let n;
	for (let t = 0; t < e.length; t++) {
		let r = e[t];
		if (qi(r)) {
			if (r.type !== zi || r.children === "v-if") {
				if (n) return;
				n = r;
			}
		} else return;
	}
	return n;
}
var ti = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || a(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, ni = (e, t) => {
	let n = {};
	for (let r in e) o(r) && r.slice(9) in t || (n[r] = e[r]);
	return n;
};
function ri(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? ii(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (ai(o, r, n) && !Qr(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? !o || ii(r, o, l) : !!o;
	return !1;
}
function ii(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (!u(e, a) || ai(t, e, a) && !Qr(n, a)) return !0;
	}
	return !1;
}
function ai(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && v(r) && v(i) ? !we(r, i) : r !== i;
}
function oi({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var si = {}, ci = () => Object.create(si), li = (e) => Object.getPrototypeOf(e) === si;
function ui(e, t, n, r = !1) {
	let i = {}, a = ci();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), fi(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	e.props = n ? r ? i : /* @__PURE__ */ Vt(i) : e.type.props ? i : a, e.attrs = a;
}
function di(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ M(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (Qr(e.emitsOptions, o)) continue;
				let d = t[o];
				if (c) {
					if (u(a, o)) d !== a[o] && (a[o] = d, l = !0);
					else {
						let t = C(o);
						i[t] = pi(c, s, t, d, e, !1);
					}
				} else d !== a[o] && (a[o] = d, l = !0);
			}
		}
	} else {
		fi(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) t && (u(t, a) || (r = w(a)) !== a && u(t, r)) || (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = pi(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) t && u(t, e) || (delete a[e], l = !0);
	}
	l && at(e.attrs, "set", "");
}
function fi(e, n, r, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (n) for (let t in n) {
		if (ne(t)) continue;
		let l = n[t], d;
		a && u(a, d = C(t)) ? !o || !o.includes(d) ? r[d] = l : (c ||= {})[d] = l : Qr(e.emitsOptions, t) || t in i && l === i[t] || (i[t] = l, s = !0);
	}
	if (o) {
		let n = /* @__PURE__ */ M(r), i = c || t;
		for (let t = 0; t < o.length; t++) {
			let s = o[t];
			r[s] = pi(a, n, s, i[s], e, !u(i, s));
		}
	}
	return s;
}
function pi(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = u(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && h(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = pa(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === w(n)) && (r = !0));
	}
	return r;
}
var mi = /* @__PURE__ */ new WeakMap();
function hi(e, r, i = !1) {
	let a = i ? mi : r.propsCache, o = a.get(e);
	if (o) return o;
	let c = e.props, l = {}, f = [], p = !1;
	if (!h(e)) {
		let t = (e) => {
			p = !0;
			let [t, n] = hi(e, r, !0);
			s(l, t), n && f.push(...n);
		};
		!i && r.mixins.length && r.mixins.forEach(t), e.extends && t(e.extends), e.mixins && e.mixins.forEach(t);
	}
	if (!c && !p) return v(e) && a.set(e, n), n;
	if (d(c)) for (let e = 0; e < c.length; e++) {
		let n = C(c[e]);
		gi(n) && (l[n] = t);
	}
	else if (c) for (let e in c) {
		let t = C(e);
		if (gi(t)) {
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
function gi(e) {
	return e[0] !== "$" && !ne(e);
}
var _i = (e) => e === "_" || e === "_ctx" || e === "$stable", vi = (e) => d(e) ? e.map(ta) : [ta(e)], yi = (e, t, n) => {
	if (t._n) return t;
	let r = Fn((...e) => vi(t(...e)), n);
	return r._c = !1, r;
}, bi = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (_i(n)) continue;
		let i = e[n];
		if (h(i)) t[n] = yi(n, i, r);
		else if (i != null) {
			let e = vi(i);
			t[n] = () => e;
		}
	}
}, xi = (e, t) => {
	let n = vi(t);
	e.slots.default = () => n;
}, Si = (e, t, n) => {
	for (let r in t) (n || !_i(r)) && (e[r] = t[r]);
}, Ci = (e, t, n) => {
	let r = e.slots = ci();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (Si(r, t, n), n && T(r, "_", e, !0)) : bi(t, r);
	} else t && xi(e, t);
}, wi = (e, n, r) => {
	let { vnode: i, slots: a } = e, o = !0, s = t;
	if (i.shapeFlag & 32) {
		let e = n._;
		e ? r && e === 1 ? o = !1 : Si(a, n, r) : (o = !n.$stable, bi(n, a)), s = n;
	} else n && (xi(e, n), s = { default: 1 });
	if (o) for (let e in a) !_i(e) && s[e] == null && delete a[e];
}, V = Li;
function Ti(e) {
	return Ei(e);
}
function Ei(e, i) {
	let a = fe();
	a.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = r, insertStaticContent: _ } = e, v = (e, t, r, i = null, a = null, o = null, s = void 0, c = null, l = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !Ji(e, t) && (i = xe(e), D(e, a, o, !0), e = null), t.patchFlag === -2 && (l = !1, t.dynamicChildren = null), t.dynamicChildren && e && e.dynamicChildren && e.dynamicChildren.hasOnce && (t.dynamicChildren === n && (t.dynamicChildren = []), t.dynamicChildren.hasOnce = !0);
		let { type: u, ref: d, shapeFlag: f } = t;
		switch (u) {
			case Ri:
				y(e, t, r, i);
				break;
			case zi:
				b(e, t, r, i);
				break;
			case Bi:
				e ?? x(t, r, i, s);
				break;
			case H:
				se(e, t, r, i, a, o, s, c, l);
				break;
			default: f & 1 ? te(e, t, r, i, a, o, s, c, l) : f & 6 ? ce(e, t, r, i, a, o, s, c, l) : (f & 64 || f & 128) && u.process(e, t, r, i, a, o, s, c, l, Ce);
		}
		d != null && a ? tr(d, e && e.ref, o, t || e, !t) : d == null && e && e.ref != null && tr(e.ref, null, o, e, !0);
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
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && C(e.children, d, null, r, i, Di(e, a), s, u), _ && In(e, null, r, "created"), ie(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !ne(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && aa(f, r, e);
		}
		_ && In(e, null, r, "beforeMount");
		let v = ki(i, g);
		v ? g.beforeEnter(d) : g && !g.persisted && (d[Ii] = !0), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && V(() => {
			try {
				f && aa(f, r, e), v && g.enter(d), _ && In(e, null, r, "mounted");
			} finally {}
		}, i);
	}, ie = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || Fi(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				ie(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, C = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) {
			let c = e[l] = s ? na(e[l]) : ta(e[l]);
			v(null, c, t, n, r, i, a, o, s);
		}
	}, ae = (e, n, r, i, a, o, s) => {
		let l = n.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = n;
		u |= e.patchFlag & 16;
		let m = e.props || t, h = n.props || t, g;
		if (r && Oi(r, !1), (g = h.onVnodeBeforeUpdate) && aa(g, r, n, e), f && In(n, e, r, "beforeUpdate"), r && Oi(r, !0), d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length) && (u = 0, s = !1, d = null), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? w(e.dynamicChildren, d, l, r, i, Di(n, a), o) : s || pe(e, n, l, null, r, i, Di(n, a), o, !1), u > 0) {
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
		((g = h.onVnodeUpdated) || f) && V(() => {
			g && aa(g, r, n, e), f && In(n, e, r, "updated");
		}, i);
	}, w = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el || Pi(c), d = u && (c.type === H || !Ji(c, l) || c.shapeFlag & 198) ? m(u) : n;
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
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), C(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (w(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && Ai(e, t, !0)) : pe(e, t, n, f, i, a, s, c, l);
	}, ce = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : T(t, n, r, i, a, o, c) : ue(e, t, c);
	}, T = (e, t, n, r, i, a, o) => {
		let s = e.component = la(e, r, i);
		if (ir(e) && (s.ctx.renderer = Ce), _a(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, de, o, a), !e.el) {
				let r = s.subTree = q(zi);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else de(s, e, t, n, i, a, o);
	}, ue = (e, t, n) => {
		let r = t.component = e.component;
		if (ri(e, t, n)) {
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
					let n = Mi(e);
					if (n) {
						t && (t.el = c.el, E(e, t, o)), n.asyncDep.then(() => {
							let t = () => {
								e.job.flags & 8 || (i && i.pendingBranch ? V(t, i) : l());
							};
							t.flags = 48, V(t, i);
						});
						return;
					}
				}
				let u = t, d;
				Oi(e, !1), t ? (t.el = c.el, E(e, t, o)) : t = c, n && le(n), (d = t.props && t.props.onVnodeBeforeUpdate) && aa(d, s, t, c), Oi(e, !0);
				let f = $r(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el || Pi(p)), xe(p), e, i, a), t.el = f.el, u === null && oi(e, f.el), r && V(r, i), (d = t.props && t.props.onVnodeUpdated) && V(() => aa(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = rr(t);
				if (Oi(e, !1), l && le(l), !m && (o = c && c.onVnodeBeforeMount) && aa(o, d, t), Oi(e, !0), s && Te) {
					let t = () => {
						e.subTree = $r(e), Te(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = $r(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && V(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					V(() => aa(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && rr(d.vnode) && d.vnode.shapeFlag & 256) && e.a && V(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Ne(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => wn(u), Oi(e, !0), l();
	}, E = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, di(e, t.props, r, n), wi(e, t.children, n), Je(), Dn(e), Ye();
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
		m & 8 ? (u & 16 && be(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? he(l, d, n, r, i, a, o, s, c) : be(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && C(d, n, r, i, a, o, s, c));
	}, me = (e, t, r, i, a, o, s, c, l) => {
		e ||= n, t ||= n;
		let u = e.length, d = t.length, f = Math.min(u, d), p = 0;
		for (; p < f; p++) {
			let n = t[p] = l ? na(t[p]) : ta(t[p]);
			v(e[p], n, r, null, a, o, s, c, l);
		}
		u > d ? be(e, a, o, !0, !1, f) : C(t, r, i, a, o, s, c, l, f);
	}, he = (e, t, r, i, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let n = e[u], i = t[u] = l ? na(t[u]) : ta(t[u]);
			if (Ji(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let n = e[f], i = t[p] = l ? na(t[p]) : ta(t[p]);
			if (Ji(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, n = e < d ? t[e].el : i;
				for (; u <= p;) v(null, t[u] = l ? na(t[u]) : ta(t[u]), r, n, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) D(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? na(t[u]) : ta(t[u]);
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
				else for (_ = h; _ <= p; _++) if (S[_ - h] === 0 && Ji(n, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? D(n, a, o, !0) : (S[i - h] = u + 1, i >= ee ? ee = i : x = !0, v(n, t[i], r, null, a, o, s, c, l), y++);
			}
			let te = x ? ji(S) : n;
			for (_ = te.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, n = t[e], f = t[e + 1], p = e + 1 < d ? f.el || Pi(f) : i;
				S[u] === 0 ? v(null, n, r, p, a, o, s, c, l) : x && (_ < 0 || u !== te[_] ? ge(n, r, p, 2) : _--);
			}
		}
	}, ge = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) ge(e.component.subTree, t, n, r);
		else if (d & 128) e.suspense.move(t, n, r);
		else if (d & 64) c.move(e, t, n, Ce);
		else if (c === H) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) ge(u[e], t, n, r);
			o(e.anchor, t, n);
		} else if (c === Bi) ee(e, t, n);
		else if (r !== 2 && d & 1 && l) {
			if (r === 0) l.persisted && !a[qn] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), V(() => l.enter(a), i));
			else {
				let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
					e.ctx.isUnmounted ? s(a) : o(a, t, n);
				}, d = () => {
					let e = a._isLeaving || !!a[qn];
					a._isLeaving && a[qn](!0), l.persisted && !e ? u() : r(a, () => {
						u(), c && c();
					});
				};
				i ? i(a, u, d) : d();
			}
		} else o(a, t, n);
	}, D = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if ((d === -2 || l && l.hasOnce) && (i = !1), s != null && (Je(), tr(s, null, n, e, !0), Ye()), p == null || e.ctx && e.ctx !== t || (t.renderCache[p] = void 0), u & 256 && t.ctx.deactivate(e)) return;
		let h = u & 1 && f, g = !rr(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && aa(_, t, e), u & 6) ye(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && In(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, Ce, r) : l && !l.hasOnce && (a !== H || d > 0 && d & 64) ? be(l, t, n, !1, !0) : (a === H && d & 384 || !i && u & 16) && be(c, t, n), r && _e(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && V(() => {
			_ && aa(_, t, e), h && In(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, _e = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e, a = t === H;
		if (a && !i) {
			ve(n, r);
			return;
		}
		if (t === Bi) {
			S(e), i && !i.persisted && i.afterLeave && i.afterLeave();
			return;
		}
		let o = a ? Zn(e) : e, c = () => {
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
		Ni(c), Ni(l), r && le(r), i.stop(), a ? (a.flags |= 8, D(o, e, t, n)) : o && (o.transition = e.vnode.transition, D(o, e, t, n)), s && V(s, t);
		let u = () => {
			e.isUnmounted = !0;
		};
		u.flags = 16, V(u, t);
	}, be = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) D(e[o], t, n, r, i);
	}, xe = (e) => {
		if (e.shapeFlag & 6) return xe(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Gn];
		return n ? h(n) : t;
	}, Se = (e, t, n) => {
		An(() => {
			e == null ? t._vnode && D(t._vnode, null, null, !0) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e;
		}, e && t._vnode ? void 0 : e && e.component ? e.component.uid : ca());
	}, Ce = {
		p: v,
		um: D,
		m: ge,
		r: _e,
		mt: T,
		mc: C,
		pc: pe,
		pbc: w,
		n: xe,
		o: e
	}, we, Te;
	return i && ([we, Te] = i(Ce)), {
		render: Se,
		hydrate: we,
		createApp: Kr(Se, we)
	};
}
function Di({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Oi({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function ki(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ai(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (d(r) && d(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = na(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Ai(t, a)), a.type === Ri && (a.patchFlag === -1 && (a = i[e] = na(a)), a.el = t.el), a.type === zi && !a.el && (a.el = t.el);
	}
}
function ji(e) {
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
function Mi(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Mi(t);
}
function Ni(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Pi(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	if (t) return Pi(t.subTree);
	let n = e.suspense;
	return n && n.activeBranch ? Pi(n.activeBranch) : null;
}
var Fi = (e) => e.__isSuspense, Ii = /* @__PURE__ */ Symbol("_deferredEnter");
function Li(e, t) {
	t && t.pendingBranch ? d(e) ? t.effects.push(...e) : t.effects.push(e) : En(e);
}
var H = /* @__PURE__ */ Symbol.for("v-fgt"), Ri = /* @__PURE__ */ Symbol.for("v-txt"), zi = /* @__PURE__ */ Symbol.for("v-cmt"), Bi = /* @__PURE__ */ Symbol.for("v-stc"), Vi = [], U = null;
function W(e = !1) {
	Vi.push(U = e ? null : []);
}
function Hi() {
	Vi.pop(), U = Vi[Vi.length - 1] || null;
}
var Ui = 1;
function Wi(e, t = !1) {
	Ui += e, e < 0 && U && t && (U.hasOnce = !0);
}
function Gi(e) {
	return e.dynamicChildren = Ui > 0 ? U || n : null, Hi(), Ui > 0 && U && U.push(e), e;
}
function G(e, t, n, r, i, a) {
	return Gi(K(e, t, n, r, i, a, !0));
}
function Ki(e, t, n, r, i) {
	return Gi(q(e, t, n, r, i, !0));
}
function qi(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function Ji(e, t) {
	return e.type === t.type && e.key === t.key;
}
var Yi = ({ key: e }) => e ?? null, Xi = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : g(e) || /* @__PURE__ */ N(e) || h(e) ? {
	i: I,
	r: e,
	k: t,
	f: !!n
} : e);
function K(e, t = null, n = null, r = 0, i = null, a = e === H ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && Yi(t),
		ref: t && Xi(t),
		scopeId: Nn,
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
		ctx: I
	};
	return s ? (ra(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= g(n) ? 8 : 16), Ui > 0 && !o && U && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && U.push(c), c;
}
var q = Zi;
function Zi(e, t = null, n = null, r = 0, i = null, a = !1) {
	if (e && e !== xr || (e = zi), qi(e)) {
		let r = $i(e, t, !0);
		return n && ra(r, n), Ui > 0 && !a && U && (r.shapeFlag & 6 ? U[U.indexOf(e)] = r : U.push(r)), r.patchFlag = -2, r;
	}
	if (Ea(e) && (e = e.__vccOpts), t) {
		t = Qi(t);
		let { class: e, style: n } = t;
		e && !g(e) && (t.class = D(e)), v(n) && (/* @__PURE__ */ qt(n) && !d(n) && (n = s({}, n)), t.style = E(n));
	}
	let o = g(e) ? 1 : Fi(e) ? 128 : Kn(e) ? 64 : v(e) ? 4 : h(e) ? 2 : 0;
	return K(e, t, n, r, i, o, a, !0);
}
function Qi(e) {
	return e ? /* @__PURE__ */ qt(e) ? s({}, e) : li(e) ? s({}, e[xa] || e) : e : null;
}
function $i(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? ia(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && Yi(l),
		ref: t && t.ref ? n && a ? d(a) ? a.concat(Xi(t)) : [a, Xi(t)] : Xi(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== H ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && $i(e.ssContent),
		ssFallback: e.ssFallback && $i(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce,
		cacheIndex: e.cacheIndex
	};
	return c && r && Xn(u, c.clone(u)), u;
}
function J(e = " ", t = 0) {
	return q(Ri, null, e, t);
}
function ea(e, t) {
	let n = q(Bi, null, e);
	return n.staticCount = t, n;
}
function Y(e = "", t = !1) {
	return t ? (W(), Ki(zi, null, e)) : q(zi, null, e);
}
function ta(e) {
	return e == null || typeof e == "boolean" ? q(zi) : d(e) ? q(H, null, e.slice()) : qi(e) ? na(e) : q(Ri, null, String(e));
}
function na(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : $i(e);
}
function ra(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (d(t)) n = 16;
	else if (typeof t == "object") {
		if (r & 65) {
			let n = t.default;
			n && (n._c && (n._d = !1), ra(e, n()), n._c && (n._d = !0));
			return;
		}
		{
			n = 32;
			let r = t._;
			!r && !li(t) ? t._ctx = I : r === 3 && I && (I.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
		}
	} else if (h(t)) {
		if (r & 65) {
			ra(e, { default: t });
			return;
		}
		t = {
			default: t,
			_ctx: I
		}, n = 32;
	} else t = String(t), r & 64 ? (n = 16, t = [J(t)]) : n = 8;
	e.children = t, e.shapeFlag |= n;
}
function ia(...e) {
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
function aa(e, t, n, r = null) {
	pn(e, t, 7, [n, r]);
}
var oa = /* @__PURE__ */ Wr(), sa = 0;
function ca() {
	return sa;
}
function la(e, n, r) {
	let i = e.type, a = (n ? n.appContext : e.appContext) || oa, o = {
		uid: sa++,
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
		scope: new ke(!0),
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
		propsOptions: hi(i, a),
		emitsOptions: Zr(i, a),
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
	return o.ctx = { _: o }, o.root = n ? n.root : o, o.emit = Yr.bind(null, o), e.ce && e.ce(o), o;
}
var X = null, ua = () => X || I, da, fa;
{
	let e = fe(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	da = t("__VUE_INSTANCE_SETTERS__", (e) => X = e), fa = t("__VUE_SSR_SETTERS__", (e) => ga = e);
}
var pa = (e) => {
	let t = X;
	return da(e), e.scope.on(), () => {
		e.scope.off(), da(t);
	};
}, ma = () => {
	X && X.scope.off(), da(null);
};
function ha(e) {
	return e.vnode.shapeFlag & 4;
}
var ga = !1;
function _a(e, t = !1, n = !1) {
	t && fa(t);
	let { props: r, children: i } = e.vnode, a = ha(e);
	ui(e, r, a, t), Ci(e, i, n || t);
	let o = a ? va(e, t) : void 0;
	return t && fa(!1), o;
}
function va(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Or);
	let { setup: r } = n;
	if (r) {
		Je();
		let n = e.setupContext = r.length > 1 ? Ca(e) : null, i = pa(e), a = fn(r, e, 0, [e.props, n]), o = y(a);
		if (Ye(), i(), (o || e.sp) && !rr(e) && Qn(e), o) {
			if (a.then(ma, ma), t) return a.then((n) => {
				fa(!0);
				try {
					ya(e, n, t);
				} finally {
					fa(!1);
				}
			}).catch((t) => {
				mn(t, e, 0, void 0, !0), e.ssrRender = (e, t) => t("<!---->");
			});
			e.asyncDep = a;
		} else ya(e, a, t);
	} else ba(e, t);
}
function ya(e, t, n) {
	h(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : v(t) && (e.setupState = nn(t)), ba(e, n);
}
function ba(e, t, n) {
	let i = e.type;
	e.render ||= i.render || r;
	{
		let t = pa(e);
		Je();
		try {
			jr(e);
		} finally {
			Ye(), t();
		}
	}
}
var xa = /* @__PURE__ */ Symbol(), Sa = { get(e, t) {
	return j(e, "get", ""), t === xa ? e : e[t];
} };
function Ca(e) {
	return {
		attrs: new Proxy(e.attrs, Sa),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function wa(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(nn(Jt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Er) return Er[n](e);
		},
		has(e, t) {
			return t in e || t in Er;
		}
	}) : e.proxy;
}
function Ta(e, t = !0) {
	return h(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ea(e) {
	return h(e) && "__vccOpts" in e;
}
var Z = (e, t) => /* @__PURE__ */ an(e, t, ga), Da = "3.5.45", Oa = void 0, ka = typeof window < "u" && window.trustedTypes;
if (ka) try {
	Oa = /* @__PURE__ */ ka.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var Aa = Oa ? (e) => Oa.createHTML(e) : (e) => e, ja = "http://www.w3.org/2000/svg", Ma = "http://www.w3.org/1998/Math/MathML", Na = typeof document < "u" ? document : null, Pa = Na && /* @__PURE__ */ Na.createElement("template"), Fa = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? Na.createElementNS(ja, e) : t === "mathml" ? Na.createElementNS(Ma, e) : n ? Na.createElement(e, { is: n }) : Na.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => Na.createTextNode(e),
	createComment: (e) => Na.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => Na.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), i !== a && (i = i.nextSibling););
		else {
			Pa.innerHTML = Aa(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = Pa.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, Ia = /* @__PURE__ */ Symbol("_vtc");
function La(e, t, n) {
	let r = e[Ia];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var Ra = /* @__PURE__ */ Symbol("_vod"), za = /* @__PURE__ */ Symbol("_vsh"), Ba = {
	name: "show",
	beforeMount(e, { value: t }, { transition: n }) {
		e[Ra] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Va(e, t);
	},
	mounted(e, { value: t }, { transition: n }) {
		n && t && n.enter(e);
	},
	updated(e, { value: t, oldValue: n }, { transition: r }) {
		!t != !n && (r ? t ? (r.beforeEnter(e), Va(e, !0), r.enter(e)) : r.leave(e, () => {
			Va(e, !1);
		}) : Va(e, t));
	},
	beforeUnmount(e, { value: t }) {
		Va(e, t);
	}
};
function Va(e, t) {
	e.style.display = t ? e[Ra] : "none", e[za] = !t;
}
var Ha = /* @__PURE__ */ Symbol(""), Ua = /(?:^|;)\s*display\s*:/;
function Wa(e, t, n) {
	let r = e.style, i = g(n), a = !1;
	if (n && !i) {
		if (t) {
			if (g(t)) for (let e of t.split(";")) {
				let t = e.slice(0, e.indexOf(":")).trim();
				n[t] ?? Ka(r, t, "");
			}
			else for (let e in t) n[e] ?? Ka(r, e, "");
		}
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? Ka(r, i, "") : Xa(e, i, !g(t) && t ? t[i] : void 0, o) || Ka(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[Ha];
			e && (n += ";" + e), r.cssText = n, a = Ua.test(n);
		}
	} else t && e.removeAttribute("style");
	Ra in e && (i && t === n || (e[Ra] = a ? r.display : ""), e[za] && (r.display = "none"));
}
var Ga = /\s*!important$/;
function Ka(e, t, n) {
	if (d(n)) n.forEach((n) => Ka(e, t, n));
	else if (n ??= "", t.startsWith("--")) Ga.test(n) ? e.setProperty(t, n.replace(Ga, ""), "important") : e.setProperty(t, n);
	else {
		let r = Ya(e, t);
		Ga.test(n) ? e.setProperty(w(r), n.replace(Ga, ""), "important") : e[r] = n;
	}
}
var qa = [
	"Webkit",
	"Moz",
	"ms"
], Ja = {};
function Ya(e, t) {
	let n = Ja[t];
	if (n) return n;
	let r = C(t);
	if (r !== "filter" && r in e) return Ja[t] = r;
	r = oe(r);
	for (let n = 0; n < qa.length; n++) {
		let i = qa[n] + r;
		if (i in e) return Ja[t] = i;
	}
	return t;
}
function Xa(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && g(r) && n === r;
}
var Za = "http://www.w3.org/1999/xlink";
function Qa(e, t, n, r, i, a = ve(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Za, t.slice(6, t.length)) : e.setAttributeNS(Za, t, n) : n == null || a && !ye(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : _(n) ? String(n) : n);
}
function $a(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? Aa(n) : n);
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
function eo(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function to(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var no = /* @__PURE__ */ Symbol("_vei");
function ro(e, t, n, r, i = null) {
	let a = e[no] || (e[no] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = oo(t);
		r ? eo(e, n, a[t] = uo(r, i), s) : o && (to(e, n, o, s), a[t] = void 0);
	}
}
var io = /(Once|Passive|Capture)$/, ao = /^on:?(?:Once|Passive|Capture)$/;
function oo(e) {
	let t, n;
	for (; (n = e.match(io)) && !ao.test(e);) t ||= {}, e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
	return [e[2] === ":" ? e.slice(3) : w(e.slice(2)), t];
}
var so = 0, co = /* @__PURE__ */ Promise.resolve(), lo = () => so ||= (co.then(() => so = 0), Date.now());
function uo(e, t) {
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
				e && pn(e, t, 5, a);
			}
		} else pn(r, t, 5, [e]);
	};
	return n.value = e, n.attached = lo(), n;
}
var fo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, po = (e, t, n, r, i, s) => {
	let c = i === "svg";
	t === "class" ? La(e, r, c) : t === "style" ? Wa(e, n, r) : a(t) ? o(t) || ro(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), 1) : t[0] === "^" ? (t = t.slice(1), 0) : mo(e, t, r, c)) ? ($a(e, t, r), e.tagName.includes("-") || t !== "value" && t !== "checked" && t !== "selected" || Qa(e, t, r, c, s, t !== "value")) : e._isVueCE && (ho(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !g(r))) ? $a(e, C(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Qa(e, t, r, c));
};
function mo(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && fo(t) && h(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return fo(t) && g(n) ? !1 : t in e;
}
function ho(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = C(t);
	return Array.isArray(n) ? n.some((e) => C(e) === r) : Object.keys(n).some((e) => C(e) === r);
}
var go = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return d(t) ? (e) => le(t, e) : t;
};
function _o(e) {
	e.target.composing = !0;
}
function vo(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var yo = /* @__PURE__ */ Symbol("_assign"), bo = /* @__PURE__ */ Symbol("_initialValue");
function xo(e, t, n) {
	return t && (e = e.trim()), n && (e = ue(e)), e;
}
var Q = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e.parentNode && (e.type === "text" ? e[bo] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[bo] = e.defaultValue.replace(/\r\n?/g, "\n"))), e[yo] = go(i);
		let a = r || i.props && i.props.type === "number";
		eo(e, t ? "change" : "input", (t) => {
			t.target.composing || e[yo](xo(e.value, n, a));
		}), (n || a) && eo(e, "change", () => {
			e.value = xo(e.value, n, a);
		}), t || (eo(e, "compositionstart", _o), eo(e, "compositionend", vo), eo(e, "change", vo));
	},
	mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
		let i = t ?? "", a = e[bo];
		delete e[bo], a !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== a ? e[yo](xo(e.value, n, r)) : e.value = i;
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[yo] = go(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? ue(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, So = {
	deep: !0,
	created(e, t, n) {
		e[yo] = go(n), eo(e, "change", () => {
			let t = e._modelValue, n = Do(e), r = e.checked, i = e[yo];
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
			} else i(Oo(e, r));
		});
	},
	mounted: Co,
	beforeUpdate(e, t, n) {
		e[yo] = go(n), Co(e, t, n);
	}
};
function Co(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (d(t)) i = Te(t, r.props.value) > -1;
	else if (p(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = we(t, Oo(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var wo = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		e._modelValue = t, eo(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? ue(Do(e)) : Do(e)), r = e.multiple, i = r ? p(e._modelValue) ? new Set(t) : t : t[0], a = e._pendingValue = [r, r ? d(i) ? t.slice() : t : i];
			try {
				e[yo](i);
			} finally {
				Sn(() => {
					e._pendingValue === a && (e._pendingValue = void 0);
				});
			}
		}), e[yo] = go(r);
	},
	mounted(e, { value: t, modifiers: { number: n } }) {
		Eo(e, t, n);
	},
	beforeUpdate(e, { value: t }, n) {
		e._modelValue = t, e[yo] = go(n);
	},
	updated(e, { value: t, modifiers: { number: n } }) {
		let r = e._pendingValue;
		e._pendingValue = void 0, r && r[0] === e.multiple && To(t, r[1], r[0]) || Eo(e, t, n);
	}
};
function To(e, t, n) {
	if (!n || d(e)) return we(e, t);
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
					o.selected = e === "string" || e === "number" ? t.some((e) => String(e) === String(s)) : Te(t, s) > -1;
				} else o.selected = t.has(s) || n && typeof s == "string" && t.has(ue(s));
			} else if (we(Do(o), t)) {
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
var ko = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], Ao = {
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
	exact: (e, t) => ko.some((n) => e[`${n}Key`] && !t.includes(n))
}, jo = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = Ao[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, Mo = {
	esc: "escape",
	space: " ",
	up: "arrow-up",
	left: "arrow-left",
	right: "arrow-right",
	down: "arrow-down",
	delete: "backspace"
}, No = (e, t) => {
	let n = e._withKeys ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n) => {
		if (!("key" in n)) return;
		let r = w(n.key);
		if (t.some((e) => e === r || Mo[e] === r)) return e(n);
	}));
}, Po = /* @__PURE__ */ s({ patchProp: po }, Fa), Fo;
function Io() {
	return Fo ||= Ti(Po);
}
var Lo = ((...e) => {
	let t = Io().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = zo(e);
		if (!r) return;
		let i = t._component;
		h(i) || i.render || i.template || (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, Ro(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function Ro(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function zo(e) {
	return g(e) ? document.querySelector(e) : e;
}
// src/vue/poetry/IdeaCollections.vue
var Bo = { class: "section-title" }, Vo = {
	key: 0,
	class: "btn ghost small",
	"data-action": "nav",
	"data-nav": "ideas"
}, Ho = ["data-idea-collection"], Uo = { class: "idea-badge" }, Wo = {
	key: 0,
	class: "generator-story"
}, Go = {
	key: 1,
	class: "song-has-lyrics"
}, Ko = { key: 0 }, qo = {
	key: 3,
	class: "generator-detail"
}, Jo = { class: "actions" }, Yo = [
	"data-action",
	"data-id",
	"data-i",
	"aria-label"
], Xo = ["innerHTML"], Zo = {
	key: 1,
	class: "empty"
}, Qo = ["innerHTML"], $o = {
	__name: "IdeaCollections",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (W(!0), G(H, null, z(e.model.groups, (t) => (W(), G(H, { key: t.kind }, [K("div", Bo, [K("h2", null, O(t.title) + " (" + O(t.items.length) + ")", 1), t.kind === "generated" ? (W(), G("button", Vo, "Создать идеи →")) : Y("", !0)]), t.items.length ? (W(), G("div", {
			key: 0,
			class: "idea-grid",
			"data-idea-collection": t.kind
		}, [(W(!0), G(H, null, z(t.items, (n) => (W(), Ki(Sr(t.kind === "academy" ? "div" : "article"), {
			key: n.key,
			class: D(["idea", { "generated-card": t.kind === "generated" }])
		}, {
			default: Fn(() => [
				K("div", Uo, O(n.badge), 1),
				K("h3", null, O(n.title), 1),
				K("p", null, O(n.pitch), 1),
				t.kind === "generated" ? (W(), G("p", Wo, O(n.storyLine), 1)) : Y("", !0),
				t.kind === "manual" && n.lyrics ? (W(), G("p", Go, "🎼 Текст песни сохранён · " + O(n.sunoLyrics ? "теги для Suno готовы" : "без разметки"), 1)) : Y("", !0),
				n.hook || t.kind === "generated" ? (W(), Ki(Sr(t.kind === "generated" ? "div" : "p"), {
					key: 2,
					class: "generator-hook"
				}, {
					default: Fn(() => [t.kind === "generated" ? (W(), G("span", Ko, "ХУК ПРИПЕВА")) : Y("", !0), K("strong", null, O(n.hook), 1)]),
					_: 2
				}, 1024)) : Y("", !0),
				t.kind === "generated" && n.detail ? (W(), G("p", qo, "Твоя деталь: " + O(n.detail), 1)) : Y("", !0),
				K("div", Jo, [(W(!0), G(H, null, z(n.actions, (t) => (W(), G("button", {
					key: t.name,
					type: "button",
					class: D(t.className),
					"data-action": t.name,
					"data-id": n.id,
					"data-i": n.index,
					"aria-label": t.label || void 0
				}, [t.icon ? (W(), G("span", {
					key: 0,
					"aria-hidden": "true",
					innerHTML: e.model.icons[t.icon]
				}, null, 8, Xo)) : Y("", !0), J(O(t.text), 1)], 10, Yo))), 128))])
			]),
			_: 2
		}, 1032, ["class"]))), 128))], 8, Ho)) : (W(), G("div", Zo, [
			K("span", {
				"aria-hidden": "true",
				innerHTML: e.model.icons.music
			}, null, 8, Qo),
			K("strong", null, O(t.emptyTitle), 1),
			J(O(t.emptyText), 1)
		]))], 64))), 128));
	}
};
// src/vue/poetry/legacyIdeaCollectionsBridge.js
function es({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_IDEA_COLLECTIONS, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-idea-collections");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, $o, { model: o });
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
var ts = { class: "section-title" }, ns = {
	key: 0,
	class: "saved-list"
}, rs = { class: "row" }, is = { class: "actions" }, as = ["data-id"], os = ["innerHTML"], ss = ["data-id"], cs = ["data-id", "aria-label"], ls = ["innerHTML"], us = { class: "sub" }, ds = {
	key: 1,
	class: "empty"
}, fs = ["innerHTML"], ps = {
	__name: "PromptCollection",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (W(), G(H, null, [K("div", ts, [K("h2", null, "Сохранённые промпты (" + O(e.model.items.length) + ")", 1)]), e.model.items.length ? (W(), G("div", ns, [(W(!0), G(H, null, z(e.model.items, (t) => (W(), G("article", {
			key: t.id,
			class: "saved-item"
		}, [
			K("div", rs, [K("h3", null, O(t.title), 1), K("div", is, [
				K("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "copy-saved",
					"data-id": t.id
				}, [K("span", {
					"aria-hidden": "true",
					innerHTML: e.model.icons.copy
				}, null, 8, os), n[0] ||= J(" Копировать", -1)], 8, as),
				K("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "edit-manual-prompt",
					"data-id": t.id
				}, "Изменить", 8, ss),
				K("button", {
					type: "button",
					class: "btn danger small",
					"data-action": "delete-saved",
					"data-id": t.id,
					"aria-label": "Удалить промпт «" + t.title + "»"
				}, [K("span", {
					"aria-hidden": "true",
					innerHTML: e.model.icons.trash
				}, null, 8, ls)], 8, cs)
			])]),
			K("p", null, O(t.text), 1),
			K("span", us, O(t.genre) + " · " + O(t.date), 1)
		]))), 128))])) : (W(), G("div", ds, [
			K("span", {
				"aria-hidden": "true",
				innerHTML: e.model.icons.music
			}, null, 8, fs),
			n[1] ||= K("strong", null, "Промптов пока нет", -1),
			n[2] ||= J("Сохрани первый здесь или в Suno Studio.", -1)
		]))], 64));
	}
};
// src/vue/account/legacyPromptCollectionBridge.js
function ms({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PROMPT_LIST, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-prompts-list");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, ps, { model: o });
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
var hs = { class: "field" }, gs = { class: "field" }, _s = ["value"], vs = { class: "field" }, ys = {
	id: "sb-prompt-char-count",
	class: "sub"
}, bs = {
	__name: "PromptEditor",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = /* @__PURE__ */ Bt({ ...e.initial.values }), n = Z(() => t.text.length);
		return (r, i) => (W(), G(H, null, [
			K("h3", null, O(e.initial.editing ? "Редактирование промпта" : "Новый промпт для Suno"), 1),
			K("div", hs, [i[3] ||= K("label", { for: "custom-prompt-title" }, "Название", -1), L(K("input", {
				id: "custom-prompt-title",
				"onUpdate:modelValue": i[0] ||= (e) => t.title = e,
				maxlength: "100",
				placeholder: "Например, Романтичный афро-поп"
			}, null, 512), [[Q, t.title]])]),
			K("div", gs, [i[4] ||= K("label", { for: "custom-prompt-genre" }, "Жанр", -1), L(K("select", {
				id: "custom-prompt-genre",
				"onUpdate:modelValue": i[1] ||= (e) => t.genre = e
			}, [(W(!0), G(H, null, z(e.initial.genres, (e) => (W(), G("option", {
				key: e.id,
				value: e.id
			}, O(e.name), 9, _s))), 128))], 512), [[wo, t.genre]])]),
			K("div", vs, [
				i[5] ||= K("label", { for: "custom-prompt-text" }, "Текст промпта (до 1000 символов)", -1),
				L(K("textarea", {
					id: "custom-prompt-text",
					"onUpdate:modelValue": i[2] ||= (e) => t.text = e,
					rows: "7",
					maxlength: "1000",
					"aria-describedby": "sb-prompt-char-count",
					placeholder: "Modern Russian-language afropop, 105 BPM, clean vocals, groovy bass..."
				}, null, 512), [[Q, t.text]]),
				K("span", ys, O(n.value) + " / 1000 символов", 1)
			])
		], 64));
	}
};
// src/vue/account/legacyPromptEditorBridge.js
function xs({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PROMPT_EDITOR, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-prompt-form");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, bs, { initial: o });
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
var Ss = { class: "account-back" }, Cs = {
	type: "button",
	class: "btn ghost small",
	"data-action": "workspace-back"
}, ws = { class: "section-title" }, Ts = {
	key: 0,
	class: "genre-grid"
}, Es = ["data-id"], Ds = { class: "genre-content" }, Os = { class: "kicker" }, ks = { class: "foot" }, As = {
	key: 1,
	class: "empty"
}, js = { class: "section-title" }, Ms = {
	key: 2,
	class: "idea-grid"
}, Ns = { class: "idea-badge" }, Ps = { class: "actions" }, Fs = ["data-id", "data-i"], Is = ["data-id", "data-i"], Ls = {
	key: 3,
	class: "empty"
}, Rs = { class: "section-title" }, zs = {
	key: 4,
	class: "idea-grid"
}, Bs = { class: "idea-badge" }, Vs = ["data-id"], Hs = {
	key: 5,
	class: "empty"
}, Us = { class: "section-title" }, Ws = {
	key: 6,
	class: "idea-grid"
}, Gs = { class: "idea-badge" }, Ks = { class: "generator-story" }, qs = { class: "generator-hook" }, Js = {
	key: 0,
	class: "generator-detail"
}, Ys = { class: "actions" }, Xs = ["data-id"], Zs = ["data-id"], Qs = ["data-id", "aria-label"], $s = {
	key: 7,
	class: "empty"
}, ec = { class: "section-title" }, tc = {
	key: 8,
	class: "saved-list"
}, nc = { class: "row" }, rc = { class: "actions" }, ic = ["data-id"], ac = ["data-id", "aria-label"], oc = { class: "sub" }, sc = {
	key: 9,
	class: "empty"
}, cc = {
	__name: "LibraryCollection",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (W(), G(H, null, [
			K("div", Ss, [K("button", Cs, O(e.model.backLabel), 1)]),
			n[11] ||= K("header", { class: "heading" }, [K("h1", null, "Моя библиотека"), K("p", null, "Любимые жанры, идеи и промпты. Сохраняются локально в этом браузере.")], -1),
			K("div", ws, [K("h2", null, "Избранные жанры (" + O(e.model.genres.length) + ")", 1)]),
			e.model.genres.length ? (W(), G("div", Ts, [(W(!0), G(H, null, z(e.model.genres, (e) => (W(), G("button", {
				key: e.id,
				type: "button",
				class: "genre-card",
				style: E({ "--accent": e.color }),
				"data-action": "genre",
				"data-id": e.id
			}, [n[1] ||= K("div", { class: "art" }, null, -1), K("div", Ds, [K("div", null, [
				K("div", Os, O(e.family) + " · " + O(e.bpm[0]) + "–" + O(e.bpm[1]) + " BPM", 1),
				K("h3", null, O(e.name), 1),
				K("p", null, O(e.tagline), 1)
			]), K("div", ks, [K("span", null, O(e.era), 1), n[0] ||= K("span", { style: { color: "#ffacd9" } }, "Открыть →", -1)])])], 12, Es))), 128))])) : (W(), G("div", As, [...n[2] ||= [K("strong", null, "Пока нет избранных жанров", -1), J("Добавляй их в карточках Академии.", -1)]])),
			K("div", js, [K("h2", null, "Сохранённые идеи (" + O(e.model.ideas.length) + ")", 1)]),
			e.model.ideas.length ? (W(), G("div", Ms, [(W(!0), G(H, null, z(e.model.ideas, (e) => (W(), G("article", {
				key: e.key,
				class: "idea"
			}, [
				K("div", Ns, O(e.genre) + " · " + O(e.mood), 1),
				K("h3", null, O(e.title), 1),
				K("p", null, O(e.pitch), 1),
				K("div", Ps, [K("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "idea-use",
					"data-id": e.genreId,
					"data-i": e.index
				}, "В студию", 8, Fs), K("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "idea-save",
					"data-id": e.genreId,
					"data-i": e.index
				}, "Сохранено", 8, Is)])
			]))), 128))])) : (W(), G("div", Ls, [...n[3] ||= [K("strong", null, "Нет сохранённых идей", -1), J("Найди интересный сюжет и нажми «Сохранить».", -1)]])),
			K("div", Rs, [K("h2", null, "Мои собственные идеи (" + O(e.model.own.length) + ")", 1), n[4] ||= K("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "nav",
				"data-nav": "myideas"
			}, "Добавить или изменить →", -1)]),
			e.model.own.length ? (W(), G("div", zs, [(W(!0), G(H, null, z(e.model.own, (e) => (W(), G("article", {
				key: e.id,
				class: "idea"
			}, [
				K("div", Bs, O(e.genre), 1),
				K("h3", null, O(e.title), 1),
				K("p", null, O(e.pitch), 1),
				K("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "edit-manual-idea",
					"data-id": e.id
				}, "Открыть запись →", 8, Vs)
			]))), 128))])) : (W(), G("div", Hs, [...n[5] ||= [K("strong", null, "Пока нет своих идей", -1), J("Добавь их в личном кабинете.", -1)]])),
			K("div", Us, [K("h2", null, "Идеи из генератора (" + O(e.model.generated.length) + ")", 1), n[6] ||= K("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "nav",
				"data-nav": "ideas"
			}, "＋ Создать ещё", -1)]),
			e.model.generated.length ? (W(), G("div", Ws, [(W(!0), G(H, null, z(e.model.generated, (e) => (W(), G("article", {
				key: e.id,
				class: "idea generated-card"
			}, [
				K("div", Gs, O(e.genre) + " · " + O(e.topic), 1),
				K("h3", null, O(e.title), 1),
				K("p", null, O(e.pitch), 1),
				K("p", Ks, O(e.storyLine), 1),
				K("div", qs, [n[7] ||= K("span", null, "ХУК ПРИПЕВА", -1), K("strong", null, O(e.hook), 1)]),
				e.detail ? (W(), G("p", Js, "Твоя деталь: " + O(e.detail), 1)) : Y("", !0),
				K("div", Ys, [
					K("button", {
						type: "button",
						class: "btn primary small",
						"data-action": "generated-use",
						"data-id": e.id
					}, "В Suno Studio", 8, Xs),
					K("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "generated-copy",
						"data-id": e.id
					}, "Копировать", 8, Zs),
					K("button", {
						type: "button",
						class: "btn danger small",
						"data-action": "generated-delete",
						"data-id": e.id,
						"aria-label": "Удалить идею «" + e.title + "»"
					}, "Удалить", 8, Qs)
				])
			]))), 128))])) : (W(), G("div", $s, [...n[8] ||= [K("strong", null, "Сохранённых новых идей нет", -1), J("Создай идеи в генераторе и нажми «Сохранить».", -1)]])),
			K("div", ec, [K("h2", null, "Мои промпты (" + O(e.model.prompts.length) + ")", 1), n[9] ||= K("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "nav",
				"data-nav": "myprompts"
			}, "Добавить или изменить →", -1)]),
			e.model.prompts.length ? (W(), G("div", tc, [(W(!0), G(H, null, z(e.model.prompts, (e) => (W(), G("article", {
				key: e.id,
				class: "saved-item"
			}, [
				K("div", nc, [K("h3", null, O(e.title), 1), K("div", rc, [K("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "copy-saved",
					"data-id": e.id
				}, "Копировать", 8, ic), K("button", {
					type: "button",
					class: "btn danger small",
					"data-action": "delete-saved",
					"data-id": e.id,
					"aria-label": "Удалить промпт «" + e.title + "»"
				}, "Удалить", 8, ac)])]),
				K("p", null, O(e.text), 1),
				K("span", oc, O(e.date), 1)
			]))), 128))])) : (W(), G("div", sc, [...n[10] ||= [K("strong", null, "Промптов пока нет", -1), J("Создай первый в Suno Studio и сохрани в библиотеке.", -1)]]))
		], 64));
	}
};
// src/vue/account/legacyLibraryBridge.js
function lc({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_LIBRARY, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-library-collection");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, cc, { model: o });
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
var uc = {
	key: 0,
	class: "sbsong-grid"
}, dc = ["data-id", "aria-label"], fc = ["data-sbsong-cover"], pc = ["src"], mc = { class: "sbsong-card-text" }, hc = { class: "sbsong-card-flags" }, gc = { class: "sbsong-card-actions" }, _c = ["data-id"], vc = ["data-id"], yc = ["data-id"], bc = {
	key: 1,
	class: "sbsong-empty"
}, xc = {
	__name: "SongCards",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ P(t.api.snapshot() || {
			items: [],
			total: 0
		});
		function r() {
			let e = t.api.snapshot();
			e && (n.value = e, Sn(() => t.api.hydrateCovers()));
		}
		return R(() => {
			window.addEventListener("sunoboom:songs-search", r), Sn(() => t.api.hydrateCovers());
		}), mr(() => window.removeEventListener("sunoboom:songs-search", r)), (e, t) => n.value.items.length ? (W(), G("div", uc, [(W(!0), G(H, null, z(n.value.items, (e) => (W(), G("article", {
			key: e.id,
			class: "sbsong-card"
		}, [K("button", {
			type: "button",
			class: "sbsong-art-button",
			"data-sbsong-action": "open",
			"data-id": e.id,
			"aria-label": "Открыть " + e.title
		}, [e.hasCover ? (W(), G("img", {
			key: 0,
			alt: "",
			"data-sbsong-cover": e.id,
			loading: "lazy"
		}, null, 8, fc)) : e.coverUrl ? (W(), G("img", {
			key: 1,
			alt: "",
			src: e.coverUrl,
			style: { display: "block" },
			loading: "lazy"
		}, null, 8, pc)) : Y("", !0), t[0] ||= K("span", {
			class: "sbsong-no-cover",
			"aria-hidden": "true"
		}, "♫", -1)], 8, dc), K("div", mc, [
			K("small", null, O(e.genre), 1),
			K("h3", null, O(e.title), 1),
			K("p", null, O(e.artist), 1),
			K("div", hc, [K("span", null, O(e.status), 1)]),
			K("div", gc, [
				K("button", {
					type: "button",
					"data-sbsong-action": "open",
					"data-id": e.id
				}, "Открыть", 8, _c),
				K("button", {
					type: "button",
					"data-sbsong-action": "edit",
					"data-id": e.id
				}, "Изменить", 8, vc),
				K("button", {
					type: "button",
					"data-sbsong-action": "share",
					"data-id": e.id
				}, "Поделиться", 8, yc)
			])
		])]))), 128))])) : (W(), G("div", bc, O(n.value.total ? "По этому запросу песен нет." : "Песен пока нет. Добавь первую карточку и загрузи аудиофайл."), 1));
	}
};
// src/vue/account/legacySongCardsBridge.js
function Sc({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SONG_CARDS, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-song-cards");
		if (r?.node === a || (r &&= (r.unmount(), null), !a || !t.snapshot())) return;
		let o = e(a, xc, { api: t });
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
var Cc = {
	class: "sbsong-versions",
	"data-sb-vue-song-versions": "",
	"aria-label": "Версии записи"
}, wc = { class: "sbsong-version-heading" }, Tc = { key: 0 }, Ec = { class: "sbsong-version-row-head" }, Dc = {
	key: 0,
	class: "sbsong-version-main-badge"
}, Oc = {
	key: 1,
	class: "sbsong-version-play-badge"
}, kc = { class: "sbsong-version-actions" }, Ac = ["data-version-id"], jc = ["data-version-id"], Mc = ["data-id", "data-version-id"], Nc = ["data-version-id"], Pc = { class: "sbsong-version-notes" }, Fc = ["data-sbsong-version-title", "value"], Ic = ["data-sbsong-version-note", "value"], Lc = ["data-version-id"], Rc = { key: 0 }, zc = {
	type: "button",
	class: "sbsong-compare-toggle",
	"data-sbsong-action": "compare-toggle"
}, Bc = {
	key: 0,
	class: "sbsong-compare-grid"
}, Vc = ["value"], Hc = ["value"], Uc = ["value"], Wc = ["value"], Gc = {
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
		return (t, n) => (W(), G("section", Cc, [
			K("div", wc, [K("h3", null, "Версии записи (" + O(e.versions.length) + ")", 1), e.playingLabel ? (W(), G("small", Tc, "В основном плеере: " + O(e.playingLabel), 1)) : Y("", !0)]),
			(W(!0), G(H, null, z(e.versions, (t) => (W(), G("article", {
				key: t.id,
				class: "sbsong-version-row"
			}, [
				K("div", Ec, [K("div", null, [
					K("strong", null, O(t.label), 1),
					t.isMain ? (W(), G("span", Dc, "★ Основная")) : Y("", !0),
					t.isPlaying ? (W(), G("span", Oc, "♫ Выбрана")) : Y("", !0),
					K("small", null, O(t.fileName) + " · " + O(t.sizeLabel) + " · " + O(t.addedDate), 1)
				])]),
				K("div", kc, [
					K("button", {
						type: "button",
						"data-sbsong-action": "version-play",
						"data-version-id": t.id
					}, "Выбрать для плеера", 8, Ac),
					t.isMain ? Y("", !0) : (W(), G("button", {
						key: 0,
						type: "button",
						"data-sbsong-action": "version-main",
						"data-version-id": t.id
					}, "★ Сделать основной", 8, jc)),
					K("button", {
						type: "button",
						"data-sbsong-action": "share-file",
						"data-id": e.songId,
						"data-version-id": t.id
					}, "Сохранить / отправить", 8, Mc),
					K("button", {
						type: "button",
						class: "sbsong-version-danger",
						"data-sbsong-action": "version-remove",
						"data-version-id": t.id
					}, "Удалить дубль", 8, Nc)
				]),
				K("details", Pc, [
					n[2] ||= K("summary", null, "Название и заметки", -1),
					K("label", null, [n[0] ||= J("Название версии ", -1), K("input", {
						type: "text",
						maxlength: "90",
						"data-sbsong-version-title": t.id,
						value: t.label
					}, null, 8, Fc)]),
					K("label", null, [n[1] ||= J("Чем отличается этот дубль ", -1), K("textarea", {
						maxlength: "800",
						rows: "2",
						"data-sbsong-version-note": t.id,
						value: t.notes,
						placeholder: "Например: более плотный припев, удачный вокал..."
					}, null, 8, Ic)]),
					K("button", {
						type: "button",
						"data-sbsong-action": "version-save",
						"data-version-id": t.id
					}, "Сохранить заметки", 8, Lc)
				])
			]))), 128)),
			e.versions.length ? Y("", !0) : (W(), G("p", Rc, "Пока нет локальных версий. Загрузи первую запись в MP3, M4A или WAV.")),
			e.versions.length > 1 ? (W(), G(H, { key: 1 }, [K("button", zc, O(e.compareOpen ? "Скрыть сравнение A/B" : "Сравнить версии A/B"), 1), e.compareOpen ? (W(), G("div", Bc, [
				K("label", null, [
					n[3] ||= J("Версия A ", -1),
					K("select", {
						id: "sbsong-compare-a",
						value: e.compareAId
					}, [(W(!0), G(H, null, z(e.versions, (e) => (W(), G("option", {
						key: e.id,
						value: e.id
					}, O(e.label), 9, Hc))), 128))], 8, Vc),
					n[4] ||= K("audio", {
						id: "sbsong-ab-a",
						controls: "",
						preload: "metadata"
					}, null, -1)
				]),
				K("label", null, [
					n[5] ||= J("Версия B ", -1),
					K("select", {
						id: "sbsong-compare-b",
						value: e.compareBId
					}, [(W(!0), G(H, null, z(e.versions, (e) => (W(), G("option", {
						key: e.id,
						value: e.id
					}, O(e.label), 9, Wc))), 128))], 8, Uc),
					n[6] ||= K("audio", {
						id: "sbsong-ab-b",
						controls: "",
						preload: "metadata"
					}, null, -1)
				]),
				n[7] ||= K("p", null, "Два независимых плеера для сравнения дублей. Воспроизведение запускается вручную.", -1)
			])) : Y("", !0)], 64)) : Y("", !0),
			n[8] ||= ea("<div class=\"sbsong-version-add\"><h4>+ Добавить новую версию</h4><label>Аудиофайл (MP3, M4A, WAV и другие) <input id=\"sbsong-version-file\" type=\"file\" accept=\"audio/*,.mp3,.m4a,.wav,.wave,.flac,.ogg,.opus,.aac\"></label><label>Название дубля <input id=\"sbsong-new-version-title\" maxlength=\"90\" type=\"text\" placeholder=\"Например: Версия с новым припевом\"></label><label>Заметка <textarea id=\"sbsong-new-version-notes\" maxlength=\"800\" rows=\"2\" placeholder=\"Что изменилось в этой записи?\"></textarea></label><button type=\"button\" class=\"sbsong-main-btn\" data-sbsong-action=\"version-add\" id=\"sbsong-version-submit\">Сохранить новую версию</button><p>WAV — до 500 МБ, другие форматы — до 150 МБ. Каждая версия хранится отдельно в браузере этого устройства. Старые записи не перезаписываются.</p></div>", 1)
		]));
	}
}, Kc = { class: "sbsong-detail" }, qc = { class: "sbsong-subhead" }, Jc = { class: "sbsong-detail-layout" }, Yc = { class: "sbsong-detail-cover" }, Xc = ["data-sbsong-cover", "alt"], Zc = ["src", "alt"], Qc = {
	key: 2,
	class: "sbsong-no-cover",
	"aria-hidden": "true"
}, $c = { class: "sbsong-detail-artist" }, el = { class: "sbsong-detail-tags" }, tl = { key: 0 }, nl = { key: 1 }, rl = {
	key: 0,
	class: "sbsong-detail-description"
}, il = {
	class: "sbsong-audio-box",
	id: "sbsong-audio-box"
}, al = {
	key: 0,
	controls: "",
	preload: "metadata",
	id: "sbsong-audio-player"
}, ol = { key: 1 }, sl = { class: "sbsong-detail-actions" }, cl = ["data-id"], ll = ["data-id"], ul = ["href"], dl = ["data-id"], fl = ["data-id"], pl = ["data-id"], ml = {
	key: 1,
	class: "sbsong-delete-confirm"
}, hl = ["data-id"], gl = {
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
		let t = e;
		return R(() => {
			Sn(() => t.api.hydrateMedia());
		}), (t, n) => (W(), G("section", Kc, [K("div", qc, [K("h2", null, O(e.model.title), 1), n[0] ||= K("button", {
			type: "button",
			"data-sbsong-action": "close-detail"
		}, "Закрыть ×", -1)]), K("div", Jc, [K("div", Yc, [e.model.hasCover ? (W(), G("img", {
			key: 0,
			"data-sbsong-cover": e.model.id,
			alt: "Обложка песни " + e.model.title
		}, null, 8, Xc)) : e.model.coverUrl ? (W(), G("img", {
			key: 1,
			src: e.model.coverUrl,
			alt: "Обложка песни " + e.model.title,
			style: { display: "block" }
		}, null, 8, Zc)) : (W(), G("span", Qc, "♫"))]), K("div", null, [
			K("p", $c, O(e.model.artist), 1),
			K("p", el, [e.model.genre ? (W(), G("span", tl, O(e.model.genre), 1)) : Y("", !0), e.model.album ? (W(), G("span", nl, O(e.model.album), 1)) : Y("", !0)]),
			e.model.description ? (W(), G("p", rl, O(e.model.description), 1)) : Y("", !0),
			K("div", il, [e.model.hasPlayableAudio ? (W(), G("audio", al)) : (W(), G("p", ol, "Аудио ещё не добавлено. Добавь первую версию в этой карточке."))]),
			q(Gc, {
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
			K("div", sl, [
				K("button", {
					type: "button",
					class: "sbsong-main-btn",
					"data-sbsong-action": "share",
					"data-id": e.model.id
				}, "🔗 Поделиться ссылкой", 8, cl),
				e.model.hasAudio ? (W(), G("button", {
					key: 0,
					type: "button",
					"data-sbsong-action": "share-file",
					"data-id": e.model.id
				}, "Отправить аудиофайл", 8, ll)) : Y("", !0),
				e.model.listenUrl ? (W(), G("a", {
					key: 1,
					href: e.model.listenUrl,
					target: "_blank",
					rel: "noopener noreferrer"
				}, "Открыть публичную запись ↗", 8, ul)) : Y("", !0),
				K("button", {
					type: "button",
					"data-sbsong-action": "producer",
					"data-id": e.model.id
				}, "🎛 Мастер", 8, dl),
				K("button", {
					type: "button",
					"data-sbsong-action": "edit",
					"data-id": e.model.id
				}, "Изменить", 8, fl),
				K("button", {
					type: "button",
					class: "sbsong-danger",
					"data-sbsong-action": "delete",
					"data-id": e.model.id
				}, "Удалить", 8, pl)
			]),
			e.model.confirmDelete ? (W(), G("div", ml, [
				n[1] ||= K("strong", null, "Удалить карточку вместе с локальными файлами?", -1),
				K("button", {
					type: "button",
					"data-sbsong-action": "delete-confirm",
					"data-id": e.model.id
				}, "Да, удалить", 8, hl),
				n[2] ||= K("button", {
					type: "button",
					"data-sbsong-action": "delete-cancel"
				}, "Отмена", -1)
			])) : Y("", !0)
		])])]));
	}
};
// src/vue/account/legacySongDetailBridge.js
function _l({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SONG_DETAIL, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-song-detail");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, gl, {
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
var vl = {
	id: "sbsong-form",
	class: "sbsong-form-panel"
}, yl = { class: "sbsong-subhead" }, bl = {
	id: "sbsong-save-form",
	class: "sbsong-form"
}, xl = { class: "sbsong-form-columns" }, Sl = { class: "sbsong-field" }, Cl = { class: "sbsong-artist-field" }, wl = {
	class: "sbsong-field",
	for: "sbsong-artist-input"
}, Tl = ["aria-expanded"], El = {
	id: "sbsong-artist-options",
	class: "sbsong-artist-options",
	role: "listbox",
	"aria-label": "Список артистов"
}, Dl = ["onClick"], Ol = {
	key: 0,
	class: "sbsong-artist-hint"
}, kl = {
	key: 1,
	class: "sbsong-artist-hint"
}, Al = { class: "sbsong-genre-field" }, jl = {
	class: "sbsong-field",
	for: "sbsong-genre-input"
}, Ml = ["aria-expanded"], Nl = ["aria-expanded"], Pl = {
	id: "sbsong-genre-options",
	class: "sbsong-genre-options",
	role: "region",
	"aria-label": "Выбор жанра из Академии"
}, Fl = { class: "sbsong-genre-picker-head" }, Il = ["value"], Ll = {
	id: "sbsong-genre-results",
	class: "sbsong-genre-results",
	role: "listbox",
	"aria-label": "Жанры и поджанры"
}, Rl = ["aria-label"], zl = { class: "sbsong-genre-group-title" }, Bl = ["onClick"], Vl = {
	key: 0,
	class: "sbsong-genre-hint"
}, Hl = { class: "sbsong-field" }, Ul = { class: "sbsong-field" }, Wl = { class: "sbsong-form-columns" }, Gl = { class: "sbsong-field" }, Kl = {
	class: "sbsong-cover-auto",
	"aria-live": "polite"
}, ql = { id: "sbsong-cover-status" }, Jl = { class: "sbsong-form-columns" }, Yl = { class: "sbsong-field" }, Xl = { class: "sbsong-field" }, Zl = { class: "sbsong-field" }, Ql = {
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
		let t = e, n = /* @__PURE__ */ Bt({
			title: t.model.title,
			artist: t.model.artist,
			genre: t.model.genre,
			album: t.model.album,
			description: t.model.description,
			audioUrl: t.model.audioUrl,
			listenUrl: t.model.listenUrl,
			coverUrl: t.model.coverUrl
		}), r = /* @__PURE__ */ P(!1), i = /* @__PURE__ */ P(!1), a = /* @__PURE__ */ P(t.api.artistChoices()), o = /* @__PURE__ */ P(!1), s = /* @__PURE__ */ P(!1), c = /* @__PURE__ */ P("Все"), l = /* @__PURE__ */ P(t.api.genreChoices()), u = /* @__PURE__ */ P(t.api.genreFamilies()), d = (e) => String(e || "").normalize("NFKC").toLocaleLowerCase("ru"), f = Z(() => {
			let e = d(n.artist);
			return (i.value ? a.value : a.value.filter((t) => d(t.name).includes(e))).slice(0, 40);
		}), p = Z(() => i.value ? a.value.length > 40 : a.value.filter((e) => d(e.name).includes(d(n.artist))).length > 40), m = Z(() => {
			let e = s.value ? "" : d(n.genre.trim());
			return l.value.filter((t) => (c.value === "Все" || t.family === c.value) && (!e || d(t.name + " " + t.family).includes(e)));
		}), h = Z(() => u.value.map((e) => ({
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
			document.addEventListener("pointerdown", x), Sn(() => t.api.hydrateCover());
		}), mr(() => document.removeEventListener("pointerdown", x)), (t, d) => (W(), G("section", vl, [K("div", yl, [K("h2", null, O(e.model.editId ? "Изменить песню" : "Новая песня"), 1), d[16] ||= K("button", {
			type: "button",
			"data-sbsong-action": "cancel"
		}, "Закрыть ×", -1)]), K("form", bl, [
			K("div", xl, [
				K("label", Sl, [d[17] ||= K("span", null, "Название *", -1), L(K("input", {
					"onUpdate:modelValue": d[0] ||= (e) => n.title = e,
					type: "text",
					name: "title",
					maxlength: "120",
					placeholder: "Название песни"
				}, null, 512), [[Q, n.title]])]),
				K("div", Cl, [
					K("label", wl, [d[18] ||= K("span", null, "Исполнитель / проект", -1), L(K("input", {
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
						onKeydown: d[4] ||= No(jo((e) => r.value = !1, ["prevent"]), ["esc"])
					}, null, 40, Tl), [[Q, n.artist]])]),
					K("div", { class: "sbsong-artist-shortcuts" }, [K("button", {
						type: "button",
						onClick: y
					}, "▾ Выбрать из списка"), K("button", {
						type: "button",
						onClick: g
					}, "+ Сохранить артиста")]),
					L(K("div", El, [
						(W(!0), G(H, null, z(f.value, (e) => (W(), G("button", {
							key: e.name,
							type: "button",
							role: "option",
							class: "sbsong-artist-option",
							onClick: (t) => _(e.name)
						}, [K("strong", null, O(e.name), 1), K("small", null, O(e.origin), 1)], 8, Dl))), 128)),
						p.value ? (W(), G("p", Ol, "Уточни поиск, чтобы увидеть остальные варианты.")) : Y("", !0),
						f.value.length ? Y("", !0) : (W(), G("p", kl, O(a.value.length ? "Совпадений нет. Нового артиста можно сохранить кнопкой выше." : "Список пуст. Введи имя и сохрани первого артиста."), 1))
					], 512), [[Ba, r.value]])
				]),
				K("div", Al, [
					K("label", jl, [d[19] ||= K("span", null, "Жанр", -1), L(K("input", {
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
						onKeydown: d[8] ||= No(jo((e) => o.value = !1, ["prevent"]), ["esc"])
					}, null, 40, Ml), [[Q, n.genre]])]),
					K("button", {
						type: "button",
						class: "sbsong-genre-toggle",
						"aria-controls": "sbsong-genre-options",
						"aria-expanded": String(o.value),
						onClick: b
					}, "▾ Выбрать из Академии", 8, Nl),
					L(K("div", Pl, [K("div", Fl, [
						d[21] ||= K("label", { for: "sbsong-genre-family" }, "Направление", -1),
						L(K("select", {
							id: "sbsong-genre-family",
							"onUpdate:modelValue": d[9] ||= (e) => c.value = e,
							"aria-label": "Фильтр по направлению",
							onChange: d[10] ||= (e) => s.value = !0
						}, [d[20] ||= K("option", { value: "Все" }, "Все направления", -1), (W(!0), G(H, null, z(u.value, (e) => (W(), G("option", {
							key: e,
							value: e
						}, O(e), 9, Il))), 128))], 544), [[wo, c.value]]),
						K("small", null, O(m.value.length) + " из " + O(l.value.length), 1)
					]), K("div", Ll, [(W(!0), G(H, null, z(h.value, (e) => (W(), G("div", {
						key: e.name,
						class: "sbsong-genre-group",
						role: "group",
						"aria-label": e.name
					}, [K("div", zl, [J(O(e.name) + " ", 1), K("span", null, O(e.genres.length), 1)]), (W(!0), G(H, null, z(e.genres, (e) => (W(), G("button", {
						key: e.id,
						type: "button",
						class: "sbsong-genre-option",
						role: "option",
						onClick: (t) => v(e.name)
					}, [K("span", null, O(e.name), 1)], 8, Bl))), 128))], 8, Rl))), 128)), m.value.length ? Y("", !0) : (W(), G("p", Vl, O(l.value.length ? "Не найдено. Можно ввести свой жанр вручную." : "Каталог Академии пока недоступен. Введи жанр вручную."), 1))])], 512), [[Ba, o.value]])
				]),
				K("label", Hl, [d[22] ||= K("span", null, "Альбом / релиз", -1), L(K("input", {
					"onUpdate:modelValue": d[11] ||= (e) => n.album = e,
					type: "text",
					name: "album",
					maxlength: "120",
					placeholder: "Название альбома"
				}, null, 512), [[Q, n.album]])])
			]),
			K("label", Ul, [d[23] ||= K("span", null, "Описание", -1), L(K("textarea", {
				"onUpdate:modelValue": d[12] ||= (e) => n.description = e,
				name: "description",
				maxlength: "700",
				rows: "3",
				placeholder: "История, настроение или заметки"
			}, null, 512), [[Q, n.description]])]),
			K("div", Wl, [K("label", Gl, [K("span", null, O(e.model.hasAudio ? "Добавить новую аудиоверсию" : "Загрузить аудиофайл (MP3, M4A, WAV и другие)"), 1), d[24] ||= K("input", {
				name: "audio",
				type: "file",
				accept: "audio/*,.mp3,.wav,.wave,.m4a,.aac,.flac,.ogg,.opus"
			}, null, -1)]), d[25] ||= K("label", { class: "sbsong-field" }, [K("span", null, "Обложка вручную (необязательно)"), K("input", {
				name: "cover",
				type: "file",
				accept: "image/png,image/jpeg,image/webp,image/gif"
			})], -1)]),
			K("div", Kl, [d[28] ||= K("div", { class: "sbsong-cover-preview-figure" }, [K("img", {
				id: "sbsong-cover-preview-img",
				alt: "Предпросмотр обложки",
				hidden: ""
			}), K("span", {
				id: "sbsong-cover-preview-placeholder",
				"aria-hidden": "true"
			}, "♫")], -1), K("div", null, [
				d[26] ||= K("strong", null, "Обложка из аудиофайла", -1),
				K("p", ql, O(e.model.hasCover ? "Загружаю сохранённую обложку…" : "Выбери MP3, M4A или FLAC — попробую найти обложку автоматически"), 1),
				d[27] ||= K("small", null, "Ручная обложка имеет приоритет, если ты её выберешь.", -1)
			])]),
			K("div", Jl, [
				K("label", Yl, [d[29] ||= K("span", null, "Прямая ссылка на MP3 (если есть)", -1), L(K("input", {
					"onUpdate:modelValue": d[13] ||= (e) => n.audioUrl = e,
					type: "text",
					name: "audioUrl",
					maxlength: "700",
					placeholder: "https://.../song.mp3"
				}, null, 512), [[Q, n.audioUrl]])]),
				K("label", Xl, [d[30] ||= K("span", null, "Публичная страница песни", -1), L(K("input", {
					"onUpdate:modelValue": d[14] ||= (e) => n.listenUrl = e,
					type: "text",
					name: "listenUrl",
					maxlength: "700",
					placeholder: "https://suno.com/..."
				}, null, 512), [[Q, n.listenUrl]])]),
				K("label", Zl, [d[31] ||= K("span", null, "Публичная обложка (по желанию)", -1), L(K("input", {
					"onUpdate:modelValue": d[15] ||= (e) => n.coverUrl = e,
					type: "text",
					name: "coverUrl",
					maxlength: "700",
					placeholder: "https://.../cover.jpg"
				}, null, 512), [[Q, n.coverUrl]])])
			]),
			d[32] ||= K("p", { class: "sbsong-form-help" }, " MP3, M4A, WAV, FLAC и другие аудиофайлы сохраняются локально (IndexedDB): WAV — до 500 МБ, остальные — до 150 МБ при наличии свободной памяти браузера. Новая загрузка добавляет версию, не заменяя старую. Обложка ищется в MP3, M4A и FLAC; для WAV её обычно добавляют вручную. Локальное аудио по общей ссылке не передаётся. ", -1),
			d[33] ||= K("div", { class: "sbsong-form-actions" }, [K("button", {
				type: "submit",
				class: "sbsong-main-btn",
				id: "sbsong-submit"
			}, "Сохранить песню"), K("button", {
				type: "button",
				"data-sbsong-action": "cancel"
			}, "Отмена")], -1)
		])]));
	}
};
// src/vue/account/legacySongEditorBridge.js
function $l({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SONG_EDITOR, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-song-editor");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, Ql, {
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
var eu = {
	id: "sbsong-artist-manager",
	class: "sbsong-artist-manager",
	"data-sb-vue-artist-manager": ""
}, tu = {
	key: 0,
	class: "sbsong-artist-hint"
}, nu = { id: "sbsong-artist-manager-results" }, ru = ["data-id", "aria-label"], iu = {
	key: 0,
	class: "sbsong-artist-hint"
}, au = {
	__name: "ArtistManager",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ P(t.model.filter || ""), r = (e) => String(e || "").normalize("NFKC").toLocaleLowerCase("ru"), i = Z(() => t.model.artists.filter((e) => r(e.name).includes(r(n.value))));
		return (t, r) => (W(), G("section", eu, [
			r[1] ||= K("div", { class: "sbsong-subhead" }, [K("h2", null, "Мои артисты"), K("button", {
				type: "button",
				"data-sbsong-action": "artists-manage"
			}, "Закрыть ×")], -1),
			r[2] ||= K("p", null, "Создавай свой список исполнителей и музыкальных проектов. Артисты из «ДНК артиста» и сохранённых песен также доступны при выборе. Удаление из списка не меняет существующие песни.", -1),
			e.model.dnaCount ? (W(), G("p", tu, " Профилей ДНК артиста доступно для выбора: " + O(e.model.dnaCount) + ". Они не удаляются при изменении этого списка. ", 1)) : Y("", !0),
			r[3] ||= K("div", { class: "sbsong-artist-manager-new" }, [K("input", {
				id: "sbsong-artist-manager-add",
				type: "text",
				maxlength: "120",
				placeholder: "Имя артиста или проекта",
				"aria-label": "Новый артист"
			}), K("button", {
				type: "button",
				class: "sbsong-main-btn",
				"data-sbsong-action": "artist-manager-add"
			}, " + Добавить артиста ")], -1),
			L(K("input", {
				"onUpdate:modelValue": r[0] ||= (e) => n.value = e,
				id: "sbsong-artist-manager-filter",
				type: "search",
				placeholder: "Фильтр по имени…",
				"aria-label": "Фильтр моих артистов"
			}, null, 512), [[Q, n.value]]),
			K("div", nu, [(W(!0), G(H, null, z(i.value, (e) => (W(), G("div", {
				key: e.id,
				class: "sbsong-artist-entry"
			}, [K("span", null, O(e.name), 1), K("button", {
				type: "button",
				"data-sbsong-action": "artist-remove",
				"data-id": e.id,
				"aria-label": "Удалить артиста " + e.name
			}, "Удалить", 8, ru)]))), 128)), i.value.length ? Y("", !0) : (W(), G("p", iu, O(e.model.artists.length ? "Ничего не найдено." : "Пока нет добавленных вручную артистов."), 1))])
		]));
	}
};
// src/vue/account/legacyArtistManagerBridge.js
function ou({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ARTIST_MANAGER, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-artist-manager");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, au, { model: o });
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
var su = { key: 0 }, cu = {
	key: 0,
	class: "sb-dna-grid"
}, lu = ["data-id"], uu = { class: "sb-dna-cardimg" }, du = ["src"], fu = {
	key: 1,
	class: "sb-dna-empty"
}, pu = {
	key: 1,
	class: "sb-dna-detail"
}, mu = { class: "sb-dna-actions" }, hu = ["data-id"], gu = ["data-id"], _u = ["data-id"], vu = { class: "sb-dna-hero" }, yu = { class: "sb-dna-portrait" }, bu = ["src"], xu = { class: "sb-dna-facts" }, Su = {
	key: 0,
	class: "sb-dna-restrictions"
}, Cu = { class: "sb-dna-descr" }, wu = { class: "sb-dna-style" }, Tu = { class: "sb-dna-actions" }, Eu = ["data-id"], Du = ["data-id"], Ou = { class: "sb-dna-related" }, ku = ["data-id"], Au = { key: 1 }, ju = {
	__name: "ArtistDNA",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => e.model.detail ? (W(), G("div", pu, [
			K("div", mu, [
				n[1] ||= K("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "dna-list"
				}, "← Все артисты", -1),
				K("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "dna-apply",
					"data-id": e.model.detail.id
				}, "В Suno Studio", 8, hu),
				K("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "dna-edit",
					"data-id": e.model.detail.id
				}, "Изменить", 8, gu),
				K("button", {
					type: "button",
					class: "btn danger small",
					"data-action": "dna-delete",
					"data-id": e.model.detail.id
				}, "Удалить", 8, _u)
			]),
			K("div", vu, [K("div", yu, [e.model.detail.portrait ? (W(), G("img", {
				key: 0,
				src: e.model.detail.portrait,
				alt: "Портрет артиста",
				loading: "lazy"
			}, null, 8, bu)) : (W(), G(H, { key: 1 }, [J("♫")], 64))]), K("div", null, [
				n[2] ||= K("span", null, "МУЗЫКАЛЬНАЯ ИДЕНТИЧНОСТЬ", -1),
				K("h2", null, O(e.model.detail.name), 1),
				K("p", null, O(e.model.detail.subtitle), 1)
			])]),
			K("div", xu, [(W(!0), G(H, null, z(e.model.detail.facts, (e) => (W(), G("div", {
				key: e.label,
				class: "sb-dna-fact"
			}, [K("span", null, O(e.label), 1), K("strong", null, O(e.value), 1)]))), 128))]),
			(W(!0), G(H, null, z(e.model.detail.textFields, (e) => (W(), G("section", {
				key: e.label,
				class: "sb-dna-descr"
			}, [K("h3", null, O(e.label), 1), K("p", null, O(e.value), 1)]))), 128)),
			e.model.detail.forbids.length ? (W(), G("div", Su, [n[3] ||= K("strong", null, "Запреты:", -1), (W(!0), G(H, null, z(e.model.detail.forbids, (e) => (W(), G("span", { key: e }, O(e), 1))), 128))])) : Y("", !0),
			K("section", Cu, [
				n[4] ||= K("h3", null, "Промпт для Suno Style", -1),
				K("div", wu, O(e.model.detail.style), 1),
				K("div", Tu, [K("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "dna-copy",
					"data-id": e.model.detail.id
				}, "Копировать Style", 8, Eu), K("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "dna-apply",
					"data-id": e.model.detail.id
				}, "Применить в Suno Studio", 8, Du)])
			]),
			K("div", Ou, [K("h3", null, "Связанные паспорта треков (" + O(e.model.detail.related.length) + ")", 1), e.model.detail.related.length ? (W(!0), G(H, { key: 0 }, z(e.model.detail.related, (e) => (W(), G("button", {
				key: e.id,
				type: "button",
				class: "sb-dna-tracklink",
				"data-action": "dna-track",
				"data-id": e.id
			}, [K("strong", null, O(e.title), 1), K("span", null, O(e.status) + " →", 1)], 8, ku))), 128)) : (W(), G("p", Au, "Пока нет привязанных треков. В «Паспорте трека» можно выбрать этого артиста."))])
		])) : (W(), G("div", su, [e.model.profiles.length ? (W(), G("div", cu, [(W(!0), G(H, null, z(e.model.profiles, (e) => (W(), G("button", {
			key: e.id,
			type: "button",
			class: "sb-dna-card",
			"data-action": "dna-open",
			"data-id": e.id
		}, [
			K("div", uu, [e.portrait ? (W(), G("img", {
				key: 0,
				src: e.portrait,
				alt: "",
				loading: "lazy"
			}, null, 8, du)) : (W(), G(H, { key: 1 }, [J("♫")], 64))]),
			K("div", null, [
				K("strong", null, O(e.name), 1),
				K("span", null, O(e.genre), 1),
				K("small", null, O(e.timbre), 1)
			]),
			n[0] ||= K("span", { class: "sb-dna-arrow" }, "→", -1)
		], 8, lu))), 128))])) : (W(), G("div", fu, " Здесь будут музыкальные персонажи со своим вокалом, инструментами, стилем и визуальным образом. Создай первый профиль. "))]));
	}
};
// src/vue/account/legacyArtistDNABridge.js
function Mu({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_DNA, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-dna-view");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, ju, { model: o });
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
var Nu = {
	id: "dna-editor",
	class: "panel sb-dna-editor",
	"data-sb-vue-dna-editor": ""
}, Pu = { class: "sb-dna-formheader" }, Fu = { class: "sb-dna-fields" }, Iu = { class: "field" }, Lu = { class: "field" }, Ru = ["value"], zu = { class: "field" }, Bu = ["value"], Vu = { class: "field" }, Hu = { class: "field" }, Uu = { class: "field" }, Wu = {
	key: 0,
	class: "sb-dna-fields"
}, Gu = { class: "field" }, Ku = { class: "field" }, qu = { class: "field" }, Ju = ["for"], Yu = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"rows"
], Xu = { class: "sb-dna-checkboxes" }, Zu = ["id", "onUpdate:modelValue"], Qu = { class: "field" }, $u = ["for"], ed = [
	"id",
	"onUpdate:modelValue",
	"rows",
	"maxlength"
], td = { class: "field" }, nd = { class: "sb-dna-previewbox" }, rd = { id: "dna-style-preview" }, id = { id: "dna-style-count" }, ad = {
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
		let t = e, n = /* @__PURE__ */ Bt({ ...t.model.fields }), r = Z(() => t.api.stylePreview(n)), i = [
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
		return (t, s) => (W(), G("div", Nu, [
			K("div", Pu, [K("div", null, [K("h2", null, O(e.model.editing ? "Редактирование ДНК" : "Новый артист"), 1), s[10] ||= K("p", null, "Сохрани характер звучания — он будет доступен в Suno Studio и «Паспорте трека».", -1)]), s[11] ||= K("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "dna-cancel"
			}, "Закрыть", -1)]),
			K("div", Fu, [
				K("div", Iu, [s[12] ||= K("label", { for: "dna-name" }, "Имя артиста *", -1), L(K("input", {
					id: "dna-name",
					"onUpdate:modelValue": s[0] ||= (e) => n.name = e,
					maxlength: "120",
					placeholder: "Название музыкального проекта"
				}, null, 512), [[Q, n.name]])]),
				K("div", Lu, [s[13] ||= K("label", { for: "dna-project" }, "Связанный проект", -1), L(K("select", {
					id: "dna-project",
					"onUpdate:modelValue": s[1] ||= (e) => n.projectId = e
				}, [(W(!0), G(H, null, z(e.model.projects, (e) => (W(), G("option", {
					key: e.id,
					value: e.id
				}, O(e.title), 9, Ru))), 128))], 512), [[wo, n.projectId]])]),
				K("div", zu, [s[14] ||= K("label", { for: "dna-genre" }, "Основной жанр", -1), L(K("select", {
					id: "dna-genre",
					"onUpdate:modelValue": s[2] ||= (e) => n.genre = e
				}, [(W(!0), G(H, null, z(e.model.genres, (e) => (W(), G("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, Bu))), 128))], 512), [[wo, n.genre]])]),
				K("div", Vu, [s[15] ||= K("label", { for: "dna-othergenres" }, "Дополнительные жанры", -1), L(K("input", {
					id: "dna-othergenres",
					"onUpdate:modelValue": s[3] ||= (e) => n.otherGenres = e,
					maxlength: "240",
					placeholder: "Например, pop, R&B, electropop"
				}, null, 512), [[Q, n.otherGenres]])]),
				K("div", Hu, [s[17] ||= K("label", { for: "dna-vocal" }, "Тип вокала", -1), L(K("select", {
					id: "dna-vocal",
					"onUpdate:modelValue": s[4] ||= (e) => n.vocal = e
				}, [...s[16] ||= [
					K("option", { value: "male" }, "Мужской", -1),
					K("option", { value: "female" }, "Женский", -1),
					K("option", { value: "duet" }, "Дуэт", -1)
				]], 512), [[wo, n.vocal]])]),
				K("div", Uu, [s[19] ||= K("label", { for: "dna-language" }, "Язык песни", -1), L(K("select", {
					id: "dna-language",
					"onUpdate:modelValue": s[5] ||= (e) => n.language = e
				}, [...s[18] ||= [
					K("option", { value: "Russian" }, "Русский", -1),
					K("option", { value: "English" }, "Английский", -1),
					K("option", { value: "Spanish" }, "Испанский", -1),
					K("option", { value: "Kazakh" }, "Казахский", -1)
				]], 512), [[wo, n.language]])])
			]),
			s[24] ||= K("h3", { class: "sb-dna-formsection" }, "Голос и музыкальный почерк", -1),
			(W(), G(H, null, z(i, (e) => (W(), G(H, { key: e.id }, [e.id === "mood" ? (W(), G("div", Wu, [K("div", Gu, [s[20] ||= K("label", { for: "dna-tempo-min" }, "Темп от (BPM)", -1), L(K("input", {
				id: "dna-tempo-min",
				"onUpdate:modelValue": s[6] ||= (e) => n.tempoMin = e,
				maxlength: "3",
				placeholder: "Например, 90"
			}, null, 512), [[Q, n.tempoMin]])]), K("div", Ku, [s[21] ||= K("label", { for: "dna-tempo-max" }, "Темп до (BPM)", -1), L(K("input", {
				id: "dna-tempo-max",
				"onUpdate:modelValue": s[7] ||= (e) => n.tempoMax = e,
				maxlength: "3",
				placeholder: "Например, 120"
			}, null, 512), [[Q, n.tempoMax]])])])) : Y("", !0), K("div", qu, [K("label", { for: "dna-" + e.id }, O(e.label), 9, Ju), L(K("textarea", {
				id: "dna-" + e.id,
				"onUpdate:modelValue": (t) => n[e.key] = t,
				maxlength: e.max,
				rows: e.rows
			}, null, 8, Yu), [[Q, n[e.key]]])])], 64))), 64)),
			s[25] ||= K("h3", { class: "sb-dna-formsection" }, "Запреты и ограничения", -1),
			K("div", Xu, [(W(), G(H, null, z(a, (e) => K("label", { key: e.id }, [L(K("input", {
				id: "dna-" + e.id,
				"onUpdate:modelValue": (t) => n[e.key] = t,
				type: "checkbox"
			}, null, 8, Zu), [[So, n[e.key]]]), J(" " + O(e.label), 1)])), 64))]),
			K("div", Qu, [s[22] ||= K("label", { for: "dna-extra" }, "Дополнительные требования к аранжировке", -1), L(K("textarea", {
				id: "dna-extra",
				"onUpdate:modelValue": s[8] ||= (e) => n.extra = e,
				rows: "3",
				maxlength: "650"
			}, null, 512), [[Q, n.extra]])]),
			s[26] ||= K("h3", { class: "sb-dna-formsection" }, "Творческий образ", -1),
			(W(), G(H, null, z(o, (e) => K("div", {
				key: e.id,
				class: "field"
			}, [K("label", { for: "dna-" + e.id }, O(e.label), 9, $u), L(K("textarea", {
				id: "dna-" + e.id,
				"onUpdate:modelValue": (t) => n[e.key] = t,
				rows: e.rows,
				maxlength: e.max
			}, null, 8, ed), [[Q, n[e.key]]])])), 64)),
			K("div", td, [s[23] ||= K("label", { for: "dna-portrait" }, "Ссылка на портрет (HTTPS)", -1), L(K("input", {
				id: "dna-portrait",
				"onUpdate:modelValue": s[9] ||= (e) => n.portrait = e,
				maxlength: "2000",
				placeholder: "https://…"
			}, null, 512), [[Q, n.portrait]])]),
			s[27] ||= K("h3", { class: "sb-dna-formsection" }, "Промпт ДНК для Suno", -1),
			K("div", nd, [K("div", rd, O(r.value), 1), K("span", id, O(r.value.length) + " / 1000", 1)]),
			s[28] ||= K("div", { class: "sb-dna-actions" }, [K("button", {
				type: "button",
				class: "btn primary",
				"data-action": "dna-save"
			}, "Сохранить ДНК артиста"), K("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "dna-copy-form"
			}, "Копировать промпт")], -1),
			s[29] ||= K("p", { class: "sb-dna-muted" }, " Описания и запреты — подсказки для генерации, а не гарантия идентичного голоса. Все данные пока хранятся локально в браузере. ", -1)
		]));
	}
};
// src/vue/account/legacyArtistDNAEditorBridge.js
function od({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_DNA_EDITOR, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-dna-editor");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, ad, {
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
var sd = { class: "field" }, cd = { class: "field" }, ld = ["value"], ud = { class: "field" }, dd = { class: "field" }, fd = {
	__name: "IdeaFields",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = /* @__PURE__ */ Bt({ ...e.initial.values });
		return (n, r) => (W(), G(H, null, [
			K("div", sd, [r[4] ||= K("label", { for: "custom-idea-title" }, "Название песни", -1), L(K("input", {
				id: "custom-idea-title",
				"onUpdate:modelValue": r[0] ||= (e) => t.title = e,
				maxlength: "100",
				placeholder: "Например, Город на ладони"
			}, null, 512), [[Q, t.title]])]),
			K("div", cd, [r[5] ||= K("label", { for: "custom-idea-genre" }, "Музыкальный жанр", -1), L(K("select", {
				id: "custom-idea-genre",
				"onUpdate:modelValue": r[1] ||= (e) => t.genre = e
			}, [(W(!0), G(H, null, z(e.initial.genres, (e) => (W(), G("option", {
				key: e.id,
				value: e.id
			}, O(e.name), 9, ld))), 128))], 512), [[wo, t.genre]])]),
			K("div", ud, [r[6] ||= K("label", { for: "custom-idea-text" }, "Сюжет и основная идея", -1), L(K("textarea", {
				id: "custom-idea-text",
				"onUpdate:modelValue": r[2] ||= (e) => t.text = e,
				rows: "5",
				maxlength: "3000",
				placeholder: "О чём песня и что происходит с героем?"
			}, null, 512), [[Q, t.text]])]),
			K("div", dd, [r[7] ||= K("label", { for: "custom-idea-hook" }, "Фраза для припева (необязательно)", -1), L(K("input", {
				id: "custom-idea-hook",
				"onUpdate:modelValue": r[3] ||= (e) => t.hook = e,
				maxlength: "240",
				placeholder: "Запоминающаяся строчка"
			}, null, 512), [[Q, t.hook]])])
		], 64));
	}
}, pd = ["value"], md = {
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
		let t = e, n = /* @__PURE__ */ P(null);
		return R(() => {
			t.initial.highlighted && t.api.enableHighlight(n.value);
		}), (t, r) => (W(), G(H, null, [r[0] ||= K("label", { for: "custom-idea-lyrics" }, "Оригинальный текст (необязательно)", -1), K("textarea", {
			id: "custom-idea-lyrics",
			ref_key: "area",
			ref: n,
			value: e.initial.values.lyrics,
			rows: "12",
			maxlength: "20000",
			placeholder: "Куплет 1:\nТекст первого куплета...\n\nПрипев:\nТекст припева..."
		}, null, 8, pd)], 64));
	}
}, hd = { class: "field" }, gd = ["value"], _d = { class: "workbench-switches" }, vd = ["id", "onUpdate:modelValue"], yd = { class: "field" }, bd = { class: "detail-actions" }, xd = {
	type: "button",
	class: "btn ghost",
	"data-action": "copy-current-lyrics"
}, Sd = ["innerHTML"], Cd = { class: "field" }, wd = { class: "detail-actions" }, Td = {
	type: "button",
	class: "btn ghost",
	"data-action": "copy-current-style"
}, Ed = ["innerHTML"], Dd = {
	__name: "LyricsTools",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Bt({ ...t.initial.values }), r = /* @__PURE__ */ Bt({ ...t.initial.switches }), i = [
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
		return (t, o) => (W(), G(H, null, [
			K("div", hd, [o[3] ||= K("label", { for: "lyrics-tag-preset" }, "Характер аранжировки", -1), L(K("select", {
				id: "lyrics-tag-preset",
				"onUpdate:modelValue": o[0] ||= (e) => n.preset = e
			}, [(W(), G(H, null, z(i, ([e, t]) => K("option", {
				key: e,
				value: e
			}, O(t), 9, gd)), 64))], 512), [[wo, n.preset]])]),
			K("div", _d, [(W(), G(H, null, z(a, ([e, t]) => K("label", { key: e }, [L(K("input", {
				id: "lyrics-" + e,
				"onUpdate:modelValue": (t) => r[e] = t,
				type: "checkbox"
			}, null, 8, vd), [[So, r[e]]]), J(" " + O(t), 1)])), 64))]),
			o[8] ||= K("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "format-idea-lyrics"
			}, "✨ Создать теги и усилители", -1),
			o[9] ||= K("p", { class: "workbench-note" }, "Разметка примерная: если в тексте нет названий секций, куплеты и припевы определяются по абзацам. Проверь расположение тегов перед копированием.", -1),
			K("div", yd, [o[4] ||= K("label", { for: "custom-idea-tagged" }, "Готовая версия для поля Lyrics в Suno (можно исправить вручную)", -1), L(K("textarea", {
				id: "custom-idea-tagged",
				"onUpdate:modelValue": o[1] ||= (e) => n.tagged = e,
				rows: "13",
				maxlength: "25000",
				placeholder: "[Verse 1]\n...\n\n[Chorus - powerful melodic hook]\n..."
			}, null, 512), [[Q, n.tagged]])]),
			K("div", bd, [K("button", xd, [K("span", { innerHTML: e.initial.copyIcon }, null, 8, Sd), o[5] ||= J(" Копировать Lyrics", -1)])]),
			K("div", Cd, [o[6] ||= K("label", { for: "custom-idea-style" }, "Дополнительное описание для поля Style (до 1000 символов)", -1), L(K("textarea", {
				id: "custom-idea-style",
				"onUpdate:modelValue": o[2] ||= (e) => n.style = e,
				rows: "4",
				maxlength: "1000",
				placeholder: "Описание жанра, вокала и динамики для Suno"
			}, null, 512), [[Q, n.style]])]),
			K("div", wd, [K("button", Td, [K("span", { innerHTML: e.initial.copyIcon }, null, 8, Ed), o[7] ||= J(" Копировать Style", -1)])])
		], 64));
	}
};
// src/vue/poetry/legacyIdeaEditorBridge.js
function Od({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_IDEA_EDITOR, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = /* @__PURE__ */ new Map(), i = !1;
	function a() {
		if (!i) for (let [i, a] of [
			["sb-vue-idea-fields", fd],
			["sb-vue-lyrics-source", md],
			["sb-vue-lyrics-tools", Dd]
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
var kd = typeof window < "u", Ad = Symbol(), jd;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(jd ||= {});
var Md = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function Nd(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function Pd(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		zd(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function Fd(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function Id(e) {
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
var Ld = typeof navigator == "object" ? navigator : { userAgent: "" }, Rd = /Macintosh/.test(Ld.userAgent) && /AppleWebKit/.test(Ld.userAgent) && !/Safari/.test(Ld.userAgent), zd = kd ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Rd ? Bd : "msSaveOrOpenBlob" in Ld ? Vd : Hd : () => {};
function Bd(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? Id(r) : Fd(r.href) ? Pd(e, t, n) : (r.target = "_blank", Id(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		Id(r);
	}, 0));
}
function Vd(e, t = "download", n) {
	if (typeof e == "string") {
		if (Fd(e)) Pd(e, t, n);
		else {
			let t = document.createElement("a");
			t.href = e, t.target = "_blank", setTimeout(function() {
				Id(t);
			});
		}
	} else navigator.msSaveOrOpenBlob(Nd(e, n), t);
}
function Hd(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return Pd(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(Md.HTMLElement)) || "safari" in Md, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || Rd) && typeof FileReader < "u") {
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
var { assign: Ud } = Object;
function Wd() {
	let e = Ae(!0), t = e.run(() => /* @__PURE__ */ P({})), n = [], r = [], i = Jt({
		install(e) {
			i._a = e, e.provide(Ad, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
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
var { assign: Gd } = Object, Kd = {
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
		return (t, n) => (W(), Ki(Sr(e.component), _e(Qi(e.componentProps)), null, 16));
	}
}, qd = [
	"data-nav",
	"aria-current",
	"aria-label",
	"title",
	"onClick"
], Jd = ["innerHTML"], Yd = { key: 0 }, Xd = {
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
		return (t, n) => (W(!0), G(H, null, z(e.items, (t) => (W(), G("button", {
			key: t.id,
			type: "button",
			class: D(e.mobile ? t.active ? "active" : "" : ["nav-button", { active: t.active }]),
			"data-nav": t.id,
			"aria-current": t.active ? "page" : void 0,
			"aria-label": e.mobile ? t.label : void 0,
			title: e.mobile ? t.label : void 0,
			onClick: (n) => e.onNavigate(t.id)
		}, [K("span", {
			class: "sb-vue-nav-icon",
			"aria-hidden": "true",
			innerHTML: t.iconHtml
		}, null, 8, Jd), e.mobile ? (W(), G("span", Yd, O(t.shortLabel), 1)) : (W(), G(H, { key: 1 }, [J(O(t.label), 1)], 64))], 10, qd))), 128));
	}
}, Zd = /* @__PURE__ */ new Set([
	"projects",
	"saved",
	"myideas",
	"myprompts",
	"events",
	"tracks",
	"artists"
]);
function Qd(e) {
	return e === "detail" ? "catalog" : Zd.has(e) ? "account" : e;
}
function $d(e) {
	let t = Qd(e?.active), n = /* @__PURE__ */ new Set(), r = [];
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
var ef = [{
	key: "sidebar",
	selector: "[data-sb-vue-sidebar]",
	mobile: !1
}, {
	key: "mobile",
	selector: "[data-sb-vue-mobile]",
	mobile: !0
}];
function tf({ mountVueFeature: e, unmountVueFeature: t }) {
	let n = window.SUNOBOOM_LEGACY_NAV, r = document.getElementById("app");
	if (!n || !r || typeof n.snapshot != "function") return () => {};
	let i = /* @__PURE__ */ new Map(), a = !1;
	function o() {
		if (a) return;
		let t = $d(n.snapshot()), o = JSON.stringify(t);
		for (let { key: a, selector: s, mobile: c } of ef) {
			let l = r.querySelector(s), u = i.get(a);
			if (!l) {
				u?.unmount(), i.delete(a);
				continue;
			}
			if (u?.target === l && u.signature === o) continue;
			u?.unmount();
			let d = e(l, Xd, {
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
var nf = ["data-id"], rf = { class: "genre-content" }, af = { class: "kicker" }, of = { class: "foot" }, sf = {
	__name: "GenreCards",
	props: { genres: {
		type: Array,
		required: !0
	} },
	setup(e) {
		return (t, n) => (W(!0), G(H, null, z(e.genres, (e) => (W(), G("button", {
			key: e.id,
			type: "button",
			class: "genre-card",
			style: E({ "--accent": e.color }),
			"data-action": "genre",
			"data-id": e.id
		}, [n[1] ||= K("div", {
			class: "art",
			"aria-hidden": "true"
		}, null, -1), K("div", rf, [K("div", null, [
			K("div", af, O(e.family) + " · " + O(e.bpm[0]) + "–" + O(e.bpm[1]) + " BPM", 1),
			K("h3", null, O(e.name), 1),
			K("p", null, O(e.tagline), 1)
		]), K("div", of, [K("span", null, O(e.era), 1), n[0] ||= K("span", { style: { color: "#ffacd9" } }, "Открыть →", -1)])])], 12, nf))), 128));
	}
}, cf = { class: "genre-family-toolbar" }, lf = { class: "search-box" }, uf = ["innerHTML"], df = { class: "hint" }, ff = { class: "genre-family-summary" }, pf = { id: "catalog-count" }, mf = {
	class: "hint",
	id: "sb-academy-search-hint"
}, hf = {
	id: "catalog-cards",
	class: "genre-families"
}, gf = [
	"data-family",
	"open",
	"onToggle"
], _f = {
	class: "genre-family-icon",
	"aria-hidden": "true"
}, vf = { class: "genre-family-heading" }, yf = { class: "genre-family-right" }, bf = { class: "genre-family-count" }, xf = { class: "genre-family-body" }, Sf = {
	key: 0,
	class: "sb-sacred-index"
}, Cf = {
	key: 0,
	class: "sb-sacred-overview"
}, wf = { class: "genre-grid" }, Tf = { class: "sb-sacred-religions" }, Ef = [
	"data-sb-religion",
	"open",
	"onToggle"
], Df = { class: "sb-sacred-religion-header" }, Of = {
	class: "sb-sacred-religion-icon",
	"aria-hidden": "true"
}, kf = { class: "sb-sacred-religion-label" }, Af = { class: "sb-sacred-count" }, jf = { class: "sb-sacred-religion-content" }, Mf = [
	"data-sb-branch",
	"open",
	"onToggle"
], Nf = { class: "sb-sacred-branch-header" }, Pf = { class: "sb-sacred-branch-label" }, Ff = { class: "sb-sacred-count" }, If = { class: "sb-sacred-branch-content" }, Lf = { class: "genre-grid" }, Rf = {
	key: 1,
	class: "genre-grid"
}, zf = {
	key: 1,
	class: "genre-family-empty"
}, Bf = {
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
		let t = e, n = /* @__PURE__ */ P(t.snapshot.query || ""), r = /* @__PURE__ */ Bt({
			family: { ...t.snapshot.expanded?.family || {} },
			religion: { ...t.snapshot.expanded?.religion || {} },
			branch: { ...t.snapshot.expanded?.branch || {} }
		}), i = Z(() => t.search(n.value)), a = Z(() => !!n.value.trim()), o = Z(() => {
			let e = i.value.ids == null ? null : new Set(i.value.ids);
			return (t.snapshot.families || []).map((t) => ({
				...t,
				genres: t.genres.filter((t) => !e || e.has(t.id))
			})).filter((e) => e.genres.length);
		}), s = Z(() => o.value.reduce((e, t) => e + t.genres.length, 0)), c = Z(() => a.value ? {
			name: "По названиям жанров",
			family: "По направлениям",
			artist: "По исполнителям",
			description: "По описаниям и звучанию"
		}[i.value.mode] || "" : "Поиск работает при вводе"), l = Z(() => o.value.find((e) => e.name === "Религиозная музыка")), u = Z(() => l.value?.genres.find((e) => e.id === "sacred-music")), d = Z(() => {
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
		return (t, r) => (W(), G(H, null, [
			K("div", cf, [K("label", lf, [K("span", {
				innerHTML: e.searchIcon,
				"aria-hidden": "true"
			}, null, 8, uf), L(K("input", {
				id: "genre-search",
				"onUpdate:modelValue": r[0] ||= (e) => n.value = e,
				type: "search",
				enterkeyhint: "search",
				autocapitalize: "off",
				spellcheck: "false",
				"aria-label": "Поиск жанров",
				placeholder: "Поиск жанра, поджанра или исполнителя…",
				autocomplete: "off"
			}, null, 512), [[Q, n.value]])]), K("span", df, O(e.snapshot.families.length) + " разделов · " + O(e.snapshot.families.reduce((e, t) => e + t.genres.length, 0)) + " жанров", 1)]),
			K("div", ff, [K("h2", pf, O(a.value ? "Найдено жанров" : "Музыкальные жанры") + " · " + O(s.value), 1), K("span", mf, O(c.value), 1)]),
			K("div", hf, [o.value.length ? (W(!0), G(H, { key: 0 }, z(o.value, (e) => (W(), G("details", {
				key: e.name,
				class: "genre-family",
				"data-family": e.name,
				style: E({ "--family-accent": e.meta.accent }),
				open: f("family", e.name),
				onToggle: (t) => p("family", e.name, t)
			}, [K("summary", null, [
				K("span", _f, O(e.meta.icon), 1),
				K("span", vf, [K("strong", null, O(e.name), 1), K("small", null, O(e.meta.desc), 1)]),
				K("span", yf, [K("span", bf, O(e.genres.length) + " " + O(m(e.genres.length)), 1), r[1] ||= K("svg", {
					class: "genre-family-chevron",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2",
					"aria-hidden": "true"
				}, [K("path", { d: "m5 9 7 7 7-7" })], -1)])
			]), K("div", xf, [e.name === "Религиозная музыка" ? (W(), G("div", Sf, [
				r[5] ||= K("div", { class: "sb-sacred-intro" }, [
					K("span", { class: "sb-sacred-eyebrow" }, "МУЗЫКА МИРОВЫХ РЕЛИГИЙ"),
					K("h3", null, "Религии и музыкальные традиции"),
					K("p", null, "Открой религию, затем её направление или течение. Здесь представлены музыкальные традиции — их границы не всегда совпадают с конфессиональными.")
				], -1),
				u.value ? (W(), G("div", Cf, [r[2] ||= K("div", { class: "sb-sacred-overview-label" }, "📖 Обзор раздела", -1), K("div", wf, [q(sf, { genres: [u.value] }, null, 8, ["genres"])])])) : Y("", !0),
				K("div", Tf, [(W(!0), G(H, null, z(d.value, (e) => (W(), G("details", {
					key: e.id,
					class: "sb-sacred-religion",
					"data-sb-religion": e.id,
					open: f("religion", e.id),
					onToggle: (t) => p("religion", e.id, t)
				}, [K("summary", Df, [
					K("span", Of, O(e.icon), 1),
					K("span", kf, [K("strong", null, O(e.name), 1), K("small", null, O(e.description), 1)]),
					K("span", Af, O(e.count), 1),
					r[3] ||= K("span", {
						class: "sb-sacred-chevron",
						"aria-hidden": "true"
					}, "⌄", -1)
				]), K("div", jf, [(W(!0), G(H, null, z(e.branches, (e) => (W(), G("details", {
					key: e.id,
					class: "sb-sacred-branch",
					"data-sb-branch": e.id,
					open: f("branch", e.id),
					onToggle: (t) => p("branch", e.id, t)
				}, [K("summary", Nf, [
					K("span", Pf, [K("strong", null, O(e.name), 1), K("small", null, O(e.description), 1)]),
					K("span", Ff, O(e.genres.length) + " " + O(h(e.genres.length)), 1),
					r[4] ||= K("span", {
						class: "sb-sacred-chevron",
						"aria-hidden": "true"
					}, "⌄", -1)
				]), K("div", If, [K("div", Lf, [q(sf, { genres: e.genres }, null, 8, ["genres"])])])], 40, Mf))), 128))])], 40, Ef))), 128))])
			])) : (W(), G("div", Rf, [q(sf, { genres: e.genres }, null, 8, ["genres"])]))])], 44, gf))), 128)) : (W(), G("div", zf, "Ничего не найдено. Попробуй другой запрос."))])
		], 64));
	}
};
// src/vue/academy/legacyAcademyBridge.js
function Vf({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ACADEMY, n = document.getElementById("app");
	if (!t || !n || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-academy-root");
		if (r?.target === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o?.families?.length) return;
		let s = e(a, Bf, {
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
var Hf = {
	class: "gb-grid",
	"data-sb-vue-overview": ""
}, Uf = { class: "gb-column" }, Wf = { class: "gb-panel pink" }, Gf = { class: "gb-unit" }, Kf = { class: "gb-unit" }, qf = { class: "gb-unit" }, Jf = { class: "gb-panel" }, Yf = ["innerHTML"], Xf = { class: "gb-column" }, Zf = { class: "gb-panel blue" }, Qf = { style: {
	"font-size": "26px",
	"font-weight": "900",
	color: "#ffe2b0"
} }, $f = { class: "gb-artists" }, ep = { class: "gb-panel pink" }, tp = ["data-id"], np = ["innerHTML"], rp = {
	__name: "GenreOverview",
	props: { genre: {
		type: Object,
		required: !0
	} },
	emits: ["select-tab"],
	setup(e) {
		return (t, n) => (W(), G("div", Hf, [K("div", Uf, [K("section", Wf, [
			n[7] ||= K("div", { class: "gb-sup" }, "01 / ЗНАКОМСТВО С ЖАНРОМ", -1),
			n[8] ||= K("h2", null, "Характер и звучание", -1),
			K("p", null, [K("strong", null, O(e.genre.tagline), 1)]),
			K("p", null, O(e.genre.description), 1),
			K("div", Gf, [n[2] ||= K("b", null, "🎸", -1), K("div", null, [n[1] ||= K("strong", null, "Инструменты", -1), K("span", null, O(e.genre.instruments) + ".", 1)])]),
			K("div", Kf, [n[4] ||= K("b", null, "🎛️", -1), K("div", null, [n[3] ||= K("strong", null, "Саунд", -1), K("span", null, O(e.genre.style) + ".", 1)])]),
			K("div", qf, [n[6] ||= K("b", null, "✍️", -1), K("div", null, [n[5] ||= K("strong", null, "Тематика песен", -1), K("span", null, O(e.genre.themes) + ".", 1)])])
		]), K("section", Jf, [
			n[10] ||= K("div", { class: "gb-sup" }, "03 / ИДЕИ ДЛЯ СТАРТА", -1),
			n[11] ||= K("h2", null, "Что можно спеть", -1),
			(W(!0), G(H, null, z(e.genre.ideas, (e, t) => (W(), G("div", {
				key: t,
				class: "gb-idea"
			}, [K("strong", null, O(e.title), 1), K("p", null, O(e.pitch), 1)]))), 128)),
			K("button", {
				type: "button",
				class: "btn ghost small",
				onClick: n[0] ||= (e) => t.$emit("select-tab", "ideas")
			}, [n[9] ||= J(" Все идеи ", -1), K("span", {
				"aria-hidden": "true",
				innerHTML: e.genre.icons.arrow
			}, null, 8, Yf)])
		])]), K("div", Xf, [K("section", Zf, [
			n[12] ||= K("div", { class: "gb-sup" }, "02 / ПАСПОРТ НАПРАВЛЕНИЯ", -1),
			n[13] ||= K("h2", null, "История и сцена", -1),
			n[14] ||= K("div", { class: "info-label" }, "Эпоха", -1),
			K("p", null, O(e.genre.era), 1),
			n[15] ||= K("div", { class: "info-label" }, "Диапазон темпа", -1),
			K("p", Qf, O(e.genre.bpm[0]) + "–" + O(e.genre.bpm[1]) + " BPM", 1),
			n[16] ||= K("div", { class: "info-label" }, "Исполнители для знакомства", -1),
			K("div", $f, [(W(!0), G(H, null, z(e.genre.artists, (e) => (W(), G("span", { key: e }, O(e), 1))), 128))])
		]), K("section", ep, [n[18] ||= ea("<div class=\"gb-sup\">04 / ТВОЯ МУЗЫКА</div><h2>Преврати знания в трек</h2><p>Выбери вокал, настроение и темп, затем создай промпт и структуру песни в Suno Studio.</p><div class=\"gb-unit\"><b>🎤</b><div><strong>Вокал</strong><span>Мужской, женский или дуэт; можно использовать русский язык.</span></div></div><div class=\"gb-unit\"><b>⚡</b><div><strong>Динамика</strong><span>Настрой энергию и характер припева под историю.</span></div></div>", 5), K("button", {
			type: "button",
			class: "btn primary small",
			"data-action": "use-genre",
			"data-id": e.genre.id
		}, [K("span", {
			innerHTML: e.genre.icons.studio,
			"aria-hidden": "true"
		}, null, 8, np), n[17] ||= J(" Открыть студию ", -1)], 8, tp)])])]));
	}
}, ip = {
	key: 0,
	id: "sb-artist-expanded",
	class: "ahx-wrap",
	"data-sb-vue-artists": ""
}, ap = { class: "ahx-intro" }, op = { class: "gb-eyebrow" }, sp = {
	class: "ahx-toolbar",
	role: "group",
	"aria-label": "Музыкальные сцены"
}, cp = ["aria-pressed"], lp = ["aria-pressed"], up = { class: "ahx-filters" }, dp = { class: "ahx-search" }, fp = ["innerHTML"], pp = {
	class: "ahx-filter-buttons",
	role: "group",
	"aria-label": "Фильтр исполнителей"
}, mp = [
	"data-vue-artist-filter",
	"aria-pressed",
	"onClick"
], hp = {
	id: "ahx-count",
	class: "ahx-count",
	"aria-live": "polite"
}, gp = { class: "ahx-section-head" }, _p = { class: "ahx-eyebrow" }, vp = { class: "ahx-num" }, yp = { class: "ahx-grid" }, bp = ["data-ahx-group"], xp = { class: "ahx-card-top" }, Sp = {
	class: "ahx-avatar",
	"aria-hidden": "true"
}, Cp = { class: "ahx-title" }, wp = { class: "ahx-era" }, Tp = {
	key: 0,
	class: "ahx-track"
}, Ep = {
	id: "ahx-no-results",
	class: "ahx-no-results"
}, Dp = {
	key: 1,
	class: "ahx-empty"
}, Op = {
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
		let t = e, n = /* @__PURE__ */ P(t.catalog.initialScene()), r = /* @__PURE__ */ P(""), i = /* @__PURE__ */ P("all"), a = Z(() => t.catalog.getScene(t.genre.id, n.value)), o = Z(() => (a.value?.groups || []).map((e) => ({
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
		}))), s = Z(() => o.value.reduce((e, t) => e + t.artists.length, 0)), c = Z(() => (a.value?.groups || []).reduce((e, t) => e + t.artists.length, 0));
		async function l(e) {
			(e === "ru" || e === "world") && (n.value = e, t.catalog.setScene(e), r.value = "", i.value = "all", await Sn(), t.enhanceProfiles?.());
		}
		return R(() => t.enhanceProfiles?.()), pr(() => t.enhanceProfiles?.()), (t, u) => a.value ? (W(), G("div", ip, [
			K("div", ap, [
				K("div", op, "АКАДЕМИЯ SUNOBOOM · " + O(e.genre.name), 1),
				u[4] ||= K("h2", null, "Исполнители и композиторы", -1),
				K("p", null, O(a.value.description), 1)
			]),
			K("div", sp, [K("button", {
				type: "button",
				"data-vue-artist-scene": "world",
				"aria-pressed": n.value === "world",
				class: D({ on: n.value === "world" }),
				onClick: u[0] ||= (e) => l("world")
			}, [u[5] ||= J(" 🌍 Мировая сцена ", -1), K("span", null, O(a.value.worldCount), 1)], 10, cp), K("button", {
				type: "button",
				"data-vue-artist-scene": "ru",
				"aria-pressed": n.value === "ru",
				class: D({ on: n.value === "ru" }),
				onClick: u[1] ||= (e) => l("ru")
			}, [u[6] ||= J(" 🎤 Русскоязычные ", -1), K("span", null, O(a.value.ruCount), 1)], 10, lp)]),
			c.value ? (W(), G(H, { key: 0 }, [
				K("div", up, [K("label", dp, [K("span", {
					"aria-hidden": "true",
					innerHTML: e.genre.icons.overview
				}, null, 8, fp), L(K("input", {
					"onUpdate:modelValue": u[2] ||= (e) => r.value = e,
					type: "search",
					"data-vue-artist-search": "",
					placeholder: "Найти исполнителя или произведение…",
					"aria-label": "Поиск по исполнителям"
				}, null, 512), [[Q, r.value]])]), K("div", pp, [(W(), G(H, null, z([
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
				], (e) => K("button", {
					key: e.id,
					type: "button",
					"data-vue-artist-filter": e.id,
					"aria-pressed": i.value === e.id,
					onClick: (t) => i.value = e.id
				}, O(e.label), 9, mp)), 64))])]),
				K("p", hp, "Показано " + O(s.value) + " из " + O(c.value) + " исполнителей.", 1),
				(W(!0), G(H, null, z(o.value, (e) => L((W(), G("section", {
					key: e.index,
					class: "ahx-section",
					"data-ahx-section": ""
				}, [K("div", gp, [K("div", null, [K("span", _p, "0" + O(e.index + 1) + " / ИСПОЛНИТЕЛИ", 1), K("h3", null, O(e.index ? "Современная сцена и продолжатели" : "Классика и предшественники"), 1)]), K("span", vp, O(e.artists.length), 1)]), K("div", yp, [(W(!0), G(H, null, z(e.artists, (e) => (W(), G("article", {
					key: e.key,
					class: "ahx-card",
					"data-ahx-group": e.group
				}, [
					K("div", xp, [K("span", Sp, O(e.initials), 1), K("div", Cp, [K("h4", null, O(e.name), 1), K("span", wp, O(e.period || "Музыкальная сцена"), 1)])]),
					K("span", { class: D(["ahx-role", { "ahx-role-neighbor": e.group === "adjacent" }]) }, O(e.label), 3),
					K("p", null, O(e.bio || "Музыкальное направление и характерный творческий почерк."), 1),
					e.track ? (W(), G("div", Tp, [u[7] ||= K("small", null, "Ориентир для прослушивания", -1), K("strong", null, "♫ " + O(e.track), 1)])) : Y("", !0)
				], 8, bp))), 128))])])), [[Ba, e.artists.length]])), 128)),
				L(K("div", Ep, " По заданному поиску исполнители не найдены. Попробуй другой запрос или выбери «Все». ", 512), [[Ba, s.value === 0]])
			], 64)) : (W(), G("div", Dp, [
				u[8] ||= K("strong", null, "Русскоязычная подборка ещё уточняется", -1),
				u[9] ||= K("p", null, "Для этого узкого направления пока нет достаточно подтверждённых примеров. Мы не будем подставлять артистов из других жанров без пояснения.", -1),
				K("button", {
					class: "btn ghost",
					type: "button",
					onClick: u[3] ||= (e) => l("world")
				}, "Посмотреть мировую сцену")
			])),
			u[10] ||= K("p", { class: "ahx-footnote" }, "В подборках могут встречаться близкие стили, кино- и игровая музыка, инструментальные коллективы. Их связь с жанром поясняется в карточке. Указанные произведения — ориентиры для знакомства, а не ссылки на конкретные релизы.", -1)
		])) : Y("", !0);
	}
}, kp = {
	class: "idea-grid",
	"data-sb-vue-ideas": ""
}, Ap = { class: "idea-badge" }, jp = { class: "actions" }, Mp = ["data-id", "data-i"], Np = ["innerHTML"], Pp = [
	"data-id",
	"data-i",
	"aria-pressed"
], Fp = ["innerHTML"], Ip = {
	__name: "GenreIdeas",
	props: { genre: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (W(), G("div", kp, [(W(!0), G(H, null, z(e.genre.allIdeas, (t) => (W(), G("div", {
			key: t.index,
			class: "idea"
		}, [
			K("div", Ap, O(e.genre.name) + " · " + O(t.mood), 1),
			K("h3", null, O(t.title), 1),
			K("p", null, O(t.pitch), 1),
			K("div", jp, [K("button", {
				type: "button",
				class: "btn primary small",
				"data-action": "idea-use",
				"data-id": e.genre.id,
				"data-i": t.index
			}, [K("span", {
				"aria-hidden": "true",
				innerHTML: e.genre.icons.studio
			}, null, 8, Np), n[0] ||= J(" В студию ", -1)], 8, Mp), K("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "idea-save",
				"data-id": e.genre.id,
				"data-i": t.index,
				"aria-pressed": t.saved ? "true" : "false"
			}, [K("span", {
				"aria-hidden": "true",
				innerHTML: e.genre.icons.heart
			}, null, 8, Fp), J(" " + O(t.saved ? "Сохранено" : "Сохранить"), 1)], 8, Pp)])
		]))), 128))]));
	}
}, Lp = {
	class: "panel",
	"data-sb-vue-prompts": ""
}, Rp = { class: "idea-grid" }, zp = { class: "idea" }, Bp = ["data-id"], Vp = ["innerHTML"], Hp = { class: "idea" }, Up = ["data-id"], Wp = ["innerHTML"], Gp = {
	__name: "GenrePrompts",
	props: { genre: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (W(), G("div", Lp, [
			n[5] ||= K("h3", null, "Шаблоны звучания", -1),
			n[6] ||= K("p", null, "Начни с одного из вариантов. Он перенесёт настройки жанра в конструктор — там можно выбрать вокал, настроение и язык.", -1),
			K("div", Rp, [K("div", zp, [
				n[1] ||= K("div", { class: "idea-badge" }, "Оригинальное звучание", -1),
				K("h3", null, O(e.genre.name), 1),
				K("p", null, O(e.genre.style) + ".", 1),
				K("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "use-genre",
					"data-id": e.genre.id
				}, [n[0] ||= J(" Настроить в студии ", -1), K("span", {
					"aria-hidden": "true",
					innerHTML: e.genre.icons.arrow
				}, null, 8, Vp)], 8, Bp)
			]), K("div", Hp, [
				n[3] ||= K("div", { class: "idea-badge" }, "Альтернативная версия", -1),
				n[4] ||= K("h3", null, "Мягкая атмосфера", -1),
				K("p", null, O(e.genre.style) + ", restrained dynamics, warm intimate production, emotional melodies.", 1),
				K("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "use-soft",
					"data-id": e.genre.id
				}, [n[2] ||= J(" Настроить в студии ", -1), K("span", {
					"aria-hidden": "true",
					innerHTML: e.genre.icons.arrow
				}, null, 8, Wp)], 8, Up)
			])])
		]));
	}
}, Kp = { class: "gb-hero" }, qp = { class: "gb-content" }, Jp = { class: "gb-eyebrow" }, Yp = { class: "gb-title" }, Xp = { class: "gb-desc" }, Zp = { class: "gb-tags" }, Qp = { class: "gb-buttons" }, $p = ["data-id"], em = ["innerHTML"], tm = ["data-id"], nm = ["innerHTML"], rm = {
	class: "gb-vinyl",
	"aria-hidden": "true"
}, im = { class: "gb-equalizer" }, am = { class: "gb-facts" }, om = { class: "gb-fact" }, sm = { class: "gb-fact" }, cm = { class: "gb-fact" }, lm = { class: "gb-fact" }, um = { class: "genre-detail-layout" }, dm = {
	class: "genre-side-nav",
	"aria-label": "ЖАНР-НАВ — меню жанра"
}, fm = {
	class: "genre-side-links",
	"aria-label": "Разделы жанра"
}, pm = [
	"data-tab",
	"aria-current",
	"onClick"
], mm = ["innerHTML"], hm = {
	class: "genre-detail-content",
	id: "genre-nav-content",
	"aria-label": "Содержимое раздела жанра"
}, gm = ["innerHTML"], _m = {
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
		], r = /* @__PURE__ */ P(t.genre.tab), i = /* @__PURE__ */ P(t.tabContent(t.genre.id, r.value) || "");
		async function a(e) {
			if (r.value === e || !n.some((t) => t.id === e)) return;
			let a = t.tabContent(t.genre.id, e);
			typeof a == "string" && (r.value = e, i.value = a, await Sn(), window.innerWidth <= 850 && document.getElementById("genre-nav-content")?.scrollIntoView({
				block: "start",
				behavior: "smooth"
			}));
		}
		return (t, o) => (W(), G("div", {
			class: "genre-bright",
			style: E({ "--accent": e.genre.color })
		}, [K("div", Kp, [
			o[5] ||= K("div", { class: "gb-top" }, [K("button", {
				type: "button",
				class: "back",
				"data-action": "academy-back",
				"aria-label": "Назад к разделу Академии"
			}, "← Назад"), K("small", null, "SUNOBOOM · MUSIC ATLAS")], -1),
			K("div", qp, [K("div", null, [
				K("div", Jp, O(e.genre.family) + " · " + O(e.genre.era), 1),
				K("h1", Yp, O(e.genre.name), 1),
				K("p", Xp, O(e.genre.description), 1),
				K("div", Zp, [
					K("span", null, O(e.genre.tagline), 1),
					K("span", null, O(e.genre.bpm[0]) + "–" + O(e.genre.bpm[1]) + " BPM", 1),
					K("span", null, O(e.genre.ideasCount) + " идеи", 1)
				]),
				K("div", Qp, [K("button", {
					type: "button",
					class: "btn primary",
					"data-action": "use-genre",
					"data-id": e.genre.id
				}, [K("span", {
					innerHTML: e.genre.icons.studio,
					"aria-hidden": "true"
				}, null, 8, em), o[0] ||= J(" Создать в Suno ", -1)], 8, $p), K("button", {
					type: "button",
					class: "btn ghost",
					"data-action": "favorite",
					"data-id": e.genre.id
				}, [K("span", {
					innerHTML: e.genre.icons.heart,
					"aria-hidden": "true"
				}, null, 8, nm), J(" " + O(e.genre.favorite ? "В избранном" : "В избранное"), 1)], 8, tm)])
			]), K("div", rm, [K("div", im, [(W(), G(H, null, z(9, (e) => K("i", { key: e })), 64))])])]),
			K("div", am, [
				K("div", om, [o[1] ||= K("small", null, "История", -1), K("strong", null, O(e.genre.era), 1)]),
				K("div", sm, [o[2] ||= K("small", null, "Темп", -1), K("strong", null, O(e.genre.bpm[0]) + "–" + O(e.genre.bpm[1]) + " BPM", 1)]),
				K("div", cm, [o[3] ||= K("small", null, "Треки", -1), K("strong", null, O(e.genre.ideasCount) + " сюжетных идеи", 1)]),
				K("div", lm, [o[4] ||= K("small", null, "Артисты", -1), K("strong", null, O(e.genre.artistCount) + " ориентиров", 1)])
			])
		]), K("div", um, [K("aside", dm, [o[7] ||= K("div", { class: "genre-side-head" }, [K("span", null, "ЖАНР-НАВ"), K("small", null, "Разделы карточки")], -1), K("nav", fm, [(W(), G(H, null, z(n, (t) => K("button", {
			key: t.id,
			type: "button",
			class: D(["genre-side-item", { active: r.value === t.id }]),
			"data-tab": t.id,
			"aria-controls": "genre-nav-content",
			"aria-current": r.value === t.id ? "page" : "false",
			onClick: (e) => a(t.id)
		}, [
			K("span", {
				class: "genre-side-icon",
				innerHTML: e.genre.icons[t.id],
				"aria-hidden": "true"
			}, null, 8, mm),
			K("span", null, O(t.label), 1),
			o[6] ||= K("span", {
				class: "genre-side-chevron",
				"aria-hidden": "true"
			}, "›", -1)
		], 10, pm)), 64))])]), K("section", hm, [r.value === "overview" ? (W(), Ki(rp, {
			key: 0,
			genre: e.genre,
			onSelectTab: a
		}, null, 8, ["genre"])) : r.value === "artists" && e.artistCatalog ? (W(), Ki(Op, {
			key: 1,
			genre: e.genre,
			catalog: e.artistCatalog,
			"enhance-profiles": e.enhanceArtistProfiles
		}, null, 8, [
			"genre",
			"catalog",
			"enhance-profiles"
		])) : r.value === "ideas" ? (W(), Ki(Ip, {
			key: 2,
			genre: e.genre
		}, null, 8, ["genre"])) : r.value === "prompts" ? (W(), Ki(Gp, {
			key: 3,
			genre: e.genre
		}, null, 8, ["genre"])) : (W(), G("div", {
			key: 4,
			innerHTML: i.value
		}, null, 8, gm))])])], 4));
	}
};
// src/vue/academy/legacyGenreDetailBridge.js
function vm({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_GENRE, n = document.getElementById("app");
	if (!n || !t || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-genre-detail");
		if (r?.target === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o?.id) return;
		let s = e(a, _m, {
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
var ym = { class: "panel" }, bm = { class: "field" }, xm = ["value"], Sm = ["value"], Cm = { class: "form-grid" }, wm = { class: "field" }, Tm = ["value"], Em = ["value"], Dm = { class: "field" }, Om = ["value"], km = ["value"], Am = { class: "field" }, jm = ["value"], Mm = ["value"], Nm = { class: "field" }, Pm = ["value"], Fm = ["value"], Im = { class: "field" }, Lm = { for: "b-tempo" }, Rm = {
	id: "tempo-num",
	style: { color: "#ffa8d5" }
}, zm = { class: "range" }, Bm = ["value"], Vm = { id: "bpm-output" }, Hm = {
	class: "muted",
	style: { "font-size": "11px" }
}, Um = { class: "field" }, Wm = ["value"], Gm = { class: "field" }, Km = ["value"], qm = { class: "checkrow" }, Jm = ["checked", "onChange"], Ym = {
	class: "panel",
	style: {
		position: "sticky",
		top: "20px"
	}
}, Xm = {
	class: "output",
	id: "prompt-output"
}, Zm = { class: "counter" }, Qm = { id: "prompt-count" }, $m = { class: "two-col" }, eh = {
	class: "btn primary",
	type: "button",
	"data-action": "copy-prompt"
}, th = ["innerHTML"], nh = {
	class: "btn ghost",
	type: "button",
	"data-action": "save-prompt"
}, rh = ["innerHTML"], ih = { class: "list-pills" }, ah = {
	__name: "StudioBuilder",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Zt(t.api.snapshot()), r = Z(() => n.value?.settings || {}), i = Z(() => n.value?.genre || {
			name: "",
			family: "",
			bpm: [0, 0]
		}), a = Z(() => String(n.value?.prompt || "")), o = [
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
		return R(() => window.addEventListener("sunoboom:studio-updated", d)), hr(() => window.removeEventListener("sunoboom:studio-updated", d)), (e, t) => (W(), G(H, null, [K("div", ym, [
			t[17] ||= K("h3", null, "Параметры трека", -1),
			K("div", bm, [t[8] ||= K("label", { for: "b-genre" }, "Жанр", -1), K("select", {
				id: "b-genre",
				value: r.value.genre,
				onChange: t[0] ||= (e) => f("genre", e.target.value)
			}, [(W(!0), G(H, null, z(n.value.genres, (e) => (W(), G("option", {
				key: e.id,
				value: e.id
			}, O(e.name), 9, Sm))), 128))], 40, xm)]),
			K("div", Cm, [
				K("div", wm, [t[9] ||= K("label", { for: "b-mood" }, "Настроение", -1), K("select", {
					id: "b-mood",
					value: r.value.mood,
					onChange: t[1] ||= (e) => f("mood", e.target.value)
				}, [(W(), G(H, null, z(o, ([e, t]) => K("option", {
					key: e,
					value: e
				}, O(t), 9, Em)), 64))], 40, Tm)]),
				K("div", Dm, [t[10] ||= K("label", { for: "b-vocal" }, "Вокал", -1), K("select", {
					id: "b-vocal",
					value: r.value.vocal,
					onChange: t[2] ||= (e) => f("vocal", e.target.value)
				}, [(W(), G(H, null, z(s, ([e, t]) => K("option", {
					key: e,
					value: e
				}, O(t), 9, km)), 64))], 40, Om)]),
				K("div", Am, [t[11] ||= K("label", { for: "b-lang" }, "Язык текста", -1), K("select", {
					id: "b-lang",
					value: r.value.language,
					onChange: t[3] ||= (e) => f("language", e.target.value)
				}, [(W(), G(H, null, z(c, ([e, t]) => K("option", {
					key: e,
					value: e
				}, O(t), 9, Mm)), 64))], 40, jm)]),
				K("div", Nm, [t[12] ||= K("label", { for: "b-energy" }, "Энергия", -1), K("select", {
					id: "b-energy",
					value: r.value.energy,
					onChange: t[4] ||= (e) => f("energy", e.target.value)
				}, [(W(), G(H, null, z(l, ([e, t]) => K("option", {
					key: e,
					value: e
				}, O(t), 9, Fm)), 64))], 40, Pm)])
			]),
			K("div", Im, [
				K("label", Lm, [
					t[13] ||= J("Темп · ", -1),
					K("span", Rm, O(r.value.tempo), 1),
					t[14] ||= J(" BPM", -1)
				]),
				K("div", zm, [K("input", {
					type: "range",
					id: "b-tempo",
					min: "65",
					max: "200",
					step: "1",
					value: r.value.tempo,
					onInput: t[5] ||= (e) => f("tempo", Number(e.target.value))
				}, null, 40, Bm), K("output", Vm, O(r.value.tempo) + " BPM", 1)]),
				K("span", Hm, " Обычно для «" + O(i.value.name) + "»: " + O(i.value.bpm[0]) + "–" + O(i.value.bpm[1]) + " BPM ", 1)
			]),
			K("div", Um, [t[15] ||= K("label", { for: "b-theme" }, "Тема / история трека", -1), K("textarea", {
				id: "b-theme",
				rows: "2",
				value: r.value.theme,
				onInput: t[6] ||= (e) => f("theme", e.target.value),
				placeholder: "О чём будет песня?"
			}, null, 40, Wm)]),
			K("div", Gm, [t[16] ||= K("label", { for: "b-extra" }, "Дополнительные инструкции (необязательно)", -1), K("textarea", {
				id: "b-extra",
				rows: "2",
				value: r.value.extra,
				onInput: t[7] ||= (e) => f("extra", e.target.value),
				placeholder: "Например: memorable chorus, short guitar solo"
			}, null, 40, Km)]),
			K("div", qm, [(W(), G(H, null, z(u, ([e, t]) => K("label", { key: e }, [K("input", {
				type: "checkbox",
				checked: r.value[e],
				onChange: (t) => f(e, t.target.checked)
			}, null, 40, Jm), J(O(t), 1)])), 64))])
		]), K("div", Ym, [
			t[21] ||= K("div", { class: "eyebrow" }, "Готово к Suno", -1),
			t[22] ||= K("h3", null, "Твой промпт", -1),
			K("div", Xm, O(a.value), 1),
			K("div", Zm, [t[18] ||= K("span", null, "Максимум 1000 символов", -1), K("b", Qm, O(a.value.length) + " / 1000", 1)]),
			K("div", $m, [K("button", eh, [K("span", {
				"aria-hidden": "true",
				innerHTML: n.value.icons.copy
			}, null, 8, th), t[19] ||= J(" Копировать ", -1)]), K("button", nh, [K("span", {
				"aria-hidden": "true",
				innerHTML: n.value.icons.save
			}, null, 8, rh), t[20] ||= J(" Сохранить ", -1)])]),
			t[23] ||= K("div", { class: "spacer" }, null, -1),
			t[24] ||= K("div", { class: "notice" }, [K("strong", null, "Подсказка:"), J(" промпт задаёт стиль, а текст песни можно вводить отдельно в Suno. Результат генерации может отличаться от запроса.")], -1),
			t[25] ||= K("div", { class: "spacer" }, null, -1),
			t[26] ||= K("div", { class: "info-label" }, "Музыкальный профиль", -1),
			K("div", ih, [
				K("span", null, O(i.value.name), 1),
				K("span", null, O(i.value.family), 1),
				K("span", null, O(i.value.bpm[0]) + "–" + O(i.value.bpm[1]) + " BPM", 1)
			])
		])], 64));
	}
};
// src/vue/studio/legacyStudioBridge.js
function oh({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_STUDIO, n = document.getElementById("app");
	if (!n || !t || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector(".studio-grid");
		if (r?.target === a || (r &&= (r.unmount(), null), !a || !t.snapshot())) return;
		let o = e(a, ah, { api: t });
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
var sh = { class: "gm-layout" }, ch = { class: "gm-panel" }, lh = { class: "gm-stack" }, uh = { class: "gm-row-top" }, dh = { class: "gm-rank" }, fh = { class: "gm-field gm-genre-select" }, ph = ["for"], mh = [
	"id",
	"value",
	"data-gm-genre"
], hh = ["label"], gh = ["value"], _h = ["data-gm-value"], vh = [
	"data-slot",
	"aria-label",
	"disabled"
], yh = { class: "gm-slider-line" }, bh = [
	"max",
	"value",
	"data-gm-weight",
	"aria-label"
], xh = { class: "gm-meter" }, Sh = ["data-gm-meter"], Ch = { class: "gm-sub" }, wh = { class: "gm-actions" }, Th = ["disabled"], Eh = {
	class: "gm-mixture",
	"aria-label": "Доли музыкальных жанров"
}, Dh = ["data-gm-mixbar", "title"], Oh = { class: "gm-form-grid" }, kh = ["for"], Ah = [
	"id",
	"value",
	"data-gm-setting"
], jh = ["value"], Mh = { class: "gm-tempo" }, Nh = ["checked"], Ph = { class: "gm-tempo-row" }, Fh = ["value", "disabled"], Ih = { id: "gm-bpm" }, Lh = { class: "gm-field" }, Rh = ["value"], zh = { class: "gm-checks" }, Bh = ["data-gm-setting", "checked"], Vh = { class: "gm-panel gm-output-panel" }, Hh = {
	class: "gm-output",
	id: "gm-prompt",
	"aria-live": "polite"
}, Uh = { class: "gm-prompt-meta" }, Wh = { id: "gm-count" }, Gh = { class: "gm-field" }, Kh = ["value"], qh = { class: "gm-saved-list" }, Jh = {
	key: 0,
	class: "gm-muted"
}, Yh = { class: "gm-saved-actions" }, Xh = ["data-id"], Zh = ["data-id", "aria-label"], Qh = {
	__name: "GenreMixer",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Zt(t.api.snapshot()), r = Z(() => n.value?.rows || []), i = Z(() => n.value?.genres || []), a = Z(() => n.value?.settings || {}), o = Z(() => n.value?.options || {}), s = Z(() => n.value?.saved || []), c = Z(() => n.value?.prompt || ""), l = Z(() => n.value?.tempo || 115), u = Z(() => n.value?.title || "");
		function d() {
			let e = t.api.snapshot();
			e && (n.value = e);
		}
		R(() => window.addEventListener("sunoboom:mixer-updated", d)), hr(() => window.removeEventListener("sunoboom:mixer-updated", d));
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
		let p = Z(() => [
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
		return (e, t) => (W(), G(H, null, [t[14] ||= K("header", { class: "heading" }, [
			K("div", { class: "eyebrow" }, "Suno Studio · новый инструмент"),
			K("h1", null, [J("Жанровый "), K("span", { class: "gm-highlight" }, "миксер")]),
			K("p", null, "Соединяй от 2 до 4 жанров из Академии SUNOBOOM, задавай пропорции и создавай готовый Style-промпт для Suno.")
		], -1), K("div", sh, [K("section", ch, [
			t[3] ||= K("div", { class: "gm-section-head" }, [K("div", null, [K("h2", null, "Формула звучания"), K("p", null, "Меняй жанры и двигай ползунки — сумма всегда равна 100%.")]), K("span", { class: "gm-total" }, "Σ 100%")], -1),
			K("div", lh, [(W(!0), G(H, null, z(r.value, (e, t) => (W(), G("article", {
				key: e.id,
				class: "gm-row",
				style: E({ "--gm-color": e.color })
			}, [
				K("div", uh, [
					K("span", dh, O(String(t + 1).padStart(2, "0")), 1),
					K("div", fh, [K("label", { for: "gm-genre-" + t }, "Музыкальное направление", 8, ph), K("select", {
						id: "gm-genre-" + t,
						value: e.id,
						"data-gm-genre": t
					}, [(W(!0), G(H, null, z(f(t), (e) => (W(), G("optgroup", {
						key: e.family,
						label: e.family
					}, [(W(!0), G(H, null, z(e.items, (e) => (W(), G("option", {
						key: e.id,
						value: e.id
					}, O(e.name), 9, gh))), 128))], 8, hh))), 128))], 8, mh)]),
					K("span", {
						class: "gm-percent",
						"data-gm-value": t
					}, O(e.weight) + "%", 9, _h),
					K("button", {
						type: "button",
						class: "gm-remove",
						"data-action": "gm-remove",
						"data-slot": t,
						"aria-label": "Убрать жанр " + e.name,
						title: "Убрать жанр",
						disabled: r.value.length <= 2
					}, "×", 8, vh)
				]),
				K("div", yh, [K("input", {
					type: "range",
					min: "5",
					max: 100 - 5 * (r.value.length - 1),
					step: "1",
					value: e.weight,
					"data-gm-weight": t,
					"aria-label": "Доля жанра " + e.name
				}, null, 8, bh), K("div", xh, [K("span", {
					"data-gm-meter": t,
					style: E({ width: e.weight + "%" })
				}, null, 12, Sh)])]),
				K("p", Ch, O(e.family) + " · " + O(e.tagline) + " · " + O(e.instruments), 1)
			], 4))), 128))]),
			K("div", wh, [K("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "gm-add",
				disabled: r.value.length >= 4
			}, "＋ Добавить жанр", 8, Th), t[0] ||= K("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "gm-equal"
			}, "Поровну", -1)]),
			K("div", Eh, [(W(!0), G(H, null, z(r.value, (e) => (W(), G("span", {
				key: e.id,
				"data-gm-mixbar": e.id,
				style: E({
					width: e.weight + "%",
					background: e.color
				}),
				title: e.name + ": " + e.weight + "%"
			}, null, 12, Dh))), 128))]),
			t[4] ||= K("p", { class: "gm-muted" }, "Проценты — творческий ориентир для генерации, а не гарантия точного соотношения в готовой музыке.", -1),
			t[5] ||= K("div", { class: "gm-divider" }, null, -1),
			t[6] ||= K("h2", null, "Характер композиции", -1),
			K("div", Oh, [(W(!0), G(H, null, z(p.value, (e) => (W(), G("div", {
				key: e.key,
				class: "gm-field"
			}, [K("label", { for: "gm-" + e.key }, O(e.label), 9, kh), K("select", {
				id: "gm-" + e.key,
				value: a.value[e.key],
				"data-gm-setting": e.key
			}, [(W(!0), G(H, null, z(e.choices, ([e, t]) => (W(), G("option", {
				key: e,
				value: e
			}, O(t), 9, jh))), 128))], 8, Ah)]))), 128))]),
			K("div", Mh, [K("label", null, [K("input", {
				type: "checkbox",
				"data-gm-setting": "autoTempo",
				checked: a.value.autoTempo
			}, null, 8, Nh), t[1] ||= J(" Определять темп по жанрам", -1)]), K("div", Ph, [K("input", {
				id: "gm-tempo",
				type: "range",
				min: "65",
				max: "200",
				value: l.value,
				"data-gm-setting": "tempo",
				disabled: a.value.autoTempo
			}, null, 8, Fh), K("b", Ih, O(l.value) + " BPM", 1)])]),
			K("div", Lh, [t[2] ||= K("label", { for: "gm-theme" }, "Тема песни (необязательно)", -1), K("textarea", {
				id: "gm-theme",
				rows: "2",
				maxlength: "170",
				"data-gm-setting": "theme",
				value: a.value.theme,
				placeholder: "Например: ночной город, встреча после долгой разлуки"
			}, null, 8, Rh)]),
			K("div", zh, [(W(), G(H, null, z(m, ([e, t]) => K("label", { key: e }, [K("input", {
				type: "checkbox",
				"data-gm-setting": e,
				checked: a.value[e]
			}, null, 8, Bh), J(" " + O(t), 1)])), 64))])
		]), K("aside", Vh, [
			t[9] ||= K("div", { class: "eyebrow" }, "Результат микширования", -1),
			t[10] ||= K("h2", null, "Гибридный Style-промпт", -1),
			K("div", Hh, O(c.value), 1),
			K("div", Uh, [t[7] ||= K("span", null, "На английском · готово для Suno", -1), K("b", Wh, O(c.value.length) + " / 1000", 1)]),
			t[11] ||= ea("<div class=\"gm-output-actions\"><button type=\"button\" class=\"btn primary\" data-action=\"gm-copy\">Копировать</button><button type=\"button\" class=\"btn ghost\" data-action=\"gm-to-studio\">В Suno Studio</button></div><button type=\"button\" class=\"btn ghost gm-full\" data-action=\"gm-save-prompt\">Сохранить в «Мои промпты»</button><div class=\"gm-divider\"></div><h3>Мои сочетания</h3>", 4),
			K("div", Gh, [t[8] ||= K("label", { for: "gm-title" }, "Название сочетания", -1), K("input", {
				id: "gm-title",
				type: "text",
				maxlength: "90",
				"data-gm-title": "",
				value: u.value,
				placeholder: "Например: Северный электро-фолк"
			}, null, 8, Kh)]),
			t[12] ||= K("button", {
				type: "button",
				class: "btn ghost gm-full",
				"data-action": "gm-save-mix"
			}, "Сохранить формулу", -1),
			K("div", qh, [s.value.length ? Y("", !0) : (W(), G("p", Jh, "Сохранённых сочетаний пока нет. Придумай свой микс и сохрани его.")), (W(!0), G(H, null, z(s.value, (e) => (W(), G("article", {
				key: e.id,
				class: "gm-saved"
			}, [K("div", null, [K("strong", null, O(e.title), 1), K("small", null, O(e.summary), 1)]), K("div", Yh, [K("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "gm-load",
				"data-id": e.id
			}, "Открыть", 8, Xh), K("button", {
				type: "button",
				class: "btn danger small",
				"data-action": "gm-delete",
				"data-id": e.id,
				"aria-label": "Удалить " + e.title
			}, "×", 8, Zh)])]))), 128))]),
			t[13] ||= K("p", { class: "gm-muted" }, "Сохраняется в этом браузере и входит в общую JSON-копию данных SUNOBOOM. Подключение к ИИ для смешивания не требуется.", -1)
		])])], 64));
	}
};
// src/vue/studio/legacyMixerBridge.js
function $h({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_MIXER, n = document.getElementById("app");
	if (!t || !n || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-mixer-root");
		if (r?.target === a || (r &&= (r.unmount(), null), !a || !t.snapshot())) return;
		let o = e(a, Qh, { api: t });
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
var eg = {
	class: "sbpa-tabs",
	role: "group",
	"aria-label": "Источник промпта"
}, tg = ["aria-pressed"], ng = ["aria-pressed"], rg = {
	key: 0,
	class: "sbpa-manual"
}, ig = ["value"], ag = ["value"], og = ["value"], sg = {
	key: 1,
	class: "sbpa-context"
}, cg = {
	id: "sbpa-results",
	"aria-live": "polite"
}, lg = { class: "sbpa-scoreline" }, ug = {
	class: "sbpa-score",
	"aria-label": "Эвристическая оценка промпта"
}, dg = { class: "sbpa-score-info" }, fg = ["aria-valuenow"], pg = {
	key: 0,
	class: "sbpa-issues"
}, mg = {
	key: 1,
	class: "sbpa-clear"
}, hg = { class: "sbpa-actions" }, gg = {
	key: 0,
	type: "button",
	"data-sbpa-action": "load-studio"
}, _g = { id: "sbpa-proposal-slot" }, vg = {
	key: 0,
	class: "sbpa-proposal"
}, yg = { key: 0 }, bg = { key: 1 }, xg = { key: 2 }, Sg = {
	key: 3,
	class: "sbpa-alert"
}, Cg = ["value"], wg = {
	__name: "PromptAuditor",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Zt(t.api.snapshot()), r = Z(() => n.value?.mode === "manual"), i = Z(() => n.value?.report || {
			score: 0,
			length: 0,
			issues: [],
			status: ""
		}), a = Z(() => n.value?.genreId || ""), o = Z(() => n.value?.genres || []), s = Z(() => !!n.value?.proposalOpen), c = Z(() => n.value?.proposal || {
			text: "",
			removed: [],
			complete: !0
		});
		function l() {
			let e = t.api.snapshot();
			e && (n.value = e);
		}
		return R(() => window.addEventListener("sunoboom:auditor-updated", l)), hr(() => window.removeEventListener("sunoboom:auditor-updated", l)), (e, t) => (W(), G(H, null, [
			t[10] ||= K("header", { class: "sbpa-head" }, [K("div", null, [
				K("span", { class: "sbpa-eyebrow" }, "SUNOBOOM · ПРОВЕРКА"),
				K("h2", null, "Интеллектуальный аудитор промптов"),
				K("p", null, "Ищет повторы, противоречия, перегрузку и особенности жанра до отправки в Suno.")
			]), K("span", { class: "sbpa-local" }, "Проверка по правилам · без API")], -1),
			K("div", eg, [K("button", {
				type: "button",
				"data-sbpa-action": "studio",
				class: D({ active: !r.value }),
				"aria-pressed": !r.value
			}, "Текущий промпт Studio", 10, tg), K("button", {
				type: "button",
				"data-sbpa-action": "manual",
				class: D({ active: r.value }),
				"aria-pressed": r.value
			}, "Свой текст / вставка", 10, ng)]),
			r.value ? (W(), G("div", rg, [
				t[0] ||= K("label", { for: "sbpa-text" }, "Текст промпта", -1),
				K("textarea", {
					id: "sbpa-text",
					rows: "5",
					spellcheck: "false",
					placeholder: "Вставь текст на русском или английском…",
					value: n.value.manual
				}, null, 8, ig),
				t[1] ||= K("label", { for: "sbpa-genre" }, "Жанр для сопоставления с Академией", -1),
				K("select", {
					id: "sbpa-genre",
					value: a.value
				}, [(W(!0), G(H, null, z(o.value, (e) => (W(), G("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, og))), 128))], 8, ag)
			])) : (W(), G("p", sg, " Проверяется актуальный промпт конструктора. Изменения настроек Studio отражаются здесь автоматически. ")),
			K("div", cg, [K("div", lg, [
				K("div", ug, [J(O(i.value.score), 1), t[2] ||= K("small", null, "/ 100", -1)]),
				K("div", dg, [
					K("strong", null, O(i.value.status), 1),
					t[3] ||= K("span", null, "Оценка ориентировочная: проверяется структура текста, а не качество будущей музыки.", -1),
					K("div", {
						class: "sbpa-meter",
						role: "progressbar",
						"aria-label": "Оценка промпта",
						"aria-valuenow": i.value.score,
						"aria-valuemin": "0",
						"aria-valuemax": "100"
					}, [K("span", { style: E({ width: i.value.score + "%" }) }, null, 4)], 8, fg)
				]),
				K("div", { class: D(["sbpa-limit", { over: i.value.length > 1e3 }]) }, O(i.value.length) + " / 1000 символов ", 3)
			]), i.value.issues?.length ? (W(), G("ul", pg, [(W(!0), G(H, null, z(i.value.issues, (e, t) => (W(), G("li", {
				key: t,
				class: D(["sbpa-item", "sbpa-" + e.kind])
			}, [K("div", null, [
				K("strong", null, O(e.title), 1),
				K("p", null, O(e.detail), 1),
				K("small", null, O(e.fix), 1)
			])], 2))), 128))])) : (W(), G("p", mg, " Явных противоречий и повторов по проверяемым правилам не найдено. "))]),
			K("div", hg, [t[4] ||= K("button", {
				type: "button",
				"data-sbpa-action": "preview",
				class: "sbpa-primary"
			}, " Показать улучшенный вариант ", -1), r.value ? (W(), G("button", gg, " Вставить текущий промпт Studio ")) : Y("", !0)]),
			K("div", _g, [s.value ? (W(), G("div", vg, [
				K("h4", null, [t[5] ||= J("Предлагаемый вариант ", -1), K("small", null, O(c.value.text.length) + " / 1000", 1)]),
				c.value.removed.length ? (W(), G("p", bg, "Удалено фрагментов: " + O(c.value.removed.length) + ". Проверь смысл до копирования.", 1)) : (W(), G("p", yg, "Удалять нечего: текст уже без точных повторов.")),
				c.value.removed.length ? (W(), G("details", xg, [t[6] ||= K("summary", null, "Что изменилось", -1), K("ul", null, [(W(!0), G(H, null, z(c.value.removed, (e, t) => (W(), G("li", { key: t }, [K("b", null, O(e.reason) + ":", 1), J(" " + O(e.part), 1)]))), 128))])])) : Y("", !0),
				c.value.complete ? Y("", !0) : (W(), G("p", Sg, " Автоматического сокращения недостаточно. Уменьши текст вручную минимум на " + O(c.value.text.length - 1e3) + " символов. ", 1)),
				t[7] ||= K("label", { for: "sbpa-preview-text" }, "Редактируемый предпросмотр", -1),
				K("textarea", {
					id: "sbpa-preview-text",
					rows: "5",
					spellcheck: "false",
					value: c.value.text
				}, null, 8, Cg),
				t[8] ||= K("div", { class: "sbpa-actions" }, [K("button", {
					type: "button",
					"data-sbpa-action": "copy-preview",
					class: "sbpa-primary"
				}, " Подтвердить и скопировать "), K("button", {
					type: "button",
					"data-sbpa-action": "close-preview"
				}, "Закрыть")], -1),
				t[9] ||= K("small", null, "Исходный промпт и параметры Studio не меняются. Копируется только текст предпросмотра после нажатия.", -1)
			])) : Y("", !0)]),
			t[11] ||= K("p", { class: "sbpa-foot" }, " Аудитор не вызывает Gemini и не оценивает реальный звук. Жанровые отклонения могут быть творческим решением, а рекомендации не изменяют исходник без твоего действия. ", -1)
		], 64));
	}
};
// src/vue/studio/legacyAuditorBridge.js
function Tg({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_AUDITOR, n = document.getElementById("app");
	if (!t || !n || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sbpa-auditor");
		if (r?.target === a || (r &&= (r.unmount(), null), !a || !t.snapshot())) return;
		let o = e(a, wg, { api: t });
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
var Eg = ["data-sba-id", "data-sba-energy"], Dg = { class: "sba-block-head" }, Og = ["data-sba-drag", "aria-label"], kg = { class: "sba-index" }, Ag = {
	class: "sba-emoji",
	"aria-hidden": "true"
}, jg = { class: "sba-head-energy" }, Mg = { class: "sba-block-actions" }, Ng = ["data-id", "disabled"], Pg = ["data-id", "disabled"], Fg = ["data-id"], Ig = ["data-id"], Lg = { class: "sba-block-fields" }, Rg = ["data-id", "value"], zg = ["value"], Bg = ["data-id", "value"], Vg = ["value"], Hg = ["data-id", "value"], Ug = ["value"], Wg = { class: "sba-energy-field" }, Gg = ["data-sba-output"], Kg = ["value", "data-id"], qg = { class: "sba-instrument-field" }, Jg = ["for"], Yg = { class: "sba-instrument-row" }, Xg = [
	"id",
	"data-id",
	"value"
], Zg = ["id", "innerHTML"], Qg = ["id"], $g = { class: "sba-sound-head" }, e_ = ["data-id"], t_ = ["data-id"], n_ = ["id"], r_ = {
	key: 0,
	class: "sba-sound-back"
}, i_ = ["data-id"], a_ = [
	"data-sba-sound-search",
	"data-id",
	"value",
	"placeholder"
], o_ = ["id"], s_ = { class: "sba-sound-info" }, c_ = { key: 0 }, l_ = ["data-id", "data-genre-id"], u_ = {
	key: 0,
	class: "sba-sound-none"
}, d_ = { class: "sba-sound-group" }, f_ = [
	"disabled",
	"aria-disabled",
	"data-id",
	"data-sound-value"
], p_ = {
	key: 0,
	class: "sba-sound-none"
}, m_ = {
	key: 1,
	class: "sba-sound-foot"
}, h_ = ["data-id"], g_ = {
	key: 0,
	class: "sba-custom-label"
}, __ = ["data-id", "value"], v_ = ["innerHTML"], y_ = ["data-id", "aria-label"], b_ = {
	key: 0,
	class: "sba-empty"
}, x_ = ["aria-label"], S_ = [
	"data-sba-snake-id",
	"data-sba-energy",
	"aria-label",
	"title"
], C_ = { class: "sba-snake-num" }, w_ = {
	class: "sba-snake-icon",
	"aria-hidden": "true"
}, T_ = { class: "sba-snake-title" }, E_ = { class: "sba-snake-level" }, D_ = ["title"], O_ = {
	key: 0,
	class: "sba-snake-more"
}, k_ = {
	key: 1,
	class: "sba-snake-empty"
}, A_ = ["data-sba-hub-from"], j_ = { class: "sba-transition-hub-route" }, M_ = { class: "sba-transition-hub-number" }, N_ = { class: "sba-transition-hub-names" }, P_ = { class: "sba-transition-hub-controls" }, F_ = [
	"data-id",
	"value",
	"aria-label"
], I_ = ["value"], L_ = [
	"data-id",
	"value",
	"aria-label"
], R_ = ["value"], z_ = [
	"data-id",
	"value",
	"aria-label"
], B_ = ["value"], V_ = { class: "sba-transition-hub-actions" }, H_ = ["data-id", "title"], U_ = ["data-id"], W_ = {
	key: 1,
	class: "sba-transition-hub-empty"
}, G_ = ["title"], K_ = { class: "sba-chart-column" }, q_ = {
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
		let t = e, n = /* @__PURE__ */ Zt(t.api.snapshot()), r = Z(() => n.value?.blocks || []), i = Z(() => n.value?.sections || []), a = Z(() => n.value?.voices || []), o = Z(() => n.value?.energies || {}), s = Z(() => n.value?.transitions || []), c = Z(() => n.value?.transitionTypes || []), l = Z(() => n.value?.transitionLengths || []), u = Z(() => n.value?.transitionStrengths || []), d = Z(() => n.value?.snakeExpanded ? r.value : r.value.slice(0, 12)), f = Z(() => n.value?.transitionHubExpanded ? s.value : s.value.slice(0, 3)), p = [
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
		R(() => window.addEventListener("sunoboom:arranger-updated", m)), hr(() => window.removeEventListener("sunoboom:arranger-updated", m));
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
		let g = Z(() => d.value.map((e, t) => t + 1 + ". " + e.snakeLabel).join(" → "));
		return (t, n) => e.kind === "cards" ? (W(), G(H, { key: 0 }, [(W(!0), G(H, null, z(r.value, (e, t) => (W(), G(H, { key: e.id }, [
			K("article", {
				class: "sba-block",
				"data-sba-id": e.id,
				"data-sba-energy": e.energy
			}, [K("div", Dg, [
				K("span", {
					class: "sba-drag",
					draggable: "true",
					"data-sba-drag": e.id,
					title: "Перетащить блок",
					"aria-label": "Перетащить " + e.sectionName
				}, "⠿", 8, Og),
				K("span", kg, O(String(t + 1).padStart(2, "0")), 1),
				K("span", Ag, O(e.icon), 1),
				K("strong", null, O(e.label), 1),
				K("span", jg, "Энергия " + O(e.energy) + "/5", 1),
				K("div", Mg, [
					K("button", {
						type: "button",
						"data-sba-action": "up",
						"data-id": e.id,
						"aria-label": "Переместить вверх",
						disabled: t === 0
					}, "↑", 8, Ng),
					K("button", {
						type: "button",
						"data-sba-action": "down",
						"data-id": e.id,
						"aria-label": "Переместить вниз",
						disabled: t === r.value.length - 1
					}, "↓", 8, Pg),
					K("button", {
						type: "button",
						"data-sba-action": "duplicate",
						"data-id": e.id,
						"aria-label": "Дублировать блок"
					}, "⧉", 8, Fg),
					K("button", {
						type: "button",
						"data-sba-action": "remove",
						"data-id": e.id,
						"aria-label": "Удалить блок"
					}, "×", 8, Ig)
				])
			]), K("div", Lg, [
				K("label", null, [n[0] ||= J("Раздел ", -1), K("select", {
					"data-sba-field": "type",
					"data-id": e.id,
					value: e.type
				}, [(W(!0), G(H, null, z(i.value, (e) => (W(), G("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, zg))), 128))], 8, Rg)]),
				K("label", null, [n[1] ||= J("Тактов ", -1), K("select", {
					"data-sba-field": "bars",
					"data-id": e.id,
					value: e.bars
				}, [(W(), G(H, null, z(p, (e) => K("option", {
					key: e,
					value: e
				}, O(e), 9, Vg)), 64))], 8, Bg)]),
				K("label", null, [n[2] ||= J("Вокал ", -1), K("select", {
					"data-sba-field": "vocal",
					"data-id": e.id,
					value: e.vocal
				}, [(W(!0), G(H, null, z(a.value, (e) => (W(), G("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, Ug))), 128))], 8, Hg)]),
				K("label", Wg, [
					n[3] ||= J("Энергия ", -1),
					K("output", { "data-sba-output": e.id }, O(e.energy) + "/5 · " + O(o.value[e.energy]), 9, Gg),
					K("input", {
						type: "range",
						min: "1",
						max: "5",
						step: "1",
						value: e.energy,
						"data-sba-field": "energy",
						"data-id": e.id
					}, null, 8, Kg)
				]),
				K("div", qg, [
					K("label", { for: "sba-instruments-" + e.id }, "Инструменты / приём", 8, Jg),
					K("div", Yg, [K("input", {
						type: "text",
						id: "sba-instruments-" + e.id,
						maxlength: "300",
						"data-sba-field": "instruments",
						"data-id": e.id,
						value: e.instruments,
						placeholder: "Введи вручную или выбери рекомендацию",
						autocomplete: "off"
					}, null, 8, Xg)]),
					K("div", {
						class: "sba-quick-sounds",
						id: "sba-quick-" + e.id,
						innerHTML: e.quickSounds
					}, null, 8, Zg),
					e.soundPanel ? (W(), G("div", {
						key: 0,
						class: "sba-sound-panel",
						id: "sba-sound-panel-" + e.id,
						"aria-label": "Выбор инструментов и приёмов"
					}, [
						K("div", $g, [n[4] ||= K("strong", null, "Библиотека инструментов и приёмов", -1), K("button", {
							type: "button",
							"data-sba-action": "sound-close",
							"data-id": e.id,
							"aria-label": "Закрыть подбор"
						}, "×", 8, e_)]),
						K("button", {
							type: "button",
							class: "sba-sound-genre-trigger",
							"data-sba-action": "sound-switch-mode",
							"data-id": e.id
						}, [
							n[5] ||= J(" Жанр: ", -1),
							K("b", null, O(e.soundPanel.genreName), 1),
							n[6] ||= K("span", null, "⌄", -1)
						], 8, t_),
						K("div", { id: "sba-sound-body-" + e.id }, [
							e.soundPanel.mode === "genres" ? (W(), G("div", r_, [K("button", {
								type: "button",
								"data-sba-action": "sound-switch-mode",
								"data-id": e.id
							}, " ← К инструментам ", 8, i_)])) : Y("", !0),
							K("input", {
								type: "search",
								class: "sba-sound-search",
								"data-sba-sound-search": e.soundPanel.mode,
								"data-id": e.id,
								value: e.soundPanel.query,
								placeholder: e.soundPanel.mode === "genres" ? "Поиск по всей Академии..." : "Поиск инструмента или приёма...",
								autocomplete: "off",
								"aria-label": "Поиск инструментов или жанров"
							}, null, 8, a_),
							K("div", {
								class: "sba-sound-list",
								id: "sba-sound-results-" + e.id
							}, [e.soundPanel.mode === "genres" ? (W(), G(H, { key: 0 }, [
								K("div", s_, [J(" Найдено жанров: " + O(e.soundPanel.total) + " ", 1), e.soundPanel.total > e.soundPanel.matches.length ? (W(), G("span", c_, " · уточни запрос ")) : Y("", !0)]),
								(W(!0), G(H, null, z(e.soundPanel.matches, (t) => (W(), G("button", {
									key: t.id,
									type: "button",
									class: "sba-sound-genre-row",
									"data-sba-action": "sound-set-genre",
									"data-id": e.id,
									"data-genre-id": t.id
								}, [K("span", null, O(t.name), 1), K("small", null, O(t.family), 1)], 8, l_))), 128)),
								e.soundPanel.matches.length ? Y("", !0) : (W(), G("p", u_, " Жанр не найден "))
							], 64)) : (W(), G(H, { key: 1 }, [(W(!0), G(H, null, z(e.soundPanel.groups, (t) => (W(), G(H, { key: t.title }, [K("div", d_, O(t.title), 1), (W(!0), G(H, null, z(t.items, (t) => (W(), G("button", {
								key: t.name,
								type: "button",
								class: "sba-sound-option",
								disabled: t.added,
								"aria-disabled": t.added,
								"data-sba-action": "sound-add",
								"data-id": e.id,
								"data-sound-value": t.name
							}, [K("span", null, O(t.name), 1), K("small", null, O(t.added ? "✓ Добавлено" : "+ Добавить"), 1)], 8, f_))), 128))], 64))), 128)), e.soundPanel.groups.length ? Y("", !0) : (W(), G("p", p_, " Совпадений нет. Можно ввести инструмент вручную. "))], 64))], 8, o_),
							e.soundPanel.mode === "genres" ? Y("", !0) : (W(), G("div", m_, [n[7] ||= K("span", null, "Нажми «Добавить», чтобы дополнить поле. Свой текст сохраняется.", -1), K("button", {
								type: "button",
								"data-sba-action": "sound-clear",
								"data-id": e.id
							}, " Очистить поле ", 8, h_)]))
						], 8, n_)
					], 8, Qg)) : Y("", !0)
				]),
				e.type === "custom" ? (W(), G("label", g_, [n[8] ||= J("Своё название ", -1), K("input", {
					type: "text",
					maxlength: "48",
					"data-sba-field": "customName",
					"data-id": e.id,
					value: e.customName,
					placeholder: "Название для тега Suno"
				}, null, 8, __)])) : Y("", !0)
			])], 8, Eg),
			e.transitionHTML ? (W(), G("div", {
				key: 0,
				style: { display: "contents" },
				innerHTML: e.transitionHTML
			}, null, 8, v_)) : Y("", !0),
			K("button", {
				type: "button",
				class: "sba-between-add",
				"data-sba-action": "insert-after",
				"data-id": e.id,
				"aria-label": "Добавить блок после " + e.label
			}, [...n[9] ||= [K("span", { "aria-hidden": "true" }, "＋", -1), J(" Добавить после ", -1)]], 8, y_)
		], 64))), 128)), r.value.length ? Y("", !0) : (W(), G("div", b_, "Пока нет блоков. Добавь первый фрагмент снизу."))], 64)) : e.kind === "snake" ? (W(), G(H, { key: 1 }, [r.value.length ? (W(), G(H, { key: 0 }, [(W(), G(H, null, z([6, 3], (e) => K("div", {
			key: e,
			class: D(e === 6 ? "sba-snake-desktop" : "sba-snake-mobile"),
			role: "group",
			"aria-label": "Схема блоков: " + g.value
		}, [(W(!0), G(H, null, z(h(e), (e) => (W(), G("div", {
			key: e.id,
			class: D(["sba-snake-row", {
				"sba-snake-reverse": e.reverse,
				"sba-snake-continues": e.continued
			}])
		}, [(W(!0), G(H, null, z(e.items, (e) => (W(), G("button", {
			key: e.id,
			type: "button",
			draggable: "true",
			class: "sba-snake-chip",
			"data-sba-snake-id": e.id,
			"data-sba-energy": e.energy,
			"aria-label": "Переместить " + e.snakeLabel + ", позиция " + (e.index + 1) + " из " + r.value.length + ", энергия " + e.energy + "/5",
			title: e.index + 1 + ". " + e.snakeLabel + " · энергия " + e.energy + "/5 · перетащи для перестановки"
		}, [
			K("span", C_, O(e.index + 1), 1),
			K("span", w_, O(e.icon), 1),
			K("span", T_, O(e.snakeLabel), 1),
			K("span", E_, O(e.energy) + "/5", 1),
			e.hasTransition ? (W(), G("span", {
				key: 0,
				class: "sba-snake-transition",
				title: "Переход: " + e.transitionLabel,
				"aria-hidden": "true"
			}, "↝", 8, D_)) : Y("", !0)
		], 8, S_))), 128))], 2))), 128))], 10, x_)), 64)), d.value.length < r.value.length ? (W(), G("p", O_, " … и ещё " + O(r.value.length - d.value.length) + " блоков ", 1)) : Y("", !0)], 64)) : (W(), G("p", k_, "Добавь первый блок, и здесь появится схема композиции."))], 64)) : e.kind === "transitions" ? (W(), G(H, { key: 2 }, [s.value.length ? (W(!0), G(H, { key: 0 }, z(f.value, (e) => (W(), G("div", {
			key: e.id,
			class: D(["sba-transition-hub-row", { "sba-transition-hub-active": e.current.type !== "none" }]),
			"data-sba-hub-from": e.id
		}, [
			K("div", j_, [K("span", M_, O(e.index + 1) + " → " + O(e.index + 2), 1), K("span", N_, [
				J(O(e.from) + " ", 1),
				n[10] ||= K("b", null, "→", -1),
				J(" " + O(e.to), 1)
			])]),
			K("div", P_, [
				K("label", null, [n[11] ||= J("Эффект ", -1), K("select", {
					"data-sba-transition": "type",
					"data-id": e.id,
					value: e.current.type,
					"aria-label": "Переход " + (e.index + 1) + " к " + (e.index + 2)
				}, [(W(!0), G(H, null, z(c.value, (e) => (W(), G("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, I_))), 128))], 8, F_)]),
				K("label", null, [n[12] ||= J("Длина ", -1), K("select", {
					"data-sba-transition": "length",
					"data-id": e.id,
					value: e.current.length,
					"aria-label": "Длительность перехода " + (e.index + 1)
				}, [(W(!0), G(H, null, z(l.value, (e) => (W(), G("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, R_))), 128))], 8, L_)]),
				K("label", null, [n[13] ||= J("Сила ", -1), K("select", {
					"data-sba-transition": "strength",
					"data-id": e.id,
					value: e.current.strength,
					"aria-label": "Выраженность перехода " + (e.index + 1)
				}, [(W(!0), G(H, null, z(u.value, (e) => (W(), G("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, B_))), 128))], 8, z_)])
			]),
			K("div", V_, [K("button", {
				type: "button",
				"data-sba-action": "transition-suggest",
				"data-id": e.id,
				title: "Совет: " + e.advice
			}, "✧ Совет", 8, H_), K("button", {
				type: "button",
				"data-sba-action": "transition-hub-jump",
				"data-id": e.id
			}, "Подробнее ↓", 8, U_)])
		], 10, A_))), 128)) : (W(), G("p", W_, "Добавь второй блок, и здесь можно будет настроить переходы."))], 64)) : e.kind === "energy" ? (W(!0), G(H, { key: 3 }, z(r.value, (e) => (W(), G("div", {
			key: e.id,
			class: "sba-chart-step",
			title: e.label + " · " + e.energy + "/5",
			style: E({
				"--energy": e.energy,
				"--bar-width": 100 / r.value.length + "%"
			})
		}, [K("div", K_, [K("i", { style: E({ "--level": e.energy }) }, null, 4)]), K("small", null, O(e.icon), 1)], 12, G_))), 128)) : Y("", !0);
	}
}, J_ = ["aria-expanded"], Y_ = { id: "sba-picked-label" }, X_ = ["hidden"], Z_ = { class: "sba-preset-search-row" }, Q_ = ["value"], $_ = {
	class: "sba-preset-filters",
	role: "group",
	"aria-label": "Тип вариантов"
}, ev = ["data-filter", "aria-pressed"], tv = {
	id: "sba-preset-results",
	class: "sba-preset-results",
	role: "listbox",
	"aria-label": "Доступные шаблоны и жанры"
}, nv = { class: "sba-preset-group-title" }, rv = { key: 0 }, iv = ["aria-selected", "data-choice"], av = {
	key: 0,
	class: "sba-preset-no-results"
}, ov = {
	__name: "ArrangementPicker",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Zt(t.api.snapshot()), r = Z(() => n.value?.picker || {
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
		return R(() => window.addEventListener("sunoboom:arranger-updated", i)), hr(() => window.removeEventListener("sunoboom:arranger-updated", i)), (e, t) => (W(), G(H, null, [
			t[2] ||= K("span", { class: "sba-preset-caption" }, "Шаблон композиции / жанр", -1),
			K("button", {
				type: "button",
				id: "sba-presets",
				class: "sba-preset-trigger",
				"data-sba-action": "menu-toggle",
				"aria-haspopup": "dialog",
				"aria-expanded": r.value.open,
				"aria-controls": "sba-preset-menu"
			}, [K("span", Y_, O(r.value.selected), 1), t[0] ||= K("span", {
				class: "sba-preset-chevron",
				"aria-hidden": "true"
			}, "⌄", -1)], 8, J_),
			K("div", {
				id: "sba-preset-menu",
				class: "sba-preset-menu",
				role: "dialog",
				"aria-label": "Поиск шаблона или жанра",
				hidden: !r.value.open
			}, [
				K("div", Z_, [K("input", {
					type: "search",
					id: "sba-preset-search",
					autocomplete: "off",
					value: r.value.query,
					placeholder: "Найти жанр или шаблон...",
					"aria-label": "Поиск жанра"
				}, null, 8, Q_), t[1] ||= K("button", {
					type: "button",
					"data-sba-action": "menu-close",
					"aria-label": "Закрыть меню"
				}, "×", -1)]),
				K("div", $_, [(W(!0), G(H, null, z([
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
				], (e) => (W(), G("button", {
					key: e.id,
					type: "button",
					"data-sba-action": "menu-filter",
					"data-filter": e.id,
					"aria-pressed": r.value.filter === e.id
				}, O(e.title), 9, ev))), 128))]),
				K("div", tv, [(W(!0), G(H, null, z(r.value.groups, (e) => (W(), G(H, { key: e.title }, [K("div", nv, [J(O(e.title) + " ", 1), e.count === null ? Y("", !0) : (W(), G("small", rv, O(e.count), 1))]), (W(!0), G(H, null, z(e.items, (e) => (W(), G("button", {
					key: e.key,
					type: "button",
					role: "option",
					"aria-selected": e.key === r.value.selectedKey,
					"data-sba-action": "menu-choose",
					"data-choice": e.key
				}, [K("span", null, O(e.title), 1), K("small", null, O(e.subtitle), 1)], 8, iv))), 128))], 64))), 128)), r.value.groups.length ? Y("", !0) : (W(), G("p", av, " Ничего не найдено. Попробуй другое название или направление. "))])
			], 8, X_)
		], 64));
	}
}, sv = {
	class: "sba-preview-tabs",
	role: "group",
	"aria-label": "Тип результата"
}, cv = ["aria-pressed"], lv = ["aria-pressed"], uv = ["value"], dv = {
	class: "sba-preview-count",
	id: "sba-preview-count"
}, fv = {
	id: "sba-transfer-confirm",
	"aria-live": "polite"
}, pv = {
	key: 0,
	class: "sba-transfer-preview"
}, mv = ["hidden"], hv = [
	["#sba-cards", "cards"],
	["#sba-snake-track", "snake"],
	["#sba-transition-hub-list", "transitions"],
	["#sba-energy-chart", "energy"],
	[
		".sba-preset-picker",
		"picker",
		ov
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
				let t = e, n = /* @__PURE__ */ Zt(t.api.snapshot()), r = Z(() => n.value?.result || {
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
				return R(() => window.addEventListener("sunoboom:arranger-updated", i)), hr(() => window.removeEventListener("sunoboom:arranger-updated", i)), (e, t) => (W(), G(H, null, [
					t[3] ||= K("div", { class: "sba-result-header" }, [
						K("span", { class: "sba-eyebrow" }, "ПРЕДПРОСМОТР"),
						K("h3", null, "Результат для Suno"),
						K("p", null, "Lyrics — теги по секциям; Style — короткое описание динамики.")
					], -1),
					K("div", sv, [K("button", {
						type: "button",
						"data-sba-action": "tab",
						"data-tab": "lyrics",
						"aria-pressed": r.value.tab === "lyrics"
					}, "Теги Lyrics", 8, cv), K("button", {
						type: "button",
						"data-sba-action": "tab",
						"data-tab": "style",
						"aria-pressed": r.value.tab === "style"
					}, "Style", 8, lv)]),
					K("textarea", {
						id: "sba-preview",
						readonly: "",
						spellcheck: "false",
						"aria-label": "Готовые теги структуры песни",
						value: r.value.text
					}, null, 8, uv),
					K("div", dv, O(r.value.count), 1),
					t[4] ||= K("div", { class: "sba-result-actions" }, [K("button", {
						type: "button",
						class: "sba-btn sba-copy-btn",
						"data-sba-action": "copy"
					}, " Копировать результат "), K("button", {
						type: "button",
						class: "sba-btn sba-transfer-btn",
						"data-sba-action": "prepare-transfer"
					}, " Перенести стиль в Studio ")], -1),
					K("div", fv, [r.value.transfer ? (W(), G("div", pv, [
						t[0] ||= K("strong", null, "Предпросмотр переноса в Style", -1),
						t[1] ||= K("p", null, "Добавим описание аранжировки в дополнительные инструкции Suno Studio, не удаляя твои записи.", -1),
						K("code", null, O(r.value.transfer.candidate), 1),
						t[2] ||= K("div", { class: "sba-preview-buttons" }, [K("button", {
							type: "button",
							"data-sba-action": "transfer-accept"
						}, "Подтвердить перенос"), K("button", {
							type: "button",
							"data-sba-action": "transfer-cancel"
						}, "Отмена")], -1),
						K("small", null, "Итоговый промпт Studio: " + O(r.value.transfer.promptLength) + " / 1000 символов", 1)
					])) : Y("", !0)]),
					K("p", {
						id: "sba-message",
						class: "sba-message",
						role: "status",
						"aria-live": "polite",
						hidden: !r.value.message
					}, O(r.value.message), 9, mv),
					t[5] ||= K("div", { class: "sba-help" }, [
						K("strong", null, "Как применять"),
						K("p", null, [
							J("Теги секций вставляй в поле "),
							K("b", null, "Lyrics"),
							J(" в Suno рядом с текстом песни. Краткую динамику можно добавить в "),
							K("b", null, "Style"),
							J(" через Suno Studio после подтверждения.")
						]),
						K("p", null, "Ориентир длительности рассчитан по 4/4 и BPM Studio, это не гарантия точной длины аудио.")
					], -1)
				], 64));
			}
		}
	]
];
function gv({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ARRANGER, n = document.getElementById("app");
	if (!n || !t || typeof t.snapshot != "function") return () => {};
	let r = /* @__PURE__ */ new Map(), i = !1;
	function a() {
		if (!i) for (let [i, a, o = q_] of hv) {
			let s = n.querySelector(i), c = r.get(a);
			if (c?.target === s || (c && (c.unmount(), r.delete(a)), !s || !t.snapshot())) continue;
			let l = e(s, o, o === q_ ? {
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
var _v = {
	key: 0,
	class: "sb-poetry-empty"
}, vv = { class: "sb-poetry-stats" }, yv = { class: "sb-poetry-subline" }, bv = { class: "sb-poetry-sections" }, xv = { class: "sb-poetry-stanzas" }, Sv = { class: "sb-poetry-stanza-name" }, Cv = { class: "sb-poetry-stanza-data" }, wv = { class: "sb-poetry-lines" }, Tv = { class: "sb-poetry-line-main" }, Ev = { class: "sb-poetry-index" }, Dv = { class: "sb-poetry-verse" }, Ov = {
	class: "sb-poetry-syllable",
	title: "Оценка слогов"
}, kv = ["title"], Av = {
	key: 0,
	class: "sb-poetry-footnote"
}, jv = {
	key: 1,
	class: "sb-poetry-words"
}, Mv = { class: "sb-poetry-tips" }, Nv = {
	__name: "PoetryAnalysis",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Zt(t.api.analysis()), r = Z(() => n.value || {
			analyzed: !1,
			message: ""
		});
		function i() {
			let e = t.api.analysis();
			e && (n.value = e);
		}
		return R(() => window.addEventListener("sunoboom:poetry-updated", i)), hr(() => window.removeEventListener("sunoboom:poetry-updated", i)), (e, t) => r.value.analyzed ? (W(), G(H, { key: 1 }, [
			K("div", vv, [(W(!0), G(H, null, z(r.value.stats, (e) => (W(), G("div", {
				key: e.label,
				class: "sb-poetry-stat"
			}, [K("strong", null, O(e.value), 1), K("span", null, O(e.label), 1)]))), 128))]),
			K("p", yv, " Диапазон: " + O(r.value.lower) + "–" + O(r.value.upper) + " слогов на строку · меток ударения: " + O(r.value.markedStress) + ". ", 1),
			K("div", bv, [t[1] ||= K("h4", null, "Строфы и предполагаемая рифмовка", -1), K("div", xv, [(W(!0), G(H, null, z(r.value.stanzas, (e) => (W(), G("div", {
				key: e.id,
				class: "sb-poetry-stanza"
			}, [K("div", Sv, O(e.section) + " · строфа " + O(e.position), 1), K("div", Cv, [
				J(" Схема " + O(e.scheme) + " ", 1),
				t[0] ||= K("span", null, "·", -1),
				J(" разброс " + O(e.spread) + " сл. ", 1)
			])]))), 128))])]),
			t[4] ||= K("div", { class: "sb-poetry-lines-head" }, [K("strong", null, "Построчный анализ"), K("span", null, "Слоги · рифма")], -1),
			K("div", wv, [(W(!0), G(H, null, z(r.value.lines, (e) => (W(), G("div", {
				key: e.number,
				class: "sb-poetry-line"
			}, [
				K("div", Tv, [K("span", Ev, O(e.number) + ".", 1), K("span", Dv, O(e.text), 1)]),
				K("div", Ov, [K("span", null, O(e.syllables) + " сл.", 1), K("i", { style: E({ width: e.width + "%" }) }, null, 4)]),
				K("span", {
					class: D(["sb-poetry-letter", { "sb-poetry-letter-match": e.rhyme }]),
					title: e.repeat ? "Совпадение последнего слова" : e.rhyme ? "Предполагаемая рифма" : "Метка окончания"
				}, O(e.mark), 11, kv)
			]))), 128))]),
			r.value.rowCount > 120 ? (W(), G("p", Av, " Показаны первые 120 строк из " + O(r.value.rowCount) + "; статистика рассчитана по всему тексту. ", 1)) : Y("", !0),
			r.value.frequent.length ? (W(), G("div", jv, [t[2] ||= K("strong", null, "Повторяющиеся слова:", -1), (W(!0), G(H, null, z(r.value.frequent, (e) => (W(), G("span", { key: e.word }, O(e.word) + " · " + O(e.count), 1))), 128))])) : Y("", !0),
			K("div", Mv, [t[3] ||= K("h4", null, "На что обратить внимание", -1), K("ul", null, [(W(!0), G(H, null, z(r.value.suggestions, (e, t) => (W(), G("li", { key: t }, O(e), 1))), 128))])]),
			t[5] ||= K("p", { class: "sb-poetry-footnote" }, " Анализ ориентировочный: счёт гласных не равен точной метрической скансии, совпадение окончаний не гарантирует рифму, а вокальная удобность зависит от темпа и мелодии. Исходный текст автоматически не изменяется. ", -1)
		], 64)) : (W(), G("p", _v, O(r.value.message), 1));
	}
}, Pv = {
	key: 0,
	class: "sb-stress-ambig-clear"
}, Fv = { class: "sb-stress-ambig-heading" }, Iv = { class: "sb-stress-ambig-variants" }, Lv = ["data-word", "data-variant"], Rv = {
	key: 0,
	class: "sb-poetry-small"
}, zv = {
	__name: "PoetryAmbiguities",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Zt(t.api.ambiguities()), r = Z(() => n.value || {
			count: 0,
			words: [],
			total: 0
		});
		function i() {
			n.value = t.api.ambiguities();
		}
		return R(() => window.addEventListener("sunoboom:poetry-stress-updated", i)), hr(() => window.removeEventListener("sunoboom:poetry-stress-updated", i)), (e, t) => r.value.count ? (W(), G(H, { key: 1 }, [
			K("div", Fv, " 🔴 Требуют проверки: " + O(r.value.count) + " вхождений (" + O(r.value.total) + " разных слов). Нажми нужный вариант для каждого вхождения. ", 1),
			(W(!0), G(H, null, z(r.value.words, (e) => (W(), G("div", {
				key: e.key,
				class: "sb-stress-ambig-choice"
			}, [K("strong", null, O(e.key) + O(e.count > 1 ? " ×" + e.count : ""), 1), K("div", Iv, [(W(!0), G(H, null, z(e.variants, (t) => (W(), G("button", {
				key: t,
				type: "button",
				"data-action": "sb-poetry-stress-choice",
				"data-word": e.key,
				"data-variant": t,
				title: "Указать ударение для следующего вхождения"
			}, O(t), 9, Lv))), 128))])]))), 128)),
			r.value.total > 30 ? (W(), G("p", Rv, " Показаны первые 30 разных слов; другие можно исправить вручную. ")) : Y("", !0)
		], 64)) : (W(), G("p", Pv, " ✓ Все найденные неоднозначные слова проверены. "));
	}
};
// src/vue/poetry/legacyPoetryBridge.js
function Bv({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_POETRY, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = !1, i = /* @__PURE__ */ new Map();
	function a() {
		if (r) return;
		let a = [[
			"analysis",
			"#sb-poetry-result",
			Nv
		], [
			"ambiguities",
			"#sb-poetry-ambiguous-choices",
			zv
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
var Vv = { class: "sb-vt-field" }, Hv = ["value"], Uv = ["value"], Wv = {
	class: "sb-vt-hint",
	id: "sb-vt-mode-hint"
}, Gv = { class: "sb-vt-grid" }, Kv = { class: "sb-vt-field" }, qv = ["value"], Jv = ["value"], Yv = { class: "sb-vt-field" }, Xv = ["value"], Zv = ["value"], Qv = {
	key: 0,
	class: "sb-vt-field"
}, $v = ["value"], ey = ["value"], ty = { class: "sb-vt-intensity" }, ny = { class: "sb-vt-between" }, ry = { id: "sb-vt-intensity-label" }, iy = ["value"], ay = { class: "sb-vt-options" }, oy = ["data-vt-pref", "checked"], sy = {
	key: 1,
	class: "sb-vt-consent",
	id: "sb-vt-consent-row"
}, cy = { class: "sb-vt-buttons" }, ly = ["disabled"], uy = {
	id: "sb-vt-result",
	"aria-live": "polite"
}, dy = {
	key: 0,
	class: "sb-vt-draft"
}, fy = { class: "sb-vt-draft-head" }, py = { class: "sb-vt-method" }, my = { class: "sb-vt-section-list" }, hy = { class: "sb-vt-section-heading" }, gy = { class: "sb-vt-section-controls" }, _y = [
	"data-vt-preset",
	"value",
	"aria-label"
], vy = ["value"], yy = [
	"data-vt-cue",
	"value",
	"aria-label"
], by = { class: "sb-vt-field" }, xy = ["value"], Sy = {
	class: "sb-vt-small",
	id: "sb-vt-preview-state"
}, Cy = {
	__name: "PerformanceTags",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Zt(t.api.snapshot()), r = Z(() => n.value?.prefs || {}), i = Z(() => n.value?.draft || null), a = [
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
		return R(() => window.addEventListener("sunoboom:tags-updated", l)), hr(() => window.removeEventListener("sunoboom:tags-updated", l)), (e, t) => (W(), G(H, null, [
			t[12] ||= K("div", { class: "sb-vt-header" }, [K("span", { class: "sb-vt-symbol" }, "🎭"), K("div", null, [K("h3", null, "Генератор тегов исполнения"), K("p", null, "Вокальная драматургия по секциям. Без изменения слов песни; результат можно проверить и применить только вручную.")])], -1),
			K("div", Vv, [t[0] ||= K("label", { for: "sb-vt-mode" }, "Способ генерации", -1), K("select", {
				id: "sb-vt-mode",
				"data-vt-pref": "mode",
				value: r.value.mode
			}, [(W(), G(H, null, z(a, ([e, t]) => K("option", {
				key: e,
				value: e
			}, O(t), 9, Uv)), 64))], 8, Hv)]),
			K("p", Wv, O(n.value.modeHint), 1),
			K("div", Gv, [K("div", Kv, [t[1] ||= K("label", { for: "sb-vt-source" }, "Источник текста", -1), K("select", {
				id: "sb-vt-source",
				"data-vt-pref": "source",
				value: r.value.source
			}, [(W(), G(H, null, z(s, ([e, t]) => K("option", {
				key: e,
				value: e
			}, O(t), 9, Jv)), 64))], 8, qv)]), K("div", Yv, [t[2] ||= K("label", { for: "sb-vt-density" }, "Детализация метатегов", -1), K("select", {
				id: "sb-vt-density",
				"data-vt-pref": "density",
				value: r.value.density
			}, [(W(), G(H, null, z(o, ([e, t]) => K("option", {
				key: e,
				value: e
			}, O(t), 9, Zv)), 64))], 8, Xv)])]),
			n.value.artists?.length ? (W(), G("div", Qv, [t[4] ||= K("label", { for: "sb-vt-artist" }, "Учесть «ДНК артиста» (необязательно)", -1), K("select", {
				id: "sb-vt-artist",
				"data-vt-pref": "artistId",
				value: r.value.artistId
			}, [t[3] ||= K("option", { value: "" }, "Без привязки к артисту", -1), (W(!0), G(H, null, z(n.value.artists, (e) => (W(), G("option", {
				key: e.id,
				value: e.id
			}, O(e.name), 9, ey))), 128))], 8, $v)])) : Y("", !0),
			K("div", ty, [
				K("div", ny, [t[5] ||= K("label", { for: "sb-vt-intensity" }, "Максимальная интенсивность исполнения", -1), K("strong", ry, O(r.value.intensity) + " / 5", 1)]),
				K("input", {
					type: "range",
					id: "sb-vt-intensity",
					min: "1",
					max: "5",
					step: "1",
					value: r.value.intensity,
					"data-vt-pref": "intensity"
				}, null, 8, iy),
				t[6] ||= K("div", { class: "sb-vt-between sb-vt-scale" }, [K("span", null, "Сдержанная"), K("span", null, "Экспрессивная")], -1)
			]),
			K("div", ay, [(W(), G(H, null, z(c, ([e, t]) => K("label", { key: e }, [K("input", {
				type: "checkbox",
				"data-vt-pref": e,
				checked: r.value[e]
			}, null, 8, oy), J(" " + O(t), 1)])), 64))]),
			n.value.hasEndpoint ? (W(), G("label", sy, [...t[7] ||= [K("input", {
				type: "checkbox",
				id: "sb-vt-consent"
			}, null, -1), J(" Разрешаю отправить выбранный текст песни на защищённый сервер для анализа Gemini. ", -1)]])) : Y("", !0),
			K("div", cy, [K("button", {
				type: "button",
				class: "btn primary",
				"data-action": "vt-generate",
				disabled: n.value.busy
			}, "✨ Создать предпросмотр", 8, ly), t[8] ||= K("span", { class: "sb-vt-note" }, "Никакого автоматического применения к Lyrics.", -1)]),
			K("div", {
				id: "sb-vt-notice",
				class: D(["sb-vt-notice", n.value.notice?.kind]),
				role: "status",
				"aria-live": "polite"
			}, O(n.value.notice?.text), 3),
			K("div", uy, [i.value ? (W(), G("div", dy, [
				K("div", fy, [K("h4", null, "Предпросмотр · " + O(i.value.sections.length) + " секций", 1), K("span", py, O(i.value.method), 1)]),
				t[10] ||= K("p", { class: "sb-vt-small" }, " Проверь каждую секцию. Теги можно выбрать из списка или переписать вручную. Оригинальные строки песни остаются неизменными. ", -1),
				K("div", my, [(W(!0), G(H, null, z(i.value.sections, (e, t) => (W(), G("div", {
					key: e.id,
					class: "sb-vt-section"
				}, [K("div", hy, [K("strong", null, O(e.label), 1), K("span", null, O(t + 1) + "/" + O(i.value.sections.length), 1)]), K("div", gy, [K("select", {
					"data-vt-preset": t,
					value: i.value.tags[t],
					"aria-label": "Готовые теги для " + e.label
				}, [(W(!0), G(H, null, z(n.value.presets, ([e, t]) => (W(), G("option", {
					key: e,
					value: e
				}, O(t), 9, vy))), 128))], 8, _y), K("input", {
					"data-vt-cue": t,
					value: i.value.tags[t],
					maxlength: "165",
					placeholder: "Например: Warm Emotional Vocals",
					"aria-label": "Тег исполнения " + e.label
				}, null, 8, yy)])]))), 128))]),
				K("div", by, [t[9] ||= K("label", { for: "sb-vt-preview" }, " Готовый Lyrics — разрешено редактировать только инструкции, не слова песни ", -1), K("textarea", {
					id: "sb-vt-preview",
					spellcheck: "false",
					rows: "13",
					maxlength: "25000",
					value: i.value.preview
				}, null, 8, xy)]),
				K("p", Sy, O(n.value.previewState), 1),
				t[11] ||= ea("<div class=\"sb-vt-draft-actions\"><button type=\"button\" class=\"btn primary\" data-action=\"vt-apply\"> ✓ Применить к Lyrics </button><button type=\"button\" class=\"btn ghost\" data-action=\"vt-copy\"> Копировать предпросмотр </button><button type=\"button\" class=\"btn ghost\" data-action=\"vt-refresh\"> Обновить предпросмотр </button><button type=\"button\" class=\"btn ghost\" data-action=\"vt-cancel\"> Отменить </button></div>", 1)
			])) : Y("", !0)])
		], 64));
	}
};
// src/vue/poetry/legacyTagsBridge.js
function wy({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_TAGS, n = document.getElementById("app");
	if (!t || !n || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vt-workbench");
		if (r?.target === a || (r &&= (r.unmount(), null), !a || !t.snapshot())) return;
		let o = e(a, Cy, { api: t });
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
var Ty = Wd(), Ey = /* @__PURE__ */ new WeakMap();
function Dy(e) {
	return typeof document > "u" ? null : typeof e == "string" ? document.querySelector(e) : e;
}
function $(e, t, n = {}) {
	let r = Dy(e);
	if (!r || r.nodeType !== 1 || !t) return null;
	let i = Ey.get(r);
	i && i.unmount();
	let a = r.innerHTML, o = Lo(Kd, {
		component: t,
		componentProps: n
	});
	o.use(Ty);
	try {
		o.mount(r);
	} catch (e) {
		return r.innerHTML = a, console.warn("[SUNOBOOM] Vue mount failed; legacy navigation retained.", e), null;
	}
	return Ey.set(r, o), () => {
		Ey.get(r) === o && (o.unmount(), Ey.delete(r));
	};
}
function Oy(e) {
	let t = Dy(e);
	if (!t) return;
	let n = Ey.get(t);
	n && (n.unmount(), Ey.delete(t));
}
function ky() {
	return tf({
		mountVueFeature: $,
		unmountVueFeature: Oy
	});
}
function Ay() {
	return Vf({ mountVueFeature: $ });
}
function jy() {
	return vm({ mountVueFeature: $ });
}
function My() {
	return oh({ mountVueFeature: $ });
}
function Ny() {
	return $h({ mountVueFeature: $ });
}
function Py() {
	return Tg({ mountVueFeature: $ });
}
function Fy() {
	return gv({ mountVueFeature: $ });
}
function Iy() {
	return Bv({ mountVueFeature: $ });
}
function Ly() {
	return wy({ mountVueFeature: $ });
}
function Ry() {
	return Od({ mountVueFeature: $ });
}
function zy() {
	return es({ mountVueFeature: $ });
}
function By() {
	return xs({ mountVueFeature: $ });
}
function Vy() {
	return ms({ mountVueFeature: $ });
}
function Hy() {
	return lc({ mountVueFeature: $ });
}
function Uy() {
	return Sc({ mountVueFeature: $ });
}
function Wy() {
	return _l({ mountVueFeature: $ });
}
function Gy() {
	return $l({ mountVueFeature: $ });
}
function Ky() {
	return ou({ mountVueFeature: $ });
}
function qy() {
	return Mu({ mountVueFeature: $ });
}
function Jy() {
	return od({ mountVueFeature: $ });
}
export { $ as mountVueFeature, Ay as startLegacyAcademy, Fy as startLegacyArranger, qy as startLegacyArtistDNA, Jy as startLegacyArtistDNAEditor, Ky as startLegacyArtistManager, Py as startLegacyAuditor, jy as startLegacyGenreDetail, zy as startLegacyIdeaCollections, Ry as startLegacyIdeaEditor, Hy as startLegacyLibrary, Ny as startLegacyMixer, ky as startLegacyNavigation, Iy as startLegacyPoetry, Vy as startLegacyPromptCollection, By as startLegacyPromptEditor, Uy as startLegacySongCards, Wy as startLegacySongDetail, Gy as startLegacySongEditor, My as startLegacyStudio, Ly as startLegacyTags, Oy as unmountVueFeature };
