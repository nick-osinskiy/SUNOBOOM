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
		let o = Reflect.get(e, t, /* @__PURE__ */ P(e) ? e : n);
		if ((_(t) ? vt.has(t) : _t(t)) || (r || j(e, "get", t), i)) return o;
		if (/* @__PURE__ */ P(o)) {
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
			if (!/* @__PURE__ */ Gt(n) && !/* @__PURE__ */ Wt(n) && (i = /* @__PURE__ */ N(i), n = /* @__PURE__ */ N(n)), !a && /* @__PURE__ */ P(i) && !/* @__PURE__ */ P(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : u(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ P(e) ? e : r);
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
function P(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function F(e) {
	return Zt(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Xt(e) {
	return Zt(e, !0);
}
function Zt(e, t) {
	return /* @__PURE__ */ P(e) ? e : new Qt(e, t);
}
var Qt = class {
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
function $t(e) {
	return /* @__PURE__ */ P(e) ? e.value : e;
}
var en = {
	get: (e, t, n) => t === "__v_raw" ? e : $t(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ P(i) && !/* @__PURE__ */ P(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function tn(e) {
	return /* @__PURE__ */ Ut(e) ? e : new Proxy(e, en);
}
var nn = class {
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
	let { immediate: a, deep: o, once: s, scheduler: l, augmentJob: u, call: f } = i, p = (e) => o ? e : /* @__PURE__ */ Gt(e) || o === !1 || o === 0 ? un(e, 1) : un(e), m, g, _, v, y = !1, b = !1;
	if (/* @__PURE__ */ P(e) ? (g = () => e.value, y = /* @__PURE__ */ Gt(e)) : /* @__PURE__ */ Ut(e) ? (g = () => p(e), y = !0) : d(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ Ut(e) || /* @__PURE__ */ Gt(e)), g = () => e.map((e) => {
		if (/* @__PURE__ */ P(e)) return e.value;
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
	let S = b ? Array(e.length).fill(an) : an, te = (e) => {
		if (m.flags & 1 && (m.dirty || e)) {
			if (n) {
				let t = m.run();
				if (e || o || y || (b ? t.some((e, t) => w(e, S[t])) : w(t, S))) {
					let e = sn;
					Je();
					try {
						_ && _(), sn = m;
						let e = [
							t,
							S === an ? void 0 : b && S[0] === an ? [] : S,
							v
						];
						S = t, f ? f(n, 3, e) : n(...e);
					} finally {
						sn = e, Ye();
					}
				}
			} else m.run();
		}
	};
	return u && u(te), m = new Ne(g), m.scheduler = l ? () => l(te, !1) : te, v = (e) => cn(e, !1, m), _ = m.onStop = () => {
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
	if (n.set(e, t), t--, /* @__PURE__ */ P(e)) un(e.value, t, n);
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
			Je(), dn(s, null, 10, [
				e,
				i,
				o
			]), Ye();
			return;
		}
	}
	mn(e, r, o, i, c);
}
function mn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var hn = [], gn = -1, _n = [], vn = null, yn = 0, bn = /* @__PURE__ */ Promise.resolve(), xn = null;
function Sn(e) {
	let t = xn || bn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function Cn(e) {
	let t = gn + 1, n = hn.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = hn[r], a = jn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function wn(e) {
	if (!(e.flags & 1)) {
		let t = jn(e), n = hn[hn.length - 1];
		!n || !(e.flags & 2) && t >= jn(n) ? hn.push(e) : hn.splice(Cn(t), 0, e), e.flags |= 1, Tn();
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
	for (; r < hn.length; r++) {
		let n = hn[r];
		if (n && n.flags & 2) {
			if (e && n.id !== e.uid || t !== void 0 && !(n.id >= t)) continue;
			hn.splice(r, 1), r = e ? r - 1 : gn, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
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
		for (gn = 0; gn < hn.length; gn++) {
			let e = hn[gn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), dn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; gn < hn.length; gn++) {
			let e = hn[gn];
			e && (e.flags &= -2);
		}
		gn = -1, hn.length = 0, On(e), xn = null, (hn.length || _n.length) && Mn(e);
	}
}
var Nn = null, Pn = null;
function Fn(e) {
	let t = Nn;
	return Nn = e, Pn = e && e.type.__scopeId || null, t;
}
function In(e, t = Nn, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && Yi(-1);
		let i = Fn(t), a = Gi.length, o;
		try {
			o = e(...n);
		} finally {
			for (let e = Gi.length; e > a; e--) qi();
			Fn(i), r._d && Yi(1);
		}
		return o;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function I(e, n) {
	if (Nn === null) return e;
	let r = Aa(Nn), i = e.dirs ||= [];
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
function Ln(e, t, n, r) {
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
		u && (Je(), fn(u, n, 8, [
			e.el,
			l,
			i,
			t
		]), Ye());
	}
}
function Rn(e, t) {
	if (ha) {
		let n = ha.provides, r = ha.parent && ha.parent.provides;
		r === n && (n = ha.provides = Object.create(r)), n[e] = t;
	}
}
function zn(e, t, n = !1) {
	let r = ga();
	if (r || Xr) {
		let i = Xr ? Xr._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && h(t) ? t.call(r && r.proxy) : t;
	}
}
var Bn = /* @__PURE__ */ Symbol.for("v-scx"), Vn = () => zn(Bn);
function Hn(e, t, n) {
	return Un(e, t, n);
}
function Un(e, n, i = t) {
	let { immediate: a, deep: o, flush: c, once: l } = i, u = s({}, i), d = n && a || !n && c !== "post", f;
	if (Sa) {
		if (c === "sync") {
			let e = Vn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = r, e.resume = r, e.pause = r, e;
		}
	}
	let p = ha;
	u.call = (e, t, n) => fn(e, p, t, n);
	let m = !1;
	c === "post" ? u.scheduler = (e) => {
		e.i = p, Oi(e, p && p.suspense);
	} : c !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : wn(e);
	}), u.augmentJob = (e) => {
		n && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = ln(e, n, u);
	return Sa && (f ? f.push(h) : d && h()), h;
}
function Wn(e, t, n) {
	let r = this.proxy, i = g(e) ? e.includes(".") ? Gn(r, e) : () => r[e] : e.bind(r, r), a;
	h(t) ? a = t : (a = t.handler, n = t);
	let o = ya(this), s = Un(i, a.bind(r), n);
	return o(), s;
}
function Gn(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Kn = /* @__PURE__ */ Symbol("_vte"), qn = (e) => e.__isTeleport, Jn = /* @__PURE__ */ Symbol("_leaveCb");
function Yn(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== Ui) {
			t = n;
			break;
		}
	}
	return t;
}
function Xn(e) {
	if (!or(e)) return qn(e.type) && e.children ? Yn(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && h(n.default)) return n.default();
	}
}
function Zn(e, t) {
	if (e.shapeFlag & 6 && e.component) {
		e.transition = t;
		let n = e.component.subTree;
		Zn(qn(n.type) && Xn(n) || n, t);
	} else if (e.shapeFlag & 128) {
		let n = e.suspense;
		if (n) {
			let e = n.isHydrating ? n.pendingBranch : n.activeBranch;
			e && Zn(e, t.clone(e));
		} else e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback);
	} else if (e.transition = t, e.type === z && d(e.children)) {
		let n = ri(e.children, !1);
		n && Zn(n, t);
	}
}
function Qn(e) {
	if (e.component) return Qn(e.component.subTree);
	if (e.type === z) {
		let t = d(e.children) && ri(e.children, !1);
		return t ? Qn(t) : void 0;
	}
	if (e.type !== Ui) return e;
}
// @__NO_SIDE_EFFECTS__
function $n(e, t) {
	return h(e) ? /* @__PURE__ */ s({ name: e.name }, t, { setup: e }) : e;
}
function er(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function tr(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var nr = /* @__PURE__ */ new WeakMap();
function rr(e, n, r, a, o = !1) {
	if (d(e)) {
		e.forEach((e, t) => rr(e, n && (d(n) ? n[t] : n), r, a, o));
		return;
	}
	if (ar(a) && !o) {
		a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && rr(e, n, r, a.component.subTree);
		return;
	}
	let s = a.shapeFlag & 4 ? Aa(a.component) : a.el, l = o ? null : s, { i: f, r: p } = e, m = n && n.r, _ = f.refs === t ? f.refs = {} : f.refs, v = f.setupState, y = /* @__PURE__ */ N(v), b = v === t ? i : (e) => !tr(_, e) && u(y, e), x = (e, t) => !(t && tr(_, t));
	if (m != null && m !== p) {
		if (ir(n), g(m)) _[m] = null, b(m) && (v[m] = null);
		else if (/* @__PURE__ */ P(m)) {
			let e = n;
			x(m, e.k) && (m.value = null), e.k && (_[e.k] = null);
		}
	}
	if (h(p)) dn(p, f, 12, [l, _]);
	else {
		let t = g(p), n = /* @__PURE__ */ P(p);
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
					i(), nr.delete(e);
				};
				t.id = -1, nr.set(e, t), Oi(t, r);
			} else ir(e), i();
		}
	}
}
function ir(e) {
	let t = nr.get(e);
	t && (t.flags |= 8, nr.delete(e));
}
fe().requestIdleCallback, fe().cancelIdleCallback;
var ar = (e) => !!e.type.__asyncLoader, or = (e) => e.type.__isKeepAlive;
function sr(e, t) {
	lr(e, "a", t);
}
function cr(e, t) {
	lr(e, "da", t);
}
function lr(e, t, n = ha) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (dr(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) or(e.parent.vnode) && ur(r, t, n, e), e = e.parent;
	}
}
function ur(e, t, n, r) {
	let i = dr(t, e, r, !0), a = dr("um", () => c(r[t], i), n);
	a.flags = 16;
}
function dr(e, t, n = ha, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Je();
			let i = ya(n), a = fn(t, n, e, r);
			return i(), Ye(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var fr = (e) => (t, n = ha) => {
	Sa && e !== "sp" || dr(e, (...e) => t(...e), n);
}, pr = fr("bm"), L = fr("m"), mr = fr("bu"), hr = fr("u"), gr = fr("bum"), _r = fr("um"), vr = fr("sp"), yr = fr("rtg"), br = fr("rtc");
function xr(e, t = ha) {
	dr("ec", e, t);
}
var Sr = "components", Cr = /* @__PURE__ */ Symbol.for("v-ndc");
function wr(e) {
	return g(e) ? Tr(Sr, e, !1) || e : e || Cr;
}
function Tr(e, t, n = !0, r = !1) {
	let i = Nn || ha;
	if (i) {
		let n = i.type;
		if (e === Sr) {
			let e = ja(n, !1);
			if (e && (e === t || e === C(t) || e === se(C(t)))) return n;
		}
		let a = Er(i[e] || n[e], t) || Er(i.appContext[e], t);
		return !a && r ? n : a;
	}
}
function Er(e, t) {
	return e && (e[t] || e[C(t)] || e[se(C(t))]);
}
function R(e, t, n, r) {
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
var Dr = (e) => e ? xa(e) ? Aa(e) : Dr(e.parent) : null, Or = /* @__PURE__ */ s(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => Dr(e.parent),
	$root: (e) => Dr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Lr(e),
	$forceUpdate: (e) => e.f ||= () => {
		wn(e.update);
	},
	$nextTick: (e) => e.n ||= Sn.bind(e.proxy),
	$watch: (e) => Wn.bind(e)
}), kr = (e, n) => e !== t && !e.__isScriptSetup && u(e, n), Ar = {
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
			else if (kr(i, n)) return s[n] = 1, i[n];
			else if (a !== t && u(a, n)) return s[n] = 2, a[n];
			else if (u(o, n)) return s[n] = 3, o[n];
			else if (r !== t && u(r, n)) return s[n] = 4, r[n];
			else Mr && (s[n] = 0);
		}
		let d = Or[n], f, p;
		if (d) return n === "$attrs" && j(e.attrs, "get", ""), d(e);
		if ((f = c.__cssModules) && (f = f[n])) return f;
		if (r !== t && u(r, n)) return s[n] = 4, r[n];
		if (p = l.config.globalProperties, u(p, n)) return p[n];
	},
	set({ _: e }, n, r) {
		let { data: i, setupState: a, ctx: o } = e;
		return kr(a, n) ? (a[n] = r, !0) : i !== t && u(i, n) ? (i[n] = r, !0) : u(e.props, n) || n[0] === "$" && n.slice(1) in e ? !1 : (o[n] = r, !0);
	},
	has({ _: { data: e, setupState: n, accessCache: r, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(r[c] || e !== t && c[0] !== "$" && u(e, c) || kr(n, c) || u(o, c) || u(i, c) || u(Or, c) || u(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? u(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function jr(e) {
	return d(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var Mr = !0;
function Nr(e) {
	let t = Lr(e), n = e.proxy, i = e.ctx;
	Mr = !1, t.beforeCreate && Fr(t.beforeCreate, e, "bc");
	let { data: a, computed: o, methods: s, watch: c, provide: l, inject: u, created: f, beforeMount: p, mounted: m, beforeUpdate: g, updated: _, activated: y, deactivated: b, beforeDestroy: x, beforeUnmount: ee, destroyed: S, unmounted: te, render: ne, renderTracked: re, renderTriggered: ie, errorCaptured: C, serverPrefetch: ae, expose: oe, inheritAttrs: se, components: ce, directives: w, filters: le } = t;
	if (u && Pr(u, i, null), s) for (let e in s) {
		let t = s[e];
		h(t) && (i[e] = t.bind(n));
	}
	if (a) {
		let t = a.call(n, n);
		v(t) && (e.data = /* @__PURE__ */ M(t));
	}
	if (Mr = !0, o) for (let e in o) {
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
	if (c) for (let e in c) Ir(c[e], i, n, e);
	if (l) {
		let e = h(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Rn(t, e[t]);
		});
	}
	f && Fr(f, e, "c");
	function T(e, t) {
		d(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (T(pr, p), T(L, m), T(mr, g), T(hr, _), T(sr, y), T(cr, b), T(xr, C), T(br, re), T(yr, ie), T(gr, ee), T(_r, te), T(vr, ae), d(oe)) {
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
	ne && e.render === r && (e.render = ne), se != null && (e.inheritAttrs = se), ce && (e.components = ce), w && (e.directives = w), ae && er(e);
}
function Pr(e, t, n = r) {
	d(e) && (e = Hr(e));
	for (let n in e) {
		let r = e[n], i;
		i = v(r) ? "default" in r ? zn(r.from || n, r.default, !0) : zn(r.from || n) : zn(r), /* @__PURE__ */ P(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Fr(e, t, n) {
	fn(d(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Ir(e, t, n, r) {
	let i = r.includes(".") ? Gn(n, r) : () => n[r];
	if (g(e)) {
		let n = t[e];
		h(n) && Hn(i, n);
	} else if (h(e)) Hn(i, e.bind(n));
	else if (v(e)) {
		if (d(e)) e.forEach((e) => Ir(e, t, n, r));
		else {
			let r = h(e.handler) ? e.handler.bind(n) : t[e.handler];
			h(r) && Hn(i, r, e);
		}
	}
}
function Lr(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => Rr(c, e, o, !0)), Rr(c, t, o)), v(t) && a.set(t, c), c;
}
function Rr(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && Rr(e, a, n, !0), i && i.forEach((t) => Rr(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = zr[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var zr = {
	data: Br,
	props: Gr,
	emits: Gr,
	methods: Wr,
	computed: Wr,
	beforeCreate: Ur,
	created: Ur,
	beforeMount: Ur,
	mounted: Ur,
	beforeUpdate: Ur,
	updated: Ur,
	beforeDestroy: Ur,
	beforeUnmount: Ur,
	destroyed: Ur,
	unmounted: Ur,
	activated: Ur,
	deactivated: Ur,
	errorCaptured: Ur,
	serverPrefetch: Ur,
	components: Wr,
	directives: Wr,
	watch: Kr,
	provide: Br,
	inject: Vr
};
function Br(e, t) {
	return t ? e ? function() {
		return s(h(e) ? e.call(this, this) : e, h(t) ? t.call(this, this) : t);
	} : t : e;
}
function Vr(e, t) {
	return Wr(Hr(e), Hr(t));
}
function Hr(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function Ur(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Wr(e, t) {
	return e ? s(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Gr(e, t) {
	return e ? d(e) && d(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : s(/* @__PURE__ */ Object.create(null), jr(e), jr(t ?? {})) : t;
}
function Kr(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = s(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = Ur(e[r], t[r]);
	return n;
}
function qr() {
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
var Jr = 0;
function Yr(e, t) {
	return function(n, r = null) {
		h(n) || (n = s({}, n)), r != null && !v(r) && (r = null);
		let i = qr(), a = /* @__PURE__ */ new WeakSet(), o = [], c = !1, l = i.app = {
			_uid: Jr++,
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
					let u = l._ceVNode || U(n, r);
					return u.appContext = i, s === !0 ? s = "svg" : s === !1 && (s = void 0), o && t ? t(u, a) : e(u, a, s), c = !0, l._container = a, a.__vue_app__ = l, Aa(u.component);
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
				let t = Xr;
				Xr = l;
				try {
					return e();
				} finally {
					Xr = t;
				}
			}
		};
		return l;
	};
}
var Xr = null, Zr = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${C(t)}Modifiers`] || e[`${oe(t)}Modifiers`];
function Qr(e, n, ...r) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || t, a = r, o = n.startsWith("update:"), s = o && Zr(i, n.slice(7));
	s && (s.trim && (a = r.map((e) => g(e) ? e.trim() : e)), s.number && (a = a.map(ue)));
	let c, l = i[c = ce(n)] || i[c = ce(C(n))];
	!l && o && (l = i[c = ce(oe(n))]), l && fn(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, fn(u, e, 6, a);
	}
}
var $r = /* @__PURE__ */ new WeakMap();
function ei(e, t, n = !1) {
	let r = n ? $r : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, c = !1;
	if (!h(e)) {
		let r = (e) => {
			let n = ei(e, t, !0);
			n && (c = !0, s(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !c ? (v(e) && r.set(e, null), null) : (d(a) ? a.forEach((e) => o[e] = null) : s(o, a), v(e) && r.set(e, o), o);
}
function ti(e, t) {
	return !e || !a(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), u(e, t[0].toLowerCase() + t.slice(1)) || u(e, oe(t)) || u(e, t));
}
function ni(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: s, attrs: c, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = Fn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = oa(u.call(t, e, d, f, m, p, h)), y = c;
		} else {
			let e = t;
			v = oa(e.length > 1 ? e(f, {
				attrs: c,
				slots: s,
				emit: l
			}) : e(f, null)), y = t.props ? c : ii(c);
		}
	} catch (t) {
		Gi.length = 0, pn(t, e, 1), v = U(Ui);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(o) && (y = ai(y, a)), b = ia(b, y, !1, !0));
	}
	return n.dirs && (b = ia(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && Zn(qn(b.type) && Xn(b) || b, n.transition), v = b, Fn(_), v;
}
function ri(e, t = !0) {
	let n;
	for (let t = 0; t < e.length; t++) {
		let r = e[t];
		if (Qi(r)) {
			if (r.type !== Ui || r.children === "v-if") {
				if (n) return;
				n = r;
			}
		} else return;
	}
	return n;
}
var ii = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || a(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, ai = (e, t) => {
	let n = {};
	for (let r in e) o(r) && r.slice(9) in t || (n[r] = e[r]);
	return n;
};
function oi(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? si(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (ci(o, r, n) && !ti(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? !o || si(r, o, l) : !!o;
	return !1;
}
function si(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (!u(e, a) || ci(t, e, a) && !ti(n, a)) return !0;
	}
	return !1;
}
function ci(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && v(r) && v(i) ? !we(r, i) : r !== i;
}
function li({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var ui = {}, di = () => Object.create(ui), fi = (e) => Object.getPrototypeOf(e) === ui;
function pi(e, t, n, r = !1) {
	let i = {}, a = di();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), hi(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	e.props = n ? r ? i : /* @__PURE__ */ Bt(i) : e.type.props ? i : a, e.attrs = a;
}
function mi(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ N(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (ti(e.emitsOptions, o)) continue;
				let d = t[o];
				if (c) {
					if (u(a, o)) d !== a[o] && (a[o] = d, l = !0);
					else {
						let t = C(o);
						i[t] = gi(c, s, t, d, e, !1);
					}
				} else d !== a[o] && (a[o] = d, l = !0);
			}
		}
	} else {
		hi(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) t && (u(t, a) || (r = oe(a)) !== a && u(t, r)) || (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = gi(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) t && u(t, e) || (delete a[e], l = !0);
	}
	l && at(e.attrs, "set", "");
}
function hi(e, n, r, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (n) for (let t in n) {
		if (ne(t)) continue;
		let l = n[t], d;
		a && u(a, d = C(t)) ? !o || !o.includes(d) ? r[d] = l : (c ||= {})[d] = l : ti(e.emitsOptions, t) || t in i && l === i[t] || (i[t] = l, s = !0);
	}
	if (o) {
		let n = /* @__PURE__ */ N(r), i = c || t;
		for (let t = 0; t < o.length; t++) {
			let s = o[t];
			r[s] = gi(a, n, s, i[s], e, !u(i, s));
		}
	}
	return s;
}
function gi(e, t, n, r, i, a) {
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
var _i = /* @__PURE__ */ new WeakMap();
function vi(e, r, i = !1) {
	let a = i ? _i : r.propsCache, o = a.get(e);
	if (o) return o;
	let c = e.props, l = {}, f = [], p = !1;
	if (!h(e)) {
		let t = (e) => {
			p = !0;
			let [t, n] = vi(e, r, !0);
			s(l, t), n && f.push(...n);
		};
		!i && r.mixins.length && r.mixins.forEach(t), e.extends && t(e.extends), e.mixins && e.mixins.forEach(t);
	}
	if (!c && !p) return v(e) && a.set(e, n), n;
	if (d(c)) for (let e = 0; e < c.length; e++) {
		let n = C(c[e]);
		yi(n) && (l[n] = t);
	}
	else if (c) for (let e in c) {
		let t = C(e);
		if (yi(t)) {
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
function yi(e) {
	return e[0] !== "$" && !ne(e);
}
var bi = (e) => e === "_" || e === "_ctx" || e === "$stable", xi = (e) => d(e) ? e.map(oa) : [oa(e)], Si = (e, t, n) => {
	if (t._n) return t;
	let r = In((...e) => xi(t(...e)), n);
	return r._c = !1, r;
}, Ci = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (bi(n)) continue;
		let i = e[n];
		if (h(i)) t[n] = Si(n, i, r);
		else if (i != null) {
			let e = xi(i);
			t[n] = () => e;
		}
	}
}, wi = (e, t) => {
	let n = xi(t);
	e.slots.default = () => n;
}, Ti = (e, t, n) => {
	for (let r in t) (n || !bi(r)) && (e[r] = t[r]);
}, Ei = (e, t, n) => {
	let r = e.slots = di();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (Ti(r, t, n), n && T(r, "_", e, !0)) : Ci(t, r);
	} else t && wi(e, t);
}, Di = (e, n, r) => {
	let { vnode: i, slots: a } = e, o = !0, s = t;
	if (i.shapeFlag & 32) {
		let e = n._;
		e ? r && e === 1 ? o = !1 : Ti(a, n, r) : (o = !n.$stable, Ci(n, a)), s = n;
	} else n && (wi(e, n), s = { default: 1 });
	if (o) for (let e in a) !bi(e) && s[e] == null && delete a[e];
}, Oi = Vi;
function ki(e) {
	return Ai(e);
}
function Ai(e, i) {
	let a = fe();
	a.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = r, insertStaticContent: _ } = e, v = (e, t, r, i = null, a = null, o = null, s = void 0, c = null, l = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !$i(e, t) && (i = xe(e), D(e, a, o, !0), e = null), t.patchFlag === -2 && (l = !1, t.dynamicChildren = null), t.dynamicChildren && e && e.dynamicChildren && e.dynamicChildren.hasOnce && (t.dynamicChildren === n && (t.dynamicChildren = []), t.dynamicChildren.hasOnce = !0);
		let { type: u, ref: d, shapeFlag: f } = t;
		switch (u) {
			case Hi:
				y(e, t, r, i);
				break;
			case Ui:
				b(e, t, r, i);
				break;
			case Wi:
				e ?? x(t, r, i, s);
				break;
			case z:
				ce(e, t, r, i, a, o, s, c, l);
				break;
			default: f & 1 ? te(e, t, r, i, a, o, s, c, l) : f & 6 ? w(e, t, r, i, a, o, s, c, l) : (f & 64 || f & 128) && u.process(e, t, r, i, a, o, s, c, l, Ce);
		}
		d != null && a ? rr(d, e && e.ref, o, t || e, !t) : d == null && e && e.ref != null && rr(e.ref, null, o, e, !0);
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
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && C(e.children, d, null, r, i, ji(e, a), s, u), _ && Ln(e, null, r, "created"), ie(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !ne(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && ua(f, r, e);
		}
		_ && Ln(e, null, r, "beforeMount");
		let v = Ni(i, g);
		v ? g.beforeEnter(d) : g && !g.persisted && (d[Bi] = !0), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && Oi(() => {
			try {
				f && ua(f, r, e), v && g.enter(d), _ && Ln(e, null, r, "mounted");
			} finally {}
		}, i);
	}, ie = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || zi(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				ie(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, C = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) {
			let c = e[l] = s ? sa(e[l]) : oa(e[l]);
			v(null, c, t, n, r, i, a, o, s);
		}
	}, ae = (e, n, r, i, a, o, s) => {
		let l = n.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = n;
		u |= e.patchFlag & 16;
		let m = e.props || t, h = n.props || t, g;
		if (r && Mi(r, !1), (g = h.onVnodeBeforeUpdate) && ua(g, r, n, e), f && Ln(n, e, r, "beforeUpdate"), r && Mi(r, !0), d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length) && (u = 0, s = !1, d = null), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? oe(e.dynamicChildren, d, l, r, i, ji(n, a), o) : s || pe(e, n, l, null, r, i, ji(n, a), o, !1), u > 0) {
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
		((g = h.onVnodeUpdated) || f) && Oi(() => {
			g && ua(g, r, n, e), f && Ln(n, e, r, "updated");
		}, i);
	}, oe = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el || Ri(c), d = u && (c.type === z || !$i(c, l) || c.shapeFlag & 198) ? m(u) : n;
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
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), C(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (oe(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && Pi(e, t, !0)) : pe(e, t, n, f, i, a, s, c, l);
	}, w = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : T(t, n, r, i, a, o, c) : ue(e, t, c);
	}, T = (e, t, n, r, i, a, o) => {
		let s = e.component = ma(e, r, i);
		if (or(e) && (s.ctx.renderer = Ce), Ca(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, de, o, a), !e.el) {
				let r = s.subTree = U(Ui);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else de(s, e, t, n, i, a, o);
	}, ue = (e, t, n) => {
		let r = t.component = e.component;
		if (oi(e, t, n)) {
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
					let n = Ii(e);
					if (n) {
						t && (t.el = c.el, E(e, t, o)), n.asyncDep.then(() => {
							let t = () => {
								e.job.flags & 8 || (i && i.pendingBranch ? Oi(t, i) : l());
							};
							t.flags = 48, Oi(t, i);
						});
						return;
					}
				}
				let u = t, d;
				Mi(e, !1), t ? (t.el = c.el, E(e, t, o)) : t = c, n && le(n), (d = t.props && t.props.onVnodeBeforeUpdate) && ua(d, s, t, c), Mi(e, !0);
				let f = ni(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el || Ri(p)), xe(p), e, i, a), t.el = f.el, u === null && li(e, f.el), r && Oi(r, i), (d = t.props && t.props.onVnodeUpdated) && Oi(() => ua(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = ar(t);
				if (Mi(e, !1), l && le(l), !m && (o = c && c.onVnodeBeforeMount) && ua(o, d, t), Mi(e, !0), s && Te) {
					let t = () => {
						e.subTree = ni(e), Te(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = ni(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && Oi(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					Oi(() => ua(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && ar(d.vnode) && d.vnode.shapeFlag & 256) && e.a && Oi(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Ne(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => wn(u), Mi(e, !0), l();
	}, E = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, mi(e, t.props, r, n), Di(e, t.children, n), Je(), Dn(e), Ye();
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
			let n = t[p] = l ? sa(t[p]) : oa(t[p]);
			v(e[p], n, r, null, a, o, s, c, l);
		}
		u > d ? be(e, a, o, !0, !1, f) : C(t, r, i, a, o, s, c, l, f);
	}, he = (e, t, r, i, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let n = e[u], i = t[u] = l ? sa(t[u]) : oa(t[u]);
			if ($i(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let n = e[f], i = t[p] = l ? sa(t[p]) : oa(t[p]);
			if ($i(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, n = e < d ? t[e].el : i;
				for (; u <= p;) v(null, t[u] = l ? sa(t[u]) : oa(t[u]), r, n, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) D(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? sa(t[u]) : oa(t[u]);
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
				else for (_ = h; _ <= p; _++) if (S[_ - h] === 0 && $i(n, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? D(n, a, o, !0) : (S[i - h] = u + 1, i >= ee ? ee = i : x = !0, v(n, t[i], r, null, a, o, s, c, l), y++);
			}
			let te = x ? Fi(S) : n;
			for (_ = te.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, n = t[e], f = t[e + 1], p = e + 1 < d ? f.el || Ri(f) : i;
				S[u] === 0 ? v(null, n, r, p, a, o, s, c, l) : x && (_ < 0 || u !== te[_] ? ge(n, r, p, 2) : _--);
			}
		}
	}, ge = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) ge(e.component.subTree, t, n, r);
		else if (d & 128) e.suspense.move(t, n, r);
		else if (d & 64) c.move(e, t, n, Ce);
		else if (c === z) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) ge(u[e], t, n, r);
			o(e.anchor, t, n);
		} else if (c === Wi) ee(e, t, n);
		else if (r !== 2 && d & 1 && l) {
			if (r === 0) l.persisted && !a[Jn] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), Oi(() => l.enter(a), i));
			else {
				let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
					e.ctx.isUnmounted ? s(a) : o(a, t, n);
				}, d = () => {
					let e = a._isLeaving || !!a[Jn];
					a._isLeaving && a[Jn](!0), l.persisted && !e ? u() : r(a, () => {
						u(), c && c();
					});
				};
				i ? i(a, u, d) : d();
			}
		} else o(a, t, n);
	}, D = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if ((d === -2 || l && l.hasOnce) && (i = !1), s != null && (Je(), rr(s, null, n, e, !0), Ye()), p == null || e.ctx && e.ctx !== t || (t.renderCache[p] = void 0), u & 256 && t.ctx.deactivate(e)) return;
		let h = u & 1 && f, g = !ar(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && ua(_, t, e), u & 6) ye(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Ln(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, Ce, r) : l && !l.hasOnce && (a !== z || d > 0 && d & 64) ? be(l, t, n, !1, !0) : (a === z && d & 384 || !i && u & 16) && be(c, t, n), r && _e(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && Oi(() => {
			_ && ua(_, t, e), h && Ln(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, _e = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e, a = t === z;
		if (a && !i) {
			ve(n, r);
			return;
		}
		if (t === Wi) {
			S(e), i && !i.persisted && i.afterLeave && i.afterLeave();
			return;
		}
		let o = a ? Qn(e) : e, c = () => {
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
		Li(c), Li(l), r && le(r), i.stop(), a ? (a.flags |= 8, D(o, e, t, n)) : o && (o.transition = e.vnode.transition, D(o, e, t, n)), s && Oi(s, t);
		let u = () => {
			e.isUnmounted = !0;
		};
		u.flags = 16, Oi(u, t);
	}, be = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) D(e[o], t, n, r, i);
	}, xe = (e) => {
		if (e.shapeFlag & 6) return xe(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Kn];
		return n ? h(n) : t;
	}, Se = (e, t, n) => {
		An(() => {
			e == null ? t._vnode && D(t._vnode, null, null, !0) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e;
		}, e && t._vnode ? void 0 : e && e.component ? e.component.uid : pa());
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
		createApp: Yr(Se, we)
	};
}
function ji({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Mi({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ni(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Pi(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (d(r) && d(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = sa(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Pi(t, a)), a.type === Hi && (a.patchFlag === -1 && (a = i[e] = sa(a)), a.el = t.el), a.type === Ui && !a.el && (a.el = t.el);
	}
}
function Fi(e) {
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
function Ii(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Ii(t);
}
function Li(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Ri(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	if (t) return Ri(t.subTree);
	let n = e.suspense;
	return n && n.activeBranch ? Ri(n.activeBranch) : null;
}
var zi = (e) => e.__isSuspense, Bi = /* @__PURE__ */ Symbol("_deferredEnter");
function Vi(e, t) {
	t && t.pendingBranch ? d(e) ? t.effects.push(...e) : t.effects.push(e) : En(e);
}
var z = /* @__PURE__ */ Symbol.for("v-fgt"), Hi = /* @__PURE__ */ Symbol.for("v-txt"), Ui = /* @__PURE__ */ Symbol.for("v-cmt"), Wi = /* @__PURE__ */ Symbol.for("v-stc"), Gi = [], Ki = null;
function B(e = !1) {
	Gi.push(Ki = e ? null : []);
}
function qi() {
	Gi.pop(), Ki = Gi[Gi.length - 1] || null;
}
var Ji = 1;
function Yi(e, t = !1) {
	Ji += e, e < 0 && Ki && t && (Ki.hasOnce = !0);
}
function Xi(e) {
	return e.dynamicChildren = Ji > 0 ? Ki || n : null, qi(), Ji > 0 && Ki && Ki.push(e), e;
}
function V(e, t, n, r, i, a) {
	return Xi(H(e, t, n, r, i, a, !0));
}
function Zi(e, t, n, r, i) {
	return Xi(U(e, t, n, r, i, !0));
}
function Qi(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function $i(e, t) {
	return e.type === t.type && e.key === t.key;
}
var ea = ({ key: e }) => e ?? null, ta = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : g(e) || /* @__PURE__ */ P(e) || h(e) ? {
	i: Nn,
	r: e,
	k: t,
	f: !!n
} : e);
function H(e, t = null, n = null, r = 0, i = null, a = e === z ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && ea(t),
		ref: t && ta(t),
		scopeId: Pn,
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
		ctx: Nn
	};
	return s ? (ca(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= g(n) ? 8 : 16), Ji > 0 && !o && Ki && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && Ki.push(c), c;
}
var U = na;
function na(e, t = null, n = null, r = 0, i = null, a = !1) {
	if (e && e !== Cr || (e = Ui), Qi(e)) {
		let r = ia(e, t, !0);
		return n && ca(r, n), Ji > 0 && !a && Ki && (r.shapeFlag & 6 ? Ki[Ki.indexOf(e)] = r : Ki.push(r)), r.patchFlag = -2, r;
	}
	if (Ma(e) && (e = e.__vccOpts), t) {
		t = ra(t);
		let { class: e, style: n } = t;
		e && !g(e) && (t.class = D(e)), v(n) && (/* @__PURE__ */ Kt(n) && !d(n) && (n = s({}, n)), t.style = E(n));
	}
	let o = g(e) ? 1 : zi(e) ? 128 : qn(e) ? 64 : v(e) ? 4 : h(e) ? 2 : 0;
	return H(e, t, n, r, i, o, a, !0);
}
function ra(e) {
	return e ? /* @__PURE__ */ Kt(e) ? s({}, e) : fi(e) ? s({}, e[Da] || e) : e : null;
}
function ia(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? la(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && ea(l),
		ref: t && t.ref ? n && a ? d(a) ? a.concat(ta(t)) : [a, ta(t)] : ta(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== z ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && ia(e.ssContent),
		ssFallback: e.ssFallback && ia(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce,
		cacheIndex: e.cacheIndex
	};
	return c && r && Zn(u, c.clone(u)), u;
}
function W(e = " ", t = 0) {
	return U(Hi, null, e, t);
}
function aa(e, t) {
	let n = U(Wi, null, e);
	return n.staticCount = t, n;
}
function G(e = "", t = !1) {
	return t ? (B(), Zi(Ui, null, e)) : U(Ui, null, e);
}
function oa(e) {
	return e == null || typeof e == "boolean" ? U(Ui) : d(e) ? U(z, null, e.slice()) : Qi(e) ? sa(e) : U(Hi, null, String(e));
}
function sa(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : ia(e);
}
function ca(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (d(t)) n = 16;
	else if (typeof t == "object") {
		if (r & 65) {
			let n = t.default;
			n && (n._c && (n._d = !1), ca(e, n()), n._c && (n._d = !0));
			return;
		}
		{
			n = 32;
			let r = t._;
			!r && !fi(t) ? t._ctx = Nn : r === 3 && Nn && (Nn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
		}
	} else if (h(t)) {
		if (r & 65) {
			ca(e, { default: t });
			return;
		}
		t = {
			default: t,
			_ctx: Nn
		}, n = 32;
	} else t = String(t), r & 64 ? (n = 16, t = [W(t)]) : n = 8;
	e.children = t, e.shapeFlag |= n;
}
function la(...e) {
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
function ua(e, t, n, r = null) {
	fn(e, t, 7, [n, r]);
}
var da = /* @__PURE__ */ qr(), fa = 0;
function pa() {
	return fa;
}
function ma(e, n, r) {
	let i = e.type, a = (n ? n.appContext : e.appContext) || da, o = {
		uid: fa++,
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
		propsOptions: vi(i, a),
		emitsOptions: ei(i, a),
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
	return o.ctx = { _: o }, o.root = n ? n.root : o, o.emit = Qr.bind(null, o), e.ce && e.ce(o), o;
}
var ha = null, ga = () => ha || Nn, _a, va;
{
	let e = fe(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	_a = t("__VUE_INSTANCE_SETTERS__", (e) => ha = e), va = t("__VUE_SSR_SETTERS__", (e) => Sa = e);
}
var ya = (e) => {
	let t = ha;
	return _a(e), e.scope.on(), () => {
		e.scope.off(), _a(t);
	};
}, ba = () => {
	ha && ha.scope.off(), _a(null);
};
function xa(e) {
	return e.vnode.shapeFlag & 4;
}
var Sa = !1;
function Ca(e, t = !1, n = !1) {
	t && va(t);
	let { props: r, children: i } = e.vnode, a = xa(e);
	pi(e, r, a, t), Ei(e, i, n || t);
	let o = a ? wa(e, t) : void 0;
	return t && va(!1), o;
}
function wa(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ar);
	let { setup: r } = n;
	if (r) {
		Je();
		let n = e.setupContext = r.length > 1 ? ka(e) : null, i = ya(e), a = dn(r, e, 0, [e.props, n]), o = y(a);
		if (Ye(), i(), (o || e.sp) && !ar(e) && er(e), o) {
			if (a.then(ba, ba), t) return a.then((n) => {
				va(!0);
				try {
					Ta(e, n, t);
				} finally {
					va(!1);
				}
			}).catch((t) => {
				pn(t, e, 0, void 0, !0), e.ssrRender = (e, t) => t("<!---->");
			});
			e.asyncDep = a;
		} else Ta(e, a, t);
	} else Ea(e, t);
}
function Ta(e, t, n) {
	h(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : v(t) && (e.setupState = tn(t)), Ea(e, n);
}
function Ea(e, t, n) {
	let i = e.type;
	e.render ||= i.render || r;
	{
		let t = ya(e);
		Je();
		try {
			Nr(e);
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
	return e.exposed ? e.exposeProxy ||= new Proxy(tn(qt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Or) return Or[n](e);
		},
		has(e, t) {
			return t in e || t in Or;
		}
	}) : e.proxy;
}
function ja(e, t = !0) {
	return h(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ma(e) {
	return h(e) && "__vccOpts" in e;
}
var K = (e, t) => /* @__PURE__ */ rn(e, t, Sa);
function Na(e, t, n) {
	try {
		Yi(-1);
		let r = arguments.length;
		return r === 2 ? v(t) && !d(t) ? Qi(t) ? U(e, null, [t]) : U(e, t) : U(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Qi(n) && (n = [n]), U(e, t, n));
	} finally {
		Yi(1);
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
				e && fn(e, t, 5, a);
			}
		} else fn(r, t, 5, [e]);
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
				Sn(() => {
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
	return Vo ||= ki(Bo);
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
		return (t, n) => (B(!0), V(z, null, R(e.model.groups, (t) => (B(), V(z, { key: t.kind }, [H("div", Ko, [H("h2", null, O(t.title) + " (" + O(t.items.length) + ")", 1), t.kind === "generated" ? (B(), V("button", qo, "Создать идеи →")) : G("", !0)]), t.items.length ? (B(), V("div", {
			key: 0,
			class: "idea-grid",
			"data-idea-collection": t.kind
		}, [(B(!0), V(z, null, R(t.items, (n) => (B(), Zi(wr(t.kind === "academy" ? "div" : "article"), {
			key: n.key,
			class: D(["idea", { "generated-card": t.kind === "generated" }])
		}, {
			default: In(() => [
				H("div", Yo, O(n.badge), 1),
				H("h3", null, O(n.title), 1),
				H("p", null, O(n.pitch), 1),
				t.kind === "generated" ? (B(), V("p", Xo, O(n.storyLine), 1)) : G("", !0),
				t.kind === "manual" && n.lyrics ? (B(), V("p", Zo, "🎼 Текст песни сохранён · " + O(n.sunoLyrics ? "теги для Suno готовы" : "без разметки"), 1)) : G("", !0),
				n.hook || t.kind === "generated" ? (B(), Zi(wr(t.kind === "generated" ? "div" : "p"), {
					key: 2,
					class: "generator-hook"
				}, {
					default: In(() => [t.kind === "generated" ? (B(), V("span", Qo, "ХУК ПРИПЕВА")) : G("", !0), H("strong", null, O(n.hook), 1)]),
					_: 2
				}, 1024)) : G("", !0),
				t.kind === "generated" && n.detail ? (B(), V("p", $o, "Твоя деталь: " + O(n.detail), 1)) : G("", !0),
				H("div", es, [(B(!0), V(z, null, R(n.actions, (t) => (B(), V("button", {
					key: t.name,
					type: "button",
					class: D(t.className),
					"data-action": t.name,
					"data-id": n.id,
					"data-i": n.index,
					"aria-label": t.label || void 0
				}, [t.icon ? (B(), V("span", {
					key: 0,
					"aria-hidden": "true",
					innerHTML: e.model.icons[t.icon]
				}, null, 8, ns)) : G("", !0), W(O(t.text), 1)], 10, ts))), 128))])
			]),
			_: 2
		}, 1032, ["class"]))), 128))], 8, Jo)) : (B(), V("div", rs, [
			H("span", {
				"aria-hidden": "true",
				innerHTML: e.model.icons.music
			}, null, 8, is),
			H("strong", null, O(t.emptyTitle), 1),
			W(O(t.emptyText), 1)
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
// src/vue/version-history/version-model.js
function ss(e) {
	return /^\d{4}-\d{2}-\d{2}$/.test(String(e || "")) ? e.slice(8, 10) + "." + e.slice(5, 7) + "." + e.slice(0, 4) : "";
}
var cs = (e) => String(e ?? "").trim().normalize("NFKC").toLocaleLowerCase("ru"), ls = (e, t) => cs(e).includes(t);
function us(e) {
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
function ds(e, { tab: t = "major", size: n = "all", search: r = "" } = {}) {
	let i = Array.isArray(e) ? e : [], a = us(i), o = cs(r);
	if (o) {
		let e = a.filter((e) => o === "v" + e.major || o === e.major || ls("мажорная версия " + e.major, o)), t = i.filter((e) => ls("v" + e[0] + " " + e[0] + " " + e[1] + " " + ss(e[2]), o));
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
var fs = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, ps = {
	class: "sb-vh-vue-layout",
	"data-sb-vue-version-history": ""
}, ms = { class: "sb-vh-header" }, hs = [
	"aria-selected",
	"tabindex",
	"onClick"
], gs = [
	"aria-selected",
	"tabindex",
	"onClick"
], _s = {
	id: "sb-vh-legend",
	class: "sb-vh-legend"
}, vs = { class: "sb-vh-controls" }, ys = {
	class: "sb-vh-search-label",
	for: "sb-vue-vh-search"
}, bs = {
	id: "sb-vh-subcount",
	class: "sb-vh-count",
	role: "status"
}, xs = {
	key: 0,
	class: "sb-vh-search-all"
}, Ss = {
	key: 0,
	class: "sb-vh-search-group"
}, Cs = { class: "sb-vh-release-no" }, ws = { class: "sb-vh-release-text" }, Ts = { class: "sb-vh-version-range" }, Es = { class: "sb-vh-release-list" }, Ds = { class: "sb-vh-release-no" }, Os = { class: "sb-vh-release-text" }, ks = { class: "sb-vh-search-meta" }, As = ["datetime"], js = { class: "sb-vh-search-tag" }, Ms = {
	key: 1,
	class: "sb-vh-empty"
}, Ns = {
	key: 2,
	class: "sb-vh-release-list sb-vh-major-list"
}, Ps = { class: "sb-vh-release-no" }, Fs = { class: "sb-vh-release-text" }, Is = { class: "sb-vh-version-range" }, Ls = {
	key: 3,
	class: "sb-vh-release-list"
}, Rs = { class: "sb-vh-release-no" }, zs = { class: "sb-vh-release-text" }, Bs = { class: "sb-vh-search-meta" }, Vs = ["datetime"], Hs = {
	key: 0,
	class: "sb-vh-search-tag"
}, Us = {
	key: 4,
	class: "sb-vh-empty"
}, Ws = /*#__PURE__*/ fs({
	__name: "VersionHistory",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ F("major"), r = /* @__PURE__ */ F("all"), i = /* @__PURE__ */ F(""), a = K(() => ds(t.model.releases, {
			tab: n.value,
			size: r.value,
			search: i.value
		})), o = /* @__PURE__ */ F(null), s = /* @__PURE__ */ F(null), c = K(() => !!i.value.trim());
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
			e.preventDefault(), r(t[a]), Sn(() => {
				let e = t.length === 2 ? "#sb-vh-tabs [aria-selected=\"true\"]" : "#sb-vh-minor-tabs [aria-selected=\"true\"]";
				document.querySelector(e)?.focus();
			});
		}
		return L(() => Sn(() => s.value?.focus({ preventScroll: !0 }))), (t, m) => (B(), V("div", ps, [
			H("header", ms, [H("div", null, [
				m[6] ||= H("div", { class: "sb-vh-kicker" }, "SUNOBOOM · РАЗВИТИЕ ПРОЕКТА", -1),
				m[7] ||= H("h2", { id: "sb-vh-title" }, "История версий", -1),
				H("p", null, [
					m[4] ||= W("Текущая версия ", -1),
					H("strong", null, "v" + O(e.model.currentVersion), 1),
					m[5] ||= W(". Версии сгруппированы по номеру.", -1)
				])
			]), H("button", {
				ref_key: "closeButton",
				ref: s,
				type: "button",
				class: "sb-vh-close",
				"aria-label": "Закрыть историю версий",
				onClick: m[0] ||= (t) => e.model.close()
			}, "×", 512)]),
			H("div", {
				id: "sb-vh-tabs",
				class: "sb-vh-tabs",
				role: "tablist",
				"aria-label": "Части номера версии",
				onKeydown: m[1] ||= (e) => p(e, ["major", "minor"], n.value, u)
			}, [(B(), V(z, null, R([{
				id: "major",
				label: "Мажорная версия"
			}, {
				id: "minor",
				label: "Минорные версии"
			}], (e) => H("button", {
				key: e.id,
				type: "button",
				class: D(["sb-vh-tab", { active: n.value === e.id }]),
				role: "tab",
				"aria-selected": n.value === e.id,
				tabindex: n.value === e.id ? 0 : -1,
				"aria-controls": "sb-vh-content",
				onClick: (t) => u(e.id)
			}, O(e.label), 11, hs)), 64))], 32),
			n.value === "minor" && !c.value ? (B(), V("div", {
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
			}, [(B(), V(z, null, R([
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
			], (e) => H("button", {
				key: e.id,
				type: "button",
				class: D(["sb-vh-size-tab", { active: r.value === e.id }]),
				role: "tab",
				"aria-selected": r.value === e.id,
				tabindex: r.value === e.id ? 0 : -1,
				"aria-controls": "sb-vh-content",
				onClick: (t) => d(e.id)
			}, O(e.label), 11, gs)), 64))], 32)) : G("", !0),
			H("p", _s, O(a.value.legend), 1),
			H("div", vs, [H("label", ys, [m[8] ||= H("span", { class: "sb-vh-visually-hidden" }, "Поиск по истории версий", -1), I(H("input", {
				id: "sb-vue-vh-search",
				"onUpdate:modelValue": m[3] ||= (e) => i.value = e,
				type: "search",
				autocomplete: "off",
				placeholder: "Поиск по всем версиям и вкладкам…",
				onInput: l
			}, null, 544), [[q, i.value]])]), H("span", bs, O(a.value.count), 1)]),
			H("div", {
				id: "sb-vh-content",
				ref_key: "content",
				ref: o,
				class: "sb-vh-content",
				role: "tabpanel",
				"aria-labelledby": "sb-vh-tabs"
			}, [a.value.mode === "search" && (a.value.majors.length || a.value.large.length || a.value.small.length) ? (B(), V("div", xs, [a.value.majors.length ? (B(), V("section", Ss, [H("h3", null, [m[9] ||= W("Мажорные версии ", -1), H("span", null, O(a.value.majors.length), 1)]), (B(!0), V(z, null, R(a.value.majors, (e) => (B(), V("article", {
				key: "major-" + e.major,
				class: "sb-vh-release sb-vh-major-release"
			}, [H("span", Cs, "v" + O(e.major), 1), H("div", ws, [H("p", null, "Мажорная версия " + O(e.major), 1), H("p", Ts, " От v" + O(e.items[e.items.length - 1][0]) + " до v" + O(e.items[0][0]), 1)])]))), 128))])) : G("", !0), (B(!0), V(z, null, R([{
				title: "Крупные обновления",
				entries: a.value.large,
				badge: "Крупное"
			}, {
				title: "Мелкие обновления",
				entries: a.value.small,
				badge: "Мелкое"
			}], (e) => I((B(), V("section", {
				key: e.title,
				class: "sb-vh-search-group"
			}, [H("h3", null, [W(O(e.title) + " ", 1), H("span", null, O(e.entries.length), 1)]), H("div", Es, [(B(!0), V(z, null, R(e.entries, (t) => (B(), V("article", {
				key: t[0],
				class: "sb-vh-release"
			}, [H("span", Ds, "v" + O(t[0]), 1), H("div", Os, [H("p", null, O(t[1]), 1), H("div", ks, [H("time", { datetime: t[2] }, O($t(ss)(t[2])), 9, As), H("span", js, O(e.badge), 1)])])]))), 128))])])), [[qa, e.entries.length]])), 128))])) : a.value.mode === "search" ? (B(), V("p", Ms, " По запросу совпадений нет ни в одном разделе истории. ")) : a.value.mode === "major" ? (B(), V("div", Ns, [(B(!0), V(z, null, R(a.value.majors, (e) => (B(), V("article", {
				key: e.major,
				class: "sb-vh-release sb-vh-major-release"
			}, [H("span", Ps, "v" + O(e.major), 1), H("div", Fs, [
				H("h3", null, "Мажорная версия " + O(e.major), 1),
				H("p", null, "Ветка v" + O(e.major) + ".x — " + O(e.items.length) + " сохранённых минорных обновлений.", 1),
				H("p", Is, " От v" + O(e.items[e.items.length - 1][0]) + " (" + O($t(ss)(e.items[e.items.length - 1][2])) + ") до v" + O(e.items[0][0]) + " (" + O($t(ss)(e.items[0][2])) + ") ", 1),
				H("button", {
					type: "button",
					class: "sb-vh-view-minors",
					onClick: f
				}, "Просмотреть минорные версии")
			])]))), 128))])) : a.value.mode === "minor" && a.value.entries.length ? (B(), V("div", Ls, [(B(!0), V(z, null, R(a.value.entries, (e) => (B(), V("article", {
				key: e[0],
				class: "sb-vh-release"
			}, [H("span", Rs, "v" + O(e[0]), 1), H("div", zs, [H("p", null, O(e[1]), 1), H("div", Bs, [H("time", { datetime: e[2] }, O($t(ss)(e[2])), 9, Vs), r.value === "all" ? (B(), V("span", Hs, O(e[3] === "large" ? "Крупное" : "Мелкое"), 1)) : G("", !0)])])]))), 128))])) : (B(), V("p", Us, "По запросу минорные версии не найдены."))], 512)
		]));
	}
}, [["__scopeId", "data-v-ce1fc81b"]]);
// src/vue/version-history/legacyVersionHistoryBridge.js
function Gs({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_VERSION_HISTORY;
	if (!t?.snapshot || !document.body) return () => {};
	let n = null, r = !1;
	function i() {
		if (r) return;
		let i = document.getElementById("sb-vue-version-history");
		if (n?.node === i && i?.isConnected || (n &&= (n.unmount(), null), !i)) return;
		let a = t.snapshot();
		if (!a || !Array.isArray(a.releases)) return;
		let o = e(i, Ws, { model: {
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
// src/vue/account/PromptCollection.vue
var Ks = { class: "section-title" }, qs = {
	key: 0,
	class: "saved-list"
}, Js = { class: "row" }, Ys = { class: "actions" }, Xs = ["data-id"], Zs = ["innerHTML"], Qs = ["data-id"], $s = ["data-id", "aria-label"], ec = ["innerHTML"], tc = { class: "sub" }, nc = {
	key: 1,
	class: "empty"
}, rc = ["innerHTML"], ic = {
	__name: "PromptCollection",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (B(), V(z, null, [H("div", Ks, [H("h2", null, "Сохранённые промпты (" + O(e.model.items.length) + ")", 1)]), e.model.items.length ? (B(), V("div", qs, [(B(!0), V(z, null, R(e.model.items, (t) => (B(), V("article", {
			key: t.id,
			class: "saved-item"
		}, [
			H("div", Js, [H("h3", null, O(t.title), 1), H("div", Ys, [
				H("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "copy-saved",
					"data-id": t.id
				}, [H("span", {
					"aria-hidden": "true",
					innerHTML: e.model.icons.copy
				}, null, 8, Zs), n[0] ||= W(" Копировать", -1)], 8, Xs),
				H("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "edit-manual-prompt",
					"data-id": t.id
				}, "Изменить", 8, Qs),
				H("button", {
					type: "button",
					class: "btn danger small",
					"data-action": "delete-saved",
					"data-id": t.id,
					"aria-label": "Удалить промпт «" + t.title + "»"
				}, [H("span", {
					"aria-hidden": "true",
					innerHTML: e.model.icons.trash
				}, null, 8, ec)], 8, $s)
			])]),
			H("p", null, O(t.text), 1),
			H("span", tc, O(t.genre) + " · " + O(t.date), 1)
		]))), 128))])) : (B(), V("div", nc, [
			H("span", {
				"aria-hidden": "true",
				innerHTML: e.model.icons.music
			}, null, 8, rc),
			n[1] ||= H("strong", null, "Промптов пока нет", -1),
			n[2] ||= W("Сохрани первый здесь или в Suno Studio.", -1)
		]))], 64));
	}
};
// src/vue/account/legacyPromptCollectionBridge.js
function ac({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PROMPT_LIST, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-prompts-list");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, ic, { model: o });
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
var oc = { class: "field" }, sc = { class: "field" }, cc = ["value"], lc = { class: "field" }, uc = {
	id: "sb-prompt-char-count",
	class: "sub"
}, dc = {
	__name: "PromptEditor",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = /* @__PURE__ */ M({ ...e.initial.values }), n = K(() => t.text.length);
		return (r, i) => (B(), V(z, null, [
			H("h3", null, O(e.initial.editing ? "Редактирование промпта" : "Новый промпт для Suno"), 1),
			H("div", oc, [i[3] ||= H("label", { for: "custom-prompt-title" }, "Название", -1), I(H("input", {
				id: "custom-prompt-title",
				"onUpdate:modelValue": i[0] ||= (e) => t.title = e,
				maxlength: "100",
				placeholder: "Например, Романтичный афро-поп"
			}, null, 512), [[q, t.title]])]),
			H("div", sc, [i[4] ||= H("label", { for: "custom-prompt-genre" }, "Жанр", -1), I(H("select", {
				id: "custom-prompt-genre",
				"onUpdate:modelValue": i[1] ||= (e) => t.genre = e
			}, [(B(!0), V(z, null, R(e.initial.genres, (e) => (B(), V("option", {
				key: e.id,
				value: e.id
			}, O(e.name), 9, cc))), 128))], 512), [[J, t.genre]])]),
			H("div", lc, [
				i[5] ||= H("label", { for: "custom-prompt-text" }, "Текст промпта (до 1000 символов)", -1),
				I(H("textarea", {
					id: "custom-prompt-text",
					"onUpdate:modelValue": i[2] ||= (e) => t.text = e,
					rows: "7",
					maxlength: "1000",
					"aria-describedby": "sb-prompt-char-count",
					placeholder: "Modern Russian-language afropop, 105 BPM, clean vocals, groovy bass..."
				}, null, 512), [[q, t.text]]),
				H("span", uc, O(n.value) + " / 1000 символов", 1)
			])
		], 64));
	}
};
// src/vue/account/legacyPromptEditorBridge.js
function fc({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PROMPT_EDITOR, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-prompt-form");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, dc, { initial: o });
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
var pc = { class: "account-back" }, mc = {
	type: "button",
	class: "btn ghost small",
	"data-action": "workspace-back"
}, hc = { class: "section-title" }, gc = {
	key: 0,
	class: "genre-grid"
}, _c = ["data-id"], vc = { class: "genre-content" }, yc = { class: "kicker" }, bc = { class: "foot" }, xc = {
	key: 1,
	class: "empty"
}, Sc = { class: "section-title" }, Cc = {
	key: 2,
	class: "idea-grid"
}, wc = { class: "idea-badge" }, Tc = { class: "actions" }, Ec = ["data-id", "data-i"], Dc = ["data-id", "data-i"], Oc = {
	key: 3,
	class: "empty"
}, kc = { class: "section-title" }, Ac = {
	key: 4,
	class: "idea-grid"
}, jc = { class: "idea-badge" }, Mc = ["data-id"], Nc = {
	key: 5,
	class: "empty"
}, Pc = { class: "section-title" }, Fc = {
	key: 6,
	class: "idea-grid"
}, Ic = { class: "idea-badge" }, Lc = { class: "generator-story" }, Rc = { class: "generator-hook" }, zc = {
	key: 0,
	class: "generator-detail"
}, Bc = { class: "actions" }, Vc = ["data-id"], Hc = ["data-id"], Uc = ["data-id", "aria-label"], Wc = {
	key: 7,
	class: "empty"
}, Gc = { class: "section-title" }, Kc = {
	key: 8,
	class: "saved-list"
}, qc = { class: "row" }, Jc = { class: "actions" }, Yc = ["data-id"], Xc = ["data-id", "aria-label"], Zc = { class: "sub" }, Qc = {
	key: 9,
	class: "empty"
}, $c = {
	__name: "LibraryCollection",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (B(), V(z, null, [
			H("div", pc, [H("button", mc, O(e.model.backLabel), 1)]),
			n[11] ||= H("header", { class: "heading" }, [H("h1", null, "Моя библиотека"), H("p", null, "Любимые жанры, идеи и промпты. Сохраняются локально в этом браузере.")], -1),
			H("div", hc, [H("h2", null, "Избранные жанры (" + O(e.model.genres.length) + ")", 1)]),
			e.model.genres.length ? (B(), V("div", gc, [(B(!0), V(z, null, R(e.model.genres, (e) => (B(), V("button", {
				key: e.id,
				type: "button",
				class: "genre-card",
				style: E({ "--accent": e.color }),
				"data-action": "genre",
				"data-id": e.id
			}, [n[1] ||= H("div", { class: "art" }, null, -1), H("div", vc, [H("div", null, [
				H("div", yc, O(e.family) + " · " + O(e.bpm[0]) + "–" + O(e.bpm[1]) + " BPM", 1),
				H("h3", null, O(e.name), 1),
				H("p", null, O(e.tagline), 1)
			]), H("div", bc, [H("span", null, O(e.era), 1), n[0] ||= H("span", { style: { color: "#ffacd9" } }, "Открыть →", -1)])])], 12, _c))), 128))])) : (B(), V("div", xc, [...n[2] ||= [H("strong", null, "Пока нет избранных жанров", -1), W("Добавляй их в карточках Академии.", -1)]])),
			H("div", Sc, [H("h2", null, "Сохранённые идеи (" + O(e.model.ideas.length) + ")", 1)]),
			e.model.ideas.length ? (B(), V("div", Cc, [(B(!0), V(z, null, R(e.model.ideas, (e) => (B(), V("article", {
				key: e.key,
				class: "idea"
			}, [
				H("div", wc, O(e.genre) + " · " + O(e.mood), 1),
				H("h3", null, O(e.title), 1),
				H("p", null, O(e.pitch), 1),
				H("div", Tc, [H("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "idea-use",
					"data-id": e.genreId,
					"data-i": e.index
				}, "В студию", 8, Ec), H("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "idea-save",
					"data-id": e.genreId,
					"data-i": e.index
				}, "Сохранено", 8, Dc)])
			]))), 128))])) : (B(), V("div", Oc, [...n[3] ||= [H("strong", null, "Нет сохранённых идей", -1), W("Найди интересный сюжет и нажми «Сохранить».", -1)]])),
			H("div", kc, [H("h2", null, "Мои собственные идеи (" + O(e.model.own.length) + ")", 1), n[4] ||= H("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "nav",
				"data-nav": "myideas"
			}, "Добавить или изменить →", -1)]),
			e.model.own.length ? (B(), V("div", Ac, [(B(!0), V(z, null, R(e.model.own, (e) => (B(), V("article", {
				key: e.id,
				class: "idea"
			}, [
				H("div", jc, O(e.genre), 1),
				H("h3", null, O(e.title), 1),
				H("p", null, O(e.pitch), 1),
				H("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "edit-manual-idea",
					"data-id": e.id
				}, "Открыть запись →", 8, Mc)
			]))), 128))])) : (B(), V("div", Nc, [...n[5] ||= [H("strong", null, "Пока нет своих идей", -1), W("Добавь их в личном кабинете.", -1)]])),
			H("div", Pc, [H("h2", null, "Идеи из генератора (" + O(e.model.generated.length) + ")", 1), n[6] ||= H("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "nav",
				"data-nav": "ideas"
			}, "＋ Создать ещё", -1)]),
			e.model.generated.length ? (B(), V("div", Fc, [(B(!0), V(z, null, R(e.model.generated, (e) => (B(), V("article", {
				key: e.id,
				class: "idea generated-card"
			}, [
				H("div", Ic, O(e.genre) + " · " + O(e.topic), 1),
				H("h3", null, O(e.title), 1),
				H("p", null, O(e.pitch), 1),
				H("p", Lc, O(e.storyLine), 1),
				H("div", Rc, [n[7] ||= H("span", null, "ХУК ПРИПЕВА", -1), H("strong", null, O(e.hook), 1)]),
				e.detail ? (B(), V("p", zc, "Твоя деталь: " + O(e.detail), 1)) : G("", !0),
				H("div", Bc, [
					H("button", {
						type: "button",
						class: "btn primary small",
						"data-action": "generated-use",
						"data-id": e.id
					}, "В Suno Studio", 8, Vc),
					H("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "generated-copy",
						"data-id": e.id
					}, "Копировать", 8, Hc),
					H("button", {
						type: "button",
						class: "btn danger small",
						"data-action": "generated-delete",
						"data-id": e.id,
						"aria-label": "Удалить идею «" + e.title + "»"
					}, "Удалить", 8, Uc)
				])
			]))), 128))])) : (B(), V("div", Wc, [...n[8] ||= [H("strong", null, "Сохранённых новых идей нет", -1), W("Создай идеи в генераторе и нажми «Сохранить».", -1)]])),
			H("div", Gc, [H("h2", null, "Мои промпты (" + O(e.model.prompts.length) + ")", 1), n[9] ||= H("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "nav",
				"data-nav": "myprompts"
			}, "Добавить или изменить →", -1)]),
			e.model.prompts.length ? (B(), V("div", Kc, [(B(!0), V(z, null, R(e.model.prompts, (e) => (B(), V("article", {
				key: e.id,
				class: "saved-item"
			}, [
				H("div", qc, [H("h3", null, O(e.title), 1), H("div", Jc, [H("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "copy-saved",
					"data-id": e.id
				}, "Копировать", 8, Yc), H("button", {
					type: "button",
					class: "btn danger small",
					"data-action": "delete-saved",
					"data-id": e.id,
					"aria-label": "Удалить промпт «" + e.title + "»"
				}, "Удалить", 8, Xc)])]),
				H("p", null, O(e.text), 1),
				H("span", Zc, O(e.date), 1)
			]))), 128))])) : (B(), V("div", Qc, [...n[10] ||= [H("strong", null, "Промптов пока нет", -1), W("Создай первый в Suno Studio и сохрани в библиотеке.", -1)]]))
		], 64));
	}
};
// src/vue/account/legacyLibraryBridge.js
function el({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_LIBRARY, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-library-collection");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, $c, { model: o });
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
var tl = {
	key: 0,
	class: "sbsong-grid"
}, nl = ["data-id", "aria-label"], rl = ["data-sbsong-cover"], il = ["src"], al = { class: "sbsong-card-text" }, ol = { class: "sbsong-card-flags" }, sl = { class: "sbsong-card-actions" }, cl = ["data-id"], ll = ["data-id"], ul = ["data-id"], dl = {
	key: 1,
	class: "sbsong-empty"
}, fl = {
	__name: "SongCards",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ F(t.api.snapshot() || {
			items: [],
			total: 0
		});
		function r() {
			let e = t.api.snapshot();
			e && (n.value = e, Sn(() => t.api.hydrateCovers()));
		}
		return L(() => {
			window.addEventListener("sunoboom:songs-search", r), Sn(() => t.api.hydrateCovers());
		}), gr(() => window.removeEventListener("sunoboom:songs-search", r)), (e, t) => n.value.items.length ? (B(), V("div", tl, [(B(!0), V(z, null, R(n.value.items, (e) => (B(), V("article", {
			key: e.id,
			class: "sbsong-card"
		}, [H("button", {
			type: "button",
			class: "sbsong-art-button",
			"data-sbsong-action": "open",
			"data-id": e.id,
			"aria-label": "Открыть " + e.title
		}, [e.hasCover ? (B(), V("img", {
			key: 0,
			alt: "",
			"data-sbsong-cover": e.id,
			loading: "lazy"
		}, null, 8, rl)) : e.coverUrl ? (B(), V("img", {
			key: 1,
			alt: "",
			src: e.coverUrl,
			style: { display: "block" },
			loading: "lazy"
		}, null, 8, il)) : G("", !0), t[0] ||= H("span", {
			class: "sbsong-no-cover",
			"aria-hidden": "true"
		}, "♫", -1)], 8, nl), H("div", al, [
			H("small", null, O(e.genre), 1),
			H("h3", null, O(e.title), 1),
			H("p", null, O(e.artist), 1),
			H("div", ol, [H("span", null, O(e.status), 1)]),
			H("div", sl, [
				H("button", {
					type: "button",
					"data-sbsong-action": "open",
					"data-id": e.id
				}, "Открыть", 8, cl),
				H("button", {
					type: "button",
					"data-sbsong-action": "edit",
					"data-id": e.id
				}, "Изменить", 8, ll),
				H("button", {
					type: "button",
					"data-sbsong-action": "share",
					"data-id": e.id
				}, "Поделиться", 8, ul)
			])
		])]))), 128))])) : (B(), V("div", dl, O(n.value.total ? "По этому запросу песен нет." : "Песен пока нет. Добавь первую карточку и загрузи аудиофайл."), 1));
	}
};
// src/vue/account/legacySongCardsBridge.js
function pl({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SONG_CARDS, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-song-cards");
		if (r?.node === a || (r &&= (r.unmount(), null), !a || !t.snapshot())) return;
		let o = e(a, fl, { api: t });
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
var ml = {
	class: "sbsong-versions",
	"data-sb-vue-song-versions": "",
	"aria-label": "Версии записи"
}, hl = { class: "sbsong-version-heading" }, gl = { key: 0 }, _l = { class: "sbsong-version-row-head" }, vl = {
	key: 0,
	class: "sbsong-version-main-badge"
}, yl = {
	key: 1,
	class: "sbsong-version-play-badge"
}, bl = { class: "sbsong-version-actions" }, xl = ["data-version-id"], Sl = ["data-version-id"], Cl = ["data-id", "data-version-id"], wl = ["data-version-id"], Tl = { class: "sbsong-version-notes" }, El = ["data-sbsong-version-title", "value"], Dl = ["data-sbsong-version-note", "value"], Ol = ["data-version-id"], kl = { key: 0 }, Al = {
	type: "button",
	class: "sbsong-compare-toggle",
	"data-sbsong-action": "compare-toggle"
}, jl = {
	key: 0,
	class: "sbsong-compare-grid"
}, Ml = ["value"], Nl = ["value"], Pl = ["value"], Fl = ["value"], Il = {
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
		return (t, n) => (B(), V("section", ml, [
			H("div", hl, [H("h3", null, "Версии записи (" + O(e.versions.length) + ")", 1), e.playingLabel ? (B(), V("small", gl, "В основном плеере: " + O(e.playingLabel), 1)) : G("", !0)]),
			(B(!0), V(z, null, R(e.versions, (t) => (B(), V("article", {
				key: t.id,
				class: "sbsong-version-row"
			}, [
				H("div", _l, [H("div", null, [
					H("strong", null, O(t.label), 1),
					t.isMain ? (B(), V("span", vl, "★ Основная")) : G("", !0),
					t.isPlaying ? (B(), V("span", yl, "♫ Выбрана")) : G("", !0),
					H("small", null, O(t.fileName) + " · " + O(t.sizeLabel) + " · " + O(t.addedDate), 1)
				])]),
				H("div", bl, [
					H("button", {
						type: "button",
						"data-sbsong-action": "version-play",
						"data-version-id": t.id
					}, "Выбрать для плеера", 8, xl),
					t.isMain ? G("", !0) : (B(), V("button", {
						key: 0,
						type: "button",
						"data-sbsong-action": "version-main",
						"data-version-id": t.id
					}, "★ Сделать основной", 8, Sl)),
					H("button", {
						type: "button",
						"data-sbsong-action": "share-file",
						"data-id": e.songId,
						"data-version-id": t.id
					}, "Сохранить / отправить", 8, Cl),
					H("button", {
						type: "button",
						class: "sbsong-version-danger",
						"data-sbsong-action": "version-remove",
						"data-version-id": t.id
					}, "Удалить дубль", 8, wl)
				]),
				H("details", Tl, [
					n[2] ||= H("summary", null, "Название и заметки", -1),
					H("label", null, [n[0] ||= W("Название версии ", -1), H("input", {
						type: "text",
						maxlength: "90",
						"data-sbsong-version-title": t.id,
						value: t.label
					}, null, 8, El)]),
					H("label", null, [n[1] ||= W("Чем отличается этот дубль ", -1), H("textarea", {
						maxlength: "800",
						rows: "2",
						"data-sbsong-version-note": t.id,
						value: t.notes,
						placeholder: "Например: более плотный припев, удачный вокал..."
					}, null, 8, Dl)]),
					H("button", {
						type: "button",
						"data-sbsong-action": "version-save",
						"data-version-id": t.id
					}, "Сохранить заметки", 8, Ol)
				])
			]))), 128)),
			e.versions.length ? G("", !0) : (B(), V("p", kl, "Пока нет локальных версий. Загрузи первую запись в MP3, M4A или WAV.")),
			e.versions.length > 1 ? (B(), V(z, { key: 1 }, [H("button", Al, O(e.compareOpen ? "Скрыть сравнение A/B" : "Сравнить версии A/B"), 1), e.compareOpen ? (B(), V("div", jl, [
				H("label", null, [
					n[3] ||= W("Версия A ", -1),
					H("select", {
						id: "sbsong-compare-a",
						value: e.compareAId
					}, [(B(!0), V(z, null, R(e.versions, (e) => (B(), V("option", {
						key: e.id,
						value: e.id
					}, O(e.label), 9, Nl))), 128))], 8, Ml),
					n[4] ||= H("audio", {
						id: "sbsong-ab-a",
						controls: "",
						preload: "metadata"
					}, null, -1)
				]),
				H("label", null, [
					n[5] ||= W("Версия B ", -1),
					H("select", {
						id: "sbsong-compare-b",
						value: e.compareBId
					}, [(B(!0), V(z, null, R(e.versions, (e) => (B(), V("option", {
						key: e.id,
						value: e.id
					}, O(e.label), 9, Fl))), 128))], 8, Pl),
					n[6] ||= H("audio", {
						id: "sbsong-ab-b",
						controls: "",
						preload: "metadata"
					}, null, -1)
				]),
				n[7] ||= H("p", null, "Два независимых плеера для сравнения дублей. Воспроизведение запускается вручную.", -1)
			])) : G("", !0)], 64)) : G("", !0),
			n[8] ||= aa("<div class=\"sbsong-version-add\"><h4>+ Добавить новую версию</h4><label>Аудиофайл (MP3, M4A, WAV и другие) <input id=\"sbsong-version-file\" type=\"file\" accept=\"audio/*,.mp3,.m4a,.wav,.wave,.flac,.ogg,.opus,.aac\"></label><label>Название дубля <input id=\"sbsong-new-version-title\" maxlength=\"90\" type=\"text\" placeholder=\"Например: Версия с новым припевом\"></label><label>Заметка <textarea id=\"sbsong-new-version-notes\" maxlength=\"800\" rows=\"2\" placeholder=\"Что изменилось в этой записи?\"></textarea></label><button type=\"button\" class=\"sbsong-main-btn\" data-sbsong-action=\"version-add\" id=\"sbsong-version-submit\">Сохранить новую версию</button><p>WAV — до 500 МБ, другие форматы — до 150 МБ. Каждая версия хранится отдельно в браузере этого устройства. Старые записи не перезаписываются.</p></div>", 1)
		]));
	}
}, Ll = { class: "sbsong-detail" }, Rl = { class: "sbsong-subhead" }, zl = { class: "sbsong-detail-layout" }, Bl = { class: "sbsong-detail-cover" }, Vl = ["data-sbsong-cover", "alt"], Hl = ["src", "alt"], Ul = {
	key: 2,
	class: "sbsong-no-cover",
	"aria-hidden": "true"
}, Wl = { class: "sbsong-detail-artist" }, Gl = { class: "sbsong-detail-tags" }, Kl = { key: 0 }, ql = { key: 1 }, Jl = {
	key: 0,
	class: "sbsong-detail-description"
}, Yl = {
	class: "sbsong-audio-box",
	id: "sbsong-audio-box"
}, Xl = {
	key: 0,
	controls: "",
	preload: "metadata",
	id: "sbsong-audio-player"
}, Zl = { key: 1 }, Ql = { class: "sbsong-detail-actions" }, $l = ["data-id"], eu = ["data-id"], tu = ["href"], nu = ["data-id"], ru = ["data-id"], iu = ["data-id"], au = {
	key: 1,
	class: "sbsong-delete-confirm"
}, ou = ["data-id"], su = {
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
		return L(() => {
			Sn(() => t.api.hydrateMedia());
		}), (t, n) => (B(), V("section", Ll, [H("div", Rl, [H("h2", null, O(e.model.title), 1), n[0] ||= H("button", {
			type: "button",
			"data-sbsong-action": "close-detail"
		}, "Закрыть ×", -1)]), H("div", zl, [H("div", Bl, [e.model.hasCover ? (B(), V("img", {
			key: 0,
			"data-sbsong-cover": e.model.id,
			alt: "Обложка песни " + e.model.title
		}, null, 8, Vl)) : e.model.coverUrl ? (B(), V("img", {
			key: 1,
			src: e.model.coverUrl,
			alt: "Обложка песни " + e.model.title,
			style: { display: "block" }
		}, null, 8, Hl)) : (B(), V("span", Ul, "♫"))]), H("div", null, [
			H("p", Wl, O(e.model.artist), 1),
			H("p", Gl, [e.model.genre ? (B(), V("span", Kl, O(e.model.genre), 1)) : G("", !0), e.model.album ? (B(), V("span", ql, O(e.model.album), 1)) : G("", !0)]),
			e.model.description ? (B(), V("p", Jl, O(e.model.description), 1)) : G("", !0),
			H("div", Yl, [e.model.hasPlayableAudio ? (B(), V("audio", Xl)) : (B(), V("p", Zl, "Аудио ещё не добавлено. Добавь первую версию в этой карточке."))]),
			U(Il, {
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
			H("div", Ql, [
				H("button", {
					type: "button",
					class: "sbsong-main-btn",
					"data-sbsong-action": "share",
					"data-id": e.model.id
				}, "🔗 Поделиться ссылкой", 8, $l),
				e.model.hasAudio ? (B(), V("button", {
					key: 0,
					type: "button",
					"data-sbsong-action": "share-file",
					"data-id": e.model.id
				}, "Отправить аудиофайл", 8, eu)) : G("", !0),
				e.model.listenUrl ? (B(), V("a", {
					key: 1,
					href: e.model.listenUrl,
					target: "_blank",
					rel: "noopener noreferrer"
				}, "Открыть публичную запись ↗", 8, tu)) : G("", !0),
				H("button", {
					type: "button",
					"data-sbsong-action": "producer",
					"data-id": e.model.id
				}, "🎛 Мастер", 8, nu),
				H("button", {
					type: "button",
					"data-sbsong-action": "edit",
					"data-id": e.model.id
				}, "Изменить", 8, ru),
				H("button", {
					type: "button",
					class: "sbsong-danger",
					"data-sbsong-action": "delete",
					"data-id": e.model.id
				}, "Удалить", 8, iu)
			]),
			e.model.confirmDelete ? (B(), V("div", au, [
				n[1] ||= H("strong", null, "Удалить карточку вместе с локальными файлами?", -1),
				H("button", {
					type: "button",
					"data-sbsong-action": "delete-confirm",
					"data-id": e.model.id
				}, "Да, удалить", 8, ou),
				n[2] ||= H("button", {
					type: "button",
					"data-sbsong-action": "delete-cancel"
				}, "Отмена", -1)
			])) : G("", !0)
		])])]));
	}
};
// src/vue/account/legacySongDetailBridge.js
function cu({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SONG_DETAIL, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-song-detail");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, su, {
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
var lu = {
	id: "sbsong-form",
	class: "sbsong-form-panel"
}, uu = { class: "sbsong-subhead" }, du = {
	id: "sbsong-save-form",
	class: "sbsong-form"
}, fu = { class: "sbsong-form-columns" }, pu = { class: "sbsong-field" }, mu = { class: "sbsong-artist-field" }, hu = {
	class: "sbsong-field",
	for: "sbsong-artist-input"
}, gu = ["aria-expanded"], _u = {
	id: "sbsong-artist-options",
	class: "sbsong-artist-options",
	role: "listbox",
	"aria-label": "Список артистов"
}, vu = ["onClick"], yu = {
	key: 0,
	class: "sbsong-artist-hint"
}, bu = {
	key: 1,
	class: "sbsong-artist-hint"
}, xu = { class: "sbsong-genre-field" }, Su = {
	class: "sbsong-field",
	for: "sbsong-genre-input"
}, Cu = ["aria-expanded"], wu = ["aria-expanded"], Tu = {
	id: "sbsong-genre-options",
	class: "sbsong-genre-options",
	role: "region",
	"aria-label": "Выбор жанра из Академии"
}, Eu = { class: "sbsong-genre-picker-head" }, Du = ["value"], Ou = {
	id: "sbsong-genre-results",
	class: "sbsong-genre-results",
	role: "listbox",
	"aria-label": "Жанры и поджанры"
}, ku = ["aria-label"], Au = { class: "sbsong-genre-group-title" }, ju = ["onClick"], Mu = {
	key: 0,
	class: "sbsong-genre-hint"
}, Nu = { class: "sbsong-field" }, Pu = { class: "sbsong-field" }, Fu = { class: "sbsong-form-columns" }, Iu = { class: "sbsong-field" }, Lu = {
	class: "sbsong-cover-auto",
	"aria-live": "polite"
}, Ru = { id: "sbsong-cover-status" }, zu = { class: "sbsong-form-columns" }, Bu = { class: "sbsong-field" }, Vu = { class: "sbsong-field" }, Hu = { class: "sbsong-field" }, Uu = {
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
		}), r = /* @__PURE__ */ F(!1), i = /* @__PURE__ */ F(!1), a = /* @__PURE__ */ F(t.api.artistChoices()), o = /* @__PURE__ */ F(!1), s = /* @__PURE__ */ F(!1), c = /* @__PURE__ */ F("Все"), l = /* @__PURE__ */ F(t.api.genreChoices()), u = /* @__PURE__ */ F(t.api.genreFamilies()), d = (e) => String(e || "").normalize("NFKC").toLocaleLowerCase("ru"), f = K(() => {
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
		return L(() => {
			document.addEventListener("pointerdown", x), Sn(() => t.api.hydrateCover());
		}), gr(() => document.removeEventListener("pointerdown", x)), (t, d) => (B(), V("section", lu, [H("div", uu, [H("h2", null, O(e.model.editId ? "Изменить песню" : "Новая песня"), 1), d[16] ||= H("button", {
			type: "button",
			"data-sbsong-action": "cancel"
		}, "Закрыть ×", -1)]), H("form", du, [
			H("div", fu, [
				H("label", pu, [d[17] ||= H("span", null, "Название *", -1), I(H("input", {
					"onUpdate:modelValue": d[0] ||= (e) => n.title = e,
					type: "text",
					name: "title",
					maxlength: "120",
					placeholder: "Название песни"
				}, null, 512), [[q, n.title]])]),
				H("div", mu, [
					H("label", hu, [d[18] ||= H("span", null, "Исполнитель / проект", -1), I(H("input", {
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
					}, null, 40, gu), [[q, n.artist]])]),
					H("div", { class: "sbsong-artist-shortcuts" }, [H("button", {
						type: "button",
						onClick: y
					}, "▾ Выбрать из списка"), H("button", {
						type: "button",
						onClick: g
					}, "+ Сохранить артиста")]),
					I(H("div", _u, [
						(B(!0), V(z, null, R(f.value, (e) => (B(), V("button", {
							key: e.name,
							type: "button",
							role: "option",
							class: "sbsong-artist-option",
							onClick: (t) => _(e.name)
						}, [H("strong", null, O(e.name), 1), H("small", null, O(e.origin), 1)], 8, vu))), 128)),
						p.value ? (B(), V("p", yu, "Уточни поиск, чтобы увидеть остальные варианты.")) : G("", !0),
						f.value.length ? G("", !0) : (B(), V("p", bu, O(a.value.length ? "Совпадений нет. Нового артиста можно сохранить кнопкой выше." : "Список пуст. Введи имя и сохрани первого артиста."), 1))
					], 512), [[qa, r.value]])
				]),
				H("div", xu, [
					H("label", Su, [d[19] ||= H("span", null, "Жанр", -1), I(H("input", {
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
					}, null, 40, Cu), [[q, n.genre]])]),
					H("button", {
						type: "button",
						class: "sbsong-genre-toggle",
						"aria-controls": "sbsong-genre-options",
						"aria-expanded": String(o.value),
						onClick: b
					}, "▾ Выбрать из Академии", 8, wu),
					I(H("div", Tu, [H("div", Eu, [
						d[21] ||= H("label", { for: "sbsong-genre-family" }, "Направление", -1),
						I(H("select", {
							id: "sbsong-genre-family",
							"onUpdate:modelValue": d[9] ||= (e) => c.value = e,
							"aria-label": "Фильтр по направлению",
							onChange: d[10] ||= (e) => s.value = !0
						}, [d[20] ||= H("option", { value: "Все" }, "Все направления", -1), (B(!0), V(z, null, R(u.value, (e) => (B(), V("option", {
							key: e,
							value: e
						}, O(e), 9, Du))), 128))], 544), [[J, c.value]]),
						H("small", null, O(m.value.length) + " из " + O(l.value.length), 1)
					]), H("div", Ou, [(B(!0), V(z, null, R(h.value, (e) => (B(), V("div", {
						key: e.name,
						class: "sbsong-genre-group",
						role: "group",
						"aria-label": e.name
					}, [H("div", Au, [W(O(e.name) + " ", 1), H("span", null, O(e.genres.length), 1)]), (B(!0), V(z, null, R(e.genres, (e) => (B(), V("button", {
						key: e.id,
						type: "button",
						class: "sbsong-genre-option",
						role: "option",
						onClick: (t) => v(e.name)
					}, [H("span", null, O(e.name), 1)], 8, ju))), 128))], 8, ku))), 128)), m.value.length ? G("", !0) : (B(), V("p", Mu, O(l.value.length ? "Не найдено. Можно ввести свой жанр вручную." : "Каталог Академии пока недоступен. Введи жанр вручную."), 1))])], 512), [[qa, o.value]])
				]),
				H("label", Nu, [d[22] ||= H("span", null, "Альбом / релиз", -1), I(H("input", {
					"onUpdate:modelValue": d[11] ||= (e) => n.album = e,
					type: "text",
					name: "album",
					maxlength: "120",
					placeholder: "Название альбома"
				}, null, 512), [[q, n.album]])])
			]),
			H("label", Pu, [d[23] ||= H("span", null, "Описание", -1), I(H("textarea", {
				"onUpdate:modelValue": d[12] ||= (e) => n.description = e,
				name: "description",
				maxlength: "700",
				rows: "3",
				placeholder: "История, настроение или заметки"
			}, null, 512), [[q, n.description]])]),
			H("div", Fu, [H("label", Iu, [H("span", null, O(e.model.hasAudio ? "Добавить новую аудиоверсию" : "Загрузить аудиофайл (MP3, M4A, WAV и другие)"), 1), d[24] ||= H("input", {
				name: "audio",
				type: "file",
				accept: "audio/*,.mp3,.wav,.wave,.m4a,.aac,.flac,.ogg,.opus"
			}, null, -1)]), d[25] ||= H("label", { class: "sbsong-field" }, [H("span", null, "Обложка вручную (необязательно)"), H("input", {
				name: "cover",
				type: "file",
				accept: "image/png,image/jpeg,image/webp,image/gif"
			})], -1)]),
			H("div", Lu, [d[28] ||= H("div", { class: "sbsong-cover-preview-figure" }, [H("img", {
				id: "sbsong-cover-preview-img",
				alt: "Предпросмотр обложки",
				hidden: ""
			}), H("span", {
				id: "sbsong-cover-preview-placeholder",
				"aria-hidden": "true"
			}, "♫")], -1), H("div", null, [
				d[26] ||= H("strong", null, "Обложка из аудиофайла", -1),
				H("p", Ru, O(e.model.hasCover ? "Загружаю сохранённую обложку…" : "Выбери MP3, M4A или FLAC — попробую найти обложку автоматически"), 1),
				d[27] ||= H("small", null, "Ручная обложка имеет приоритет, если ты её выберешь.", -1)
			])]),
			H("div", zu, [
				H("label", Bu, [d[29] ||= H("span", null, "Прямая ссылка на MP3 (если есть)", -1), I(H("input", {
					"onUpdate:modelValue": d[13] ||= (e) => n.audioUrl = e,
					type: "text",
					name: "audioUrl",
					maxlength: "700",
					placeholder: "https://.../song.mp3"
				}, null, 512), [[q, n.audioUrl]])]),
				H("label", Vu, [d[30] ||= H("span", null, "Публичная страница песни", -1), I(H("input", {
					"onUpdate:modelValue": d[14] ||= (e) => n.listenUrl = e,
					type: "text",
					name: "listenUrl",
					maxlength: "700",
					placeholder: "https://suno.com/..."
				}, null, 512), [[q, n.listenUrl]])]),
				H("label", Hu, [d[31] ||= H("span", null, "Публичная обложка (по желанию)", -1), I(H("input", {
					"onUpdate:modelValue": d[15] ||= (e) => n.coverUrl = e,
					type: "text",
					name: "coverUrl",
					maxlength: "700",
					placeholder: "https://.../cover.jpg"
				}, null, 512), [[q, n.coverUrl]])])
			]),
			d[32] ||= H("p", { class: "sbsong-form-help" }, " MP3, M4A, WAV, FLAC и другие аудиофайлы сохраняются локально (IndexedDB): WAV — до 500 МБ, остальные — до 150 МБ при наличии свободной памяти браузера. Новая загрузка добавляет версию, не заменяя старую. Обложка ищется в MP3, M4A и FLAC; для WAV её обычно добавляют вручную. Локальное аудио по общей ссылке не передаётся. ", -1),
			d[33] ||= H("div", { class: "sbsong-form-actions" }, [H("button", {
				type: "submit",
				class: "sbsong-main-btn",
				id: "sbsong-submit"
			}, "Сохранить песню"), H("button", {
				type: "button",
				"data-sbsong-action": "cancel"
			}, "Отмена")], -1)
		])]));
	}
};
// src/vue/account/legacySongEditorBridge.js
function Wu({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SONG_EDITOR, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-song-editor");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, Uu, {
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
var Gu = {
	id: "sbsong-artist-manager",
	class: "sbsong-artist-manager",
	"data-sb-vue-artist-manager": ""
}, Ku = {
	key: 0,
	class: "sbsong-artist-hint"
}, qu = { id: "sbsong-artist-manager-results" }, Ju = ["data-id", "aria-label"], Yu = {
	key: 0,
	class: "sbsong-artist-hint"
}, Xu = {
	__name: "ArtistManager",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ F(t.model.filter || ""), r = (e) => String(e || "").normalize("NFKC").toLocaleLowerCase("ru"), i = K(() => t.model.artists.filter((e) => r(e.name).includes(r(n.value))));
		return (t, r) => (B(), V("section", Gu, [
			r[1] ||= H("div", { class: "sbsong-subhead" }, [H("h2", null, "Мои артисты"), H("button", {
				type: "button",
				"data-sbsong-action": "artists-manage"
			}, "Закрыть ×")], -1),
			r[2] ||= H("p", null, "Создавай свой список исполнителей и музыкальных проектов. Артисты из «ДНК артиста» и сохранённых песен также доступны при выборе. Удаление из списка не меняет существующие песни.", -1),
			e.model.dnaCount ? (B(), V("p", Ku, " Профилей ДНК артиста доступно для выбора: " + O(e.model.dnaCount) + ". Они не удаляются при изменении этого списка. ", 1)) : G("", !0),
			r[3] ||= H("div", { class: "sbsong-artist-manager-new" }, [H("input", {
				id: "sbsong-artist-manager-add",
				type: "text",
				maxlength: "120",
				placeholder: "Имя артиста или проекта",
				"aria-label": "Новый артист"
			}), H("button", {
				type: "button",
				class: "sbsong-main-btn",
				"data-sbsong-action": "artist-manager-add"
			}, " + Добавить артиста ")], -1),
			I(H("input", {
				"onUpdate:modelValue": r[0] ||= (e) => n.value = e,
				id: "sbsong-artist-manager-filter",
				type: "search",
				placeholder: "Фильтр по имени…",
				"aria-label": "Фильтр моих артистов"
			}, null, 512), [[q, n.value]]),
			H("div", qu, [(B(!0), V(z, null, R(i.value, (e) => (B(), V("div", {
				key: e.id,
				class: "sbsong-artist-entry"
			}, [H("span", null, O(e.name), 1), H("button", {
				type: "button",
				"data-sbsong-action": "artist-remove",
				"data-id": e.id,
				"aria-label": "Удалить артиста " + e.name
			}, "Удалить", 8, Ju)]))), 128)), i.value.length ? G("", !0) : (B(), V("p", Yu, O(e.model.artists.length ? "Ничего не найдено." : "Пока нет добавленных вручную артистов."), 1))])
		]));
	}
};
// src/vue/account/legacyArtistManagerBridge.js
function Zu({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ARTIST_MANAGER, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-artist-manager");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, Xu, { model: o });
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
var Qu = { key: 0 }, $u = {
	key: 0,
	class: "sb-dna-grid"
}, ed = ["data-id"], td = { class: "sb-dna-cardimg" }, nd = ["src"], rd = {
	key: 1,
	class: "sb-dna-empty"
}, id = {
	key: 1,
	class: "sb-dna-detail"
}, ad = { class: "sb-dna-actions" }, od = ["data-id"], sd = ["data-id"], cd = ["data-id"], ld = { class: "sb-dna-hero" }, ud = { class: "sb-dna-portrait" }, dd = ["src"], fd = { class: "sb-dna-facts" }, pd = {
	key: 0,
	class: "sb-dna-restrictions"
}, md = { class: "sb-dna-descr" }, hd = { class: "sb-dna-style" }, gd = { class: "sb-dna-actions" }, _d = ["data-id"], vd = ["data-id"], yd = { class: "sb-dna-related" }, bd = ["data-id"], xd = { key: 1 }, Sd = {
	__name: "ArtistDNA",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => e.model.detail ? (B(), V("div", id, [
			H("div", ad, [
				n[1] ||= H("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "dna-list"
				}, "← Все артисты", -1),
				H("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "dna-apply",
					"data-id": e.model.detail.id
				}, "В Suno Studio", 8, od),
				H("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "dna-edit",
					"data-id": e.model.detail.id
				}, "Изменить", 8, sd),
				H("button", {
					type: "button",
					class: "btn danger small",
					"data-action": "dna-delete",
					"data-id": e.model.detail.id
				}, "Удалить", 8, cd)
			]),
			H("div", ld, [H("div", ud, [e.model.detail.portrait ? (B(), V("img", {
				key: 0,
				src: e.model.detail.portrait,
				alt: "Портрет артиста",
				loading: "lazy"
			}, null, 8, dd)) : (B(), V(z, { key: 1 }, [W("♫")], 64))]), H("div", null, [
				n[2] ||= H("span", null, "МУЗЫКАЛЬНАЯ ИДЕНТИЧНОСТЬ", -1),
				H("h2", null, O(e.model.detail.name), 1),
				H("p", null, O(e.model.detail.subtitle), 1)
			])]),
			H("div", fd, [(B(!0), V(z, null, R(e.model.detail.facts, (e) => (B(), V("div", {
				key: e.label,
				class: "sb-dna-fact"
			}, [H("span", null, O(e.label), 1), H("strong", null, O(e.value), 1)]))), 128))]),
			(B(!0), V(z, null, R(e.model.detail.textFields, (e) => (B(), V("section", {
				key: e.label,
				class: "sb-dna-descr"
			}, [H("h3", null, O(e.label), 1), H("p", null, O(e.value), 1)]))), 128)),
			e.model.detail.forbids.length ? (B(), V("div", pd, [n[3] ||= H("strong", null, "Запреты:", -1), (B(!0), V(z, null, R(e.model.detail.forbids, (e) => (B(), V("span", { key: e }, O(e), 1))), 128))])) : G("", !0),
			H("section", md, [
				n[4] ||= H("h3", null, "Промпт для Suno Style", -1),
				H("div", hd, O(e.model.detail.style), 1),
				H("div", gd, [H("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "dna-copy",
					"data-id": e.model.detail.id
				}, "Копировать Style", 8, _d), H("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "dna-apply",
					"data-id": e.model.detail.id
				}, "Применить в Suno Studio", 8, vd)])
			]),
			H("div", yd, [H("h3", null, "Связанные паспорта треков (" + O(e.model.detail.related.length) + ")", 1), e.model.detail.related.length ? (B(!0), V(z, { key: 0 }, R(e.model.detail.related, (e) => (B(), V("button", {
				key: e.id,
				type: "button",
				class: "sb-dna-tracklink",
				"data-action": "dna-track",
				"data-id": e.id
			}, [H("strong", null, O(e.title), 1), H("span", null, O(e.status) + " →", 1)], 8, bd))), 128)) : (B(), V("p", xd, "Пока нет привязанных треков. В «Паспорте трека» можно выбрать этого артиста."))])
		])) : (B(), V("div", Qu, [e.model.profiles.length ? (B(), V("div", $u, [(B(!0), V(z, null, R(e.model.profiles, (e) => (B(), V("button", {
			key: e.id,
			type: "button",
			class: "sb-dna-card",
			"data-action": "dna-open",
			"data-id": e.id
		}, [
			H("div", td, [e.portrait ? (B(), V("img", {
				key: 0,
				src: e.portrait,
				alt: "",
				loading: "lazy"
			}, null, 8, nd)) : (B(), V(z, { key: 1 }, [W("♫")], 64))]),
			H("div", null, [
				H("strong", null, O(e.name), 1),
				H("span", null, O(e.genre), 1),
				H("small", null, O(e.timbre), 1)
			]),
			n[0] ||= H("span", { class: "sb-dna-arrow" }, "→", -1)
		], 8, ed))), 128))])) : (B(), V("div", rd, " Здесь будут музыкальные персонажи со своим вокалом, инструментами, стилем и визуальным образом. Создай первый профиль. "))]));
	}
};
// src/vue/account/legacyArtistDNABridge.js
function Cd({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_DNA, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-dna-view");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, Sd, { model: o });
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
var wd = {
	id: "dna-editor",
	class: "panel sb-dna-editor",
	"data-sb-vue-dna-editor": ""
}, Td = { class: "sb-dna-formheader" }, Ed = { class: "sb-dna-fields" }, Dd = { class: "field" }, Od = { class: "field" }, kd = ["value"], Ad = { class: "field" }, jd = ["value"], Md = { class: "field" }, Nd = { class: "field" }, Pd = { class: "field" }, Fd = {
	key: 0,
	class: "sb-dna-fields"
}, Id = { class: "field" }, Ld = { class: "field" }, Rd = { class: "field" }, zd = ["for"], Bd = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"rows"
], Vd = { class: "sb-dna-checkboxes" }, Hd = ["id", "onUpdate:modelValue"], Ud = { class: "field" }, Wd = ["for"], Gd = [
	"id",
	"onUpdate:modelValue",
	"rows",
	"maxlength"
], Kd = { class: "field" }, qd = { class: "sb-dna-previewbox" }, Jd = { id: "dna-style-preview" }, Yd = { id: "dna-style-count" }, Xd = {
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
		return (t, s) => (B(), V("div", wd, [
			H("div", Td, [H("div", null, [H("h2", null, O(e.model.editing ? "Редактирование ДНК" : "Новый артист"), 1), s[10] ||= H("p", null, "Сохрани характер звучания — он будет доступен в Suno Studio и «Паспорте трека».", -1)]), s[11] ||= H("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "dna-cancel"
			}, "Закрыть", -1)]),
			H("div", Ed, [
				H("div", Dd, [s[12] ||= H("label", { for: "dna-name" }, "Имя артиста *", -1), I(H("input", {
					id: "dna-name",
					"onUpdate:modelValue": s[0] ||= (e) => n.name = e,
					maxlength: "120",
					placeholder: "Название музыкального проекта"
				}, null, 512), [[q, n.name]])]),
				H("div", Od, [s[13] ||= H("label", { for: "dna-project" }, "Связанный проект", -1), I(H("select", {
					id: "dna-project",
					"onUpdate:modelValue": s[1] ||= (e) => n.projectId = e
				}, [(B(!0), V(z, null, R(e.model.projects, (e) => (B(), V("option", {
					key: e.id,
					value: e.id
				}, O(e.title), 9, kd))), 128))], 512), [[J, n.projectId]])]),
				H("div", Ad, [s[14] ||= H("label", { for: "dna-genre" }, "Основной жанр", -1), I(H("select", {
					id: "dna-genre",
					"onUpdate:modelValue": s[2] ||= (e) => n.genre = e
				}, [(B(!0), V(z, null, R(e.model.genres, (e) => (B(), V("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, jd))), 128))], 512), [[J, n.genre]])]),
				H("div", Md, [s[15] ||= H("label", { for: "dna-othergenres" }, "Дополнительные жанры", -1), I(H("input", {
					id: "dna-othergenres",
					"onUpdate:modelValue": s[3] ||= (e) => n.otherGenres = e,
					maxlength: "240",
					placeholder: "Например, pop, R&B, electropop"
				}, null, 512), [[q, n.otherGenres]])]),
				H("div", Nd, [s[17] ||= H("label", { for: "dna-vocal" }, "Тип вокала", -1), I(H("select", {
					id: "dna-vocal",
					"onUpdate:modelValue": s[4] ||= (e) => n.vocal = e
				}, [...s[16] ||= [
					H("option", { value: "male" }, "Мужской", -1),
					H("option", { value: "female" }, "Женский", -1),
					H("option", { value: "duet" }, "Дуэт", -1)
				]], 512), [[J, n.vocal]])]),
				H("div", Pd, [s[19] ||= H("label", { for: "dna-language" }, "Язык песни", -1), I(H("select", {
					id: "dna-language",
					"onUpdate:modelValue": s[5] ||= (e) => n.language = e
				}, [...s[18] ||= [
					H("option", { value: "Russian" }, "Русский", -1),
					H("option", { value: "English" }, "Английский", -1),
					H("option", { value: "Spanish" }, "Испанский", -1),
					H("option", { value: "Kazakh" }, "Казахский", -1)
				]], 512), [[J, n.language]])])
			]),
			s[24] ||= H("h3", { class: "sb-dna-formsection" }, "Голос и музыкальный почерк", -1),
			(B(), V(z, null, R(i, (e) => (B(), V(z, { key: e.id }, [e.id === "mood" ? (B(), V("div", Fd, [H("div", Id, [s[20] ||= H("label", { for: "dna-tempo-min" }, "Темп от (BPM)", -1), I(H("input", {
				id: "dna-tempo-min",
				"onUpdate:modelValue": s[6] ||= (e) => n.tempoMin = e,
				maxlength: "3",
				placeholder: "Например, 90"
			}, null, 512), [[q, n.tempoMin]])]), H("div", Ld, [s[21] ||= H("label", { for: "dna-tempo-max" }, "Темп до (BPM)", -1), I(H("input", {
				id: "dna-tempo-max",
				"onUpdate:modelValue": s[7] ||= (e) => n.tempoMax = e,
				maxlength: "3",
				placeholder: "Например, 120"
			}, null, 512), [[q, n.tempoMax]])])])) : G("", !0), H("div", Rd, [H("label", { for: "dna-" + e.id }, O(e.label), 9, zd), I(H("textarea", {
				id: "dna-" + e.id,
				"onUpdate:modelValue": (t) => n[e.key] = t,
				maxlength: e.max,
				rows: e.rows
			}, null, 8, Bd), [[q, n[e.key]]])])], 64))), 64)),
			s[25] ||= H("h3", { class: "sb-dna-formsection" }, "Запреты и ограничения", -1),
			H("div", Vd, [(B(), V(z, null, R(a, (e) => H("label", { key: e.id }, [I(H("input", {
				id: "dna-" + e.id,
				"onUpdate:modelValue": (t) => n[e.key] = t,
				type: "checkbox"
			}, null, 8, Hd), [[ko, n[e.key]]]), W(" " + O(e.label), 1)])), 64))]),
			H("div", Ud, [s[22] ||= H("label", { for: "dna-extra" }, "Дополнительные требования к аранжировке", -1), I(H("textarea", {
				id: "dna-extra",
				"onUpdate:modelValue": s[8] ||= (e) => n.extra = e,
				rows: "3",
				maxlength: "650"
			}, null, 512), [[q, n.extra]])]),
			s[26] ||= H("h3", { class: "sb-dna-formsection" }, "Творческий образ", -1),
			(B(), V(z, null, R(o, (e) => H("div", {
				key: e.id,
				class: "field"
			}, [H("label", { for: "dna-" + e.id }, O(e.label), 9, Wd), I(H("textarea", {
				id: "dna-" + e.id,
				"onUpdate:modelValue": (t) => n[e.key] = t,
				rows: e.rows,
				maxlength: e.max
			}, null, 8, Gd), [[q, n[e.key]]])])), 64)),
			H("div", Kd, [s[23] ||= H("label", { for: "dna-portrait" }, "Ссылка на портрет (HTTPS)", -1), I(H("input", {
				id: "dna-portrait",
				"onUpdate:modelValue": s[9] ||= (e) => n.portrait = e,
				maxlength: "2000",
				placeholder: "https://…"
			}, null, 512), [[q, n.portrait]])]),
			s[27] ||= H("h3", { class: "sb-dna-formsection" }, "Промпт ДНК для Suno", -1),
			H("div", qd, [H("div", Jd, O(r.value), 1), H("span", Yd, O(r.value.length) + " / 1000", 1)]),
			s[28] ||= H("div", { class: "sb-dna-actions" }, [H("button", {
				type: "button",
				class: "btn primary",
				"data-action": "dna-save"
			}, "Сохранить ДНК артиста"), H("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "dna-copy-form"
			}, "Копировать промпт")], -1),
			s[29] ||= H("p", { class: "sb-dna-muted" }, " Описания и запреты — подсказки для генерации, а не гарантия идентичного голоса. Все данные пока хранятся локально в браузере. ", -1)
		]));
	}
};
// src/vue/account/legacyArtistDNAEditorBridge.js
function Zd({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_DNA_EDITOR, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-dna-editor");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, Xd, {
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
var Qd = {
	id: "sbs-page",
	class: "sbs-page",
	"data-sb-vue-settings": ""
}, $d = { class: "sbs-layout" }, ef = { class: "sbs-main-column" }, tf = { class: "sbs-panel" }, nf = {
	class: "sbs-field sbs-theme-field",
	for: "sbs-theme"
}, rf = ["value"], af = ["for"], of = { class: "sbs-option-text" }, sf = { class: "sbs-switch" }, cf = [
	"id",
	"onUpdate:modelValue",
	"data-sbs-setting",
	"aria-label"
], lf = { class: "sbs-panel" }, uf = {
	class: "sbs-field",
	for: "sbs-start"
}, df = ["value"], ff = { class: "sbs-panel" }, pf = {
	class: "sbs-field",
	for: "sbs-name"
}, mf = { class: "sbs-side-column" }, hf = { class: "sbs-panel sbs-reset-panel" }, gf = {
	key: 0,
	class: "sbs-confirm"
}, _f = {
	key: 1,
	type: "button",
	class: "sbs-secondary",
	"data-sbs-action": "reset"
}, vf = ["hidden"], yf = {
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
		return L(() => {
			t.model.resetPending && Sn(() => document.querySelector("#sb-vue-account-settings .sbs-confirm-button")?.focus());
		}), (t, a) => (B(), V("section", Qd, [
			a[17] ||= aa("<header class=\"sbs-heading\"><button type=\"button\" class=\"sbs-back\" data-sbs-action=\"close\">← Вернуться в кабинет</button><div class=\"sbs-eyebrow\">SUNOBOOM · ЛИЧНЫЙ КАБИНЕТ</div><div class=\"sbs-heading-row\"><div><h1>Настройки</h1><p>Настрой музыкальную мастерскую под себя. Изменения применяются сразу и сохраняются в этом браузере.</p></div><span class=\"sbs-badge\">⚙️ ПЕРСОНАЛИЗАЦИЯ</span></div></header>", 1),
			H("div", $d, [H("div", ef, [
				H("section", tf, [
					a[5] ||= H("div", { class: "sbs-panel-head" }, [H("span", {
						class: "sbs-symbol",
						"aria-hidden": "true"
					}, "🎨"), H("div", null, [H("h2", null, "Внешний вид"), H("p", null, "Удобная работа на компьютере и телефоне")])], -1),
					H("label", nf, [a[3] ||= H("span", null, "Тема приложения", -1), I(H("select", {
						id: "sbs-theme",
						"onUpdate:modelValue": a[0] ||= (e) => n.theme = e,
						"data-sbs-setting": "theme",
						"aria-label": "Тема приложения"
					}, [(B(!0), V(z, null, R(e.model.themes, (e) => (B(), V("option", {
						key: e.id,
						value: e.id
					}, O(e.title), 9, rf))), 128))], 512), [[J, n.theme]])]),
					a[6] ||= H("p", { class: "sbs-help sbs-theme-help" }, "Выбери палитру: тёмную, светлую, системную или одну из шести цветных тем. Изменения сохраняются.", -1),
					(B(), V(z, null, R(i, (e) => H("label", {
						key: e.key,
						class: "sbs-option",
						for: "sbs-" + e.key
					}, [H("span", of, [H("strong", null, O(e.title), 1), H("small", null, O(e.desc), 1)]), H("span", sf, [I(H("input", {
						id: "sbs-" + e.key,
						"onUpdate:modelValue": (t) => n[e.key] = t,
						type: "checkbox",
						"data-sbs-setting": e.key,
						role: "switch",
						"aria-label": e.title
					}, null, 8, cf), [[ko, n[e.key]]]), a[4] ||= H("span", {
						class: "sbs-switch-track",
						"aria-hidden": "true"
					}, null, -1)])], 8, af)), 64))
				]),
				H("section", lf, [
					a[8] ||= H("div", { class: "sbs-panel-head" }, [H("span", {
						class: "sbs-symbol",
						"aria-hidden": "true"
					}, "🏠"), H("div", null, [H("h2", null, "При открытии сайта"), H("p", null, "Выбери стартовый раздел SUNOBOOM")])], -1),
					H("label", uf, [a[7] ||= H("span", null, "Стартовая страница", -1), I(H("select", {
						id: "sbs-start",
						"onUpdate:modelValue": a[1] ||= (e) => n.startPage = e,
						"data-sbs-setting": "startPage"
					}, [(B(!0), V(z, null, R(e.model.pages, (e) => (B(), V("option", {
						key: e.id,
						value: e.id
					}, O(e.title), 9, df))), 128))], 512), [[J, n.startPage]])]),
					a[9] ||= H("p", { class: "sbs-help" }, "Применяется при следующем открытии или обновлении сайта. Ссылки на конкретные карточки жанров сохраняют свой переход.", -1)
				]),
				H("section", ff, [
					a[11] ||= H("div", { class: "sbs-panel-head" }, [H("span", {
						class: "sbs-symbol",
						"aria-hidden": "true"
					}, "👤"), H("div", null, [H("h2", null, "Профиль"), H("p", null, "Имя отображается только в локальном кабинете")])], -1),
					H("label", pf, [a[10] ||= H("span", null, "Имя в кабинете", -1), I(H("input", {
						id: "sbs-name",
						"onUpdate:modelValue": a[2] ||= (e) => r.value = e,
						type: "text",
						maxlength: "60",
						autocomplete: "off",
						placeholder: "Твоё имя"
					}, null, 512), [[q, r.value]])]),
					a[12] ||= H("button", {
						type: "button",
						class: "sbs-primary",
						"data-sbs-action": "save-name"
					}, "Сохранить имя", -1)
				])
			]), H("aside", mf, [a[16] ||= aa("<section class=\"sbs-panel\"><div class=\"sbs-panel-head\"><span class=\"sbs-symbol\" aria-hidden=\"true\">🔒</span><div><h2>Данные и приватность</h2></div></div><p class=\"sbs-info\">Сейчас SUNOBOOM работает как локальный прототип: твои проекты и настройки сохраняются в браузере. Синхронизации между устройствами пока нет.</p><p class=\"sbs-info\">GitHub Pages остаётся публичной демонстрационной площадкой — полноценный закрытый вход по приглашениям ещё не подключён.</p><button type=\"button\" class=\"sbs-secondary\" data-sbs-action=\"backup\">↓ Перейти к резервным копиям</button></section>", 1), H("section", hf, [
				a[14] ||= H("div", { class: "sbs-panel-head" }, [H("span", {
					class: "sbs-symbol",
					"aria-hidden": "true"
				}, "↺"), H("div", null, [H("h2", null, "Сброс предпочтений")])], -1),
				a[15] ||= H("p", { class: "sbs-info" }, "Вернуть стандартные параметры отображения. Песни, проекты, избранное и имя профиля не удаляются.", -1),
				e.model.resetPending ? (B(), V("div", gf, [...a[13] ||= [H("strong", null, "Сбросить настройки интерфейса?", -1), H("div", null, [H("button", {
					type: "button",
					class: "sbs-secondary",
					"data-sbs-action": "cancel-reset"
				}, "Отмена"), H("button", {
					type: "button",
					class: "sbs-confirm-button",
					"data-sbs-action": "confirm-reset"
				}, "Да, сбросить")], -1)]])) : (B(), V("button", _f, "Сбросить настройки"))
			])])]),
			H("p", {
				id: "sbs-message",
				class: "sbs-message",
				role: "status",
				"aria-live": "polite",
				hidden: !e.model.message
			}, O(e.model.message), 9, vf)
		]));
	}
};
// src/vue/account/legacyAccountSettingsBridge.js
function bf({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SETTINGS, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-account-settings");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, yf, { model: o });
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
var xf = {
	class: "sbp-layout",
	"data-sb-vue-player-lab": ""
}, Sf = {
	class: "sbp-main",
	"aria-label": "Плеер"
}, Cf = {
	class: "sbp-bars",
	"aria-hidden": "true"
}, wf = { class: "sbp-title-area" }, Tf = {
	id: "sbp-now-tag",
	class: "sbp-now-tag"
}, Ef = { id: "sbp-title" }, Df = { id: "sbp-artist" }, Of = {
	id: "sbp-counter",
	class: "sbp-counter"
}, kf = { class: "sbp-progress" }, Af = ["value", "disabled"], jf = { class: "sbp-times" }, Mf = { id: "sbp-time-current" }, Nf = { id: "sbp-time-total" }, Pf = { class: "sbp-transport" }, Ff = ["aria-pressed"], If = ["aria-label", "disabled"], Lf = ["title", "aria-label"], Rf = { class: "sbp-extras" }, zf = { class: "sbp-volume" }, Bf = {
	key: 0,
	class: "sbp-ios-volume"
}, Vf = ["value"], Hf = { id: "sbp-volume-label" }, Uf = {
	class: "sbp-speed",
	for: "sbp-rate"
}, Wf = ["value"], Gf = ["value"], Kf = { class: "sbp-side" }, qf = { class: "sbp-side-head" }, Jf = { id: "sbp-list-count" }, Yf = ["disabled"], Xf = {
	class: "sbp-track-list",
	id: "sbp-list",
	"aria-label": "Список треков"
}, Zf = ["data-sbp-item"], Qf = ["data-index", "aria-label"], $f = { class: "sbp-track-index" }, ep = { class: "sbp-track-meta" }, tp = { class: "sbp-track-duration" }, np = ["data-index", "aria-label"], rp = {
	key: 0,
	class: "sbp-empty"
}, ip = {
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
		let t = e, n = /* @__PURE__ */ F(t.initialModel);
		function r() {
			let e = t.api.snapshot();
			e && (n.value = e);
		}
		L(() => {
			window.addEventListener("sunoboom:player-lab-update", r), r();
		}), gr(() => window.removeEventListener("sunoboom:player-lab-update", r));
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
		return (e, t) => (B(), V("div", xf, [H("section", Sf, [
			H("div", { class: D(["sbp-art", { "is-playing": n.value.playing }]) }, [
				t[0] ||= H("div", { class: "sbp-art-orb" }, "♫", -1),
				H("div", Cf, [(B(!0), V(z, null, R($t(i), (e) => (B(), V("i", {
					key: e.index,
					style: E({
						"--sbp-i": e.index,
						"--sbp-h": e.height
					})
				}, null, 4))), 128))]),
				t[1] ||= H("span", null, "SONIC LAB / PRIVATE PREVIEW", -1)
			], 2),
			H("div", wf, [H("div", null, [
				H("div", Tf, O(n.value.nowTag), 1),
				H("h2", Ef, O(n.value.title), 1),
				H("p", Df, O(n.value.artist), 1)
			]), H("span", Of, O(n.value.counter), 1)]),
			H("div", kf, [
				t[2] ||= H("label", {
					for: "sbp-seek",
					class: "sbp-sr"
				}, "Позиция воспроизведения", -1),
				H("input", {
					id: "sbp-seek",
					type: "range",
					min: "0",
					max: "1000",
					step: "1",
					value: n.value.seekValue,
					disabled: n.value.seekDisabled,
					"aria-label": "Перемотка трека",
					style: E({ "--fill": n.value.seekValue / 10 + "%" })
				}, null, 12, Af),
				H("div", jf, [H("span", Mf, O(n.value.currentTime), 1), H("span", Nf, O(n.value.totalTime), 1)])
			]),
			H("div", Pf, [
				H("button", {
					type: "button",
					class: D(["sbp-secondary", { "is-on": n.value.shuffle }]),
					id: "sbp-shuffle",
					"data-sbp-action": "shuffle",
					"aria-label": "Случайный порядок",
					"aria-pressed": String(n.value.shuffle),
					title: "Случайный порядок"
				}, "⤨", 10, Ff),
				t[3] ||= H("button", {
					type: "button",
					class: "sbp-secondary sbp-skip",
					"data-sbp-action": "prev",
					"aria-label": "Предыдущий трек"
				}, [H("svg", {
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					focusable: "false"
				}, [H("path", {
					d: "M6 5v14",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2.5",
					"stroke-linecap": "round"
				}), H("path", {
					d: "M18 5 8 12l10 7V5Z",
					fill: "currentColor"
				})])], -1),
				H("button", {
					type: "button",
					class: "sbp-play",
					id: "sbp-play",
					"data-sbp-action": "play",
					"aria-label": n.value.playing ? "Пауза" : "Воспроизвести",
					disabled: !n.value.count
				}, O(n.value.playing ? "❚❚" : "▶"), 9, If),
				t[4] ||= H("button", {
					type: "button",
					class: "sbp-secondary sbp-skip",
					"data-sbp-action": "next",
					"aria-label": "Следующий трек"
				}, [H("svg", {
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					focusable: "false"
				}, [H("path", {
					d: "M18 5v14",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2.5",
					"stroke-linecap": "round"
				}), H("path", {
					d: "m6 5 10 7-10 7V5Z",
					fill: "currentColor"
				})])], -1),
				H("button", {
					type: "button",
					class: D(["sbp-secondary", { "is-on": n.value.repeat !== "off" }]),
					"data-sbp-action": "repeat",
					id: "sbp-repeat",
					title: n.value.repeatLabel,
					"aria-label": n.value.repeatLabel
				}, O(n.value.repeat === "one" ? "↻₁" : "↻"), 11, Lf)
			]),
			H("div", Rf, [H("div", zf, [n.value.ios ? (B(), V("span", Bf, "📱 Громкость регулируется кнопками телефона")) : (B(), V(z, { key: 1 }, [
				t[5] ||= H("label", { for: "sbp-volume" }, "Громкость", -1),
				t[6] ||= H("span", {
					id: "sbp-volume-icon",
					"aria-hidden": "true"
				}, "◖))", -1),
				H("input", {
					id: "sbp-volume",
					type: "range",
					min: "0",
					max: "100",
					value: n.value.volume,
					"aria-label": "Громкость"
				}, null, 8, Vf),
				H("output", Hf, O(n.value.volume) + "%", 1)
			], 64))]), H("label", Uf, [t[7] ||= W(" Скорость ", -1), H("select", {
				id: "sbp-rate",
				"aria-label": "Скорость воспроизведения",
				value: n.value.rate
			}, [(B(), V(z, null, R(a, (e) => H("option", {
				key: e,
				value: e
			}, O(e) + "×", 9, Gf)), 64))], 8, Wf)])]),
			I(H("div", {
				class: "sbp-message",
				id: "sbp-message",
				role: "status",
				"aria-live": "polite"
			}, O(n.value.message), 513), [[qa, n.value.message]])
		]), H("aside", Kf, [
			H("div", qf, [H("div", null, [t[8] ||= H("h2", null, "Очередь воспроизведения", -1), H("small", Jf, O(n.value.count) + " " + O(n.value.count === 1 ? "трек" : n.value.count > 1 && n.value.count < 5 ? "трека" : "треков"), 1)]), H("button", {
				type: "button",
				class: "sbp-clear",
				"data-sbp-action": "clear",
				id: "sbp-clear",
				disabled: !n.value.count
			}, "Очистить", 8, Yf)]),
			t[9] ||= aa("<div class=\"sbp-dropzone\" id=\"sbp-dropzone\"><div class=\"sbp-drop-icon\">↥</div><strong>Загрузи свои треки</strong><p>MP3, WAV, M4A, AAC, OGG, FLAC — если формат поддерживается браузером. Файлы никуда не отправляются.</p><label class=\"sbp-upload-label\" for=\"sbp-file\">Выбрать аудиофайлы</label><input id=\"sbp-file\" type=\"file\" accept=\"audio/*,.mp3,.m4a,.aac,.wav,.ogg,.flac,.opus\" multiple></div><div class=\"sbp-demo-box\"><div><strong>Нет аудиофайлов?</strong><p>Создать 3 коротких оригинальных демо-сигнала для проверки управления.</p></div><button type=\"button\" data-sbp-action=\"demo\" id=\"sbp-demo\">+ Демо-треки</button></div>", 2),
			H("div", Xf, [(B(!0), V(z, null, R(n.value.tracks, (e) => (B(), V("article", {
				key: e.id,
				class: D(["sbp-track", { "is-current": e.isCurrent }]),
				"data-sbp-item": e.id
			}, [
				H("button", {
					type: "button",
					class: "sbp-track-play",
					"data-sbp-action": "select",
					"data-index": e.index,
					"aria-label": "Включить " + e.name
				}, [H("span", $f, O(e.playLabel), 1), H("span", ep, [H("strong", null, O(e.name), 1), H("small", null, O(e.artist) + " · " + O(e.sourceLabel), 1)])], 8, Qf),
				H("span", tp, O(e.durationLabel), 1),
				H("button", {
					type: "button",
					class: "sbp-track-remove",
					"data-sbp-action": "remove",
					"data-index": e.index,
					title: "Удалить из списка",
					"aria-label": "Удалить " + e.name
				}, "×", 8, np)
			], 10, Zf))), 128)), n.value.tracks.length ? G("", !0) : (B(), V("div", rp, " Плейлист пока пуст. Добавь MP3 или нажми «Демо-треки», чтобы начать тест. "))])
		])]));
	}
};
// src/vue/player/legacyPlayerLabBridge.js
function ap({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PLAYER_LAB, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-player-lab");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, ip, {
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
var op = { class: "sbab-files" }, sp = ["data-sbab-card"], cp = { class: "sbab-file-top" }, lp = { class: "sbab-side-label" }, up = ["id"], dp = ["id"], fp = ["id"], pp = { class: "sbab-file-bottom" }, mp = ["for"], hp = ["id", "data-sbab-file"], gp = ["data-side", "disabled"], _p = ["id"], vp = { class: "sbab-console" }, yp = { class: "sbab-console-top" }, bp = { id: "sbab-active-label" }, xp = { class: "sbab-wave" }, Sp = {
	class: "sbab-wave-bars",
	"aria-hidden": "true"
}, Cp = {
	class: "sbab-toggle",
	role: "group",
	"aria-label": "Выбор версии для прослушивания"
}, wp = ["data-side", "aria-pressed"], Tp = { class: "sbab-scrub" }, Ep = ["value", "disabled"], Dp = { class: "sbab-times" }, Op = { id: "sbab-current" }, kp = { id: "sbab-duration" }, Ap = { class: "sbab-transport" }, jp = ["disabled", "aria-label"], Mp = { class: "sbab-clip" }, Np = { class: "sbab-clip-actions" }, Pp = {
	type: "button",
	"data-sbab-action": "mark-start"
}, Fp = { id: "sbab-start" }, Ip = {
	type: "button",
	"data-sbab-action": "mark-end"
}, Lp = { id: "sbab-end" }, Rp = ["aria-pressed", "aria-label"], zp = { class: "sbab-volume" }, Bp = { key: 0 }, Vp = ["for"], Hp = [
	"id",
	"data-sbab-vol",
	"value"
], Up = ["hidden"], Wp = { class: "sbab-review" }, Gp = { class: "sbab-rating-grid" }, Kp = { class: "sbab-rating-label" }, qp = [
	"data-sbab-score",
	"aria-label",
	"value"
], Jp = ["value"], Yp = { class: "sbab-note-grid" }, Xp = ["for"], Zp = [
	"id",
	"data-sbab-note",
	"placeholder",
	"value"
], Qp = {
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
		let t = e, n = /* @__PURE__ */ F(t.initialModel), r = ["A", "B"], i = [
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
		return L(() => {
			window.addEventListener("sunoboom:player-ab-update", o), o();
		}), gr(() => window.removeEventListener("sunoboom:player-ab-update", o)), (e, t) => (B(), V("section", {
			id: "sbab-compare",
			class: D(["sbab-shell", {
				"sbab-is-playing": n.value.playing,
				"sbab-has-files": n.value.hasBoth
			}]),
			"aria-label": "Сравнение аудиоверсий A и B",
			"data-sb-vue-player-ab": ""
		}, [
			t[16] ||= H("header", { class: "sbab-heading" }, [H("div", null, [
				H("span", { class: "sbab-kicker" }, "SUNOBOOM · AUDIO TEST LAB"),
				H("h2", null, "A/B-сравнение аудиоверсий"),
				H("p", null, "Загрузи два варианта песни и переключайся между ними в одной временной точке. Сравнивай вокал, аранжировку и финальное звучание.")
			]), H("span", { class: "sbab-lab-badge" }, "A ↔ B")], -1),
			H("div", op, [(B(), V(z, null, R(r, (e) => H("div", {
				key: e,
				class: D(["sbab-file-card", [e === "A" ? "sbab-card-a" : "sbab-card-b", { "sbab-active-card": n.value.active === e }]]),
				"data-sbab-card": e
			}, [
				H("div", cp, [H("span", lp, "ВЕРСИЯ " + O(e), 1), H("span", {
					class: "sbab-loaded",
					id: "sbab-ready-" + e
				}, O(n.value.files[e].ready ? "Файл добавлен" : "Ожидает файл"), 9, up)]),
				H("strong", {
					class: "sbab-filename",
					id: "sbab-name-" + e
				}, O(n.value.files[e].name), 9, dp),
				H("p", {
					class: "sbab-filesub",
					id: "sbab-info-" + e
				}, O(n.value.files[e].info), 9, fp),
				H("div", pp, [
					H("label", {
						class: "sbab-upload",
						for: "sbab-file-" + e
					}, [t[0] ||= H("svg", {
						viewBox: "0 0 24 24",
						width: "19",
						height: "19",
						"aria-hidden": "true"
					}, [H("path", {
						d: "M12 5v14M5 12h14",
						stroke: "currentColor",
						"stroke-width": "2",
						"stroke-linecap": "round"
					})], -1), W(" " + O(n.value.files[e].ready ? "Заменить файл" : "Выбрать файл"), 1)], 8, mp),
					H("input", {
						type: "file",
						id: "sbab-file-" + e,
						accept: "audio/*,.mp3,.wav,.m4a,.aac,.ogg,.flac,.opus",
						"data-sbab-file": e
					}, null, 8, hp),
					H("button", {
						type: "button",
						"data-sbab-action": "remove",
						"data-side": e,
						class: "sbab-remove",
						disabled: !n.value.files[e].ready
					}, "Удалить", 8, gp),
					H("span", {
						class: "sbab-length",
						id: "sbab-length-" + e
					}, O(n.value.files[e].duration), 9, _p)
				])
			], 10, sp)), 64))]),
			t[17] ||= H("div", { class: "sbab-demo-row" }, [H("p", null, "Для первого теста можно создать два разных оригинальных коротких аудиофрагмента."), H("button", {
				type: "button",
				"data-sbab-action": "demo"
			}, "Создать демо A и B")], -1),
			H("div", vp, [
				H("div", yp, [t[1] ||= H("span", { class: "sbab-kicker" }, "АКТИВНОЕ ПРОСЛУШИВАНИЕ", -1), H("span", bp, "Версия " + O(n.value.active) + O(n.value.playing ? " · Воспроизведение" : ""), 1)]),
				H("div", xp, [H("div", Sp, [(B(!0), V(z, null, R($t(a), (e, t) => (B(), V("i", {
					key: t,
					style: E({ "--bar-height": e })
				}, null, 4))), 128))]), t[2] ||= H("div", { class: "sbab-wave-center" }, "A / B", -1)]),
				H("div", Cp, [(B(), V(z, null, R(r, (e) => H("button", {
					key: e,
					type: "button",
					class: D(e === "A" ? "sbab-btn-a" : "sbab-btn-b"),
					"data-sbab-action": "select",
					"data-side": e,
					"aria-pressed": String(n.value.active === e)
				}, [W(O(e) + " ", 1), H("small", null, "Версия " + O(e), 1)], 10, wp)), 64))]),
				H("div", Tp, [
					t[3] ||= H("label", {
						for: "sbab-seek",
						class: "sbab-sr"
					}, "Перемотка A/B", -1),
					H("input", {
						type: "range",
						id: "sbab-seek",
						min: "0",
						max: "1000",
						step: "1",
						value: n.value.seek,
						disabled: !n.value.canSeek
					}, null, 8, Ep),
					H("div", Dp, [H("span", Op, O(n.value.currentTime), 1), H("span", kp, O(n.value.duration), 1)])
				]),
				H("div", Ap, [
					t[4] ||= H("button", {
						type: "button",
						"data-sbab-action": "back",
						"aria-label": "На 5 секунд назад"
					}, [H("svg", {
						viewBox: "0 0 24 24",
						width: "21",
						height: "21",
						"aria-hidden": "true"
					}, [H("path", {
						d: "M7 5v14M18 5 8 12l10 7V5Z",
						stroke: "currentColor",
						"stroke-width": "2",
						fill: "currentColor",
						"stroke-linejoin": "round",
						"stroke-linecap": "round"
					})])], -1),
					H("button", {
						type: "button",
						class: "sbab-big-play",
						id: "sbab-play",
						"data-sbab-action": "toggle",
						disabled: !n.value.canPlay,
						"aria-label": n.value.playing ? "Пауза" : "Воспроизвести"
					}, O(n.value.playing ? "❚❚" : "▶"), 9, jp),
					t[5] ||= H("button", {
						type: "button",
						"data-sbab-action": "forward",
						"aria-label": "На 5 секунд вперёд"
					}, [H("svg", {
						viewBox: "0 0 24 24",
						width: "21",
						height: "21",
						"aria-hidden": "true"
					}, [H("path", {
						d: "M17 5v14M6 5l10 7-10 7V5Z",
						stroke: "currentColor",
						"stroke-width": "2",
						fill: "currentColor",
						"stroke-linejoin": "round",
						"stroke-linecap": "round"
					})])], -1)
				]),
				H("div", Mp, [t[9] ||= H("div", { class: "sbab-clip-title" }, [H("strong", null, "Повтор выбранного фрагмента"), H("small", null, "Например, только припев или куплет")], -1), H("div", Np, [
					H("button", Pp, [t[6] ||= W("Начало: ", -1), H("span", Fp, O(n.value.start), 1)]),
					H("button", Ip, [t[7] ||= W("Конец: ", -1), H("span", Lp, O(n.value.end), 1)]),
					H("button", {
						type: "button",
						"data-sbab-action": "loop",
						id: "sbab-loop",
						"aria-pressed": String(n.value.loop),
						"aria-label": n.value.loop ? "Повтор фрагмента включён" : "Повтор фрагмента выключен"
					}, O(n.value.loop ? "↻ Повтор включён" : "↻ Повтор выкл."), 9, Rp),
					t[8] ||= H("button", {
						type: "button",
						"data-sbab-action": "clear-segment",
						"aria-label": "Очистить границы фрагмента"
					}, "✕", -1)
				])]),
				H("div", zp, [n.value.ios ? (B(), V("span", Bp, "📱 Громкость регулируется кнопками телефона")) : (B(), V(z, { key: 1 }, R(r, (e) => H("label", {
					key: e,
					for: "sbab-vol-" + e
				}, [W(" Уровень " + O(e) + " ", 1), H("input", {
					id: "sbab-vol-" + e,
					"data-sbab-vol": e,
					type: "range",
					min: "0",
					max: "100",
					value: n.value.volume[e]
				}, null, 8, Hp)], 8, Vp)), 64))]),
				H("p", {
					id: "sbab-status",
					class: "sbab-status",
					role: "status",
					"aria-live": "polite",
					hidden: !n.value.status
				}, O(n.value.status), 9, Up)
			]),
			H("section", Wp, [
				t[14] ||= H("header", null, [H("h3", null, "Оценка на слух"), H("p", null, "Субъективное сравнение. Оценки выставляешь ты — автоматического анализа качества здесь нет.")], -1),
				H("div", Gp, [
					t[11] ||= H("div", { class: "sbab-rating-head" }, "Параметр", -1),
					t[12] ||= H("div", { class: "sbab-rating-head" }, "A", -1),
					t[13] ||= H("div", { class: "sbab-rating-head" }, "B", -1),
					(B(), V(z, null, R(i, (e) => (B(), V(z, { key: e.key }, [H("div", Kp, O(e.label), 1), (B(), V(z, null, R(r, (r) => H("div", { key: r }, [H("select", {
						"data-sbab-score": r + ":" + e.key,
						"aria-label": e.label + " — версия " + r,
						value: n.value.scores[r][e.key]
					}, [t[10] ||= H("option", { value: 0 }, "—", -1), (B(), V(z, null, R(5, (e) => H("option", {
						key: e,
						value: e
					}, O(e) + "/5", 9, Jp)), 64))], 8, qp)])), 64))], 64))), 64))
				]),
				H("div", Yp, [(B(), V(z, null, R(r, (e) => H("label", {
					key: e,
					for: "sbab-note-" + e
				}, [W(" Заметки по " + O(e) + " ", 1), H("textarea", {
					id: "sbab-note-" + e,
					"data-sbab-note": e,
					rows: "3",
					maxlength: "1000",
					placeholder: e === "A" ? "Сильные стороны, что улучшить…" : "Вокал, баланс, пространство…",
					value: n.value.notes[e]
				}, null, 8, Zp)], 8, Xp)), 64))]),
				t[15] ||= H("div", { class: "sbab-review-actions" }, [H("button", {
					type: "button",
					"data-sbab-action": "copy",
					class: "sbab-review-copy"
				}, "Скопировать результаты"), H("button", {
					type: "button",
					"data-sbab-action": "reset-review",
					class: "sbab-review-clear"
				}, "Очистить оценки")], -1)
			]),
			t[18] ||= H("p", { class: "sbab-footer-note" }, "Файлы не передаются на сервер. При переключении используется одинаковая временная позиция в секундах; точное совпадение музыкальных моментов зависит от самих версий. Для честного сравнения выровняй их громкость. На телефоне переключение может иметь небольшую паузу из-за браузера.", -1)
		], 2));
	}
};
// src/vue/player/legacyPlayerABBridge.js
function $p({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PLAYER_AB, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-player-ab");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, Qp, {
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
var em = ["data-id", "aria-pressed"], tm = { class: "sbpc-song-main" }, nm = { class: "sbpc-song-meta" }, rm = { class: "sbpc-tiny-progress" }, im = {
	key: 0,
	class: "sbpc-empty"
}, am = {
	__name: "ProducerSongList",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ F(t.model.query || ""), r = (e) => String(e ?? "").normalize("NFKC").toLocaleLowerCase("ru"), i = K(() => {
			let e = r(n.value.trim());
			return t.model.records.filter((t) => r(t.searchText).includes(e));
		});
		function a(e) {
			n.value = String(e.detail?.query ?? "");
		}
		return L(() => window.addEventListener("sunoboom:producer-search", a)), _r(() => window.removeEventListener("sunoboom:producer-search", a)), (t, n) => (B(), V(z, null, [(B(!0), V(z, null, R(i.value, (t) => (B(), V("button", {
			key: t.id,
			type: "button",
			class: D(["sbpc-song", { active: t.id === e.model.selectedId }]),
			"data-pc-action": "open",
			"data-id": t.id,
			"aria-pressed": t.id === e.model.selectedId
		}, [
			H("span", tm, [H("strong", null, O(t.title), 1), H("span", null, O(t.artist), 1)]),
			H("span", nm, [H("b", null, O(t.done) + "/" + O(t.total), 1), H("small", null, O(t.nextLabel ? "Следующий этап: " + t.nextLabel : "Все этапы отмечены готовыми"), 1)]),
			H("span", rm, [H("i", { style: E({ width: t.percent + "%" }) }, null, 4)])
		], 10, em))), 128)), i.value.length ? G("", !0) : (B(), V("p", im, O(e.model.hasRecords ? "Поиск не дал результатов. Измени запрос или создай новую рабочую карточку." : "Пока нет рабочих карточек. Начни с первой песни выше."), 1))], 64));
	}
};
// src/vue/producer/legacyProducerSongListBridge.js
function om({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PRODUCER_LIST, n = document.getElementById("app");
	if (!t || typeof t.snapshot != "function" || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sbpc-list[data-sb-vue-producer-list]");
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
// src/vue/producer/ProducerSongDetail.vue
var sm = {
	class: "sbpc-workspace",
	"data-sb-vue-producer-detail": ""
}, cm = { class: "sbpc-panel sbpc-song-head" }, lm = { class: "sbpc-head-top" }, um = { class: "sbpc-completion" }, dm = { class: "sbpc-next" }, fm = { class: "sbpc-meta-editor" }, pm = { class: "sbpc-wide" }, mm = { class: "sbpc-panel" }, hm = { class: "sbpc-panel-head" }, gm = ["aria-valuenow"], _m = { class: "sbpc-stages" }, vm = ["data-status"], ym = { class: "sbpc-stage-index" }, bm = { class: "sbpc-stage-body" }, xm = { class: "sbpc-stage-title" }, Sm = { class: "sbpc-stage-state" }, Cm = {
	key: 0,
	class: "sbpc-resource-present"
}, wm = {
	key: 1,
	class: "sbpc-resource-empty"
}, Tm = { class: "sbpc-stage-actions" }, Em = [
	"onUpdate:modelValue",
	"data-pc-stage",
	"aria-label"
], Dm = ["value"], Om = ["data-step"], km = { class: "sbpc-panel" }, Am = { class: "sbpc-links" }, jm = ["for"], Mm = [
	"id",
	"onUpdate:modelValue",
	"data-pc-link"
], Nm = ["value"], Pm = ["data-type", "data-id"], Fm = { class: "sbpc-panel sbpc-arrangement" }, Im = { class: "sbpc-panel-head" }, Lm = { class: "sbpc-arrangement-actions" }, Rm = {
	key: 0,
	type: "button",
	"data-pc-action": "restore-arrangement"
}, zm = {
	key: 0,
	class: "sbpc-subnote"
}, Bm = { class: "sbpc-panel" }, Vm = { class: "sbpc-panel-head" }, Hm = {
	key: 0,
	class: "sbpc-log"
}, Um = {
	key: 1,
	class: "sbpc-empty"
}, Wm = {
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
		return (t, a) => (B(), V("div", sm, [
			H("section", cm, [
				H("div", lm, [a[3] ||= H("span", { class: "sbpc-kicker" }, "КАРТОЧКА ПРОДЮСИРОВАНИЯ", -1), H("span", um, O(e.model.percent) + "% готовности", 1)]),
				H("h2", null, O(e.model.title || "Без названия"), 1),
				H("p", null, O(e.model.artist || "Исполнитель пока не указан") + O(e.model.projectTitle ? " · " + e.model.projectTitle : ""), 1),
				H("p", dm, O(e.model.nextLabel ? "Следующий этап: " + e.model.nextLabel : "Все этапы отмечены готовыми"), 1),
				H("div", fm, [
					H("label", null, [a[4] ||= W("Название песни ", -1), I(H("input", {
						id: "sbpc-title",
						"onUpdate:modelValue": a[0] ||= (e) => n.title = e,
						type: "text",
						maxlength: "120"
					}, null, 512), [[q, n.title]])]),
					H("label", null, [a[5] ||= W("Артист / проект ", -1), I(H("input", {
						id: "sbpc-artist",
						"onUpdate:modelValue": a[1] ||= (e) => n.artist = e,
						type: "text",
						maxlength: "120"
					}, null, 512), [[q, n.artist]])]),
					H("label", pm, [a[6] ||= W("Продюсерские заметки ", -1), I(H("textarea", {
						id: "sbpc-notes",
						"onUpdate:modelValue": a[2] ||= (e) => n.notes = e,
						rows: "3",
						maxlength: "3500",
						placeholder: "Что важно сохранить об этой песне?"
					}, null, 512), [[q, n.notes]])])
				]),
				a[7] ||= H("div", { class: "sbpc-head-actions" }, [H("button", {
					type: "button",
					class: "sbpc-main-btn",
					"data-pc-action": "save-details"
				}, "Сохранить карточку"), H("button", {
					type: "button",
					class: "sbpc-delete-btn",
					"data-pc-action": "delete"
				}, "Удалить рабочую карточку")], -1),
				a[8] ||= H("p", { class: "sbpc-help" }, "Удаление рабочей карточки не удаляет идеи, паспорта, промпты и аудио.", -1)
			]),
			H("section", mm, [
				H("header", hm, [a[9] ||= H("h3", null, "Маршрут песни", -1), H("span", null, O(e.model.done) + " из " + O(e.model.total) + " этапов", 1)]),
				H("div", {
					class: "sbpc-progress",
					role: "progressbar",
					"aria-label": "Готовность работы",
					"aria-valuemin": "0",
					"aria-valuemax": "100",
					"aria-valuenow": e.model.percent
				}, [H("span", { style: E({ width: e.model.percent + "%" }) }, null, 4)], 8, gm),
				H("div", _m, [(B(!0), V(z, null, R(e.model.stages, (t) => (B(), V("article", {
					key: t.key,
					class: "sbpc-stage",
					"data-status": i[t.key]
				}, [H("div", ym, O(i[t.key] === "done" ? "✓" : t.index), 1), H("div", bm, [
					H("div", xm, [H("strong", null, O(t.title), 1), H("small", null, O(t.desc), 1)]),
					H("div", Sm, [t.hasMaterial ? (B(), V("span", Cm, "● " + O(t.materialLabel), 1)) : (B(), V("span", wm, "○ Подтверждённых материалов нет"))]),
					H("div", Tm, [H("label", null, [a[10] ||= W("Готовность ", -1), I(H("select", {
						"onUpdate:modelValue": (e) => i[t.key] = e,
						"data-pc-stage": t.key,
						"aria-label": "Этап " + t.title
					}, [(B(!0), V(z, null, R(e.model.statuses, (e) => (B(), V("option", {
						key: e.id,
						value: e.id
					}, O(e.label), 9, Dm))), 128))], 8, Em), [[J, i[t.key]]])]), H("button", {
						type: "button",
						"data-pc-action": "open-stage",
						"data-step": t.key
					}, "Открыть инструмент ↗", 8, Om)])
				])], 8, vm))), 128))]),
				a[11] ||= H("p", { class: "sbpc-help" }, "Готовность отмечается вручную. Наличие материала показано отдельно и не считается автоматически завершённым этапом.", -1)
			]),
			H("section", km, [
				a[12] ||= H("header", { class: "sbpc-panel-head" }, [H("h3", null, "Связанные материалы"), H("span", null, "Без копирования данных")], -1),
				a[13] ||= H("p", { class: "sbpc-help" }, "Свяжи существующие идеи, промпты, паспорт трека и карточку с аудио. Исходные записи останутся в своих разделах.", -1),
				H("div", Am, [(B(!0), V(z, null, R(e.model.links, (e) => (B(), V("div", {
					key: e.field,
					class: "sbpc-link-field"
				}, [
					H("label", { for: "sbpc-" + e.field }, O(e.label), 9, jm),
					I(H("select", {
						id: "sbpc-" + e.field,
						"onUpdate:modelValue": (t) => r[e.field] = t,
						"data-pc-link": e.field
					}, [(B(!0), V(z, null, R(e.options, (e) => (B(), V("option", {
						key: e.value,
						value: e.value
					}, O(e.label), 9, Nm))), 128))], 8, Mm), [[J, r[e.field]]]),
					e.value ? (B(), V("button", {
						key: 0,
						type: "button",
						"data-pc-action": "open-link",
						"data-type": e.type,
						"data-id": e.value
					}, O(e.available ? "Перейти к материалу" : "Материал недоступен") + " ↗ ", 9, Pm)) : G("", !0)
				]))), 128))]),
				a[14] ||= H("button", {
					type: "button",
					class: "sbpc-main-btn",
					"data-pc-action": "save-links"
				}, "Сохранить связи", -1)
			]),
			H("section", Fm, [
				H("header", Im, [a[15] ||= H("h3", null, "Аранжировка для этой песни", -1), H("span", null, O(e.model.arrangement.count ? e.model.arrangement.count + " блоков сохранено" : "Снимок ещё не сохранён"), 1)]),
				a[18] ||= H("p", { class: "sbpc-help" }, "Конструктор Suno Studio использует текущий рабочий черновик. Сохрани его сюда отдельно для песни; восстановление выполняется только по твоей команде.", -1),
				H("div", Lm, [
					a[16] ||= H("button", {
						type: "button",
						"data-pc-action": "capture-arrangement"
					}, "Сохранить текущую аранжировку", -1),
					e.model.arrangement.count ? (B(), V("button", Rm, "Восстановить в Studio")) : G("", !0),
					a[17] ||= H("button", {
						type: "button",
						"data-pc-action": "open-stage",
						"data-step": "arrangement"
					}, "Открыть аранжировщик ↗", -1)
				]),
				e.model.arrangement.count ? (B(), V("p", zm, " Сохранено: " + O(e.model.arrangement.savedAt) + " · " + O(e.model.arrangement.count) + " блоков · " + O(e.model.arrangement.duration || "длительность не рассчитана"), 1)) : G("", !0)
			]),
			H("section", Bm, [
				H("header", Vm, [a[19] ||= H("h3", null, "История работы", -1), H("span", null, O(e.model.history.length) + " событий", 1)]),
				a[20] ||= H("div", { class: "sbpc-log-input" }, [H("input", {
					id: "sbpc-history-note",
					type: "text",
					maxlength: "350",
					placeholder: "Добавить запись: что изменилось или что сделать дальше"
				}), H("button", {
					type: "button",
					"data-pc-action": "add-note"
				}, "Добавить")], -1),
				e.model.history.length ? (B(), V("ol", Hm, [(B(!0), V(z, null, R(e.model.history, (e, t) => (B(), V("li", { key: t }, [H("time", null, O(e.date), 1), H("span", null, O(e.text), 1)]))), 128))])) : (B(), V("p", Um, "История пока пуста."))
			])
		]));
	}
};
// src/vue/producer/legacyProducerSongDetailBridge.js
function Gm({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PRODUCER_DETAIL, n = document.getElementById("app");
	if (!t || typeof t.snapshot != "function" || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-producer-detail[data-sb-vue-producer-host]");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, Wm, { model: o });
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
var Km = {
	class: "sb-track-filters",
	role: "group",
	"aria-label": "Фильтр паспортов по этапу"
}, qm = ["data-filter", "aria-pressed"], Jm = {
	key: 0,
	class: "sb-track-list"
}, Ym = ["data-id"], Xm = {
	key: 1,
	class: "sb-track-empty"
}, Zm = {
	__name: "TrackPassportList",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (B(), V(z, null, [H("div", Km, [(B(!0), V(z, null, R(e.model.filters, (t) => (B(), V("button", {
			key: t.key,
			type: "button",
			"data-action": "tp-filter",
			"data-filter": t.key,
			class: D({ active: e.model.active === t.key }),
			"aria-pressed": e.model.active === t.key
		}, O(t.label), 11, qm))), 128))]), e.model.records.length ? (B(), V("div", Jm, [(B(!0), V(z, null, R(e.model.records, (e) => (B(), V("button", {
			key: e.id,
			type: "button",
			class: "sb-track-tile",
			"data-action": "tp-open",
			"data-id": e.id
		}, [
			n[0] ||= H("span", { class: "sb-track-note" }, "♫", -1),
			H("span", null, [
				H("strong", null, O(e.title), 1),
				H("small", null, O(e.artist), 1),
				H("small", null, O(e.statusLabel) + O(e.releaseLabel ? " · " + e.releaseLabel : ""), 1)
			]),
			n[1] ||= H("i", { "aria-hidden": "true" }, "→", -1)
		], 8, Ym))), 128))])) : (B(), V("div", Xm, O(e.model.hasRecords ? "В этой категории пока нет треков." : "Паспортов пока нет. Создай первый, чтобы объединить материалы песни."), 1))], 64));
	}
};
// src/vue/account/legacyTrackPassportListBridge.js
function Qm({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_TRACK_LIST, n = document.getElementById("app");
	if (!t || typeof t.snapshot != "function" || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-track-list[data-sb-vue-track-list]");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, Zm, { model: o });
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
var $m = {
	class: "sb-track-detail",
	"data-sb-vue-track-detail-view": ""
}, eh = { class: "sb-track-buttons" }, th = ["data-id"], nh = ["data-id"], rh = ["data-id"], ih = { class: "sb-track-hero" }, ah = { class: "sb-track-cover" }, oh = ["src"], sh = { class: "sb-track-phase" }, ch = { class: "sb-track-facts" }, lh = { class: "sb-track-buttons" }, uh = ["href"], dh = ["href"], fh = { class: "sb-track-linkgrid" }, ph = ["data-action", "data-id"], mh = {
	key: 1,
	class: "sb-track-linked sb-track-linked-empty"
}, hh = ["data-action", "data-id"], gh = {
	key: 3,
	class: "sb-track-linked sb-track-linked-empty"
}, _h = ["data-action", "data-id"], vh = {
	key: 5,
	class: "sb-track-linked sb-track-linked-empty"
}, yh = { class: "sb-track-section" }, bh = { key: 0 }, xh = ["href"], Sh = [
	"data-id",
	"data-version",
	"aria-label"
], Ch = {
	key: 1,
	class: "sb-track-disclaimer"
}, wh = { class: "sb-track-versionform" }, Th = ["data-id"], Eh = {
	__name: "TrackPassportDetail",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (B(), V("div", $m, [
			H("div", eh, [
				n[0] ||= H("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "tp-list"
				}, "← К списку", -1),
				H("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "tp-edit",
					"data-id": e.model.id
				}, "Изменить", 8, th),
				H("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "tp-event",
					"data-id": e.model.id
				}, "В календарь релизов", 8, nh),
				H("button", {
					type: "button",
					class: "btn danger small",
					"data-action": "tp-delete",
					"data-id": e.model.id
				}, "Удалить", 8, rh)
			]),
			H("div", ih, [H("div", ah, [e.model.cover ? (B(), V("img", {
				key: 0,
				src: e.model.cover,
				alt: "Обложка",
				loading: "lazy"
			}, null, 8, oh)) : (B(), V(z, { key: 1 }, [W("♫")], 64))]), H("div", null, [
				H("span", sh, O(e.model.phase), 1),
				H("h2", null, O(e.model.title), 1),
				H("p", null, O(e.model.artist), 1)
			])]),
			H("div", ch, [(B(!0), V(z, null, R(e.model.facts, (e) => (B(), V("div", {
				key: e.label,
				class: "sb-track-fact"
			}, [H("span", null, O(e.label), 1), H("strong", null, O(e.value || "Не указано"), 1)]))), 128))]),
			H("div", lh, [e.model.audio ? (B(), V("a", {
				key: 0,
				class: "btn ghost",
				href: e.model.audio,
				rel: "noopener noreferrer",
				target: "_blank"
			}, "Прослушать ↗", 8, uh)) : G("", !0), e.model.cover ? (B(), V("a", {
				key: 1,
				class: "btn ghost",
				href: e.model.cover,
				rel: "noopener noreferrer",
				target: "_blank"
			}, "Обложка ↗", 8, dh)) : G("", !0)]),
			n[8] ||= H("h3", { class: "sb-track-section" }, "Связанные материалы", -1),
			H("div", fh, [
				e.model.links[0].exists ? (B(), V("button", {
					key: 0,
					type: "button",
					class: "sb-track-linked",
					"data-action": e.model.links[0].action,
					"data-id": e.model.links[0].id
				}, [
					H("small", null, O(e.model.links[0].label), 1),
					H("strong", null, O(e.model.links[0].title), 1),
					n[1] ||= H("span", null, "Открыть →", -1)
				], 8, ph)) : (B(), V("div", mh, [H("small", null, O(e.model.links[0].label), 1), n[2] ||= H("strong", null, "Не привязан", -1)])),
				e.model.links[1].exists ? (B(), V("button", {
					key: 2,
					type: "button",
					class: "sb-track-linked",
					"data-action": e.model.links[1].action,
					"data-id": e.model.links[1].id
				}, [
					H("small", null, O(e.model.links[1].label), 1),
					H("strong", null, O(e.model.links[1].title), 1),
					n[3] ||= H("span", null, "Открыть →", -1)
				], 8, hh)) : (B(), V("div", gh, [H("small", null, O(e.model.links[1].label), 1), n[4] ||= H("strong", null, "Не привязан", -1)])),
				e.model.links[2].exists ? (B(), V("button", {
					key: 4,
					type: "button",
					class: "sb-track-linked",
					"data-action": e.model.links[2].action,
					"data-id": e.model.links[2].id
				}, [
					H("small", null, O(e.model.links[2].label), 1),
					H("strong", null, O(e.model.links[2].title), 1),
					n[5] ||= H("span", null, "Открыть →", -1)
				], 8, _h)) : (B(), V("div", vh, [H("small", null, O(e.model.links[2].label), 1), n[6] ||= H("strong", null, "Не привязан", -1)]))
			]),
			(B(!0), V(z, null, R(e.model.sections, (e) => (B(), V("section", {
				key: e.label,
				class: "sb-track-sectionbox"
			}, [H("h3", null, O(e.label), 1), H("pre", null, O(e.text), 1)]))), 128)),
			H("h3", yh, "Версии трека (" + O(e.model.versions.length) + ")", 1),
			e.model.versions.length ? (B(!0), V(z, { key: 0 }, R(e.model.versions, (t) => (B(), V("div", {
				key: t.id,
				class: "sb-track-version"
			}, [H("div", null, [
				H("strong", null, O(t.label), 1),
				H("small", null, O(t.date), 1),
				t.notes ? (B(), V("p", bh, O(t.notes), 1)) : G("", !0)
			]), H("div", null, [t.url ? (B(), V("a", {
				key: 0,
				href: t.url,
				rel: "noopener noreferrer",
				target: "_blank"
			}, "Прослушать ↗", 8, xh)) : G("", !0), H("button", {
				type: "button",
				class: "btn danger small",
				"data-action": "tp-version-remove",
				"data-id": e.model.id,
				"data-version": t.id,
				"aria-label": "Удалить версию " + t.label
			}, "×", 8, Sh)])]))), 128)) : (B(), V("p", Ch, "Версий пока нет.")),
			H("div", wh, [n[7] ||= aa("<div class=\"field\"><label for=\"tp-version-title\">Название новой версии</label><input id=\"tp-version-title\" maxlength=\"100\" placeholder=\"Демо 2 / Финальный мастер\"></div><div class=\"field\"><label for=\"tp-version-url\">Ссылка (HTTPS)</label><input id=\"tp-version-url\" type=\"url\" maxlength=\"2000\" placeholder=\"https://…\"></div><div class=\"field\"><label for=\"tp-version-notes\">Что изменилось?</label><input id=\"tp-version-notes\" maxlength=\"300\" placeholder=\"Необязательно\"></div>", 3), H("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "tp-version-add",
				"data-id": e.model.id
			}, "+ Добавить версию", 8, Th)]),
			n[9] ||= H("p", { class: "sb-track-disclaimer" }, " Связанный текст и промпт показываются из оригинальных разделов. Расчётные даты — ориентир, окончательная дата определяется издательством. ", -1)
		]));
	}
};
// src/vue/account/legacyTrackPassportDetailBridge.js
function Dh({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_TRACK_DETAIL, n = document.getElementById("app");
	if (!t || typeof t.snapshot != "function" || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-track-detail[data-sb-vue-track-detail]");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, Eh, { model: o });
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
var Oh = {
	id: "sb-track-form",
	class: "panel sb-track-form",
	"data-sb-vue-track-editor-view": ""
}, kh = { class: "sb-track-formhead" }, Ah = { class: "sb-track-fields" }, jh = ["for"], Mh = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"placeholder"
], Nh = { class: "field" }, Ph = ["value"], Fh = { class: "field" }, Ih = ["value"], Lh = { class: "field" }, Rh = ["value"], zh = { class: "field" }, Bh = ["value"], Vh = { class: "field" }, Hh = ["value"], Uh = { class: "field" }, Wh = { class: "sb-track-fields" }, Gh = { class: "field" }, Kh = { class: "field" }, qh = ["disabled"], Jh = { class: "sb-track-manual" }, Yh = {
	id: "tp-date-hint",
	class: "sb-track-hint"
}, Xh = { class: "sb-track-fields" }, Zh = ["for"], Qh = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"placeholder"
], $h = ["for"], eg = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"rows"
], tg = {
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
		return (t, r) => (B(), V("div", Oh, [
			H("div", kh, [H("h2", null, O(e.model.editing ? "Редактировать паспорт" : "Новый паспорт трека"), 1), r[9] ||= H("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "tp-cancel"
			}, "Закрыть", -1)]),
			H("div", Ah, [
				(B(!0), V(z, null, R(o.slice(0, 2), (e) => (B(), V("div", {
					key: e.id,
					class: "field"
				}, [H("label", { for: "tp-" + e.id }, O(e.label), 9, jh), I(H("input", {
					id: "tp-" + e.id,
					"onUpdate:modelValue": (t) => n[e.id] = t,
					maxlength: e.max,
					placeholder: e.placeholder
				}, null, 8, Mh), [[q, n[e.id]]])]))), 128)),
				H("div", Nh, [r[10] ||= H("label", { for: "tp-status" }, "Этап работы", -1), I(H("select", {
					id: "tp-status",
					"onUpdate:modelValue": r[0] ||= (e) => n.status = e
				}, [(B(!0), V(z, null, R(e.model.stages, (e) => (B(), V("option", {
					key: e.value,
					value: e.value
				}, O(e.label), 9, Ph))), 128))], 512), [[J, n.status]])]),
				H("div", Fh, [r[11] ||= H("label", { for: "tp-genre" }, "Жанр", -1), I(H("select", {
					id: "tp-genre",
					"onUpdate:modelValue": r[1] ||= (e) => n.genre = e
				}, [(B(!0), V(z, null, R(e.model.genres, (e) => (B(), V("option", {
					key: e.value,
					value: e.value
				}, O(e.label), 9, Ih))), 128))], 512), [[J, n.genre]])]),
				H("div", Lh, [r[13] ||= H("label", { for: "tp-project" }, "Мой проект / артист", -1), I(H("select", {
					id: "tp-project",
					"onUpdate:modelValue": r[2] ||= (e) => n.project = e
				}, [r[12] ||= H("option", { value: "" }, "Без связи", -1), (B(!0), V(z, null, R(e.model.projects, (e) => (B(), V("option", {
					key: e.value,
					value: e.value
				}, O(e.label), 9, Rh))), 128))], 512), [[J, n.project]])]),
				H("div", zh, [r[15] ||= H("label", { for: "tp-idea" }, "Идея и текст песни", -1), I(H("select", {
					id: "tp-idea",
					"onUpdate:modelValue": r[3] ||= (e) => n.idea = e
				}, [r[14] ||= H("option", { value: "" }, "Без связи", -1), (B(!0), V(z, null, R(e.model.ideas, (e) => (B(), V("option", {
					key: e.value,
					value: e.value
				}, O(e.label), 9, Bh))), 128))], 512), [[J, n.idea]])]),
				H("div", Vh, [r[17] ||= H("label", { for: "tp-prompt" }, "Мой промпт Suno", -1), I(H("select", {
					id: "tp-prompt",
					"onUpdate:modelValue": r[4] ||= (e) => n.prompt = e
				}, [r[16] ||= H("option", { value: "" }, "Без связи", -1), (B(!0), V(z, null, R(e.model.prompts, (e) => (B(), V("option", {
					key: e.value,
					value: e.value
				}, O(e.label), 9, Hh))), 128))], 512), [[J, n.prompt]])]),
				H("div", Uh, [r[18] ||= H("label", { for: "tp-publisher" }, "Издательство / дистрибьютор", -1), I(H("input", {
					id: "tp-publisher",
					"onUpdate:modelValue": r[5] ||= (e) => n.publisher = e,
					maxlength: "120",
					placeholder: "Название издательства"
				}, null, 512), [[q, n.publisher]])])
			]),
			r[22] ||= H("h3", { class: "sb-track-section" }, "Даты релиза", -1),
			H("div", Wh, [H("div", Gh, [r[19] ||= H("label", { for: "tp-submitted" }, "Передано издательству", -1), I(H("input", {
				id: "tp-submitted",
				"onUpdate:modelValue": r[6] ||= (e) => n.submitted = e,
				type: "date",
				onChange: a
			}, null, 544), [[q, n.submitted]])]), H("div", Kh, [
				r[21] ||= H("label", { for: "tp-release" }, "Дата выхода", -1),
				I(H("input", {
					id: "tp-release",
					"onUpdate:modelValue": r[7] ||= (e) => n.release = e,
					type: "date",
					disabled: !n.override
				}, null, 8, qh), [[q, n.release]]),
				H("label", Jh, [I(H("input", {
					id: "tp-override",
					"onUpdate:modelValue": r[8] ||= (e) => n.override = e,
					type: "checkbox",
					onChange: a
				}, null, 544), [[ko, n.override]]), r[20] ||= W(" Установить дату вручную ", -1)])
			])]),
			H("p", Yh, O(i.value), 1),
			r[23] ||= H("h3", { class: "sb-track-section" }, "Материалы и метаданные", -1),
			H("div", Xh, [(B(), V(z, null, R(s, (e) => H("div", {
				key: e.id,
				class: "field"
			}, [H("label", { for: "tp-" + e.id }, O(e.label), 9, Zh), I(H("input", {
				id: "tp-" + e.id,
				"onUpdate:modelValue": (t) => n[e.id] = t,
				maxlength: e.max,
				placeholder: e.placeholder
			}, null, 8, Qh), [[q, n[e.id]]])])), 64))]),
			(B(), V(z, null, R(c, (e) => H("div", {
				key: e.id,
				class: "field"
			}, [H("label", { for: "tp-" + e.id }, O(e.label), 9, $h), I(H("textarea", {
				id: "tp-" + e.id,
				"onUpdate:modelValue": (t) => n[e.id] = t,
				maxlength: e.max,
				rows: e.rows
			}, null, 8, eg), [[q, n[e.id]]])])), 64)),
			r[24] ||= H("div", { class: "sb-track-buttons" }, [H("button", {
				type: "button",
				class: "btn primary",
				"data-action": "tp-save"
			}, "Сохранить паспорт"), H("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "tp-cancel"
			}, "Отмена")], -1),
			r[25] ||= H("p", { class: "sb-track-disclaimer" }, " Обложка и аудио пока прикрепляются ссылками. Загрузка файлов будет доступна после переноса на сервер. Данные сохраняются локально и попадают в резервную копию SUNOBOOM. ", -1)
		]));
	}
};
// src/vue/account/legacyTrackPassportEditorBridge.js
function ng({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_TRACK_EDITOR, n = document.getElementById("app");
	if (!n || !t || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-track-editor[data-sb-vue-track-editor]");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, tg, {
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
var rg = { class: "field" }, ig = { class: "field" }, ag = ["value"], og = { class: "field" }, sg = { class: "field" }, cg = {
	__name: "IdeaFields",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = /* @__PURE__ */ M({ ...e.initial.values });
		return (n, r) => (B(), V(z, null, [
			H("div", rg, [r[4] ||= H("label", { for: "custom-idea-title" }, "Название песни", -1), I(H("input", {
				id: "custom-idea-title",
				"onUpdate:modelValue": r[0] ||= (e) => t.title = e,
				maxlength: "100",
				placeholder: "Например, Город на ладони"
			}, null, 512), [[q, t.title]])]),
			H("div", ig, [r[5] ||= H("label", { for: "custom-idea-genre" }, "Музыкальный жанр", -1), I(H("select", {
				id: "custom-idea-genre",
				"onUpdate:modelValue": r[1] ||= (e) => t.genre = e
			}, [(B(!0), V(z, null, R(e.initial.genres, (e) => (B(), V("option", {
				key: e.id,
				value: e.id
			}, O(e.name), 9, ag))), 128))], 512), [[J, t.genre]])]),
			H("div", og, [r[6] ||= H("label", { for: "custom-idea-text" }, "Сюжет и основная идея", -1), I(H("textarea", {
				id: "custom-idea-text",
				"onUpdate:modelValue": r[2] ||= (e) => t.text = e,
				rows: "5",
				maxlength: "3000",
				placeholder: "О чём песня и что происходит с героем?"
			}, null, 512), [[q, t.text]])]),
			H("div", sg, [r[7] ||= H("label", { for: "custom-idea-hook" }, "Фраза для припева (необязательно)", -1), I(H("input", {
				id: "custom-idea-hook",
				"onUpdate:modelValue": r[3] ||= (e) => t.hook = e,
				maxlength: "240",
				placeholder: "Запоминающаяся строчка"
			}, null, 512), [[q, t.hook]])])
		], 64));
	}
}, lg = ["value"], ug = {
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
		let t = e, n = /* @__PURE__ */ F(null);
		return L(() => {
			t.initial.highlighted && t.api.enableHighlight(n.value);
		}), (t, r) => (B(), V(z, null, [r[0] ||= H("label", { for: "custom-idea-lyrics" }, "Оригинальный текст (необязательно)", -1), H("textarea", {
			id: "custom-idea-lyrics",
			ref_key: "area",
			ref: n,
			value: e.initial.values.lyrics,
			rows: "12",
			maxlength: "20000",
			placeholder: "Куплет 1:\nТекст первого куплета...\n\nПрипев:\nТекст припева..."
		}, null, 8, lg)], 64));
	}
}, dg = { class: "field" }, fg = ["value"], pg = { class: "workbench-switches" }, mg = ["id", "onUpdate:modelValue"], hg = { class: "field" }, gg = { class: "detail-actions" }, _g = {
	type: "button",
	class: "btn ghost",
	"data-action": "copy-current-lyrics"
}, vg = ["innerHTML"], yg = { class: "field" }, bg = { class: "detail-actions" }, xg = {
	type: "button",
	class: "btn ghost",
	"data-action": "copy-current-style"
}, Sg = ["innerHTML"], Cg = {
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
		return (t, o) => (B(), V(z, null, [
			H("div", dg, [o[3] ||= H("label", { for: "lyrics-tag-preset" }, "Характер аранжировки", -1), I(H("select", {
				id: "lyrics-tag-preset",
				"onUpdate:modelValue": o[0] ||= (e) => n.preset = e
			}, [(B(), V(z, null, R(i, ([e, t]) => H("option", {
				key: e,
				value: e
			}, O(t), 9, fg)), 64))], 512), [[J, n.preset]])]),
			H("div", pg, [(B(), V(z, null, R(a, ([e, t]) => H("label", { key: e }, [I(H("input", {
				id: "lyrics-" + e,
				"onUpdate:modelValue": (t) => r[e] = t,
				type: "checkbox"
			}, null, 8, mg), [[ko, r[e]]]), W(" " + O(t), 1)])), 64))]),
			o[8] ||= H("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "format-idea-lyrics"
			}, "✨ Создать теги и усилители", -1),
			o[9] ||= H("p", { class: "workbench-note" }, "Разметка примерная: если в тексте нет названий секций, куплеты и припевы определяются по абзацам. Проверь расположение тегов перед копированием.", -1),
			H("div", hg, [o[4] ||= H("label", { for: "custom-idea-tagged" }, "Готовая версия для поля Lyrics в Suno (можно исправить вручную)", -1), I(H("textarea", {
				id: "custom-idea-tagged",
				"onUpdate:modelValue": o[1] ||= (e) => n.tagged = e,
				rows: "13",
				maxlength: "25000",
				placeholder: "[Verse 1]\n...\n\n[Chorus - powerful melodic hook]\n..."
			}, null, 512), [[q, n.tagged]])]),
			H("div", gg, [H("button", _g, [H("span", { innerHTML: e.initial.copyIcon }, null, 8, vg), o[5] ||= W(" Копировать Lyrics", -1)])]),
			H("div", yg, [o[6] ||= H("label", { for: "custom-idea-style" }, "Дополнительное описание для поля Style (до 1000 символов)", -1), I(H("textarea", {
				id: "custom-idea-style",
				"onUpdate:modelValue": o[2] ||= (e) => n.style = e,
				rows: "4",
				maxlength: "1000",
				placeholder: "Описание жанра, вокала и динамики для Suno"
			}, null, 512), [[q, n.style]])]),
			H("div", bg, [H("button", xg, [H("span", { innerHTML: e.initial.copyIcon }, null, 8, Sg), o[7] ||= W(" Копировать Style", -1)])])
		], 64));
	}
};
// src/vue/poetry/legacyIdeaEditorBridge.js
function wg({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_IDEA_EDITOR, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = /* @__PURE__ */ new Map(), i = !1;
	function a() {
		if (!i) for (let [i, a] of [
			["sb-vue-idea-fields", cg],
			["sb-vue-lyrics-source", ug],
			["sb-vue-lyrics-tools", Cg]
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
var Tg = typeof window < "u", Eg = Symbol(), Dg;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Dg ||= {});
var Og = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function kg(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function Ag(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		Fg(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function jg(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function Mg(e) {
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
var Ng = typeof navigator == "object" ? navigator : { userAgent: "" }, Pg = /Macintosh/.test(Ng.userAgent) && /AppleWebKit/.test(Ng.userAgent) && !/Safari/.test(Ng.userAgent), Fg = Tg ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Pg ? Ig : "msSaveOrOpenBlob" in Ng ? Lg : Rg : () => {};
function Ig(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? Mg(r) : jg(r.href) ? Ag(e, t, n) : (r.target = "_blank", Mg(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		Mg(r);
	}, 0));
}
function Lg(e, t = "download", n) {
	if (typeof e == "string") {
		if (jg(e)) Ag(e, t, n);
		else {
			let t = document.createElement("a");
			t.href = e, t.target = "_blank", setTimeout(function() {
				Mg(t);
			});
		}
	} else navigator.msSaveOrOpenBlob(kg(e, n), t);
}
function Rg(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return Ag(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(Og.HTMLElement)) || "safari" in Og, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || Pg) && typeof FileReader < "u") {
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
var { assign: zg } = Object;
function Bg() {
	let e = Ae(!0), t = e.run(() => /* @__PURE__ */ F({})), n = [], r = [], i = qt({
		install(e) {
			i._a = e, e.provide(Eg, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
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
var { assign: Vg } = Object, Hg = typeof document < "u";
function Ug(e) {
	return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Wg(e) {
	return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && Ug(e.default);
}
var Y = Object.assign;
function Gg(e, t) {
	let n = {};
	for (let r in t) {
		let i = t[r];
		n[r] = qg(i) ? i.map(e) : e(i);
	}
	return n;
}
var Kg = () => {}, qg = Array.isArray;
function Jg(e, t) {
	let n = {};
	for (let r in e) n[r] = r in t ? t[r] : e[r];
	return n;
}
var Yg = /#/g, Xg = /&/g, Zg = /\//g, Qg = /=/g, $g = /\?/g, e_ = /\+/g, t_ = /%5B/g, n_ = /%5D/g, r_ = /%5E/g, i_ = /%60/g, a_ = /%7B/g, o_ = /%7C/g, s_ = /%7D/g, c_ = /%20/g;
function l_(e) {
	return e == null ? "" : encodeURI("" + e).replace(o_, "|").replace(t_, "[").replace(n_, "]");
}
function u_(e) {
	return l_(e).replace(a_, "{").replace(s_, "}").replace(r_, "^");
}
function d_(e) {
	return l_(e).replace(e_, "%2B").replace(c_, "+").replace(Yg, "%23").replace(Xg, "%26").replace(i_, "`").replace(a_, "{").replace(s_, "}").replace(r_, "^");
}
function f_(e) {
	return d_(e).replace(Qg, "%3D");
}
function p_(e) {
	return l_(e).replace(Yg, "%23").replace($g, "%3F");
}
function m_(e) {
	return p_(e).replace(Zg, "%2F");
}
function h_(e) {
	if (e == null) return null;
	try {
		return decodeURIComponent("" + e);
	} catch {}
	return "" + e;
}
var g_ = /\/$/, __ = (e) => e.replace(g_, "");
function v_(e, t, n = "/") {
	let r, i = {}, a = "", o = "", s = t.indexOf("#"), c = t.indexOf("?");
	return c = s >= 0 && c > s ? -1 : c, c >= 0 && (r = t.slice(0, c), a = t.slice(c, s > 0 ? s : t.length), i = e(a.slice(1))), s >= 0 && (r ||= t.slice(0, s), o = t.slice(s, t.length)), r = T_(r ?? t, n), {
		fullPath: r + a + o,
		path: r,
		query: i,
		hash: h_(o)
	};
}
function y_(e, t) {
	let n = t.query ? e(t.query) : "";
	return t.path + (n && "?") + n + (t.hash || "");
}
function b_(e, t, n) {
	let r = t.matched.length - 1, i = n.matched.length - 1;
	return r > -1 && r === i && x_(t.matched[r], n.matched[i]) && S_(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function x_(e, t) {
	return (e.aliasOf || e) === (t.aliasOf || t);
}
function S_(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (var n in e) if (!C_(e[n], t[n])) return !1;
	return !0;
}
function C_(e, t) {
	return qg(e) ? w_(e, t) : qg(t) ? w_(t, e) : e?.valueOf() === t?.valueOf();
}
function w_(e, t) {
	return qg(t) ? e.length === t.length && e.every((e, n) => e === t[n]) : e.length === 1 && e[0] === t;
}
function T_(e, t) {
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
var E_ = {
	path: "/",
	name: void 0,
	params: {},
	query: {},
	hash: "",
	fullPath: "/",
	matched: [],
	meta: {},
	redirectedFrom: void 0
}, D_ = /* @__PURE__ */ function(e) {
	return e.pop = "pop", e.push = "push", e;
}({}), O_ = /* @__PURE__ */ function(e) {
	return e.back = "back", e.forward = "forward", e.unknown = "", e;
}({});
function k_(e) {
	if (!e) {
		if (Hg) {
			let t = document.querySelector("base");
			e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
		} else e = "/";
	}
	return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), __(e);
}
var A_ = /^[^#]+#/;
function j_(e, t) {
	return e.replace(A_, "#") + t;
}
function M_(e, t) {
	let n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
	return {
		behavior: t.behavior,
		left: r.left - n.left - (t.left || 0),
		top: r.top - n.top - (t.top || 0)
	};
}
var N_ = () => ({
	left: window.scrollX,
	top: window.scrollY
});
function P_(e) {
	let t;
	if ("el" in e) {
		let n = e.el, r = typeof n == "string" && n.startsWith("#"), i = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
		if (!i) return;
		t = M_(i, e);
	} else t = e;
	"scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left == null ? window.scrollX : t.left, t.top == null ? window.scrollY : t.top);
}
function F_(e, t) {
	return (history.state ? history.state.position - t : -1) + e;
}
var I_ = /* @__PURE__ */ new Map();
function L_(e, t) {
	I_.set(e, t);
}
function R_(e) {
	let t = I_.get(e);
	return I_.delete(e), t;
}
function z_(e) {
	return typeof e == "string" || e && typeof e == "object";
}
function B_(e) {
	return typeof e == "string" || typeof e == "symbol";
}
var X = /* @__PURE__ */ function(e) {
	return e[e.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", e[e.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", e[e.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", e[e.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", e[e.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", e;
}({}), V_ = Symbol("");
X.MATCHER_NOT_FOUND, X.NAVIGATION_GUARD_REDIRECT, X.NAVIGATION_ABORTED, X.NAVIGATION_CANCELLED, X.NAVIGATION_DUPLICATED;
function H_(e, t) {
	return Y(/* @__PURE__ */ Error(), {
		type: e,
		[V_]: !0
	}, t);
}
function U_(e, t) {
	return e instanceof Error && V_ in e && (t == null || !!(e.type & t));
}
function W_(e) {
	let t = {};
	if (e === "" || e === "?") return t;
	let n = (e[0] === "?" ? e.slice(1) : e).split("&");
	for (let e = 0; e < n.length; ++e) {
		let r = n[e].replace(e_, " "), i = r.indexOf("="), a = h_(i < 0 ? r : r.slice(0, i)), o = i < 0 ? null : h_(r.slice(i + 1));
		if (a in t) {
			let e = t[a];
			qg(e) || (e = t[a] = [e]), e.push(o);
		} else t[a] = o;
	}
	return t;
}
function G_(e) {
	let t = "";
	for (let n in e) {
		let r = e[n];
		n = f_(n), r == null ? r !== void 0 && (t += (t.length ? "&" : "") + n) : (qg(r) ? r.map((e) => e && d_(e)) : [r && d_(r)]).forEach((e) => {
			e !== void 0 && (t += (t.length ? "&" : "") + n, e != null && (t += "=" + e));
		});
	}
	return t;
}
function K_(e) {
	let t = {};
	for (let n in e) {
		let r = e[n];
		r !== void 0 && (t[n] = qg(r) ? r.map((e) => e == null ? null : "" + e) : r == null ? r : "" + r);
	}
	return t;
}
var q_ = Symbol(""), J_ = Symbol(""), Y_ = Symbol(""), X_ = Symbol(""), Z_ = Symbol("");
function Q_() {
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
function $_(e, t, n, r, i, a = (e) => e()) {
	let o = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
	return () => new Promise((s, c) => {
		let l = (e) => {
			e === !1 ? c(H_(X.NAVIGATION_ABORTED, {
				from: n,
				to: t
			})) : e instanceof Error ? c(e) : z_(e) ? c(H_(X.NAVIGATION_GUARD_REDIRECT, {
				from: t,
				to: e
			})) : (o && r.enterCallbacks[i] === o && typeof e == "function" && o.push(e), s());
		}, u = a(() => e.call(r && r.instances[i], t, n, l)), d = Promise.resolve(u);
		e.length < 3 && (d = d.then(l)), d.catch((e) => c(e));
	});
}
function ev(e, t, n, r, i = (e) => e()) {
	let a = [];
	for (let o of e) for (let e in o.components) {
		let s = o.components[e];
		if (t === "beforeRouteEnter" || o.instances[e]) {
			if (Ug(s)) {
				let c = (s.__vccOpts || s)[t];
				c && a.push($_(c, n, r, o, e, i));
			} else {
				let c = s();
				a.push(() => c.then((a) => {
					if (!a) throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);
					let s = Wg(a) ? a.default : a;
					o.mods[e] = a, o.components[e] = s;
					let c = (s.__vccOpts || s)[t];
					return c && $_(c, n, r, o, e, i)();
				}));
			}
		}
	}
	return a;
}
function tv(e, t) {
	let n = [], r = [], i = [], a = Math.max(t.matched.length, e.matched.length);
	for (let o = 0; o < a; o++) {
		let a = t.matched[o];
		a && (e.matched.find((e) => x_(e, a)) ? r.push(a) : n.push(a));
		let s = e.matched[o];
		s && (t.matched.find((e) => x_(e, s)) || i.push(s));
	}
	return [
		n,
		r,
		i
	];
}
// node_modules/vue-router/dist/vue-router.mjs
function nv(e = "") {
	let t = [], n = [["", {}]], r = 0;
	e = k_(e);
	function i(e, t = {}) {
		r++, r !== n.length && n.splice(r), n.push([e, t]);
	}
	function a(e, n, { direction: r, delta: i }) {
		let a = {
			direction: r,
			delta: i,
			type: D_.pop
		};
		for (let r of t) r(e, n, a);
	}
	let o = {
		location: "",
		state: {},
		base: e,
		createHref: j_.bind(null, e),
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
			let i = this.location, o = e < 0 ? O_.back : O_.forward;
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
var rv = /* @__PURE__ */ function(e) {
	return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.Group = 2] = "Group", e;
}({}), Z = /* @__PURE__ */ function(e) {
	return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.ParamRegExp = 2] = "ParamRegExp", e[e.ParamRegExpEnd = 3] = "ParamRegExpEnd", e[e.EscapeNext = 4] = "EscapeNext", e;
}(Z || {}), iv = {
	type: rv.Static,
	value: ""
}, av = /[a-zA-Z0-9_]/;
function ov(e) {
	if (!e) return [[]];
	if (e === "/") return [[iv]];
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
			type: rv.Static,
			value: l
		}) : n === Z.Param || n === Z.ParamRegExp || n === Z.ParamRegExpEnd ? (a.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`), a.push({
			type: rv.Param,
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
			c === "(" ? n = Z.ParamRegExp : av.test(c) ? f() : (d(), n = Z.Static, c !== "*" && c !== "?" && c !== "+" && s--);
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
var sv = "[^/]+?", cv = {
	sensitive: !1,
	strict: !1,
	start: !0,
	end: !0
}, lv = /* @__PURE__ */ function(e) {
	return e[e._multiplier = 10] = "_multiplier", e[e.Root = 90] = "Root", e[e.Segment = 40] = "Segment", e[e.SubSegment = 30] = "SubSegment", e[e.Static = 40] = "Static", e[e.Dynamic = 20] = "Dynamic", e[e.BonusCustomRegExp = 10] = "BonusCustomRegExp", e[e.BonusWildcard = -50] = "BonusWildcard", e[e.BonusRepeatable = -20] = "BonusRepeatable", e[e.BonusOptional = -8] = "BonusOptional", e[e.BonusStrict = .7000000000000001] = "BonusStrict", e[e.BonusCaseSensitive = .25] = "BonusCaseSensitive", e;
}(lv || {}), uv = /[.+*?^${}()[\]/\\]/g;
function dv(e, t) {
	let n = Y({}, cv, t), r = [], i = n.start ? "^" : "", a = [];
	for (let t of e) {
		let e = t.length ? [] : [lv.Root];
		n.strict && !t.length && (i += "/");
		for (let r = 0; r < t.length; r++) {
			let o = t[r], s = lv.Segment + (n.sensitive ? lv.BonusCaseSensitive : 0);
			if (o.type === rv.Static) r || (i += "/"), i += o.value.replace(uv, "\\$&"), s += lv.Static;
			else if (o.type === rv.Param) {
				let { value: e, repeatable: n, optional: c, regexp: l } = o;
				a.push({
					name: e,
					repeatable: n,
					optional: c
				});
				let u = l || sv;
				if (u !== sv) {
					s += lv.BonusCustomRegExp;
					try {
						`${u}`;
					} catch (t) {
						throw Error(`Invalid custom RegExp for param "${e}" (${u}): ` + t.message);
					}
				}
				let d = n ? `((?:${u})(?:/(?:${u}))*)` : `(${u})`;
				r || (d = c && t.length < 2 ? `(?:/${d})` : "/" + d), c && (d += "?"), i += d, s += lv.Dynamic, c && (s += lv.BonusOptional), n && (s += lv.BonusRepeatable), u === ".*" && (s += lv.BonusWildcard);
			}
			e.push(s);
		}
		r.push(e);
	}
	if (n.strict && n.end) {
		let e = r.length - 1;
		r[e][r[e].length - 1] += lv.BonusStrict;
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
			for (let e of i) if (e.type === rv.Static) n += e.value;
			else if (e.type === rv.Param) {
				let { value: a, repeatable: o, optional: s } = e, c = a in t ? t[a] : "";
				if (qg(c) && !o) throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);
				let l = qg(c) ? c.join("/") : c;
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
function fv(e, t) {
	let n = 0;
	for (; n < e.length && n < t.length;) {
		let r = t[n] - e[n];
		if (r) return r;
		n++;
	}
	return e.length < t.length ? e.length === 1 && e[0] === lv.Static + lv.Segment ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === lv.Static + lv.Segment ? 1 : -1 : 0;
}
function pv(e, t) {
	let n = 0, r = e.score, i = t.score;
	for (; n < r.length && n < i.length;) {
		let e = fv(r[n], i[n]);
		if (e) return e;
		n++;
	}
	if (Math.abs(i.length - r.length) === 1) {
		if (mv(r)) return 1;
		if (mv(i)) return -1;
	}
	return i.length - r.length;
}
function mv(e) {
	let t = e[e.length - 1];
	return e.length > 0 && t[t.length - 1] < 0;
}
var hv = {
	strict: !1,
	end: !0,
	sensitive: !1
};
function gv(e, t, n) {
	let r = Y(dv(ov(e.path), n), {
		record: e,
		parent: t,
		children: [],
		alias: []
	});
	return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function _v(e, t) {
	let n = [], r = /* @__PURE__ */ new Map();
	t = Jg(hv, t);
	function i(e) {
		return r.get(e);
	}
	function a(e, n, r) {
		let i = !r, s = yv(e);
		s.aliasOf = r && r.record;
		let l = Jg(t, e), u = [s];
		if ("alias" in e) {
			let t = typeof e.alias == "string" ? [e.alias] : e.alias;
			for (let e of t) u.push(yv(Y({}, s, {
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
			if (d = gv(t, n, l), r ? r.alias.push(d) : (f ||= d, f !== d && f.alias.push(d), i && e.name && !xv(d) && o(e.name)), Tv(d) && c(d), s.children) {
				let e = s.children;
				for (let t = 0; t < e.length; t++) a(e[t], d, r && r.children[t]);
			}
			r ||= d;
		}
		return f ? () => {
			o(f);
		} : Kg;
	}
	function o(e) {
		if (B_(e)) {
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
		let t = Cv(e, n);
		n.splice(t, 0, e), e.record.name && !xv(e) && r.set(e.record.name, e);
	}
	function l(e, t) {
		let i, a = {}, o, s;
		if ("name" in e && e.name) {
			if (i = r.get(e.name), !i) throw H_(X.MATCHER_NOT_FOUND, { location: e });
			s = i.record.name, a = Y(vv(t.params, i.keys.filter((e) => !e.optional).concat(i.parent ? i.parent.keys.filter((e) => e.optional) : []).map((e) => e.name)), e.params && vv(e.params, i.keys.map((e) => e.name))), o = i.stringify(a);
		} else if (e.path != null) o = e.path, i = n.find((e) => e.re.test(o)), i && (a = i.parse(o), s = i.record.name);
		else {
			if (i = t.name ? r.get(t.name) : n.find((e) => e.re.test(t.path)), !i) throw H_(X.MATCHER_NOT_FOUND, {
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
			meta: Sv(c)
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
function vv(e, t) {
	let n = {};
	for (let r of t) r in e && (n[r] = e[r]);
	return n;
}
function yv(e) {
	let t = {
		path: e.path,
		redirect: e.redirect,
		name: e.name,
		meta: e.meta || {},
		aliasOf: e.aliasOf,
		beforeEnter: e.beforeEnter,
		props: bv(e),
		children: e.children || [],
		instances: {},
		leaveGuards: /* @__PURE__ */ new Set(),
		updateGuards: /* @__PURE__ */ new Set(),
		enterCallbacks: {},
		components: "components" in e ? e.components || null : e.component && { default: e.component }
	};
	return Object.defineProperty(t, "mods", { value: {} }), t;
}
function bv(e) {
	let t = {}, n = e.props || !1;
	if ("component" in e) t.default = n;
	else for (let r in e.components) t[r] = typeof n == "object" ? n[r] : n;
	return t;
}
function xv(e) {
	for (; e;) {
		if (e.record.aliasOf) return !0;
		e = e.parent;
	}
	return !1;
}
function Sv(e) {
	return e.reduce((e, t) => Y(e, t.meta), {});
}
function Cv(e, t) {
	let n = 0, r = t.length;
	for (; n !== r;) {
		let i = n + r >> 1;
		pv(e, t[i]) < 0 ? r = i : n = i + 1;
	}
	let i = wv(e);
	return i && (r = t.lastIndexOf(i, r - 1)), r;
}
function wv(e) {
	let t = e;
	for (; t = t.parent;) if (Tv(t) && pv(e, t) === 0) return t;
}
function Tv({ record: e }) {
	return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function Ev(e) {
	let t = zn(Y_), n = zn(X_), r = K(() => {
		let n = $t(e.to);
		return t.resolve(n);
	}), i = K(() => {
		let { matched: e } = r.value, { length: t } = e, i = e[t - 1], a = n.matched;
		if (!i || !a.length) return -1;
		let o = a.findIndex(x_.bind(null, i));
		if (o > -1) return o;
		let s = jv(e[t - 2]);
		return t > 1 && jv(i) === s && a[a.length - 1].path !== s ? a.findIndex(x_.bind(null, e[t - 2])) : o;
	}), a = K(() => i.value > -1 && Av(n.params, r.value.params)), o = K(() => i.value > -1 && i.value === n.matched.length - 1 && S_(n.params, r.value.params));
	function s(n = {}) {
		if (kv(n)) {
			let n = t[$t(e.replace) ? "replace" : "push"]($t(e.to)).catch(Kg);
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
function Dv(e) {
	return e.length === 1 ? e[0] : e;
}
var Ov = /* @__PURE__ */ $n({
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
	useLink: Ev,
	setup(e, { slots: t }) {
		let n = /* @__PURE__ */ M(Ev(e)), { options: r } = zn(Y_), i = K(() => ({
			[Mv(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
			[Mv(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
		}));
		return () => {
			let r = t.default && Dv(t.default(n));
			return e.custom ? r : Na("a", {
				"aria-current": n.isExactActive ? e.ariaCurrentValue : null,
				href: n.href,
				onClick: n.navigate,
				class: i.value
			}, r);
		};
	}
});
function kv(e) {
	if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && (e.button === void 0 || e.button === 0)) {
		if (e.currentTarget && e.currentTarget.getAttribute) {
			let t = e.currentTarget.getAttribute("target");
			if (/\b_blank\b/i.test(t)) return;
		}
		return e.preventDefault && e.preventDefault(), !0;
	}
}
function Av(e, t) {
	for (let n in t) {
		let r = t[n], i = e[n];
		if (typeof r == "string") {
			if (r !== i) return !1;
		} else if (!qg(i) || i.length !== r.length || r.some((e, t) => e.valueOf() !== i[t].valueOf())) return !1;
	}
	return !0;
}
function jv(e) {
	return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
var Mv = (e, t, n) => e ?? t ?? n, Nv = /* @__PURE__ */ $n({
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
		let r = zn(Z_), i = K(() => e.route || r.value), a = zn(J_, 0), o = K(() => {
			let e = $t(a), { matched: t } = i.value, n;
			for (; (n = t[e]) && !n.components;) e++;
			return e;
		}), s = K(() => i.value.matched[o.value]);
		Rn(J_, K(() => o.value + 1)), Rn(q_, s), Rn(Z_, i);
		let c = /* @__PURE__ */ F();
		return Hn(() => [
			c.value,
			s.value,
			e.name
		], ([e, t, n], [r, i, a]) => {
			t && (t.instances[n] = e, i && i !== t && e && e === r && (t.leaveGuards.size || (t.leaveGuards = i.leaveGuards), t.updateGuards.size || (t.updateGuards = i.updateGuards))), !e || !t || i && x_(t, i) && r || (t.enterCallbacks[n] || []).forEach((t) => t(e));
		}, { flush: "post" }), () => {
			let r = i.value, a = e.name, o = s.value, l = o && o.components[a];
			if (!l) return Pv(n.default, {
				Component: l,
				route: r
			});
			let u = o.props[a], d = Na(l, Y({}, u ? u === !0 ? r.params : typeof u == "function" ? u(r) : u : null, t, {
				onVnodeUnmounted: (e) => {
					e.component.isUnmounted && (o.instances[a] = null);
				},
				ref: c
			}));
			return Pv(n.default, {
				Component: d,
				route: r
			}) || d;
		};
	}
});
function Pv(e, t) {
	if (!e) return null;
	let n = e(t);
	return n.length === 1 ? n[0] : n;
}
var Fv = Nv;
function Iv(e) {
	let t = _v(e.routes, e), n = e.parseQuery || W_, r = e.stringifyQuery || G_, i = e.history, a = Q_(), o = Q_(), s = Q_(), c = /* @__PURE__ */ Xt(E_), l = E_;
	Hg && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
	let u = Gg.bind(null, (e) => "" + e), d = Gg.bind(null, m_), f = Gg.bind(null, h_);
	function p(e, n) {
		let r, i;
		return B_(e) ? (r = t.getRecordMatcher(e), i = n) : i = e, t.addRoute(i, r);
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
			let r = v_(n, e, a.path), o = t.resolve({ path: r.path }, a), s = i.createHref(r.fullPath);
			return Y(r, o, {
				params: f(o.params),
				hash: h_(r.hash),
				redirectedFrom: void 0,
				href: s
			});
		}
		let o;
		if (e.path != null) o = Y({}, e, { path: v_(n, e.path, a.path).path });
		else {
			let t = Y({}, e.params);
			for (let e in t) t[e] ?? delete t[e];
			o = Y({}, e, { params: d(t) }), a.params = d(a.params);
		}
		let s = t.resolve(o, a), l = e.hash || "";
		s.params = u(f(s.params));
		let p = y_(r, Y({}, e, {
			hash: u_(l),
			path: s.path
		})), m = i.createHref(p);
		return Y({
			fullPath: p,
			hash: l,
			query: r === G_ ? K_(e.query) : e.query || {}
		}, s, {
			redirectedFrom: void 0,
			href: m
		});
	}
	function v(e) {
		return typeof e == "string" ? v_(n, e, c.value.path) : Y({}, e);
	}
	function y(e, t) {
		if (l !== e) return H_(X.NAVIGATION_CANCELLED, {
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
		return !o && b_(r, i, n) && (f = H_(X.NAVIGATION_DUPLICATED, {
			to: d,
			from: i
		}), de(i, i, !0, !1)), (f ? Promise.resolve(f) : re(d, i)).catch((e) => U_(e) ? U_(e, X.NAVIGATION_GUARD_REDIRECT) ? e : ue(e) : le(e, d, i)).then((e) => {
			if (e) {
				if (U_(e, X.NAVIGATION_GUARD_REDIRECT)) return S(Y({ replace: s }, v(e.to), {
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
		let n, [r, i, s] = tv(e, t);
		n = ev(r.reverse(), "beforeRouteLeave", e, t);
		for (let i of r) i.leaveGuards.forEach((r) => {
			n.push($_(r, e, t));
		});
		let c = te.bind(null, e, t);
		return n.push(c), he(n).then(() => {
			n = [];
			for (let r of a.list()) n.push($_(r, e, t));
			return n.push(c), he(n);
		}).then(() => {
			n = ev(i, "beforeRouteUpdate", e, t);
			for (let r of i) r.updateGuards.forEach((r) => {
				n.push($_(r, e, t));
			});
			return n.push(c), he(n);
		}).then(() => {
			n = [];
			for (let r of s) if (r.beforeEnter) {
				if (qg(r.beforeEnter)) for (let i of r.beforeEnter) n.push($_(i, e, t));
				else n.push($_(r.beforeEnter, e, t));
			}
			return n.push(c), he(n);
		}).then(() => (e.matched.forEach((e) => e.enterCallbacks = {}), n = ev(s, "beforeRouteEnter", e, t, ne), n.push(c), he(n))).then(() => {
			n = [];
			for (let r of o.list()) n.push($_(r, e, t));
			return n.push(c), he(n);
		}).catch((e) => U_(e, X.NAVIGATION_CANCELLED) ? e : Promise.reject(e));
	}
	function ie(e, t, n) {
		s.list().forEach((r) => ne(() => r(e, t, n)));
	}
	function C(e, t, n, r, a) {
		let o = y(e, t);
		if (o) return o;
		let s = t === E_, l = Hg ? history.state : {};
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
				}), r).catch(Kg);
				return;
			}
			l = r;
			let o = c.value;
			Hg && L_(F_(o.fullPath, n.delta), N_()), re(r, o).catch((e) => U_(e, X.NAVIGATION_ABORTED | X.NAVIGATION_CANCELLED) ? e : U_(e, X.NAVIGATION_GUARD_REDIRECT) ? (S(Y(v(e.to), { force: !0 }), r).then((e) => {
				U_(e, X.NAVIGATION_ABORTED | X.NAVIGATION_DUPLICATED) && !n.delta && n.type === D_.pop && i.go(-1, !1);
			}).catch(Kg), Promise.reject()) : (n.delta && i.go(-n.delta, !1), le(e, r, o))).then((e) => {
				e ||= C(r, o, !1), e && (n.delta && !U_(e, X.NAVIGATION_CANCELLED) ? i.go(-n.delta, !1) : n.type === D_.pop && U_(e, X.NAVIGATION_ABORTED | X.NAVIGATION_DUPLICATED) && i.go(-1, !1)), ie(r, o, e);
			}).catch(Kg);
		});
	}
	let se = Q_(), ce = Q_(), w;
	function le(e, t, n) {
		ue(e);
		let r = ce.list();
		return r.length ? r.forEach((r) => r(e, t, n)) : console.error(e), Promise.reject(e);
	}
	function T() {
		return w && c.value !== E_ ? Promise.resolve() : new Promise((e, t) => {
			se.add([e, t]);
		});
	}
	function ue(e) {
		return w || (w = !e, oe(), se.list().forEach(([t, n]) => e ? n(e) : t()), se.reset()), e;
	}
	function de(t, n, r, i) {
		let { scrollBehavior: a } = e;
		if (!Hg || !a) return Promise.resolve();
		let o = !r && R_(F_(t.fullPath, 0)) || (i || !r) && history.state && history.state.scroll || null;
		return Sn().then(() => a(t, n, o)).then((e) => e && P_(e)).catch((e) => le(e, t, n));
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
			e.component("RouterLink", Ov), e.component("RouterView", Fv), e.config.globalProperties.$router = me, Object.defineProperty(e.config.globalProperties, "$route", {
				enumerable: !0,
				get: () => $t(c)
			}), Hg && !E && c.value === E_ && (E = !0, b(i.location).catch((e) => {}));
			let t = {};
			for (let e in E_) Object.defineProperty(t, e, {
				get: () => c.value[e],
				enumerable: !0
			});
			e.provide(Y_, me), e.provide(X_, /* @__PURE__ */ Bt(t)), e.provide(Z_, c);
			let n = e.unmount;
			pe.add(e), e.unmount = function() {
				pe.delete(e), pe.size < 1 && (l = E_, ae && ae(), ae = null, c.value = E_, E = !1, w = !1), n();
			};
		}
	};
	function he(e) {
		return e.reduce((e, t) => e.then(() => ne(t)), Promise.resolve());
	}
	return me;
}
function Lv() {
	return zn(Y_);
}
function Rv(e) {
	return zn(X_);
}
var zv = Iv({
	history: nv(),
	routes: [{
		path: "/:view(.*)*",
		name: "legacy-view",
		component: { render: () => null }
	}]
}), Bv = /* @__PURE__ */ new Set([
	"projects",
	"saved",
	"myideas",
	"myprompts",
	"events",
	"tracks",
	"artists"
]);
function Vv(e, t = null) {
	let n = typeof e == "string" && e ? e : "home";
	return n === "producer" && t?.kind === "production" && typeof t.id == "string" && /^[a-zA-Z0-9_-]{1,128}$/.test(t.id) ? "/producer/detail/" + encodeURIComponent(t.id) : n === "tracks" && t?.kind === "track" ? "/account/tracks/detail" : n === "detail" ? "/catalog/detail" : Bv.has(n) ? "/account/" + n : "/" + encodeURIComponent(n);
}
function Hv(e) {
	if (e === "/catalog/detail") return "catalog";
	if (e === "/producer/detail" || e.startsWith("/producer/detail/")) return "producer";
	if (e.startsWith("/account/")) return "account";
	try {
		return decodeURIComponent(e.slice(1)) || "home";
	} catch {
		return "home";
	}
}
var Uv = null, Wv = Promise.resolve(), Gv = "replace", Kv = 0, qv = [], Jv = [], Q = -1, Yv = /* @__PURE__ */ Xt(0), Xv = /* @__PURE__ */ Vt(Yv);
function Zv() {
	Yv.value++;
}
var Qv = /* @__PURE__ */ new Set([
	"overview",
	"ideas",
	"prompts",
	"artists"
]);
function $v(e) {
	return e?.kind !== "genre" || typeof e.id != "string" || !/^[a-z0-9-]{1,100}$/.test(e.id) || !Qv.has(e.tab) ? null : Object.freeze({
		kind: "genre",
		id: e.id,
		tab: e.tab
	});
}
function ey(e) {
	return e?.kind !== "track" || typeof e.id != "string" || !/^[a-zA-Z0-9_-]{1,128}$/.test(e.id) ? null : Object.freeze({
		kind: "track",
		id: e.id
	});
}
function ty(e) {
	return $v(e) || ey(e) || (e?.kind === "production" && typeof e.id == "string" && /^[a-zA-Z0-9_-]{1,128}$/.test(e.id) ? Object.freeze({
		kind: "production",
		id: e.id
	}) : null);
}
function ny(e, t, n = null) {
	let r = ty(n);
	if (Q < 0) qv = [e], Jv = [r], Q = 0;
	else if (t === "push") qv = qv.slice(0, Q + 1), Jv = Jv.slice(0, Q + 1), qv.push(e), Jv.push(r), Q = qv.length - 1;
	else {
		let t = qv[Q] === e ? Jv[Q] : null;
		qv[Q] = e, Jv[Q] = r || t || null;
	}
	Zv();
}
function ry(e) {
	let t = e === "back" ? -1 : +(e === "forward"), n = Q + t;
	return t && n >= 0 && n < qv.length ? Object.freeze({
		path: qv[n],
		context: Jv[n] || null,
		index: n,
		offset: t
	}) : null;
}
function iy(e) {
	return ry(e);
}
function ay(e) {
	if (typeof e != "string" || !/^\/[a-z][a-z0-9-]*$/i.test(e)) return null;
	try {
		return decodeURIComponent(e.slice(1));
	} catch {
		return null;
	}
}
function oy(e, { historyMode: t = "replace", context: n = null } = {}) {
	let r = ty(n), i = Vv(e, r);
	if (i === Uv) return r && (Wv = Wv.then(() => {
		zv.currentRoute.value.path === i && Q >= 0 && qv[Q] === i && (Jv[Q] = r, Zv());
	})), Wv;
	Uv = i;
	let a = t === "push" ? "push" : "replace";
	return Wv = Wv.then(async () => {
		zv.currentRoute.value.path === i ? r && Q >= 0 && (Jv[Q] = r, Zv()) : await zv[a](i) || (ny(i, a, r), Gv = a, a === "push" && !r && Kv++);
	}).catch((e) => {
		console.warn("[SUNOBOOM] Vue Router memory navigation failed; legacy routing remains active.", e);
	}), Wv;
}
function sy() {
	return Wv;
}
function cy(e) {
	let t = Wv.then(() => {
		let t = ry(e);
		return t ? new Promise((n) => {
			let r = !1, i = () => {}, a;
			function o(o) {
				r || (r = !0, i(), clearTimeout(a), o && (Q = t.index, Uv = t.path, Gv = e, Zv()), n(o));
			}
			i = zv.afterEach((e, n, r) => o(!r && e.path === t.path)), a = setTimeout(() => o(!1), 2500), zv.go(t.offset);
		}) : !1;
	}).catch((e) => (console.warn("[SUNOBOOM] Vue memory history traversal failed; legacy navigation retained.", e), !1));
	return Wv = t.then(() => void 0), t;
}
function ly() {
	let e = zv.currentRoute.value;
	return Object.freeze({
		path: e.path,
		name: e.name,
		active: Hv(e.path),
		transition: Gv,
		menuPushes: Kv,
		canGoBack: Q > 0,
		canGoForward: Q >= 0 && Q < qv.length - 1,
		historyDepth: qv.length,
		historyPosition: Q,
		context: Jv[Q] || null
	});
}
// src/vue/VueFeatureHost.vue
var uy = {
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
		return (t, n) => (B(), Zi(wr(e.component), _e(ra(e.componentProps)), null, 16));
	}
}, dy = /* @__PURE__ */ new Set([
	"projects",
	"saved",
	"myideas",
	"myprompts",
	"events",
	"tracks",
	"artists"
]);
function fy(e) {
	return e === "detail" ? "catalog" : dy.has(e) ? "account" : e;
}
function py(e) {
	let t = fy(e?.active), n = /* @__PURE__ */ new Set(), r = !1, i = [];
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
var my = /* @__PURE__ */ Xt(Object.freeze({
	route: "home",
	active: "home",
	revision: 0
})), hy = /* @__PURE__ */ Vt(my);
function gy(e, { historyMode: t = "replace", context: n = null } = {}) {
	let r = typeof e == "string" && e ? e : "home";
	if (oy(r, {
		historyMode: t,
		context: n
	}), r === my.value.route) return my.value;
	let i = Object.freeze({
		route: r,
		active: fy(r),
		revision: my.value.revision + 1
	});
	return my.value = i, i;
}
// src/vue/navigation/NavigationMenu.vue
var _y = [
	"data-nav",
	"data-vue-router-path",
	"aria-current",
	"aria-label",
	"title",
	"onClick"
], vy = ["innerHTML"], yy = { class: "sb-vue-nav-label" }, by = {
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
		let t = Rv(), n = Lv(), r = e;
		function i(e) {
			r.onNavigate(e, n);
		}
		let a = (e) => {
			let n = hy.value;
			return (t.path === Vv(n.route) ? Hv(t.path) : n.active) === e;
		};
		return (n, r) => (B(!0), V(z, null, R(e.items, (n) => (B(), V("button", {
			key: n.id,
			type: "button",
			class: D(e.mobile ? a(n.id) ? "active" : "" : ["nav-button", { active: a(n.id) }]),
			"data-nav": n.id,
			"data-vue-router-path": $t(t).path,
			"aria-current": a(n.id) ? "page" : void 0,
			"aria-label": e.mobile ? n.label : void 0,
			title: e.mobile ? n.label : void 0,
			onClick: (e) => i(n.id)
		}, [H("span", {
			class: "sb-vue-nav-icon",
			"aria-hidden": "true",
			innerHTML: n.iconHtml
		}, null, 8, vy), H("span", yy, O(e.mobile ? n.shortLabel : n.label), 1)], 10, _y))), 128));
	}
}, xy = {
	class: "sb-vue-history-toolbar",
	role: "group",
	"aria-label": "История разделов SUNOBOOM"
}, Sy = ["disabled"], Cy = ["disabled"], wy = /*#__PURE__*/ fs({
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
		let t = e, n = Rv(), r = /* @__PURE__ */ F(!1), i = K(() => (n.path, hy.value.revision, Xv.value, {
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
		return (e, t) => (B(), V("div", xy, [
			t[4] ||= H("span", { class: "sb-vue-history-caption" }, "История разделов", -1),
			H("button", {
				type: "button",
				class: "sb-vue-history-button",
				"data-sb-history-back": "",
				disabled: !i.value.back,
				"aria-label": "Назад по разделам",
				title: "К предыдущему разделу",
				onClick: t[0] ||= (e) => a("back")
			}, [...t[2] ||= [H("svg", {
				viewBox: "0 0 24 24",
				width: "16",
				height: "16",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				"aria-hidden": "true"
			}, [H("path", { d: "m15 18-6-6 6-6" })], -1)]], 8, Sy),
			H("button", {
				type: "button",
				class: "sb-vue-history-button",
				"data-sb-history-forward": "",
				disabled: !i.value.forward,
				"aria-label": "Вперёд по разделам",
				title: "К следующему разделу",
				onClick: t[1] ||= (e) => a("forward")
			}, [...t[3] ||= [H("svg", {
				viewBox: "0 0 24 24",
				width: "16",
				height: "16",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				"aria-hidden": "true"
			}, [H("path", { d: "m9 18 6-6-6-6" })], -1)]], 8, Cy)
		]));
	}
}, [["__scopeId", "data-v-a856cee3"]]);
// src/vue/navigation/navigation-dispatch.js
function Ty(e, { router: t, legacyApi: n, syncRoute: r = gy } = {}) {
	if (typeof e != "string" || !e || !n || typeof n.snapshot != "function" || typeof n.navigate != "function") return !1;
	let i = n.snapshot()?.items;
	if (!Array.isArray(i) || !i.some((t) => t?.id === e)) return !1;
	let a = !1;
	try {
		let n = Vv(e);
		a = !!t?.resolve && t.resolve(n)?.path === n, a || console.warn("[SUNOBOOM] Vue route could not resolve; using legacy navigation:", e);
	} catch (e) {
		console.warn("[SUNOBOOM] Vue route resolution failed; using legacy navigation:", e);
	}
	n.navigate(e);
	let o = n.snapshot()?.active;
	return r(o, { historyMode: a && o === e ? "push" : "replace" }), !0;
}
// src/vue/navigation/legacy-history-restore.js
function Ey(e) {
	if (e?.active === "producer" && e?.production?.id) return Vv("producer", {
		kind: "production",
		id: e.production.id
	});
	let t = e?.track;
	return Vv(e?.active, t?.id ? {
		kind: "track",
		id: t.id
	} : null);
}
function Dy(e, t) {
	if (!e || typeof t?.snapshot != "function") return null;
	let n = t.snapshot();
	if (n?.trackEditing) return null;
	let r = ay(e.path);
	if (r && n?.items?.some((e) => e?.id === r)) return {
		kind: "menu",
		id: r
	};
	let i = e.context;
	return e.path === "/catalog/detail" && i?.kind === "genre" && typeof t.canRestoreGenre == "function" && t.canRestoreGenre(i.id, i.tab) && typeof t.restoreGenre == "function" ? {
		kind: "genre",
		id: i.id,
		tab: i.tab
	} : i?.kind === "production" && e.path === Vv("producer", i) && t.canRestoreProduction?.(i.id) === !0 && typeof t.restoreProduction == "function" ? {
		kind: "production",
		id: i.id
	} : e.path === "/account/tracks" && t.canRestoreTrackList?.() === !0 && typeof t.restoreTrackList == "function" ? { kind: "track-list" } : e.path === "/account/tracks/detail" && i?.kind === "track" && t.canRestoreTrack?.(i.id) === !0 && typeof t.restoreTrack == "function" ? {
		kind: "track",
		id: i.id
	} : null;
}
var Oy = !1;
function ky(e, { legacyApi: t } = {}) {
	if (Oy || !["back", "forward"].includes(e) || typeof t?.snapshot != "function") return !1;
	let n = iy(e), r = t.snapshot();
	return !!Dy(n, t) && ly().path === Ey(r);
}
async function Ay(e, { legacyApi: t, syncRoute: n = gy } = {}) {
	if (Oy || !["back", "forward"].includes(e) || !t || typeof t.snapshot != "function" || typeof t.navigate != "function") return !1;
	Oy = !0;
	try {
		await sy();
		let r = Dy(iy(e), t), i = t.snapshot();
		if (!r || ly().path !== Ey(i) || !await cy(e)) return !1;
		if (r.kind === "genre") {
			if (t.restoreGenre(r.id, r.tab) !== !0) return n(t.snapshot()?.active), !1;
		} else if (r.kind === "production") {
			if (t.restoreProduction(r.id) !== !0) return n(t.snapshot()?.active), !1;
		} else if (r.kind === "track-list") {
			if (t.restoreTrackList() !== !0) return n(t.snapshot()?.active), !1;
		} else if (r.kind === "track") {
			if (t.restoreTrack(r.id) !== !0) return n(t.snapshot()?.active), !1;
		} else if (r.id === "catalog" && i.active === "detail" && typeof t.returnToAcademy == "function") {
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
		Oy = !1;
	}
}
// src/vue/navigation/legacyBridge.js
var jy = [{
	key: "sidebar",
	selector: "[data-sb-vue-sidebar]",
	mobile: !1
}, {
	key: "mobile",
	selector: "[data-sb-vue-mobile]",
	mobile: !0
}];
function My({ mountVueFeature: e, unmountVueFeature: t }) {
	let n = window.SUNOBOOM_LEGACY_NAV, r = document.getElementById("app");
	if (!n || !r || typeof n.snapshot != "function") return () => {};
	let i = /* @__PURE__ */ new Map(), a = !1;
	window.SUNOBOOM_VUE_ROUTE = Object.freeze({
		snapshot: () => hy.value,
		routerSnapshot: () => ly(),
		back: () => Ay("back", { legacyApi: n }),
		forward: () => Ay("forward", { legacyApi: n }),
		recordGenre: (e, t, r = "push") => {
			let i = n.snapshot();
			return i.active !== "detail" || i.detail?.id !== e || i.detail?.tab !== t || !n.canRestoreGenre?.(e, t) ? !1 : (gy("detail", {
				historyMode: r,
				context: {
					kind: "genre",
					id: e,
					tab: t
				}
			}), !0);
		},
		recordProduction: (e, t = "push") => {
			let r = n.snapshot();
			return r.active !== "producer" || r.production?.id !== e || !n.canRestoreProduction?.(e) ? !1 : (gy("producer", {
				historyMode: t,
				context: {
					kind: "production",
					id: e
				}
			}), !0);
		},
		recordTrackList: () => {
			let e = n.snapshot();
			return e.active !== "tracks" || e.track?.id || e.trackEditing ? !1 : (gy("tracks"), !0);
		},
		recordTrack: (e, t = "push") => {
			let r = n.snapshot();
			return r.active !== "tracks" || r.track?.id !== e || r.trackEditing || !n.canRestoreTrack?.(e) ? !1 : (gy("tracks", {
				historyMode: t,
				context: {
					kind: "track",
					id: e
				}
			}), !0);
		}
	});
	function o() {
		if (a) return;
		let t = n.snapshot();
		gy(t.active, { context: t.track?.id ? {
			kind: "track",
			id: t.track.id
		} : t.active === "producer" && t.production?.id ? {
			kind: "production",
			id: t.production.id
		} : null });
		let o = py(t), s = JSON.stringify(o.map(({ active: e, ...t }) => t)), c = r.querySelector("[data-sb-vue-history]"), l = i.get("history");
		if (!c) l?.unmount(), i.delete("history");
		else if (l?.target !== c) {
			l?.unmount();
			let t = e(c, wy, {
				canRestore: (e) => ky(e, { legacyApi: n }),
				onRestore: (e) => Ay(e, { legacyApi: n })
			}, { vueRouter: !0 });
			t && i.set("history", {
				target: c,
				unmount: t
			});
		}
		for (let { key: t, selector: a, mobile: c } of jy) {
			let l = r.querySelector(a), u = i.get(t);
			if (!l) {
				u?.unmount(), i.delete(t);
				continue;
			}
			if (u?.target === l && u.signature === s) continue;
			u?.unmount();
			let d = e(l, by, {
				items: o,
				mobile: c,
				onNavigate: (e, t) => Ty(e, {
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
	let s = new MutationObserver(o), c = n.snapshot();
	return gy(c.active, { context: c.track?.id ? {
		kind: "track",
		id: c.track.id
	} : c.active === "producer" && c.production?.id ? {
		kind: "production",
		id: c.production.id
	} : null }), sy().then(() => {
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
var Ny = ["data-id"], Py = { class: "genre-content" }, Fy = { class: "kicker" }, Iy = { class: "foot" }, Ly = {
	__name: "GenreCards",
	props: { genres: {
		type: Array,
		required: !0
	} },
	setup(e) {
		return (t, n) => (B(!0), V(z, null, R(e.genres, (e) => (B(), V("button", {
			key: e.id,
			type: "button",
			class: "genre-card",
			style: E({ "--accent": e.color }),
			"data-action": "genre",
			"data-id": e.id
		}, [n[1] ||= H("div", {
			class: "art",
			"aria-hidden": "true"
		}, null, -1), H("div", Py, [H("div", null, [
			H("div", Fy, O(e.family) + " · " + O(e.bpm[0]) + "–" + O(e.bpm[1]) + " BPM", 1),
			H("h3", null, O(e.name), 1),
			H("p", null, O(e.tagline), 1)
		]), H("div", Iy, [H("span", null, O(e.era), 1), n[0] ||= H("span", { style: { color: "#ffacd9" } }, "Открыть →", -1)])])], 12, Ny))), 128));
	}
}, Ry = { class: "genre-family-toolbar" }, zy = { class: "search-box" }, By = ["innerHTML"], Vy = { class: "hint" }, Hy = { class: "genre-family-summary" }, Uy = { id: "catalog-count" }, Wy = {
	class: "hint",
	id: "sb-academy-search-hint"
}, Gy = {
	id: "catalog-cards",
	class: "genre-families"
}, Ky = [
	"data-family",
	"open",
	"onToggle"
], qy = {
	class: "genre-family-icon",
	"aria-hidden": "true"
}, Jy = { class: "genre-family-heading" }, Yy = { class: "genre-family-right" }, Xy = { class: "genre-family-count" }, Zy = { class: "genre-family-body" }, Qy = {
	key: 0,
	class: "sb-sacred-index"
}, $y = {
	key: 0,
	class: "sb-sacred-overview"
}, eb = { class: "genre-grid" }, tb = { class: "sb-sacred-religions" }, nb = [
	"data-sb-religion",
	"open",
	"onToggle"
], rb = { class: "sb-sacred-religion-header" }, ib = {
	class: "sb-sacred-religion-icon",
	"aria-hidden": "true"
}, ab = { class: "sb-sacred-religion-label" }, ob = { class: "sb-sacred-count" }, sb = { class: "sb-sacred-religion-content" }, cb = [
	"data-sb-branch",
	"open",
	"onToggle"
], lb = { class: "sb-sacred-branch-header" }, ub = { class: "sb-sacred-branch-label" }, db = { class: "sb-sacred-count" }, fb = { class: "sb-sacred-branch-content" }, pb = { class: "genre-grid" }, mb = {
	key: 1,
	class: "genre-grid"
}, hb = {
	key: 1,
	class: "genre-family-empty"
}, gb = {
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
		let t = e, n = /* @__PURE__ */ F(t.snapshot.query || ""), r = /* @__PURE__ */ M({
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
		return (t, r) => (B(), V(z, null, [
			H("div", Ry, [H("label", zy, [H("span", {
				innerHTML: e.searchIcon,
				"aria-hidden": "true"
			}, null, 8, By), I(H("input", {
				id: "genre-search",
				"onUpdate:modelValue": r[0] ||= (e) => n.value = e,
				type: "search",
				enterkeyhint: "search",
				autocapitalize: "off",
				spellcheck: "false",
				"aria-label": "Поиск жанров",
				placeholder: "Поиск жанра, поджанра или исполнителя…",
				autocomplete: "off"
			}, null, 512), [[q, n.value]])]), H("span", Vy, O(e.snapshot.families.length) + " разделов · " + O(e.snapshot.families.reduce((e, t) => e + t.genres.length, 0)) + " жанров", 1)]),
			H("div", Hy, [H("h2", Uy, O(a.value ? "Найдено жанров" : "Музыкальные жанры") + " · " + O(s.value), 1), H("span", Wy, O(c.value), 1)]),
			H("div", Gy, [o.value.length ? (B(!0), V(z, { key: 0 }, R(o.value, (e) => (B(), V("details", {
				key: e.name,
				class: "genre-family",
				"data-family": e.name,
				style: E({ "--family-accent": e.meta.accent }),
				open: f("family", e.name),
				onToggle: (t) => p("family", e.name, t)
			}, [H("summary", null, [
				H("span", qy, O(e.meta.icon), 1),
				H("span", Jy, [H("strong", null, O(e.name), 1), H("small", null, O(e.meta.desc), 1)]),
				H("span", Yy, [H("span", Xy, O(e.genres.length) + " " + O(m(e.genres.length)), 1), r[1] ||= H("svg", {
					class: "genre-family-chevron",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2",
					"aria-hidden": "true"
				}, [H("path", { d: "m5 9 7 7 7-7" })], -1)])
			]), H("div", Zy, [e.name === "Религиозная музыка" ? (B(), V("div", Qy, [
				r[5] ||= H("div", { class: "sb-sacred-intro" }, [
					H("span", { class: "sb-sacred-eyebrow" }, "МУЗЫКА МИРОВЫХ РЕЛИГИЙ"),
					H("h3", null, "Религии и музыкальные традиции"),
					H("p", null, "Открой религию, затем её направление или течение. Здесь представлены музыкальные традиции — их границы не всегда совпадают с конфессиональными.")
				], -1),
				u.value ? (B(), V("div", $y, [r[2] ||= H("div", { class: "sb-sacred-overview-label" }, "📖 Обзор раздела", -1), H("div", eb, [U(Ly, { genres: [u.value] }, null, 8, ["genres"])])])) : G("", !0),
				H("div", tb, [(B(!0), V(z, null, R(d.value, (e) => (B(), V("details", {
					key: e.id,
					class: "sb-sacred-religion",
					"data-sb-religion": e.id,
					open: f("religion", e.id),
					onToggle: (t) => p("religion", e.id, t)
				}, [H("summary", rb, [
					H("span", ib, O(e.icon), 1),
					H("span", ab, [H("strong", null, O(e.name), 1), H("small", null, O(e.description), 1)]),
					H("span", ob, O(e.count), 1),
					r[3] ||= H("span", {
						class: "sb-sacred-chevron",
						"aria-hidden": "true"
					}, "⌄", -1)
				]), H("div", sb, [(B(!0), V(z, null, R(e.branches, (e) => (B(), V("details", {
					key: e.id,
					class: "sb-sacred-branch",
					"data-sb-branch": e.id,
					open: f("branch", e.id),
					onToggle: (t) => p("branch", e.id, t)
				}, [H("summary", lb, [
					H("span", ub, [H("strong", null, O(e.name), 1), H("small", null, O(e.description), 1)]),
					H("span", db, O(e.genres.length) + " " + O(h(e.genres.length)), 1),
					r[4] ||= H("span", {
						class: "sb-sacred-chevron",
						"aria-hidden": "true"
					}, "⌄", -1)
				]), H("div", fb, [H("div", pb, [U(Ly, { genres: e.genres }, null, 8, ["genres"])])])], 40, cb))), 128))])], 40, nb))), 128))])
			])) : (B(), V("div", mb, [U(Ly, { genres: e.genres }, null, 8, ["genres"])]))])], 44, Ky))), 128)) : (B(), V("div", hb, "Ничего не найдено. Попробуй другой запрос."))])
		], 64));
	}
};
// src/vue/academy/legacyAcademyBridge.js
function _b({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ACADEMY, n = document.getElementById("app");
	if (!t || !n || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-academy-root");
		if (r?.target === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o?.families?.length) return;
		let s = e(a, gb, {
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
var vb = {
	class: "gb-grid",
	"data-sb-vue-overview": ""
}, yb = { class: "gb-column" }, bb = { class: "gb-panel pink" }, xb = { class: "gb-unit" }, Sb = { class: "gb-unit" }, Cb = { class: "gb-unit" }, wb = { class: "gb-panel" }, Tb = ["innerHTML"], Eb = { class: "gb-column" }, Db = { class: "gb-panel blue" }, Ob = {
	class: "gb-bpm-value",
	style: {
		"font-size": "26px",
		"font-weight": "900"
	}
}, kb = { class: "gb-artists" }, Ab = { class: "gb-panel pink" }, jb = ["data-id"], Mb = ["innerHTML"], Nb = {
	__name: "GenreOverview",
	props: { genre: {
		type: Object,
		required: !0
	} },
	emits: ["select-tab"],
	setup(e) {
		return (t, n) => (B(), V("div", vb, [H("div", yb, [H("section", bb, [
			n[7] ||= H("div", { class: "gb-sup" }, "01 / ЗНАКОМСТВО С ЖАНРОМ", -1),
			n[8] ||= H("h2", null, "Характер и звучание", -1),
			H("p", null, [H("strong", null, O(e.genre.tagline), 1)]),
			H("p", null, O(e.genre.description), 1),
			H("div", xb, [n[2] ||= H("b", null, "🎸", -1), H("div", null, [n[1] ||= H("strong", null, "Инструменты", -1), H("span", null, O(e.genre.instruments) + ".", 1)])]),
			H("div", Sb, [n[4] ||= H("b", null, "🎛️", -1), H("div", null, [n[3] ||= H("strong", null, "Саунд", -1), H("span", null, O(e.genre.style) + ".", 1)])]),
			H("div", Cb, [n[6] ||= H("b", null, "✍️", -1), H("div", null, [n[5] ||= H("strong", null, "Тематика песен", -1), H("span", null, O(e.genre.themes) + ".", 1)])])
		]), H("section", wb, [
			n[10] ||= H("div", { class: "gb-sup" }, "03 / ИДЕИ ДЛЯ СТАРТА", -1),
			n[11] ||= H("h2", null, "Что можно спеть", -1),
			(B(!0), V(z, null, R(e.genre.ideas, (e, t) => (B(), V("div", {
				key: t,
				class: "gb-idea"
			}, [H("strong", null, O(e.title), 1), H("p", null, O(e.pitch), 1)]))), 128)),
			H("button", {
				type: "button",
				class: "btn ghost small",
				onClick: n[0] ||= (e) => t.$emit("select-tab", "ideas")
			}, [n[9] ||= W(" Все идеи ", -1), H("span", {
				"aria-hidden": "true",
				innerHTML: e.genre.icons.arrow
			}, null, 8, Tb)])
		])]), H("div", Eb, [H("section", Db, [
			n[12] ||= H("div", { class: "gb-sup" }, "02 / ПАСПОРТ НАПРАВЛЕНИЯ", -1),
			n[13] ||= H("h2", null, "История и сцена", -1),
			n[14] ||= H("div", { class: "info-label" }, "Эпоха", -1),
			H("p", null, O(e.genre.era), 1),
			n[15] ||= H("div", { class: "info-label" }, "Диапазон темпа", -1),
			H("p", Ob, O(e.genre.bpm[0]) + "–" + O(e.genre.bpm[1]) + " BPM", 1),
			n[16] ||= H("div", { class: "info-label" }, "Исполнители для знакомства", -1),
			H("div", kb, [(B(!0), V(z, null, R(e.genre.artists, (e) => (B(), V("span", { key: e }, O(e), 1))), 128))])
		]), H("section", Ab, [n[18] ||= aa("<div class=\"gb-sup\">04 / ТВОЯ МУЗЫКА</div><h2>Преврати знания в трек</h2><p>Выбери вокал, настроение и темп, затем создай промпт и структуру песни в Suno Studio.</p><div class=\"gb-unit\"><b>🎤</b><div><strong>Вокал</strong><span>Мужской, женский или дуэт; можно использовать русский язык.</span></div></div><div class=\"gb-unit\"><b>⚡</b><div><strong>Динамика</strong><span>Настрой энергию и характер припева под историю.</span></div></div>", 5), H("button", {
			type: "button",
			class: "btn primary small",
			"data-action": "use-genre",
			"data-id": e.genre.id
		}, [H("span", {
			innerHTML: e.genre.icons.studio,
			"aria-hidden": "true"
		}, null, 8, Mb), n[17] ||= W(" Открыть студию ", -1)], 8, jb)])])]));
	}
}, Pb = {
	key: 0,
	id: "sb-artist-expanded",
	class: "ahx-wrap",
	"data-sb-vue-artists": ""
}, Fb = { class: "ahx-intro" }, Ib = { class: "gb-eyebrow" }, Lb = {
	class: "ahx-toolbar",
	role: "group",
	"aria-label": "Музыкальные сцены"
}, Rb = ["aria-pressed"], zb = ["aria-pressed"], Bb = { class: "ahx-filters" }, Vb = { class: "ahx-search" }, Hb = ["innerHTML"], Ub = {
	class: "ahx-filter-buttons",
	role: "group",
	"aria-label": "Фильтр исполнителей"
}, Wb = [
	"data-vue-artist-filter",
	"aria-pressed",
	"onClick"
], Gb = {
	id: "ahx-count",
	class: "ahx-count",
	"aria-live": "polite"
}, Kb = { class: "ahx-section-head" }, qb = { class: "ahx-eyebrow" }, Jb = { class: "ahx-num" }, Yb = { class: "ahx-grid" }, Xb = ["data-ahx-group"], Zb = { class: "ahx-card-top" }, Qb = {
	class: "ahx-avatar",
	"aria-hidden": "true"
}, $b = { class: "ahx-title" }, ex = { class: "ahx-era" }, tx = {
	key: 0,
	class: "ahx-track"
}, nx = {
	id: "ahx-no-results",
	class: "ahx-no-results"
}, rx = {
	key: 1,
	class: "ahx-empty"
}, ix = {
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
		let t = e, n = /* @__PURE__ */ F(t.catalog.initialScene()), r = /* @__PURE__ */ F(""), i = /* @__PURE__ */ F("all"), a = K(() => t.catalog.getScene(t.genre.id, n.value)), o = K(() => (a.value?.groups || []).map((e) => ({
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
			(e === "ru" || e === "world") && (n.value = e, t.catalog.setScene(e), r.value = "", i.value = "all", await Sn(), t.enhanceProfiles?.());
		}
		return L(() => t.enhanceProfiles?.()), hr(() => t.enhanceProfiles?.()), (t, u) => a.value ? (B(), V("div", Pb, [
			H("div", Fb, [
				H("div", Ib, "АКАДЕМИЯ SUNOBOOM · " + O(e.genre.name), 1),
				u[4] ||= H("h2", null, "Исполнители и композиторы", -1),
				H("p", null, O(a.value.description), 1)
			]),
			H("div", Lb, [H("button", {
				type: "button",
				"data-vue-artist-scene": "world",
				"aria-pressed": n.value === "world",
				class: D({ on: n.value === "world" }),
				onClick: u[0] ||= (e) => l("world")
			}, [u[5] ||= W(" 🌍 Мировая сцена ", -1), H("span", null, O(a.value.worldCount), 1)], 10, Rb), H("button", {
				type: "button",
				"data-vue-artist-scene": "ru",
				"aria-pressed": n.value === "ru",
				class: D({ on: n.value === "ru" }),
				onClick: u[1] ||= (e) => l("ru")
			}, [u[6] ||= W(" 🎤 Русскоязычные ", -1), H("span", null, O(a.value.ruCount), 1)], 10, zb)]),
			c.value ? (B(), V(z, { key: 0 }, [
				H("div", Bb, [H("label", Vb, [H("span", {
					"aria-hidden": "true",
					innerHTML: e.genre.icons.overview
				}, null, 8, Hb), I(H("input", {
					"onUpdate:modelValue": u[2] ||= (e) => r.value = e,
					type: "search",
					"data-vue-artist-search": "",
					placeholder: "Найти исполнителя или произведение…",
					"aria-label": "Поиск по исполнителям"
				}, null, 512), [[q, r.value]])]), H("div", Ub, [(B(), V(z, null, R([
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
				], (e) => H("button", {
					key: e.id,
					type: "button",
					"data-vue-artist-filter": e.id,
					"aria-pressed": i.value === e.id,
					onClick: (t) => i.value = e.id
				}, O(e.label), 9, Wb)), 64))])]),
				H("p", Gb, "Показано " + O(s.value) + " из " + O(c.value) + " исполнителей.", 1),
				(B(!0), V(z, null, R(o.value, (e) => I((B(), V("section", {
					key: e.index,
					class: "ahx-section",
					"data-ahx-section": ""
				}, [H("div", Kb, [H("div", null, [H("span", qb, "0" + O(e.index + 1) + " / ИСПОЛНИТЕЛИ", 1), H("h3", null, O(e.index ? "Современная сцена и продолжатели" : "Классика и предшественники"), 1)]), H("span", Jb, O(e.artists.length), 1)]), H("div", Yb, [(B(!0), V(z, null, R(e.artists, (e) => (B(), V("article", {
					key: e.key,
					class: "ahx-card",
					"data-ahx-group": e.group
				}, [
					H("div", Zb, [H("span", Qb, O(e.initials), 1), H("div", $b, [H("h4", null, O(e.name), 1), H("span", ex, O(e.period || "Музыкальная сцена"), 1)])]),
					H("span", { class: D(["ahx-role", { "ahx-role-neighbor": e.group === "adjacent" }]) }, O(e.label), 3),
					H("p", null, O(e.bio || "Музыкальное направление и характерный творческий почерк."), 1),
					e.track ? (B(), V("div", tx, [u[7] ||= H("small", null, "Ориентир для прослушивания", -1), H("strong", null, "♫ " + O(e.track), 1)])) : G("", !0)
				], 8, Xb))), 128))])])), [[qa, e.artists.length]])), 128)),
				I(H("div", nx, " По заданному поиску исполнители не найдены. Попробуй другой запрос или выбери «Все». ", 512), [[qa, s.value === 0]])
			], 64)) : (B(), V("div", rx, [
				u[8] ||= H("strong", null, "Русскоязычная подборка ещё уточняется", -1),
				u[9] ||= H("p", null, "Для этого узкого направления пока нет достаточно подтверждённых примеров. Мы не будем подставлять артистов из других жанров без пояснения.", -1),
				H("button", {
					class: "btn ghost",
					type: "button",
					onClick: u[3] ||= (e) => l("world")
				}, "Посмотреть мировую сцену")
			])),
			u[10] ||= H("p", { class: "ahx-footnote" }, "В подборках могут встречаться близкие стили, кино- и игровая музыка, инструментальные коллективы. Их связь с жанром поясняется в карточке. Указанные произведения — ориентиры для знакомства, а не ссылки на конкретные релизы.", -1)
		])) : G("", !0);
	}
}, ax = {
	class: "idea-grid",
	"data-sb-vue-ideas": ""
}, ox = { class: "idea-badge" }, sx = { class: "actions" }, cx = ["data-id", "data-i"], lx = ["innerHTML"], ux = [
	"data-id",
	"data-i",
	"aria-pressed"
], dx = ["innerHTML"], fx = {
	__name: "GenreIdeas",
	props: { genre: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (B(), V("div", ax, [(B(!0), V(z, null, R(e.genre.allIdeas, (t) => (B(), V("div", {
			key: t.index,
			class: "idea"
		}, [
			H("div", ox, O(e.genre.name) + " · " + O(t.mood), 1),
			H("h3", null, O(t.title), 1),
			H("p", null, O(t.pitch), 1),
			H("div", sx, [H("button", {
				type: "button",
				class: "btn primary small",
				"data-action": "idea-use",
				"data-id": e.genre.id,
				"data-i": t.index
			}, [H("span", {
				"aria-hidden": "true",
				innerHTML: e.genre.icons.studio
			}, null, 8, lx), n[0] ||= W(" В студию ", -1)], 8, cx), H("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "idea-save",
				"data-id": e.genre.id,
				"data-i": t.index,
				"aria-pressed": t.saved ? "true" : "false"
			}, [H("span", {
				"aria-hidden": "true",
				innerHTML: e.genre.icons.heart
			}, null, 8, dx), W(" " + O(t.saved ? "Сохранено" : "Сохранить"), 1)], 8, ux)])
		]))), 128))]));
	}
}, px = {
	class: "panel",
	"data-sb-vue-prompts": ""
}, mx = { class: "idea-grid" }, hx = { class: "idea" }, gx = ["data-id"], _x = ["innerHTML"], vx = { class: "idea" }, yx = ["data-id"], bx = ["innerHTML"], xx = {
	__name: "GenrePrompts",
	props: { genre: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (B(), V("div", px, [
			n[5] ||= H("h3", null, "Шаблоны звучания", -1),
			n[6] ||= H("p", null, "Начни с одного из вариантов. Он перенесёт настройки жанра в конструктор — там можно выбрать вокал, настроение и язык.", -1),
			H("div", mx, [H("div", hx, [
				n[1] ||= H("div", { class: "idea-badge" }, "Оригинальное звучание", -1),
				H("h3", null, O(e.genre.name), 1),
				H("p", null, O(e.genre.style) + ".", 1),
				H("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "use-genre",
					"data-id": e.genre.id
				}, [n[0] ||= W(" Настроить в студии ", -1), H("span", {
					"aria-hidden": "true",
					innerHTML: e.genre.icons.arrow
				}, null, 8, _x)], 8, gx)
			]), H("div", vx, [
				n[3] ||= H("div", { class: "idea-badge" }, "Альтернативная версия", -1),
				n[4] ||= H("h3", null, "Мягкая атмосфера", -1),
				H("p", null, O(e.genre.style) + ", restrained dynamics, warm intimate production, emotional melodies.", 1),
				H("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "use-soft",
					"data-id": e.genre.id
				}, [n[2] ||= W(" Настроить в студии ", -1), H("span", {
					"aria-hidden": "true",
					innerHTML: e.genre.icons.arrow
				}, null, 8, bx)], 8, yx)
			])])
		]));
	}
}, Sx = { class: "gb-hero" }, Cx = { class: "gb-content" }, wx = { class: "gb-eyebrow" }, Tx = { class: "gb-title" }, Ex = { class: "gb-desc" }, Dx = { class: "gb-tags" }, Ox = { class: "gb-buttons" }, kx = ["data-id"], Ax = ["innerHTML"], jx = ["data-id"], Mx = ["innerHTML"], Nx = {
	class: "gb-vinyl",
	"aria-hidden": "true"
}, Px = { class: "gb-equalizer" }, Fx = { class: "gb-facts" }, Ix = { class: "gb-fact" }, Lx = { class: "gb-fact" }, Rx = { class: "gb-fact" }, zx = { class: "gb-fact" }, Bx = { class: "genre-detail-layout" }, Vx = {
	class: "genre-side-nav",
	"aria-label": "ЖАНР-НАВ — меню жанра"
}, Hx = {
	class: "genre-side-links",
	"aria-label": "Разделы жанра"
}, Ux = [
	"data-tab",
	"aria-current",
	"onClick"
], Wx = ["innerHTML"], Gx = {
	class: "genre-detail-content",
	id: "genre-nav-content",
	"aria-label": "Содержимое раздела жанра"
}, Kx = ["innerHTML"], qx = {
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
		], r = /* @__PURE__ */ F(t.genre.tab), i = /* @__PURE__ */ F(t.tabContent(t.genre.id, r.value) || "");
		async function a(e) {
			if (r.value === e || !n.some((t) => t.id === e)) return;
			let a = t.tabContent(t.genre.id, e);
			typeof a == "string" && (r.value = e, i.value = a, await Sn(), window.innerWidth <= 850 && document.getElementById("genre-nav-content")?.scrollIntoView({
				block: "start",
				behavior: "smooth"
			}));
		}
		return (t, o) => (B(), V("div", {
			class: "genre-bright",
			style: E({ "--accent": e.genre.color })
		}, [H("div", Sx, [
			o[5] ||= H("div", { class: "gb-top" }, [H("button", {
				type: "button",
				class: "back",
				"data-action": "academy-back",
				"aria-label": "Назад к разделу Академии"
			}, "← Назад"), H("small", null, "SUNOBOOM · MUSIC ATLAS")], -1),
			H("div", Cx, [H("div", null, [
				H("div", wx, O(e.genre.family) + " · " + O(e.genre.era), 1),
				H("h1", Tx, O(e.genre.name), 1),
				H("p", Ex, O(e.genre.description), 1),
				H("div", Dx, [
					H("span", null, O(e.genre.tagline), 1),
					H("span", null, O(e.genre.bpm[0]) + "–" + O(e.genre.bpm[1]) + " BPM", 1),
					H("span", null, O(e.genre.ideasCount) + " идеи", 1)
				]),
				H("div", Ox, [H("button", {
					type: "button",
					class: "btn primary",
					"data-action": "use-genre",
					"data-id": e.genre.id
				}, [H("span", {
					innerHTML: e.genre.icons.studio,
					"aria-hidden": "true"
				}, null, 8, Ax), o[0] ||= W(" Создать в Suno ", -1)], 8, kx), H("button", {
					type: "button",
					class: "btn ghost",
					"data-action": "favorite",
					"data-id": e.genre.id
				}, [H("span", {
					innerHTML: e.genre.icons.heart,
					"aria-hidden": "true"
				}, null, 8, Mx), W(" " + O(e.genre.favorite ? "В избранном" : "В избранное"), 1)], 8, jx)])
			]), H("div", Nx, [H("div", Px, [(B(), V(z, null, R(9, (e) => H("i", { key: e })), 64))])])]),
			H("div", Fx, [
				H("div", Ix, [o[1] ||= H("small", null, "История", -1), H("strong", null, O(e.genre.era), 1)]),
				H("div", Lx, [o[2] ||= H("small", null, "Темп", -1), H("strong", null, O(e.genre.bpm[0]) + "–" + O(e.genre.bpm[1]) + " BPM", 1)]),
				H("div", Rx, [o[3] ||= H("small", null, "Треки", -1), H("strong", null, O(e.genre.ideasCount) + " сюжетных идеи", 1)]),
				H("div", zx, [o[4] ||= H("small", null, "Артисты", -1), H("strong", null, O(e.genre.artistCount) + " ориентиров", 1)])
			])
		]), H("div", Bx, [H("aside", Vx, [o[7] ||= H("div", { class: "genre-side-head" }, [H("span", null, "ЖАНР-НАВ"), H("small", null, "Разделы карточки")], -1), H("nav", Hx, [(B(), V(z, null, R(n, (t) => H("button", {
			key: t.id,
			type: "button",
			class: D(["genre-side-item", { active: r.value === t.id }]),
			"data-tab": t.id,
			"aria-controls": "genre-nav-content",
			"aria-current": r.value === t.id ? "page" : "false",
			onClick: (e) => a(t.id)
		}, [
			H("span", {
				class: "genre-side-icon",
				innerHTML: e.genre.icons[t.id],
				"aria-hidden": "true"
			}, null, 8, Wx),
			H("span", null, O(t.label), 1),
			o[6] ||= H("span", {
				class: "genre-side-chevron",
				"aria-hidden": "true"
			}, "›", -1)
		], 10, Ux)), 64))])]), H("section", Gx, [r.value === "overview" ? (B(), Zi(Nb, {
			key: 0,
			genre: e.genre,
			onSelectTab: a
		}, null, 8, ["genre"])) : r.value === "artists" && e.artistCatalog ? (B(), Zi(ix, {
			key: 1,
			genre: e.genre,
			catalog: e.artistCatalog,
			"enhance-profiles": e.enhanceArtistProfiles
		}, null, 8, [
			"genre",
			"catalog",
			"enhance-profiles"
		])) : r.value === "ideas" ? (B(), Zi(fx, {
			key: 2,
			genre: e.genre
		}, null, 8, ["genre"])) : r.value === "prompts" ? (B(), Zi(xx, {
			key: 3,
			genre: e.genre
		}, null, 8, ["genre"])) : (B(), V("div", {
			key: 4,
			innerHTML: i.value
		}, null, 8, Kx))])])], 4));
	}
};
// src/vue/academy/legacyGenreDetailBridge.js
function Jx({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_GENRE, n = document.getElementById("app");
	if (!n || !t || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-genre-detail");
		if (r?.target === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o?.id) return;
		let s = e(a, qx, {
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
var Yx = { class: "panel" }, Xx = { class: "field" }, Zx = ["value"], Qx = ["value"], $x = { class: "form-grid" }, eS = { class: "field" }, tS = ["value"], nS = ["value"], rS = { class: "field" }, iS = ["value"], aS = ["value"], oS = { class: "field" }, sS = ["value"], cS = ["value"], lS = { class: "field" }, uS = ["value"], dS = ["value"], fS = { class: "field" }, pS = { for: "b-tempo" }, mS = {
	id: "tempo-num",
	style: { color: "#ffa8d5" }
}, hS = { class: "range" }, gS = ["value"], _S = { id: "bpm-output" }, vS = {
	class: "muted",
	style: { "font-size": "11px" }
}, yS = { class: "field" }, bS = ["value"], xS = { class: "field" }, SS = ["value"], CS = { class: "checkrow" }, wS = ["checked", "onChange"], TS = {
	class: "panel",
	style: {
		position: "sticky",
		top: "20px"
	}
}, ES = {
	class: "output",
	id: "prompt-output"
}, DS = { class: "counter" }, OS = { id: "prompt-count" }, kS = { class: "two-col" }, AS = {
	class: "btn primary",
	type: "button",
	"data-action": "copy-prompt"
}, jS = ["innerHTML"], MS = {
	class: "btn ghost",
	type: "button",
	"data-action": "save-prompt"
}, NS = ["innerHTML"], PS = { class: "list-pills" }, FS = {
	__name: "StudioBuilder",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Xt(t.api.snapshot()), r = K(() => n.value?.settings || {}), i = K(() => n.value?.genre || {
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
		return L(() => window.addEventListener("sunoboom:studio-updated", d)), _r(() => window.removeEventListener("sunoboom:studio-updated", d)), (e, t) => (B(), V(z, null, [H("div", Yx, [
			t[17] ||= H("h3", null, "Параметры трека", -1),
			H("div", Xx, [t[8] ||= H("label", { for: "b-genre" }, "Жанр", -1), H("select", {
				id: "b-genre",
				value: r.value.genre,
				onChange: t[0] ||= (e) => f("genre", e.target.value)
			}, [(B(!0), V(z, null, R(n.value.genres, (e) => (B(), V("option", {
				key: e.id,
				value: e.id
			}, O(e.name), 9, Qx))), 128))], 40, Zx)]),
			H("div", $x, [
				H("div", eS, [t[9] ||= H("label", { for: "b-mood" }, "Настроение", -1), H("select", {
					id: "b-mood",
					value: r.value.mood,
					onChange: t[1] ||= (e) => f("mood", e.target.value)
				}, [(B(), V(z, null, R(o, ([e, t]) => H("option", {
					key: e,
					value: e
				}, O(t), 9, nS)), 64))], 40, tS)]),
				H("div", rS, [t[10] ||= H("label", { for: "b-vocal" }, "Вокал", -1), H("select", {
					id: "b-vocal",
					value: r.value.vocal,
					onChange: t[2] ||= (e) => f("vocal", e.target.value)
				}, [(B(), V(z, null, R(s, ([e, t]) => H("option", {
					key: e,
					value: e
				}, O(t), 9, aS)), 64))], 40, iS)]),
				H("div", oS, [t[11] ||= H("label", { for: "b-lang" }, "Язык текста", -1), H("select", {
					id: "b-lang",
					value: r.value.language,
					onChange: t[3] ||= (e) => f("language", e.target.value)
				}, [(B(), V(z, null, R(c, ([e, t]) => H("option", {
					key: e,
					value: e
				}, O(t), 9, cS)), 64))], 40, sS)]),
				H("div", lS, [t[12] ||= H("label", { for: "b-energy" }, "Энергия", -1), H("select", {
					id: "b-energy",
					value: r.value.energy,
					onChange: t[4] ||= (e) => f("energy", e.target.value)
				}, [(B(), V(z, null, R(l, ([e, t]) => H("option", {
					key: e,
					value: e
				}, O(t), 9, dS)), 64))], 40, uS)])
			]),
			H("div", fS, [
				H("label", pS, [
					t[13] ||= W("Темп · ", -1),
					H("span", mS, O(r.value.tempo), 1),
					t[14] ||= W(" BPM", -1)
				]),
				H("div", hS, [H("input", {
					type: "range",
					id: "b-tempo",
					min: "65",
					max: "200",
					step: "1",
					value: r.value.tempo,
					onInput: t[5] ||= (e) => f("tempo", Number(e.target.value))
				}, null, 40, gS), H("output", _S, O(r.value.tempo) + " BPM", 1)]),
				H("span", vS, " Обычно для «" + O(i.value.name) + "»: " + O(i.value.bpm[0]) + "–" + O(i.value.bpm[1]) + " BPM ", 1)
			]),
			H("div", yS, [t[15] ||= H("label", { for: "b-theme" }, "Тема / история трека", -1), H("textarea", {
				id: "b-theme",
				rows: "2",
				value: r.value.theme,
				onInput: t[6] ||= (e) => f("theme", e.target.value),
				placeholder: "О чём будет песня?"
			}, null, 40, bS)]),
			H("div", xS, [t[16] ||= H("label", { for: "b-extra" }, "Дополнительные инструкции (необязательно)", -1), H("textarea", {
				id: "b-extra",
				rows: "2",
				value: r.value.extra,
				onInput: t[7] ||= (e) => f("extra", e.target.value),
				placeholder: "Например: memorable chorus, short guitar solo"
			}, null, 40, SS)]),
			H("div", CS, [(B(), V(z, null, R(u, ([e, t]) => H("label", { key: e }, [H("input", {
				type: "checkbox",
				checked: r.value[e],
				onChange: (t) => f(e, t.target.checked)
			}, null, 40, wS), W(O(t), 1)])), 64))])
		]), H("div", TS, [
			t[21] ||= H("div", { class: "eyebrow" }, "Готово к Suno", -1),
			t[22] ||= H("h3", null, "Твой промпт", -1),
			H("div", ES, O(a.value), 1),
			H("div", DS, [t[18] ||= H("span", null, "Максимум 1000 символов", -1), H("b", OS, O(a.value.length) + " / 1000", 1)]),
			H("div", kS, [H("button", AS, [H("span", {
				"aria-hidden": "true",
				innerHTML: n.value.icons.copy
			}, null, 8, jS), t[19] ||= W(" Копировать ", -1)]), H("button", MS, [H("span", {
				"aria-hidden": "true",
				innerHTML: n.value.icons.save
			}, null, 8, NS), t[20] ||= W(" Сохранить ", -1)])]),
			t[23] ||= H("div", { class: "spacer" }, null, -1),
			t[24] ||= H("div", { class: "notice" }, [H("strong", null, "Подсказка:"), W(" промпт задаёт стиль, а текст песни можно вводить отдельно в Suno. Результат генерации может отличаться от запроса.")], -1),
			t[25] ||= H("div", { class: "spacer" }, null, -1),
			t[26] ||= H("div", { class: "info-label" }, "Музыкальный профиль", -1),
			H("div", PS, [
				H("span", null, O(i.value.name), 1),
				H("span", null, O(i.value.family), 1),
				H("span", null, O(i.value.bpm[0]) + "–" + O(i.value.bpm[1]) + " BPM", 1)
			])
		])], 64));
	}
};
// src/vue/studio/legacyStudioBridge.js
function IS({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_STUDIO, n = document.getElementById("app");
	if (!n || !t || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector(".studio-grid");
		if (r?.target === a || (r &&= (r.unmount(), null), !a || !t.snapshot())) return;
		let o = e(a, FS, { api: t });
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
var LS = { class: "gm-layout" }, RS = { class: "gm-panel" }, zS = { class: "gm-stack" }, BS = { class: "gm-row-top" }, VS = { class: "gm-rank" }, HS = { class: "gm-field gm-genre-select" }, US = ["for"], WS = [
	"id",
	"value",
	"data-gm-genre"
], GS = ["label"], KS = ["value"], qS = ["data-gm-value"], JS = [
	"data-slot",
	"aria-label",
	"disabled"
], YS = { class: "gm-slider-line" }, XS = [
	"max",
	"value",
	"data-gm-weight",
	"aria-label"
], ZS = { class: "gm-meter" }, QS = ["data-gm-meter"], $S = { class: "gm-sub" }, eC = { class: "gm-actions" }, tC = ["disabled"], nC = {
	class: "gm-mixture",
	"aria-label": "Доли музыкальных жанров"
}, rC = ["data-gm-mixbar", "title"], iC = { class: "gm-form-grid" }, aC = ["for"], oC = [
	"id",
	"value",
	"data-gm-setting"
], sC = ["value"], cC = { class: "gm-tempo" }, lC = ["checked"], uC = { class: "gm-tempo-row" }, dC = ["value", "disabled"], fC = { id: "gm-bpm" }, pC = { class: "gm-field" }, mC = ["value"], hC = { class: "gm-checks" }, gC = ["data-gm-setting", "checked"], _C = { class: "gm-panel gm-output-panel" }, vC = {
	class: "gm-output",
	id: "gm-prompt",
	"aria-live": "polite"
}, yC = { class: "gm-prompt-meta" }, bC = { id: "gm-count" }, xC = { class: "gm-field" }, SC = ["value"], CC = { class: "gm-saved-list" }, wC = {
	key: 0,
	class: "gm-muted"
}, TC = { class: "gm-saved-actions" }, EC = ["data-id"], DC = ["data-id", "aria-label"], OC = {
	__name: "GenreMixer",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Xt(t.api.snapshot()), r = K(() => n.value?.rows || []), i = K(() => n.value?.genres || []), a = K(() => n.value?.settings || {}), o = K(() => n.value?.options || {}), s = K(() => n.value?.saved || []), c = K(() => n.value?.prompt || ""), l = K(() => n.value?.tempo || 115), u = K(() => n.value?.title || "");
		function d() {
			let e = t.api.snapshot();
			e && (n.value = e);
		}
		L(() => window.addEventListener("sunoboom:mixer-updated", d)), _r(() => window.removeEventListener("sunoboom:mixer-updated", d));
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
		return (e, t) => (B(), V(z, null, [t[14] ||= H("header", { class: "heading" }, [
			H("div", { class: "eyebrow" }, "Suno Studio · новый инструмент"),
			H("h1", null, [W("Жанровый "), H("span", { class: "gm-highlight" }, "миксер")]),
			H("p", null, "Соединяй от 2 до 4 жанров из Академии SUNOBOOM, задавай пропорции и создавай готовый Style-промпт для Suno.")
		], -1), H("div", LS, [H("section", RS, [
			t[3] ||= H("div", { class: "gm-section-head" }, [H("div", null, [H("h2", null, "Формула звучания"), H("p", null, "Меняй жанры и двигай ползунки — сумма всегда равна 100%.")]), H("span", { class: "gm-total" }, "Σ 100%")], -1),
			H("div", zS, [(B(!0), V(z, null, R(r.value, (e, t) => (B(), V("article", {
				key: e.id,
				class: "gm-row",
				style: E({ "--gm-color": e.color })
			}, [
				H("div", BS, [
					H("span", VS, O(String(t + 1).padStart(2, "0")), 1),
					H("div", HS, [H("label", { for: "gm-genre-" + t }, "Музыкальное направление", 8, US), H("select", {
						id: "gm-genre-" + t,
						value: e.id,
						"data-gm-genre": t
					}, [(B(!0), V(z, null, R(f(t), (e) => (B(), V("optgroup", {
						key: e.family,
						label: e.family
					}, [(B(!0), V(z, null, R(e.items, (e) => (B(), V("option", {
						key: e.id,
						value: e.id
					}, O(e.name), 9, KS))), 128))], 8, GS))), 128))], 8, WS)]),
					H("span", {
						class: "gm-percent",
						"data-gm-value": t
					}, O(e.weight) + "%", 9, qS),
					H("button", {
						type: "button",
						class: "gm-remove",
						"data-action": "gm-remove",
						"data-slot": t,
						"aria-label": "Убрать жанр " + e.name,
						title: "Убрать жанр",
						disabled: r.value.length <= 2
					}, "×", 8, JS)
				]),
				H("div", YS, [H("input", {
					type: "range",
					min: "5",
					max: 100 - 5 * (r.value.length - 1),
					step: "1",
					value: e.weight,
					"data-gm-weight": t,
					"aria-label": "Доля жанра " + e.name
				}, null, 8, XS), H("div", ZS, [H("span", {
					"data-gm-meter": t,
					style: E({ width: e.weight + "%" })
				}, null, 12, QS)])]),
				H("p", $S, O(e.family) + " · " + O(e.tagline) + " · " + O(e.instruments), 1)
			], 4))), 128))]),
			H("div", eC, [H("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "gm-add",
				disabled: r.value.length >= 4
			}, "＋ Добавить жанр", 8, tC), t[0] ||= H("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "gm-equal"
			}, "Поровну", -1)]),
			H("div", nC, [(B(!0), V(z, null, R(r.value, (e) => (B(), V("span", {
				key: e.id,
				"data-gm-mixbar": e.id,
				style: E({
					width: e.weight + "%",
					background: e.color
				}),
				title: e.name + ": " + e.weight + "%"
			}, null, 12, rC))), 128))]),
			t[4] ||= H("p", { class: "gm-muted" }, "Проценты — творческий ориентир для генерации, а не гарантия точного соотношения в готовой музыке.", -1),
			t[5] ||= H("div", { class: "gm-divider" }, null, -1),
			t[6] ||= H("h2", null, "Характер композиции", -1),
			H("div", iC, [(B(!0), V(z, null, R(p.value, (e) => (B(), V("div", {
				key: e.key,
				class: "gm-field"
			}, [H("label", { for: "gm-" + e.key }, O(e.label), 9, aC), H("select", {
				id: "gm-" + e.key,
				value: a.value[e.key],
				"data-gm-setting": e.key
			}, [(B(!0), V(z, null, R(e.choices, ([e, t]) => (B(), V("option", {
				key: e,
				value: e
			}, O(t), 9, sC))), 128))], 8, oC)]))), 128))]),
			H("div", cC, [H("label", null, [H("input", {
				type: "checkbox",
				"data-gm-setting": "autoTempo",
				checked: a.value.autoTempo
			}, null, 8, lC), t[1] ||= W(" Определять темп по жанрам", -1)]), H("div", uC, [H("input", {
				id: "gm-tempo",
				type: "range",
				min: "65",
				max: "200",
				value: l.value,
				"data-gm-setting": "tempo",
				disabled: a.value.autoTempo
			}, null, 8, dC), H("b", fC, O(l.value) + " BPM", 1)])]),
			H("div", pC, [t[2] ||= H("label", { for: "gm-theme" }, "Тема песни (необязательно)", -1), H("textarea", {
				id: "gm-theme",
				rows: "2",
				maxlength: "170",
				"data-gm-setting": "theme",
				value: a.value.theme,
				placeholder: "Например: ночной город, встреча после долгой разлуки"
			}, null, 8, mC)]),
			H("div", hC, [(B(), V(z, null, R(m, ([e, t]) => H("label", { key: e }, [H("input", {
				type: "checkbox",
				"data-gm-setting": e,
				checked: a.value[e]
			}, null, 8, gC), W(" " + O(t), 1)])), 64))])
		]), H("aside", _C, [
			t[9] ||= H("div", { class: "eyebrow" }, "Результат микширования", -1),
			t[10] ||= H("h2", null, "Гибридный Style-промпт", -1),
			H("div", vC, O(c.value), 1),
			H("div", yC, [t[7] ||= H("span", null, "На английском · готово для Suno", -1), H("b", bC, O(c.value.length) + " / 1000", 1)]),
			t[11] ||= aa("<div class=\"gm-output-actions\"><button type=\"button\" class=\"btn primary\" data-action=\"gm-copy\">Копировать</button><button type=\"button\" class=\"btn ghost\" data-action=\"gm-to-studio\">В Suno Studio</button></div><button type=\"button\" class=\"btn ghost gm-full\" data-action=\"gm-save-prompt\">Сохранить в «Мои промпты»</button><div class=\"gm-divider\"></div><h3>Мои сочетания</h3>", 4),
			H("div", xC, [t[8] ||= H("label", { for: "gm-title" }, "Название сочетания", -1), H("input", {
				id: "gm-title",
				type: "text",
				maxlength: "90",
				"data-gm-title": "",
				value: u.value,
				placeholder: "Например: Северный электро-фолк"
			}, null, 8, SC)]),
			t[12] ||= H("button", {
				type: "button",
				class: "btn ghost gm-full",
				"data-action": "gm-save-mix"
			}, "Сохранить формулу", -1),
			H("div", CC, [s.value.length ? G("", !0) : (B(), V("p", wC, "Сохранённых сочетаний пока нет. Придумай свой микс и сохрани его.")), (B(!0), V(z, null, R(s.value, (e) => (B(), V("article", {
				key: e.id,
				class: "gm-saved"
			}, [H("div", null, [H("strong", null, O(e.title), 1), H("small", null, O(e.summary), 1)]), H("div", TC, [H("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "gm-load",
				"data-id": e.id
			}, "Открыть", 8, EC), H("button", {
				type: "button",
				class: "btn danger small",
				"data-action": "gm-delete",
				"data-id": e.id,
				"aria-label": "Удалить " + e.title
			}, "×", 8, DC)])]))), 128))]),
			t[13] ||= H("p", { class: "gm-muted" }, "Сохраняется в этом браузере и входит в общую JSON-копию данных SUNOBOOM. Подключение к ИИ для смешивания не требуется.", -1)
		])])], 64));
	}
};
// src/vue/studio/legacyMixerBridge.js
function kC({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_MIXER, n = document.getElementById("app");
	if (!t || !n || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-mixer-root");
		if (r?.target === a || (r &&= (r.unmount(), null), !a || !t.snapshot())) return;
		let o = e(a, OC, { api: t });
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
var AC = {
	class: "sbpa-tabs",
	role: "group",
	"aria-label": "Источник промпта"
}, jC = ["aria-pressed"], MC = ["aria-pressed"], NC = {
	key: 0,
	class: "sbpa-manual"
}, PC = ["value"], FC = ["value"], IC = ["value"], LC = {
	key: 1,
	class: "sbpa-context"
}, RC = {
	id: "sbpa-results",
	"aria-live": "polite"
}, zC = { class: "sbpa-scoreline" }, BC = {
	class: "sbpa-score",
	"aria-label": "Эвристическая оценка промпта"
}, VC = { class: "sbpa-score-info" }, HC = ["aria-valuenow"], UC = {
	key: 0,
	class: "sbpa-issues"
}, WC = {
	key: 1,
	class: "sbpa-clear"
}, GC = { class: "sbpa-actions" }, KC = {
	key: 0,
	type: "button",
	"data-sbpa-action": "load-studio"
}, qC = { id: "sbpa-proposal-slot" }, JC = {
	key: 0,
	class: "sbpa-proposal"
}, YC = { key: 0 }, XC = { key: 1 }, ZC = { key: 2 }, QC = {
	key: 3,
	class: "sbpa-alert"
}, $C = ["value"], ew = {
	__name: "PromptAuditor",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Xt(t.api.snapshot()), r = K(() => n.value?.mode === "manual"), i = K(() => n.value?.report || {
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
		return L(() => window.addEventListener("sunoboom:auditor-updated", l)), _r(() => window.removeEventListener("sunoboom:auditor-updated", l)), (e, t) => (B(), V(z, null, [
			t[10] ||= H("header", { class: "sbpa-head" }, [H("div", null, [
				H("span", { class: "sbpa-eyebrow" }, "SUNOBOOM · ПРОВЕРКА"),
				H("h2", null, "Интеллектуальный аудитор промптов"),
				H("p", null, "Ищет повторы, противоречия, перегрузку и особенности жанра до отправки в Suno.")
			]), H("span", { class: "sbpa-local" }, "Проверка по правилам · без API")], -1),
			H("div", AC, [H("button", {
				type: "button",
				"data-sbpa-action": "studio",
				class: D({ active: !r.value }),
				"aria-pressed": !r.value
			}, "Текущий промпт Studio", 10, jC), H("button", {
				type: "button",
				"data-sbpa-action": "manual",
				class: D({ active: r.value }),
				"aria-pressed": r.value
			}, "Свой текст / вставка", 10, MC)]),
			r.value ? (B(), V("div", NC, [
				t[0] ||= H("label", { for: "sbpa-text" }, "Текст промпта", -1),
				H("textarea", {
					id: "sbpa-text",
					rows: "5",
					spellcheck: "false",
					placeholder: "Вставь текст на русском или английском…",
					value: n.value.manual
				}, null, 8, PC),
				t[1] ||= H("label", { for: "sbpa-genre" }, "Жанр для сопоставления с Академией", -1),
				H("select", {
					id: "sbpa-genre",
					value: a.value
				}, [(B(!0), V(z, null, R(o.value, (e) => (B(), V("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, IC))), 128))], 8, FC)
			])) : (B(), V("p", LC, " Проверяется актуальный промпт конструктора. Изменения настроек Studio отражаются здесь автоматически. ")),
			H("div", RC, [H("div", zC, [
				H("div", BC, [W(O(i.value.score), 1), t[2] ||= H("small", null, "/ 100", -1)]),
				H("div", VC, [
					H("strong", null, O(i.value.status), 1),
					t[3] ||= H("span", null, "Оценка ориентировочная: проверяется структура текста, а не качество будущей музыки.", -1),
					H("div", {
						class: "sbpa-meter",
						role: "progressbar",
						"aria-label": "Оценка промпта",
						"aria-valuenow": i.value.score,
						"aria-valuemin": "0",
						"aria-valuemax": "100"
					}, [H("span", { style: E({ width: i.value.score + "%" }) }, null, 4)], 8, HC)
				]),
				H("div", { class: D(["sbpa-limit", { over: i.value.length > 1e3 }]) }, O(i.value.length) + " / 1000 символов ", 3)
			]), i.value.issues?.length ? (B(), V("ul", UC, [(B(!0), V(z, null, R(i.value.issues, (e, t) => (B(), V("li", {
				key: t,
				class: D(["sbpa-item", "sbpa-" + e.kind])
			}, [H("div", null, [
				H("strong", null, O(e.title), 1),
				H("p", null, O(e.detail), 1),
				H("small", null, O(e.fix), 1)
			])], 2))), 128))])) : (B(), V("p", WC, " Явных противоречий и повторов по проверяемым правилам не найдено. "))]),
			H("div", GC, [t[4] ||= H("button", {
				type: "button",
				"data-sbpa-action": "preview",
				class: "sbpa-primary"
			}, " Показать улучшенный вариант ", -1), r.value ? (B(), V("button", KC, " Вставить текущий промпт Studio ")) : G("", !0)]),
			H("div", qC, [s.value ? (B(), V("div", JC, [
				H("h4", null, [t[5] ||= W("Предлагаемый вариант ", -1), H("small", null, O(c.value.text.length) + " / 1000", 1)]),
				c.value.removed.length ? (B(), V("p", XC, "Удалено фрагментов: " + O(c.value.removed.length) + ". Проверь смысл до копирования.", 1)) : (B(), V("p", YC, "Удалять нечего: текст уже без точных повторов.")),
				c.value.removed.length ? (B(), V("details", ZC, [t[6] ||= H("summary", null, "Что изменилось", -1), H("ul", null, [(B(!0), V(z, null, R(c.value.removed, (e, t) => (B(), V("li", { key: t }, [H("b", null, O(e.reason) + ":", 1), W(" " + O(e.part), 1)]))), 128))])])) : G("", !0),
				c.value.complete ? G("", !0) : (B(), V("p", QC, " Автоматического сокращения недостаточно. Уменьши текст вручную минимум на " + O(c.value.text.length - 1e3) + " символов. ", 1)),
				t[7] ||= H("label", { for: "sbpa-preview-text" }, "Редактируемый предпросмотр", -1),
				H("textarea", {
					id: "sbpa-preview-text",
					rows: "5",
					spellcheck: "false",
					value: c.value.text
				}, null, 8, $C),
				t[8] ||= H("div", { class: "sbpa-actions" }, [H("button", {
					type: "button",
					"data-sbpa-action": "copy-preview",
					class: "sbpa-primary"
				}, " Подтвердить и скопировать "), H("button", {
					type: "button",
					"data-sbpa-action": "close-preview"
				}, "Закрыть")], -1),
				t[9] ||= H("small", null, "Исходный промпт и параметры Studio не меняются. Копируется только текст предпросмотра после нажатия.", -1)
			])) : G("", !0)]),
			t[11] ||= H("p", { class: "sbpa-foot" }, " Аудитор не вызывает Gemini и не оценивает реальный звук. Жанровые отклонения могут быть творческим решением, а рекомендации не изменяют исходник без твоего действия. ", -1)
		], 64));
	}
};
// src/vue/studio/legacyAuditorBridge.js
function tw({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_AUDITOR, n = document.getElementById("app");
	if (!t || !n || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sbpa-auditor");
		if (r?.target === a || (r &&= (r.unmount(), null), !a || !t.snapshot())) return;
		let o = e(a, ew, { api: t });
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
var nw = ["data-sba-id", "data-sba-energy"], rw = { class: "sba-block-head" }, iw = ["data-sba-drag", "aria-label"], aw = { class: "sba-index" }, ow = {
	class: "sba-emoji",
	"aria-hidden": "true"
}, sw = { class: "sba-head-energy" }, cw = { class: "sba-block-actions" }, lw = ["data-id", "disabled"], uw = ["data-id", "disabled"], dw = ["data-id"], fw = ["data-id"], pw = { class: "sba-block-fields" }, mw = ["data-id", "value"], hw = ["value"], gw = ["data-id", "value"], _w = ["value"], vw = ["data-id", "value"], yw = ["value"], bw = { class: "sba-energy-field" }, xw = ["data-sba-output"], Sw = ["value", "data-id"], Cw = { class: "sba-instrument-field" }, ww = ["for"], Tw = { class: "sba-instrument-row" }, Ew = [
	"id",
	"data-id",
	"value"
], Dw = ["id", "innerHTML"], Ow = ["id"], kw = { class: "sba-sound-head" }, Aw = ["data-id"], jw = ["data-id"], Mw = ["id"], Nw = {
	key: 0,
	class: "sba-sound-back"
}, Pw = ["data-id"], Fw = [
	"data-sba-sound-search",
	"data-id",
	"value",
	"placeholder"
], Iw = ["id"], Lw = { class: "sba-sound-info" }, Rw = { key: 0 }, zw = ["data-id", "data-genre-id"], Bw = {
	key: 0,
	class: "sba-sound-none"
}, Vw = { class: "sba-sound-group" }, Hw = [
	"disabled",
	"aria-disabled",
	"data-id",
	"data-sound-value"
], Uw = {
	key: 0,
	class: "sba-sound-none"
}, Ww = {
	key: 1,
	class: "sba-sound-foot"
}, Gw = ["data-id"], Kw = {
	key: 0,
	class: "sba-custom-label"
}, qw = ["data-id", "value"], Jw = ["innerHTML"], Yw = ["data-id", "aria-label"], Xw = {
	key: 0,
	class: "sba-empty"
}, Zw = ["aria-label"], Qw = [
	"data-sba-snake-id",
	"data-sba-energy",
	"aria-label",
	"title"
], $w = { class: "sba-snake-num" }, eT = {
	class: "sba-snake-icon",
	"aria-hidden": "true"
}, tT = { class: "sba-snake-title" }, nT = { class: "sba-snake-level" }, rT = ["title"], iT = {
	key: 0,
	class: "sba-snake-more"
}, aT = {
	key: 1,
	class: "sba-snake-empty"
}, oT = ["data-sba-hub-from"], sT = { class: "sba-transition-hub-route" }, cT = { class: "sba-transition-hub-number" }, lT = { class: "sba-transition-hub-names" }, uT = { class: "sba-transition-hub-controls" }, dT = [
	"data-id",
	"value",
	"aria-label"
], fT = ["value"], pT = [
	"data-id",
	"value",
	"aria-label"
], mT = ["value"], hT = [
	"data-id",
	"value",
	"aria-label"
], gT = ["value"], _T = { class: "sba-transition-hub-actions" }, vT = ["data-id", "title"], yT = ["data-id"], bT = {
	key: 1,
	class: "sba-transition-hub-empty"
}, xT = ["title"], ST = { class: "sba-chart-column" }, CT = {
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
		let t = e, n = /* @__PURE__ */ Xt(t.api.snapshot()), r = K(() => n.value?.blocks || []), i = K(() => n.value?.sections || []), a = K(() => n.value?.voices || []), o = K(() => n.value?.energies || {}), s = K(() => n.value?.transitions || []), c = K(() => n.value?.transitionTypes || []), l = K(() => n.value?.transitionLengths || []), u = K(() => n.value?.transitionStrengths || []), d = K(() => n.value?.snakeExpanded ? r.value : r.value.slice(0, 12)), f = K(() => n.value?.transitionHubExpanded ? s.value : s.value.slice(0, 3)), p = [
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
		L(() => window.addEventListener("sunoboom:arranger-updated", m)), _r(() => window.removeEventListener("sunoboom:arranger-updated", m));
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
		return (t, n) => e.kind === "cards" ? (B(), V(z, { key: 0 }, [(B(!0), V(z, null, R(r.value, (e, t) => (B(), V(z, { key: e.id }, [
			H("article", {
				class: "sba-block",
				"data-sba-id": e.id,
				"data-sba-energy": e.energy
			}, [H("div", rw, [
				H("span", {
					class: "sba-drag",
					draggable: "true",
					"data-sba-drag": e.id,
					title: "Перетащить блок",
					"aria-label": "Перетащить " + e.sectionName
				}, "⠿", 8, iw),
				H("span", aw, O(String(t + 1).padStart(2, "0")), 1),
				H("span", ow, O(e.icon), 1),
				H("strong", null, O(e.label), 1),
				H("span", sw, "Энергия " + O(e.energy) + "/5", 1),
				H("div", cw, [
					H("button", {
						type: "button",
						"data-sba-action": "up",
						"data-id": e.id,
						"aria-label": "Переместить вверх",
						disabled: t === 0
					}, "↑", 8, lw),
					H("button", {
						type: "button",
						"data-sba-action": "down",
						"data-id": e.id,
						"aria-label": "Переместить вниз",
						disabled: t === r.value.length - 1
					}, "↓", 8, uw),
					H("button", {
						type: "button",
						"data-sba-action": "duplicate",
						"data-id": e.id,
						"aria-label": "Дублировать блок"
					}, "⧉", 8, dw),
					H("button", {
						type: "button",
						"data-sba-action": "remove",
						"data-id": e.id,
						"aria-label": "Удалить блок"
					}, "×", 8, fw)
				])
			]), H("div", pw, [
				H("label", null, [n[0] ||= W("Раздел ", -1), H("select", {
					"data-sba-field": "type",
					"data-id": e.id,
					value: e.type
				}, [(B(!0), V(z, null, R(i.value, (e) => (B(), V("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, hw))), 128))], 8, mw)]),
				H("label", null, [n[1] ||= W("Тактов ", -1), H("select", {
					"data-sba-field": "bars",
					"data-id": e.id,
					value: e.bars
				}, [(B(), V(z, null, R(p, (e) => H("option", {
					key: e,
					value: e
				}, O(e), 9, _w)), 64))], 8, gw)]),
				H("label", null, [n[2] ||= W("Вокал ", -1), H("select", {
					"data-sba-field": "vocal",
					"data-id": e.id,
					value: e.vocal
				}, [(B(!0), V(z, null, R(a.value, (e) => (B(), V("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, yw))), 128))], 8, vw)]),
				H("label", bw, [
					n[3] ||= W("Энергия ", -1),
					H("output", { "data-sba-output": e.id }, O(e.energy) + "/5 · " + O(o.value[e.energy]), 9, xw),
					H("input", {
						type: "range",
						min: "1",
						max: "5",
						step: "1",
						value: e.energy,
						"data-sba-field": "energy",
						"data-id": e.id
					}, null, 8, Sw)
				]),
				H("div", Cw, [
					H("label", { for: "sba-instruments-" + e.id }, "Инструменты / приём", 8, ww),
					H("div", Tw, [H("input", {
						type: "text",
						id: "sba-instruments-" + e.id,
						maxlength: "300",
						"data-sba-field": "instruments",
						"data-id": e.id,
						value: e.instruments,
						placeholder: "Введи вручную или выбери рекомендацию",
						autocomplete: "off"
					}, null, 8, Ew)]),
					H("div", {
						class: "sba-quick-sounds",
						id: "sba-quick-" + e.id,
						innerHTML: e.quickSounds
					}, null, 8, Dw),
					e.soundPanel ? (B(), V("div", {
						key: 0,
						class: "sba-sound-panel",
						id: "sba-sound-panel-" + e.id,
						"aria-label": "Выбор инструментов и приёмов"
					}, [
						H("div", kw, [n[4] ||= H("strong", null, "Библиотека инструментов и приёмов", -1), H("button", {
							type: "button",
							"data-sba-action": "sound-close",
							"data-id": e.id,
							"aria-label": "Закрыть подбор"
						}, "×", 8, Aw)]),
						H("button", {
							type: "button",
							class: "sba-sound-genre-trigger",
							"data-sba-action": "sound-switch-mode",
							"data-id": e.id
						}, [
							n[5] ||= W(" Жанр: ", -1),
							H("b", null, O(e.soundPanel.genreName), 1),
							n[6] ||= H("span", null, "⌄", -1)
						], 8, jw),
						H("div", { id: "sba-sound-body-" + e.id }, [
							e.soundPanel.mode === "genres" ? (B(), V("div", Nw, [H("button", {
								type: "button",
								"data-sba-action": "sound-switch-mode",
								"data-id": e.id
							}, " ← К инструментам ", 8, Pw)])) : G("", !0),
							H("input", {
								type: "search",
								class: "sba-sound-search",
								"data-sba-sound-search": e.soundPanel.mode,
								"data-id": e.id,
								value: e.soundPanel.query,
								placeholder: e.soundPanel.mode === "genres" ? "Поиск по всей Академии..." : "Поиск инструмента или приёма...",
								autocomplete: "off",
								"aria-label": "Поиск инструментов или жанров"
							}, null, 8, Fw),
							H("div", {
								class: "sba-sound-list",
								id: "sba-sound-results-" + e.id
							}, [e.soundPanel.mode === "genres" ? (B(), V(z, { key: 0 }, [
								H("div", Lw, [W(" Найдено жанров: " + O(e.soundPanel.total) + " ", 1), e.soundPanel.total > e.soundPanel.matches.length ? (B(), V("span", Rw, " · уточни запрос ")) : G("", !0)]),
								(B(!0), V(z, null, R(e.soundPanel.matches, (t) => (B(), V("button", {
									key: t.id,
									type: "button",
									class: "sba-sound-genre-row",
									"data-sba-action": "sound-set-genre",
									"data-id": e.id,
									"data-genre-id": t.id
								}, [H("span", null, O(t.name), 1), H("small", null, O(t.family), 1)], 8, zw))), 128)),
								e.soundPanel.matches.length ? G("", !0) : (B(), V("p", Bw, " Жанр не найден "))
							], 64)) : (B(), V(z, { key: 1 }, [(B(!0), V(z, null, R(e.soundPanel.groups, (t) => (B(), V(z, { key: t.title }, [H("div", Vw, O(t.title), 1), (B(!0), V(z, null, R(t.items, (t) => (B(), V("button", {
								key: t.name,
								type: "button",
								class: "sba-sound-option",
								disabled: t.added,
								"aria-disabled": t.added,
								"data-sba-action": "sound-add",
								"data-id": e.id,
								"data-sound-value": t.name
							}, [H("span", null, O(t.name), 1), H("small", null, O(t.added ? "✓ Добавлено" : "+ Добавить"), 1)], 8, Hw))), 128))], 64))), 128)), e.soundPanel.groups.length ? G("", !0) : (B(), V("p", Uw, " Совпадений нет. Можно ввести инструмент вручную. "))], 64))], 8, Iw),
							e.soundPanel.mode === "genres" ? G("", !0) : (B(), V("div", Ww, [n[7] ||= H("span", null, "Нажми «Добавить», чтобы дополнить поле. Свой текст сохраняется.", -1), H("button", {
								type: "button",
								"data-sba-action": "sound-clear",
								"data-id": e.id
							}, " Очистить поле ", 8, Gw)]))
						], 8, Mw)
					], 8, Ow)) : G("", !0)
				]),
				e.type === "custom" ? (B(), V("label", Kw, [n[8] ||= W("Своё название ", -1), H("input", {
					type: "text",
					maxlength: "48",
					"data-sba-field": "customName",
					"data-id": e.id,
					value: e.customName,
					placeholder: "Название для тега Suno"
				}, null, 8, qw)])) : G("", !0)
			])], 8, nw),
			e.transitionHTML ? (B(), V("div", {
				key: 0,
				style: { display: "contents" },
				innerHTML: e.transitionHTML
			}, null, 8, Jw)) : G("", !0),
			H("button", {
				type: "button",
				class: "sba-between-add",
				"data-sba-action": "insert-after",
				"data-id": e.id,
				"aria-label": "Добавить блок после " + e.label
			}, [...n[9] ||= [H("span", { "aria-hidden": "true" }, "＋", -1), W(" Добавить после ", -1)]], 8, Yw)
		], 64))), 128)), r.value.length ? G("", !0) : (B(), V("div", Xw, "Пока нет блоков. Добавь первый фрагмент снизу."))], 64)) : e.kind === "snake" ? (B(), V(z, { key: 1 }, [r.value.length ? (B(), V(z, { key: 0 }, [(B(), V(z, null, R([6, 3], (e) => H("div", {
			key: e,
			class: D(e === 6 ? "sba-snake-desktop" : "sba-snake-mobile"),
			role: "group",
			"aria-label": "Схема блоков: " + g.value
		}, [(B(!0), V(z, null, R(h(e), (e) => (B(), V("div", {
			key: e.id,
			class: D(["sba-snake-row", {
				"sba-snake-reverse": e.reverse,
				"sba-snake-continues": e.continued
			}])
		}, [(B(!0), V(z, null, R(e.items, (e) => (B(), V("button", {
			key: e.id,
			type: "button",
			draggable: "true",
			class: "sba-snake-chip",
			"data-sba-snake-id": e.id,
			"data-sba-energy": e.energy,
			"aria-label": "Переместить " + e.snakeLabel + ", позиция " + (e.index + 1) + " из " + r.value.length + ", энергия " + e.energy + "/5",
			title: e.index + 1 + ". " + e.snakeLabel + " · энергия " + e.energy + "/5 · перетащи для перестановки"
		}, [
			H("span", $w, O(e.index + 1), 1),
			H("span", eT, O(e.icon), 1),
			H("span", tT, O(e.snakeLabel), 1),
			H("span", nT, O(e.energy) + "/5", 1),
			e.hasTransition ? (B(), V("span", {
				key: 0,
				class: "sba-snake-transition",
				title: "Переход: " + e.transitionLabel,
				"aria-hidden": "true"
			}, "↝", 8, rT)) : G("", !0)
		], 8, Qw))), 128))], 2))), 128))], 10, Zw)), 64)), d.value.length < r.value.length ? (B(), V("p", iT, " … и ещё " + O(r.value.length - d.value.length) + " блоков ", 1)) : G("", !0)], 64)) : (B(), V("p", aT, "Добавь первый блок, и здесь появится схема композиции."))], 64)) : e.kind === "transitions" ? (B(), V(z, { key: 2 }, [s.value.length ? (B(!0), V(z, { key: 0 }, R(f.value, (e) => (B(), V("div", {
			key: e.id,
			class: D(["sba-transition-hub-row", { "sba-transition-hub-active": e.current.type !== "none" }]),
			"data-sba-hub-from": e.id
		}, [
			H("div", sT, [H("span", cT, O(e.index + 1) + " → " + O(e.index + 2), 1), H("span", lT, [
				W(O(e.from) + " ", 1),
				n[10] ||= H("b", null, "→", -1),
				W(" " + O(e.to), 1)
			])]),
			H("div", uT, [
				H("label", null, [n[11] ||= W("Эффект ", -1), H("select", {
					"data-sba-transition": "type",
					"data-id": e.id,
					value: e.current.type,
					"aria-label": "Переход " + (e.index + 1) + " к " + (e.index + 2)
				}, [(B(!0), V(z, null, R(c.value, (e) => (B(), V("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, fT))), 128))], 8, dT)]),
				H("label", null, [n[12] ||= W("Длина ", -1), H("select", {
					"data-sba-transition": "length",
					"data-id": e.id,
					value: e.current.length,
					"aria-label": "Длительность перехода " + (e.index + 1)
				}, [(B(!0), V(z, null, R(l.value, (e) => (B(), V("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, mT))), 128))], 8, pT)]),
				H("label", null, [n[13] ||= W("Сила ", -1), H("select", {
					"data-sba-transition": "strength",
					"data-id": e.id,
					value: e.current.strength,
					"aria-label": "Выраженность перехода " + (e.index + 1)
				}, [(B(!0), V(z, null, R(u.value, (e) => (B(), V("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, gT))), 128))], 8, hT)])
			]),
			H("div", _T, [H("button", {
				type: "button",
				"data-sba-action": "transition-suggest",
				"data-id": e.id,
				title: "Совет: " + e.advice
			}, "✧ Совет", 8, vT), H("button", {
				type: "button",
				"data-sba-action": "transition-hub-jump",
				"data-id": e.id
			}, "Подробнее ↓", 8, yT)])
		], 10, oT))), 128)) : (B(), V("p", bT, "Добавь второй блок, и здесь можно будет настроить переходы."))], 64)) : e.kind === "energy" ? (B(!0), V(z, { key: 3 }, R(r.value, (e) => (B(), V("div", {
			key: e.id,
			class: "sba-chart-step",
			title: e.label + " · " + e.energy + "/5",
			style: E({
				"--energy": e.energy,
				"--bar-width": 100 / r.value.length + "%"
			})
		}, [H("div", ST, [H("i", { style: E({ "--level": e.energy }) }, null, 4)]), H("small", null, O(e.icon), 1)], 12, xT))), 128)) : G("", !0);
	}
}, wT = ["aria-expanded"], TT = { id: "sba-picked-label" }, ET = ["hidden"], DT = { class: "sba-preset-search-row" }, OT = ["value"], kT = {
	class: "sba-preset-filters",
	role: "group",
	"aria-label": "Тип вариантов"
}, AT = ["data-filter", "aria-pressed"], jT = {
	id: "sba-preset-results",
	class: "sba-preset-results",
	role: "listbox",
	"aria-label": "Доступные шаблоны и жанры"
}, MT = { class: "sba-preset-group-title" }, NT = { key: 0 }, PT = ["aria-selected", "data-choice"], FT = {
	key: 0,
	class: "sba-preset-no-results"
}, IT = {
	__name: "ArrangementPicker",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Xt(t.api.snapshot()), r = K(() => n.value?.picker || {
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
		return L(() => window.addEventListener("sunoboom:arranger-updated", i)), _r(() => window.removeEventListener("sunoboom:arranger-updated", i)), (e, t) => (B(), V(z, null, [
			t[2] ||= H("span", { class: "sba-preset-caption" }, "Шаблон композиции / жанр", -1),
			H("button", {
				type: "button",
				id: "sba-presets",
				class: "sba-preset-trigger",
				"data-sba-action": "menu-toggle",
				"aria-haspopup": "dialog",
				"aria-expanded": r.value.open,
				"aria-controls": "sba-preset-menu"
			}, [H("span", TT, O(r.value.selected), 1), t[0] ||= H("span", {
				class: "sba-preset-chevron",
				"aria-hidden": "true"
			}, "⌄", -1)], 8, wT),
			H("div", {
				id: "sba-preset-menu",
				class: "sba-preset-menu",
				role: "dialog",
				"aria-label": "Поиск шаблона или жанра",
				hidden: !r.value.open
			}, [
				H("div", DT, [H("input", {
					type: "search",
					id: "sba-preset-search",
					autocomplete: "off",
					value: r.value.query,
					placeholder: "Найти жанр или шаблон...",
					"aria-label": "Поиск жанра"
				}, null, 8, OT), t[1] ||= H("button", {
					type: "button",
					"data-sba-action": "menu-close",
					"aria-label": "Закрыть меню"
				}, "×", -1)]),
				H("div", kT, [(B(!0), V(z, null, R([
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
				], (e) => (B(), V("button", {
					key: e.id,
					type: "button",
					"data-sba-action": "menu-filter",
					"data-filter": e.id,
					"aria-pressed": r.value.filter === e.id
				}, O(e.title), 9, AT))), 128))]),
				H("div", jT, [(B(!0), V(z, null, R(r.value.groups, (e) => (B(), V(z, { key: e.title }, [H("div", MT, [W(O(e.title) + " ", 1), e.count === null ? G("", !0) : (B(), V("small", NT, O(e.count), 1))]), (B(!0), V(z, null, R(e.items, (e) => (B(), V("button", {
					key: e.key,
					type: "button",
					role: "option",
					"aria-selected": e.key === r.value.selectedKey,
					"data-sba-action": "menu-choose",
					"data-choice": e.key
				}, [H("span", null, O(e.title), 1), H("small", null, O(e.subtitle), 1)], 8, PT))), 128))], 64))), 128)), r.value.groups.length ? G("", !0) : (B(), V("p", FT, " Ничего не найдено. Попробуй другое название или направление. "))])
			], 8, ET)
		], 64));
	}
}, LT = {
	class: "sba-preview-tabs",
	role: "group",
	"aria-label": "Тип результата"
}, RT = ["aria-pressed"], zT = ["aria-pressed"], BT = ["value"], VT = {
	class: "sba-preview-count",
	id: "sba-preview-count"
}, HT = {
	id: "sba-transfer-confirm",
	"aria-live": "polite"
}, UT = {
	key: 0,
	class: "sba-transfer-preview"
}, WT = ["hidden"], GT = [
	["#sba-cards", "cards"],
	["#sba-snake-track", "snake"],
	["#sba-transition-hub-list", "transitions"],
	["#sba-energy-chart", "energy"],
	[
		".sba-preset-picker",
		"picker",
		IT
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
				let t = e, n = /* @__PURE__ */ Xt(t.api.snapshot()), r = K(() => n.value?.result || {
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
				return L(() => window.addEventListener("sunoboom:arranger-updated", i)), _r(() => window.removeEventListener("sunoboom:arranger-updated", i)), (e, t) => (B(), V(z, null, [
					t[3] ||= H("div", { class: "sba-result-header" }, [
						H("span", { class: "sba-eyebrow" }, "ПРЕДПРОСМОТР"),
						H("h3", null, "Результат для Suno"),
						H("p", null, "Lyrics — теги по секциям; Style — короткое описание динамики.")
					], -1),
					H("div", LT, [H("button", {
						type: "button",
						"data-sba-action": "tab",
						"data-tab": "lyrics",
						"aria-pressed": r.value.tab === "lyrics"
					}, "Теги Lyrics", 8, RT), H("button", {
						type: "button",
						"data-sba-action": "tab",
						"data-tab": "style",
						"aria-pressed": r.value.tab === "style"
					}, "Style", 8, zT)]),
					H("textarea", {
						id: "sba-preview",
						readonly: "",
						spellcheck: "false",
						"aria-label": "Готовые теги структуры песни",
						value: r.value.text
					}, null, 8, BT),
					H("div", VT, O(r.value.count), 1),
					t[4] ||= H("div", { class: "sba-result-actions" }, [H("button", {
						type: "button",
						class: "sba-btn sba-copy-btn",
						"data-sba-action": "copy"
					}, " Копировать результат "), H("button", {
						type: "button",
						class: "sba-btn sba-transfer-btn",
						"data-sba-action": "prepare-transfer"
					}, " Перенести стиль в Studio ")], -1),
					H("div", HT, [r.value.transfer ? (B(), V("div", UT, [
						t[0] ||= H("strong", null, "Предпросмотр переноса в Style", -1),
						t[1] ||= H("p", null, "Добавим описание аранжировки в дополнительные инструкции Suno Studio, не удаляя твои записи.", -1),
						H("code", null, O(r.value.transfer.candidate), 1),
						t[2] ||= H("div", { class: "sba-preview-buttons" }, [H("button", {
							type: "button",
							"data-sba-action": "transfer-accept"
						}, "Подтвердить перенос"), H("button", {
							type: "button",
							"data-sba-action": "transfer-cancel"
						}, "Отмена")], -1),
						H("small", null, "Итоговый промпт Studio: " + O(r.value.transfer.promptLength) + " / 1000 символов", 1)
					])) : G("", !0)]),
					H("p", {
						id: "sba-message",
						class: "sba-message",
						role: "status",
						"aria-live": "polite",
						hidden: !r.value.message
					}, O(r.value.message), 9, WT),
					t[5] ||= H("div", { class: "sba-help" }, [
						H("strong", null, "Как применять"),
						H("p", null, [
							W("Теги секций вставляй в поле "),
							H("b", null, "Lyrics"),
							W(" в Suno рядом с текстом песни. Краткую динамику можно добавить в "),
							H("b", null, "Style"),
							W(" через Suno Studio после подтверждения.")
						]),
						H("p", null, "Ориентир длительности рассчитан по 4/4 и BPM Studio, это не гарантия точной длины аудио.")
					], -1)
				], 64));
			}
		}
	]
];
function KT({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ARRANGER, n = document.getElementById("app");
	if (!n || !t || typeof t.snapshot != "function") return () => {};
	let r = /* @__PURE__ */ new Map(), i = !1;
	function a() {
		if (!i) for (let [i, a, o = CT] of GT) {
			let s = n.querySelector(i), c = r.get(a);
			if (c?.target === s || (c && (c.unmount(), r.delete(a)), !s || !t.snapshot())) continue;
			let l = e(s, o, o === CT ? {
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
var qT = {
	key: 0,
	class: "sb-poetry-empty"
}, JT = { class: "sb-poetry-stats" }, YT = { class: "sb-poetry-subline" }, XT = { class: "sb-poetry-sections" }, ZT = { class: "sb-poetry-stanzas" }, QT = { class: "sb-poetry-stanza-name" }, $T = { class: "sb-poetry-stanza-data" }, eE = { class: "sb-poetry-lines" }, tE = { class: "sb-poetry-line-main" }, nE = { class: "sb-poetry-index" }, rE = { class: "sb-poetry-verse" }, iE = {
	class: "sb-poetry-syllable",
	title: "Оценка слогов"
}, aE = ["title"], oE = {
	key: 0,
	class: "sb-poetry-footnote"
}, sE = {
	key: 1,
	class: "sb-poetry-words"
}, cE = { class: "sb-poetry-tips" }, lE = {
	__name: "PoetryAnalysis",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Xt(t.api.analysis()), r = K(() => n.value || {
			analyzed: !1,
			message: ""
		});
		function i() {
			let e = t.api.analysis();
			e && (n.value = e);
		}
		return L(() => window.addEventListener("sunoboom:poetry-updated", i)), _r(() => window.removeEventListener("sunoboom:poetry-updated", i)), (e, t) => r.value.analyzed ? (B(), V(z, { key: 1 }, [
			H("div", JT, [(B(!0), V(z, null, R(r.value.stats, (e) => (B(), V("div", {
				key: e.label,
				class: "sb-poetry-stat"
			}, [H("strong", null, O(e.value), 1), H("span", null, O(e.label), 1)]))), 128))]),
			H("p", YT, " Диапазон: " + O(r.value.lower) + "–" + O(r.value.upper) + " слогов на строку · меток ударения: " + O(r.value.markedStress) + ". ", 1),
			H("div", XT, [t[1] ||= H("h4", null, "Строфы и предполагаемая рифмовка", -1), H("div", ZT, [(B(!0), V(z, null, R(r.value.stanzas, (e) => (B(), V("div", {
				key: e.id,
				class: "sb-poetry-stanza"
			}, [H("div", QT, O(e.section) + " · строфа " + O(e.position), 1), H("div", $T, [
				W(" Схема " + O(e.scheme) + " ", 1),
				t[0] ||= H("span", null, "·", -1),
				W(" разброс " + O(e.spread) + " сл. ", 1)
			])]))), 128))])]),
			t[4] ||= H("div", { class: "sb-poetry-lines-head" }, [H("strong", null, "Построчный анализ"), H("span", null, "Слоги · рифма")], -1),
			H("div", eE, [(B(!0), V(z, null, R(r.value.lines, (e) => (B(), V("div", {
				key: e.number,
				class: "sb-poetry-line"
			}, [
				H("div", tE, [H("span", nE, O(e.number) + ".", 1), H("span", rE, O(e.text), 1)]),
				H("div", iE, [H("span", null, O(e.syllables) + " сл.", 1), H("i", { style: E({ width: e.width + "%" }) }, null, 4)]),
				H("span", {
					class: D(["sb-poetry-letter", { "sb-poetry-letter-match": e.rhyme }]),
					title: e.repeat ? "Совпадение последнего слова" : e.rhyme ? "Предполагаемая рифма" : "Метка окончания"
				}, O(e.mark), 11, aE)
			]))), 128))]),
			r.value.rowCount > 120 ? (B(), V("p", oE, " Показаны первые 120 строк из " + O(r.value.rowCount) + "; статистика рассчитана по всему тексту. ", 1)) : G("", !0),
			r.value.frequent.length ? (B(), V("div", sE, [t[2] ||= H("strong", null, "Повторяющиеся слова:", -1), (B(!0), V(z, null, R(r.value.frequent, (e) => (B(), V("span", { key: e.word }, O(e.word) + " · " + O(e.count), 1))), 128))])) : G("", !0),
			H("div", cE, [t[3] ||= H("h4", null, "На что обратить внимание", -1), H("ul", null, [(B(!0), V(z, null, R(r.value.suggestions, (e, t) => (B(), V("li", { key: t }, O(e), 1))), 128))])]),
			t[5] ||= H("p", { class: "sb-poetry-footnote" }, " Анализ ориентировочный: счёт гласных не равен точной метрической скансии, совпадение окончаний не гарантирует рифму, а вокальная удобность зависит от темпа и мелодии. Исходный текст автоматически не изменяется. ", -1)
		], 64)) : (B(), V("p", qT, O(r.value.message), 1));
	}
}, uE = {
	key: 0,
	class: "sb-stress-ambig-clear"
}, dE = { class: "sb-stress-ambig-heading" }, fE = { class: "sb-stress-ambig-variants" }, pE = ["data-word", "data-variant"], mE = {
	key: 0,
	class: "sb-poetry-small"
}, hE = {
	__name: "PoetryAmbiguities",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Xt(t.api.ambiguities()), r = K(() => n.value || {
			count: 0,
			words: [],
			total: 0
		});
		function i() {
			n.value = t.api.ambiguities();
		}
		return L(() => window.addEventListener("sunoboom:poetry-stress-updated", i)), _r(() => window.removeEventListener("sunoboom:poetry-stress-updated", i)), (e, t) => r.value.count ? (B(), V(z, { key: 1 }, [
			H("div", dE, " 🔴 Требуют проверки: " + O(r.value.count) + " вхождений (" + O(r.value.total) + " разных слов). Нажми нужный вариант для каждого вхождения. ", 1),
			(B(!0), V(z, null, R(r.value.words, (e) => (B(), V("div", {
				key: e.key,
				class: "sb-stress-ambig-choice"
			}, [H("strong", null, O(e.key) + O(e.count > 1 ? " ×" + e.count : ""), 1), H("div", fE, [(B(!0), V(z, null, R(e.variants, (t) => (B(), V("button", {
				key: t,
				type: "button",
				"data-action": "sb-poetry-stress-choice",
				"data-word": e.key,
				"data-variant": t,
				title: "Указать ударение для следующего вхождения"
			}, O(t), 9, pE))), 128))])]))), 128)),
			r.value.total > 30 ? (B(), V("p", mE, " Показаны первые 30 разных слов; другие можно исправить вручную. ")) : G("", !0)
		], 64)) : (B(), V("p", uE, " ✓ Все найденные неоднозначные слова проверены. "));
	}
};
// src/vue/poetry/legacyPoetryBridge.js
function gE({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_POETRY, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = !1, i = /* @__PURE__ */ new Map();
	function a() {
		if (r) return;
		let a = [[
			"analysis",
			"#sb-poetry-result",
			lE
		], [
			"ambiguities",
			"#sb-poetry-ambiguous-choices",
			hE
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
var _E = { class: "sb-vt-field" }, vE = ["value"], yE = ["value"], bE = {
	class: "sb-vt-hint",
	id: "sb-vt-mode-hint"
}, xE = { class: "sb-vt-grid" }, SE = { class: "sb-vt-field" }, CE = ["value"], wE = ["value"], TE = { class: "sb-vt-field" }, EE = ["value"], DE = ["value"], OE = {
	key: 0,
	class: "sb-vt-field"
}, kE = ["value"], AE = ["value"], jE = { class: "sb-vt-intensity" }, ME = { class: "sb-vt-between" }, NE = { id: "sb-vt-intensity-label" }, PE = ["value"], FE = { class: "sb-vt-options" }, IE = ["data-vt-pref", "checked"], LE = {
	key: 1,
	class: "sb-vt-consent",
	id: "sb-vt-consent-row"
}, RE = { class: "sb-vt-buttons" }, zE = ["disabled"], BE = {
	id: "sb-vt-result",
	"aria-live": "polite"
}, VE = {
	key: 0,
	class: "sb-vt-draft"
}, HE = { class: "sb-vt-draft-head" }, UE = { class: "sb-vt-method" }, WE = { class: "sb-vt-section-list" }, GE = { class: "sb-vt-section-heading" }, KE = { class: "sb-vt-section-controls" }, qE = [
	"data-vt-preset",
	"value",
	"aria-label"
], JE = ["value"], YE = [
	"data-vt-cue",
	"value",
	"aria-label"
], XE = { class: "sb-vt-field" }, ZE = ["value"], QE = {
	class: "sb-vt-small",
	id: "sb-vt-preview-state"
}, $E = {
	__name: "PerformanceTags",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Xt(t.api.snapshot()), r = K(() => n.value?.prefs || {}), i = K(() => n.value?.draft || null), a = [
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
		return L(() => window.addEventListener("sunoboom:tags-updated", l)), _r(() => window.removeEventListener("sunoboom:tags-updated", l)), (e, t) => (B(), V(z, null, [
			t[12] ||= H("div", { class: "sb-vt-header" }, [H("span", { class: "sb-vt-symbol" }, "🎭"), H("div", null, [H("h3", null, "Генератор тегов исполнения"), H("p", null, "Вокальная драматургия по секциям. Без изменения слов песни; результат можно проверить и применить только вручную.")])], -1),
			H("div", _E, [t[0] ||= H("label", { for: "sb-vt-mode" }, "Способ генерации", -1), H("select", {
				id: "sb-vt-mode",
				"data-vt-pref": "mode",
				value: r.value.mode
			}, [(B(), V(z, null, R(a, ([e, t]) => H("option", {
				key: e,
				value: e
			}, O(t), 9, yE)), 64))], 8, vE)]),
			H("p", bE, O(n.value.modeHint), 1),
			H("div", xE, [H("div", SE, [t[1] ||= H("label", { for: "sb-vt-source" }, "Источник текста", -1), H("select", {
				id: "sb-vt-source",
				"data-vt-pref": "source",
				value: r.value.source
			}, [(B(), V(z, null, R(s, ([e, t]) => H("option", {
				key: e,
				value: e
			}, O(t), 9, wE)), 64))], 8, CE)]), H("div", TE, [t[2] ||= H("label", { for: "sb-vt-density" }, "Детализация метатегов", -1), H("select", {
				id: "sb-vt-density",
				"data-vt-pref": "density",
				value: r.value.density
			}, [(B(), V(z, null, R(o, ([e, t]) => H("option", {
				key: e,
				value: e
			}, O(t), 9, DE)), 64))], 8, EE)])]),
			n.value.artists?.length ? (B(), V("div", OE, [t[4] ||= H("label", { for: "sb-vt-artist" }, "Учесть «ДНК артиста» (необязательно)", -1), H("select", {
				id: "sb-vt-artist",
				"data-vt-pref": "artistId",
				value: r.value.artistId
			}, [t[3] ||= H("option", { value: "" }, "Без привязки к артисту", -1), (B(!0), V(z, null, R(n.value.artists, (e) => (B(), V("option", {
				key: e.id,
				value: e.id
			}, O(e.name), 9, AE))), 128))], 8, kE)])) : G("", !0),
			H("div", jE, [
				H("div", ME, [t[5] ||= H("label", { for: "sb-vt-intensity" }, "Максимальная интенсивность исполнения", -1), H("strong", NE, O(r.value.intensity) + " / 5", 1)]),
				H("input", {
					type: "range",
					id: "sb-vt-intensity",
					min: "1",
					max: "5",
					step: "1",
					value: r.value.intensity,
					"data-vt-pref": "intensity"
				}, null, 8, PE),
				t[6] ||= H("div", { class: "sb-vt-between sb-vt-scale" }, [H("span", null, "Сдержанная"), H("span", null, "Экспрессивная")], -1)
			]),
			H("div", FE, [(B(), V(z, null, R(c, ([e, t]) => H("label", { key: e }, [H("input", {
				type: "checkbox",
				"data-vt-pref": e,
				checked: r.value[e]
			}, null, 8, IE), W(" " + O(t), 1)])), 64))]),
			n.value.hasEndpoint ? (B(), V("label", LE, [...t[7] ||= [H("input", {
				type: "checkbox",
				id: "sb-vt-consent"
			}, null, -1), W(" Разрешаю отправить выбранный текст песни на защищённый сервер для анализа Gemini. ", -1)]])) : G("", !0),
			H("div", RE, [H("button", {
				type: "button",
				class: "btn primary",
				"data-action": "vt-generate",
				disabled: n.value.busy
			}, "✨ Создать предпросмотр", 8, zE), t[8] ||= H("span", { class: "sb-vt-note" }, "Никакого автоматического применения к Lyrics.", -1)]),
			H("div", {
				id: "sb-vt-notice",
				class: D(["sb-vt-notice", n.value.notice?.kind]),
				role: "status",
				"aria-live": "polite"
			}, O(n.value.notice?.text), 3),
			H("div", BE, [i.value ? (B(), V("div", VE, [
				H("div", HE, [H("h4", null, "Предпросмотр · " + O(i.value.sections.length) + " секций", 1), H("span", UE, O(i.value.method), 1)]),
				t[10] ||= H("p", { class: "sb-vt-small" }, " Проверь каждую секцию. Теги можно выбрать из списка или переписать вручную. Оригинальные строки песни остаются неизменными. ", -1),
				H("div", WE, [(B(!0), V(z, null, R(i.value.sections, (e, t) => (B(), V("div", {
					key: e.id,
					class: "sb-vt-section"
				}, [H("div", GE, [H("strong", null, O(e.label), 1), H("span", null, O(t + 1) + "/" + O(i.value.sections.length), 1)]), H("div", KE, [H("select", {
					"data-vt-preset": t,
					value: i.value.tags[t],
					"aria-label": "Готовые теги для " + e.label
				}, [(B(!0), V(z, null, R(n.value.presets, ([e, t]) => (B(), V("option", {
					key: e,
					value: e
				}, O(t), 9, JE))), 128))], 8, qE), H("input", {
					"data-vt-cue": t,
					value: i.value.tags[t],
					maxlength: "165",
					placeholder: "Например: Warm Emotional Vocals",
					"aria-label": "Тег исполнения " + e.label
				}, null, 8, YE)])]))), 128))]),
				H("div", XE, [t[9] ||= H("label", { for: "sb-vt-preview" }, " Готовый Lyrics — разрешено редактировать только инструкции, не слова песни ", -1), H("textarea", {
					id: "sb-vt-preview",
					spellcheck: "false",
					rows: "13",
					maxlength: "25000",
					value: i.value.preview
				}, null, 8, ZE)]),
				H("p", QE, O(n.value.previewState), 1),
				t[11] ||= aa("<div class=\"sb-vt-draft-actions\"><button type=\"button\" class=\"btn primary\" data-action=\"vt-apply\"> ✓ Применить к Lyrics </button><button type=\"button\" class=\"btn ghost\" data-action=\"vt-copy\"> Копировать предпросмотр </button><button type=\"button\" class=\"btn ghost\" data-action=\"vt-refresh\"> Обновить предпросмотр </button><button type=\"button\" class=\"btn ghost\" data-action=\"vt-cancel\"> Отменить </button></div>", 1)
			])) : G("", !0)])
		], 64));
	}
};
// src/vue/poetry/legacyTagsBridge.js
function eD({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_TAGS, n = document.getElementById("app");
	if (!t || !n || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vt-workbench");
		if (r?.target === a || (r &&= (r.unmount(), null), !a || !t.snapshot())) return;
		let o = e(a, $E, { api: t });
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
var tD = Bg(), nD = /* @__PURE__ */ new WeakMap();
function rD(e) {
	return typeof document > "u" ? null : typeof e == "string" ? document.querySelector(e) : e;
}
function $(e, t, n = {}, { vueRouter: r = !1 } = {}) {
	let i = rD(e);
	if (!i || i.nodeType !== 1 || !t) return null;
	let a = nD.get(i);
	a && a.unmount();
	let o = i.innerHTML, s = Uo(uy, {
		component: t,
		componentProps: n
	});
	s.use(tD), r && s.use(zv);
	try {
		s.mount(i);
	} catch (e) {
		return i.innerHTML = o, console.warn("[SUNOBOOM] Vue mount failed; legacy navigation retained.", e), null;
	}
	return nD.set(i, s), () => {
		nD.get(i) === s && (s.unmount(), nD.delete(i));
	};
}
function iD(e) {
	let t = rD(e);
	if (!t) return;
	let n = nD.get(t);
	n && (n.unmount(), nD.delete(t));
}
function aD() {
	return My({
		mountVueFeature: $,
		unmountVueFeature: iD
	});
}
function oD() {
	return _b({ mountVueFeature: $ });
}
function sD() {
	return Jx({ mountVueFeature: $ });
}
function cD() {
	return IS({ mountVueFeature: $ });
}
function lD() {
	return kC({ mountVueFeature: $ });
}
function uD() {
	return tw({ mountVueFeature: $ });
}
function dD() {
	return KT({ mountVueFeature: $ });
}
function fD() {
	return gE({ mountVueFeature: $ });
}
function pD() {
	return eD({ mountVueFeature: $ });
}
function mD() {
	return wg({ mountVueFeature: $ });
}
function hD() {
	return os({ mountVueFeature: $ });
}
function gD() {
	return fc({ mountVueFeature: $ });
}
function _D() {
	return ac({ mountVueFeature: $ });
}
function vD() {
	return el({ mountVueFeature: $ });
}
function yD() {
	return pl({ mountVueFeature: $ });
}
function bD() {
	return cu({ mountVueFeature: $ });
}
function xD() {
	return Wu({ mountVueFeature: $ });
}
function SD() {
	return Zu({ mountVueFeature: $ });
}
function CD() {
	return Cd({ mountVueFeature: $ });
}
function wD() {
	return Zd({ mountVueFeature: $ });
}
function TD() {
	return bf({ mountVueFeature: $ });
}
function ED() {
	return ap({ mountVueFeature: $ });
}
function DD() {
	return $p({ mountVueFeature: $ });
}
function OD() {
	return om({ mountVueFeature: $ });
}
function kD() {
	return Gm({ mountVueFeature: $ });
}
function AD() {
	return Qm({ mountVueFeature: $ });
}
function jD() {
	return Dh({ mountVueFeature: $ });
}
function MD() {
	return ng({ mountVueFeature: $ });
}
function ND() {
	return Gs({ mountVueFeature: $ });
}
export { $ as mountVueFeature, oD as startLegacyAcademy, TD as startLegacyAccountSettings, dD as startLegacyArranger, CD as startLegacyArtistDNA, wD as startLegacyArtistDNAEditor, SD as startLegacyArtistManager, uD as startLegacyAuditor, sD as startLegacyGenreDetail, hD as startLegacyIdeaCollections, mD as startLegacyIdeaEditor, vD as startLegacyLibrary, lD as startLegacyMixer, aD as startLegacyNavigation, DD as startLegacyPlayerAB, ED as startLegacyPlayerLab, fD as startLegacyPoetry, kD as startLegacyProducerSongDetail, OD as startLegacyProducerSongList, _D as startLegacyPromptCollection, gD as startLegacyPromptEditor, yD as startLegacySongCards, bD as startLegacySongDetail, xD as startLegacySongEditor, cD as startLegacyStudio, pD as startLegacyTags, jD as startLegacyTrackPassportDetail, MD as startLegacyTrackPassportEditor, AD as startLegacyTrackPassportList, ND as startLegacyVersionHistory, iD as unmountVueFeature };
