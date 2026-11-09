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
}, ie = /-\w/g, C = /* @__PURE__ */ re((e) => e.replace(ie, (e) => e.slice(1).toUpperCase())), ae = /\B([A-Z])/g, oe = /* @__PURE__ */ re((e) => e.replace(ae, "-$1").toLowerCase()), se = /* @__PURE__ */ re((e) => e.charAt(0).toUpperCase() + e.slice(1)), ce = /* @__PURE__ */ re((e) => e ? `on${se(e)}` : ""), w = (e, t) => !Object.is(e, t), le = (e, ...t) => {
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
		(t.version === 0 || w(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
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
	let t = /* @__PURE__ */ N(e);
	return t === e || (j(t, "iterate", it), /* @__PURE__ */ Gt(e)) ? t : /* @__PURE__ */ Wt(e) ? /* @__PURE__ */ Ut(e) ? t.map((e) => Yt(Jt(e))) : t.map(Yt) : t.map(Jt);
}
function st(e) {
	return j(e = /* @__PURE__ */ N(e), "iterate", it), e;
}
function ct(e, t) {
	return /* @__PURE__ */ Wt(e) ? Yt(/* @__PURE__ */ Ut(e) ? Jt(t) : t) : Jt(t);
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
	if (r !== e && !/* @__PURE__ */ Gt(e)) {
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
	let o = st(e), s = o !== e && !/* @__PURE__ */ Gt(e), c = o[t];
	if (c !== ft[t]) {
		let t = c.apply(e, a);
		return s ? Jt(t) : t;
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
	let i = st(e), a = i !== e && !/* @__PURE__ */ Gt(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = ct(e, t)), n.call(this, t, ct(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? ct(e, c) : c;
}
function ht(e, t, n) {
	let r = /* @__PURE__ */ N(e);
	j(r, "iterate", it);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Kt(n[0]) ? (n[0] = /* @__PURE__ */ N(n[0]), r[t](...n)) : i;
}
function gt(e, t, n = []) {
	Je(), Re();
	let r = (/* @__PURE__ */ N(e))[t].apply(e, n);
	return ze(), Ye(), r;
}
var _t = /* @__PURE__ */ e("__proto__,__v_isRef,__isVue"), vt = /* @__PURE__ */ new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_));
function yt(e) {
	_(e) || (e = String(e));
	let t = /* @__PURE__ */ N(this);
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
		let o = Reflect.get(e, t, /* @__PURE__ */ Xt(e) ? e : n);
		if ((_(t) ? vt.has(t) : _t(t)) || (r || j(e, "get", t), i)) return o;
		if (/* @__PURE__ */ Xt(o)) {
			let e = a && te(t) ? o : o.value;
			return r && v(e) ? /* @__PURE__ */ Vt(e) : e;
		}
		return v(o) ? r ? /* @__PURE__ */ Vt(o) : /* @__PURE__ */ M(o) : o;
	}
}, xt = class extends bt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = d(e) && te(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Wt(i);
			if (!/* @__PURE__ */ Gt(n) && !/* @__PURE__ */ Wt(n) && (i = /* @__PURE__ */ N(i), n = /* @__PURE__ */ N(n)), !a && /* @__PURE__ */ Xt(i) && !/* @__PURE__ */ Xt(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : u(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ Xt(e) ? e : r);
		return e === /* @__PURE__ */ N(r) && s && (o ? w(n, i) && at(e, "set", t, n, i) : at(e, "add", t, n)), s;
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
		let i = this.__v_raw, a = /* @__PURE__ */ N(i), o = f(a), c = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = i[e](...r), d = n ? Et : t ? Yt : Jt;
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
			let r = this.__v_raw, i = /* @__PURE__ */ N(r), a = /* @__PURE__ */ N(n);
			e || (w(n, a) && j(i, "get", n), j(i, "get", a));
			let { has: o } = Dt(i), s = t ? Et : e ? Yt : Jt;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && j(/* @__PURE__ */ N(t), "iterate", nt), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ N(n), i = /* @__PURE__ */ N(t);
			return e || (w(t, i) && j(r, "has", t), j(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ N(a), s = t ? Et : e ? Yt : Jt;
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
			let n = /* @__PURE__ */ N(this), r = Dt(n), i = /* @__PURE__ */ N(e), a = !t && !/* @__PURE__ */ Gt(e) && !/* @__PURE__ */ Wt(e) ? i : e;
			return r.has.call(n, a) || w(e, a) && r.has.call(n, e) || w(i, a) && r.has.call(n, i) || (n.add(a), at(n, "add", a, a)), this;
		},
		set(e, n) {
			t || /* @__PURE__ */ Gt(n) || /* @__PURE__ */ Wt(n) || (n = /* @__PURE__ */ N(n));
			let r = /* @__PURE__ */ N(this), { has: i, get: a } = Dt(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ N(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? w(n, s) && at(r, "set", e, n, s) : at(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ N(this), { has: n, get: r } = Dt(t), i = n.call(t, e);
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
function M(e) {
	return /* @__PURE__ */ Wt(e) ? e : Ht(e, !1, Ct, Mt, Ft);
}
// @__NO_SIDE_EFFECTS__
function Bt(e) {
	return Ht(e, !1, Tt, Nt, It);
}
// @__NO_SIDE_EFFECTS__
function Vt(e) {
	return Ht(e, !0, wt, Pt, Lt);
}
function Ht(e, t, n, r, i) {
	if (!v(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = zt(ee(e));
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
function Gt(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Kt(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function N(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ N(t) : e;
}
function qt(e) {
	return !u(e, "__v_skip") && Object.isExtensible(e) && T(e, "__v_skip", !0), e;
}
var Jt = (e) => v(e) ? /* @__PURE__ */ M(e) : e, Yt = (e) => v(e) ? /* @__PURE__ */ Vt(e) : e;
// @__NO_SIDE_EFFECTS__
function Xt(e) {
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
	return /* @__PURE__ */ Xt(e) ? e : new $t(e, t);
}
var $t = class {
	constructor(e, t) {
		this.dep = new $e(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ N(e), this._value = t ? e : Jt(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Gt(e) || /* @__PURE__ */ Wt(e);
		e = n ? e : /* @__PURE__ */ N(e), w(e, t) && (this._rawValue = e, this._value = n ? e : Jt(e), this.dep.trigger());
	}
};
function en(e) {
	return /* @__PURE__ */ Xt(e) ? e.value : e;
}
var tn = {
	get: (e, t, n) => t === "__v_raw" ? e : en(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ Xt(i) && !/* @__PURE__ */ Xt(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function nn(e) {
	return /* @__PURE__ */ Ut(e) ? e : new Proxy(e, tn);
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
	let { immediate: a, deep: o, once: s, scheduler: l, augmentJob: u, call: f } = i, p = (e) => o ? e : /* @__PURE__ */ Gt(e) || o === !1 || o === 0 ? dn(e, 1) : dn(e), m, g, _, v, y = !1, b = !1;
	if (/* @__PURE__ */ Xt(e) ? (g = () => e.value, y = /* @__PURE__ */ Gt(e)) : /* @__PURE__ */ Ut(e) ? (g = () => p(e), y = !0) : d(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ Ut(e) || /* @__PURE__ */ Gt(e)), g = () => e.map((e) => {
		if (/* @__PURE__ */ Xt(e)) return e.value;
		if (/* @__PURE__ */ Ut(e)) return p(e);
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
				if (e || o || y || (b ? t.some((e, t) => w(e, S[t])) : w(t, S))) {
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
	if (n.set(e, t), t--, /* @__PURE__ */ Xt(e)) dn(e.value, t, n);
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
var gn = [], _n = -1, vn = [], yn = null, bn = 0, xn = /* @__PURE__ */ Promise.resolve(), Sn = null;
function Cn(e) {
	let t = Sn || xn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function wn(e) {
	let t = _n + 1, n = gn.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = gn[r], a = Mn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function Tn(e) {
	if (!(e.flags & 1)) {
		let t = Mn(e), n = gn[gn.length - 1];
		!n || !(e.flags & 2) && t >= Mn(n) ? gn.push(e) : gn.splice(wn(t), 0, e), e.flags |= 1, En();
	}
}
function En() {
	Sn ||= xn.then(Nn);
}
function Dn(e) {
	if (!d(e)) yn && e.id === -1 ? yn.splice(bn + 1, 0, e) : e.flags & 1 || (vn.push(e), e.flags |= 1);
	else for (let t = 0; t < e.length; t++) vn.push(e[t]);
	En();
}
function On(e, t, n, r = _n + 1) {
	for (; r < gn.length; r++) {
		let n = gn[r];
		if (n && n.flags & 2) {
			if (e && n.id !== e.uid || t !== void 0 && !(n.id >= t)) continue;
			gn.splice(r, 1), r = e ? r - 1 : _n, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
		}
	}
}
function kn(e, t, n = 0) {
	if (vn.length) {
		let e = vn, r = 0;
		if (t) {
			e = [];
			for (let i = 0; i < vn.length; i++) {
				let a = vn[i];
				(a.i === void 0 ? t.has(a) : !a.i || a.i.uid < n) ? vn[r++] = a : e.push(a);
			}
		}
		let i = [...new Set(e)].sort((e, t) => Mn(e) - Mn(t));
		if (vn.length = r, yn) {
			for (let e = 0; e < i.length; e++) yn.push(i[e]);
			return;
		}
		for (yn = i, bn = 0; bn < yn.length; bn++) {
			let e = yn[bn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		yn = null, bn = 0;
	}
}
var An = !1;
function jn(e, t) {
	if (An) {
		e();
		return;
	}
	let n = t === void 0 ? void 0 : new Set(vn);
	e(), An = !0;
	try {
		On(void 0, t), kn(void 0, n, t);
	} finally {
		An = !1;
	}
}
var Mn = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function Nn(e) {
	try {
		for (_n = 0; _n < gn.length; _n++) {
			let e = gn[_n];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), fn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; _n < gn.length; _n++) {
			let e = gn[_n];
			e && (e.flags &= -2);
		}
		_n = -1, gn.length = 0, kn(e), Sn = null, (gn.length || vn.length) && Nn(e);
	}
}
var Pn = null, Fn = null;
function In(e) {
	let t = Pn;
	return Pn = e, Fn = e && e.type.__scopeId || null, t;
}
function Ln(e, t = Pn, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && Xi(-1);
		let i = In(t), a = Ki.length, o;
		try {
			o = e(...n);
		} finally {
			for (let e = Ki.length; e > a; e--) Ji();
			In(i), r._d && Xi(1);
		}
		return o;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function F(e, n) {
	if (Pn === null) return e;
	let r = Aa(Pn), i = e.dirs ||= [];
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
function Rn(e, t, n, r) {
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
function zn(e, t) {
	if (G) {
		let n = G.provides, r = G.parent && G.parent.provides;
		r === n && (n = G.provides = Object.create(r)), n[e] = t;
	}
}
function Bn(e, t, n = !1) {
	let r = ga();
	if (r || Zr) {
		let i = Zr ? Zr._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && h(t) ? t.call(r && r.proxy) : t;
	}
}
var Vn = /* @__PURE__ */ Symbol.for("v-scx"), Hn = () => Bn(Vn);
function Un(e, t, n) {
	return Wn(e, t, n);
}
function Wn(e, n, i = t) {
	let { immediate: a, deep: o, flush: c, once: l } = i, u = s({}, i), d = n && a || !n && c !== "post", f;
	if (Sa) {
		if (c === "sync") {
			let e = Hn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = r, e.resume = r, e.pause = r, e;
		}
	}
	let p = G;
	u.call = (e, t, n) => pn(e, p, t, n);
	let m = !1;
	c === "post" ? u.scheduler = (e) => {
		e.i = p, ki(e, p && p.suspense);
	} : c !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : Tn(e);
	}), u.augmentJob = (e) => {
		n && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = un(e, n, u);
	return Sa && (f ? f.push(h) : d && h()), h;
}
function Gn(e, t, n) {
	let r = this.proxy, i = g(e) ? e.includes(".") ? Kn(r, e) : () => r[e] : e.bind(r, r), a;
	h(t) ? a = t : (a = t.handler, n = t);
	let o = ya(this), s = Wn(i, a.bind(r), n);
	return o(), s;
}
function Kn(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var qn = /* @__PURE__ */ Symbol("_vte"), Jn = (e) => e.__isTeleport, Yn = /* @__PURE__ */ Symbol("_leaveCb");
function Xn(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== Wi) {
			t = n;
			break;
		}
	}
	return t;
}
function Zn(e) {
	if (!sr(e)) return Jn(e.type) && e.children ? Xn(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && h(n.default)) return n.default();
	}
}
function Qn(e, t) {
	if (e.shapeFlag & 6 && e.component) {
		e.transition = t;
		let n = e.component.subTree;
		Qn(Jn(n.type) && Zn(n) || n, t);
	} else if (e.shapeFlag & 128) {
		let n = e.suspense;
		if (n) {
			let e = n.isHydrating ? n.pendingBranch : n.activeBranch;
			e && Qn(e, t.clone(e));
		} else e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback);
	} else if (e.transition = t, e.type === R && d(e.children)) {
		let n = ii(e.children, !1);
		n && Qn(n, t);
	}
}
function $n(e) {
	if (e.component) return $n(e.component.subTree);
	if (e.type === R) {
		let t = d(e.children) && ii(e.children, !1);
		return t ? $n(t) : void 0;
	}
	if (e.type !== Wi) return e;
}
// @__NO_SIDE_EFFECTS__
function er(e, t) {
	return h(e) ? /* @__PURE__ */ s({ name: e.name }, t, { setup: e }) : e;
}
function tr(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function nr(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var rr = /* @__PURE__ */ new WeakMap();
function ir(e, n, r, a, o = !1) {
	if (d(e)) {
		e.forEach((e, t) => ir(e, n && (d(n) ? n[t] : n), r, a, o));
		return;
	}
	if (or(a) && !o) {
		a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && ir(e, n, r, a.component.subTree);
		return;
	}
	let s = a.shapeFlag & 4 ? Aa(a.component) : a.el, l = o ? null : s, { i: f, r: p } = e, m = n && n.r, _ = f.refs === t ? f.refs = {} : f.refs, v = f.setupState, y = /* @__PURE__ */ N(v), b = v === t ? i : (e) => !nr(_, e) && u(y, e), x = (e, t) => !(t && nr(_, t));
	if (m != null && m !== p) {
		if (ar(n), g(m)) _[m] = null, b(m) && (v[m] = null);
		else if (/* @__PURE__ */ Xt(m)) {
			let e = n;
			x(m, e.k) && (m.value = null), e.k && (_[e.k] = null);
		}
	}
	if (h(p)) fn(p, f, 12, [l, _]);
	else {
		let t = g(p), n = /* @__PURE__ */ Xt(p);
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
					i(), rr.delete(e);
				};
				t.id = -1, rr.set(e, t), ki(t, r);
			} else ar(e), i();
		}
	}
}
function ar(e) {
	let t = rr.get(e);
	t && (t.flags |= 8, rr.delete(e));
}
fe().requestIdleCallback, fe().cancelIdleCallback;
var or = (e) => !!e.type.__asyncLoader, sr = (e) => e.type.__isKeepAlive;
function cr(e, t) {
	ur(e, "a", t);
}
function lr(e, t) {
	ur(e, "da", t);
}
function ur(e, t, n = G) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (fr(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) sr(e.parent.vnode) && dr(r, t, n, e), e = e.parent;
	}
}
function dr(e, t, n, r) {
	let i = fr(t, e, r, !0), a = fr("um", () => c(r[t], i), n);
	a.flags = 16;
}
function fr(e, t, n = G, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Je();
			let i = ya(n), a = pn(t, n, e, r);
			return i(), Ye(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var pr = (e) => (t, n = G) => {
	Sa && e !== "sp" || fr(e, (...e) => t(...e), n);
}, mr = pr("bm"), I = pr("m"), hr = pr("bu"), gr = pr("u"), _r = pr("bum"), vr = pr("um"), yr = pr("sp"), br = pr("rtg"), xr = pr("rtc");
function Sr(e, t = G) {
	fr("ec", e, t);
}
var Cr = "components", wr = /* @__PURE__ */ Symbol.for("v-ndc");
function Tr(e) {
	return g(e) ? Er(Cr, e, !1) || e : e || wr;
}
function Er(e, t, n = !0, r = !1) {
	let i = Pn || G;
	if (i) {
		let n = i.type;
		if (e === Cr) {
			let e = ja(n, !1);
			if (e && (e === t || e === C(t) || e === se(C(t)))) return n;
		}
		let a = Dr(i[e] || n[e], t) || Dr(i.appContext[e], t);
		return !a && r ? n : a;
	}
}
function Dr(e, t) {
	return e && (e[t] || e[C(t)] || e[se(C(t))]);
}
function L(e, t, n, r) {
	let i, a = n && n[r], o = d(e);
	if (o || g(e)) {
		let n = o && /* @__PURE__ */ Ut(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ Gt(e), s = /* @__PURE__ */ Wt(e), e = st(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? Yt(Jt(e[n])) : Jt(e[n]) : e[n], n, void 0, a && a[n]);
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
var Or = (e) => e ? xa(e) ? Aa(e) : Or(e.parent) : null, kr = /* @__PURE__ */ s(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => Or(e.parent),
	$root: (e) => Or(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Rr(e),
	$forceUpdate: (e) => e.f ||= () => {
		Tn(e.update);
	},
	$nextTick: (e) => e.n ||= Cn.bind(e.proxy),
	$watch: (e) => Gn.bind(e)
}), Ar = (e, n) => e !== t && !e.__isScriptSetup && u(e, n), jr = {
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
			else if (Ar(i, n)) return s[n] = 1, i[n];
			else if (a !== t && u(a, n)) return s[n] = 2, a[n];
			else if (u(o, n)) return s[n] = 3, o[n];
			else if (r !== t && u(r, n)) return s[n] = 4, r[n];
			else Nr && (s[n] = 0);
		}
		let d = kr[n], f, p;
		if (d) return n === "$attrs" && j(e.attrs, "get", ""), d(e);
		if ((f = c.__cssModules) && (f = f[n])) return f;
		if (r !== t && u(r, n)) return s[n] = 4, r[n];
		if (p = l.config.globalProperties, u(p, n)) return p[n];
	},
	set({ _: e }, n, r) {
		let { data: i, setupState: a, ctx: o } = e;
		return Ar(a, n) ? (a[n] = r, !0) : i !== t && u(i, n) ? (i[n] = r, !0) : u(e.props, n) || n[0] === "$" && n.slice(1) in e ? !1 : (o[n] = r, !0);
	},
	has({ _: { data: e, setupState: n, accessCache: r, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(r[c] || e !== t && c[0] !== "$" && u(e, c) || Ar(n, c) || u(o, c) || u(i, c) || u(kr, c) || u(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? u(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function Mr(e) {
	return d(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var Nr = !0;
function Pr(e) {
	let t = Rr(e), n = e.proxy, i = e.ctx;
	Nr = !1, t.beforeCreate && Ir(t.beforeCreate, e, "bc");
	let { data: a, computed: o, methods: s, watch: c, provide: l, inject: u, created: f, beforeMount: p, mounted: m, beforeUpdate: g, updated: _, activated: y, deactivated: b, beforeDestroy: x, beforeUnmount: ee, destroyed: S, unmounted: te, render: ne, renderTracked: re, renderTriggered: ie, errorCaptured: C, serverPrefetch: ae, expose: oe, inheritAttrs: se, components: ce, directives: w, filters: le } = t;
	if (u && Fr(u, i, null), s) for (let e in s) {
		let t = s[e];
		h(t) && (i[e] = t.bind(n));
	}
	if (a) {
		let t = a.call(n, n);
		v(t) && (e.data = /* @__PURE__ */ M(t));
	}
	if (Nr = !0, o) for (let e in o) {
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
	if (c) for (let e in c) Lr(c[e], i, n, e);
	if (l) {
		let e = h(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			zn(t, e[t]);
		});
	}
	f && Ir(f, e, "c");
	function T(e, t) {
		d(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (T(mr, p), T(I, m), T(hr, g), T(gr, _), T(cr, y), T(lr, b), T(Sr, C), T(xr, re), T(br, ie), T(_r, ee), T(vr, te), T(yr, ae), d(oe)) {
		if (oe.length) {
			let t = e.exposed ||= {};
			oe.forEach((e) => {
				Object.defineProperty(t, e, {
					get: () => n[e],
					set: (t) => n[e] = t,
					enumerable: !0
				});
			});
		} else e.exposed ||= {};
	}
	ne && e.render === r && (e.render = ne), se != null && (e.inheritAttrs = se), ce && (e.components = ce), w && (e.directives = w), ae && tr(e);
}
function Fr(e, t, n = r) {
	d(e) && (e = Ur(e));
	for (let n in e) {
		let r = e[n], i;
		i = v(r) ? "default" in r ? Bn(r.from || n, r.default, !0) : Bn(r.from || n) : Bn(r), /* @__PURE__ */ Xt(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Ir(e, t, n) {
	pn(d(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Lr(e, t, n, r) {
	let i = r.includes(".") ? Kn(n, r) : () => n[r];
	if (g(e)) {
		let n = t[e];
		h(n) && Un(i, n);
	} else if (h(e)) Un(i, e.bind(n));
	else if (v(e)) {
		if (d(e)) e.forEach((e) => Lr(e, t, n, r));
		else {
			let r = h(e.handler) ? e.handler.bind(n) : t[e.handler];
			h(r) && Un(i, r, e);
		}
	}
}
function Rr(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => zr(c, e, o, !0)), zr(c, t, o)), v(t) && a.set(t, c), c;
}
function zr(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && zr(e, a, n, !0), i && i.forEach((t) => zr(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = Br[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var Br = {
	data: Vr,
	props: Kr,
	emits: Kr,
	methods: Gr,
	computed: Gr,
	beforeCreate: Wr,
	created: Wr,
	beforeMount: Wr,
	mounted: Wr,
	beforeUpdate: Wr,
	updated: Wr,
	beforeDestroy: Wr,
	beforeUnmount: Wr,
	destroyed: Wr,
	unmounted: Wr,
	activated: Wr,
	deactivated: Wr,
	errorCaptured: Wr,
	serverPrefetch: Wr,
	components: Gr,
	directives: Gr,
	watch: qr,
	provide: Vr,
	inject: Hr
};
function Vr(e, t) {
	return t ? e ? function() {
		return s(h(e) ? e.call(this, this) : e, h(t) ? t.call(this, this) : t);
	} : t : e;
}
function Hr(e, t) {
	return Gr(Ur(e), Ur(t));
}
function Ur(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function Wr(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Gr(e, t) {
	return e ? s(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Kr(e, t) {
	return e ? d(e) && d(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : s(/* @__PURE__ */ Object.create(null), Mr(e), Mr(t ?? {})) : t;
}
function qr(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = s(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = Wr(e[r], t[r]);
	return n;
}
function Jr() {
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
var Yr = 0;
function Xr(e, t) {
	return function(n, r = null) {
		h(n) || (n = s({}, n)), r != null && !v(r) && (r = null);
		let i = Jr(), a = /* @__PURE__ */ new WeakSet(), o = [], c = !1, l = i.app = {
			_uid: Yr++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: Pa,
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
					let u = l._ceVNode || H(n, r);
					return u.appContext = i, s === !0 ? s = "svg" : s === !1 && (s = void 0), o && t ? t(u, a) : e(u, a, s), c = !0, l._container = a, a.__vue_app__ = l, Aa(u.component);
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
				let t = Zr;
				Zr = l;
				try {
					return e();
				} finally {
					Zr = t;
				}
			}
		};
		return l;
	};
}
var Zr = null, Qr = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${C(t)}Modifiers`] || e[`${oe(t)}Modifiers`];
function $r(e, n, ...r) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || t, a = r, o = n.startsWith("update:"), s = o && Qr(i, n.slice(7));
	s && (s.trim && (a = r.map((e) => g(e) ? e.trim() : e)), s.number && (a = a.map(ue)));
	let c, l = i[c = ce(n)] || i[c = ce(C(n))];
	!l && o && (l = i[c = ce(oe(n))]), l && pn(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, pn(u, e, 6, a);
	}
}
var ei = /* @__PURE__ */ new WeakMap();
function ti(e, t, n = !1) {
	let r = n ? ei : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, c = !1;
	if (!h(e)) {
		let r = (e) => {
			let n = ti(e, t, !0);
			n && (c = !0, s(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !c ? (v(e) && r.set(e, null), null) : (d(a) ? a.forEach((e) => o[e] = null) : s(o, a), v(e) && r.set(e, o), o);
}
function ni(e, t) {
	return !e || !a(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), u(e, t[0].toLowerCase() + t.slice(1)) || u(e, oe(t)) || u(e, t));
}
function ri(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: s, attrs: c, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = In(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = sa(u.call(t, e, d, f, m, p, h)), y = c;
		} else {
			let e = t;
			v = sa(e.length > 1 ? e(f, {
				attrs: c,
				slots: s,
				emit: l
			}) : e(f, null)), y = t.props ? c : ai(c);
		}
	} catch (t) {
		Ki.length = 0, mn(t, e, 1), v = H(Wi);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(o) && (y = oi(y, a)), b = aa(b, y, !1, !0));
	}
	return n.dirs && (b = aa(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && Qn(Jn(b.type) && Zn(b) || b, n.transition), v = b, In(_), v;
}
function ii(e, t = !0) {
	let n;
	for (let t = 0; t < e.length; t++) {
		let r = e[t];
		if ($i(r)) {
			if (r.type !== Wi || r.children === "v-if") {
				if (n) return;
				n = r;
			}
		} else return;
	}
	return n;
}
var ai = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || a(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, oi = (e, t) => {
	let n = {};
	for (let r in e) o(r) && r.slice(9) in t || (n[r] = e[r]);
	return n;
};
function si(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? ci(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (li(o, r, n) && !ni(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? !o || ci(r, o, l) : !!o;
	return !1;
}
function ci(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (!u(e, a) || li(t, e, a) && !ni(n, a)) return !0;
	}
	return !1;
}
function li(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && v(r) && v(i) ? !we(r, i) : r !== i;
}
function ui({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var di = {}, fi = () => Object.create(di), pi = (e) => Object.getPrototypeOf(e) === di;
function mi(e, t, n, r = !1) {
	let i = {}, a = fi();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), gi(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	e.props = n ? r ? i : /* @__PURE__ */ Bt(i) : e.type.props ? i : a, e.attrs = a;
}
function hi(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ N(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (ni(e.emitsOptions, o)) continue;
				let d = t[o];
				if (c) {
					if (u(a, o)) d !== a[o] && (a[o] = d, l = !0);
					else {
						let t = C(o);
						i[t] = _i(c, s, t, d, e, !1);
					}
				} else d !== a[o] && (a[o] = d, l = !0);
			}
		}
	} else {
		gi(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) t && (u(t, a) || (r = oe(a)) !== a && u(t, r)) || (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = _i(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) t && u(t, e) || (delete a[e], l = !0);
	}
	l && at(e.attrs, "set", "");
}
function gi(e, n, r, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (n) for (let t in n) {
		if (ne(t)) continue;
		let l = n[t], d;
		a && u(a, d = C(t)) ? !o || !o.includes(d) ? r[d] = l : (c ||= {})[d] = l : ni(e.emitsOptions, t) || t in i && l === i[t] || (i[t] = l, s = !0);
	}
	if (o) {
		let n = /* @__PURE__ */ N(r), i = c || t;
		for (let t = 0; t < o.length; t++) {
			let s = o[t];
			r[s] = _i(a, n, s, i[s], e, !u(i, s));
		}
	}
	return s;
}
function _i(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = u(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && h(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = ya(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === oe(n)) && (r = !0));
	}
	return r;
}
var vi = /* @__PURE__ */ new WeakMap();
function yi(e, r, i = !1) {
	let a = i ? vi : r.propsCache, o = a.get(e);
	if (o) return o;
	let c = e.props, l = {}, f = [], p = !1;
	if (!h(e)) {
		let t = (e) => {
			p = !0;
			let [t, n] = yi(e, r, !0);
			s(l, t), n && f.push(...n);
		};
		!i && r.mixins.length && r.mixins.forEach(t), e.extends && t(e.extends), e.mixins && e.mixins.forEach(t);
	}
	if (!c && !p) return v(e) && a.set(e, n), n;
	if (d(c)) for (let e = 0; e < c.length; e++) {
		let n = C(c[e]);
		bi(n) && (l[n] = t);
	}
	else if (c) for (let e in c) {
		let t = C(e);
		if (bi(t)) {
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
function bi(e) {
	return e[0] !== "$" && !ne(e);
}
var xi = (e) => e === "_" || e === "_ctx" || e === "$stable", Si = (e) => d(e) ? e.map(sa) : [sa(e)], Ci = (e, t, n) => {
	if (t._n) return t;
	let r = Ln((...e) => Si(t(...e)), n);
	return r._c = !1, r;
}, wi = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (xi(n)) continue;
		let i = e[n];
		if (h(i)) t[n] = Ci(n, i, r);
		else if (i != null) {
			let e = Si(i);
			t[n] = () => e;
		}
	}
}, Ti = (e, t) => {
	let n = Si(t);
	e.slots.default = () => n;
}, Ei = (e, t, n) => {
	for (let r in t) (n || !xi(r)) && (e[r] = t[r]);
}, Di = (e, t, n) => {
	let r = e.slots = fi();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (Ei(r, t, n), n && T(r, "_", e, !0)) : wi(t, r);
	} else t && Ti(e, t);
}, Oi = (e, n, r) => {
	let { vnode: i, slots: a } = e, o = !0, s = t;
	if (i.shapeFlag & 32) {
		let e = n._;
		e ? r && e === 1 ? o = !1 : Ei(a, n, r) : (o = !n.$stable, wi(n, a)), s = n;
	} else n && (Ti(e, n), s = { default: 1 });
	if (o) for (let e in a) !xi(e) && s[e] == null && delete a[e];
}, ki = Hi;
function Ai(e) {
	return ji(e);
}
function ji(e, i) {
	let a = fe();
	a.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = r, insertStaticContent: _ } = e, v = (e, t, r, i = null, a = null, o = null, s = void 0, c = null, l = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !ea(e, t) && (i = xe(e), D(e, a, o, !0), e = null), t.patchFlag === -2 && (l = !1, t.dynamicChildren = null), t.dynamicChildren && e && e.dynamicChildren && e.dynamicChildren.hasOnce && (t.dynamicChildren === n && (t.dynamicChildren = []), t.dynamicChildren.hasOnce = !0);
		let { type: u, ref: d, shapeFlag: f } = t;
		switch (u) {
			case Ui:
				y(e, t, r, i);
				break;
			case Wi:
				b(e, t, r, i);
				break;
			case Gi:
				e ?? x(t, r, i, s);
				break;
			case R:
				ce(e, t, r, i, a, o, s, c, l);
				break;
			default: f & 1 ? te(e, t, r, i, a, o, s, c, l) : f & 6 ? w(e, t, r, i, a, o, s, c, l) : (f & 64 || f & 128) && u.process(e, t, r, i, a, o, s, c, l, Ce);
		}
		d != null && a ? ir(d, e && e.ref, o, t || e, !t) : d == null && e && e.ref != null && ir(e.ref, null, o, e, !0);
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
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && C(e.children, d, null, r, i, Mi(e, a), s, u), _ && Rn(e, null, r, "created"), ie(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !ne(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && da(f, r, e);
		}
		_ && Rn(e, null, r, "beforeMount");
		let v = Pi(i, g);
		v ? g.beforeEnter(d) : g && !g.persisted && (d[Vi] = !0), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && ki(() => {
			try {
				f && da(f, r, e), v && g.enter(d), _ && Rn(e, null, r, "mounted");
			} finally {}
		}, i);
	}, ie = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || Bi(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				ie(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, C = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) {
			let c = e[l] = s ? ca(e[l]) : sa(e[l]);
			v(null, c, t, n, r, i, a, o, s);
		}
	}, ae = (e, n, r, i, a, o, s) => {
		let l = n.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = n;
		u |= e.patchFlag & 16;
		let m = e.props || t, h = n.props || t, g;
		if (r && Ni(r, !1), (g = h.onVnodeBeforeUpdate) && da(g, r, n, e), f && Rn(n, e, r, "beforeUpdate"), r && Ni(r, !0), d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length) && (u = 0, s = !1, d = null), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? oe(e.dynamicChildren, d, l, r, i, Mi(n, a), o) : s || pe(e, n, l, null, r, i, Mi(n, a), o, !1), u > 0) {
			if (u & 16) se(l, m, h, r, a);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, a), u & 4 && c(l, "style", m.style, h.style, a), u & 8) {
				let e = n.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let n = e[t], i = m[n], o = h[n];
					(o !== i || n === "value") && c(l, n, i, o, a, r);
				}
			}
			u & 1 && e.children !== n.children && p(l, n.children);
		} else !s && d == null && se(l, m, h, r, a);
		((g = h.onVnodeUpdated) || f) && ki(() => {
			g && da(g, r, n, e), f && Rn(n, e, r, "updated");
		}, i);
	}, oe = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el || zi(c), d = u && (c.type === R || !ea(c, l) || c.shapeFlag & 198) ? m(u) : n;
			v(c, l, d, null, r, i, a, o, !0);
		}
	}, se = (e, n, r, i, a) => {
		if (n !== r) {
			if (n !== t) for (let t in n) !ne(t) && !(t in r) && c(e, t, n[t], null, a, i);
			for (let t in r) {
				if (ne(t)) continue;
				let o = r[t], s = n[t];
				o !== s && t !== "value" && c(e, t, s, o, a, i);
			}
			"value" in r && c(e, "value", n.value, r.value, a);
		}
	}, ce = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), C(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (oe(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && Fi(e, t, !0)) : pe(e, t, n, f, i, a, s, c, l);
	}, w = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : T(t, n, r, i, a, o, c) : ue(e, t, c);
	}, T = (e, t, n, r, i, a, o) => {
		let s = e.component = ha(e, r, i);
		if (sr(e) && (s.ctx.renderer = Ce), Ca(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, de, o, a), !e.el) {
				let r = s.subTree = H(Wi);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else de(s, e, t, n, i, a, o);
	}, ue = (e, t, n) => {
		let r = t.component = e.component;
		if (si(e, t, n)) {
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
					let n = Li(e);
					if (n) {
						t && (t.el = c.el, E(e, t, o)), n.asyncDep.then(() => {
							let t = () => {
								e.job.flags & 8 || (i && i.pendingBranch ? ki(t, i) : l());
							};
							t.flags = 48, ki(t, i);
						});
						return;
					}
				}
				let u = t, d;
				Ni(e, !1), t ? (t.el = c.el, E(e, t, o)) : t = c, n && le(n), (d = t.props && t.props.onVnodeBeforeUpdate) && da(d, s, t, c), Ni(e, !0);
				let f = ri(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el || zi(p)), xe(p), e, i, a), t.el = f.el, u === null && ui(e, f.el), r && ki(r, i), (d = t.props && t.props.onVnodeUpdated) && ki(() => da(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = or(t);
				if (Ni(e, !1), l && le(l), !m && (o = c && c.onVnodeBeforeMount) && da(o, d, t), Ni(e, !0), s && Te) {
					let t = () => {
						e.subTree = ri(e), Te(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = ri(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && ki(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					ki(() => da(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && or(d.vnode) && d.vnode.shapeFlag & 256) && e.a && ki(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Ne(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => Tn(u), Ni(e, !0), l();
	}, E = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, hi(e, t.props, r, n), Oi(e, t.children, n), Je(), On(e), Ye();
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
			let n = t[p] = l ? ca(t[p]) : sa(t[p]);
			v(e[p], n, r, null, a, o, s, c, l);
		}
		u > d ? be(e, a, o, !0, !1, f) : C(t, r, i, a, o, s, c, l, f);
	}, he = (e, t, r, i, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let n = e[u], i = t[u] = l ? ca(t[u]) : sa(t[u]);
			if (ea(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let n = e[f], i = t[p] = l ? ca(t[p]) : sa(t[p]);
			if (ea(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, n = e < d ? t[e].el : i;
				for (; u <= p;) v(null, t[u] = l ? ca(t[u]) : sa(t[u]), r, n, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) D(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? ca(t[u]) : sa(t[u]);
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
				else for (_ = h; _ <= p; _++) if (S[_ - h] === 0 && ea(n, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? D(n, a, o, !0) : (S[i - h] = u + 1, i >= ee ? ee = i : x = !0, v(n, t[i], r, null, a, o, s, c, l), y++);
			}
			let te = x ? Ii(S) : n;
			for (_ = te.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, n = t[e], f = t[e + 1], p = e + 1 < d ? f.el || zi(f) : i;
				S[u] === 0 ? v(null, n, r, p, a, o, s, c, l) : x && (_ < 0 || u !== te[_] ? ge(n, r, p, 2) : _--);
			}
		}
	}, ge = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) ge(e.component.subTree, t, n, r);
		else if (d & 128) e.suspense.move(t, n, r);
		else if (d & 64) c.move(e, t, n, Ce);
		else if (c === R) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) ge(u[e], t, n, r);
			o(e.anchor, t, n);
		} else if (c === Gi) ee(e, t, n);
		else if (r !== 2 && d & 1 && l) {
			if (r === 0) l.persisted && !a[Yn] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), ki(() => l.enter(a), i));
			else {
				let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
					e.ctx.isUnmounted ? s(a) : o(a, t, n);
				}, d = () => {
					let e = a._isLeaving || !!a[Yn];
					a._isLeaving && a[Yn](!0), l.persisted && !e ? u() : r(a, () => {
						u(), c && c();
					});
				};
				i ? i(a, u, d) : d();
			}
		} else o(a, t, n);
	}, D = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if ((d === -2 || l && l.hasOnce) && (i = !1), s != null && (Je(), ir(s, null, n, e, !0), Ye()), p == null || e.ctx && e.ctx !== t || (t.renderCache[p] = void 0), u & 256 && t.ctx.deactivate(e)) return;
		let h = u & 1 && f, g = !or(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && da(_, t, e), u & 6) ye(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Rn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, Ce, r) : l && !l.hasOnce && (a !== R || d > 0 && d & 64) ? be(l, t, n, !1, !0) : (a === R && d & 384 || !i && u & 16) && be(c, t, n), r && _e(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && ki(() => {
			_ && da(_, t, e), h && Rn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, _e = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e, a = t === R;
		if (a && !i) {
			ve(n, r);
			return;
		}
		if (t === Gi) {
			S(e), i && !i.persisted && i.afterLeave && i.afterLeave();
			return;
		}
		let o = a ? $n(e) : e, c = () => {
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
		Ri(c), Ri(l), r && le(r), i.stop(), a ? (a.flags |= 8, D(o, e, t, n)) : o && (o.transition = e.vnode.transition, D(o, e, t, n)), s && ki(s, t);
		let u = () => {
			e.isUnmounted = !0;
		};
		u.flags = 16, ki(u, t);
	}, be = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) D(e[o], t, n, r, i);
	}, xe = (e) => {
		if (e.shapeFlag & 6) return xe(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[qn];
		return n ? h(n) : t;
	}, Se = (e, t, n) => {
		jn(() => {
			e == null ? t._vnode && D(t._vnode, null, null, !0) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e;
		}, e && t._vnode ? void 0 : e && e.component ? e.component.uid : ma());
	}, Ce = {
		p: v,
		um: D,
		m: ge,
		r: _e,
		mt: T,
		mc: C,
		pc: pe,
		pbc: oe,
		n: xe,
		o: e
	}, we, Te;
	return i && ([we, Te] = i(Ce)), {
		render: Se,
		hydrate: we,
		createApp: Xr(Se, we)
	};
}
function Mi({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ni({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Pi(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Fi(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (d(r) && d(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = ca(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Fi(t, a)), a.type === Ui && (a.patchFlag === -1 && (a = i[e] = ca(a)), a.el = t.el), a.type === Wi && !a.el && (a.el = t.el);
	}
}
function Ii(e) {
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
function Li(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Li(t);
}
function Ri(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function zi(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	if (t) return zi(t.subTree);
	let n = e.suspense;
	return n && n.activeBranch ? zi(n.activeBranch) : null;
}
var Bi = (e) => e.__isSuspense, Vi = /* @__PURE__ */ Symbol("_deferredEnter");
function Hi(e, t) {
	t && t.pendingBranch ? d(e) ? t.effects.push(...e) : t.effects.push(e) : Dn(e);
}
var R = /* @__PURE__ */ Symbol.for("v-fgt"), Ui = /* @__PURE__ */ Symbol.for("v-txt"), Wi = /* @__PURE__ */ Symbol.for("v-cmt"), Gi = /* @__PURE__ */ Symbol.for("v-stc"), Ki = [], qi = null;
function z(e = !1) {
	Ki.push(qi = e ? null : []);
}
function Ji() {
	Ki.pop(), qi = Ki[Ki.length - 1] || null;
}
var Yi = 1;
function Xi(e, t = !1) {
	Yi += e, e < 0 && qi && t && (qi.hasOnce = !0);
}
function Zi(e) {
	return e.dynamicChildren = Yi > 0 ? qi || n : null, Ji(), Yi > 0 && qi && qi.push(e), e;
}
function B(e, t, n, r, i, a) {
	return Zi(V(e, t, n, r, i, a, !0));
}
function Qi(e, t, n, r, i) {
	return Zi(H(e, t, n, r, i, !0));
}
function $i(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function ea(e, t) {
	return e.type === t.type && e.key === t.key;
}
var ta = ({ key: e }) => e ?? null, na = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : g(e) || /* @__PURE__ */ Xt(e) || h(e) ? {
	i: Pn,
	r: e,
	k: t,
	f: !!n
} : e);
function V(e, t = null, n = null, r = 0, i = null, a = e === R ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && ta(t),
		ref: t && na(t),
		scopeId: Fn,
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
		ctx: Pn
	};
	return s ? (la(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= g(n) ? 8 : 16), Yi > 0 && !o && qi && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && qi.push(c), c;
}
var H = ra;
function ra(e, t = null, n = null, r = 0, i = null, a = !1) {
	if (e && e !== wr || (e = Wi), $i(e)) {
		let r = aa(e, t, !0);
		return n && la(r, n), Yi > 0 && !a && qi && (r.shapeFlag & 6 ? qi[qi.indexOf(e)] = r : qi.push(r)), r.patchFlag = -2, r;
	}
	if (Ma(e) && (e = e.__vccOpts), t) {
		t = ia(t);
		let { class: e, style: n } = t;
		e && !g(e) && (t.class = D(e)), v(n) && (/* @__PURE__ */ Kt(n) && !d(n) && (n = s({}, n)), t.style = E(n));
	}
	let o = g(e) ? 1 : Bi(e) ? 128 : Jn(e) ? 64 : v(e) ? 4 : h(e) ? 2 : 0;
	return V(e, t, n, r, i, o, a, !0);
}
function ia(e) {
	return e ? /* @__PURE__ */ Kt(e) ? s({}, e) : pi(e) ? s({}, e[Da] || e) : e : null;
}
function aa(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? ua(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && ta(l),
		ref: t && t.ref ? n && a ? d(a) ? a.concat(na(t)) : [a, na(t)] : na(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== R ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && aa(e.ssContent),
		ssFallback: e.ssFallback && aa(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce,
		cacheIndex: e.cacheIndex
	};
	return c && r && Qn(u, c.clone(u)), u;
}
function U(e = " ", t = 0) {
	return H(Ui, null, e, t);
}
function oa(e, t) {
	let n = H(Gi, null, e);
	return n.staticCount = t, n;
}
function W(e = "", t = !1) {
	return t ? (z(), Qi(Wi, null, e)) : H(Wi, null, e);
}
function sa(e) {
	return e == null || typeof e == "boolean" ? H(Wi) : d(e) ? H(R, null, e.slice()) : $i(e) ? ca(e) : H(Ui, null, String(e));
}
function ca(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : aa(e);
}
function la(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (d(t)) n = 16;
	else if (typeof t == "object") {
		if (r & 65) {
			let n = t.default;
			n && (n._c && (n._d = !1), la(e, n()), n._c && (n._d = !0));
			return;
		}
		{
			n = 32;
			let r = t._;
			!r && !pi(t) ? t._ctx = Pn : r === 3 && Pn && (Pn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
		}
	} else if (h(t)) {
		if (r & 65) {
			la(e, { default: t });
			return;
		}
		t = {
			default: t,
			_ctx: Pn
		}, n = 32;
	} else t = String(t), r & 64 ? (n = 16, t = [U(t)]) : n = 8;
	e.children = t, e.shapeFlag |= n;
}
function ua(...e) {
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
function da(e, t, n, r = null) {
	pn(e, t, 7, [n, r]);
}
var fa = /* @__PURE__ */ Jr(), pa = 0;
function ma() {
	return pa;
}
function ha(e, n, r) {
	let i = e.type, a = (n ? n.appContext : e.appContext) || fa, o = {
		uid: pa++,
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
		propsOptions: yi(i, a),
		emitsOptions: ti(i, a),
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
	return o.ctx = { _: o }, o.root = n ? n.root : o, o.emit = $r.bind(null, o), e.ce && e.ce(o), o;
}
var G = null, ga = () => G || Pn, _a, va;
{
	let e = fe(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	_a = t("__VUE_INSTANCE_SETTERS__", (e) => G = e), va = t("__VUE_SSR_SETTERS__", (e) => Sa = e);
}
var ya = (e) => {
	let t = G;
	return _a(e), e.scope.on(), () => {
		e.scope.off(), _a(t);
	};
}, ba = () => {
	G && G.scope.off(), _a(null);
};
function xa(e) {
	return e.vnode.shapeFlag & 4;
}
var Sa = !1;
function Ca(e, t = !1, n = !1) {
	t && va(t);
	let { props: r, children: i } = e.vnode, a = xa(e);
	mi(e, r, a, t), Di(e, i, n || t);
	let o = a ? wa(e, t) : void 0;
	return t && va(!1), o;
}
function wa(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, jr);
	let { setup: r } = n;
	if (r) {
		Je();
		let n = e.setupContext = r.length > 1 ? ka(e) : null, i = ya(e), a = fn(r, e, 0, [e.props, n]), o = y(a);
		if (Ye(), i(), (o || e.sp) && !or(e) && tr(e), o) {
			if (a.then(ba, ba), t) return a.then((n) => {
				va(!0);
				try {
					Ta(e, n, t);
				} finally {
					va(!1);
				}
			}).catch((t) => {
				mn(t, e, 0, void 0, !0), e.ssrRender = (e, t) => t("<!---->");
			});
			e.asyncDep = a;
		} else Ta(e, a, t);
	} else Ea(e, t);
}
function Ta(e, t, n) {
	h(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : v(t) && (e.setupState = nn(t)), Ea(e, n);
}
function Ea(e, t, n) {
	let i = e.type;
	e.render ||= i.render || r;
	{
		let t = ya(e);
		Je();
		try {
			Pr(e);
		} finally {
			Ye(), t();
		}
	}
}
var Da = /* @__PURE__ */ Symbol(), Oa = { get(e, t) {
	return j(e, "get", ""), t === Da ? e : e[t];
} };
function ka(e) {
	return {
		attrs: new Proxy(e.attrs, Oa),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function Aa(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(nn(qt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in kr) return kr[n](e);
		},
		has(e, t) {
			return t in e || t in kr;
		}
	}) : e.proxy;
}
function ja(e, t = !0) {
	return h(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ma(e) {
	return h(e) && "__vccOpts" in e;
}
var K = (e, t) => /* @__PURE__ */ an(e, t, Sa);
function Na(e, t, n) {
	try {
		Xi(-1);
		let r = arguments.length;
		return r === 2 ? v(t) && !d(t) ? $i(t) ? H(e, null, [t]) : H(e, t) : H(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && $i(n) && (n = [n]), H(e, t, n));
	} finally {
		Xi(1);
	}
}
var Pa = "3.5.45", Fa = void 0, Ia = typeof window < "u" && window.trustedTypes;
if (Ia) try {
	Fa = /* @__PURE__ */ Ia.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var La = Fa ? (e) => Fa.createHTML(e) : (e) => e, Ra = "http://www.w3.org/2000/svg", za = "http://www.w3.org/1998/Math/MathML", Ba = typeof document < "u" ? document : null, Va = Ba && /* @__PURE__ */ Ba.createElement("template"), Ha = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? Ba.createElementNS(Ra, e) : t === "mathml" ? Ba.createElementNS(za, e) : n ? Ba.createElement(e, { is: n }) : Ba.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => Ba.createTextNode(e),
	createComment: (e) => Ba.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => Ba.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), i !== a && (i = i.nextSibling););
		else {
			Va.innerHTML = La(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = Va.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, Ua = /* @__PURE__ */ Symbol("_vtc");
function Wa(e, t, n) {
	let r = e[Ua];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var Ga = /* @__PURE__ */ Symbol("_vod"), Ka = /* @__PURE__ */ Symbol("_vsh"), qa = {
	name: "show",
	beforeMount(e, { value: t }, { transition: n }) {
		e[Ga] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ja(e, t);
	},
	mounted(e, { value: t }, { transition: n }) {
		n && t && n.enter(e);
	},
	updated(e, { value: t, oldValue: n }, { transition: r }) {
		!t != !n && (r ? t ? (r.beforeEnter(e), Ja(e, !0), r.enter(e)) : r.leave(e, () => {
			Ja(e, !1);
		}) : Ja(e, t));
	},
	beforeUnmount(e, { value: t }) {
		Ja(e, t);
	}
};
function Ja(e, t) {
	e.style.display = t ? e[Ga] : "none", e[Ka] = !t;
}
var Ya = /* @__PURE__ */ Symbol(""), Xa = /(?:^|;)\s*display\s*:/;
function Za(e, t, n) {
	let r = e.style, i = g(n), a = !1;
	if (n && !i) {
		if (t) {
			if (g(t)) for (let e of t.split(";")) {
				let t = e.slice(0, e.indexOf(":")).trim();
				n[t] ?? $a(r, t, "");
			}
			else for (let e in t) n[e] ?? $a(r, e, "");
		}
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? $a(r, i, "") : ro(e, i, !g(t) && t ? t[i] : void 0, o) || $a(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[Ya];
			e && (n += ";" + e), r.cssText = n, a = Xa.test(n);
		}
	} else t && e.removeAttribute("style");
	Ga in e && (i && t === n || (e[Ga] = a ? r.display : ""), e[Ka] && (r.display = "none"));
}
var Qa = /\s*!important$/;
function $a(e, t, n) {
	if (d(n)) n.forEach((n) => $a(e, t, n));
	else if (n ??= "", t.startsWith("--")) Qa.test(n) ? e.setProperty(t, n.replace(Qa, ""), "important") : e.setProperty(t, n);
	else {
		let r = no(e, t);
		Qa.test(n) ? e.setProperty(oe(r), n.replace(Qa, ""), "important") : e[r] = n;
	}
}
var eo = [
	"Webkit",
	"Moz",
	"ms"
], to = {};
function no(e, t) {
	let n = to[t];
	if (n) return n;
	let r = C(t);
	if (r !== "filter" && r in e) return to[t] = r;
	r = se(r);
	for (let n = 0; n < eo.length; n++) {
		let i = eo[n] + r;
		if (i in e) return to[t] = i;
	}
	return t;
}
function ro(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && g(r) && n === r;
}
var io = "http://www.w3.org/1999/xlink";
function ao(e, t, n, r, i, a = ve(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(io, t.slice(6, t.length)) : e.setAttributeNS(io, t, n) : n == null || a && !ye(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : _(n) ? String(n) : n);
}
function oo(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? La(n) : n);
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
function so(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function co(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var lo = /* @__PURE__ */ Symbol("_vei");
function uo(e, t, n, r, i = null) {
	let a = e[lo] || (e[lo] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = mo(t);
		r ? so(e, n, a[t] = vo(r, i), s) : o && (co(e, n, o, s), a[t] = void 0);
	}
}
var fo = /(Once|Passive|Capture)$/, po = /^on:?(?:Once|Passive|Capture)$/;
function mo(e) {
	let t, n;
	for (; (n = e.match(fo)) && !po.test(e);) t ||= {}, e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
	return [e[2] === ":" ? e.slice(3) : oe(e.slice(2)), t];
}
var ho = 0, go = /* @__PURE__ */ Promise.resolve(), _o = () => ho ||= (go.then(() => ho = 0), Date.now());
function vo(e, t) {
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
	return n.value = e, n.attached = _o(), n;
}
var yo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, bo = (e, t, n, r, i, s) => {
	let c = i === "svg";
	t === "class" ? Wa(e, r, c) : t === "style" ? Za(e, n, r) : a(t) ? o(t) || uo(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), 1) : t[0] === "^" ? (t = t.slice(1), 0) : xo(e, t, r, c)) ? (oo(e, t, r), e.tagName.includes("-") || t !== "value" && t !== "checked" && t !== "selected" || ao(e, t, r, c, s, t !== "value")) : e._isVueCE && (So(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !g(r))) ? oo(e, C(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), ao(e, t, r, c));
};
function xo(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && yo(t) && h(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return yo(t) && g(n) ? !1 : t in e;
}
function So(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = C(t);
	return Array.isArray(n) ? n.some((e) => C(e) === r) : Object.keys(n).some((e) => C(e) === r);
}
var Co = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return d(t) ? (e) => le(t, e) : t;
};
function wo(e) {
	e.target.composing = !0;
}
function To(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var Eo = /* @__PURE__ */ Symbol("_assign"), Do = /* @__PURE__ */ Symbol("_initialValue");
function Oo(e, t, n) {
	return t && (e = e.trim()), n && (e = ue(e)), e;
}
var q = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e.parentNode && (e.type === "text" ? e[Do] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Do] = e.defaultValue.replace(/\r\n?/g, "\n"))), e[Eo] = Co(i);
		let a = r || i.props && i.props.type === "number";
		so(e, t ? "change" : "input", (t) => {
			t.target.composing || e[Eo](Oo(e.value, n, a));
		}), (n || a) && so(e, "change", () => {
			e.value = Oo(e.value, n, a);
		}), t || (so(e, "compositionstart", wo), so(e, "compositionend", To), so(e, "change", To));
	},
	mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
		let i = t ?? "", a = e[Do];
		delete e[Do], a !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== a ? e[Eo](Oo(e.value, n, r)) : e.value = i;
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[Eo] = Co(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? ue(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, ko = {
	deep: !0,
	created(e, t, n) {
		e[Eo] = Co(n), so(e, "change", () => {
			let t = e._modelValue, n = No(e), r = e.checked, i = e[Eo];
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
			} else i(Po(e, r));
		});
	},
	mounted: Ao,
	beforeUpdate(e, t, n) {
		e[Eo] = Co(n), Ao(e, t, n);
	}
};
function Ao(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (d(t)) i = Te(t, r.props.value) > -1;
	else if (p(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = we(t, Po(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var J = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		e._modelValue = t, so(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? ue(No(e)) : No(e)), r = e.multiple, i = r ? p(e._modelValue) ? new Set(t) : t : t[0], a = e._pendingValue = [r, r ? d(i) ? t.slice() : t : i];
			try {
				e[Eo](i);
			} finally {
				Cn(() => {
					e._pendingValue === a && (e._pendingValue = void 0);
				});
			}
		}), e[Eo] = Co(r);
	},
	mounted(e, { value: t, modifiers: { number: n } }) {
		Mo(e, t, n);
	},
	beforeUpdate(e, { value: t }, n) {
		e._modelValue = t, e[Eo] = Co(n);
	},
	updated(e, { value: t, modifiers: { number: n } }) {
		let r = e._pendingValue;
		e._pendingValue = void 0, r && r[0] === e.multiple && jo(t, r[1], r[0]) || Mo(e, t, n);
	}
};
function jo(e, t, n) {
	if (!n || d(e)) return we(e, t);
	if (p(e)) {
		if (e.size !== t.length) return !1;
		for (let n of t) if (!e.has(n)) return !1;
		return !0;
	}
	return !1;
}
function Mo(e, t, n = !1) {
	let r = e.multiple, i = d(t);
	if (!r || i || p(t)) {
		for (let a = 0, o = e.options.length; a < o; a++) {
			let o = e.options[a], s = No(o);
			if (r) {
				if (i) {
					let e = typeof s;
					o.selected = e === "string" || e === "number" ? t.some((e) => String(e) === String(s)) : Te(t, s) > -1;
				} else o.selected = t.has(s) || n && typeof s == "string" && t.has(ue(s));
			} else if (we(No(o), t)) {
				e.selectedIndex !== a && (e.selectedIndex = a);
				return;
			}
		}
		!r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function No(e) {
	return "_value" in e ? e._value : e.value;
}
function Po(e, t) {
	let n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t;
}
var Fo = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], Io = {
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
	exact: (e, t) => Fo.some((n) => e[`${n}Key`] && !t.includes(n))
}, Lo = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = Io[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, Ro = {
	esc: "escape",
	space: " ",
	up: "arrow-up",
	left: "arrow-left",
	right: "arrow-right",
	down: "arrow-down",
	delete: "backspace"
}, zo = (e, t) => {
	let n = e._withKeys ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n) => {
		if (!("key" in n)) return;
		let r = oe(n.key);
		if (t.some((e) => e === r || Ro[e] === r)) return e(n);
	}));
}, Bo = /* @__PURE__ */ s({ patchProp: bo }, Ha), Vo;
function Ho() {
	return Vo ||= Ai(Bo);
}
var Uo = ((...e) => {
	let t = Ho().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = Go(e);
		if (!r) return;
		let i = t._component;
		h(i) || i.render || i.template || (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, Wo(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function Wo(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function Go(e) {
	return g(e) ? document.querySelector(e) : e;
}
// src/vue/poetry/IdeaCollections.vue
var Ko = { class: "section-title" }, qo = {
	key: 0,
	class: "btn ghost small",
	"data-action": "nav",
	"data-nav": "ideas"
}, Jo = ["data-idea-collection"], Yo = { class: "idea-badge" }, Xo = {
	key: 0,
	class: "generator-story"
}, Zo = {
	key: 1,
	class: "song-has-lyrics"
}, Qo = { key: 0 }, $o = {
	key: 3,
	class: "generator-detail"
}, es = { class: "actions" }, ts = [
	"data-action",
	"data-id",
	"data-i",
	"aria-label"
], ns = ["innerHTML"], rs = {
	key: 1,
	class: "empty"
}, is = ["innerHTML"], as = {
	__name: "IdeaCollections",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (z(!0), B(R, null, L(e.model.groups, (t) => (z(), B(R, { key: t.kind }, [V("div", Ko, [V("h2", null, O(t.title) + " (" + O(t.items.length) + ")", 1), t.kind === "generated" ? (z(), B("button", qo, "Создать идеи →")) : W("", !0)]), t.items.length ? (z(), B("div", {
			key: 0,
			class: "idea-grid",
			"data-idea-collection": t.kind
		}, [(z(!0), B(R, null, L(t.items, (n) => (z(), Qi(Tr(t.kind === "academy" ? "div" : "article"), {
			key: n.key,
			class: D(["idea", { "generated-card": t.kind === "generated" }])
		}, {
			default: Ln(() => [
				V("div", Yo, O(n.badge), 1),
				V("h3", null, O(n.title), 1),
				V("p", null, O(n.pitch), 1),
				t.kind === "generated" ? (z(), B("p", Xo, O(n.storyLine), 1)) : W("", !0),
				t.kind === "manual" && n.lyrics ? (z(), B("p", Zo, "🎼 Текст песни сохранён · " + O(n.sunoLyrics ? "теги для Suno готовы" : "без разметки"), 1)) : W("", !0),
				n.hook || t.kind === "generated" ? (z(), Qi(Tr(t.kind === "generated" ? "div" : "p"), {
					key: 2,
					class: "generator-hook"
				}, {
					default: Ln(() => [t.kind === "generated" ? (z(), B("span", Qo, "ХУК ПРИПЕВА")) : W("", !0), V("strong", null, O(n.hook), 1)]),
					_: 2
				}, 1024)) : W("", !0),
				t.kind === "generated" && n.detail ? (z(), B("p", $o, "Твоя деталь: " + O(n.detail), 1)) : W("", !0),
				V("div", es, [(z(!0), B(R, null, L(n.actions, (t) => (z(), B("button", {
					key: t.name,
					type: "button",
					class: D(t.className),
					"data-action": t.name,
					"data-id": n.id,
					"data-i": n.index,
					"aria-label": t.label || void 0
				}, [t.icon ? (z(), B("span", {
					key: 0,
					"aria-hidden": "true",
					innerHTML: e.model.icons[t.icon]
				}, null, 8, ns)) : W("", !0), U(O(t.text), 1)], 10, ts))), 128))])
			]),
			_: 2
		}, 1032, ["class"]))), 128))], 8, Jo)) : (z(), B("div", rs, [
			V("span", {
				"aria-hidden": "true",
				innerHTML: e.model.icons.music
			}, null, 8, is),
			V("strong", null, O(t.emptyTitle), 1),
			U(O(t.emptyText), 1)
		]))], 64))), 128));
	}
};
// src/vue/poetry/legacyIdeaCollectionsBridge.js
function os({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_IDEA_COLLECTIONS, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-idea-collections");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, as, { model: o });
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
var ss = { class: "section-title" }, cs = {
	key: 0,
	class: "saved-list"
}, ls = { class: "row" }, us = { class: "actions" }, ds = ["data-id"], fs = ["innerHTML"], ps = ["data-id"], ms = ["data-id", "aria-label"], hs = ["innerHTML"], gs = { class: "sub" }, _s = {
	key: 1,
	class: "empty"
}, vs = ["innerHTML"], ys = {
	__name: "PromptCollection",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (z(), B(R, null, [V("div", ss, [V("h2", null, "Сохранённые промпты (" + O(e.model.items.length) + ")", 1)]), e.model.items.length ? (z(), B("div", cs, [(z(!0), B(R, null, L(e.model.items, (t) => (z(), B("article", {
			key: t.id,
			class: "saved-item"
		}, [
			V("div", ls, [V("h3", null, O(t.title), 1), V("div", us, [
				V("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "copy-saved",
					"data-id": t.id
				}, [V("span", {
					"aria-hidden": "true",
					innerHTML: e.model.icons.copy
				}, null, 8, fs), n[0] ||= U(" Копировать", -1)], 8, ds),
				V("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "edit-manual-prompt",
					"data-id": t.id
				}, "Изменить", 8, ps),
				V("button", {
					type: "button",
					class: "btn danger small",
					"data-action": "delete-saved",
					"data-id": t.id,
					"aria-label": "Удалить промпт «" + t.title + "»"
				}, [V("span", {
					"aria-hidden": "true",
					innerHTML: e.model.icons.trash
				}, null, 8, hs)], 8, ms)
			])]),
			V("p", null, O(t.text), 1),
			V("span", gs, O(t.genre) + " · " + O(t.date), 1)
		]))), 128))])) : (z(), B("div", _s, [
			V("span", {
				"aria-hidden": "true",
				innerHTML: e.model.icons.music
			}, null, 8, vs),
			n[1] ||= V("strong", null, "Промптов пока нет", -1),
			n[2] ||= U("Сохрани первый здесь или в Suno Studio.", -1)
		]))], 64));
	}
};
// src/vue/account/legacyPromptCollectionBridge.js
function bs({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PROMPT_LIST, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-prompts-list");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, ys, { model: o });
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
var xs = { class: "field" }, Ss = { class: "field" }, Cs = ["value"], ws = { class: "field" }, Ts = {
	id: "sb-prompt-char-count",
	class: "sub"
}, Es = {
	__name: "PromptEditor",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = /* @__PURE__ */ M({ ...e.initial.values }), n = K(() => t.text.length);
		return (r, i) => (z(), B(R, null, [
			V("h3", null, O(e.initial.editing ? "Редактирование промпта" : "Новый промпт для Suno"), 1),
			V("div", xs, [i[3] ||= V("label", { for: "custom-prompt-title" }, "Название", -1), F(V("input", {
				id: "custom-prompt-title",
				"onUpdate:modelValue": i[0] ||= (e) => t.title = e,
				maxlength: "100",
				placeholder: "Например, Романтичный афро-поп"
			}, null, 512), [[q, t.title]])]),
			V("div", Ss, [i[4] ||= V("label", { for: "custom-prompt-genre" }, "Жанр", -1), F(V("select", {
				id: "custom-prompt-genre",
				"onUpdate:modelValue": i[1] ||= (e) => t.genre = e
			}, [(z(!0), B(R, null, L(e.initial.genres, (e) => (z(), B("option", {
				key: e.id,
				value: e.id
			}, O(e.name), 9, Cs))), 128))], 512), [[J, t.genre]])]),
			V("div", ws, [
				i[5] ||= V("label", { for: "custom-prompt-text" }, "Текст промпта (до 1000 символов)", -1),
				F(V("textarea", {
					id: "custom-prompt-text",
					"onUpdate:modelValue": i[2] ||= (e) => t.text = e,
					rows: "7",
					maxlength: "1000",
					"aria-describedby": "sb-prompt-char-count",
					placeholder: "Modern Russian-language afropop, 105 BPM, clean vocals, groovy bass..."
				}, null, 512), [[q, t.text]]),
				V("span", Ts, O(n.value) + " / 1000 символов", 1)
			])
		], 64));
	}
};
// src/vue/account/legacyPromptEditorBridge.js
function Ds({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PROMPT_EDITOR, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-prompt-form");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, Es, { initial: o });
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
var Os = { class: "account-back" }, ks = {
	type: "button",
	class: "btn ghost small",
	"data-action": "workspace-back"
}, As = { class: "section-title" }, js = {
	key: 0,
	class: "genre-grid"
}, Ms = ["data-id"], Ns = { class: "genre-content" }, Ps = { class: "kicker" }, Fs = { class: "foot" }, Is = {
	key: 1,
	class: "empty"
}, Ls = { class: "section-title" }, Rs = {
	key: 2,
	class: "idea-grid"
}, zs = { class: "idea-badge" }, Bs = { class: "actions" }, Vs = ["data-id", "data-i"], Hs = ["data-id", "data-i"], Us = {
	key: 3,
	class: "empty"
}, Ws = { class: "section-title" }, Gs = {
	key: 4,
	class: "idea-grid"
}, Ks = { class: "idea-badge" }, qs = ["data-id"], Js = {
	key: 5,
	class: "empty"
}, Ys = { class: "section-title" }, Xs = {
	key: 6,
	class: "idea-grid"
}, Zs = { class: "idea-badge" }, Qs = { class: "generator-story" }, $s = { class: "generator-hook" }, ec = {
	key: 0,
	class: "generator-detail"
}, tc = { class: "actions" }, nc = ["data-id"], rc = ["data-id"], ic = ["data-id", "aria-label"], ac = {
	key: 7,
	class: "empty"
}, oc = { class: "section-title" }, sc = {
	key: 8,
	class: "saved-list"
}, cc = { class: "row" }, lc = { class: "actions" }, uc = ["data-id"], dc = ["data-id", "aria-label"], fc = { class: "sub" }, pc = {
	key: 9,
	class: "empty"
}, mc = {
	__name: "LibraryCollection",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (z(), B(R, null, [
			V("div", Os, [V("button", ks, O(e.model.backLabel), 1)]),
			n[11] ||= V("header", { class: "heading" }, [V("h1", null, "Моя библиотека"), V("p", null, "Любимые жанры, идеи и промпты. Сохраняются локально в этом браузере.")], -1),
			V("div", As, [V("h2", null, "Избранные жанры (" + O(e.model.genres.length) + ")", 1)]),
			e.model.genres.length ? (z(), B("div", js, [(z(!0), B(R, null, L(e.model.genres, (e) => (z(), B("button", {
				key: e.id,
				type: "button",
				class: "genre-card",
				style: E({ "--accent": e.color }),
				"data-action": "genre",
				"data-id": e.id
			}, [n[1] ||= V("div", { class: "art" }, null, -1), V("div", Ns, [V("div", null, [
				V("div", Ps, O(e.family) + " · " + O(e.bpm[0]) + "–" + O(e.bpm[1]) + " BPM", 1),
				V("h3", null, O(e.name), 1),
				V("p", null, O(e.tagline), 1)
			]), V("div", Fs, [V("span", null, O(e.era), 1), n[0] ||= V("span", { style: { color: "#ffacd9" } }, "Открыть →", -1)])])], 12, Ms))), 128))])) : (z(), B("div", Is, [...n[2] ||= [V("strong", null, "Пока нет избранных жанров", -1), U("Добавляй их в карточках Академии.", -1)]])),
			V("div", Ls, [V("h2", null, "Сохранённые идеи (" + O(e.model.ideas.length) + ")", 1)]),
			e.model.ideas.length ? (z(), B("div", Rs, [(z(!0), B(R, null, L(e.model.ideas, (e) => (z(), B("article", {
				key: e.key,
				class: "idea"
			}, [
				V("div", zs, O(e.genre) + " · " + O(e.mood), 1),
				V("h3", null, O(e.title), 1),
				V("p", null, O(e.pitch), 1),
				V("div", Bs, [V("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "idea-use",
					"data-id": e.genreId,
					"data-i": e.index
				}, "В студию", 8, Vs), V("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "idea-save",
					"data-id": e.genreId,
					"data-i": e.index
				}, "Сохранено", 8, Hs)])
			]))), 128))])) : (z(), B("div", Us, [...n[3] ||= [V("strong", null, "Нет сохранённых идей", -1), U("Найди интересный сюжет и нажми «Сохранить».", -1)]])),
			V("div", Ws, [V("h2", null, "Мои собственные идеи (" + O(e.model.own.length) + ")", 1), n[4] ||= V("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "nav",
				"data-nav": "myideas"
			}, "Добавить или изменить →", -1)]),
			e.model.own.length ? (z(), B("div", Gs, [(z(!0), B(R, null, L(e.model.own, (e) => (z(), B("article", {
				key: e.id,
				class: "idea"
			}, [
				V("div", Ks, O(e.genre), 1),
				V("h3", null, O(e.title), 1),
				V("p", null, O(e.pitch), 1),
				V("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "edit-manual-idea",
					"data-id": e.id
				}, "Открыть запись →", 8, qs)
			]))), 128))])) : (z(), B("div", Js, [...n[5] ||= [V("strong", null, "Пока нет своих идей", -1), U("Добавь их в личном кабинете.", -1)]])),
			V("div", Ys, [V("h2", null, "Идеи из генератора (" + O(e.model.generated.length) + ")", 1), n[6] ||= V("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "nav",
				"data-nav": "ideas"
			}, "＋ Создать ещё", -1)]),
			e.model.generated.length ? (z(), B("div", Xs, [(z(!0), B(R, null, L(e.model.generated, (e) => (z(), B("article", {
				key: e.id,
				class: "idea generated-card"
			}, [
				V("div", Zs, O(e.genre) + " · " + O(e.topic), 1),
				V("h3", null, O(e.title), 1),
				V("p", null, O(e.pitch), 1),
				V("p", Qs, O(e.storyLine), 1),
				V("div", $s, [n[7] ||= V("span", null, "ХУК ПРИПЕВА", -1), V("strong", null, O(e.hook), 1)]),
				e.detail ? (z(), B("p", ec, "Твоя деталь: " + O(e.detail), 1)) : W("", !0),
				V("div", tc, [
					V("button", {
						type: "button",
						class: "btn primary small",
						"data-action": "generated-use",
						"data-id": e.id
					}, "В Suno Studio", 8, nc),
					V("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "generated-copy",
						"data-id": e.id
					}, "Копировать", 8, rc),
					V("button", {
						type: "button",
						class: "btn danger small",
						"data-action": "generated-delete",
						"data-id": e.id,
						"aria-label": "Удалить идею «" + e.title + "»"
					}, "Удалить", 8, ic)
				])
			]))), 128))])) : (z(), B("div", ac, [...n[8] ||= [V("strong", null, "Сохранённых новых идей нет", -1), U("Создай идеи в генераторе и нажми «Сохранить».", -1)]])),
			V("div", oc, [V("h2", null, "Мои промпты (" + O(e.model.prompts.length) + ")", 1), n[9] ||= V("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "nav",
				"data-nav": "myprompts"
			}, "Добавить или изменить →", -1)]),
			e.model.prompts.length ? (z(), B("div", sc, [(z(!0), B(R, null, L(e.model.prompts, (e) => (z(), B("article", {
				key: e.id,
				class: "saved-item"
			}, [
				V("div", cc, [V("h3", null, O(e.title), 1), V("div", lc, [V("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "copy-saved",
					"data-id": e.id
				}, "Копировать", 8, uc), V("button", {
					type: "button",
					class: "btn danger small",
					"data-action": "delete-saved",
					"data-id": e.id,
					"aria-label": "Удалить промпт «" + e.title + "»"
				}, "Удалить", 8, dc)])]),
				V("p", null, O(e.text), 1),
				V("span", fc, O(e.date), 1)
			]))), 128))])) : (z(), B("div", pc, [...n[10] ||= [V("strong", null, "Промптов пока нет", -1), U("Создай первый в Suno Studio и сохрани в библиотеке.", -1)]]))
		], 64));
	}
};
// src/vue/account/legacyLibraryBridge.js
function hc({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_LIBRARY, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-library-collection");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, mc, { model: o });
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
var gc = {
	key: 0,
	class: "sbsong-grid"
}, _c = ["data-id", "aria-label"], vc = ["data-sbsong-cover"], yc = ["src"], bc = { class: "sbsong-card-text" }, xc = { class: "sbsong-card-flags" }, Sc = { class: "sbsong-card-actions" }, Cc = ["data-id"], wc = ["data-id"], Tc = ["data-id"], Ec = {
	key: 1,
	class: "sbsong-empty"
}, Dc = {
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
			e && (n.value = e, Cn(() => t.api.hydrateCovers()));
		}
		return I(() => {
			window.addEventListener("sunoboom:songs-search", r), Cn(() => t.api.hydrateCovers());
		}), _r(() => window.removeEventListener("sunoboom:songs-search", r)), (e, t) => n.value.items.length ? (z(), B("div", gc, [(z(!0), B(R, null, L(n.value.items, (e) => (z(), B("article", {
			key: e.id,
			class: "sbsong-card"
		}, [V("button", {
			type: "button",
			class: "sbsong-art-button",
			"data-sbsong-action": "open",
			"data-id": e.id,
			"aria-label": "Открыть " + e.title
		}, [e.hasCover ? (z(), B("img", {
			key: 0,
			alt: "",
			"data-sbsong-cover": e.id,
			loading: "lazy"
		}, null, 8, vc)) : e.coverUrl ? (z(), B("img", {
			key: 1,
			alt: "",
			src: e.coverUrl,
			style: { display: "block" },
			loading: "lazy"
		}, null, 8, yc)) : W("", !0), t[0] ||= V("span", {
			class: "sbsong-no-cover",
			"aria-hidden": "true"
		}, "♫", -1)], 8, _c), V("div", bc, [
			V("small", null, O(e.genre), 1),
			V("h3", null, O(e.title), 1),
			V("p", null, O(e.artist), 1),
			V("div", xc, [V("span", null, O(e.status), 1)]),
			V("div", Sc, [
				V("button", {
					type: "button",
					"data-sbsong-action": "open",
					"data-id": e.id
				}, "Открыть", 8, Cc),
				V("button", {
					type: "button",
					"data-sbsong-action": "edit",
					"data-id": e.id
				}, "Изменить", 8, wc),
				V("button", {
					type: "button",
					"data-sbsong-action": "share",
					"data-id": e.id
				}, "Поделиться", 8, Tc)
			])
		])]))), 128))])) : (z(), B("div", Ec, O(n.value.total ? "По этому запросу песен нет." : "Песен пока нет. Добавь первую карточку и загрузи аудиофайл."), 1));
	}
};
// src/vue/account/legacySongCardsBridge.js
function Oc({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SONG_CARDS, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-song-cards");
		if (r?.node === a || (r &&= (r.unmount(), null), !a || !t.snapshot())) return;
		let o = e(a, Dc, { api: t });
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
var kc = {
	class: "sbsong-versions",
	"data-sb-vue-song-versions": "",
	"aria-label": "Версии записи"
}, Ac = { class: "sbsong-version-heading" }, jc = { key: 0 }, Mc = { class: "sbsong-version-row-head" }, Nc = {
	key: 0,
	class: "sbsong-version-main-badge"
}, Pc = {
	key: 1,
	class: "sbsong-version-play-badge"
}, Fc = { class: "sbsong-version-actions" }, Ic = ["data-version-id"], Lc = ["data-version-id"], Rc = ["data-id", "data-version-id"], zc = ["data-version-id"], Bc = { class: "sbsong-version-notes" }, Vc = ["data-sbsong-version-title", "value"], Hc = ["data-sbsong-version-note", "value"], Uc = ["data-version-id"], Wc = { key: 0 }, Gc = {
	type: "button",
	class: "sbsong-compare-toggle",
	"data-sbsong-action": "compare-toggle"
}, Kc = {
	key: 0,
	class: "sbsong-compare-grid"
}, qc = ["value"], Jc = ["value"], Yc = ["value"], Xc = ["value"], Zc = {
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
		return (t, n) => (z(), B("section", kc, [
			V("div", Ac, [V("h3", null, "Версии записи (" + O(e.versions.length) + ")", 1), e.playingLabel ? (z(), B("small", jc, "В основном плеере: " + O(e.playingLabel), 1)) : W("", !0)]),
			(z(!0), B(R, null, L(e.versions, (t) => (z(), B("article", {
				key: t.id,
				class: "sbsong-version-row"
			}, [
				V("div", Mc, [V("div", null, [
					V("strong", null, O(t.label), 1),
					t.isMain ? (z(), B("span", Nc, "★ Основная")) : W("", !0),
					t.isPlaying ? (z(), B("span", Pc, "♫ Выбрана")) : W("", !0),
					V("small", null, O(t.fileName) + " · " + O(t.sizeLabel) + " · " + O(t.addedDate), 1)
				])]),
				V("div", Fc, [
					V("button", {
						type: "button",
						"data-sbsong-action": "version-play",
						"data-version-id": t.id
					}, "Выбрать для плеера", 8, Ic),
					t.isMain ? W("", !0) : (z(), B("button", {
						key: 0,
						type: "button",
						"data-sbsong-action": "version-main",
						"data-version-id": t.id
					}, "★ Сделать основной", 8, Lc)),
					V("button", {
						type: "button",
						"data-sbsong-action": "share-file",
						"data-id": e.songId,
						"data-version-id": t.id
					}, "Сохранить / отправить", 8, Rc),
					V("button", {
						type: "button",
						class: "sbsong-version-danger",
						"data-sbsong-action": "version-remove",
						"data-version-id": t.id
					}, "Удалить дубль", 8, zc)
				]),
				V("details", Bc, [
					n[2] ||= V("summary", null, "Название и заметки", -1),
					V("label", null, [n[0] ||= U("Название версии ", -1), V("input", {
						type: "text",
						maxlength: "90",
						"data-sbsong-version-title": t.id,
						value: t.label
					}, null, 8, Vc)]),
					V("label", null, [n[1] ||= U("Чем отличается этот дубль ", -1), V("textarea", {
						maxlength: "800",
						rows: "2",
						"data-sbsong-version-note": t.id,
						value: t.notes,
						placeholder: "Например: более плотный припев, удачный вокал..."
					}, null, 8, Hc)]),
					V("button", {
						type: "button",
						"data-sbsong-action": "version-save",
						"data-version-id": t.id
					}, "Сохранить заметки", 8, Uc)
				])
			]))), 128)),
			e.versions.length ? W("", !0) : (z(), B("p", Wc, "Пока нет локальных версий. Загрузи первую запись в MP3, M4A или WAV.")),
			e.versions.length > 1 ? (z(), B(R, { key: 1 }, [V("button", Gc, O(e.compareOpen ? "Скрыть сравнение A/B" : "Сравнить версии A/B"), 1), e.compareOpen ? (z(), B("div", Kc, [
				V("label", null, [
					n[3] ||= U("Версия A ", -1),
					V("select", {
						id: "sbsong-compare-a",
						value: e.compareAId
					}, [(z(!0), B(R, null, L(e.versions, (e) => (z(), B("option", {
						key: e.id,
						value: e.id
					}, O(e.label), 9, Jc))), 128))], 8, qc),
					n[4] ||= V("audio", {
						id: "sbsong-ab-a",
						controls: "",
						preload: "metadata"
					}, null, -1)
				]),
				V("label", null, [
					n[5] ||= U("Версия B ", -1),
					V("select", {
						id: "sbsong-compare-b",
						value: e.compareBId
					}, [(z(!0), B(R, null, L(e.versions, (e) => (z(), B("option", {
						key: e.id,
						value: e.id
					}, O(e.label), 9, Xc))), 128))], 8, Yc),
					n[6] ||= V("audio", {
						id: "sbsong-ab-b",
						controls: "",
						preload: "metadata"
					}, null, -1)
				]),
				n[7] ||= V("p", null, "Два независимых плеера для сравнения дублей. Воспроизведение запускается вручную.", -1)
			])) : W("", !0)], 64)) : W("", !0),
			n[8] ||= oa("<div class=\"sbsong-version-add\"><h4>+ Добавить новую версию</h4><label>Аудиофайл (MP3, M4A, WAV и другие) <input id=\"sbsong-version-file\" type=\"file\" accept=\"audio/*,.mp3,.m4a,.wav,.wave,.flac,.ogg,.opus,.aac\"></label><label>Название дубля <input id=\"sbsong-new-version-title\" maxlength=\"90\" type=\"text\" placeholder=\"Например: Версия с новым припевом\"></label><label>Заметка <textarea id=\"sbsong-new-version-notes\" maxlength=\"800\" rows=\"2\" placeholder=\"Что изменилось в этой записи?\"></textarea></label><button type=\"button\" class=\"sbsong-main-btn\" data-sbsong-action=\"version-add\" id=\"sbsong-version-submit\">Сохранить новую версию</button><p>WAV — до 500 МБ, другие форматы — до 150 МБ. Каждая версия хранится отдельно в браузере этого устройства. Старые записи не перезаписываются.</p></div>", 1)
		]));
	}
}, Qc = { class: "sbsong-detail" }, $c = { class: "sbsong-subhead" }, el = { class: "sbsong-detail-layout" }, tl = { class: "sbsong-detail-cover" }, nl = ["data-sbsong-cover", "alt"], rl = ["src", "alt"], il = {
	key: 2,
	class: "sbsong-no-cover",
	"aria-hidden": "true"
}, al = { class: "sbsong-detail-artist" }, ol = { class: "sbsong-detail-tags" }, sl = { key: 0 }, cl = { key: 1 }, ll = {
	key: 0,
	class: "sbsong-detail-description"
}, ul = {
	class: "sbsong-audio-box",
	id: "sbsong-audio-box"
}, dl = {
	key: 0,
	controls: "",
	preload: "metadata",
	id: "sbsong-audio-player"
}, fl = { key: 1 }, pl = { class: "sbsong-detail-actions" }, ml = ["data-id"], hl = ["data-id"], gl = ["href"], _l = ["data-id"], vl = ["data-id"], yl = ["data-id"], bl = {
	key: 1,
	class: "sbsong-delete-confirm"
}, xl = ["data-id"], Sl = {
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
		return I(() => {
			Cn(() => t.api.hydrateMedia());
		}), (t, n) => (z(), B("section", Qc, [V("div", $c, [V("h2", null, O(e.model.title), 1), n[0] ||= V("button", {
			type: "button",
			"data-sbsong-action": "close-detail"
		}, "Закрыть ×", -1)]), V("div", el, [V("div", tl, [e.model.hasCover ? (z(), B("img", {
			key: 0,
			"data-sbsong-cover": e.model.id,
			alt: "Обложка песни " + e.model.title
		}, null, 8, nl)) : e.model.coverUrl ? (z(), B("img", {
			key: 1,
			src: e.model.coverUrl,
			alt: "Обложка песни " + e.model.title,
			style: { display: "block" }
		}, null, 8, rl)) : (z(), B("span", il, "♫"))]), V("div", null, [
			V("p", al, O(e.model.artist), 1),
			V("p", ol, [e.model.genre ? (z(), B("span", sl, O(e.model.genre), 1)) : W("", !0), e.model.album ? (z(), B("span", cl, O(e.model.album), 1)) : W("", !0)]),
			e.model.description ? (z(), B("p", ll, O(e.model.description), 1)) : W("", !0),
			V("div", ul, [e.model.hasPlayableAudio ? (z(), B("audio", dl)) : (z(), B("p", fl, "Аудио ещё не добавлено. Добавь первую версию в этой карточке."))]),
			H(Zc, {
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
			V("div", pl, [
				V("button", {
					type: "button",
					class: "sbsong-main-btn",
					"data-sbsong-action": "share",
					"data-id": e.model.id
				}, "🔗 Поделиться ссылкой", 8, ml),
				e.model.hasAudio ? (z(), B("button", {
					key: 0,
					type: "button",
					"data-sbsong-action": "share-file",
					"data-id": e.model.id
				}, "Отправить аудиофайл", 8, hl)) : W("", !0),
				e.model.listenUrl ? (z(), B("a", {
					key: 1,
					href: e.model.listenUrl,
					target: "_blank",
					rel: "noopener noreferrer"
				}, "Открыть публичную запись ↗", 8, gl)) : W("", !0),
				V("button", {
					type: "button",
					"data-sbsong-action": "producer",
					"data-id": e.model.id
				}, "🎛 Мастер", 8, _l),
				V("button", {
					type: "button",
					"data-sbsong-action": "edit",
					"data-id": e.model.id
				}, "Изменить", 8, vl),
				V("button", {
					type: "button",
					class: "sbsong-danger",
					"data-sbsong-action": "delete",
					"data-id": e.model.id
				}, "Удалить", 8, yl)
			]),
			e.model.confirmDelete ? (z(), B("div", bl, [
				n[1] ||= V("strong", null, "Удалить карточку вместе с локальными файлами?", -1),
				V("button", {
					type: "button",
					"data-sbsong-action": "delete-confirm",
					"data-id": e.model.id
				}, "Да, удалить", 8, xl),
				n[2] ||= V("button", {
					type: "button",
					"data-sbsong-action": "delete-cancel"
				}, "Отмена", -1)
			])) : W("", !0)
		])])]));
	}
};
// src/vue/account/legacySongDetailBridge.js
function Cl({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SONG_DETAIL, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-song-detail");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, Sl, {
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
var wl = {
	id: "sbsong-form",
	class: "sbsong-form-panel"
}, Tl = { class: "sbsong-subhead" }, El = {
	id: "sbsong-save-form",
	class: "sbsong-form"
}, Dl = { class: "sbsong-form-columns" }, Ol = { class: "sbsong-field" }, kl = { class: "sbsong-artist-field" }, Al = {
	class: "sbsong-field",
	for: "sbsong-artist-input"
}, jl = ["aria-expanded"], Ml = {
	id: "sbsong-artist-options",
	class: "sbsong-artist-options",
	role: "listbox",
	"aria-label": "Список артистов"
}, Nl = ["onClick"], Pl = {
	key: 0,
	class: "sbsong-artist-hint"
}, Fl = {
	key: 1,
	class: "sbsong-artist-hint"
}, Il = { class: "sbsong-genre-field" }, Ll = {
	class: "sbsong-field",
	for: "sbsong-genre-input"
}, Rl = ["aria-expanded"], zl = ["aria-expanded"], Bl = {
	id: "sbsong-genre-options",
	class: "sbsong-genre-options",
	role: "region",
	"aria-label": "Выбор жанра из Академии"
}, Vl = { class: "sbsong-genre-picker-head" }, Hl = ["value"], Ul = {
	id: "sbsong-genre-results",
	class: "sbsong-genre-results",
	role: "listbox",
	"aria-label": "Жанры и поджанры"
}, Wl = ["aria-label"], Gl = { class: "sbsong-genre-group-title" }, Kl = ["onClick"], ql = {
	key: 0,
	class: "sbsong-genre-hint"
}, Jl = { class: "sbsong-field" }, Yl = { class: "sbsong-field" }, Xl = { class: "sbsong-form-columns" }, Zl = { class: "sbsong-field" }, Ql = {
	class: "sbsong-cover-auto",
	"aria-live": "polite"
}, $l = { id: "sbsong-cover-status" }, eu = { class: "sbsong-form-columns" }, tu = { class: "sbsong-field" }, nu = { class: "sbsong-field" }, ru = { class: "sbsong-field" }, iu = {
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
		}), r = /* @__PURE__ */ P(!1), i = /* @__PURE__ */ P(!1), a = /* @__PURE__ */ P(t.api.artistChoices()), o = /* @__PURE__ */ P(!1), s = /* @__PURE__ */ P(!1), c = /* @__PURE__ */ P("Все"), l = /* @__PURE__ */ P(t.api.genreChoices()), u = /* @__PURE__ */ P(t.api.genreFamilies()), d = (e) => String(e || "").normalize("NFKC").toLocaleLowerCase("ru"), f = K(() => {
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
		return I(() => {
			document.addEventListener("pointerdown", x), Cn(() => t.api.hydrateCover());
		}), _r(() => document.removeEventListener("pointerdown", x)), (t, d) => (z(), B("section", wl, [V("div", Tl, [V("h2", null, O(e.model.editId ? "Изменить песню" : "Новая песня"), 1), d[16] ||= V("button", {
			type: "button",
			"data-sbsong-action": "cancel"
		}, "Закрыть ×", -1)]), V("form", El, [
			V("div", Dl, [
				V("label", Ol, [d[17] ||= V("span", null, "Название *", -1), F(V("input", {
					"onUpdate:modelValue": d[0] ||= (e) => n.title = e,
					type: "text",
					name: "title",
					maxlength: "120",
					placeholder: "Название песни"
				}, null, 512), [[q, n.title]])]),
				V("div", kl, [
					V("label", Al, [d[18] ||= V("span", null, "Исполнитель / проект", -1), F(V("input", {
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
						onKeydown: d[4] ||= zo(Lo((e) => r.value = !1, ["prevent"]), ["esc"])
					}, null, 40, jl), [[q, n.artist]])]),
					V("div", { class: "sbsong-artist-shortcuts" }, [V("button", {
						type: "button",
						onClick: y
					}, "▾ Выбрать из списка"), V("button", {
						type: "button",
						onClick: g
					}, "+ Сохранить артиста")]),
					F(V("div", Ml, [
						(z(!0), B(R, null, L(f.value, (e) => (z(), B("button", {
							key: e.name,
							type: "button",
							role: "option",
							class: "sbsong-artist-option",
							onClick: (t) => _(e.name)
						}, [V("strong", null, O(e.name), 1), V("small", null, O(e.origin), 1)], 8, Nl))), 128)),
						p.value ? (z(), B("p", Pl, "Уточни поиск, чтобы увидеть остальные варианты.")) : W("", !0),
						f.value.length ? W("", !0) : (z(), B("p", Fl, O(a.value.length ? "Совпадений нет. Нового артиста можно сохранить кнопкой выше." : "Список пуст. Введи имя и сохрани первого артиста."), 1))
					], 512), [[qa, r.value]])
				]),
				V("div", Il, [
					V("label", Ll, [d[19] ||= V("span", null, "Жанр", -1), F(V("input", {
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
						onKeydown: d[8] ||= zo(Lo((e) => o.value = !1, ["prevent"]), ["esc"])
					}, null, 40, Rl), [[q, n.genre]])]),
					V("button", {
						type: "button",
						class: "sbsong-genre-toggle",
						"aria-controls": "sbsong-genre-options",
						"aria-expanded": String(o.value),
						onClick: b
					}, "▾ Выбрать из Академии", 8, zl),
					F(V("div", Bl, [V("div", Vl, [
						d[21] ||= V("label", { for: "sbsong-genre-family" }, "Направление", -1),
						F(V("select", {
							id: "sbsong-genre-family",
							"onUpdate:modelValue": d[9] ||= (e) => c.value = e,
							"aria-label": "Фильтр по направлению",
							onChange: d[10] ||= (e) => s.value = !0
						}, [d[20] ||= V("option", { value: "Все" }, "Все направления", -1), (z(!0), B(R, null, L(u.value, (e) => (z(), B("option", {
							key: e,
							value: e
						}, O(e), 9, Hl))), 128))], 544), [[J, c.value]]),
						V("small", null, O(m.value.length) + " из " + O(l.value.length), 1)
					]), V("div", Ul, [(z(!0), B(R, null, L(h.value, (e) => (z(), B("div", {
						key: e.name,
						class: "sbsong-genre-group",
						role: "group",
						"aria-label": e.name
					}, [V("div", Gl, [U(O(e.name) + " ", 1), V("span", null, O(e.genres.length), 1)]), (z(!0), B(R, null, L(e.genres, (e) => (z(), B("button", {
						key: e.id,
						type: "button",
						class: "sbsong-genre-option",
						role: "option",
						onClick: (t) => v(e.name)
					}, [V("span", null, O(e.name), 1)], 8, Kl))), 128))], 8, Wl))), 128)), m.value.length ? W("", !0) : (z(), B("p", ql, O(l.value.length ? "Не найдено. Можно ввести свой жанр вручную." : "Каталог Академии пока недоступен. Введи жанр вручную."), 1))])], 512), [[qa, o.value]])
				]),
				V("label", Jl, [d[22] ||= V("span", null, "Альбом / релиз", -1), F(V("input", {
					"onUpdate:modelValue": d[11] ||= (e) => n.album = e,
					type: "text",
					name: "album",
					maxlength: "120",
					placeholder: "Название альбома"
				}, null, 512), [[q, n.album]])])
			]),
			V("label", Yl, [d[23] ||= V("span", null, "Описание", -1), F(V("textarea", {
				"onUpdate:modelValue": d[12] ||= (e) => n.description = e,
				name: "description",
				maxlength: "700",
				rows: "3",
				placeholder: "История, настроение или заметки"
			}, null, 512), [[q, n.description]])]),
			V("div", Xl, [V("label", Zl, [V("span", null, O(e.model.hasAudio ? "Добавить новую аудиоверсию" : "Загрузить аудиофайл (MP3, M4A, WAV и другие)"), 1), d[24] ||= V("input", {
				name: "audio",
				type: "file",
				accept: "audio/*,.mp3,.wav,.wave,.m4a,.aac,.flac,.ogg,.opus"
			}, null, -1)]), d[25] ||= V("label", { class: "sbsong-field" }, [V("span", null, "Обложка вручную (необязательно)"), V("input", {
				name: "cover",
				type: "file",
				accept: "image/png,image/jpeg,image/webp,image/gif"
			})], -1)]),
			V("div", Ql, [d[28] ||= V("div", { class: "sbsong-cover-preview-figure" }, [V("img", {
				id: "sbsong-cover-preview-img",
				alt: "Предпросмотр обложки",
				hidden: ""
			}), V("span", {
				id: "sbsong-cover-preview-placeholder",
				"aria-hidden": "true"
			}, "♫")], -1), V("div", null, [
				d[26] ||= V("strong", null, "Обложка из аудиофайла", -1),
				V("p", $l, O(e.model.hasCover ? "Загружаю сохранённую обложку…" : "Выбери MP3, M4A или FLAC — попробую найти обложку автоматически"), 1),
				d[27] ||= V("small", null, "Ручная обложка имеет приоритет, если ты её выберешь.", -1)
			])]),
			V("div", eu, [
				V("label", tu, [d[29] ||= V("span", null, "Прямая ссылка на MP3 (если есть)", -1), F(V("input", {
					"onUpdate:modelValue": d[13] ||= (e) => n.audioUrl = e,
					type: "text",
					name: "audioUrl",
					maxlength: "700",
					placeholder: "https://.../song.mp3"
				}, null, 512), [[q, n.audioUrl]])]),
				V("label", nu, [d[30] ||= V("span", null, "Публичная страница песни", -1), F(V("input", {
					"onUpdate:modelValue": d[14] ||= (e) => n.listenUrl = e,
					type: "text",
					name: "listenUrl",
					maxlength: "700",
					placeholder: "https://suno.com/..."
				}, null, 512), [[q, n.listenUrl]])]),
				V("label", ru, [d[31] ||= V("span", null, "Публичная обложка (по желанию)", -1), F(V("input", {
					"onUpdate:modelValue": d[15] ||= (e) => n.coverUrl = e,
					type: "text",
					name: "coverUrl",
					maxlength: "700",
					placeholder: "https://.../cover.jpg"
				}, null, 512), [[q, n.coverUrl]])])
			]),
			d[32] ||= V("p", { class: "sbsong-form-help" }, " MP3, M4A, WAV, FLAC и другие аудиофайлы сохраняются локально (IndexedDB): WAV — до 500 МБ, остальные — до 150 МБ при наличии свободной памяти браузера. Новая загрузка добавляет версию, не заменяя старую. Обложка ищется в MP3, M4A и FLAC; для WAV её обычно добавляют вручную. Локальное аудио по общей ссылке не передаётся. ", -1),
			d[33] ||= V("div", { class: "sbsong-form-actions" }, [V("button", {
				type: "submit",
				class: "sbsong-main-btn",
				id: "sbsong-submit"
			}, "Сохранить песню"), V("button", {
				type: "button",
				"data-sbsong-action": "cancel"
			}, "Отмена")], -1)
		])]));
	}
};
// src/vue/account/legacySongEditorBridge.js
function au({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SONG_EDITOR, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-song-editor");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, iu, {
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
var ou = {
	id: "sbsong-artist-manager",
	class: "sbsong-artist-manager",
	"data-sb-vue-artist-manager": ""
}, su = {
	key: 0,
	class: "sbsong-artist-hint"
}, cu = { id: "sbsong-artist-manager-results" }, lu = ["data-id", "aria-label"], uu = {
	key: 0,
	class: "sbsong-artist-hint"
}, du = {
	__name: "ArtistManager",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ P(t.model.filter || ""), r = (e) => String(e || "").normalize("NFKC").toLocaleLowerCase("ru"), i = K(() => t.model.artists.filter((e) => r(e.name).includes(r(n.value))));
		return (t, r) => (z(), B("section", ou, [
			r[1] ||= V("div", { class: "sbsong-subhead" }, [V("h2", null, "Мои артисты"), V("button", {
				type: "button",
				"data-sbsong-action": "artists-manage"
			}, "Закрыть ×")], -1),
			r[2] ||= V("p", null, "Создавай свой список исполнителей и музыкальных проектов. Артисты из «ДНК артиста» и сохранённых песен также доступны при выборе. Удаление из списка не меняет существующие песни.", -1),
			e.model.dnaCount ? (z(), B("p", su, " Профилей ДНК артиста доступно для выбора: " + O(e.model.dnaCount) + ". Они не удаляются при изменении этого списка. ", 1)) : W("", !0),
			r[3] ||= V("div", { class: "sbsong-artist-manager-new" }, [V("input", {
				id: "sbsong-artist-manager-add",
				type: "text",
				maxlength: "120",
				placeholder: "Имя артиста или проекта",
				"aria-label": "Новый артист"
			}), V("button", {
				type: "button",
				class: "sbsong-main-btn",
				"data-sbsong-action": "artist-manager-add"
			}, " + Добавить артиста ")], -1),
			F(V("input", {
				"onUpdate:modelValue": r[0] ||= (e) => n.value = e,
				id: "sbsong-artist-manager-filter",
				type: "search",
				placeholder: "Фильтр по имени…",
				"aria-label": "Фильтр моих артистов"
			}, null, 512), [[q, n.value]]),
			V("div", cu, [(z(!0), B(R, null, L(i.value, (e) => (z(), B("div", {
				key: e.id,
				class: "sbsong-artist-entry"
			}, [V("span", null, O(e.name), 1), V("button", {
				type: "button",
				"data-sbsong-action": "artist-remove",
				"data-id": e.id,
				"aria-label": "Удалить артиста " + e.name
			}, "Удалить", 8, lu)]))), 128)), i.value.length ? W("", !0) : (z(), B("p", uu, O(e.model.artists.length ? "Ничего не найдено." : "Пока нет добавленных вручную артистов."), 1))])
		]));
	}
};
// src/vue/account/legacyArtistManagerBridge.js
function fu({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ARTIST_MANAGER, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-artist-manager");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, du, { model: o });
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
var pu = { key: 0 }, mu = {
	key: 0,
	class: "sb-dna-grid"
}, hu = ["data-id"], gu = { class: "sb-dna-cardimg" }, _u = ["src"], vu = {
	key: 1,
	class: "sb-dna-empty"
}, yu = {
	key: 1,
	class: "sb-dna-detail"
}, bu = { class: "sb-dna-actions" }, xu = ["data-id"], Su = ["data-id"], Cu = ["data-id"], wu = { class: "sb-dna-hero" }, Tu = { class: "sb-dna-portrait" }, Eu = ["src"], Du = { class: "sb-dna-facts" }, Ou = {
	key: 0,
	class: "sb-dna-restrictions"
}, ku = { class: "sb-dna-descr" }, Au = { class: "sb-dna-style" }, ju = { class: "sb-dna-actions" }, Mu = ["data-id"], Nu = ["data-id"], Pu = { class: "sb-dna-related" }, Fu = ["data-id"], Iu = { key: 1 }, Lu = {
	__name: "ArtistDNA",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => e.model.detail ? (z(), B("div", yu, [
			V("div", bu, [
				n[1] ||= V("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "dna-list"
				}, "← Все артисты", -1),
				V("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "dna-apply",
					"data-id": e.model.detail.id
				}, "В Suno Studio", 8, xu),
				V("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "dna-edit",
					"data-id": e.model.detail.id
				}, "Изменить", 8, Su),
				V("button", {
					type: "button",
					class: "btn danger small",
					"data-action": "dna-delete",
					"data-id": e.model.detail.id
				}, "Удалить", 8, Cu)
			]),
			V("div", wu, [V("div", Tu, [e.model.detail.portrait ? (z(), B("img", {
				key: 0,
				src: e.model.detail.portrait,
				alt: "Портрет артиста",
				loading: "lazy"
			}, null, 8, Eu)) : (z(), B(R, { key: 1 }, [U("♫")], 64))]), V("div", null, [
				n[2] ||= V("span", null, "МУЗЫКАЛЬНАЯ ИДЕНТИЧНОСТЬ", -1),
				V("h2", null, O(e.model.detail.name), 1),
				V("p", null, O(e.model.detail.subtitle), 1)
			])]),
			V("div", Du, [(z(!0), B(R, null, L(e.model.detail.facts, (e) => (z(), B("div", {
				key: e.label,
				class: "sb-dna-fact"
			}, [V("span", null, O(e.label), 1), V("strong", null, O(e.value), 1)]))), 128))]),
			(z(!0), B(R, null, L(e.model.detail.textFields, (e) => (z(), B("section", {
				key: e.label,
				class: "sb-dna-descr"
			}, [V("h3", null, O(e.label), 1), V("p", null, O(e.value), 1)]))), 128)),
			e.model.detail.forbids.length ? (z(), B("div", Ou, [n[3] ||= V("strong", null, "Запреты:", -1), (z(!0), B(R, null, L(e.model.detail.forbids, (e) => (z(), B("span", { key: e }, O(e), 1))), 128))])) : W("", !0),
			V("section", ku, [
				n[4] ||= V("h3", null, "Промпт для Suno Style", -1),
				V("div", Au, O(e.model.detail.style), 1),
				V("div", ju, [V("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "dna-copy",
					"data-id": e.model.detail.id
				}, "Копировать Style", 8, Mu), V("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "dna-apply",
					"data-id": e.model.detail.id
				}, "Применить в Suno Studio", 8, Nu)])
			]),
			V("div", Pu, [V("h3", null, "Связанные паспорта треков (" + O(e.model.detail.related.length) + ")", 1), e.model.detail.related.length ? (z(!0), B(R, { key: 0 }, L(e.model.detail.related, (e) => (z(), B("button", {
				key: e.id,
				type: "button",
				class: "sb-dna-tracklink",
				"data-action": "dna-track",
				"data-id": e.id
			}, [V("strong", null, O(e.title), 1), V("span", null, O(e.status) + " →", 1)], 8, Fu))), 128)) : (z(), B("p", Iu, "Пока нет привязанных треков. В «Паспорте трека» можно выбрать этого артиста."))])
		])) : (z(), B("div", pu, [e.model.profiles.length ? (z(), B("div", mu, [(z(!0), B(R, null, L(e.model.profiles, (e) => (z(), B("button", {
			key: e.id,
			type: "button",
			class: "sb-dna-card",
			"data-action": "dna-open",
			"data-id": e.id
		}, [
			V("div", gu, [e.portrait ? (z(), B("img", {
				key: 0,
				src: e.portrait,
				alt: "",
				loading: "lazy"
			}, null, 8, _u)) : (z(), B(R, { key: 1 }, [U("♫")], 64))]),
			V("div", null, [
				V("strong", null, O(e.name), 1),
				V("span", null, O(e.genre), 1),
				V("small", null, O(e.timbre), 1)
			]),
			n[0] ||= V("span", { class: "sb-dna-arrow" }, "→", -1)
		], 8, hu))), 128))])) : (z(), B("div", vu, " Здесь будут музыкальные персонажи со своим вокалом, инструментами, стилем и визуальным образом. Создай первый профиль. "))]));
	}
};
// src/vue/account/legacyArtistDNABridge.js
function Ru({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_DNA, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-dna-view");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, Lu, { model: o });
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
var zu = {
	id: "dna-editor",
	class: "panel sb-dna-editor",
	"data-sb-vue-dna-editor": ""
}, Bu = { class: "sb-dna-formheader" }, Vu = { class: "sb-dna-fields" }, Hu = { class: "field" }, Uu = { class: "field" }, Wu = ["value"], Gu = { class: "field" }, Ku = ["value"], qu = { class: "field" }, Ju = { class: "field" }, Yu = { class: "field" }, Xu = {
	key: 0,
	class: "sb-dna-fields"
}, Zu = { class: "field" }, Qu = { class: "field" }, $u = { class: "field" }, ed = ["for"], td = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"rows"
], nd = { class: "sb-dna-checkboxes" }, rd = ["id", "onUpdate:modelValue"], id = { class: "field" }, ad = ["for"], od = [
	"id",
	"onUpdate:modelValue",
	"rows",
	"maxlength"
], sd = { class: "field" }, cd = { class: "sb-dna-previewbox" }, ld = { id: "dna-style-preview" }, ud = { id: "dna-style-count" }, dd = {
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
		let t = e, n = /* @__PURE__ */ M({ ...t.model.fields }), r = K(() => t.api.stylePreview(n)), i = [
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
		return (t, s) => (z(), B("div", zu, [
			V("div", Bu, [V("div", null, [V("h2", null, O(e.model.editing ? "Редактирование ДНК" : "Новый артист"), 1), s[10] ||= V("p", null, "Сохрани характер звучания — он будет доступен в Suno Studio и «Паспорте трека».", -1)]), s[11] ||= V("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "dna-cancel"
			}, "Закрыть", -1)]),
			V("div", Vu, [
				V("div", Hu, [s[12] ||= V("label", { for: "dna-name" }, "Имя артиста *", -1), F(V("input", {
					id: "dna-name",
					"onUpdate:modelValue": s[0] ||= (e) => n.name = e,
					maxlength: "120",
					placeholder: "Название музыкального проекта"
				}, null, 512), [[q, n.name]])]),
				V("div", Uu, [s[13] ||= V("label", { for: "dna-project" }, "Связанный проект", -1), F(V("select", {
					id: "dna-project",
					"onUpdate:modelValue": s[1] ||= (e) => n.projectId = e
				}, [(z(!0), B(R, null, L(e.model.projects, (e) => (z(), B("option", {
					key: e.id,
					value: e.id
				}, O(e.title), 9, Wu))), 128))], 512), [[J, n.projectId]])]),
				V("div", Gu, [s[14] ||= V("label", { for: "dna-genre" }, "Основной жанр", -1), F(V("select", {
					id: "dna-genre",
					"onUpdate:modelValue": s[2] ||= (e) => n.genre = e
				}, [(z(!0), B(R, null, L(e.model.genres, (e) => (z(), B("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, Ku))), 128))], 512), [[J, n.genre]])]),
				V("div", qu, [s[15] ||= V("label", { for: "dna-othergenres" }, "Дополнительные жанры", -1), F(V("input", {
					id: "dna-othergenres",
					"onUpdate:modelValue": s[3] ||= (e) => n.otherGenres = e,
					maxlength: "240",
					placeholder: "Например, pop, R&B, electropop"
				}, null, 512), [[q, n.otherGenres]])]),
				V("div", Ju, [s[17] ||= V("label", { for: "dna-vocal" }, "Тип вокала", -1), F(V("select", {
					id: "dna-vocal",
					"onUpdate:modelValue": s[4] ||= (e) => n.vocal = e
				}, [...s[16] ||= [
					V("option", { value: "male" }, "Мужской", -1),
					V("option", { value: "female" }, "Женский", -1),
					V("option", { value: "duet" }, "Дуэт", -1)
				]], 512), [[J, n.vocal]])]),
				V("div", Yu, [s[19] ||= V("label", { for: "dna-language" }, "Язык песни", -1), F(V("select", {
					id: "dna-language",
					"onUpdate:modelValue": s[5] ||= (e) => n.language = e
				}, [...s[18] ||= [
					V("option", { value: "Russian" }, "Русский", -1),
					V("option", { value: "English" }, "Английский", -1),
					V("option", { value: "Spanish" }, "Испанский", -1),
					V("option", { value: "Kazakh" }, "Казахский", -1)
				]], 512), [[J, n.language]])])
			]),
			s[24] ||= V("h3", { class: "sb-dna-formsection" }, "Голос и музыкальный почерк", -1),
			(z(), B(R, null, L(i, (e) => (z(), B(R, { key: e.id }, [e.id === "mood" ? (z(), B("div", Xu, [V("div", Zu, [s[20] ||= V("label", { for: "dna-tempo-min" }, "Темп от (BPM)", -1), F(V("input", {
				id: "dna-tempo-min",
				"onUpdate:modelValue": s[6] ||= (e) => n.tempoMin = e,
				maxlength: "3",
				placeholder: "Например, 90"
			}, null, 512), [[q, n.tempoMin]])]), V("div", Qu, [s[21] ||= V("label", { for: "dna-tempo-max" }, "Темп до (BPM)", -1), F(V("input", {
				id: "dna-tempo-max",
				"onUpdate:modelValue": s[7] ||= (e) => n.tempoMax = e,
				maxlength: "3",
				placeholder: "Например, 120"
			}, null, 512), [[q, n.tempoMax]])])])) : W("", !0), V("div", $u, [V("label", { for: "dna-" + e.id }, O(e.label), 9, ed), F(V("textarea", {
				id: "dna-" + e.id,
				"onUpdate:modelValue": (t) => n[e.key] = t,
				maxlength: e.max,
				rows: e.rows
			}, null, 8, td), [[q, n[e.key]]])])], 64))), 64)),
			s[25] ||= V("h3", { class: "sb-dna-formsection" }, "Запреты и ограничения", -1),
			V("div", nd, [(z(), B(R, null, L(a, (e) => V("label", { key: e.id }, [F(V("input", {
				id: "dna-" + e.id,
				"onUpdate:modelValue": (t) => n[e.key] = t,
				type: "checkbox"
			}, null, 8, rd), [[ko, n[e.key]]]), U(" " + O(e.label), 1)])), 64))]),
			V("div", id, [s[22] ||= V("label", { for: "dna-extra" }, "Дополнительные требования к аранжировке", -1), F(V("textarea", {
				id: "dna-extra",
				"onUpdate:modelValue": s[8] ||= (e) => n.extra = e,
				rows: "3",
				maxlength: "650"
			}, null, 512), [[q, n.extra]])]),
			s[26] ||= V("h3", { class: "sb-dna-formsection" }, "Творческий образ", -1),
			(z(), B(R, null, L(o, (e) => V("div", {
				key: e.id,
				class: "field"
			}, [V("label", { for: "dna-" + e.id }, O(e.label), 9, ad), F(V("textarea", {
				id: "dna-" + e.id,
				"onUpdate:modelValue": (t) => n[e.key] = t,
				rows: e.rows,
				maxlength: e.max
			}, null, 8, od), [[q, n[e.key]]])])), 64)),
			V("div", sd, [s[23] ||= V("label", { for: "dna-portrait" }, "Ссылка на портрет (HTTPS)", -1), F(V("input", {
				id: "dna-portrait",
				"onUpdate:modelValue": s[9] ||= (e) => n.portrait = e,
				maxlength: "2000",
				placeholder: "https://…"
			}, null, 512), [[q, n.portrait]])]),
			s[27] ||= V("h3", { class: "sb-dna-formsection" }, "Промпт ДНК для Suno", -1),
			V("div", cd, [V("div", ld, O(r.value), 1), V("span", ud, O(r.value.length) + " / 1000", 1)]),
			s[28] ||= V("div", { class: "sb-dna-actions" }, [V("button", {
				type: "button",
				class: "btn primary",
				"data-action": "dna-save"
			}, "Сохранить ДНК артиста"), V("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "dna-copy-form"
			}, "Копировать промпт")], -1),
			s[29] ||= V("p", { class: "sb-dna-muted" }, " Описания и запреты — подсказки для генерации, а не гарантия идентичного голоса. Все данные пока хранятся локально в браузере. ", -1)
		]));
	}
};
// src/vue/account/legacyArtistDNAEditorBridge.js
function fd({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_DNA_EDITOR, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-dna-editor");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, dd, {
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
var pd = {
	id: "sbs-page",
	class: "sbs-page",
	"data-sb-vue-settings": ""
}, md = { class: "sbs-layout" }, hd = { class: "sbs-main-column" }, gd = { class: "sbs-panel" }, _d = {
	class: "sbs-field sbs-theme-field",
	for: "sbs-theme"
}, vd = ["value"], yd = ["for"], bd = { class: "sbs-option-text" }, xd = { class: "sbs-switch" }, Sd = [
	"id",
	"onUpdate:modelValue",
	"data-sbs-setting",
	"aria-label"
], Cd = { class: "sbs-panel" }, wd = {
	class: "sbs-field",
	for: "sbs-start"
}, Td = ["value"], Ed = { class: "sbs-panel" }, Dd = {
	class: "sbs-field",
	for: "sbs-name"
}, Od = { class: "sbs-side-column" }, kd = { class: "sbs-panel sbs-reset-panel" }, Ad = {
	key: 0,
	class: "sbs-confirm"
}, jd = {
	key: 1,
	type: "button",
	class: "sbs-secondary",
	"data-sbs-action": "reset"
}, Md = ["hidden"], Nd = {
	__name: "AccountSettings",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ M({ ...t.model.settings }), r = /* @__PURE__ */ M({ value: t.model.name }), i = [
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
		return I(() => {
			t.model.resetPending && Cn(() => document.querySelector("#sb-vue-account-settings .sbs-confirm-button")?.focus());
		}), (t, a) => (z(), B("section", pd, [
			a[17] ||= oa("<header class=\"sbs-heading\"><button type=\"button\" class=\"sbs-back\" data-sbs-action=\"close\">← Вернуться в кабинет</button><div class=\"sbs-eyebrow\">SUNOBOOM · ЛИЧНЫЙ КАБИНЕТ</div><div class=\"sbs-heading-row\"><div><h1>Настройки</h1><p>Настрой музыкальную мастерскую под себя. Изменения применяются сразу и сохраняются в этом браузере.</p></div><span class=\"sbs-badge\">⚙️ ПЕРСОНАЛИЗАЦИЯ</span></div></header>", 1),
			V("div", md, [V("div", hd, [
				V("section", gd, [
					a[5] ||= V("div", { class: "sbs-panel-head" }, [V("span", {
						class: "sbs-symbol",
						"aria-hidden": "true"
					}, "🎨"), V("div", null, [V("h2", null, "Внешний вид"), V("p", null, "Удобная работа на компьютере и телефоне")])], -1),
					V("label", _d, [a[3] ||= V("span", null, "Тема приложения", -1), F(V("select", {
						id: "sbs-theme",
						"onUpdate:modelValue": a[0] ||= (e) => n.theme = e,
						"data-sbs-setting": "theme",
						"aria-label": "Тема приложения"
					}, [(z(!0), B(R, null, L(e.model.themes, (e) => (z(), B("option", {
						key: e.id,
						value: e.id
					}, O(e.title), 9, vd))), 128))], 512), [[J, n.theme]])]),
					a[6] ||= V("p", { class: "sbs-help sbs-theme-help" }, "Тёмная, светлая или тема устройства. Изменяется сразу и сохраняется после перезагрузки.", -1),
					(z(), B(R, null, L(i, (e) => V("label", {
						key: e.key,
						class: "sbs-option",
						for: "sbs-" + e.key
					}, [V("span", bd, [V("strong", null, O(e.title), 1), V("small", null, O(e.desc), 1)]), V("span", xd, [F(V("input", {
						id: "sbs-" + e.key,
						"onUpdate:modelValue": (t) => n[e.key] = t,
						type: "checkbox",
						"data-sbs-setting": e.key,
						role: "switch",
						"aria-label": e.title
					}, null, 8, Sd), [[ko, n[e.key]]]), a[4] ||= V("span", {
						class: "sbs-switch-track",
						"aria-hidden": "true"
					}, null, -1)])], 8, yd)), 64))
				]),
				V("section", Cd, [
					a[8] ||= V("div", { class: "sbs-panel-head" }, [V("span", {
						class: "sbs-symbol",
						"aria-hidden": "true"
					}, "🏠"), V("div", null, [V("h2", null, "При открытии сайта"), V("p", null, "Выбери стартовый раздел SUNOBOOM")])], -1),
					V("label", wd, [a[7] ||= V("span", null, "Стартовая страница", -1), F(V("select", {
						id: "sbs-start",
						"onUpdate:modelValue": a[1] ||= (e) => n.startPage = e,
						"data-sbs-setting": "startPage"
					}, [(z(!0), B(R, null, L(e.model.pages, (e) => (z(), B("option", {
						key: e.id,
						value: e.id
					}, O(e.title), 9, Td))), 128))], 512), [[J, n.startPage]])]),
					a[9] ||= V("p", { class: "sbs-help" }, "Применяется при следующем открытии или обновлении сайта. Ссылки на конкретные карточки жанров сохраняют свой переход.", -1)
				]),
				V("section", Ed, [
					a[11] ||= V("div", { class: "sbs-panel-head" }, [V("span", {
						class: "sbs-symbol",
						"aria-hidden": "true"
					}, "👤"), V("div", null, [V("h2", null, "Профиль"), V("p", null, "Имя отображается только в локальном кабинете")])], -1),
					V("label", Dd, [a[10] ||= V("span", null, "Имя в кабинете", -1), F(V("input", {
						id: "sbs-name",
						"onUpdate:modelValue": a[2] ||= (e) => r.value = e,
						type: "text",
						maxlength: "60",
						autocomplete: "off",
						placeholder: "Твоё имя"
					}, null, 512), [[q, r.value]])]),
					a[12] ||= V("button", {
						type: "button",
						class: "sbs-primary",
						"data-sbs-action": "save-name"
					}, "Сохранить имя", -1)
				])
			]), V("aside", Od, [a[16] ||= oa("<section class=\"sbs-panel\"><div class=\"sbs-panel-head\"><span class=\"sbs-symbol\" aria-hidden=\"true\">🔒</span><div><h2>Данные и приватность</h2></div></div><p class=\"sbs-info\">Сейчас SUNOBOOM работает как локальный прототип: твои проекты и настройки сохраняются в браузере. Синхронизации между устройствами пока нет.</p><p class=\"sbs-info\">GitHub Pages остаётся публичной демонстрационной площадкой — полноценный закрытый вход по приглашениям ещё не подключён.</p><button type=\"button\" class=\"sbs-secondary\" data-sbs-action=\"backup\">↓ Перейти к резервным копиям</button></section>", 1), V("section", kd, [
				a[14] ||= V("div", { class: "sbs-panel-head" }, [V("span", {
					class: "sbs-symbol",
					"aria-hidden": "true"
				}, "↺"), V("div", null, [V("h2", null, "Сброс предпочтений")])], -1),
				a[15] ||= V("p", { class: "sbs-info" }, "Вернуть стандартные параметры отображения. Песни, проекты, избранное и имя профиля не удаляются.", -1),
				e.model.resetPending ? (z(), B("div", Ad, [...a[13] ||= [V("strong", null, "Сбросить настройки интерфейса?", -1), V("div", null, [V("button", {
					type: "button",
					class: "sbs-secondary",
					"data-sbs-action": "cancel-reset"
				}, "Отмена"), V("button", {
					type: "button",
					class: "sbs-confirm-button",
					"data-sbs-action": "confirm-reset"
				}, "Да, сбросить")], -1)]])) : (z(), B("button", jd, "Сбросить настройки"))
			])])]),
			V("p", {
				id: "sbs-message",
				class: "sbs-message",
				role: "status",
				"aria-live": "polite",
				hidden: !e.model.message
			}, O(e.model.message), 9, Md)
		]));
	}
};
// src/vue/account/legacyAccountSettingsBridge.js
function Pd({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SETTINGS, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-account-settings");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, Nd, { model: o });
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
var Fd = {
	class: "sbp-layout",
	"data-sb-vue-player-lab": ""
}, Id = {
	class: "sbp-main",
	"aria-label": "Плеер"
}, Ld = {
	class: "sbp-bars",
	"aria-hidden": "true"
}, Rd = { class: "sbp-title-area" }, zd = {
	id: "sbp-now-tag",
	class: "sbp-now-tag"
}, Bd = { id: "sbp-title" }, Vd = { id: "sbp-artist" }, Hd = {
	id: "sbp-counter",
	class: "sbp-counter"
}, Ud = { class: "sbp-progress" }, Wd = ["value", "disabled"], Gd = { class: "sbp-times" }, Kd = { id: "sbp-time-current" }, qd = { id: "sbp-time-total" }, Jd = { class: "sbp-transport" }, Yd = ["aria-pressed"], Xd = ["aria-label", "disabled"], Zd = ["title", "aria-label"], Qd = { class: "sbp-extras" }, $d = { class: "sbp-volume" }, ef = {
	key: 0,
	class: "sbp-ios-volume"
}, tf = ["value"], nf = { id: "sbp-volume-label" }, rf = {
	class: "sbp-speed",
	for: "sbp-rate"
}, af = ["value"], of = ["value"], sf = { class: "sbp-side" }, cf = { class: "sbp-side-head" }, lf = { id: "sbp-list-count" }, uf = ["disabled"], df = {
	class: "sbp-track-list",
	id: "sbp-list",
	"aria-label": "Список треков"
}, ff = ["data-sbp-item"], pf = ["data-index", "aria-label"], mf = { class: "sbp-track-index" }, hf = { class: "sbp-track-meta" }, gf = { class: "sbp-track-duration" }, _f = ["data-index", "aria-label"], vf = {
	key: 0,
	class: "sbp-empty"
}, yf = {
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
		let t = e, n = /* @__PURE__ */ P(t.initialModel);
		function r() {
			let e = t.api.snapshot();
			e && (n.value = e);
		}
		I(() => {
			window.addEventListener("sunoboom:player-lab-update", r), r();
		}), _r(() => window.removeEventListener("sunoboom:player-lab-update", r));
		let i = Array.from({ length: 37 }, (e, t) => ({
			index: t,
			height: 17 + (t * 37 + t * t * 19) % 72 + "%"
		})), a = [
			"0.75",
			"1",
			"1.25",
			"1.5",
			"2"
		];
		return (e, t) => (z(), B("div", Fd, [V("section", Id, [
			V("div", { class: D(["sbp-art", { "is-playing": n.value.playing }]) }, [
				t[0] ||= V("div", { class: "sbp-art-orb" }, "♫", -1),
				V("div", Ld, [(z(!0), B(R, null, L(en(i), (e) => (z(), B("i", {
					key: e.index,
					style: E({
						"--sbp-i": e.index,
						"--sbp-h": e.height
					})
				}, null, 4))), 128))]),
				t[1] ||= V("span", null, "SONIC LAB / PRIVATE PREVIEW", -1)
			], 2),
			V("div", Rd, [V("div", null, [
				V("div", zd, O(n.value.nowTag), 1),
				V("h2", Bd, O(n.value.title), 1),
				V("p", Vd, O(n.value.artist), 1)
			]), V("span", Hd, O(n.value.counter), 1)]),
			V("div", Ud, [
				t[2] ||= V("label", {
					for: "sbp-seek",
					class: "sbp-sr"
				}, "Позиция воспроизведения", -1),
				V("input", {
					id: "sbp-seek",
					type: "range",
					min: "0",
					max: "1000",
					step: "1",
					value: n.value.seekValue,
					disabled: n.value.seekDisabled,
					"aria-label": "Перемотка трека",
					style: E({ "--fill": n.value.seekValue / 10 + "%" })
				}, null, 12, Wd),
				V("div", Gd, [V("span", Kd, O(n.value.currentTime), 1), V("span", qd, O(n.value.totalTime), 1)])
			]),
			V("div", Jd, [
				V("button", {
					type: "button",
					class: D(["sbp-secondary", { "is-on": n.value.shuffle }]),
					id: "sbp-shuffle",
					"data-sbp-action": "shuffle",
					"aria-label": "Случайный порядок",
					"aria-pressed": String(n.value.shuffle),
					title: "Случайный порядок"
				}, "⤨", 10, Yd),
				t[3] ||= V("button", {
					type: "button",
					class: "sbp-secondary sbp-skip",
					"data-sbp-action": "prev",
					"aria-label": "Предыдущий трек"
				}, [V("svg", {
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					focusable: "false"
				}, [V("path", {
					d: "M6 5v14",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2.5",
					"stroke-linecap": "round"
				}), V("path", {
					d: "M18 5 8 12l10 7V5Z",
					fill: "currentColor"
				})])], -1),
				V("button", {
					type: "button",
					class: "sbp-play",
					id: "sbp-play",
					"data-sbp-action": "play",
					"aria-label": n.value.playing ? "Пауза" : "Воспроизвести",
					disabled: !n.value.count
				}, O(n.value.playing ? "❚❚" : "▶"), 9, Xd),
				t[4] ||= V("button", {
					type: "button",
					class: "sbp-secondary sbp-skip",
					"data-sbp-action": "next",
					"aria-label": "Следующий трек"
				}, [V("svg", {
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					focusable: "false"
				}, [V("path", {
					d: "M18 5v14",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2.5",
					"stroke-linecap": "round"
				}), V("path", {
					d: "m6 5 10 7-10 7V5Z",
					fill: "currentColor"
				})])], -1),
				V("button", {
					type: "button",
					class: D(["sbp-secondary", { "is-on": n.value.repeat !== "off" }]),
					"data-sbp-action": "repeat",
					id: "sbp-repeat",
					title: n.value.repeatLabel,
					"aria-label": n.value.repeatLabel
				}, O(n.value.repeat === "one" ? "↻₁" : "↻"), 11, Zd)
			]),
			V("div", Qd, [V("div", $d, [n.value.ios ? (z(), B("span", ef, "📱 Громкость регулируется кнопками телефона")) : (z(), B(R, { key: 1 }, [
				t[5] ||= V("label", { for: "sbp-volume" }, "Громкость", -1),
				t[6] ||= V("span", {
					id: "sbp-volume-icon",
					"aria-hidden": "true"
				}, "◖))", -1),
				V("input", {
					id: "sbp-volume",
					type: "range",
					min: "0",
					max: "100",
					value: n.value.volume,
					"aria-label": "Громкость"
				}, null, 8, tf),
				V("output", nf, O(n.value.volume) + "%", 1)
			], 64))]), V("label", rf, [t[7] ||= U(" Скорость ", -1), V("select", {
				id: "sbp-rate",
				"aria-label": "Скорость воспроизведения",
				value: n.value.rate
			}, [(z(), B(R, null, L(a, (e) => V("option", {
				key: e,
				value: e
			}, O(e) + "×", 9, of)), 64))], 8, af)])]),
			F(V("div", {
				class: "sbp-message",
				id: "sbp-message",
				role: "status",
				"aria-live": "polite"
			}, O(n.value.message), 513), [[qa, n.value.message]])
		]), V("aside", sf, [
			V("div", cf, [V("div", null, [t[8] ||= V("h2", null, "Очередь воспроизведения", -1), V("small", lf, O(n.value.count) + " " + O(n.value.count === 1 ? "трек" : n.value.count > 1 && n.value.count < 5 ? "трека" : "треков"), 1)]), V("button", {
				type: "button",
				class: "sbp-clear",
				"data-sbp-action": "clear",
				id: "sbp-clear",
				disabled: !n.value.count
			}, "Очистить", 8, uf)]),
			t[9] ||= oa("<div class=\"sbp-dropzone\" id=\"sbp-dropzone\"><div class=\"sbp-drop-icon\">↥</div><strong>Загрузи свои треки</strong><p>MP3, WAV, M4A, AAC, OGG, FLAC — если формат поддерживается браузером. Файлы никуда не отправляются.</p><label class=\"sbp-upload-label\" for=\"sbp-file\">Выбрать аудиофайлы</label><input id=\"sbp-file\" type=\"file\" accept=\"audio/*,.mp3,.m4a,.aac,.wav,.ogg,.flac,.opus\" multiple></div><div class=\"sbp-demo-box\"><div><strong>Нет аудиофайлов?</strong><p>Создать 3 коротких оригинальных демо-сигнала для проверки управления.</p></div><button type=\"button\" data-sbp-action=\"demo\" id=\"sbp-demo\">+ Демо-треки</button></div>", 2),
			V("div", df, [(z(!0), B(R, null, L(n.value.tracks, (e) => (z(), B("article", {
				key: e.id,
				class: D(["sbp-track", { "is-current": e.isCurrent }]),
				"data-sbp-item": e.id
			}, [
				V("button", {
					type: "button",
					class: "sbp-track-play",
					"data-sbp-action": "select",
					"data-index": e.index,
					"aria-label": "Включить " + e.name
				}, [V("span", mf, O(e.playLabel), 1), V("span", hf, [V("strong", null, O(e.name), 1), V("small", null, O(e.artist) + " · " + O(e.sourceLabel), 1)])], 8, pf),
				V("span", gf, O(e.durationLabel), 1),
				V("button", {
					type: "button",
					class: "sbp-track-remove",
					"data-sbp-action": "remove",
					"data-index": e.index,
					title: "Удалить из списка",
					"aria-label": "Удалить " + e.name
				}, "×", 8, _f)
			], 10, ff))), 128)), n.value.tracks.length ? W("", !0) : (z(), B("div", vf, " Плейлист пока пуст. Добавь MP3 или нажми «Демо-треки», чтобы начать тест. "))])
		])]));
	}
};
// src/vue/player/legacyPlayerLabBridge.js
function bf({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PLAYER_LAB, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-player-lab");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, yf, {
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
var xf = { class: "sbab-files" }, Sf = ["data-sbab-card"], Cf = { class: "sbab-file-top" }, wf = { class: "sbab-side-label" }, Tf = ["id"], Ef = ["id"], Df = ["id"], Of = { class: "sbab-file-bottom" }, kf = ["for"], Af = ["id", "data-sbab-file"], jf = ["data-side", "disabled"], Mf = ["id"], Nf = { class: "sbab-console" }, Pf = { class: "sbab-console-top" }, Ff = { id: "sbab-active-label" }, If = { class: "sbab-wave" }, Lf = {
	class: "sbab-wave-bars",
	"aria-hidden": "true"
}, Rf = {
	class: "sbab-toggle",
	role: "group",
	"aria-label": "Выбор версии для прослушивания"
}, zf = ["data-side", "aria-pressed"], Bf = { class: "sbab-scrub" }, Vf = ["value", "disabled"], Hf = { class: "sbab-times" }, Uf = { id: "sbab-current" }, Wf = { id: "sbab-duration" }, Gf = { class: "sbab-transport" }, Kf = ["disabled", "aria-label"], qf = { class: "sbab-clip" }, Jf = { class: "sbab-clip-actions" }, Yf = {
	type: "button",
	"data-sbab-action": "mark-start"
}, Xf = { id: "sbab-start" }, Zf = {
	type: "button",
	"data-sbab-action": "mark-end"
}, Qf = { id: "sbab-end" }, $f = ["aria-pressed", "aria-label"], ep = { class: "sbab-volume" }, tp = { key: 0 }, np = ["for"], rp = [
	"id",
	"data-sbab-vol",
	"value"
], ip = ["hidden"], ap = { class: "sbab-review" }, op = { class: "sbab-rating-grid" }, sp = { class: "sbab-rating-label" }, cp = [
	"data-sbab-score",
	"aria-label",
	"value"
], lp = ["value"], up = { class: "sbab-note-grid" }, dp = ["for"], fp = [
	"id",
	"data-sbab-note",
	"placeholder",
	"value"
], pp = {
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
		let t = e, n = /* @__PURE__ */ P(t.initialModel), r = ["A", "B"], i = [
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
		], a = Array.from({ length: 43 }, (e, t) => 15 + (t * t * 23 + t * 11) % 70 + "%");
		function o() {
			let e = t.api.snapshot();
			e && (n.value = e);
		}
		return I(() => {
			window.addEventListener("sunoboom:player-ab-update", o), o();
		}), _r(() => window.removeEventListener("sunoboom:player-ab-update", o)), (e, t) => (z(), B("section", {
			id: "sbab-compare",
			class: D(["sbab-shell", {
				"sbab-is-playing": n.value.playing,
				"sbab-has-files": n.value.hasBoth
			}]),
			"aria-label": "Сравнение аудиоверсий A и B",
			"data-sb-vue-player-ab": ""
		}, [
			t[16] ||= V("header", { class: "sbab-heading" }, [V("div", null, [
				V("span", { class: "sbab-kicker" }, "SUNOBOOM · AUDIO TEST LAB"),
				V("h2", null, "A/B-сравнение аудиоверсий"),
				V("p", null, "Загрузи два варианта песни и переключайся между ними в одной временной точке. Сравнивай вокал, аранжировку и финальное звучание.")
			]), V("span", { class: "sbab-lab-badge" }, "A ↔ B")], -1),
			V("div", xf, [(z(), B(R, null, L(r, (e) => V("div", {
				key: e,
				class: D(["sbab-file-card", [e === "A" ? "sbab-card-a" : "sbab-card-b", { "sbab-active-card": n.value.active === e }]]),
				"data-sbab-card": e
			}, [
				V("div", Cf, [V("span", wf, "ВЕРСИЯ " + O(e), 1), V("span", {
					class: "sbab-loaded",
					id: "sbab-ready-" + e
				}, O(n.value.files[e].ready ? "Файл добавлен" : "Ожидает файл"), 9, Tf)]),
				V("strong", {
					class: "sbab-filename",
					id: "sbab-name-" + e
				}, O(n.value.files[e].name), 9, Ef),
				V("p", {
					class: "sbab-filesub",
					id: "sbab-info-" + e
				}, O(n.value.files[e].info), 9, Df),
				V("div", Of, [
					V("label", {
						class: "sbab-upload",
						for: "sbab-file-" + e
					}, [t[0] ||= V("svg", {
						viewBox: "0 0 24 24",
						width: "19",
						height: "19",
						"aria-hidden": "true"
					}, [V("path", {
						d: "M12 5v14M5 12h14",
						stroke: "currentColor",
						"stroke-width": "2",
						"stroke-linecap": "round"
					})], -1), U(" " + O(n.value.files[e].ready ? "Заменить файл" : "Выбрать файл"), 1)], 8, kf),
					V("input", {
						type: "file",
						id: "sbab-file-" + e,
						accept: "audio/*,.mp3,.wav,.m4a,.aac,.ogg,.flac,.opus",
						"data-sbab-file": e
					}, null, 8, Af),
					V("button", {
						type: "button",
						"data-sbab-action": "remove",
						"data-side": e,
						class: "sbab-remove",
						disabled: !n.value.files[e].ready
					}, "Удалить", 8, jf),
					V("span", {
						class: "sbab-length",
						id: "sbab-length-" + e
					}, O(n.value.files[e].duration), 9, Mf)
				])
			], 10, Sf)), 64))]),
			t[17] ||= V("div", { class: "sbab-demo-row" }, [V("p", null, "Для первого теста можно создать два разных оригинальных коротких аудиофрагмента."), V("button", {
				type: "button",
				"data-sbab-action": "demo"
			}, "Создать демо A и B")], -1),
			V("div", Nf, [
				V("div", Pf, [t[1] ||= V("span", { class: "sbab-kicker" }, "АКТИВНОЕ ПРОСЛУШИВАНИЕ", -1), V("span", Ff, "Версия " + O(n.value.active) + O(n.value.playing ? " · Воспроизведение" : ""), 1)]),
				V("div", If, [V("div", Lf, [(z(!0), B(R, null, L(en(a), (e, t) => (z(), B("i", {
					key: t,
					style: E({ "--bar-height": e })
				}, null, 4))), 128))]), t[2] ||= V("div", { class: "sbab-wave-center" }, "A / B", -1)]),
				V("div", Rf, [(z(), B(R, null, L(r, (e) => V("button", {
					key: e,
					type: "button",
					class: D(e === "A" ? "sbab-btn-a" : "sbab-btn-b"),
					"data-sbab-action": "select",
					"data-side": e,
					"aria-pressed": String(n.value.active === e)
				}, [U(O(e) + " ", 1), V("small", null, "Версия " + O(e), 1)], 10, zf)), 64))]),
				V("div", Bf, [
					t[3] ||= V("label", {
						for: "sbab-seek",
						class: "sbab-sr"
					}, "Перемотка A/B", -1),
					V("input", {
						type: "range",
						id: "sbab-seek",
						min: "0",
						max: "1000",
						step: "1",
						value: n.value.seek,
						disabled: !n.value.canSeek
					}, null, 8, Vf),
					V("div", Hf, [V("span", Uf, O(n.value.currentTime), 1), V("span", Wf, O(n.value.duration), 1)])
				]),
				V("div", Gf, [
					t[4] ||= V("button", {
						type: "button",
						"data-sbab-action": "back",
						"aria-label": "На 5 секунд назад"
					}, [V("svg", {
						viewBox: "0 0 24 24",
						width: "21",
						height: "21",
						"aria-hidden": "true"
					}, [V("path", {
						d: "M7 5v14M18 5 8 12l10 7V5Z",
						stroke: "currentColor",
						"stroke-width": "2",
						fill: "currentColor",
						"stroke-linejoin": "round",
						"stroke-linecap": "round"
					})])], -1),
					V("button", {
						type: "button",
						class: "sbab-big-play",
						id: "sbab-play",
						"data-sbab-action": "toggle",
						disabled: !n.value.canPlay,
						"aria-label": n.value.playing ? "Пауза" : "Воспроизвести"
					}, O(n.value.playing ? "❚❚" : "▶"), 9, Kf),
					t[5] ||= V("button", {
						type: "button",
						"data-sbab-action": "forward",
						"aria-label": "На 5 секунд вперёд"
					}, [V("svg", {
						viewBox: "0 0 24 24",
						width: "21",
						height: "21",
						"aria-hidden": "true"
					}, [V("path", {
						d: "M17 5v14M6 5l10 7-10 7V5Z",
						stroke: "currentColor",
						"stroke-width": "2",
						fill: "currentColor",
						"stroke-linejoin": "round",
						"stroke-linecap": "round"
					})])], -1)
				]),
				V("div", qf, [t[9] ||= V("div", { class: "sbab-clip-title" }, [V("strong", null, "Повтор выбранного фрагмента"), V("small", null, "Например, только припев или куплет")], -1), V("div", Jf, [
					V("button", Yf, [t[6] ||= U("Начало: ", -1), V("span", Xf, O(n.value.start), 1)]),
					V("button", Zf, [t[7] ||= U("Конец: ", -1), V("span", Qf, O(n.value.end), 1)]),
					V("button", {
						type: "button",
						"data-sbab-action": "loop",
						id: "sbab-loop",
						"aria-pressed": String(n.value.loop),
						"aria-label": n.value.loop ? "Повтор фрагмента включён" : "Повтор фрагмента выключен"
					}, O(n.value.loop ? "↻ Повтор включён" : "↻ Повтор выкл."), 9, $f),
					t[8] ||= V("button", {
						type: "button",
						"data-sbab-action": "clear-segment",
						"aria-label": "Очистить границы фрагмента"
					}, "✕", -1)
				])]),
				V("div", ep, [n.value.ios ? (z(), B("span", tp, "📱 Громкость регулируется кнопками телефона")) : (z(), B(R, { key: 1 }, L(r, (e) => V("label", {
					key: e,
					for: "sbab-vol-" + e
				}, [U(" Уровень " + O(e) + " ", 1), V("input", {
					id: "sbab-vol-" + e,
					"data-sbab-vol": e,
					type: "range",
					min: "0",
					max: "100",
					value: n.value.volume[e]
				}, null, 8, rp)], 8, np)), 64))]),
				V("p", {
					id: "sbab-status",
					class: "sbab-status",
					role: "status",
					"aria-live": "polite",
					hidden: !n.value.status
				}, O(n.value.status), 9, ip)
			]),
			V("section", ap, [
				t[14] ||= V("header", null, [V("h3", null, "Оценка на слух"), V("p", null, "Субъективное сравнение. Оценки выставляешь ты — автоматического анализа качества здесь нет.")], -1),
				V("div", op, [
					t[11] ||= V("div", { class: "sbab-rating-head" }, "Параметр", -1),
					t[12] ||= V("div", { class: "sbab-rating-head" }, "A", -1),
					t[13] ||= V("div", { class: "sbab-rating-head" }, "B", -1),
					(z(), B(R, null, L(i, (e) => (z(), B(R, { key: e.key }, [V("div", sp, O(e.label), 1), (z(), B(R, null, L(r, (r) => V("div", { key: r }, [V("select", {
						"data-sbab-score": r + ":" + e.key,
						"aria-label": e.label + " — версия " + r,
						value: n.value.scores[r][e.key]
					}, [t[10] ||= V("option", { value: 0 }, "—", -1), (z(), B(R, null, L(5, (e) => V("option", {
						key: e,
						value: e
					}, O(e) + "/5", 9, lp)), 64))], 8, cp)])), 64))], 64))), 64))
				]),
				V("div", up, [(z(), B(R, null, L(r, (e) => V("label", {
					key: e,
					for: "sbab-note-" + e
				}, [U(" Заметки по " + O(e) + " ", 1), V("textarea", {
					id: "sbab-note-" + e,
					"data-sbab-note": e,
					rows: "3",
					maxlength: "1000",
					placeholder: e === "A" ? "Сильные стороны, что улучшить…" : "Вокал, баланс, пространство…",
					value: n.value.notes[e]
				}, null, 8, fp)], 8, dp)), 64))]),
				t[15] ||= V("div", { class: "sbab-review-actions" }, [V("button", {
					type: "button",
					"data-sbab-action": "copy",
					class: "sbab-review-copy"
				}, "Скопировать результаты"), V("button", {
					type: "button",
					"data-sbab-action": "reset-review",
					class: "sbab-review-clear"
				}, "Очистить оценки")], -1)
			]),
			t[18] ||= V("p", { class: "sbab-footer-note" }, "Файлы не передаются на сервер. При переключении используется одинаковая временная позиция в секундах; точное совпадение музыкальных моментов зависит от самих версий. Для честного сравнения выровняй их громкость. На телефоне переключение может иметь небольшую паузу из-за браузера.", -1)
		], 2));
	}
};
// src/vue/player/legacyPlayerABBridge.js
function mp({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PLAYER_AB, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-player-ab");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, pp, {
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
var hp = ["data-id", "aria-pressed"], gp = { class: "sbpc-song-main" }, _p = { class: "sbpc-song-meta" }, vp = { class: "sbpc-tiny-progress" }, yp = {
	key: 0,
	class: "sbpc-empty"
}, bp = {
	__name: "ProducerSongList",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ P(t.model.query || ""), r = (e) => String(e ?? "").normalize("NFKC").toLocaleLowerCase("ru"), i = K(() => {
			let e = r(n.value.trim());
			return t.model.records.filter((t) => r(t.searchText).includes(e));
		});
		function a(e) {
			n.value = String(e.detail?.query ?? "");
		}
		return I(() => window.addEventListener("sunoboom:producer-search", a)), vr(() => window.removeEventListener("sunoboom:producer-search", a)), (t, n) => (z(), B(R, null, [(z(!0), B(R, null, L(i.value, (t) => (z(), B("button", {
			key: t.id,
			type: "button",
			class: D(["sbpc-song", { active: t.id === e.model.selectedId }]),
			"data-pc-action": "open",
			"data-id": t.id,
			"aria-pressed": t.id === e.model.selectedId
		}, [
			V("span", gp, [V("strong", null, O(t.title), 1), V("span", null, O(t.artist), 1)]),
			V("span", _p, [V("b", null, O(t.done) + "/" + O(t.total), 1), V("small", null, O(t.nextLabel ? "Следующий этап: " + t.nextLabel : "Все этапы отмечены готовыми"), 1)]),
			V("span", vp, [V("i", { style: E({ width: t.percent + "%" }) }, null, 4)])
		], 10, hp))), 128)), i.value.length ? W("", !0) : (z(), B("p", yp, O(e.model.hasRecords ? "Поиск не дал результатов. Измени запрос или создай новую рабочую карточку." : "Пока нет рабочих карточек. Начни с первой песни выше."), 1))], 64));
	}
};
// src/vue/producer/legacyProducerSongListBridge.js
function xp({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PRODUCER_LIST, n = document.getElementById("app");
	if (!t || typeof t.snapshot != "function" || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sbpc-list[data-sb-vue-producer-list]");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, bp, { model: o });
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
var Sp = {
	class: "sbpc-workspace",
	"data-sb-vue-producer-detail": ""
}, Cp = { class: "sbpc-panel sbpc-song-head" }, wp = { class: "sbpc-head-top" }, Tp = { class: "sbpc-completion" }, Ep = { class: "sbpc-next" }, Dp = { class: "sbpc-meta-editor" }, Op = { class: "sbpc-wide" }, kp = { class: "sbpc-panel" }, Ap = { class: "sbpc-panel-head" }, jp = ["aria-valuenow"], Mp = { class: "sbpc-stages" }, Np = ["data-status"], Pp = { class: "sbpc-stage-index" }, Fp = { class: "sbpc-stage-body" }, Ip = { class: "sbpc-stage-title" }, Lp = { class: "sbpc-stage-state" }, Rp = {
	key: 0,
	class: "sbpc-resource-present"
}, zp = {
	key: 1,
	class: "sbpc-resource-empty"
}, Bp = { class: "sbpc-stage-actions" }, Vp = [
	"onUpdate:modelValue",
	"data-pc-stage",
	"aria-label"
], Hp = ["value"], Up = ["data-step"], Wp = { class: "sbpc-panel" }, Gp = { class: "sbpc-links" }, Kp = ["for"], qp = [
	"id",
	"onUpdate:modelValue",
	"data-pc-link"
], Jp = ["value"], Yp = ["data-type", "data-id"], Xp = { class: "sbpc-panel sbpc-arrangement" }, Zp = { class: "sbpc-panel-head" }, Qp = { class: "sbpc-arrangement-actions" }, $p = {
	key: 0,
	type: "button",
	"data-pc-action": "restore-arrangement"
}, em = {
	key: 0,
	class: "sbpc-subnote"
}, tm = { class: "sbpc-panel" }, nm = { class: "sbpc-panel-head" }, rm = {
	key: 0,
	class: "sbpc-log"
}, im = {
	key: 1,
	class: "sbpc-empty"
}, am = {
	__name: "ProducerSongDetail",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ M({
			title: t.model.title,
			artist: t.model.artist,
			notes: t.model.notes
		}), r = /* @__PURE__ */ M(Object.fromEntries(t.model.links.map((e) => [e.field, e.value]))), i = /* @__PURE__ */ M(Object.fromEntries(t.model.stages.map((e) => [e.key, e.status])));
		return (t, a) => (z(), B("div", Sp, [
			V("section", Cp, [
				V("div", wp, [a[3] ||= V("span", { class: "sbpc-kicker" }, "КАРТОЧКА ПРОДЮСИРОВАНИЯ", -1), V("span", Tp, O(e.model.percent) + "% готовности", 1)]),
				V("h2", null, O(e.model.title || "Без названия"), 1),
				V("p", null, O(e.model.artist || "Исполнитель пока не указан") + O(e.model.projectTitle ? " · " + e.model.projectTitle : ""), 1),
				V("p", Ep, O(e.model.nextLabel ? "Следующий этап: " + e.model.nextLabel : "Все этапы отмечены готовыми"), 1),
				V("div", Dp, [
					V("label", null, [a[4] ||= U("Название песни ", -1), F(V("input", {
						id: "sbpc-title",
						"onUpdate:modelValue": a[0] ||= (e) => n.title = e,
						type: "text",
						maxlength: "120"
					}, null, 512), [[q, n.title]])]),
					V("label", null, [a[5] ||= U("Артист / проект ", -1), F(V("input", {
						id: "sbpc-artist",
						"onUpdate:modelValue": a[1] ||= (e) => n.artist = e,
						type: "text",
						maxlength: "120"
					}, null, 512), [[q, n.artist]])]),
					V("label", Op, [a[6] ||= U("Продюсерские заметки ", -1), F(V("textarea", {
						id: "sbpc-notes",
						"onUpdate:modelValue": a[2] ||= (e) => n.notes = e,
						rows: "3",
						maxlength: "3500",
						placeholder: "Что важно сохранить об этой песне?"
					}, null, 512), [[q, n.notes]])])
				]),
				a[7] ||= V("div", { class: "sbpc-head-actions" }, [V("button", {
					type: "button",
					class: "sbpc-main-btn",
					"data-pc-action": "save-details"
				}, "Сохранить карточку"), V("button", {
					type: "button",
					class: "sbpc-delete-btn",
					"data-pc-action": "delete"
				}, "Удалить рабочую карточку")], -1),
				a[8] ||= V("p", { class: "sbpc-help" }, "Удаление рабочей карточки не удаляет идеи, паспорта, промпты и аудио.", -1)
			]),
			V("section", kp, [
				V("header", Ap, [a[9] ||= V("h3", null, "Маршрут песни", -1), V("span", null, O(e.model.done) + " из " + O(e.model.total) + " этапов", 1)]),
				V("div", {
					class: "sbpc-progress",
					role: "progressbar",
					"aria-label": "Готовность работы",
					"aria-valuemin": "0",
					"aria-valuemax": "100",
					"aria-valuenow": e.model.percent
				}, [V("span", { style: E({ width: e.model.percent + "%" }) }, null, 4)], 8, jp),
				V("div", Mp, [(z(!0), B(R, null, L(e.model.stages, (t) => (z(), B("article", {
					key: t.key,
					class: "sbpc-stage",
					"data-status": i[t.key]
				}, [V("div", Pp, O(i[t.key] === "done" ? "✓" : t.index), 1), V("div", Fp, [
					V("div", Ip, [V("strong", null, O(t.title), 1), V("small", null, O(t.desc), 1)]),
					V("div", Lp, [t.hasMaterial ? (z(), B("span", Rp, "● " + O(t.materialLabel), 1)) : (z(), B("span", zp, "○ Подтверждённых материалов нет"))]),
					V("div", Bp, [V("label", null, [a[10] ||= U("Готовность ", -1), F(V("select", {
						"onUpdate:modelValue": (e) => i[t.key] = e,
						"data-pc-stage": t.key,
						"aria-label": "Этап " + t.title
					}, [(z(!0), B(R, null, L(e.model.statuses, (e) => (z(), B("option", {
						key: e.id,
						value: e.id
					}, O(e.label), 9, Hp))), 128))], 8, Vp), [[J, i[t.key]]])]), V("button", {
						type: "button",
						"data-pc-action": "open-stage",
						"data-step": t.key
					}, "Открыть инструмент ↗", 8, Up)])
				])], 8, Np))), 128))]),
				a[11] ||= V("p", { class: "sbpc-help" }, "Готовность отмечается вручную. Наличие материала показано отдельно и не считается автоматически завершённым этапом.", -1)
			]),
			V("section", Wp, [
				a[12] ||= V("header", { class: "sbpc-panel-head" }, [V("h3", null, "Связанные материалы"), V("span", null, "Без копирования данных")], -1),
				a[13] ||= V("p", { class: "sbpc-help" }, "Свяжи существующие идеи, промпты, паспорт трека и карточку с аудио. Исходные записи останутся в своих разделах.", -1),
				V("div", Gp, [(z(!0), B(R, null, L(e.model.links, (e) => (z(), B("div", {
					key: e.field,
					class: "sbpc-link-field"
				}, [
					V("label", { for: "sbpc-" + e.field }, O(e.label), 9, Kp),
					F(V("select", {
						id: "sbpc-" + e.field,
						"onUpdate:modelValue": (t) => r[e.field] = t,
						"data-pc-link": e.field
					}, [(z(!0), B(R, null, L(e.options, (e) => (z(), B("option", {
						key: e.value,
						value: e.value
					}, O(e.label), 9, Jp))), 128))], 8, qp), [[J, r[e.field]]]),
					e.value ? (z(), B("button", {
						key: 0,
						type: "button",
						"data-pc-action": "open-link",
						"data-type": e.type,
						"data-id": e.value
					}, O(e.available ? "Перейти к материалу" : "Материал недоступен") + " ↗ ", 9, Yp)) : W("", !0)
				]))), 128))]),
				a[14] ||= V("button", {
					type: "button",
					class: "sbpc-main-btn",
					"data-pc-action": "save-links"
				}, "Сохранить связи", -1)
			]),
			V("section", Xp, [
				V("header", Zp, [a[15] ||= V("h3", null, "Аранжировка для этой песни", -1), V("span", null, O(e.model.arrangement.count ? e.model.arrangement.count + " блоков сохранено" : "Снимок ещё не сохранён"), 1)]),
				a[18] ||= V("p", { class: "sbpc-help" }, "Конструктор Suno Studio использует текущий рабочий черновик. Сохрани его сюда отдельно для песни; восстановление выполняется только по твоей команде.", -1),
				V("div", Qp, [
					a[16] ||= V("button", {
						type: "button",
						"data-pc-action": "capture-arrangement"
					}, "Сохранить текущую аранжировку", -1),
					e.model.arrangement.count ? (z(), B("button", $p, "Восстановить в Studio")) : W("", !0),
					a[17] ||= V("button", {
						type: "button",
						"data-pc-action": "open-stage",
						"data-step": "arrangement"
					}, "Открыть аранжировщик ↗", -1)
				]),
				e.model.arrangement.count ? (z(), B("p", em, " Сохранено: " + O(e.model.arrangement.savedAt) + " · " + O(e.model.arrangement.count) + " блоков · " + O(e.model.arrangement.duration || "длительность не рассчитана"), 1)) : W("", !0)
			]),
			V("section", tm, [
				V("header", nm, [a[19] ||= V("h3", null, "История работы", -1), V("span", null, O(e.model.history.length) + " событий", 1)]),
				a[20] ||= V("div", { class: "sbpc-log-input" }, [V("input", {
					id: "sbpc-history-note",
					type: "text",
					maxlength: "350",
					placeholder: "Добавить запись: что изменилось или что сделать дальше"
				}), V("button", {
					type: "button",
					"data-pc-action": "add-note"
				}, "Добавить")], -1),
				e.model.history.length ? (z(), B("ol", rm, [(z(!0), B(R, null, L(e.model.history, (e, t) => (z(), B("li", { key: t }, [V("time", null, O(e.date), 1), V("span", null, O(e.text), 1)]))), 128))])) : (z(), B("p", im, "История пока пуста."))
			])
		]));
	}
};
// src/vue/producer/legacyProducerSongDetailBridge.js
function om({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PRODUCER_DETAIL, n = document.getElementById("app");
	if (!t || typeof t.snapshot != "function" || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-producer-detail[data-sb-vue-producer-host]");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, am, { model: o });
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
var sm = {
	class: "sb-track-filters",
	role: "group",
	"aria-label": "Фильтр паспортов по этапу"
}, cm = ["data-filter", "aria-pressed"], lm = {
	key: 0,
	class: "sb-track-list"
}, um = ["data-id"], dm = {
	key: 1,
	class: "sb-track-empty"
}, fm = {
	__name: "TrackPassportList",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (z(), B(R, null, [V("div", sm, [(z(!0), B(R, null, L(e.model.filters, (t) => (z(), B("button", {
			key: t.key,
			type: "button",
			"data-action": "tp-filter",
			"data-filter": t.key,
			class: D({ active: e.model.active === t.key }),
			"aria-pressed": e.model.active === t.key
		}, O(t.label), 11, cm))), 128))]), e.model.records.length ? (z(), B("div", lm, [(z(!0), B(R, null, L(e.model.records, (e) => (z(), B("button", {
			key: e.id,
			type: "button",
			class: "sb-track-tile",
			"data-action": "tp-open",
			"data-id": e.id
		}, [
			n[0] ||= V("span", { class: "sb-track-note" }, "♫", -1),
			V("span", null, [
				V("strong", null, O(e.title), 1),
				V("small", null, O(e.artist), 1),
				V("small", null, O(e.statusLabel) + O(e.releaseLabel ? " · " + e.releaseLabel : ""), 1)
			]),
			n[1] ||= V("i", { "aria-hidden": "true" }, "→", -1)
		], 8, um))), 128))])) : (z(), B("div", dm, O(e.model.hasRecords ? "В этой категории пока нет треков." : "Паспортов пока нет. Создай первый, чтобы объединить материалы песни."), 1))], 64));
	}
};
// src/vue/account/legacyTrackPassportListBridge.js
function pm({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_TRACK_LIST, n = document.getElementById("app");
	if (!t || typeof t.snapshot != "function" || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-track-list[data-sb-vue-track-list]");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, fm, { model: o });
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
var mm = {
	class: "sb-track-detail",
	"data-sb-vue-track-detail-view": ""
}, hm = { class: "sb-track-buttons" }, gm = ["data-id"], _m = ["data-id"], vm = ["data-id"], ym = { class: "sb-track-hero" }, bm = { class: "sb-track-cover" }, xm = ["src"], Sm = { class: "sb-track-phase" }, Cm = { class: "sb-track-facts" }, wm = { class: "sb-track-buttons" }, Tm = ["href"], Em = ["href"], Dm = { class: "sb-track-linkgrid" }, Om = ["data-action", "data-id"], km = {
	key: 1,
	class: "sb-track-linked sb-track-linked-empty"
}, Am = ["data-action", "data-id"], jm = {
	key: 3,
	class: "sb-track-linked sb-track-linked-empty"
}, Mm = ["data-action", "data-id"], Nm = {
	key: 5,
	class: "sb-track-linked sb-track-linked-empty"
}, Pm = { class: "sb-track-section" }, Fm = { key: 0 }, Im = ["href"], Lm = [
	"data-id",
	"data-version",
	"aria-label"
], Rm = {
	key: 1,
	class: "sb-track-disclaimer"
}, zm = { class: "sb-track-versionform" }, Bm = ["data-id"], Vm = {
	__name: "TrackPassportDetail",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (z(), B("div", mm, [
			V("div", hm, [
				n[0] ||= V("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "tp-list"
				}, "← К списку", -1),
				V("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "tp-edit",
					"data-id": e.model.id
				}, "Изменить", 8, gm),
				V("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "tp-event",
					"data-id": e.model.id
				}, "В календарь релизов", 8, _m),
				V("button", {
					type: "button",
					class: "btn danger small",
					"data-action": "tp-delete",
					"data-id": e.model.id
				}, "Удалить", 8, vm)
			]),
			V("div", ym, [V("div", bm, [e.model.cover ? (z(), B("img", {
				key: 0,
				src: e.model.cover,
				alt: "Обложка",
				loading: "lazy"
			}, null, 8, xm)) : (z(), B(R, { key: 1 }, [U("♫")], 64))]), V("div", null, [
				V("span", Sm, O(e.model.phase), 1),
				V("h2", null, O(e.model.title), 1),
				V("p", null, O(e.model.artist), 1)
			])]),
			V("div", Cm, [(z(!0), B(R, null, L(e.model.facts, (e) => (z(), B("div", {
				key: e.label,
				class: "sb-track-fact"
			}, [V("span", null, O(e.label), 1), V("strong", null, O(e.value || "Не указано"), 1)]))), 128))]),
			V("div", wm, [e.model.audio ? (z(), B("a", {
				key: 0,
				class: "btn ghost",
				href: e.model.audio,
				rel: "noopener noreferrer",
				target: "_blank"
			}, "Прослушать ↗", 8, Tm)) : W("", !0), e.model.cover ? (z(), B("a", {
				key: 1,
				class: "btn ghost",
				href: e.model.cover,
				rel: "noopener noreferrer",
				target: "_blank"
			}, "Обложка ↗", 8, Em)) : W("", !0)]),
			n[8] ||= V("h3", { class: "sb-track-section" }, "Связанные материалы", -1),
			V("div", Dm, [
				e.model.links[0].exists ? (z(), B("button", {
					key: 0,
					type: "button",
					class: "sb-track-linked",
					"data-action": e.model.links[0].action,
					"data-id": e.model.links[0].id
				}, [
					V("small", null, O(e.model.links[0].label), 1),
					V("strong", null, O(e.model.links[0].title), 1),
					n[1] ||= V("span", null, "Открыть →", -1)
				], 8, Om)) : (z(), B("div", km, [V("small", null, O(e.model.links[0].label), 1), n[2] ||= V("strong", null, "Не привязан", -1)])),
				e.model.links[1].exists ? (z(), B("button", {
					key: 2,
					type: "button",
					class: "sb-track-linked",
					"data-action": e.model.links[1].action,
					"data-id": e.model.links[1].id
				}, [
					V("small", null, O(e.model.links[1].label), 1),
					V("strong", null, O(e.model.links[1].title), 1),
					n[3] ||= V("span", null, "Открыть →", -1)
				], 8, Am)) : (z(), B("div", jm, [V("small", null, O(e.model.links[1].label), 1), n[4] ||= V("strong", null, "Не привязан", -1)])),
				e.model.links[2].exists ? (z(), B("button", {
					key: 4,
					type: "button",
					class: "sb-track-linked",
					"data-action": e.model.links[2].action,
					"data-id": e.model.links[2].id
				}, [
					V("small", null, O(e.model.links[2].label), 1),
					V("strong", null, O(e.model.links[2].title), 1),
					n[5] ||= V("span", null, "Открыть →", -1)
				], 8, Mm)) : (z(), B("div", Nm, [V("small", null, O(e.model.links[2].label), 1), n[6] ||= V("strong", null, "Не привязан", -1)]))
			]),
			(z(!0), B(R, null, L(e.model.sections, (e) => (z(), B("section", {
				key: e.label,
				class: "sb-track-sectionbox"
			}, [V("h3", null, O(e.label), 1), V("pre", null, O(e.text), 1)]))), 128)),
			V("h3", Pm, "Версии трека (" + O(e.model.versions.length) + ")", 1),
			e.model.versions.length ? (z(!0), B(R, { key: 0 }, L(e.model.versions, (t) => (z(), B("div", {
				key: t.id,
				class: "sb-track-version"
			}, [V("div", null, [
				V("strong", null, O(t.label), 1),
				V("small", null, O(t.date), 1),
				t.notes ? (z(), B("p", Fm, O(t.notes), 1)) : W("", !0)
			]), V("div", null, [t.url ? (z(), B("a", {
				key: 0,
				href: t.url,
				rel: "noopener noreferrer",
				target: "_blank"
			}, "Прослушать ↗", 8, Im)) : W("", !0), V("button", {
				type: "button",
				class: "btn danger small",
				"data-action": "tp-version-remove",
				"data-id": e.model.id,
				"data-version": t.id,
				"aria-label": "Удалить версию " + t.label
			}, "×", 8, Lm)])]))), 128)) : (z(), B("p", Rm, "Версий пока нет.")),
			V("div", zm, [n[7] ||= oa("<div class=\"field\"><label for=\"tp-version-title\">Название новой версии</label><input id=\"tp-version-title\" maxlength=\"100\" placeholder=\"Демо 2 / Финальный мастер\"></div><div class=\"field\"><label for=\"tp-version-url\">Ссылка (HTTPS)</label><input id=\"tp-version-url\" type=\"url\" maxlength=\"2000\" placeholder=\"https://…\"></div><div class=\"field\"><label for=\"tp-version-notes\">Что изменилось?</label><input id=\"tp-version-notes\" maxlength=\"300\" placeholder=\"Необязательно\"></div>", 3), V("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "tp-version-add",
				"data-id": e.model.id
			}, "+ Добавить версию", 8, Bm)]),
			n[9] ||= V("p", { class: "sb-track-disclaimer" }, " Связанный текст и промпт показываются из оригинальных разделов. Расчётные даты — ориентир, окончательная дата определяется издательством. ", -1)
		]));
	}
};
// src/vue/account/legacyTrackPassportDetailBridge.js
function Hm({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_TRACK_DETAIL, n = document.getElementById("app");
	if (!t || typeof t.snapshot != "function" || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-track-detail[data-sb-vue-track-detail]");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, Vm, { model: o });
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
var Um = {
	id: "sb-track-form",
	class: "panel sb-track-form",
	"data-sb-vue-track-editor-view": ""
}, Wm = { class: "sb-track-formhead" }, Gm = { class: "sb-track-fields" }, Km = ["for"], qm = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"placeholder"
], Jm = { class: "field" }, Ym = ["value"], Xm = { class: "field" }, Zm = ["value"], Qm = { class: "field" }, $m = ["value"], eh = { class: "field" }, th = ["value"], nh = { class: "field" }, rh = ["value"], ih = { class: "field" }, ah = { class: "sb-track-fields" }, oh = { class: "field" }, sh = { class: "field" }, ch = ["disabled"], lh = { class: "sb-track-manual" }, uh = {
	id: "tp-date-hint",
	class: "sb-track-hint"
}, dh = { class: "sb-track-fields" }, fh = ["for"], ph = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"placeholder"
], mh = ["for"], hh = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"rows"
], gh = {
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
		let t = e, n = /* @__PURE__ */ M({ ...t.model.fields }), r = K(() => t.api.date7(n.submitted)), i = K(() => r.value ? "Автоматический расчёт: " + t.api.dateLabel(r.value) + " (через 7 календарных дней)." : "Укажи дату передачи издательству: релиз автоматически через 7 дней.");
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
		return (t, r) => (z(), B("div", Um, [
			V("div", Wm, [V("h2", null, O(e.model.editing ? "Редактировать паспорт" : "Новый паспорт трека"), 1), r[9] ||= V("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "tp-cancel"
			}, "Закрыть", -1)]),
			V("div", Gm, [
				(z(!0), B(R, null, L(o.slice(0, 2), (e) => (z(), B("div", {
					key: e.id,
					class: "field"
				}, [V("label", { for: "tp-" + e.id }, O(e.label), 9, Km), F(V("input", {
					id: "tp-" + e.id,
					"onUpdate:modelValue": (t) => n[e.id] = t,
					maxlength: e.max,
					placeholder: e.placeholder
				}, null, 8, qm), [[q, n[e.id]]])]))), 128)),
				V("div", Jm, [r[10] ||= V("label", { for: "tp-status" }, "Этап работы", -1), F(V("select", {
					id: "tp-status",
					"onUpdate:modelValue": r[0] ||= (e) => n.status = e
				}, [(z(!0), B(R, null, L(e.model.stages, (e) => (z(), B("option", {
					key: e.value,
					value: e.value
				}, O(e.label), 9, Ym))), 128))], 512), [[J, n.status]])]),
				V("div", Xm, [r[11] ||= V("label", { for: "tp-genre" }, "Жанр", -1), F(V("select", {
					id: "tp-genre",
					"onUpdate:modelValue": r[1] ||= (e) => n.genre = e
				}, [(z(!0), B(R, null, L(e.model.genres, (e) => (z(), B("option", {
					key: e.value,
					value: e.value
				}, O(e.label), 9, Zm))), 128))], 512), [[J, n.genre]])]),
				V("div", Qm, [r[13] ||= V("label", { for: "tp-project" }, "Мой проект / артист", -1), F(V("select", {
					id: "tp-project",
					"onUpdate:modelValue": r[2] ||= (e) => n.project = e
				}, [r[12] ||= V("option", { value: "" }, "Без связи", -1), (z(!0), B(R, null, L(e.model.projects, (e) => (z(), B("option", {
					key: e.value,
					value: e.value
				}, O(e.label), 9, $m))), 128))], 512), [[J, n.project]])]),
				V("div", eh, [r[15] ||= V("label", { for: "tp-idea" }, "Идея и текст песни", -1), F(V("select", {
					id: "tp-idea",
					"onUpdate:modelValue": r[3] ||= (e) => n.idea = e
				}, [r[14] ||= V("option", { value: "" }, "Без связи", -1), (z(!0), B(R, null, L(e.model.ideas, (e) => (z(), B("option", {
					key: e.value,
					value: e.value
				}, O(e.label), 9, th))), 128))], 512), [[J, n.idea]])]),
				V("div", nh, [r[17] ||= V("label", { for: "tp-prompt" }, "Мой промпт Suno", -1), F(V("select", {
					id: "tp-prompt",
					"onUpdate:modelValue": r[4] ||= (e) => n.prompt = e
				}, [r[16] ||= V("option", { value: "" }, "Без связи", -1), (z(!0), B(R, null, L(e.model.prompts, (e) => (z(), B("option", {
					key: e.value,
					value: e.value
				}, O(e.label), 9, rh))), 128))], 512), [[J, n.prompt]])]),
				V("div", ih, [r[18] ||= V("label", { for: "tp-publisher" }, "Издательство / дистрибьютор", -1), F(V("input", {
					id: "tp-publisher",
					"onUpdate:modelValue": r[5] ||= (e) => n.publisher = e,
					maxlength: "120",
					placeholder: "Название издательства"
				}, null, 512), [[q, n.publisher]])])
			]),
			r[22] ||= V("h3", { class: "sb-track-section" }, "Даты релиза", -1),
			V("div", ah, [V("div", oh, [r[19] ||= V("label", { for: "tp-submitted" }, "Передано издательству", -1), F(V("input", {
				id: "tp-submitted",
				"onUpdate:modelValue": r[6] ||= (e) => n.submitted = e,
				type: "date",
				onChange: a
			}, null, 544), [[q, n.submitted]])]), V("div", sh, [
				r[21] ||= V("label", { for: "tp-release" }, "Дата выхода", -1),
				F(V("input", {
					id: "tp-release",
					"onUpdate:modelValue": r[7] ||= (e) => n.release = e,
					type: "date",
					disabled: !n.override
				}, null, 8, ch), [[q, n.release]]),
				V("label", lh, [F(V("input", {
					id: "tp-override",
					"onUpdate:modelValue": r[8] ||= (e) => n.override = e,
					type: "checkbox",
					onChange: a
				}, null, 544), [[ko, n.override]]), r[20] ||= U(" Установить дату вручную ", -1)])
			])]),
			V("p", uh, O(i.value), 1),
			r[23] ||= V("h3", { class: "sb-track-section" }, "Материалы и метаданные", -1),
			V("div", dh, [(z(), B(R, null, L(s, (e) => V("div", {
				key: e.id,
				class: "field"
			}, [V("label", { for: "tp-" + e.id }, O(e.label), 9, fh), F(V("input", {
				id: "tp-" + e.id,
				"onUpdate:modelValue": (t) => n[e.id] = t,
				maxlength: e.max,
				placeholder: e.placeholder
			}, null, 8, ph), [[q, n[e.id]]])])), 64))]),
			(z(), B(R, null, L(c, (e) => V("div", {
				key: e.id,
				class: "field"
			}, [V("label", { for: "tp-" + e.id }, O(e.label), 9, mh), F(V("textarea", {
				id: "tp-" + e.id,
				"onUpdate:modelValue": (t) => n[e.id] = t,
				maxlength: e.max,
				rows: e.rows
			}, null, 8, hh), [[q, n[e.id]]])])), 64)),
			r[24] ||= V("div", { class: "sb-track-buttons" }, [V("button", {
				type: "button",
				class: "btn primary",
				"data-action": "tp-save"
			}, "Сохранить паспорт"), V("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "tp-cancel"
			}, "Отмена")], -1),
			r[25] ||= V("p", { class: "sb-track-disclaimer" }, " Обложка и аудио пока прикрепляются ссылками. Загрузка файлов будет доступна после переноса на сервер. Данные сохраняются локально и попадают в резервную копию SUNOBOOM. ", -1)
		]));
	}
};
// src/vue/account/legacyTrackPassportEditorBridge.js
function _h({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_TRACK_EDITOR, n = document.getElementById("app");
	if (!n || !t || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-track-editor[data-sb-vue-track-editor]");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, gh, {
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
var vh = { class: "field" }, yh = { class: "field" }, bh = ["value"], xh = { class: "field" }, Sh = { class: "field" }, Ch = {
	__name: "IdeaFields",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = /* @__PURE__ */ M({ ...e.initial.values });
		return (n, r) => (z(), B(R, null, [
			V("div", vh, [r[4] ||= V("label", { for: "custom-idea-title" }, "Название песни", -1), F(V("input", {
				id: "custom-idea-title",
				"onUpdate:modelValue": r[0] ||= (e) => t.title = e,
				maxlength: "100",
				placeholder: "Например, Город на ладони"
			}, null, 512), [[q, t.title]])]),
			V("div", yh, [r[5] ||= V("label", { for: "custom-idea-genre" }, "Музыкальный жанр", -1), F(V("select", {
				id: "custom-idea-genre",
				"onUpdate:modelValue": r[1] ||= (e) => t.genre = e
			}, [(z(!0), B(R, null, L(e.initial.genres, (e) => (z(), B("option", {
				key: e.id,
				value: e.id
			}, O(e.name), 9, bh))), 128))], 512), [[J, t.genre]])]),
			V("div", xh, [r[6] ||= V("label", { for: "custom-idea-text" }, "Сюжет и основная идея", -1), F(V("textarea", {
				id: "custom-idea-text",
				"onUpdate:modelValue": r[2] ||= (e) => t.text = e,
				rows: "5",
				maxlength: "3000",
				placeholder: "О чём песня и что происходит с героем?"
			}, null, 512), [[q, t.text]])]),
			V("div", Sh, [r[7] ||= V("label", { for: "custom-idea-hook" }, "Фраза для припева (необязательно)", -1), F(V("input", {
				id: "custom-idea-hook",
				"onUpdate:modelValue": r[3] ||= (e) => t.hook = e,
				maxlength: "240",
				placeholder: "Запоминающаяся строчка"
			}, null, 512), [[q, t.hook]])])
		], 64));
	}
}, wh = ["value"], Th = {
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
		return I(() => {
			t.initial.highlighted && t.api.enableHighlight(n.value);
		}), (t, r) => (z(), B(R, null, [r[0] ||= V("label", { for: "custom-idea-lyrics" }, "Оригинальный текст (необязательно)", -1), V("textarea", {
			id: "custom-idea-lyrics",
			ref_key: "area",
			ref: n,
			value: e.initial.values.lyrics,
			rows: "12",
			maxlength: "20000",
			placeholder: "Куплет 1:\nТекст первого куплета...\n\nПрипев:\nТекст припева..."
		}, null, 8, wh)], 64));
	}
}, Eh = { class: "field" }, Dh = ["value"], Oh = { class: "workbench-switches" }, kh = ["id", "onUpdate:modelValue"], Ah = { class: "field" }, jh = { class: "detail-actions" }, Mh = {
	type: "button",
	class: "btn ghost",
	"data-action": "copy-current-lyrics"
}, Nh = ["innerHTML"], Ph = { class: "field" }, Fh = { class: "detail-actions" }, Ih = {
	type: "button",
	class: "btn ghost",
	"data-action": "copy-current-style"
}, Lh = ["innerHTML"], Rh = {
	__name: "LyricsTools",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ M({ ...t.initial.values }), r = /* @__PURE__ */ M({ ...t.initial.switches }), i = [
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
		return (t, o) => (z(), B(R, null, [
			V("div", Eh, [o[3] ||= V("label", { for: "lyrics-tag-preset" }, "Характер аранжировки", -1), F(V("select", {
				id: "lyrics-tag-preset",
				"onUpdate:modelValue": o[0] ||= (e) => n.preset = e
			}, [(z(), B(R, null, L(i, ([e, t]) => V("option", {
				key: e,
				value: e
			}, O(t), 9, Dh)), 64))], 512), [[J, n.preset]])]),
			V("div", Oh, [(z(), B(R, null, L(a, ([e, t]) => V("label", { key: e }, [F(V("input", {
				id: "lyrics-" + e,
				"onUpdate:modelValue": (t) => r[e] = t,
				type: "checkbox"
			}, null, 8, kh), [[ko, r[e]]]), U(" " + O(t), 1)])), 64))]),
			o[8] ||= V("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "format-idea-lyrics"
			}, "✨ Создать теги и усилители", -1),
			o[9] ||= V("p", { class: "workbench-note" }, "Разметка примерная: если в тексте нет названий секций, куплеты и припевы определяются по абзацам. Проверь расположение тегов перед копированием.", -1),
			V("div", Ah, [o[4] ||= V("label", { for: "custom-idea-tagged" }, "Готовая версия для поля Lyrics в Suno (можно исправить вручную)", -1), F(V("textarea", {
				id: "custom-idea-tagged",
				"onUpdate:modelValue": o[1] ||= (e) => n.tagged = e,
				rows: "13",
				maxlength: "25000",
				placeholder: "[Verse 1]\n...\n\n[Chorus - powerful melodic hook]\n..."
			}, null, 512), [[q, n.tagged]])]),
			V("div", jh, [V("button", Mh, [V("span", { innerHTML: e.initial.copyIcon }, null, 8, Nh), o[5] ||= U(" Копировать Lyrics", -1)])]),
			V("div", Ph, [o[6] ||= V("label", { for: "custom-idea-style" }, "Дополнительное описание для поля Style (до 1000 символов)", -1), F(V("textarea", {
				id: "custom-idea-style",
				"onUpdate:modelValue": o[2] ||= (e) => n.style = e,
				rows: "4",
				maxlength: "1000",
				placeholder: "Описание жанра, вокала и динамики для Suno"
			}, null, 512), [[q, n.style]])]),
			V("div", Fh, [V("button", Ih, [V("span", { innerHTML: e.initial.copyIcon }, null, 8, Lh), o[7] ||= U(" Копировать Style", -1)])])
		], 64));
	}
};
// src/vue/poetry/legacyIdeaEditorBridge.js
function zh({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_IDEA_EDITOR, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = /* @__PURE__ */ new Map(), i = !1;
	function a() {
		if (!i) for (let [i, a] of [
			["sb-vue-idea-fields", Ch],
			["sb-vue-lyrics-source", Th],
			["sb-vue-lyrics-tools", Rh]
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
var Bh = typeof window < "u", Vh = Symbol(), Hh;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Hh ||= {});
var Uh = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function Wh(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function Gh(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		Xh(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function Kh(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function qh(e) {
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
var Jh = typeof navigator == "object" ? navigator : { userAgent: "" }, Yh = /Macintosh/.test(Jh.userAgent) && /AppleWebKit/.test(Jh.userAgent) && !/Safari/.test(Jh.userAgent), Xh = Bh ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Yh ? Zh : "msSaveOrOpenBlob" in Jh ? Qh : $h : () => {};
function Zh(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? qh(r) : Kh(r.href) ? Gh(e, t, n) : (r.target = "_blank", qh(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		qh(r);
	}, 0));
}
function Qh(e, t = "download", n) {
	if (typeof e == "string") {
		if (Kh(e)) Gh(e, t, n);
		else {
			let t = document.createElement("a");
			t.href = e, t.target = "_blank", setTimeout(function() {
				qh(t);
			});
		}
	} else navigator.msSaveOrOpenBlob(Wh(e, n), t);
}
function $h(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return Gh(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(Uh.HTMLElement)) || "safari" in Uh, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || Yh) && typeof FileReader < "u") {
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
var { assign: eg } = Object;
function tg() {
	let e = Ae(!0), t = e.run(() => /* @__PURE__ */ P({})), n = [], r = [], i = qt({
		install(e) {
			i._a = e, e.provide(Vh, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
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
var { assign: ng } = Object, rg = typeof document < "u";
function ig(e) {
	return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function ag(e) {
	return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && ig(e.default);
}
var Y = Object.assign;
function og(e, t) {
	let n = {};
	for (let r in t) {
		let i = t[r];
		n[r] = cg(i) ? i.map(e) : e(i);
	}
	return n;
}
var sg = () => {}, cg = Array.isArray;
function lg(e, t) {
	let n = {};
	for (let r in e) n[r] = r in t ? t[r] : e[r];
	return n;
}
var ug = /#/g, dg = /&/g, fg = /\//g, pg = /=/g, mg = /\?/g, hg = /\+/g, gg = /%5B/g, _g = /%5D/g, vg = /%5E/g, yg = /%60/g, bg = /%7B/g, xg = /%7C/g, Sg = /%7D/g, Cg = /%20/g;
function wg(e) {
	return e == null ? "" : encodeURI("" + e).replace(xg, "|").replace(gg, "[").replace(_g, "]");
}
function Tg(e) {
	return wg(e).replace(bg, "{").replace(Sg, "}").replace(vg, "^");
}
function Eg(e) {
	return wg(e).replace(hg, "%2B").replace(Cg, "+").replace(ug, "%23").replace(dg, "%26").replace(yg, "`").replace(bg, "{").replace(Sg, "}").replace(vg, "^");
}
function Dg(e) {
	return Eg(e).replace(pg, "%3D");
}
function Og(e) {
	return wg(e).replace(ug, "%23").replace(mg, "%3F");
}
function kg(e) {
	return Og(e).replace(fg, "%2F");
}
function Ag(e) {
	if (e == null) return null;
	try {
		return decodeURIComponent("" + e);
	} catch {}
	return "" + e;
}
var jg = /\/$/, Mg = (e) => e.replace(jg, "");
function Ng(e, t, n = "/") {
	let r, i = {}, a = "", o = "", s = t.indexOf("#"), c = t.indexOf("?");
	return c = s >= 0 && c > s ? -1 : c, c >= 0 && (r = t.slice(0, c), a = t.slice(c, s > 0 ? s : t.length), i = e(a.slice(1))), s >= 0 && (r ||= t.slice(0, s), o = t.slice(s, t.length)), r = Bg(r ?? t, n), {
		fullPath: r + a + o,
		path: r,
		query: i,
		hash: Ag(o)
	};
}
function Pg(e, t) {
	let n = t.query ? e(t.query) : "";
	return t.path + (n && "?") + n + (t.hash || "");
}
function Fg(e, t, n) {
	let r = t.matched.length - 1, i = n.matched.length - 1;
	return r > -1 && r === i && Ig(t.matched[r], n.matched[i]) && Lg(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Ig(e, t) {
	return (e.aliasOf || e) === (t.aliasOf || t);
}
function Lg(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (var n in e) if (!Rg(e[n], t[n])) return !1;
	return !0;
}
function Rg(e, t) {
	return cg(e) ? zg(e, t) : cg(t) ? zg(t, e) : e?.valueOf() === t?.valueOf();
}
function zg(e, t) {
	return cg(t) ? e.length === t.length && e.every((e, n) => e === t[n]) : e.length === 1 && e[0] === t;
}
function Bg(e, t) {
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
var Vg = {
	path: "/",
	name: void 0,
	params: {},
	query: {},
	hash: "",
	fullPath: "/",
	matched: [],
	meta: {},
	redirectedFrom: void 0
}, Hg = /* @__PURE__ */ function(e) {
	return e.pop = "pop", e.push = "push", e;
}({}), Ug = /* @__PURE__ */ function(e) {
	return e.back = "back", e.forward = "forward", e.unknown = "", e;
}({});
function Wg(e) {
	if (!e) {
		if (rg) {
			let t = document.querySelector("base");
			e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
		} else e = "/";
	}
	return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Mg(e);
}
var Gg = /^[^#]+#/;
function Kg(e, t) {
	return e.replace(Gg, "#") + t;
}
function qg(e, t) {
	let n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
	return {
		behavior: t.behavior,
		left: r.left - n.left - (t.left || 0),
		top: r.top - n.top - (t.top || 0)
	};
}
var Jg = () => ({
	left: window.scrollX,
	top: window.scrollY
});
function Yg(e) {
	let t;
	if ("el" in e) {
		let n = e.el, r = typeof n == "string" && n.startsWith("#"), i = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
		if (!i) return;
		t = qg(i, e);
	} else t = e;
	"scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left == null ? window.scrollX : t.left, t.top == null ? window.scrollY : t.top);
}
function Xg(e, t) {
	return (history.state ? history.state.position - t : -1) + e;
}
var Zg = /* @__PURE__ */ new Map();
function Qg(e, t) {
	Zg.set(e, t);
}
function $g(e) {
	let t = Zg.get(e);
	return Zg.delete(e), t;
}
function e_(e) {
	return typeof e == "string" || e && typeof e == "object";
}
function t_(e) {
	return typeof e == "string" || typeof e == "symbol";
}
var X = /* @__PURE__ */ function(e) {
	return e[e.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", e[e.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", e[e.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", e[e.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", e[e.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", e;
}({}), n_ = Symbol("");
X.MATCHER_NOT_FOUND, X.NAVIGATION_GUARD_REDIRECT, X.NAVIGATION_ABORTED, X.NAVIGATION_CANCELLED, X.NAVIGATION_DUPLICATED;
function r_(e, t) {
	return Y(/* @__PURE__ */ Error(), {
		type: e,
		[n_]: !0
	}, t);
}
function i_(e, t) {
	return e instanceof Error && n_ in e && (t == null || !!(e.type & t));
}
function a_(e) {
	let t = {};
	if (e === "" || e === "?") return t;
	let n = (e[0] === "?" ? e.slice(1) : e).split("&");
	for (let e = 0; e < n.length; ++e) {
		let r = n[e].replace(hg, " "), i = r.indexOf("="), a = Ag(i < 0 ? r : r.slice(0, i)), o = i < 0 ? null : Ag(r.slice(i + 1));
		if (a in t) {
			let e = t[a];
			cg(e) || (e = t[a] = [e]), e.push(o);
		} else t[a] = o;
	}
	return t;
}
function o_(e) {
	let t = "";
	for (let n in e) {
		let r = e[n];
		n = Dg(n), r == null ? r !== void 0 && (t += (t.length ? "&" : "") + n) : (cg(r) ? r.map((e) => e && Eg(e)) : [r && Eg(r)]).forEach((e) => {
			e !== void 0 && (t += (t.length ? "&" : "") + n, e != null && (t += "=" + e));
		});
	}
	return t;
}
function s_(e) {
	let t = {};
	for (let n in e) {
		let r = e[n];
		r !== void 0 && (t[n] = cg(r) ? r.map((e) => e == null ? null : "" + e) : r == null ? r : "" + r);
	}
	return t;
}
var c_ = Symbol(""), l_ = Symbol(""), u_ = Symbol(""), d_ = Symbol(""), f_ = Symbol("");
function p_() {
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
function m_(e, t, n, r, i, a = (e) => e()) {
	let o = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
	return () => new Promise((s, c) => {
		let l = (e) => {
			e === !1 ? c(r_(X.NAVIGATION_ABORTED, {
				from: n,
				to: t
			})) : e instanceof Error ? c(e) : e_(e) ? c(r_(X.NAVIGATION_GUARD_REDIRECT, {
				from: t,
				to: e
			})) : (o && r.enterCallbacks[i] === o && typeof e == "function" && o.push(e), s());
		}, u = a(() => e.call(r && r.instances[i], t, n, l)), d = Promise.resolve(u);
		e.length < 3 && (d = d.then(l)), d.catch((e) => c(e));
	});
}
function h_(e, t, n, r, i = (e) => e()) {
	let a = [];
	for (let o of e) for (let e in o.components) {
		let s = o.components[e];
		if (t === "beforeRouteEnter" || o.instances[e]) {
			if (ig(s)) {
				let c = (s.__vccOpts || s)[t];
				c && a.push(m_(c, n, r, o, e, i));
			} else {
				let c = s();
				a.push(() => c.then((a) => {
					if (!a) throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);
					let s = ag(a) ? a.default : a;
					o.mods[e] = a, o.components[e] = s;
					let c = (s.__vccOpts || s)[t];
					return c && m_(c, n, r, o, e, i)();
				}));
			}
		}
	}
	return a;
}
function g_(e, t) {
	let n = [], r = [], i = [], a = Math.max(t.matched.length, e.matched.length);
	for (let o = 0; o < a; o++) {
		let a = t.matched[o];
		a && (e.matched.find((e) => Ig(e, a)) ? r.push(a) : n.push(a));
		let s = e.matched[o];
		s && (t.matched.find((e) => Ig(e, s)) || i.push(s));
	}
	return [
		n,
		r,
		i
	];
}
// node_modules/vue-router/dist/vue-router.mjs
function __(e = "") {
	let t = [], n = [["", {}]], r = 0;
	e = Wg(e);
	function i(e, t = {}) {
		r++, r !== n.length && n.splice(r), n.push([e, t]);
	}
	function a(e, n, { direction: r, delta: i }) {
		let a = {
			direction: r,
			delta: i,
			type: Hg.pop
		};
		for (let r of t) r(e, n, a);
	}
	let o = {
		location: "",
		state: {},
		base: e,
		createHref: Kg.bind(null, e),
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
			let i = this.location, o = e < 0 ? Ug.back : Ug.forward;
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
var v_ = /* @__PURE__ */ function(e) {
	return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.Group = 2] = "Group", e;
}({}), Z = /* @__PURE__ */ function(e) {
	return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.ParamRegExp = 2] = "ParamRegExp", e[e.ParamRegExpEnd = 3] = "ParamRegExpEnd", e[e.EscapeNext = 4] = "EscapeNext", e;
}(Z || {}), y_ = {
	type: v_.Static,
	value: ""
}, b_ = /[a-zA-Z0-9_]/;
function x_(e) {
	if (!e) return [[]];
	if (e === "/") return [[y_]];
	if (!e.startsWith("/")) throw Error(`Invalid path "${e}"`);
	function t(e) {
		throw Error(`ERR (${n})/"${l}": ${e}`);
	}
	let n = Z.Static, r = n, i = [], a;
	function o() {
		a && i.push(a), a = [];
	}
	let s = 0, c, l = "", u = "";
	function d() {
		l &&= (n === Z.Static ? a.push({
			type: v_.Static,
			value: l
		}) : n === Z.Param || n === Z.ParamRegExp || n === Z.ParamRegExpEnd ? (a.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`), a.push({
			type: v_.Param,
			value: l,
			regexp: u,
			repeatable: c === "*" || c === "+",
			optional: c === "*" || c === "?"
		})) : t("Invalid state to consume buffer"), "");
	}
	function f() {
		l += c;
	}
	for (; s < e.length;) if (c = e[s++], c === "\\" && n !== Z.ParamRegExp) r = n, n = Z.EscapeNext;
	else switch (n) {
		case Z.Static:
			c === "/" ? (l && d(), o()) : c === ":" ? (d(), n = Z.Param) : f();
			break;
		case Z.EscapeNext:
			f(), n = r;
			break;
		case Z.Param:
			c === "(" ? n = Z.ParamRegExp : b_.test(c) ? f() : (d(), n = Z.Static, c !== "*" && c !== "?" && c !== "+" && s--);
			break;
		case Z.ParamRegExp:
			c === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + c : n = Z.ParamRegExpEnd : u += c;
			break;
		case Z.ParamRegExpEnd:
			d(), n = Z.Static, c !== "*" && c !== "?" && c !== "+" && s--, u = "";
			break;
		default: t("Unknown state");
	}
	return n === Z.ParamRegExp && t(`Unfinished custom RegExp for param "${l}"`), d(), o(), i;
}
var S_ = "[^/]+?", C_ = {
	sensitive: !1,
	strict: !1,
	start: !0,
	end: !0
}, w_ = /* @__PURE__ */ function(e) {
	return e[e._multiplier = 10] = "_multiplier", e[e.Root = 90] = "Root", e[e.Segment = 40] = "Segment", e[e.SubSegment = 30] = "SubSegment", e[e.Static = 40] = "Static", e[e.Dynamic = 20] = "Dynamic", e[e.BonusCustomRegExp = 10] = "BonusCustomRegExp", e[e.BonusWildcard = -50] = "BonusWildcard", e[e.BonusRepeatable = -20] = "BonusRepeatable", e[e.BonusOptional = -8] = "BonusOptional", e[e.BonusStrict = .7000000000000001] = "BonusStrict", e[e.BonusCaseSensitive = .25] = "BonusCaseSensitive", e;
}(w_ || {}), T_ = /[.+*?^${}()[\]/\\]/g;
function E_(e, t) {
	let n = Y({}, C_, t), r = [], i = n.start ? "^" : "", a = [];
	for (let t of e) {
		let e = t.length ? [] : [w_.Root];
		n.strict && !t.length && (i += "/");
		for (let r = 0; r < t.length; r++) {
			let o = t[r], s = w_.Segment + (n.sensitive ? w_.BonusCaseSensitive : 0);
			if (o.type === v_.Static) r || (i += "/"), i += o.value.replace(T_, "\\$&"), s += w_.Static;
			else if (o.type === v_.Param) {
				let { value: e, repeatable: n, optional: c, regexp: l } = o;
				a.push({
					name: e,
					repeatable: n,
					optional: c
				});
				let u = l || S_;
				if (u !== S_) {
					s += w_.BonusCustomRegExp;
					try {
						`${u}`;
					} catch (t) {
						throw Error(`Invalid custom RegExp for param "${e}" (${u}): ` + t.message);
					}
				}
				let d = n ? `((?:${u})(?:/(?:${u}))*)` : `(${u})`;
				r || (d = c && t.length < 2 ? `(?:/${d})` : "/" + d), c && (d += "?"), i += d, s += w_.Dynamic, c && (s += w_.BonusOptional), n && (s += w_.BonusRepeatable), u === ".*" && (s += w_.BonusWildcard);
			}
			e.push(s);
		}
		r.push(e);
	}
	if (n.strict && n.end) {
		let e = r.length - 1;
		r[e][r[e].length - 1] += w_.BonusStrict;
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
			for (let e of i) if (e.type === v_.Static) n += e.value;
			else if (e.type === v_.Param) {
				let { value: a, repeatable: o, optional: s } = e, c = a in t ? t[a] : "";
				if (cg(c) && !o) throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);
				let l = cg(c) ? c.join("/") : c;
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
function D_(e, t) {
	let n = 0;
	for (; n < e.length && n < t.length;) {
		let r = t[n] - e[n];
		if (r) return r;
		n++;
	}
	return e.length < t.length ? e.length === 1 && e[0] === w_.Static + w_.Segment ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === w_.Static + w_.Segment ? 1 : -1 : 0;
}
function O_(e, t) {
	let n = 0, r = e.score, i = t.score;
	for (; n < r.length && n < i.length;) {
		let e = D_(r[n], i[n]);
		if (e) return e;
		n++;
	}
	if (Math.abs(i.length - r.length) === 1) {
		if (k_(r)) return 1;
		if (k_(i)) return -1;
	}
	return i.length - r.length;
}
function k_(e) {
	let t = e[e.length - 1];
	return e.length > 0 && t[t.length - 1] < 0;
}
var A_ = {
	strict: !1,
	end: !0,
	sensitive: !1
};
function j_(e, t, n) {
	let r = Y(E_(x_(e.path), n), {
		record: e,
		parent: t,
		children: [],
		alias: []
	});
	return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function M_(e, t) {
	let n = [], r = /* @__PURE__ */ new Map();
	t = lg(A_, t);
	function i(e) {
		return r.get(e);
	}
	function a(e, n, r) {
		let i = !r, s = P_(e);
		s.aliasOf = r && r.record;
		let l = lg(t, e), u = [s];
		if ("alias" in e) {
			let t = typeof e.alias == "string" ? [e.alias] : e.alias;
			for (let e of t) u.push(P_(Y({}, s, {
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
			if (d = j_(t, n, l), r ? r.alias.push(d) : (f ||= d, f !== d && f.alias.push(d), i && e.name && !I_(d) && o(e.name)), B_(d) && c(d), s.children) {
				let e = s.children;
				for (let t = 0; t < e.length; t++) a(e[t], d, r && r.children[t]);
			}
			r ||= d;
		}
		return f ? () => {
			o(f);
		} : sg;
	}
	function o(e) {
		if (t_(e)) {
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
		let t = R_(e, n);
		n.splice(t, 0, e), e.record.name && !I_(e) && r.set(e.record.name, e);
	}
	function l(e, t) {
		let i, a = {}, o, s;
		if ("name" in e && e.name) {
			if (i = r.get(e.name), !i) throw r_(X.MATCHER_NOT_FOUND, { location: e });
			s = i.record.name, a = Y(N_(t.params, i.keys.filter((e) => !e.optional).concat(i.parent ? i.parent.keys.filter((e) => e.optional) : []).map((e) => e.name)), e.params && N_(e.params, i.keys.map((e) => e.name))), o = i.stringify(a);
		} else if (e.path != null) o = e.path, i = n.find((e) => e.re.test(o)), i && (a = i.parse(o), s = i.record.name);
		else {
			if (i = t.name ? r.get(t.name) : n.find((e) => e.re.test(t.path)), !i) throw r_(X.MATCHER_NOT_FOUND, {
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
			meta: L_(c)
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
function N_(e, t) {
	let n = {};
	for (let r of t) r in e && (n[r] = e[r]);
	return n;
}
function P_(e) {
	let t = {
		path: e.path,
		redirect: e.redirect,
		name: e.name,
		meta: e.meta || {},
		aliasOf: e.aliasOf,
		beforeEnter: e.beforeEnter,
		props: F_(e),
		children: e.children || [],
		instances: {},
		leaveGuards: /* @__PURE__ */ new Set(),
		updateGuards: /* @__PURE__ */ new Set(),
		enterCallbacks: {},
		components: "components" in e ? e.components || null : e.component && { default: e.component }
	};
	return Object.defineProperty(t, "mods", { value: {} }), t;
}
function F_(e) {
	let t = {}, n = e.props || !1;
	if ("component" in e) t.default = n;
	else for (let r in e.components) t[r] = typeof n == "object" ? n[r] : n;
	return t;
}
function I_(e) {
	for (; e;) {
		if (e.record.aliasOf) return !0;
		e = e.parent;
	}
	return !1;
}
function L_(e) {
	return e.reduce((e, t) => Y(e, t.meta), {});
}
function R_(e, t) {
	let n = 0, r = t.length;
	for (; n !== r;) {
		let i = n + r >> 1;
		O_(e, t[i]) < 0 ? r = i : n = i + 1;
	}
	let i = z_(e);
	return i && (r = t.lastIndexOf(i, r - 1)), r;
}
function z_(e) {
	let t = e;
	for (; t = t.parent;) if (B_(t) && O_(e, t) === 0) return t;
}
function B_({ record: e }) {
	return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function V_(e) {
	let t = Bn(u_), n = Bn(d_), r = K(() => {
		let n = en(e.to);
		return t.resolve(n);
	}), i = K(() => {
		let { matched: e } = r.value, { length: t } = e, i = e[t - 1], a = n.matched;
		if (!i || !a.length) return -1;
		let o = a.findIndex(Ig.bind(null, i));
		if (o > -1) return o;
		let s = K_(e[t - 2]);
		return t > 1 && K_(i) === s && a[a.length - 1].path !== s ? a.findIndex(Ig.bind(null, e[t - 2])) : o;
	}), a = K(() => i.value > -1 && G_(n.params, r.value.params)), o = K(() => i.value > -1 && i.value === n.matched.length - 1 && Lg(n.params, r.value.params));
	function s(n = {}) {
		if (W_(n)) {
			let n = t[en(e.replace) ? "replace" : "push"](en(e.to)).catch(sg);
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
function H_(e) {
	return e.length === 1 ? e[0] : e;
}
var U_ = /* @__PURE__ */ er({
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
	useLink: V_,
	setup(e, { slots: t }) {
		let n = /* @__PURE__ */ M(V_(e)), { options: r } = Bn(u_), i = K(() => ({
			[q_(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
			[q_(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
		}));
		return () => {
			let r = t.default && H_(t.default(n));
			return e.custom ? r : Na("a", {
				"aria-current": n.isExactActive ? e.ariaCurrentValue : null,
				href: n.href,
				onClick: n.navigate,
				class: i.value
			}, r);
		};
	}
});
function W_(e) {
	if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && (e.button === void 0 || e.button === 0)) {
		if (e.currentTarget && e.currentTarget.getAttribute) {
			let t = e.currentTarget.getAttribute("target");
			if (/\b_blank\b/i.test(t)) return;
		}
		return e.preventDefault && e.preventDefault(), !0;
	}
}
function G_(e, t) {
	for (let n in t) {
		let r = t[n], i = e[n];
		if (typeof r == "string") {
			if (r !== i) return !1;
		} else if (!cg(i) || i.length !== r.length || r.some((e, t) => e.valueOf() !== i[t].valueOf())) return !1;
	}
	return !0;
}
function K_(e) {
	return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
var q_ = (e, t, n) => e ?? t ?? n, J_ = /* @__PURE__ */ er({
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
		let r = Bn(f_), i = K(() => e.route || r.value), a = Bn(l_, 0), o = K(() => {
			let e = en(a), { matched: t } = i.value, n;
			for (; (n = t[e]) && !n.components;) e++;
			return e;
		}), s = K(() => i.value.matched[o.value]);
		zn(l_, K(() => o.value + 1)), zn(c_, s), zn(f_, i);
		let c = /* @__PURE__ */ P();
		return Un(() => [
			c.value,
			s.value,
			e.name
		], ([e, t, n], [r, i, a]) => {
			t && (t.instances[n] = e, i && i !== t && e && e === r && (t.leaveGuards.size || (t.leaveGuards = i.leaveGuards), t.updateGuards.size || (t.updateGuards = i.updateGuards))), !e || !t || i && Ig(t, i) && r || (t.enterCallbacks[n] || []).forEach((t) => t(e));
		}, { flush: "post" }), () => {
			let r = i.value, a = e.name, o = s.value, l = o && o.components[a];
			if (!l) return Y_(n.default, {
				Component: l,
				route: r
			});
			let u = o.props[a], d = Na(l, Y({}, u ? u === !0 ? r.params : typeof u == "function" ? u(r) : u : null, t, {
				onVnodeUnmounted: (e) => {
					e.component.isUnmounted && (o.instances[a] = null);
				},
				ref: c
			}));
			return Y_(n.default, {
				Component: d,
				route: r
			}) || d;
		};
	}
});
function Y_(e, t) {
	if (!e) return null;
	let n = e(t);
	return n.length === 1 ? n[0] : n;
}
var X_ = J_;
function Z_(e) {
	let t = M_(e.routes, e), n = e.parseQuery || a_, r = e.stringifyQuery || o_, i = e.history, a = p_(), o = p_(), s = p_(), c = /* @__PURE__ */ Zt(Vg), l = Vg;
	rg && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
	let u = og.bind(null, (e) => "" + e), d = og.bind(null, kg), f = og.bind(null, Ag);
	function p(e, n) {
		let r, i;
		return t_(e) ? (r = t.getRecordMatcher(e), i = n) : i = e, t.addRoute(i, r);
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
			let r = Ng(n, e, a.path), o = t.resolve({ path: r.path }, a), s = i.createHref(r.fullPath);
			return Y(r, o, {
				params: f(o.params),
				hash: Ag(r.hash),
				redirectedFrom: void 0,
				href: s
			});
		}
		let o;
		if (e.path != null) o = Y({}, e, { path: Ng(n, e.path, a.path).path });
		else {
			let t = Y({}, e.params);
			for (let e in t) t[e] ?? delete t[e];
			o = Y({}, e, { params: d(t) }), a.params = d(a.params);
		}
		let s = t.resolve(o, a), l = e.hash || "";
		s.params = u(f(s.params));
		let p = Pg(r, Y({}, e, {
			hash: Tg(l),
			path: s.path
		})), m = i.createHref(p);
		return Y({
			fullPath: p,
			hash: l,
			query: r === o_ ? s_(e.query) : e.query || {}
		}, s, {
			redirectedFrom: void 0,
			href: m
		});
	}
	function v(e) {
		return typeof e == "string" ? Ng(n, e, c.value.path) : Y({}, e);
	}
	function y(e, t) {
		if (l !== e) return r_(X.NAVIGATION_CANCELLED, {
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
		return !o && Fg(r, i, n) && (f = r_(X.NAVIGATION_DUPLICATED, {
			to: d,
			from: i
		}), de(i, i, !0, !1)), (f ? Promise.resolve(f) : re(d, i)).catch((e) => i_(e) ? i_(e, X.NAVIGATION_GUARD_REDIRECT) ? e : ue(e) : le(e, d, i)).then((e) => {
			if (e) {
				if (i_(e, X.NAVIGATION_GUARD_REDIRECT)) return S(Y({ replace: s }, v(e.to), {
					state: typeof e.to == "object" ? Y({}, a, e.to.state) : a,
					force: o
				}), t || d);
			} else e = C(d, i, !0, s, a);
			return ie(d, i, e), e;
		});
	}
	function te(e, t) {
		let n = y(e, t);
		return n ? Promise.reject(n) : Promise.resolve();
	}
	function ne(e) {
		let t = pe.values().next().value;
		return t && typeof t.runWithContext == "function" ? t.runWithContext(e) : e();
	}
	function re(e, t) {
		let n, [r, i, s] = g_(e, t);
		n = h_(r.reverse(), "beforeRouteLeave", e, t);
		for (let i of r) i.leaveGuards.forEach((r) => {
			n.push(m_(r, e, t));
		});
		let c = te.bind(null, e, t);
		return n.push(c), he(n).then(() => {
			n = [];
			for (let r of a.list()) n.push(m_(r, e, t));
			return n.push(c), he(n);
		}).then(() => {
			n = h_(i, "beforeRouteUpdate", e, t);
			for (let r of i) r.updateGuards.forEach((r) => {
				n.push(m_(r, e, t));
			});
			return n.push(c), he(n);
		}).then(() => {
			n = [];
			for (let r of s) if (r.beforeEnter) {
				if (cg(r.beforeEnter)) for (let i of r.beforeEnter) n.push(m_(i, e, t));
				else n.push(m_(r.beforeEnter, e, t));
			}
			return n.push(c), he(n);
		}).then(() => (e.matched.forEach((e) => e.enterCallbacks = {}), n = h_(s, "beforeRouteEnter", e, t, ne), n.push(c), he(n))).then(() => {
			n = [];
			for (let r of o.list()) n.push(m_(r, e, t));
			return n.push(c), he(n);
		}).catch((e) => i_(e, X.NAVIGATION_CANCELLED) ? e : Promise.reject(e));
	}
	function ie(e, t, n) {
		s.list().forEach((r) => ne(() => r(e, t, n)));
	}
	function C(e, t, n, r, a) {
		let o = y(e, t);
		if (o) return o;
		let s = t === Vg, l = rg ? history.state : {};
		n && (r || s ? i.replace(e.fullPath, Y({ scroll: s && l && l.scroll }, a)) : i.push(e.fullPath, a)), c.value = e, de(e, t, n, s), ue();
	}
	let ae;
	function oe() {
		ae ||= i.listen((e, t, n) => {
			if (!me.listening) return;
			let r = _(e), a = ee(r, me.currentRoute.value);
			if (a) {
				S(Y(a, {
					replace: !0,
					force: !0
				}), r).catch(sg);
				return;
			}
			l = r;
			let o = c.value;
			rg && Qg(Xg(o.fullPath, n.delta), Jg()), re(r, o).catch((e) => i_(e, X.NAVIGATION_ABORTED | X.NAVIGATION_CANCELLED) ? e : i_(e, X.NAVIGATION_GUARD_REDIRECT) ? (S(Y(v(e.to), { force: !0 }), r).then((e) => {
				i_(e, X.NAVIGATION_ABORTED | X.NAVIGATION_DUPLICATED) && !n.delta && n.type === Hg.pop && i.go(-1, !1);
			}).catch(sg), Promise.reject()) : (n.delta && i.go(-n.delta, !1), le(e, r, o))).then((e) => {
				e ||= C(r, o, !1), e && (n.delta && !i_(e, X.NAVIGATION_CANCELLED) ? i.go(-n.delta, !1) : n.type === Hg.pop && i_(e, X.NAVIGATION_ABORTED | X.NAVIGATION_DUPLICATED) && i.go(-1, !1)), ie(r, o, e);
			}).catch(sg);
		});
	}
	let se = p_(), ce = p_(), w;
	function le(e, t, n) {
		ue(e);
		let r = ce.list();
		return r.length ? r.forEach((r) => r(e, t, n)) : console.error(e), Promise.reject(e);
	}
	function T() {
		return w && c.value !== Vg ? Promise.resolve() : new Promise((e, t) => {
			se.add([e, t]);
		});
	}
	function ue(e) {
		return w || (w = !e, oe(), se.list().forEach(([t, n]) => e ? n(e) : t()), se.reset()), e;
	}
	function de(t, n, r, i) {
		let { scrollBehavior: a } = e;
		if (!rg || !a) return Promise.resolve();
		let o = !r && $g(Xg(t.fullPath, 0)) || (i || !r) && history.state && history.state.scroll || null;
		return Cn().then(() => a(t, n, o)).then((e) => e && Yg(e)).catch((e) => le(e, t, n));
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
		onError: ce.add,
		isReady: T,
		install(e) {
			e.component("RouterLink", U_), e.component("RouterView", X_), e.config.globalProperties.$router = me, Object.defineProperty(e.config.globalProperties, "$route", {
				enumerable: !0,
				get: () => en(c)
			}), rg && !E && c.value === Vg && (E = !0, b(i.location).catch((e) => {}));
			let t = {};
			for (let e in Vg) Object.defineProperty(t, e, {
				get: () => c.value[e],
				enumerable: !0
			});
			e.provide(u_, me), e.provide(d_, /* @__PURE__ */ Bt(t)), e.provide(f_, c);
			let n = e.unmount;
			pe.add(e), e.unmount = function() {
				pe.delete(e), pe.size < 1 && (l = Vg, ae && ae(), ae = null, c.value = Vg, E = !1, w = !1), n();
			};
		}
	};
	function he(e) {
		return e.reduce((e, t) => e.then(() => ne(t)), Promise.resolve());
	}
	return me;
}
function Q_() {
	return Bn(u_);
}
function $_(e) {
	return Bn(d_);
}
var ev = Z_({
	history: __(),
	routes: [{
		path: "/:view(.*)*",
		name: "legacy-view",
		component: { render: () => null }
	}]
}), tv = /* @__PURE__ */ new Set([
	"projects",
	"saved",
	"myideas",
	"myprompts",
	"events",
	"tracks",
	"artists"
]);
function nv(e) {
	let t = typeof e == "string" && e ? e : "home";
	return t === "detail" ? "/catalog/detail" : tv.has(t) ? "/account/" + t : "/" + encodeURIComponent(t);
}
function rv(e) {
	if (e === "/catalog/detail") return "catalog";
	if (e.startsWith("/account/")) return "account";
	try {
		return decodeURIComponent(e.slice(1)) || "home";
	} catch {
		return "home";
	}
}
var iv = null, av = Promise.resolve(), ov = "replace", sv = 0, cv = [], lv = [], Q = -1, uv = /* @__PURE__ */ new Set([
	"overview",
	"ideas",
	"prompts",
	"artists"
]);
function dv(e) {
	return e?.kind !== "genre" || typeof e.id != "string" || !/^[a-z0-9-]{1,100}$/.test(e.id) || !uv.has(e.tab) ? null : Object.freeze({
		kind: "genre",
		id: e.id,
		tab: e.tab
	});
}
function fv(e, t, n = null) {
	let r = dv(n);
	if (Q < 0) cv = [e], lv = [r], Q = 0;
	else if (t === "push") cv = cv.slice(0, Q + 1), lv = lv.slice(0, Q + 1), cv.push(e), lv.push(r), Q = cv.length - 1;
	else {
		let t = cv[Q] === e ? lv[Q] : null;
		cv[Q] = e, lv[Q] = r || t || null;
	}
}
function pv(e) {
	let t = e === "back" ? -1 : +(e === "forward"), n = Q + t;
	return t && n >= 0 && n < cv.length ? Object.freeze({
		path: cv[n],
		context: lv[n] || null,
		index: n,
		offset: t
	}) : null;
}
function mv(e) {
	return pv(e);
}
function hv(e) {
	if (typeof e != "string" || !/^\/[a-z][a-z0-9-]*$/i.test(e)) return null;
	try {
		return decodeURIComponent(e.slice(1));
	} catch {
		return null;
	}
}
function gv(e, { historyMode: t = "replace", context: n = null } = {}) {
	let r = nv(e), i = dv(n);
	if (r === iv) return i && (av = av.then(() => {
		ev.currentRoute.value.path === r && Q >= 0 && cv[Q] === r && (lv[Q] = i);
	})), av;
	iv = r;
	let a = t === "push" ? "push" : "replace";
	return av = av.then(async () => {
		ev.currentRoute.value.path === r ? i && Q >= 0 && (lv[Q] = i) : await ev[a](r) || (fv(r, a, i), ov = a, a === "push" && !i && sv++);
	}).catch((e) => {
		console.warn("[SUNOBOOM] Vue Router memory navigation failed; legacy routing remains active.", e);
	}), av;
}
function _v() {
	return av;
}
function vv(e) {
	let t = av.then(() => {
		let t = pv(e);
		return t ? new Promise((n) => {
			let r = !1, i = () => {}, a;
			function o(o) {
				r || (r = !0, i(), clearTimeout(a), o && (Q = t.index, iv = t.path, ov = e), n(o));
			}
			i = ev.afterEach((e, n, r) => o(!r && e.path === t.path)), a = setTimeout(() => o(!1), 2500), ev.go(t.offset);
		}) : !1;
	}).catch((e) => (console.warn("[SUNOBOOM] Vue memory history traversal failed; legacy navigation retained.", e), !1));
	return av = t.then(() => void 0), t;
}
function yv() {
	let e = ev.currentRoute.value;
	return Object.freeze({
		path: e.path,
		name: e.name,
		active: rv(e.path),
		transition: ov,
		menuPushes: sv,
		canGoBack: Q > 0,
		canGoForward: Q >= 0 && Q < cv.length - 1,
		historyDepth: cv.length,
		historyPosition: Q,
		context: lv[Q] || null
	});
}
// src/vue/VueFeatureHost.vue
var bv = {
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
		return (t, n) => (z(), Qi(Tr(e.component), _e(ia(e.componentProps)), null, 16));
	}
}, xv = /* @__PURE__ */ new Set([
	"projects",
	"saved",
	"myideas",
	"myprompts",
	"events",
	"tracks",
	"artists"
]);
function Sv(e) {
	return e === "detail" ? "catalog" : xv.has(e) ? "account" : e;
}
function Cv(e) {
	let t = Sv(e?.active), n = /* @__PURE__ */ new Set(), r = !1, i = [];
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
var wv = /* @__PURE__ */ Zt(Object.freeze({
	route: "home",
	active: "home",
	revision: 0
})), Tv = /* @__PURE__ */ Vt(wv);
function Ev(e, { historyMode: t = "replace", context: n = null } = {}) {
	let r = typeof e == "string" && e ? e : "home";
	if (gv(r, {
		historyMode: t,
		context: n
	}), r === wv.value.route) return wv.value;
	let i = Object.freeze({
		route: r,
		active: Sv(r),
		revision: wv.value.revision + 1
	});
	return wv.value = i, i;
}
// src/vue/navigation/NavigationMenu.vue
var Dv = [
	"data-nav",
	"data-vue-router-path",
	"aria-current",
	"aria-label",
	"title",
	"onClick"
], Ov = ["innerHTML"], kv = { class: "sb-vue-nav-label" }, Av = {
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
		let t = $_(), n = Q_(), r = e;
		function i(e) {
			r.onNavigate(e, n);
		}
		let a = (e) => {
			let n = Tv.value;
			return (t.path === nv(n.route) ? rv(t.path) : n.active) === e;
		};
		return (n, r) => (z(!0), B(R, null, L(e.items, (n) => (z(), B("button", {
			key: n.id,
			type: "button",
			class: D(e.mobile ? a(n.id) ? "active" : "" : ["nav-button", { active: a(n.id) }]),
			"data-nav": n.id,
			"data-vue-router-path": en(t).path,
			"aria-current": a(n.id) ? "page" : void 0,
			"aria-label": e.mobile ? n.label : void 0,
			title: e.mobile ? n.label : void 0,
			onClick: (e) => i(n.id)
		}, [V("span", {
			class: "sb-vue-nav-icon",
			"aria-hidden": "true",
			innerHTML: n.iconHtml
		}, null, 8, Ov), V("span", kv, O(e.mobile ? n.shortLabel : n.label), 1)], 10, Dv))), 128));
	}
}, jv = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, Mv = {
	class: "sb-vue-history-toolbar",
	role: "group",
	"aria-label": "История разделов SUNOBOOM"
}, Nv = ["disabled"], Pv = ["disabled"], Fv = /*#__PURE__*/ jv({
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
		let t = e, n = $_(), r = /* @__PURE__ */ P(!1), i = K(() => (n.path, Tv.value.revision, {
			back: !r.value && t.canRestore("back"),
			forward: !r.value && t.canRestore("forward")
		}));
		async function a(e) {
			if (i.value[e]) {
				r.value = !0;
				try {
					await t.onRestore(e);
				} finally {
					r.value = !1;
				}
			}
		}
		return (e, t) => (z(), B("div", Mv, [
			t[4] ||= V("span", { class: "sb-vue-history-caption" }, "История разделов", -1),
			V("button", {
				type: "button",
				class: "sb-vue-history-button",
				"data-sb-history-back": "",
				disabled: !i.value.back,
				"aria-label": "Назад по разделам",
				title: "К предыдущему разделу",
				onClick: t[0] ||= (e) => a("back")
			}, [...t[2] ||= [V("svg", {
				viewBox: "0 0 24 24",
				width: "16",
				height: "16",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				"aria-hidden": "true"
			}, [V("path", { d: "m15 18-6-6 6-6" })], -1)]], 8, Nv),
			V("button", {
				type: "button",
				class: "sb-vue-history-button",
				"data-sb-history-forward": "",
				disabled: !i.value.forward,
				"aria-label": "Вперёд по разделам",
				title: "К следующему разделу",
				onClick: t[1] ||= (e) => a("forward")
			}, [...t[3] ||= [V("svg", {
				viewBox: "0 0 24 24",
				width: "16",
				height: "16",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				"aria-hidden": "true"
			}, [V("path", { d: "m9 18 6-6-6-6" })], -1)]], 8, Pv)
		]));
	}
}, [["__scopeId", "data-v-0c97174c"]]);
// src/vue/navigation/navigation-dispatch.js
function Iv(e, { router: t, legacyApi: n, syncRoute: r = Ev } = {}) {
	if (typeof e != "string" || !e || !n || typeof n.snapshot != "function" || typeof n.navigate != "function") return !1;
	let i = n.snapshot()?.items;
	if (!Array.isArray(i) || !i.some((t) => t?.id === e)) return !1;
	let a = !1;
	try {
		let n = nv(e);
		a = !!t?.resolve && t.resolve(n)?.path === n, a || console.warn("[SUNOBOOM] Vue route could not resolve; using legacy navigation:", e);
	} catch (e) {
		console.warn("[SUNOBOOM] Vue route resolution failed; using legacy navigation:", e);
	}
	n.navigate(e);
	let o = n.snapshot()?.active;
	return r(o, { historyMode: a && o === e ? "push" : "replace" }), !0;
}
// src/vue/navigation/legacy-history-restore.js
function Lv(e, t) {
	if (!e || typeof t?.snapshot != "function") return null;
	let n = t.snapshot(), r = hv(e.path);
	if (r && n?.items?.some((e) => e?.id === r)) return {
		kind: "menu",
		id: r
	};
	let i = e.context;
	return e.path === "/catalog/detail" && i?.kind === "genre" && typeof t.canRestoreGenre == "function" && t.canRestoreGenre(i.id, i.tab) && typeof t.restoreGenre == "function" ? {
		kind: "genre",
		id: i.id,
		tab: i.tab
	} : null;
}
var Rv = !1;
function zv(e, { legacyApi: t } = {}) {
	if (Rv || !["back", "forward"].includes(e) || typeof t?.snapshot != "function") return !1;
	let n = mv(e), r = t.snapshot();
	return !!Lv(n, t) && yv().path === nv(r?.active);
}
async function Bv(e, { legacyApi: t, syncRoute: n = Ev } = {}) {
	if (Rv || !["back", "forward"].includes(e) || !t || typeof t.snapshot != "function" || typeof t.navigate != "function") return !1;
	Rv = !0;
	try {
		await _v();
		let r = Lv(mv(e), t), i = t.snapshot();
		if (!r || yv().path !== nv(i?.active) || !await vv(e)) return !1;
		if (r.kind === "genre") {
			if (t.restoreGenre(r.id, r.tab) !== !0) return n(t.snapshot()?.active), !1;
		} else if (r.id === "catalog" && i.active === "detail" && typeof t.returnToAcademy == "function") {
			if (t.returnToAcademy() !== !0) return n(t.snapshot()?.active), !1;
		} else t.navigate(r.id);
		let a = t.snapshot()?.active;
		return n(a), a === (r.kind === "genre" ? "detail" : r.id);
	} catch (e) {
		return console.warn("[SUNOBOOM] Vue history restore skipped; legacy navigation remains active.", e), !1;
	} finally {
		Rv = !1;
	}
}
// src/vue/navigation/legacyBridge.js
var Vv = [{
	key: "sidebar",
	selector: "[data-sb-vue-sidebar]",
	mobile: !1
}, {
	key: "mobile",
	selector: "[data-sb-vue-mobile]",
	mobile: !0
}];
function Hv({ mountVueFeature: e, unmountVueFeature: t }) {
	let n = window.SUNOBOOM_LEGACY_NAV, r = document.getElementById("app");
	if (!n || !r || typeof n.snapshot != "function") return () => {};
	let i = /* @__PURE__ */ new Map(), a = !1;
	window.SUNOBOOM_VUE_ROUTE = Object.freeze({
		snapshot: () => Tv.value,
		routerSnapshot: () => yv(),
		back: () => Bv("back", { legacyApi: n }),
		forward: () => Bv("forward", { legacyApi: n }),
		recordGenre: (e, t, r = "push") => {
			let i = n.snapshot();
			return i.active !== "detail" || i.detail?.id !== e || i.detail?.tab !== t || !n.canRestoreGenre?.(e, t) ? !1 : (Ev("detail", {
				historyMode: r,
				context: {
					kind: "genre",
					id: e,
					tab: t
				}
			}), !0);
		}
	});
	function o() {
		if (a) return;
		let t = n.snapshot();
		Ev(t.active);
		let o = Cv(t), s = JSON.stringify(o.map(({ active: e, ...t }) => t)), c = r.querySelector("[data-sb-vue-history]"), l = i.get("history");
		if (!c) l?.unmount(), i.delete("history");
		else if (l?.target !== c) {
			l?.unmount();
			let t = e(c, Fv, {
				canRestore: (e) => zv(e, { legacyApi: n }),
				onRestore: (e) => Bv(e, { legacyApi: n })
			}, { vueRouter: !0 });
			t && i.set("history", {
				target: c,
				unmount: t
			});
		}
		for (let { key: t, selector: a, mobile: c } of Vv) {
			let l = r.querySelector(a), u = i.get(t);
			if (!l) {
				u?.unmount(), i.delete(t);
				continue;
			}
			if (u?.target === l && u.signature === s) continue;
			u?.unmount();
			let d = e(l, Av, {
				items: o,
				mobile: c,
				onNavigate: (e, t) => Iv(e, {
					router: t,
					legacyApi: n
				})
			}, { vueRouter: !0 });
			d && i.set(t, {
				target: l,
				signature: s,
				unmount: d
			});
		}
	}
	let s = new MutationObserver(o);
	return Ev(n.snapshot().active), _v().then(() => {
		a || (s.observe(r, { childList: !0 }), o());
	}), function() {
		if (!a) {
			a = !0, s.disconnect();
			for (let e of i.values()) e.unmount();
			i.clear();
		}
	};
}
// src/vue/academy/GenreCards.vue
var Uv = ["data-id"], Wv = { class: "genre-content" }, Gv = { class: "kicker" }, Kv = { class: "foot" }, qv = {
	__name: "GenreCards",
	props: { genres: {
		type: Array,
		required: !0
	} },
	setup(e) {
		return (t, n) => (z(!0), B(R, null, L(e.genres, (e) => (z(), B("button", {
			key: e.id,
			type: "button",
			class: "genre-card",
			style: E({ "--accent": e.color }),
			"data-action": "genre",
			"data-id": e.id
		}, [n[1] ||= V("div", {
			class: "art",
			"aria-hidden": "true"
		}, null, -1), V("div", Wv, [V("div", null, [
			V("div", Gv, O(e.family) + " · " + O(e.bpm[0]) + "–" + O(e.bpm[1]) + " BPM", 1),
			V("h3", null, O(e.name), 1),
			V("p", null, O(e.tagline), 1)
		]), V("div", Kv, [V("span", null, O(e.era), 1), n[0] ||= V("span", { style: { color: "#ffacd9" } }, "Открыть →", -1)])])], 12, Uv))), 128));
	}
}, Jv = { class: "genre-family-toolbar" }, Yv = { class: "search-box" }, Xv = ["innerHTML"], Zv = { class: "hint" }, Qv = { class: "genre-family-summary" }, $v = { id: "catalog-count" }, ey = {
	class: "hint",
	id: "sb-academy-search-hint"
}, ty = {
	id: "catalog-cards",
	class: "genre-families"
}, ny = [
	"data-family",
	"open",
	"onToggle"
], ry = {
	class: "genre-family-icon",
	"aria-hidden": "true"
}, iy = { class: "genre-family-heading" }, ay = { class: "genre-family-right" }, oy = { class: "genre-family-count" }, sy = { class: "genre-family-body" }, cy = {
	key: 0,
	class: "sb-sacred-index"
}, ly = {
	key: 0,
	class: "sb-sacred-overview"
}, uy = { class: "genre-grid" }, dy = { class: "sb-sacred-religions" }, fy = [
	"data-sb-religion",
	"open",
	"onToggle"
], py = { class: "sb-sacred-religion-header" }, my = {
	class: "sb-sacred-religion-icon",
	"aria-hidden": "true"
}, hy = { class: "sb-sacred-religion-label" }, gy = { class: "sb-sacred-count" }, _y = { class: "sb-sacred-religion-content" }, vy = [
	"data-sb-branch",
	"open",
	"onToggle"
], yy = { class: "sb-sacred-branch-header" }, by = { class: "sb-sacred-branch-label" }, xy = { class: "sb-sacred-count" }, Sy = { class: "sb-sacred-branch-content" }, Cy = { class: "genre-grid" }, wy = {
	key: 1,
	class: "genre-grid"
}, Ty = {
	key: 1,
	class: "genre-family-empty"
}, Ey = {
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
		let t = e, n = /* @__PURE__ */ P(t.snapshot.query || ""), r = /* @__PURE__ */ M({
			family: { ...t.snapshot.expanded?.family || {} },
			religion: { ...t.snapshot.expanded?.religion || {} },
			branch: { ...t.snapshot.expanded?.branch || {} }
		}), i = K(() => t.search(n.value)), a = K(() => !!n.value.trim()), o = K(() => {
			let e = i.value.ids == null ? null : new Set(i.value.ids);
			return (t.snapshot.families || []).map((t) => ({
				...t,
				genres: t.genres.filter((t) => !e || e.has(t.id))
			})).filter((e) => e.genres.length);
		}), s = K(() => o.value.reduce((e, t) => e + t.genres.length, 0)), c = K(() => a.value ? {
			name: "По названиям жанров",
			family: "По направлениям",
			artist: "По исполнителям",
			description: "По описаниям и звучанию"
		}[i.value.mode] || "" : "Поиск работает при вводе"), l = K(() => o.value.find((e) => e.name === "Религиозная музыка")), u = K(() => l.value?.genres.find((e) => e.id === "sacred-music")), d = K(() => {
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
		return (t, r) => (z(), B(R, null, [
			V("div", Jv, [V("label", Yv, [V("span", {
				innerHTML: e.searchIcon,
				"aria-hidden": "true"
			}, null, 8, Xv), F(V("input", {
				id: "genre-search",
				"onUpdate:modelValue": r[0] ||= (e) => n.value = e,
				type: "search",
				enterkeyhint: "search",
				autocapitalize: "off",
				spellcheck: "false",
				"aria-label": "Поиск жанров",
				placeholder: "Поиск жанра, поджанра или исполнителя…",
				autocomplete: "off"
			}, null, 512), [[q, n.value]])]), V("span", Zv, O(e.snapshot.families.length) + " разделов · " + O(e.snapshot.families.reduce((e, t) => e + t.genres.length, 0)) + " жанров", 1)]),
			V("div", Qv, [V("h2", $v, O(a.value ? "Найдено жанров" : "Музыкальные жанры") + " · " + O(s.value), 1), V("span", ey, O(c.value), 1)]),
			V("div", ty, [o.value.length ? (z(!0), B(R, { key: 0 }, L(o.value, (e) => (z(), B("details", {
				key: e.name,
				class: "genre-family",
				"data-family": e.name,
				style: E({ "--family-accent": e.meta.accent }),
				open: f("family", e.name),
				onToggle: (t) => p("family", e.name, t)
			}, [V("summary", null, [
				V("span", ry, O(e.meta.icon), 1),
				V("span", iy, [V("strong", null, O(e.name), 1), V("small", null, O(e.meta.desc), 1)]),
				V("span", ay, [V("span", oy, O(e.genres.length) + " " + O(m(e.genres.length)), 1), r[1] ||= V("svg", {
					class: "genre-family-chevron",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2",
					"aria-hidden": "true"
				}, [V("path", { d: "m5 9 7 7 7-7" })], -1)])
			]), V("div", sy, [e.name === "Религиозная музыка" ? (z(), B("div", cy, [
				r[5] ||= V("div", { class: "sb-sacred-intro" }, [
					V("span", { class: "sb-sacred-eyebrow" }, "МУЗЫКА МИРОВЫХ РЕЛИГИЙ"),
					V("h3", null, "Религии и музыкальные традиции"),
					V("p", null, "Открой религию, затем её направление или течение. Здесь представлены музыкальные традиции — их границы не всегда совпадают с конфессиональными.")
				], -1),
				u.value ? (z(), B("div", ly, [r[2] ||= V("div", { class: "sb-sacred-overview-label" }, "📖 Обзор раздела", -1), V("div", uy, [H(qv, { genres: [u.value] }, null, 8, ["genres"])])])) : W("", !0),
				V("div", dy, [(z(!0), B(R, null, L(d.value, (e) => (z(), B("details", {
					key: e.id,
					class: "sb-sacred-religion",
					"data-sb-religion": e.id,
					open: f("religion", e.id),
					onToggle: (t) => p("religion", e.id, t)
				}, [V("summary", py, [
					V("span", my, O(e.icon), 1),
					V("span", hy, [V("strong", null, O(e.name), 1), V("small", null, O(e.description), 1)]),
					V("span", gy, O(e.count), 1),
					r[3] ||= V("span", {
						class: "sb-sacred-chevron",
						"aria-hidden": "true"
					}, "⌄", -1)
				]), V("div", _y, [(z(!0), B(R, null, L(e.branches, (e) => (z(), B("details", {
					key: e.id,
					class: "sb-sacred-branch",
					"data-sb-branch": e.id,
					open: f("branch", e.id),
					onToggle: (t) => p("branch", e.id, t)
				}, [V("summary", yy, [
					V("span", by, [V("strong", null, O(e.name), 1), V("small", null, O(e.description), 1)]),
					V("span", xy, O(e.genres.length) + " " + O(h(e.genres.length)), 1),
					r[4] ||= V("span", {
						class: "sb-sacred-chevron",
						"aria-hidden": "true"
					}, "⌄", -1)
				]), V("div", Sy, [V("div", Cy, [H(qv, { genres: e.genres }, null, 8, ["genres"])])])], 40, vy))), 128))])], 40, fy))), 128))])
			])) : (z(), B("div", wy, [H(qv, { genres: e.genres }, null, 8, ["genres"])]))])], 44, ny))), 128)) : (z(), B("div", Ty, "Ничего не найдено. Попробуй другой запрос."))])
		], 64));
	}
};
// src/vue/academy/legacyAcademyBridge.js
function Dy({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ACADEMY, n = document.getElementById("app");
	if (!t || !n || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-academy-root");
		if (r?.target === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o?.families?.length) return;
		let s = e(a, Ey, {
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
var Oy = {
	class: "gb-grid",
	"data-sb-vue-overview": ""
}, ky = { class: "gb-column" }, Ay = { class: "gb-panel pink" }, jy = { class: "gb-unit" }, My = { class: "gb-unit" }, Ny = { class: "gb-unit" }, Py = { class: "gb-panel" }, Fy = ["innerHTML"], Iy = { class: "gb-column" }, Ly = { class: "gb-panel blue" }, Ry = { style: {
	"font-size": "26px",
	"font-weight": "900",
	color: "#ffe2b0"
} }, zy = { class: "gb-artists" }, By = { class: "gb-panel pink" }, Vy = ["data-id"], Hy = ["innerHTML"], Uy = {
	__name: "GenreOverview",
	props: { genre: {
		type: Object,
		required: !0
	} },
	emits: ["select-tab"],
	setup(e) {
		return (t, n) => (z(), B("div", Oy, [V("div", ky, [V("section", Ay, [
			n[7] ||= V("div", { class: "gb-sup" }, "01 / ЗНАКОМСТВО С ЖАНРОМ", -1),
			n[8] ||= V("h2", null, "Характер и звучание", -1),
			V("p", null, [V("strong", null, O(e.genre.tagline), 1)]),
			V("p", null, O(e.genre.description), 1),
			V("div", jy, [n[2] ||= V("b", null, "🎸", -1), V("div", null, [n[1] ||= V("strong", null, "Инструменты", -1), V("span", null, O(e.genre.instruments) + ".", 1)])]),
			V("div", My, [n[4] ||= V("b", null, "🎛️", -1), V("div", null, [n[3] ||= V("strong", null, "Саунд", -1), V("span", null, O(e.genre.style) + ".", 1)])]),
			V("div", Ny, [n[6] ||= V("b", null, "✍️", -1), V("div", null, [n[5] ||= V("strong", null, "Тематика песен", -1), V("span", null, O(e.genre.themes) + ".", 1)])])
		]), V("section", Py, [
			n[10] ||= V("div", { class: "gb-sup" }, "03 / ИДЕИ ДЛЯ СТАРТА", -1),
			n[11] ||= V("h2", null, "Что можно спеть", -1),
			(z(!0), B(R, null, L(e.genre.ideas, (e, t) => (z(), B("div", {
				key: t,
				class: "gb-idea"
			}, [V("strong", null, O(e.title), 1), V("p", null, O(e.pitch), 1)]))), 128)),
			V("button", {
				type: "button",
				class: "btn ghost small",
				onClick: n[0] ||= (e) => t.$emit("select-tab", "ideas")
			}, [n[9] ||= U(" Все идеи ", -1), V("span", {
				"aria-hidden": "true",
				innerHTML: e.genre.icons.arrow
			}, null, 8, Fy)])
		])]), V("div", Iy, [V("section", Ly, [
			n[12] ||= V("div", { class: "gb-sup" }, "02 / ПАСПОРТ НАПРАВЛЕНИЯ", -1),
			n[13] ||= V("h2", null, "История и сцена", -1),
			n[14] ||= V("div", { class: "info-label" }, "Эпоха", -1),
			V("p", null, O(e.genre.era), 1),
			n[15] ||= V("div", { class: "info-label" }, "Диапазон темпа", -1),
			V("p", Ry, O(e.genre.bpm[0]) + "–" + O(e.genre.bpm[1]) + " BPM", 1),
			n[16] ||= V("div", { class: "info-label" }, "Исполнители для знакомства", -1),
			V("div", zy, [(z(!0), B(R, null, L(e.genre.artists, (e) => (z(), B("span", { key: e }, O(e), 1))), 128))])
		]), V("section", By, [n[18] ||= oa("<div class=\"gb-sup\">04 / ТВОЯ МУЗЫКА</div><h2>Преврати знания в трек</h2><p>Выбери вокал, настроение и темп, затем создай промпт и структуру песни в Suno Studio.</p><div class=\"gb-unit\"><b>🎤</b><div><strong>Вокал</strong><span>Мужской, женский или дуэт; можно использовать русский язык.</span></div></div><div class=\"gb-unit\"><b>⚡</b><div><strong>Динамика</strong><span>Настрой энергию и характер припева под историю.</span></div></div>", 5), V("button", {
			type: "button",
			class: "btn primary small",
			"data-action": "use-genre",
			"data-id": e.genre.id
		}, [V("span", {
			innerHTML: e.genre.icons.studio,
			"aria-hidden": "true"
		}, null, 8, Hy), n[17] ||= U(" Открыть студию ", -1)], 8, Vy)])])]));
	}
}, Wy = {
	key: 0,
	id: "sb-artist-expanded",
	class: "ahx-wrap",
	"data-sb-vue-artists": ""
}, Gy = { class: "ahx-intro" }, Ky = { class: "gb-eyebrow" }, qy = {
	class: "ahx-toolbar",
	role: "group",
	"aria-label": "Музыкальные сцены"
}, Jy = ["aria-pressed"], Yy = ["aria-pressed"], Xy = { class: "ahx-filters" }, Zy = { class: "ahx-search" }, Qy = ["innerHTML"], $y = {
	class: "ahx-filter-buttons",
	role: "group",
	"aria-label": "Фильтр исполнителей"
}, eb = [
	"data-vue-artist-filter",
	"aria-pressed",
	"onClick"
], tb = {
	id: "ahx-count",
	class: "ahx-count",
	"aria-live": "polite"
}, nb = { class: "ahx-section-head" }, rb = { class: "ahx-eyebrow" }, ib = { class: "ahx-num" }, ab = { class: "ahx-grid" }, ob = ["data-ahx-group"], sb = { class: "ahx-card-top" }, cb = {
	class: "ahx-avatar",
	"aria-hidden": "true"
}, lb = { class: "ahx-title" }, ub = { class: "ahx-era" }, db = {
	key: 0,
	class: "ahx-track"
}, fb = {
	id: "ahx-no-results",
	class: "ahx-no-results"
}, pb = {
	key: 1,
	class: "ahx-empty"
}, mb = {
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
		let t = e, n = /* @__PURE__ */ P(t.catalog.initialScene()), r = /* @__PURE__ */ P(""), i = /* @__PURE__ */ P("all"), a = K(() => t.catalog.getScene(t.genre.id, n.value)), o = K(() => (a.value?.groups || []).map((e) => ({
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
			(e === "ru" || e === "world") && (n.value = e, t.catalog.setScene(e), r.value = "", i.value = "all", await Cn(), t.enhanceProfiles?.());
		}
		return I(() => t.enhanceProfiles?.()), gr(() => t.enhanceProfiles?.()), (t, u) => a.value ? (z(), B("div", Wy, [
			V("div", Gy, [
				V("div", Ky, "АКАДЕМИЯ SUNOBOOM · " + O(e.genre.name), 1),
				u[4] ||= V("h2", null, "Исполнители и композиторы", -1),
				V("p", null, O(a.value.description), 1)
			]),
			V("div", qy, [V("button", {
				type: "button",
				"data-vue-artist-scene": "world",
				"aria-pressed": n.value === "world",
				class: D({ on: n.value === "world" }),
				onClick: u[0] ||= (e) => l("world")
			}, [u[5] ||= U(" 🌍 Мировая сцена ", -1), V("span", null, O(a.value.worldCount), 1)], 10, Jy), V("button", {
				type: "button",
				"data-vue-artist-scene": "ru",
				"aria-pressed": n.value === "ru",
				class: D({ on: n.value === "ru" }),
				onClick: u[1] ||= (e) => l("ru")
			}, [u[6] ||= U(" 🎤 Русскоязычные ", -1), V("span", null, O(a.value.ruCount), 1)], 10, Yy)]),
			c.value ? (z(), B(R, { key: 0 }, [
				V("div", Xy, [V("label", Zy, [V("span", {
					"aria-hidden": "true",
					innerHTML: e.genre.icons.overview
				}, null, 8, Qy), F(V("input", {
					"onUpdate:modelValue": u[2] ||= (e) => r.value = e,
					type: "search",
					"data-vue-artist-search": "",
					placeholder: "Найти исполнителя или произведение…",
					"aria-label": "Поиск по исполнителям"
				}, null, 512), [[q, r.value]])]), V("div", $y, [(z(), B(R, null, L([
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
				], (e) => V("button", {
					key: e.id,
					type: "button",
					"data-vue-artist-filter": e.id,
					"aria-pressed": i.value === e.id,
					onClick: (t) => i.value = e.id
				}, O(e.label), 9, eb)), 64))])]),
				V("p", tb, "Показано " + O(s.value) + " из " + O(c.value) + " исполнителей.", 1),
				(z(!0), B(R, null, L(o.value, (e) => F((z(), B("section", {
					key: e.index,
					class: "ahx-section",
					"data-ahx-section": ""
				}, [V("div", nb, [V("div", null, [V("span", rb, "0" + O(e.index + 1) + " / ИСПОЛНИТЕЛИ", 1), V("h3", null, O(e.index ? "Современная сцена и продолжатели" : "Классика и предшественники"), 1)]), V("span", ib, O(e.artists.length), 1)]), V("div", ab, [(z(!0), B(R, null, L(e.artists, (e) => (z(), B("article", {
					key: e.key,
					class: "ahx-card",
					"data-ahx-group": e.group
				}, [
					V("div", sb, [V("span", cb, O(e.initials), 1), V("div", lb, [V("h4", null, O(e.name), 1), V("span", ub, O(e.period || "Музыкальная сцена"), 1)])]),
					V("span", { class: D(["ahx-role", { "ahx-role-neighbor": e.group === "adjacent" }]) }, O(e.label), 3),
					V("p", null, O(e.bio || "Музыкальное направление и характерный творческий почерк."), 1),
					e.track ? (z(), B("div", db, [u[7] ||= V("small", null, "Ориентир для прослушивания", -1), V("strong", null, "♫ " + O(e.track), 1)])) : W("", !0)
				], 8, ob))), 128))])])), [[qa, e.artists.length]])), 128)),
				F(V("div", fb, " По заданному поиску исполнители не найдены. Попробуй другой запрос или выбери «Все». ", 512), [[qa, s.value === 0]])
			], 64)) : (z(), B("div", pb, [
				u[8] ||= V("strong", null, "Русскоязычная подборка ещё уточняется", -1),
				u[9] ||= V("p", null, "Для этого узкого направления пока нет достаточно подтверждённых примеров. Мы не будем подставлять артистов из других жанров без пояснения.", -1),
				V("button", {
					class: "btn ghost",
					type: "button",
					onClick: u[3] ||= (e) => l("world")
				}, "Посмотреть мировую сцену")
			])),
			u[10] ||= V("p", { class: "ahx-footnote" }, "В подборках могут встречаться близкие стили, кино- и игровая музыка, инструментальные коллективы. Их связь с жанром поясняется в карточке. Указанные произведения — ориентиры для знакомства, а не ссылки на конкретные релизы.", -1)
		])) : W("", !0);
	}
}, hb = {
	class: "idea-grid",
	"data-sb-vue-ideas": ""
}, gb = { class: "idea-badge" }, _b = { class: "actions" }, vb = ["data-id", "data-i"], yb = ["innerHTML"], bb = [
	"data-id",
	"data-i",
	"aria-pressed"
], xb = ["innerHTML"], Sb = {
	__name: "GenreIdeas",
	props: { genre: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (z(), B("div", hb, [(z(!0), B(R, null, L(e.genre.allIdeas, (t) => (z(), B("div", {
			key: t.index,
			class: "idea"
		}, [
			V("div", gb, O(e.genre.name) + " · " + O(t.mood), 1),
			V("h3", null, O(t.title), 1),
			V("p", null, O(t.pitch), 1),
			V("div", _b, [V("button", {
				type: "button",
				class: "btn primary small",
				"data-action": "idea-use",
				"data-id": e.genre.id,
				"data-i": t.index
			}, [V("span", {
				"aria-hidden": "true",
				innerHTML: e.genre.icons.studio
			}, null, 8, yb), n[0] ||= U(" В студию ", -1)], 8, vb), V("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "idea-save",
				"data-id": e.genre.id,
				"data-i": t.index,
				"aria-pressed": t.saved ? "true" : "false"
			}, [V("span", {
				"aria-hidden": "true",
				innerHTML: e.genre.icons.heart
			}, null, 8, xb), U(" " + O(t.saved ? "Сохранено" : "Сохранить"), 1)], 8, bb)])
		]))), 128))]));
	}
}, Cb = {
	class: "panel",
	"data-sb-vue-prompts": ""
}, wb = { class: "idea-grid" }, Tb = { class: "idea" }, Eb = ["data-id"], Db = ["innerHTML"], Ob = { class: "idea" }, kb = ["data-id"], Ab = ["innerHTML"], jb = {
	__name: "GenrePrompts",
	props: { genre: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (z(), B("div", Cb, [
			n[5] ||= V("h3", null, "Шаблоны звучания", -1),
			n[6] ||= V("p", null, "Начни с одного из вариантов. Он перенесёт настройки жанра в конструктор — там можно выбрать вокал, настроение и язык.", -1),
			V("div", wb, [V("div", Tb, [
				n[1] ||= V("div", { class: "idea-badge" }, "Оригинальное звучание", -1),
				V("h3", null, O(e.genre.name), 1),
				V("p", null, O(e.genre.style) + ".", 1),
				V("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "use-genre",
					"data-id": e.genre.id
				}, [n[0] ||= U(" Настроить в студии ", -1), V("span", {
					"aria-hidden": "true",
					innerHTML: e.genre.icons.arrow
				}, null, 8, Db)], 8, Eb)
			]), V("div", Ob, [
				n[3] ||= V("div", { class: "idea-badge" }, "Альтернативная версия", -1),
				n[4] ||= V("h3", null, "Мягкая атмосфера", -1),
				V("p", null, O(e.genre.style) + ", restrained dynamics, warm intimate production, emotional melodies.", 1),
				V("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "use-soft",
					"data-id": e.genre.id
				}, [n[2] ||= U(" Настроить в студии ", -1), V("span", {
					"aria-hidden": "true",
					innerHTML: e.genre.icons.arrow
				}, null, 8, Ab)], 8, kb)
			])])
		]));
	}
}, Mb = { class: "gb-hero" }, Nb = { class: "gb-content" }, Pb = { class: "gb-eyebrow" }, Fb = { class: "gb-title" }, Ib = { class: "gb-desc" }, Lb = { class: "gb-tags" }, Rb = { class: "gb-buttons" }, zb = ["data-id"], Bb = ["innerHTML"], Vb = ["data-id"], Hb = ["innerHTML"], Ub = {
	class: "gb-vinyl",
	"aria-hidden": "true"
}, Wb = { class: "gb-equalizer" }, Gb = { class: "gb-facts" }, Kb = { class: "gb-fact" }, qb = { class: "gb-fact" }, Jb = { class: "gb-fact" }, Yb = { class: "gb-fact" }, Xb = { class: "genre-detail-layout" }, Zb = {
	class: "genre-side-nav",
	"aria-label": "ЖАНР-НАВ — меню жанра"
}, Qb = {
	class: "genre-side-links",
	"aria-label": "Разделы жанра"
}, $b = [
	"data-tab",
	"aria-current",
	"onClick"
], ex = ["innerHTML"], tx = {
	class: "genre-detail-content",
	id: "genre-nav-content",
	"aria-label": "Содержимое раздела жанра"
}, nx = ["innerHTML"], rx = {
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
			typeof a == "string" && (r.value = e, i.value = a, await Cn(), window.innerWidth <= 850 && document.getElementById("genre-nav-content")?.scrollIntoView({
				block: "start",
				behavior: "smooth"
			}));
		}
		return (t, o) => (z(), B("div", {
			class: "genre-bright",
			style: E({ "--accent": e.genre.color })
		}, [V("div", Mb, [
			o[5] ||= V("div", { class: "gb-top" }, [V("button", {
				type: "button",
				class: "back",
				"data-action": "academy-back",
				"aria-label": "Назад к разделу Академии"
			}, "← Назад"), V("small", null, "SUNOBOOM · MUSIC ATLAS")], -1),
			V("div", Nb, [V("div", null, [
				V("div", Pb, O(e.genre.family) + " · " + O(e.genre.era), 1),
				V("h1", Fb, O(e.genre.name), 1),
				V("p", Ib, O(e.genre.description), 1),
				V("div", Lb, [
					V("span", null, O(e.genre.tagline), 1),
					V("span", null, O(e.genre.bpm[0]) + "–" + O(e.genre.bpm[1]) + " BPM", 1),
					V("span", null, O(e.genre.ideasCount) + " идеи", 1)
				]),
				V("div", Rb, [V("button", {
					type: "button",
					class: "btn primary",
					"data-action": "use-genre",
					"data-id": e.genre.id
				}, [V("span", {
					innerHTML: e.genre.icons.studio,
					"aria-hidden": "true"
				}, null, 8, Bb), o[0] ||= U(" Создать в Suno ", -1)], 8, zb), V("button", {
					type: "button",
					class: "btn ghost",
					"data-action": "favorite",
					"data-id": e.genre.id
				}, [V("span", {
					innerHTML: e.genre.icons.heart,
					"aria-hidden": "true"
				}, null, 8, Hb), U(" " + O(e.genre.favorite ? "В избранном" : "В избранное"), 1)], 8, Vb)])
			]), V("div", Ub, [V("div", Wb, [(z(), B(R, null, L(9, (e) => V("i", { key: e })), 64))])])]),
			V("div", Gb, [
				V("div", Kb, [o[1] ||= V("small", null, "История", -1), V("strong", null, O(e.genre.era), 1)]),
				V("div", qb, [o[2] ||= V("small", null, "Темп", -1), V("strong", null, O(e.genre.bpm[0]) + "–" + O(e.genre.bpm[1]) + " BPM", 1)]),
				V("div", Jb, [o[3] ||= V("small", null, "Треки", -1), V("strong", null, O(e.genre.ideasCount) + " сюжетных идеи", 1)]),
				V("div", Yb, [o[4] ||= V("small", null, "Артисты", -1), V("strong", null, O(e.genre.artistCount) + " ориентиров", 1)])
			])
		]), V("div", Xb, [V("aside", Zb, [o[7] ||= V("div", { class: "genre-side-head" }, [V("span", null, "ЖАНР-НАВ"), V("small", null, "Разделы карточки")], -1), V("nav", Qb, [(z(), B(R, null, L(n, (t) => V("button", {
			key: t.id,
			type: "button",
			class: D(["genre-side-item", { active: r.value === t.id }]),
			"data-tab": t.id,
			"aria-controls": "genre-nav-content",
			"aria-current": r.value === t.id ? "page" : "false",
			onClick: (e) => a(t.id)
		}, [
			V("span", {
				class: "genre-side-icon",
				innerHTML: e.genre.icons[t.id],
				"aria-hidden": "true"
			}, null, 8, ex),
			V("span", null, O(t.label), 1),
			o[6] ||= V("span", {
				class: "genre-side-chevron",
				"aria-hidden": "true"
			}, "›", -1)
		], 10, $b)), 64))])]), V("section", tx, [r.value === "overview" ? (z(), Qi(Uy, {
			key: 0,
			genre: e.genre,
			onSelectTab: a
		}, null, 8, ["genre"])) : r.value === "artists" && e.artistCatalog ? (z(), Qi(mb, {
			key: 1,
			genre: e.genre,
			catalog: e.artistCatalog,
			"enhance-profiles": e.enhanceArtistProfiles
		}, null, 8, [
			"genre",
			"catalog",
			"enhance-profiles"
		])) : r.value === "ideas" ? (z(), Qi(Sb, {
			key: 2,
			genre: e.genre
		}, null, 8, ["genre"])) : r.value === "prompts" ? (z(), Qi(jb, {
			key: 3,
			genre: e.genre
		}, null, 8, ["genre"])) : (z(), B("div", {
			key: 4,
			innerHTML: i.value
		}, null, 8, nx))])])], 4));
	}
};
// src/vue/academy/legacyGenreDetailBridge.js
function ix({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_GENRE, n = document.getElementById("app");
	if (!n || !t || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-genre-detail");
		if (r?.target === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o?.id) return;
		let s = e(a, rx, {
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
var ax = { class: "panel" }, ox = { class: "field" }, sx = ["value"], cx = ["value"], lx = { class: "form-grid" }, ux = { class: "field" }, dx = ["value"], fx = ["value"], px = { class: "field" }, mx = ["value"], hx = ["value"], gx = { class: "field" }, _x = ["value"], vx = ["value"], yx = { class: "field" }, bx = ["value"], xx = ["value"], Sx = { class: "field" }, Cx = { for: "b-tempo" }, wx = {
	id: "tempo-num",
	style: { color: "#ffa8d5" }
}, Tx = { class: "range" }, Ex = ["value"], Dx = { id: "bpm-output" }, Ox = {
	class: "muted",
	style: { "font-size": "11px" }
}, kx = { class: "field" }, Ax = ["value"], jx = { class: "field" }, Mx = ["value"], Nx = { class: "checkrow" }, Px = ["checked", "onChange"], Fx = {
	class: "panel",
	style: {
		position: "sticky",
		top: "20px"
	}
}, Ix = {
	class: "output",
	id: "prompt-output"
}, Lx = { class: "counter" }, Rx = { id: "prompt-count" }, zx = { class: "two-col" }, Bx = {
	class: "btn primary",
	type: "button",
	"data-action": "copy-prompt"
}, Vx = ["innerHTML"], Hx = {
	class: "btn ghost",
	type: "button",
	"data-action": "save-prompt"
}, Ux = ["innerHTML"], Wx = { class: "list-pills" }, Gx = {
	__name: "StudioBuilder",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Zt(t.api.snapshot()), r = K(() => n.value?.settings || {}), i = K(() => n.value?.genre || {
			name: "",
			family: "",
			bpm: [0, 0]
		}), a = K(() => String(n.value?.prompt || "")), o = [
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
		return I(() => window.addEventListener("sunoboom:studio-updated", d)), vr(() => window.removeEventListener("sunoboom:studio-updated", d)), (e, t) => (z(), B(R, null, [V("div", ax, [
			t[17] ||= V("h3", null, "Параметры трека", -1),
			V("div", ox, [t[8] ||= V("label", { for: "b-genre" }, "Жанр", -1), V("select", {
				id: "b-genre",
				value: r.value.genre,
				onChange: t[0] ||= (e) => f("genre", e.target.value)
			}, [(z(!0), B(R, null, L(n.value.genres, (e) => (z(), B("option", {
				key: e.id,
				value: e.id
			}, O(e.name), 9, cx))), 128))], 40, sx)]),
			V("div", lx, [
				V("div", ux, [t[9] ||= V("label", { for: "b-mood" }, "Настроение", -1), V("select", {
					id: "b-mood",
					value: r.value.mood,
					onChange: t[1] ||= (e) => f("mood", e.target.value)
				}, [(z(), B(R, null, L(o, ([e, t]) => V("option", {
					key: e,
					value: e
				}, O(t), 9, fx)), 64))], 40, dx)]),
				V("div", px, [t[10] ||= V("label", { for: "b-vocal" }, "Вокал", -1), V("select", {
					id: "b-vocal",
					value: r.value.vocal,
					onChange: t[2] ||= (e) => f("vocal", e.target.value)
				}, [(z(), B(R, null, L(s, ([e, t]) => V("option", {
					key: e,
					value: e
				}, O(t), 9, hx)), 64))], 40, mx)]),
				V("div", gx, [t[11] ||= V("label", { for: "b-lang" }, "Язык текста", -1), V("select", {
					id: "b-lang",
					value: r.value.language,
					onChange: t[3] ||= (e) => f("language", e.target.value)
				}, [(z(), B(R, null, L(c, ([e, t]) => V("option", {
					key: e,
					value: e
				}, O(t), 9, vx)), 64))], 40, _x)]),
				V("div", yx, [t[12] ||= V("label", { for: "b-energy" }, "Энергия", -1), V("select", {
					id: "b-energy",
					value: r.value.energy,
					onChange: t[4] ||= (e) => f("energy", e.target.value)
				}, [(z(), B(R, null, L(l, ([e, t]) => V("option", {
					key: e,
					value: e
				}, O(t), 9, xx)), 64))], 40, bx)])
			]),
			V("div", Sx, [
				V("label", Cx, [
					t[13] ||= U("Темп · ", -1),
					V("span", wx, O(r.value.tempo), 1),
					t[14] ||= U(" BPM", -1)
				]),
				V("div", Tx, [V("input", {
					type: "range",
					id: "b-tempo",
					min: "65",
					max: "200",
					step: "1",
					value: r.value.tempo,
					onInput: t[5] ||= (e) => f("tempo", Number(e.target.value))
				}, null, 40, Ex), V("output", Dx, O(r.value.tempo) + " BPM", 1)]),
				V("span", Ox, " Обычно для «" + O(i.value.name) + "»: " + O(i.value.bpm[0]) + "–" + O(i.value.bpm[1]) + " BPM ", 1)
			]),
			V("div", kx, [t[15] ||= V("label", { for: "b-theme" }, "Тема / история трека", -1), V("textarea", {
				id: "b-theme",
				rows: "2",
				value: r.value.theme,
				onInput: t[6] ||= (e) => f("theme", e.target.value),
				placeholder: "О чём будет песня?"
			}, null, 40, Ax)]),
			V("div", jx, [t[16] ||= V("label", { for: "b-extra" }, "Дополнительные инструкции (необязательно)", -1), V("textarea", {
				id: "b-extra",
				rows: "2",
				value: r.value.extra,
				onInput: t[7] ||= (e) => f("extra", e.target.value),
				placeholder: "Например: memorable chorus, short guitar solo"
			}, null, 40, Mx)]),
			V("div", Nx, [(z(), B(R, null, L(u, ([e, t]) => V("label", { key: e }, [V("input", {
				type: "checkbox",
				checked: r.value[e],
				onChange: (t) => f(e, t.target.checked)
			}, null, 40, Px), U(O(t), 1)])), 64))])
		]), V("div", Fx, [
			t[21] ||= V("div", { class: "eyebrow" }, "Готово к Suno", -1),
			t[22] ||= V("h3", null, "Твой промпт", -1),
			V("div", Ix, O(a.value), 1),
			V("div", Lx, [t[18] ||= V("span", null, "Максимум 1000 символов", -1), V("b", Rx, O(a.value.length) + " / 1000", 1)]),
			V("div", zx, [V("button", Bx, [V("span", {
				"aria-hidden": "true",
				innerHTML: n.value.icons.copy
			}, null, 8, Vx), t[19] ||= U(" Копировать ", -1)]), V("button", Hx, [V("span", {
				"aria-hidden": "true",
				innerHTML: n.value.icons.save
			}, null, 8, Ux), t[20] ||= U(" Сохранить ", -1)])]),
			t[23] ||= V("div", { class: "spacer" }, null, -1),
			t[24] ||= V("div", { class: "notice" }, [V("strong", null, "Подсказка:"), U(" промпт задаёт стиль, а текст песни можно вводить отдельно в Suno. Результат генерации может отличаться от запроса.")], -1),
			t[25] ||= V("div", { class: "spacer" }, null, -1),
			t[26] ||= V("div", { class: "info-label" }, "Музыкальный профиль", -1),
			V("div", Wx, [
				V("span", null, O(i.value.name), 1),
				V("span", null, O(i.value.family), 1),
				V("span", null, O(i.value.bpm[0]) + "–" + O(i.value.bpm[1]) + " BPM", 1)
			])
		])], 64));
	}
};
// src/vue/studio/legacyStudioBridge.js
function Kx({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_STUDIO, n = document.getElementById("app");
	if (!n || !t || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector(".studio-grid");
		if (r?.target === a || (r &&= (r.unmount(), null), !a || !t.snapshot())) return;
		let o = e(a, Gx, { api: t });
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
var qx = { class: "gm-layout" }, Jx = { class: "gm-panel" }, Yx = { class: "gm-stack" }, Xx = { class: "gm-row-top" }, Zx = { class: "gm-rank" }, Qx = { class: "gm-field gm-genre-select" }, $x = ["for"], eS = [
	"id",
	"value",
	"data-gm-genre"
], tS = ["label"], nS = ["value"], rS = ["data-gm-value"], iS = [
	"data-slot",
	"aria-label",
	"disabled"
], aS = { class: "gm-slider-line" }, oS = [
	"max",
	"value",
	"data-gm-weight",
	"aria-label"
], sS = { class: "gm-meter" }, cS = ["data-gm-meter"], lS = { class: "gm-sub" }, uS = { class: "gm-actions" }, dS = ["disabled"], fS = {
	class: "gm-mixture",
	"aria-label": "Доли музыкальных жанров"
}, pS = ["data-gm-mixbar", "title"], mS = { class: "gm-form-grid" }, hS = ["for"], gS = [
	"id",
	"value",
	"data-gm-setting"
], _S = ["value"], vS = { class: "gm-tempo" }, yS = ["checked"], bS = { class: "gm-tempo-row" }, xS = ["value", "disabled"], SS = { id: "gm-bpm" }, CS = { class: "gm-field" }, wS = ["value"], TS = { class: "gm-checks" }, ES = ["data-gm-setting", "checked"], DS = { class: "gm-panel gm-output-panel" }, OS = {
	class: "gm-output",
	id: "gm-prompt",
	"aria-live": "polite"
}, kS = { class: "gm-prompt-meta" }, AS = { id: "gm-count" }, jS = { class: "gm-field" }, MS = ["value"], NS = { class: "gm-saved-list" }, PS = {
	key: 0,
	class: "gm-muted"
}, FS = { class: "gm-saved-actions" }, IS = ["data-id"], LS = ["data-id", "aria-label"], RS = {
	__name: "GenreMixer",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Zt(t.api.snapshot()), r = K(() => n.value?.rows || []), i = K(() => n.value?.genres || []), a = K(() => n.value?.settings || {}), o = K(() => n.value?.options || {}), s = K(() => n.value?.saved || []), c = K(() => n.value?.prompt || ""), l = K(() => n.value?.tempo || 115), u = K(() => n.value?.title || "");
		function d() {
			let e = t.api.snapshot();
			e && (n.value = e);
		}
		I(() => window.addEventListener("sunoboom:mixer-updated", d)), vr(() => window.removeEventListener("sunoboom:mixer-updated", d));
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
		let p = K(() => [
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
		return (e, t) => (z(), B(R, null, [t[14] ||= V("header", { class: "heading" }, [
			V("div", { class: "eyebrow" }, "Suno Studio · новый инструмент"),
			V("h1", null, [U("Жанровый "), V("span", { class: "gm-highlight" }, "миксер")]),
			V("p", null, "Соединяй от 2 до 4 жанров из Академии SUNOBOOM, задавай пропорции и создавай готовый Style-промпт для Suno.")
		], -1), V("div", qx, [V("section", Jx, [
			t[3] ||= V("div", { class: "gm-section-head" }, [V("div", null, [V("h2", null, "Формула звучания"), V("p", null, "Меняй жанры и двигай ползунки — сумма всегда равна 100%.")]), V("span", { class: "gm-total" }, "Σ 100%")], -1),
			V("div", Yx, [(z(!0), B(R, null, L(r.value, (e, t) => (z(), B("article", {
				key: e.id,
				class: "gm-row",
				style: E({ "--gm-color": e.color })
			}, [
				V("div", Xx, [
					V("span", Zx, O(String(t + 1).padStart(2, "0")), 1),
					V("div", Qx, [V("label", { for: "gm-genre-" + t }, "Музыкальное направление", 8, $x), V("select", {
						id: "gm-genre-" + t,
						value: e.id,
						"data-gm-genre": t
					}, [(z(!0), B(R, null, L(f(t), (e) => (z(), B("optgroup", {
						key: e.family,
						label: e.family
					}, [(z(!0), B(R, null, L(e.items, (e) => (z(), B("option", {
						key: e.id,
						value: e.id
					}, O(e.name), 9, nS))), 128))], 8, tS))), 128))], 8, eS)]),
					V("span", {
						class: "gm-percent",
						"data-gm-value": t
					}, O(e.weight) + "%", 9, rS),
					V("button", {
						type: "button",
						class: "gm-remove",
						"data-action": "gm-remove",
						"data-slot": t,
						"aria-label": "Убрать жанр " + e.name,
						title: "Убрать жанр",
						disabled: r.value.length <= 2
					}, "×", 8, iS)
				]),
				V("div", aS, [V("input", {
					type: "range",
					min: "5",
					max: 100 - 5 * (r.value.length - 1),
					step: "1",
					value: e.weight,
					"data-gm-weight": t,
					"aria-label": "Доля жанра " + e.name
				}, null, 8, oS), V("div", sS, [V("span", {
					"data-gm-meter": t,
					style: E({ width: e.weight + "%" })
				}, null, 12, cS)])]),
				V("p", lS, O(e.family) + " · " + O(e.tagline) + " · " + O(e.instruments), 1)
			], 4))), 128))]),
			V("div", uS, [V("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "gm-add",
				disabled: r.value.length >= 4
			}, "＋ Добавить жанр", 8, dS), t[0] ||= V("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "gm-equal"
			}, "Поровну", -1)]),
			V("div", fS, [(z(!0), B(R, null, L(r.value, (e) => (z(), B("span", {
				key: e.id,
				"data-gm-mixbar": e.id,
				style: E({
					width: e.weight + "%",
					background: e.color
				}),
				title: e.name + ": " + e.weight + "%"
			}, null, 12, pS))), 128))]),
			t[4] ||= V("p", { class: "gm-muted" }, "Проценты — творческий ориентир для генерации, а не гарантия точного соотношения в готовой музыке.", -1),
			t[5] ||= V("div", { class: "gm-divider" }, null, -1),
			t[6] ||= V("h2", null, "Характер композиции", -1),
			V("div", mS, [(z(!0), B(R, null, L(p.value, (e) => (z(), B("div", {
				key: e.key,
				class: "gm-field"
			}, [V("label", { for: "gm-" + e.key }, O(e.label), 9, hS), V("select", {
				id: "gm-" + e.key,
				value: a.value[e.key],
				"data-gm-setting": e.key
			}, [(z(!0), B(R, null, L(e.choices, ([e, t]) => (z(), B("option", {
				key: e,
				value: e
			}, O(t), 9, _S))), 128))], 8, gS)]))), 128))]),
			V("div", vS, [V("label", null, [V("input", {
				type: "checkbox",
				"data-gm-setting": "autoTempo",
				checked: a.value.autoTempo
			}, null, 8, yS), t[1] ||= U(" Определять темп по жанрам", -1)]), V("div", bS, [V("input", {
				id: "gm-tempo",
				type: "range",
				min: "65",
				max: "200",
				value: l.value,
				"data-gm-setting": "tempo",
				disabled: a.value.autoTempo
			}, null, 8, xS), V("b", SS, O(l.value) + " BPM", 1)])]),
			V("div", CS, [t[2] ||= V("label", { for: "gm-theme" }, "Тема песни (необязательно)", -1), V("textarea", {
				id: "gm-theme",
				rows: "2",
				maxlength: "170",
				"data-gm-setting": "theme",
				value: a.value.theme,
				placeholder: "Например: ночной город, встреча после долгой разлуки"
			}, null, 8, wS)]),
			V("div", TS, [(z(), B(R, null, L(m, ([e, t]) => V("label", { key: e }, [V("input", {
				type: "checkbox",
				"data-gm-setting": e,
				checked: a.value[e]
			}, null, 8, ES), U(" " + O(t), 1)])), 64))])
		]), V("aside", DS, [
			t[9] ||= V("div", { class: "eyebrow" }, "Результат микширования", -1),
			t[10] ||= V("h2", null, "Гибридный Style-промпт", -1),
			V("div", OS, O(c.value), 1),
			V("div", kS, [t[7] ||= V("span", null, "На английском · готово для Suno", -1), V("b", AS, O(c.value.length) + " / 1000", 1)]),
			t[11] ||= oa("<div class=\"gm-output-actions\"><button type=\"button\" class=\"btn primary\" data-action=\"gm-copy\">Копировать</button><button type=\"button\" class=\"btn ghost\" data-action=\"gm-to-studio\">В Suno Studio</button></div><button type=\"button\" class=\"btn ghost gm-full\" data-action=\"gm-save-prompt\">Сохранить в «Мои промпты»</button><div class=\"gm-divider\"></div><h3>Мои сочетания</h3>", 4),
			V("div", jS, [t[8] ||= V("label", { for: "gm-title" }, "Название сочетания", -1), V("input", {
				id: "gm-title",
				type: "text",
				maxlength: "90",
				"data-gm-title": "",
				value: u.value,
				placeholder: "Например: Северный электро-фолк"
			}, null, 8, MS)]),
			t[12] ||= V("button", {
				type: "button",
				class: "btn ghost gm-full",
				"data-action": "gm-save-mix"
			}, "Сохранить формулу", -1),
			V("div", NS, [s.value.length ? W("", !0) : (z(), B("p", PS, "Сохранённых сочетаний пока нет. Придумай свой микс и сохрани его.")), (z(!0), B(R, null, L(s.value, (e) => (z(), B("article", {
				key: e.id,
				class: "gm-saved"
			}, [V("div", null, [V("strong", null, O(e.title), 1), V("small", null, O(e.summary), 1)]), V("div", FS, [V("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "gm-load",
				"data-id": e.id
			}, "Открыть", 8, IS), V("button", {
				type: "button",
				class: "btn danger small",
				"data-action": "gm-delete",
				"data-id": e.id,
				"aria-label": "Удалить " + e.title
			}, "×", 8, LS)])]))), 128))]),
			t[13] ||= V("p", { class: "gm-muted" }, "Сохраняется в этом браузере и входит в общую JSON-копию данных SUNOBOOM. Подключение к ИИ для смешивания не требуется.", -1)
		])])], 64));
	}
};
// src/vue/studio/legacyMixerBridge.js
function zS({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_MIXER, n = document.getElementById("app");
	if (!t || !n || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-mixer-root");
		if (r?.target === a || (r &&= (r.unmount(), null), !a || !t.snapshot())) return;
		let o = e(a, RS, { api: t });
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
var BS = {
	class: "sbpa-tabs",
	role: "group",
	"aria-label": "Источник промпта"
}, VS = ["aria-pressed"], HS = ["aria-pressed"], US = {
	key: 0,
	class: "sbpa-manual"
}, WS = ["value"], GS = ["value"], KS = ["value"], qS = {
	key: 1,
	class: "sbpa-context"
}, JS = {
	id: "sbpa-results",
	"aria-live": "polite"
}, YS = { class: "sbpa-scoreline" }, XS = {
	class: "sbpa-score",
	"aria-label": "Эвристическая оценка промпта"
}, ZS = { class: "sbpa-score-info" }, QS = ["aria-valuenow"], $S = {
	key: 0,
	class: "sbpa-issues"
}, eC = {
	key: 1,
	class: "sbpa-clear"
}, tC = { class: "sbpa-actions" }, nC = {
	key: 0,
	type: "button",
	"data-sbpa-action": "load-studio"
}, rC = { id: "sbpa-proposal-slot" }, iC = {
	key: 0,
	class: "sbpa-proposal"
}, aC = { key: 0 }, oC = { key: 1 }, sC = { key: 2 }, cC = {
	key: 3,
	class: "sbpa-alert"
}, lC = ["value"], uC = {
	__name: "PromptAuditor",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Zt(t.api.snapshot()), r = K(() => n.value?.mode === "manual"), i = K(() => n.value?.report || {
			score: 0,
			length: 0,
			issues: [],
			status: ""
		}), a = K(() => n.value?.genreId || ""), o = K(() => n.value?.genres || []), s = K(() => !!n.value?.proposalOpen), c = K(() => n.value?.proposal || {
			text: "",
			removed: [],
			complete: !0
		});
		function l() {
			let e = t.api.snapshot();
			e && (n.value = e);
		}
		return I(() => window.addEventListener("sunoboom:auditor-updated", l)), vr(() => window.removeEventListener("sunoboom:auditor-updated", l)), (e, t) => (z(), B(R, null, [
			t[10] ||= V("header", { class: "sbpa-head" }, [V("div", null, [
				V("span", { class: "sbpa-eyebrow" }, "SUNOBOOM · ПРОВЕРКА"),
				V("h2", null, "Интеллектуальный аудитор промптов"),
				V("p", null, "Ищет повторы, противоречия, перегрузку и особенности жанра до отправки в Suno.")
			]), V("span", { class: "sbpa-local" }, "Проверка по правилам · без API")], -1),
			V("div", BS, [V("button", {
				type: "button",
				"data-sbpa-action": "studio",
				class: D({ active: !r.value }),
				"aria-pressed": !r.value
			}, "Текущий промпт Studio", 10, VS), V("button", {
				type: "button",
				"data-sbpa-action": "manual",
				class: D({ active: r.value }),
				"aria-pressed": r.value
			}, "Свой текст / вставка", 10, HS)]),
			r.value ? (z(), B("div", US, [
				t[0] ||= V("label", { for: "sbpa-text" }, "Текст промпта", -1),
				V("textarea", {
					id: "sbpa-text",
					rows: "5",
					spellcheck: "false",
					placeholder: "Вставь текст на русском или английском…",
					value: n.value.manual
				}, null, 8, WS),
				t[1] ||= V("label", { for: "sbpa-genre" }, "Жанр для сопоставления с Академией", -1),
				V("select", {
					id: "sbpa-genre",
					value: a.value
				}, [(z(!0), B(R, null, L(o.value, (e) => (z(), B("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, KS))), 128))], 8, GS)
			])) : (z(), B("p", qS, " Проверяется актуальный промпт конструктора. Изменения настроек Studio отражаются здесь автоматически. ")),
			V("div", JS, [V("div", YS, [
				V("div", XS, [U(O(i.value.score), 1), t[2] ||= V("small", null, "/ 100", -1)]),
				V("div", ZS, [
					V("strong", null, O(i.value.status), 1),
					t[3] ||= V("span", null, "Оценка ориентировочная: проверяется структура текста, а не качество будущей музыки.", -1),
					V("div", {
						class: "sbpa-meter",
						role: "progressbar",
						"aria-label": "Оценка промпта",
						"aria-valuenow": i.value.score,
						"aria-valuemin": "0",
						"aria-valuemax": "100"
					}, [V("span", { style: E({ width: i.value.score + "%" }) }, null, 4)], 8, QS)
				]),
				V("div", { class: D(["sbpa-limit", { over: i.value.length > 1e3 }]) }, O(i.value.length) + " / 1000 символов ", 3)
			]), i.value.issues?.length ? (z(), B("ul", $S, [(z(!0), B(R, null, L(i.value.issues, (e, t) => (z(), B("li", {
				key: t,
				class: D(["sbpa-item", "sbpa-" + e.kind])
			}, [V("div", null, [
				V("strong", null, O(e.title), 1),
				V("p", null, O(e.detail), 1),
				V("small", null, O(e.fix), 1)
			])], 2))), 128))])) : (z(), B("p", eC, " Явных противоречий и повторов по проверяемым правилам не найдено. "))]),
			V("div", tC, [t[4] ||= V("button", {
				type: "button",
				"data-sbpa-action": "preview",
				class: "sbpa-primary"
			}, " Показать улучшенный вариант ", -1), r.value ? (z(), B("button", nC, " Вставить текущий промпт Studio ")) : W("", !0)]),
			V("div", rC, [s.value ? (z(), B("div", iC, [
				V("h4", null, [t[5] ||= U("Предлагаемый вариант ", -1), V("small", null, O(c.value.text.length) + " / 1000", 1)]),
				c.value.removed.length ? (z(), B("p", oC, "Удалено фрагментов: " + O(c.value.removed.length) + ". Проверь смысл до копирования.", 1)) : (z(), B("p", aC, "Удалять нечего: текст уже без точных повторов.")),
				c.value.removed.length ? (z(), B("details", sC, [t[6] ||= V("summary", null, "Что изменилось", -1), V("ul", null, [(z(!0), B(R, null, L(c.value.removed, (e, t) => (z(), B("li", { key: t }, [V("b", null, O(e.reason) + ":", 1), U(" " + O(e.part), 1)]))), 128))])])) : W("", !0),
				c.value.complete ? W("", !0) : (z(), B("p", cC, " Автоматического сокращения недостаточно. Уменьши текст вручную минимум на " + O(c.value.text.length - 1e3) + " символов. ", 1)),
				t[7] ||= V("label", { for: "sbpa-preview-text" }, "Редактируемый предпросмотр", -1),
				V("textarea", {
					id: "sbpa-preview-text",
					rows: "5",
					spellcheck: "false",
					value: c.value.text
				}, null, 8, lC),
				t[8] ||= V("div", { class: "sbpa-actions" }, [V("button", {
					type: "button",
					"data-sbpa-action": "copy-preview",
					class: "sbpa-primary"
				}, " Подтвердить и скопировать "), V("button", {
					type: "button",
					"data-sbpa-action": "close-preview"
				}, "Закрыть")], -1),
				t[9] ||= V("small", null, "Исходный промпт и параметры Studio не меняются. Копируется только текст предпросмотра после нажатия.", -1)
			])) : W("", !0)]),
			t[11] ||= V("p", { class: "sbpa-foot" }, " Аудитор не вызывает Gemini и не оценивает реальный звук. Жанровые отклонения могут быть творческим решением, а рекомендации не изменяют исходник без твоего действия. ", -1)
		], 64));
	}
};
// src/vue/studio/legacyAuditorBridge.js
function dC({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_AUDITOR, n = document.getElementById("app");
	if (!t || !n || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sbpa-auditor");
		if (r?.target === a || (r &&= (r.unmount(), null), !a || !t.snapshot())) return;
		let o = e(a, uC, { api: t });
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
var fC = ["data-sba-id", "data-sba-energy"], pC = { class: "sba-block-head" }, mC = ["data-sba-drag", "aria-label"], hC = { class: "sba-index" }, gC = {
	class: "sba-emoji",
	"aria-hidden": "true"
}, _C = { class: "sba-head-energy" }, vC = { class: "sba-block-actions" }, yC = ["data-id", "disabled"], bC = ["data-id", "disabled"], xC = ["data-id"], SC = ["data-id"], CC = { class: "sba-block-fields" }, wC = ["data-id", "value"], TC = ["value"], EC = ["data-id", "value"], DC = ["value"], OC = ["data-id", "value"], kC = ["value"], AC = { class: "sba-energy-field" }, jC = ["data-sba-output"], MC = ["value", "data-id"], NC = { class: "sba-instrument-field" }, PC = ["for"], FC = { class: "sba-instrument-row" }, IC = [
	"id",
	"data-id",
	"value"
], LC = ["id", "innerHTML"], RC = ["id"], zC = { class: "sba-sound-head" }, BC = ["data-id"], VC = ["data-id"], HC = ["id"], UC = {
	key: 0,
	class: "sba-sound-back"
}, WC = ["data-id"], GC = [
	"data-sba-sound-search",
	"data-id",
	"value",
	"placeholder"
], KC = ["id"], qC = { class: "sba-sound-info" }, JC = { key: 0 }, YC = ["data-id", "data-genre-id"], XC = {
	key: 0,
	class: "sba-sound-none"
}, ZC = { class: "sba-sound-group" }, QC = [
	"disabled",
	"aria-disabled",
	"data-id",
	"data-sound-value"
], $C = {
	key: 0,
	class: "sba-sound-none"
}, ew = {
	key: 1,
	class: "sba-sound-foot"
}, tw = ["data-id"], nw = {
	key: 0,
	class: "sba-custom-label"
}, rw = ["data-id", "value"], iw = ["innerHTML"], aw = ["data-id", "aria-label"], ow = {
	key: 0,
	class: "sba-empty"
}, sw = ["aria-label"], cw = [
	"data-sba-snake-id",
	"data-sba-energy",
	"aria-label",
	"title"
], lw = { class: "sba-snake-num" }, uw = {
	class: "sba-snake-icon",
	"aria-hidden": "true"
}, dw = { class: "sba-snake-title" }, fw = { class: "sba-snake-level" }, pw = ["title"], mw = {
	key: 0,
	class: "sba-snake-more"
}, hw = {
	key: 1,
	class: "sba-snake-empty"
}, gw = ["data-sba-hub-from"], _w = { class: "sba-transition-hub-route" }, vw = { class: "sba-transition-hub-number" }, yw = { class: "sba-transition-hub-names" }, bw = { class: "sba-transition-hub-controls" }, xw = [
	"data-id",
	"value",
	"aria-label"
], Sw = ["value"], Cw = [
	"data-id",
	"value",
	"aria-label"
], ww = ["value"], Tw = [
	"data-id",
	"value",
	"aria-label"
], Ew = ["value"], Dw = { class: "sba-transition-hub-actions" }, Ow = ["data-id", "title"], kw = ["data-id"], Aw = {
	key: 1,
	class: "sba-transition-hub-empty"
}, jw = ["title"], Mw = { class: "sba-chart-column" }, Nw = {
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
		let t = e, n = /* @__PURE__ */ Zt(t.api.snapshot()), r = K(() => n.value?.blocks || []), i = K(() => n.value?.sections || []), a = K(() => n.value?.voices || []), o = K(() => n.value?.energies || {}), s = K(() => n.value?.transitions || []), c = K(() => n.value?.transitionTypes || []), l = K(() => n.value?.transitionLengths || []), u = K(() => n.value?.transitionStrengths || []), d = K(() => n.value?.snakeExpanded ? r.value : r.value.slice(0, 12)), f = K(() => n.value?.transitionHubExpanded ? s.value : s.value.slice(0, 3)), p = [
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
		I(() => window.addEventListener("sunoboom:arranger-updated", m)), vr(() => window.removeEventListener("sunoboom:arranger-updated", m));
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
		let g = K(() => d.value.map((e, t) => t + 1 + ". " + e.snakeLabel).join(" → "));
		return (t, n) => e.kind === "cards" ? (z(), B(R, { key: 0 }, [(z(!0), B(R, null, L(r.value, (e, t) => (z(), B(R, { key: e.id }, [
			V("article", {
				class: "sba-block",
				"data-sba-id": e.id,
				"data-sba-energy": e.energy
			}, [V("div", pC, [
				V("span", {
					class: "sba-drag",
					draggable: "true",
					"data-sba-drag": e.id,
					title: "Перетащить блок",
					"aria-label": "Перетащить " + e.sectionName
				}, "⠿", 8, mC),
				V("span", hC, O(String(t + 1).padStart(2, "0")), 1),
				V("span", gC, O(e.icon), 1),
				V("strong", null, O(e.label), 1),
				V("span", _C, "Энергия " + O(e.energy) + "/5", 1),
				V("div", vC, [
					V("button", {
						type: "button",
						"data-sba-action": "up",
						"data-id": e.id,
						"aria-label": "Переместить вверх",
						disabled: t === 0
					}, "↑", 8, yC),
					V("button", {
						type: "button",
						"data-sba-action": "down",
						"data-id": e.id,
						"aria-label": "Переместить вниз",
						disabled: t === r.value.length - 1
					}, "↓", 8, bC),
					V("button", {
						type: "button",
						"data-sba-action": "duplicate",
						"data-id": e.id,
						"aria-label": "Дублировать блок"
					}, "⧉", 8, xC),
					V("button", {
						type: "button",
						"data-sba-action": "remove",
						"data-id": e.id,
						"aria-label": "Удалить блок"
					}, "×", 8, SC)
				])
			]), V("div", CC, [
				V("label", null, [n[0] ||= U("Раздел ", -1), V("select", {
					"data-sba-field": "type",
					"data-id": e.id,
					value: e.type
				}, [(z(!0), B(R, null, L(i.value, (e) => (z(), B("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, TC))), 128))], 8, wC)]),
				V("label", null, [n[1] ||= U("Тактов ", -1), V("select", {
					"data-sba-field": "bars",
					"data-id": e.id,
					value: e.bars
				}, [(z(), B(R, null, L(p, (e) => V("option", {
					key: e,
					value: e
				}, O(e), 9, DC)), 64))], 8, EC)]),
				V("label", null, [n[2] ||= U("Вокал ", -1), V("select", {
					"data-sba-field": "vocal",
					"data-id": e.id,
					value: e.vocal
				}, [(z(!0), B(R, null, L(a.value, (e) => (z(), B("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, kC))), 128))], 8, OC)]),
				V("label", AC, [
					n[3] ||= U("Энергия ", -1),
					V("output", { "data-sba-output": e.id }, O(e.energy) + "/5 · " + O(o.value[e.energy]), 9, jC),
					V("input", {
						type: "range",
						min: "1",
						max: "5",
						step: "1",
						value: e.energy,
						"data-sba-field": "energy",
						"data-id": e.id
					}, null, 8, MC)
				]),
				V("div", NC, [
					V("label", { for: "sba-instruments-" + e.id }, "Инструменты / приём", 8, PC),
					V("div", FC, [V("input", {
						type: "text",
						id: "sba-instruments-" + e.id,
						maxlength: "300",
						"data-sba-field": "instruments",
						"data-id": e.id,
						value: e.instruments,
						placeholder: "Введи вручную или выбери рекомендацию",
						autocomplete: "off"
					}, null, 8, IC)]),
					V("div", {
						class: "sba-quick-sounds",
						id: "sba-quick-" + e.id,
						innerHTML: e.quickSounds
					}, null, 8, LC),
					e.soundPanel ? (z(), B("div", {
						key: 0,
						class: "sba-sound-panel",
						id: "sba-sound-panel-" + e.id,
						"aria-label": "Выбор инструментов и приёмов"
					}, [
						V("div", zC, [n[4] ||= V("strong", null, "Библиотека инструментов и приёмов", -1), V("button", {
							type: "button",
							"data-sba-action": "sound-close",
							"data-id": e.id,
							"aria-label": "Закрыть подбор"
						}, "×", 8, BC)]),
						V("button", {
							type: "button",
							class: "sba-sound-genre-trigger",
							"data-sba-action": "sound-switch-mode",
							"data-id": e.id
						}, [
							n[5] ||= U(" Жанр: ", -1),
							V("b", null, O(e.soundPanel.genreName), 1),
							n[6] ||= V("span", null, "⌄", -1)
						], 8, VC),
						V("div", { id: "sba-sound-body-" + e.id }, [
							e.soundPanel.mode === "genres" ? (z(), B("div", UC, [V("button", {
								type: "button",
								"data-sba-action": "sound-switch-mode",
								"data-id": e.id
							}, " ← К инструментам ", 8, WC)])) : W("", !0),
							V("input", {
								type: "search",
								class: "sba-sound-search",
								"data-sba-sound-search": e.soundPanel.mode,
								"data-id": e.id,
								value: e.soundPanel.query,
								placeholder: e.soundPanel.mode === "genres" ? "Поиск по всей Академии..." : "Поиск инструмента или приёма...",
								autocomplete: "off",
								"aria-label": "Поиск инструментов или жанров"
							}, null, 8, GC),
							V("div", {
								class: "sba-sound-list",
								id: "sba-sound-results-" + e.id
							}, [e.soundPanel.mode === "genres" ? (z(), B(R, { key: 0 }, [
								V("div", qC, [U(" Найдено жанров: " + O(e.soundPanel.total) + " ", 1), e.soundPanel.total > e.soundPanel.matches.length ? (z(), B("span", JC, " · уточни запрос ")) : W("", !0)]),
								(z(!0), B(R, null, L(e.soundPanel.matches, (t) => (z(), B("button", {
									key: t.id,
									type: "button",
									class: "sba-sound-genre-row",
									"data-sba-action": "sound-set-genre",
									"data-id": e.id,
									"data-genre-id": t.id
								}, [V("span", null, O(t.name), 1), V("small", null, O(t.family), 1)], 8, YC))), 128)),
								e.soundPanel.matches.length ? W("", !0) : (z(), B("p", XC, " Жанр не найден "))
							], 64)) : (z(), B(R, { key: 1 }, [(z(!0), B(R, null, L(e.soundPanel.groups, (t) => (z(), B(R, { key: t.title }, [V("div", ZC, O(t.title), 1), (z(!0), B(R, null, L(t.items, (t) => (z(), B("button", {
								key: t.name,
								type: "button",
								class: "sba-sound-option",
								disabled: t.added,
								"aria-disabled": t.added,
								"data-sba-action": "sound-add",
								"data-id": e.id,
								"data-sound-value": t.name
							}, [V("span", null, O(t.name), 1), V("small", null, O(t.added ? "✓ Добавлено" : "+ Добавить"), 1)], 8, QC))), 128))], 64))), 128)), e.soundPanel.groups.length ? W("", !0) : (z(), B("p", $C, " Совпадений нет. Можно ввести инструмент вручную. "))], 64))], 8, KC),
							e.soundPanel.mode === "genres" ? W("", !0) : (z(), B("div", ew, [n[7] ||= V("span", null, "Нажми «Добавить», чтобы дополнить поле. Свой текст сохраняется.", -1), V("button", {
								type: "button",
								"data-sba-action": "sound-clear",
								"data-id": e.id
							}, " Очистить поле ", 8, tw)]))
						], 8, HC)
					], 8, RC)) : W("", !0)
				]),
				e.type === "custom" ? (z(), B("label", nw, [n[8] ||= U("Своё название ", -1), V("input", {
					type: "text",
					maxlength: "48",
					"data-sba-field": "customName",
					"data-id": e.id,
					value: e.customName,
					placeholder: "Название для тега Suno"
				}, null, 8, rw)])) : W("", !0)
			])], 8, fC),
			e.transitionHTML ? (z(), B("div", {
				key: 0,
				style: { display: "contents" },
				innerHTML: e.transitionHTML
			}, null, 8, iw)) : W("", !0),
			V("button", {
				type: "button",
				class: "sba-between-add",
				"data-sba-action": "insert-after",
				"data-id": e.id,
				"aria-label": "Добавить блок после " + e.label
			}, [...n[9] ||= [V("span", { "aria-hidden": "true" }, "＋", -1), U(" Добавить после ", -1)]], 8, aw)
		], 64))), 128)), r.value.length ? W("", !0) : (z(), B("div", ow, "Пока нет блоков. Добавь первый фрагмент снизу."))], 64)) : e.kind === "snake" ? (z(), B(R, { key: 1 }, [r.value.length ? (z(), B(R, { key: 0 }, [(z(), B(R, null, L([6, 3], (e) => V("div", {
			key: e,
			class: D(e === 6 ? "sba-snake-desktop" : "sba-snake-mobile"),
			role: "group",
			"aria-label": "Схема блоков: " + g.value
		}, [(z(!0), B(R, null, L(h(e), (e) => (z(), B("div", {
			key: e.id,
			class: D(["sba-snake-row", {
				"sba-snake-reverse": e.reverse,
				"sba-snake-continues": e.continued
			}])
		}, [(z(!0), B(R, null, L(e.items, (e) => (z(), B("button", {
			key: e.id,
			type: "button",
			draggable: "true",
			class: "sba-snake-chip",
			"data-sba-snake-id": e.id,
			"data-sba-energy": e.energy,
			"aria-label": "Переместить " + e.snakeLabel + ", позиция " + (e.index + 1) + " из " + r.value.length + ", энергия " + e.energy + "/5",
			title: e.index + 1 + ". " + e.snakeLabel + " · энергия " + e.energy + "/5 · перетащи для перестановки"
		}, [
			V("span", lw, O(e.index + 1), 1),
			V("span", uw, O(e.icon), 1),
			V("span", dw, O(e.snakeLabel), 1),
			V("span", fw, O(e.energy) + "/5", 1),
			e.hasTransition ? (z(), B("span", {
				key: 0,
				class: "sba-snake-transition",
				title: "Переход: " + e.transitionLabel,
				"aria-hidden": "true"
			}, "↝", 8, pw)) : W("", !0)
		], 8, cw))), 128))], 2))), 128))], 10, sw)), 64)), d.value.length < r.value.length ? (z(), B("p", mw, " … и ещё " + O(r.value.length - d.value.length) + " блоков ", 1)) : W("", !0)], 64)) : (z(), B("p", hw, "Добавь первый блок, и здесь появится схема композиции."))], 64)) : e.kind === "transitions" ? (z(), B(R, { key: 2 }, [s.value.length ? (z(!0), B(R, { key: 0 }, L(f.value, (e) => (z(), B("div", {
			key: e.id,
			class: D(["sba-transition-hub-row", { "sba-transition-hub-active": e.current.type !== "none" }]),
			"data-sba-hub-from": e.id
		}, [
			V("div", _w, [V("span", vw, O(e.index + 1) + " → " + O(e.index + 2), 1), V("span", yw, [
				U(O(e.from) + " ", 1),
				n[10] ||= V("b", null, "→", -1),
				U(" " + O(e.to), 1)
			])]),
			V("div", bw, [
				V("label", null, [n[11] ||= U("Эффект ", -1), V("select", {
					"data-sba-transition": "type",
					"data-id": e.id,
					value: e.current.type,
					"aria-label": "Переход " + (e.index + 1) + " к " + (e.index + 2)
				}, [(z(!0), B(R, null, L(c.value, (e) => (z(), B("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, Sw))), 128))], 8, xw)]),
				V("label", null, [n[12] ||= U("Длина ", -1), V("select", {
					"data-sba-transition": "length",
					"data-id": e.id,
					value: e.current.length,
					"aria-label": "Длительность перехода " + (e.index + 1)
				}, [(z(!0), B(R, null, L(l.value, (e) => (z(), B("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, ww))), 128))], 8, Cw)]),
				V("label", null, [n[13] ||= U("Сила ", -1), V("select", {
					"data-sba-transition": "strength",
					"data-id": e.id,
					value: e.current.strength,
					"aria-label": "Выраженность перехода " + (e.index + 1)
				}, [(z(!0), B(R, null, L(u.value, (e) => (z(), B("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, Ew))), 128))], 8, Tw)])
			]),
			V("div", Dw, [V("button", {
				type: "button",
				"data-sba-action": "transition-suggest",
				"data-id": e.id,
				title: "Совет: " + e.advice
			}, "✧ Совет", 8, Ow), V("button", {
				type: "button",
				"data-sba-action": "transition-hub-jump",
				"data-id": e.id
			}, "Подробнее ↓", 8, kw)])
		], 10, gw))), 128)) : (z(), B("p", Aw, "Добавь второй блок, и здесь можно будет настроить переходы."))], 64)) : e.kind === "energy" ? (z(!0), B(R, { key: 3 }, L(r.value, (e) => (z(), B("div", {
			key: e.id,
			class: "sba-chart-step",
			title: e.label + " · " + e.energy + "/5",
			style: E({
				"--energy": e.energy,
				"--bar-width": 100 / r.value.length + "%"
			})
		}, [V("div", Mw, [V("i", { style: E({ "--level": e.energy }) }, null, 4)]), V("small", null, O(e.icon), 1)], 12, jw))), 128)) : W("", !0);
	}
}, Pw = ["aria-expanded"], Fw = { id: "sba-picked-label" }, Iw = ["hidden"], Lw = { class: "sba-preset-search-row" }, Rw = ["value"], zw = {
	class: "sba-preset-filters",
	role: "group",
	"aria-label": "Тип вариантов"
}, Bw = ["data-filter", "aria-pressed"], Vw = {
	id: "sba-preset-results",
	class: "sba-preset-results",
	role: "listbox",
	"aria-label": "Доступные шаблоны и жанры"
}, Hw = { class: "sba-preset-group-title" }, Uw = { key: 0 }, Ww = ["aria-selected", "data-choice"], Gw = {
	key: 0,
	class: "sba-preset-no-results"
}, Kw = {
	__name: "ArrangementPicker",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Zt(t.api.snapshot()), r = K(() => n.value?.picker || {
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
		return I(() => window.addEventListener("sunoboom:arranger-updated", i)), vr(() => window.removeEventListener("sunoboom:arranger-updated", i)), (e, t) => (z(), B(R, null, [
			t[2] ||= V("span", { class: "sba-preset-caption" }, "Шаблон композиции / жанр", -1),
			V("button", {
				type: "button",
				id: "sba-presets",
				class: "sba-preset-trigger",
				"data-sba-action": "menu-toggle",
				"aria-haspopup": "dialog",
				"aria-expanded": r.value.open,
				"aria-controls": "sba-preset-menu"
			}, [V("span", Fw, O(r.value.selected), 1), t[0] ||= V("span", {
				class: "sba-preset-chevron",
				"aria-hidden": "true"
			}, "⌄", -1)], 8, Pw),
			V("div", {
				id: "sba-preset-menu",
				class: "sba-preset-menu",
				role: "dialog",
				"aria-label": "Поиск шаблона или жанра",
				hidden: !r.value.open
			}, [
				V("div", Lw, [V("input", {
					type: "search",
					id: "sba-preset-search",
					autocomplete: "off",
					value: r.value.query,
					placeholder: "Найти жанр или шаблон...",
					"aria-label": "Поиск жанра"
				}, null, 8, Rw), t[1] ||= V("button", {
					type: "button",
					"data-sba-action": "menu-close",
					"aria-label": "Закрыть меню"
				}, "×", -1)]),
				V("div", zw, [(z(!0), B(R, null, L([
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
				], (e) => (z(), B("button", {
					key: e.id,
					type: "button",
					"data-sba-action": "menu-filter",
					"data-filter": e.id,
					"aria-pressed": r.value.filter === e.id
				}, O(e.title), 9, Bw))), 128))]),
				V("div", Vw, [(z(!0), B(R, null, L(r.value.groups, (e) => (z(), B(R, { key: e.title }, [V("div", Hw, [U(O(e.title) + " ", 1), e.count === null ? W("", !0) : (z(), B("small", Uw, O(e.count), 1))]), (z(!0), B(R, null, L(e.items, (e) => (z(), B("button", {
					key: e.key,
					type: "button",
					role: "option",
					"aria-selected": e.key === r.value.selectedKey,
					"data-sba-action": "menu-choose",
					"data-choice": e.key
				}, [V("span", null, O(e.title), 1), V("small", null, O(e.subtitle), 1)], 8, Ww))), 128))], 64))), 128)), r.value.groups.length ? W("", !0) : (z(), B("p", Gw, " Ничего не найдено. Попробуй другое название или направление. "))])
			], 8, Iw)
		], 64));
	}
}, qw = {
	class: "sba-preview-tabs",
	role: "group",
	"aria-label": "Тип результата"
}, Jw = ["aria-pressed"], Yw = ["aria-pressed"], Xw = ["value"], Zw = {
	class: "sba-preview-count",
	id: "sba-preview-count"
}, Qw = {
	id: "sba-transfer-confirm",
	"aria-live": "polite"
}, $w = {
	key: 0,
	class: "sba-transfer-preview"
}, eT = ["hidden"], tT = [
	["#sba-cards", "cards"],
	["#sba-snake-track", "snake"],
	["#sba-transition-hub-list", "transitions"],
	["#sba-energy-chart", "energy"],
	[
		".sba-preset-picker",
		"picker",
		Kw
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
				let t = e, n = /* @__PURE__ */ Zt(t.api.snapshot()), r = K(() => n.value?.result || {
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
				return I(() => window.addEventListener("sunoboom:arranger-updated", i)), vr(() => window.removeEventListener("sunoboom:arranger-updated", i)), (e, t) => (z(), B(R, null, [
					t[3] ||= V("div", { class: "sba-result-header" }, [
						V("span", { class: "sba-eyebrow" }, "ПРЕДПРОСМОТР"),
						V("h3", null, "Результат для Suno"),
						V("p", null, "Lyrics — теги по секциям; Style — короткое описание динамики.")
					], -1),
					V("div", qw, [V("button", {
						type: "button",
						"data-sba-action": "tab",
						"data-tab": "lyrics",
						"aria-pressed": r.value.tab === "lyrics"
					}, "Теги Lyrics", 8, Jw), V("button", {
						type: "button",
						"data-sba-action": "tab",
						"data-tab": "style",
						"aria-pressed": r.value.tab === "style"
					}, "Style", 8, Yw)]),
					V("textarea", {
						id: "sba-preview",
						readonly: "",
						spellcheck: "false",
						"aria-label": "Готовые теги структуры песни",
						value: r.value.text
					}, null, 8, Xw),
					V("div", Zw, O(r.value.count), 1),
					t[4] ||= V("div", { class: "sba-result-actions" }, [V("button", {
						type: "button",
						class: "sba-btn sba-copy-btn",
						"data-sba-action": "copy"
					}, " Копировать результат "), V("button", {
						type: "button",
						class: "sba-btn sba-transfer-btn",
						"data-sba-action": "prepare-transfer"
					}, " Перенести стиль в Studio ")], -1),
					V("div", Qw, [r.value.transfer ? (z(), B("div", $w, [
						t[0] ||= V("strong", null, "Предпросмотр переноса в Style", -1),
						t[1] ||= V("p", null, "Добавим описание аранжировки в дополнительные инструкции Suno Studio, не удаляя твои записи.", -1),
						V("code", null, O(r.value.transfer.candidate), 1),
						t[2] ||= V("div", { class: "sba-preview-buttons" }, [V("button", {
							type: "button",
							"data-sba-action": "transfer-accept"
						}, "Подтвердить перенос"), V("button", {
							type: "button",
							"data-sba-action": "transfer-cancel"
						}, "Отмена")], -1),
						V("small", null, "Итоговый промпт Studio: " + O(r.value.transfer.promptLength) + " / 1000 символов", 1)
					])) : W("", !0)]),
					V("p", {
						id: "sba-message",
						class: "sba-message",
						role: "status",
						"aria-live": "polite",
						hidden: !r.value.message
					}, O(r.value.message), 9, eT),
					t[5] ||= V("div", { class: "sba-help" }, [
						V("strong", null, "Как применять"),
						V("p", null, [
							U("Теги секций вставляй в поле "),
							V("b", null, "Lyrics"),
							U(" в Suno рядом с текстом песни. Краткую динамику можно добавить в "),
							V("b", null, "Style"),
							U(" через Suno Studio после подтверждения.")
						]),
						V("p", null, "Ориентир длительности рассчитан по 4/4 и BPM Studio, это не гарантия точной длины аудио.")
					], -1)
				], 64));
			}
		}
	]
];
function nT({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ARRANGER, n = document.getElementById("app");
	if (!n || !t || typeof t.snapshot != "function") return () => {};
	let r = /* @__PURE__ */ new Map(), i = !1;
	function a() {
		if (!i) for (let [i, a, o = Nw] of tT) {
			let s = n.querySelector(i), c = r.get(a);
			if (c?.target === s || (c && (c.unmount(), r.delete(a)), !s || !t.snapshot())) continue;
			let l = e(s, o, o === Nw ? {
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
var rT = {
	key: 0,
	class: "sb-poetry-empty"
}, iT = { class: "sb-poetry-stats" }, aT = { class: "sb-poetry-subline" }, oT = { class: "sb-poetry-sections" }, sT = { class: "sb-poetry-stanzas" }, cT = { class: "sb-poetry-stanza-name" }, lT = { class: "sb-poetry-stanza-data" }, uT = { class: "sb-poetry-lines" }, dT = { class: "sb-poetry-line-main" }, fT = { class: "sb-poetry-index" }, pT = { class: "sb-poetry-verse" }, mT = {
	class: "sb-poetry-syllable",
	title: "Оценка слогов"
}, hT = ["title"], gT = {
	key: 0,
	class: "sb-poetry-footnote"
}, _T = {
	key: 1,
	class: "sb-poetry-words"
}, vT = { class: "sb-poetry-tips" }, yT = {
	__name: "PoetryAnalysis",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Zt(t.api.analysis()), r = K(() => n.value || {
			analyzed: !1,
			message: ""
		});
		function i() {
			let e = t.api.analysis();
			e && (n.value = e);
		}
		return I(() => window.addEventListener("sunoboom:poetry-updated", i)), vr(() => window.removeEventListener("sunoboom:poetry-updated", i)), (e, t) => r.value.analyzed ? (z(), B(R, { key: 1 }, [
			V("div", iT, [(z(!0), B(R, null, L(r.value.stats, (e) => (z(), B("div", {
				key: e.label,
				class: "sb-poetry-stat"
			}, [V("strong", null, O(e.value), 1), V("span", null, O(e.label), 1)]))), 128))]),
			V("p", aT, " Диапазон: " + O(r.value.lower) + "–" + O(r.value.upper) + " слогов на строку · меток ударения: " + O(r.value.markedStress) + ". ", 1),
			V("div", oT, [t[1] ||= V("h4", null, "Строфы и предполагаемая рифмовка", -1), V("div", sT, [(z(!0), B(R, null, L(r.value.stanzas, (e) => (z(), B("div", {
				key: e.id,
				class: "sb-poetry-stanza"
			}, [V("div", cT, O(e.section) + " · строфа " + O(e.position), 1), V("div", lT, [
				U(" Схема " + O(e.scheme) + " ", 1),
				t[0] ||= V("span", null, "·", -1),
				U(" разброс " + O(e.spread) + " сл. ", 1)
			])]))), 128))])]),
			t[4] ||= V("div", { class: "sb-poetry-lines-head" }, [V("strong", null, "Построчный анализ"), V("span", null, "Слоги · рифма")], -1),
			V("div", uT, [(z(!0), B(R, null, L(r.value.lines, (e) => (z(), B("div", {
				key: e.number,
				class: "sb-poetry-line"
			}, [
				V("div", dT, [V("span", fT, O(e.number) + ".", 1), V("span", pT, O(e.text), 1)]),
				V("div", mT, [V("span", null, O(e.syllables) + " сл.", 1), V("i", { style: E({ width: e.width + "%" }) }, null, 4)]),
				V("span", {
					class: D(["sb-poetry-letter", { "sb-poetry-letter-match": e.rhyme }]),
					title: e.repeat ? "Совпадение последнего слова" : e.rhyme ? "Предполагаемая рифма" : "Метка окончания"
				}, O(e.mark), 11, hT)
			]))), 128))]),
			r.value.rowCount > 120 ? (z(), B("p", gT, " Показаны первые 120 строк из " + O(r.value.rowCount) + "; статистика рассчитана по всему тексту. ", 1)) : W("", !0),
			r.value.frequent.length ? (z(), B("div", _T, [t[2] ||= V("strong", null, "Повторяющиеся слова:", -1), (z(!0), B(R, null, L(r.value.frequent, (e) => (z(), B("span", { key: e.word }, O(e.word) + " · " + O(e.count), 1))), 128))])) : W("", !0),
			V("div", vT, [t[3] ||= V("h4", null, "На что обратить внимание", -1), V("ul", null, [(z(!0), B(R, null, L(r.value.suggestions, (e, t) => (z(), B("li", { key: t }, O(e), 1))), 128))])]),
			t[5] ||= V("p", { class: "sb-poetry-footnote" }, " Анализ ориентировочный: счёт гласных не равен точной метрической скансии, совпадение окончаний не гарантирует рифму, а вокальная удобность зависит от темпа и мелодии. Исходный текст автоматически не изменяется. ", -1)
		], 64)) : (z(), B("p", rT, O(r.value.message), 1));
	}
}, bT = {
	key: 0,
	class: "sb-stress-ambig-clear"
}, xT = { class: "sb-stress-ambig-heading" }, ST = { class: "sb-stress-ambig-variants" }, CT = ["data-word", "data-variant"], wT = {
	key: 0,
	class: "sb-poetry-small"
}, TT = {
	__name: "PoetryAmbiguities",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Zt(t.api.ambiguities()), r = K(() => n.value || {
			count: 0,
			words: [],
			total: 0
		});
		function i() {
			n.value = t.api.ambiguities();
		}
		return I(() => window.addEventListener("sunoboom:poetry-stress-updated", i)), vr(() => window.removeEventListener("sunoboom:poetry-stress-updated", i)), (e, t) => r.value.count ? (z(), B(R, { key: 1 }, [
			V("div", xT, " 🔴 Требуют проверки: " + O(r.value.count) + " вхождений (" + O(r.value.total) + " разных слов). Нажми нужный вариант для каждого вхождения. ", 1),
			(z(!0), B(R, null, L(r.value.words, (e) => (z(), B("div", {
				key: e.key,
				class: "sb-stress-ambig-choice"
			}, [V("strong", null, O(e.key) + O(e.count > 1 ? " ×" + e.count : ""), 1), V("div", ST, [(z(!0), B(R, null, L(e.variants, (t) => (z(), B("button", {
				key: t,
				type: "button",
				"data-action": "sb-poetry-stress-choice",
				"data-word": e.key,
				"data-variant": t,
				title: "Указать ударение для следующего вхождения"
			}, O(t), 9, CT))), 128))])]))), 128)),
			r.value.total > 30 ? (z(), B("p", wT, " Показаны первые 30 разных слов; другие можно исправить вручную. ")) : W("", !0)
		], 64)) : (z(), B("p", bT, " ✓ Все найденные неоднозначные слова проверены. "));
	}
};
// src/vue/poetry/legacyPoetryBridge.js
function ET({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_POETRY, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = !1, i = /* @__PURE__ */ new Map();
	function a() {
		if (r) return;
		let a = [[
			"analysis",
			"#sb-poetry-result",
			yT
		], [
			"ambiguities",
			"#sb-poetry-ambiguous-choices",
			TT
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
var DT = { class: "sb-vt-field" }, OT = ["value"], kT = ["value"], AT = {
	class: "sb-vt-hint",
	id: "sb-vt-mode-hint"
}, jT = { class: "sb-vt-grid" }, MT = { class: "sb-vt-field" }, NT = ["value"], PT = ["value"], FT = { class: "sb-vt-field" }, IT = ["value"], LT = ["value"], RT = {
	key: 0,
	class: "sb-vt-field"
}, zT = ["value"], BT = ["value"], VT = { class: "sb-vt-intensity" }, HT = { class: "sb-vt-between" }, UT = { id: "sb-vt-intensity-label" }, WT = ["value"], GT = { class: "sb-vt-options" }, KT = ["data-vt-pref", "checked"], qT = {
	key: 1,
	class: "sb-vt-consent",
	id: "sb-vt-consent-row"
}, JT = { class: "sb-vt-buttons" }, YT = ["disabled"], XT = {
	id: "sb-vt-result",
	"aria-live": "polite"
}, ZT = {
	key: 0,
	class: "sb-vt-draft"
}, QT = { class: "sb-vt-draft-head" }, $T = { class: "sb-vt-method" }, eE = { class: "sb-vt-section-list" }, tE = { class: "sb-vt-section-heading" }, nE = { class: "sb-vt-section-controls" }, rE = [
	"data-vt-preset",
	"value",
	"aria-label"
], iE = ["value"], aE = [
	"data-vt-cue",
	"value",
	"aria-label"
], oE = { class: "sb-vt-field" }, sE = ["value"], cE = {
	class: "sb-vt-small",
	id: "sb-vt-preview-state"
}, lE = {
	__name: "PerformanceTags",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Zt(t.api.snapshot()), r = K(() => n.value?.prefs || {}), i = K(() => n.value?.draft || null), a = [
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
		return I(() => window.addEventListener("sunoboom:tags-updated", l)), vr(() => window.removeEventListener("sunoboom:tags-updated", l)), (e, t) => (z(), B(R, null, [
			t[12] ||= V("div", { class: "sb-vt-header" }, [V("span", { class: "sb-vt-symbol" }, "🎭"), V("div", null, [V("h3", null, "Генератор тегов исполнения"), V("p", null, "Вокальная драматургия по секциям. Без изменения слов песни; результат можно проверить и применить только вручную.")])], -1),
			V("div", DT, [t[0] ||= V("label", { for: "sb-vt-mode" }, "Способ генерации", -1), V("select", {
				id: "sb-vt-mode",
				"data-vt-pref": "mode",
				value: r.value.mode
			}, [(z(), B(R, null, L(a, ([e, t]) => V("option", {
				key: e,
				value: e
			}, O(t), 9, kT)), 64))], 8, OT)]),
			V("p", AT, O(n.value.modeHint), 1),
			V("div", jT, [V("div", MT, [t[1] ||= V("label", { for: "sb-vt-source" }, "Источник текста", -1), V("select", {
				id: "sb-vt-source",
				"data-vt-pref": "source",
				value: r.value.source
			}, [(z(), B(R, null, L(s, ([e, t]) => V("option", {
				key: e,
				value: e
			}, O(t), 9, PT)), 64))], 8, NT)]), V("div", FT, [t[2] ||= V("label", { for: "sb-vt-density" }, "Детализация метатегов", -1), V("select", {
				id: "sb-vt-density",
				"data-vt-pref": "density",
				value: r.value.density
			}, [(z(), B(R, null, L(o, ([e, t]) => V("option", {
				key: e,
				value: e
			}, O(t), 9, LT)), 64))], 8, IT)])]),
			n.value.artists?.length ? (z(), B("div", RT, [t[4] ||= V("label", { for: "sb-vt-artist" }, "Учесть «ДНК артиста» (необязательно)", -1), V("select", {
				id: "sb-vt-artist",
				"data-vt-pref": "artistId",
				value: r.value.artistId
			}, [t[3] ||= V("option", { value: "" }, "Без привязки к артисту", -1), (z(!0), B(R, null, L(n.value.artists, (e) => (z(), B("option", {
				key: e.id,
				value: e.id
			}, O(e.name), 9, BT))), 128))], 8, zT)])) : W("", !0),
			V("div", VT, [
				V("div", HT, [t[5] ||= V("label", { for: "sb-vt-intensity" }, "Максимальная интенсивность исполнения", -1), V("strong", UT, O(r.value.intensity) + " / 5", 1)]),
				V("input", {
					type: "range",
					id: "sb-vt-intensity",
					min: "1",
					max: "5",
					step: "1",
					value: r.value.intensity,
					"data-vt-pref": "intensity"
				}, null, 8, WT),
				t[6] ||= V("div", { class: "sb-vt-between sb-vt-scale" }, [V("span", null, "Сдержанная"), V("span", null, "Экспрессивная")], -1)
			]),
			V("div", GT, [(z(), B(R, null, L(c, ([e, t]) => V("label", { key: e }, [V("input", {
				type: "checkbox",
				"data-vt-pref": e,
				checked: r.value[e]
			}, null, 8, KT), U(" " + O(t), 1)])), 64))]),
			n.value.hasEndpoint ? (z(), B("label", qT, [...t[7] ||= [V("input", {
				type: "checkbox",
				id: "sb-vt-consent"
			}, null, -1), U(" Разрешаю отправить выбранный текст песни на защищённый сервер для анализа Gemini. ", -1)]])) : W("", !0),
			V("div", JT, [V("button", {
				type: "button",
				class: "btn primary",
				"data-action": "vt-generate",
				disabled: n.value.busy
			}, "✨ Создать предпросмотр", 8, YT), t[8] ||= V("span", { class: "sb-vt-note" }, "Никакого автоматического применения к Lyrics.", -1)]),
			V("div", {
				id: "sb-vt-notice",
				class: D(["sb-vt-notice", n.value.notice?.kind]),
				role: "status",
				"aria-live": "polite"
			}, O(n.value.notice?.text), 3),
			V("div", XT, [i.value ? (z(), B("div", ZT, [
				V("div", QT, [V("h4", null, "Предпросмотр · " + O(i.value.sections.length) + " секций", 1), V("span", $T, O(i.value.method), 1)]),
				t[10] ||= V("p", { class: "sb-vt-small" }, " Проверь каждую секцию. Теги можно выбрать из списка или переписать вручную. Оригинальные строки песни остаются неизменными. ", -1),
				V("div", eE, [(z(!0), B(R, null, L(i.value.sections, (e, t) => (z(), B("div", {
					key: e.id,
					class: "sb-vt-section"
				}, [V("div", tE, [V("strong", null, O(e.label), 1), V("span", null, O(t + 1) + "/" + O(i.value.sections.length), 1)]), V("div", nE, [V("select", {
					"data-vt-preset": t,
					value: i.value.tags[t],
					"aria-label": "Готовые теги для " + e.label
				}, [(z(!0), B(R, null, L(n.value.presets, ([e, t]) => (z(), B("option", {
					key: e,
					value: e
				}, O(t), 9, iE))), 128))], 8, rE), V("input", {
					"data-vt-cue": t,
					value: i.value.tags[t],
					maxlength: "165",
					placeholder: "Например: Warm Emotional Vocals",
					"aria-label": "Тег исполнения " + e.label
				}, null, 8, aE)])]))), 128))]),
				V("div", oE, [t[9] ||= V("label", { for: "sb-vt-preview" }, " Готовый Lyrics — разрешено редактировать только инструкции, не слова песни ", -1), V("textarea", {
					id: "sb-vt-preview",
					spellcheck: "false",
					rows: "13",
					maxlength: "25000",
					value: i.value.preview
				}, null, 8, sE)]),
				V("p", cE, O(n.value.previewState), 1),
				t[11] ||= oa("<div class=\"sb-vt-draft-actions\"><button type=\"button\" class=\"btn primary\" data-action=\"vt-apply\"> ✓ Применить к Lyrics </button><button type=\"button\" class=\"btn ghost\" data-action=\"vt-copy\"> Копировать предпросмотр </button><button type=\"button\" class=\"btn ghost\" data-action=\"vt-refresh\"> Обновить предпросмотр </button><button type=\"button\" class=\"btn ghost\" data-action=\"vt-cancel\"> Отменить </button></div>", 1)
			])) : W("", !0)])
		], 64));
	}
};
// src/vue/poetry/legacyTagsBridge.js
function uE({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_TAGS, n = document.getElementById("app");
	if (!t || !n || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vt-workbench");
		if (r?.target === a || (r &&= (r.unmount(), null), !a || !t.snapshot())) return;
		let o = e(a, lE, { api: t });
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
var dE = tg(), fE = /* @__PURE__ */ new WeakMap();
function pE(e) {
	return typeof document > "u" ? null : typeof e == "string" ? document.querySelector(e) : e;
}
function $(e, t, n = {}, { vueRouter: r = !1 } = {}) {
	let i = pE(e);
	if (!i || i.nodeType !== 1 || !t) return null;
	let a = fE.get(i);
	a && a.unmount();
	let o = i.innerHTML, s = Uo(bv, {
		component: t,
		componentProps: n
	});
	s.use(dE), r && s.use(ev);
	try {
		s.mount(i);
	} catch (e) {
		return i.innerHTML = o, console.warn("[SUNOBOOM] Vue mount failed; legacy navigation retained.", e), null;
	}
	return fE.set(i, s), () => {
		fE.get(i) === s && (s.unmount(), fE.delete(i));
	};
}
function mE(e) {
	let t = pE(e);
	if (!t) return;
	let n = fE.get(t);
	n && (n.unmount(), fE.delete(t));
}
function hE() {
	return Hv({
		mountVueFeature: $,
		unmountVueFeature: mE
	});
}
function gE() {
	return Dy({ mountVueFeature: $ });
}
function _E() {
	return ix({ mountVueFeature: $ });
}
function vE() {
	return Kx({ mountVueFeature: $ });
}
function yE() {
	return zS({ mountVueFeature: $ });
}
function bE() {
	return dC({ mountVueFeature: $ });
}
function xE() {
	return nT({ mountVueFeature: $ });
}
function SE() {
	return ET({ mountVueFeature: $ });
}
function CE() {
	return uE({ mountVueFeature: $ });
}
function wE() {
	return zh({ mountVueFeature: $ });
}
function TE() {
	return os({ mountVueFeature: $ });
}
function EE() {
	return Ds({ mountVueFeature: $ });
}
function DE() {
	return bs({ mountVueFeature: $ });
}
function OE() {
	return hc({ mountVueFeature: $ });
}
function kE() {
	return Oc({ mountVueFeature: $ });
}
function AE() {
	return Cl({ mountVueFeature: $ });
}
function jE() {
	return au({ mountVueFeature: $ });
}
function ME() {
	return fu({ mountVueFeature: $ });
}
function NE() {
	return Ru({ mountVueFeature: $ });
}
function PE() {
	return fd({ mountVueFeature: $ });
}
function FE() {
	return Pd({ mountVueFeature: $ });
}
function IE() {
	return bf({ mountVueFeature: $ });
}
function LE() {
	return mp({ mountVueFeature: $ });
}
function RE() {
	return xp({ mountVueFeature: $ });
}
function zE() {
	return om({ mountVueFeature: $ });
}
function BE() {
	return pm({ mountVueFeature: $ });
}
function VE() {
	return Hm({ mountVueFeature: $ });
}
function HE() {
	return _h({ mountVueFeature: $ });
}
export { $ as mountVueFeature, gE as startLegacyAcademy, FE as startLegacyAccountSettings, xE as startLegacyArranger, NE as startLegacyArtistDNA, PE as startLegacyArtistDNAEditor, ME as startLegacyArtistManager, bE as startLegacyAuditor, _E as startLegacyGenreDetail, TE as startLegacyIdeaCollections, wE as startLegacyIdeaEditor, OE as startLegacyLibrary, yE as startLegacyMixer, hE as startLegacyNavigation, LE as startLegacyPlayerAB, IE as startLegacyPlayerLab, SE as startLegacyPoetry, zE as startLegacyProducerSongDetail, RE as startLegacyProducerSongList, DE as startLegacyPromptCollection, EE as startLegacyPromptEditor, kE as startLegacySongCards, AE as startLegacySongDetail, jE as startLegacySongEditor, vE as startLegacyStudio, CE as startLegacyTags, VE as startLegacyTrackPassportDetail, HE as startLegacyTrackPassportEditor, BE as startLegacyTrackPassportList, mE as unmountVueFeature };
