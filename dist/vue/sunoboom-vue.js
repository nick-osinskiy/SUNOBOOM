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
}, ie = /-\w/g, C = /* @__PURE__ */ re((e) => e.replace(ie, (e) => e.slice(1).toUpperCase())), ae = /\B([A-Z])/g, oe = /* @__PURE__ */ re((e) => e.replace(ae, "-$1").toLowerCase()), w = /* @__PURE__ */ re((e) => e.charAt(0).toUpperCase() + e.slice(1)), se = /* @__PURE__ */ re((e) => e ? `on${w(e)}` : ""), ce = (e, t) => !Object.is(e, t), le = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, ue = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, de = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, fe, pe = () => fe ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function T(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = g(r) ? _e(r) : T(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	}
	if (g(e) || v(e)) return e;
}
var me = /;(?![^(]*\))/g, he = /:([^]+)/, ge = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function _e(e) {
	let t = {};
	return e.replace(ge, (e) => e.startsWith("/*") ? "" : e).split(me).forEach((e) => {
		if (e) {
			let n = e.split(he);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function E(e) {
	let t = "";
	if (g(e)) t = e;
	else if (d(e)) for (let n = 0; n < e.length; n++) {
		let r = E(e[n]);
		r && (t += r + " ");
	}
	else if (v(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
function ve(e) {
	if (!e) return null;
	let { class: t, style: n } = e;
	return t && !g(t) && (e.class = E(t)), n && (e.style = T(n)), e;
}
var ye = /* @__PURE__ */ e("itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly");
function be(e) {
	return !!e || e === "";
}
function xe(e, t, n) {
	if (e.length !== t.length) return !1;
	let r = !0;
	for (let i = 0; r && i < e.length; i++) r = Te(e[i], t[i], n);
	return r;
}
function Se(e, t, n) {
	if (e.size !== t.size) return !1;
	let r = Array.from(t), i = new Uint8Array(r.length);
	for (let t of e) {
		let e = -1;
		for (let a = 0; a < r.length; a++) if (!i[a] && Te(t, r[a], n)) {
			e = a;
			break;
		}
		if (e < 0) return !1;
		i[e] = 1;
	}
	return !0;
}
function Ce(e, t, n) {
	let r = f(e), i = f(t);
	if (r || i || (r = p(e), i = p(t), r || i)) return r && i ? Se(e, t, n) : !1;
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let r in e) {
		let i = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
		if (i && !a || !i && a || !Te(e[r], t[r], n)) return !1;
	}
	return String(e) === String(t);
}
function we(e, t, n, r) {
	n ||= [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()];
	let [i, a] = n;
	if (i.has(e) || a.has(t)) return i.get(e) === t && a.get(t) === e;
	i.set(e, t), a.set(t, e);
	let o = r(e, t, n);
	return i.delete(e), a.delete(t), o;
}
function Te(e, t, n) {
	if (e === t) return !0;
	let r = m(e), i = m(t);
	return r || i ? r && i ? e.getTime() === t.getTime() : !1 : (r = _(e), i = _(t), r || i ? e === t : (r = d(e), i = d(t), r || i ? r && i ? we(e, t, n, xe) : !1 : (r = v(e), i = v(t), r || i ? !r || !i ? !1 : we(e, t, n, Ce) : String(e) === String(t))));
}
function Ee(e, t) {
	return e.findIndex((e) => Te(e, t));
}
var De = (e) => !!(e && e.__v_isRef === !0), D = (e) => g(e) ? e : e == null ? "" : d(e) || v(e) && (e.toString === b || !h(e.toString)) ? De(e) ? D(e.value) : JSON.stringify(e, Oe, 2) : String(e), Oe = (e, t) => De(t) ? Oe(e, t.value) : f(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[ke(t, r) + " =>"] = n, e), {}) } : p(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => ke(e)) } : _(t) ? ke(t) : v(t) && !d(t) && !S(t) ? String(t) : t, ke = (e, t = "") => _(e) ? `Symbol(${e.description ?? t})` : e, Ae, je = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && Ae && (Ae.active ? (this.parent = Ae, this.index = (Ae.scopes || (Ae.scopes = [])).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
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
			let t = Ae;
			try {
				return Ae = this, e();
			} finally {
				Ae = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = Ae, Ae = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (Ae === this) Ae = this.prevScope;
			else {
				let e = Ae;
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
function Me(e) {
	return new je(e);
}
function Ne() {
	return Ae;
}
function Pe(e, t = !1) {
	Ae && (Ae.active ? Ae.cleanups.push(e) : e());
}
var O, Fe = /* @__PURE__ */ new WeakSet(), Ie = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ae && (Ae.active ? Ae.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Fe.has(this) && (Fe.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Be(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, $e(this), Ue(this);
		let e = O, t = Ye;
		O = this, Ye = !0;
		try {
			return this.fn();
		} finally {
			We(this), O = e, Ye = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) qe(e);
			this.deps = this.depsTail = void 0, $e(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Fe.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		Ge(this) && this.run();
	}
	get dirty() {
		return Ge(this);
	}
}, Le = 0, Re, ze;
function Be(e, t = !1) {
	e.flags |= 8, t ? (e.next = ze, ze = e) : (e.next = Re, Re = e);
}
function Ve() {
	Le++;
}
function He() {
	if (--Le > 0) return;
	if (ze) {
		let e = ze;
		for (ze = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Re;) {
		let t = Re;
		for (Re = void 0; t;) {
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
function Ue(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function We(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), qe(r), Je(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function Ge(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Ke(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function Ke(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === et) || (e.globalVersion = et, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ge(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = O, r = Ye;
	O = e, Ye = !0;
	try {
		Ue(e);
		let n = e.fn(e._value);
		(t.version === 0 || ce(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		O = n, Ye = r, We(e), e.flags &= -3;
	}
}
function qe(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) qe(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function Je(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var Ye = !0, Xe = [];
function Ze() {
	Xe.push(Ye), Ye = !1;
}
function Qe() {
	let e = Xe.pop();
	Ye = e === void 0 || e;
}
function $e(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = O;
		O = void 0;
		try {
			t();
		} finally {
			O = e;
		}
	}
}
var et = 0, tt = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, nt = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!O || !Ye || O === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== O) t = this.activeLink = new tt(O, this), O.deps ? (t.prevDep = O.depsTail, O.depsTail.nextDep = t, O.depsTail = t) : O.deps = O.depsTail = t, rt(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = O.depsTail, t.nextDep = void 0, O.depsTail.nextDep = t, O.depsTail = t, O.deps === t && (O.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, et++, this.notify(e);
	}
	notify(e) {
		Ve();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			He();
		}
	}
};
function rt(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) rt(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var it = /* @__PURE__ */ new WeakMap(), at = /* @__PURE__ */ Symbol(""), ot = /* @__PURE__ */ Symbol(""), st = /* @__PURE__ */ Symbol("");
function ct(e, t, n) {
	if (Ye && O) {
		let t = it.get(e);
		t || it.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new nt()), r.map = t, r.key = n), r.track();
	}
}
function lt(e, t, n, r, i, a) {
	let o = it.get(e);
	if (!o) {
		et++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Ve(), t === "clear") o.forEach(s);
	else {
		let i = d(e), a = i && te(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === st || !_(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(st)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(at)), f(e) && s(o.get(ot)));
				break;
			case "delete":
				i || (s(o.get(at)), f(e) && s(o.get(ot)));
				break;
			case "set": f(e) && s(o.get(at));
		}
	}
	He();
}
function ut(e, t) {
	let n = it.get(e);
	return n && n.get(t);
}
function dt(e) {
	let t = /* @__PURE__ */ A(e);
	return t === e || (ct(t, "iterate", st), /* @__PURE__ */ Xt(e)) ? t : /* @__PURE__ */ Yt(e) ? /* @__PURE__ */ Jt(e) ? t.map((e) => en($t(e))) : t.map(en) : t.map($t);
}
function ft(e) {
	return ct(e = /* @__PURE__ */ A(e), "iterate", st), e;
}
function pt(e, t) {
	return /* @__PURE__ */ Yt(e) ? en(/* @__PURE__ */ Jt(e) ? $t(t) : t) : $t(t);
}
var mt = {
	__proto__: null,
	[Symbol.iterator]() {
		return ht(this, Symbol.iterator, (e) => pt(this, e));
	},
	concat(...e) {
		return dt(this).concat(...e.map((e) => d(e) ? dt(e) : e));
	},
	entries() {
		return ht(this, "entries", (e) => (e[1] = pt(this, e[1]), e));
	},
	every(e, t) {
		return vt(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return vt(this, "filter", e, t, (e) => e.map((e) => pt(this, e)), arguments);
	},
	find(e, t) {
		return vt(this, "find", e, t, (e) => pt(this, e), arguments);
	},
	findIndex(e, t) {
		return vt(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return vt(this, "findLast", e, t, (e) => pt(this, e), arguments);
	},
	findLastIndex(e, t) {
		return vt(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return vt(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return bt(this, "includes", e);
	},
	indexOf(...e) {
		return bt(this, "indexOf", e);
	},
	join(e) {
		return dt(this).join(e);
	},
	lastIndexOf(...e) {
		return bt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return vt(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return xt(this, "pop");
	},
	push(...e) {
		return xt(this, "push", e);
	},
	reduce(e, ...t) {
		return yt(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return yt(this, "reduceRight", e, t);
	},
	shift() {
		return xt(this, "shift");
	},
	some(e, t) {
		return vt(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return xt(this, "splice", e);
	},
	toReversed() {
		return dt(this).toReversed();
	},
	toSorted(e) {
		return dt(this).toSorted(e);
	},
	toSpliced(...e) {
		return dt(this).toSpliced(...e);
	},
	unshift(...e) {
		return xt(this, "unshift", e);
	},
	values() {
		return ht(this, "values", (e) => pt(this, e));
	}
};
function ht(e, t, n) {
	let r = ft(e), i = r[t], a = i.call(r);
	if (r !== e && !/* @__PURE__ */ Xt(e)) {
		if (a[Symbol.toStringTag] === "Array Iterator") {
			let e = Object.create(Object.getPrototypeOf(a));
			return e.next = () => gt(a.next(), n), i !== _t[t] && Object.defineProperties(e, {
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
		a._next = a.next, a.next = () => gt(a._next(), n);
	}
	return a;
}
function gt(e, t) {
	return e.done || (e.value = t(e.value)), e;
}
var _t = Array.prototype;
function vt(e, t, n, r, i, a) {
	let o = ft(e), s = o !== e && !/* @__PURE__ */ Xt(e), c = o[t];
	if (c !== _t[t]) {
		let t = c.apply(e, a);
		return s ? $t(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, pt(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function yt(e, t, n, r) {
	let i = ft(e), a = i !== e && !/* @__PURE__ */ Xt(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = pt(e, t)), n.call(this, t, pt(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? pt(e, c) : c;
}
function bt(e, t, n) {
	let r = /* @__PURE__ */ A(e);
	ct(r, "iterate", st);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Zt(n[0]) ? (n[0] = /* @__PURE__ */ A(n[0]), r[t](...n)) : i;
}
function xt(e, t, n = []) {
	Ze(), Ve();
	let r = (/* @__PURE__ */ A(e))[t].apply(e, n);
	return He(), Qe(), r;
}
var St = /* @__PURE__ */ e("__proto__,__v_isRef,__isVue"), Ct = /* @__PURE__ */ new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_));
function wt(e) {
	_(e) || (e = String(e));
	let t = /* @__PURE__ */ A(this);
	return ct(t, "has", e), t.hasOwnProperty(e);
}
var Tt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Ut : Ht : i ? Vt : Bt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = d(e);
		if (!r) {
			let e;
			if (a && (e = mt[t])) return e;
			if (t === "hasOwnProperty") return wt;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ j(e) ? e : n);
		if ((_(t) ? Ct.has(t) : St(t)) || (r || ct(e, "get", t), i)) return o;
		if (/* @__PURE__ */ j(o)) {
			let e = a && te(t) ? o : o.value;
			return r && v(e) ? /* @__PURE__ */ Kt(e) : e;
		}
		return v(o) ? r ? /* @__PURE__ */ Kt(o) : /* @__PURE__ */ k(o) : o;
	}
}, Et = class extends Tt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = d(e) && te(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Yt(i);
			if (!/* @__PURE__ */ Xt(n) && !/* @__PURE__ */ Yt(n) && (i = /* @__PURE__ */ A(i), n = /* @__PURE__ */ A(n)), !a && /* @__PURE__ */ j(i) && !/* @__PURE__ */ j(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : u(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ j(e) ? e : r);
		return e === /* @__PURE__ */ A(r) && s && (o ? ce(n, i) && lt(e, "set", t, n, i) : lt(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = u(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && lt(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return _(t) && Ct.has(t) || ct(e, "has", t), n;
	}
	ownKeys(e) {
		return ct(e, "iterate", d(e) ? "length" : at), Reflect.ownKeys(e);
	}
}, Dt = class extends Tt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, Ot = /* @__PURE__ */ new Et(), kt = /* @__PURE__ */ new Dt(), At = /* @__PURE__ */ new Et(!0), jt = (e) => e, Mt = (e) => Reflect.getPrototypeOf(e);
function Nt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ A(i), o = f(a), c = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = i[e](...r), d = n ? jt : t ? en : $t;
		return !t && ct(a, "iterate", l ? ot : at), s(Object.create(u), { next() {
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
function Pt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function Ft(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ A(r), a = /* @__PURE__ */ A(n);
			e || (ce(n, a) && ct(i, "get", n), ct(i, "get", a));
			let { has: o } = Mt(i), s = t ? jt : e ? en : $t;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && ct(/* @__PURE__ */ A(t), "iterate", at), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ A(n), i = /* @__PURE__ */ A(t);
			return e || (ce(t, i) && ct(r, "has", t), ct(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ A(a), s = t ? jt : e ? en : $t;
			return !e && ct(o, "iterate", at), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return s(n, e ? {
		add: Pt("add"),
		set: Pt("set"),
		delete: Pt("delete"),
		clear: Pt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ A(this), r = Mt(n), i = /* @__PURE__ */ A(e), a = !t && !/* @__PURE__ */ Xt(e) && !/* @__PURE__ */ Yt(e) ? i : e;
			return r.has.call(n, a) || ce(e, a) && r.has.call(n, e) || ce(i, a) && r.has.call(n, i) || (n.add(a), lt(n, "add", a, a)), this;
		},
		set(e, n) {
			t || /* @__PURE__ */ Xt(n) || /* @__PURE__ */ Yt(n) || (n = /* @__PURE__ */ A(n));
			let r = /* @__PURE__ */ A(this), { has: i, get: a } = Mt(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ A(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? ce(n, s) && lt(r, "set", e, n, s) : lt(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ A(this), { has: n, get: r } = Mt(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ A(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && lt(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ A(this), t = e.size !== 0, n = e.clear();
			return t && lt(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = Nt(r, e, t);
	}), n;
}
function It(e, t) {
	let n = Ft(e, t);
	return (r, i, a) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_isShallow" ? t : i === "__v_raw" ? r : Reflect.get(u(n, i) && i in r ? n : r, i, a);
}
var Lt = { get: /* @__PURE__ */ It(!1, !1) }, Rt = { get: /* @__PURE__ */ It(!1, !0) }, zt = { get: /* @__PURE__ */ It(!0, !1) }, Bt = /* @__PURE__ */ new WeakMap(), Vt = /* @__PURE__ */ new WeakMap(), Ht = /* @__PURE__ */ new WeakMap(), Ut = /* @__PURE__ */ new WeakMap();
function Wt(e) {
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
function k(e) {
	return /* @__PURE__ */ Yt(e) ? e : qt(e, !1, Ot, Lt, Bt);
}
// @__NO_SIDE_EFFECTS__
function Gt(e) {
	return qt(e, !1, At, Rt, Vt);
}
// @__NO_SIDE_EFFECTS__
function Kt(e) {
	return qt(e, !0, kt, zt, Ht);
}
function qt(e, t, n, r, i) {
	if (!v(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Wt(ee(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function Jt(e) {
	return /* @__PURE__ */ Yt(e) ? /* @__PURE__ */ Jt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Yt(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Xt(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Zt(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function A(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ A(t) : e;
}
function Qt(e) {
	return !u(e, "__v_skip") && Object.isExtensible(e) && ue(e, "__v_skip", !0), e;
}
var $t = (e) => v(e) ? /* @__PURE__ */ k(e) : e, en = (e) => v(e) ? /* @__PURE__ */ Kt(e) : e;
// @__NO_SIDE_EFFECTS__
function j(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function M(e) {
	return tn(e, !1);
}
// @__NO_SIDE_EFFECTS__
function N(e) {
	return tn(e, !0);
}
function tn(e, t) {
	return /* @__PURE__ */ j(e) ? e : new nn(e, t);
}
var nn = class {
	constructor(e, t) {
		this.dep = new nt(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ A(e), this._value = t ? e : $t(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Xt(e) || /* @__PURE__ */ Yt(e);
		e = n ? e : /* @__PURE__ */ A(e), ce(e, t) && (this._rawValue = e, this._value = n ? e : $t(e), this.dep.trigger());
	}
};
function P(e) {
	return /* @__PURE__ */ j(e) ? e.value : e;
}
var rn = {
	get: (e, t, n) => t === "__v_raw" ? e : P(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ j(i) && !/* @__PURE__ */ j(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function an(e) {
	return /* @__PURE__ */ Jt(e) ? e : new Proxy(e, rn);
}
// @__NO_SIDE_EFFECTS__
function on(e) {
	let t = d(e) ? Array(e.length) : {};
	for (let n in e) t[n] = cn(e, n);
	return t;
}
var sn = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = _(t) ? t : String(t), this._raw = /* @__PURE__ */ A(e);
		let r = !0, i = e;
		if (!d(e) || _(this._key) || !te(this._key)) do
			r = !/* @__PURE__ */ Zt(i) || /* @__PURE__ */ Xt(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = P(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ j(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ j(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return ut(this._raw, this._key);
	}
};
function cn(e, t, n) {
	return new sn(e, t, n);
}
var ln = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new nt(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = et - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && O !== this) return Be(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return Ke(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function un(e, t, n = !1) {
	let r, i;
	return h(e) ? r = e : (r = e.get, i = e.set), new ln(r, i, n);
}
var dn = {}, fn = /* @__PURE__ */ new WeakMap(), pn = void 0;
function mn(e, t = !1, n = pn) {
	if (n) {
		let t = fn.get(n);
		t || fn.set(n, t = []), t.push(e);
	}
}
function hn(e, n, i = t) {
	let { immediate: a, deep: o, once: s, scheduler: l, augmentJob: u, call: f } = i, p = (e) => o ? e : /* @__PURE__ */ Xt(e) || o === !1 || o === 0 ? gn(e, 1) : gn(e), m, g, _, v, y = !1, b = !1;
	if (/* @__PURE__ */ j(e) ? (g = () => e.value, y = /* @__PURE__ */ Xt(e)) : /* @__PURE__ */ Jt(e) ? (g = () => p(e), y = !0) : d(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ Jt(e) || /* @__PURE__ */ Xt(e)), g = () => e.map((e) => {
		if (/* @__PURE__ */ j(e)) return e.value;
		if (/* @__PURE__ */ Jt(e)) return p(e);
		if (h(e)) return f ? f(e, 2) : e();
	})) : g = h(e) ? n ? f ? () => f(e, 2) : e : () => {
		if (_) {
			Ze();
			try {
				_();
			} finally {
				Qe();
			}
		}
		let t = pn;
		pn = m;
		try {
			return f ? f(e, 3, [v]) : e(v);
		} finally {
			pn = t;
		}
	} : r, n && o) {
		let e = g, t = o === !0 ? Infinity : o;
		g = () => gn(e(), t);
	}
	let x = Ne(), ee = () => {
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
	let S = b ? Array(e.length).fill(dn) : dn, te = (e) => {
		if (m.flags & 1 && (m.dirty || e)) {
			if (n) {
				let t = m.run();
				if (e || o || y || (b ? t.some((e, t) => ce(e, S[t])) : ce(t, S))) {
					let e = pn;
					Ze();
					try {
						_ && _(), pn = m;
						let e = [
							t,
							S === dn ? void 0 : b && S[0] === dn ? [] : S,
							v
						];
						S = t, f ? f(n, 3, e) : n(...e);
					} finally {
						pn = e, Qe();
					}
				}
			} else m.run();
		}
	};
	return u && u(te), m = new Ie(g), m.scheduler = l ? () => l(te, !1) : te, v = (e) => mn(e, !1, m), _ = m.onStop = () => {
		let e = fn.get(m);
		if (e) {
			if (f) f(e, 4);
			else for (let t of e) t();
			fn.delete(m);
		}
	}, n ? a ? te(!0) : S = m.run() : l ? l(te.bind(null, !0), !0) : m.run(), ee.pause = m.pause.bind(m), ee.resume = m.resume.bind(m), ee.stop = ee, ee;
}
function gn(e, t = Infinity, n) {
	if (t <= 0 || !v(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ j(e)) gn(e.value, t, n);
	else if (d(e)) for (let r = 0; r < e.length; r++) gn(e[r], t, n);
	else if (p(e) || f(e)) e.forEach((e) => {
		gn(e, t, n);
	});
	else if (S(e)) {
		for (let r in e) gn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && gn(e[r], t, n);
	}
	return e;
}
// node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function _n(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		yn(e, t, n);
	}
}
function vn(e, t, n, r) {
	if (h(e)) {
		let i = _n(e, t, n, r);
		return i && y(i) && i.catch((e) => {
			yn(e, t, n, void 0, !0);
		}), i;
	}
	if (d(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(vn(e[a], t, n, r));
		return i;
	}
}
function yn(e, n, r, i = !0, a = !1) {
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
			Ze(), _n(s, null, 10, [
				e,
				i,
				o
			]), Qe();
			return;
		}
	}
	bn(e, r, o, i, c);
}
function bn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var xn = [], Sn = -1, Cn = [], wn = null, Tn = 0, En = /* @__PURE__ */ Promise.resolve(), Dn = null;
function On(e) {
	let t = Dn || En;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function kn(e) {
	let t = Sn + 1, n = xn.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = xn[r], a = Ln(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function An(e) {
	if (!(e.flags & 1)) {
		let t = Ln(e), n = xn[xn.length - 1];
		!n || !(e.flags & 2) && t >= Ln(n) ? xn.push(e) : xn.splice(kn(t), 0, e), e.flags |= 1, jn();
	}
}
function jn() {
	Dn ||= En.then(Rn);
}
function Mn(e) {
	if (!d(e)) wn && e.id === -1 ? wn.splice(Tn + 1, 0, e) : e.flags & 1 || (Cn.push(e), e.flags |= 1);
	else for (let t = 0; t < e.length; t++) Cn.push(e[t]);
	jn();
}
function Nn(e, t, n, r = Sn + 1) {
	for (; r < xn.length; r++) {
		let n = xn[r];
		if (n && n.flags & 2) {
			if (e && n.id !== e.uid || t !== void 0 && !(n.id >= t)) continue;
			xn.splice(r, 1), r = e ? r - 1 : Sn, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
		}
	}
}
function Pn(e, t, n = 0) {
	if (Cn.length) {
		let e = Cn, r = 0;
		if (t) {
			e = [];
			for (let i = 0; i < Cn.length; i++) {
				let a = Cn[i];
				(a.i === void 0 ? t.has(a) : !a.i || a.i.uid < n) ? Cn[r++] = a : e.push(a);
			}
		}
		let i = [...new Set(e)].sort((e, t) => Ln(e) - Ln(t));
		if (Cn.length = r, wn) {
			for (let e = 0; e < i.length; e++) wn.push(i[e]);
			return;
		}
		for (wn = i, Tn = 0; Tn < wn.length; Tn++) {
			let e = wn[Tn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		wn = null, Tn = 0;
	}
}
var Fn = !1;
function In(e, t) {
	if (Fn) {
		e();
		return;
	}
	let n = t === void 0 ? void 0 : new Set(Cn);
	e(), Fn = !0;
	try {
		Nn(void 0, t), Pn(void 0, n, t);
	} finally {
		Fn = !1;
	}
}
var Ln = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function Rn(e) {
	try {
		for (Sn = 0; Sn < xn.length; Sn++) {
			let e = xn[Sn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), _n(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; Sn < xn.length; Sn++) {
			let e = xn[Sn];
			e && (e.flags &= -2);
		}
		Sn = -1, xn.length = 0, Pn(e), Dn = null, (xn.length || Cn.length) && Rn(e);
	}
}
var zn = null, Bn = null;
function Vn(e) {
	let t = zn;
	return zn = e, Bn = e && e.type.__scopeId || null, t;
}
function Hn(e, t = zn, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && ta(-1);
		let i = Vn(t), a = Zi.length, o;
		try {
			o = e(...n);
		} finally {
			for (let e = Zi.length; e > a; e--) $i();
			Vn(i), r._d && ta(1);
		}
		return o;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function F(e, n) {
	if (zn === null) return e;
	let r = La(zn), i = e.dirs ||= [];
	for (let e = 0; e < n.length; e++) {
		let [a, o, s, c = t] = n[e];
		a && (h(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && gn(o), i.push({
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
function Un(e, t, n, r) {
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
		u && (Ze(), vn(u, n, 8, [
			e.el,
			l,
			i,
			t
		]), Qe());
	}
}
function Wn(e, t) {
	if (Sa) {
		let n = Sa.provides, r = Sa.parent && Sa.parent.provides;
		r === n && (n = Sa.provides = Object.create(r)), n[e] = t;
	}
}
function Gn(e, t, n = !1) {
	let r = Ca();
	if (r || ni) {
		let i = ni ? ni._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && h(t) ? t.call(r && r.proxy) : t;
	}
}
function Kn() {
	return !!(Ca() || ni);
}
var qn = /* @__PURE__ */ Symbol.for("v-scx"), Jn = () => Gn(qn);
function I(e, t, n) {
	return Yn(e, t, n);
}
function Yn(e, n, i = t) {
	let { immediate: a, deep: o, flush: c, once: l } = i, u = s({}, i), d = n && a || !n && c !== "post", f;
	if (ka) {
		if (c === "sync") {
			let e = Jn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = r, e.resume = r, e.pause = r, e;
		}
	}
	let p = Sa;
	u.call = (e, t, n) => vn(e, p, t, n);
	let m = !1;
	c === "post" ? u.scheduler = (e) => {
		e.i = p, Pi(e, p && p.suspense);
	} : c !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : An(e);
	}), u.augmentJob = (e) => {
		n && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = hn(e, n, u);
	return ka && (f ? f.push(h) : d && h()), h;
}
function Xn(e, t, n) {
	let r = this.proxy, i = g(e) ? e.includes(".") ? Zn(r, e) : () => r[e] : e.bind(r, r), a;
	h(t) ? a = t : (a = t.handler, n = t);
	let o = Ea(this), s = Yn(i, a.bind(r), n);
	return o(), s;
}
function Zn(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Qn = /* @__PURE__ */ Symbol("_vte"), $n = (e) => e.__isTeleport, er = /* @__PURE__ */ Symbol("_leaveCb");
function tr(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== Yi) {
			t = n;
			break;
		}
	}
	return t;
}
function nr(e) {
	if (!fr(e)) return $n(e.type) && e.children ? tr(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && h(n.default)) return n.default();
	}
}
function rr(e, t) {
	if (e.shapeFlag & 6 && e.component) {
		e.transition = t;
		let n = e.component.subTree;
		rr($n(n.type) && nr(n) || n, t);
	} else if (e.shapeFlag & 128) {
		let n = e.suspense;
		if (n) {
			let e = n.isHydrating ? n.pendingBranch : n.activeBranch;
			e && rr(e, t.clone(e));
		} else e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback);
	} else if (e.transition = t, e.type === z && d(e.children)) {
		let n = li(e.children, !1);
		n && rr(n, t);
	}
}
function ir(e) {
	if (e.component) return ir(e.component.subTree);
	if (e.type === z) {
		let t = d(e.children) && li(e.children, !1);
		return t ? ir(t) : void 0;
	}
	if (e.type !== Yi) return e;
}
// @__NO_SIDE_EFFECTS__
function ar(e, t) {
	return h(e) ? /* @__PURE__ */ s({ name: e.name }, t, { setup: e }) : e;
}
function or(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function sr(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var cr = /* @__PURE__ */ new WeakMap();
function lr(e, n, r, a, o = !1) {
	if (d(e)) {
		e.forEach((e, t) => lr(e, n && (d(n) ? n[t] : n), r, a, o));
		return;
	}
	if (dr(a) && !o) {
		a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && lr(e, n, r, a.component.subTree);
		return;
	}
	let s = a.shapeFlag & 4 ? La(a.component) : a.el, l = o ? null : s, { i: f, r: p } = e, m = n && n.r, _ = f.refs === t ? f.refs = {} : f.refs, v = f.setupState, y = /* @__PURE__ */ A(v), b = v === t ? i : (e) => !sr(_, e) && u(y, e), x = (e, t) => !(t && sr(_, t));
	if (m != null && m !== p) {
		if (ur(n), g(m)) _[m] = null, b(m) && (v[m] = null);
		else if (/* @__PURE__ */ j(m)) {
			let e = n;
			x(m, e.k) && (m.value = null), e.k && (_[e.k] = null);
		}
	}
	if (h(p)) _n(p, f, 12, [l, _]);
	else {
		let t = g(p), n = /* @__PURE__ */ j(p);
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
					i(), cr.delete(e);
				};
				t.id = -1, cr.set(e, t), Pi(t, r);
			} else ur(e), i();
		}
	}
}
function ur(e) {
	let t = cr.get(e);
	t && (t.flags |= 8, cr.delete(e));
}
pe().requestIdleCallback, pe().cancelIdleCallback;
var dr = (e) => !!e.type.__asyncLoader, fr = (e) => e.type.__isKeepAlive;
function pr(e, t) {
	hr(e, "a", t);
}
function mr(e, t) {
	hr(e, "da", t);
}
function hr(e, t, n = Sa) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (_r(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) fr(e.parent.vnode) && gr(r, t, n, e), e = e.parent;
	}
}
function gr(e, t, n, r) {
	let i = _r(t, e, r, !0), a = _r("um", () => c(r[t], i), n);
	a.flags = 16;
}
function _r(e, t, n = Sa, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Ze();
			let i = Ea(n), a = vn(t, n, e, r);
			return i(), Qe(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var vr = (e) => (t, n = Sa) => {
	ka && e !== "sp" || _r(e, (...e) => t(...e), n);
}, yr = vr("bm"), L = vr("m"), br = vr("bu"), xr = vr("u"), Sr = vr("bum"), Cr = vr("um"), wr = vr("sp"), Tr = vr("rtg"), Er = vr("rtc");
function Dr(e, t = Sa) {
	_r("ec", e, t);
}
var Or = "components", kr = /* @__PURE__ */ Symbol.for("v-ndc");
function Ar(e) {
	return g(e) ? jr(Or, e, !1) || e : e || kr;
}
function jr(e, t, n = !0, r = !1) {
	let i = zn || Sa;
	if (i) {
		let n = i.type;
		if (e === Or) {
			let e = Ra(n, !1);
			if (e && (e === t || e === C(t) || e === w(C(t)))) return n;
		}
		let a = Mr(i[e] || n[e], t) || Mr(i.appContext[e], t);
		return !a && r ? n : a;
	}
}
function Mr(e, t) {
	return e && (e[t] || e[C(t)] || e[w(C(t))]);
}
function R(e, t, n, r) {
	let i, a = n && n[r], o = d(e);
	if (o || g(e)) {
		let n = o && /* @__PURE__ */ Jt(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ Xt(e), s = /* @__PURE__ */ Yt(e), e = ft(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? en($t(e[n])) : $t(e[n]) : e[n], n, void 0, a && a[n]);
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
var Nr = (e) => e ? Oa(e) ? La(e) : Nr(e.parent) : null, Pr = /* @__PURE__ */ s(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => Nr(e.parent),
	$root: (e) => Nr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Ur(e),
	$forceUpdate: (e) => e.f ||= () => {
		An(e.update);
	},
	$nextTick: (e) => e.n ||= On.bind(e.proxy),
	$watch: (e) => Xn.bind(e)
}), Fr = (e, n) => e !== t && !e.__isScriptSetup && u(e, n), Ir = {
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
			else if (Fr(i, n)) return s[n] = 1, i[n];
			else if (a !== t && u(a, n)) return s[n] = 2, a[n];
			else if (u(o, n)) return s[n] = 3, o[n];
			else if (r !== t && u(r, n)) return s[n] = 4, r[n];
			else Rr && (s[n] = 0);
		}
		let d = Pr[n], f, p;
		if (d) return n === "$attrs" && ct(e.attrs, "get", ""), d(e);
		if ((f = c.__cssModules) && (f = f[n])) return f;
		if (r !== t && u(r, n)) return s[n] = 4, r[n];
		if (p = l.config.globalProperties, u(p, n)) return p[n];
	},
	set({ _: e }, n, r) {
		let { data: i, setupState: a, ctx: o } = e;
		return Fr(a, n) ? (a[n] = r, !0) : i !== t && u(i, n) ? (i[n] = r, !0) : u(e.props, n) || n[0] === "$" && n.slice(1) in e ? !1 : (o[n] = r, !0);
	},
	has({ _: { data: e, setupState: n, accessCache: r, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(r[c] || e !== t && c[0] !== "$" && u(e, c) || Fr(n, c) || u(o, c) || u(i, c) || u(Pr, c) || u(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? u(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function Lr(e) {
	return d(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var Rr = !0;
function zr(e) {
	let t = Ur(e), n = e.proxy, i = e.ctx;
	Rr = !1, t.beforeCreate && Vr(t.beforeCreate, e, "bc");
	let { data: a, computed: o, methods: s, watch: c, provide: l, inject: u, created: f, beforeMount: p, mounted: m, beforeUpdate: g, updated: _, activated: y, deactivated: b, beforeDestroy: x, beforeUnmount: ee, destroyed: S, unmounted: te, render: ne, renderTracked: re, renderTriggered: ie, errorCaptured: C, serverPrefetch: ae, expose: oe, inheritAttrs: w, components: se, directives: ce, filters: le } = t;
	if (u && Br(u, i, null), s) for (let e in s) {
		let t = s[e];
		h(t) && (i[e] = t.bind(n));
	}
	if (a) {
		let t = a.call(n, n);
		v(t) && (e.data = /* @__PURE__ */ k(t));
	}
	if (Rr = !0, o) for (let e in o) {
		let t = o[e], a = G({
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
	if (c) for (let e in c) Hr(c[e], i, n, e);
	if (l) {
		let e = h(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Wn(t, e[t]);
		});
	}
	f && Vr(f, e, "c");
	function ue(e, t) {
		d(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (ue(yr, p), ue(L, m), ue(br, g), ue(xr, _), ue(pr, y), ue(mr, b), ue(Dr, C), ue(Er, re), ue(Tr, ie), ue(Sr, ee), ue(Cr, te), ue(wr, ae), d(oe)) {
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
	ne && e.render === r && (e.render = ne), w != null && (e.inheritAttrs = w), se && (e.components = se), ce && (e.directives = ce), ae && or(e);
}
function Br(e, t, n = r) {
	d(e) && (e = Jr(e));
	for (let n in e) {
		let r = e[n], i;
		i = v(r) ? "default" in r ? Gn(r.from || n, r.default, !0) : Gn(r.from || n) : Gn(r), /* @__PURE__ */ j(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Vr(e, t, n) {
	vn(d(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Hr(e, t, n, r) {
	let i = r.includes(".") ? Zn(n, r) : () => n[r];
	if (g(e)) {
		let n = t[e];
		h(n) && I(i, n);
	} else if (h(e)) I(i, e.bind(n));
	else if (v(e)) {
		if (d(e)) e.forEach((e) => Hr(e, t, n, r));
		else {
			let r = h(e.handler) ? e.handler.bind(n) : t[e.handler];
			h(r) && I(i, r, e);
		}
	}
}
function Ur(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => Wr(c, e, o, !0)), Wr(c, t, o)), v(t) && a.set(t, c), c;
}
function Wr(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && Wr(e, a, n, !0), i && i.forEach((t) => Wr(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = Gr[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var Gr = {
	data: Kr,
	props: Zr,
	emits: Zr,
	methods: Xr,
	computed: Xr,
	beforeCreate: Yr,
	created: Yr,
	beforeMount: Yr,
	mounted: Yr,
	beforeUpdate: Yr,
	updated: Yr,
	beforeDestroy: Yr,
	beforeUnmount: Yr,
	destroyed: Yr,
	unmounted: Yr,
	activated: Yr,
	deactivated: Yr,
	errorCaptured: Yr,
	serverPrefetch: Yr,
	components: Xr,
	directives: Xr,
	watch: Qr,
	provide: Kr,
	inject: qr
};
function Kr(e, t) {
	return t ? e ? function() {
		return s(h(e) ? e.call(this, this) : e, h(t) ? t.call(this, this) : t);
	} : t : e;
}
function qr(e, t) {
	return Xr(Jr(e), Jr(t));
}
function Jr(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function Yr(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Xr(e, t) {
	return e ? s(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Zr(e, t) {
	return e ? d(e) && d(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : s(/* @__PURE__ */ Object.create(null), Lr(e), Lr(t ?? {})) : t;
}
function Qr(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = s(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = Yr(e[r], t[r]);
	return n;
}
function $r() {
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
var ei = 0;
function ti(e, t) {
	return function(n, r = null) {
		h(n) || (n = s({}, n)), r != null && !v(r) && (r = null);
		let i = $r(), a = /* @__PURE__ */ new WeakSet(), o = [], c = !1, l = i.app = {
			_uid: ei++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: Va,
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
					let u = l._ceVNode || ca(n, r);
					return u.appContext = i, s === !0 ? s = "svg" : s === !1 && (s = void 0), o && t ? t(u, a) : e(u, a, s), c = !0, l._container = a, a.__vue_app__ = l, La(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				c && (vn(o, l._instance, 16), e(null, l._container), delete l._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, l;
			},
			runWithContext(e) {
				let t = ni;
				ni = l;
				try {
					return e();
				} finally {
					ni = t;
				}
			}
		};
		return l;
	};
}
var ni = null, ri = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${C(t)}Modifiers`] || e[`${oe(t)}Modifiers`];
function ii(e, n, ...r) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || t, a = r, o = n.startsWith("update:"), s = o && ri(i, n.slice(7));
	s && (s.trim && (a = r.map((e) => g(e) ? e.trim() : e)), s.number && (a = a.map(de)));
	let c, l = i[c = se(n)] || i[c = se(C(n))];
	!l && o && (l = i[c = se(oe(n))]), l && vn(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, vn(u, e, 6, a);
	}
}
var ai = /* @__PURE__ */ new WeakMap();
function oi(e, t, n = !1) {
	let r = n ? ai : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, c = !1;
	if (!h(e)) {
		let r = (e) => {
			let n = oi(e, t, !0);
			n && (c = !0, s(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !c ? (v(e) && r.set(e, null), null) : (d(a) ? a.forEach((e) => o[e] = null) : s(o, a), v(e) && r.set(e, o), o);
}
function si(e, t) {
	return !e || !a(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), u(e, t[0].toLowerCase() + t.slice(1)) || u(e, oe(t)) || u(e, t));
}
function ci(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: s, attrs: c, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = Vn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = pa(u.call(t, e, d, f, m, p, h)), y = c;
		} else {
			let e = t;
			v = pa(e.length > 1 ? e(f, {
				attrs: c,
				slots: s,
				emit: l
			}) : e(f, null)), y = t.props ? c : ui(c);
		}
	} catch (t) {
		Zi.length = 0, yn(t, e, 1), v = ca(Yi);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(o) && (y = di(y, a)), b = da(b, y, !1, !0));
	}
	return n.dirs && (b = da(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && rr($n(b.type) && nr(b) || b, n.transition), v = b, Vn(_), v;
}
function li(e, t = !0) {
	let n;
	for (let t = 0; t < e.length; t++) {
		let r = e[t];
		if (ia(r)) {
			if (r.type !== Yi || r.children === "v-if") {
				if (n) return;
				n = r;
			}
		} else return;
	}
	return n;
}
var ui = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || a(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, di = (e, t) => {
	let n = {};
	for (let r in e) o(r) && r.slice(9) in t || (n[r] = e[r]);
	return n;
};
function fi(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? pi(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (mi(o, r, n) && !si(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? !o || pi(r, o, l) : !!o;
	return !1;
}
function pi(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (!u(e, a) || mi(t, e, a) && !si(n, a)) return !0;
	}
	return !1;
}
function mi(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && v(r) && v(i) ? !Te(r, i) : r !== i;
}
function hi({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var gi = {}, _i = () => Object.create(gi), vi = (e) => Object.getPrototypeOf(e) === gi;
function yi(e, t, n, r = !1) {
	let i = {}, a = _i();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), xi(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	e.props = n ? r ? i : /* @__PURE__ */ Gt(i) : e.type.props ? i : a, e.attrs = a;
}
function bi(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ A(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (si(e.emitsOptions, o)) continue;
				let d = t[o];
				if (c) {
					if (u(a, o)) d !== a[o] && (a[o] = d, l = !0);
					else {
						let t = C(o);
						i[t] = Si(c, s, t, d, e, !1);
					}
				} else d !== a[o] && (a[o] = d, l = !0);
			}
		}
	} else {
		xi(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) t && (u(t, a) || (r = oe(a)) !== a && u(t, r)) || (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = Si(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) t && u(t, e) || (delete a[e], l = !0);
	}
	l && lt(e.attrs, "set", "");
}
function xi(e, n, r, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (n) for (let t in n) {
		if (ne(t)) continue;
		let l = n[t], d;
		a && u(a, d = C(t)) ? !o || !o.includes(d) ? r[d] = l : (c ||= {})[d] = l : si(e.emitsOptions, t) || t in i && l === i[t] || (i[t] = l, s = !0);
	}
	if (o) {
		let n = /* @__PURE__ */ A(r), i = c || t;
		for (let t = 0; t < o.length; t++) {
			let s = o[t];
			r[s] = Si(a, n, s, i[s], e, !u(i, s));
		}
	}
	return s;
}
function Si(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = u(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && h(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = Ea(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === oe(n)) && (r = !0));
	}
	return r;
}
var Ci = /* @__PURE__ */ new WeakMap();
function wi(e, r, i = !1) {
	let a = i ? Ci : r.propsCache, o = a.get(e);
	if (o) return o;
	let c = e.props, l = {}, f = [], p = !1;
	if (!h(e)) {
		let t = (e) => {
			p = !0;
			let [t, n] = wi(e, r, !0);
			s(l, t), n && f.push(...n);
		};
		!i && r.mixins.length && r.mixins.forEach(t), e.extends && t(e.extends), e.mixins && e.mixins.forEach(t);
	}
	if (!c && !p) return v(e) && a.set(e, n), n;
	if (d(c)) for (let e = 0; e < c.length; e++) {
		let n = C(c[e]);
		Ti(n) && (l[n] = t);
	}
	else if (c) for (let e in c) {
		let t = C(e);
		if (Ti(t)) {
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
function Ti(e) {
	return e[0] !== "$" && !ne(e);
}
var Ei = (e) => e === "_" || e === "_ctx" || e === "$stable", Di = (e) => d(e) ? e.map(pa) : [pa(e)], Oi = (e, t, n) => {
	if (t._n) return t;
	let r = Hn((...e) => Di(t(...e)), n);
	return r._c = !1, r;
}, ki = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (Ei(n)) continue;
		let i = e[n];
		if (h(i)) t[n] = Oi(n, i, r);
		else if (i != null) {
			let e = Di(i);
			t[n] = () => e;
		}
	}
}, Ai = (e, t) => {
	let n = Di(t);
	e.slots.default = () => n;
}, ji = (e, t, n) => {
	for (let r in t) (n || !Ei(r)) && (e[r] = t[r]);
}, Mi = (e, t, n) => {
	let r = e.slots = _i();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (ji(r, t, n), n && ue(r, "_", e, !0)) : ki(t, r);
	} else t && Ai(e, t);
}, Ni = (e, n, r) => {
	let { vnode: i, slots: a } = e, o = !0, s = t;
	if (i.shapeFlag & 32) {
		let e = n._;
		e ? r && e === 1 ? o = !1 : ji(a, n, r) : (o = !n.$stable, ki(n, a)), s = n;
	} else n && (Ai(e, n), s = { default: 1 });
	if (o) for (let e in a) !Ei(e) && s[e] == null && delete a[e];
}, Pi = qi;
function Fi(e) {
	return Ii(e);
}
function Ii(e, i) {
	let a = pe();
	a.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = r, insertStaticContent: _ } = e, v = (e, t, r, i = null, a = null, o = null, s = void 0, c = null, l = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !aa(e, t) && (i = Se(e), E(e, a, o, !0), e = null), t.patchFlag === -2 && (l = !1, t.dynamicChildren = null), t.dynamicChildren && e && e.dynamicChildren && e.dynamicChildren.hasOnce && (t.dynamicChildren === n && (t.dynamicChildren = []), t.dynamicChildren.hasOnce = !0);
		let { type: u, ref: d, shapeFlag: f } = t;
		switch (u) {
			case Ji:
				y(e, t, r, i);
				break;
			case Yi:
				b(e, t, r, i);
				break;
			case Xi:
				e ?? x(t, r, i, s);
				break;
			case z:
				se(e, t, r, i, a, o, s, c, l);
				break;
			default: f & 1 ? te(e, t, r, i, a, o, s, c, l) : f & 6 ? ce(e, t, r, i, a, o, s, c, l) : (f & 64 || f & 128) && u.process(e, t, r, i, a, o, s, c, l, we);
		}
		d != null && a ? lr(d, e && e.ref, o, t || e, !t) : d == null && e && e.ref != null && lr(e.ref, null, o, e, !0);
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
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && C(e.children, d, null, r, i, Li(e, a), s, u), _ && Un(e, null, r, "created"), ie(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !ne(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && _a(f, r, e);
		}
		_ && Un(e, null, r, "beforeMount");
		let v = zi(i, g);
		v ? g.beforeEnter(d) : g && !g.persisted && (d[Ki] = !0), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && Pi(() => {
			try {
				f && _a(f, r, e), v && g.enter(d), _ && Un(e, null, r, "mounted");
			} finally {}
		}, i);
	}, ie = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || Gi(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				ie(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, C = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) {
			let c = e[l] = s ? ma(e[l]) : pa(e[l]);
			v(null, c, t, n, r, i, a, o, s);
		}
	}, ae = (e, n, r, i, a, o, s) => {
		let l = n.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = n;
		u |= e.patchFlag & 16;
		let m = e.props || t, h = n.props || t, g;
		if (r && Ri(r, !1), (g = h.onVnodeBeforeUpdate) && _a(g, r, n, e), f && Un(n, e, r, "beforeUpdate"), r && Ri(r, !0), d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length) && (u = 0, s = !1, d = null), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? oe(e.dynamicChildren, d, l, r, i, Li(n, a), o) : s || me(e, n, l, null, r, i, Li(n, a), o, !1), u > 0) {
			if (u & 16) w(l, m, h, r, a);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, a), u & 4 && c(l, "style", m.style, h.style, a), u & 8) {
				let e = n.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let n = e[t], i = m[n], o = h[n];
					(o !== i || n === "value") && c(l, n, i, o, a, r);
				}
			}
			u & 1 && e.children !== n.children && p(l, n.children);
		} else !s && d == null && w(l, m, h, r, a);
		((g = h.onVnodeUpdated) || f) && Pi(() => {
			g && _a(g, r, n, e), f && Un(n, e, r, "updated");
		}, i);
	}, oe = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el || Wi(c), d = u && (c.type === z || !aa(c, l) || c.shapeFlag & 198) ? m(u) : n;
			v(c, l, d, null, r, i, a, o, !0);
		}
	}, w = (e, n, r, i, a) => {
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
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), C(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (oe(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && Bi(e, t, !0)) : me(e, t, n, f, i, a, s, c, l);
	}, ce = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : ue(t, n, r, i, a, o, c) : de(e, t, c);
	}, ue = (e, t, n, r, i, a, o) => {
		let s = e.component = xa(e, r, i);
		if (fr(e) && (s.ctx.renderer = we), Aa(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, fe, o, a), !e.el) {
				let r = s.subTree = ca(Yi);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else fe(s, e, t, n, i, a, o);
	}, de = (e, t, n) => {
		let r = t.component = e.component;
		if (fi(e, t, n)) {
			if (r.asyncDep && !r.asyncResolved) {
				t.el = e.el, t.placeholder = e.placeholder, T(r, t, n);
				return;
			}
			r.next = t, r.update();
		} else t.el = e.el, t.placeholder = e.placeholder, r.vnode = t;
	}, fe = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = Hi(e);
					if (n) {
						t && (t.el = c.el, T(e, t, o)), n.asyncDep.then(() => {
							let t = () => {
								e.job.flags & 8 || (i && i.pendingBranch ? Pi(t, i) : l());
							};
							t.flags = 48, Pi(t, i);
						});
						return;
					}
				}
				let u = t, d;
				Ri(e, !1), t ? (t.el = c.el, T(e, t, o)) : t = c, n && le(n), (d = t.props && t.props.onVnodeBeforeUpdate) && _a(d, s, t, c), Ri(e, !0);
				let f = ci(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el || Wi(p)), Se(p), e, i, a), t.el = f.el, u === null && hi(e, f.el), r && Pi(r, i), (d = t.props && t.props.onVnodeUpdated) && Pi(() => _a(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = dr(t);
				if (Ri(e, !1), l && le(l), !m && (o = c && c.onVnodeBeforeMount) && _a(o, d, t), Ri(e, !0), s && Ee) {
					let t = () => {
						e.subTree = ci(e), Ee(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = ci(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && Pi(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					Pi(() => _a(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && dr(d.vnode) && d.vnode.shapeFlag & 256) && e.a && Pi(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Ie(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => An(u), Ri(e, !0), l();
	}, T = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, bi(e, t.props, r, n), Ni(e, t.children, n), Ze(), Nn(e), Qe();
	}, me = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				ge(l, d, n, r, i, a, o, s, c);
				return;
			}
			if (f & 256) {
				he(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && xe(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? ge(l, d, n, r, i, a, o, s, c) : xe(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && C(d, n, r, i, a, o, s, c));
	}, he = (e, t, r, i, a, o, s, c, l) => {
		e ||= n, t ||= n;
		let u = e.length, d = t.length, f = Math.min(u, d), p = 0;
		for (; p < f; p++) {
			let n = t[p] = l ? ma(t[p]) : pa(t[p]);
			v(e[p], n, r, null, a, o, s, c, l);
		}
		u > d ? xe(e, a, o, !0, !1, f) : C(t, r, i, a, o, s, c, l, f);
	}, ge = (e, t, r, i, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let n = e[u], i = t[u] = l ? ma(t[u]) : pa(t[u]);
			if (aa(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let n = e[f], i = t[p] = l ? ma(t[p]) : pa(t[p]);
			if (aa(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, n = e < d ? t[e].el : i;
				for (; u <= p;) v(null, t[u] = l ? ma(t[u]) : pa(t[u]), r, n, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) E(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? ma(t[u]) : pa(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let _, y = 0, b = p - h + 1, x = !1, ee = 0, S = Array(b);
			for (u = 0; u < b; u++) S[u] = 0;
			for (u = m; u <= f; u++) {
				let n = e[u];
				if (y >= b) {
					E(n, a, o, !0);
					continue;
				}
				let i;
				if (n.key != null) i = g.get(n.key);
				else for (_ = h; _ <= p; _++) if (S[_ - h] === 0 && aa(n, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? E(n, a, o, !0) : (S[i - h] = u + 1, i >= ee ? ee = i : x = !0, v(n, t[i], r, null, a, o, s, c, l), y++);
			}
			let te = x ? Vi(S) : n;
			for (_ = te.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, n = t[e], f = t[e + 1], p = e + 1 < d ? f.el || Wi(f) : i;
				S[u] === 0 ? v(null, n, r, p, a, o, s, c, l) : x && (_ < 0 || u !== te[_] ? _e(n, r, p, 2) : _--);
			}
		}
	}, _e = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) _e(e.component.subTree, t, n, r);
		else if (d & 128) e.suspense.move(t, n, r);
		else if (d & 64) c.move(e, t, n, we);
		else if (c === z) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) _e(u[e], t, n, r);
			o(e.anchor, t, n);
		} else if (c === Xi) ee(e, t, n);
		else if (r !== 2 && d & 1 && l) {
			if (r === 0) l.persisted && !a[er] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), Pi(() => l.enter(a), i));
			else {
				let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
					e.ctx.isUnmounted ? s(a) : o(a, t, n);
				}, d = () => {
					let e = a._isLeaving || !!a[er];
					a._isLeaving && a[er](!0), l.persisted && !e ? u() : r(a, () => {
						u(), c && c();
					});
				};
				i ? i(a, u, d) : d();
			}
		} else o(a, t, n);
	}, E = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if ((d === -2 || l && l.hasOnce) && (i = !1), s != null && (Ze(), lr(s, null, n, e, !0), Qe()), p == null || e.ctx && e.ctx !== t || (t.renderCache[p] = void 0), u & 256 && t.ctx.deactivate(e)) return;
		let h = u & 1 && f, g = !dr(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && _a(_, t, e), u & 6) be(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Un(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, we, r) : l && !l.hasOnce && (a !== z || d > 0 && d & 64) ? xe(l, t, n, !1, !0) : (a === z && d & 384 || !i && u & 16) && xe(c, t, n), r && ve(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && Pi(() => {
			_ && _a(_, t, e), h && Un(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, ve = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e, a = t === z;
		if (a && !i) {
			ye(n, r);
			return;
		}
		if (t === Xi) {
			S(e), i && !i.persisted && i.afterLeave && i.afterLeave();
			return;
		}
		let o = a ? ir(e) : e, c = () => {
			a ? m(n) && ye(n, r) : s(n), i && !i.persisted && i.afterLeave && i.afterLeave();
		};
		if (o && o.shapeFlag & 1 && i && !i.persisted) {
			let { leave: e, delayLeave: t } = i, n = o.el, r = () => e(n, c);
			t ? t(n, c, r) : r();
		} else c();
	}, ye = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, be = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		Ui(c), Ui(l), r && le(r), i.stop(), a ? (a.flags |= 8, E(o, e, t, n)) : o && (o.transition = e.vnode.transition, E(o, e, t, n)), s && Pi(s, t);
		let u = () => {
			e.isUnmounted = !0;
		};
		u.flags = 16, Pi(u, t);
	}, xe = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) E(e[o], t, n, r, i);
	}, Se = (e) => {
		if (e.shapeFlag & 6) return Se(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Qn];
		return n ? h(n) : t;
	}, Ce = (e, t, n) => {
		In(() => {
			e == null ? t._vnode && E(t._vnode, null, null, !0) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e;
		}, e && t._vnode ? void 0 : e && e.component ? e.component.uid : ba());
	}, we = {
		p: v,
		um: E,
		m: _e,
		r: ve,
		mt: ue,
		mc: C,
		pc: me,
		pbc: oe,
		n: Se,
		o: e
	}, Te, Ee;
	return i && ([Te, Ee] = i(we)), {
		render: Ce,
		hydrate: Te,
		createApp: ti(Ce, Te)
	};
}
function Li({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ri({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function zi(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Bi(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (d(r) && d(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = ma(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Bi(t, a)), a.type === Ji && (a.patchFlag === -1 && (a = i[e] = ma(a)), a.el = t.el), a.type === Yi && !a.el && (a.el = t.el);
	}
}
function Vi(e) {
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
function Hi(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Hi(t);
}
function Ui(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Wi(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	if (t) return Wi(t.subTree);
	let n = e.suspense;
	return n && n.activeBranch ? Wi(n.activeBranch) : null;
}
var Gi = (e) => e.__isSuspense, Ki = /* @__PURE__ */ Symbol("_deferredEnter");
function qi(e, t) {
	t && t.pendingBranch ? d(e) ? t.effects.push(...e) : t.effects.push(e) : Mn(e);
}
var z = /* @__PURE__ */ Symbol.for("v-fgt"), Ji = /* @__PURE__ */ Symbol.for("v-txt"), Yi = /* @__PURE__ */ Symbol.for("v-cmt"), Xi = /* @__PURE__ */ Symbol.for("v-stc"), Zi = [], Qi = null;
function B(e = !1) {
	Zi.push(Qi = e ? null : []);
}
function $i() {
	Zi.pop(), Qi = Zi[Zi.length - 1] || null;
}
var ea = 1;
function ta(e, t = !1) {
	ea += e, e < 0 && Qi && t && (Qi.hasOnce = !0);
}
function na(e) {
	return e.dynamicChildren = ea > 0 ? Qi || n : null, $i(), ea > 0 && Qi && Qi.push(e), e;
}
function V(e, t, n, r, i, a) {
	return na(H(e, t, n, r, i, a, !0));
}
function ra(e, t, n, r, i) {
	return na(ca(e, t, n, r, i, !0));
}
function ia(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function aa(e, t) {
	return e.type === t.type && e.key === t.key;
}
var oa = ({ key: e }) => e ?? null, sa = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : g(e) || /* @__PURE__ */ j(e) || h(e) ? {
	i: zn,
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
		key: t && oa(t),
		ref: t && sa(t),
		scopeId: Bn,
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
		ctx: zn
	};
	return s ? (ha(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= g(n) ? 8 : 16), ea > 0 && !o && Qi && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && Qi.push(c), c;
}
var ca = la;
function la(e, t = null, n = null, r = 0, i = null, a = !1) {
	if (e && e !== kr || (e = Yi), ia(e)) {
		let r = da(e, t, !0);
		return n && ha(r, n), ea > 0 && !a && Qi && (r.shapeFlag & 6 ? Qi[Qi.indexOf(e)] = r : Qi.push(r)), r.patchFlag = -2, r;
	}
	if (za(e) && (e = e.__vccOpts), t) {
		t = ua(t);
		let { class: e, style: n } = t;
		e && !g(e) && (t.class = E(e)), v(n) && (/* @__PURE__ */ Zt(n) && !d(n) && (n = s({}, n)), t.style = T(n));
	}
	let o = g(e) ? 1 : Gi(e) ? 128 : $n(e) ? 64 : v(e) ? 4 : h(e) ? 2 : 0;
	return H(e, t, n, r, i, o, a, !0);
}
function ua(e) {
	return e ? /* @__PURE__ */ Zt(e) ? s({}, e) : vi(e) ? s({}, e[Pa] || e) : e : null;
}
function da(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? ga(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && oa(l),
		ref: t && t.ref ? n && a ? d(a) ? a.concat(sa(t)) : [a, sa(t)] : sa(t) : a,
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
		ssContent: e.ssContent && da(e.ssContent),
		ssFallback: e.ssFallback && da(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce,
		cacheIndex: e.cacheIndex
	};
	return c && r && rr(u, c.clone(u)), u;
}
function U(e = " ", t = 0) {
	return ca(Ji, null, e, t);
}
function fa(e, t) {
	let n = ca(Xi, null, e);
	return n.staticCount = t, n;
}
function W(e = "", t = !1) {
	return t ? (B(), ra(Yi, null, e)) : ca(Yi, null, e);
}
function pa(e) {
	return e == null || typeof e == "boolean" ? ca(Yi) : d(e) ? ca(z, null, e.slice()) : ia(e) ? ma(e) : ca(Ji, null, String(e));
}
function ma(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : da(e);
}
function ha(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (d(t)) n = 16;
	else if (typeof t == "object") {
		if (r & 65) {
			let n = t.default;
			n && (n._c && (n._d = !1), ha(e, n()), n._c && (n._d = !0));
			return;
		}
		{
			n = 32;
			let r = t._;
			!r && !vi(t) ? t._ctx = zn : r === 3 && zn && (zn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
		}
	} else if (h(t)) {
		if (r & 65) {
			ha(e, { default: t });
			return;
		}
		t = {
			default: t,
			_ctx: zn
		}, n = 32;
	} else t = String(t), r & 64 ? (n = 16, t = [U(t)]) : n = 8;
	e.children = t, e.shapeFlag |= n;
}
function ga(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = E([t.class, r.class]));
		else if (e === "style") t.style = T([t.style, r.style]);
		else if (a(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(d(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !o(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function _a(e, t, n, r = null) {
	vn(e, t, 7, [n, r]);
}
var va = /* @__PURE__ */ $r(), ya = 0;
function ba() {
	return ya;
}
function xa(e, n, r) {
	let i = e.type, a = (n ? n.appContext : e.appContext) || va, o = {
		uid: ya++,
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
		scope: new je(!0),
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
		propsOptions: wi(i, a),
		emitsOptions: oi(i, a),
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
	return o.ctx = { _: o }, o.root = n ? n.root : o, o.emit = ii.bind(null, o), e.ce && e.ce(o), o;
}
var Sa = null, Ca = () => Sa || zn, wa, Ta;
{
	let e = pe(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	wa = t("__VUE_INSTANCE_SETTERS__", (e) => Sa = e), Ta = t("__VUE_SSR_SETTERS__", (e) => ka = e);
}
var Ea = (e) => {
	let t = Sa;
	return wa(e), e.scope.on(), () => {
		e.scope.off(), wa(t);
	};
}, Da = () => {
	Sa && Sa.scope.off(), wa(null);
};
function Oa(e) {
	return e.vnode.shapeFlag & 4;
}
var ka = !1;
function Aa(e, t = !1, n = !1) {
	t && Ta(t);
	let { props: r, children: i } = e.vnode, a = Oa(e);
	yi(e, r, a, t), Mi(e, i, n || t);
	let o = a ? ja(e, t) : void 0;
	return t && Ta(!1), o;
}
function ja(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ir);
	let { setup: r } = n;
	if (r) {
		Ze();
		let n = e.setupContext = r.length > 1 ? Ia(e) : null, i = Ea(e), a = _n(r, e, 0, [e.props, n]), o = y(a);
		if (Qe(), i(), (o || e.sp) && !dr(e) && or(e), o) {
			if (a.then(Da, Da), t) return a.then((n) => {
				Ta(!0);
				try {
					Ma(e, n, t);
				} finally {
					Ta(!1);
				}
			}).catch((t) => {
				yn(t, e, 0, void 0, !0), e.ssrRender = (e, t) => t("<!---->");
			});
			e.asyncDep = a;
		} else Ma(e, a, t);
	} else Na(e, t);
}
function Ma(e, t, n) {
	h(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : v(t) && (e.setupState = an(t)), Na(e, n);
}
function Na(e, t, n) {
	let i = e.type;
	e.render ||= i.render || r;
	{
		let t = Ea(e);
		Ze();
		try {
			zr(e);
		} finally {
			Qe(), t();
		}
	}
}
var Pa = /* @__PURE__ */ Symbol(), Fa = { get(e, t) {
	return ct(e, "get", ""), t === Pa ? e : e[t];
} };
function Ia(e) {
	return {
		attrs: new Proxy(e.attrs, Fa),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function La(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(an(Qt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Pr) return Pr[n](e);
		},
		has(e, t) {
			return t in e || t in Pr;
		}
	}) : e.proxy;
}
function Ra(e, t = !0) {
	return h(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function za(e) {
	return h(e) && "__vccOpts" in e;
}
var G = (e, t) => /* @__PURE__ */ un(e, t, ka);
function Ba(e, t, n) {
	try {
		ta(-1);
		let r = arguments.length;
		return r === 2 ? v(t) && !d(t) ? ia(t) ? ca(e, null, [t]) : ca(e, t) : ca(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && ia(n) && (n = [n]), ca(e, t, n));
	} finally {
		ta(1);
	}
}
var Va = "3.5.45", Ha = void 0, Ua = typeof window < "u" && window.trustedTypes;
if (Ua) try {
	Ha = /* @__PURE__ */ Ua.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var Wa = Ha ? (e) => Ha.createHTML(e) : (e) => e, Ga = "http://www.w3.org/2000/svg", Ka = "http://www.w3.org/1998/Math/MathML", qa = typeof document < "u" ? document : null, Ja = qa && /* @__PURE__ */ qa.createElement("template"), Ya = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? qa.createElementNS(Ga, e) : t === "mathml" ? qa.createElementNS(Ka, e) : n ? qa.createElement(e, { is: n }) : qa.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => qa.createTextNode(e),
	createComment: (e) => qa.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => qa.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), i !== a && (i = i.nextSibling););
		else {
			Ja.innerHTML = Wa(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = Ja.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, Xa = /* @__PURE__ */ Symbol("_vtc");
function Za(e, t, n) {
	let r = e[Xa];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var Qa = /* @__PURE__ */ Symbol("_vod"), $a = /* @__PURE__ */ Symbol("_vsh"), eo = {
	name: "show",
	beforeMount(e, { value: t }, { transition: n }) {
		e[Qa] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : to(e, t);
	},
	mounted(e, { value: t }, { transition: n }) {
		n && t && n.enter(e);
	},
	updated(e, { value: t, oldValue: n }, { transition: r }) {
		!t != !n && (r ? t ? (r.beforeEnter(e), to(e, !0), r.enter(e)) : r.leave(e, () => {
			to(e, !1);
		}) : to(e, t));
	},
	beforeUnmount(e, { value: t }) {
		to(e, t);
	}
};
function to(e, t) {
	e.style.display = t ? e[Qa] : "none", e[$a] = !t;
}
var no = /* @__PURE__ */ Symbol(""), ro = /(?:^|;)\s*display\s*:/;
function io(e, t, n) {
	let r = e.style, i = g(n), a = !1;
	if (n && !i) {
		if (t) {
			if (g(t)) for (let e of t.split(";")) {
				let t = e.slice(0, e.indexOf(":")).trim();
				n[t] ?? oo(r, t, "");
			}
			else for (let e in t) n[e] ?? oo(r, e, "");
		}
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? oo(r, i, "") : uo(e, i, !g(t) && t ? t[i] : void 0, o) || oo(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[no];
			e && (n += ";" + e), r.cssText = n, a = ro.test(n);
		}
	} else t && e.removeAttribute("style");
	Qa in e && (i && t === n || (e[Qa] = a ? r.display : ""), e[$a] && (r.display = "none"));
}
var ao = /\s*!important$/;
function oo(e, t, n) {
	if (d(n)) n.forEach((n) => oo(e, t, n));
	else if (n ??= "", t.startsWith("--")) ao.test(n) ? e.setProperty(t, n.replace(ao, ""), "important") : e.setProperty(t, n);
	else {
		let r = lo(e, t);
		ao.test(n) ? e.setProperty(oe(r), n.replace(ao, ""), "important") : e[r] = n;
	}
}
var so = [
	"Webkit",
	"Moz",
	"ms"
], co = {};
function lo(e, t) {
	let n = co[t];
	if (n) return n;
	let r = C(t);
	if (r !== "filter" && r in e) return co[t] = r;
	r = w(r);
	for (let n = 0; n < so.length; n++) {
		let i = so[n] + r;
		if (i in e) return co[t] = i;
	}
	return t;
}
function uo(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && g(r) && n === r;
}
var fo = "http://www.w3.org/1999/xlink";
function po(e, t, n, r, i, a = ye(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(fo, t.slice(6, t.length)) : e.setAttributeNS(fo, t, n) : n == null || a && !be(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : _(n) ? String(n) : n);
}
function mo(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? Wa(n) : n);
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
		r === "boolean" ? n = be(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function ho(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function go(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var _o = /* @__PURE__ */ Symbol("_vei");
function vo(e, t, n, r, i = null) {
	let a = e[_o] || (e[_o] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = xo(t);
		r ? ho(e, n, a[t] = To(r, i), s) : o && (go(e, n, o, s), a[t] = void 0);
	}
}
var yo = /(Once|Passive|Capture)$/, bo = /^on:?(?:Once|Passive|Capture)$/;
function xo(e) {
	let t, n;
	for (; (n = e.match(yo)) && !bo.test(e);) t ||= {}, e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
	return [e[2] === ":" ? e.slice(3) : oe(e.slice(2)), t];
}
var So = 0, Co = /* @__PURE__ */ Promise.resolve(), wo = () => So ||= (Co.then(() => So = 0), Date.now());
function To(e, t) {
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
				e && vn(e, t, 5, a);
			}
		} else vn(r, t, 5, [e]);
	};
	return n.value = e, n.attached = wo(), n;
}
var Eo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Do = (e, t, n, r, i, s) => {
	let c = i === "svg";
	t === "class" ? Za(e, r, c) : t === "style" ? io(e, n, r) : a(t) ? o(t) || vo(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), 1) : t[0] === "^" ? (t = t.slice(1), 0) : Oo(e, t, r, c)) ? (mo(e, t, r), e.tagName.includes("-") || t !== "value" && t !== "checked" && t !== "selected" || po(e, t, r, c, s, t !== "value")) : e._isVueCE && (ko(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !g(r))) ? mo(e, C(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), po(e, t, r, c));
};
function Oo(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Eo(t) && h(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return Eo(t) && g(n) ? !1 : t in e;
}
function ko(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = C(t);
	return Array.isArray(n) ? n.some((e) => C(e) === r) : Object.keys(n).some((e) => C(e) === r);
}
var Ao = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return d(t) ? (e) => le(t, e) : t;
};
function jo(e) {
	e.target.composing = !0;
}
function Mo(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var No = /* @__PURE__ */ Symbol("_assign"), Po = /* @__PURE__ */ Symbol("_initialValue");
function Fo(e, t, n) {
	return t && (e = e.trim()), n && (e = de(e)), e;
}
var K = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e.parentNode && (e.type === "text" ? e[Po] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Po] = e.defaultValue.replace(/\r\n?/g, "\n"))), e[No] = Ao(i);
		let a = r || i.props && i.props.type === "number";
		ho(e, t ? "change" : "input", (t) => {
			t.target.composing || e[No](Fo(e.value, n, a));
		}), (n || a) && ho(e, "change", () => {
			e.value = Fo(e.value, n, a);
		}), t || (ho(e, "compositionstart", jo), ho(e, "compositionend", Mo), ho(e, "change", Mo));
	},
	mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
		let i = t ?? "", a = e[Po];
		delete e[Po], a !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== a ? e[No](Fo(e.value, n, r)) : e.value = i;
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[No] = Ao(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? de(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, Io = {
	deep: !0,
	created(e, t, n) {
		e[No] = Ao(n), ho(e, "change", () => {
			let t = e._modelValue, n = Bo(e), r = e.checked, i = e[No];
			if (d(t)) {
				let e = Ee(t, n), a = e !== -1;
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
	mounted: Lo,
	beforeUpdate(e, t, n) {
		e[No] = Ao(n), Lo(e, t, n);
	}
};
function Lo(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (d(t)) i = Ee(t, r.props.value) > -1;
	else if (p(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = Te(t, Vo(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var q = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		e._modelValue = t, ho(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? de(Bo(e)) : Bo(e)), r = e.multiple, i = r ? p(e._modelValue) ? new Set(t) : t : t[0], a = e._pendingValue = [r, r ? d(i) ? t.slice() : t : i];
			try {
				e[No](i);
			} finally {
				On(() => {
					e._pendingValue === a && (e._pendingValue = void 0);
				});
			}
		}), e[No] = Ao(r);
	},
	mounted(e, { value: t, modifiers: { number: n } }) {
		zo(e, t, n);
	},
	beforeUpdate(e, { value: t }, n) {
		e._modelValue = t, e[No] = Ao(n);
	},
	updated(e, { value: t, modifiers: { number: n } }) {
		let r = e._pendingValue;
		e._pendingValue = void 0, r && r[0] === e.multiple && Ro(t, r[1], r[0]) || zo(e, t, n);
	}
};
function Ro(e, t, n) {
	if (!n || d(e)) return Te(e, t);
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
					o.selected = e === "string" || e === "number" ? t.some((e) => String(e) === String(s)) : Ee(t, s) > -1;
				} else o.selected = t.has(s) || n && typeof s == "string" && t.has(de(s));
			} else if (Te(Bo(o), t)) {
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
		let r = oe(n.key);
		if (t.some((e) => e === r || Wo[e] === r)) return e(n);
	}));
}, Ko = /* @__PURE__ */ s({ patchProp: Do }, Ya), qo;
function Jo() {
	return qo ||= Fi(Ko);
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
// src/vue/pages/PageView.vue
var Qo = /* @__PURE__ */ ar({
	inheritAttrs: !1,
	props: [
		"tag",
		"attrs",
		"nodes"
	],
	setup(e) {
		let t = /* @__PURE__ */ M(null);
		return L(() => {
			t.value.append(...e.nodes);
		}), () => Ba(e.tag, {
			...e.attrs,
			ref: t
		});
	}
});
function $o(e) {
	return "text" in e ? e.text : "nativeNodes" in e ? Ba(Qo, {
		tag: e.tag,
		attrs: e.props,
		nodes: e.nativeNodes
	}) : e.feature ? Ba(e.tag, e.props, [Ba(e.feature.component, e.feature.props)]) : Ba(e.tag, e.props, e.children.map($o));
}
var es = /* @__PURE__ */ ar({
	name: "WorkspacePageView",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return () => e.model.layout.map($o);
	}
}), ts = null;
function ns(e, t) {
	if (ts) throw Error("Nested feature collection");
	ts = e;
	try {
		return t();
	} finally {
		ts = null;
	}
}
function rs(e) {
	return ts ? (ts(e), !0) : !1;
}
function is(e) {
	if (!e?.closest) return e;
	let t = e.closest("[data-sb-page-fallback]");
	if (t && e !== t) return null;
	let n = e.closest("[data-sb-vue-page][data-v-app]");
	return n && e !== n && !e.closest("[data-sb-native-boundary]") ? null : e;
}
// src/vue/pages/page-composition.js
function as(e) {
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
function os(e, t) {
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
var ss = /* @__PURE__ */ new Set(["sb-poetry-auto-stress", "sb-gt-inner"]), cs = (e) => Object.fromEntries([...e.attributes].filter((e) => !/^on/i.test(e.name)).map((e) => [e.name, e.value])), ls = [
	"hidden",
	"open",
	"disabled",
	"checked",
	"multiple",
	"readonly",
	"selected",
	"required",
	"autofocus"
];
function us(e) {
	let t = cs(e);
	for (let n of ls) e.hasAttribute(n) && (t[n] = !0);
	return e.matches("input,select,textarea") && (e.type === "file" ? delete t.value : t.value = e.value, e.matches("input[type=checkbox],input[type=radio]") && (t.checked = e.checked)), t;
}
function ds(e, t, n) {
	let r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = (t, n, a = {}) => (e.contains(t) && (i.has(t) || i.set(t, [...t.attributes].map((e) => [e.name, e.value])), r.set(t, {
		component: n,
		props: a
	})), () => {});
	try {
		ns(({ root: t, selectTarget: n, readSnapshot: i, mount: a }) => {
			let o = n(t);
			if (!o?.isConnected || !e.contains(o)) return;
			let s = i(o);
			if (!s) return;
			a(o, s);
			let c = r.get(o);
			if (c?.props.api?.snapshot) {
				let e = c.component.props || {};
				if (![
					"model",
					"initial",
					"initialModel",
					"snapshot"
				].some((t) => t in e && t in c.props)) {
					let e = c.props.api, t = !0;
					c.props = {
						...c.props,
						api: {
							...e,
							snapshot(...n) {
								return t && !n.length ? (t = !1, s) : e.snapshot(...n);
							}
						}
					};
				}
			}
		}, () => {
			for (let e of t) e({
				mountVueFeature: a,
				sharedUi: n
			});
		});
	} finally {
		for (let [e, t] of i) {
			let n = new Map(t), i = r.get(e);
			i && (i.wrapperProps = Object.fromEntries([...e.attributes].filter((e) => n.get(e.name) !== e.value).map((e) => [e.name, e.value])));
			for (let t of [...e.attributes]) e.removeAttribute(t.name);
			for (let [n, r] of t) e.setAttribute(n, r);
		}
	}
	let o = [];
	function s(e) {
		if (e.nodeType === 3) return { text: e.nodeValue };
		if (e.nodeType !== 1 || e.localName === "script") return null;
		let t = r.get(e), n = us(e);
		return ss.has(e.id) ? {
			tag: e.localName,
			props: {
				...n,
				"data-sb-native-boundary": e.id
			},
			nativeNodes: [...e.childNodes]
		} : t ? (o.push(e.id || e.getAttribute("data-sb-workspace") || e.className), {
			tag: e.localName,
			props: {
				...n,
				...t.wrapperProps,
				"data-v-app": "",
				"data-sb-composed-feature": ""
			},
			feature: t
		}) : {
			tag: e.localName,
			props: n,
			children: [...e.childNodes].map(s).filter(Boolean)
		};
	}
	let c = [...e.childNodes].map(s).filter(Boolean);
	return o.length ? {
		layout: c,
		features: o
	} : null;
}
function fs(e, t) {
	for (let n of t) {
		if (n.nativeNodes) {
			let t = e.querySelector("#" + n.props.id);
			t && t.replaceChildren(...n.nativeNodes);
		}
		n.children && fs(e, n.children);
	}
}
// src/vue/legacy/observeLegacyIsland.js
function Y({ root: e, selectTarget: t, readSnapshot: n, mount: r, subscribe: i, createObserver: a = (e) => new MutationObserver(e) }) {
	if (!e || typeof t != "function" || typeof n != "function" || typeof r != "function" || rs({
		root: e,
		selectTarget: t,
		readSnapshot: n,
		mount: r
	})) return () => {};
	let o = !1, s = null;
	function c() {
		let e = s;
		s = null, e && e.unmount();
	}
	function l() {
		if (o) return;
		let i = is(t(e));
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
// src/vue/pages/legacyPageBridge.js
function ps({ mountVueFeature: e, activations: t, sharedUi: n }) {
	let r = document.getElementById("app");
	return r ? Y({
		root: r,
		selectTarget: (e) => e.querySelector("[data-sb-vue-page]"),
		readSnapshot: (e) => {
			let r = as(e);
			try {
				return {
					model: ds(e, t, n),
					fields: r
				};
			} catch (t) {
				return e.setAttribute("data-sb-page-fallback", ""), console.warn("[SUNOBOOM] Page composition unavailable; native page retained.", t), null;
			}
		},
		mount: (t, { model: n, fields: r }) => {
			if (!n) return t.setAttribute("data-sb-page-fallback", ""), null;
			let i = e(t, es, { model: n });
			return i ? t.removeAttribute("data-sb-page-fallback") : (t.setAttribute("data-sb-page-fallback", ""), fs(t, n.layout), os(t, r)), i;
		}
	}) : () => {};
}
// src/vue/workspace/Notifications.vue
var ms = { class: "sb-notice-panel-head" }, hs = { class: "sb-notice-scroll" }, gs = { class: "sb-notice-item-meta" }, _s = { class: "sb-notice-period" }, vs = { key: 0 }, ys = { class: "sb-notice-item-actions" }, bs = ["data-id", "data-key"], xs = {
	key: 0,
	class: "sb-notice-seen"
}, Ss = ["data-key"], Cs = {
	key: 0,
	class: "sb-notice-none"
}, ws = {
	key: 0,
	class: "sb-notice-panel-foot"
}, Ts = {
	key: 1,
	class: "sb-notice-banner",
	"aria-label": "Новые напоминания"
}, Es = { class: "sb-notice-banner-info" }, Ds = { class: "sb-notice-banner-actions" }, Os = ["data-id", "data-key"], ks = {
	class: "btn ghost small",
	type: "button",
	"data-action": "sb-notice-toggle"
}, As = {
	__name: "Notifications",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ M(null), r = /* @__PURE__ */ M(null);
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
		return L(() => {
			t.initial.kind === "notice-panel" && (r.value?.focus(), document.addEventListener("keydown", i));
		}), Cr(() => {
			document.removeEventListener("keydown", i), t.initial.kind === "notice-panel" && On(() => {
				document.querySelector(".sb-notice-panel") || document.querySelector(".sb-notice-bell[data-action=\"sb-notice-toggle\"]")?.focus();
			});
		}), (t, i) => e.initial.kind === "notice-panel" ? (B(), V(z, { key: 0 }, [i[4] ||= H("button", {
			type: "button",
			class: "sb-notice-overlay",
			"data-action": "sb-notice-close",
			"aria-label": "Закрыть уведомления"
		}, null, -1), H("aside", {
			ref_key: "panel",
			ref: n,
			class: "sb-notice-panel",
			role: "dialog",
			"aria-label": "Напоминания о событиях",
			"aria-modal": "true"
		}, [
			H("div", ms, [i[0] ||= H("div", null, [
				H("div", { class: "sb-notice-eyebrow" }, "🔔 SUNOBOOM"),
				H("h2", null, "Уведомления"),
				H("p", null, "Напоминания о твоих событиях")
			], -1), H("button", {
				ref_key: "close",
				ref: r,
				class: "sb-notice-close",
				type: "button",
				"data-action": "sb-notice-close",
				"aria-label": "Закрыть"
			}, "✕", 512)]),
			H("div", hs, [(B(!0), V(z, null, R(e.initial.items, (e) => (B(), V("article", {
				key: e.key,
				class: E(["sb-notice-item", { "sb-notice-read": e.read }])
			}, [
				H("div", gs, [H("span", { class: E(["sb-notice-when", { "sb-notice-today": e.today }]) }, D(e.when) + D(e.time ? " · " + e.time : ""), 3), H("span", null, D(e.type), 1)]),
				H("h3", null, D(e.title), 1),
				H("div", _s, D(e.period) + " · " + D(e.date), 1),
				e.notes ? (B(), V("p", vs, D(e.notes), 1)) : W("", !0),
				H("div", ys, [H("button", {
					type: "button",
					"data-action": "sb-notice-event",
					"data-id": e.id,
					"data-key": e.key
				}, "Открыть событие →", 8, bs), e.read ? (B(), V("span", xs, "✓ Прочитано")) : (B(), V("button", {
					key: 1,
					type: "button",
					"data-action": "sb-notice-read",
					"data-key": e.key
				}, "Прочитано", 8, Ss))])
			], 2))), 128)), e.initial.items.length ? W("", !0) : (B(), V("div", Cs, [...i[1] ||= [
				H("span", null, "🔔", -1),
				H("h3", null, "Пока нет новых напоминаний", -1),
				H("p", null, "Укажи сроки уведомлений при создании события — хоть за неделю, хоть в сам день.", -1),
				H("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "sb-notice-create"
				}, "Создать событие →", -1)
			]]))]),
			e.initial.unread > 1 ? (B(), V("div", ws, [...i[2] ||= [H("button", {
				type: "button",
				"data-action": "sb-notice-read-all"
			}, "Отметить все прочитанными", -1)]])) : W("", !0),
			i[3] ||= H("div", { class: "sb-notice-disclaimer" }, "Напоминания показываются, когда SUNOBOOM открыт. При закрытом сайте push-уведомления пока не отправляются.", -1)
		], 512)], 64)) : (B(), V("section", Ts, [
			i[5] ||= H("span", {
				class: "sb-notice-banner-icon",
				"aria-hidden": "true"
			}, "🔔", -1),
			H("div", Es, [H("strong", null, D(e.initial.title), 1), H("p", null, D(e.initial.first.period) + " · " + D(e.initial.first.date) + D(e.initial.first.time ? " · " + e.initial.first.time : ""), 1)]),
			H("div", Ds, [H("button", {
				class: "btn primary small",
				type: "button",
				"data-action": "sb-notice-event",
				"data-id": e.initial.first.id,
				"data-key": e.initial.first.key
			}, "Открыть", 8, Os), H("button", ks, "Все (" + D(e.initial.unread) + ")", 1)])
		]));
	}
}, js = {
	class: "encyclopedia-section-icon",
	"aria-hidden": "true"
}, Ms = { key: 1 }, Ns = ["innerHTML"], Ps = { key: 1 }, Fs = { key: 0 }, Is = { key: 1 }, Ls = { class: "sbpc-create-controls" }, Rs = ["value"], zs = ["value"], Bs = ["label"], Vs = ["value"], Hs = ["value"], Us = { class: "sbsong-hero-row" }, Ws = { class: "sbsong-hero-tools" }, Gs = {
	type: "button",
	class: "sbsong-artists-manage-btn",
	"data-sbsong-action": "artists-manage"
}, Ks = { class: "sbsong-stats" }, qs = ["value"], Js = {
	class: "btn ghost small",
	"data-action": "nav",
	"data-nav": "mixer"
}, Ys = {
	key: 0,
	class: "btn ghost small",
	"data-action": "gm-unlink"
}, Xs = {
	key: 8,
	type: "button",
	class: "sba-jump",
	"data-sba-action": "jump"
}, Zs = {
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
		let t = e, n = /* @__PURE__ */ N(t.initial), r = () => {
			let e = t.api.snapshot(t.name);
			e && (n.value = e);
		};
		return t.initial.event && window.addEventListener(t.initial.event, r), Cr(() => {
			t.initial.event && window.removeEventListener(t.initial.event, r);
		}), (e, t) => (B(), V(z, null, [
			n.value.kind === "academy-launch" ? (B(), V("button", ga({
				key: 0,
				type: "button",
				class: ["encyclopedia-section", n.value.tree ? "sb-gt-entry" : "sb-ap-tile"]
			}, n.value.tree ? { "data-sb-gt-action": "reveal" } : { "data-sb-ap-action": "hub-open" }), [
				H("span", js, D(n.value.tree ? "🕸️" : "🎙️"), 1),
				H("span", null, [H("strong", null, D(n.value.tree ? "Музыкальное древо" : "Профили исполнителей"), 1), H("small", null, D(n.value.tree ? "Истоки, связи и влияние жанров" : "История, звучание и важные произведения"), 1)]),
				t[0] ||= H("span", { class: "encyclopedia-section-status" }, "Открыть", -1)
			], 16)) : W("", !0),
			n.value.kind === "quick-poetry" ? (B(), V("span", Ms, "✍️ Работа с текстом песни")) : W("", !0),
			n.value.kind === "actions" || n.value.kind === "quick-poetry" || n.value.kind === "prompt-auditor" || n.value.kind === "player-modes" ? (B(), V(z, { key: 2 }, [
				(B(!0), V(z, null, R(n.value.buttons, (e, t) => (B(), V("button", ga({ key: t }, { ref_for: !0 }, e.attrs), [
					e.icon ? (B(), V("span", {
						key: 0,
						innerHTML: e.icon,
						"aria-hidden": "true",
						style: { display: "contents" }
					}, null, 8, Ns)) : W("", !0),
					U(D(e.icon ? " " : "") + D(e.label), 1),
					e.badge ? (B(), V("span", Ps, D(e.badge), 1)) : W("", !0)
				], 16))), 128)),
				n.value.hint ? (B(), V("span", Fs, D(n.value.hint), 1)) : W("", !0),
				n.value.kind === "prompt-auditor" ? (B(), V("span", Is, "Переносит текст на проверку, не сохраняя и не изменяя текущую запись.")) : W("", !0)
			], 64)) : n.value.kind === "producer-create" ? (B(), V(z, { key: 3 }, [t[3] ||= H("div", null, [H("h2", null, "Начать работу над песней"), H("p", null, "Создай новую карточку или выбери существующую идею, песню либо паспорт.")], -1), H("div", Ls, [
				H("input", {
					type: "text",
					id: "sbpc-new-title",
					maxlength: "120",
					value: n.value.title,
					placeholder: "Название новой песни (можно оставить пустым при выборе материала)"
				}, null, 8, Rs),
				H("select", {
					id: "sbpc-new-source",
					"aria-label": "Исходный материал",
					value: n.value.source
				}, [t[1] ||= H("option", { value: "" }, "Новая песня без привязки", -1), (B(!0), V(z, null, R(n.value.groups, (e) => (B(), V("optgroup", {
					key: e.type,
					label: e.title
				}, [(B(!0), V(z, null, R(e.items, (t) => (B(), V("option", {
					key: t.id,
					value: e.type + ":" + t.id
				}, D(t.name), 9, Vs))), 128))], 8, Bs))), 128))], 8, zs),
				t[2] ||= H("button", {
					type: "button",
					class: "sbpc-main-btn",
					"data-pc-action": "create"
				}, "+ Создать рабочую карточку", -1)
			])], 64)) : n.value.kind === "producer-search" ? (B(), V(z, { key: 4 }, [H("h2", null, "Песни (" + D(n.value.count) + ")", 1), H("input", {
				id: "sbpc-search",
				type: "search",
				value: n.value.query,
				placeholder: "Найти песню или артиста",
				"aria-label": "Поиск по песням"
			}, null, 8, Hs)], 64)) : n.value.kind === "songs-header" ? (B(), V(z, { key: 5 }, [
				t[7] ||= H("div", { class: "sbsong-eyebrow" }, "SUNOBOOM · ЛИЧНЫЙ КАБИНЕТ", -1),
				t[8] ||= H("button", {
					type: "button",
					"data-sbsong-action": "back",
					class: "sbsong-back"
				}, "← В личный кабинет", -1),
				H("div", Us, [t[5] ||= H("div", null, [H("h1", null, "Мои песни"), H("p", null, "Личная коллекция песен: карточки, обложки, MP3, M4A, WAV и версии записей.")], -1), H("div", Ws, [H("button", Gs, "♬ Мои артисты (" + D(n.value.artists) + ")", 1), t[4] ||= H("button", {
					type: "button",
					class: "sbsong-main-btn",
					"data-sbsong-action": "new"
				}, "+ Добавить песню", -1)])]),
				H("div", Ks, [
					H("span", null, D(n.value.count) + " песен", 1),
					H("span", null, D(n.value.versions) + " аудиоверсий на устройстве", 1),
					t[6] ||= H("span", null, "Хранение локально", -1)
				])
			], 64)) : n.value.kind === "songs-search" ? (B(), V(z, { key: 6 }, [t[9] ||= H("h2", null, "Коллекция", -1), H("input", {
				type: "search",
				id: "sbsong-search",
				value: n.value.query,
				placeholder: "Найти песню или исполнителя…",
				"aria-label": "Поиск песен"
			}, null, 8, qs)], 64)) : n.value.kind === "mixer-banner" ? (B(), V(z, { key: 7 }, [
				H("strong", null, D(n.value.active ? "🎛️ Активен жанровый микс" : "🎚️ Жанровый миксер"), 1),
				H("span", null, D(n.value.description), 1),
				H("button", Js, D(n.value.active ? "Изменить микс" : "Открыть миксер →"), 1),
				n.value.active ? (B(), V("button", Ys, "Обычный жанр")) : W("", !0)
			], 64)) : n.value.kind === "arranger-jump" ? (B(), V("button", Xs, [...t[10] ||= [
				H("span", null, "♬", -1),
				U(" Конструктор аранжировки ", -1),
				H("small", null, "Создать структуру песни", -1),
				U(),
				H("span", null, "↓", -1)
			]])) : W("", !0)
		], 64));
	}
}, Qs = { class: "form-grid" }, $s = { class: "field" }, ec = ["value"], tc = ["value"], nc = { class: "field" }, rc = { class: "notice" }, ic = {
	class: "btn primary",
	"data-action": "song-generate"
}, ac = ["innerHTML"], oc = {
	key: 0,
	class: "panel",
	style: { "margin-top": "16px" }
}, sc = { class: "eyebrow" }, cc = { class: "notice" }, lc = {
	class: "saved-list",
	style: { "margin-top": "14px" }
}, uc = { class: "row" }, dc = { class: "sub" }, fc = {
	class: "detail-actions",
	style: { "margin-top": "14px" }
}, pc = ["data-id"], mc = ["innerHTML"], hc = ["data-id"], gc = ["innerHTML"], _c = {
	__name: "SongBlueprint",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = G(() => t.initial.forms.find((e) => e.id === t.initial.form)?.duration || "");
		return (t, r) => (B(), V(z, null, [
			r[10] ||= H("div", { class: "eyebrow" }, "SUNOBOOM · SONG BLUEPRINT", -1),
			r[11] ||= H("h3", null, "Генератор структуры песни", -1),
			r[12] ||= H("p", null, "Создавай форму трека с учётом текущего жанра, настроения, темпа и темы. Каждый блок включает подсказки для музыки и текста.", -1),
			H("div", Qs, [H("div", $s, [r[0] ||= H("label", { for: "song-form" }, "Форма песни", -1), H("select", {
				id: "song-form",
				value: e.initial.form
			}, [(B(!0), V(z, null, R(e.initial.forms, (e) => (B(), V("option", {
				key: e.id,
				value: e.id
			}, D(e.name), 9, tc))), 128))], 8, ec)]), H("div", nc, [r[1] ||= H("label", null, "Длительность (ориентир)", -1), H("div", rc, D(n.value), 1)])]),
			H("button", ic, [H("span", {
				innerHTML: e.initial.icons.ideas,
				"aria-hidden": "true",
				style: { display: "contents" }
			}, null, 8, ac), r[2] ||= U(" Создать структуру", -1)]),
			r[13] ||= H("p", {
				class: "hint",
				style: { "margin-top": "10px" }
			}, "Офлайн-генератор, без внешнего ИИ. Структура — план, а не готовые слова песни.", -1),
			e.initial.song ? (B(), V("div", oc, [
				H("div", sc, "SONG BLUEPRINT · " + D(e.initial.song.duration), 1),
				H("h3", null, D(e.initial.song.title), 1),
				H("p", null, D(e.initial.song.genreName) + " · " + D(e.initial.song.formName) + " · " + D(e.initial.song.bpm) + " BPM", 1),
				H("div", cc, [
					r[3] ||= H("strong", null, "Динамика:", -1),
					U(" " + D(e.initial.song.advice), 1),
					r[4] ||= H("br", null, null, -1),
					r[5] ||= H("strong", null, "Звучание:", -1),
					U(" " + D(e.initial.song.arrangement), 1)
				]),
				H("div", lc, [(B(!0), V(z, null, R(e.initial.song.sections, (e, t) => (B(), V("div", {
					key: t,
					class: "saved-item"
				}, [
					H("div", uc, [H("h3", null, D(t + 1) + ". [" + D(e.tag) + "]", 1), H("span", dc, D(e.bars) + " тактов", 1)]),
					H("p", null, [r[6] ||= H("strong", null, "Аранжировка:", -1), U(" " + D(e.music), 1)]),
					H("p", null, [r[7] ||= H("strong", null, "Текст:", -1), U(" " + D(e.lyrics), 1)])
				]))), 128))]),
				H("div", fc, [H("button", {
					class: "btn primary small",
					"data-action": "song-copy",
					"data-id": e.initial.song.id
				}, [H("span", {
					innerHTML: e.initial.icons.copy,
					"aria-hidden": "true",
					style: { display: "contents" }
				}, null, 8, mc), r[8] ||= U(" Копировать план", -1)], 8, pc), H("button", {
					class: "btn ghost small",
					"data-action": "song-save",
					"data-id": e.initial.song.id
				}, [H("span", {
					innerHTML: e.initial.icons.saved,
					"aria-hidden": "true",
					style: { display: "contents" }
				}, null, 8, gc), r[9] ||= U(" Сохранить", -1)], 8, hc)])
			])) : W("", !0)
		], 64));
	}
};
// src/vue/legacy/observeLegacyIslands.js
function vc({ root: e, islands: t, subscribe: n, beforeSync: r, createObserver: i = (e) => new MutationObserver(e) }) {
	if (!e || !Array.isArray(t) || !t.length || t.some((e) => !e || typeof e.key != "string" || !e.key || typeof e.selectTarget != "function" || typeof e.readSnapshot != "function" || typeof e.mount != "function") || new Set(t.map((e) => e.key)).size !== t.length) return () => {};
	if (rs({
		root: e,
		...t[0]
	})) {
		for (let n of t.slice(1)) rs({
			root: e,
			...n
		});
		return () => {};
	}
	let a = /* @__PURE__ */ new Map(), o = !1;
	function s() {
		if (!o) {
			typeof r == "function" && r();
			for (let n of t) {
				let t = is(n.selectTarget(e)), r = a.get(n.key), i = typeof n.readRevision == "function" ? n.readRevision() : void 0;
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
// src/vue/workspace/legacyWorkspaceBridge.js
var yc = [
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
function bc({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_WORKSPACE_UI, n = document.getElementById("app");
	return !t || !n ? () => {} : vc({
		root: n,
		islands: yc.map((n) => ({
			key: n,
			selectTarget: (e) => e.querySelector(`[data-sb-workspace="${n}"]`),
			readSnapshot: () => t.snapshot(n),
			mount: (r, i) => {
				let a = e(r, n.startsWith("notice-") ? As : n === "blueprint" ? _c : Zs, {
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
var xc = { class: "sb-ap-dialog-title" }, Sc = { class: "sb-ap-profile-hero" }, Cc = { class: "sb-ap-profile-logo" }, wc = { class: "sb-ap-overline" }, Tc = { id: "sb-ap-dialog-heading" }, Ec = { class: "sb-ap-profile-fields" }, Dc = { class: "sb-ap-profile-section" }, Oc = { class: "sb-ap-profile-section" }, kc = {
	key: 0,
	class: "sb-ap-fine"
}, Ac = { class: "sb-ap-profile-section" }, jc = {
	key: 0,
	class: "sb-ap-pills"
}, Mc = {
	key: 1,
	class: "sb-ap-muted"
}, Nc = {
	key: 2,
	class: "sb-ap-fine"
}, Pc = { class: "sb-ap-profile-section" }, Fc = {
	key: 0,
	class: "sb-ap-songs"
}, Ic = {
	key: 1,
	class: "sb-ap-muted"
}, Lc = { class: "sb-ap-profile-section" }, Rc = {
	key: 0,
	class: "sb-ap-related"
}, zc = ["data-genre", "onClick"], Bc = {
	key: 1,
	class: "sb-ap-muted"
}, Vc = { class: "sb-ap-profile-buttons" }, Hc = ["data-name", "aria-pressed"], Uc = ["data-name"], Wc = {
	__name: "ArtistProfileDialog",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ N(t.api.profileSnapshot()), r = /* @__PURE__ */ M(null), i = () => On(() => r.value?.focus()), a = t.api.subscribe(() => {
			let e = n.value?.key;
			n.value = t.api.profileSnapshot(), n.value && e !== n.value.key && i();
		});
		return L(i), Cr(a), (t, i) => n.value ? (B(), V(z, { key: 0 }, [
			H("div", xc, [i[3] ||= H("span", null, "🎙️ Профиль исполнителя", -1), H("button", {
				ref_key: "close",
				ref: r,
				type: "button",
				"data-sb-ap-action": "close",
				class: "sb-ap-close",
				"aria-label": "Закрыть профиль",
				onClick: i[0] ||= J((t) => e.api.closeProfile(), ["stop"])
			}, "×", 512)]),
			H("div", Sc, [H("div", Cc, D(n.value.initials), 1), H("div", null, [
				H("span", wc, D(n.value.scene), 1),
				H("h2", Tc, D(n.value.name), 1),
				H("p", null, D(n.value.editorial ? "Редакционная справка SUNOBOOM" : "Сведения из карточек Академии"), 1)
			])]),
			H("div", Ec, [
				H("section", null, [H("small", null, D(n.value.exactYears ? "Годы активности" : "Период в подборке"), 1), H("strong", null, D(n.value.period), 1)]),
				H("section", null, [i[4] ||= H("small", null, "Направлений в Академии", -1), H("strong", null, D(n.value.genres.length), 1)]),
				H("section", null, [i[5] ||= H("small", null, "Ориентиры для прослушивания", -1), H("strong", null, D(n.value.songs.length), 1)])
			]),
			H("div", Dc, [i[6] ||= H("h3", null, "Биография и творческий путь", -1), H("p", null, D(n.value.biography), 1)]),
			H("div", Oc, [
				i[7] ||= H("h3", null, "Особенности звучания", -1),
				H("p", null, D(n.value.sound), 1),
				n.value.editorial ? W("", !0) : (B(), V("p", kc, "Описание относится к музыкальному направлению и не является подтверждённым персональным анализом артиста."))
			]),
			H("div", Ac, [
				H("h3", null, D(n.value.editorial ? "Музыкальные влияния и стилистика" : "Истоки музыкального направления"), 1),
				n.value.roots.length ? (B(), V("div", jc, [(B(!0), V(z, null, R(n.value.roots, (e) => (B(), V("span", { key: e }, D(e), 1))), 128))])) : (B(), V("p", Mc, "Персональные музыкальные влияния ещё не документированы в этой карточке.")),
				!n.value.editorial && n.value.roots.length ? (B(), V("p", Nc, "Это контекст жанра, а не утверждение о личных влияниях музыканта.")) : W("", !0)
			]),
			H("div", Pc, [i[8] ||= H("h3", null, "Произведения для знакомства", -1), n.value.songs.length ? (B(), V("ul", Fc, [(B(!0), V(z, null, R(n.value.songs.slice(0, 10), (e) => (B(), V("li", { key: e }, "♫ " + D(e), 1))), 128))])) : (B(), V("p", Ic, "Список произведений пока не заполнен."))]),
			H("div", Lc, [i[9] ||= H("h3", null, "Жанры и связанные подборки", -1), n.value.genres.length ? (B(), V("div", Rc, [(B(!0), V(z, null, R(n.value.genres.slice(0, 15), (t) => (B(), V("button", {
				key: t.id,
				type: "button",
				"data-sb-ap-action": "genre",
				"data-genre": t.id,
				onClick: J((n) => e.api.openGenre(t.id), ["stop"])
			}, D(t.name) + " →", 9, zc))), 128))])) : (B(), V("p", Bc, "Жанровые ссылки пока не добавлены."))]),
			H("div", Vc, [H("button", {
				type: "button",
				"data-sb-ap-action": "favorite",
				"data-name": n.value.name,
				"aria-pressed": n.value.favorite,
				class: "sb-ap-fav-main",
				onClick: i[1] ||= J((t) => e.api.toggleFavorite(n.value.name), ["stop"])
			}, D(n.value.favorite ? "★ В избранном" : "☆ Сохранить в избранное"), 9, Hc), H("button", {
				type: "button",
				"data-sb-ap-action": "copy",
				"data-name": n.value.name,
				class: "sb-ap-copy",
				onClick: i[2] ||= J((t) => e.api.copy(n.value.name), ["stop"])
			}, "Скопировать справку", 8, Uc)]),
			i[10] ||= H("p", { class: "sb-ap-fine" }, "Профиль не связан с отдельной функцией «ДНК артиста». Это справочный материал Академии, не личный творческий проект пользователя.", -1)
		], 64)) : W("", !0);
	}
};
// src/vue/academy/legacyArtistProfilesBridge.js
function Gc({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_ARTIST_PROFILES;
	return t?.profileSnapshot ? Y({
		root: document.body,
		selectTarget: (e) => e.querySelector("#sb-ap-dialog-body"),
		readSnapshot: () => t.profileSnapshot(),
		subscribe: (e) => t.subscribe(e),
		mount: (n) => e(n, Wc, { api: t })
	}) : () => {};
}
// src/vue/account/SharedSongPage.vue
var Kc = { class: "sbsong-hero" }, qc = {
	key: 0,
	class: "sbsong-public-card"
}, Jc = ["src"], Yc = {
	key: 1,
	class: "sbsong-public-art"
}, Xc = { class: "sbsong-detail-tags" }, Zc = { key: 0 }, Qc = { key: 1 }, $c = {
	key: 2,
	class: "sbsong-detail-description"
}, el = ["src"], tl = { key: 4 }, nl = ["href"], rl = {
	key: 5,
	class: "sbsong-public-notice"
}, il = {
	key: 1,
	class: "sbsong-empty"
}, al = {
	__name: "SharedSongPage",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = /* @__PURE__ */ M(null);
		return Sr(() => {
			t.value && (t.value.pause(), t.value.removeAttribute("src"), t.value.load());
		}), (n, r) => (B(), V(z, null, [
			H("header", Kc, [
				r[0] ||= H("span", { class: "sbsong-eyebrow" }, "SUNOBOOM · КАРТОЧКА ПЕСНИ", -1),
				H("h1", null, D(e.model.song?.title || "Карточка недоступна"), 1),
				H("p", null, D(e.model.song?.artist || ""), 1)
			]),
			e.model.song ? (B(), V("div", qc, [
				e.model.song.coverUrl ? (B(), V("img", {
					key: 0,
					class: "sbsong-public-art",
					style: {
						"object-fit": "cover",
						width: "100%",
						"max-width": "300px"
					},
					alt: "Обложка",
					src: e.model.song.coverUrl
				}, null, 8, Jc)) : (B(), V("div", Yc, "♫")),
				H("p", Xc, [e.model.song.genre ? (B(), V("span", Zc, D(e.model.song.genre), 1)) : W("", !0), e.model.song.album ? (B(), V("span", Qc, D(e.model.song.album), 1)) : W("", !0)]),
				e.model.song.description ? (B(), V("p", $c, D(e.model.song.description), 1)) : W("", !0),
				e.model.song.audioUrl ? (B(), V("audio", {
					key: 3,
					ref_key: "audio",
					ref: t,
					controls: "",
					preload: "metadata",
					src: e.model.song.audioUrl
				}, null, 8, el)) : W("", !0),
				e.model.song.listenUrl ? (B(), V("p", tl, [H("a", {
					href: e.model.song.listenUrl,
					target: "_blank",
					rel: "noopener noreferrer"
				}, "Послушать песню на внешнем сайте ↗", 8, nl)])) : W("", !0),
				!e.model.song.audioUrl && !e.model.song.listenUrl ? (B(), V("p", rl, "В этой ссылке есть информация о песне, но нет аудиозаписи. Автор может отправить MP3 отдельно.")) : W("", !0)
			])) : (B(), V("p", il, "Ссылка повреждена или карточка не найдена.")),
			r[1] ||= H("button", {
				type: "button",
				class: "sbsong-main-btn",
				"data-sbsong-action": "shared-home"
			}, "Открыть SUNOBOOM", -1),
			r[2] ||= H("p", { class: "sbsong-public-notice" }, "Ссылка открывает выбранные автором сведения. Карточка не требует входа, поэтому её сможет посмотреть любой получатель ссылки.", -1)
		], 64));
	}
};
// src/vue/account/legacySharedSongBridge.js
function ol({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SHARED_SONG, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sbsong-shared"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, al, { model: n })
	});
}
// src/vue/ideas/IdeasPage.vue
var sl = { class: "generator-panel" }, cl = { class: "generator-form" }, ll = ["for"], ul = [
	"id",
	"onUpdate:modelValue",
	"data-idea-generator"
], dl = ["value"], fl = { class: "field generator-detail-field" }, pl = { class: "generator-bar" }, ml = {
	type: "button",
	class: "btn primary",
	"data-action": "generate-ideas"
}, hl = ["innerHTML"], gl = {
	id: "generated-results",
	class: "section-title"
}, _l = {
	type: "button",
	class: "btn ghost small",
	"data-action": "generate-ideas"
}, vl = ["innerHTML"], yl = { class: "idea-grid" }, bl = { class: "idea-badge" }, xl = { class: "generator-story" }, Sl = { class: "generator-hook" }, Cl = {
	key: 0,
	class: "generator-detail"
}, wl = { class: "actions" }, Tl = ["data-id"], El = ["innerHTML"], Dl = ["data-id"], Ol = ["innerHTML"], kl = ["data-id"], Al = ["innerHTML"], jl = { class: "section-title" }, Ml = { class: "filters" }, Nl = ["data-filter"], Pl = { class: "section-title" }, Fl = { class: "idea-grid" }, Il = { class: "idea-badge" }, Ll = { class: "actions" }, Rl = ["data-id", "data-i"], zl = ["innerHTML"], Bl = ["data-id", "data-i"], Vl = ["innerHTML"], Hl = {
	__name: "IdeasPage",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = /* @__PURE__ */ k({ ...e.initial.values });
		return (n, r) => (B(), V(z, null, [
			r[12] ||= H("header", { class: "heading" }, [H("h1", null, [U("Идеи песен "), H("span", { style: { color: "#fb7bbd" } }, "✦")]), H("p", null, "Создавай новые истории в генераторе или выбирай готовые идеи из каталога.")], -1),
			H("section", sl, [
				r[5] ||= H("div", { class: "generator-panel-top" }, [H("div", null, [
					H("div", { class: "eyebrow" }, "SUNOBOOM · IDEA LAB"),
					H("h2", null, [U("Создай новую идею "), H("span", null, "✦")]),
					H("p", null, "Подбери жанр, тему, настроение и сюжетную подачу. Получи несколько свежих концепций с названием, историей и хуком припева.")
				]), H("span", { class: "generator-orb" }, "💡")], -1),
				H("div", cl, [(B(!0), V(z, null, R(e.initial.fields, (e) => (B(), V("div", {
					key: e.key,
					class: "field"
				}, [H("label", { for: e.id }, D(e.label), 9, ll), F(H("select", {
					id: e.id,
					"onUpdate:modelValue": (n) => t[e.key] = n,
					"data-idea-generator": e.key
				}, [(B(!0), V(z, null, R(e.options, (e) => (B(), V("option", {
					key: e.value,
					value: e.value
				}, D(e.label), 9, dl))), 128))], 8, ul), [[q, t[e.key]]])]))), 128)), H("div", fl, [r[1] ||= H("label", { for: "gen-detail" }, "Своя деталь (необязательно)", -1), F(H("input", {
					id: "gen-detail",
					"onUpdate:modelValue": r[0] ||= (e) => t.detail = e,
					"data-idea-generator": "detail",
					maxlength: "220",
					placeholder: "Например: ночной Алматы, поезд, летний дождь"
				}, null, 512), [[K, t.detail]])])]),
				H("div", pl, [
					H("button", ml, [H("span", {
						style: { display: "contents" },
						"aria-hidden": "true",
						innerHTML: e.initial.icons.ideas
					}, null, 8, hl), r[2] ||= U(" Сгенерировать идеи", -1)]),
					r[3] ||= H("button", {
						type: "button",
						class: "btn ghost",
						"data-action": "surprise-ideas"
					}, "🎲 Удиви меня", -1),
					r[4] ||= H("span", { class: "generator-note" }, "Работает офлайн · без внешнего ИИ", -1)
				])
			]),
			e.initial.generated.length ? (B(), V(z, { key: 0 }, [H("div", gl, [H("h2", null, "Твои новые идеи · " + D(e.initial.generated.length), 1), H("button", _l, [H("span", {
				style: { display: "contents" },
				"aria-hidden": "true",
				innerHTML: e.initial.icons.arrow
			}, null, 8, vl), r[6] ||= U(" Ещё варианты", -1)])]), H("div", yl, [(B(!0), V(z, null, R(e.initial.generated, (t) => (B(), V("article", {
				key: t.id,
				class: "idea generated-card"
			}, [
				H("div", bl, D(t.badge), 1),
				H("h3", null, D(t.title), 1),
				H("p", null, D(t.pitch), 1),
				H("p", xl, D(t.storyLine), 1),
				H("div", Sl, [r[7] ||= H("span", null, "ХУК ПРИПЕВА", -1), H("strong", null, D(t.hook), 1)]),
				t.detail ? (B(), V("p", Cl, "Твоя деталь: " + D(t.detail), 1)) : W("", !0),
				H("div", wl, [
					H("button", {
						type: "button",
						class: "btn primary small",
						"data-action": "generated-use",
						"data-id": t.id
					}, [H("span", {
						style: { display: "contents" },
						"aria-hidden": "true",
						innerHTML: e.initial.icons.studio
					}, null, 8, El), r[8] ||= U(" В Suno Studio", -1)], 8, Tl),
					H("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "generated-copy",
						"data-id": t.id
					}, [H("span", {
						style: { display: "contents" },
						"aria-hidden": "true",
						innerHTML: e.initial.icons.copy
					}, null, 8, Ol), r[9] ||= U(" Копировать", -1)], 8, Dl),
					H("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "generated-save",
						"data-id": t.id
					}, [H("span", {
						style: { display: "contents" },
						"aria-hidden": "true",
						innerHTML: e.initial.icons.heart
					}, null, 8, Al), U(" " + D(t.saved ? "Сохранено" : "Сохранить"), 1)], 8, kl)
				])
			]))), 128))])], 64)) : W("", !0),
			H("div", jl, [H("h2", null, "Библиотека готовых сюжетов · " + D(e.initial.catalog.length), 1)]),
			H("div", Ml, [(B(!0), V(z, null, R(e.initial.families, (t) => (B(), V("button", {
				key: t,
				type: "button",
				class: E(["filter", { on: e.initial.family === t }]),
				"data-action": "idea-filter",
				"data-filter": t
			}, D(t), 11, Nl))), 128))]),
			H("div", Pl, [H("h2", null, "Идеи · " + D(e.initial.catalog.length), 1), r[10] ||= H("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "random-idea"
			}, "🎲 Случайная идея", -1)]),
			H("div", Fl, [(B(!0), V(z, null, R(e.initial.catalog, (t) => (B(), V("div", {
				key: t.key,
				class: "idea"
			}, [
				H("div", Il, D(t.badge), 1),
				H("h3", null, D(t.title), 1),
				H("p", null, D(t.pitch), 1),
				H("div", Ll, [H("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "idea-use",
					"data-id": t.genre,
					"data-i": t.index
				}, [H("span", {
					style: { display: "contents" },
					"aria-hidden": "true",
					innerHTML: e.initial.icons.studio
				}, null, 8, zl), r[11] ||= U(" В студию", -1)], 8, Rl), H("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "idea-save",
					"data-id": t.genre,
					"data-i": t.index
				}, [H("span", {
					style: { display: "contents" },
					"aria-hidden": "true",
					innerHTML: e.initial.icons.heart
				}, null, 8, Vl), U(" " + D(t.saved ? "Сохранено" : "Сохранить"), 1)], 8, Bl)])
			]))), 128))])
		], 64));
	}
};
// src/vue/ideas/legacyIdeasPageBridge.js
function Ul({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_IDEAS_PAGE, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-ideas-page"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, Hl, { initial: n })
	});
}
// src/vue/account/AccountSummary.vue
var Wl = { class: "account-avatar" }, Gl = { class: "stat" }, Kl = { class: "stat" }, ql = { class: "stat" }, Jl = {
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
		return (t, n) => e.kind === "profile" ? (B(), V(z, { key: 0 }, [H("div", Wl, D(e.model.avatar), 1), H("div", null, [
			H("h2", null, D(e.model.name), 1),
			n[0] ||= H("p", null, "Локальный профиль · SUNOBOOM 0.55", -1),
			n[1] ||= H("span", { class: "small-chip" }, "Данные хранятся в этом браузере", -1)
		])], 64)) : (B(), V(z, { key: 1 }, [
			H("div", Gl, [H("div", null, [H("strong", null, D(e.model.counts.projects), 1), n[2] ||= H("span", null, "моих проектов", -1)])]),
			H("div", Kl, [H("div", null, [H("strong", null, D(e.model.counts.favorites), 1), n[3] ||= H("span", null, "любимых жанров", -1)])]),
			H("div", ql, [H("div", null, [H("strong", null, D(e.model.counts.saved), 1), n[4] ||= H("span", null, "сохранённых идей и промптов", -1)])])
		], 64));
	}
}, Yl = {
	id: "sb-vue-account-profile",
	class: "account-head panel"
}, Xl = { class: "account-grid" }, Zl = { class: "two-col account-settings" }, Ql = { class: "panel" }, $l = { class: "field" }, eu = {
	type: "button",
	class: "btn primary",
	"data-action": "save-profile"
}, tu = ["innerHTML"], nu = { class: "panel" }, ru = { class: "detail-actions" }, iu = {
	type: "button",
	class: "btn ghost",
	"data-action": "export"
}, au = ["innerHTML"], ou = {
	type: "button",
	class: "btn ghost",
	"data-action": "import"
}, su = ["innerHTML"], cu = {
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
		let t = e, n = /* @__PURE__ */ k({ name: t.initial.profileName }), r = /* @__PURE__ */ M(null), i = () => t.api.syncStats(r.value);
		return L(i), (t, a) => (B(), V(z, null, [
			a[10] ||= H("header", { class: "heading" }, [
				H("div", { class: "eyebrow" }, "ЛИЧНОЕ ПРОСТРАНСТВО"),
				H("h1", null, "Личный кабинет"),
				H("p", null, "Твои музыкальные проекты, избранные материалы и резервные копии — всё в одном месте.")
			], -1),
			H("div", Yl, [ca(Jl, {
				model: e.initial.summary,
				kind: "profile"
			}, null, 8, ["model"])]),
			H("div", {
				id: "sb-vue-account-stats",
				ref_key: "stats",
				ref: r,
				class: "account-stats",
				onScrollPassive: i
			}, [ca(Jl, {
				model: e.initial.summary,
				kind: "stats"
			}, null, 8, ["model"])], 544),
			H("div", Xl, [(B(!0), V(z, null, R(e.initial.tiles, (e) => (B(), V("button", ga({ key: e.key }, { ref_for: !0 }, e.attrs), [(B(!0), V(z, null, R(e.parts, (e, t) => (B(), V(z, { key: t }, [e.icon ? (B(), ra(Ar(e.tag), ga({
				key: 0,
				ref_for: !0
			}, e.attrs, { innerHTML: e.html }), null, 16, ["innerHTML"])) : (B(), ra(Ar(e.tag), ga({
				key: 1,
				ref_for: !0
			}, e.attrs), {
				default: Hn(() => [U(D(e.text), 1)]),
				_: 2
			}, 1040))], 64))), 128))], 16))), 128))]),
			H("div", Zl, [H("div", Ql, [
				a[3] ||= H("h3", null, "👤 Настройки профиля", -1),
				a[4] ||= H("p", null, "Это отображаемое имя только для этого устройства, без регистрации и пароля.", -1),
				H("div", $l, [a[1] ||= H("label", { for: "profile-name" }, "Имя в кабинете", -1), F(H("input", {
					id: "profile-name",
					"onUpdate:modelValue": a[0] ||= (e) => n.name = e,
					type: "text",
					maxlength: "60",
					autocomplete: "off",
					placeholder: "Как тебя называть?"
				}, null, 512), [[K, n.name]])]),
				H("button", eu, [H("span", {
					style: { display: "contents" },
					"aria-hidden": "true",
					innerHTML: e.initial.icons.check
				}, null, 8, tu), a[2] ||= U(" Сохранить имя", -1)])
			]), H("div", nu, [
				a[8] ||= H("h3", null, "💾 Резервная копия", -1),
				a[9] ||= H("p", null, "Сохраняй проекты и избранное в JSON-файл или восстанавливай данные из ранее созданной копии.", -1),
				H("div", ru, [
					H("button", iu, [H("span", {
						style: { display: "contents" },
						"aria-hidden": "true",
						innerHTML: e.initial.icons.download
					}, null, 8, au), a[5] ||= U(" Экспорт данных", -1)]),
					H("button", ou, [H("span", {
						style: { display: "contents" },
						"aria-hidden": "true",
						innerHTML: e.initial.icons.plus
					}, null, 8, su), a[6] ||= U(" Импорт данных", -1)]),
					a[7] ||= H("input", {
						id: "import-file",
						type: "file",
						accept: ".json,application/json",
						style: { display: "none" }
					}, null, -1)
				])
			])]),
			a[11] ||= H("div", { class: "account-notice" }, "🔒 Этот кабинет пока не является защищённой учётной записью. Данные сохраняются локально в браузере и не синхронизируются между устройствами. Адрес сайта GitHub Pages остаётся публичным.", -1)
		], 64));
	}
};
// src/vue/account/account-home-model.js
function lu(e) {
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
function uu({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ACCOUNT_HOME, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-account-home"),
		readSnapshot: (e) => {
			let n = t.snapshot(), r = lu(e);
			return n && r ? {
				...n,
				tiles: r
			} : null;
		},
		mount: (n, r) => e(n, cu, {
			initial: r,
			api: t
		})
	});
}
// src/vue/account/legacyAccountSummaryBridge.js
function du({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ACCOUNT_SUMMARY, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : vc({
		root: n,
		islands: [["profile", "sb-vue-account-profile"], ["stats", "sb-vue-account-stats"]].map(([n, r]) => ({
			key: n,
			selectTarget: (e) => {
				let t = e.querySelector("#" + r);
				return t?.closest("#sb-vue-account-home") ? null : t;
			},
			readSnapshot: () => t.snapshot(),
			mount: (t, r) => e(t, Jl, {
				model: r,
				kind: n
			})
		}))
	});
}
// src/vue/account/EventActions.vue
var fu = {
	type: "button",
	class: "btn primary",
	"data-action": "event-save"
}, pu = {
	key: 0,
	type: "button",
	class: "btn ghost",
	"data-action": "event-cancel"
}, mu = {
	__name: "EventActions",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (B(), V(z, null, [H("button", fu, D(e.model.editing ? "Сохранить изменения" : "Сохранить событие"), 1), e.model.editing ? (B(), V("button", pu, "Отменить")) : W("", !0)], 64));
	}
};
// src/vue/account/legacyEventActionsBridge.js
function hu({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_EVENT_ACTIONS, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-event-actions"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, mu, { model: n })
	});
}
// src/vue/account/EventReminders.vue
var gu = { class: "sb-reminder-picker" }, _u = { class: "sb-reminder-choices" }, vu = ["value"], yu = { class: "sb-reminder-custom-label" }, bu = ["hidden"], xu = {
	__name: "EventReminders",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ k({
			...t.initial.values,
			selected: [...t.initial.values.selected]
		});
		return (t, r) => (B(), V("fieldset", gu, [
			r[7] ||= H("legend", null, "🔔 Когда напомнить?", -1),
			r[8] ||= H("p", { class: "sb-reminder-help" }, "Выбери один или несколько сроков. Убери все галочки, чтобы отключить уведомления.", -1),
			H("div", _u, [(B(!0), V(z, null, R(e.initial.presets, (e) => (B(), V("label", {
				key: e.days,
				class: "sb-reminder-choice"
			}, [
				F(H("input", {
					"onUpdate:modelValue": r[0] ||= (e) => n.selected = e,
					type: "checkbox",
					name: "event-reminder-preset",
					value: e.days
				}, null, 8, vu), [[Io, n.selected]]),
				r[3] ||= U(),
				H("span", null, D(e.label), 1)
			]))), 128))]),
			H("label", yu, [F(H("input", {
				id: "event-reminder-custom",
				"onUpdate:modelValue": r[1] ||= (e) => n.custom = e,
				type: "checkbox"
			}, null, 512), [[Io, n.custom]]), r[4] ||= U(" Свой срок до события", -1)]),
			H("div", {
				id: "event-reminder-custom-wrap",
				class: "sb-reminder-custom-input",
				hidden: !n.custom
			}, [
				r[5] ||= H("label", { for: "event-reminder-custom-days" }, "За сколько дней?", -1),
				F(H("input", {
					id: "event-reminder-custom-days",
					"onUpdate:modelValue": r[2] ||= (e) => n.customDays = e,
					type: "number",
					min: "1",
					max: "365",
					step: "1",
					inputmode: "numeric"
				}, null, 512), [[K, n.customDays]]),
				r[6] ||= H("span", null, "дней до события", -1)
			], 8, bu)
		]));
	}
};
// src/vue/account/legacyEventRemindersBridge.js
function Su({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_EVENT_REMINDERS, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-event-reminders"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, xu, { initial: n })
	});
}
// src/vue/account/EventEditor.vue
var Cu = { class: "field" }, wu = { class: "dash-event-fields" }, Tu = { class: "field" }, Eu = { class: "field" }, Du = { class: "field" }, Ou = ["value"], ku = { class: "field" }, Au = {
	__name: "EventEditor",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = /* @__PURE__ */ k({ ...e.initial.values });
		return (n, r) => (B(), V(z, null, [
			H("h2", null, D(e.initial.editing ? "Редактирование события" : "Добавить событие"), 1),
			H("div", Cu, [r[5] ||= H("label", { for: "event-title" }, "Название события", -1), F(H("input", {
				id: "event-title",
				"onUpdate:modelValue": r[0] ||= (e) => t.title = e,
				type: "text",
				maxlength: "120",
				placeholder: "Например, релиз нового EP"
			}, null, 512), [[K, t.title]])]),
			H("div", wu, [
				H("div", Tu, [r[6] ||= H("label", { for: "event-date" }, "Дата", -1), F(H("input", {
					id: "event-date",
					"onUpdate:modelValue": r[1] ||= (e) => t.date = e,
					type: "date"
				}, null, 512), [[K, t.date]])]),
				H("div", Eu, [r[7] ||= H("label", { for: "event-time" }, "Время (необязательно)", -1), F(H("input", {
					id: "event-time",
					"onUpdate:modelValue": r[2] ||= (e) => t.time = e,
					type: "time"
				}, null, 512), [[K, t.time]])]),
				H("div", Du, [r[8] ||= H("label", { for: "event-type" }, "Тип события", -1), F(H("select", {
					id: "event-type",
					"onUpdate:modelValue": r[3] ||= (e) => t.type = e
				}, [(B(!0), V(z, null, R(e.initial.types, (e) => (B(), V("option", {
					key: e.id,
					value: e.id
				}, D(e.label), 9, Ou))), 128))], 512), [[q, t.type]])])
			]),
			H("div", ku, [r[9] ||= H("label", { for: "event-notes" }, "Описание (необязательно)", -1), F(H("textarea", {
				id: "event-notes",
				"onUpdate:modelValue": r[4] ||= (e) => t.notes = e,
				rows: "3",
				maxlength: "1200",
				placeholder: "Детали, место или заметки"
			}, null, 512), [[K, t.notes]])])
		], 64));
	}
};
// src/vue/account/legacyEventEditorBridge.js
function ju({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_EVENT_EDITOR, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-event-fields"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, Au, { initial: n })
	});
}
// src/vue/account/EventCollection.vue
var Mu = { class: "section-title" }, Nu = {
	key: 0,
	class: "dash-event-list"
}, Pu = { class: "dash-event-date" }, Fu = { class: "dash-event-main" }, Iu = { class: "dash-entry-meta" }, Lu = { key: 0 }, Ru = { class: "sb-event-reminder-summary" }, zu = { class: "dash-event-controls" }, Bu = ["data-id"], Vu = ["data-id"], Hu = {
	key: 1,
	class: "dash-simple-empty"
}, Uu = {
	__name: "EventCollection",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (B(!0), V(z, null, R(e.model.groups, (e) => (B(), V(z, { key: e.key }, [H("div", Mu, [H("h2", null, D(e.title) + " (" + D(e.items.length) + ")", 1)]), e.items.length ? (B(), V("div", Nu, [(B(!0), V(z, null, R(e.items, (e) => (B(), V("article", {
			key: e.id,
			class: "dash-event-row"
		}, [
			H("div", Pu, [H("strong", null, D(e.date), 1), H("span", null, D(e.time), 1)]),
			H("div", Fu, [
				H("div", Iu, D(e.type), 1),
				H("h3", null, D(e.title), 1),
				e.notes ? (B(), V("p", Lu, D(e.notes), 1)) : W("", !0),
				H("div", Ru, D(e.reminder), 1)
			]),
			H("div", zu, [H("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "event-edit",
				"data-id": e.id
			}, "Изменить", 8, Bu), H("button", {
				type: "button",
				class: "btn danger small",
				"data-action": "event-delete",
				"data-id": e.id
			}, "Удалить", 8, Vu)])
		]))), 128))])) : (B(), V("div", Hu, D(e.empty), 1))], 64))), 128));
	}
};
// src/vue/account/legacyEventCollectionBridge.js
function Wu({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_EVENT_LIST, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-events-list"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, Uu, { model: n })
	});
}
// src/vue/account/ProjectDetail.vue
var Gu = { class: "field" }, Ku = { class: "detail-actions" }, qu = ["data-id"], Ju = ["innerHTML"], Yu = ["data-id"], Xu = ["innerHTML"], Zu = ["data-id"], Qu = ["innerHTML"], $u = {
	key: 1,
	class: "empty"
}, ed = {
	__name: "ProjectDetail",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = /* @__PURE__ */ M(e.initial.project?.notes ?? "");
		return (n, r) => e.initial.project ? (B(), V(z, { key: 0 }, [
			r[5] ||= H("div", { class: "eyebrow" }, "Рабочая карточка", -1),
			H("h3", null, D(e.initial.project.title), 1),
			H("p", null, D(e.initial.project.genreName) + " · создан " + D(e.initial.project.date), 1),
			H("div", Gu, [r[1] ||= H("label", { for: "project-notes" }, "Заметки, треклист, идеи и задачи", -1), F(H("textarea", {
				id: "project-notes",
				"onUpdate:modelValue": r[0] ||= (e) => t.value = e,
				rows: "12"
			}, null, 512), [[K, t.value]])]),
			H("div", Ku, [
				H("button", {
					type: "button",
					class: "btn primary",
					"data-action": "save-project",
					"data-id": e.initial.project.id
				}, [H("span", {
					style: { display: "contents" },
					"aria-hidden": "true",
					innerHTML: e.initial.icons.check
				}, null, 8, Ju), r[2] ||= U(" Сохранить заметки", -1)], 8, qu),
				H("button", {
					type: "button",
					class: "btn ghost",
					"data-action": "use-genre",
					"data-id": e.initial.project.genre
				}, [H("span", {
					style: { display: "contents" },
					"aria-hidden": "true",
					innerHTML: e.initial.icons.studio
				}, null, 8, Xu), r[3] ||= U(" В студию", -1)], 8, Yu),
				H("button", {
					type: "button",
					class: "btn danger",
					"data-action": "delete-project",
					"data-id": e.initial.project.id
				}, [H("span", {
					style: { display: "contents" },
					"aria-hidden": "true",
					innerHTML: e.initial.icons.trash
				}, null, 8, Qu), r[4] ||= U(" Удалить", -1)], 8, Zu)
			])
		], 64)) : (B(), V("div", $u, [...r[6] ||= [H("strong", null, "Начни со своего проекта", -1), U("Здесь появятся заметки и рабочая карточка выбранного проекта.", -1)]]));
	}
};
// src/vue/account/legacyProjectDetailBridge.js
function td({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PROJECT_DETAIL, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-project-detail"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, ed, { initial: n })
	});
}
// src/vue/account/ProjectCreator.vue
var nd = { class: "field" }, rd = { class: "field" }, id = ["value"], ad = {
	type: "button",
	class: "btn primary",
	"data-action": "create-project"
}, od = ["innerHTML"], sd = {
	__name: "ProjectCreator",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = /* @__PURE__ */ k({ ...e.initial.values });
		return (n, r) => (B(), V(z, null, [
			r[5] ||= H("h3", null, "Новый проект", -1),
			H("div", nd, [r[2] ||= H("label", { for: "p-title" }, "Название", -1), F(H("input", {
				id: "p-title",
				"onUpdate:modelValue": r[0] ||= (e) => t.title = e,
				placeholder: "Например, дебютный EP"
			}, null, 512), [[K, t.title]])]),
			H("div", rd, [r[3] ||= H("label", { for: "p-genre" }, "Основной жанр", -1), F(H("select", {
				id: "p-genre",
				"onUpdate:modelValue": r[1] ||= (e) => t.genre = e
			}, [(B(!0), V(z, null, R(e.initial.genres, (e) => (B(), V("option", {
				key: e.id,
				value: e.id
			}, D(e.name), 9, id))), 128))], 512), [[q, t.genre]])]),
			H("button", ad, [H("span", {
				style: { display: "contents" },
				"aria-hidden": "true",
				innerHTML: e.initial.plusIcon
			}, null, 8, od), r[4] ||= U(" Создать проект", -1)])
		], 64));
	}
};
// src/vue/account/legacyProjectCreatorBridge.js
function cd({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PROJECT_CREATOR, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-project-creator"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, sd, { initial: n })
	});
}
// src/vue/account/ProjectCollection.vue
var ld = { class: "section-title" }, ud = ["data-id", "aria-pressed"], dd = {
	key: 1,
	class: "empty"
}, fd = ["innerHTML"], pd = {
	__name: "ProjectCollection",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (B(), V(z, null, [H("div", ld, [H("h2", null, "Мои проекты (" + D(e.model.items.length) + ")", 1)]), e.model.items.length ? (B(!0), V(z, { key: 0 }, R(e.model.items, (t) => (B(), V("div", {
			key: t.id,
			class: E(["project-card", { selected: t.id === e.model.selectedId }]),
			"data-action": "select-project",
			"data-id": t.id,
			role: "button",
			tabindex: "0",
			"aria-pressed": t.id === e.model.selectedId
		}, [H("h3", null, D(t.title), 1), H("p", null, D(t.genre) + " · " + D(t.date), 1)], 10, ud))), 128)) : (B(), V("div", dd, [
			H("span", {
				style: { display: "contents" },
				"aria-hidden": "true",
				innerHTML: e.model.musicIcon
			}, null, 8, fd),
			n[0] ||= H("strong", null, "Проектов пока нет", -1),
			n[1] ||= U("Создай первый проект выше.", -1)
		]))], 64));
	}
};
// src/vue/account/legacyProjectCollectionBridge.js
function md({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PROJECT_LIST, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-projects-list"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, pd, { model: n })
	});
}
// src/vue/legacy/createFeatureMounter.js
function hd({ createApp: e, host: t, pinia: n, router: r, resolveTarget: i, warn: a = (...e) => console.warn(...e) }) {
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
var gd = typeof window < "u", _d, vd = (e) => _d = e, yd = Symbol();
function bd(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var xd;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(xd ||= {});
var Sd = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function Cd(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function wd(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		kd(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function Td(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function Ed(e) {
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
var Dd = typeof navigator == "object" ? navigator : { userAgent: "" }, Od = /Macintosh/.test(Dd.userAgent) && /AppleWebKit/.test(Dd.userAgent) && !/Safari/.test(Dd.userAgent), kd = gd ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Od ? Ad : "msSaveOrOpenBlob" in Dd ? jd : Md : () => {};
function Ad(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? Ed(r) : Td(r.href) ? wd(e, t, n) : (r.target = "_blank", Ed(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		Ed(r);
	}, 0));
}
function jd(e, t = "download", n) {
	if (typeof e == "string") {
		if (Td(e)) wd(e, t, n);
		else {
			let t = document.createElement("a");
			t.href = e, t.target = "_blank", setTimeout(function() {
				Ed(t);
			});
		}
	} else navigator.msSaveOrOpenBlob(Cd(e, n), t);
}
function Md(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return wd(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(Sd.HTMLElement)) || "safari" in Sd, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || Od) && typeof FileReader < "u") {
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
var { assign: Nd } = Object;
function Pd() {
	let e = Me(!0), t = e.run(() => /* @__PURE__ */ M({})), n = [], r = [], i = Qt({
		install(e) {
			vd(i), i._a = e, e.provide(yd, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
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
var Fd = () => {};
function Id(e, t, n, r = Fd) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && Ne() && Pe(i), i;
}
function Ld(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var Rd = (e) => e(), zd = Symbol(), Bd = Symbol();
function Vd(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!t.hasOwnProperty(n)) continue;
		let r = t[n], i = e[n];
		e[n] = bd(i) && bd(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ j(r) && !/* @__PURE__ */ Jt(r) ? Vd(i, r) : r;
	}
	return e;
}
var Hd = Symbol();
function Ud(e) {
	return !bd(e) || !Object.prototype.hasOwnProperty.call(e, Hd);
}
var { assign: Wd } = Object;
function Gd(e) {
	return !!(/* @__PURE__ */ j(e) && e.effect);
}
function Kd(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || 
		/* istanbul ignore if */
		(n.state.value[e] = i ? i() : {}), Wd(/* @__PURE__ */ on(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = Qt(G(() => {
			vd(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return c = qd(e, l, t, n, r, !0), c;
}
function qd(e, t, n = {}, r, i, a) {
	let o, s = Wd({ actions: {} }, n), c = { deep: !0 }, l, u, d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p, m = r.state.value[e];
	!a && !m && 
	/* istanbul ignore if */
	(r.state.value[e] = {});
	let h;
	function g(t) {
		let n;
		l = u = !1, typeof t == "function" ? (t(r.state.value[e]), n = {
			type: xd.patchFunction,
			storeId: e,
			events: p
		}) : (Vd(r.state.value[e], t), n = {
			type: xd.patchObject,
			payload: t,
			storeId: e,
			events: p
		});
		let i = h = Symbol();
		On().then(() => {
			h === i && (l = !0);
		}), u = !0, Ld(d, n, r.state.value[e]);
	}
	let _ = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			Wd(e, t);
		});
	} : Fd;
	function v() {
		o.stop(), d.clear(), f.clear(), r._s.delete(e);
	}
	let y = (t, n = "") => {
		if (zd in t) return t[Bd] = n, t;
		let i = function() {
			vd(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			Ld(f, {
				args: n,
				name: i[Bd],
				store: b,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : b, n);
			} catch (e) {
				throw Ld(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (Ld(a, e), e)).catch((e) => (Ld(o, e), Promise.reject(e))) : (Ld(a, l), l);
		};
		return i[zd] = !0, i[Bd] = n, i;
	}, b = /* @__PURE__ */ k({
		_p: r,
		$id: e,
		$onAction: Id.bind(null, f),
		$patch: g,
		$reset: _,
		$subscribe(t, n = {}) {
			let i = Id(d, t, n.detached, () => a()), a = o.run(() => I(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? u : l) && t({
					storeId: e,
					type: xd.direct,
					events: p
				}, r);
			}, Wd({}, c, n)));
			return i;
		},
		$dispose: v
	});
	r._s.set(e, b);
	let x = (r._a && r._a.runWithContext || Rd)(() => r._e.run(() => (o = Me()).run(() => t({ action: y }))));
	for (let t in x) {
		let n = x[t];
		/* @__PURE__ */ j(n) && !Gd(n) || /* @__PURE__ */ Jt(n) ? a || (m && Ud(n) && (/* @__PURE__ */ j(n) ? n.value = m[t] : Vd(n, m[t])), r.state.value[e][t] = n) : typeof n == "function" && (x[t] = y(n, t), s.actions[t] = n);
	}
	return Wd(b, x), Wd(/* @__PURE__ */ A(b), x), Object.defineProperty(b, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			g((t) => {
				Wd(t, e);
			});
		}
	}), r._p.forEach((e) => {
		Wd(b, o.run(() => e({
			store: b,
			app: r._a,
			pinia: r,
			options: s
		})));
	}), m && a && n.hydrate && n.hydrate(b.$state, m), l = !0, u = !0, b;
}
function Jd(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function a(n, a) {
		let o = Kn();
		return n ||= o ? Gn(yd, null) : null, n && vd(n), n = _d, n._s.has(e) || (i ? qd(e, t, r, n) : Kd(e, r, n)), n._s.get(e);
	}
	return a.$id = e, a;
}
// src/vue/navigation/nav-model.js
var Yd = /* @__PURE__ */ new Set([
	"projects",
	"saved",
	"myideas",
	"myprompts",
	"events",
	"tracks",
	"artists"
]);
function Xd(e) {
	return e === "detail" ? "catalog" : Yd.has(e) ? "account" : e;
}
function Zd(e) {
	let t = Xd(e?.active), n = /* @__PURE__ */ new Set(), r = !1, i = [];
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
var Qd = typeof document < "u";
function $d(e) {
	return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function ef(e) {
	return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && $d(e.default);
}
var X = Object.assign;
function tf(e, t) {
	let n = {};
	for (let r in t) {
		let i = t[r];
		n[r] = rf(i) ? i.map(e) : e(i);
	}
	return n;
}
var nf = () => {}, rf = Array.isArray;
function af(e, t) {
	let n = {};
	for (let r in e) n[r] = r in t ? t[r] : e[r];
	return n;
}
var of = /#/g, sf = /&/g, cf = /\//g, lf = /=/g, uf = /\?/g, df = /\+/g, ff = /%5B/g, pf = /%5D/g, mf = /%5E/g, hf = /%60/g, gf = /%7B/g, _f = /%7C/g, vf = /%7D/g, yf = /%20/g;
function bf(e) {
	return e == null ? "" : encodeURI("" + e).replace(_f, "|").replace(ff, "[").replace(pf, "]");
}
function xf(e) {
	return bf(e).replace(gf, "{").replace(vf, "}").replace(mf, "^");
}
function Sf(e) {
	return bf(e).replace(df, "%2B").replace(yf, "+").replace(of, "%23").replace(sf, "%26").replace(hf, "`").replace(gf, "{").replace(vf, "}").replace(mf, "^");
}
function Cf(e) {
	return Sf(e).replace(lf, "%3D");
}
function wf(e) {
	return bf(e).replace(of, "%23").replace(uf, "%3F");
}
function Tf(e) {
	return wf(e).replace(cf, "%2F");
}
function Ef(e) {
	if (e == null) return null;
	try {
		return decodeURIComponent("" + e);
	} catch {}
	return "" + e;
}
var Df = /\/$/, Of = (e) => e.replace(Df, "");
function kf(e, t, n = "/") {
	let r, i = {}, a = "", o = "", s = t.indexOf("#"), c = t.indexOf("?");
	return c = s >= 0 && c > s ? -1 : c, c >= 0 && (r = t.slice(0, c), a = t.slice(c, s > 0 ? s : t.length), i = e(a.slice(1))), s >= 0 && (r ||= t.slice(0, s), o = t.slice(s, t.length)), r = If(r ?? t, n), {
		fullPath: r + a + o,
		path: r,
		query: i,
		hash: Ef(o)
	};
}
function Af(e, t) {
	let n = t.query ? e(t.query) : "";
	return t.path + (n && "?") + n + (t.hash || "");
}
function jf(e, t, n) {
	let r = t.matched.length - 1, i = n.matched.length - 1;
	return r > -1 && r === i && Mf(t.matched[r], n.matched[i]) && Nf(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Mf(e, t) {
	return (e.aliasOf || e) === (t.aliasOf || t);
}
function Nf(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (var n in e) if (!Pf(e[n], t[n])) return !1;
	return !0;
}
function Pf(e, t) {
	return rf(e) ? Ff(e, t) : rf(t) ? Ff(t, e) : e?.valueOf() === t?.valueOf();
}
function Ff(e, t) {
	return rf(t) ? e.length === t.length && e.every((e, n) => e === t[n]) : e.length === 1 && e[0] === t;
}
function If(e, t) {
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
var Lf = {
	path: "/",
	name: void 0,
	params: {},
	query: {},
	hash: "",
	fullPath: "/",
	matched: [],
	meta: {},
	redirectedFrom: void 0
}, Rf = /* @__PURE__ */ function(e) {
	return e.pop = "pop", e.push = "push", e;
}({}), zf = /* @__PURE__ */ function(e) {
	return e.back = "back", e.forward = "forward", e.unknown = "", e;
}({});
function Bf(e) {
	if (!e) {
		if (Qd) {
			let t = document.querySelector("base");
			e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
		} else e = "/";
	}
	return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Of(e);
}
var Vf = /^[^#]+#/;
function Hf(e, t) {
	return e.replace(Vf, "#") + t;
}
function Uf(e, t) {
	let n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
	return {
		behavior: t.behavior,
		left: r.left - n.left - (t.left || 0),
		top: r.top - n.top - (t.top || 0)
	};
}
var Wf = () => ({
	left: window.scrollX,
	top: window.scrollY
});
function Gf(e) {
	let t;
	if ("el" in e) {
		let n = e.el, r = typeof n == "string" && n.startsWith("#"), i = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
		if (!i) return;
		t = Uf(i, e);
	} else t = e;
	"scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left == null ? window.scrollX : t.left, t.top == null ? window.scrollY : t.top);
}
function Kf(e, t) {
	return (history.state ? history.state.position - t : -1) + e;
}
var qf = /* @__PURE__ */ new Map();
function Jf(e, t) {
	qf.set(e, t);
}
function Yf(e) {
	let t = qf.get(e);
	return qf.delete(e), t;
}
function Xf(e) {
	return typeof e == "string" || e && typeof e == "object";
}
function Zf(e) {
	return typeof e == "string" || typeof e == "symbol";
}
var Z = /* @__PURE__ */ function(e) {
	return e[e.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", e[e.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", e[e.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", e[e.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", e[e.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", e;
}({}), Qf = Symbol("");
Z.MATCHER_NOT_FOUND, Z.NAVIGATION_GUARD_REDIRECT, Z.NAVIGATION_ABORTED, Z.NAVIGATION_CANCELLED, Z.NAVIGATION_DUPLICATED;
function $f(e, t) {
	return X(/* @__PURE__ */ Error(), {
		type: e,
		[Qf]: !0
	}, t);
}
function ep(e, t) {
	return e instanceof Error && Qf in e && (t == null || !!(e.type & t));
}
function tp(e) {
	let t = {};
	if (e === "" || e === "?") return t;
	let n = (e[0] === "?" ? e.slice(1) : e).split("&");
	for (let e = 0; e < n.length; ++e) {
		let r = n[e].replace(df, " "), i = r.indexOf("="), a = Ef(i < 0 ? r : r.slice(0, i)), o = i < 0 ? null : Ef(r.slice(i + 1));
		if (a in t) {
			let e = t[a];
			rf(e) || (e = t[a] = [e]), e.push(o);
		} else t[a] = o;
	}
	return t;
}
function np(e) {
	let t = "";
	for (let n in e) {
		let r = e[n];
		n = Cf(n), r == null ? r !== void 0 && (t += (t.length ? "&" : "") + n) : (rf(r) ? r.map((e) => e && Sf(e)) : [r && Sf(r)]).forEach((e) => {
			e !== void 0 && (t += (t.length ? "&" : "") + n, e != null && (t += "=" + e));
		});
	}
	return t;
}
function rp(e) {
	let t = {};
	for (let n in e) {
		let r = e[n];
		r !== void 0 && (t[n] = rf(r) ? r.map((e) => e == null ? null : "" + e) : r == null ? r : "" + r);
	}
	return t;
}
var ip = Symbol(""), ap = Symbol(""), op = Symbol(""), sp = Symbol(""), cp = Symbol("");
function lp() {
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
function up(e, t, n, r, i, a = (e) => e()) {
	let o = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
	return () => new Promise((s, c) => {
		let l = (e) => {
			e === !1 ? c($f(Z.NAVIGATION_ABORTED, {
				from: n,
				to: t
			})) : e instanceof Error ? c(e) : Xf(e) ? c($f(Z.NAVIGATION_GUARD_REDIRECT, {
				from: t,
				to: e
			})) : (o && r.enterCallbacks[i] === o && typeof e == "function" && o.push(e), s());
		}, u = a(() => e.call(r && r.instances[i], t, n, l)), d = Promise.resolve(u);
		e.length < 3 && (d = d.then(l)), d.catch((e) => c(e));
	});
}
function dp(e, t, n, r, i = (e) => e()) {
	let a = [];
	for (let o of e) for (let e in o.components) {
		let s = o.components[e];
		if (t === "beforeRouteEnter" || o.instances[e]) {
			if ($d(s)) {
				let c = (s.__vccOpts || s)[t];
				c && a.push(up(c, n, r, o, e, i));
			} else {
				let c = s();
				a.push(() => c.then((a) => {
					if (!a) throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);
					let s = ef(a) ? a.default : a;
					o.mods[e] = a, o.components[e] = s;
					let c = (s.__vccOpts || s)[t];
					return c && up(c, n, r, o, e, i)();
				}));
			}
		}
	}
	return a;
}
function fp(e, t) {
	let n = [], r = [], i = [], a = Math.max(t.matched.length, e.matched.length);
	for (let o = 0; o < a; o++) {
		let a = t.matched[o];
		a && (e.matched.find((e) => Mf(e, a)) ? r.push(a) : n.push(a));
		let s = e.matched[o];
		s && (t.matched.find((e) => Mf(e, s)) || i.push(s));
	}
	return [
		n,
		r,
		i
	];
}
// node_modules/vue-router/dist/vue-router.mjs
function pp(e = "") {
	let t = [], n = [["", {}]], r = 0;
	e = Bf(e);
	function i(e, t = {}) {
		r++, r !== n.length && n.splice(r), n.push([e, t]);
	}
	function a(e, n, { direction: r, delta: i }) {
		let a = {
			direction: r,
			delta: i,
			type: Rf.pop
		};
		for (let r of t) r(e, n, a);
	}
	let o = {
		location: "",
		state: {},
		base: e,
		createHref: Hf.bind(null, e),
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
			let i = this.location, o = e < 0 ? zf.back : zf.forward;
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
var mp = /* @__PURE__ */ function(e) {
	return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.Group = 2] = "Group", e;
}({}), hp = /* @__PURE__ */ function(e) {
	return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.ParamRegExp = 2] = "ParamRegExp", e[e.ParamRegExpEnd = 3] = "ParamRegExpEnd", e[e.EscapeNext = 4] = "EscapeNext", e;
}(hp || {}), gp = {
	type: mp.Static,
	value: ""
}, _p = /[a-zA-Z0-9_]/;
function vp(e) {
	if (!e) return [[]];
	if (e === "/") return [[gp]];
	if (!e.startsWith("/")) throw Error(`Invalid path "${e}"`);
	function t(e) {
		throw Error(`ERR (${n})/"${l}": ${e}`);
	}
	let n = hp.Static, r = n, i = [], a;
	function o() {
		a && i.push(a), a = [];
	}
	let s = 0, c, l = "", u = "";
	function d() {
		l &&= (n === hp.Static ? a.push({
			type: mp.Static,
			value: l
		}) : n === hp.Param || n === hp.ParamRegExp || n === hp.ParamRegExpEnd ? (a.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`), a.push({
			type: mp.Param,
			value: l,
			regexp: u,
			repeatable: c === "*" || c === "+",
			optional: c === "*" || c === "?"
		})) : t("Invalid state to consume buffer"), "");
	}
	function f() {
		l += c;
	}
	for (; s < e.length;) if (c = e[s++], c === "\\" && n !== hp.ParamRegExp) r = n, n = hp.EscapeNext;
	else switch (n) {
		case hp.Static:
			c === "/" ? (l && d(), o()) : c === ":" ? (d(), n = hp.Param) : f();
			break;
		case hp.EscapeNext:
			f(), n = r;
			break;
		case hp.Param:
			c === "(" ? n = hp.ParamRegExp : _p.test(c) ? f() : (d(), n = hp.Static, c !== "*" && c !== "?" && c !== "+" && s--);
			break;
		case hp.ParamRegExp:
			c === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + c : n = hp.ParamRegExpEnd : u += c;
			break;
		case hp.ParamRegExpEnd:
			d(), n = hp.Static, c !== "*" && c !== "?" && c !== "+" && s--, u = "";
			break;
		default: t("Unknown state");
	}
	return n === hp.ParamRegExp && t(`Unfinished custom RegExp for param "${l}"`), d(), o(), i;
}
var yp = "[^/]+?", bp = {
	sensitive: !1,
	strict: !1,
	start: !0,
	end: !0
}, xp = /* @__PURE__ */ function(e) {
	return e[e._multiplier = 10] = "_multiplier", e[e.Root = 90] = "Root", e[e.Segment = 40] = "Segment", e[e.SubSegment = 30] = "SubSegment", e[e.Static = 40] = "Static", e[e.Dynamic = 20] = "Dynamic", e[e.BonusCustomRegExp = 10] = "BonusCustomRegExp", e[e.BonusWildcard = -50] = "BonusWildcard", e[e.BonusRepeatable = -20] = "BonusRepeatable", e[e.BonusOptional = -8] = "BonusOptional", e[e.BonusStrict = .7000000000000001] = "BonusStrict", e[e.BonusCaseSensitive = .25] = "BonusCaseSensitive", e;
}(xp || {}), Sp = /[.+*?^${}()[\]/\\|]/g;
function Cp(e, t) {
	let n = X({}, bp, t), r = [], i = n.start ? "^" : "", a = [], o = e.some((e) => e.some((e) => e.type === mp.Param && /\\[1-9k]/.test(e.regexp || "")));
	for (let t of e) {
		let e = t.length ? [] : [xp.Root];
		n.strict && !t.length && (i += "/");
		for (let r = 0; r < t.length; r++) {
			let s = t[r], c = xp.Segment + (n.sensitive ? xp.BonusCaseSensitive : 0);
			if (s.type === mp.Static) r || (i += "/"), i += s.value.replace(Sp, "\\$&"), c += xp.Static;
			else if (s.type === mp.Param) {
				let { value: e, repeatable: n, optional: l, regexp: u } = s;
				a.push({
					name: e,
					repeatable: n,
					optional: l
				});
				let d = u || yp;
				if (d !== yp) {
					c += xp.BonusCustomRegExp;
					try {
						`${d}`;
					} catch (t) {
						throw Error(`Invalid custom RegExp for param "${e}" (${d}): ` + t.message);
					}
				}
				let f = n ? `((?:${d})(?:/(?:${d}))*)` : `(${d})`, p = t[r + 1], m = t[r + 2];
				o || u || n || !m || m.type !== mp.Param || m.regexp || p.type !== mp.Static || (f = `([^/](?:(?!${p.value.replace(Sp, "\\$&")})[^/])*)`), r || (f = l && t.length < 2 ? `(?:/${f})` : "/" + f), l && (f += "?"), i += f, c += xp.Dynamic, l && (c += xp.BonusOptional), n && (c += xp.BonusRepeatable), d === ".*" && (c += xp.BonusWildcard);
			}
			e.push(c);
		}
		r.push(e);
	}
	if (n.strict && n.end) {
		let e = r.length - 1;
		r[e][r[e].length - 1] += xp.BonusStrict;
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
			for (let e of i) if (e.type === mp.Static) n += e.value;
			else if (e.type === mp.Param) {
				let { value: a, repeatable: o, optional: s } = e, c = a in t ? t[a] : "";
				if (rf(c) && !o) throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);
				let l = rf(c) ? c.join("/") : c;
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
function wp(e, t) {
	let n = 0;
	for (; n < e.length && n < t.length;) {
		let r = t[n] - e[n];
		if (r) return r;
		n++;
	}
	return e.length < t.length ? e.length === 1 && e[0] === xp.Static + xp.Segment ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === xp.Static + xp.Segment ? 1 : -1 : 0;
}
function Tp(e, t) {
	let n = 0, r = e.score, i = t.score;
	for (; n < r.length && n < i.length;) {
		let e = wp(r[n], i[n]);
		if (e) return e;
		n++;
	}
	if (Math.abs(i.length - r.length) === 1) {
		if (Ep(r)) return 1;
		if (Ep(i)) return -1;
	}
	return i.length - r.length;
}
function Ep(e) {
	let t = e[e.length - 1];
	return e.length > 0 && t[t.length - 1] < 0;
}
var Dp = {
	strict: !1,
	end: !0,
	sensitive: !1
};
function Op(e, t, n) {
	let r = X(Cp(vp(e.path), n), {
		record: e,
		parent: t,
		children: [],
		alias: []
	});
	return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function kp(e, t) {
	let n = [], r = /* @__PURE__ */ new Map();
	t = af(Dp, t);
	function i(e) {
		return r.get(e);
	}
	function a(e, n, r) {
		let i = !r, s = jp(e);
		s.aliasOf = r && r.record;
		let l = af(t, e), u = [s];
		if ("alias" in e) {
			let t = typeof e.alias == "string" ? [e.alias] : e.alias;
			for (let e of t) u.push(jp(X({}, s, {
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
			if (d = Op(t, n, l), r ? r.alias.push(d) : (f ||= d, f !== d && f.alias.push(d), i && e.name && !Np(d) && o(e.name)), Lp(d) && c(d), s.children) {
				let e = s.children;
				for (let t = 0; t < e.length; t++) a(e[t], d, r && r.children[t]);
			}
			r ||= d;
		}
		return f ? () => {
			o(f);
		} : nf;
	}
	function o(e) {
		if (Zf(e)) {
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
		let t = Fp(e, n);
		n.splice(t, 0, e), e.record.name && !Np(e) && r.set(e.record.name, e);
	}
	function l(e, t) {
		let i, a = {}, o, s;
		if ("name" in e && e.name) {
			if (i = r.get(e.name), !i) throw $f(Z.MATCHER_NOT_FOUND, { location: e });
			s = i.record.name, a = X(Ap(t.params, i.keys.filter((e) => !e.optional).concat(i.parent ? i.parent.keys.filter((e) => e.optional) : []).map((e) => e.name)), e.params && Ap(e.params, i.keys.map((e) => e.name))), o = i.stringify(a);
		} else if (e.path != null) o = e.path, i = n.find((e) => e.re.test(o)), i && (a = i.parse(o), s = i.record.name);
		else {
			if (i = t.name ? r.get(t.name) : n.find((e) => e.re.test(t.path)), !i) throw $f(Z.MATCHER_NOT_FOUND, {
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
			meta: Pp(c)
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
function Ap(e, t) {
	let n = {};
	for (let r of t) r in e && (n[r] = e[r]);
	return n;
}
function jp(e) {
	let t = {
		path: e.path,
		redirect: e.redirect,
		name: e.name,
		meta: e.meta || {},
		aliasOf: e.aliasOf,
		beforeEnter: e.beforeEnter,
		props: Mp(e),
		children: e.children || [],
		instances: {},
		leaveGuards: /* @__PURE__ */ new Set(),
		updateGuards: /* @__PURE__ */ new Set(),
		enterCallbacks: {},
		components: "components" in e ? e.components || null : e.component && { default: e.component }
	};
	return Object.defineProperty(t, "mods", { value: {} }), t;
}
function Mp(e) {
	let t = {}, n = e.props || !1;
	if ("component" in e) t.default = n;
	else for (let r in e.components) t[r] = typeof n == "object" ? n[r] : n;
	return t;
}
function Np(e) {
	for (; e;) {
		if (e.record.aliasOf) return !0;
		e = e.parent;
	}
	return !1;
}
function Pp(e) {
	return e.reduce((e, t) => X(e, t.meta), {});
}
function Fp(e, t) {
	let n = 0, r = t.length;
	for (; n !== r;) {
		let i = n + r >> 1;
		Tp(e, t[i]) < 0 ? r = i : n = i + 1;
	}
	let i = Ip(e);
	return i && (r = t.lastIndexOf(i, r - 1)), r;
}
function Ip(e) {
	let t = e;
	for (; t = t.parent;) if (Lp(t) && Tp(e, t) === 0) return t;
}
function Lp({ record: e }) {
	return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function Rp(e) {
	let t = Gn(op), n = Gn(sp), r = G(() => {
		let n = P(e.to);
		return t.resolve(n);
	}), i = G(() => {
		let { matched: e } = r.value, { length: t } = e, i = e[t - 1], a = n.matched;
		if (!i || !a.length) return -1;
		let o = a.findIndex(Mf.bind(null, i));
		if (o > -1) return o;
		let s = Up(e[t - 2]);
		return t > 1 && Up(i) === s && a[a.length - 1].path !== s ? a.findIndex(Mf.bind(null, e[t - 2])) : o;
	}), a = G(() => i.value > -1 && Hp(n.params, r.value.params)), o = G(() => i.value > -1 && i.value === n.matched.length - 1 && Nf(n.params, r.value.params));
	function s(n = {}) {
		if (Vp(n)) {
			let n = t[P(e.replace) ? "replace" : "push"](P(e.to)).catch(nf);
			return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => n), n;
		}
		return Promise.resolve();
	}
	return {
		route: r,
		href: G(() => r.value.href),
		isActive: a,
		isExactActive: o,
		navigate: s
	};
}
function zp(e) {
	return e.length === 1 ? e[0] : e;
}
var Bp = /* @__PURE__ */ ar({
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
	useLink: Rp,
	setup(e, { slots: t }) {
		let n = /* @__PURE__ */ k(Rp(e)), { options: r } = Gn(op), i = G(() => ({
			[Wp(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
			[Wp(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
		}));
		return () => {
			let r = t.default && zp(t.default(n));
			return e.custom ? r : Ba("a", {
				"aria-current": n.isExactActive ? e.ariaCurrentValue : null,
				href: n.href,
				onClick: n.navigate,
				class: i.value
			}, r);
		};
	}
});
function Vp(e) {
	if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && (e.button === void 0 || e.button === 0)) {
		if (e.currentTarget && e.currentTarget.getAttribute) {
			let t = e.currentTarget.getAttribute("target");
			if (/\b_blank\b/i.test(t)) return;
		}
		return e.preventDefault && e.preventDefault(), !0;
	}
}
function Hp(e, t) {
	for (let n in t) {
		let r = t[n], i = e[n];
		if (typeof r == "string") {
			if (r !== i) return !1;
		} else if (!rf(i) || i.length !== r.length || r.some((e, t) => e.valueOf() !== i[t].valueOf())) return !1;
	}
	return !0;
}
function Up(e) {
	return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
var Wp = (e, t, n) => e ?? t ?? n, Gp = /* @__PURE__ */ ar({
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
		let r = Gn(cp), i = G(() => e.route || r.value), a = Gn(ap, 0), o = G(() => {
			let e = P(a), { matched: t } = i.value, n;
			for (; (n = t[e]) && !n.components;) e++;
			return e;
		}), s = G(() => i.value.matched[o.value]);
		Wn(ap, G(() => o.value + 1)), Wn(ip, s), Wn(cp, i);
		let c = /* @__PURE__ */ M();
		return I(() => [
			c.value,
			s.value,
			e.name
		], ([e, t, n], [r, i, a]) => {
			t && (t.instances[n] = e, i && i !== t && e && e === r && (t.leaveGuards.size || (t.leaveGuards = i.leaveGuards), t.updateGuards.size || (t.updateGuards = i.updateGuards))), !e || !t || i && Mf(t, i) && r || (t.enterCallbacks[n] || []).forEach((t) => t(e));
		}, { flush: "post" }), () => {
			let r = i.value, a = e.name, o = s.value, l = o && o.components[a];
			if (!l) return Kp(n.default, {
				Component: l,
				route: r
			});
			let u = o.props[a], d = Ba(l, X({}, u ? u === !0 ? r.params : typeof u == "function" ? u(r) : u : null, t, {
				onVnodeUnmounted: (e) => {
					e.component.isUnmounted && (o.instances[a] = null);
				},
				ref: c
			}));
			return Kp(n.default, {
				Component: d,
				route: r
			}) || d;
		};
	}
});
function Kp(e, t) {
	if (!e) return null;
	let n = e(t);
	return n.length === 1 ? n[0] : n;
}
var qp = Gp;
function Jp(e) {
	let t = kp(e.routes, e), n = e.parseQuery || tp, r = e.stringifyQuery || np, i = e.history, a = lp(), o = lp(), s = lp(), c = /* @__PURE__ */ N(Lf), l = Lf;
	Qd && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
	let u = tf.bind(null, (e) => "" + e), d = tf.bind(null, Tf), f = tf.bind(null, Ef);
	function p(e, n) {
		let r, i;
		return Zf(e) ? (r = t.getRecordMatcher(e), i = n) : i = e, t.addRoute(i, r);
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
			let r = kf(n, e, a.path), o = t.resolve({ path: r.path }, a), s = i.createHref(r.fullPath);
			return X(r, o, {
				params: f(o.params),
				hash: Ef(r.hash),
				redirectedFrom: void 0,
				href: s
			});
		}
		let o;
		if (e.path != null) o = X({}, e, { path: kf(n, e.path, a.path).path });
		else {
			let t = X({}, e.params);
			for (let e in t) t[e] ?? delete t[e];
			o = X({}, e, { params: d(t) }), a.params = d(a.params);
		}
		let s = t.resolve(o, a), l = e.hash || "";
		s.params = u(f(s.params));
		let p = Af(r, X({}, e, {
			hash: xf(l),
			path: s.path
		})), m = i.createHref(p);
		return X({
			fullPath: p,
			hash: l,
			query: r === np ? rp(e.query) : e.query || {}
		}, s, {
			redirectedFrom: void 0,
			href: m
		});
	}
	function v(e) {
		return typeof e == "string" ? kf(n, e, c.value.path) : X({}, e);
	}
	function y(e, t) {
		if (l !== e) return $f(Z.NAVIGATION_CANCELLED, {
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
		return !o && jf(r, i, n) && (f = $f(Z.NAVIGATION_DUPLICATED, {
			to: d,
			from: i
		}), fe(i, i, !0, !1)), (f ? Promise.resolve(f) : re(d, i)).catch((e) => ep(e) ? ep(e, Z.NAVIGATION_GUARD_REDIRECT) ? e : de(e) : le(e, d, i)).then((e) => {
			if (e) {
				if (ep(e, Z.NAVIGATION_GUARD_REDIRECT)) return S(X({ replace: s }, v(e.to), {
					state: typeof e.to == "object" ? X({}, a, e.to.state) : a,
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
		let t = me.values().next().value;
		return t && typeof t.runWithContext == "function" ? t.runWithContext(e) : e();
	}
	function re(e, t) {
		let n, [r, i, s] = fp(e, t);
		n = dp(r.reverse(), "beforeRouteLeave", e, t);
		for (let i of r) i.leaveGuards.forEach((r) => {
			n.push(up(r, e, t));
		});
		let c = te.bind(null, e, t);
		return n.push(c), ge(n).then(() => {
			n = [];
			for (let r of a.list()) n.push(up(r, e, t));
			return n.push(c), ge(n);
		}).then(() => {
			n = dp(i, "beforeRouteUpdate", e, t);
			for (let r of i) r.updateGuards.forEach((r) => {
				n.push(up(r, e, t));
			});
			return n.push(c), ge(n);
		}).then(() => {
			n = [];
			for (let r of s) if (r.beforeEnter) {
				if (rf(r.beforeEnter)) for (let i of r.beforeEnter) n.push(up(i, e, t));
				else n.push(up(r.beforeEnter, e, t));
			}
			return n.push(c), ge(n);
		}).then(() => (e.matched.forEach((e) => e.enterCallbacks = {}), n = dp(s, "beforeRouteEnter", e, t, ne), n.push(c), ge(n))).then(() => {
			n = [];
			for (let r of o.list()) n.push(up(r, e, t));
			return n.push(c), ge(n);
		}).catch((e) => ep(e, Z.NAVIGATION_CANCELLED) ? e : Promise.reject(e));
	}
	function ie(e, t, n) {
		s.list().forEach((r) => ne(() => r(e, t, n)));
	}
	function C(e, t, n, r, a) {
		let o = y(e, t);
		if (o) return o;
		let s = t === Lf, l = Qd ? history.state : {};
		n && (r || s ? i.replace(e.fullPath, X({ scroll: s && l && l.scroll }, a)) : i.push(e.fullPath, a)), c.value = e, fe(e, t, n, s), de();
	}
	let ae;
	function oe() {
		ae ||= i.listen((e, t, n) => {
			if (!he.listening) return;
			let r = _(e), a = ee(r, he.currentRoute.value);
			if (a) {
				S(X(a, {
					replace: !0,
					force: !0
				}), r).catch(nf);
				return;
			}
			l = r;
			let o = c.value;
			Qd && Jf(Kf(o.fullPath, n.delta), Wf()), re(r, o).catch((e) => ep(e, Z.NAVIGATION_ABORTED | Z.NAVIGATION_CANCELLED) ? e : ep(e, Z.NAVIGATION_GUARD_REDIRECT) ? (S(X(v(e.to), { force: !0 }), r).then((e) => {
				ep(e, Z.NAVIGATION_ABORTED | Z.NAVIGATION_DUPLICATED) && !n.delta && n.type === Rf.pop && i.go(-1, !1);
			}).catch(nf), Promise.reject()) : (n.delta && i.go(-n.delta, !1), le(e, r, o))).then((e) => {
				e ||= C(r, o, !1), e && (n.delta && !ep(e, Z.NAVIGATION_CANCELLED) ? i.go(-n.delta, !1) : n.type === Rf.pop && ep(e, Z.NAVIGATION_ABORTED | Z.NAVIGATION_DUPLICATED) && i.go(-1, !1)), ie(r, o, e);
			}).catch(nf);
		});
	}
	let w = lp(), se = lp(), ce;
	function le(e, t, n) {
		de(e);
		let r = se.list();
		return r.length ? r.forEach((r) => r(e, t, n)) : console.error(e), Promise.reject(e);
	}
	function ue() {
		return ce && c.value !== Lf ? Promise.resolve() : new Promise((e, t) => {
			w.add([e, t]);
		});
	}
	function de(e) {
		return ce || (ce = !e, oe(), w.list().forEach(([t, n]) => e ? n(e) : t()), w.reset()), e;
	}
	function fe(t, n, r, i) {
		let { scrollBehavior: a } = e;
		if (!Qd || !a) return Promise.resolve();
		let o = !r && Yf(Kf(t.fullPath, 0)) || (i || !r) && history.state && history.state.scroll || null;
		return On().then(() => a(t, n, o)).then((e) => e && Gf(e)).catch((e) => le(e, t, n));
	}
	let pe = (e) => i.go(e), T, me = /* @__PURE__ */ new Set(), he = {
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
		go: pe,
		back: () => pe(-1),
		forward: () => pe(1),
		beforeEach: a.add,
		beforeResolve: o.add,
		afterEach: s.add,
		onError: se.add,
		isReady: ue,
		install(e) {
			e.component("RouterLink", Bp), e.component("RouterView", qp), e.config.globalProperties.$router = he, Object.defineProperty(e.config.globalProperties, "$route", {
				enumerable: !0,
				get: () => P(c)
			}), Qd && !T && c.value === Lf && (T = !0, b(i.location).catch((e) => {}));
			let t = {};
			for (let e in Lf) Object.defineProperty(t, e, {
				get: () => c.value[e],
				enumerable: !0
			});
			e.provide(op, he), e.provide(sp, /* @__PURE__ */ Gt(t)), e.provide(cp, c);
			let n = e.unmount;
			me.add(e), e.unmount = function() {
				me.delete(e), me.size < 1 && (l = Lf, ae && ae(), ae = null, c.value = Lf, T = !1, ce = !1), n();
			};
		}
	};
	function ge(e) {
		return e.reduce((e, t) => e.then(() => ne(t)), Promise.resolve());
	}
	return he;
}
function Yp() {
	return Gn(op);
}
function Xp(e) {
	return Gn(sp);
}
var Zp = Jp({
	history: pp(),
	routes: [{
		path: "/:view(.*)*",
		name: "legacy-view",
		component: { render: () => null }
	}]
}), Qp = /* @__PURE__ */ new Set([
	"projects",
	"saved",
	"myideas",
	"myprompts",
	"events",
	"tracks",
	"artists"
]);
function $p(e, t = null) {
	let n = typeof e == "string" && e ? e : "home";
	return n === "producer" && t?.kind === "production" && typeof t.id == "string" && /^[a-zA-Z0-9_-]{1,128}$/.test(t.id) ? "/producer/detail/" + encodeURIComponent(t.id) : n === "tracks" && t?.kind === "track" ? "/account/tracks/detail" : n === "detail" ? "/catalog/detail" : Qp.has(n) ? "/account/" + n : "/" + encodeURIComponent(n);
}
function em(e) {
	if (e === "/catalog/detail") return "catalog";
	if (e === "/producer/detail" || e.startsWith("/producer/detail/")) return "producer";
	if (e.startsWith("/account/")) return "account";
	try {
		return decodeURIComponent(e.slice(1)) || "home";
	} catch {
		return "home";
	}
}
var tm = null, nm = Promise.resolve(), rm = "replace", im = 0, am = 0, om = [], sm = [], cm = -1, lm = /* @__PURE__ */ N(0), um = /* @__PURE__ */ Kt(lm);
function dm() {
	lm.value++;
}
var fm = /* @__PURE__ */ new Set([
	"overview",
	"ideas",
	"prompts",
	"artists"
]);
function pm(e) {
	return e?.kind !== "genre" || typeof e.id != "string" || !/^[a-z0-9-]{1,100}$/.test(e.id) || !fm.has(e.tab) ? null : Object.freeze({
		kind: "genre",
		id: e.id,
		tab: e.tab
	});
}
function mm(e) {
	return e?.kind !== "track" || typeof e.id != "string" || !/^[a-zA-Z0-9_-]{1,128}$/.test(e.id) ? null : Object.freeze({
		kind: "track",
		id: e.id
	});
}
function hm(e) {
	return pm(e) || mm(e) || (e?.kind === "production" && typeof e.id == "string" && /^[a-zA-Z0-9_-]{1,128}$/.test(e.id) ? Object.freeze({
		kind: "production",
		id: e.id
	}) : null);
}
function gm(e, t, n = null) {
	let r = hm(n);
	if (cm < 0) om = [e], sm = [r], cm = 0;
	else if (t === "push") om = om.slice(0, cm + 1), sm = sm.slice(0, cm + 1), om.push(e), sm.push(r), cm = om.length - 1;
	else {
		let t = om[cm] === e ? sm[cm] : null;
		om[cm] = e, sm[cm] = r || t || null;
	}
	dm();
}
function _m(e) {
	let t = e === "back" ? -1 : +(e === "forward"), n = cm + t;
	return t && n >= 0 && n < om.length ? Object.freeze({
		path: om[n],
		context: sm[n] || null,
		index: n,
		offset: t
	}) : null;
}
function vm(e) {
	return _m(e);
}
function ym(e) {
	if (typeof e != "string" || !/^\/[a-z][a-z0-9-]*$/i.test(e)) return null;
	try {
		return decodeURIComponent(e.slice(1));
	} catch {
		return null;
	}
}
function bm(e, { historyMode: t = "replace", context: n = null, source: r = "legacy" } = {}) {
	let i = hm(n), a = $p(e, i);
	if (a === tm) return i && (nm = nm.then(() => {
		Zp.currentRoute.value.path === a && cm >= 0 && om[cm] === a && (sm[cm] = i, dm());
	})), nm;
	tm = a;
	let o = t === "push" ? "push" : "replace";
	return nm = nm.then(async () => {
		Zp.currentRoute.value.path === a ? i && cm >= 0 && (sm[cm] = i, dm()) : await Zp[o](a) || (gm(a, o, i), rm = o, o === "push" && !i && r === "menu" && im++, o === "push" && !i && r === "shortcut" && am++);
	}).catch((e) => {
		console.warn("[SUNOBOOM] Vue Router memory navigation failed; legacy routing remains active.", e);
	}), nm;
}
function xm() {
	return nm;
}
function Sm(e) {
	let t = nm.then(() => {
		let t = _m(e);
		return t ? new Promise((n) => {
			let r = !1, i = () => {}, a;
			function o(o) {
				r || (r = !0, i(), clearTimeout(a), o && (cm = t.index, tm = t.path, rm = e, dm()), n(o));
			}
			i = Zp.afterEach((e, n, r) => o(!r && e.path === t.path)), a = setTimeout(() => o(!1), 2500), Zp.go(t.offset);
		}) : !1;
	}).catch((e) => (console.warn("[SUNOBOOM] Vue memory history traversal failed; legacy navigation retained.", e), !1));
	return nm = t.then(() => void 0), t;
}
function Cm() {
	let e = Zp.currentRoute.value;
	return Object.freeze({
		path: e.path,
		name: e.name,
		active: em(e.path),
		transition: rm,
		menuPushes: im,
		shortcutPushes: am,
		canGoBack: cm > 0,
		canGoForward: cm >= 0 && cm < om.length - 1,
		historyDepth: om.length,
		historyPosition: cm,
		context: sm[cm] || null
	});
}
// src/vue/navigation/route-state.js
var wm = /* @__PURE__ */ N(Object.freeze({
	route: "home",
	active: "home",
	revision: 0
})), Tm = /* @__PURE__ */ Kt(wm);
function Em(e, { historyMode: t = "replace", context: n = null, source: r = "legacy" } = {}) {
	let i = typeof e == "string" && e ? e : "home";
	if (bm(i, {
		historyMode: t,
		context: n,
		source: r
	}), i === wm.value.route) return wm.value;
	let a = Object.freeze({
		route: i,
		active: Xd(i),
		revision: wm.value.revision + 1
	});
	return wm.value = a, a;
}
// src/vue/state/appearance-model.js
function Dm(e) {
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
var Om = /* @__PURE__ */ new Set([
	"all",
	"",
	"name",
	"family",
	"artist",
	"description"
]), km = /* @__PURE__ */ new Set([
	"overview",
	"ideas",
	"prompts",
	"artists"
]), Am = /^[a-z0-9][a-z0-9-]{0,99}$/;
function jm({ query: e, results: t, total: n, mode: r } = {}) {
	return typeof e != "string" || e.length > 160 || !Number.isSafeInteger(n) || n < 0 || !Number.isSafeInteger(t) || t < 0 || t > n || !Om.has(r) ? null : Object.freeze({
		query: e,
		results: t,
		total: n,
		mode: r
	});
}
function Mm(e, t) {
	return typeof e != "string" || !Am.test(e) || !km.has(t) ? null : Object.freeze({
		genreId: e,
		tab: t
	});
}
function Nm({ tree: e, selected: t, zoom: n, query: r } = {}) {
	return typeof e != "string" || !Am.test(e) || typeof t != "string" || !Am.test(t) || typeof n != "number" || !Number.isFinite(n) || n < .75 || n > 1.5 || typeof r != "string" || r.length > 160 ? null : Object.freeze({
		tree: e,
		selected: t,
		zoom: n,
		query: r
	});
}
// src/vue/state/production-ui-model.js
var Pm = /^[a-z0-9][a-z0-9-]{0,99}$/, Fm = (e, t, n) => Number.isSafeInteger(e) && e >= t && e <= n;
function Im(e) {
	let t = e?.settings, n = e?.prompt, r = t?.genre;
	return typeof r != "string" || !Pm.test(r) || !Fm(t?.tempo, 65, 200) || typeof n != "string" || n.length > 1e3 ? null : Object.freeze({
		ready: !0,
		genreId: r,
		tempo: t.tempo,
		promptLength: n.length
	});
}
function Lm(e) {
	let t = e?.rows, n = e?.prompt;
	return !Array.isArray(t) || t.length < 2 || t.length > 4 || !Fm(e?.tempo, 65, 200) || typeof n != "string" || n.length > 1e3 || !t.every((e) => typeof e?.id == "string" && Pm.test(e.id) && Fm(e.weight, 0, 100)) || t.reduce((e, t) => e + t.weight, 0) !== 100 || new Set(t.map((e) => e.id)).size !== t.length ? null : Object.freeze({
		ready: !0,
		genreCount: t.length,
		tempo: e.tempo,
		promptLength: n.length
	});
}
function Rm(e) {
	let t = e?.report;
	return !["manual", "studio"].includes(e?.mode) || !Fm(t?.score, 0, 100) || !Fm(t?.length, 0, 1e5) ? null : Object.freeze({
		ready: !0,
		mode: e.mode,
		score: t.score,
		checkedLength: t.length
	});
}
function zm(e) {
	let t = e?.blocks;
	if (!Array.isArray(t) || t.length > 64 || !t.every((e) => e && [
		2,
		4,
		8,
		12,
		16,
		24,
		32
	].includes(e.bars) && Fm(e.energy, 1, 5) && typeof e.hasTransition == "boolean")) return null;
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
var Bm = (e, t, n) => Number.isSafeInteger(e) && e >= t && e <= n, Vm = (e) => typeof e == "boolean";
function Hm(e) {
	return !Bm(e?.count, 0, 150) || !Bm(e?.currentIndex, -1, e.count - 1) || e.count === 0 && e.currentIndex !== -1 || !Vm(e.playing) || e.playing && e.currentIndex === -1 || !Vm(e.shuffle) || ![
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
function Um(e) {
	let t = e?.files?.A?.ready, n = e?.files?.B?.ready;
	return !["player", "compare"].includes(e?.mode) || !["A", "B"].includes(e?.active) || !Vm(e.playing) || !Vm(e.loop) || !Vm(e.hasBoth) || !Vm(t) || !Vm(n) || e.hasBoth !== (t && n) || e.playing && !(e.active === "A" ? t : n) ? null : Object.freeze({
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
var Wm = (e) => Number.isSafeInteger(e) && e >= 0 && e <= 1e4, Gm = Object.freeze([
	"all",
	"idea",
	"lyrics",
	"generation",
	"selection",
	"mastering",
	"publisher",
	"released"
]);
function Km(e) {
	let t = e?.records;
	return !Array.isArray(t) || !Wm(t.length) || typeof e.hasRecords != "boolean" || e.hasRecords !== t.length > 0 || !t.every((e) => e && Number.isSafeInteger(e.done) && e.done >= 0 && e.total === 6 && e.done <= e.total && e.percent === Math.round(e.done / e.total * 100)) ? null : Object.freeze({
		ready: !0,
		workCount: t.length,
		finishedCount: t.filter((e) => e.done === e.total).length,
		hasSelection: t.some((t) => typeof t.id == "string" && t.id === e.selectedId)
	});
}
function qm(e) {
	let t = e?.records;
	return !Array.isArray(t) || !Wm(t.length) || typeof e.hasRecords != "boolean" || !Gm.includes(e.active) || t.length > 0 && !e.hasRecords || e.active === "all" && e.hasRecords !== t.length > 0 ? null : Object.freeze({
		ready: !0,
		visibleCount: t.length,
		hasRecords: e.hasRecords,
		filter: e.active
	});
}
function Jm(e) {
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
function Ym(e) {
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
var Xm = (e, t = 1e4) => Number.isSafeInteger(e) && e >= 0 && e <= t, Zm = (e) => typeof e == "boolean";
function Qm(e) {
	let t = e?.items;
	return !Xm(e?.total) || !Array.isArray(t) || !Xm(t.length) || t.length > e.total || !t.every((e) => e && Zm(e.hasCover)) ? null : Object.freeze({
		ready: !0,
		totalCount: e.total,
		visibleCount: t.length,
		localCoverCount: t.filter((e) => e.hasCover).length
	});
}
function $m(e) {
	let t = e?.versions;
	return !Array.isArray(t) || !Xm(t.length, 1e3) || !Zm(e.hasAudio) || !Zm(e.hasCover) || !Zm(e.hasPlayableAudio) || !Zm(e.compareOpen) || e.compareOpen && t.length < 2 || !t.every((e) => e && Zm(e.isMain) && Zm(e.isPlaying)) || t.filter((e) => e.isMain).length > 1 || t.filter((e) => e.isPlaying).length > 1 ? null : Object.freeze({
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
var eh = (e, t = 1e4) => Number.isSafeInteger(e) && e >= 0 && e <= t;
function th(e, t) {
	return !Array.isArray(e?.artists) || !eh(e.artists.length) || !eh(t) || t > e.artists.length || !eh(e.dnaCount) ? null : Object.freeze({
		ready: !0,
		artistCount: e.artists.length,
		visibleCount: t,
		dnaCount: e.dnaCount
	});
}
function nh(e) {
	let t = e?.profiles, n = e?.detail;
	return !Array.isArray(t) || !eh(t.length) || n !== null && (!n || typeof n != "object") || n !== null && (!Array.isArray(n.related) || !eh(n.related.length) || !Array.isArray(n.forbids) || !eh(n.forbids.length, 32) || !Array.isArray(n.facts) || !eh(n.facts.length, 32) || !Array.isArray(n.textFields) || !eh(n.textFields.length, 32)) ? null : Object.freeze({
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
var rh = (e) => Number.isSafeInteger(e) && e >= 0 && e <= 1e4, ih = Object.freeze([
	"genres",
	"ideas",
	"own",
	"generated",
	"prompts"
]);
function ah(e) {
	if (!e || !ih.every((t) => Array.isArray(e[t]) && rh(e[t].length) && e[t].every((e) => typeof e == "object" && !!e))) return null;
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
var oh = (e, t) => typeof e == "string" && e.length <= t;
function sh(e) {
	return !e || !oh(e.title, 100) || !oh(e.genre, 128) || !oh(e.text, 3e3) || !oh(e.hook, 240) ? null : Object.freeze({
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
function ch(e, t) {
	return !e || typeof t != "boolean" || !oh(e.title, 100) || !oh(e.genre, 128) || !oh(e.text, 1e3) ? null : Object.freeze({
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
function lh(e) {
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
function uh(e) {
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
function dh(e) {
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
var fh = /* @__PURE__ */ new Set([
	"smart",
	"rules",
	"manual"
]), ph = /* @__PURE__ */ new Set([
	"auto",
	"original",
	"tagged"
]), mh = /* @__PURE__ */ new Set([
	"minimal",
	"balanced",
	"detailed"
]), hh = [
	"melisma",
	"falsetto",
	"harmonies",
	"noWhisper",
	"noRasp"
];
function gh(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) return null;
	let t = e.prefs;
	if (!t || typeof t != "object" || Array.isArray(t) || !fh.has(t.mode) || !ph.has(t.source) || !mh.has(t.density) || !Number.isSafeInteger(t.intensity) || t.intensity < 1 || t.intensity > 5 || hh.some((e) => typeof t[e] != "boolean") || typeof e.busy != "boolean") return null;
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
var _h = Object.freeze([]), vh = Object.freeze({
	ideaCount: 0,
	promptCount: 0,
	eventCount: 0,
	revision: 0
}), yh = (e) => Number.isSafeInteger(e) && e >= 0 ? e : 0, Q = Jd("sunoboom-legacy-ui", () => {
	let e = Tm, t = /* @__PURE__ */ N(_h), n = /* @__PURE__ */ N(vh), r = /* @__PURE__ */ N(Object.freeze({
		theme: "dark",
		resolvedTheme: "dark",
		compact: !1,
		largeText: !1,
		reduceMotion: !1,
		startPage: "home",
		revision: 0
	})), i = /* @__PURE__ */ N(Object.freeze({
		query: "",
		results: 0,
		total: 0,
		mode: "",
		revision: 0
	})), a = /* @__PURE__ */ N(Object.freeze({
		genreId: null,
		tab: "overview",
		revision: 0
	})), o = /* @__PURE__ */ N(Object.freeze({
		tree: "ska",
		selected: null,
		zoom: 1,
		query: "",
		revision: 0
	}));
	function s(e) {
		let t = jm(e);
		if (!t) return !1;
		let n = i.value;
		return n.query === t.query && n.results === t.results && n.total === t.total && n.mode === t.mode ? !1 : (i.value = Object.freeze({
			...t,
			revision: n.revision + 1
		}), !0);
	}
	function c(e, t) {
		let n = Mm(e, t);
		if (!n) return !1;
		let r = a.value;
		return r.genreId === n.genreId && r.tab === n.tab ? !1 : (a.value = Object.freeze({
			...n,
			revision: r.revision + 1
		}), !0);
	}
	function l(e) {
		let t = Nm(e);
		if (!t) return !1;
		let n = o.value;
		return n.tree === t.tree && n.selected === t.selected && n.zoom === t.zoom && n.query === t.query ? !1 : (o.value = Object.freeze({
			...t,
			revision: n.revision + 1
		}), !0);
	}
	let u = /* @__PURE__ */ N(Object.freeze({
		ready: !1,
		genreId: null,
		tempo: 0,
		promptLength: 0,
		revision: 0
	})), d = /* @__PURE__ */ N(Object.freeze({
		ready: !1,
		genreCount: 0,
		tempo: 0,
		promptLength: 0,
		revision: 0
	})), f = /* @__PURE__ */ N(Object.freeze({
		ready: !1,
		mode: "studio",
		score: 0,
		checkedLength: 0,
		revision: 0
	})), p = /* @__PURE__ */ N(Object.freeze({
		ready: !1,
		blockCount: 0,
		barCount: 0,
		averageEnergy: 0,
		transitionCount: 0,
		revision: 0
	})), m = /* @__PURE__ */ N(Object.freeze({
		ready: !1,
		queueCount: 0,
		selectedPosition: 0,
		playing: !1,
		shuffle: !1,
		repeat: "off",
		revision: 0
	})), h = /* @__PURE__ */ N(Object.freeze({
		ready: !1,
		mode: "player",
		active: "A",
		readyCount: 0,
		hasBoth: !1,
		playing: !1,
		loop: !1,
		revision: 0
	})), g = /* @__PURE__ */ N(Object.freeze({
		ready: !1,
		workCount: 0,
		finishedCount: 0,
		hasSelection: !1,
		revision: 0
	})), _ = /* @__PURE__ */ N(Object.freeze({
		ready: !1,
		visibleCount: 0,
		hasRecords: !1,
		filter: "all",
		revision: 0
	})), v = /* @__PURE__ */ N(Object.freeze({
		ready: !1,
		done: 0,
		total: 6,
		percent: 0,
		materialCount: 0,
		linkedCount: 0,
		arrangementBlocks: 0,
		historyCount: 0,
		revision: 0
	})), y = /* @__PURE__ */ N(Object.freeze({
		ready: !1,
		versionCount: 0,
		linkedCount: 0,
		sectionCount: 0,
		hasAudio: !1,
		hasCover: !1,
		revision: 0
	})), b = /* @__PURE__ */ N(Object.freeze({
		ready: !1,
		totalCount: 0,
		visibleCount: 0,
		localCoverCount: 0,
		revision: 0
	})), x = /* @__PURE__ */ N(Object.freeze({
		ready: !1,
		versionCount: 0,
		hasPrimary: !1,
		hasLocalAudio: !1,
		canPlay: !1,
		hasCover: !1,
		comparisonAvailable: !1,
		comparisonOpen: !1,
		revision: 0
	})), ee = /* @__PURE__ */ N(Object.freeze({
		ready: !1,
		artistCount: 0,
		visibleCount: 0,
		dnaCount: 0,
		revision: 0
	})), S = /* @__PURE__ */ N(Object.freeze({
		ready: !1,
		profileCount: 0,
		detailOpen: !1,
		linkedTrackCount: 0,
		restrictionsCount: 0,
		factCount: 0,
		sectionCount: 0,
		revision: 0
	})), te = /* @__PURE__ */ N(Object.freeze({
		ready: !1,
		genreCount: 0,
		academyIdeaCount: 0,
		ownIdeaCount: 0,
		generatedIdeaCount: 0,
		promptCount: 0,
		totalIdeaCount: 0,
		revision: 0
	})), ne = /* @__PURE__ */ N(Object.freeze({
		ready: !1,
		titleLength: 0,
		ideaLength: 0,
		hookLength: 0,
		hasTitle: !1,
		hasGenre: !1,
		hasIdea: !1,
		hasHook: !1,
		revision: 0
	})), re = /* @__PURE__ */ N(Object.freeze({
		ready: !1,
		editing: !1,
		titleLength: 0,
		textLength: 0,
		hasTitle: !1,
		hasGenre: !1,
		hasPrompt: !1,
		revision: 0
	})), ie = /* @__PURE__ */ N(Object.freeze({
		ready: !1,
		charCount: 0,
		lineCount: 0,
		wordCount: 0,
		hasText: !1,
		revision: 0
	})), C = /* @__PURE__ */ N(Object.freeze({
		ready: !1,
		analyzed: !1,
		rowCount: 0,
		previewStanzaCount: 0,
		stressMarkCount: 0,
		suggestionCount: 0,
		revision: 0
	})), ae = /* @__PURE__ */ N(Object.freeze({
		ready: !1,
		occurrenceCount: 0,
		distinctCount: 0,
		visibleCount: 0,
		revision: 0
	})), oe = /* @__PURE__ */ N(Object.freeze({
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
	function w(e, t, n) {
		let r = t(n);
		if (!r) return !1;
		let i = e.value;
		return !Object.keys(r).every((e) => i[e] === r[e]) && (e.value = Object.freeze({
			...r,
			revision: i.revision + 1
		}), !0);
	}
	let se = (e) => w(u, Im, e), ce = (e) => w(d, Lm, e), le = (e) => w(f, Rm, e), ue = (e) => w(p, zm, e), de = (e) => w(m, Hm, e), fe = (e) => w(h, Um, e), pe = (e) => w(g, Km, e), T = (e) => w(_, qm, e), me = (e) => w(v, Jm, e), he = (e) => w(y, Ym, e), ge = (e) => w(b, Qm, e), _e = (e) => w(x, $m, e), E = (e, t) => w(ee, (e) => th(e, t), e), ve = (e) => w(S, nh, e), ye = (e) => w(te, ah, e), be = (e) => w(ne, sh, e), xe = (e, t) => w(re, (e) => ch(e, t), e), Se = (e) => w(ie, lh, e), Ce = (e) => w(C, uh, e), we = (e) => w(ae, dh, e);
	function Te() {
		let e = ae.value;
		return e.ready ? (ae.value = Object.freeze({
			ready: !1,
			occurrenceCount: 0,
			distinctCount: 0,
			visibleCount: 0,
			revision: e.revision + 1
		}), !0) : !1;
	}
	let Ee = (e) => w(oe, gh, e);
	function De() {
		let e = oe.value;
		return e.ready ? (oe.value = Object.freeze({
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
	function D(e) {
		if (!Array.isArray(e)) return !1;
		let n = Object.freeze(e.filter((e) => e && typeof e.id == "string" && e.id).map((e) => Object.freeze({
			id: e.id,
			label: e.label,
			shortLabel: e.shortLabel,
			iconHtml: e.iconHtml
		}))), r = t.value;
		return r.length === n.length && r.every((e, t) => e.id === n[t].id && e.label === n[t].label && e.shortLabel === n[t].shortLabel && e.iconHtml === n[t].iconHtml) ? !1 : (t.value = n, !0);
	}
	function Oe(e) {
		if (!e || typeof e != "object") return !1;
		let t = {
			ideaCount: yh(e.ideaCount),
			promptCount: yh(e.promptCount),
			eventCount: yh(e.eventCount)
		}, r = n.value;
		return r.ideaCount === t.ideaCount && r.promptCount === t.promptCount && r.eventCount === t.eventCount ? !1 : (n.value = Object.freeze({
			...t,
			revision: r.revision + 1
		}), !0);
	}
	function ke(e) {
		let t = Dm(e);
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
		librarySummary: te,
		ideaDraftSummary: ne,
		promptDraftSummary: re,
		poetrySourceSummary: ie,
		poetryAnalysisSummary: C,
		poetryAmbiguitySummary: ae,
		performanceTagsSummary: oe,
		publishNavigation: D,
		publishDashboardStats: Oe,
		publishAppearance: ke,
		publishAcademyCatalog: s,
		publishAcademyFocus: c,
		publishAcademyTree: l,
		publishStudioSummary: se,
		publishMixerSummary: ce,
		publishAuditorSummary: le,
		publishArrangerSummary: ue,
		publishPlayerLabSummary: de,
		publishPlayerAbSummary: fe,
		publishMasterListSummary: pe,
		publishPassportListSummary: T,
		publishMasterDetailSummary: me,
		publishPassportDetailSummary: he,
		publishSongCollectionSummary: ge,
		publishSongDetailSummary: _e,
		publishArtistManagerSummary: E,
		publishArtistDnaSummary: ve,
		publishLibrarySummary: ye,
		publishIdeaDraftSummary: be,
		publishPromptDraftSummary: xe,
		publishPoetrySourceSummary: Se,
		publishPoetryAnalysisSummary: Ce,
		publishPoetryAmbiguitySummary: we,
		clearPoetryAmbiguitySummary: Te,
		publishPerformanceTagsSummary: Ee,
		clearPerformanceTagsSummary: De
	};
}), bh = {
	key: 0,
	class: "sub",
	"data-sb-vue-idea-library-recap": ""
}, xh = { class: "section-title" }, Sh = {
	key: 0,
	class: "btn ghost small",
	"data-action": "nav",
	"data-nav": "ideas"
}, Ch = ["data-idea-collection"], wh = { class: "idea-badge" }, Th = {
	key: 0,
	class: "generator-story"
}, Eh = {
	key: 1,
	class: "song-has-lyrics"
}, Dh = { key: 0 }, Oh = {
	key: 3,
	class: "generator-detail"
}, kh = { class: "actions" }, Ah = [
	"data-action",
	"data-id",
	"data-i",
	"aria-label"
], jh = ["innerHTML"], Mh = {
	key: 1,
	class: "empty"
}, Nh = ["innerHTML"], Ph = {
	__name: "IdeaCollections",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = Q();
		return (n, r) => (B(), V(z, null, [P(t).librarySummary.ready ? (B(), V("p", bh, " Последний просмотр библиотеки: " + D(P(t).librarySummary.totalIdeaCount) + " идей ", 1)) : W("", !0), (B(!0), V(z, null, R(e.model.groups, (t) => (B(), V(z, { key: t.kind }, [H("div", xh, [H("h2", null, D(t.title) + " (" + D(t.items.length) + ")", 1), t.kind === "generated" ? (B(), V("button", Sh, "Создать идеи →")) : W("", !0)]), t.items.length ? (B(), V("div", {
			key: 0,
			class: "idea-grid",
			"data-idea-collection": t.kind
		}, [(B(!0), V(z, null, R(t.items, (n) => (B(), ra(Ar(t.kind === "academy" ? "div" : "article"), {
			key: n.key,
			class: E(["idea", { "generated-card": t.kind === "generated" }])
		}, {
			default: Hn(() => [
				H("div", wh, D(n.badge), 1),
				H("h3", null, D(n.title), 1),
				H("p", null, D(n.pitch), 1),
				t.kind === "generated" ? (B(), V("p", Th, D(n.storyLine), 1)) : W("", !0),
				t.kind === "manual" && n.lyrics ? (B(), V("p", Eh, "🎼 Текст песни сохранён · " + D(n.sunoLyrics ? "теги для Suno готовы" : "без разметки"), 1)) : W("", !0),
				n.hook || t.kind === "generated" ? (B(), ra(Ar(t.kind === "generated" ? "div" : "p"), {
					key: 2,
					class: "generator-hook"
				}, {
					default: Hn(() => [t.kind === "generated" ? (B(), V("span", Dh, "ХУК ПРИПЕВА")) : W("", !0), H("strong", null, D(n.hook), 1)]),
					_: 2
				}, 1024)) : W("", !0),
				t.kind === "generated" && n.detail ? (B(), V("p", Oh, "Твоя деталь: " + D(n.detail), 1)) : W("", !0),
				H("div", kh, [(B(!0), V(z, null, R(n.actions, (t) => (B(), V("button", {
					key: t.name,
					type: "button",
					class: E(t.className),
					"data-action": t.name,
					"data-id": n.id,
					"data-i": n.index,
					"aria-label": t.label || void 0
				}, [t.icon ? (B(), V("span", {
					key: 0,
					"aria-hidden": "true",
					innerHTML: e.model.icons[t.icon]
				}, null, 8, jh)) : W("", !0), U(D(t.text), 1)], 10, Ah))), 128))])
			]),
			_: 2
		}, 1032, ["class"]))), 128))], 8, Ch)) : (B(), V("div", Mh, [
			H("span", {
				"aria-hidden": "true",
				innerHTML: e.model.icons.music
			}, null, 8, Nh),
			H("strong", null, D(t.emptyTitle), 1),
			U(D(t.emptyText), 1)
		]))], 64))), 128))], 64));
	}
};
// src/vue/poetry/legacyIdeaCollectionsBridge.js
function Fh({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_IDEA_COLLECTIONS, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-idea-collections"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, Ph, { model: n })
	});
}
// src/vue/version-history/version-model.js
function Ih(e) {
	return /^\d{4}-\d{2}-\d{2}$/.test(String(e || "")) ? e.slice(8, 10) + "." + e.slice(5, 7) + "." + e.slice(0, 4) : "";
}
var Lh = (e) => String(e ?? "").trim().normalize("NFKC").toLocaleLowerCase("ru"), Rh = (e, t) => Lh(e).includes(t);
function zh(e) {
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
function Bh(e, { tab: t = "major", size: n = "all", search: r = "" } = {}) {
	let i = Array.isArray(e) ? e : [], a = zh(i), o = Lh(r);
	if (o) {
		let e = a.filter((e) => o === "v" + e.major || o === e.major || Rh("мажорная версия " + e.major, o)), t = i.filter((e) => Rh("v" + e[0] + " " + e[0] + " " + e[1] + " " + Ih(e[2]), o));
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
var Vh = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, Hh = {
	class: "sb-vh-vue-layout",
	"data-sb-vue-version-history": ""
}, Uh = { class: "sb-vh-header" }, Wh = [
	"aria-selected",
	"tabindex",
	"onClick"
], Gh = [
	"aria-selected",
	"tabindex",
	"onClick"
], Kh = {
	id: "sb-vh-legend",
	class: "sb-vh-legend"
}, qh = { class: "sb-vh-controls" }, Jh = {
	class: "sb-vh-search-label",
	for: "sb-vue-vh-search"
}, Yh = {
	id: "sb-vh-subcount",
	class: "sb-vh-count",
	role: "status"
}, Xh = {
	key: 0,
	class: "sb-vh-search-all"
}, Zh = {
	key: 0,
	class: "sb-vh-search-group"
}, Qh = { class: "sb-vh-release-no" }, $h = { class: "sb-vh-release-text" }, eg = { class: "sb-vh-version-range" }, tg = { class: "sb-vh-release-list" }, ng = { class: "sb-vh-release-no" }, rg = { class: "sb-vh-release-text" }, ig = { class: "sb-vh-search-meta" }, ag = ["datetime"], og = { class: "sb-vh-search-tag" }, sg = {
	key: 1,
	class: "sb-vh-empty"
}, cg = {
	key: 2,
	class: "sb-vh-release-list sb-vh-major-list"
}, lg = { class: "sb-vh-release-no" }, ug = { class: "sb-vh-release-text" }, dg = { class: "sb-vh-version-range" }, fg = {
	key: 3,
	class: "sb-vh-release-list"
}, pg = { class: "sb-vh-release-no" }, mg = { class: "sb-vh-release-text" }, hg = { class: "sb-vh-search-meta" }, gg = ["datetime"], _g = {
	key: 0,
	class: "sb-vh-search-tag"
}, vg = {
	key: 4,
	class: "sb-vh-empty"
}, yg = /*#__PURE__*/ Vh({
	__name: "VersionHistory",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ M("major"), r = /* @__PURE__ */ M("all"), i = /* @__PURE__ */ M(""), a = G(() => Bh(t.model.releases, {
			tab: n.value,
			size: r.value,
			search: i.value
		})), o = /* @__PURE__ */ M(null), s = /* @__PURE__ */ M(null), c = G(() => !!i.value.trim());
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
			e.preventDefault(), r(t[a]), On(() => {
				let e = t.length === 2 ? "#sb-vh-tabs [aria-selected=\"true\"]" : "#sb-vh-minor-tabs [aria-selected=\"true\"]";
				document.querySelector(e)?.focus();
			});
		}
		return L(() => On(() => s.value?.focus({ preventScroll: !0 }))), (t, m) => (B(), V("div", Hh, [
			H("header", Uh, [H("div", null, [
				m[6] ||= H("div", { class: "sb-vh-kicker" }, "SUNOBOOM · РАЗВИТИЕ ПРОЕКТА", -1),
				m[7] ||= H("h2", { id: "sb-vh-title" }, "История версий", -1),
				H("p", null, [
					m[4] ||= U("Текущая версия ", -1),
					H("strong", null, "v" + D(e.model.currentVersion), 1),
					m[5] ||= U(". Версии сгруппированы по номеру.", -1)
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
				class: E(["sb-vh-tab", { active: n.value === e.id }]),
				role: "tab",
				"aria-selected": n.value === e.id,
				tabindex: n.value === e.id ? 0 : -1,
				"aria-controls": "sb-vh-content",
				onClick: (t) => u(e.id)
			}, D(e.label), 11, Wh)), 64))], 32),
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
				class: E(["sb-vh-size-tab", { active: r.value === e.id }]),
				role: "tab",
				"aria-selected": r.value === e.id,
				tabindex: r.value === e.id ? 0 : -1,
				"aria-controls": "sb-vh-content",
				onClick: (t) => d(e.id)
			}, D(e.label), 11, Gh)), 64))], 32)) : W("", !0),
			H("p", Kh, D(a.value.legend), 1),
			H("div", qh, [H("label", Jh, [m[8] ||= H("span", { class: "sb-vh-visually-hidden" }, "Поиск по истории версий", -1), F(H("input", {
				id: "sb-vue-vh-search",
				"onUpdate:modelValue": m[3] ||= (e) => i.value = e,
				type: "search",
				autocomplete: "off",
				placeholder: "Поиск по всем версиям и вкладкам…",
				onInput: l
			}, null, 544), [[K, i.value]])]), H("span", Yh, D(a.value.count), 1)]),
			H("div", {
				id: "sb-vh-content",
				ref_key: "content",
				ref: o,
				class: "sb-vh-content",
				role: "tabpanel",
				"aria-labelledby": "sb-vh-tabs"
			}, [a.value.mode === "search" && (a.value.majors.length || a.value.large.length || a.value.small.length) ? (B(), V("div", Xh, [a.value.majors.length ? (B(), V("section", Zh, [H("h3", null, [m[9] ||= U("Мажорные версии ", -1), H("span", null, D(a.value.majors.length), 1)]), (B(!0), V(z, null, R(a.value.majors, (e) => (B(), V("article", {
				key: "major-" + e.major,
				class: "sb-vh-release sb-vh-major-release"
			}, [H("span", Qh, "v" + D(e.major), 1), H("div", $h, [H("p", null, "Мажорная версия " + D(e.major), 1), H("p", eg, " От v" + D(e.items[e.items.length - 1][0]) + " до v" + D(e.items[0][0]), 1)])]))), 128))])) : W("", !0), (B(!0), V(z, null, R([{
				title: "Крупные обновления",
				entries: a.value.large,
				badge: "Крупное"
			}, {
				title: "Мелкие обновления",
				entries: a.value.small,
				badge: "Мелкое"
			}], (e) => F((B(), V("section", {
				key: e.title,
				class: "sb-vh-search-group"
			}, [H("h3", null, [U(D(e.title) + " ", 1), H("span", null, D(e.entries.length), 1)]), H("div", tg, [(B(!0), V(z, null, R(e.entries, (t) => (B(), V("article", {
				key: t[0],
				class: "sb-vh-release"
			}, [H("span", ng, "v" + D(t[0]), 1), H("div", rg, [H("p", null, D(t[1]), 1), H("div", ig, [H("time", { datetime: t[2] }, D(P(Ih)(t[2])), 9, ag), H("span", og, D(e.badge), 1)])])]))), 128))])])), [[eo, e.entries.length]])), 128))])) : a.value.mode === "search" ? (B(), V("p", sg, " По запросу совпадений нет ни в одном разделе истории. ")) : a.value.mode === "major" ? (B(), V("div", cg, [(B(!0), V(z, null, R(a.value.majors, (e) => (B(), V("article", {
				key: e.major,
				class: "sb-vh-release sb-vh-major-release"
			}, [H("span", lg, "v" + D(e.major), 1), H("div", ug, [
				H("h3", null, "Мажорная версия " + D(e.major), 1),
				H("p", null, "Ветка v" + D(e.major) + ".x — " + D(e.items.length) + " сохранённых минорных обновлений.", 1),
				H("p", dg, " От v" + D(e.items[e.items.length - 1][0]) + " (" + D(P(Ih)(e.items[e.items.length - 1][2])) + ") до v" + D(e.items[0][0]) + " (" + D(P(Ih)(e.items[0][2])) + ") ", 1),
				H("button", {
					type: "button",
					class: "sb-vh-view-minors",
					onClick: f
				}, "Просмотреть минорные версии")
			])]))), 128))])) : a.value.mode === "minor" && a.value.entries.length ? (B(), V("div", fg, [(B(!0), V(z, null, R(a.value.entries, (e) => (B(), V("article", {
				key: e[0],
				class: "sb-vh-release"
			}, [H("span", pg, "v" + D(e[0]), 1), H("div", mg, [H("p", null, D(e[1]), 1), H("div", hg, [H("time", { datetime: e[2] }, D(P(Ih)(e[2])), 9, gg), r.value === "all" ? (B(), V("span", _g, D(e[3] === "large" ? "Крупное" : "Мелкое"), 1)) : W("", !0)])])]))), 128))])) : (B(), V("p", vg, "По запросу минорные версии не найдены."))], 512)
		]));
	}
}, [["__scopeId", "data-v-ce1fc81b"]]);
// src/vue/version-history/legacyVersionHistoryBridge.js
function bg({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_VERSION_HISTORY;
	return !t?.snapshot || !document.body ? () => {} : Y({
		root: document.body,
		selectTarget: (e) => e.querySelector("#sb-vue-version-history"),
		readSnapshot: () => {
			let e = t.snapshot();
			return e && Array.isArray(e.releases) ? e : null;
		},
		mount: (n, r) => e(n, yg, { model: {
			...r,
			close: t.close
		} })
	});
}
// src/vue/home/HomeDashboard.vue
var xg = ["data-sb-applied-theme"], Sg = { class: "dash-head" }, Cg = { class: "dash-actions" }, wg = { class: "dash-metrics" }, Tg = { class: "dash-metric" }, Eg = { class: "dash-metric" }, Dg = { class: "dash-metric" }, Og = { class: "dash-layout" }, kg = { class: "dash-panel" }, Ag = { class: "dash-panel-head" }, jg = { class: "dash-list" }, Mg = { class: "dash-entry-meta" }, Ng = ["data-kind", "data-id"], Pg = {
	key: 0,
	class: "dash-empty"
}, Fg = { class: "dash-panel" }, Ig = { class: "dash-panel-head" }, Lg = { class: "dash-list" }, Rg = { class: "dash-entry-meta" }, zg = { class: "dash-entry-actions" }, Bg = ["data-id"], Vg = ["data-id"], Hg = {
	key: 0,
	class: "dash-empty"
}, Ug = { class: "dash-panel dash-panel-events" }, Wg = { class: "dash-panel-head" }, Gg = { class: "dash-list" }, Kg = { class: "dash-event-date" }, qg = { class: "dash-event-main" }, Jg = { class: "dash-entry-meta" }, Yg = { key: 0 }, Xg = ["data-id"], Zg = {
	key: 0,
	class: "dash-empty"
}, Qg = {
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
		return (n, r) => (B(), V("div", {
			class: "sb-vue-dashboard",
			"data-sb-vue-dashboard": "",
			"data-sb-applied-theme": P(t).appearance.resolvedTheme
		}, [
			H("div", Sg, [
				r[9] ||= H("div", { class: "dash-eyebrow" }, "ЛИЧНАЯ МУЗЫКАЛЬНАЯ МАСТЕРСКАЯ", -1),
				r[10] ||= H("h1", null, [U("Твоя музыкальная "), H("span", null, "лаборатория.")], -1),
				H("p", null, D(e.model.profileName) + ", здесь твои последние идеи, промпты и музыкальные события — всё под рукой.", 1),
				H("div", Cg, [
					H("button", {
						type: "button",
						class: "btn primary",
						"data-action": "nav",
						"data-nav": "myideas",
						onClick: r[0] ||= J((t) => e.navigate("myideas"), ["stop"])
					}, "＋ Новая идея"),
					H("button", {
						type: "button",
						class: "btn ghost",
						"data-action": "nav",
						"data-nav": "myprompts",
						onClick: r[1] ||= J((t) => e.navigate("myprompts"), ["stop"])
					}, "＋ Новый промпт"),
					H("button", {
						type: "button",
						class: "btn ghost",
						"data-action": "nav",
						"data-nav": "events",
						onClick: r[2] ||= J((t) => e.navigate("events"), ["stop"])
					}, "＋ Событие")
				])
			]),
			H("div", wg, [
				H("div", Tg, [H("b", null, D(P(t).dashboardStats.ideaCount), 1), r[11] ||= H("span", null, "Мои идеи", -1)]),
				H("div", Eg, [H("b", null, D(P(t).dashboardStats.promptCount), 1), r[12] ||= H("span", null, "Мои промпты", -1)]),
				H("div", Dg, [H("b", null, D(P(t).dashboardStats.eventCount), 1), r[13] ||= H("span", null, "Мои события", -1)])
			]),
			H("div", Og, [
				H("section", kg, [H("header", Ag, [r[14] ||= H("div", null, [H("span", { class: "dash-kicker" }, "💡 ЛИЧНАЯ БИБЛИОТЕКА"), H("h2", null, "Мои последние идеи")], -1), H("button", {
					type: "button",
					class: "dash-view-all",
					"data-action": "nav",
					"data-nav": "myideas",
					onClick: r[3] ||= J((t) => e.navigate("myideas"), ["stop"])
				}, "Все идеи →")]), H("div", jg, [(B(!0), V(z, null, R(e.model.ideas, (e) => (B(), V("article", {
					key: e.kind + ":" + e.key,
					class: "dash-entry"
				}, [
					H("div", Mg, D(e.label), 1),
					H("h3", null, D(e.title), 1),
					H("p", null, D(String(e.pitch).slice(0, 180)), 1),
					H("button", {
						type: "button",
						class: "dash-entry-link",
						"data-action": "dash-open-idea",
						"data-kind": e.kind,
						"data-id": String(e.key)
					}, "Открыть идею →", 8, Ng)
				]))), 128)), e.model.ideas.length ? W("", !0) : (B(), V("div", Pg, [
					r[15] ||= H("span", null, "💡", -1),
					r[16] ||= H("strong", null, "Пока нет сохранённых идей", -1),
					r[17] ||= H("p", null, "Добавь идею в личном кабинете или сохрани сюжет из Idea Lab.", -1),
					H("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "nav",
						"data-nav": "myideas",
						onClick: r[4] ||= J((t) => e.navigate("myideas"), ["stop"])
					}, "Добавить идею →")
				]))])]),
				H("section", Fg, [H("header", Ig, [r[18] ||= H("div", null, [H("span", { class: "dash-kicker" }, "🎛️ SUNO STUDIO"), H("h2", null, "Мои последние промпты")], -1), H("button", {
					type: "button",
					class: "dash-view-all",
					"data-action": "nav",
					"data-nav": "myprompts",
					onClick: r[5] ||= J((t) => e.navigate("myprompts"), ["stop"])
				}, "Все промпты →")]), H("div", Lg, [(B(!0), V(z, null, R(e.model.prompts, (e) => (B(), V("article", {
					key: String(e.id),
					class: "dash-entry"
				}, [
					H("div", Rg, D(e.genre || "Suno Studio") + D(e.date ? " · " + e.date : ""), 1),
					H("h3", null, D(e.title || (e.genre || "Промпт") + " · " + (e.mood || "студия")), 1),
					H("p", null, D(String(e.text || "").slice(0, 180)), 1),
					H("div", zg, [H("button", {
						type: "button",
						class: "dash-entry-link",
						"data-action": "dash-open-prompt",
						"data-id": String(e.id)
					}, "Открыть промпт →", 8, Bg), H("button", {
						type: "button",
						class: "dash-copy",
						"data-action": "copy-saved",
						"data-id": String(e.id)
					}, "Копировать", 8, Vg)])
				]))), 128)), e.model.prompts.length ? W("", !0) : (B(), V("div", Hg, [
					r[19] ||= H("span", null, "🎛️", -1),
					r[20] ||= H("strong", null, "Пока нет сохранённых промптов", -1),
					r[21] ||= H("p", null, "Сохрани промпт в Suno Studio или создай собственный.", -1),
					H("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "nav",
						"data-nav": "myprompts",
						onClick: r[6] ||= J((t) => e.navigate("myprompts"), ["stop"])
					}, "Добавить промпт →")
				]))])]),
				H("section", Ug, [H("header", Wg, [r[22] ||= H("div", null, [H("span", { class: "dash-kicker" }, "🗓️ ТВОРЧЕСКИЙ КАЛЕНДАРЬ"), H("h2", null, "Мои события")], -1), H("button", {
					type: "button",
					class: "dash-view-all",
					"data-action": "nav",
					"data-nav": "events",
					onClick: r[7] ||= J((t) => e.navigate("events"), ["stop"])
				}, "Все события →")]), H("div", Gg, [(B(!0), V(z, null, R(e.model.events, (e) => (B(), V("article", {
					key: String(e.id),
					class: "dash-entry dash-event"
				}, [
					H("div", Kg, [H("strong", null, D(e.formattedDate), 1), H("span", null, D(e.time || "Весь день"), 1)]),
					H("div", qg, [
						H("div", Jg, D(e.typeLabel) + D(e.past ? " · Прошедшее" : ""), 1),
						H("h3", null, D(e.title), 1),
						e.notes ? (B(), V("p", Yg, D(String(e.notes).slice(0, 160)), 1)) : W("", !0)
					]),
					H("button", {
						type: "button",
						class: "dash-entry-link",
						"data-action": "dash-open-event",
						"data-id": String(e.id)
					}, "Подробнее →", 8, Xg)
				]))), 128)), e.model.events.length ? W("", !0) : (B(), V("div", Zg, [
					r[23] ||= H("span", null, "🗓️", -1),
					r[24] ||= H("strong", null, "Событий пока нет", -1),
					r[25] ||= H("p", null, "Добавь даты релизов, записи, встречи и другие планы своей музыкальной работы.", -1),
					H("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "nav",
						"data-nav": "events",
						onClick: r[8] ||= J((t) => e.navigate("events"), ["stop"])
					}, "Добавить событие →")
				]))])])
			])
		], 8, xg));
	}
}, $g = Object.freeze([
	"myideas",
	"myprompts",
	"events"
]);
function e_(e, { router: t, legacyApi: n, syncRoute: r = Em } = {}, i) {
	if (typeof e != "string" || !e || !n || typeof n.snapshot != "function") return !1;
	let a = i === "menu", o = n.snapshot()?.items, s = a ? Array.isArray(o) && o.some((t) => t?.id === e) : $g.includes(e), c = a ? n.navigate : n.navigateWorkspace;
	if (!s || typeof c != "function") return !1;
	let l = !1;
	try {
		let n = $p(e);
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
function t_(e, t = {}) {
	return e_(e, t, "menu");
}
function n_(e, t = {}) {
	return e_(e, t, "shortcut");
}
// src/vue/home/legacyHomeDashboardBridge.js
function r_({ mountVueFeature: e, sharedUi: t }) {
	let n = window.SUNOBOOM_LEGACY_DASHBOARD, r = document.getElementById("app");
	return !n?.snapshot || !r ? () => {} : Y({
		root: r,
		selectTarget: (e) => e.querySelector("#sb-vue-dashboard"),
		readSnapshot: () => n.snapshot(),
		mount: (n, r) => (t.publishDashboardStats(r), e(n, Qg, {
			model: r,
			navigate: (e) => n_(e, {
				router: Zp,
				legacyApi: window.SUNOBOOM_LEGACY_NAV
			})
		}))
	});
}
// src/vue/account/PromptCollection.vue
var i_ = {
	key: 0,
	class: "sub",
	"data-sb-vue-prompt-library-recap": ""
}, a_ = { class: "section-title" }, o_ = {
	key: 1,
	class: "saved-list"
}, s_ = { class: "row" }, c_ = { class: "actions" }, l_ = ["data-id"], u_ = ["innerHTML"], d_ = ["data-id"], f_ = ["data-id", "aria-label"], p_ = ["innerHTML"], m_ = { class: "sub" }, h_ = {
	key: 2,
	class: "empty"
}, g_ = ["innerHTML"], __ = {
	__name: "PromptCollection",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = Q();
		return (n, r) => (B(), V(z, null, [
			P(t).librarySummary.ready ? (B(), V("p", i_, " Последний просмотр библиотеки: " + D(P(t).librarySummary.promptCount) + " промптов ", 1)) : W("", !0),
			H("div", a_, [H("h2", null, "Сохранённые промпты (" + D(e.model.items.length) + ")", 1)]),
			e.model.items.length ? (B(), V("div", o_, [(B(!0), V(z, null, R(e.model.items, (t) => (B(), V("article", {
				key: t.id,
				class: "saved-item"
			}, [
				H("div", s_, [H("h3", null, D(t.title), 1), H("div", c_, [
					H("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "copy-saved",
						"data-id": t.id
					}, [H("span", {
						"aria-hidden": "true",
						innerHTML: e.model.icons.copy
					}, null, 8, u_), r[0] ||= U(" Копировать", -1)], 8, l_),
					H("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "edit-manual-prompt",
						"data-id": t.id
					}, "Изменить", 8, d_),
					H("button", {
						type: "button",
						class: "btn danger small",
						"data-action": "delete-saved",
						"data-id": t.id,
						"aria-label": "Удалить промпт «" + t.title + "»"
					}, [H("span", {
						"aria-hidden": "true",
						innerHTML: e.model.icons.trash
					}, null, 8, p_)], 8, f_)
				])]),
				H("p", null, D(t.text), 1),
				H("span", m_, D(t.genre) + " · " + D(t.date), 1)
			]))), 128))])) : (B(), V("div", h_, [
				H("span", {
					"aria-hidden": "true",
					innerHTML: e.model.icons.music
				}, null, 8, g_),
				r[1] ||= H("strong", null, "Промптов пока нет", -1),
				r[2] ||= U("Сохрани первый здесь или в Suno Studio.", -1)
			]))
		], 64));
	}
};
// src/vue/account/legacyPromptCollectionBridge.js
function v_({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PROMPT_LIST, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-prompts-list"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, __, { model: n })
	});
}
// src/vue/account/PromptEditor.vue
var y_ = {
	key: 0,
	class: "sub",
	"data-sb-vue-last-idea-draft": ""
}, b_ = { class: "field" }, x_ = { class: "field" }, S_ = ["value"], C_ = { class: "field" }, w_ = {
	id: "sb-prompt-char-count",
	class: "sub"
}, T_ = {
	__name: "PromptEditor",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ k({ ...t.initial.values }), r = G(() => n.text.length), i = Q();
		return I(() => [
			n.title,
			n.genre,
			n.text,
			t.initial.editing
		], () => i.publishPromptDraftSummary(n, t.initial.editing), { immediate: !0 }), (t, a) => (B(), V(z, null, [
			H("h3", null, D(e.initial.editing ? "Редактирование промпта" : "Новый промпт для Suno"), 1),
			P(i).ideaDraftSummary.ready ? (B(), V("p", y_, "Последний открытый черновик идеи: " + D(P(i).ideaDraftSummary.ideaLength) + " / 3000 символов", 1)) : W("", !0),
			H("div", b_, [a[3] ||= H("label", { for: "custom-prompt-title" }, "Название", -1), F(H("input", {
				id: "custom-prompt-title",
				"onUpdate:modelValue": a[0] ||= (e) => n.title = e,
				maxlength: "100",
				placeholder: "Например, Романтичный афро-поп"
			}, null, 512), [[K, n.title]])]),
			H("div", x_, [a[4] ||= H("label", { for: "custom-prompt-genre" }, "Жанр", -1), F(H("select", {
				id: "custom-prompt-genre",
				"onUpdate:modelValue": a[1] ||= (e) => n.genre = e
			}, [(B(!0), V(z, null, R(e.initial.genres, (e) => (B(), V("option", {
				key: e.id,
				value: e.id
			}, D(e.name), 9, S_))), 128))], 512), [[q, n.genre]])]),
			H("div", C_, [
				a[5] ||= H("label", { for: "custom-prompt-text" }, "Текст промпта (до 1000 символов)", -1),
				F(H("textarea", {
					id: "custom-prompt-text",
					"onUpdate:modelValue": a[2] ||= (e) => n.text = e,
					rows: "7",
					maxlength: "1000",
					"aria-describedby": "sb-prompt-char-count",
					placeholder: "Modern Russian-language afropop, 105 BPM, clean vocals, groovy bass..."
				}, null, 512), [[K, n.text]]),
				H("span", w_, D(r.value) + " / 1000 символов", 1)
			])
		], 64));
	}
};
// src/vue/account/legacyPromptEditorBridge.js
function E_({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PROMPT_EDITOR, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-prompt-form"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, T_, { initial: n })
	});
}
// src/vue/account/LibraryCollection.vue
var D_ = { class: "account-back" }, O_ = {
	type: "button",
	class: "btn ghost small",
	"data-action": "workspace-back"
}, k_ = {
	key: 0,
	class: "sb-dna-summary",
	"data-sb-vue-library-summary": ""
}, A_ = { class: "section-title" }, j_ = {
	key: 1,
	class: "genre-grid"
}, M_ = ["data-id"], N_ = { class: "genre-content" }, P_ = { class: "kicker" }, F_ = { class: "foot" }, I_ = {
	key: 2,
	class: "empty"
}, L_ = { class: "section-title" }, R_ = {
	key: 3,
	class: "idea-grid"
}, z_ = { class: "idea-badge" }, B_ = { class: "actions" }, V_ = ["data-id", "data-i"], H_ = ["data-id", "data-i"], U_ = {
	key: 4,
	class: "empty"
}, W_ = { class: "section-title" }, G_ = {
	key: 5,
	class: "idea-grid"
}, K_ = { class: "idea-badge" }, q_ = ["data-id"], J_ = {
	key: 6,
	class: "empty"
}, Y_ = { class: "section-title" }, X_ = {
	key: 7,
	class: "idea-grid"
}, Z_ = { class: "idea-badge" }, Q_ = { class: "generator-story" }, $_ = { class: "generator-hook" }, ev = {
	key: 0,
	class: "generator-detail"
}, tv = { class: "actions" }, nv = ["data-id"], rv = ["data-id"], iv = ["data-id", "aria-label"], av = {
	key: 8,
	class: "empty"
}, ov = { class: "section-title" }, sv = {
	key: 9,
	class: "saved-list"
}, cv = { class: "row" }, lv = { class: "actions" }, uv = ["data-id"], dv = ["data-id", "aria-label"], fv = { class: "sub" }, pv = {
	key: 10,
	class: "empty"
}, mv = {
	__name: "LibraryCollection",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = Q();
		return I(() => t.model, (e) => n.publishLibrarySummary(e), { immediate: !0 }), (t, r) => (B(), V(z, null, [
			H("div", D_, [H("button", O_, D(e.model.backLabel), 1)]),
			r[14] ||= H("header", { class: "heading" }, [H("h1", null, "Моя библиотека"), H("p", null, "Любимые жанры, идеи и промпты. Сохраняются локально в этом браузере.")], -1),
			P(n).librarySummary.ready ? (B(), V("div", k_, [
				H("div", null, [H("b", null, D(P(n).librarySummary.genreCount), 1), r[0] ||= H("span", null, "Избранных жанров", -1)]),
				H("div", null, [H("b", null, D(P(n).librarySummary.totalIdeaCount), 1), r[1] ||= H("span", null, "Идей в библиотеке", -1)]),
				H("div", null, [H("b", null, D(P(n).librarySummary.promptCount), 1), r[2] ||= H("span", null, "Сохранённых промптов", -1)])
			])) : W("", !0),
			H("div", A_, [H("h2", null, "Избранные жанры (" + D(e.model.genres.length) + ")", 1)]),
			e.model.genres.length ? (B(), V("div", j_, [(B(!0), V(z, null, R(e.model.genres, (e) => (B(), V("button", {
				key: e.id,
				type: "button",
				class: "genre-card",
				style: T({ "--accent": e.color }),
				"data-action": "genre",
				"data-id": e.id
			}, [r[4] ||= H("div", { class: "art" }, null, -1), H("div", N_, [H("div", null, [
				H("div", P_, D(e.family) + " · " + D(e.bpm[0]) + "–" + D(e.bpm[1]) + " BPM", 1),
				H("h3", null, D(e.name), 1),
				H("p", null, D(e.tagline), 1)
			]), H("div", F_, [H("span", null, D(e.era), 1), r[3] ||= H("span", { style: { color: "#ffacd9" } }, "Открыть →", -1)])])], 12, M_))), 128))])) : (B(), V("div", I_, [...r[5] ||= [H("strong", null, "Пока нет избранных жанров", -1), U("Добавляй их в карточках Академии.", -1)]])),
			H("div", L_, [H("h2", null, "Сохранённые идеи (" + D(e.model.ideas.length) + ")", 1)]),
			e.model.ideas.length ? (B(), V("div", R_, [(B(!0), V(z, null, R(e.model.ideas, (e) => (B(), V("article", {
				key: e.key,
				class: "idea"
			}, [
				H("div", z_, D(e.genre) + " · " + D(e.mood), 1),
				H("h3", null, D(e.title), 1),
				H("p", null, D(e.pitch), 1),
				H("div", B_, [H("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "idea-use",
					"data-id": e.genreId,
					"data-i": e.index
				}, "В студию", 8, V_), H("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "idea-save",
					"data-id": e.genreId,
					"data-i": e.index
				}, "Сохранено", 8, H_)])
			]))), 128))])) : (B(), V("div", U_, [...r[6] ||= [H("strong", null, "Нет сохранённых идей", -1), U("Найди интересный сюжет и нажми «Сохранить».", -1)]])),
			H("div", W_, [H("h2", null, "Мои собственные идеи (" + D(e.model.own.length) + ")", 1), r[7] ||= H("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "nav",
				"data-nav": "myideas"
			}, "Добавить или изменить →", -1)]),
			e.model.own.length ? (B(), V("div", G_, [(B(!0), V(z, null, R(e.model.own, (e) => (B(), V("article", {
				key: e.id,
				class: "idea"
			}, [
				H("div", K_, D(e.genre), 1),
				H("h3", null, D(e.title), 1),
				H("p", null, D(e.pitch), 1),
				H("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "edit-manual-idea",
					"data-id": e.id
				}, "Открыть запись →", 8, q_)
			]))), 128))])) : (B(), V("div", J_, [...r[8] ||= [H("strong", null, "Пока нет своих идей", -1), U("Добавь их в личном кабинете.", -1)]])),
			H("div", Y_, [H("h2", null, "Идеи из генератора (" + D(e.model.generated.length) + ")", 1), r[9] ||= H("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "nav",
				"data-nav": "ideas"
			}, "＋ Создать ещё", -1)]),
			e.model.generated.length ? (B(), V("div", X_, [(B(!0), V(z, null, R(e.model.generated, (e) => (B(), V("article", {
				key: e.id,
				class: "idea generated-card"
			}, [
				H("div", Z_, D(e.genre) + " · " + D(e.topic), 1),
				H("h3", null, D(e.title), 1),
				H("p", null, D(e.pitch), 1),
				H("p", Q_, D(e.storyLine), 1),
				H("div", $_, [r[10] ||= H("span", null, "ХУК ПРИПЕВА", -1), H("strong", null, D(e.hook), 1)]),
				e.detail ? (B(), V("p", ev, "Твоя деталь: " + D(e.detail), 1)) : W("", !0),
				H("div", tv, [
					H("button", {
						type: "button",
						class: "btn primary small",
						"data-action": "generated-use",
						"data-id": e.id
					}, "В Suno Studio", 8, nv),
					H("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "generated-copy",
						"data-id": e.id
					}, "Копировать", 8, rv),
					H("button", {
						type: "button",
						class: "btn danger small",
						"data-action": "generated-delete",
						"data-id": e.id,
						"aria-label": "Удалить идею «" + e.title + "»"
					}, "Удалить", 8, iv)
				])
			]))), 128))])) : (B(), V("div", av, [...r[11] ||= [H("strong", null, "Сохранённых новых идей нет", -1), U("Создай идеи в генераторе и нажми «Сохранить».", -1)]])),
			H("div", ov, [H("h2", null, "Мои промпты (" + D(e.model.prompts.length) + ")", 1), r[12] ||= H("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "nav",
				"data-nav": "myprompts"
			}, "Добавить или изменить →", -1)]),
			e.model.prompts.length ? (B(), V("div", sv, [(B(!0), V(z, null, R(e.model.prompts, (e) => (B(), V("article", {
				key: e.id,
				class: "saved-item"
			}, [
				H("div", cv, [H("h3", null, D(e.title), 1), H("div", lv, [H("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "copy-saved",
					"data-id": e.id
				}, "Копировать", 8, uv), H("button", {
					type: "button",
					class: "btn danger small",
					"data-action": "delete-saved",
					"data-id": e.id,
					"aria-label": "Удалить промпт «" + e.title + "»"
				}, "Удалить", 8, dv)])]),
				H("p", null, D(e.text), 1),
				H("span", fv, D(e.date), 1)
			]))), 128))])) : (B(), V("div", pv, [...r[13] ||= [H("strong", null, "Промптов пока нет", -1), U("Создай первый в Suno Studio и сохрани в библиотеке.", -1)]]))
		], 64));
	}
};
// src/vue/account/legacyLibraryBridge.js
function hv({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_LIBRARY, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-library-collection"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, mv, { model: n })
	});
}
// src/vue/account/SongCards.vue
var gv = {
	key: 0,
	class: "sbsong-artist-hint",
	"data-sb-vue-song-collection-recap": ""
}, _v = {
	key: 1,
	class: "sbsong-grid"
}, vv = ["data-id", "aria-label"], yv = ["data-sbsong-cover"], bv = ["src"], xv = { class: "sbsong-card-text" }, Sv = { class: "sbsong-card-flags" }, Cv = { class: "sbsong-card-actions" }, wv = ["data-id"], Tv = ["data-id"], Ev = ["data-id"], Dv = {
	key: 2,
	class: "sbsong-empty"
}, Ov = {
	__name: "SongCards",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ M(t.api.snapshot() || {
			items: [],
			total: 0
		}), r = Q();
		I(n, (e) => r.publishSongCollectionSummary(e), { immediate: !0 });
		function i() {
			let e = t.api.snapshot();
			e && (n.value = e, On(() => t.api.hydrateCovers()));
		}
		return L(() => {
			window.addEventListener("sunoboom:songs-search", i), On(() => t.api.hydrateCovers());
		}), Sr(() => window.removeEventListener("sunoboom:songs-search", i)), (e, t) => (B(), V(z, null, [P(r).songCollectionSummary.ready ? (B(), V("p", gv, " Найдено " + D(P(r).songCollectionSummary.visibleCount) + " из " + D(P(r).songCollectionSummary.totalCount) + " песен ", 1)) : W("", !0), n.value.items.length ? (B(), V("div", _v, [(B(!0), V(z, null, R(n.value.items, (e) => (B(), V("article", {
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
		}, null, 8, yv)) : e.coverUrl ? (B(), V("img", {
			key: 1,
			alt: "",
			src: e.coverUrl,
			style: { display: "block" },
			loading: "lazy"
		}, null, 8, bv)) : W("", !0), t[0] ||= H("span", {
			class: "sbsong-no-cover",
			"aria-hidden": "true"
		}, "♫", -1)], 8, vv), H("div", xv, [
			H("small", null, D(e.genre), 1),
			H("h3", null, D(e.title), 1),
			H("p", null, D(e.artist), 1),
			H("div", Sv, [H("span", null, D(e.status), 1)]),
			H("div", Cv, [
				H("button", {
					type: "button",
					"data-sbsong-action": "open",
					"data-id": e.id
				}, "Открыть", 8, wv),
				H("button", {
					type: "button",
					"data-sbsong-action": "edit",
					"data-id": e.id
				}, "Изменить", 8, Tv),
				H("button", {
					type: "button",
					"data-sbsong-action": "share",
					"data-id": e.id
				}, "Поделиться", 8, Ev)
			])
		])]))), 128))])) : (B(), V("div", Dv, D(n.value.total ? "По этому запросу песен нет." : "Песен пока нет. Добавь первую карточку и загрузи аудиофайл."), 1))], 64));
	}
};
// src/vue/account/legacySongCardsBridge.js
function kv({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SONG_CARDS, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-song-cards"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, Ov, { api: t })
	});
}
// src/vue/account/SongVersions.vue
var Av = {
	class: "sbsong-versions",
	"data-sb-vue-song-versions": "",
	"aria-label": "Версии записи"
}, jv = { class: "sbsong-version-heading" }, Mv = { key: 0 }, Nv = { class: "sbsong-version-row-head" }, Pv = {
	key: 0,
	class: "sbsong-version-main-badge"
}, Fv = {
	key: 1,
	class: "sbsong-version-play-badge"
}, Iv = { class: "sbsong-version-actions" }, Lv = ["data-version-id"], Rv = ["data-version-id"], zv = ["data-id", "data-version-id"], Bv = ["data-version-id"], Vv = { class: "sbsong-version-notes" }, Hv = ["data-sbsong-version-title", "value"], Uv = ["data-sbsong-version-note", "value"], Wv = ["data-version-id"], Gv = { key: 0 }, Kv = {
	type: "button",
	class: "sbsong-compare-toggle",
	"data-sbsong-action": "compare-toggle"
}, qv = {
	key: 0,
	class: "sbsong-compare-grid"
}, Jv = ["value"], Yv = ["value"], Xv = ["value"], Zv = ["value"], Qv = {
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
		return (t, n) => (B(), V("section", Av, [
			H("div", jv, [H("h3", null, "Версии записи (" + D(e.versions.length) + ")", 1), e.playingLabel ? (B(), V("small", Mv, "В основном плеере: " + D(e.playingLabel), 1)) : W("", !0)]),
			(B(!0), V(z, null, R(e.versions, (t) => (B(), V("article", {
				key: t.id,
				class: "sbsong-version-row"
			}, [
				H("div", Nv, [H("div", null, [
					H("strong", null, D(t.label), 1),
					t.isMain ? (B(), V("span", Pv, "★ Основная")) : W("", !0),
					t.isPlaying ? (B(), V("span", Fv, "♫ Выбрана")) : W("", !0),
					H("small", null, D(t.fileName) + " · " + D(t.sizeLabel) + " · " + D(t.addedDate), 1)
				])]),
				H("div", Iv, [
					H("button", {
						type: "button",
						"data-sbsong-action": "version-play",
						"data-version-id": t.id
					}, "Выбрать для плеера", 8, Lv),
					t.isMain ? W("", !0) : (B(), V("button", {
						key: 0,
						type: "button",
						"data-sbsong-action": "version-main",
						"data-version-id": t.id
					}, "★ Сделать основной", 8, Rv)),
					H("button", {
						type: "button",
						"data-sbsong-action": "share-file",
						"data-id": e.songId,
						"data-version-id": t.id
					}, "Сохранить / отправить", 8, zv),
					H("button", {
						type: "button",
						class: "sbsong-version-danger",
						"data-sbsong-action": "version-remove",
						"data-version-id": t.id
					}, "Удалить дубль", 8, Bv)
				]),
				H("details", Vv, [
					n[2] ||= H("summary", null, "Название и заметки", -1),
					H("label", null, [n[0] ||= U("Название версии ", -1), H("input", {
						type: "text",
						maxlength: "90",
						"data-sbsong-version-title": t.id,
						value: t.label
					}, null, 8, Hv)]),
					H("label", null, [n[1] ||= U("Чем отличается этот дубль ", -1), H("textarea", {
						maxlength: "800",
						rows: "2",
						"data-sbsong-version-note": t.id,
						value: t.notes,
						placeholder: "Например: более плотный припев, удачный вокал..."
					}, null, 8, Uv)]),
					H("button", {
						type: "button",
						"data-sbsong-action": "version-save",
						"data-version-id": t.id
					}, "Сохранить заметки", 8, Wv)
				])
			]))), 128)),
			e.versions.length ? W("", !0) : (B(), V("p", Gv, "Пока нет локальных версий. Загрузи первую запись в MP3, M4A или WAV.")),
			e.versions.length > 1 ? (B(), V(z, { key: 1 }, [H("button", Kv, D(e.compareOpen ? "Скрыть сравнение A/B" : "Сравнить версии A/B"), 1), e.compareOpen ? (B(), V("div", qv, [
				H("label", null, [
					n[3] ||= U("Версия A ", -1),
					H("select", {
						id: "sbsong-compare-a",
						value: e.compareAId
					}, [(B(!0), V(z, null, R(e.versions, (e) => (B(), V("option", {
						key: e.id,
						value: e.id
					}, D(e.label), 9, Yv))), 128))], 8, Jv),
					n[4] ||= H("audio", {
						id: "sbsong-ab-a",
						controls: "",
						preload: "metadata"
					}, null, -1)
				]),
				H("label", null, [
					n[5] ||= U("Версия B ", -1),
					H("select", {
						id: "sbsong-compare-b",
						value: e.compareBId
					}, [(B(!0), V(z, null, R(e.versions, (e) => (B(), V("option", {
						key: e.id,
						value: e.id
					}, D(e.label), 9, Zv))), 128))], 8, Xv),
					n[6] ||= H("audio", {
						id: "sbsong-ab-b",
						controls: "",
						preload: "metadata"
					}, null, -1)
				]),
				n[7] ||= H("p", null, "Два независимых плеера для сравнения дублей. Воспроизведение запускается вручную.", -1)
			])) : W("", !0)], 64)) : W("", !0),
			n[8] ||= fa("<div class=\"sbsong-version-add\"><h4>+ Добавить новую версию</h4><label>Аудиофайл (MP3, M4A, WAV и другие) <input id=\"sbsong-version-file\" type=\"file\" accept=\"audio/*,.mp3,.m4a,.wav,.wave,.flac,.ogg,.opus,.aac\"></label><label>Название дубля <input id=\"sbsong-new-version-title\" maxlength=\"90\" type=\"text\" placeholder=\"Например: Версия с новым припевом\"></label><label>Заметка <textarea id=\"sbsong-new-version-notes\" maxlength=\"800\" rows=\"2\" placeholder=\"Что изменилось в этой записи?\"></textarea></label><button type=\"button\" class=\"sbsong-main-btn\" data-sbsong-action=\"version-add\" id=\"sbsong-version-submit\">Сохранить новую версию</button><p>WAV — до 500 МБ, другие форматы — до 150 МБ. Каждая версия хранится отдельно в браузере этого устройства. Старые записи не перезаписываются.</p></div>", 1)
		]));
	}
}, $v = { class: "sbsong-detail" }, ey = { class: "sbsong-subhead" }, ty = {
	key: 0,
	class: "sbsong-artist-hint",
	"data-sb-vue-song-detail-recap": ""
}, ny = { class: "sbsong-detail-layout" }, ry = { class: "sbsong-detail-cover" }, iy = ["data-sbsong-cover", "alt"], ay = ["src", "alt"], oy = {
	key: 2,
	class: "sbsong-no-cover",
	"aria-hidden": "true"
}, sy = { class: "sbsong-detail-artist" }, cy = { class: "sbsong-detail-tags" }, ly = { key: 0 }, uy = { key: 1 }, dy = {
	key: 0,
	class: "sbsong-detail-description"
}, fy = {
	class: "sbsong-audio-box",
	id: "sbsong-audio-box"
}, py = {
	key: 0,
	controls: "",
	preload: "metadata",
	id: "sbsong-audio-player"
}, my = { key: 1 }, hy = { class: "sbsong-detail-actions" }, gy = ["data-id"], _y = ["data-id"], vy = ["href"], yy = ["data-id"], by = ["data-id"], xy = ["data-id"], Sy = {
	key: 1,
	class: "sbsong-delete-confirm"
}, Cy = ["data-id"], wy = {
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
		return I(() => t.model, (e) => n.publishSongDetailSummary(e), { immediate: !0 }), L(() => {
			On(() => t.api.hydrateMedia());
		}), (t, r) => (B(), V("section", $v, [
			H("div", ey, [H("h2", null, D(e.model.title), 1), r[0] ||= H("button", {
				type: "button",
				"data-sbsong-action": "close-detail"
			}, "Закрыть ×", -1)]),
			P(n).songCollectionSummary.ready ? (B(), V("p", ty, " В личной коллекции: " + D(P(n).songCollectionSummary.totalCount) + " песен ", 1)) : W("", !0),
			H("div", ny, [H("div", ry, [e.model.hasCover ? (B(), V("img", {
				key: 0,
				"data-sbsong-cover": e.model.id,
				alt: "Обложка песни " + e.model.title
			}, null, 8, iy)) : e.model.coverUrl ? (B(), V("img", {
				key: 1,
				src: e.model.coverUrl,
				alt: "Обложка песни " + e.model.title,
				style: { display: "block" }
			}, null, 8, ay)) : (B(), V("span", oy, "♫"))]), H("div", null, [
				H("p", sy, D(e.model.artist), 1),
				H("p", cy, [e.model.genre ? (B(), V("span", ly, D(e.model.genre), 1)) : W("", !0), e.model.album ? (B(), V("span", uy, D(e.model.album), 1)) : W("", !0)]),
				e.model.description ? (B(), V("p", dy, D(e.model.description), 1)) : W("", !0),
				H("div", fy, [e.model.hasPlayableAudio ? (B(), V("audio", py)) : (B(), V("p", my, "Аудио ещё не добавлено. Добавь первую версию в этой карточке."))]),
				ca(Qv, {
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
				H("div", hy, [
					H("button", {
						type: "button",
						class: "sbsong-main-btn",
						"data-sbsong-action": "share",
						"data-id": e.model.id
					}, "🔗 Поделиться ссылкой", 8, gy),
					e.model.hasAudio ? (B(), V("button", {
						key: 0,
						type: "button",
						"data-sbsong-action": "share-file",
						"data-id": e.model.id
					}, "Отправить аудиофайл", 8, _y)) : W("", !0),
					e.model.listenUrl ? (B(), V("a", {
						key: 1,
						href: e.model.listenUrl,
						target: "_blank",
						rel: "noopener noreferrer"
					}, "Открыть публичную запись ↗", 8, vy)) : W("", !0),
					H("button", {
						type: "button",
						"data-sbsong-action": "producer",
						"data-id": e.model.id
					}, "🎛 Мастер", 8, yy),
					H("button", {
						type: "button",
						"data-sbsong-action": "edit",
						"data-id": e.model.id
					}, "Изменить", 8, by),
					H("button", {
						type: "button",
						class: "sbsong-danger",
						"data-sbsong-action": "delete",
						"data-id": e.model.id
					}, "Удалить", 8, xy)
				]),
				e.model.confirmDelete ? (B(), V("div", Sy, [
					r[1] ||= H("strong", null, "Удалить карточку вместе с локальными файлами?", -1),
					H("button", {
						type: "button",
						"data-sbsong-action": "delete-confirm",
						"data-id": e.model.id
					}, "Да, удалить", 8, Cy),
					r[2] ||= H("button", {
						type: "button",
						"data-sbsong-action": "delete-cancel"
					}, "Отмена", -1)
				])) : W("", !0)
			])])
		]));
	}
};
// src/vue/account/legacySongDetailBridge.js
function Ty({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SONG_DETAIL, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-song-detail"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, wy, {
			api: t,
			model: r
		})
	});
}
// src/vue/account/SongEditor.vue
var Ey = {
	id: "sbsong-form",
	class: "sbsong-form-panel"
}, Dy = { class: "sbsong-subhead" }, Oy = {
	id: "sbsong-save-form",
	class: "sbsong-form"
}, ky = { class: "sbsong-form-columns" }, Ay = { class: "sbsong-field" }, jy = { class: "sbsong-artist-field" }, My = {
	class: "sbsong-field",
	for: "sbsong-artist-input"
}, Ny = ["aria-expanded"], Py = {
	id: "sbsong-artist-options",
	class: "sbsong-artist-options",
	role: "listbox",
	"aria-label": "Список артистов"
}, Fy = ["onClick"], Iy = {
	key: 0,
	class: "sbsong-artist-hint"
}, Ly = {
	key: 1,
	class: "sbsong-artist-hint"
}, Ry = { class: "sbsong-genre-field" }, zy = {
	class: "sbsong-field",
	for: "sbsong-genre-input"
}, By = ["aria-expanded"], Vy = ["aria-expanded"], Hy = {
	id: "sbsong-genre-options",
	class: "sbsong-genre-options",
	role: "region",
	"aria-label": "Выбор жанра из Академии"
}, Uy = { class: "sbsong-genre-picker-head" }, Wy = ["value"], Gy = {
	id: "sbsong-genre-results",
	class: "sbsong-genre-results",
	role: "listbox",
	"aria-label": "Жанры и поджанры"
}, Ky = ["aria-label"], qy = { class: "sbsong-genre-group-title" }, Jy = ["onClick"], Yy = {
	key: 0,
	class: "sbsong-genre-hint"
}, Xy = { class: "sbsong-field" }, Zy = { class: "sbsong-field" }, Qy = { class: "sbsong-form-columns" }, $y = { class: "sbsong-field" }, eb = {
	class: "sbsong-cover-auto",
	"aria-live": "polite"
}, tb = { id: "sbsong-cover-status" }, nb = { class: "sbsong-form-columns" }, rb = { class: "sbsong-field" }, ib = { class: "sbsong-field" }, ab = { class: "sbsong-field" }, ob = {
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
		let t = e, n = /* @__PURE__ */ k({
			title: t.model.title,
			artist: t.model.artist,
			genre: t.model.genre,
			album: t.model.album,
			description: t.model.description,
			audioUrl: t.model.audioUrl,
			listenUrl: t.model.listenUrl,
			coverUrl: t.model.coverUrl
		}), r = /* @__PURE__ */ M(!1), i = /* @__PURE__ */ M(!1), a = /* @__PURE__ */ M(t.api.artistChoices()), o = /* @__PURE__ */ M(!1), s = /* @__PURE__ */ M(!1), c = /* @__PURE__ */ M("Все"), l = /* @__PURE__ */ M(t.api.genreChoices()), u = /* @__PURE__ */ M(t.api.genreFamilies()), d = (e) => String(e || "").normalize("NFKC").toLocaleLowerCase("ru"), f = G(() => {
			let e = d(n.artist);
			return (i.value ? a.value : a.value.filter((t) => d(t.name).includes(e))).slice(0, 40);
		}), p = G(() => i.value ? a.value.length > 40 : a.value.filter((e) => d(e.name).includes(d(n.artist))).length > 40), m = G(() => {
			let e = s.value ? "" : d(n.genre.trim());
			return l.value.filter((t) => (c.value === "Все" || t.family === c.value) && (!e || d(t.name + " " + t.family).includes(e)));
		}), h = G(() => u.value.map((e) => ({
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
			document.addEventListener("pointerdown", x), On(() => t.api.hydrateCover());
		}), Sr(() => document.removeEventListener("pointerdown", x)), (t, d) => (B(), V("section", Ey, [H("div", Dy, [H("h2", null, D(e.model.editId ? "Изменить песню" : "Новая песня"), 1), d[16] ||= H("button", {
			type: "button",
			"data-sbsong-action": "cancel"
		}, "Закрыть ×", -1)]), H("form", Oy, [
			H("div", ky, [
				H("label", Ay, [d[17] ||= H("span", null, "Название *", -1), F(H("input", {
					"onUpdate:modelValue": d[0] ||= (e) => n.title = e,
					type: "text",
					name: "title",
					maxlength: "120",
					placeholder: "Название песни"
				}, null, 512), [[K, n.title]])]),
				H("div", jy, [
					H("label", My, [d[18] ||= H("span", null, "Исполнитель / проект", -1), F(H("input", {
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
					}, null, 40, Ny), [[K, n.artist]])]),
					H("div", { class: "sbsong-artist-shortcuts" }, [H("button", {
						type: "button",
						onClick: y
					}, "▾ Выбрать из списка"), H("button", {
						type: "button",
						onClick: g
					}, "+ Сохранить артиста")]),
					F(H("div", Py, [
						(B(!0), V(z, null, R(f.value, (e) => (B(), V("button", {
							key: e.name,
							type: "button",
							role: "option",
							class: "sbsong-artist-option",
							onClick: (t) => _(e.name)
						}, [H("strong", null, D(e.name), 1), H("small", null, D(e.origin), 1)], 8, Fy))), 128)),
						p.value ? (B(), V("p", Iy, "Уточни поиск, чтобы увидеть остальные варианты.")) : W("", !0),
						f.value.length ? W("", !0) : (B(), V("p", Ly, D(a.value.length ? "Совпадений нет. Нового артиста можно сохранить кнопкой выше." : "Список пуст. Введи имя и сохрани первого артиста."), 1))
					], 512), [[eo, r.value]])
				]),
				H("div", Ry, [
					H("label", zy, [d[19] ||= H("span", null, "Жанр", -1), F(H("input", {
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
					}, null, 40, By), [[K, n.genre]])]),
					H("button", {
						type: "button",
						class: "sbsong-genre-toggle",
						"aria-controls": "sbsong-genre-options",
						"aria-expanded": String(o.value),
						onClick: b
					}, "▾ Выбрать из Академии", 8, Vy),
					F(H("div", Hy, [H("div", Uy, [
						d[21] ||= H("label", { for: "sbsong-genre-family" }, "Направление", -1),
						F(H("select", {
							id: "sbsong-genre-family",
							"onUpdate:modelValue": d[9] ||= (e) => c.value = e,
							"aria-label": "Фильтр по направлению",
							onChange: d[10] ||= (e) => s.value = !0
						}, [d[20] ||= H("option", { value: "Все" }, "Все направления", -1), (B(!0), V(z, null, R(u.value, (e) => (B(), V("option", {
							key: e,
							value: e
						}, D(e), 9, Wy))), 128))], 544), [[q, c.value]]),
						H("small", null, D(m.value.length) + " из " + D(l.value.length), 1)
					]), H("div", Gy, [(B(!0), V(z, null, R(h.value, (e) => (B(), V("div", {
						key: e.name,
						class: "sbsong-genre-group",
						role: "group",
						"aria-label": e.name
					}, [H("div", qy, [U(D(e.name) + " ", 1), H("span", null, D(e.genres.length), 1)]), (B(!0), V(z, null, R(e.genres, (e) => (B(), V("button", {
						key: e.id,
						type: "button",
						class: "sbsong-genre-option",
						role: "option",
						onClick: (t) => v(e.name)
					}, [H("span", null, D(e.name), 1)], 8, Jy))), 128))], 8, Ky))), 128)), m.value.length ? W("", !0) : (B(), V("p", Yy, D(l.value.length ? "Не найдено. Можно ввести свой жанр вручную." : "Каталог Академии пока недоступен. Введи жанр вручную."), 1))])], 512), [[eo, o.value]])
				]),
				H("label", Xy, [d[22] ||= H("span", null, "Альбом / релиз", -1), F(H("input", {
					"onUpdate:modelValue": d[11] ||= (e) => n.album = e,
					type: "text",
					name: "album",
					maxlength: "120",
					placeholder: "Название альбома"
				}, null, 512), [[K, n.album]])])
			]),
			H("label", Zy, [d[23] ||= H("span", null, "Описание", -1), F(H("textarea", {
				"onUpdate:modelValue": d[12] ||= (e) => n.description = e,
				name: "description",
				maxlength: "700",
				rows: "3",
				placeholder: "История, настроение или заметки"
			}, null, 512), [[K, n.description]])]),
			H("div", Qy, [H("label", $y, [H("span", null, D(e.model.hasAudio ? "Добавить новую аудиоверсию" : "Загрузить аудиофайл (MP3, M4A, WAV и другие)"), 1), d[24] ||= H("input", {
				name: "audio",
				type: "file",
				accept: "audio/*,.mp3,.wav,.wave,.m4a,.aac,.flac,.ogg,.opus"
			}, null, -1)]), d[25] ||= H("label", { class: "sbsong-field" }, [H("span", null, "Обложка вручную (необязательно)"), H("input", {
				name: "cover",
				type: "file",
				accept: "image/png,image/jpeg,image/webp,image/gif"
			})], -1)]),
			H("div", eb, [d[28] ||= H("div", { class: "sbsong-cover-preview-figure" }, [H("img", {
				id: "sbsong-cover-preview-img",
				alt: "Предпросмотр обложки",
				hidden: ""
			}), H("span", {
				id: "sbsong-cover-preview-placeholder",
				"aria-hidden": "true"
			}, "♫")], -1), H("div", null, [
				d[26] ||= H("strong", null, "Обложка из аудиофайла", -1),
				H("p", tb, D(e.model.hasCover ? "Загружаю сохранённую обложку…" : "Выбери MP3, M4A или FLAC — попробую найти обложку автоматически"), 1),
				d[27] ||= H("small", null, "Ручная обложка имеет приоритет, если ты её выберешь.", -1)
			])]),
			H("div", nb, [
				H("label", rb, [d[29] ||= H("span", null, "Прямая ссылка на MP3 (если есть)", -1), F(H("input", {
					"onUpdate:modelValue": d[13] ||= (e) => n.audioUrl = e,
					type: "text",
					name: "audioUrl",
					maxlength: "700",
					placeholder: "https://.../song.mp3"
				}, null, 512), [[K, n.audioUrl]])]),
				H("label", ib, [d[30] ||= H("span", null, "Публичная страница песни", -1), F(H("input", {
					"onUpdate:modelValue": d[14] ||= (e) => n.listenUrl = e,
					type: "text",
					name: "listenUrl",
					maxlength: "700",
					placeholder: "https://suno.com/..."
				}, null, 512), [[K, n.listenUrl]])]),
				H("label", ab, [d[31] ||= H("span", null, "Публичная обложка (по желанию)", -1), F(H("input", {
					"onUpdate:modelValue": d[15] ||= (e) => n.coverUrl = e,
					type: "text",
					name: "coverUrl",
					maxlength: "700",
					placeholder: "https://.../cover.jpg"
				}, null, 512), [[K, n.coverUrl]])])
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
function sb({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SONG_EDITOR, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-song-editor"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, ob, {
			api: t,
			model: r
		})
	});
}
// src/vue/account/ArtistManager.vue
var cb = {
	id: "sbsong-artist-manager",
	class: "sbsong-artist-manager",
	"data-sb-vue-artist-manager": ""
}, lb = {
	key: 0,
	class: "sbsong-artist-hint"
}, ub = {
	key: 1,
	class: "sbsong-artist-hint",
	"data-sb-vue-dna-recap": ""
}, db = { id: "sbsong-artist-manager-results" }, fb = ["data-id", "aria-label"], pb = {
	key: 0,
	class: "sbsong-artist-hint"
}, mb = {
	__name: "ArtistManager",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ M(t.model.filter || ""), r = (e) => String(e || "").normalize("NFKC").toLocaleLowerCase("ru"), i = G(() => t.model.artists.filter((e) => r(e.name).includes(r(n.value)))), a = Q();
		return I(() => [t.model, i.value.length], ([e, t]) => a.publishArtistManagerSummary(e, t), { immediate: !0 }), (t, r) => (B(), V("section", cb, [
			r[1] ||= H("div", { class: "sbsong-subhead" }, [H("h2", null, "Мои артисты"), H("button", {
				type: "button",
				"data-sbsong-action": "artists-manage"
			}, "Закрыть ×")], -1),
			r[2] ||= H("p", null, "Создавай свой список исполнителей и музыкальных проектов. Артисты из «ДНК артиста» и сохранённых песен также доступны при выборе. Удаление из списка не меняет существующие песни.", -1),
			e.model.dnaCount ? (B(), V("p", lb, " Профилей ДНК артиста доступно для выбора: " + D(e.model.dnaCount) + ". Они не удаляются при изменении этого списка. ", 1)) : W("", !0),
			P(a).artistDnaSummary.ready ? (B(), V("p", ub, " Последний просмотр ДНК артиста: " + D(P(a).artistDnaSummary.profileCount) + " профилей ", 1)) : W("", !0),
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
			F(H("input", {
				"onUpdate:modelValue": r[0] ||= (e) => n.value = e,
				id: "sbsong-artist-manager-filter",
				type: "search",
				placeholder: "Фильтр по имени…",
				"aria-label": "Фильтр моих артистов"
			}, null, 512), [[K, n.value]]),
			H("div", db, [(B(!0), V(z, null, R(i.value, (e) => (B(), V("div", {
				key: e.id,
				class: "sbsong-artist-entry"
			}, [H("span", null, D(e.name), 1), H("button", {
				type: "button",
				"data-sbsong-action": "artist-remove",
				"data-id": e.id,
				"aria-label": "Удалить артиста " + e.name
			}, "Удалить", 8, fb)]))), 128)), i.value.length ? W("", !0) : (B(), V("p", pb, D(e.model.artists.length ? "Ничего не найдено." : "Пока нет добавленных вручную артистов."), 1))])
		]));
	}
};
// src/vue/account/legacyArtistManagerBridge.js
function hb({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ARTIST_MANAGER, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-artist-manager"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, mb, { model: n })
	});
}
// src/vue/account/ArtistDNA.vue
var gb = {
	key: 0,
	class: "sb-dna-summary",
	"data-sb-vue-artist-manager-recap": ""
}, _b = { key: 1 }, vb = {
	key: 0,
	class: "sb-dna-grid"
}, yb = ["data-id"], bb = { class: "sb-dna-cardimg" }, xb = ["src"], Sb = {
	key: 1,
	class: "sb-dna-empty"
}, Cb = {
	key: 2,
	class: "sb-dna-detail"
}, wb = { class: "sb-dna-actions" }, Tb = ["data-id"], Eb = ["data-id"], Db = ["data-id"], Ob = { class: "sb-dna-hero" }, kb = { class: "sb-dna-portrait" }, Ab = ["src"], jb = { class: "sb-dna-facts" }, Mb = {
	key: 0,
	class: "sb-dna-restrictions"
}, Nb = { class: "sb-dna-descr" }, Pb = { class: "sb-dna-style" }, Fb = { class: "sb-dna-actions" }, Ib = ["data-id"], Lb = ["data-id"], Rb = { class: "sb-dna-related" }, zb = ["data-id"], Bb = { key: 1 }, Vb = {
	__name: "ArtistDNA",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = Q();
		return I(() => t.model, (e) => n.publishArtistDnaSummary(e), { immediate: !0 }), (t, r) => (B(), V(z, null, [P(n).artistManagerSummary.ready ? (B(), V("div", gb, [H("div", null, [H("b", null, D(P(n).artistManagerSummary.artistCount), 1), r[0] ||= H("span", null, "В ручном списке артистов", -1)])])) : W("", !0), e.model.detail ? (B(), V("div", Cb, [
			H("div", wb, [
				r[2] ||= H("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "dna-list"
				}, "← Все артисты", -1),
				H("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "dna-apply",
					"data-id": e.model.detail.id
				}, "В Suno Studio", 8, Tb),
				H("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "dna-edit",
					"data-id": e.model.detail.id
				}, "Изменить", 8, Eb),
				H("button", {
					type: "button",
					class: "btn danger small",
					"data-action": "dna-delete",
					"data-id": e.model.detail.id
				}, "Удалить", 8, Db)
			]),
			H("div", Ob, [H("div", kb, [e.model.detail.portrait ? (B(), V("img", {
				key: 0,
				src: e.model.detail.portrait,
				alt: "Портрет артиста",
				loading: "lazy"
			}, null, 8, Ab)) : (B(), V(z, { key: 1 }, [U("♫")], 64))]), H("div", null, [
				r[3] ||= H("span", null, "МУЗЫКАЛЬНАЯ ИДЕНТИЧНОСТЬ", -1),
				H("h2", null, D(e.model.detail.name), 1),
				H("p", null, D(e.model.detail.subtitle), 1)
			])]),
			H("div", jb, [(B(!0), V(z, null, R(e.model.detail.facts, (e) => (B(), V("div", {
				key: e.label,
				class: "sb-dna-fact"
			}, [H("span", null, D(e.label), 1), H("strong", null, D(e.value), 1)]))), 128))]),
			(B(!0), V(z, null, R(e.model.detail.textFields, (e) => (B(), V("section", {
				key: e.label,
				class: "sb-dna-descr"
			}, [H("h3", null, D(e.label), 1), H("p", null, D(e.value), 1)]))), 128)),
			e.model.detail.forbids.length ? (B(), V("div", Mb, [r[4] ||= H("strong", null, "Запреты:", -1), (B(!0), V(z, null, R(e.model.detail.forbids, (e) => (B(), V("span", { key: e }, D(e), 1))), 128))])) : W("", !0),
			H("section", Nb, [
				r[5] ||= H("h3", null, "Промпт для Suno Style", -1),
				H("div", Pb, D(e.model.detail.style), 1),
				H("div", Fb, [H("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "dna-copy",
					"data-id": e.model.detail.id
				}, "Копировать Style", 8, Ib), H("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "dna-apply",
					"data-id": e.model.detail.id
				}, "Применить в Suno Studio", 8, Lb)])
			]),
			H("div", Rb, [H("h3", null, "Связанные паспорта треков (" + D(e.model.detail.related.length) + ")", 1), e.model.detail.related.length ? (B(!0), V(z, { key: 0 }, R(e.model.detail.related, (e) => (B(), V("button", {
				key: e.id,
				type: "button",
				class: "sb-dna-tracklink",
				"data-action": "dna-track",
				"data-id": e.id
			}, [H("strong", null, D(e.title), 1), H("span", null, D(e.status) + " →", 1)], 8, zb))), 128)) : (B(), V("p", Bb, "Пока нет привязанных треков. В «Паспорте трека» можно выбрать этого артиста."))])
		])) : (B(), V("div", _b, [e.model.profiles.length ? (B(), V("div", vb, [(B(!0), V(z, null, R(e.model.profiles, (e) => (B(), V("button", {
			key: e.id,
			type: "button",
			class: "sb-dna-card",
			"data-action": "dna-open",
			"data-id": e.id
		}, [
			H("div", bb, [e.portrait ? (B(), V("img", {
				key: 0,
				src: e.portrait,
				alt: "",
				loading: "lazy"
			}, null, 8, xb)) : (B(), V(z, { key: 1 }, [U("♫")], 64))]),
			H("div", null, [
				H("strong", null, D(e.name), 1),
				H("span", null, D(e.genre), 1),
				H("small", null, D(e.timbre), 1)
			]),
			r[1] ||= H("span", { class: "sb-dna-arrow" }, "→", -1)
		], 8, yb))), 128))])) : (B(), V("div", Sb, " Здесь будут музыкальные персонажи со своим вокалом, инструментами, стилем и визуальным образом. Создай первый профиль. "))]))], 64));
	}
};
// src/vue/account/legacyArtistDNABridge.js
function Hb({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_DNA, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-dna-view"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, Vb, { model: n })
	});
}
// src/vue/account/ArtistDNAEditor.vue
var Ub = {
	id: "dna-editor",
	class: "panel sb-dna-editor",
	"data-sb-vue-dna-editor": ""
}, Wb = { class: "sb-dna-formheader" }, Gb = { class: "sb-dna-fields" }, Kb = { class: "field" }, qb = { class: "field" }, Jb = ["value"], Yb = { class: "field" }, Xb = ["value"], Zb = { class: "field" }, Qb = { class: "field" }, $b = { class: "field" }, ex = {
	key: 0,
	class: "sb-dna-fields"
}, tx = { class: "field" }, nx = { class: "field" }, rx = { class: "field" }, ix = ["for"], ax = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"rows"
], ox = { class: "sb-dna-checkboxes" }, sx = ["id", "onUpdate:modelValue"], cx = { class: "field" }, lx = ["for"], ux = [
	"id",
	"onUpdate:modelValue",
	"rows",
	"maxlength"
], dx = { class: "field" }, fx = { class: "sb-dna-previewbox" }, px = { id: "dna-style-preview" }, mx = { id: "dna-style-count" }, hx = {
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
		let t = e, n = /* @__PURE__ */ k({ ...t.model.fields }), r = G(() => t.api.stylePreview(n)), i = [
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
		return (t, s) => (B(), V("div", Ub, [
			H("div", Wb, [H("div", null, [H("h2", null, D(e.model.editing ? "Редактирование ДНК" : "Новый артист"), 1), s[10] ||= H("p", null, "Сохрани характер звучания — он будет доступен в Suno Studio и «Паспорте трека».", -1)]), s[11] ||= H("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "dna-cancel"
			}, "Закрыть", -1)]),
			H("div", Gb, [
				H("div", Kb, [s[12] ||= H("label", { for: "dna-name" }, "Имя артиста *", -1), F(H("input", {
					id: "dna-name",
					"onUpdate:modelValue": s[0] ||= (e) => n.name = e,
					maxlength: "120",
					placeholder: "Название музыкального проекта"
				}, null, 512), [[K, n.name]])]),
				H("div", qb, [s[13] ||= H("label", { for: "dna-project" }, "Связанный проект", -1), F(H("select", {
					id: "dna-project",
					"onUpdate:modelValue": s[1] ||= (e) => n.projectId = e
				}, [(B(!0), V(z, null, R(e.model.projects, (e) => (B(), V("option", {
					key: e.id,
					value: e.id
				}, D(e.title), 9, Jb))), 128))], 512), [[q, n.projectId]])]),
				H("div", Yb, [s[14] ||= H("label", { for: "dna-genre" }, "Основной жанр", -1), F(H("select", {
					id: "dna-genre",
					"onUpdate:modelValue": s[2] ||= (e) => n.genre = e
				}, [(B(!0), V(z, null, R(e.model.genres, (e) => (B(), V("option", {
					key: e.id,
					value: e.id
				}, D(e.name), 9, Xb))), 128))], 512), [[q, n.genre]])]),
				H("div", Zb, [s[15] ||= H("label", { for: "dna-othergenres" }, "Дополнительные жанры", -1), F(H("input", {
					id: "dna-othergenres",
					"onUpdate:modelValue": s[3] ||= (e) => n.otherGenres = e,
					maxlength: "240",
					placeholder: "Например, pop, R&B, electropop"
				}, null, 512), [[K, n.otherGenres]])]),
				H("div", Qb, [s[17] ||= H("label", { for: "dna-vocal" }, "Тип вокала", -1), F(H("select", {
					id: "dna-vocal",
					"onUpdate:modelValue": s[4] ||= (e) => n.vocal = e
				}, [...s[16] ||= [
					H("option", { value: "male" }, "Мужской", -1),
					H("option", { value: "female" }, "Женский", -1),
					H("option", { value: "duet" }, "Дуэт", -1)
				]], 512), [[q, n.vocal]])]),
				H("div", $b, [s[19] ||= H("label", { for: "dna-language" }, "Язык песни", -1), F(H("select", {
					id: "dna-language",
					"onUpdate:modelValue": s[5] ||= (e) => n.language = e
				}, [...s[18] ||= [
					H("option", { value: "Russian" }, "Русский", -1),
					H("option", { value: "English" }, "Английский", -1),
					H("option", { value: "Spanish" }, "Испанский", -1),
					H("option", { value: "Kazakh" }, "Казахский", -1)
				]], 512), [[q, n.language]])])
			]),
			s[24] ||= H("h3", { class: "sb-dna-formsection" }, "Голос и музыкальный почерк", -1),
			(B(), V(z, null, R(i, (e) => (B(), V(z, { key: e.id }, [e.id === "mood" ? (B(), V("div", ex, [H("div", tx, [s[20] ||= H("label", { for: "dna-tempo-min" }, "Темп от (BPM)", -1), F(H("input", {
				id: "dna-tempo-min",
				"onUpdate:modelValue": s[6] ||= (e) => n.tempoMin = e,
				maxlength: "3",
				placeholder: "Например, 90"
			}, null, 512), [[K, n.tempoMin]])]), H("div", nx, [s[21] ||= H("label", { for: "dna-tempo-max" }, "Темп до (BPM)", -1), F(H("input", {
				id: "dna-tempo-max",
				"onUpdate:modelValue": s[7] ||= (e) => n.tempoMax = e,
				maxlength: "3",
				placeholder: "Например, 120"
			}, null, 512), [[K, n.tempoMax]])])])) : W("", !0), H("div", rx, [H("label", { for: "dna-" + e.id }, D(e.label), 9, ix), F(H("textarea", {
				id: "dna-" + e.id,
				"onUpdate:modelValue": (t) => n[e.key] = t,
				maxlength: e.max,
				rows: e.rows
			}, null, 8, ax), [[K, n[e.key]]])])], 64))), 64)),
			s[25] ||= H("h3", { class: "sb-dna-formsection" }, "Запреты и ограничения", -1),
			H("div", ox, [(B(), V(z, null, R(a, (e) => H("label", { key: e.id }, [F(H("input", {
				id: "dna-" + e.id,
				"onUpdate:modelValue": (t) => n[e.key] = t,
				type: "checkbox"
			}, null, 8, sx), [[Io, n[e.key]]]), U(" " + D(e.label), 1)])), 64))]),
			H("div", cx, [s[22] ||= H("label", { for: "dna-extra" }, "Дополнительные требования к аранжировке", -1), F(H("textarea", {
				id: "dna-extra",
				"onUpdate:modelValue": s[8] ||= (e) => n.extra = e,
				rows: "3",
				maxlength: "650"
			}, null, 512), [[K, n.extra]])]),
			s[26] ||= H("h3", { class: "sb-dna-formsection" }, "Творческий образ", -1),
			(B(), V(z, null, R(o, (e) => H("div", {
				key: e.id,
				class: "field"
			}, [H("label", { for: "dna-" + e.id }, D(e.label), 9, lx), F(H("textarea", {
				id: "dna-" + e.id,
				"onUpdate:modelValue": (t) => n[e.key] = t,
				rows: e.rows,
				maxlength: e.max
			}, null, 8, ux), [[K, n[e.key]]])])), 64)),
			H("div", dx, [s[23] ||= H("label", { for: "dna-portrait" }, "Ссылка на портрет (HTTPS)", -1), F(H("input", {
				id: "dna-portrait",
				"onUpdate:modelValue": s[9] ||= (e) => n.portrait = e,
				maxlength: "2000",
				placeholder: "https://…"
			}, null, 512), [[K, n.portrait]])]),
			s[27] ||= H("h3", { class: "sb-dna-formsection" }, "Промпт ДНК для Suno", -1),
			H("div", fx, [H("div", px, D(r.value), 1), H("span", mx, D(r.value.length) + " / 1000", 1)]),
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
function gx({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_DNA_EDITOR, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-dna-editor"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, hx, {
			model: r,
			api: t
		})
	});
}
// src/vue/account/AccountSettings.vue
var _x = ["data-sb-preferred-theme", "data-sb-applied-theme"], vx = { class: "sbs-layout" }, yx = { class: "sbs-main-column" }, bx = { class: "sbs-panel" }, xx = {
	class: "sbs-field sbs-theme-field",
	for: "sbs-theme"
}, Sx = ["value"], Cx = ["for"], wx = { class: "sbs-option-text" }, Tx = { class: "sbs-switch" }, Ex = [
	"id",
	"onUpdate:modelValue",
	"data-sbs-setting",
	"aria-label"
], Dx = { class: "sbs-panel" }, Ox = {
	class: "sbs-field",
	for: "sbs-start"
}, kx = ["value"], Ax = { class: "sbs-panel" }, jx = {
	class: "sbs-field",
	for: "sbs-name"
}, Mx = { class: "sbs-side-column" }, Nx = { class: "sbs-panel sbs-reset-panel" }, Px = {
	key: 0,
	class: "sbs-confirm"
}, Fx = {
	key: 1,
	type: "button",
	class: "sbs-secondary",
	"data-sbs-action": "reset"
}, Ix = ["hidden"], Lx = {
	__name: "AccountSettings",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = Q(), r = /* @__PURE__ */ k({ ...t.model.settings });
		I(() => n.appearance, (e) => {
			for (let t of [
				"theme",
				"compact",
				"largeText",
				"reduceMotion",
				"startPage"
			]) r[t] = e[t];
		});
		let i = /* @__PURE__ */ k({ value: t.model.name }), a = [
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
			t.model.resetPending && On(() => document.querySelector("#sb-vue-account-settings .sbs-confirm-button")?.focus());
		}), (t, o) => (B(), V("section", {
			id: "sbs-page",
			class: "sbs-page",
			"data-sb-vue-settings": "",
			"data-sb-preferred-theme": P(n).appearance.theme,
			"data-sb-applied-theme": P(n).appearance.resolvedTheme
		}, [
			o[17] ||= fa("<header class=\"sbs-heading\"><button type=\"button\" class=\"sbs-back\" data-sbs-action=\"close\">← Вернуться в кабинет</button><div class=\"sbs-eyebrow\">SUNOBOOM · ЛИЧНЫЙ КАБИНЕТ</div><div class=\"sbs-heading-row\"><div><h1>Настройки</h1><p>Настрой музыкальную мастерскую под себя. Изменения применяются сразу и сохраняются в этом браузере.</p></div><span class=\"sbs-badge\">⚙️ ПЕРСОНАЛИЗАЦИЯ</span></div></header>", 1),
			H("div", vx, [H("div", yx, [
				H("section", bx, [
					o[5] ||= H("div", { class: "sbs-panel-head" }, [H("span", {
						class: "sbs-symbol",
						"aria-hidden": "true"
					}, "🎨"), H("div", null, [H("h2", null, "Внешний вид"), H("p", null, "Удобная работа на компьютере и телефоне")])], -1),
					H("label", xx, [o[3] ||= H("span", null, "Тема приложения", -1), F(H("select", {
						id: "sbs-theme",
						"onUpdate:modelValue": o[0] ||= (e) => r.theme = e,
						"data-sbs-setting": "theme",
						"aria-label": "Тема приложения"
					}, [(B(!0), V(z, null, R(e.model.themes, (e) => (B(), V("option", {
						key: e.id,
						value: e.id
					}, D(e.title), 9, Sx))), 128))], 512), [[q, r.theme]])]),
					o[6] ||= H("p", { class: "sbs-help sbs-theme-help" }, "Выбери палитру: тёмную, светлую, системную или одну из шести цветных тем. Изменения сохраняются.", -1),
					(B(), V(z, null, R(a, (e) => H("label", {
						key: e.key,
						class: "sbs-option",
						for: "sbs-" + e.key
					}, [H("span", wx, [H("strong", null, D(e.title), 1), H("small", null, D(e.desc), 1)]), H("span", Tx, [F(H("input", {
						id: "sbs-" + e.key,
						"onUpdate:modelValue": (t) => r[e.key] = t,
						type: "checkbox",
						"data-sbs-setting": e.key,
						role: "switch",
						"aria-label": e.title
					}, null, 8, Ex), [[Io, r[e.key]]]), o[4] ||= H("span", {
						class: "sbs-switch-track",
						"aria-hidden": "true"
					}, null, -1)])], 8, Cx)), 64))
				]),
				H("section", Dx, [
					o[8] ||= H("div", { class: "sbs-panel-head" }, [H("span", {
						class: "sbs-symbol",
						"aria-hidden": "true"
					}, "🏠"), H("div", null, [H("h2", null, "При открытии сайта"), H("p", null, "Выбери стартовый раздел SUNOBOOM")])], -1),
					H("label", Ox, [o[7] ||= H("span", null, "Стартовая страница", -1), F(H("select", {
						id: "sbs-start",
						"onUpdate:modelValue": o[1] ||= (e) => r.startPage = e,
						"data-sbs-setting": "startPage"
					}, [(B(!0), V(z, null, R(e.model.pages, (e) => (B(), V("option", {
						key: e.id,
						value: e.id
					}, D(e.title), 9, kx))), 128))], 512), [[q, r.startPage]])]),
					o[9] ||= H("p", { class: "sbs-help" }, "Применяется при следующем открытии или обновлении сайта. Ссылки на конкретные карточки жанров сохраняют свой переход.", -1)
				]),
				H("section", Ax, [
					o[11] ||= H("div", { class: "sbs-panel-head" }, [H("span", {
						class: "sbs-symbol",
						"aria-hidden": "true"
					}, "👤"), H("div", null, [H("h2", null, "Профиль"), H("p", null, "Имя отображается только в локальном кабинете")])], -1),
					H("label", jx, [o[10] ||= H("span", null, "Имя в кабинете", -1), F(H("input", {
						id: "sbs-name",
						"onUpdate:modelValue": o[2] ||= (e) => i.value = e,
						type: "text",
						maxlength: "60",
						autocomplete: "off",
						placeholder: "Твоё имя"
					}, null, 512), [[K, i.value]])]),
					o[12] ||= H("button", {
						type: "button",
						class: "sbs-primary",
						"data-sbs-action": "save-name"
					}, "Сохранить имя", -1)
				])
			]), H("aside", Mx, [o[16] ||= fa("<section class=\"sbs-panel\"><div class=\"sbs-panel-head\"><span class=\"sbs-symbol\" aria-hidden=\"true\">🔒</span><div><h2>Данные и приватность</h2></div></div><p class=\"sbs-info\">Сейчас SUNOBOOM работает как локальный прототип: твои проекты и настройки сохраняются в браузере. Синхронизации между устройствами пока нет.</p><p class=\"sbs-info\">GitHub Pages остаётся публичной демонстрационной площадкой — полноценный закрытый вход по приглашениям ещё не подключён.</p><button type=\"button\" class=\"sbs-secondary\" data-sbs-action=\"backup\">↓ Перейти к резервным копиям</button></section>", 1), H("section", Nx, [
				o[14] ||= H("div", { class: "sbs-panel-head" }, [H("span", {
					class: "sbs-symbol",
					"aria-hidden": "true"
				}, "↺"), H("div", null, [H("h2", null, "Сброс предпочтений")])], -1),
				o[15] ||= H("p", { class: "sbs-info" }, "Вернуть стандартные параметры отображения. Песни, проекты, избранное и имя профиля не удаляются.", -1),
				e.model.resetPending ? (B(), V("div", Px, [...o[13] ||= [H("strong", null, "Сбросить настройки интерфейса?", -1), H("div", null, [H("button", {
					type: "button",
					class: "sbs-secondary",
					"data-sbs-action": "cancel-reset"
				}, "Отмена"), H("button", {
					type: "button",
					class: "sbs-confirm-button",
					"data-sbs-action": "confirm-reset"
				}, "Да, сбросить")], -1)]])) : (B(), V("button", Fx, "Сбросить настройки"))
			])])]),
			H("p", {
				id: "sbs-message",
				class: "sbs-message",
				role: "status",
				"aria-live": "polite",
				hidden: !e.model.message
			}, D(e.model.message), 9, Ix)
		], 8, _x));
	}
};
// src/vue/account/legacyAccountSettingsBridge.js
function Rx({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SETTINGS, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-account-settings"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, Lx, { model: n })
	});
}
// src/vue/player/PlayerLab.vue
var zx = {
	class: "sbp-layout",
	"data-sb-vue-player-lab": ""
}, Bx = {
	class: "sbp-main",
	"aria-label": "Плеер"
}, Vx = {
	class: "sbp-bars",
	"aria-hidden": "true"
}, Hx = { class: "sbp-title-area" }, Ux = {
	id: "sbp-now-tag",
	class: "sbp-now-tag"
}, Wx = { id: "sbp-title" }, Gx = { id: "sbp-artist" }, Kx = {
	id: "sbp-counter",
	class: "sbp-counter"
}, qx = {
	key: 0,
	class: "sbp-now-tag",
	"data-sb-vue-ab-recap": ""
}, Jx = { class: "sbp-progress" }, Yx = ["value", "disabled"], Xx = { class: "sbp-times" }, Zx = { id: "sbp-time-current" }, Qx = { id: "sbp-time-total" }, $x = { class: "sbp-transport" }, eS = ["aria-pressed"], tS = ["aria-label", "disabled"], nS = ["title", "aria-label"], rS = { class: "sbp-extras" }, iS = { class: "sbp-volume" }, aS = {
	key: 0,
	class: "sbp-ios-volume"
}, oS = ["value"], sS = { id: "sbp-volume-label" }, cS = {
	class: "sbp-speed",
	for: "sbp-rate"
}, lS = ["value"], uS = ["value"], dS = { class: "sbp-side" }, fS = { class: "sbp-side-head" }, pS = { id: "sbp-list-count" }, mS = ["disabled"], hS = {
	class: "sbp-track-list",
	id: "sbp-list",
	"aria-label": "Список треков"
}, gS = ["data-sbp-item"], _S = ["data-index", "aria-label"], vS = { class: "sbp-track-index" }, yS = { class: "sbp-track-meta" }, bS = { class: "sbp-track-duration" }, xS = ["data-index", "aria-label"], SS = {
	key: 0,
	class: "sbp-empty"
}, CS = {
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
		let t = e, n = /* @__PURE__ */ M(t.initialModel), r = Q();
		I(n, (e) => r.publishPlayerLabSummary(e), { immediate: !0 });
		function i() {
			let e = t.api.snapshot();
			e && (n.value = e);
		}
		L(() => {
			window.addEventListener("sunoboom:player-lab-update", i), i();
		}), Sr(() => window.removeEventListener("sunoboom:player-lab-update", i));
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
		return (e, t) => (B(), V("div", zx, [H("section", Bx, [
			H("div", { class: E(["sbp-art", { "is-playing": n.value.playing }]) }, [
				t[0] ||= H("div", { class: "sbp-art-orb" }, "♫", -1),
				H("div", Vx, [(B(!0), V(z, null, R(P(a), (e) => (B(), V("i", {
					key: e.index,
					style: T({
						"--sbp-i": e.index,
						"--sbp-h": e.height
					})
				}, null, 4))), 128))]),
				t[1] ||= H("span", null, "SONIC LAB / PRIVATE PREVIEW", -1)
			], 2),
			H("div", Hx, [H("div", null, [
				H("div", Ux, D(n.value.nowTag), 1),
				H("h2", Wx, D(n.value.title), 1),
				H("p", Gx, D(n.value.artist), 1)
			]), H("span", Kx, D(n.value.counter), 1)]),
			P(r).playerAbSummary.ready && P(r).playerAbSummary.readyCount ? (B(), V("p", qx, "A/B: загружено " + D(P(r).playerAbSummary.readyCount) + " из 2 · активна " + D(P(r).playerAbSummary.active), 1)) : W("", !0),
			H("div", Jx, [
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
					style: T({ "--fill": n.value.seekValue / 10 + "%" })
				}, null, 12, Yx),
				H("div", Xx, [H("span", Zx, D(n.value.currentTime), 1), H("span", Qx, D(n.value.totalTime), 1)])
			]),
			H("div", $x, [
				H("button", {
					type: "button",
					class: E(["sbp-secondary", { "is-on": n.value.shuffle }]),
					id: "sbp-shuffle",
					"data-sbp-action": "shuffle",
					"aria-label": "Случайный порядок",
					"aria-pressed": String(n.value.shuffle),
					title: "Случайный порядок"
				}, "⤨", 10, eS),
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
				}, D(n.value.playing ? "❚❚" : "▶"), 9, tS),
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
					class: E(["sbp-secondary", { "is-on": n.value.repeat !== "off" }]),
					"data-sbp-action": "repeat",
					id: "sbp-repeat",
					title: n.value.repeatLabel,
					"aria-label": n.value.repeatLabel
				}, D(n.value.repeat === "one" ? "↻₁" : "↻"), 11, nS)
			]),
			H("div", rS, [H("div", iS, [n.value.ios ? (B(), V("span", aS, "📱 Громкость регулируется кнопками телефона")) : (B(), V(z, { key: 1 }, [
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
				}, null, 8, oS),
				H("output", sS, D(n.value.volume) + "%", 1)
			], 64))]), H("label", cS, [t[7] ||= U(" Скорость ", -1), H("select", {
				id: "sbp-rate",
				"aria-label": "Скорость воспроизведения",
				value: n.value.rate
			}, [(B(), V(z, null, R(o, (e) => H("option", {
				key: e,
				value: e
			}, D(e) + "×", 9, uS)), 64))], 8, lS)])]),
			F(H("div", {
				class: "sbp-message",
				id: "sbp-message",
				role: "status",
				"aria-live": "polite"
			}, D(n.value.message), 513), [[eo, n.value.message]])
		]), H("aside", dS, [
			H("div", fS, [H("div", null, [t[8] ||= H("h2", null, "Очередь воспроизведения", -1), H("small", pS, D(n.value.count) + " " + D(n.value.count === 1 ? "трек" : n.value.count > 1 && n.value.count < 5 ? "трека" : "треков"), 1)]), H("button", {
				type: "button",
				class: "sbp-clear",
				"data-sbp-action": "clear",
				id: "sbp-clear",
				disabled: !n.value.count
			}, "Очистить", 8, mS)]),
			t[9] ||= fa("<div class=\"sbp-dropzone\" id=\"sbp-dropzone\"><div class=\"sbp-drop-icon\">↥</div><strong>Загрузи свои треки</strong><p>MP3, WAV, M4A, AAC, OGG, FLAC — если формат поддерживается браузером. Файлы никуда не отправляются.</p><label class=\"sbp-upload-label\" for=\"sbp-file\">Выбрать аудиофайлы</label><input id=\"sbp-file\" type=\"file\" accept=\"audio/*,.mp3,.m4a,.aac,.wav,.ogg,.flac,.opus\" multiple></div><div class=\"sbp-demo-box\"><div><strong>Нет аудиофайлов?</strong><p>Создать 3 коротких оригинальных демо-сигнала для проверки управления.</p></div><button type=\"button\" data-sbp-action=\"demo\" id=\"sbp-demo\">+ Демо-треки</button></div>", 2),
			H("div", hS, [(B(!0), V(z, null, R(n.value.tracks, (e) => (B(), V("article", {
				key: e.id,
				class: E(["sbp-track", { "is-current": e.isCurrent }]),
				"data-sbp-item": e.id
			}, [
				H("button", {
					type: "button",
					class: "sbp-track-play",
					"data-sbp-action": "select",
					"data-index": e.index,
					"aria-label": "Включить " + e.name
				}, [H("span", vS, D(e.playLabel), 1), H("span", yS, [H("strong", null, D(e.name), 1), H("small", null, D(e.artist) + " · " + D(e.sourceLabel), 1)])], 8, _S),
				H("span", bS, D(e.durationLabel), 1),
				H("button", {
					type: "button",
					class: "sbp-track-remove",
					"data-sbp-action": "remove",
					"data-index": e.index,
					title: "Удалить из списка",
					"aria-label": "Удалить " + e.name
				}, "×", 8, xS)
			], 10, gS))), 128)), n.value.tracks.length ? W("", !0) : (B(), V("div", SS, " Плейлист пока пуст. Добавь MP3 или нажми «Демо-треки», чтобы начать тест. "))])
		])]));
	}
};
// src/vue/player/legacyPlayerLabBridge.js
function wS({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PLAYER_LAB, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-player-lab"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, CS, {
			api: t,
			initialModel: r
		})
	});
}
// src/vue/player/PlayerAB.vue
var TS = { class: "sbab-heading" }, ES = {
	key: 0,
	class: "sbab-kicker",
	"data-sb-vue-player-recap": ""
}, DS = { class: "sbab-files" }, OS = ["data-sbab-card"], kS = { class: "sbab-file-top" }, AS = { class: "sbab-side-label" }, jS = ["id"], MS = ["id"], NS = ["id"], PS = { class: "sbab-file-bottom" }, FS = ["for"], IS = ["id", "data-sbab-file"], LS = ["data-side", "disabled"], RS = ["id"], zS = { class: "sbab-console" }, BS = { class: "sbab-console-top" }, VS = { id: "sbab-active-label" }, HS = { class: "sbab-wave" }, US = {
	class: "sbab-wave-bars",
	"aria-hidden": "true"
}, WS = {
	class: "sbab-toggle",
	role: "group",
	"aria-label": "Выбор версии для прослушивания"
}, GS = ["data-side", "aria-pressed"], KS = { class: "sbab-scrub" }, qS = ["value", "disabled"], JS = { class: "sbab-times" }, YS = { id: "sbab-current" }, XS = { id: "sbab-duration" }, ZS = { class: "sbab-transport" }, QS = ["disabled", "aria-label"], $S = { class: "sbab-clip" }, eC = { class: "sbab-clip-actions" }, tC = {
	type: "button",
	"data-sbab-action": "mark-start"
}, nC = { id: "sbab-start" }, rC = {
	type: "button",
	"data-sbab-action": "mark-end"
}, iC = { id: "sbab-end" }, aC = ["aria-pressed", "aria-label"], oC = { class: "sbab-volume" }, sC = { key: 0 }, cC = ["for"], lC = [
	"id",
	"data-sbab-vol",
	"value"
], uC = ["hidden"], dC = { class: "sbab-review" }, fC = { class: "sbab-rating-grid" }, pC = { class: "sbab-rating-label" }, mC = [
	"data-sbab-score",
	"aria-label",
	"value"
], hC = ["value"], gC = { class: "sbab-note-grid" }, _C = ["for"], vC = [
	"id",
	"data-sbab-note",
	"placeholder",
	"value"
], yC = {
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
		let t = e, n = /* @__PURE__ */ M(t.initialModel), r = Q();
		I(n, (e) => r.publishPlayerAbSummary(e), { immediate: !0 });
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
		return L(() => {
			window.addEventListener("sunoboom:player-ab-update", s), s();
		}), Sr(() => window.removeEventListener("sunoboom:player-ab-update", s)), (e, t) => (B(), V("section", {
			id: "sbab-compare",
			class: E(["sbab-shell", {
				"sbab-is-playing": n.value.playing,
				"sbab-has-files": n.value.hasBoth
			}]),
			"aria-label": "Сравнение аудиоверсий A и B",
			"data-sb-vue-player-ab": ""
		}, [
			H("header", TS, [H("div", null, [
				t[0] ||= H("span", { class: "sbab-kicker" }, "SUNOBOOM · AUDIO TEST LAB", -1),
				t[1] ||= H("h2", null, "A/B-сравнение аудиоверсий", -1),
				t[2] ||= H("p", null, "Загрузи два варианта песни и переключайся между ними в одной временной точке. Сравнивай вокал, аранжировку и финальное звучание.", -1),
				P(r).playerLabSummary.ready ? (B(), V("p", ES, "Очередь плеера LAB: " + D(P(r).playerLabSummary.queueCount) + " треков · " + D(P(r).playerLabSummary.playing ? "воспроизведение" : "пауза"), 1)) : W("", !0)
			]), t[3] ||= H("span", { class: "sbab-lab-badge" }, "A ↔ B", -1)]),
			H("div", DS, [(B(), V(z, null, R(i, (e) => H("div", {
				key: e,
				class: E(["sbab-file-card", [e === "A" ? "sbab-card-a" : "sbab-card-b", { "sbab-active-card": n.value.active === e }]]),
				"data-sbab-card": e
			}, [
				H("div", kS, [H("span", AS, "ВЕРСИЯ " + D(e), 1), H("span", {
					class: "sbab-loaded",
					id: "sbab-ready-" + e
				}, D(n.value.files[e].ready ? "Файл добавлен" : "Ожидает файл"), 9, jS)]),
				H("strong", {
					class: "sbab-filename",
					id: "sbab-name-" + e
				}, D(n.value.files[e].name), 9, MS),
				H("p", {
					class: "sbab-filesub",
					id: "sbab-info-" + e
				}, D(n.value.files[e].info), 9, NS),
				H("div", PS, [
					H("label", {
						class: "sbab-upload",
						for: "sbab-file-" + e
					}, [t[4] ||= H("svg", {
						viewBox: "0 0 24 24",
						width: "19",
						height: "19",
						"aria-hidden": "true"
					}, [H("path", {
						d: "M12 5v14M5 12h14",
						stroke: "currentColor",
						"stroke-width": "2",
						"stroke-linecap": "round"
					})], -1), U(" " + D(n.value.files[e].ready ? "Заменить файл" : "Выбрать файл"), 1)], 8, FS),
					H("input", {
						type: "file",
						id: "sbab-file-" + e,
						accept: "audio/*,.mp3,.wav,.m4a,.aac,.ogg,.flac,.opus",
						"data-sbab-file": e
					}, null, 8, IS),
					H("button", {
						type: "button",
						"data-sbab-action": "remove",
						"data-side": e,
						class: "sbab-remove",
						disabled: !n.value.files[e].ready
					}, "Удалить", 8, LS),
					H("span", {
						class: "sbab-length",
						id: "sbab-length-" + e
					}, D(n.value.files[e].duration), 9, RS)
				])
			], 10, OS)), 64))]),
			t[20] ||= H("div", { class: "sbab-demo-row" }, [H("p", null, "Для первого теста можно создать два разных оригинальных коротких аудиофрагмента."), H("button", {
				type: "button",
				"data-sbab-action": "demo"
			}, "Создать демо A и B")], -1),
			H("div", zS, [
				H("div", BS, [t[5] ||= H("span", { class: "sbab-kicker" }, "АКТИВНОЕ ПРОСЛУШИВАНИЕ", -1), H("span", VS, "Версия " + D(n.value.active) + D(n.value.playing ? " · Воспроизведение" : ""), 1)]),
				H("div", HS, [H("div", US, [(B(!0), V(z, null, R(P(o), (e, t) => (B(), V("i", {
					key: t,
					style: T({ "--bar-height": e })
				}, null, 4))), 128))]), t[6] ||= H("div", { class: "sbab-wave-center" }, "A / B", -1)]),
				H("div", WS, [(B(), V(z, null, R(i, (e) => H("button", {
					key: e,
					type: "button",
					class: E(e === "A" ? "sbab-btn-a" : "sbab-btn-b"),
					"data-sbab-action": "select",
					"data-side": e,
					"aria-pressed": String(n.value.active === e)
				}, [U(D(e) + " ", 1), H("small", null, "Версия " + D(e), 1)], 10, GS)), 64))]),
				H("div", KS, [
					t[7] ||= H("label", {
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
					}, null, 8, qS),
					H("div", JS, [H("span", YS, D(n.value.currentTime), 1), H("span", XS, D(n.value.duration), 1)])
				]),
				H("div", ZS, [
					t[8] ||= H("button", {
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
					}, D(n.value.playing ? "❚❚" : "▶"), 9, QS),
					t[9] ||= H("button", {
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
				H("div", $S, [t[13] ||= H("div", { class: "sbab-clip-title" }, [H("strong", null, "Повтор выбранного фрагмента"), H("small", null, "Например, только припев или куплет")], -1), H("div", eC, [
					H("button", tC, [t[10] ||= U("Начало: ", -1), H("span", nC, D(n.value.start), 1)]),
					H("button", rC, [t[11] ||= U("Конец: ", -1), H("span", iC, D(n.value.end), 1)]),
					H("button", {
						type: "button",
						"data-sbab-action": "loop",
						id: "sbab-loop",
						"aria-pressed": String(n.value.loop),
						"aria-label": n.value.loop ? "Повтор фрагмента включён" : "Повтор фрагмента выключен"
					}, D(n.value.loop ? "↻ Повтор включён" : "↻ Повтор выкл."), 9, aC),
					t[12] ||= H("button", {
						type: "button",
						"data-sbab-action": "clear-segment",
						"aria-label": "Очистить границы фрагмента"
					}, "✕", -1)
				])]),
				H("div", oC, [n.value.ios ? (B(), V("span", sC, "📱 Громкость регулируется кнопками телефона")) : (B(), V(z, { key: 1 }, R(i, (e) => H("label", {
					key: e,
					for: "sbab-vol-" + e
				}, [U(" Уровень " + D(e) + " ", 1), H("input", {
					id: "sbab-vol-" + e,
					"data-sbab-vol": e,
					type: "range",
					min: "0",
					max: "100",
					value: n.value.volume[e]
				}, null, 8, lC)], 8, cC)), 64))]),
				H("p", {
					id: "sbab-status",
					class: "sbab-status",
					role: "status",
					"aria-live": "polite",
					hidden: !n.value.status
				}, D(n.value.status), 9, uC)
			]),
			H("section", dC, [
				t[18] ||= H("header", null, [H("h3", null, "Оценка на слух"), H("p", null, "Субъективное сравнение. Оценки выставляешь ты — автоматического анализа качества здесь нет.")], -1),
				H("div", fC, [
					t[15] ||= H("div", { class: "sbab-rating-head" }, "Параметр", -1),
					t[16] ||= H("div", { class: "sbab-rating-head" }, "A", -1),
					t[17] ||= H("div", { class: "sbab-rating-head" }, "B", -1),
					(B(), V(z, null, R(a, (e) => (B(), V(z, { key: e.key }, [H("div", pC, D(e.label), 1), (B(), V(z, null, R(i, (r) => H("div", { key: r }, [H("select", {
						"data-sbab-score": r + ":" + e.key,
						"aria-label": e.label + " — версия " + r,
						value: n.value.scores[r][e.key]
					}, [t[14] ||= H("option", { value: 0 }, "—", -1), (B(), V(z, null, R(5, (e) => H("option", {
						key: e,
						value: e
					}, D(e) + "/5", 9, hC)), 64))], 8, mC)])), 64))], 64))), 64))
				]),
				H("div", gC, [(B(), V(z, null, R(i, (e) => H("label", {
					key: e,
					for: "sbab-note-" + e
				}, [U(" Заметки по " + D(e) + " ", 1), H("textarea", {
					id: "sbab-note-" + e,
					"data-sbab-note": e,
					rows: "3",
					maxlength: "1000",
					placeholder: e === "A" ? "Сильные стороны, что улучшить…" : "Вокал, баланс, пространство…",
					value: n.value.notes[e]
				}, null, 8, vC)], 8, _C)), 64))]),
				t[19] ||= H("div", { class: "sbab-review-actions" }, [H("button", {
					type: "button",
					"data-sbab-action": "copy",
					class: "sbab-review-copy"
				}, "Скопировать результаты"), H("button", {
					type: "button",
					"data-sbab-action": "reset-review",
					class: "sbab-review-clear"
				}, "Очистить оценки")], -1)
			]),
			t[21] ||= H("p", { class: "sbab-footer-note" }, "Файлы не передаются на сервер. При переключении используется одинаковая временная позиция в секундах; точное совпадение музыкальных моментов зависит от самих версий. Для честного сравнения выровняй их громкость. На телефоне переключение может иметь небольшую паузу из-за браузера.", -1)
		], 2));
	}
};
// src/vue/player/legacyPlayerABBridge.js
function bC({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PLAYER_AB, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-player-ab"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, yC, {
			api: t,
			initialModel: r
		})
	});
}
// src/vue/producer/ProducerSongList.vue
var xC = ["data-id", "aria-pressed"], SC = { class: "sbpc-song-main" }, CC = { class: "sbpc-song-meta" }, wC = { class: "sbpc-tiny-progress" }, TC = {
	key: 0,
	class: "sbpc-help",
	"data-sb-vue-passport-recap": ""
}, EC = {
	key: 1,
	class: "sbpc-empty"
}, DC = {
	__name: "ProducerSongList",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ M(t.model.query || ""), r = Q();
		I(() => t.model, (e) => r.publishMasterListSummary(e), { immediate: !0 });
		let i = (e) => String(e ?? "").normalize("NFKC").toLocaleLowerCase("ru"), a = G(() => {
			let e = i(n.value.trim());
			return t.model.records.filter((t) => i(t.searchText).includes(e));
		});
		function o(e) {
			n.value = String(e.detail?.query ?? "");
		}
		return L(() => window.addEventListener("sunoboom:producer-search", o)), Cr(() => window.removeEventListener("sunoboom:producer-search", o)), (t, n) => (B(), V(z, null, [
			(B(!0), V(z, null, R(a.value, (t) => (B(), V("button", {
				key: t.id,
				type: "button",
				class: E(["sbpc-song", { active: t.id === e.model.selectedId }]),
				"data-pc-action": "open",
				"data-id": t.id,
				"aria-pressed": t.id === e.model.selectedId
			}, [
				H("span", SC, [H("strong", null, D(t.title), 1), H("span", null, D(t.artist), 1)]),
				H("span", CC, [H("b", null, D(t.done) + "/" + D(t.total), 1), H("small", null, D(t.nextLabel ? "Следующий этап: " + t.nextLabel : "Все этапы отмечены готовыми"), 1)]),
				H("span", wC, [H("i", { style: T({ width: t.percent + "%" }) }, null, 4)])
			], 10, xC))), 128)),
			P(r).passportListSummary.ready ? (B(), V("p", TC, " Паспорта треков · последний фильтр: " + D(P(r).passportListSummary.visibleCount), 1)) : W("", !0),
			a.value.length ? W("", !0) : (B(), V("p", EC, D(e.model.hasRecords ? "Поиск не дал результатов. Измени запрос или создай новую рабочую карточку." : "Пока нет рабочих карточек. Начни с первой песни выше."), 1))
		], 64));
	}
};
// src/vue/producer/legacyProducerSongListBridge.js
function OC({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PRODUCER_LIST, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sbpc-list[data-sb-vue-producer-list]"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, DC, { model: n })
	});
}
// src/vue/producer/ProducerSongDetail.vue
var kC = {
	class: "sbpc-workspace",
	"data-sb-vue-producer-detail": ""
}, AC = { class: "sbpc-panel sbpc-song-head" }, jC = { class: "sbpc-head-top" }, MC = { class: "sbpc-completion" }, NC = { class: "sbpc-next" }, PC = {
	key: 0,
	class: "sbpc-help",
	"data-sb-vue-passport-detail-recap": ""
}, FC = { class: "sbpc-meta-editor" }, IC = { class: "sbpc-wide" }, LC = { class: "sbpc-panel" }, RC = { class: "sbpc-panel-head" }, zC = ["aria-valuenow"], BC = { class: "sbpc-stages" }, VC = ["data-status"], HC = { class: "sbpc-stage-index" }, UC = { class: "sbpc-stage-body" }, WC = { class: "sbpc-stage-title" }, GC = { class: "sbpc-stage-state" }, KC = {
	key: 0,
	class: "sbpc-resource-present"
}, qC = {
	key: 1,
	class: "sbpc-resource-empty"
}, JC = { class: "sbpc-stage-actions" }, YC = [
	"onUpdate:modelValue",
	"data-pc-stage",
	"aria-label"
], XC = ["value"], ZC = ["data-step"], QC = { class: "sbpc-panel" }, $C = { class: "sbpc-links" }, ew = ["for"], tw = [
	"id",
	"onUpdate:modelValue",
	"data-pc-link"
], nw = ["value"], rw = ["data-type", "data-id"], iw = { class: "sbpc-panel sbpc-arrangement" }, aw = { class: "sbpc-panel-head" }, ow = { class: "sbpc-arrangement-actions" }, sw = {
	key: 0,
	type: "button",
	"data-pc-action": "restore-arrangement"
}, cw = {
	key: 0,
	class: "sbpc-subnote"
}, lw = { class: "sbpc-panel" }, uw = { class: "sbpc-panel-head" }, dw = {
	key: 0,
	class: "sbpc-log"
}, fw = {
	key: 1,
	class: "sbpc-empty"
}, pw = {
	__name: "ProducerSongDetail",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = Q();
		I(() => t.model, (e) => n.publishMasterDetailSummary(e), { immediate: !0 });
		let r = /* @__PURE__ */ k({
			title: t.model.title,
			artist: t.model.artist,
			notes: t.model.notes
		}), i = /* @__PURE__ */ k(Object.fromEntries(t.model.links.map((e) => [e.field, e.value]))), a = /* @__PURE__ */ k(Object.fromEntries(t.model.stages.map((e) => [e.key, e.status])));
		return (t, o) => (B(), V("div", kC, [
			H("section", AC, [
				H("div", jC, [o[3] ||= H("span", { class: "sbpc-kicker" }, "КАРТОЧКА ПРОДЮСИРОВАНИЯ", -1), H("span", MC, D(e.model.percent) + "% готовности", 1)]),
				H("h2", null, D(e.model.title || "Без названия"), 1),
				H("p", null, D(e.model.artist || "Исполнитель пока не указан") + D(e.model.projectTitle ? " · " + e.model.projectTitle : ""), 1),
				H("p", NC, D(e.model.nextLabel ? "Следующий этап: " + e.model.nextLabel : "Все этапы отмечены готовыми"), 1),
				P(n).passportDetailSummary.ready ? (B(), V("p", PC, " Последний открытый паспорт: " + D(P(n).passportDetailSummary.versionCount) + " аудиоверсий · " + D(P(n).passportDetailSummary.linkedCount) + " из 3 материалов связано ", 1)) : W("", !0),
				H("div", FC, [
					H("label", null, [o[4] ||= U("Название песни ", -1), F(H("input", {
						id: "sbpc-title",
						"onUpdate:modelValue": o[0] ||= (e) => r.title = e,
						type: "text",
						maxlength: "120"
					}, null, 512), [[K, r.title]])]),
					H("label", null, [o[5] ||= U("Артист / проект ", -1), F(H("input", {
						id: "sbpc-artist",
						"onUpdate:modelValue": o[1] ||= (e) => r.artist = e,
						type: "text",
						maxlength: "120"
					}, null, 512), [[K, r.artist]])]),
					H("label", IC, [o[6] ||= U("Продюсерские заметки ", -1), F(H("textarea", {
						id: "sbpc-notes",
						"onUpdate:modelValue": o[2] ||= (e) => r.notes = e,
						rows: "3",
						maxlength: "3500",
						placeholder: "Что важно сохранить об этой песне?"
					}, null, 512), [[K, r.notes]])])
				]),
				o[7] ||= H("div", { class: "sbpc-head-actions" }, [H("button", {
					type: "button",
					class: "sbpc-main-btn",
					"data-pc-action": "save-details"
				}, "Сохранить карточку"), H("button", {
					type: "button",
					class: "sbpc-delete-btn",
					"data-pc-action": "delete"
				}, "Удалить рабочую карточку")], -1),
				o[8] ||= H("p", { class: "sbpc-help" }, "Удаление рабочей карточки не удаляет идеи, паспорта, промпты и аудио.", -1)
			]),
			H("section", LC, [
				H("header", RC, [o[9] ||= H("h3", null, "Маршрут песни", -1), H("span", null, D(e.model.done) + " из " + D(e.model.total) + " этапов", 1)]),
				H("div", {
					class: "sbpc-progress",
					role: "progressbar",
					"aria-label": "Готовность работы",
					"aria-valuemin": "0",
					"aria-valuemax": "100",
					"aria-valuenow": e.model.percent
				}, [H("span", { style: T({ width: e.model.percent + "%" }) }, null, 4)], 8, zC),
				H("div", BC, [(B(!0), V(z, null, R(e.model.stages, (t) => (B(), V("article", {
					key: t.key,
					class: "sbpc-stage",
					"data-status": a[t.key]
				}, [H("div", HC, D(a[t.key] === "done" ? "✓" : t.index), 1), H("div", UC, [
					H("div", WC, [H("strong", null, D(t.title), 1), H("small", null, D(t.desc), 1)]),
					H("div", GC, [t.hasMaterial ? (B(), V("span", KC, "● " + D(t.materialLabel), 1)) : (B(), V("span", qC, "○ Подтверждённых материалов нет"))]),
					H("div", JC, [H("label", null, [o[10] ||= U("Готовность ", -1), F(H("select", {
						"onUpdate:modelValue": (e) => a[t.key] = e,
						"data-pc-stage": t.key,
						"aria-label": "Этап " + t.title
					}, [(B(!0), V(z, null, R(e.model.statuses, (e) => (B(), V("option", {
						key: e.id,
						value: e.id
					}, D(e.label), 9, XC))), 128))], 8, YC), [[q, a[t.key]]])]), H("button", {
						type: "button",
						"data-pc-action": "open-stage",
						"data-step": t.key
					}, "Открыть инструмент ↗", 8, ZC)])
				])], 8, VC))), 128))]),
				o[11] ||= H("p", { class: "sbpc-help" }, "Готовность отмечается вручную. Наличие материала показано отдельно и не считается автоматически завершённым этапом.", -1)
			]),
			H("section", QC, [
				o[12] ||= H("header", { class: "sbpc-panel-head" }, [H("h3", null, "Связанные материалы"), H("span", null, "Без копирования данных")], -1),
				o[13] ||= H("p", { class: "sbpc-help" }, "Свяжи существующие идеи, промпты, паспорт трека и карточку с аудио. Исходные записи останутся в своих разделах.", -1),
				H("div", $C, [(B(!0), V(z, null, R(e.model.links, (e) => (B(), V("div", {
					key: e.field,
					class: "sbpc-link-field"
				}, [
					H("label", { for: "sbpc-" + e.field }, D(e.label), 9, ew),
					F(H("select", {
						id: "sbpc-" + e.field,
						"onUpdate:modelValue": (t) => i[e.field] = t,
						"data-pc-link": e.field
					}, [(B(!0), V(z, null, R(e.options, (e) => (B(), V("option", {
						key: e.value,
						value: e.value
					}, D(e.label), 9, nw))), 128))], 8, tw), [[q, i[e.field]]]),
					e.value ? (B(), V("button", {
						key: 0,
						type: "button",
						"data-pc-action": "open-link",
						"data-type": e.type,
						"data-id": e.value
					}, D(e.available ? "Перейти к материалу" : "Материал недоступен") + " ↗ ", 9, rw)) : W("", !0)
				]))), 128))]),
				o[14] ||= H("button", {
					type: "button",
					class: "sbpc-main-btn",
					"data-pc-action": "save-links"
				}, "Сохранить связи", -1)
			]),
			H("section", iw, [
				H("header", aw, [o[15] ||= H("h3", null, "Аранжировка для этой песни", -1), H("span", null, D(e.model.arrangement.count ? e.model.arrangement.count + " блоков сохранено" : "Снимок ещё не сохранён"), 1)]),
				o[18] ||= H("p", { class: "sbpc-help" }, "Конструктор Suno Studio использует текущий рабочий черновик. Сохрани его сюда отдельно для песни; восстановление выполняется только по твоей команде.", -1),
				H("div", ow, [
					o[16] ||= H("button", {
						type: "button",
						"data-pc-action": "capture-arrangement"
					}, "Сохранить текущую аранжировку", -1),
					e.model.arrangement.count ? (B(), V("button", sw, "Восстановить в Studio")) : W("", !0),
					o[17] ||= H("button", {
						type: "button",
						"data-pc-action": "open-stage",
						"data-step": "arrangement"
					}, "Открыть аранжировщик ↗", -1)
				]),
				e.model.arrangement.count ? (B(), V("p", cw, " Сохранено: " + D(e.model.arrangement.savedAt) + " · " + D(e.model.arrangement.count) + " блоков · " + D(e.model.arrangement.duration || "длительность не рассчитана"), 1)) : W("", !0)
			]),
			H("section", lw, [
				H("header", uw, [o[19] ||= H("h3", null, "История работы", -1), H("span", null, D(e.model.history.length) + " событий", 1)]),
				o[20] ||= H("div", { class: "sbpc-log-input" }, [H("input", {
					id: "sbpc-history-note",
					type: "text",
					maxlength: "350",
					placeholder: "Добавить запись: что изменилось или что сделать дальше"
				}), H("button", {
					type: "button",
					"data-pc-action": "add-note"
				}, "Добавить")], -1),
				e.model.history.length ? (B(), V("ol", dw, [(B(!0), V(z, null, R(e.model.history, (e, t) => (B(), V("li", { key: t }, [H("time", null, D(e.date), 1), H("span", null, D(e.text), 1)]))), 128))])) : (B(), V("p", fw, "История пока пуста."))
			])
		]));
	}
};
// src/vue/producer/legacyProducerSongDetailBridge.js
function mw({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PRODUCER_DETAIL, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-producer-detail[data-sb-vue-producer-host]"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, pw, { model: n })
	});
}
// src/vue/account/TrackPassportList.vue
var hw = {
	key: 0,
	class: "sb-track-disclaimer",
	"data-sb-vue-master-recap": ""
}, gw = {
	class: "sb-track-filters",
	role: "group",
	"aria-label": "Фильтр паспортов по этапу"
}, _w = ["data-filter", "aria-pressed"], vw = {
	key: 1,
	class: "sb-track-list"
}, yw = ["data-id"], bw = {
	key: 2,
	class: "sb-track-empty"
}, xw = {
	__name: "TrackPassportList",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = Q();
		return I(() => t.model, (e) => n.publishPassportListSummary(e), { immediate: !0 }), (t, r) => (B(), V(z, null, [
			P(n).masterListSummary.ready ? (B(), V("p", hw, " В Мастере: " + D(P(n).masterListSummary.workCount) + " песен в работе · " + D(P(n).masterListSummary.finishedCount) + " маршрутов полностью пройдено ", 1)) : W("", !0),
			H("div", gw, [(B(!0), V(z, null, R(e.model.filters, (t) => (B(), V("button", {
				key: t.key,
				type: "button",
				"data-action": "tp-filter",
				"data-filter": t.key,
				class: E({ active: e.model.active === t.key }),
				"aria-pressed": e.model.active === t.key
			}, D(t.label), 11, _w))), 128))]),
			e.model.records.length ? (B(), V("div", vw, [(B(!0), V(z, null, R(e.model.records, (e) => (B(), V("button", {
				key: e.id,
				type: "button",
				class: "sb-track-tile",
				"data-action": "tp-open",
				"data-id": e.id
			}, [
				r[0] ||= H("span", { class: "sb-track-note" }, "♫", -1),
				H("span", null, [
					H("strong", null, D(e.title), 1),
					H("small", null, D(e.artist), 1),
					H("small", null, D(e.statusLabel) + D(e.releaseLabel ? " · " + e.releaseLabel : ""), 1)
				]),
				r[1] ||= H("i", { "aria-hidden": "true" }, "→", -1)
			], 8, yw))), 128))])) : (B(), V("div", bw, D(e.model.hasRecords ? "В этой категории пока нет треков." : "Паспортов пока нет. Создай первый, чтобы объединить материалы песни."), 1))
		], 64));
	}
};
// src/vue/account/legacyTrackPassportListBridge.js
function Sw({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_TRACK_LIST, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-track-list[data-sb-vue-track-list]"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, xw, { model: n })
	});
}
// src/vue/account/TrackPassportDetail.vue
var Cw = {
	class: "sb-track-detail",
	"data-sb-vue-track-detail-view": ""
}, ww = {
	key: 0,
	class: "sb-track-disclaimer",
	"data-sb-vue-master-detail-recap": ""
}, Tw = { class: "sb-track-buttons" }, Ew = ["data-id"], Dw = ["data-id"], Ow = ["data-id"], kw = { class: "sb-track-hero" }, Aw = { class: "sb-track-cover" }, jw = ["src"], Mw = { class: "sb-track-phase" }, Nw = { class: "sb-track-facts" }, Pw = { class: "sb-track-buttons" }, Fw = ["href"], Iw = ["href"], Lw = { class: "sb-track-linkgrid" }, Rw = ["data-action", "data-id"], zw = {
	key: 1,
	class: "sb-track-linked sb-track-linked-empty"
}, Bw = ["data-action", "data-id"], Vw = {
	key: 3,
	class: "sb-track-linked sb-track-linked-empty"
}, Hw = ["data-action", "data-id"], Uw = {
	key: 5,
	class: "sb-track-linked sb-track-linked-empty"
}, Ww = { class: "sb-track-section" }, Gw = { key: 0 }, Kw = ["href"], qw = [
	"data-id",
	"data-version",
	"aria-label"
], Jw = {
	key: 2,
	class: "sb-track-disclaimer"
}, Yw = { class: "sb-track-versionform" }, Xw = ["data-id"], Zw = {
	__name: "TrackPassportDetail",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = Q();
		return I(() => t.model, (e) => n.publishPassportDetailSummary(e), { immediate: !0 }), (t, r) => (B(), V("div", Cw, [
			P(n).masterDetailSummary.ready ? (B(), V("p", ww, " Последняя карточка Мастера: " + D(P(n).masterDetailSummary.done) + " из " + D(P(n).masterDetailSummary.total) + " этапов · " + D(P(n).masterDetailSummary.linkedCount) + " из 6 связей ", 1)) : W("", !0),
			H("div", Tw, [
				r[0] ||= H("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "tp-list"
				}, "← К списку", -1),
				H("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "tp-edit",
					"data-id": e.model.id
				}, "Изменить", 8, Ew),
				H("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "tp-event",
					"data-id": e.model.id
				}, "В календарь релизов", 8, Dw),
				H("button", {
					type: "button",
					class: "btn danger small",
					"data-action": "tp-delete",
					"data-id": e.model.id
				}, "Удалить", 8, Ow)
			]),
			H("div", kw, [H("div", Aw, [e.model.cover ? (B(), V("img", {
				key: 0,
				src: e.model.cover,
				alt: "Обложка",
				loading: "lazy"
			}, null, 8, jw)) : (B(), V(z, { key: 1 }, [U("♫")], 64))]), H("div", null, [
				H("span", Mw, D(e.model.phase), 1),
				H("h2", null, D(e.model.title), 1),
				H("p", null, D(e.model.artist), 1)
			])]),
			H("div", Nw, [(B(!0), V(z, null, R(e.model.facts, (e) => (B(), V("div", {
				key: e.label,
				class: "sb-track-fact"
			}, [H("span", null, D(e.label), 1), H("strong", null, D(e.value || "Не указано"), 1)]))), 128))]),
			H("div", Pw, [e.model.audio ? (B(), V("a", {
				key: 0,
				class: "btn ghost",
				href: e.model.audio,
				rel: "noopener noreferrer",
				target: "_blank"
			}, "Прослушать ↗", 8, Fw)) : W("", !0), e.model.cover ? (B(), V("a", {
				key: 1,
				class: "btn ghost",
				href: e.model.cover,
				rel: "noopener noreferrer",
				target: "_blank"
			}, "Обложка ↗", 8, Iw)) : W("", !0)]),
			r[8] ||= H("h3", { class: "sb-track-section" }, "Связанные материалы", -1),
			H("div", Lw, [
				e.model.links[0].exists ? (B(), V("button", {
					key: 0,
					type: "button",
					class: "sb-track-linked",
					"data-action": e.model.links[0].action,
					"data-id": e.model.links[0].id
				}, [
					H("small", null, D(e.model.links[0].label), 1),
					H("strong", null, D(e.model.links[0].title), 1),
					r[1] ||= H("span", null, "Открыть →", -1)
				], 8, Rw)) : (B(), V("div", zw, [H("small", null, D(e.model.links[0].label), 1), r[2] ||= H("strong", null, "Не привязан", -1)])),
				e.model.links[1].exists ? (B(), V("button", {
					key: 2,
					type: "button",
					class: "sb-track-linked",
					"data-action": e.model.links[1].action,
					"data-id": e.model.links[1].id
				}, [
					H("small", null, D(e.model.links[1].label), 1),
					H("strong", null, D(e.model.links[1].title), 1),
					r[3] ||= H("span", null, "Открыть →", -1)
				], 8, Bw)) : (B(), V("div", Vw, [H("small", null, D(e.model.links[1].label), 1), r[4] ||= H("strong", null, "Не привязан", -1)])),
				e.model.links[2].exists ? (B(), V("button", {
					key: 4,
					type: "button",
					class: "sb-track-linked",
					"data-action": e.model.links[2].action,
					"data-id": e.model.links[2].id
				}, [
					H("small", null, D(e.model.links[2].label), 1),
					H("strong", null, D(e.model.links[2].title), 1),
					r[5] ||= H("span", null, "Открыть →", -1)
				], 8, Hw)) : (B(), V("div", Uw, [H("small", null, D(e.model.links[2].label), 1), r[6] ||= H("strong", null, "Не привязан", -1)]))
			]),
			(B(!0), V(z, null, R(e.model.sections, (e) => (B(), V("section", {
				key: e.label,
				class: "sb-track-sectionbox"
			}, [H("h3", null, D(e.label), 1), H("pre", null, D(e.text), 1)]))), 128)),
			H("h3", Ww, "Версии трека (" + D(e.model.versions.length) + ")", 1),
			e.model.versions.length ? (B(!0), V(z, { key: 1 }, R(e.model.versions, (t) => (B(), V("div", {
				key: t.id,
				class: "sb-track-version"
			}, [H("div", null, [
				H("strong", null, D(t.label), 1),
				H("small", null, D(t.date), 1),
				t.notes ? (B(), V("p", Gw, D(t.notes), 1)) : W("", !0)
			]), H("div", null, [t.url ? (B(), V("a", {
				key: 0,
				href: t.url,
				rel: "noopener noreferrer",
				target: "_blank"
			}, "Прослушать ↗", 8, Kw)) : W("", !0), H("button", {
				type: "button",
				class: "btn danger small",
				"data-action": "tp-version-remove",
				"data-id": e.model.id,
				"data-version": t.id,
				"aria-label": "Удалить версию " + t.label
			}, "×", 8, qw)])]))), 128)) : (B(), V("p", Jw, "Версий пока нет.")),
			H("div", Yw, [r[7] ||= fa("<div class=\"field\"><label for=\"tp-version-title\">Название новой версии</label><input id=\"tp-version-title\" maxlength=\"100\" placeholder=\"Демо 2 / Финальный мастер\"></div><div class=\"field\"><label for=\"tp-version-url\">Ссылка (HTTPS)</label><input id=\"tp-version-url\" type=\"url\" maxlength=\"2000\" placeholder=\"https://…\"></div><div class=\"field\"><label for=\"tp-version-notes\">Что изменилось?</label><input id=\"tp-version-notes\" maxlength=\"300\" placeholder=\"Необязательно\"></div>", 3), H("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "tp-version-add",
				"data-id": e.model.id
			}, "+ Добавить версию", 8, Xw)]),
			r[9] ||= H("p", { class: "sb-track-disclaimer" }, " Связанный текст и промпт показываются из оригинальных разделов. Расчётные даты — ориентир, окончательная дата определяется издательством. ", -1)
		]));
	}
};
// src/vue/account/legacyTrackPassportDetailBridge.js
function Qw({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_TRACK_DETAIL, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-track-detail[data-sb-vue-track-detail]"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, Zw, { model: n })
	});
}
// src/vue/account/TrackPassportEditor.vue
var $w = {
	id: "sb-track-form",
	class: "panel sb-track-form",
	"data-sb-vue-track-editor-view": ""
}, eT = { class: "sb-track-formhead" }, tT = { class: "sb-track-fields" }, nT = ["for"], rT = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"placeholder"
], iT = { class: "field" }, aT = ["value"], oT = { class: "field" }, sT = ["value"], cT = { class: "field" }, lT = ["value"], uT = { class: "field" }, dT = ["value"], fT = { class: "field" }, pT = ["value"], mT = { class: "field" }, hT = { class: "sb-track-fields" }, gT = { class: "field" }, _T = { class: "field" }, vT = ["disabled"], yT = { class: "sb-track-manual" }, bT = {
	id: "tp-date-hint",
	class: "sb-track-hint"
}, xT = { class: "sb-track-fields" }, ST = ["for"], CT = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"placeholder"
], wT = ["for"], TT = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"rows"
], ET = {
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
		let t = e, n = /* @__PURE__ */ k({ ...t.model.fields }), r = G(() => t.api.date7(n.submitted)), i = G(() => r.value ? "Автоматический расчёт: " + t.api.dateLabel(r.value) + " (через 7 календарных дней)." : "Укажи дату передачи издательству: релиз автоматически через 7 дней.");
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
		return (t, r) => (B(), V("div", $w, [
			H("div", eT, [H("h2", null, D(e.model.editing ? "Редактировать паспорт" : "Новый паспорт трека"), 1), r[9] ||= H("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "tp-cancel"
			}, "Закрыть", -1)]),
			H("div", tT, [
				(B(!0), V(z, null, R(o.slice(0, 2), (e) => (B(), V("div", {
					key: e.id,
					class: "field"
				}, [H("label", { for: "tp-" + e.id }, D(e.label), 9, nT), F(H("input", {
					id: "tp-" + e.id,
					"onUpdate:modelValue": (t) => n[e.id] = t,
					maxlength: e.max,
					placeholder: e.placeholder
				}, null, 8, rT), [[K, n[e.id]]])]))), 128)),
				H("div", iT, [r[10] ||= H("label", { for: "tp-status" }, "Этап работы", -1), F(H("select", {
					id: "tp-status",
					"onUpdate:modelValue": r[0] ||= (e) => n.status = e
				}, [(B(!0), V(z, null, R(e.model.stages, (e) => (B(), V("option", {
					key: e.value,
					value: e.value
				}, D(e.label), 9, aT))), 128))], 512), [[q, n.status]])]),
				H("div", oT, [r[11] ||= H("label", { for: "tp-genre" }, "Жанр", -1), F(H("select", {
					id: "tp-genre",
					"onUpdate:modelValue": r[1] ||= (e) => n.genre = e
				}, [(B(!0), V(z, null, R(e.model.genres, (e) => (B(), V("option", {
					key: e.value,
					value: e.value
				}, D(e.label), 9, sT))), 128))], 512), [[q, n.genre]])]),
				H("div", cT, [r[13] ||= H("label", { for: "tp-project" }, "Мой проект / артист", -1), F(H("select", {
					id: "tp-project",
					"onUpdate:modelValue": r[2] ||= (e) => n.project = e
				}, [r[12] ||= H("option", { value: "" }, "Без связи", -1), (B(!0), V(z, null, R(e.model.projects, (e) => (B(), V("option", {
					key: e.value,
					value: e.value
				}, D(e.label), 9, lT))), 128))], 512), [[q, n.project]])]),
				H("div", uT, [r[15] ||= H("label", { for: "tp-idea" }, "Идея и текст песни", -1), F(H("select", {
					id: "tp-idea",
					"onUpdate:modelValue": r[3] ||= (e) => n.idea = e
				}, [r[14] ||= H("option", { value: "" }, "Без связи", -1), (B(!0), V(z, null, R(e.model.ideas, (e) => (B(), V("option", {
					key: e.value,
					value: e.value
				}, D(e.label), 9, dT))), 128))], 512), [[q, n.idea]])]),
				H("div", fT, [r[17] ||= H("label", { for: "tp-prompt" }, "Мой промпт Suno", -1), F(H("select", {
					id: "tp-prompt",
					"onUpdate:modelValue": r[4] ||= (e) => n.prompt = e
				}, [r[16] ||= H("option", { value: "" }, "Без связи", -1), (B(!0), V(z, null, R(e.model.prompts, (e) => (B(), V("option", {
					key: e.value,
					value: e.value
				}, D(e.label), 9, pT))), 128))], 512), [[q, n.prompt]])]),
				H("div", mT, [r[18] ||= H("label", { for: "tp-publisher" }, "Издательство / дистрибьютор", -1), F(H("input", {
					id: "tp-publisher",
					"onUpdate:modelValue": r[5] ||= (e) => n.publisher = e,
					maxlength: "120",
					placeholder: "Название издательства"
				}, null, 512), [[K, n.publisher]])])
			]),
			r[22] ||= H("h3", { class: "sb-track-section" }, "Даты релиза", -1),
			H("div", hT, [H("div", gT, [r[19] ||= H("label", { for: "tp-submitted" }, "Передано издательству", -1), F(H("input", {
				id: "tp-submitted",
				"onUpdate:modelValue": r[6] ||= (e) => n.submitted = e,
				type: "date",
				onChange: a
			}, null, 544), [[K, n.submitted]])]), H("div", _T, [
				r[21] ||= H("label", { for: "tp-release" }, "Дата выхода", -1),
				F(H("input", {
					id: "tp-release",
					"onUpdate:modelValue": r[7] ||= (e) => n.release = e,
					type: "date",
					disabled: !n.override
				}, null, 8, vT), [[K, n.release]]),
				H("label", yT, [F(H("input", {
					id: "tp-override",
					"onUpdate:modelValue": r[8] ||= (e) => n.override = e,
					type: "checkbox",
					onChange: a
				}, null, 544), [[Io, n.override]]), r[20] ||= U(" Установить дату вручную ", -1)])
			])]),
			H("p", bT, D(i.value), 1),
			r[23] ||= H("h3", { class: "sb-track-section" }, "Материалы и метаданные", -1),
			H("div", xT, [(B(), V(z, null, R(s, (e) => H("div", {
				key: e.id,
				class: "field"
			}, [H("label", { for: "tp-" + e.id }, D(e.label), 9, ST), F(H("input", {
				id: "tp-" + e.id,
				"onUpdate:modelValue": (t) => n[e.id] = t,
				maxlength: e.max,
				placeholder: e.placeholder
			}, null, 8, CT), [[K, n[e.id]]])])), 64))]),
			(B(), V(z, null, R(c, (e) => H("div", {
				key: e.id,
				class: "field"
			}, [H("label", { for: "tp-" + e.id }, D(e.label), 9, wT), F(H("textarea", {
				id: "tp-" + e.id,
				"onUpdate:modelValue": (t) => n[e.id] = t,
				maxlength: e.max,
				rows: e.rows
			}, null, 8, TT), [[K, n[e.id]]])])), 64)),
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
function DT({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_TRACK_EDITOR, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-track-editor[data-sb-vue-track-editor]"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, ET, {
			model: r,
			api: t
		})
	});
}
// src/vue/poetry/IdeaFields.vue
var OT = { class: "field" }, kT = { class: "field" }, AT = ["value"], jT = { class: "field" }, MT = {
	class: "sub",
	"data-sb-vue-idea-draft-progress": ""
}, NT = {
	key: 0,
	class: "sub",
	"data-sb-vue-last-prompt-draft": ""
}, PT = { class: "field" }, FT = {
	__name: "IdeaFields",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = /* @__PURE__ */ k({ ...e.initial.values }), n = Q();
		return I(() => [
			t.title,
			t.genre,
			t.text,
			t.hook
		], () => n.publishIdeaDraftSummary(t), { immediate: !0 }), (r, i) => (B(), V(z, null, [
			H("div", OT, [i[4] ||= H("label", { for: "custom-idea-title" }, "Название песни", -1), F(H("input", {
				id: "custom-idea-title",
				"onUpdate:modelValue": i[0] ||= (e) => t.title = e,
				maxlength: "100",
				placeholder: "Например, Город на ладони"
			}, null, 512), [[K, t.title]])]),
			H("div", kT, [i[5] ||= H("label", { for: "custom-idea-genre" }, "Музыкальный жанр", -1), F(H("select", {
				id: "custom-idea-genre",
				"onUpdate:modelValue": i[1] ||= (e) => t.genre = e
			}, [(B(!0), V(z, null, R(e.initial.genres, (e) => (B(), V("option", {
				key: e.id,
				value: e.id
			}, D(e.name), 9, AT))), 128))], 512), [[q, t.genre]])]),
			H("div", jT, [i[6] ||= H("label", { for: "custom-idea-text" }, "Сюжет и основная идея", -1), F(H("textarea", {
				id: "custom-idea-text",
				"onUpdate:modelValue": i[2] ||= (e) => t.text = e,
				rows: "5",
				maxlength: "3000",
				placeholder: "О чём песня и что происходит с героем?"
			}, null, 512), [[K, t.text]])]),
			H("p", MT, "Сюжет: " + D(P(n).ideaDraftSummary.ideaLength) + " / 3000 · Название: " + D(P(n).ideaDraftSummary.titleLength) + " / 100", 1),
			P(n).promptDraftSummary.ready ? (B(), V("p", NT, "Последний открытый черновик промпта: " + D(P(n).promptDraftSummary.textLength) + " / 1000 символов", 1)) : W("", !0),
			H("div", PT, [i[7] ||= H("label", { for: "custom-idea-hook" }, "Фраза для припева (необязательно)", -1), F(H("input", {
				id: "custom-idea-hook",
				"onUpdate:modelValue": i[3] ||= (e) => t.hook = e,
				maxlength: "240",
				placeholder: "Запоминающаяся строчка"
			}, null, 512), [[K, t.hook]])])
		], 64));
	}
}, IT = {
	key: 0,
	class: "sub",
	"data-sb-vue-poetry-source-count": ""
}, LT = {
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
		let t = e, n = /* @__PURE__ */ M(null), r = Q(), i = () => {
			n.value && r.publishPoetrySourceSummary(n.value.value);
		}, a = (e) => {
			e.target.closest?.("[data-action=\"sb-poetry-accent\"]") && i();
		};
		return L(() => {
			t.initial.highlighted && t.api.enableHighlight(n.value), i(), document.addEventListener("click", a);
		}), Sr(() => document.removeEventListener("click", a)), (t, a) => (B(), V(z, null, [
			a[1] ||= H("label", { for: "custom-idea-lyrics" }, "Оригинальный текст (необязательно)", -1),
			a[0] || (ta(-1, !0), (a[0] = H("textarea", {
				id: "custom-idea-lyrics",
				ref_key: "area",
				ref: n,
				value: e.initial.values.lyrics,
				onInput: i,
				rows: "12",
				maxlength: "20000",
				placeholder: "Куплет 1:\nТекст первого куплета...\n\nПрипев:\nТекст припева..."
			}, null, 40, ["value"])).cacheIndex = 0, ta(1), a[0]),
			P(r).poetrySourceSummary.ready ? (B(), V("p", IT, " Исходный текст: " + D(P(r).poetrySourceSummary.charCount) + " / 20000 символов · " + D(P(r).poetrySourceSummary.lineCount) + " непустых строк ", 1)) : W("", !0)
		], 64));
	}
}, RT = {
	key: 0,
	class: "workbench-note",
	"data-sb-vue-poetry-tools-count": ""
}, zT = {
	key: 1,
	class: "workbench-note",
	"data-sb-vue-poetry-analysis-count": ""
}, BT = {
	key: 2,
	class: "workbench-note",
	"data-sb-vue-poetry-ambiguity-count": ""
}, VT = {
	key: 3,
	class: "workbench-note",
	"data-sb-vue-tags-summary": ""
}, HT = {
	key: 0,
	"data-sb-vue-tags-freshness": "",
	role: "status"
}, UT = { key: 0 }, WT = { key: 1 }, GT = { key: 2 }, KT = { class: "field" }, qT = ["value"], JT = { class: "workbench-switches" }, YT = ["id", "onUpdate:modelValue"], XT = { class: "field" }, ZT = { class: "detail-actions" }, QT = {
	type: "button",
	class: "btn ghost",
	"data-action": "copy-current-lyrics"
}, $T = ["innerHTML"], eE = { class: "field" }, tE = { class: "detail-actions" }, nE = {
	type: "button",
	class: "btn ghost",
	"data-action": "copy-current-style"
}, rE = ["innerHTML"], iE = {
	__name: "LyricsTools",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ k({ ...t.initial.values }), r = /* @__PURE__ */ k({ ...t.initial.switches }), i = Q(), a = {
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
		return (t, c) => (B(), V(z, null, [
			P(i).poetrySourceSummary.ready ? (B(), V("p", RT, " Исходник для аранжировки: " + D(P(i).poetrySourceSummary.lineCount) + " строк, " + D(P(i).poetrySourceSummary.wordCount) + " слов ", 1)) : W("", !0),
			P(i).poetryAnalysisSummary.analyzed ? (B(), V("p", zT, " Последний анализ: " + D(P(i).poetryAnalysisSummary.rowCount) + " строк · " + D(P(i).poetryAnalysisSummary.stressMarkCount) + " меток ударения · " + D(P(i).poetryAnalysisSummary.suggestionCount) + " рекомендаций ", 1)) : W("", !0),
			P(i).poetryAmbiguitySummary.ready ? (B(), V("p", BT, " Предпросмотр ударений: " + D(P(i).poetryAmbiguitySummary.occurrenceCount) + " неоднозначных вхождений · " + D(P(i).poetryAmbiguitySummary.distinctCount) + " разных слов ", 1)) : W("", !0),
			P(i).performanceTagsSummary.ready ? (B(), V("p", VT, [U(" Теги исполнения: " + D(a[P(i).performanceTagsSummary.mode]) + " · интенсивность " + D(P(i).performanceTagsSummary.intensity) + "/5 · " + D(P(i).performanceTagsSummary.enabledTechniques) + " приёмов · " + D(P(i).performanceTagsSummary.busy ? "идёт генерация" : P(i).performanceTagsSummary.previewOpen ? P(i).performanceTagsSummary.sectionCount + " секций в предпросмотре" : "предпросмотр закрыт") + " ", 1), P(i).performanceTagsSummary.previewOpen ? (B(), V("span", HT, [
				U(" · " + D(P(i).performanceTagsSummary.previewFresh ? "Текст и настройки не изменены; проверь теги перед применением." : "Предпросмотр устарел — создай новый.") + " ", 1),
				P(i).performanceTagsSummary.sourceChanged ? (B(), V("span", UT, " Изменён исходник.")) : W("", !0),
				P(i).performanceTagsSummary.targetChanged ? (B(), V("span", WT, " Изменено готовое поле Lyrics.")) : W("", !0),
				P(i).performanceTagsSummary.settingsChanged ? (B(), V("span", GT, " Изменены настройки.")) : W("", !0)
			])) : W("", !0)])) : W("", !0),
			H("div", KT, [c[3] ||= H("label", { for: "lyrics-tag-preset" }, "Характер аранжировки", -1), F(H("select", {
				id: "lyrics-tag-preset",
				"onUpdate:modelValue": c[0] ||= (e) => n.preset = e
			}, [(B(), V(z, null, R(o, ([e, t]) => H("option", {
				key: e,
				value: e
			}, D(t), 9, qT)), 64))], 512), [[q, n.preset]])]),
			H("div", JT, [(B(), V(z, null, R(s, ([e, t]) => H("label", { key: e }, [F(H("input", {
				id: "lyrics-" + e,
				"onUpdate:modelValue": (t) => r[e] = t,
				type: "checkbox"
			}, null, 8, YT), [[Io, r[e]]]), U(" " + D(t), 1)])), 64))]),
			c[8] ||= H("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "format-idea-lyrics"
			}, "✨ Создать теги и усилители", -1),
			c[9] ||= H("p", { class: "workbench-note" }, "Разметка примерная: если в тексте нет названий секций, куплеты и припевы определяются по абзацам. Проверь расположение тегов перед копированием.", -1),
			H("div", XT, [c[4] ||= H("label", { for: "custom-idea-tagged" }, "Готовая версия для поля Lyrics в Suno (можно исправить вручную)", -1), F(H("textarea", {
				id: "custom-idea-tagged",
				"onUpdate:modelValue": c[1] ||= (e) => n.tagged = e,
				rows: "13",
				maxlength: "25000",
				placeholder: "[Verse 1]\n...\n\n[Chorus - powerful melodic hook]\n..."
			}, null, 512), [[K, n.tagged]])]),
			H("div", ZT, [H("button", QT, [H("span", { innerHTML: e.initial.copyIcon }, null, 8, $T), c[5] ||= U(" Копировать Lyrics", -1)])]),
			H("div", eE, [c[6] ||= H("label", { for: "custom-idea-style" }, "Дополнительное описание для поля Style (до 1000 символов)", -1), F(H("textarea", {
				id: "custom-idea-style",
				"onUpdate:modelValue": c[2] ||= (e) => n.style = e,
				rows: "4",
				maxlength: "1000",
				placeholder: "Описание жанра, вокала и динамики для Suno"
			}, null, 512), [[K, n.style]])]),
			H("div", tE, [H("button", nE, [H("span", { innerHTML: e.initial.copyIcon }, null, 8, rE), c[7] ||= U(" Копировать Style", -1)])])
		], 64));
	}
};
// src/vue/poetry/legacyIdeaEditorBridge.js
function aE({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_IDEA_EDITOR, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : vc({
		root: n,
		islands: [
			["sb-vue-idea-fields", FT],
			["sb-vue-lyrics-source", LT],
			["sb-vue-lyrics-tools", iE]
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
function oE({ sharedUi: e }) {
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
var sE = {
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
		return (t, n) => (B(), ra(Ar(e.component), ve(ua(e.componentProps)), null, 16));
	}
}, cE = [
	"data-nav",
	"data-vue-router-path",
	"aria-current",
	"aria-label",
	"title",
	"onClick"
], lE = ["innerHTML"], uE = { class: "sb-vue-nav-label" }, dE = {
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
		let t = Xp(), n = Yp(), r = Q(), i = e, a = G(() => r.navigationItems.length ? r.navigationItems : i.items);
		function o(e) {
			i.onNavigate(e, n);
		}
		let s = (e) => {
			let n = r.route;
			return (t.path === $p(n.route) ? em(t.path) : n.active) === e;
		};
		return (n, r) => (B(!0), V(z, null, R(a.value, (n) => (B(), V("button", {
			key: n.id,
			type: "button",
			class: E(e.mobile ? s(n.id) ? "active" : "" : ["nav-button", { active: s(n.id) }]),
			"data-nav": n.id,
			"data-vue-router-path": P(t).path,
			"aria-current": s(n.id) ? "page" : void 0,
			"aria-label": e.mobile ? n.label : void 0,
			title: e.mobile ? n.label : void 0,
			onClick: (e) => o(n.id)
		}, [H("span", {
			class: "sb-vue-nav-icon",
			"aria-hidden": "true",
			innerHTML: n.iconHtml
		}, null, 8, lE), H("span", uE, D(e.mobile ? n.shortLabel : n.label), 1)], 10, cE))), 128));
	}
}, fE = {
	class: "sb-vue-history-toolbar",
	role: "group",
	"aria-label": "История разделов SUNOBOOM"
}, pE = ["disabled"], mE = ["disabled"], hE = /*#__PURE__*/ Vh({
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
		let t = e, n = Xp(), r = Q(), i = /* @__PURE__ */ M(!1), a = G(() => (n.path, r.route.revision, um.value, {
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
		return (e, t) => (B(), V("div", fE, [
			t[4] ||= H("span", { class: "sb-vue-history-caption" }, "История разделов", -1),
			H("button", {
				type: "button",
				class: "sb-vue-history-button",
				"data-sb-history-back": "",
				disabled: !a.value.back,
				"aria-label": "Назад по разделам",
				title: "К предыдущему разделу",
				onClick: t[0] ||= (e) => o("back")
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
			}, [H("path", { d: "m15 18-6-6 6-6" })], -1)]], 8, pE),
			H("button", {
				type: "button",
				class: "sb-vue-history-button",
				"data-sb-history-forward": "",
				disabled: !a.value.forward,
				"aria-label": "Вперёд по разделам",
				title: "К следующему разделу",
				onClick: t[1] ||= (e) => o("forward")
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
			}, [H("path", { d: "m9 18 6-6-6-6" })], -1)]], 8, mE)
		]));
	}
}, [["__scopeId", "data-v-c738b8ec"]]), gE = Object.freeze({
	"/account/myideas": "myideas",
	"/account/myprompts": "myprompts",
	"/account/events": "events"
});
function _E(e) {
	if (e?.active === "producer" && e?.production?.id) return $p("producer", {
		kind: "production",
		id: e.production.id
	});
	let t = e?.track;
	return $p(e?.active, t?.id ? {
		kind: "track",
		id: t.id
	} : null);
}
function vE(e, t) {
	if (!e || typeof t?.snapshot != "function") return null;
	let n = t.snapshot();
	if (n?.trackEditing) return null;
	let r = ym(e.path);
	if (r && n?.items?.some((e) => e?.id === r)) return {
		kind: "menu",
		id: r
	};
	let i = gE[e.path];
	if (i && typeof t.navigateWorkspace == "function") return {
		kind: "workspace",
		id: i
	};
	let a = e.context;
	return e.path === "/catalog/detail" && a?.kind === "genre" && typeof t.canRestoreGenre == "function" && t.canRestoreGenre(a.id, a.tab) && typeof t.restoreGenre == "function" ? {
		kind: "genre",
		id: a.id,
		tab: a.tab
	} : a?.kind === "production" && e.path === $p("producer", a) && t.canRestoreProduction?.(a.id) === !0 && typeof t.restoreProduction == "function" ? {
		kind: "production",
		id: a.id
	} : e.path === "/account/tracks" && t.canRestoreTrackList?.() === !0 && typeof t.restoreTrackList == "function" ? { kind: "track-list" } : e.path === "/account/tracks/detail" && a?.kind === "track" && t.canRestoreTrack?.(a.id) === !0 && typeof t.restoreTrack == "function" ? {
		kind: "track",
		id: a.id
	} : null;
}
var yE = !1;
function bE(e, { legacyApi: t } = {}) {
	if (yE || !["back", "forward"].includes(e) || typeof t?.snapshot != "function") return !1;
	let n = vm(e), r = t.snapshot();
	return !!vE(n, t) && Cm().path === _E(r);
}
async function xE(e, { legacyApi: t, syncRoute: n = Em } = {}) {
	if (yE || !["back", "forward"].includes(e) || !t || typeof t.snapshot != "function" || typeof t.navigate != "function") return !1;
	yE = !0;
	try {
		await xm();
		let r = vE(vm(e), t), i = t.snapshot();
		if (!r || Cm().path !== _E(i) || !await Sm(e)) return !1;
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
		yE = !1;
	}
}
// src/vue/navigation/legacyBridge.js
var SE = [{
	key: "sidebar",
	selector: "[data-sb-vue-sidebar]",
	mobile: !1
}, {
	key: "mobile",
	selector: "[data-sb-vue-mobile]",
	mobile: !0
}];
function CE({ mountVueFeature: e, unmountVueFeature: t, sharedUi: n }) {
	let r = window.SUNOBOOM_LEGACY_NAV, i = document.getElementById("app");
	if (!r || !i || typeof r.snapshot != "function") return () => {};
	let a = () => {}, o = [], s, c = !1;
	window.SUNOBOOM_VUE_ROUTE = Object.freeze({
		snapshot: () => Tm.value,
		routerSnapshot: () => Cm(),
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
		back: () => xE("back", { legacyApi: r }),
		forward: () => xE("forward", { legacyApi: r }),
		recordGenre: (e, t, n = "push") => {
			let i = r.snapshot();
			return i.active !== "detail" || i.detail?.id !== e || i.detail?.tab !== t || !r.canRestoreGenre?.(e, t) ? !1 : (Em("detail", {
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
			return n.active !== "producer" || n.production?.id !== e || !r.canRestoreProduction?.(e) ? !1 : (Em("producer", {
				historyMode: t,
				context: {
					kind: "production",
					id: e
				}
			}), !0);
		},
		recordTrackList: () => {
			let e = r.snapshot();
			return e.active !== "tracks" || e.track?.id || e.trackEditing ? !1 : (Em("tracks"), !0);
		},
		recordTrack: (e, t = "push") => {
			let n = r.snapshot();
			return n.active !== "tracks" || n.track?.id !== e || n.trackEditing || !r.canRestoreTrack?.(e) ? !1 : (Em("tracks", {
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
		Em(e.active, { context: e.track?.id ? {
			kind: "track",
			id: e.track.id
		} : e.active === "producer" && e.production?.id ? {
			kind: "production",
			id: e.production.id
		} : null }), o = Zd(e), n.publishNavigation(o), s = JSON.stringify(o.map(({ active: e, ...t }) => t));
	}
	let u = r.snapshot();
	return Em(u.active, { context: u.track?.id ? {
		kind: "track",
		id: u.track.id
	} : u.active === "producer" && u.production?.id ? {
		kind: "production",
		id: u.production.id
	} : null }), xm().then(() => {
		c || (a = vc({
			root: i,
			beforeSync: l,
			islands: [{
				key: "history",
				selectTarget: (e) => e.querySelector("[data-sb-vue-history]"),
				readSnapshot: () => r,
				mount: (t) => e(t, hE, {
					canRestore: (e) => bE(e, { legacyApi: r }),
					onRestore: (e) => xE(e, { legacyApi: r })
				}, { vueRouter: !0 })
			}, ...SE.map(({ key: t, selector: n, mobile: i }) => ({
				key: t,
				selectTarget: (e) => e.querySelector(n),
				readRevision: () => s,
				readSnapshot: () => o,
				mount: (t, n) => e(t, dE, {
					items: n,
					mobile: i,
					onNavigate: (e, t) => t_(e, {
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
var wE = { class: "breadcrumbs" }, TE = {
	class: "brand-mobile",
	style: { display: "none" }
}, EE = { class: "sb-logo-lockup" }, DE = ["src"], OE = ["aria-label"], kE = { class: "top-right" }, AE = ["aria-label"], jE = [
	"aria-label",
	"aria-expanded",
	"title"
], ME = ["aria-hidden"], NE = {
	class: "avatar account-shortcut",
	type: "button",
	title: "Личный кабинет",
	"aria-label": "Открыть личный кабинет",
	"data-action": "nav",
	"data-nav": "account"
}, PE = {
	__name: "TopHeader",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (B(), V(z, null, [
			H("div", wE, [n[0] ||= U("Рабочее пространство / ", -1), H("b", null, D(e.model.breadcrumb), 1)]),
			H("div", TE, [H("div", EE, [H("img", {
				class: "sb-mobile-logo",
				src: e.model.logoSrc,
				alt: "SUNOBOOM — фирменный логотип"
			}, null, 8, DE), n[1] ||= H("span", { class: "sb-brand-tagline" }, "Больше, чем музыка", -1)]), H("button", {
				type: "button",
				class: "sb-app-version sb-version-trigger",
				"aria-label": "Версия SUNOBOOM " + e.model.version + " — открыть историю обновлений",
				"aria-haspopup": "dialog",
				title: "История версий SUNOBOOM"
			}, "v" + D(e.model.version), 9, OE)]),
			H("div", kE, [
				n[3] ||= H("span", { class: "pill sb-prototype-pill" }, "🧪 Прототип", -1),
				H("button", {
					type: "button",
					class: "sb-app-version sb-version-trigger",
					"aria-label": "Версия SUNOBOOM " + e.model.version + " — открыть историю обновлений",
					"aria-haspopup": "dialog",
					title: "История версий SUNOBOOM"
				}, "v" + D(e.model.version), 9, AE),
				H("button", {
					type: "button",
					class: E(["sb-notice-bell", { "sb-notice-bell-unread": e.model.unreadCount > 0 }]),
					"data-action": "sb-notice-toggle",
					"aria-label": e.model.unreadCount ? "Уведомления, непрочитанных: " + e.model.unreadCount : "Уведомления, демонстрация счётчика уведомлений",
					"aria-expanded": String(e.model.noticeOpen),
					title: e.model.unreadCount ? "Напоминания о событиях" : "Пример счётчика: 3 (настоящих уведомлений пока нет)"
				}, [n[2] ||= H("span", {
					class: "sb-notice-bell-icon",
					"aria-hidden": "true"
				}, [H("svg", {
					viewBox: "0 0 24 24",
					"aria-hidden": "true"
				}, [H("path", { d: "M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" }), H("path", { d: "M10 21h4" })])], -1), H("span", {
					class: E(["sb-notice-count", { "sb-notice-count-preview": e.model.noticePreview }]),
					"aria-hidden": e.model.noticePreview ? "true" : void 0
				}, D(e.model.noticeBadge === 99 && e.model.unreadCount > 99 ? "99+" : e.model.noticeBadge), 11, ME)], 10, jE),
				n[4] ||= fa("<button type=\"button\" class=\"sb-notice-bell sb-settings-shortcut\" data-sbs-action=\"open-top\" aria-label=\"Открыть настройки приложения\" title=\"Настройки\" aria-haspopup=\"false\"><span class=\"sb-notice-bell-icon\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M10.5 2h3l.5 2.2 1.6.7 2-1.1 2.1 2.1-1 2 .7 1.7 2.1.4v3l-2.1.5-.7 1.6 1 2-2.1 2.1-2-1-.1.1-1.5.6-.5 2.1h-3l-.5-2.1-1.6-.7-2 1-2.1-2.1 1.1-2-.7-1.6-2.2-.5v-3l2.2-.4.7-1.7-1.1-2 2.1-2.1 2 1.1 1.6-.7z\"></path><circle cx=\"12\" cy=\"11.5\" r=\"3\"></circle></svg></span></button>", 1),
				H("button", NE, D(e.model.avatarInitial), 1)
			])
		], 64));
	}
};
// src/vue/navigation/top-header-model.js
function FE(e) {
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
function IE({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_HEADER, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector(".top[data-sb-vue-top]"),
		readSnapshot: () => FE(t.snapshot()),
		mount: (t, n) => e(t, PE, { model: n })
	});
}
// src/vue/academy/GenreCards.vue
var LE = ["data-id"], RE = { class: "genre-content" }, zE = { class: "kicker" }, BE = { class: "foot" }, VE = {
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
			style: T({ "--accent": e.color }),
			"data-action": "genre",
			"data-id": e.id
		}, [n[1] ||= H("div", {
			class: "art",
			"aria-hidden": "true"
		}, null, -1), H("div", RE, [H("div", null, [
			H("div", zE, D(e.family) + " · " + D(e.bpm[0]) + "–" + D(e.bpm[1]) + " BPM", 1),
			H("h3", null, D(e.name), 1),
			H("p", null, D(e.tagline), 1)
		]), H("div", BE, [H("span", null, D(e.era), 1), n[0] ||= H("span", { style: { color: "#ffacd9" } }, "Открыть →", -1)])])], 12, LE))), 128));
	}
}, HE = ["open"], UE = {
	key: 0,
	id: "sb-ap-hub-content"
}, WE = { class: "sb-ap-heading" }, GE = { class: "sb-ap-total" }, KE = { class: "sb-ap-tools" }, qE = ["value"], JE = ["value"], YE = { class: "sb-ap-check" }, XE = ["checked"], ZE = {
	id: "sb-ap-count",
	class: "sb-ap-count",
	"aria-live": "polite"
}, QE = {
	id: "sb-ap-results",
	class: "sb-ap-index-grid"
}, $E = { class: "sb-ap-index-title" }, eD = { class: "sb-ap-avatar" }, tD = { class: "sb-ap-chips" }, nD = { class: "sb-ap-card-actions" }, rD = ["data-name", "onClick"], iD = [
	"data-name",
	"aria-pressed",
	"aria-label",
	"onClick"
], aD = {
	key: 0,
	class: "sb-ap-empty"
}, oD = ["hidden"], sD = {
	__name: "ArtistProfileHub",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ N(t.api.hubSnapshot());
		return Cr(t.api.subscribe(() => {
			n.value = t.api.hubSnapshot();
		})), (t, r) => (B(), V("details", {
			id: "sb-ap-hub",
			class: "sb-ap-hub",
			"data-sb-vue-profile-hub": "",
			open: n.value.open,
			onToggle: r[4] ||= (t) => e.api.setOpen(t.currentTarget.open)
		}, [r[11] ||= H("summary", null, [
			H("span", { class: "sb-ap-sym" }, "🎙️"),
			H("span", null, [H("strong", null, "Профили исполнителей"), H("small", null, "Мировая и русскоязычная сцены SUNOBOOM")]),
			H("span", { class: "sb-ap-chevron" }, "⌄")
		], -1), n.value.open ? (B(), V("div", UE, [
			H("div", WE, [r[5] ||= H("div", null, [
				H("span", { class: "sb-ap-overline" }, "SUNOBOOM · МУЗЫКАЛЬНАЯ АКАДЕМИЯ"),
				H("h2", null, "Энциклопедия исполнителей"),
				H("p", null, "Все существующие подборки артистов собраны в единый указатель. Профиль показывает сведения из Академии, а для отдельных исполнителей — расширенную редакционную справку.")
			], -1), H("div", GE, D(n.value.total) + " имён в базе", 1)]),
			H("div", KE, [
				H("label", null, [r[6] ||= U("Поиск по имени или жанру", -1), H("input", {
					id: "sb-ap-search",
					type: "search",
					placeholder: "Например: Distemper или поп",
					autocomplete: "off",
					value: n.value.query,
					onInput: r[0] ||= J((t) => e.api.filter({ query: t.target.value }), ["stop"])
				}, null, 40, qE)]),
				H("label", null, [r[8] ||= U("Подборка", -1), H("select", {
					id: "sb-ap-locale",
					value: n.value.locale,
					onChange: r[1] ||= J((t) => e.api.filter({ locale: t.target.value }), ["stop"])
				}, [...r[7] ||= [
					H("option", { value: "all" }, "Все сцены", -1),
					H("option", { value: "ru" }, "Русскоязычная сцена", -1),
					H("option", { value: "world" }, "Мировая сцена", -1)
				]], 40, JE)]),
				H("label", YE, [H("input", {
					id: "sb-ap-saved-only",
					type: "checkbox",
					checked: n.value.savedOnly,
					onChange: r[2] ||= J((t) => e.api.filter({ savedOnly: t.target.checked }), ["stop"])
				}, null, 40, XE), r[9] ||= U(" Только избранные", -1)])
			]),
			H("p", ZE, "Найдено " + D(n.value.count) + " исполнителей · в избранном " + D(n.value.favorites), 1),
			H("div", QE, [(B(!0), V(z, null, R(n.value.artists, (t) => (B(), V("article", {
				key: t.key,
				class: "sb-ap-index-card"
			}, [
				H("div", $E, [H("span", eD, D(t.initials), 1), H("div", null, [H("strong", null, D(t.name), 1), H("small", null, D(t.scene), 1)])]),
				H("p", null, D(t.overview), 1),
				H("div", tD, [(B(!0), V(z, null, R(t.genres, (e) => (B(), V("span", { key: e }, D(e), 1))), 128))]),
				H("div", nD, [H("button", {
					type: "button",
					"data-sb-ap-action": "profile",
					"data-name": t.name,
					onClick: J((n) => e.api.openProfile(t.name, null, n.currentTarget), ["stop"])
				}, "Открыть профиль", 8, rD), H("button", {
					type: "button",
					"data-sb-ap-action": "favorite",
					"data-name": t.name,
					"aria-pressed": t.favorite,
					title: "Сохранить профиль",
					"aria-label": "Сохранить профиль " + t.name,
					onClick: J((n) => e.api.toggleFavorite(t.name), ["stop"])
				}, D(t.favorite ? "★" : "☆"), 9, iD)])
			]))), 128)), n.value.artists.length ? W("", !0) : (B(), V("div", aD, "По этому запросу исполнители не найдены. Попробуй другое название или отключи фильтры."))]),
			H("button", {
				type: "button",
				id: "sb-ap-more",
				class: "sb-ap-more",
				"data-sb-ap-action": "more",
				hidden: !n.value.remaining,
				onClick: r[3] ||= J((t) => e.api.more(), ["stop"])
			}, "Показать ещё · " + D(n.value.remaining), 9, oD),
			r[10] ||= H("p", { class: "sb-ap-disclaimer" }, "Периоды в исходных карточках ориентировочные. Присутствие в подборке жанра не обязательно означает, что это единственное направление или прямое влияние на исполнителя.", -1)
		])) : W("", !0)], 40, HE));
	}
}, cD = { class: "genre-family-toolbar" }, lD = { class: "search-box" }, uD = ["innerHTML"], dD = { class: "hint" }, fD = { class: "genre-family-summary" }, pD = { id: "catalog-count" }, mD = ["data-id"], hD = {
	class: "hint",
	id: "sb-academy-search-hint"
}, gD = {
	id: "catalog-cards",
	class: "genre-families"
}, _D = [
	"data-family",
	"open",
	"onToggle"
], vD = {
	class: "genre-family-icon",
	"aria-hidden": "true"
}, yD = { class: "genre-family-heading" }, bD = { class: "genre-family-right" }, xD = { class: "genre-family-count" }, SD = { class: "genre-family-body" }, CD = {
	key: 0,
	class: "sb-sacred-index"
}, wD = {
	key: 0,
	class: "sb-sacred-overview"
}, TD = { class: "genre-grid" }, ED = { class: "sb-sacred-religions" }, DD = [
	"data-sb-religion",
	"open",
	"onToggle"
], OD = { class: "sb-sacred-religion-header" }, kD = {
	class: "sb-sacred-religion-icon",
	"aria-hidden": "true"
}, AD = { class: "sb-sacred-religion-label" }, jD = { class: "sb-sacred-count" }, MD = { class: "sb-sacred-religion-content" }, ND = [
	"data-sb-branch",
	"open",
	"onToggle"
], PD = { class: "sb-sacred-branch-header" }, FD = { class: "sb-sacred-branch-label" }, ID = { class: "sb-sacred-count" }, LD = { class: "sb-sacred-branch-content" }, RD = { class: "genre-grid" }, zD = {
	key: 1,
	class: "genre-grid"
}, BD = {
	key: 1,
	class: "genre-family-empty"
}, VD = {
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
		let t = e, n = Q(), r = /* @__PURE__ */ M(t.snapshot.query || ""), i = /* @__PURE__ */ k({
			family: { ...t.snapshot.expanded?.family || {} },
			religion: { ...t.snapshot.expanded?.religion || {} },
			branch: { ...t.snapshot.expanded?.branch || {} }
		}), a = G(() => t.search(r.value)), o = G(() => !!r.value.trim()), s = G(() => {
			let e = a.value.ids == null ? null : new Set(a.value.ids);
			return (t.snapshot.families || []).map((t) => ({
				...t,
				genres: t.genres.filter((t) => !e || e.has(t.id))
			})).filter((e) => e.genres.length);
		}), c = G(() => s.value.reduce((e, t) => e + t.genres.length, 0)), l = G(() => o.value ? {
			name: "По названиям жанров",
			family: "По направлениям",
			artist: "По исполнителям",
			description: "По описаниям и звучанию"
		}[a.value.mode] || "" : "Поиск работает при вводе"), u = G(() => s.value.find((e) => e.name === "Религиозная музыка")), d = G(() => u.value?.genres.find((e) => e.id === "sacred-music")), f = G(() => {
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
		I([
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
		let m = G(() => (t.snapshot.families || []).flatMap((e) => e.genres).find((e) => e.id === n.academyFocus.genreId) || null);
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
		return (t, n) => (B(), V(z, null, [
			e.artistProfiles ? (B(), ra(sD, {
				key: 0,
				api: e.artistProfiles
			}, null, 8, ["api"])) : W("", !0),
			H("div", cD, [H("label", lD, [H("span", {
				innerHTML: e.searchIcon,
				"aria-hidden": "true"
			}, null, 8, uD), F(H("input", {
				id: "genre-search",
				"onUpdate:modelValue": n[0] ||= (e) => r.value = e,
				type: "search",
				enterkeyhint: "search",
				autocapitalize: "off",
				spellcheck: "false",
				"aria-label": "Поиск жанров",
				placeholder: "Поиск жанра, поджанра или исполнителя…",
				autocomplete: "off"
			}, null, 512), [[K, r.value]])]), H("span", dD, D(e.snapshot.families.length) + " разделов · " + D(e.snapshot.families.reduce((e, t) => e + t.genres.length, 0)) + " жанров", 1)]),
			H("div", fD, [
				H("h2", pD, D(o.value ? "Найдено жанров" : "Музыкальные жанры") + " · " + D(c.value), 1),
				m.value ? (B(), V("button", {
					key: 0,
					type: "button",
					class: "btn ghost small",
					"data-sb-last-genre": "",
					"data-action": "genre",
					"data-id": m.value.id
				}, " ↶ Последний жанр: " + D(m.value.name), 9, mD)) : W("", !0),
				H("span", hD, D(l.value), 1)
			]),
			H("div", gD, [s.value.length ? (B(!0), V(z, { key: 0 }, R(s.value, (e) => (B(), V("details", {
				key: e.name,
				class: "genre-family",
				"data-family": e.name,
				style: T({ "--family-accent": e.meta.accent }),
				open: h("family", e.name),
				onToggle: (t) => g("family", e.name, t)
			}, [H("summary", null, [
				H("span", vD, D(e.meta.icon), 1),
				H("span", yD, [H("strong", null, D(e.name), 1), H("small", null, D(e.meta.desc), 1)]),
				H("span", bD, [H("span", xD, D(e.genres.length) + " " + D(_(e.genres.length)), 1), n[1] ||= H("svg", {
					class: "genre-family-chevron",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2",
					"aria-hidden": "true"
				}, [H("path", { d: "m5 9 7 7 7-7" })], -1)])
			]), H("div", SD, [e.name === "Религиозная музыка" ? (B(), V("div", CD, [
				n[5] ||= H("div", { class: "sb-sacred-intro" }, [
					H("span", { class: "sb-sacred-eyebrow" }, "МУЗЫКА МИРОВЫХ РЕЛИГИЙ"),
					H("h3", null, "Религии и музыкальные традиции"),
					H("p", null, "Открой религию, затем её направление или течение. Здесь представлены музыкальные традиции — их границы не всегда совпадают с конфессиональными.")
				], -1),
				d.value ? (B(), V("div", wD, [n[2] ||= H("div", { class: "sb-sacred-overview-label" }, "📖 Обзор раздела", -1), H("div", TD, [ca(VE, { genres: [d.value] }, null, 8, ["genres"])])])) : W("", !0),
				H("div", ED, [(B(!0), V(z, null, R(f.value, (e) => (B(), V("details", {
					key: e.id,
					class: "sb-sacred-religion",
					"data-sb-religion": e.id,
					open: h("religion", e.id),
					onToggle: (t) => g("religion", e.id, t)
				}, [H("summary", OD, [
					H("span", kD, D(e.icon), 1),
					H("span", AD, [H("strong", null, D(e.name), 1), H("small", null, D(e.description), 1)]),
					H("span", jD, D(e.count), 1),
					n[3] ||= H("span", {
						class: "sb-sacred-chevron",
						"aria-hidden": "true"
					}, "⌄", -1)
				]), H("div", MD, [(B(!0), V(z, null, R(e.branches, (e) => (B(), V("details", {
					key: e.id,
					class: "sb-sacred-branch",
					"data-sb-branch": e.id,
					open: h("branch", e.id),
					onToggle: (t) => g("branch", e.id, t)
				}, [H("summary", PD, [
					H("span", FD, [H("strong", null, D(e.name), 1), H("small", null, D(e.description), 1)]),
					H("span", ID, D(e.genres.length) + " " + D(v(e.genres.length)), 1),
					n[4] ||= H("span", {
						class: "sb-sacred-chevron",
						"aria-hidden": "true"
					}, "⌄", -1)
				]), H("div", LD, [H("div", RD, [ca(VE, { genres: e.genres }, null, 8, ["genres"])])])], 40, ND))), 128))])], 40, DD))), 128))])
			])) : (B(), V("div", zD, [ca(VE, { genres: e.genres }, null, 8, ["genres"])]))])], 44, _D))), 128)) : (B(), V("div", BD, "Ничего не найдено. Попробуй другой запрос."))])
		], 64));
	}
};
// src/vue/academy/legacyAcademyBridge.js
function HD({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ACADEMY, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-academy-root"),
		readSnapshot: () => {
			let e = t.snapshot();
			return e?.families?.length ? e : null;
		},
		mount: (n, r) => {
			let i = e(n, VD, {
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
var UD = (e) => String(e ?? "").trim().normalize("NFKC").toLocaleLowerCase("ru");
function WD(e, t, n, r = "all", i = 30) {
	let a = UD(n);
	if (!a) return {
		count: 0,
		items: []
	};
	let o = new Map(e.map((e) => [e.id, e])), s = /* @__PURE__ */ new Set(), c = [];
	function l(e, t) {
		let n = o.get(t);
		n && !s.has(t) && UD(n.name).includes(a) && (s.add(t), c.push({
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
function GD(e, t) {
	return t === "zoom-reset" ? 1 : t !== "zoom-in" && t !== "zoom-out" ? e : Math.min(1.5, Math.max(.75, Math.round((e + (t === "zoom-in" ? .15 : -.15)) * 100) / 100));
}
function KD(e, t) {
	let n = Array.isArray(e?.edges) ? e.edges : [];
	return e?.id === "all" ? n.filter(([e, n]) => e === t || n === t) : n;
}
// src/vue/academy/GenreTree.vue
var qD = {
	class: "sb-gt-vue-content",
	"data-sb-vue-genre-tree": ""
}, JD = { class: "sb-gt-head" }, YD = { class: "sb-gt-count" }, XD = { class: "sb-gt-controls" }, ZD = ["value"], QD = ["value"], $D = ["value"], eO = ["value"], tO = { class: "sb-gt-extra" }, nO = {
	class: "sb-gt-search-label",
	for: "sb-gt-search"
}, rO = ["value"], iO = { class: "sb-gt-zoom" }, aO = { id: "sb-gt-zoom-label" }, oO = {
	id: "sb-gt-search-results",
	class: "sb-gt-search-results",
	"aria-live": "polite"
}, sO = { class: "sb-gt-search-title" }, cO = { class: "sb-gt-search-links" }, lO = [
	"data-id",
	"data-tree",
	"onClick"
], uO = {
	key: 1,
	class: "sb-gt-search-empty"
}, dO = { class: "sb-gt-intro" }, fO = { class: "sb-gt-legend" }, pO = ["aria-label"], mO = ["data-sb-gt-family"], hO = {
	key: 1,
	class: "sb-gt-stage"
}, gO = { class: "sb-gt-node-list" }, _O = [
	"data-id",
	"aria-pressed",
	"onClick"
], vO = { class: "sb-gt-node-name" }, yO = { class: "sb-gt-node-era" }, bO = {
	key: 0,
	id: "sb-gt-description",
	class: "sb-gt-detail",
	"aria-live": "polite"
}, xO = { class: "sb-gt-detail-top" }, SO = { class: "sb-gt-sub" }, CO = ["data-id"], wO = { class: "sb-gt-description" }, TO = { class: "sb-gt-related" }, EO = ["data-id", "onClick"], DO = {
	key: 1,
	class: "sb-gt-note"
}, OO = { class: "sb-gt-related" }, kO = ["data-id", "onClick"], AO = /*#__PURE__*/ Vh({
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
		let t = e, n = Q(), r = /* @__PURE__ */ M(t.snapshot.tree), i = /* @__PURE__ */ M(t.snapshot.selected), a = /* @__PURE__ */ M(t.snapshot.query || ""), o = /* @__PURE__ */ M(t.snapshot.zoom || 1), s = /* @__PURE__ */ M("");
		I([
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
		let c = /* @__PURE__ */ M(null), l = /* @__PURE__ */ M(null), u = t.snapshot.genres, d = new Map(u.map((e) => [e.id, e])), f = t.snapshot.trees, p = t.snapshot.relations, m = t.snapshot.stageLabels, h = G(() => f.find((e) => e.id === r.value) || f[0]), g = G(() => h.value.id === "all"), _ = G(() => h.value.columns.map((e, t) => ({
			index: t,
			group: g.value ? h.value.groups[t] : null,
			entries: e.map((e) => d.get(e)).filter(Boolean)
		}))), v = G(() => _.value.reduce((e, t) => e + t.entries.length, 0)), y = G(() => d.get(i.value) || d.get(h.value.focus)), b = G(() => KD(h.value, i.value).filter(([e, t]) => e === i.value || t === i.value).map(([e, t, n, r]) => {
			let a = d.get(e === i.value ? t : e);
			return a ? {
				id: a.id,
				name: a.name,
				type: n,
				note: r,
				direction: e === i.value ? "→" : "←"
			} : null;
		}).filter(Boolean)), x = G(() => g.value && y.value ? u.filter((e) => e.id !== i.value && e.family === y.value.family).slice(0, 8) : []), ee = G(() => WD(u, f, a.value, r.value)), S = (e) => !!a.value.trim() && !e.name.toLocaleLowerCase("ru").includes(a.value.trim().toLocaleLowerCase("ru"));
		function te() {
			On(() => requestAnimationFrame(() => t.treeApi.drawLines()));
		}
		function ne(e) {
			let n = t.treeApi.changeTree(e);
			n && (r.value = n.tree, i.value = n.selected, a.value = "", s.value = "", te());
		}
		function re(e) {
			d.has(e) && t.treeApi.select(e) && (i.value = e, te());
		}
		function ie(e) {
			let n = GD(o.value, e);
			t.treeApi.setZoom(n), o.value = n, te();
		}
		function C(e) {
			a.value = e.target.value, t.treeApi.setQuery(a.value);
		}
		function ae(e) {
			let n = t.treeApi.searchJump(e.tree, e.id);
			n && (r.value = n.tree, i.value = n.selected, a.value = "", s.value = "", On(() => {
				[...l.value?.querySelectorAll(".sb-gt-node") || []].find((t) => t.dataset.id === e.id)?.scrollIntoView({
					behavior: "smooth",
					block: "nearest",
					inline: "center"
				}), te();
			}));
		}
		function oe(e) {
			s.value = e.target.value, [...l.value?.querySelectorAll("[data-sb-gt-family]") || []].find((e) => e.dataset.sbGtFamily === s.value)?.scrollIntoView({
				behavior: "smooth",
				block: "nearest",
				inline: "start"
			});
		}
		return L(te), (t, n) => (B(), V("div", qD, [
			H("div", JD, [n[5] ||= H("div", null, [
				H("span", { class: "sb-gt-kicker" }, "SUNOBOOM · ИСТОРИЯ МУЗЫКИ"),
				H("h2", null, "От истоков к новым жанрам"),
				H("p", null, "Нажми на жанр в схеме, чтобы увидеть его историю и связи. Затем открой его существующую карточку в Академии.")
			], -1), H("div", YD, D(v.value) + " жанров" + D(g.value ? " · " + h.value.groups.length + " направлений" : " в схеме"), 1)]),
			H("div", XD, [
				n[8] ||= H("label", { for: "sb-gt-tree-choice" }, "Карта жанров", -1),
				H("select", {
					id: "sb-gt-tree-choice",
					value: r.value,
					"aria-label": "Выберите музыкальное древо",
					onChange: n[0] ||= (e) => ne(e.target.value)
				}, [(B(!0), V(z, null, R(P(f), (e) => (B(), V("option", {
					key: e.id,
					value: e.id
				}, D(e.icon) + " " + D(e.label), 9, QD))), 128))], 40, ZD),
				g.value ? (B(), V(z, { key: 0 }, [n[7] ||= H("label", { for: "sb-gt-group-jump" }, "Перейти к направлению", -1), H("select", {
					id: "sb-gt-group-jump",
					value: s.value,
					"aria-label": "Перейти к музыкальному направлению",
					onChange: oe
				}, [n[6] ||= H("option", { value: "" }, "Выберите раздел…", -1), (B(!0), V(z, null, R(h.value.groups, (e, t) => (B(), V("option", {
					key: e.name,
					value: String(t)
				}, D(e.icon) + " " + D(e.name) + " (" + D(e.ids.length) + ") ", 9, eO))), 128))], 40, $D)], 64)) : W("", !0)
			]),
			H("div", tO, [H("label", nO, [n[9] ||= U(" Поиск жанра по древу ", -1), H("input", {
				id: "sb-gt-search",
				value: a.value,
				type: "search",
				placeholder: "Например: ска-панк",
				autocomplete: "off",
				onInput: C
			}, null, 40, rO)]), H("div", iO, [
				n[10] ||= H("span", null, "Масштаб карты", -1),
				H("button", {
					type: "button",
					"data-sb-gt-action": "zoom-out",
					"aria-label": "Уменьшить масштаб",
					onClick: n[1] ||= (e) => ie("zoom-out")
				}, "−"),
				H("output", aO, D(Math.round(o.value * 100)) + "%", 1),
				H("button", {
					type: "button",
					"data-sb-gt-action": "zoom-in",
					"aria-label": "Увеличить масштаб",
					onClick: n[2] ||= (e) => ie("zoom-in")
				}, "+"),
				H("button", {
					type: "button",
					"data-sb-gt-action": "zoom-reset",
					onClick: n[3] ||= (e) => ie("zoom-reset")
				}, "Сброс")
			])]),
			H("div", oO, [a.value.trim() ? (B(), V(z, { key: 0 }, [ee.value.count ? (B(), V(z, { key: 0 }, [H("div", sO, " Найдено в коллекции: " + D(ee.value.count) + D(ee.value.count > 30 ? " · показаны первые 30" : ""), 1), H("div", cO, [(B(!0), V(z, null, R(ee.value.items, (e) => (B(), V("button", {
				key: e.id,
				type: "button",
				"data-sb-gt-action": "search-jump",
				"data-id": e.id,
				"data-tree": e.tree,
				onClick: (t) => ae(e)
			}, [U(D(e.name) + " ", 1), H("small", null, "(" + D(e.family) + ")", 1)], 8, lO))), 128))])], 64)) : (B(), V("p", uO, "Жанр не найден в коллекции Академии."))], 64)) : W("", !0)]),
			H("p", dO, D(h.value.intro), 1),
			H("div", fO, [(B(!0), V(z, null, R(P(p), (e, t) => (B(), V("span", { key: t }, [H("i", { style: T({ "--rel-color": e.color }) }, null, 4), U(D(e.label), 1)]))), 128))]),
			H("div", {
				ref_key: "viewport",
				ref: c,
				class: "sb-gt-viewport",
				tabindex: "0",
				"aria-label": g.value ? "Все жанры Академии по музыкальным направлениям, горизонтальная прокрутка" : "Схема связей: горизонтально прокручиваемая карта жанров"
			}, [H("div", {
				ref_key: "canvas",
				ref: l,
				class: E(["sb-gt-canvas", { "sb-gt-canvas-all": g.value }]),
				style: T({
					zoom: o.value,
					"--sb-gt-family-count": g.value ? h.value.columns.length : 4
				})
			}, [n[11] ||= H("svg", {
				class: "sb-gt-lines",
				"aria-hidden": "true"
			}, null, -1), H("div", { class: E(["sb-gt-columns", { "sb-gt-columns-all": g.value }]) }, [(B(!0), V(z, null, R(_.value, (e) => (B(), V("div", {
				key: r.value + ":" + e.index,
				class: E(["sb-gt-column", { "sb-gt-column-all": g.value }]),
				"data-sb-gt-family": g.value ? String(e.index) : null
			}, [g.value ? (B(), V("div", {
				key: 0,
				class: "sb-gt-stage sb-gt-family-heading",
				style: T({ "--sb-gt-family-accent": e.group.accent })
			}, [H("strong", null, D(e.group.icon) + " " + D(e.group.name), 1), H("span", null, D(e.entries.length), 1)], 4)) : (B(), V("div", hO, [H("span", null, "0" + D(e.index + 1), 1), U(D(P(m)[e.index]), 1)])), H("div", gO, [(B(!0), V(z, null, R(e.entries, (e) => (B(), V("button", {
				key: e.id,
				type: "button",
				class: E(["sb-gt-node", {
					"is-selected": i.value === e.id,
					"sb-gt-search-dim": S(e)
				}]),
				"data-sb-gt-action": "select",
				"data-id": e.id,
				"aria-pressed": i.value === e.id,
				onClick: (t) => re(e.id)
			}, [H("span", vO, D(e.name), 1), H("span", yO, D(e.era || e.family || ""), 1)], 10, _O))), 128))])], 10, mO))), 128))], 2)], 6)], 8, pO),
			y.value ? (B(), V("div", bO, [
				H("div", xO, [H("div", null, [
					n[12] ||= H("div", { class: "sb-gt-kicker" }, "ВЫБРАННОЕ НАПРАВЛЕНИЕ", -1),
					H("h3", null, D(y.value.name), 1),
					H("p", SO, D(y.value.era || "") + " · " + D(y.value.family || ""), 1)
				]), H("button", {
					type: "button",
					class: "btn primary sb-gt-open",
					"data-sb-gt-action": "open",
					"data-id": y.value.id,
					onClick: n[4] ||= (t) => e.treeApi.openGenre(y.value.id)
				}, "Открыть карточку ↗", 8, CO)]),
				H("p", wO, D(y.value.description || y.value.tagline || "Описание в карточке жанра."), 1),
				b.value.length ? (B(), V(z, { key: 0 }, [n[13] ||= H("h4", null, "Исторические связи", -1), H("div", TO, [(B(!0), V(z, null, R(b.value, (e) => (B(), V("button", {
					key: e.id + ":" + e.type,
					type: "button",
					class: "sb-gt-related-btn",
					"data-sb-gt-action": "select",
					"data-id": e.id,
					onClick: (t) => re(e.id)
				}, [H("span", { class: E(["sb-gt-related-mark", "sb-gt-" + e.type]) }, D(e.direction), 3), H("span", null, [H("strong", null, D(e.name), 1), H("small", null, D(e.note), 1)])], 8, EO))), 128))])], 64)) : g.value ? W("", !0) : (B(), V("p", DO, "У этого узла пока нет нарисованных связей в выбранной схеме.")),
				g.value && x.value.length ? (B(), V(z, { key: 2 }, [H("h4", null, "Другие жанры раздела «" + D(y.value.family) + "»", 1), H("div", OO, [(B(!0), V(z, null, R(x.value, (e) => (B(), V("button", {
					key: e.id,
					type: "button",
					class: "sb-gt-related-btn",
					"data-sb-gt-action": "select",
					"data-id": e.id,
					onClick: (t) => re(e.id)
				}, [n[14] ||= H("span", { class: "sb-gt-related-mark" }, "♫", -1), H("span", null, [H("strong", null, D(e.name), 1)])], 8, kO))), 128))])], 64)) : W("", !0)
			])) : W("", !0),
			n[15] ||= H("p", { class: "sb-gt-note" }, "Схема показывает основные исторические влияния и стилистические пересечения. Жанры могут развиваться параллельно; стрелки не означают единственное происхождение.", -1)
		]));
	}
}, [["__scopeId", "data-v-6e70f61e"]]);
// src/vue/academy/legacyGenreTreeBridge.js
function jO({ mountVueFeature: e }) {
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
		mount: (n, r) => e(n, AO, {
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
var MO = {
	class: "gb-grid",
	"data-sb-vue-overview": ""
}, NO = { class: "gb-column" }, PO = { class: "gb-panel pink" }, FO = { class: "gb-unit" }, IO = { class: "gb-unit" }, LO = { class: "gb-unit" }, RO = { class: "gb-panel" }, zO = ["innerHTML"], BO = { class: "gb-column" }, VO = { class: "gb-panel blue" }, HO = {
	class: "gb-bpm-value",
	style: {
		"font-size": "26px",
		"font-weight": "900"
	}
}, UO = { class: "gb-artists" }, WO = { class: "gb-panel pink" }, GO = ["data-id"], KO = ["innerHTML"], qO = {
	__name: "GenreOverview",
	props: { genre: {
		type: Object,
		required: !0
	} },
	emits: ["select-tab"],
	setup(e) {
		return (t, n) => (B(), V("div", MO, [H("div", NO, [H("section", PO, [
			n[7] ||= H("div", { class: "gb-sup" }, "01 / ЗНАКОМСТВО С ЖАНРОМ", -1),
			n[8] ||= H("h2", null, "Характер и звучание", -1),
			H("p", null, [H("strong", null, D(e.genre.tagline), 1)]),
			H("p", null, D(e.genre.description), 1),
			H("div", FO, [n[2] ||= H("b", null, "🎸", -1), H("div", null, [n[1] ||= H("strong", null, "Инструменты", -1), H("span", null, D(e.genre.instruments) + ".", 1)])]),
			H("div", IO, [n[4] ||= H("b", null, "🎛️", -1), H("div", null, [n[3] ||= H("strong", null, "Саунд", -1), H("span", null, D(e.genre.style) + ".", 1)])]),
			H("div", LO, [n[6] ||= H("b", null, "✍️", -1), H("div", null, [n[5] ||= H("strong", null, "Тематика песен", -1), H("span", null, D(e.genre.themes) + ".", 1)])])
		]), H("section", RO, [
			n[10] ||= H("div", { class: "gb-sup" }, "03 / ИДЕИ ДЛЯ СТАРТА", -1),
			n[11] ||= H("h2", null, "Что можно спеть", -1),
			(B(!0), V(z, null, R(e.genre.ideas, (e, t) => (B(), V("div", {
				key: t,
				class: "gb-idea"
			}, [H("strong", null, D(e.title), 1), H("p", null, D(e.pitch), 1)]))), 128)),
			H("button", {
				type: "button",
				class: "btn ghost small",
				onClick: n[0] ||= (e) => t.$emit("select-tab", "ideas")
			}, [n[9] ||= U(" Все идеи ", -1), H("span", {
				"aria-hidden": "true",
				innerHTML: e.genre.icons.arrow
			}, null, 8, zO)])
		])]), H("div", BO, [H("section", VO, [
			n[12] ||= H("div", { class: "gb-sup" }, "02 / ПАСПОРТ НАПРАВЛЕНИЯ", -1),
			n[13] ||= H("h2", null, "История и сцена", -1),
			n[14] ||= H("div", { class: "info-label" }, "Эпоха", -1),
			H("p", null, D(e.genre.era), 1),
			n[15] ||= H("div", { class: "info-label" }, "Диапазон темпа", -1),
			H("p", HO, D(e.genre.bpm[0]) + "–" + D(e.genre.bpm[1]) + " BPM", 1),
			n[16] ||= H("div", { class: "info-label" }, "Исполнители для знакомства", -1),
			H("div", UO, [(B(!0), V(z, null, R(e.genre.artists, (e) => (B(), V("span", { key: e }, D(e), 1))), 128))])
		]), H("section", WO, [n[18] ||= fa("<div class=\"gb-sup\">04 / ТВОЯ МУЗЫКА</div><h2>Преврати знания в трек</h2><p>Выбери вокал, настроение и темп, затем создай промпт и структуру песни в Suno Studio.</p><div class=\"gb-unit\"><b>🎤</b><div><strong>Вокал</strong><span>Мужской, женский или дуэт; можно использовать русский язык.</span></div></div><div class=\"gb-unit\"><b>⚡</b><div><strong>Динамика</strong><span>Настрой энергию и характер припева под историю.</span></div></div>", 5), H("button", {
			type: "button",
			class: "btn primary small",
			"data-action": "use-genre",
			"data-id": e.genre.id
		}, [H("span", {
			innerHTML: e.genre.icons.studio,
			"aria-hidden": "true"
		}, null, 8, KO), n[17] ||= U(" Открыть студию ", -1)], 8, GO)])])]));
	}
}, JO = {
	key: 0,
	id: "sb-artist-expanded",
	class: "ahx-wrap",
	"data-sb-vue-artists": ""
}, YO = { class: "ahx-intro" }, XO = { class: "gb-eyebrow" }, ZO = {
	class: "ahx-toolbar",
	role: "group",
	"aria-label": "Музыкальные сцены"
}, QO = ["aria-pressed"], $O = ["aria-pressed"], ek = { class: "ahx-filters" }, tk = { class: "ahx-search" }, nk = ["innerHTML"], rk = {
	class: "ahx-filter-buttons",
	role: "group",
	"aria-label": "Фильтр исполнителей"
}, ik = [
	"data-vue-artist-filter",
	"aria-pressed",
	"onClick"
], ak = {
	id: "ahx-count",
	class: "ahx-count",
	"aria-live": "polite"
}, ok = { class: "ahx-section-head" }, sk = { class: "ahx-eyebrow" }, ck = { class: "ahx-num" }, lk = { class: "ahx-grid" }, uk = ["data-ahx-group"], dk = { class: "ahx-card-top" }, fk = {
	class: "ahx-avatar",
	"aria-hidden": "true"
}, pk = { class: "ahx-title" }, mk = { class: "ahx-era" }, hk = {
	key: 0,
	class: "ahx-track"
}, gk = {
	key: 1,
	class: "sb-ap-inline-actions"
}, _k = ["data-name", "onClick"], vk = [
	"data-name",
	"aria-label",
	"aria-pressed",
	"onClick"
], yk = {
	id: "ahx-no-results",
	class: "ahx-no-results"
}, bk = {
	key: 1,
	class: "ahx-empty"
}, xk = {
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
		let t = e, n = /* @__PURE__ */ N(new Set(t.profiles?.favoriteKeys() || [])), r = t.profiles?.subscribe(() => {
			n.value = new Set(t.profiles.favoriteKeys());
		});
		Cr(() => r?.());
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
		let o = /* @__PURE__ */ M(t.catalog.initialScene()), s = /* @__PURE__ */ M(""), c = /* @__PURE__ */ M("all"), l = G(() => t.catalog.getScene(t.genre.id, o.value)), u = G(() => (l.value?.groups || []).map((e) => ({
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
		}))), d = G(() => u.value.reduce((e, t) => e + t.artists.length, 0)), f = G(() => (l.value?.groups || []).reduce((e, t) => e + t.artists.length, 0));
		function p(e) {
			(e === "ru" || e === "world") && (o.value = e, t.catalog.setScene(e), s.value = "", c.value = "all");
		}
		function m(e) {
			return "Добавить в избранное: " + e.name;
		}
		return (t, n) => l.value ? (B(), V("div", JO, [
			H("div", YO, [
				H("div", XO, "АКАДЕМИЯ SUNOBOOM · " + D(e.genre.name), 1),
				n[4] ||= H("h2", null, "Исполнители и композиторы", -1),
				H("p", null, D(l.value.description), 1)
			]),
			H("div", ZO, [H("button", {
				type: "button",
				"data-vue-artist-scene": "world",
				"aria-pressed": o.value === "world",
				class: E({ on: o.value === "world" }),
				onClick: n[0] ||= (e) => p("world")
			}, [n[5] ||= U(" 🌍 Мировая сцена ", -1), H("span", null, D(l.value.worldCount), 1)], 10, QO), H("button", {
				type: "button",
				"data-vue-artist-scene": "ru",
				"aria-pressed": o.value === "ru",
				class: E({ on: o.value === "ru" }),
				onClick: n[1] ||= (e) => p("ru")
			}, [n[6] ||= U(" 🎤 Русскоязычные ", -1), H("span", null, D(l.value.ruCount), 1)], 10, $O)]),
			f.value ? (B(), V(z, { key: 0 }, [
				H("div", ek, [H("label", tk, [H("span", {
					"aria-hidden": "true",
					innerHTML: e.genre.icons.overview
				}, null, 8, nk), F(H("input", {
					"onUpdate:modelValue": n[2] ||= (e) => s.value = e,
					type: "search",
					"data-vue-artist-search": "",
					placeholder: "Найти исполнителя или произведение…",
					"aria-label": "Поиск по исполнителям"
				}, null, 512), [[K, s.value]])]), H("div", rk, [(B(), V(z, null, R([
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
					"aria-pressed": c.value === e.id,
					onClick: (t) => c.value = e.id
				}, D(e.label), 9, ik)), 64))])]),
				H("p", ak, "Показано " + D(d.value) + " из " + D(f.value) + " исполнителей.", 1),
				(B(!0), V(z, null, R(u.value, (t) => F((B(), V("section", {
					key: t.index,
					class: "ahx-section",
					"data-ahx-section": ""
				}, [H("div", ok, [H("div", null, [H("span", sk, "0" + D(t.index + 1) + " / ИСПОЛНИТЕЛИ", 1), H("h3", null, D(t.index ? "Современная сцена и продолжатели" : "Классика и предшественники"), 1)]), H("span", ck, D(t.artists.length), 1)]), H("div", lk, [(B(!0), V(z, null, R(t.artists, (t) => (B(), V("article", {
					key: t.key,
					class: "ahx-card",
					"data-ahx-group": t.group
				}, [
					H("div", dk, [H("span", fk, D(t.initials), 1), H("div", pk, [H("h4", null, D(t.name), 1), H("span", mk, D(t.period || "Музыкальная сцена"), 1)])]),
					H("span", { class: E(["ahx-role", { "ahx-role-neighbor": t.group === "adjacent" }]) }, D(t.label), 3),
					H("p", null, D(t.bio || "Музыкальное направление и характерный творческий почерк."), 1),
					t.track ? (B(), V("div", hk, [n[7] ||= H("small", null, "Ориентир для прослушивания", -1), H("strong", null, "♫ " + D(t.track), 1)])) : W("", !0),
					e.profiles ? (B(), V("div", gk, [H("button", {
						type: "button",
						class: "sb-ap-inline-open",
						"data-sb-ap-action": "profile",
						"data-name": t.name,
						onClick: J((e) => a(t, e.currentTarget), ["stop"])
					}, "Полный профиль →", 8, _k), H("button", {
						type: "button",
						class: "sb-ap-inline-star",
						"data-sb-ap-action": "favorite",
						"data-name": t.name,
						"aria-label": m(t),
						"aria-pressed": i(t.name),
						onClick: J((n) => e.profiles.toggleFavorite(t.name), ["stop"])
					}, D(i(t.name) ? "★" : "☆"), 9, vk)])) : W("", !0)
				], 8, uk))), 128))])])), [[eo, t.artists.length]])), 128)),
				F(H("div", yk, " По заданному поиску исполнители не найдены. Попробуй другой запрос или выбери «Все». ", 512), [[eo, d.value === 0]])
			], 64)) : (B(), V("div", bk, [
				n[8] ||= H("strong", null, "Русскоязычная подборка ещё уточняется", -1),
				n[9] ||= H("p", null, "Для этого узкого направления пока нет достаточно подтверждённых примеров. Мы не будем подставлять артистов из других жанров без пояснения.", -1),
				H("button", {
					class: "btn ghost",
					type: "button",
					onClick: n[3] ||= (e) => p("world")
				}, "Посмотреть мировую сцену")
			])),
			n[10] ||= H("p", { class: "ahx-footnote" }, "В подборках могут встречаться близкие стили, кино- и игровая музыка, инструментальные коллективы. Их связь с жанром поясняется в карточке. Указанные произведения — ориентиры для знакомства, а не ссылки на конкретные релизы.", -1)
		])) : W("", !0);
	}
}, Sk = {
	class: "idea-grid",
	"data-sb-vue-ideas": ""
}, Ck = { class: "idea-badge" }, wk = { class: "actions" }, Tk = ["data-id", "data-i"], Ek = ["innerHTML"], Dk = [
	"data-id",
	"data-i",
	"aria-pressed"
], Ok = ["innerHTML"], kk = {
	__name: "GenreIdeas",
	props: { genre: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (B(), V("div", Sk, [(B(!0), V(z, null, R(e.genre.allIdeas, (t) => (B(), V("div", {
			key: t.index,
			class: "idea"
		}, [
			H("div", Ck, D(e.genre.name) + " · " + D(t.mood), 1),
			H("h3", null, D(t.title), 1),
			H("p", null, D(t.pitch), 1),
			H("div", wk, [H("button", {
				type: "button",
				class: "btn primary small",
				"data-action": "idea-use",
				"data-id": e.genre.id,
				"data-i": t.index
			}, [H("span", {
				"aria-hidden": "true",
				innerHTML: e.genre.icons.studio
			}, null, 8, Ek), n[0] ||= U(" В студию ", -1)], 8, Tk), H("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "idea-save",
				"data-id": e.genre.id,
				"data-i": t.index,
				"aria-pressed": t.saved ? "true" : "false"
			}, [H("span", {
				"aria-hidden": "true",
				innerHTML: e.genre.icons.heart
			}, null, 8, Ok), U(" " + D(t.saved ? "Сохранено" : "Сохранить"), 1)], 8, Dk)])
		]))), 128))]));
	}
}, Ak = {
	class: "panel",
	"data-sb-vue-prompts": ""
}, jk = { class: "idea-grid" }, Mk = { class: "idea" }, Nk = ["data-id"], Pk = ["innerHTML"], Fk = { class: "idea" }, Ik = ["data-id"], Lk = ["innerHTML"], Rk = {
	__name: "GenrePrompts",
	props: { genre: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (B(), V("div", Ak, [
			n[5] ||= H("h3", null, "Шаблоны звучания", -1),
			n[6] ||= H("p", null, "Начни с одного из вариантов. Он перенесёт настройки жанра в конструктор — там можно выбрать вокал, настроение и язык.", -1),
			H("div", jk, [H("div", Mk, [
				n[1] ||= H("div", { class: "idea-badge" }, "Оригинальное звучание", -1),
				H("h3", null, D(e.genre.name), 1),
				H("p", null, D(e.genre.style) + ".", 1),
				H("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "use-genre",
					"data-id": e.genre.id
				}, [n[0] ||= U(" Настроить в студии ", -1), H("span", {
					"aria-hidden": "true",
					innerHTML: e.genre.icons.arrow
				}, null, 8, Pk)], 8, Nk)
			]), H("div", Fk, [
				n[3] ||= H("div", { class: "idea-badge" }, "Альтернативная версия", -1),
				n[4] ||= H("h3", null, "Мягкая атмосфера", -1),
				H("p", null, D(e.genre.style) + ", restrained dynamics, warm intimate production, emotional melodies.", 1),
				H("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "use-soft",
					"data-id": e.genre.id
				}, [n[2] ||= U(" Настроить в студии ", -1), H("span", {
					"aria-hidden": "true",
					innerHTML: e.genre.icons.arrow
				}, null, 8, Lk)], 8, Ik)
			])])
		]));
	}
}, zk = { class: "gb-hero" }, Bk = { class: "gb-content" }, Vk = { class: "gb-eyebrow" }, Hk = { class: "gb-title" }, Uk = { class: "gb-desc" }, Wk = { class: "gb-tags" }, Gk = { class: "gb-buttons" }, Kk = ["data-id"], qk = ["innerHTML"], Jk = ["data-id"], Yk = ["innerHTML"], Xk = {
	class: "gb-vinyl",
	"aria-hidden": "true"
}, Zk = { class: "gb-equalizer" }, Qk = { class: "gb-facts" }, $k = { class: "gb-fact" }, eA = { class: "gb-fact" }, tA = { class: "gb-fact" }, nA = { class: "gb-fact" }, rA = { class: "genre-detail-layout" }, iA = {
	class: "genre-side-nav",
	"aria-label": "ЖАНР-НАВ — меню жанра"
}, aA = {
	class: "genre-side-links",
	"aria-label": "Разделы жанра"
}, oA = [
	"data-tab",
	"aria-current",
	"onClick"
], sA = ["innerHTML"], cA = {
	class: "genre-detail-content",
	id: "genre-nav-content",
	"aria-label": "Содержимое раздела жанра"
}, lA = ["innerHTML"], uA = {
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
		], r = Q(), i = /* @__PURE__ */ M(t.genre.tab);
		I(i, (e) => r.publishAcademyFocus(t.genre.id, e), { immediate: !0 });
		let a = /* @__PURE__ */ M(t.tabContent(t.genre.id, i.value) || "");
		async function o(e) {
			if (i.value === e || !n.some((t) => t.id === e)) return;
			let r = t.tabContent(t.genre.id, e);
			typeof r == "string" && (i.value = e, a.value = r, await On(), window.innerWidth <= 850 && document.getElementById("genre-nav-content")?.scrollIntoView({
				block: "start",
				behavior: "smooth"
			}));
		}
		return (t, r) => (B(), V("div", {
			class: "genre-bright",
			style: T({ "--accent": e.genre.color })
		}, [H("div", zk, [
			r[5] ||= H("div", { class: "gb-top" }, [H("button", {
				type: "button",
				class: "back",
				"data-action": "academy-back",
				"aria-label": "Назад к разделу Академии"
			}, "← Назад"), H("small", null, "SUNOBOOM · MUSIC ATLAS")], -1),
			H("div", Bk, [H("div", null, [
				H("div", Vk, D(e.genre.family) + " · " + D(e.genre.era), 1),
				H("h1", Hk, D(e.genre.name), 1),
				H("p", Uk, D(e.genre.description), 1),
				H("div", Wk, [
					H("span", null, D(e.genre.tagline), 1),
					H("span", null, D(e.genre.bpm[0]) + "–" + D(e.genre.bpm[1]) + " BPM", 1),
					H("span", null, D(e.genre.ideasCount) + " идеи", 1)
				]),
				H("div", Gk, [H("button", {
					type: "button",
					class: "btn primary",
					"data-action": "use-genre",
					"data-id": e.genre.id
				}, [H("span", {
					innerHTML: e.genre.icons.studio,
					"aria-hidden": "true"
				}, null, 8, qk), r[0] ||= U(" Создать в Suno ", -1)], 8, Kk), H("button", {
					type: "button",
					class: "btn ghost",
					"data-action": "favorite",
					"data-id": e.genre.id
				}, [H("span", {
					innerHTML: e.genre.icons.heart,
					"aria-hidden": "true"
				}, null, 8, Yk), U(" " + D(e.genre.favorite ? "В избранном" : "В избранное"), 1)], 8, Jk)])
			]), H("div", Xk, [H("div", Zk, [(B(), V(z, null, R(9, (e) => H("i", { key: e })), 64))])])]),
			H("div", Qk, [
				H("div", $k, [r[1] ||= H("small", null, "История", -1), H("strong", null, D(e.genre.era), 1)]),
				H("div", eA, [r[2] ||= H("small", null, "Темп", -1), H("strong", null, D(e.genre.bpm[0]) + "–" + D(e.genre.bpm[1]) + " BPM", 1)]),
				H("div", tA, [r[3] ||= H("small", null, "Треки", -1), H("strong", null, D(e.genre.ideasCount) + " сюжетных идеи", 1)]),
				H("div", nA, [r[4] ||= H("small", null, "Артисты", -1), H("strong", null, D(e.genre.artistCount) + " ориентиров", 1)])
			])
		]), H("div", rA, [H("aside", iA, [r[7] ||= H("div", { class: "genre-side-head" }, [H("span", null, "ЖАНР-НАВ"), H("small", null, "Разделы карточки")], -1), H("nav", aA, [(B(), V(z, null, R(n, (t) => H("button", {
			key: t.id,
			type: "button",
			class: E(["genre-side-item", { active: i.value === t.id }]),
			"data-tab": t.id,
			"aria-controls": "genre-nav-content",
			"aria-current": i.value === t.id ? "page" : "false",
			onClick: (e) => o(t.id)
		}, [
			H("span", {
				class: "genre-side-icon",
				innerHTML: e.genre.icons[t.id],
				"aria-hidden": "true"
			}, null, 8, sA),
			H("span", null, D(t.label), 1),
			r[6] ||= H("span", {
				class: "genre-side-chevron",
				"aria-hidden": "true"
			}, "›", -1)
		], 10, oA)), 64))])]), H("section", cA, [i.value === "overview" ? (B(), ra(qO, {
			key: 0,
			genre: e.genre,
			onSelectTab: o
		}, null, 8, ["genre"])) : i.value === "artists" && e.artistCatalog ? (B(), ra(xk, {
			key: 1,
			genre: e.genre,
			catalog: e.artistCatalog,
			profiles: e.artistProfiles
		}, null, 8, [
			"genre",
			"catalog",
			"profiles"
		])) : i.value === "ideas" ? (B(), ra(kk, {
			key: 2,
			genre: e.genre
		}, null, 8, ["genre"])) : i.value === "prompts" ? (B(), ra(Rk, {
			key: 3,
			genre: e.genre
		}, null, 8, ["genre"])) : (B(), V("div", {
			key: 4,
			innerHTML: a.value
		}, null, 8, lA))])])], 4));
	}
};
// src/vue/academy/legacyGenreDetailBridge.js
function dA({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_GENRE, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-genre-detail"),
		readSnapshot: () => {
			let e = t.snapshot();
			return e?.id ? e : null;
		},
		mount: (n, r) => e(n, uA, {
			genre: r,
			tabContent: (e, n) => t.tabContent(e, n),
			artistCatalog: window.SUNOBOOM_ARTIST_CATALOG || null,
			artistProfiles: window.SUNOBOOM_ARTIST_PROFILES || null
		})
	});
}
// src/vue/studio/StudioBuilder.vue
var fA = { class: "panel" }, pA = { class: "field" }, mA = ["value"], hA = ["value"], gA = { class: "form-grid" }, _A = { class: "field" }, vA = ["value"], yA = ["value"], bA = { class: "field" }, xA = ["value"], SA = ["value"], CA = { class: "field" }, wA = ["value"], TA = ["value"], EA = { class: "field" }, DA = ["value"], OA = ["value"], kA = { class: "field" }, AA = { for: "b-tempo" }, jA = {
	id: "tempo-num",
	style: { color: "#ffa8d5" }
}, MA = { class: "range" }, NA = ["value"], PA = { id: "bpm-output" }, FA = {
	class: "muted",
	style: { "font-size": "11px" }
}, IA = { class: "field" }, LA = ["value"], RA = { class: "field" }, zA = ["value"], BA = { class: "checkrow" }, VA = ["checked", "onChange"], HA = {
	class: "panel",
	style: {
		position: "sticky",
		top: "20px"
	}
}, UA = {
	class: "output",
	id: "prompt-output"
}, WA = { class: "counter" }, GA = { id: "prompt-count" }, KA = { class: "two-col" }, qA = {
	class: "btn primary",
	type: "button",
	"data-action": "copy-prompt"
}, JA = ["innerHTML"], YA = {
	class: "btn ghost",
	type: "button",
	"data-action": "save-prompt"
}, XA = ["innerHTML"], ZA = {
	key: 0,
	class: "notice",
	"data-sb-vue-mixer-recap": ""
}, QA = {
	key: 1,
	class: "notice",
	"data-sb-vue-arranger-recap": ""
}, $A = { class: "list-pills" }, ej = {
	__name: "StudioBuilder",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ N(t.api.snapshot()), r = Q();
		I(n, (e) => r.publishStudioSummary(e), { immediate: !0 });
		let i = G(() => n.value?.settings || {}), a = G(() => n.value?.genre || {
			name: "",
			family: "",
			bpm: [0, 0]
		}), o = G(() => String(n.value?.prompt || "")), s = [
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
		return L(() => window.addEventListener("sunoboom:studio-updated", f)), Cr(() => window.removeEventListener("sunoboom:studio-updated", f)), (e, t) => (B(), V(z, null, [H("div", fA, [
			t[17] ||= H("h3", null, "Параметры трека", -1),
			H("div", pA, [t[8] ||= H("label", { for: "b-genre" }, "Жанр", -1), H("select", {
				id: "b-genre",
				value: i.value.genre,
				onChange: t[0] ||= (e) => p("genre", e.target.value)
			}, [(B(!0), V(z, null, R(n.value.genres, (e) => (B(), V("option", {
				key: e.id,
				value: e.id
			}, D(e.name), 9, hA))), 128))], 40, mA)]),
			H("div", gA, [
				H("div", _A, [t[9] ||= H("label", { for: "b-mood" }, "Настроение", -1), H("select", {
					id: "b-mood",
					value: i.value.mood,
					onChange: t[1] ||= (e) => p("mood", e.target.value)
				}, [(B(), V(z, null, R(s, ([e, t]) => H("option", {
					key: e,
					value: e
				}, D(t), 9, yA)), 64))], 40, vA)]),
				H("div", bA, [t[10] ||= H("label", { for: "b-vocal" }, "Вокал", -1), H("select", {
					id: "b-vocal",
					value: i.value.vocal,
					onChange: t[2] ||= (e) => p("vocal", e.target.value)
				}, [(B(), V(z, null, R(c, ([e, t]) => H("option", {
					key: e,
					value: e
				}, D(t), 9, SA)), 64))], 40, xA)]),
				H("div", CA, [t[11] ||= H("label", { for: "b-lang" }, "Язык текста", -1), H("select", {
					id: "b-lang",
					value: i.value.language,
					onChange: t[3] ||= (e) => p("language", e.target.value)
				}, [(B(), V(z, null, R(l, ([e, t]) => H("option", {
					key: e,
					value: e
				}, D(t), 9, TA)), 64))], 40, wA)]),
				H("div", EA, [t[12] ||= H("label", { for: "b-energy" }, "Энергия", -1), H("select", {
					id: "b-energy",
					value: i.value.energy,
					onChange: t[4] ||= (e) => p("energy", e.target.value)
				}, [(B(), V(z, null, R(u, ([e, t]) => H("option", {
					key: e,
					value: e
				}, D(t), 9, OA)), 64))], 40, DA)])
			]),
			H("div", kA, [
				H("label", AA, [
					t[13] ||= U("Темп · ", -1),
					H("span", jA, D(i.value.tempo), 1),
					t[14] ||= U(" BPM", -1)
				]),
				H("div", MA, [H("input", {
					type: "range",
					id: "b-tempo",
					min: "65",
					max: "200",
					step: "1",
					value: i.value.tempo,
					onInput: t[5] ||= (e) => p("tempo", Number(e.target.value))
				}, null, 40, NA), H("output", PA, D(i.value.tempo) + " BPM", 1)]),
				H("span", FA, " Обычно для «" + D(a.value.name) + "»: " + D(a.value.bpm[0]) + "–" + D(a.value.bpm[1]) + " BPM ", 1)
			]),
			H("div", IA, [t[15] ||= H("label", { for: "b-theme" }, "Тема / история трека", -1), H("textarea", {
				id: "b-theme",
				rows: "2",
				value: i.value.theme,
				onInput: t[6] ||= (e) => p("theme", e.target.value),
				placeholder: "О чём будет песня?"
			}, null, 40, LA)]),
			H("div", RA, [t[16] ||= H("label", { for: "b-extra" }, "Дополнительные инструкции (необязательно)", -1), H("textarea", {
				id: "b-extra",
				rows: "2",
				value: i.value.extra,
				onInput: t[7] ||= (e) => p("extra", e.target.value),
				placeholder: "Например: memorable chorus, short guitar solo"
			}, null, 40, zA)]),
			H("div", BA, [(B(), V(z, null, R(d, ([e, t]) => H("label", { key: e }, [H("input", {
				type: "checkbox",
				checked: i.value[e],
				onChange: (t) => p(e, t.target.checked)
			}, null, 40, VA), U(D(t), 1)])), 64))])
		]), H("div", HA, [
			t[22] ||= H("div", { class: "eyebrow" }, "Готово к Suno", -1),
			t[23] ||= H("h3", null, "Твой промпт", -1),
			H("div", UA, D(o.value), 1),
			H("div", WA, [t[18] ||= H("span", null, "Максимум 1000 символов", -1), H("b", GA, D(o.value.length) + " / 1000", 1)]),
			H("div", KA, [H("button", qA, [H("span", {
				"aria-hidden": "true",
				innerHTML: n.value.icons.copy
			}, null, 8, JA), t[19] ||= U(" Копировать ", -1)]), H("button", YA, [H("span", {
				"aria-hidden": "true",
				innerHTML: n.value.icons.save
			}, null, 8, XA), t[20] ||= U(" Сохранить ", -1)])]),
			t[24] ||= H("div", { class: "spacer" }, null, -1),
			P(r).mixerSummary.ready ? (B(), V("div", ZA, [U(" Последний микс: " + D(P(r).mixerSummary.genreCount) + " жанра · " + D(P(r).mixerSummary.tempo) + " BPM · " + D(P(r).mixerSummary.promptLength) + " / 1000 символов. ", 1), t[21] ||= H("button", {
				type: "button",
				class: "link-action",
				"data-action": "nav",
				"data-nav": "mixer"
			}, "Перейти в Миксер →", -1)])) : W("", !0),
			P(r).arrangerSummary.ready ? (B(), V("div", QA, " Аранжировка: " + D(P(r).arrangerSummary.blockCount) + " блоков · " + D(P(r).arrangerSummary.barCount) + " тактов · средняя энергия " + D(P(r).arrangerSummary.averageEnergy) + "/5 · " + D(P(r).arrangerSummary.transitionCount) + " переходов. ", 1)) : W("", !0),
			t[25] ||= H("div", { class: "notice" }, [H("strong", null, "Подсказка:"), U(" промпт задаёт стиль, а текст песни можно вводить отдельно в Suno. Результат генерации может отличаться от запроса.")], -1),
			t[26] ||= H("div", { class: "spacer" }, null, -1),
			t[27] ||= H("div", { class: "info-label" }, "Музыкальный профиль", -1),
			H("div", $A, [
				H("span", null, D(a.value.name), 1),
				H("span", null, D(a.value.family), 1),
				H("span", null, D(a.value.bpm[0]) + "–" + D(a.value.bpm[1]) + " BPM", 1)
			])
		])], 64));
	}
};
// src/vue/studio/legacyStudioBridge.js
function tj({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_STUDIO, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector(".studio-grid"),
		readSnapshot: () => t.snapshot(),
		mount: (n) => {
			let r = e(n, ej, { api: t });
			return r && (n.dataset.sbVueStudio = "true"), r;
		}
	});
}
// src/vue/studio/GenreMixer.vue
var nj = { class: "heading" }, rj = {
	key: 0,
	class: "gm-muted",
	"data-sb-vue-studio-recap": ""
}, ij = { class: "gm-layout" }, aj = { class: "gm-panel" }, oj = { class: "gm-stack" }, sj = { class: "gm-row-top" }, cj = { class: "gm-rank" }, lj = { class: "gm-field gm-genre-select" }, uj = ["for"], dj = [
	"id",
	"value",
	"data-gm-genre"
], fj = ["label"], pj = ["value"], mj = ["data-gm-value"], hj = [
	"data-slot",
	"aria-label",
	"disabled"
], gj = { class: "gm-slider-line" }, _j = [
	"max",
	"value",
	"data-gm-weight",
	"aria-label"
], vj = { class: "gm-meter" }, yj = ["data-gm-meter"], bj = { class: "gm-sub" }, xj = { class: "gm-actions" }, Sj = ["disabled"], Cj = {
	class: "gm-mixture",
	"aria-label": "Доли музыкальных жанров"
}, wj = ["data-gm-mixbar", "title"], Tj = { class: "gm-form-grid" }, Ej = ["for"], Dj = [
	"id",
	"value",
	"data-gm-setting"
], Oj = ["value"], kj = { class: "gm-tempo" }, Aj = ["checked"], jj = { class: "gm-tempo-row" }, Mj = ["value", "disabled"], Nj = { id: "gm-bpm" }, Pj = { class: "gm-field" }, Fj = ["value"], Ij = { class: "gm-checks" }, Lj = ["data-gm-setting", "checked"], Rj = { class: "gm-panel gm-output-panel" }, zj = {
	class: "gm-output",
	id: "gm-prompt",
	"aria-live": "polite"
}, Bj = { class: "gm-prompt-meta" }, Vj = { id: "gm-count" }, Hj = { class: "gm-field" }, Uj = ["value"], Wj = { class: "gm-saved-list" }, Gj = {
	key: 0,
	class: "gm-muted"
}, Kj = { class: "gm-saved-actions" }, qj = ["data-id"], Jj = ["data-id", "aria-label"], Yj = {
	__name: "GenreMixer",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ N(t.api.snapshot()), r = Q();
		I(n, (e) => r.publishMixerSummary(e), { immediate: !0 });
		let i = G(() => n.value?.rows || []), a = G(() => n.value?.genres || []), o = G(() => n.value?.settings || {}), s = G(() => n.value?.options || {}), c = G(() => n.value?.saved || []), l = G(() => n.value?.prompt || ""), u = G(() => n.value?.tempo || 115), d = G(() => n.value?.title || "");
		function f() {
			let e = t.api.snapshot();
			e && (n.value = e);
		}
		L(() => window.addEventListener("sunoboom:mixer-updated", f)), Cr(() => window.removeEventListener("sunoboom:mixer-updated", f));
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
		let m = G(() => [
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
		return (e, t) => (B(), V(z, null, [H("header", nj, [
			t[1] ||= H("div", { class: "eyebrow" }, "Suno Studio · новый инструмент", -1),
			t[2] ||= H("h1", null, [U("Жанровый "), H("span", { class: "gm-highlight" }, "миксер")], -1),
			t[3] ||= H("p", null, "Соединяй от 2 до 4 жанров из Академии SUNOBOOM, задавай пропорции и создавай готовый Style-промпт для Suno.", -1),
			P(r).studioSummary.ready ? (B(), V("p", rj, [U(" Текущая Студия: " + D(P(r).studioSummary.tempo) + " BPM · " + D(P(r).studioSummary.promptLength) + " / 1000 символов. ", 1), t[0] ||= H("button", {
				type: "button",
				class: "link-action",
				"data-action": "nav",
				"data-nav": "studio"
			}, "Вернуться в Студию →", -1)])) : W("", !0)
		]), H("div", ij, [H("section", aj, [
			t[7] ||= H("div", { class: "gm-section-head" }, [H("div", null, [H("h2", null, "Формула звучания"), H("p", null, "Меняй жанры и двигай ползунки — сумма всегда равна 100%.")]), H("span", { class: "gm-total" }, "Σ 100%")], -1),
			H("div", oj, [(B(!0), V(z, null, R(i.value, (e, t) => (B(), V("article", {
				key: e.id,
				class: "gm-row",
				style: T({ "--gm-color": e.color })
			}, [
				H("div", sj, [
					H("span", cj, D(String(t + 1).padStart(2, "0")), 1),
					H("div", lj, [H("label", { for: "gm-genre-" + t }, "Музыкальное направление", 8, uj), H("select", {
						id: "gm-genre-" + t,
						value: e.id,
						"data-gm-genre": t
					}, [(B(!0), V(z, null, R(p(t), (e) => (B(), V("optgroup", {
						key: e.family,
						label: e.family
					}, [(B(!0), V(z, null, R(e.items, (e) => (B(), V("option", {
						key: e.id,
						value: e.id
					}, D(e.name), 9, pj))), 128))], 8, fj))), 128))], 8, dj)]),
					H("span", {
						class: "gm-percent",
						"data-gm-value": t
					}, D(e.weight) + "%", 9, mj),
					H("button", {
						type: "button",
						class: "gm-remove",
						"data-action": "gm-remove",
						"data-slot": t,
						"aria-label": "Убрать жанр " + e.name,
						title: "Убрать жанр",
						disabled: i.value.length <= 2
					}, "×", 8, hj)
				]),
				H("div", gj, [H("input", {
					type: "range",
					min: "5",
					max: 100 - 5 * (i.value.length - 1),
					step: "1",
					value: e.weight,
					"data-gm-weight": t,
					"aria-label": "Доля жанра " + e.name
				}, null, 8, _j), H("div", vj, [H("span", {
					"data-gm-meter": t,
					style: T({ width: e.weight + "%" })
				}, null, 12, yj)])]),
				H("p", bj, D(e.family) + " · " + D(e.tagline) + " · " + D(e.instruments), 1)
			], 4))), 128))]),
			H("div", xj, [H("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "gm-add",
				disabled: i.value.length >= 4
			}, "＋ Добавить жанр", 8, Sj), t[4] ||= H("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "gm-equal"
			}, "Поровну", -1)]),
			H("div", Cj, [(B(!0), V(z, null, R(i.value, (e) => (B(), V("span", {
				key: e.id,
				"data-gm-mixbar": e.id,
				style: T({
					width: e.weight + "%",
					background: e.color
				}),
				title: e.name + ": " + e.weight + "%"
			}, null, 12, wj))), 128))]),
			t[8] ||= H("p", { class: "gm-muted" }, "Проценты — творческий ориентир для генерации, а не гарантия точного соотношения в готовой музыке.", -1),
			t[9] ||= H("div", { class: "gm-divider" }, null, -1),
			t[10] ||= H("h2", null, "Характер композиции", -1),
			H("div", Tj, [(B(!0), V(z, null, R(m.value, (e) => (B(), V("div", {
				key: e.key,
				class: "gm-field"
			}, [H("label", { for: "gm-" + e.key }, D(e.label), 9, Ej), H("select", {
				id: "gm-" + e.key,
				value: o.value[e.key],
				"data-gm-setting": e.key
			}, [(B(!0), V(z, null, R(e.choices, ([e, t]) => (B(), V("option", {
				key: e,
				value: e
			}, D(t), 9, Oj))), 128))], 8, Dj)]))), 128))]),
			H("div", kj, [H("label", null, [H("input", {
				type: "checkbox",
				"data-gm-setting": "autoTempo",
				checked: o.value.autoTempo
			}, null, 8, Aj), t[5] ||= U(" Определять темп по жанрам", -1)]), H("div", jj, [H("input", {
				id: "gm-tempo",
				type: "range",
				min: "65",
				max: "200",
				value: u.value,
				"data-gm-setting": "tempo",
				disabled: o.value.autoTempo
			}, null, 8, Mj), H("b", Nj, D(u.value) + " BPM", 1)])]),
			H("div", Pj, [t[6] ||= H("label", { for: "gm-theme" }, "Тема песни (необязательно)", -1), H("textarea", {
				id: "gm-theme",
				rows: "2",
				maxlength: "170",
				"data-gm-setting": "theme",
				value: o.value.theme,
				placeholder: "Например: ночной город, встреча после долгой разлуки"
			}, null, 8, Fj)]),
			H("div", Ij, [(B(), V(z, null, R(h, ([e, t]) => H("label", { key: e }, [H("input", {
				type: "checkbox",
				"data-gm-setting": e,
				checked: o.value[e]
			}, null, 8, Lj), U(" " + D(t), 1)])), 64))])
		]), H("aside", Rj, [
			t[13] ||= H("div", { class: "eyebrow" }, "Результат микширования", -1),
			t[14] ||= H("h2", null, "Гибридный Style-промпт", -1),
			H("div", zj, D(l.value), 1),
			H("div", Bj, [t[11] ||= H("span", null, "На английском · готово для Suno", -1), H("b", Vj, D(l.value.length) + " / 1000", 1)]),
			t[15] ||= fa("<div class=\"gm-output-actions\"><button type=\"button\" class=\"btn primary\" data-action=\"gm-copy\">Копировать</button><button type=\"button\" class=\"btn ghost\" data-action=\"gm-to-studio\">В Suno Studio</button></div><button type=\"button\" class=\"btn ghost gm-full\" data-action=\"gm-save-prompt\">Сохранить в «Мои промпты»</button><div class=\"gm-divider\"></div><h3>Мои сочетания</h3>", 4),
			H("div", Hj, [t[12] ||= H("label", { for: "gm-title" }, "Название сочетания", -1), H("input", {
				id: "gm-title",
				type: "text",
				maxlength: "90",
				"data-gm-title": "",
				value: d.value,
				placeholder: "Например: Северный электро-фолк"
			}, null, 8, Uj)]),
			t[16] ||= H("button", {
				type: "button",
				class: "btn ghost gm-full",
				"data-action": "gm-save-mix"
			}, "Сохранить формулу", -1),
			H("div", Wj, [c.value.length ? W("", !0) : (B(), V("p", Gj, "Сохранённых сочетаний пока нет. Придумай свой микс и сохрани его.")), (B(!0), V(z, null, R(c.value, (e) => (B(), V("article", {
				key: e.id,
				class: "gm-saved"
			}, [H("div", null, [H("strong", null, D(e.title), 1), H("small", null, D(e.summary), 1)]), H("div", Kj, [H("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "gm-load",
				"data-id": e.id
			}, "Открыть", 8, qj), H("button", {
				type: "button",
				class: "btn danger small",
				"data-action": "gm-delete",
				"data-id": e.id,
				"aria-label": "Удалить " + e.title
			}, "×", 8, Jj)])]))), 128))]),
			t[17] ||= H("p", { class: "gm-muted" }, "Сохраняется в этом браузере и входит в общую JSON-копию данных SUNOBOOM. Подключение к ИИ для смешивания не требуется.", -1)
		])])], 64));
	}
};
// src/vue/studio/legacyMixerBridge.js
function Xj({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_MIXER, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-mixer-root"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, Yj, { api: t })
	});
}
// src/vue/studio/PromptAuditor.vue
var Zj = {
	class: "sbpa-tabs",
	role: "group",
	"aria-label": "Источник промпта"
}, Qj = ["aria-pressed"], $j = ["aria-pressed"], eM = {
	key: 0,
	class: "sbpa-manual"
}, tM = ["value"], nM = ["value"], rM = ["value"], iM = {
	key: 1,
	class: "sbpa-context"
}, aM = {
	id: "sbpa-results",
	"aria-live": "polite"
}, oM = { class: "sbpa-scoreline" }, sM = {
	class: "sbpa-score",
	"aria-label": "Эвристическая оценка промпта"
}, cM = { class: "sbpa-score-info" }, lM = ["aria-valuenow"], uM = {
	key: 0,
	class: "sbpa-issues"
}, dM = {
	key: 1,
	class: "sbpa-clear"
}, fM = { class: "sbpa-actions" }, pM = {
	key: 0,
	type: "button",
	"data-sbpa-action": "load-studio"
}, mM = { id: "sbpa-proposal-slot" }, hM = {
	key: 0,
	class: "sbpa-proposal"
}, gM = { key: 0 }, _M = { key: 1 }, vM = { key: 2 }, yM = {
	key: 3,
	class: "sbpa-alert"
}, bM = ["value"], xM = {
	__name: "PromptAuditor",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ N(t.api.snapshot()), r = Q();
		I(n, (e) => r.publishAuditorSummary(e), { immediate: !0 });
		let i = G(() => n.value?.mode === "manual"), a = G(() => n.value?.report || {
			score: 0,
			length: 0,
			issues: [],
			status: ""
		}), o = G(() => n.value?.genreId || ""), s = G(() => n.value?.genres || []), c = G(() => !!n.value?.proposalOpen), l = G(() => n.value?.proposal || {
			text: "",
			removed: [],
			complete: !0
		});
		function u() {
			let e = t.api.snapshot();
			e && (n.value = e);
		}
		return L(() => window.addEventListener("sunoboom:auditor-updated", u)), Cr(() => window.removeEventListener("sunoboom:auditor-updated", u)), (e, t) => (B(), V(z, null, [
			t[10] ||= H("header", { class: "sbpa-head" }, [H("div", null, [
				H("span", { class: "sbpa-eyebrow" }, "SUNOBOOM · ПРОВЕРКА"),
				H("h2", null, "Интеллектуальный аудитор промптов"),
				H("p", null, "Ищет повторы, противоречия, перегрузку и особенности жанра до отправки в Suno.")
			]), H("span", { class: "sbpa-local" }, "Проверка по правилам · без API")], -1),
			H("div", Zj, [H("button", {
				type: "button",
				"data-sbpa-action": "studio",
				class: E({ active: !i.value }),
				"aria-pressed": !i.value
			}, "Текущий промпт Studio", 10, Qj), H("button", {
				type: "button",
				"data-sbpa-action": "manual",
				class: E({ active: i.value }),
				"aria-pressed": i.value
			}, "Свой текст / вставка", 10, $j)]),
			i.value ? (B(), V("div", eM, [
				t[0] ||= H("label", { for: "sbpa-text" }, "Текст промпта", -1),
				H("textarea", {
					id: "sbpa-text",
					rows: "5",
					spellcheck: "false",
					placeholder: "Вставь текст на русском или английском…",
					value: n.value.manual
				}, null, 8, tM),
				t[1] ||= H("label", { for: "sbpa-genre" }, "Жанр для сопоставления с Академией", -1),
				H("select", {
					id: "sbpa-genre",
					value: o.value
				}, [(B(!0), V(z, null, R(s.value, (e) => (B(), V("option", {
					key: e.id,
					value: e.id
				}, D(e.name), 9, rM))), 128))], 8, nM)
			])) : (B(), V("p", iM, " Проверяется актуальный промпт конструктора. Изменения настроек Studio отражаются здесь автоматически. ")),
			H("div", aM, [H("div", oM, [
				H("div", sM, [U(D(a.value.score), 1), t[2] ||= H("small", null, "/ 100", -1)]),
				H("div", cM, [
					H("strong", null, D(a.value.status), 1),
					t[3] ||= H("span", null, "Оценка ориентировочная: проверяется структура текста, а не качество будущей музыки.", -1),
					H("div", {
						class: "sbpa-meter",
						role: "progressbar",
						"aria-label": "Оценка промпта",
						"aria-valuenow": a.value.score,
						"aria-valuemin": "0",
						"aria-valuemax": "100"
					}, [H("span", { style: T({ width: a.value.score + "%" }) }, null, 4)], 8, lM)
				]),
				H("div", { class: E(["sbpa-limit", { over: a.value.length > 1e3 }]) }, D(a.value.length) + " / 1000 символов ", 3)
			]), a.value.issues?.length ? (B(), V("ul", uM, [(B(!0), V(z, null, R(a.value.issues, (e, t) => (B(), V("li", {
				key: t,
				class: E(["sbpa-item", "sbpa-" + e.kind])
			}, [H("div", null, [
				H("strong", null, D(e.title), 1),
				H("p", null, D(e.detail), 1),
				H("small", null, D(e.fix), 1)
			])], 2))), 128))])) : (B(), V("p", dM, " Явных противоречий и повторов по проверяемым правилам не найдено. "))]),
			H("div", fM, [t[4] ||= H("button", {
				type: "button",
				"data-sbpa-action": "preview",
				class: "sbpa-primary"
			}, " Показать улучшенный вариант ", -1), i.value ? (B(), V("button", pM, " Вставить текущий промпт Studio ")) : W("", !0)]),
			H("div", mM, [c.value ? (B(), V("div", hM, [
				H("h4", null, [t[5] ||= U("Предлагаемый вариант ", -1), H("small", null, D(l.value.text.length) + " / 1000", 1)]),
				l.value.removed.length ? (B(), V("p", _M, "Удалено фрагментов: " + D(l.value.removed.length) + ". Проверь смысл до копирования.", 1)) : (B(), V("p", gM, "Удалять нечего: текст уже без точных повторов.")),
				l.value.removed.length ? (B(), V("details", vM, [t[6] ||= H("summary", null, "Что изменилось", -1), H("ul", null, [(B(!0), V(z, null, R(l.value.removed, (e, t) => (B(), V("li", { key: t }, [H("b", null, D(e.reason) + ":", 1), U(" " + D(e.part), 1)]))), 128))])])) : W("", !0),
				l.value.complete ? W("", !0) : (B(), V("p", yM, " Автоматического сокращения недостаточно. Уменьши текст вручную минимум на " + D(l.value.text.length - 1e3) + " символов. ", 1)),
				t[7] ||= H("label", { for: "sbpa-preview-text" }, "Редактируемый предпросмотр", -1),
				H("textarea", {
					id: "sbpa-preview-text",
					rows: "5",
					spellcheck: "false",
					value: l.value.text
				}, null, 8, bM),
				t[8] ||= H("div", { class: "sbpa-actions" }, [H("button", {
					type: "button",
					"data-sbpa-action": "copy-preview",
					class: "sbpa-primary"
				}, " Подтвердить и скопировать "), H("button", {
					type: "button",
					"data-sbpa-action": "close-preview"
				}, "Закрыть")], -1),
				t[9] ||= H("small", null, "Исходный промпт и параметры Studio не меняются. Копируется только текст предпросмотра после нажатия.", -1)
			])) : W("", !0)]),
			t[11] ||= H("p", { class: "sbpa-foot" }, " Аудитор не вызывает Gemini и не оценивает реальный звук. Жанровые отклонения могут быть творческим решением, а рекомендации не изменяют исходник без твоего действия. ", -1)
		], 64));
	}
};
// src/vue/studio/legacyAuditorBridge.js
function SM({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_AUDITOR, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sbpa-auditor"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, xM, { api: t })
	});
}
// src/vue/studio/ArrangementComposer.vue
var CM = { class: "sba-add-title" }, wM = {
	id: "sba-add-placement",
	role: "status"
}, TM = { class: "sba-add-row" }, EM = { for: "sba-add-type" }, DM = ["value"], OM = ["hidden"], kM = { class: "sba-add-row sba-add-controls" }, AM = ["hidden"], jM = {
	key: 1,
	type: "button",
	"data-sba-action": "request-preset",
	class: "sba-btn sba-preset-btn"
}, MM = ["hidden", "aria-expanded"], NM = {
	id: "sba-snake-meta",
	class: "sba-snake-meta"
}, PM = ["hidden", "aria-expanded"], FM = {
	key: 4,
	class: "sba-confirm"
}, IM = {
	key: 5,
	type: "button",
	class: "sba-end-add",
	"data-sba-action": "insert-end"
}, LM = {
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
		let t = e, n = /* @__PURE__ */ N(t.initial), r = G(() => n.value.controls), i = /* @__PURE__ */ M(r.value.type), a = () => {
			n.value = t.api.snapshot();
		};
		return window.addEventListener("sunoboom:arranger-updated", a), Cr(() => window.removeEventListener("sunoboom:arranger-updated", a)), (t, a) => e.kind === "composer" ? (B(), V(z, { key: 0 }, [
			H("div", CM, [a[2] ||= H("strong", null, "+ Новый блок", -1), H("span", wM, D(r.value.placement), 1)]),
			H("div", TM, [H("label", EM, [a[3] ||= U("Тип фрагмента", -1), F(H("select", {
				id: "sba-add-type",
				"onUpdate:modelValue": a[0] ||= (e) => i.value = e
			}, [(B(!0), V(z, null, R(n.value.sections, (e) => (B(), V("option", {
				key: e.id,
				value: e.id
			}, D(e.name), 9, DM))), 128))], 512), [[q, i.value]])]), H("label", {
				id: "sba-custom-name-wrap",
				for: "sba-new-block-title",
				hidden: i.value !== "custom"
			}, [a[4] ||= U("Название своего блока", -1), a[1] || (ta(-1, !0), (a[1] = H("input", {
				id: "sba-new-block-title",
				value: r.value.title,
				type: "text",
				maxlength: "48",
				placeholder: "Например: Разговорный переход",
				autocomplete: "off"
			}, null, 8, ["value"])).cacheIndex = 1, ta(1), a[1])], 8, OM)]),
			H("div", kM, [a[5] ||= H("button", {
				class: "sba-btn sba-add-btn",
				"data-sba-action": "add",
				type: "button"
			}, "+ Добавить блок", -1), H("button", {
				class: "sba-btn sba-placement-reset",
				"data-sba-action": "reset-insert",
				type: "button",
				hidden: !r.value.inserting
			}, "Добавлять в конец", 8, AM)]),
			a[6] ||= H("p", { class: "sba-add-hint" }, "Выбери куплет, припев, дроп или свой фрагмент. После добавления можно настроить такты, энергию, вокал и инструменты.", -1)
		], 64)) : e.kind === "apply" ? (B(), V("button", jM, "Применить шаблон")) : e.kind === "expand" ? (B(), V("button", {
			key: 2,
			type: "button",
			id: "sba-transition-hub-expand",
			class: "sba-transition-hub-expand",
			"data-sba-action": "transition-hub-expand",
			hidden: r.value.transitions <= 3,
			"aria-expanded": n.value.transitionHubExpanded
		}, D(n.value.transitionHubExpanded ? "Свернуть список" : "Показать все (" + r.value.transitions + ")"), 9, MM)) : e.kind === "snake-tools" ? (B(), V(z, { key: 3 }, [H("span", NM, D(r.value.snakeMeta), 1), H("button", {
			type: "button",
			id: "sba-snake-toggle",
			"data-sba-action": "snake-toggle",
			hidden: r.value.total <= r.value.previewCount,
			"aria-expanded": n.value.snakeExpanded
		}, D(n.value.snakeExpanded ? "Свернуть" : "Показать все (" + r.value.total + ")"), 9, PM)], 64)) : e.kind === "preset-confirm" && r.value.pending ? (B(), V("div", FM, [
			H("span", null, "Заменить текущую структуру шаблоном «" + D(r.value.pending) + "»? Текущие блоки будут заменены.", 1),
			a[7] ||= H("button", {
				type: "button",
				"data-sba-action": "preset-accept"
			}, "Заменить", -1),
			a[8] ||= H("button", {
				type: "button",
				"data-sba-action": "preset-cancel"
			}, "Отмена", -1)
		])) : e.kind === "end-add" ? (B(), V("button", IM, "+ Добавить блок в конец")) : W("", !0);
	}
}, RM = ["data-sba-id", "data-sba-energy"], zM = { class: "sba-block-head" }, BM = ["data-sba-drag", "aria-label"], VM = { class: "sba-index" }, HM = {
	class: "sba-emoji",
	"aria-hidden": "true"
}, UM = { class: "sba-head-energy" }, WM = { class: "sba-block-actions" }, GM = ["data-id", "disabled"], KM = ["data-id", "disabled"], qM = ["data-id"], JM = ["data-id"], YM = { class: "sba-block-fields" }, XM = ["data-id", "value"], ZM = ["value"], QM = ["data-id", "value"], $M = ["value"], eN = ["data-id", "value"], tN = ["value"], nN = { class: "sba-energy-field" }, rN = ["data-sba-output"], iN = ["value", "data-id"], aN = { class: "sba-instrument-field" }, oN = ["for"], sN = { class: "sba-instrument-row" }, cN = [
	"id",
	"data-id",
	"value"
], lN = ["id", "innerHTML"], uN = ["id"], dN = { class: "sba-sound-head" }, fN = ["data-id"], pN = ["data-id"], mN = ["id"], hN = {
	key: 0,
	class: "sba-sound-back"
}, gN = ["data-id"], _N = [
	"data-sba-sound-search",
	"data-id",
	"value",
	"placeholder"
], vN = ["id"], yN = { class: "sba-sound-info" }, bN = { key: 0 }, xN = ["data-id", "data-genre-id"], SN = {
	key: 0,
	class: "sba-sound-none"
}, CN = { class: "sba-sound-group" }, wN = [
	"disabled",
	"aria-disabled",
	"data-id",
	"data-sound-value"
], TN = {
	key: 0,
	class: "sba-sound-none"
}, EN = {
	key: 1,
	class: "sba-sound-foot"
}, DN = ["data-id"], ON = {
	key: 0,
	class: "sba-custom-label"
}, kN = ["data-id", "value"], AN = ["innerHTML"], jN = ["data-id", "aria-label"], MN = {
	key: 0,
	class: "sba-empty"
}, NN = ["aria-label"], PN = [
	"data-sba-snake-id",
	"data-sba-energy",
	"aria-label",
	"title"
], FN = { class: "sba-snake-num" }, IN = {
	class: "sba-snake-icon",
	"aria-hidden": "true"
}, LN = { class: "sba-snake-title" }, RN = { class: "sba-snake-level" }, zN = ["title"], BN = {
	key: 0,
	class: "sba-snake-more"
}, VN = {
	key: 1,
	class: "sba-snake-empty"
}, HN = ["data-sba-hub-from"], UN = { class: "sba-transition-hub-route" }, WN = { class: "sba-transition-hub-number" }, GN = { class: "sba-transition-hub-names" }, KN = { class: "sba-transition-hub-controls" }, qN = [
	"data-id",
	"value",
	"aria-label"
], JN = ["value"], YN = [
	"data-id",
	"value",
	"aria-label"
], XN = ["value"], ZN = [
	"data-id",
	"value",
	"aria-label"
], QN = ["value"], $N = { class: "sba-transition-hub-actions" }, eP = ["data-id", "title"], tP = ["data-id"], nP = {
	key: 1,
	class: "sba-transition-hub-empty"
}, rP = ["title"], iP = { class: "sba-chart-column" }, aP = {
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
		let t = e, n = /* @__PURE__ */ N(t.api.snapshot()), r = Q();
		t.kind === "cards" && I(n, (e) => r.publishArrangerSummary(e), { immediate: !0 });
		let i = G(() => n.value?.blocks || []), a = G(() => n.value?.sections || []), o = G(() => n.value?.voices || []), s = G(() => n.value?.energies || {}), c = G(() => n.value?.transitions || []), l = G(() => n.value?.transitionTypes || []), u = G(() => n.value?.transitionLengths || []), d = G(() => n.value?.transitionStrengths || []), f = G(() => n.value?.snakeExpanded ? i.value : i.value.slice(0, 12)), p = G(() => n.value?.transitionHubExpanded ? c.value : c.value.slice(0, 3)), m = [
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
		L(() => window.addEventListener("sunoboom:arranger-updated", h)), Cr(() => window.removeEventListener("sunoboom:arranger-updated", h));
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
		let _ = G(() => f.value.map((e, t) => t + 1 + ". " + e.snakeLabel).join(" → "));
		return (t, n) => e.kind === "cards" ? (B(), V(z, { key: 0 }, [(B(!0), V(z, null, R(i.value, (e, t) => (B(), V(z, { key: e.id }, [
			H("article", {
				class: "sba-block",
				"data-sba-id": e.id,
				"data-sba-energy": e.energy
			}, [H("div", zM, [
				H("span", {
					class: "sba-drag",
					draggable: "true",
					"data-sba-drag": e.id,
					title: "Перетащить блок",
					"aria-label": "Перетащить " + e.sectionName
				}, "⠿", 8, BM),
				H("span", VM, D(String(t + 1).padStart(2, "0")), 1),
				H("span", HM, D(e.icon), 1),
				H("strong", null, D(e.label), 1),
				H("span", UM, "Энергия " + D(e.energy) + "/5", 1),
				H("div", WM, [
					H("button", {
						type: "button",
						"data-sba-action": "up",
						"data-id": e.id,
						"aria-label": "Переместить вверх",
						disabled: t === 0
					}, "↑", 8, GM),
					H("button", {
						type: "button",
						"data-sba-action": "down",
						"data-id": e.id,
						"aria-label": "Переместить вниз",
						disabled: t === i.value.length - 1
					}, "↓", 8, KM),
					H("button", {
						type: "button",
						"data-sba-action": "duplicate",
						"data-id": e.id,
						"aria-label": "Дублировать блок"
					}, "⧉", 8, qM),
					H("button", {
						type: "button",
						"data-sba-action": "remove",
						"data-id": e.id,
						"aria-label": "Удалить блок"
					}, "×", 8, JM)
				])
			]), H("div", YM, [
				H("label", null, [n[0] ||= U("Раздел ", -1), H("select", {
					"data-sba-field": "type",
					"data-id": e.id,
					value: e.type
				}, [(B(!0), V(z, null, R(a.value, (e) => (B(), V("option", {
					key: e.id,
					value: e.id
				}, D(e.name), 9, ZM))), 128))], 8, XM)]),
				H("label", null, [n[1] ||= U("Тактов ", -1), H("select", {
					"data-sba-field": "bars",
					"data-id": e.id,
					value: e.bars
				}, [(B(), V(z, null, R(m, (e) => H("option", {
					key: e,
					value: e
				}, D(e), 9, $M)), 64))], 8, QM)]),
				H("label", null, [n[2] ||= U("Вокал ", -1), H("select", {
					"data-sba-field": "vocal",
					"data-id": e.id,
					value: e.vocal
				}, [(B(!0), V(z, null, R(o.value, (e) => (B(), V("option", {
					key: e.id,
					value: e.id
				}, D(e.name), 9, tN))), 128))], 8, eN)]),
				H("label", nN, [
					n[3] ||= U("Энергия ", -1),
					H("output", { "data-sba-output": e.id }, D(e.energy) + "/5 · " + D(s.value[e.energy]), 9, rN),
					H("input", {
						type: "range",
						min: "1",
						max: "5",
						step: "1",
						value: e.energy,
						"data-sba-field": "energy",
						"data-id": e.id
					}, null, 8, iN)
				]),
				H("div", aN, [
					H("label", { for: "sba-instruments-" + e.id }, "Инструменты / приём", 8, oN),
					H("div", sN, [H("input", {
						type: "text",
						id: "sba-instruments-" + e.id,
						maxlength: "300",
						"data-sba-field": "instruments",
						"data-id": e.id,
						value: e.instruments,
						placeholder: "Введи вручную или выбери рекомендацию",
						autocomplete: "off"
					}, null, 8, cN)]),
					H("div", {
						class: "sba-quick-sounds",
						id: "sba-quick-" + e.id,
						innerHTML: e.quickSounds
					}, null, 8, lN),
					e.soundPanel ? (B(), V("div", {
						key: 0,
						class: "sba-sound-panel",
						id: "sba-sound-panel-" + e.id,
						"aria-label": "Выбор инструментов и приёмов"
					}, [
						H("div", dN, [n[4] ||= H("strong", null, "Библиотека инструментов и приёмов", -1), H("button", {
							type: "button",
							"data-sba-action": "sound-close",
							"data-id": e.id,
							"aria-label": "Закрыть подбор"
						}, "×", 8, fN)]),
						H("button", {
							type: "button",
							class: "sba-sound-genre-trigger",
							"data-sba-action": "sound-switch-mode",
							"data-id": e.id
						}, [
							n[5] ||= U(" Жанр: ", -1),
							H("b", null, D(e.soundPanel.genreName), 1),
							n[6] ||= H("span", null, "⌄", -1)
						], 8, pN),
						H("div", { id: "sba-sound-body-" + e.id }, [
							e.soundPanel.mode === "genres" ? (B(), V("div", hN, [H("button", {
								type: "button",
								"data-sba-action": "sound-switch-mode",
								"data-id": e.id
							}, " ← К инструментам ", 8, gN)])) : W("", !0),
							H("input", {
								type: "search",
								class: "sba-sound-search",
								"data-sba-sound-search": e.soundPanel.mode,
								"data-id": e.id,
								value: e.soundPanel.query,
								placeholder: e.soundPanel.mode === "genres" ? "Поиск по всей Академии..." : "Поиск инструмента или приёма...",
								autocomplete: "off",
								"aria-label": "Поиск инструментов или жанров"
							}, null, 8, _N),
							H("div", {
								class: "sba-sound-list",
								id: "sba-sound-results-" + e.id
							}, [e.soundPanel.mode === "genres" ? (B(), V(z, { key: 0 }, [
								H("div", yN, [U(" Найдено жанров: " + D(e.soundPanel.total) + " ", 1), e.soundPanel.total > e.soundPanel.matches.length ? (B(), V("span", bN, " · уточни запрос ")) : W("", !0)]),
								(B(!0), V(z, null, R(e.soundPanel.matches, (t) => (B(), V("button", {
									key: t.id,
									type: "button",
									class: "sba-sound-genre-row",
									"data-sba-action": "sound-set-genre",
									"data-id": e.id,
									"data-genre-id": t.id
								}, [H("span", null, D(t.name), 1), H("small", null, D(t.family), 1)], 8, xN))), 128)),
								e.soundPanel.matches.length ? W("", !0) : (B(), V("p", SN, " Жанр не найден "))
							], 64)) : (B(), V(z, { key: 1 }, [(B(!0), V(z, null, R(e.soundPanel.groups, (t) => (B(), V(z, { key: t.title }, [H("div", CN, D(t.title), 1), (B(!0), V(z, null, R(t.items, (t) => (B(), V("button", {
								key: t.name,
								type: "button",
								class: "sba-sound-option",
								disabled: t.added,
								"aria-disabled": t.added,
								"data-sba-action": "sound-add",
								"data-id": e.id,
								"data-sound-value": t.name
							}, [H("span", null, D(t.name), 1), H("small", null, D(t.added ? "✓ Добавлено" : "+ Добавить"), 1)], 8, wN))), 128))], 64))), 128)), e.soundPanel.groups.length ? W("", !0) : (B(), V("p", TN, " Совпадений нет. Можно ввести инструмент вручную. "))], 64))], 8, vN),
							e.soundPanel.mode === "genres" ? W("", !0) : (B(), V("div", EN, [n[7] ||= H("span", null, "Нажми «Добавить», чтобы дополнить поле. Свой текст сохраняется.", -1), H("button", {
								type: "button",
								"data-sba-action": "sound-clear",
								"data-id": e.id
							}, " Очистить поле ", 8, DN)]))
						], 8, mN)
					], 8, uN)) : W("", !0)
				]),
				e.type === "custom" ? (B(), V("label", ON, [n[8] ||= U("Своё название ", -1), H("input", {
					type: "text",
					maxlength: "48",
					"data-sba-field": "customName",
					"data-id": e.id,
					value: e.customName,
					placeholder: "Название для тега Suno"
				}, null, 8, kN)])) : W("", !0)
			])], 8, RM),
			e.transitionHTML ? (B(), V("div", {
				key: 0,
				style: { display: "contents" },
				innerHTML: e.transitionHTML
			}, null, 8, AN)) : W("", !0),
			H("button", {
				type: "button",
				class: "sba-between-add",
				"data-sba-action": "insert-after",
				"data-id": e.id,
				"aria-label": "Добавить блок после " + e.label
			}, [...n[9] ||= [H("span", { "aria-hidden": "true" }, "＋", -1), U(" Добавить после ", -1)]], 8, jN)
		], 64))), 128)), i.value.length ? W("", !0) : (B(), V("div", MN, "Пока нет блоков. Добавь первый фрагмент снизу."))], 64)) : e.kind === "snake" ? (B(), V(z, { key: 1 }, [i.value.length ? (B(), V(z, { key: 0 }, [(B(), V(z, null, R([6, 3], (e) => H("div", {
			key: e,
			class: E(e === 6 ? "sba-snake-desktop" : "sba-snake-mobile"),
			role: "group",
			"aria-label": "Схема блоков: " + _.value
		}, [(B(!0), V(z, null, R(g(e), (e) => (B(), V("div", {
			key: e.id,
			class: E(["sba-snake-row", {
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
			"aria-label": "Переместить " + e.snakeLabel + ", позиция " + (e.index + 1) + " из " + i.value.length + ", энергия " + e.energy + "/5",
			title: e.index + 1 + ". " + e.snakeLabel + " · энергия " + e.energy + "/5 · перетащи для перестановки"
		}, [
			H("span", FN, D(e.index + 1), 1),
			H("span", IN, D(e.icon), 1),
			H("span", LN, D(e.snakeLabel), 1),
			H("span", RN, D(e.energy) + "/5", 1),
			e.hasTransition ? (B(), V("span", {
				key: 0,
				class: "sba-snake-transition",
				title: "Переход: " + e.transitionLabel,
				"aria-hidden": "true"
			}, "↝", 8, zN)) : W("", !0)
		], 8, PN))), 128))], 2))), 128))], 10, NN)), 64)), f.value.length < i.value.length ? (B(), V("p", BN, " … и ещё " + D(i.value.length - f.value.length) + " блоков ", 1)) : W("", !0)], 64)) : (B(), V("p", VN, "Добавь первый блок, и здесь появится схема композиции."))], 64)) : e.kind === "transitions" ? (B(), V(z, { key: 2 }, [c.value.length ? (B(!0), V(z, { key: 0 }, R(p.value, (e) => (B(), V("div", {
			key: e.id,
			class: E(["sba-transition-hub-row", { "sba-transition-hub-active": e.current.type !== "none" }]),
			"data-sba-hub-from": e.id
		}, [
			H("div", UN, [H("span", WN, D(e.index + 1) + " → " + D(e.index + 2), 1), H("span", GN, [
				U(D(e.from) + " ", 1),
				n[10] ||= H("b", null, "→", -1),
				U(" " + D(e.to), 1)
			])]),
			H("div", KN, [
				H("label", null, [n[11] ||= U("Эффект ", -1), H("select", {
					"data-sba-transition": "type",
					"data-id": e.id,
					value: e.current.type,
					"aria-label": "Переход " + (e.index + 1) + " к " + (e.index + 2)
				}, [(B(!0), V(z, null, R(l.value, (e) => (B(), V("option", {
					key: e.id,
					value: e.id
				}, D(e.name), 9, JN))), 128))], 8, qN)]),
				H("label", null, [n[12] ||= U("Длина ", -1), H("select", {
					"data-sba-transition": "length",
					"data-id": e.id,
					value: e.current.length,
					"aria-label": "Длительность перехода " + (e.index + 1)
				}, [(B(!0), V(z, null, R(u.value, (e) => (B(), V("option", {
					key: e.id,
					value: e.id
				}, D(e.name), 9, XN))), 128))], 8, YN)]),
				H("label", null, [n[13] ||= U("Сила ", -1), H("select", {
					"data-sba-transition": "strength",
					"data-id": e.id,
					value: e.current.strength,
					"aria-label": "Выраженность перехода " + (e.index + 1)
				}, [(B(!0), V(z, null, R(d.value, (e) => (B(), V("option", {
					key: e.id,
					value: e.id
				}, D(e.name), 9, QN))), 128))], 8, ZN)])
			]),
			H("div", $N, [H("button", {
				type: "button",
				"data-sba-action": "transition-suggest",
				"data-id": e.id,
				title: "Совет: " + e.advice
			}, "✧ Совет", 8, eP), H("button", {
				type: "button",
				"data-sba-action": "transition-hub-jump",
				"data-id": e.id
			}, "Подробнее ↓", 8, tP)])
		], 10, HN))), 128)) : (B(), V("p", nP, "Добавь второй блок, и здесь можно будет настроить переходы."))], 64)) : e.kind === "energy" ? (B(!0), V(z, { key: 3 }, R(i.value, (e) => (B(), V("div", {
			key: e.id,
			class: "sba-chart-step",
			title: e.label + " · " + e.energy + "/5",
			style: T({
				"--energy": e.energy,
				"--bar-width": 100 / i.value.length + "%"
			})
		}, [H("div", iP, [H("i", { style: T({ "--level": e.energy }) }, null, 4)]), H("small", null, D(e.icon), 1)], 12, rP))), 128)) : W("", !0);
	}
}, oP = ["aria-expanded"], sP = { id: "sba-picked-label" }, cP = ["hidden"], lP = { class: "sba-preset-search-row" }, uP = ["value"], dP = {
	class: "sba-preset-filters",
	role: "group",
	"aria-label": "Тип вариантов"
}, fP = ["data-filter", "aria-pressed"], pP = {
	id: "sba-preset-results",
	class: "sba-preset-results",
	role: "listbox",
	"aria-label": "Доступные шаблоны и жанры"
}, mP = { class: "sba-preset-group-title" }, hP = { key: 0 }, gP = ["aria-selected", "data-choice"], _P = {
	key: 0,
	class: "sba-preset-no-results"
}, vP = {
	__name: "ArrangementPicker",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ N(t.api.snapshot()), r = G(() => n.value?.picker || {
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
		return L(() => window.addEventListener("sunoboom:arranger-updated", i)), Cr(() => window.removeEventListener("sunoboom:arranger-updated", i)), (e, t) => (B(), V(z, null, [
			t[2] ||= H("span", { class: "sba-preset-caption" }, "Шаблон композиции / жанр", -1),
			H("button", {
				type: "button",
				id: "sba-presets",
				class: "sba-preset-trigger",
				"data-sba-action": "menu-toggle",
				"aria-haspopup": "dialog",
				"aria-expanded": r.value.open,
				"aria-controls": "sba-preset-menu"
			}, [H("span", sP, D(r.value.selected), 1), t[0] ||= H("span", {
				class: "sba-preset-chevron",
				"aria-hidden": "true"
			}, "⌄", -1)], 8, oP),
			H("div", {
				id: "sba-preset-menu",
				class: "sba-preset-menu",
				role: "dialog",
				"aria-label": "Поиск шаблона или жанра",
				hidden: !r.value.open
			}, [
				H("div", lP, [H("input", {
					type: "search",
					id: "sba-preset-search",
					autocomplete: "off",
					value: r.value.query,
					placeholder: "Найти жанр или шаблон...",
					"aria-label": "Поиск жанра"
				}, null, 8, uP), t[1] ||= H("button", {
					type: "button",
					"data-sba-action": "menu-close",
					"aria-label": "Закрыть меню"
				}, "×", -1)]),
				H("div", dP, [(B(!0), V(z, null, R([
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
				}, D(e.title), 9, fP))), 128))]),
				H("div", pP, [(B(!0), V(z, null, R(r.value.groups, (e) => (B(), V(z, { key: e.title }, [H("div", mP, [U(D(e.title) + " ", 1), e.count === null ? W("", !0) : (B(), V("small", hP, D(e.count), 1))]), (B(!0), V(z, null, R(e.items, (e) => (B(), V("button", {
					key: e.key,
					type: "button",
					role: "option",
					"aria-selected": e.key === r.value.selectedKey,
					"data-sba-action": "menu-choose",
					"data-choice": e.key
				}, [H("span", null, D(e.title), 1), H("small", null, D(e.subtitle), 1)], 8, gP))), 128))], 64))), 128)), r.value.groups.length ? W("", !0) : (B(), V("p", _P, " Ничего не найдено. Попробуй другое название или направление. "))])
			], 8, cP)
		], 64));
	}
}, yP = {
	class: "sba-preview-tabs",
	role: "group",
	"aria-label": "Тип результата"
}, bP = ["aria-pressed"], xP = ["aria-pressed"], SP = ["value"], CP = {
	class: "sba-preview-count",
	id: "sba-preview-count"
}, wP = {
	id: "sba-transfer-confirm",
	"aria-live": "polite"
}, TP = {
	key: 0,
	class: "sba-transfer-preview"
}, EP = ["hidden"], DP = {
	__name: "ArrangementResult",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ N(t.api.snapshot()), r = G(() => n.value?.result || {
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
		return L(() => window.addEventListener("sunoboom:arranger-updated", i)), Cr(() => window.removeEventListener("sunoboom:arranger-updated", i)), (e, t) => (B(), V(z, null, [
			t[3] ||= H("div", { class: "sba-result-header" }, [
				H("span", { class: "sba-eyebrow" }, "ПРЕДПРОСМОТР"),
				H("h3", null, "Результат для Suno"),
				H("p", null, "Lyrics — теги по секциям; Style — короткое описание динамики.")
			], -1),
			H("div", yP, [H("button", {
				type: "button",
				"data-sba-action": "tab",
				"data-tab": "lyrics",
				"aria-pressed": r.value.tab === "lyrics"
			}, "Теги Lyrics", 8, bP), H("button", {
				type: "button",
				"data-sba-action": "tab",
				"data-tab": "style",
				"aria-pressed": r.value.tab === "style"
			}, "Style", 8, xP)]),
			H("textarea", {
				id: "sba-preview",
				readonly: "",
				spellcheck: "false",
				"aria-label": "Готовые теги структуры песни",
				value: r.value.text
			}, null, 8, SP),
			H("div", CP, D(r.value.count), 1),
			t[4] ||= H("div", { class: "sba-result-actions" }, [H("button", {
				type: "button",
				class: "sba-btn sba-copy-btn",
				"data-sba-action": "copy"
			}, " Копировать результат "), H("button", {
				type: "button",
				class: "sba-btn sba-transfer-btn",
				"data-sba-action": "prepare-transfer"
			}, " Перенести стиль в Studio ")], -1),
			H("div", wP, [r.value.transfer ? (B(), V("div", TP, [
				t[0] ||= H("strong", null, "Предпросмотр переноса в Style", -1),
				t[1] ||= H("p", null, "Добавим описание аранжировки в дополнительные инструкции Suno Studio, не удаляя твои записи.", -1),
				H("code", null, D(r.value.transfer.candidate), 1),
				t[2] ||= H("div", { class: "sba-preview-buttons" }, [H("button", {
					type: "button",
					"data-sba-action": "transfer-accept"
				}, "Подтвердить перенос"), H("button", {
					type: "button",
					"data-sba-action": "transfer-cancel"
				}, "Отмена")], -1),
				H("small", null, "Итоговый промпт Studio: " + D(r.value.transfer.promptLength) + " / 1000 символов", 1)
			])) : W("", !0)]),
			H("p", {
				id: "sba-message",
				class: "sba-message",
				role: "status",
				"aria-live": "polite",
				hidden: !r.value.message
			}, D(r.value.message), 9, EP),
			t[5] ||= H("div", { class: "sba-help" }, [
				H("strong", null, "Как применять"),
				H("p", null, [
					U("Теги секций вставляй в поле "),
					H("b", null, "Lyrics"),
					U(" в Suno рядом с текстом песни. Краткую динамику можно добавить в "),
					H("b", null, "Style"),
					U(" через Suno Studio после подтверждения.")
				]),
				H("p", null, "Ориентир длительности рассчитан по 4/4 и BPM Studio, это не гарантия точной длины аудио.")
			], -1)
		], 64));
	}
}, OP = [
	...[
		"composer",
		"apply",
		"expand",
		"snake-tools",
		"preset-confirm",
		"end-add"
	].map((e) => [
		`[data-sb-arranger-controls="${e}"]`,
		e,
		LM
	]),
	["#sba-cards", "cards"],
	["#sba-snake-track", "snake"],
	["#sba-transition-hub-list", "transitions"],
	["#sba-energy-chart", "energy"],
	[
		".sba-preset-picker",
		"picker",
		vP
	],
	[
		".sba-result",
		"result",
		DP
	]
];
function kP({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ARRANGER, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : vc({
		root: n,
		islands: OP.map(([n, r, i = aP]) => ({
			key: r,
			selectTarget: (e) => e.querySelector(n),
			readSnapshot: () => t.snapshot(),
			mount: (n, a) => {
				let o = e(n, i, i === aP || i === LM ? {
					api: t,
					kind: r,
					initial: a
				} : { api: t });
				return !o && r === "composer" && t.restoreComposer(a.controls), o;
			}
		}))
	});
}
// src/vue/poetry/PoetryAnalysis.vue
var AP = {
	key: 0,
	class: "sb-poetry-empty"
}, jP = { class: "sb-poetry-stats" }, MP = { class: "sb-poetry-subline" }, NP = { class: "sb-poetry-sections" }, PP = { class: "sb-poetry-stanzas" }, FP = { class: "sb-poetry-stanza-name" }, IP = { class: "sb-poetry-stanza-data" }, LP = { class: "sb-poetry-lines" }, RP = { class: "sb-poetry-line-main" }, zP = { class: "sb-poetry-index" }, BP = { class: "sb-poetry-verse" }, VP = {
	class: "sb-poetry-syllable",
	title: "Оценка слогов"
}, HP = ["title"], UP = {
	key: 0,
	class: "sb-poetry-footnote"
}, WP = {
	key: 1,
	class: "sb-poetry-words"
}, GP = { class: "sb-poetry-tips" }, KP = {
	__name: "PoetryAnalysis",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ N(t.api.analysis()), r = G(() => n.value || {
			analyzed: !1,
			message: ""
		}), i = Q();
		function a() {
			let e = t.api.analysis();
			e && (n.value = e, i.publishPoetryAnalysisSummary(e));
		}
		return L(() => {
			i.publishPoetryAnalysisSummary(n.value), window.addEventListener("sunoboom:poetry-updated", a);
		}), Cr(() => window.removeEventListener("sunoboom:poetry-updated", a)), (e, t) => r.value.analyzed ? (B(), V(z, { key: 1 }, [
			H("div", jP, [(B(!0), V(z, null, R(r.value.stats, (e) => (B(), V("div", {
				key: e.label,
				class: "sb-poetry-stat"
			}, [H("strong", null, D(e.value), 1), H("span", null, D(e.label), 1)]))), 128))]),
			H("p", MP, " Диапазон: " + D(r.value.lower) + "–" + D(r.value.upper) + " слогов на строку · меток ударения: " + D(r.value.markedStress) + ". ", 1),
			H("div", NP, [t[1] ||= H("h4", null, "Строфы и предполагаемая рифмовка", -1), H("div", PP, [(B(!0), V(z, null, R(r.value.stanzas, (e) => (B(), V("div", {
				key: e.id,
				class: "sb-poetry-stanza"
			}, [H("div", FP, D(e.section) + " · строфа " + D(e.position), 1), H("div", IP, [
				U(" Схема " + D(e.scheme) + " ", 1),
				t[0] ||= H("span", null, "·", -1),
				U(" разброс " + D(e.spread) + " сл. ", 1)
			])]))), 128))])]),
			t[4] ||= H("div", { class: "sb-poetry-lines-head" }, [H("strong", null, "Построчный анализ"), H("span", null, "Слоги · рифма")], -1),
			H("div", LP, [(B(!0), V(z, null, R(r.value.lines, (e) => (B(), V("div", {
				key: e.number,
				class: "sb-poetry-line"
			}, [
				H("div", RP, [H("span", zP, D(e.number) + ".", 1), H("span", BP, D(e.text), 1)]),
				H("div", VP, [H("span", null, D(e.syllables) + " сл.", 1), H("i", { style: T({ width: e.width + "%" }) }, null, 4)]),
				H("span", {
					class: E(["sb-poetry-letter", { "sb-poetry-letter-match": e.rhyme }]),
					title: e.repeat ? "Совпадение последнего слова" : e.rhyme ? "Предполагаемая рифма" : "Метка окончания"
				}, D(e.mark), 11, HP)
			]))), 128))]),
			r.value.rowCount > 120 ? (B(), V("p", UP, " Показаны первые 120 строк из " + D(r.value.rowCount) + "; статистика рассчитана по всему тексту. ", 1)) : W("", !0),
			r.value.frequent.length ? (B(), V("div", WP, [t[2] ||= H("strong", null, "Повторяющиеся слова:", -1), (B(!0), V(z, null, R(r.value.frequent, (e) => (B(), V("span", { key: e.word }, D(e.word) + " · " + D(e.count), 1))), 128))])) : W("", !0),
			H("div", GP, [t[3] ||= H("h4", null, "На что обратить внимание", -1), H("ul", null, [(B(!0), V(z, null, R(r.value.suggestions, (e, t) => (B(), V("li", { key: t }, D(e), 1))), 128))])]),
			t[5] ||= H("p", { class: "sb-poetry-footnote" }, " Анализ ориентировочный: счёт гласных не равен точной метрической скансии, совпадение окончаний не гарантирует рифму, а вокальная удобность зависит от темпа и мелодии. Исходный текст автоматически не изменяется. ", -1)
		], 64)) : (B(), V("p", AP, D(r.value.message), 1));
	}
}, qP = {
	key: 0,
	class: "sb-stress-ambig-clear"
}, JP = { class: "sb-stress-ambig-heading" }, YP = { class: "sb-stress-ambig-variants" }, XP = ["data-word", "data-variant"], ZP = {
	key: 0,
	class: "sb-poetry-small"
}, QP = {
	__name: "PoetryAmbiguities",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ N(t.api.ambiguities()), r = G(() => n.value || {
			count: 0,
			words: [],
			total: 0
		}), i = Q();
		function a() {
			let e = t.api.ambiguities();
			e && (n.value = e, i.publishPoetryAmbiguitySummary(e));
		}
		return L(() => {
			i.publishPoetryAmbiguitySummary(n.value), window.addEventListener("sunoboom:poetry-stress-updated", a);
		}), Cr(() => {
			window.removeEventListener("sunoboom:poetry-stress-updated", a), i.clearPoetryAmbiguitySummary();
		}), (e, t) => r.value.count ? (B(), V(z, { key: 1 }, [
			H("div", JP, " 🔴 Требуют проверки: " + D(r.value.count) + " вхождений (" + D(r.value.total) + " разных слов). Нажми нужный вариант для каждого вхождения. ", 1),
			(B(!0), V(z, null, R(r.value.words, (e) => (B(), V("div", {
				key: e.key,
				class: "sb-stress-ambig-choice"
			}, [H("strong", null, D(e.key) + D(e.count > 1 ? " ×" + e.count : ""), 1), H("div", YP, [(B(!0), V(z, null, R(e.variants, (t) => (B(), V("button", {
				key: t,
				type: "button",
				"data-action": "sb-poetry-stress-choice",
				"data-word": e.key,
				"data-variant": t,
				title: "Указать ударение для следующего вхождения"
			}, D(t), 9, XP))), 128))])]))), 128)),
			r.value.total > 30 ? (B(), V("p", ZP, " Показаны первые 30 разных слов; другие можно исправить вручную. ")) : W("", !0)
		], 64)) : (B(), V("p", qP, " ✓ Все найденные неоднозначные слова проверены. "));
	}
};
// src/vue/poetry/legacyPoetryBridge.js
function $P({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_POETRY, n = document.getElementById("app");
	return !t?.analysis || !t?.ambiguities || !n ? () => {} : vc({
		root: n,
		islands: [[
			"analysis",
			"#sb-poetry-result",
			KP
		], [
			"ambiguities",
			"#sb-poetry-ambiguous-choices",
			QP
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
var eF = { class: "sb-vt-field" }, tF = ["value"], nF = ["value"], rF = {
	class: "sb-vt-hint",
	id: "sb-vt-mode-hint"
}, iF = { class: "sb-vt-grid" }, aF = { class: "sb-vt-field" }, oF = ["value"], sF = ["value"], cF = { class: "sb-vt-field" }, lF = ["value"], uF = ["value"], dF = {
	key: 0,
	class: "sb-vt-field"
}, fF = ["value"], pF = ["value"], mF = { class: "sb-vt-intensity" }, hF = { class: "sb-vt-between" }, gF = { id: "sb-vt-intensity-label" }, _F = ["value"], vF = { class: "sb-vt-options" }, yF = ["data-vt-pref", "checked"], bF = {
	key: 1,
	class: "sb-vt-consent",
	id: "sb-vt-consent-row"
}, xF = { class: "sb-vt-buttons" }, SF = ["disabled"], CF = {
	id: "sb-vt-result",
	"aria-live": "polite"
}, wF = {
	key: 0,
	class: "sb-vt-draft"
}, TF = { class: "sb-vt-draft-head" }, EF = { class: "sb-vt-method" }, DF = { class: "sb-vt-section-list" }, OF = { class: "sb-vt-section-heading" }, kF = { class: "sb-vt-section-controls" }, AF = [
	"data-vt-preset",
	"value",
	"aria-label"
], jF = ["value"], MF = [
	"data-vt-cue",
	"value",
	"aria-label"
], NF = { class: "sb-vt-field" }, PF = ["value"], FF = {
	class: "sb-vt-small",
	id: "sb-vt-preview-state"
}, IF = {
	__name: "PerformanceTags",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ N(t.api.snapshot()), r = Q(), i = G(() => n.value?.prefs || {}), a = G(() => n.value?.draft || null), o = [
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
		return L(() => {
			r.publishPerformanceTagsSummary(n.value), window.addEventListener("sunoboom:tags-updated", u);
		}), Cr(() => {
			window.removeEventListener("sunoboom:tags-updated", u), r.clearPerformanceTagsSummary();
		}), (e, t) => (B(), V(z, null, [
			t[12] ||= H("div", { class: "sb-vt-header" }, [H("span", { class: "sb-vt-symbol" }, "🎭"), H("div", null, [H("h3", null, "Генератор тегов исполнения"), H("p", null, "Вокальная драматургия по секциям. Без изменения слов песни; результат можно проверить и применить только вручную.")])], -1),
			H("div", eF, [t[0] ||= H("label", { for: "sb-vt-mode" }, "Способ генерации", -1), H("select", {
				id: "sb-vt-mode",
				"data-vt-pref": "mode",
				value: i.value.mode
			}, [(B(), V(z, null, R(o, ([e, t]) => H("option", {
				key: e,
				value: e
			}, D(t), 9, nF)), 64))], 8, tF)]),
			H("p", rF, D(n.value.modeHint), 1),
			H("div", iF, [H("div", aF, [t[1] ||= H("label", { for: "sb-vt-source" }, "Источник текста", -1), H("select", {
				id: "sb-vt-source",
				"data-vt-pref": "source",
				value: i.value.source
			}, [(B(), V(z, null, R(c, ([e, t]) => H("option", {
				key: e,
				value: e
			}, D(t), 9, sF)), 64))], 8, oF)]), H("div", cF, [t[2] ||= H("label", { for: "sb-vt-density" }, "Детализация метатегов", -1), H("select", {
				id: "sb-vt-density",
				"data-vt-pref": "density",
				value: i.value.density
			}, [(B(), V(z, null, R(s, ([e, t]) => H("option", {
				key: e,
				value: e
			}, D(t), 9, uF)), 64))], 8, lF)])]),
			n.value.artists?.length ? (B(), V("div", dF, [t[4] ||= H("label", { for: "sb-vt-artist" }, "Учесть «ДНК артиста» (необязательно)", -1), H("select", {
				id: "sb-vt-artist",
				"data-vt-pref": "artistId",
				value: i.value.artistId
			}, [t[3] ||= H("option", { value: "" }, "Без привязки к артисту", -1), (B(!0), V(z, null, R(n.value.artists, (e) => (B(), V("option", {
				key: e.id,
				value: e.id
			}, D(e.name), 9, pF))), 128))], 8, fF)])) : W("", !0),
			H("div", mF, [
				H("div", hF, [t[5] ||= H("label", { for: "sb-vt-intensity" }, "Максимальная интенсивность исполнения", -1), H("strong", gF, D(i.value.intensity) + " / 5", 1)]),
				H("input", {
					type: "range",
					id: "sb-vt-intensity",
					min: "1",
					max: "5",
					step: "1",
					value: i.value.intensity,
					"data-vt-pref": "intensity"
				}, null, 8, _F),
				t[6] ||= H("div", { class: "sb-vt-between sb-vt-scale" }, [H("span", null, "Сдержанная"), H("span", null, "Экспрессивная")], -1)
			]),
			H("div", vF, [(B(), V(z, null, R(l, ([e, t]) => H("label", { key: e }, [H("input", {
				type: "checkbox",
				"data-vt-pref": e,
				checked: i.value[e]
			}, null, 8, yF), U(" " + D(t), 1)])), 64))]),
			n.value.hasEndpoint ? (B(), V("label", bF, [...t[7] ||= [H("input", {
				type: "checkbox",
				id: "sb-vt-consent"
			}, null, -1), U(" Разрешаю отправить выбранный текст песни на защищённый сервер для анализа Gemini. ", -1)]])) : W("", !0),
			H("div", xF, [H("button", {
				type: "button",
				class: "btn primary",
				"data-action": "vt-generate",
				disabled: n.value.busy
			}, "✨ Создать предпросмотр", 8, SF), t[8] ||= H("span", { class: "sb-vt-note" }, "Никакого автоматического применения к Lyrics.", -1)]),
			H("div", {
				id: "sb-vt-notice",
				class: E(["sb-vt-notice", n.value.notice?.kind]),
				role: "status",
				"aria-live": "polite"
			}, D(n.value.notice?.text), 3),
			H("div", CF, [a.value ? (B(), V("div", wF, [
				H("div", TF, [H("h4", null, "Предпросмотр · " + D(a.value.sections.length) + " секций", 1), H("span", EF, D(a.value.method), 1)]),
				t[10] ||= H("p", { class: "sb-vt-small" }, " Проверь каждую секцию. Теги можно выбрать из списка или переписать вручную. Оригинальные строки песни остаются неизменными. ", -1),
				H("div", DF, [(B(!0), V(z, null, R(a.value.sections, (e, t) => (B(), V("div", {
					key: e.id,
					class: "sb-vt-section"
				}, [H("div", OF, [H("strong", null, D(e.label), 1), H("span", null, D(t + 1) + "/" + D(a.value.sections.length), 1)]), H("div", kF, [H("select", {
					"data-vt-preset": t,
					value: a.value.tags[t],
					"aria-label": "Готовые теги для " + e.label
				}, [(B(!0), V(z, null, R(n.value.presets, ([e, t]) => (B(), V("option", {
					key: e,
					value: e
				}, D(t), 9, jF))), 128))], 8, AF), H("input", {
					"data-vt-cue": t,
					value: a.value.tags[t],
					maxlength: "165",
					placeholder: "Например: Warm Emotional Vocals",
					"aria-label": "Тег исполнения " + e.label
				}, null, 8, MF)])]))), 128))]),
				H("div", NF, [t[9] ||= H("label", { for: "sb-vt-preview" }, " Готовый Lyrics — разрешено редактировать только инструкции, не слова песни ", -1), H("textarea", {
					id: "sb-vt-preview",
					spellcheck: "false",
					rows: "13",
					maxlength: "25000",
					value: a.value.preview
				}, null, 8, PF)]),
				H("p", FF, D(n.value.previewState), 1),
				t[11] ||= fa("<div class=\"sb-vt-draft-actions\"><button type=\"button\" class=\"btn primary\" data-action=\"vt-apply\"> ✓ Применить к Lyrics </button><button type=\"button\" class=\"btn ghost\" data-action=\"vt-copy\"> Копировать предпросмотр </button><button type=\"button\" class=\"btn ghost\" data-action=\"vt-refresh\"> Обновить предпросмотр </button><button type=\"button\" class=\"btn ghost\" data-action=\"vt-cancel\"> Отменить </button></div>", 1)
			])) : W("", !0)])
		], 64));
	}
};
// src/vue/poetry/legacyTagsBridge.js
function LF({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_TAGS, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Y({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vt-workbench"),
		readSnapshot: () => t.snapshot(),
		mount: (n) => e(n, IF, { api: t })
	});
}
// src/vue/entry.js
var RF = Pd(), zF = Q(RF);
function BF(e) {
	return typeof document > "u" ? null : typeof e == "string" ? document.querySelector(e) : e;
}
var { mountVueFeature: $, unmountVueFeature: VF } = hd({
	createApp: Yo,
	host: sE,
	pinia: RF,
	router: Zp,
	resolveTarget: BF
});
function HF() {
	return oE({ sharedUi: zF });
}
function UF() {
	return CE({
		mountVueFeature: $,
		unmountVueFeature: VF,
		sharedUi: zF
	});
}
function WF() {
	return IE({ mountVueFeature: $ });
}
function GF() {
	return HD({ mountVueFeature: $ });
}
function KF() {
	return dA({ mountVueFeature: $ });
}
function qF() {
	return tj({ mountVueFeature: $ });
}
function JF() {
	return Xj({ mountVueFeature: $ });
}
function YF() {
	return SM({ mountVueFeature: $ });
}
function XF() {
	return kP({ mountVueFeature: $ });
}
function ZF() {
	return $P({ mountVueFeature: $ });
}
function QF() {
	return LF({ mountVueFeature: $ });
}
function $F() {
	return aE({ mountVueFeature: $ });
}
function eI() {
	return Fh({ mountVueFeature: $ });
}
function tI() {
	return E_({ mountVueFeature: $ });
}
function nI() {
	return v_({ mountVueFeature: $ });
}
function rI() {
	return hv({ mountVueFeature: $ });
}
function iI() {
	return kv({ mountVueFeature: $ });
}
function aI() {
	return Ty({ mountVueFeature: $ });
}
function oI() {
	return sb({ mountVueFeature: $ });
}
function sI() {
	return hb({ mountVueFeature: $ });
}
function cI() {
	return Hb({ mountVueFeature: $ });
}
function lI() {
	return gx({ mountVueFeature: $ });
}
function uI() {
	return Rx({ mountVueFeature: $ });
}
function dI() {
	return wS({ mountVueFeature: $ });
}
function fI() {
	return bC({ mountVueFeature: $ });
}
function pI() {
	return OC({ mountVueFeature: $ });
}
function mI() {
	return mw({ mountVueFeature: $ });
}
function hI() {
	return Sw({ mountVueFeature: $ });
}
function gI() {
	return Qw({ mountVueFeature: $ });
}
function _I() {
	return DT({ mountVueFeature: $ });
}
function vI() {
	return bg({ mountVueFeature: $ });
}
function yI() {
	return r_({
		mountVueFeature: $,
		sharedUi: zF
	});
}
function bI() {
	return jO({ mountVueFeature: $ });
}
function xI() {
	return md({ mountVueFeature: $ });
}
function SI() {
	return cd({ mountVueFeature: $ });
}
function CI() {
	return td({ mountVueFeature: $ });
}
function wI() {
	return Wu({ mountVueFeature: $ });
}
function TI() {
	return ju({ mountVueFeature: $ });
}
function EI() {
	return Su({ mountVueFeature: $ });
}
function DI() {
	return hu({ mountVueFeature: $ });
}
function OI() {
	return du({ mountVueFeature: $ });
}
function kI() {
	return uu({ mountVueFeature: $ });
}
function AI() {
	return Ul({ mountVueFeature: $ });
}
function jI() {
	return ol({ mountVueFeature: $ });
}
function MI() {
	return Gc({ mountVueFeature: $ });
}
function NI() {
	return bc({ mountVueFeature: $ });
}
function PI() {
	return ps({
		mountVueFeature: $,
		sharedUi: zF,
		activations: [
			bc,
			ol,
			Ul,
			uu,
			hu,
			Su,
			ju,
			Wu,
			td,
			cd,
			md,
			Fh,
			r_,
			v_,
			E_,
			hv,
			kv,
			Ty,
			sb,
			hb,
			Hb,
			gx,
			Rx,
			wS,
			bC,
			OC,
			mw,
			Sw,
			Qw,
			DT,
			aE,
			HD,
			jO,
			dA,
			tj,
			Xj,
			SM,
			kP,
			$P,
			LF
		]
	});
}
export { $ as mountVueFeature, GF as startLegacyAcademy, kI as startLegacyAccountHome, uI as startLegacyAccountSettings, OI as startLegacyAccountSummary, HF as startLegacyAppearance, XF as startLegacyArranger, cI as startLegacyArtistDNA, lI as startLegacyArtistDNAEditor, sI as startLegacyArtistManager, MI as startLegacyArtistProfiles, YF as startLegacyAuditor, DI as startLegacyEventActions, wI as startLegacyEventCollection, TI as startLegacyEventEditor, EI as startLegacyEventReminders, KF as startLegacyGenreDetail, bI as startLegacyGenreTree, yI as startLegacyHomeDashboard, eI as startLegacyIdeaCollections, $F as startLegacyIdeaEditor, AI as startLegacyIdeasPage, rI as startLegacyLibrary, JF as startLegacyMixer, UF as startLegacyNavigation, PI as startLegacyPages, fI as startLegacyPlayerAB, dI as startLegacyPlayerLab, ZF as startLegacyPoetry, mI as startLegacyProducerSongDetail, pI as startLegacyProducerSongList, xI as startLegacyProjectCollection, SI as startLegacyProjectCreator, CI as startLegacyProjectDetail, nI as startLegacyPromptCollection, tI as startLegacyPromptEditor, jI as startLegacySharedSong, iI as startLegacySongCards, aI as startLegacySongDetail, oI as startLegacySongEditor, qF as startLegacyStudio, QF as startLegacyTags, WF as startLegacyTopHeader, gI as startLegacyTrackPassportDetail, _I as startLegacyTrackPassportEditor, hI as startLegacyTrackPassportList, vI as startLegacyVersionHistory, NI as startLegacyWorkspace, VF as unmountVueFeature };
