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
function Me(e, t = !1) {
	k && (k.active ? k.cleanups.push(e) : e());
}
var A, Ne = /* @__PURE__ */ new WeakSet(), Pe = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, k && (k.active ? k.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Ne.has(this) && (Ne.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Re(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, Ze(this), Ve(this);
		let e = A, t = qe;
		A = this, qe = !0;
		try {
			return this.fn();
		} finally {
			He(this), A = e, qe = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) Ge(e);
			this.deps = this.depsTail = void 0, Ze(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Ne.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		Ue(this) && this.run();
	}
	get dirty() {
		return Ue(this);
	}
}, Fe = 0, Ie, Le;
function Re(e, t = !1) {
	e.flags |= 8, t ? (e.next = Le, Le = e) : (e.next = Ie, Ie = e);
}
function ze() {
	Fe++;
}
function Be() {
	if (--Fe > 0) return;
	if (Le) {
		let e = Le;
		for (Le = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Ie;) {
		let t = Ie;
		for (Ie = void 0; t;) {
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
function Ve(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function He(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), Ge(r), Ke(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function Ue(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (We(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function We(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Qe) || (e.globalVersion = Qe, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ue(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = A, r = qe;
	A = e, qe = !0;
	try {
		Ve(e);
		let n = e.fn(e._value);
		(t.version === 0 || w(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		A = n, qe = r, He(e), e.flags &= -3;
	}
}
function Ge(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) Ge(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ke(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var qe = !0, Je = [];
function Ye() {
	Je.push(qe), qe = !1;
}
function Xe() {
	let e = Je.pop();
	qe = e === void 0 || e;
}
function Ze(e) {
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
var Qe = 0, $e = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, et = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!A || !qe || A === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== A) t = this.activeLink = new $e(A, this), A.deps ? (t.prevDep = A.depsTail, A.depsTail.nextDep = t, A.depsTail = t) : A.deps = A.depsTail = t, tt(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = A.depsTail, t.nextDep = void 0, A.depsTail.nextDep = t, A.depsTail = t, A.deps === t && (A.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, Qe++, this.notify(e);
	}
	notify(e) {
		ze();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Be();
		}
	}
};
function tt(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) tt(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var nt = /* @__PURE__ */ new WeakMap(), rt = /* @__PURE__ */ Symbol(""), it = /* @__PURE__ */ Symbol(""), at = /* @__PURE__ */ Symbol("");
function ot(e, t, n) {
	if (qe && A) {
		let t = nt.get(e);
		t || nt.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new et()), r.map = t, r.key = n), r.track();
	}
}
function st(e, t, n, r, i, a) {
	let o = nt.get(e);
	if (!o) {
		Qe++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (ze(), t === "clear") o.forEach(s);
	else {
		let i = d(e), a = i && te(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === at || !_(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(at)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(rt)), f(e) && s(o.get(it)));
				break;
			case "delete":
				i || (s(o.get(rt)), f(e) && s(o.get(it)));
				break;
			case "set": f(e) && s(o.get(rt));
		}
	}
	Be();
}
function ct(e, t) {
	let n = nt.get(e);
	return n && n.get(t);
}
function lt(e) {
	let t = /* @__PURE__ */ M(e);
	return t === e || (ot(t, "iterate", at), /* @__PURE__ */ Jt(e)) ? t : /* @__PURE__ */ qt(e) ? /* @__PURE__ */ Kt(e) ? t.map((e) => Qt(Zt(e))) : t.map(Qt) : t.map(Zt);
}
function ut(e) {
	return ot(e = /* @__PURE__ */ M(e), "iterate", at), e;
}
function dt(e, t) {
	return /* @__PURE__ */ qt(e) ? Qt(/* @__PURE__ */ Kt(e) ? Zt(t) : t) : Zt(t);
}
var ft = {
	__proto__: null,
	[Symbol.iterator]() {
		return pt(this, Symbol.iterator, (e) => dt(this, e));
	},
	concat(...e) {
		return lt(this).concat(...e.map((e) => d(e) ? lt(e) : e));
	},
	entries() {
		return pt(this, "entries", (e) => (e[1] = dt(this, e[1]), e));
	},
	every(e, t) {
		return gt(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return gt(this, "filter", e, t, (e) => e.map((e) => dt(this, e)), arguments);
	},
	find(e, t) {
		return gt(this, "find", e, t, (e) => dt(this, e), arguments);
	},
	findIndex(e, t) {
		return gt(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return gt(this, "findLast", e, t, (e) => dt(this, e), arguments);
	},
	findLastIndex(e, t) {
		return gt(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return gt(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return vt(this, "includes", e);
	},
	indexOf(...e) {
		return vt(this, "indexOf", e);
	},
	join(e) {
		return lt(this).join(e);
	},
	lastIndexOf(...e) {
		return vt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return gt(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return yt(this, "pop");
	},
	push(...e) {
		return yt(this, "push", e);
	},
	reduce(e, ...t) {
		return _t(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return _t(this, "reduceRight", e, t);
	},
	shift() {
		return yt(this, "shift");
	},
	some(e, t) {
		return gt(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return yt(this, "splice", e);
	},
	toReversed() {
		return lt(this).toReversed();
	},
	toSorted(e) {
		return lt(this).toSorted(e);
	},
	toSpliced(...e) {
		return lt(this).toSpliced(...e);
	},
	unshift(...e) {
		return yt(this, "unshift", e);
	},
	values() {
		return pt(this, "values", (e) => dt(this, e));
	}
};
function pt(e, t, n) {
	let r = ut(e), i = r[t], a = i.call(r);
	if (r !== e && !/* @__PURE__ */ Jt(e)) {
		if (a[Symbol.toStringTag] === "Array Iterator") {
			let e = Object.create(Object.getPrototypeOf(a));
			return e.next = () => mt(a.next(), n), i !== ht[t] && Object.defineProperties(e, {
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
		a._next = a.next, a.next = () => mt(a._next(), n);
	}
	return a;
}
function mt(e, t) {
	return e.done || (e.value = t(e.value)), e;
}
var ht = Array.prototype;
function gt(e, t, n, r, i, a) {
	let o = ut(e), s = o !== e && !/* @__PURE__ */ Jt(e), c = o[t];
	if (c !== ht[t]) {
		let t = c.apply(e, a);
		return s ? Zt(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, dt(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function _t(e, t, n, r) {
	let i = ut(e), a = i !== e && !/* @__PURE__ */ Jt(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = dt(e, t)), n.call(this, t, dt(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? dt(e, c) : c;
}
function vt(e, t, n) {
	let r = /* @__PURE__ */ M(e);
	ot(r, "iterate", at);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Yt(n[0]) ? (n[0] = /* @__PURE__ */ M(n[0]), r[t](...n)) : i;
}
function yt(e, t, n = []) {
	Ye(), ze();
	let r = (/* @__PURE__ */ M(e))[t].apply(e, n);
	return Be(), Xe(), r;
}
var bt = /* @__PURE__ */ e("__proto__,__v_isRef,__isVue"), xt = /* @__PURE__ */ new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_));
function St(e) {
	_(e) || (e = String(e));
	let t = /* @__PURE__ */ M(this);
	return ot(t, "has", e), t.hasOwnProperty(e);
}
var Ct = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Vt : Bt : i ? zt : Rt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = d(e);
		if (!r) {
			let e;
			if (a && (e = ft[t])) return e;
			if (t === "hasOwnProperty") return St;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ N(e) ? e : n);
		if ((_(t) ? xt.has(t) : bt(t)) || (r || ot(e, "get", t), i)) return o;
		if (/* @__PURE__ */ N(o)) {
			let e = a && te(t) ? o : o.value;
			return r && v(e) ? /* @__PURE__ */ Wt(e) : e;
		}
		return v(o) ? r ? /* @__PURE__ */ Wt(o) : /* @__PURE__ */ j(o) : o;
	}
}, wt = class extends Ct {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = d(e) && te(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ qt(i);
			if (!/* @__PURE__ */ Jt(n) && !/* @__PURE__ */ qt(n) && (i = /* @__PURE__ */ M(i), n = /* @__PURE__ */ M(n)), !a && /* @__PURE__ */ N(i) && !/* @__PURE__ */ N(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : u(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ N(e) ? e : r);
		return e === /* @__PURE__ */ M(r) && s && (o ? w(n, i) && st(e, "set", t, n, i) : st(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = u(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && st(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return _(t) && xt.has(t) || ot(e, "has", t), n;
	}
	ownKeys(e) {
		return ot(e, "iterate", d(e) ? "length" : rt), Reflect.ownKeys(e);
	}
}, Tt = class extends Ct {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, Et = /* @__PURE__ */ new wt(), Dt = /* @__PURE__ */ new Tt(), Ot = /* @__PURE__ */ new wt(!0), kt = (e) => e, At = (e) => Reflect.getPrototypeOf(e);
function jt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ M(i), o = f(a), c = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = i[e](...r), d = n ? kt : t ? Qt : Zt;
		return !t && ot(a, "iterate", l ? it : rt), s(Object.create(u), { next() {
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
function Mt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function Nt(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ M(r), a = /* @__PURE__ */ M(n);
			e || (w(n, a) && ot(i, "get", n), ot(i, "get", a));
			let { has: o } = At(i), s = t ? kt : e ? Qt : Zt;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && ot(/* @__PURE__ */ M(t), "iterate", rt), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ M(n), i = /* @__PURE__ */ M(t);
			return e || (w(t, i) && ot(r, "has", t), ot(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ M(a), s = t ? kt : e ? Qt : Zt;
			return !e && ot(o, "iterate", rt), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return s(n, e ? {
		add: Mt("add"),
		set: Mt("set"),
		delete: Mt("delete"),
		clear: Mt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ M(this), r = At(n), i = /* @__PURE__ */ M(e), a = !t && !/* @__PURE__ */ Jt(e) && !/* @__PURE__ */ qt(e) ? i : e;
			return r.has.call(n, a) || w(e, a) && r.has.call(n, e) || w(i, a) && r.has.call(n, i) || (n.add(a), st(n, "add", a, a)), this;
		},
		set(e, n) {
			t || /* @__PURE__ */ Jt(n) || /* @__PURE__ */ qt(n) || (n = /* @__PURE__ */ M(n));
			let r = /* @__PURE__ */ M(this), { has: i, get: a } = At(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ M(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? w(n, s) && st(r, "set", e, n, s) : st(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ M(this), { has: n, get: r } = At(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ M(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && st(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ M(this), t = e.size !== 0, n = e.clear();
			return t && st(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = jt(r, e, t);
	}), n;
}
function Pt(e, t) {
	let n = Nt(e, t);
	return (r, i, a) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_isShallow" ? t : i === "__v_raw" ? r : Reflect.get(u(n, i) && i in r ? n : r, i, a);
}
var Ft = { get: /* @__PURE__ */ Pt(!1, !1) }, It = { get: /* @__PURE__ */ Pt(!1, !0) }, Lt = { get: /* @__PURE__ */ Pt(!0, !1) }, Rt = /* @__PURE__ */ new WeakMap(), zt = /* @__PURE__ */ new WeakMap(), Bt = /* @__PURE__ */ new WeakMap(), Vt = /* @__PURE__ */ new WeakMap();
function Ht(e) {
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
function j(e) {
	return /* @__PURE__ */ qt(e) ? e : Gt(e, !1, Et, Ft, Rt);
}
// @__NO_SIDE_EFFECTS__
function Ut(e) {
	return Gt(e, !1, Ot, It, zt);
}
// @__NO_SIDE_EFFECTS__
function Wt(e) {
	return Gt(e, !0, Dt, Lt, Bt);
}
function Gt(e, t, n, r, i) {
	if (!v(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Ht(ee(e));
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
	return !u(e, "__v_skip") && Object.isExtensible(e) && T(e, "__v_skip", !0), e;
}
var Zt = (e) => v(e) ? /* @__PURE__ */ j(e) : e, Qt = (e) => v(e) ? /* @__PURE__ */ Wt(e) : e;
// @__NO_SIDE_EFFECTS__
function N(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function P(e) {
	return en(e, !1);
}
// @__NO_SIDE_EFFECTS__
function $t(e) {
	return en(e, !0);
}
function en(e, t) {
	return /* @__PURE__ */ N(e) ? e : new tn(e, t);
}
var tn = class {
	constructor(e, t) {
		this.dep = new et(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ M(e), this._value = t ? e : Zt(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Jt(e) || /* @__PURE__ */ qt(e);
		e = n ? e : /* @__PURE__ */ M(e), w(e, t) && (this._rawValue = e, this._value = n ? e : Zt(e), this.dep.trigger());
	}
};
function F(e) {
	return /* @__PURE__ */ N(e) ? e.value : e;
}
var nn = {
	get: (e, t, n) => t === "__v_raw" ? e : F(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ N(i) && !/* @__PURE__ */ N(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function rn(e) {
	return /* @__PURE__ */ Kt(e) ? e : new Proxy(e, nn);
}
// @__NO_SIDE_EFFECTS__
function an(e) {
	let t = d(e) ? Array(e.length) : {};
	for (let n in e) t[n] = sn(e, n);
	return t;
}
var on = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = _(t) ? t : String(t), this._raw = /* @__PURE__ */ M(e);
		let r = !0, i = e;
		if (!d(e) || _(this._key) || !te(this._key)) do
			r = !/* @__PURE__ */ Yt(i) || /* @__PURE__ */ Jt(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = F(e)), this._value = e === void 0 ? this._defaultValue : e;
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
		return ct(this._raw, this._key);
	}
};
function sn(e, t, n) {
	return new on(e, t, n);
}
var cn = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new et(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Qe - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && A !== this) return Re(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return We(this), e && (e.version = this.dep.version), this._value;
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
	let { immediate: a, deep: o, once: s, scheduler: l, augmentJob: u, call: f } = i, p = (e) => o ? e : /* @__PURE__ */ Jt(e) || o === !1 || o === 0 ? hn(e, 1) : hn(e), m, g, _, v, y = !1, b = !1;
	if (/* @__PURE__ */ N(e) ? (g = () => e.value, y = /* @__PURE__ */ Jt(e)) : /* @__PURE__ */ Kt(e) ? (g = () => p(e), y = !0) : d(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ Kt(e) || /* @__PURE__ */ Jt(e)), g = () => e.map((e) => {
		if (/* @__PURE__ */ N(e)) return e.value;
		if (/* @__PURE__ */ Kt(e)) return p(e);
		if (h(e)) return f ? f(e, 2) : e();
	})) : g = h(e) ? n ? f ? () => f(e, 2) : e : () => {
		if (_) {
			Ye();
			try {
				_();
			} finally {
				Xe();
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
	let S = b ? Array(e.length).fill(un) : un, te = (e) => {
		if (m.flags & 1 && (m.dirty || e)) {
			if (n) {
				let t = m.run();
				if (e || o || y || (b ? t.some((e, t) => w(e, S[t])) : w(t, S))) {
					let e = fn;
					Ye();
					try {
						_ && _(), fn = m;
						let e = [
							t,
							S === un ? void 0 : b && S[0] === un ? [] : S,
							v
						];
						S = t, f ? f(n, 3, e) : n(...e);
					} finally {
						fn = e, Xe();
					}
				}
			} else m.run();
		}
	};
	return u && u(te), m = new Pe(g), m.scheduler = l ? () => l(te, !1) : te, v = (e) => pn(e, !1, m), _ = m.onStop = () => {
		let e = dn.get(m);
		if (e) {
			if (f) f(e, 4);
			else for (let t of e) t();
			dn.delete(m);
		}
	}, n ? a ? te(!0) : S = m.run() : l ? l(te.bind(null, !0), !0) : m.run(), ee.pause = m.pause.bind(m), ee.resume = m.resume.bind(m), ee.stop = ee, ee;
}
function hn(e, t = Infinity, n) {
	if (t <= 0 || !v(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ N(e)) hn(e.value, t, n);
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
			Ye(), gn(s, null, 10, [
				e,
				i,
				o
			]), Xe();
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
		r._d && ta(-1);
		let i = Bn(t), a = Zi.length, o;
		try {
			o = e(...n);
		} finally {
			for (let e = Zi.length; e > a; e--) $i();
			Bn(i), r._d && ta(1);
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
		u && (Ye(), _n(u, n, 8, [
			e.el,
			l,
			i,
			t
		]), Xe());
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
	if (r || ni) {
		let i = ni ? ni._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && h(t) ? t.call(r && r.proxy) : t;
	}
}
function Gn() {
	return !!(Sa() || ni);
}
var Kn = /* @__PURE__ */ Symbol.for("v-scx"), qn = () => Wn(Kn);
function Jn(e, t, n) {
	return Yn(e, t, n);
}
function Yn(e, n, i = t) {
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
		e.i = p, Pi(e, p && p.suspense);
	} : c !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : kn(e);
	}), u.augmentJob = (e) => {
		n && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = mn(e, n, u);
	return Oa && (f ? f.push(h) : d && h()), h;
}
function Xn(e, t, n) {
	let r = this.proxy, i = g(e) ? e.includes(".") ? Zn(r, e) : () => r[e] : e.bind(r, r), a;
	h(t) ? a = t : (a = t.handler, n = t);
	let o = Ta(this), s = Yn(i, a.bind(r), n);
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
	let s = a.shapeFlag & 4 ? Ia(a.component) : a.el, l = o ? null : s, { i: f, r: p } = e, m = n && n.r, _ = f.refs === t ? f.refs = {} : f.refs, v = f.setupState, y = /* @__PURE__ */ M(v), b = v === t ? i : (e) => !sr(_, e) && u(y, e), x = (e, t) => !(t && sr(_, t));
	if (m != null && m !== p) {
		if (ur(n), g(m)) _[m] = null, b(m) && (v[m] = null);
		else if (/* @__PURE__ */ N(m)) {
			let e = n;
			x(m, e.k) && (m.value = null), e.k && (_[e.k] = null);
		}
	}
	if (h(p)) gn(p, f, 12, [l, _]);
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
fe().requestIdleCallback, fe().cancelIdleCallback;
var dr = (e) => !!e.type.__asyncLoader, fr = (e) => e.type.__isKeepAlive;
function pr(e, t) {
	hr(e, "a", t);
}
function mr(e, t) {
	hr(e, "da", t);
}
function hr(e, t, n = xa) {
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
function _r(e, t, n = xa, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Ye();
			let i = Ta(n), a = _n(t, n, e, r);
			return i(), Xe(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var vr = (e) => (t, n = xa) => {
	Oa && e !== "sp" || _r(e, (...e) => t(...e), n);
}, yr = vr("bm"), L = vr("m"), br = vr("bu"), xr = vr("u"), Sr = vr("bum"), Cr = vr("um"), wr = vr("sp"), Tr = vr("rtg"), Er = vr("rtc");
function Dr(e, t = xa) {
	_r("ec", e, t);
}
var Or = "components", kr = /* @__PURE__ */ Symbol.for("v-ndc");
function Ar(e) {
	return g(e) ? jr(Or, e, !1) || e : e || kr;
}
function jr(e, t, n = !0, r = !1) {
	let i = Rn || xa;
	if (i) {
		let n = i.type;
		if (e === Or) {
			let e = La(n, !1);
			if (e && (e === t || e === C(t) || e === se(C(t)))) return n;
		}
		let a = Mr(i[e] || n[e], t) || Mr(i.appContext[e], t);
		return !a && r ? n : a;
	}
}
function Mr(e, t) {
	return e && (e[t] || e[C(t)] || e[se(C(t))]);
}
function R(e, t, n, r) {
	let i, a = n && n[r], o = d(e);
	if (o || g(e)) {
		let n = o && /* @__PURE__ */ Kt(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ Jt(e), s = /* @__PURE__ */ qt(e), e = ut(e)), i = Array(e.length);
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
var Nr = (e) => e ? Da(e) ? Ia(e) : Nr(e.parent) : null, Pr = /* @__PURE__ */ s(/* @__PURE__ */ Object.create(null), {
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
		kn(e.update);
	},
	$nextTick: (e) => e.n ||= Dn.bind(e.proxy),
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
		if (d) return n === "$attrs" && ot(e.attrs, "get", ""), d(e);
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
	let { data: a, computed: o, methods: s, watch: c, provide: l, inject: u, created: f, beforeMount: p, mounted: m, beforeUpdate: g, updated: _, activated: y, deactivated: b, beforeDestroy: x, beforeUnmount: ee, destroyed: S, unmounted: te, render: ne, renderTracked: re, renderTriggered: ie, errorCaptured: C, serverPrefetch: ae, expose: oe, inheritAttrs: se, components: ce, directives: w, filters: le } = t;
	if (u && Br(u, i, null), s) for (let e in s) {
		let t = s[e];
		h(t) && (i[e] = t.bind(n));
	}
	if (a) {
		let t = a.call(n, n);
		v(t) && (e.data = /* @__PURE__ */ j(t));
	}
	if (Rr = !0, o) for (let e in o) {
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
	if (c) for (let e in c) Hr(c[e], i, n, e);
	if (l) {
		let e = h(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Un(t, e[t]);
		});
	}
	f && Vr(f, e, "c");
	function T(e, t) {
		d(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (T(yr, p), T(L, m), T(br, g), T(xr, _), T(pr, y), T(mr, b), T(Dr, C), T(Er, re), T(Tr, ie), T(Sr, ee), T(Cr, te), T(wr, ae), d(oe)) {
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
	ne && e.render === r && (e.render = ne), se != null && (e.inheritAttrs = se), ce && (e.components = ce), w && (e.directives = w), ae && or(e);
}
function Br(e, t, n = r) {
	d(e) && (e = Jr(e));
	for (let n in e) {
		let r = e[n], i;
		i = v(r) ? "default" in r ? Wn(r.from || n, r.default, !0) : Wn(r.from || n) : Wn(r), /* @__PURE__ */ N(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Vr(e, t, n) {
	_n(d(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Hr(e, t, n, r) {
	let i = r.includes(".") ? Zn(n, r) : () => n[r];
	if (g(e)) {
		let n = t[e];
		h(n) && Jn(i, n);
	} else if (h(e)) Jn(i, e.bind(n));
	else if (v(e)) {
		if (d(e)) e.forEach((e) => Hr(e, t, n, r));
		else {
			let r = h(e.handler) ? e.handler.bind(n) : t[e.handler];
			h(r) && Jn(i, r, e);
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
					let u = l._ceVNode || U(n, r);
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
	s && (s.trim && (a = r.map((e) => g(e) ? e.trim() : e)), s.number && (a = a.map(ue)));
	let c, l = i[c = ce(n)] || i[c = ce(C(n))];
	!l && o && (l = i[c = ce(oe(n))]), l && _n(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, _n(u, e, 6, a);
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
			}) : e(f, null)), y = t.props ? c : ui(c);
		}
	} catch (t) {
		Zi.length = 0, vn(t, e, 1), v = U(Yi);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(o) && (y = di(y, a)), b = ua(b, y, !1, !0));
	}
	return n.dirs && (b = ua(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && rr($n(b.type) && nr(b) || b, n.transition), v = b, Bn(_), v;
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
	return n === "style" && v(r) && v(i) ? !we(r, i) : r !== i;
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
	e.props = n ? r ? i : /* @__PURE__ */ Ut(i) : e.type.props ? i : a, e.attrs = a;
}
function bi(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ M(i), [c] = e.propsOptions, l = !1;
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
	l && st(e.attrs, "set", "");
}
function xi(e, n, r, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (n) for (let t in n) {
		if (ne(t)) continue;
		let l = n[t], d;
		a && u(a, d = C(t)) ? !o || !o.includes(d) ? r[d] = l : (c ||= {})[d] = l : si(e.emitsOptions, t) || t in i && l === i[t] || (i[t] = l, s = !0);
	}
	if (o) {
		let n = /* @__PURE__ */ M(r), i = c || t;
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
					let o = Ta(i);
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
var Ei = (e) => e === "_" || e === "_ctx" || e === "$stable", Di = (e) => d(e) ? e.map(fa) : [fa(e)], Oi = (e, t, n) => {
	if (t._n) return t;
	let r = Vn((...e) => Di(t(...e)), n);
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
		e ? (ji(r, t, n), n && T(r, "_", e, !0)) : ki(t, r);
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
	let a = fe();
	a.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = r, insertStaticContent: _ } = e, v = (e, t, r, i = null, a = null, o = null, s = void 0, c = null, l = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !aa(e, t) && (i = xe(e), D(e, a, o, !0), e = null), t.patchFlag === -2 && (l = !1, t.dynamicChildren = null), t.dynamicChildren && e && e.dynamicChildren && e.dynamicChildren.hasOnce && (t.dynamicChildren === n && (t.dynamicChildren = []), t.dynamicChildren.hasOnce = !0);
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
				ce(e, t, r, i, a, o, s, c, l);
				break;
			default: f & 1 ? te(e, t, r, i, a, o, s, c, l) : f & 6 ? w(e, t, r, i, a, o, s, c, l) : (f & 64 || f & 128) && u.process(e, t, r, i, a, o, s, c, l, Ce);
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
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && C(e.children, d, null, r, i, Li(e, a), s, u), _ && Hn(e, null, r, "created"), ie(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !ne(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && ga(f, r, e);
		}
		_ && Hn(e, null, r, "beforeMount");
		let v = zi(i, g);
		v ? g.beforeEnter(d) : g && !g.persisted && (d[Ki] = !0), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && Pi(() => {
			try {
				f && ga(f, r, e), v && g.enter(d), _ && Hn(e, null, r, "mounted");
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
			let c = e[l] = s ? pa(e[l]) : fa(e[l]);
			v(null, c, t, n, r, i, a, o, s);
		}
	}, ae = (e, n, r, i, a, o, s) => {
		let l = n.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = n;
		u |= e.patchFlag & 16;
		let m = e.props || t, h = n.props || t, g;
		if (r && Ri(r, !1), (g = h.onVnodeBeforeUpdate) && ga(g, r, n, e), f && Hn(n, e, r, "beforeUpdate"), r && Ri(r, !0), d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length) && (u = 0, s = !1, d = null), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? oe(e.dynamicChildren, d, l, r, i, Li(n, a), o) : s || pe(e, n, l, null, r, i, Li(n, a), o, !1), u > 0) {
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
		((g = h.onVnodeUpdated) || f) && Pi(() => {
			g && ga(g, r, n, e), f && Hn(n, e, r, "updated");
		}, i);
	}, oe = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el || Wi(c), d = u && (c.type === z || !aa(c, l) || c.shapeFlag & 198) ? m(u) : n;
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
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), C(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (oe(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && Bi(e, t, !0)) : pe(e, t, n, f, i, a, s, c, l);
	}, w = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : T(t, n, r, i, a, o, c) : ue(e, t, c);
	}, T = (e, t, n, r, i, a, o) => {
		let s = e.component = ba(e, r, i);
		if (fr(e) && (s.ctx.renderer = Ce), ka(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, de, o, a), !e.el) {
				let r = s.subTree = U(Yi);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else de(s, e, t, n, i, a, o);
	}, ue = (e, t, n) => {
		let r = t.component = e.component;
		if (fi(e, t, n)) {
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
					let n = Hi(e);
					if (n) {
						t && (t.el = c.el, E(e, t, o)), n.asyncDep.then(() => {
							let t = () => {
								e.job.flags & 8 || (i && i.pendingBranch ? Pi(t, i) : l());
							};
							t.flags = 48, Pi(t, i);
						});
						return;
					}
				}
				let u = t, d;
				Ri(e, !1), t ? (t.el = c.el, E(e, t, o)) : t = c, n && le(n), (d = t.props && t.props.onVnodeBeforeUpdate) && ga(d, s, t, c), Ri(e, !0);
				let f = ci(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el || Wi(p)), xe(p), e, i, a), t.el = f.el, u === null && hi(e, f.el), r && Pi(r, i), (d = t.props && t.props.onVnodeUpdated) && Pi(() => ga(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = dr(t);
				if (Ri(e, !1), l && le(l), !m && (o = c && c.onVnodeBeforeMount) && ga(o, d, t), Ri(e, !0), s && Te) {
					let t = () => {
						e.subTree = ci(e), Te(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = ci(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && Pi(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					Pi(() => ga(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && dr(d.vnode) && d.vnode.shapeFlag & 256) && e.a && Pi(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Pe(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => kn(u), Ri(e, !0), l();
	}, E = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, bi(e, t.props, r, n), Ni(e, t.children, n), Ye(), Mn(e), Xe();
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
			let n = t[p] = l ? pa(t[p]) : fa(t[p]);
			v(e[p], n, r, null, a, o, s, c, l);
		}
		u > d ? be(e, a, o, !0, !1, f) : C(t, r, i, a, o, s, c, l, f);
	}, he = (e, t, r, i, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let n = e[u], i = t[u] = l ? pa(t[u]) : fa(t[u]);
			if (aa(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let n = e[f], i = t[p] = l ? pa(t[p]) : fa(t[p]);
			if (aa(n, i)) v(n, i, r, null, a, o, s, c, l);
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
				else for (_ = h; _ <= p; _++) if (S[_ - h] === 0 && aa(n, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? D(n, a, o, !0) : (S[i - h] = u + 1, i >= ee ? ee = i : x = !0, v(n, t[i], r, null, a, o, s, c, l), y++);
			}
			let te = x ? Vi(S) : n;
			for (_ = te.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, n = t[e], f = t[e + 1], p = e + 1 < d ? f.el || Wi(f) : i;
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
	}, D = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if ((d === -2 || l && l.hasOnce) && (i = !1), s != null && (Ye(), lr(s, null, n, e, !0), Xe()), p == null || e.ctx && e.ctx !== t || (t.renderCache[p] = void 0), u & 256 && t.ctx.deactivate(e)) return;
		let h = u & 1 && f, g = !dr(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && ga(_, t, e), u & 6) ye(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Hn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, Ce, r) : l && !l.hasOnce && (a !== z || d > 0 && d & 64) ? be(l, t, n, !1, !0) : (a === z && d & 384 || !i && u & 16) && be(c, t, n), r && _e(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && Pi(() => {
			_ && ga(_, t, e), h && Hn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, _e = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e, a = t === z;
		if (a && !i) {
			ve(n, r);
			return;
		}
		if (t === Xi) {
			S(e), i && !i.persisted && i.afterLeave && i.afterLeave();
			return;
		}
		let o = a ? ir(e) : e, c = () => {
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
		Ui(c), Ui(l), r && le(r), i.stop(), a ? (a.flags |= 8, D(o, e, t, n)) : o && (o.transition = e.vnode.transition, D(o, e, t, n)), s && Pi(s, t);
		let u = () => {
			e.isUnmounted = !0;
		};
		u.flags = 16, Pi(u, t);
	}, be = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) D(e[o], t, n, r, i);
	}, xe = (e) => {
		if (e.shapeFlag & 6) return xe(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Qn];
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
		createApp: ti(Se, we)
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
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = pa(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Bi(t, a)), a.type === Ji && (a.patchFlag === -1 && (a = i[e] = pa(a)), a.el = t.el), a.type === Yi && !a.el && (a.el = t.el);
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
	t && t.pendingBranch ? d(e) ? t.effects.push(...e) : t.effects.push(e) : jn(e);
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
	return na(U(e, t, n, r, i, !0));
}
function ia(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function aa(e, t) {
	return e.type === t.type && e.key === t.key;
}
var oa = ({ key: e }) => e ?? null, sa = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : g(e) || /* @__PURE__ */ N(e) || h(e) ? {
	i: Rn,
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
	return s ? (ma(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= g(n) ? 8 : 16), ea > 0 && !o && Qi && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && Qi.push(c), c;
}
var U = ca;
function ca(e, t = null, n = null, r = 0, i = null, a = !1) {
	if (e && e !== kr || (e = Yi), ia(e)) {
		let r = ua(e, t, !0);
		return n && ma(r, n), ea > 0 && !a && Qi && (r.shapeFlag & 6 ? Qi[Qi.indexOf(e)] = r : Qi.push(r)), r.patchFlag = -2, r;
	}
	if (Ra(e) && (e = e.__vccOpts), t) {
		t = la(t);
		let { class: e, style: n } = t;
		e && !g(e) && (t.class = D(e)), v(n) && (/* @__PURE__ */ Yt(n) && !d(n) && (n = s({}, n)), t.style = E(n));
	}
	let o = g(e) ? 1 : Gi(e) ? 128 : $n(e) ? 64 : v(e) ? 4 : h(e) ? 2 : 0;
	return H(e, t, n, r, i, o, a, !0);
}
function la(e) {
	return e ? /* @__PURE__ */ Yt(e) ? s({}, e) : vi(e) ? s({}, e[Na] || e) : e : null;
}
function ua(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? ha(i || {}, t) : i, u = {
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
		ssContent: e.ssContent && ua(e.ssContent),
		ssFallback: e.ssFallback && ua(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce,
		cacheIndex: e.cacheIndex
	};
	return c && r && rr(u, c.clone(u)), u;
}
function W(e = " ", t = 0) {
	return U(Ji, null, e, t);
}
function da(e, t) {
	let n = U(Xi, null, e);
	return n.staticCount = t, n;
}
function G(e = "", t = !1) {
	return t ? (B(), ra(Yi, null, e)) : U(Yi, null, e);
}
function fa(e) {
	return e == null || typeof e == "boolean" ? U(Yi) : d(e) ? U(z, null, e.slice()) : ia(e) ? pa(e) : U(Ji, null, String(e));
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
			!r && !vi(t) ? t._ctx = Rn : r === 3 && Rn && (Rn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
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
var _a = /* @__PURE__ */ $r(), va = 0;
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
	yi(e, r, a, t), Mi(e, i, n || t);
	let o = a ? Aa(e, t) : void 0;
	return t && wa(!1), o;
}
function Aa(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ir);
	let { setup: r } = n;
	if (r) {
		Ye();
		let n = e.setupContext = r.length > 1 ? Fa(e) : null, i = Ta(e), a = gn(r, e, 0, [e.props, n]), o = y(a);
		if (Xe(), i(), (o || e.sp) && !dr(e) && or(e), o) {
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
		Ye();
		try {
			zr(e);
		} finally {
			Xe(), t();
		}
	}
}
var Na = /* @__PURE__ */ Symbol(), Pa = { get(e, t) {
	return ot(e, "get", ""), t === Na ? e : e[t];
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
	return e.exposed ? e.exposeProxy ||= new Proxy(rn(Xt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Pr) return Pr[n](e);
		},
		has(e, t) {
			return t in e || t in Pr;
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
		ta(-1);
		let r = arguments.length;
		return r === 2 ? v(t) && !d(t) ? ia(t) ? U(e, null, [t]) : U(e, t) : U(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && ia(n) && (n = [n]), U(e, t, n));
	} finally {
		ta(1);
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
		io.test(n) ? e.setProperty(oe(r), n.replace(io, ""), "important") : e[r] = n;
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
	let r = C(t);
	if (r !== "filter" && r in e) return so[t] = r;
	r = se(r);
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
	return [e[2] === ":" ? e.slice(3) : oe(e.slice(2)), t];
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
	t === "class" ? Xa(e, r, c) : t === "style" ? ro(e, n, r) : a(t) ? o(t) || _o(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), 1) : t[0] === "^" ? (t = t.slice(1), 0) : Do(e, t, r, c)) ? (po(e, t, r), e.tagName.includes("-") || t !== "value" && t !== "checked" && t !== "selected" || fo(e, t, r, c, s, t !== "value")) : e._isVueCE && (Oo(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !g(r))) ? po(e, C(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), fo(e, t, r, c));
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
	let r = C(t);
	return Array.isArray(n) ? n.some((e) => C(e) === r) : Object.keys(n).some((e) => C(e) === r);
}
var ko = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return d(t) ? (e) => le(t, e) : t;
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
			let t = e._modelValue, n = zo(e), r = e.checked, i = e[Mo];
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
			} else i(Bo(e, r));
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
		i = we(t, Bo(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var J = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		e._modelValue = t, mo(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? ue(zo(e)) : zo(e)), r = e.multiple, i = r ? p(e._modelValue) ? new Set(t) : t : t[0], a = e._pendingValue = [r, r ? d(i) ? t.slice() : t : i];
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
		Ro(e, t, n);
	},
	beforeUpdate(e, { value: t }, n) {
		e._modelValue = t, e[Mo] = ko(n);
	},
	updated(e, { value: t, modifiers: { number: n } }) {
		let r = e._pendingValue;
		e._pendingValue = void 0, r && r[0] === e.multiple && Lo(t, r[1], r[0]) || Ro(e, t, n);
	}
};
function Lo(e, t, n) {
	if (!n || d(e)) return we(e, t);
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
					o.selected = e === "string" || e === "number" ? t.some((e) => String(e) === String(s)) : Te(t, s) > -1;
				} else o.selected = t.has(s) || n && typeof s == "string" && t.has(ue(s));
			} else if (we(zo(o), t)) {
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
		let r = oe(n.key);
		if (t.some((e) => e === r || Wo[e] === r)) return e(n);
	}));
}, Ko = /* @__PURE__ */ s({ patchProp: Eo }, Ja), qo;
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
// src/vue/poetry/IdeaCollections.vue
var Qo = { class: "section-title" }, $o = {
	key: 0,
	class: "btn ghost small",
	"data-action": "nav",
	"data-nav": "ideas"
}, es = ["data-idea-collection"], ts = { class: "idea-badge" }, ns = {
	key: 0,
	class: "generator-story"
}, rs = {
	key: 1,
	class: "song-has-lyrics"
}, is = { key: 0 }, as = {
	key: 3,
	class: "generator-detail"
}, os = { class: "actions" }, ss = [
	"data-action",
	"data-id",
	"data-i",
	"aria-label"
], cs = ["innerHTML"], ls = {
	key: 1,
	class: "empty"
}, us = ["innerHTML"], ds = {
	__name: "IdeaCollections",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (B(!0), V(z, null, R(e.model.groups, (t) => (B(), V(z, { key: t.kind }, [H("div", Qo, [H("h2", null, O(t.title) + " (" + O(t.items.length) + ")", 1), t.kind === "generated" ? (B(), V("button", $o, "Создать идеи →")) : G("", !0)]), t.items.length ? (B(), V("div", {
			key: 0,
			class: "idea-grid",
			"data-idea-collection": t.kind
		}, [(B(!0), V(z, null, R(t.items, (n) => (B(), ra(Ar(t.kind === "academy" ? "div" : "article"), {
			key: n.key,
			class: D(["idea", { "generated-card": t.kind === "generated" }])
		}, {
			default: Vn(() => [
				H("div", ts, O(n.badge), 1),
				H("h3", null, O(n.title), 1),
				H("p", null, O(n.pitch), 1),
				t.kind === "generated" ? (B(), V("p", ns, O(n.storyLine), 1)) : G("", !0),
				t.kind === "manual" && n.lyrics ? (B(), V("p", rs, "🎼 Текст песни сохранён · " + O(n.sunoLyrics ? "теги для Suno готовы" : "без разметки"), 1)) : G("", !0),
				n.hook || t.kind === "generated" ? (B(), ra(Ar(t.kind === "generated" ? "div" : "p"), {
					key: 2,
					class: "generator-hook"
				}, {
					default: Vn(() => [t.kind === "generated" ? (B(), V("span", is, "ХУК ПРИПЕВА")) : G("", !0), H("strong", null, O(n.hook), 1)]),
					_: 2
				}, 1024)) : G("", !0),
				t.kind === "generated" && n.detail ? (B(), V("p", as, "Твоя деталь: " + O(n.detail), 1)) : G("", !0),
				H("div", os, [(B(!0), V(z, null, R(n.actions, (t) => (B(), V("button", {
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
				}, null, 8, cs)) : G("", !0), W(O(t.text), 1)], 10, ss))), 128))])
			]),
			_: 2
		}, 1032, ["class"]))), 128))], 8, es)) : (B(), V("div", ls, [
			H("span", {
				"aria-hidden": "true",
				innerHTML: e.model.icons.music
			}, null, 8, us),
			H("strong", null, O(t.emptyTitle), 1),
			W(O(t.emptyText), 1)
		]))], 64))), 128));
	}
};
// src/vue/poetry/legacyIdeaCollectionsBridge.js
function fs({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_IDEA_COLLECTIONS, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-idea-collections");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, ds, { model: o });
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
function ps(e) {
	return /^\d{4}-\d{2}-\d{2}$/.test(String(e || "")) ? e.slice(8, 10) + "." + e.slice(5, 7) + "." + e.slice(0, 4) : "";
}
var ms = (e) => String(e ?? "").trim().normalize("NFKC").toLocaleLowerCase("ru"), hs = (e, t) => ms(e).includes(t);
function gs(e) {
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
function _s(e, { tab: t = "major", size: n = "all", search: r = "" } = {}) {
	let i = Array.isArray(e) ? e : [], a = gs(i), o = ms(r);
	if (o) {
		let e = a.filter((e) => o === "v" + e.major || o === e.major || hs("мажорная версия " + e.major, o)), t = i.filter((e) => hs("v" + e[0] + " " + e[0] + " " + e[1] + " " + ps(e[2]), o));
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
var vs = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, ys = {
	class: "sb-vh-vue-layout",
	"data-sb-vue-version-history": ""
}, bs = { class: "sb-vh-header" }, xs = [
	"aria-selected",
	"tabindex",
	"onClick"
], Ss = [
	"aria-selected",
	"tabindex",
	"onClick"
], Cs = {
	id: "sb-vh-legend",
	class: "sb-vh-legend"
}, ws = { class: "sb-vh-controls" }, Ts = {
	class: "sb-vh-search-label",
	for: "sb-vue-vh-search"
}, Es = {
	id: "sb-vh-subcount",
	class: "sb-vh-count",
	role: "status"
}, Ds = {
	key: 0,
	class: "sb-vh-search-all"
}, Os = {
	key: 0,
	class: "sb-vh-search-group"
}, ks = { class: "sb-vh-release-no" }, As = { class: "sb-vh-release-text" }, js = { class: "sb-vh-version-range" }, Ms = { class: "sb-vh-release-list" }, Ns = { class: "sb-vh-release-no" }, Ps = { class: "sb-vh-release-text" }, Fs = { class: "sb-vh-search-meta" }, Is = ["datetime"], Ls = { class: "sb-vh-search-tag" }, Rs = {
	key: 1,
	class: "sb-vh-empty"
}, zs = {
	key: 2,
	class: "sb-vh-release-list sb-vh-major-list"
}, Bs = { class: "sb-vh-release-no" }, Vs = { class: "sb-vh-release-text" }, Hs = { class: "sb-vh-version-range" }, Us = {
	key: 3,
	class: "sb-vh-release-list"
}, Ws = { class: "sb-vh-release-no" }, Gs = { class: "sb-vh-release-text" }, Ks = { class: "sb-vh-search-meta" }, qs = ["datetime"], Js = {
	key: 0,
	class: "sb-vh-search-tag"
}, Ys = {
	key: 4,
	class: "sb-vh-empty"
}, Xs = /*#__PURE__*/ vs({
	__name: "VersionHistory",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ P("major"), r = /* @__PURE__ */ P("all"), i = /* @__PURE__ */ P(""), a = K(() => _s(t.model.releases, {
			tab: n.value,
			size: r.value,
			search: i.value
		})), o = /* @__PURE__ */ P(null), s = /* @__PURE__ */ P(null), c = K(() => !!i.value.trim());
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
		return L(() => Dn(() => s.value?.focus({ preventScroll: !0 }))), (t, m) => (B(), V("div", ys, [
			H("header", bs, [H("div", null, [
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
			}, O(e.label), 11, xs)), 64))], 32),
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
			}, O(e.label), 11, Ss)), 64))], 32)) : G("", !0),
			H("p", Cs, O(a.value.legend), 1),
			H("div", ws, [H("label", Ts, [m[8] ||= H("span", { class: "sb-vh-visually-hidden" }, "Поиск по истории версий", -1), I(H("input", {
				id: "sb-vue-vh-search",
				"onUpdate:modelValue": m[3] ||= (e) => i.value = e,
				type: "search",
				autocomplete: "off",
				placeholder: "Поиск по всем версиям и вкладкам…",
				onInput: l
			}, null, 544), [[q, i.value]])]), H("span", Es, O(a.value.count), 1)]),
			H("div", {
				id: "sb-vh-content",
				ref_key: "content",
				ref: o,
				class: "sb-vh-content",
				role: "tabpanel",
				"aria-labelledby": "sb-vh-tabs"
			}, [a.value.mode === "search" && (a.value.majors.length || a.value.large.length || a.value.small.length) ? (B(), V("div", Ds, [a.value.majors.length ? (B(), V("section", Os, [H("h3", null, [m[9] ||= W("Мажорные версии ", -1), H("span", null, O(a.value.majors.length), 1)]), (B(!0), V(z, null, R(a.value.majors, (e) => (B(), V("article", {
				key: "major-" + e.major,
				class: "sb-vh-release sb-vh-major-release"
			}, [H("span", ks, "v" + O(e.major), 1), H("div", As, [H("p", null, "Мажорная версия " + O(e.major), 1), H("p", js, " От v" + O(e.items[e.items.length - 1][0]) + " до v" + O(e.items[0][0]), 1)])]))), 128))])) : G("", !0), (B(!0), V(z, null, R([{
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
			}, [H("h3", null, [W(O(e.title) + " ", 1), H("span", null, O(e.entries.length), 1)]), H("div", Ms, [(B(!0), V(z, null, R(e.entries, (t) => (B(), V("article", {
				key: t[0],
				class: "sb-vh-release"
			}, [H("span", Ns, "v" + O(t[0]), 1), H("div", Ps, [H("p", null, O(t[1]), 1), H("div", Fs, [H("time", { datetime: t[2] }, O(F(ps)(t[2])), 9, Is), H("span", Ls, O(e.badge), 1)])])]))), 128))])])), [[$a, e.entries.length]])), 128))])) : a.value.mode === "search" ? (B(), V("p", Rs, " По запросу совпадений нет ни в одном разделе истории. ")) : a.value.mode === "major" ? (B(), V("div", zs, [(B(!0), V(z, null, R(a.value.majors, (e) => (B(), V("article", {
				key: e.major,
				class: "sb-vh-release sb-vh-major-release"
			}, [H("span", Bs, "v" + O(e.major), 1), H("div", Vs, [
				H("h3", null, "Мажорная версия " + O(e.major), 1),
				H("p", null, "Ветка v" + O(e.major) + ".x — " + O(e.items.length) + " сохранённых минорных обновлений.", 1),
				H("p", Hs, " От v" + O(e.items[e.items.length - 1][0]) + " (" + O(F(ps)(e.items[e.items.length - 1][2])) + ") до v" + O(e.items[0][0]) + " (" + O(F(ps)(e.items[0][2])) + ") ", 1),
				H("button", {
					type: "button",
					class: "sb-vh-view-minors",
					onClick: f
				}, "Просмотреть минорные версии")
			])]))), 128))])) : a.value.mode === "minor" && a.value.entries.length ? (B(), V("div", Us, [(B(!0), V(z, null, R(a.value.entries, (e) => (B(), V("article", {
				key: e[0],
				class: "sb-vh-release"
			}, [H("span", Ws, "v" + O(e[0]), 1), H("div", Gs, [H("p", null, O(e[1]), 1), H("div", Ks, [H("time", { datetime: e[2] }, O(F(ps)(e[2])), 9, qs), r.value === "all" ? (B(), V("span", Js, O(e[3] === "large" ? "Крупное" : "Мелкое"), 1)) : G("", !0)])])]))), 128))])) : (B(), V("p", Ys, "По запросу минорные версии не найдены."))], 512)
		]));
	}
}, [["__scopeId", "data-v-ce1fc81b"]]);
// src/vue/version-history/legacyVersionHistoryBridge.js
function Zs({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_VERSION_HISTORY;
	if (!t?.snapshot || !document.body) return () => {};
	let n = null, r = !1;
	function i() {
		if (r) return;
		let i = document.getElementById("sb-vue-version-history");
		if (n?.node === i && i?.isConnected || (n &&= (n.unmount(), null), !i)) return;
		let a = t.snapshot();
		if (!a || !Array.isArray(a.releases)) return;
		let o = e(i, Xs, { model: {
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
// node_modules/pinia/dist/pinia.mjs
var Qs = typeof window < "u", $s, ec = (e) => $s = e, tc = Symbol();
function nc(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var rc;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(rc ||= {});
var ic = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function ac(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function oc(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		dc(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function sc(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function cc(e) {
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
var lc = typeof navigator == "object" ? navigator : { userAgent: "" }, uc = /Macintosh/.test(lc.userAgent) && /AppleWebKit/.test(lc.userAgent) && !/Safari/.test(lc.userAgent), dc = Qs ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !uc ? fc : "msSaveOrOpenBlob" in lc ? pc : mc : () => {};
function fc(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? cc(r) : sc(r.href) ? oc(e, t, n) : (r.target = "_blank", cc(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		cc(r);
	}, 0));
}
function pc(e, t = "download", n) {
	if (typeof e == "string") {
		if (sc(e)) oc(e, t, n);
		else {
			let t = document.createElement("a");
			t.href = e, t.target = "_blank", setTimeout(function() {
				cc(t);
			});
		}
	} else navigator.msSaveOrOpenBlob(ac(e, n), t);
}
function mc(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return oc(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(ic.HTMLElement)) || "safari" in ic, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || uc) && typeof FileReader < "u") {
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
var { assign: hc } = Object;
function gc() {
	let e = Ae(!0), t = e.run(() => /* @__PURE__ */ P({})), n = [], r = [], i = Xt({
		install(e) {
			ec(i), i._a = e, e.provide(tc, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
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
var _c = () => {};
function vc(e, t, n, r = _c) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && je() && Me(i), i;
}
function yc(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var bc = (e) => e(), xc = Symbol(), Sc = Symbol();
function Cc(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!t.hasOwnProperty(n)) continue;
		let r = t[n], i = e[n];
		e[n] = nc(i) && nc(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ N(r) && !/* @__PURE__ */ Kt(r) ? Cc(i, r) : r;
	}
	return e;
}
var wc = Symbol();
function Tc(e) {
	return !nc(e) || !Object.prototype.hasOwnProperty.call(e, wc);
}
var { assign: Ec } = Object;
function Dc(e) {
	return !!(/* @__PURE__ */ N(e) && e.effect);
}
function Oc(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || 
		/* istanbul ignore if */
		(n.state.value[e] = i ? i() : {}), Ec(/* @__PURE__ */ an(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = Xt(K(() => {
			ec(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return c = kc(e, l, t, n, r, !0), c;
}
function kc(e, t, n = {}, r, i, a) {
	let o, s = Ec({ actions: {} }, n), c = { deep: !0 }, l, u, d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p, m = r.state.value[e];
	!a && !m && 
	/* istanbul ignore if */
	(r.state.value[e] = {});
	let h;
	function g(t) {
		let n;
		l = u = !1, typeof t == "function" ? (t(r.state.value[e]), n = {
			type: rc.patchFunction,
			storeId: e,
			events: p
		}) : (Cc(r.state.value[e], t), n = {
			type: rc.patchObject,
			payload: t,
			storeId: e,
			events: p
		});
		let i = h = Symbol();
		Dn().then(() => {
			h === i && (l = !0);
		}), u = !0, yc(d, n, r.state.value[e]);
	}
	let _ = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			Ec(e, t);
		});
	} : _c;
	function v() {
		o.stop(), d.clear(), f.clear(), r._s.delete(e);
	}
	let y = (t, n = "") => {
		if (xc in t) return t[Sc] = n, t;
		let i = function() {
			ec(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			yc(f, {
				args: n,
				name: i[Sc],
				store: b,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : b, n);
			} catch (e) {
				throw yc(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (yc(a, e), e)).catch((e) => (yc(o, e), Promise.reject(e))) : (yc(a, l), l);
		};
		return i[xc] = !0, i[Sc] = n, i;
	}, b = /* @__PURE__ */ j({
		_p: r,
		$id: e,
		$onAction: vc.bind(null, f),
		$patch: g,
		$reset: _,
		$subscribe(t, n = {}) {
			let i = vc(d, t, n.detached, () => a()), a = o.run(() => Jn(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? u : l) && t({
					storeId: e,
					type: rc.direct,
					events: p
				}, r);
			}, Ec({}, c, n)));
			return i;
		},
		$dispose: v
	});
	r._s.set(e, b);
	let x = (r._a && r._a.runWithContext || bc)(() => r._e.run(() => (o = Ae()).run(() => t({ action: y }))));
	for (let t in x) {
		let n = x[t];
		/* @__PURE__ */ N(n) && !Dc(n) || /* @__PURE__ */ Kt(n) ? a || (m && Tc(n) && (/* @__PURE__ */ N(n) ? n.value = m[t] : Cc(n, m[t])), r.state.value[e][t] = n) : typeof n == "function" && (x[t] = y(n, t), s.actions[t] = n);
	}
	return Ec(b, x), Ec(/* @__PURE__ */ M(b), x), Object.defineProperty(b, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			g((t) => {
				Ec(t, e);
			});
		}
	}), r._p.forEach((e) => {
		Ec(b, o.run(() => e({
			store: b,
			app: r._a,
			pinia: r,
			options: s
		})));
	}), m && a && n.hydrate && n.hydrate(b.$state, m), l = !0, u = !0, b;
}
function Ac(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function a(n, a) {
		let o = Gn();
		return n ||= o ? Wn(tc, null) : null, n && ec(n), n = $s, n._s.has(e) || (i ? kc(e, t, r, n) : Oc(e, r, n)), n._s.get(e);
	}
	return a.$id = e, a;
}
// src/vue/navigation/nav-model.js
var jc = /* @__PURE__ */ new Set([
	"projects",
	"saved",
	"myideas",
	"myprompts",
	"events",
	"tracks",
	"artists"
]);
function Mc(e) {
	return e === "detail" ? "catalog" : jc.has(e) ? "account" : e;
}
function Nc(e) {
	let t = Mc(e?.active), n = /* @__PURE__ */ new Set(), r = !1, i = [];
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
var Pc = typeof document < "u";
function Fc(e) {
	return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Ic(e) {
	return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && Fc(e.default);
}
var Y = Object.assign;
function Lc(e, t) {
	let n = {};
	for (let r in t) {
		let i = t[r];
		n[r] = zc(i) ? i.map(e) : e(i);
	}
	return n;
}
var Rc = () => {}, zc = Array.isArray;
function Bc(e, t) {
	let n = {};
	for (let r in e) n[r] = r in t ? t[r] : e[r];
	return n;
}
var Vc = /#/g, Hc = /&/g, Uc = /\//g, Wc = /=/g, Gc = /\?/g, Kc = /\+/g, qc = /%5B/g, Jc = /%5D/g, Yc = /%5E/g, Xc = /%60/g, Zc = /%7B/g, Qc = /%7C/g, $c = /%7D/g, el = /%20/g;
function tl(e) {
	return e == null ? "" : encodeURI("" + e).replace(Qc, "|").replace(qc, "[").replace(Jc, "]");
}
function nl(e) {
	return tl(e).replace(Zc, "{").replace($c, "}").replace(Yc, "^");
}
function rl(e) {
	return tl(e).replace(Kc, "%2B").replace(el, "+").replace(Vc, "%23").replace(Hc, "%26").replace(Xc, "`").replace(Zc, "{").replace($c, "}").replace(Yc, "^");
}
function il(e) {
	return rl(e).replace(Wc, "%3D");
}
function al(e) {
	return tl(e).replace(Vc, "%23").replace(Gc, "%3F");
}
function ol(e) {
	return al(e).replace(Uc, "%2F");
}
function sl(e) {
	if (e == null) return null;
	try {
		return decodeURIComponent("" + e);
	} catch {}
	return "" + e;
}
var cl = /\/$/, ll = (e) => e.replace(cl, "");
function ul(e, t, n = "/") {
	let r, i = {}, a = "", o = "", s = t.indexOf("#"), c = t.indexOf("?");
	return c = s >= 0 && c > s ? -1 : c, c >= 0 && (r = t.slice(0, c), a = t.slice(c, s > 0 ? s : t.length), i = e(a.slice(1))), s >= 0 && (r ||= t.slice(0, s), o = t.slice(s, t.length)), r = _l(r ?? t, n), {
		fullPath: r + a + o,
		path: r,
		query: i,
		hash: sl(o)
	};
}
function dl(e, t) {
	let n = t.query ? e(t.query) : "";
	return t.path + (n && "?") + n + (t.hash || "");
}
function fl(e, t, n) {
	let r = t.matched.length - 1, i = n.matched.length - 1;
	return r > -1 && r === i && pl(t.matched[r], n.matched[i]) && ml(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function pl(e, t) {
	return (e.aliasOf || e) === (t.aliasOf || t);
}
function ml(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (var n in e) if (!hl(e[n], t[n])) return !1;
	return !0;
}
function hl(e, t) {
	return zc(e) ? gl(e, t) : zc(t) ? gl(t, e) : e?.valueOf() === t?.valueOf();
}
function gl(e, t) {
	return zc(t) ? e.length === t.length && e.every((e, n) => e === t[n]) : e.length === 1 && e[0] === t;
}
function _l(e, t) {
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
var vl = {
	path: "/",
	name: void 0,
	params: {},
	query: {},
	hash: "",
	fullPath: "/",
	matched: [],
	meta: {},
	redirectedFrom: void 0
}, yl = /* @__PURE__ */ function(e) {
	return e.pop = "pop", e.push = "push", e;
}({}), bl = /* @__PURE__ */ function(e) {
	return e.back = "back", e.forward = "forward", e.unknown = "", e;
}({});
function xl(e) {
	if (!e) {
		if (Pc) {
			let t = document.querySelector("base");
			e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
		} else e = "/";
	}
	return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), ll(e);
}
var Sl = /^[^#]+#/;
function Cl(e, t) {
	return e.replace(Sl, "#") + t;
}
function wl(e, t) {
	let n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
	return {
		behavior: t.behavior,
		left: r.left - n.left - (t.left || 0),
		top: r.top - n.top - (t.top || 0)
	};
}
var Tl = () => ({
	left: window.scrollX,
	top: window.scrollY
});
function El(e) {
	let t;
	if ("el" in e) {
		let n = e.el, r = typeof n == "string" && n.startsWith("#"), i = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
		if (!i) return;
		t = wl(i, e);
	} else t = e;
	"scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left == null ? window.scrollX : t.left, t.top == null ? window.scrollY : t.top);
}
function Dl(e, t) {
	return (history.state ? history.state.position - t : -1) + e;
}
var Ol = /* @__PURE__ */ new Map();
function kl(e, t) {
	Ol.set(e, t);
}
function Al(e) {
	let t = Ol.get(e);
	return Ol.delete(e), t;
}
function jl(e) {
	return typeof e == "string" || e && typeof e == "object";
}
function Ml(e) {
	return typeof e == "string" || typeof e == "symbol";
}
var X = /* @__PURE__ */ function(e) {
	return e[e.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", e[e.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", e[e.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", e[e.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", e[e.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", e;
}({}), Nl = Symbol("");
X.MATCHER_NOT_FOUND, X.NAVIGATION_GUARD_REDIRECT, X.NAVIGATION_ABORTED, X.NAVIGATION_CANCELLED, X.NAVIGATION_DUPLICATED;
function Pl(e, t) {
	return Y(/* @__PURE__ */ Error(), {
		type: e,
		[Nl]: !0
	}, t);
}
function Fl(e, t) {
	return e instanceof Error && Nl in e && (t == null || !!(e.type & t));
}
function Il(e) {
	let t = {};
	if (e === "" || e === "?") return t;
	let n = (e[0] === "?" ? e.slice(1) : e).split("&");
	for (let e = 0; e < n.length; ++e) {
		let r = n[e].replace(Kc, " "), i = r.indexOf("="), a = sl(i < 0 ? r : r.slice(0, i)), o = i < 0 ? null : sl(r.slice(i + 1));
		if (a in t) {
			let e = t[a];
			zc(e) || (e = t[a] = [e]), e.push(o);
		} else t[a] = o;
	}
	return t;
}
function Ll(e) {
	let t = "";
	for (let n in e) {
		let r = e[n];
		n = il(n), r == null ? r !== void 0 && (t += (t.length ? "&" : "") + n) : (zc(r) ? r.map((e) => e && rl(e)) : [r && rl(r)]).forEach((e) => {
			e !== void 0 && (t += (t.length ? "&" : "") + n, e != null && (t += "=" + e));
		});
	}
	return t;
}
function Rl(e) {
	let t = {};
	for (let n in e) {
		let r = e[n];
		r !== void 0 && (t[n] = zc(r) ? r.map((e) => e == null ? null : "" + e) : r == null ? r : "" + r);
	}
	return t;
}
var zl = Symbol(""), Bl = Symbol(""), Vl = Symbol(""), Hl = Symbol(""), Ul = Symbol("");
function Wl() {
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
function Gl(e, t, n, r, i, a = (e) => e()) {
	let o = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
	return () => new Promise((s, c) => {
		let l = (e) => {
			e === !1 ? c(Pl(X.NAVIGATION_ABORTED, {
				from: n,
				to: t
			})) : e instanceof Error ? c(e) : jl(e) ? c(Pl(X.NAVIGATION_GUARD_REDIRECT, {
				from: t,
				to: e
			})) : (o && r.enterCallbacks[i] === o && typeof e == "function" && o.push(e), s());
		}, u = a(() => e.call(r && r.instances[i], t, n, l)), d = Promise.resolve(u);
		e.length < 3 && (d = d.then(l)), d.catch((e) => c(e));
	});
}
function Kl(e, t, n, r, i = (e) => e()) {
	let a = [];
	for (let o of e) for (let e in o.components) {
		let s = o.components[e];
		if (t === "beforeRouteEnter" || o.instances[e]) {
			if (Fc(s)) {
				let c = (s.__vccOpts || s)[t];
				c && a.push(Gl(c, n, r, o, e, i));
			} else {
				let c = s();
				a.push(() => c.then((a) => {
					if (!a) throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);
					let s = Ic(a) ? a.default : a;
					o.mods[e] = a, o.components[e] = s;
					let c = (s.__vccOpts || s)[t];
					return c && Gl(c, n, r, o, e, i)();
				}));
			}
		}
	}
	return a;
}
function ql(e, t) {
	let n = [], r = [], i = [], a = Math.max(t.matched.length, e.matched.length);
	for (let o = 0; o < a; o++) {
		let a = t.matched[o];
		a && (e.matched.find((e) => pl(e, a)) ? r.push(a) : n.push(a));
		let s = e.matched[o];
		s && (t.matched.find((e) => pl(e, s)) || i.push(s));
	}
	return [
		n,
		r,
		i
	];
}
// node_modules/vue-router/dist/vue-router.mjs
function Jl(e = "") {
	let t = [], n = [["", {}]], r = 0;
	e = xl(e);
	function i(e, t = {}) {
		r++, r !== n.length && n.splice(r), n.push([e, t]);
	}
	function a(e, n, { direction: r, delta: i }) {
		let a = {
			direction: r,
			delta: i,
			type: yl.pop
		};
		for (let r of t) r(e, n, a);
	}
	let o = {
		location: "",
		state: {},
		base: e,
		createHref: Cl.bind(null, e),
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
			let i = this.location, o = e < 0 ? bl.back : bl.forward;
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
var Yl = /* @__PURE__ */ function(e) {
	return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.Group = 2] = "Group", e;
}({}), Z = /* @__PURE__ */ function(e) {
	return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.ParamRegExp = 2] = "ParamRegExp", e[e.ParamRegExpEnd = 3] = "ParamRegExpEnd", e[e.EscapeNext = 4] = "EscapeNext", e;
}(Z || {}), Xl = {
	type: Yl.Static,
	value: ""
}, Zl = /[a-zA-Z0-9_]/;
function Ql(e) {
	if (!e) return [[]];
	if (e === "/") return [[Xl]];
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
			type: Yl.Static,
			value: l
		}) : n === Z.Param || n === Z.ParamRegExp || n === Z.ParamRegExpEnd ? (a.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`), a.push({
			type: Yl.Param,
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
			c === "(" ? n = Z.ParamRegExp : Zl.test(c) ? f() : (d(), n = Z.Static, c !== "*" && c !== "?" && c !== "+" && s--);
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
var $l = "[^/]+?", eu = {
	sensitive: !1,
	strict: !1,
	start: !0,
	end: !0
}, tu = /* @__PURE__ */ function(e) {
	return e[e._multiplier = 10] = "_multiplier", e[e.Root = 90] = "Root", e[e.Segment = 40] = "Segment", e[e.SubSegment = 30] = "SubSegment", e[e.Static = 40] = "Static", e[e.Dynamic = 20] = "Dynamic", e[e.BonusCustomRegExp = 10] = "BonusCustomRegExp", e[e.BonusWildcard = -50] = "BonusWildcard", e[e.BonusRepeatable = -20] = "BonusRepeatable", e[e.BonusOptional = -8] = "BonusOptional", e[e.BonusStrict = .7000000000000001] = "BonusStrict", e[e.BonusCaseSensitive = .25] = "BonusCaseSensitive", e;
}(tu || {}), nu = /[.+*?^${}()[\]/\\]/g;
function ru(e, t) {
	let n = Y({}, eu, t), r = [], i = n.start ? "^" : "", a = [];
	for (let t of e) {
		let e = t.length ? [] : [tu.Root];
		n.strict && !t.length && (i += "/");
		for (let r = 0; r < t.length; r++) {
			let o = t[r], s = tu.Segment + (n.sensitive ? tu.BonusCaseSensitive : 0);
			if (o.type === Yl.Static) r || (i += "/"), i += o.value.replace(nu, "\\$&"), s += tu.Static;
			else if (o.type === Yl.Param) {
				let { value: e, repeatable: n, optional: c, regexp: l } = o;
				a.push({
					name: e,
					repeatable: n,
					optional: c
				});
				let u = l || $l;
				if (u !== $l) {
					s += tu.BonusCustomRegExp;
					try {
						`${u}`;
					} catch (t) {
						throw Error(`Invalid custom RegExp for param "${e}" (${u}): ` + t.message);
					}
				}
				let d = n ? `((?:${u})(?:/(?:${u}))*)` : `(${u})`;
				r || (d = c && t.length < 2 ? `(?:/${d})` : "/" + d), c && (d += "?"), i += d, s += tu.Dynamic, c && (s += tu.BonusOptional), n && (s += tu.BonusRepeatable), u === ".*" && (s += tu.BonusWildcard);
			}
			e.push(s);
		}
		r.push(e);
	}
	if (n.strict && n.end) {
		let e = r.length - 1;
		r[e][r[e].length - 1] += tu.BonusStrict;
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
			for (let e of i) if (e.type === Yl.Static) n += e.value;
			else if (e.type === Yl.Param) {
				let { value: a, repeatable: o, optional: s } = e, c = a in t ? t[a] : "";
				if (zc(c) && !o) throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);
				let l = zc(c) ? c.join("/") : c;
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
function iu(e, t) {
	let n = 0;
	for (; n < e.length && n < t.length;) {
		let r = t[n] - e[n];
		if (r) return r;
		n++;
	}
	return e.length < t.length ? e.length === 1 && e[0] === tu.Static + tu.Segment ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === tu.Static + tu.Segment ? 1 : -1 : 0;
}
function au(e, t) {
	let n = 0, r = e.score, i = t.score;
	for (; n < r.length && n < i.length;) {
		let e = iu(r[n], i[n]);
		if (e) return e;
		n++;
	}
	if (Math.abs(i.length - r.length) === 1) {
		if (ou(r)) return 1;
		if (ou(i)) return -1;
	}
	return i.length - r.length;
}
function ou(e) {
	let t = e[e.length - 1];
	return e.length > 0 && t[t.length - 1] < 0;
}
var su = {
	strict: !1,
	end: !0,
	sensitive: !1
};
function cu(e, t, n) {
	let r = Y(ru(Ql(e.path), n), {
		record: e,
		parent: t,
		children: [],
		alias: []
	});
	return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function lu(e, t) {
	let n = [], r = /* @__PURE__ */ new Map();
	t = Bc(su, t);
	function i(e) {
		return r.get(e);
	}
	function a(e, n, r) {
		let i = !r, s = du(e);
		s.aliasOf = r && r.record;
		let l = Bc(t, e), u = [s];
		if ("alias" in e) {
			let t = typeof e.alias == "string" ? [e.alias] : e.alias;
			for (let e of t) u.push(du(Y({}, s, {
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
			if (d = cu(t, n, l), r ? r.alias.push(d) : (f ||= d, f !== d && f.alias.push(d), i && e.name && !pu(d) && o(e.name)), _u(d) && c(d), s.children) {
				let e = s.children;
				for (let t = 0; t < e.length; t++) a(e[t], d, r && r.children[t]);
			}
			r ||= d;
		}
		return f ? () => {
			o(f);
		} : Rc;
	}
	function o(e) {
		if (Ml(e)) {
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
		let t = hu(e, n);
		n.splice(t, 0, e), e.record.name && !pu(e) && r.set(e.record.name, e);
	}
	function l(e, t) {
		let i, a = {}, o, s;
		if ("name" in e && e.name) {
			if (i = r.get(e.name), !i) throw Pl(X.MATCHER_NOT_FOUND, { location: e });
			s = i.record.name, a = Y(uu(t.params, i.keys.filter((e) => !e.optional).concat(i.parent ? i.parent.keys.filter((e) => e.optional) : []).map((e) => e.name)), e.params && uu(e.params, i.keys.map((e) => e.name))), o = i.stringify(a);
		} else if (e.path != null) o = e.path, i = n.find((e) => e.re.test(o)), i && (a = i.parse(o), s = i.record.name);
		else {
			if (i = t.name ? r.get(t.name) : n.find((e) => e.re.test(t.path)), !i) throw Pl(X.MATCHER_NOT_FOUND, {
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
			meta: mu(c)
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
function uu(e, t) {
	let n = {};
	for (let r of t) r in e && (n[r] = e[r]);
	return n;
}
function du(e) {
	let t = {
		path: e.path,
		redirect: e.redirect,
		name: e.name,
		meta: e.meta || {},
		aliasOf: e.aliasOf,
		beforeEnter: e.beforeEnter,
		props: fu(e),
		children: e.children || [],
		instances: {},
		leaveGuards: /* @__PURE__ */ new Set(),
		updateGuards: /* @__PURE__ */ new Set(),
		enterCallbacks: {},
		components: "components" in e ? e.components || null : e.component && { default: e.component }
	};
	return Object.defineProperty(t, "mods", { value: {} }), t;
}
function fu(e) {
	let t = {}, n = e.props || !1;
	if ("component" in e) t.default = n;
	else for (let r in e.components) t[r] = typeof n == "object" ? n[r] : n;
	return t;
}
function pu(e) {
	for (; e;) {
		if (e.record.aliasOf) return !0;
		e = e.parent;
	}
	return !1;
}
function mu(e) {
	return e.reduce((e, t) => Y(e, t.meta), {});
}
function hu(e, t) {
	let n = 0, r = t.length;
	for (; n !== r;) {
		let i = n + r >> 1;
		au(e, t[i]) < 0 ? r = i : n = i + 1;
	}
	let i = gu(e);
	return i && (r = t.lastIndexOf(i, r - 1)), r;
}
function gu(e) {
	let t = e;
	for (; t = t.parent;) if (_u(t) && au(e, t) === 0) return t;
}
function _u({ record: e }) {
	return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function vu(e) {
	let t = Wn(Vl), n = Wn(Hl), r = K(() => {
		let n = F(e.to);
		return t.resolve(n);
	}), i = K(() => {
		let { matched: e } = r.value, { length: t } = e, i = e[t - 1], a = n.matched;
		if (!i || !a.length) return -1;
		let o = a.findIndex(pl.bind(null, i));
		if (o > -1) return o;
		let s = Cu(e[t - 2]);
		return t > 1 && Cu(i) === s && a[a.length - 1].path !== s ? a.findIndex(pl.bind(null, e[t - 2])) : o;
	}), a = K(() => i.value > -1 && Su(n.params, r.value.params)), o = K(() => i.value > -1 && i.value === n.matched.length - 1 && ml(n.params, r.value.params));
	function s(n = {}) {
		if (xu(n)) {
			let n = t[F(e.replace) ? "replace" : "push"](F(e.to)).catch(Rc);
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
function yu(e) {
	return e.length === 1 ? e[0] : e;
}
var bu = /* @__PURE__ */ ar({
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
	useLink: vu,
	setup(e, { slots: t }) {
		let n = /* @__PURE__ */ j(vu(e)), { options: r } = Wn(Vl), i = K(() => ({
			[wu(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
			[wu(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
		}));
		return () => {
			let r = t.default && yu(t.default(n));
			return e.custom ? r : za("a", {
				"aria-current": n.isExactActive ? e.ariaCurrentValue : null,
				href: n.href,
				onClick: n.navigate,
				class: i.value
			}, r);
		};
	}
});
function xu(e) {
	if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && (e.button === void 0 || e.button === 0)) {
		if (e.currentTarget && e.currentTarget.getAttribute) {
			let t = e.currentTarget.getAttribute("target");
			if (/\b_blank\b/i.test(t)) return;
		}
		return e.preventDefault && e.preventDefault(), !0;
	}
}
function Su(e, t) {
	for (let n in t) {
		let r = t[n], i = e[n];
		if (typeof r == "string") {
			if (r !== i) return !1;
		} else if (!zc(i) || i.length !== r.length || r.some((e, t) => e.valueOf() !== i[t].valueOf())) return !1;
	}
	return !0;
}
function Cu(e) {
	return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
var wu = (e, t, n) => e ?? t ?? n, Tu = /* @__PURE__ */ ar({
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
		let r = Wn(Ul), i = K(() => e.route || r.value), a = Wn(Bl, 0), o = K(() => {
			let e = F(a), { matched: t } = i.value, n;
			for (; (n = t[e]) && !n.components;) e++;
			return e;
		}), s = K(() => i.value.matched[o.value]);
		Un(Bl, K(() => o.value + 1)), Un(zl, s), Un(Ul, i);
		let c = /* @__PURE__ */ P();
		return Jn(() => [
			c.value,
			s.value,
			e.name
		], ([e, t, n], [r, i, a]) => {
			t && (t.instances[n] = e, i && i !== t && e && e === r && (t.leaveGuards.size || (t.leaveGuards = i.leaveGuards), t.updateGuards.size || (t.updateGuards = i.updateGuards))), !e || !t || i && pl(t, i) && r || (t.enterCallbacks[n] || []).forEach((t) => t(e));
		}, { flush: "post" }), () => {
			let r = i.value, a = e.name, o = s.value, l = o && o.components[a];
			if (!l) return Eu(n.default, {
				Component: l,
				route: r
			});
			let u = o.props[a], d = za(l, Y({}, u ? u === !0 ? r.params : typeof u == "function" ? u(r) : u : null, t, {
				onVnodeUnmounted: (e) => {
					e.component.isUnmounted && (o.instances[a] = null);
				},
				ref: c
			}));
			return Eu(n.default, {
				Component: d,
				route: r
			}) || d;
		};
	}
});
function Eu(e, t) {
	if (!e) return null;
	let n = e(t);
	return n.length === 1 ? n[0] : n;
}
var Du = Tu;
function Ou(e) {
	let t = lu(e.routes, e), n = e.parseQuery || Il, r = e.stringifyQuery || Ll, i = e.history, a = Wl(), o = Wl(), s = Wl(), c = /* @__PURE__ */ $t(vl), l = vl;
	Pc && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
	let u = Lc.bind(null, (e) => "" + e), d = Lc.bind(null, ol), f = Lc.bind(null, sl);
	function p(e, n) {
		let r, i;
		return Ml(e) ? (r = t.getRecordMatcher(e), i = n) : i = e, t.addRoute(i, r);
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
			let r = ul(n, e, a.path), o = t.resolve({ path: r.path }, a), s = i.createHref(r.fullPath);
			return Y(r, o, {
				params: f(o.params),
				hash: sl(r.hash),
				redirectedFrom: void 0,
				href: s
			});
		}
		let o;
		if (e.path != null) o = Y({}, e, { path: ul(n, e.path, a.path).path });
		else {
			let t = Y({}, e.params);
			for (let e in t) t[e] ?? delete t[e];
			o = Y({}, e, { params: d(t) }), a.params = d(a.params);
		}
		let s = t.resolve(o, a), l = e.hash || "";
		s.params = u(f(s.params));
		let p = dl(r, Y({}, e, {
			hash: nl(l),
			path: s.path
		})), m = i.createHref(p);
		return Y({
			fullPath: p,
			hash: l,
			query: r === Ll ? Rl(e.query) : e.query || {}
		}, s, {
			redirectedFrom: void 0,
			href: m
		});
	}
	function v(e) {
		return typeof e == "string" ? ul(n, e, c.value.path) : Y({}, e);
	}
	function y(e, t) {
		if (l !== e) return Pl(X.NAVIGATION_CANCELLED, {
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
		return !o && fl(r, i, n) && (f = Pl(X.NAVIGATION_DUPLICATED, {
			to: d,
			from: i
		}), de(i, i, !0, !1)), (f ? Promise.resolve(f) : re(d, i)).catch((e) => Fl(e) ? Fl(e, X.NAVIGATION_GUARD_REDIRECT) ? e : ue(e) : le(e, d, i)).then((e) => {
			if (e) {
				if (Fl(e, X.NAVIGATION_GUARD_REDIRECT)) return S(Y({ replace: s }, v(e.to), {
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
		let n, [r, i, s] = ql(e, t);
		n = Kl(r.reverse(), "beforeRouteLeave", e, t);
		for (let i of r) i.leaveGuards.forEach((r) => {
			n.push(Gl(r, e, t));
		});
		let c = te.bind(null, e, t);
		return n.push(c), he(n).then(() => {
			n = [];
			for (let r of a.list()) n.push(Gl(r, e, t));
			return n.push(c), he(n);
		}).then(() => {
			n = Kl(i, "beforeRouteUpdate", e, t);
			for (let r of i) r.updateGuards.forEach((r) => {
				n.push(Gl(r, e, t));
			});
			return n.push(c), he(n);
		}).then(() => {
			n = [];
			for (let r of s) if (r.beforeEnter) {
				if (zc(r.beforeEnter)) for (let i of r.beforeEnter) n.push(Gl(i, e, t));
				else n.push(Gl(r.beforeEnter, e, t));
			}
			return n.push(c), he(n);
		}).then(() => (e.matched.forEach((e) => e.enterCallbacks = {}), n = Kl(s, "beforeRouteEnter", e, t, ne), n.push(c), he(n))).then(() => {
			n = [];
			for (let r of o.list()) n.push(Gl(r, e, t));
			return n.push(c), he(n);
		}).catch((e) => Fl(e, X.NAVIGATION_CANCELLED) ? e : Promise.reject(e));
	}
	function ie(e, t, n) {
		s.list().forEach((r) => ne(() => r(e, t, n)));
	}
	function C(e, t, n, r, a) {
		let o = y(e, t);
		if (o) return o;
		let s = t === vl, l = Pc ? history.state : {};
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
				}), r).catch(Rc);
				return;
			}
			l = r;
			let o = c.value;
			Pc && kl(Dl(o.fullPath, n.delta), Tl()), re(r, o).catch((e) => Fl(e, X.NAVIGATION_ABORTED | X.NAVIGATION_CANCELLED) ? e : Fl(e, X.NAVIGATION_GUARD_REDIRECT) ? (S(Y(v(e.to), { force: !0 }), r).then((e) => {
				Fl(e, X.NAVIGATION_ABORTED | X.NAVIGATION_DUPLICATED) && !n.delta && n.type === yl.pop && i.go(-1, !1);
			}).catch(Rc), Promise.reject()) : (n.delta && i.go(-n.delta, !1), le(e, r, o))).then((e) => {
				e ||= C(r, o, !1), e && (n.delta && !Fl(e, X.NAVIGATION_CANCELLED) ? i.go(-n.delta, !1) : n.type === yl.pop && Fl(e, X.NAVIGATION_ABORTED | X.NAVIGATION_DUPLICATED) && i.go(-1, !1)), ie(r, o, e);
			}).catch(Rc);
		});
	}
	let se = Wl(), ce = Wl(), w;
	function le(e, t, n) {
		ue(e);
		let r = ce.list();
		return r.length ? r.forEach((r) => r(e, t, n)) : console.error(e), Promise.reject(e);
	}
	function T() {
		return w && c.value !== vl ? Promise.resolve() : new Promise((e, t) => {
			se.add([e, t]);
		});
	}
	function ue(e) {
		return w || (w = !e, oe(), se.list().forEach(([t, n]) => e ? n(e) : t()), se.reset()), e;
	}
	function de(t, n, r, i) {
		let { scrollBehavior: a } = e;
		if (!Pc || !a) return Promise.resolve();
		let o = !r && Al(Dl(t.fullPath, 0)) || (i || !r) && history.state && history.state.scroll || null;
		return Dn().then(() => a(t, n, o)).then((e) => e && El(e)).catch((e) => le(e, t, n));
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
			e.component("RouterLink", bu), e.component("RouterView", Du), e.config.globalProperties.$router = me, Object.defineProperty(e.config.globalProperties, "$route", {
				enumerable: !0,
				get: () => F(c)
			}), Pc && !E && c.value === vl && (E = !0, b(i.location).catch((e) => {}));
			let t = {};
			for (let e in vl) Object.defineProperty(t, e, {
				get: () => c.value[e],
				enumerable: !0
			});
			e.provide(Vl, me), e.provide(Hl, /* @__PURE__ */ Ut(t)), e.provide(Ul, c);
			let n = e.unmount;
			pe.add(e), e.unmount = function() {
				pe.delete(e), pe.size < 1 && (l = vl, ae && ae(), ae = null, c.value = vl, E = !1, w = !1), n();
			};
		}
	};
	function he(e) {
		return e.reduce((e, t) => e.then(() => ne(t)), Promise.resolve());
	}
	return me;
}
function ku() {
	return Wn(Vl);
}
function Au(e) {
	return Wn(Hl);
}
var ju = Ou({
	history: Jl(),
	routes: [{
		path: "/:view(.*)*",
		name: "legacy-view",
		component: { render: () => null }
	}]
}), Mu = /* @__PURE__ */ new Set([
	"projects",
	"saved",
	"myideas",
	"myprompts",
	"events",
	"tracks",
	"artists"
]);
function Nu(e, t = null) {
	let n = typeof e == "string" && e ? e : "home";
	return n === "producer" && t?.kind === "production" && typeof t.id == "string" && /^[a-zA-Z0-9_-]{1,128}$/.test(t.id) ? "/producer/detail/" + encodeURIComponent(t.id) : n === "tracks" && t?.kind === "track" ? "/account/tracks/detail" : n === "detail" ? "/catalog/detail" : Mu.has(n) ? "/account/" + n : "/" + encodeURIComponent(n);
}
function Pu(e) {
	if (e === "/catalog/detail") return "catalog";
	if (e === "/producer/detail" || e.startsWith("/producer/detail/")) return "producer";
	if (e.startsWith("/account/")) return "account";
	try {
		return decodeURIComponent(e.slice(1)) || "home";
	} catch {
		return "home";
	}
}
var Fu = null, Iu = Promise.resolve(), Lu = "replace", Ru = 0, zu = 0, Bu = [], Vu = [], Q = -1, Hu = /* @__PURE__ */ $t(0), Uu = /* @__PURE__ */ Wt(Hu);
function Wu() {
	Hu.value++;
}
var Gu = /* @__PURE__ */ new Set([
	"overview",
	"ideas",
	"prompts",
	"artists"
]);
function Ku(e) {
	return e?.kind !== "genre" || typeof e.id != "string" || !/^[a-z0-9-]{1,100}$/.test(e.id) || !Gu.has(e.tab) ? null : Object.freeze({
		kind: "genre",
		id: e.id,
		tab: e.tab
	});
}
function qu(e) {
	return e?.kind !== "track" || typeof e.id != "string" || !/^[a-zA-Z0-9_-]{1,128}$/.test(e.id) ? null : Object.freeze({
		kind: "track",
		id: e.id
	});
}
function Ju(e) {
	return Ku(e) || qu(e) || (e?.kind === "production" && typeof e.id == "string" && /^[a-zA-Z0-9_-]{1,128}$/.test(e.id) ? Object.freeze({
		kind: "production",
		id: e.id
	}) : null);
}
function Yu(e, t, n = null) {
	let r = Ju(n);
	if (Q < 0) Bu = [e], Vu = [r], Q = 0;
	else if (t === "push") Bu = Bu.slice(0, Q + 1), Vu = Vu.slice(0, Q + 1), Bu.push(e), Vu.push(r), Q = Bu.length - 1;
	else {
		let t = Bu[Q] === e ? Vu[Q] : null;
		Bu[Q] = e, Vu[Q] = r || t || null;
	}
	Wu();
}
function Xu(e) {
	let t = e === "back" ? -1 : +(e === "forward"), n = Q + t;
	return t && n >= 0 && n < Bu.length ? Object.freeze({
		path: Bu[n],
		context: Vu[n] || null,
		index: n,
		offset: t
	}) : null;
}
function Zu(e) {
	return Xu(e);
}
function Qu(e) {
	if (typeof e != "string" || !/^\/[a-z][a-z0-9-]*$/i.test(e)) return null;
	try {
		return decodeURIComponent(e.slice(1));
	} catch {
		return null;
	}
}
function $u(e, { historyMode: t = "replace", context: n = null, source: r = "legacy" } = {}) {
	let i = Ju(n), a = Nu(e, i);
	if (a === Fu) return i && (Iu = Iu.then(() => {
		ju.currentRoute.value.path === a && Q >= 0 && Bu[Q] === a && (Vu[Q] = i, Wu());
	})), Iu;
	Fu = a;
	let o = t === "push" ? "push" : "replace";
	return Iu = Iu.then(async () => {
		ju.currentRoute.value.path === a ? i && Q >= 0 && (Vu[Q] = i, Wu()) : await ju[o](a) || (Yu(a, o, i), Lu = o, o === "push" && !i && r === "menu" && Ru++, o === "push" && !i && r === "shortcut" && zu++);
	}).catch((e) => {
		console.warn("[SUNOBOOM] Vue Router memory navigation failed; legacy routing remains active.", e);
	}), Iu;
}
function ed() {
	return Iu;
}
function td(e) {
	let t = Iu.then(() => {
		let t = Xu(e);
		return t ? new Promise((n) => {
			let r = !1, i = () => {}, a;
			function o(o) {
				r || (r = !0, i(), clearTimeout(a), o && (Q = t.index, Fu = t.path, Lu = e, Wu()), n(o));
			}
			i = ju.afterEach((e, n, r) => o(!r && e.path === t.path)), a = setTimeout(() => o(!1), 2500), ju.go(t.offset);
		}) : !1;
	}).catch((e) => (console.warn("[SUNOBOOM] Vue memory history traversal failed; legacy navigation retained.", e), !1));
	return Iu = t.then(() => void 0), t;
}
function nd() {
	let e = ju.currentRoute.value;
	return Object.freeze({
		path: e.path,
		name: e.name,
		active: Pu(e.path),
		transition: Lu,
		menuPushes: Ru,
		shortcutPushes: zu,
		canGoBack: Q > 0,
		canGoForward: Q >= 0 && Q < Bu.length - 1,
		historyDepth: Bu.length,
		historyPosition: Q,
		context: Vu[Q] || null
	});
}
// src/vue/navigation/route-state.js
var rd = /* @__PURE__ */ $t(Object.freeze({
	route: "home",
	active: "home",
	revision: 0
})), id = /* @__PURE__ */ Wt(rd);
function ad(e, { historyMode: t = "replace", context: n = null, source: r = "legacy" } = {}) {
	let i = typeof e == "string" && e ? e : "home";
	if ($u(i, {
		historyMode: t,
		context: n,
		source: r
	}), i === rd.value.route) return rd.value;
	let a = Object.freeze({
		route: i,
		active: Mc(i),
		revision: rd.value.revision + 1
	});
	return rd.value = a, a;
}
// src/vue/state/legacy-ui-store.js
var od = Object.freeze([]), sd = Object.freeze({
	ideaCount: 0,
	promptCount: 0,
	eventCount: 0,
	revision: 0
}), cd = (e) => Number.isSafeInteger(e) && e >= 0 ? e : 0, ld = Ac("sunoboom-legacy-ui", () => {
	let e = id, t = /* @__PURE__ */ $t(od), n = /* @__PURE__ */ $t(sd);
	function r(e) {
		if (!Array.isArray(e)) return !1;
		let n = Object.freeze(e.filter((e) => e && typeof e.id == "string" && e.id).map((e) => Object.freeze({
			id: e.id,
			label: e.label,
			shortLabel: e.shortLabel,
			iconHtml: e.iconHtml
		}))), r = t.value;
		return r.length === n.length && r.every((e, t) => e.id === n[t].id && e.label === n[t].label && e.shortLabel === n[t].shortLabel && e.iconHtml === n[t].iconHtml) ? !1 : (t.value = n, !0);
	}
	function i(e) {
		if (!e || typeof e != "object") return !1;
		let t = {
			ideaCount: cd(e.ideaCount),
			promptCount: cd(e.promptCount),
			eventCount: cd(e.eventCount)
		}, r = n.value;
		return r.ideaCount === t.ideaCount && r.promptCount === t.promptCount && r.eventCount === t.eventCount ? !1 : (n.value = Object.freeze({
			...t,
			revision: r.revision + 1
		}), !0);
	}
	return {
		route: e,
		navigationItems: t,
		dashboardStats: n,
		publishNavigation: r,
		publishDashboardStats: i
	};
}), ud = {
	class: "sb-vue-dashboard",
	"data-sb-vue-dashboard": ""
}, dd = { class: "dash-head" }, fd = { class: "dash-actions" }, pd = { class: "dash-metrics" }, md = { class: "dash-metric" }, hd = { class: "dash-metric" }, gd = { class: "dash-metric" }, _d = { class: "dash-layout" }, vd = { class: "dash-panel" }, yd = { class: "dash-panel-head" }, bd = { class: "dash-list" }, xd = { class: "dash-entry-meta" }, Sd = ["data-kind", "data-id"], Cd = {
	key: 0,
	class: "dash-empty"
}, wd = { class: "dash-panel" }, Td = { class: "dash-panel-head" }, Ed = { class: "dash-list" }, Dd = { class: "dash-entry-meta" }, Od = { class: "dash-entry-actions" }, kd = ["data-id"], Ad = ["data-id"], jd = {
	key: 0,
	class: "dash-empty"
}, Md = { class: "dash-panel dash-panel-events" }, Nd = { class: "dash-panel-head" }, Pd = { class: "dash-list" }, Fd = { class: "dash-event-date" }, Id = { class: "dash-event-main" }, Ld = { class: "dash-entry-meta" }, Rd = { key: 0 }, zd = ["data-id"], Bd = {
	key: 0,
	class: "dash-empty"
}, Vd = {
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
		let t = ld();
		return (n, r) => (B(), V("div", ud, [
			H("div", dd, [
				r[9] ||= H("div", { class: "dash-eyebrow" }, "ЛИЧНАЯ МУЗЫКАЛЬНАЯ МАСТЕРСКАЯ", -1),
				r[10] ||= H("h1", null, [W("Твоя музыкальная "), H("span", null, "лаборатория.")], -1),
				H("p", null, O(e.model.profileName) + ", здесь твои последние идеи, промпты и музыкальные события — всё под рукой.", 1),
				H("div", fd, [
					H("button", {
						type: "button",
						class: "btn primary",
						"data-action": "nav",
						"data-nav": "myideas",
						onClick: r[0] ||= Uo((t) => e.navigate("myideas"), ["stop"])
					}, "＋ Новая идея"),
					H("button", {
						type: "button",
						class: "btn ghost",
						"data-action": "nav",
						"data-nav": "myprompts",
						onClick: r[1] ||= Uo((t) => e.navigate("myprompts"), ["stop"])
					}, "＋ Новый промпт"),
					H("button", {
						type: "button",
						class: "btn ghost",
						"data-action": "nav",
						"data-nav": "events",
						onClick: r[2] ||= Uo((t) => e.navigate("events"), ["stop"])
					}, "＋ Событие")
				])
			]),
			H("div", pd, [
				H("div", md, [H("b", null, O(F(t).dashboardStats.ideaCount), 1), r[11] ||= H("span", null, "Мои идеи", -1)]),
				H("div", hd, [H("b", null, O(F(t).dashboardStats.promptCount), 1), r[12] ||= H("span", null, "Мои промпты", -1)]),
				H("div", gd, [H("b", null, O(F(t).dashboardStats.eventCount), 1), r[13] ||= H("span", null, "Мои события", -1)])
			]),
			H("div", _d, [
				H("section", vd, [H("header", yd, [r[14] ||= H("div", null, [H("span", { class: "dash-kicker" }, "💡 ЛИЧНАЯ БИБЛИОТЕКА"), H("h2", null, "Мои последние идеи")], -1), H("button", {
					type: "button",
					class: "dash-view-all",
					"data-action": "nav",
					"data-nav": "myideas",
					onClick: r[3] ||= Uo((t) => e.navigate("myideas"), ["stop"])
				}, "Все идеи →")]), H("div", bd, [(B(!0), V(z, null, R(e.model.ideas, (e) => (B(), V("article", {
					key: e.kind + ":" + e.key,
					class: "dash-entry"
				}, [
					H("div", xd, O(e.label), 1),
					H("h3", null, O(e.title), 1),
					H("p", null, O(String(e.pitch).slice(0, 180)), 1),
					H("button", {
						type: "button",
						class: "dash-entry-link",
						"data-action": "dash-open-idea",
						"data-kind": e.kind,
						"data-id": String(e.key)
					}, "Открыть идею →", 8, Sd)
				]))), 128)), e.model.ideas.length ? G("", !0) : (B(), V("div", Cd, [
					r[15] ||= H("span", null, "💡", -1),
					r[16] ||= H("strong", null, "Пока нет сохранённых идей", -1),
					r[17] ||= H("p", null, "Добавь идею в личном кабинете или сохрани сюжет из Idea Lab.", -1),
					H("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "nav",
						"data-nav": "myideas",
						onClick: r[4] ||= Uo((t) => e.navigate("myideas"), ["stop"])
					}, "Добавить идею →")
				]))])]),
				H("section", wd, [H("header", Td, [r[18] ||= H("div", null, [H("span", { class: "dash-kicker" }, "🎛️ SUNO STUDIO"), H("h2", null, "Мои последние промпты")], -1), H("button", {
					type: "button",
					class: "dash-view-all",
					"data-action": "nav",
					"data-nav": "myprompts",
					onClick: r[5] ||= Uo((t) => e.navigate("myprompts"), ["stop"])
				}, "Все промпты →")]), H("div", Ed, [(B(!0), V(z, null, R(e.model.prompts, (e) => (B(), V("article", {
					key: String(e.id),
					class: "dash-entry"
				}, [
					H("div", Dd, O(e.genre || "Suno Studio") + O(e.date ? " · " + e.date : ""), 1),
					H("h3", null, O(e.title || (e.genre || "Промпт") + " · " + (e.mood || "студия")), 1),
					H("p", null, O(String(e.text || "").slice(0, 180)), 1),
					H("div", Od, [H("button", {
						type: "button",
						class: "dash-entry-link",
						"data-action": "dash-open-prompt",
						"data-id": String(e.id)
					}, "Открыть промпт →", 8, kd), H("button", {
						type: "button",
						class: "dash-copy",
						"data-action": "copy-saved",
						"data-id": String(e.id)
					}, "Копировать", 8, Ad)])
				]))), 128)), e.model.prompts.length ? G("", !0) : (B(), V("div", jd, [
					r[19] ||= H("span", null, "🎛️", -1),
					r[20] ||= H("strong", null, "Пока нет сохранённых промптов", -1),
					r[21] ||= H("p", null, "Сохрани промпт в Suno Studio или создай собственный.", -1),
					H("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "nav",
						"data-nav": "myprompts",
						onClick: r[6] ||= Uo((t) => e.navigate("myprompts"), ["stop"])
					}, "Добавить промпт →")
				]))])]),
				H("section", Md, [H("header", Nd, [r[22] ||= H("div", null, [H("span", { class: "dash-kicker" }, "🗓️ ТВОРЧЕСКИЙ КАЛЕНДАРЬ"), H("h2", null, "Мои события")], -1), H("button", {
					type: "button",
					class: "dash-view-all",
					"data-action": "nav",
					"data-nav": "events",
					onClick: r[7] ||= Uo((t) => e.navigate("events"), ["stop"])
				}, "Все события →")]), H("div", Pd, [(B(!0), V(z, null, R(e.model.events, (e) => (B(), V("article", {
					key: String(e.id),
					class: "dash-entry dash-event"
				}, [
					H("div", Fd, [H("strong", null, O(e.formattedDate), 1), H("span", null, O(e.time || "Весь день"), 1)]),
					H("div", Id, [
						H("div", Ld, O(e.typeLabel) + O(e.past ? " · Прошедшее" : ""), 1),
						H("h3", null, O(e.title), 1),
						e.notes ? (B(), V("p", Rd, O(String(e.notes).slice(0, 160)), 1)) : G("", !0)
					]),
					H("button", {
						type: "button",
						class: "dash-entry-link",
						"data-action": "dash-open-event",
						"data-id": String(e.id)
					}, "Подробнее →", 8, zd)
				]))), 128)), e.model.events.length ? G("", !0) : (B(), V("div", Bd, [
					r[23] ||= H("span", null, "🗓️", -1),
					r[24] ||= H("strong", null, "Событий пока нет", -1),
					r[25] ||= H("p", null, "Добавь даты релизов, записи, встречи и другие планы своей музыкальной работы.", -1),
					H("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "nav",
						"data-nav": "events",
						onClick: r[8] ||= Uo((t) => e.navigate("events"), ["stop"])
					}, "Добавить событие →")
				]))])])
			])
		]));
	}
}, Hd = Object.freeze([
	"myideas",
	"myprompts",
	"events"
]);
function Ud(e, { router: t, legacyApi: n, syncRoute: r = ad } = {}, i) {
	if (typeof e != "string" || !e || !n || typeof n.snapshot != "function") return !1;
	let a = i === "menu", o = n.snapshot()?.items, s = a ? Array.isArray(o) && o.some((t) => t?.id === e) : Hd.includes(e), c = a ? n.navigate : n.navigateWorkspace;
	if (!s || typeof c != "function") return !1;
	let l = !1;
	try {
		let n = Nu(e);
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
function Wd(e, t = {}) {
	return Ud(e, t, "menu");
}
function Gd(e, t = {}) {
	return Ud(e, t, "shortcut");
}
// src/vue/home/legacyHomeDashboardBridge.js
function Kd({ mountVueFeature: e, sharedUi: t }) {
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
		let c = e(o, Vd, {
			model: s,
			navigate: (e) => Gd(e, {
				router: ju,
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
var qd = { class: "section-title" }, Jd = {
	key: 0,
	class: "saved-list"
}, Yd = { class: "row" }, Xd = { class: "actions" }, Zd = ["data-id"], Qd = ["innerHTML"], $d = ["data-id"], ef = ["data-id", "aria-label"], tf = ["innerHTML"], nf = { class: "sub" }, rf = {
	key: 1,
	class: "empty"
}, af = ["innerHTML"], of = {
	__name: "PromptCollection",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (B(), V(z, null, [H("div", qd, [H("h2", null, "Сохранённые промпты (" + O(e.model.items.length) + ")", 1)]), e.model.items.length ? (B(), V("div", Jd, [(B(!0), V(z, null, R(e.model.items, (t) => (B(), V("article", {
			key: t.id,
			class: "saved-item"
		}, [
			H("div", Yd, [H("h3", null, O(t.title), 1), H("div", Xd, [
				H("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "copy-saved",
					"data-id": t.id
				}, [H("span", {
					"aria-hidden": "true",
					innerHTML: e.model.icons.copy
				}, null, 8, Qd), n[0] ||= W(" Копировать", -1)], 8, Zd),
				H("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "edit-manual-prompt",
					"data-id": t.id
				}, "Изменить", 8, $d),
				H("button", {
					type: "button",
					class: "btn danger small",
					"data-action": "delete-saved",
					"data-id": t.id,
					"aria-label": "Удалить промпт «" + t.title + "»"
				}, [H("span", {
					"aria-hidden": "true",
					innerHTML: e.model.icons.trash
				}, null, 8, tf)], 8, ef)
			])]),
			H("p", null, O(t.text), 1),
			H("span", nf, O(t.genre) + " · " + O(t.date), 1)
		]))), 128))])) : (B(), V("div", rf, [
			H("span", {
				"aria-hidden": "true",
				innerHTML: e.model.icons.music
			}, null, 8, af),
			n[1] ||= H("strong", null, "Промптов пока нет", -1),
			n[2] ||= W("Сохрани первый здесь или в Suno Studio.", -1)
		]))], 64));
	}
};
// src/vue/account/legacyPromptCollectionBridge.js
function sf({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PROMPT_LIST, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-prompts-list");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, of, { model: o });
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
var cf = { class: "field" }, lf = { class: "field" }, uf = ["value"], df = { class: "field" }, ff = {
	id: "sb-prompt-char-count",
	class: "sub"
}, pf = {
	__name: "PromptEditor",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = /* @__PURE__ */ j({ ...e.initial.values }), n = K(() => t.text.length);
		return (r, i) => (B(), V(z, null, [
			H("h3", null, O(e.initial.editing ? "Редактирование промпта" : "Новый промпт для Suno"), 1),
			H("div", cf, [i[3] ||= H("label", { for: "custom-prompt-title" }, "Название", -1), I(H("input", {
				id: "custom-prompt-title",
				"onUpdate:modelValue": i[0] ||= (e) => t.title = e,
				maxlength: "100",
				placeholder: "Например, Романтичный афро-поп"
			}, null, 512), [[q, t.title]])]),
			H("div", lf, [i[4] ||= H("label", { for: "custom-prompt-genre" }, "Жанр", -1), I(H("select", {
				id: "custom-prompt-genre",
				"onUpdate:modelValue": i[1] ||= (e) => t.genre = e
			}, [(B(!0), V(z, null, R(e.initial.genres, (e) => (B(), V("option", {
				key: e.id,
				value: e.id
			}, O(e.name), 9, uf))), 128))], 512), [[J, t.genre]])]),
			H("div", df, [
				i[5] ||= H("label", { for: "custom-prompt-text" }, "Текст промпта (до 1000 символов)", -1),
				I(H("textarea", {
					id: "custom-prompt-text",
					"onUpdate:modelValue": i[2] ||= (e) => t.text = e,
					rows: "7",
					maxlength: "1000",
					"aria-describedby": "sb-prompt-char-count",
					placeholder: "Modern Russian-language afropop, 105 BPM, clean vocals, groovy bass..."
				}, null, 512), [[q, t.text]]),
				H("span", ff, O(n.value) + " / 1000 символов", 1)
			])
		], 64));
	}
};
// src/vue/account/legacyPromptEditorBridge.js
function mf({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PROMPT_EDITOR, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-prompt-form");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, pf, { initial: o });
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
var hf = { class: "account-back" }, gf = {
	type: "button",
	class: "btn ghost small",
	"data-action": "workspace-back"
}, _f = { class: "section-title" }, vf = {
	key: 0,
	class: "genre-grid"
}, yf = ["data-id"], bf = { class: "genre-content" }, xf = { class: "kicker" }, Sf = { class: "foot" }, Cf = {
	key: 1,
	class: "empty"
}, wf = { class: "section-title" }, Tf = {
	key: 2,
	class: "idea-grid"
}, Ef = { class: "idea-badge" }, Df = { class: "actions" }, Of = ["data-id", "data-i"], kf = ["data-id", "data-i"], Af = {
	key: 3,
	class: "empty"
}, jf = { class: "section-title" }, Mf = {
	key: 4,
	class: "idea-grid"
}, Nf = { class: "idea-badge" }, Pf = ["data-id"], Ff = {
	key: 5,
	class: "empty"
}, If = { class: "section-title" }, Lf = {
	key: 6,
	class: "idea-grid"
}, Rf = { class: "idea-badge" }, zf = { class: "generator-story" }, Bf = { class: "generator-hook" }, Vf = {
	key: 0,
	class: "generator-detail"
}, Hf = { class: "actions" }, Uf = ["data-id"], Wf = ["data-id"], Gf = ["data-id", "aria-label"], Kf = {
	key: 7,
	class: "empty"
}, qf = { class: "section-title" }, Jf = {
	key: 8,
	class: "saved-list"
}, Yf = { class: "row" }, Xf = { class: "actions" }, Zf = ["data-id"], Qf = ["data-id", "aria-label"], $f = { class: "sub" }, ep = {
	key: 9,
	class: "empty"
}, tp = {
	__name: "LibraryCollection",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (B(), V(z, null, [
			H("div", hf, [H("button", gf, O(e.model.backLabel), 1)]),
			n[11] ||= H("header", { class: "heading" }, [H("h1", null, "Моя библиотека"), H("p", null, "Любимые жанры, идеи и промпты. Сохраняются локально в этом браузере.")], -1),
			H("div", _f, [H("h2", null, "Избранные жанры (" + O(e.model.genres.length) + ")", 1)]),
			e.model.genres.length ? (B(), V("div", vf, [(B(!0), V(z, null, R(e.model.genres, (e) => (B(), V("button", {
				key: e.id,
				type: "button",
				class: "genre-card",
				style: E({ "--accent": e.color }),
				"data-action": "genre",
				"data-id": e.id
			}, [n[1] ||= H("div", { class: "art" }, null, -1), H("div", bf, [H("div", null, [
				H("div", xf, O(e.family) + " · " + O(e.bpm[0]) + "–" + O(e.bpm[1]) + " BPM", 1),
				H("h3", null, O(e.name), 1),
				H("p", null, O(e.tagline), 1)
			]), H("div", Sf, [H("span", null, O(e.era), 1), n[0] ||= H("span", { style: { color: "#ffacd9" } }, "Открыть →", -1)])])], 12, yf))), 128))])) : (B(), V("div", Cf, [...n[2] ||= [H("strong", null, "Пока нет избранных жанров", -1), W("Добавляй их в карточках Академии.", -1)]])),
			H("div", wf, [H("h2", null, "Сохранённые идеи (" + O(e.model.ideas.length) + ")", 1)]),
			e.model.ideas.length ? (B(), V("div", Tf, [(B(!0), V(z, null, R(e.model.ideas, (e) => (B(), V("article", {
				key: e.key,
				class: "idea"
			}, [
				H("div", Ef, O(e.genre) + " · " + O(e.mood), 1),
				H("h3", null, O(e.title), 1),
				H("p", null, O(e.pitch), 1),
				H("div", Df, [H("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "idea-use",
					"data-id": e.genreId,
					"data-i": e.index
				}, "В студию", 8, Of), H("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "idea-save",
					"data-id": e.genreId,
					"data-i": e.index
				}, "Сохранено", 8, kf)])
			]))), 128))])) : (B(), V("div", Af, [...n[3] ||= [H("strong", null, "Нет сохранённых идей", -1), W("Найди интересный сюжет и нажми «Сохранить».", -1)]])),
			H("div", jf, [H("h2", null, "Мои собственные идеи (" + O(e.model.own.length) + ")", 1), n[4] ||= H("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "nav",
				"data-nav": "myideas"
			}, "Добавить или изменить →", -1)]),
			e.model.own.length ? (B(), V("div", Mf, [(B(!0), V(z, null, R(e.model.own, (e) => (B(), V("article", {
				key: e.id,
				class: "idea"
			}, [
				H("div", Nf, O(e.genre), 1),
				H("h3", null, O(e.title), 1),
				H("p", null, O(e.pitch), 1),
				H("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "edit-manual-idea",
					"data-id": e.id
				}, "Открыть запись →", 8, Pf)
			]))), 128))])) : (B(), V("div", Ff, [...n[5] ||= [H("strong", null, "Пока нет своих идей", -1), W("Добавь их в личном кабинете.", -1)]])),
			H("div", If, [H("h2", null, "Идеи из генератора (" + O(e.model.generated.length) + ")", 1), n[6] ||= H("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "nav",
				"data-nav": "ideas"
			}, "＋ Создать ещё", -1)]),
			e.model.generated.length ? (B(), V("div", Lf, [(B(!0), V(z, null, R(e.model.generated, (e) => (B(), V("article", {
				key: e.id,
				class: "idea generated-card"
			}, [
				H("div", Rf, O(e.genre) + " · " + O(e.topic), 1),
				H("h3", null, O(e.title), 1),
				H("p", null, O(e.pitch), 1),
				H("p", zf, O(e.storyLine), 1),
				H("div", Bf, [n[7] ||= H("span", null, "ХУК ПРИПЕВА", -1), H("strong", null, O(e.hook), 1)]),
				e.detail ? (B(), V("p", Vf, "Твоя деталь: " + O(e.detail), 1)) : G("", !0),
				H("div", Hf, [
					H("button", {
						type: "button",
						class: "btn primary small",
						"data-action": "generated-use",
						"data-id": e.id
					}, "В Suno Studio", 8, Uf),
					H("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "generated-copy",
						"data-id": e.id
					}, "Копировать", 8, Wf),
					H("button", {
						type: "button",
						class: "btn danger small",
						"data-action": "generated-delete",
						"data-id": e.id,
						"aria-label": "Удалить идею «" + e.title + "»"
					}, "Удалить", 8, Gf)
				])
			]))), 128))])) : (B(), V("div", Kf, [...n[8] ||= [H("strong", null, "Сохранённых новых идей нет", -1), W("Создай идеи в генераторе и нажми «Сохранить».", -1)]])),
			H("div", qf, [H("h2", null, "Мои промпты (" + O(e.model.prompts.length) + ")", 1), n[9] ||= H("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "nav",
				"data-nav": "myprompts"
			}, "Добавить или изменить →", -1)]),
			e.model.prompts.length ? (B(), V("div", Jf, [(B(!0), V(z, null, R(e.model.prompts, (e) => (B(), V("article", {
				key: e.id,
				class: "saved-item"
			}, [
				H("div", Yf, [H("h3", null, O(e.title), 1), H("div", Xf, [H("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "copy-saved",
					"data-id": e.id
				}, "Копировать", 8, Zf), H("button", {
					type: "button",
					class: "btn danger small",
					"data-action": "delete-saved",
					"data-id": e.id,
					"aria-label": "Удалить промпт «" + e.title + "»"
				}, "Удалить", 8, Qf)])]),
				H("p", null, O(e.text), 1),
				H("span", $f, O(e.date), 1)
			]))), 128))])) : (B(), V("div", ep, [...n[10] ||= [H("strong", null, "Промптов пока нет", -1), W("Создай первый в Suno Studio и сохрани в библиотеке.", -1)]]))
		], 64));
	}
};
// src/vue/account/legacyLibraryBridge.js
function np({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_LIBRARY, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-library-collection");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, tp, { model: o });
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
var rp = {
	key: 0,
	class: "sbsong-grid"
}, ip = ["data-id", "aria-label"], ap = ["data-sbsong-cover"], op = ["src"], sp = { class: "sbsong-card-text" }, cp = { class: "sbsong-card-flags" }, lp = { class: "sbsong-card-actions" }, up = ["data-id"], dp = ["data-id"], fp = ["data-id"], pp = {
	key: 1,
	class: "sbsong-empty"
}, mp = {
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
			e && (n.value = e, Dn(() => t.api.hydrateCovers()));
		}
		return L(() => {
			window.addEventListener("sunoboom:songs-search", r), Dn(() => t.api.hydrateCovers());
		}), Sr(() => window.removeEventListener("sunoboom:songs-search", r)), (e, t) => n.value.items.length ? (B(), V("div", rp, [(B(!0), V(z, null, R(n.value.items, (e) => (B(), V("article", {
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
		}, null, 8, ap)) : e.coverUrl ? (B(), V("img", {
			key: 1,
			alt: "",
			src: e.coverUrl,
			style: { display: "block" },
			loading: "lazy"
		}, null, 8, op)) : G("", !0), t[0] ||= H("span", {
			class: "sbsong-no-cover",
			"aria-hidden": "true"
		}, "♫", -1)], 8, ip), H("div", sp, [
			H("small", null, O(e.genre), 1),
			H("h3", null, O(e.title), 1),
			H("p", null, O(e.artist), 1),
			H("div", cp, [H("span", null, O(e.status), 1)]),
			H("div", lp, [
				H("button", {
					type: "button",
					"data-sbsong-action": "open",
					"data-id": e.id
				}, "Открыть", 8, up),
				H("button", {
					type: "button",
					"data-sbsong-action": "edit",
					"data-id": e.id
				}, "Изменить", 8, dp),
				H("button", {
					type: "button",
					"data-sbsong-action": "share",
					"data-id": e.id
				}, "Поделиться", 8, fp)
			])
		])]))), 128))])) : (B(), V("div", pp, O(n.value.total ? "По этому запросу песен нет." : "Песен пока нет. Добавь первую карточку и загрузи аудиофайл."), 1));
	}
};
// src/vue/account/legacySongCardsBridge.js
function hp({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SONG_CARDS, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-song-cards");
		if (r?.node === a || (r &&= (r.unmount(), null), !a || !t.snapshot())) return;
		let o = e(a, mp, { api: t });
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
var gp = {
	class: "sbsong-versions",
	"data-sb-vue-song-versions": "",
	"aria-label": "Версии записи"
}, _p = { class: "sbsong-version-heading" }, vp = { key: 0 }, yp = { class: "sbsong-version-row-head" }, bp = {
	key: 0,
	class: "sbsong-version-main-badge"
}, xp = {
	key: 1,
	class: "sbsong-version-play-badge"
}, Sp = { class: "sbsong-version-actions" }, Cp = ["data-version-id"], wp = ["data-version-id"], Tp = ["data-id", "data-version-id"], Ep = ["data-version-id"], Dp = { class: "sbsong-version-notes" }, Op = ["data-sbsong-version-title", "value"], kp = ["data-sbsong-version-note", "value"], Ap = ["data-version-id"], jp = { key: 0 }, Mp = {
	type: "button",
	class: "sbsong-compare-toggle",
	"data-sbsong-action": "compare-toggle"
}, Np = {
	key: 0,
	class: "sbsong-compare-grid"
}, Pp = ["value"], Fp = ["value"], Ip = ["value"], Lp = ["value"], Rp = {
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
		return (t, n) => (B(), V("section", gp, [
			H("div", _p, [H("h3", null, "Версии записи (" + O(e.versions.length) + ")", 1), e.playingLabel ? (B(), V("small", vp, "В основном плеере: " + O(e.playingLabel), 1)) : G("", !0)]),
			(B(!0), V(z, null, R(e.versions, (t) => (B(), V("article", {
				key: t.id,
				class: "sbsong-version-row"
			}, [
				H("div", yp, [H("div", null, [
					H("strong", null, O(t.label), 1),
					t.isMain ? (B(), V("span", bp, "★ Основная")) : G("", !0),
					t.isPlaying ? (B(), V("span", xp, "♫ Выбрана")) : G("", !0),
					H("small", null, O(t.fileName) + " · " + O(t.sizeLabel) + " · " + O(t.addedDate), 1)
				])]),
				H("div", Sp, [
					H("button", {
						type: "button",
						"data-sbsong-action": "version-play",
						"data-version-id": t.id
					}, "Выбрать для плеера", 8, Cp),
					t.isMain ? G("", !0) : (B(), V("button", {
						key: 0,
						type: "button",
						"data-sbsong-action": "version-main",
						"data-version-id": t.id
					}, "★ Сделать основной", 8, wp)),
					H("button", {
						type: "button",
						"data-sbsong-action": "share-file",
						"data-id": e.songId,
						"data-version-id": t.id
					}, "Сохранить / отправить", 8, Tp),
					H("button", {
						type: "button",
						class: "sbsong-version-danger",
						"data-sbsong-action": "version-remove",
						"data-version-id": t.id
					}, "Удалить дубль", 8, Ep)
				]),
				H("details", Dp, [
					n[2] ||= H("summary", null, "Название и заметки", -1),
					H("label", null, [n[0] ||= W("Название версии ", -1), H("input", {
						type: "text",
						maxlength: "90",
						"data-sbsong-version-title": t.id,
						value: t.label
					}, null, 8, Op)]),
					H("label", null, [n[1] ||= W("Чем отличается этот дубль ", -1), H("textarea", {
						maxlength: "800",
						rows: "2",
						"data-sbsong-version-note": t.id,
						value: t.notes,
						placeholder: "Например: более плотный припев, удачный вокал..."
					}, null, 8, kp)]),
					H("button", {
						type: "button",
						"data-sbsong-action": "version-save",
						"data-version-id": t.id
					}, "Сохранить заметки", 8, Ap)
				])
			]))), 128)),
			e.versions.length ? G("", !0) : (B(), V("p", jp, "Пока нет локальных версий. Загрузи первую запись в MP3, M4A или WAV.")),
			e.versions.length > 1 ? (B(), V(z, { key: 1 }, [H("button", Mp, O(e.compareOpen ? "Скрыть сравнение A/B" : "Сравнить версии A/B"), 1), e.compareOpen ? (B(), V("div", Np, [
				H("label", null, [
					n[3] ||= W("Версия A ", -1),
					H("select", {
						id: "sbsong-compare-a",
						value: e.compareAId
					}, [(B(!0), V(z, null, R(e.versions, (e) => (B(), V("option", {
						key: e.id,
						value: e.id
					}, O(e.label), 9, Fp))), 128))], 8, Pp),
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
					}, O(e.label), 9, Lp))), 128))], 8, Ip),
					n[6] ||= H("audio", {
						id: "sbsong-ab-b",
						controls: "",
						preload: "metadata"
					}, null, -1)
				]),
				n[7] ||= H("p", null, "Два независимых плеера для сравнения дублей. Воспроизведение запускается вручную.", -1)
			])) : G("", !0)], 64)) : G("", !0),
			n[8] ||= da("<div class=\"sbsong-version-add\"><h4>+ Добавить новую версию</h4><label>Аудиофайл (MP3, M4A, WAV и другие) <input id=\"sbsong-version-file\" type=\"file\" accept=\"audio/*,.mp3,.m4a,.wav,.wave,.flac,.ogg,.opus,.aac\"></label><label>Название дубля <input id=\"sbsong-new-version-title\" maxlength=\"90\" type=\"text\" placeholder=\"Например: Версия с новым припевом\"></label><label>Заметка <textarea id=\"sbsong-new-version-notes\" maxlength=\"800\" rows=\"2\" placeholder=\"Что изменилось в этой записи?\"></textarea></label><button type=\"button\" class=\"sbsong-main-btn\" data-sbsong-action=\"version-add\" id=\"sbsong-version-submit\">Сохранить новую версию</button><p>WAV — до 500 МБ, другие форматы — до 150 МБ. Каждая версия хранится отдельно в браузере этого устройства. Старые записи не перезаписываются.</p></div>", 1)
		]));
	}
}, zp = { class: "sbsong-detail" }, Bp = { class: "sbsong-subhead" }, Vp = { class: "sbsong-detail-layout" }, Hp = { class: "sbsong-detail-cover" }, Up = ["data-sbsong-cover", "alt"], Wp = ["src", "alt"], Gp = {
	key: 2,
	class: "sbsong-no-cover",
	"aria-hidden": "true"
}, Kp = { class: "sbsong-detail-artist" }, qp = { class: "sbsong-detail-tags" }, Jp = { key: 0 }, Yp = { key: 1 }, Xp = {
	key: 0,
	class: "sbsong-detail-description"
}, Zp = {
	class: "sbsong-audio-box",
	id: "sbsong-audio-box"
}, Qp = {
	key: 0,
	controls: "",
	preload: "metadata",
	id: "sbsong-audio-player"
}, $p = { key: 1 }, em = { class: "sbsong-detail-actions" }, tm = ["data-id"], nm = ["data-id"], rm = ["href"], im = ["data-id"], am = ["data-id"], om = ["data-id"], sm = {
	key: 1,
	class: "sbsong-delete-confirm"
}, cm = ["data-id"], lm = {
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
			Dn(() => t.api.hydrateMedia());
		}), (t, n) => (B(), V("section", zp, [H("div", Bp, [H("h2", null, O(e.model.title), 1), n[0] ||= H("button", {
			type: "button",
			"data-sbsong-action": "close-detail"
		}, "Закрыть ×", -1)]), H("div", Vp, [H("div", Hp, [e.model.hasCover ? (B(), V("img", {
			key: 0,
			"data-sbsong-cover": e.model.id,
			alt: "Обложка песни " + e.model.title
		}, null, 8, Up)) : e.model.coverUrl ? (B(), V("img", {
			key: 1,
			src: e.model.coverUrl,
			alt: "Обложка песни " + e.model.title,
			style: { display: "block" }
		}, null, 8, Wp)) : (B(), V("span", Gp, "♫"))]), H("div", null, [
			H("p", Kp, O(e.model.artist), 1),
			H("p", qp, [e.model.genre ? (B(), V("span", Jp, O(e.model.genre), 1)) : G("", !0), e.model.album ? (B(), V("span", Yp, O(e.model.album), 1)) : G("", !0)]),
			e.model.description ? (B(), V("p", Xp, O(e.model.description), 1)) : G("", !0),
			H("div", Zp, [e.model.hasPlayableAudio ? (B(), V("audio", Qp)) : (B(), V("p", $p, "Аудио ещё не добавлено. Добавь первую версию в этой карточке."))]),
			U(Rp, {
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
			H("div", em, [
				H("button", {
					type: "button",
					class: "sbsong-main-btn",
					"data-sbsong-action": "share",
					"data-id": e.model.id
				}, "🔗 Поделиться ссылкой", 8, tm),
				e.model.hasAudio ? (B(), V("button", {
					key: 0,
					type: "button",
					"data-sbsong-action": "share-file",
					"data-id": e.model.id
				}, "Отправить аудиофайл", 8, nm)) : G("", !0),
				e.model.listenUrl ? (B(), V("a", {
					key: 1,
					href: e.model.listenUrl,
					target: "_blank",
					rel: "noopener noreferrer"
				}, "Открыть публичную запись ↗", 8, rm)) : G("", !0),
				H("button", {
					type: "button",
					"data-sbsong-action": "producer",
					"data-id": e.model.id
				}, "🎛 Мастер", 8, im),
				H("button", {
					type: "button",
					"data-sbsong-action": "edit",
					"data-id": e.model.id
				}, "Изменить", 8, am),
				H("button", {
					type: "button",
					class: "sbsong-danger",
					"data-sbsong-action": "delete",
					"data-id": e.model.id
				}, "Удалить", 8, om)
			]),
			e.model.confirmDelete ? (B(), V("div", sm, [
				n[1] ||= H("strong", null, "Удалить карточку вместе с локальными файлами?", -1),
				H("button", {
					type: "button",
					"data-sbsong-action": "delete-confirm",
					"data-id": e.model.id
				}, "Да, удалить", 8, cm),
				n[2] ||= H("button", {
					type: "button",
					"data-sbsong-action": "delete-cancel"
				}, "Отмена", -1)
			])) : G("", !0)
		])])]));
	}
};
// src/vue/account/legacySongDetailBridge.js
function um({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SONG_DETAIL, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-song-detail");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, lm, {
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
var dm = {
	id: "sbsong-form",
	class: "sbsong-form-panel"
}, fm = { class: "sbsong-subhead" }, pm = {
	id: "sbsong-save-form",
	class: "sbsong-form"
}, mm = { class: "sbsong-form-columns" }, hm = { class: "sbsong-field" }, gm = { class: "sbsong-artist-field" }, _m = {
	class: "sbsong-field",
	for: "sbsong-artist-input"
}, vm = ["aria-expanded"], ym = {
	id: "sbsong-artist-options",
	class: "sbsong-artist-options",
	role: "listbox",
	"aria-label": "Список артистов"
}, bm = ["onClick"], xm = {
	key: 0,
	class: "sbsong-artist-hint"
}, Sm = {
	key: 1,
	class: "sbsong-artist-hint"
}, Cm = { class: "sbsong-genre-field" }, wm = {
	class: "sbsong-field",
	for: "sbsong-genre-input"
}, Tm = ["aria-expanded"], Em = ["aria-expanded"], Dm = {
	id: "sbsong-genre-options",
	class: "sbsong-genre-options",
	role: "region",
	"aria-label": "Выбор жанра из Академии"
}, Om = { class: "sbsong-genre-picker-head" }, km = ["value"], Am = {
	id: "sbsong-genre-results",
	class: "sbsong-genre-results",
	role: "listbox",
	"aria-label": "Жанры и поджанры"
}, jm = ["aria-label"], Mm = { class: "sbsong-genre-group-title" }, Nm = ["onClick"], Pm = {
	key: 0,
	class: "sbsong-genre-hint"
}, Fm = { class: "sbsong-field" }, Im = { class: "sbsong-field" }, Lm = { class: "sbsong-form-columns" }, Rm = { class: "sbsong-field" }, zm = {
	class: "sbsong-cover-auto",
	"aria-live": "polite"
}, Bm = { id: "sbsong-cover-status" }, Vm = { class: "sbsong-form-columns" }, Hm = { class: "sbsong-field" }, Um = { class: "sbsong-field" }, Wm = { class: "sbsong-field" }, Gm = {
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
		let t = e, n = /* @__PURE__ */ j({
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
		return L(() => {
			document.addEventListener("pointerdown", x), Dn(() => t.api.hydrateCover());
		}), Sr(() => document.removeEventListener("pointerdown", x)), (t, d) => (B(), V("section", dm, [H("div", fm, [H("h2", null, O(e.model.editId ? "Изменить песню" : "Новая песня"), 1), d[16] ||= H("button", {
			type: "button",
			"data-sbsong-action": "cancel"
		}, "Закрыть ×", -1)]), H("form", pm, [
			H("div", mm, [
				H("label", hm, [d[17] ||= H("span", null, "Название *", -1), I(H("input", {
					"onUpdate:modelValue": d[0] ||= (e) => n.title = e,
					type: "text",
					name: "title",
					maxlength: "120",
					placeholder: "Название песни"
				}, null, 512), [[q, n.title]])]),
				H("div", gm, [
					H("label", _m, [d[18] ||= H("span", null, "Исполнитель / проект", -1), I(H("input", {
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
					}, null, 40, vm), [[q, n.artist]])]),
					H("div", { class: "sbsong-artist-shortcuts" }, [H("button", {
						type: "button",
						onClick: y
					}, "▾ Выбрать из списка"), H("button", {
						type: "button",
						onClick: g
					}, "+ Сохранить артиста")]),
					I(H("div", ym, [
						(B(!0), V(z, null, R(f.value, (e) => (B(), V("button", {
							key: e.name,
							type: "button",
							role: "option",
							class: "sbsong-artist-option",
							onClick: (t) => _(e.name)
						}, [H("strong", null, O(e.name), 1), H("small", null, O(e.origin), 1)], 8, bm))), 128)),
						p.value ? (B(), V("p", xm, "Уточни поиск, чтобы увидеть остальные варианты.")) : G("", !0),
						f.value.length ? G("", !0) : (B(), V("p", Sm, O(a.value.length ? "Совпадений нет. Нового артиста можно сохранить кнопкой выше." : "Список пуст. Введи имя и сохрани первого артиста."), 1))
					], 512), [[$a, r.value]])
				]),
				H("div", Cm, [
					H("label", wm, [d[19] ||= H("span", null, "Жанр", -1), I(H("input", {
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
					}, null, 40, Tm), [[q, n.genre]])]),
					H("button", {
						type: "button",
						class: "sbsong-genre-toggle",
						"aria-controls": "sbsong-genre-options",
						"aria-expanded": String(o.value),
						onClick: b
					}, "▾ Выбрать из Академии", 8, Em),
					I(H("div", Dm, [H("div", Om, [
						d[21] ||= H("label", { for: "sbsong-genre-family" }, "Направление", -1),
						I(H("select", {
							id: "sbsong-genre-family",
							"onUpdate:modelValue": d[9] ||= (e) => c.value = e,
							"aria-label": "Фильтр по направлению",
							onChange: d[10] ||= (e) => s.value = !0
						}, [d[20] ||= H("option", { value: "Все" }, "Все направления", -1), (B(!0), V(z, null, R(u.value, (e) => (B(), V("option", {
							key: e,
							value: e
						}, O(e), 9, km))), 128))], 544), [[J, c.value]]),
						H("small", null, O(m.value.length) + " из " + O(l.value.length), 1)
					]), H("div", Am, [(B(!0), V(z, null, R(h.value, (e) => (B(), V("div", {
						key: e.name,
						class: "sbsong-genre-group",
						role: "group",
						"aria-label": e.name
					}, [H("div", Mm, [W(O(e.name) + " ", 1), H("span", null, O(e.genres.length), 1)]), (B(!0), V(z, null, R(e.genres, (e) => (B(), V("button", {
						key: e.id,
						type: "button",
						class: "sbsong-genre-option",
						role: "option",
						onClick: (t) => v(e.name)
					}, [H("span", null, O(e.name), 1)], 8, Nm))), 128))], 8, jm))), 128)), m.value.length ? G("", !0) : (B(), V("p", Pm, O(l.value.length ? "Не найдено. Можно ввести свой жанр вручную." : "Каталог Академии пока недоступен. Введи жанр вручную."), 1))])], 512), [[$a, o.value]])
				]),
				H("label", Fm, [d[22] ||= H("span", null, "Альбом / релиз", -1), I(H("input", {
					"onUpdate:modelValue": d[11] ||= (e) => n.album = e,
					type: "text",
					name: "album",
					maxlength: "120",
					placeholder: "Название альбома"
				}, null, 512), [[q, n.album]])])
			]),
			H("label", Im, [d[23] ||= H("span", null, "Описание", -1), I(H("textarea", {
				"onUpdate:modelValue": d[12] ||= (e) => n.description = e,
				name: "description",
				maxlength: "700",
				rows: "3",
				placeholder: "История, настроение или заметки"
			}, null, 512), [[q, n.description]])]),
			H("div", Lm, [H("label", Rm, [H("span", null, O(e.model.hasAudio ? "Добавить новую аудиоверсию" : "Загрузить аудиофайл (MP3, M4A, WAV и другие)"), 1), d[24] ||= H("input", {
				name: "audio",
				type: "file",
				accept: "audio/*,.mp3,.wav,.wave,.m4a,.aac,.flac,.ogg,.opus"
			}, null, -1)]), d[25] ||= H("label", { class: "sbsong-field" }, [H("span", null, "Обложка вручную (необязательно)"), H("input", {
				name: "cover",
				type: "file",
				accept: "image/png,image/jpeg,image/webp,image/gif"
			})], -1)]),
			H("div", zm, [d[28] ||= H("div", { class: "sbsong-cover-preview-figure" }, [H("img", {
				id: "sbsong-cover-preview-img",
				alt: "Предпросмотр обложки",
				hidden: ""
			}), H("span", {
				id: "sbsong-cover-preview-placeholder",
				"aria-hidden": "true"
			}, "♫")], -1), H("div", null, [
				d[26] ||= H("strong", null, "Обложка из аудиофайла", -1),
				H("p", Bm, O(e.model.hasCover ? "Загружаю сохранённую обложку…" : "Выбери MP3, M4A или FLAC — попробую найти обложку автоматически"), 1),
				d[27] ||= H("small", null, "Ручная обложка имеет приоритет, если ты её выберешь.", -1)
			])]),
			H("div", Vm, [
				H("label", Hm, [d[29] ||= H("span", null, "Прямая ссылка на MP3 (если есть)", -1), I(H("input", {
					"onUpdate:modelValue": d[13] ||= (e) => n.audioUrl = e,
					type: "text",
					name: "audioUrl",
					maxlength: "700",
					placeholder: "https://.../song.mp3"
				}, null, 512), [[q, n.audioUrl]])]),
				H("label", Um, [d[30] ||= H("span", null, "Публичная страница песни", -1), I(H("input", {
					"onUpdate:modelValue": d[14] ||= (e) => n.listenUrl = e,
					type: "text",
					name: "listenUrl",
					maxlength: "700",
					placeholder: "https://suno.com/..."
				}, null, 512), [[q, n.listenUrl]])]),
				H("label", Wm, [d[31] ||= H("span", null, "Публичная обложка (по желанию)", -1), I(H("input", {
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
function Km({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SONG_EDITOR, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-song-editor");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, Gm, {
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
var qm = {
	id: "sbsong-artist-manager",
	class: "sbsong-artist-manager",
	"data-sb-vue-artist-manager": ""
}, Jm = {
	key: 0,
	class: "sbsong-artist-hint"
}, Ym = { id: "sbsong-artist-manager-results" }, Xm = ["data-id", "aria-label"], Zm = {
	key: 0,
	class: "sbsong-artist-hint"
}, Qm = {
	__name: "ArtistManager",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ P(t.model.filter || ""), r = (e) => String(e || "").normalize("NFKC").toLocaleLowerCase("ru"), i = K(() => t.model.artists.filter((e) => r(e.name).includes(r(n.value))));
		return (t, r) => (B(), V("section", qm, [
			r[1] ||= H("div", { class: "sbsong-subhead" }, [H("h2", null, "Мои артисты"), H("button", {
				type: "button",
				"data-sbsong-action": "artists-manage"
			}, "Закрыть ×")], -1),
			r[2] ||= H("p", null, "Создавай свой список исполнителей и музыкальных проектов. Артисты из «ДНК артиста» и сохранённых песен также доступны при выборе. Удаление из списка не меняет существующие песни.", -1),
			e.model.dnaCount ? (B(), V("p", Jm, " Профилей ДНК артиста доступно для выбора: " + O(e.model.dnaCount) + ". Они не удаляются при изменении этого списка. ", 1)) : G("", !0),
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
			H("div", Ym, [(B(!0), V(z, null, R(i.value, (e) => (B(), V("div", {
				key: e.id,
				class: "sbsong-artist-entry"
			}, [H("span", null, O(e.name), 1), H("button", {
				type: "button",
				"data-sbsong-action": "artist-remove",
				"data-id": e.id,
				"aria-label": "Удалить артиста " + e.name
			}, "Удалить", 8, Xm)]))), 128)), i.value.length ? G("", !0) : (B(), V("p", Zm, O(e.model.artists.length ? "Ничего не найдено." : "Пока нет добавленных вручную артистов."), 1))])
		]));
	}
};
// src/vue/account/legacyArtistManagerBridge.js
function $m({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ARTIST_MANAGER, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-artist-manager");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, Qm, { model: o });
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
var eh = { key: 0 }, th = {
	key: 0,
	class: "sb-dna-grid"
}, nh = ["data-id"], rh = { class: "sb-dna-cardimg" }, ih = ["src"], ah = {
	key: 1,
	class: "sb-dna-empty"
}, oh = {
	key: 1,
	class: "sb-dna-detail"
}, sh = { class: "sb-dna-actions" }, ch = ["data-id"], lh = ["data-id"], uh = ["data-id"], dh = { class: "sb-dna-hero" }, fh = { class: "sb-dna-portrait" }, ph = ["src"], mh = { class: "sb-dna-facts" }, hh = {
	key: 0,
	class: "sb-dna-restrictions"
}, gh = { class: "sb-dna-descr" }, _h = { class: "sb-dna-style" }, vh = { class: "sb-dna-actions" }, yh = ["data-id"], bh = ["data-id"], xh = { class: "sb-dna-related" }, Sh = ["data-id"], Ch = { key: 1 }, wh = {
	__name: "ArtistDNA",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => e.model.detail ? (B(), V("div", oh, [
			H("div", sh, [
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
				}, "В Suno Studio", 8, ch),
				H("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "dna-edit",
					"data-id": e.model.detail.id
				}, "Изменить", 8, lh),
				H("button", {
					type: "button",
					class: "btn danger small",
					"data-action": "dna-delete",
					"data-id": e.model.detail.id
				}, "Удалить", 8, uh)
			]),
			H("div", dh, [H("div", fh, [e.model.detail.portrait ? (B(), V("img", {
				key: 0,
				src: e.model.detail.portrait,
				alt: "Портрет артиста",
				loading: "lazy"
			}, null, 8, ph)) : (B(), V(z, { key: 1 }, [W("♫")], 64))]), H("div", null, [
				n[2] ||= H("span", null, "МУЗЫКАЛЬНАЯ ИДЕНТИЧНОСТЬ", -1),
				H("h2", null, O(e.model.detail.name), 1),
				H("p", null, O(e.model.detail.subtitle), 1)
			])]),
			H("div", mh, [(B(!0), V(z, null, R(e.model.detail.facts, (e) => (B(), V("div", {
				key: e.label,
				class: "sb-dna-fact"
			}, [H("span", null, O(e.label), 1), H("strong", null, O(e.value), 1)]))), 128))]),
			(B(!0), V(z, null, R(e.model.detail.textFields, (e) => (B(), V("section", {
				key: e.label,
				class: "sb-dna-descr"
			}, [H("h3", null, O(e.label), 1), H("p", null, O(e.value), 1)]))), 128)),
			e.model.detail.forbids.length ? (B(), V("div", hh, [n[3] ||= H("strong", null, "Запреты:", -1), (B(!0), V(z, null, R(e.model.detail.forbids, (e) => (B(), V("span", { key: e }, O(e), 1))), 128))])) : G("", !0),
			H("section", gh, [
				n[4] ||= H("h3", null, "Промпт для Suno Style", -1),
				H("div", _h, O(e.model.detail.style), 1),
				H("div", vh, [H("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "dna-copy",
					"data-id": e.model.detail.id
				}, "Копировать Style", 8, yh), H("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "dna-apply",
					"data-id": e.model.detail.id
				}, "Применить в Suno Studio", 8, bh)])
			]),
			H("div", xh, [H("h3", null, "Связанные паспорта треков (" + O(e.model.detail.related.length) + ")", 1), e.model.detail.related.length ? (B(!0), V(z, { key: 0 }, R(e.model.detail.related, (e) => (B(), V("button", {
				key: e.id,
				type: "button",
				class: "sb-dna-tracklink",
				"data-action": "dna-track",
				"data-id": e.id
			}, [H("strong", null, O(e.title), 1), H("span", null, O(e.status) + " →", 1)], 8, Sh))), 128)) : (B(), V("p", Ch, "Пока нет привязанных треков. В «Паспорте трека» можно выбрать этого артиста."))])
		])) : (B(), V("div", eh, [e.model.profiles.length ? (B(), V("div", th, [(B(!0), V(z, null, R(e.model.profiles, (e) => (B(), V("button", {
			key: e.id,
			type: "button",
			class: "sb-dna-card",
			"data-action": "dna-open",
			"data-id": e.id
		}, [
			H("div", rh, [e.portrait ? (B(), V("img", {
				key: 0,
				src: e.portrait,
				alt: "",
				loading: "lazy"
			}, null, 8, ih)) : (B(), V(z, { key: 1 }, [W("♫")], 64))]),
			H("div", null, [
				H("strong", null, O(e.name), 1),
				H("span", null, O(e.genre), 1),
				H("small", null, O(e.timbre), 1)
			]),
			n[0] ||= H("span", { class: "sb-dna-arrow" }, "→", -1)
		], 8, nh))), 128))])) : (B(), V("div", ah, " Здесь будут музыкальные персонажи со своим вокалом, инструментами, стилем и визуальным образом. Создай первый профиль. "))]));
	}
};
// src/vue/account/legacyArtistDNABridge.js
function Th({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_DNA, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-dna-view");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, wh, { model: o });
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
var Eh = {
	id: "dna-editor",
	class: "panel sb-dna-editor",
	"data-sb-vue-dna-editor": ""
}, Dh = { class: "sb-dna-formheader" }, Oh = { class: "sb-dna-fields" }, kh = { class: "field" }, Ah = { class: "field" }, jh = ["value"], Mh = { class: "field" }, Nh = ["value"], Ph = { class: "field" }, Fh = { class: "field" }, Ih = { class: "field" }, Lh = {
	key: 0,
	class: "sb-dna-fields"
}, Rh = { class: "field" }, zh = { class: "field" }, Bh = { class: "field" }, Vh = ["for"], Hh = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"rows"
], Uh = { class: "sb-dna-checkboxes" }, Wh = ["id", "onUpdate:modelValue"], Gh = { class: "field" }, Kh = ["for"], qh = [
	"id",
	"onUpdate:modelValue",
	"rows",
	"maxlength"
], Jh = { class: "field" }, Yh = { class: "sb-dna-previewbox" }, Xh = { id: "dna-style-preview" }, Zh = { id: "dna-style-count" }, Qh = {
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
		let t = e, n = /* @__PURE__ */ j({ ...t.model.fields }), r = K(() => t.api.stylePreview(n)), i = [
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
		return (t, s) => (B(), V("div", Eh, [
			H("div", Dh, [H("div", null, [H("h2", null, O(e.model.editing ? "Редактирование ДНК" : "Новый артист"), 1), s[10] ||= H("p", null, "Сохрани характер звучания — он будет доступен в Suno Studio и «Паспорте трека».", -1)]), s[11] ||= H("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "dna-cancel"
			}, "Закрыть", -1)]),
			H("div", Oh, [
				H("div", kh, [s[12] ||= H("label", { for: "dna-name" }, "Имя артиста *", -1), I(H("input", {
					id: "dna-name",
					"onUpdate:modelValue": s[0] ||= (e) => n.name = e,
					maxlength: "120",
					placeholder: "Название музыкального проекта"
				}, null, 512), [[q, n.name]])]),
				H("div", Ah, [s[13] ||= H("label", { for: "dna-project" }, "Связанный проект", -1), I(H("select", {
					id: "dna-project",
					"onUpdate:modelValue": s[1] ||= (e) => n.projectId = e
				}, [(B(!0), V(z, null, R(e.model.projects, (e) => (B(), V("option", {
					key: e.id,
					value: e.id
				}, O(e.title), 9, jh))), 128))], 512), [[J, n.projectId]])]),
				H("div", Mh, [s[14] ||= H("label", { for: "dna-genre" }, "Основной жанр", -1), I(H("select", {
					id: "dna-genre",
					"onUpdate:modelValue": s[2] ||= (e) => n.genre = e
				}, [(B(!0), V(z, null, R(e.model.genres, (e) => (B(), V("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, Nh))), 128))], 512), [[J, n.genre]])]),
				H("div", Ph, [s[15] ||= H("label", { for: "dna-othergenres" }, "Дополнительные жанры", -1), I(H("input", {
					id: "dna-othergenres",
					"onUpdate:modelValue": s[3] ||= (e) => n.otherGenres = e,
					maxlength: "240",
					placeholder: "Например, pop, R&B, electropop"
				}, null, 512), [[q, n.otherGenres]])]),
				H("div", Fh, [s[17] ||= H("label", { for: "dna-vocal" }, "Тип вокала", -1), I(H("select", {
					id: "dna-vocal",
					"onUpdate:modelValue": s[4] ||= (e) => n.vocal = e
				}, [...s[16] ||= [
					H("option", { value: "male" }, "Мужской", -1),
					H("option", { value: "female" }, "Женский", -1),
					H("option", { value: "duet" }, "Дуэт", -1)
				]], 512), [[J, n.vocal]])]),
				H("div", Ih, [s[19] ||= H("label", { for: "dna-language" }, "Язык песни", -1), I(H("select", {
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
			(B(), V(z, null, R(i, (e) => (B(), V(z, { key: e.id }, [e.id === "mood" ? (B(), V("div", Lh, [H("div", Rh, [s[20] ||= H("label", { for: "dna-tempo-min" }, "Темп от (BPM)", -1), I(H("input", {
				id: "dna-tempo-min",
				"onUpdate:modelValue": s[6] ||= (e) => n.tempoMin = e,
				maxlength: "3",
				placeholder: "Например, 90"
			}, null, 512), [[q, n.tempoMin]])]), H("div", zh, [s[21] ||= H("label", { for: "dna-tempo-max" }, "Темп до (BPM)", -1), I(H("input", {
				id: "dna-tempo-max",
				"onUpdate:modelValue": s[7] ||= (e) => n.tempoMax = e,
				maxlength: "3",
				placeholder: "Например, 120"
			}, null, 512), [[q, n.tempoMax]])])])) : G("", !0), H("div", Bh, [H("label", { for: "dna-" + e.id }, O(e.label), 9, Vh), I(H("textarea", {
				id: "dna-" + e.id,
				"onUpdate:modelValue": (t) => n[e.key] = t,
				maxlength: e.max,
				rows: e.rows
			}, null, 8, Hh), [[q, n[e.key]]])])], 64))), 64)),
			s[25] ||= H("h3", { class: "sb-dna-formsection" }, "Запреты и ограничения", -1),
			H("div", Uh, [(B(), V(z, null, R(a, (e) => H("label", { key: e.id }, [I(H("input", {
				id: "dna-" + e.id,
				"onUpdate:modelValue": (t) => n[e.key] = t,
				type: "checkbox"
			}, null, 8, Wh), [[Fo, n[e.key]]]), W(" " + O(e.label), 1)])), 64))]),
			H("div", Gh, [s[22] ||= H("label", { for: "dna-extra" }, "Дополнительные требования к аранжировке", -1), I(H("textarea", {
				id: "dna-extra",
				"onUpdate:modelValue": s[8] ||= (e) => n.extra = e,
				rows: "3",
				maxlength: "650"
			}, null, 512), [[q, n.extra]])]),
			s[26] ||= H("h3", { class: "sb-dna-formsection" }, "Творческий образ", -1),
			(B(), V(z, null, R(o, (e) => H("div", {
				key: e.id,
				class: "field"
			}, [H("label", { for: "dna-" + e.id }, O(e.label), 9, Kh), I(H("textarea", {
				id: "dna-" + e.id,
				"onUpdate:modelValue": (t) => n[e.key] = t,
				rows: e.rows,
				maxlength: e.max
			}, null, 8, qh), [[q, n[e.key]]])])), 64)),
			H("div", Jh, [s[23] ||= H("label", { for: "dna-portrait" }, "Ссылка на портрет (HTTPS)", -1), I(H("input", {
				id: "dna-portrait",
				"onUpdate:modelValue": s[9] ||= (e) => n.portrait = e,
				maxlength: "2000",
				placeholder: "https://…"
			}, null, 512), [[q, n.portrait]])]),
			s[27] ||= H("h3", { class: "sb-dna-formsection" }, "Промпт ДНК для Suno", -1),
			H("div", Yh, [H("div", Xh, O(r.value), 1), H("span", Zh, O(r.value.length) + " / 1000", 1)]),
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
function $h({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_DNA_EDITOR, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-dna-editor");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, Qh, {
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
var eg = {
	id: "sbs-page",
	class: "sbs-page",
	"data-sb-vue-settings": ""
}, tg = { class: "sbs-layout" }, ng = { class: "sbs-main-column" }, rg = { class: "sbs-panel" }, ig = {
	class: "sbs-field sbs-theme-field",
	for: "sbs-theme"
}, ag = ["value"], og = ["for"], sg = { class: "sbs-option-text" }, cg = { class: "sbs-switch" }, lg = [
	"id",
	"onUpdate:modelValue",
	"data-sbs-setting",
	"aria-label"
], ug = { class: "sbs-panel" }, dg = {
	class: "sbs-field",
	for: "sbs-start"
}, fg = ["value"], pg = { class: "sbs-panel" }, mg = {
	class: "sbs-field",
	for: "sbs-name"
}, hg = { class: "sbs-side-column" }, gg = { class: "sbs-panel sbs-reset-panel" }, _g = {
	key: 0,
	class: "sbs-confirm"
}, vg = {
	key: 1,
	type: "button",
	class: "sbs-secondary",
	"data-sbs-action": "reset"
}, yg = ["hidden"], bg = {
	__name: "AccountSettings",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ j({ ...t.model.settings }), r = /* @__PURE__ */ j({ value: t.model.name }), i = [
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
			t.model.resetPending && Dn(() => document.querySelector("#sb-vue-account-settings .sbs-confirm-button")?.focus());
		}), (t, a) => (B(), V("section", eg, [
			a[17] ||= da("<header class=\"sbs-heading\"><button type=\"button\" class=\"sbs-back\" data-sbs-action=\"close\">← Вернуться в кабинет</button><div class=\"sbs-eyebrow\">SUNOBOOM · ЛИЧНЫЙ КАБИНЕТ</div><div class=\"sbs-heading-row\"><div><h1>Настройки</h1><p>Настрой музыкальную мастерскую под себя. Изменения применяются сразу и сохраняются в этом браузере.</p></div><span class=\"sbs-badge\">⚙️ ПЕРСОНАЛИЗАЦИЯ</span></div></header>", 1),
			H("div", tg, [H("div", ng, [
				H("section", rg, [
					a[5] ||= H("div", { class: "sbs-panel-head" }, [H("span", {
						class: "sbs-symbol",
						"aria-hidden": "true"
					}, "🎨"), H("div", null, [H("h2", null, "Внешний вид"), H("p", null, "Удобная работа на компьютере и телефоне")])], -1),
					H("label", ig, [a[3] ||= H("span", null, "Тема приложения", -1), I(H("select", {
						id: "sbs-theme",
						"onUpdate:modelValue": a[0] ||= (e) => n.theme = e,
						"data-sbs-setting": "theme",
						"aria-label": "Тема приложения"
					}, [(B(!0), V(z, null, R(e.model.themes, (e) => (B(), V("option", {
						key: e.id,
						value: e.id
					}, O(e.title), 9, ag))), 128))], 512), [[J, n.theme]])]),
					a[6] ||= H("p", { class: "sbs-help sbs-theme-help" }, "Выбери палитру: тёмную, светлую, системную или одну из шести цветных тем. Изменения сохраняются.", -1),
					(B(), V(z, null, R(i, (e) => H("label", {
						key: e.key,
						class: "sbs-option",
						for: "sbs-" + e.key
					}, [H("span", sg, [H("strong", null, O(e.title), 1), H("small", null, O(e.desc), 1)]), H("span", cg, [I(H("input", {
						id: "sbs-" + e.key,
						"onUpdate:modelValue": (t) => n[e.key] = t,
						type: "checkbox",
						"data-sbs-setting": e.key,
						role: "switch",
						"aria-label": e.title
					}, null, 8, lg), [[Fo, n[e.key]]]), a[4] ||= H("span", {
						class: "sbs-switch-track",
						"aria-hidden": "true"
					}, null, -1)])], 8, og)), 64))
				]),
				H("section", ug, [
					a[8] ||= H("div", { class: "sbs-panel-head" }, [H("span", {
						class: "sbs-symbol",
						"aria-hidden": "true"
					}, "🏠"), H("div", null, [H("h2", null, "При открытии сайта"), H("p", null, "Выбери стартовый раздел SUNOBOOM")])], -1),
					H("label", dg, [a[7] ||= H("span", null, "Стартовая страница", -1), I(H("select", {
						id: "sbs-start",
						"onUpdate:modelValue": a[1] ||= (e) => n.startPage = e,
						"data-sbs-setting": "startPage"
					}, [(B(!0), V(z, null, R(e.model.pages, (e) => (B(), V("option", {
						key: e.id,
						value: e.id
					}, O(e.title), 9, fg))), 128))], 512), [[J, n.startPage]])]),
					a[9] ||= H("p", { class: "sbs-help" }, "Применяется при следующем открытии или обновлении сайта. Ссылки на конкретные карточки жанров сохраняют свой переход.", -1)
				]),
				H("section", pg, [
					a[11] ||= H("div", { class: "sbs-panel-head" }, [H("span", {
						class: "sbs-symbol",
						"aria-hidden": "true"
					}, "👤"), H("div", null, [H("h2", null, "Профиль"), H("p", null, "Имя отображается только в локальном кабинете")])], -1),
					H("label", mg, [a[10] ||= H("span", null, "Имя в кабинете", -1), I(H("input", {
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
			]), H("aside", hg, [a[16] ||= da("<section class=\"sbs-panel\"><div class=\"sbs-panel-head\"><span class=\"sbs-symbol\" aria-hidden=\"true\">🔒</span><div><h2>Данные и приватность</h2></div></div><p class=\"sbs-info\">Сейчас SUNOBOOM работает как локальный прототип: твои проекты и настройки сохраняются в браузере. Синхронизации между устройствами пока нет.</p><p class=\"sbs-info\">GitHub Pages остаётся публичной демонстрационной площадкой — полноценный закрытый вход по приглашениям ещё не подключён.</p><button type=\"button\" class=\"sbs-secondary\" data-sbs-action=\"backup\">↓ Перейти к резервным копиям</button></section>", 1), H("section", gg, [
				a[14] ||= H("div", { class: "sbs-panel-head" }, [H("span", {
					class: "sbs-symbol",
					"aria-hidden": "true"
				}, "↺"), H("div", null, [H("h2", null, "Сброс предпочтений")])], -1),
				a[15] ||= H("p", { class: "sbs-info" }, "Вернуть стандартные параметры отображения. Песни, проекты, избранное и имя профиля не удаляются.", -1),
				e.model.resetPending ? (B(), V("div", _g, [...a[13] ||= [H("strong", null, "Сбросить настройки интерфейса?", -1), H("div", null, [H("button", {
					type: "button",
					class: "sbs-secondary",
					"data-sbs-action": "cancel-reset"
				}, "Отмена"), H("button", {
					type: "button",
					class: "sbs-confirm-button",
					"data-sbs-action": "confirm-reset"
				}, "Да, сбросить")], -1)]])) : (B(), V("button", vg, "Сбросить настройки"))
			])])]),
			H("p", {
				id: "sbs-message",
				class: "sbs-message",
				role: "status",
				"aria-live": "polite",
				hidden: !e.model.message
			}, O(e.model.message), 9, yg)
		]));
	}
};
// src/vue/account/legacyAccountSettingsBridge.js
function xg({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SETTINGS, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-account-settings");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, bg, { model: o });
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
var Sg = {
	class: "sbp-layout",
	"data-sb-vue-player-lab": ""
}, Cg = {
	class: "sbp-main",
	"aria-label": "Плеер"
}, wg = {
	class: "sbp-bars",
	"aria-hidden": "true"
}, Tg = { class: "sbp-title-area" }, Eg = {
	id: "sbp-now-tag",
	class: "sbp-now-tag"
}, Dg = { id: "sbp-title" }, Og = { id: "sbp-artist" }, kg = {
	id: "sbp-counter",
	class: "sbp-counter"
}, Ag = { class: "sbp-progress" }, jg = ["value", "disabled"], Mg = { class: "sbp-times" }, Ng = { id: "sbp-time-current" }, Pg = { id: "sbp-time-total" }, Fg = { class: "sbp-transport" }, Ig = ["aria-pressed"], Lg = ["aria-label", "disabled"], Rg = ["title", "aria-label"], zg = { class: "sbp-extras" }, Bg = { class: "sbp-volume" }, Vg = {
	key: 0,
	class: "sbp-ios-volume"
}, Hg = ["value"], Ug = { id: "sbp-volume-label" }, Wg = {
	class: "sbp-speed",
	for: "sbp-rate"
}, Gg = ["value"], Kg = ["value"], qg = { class: "sbp-side" }, Jg = { class: "sbp-side-head" }, Yg = { id: "sbp-list-count" }, Xg = ["disabled"], Zg = {
	class: "sbp-track-list",
	id: "sbp-list",
	"aria-label": "Список треков"
}, Qg = ["data-sbp-item"], $g = ["data-index", "aria-label"], e_ = { class: "sbp-track-index" }, t_ = { class: "sbp-track-meta" }, n_ = { class: "sbp-track-duration" }, r_ = ["data-index", "aria-label"], i_ = {
	key: 0,
	class: "sbp-empty"
}, a_ = {
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
		L(() => {
			window.addEventListener("sunoboom:player-lab-update", r), r();
		}), Sr(() => window.removeEventListener("sunoboom:player-lab-update", r));
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
		return (e, t) => (B(), V("div", Sg, [H("section", Cg, [
			H("div", { class: D(["sbp-art", { "is-playing": n.value.playing }]) }, [
				t[0] ||= H("div", { class: "sbp-art-orb" }, "♫", -1),
				H("div", wg, [(B(!0), V(z, null, R(F(i), (e) => (B(), V("i", {
					key: e.index,
					style: E({
						"--sbp-i": e.index,
						"--sbp-h": e.height
					})
				}, null, 4))), 128))]),
				t[1] ||= H("span", null, "SONIC LAB / PRIVATE PREVIEW", -1)
			], 2),
			H("div", Tg, [H("div", null, [
				H("div", Eg, O(n.value.nowTag), 1),
				H("h2", Dg, O(n.value.title), 1),
				H("p", Og, O(n.value.artist), 1)
			]), H("span", kg, O(n.value.counter), 1)]),
			H("div", Ag, [
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
				}, null, 12, jg),
				H("div", Mg, [H("span", Ng, O(n.value.currentTime), 1), H("span", Pg, O(n.value.totalTime), 1)])
			]),
			H("div", Fg, [
				H("button", {
					type: "button",
					class: D(["sbp-secondary", { "is-on": n.value.shuffle }]),
					id: "sbp-shuffle",
					"data-sbp-action": "shuffle",
					"aria-label": "Случайный порядок",
					"aria-pressed": String(n.value.shuffle),
					title: "Случайный порядок"
				}, "⤨", 10, Ig),
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
				}, O(n.value.playing ? "❚❚" : "▶"), 9, Lg),
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
				}, O(n.value.repeat === "one" ? "↻₁" : "↻"), 11, Rg)
			]),
			H("div", zg, [H("div", Bg, [n.value.ios ? (B(), V("span", Vg, "📱 Громкость регулируется кнопками телефона")) : (B(), V(z, { key: 1 }, [
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
				}, null, 8, Hg),
				H("output", Ug, O(n.value.volume) + "%", 1)
			], 64))]), H("label", Wg, [t[7] ||= W(" Скорость ", -1), H("select", {
				id: "sbp-rate",
				"aria-label": "Скорость воспроизведения",
				value: n.value.rate
			}, [(B(), V(z, null, R(a, (e) => H("option", {
				key: e,
				value: e
			}, O(e) + "×", 9, Kg)), 64))], 8, Gg)])]),
			I(H("div", {
				class: "sbp-message",
				id: "sbp-message",
				role: "status",
				"aria-live": "polite"
			}, O(n.value.message), 513), [[$a, n.value.message]])
		]), H("aside", qg, [
			H("div", Jg, [H("div", null, [t[8] ||= H("h2", null, "Очередь воспроизведения", -1), H("small", Yg, O(n.value.count) + " " + O(n.value.count === 1 ? "трек" : n.value.count > 1 && n.value.count < 5 ? "трека" : "треков"), 1)]), H("button", {
				type: "button",
				class: "sbp-clear",
				"data-sbp-action": "clear",
				id: "sbp-clear",
				disabled: !n.value.count
			}, "Очистить", 8, Xg)]),
			t[9] ||= da("<div class=\"sbp-dropzone\" id=\"sbp-dropzone\"><div class=\"sbp-drop-icon\">↥</div><strong>Загрузи свои треки</strong><p>MP3, WAV, M4A, AAC, OGG, FLAC — если формат поддерживается браузером. Файлы никуда не отправляются.</p><label class=\"sbp-upload-label\" for=\"sbp-file\">Выбрать аудиофайлы</label><input id=\"sbp-file\" type=\"file\" accept=\"audio/*,.mp3,.m4a,.aac,.wav,.ogg,.flac,.opus\" multiple></div><div class=\"sbp-demo-box\"><div><strong>Нет аудиофайлов?</strong><p>Создать 3 коротких оригинальных демо-сигнала для проверки управления.</p></div><button type=\"button\" data-sbp-action=\"demo\" id=\"sbp-demo\">+ Демо-треки</button></div>", 2),
			H("div", Zg, [(B(!0), V(z, null, R(n.value.tracks, (e) => (B(), V("article", {
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
				}, [H("span", e_, O(e.playLabel), 1), H("span", t_, [H("strong", null, O(e.name), 1), H("small", null, O(e.artist) + " · " + O(e.sourceLabel), 1)])], 8, $g),
				H("span", n_, O(e.durationLabel), 1),
				H("button", {
					type: "button",
					class: "sbp-track-remove",
					"data-sbp-action": "remove",
					"data-index": e.index,
					title: "Удалить из списка",
					"aria-label": "Удалить " + e.name
				}, "×", 8, r_)
			], 10, Qg))), 128)), n.value.tracks.length ? G("", !0) : (B(), V("div", i_, " Плейлист пока пуст. Добавь MP3 или нажми «Демо-треки», чтобы начать тест. "))])
		])]));
	}
};
// src/vue/player/legacyPlayerLabBridge.js
function o_({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PLAYER_LAB, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-player-lab");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, a_, {
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
var s_ = { class: "sbab-files" }, c_ = ["data-sbab-card"], l_ = { class: "sbab-file-top" }, u_ = { class: "sbab-side-label" }, d_ = ["id"], f_ = ["id"], p_ = ["id"], m_ = { class: "sbab-file-bottom" }, h_ = ["for"], g_ = ["id", "data-sbab-file"], __ = ["data-side", "disabled"], v_ = ["id"], y_ = { class: "sbab-console" }, b_ = { class: "sbab-console-top" }, x_ = { id: "sbab-active-label" }, S_ = { class: "sbab-wave" }, C_ = {
	class: "sbab-wave-bars",
	"aria-hidden": "true"
}, w_ = {
	class: "sbab-toggle",
	role: "group",
	"aria-label": "Выбор версии для прослушивания"
}, T_ = ["data-side", "aria-pressed"], E_ = { class: "sbab-scrub" }, D_ = ["value", "disabled"], O_ = { class: "sbab-times" }, k_ = { id: "sbab-current" }, A_ = { id: "sbab-duration" }, j_ = { class: "sbab-transport" }, M_ = ["disabled", "aria-label"], N_ = { class: "sbab-clip" }, P_ = { class: "sbab-clip-actions" }, F_ = {
	type: "button",
	"data-sbab-action": "mark-start"
}, I_ = { id: "sbab-start" }, L_ = {
	type: "button",
	"data-sbab-action": "mark-end"
}, R_ = { id: "sbab-end" }, z_ = ["aria-pressed", "aria-label"], B_ = { class: "sbab-volume" }, V_ = { key: 0 }, H_ = ["for"], U_ = [
	"id",
	"data-sbab-vol",
	"value"
], W_ = ["hidden"], G_ = { class: "sbab-review" }, K_ = { class: "sbab-rating-grid" }, q_ = { class: "sbab-rating-label" }, J_ = [
	"data-sbab-score",
	"aria-label",
	"value"
], Y_ = ["value"], X_ = { class: "sbab-note-grid" }, Z_ = ["for"], Q_ = [
	"id",
	"data-sbab-note",
	"placeholder",
	"value"
], $_ = {
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
		return L(() => {
			window.addEventListener("sunoboom:player-ab-update", o), o();
		}), Sr(() => window.removeEventListener("sunoboom:player-ab-update", o)), (e, t) => (B(), V("section", {
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
			H("div", s_, [(B(), V(z, null, R(r, (e) => H("div", {
				key: e,
				class: D(["sbab-file-card", [e === "A" ? "sbab-card-a" : "sbab-card-b", { "sbab-active-card": n.value.active === e }]]),
				"data-sbab-card": e
			}, [
				H("div", l_, [H("span", u_, "ВЕРСИЯ " + O(e), 1), H("span", {
					class: "sbab-loaded",
					id: "sbab-ready-" + e
				}, O(n.value.files[e].ready ? "Файл добавлен" : "Ожидает файл"), 9, d_)]),
				H("strong", {
					class: "sbab-filename",
					id: "sbab-name-" + e
				}, O(n.value.files[e].name), 9, f_),
				H("p", {
					class: "sbab-filesub",
					id: "sbab-info-" + e
				}, O(n.value.files[e].info), 9, p_),
				H("div", m_, [
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
					})], -1), W(" " + O(n.value.files[e].ready ? "Заменить файл" : "Выбрать файл"), 1)], 8, h_),
					H("input", {
						type: "file",
						id: "sbab-file-" + e,
						accept: "audio/*,.mp3,.wav,.m4a,.aac,.ogg,.flac,.opus",
						"data-sbab-file": e
					}, null, 8, g_),
					H("button", {
						type: "button",
						"data-sbab-action": "remove",
						"data-side": e,
						class: "sbab-remove",
						disabled: !n.value.files[e].ready
					}, "Удалить", 8, __),
					H("span", {
						class: "sbab-length",
						id: "sbab-length-" + e
					}, O(n.value.files[e].duration), 9, v_)
				])
			], 10, c_)), 64))]),
			t[17] ||= H("div", { class: "sbab-demo-row" }, [H("p", null, "Для первого теста можно создать два разных оригинальных коротких аудиофрагмента."), H("button", {
				type: "button",
				"data-sbab-action": "demo"
			}, "Создать демо A и B")], -1),
			H("div", y_, [
				H("div", b_, [t[1] ||= H("span", { class: "sbab-kicker" }, "АКТИВНОЕ ПРОСЛУШИВАНИЕ", -1), H("span", x_, "Версия " + O(n.value.active) + O(n.value.playing ? " · Воспроизведение" : ""), 1)]),
				H("div", S_, [H("div", C_, [(B(!0), V(z, null, R(F(a), (e, t) => (B(), V("i", {
					key: t,
					style: E({ "--bar-height": e })
				}, null, 4))), 128))]), t[2] ||= H("div", { class: "sbab-wave-center" }, "A / B", -1)]),
				H("div", w_, [(B(), V(z, null, R(r, (e) => H("button", {
					key: e,
					type: "button",
					class: D(e === "A" ? "sbab-btn-a" : "sbab-btn-b"),
					"data-sbab-action": "select",
					"data-side": e,
					"aria-pressed": String(n.value.active === e)
				}, [W(O(e) + " ", 1), H("small", null, "Версия " + O(e), 1)], 10, T_)), 64))]),
				H("div", E_, [
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
					}, null, 8, D_),
					H("div", O_, [H("span", k_, O(n.value.currentTime), 1), H("span", A_, O(n.value.duration), 1)])
				]),
				H("div", j_, [
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
					}, O(n.value.playing ? "❚❚" : "▶"), 9, M_),
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
				H("div", N_, [t[9] ||= H("div", { class: "sbab-clip-title" }, [H("strong", null, "Повтор выбранного фрагмента"), H("small", null, "Например, только припев или куплет")], -1), H("div", P_, [
					H("button", F_, [t[6] ||= W("Начало: ", -1), H("span", I_, O(n.value.start), 1)]),
					H("button", L_, [t[7] ||= W("Конец: ", -1), H("span", R_, O(n.value.end), 1)]),
					H("button", {
						type: "button",
						"data-sbab-action": "loop",
						id: "sbab-loop",
						"aria-pressed": String(n.value.loop),
						"aria-label": n.value.loop ? "Повтор фрагмента включён" : "Повтор фрагмента выключен"
					}, O(n.value.loop ? "↻ Повтор включён" : "↻ Повтор выкл."), 9, z_),
					t[8] ||= H("button", {
						type: "button",
						"data-sbab-action": "clear-segment",
						"aria-label": "Очистить границы фрагмента"
					}, "✕", -1)
				])]),
				H("div", B_, [n.value.ios ? (B(), V("span", V_, "📱 Громкость регулируется кнопками телефона")) : (B(), V(z, { key: 1 }, R(r, (e) => H("label", {
					key: e,
					for: "sbab-vol-" + e
				}, [W(" Уровень " + O(e) + " ", 1), H("input", {
					id: "sbab-vol-" + e,
					"data-sbab-vol": e,
					type: "range",
					min: "0",
					max: "100",
					value: n.value.volume[e]
				}, null, 8, U_)], 8, H_)), 64))]),
				H("p", {
					id: "sbab-status",
					class: "sbab-status",
					role: "status",
					"aria-live": "polite",
					hidden: !n.value.status
				}, O(n.value.status), 9, W_)
			]),
			H("section", G_, [
				t[14] ||= H("header", null, [H("h3", null, "Оценка на слух"), H("p", null, "Субъективное сравнение. Оценки выставляешь ты — автоматического анализа качества здесь нет.")], -1),
				H("div", K_, [
					t[11] ||= H("div", { class: "sbab-rating-head" }, "Параметр", -1),
					t[12] ||= H("div", { class: "sbab-rating-head" }, "A", -1),
					t[13] ||= H("div", { class: "sbab-rating-head" }, "B", -1),
					(B(), V(z, null, R(i, (e) => (B(), V(z, { key: e.key }, [H("div", q_, O(e.label), 1), (B(), V(z, null, R(r, (r) => H("div", { key: r }, [H("select", {
						"data-sbab-score": r + ":" + e.key,
						"aria-label": e.label + " — версия " + r,
						value: n.value.scores[r][e.key]
					}, [t[10] ||= H("option", { value: 0 }, "—", -1), (B(), V(z, null, R(5, (e) => H("option", {
						key: e,
						value: e
					}, O(e) + "/5", 9, Y_)), 64))], 8, J_)])), 64))], 64))), 64))
				]),
				H("div", X_, [(B(), V(z, null, R(r, (e) => H("label", {
					key: e,
					for: "sbab-note-" + e
				}, [W(" Заметки по " + O(e) + " ", 1), H("textarea", {
					id: "sbab-note-" + e,
					"data-sbab-note": e,
					rows: "3",
					maxlength: "1000",
					placeholder: e === "A" ? "Сильные стороны, что улучшить…" : "Вокал, баланс, пространство…",
					value: n.value.notes[e]
				}, null, 8, Q_)], 8, Z_)), 64))]),
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
function ev({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PLAYER_AB, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-player-ab");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, $_, {
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
var tv = ["data-id", "aria-pressed"], nv = { class: "sbpc-song-main" }, rv = { class: "sbpc-song-meta" }, iv = { class: "sbpc-tiny-progress" }, av = {
	key: 0,
	class: "sbpc-empty"
}, ov = {
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
		return L(() => window.addEventListener("sunoboom:producer-search", a)), Cr(() => window.removeEventListener("sunoboom:producer-search", a)), (t, n) => (B(), V(z, null, [(B(!0), V(z, null, R(i.value, (t) => (B(), V("button", {
			key: t.id,
			type: "button",
			class: D(["sbpc-song", { active: t.id === e.model.selectedId }]),
			"data-pc-action": "open",
			"data-id": t.id,
			"aria-pressed": t.id === e.model.selectedId
		}, [
			H("span", nv, [H("strong", null, O(t.title), 1), H("span", null, O(t.artist), 1)]),
			H("span", rv, [H("b", null, O(t.done) + "/" + O(t.total), 1), H("small", null, O(t.nextLabel ? "Следующий этап: " + t.nextLabel : "Все этапы отмечены готовыми"), 1)]),
			H("span", iv, [H("i", { style: E({ width: t.percent + "%" }) }, null, 4)])
		], 10, tv))), 128)), i.value.length ? G("", !0) : (B(), V("p", av, O(e.model.hasRecords ? "Поиск не дал результатов. Измени запрос или создай новую рабочую карточку." : "Пока нет рабочих карточек. Начни с первой песни выше."), 1))], 64));
	}
};
// src/vue/producer/legacyProducerSongListBridge.js
function sv({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PRODUCER_LIST, n = document.getElementById("app");
	if (!t || typeof t.snapshot != "function" || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sbpc-list[data-sb-vue-producer-list]");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, ov, { model: o });
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
var cv = {
	class: "sbpc-workspace",
	"data-sb-vue-producer-detail": ""
}, lv = { class: "sbpc-panel sbpc-song-head" }, uv = { class: "sbpc-head-top" }, dv = { class: "sbpc-completion" }, fv = { class: "sbpc-next" }, pv = { class: "sbpc-meta-editor" }, mv = { class: "sbpc-wide" }, hv = { class: "sbpc-panel" }, gv = { class: "sbpc-panel-head" }, _v = ["aria-valuenow"], vv = { class: "sbpc-stages" }, yv = ["data-status"], bv = { class: "sbpc-stage-index" }, xv = { class: "sbpc-stage-body" }, Sv = { class: "sbpc-stage-title" }, Cv = { class: "sbpc-stage-state" }, wv = {
	key: 0,
	class: "sbpc-resource-present"
}, Tv = {
	key: 1,
	class: "sbpc-resource-empty"
}, Ev = { class: "sbpc-stage-actions" }, Dv = [
	"onUpdate:modelValue",
	"data-pc-stage",
	"aria-label"
], Ov = ["value"], kv = ["data-step"], Av = { class: "sbpc-panel" }, jv = { class: "sbpc-links" }, Mv = ["for"], Nv = [
	"id",
	"onUpdate:modelValue",
	"data-pc-link"
], Pv = ["value"], Fv = ["data-type", "data-id"], Iv = { class: "sbpc-panel sbpc-arrangement" }, Lv = { class: "sbpc-panel-head" }, Rv = { class: "sbpc-arrangement-actions" }, zv = {
	key: 0,
	type: "button",
	"data-pc-action": "restore-arrangement"
}, Bv = {
	key: 0,
	class: "sbpc-subnote"
}, Vv = { class: "sbpc-panel" }, Hv = { class: "sbpc-panel-head" }, Uv = {
	key: 0,
	class: "sbpc-log"
}, Wv = {
	key: 1,
	class: "sbpc-empty"
}, Gv = {
	__name: "ProducerSongDetail",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ j({
			title: t.model.title,
			artist: t.model.artist,
			notes: t.model.notes
		}), r = /* @__PURE__ */ j(Object.fromEntries(t.model.links.map((e) => [e.field, e.value]))), i = /* @__PURE__ */ j(Object.fromEntries(t.model.stages.map((e) => [e.key, e.status])));
		return (t, a) => (B(), V("div", cv, [
			H("section", lv, [
				H("div", uv, [a[3] ||= H("span", { class: "sbpc-kicker" }, "КАРТОЧКА ПРОДЮСИРОВАНИЯ", -1), H("span", dv, O(e.model.percent) + "% готовности", 1)]),
				H("h2", null, O(e.model.title || "Без названия"), 1),
				H("p", null, O(e.model.artist || "Исполнитель пока не указан") + O(e.model.projectTitle ? " · " + e.model.projectTitle : ""), 1),
				H("p", fv, O(e.model.nextLabel ? "Следующий этап: " + e.model.nextLabel : "Все этапы отмечены готовыми"), 1),
				H("div", pv, [
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
					H("label", mv, [a[6] ||= W("Продюсерские заметки ", -1), I(H("textarea", {
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
			H("section", hv, [
				H("header", gv, [a[9] ||= H("h3", null, "Маршрут песни", -1), H("span", null, O(e.model.done) + " из " + O(e.model.total) + " этапов", 1)]),
				H("div", {
					class: "sbpc-progress",
					role: "progressbar",
					"aria-label": "Готовность работы",
					"aria-valuemin": "0",
					"aria-valuemax": "100",
					"aria-valuenow": e.model.percent
				}, [H("span", { style: E({ width: e.model.percent + "%" }) }, null, 4)], 8, _v),
				H("div", vv, [(B(!0), V(z, null, R(e.model.stages, (t) => (B(), V("article", {
					key: t.key,
					class: "sbpc-stage",
					"data-status": i[t.key]
				}, [H("div", bv, O(i[t.key] === "done" ? "✓" : t.index), 1), H("div", xv, [
					H("div", Sv, [H("strong", null, O(t.title), 1), H("small", null, O(t.desc), 1)]),
					H("div", Cv, [t.hasMaterial ? (B(), V("span", wv, "● " + O(t.materialLabel), 1)) : (B(), V("span", Tv, "○ Подтверждённых материалов нет"))]),
					H("div", Ev, [H("label", null, [a[10] ||= W("Готовность ", -1), I(H("select", {
						"onUpdate:modelValue": (e) => i[t.key] = e,
						"data-pc-stage": t.key,
						"aria-label": "Этап " + t.title
					}, [(B(!0), V(z, null, R(e.model.statuses, (e) => (B(), V("option", {
						key: e.id,
						value: e.id
					}, O(e.label), 9, Ov))), 128))], 8, Dv), [[J, i[t.key]]])]), H("button", {
						type: "button",
						"data-pc-action": "open-stage",
						"data-step": t.key
					}, "Открыть инструмент ↗", 8, kv)])
				])], 8, yv))), 128))]),
				a[11] ||= H("p", { class: "sbpc-help" }, "Готовность отмечается вручную. Наличие материала показано отдельно и не считается автоматически завершённым этапом.", -1)
			]),
			H("section", Av, [
				a[12] ||= H("header", { class: "sbpc-panel-head" }, [H("h3", null, "Связанные материалы"), H("span", null, "Без копирования данных")], -1),
				a[13] ||= H("p", { class: "sbpc-help" }, "Свяжи существующие идеи, промпты, паспорт трека и карточку с аудио. Исходные записи останутся в своих разделах.", -1),
				H("div", jv, [(B(!0), V(z, null, R(e.model.links, (e) => (B(), V("div", {
					key: e.field,
					class: "sbpc-link-field"
				}, [
					H("label", { for: "sbpc-" + e.field }, O(e.label), 9, Mv),
					I(H("select", {
						id: "sbpc-" + e.field,
						"onUpdate:modelValue": (t) => r[e.field] = t,
						"data-pc-link": e.field
					}, [(B(!0), V(z, null, R(e.options, (e) => (B(), V("option", {
						key: e.value,
						value: e.value
					}, O(e.label), 9, Pv))), 128))], 8, Nv), [[J, r[e.field]]]),
					e.value ? (B(), V("button", {
						key: 0,
						type: "button",
						"data-pc-action": "open-link",
						"data-type": e.type,
						"data-id": e.value
					}, O(e.available ? "Перейти к материалу" : "Материал недоступен") + " ↗ ", 9, Fv)) : G("", !0)
				]))), 128))]),
				a[14] ||= H("button", {
					type: "button",
					class: "sbpc-main-btn",
					"data-pc-action": "save-links"
				}, "Сохранить связи", -1)
			]),
			H("section", Iv, [
				H("header", Lv, [a[15] ||= H("h3", null, "Аранжировка для этой песни", -1), H("span", null, O(e.model.arrangement.count ? e.model.arrangement.count + " блоков сохранено" : "Снимок ещё не сохранён"), 1)]),
				a[18] ||= H("p", { class: "sbpc-help" }, "Конструктор Suno Studio использует текущий рабочий черновик. Сохрани его сюда отдельно для песни; восстановление выполняется только по твоей команде.", -1),
				H("div", Rv, [
					a[16] ||= H("button", {
						type: "button",
						"data-pc-action": "capture-arrangement"
					}, "Сохранить текущую аранжировку", -1),
					e.model.arrangement.count ? (B(), V("button", zv, "Восстановить в Studio")) : G("", !0),
					a[17] ||= H("button", {
						type: "button",
						"data-pc-action": "open-stage",
						"data-step": "arrangement"
					}, "Открыть аранжировщик ↗", -1)
				]),
				e.model.arrangement.count ? (B(), V("p", Bv, " Сохранено: " + O(e.model.arrangement.savedAt) + " · " + O(e.model.arrangement.count) + " блоков · " + O(e.model.arrangement.duration || "длительность не рассчитана"), 1)) : G("", !0)
			]),
			H("section", Vv, [
				H("header", Hv, [a[19] ||= H("h3", null, "История работы", -1), H("span", null, O(e.model.history.length) + " событий", 1)]),
				a[20] ||= H("div", { class: "sbpc-log-input" }, [H("input", {
					id: "sbpc-history-note",
					type: "text",
					maxlength: "350",
					placeholder: "Добавить запись: что изменилось или что сделать дальше"
				}), H("button", {
					type: "button",
					"data-pc-action": "add-note"
				}, "Добавить")], -1),
				e.model.history.length ? (B(), V("ol", Uv, [(B(!0), V(z, null, R(e.model.history, (e, t) => (B(), V("li", { key: t }, [H("time", null, O(e.date), 1), H("span", null, O(e.text), 1)]))), 128))])) : (B(), V("p", Wv, "История пока пуста."))
			])
		]));
	}
};
// src/vue/producer/legacyProducerSongDetailBridge.js
function Kv({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PRODUCER_DETAIL, n = document.getElementById("app");
	if (!t || typeof t.snapshot != "function" || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-producer-detail[data-sb-vue-producer-host]");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, Gv, { model: o });
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
var qv = {
	class: "sb-track-filters",
	role: "group",
	"aria-label": "Фильтр паспортов по этапу"
}, Jv = ["data-filter", "aria-pressed"], Yv = {
	key: 0,
	class: "sb-track-list"
}, Xv = ["data-id"], Zv = {
	key: 1,
	class: "sb-track-empty"
}, Qv = {
	__name: "TrackPassportList",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (B(), V(z, null, [H("div", qv, [(B(!0), V(z, null, R(e.model.filters, (t) => (B(), V("button", {
			key: t.key,
			type: "button",
			"data-action": "tp-filter",
			"data-filter": t.key,
			class: D({ active: e.model.active === t.key }),
			"aria-pressed": e.model.active === t.key
		}, O(t.label), 11, Jv))), 128))]), e.model.records.length ? (B(), V("div", Yv, [(B(!0), V(z, null, R(e.model.records, (e) => (B(), V("button", {
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
		], 8, Xv))), 128))])) : (B(), V("div", Zv, O(e.model.hasRecords ? "В этой категории пока нет треков." : "Паспортов пока нет. Создай первый, чтобы объединить материалы песни."), 1))], 64));
	}
};
// src/vue/account/legacyTrackPassportListBridge.js
function $v({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_TRACK_LIST, n = document.getElementById("app");
	if (!t || typeof t.snapshot != "function" || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-track-list[data-sb-vue-track-list]");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, Qv, { model: o });
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
var ey = {
	class: "sb-track-detail",
	"data-sb-vue-track-detail-view": ""
}, ty = { class: "sb-track-buttons" }, ny = ["data-id"], ry = ["data-id"], iy = ["data-id"], ay = { class: "sb-track-hero" }, oy = { class: "sb-track-cover" }, sy = ["src"], cy = { class: "sb-track-phase" }, ly = { class: "sb-track-facts" }, uy = { class: "sb-track-buttons" }, dy = ["href"], fy = ["href"], py = { class: "sb-track-linkgrid" }, my = ["data-action", "data-id"], hy = {
	key: 1,
	class: "sb-track-linked sb-track-linked-empty"
}, gy = ["data-action", "data-id"], _y = {
	key: 3,
	class: "sb-track-linked sb-track-linked-empty"
}, vy = ["data-action", "data-id"], yy = {
	key: 5,
	class: "sb-track-linked sb-track-linked-empty"
}, by = { class: "sb-track-section" }, xy = { key: 0 }, Sy = ["href"], Cy = [
	"data-id",
	"data-version",
	"aria-label"
], wy = {
	key: 1,
	class: "sb-track-disclaimer"
}, Ty = { class: "sb-track-versionform" }, Ey = ["data-id"], Dy = {
	__name: "TrackPassportDetail",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (B(), V("div", ey, [
			H("div", ty, [
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
				}, "Изменить", 8, ny),
				H("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "tp-event",
					"data-id": e.model.id
				}, "В календарь релизов", 8, ry),
				H("button", {
					type: "button",
					class: "btn danger small",
					"data-action": "tp-delete",
					"data-id": e.model.id
				}, "Удалить", 8, iy)
			]),
			H("div", ay, [H("div", oy, [e.model.cover ? (B(), V("img", {
				key: 0,
				src: e.model.cover,
				alt: "Обложка",
				loading: "lazy"
			}, null, 8, sy)) : (B(), V(z, { key: 1 }, [W("♫")], 64))]), H("div", null, [
				H("span", cy, O(e.model.phase), 1),
				H("h2", null, O(e.model.title), 1),
				H("p", null, O(e.model.artist), 1)
			])]),
			H("div", ly, [(B(!0), V(z, null, R(e.model.facts, (e) => (B(), V("div", {
				key: e.label,
				class: "sb-track-fact"
			}, [H("span", null, O(e.label), 1), H("strong", null, O(e.value || "Не указано"), 1)]))), 128))]),
			H("div", uy, [e.model.audio ? (B(), V("a", {
				key: 0,
				class: "btn ghost",
				href: e.model.audio,
				rel: "noopener noreferrer",
				target: "_blank"
			}, "Прослушать ↗", 8, dy)) : G("", !0), e.model.cover ? (B(), V("a", {
				key: 1,
				class: "btn ghost",
				href: e.model.cover,
				rel: "noopener noreferrer",
				target: "_blank"
			}, "Обложка ↗", 8, fy)) : G("", !0)]),
			n[8] ||= H("h3", { class: "sb-track-section" }, "Связанные материалы", -1),
			H("div", py, [
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
				], 8, my)) : (B(), V("div", hy, [H("small", null, O(e.model.links[0].label), 1), n[2] ||= H("strong", null, "Не привязан", -1)])),
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
				], 8, gy)) : (B(), V("div", _y, [H("small", null, O(e.model.links[1].label), 1), n[4] ||= H("strong", null, "Не привязан", -1)])),
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
				], 8, vy)) : (B(), V("div", yy, [H("small", null, O(e.model.links[2].label), 1), n[6] ||= H("strong", null, "Не привязан", -1)]))
			]),
			(B(!0), V(z, null, R(e.model.sections, (e) => (B(), V("section", {
				key: e.label,
				class: "sb-track-sectionbox"
			}, [H("h3", null, O(e.label), 1), H("pre", null, O(e.text), 1)]))), 128)),
			H("h3", by, "Версии трека (" + O(e.model.versions.length) + ")", 1),
			e.model.versions.length ? (B(!0), V(z, { key: 0 }, R(e.model.versions, (t) => (B(), V("div", {
				key: t.id,
				class: "sb-track-version"
			}, [H("div", null, [
				H("strong", null, O(t.label), 1),
				H("small", null, O(t.date), 1),
				t.notes ? (B(), V("p", xy, O(t.notes), 1)) : G("", !0)
			]), H("div", null, [t.url ? (B(), V("a", {
				key: 0,
				href: t.url,
				rel: "noopener noreferrer",
				target: "_blank"
			}, "Прослушать ↗", 8, Sy)) : G("", !0), H("button", {
				type: "button",
				class: "btn danger small",
				"data-action": "tp-version-remove",
				"data-id": e.model.id,
				"data-version": t.id,
				"aria-label": "Удалить версию " + t.label
			}, "×", 8, Cy)])]))), 128)) : (B(), V("p", wy, "Версий пока нет.")),
			H("div", Ty, [n[7] ||= da("<div class=\"field\"><label for=\"tp-version-title\">Название новой версии</label><input id=\"tp-version-title\" maxlength=\"100\" placeholder=\"Демо 2 / Финальный мастер\"></div><div class=\"field\"><label for=\"tp-version-url\">Ссылка (HTTPS)</label><input id=\"tp-version-url\" type=\"url\" maxlength=\"2000\" placeholder=\"https://…\"></div><div class=\"field\"><label for=\"tp-version-notes\">Что изменилось?</label><input id=\"tp-version-notes\" maxlength=\"300\" placeholder=\"Необязательно\"></div>", 3), H("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "tp-version-add",
				"data-id": e.model.id
			}, "+ Добавить версию", 8, Ey)]),
			n[9] ||= H("p", { class: "sb-track-disclaimer" }, " Связанный текст и промпт показываются из оригинальных разделов. Расчётные даты — ориентир, окончательная дата определяется издательством. ", -1)
		]));
	}
};
// src/vue/account/legacyTrackPassportDetailBridge.js
function Oy({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_TRACK_DETAIL, n = document.getElementById("app");
	if (!t || typeof t.snapshot != "function" || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-track-detail[data-sb-vue-track-detail]");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, Dy, { model: o });
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
var ky = {
	id: "sb-track-form",
	class: "panel sb-track-form",
	"data-sb-vue-track-editor-view": ""
}, Ay = { class: "sb-track-formhead" }, jy = { class: "sb-track-fields" }, My = ["for"], Ny = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"placeholder"
], Py = { class: "field" }, Fy = ["value"], Iy = { class: "field" }, Ly = ["value"], Ry = { class: "field" }, zy = ["value"], By = { class: "field" }, Vy = ["value"], Hy = { class: "field" }, Uy = ["value"], Wy = { class: "field" }, Gy = { class: "sb-track-fields" }, Ky = { class: "field" }, qy = { class: "field" }, Jy = ["disabled"], Yy = { class: "sb-track-manual" }, Xy = {
	id: "tp-date-hint",
	class: "sb-track-hint"
}, Zy = { class: "sb-track-fields" }, Qy = ["for"], $y = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"placeholder"
], eb = ["for"], tb = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"rows"
], nb = {
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
		let t = e, n = /* @__PURE__ */ j({ ...t.model.fields }), r = K(() => t.api.date7(n.submitted)), i = K(() => r.value ? "Автоматический расчёт: " + t.api.dateLabel(r.value) + " (через 7 календарных дней)." : "Укажи дату передачи издательству: релиз автоматически через 7 дней.");
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
		return (t, r) => (B(), V("div", ky, [
			H("div", Ay, [H("h2", null, O(e.model.editing ? "Редактировать паспорт" : "Новый паспорт трека"), 1), r[9] ||= H("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "tp-cancel"
			}, "Закрыть", -1)]),
			H("div", jy, [
				(B(!0), V(z, null, R(o.slice(0, 2), (e) => (B(), V("div", {
					key: e.id,
					class: "field"
				}, [H("label", { for: "tp-" + e.id }, O(e.label), 9, My), I(H("input", {
					id: "tp-" + e.id,
					"onUpdate:modelValue": (t) => n[e.id] = t,
					maxlength: e.max,
					placeholder: e.placeholder
				}, null, 8, Ny), [[q, n[e.id]]])]))), 128)),
				H("div", Py, [r[10] ||= H("label", { for: "tp-status" }, "Этап работы", -1), I(H("select", {
					id: "tp-status",
					"onUpdate:modelValue": r[0] ||= (e) => n.status = e
				}, [(B(!0), V(z, null, R(e.model.stages, (e) => (B(), V("option", {
					key: e.value,
					value: e.value
				}, O(e.label), 9, Fy))), 128))], 512), [[J, n.status]])]),
				H("div", Iy, [r[11] ||= H("label", { for: "tp-genre" }, "Жанр", -1), I(H("select", {
					id: "tp-genre",
					"onUpdate:modelValue": r[1] ||= (e) => n.genre = e
				}, [(B(!0), V(z, null, R(e.model.genres, (e) => (B(), V("option", {
					key: e.value,
					value: e.value
				}, O(e.label), 9, Ly))), 128))], 512), [[J, n.genre]])]),
				H("div", Ry, [r[13] ||= H("label", { for: "tp-project" }, "Мой проект / артист", -1), I(H("select", {
					id: "tp-project",
					"onUpdate:modelValue": r[2] ||= (e) => n.project = e
				}, [r[12] ||= H("option", { value: "" }, "Без связи", -1), (B(!0), V(z, null, R(e.model.projects, (e) => (B(), V("option", {
					key: e.value,
					value: e.value
				}, O(e.label), 9, zy))), 128))], 512), [[J, n.project]])]),
				H("div", By, [r[15] ||= H("label", { for: "tp-idea" }, "Идея и текст песни", -1), I(H("select", {
					id: "tp-idea",
					"onUpdate:modelValue": r[3] ||= (e) => n.idea = e
				}, [r[14] ||= H("option", { value: "" }, "Без связи", -1), (B(!0), V(z, null, R(e.model.ideas, (e) => (B(), V("option", {
					key: e.value,
					value: e.value
				}, O(e.label), 9, Vy))), 128))], 512), [[J, n.idea]])]),
				H("div", Hy, [r[17] ||= H("label", { for: "tp-prompt" }, "Мой промпт Suno", -1), I(H("select", {
					id: "tp-prompt",
					"onUpdate:modelValue": r[4] ||= (e) => n.prompt = e
				}, [r[16] ||= H("option", { value: "" }, "Без связи", -1), (B(!0), V(z, null, R(e.model.prompts, (e) => (B(), V("option", {
					key: e.value,
					value: e.value
				}, O(e.label), 9, Uy))), 128))], 512), [[J, n.prompt]])]),
				H("div", Wy, [r[18] ||= H("label", { for: "tp-publisher" }, "Издательство / дистрибьютор", -1), I(H("input", {
					id: "tp-publisher",
					"onUpdate:modelValue": r[5] ||= (e) => n.publisher = e,
					maxlength: "120",
					placeholder: "Название издательства"
				}, null, 512), [[q, n.publisher]])])
			]),
			r[22] ||= H("h3", { class: "sb-track-section" }, "Даты релиза", -1),
			H("div", Gy, [H("div", Ky, [r[19] ||= H("label", { for: "tp-submitted" }, "Передано издательству", -1), I(H("input", {
				id: "tp-submitted",
				"onUpdate:modelValue": r[6] ||= (e) => n.submitted = e,
				type: "date",
				onChange: a
			}, null, 544), [[q, n.submitted]])]), H("div", qy, [
				r[21] ||= H("label", { for: "tp-release" }, "Дата выхода", -1),
				I(H("input", {
					id: "tp-release",
					"onUpdate:modelValue": r[7] ||= (e) => n.release = e,
					type: "date",
					disabled: !n.override
				}, null, 8, Jy), [[q, n.release]]),
				H("label", Yy, [I(H("input", {
					id: "tp-override",
					"onUpdate:modelValue": r[8] ||= (e) => n.override = e,
					type: "checkbox",
					onChange: a
				}, null, 544), [[Fo, n.override]]), r[20] ||= W(" Установить дату вручную ", -1)])
			])]),
			H("p", Xy, O(i.value), 1),
			r[23] ||= H("h3", { class: "sb-track-section" }, "Материалы и метаданные", -1),
			H("div", Zy, [(B(), V(z, null, R(s, (e) => H("div", {
				key: e.id,
				class: "field"
			}, [H("label", { for: "tp-" + e.id }, O(e.label), 9, Qy), I(H("input", {
				id: "tp-" + e.id,
				"onUpdate:modelValue": (t) => n[e.id] = t,
				maxlength: e.max,
				placeholder: e.placeholder
			}, null, 8, $y), [[q, n[e.id]]])])), 64))]),
			(B(), V(z, null, R(c, (e) => H("div", {
				key: e.id,
				class: "field"
			}, [H("label", { for: "tp-" + e.id }, O(e.label), 9, eb), I(H("textarea", {
				id: "tp-" + e.id,
				"onUpdate:modelValue": (t) => n[e.id] = t,
				maxlength: e.max,
				rows: e.rows
			}, null, 8, tb), [[q, n[e.id]]])])), 64)),
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
function rb({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_TRACK_EDITOR, n = document.getElementById("app");
	if (!n || !t || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-track-editor[data-sb-vue-track-editor]");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, nb, {
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
var ib = { class: "field" }, ab = { class: "field" }, ob = ["value"], sb = { class: "field" }, cb = { class: "field" }, lb = {
	__name: "IdeaFields",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = /* @__PURE__ */ j({ ...e.initial.values });
		return (n, r) => (B(), V(z, null, [
			H("div", ib, [r[4] ||= H("label", { for: "custom-idea-title" }, "Название песни", -1), I(H("input", {
				id: "custom-idea-title",
				"onUpdate:modelValue": r[0] ||= (e) => t.title = e,
				maxlength: "100",
				placeholder: "Например, Город на ладони"
			}, null, 512), [[q, t.title]])]),
			H("div", ab, [r[5] ||= H("label", { for: "custom-idea-genre" }, "Музыкальный жанр", -1), I(H("select", {
				id: "custom-idea-genre",
				"onUpdate:modelValue": r[1] ||= (e) => t.genre = e
			}, [(B(!0), V(z, null, R(e.initial.genres, (e) => (B(), V("option", {
				key: e.id,
				value: e.id
			}, O(e.name), 9, ob))), 128))], 512), [[J, t.genre]])]),
			H("div", sb, [r[6] ||= H("label", { for: "custom-idea-text" }, "Сюжет и основная идея", -1), I(H("textarea", {
				id: "custom-idea-text",
				"onUpdate:modelValue": r[2] ||= (e) => t.text = e,
				rows: "5",
				maxlength: "3000",
				placeholder: "О чём песня и что происходит с героем?"
			}, null, 512), [[q, t.text]])]),
			H("div", cb, [r[7] ||= H("label", { for: "custom-idea-hook" }, "Фраза для припева (необязательно)", -1), I(H("input", {
				id: "custom-idea-hook",
				"onUpdate:modelValue": r[3] ||= (e) => t.hook = e,
				maxlength: "240",
				placeholder: "Запоминающаяся строчка"
			}, null, 512), [[q, t.hook]])])
		], 64));
	}
}, ub = ["value"], db = {
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
		}, null, 8, ub)], 64));
	}
}, fb = { class: "field" }, pb = ["value"], mb = { class: "workbench-switches" }, hb = ["id", "onUpdate:modelValue"], gb = { class: "field" }, _b = { class: "detail-actions" }, vb = {
	type: "button",
	class: "btn ghost",
	"data-action": "copy-current-lyrics"
}, yb = ["innerHTML"], bb = { class: "field" }, xb = { class: "detail-actions" }, Sb = {
	type: "button",
	class: "btn ghost",
	"data-action": "copy-current-style"
}, Cb = ["innerHTML"], wb = {
	__name: "LyricsTools",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ j({ ...t.initial.values }), r = /* @__PURE__ */ j({ ...t.initial.switches }), i = [
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
			H("div", fb, [o[3] ||= H("label", { for: "lyrics-tag-preset" }, "Характер аранжировки", -1), I(H("select", {
				id: "lyrics-tag-preset",
				"onUpdate:modelValue": o[0] ||= (e) => n.preset = e
			}, [(B(), V(z, null, R(i, ([e, t]) => H("option", {
				key: e,
				value: e
			}, O(t), 9, pb)), 64))], 512), [[J, n.preset]])]),
			H("div", mb, [(B(), V(z, null, R(a, ([e, t]) => H("label", { key: e }, [I(H("input", {
				id: "lyrics-" + e,
				"onUpdate:modelValue": (t) => r[e] = t,
				type: "checkbox"
			}, null, 8, hb), [[Fo, r[e]]]), W(" " + O(t), 1)])), 64))]),
			o[8] ||= H("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "format-idea-lyrics"
			}, "✨ Создать теги и усилители", -1),
			o[9] ||= H("p", { class: "workbench-note" }, "Разметка примерная: если в тексте нет названий секций, куплеты и припевы определяются по абзацам. Проверь расположение тегов перед копированием.", -1),
			H("div", gb, [o[4] ||= H("label", { for: "custom-idea-tagged" }, "Готовая версия для поля Lyrics в Suno (можно исправить вручную)", -1), I(H("textarea", {
				id: "custom-idea-tagged",
				"onUpdate:modelValue": o[1] ||= (e) => n.tagged = e,
				rows: "13",
				maxlength: "25000",
				placeholder: "[Verse 1]\n...\n\n[Chorus - powerful melodic hook]\n..."
			}, null, 512), [[q, n.tagged]])]),
			H("div", _b, [H("button", vb, [H("span", { innerHTML: e.initial.copyIcon }, null, 8, yb), o[5] ||= W(" Копировать Lyrics", -1)])]),
			H("div", bb, [o[6] ||= H("label", { for: "custom-idea-style" }, "Дополнительное описание для поля Style (до 1000 символов)", -1), I(H("textarea", {
				id: "custom-idea-style",
				"onUpdate:modelValue": o[2] ||= (e) => n.style = e,
				rows: "4",
				maxlength: "1000",
				placeholder: "Описание жанра, вокала и динамики для Suno"
			}, null, 512), [[q, n.style]])]),
			H("div", xb, [H("button", Sb, [H("span", { innerHTML: e.initial.copyIcon }, null, 8, Cb), o[7] ||= W(" Копировать Style", -1)])])
		], 64));
	}
};
// src/vue/poetry/legacyIdeaEditorBridge.js
function Tb({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_IDEA_EDITOR, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = /* @__PURE__ */ new Map(), i = !1;
	function a() {
		if (!i) for (let [i, a] of [
			["sb-vue-idea-fields", lb],
			["sb-vue-lyrics-source", db],
			["sb-vue-lyrics-tools", wb]
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
// src/vue/VueFeatureHost.vue
var Eb = {
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
		return (t, n) => (B(), ra(Ar(e.component), _e(la(e.componentProps)), null, 16));
	}
}, Db = [
	"data-nav",
	"data-vue-router-path",
	"aria-current",
	"aria-label",
	"title",
	"onClick"
], Ob = ["innerHTML"], kb = { class: "sb-vue-nav-label" }, Ab = {
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
		let t = Au(), n = ku(), r = ld(), i = e, a = K(() => r.navigationItems.length ? r.navigationItems : i.items);
		function o(e) {
			i.onNavigate(e, n);
		}
		let s = (e) => {
			let n = r.route;
			return (t.path === Nu(n.route) ? Pu(t.path) : n.active) === e;
		};
		return (n, r) => (B(!0), V(z, null, R(a.value, (n) => (B(), V("button", {
			key: n.id,
			type: "button",
			class: D(e.mobile ? s(n.id) ? "active" : "" : ["nav-button", { active: s(n.id) }]),
			"data-nav": n.id,
			"data-vue-router-path": F(t).path,
			"aria-current": s(n.id) ? "page" : void 0,
			"aria-label": e.mobile ? n.label : void 0,
			title: e.mobile ? n.label : void 0,
			onClick: (e) => o(n.id)
		}, [H("span", {
			class: "sb-vue-nav-icon",
			"aria-hidden": "true",
			innerHTML: n.iconHtml
		}, null, 8, Ob), H("span", kb, O(e.mobile ? n.shortLabel : n.label), 1)], 10, Db))), 128));
	}
}, jb = {
	class: "sb-vue-history-toolbar",
	role: "group",
	"aria-label": "История разделов SUNOBOOM"
}, Mb = ["disabled"], Nb = ["disabled"], Pb = /*#__PURE__*/ vs({
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
		let t = e, n = Au(), r = ld(), i = /* @__PURE__ */ P(!1), a = K(() => (n.path, r.route.revision, Uu.value, {
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
		return (e, t) => (B(), V("div", jb, [
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
			}, [H("path", { d: "m15 18-6-6 6-6" })], -1)]], 8, Mb),
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
			}, [H("path", { d: "m9 18 6-6-6-6" })], -1)]], 8, Nb)
		]));
	}
}, [["__scopeId", "data-v-c738b8ec"]]), Fb = Object.freeze({
	"/account/myideas": "myideas",
	"/account/myprompts": "myprompts",
	"/account/events": "events"
});
function Ib(e) {
	if (e?.active === "producer" && e?.production?.id) return Nu("producer", {
		kind: "production",
		id: e.production.id
	});
	let t = e?.track;
	return Nu(e?.active, t?.id ? {
		kind: "track",
		id: t.id
	} : null);
}
function Lb(e, t) {
	if (!e || typeof t?.snapshot != "function") return null;
	let n = t.snapshot();
	if (n?.trackEditing) return null;
	let r = Qu(e.path);
	if (r && n?.items?.some((e) => e?.id === r)) return {
		kind: "menu",
		id: r
	};
	let i = Fb[e.path];
	if (i && typeof t.navigateWorkspace == "function") return {
		kind: "workspace",
		id: i
	};
	let a = e.context;
	return e.path === "/catalog/detail" && a?.kind === "genre" && typeof t.canRestoreGenre == "function" && t.canRestoreGenre(a.id, a.tab) && typeof t.restoreGenre == "function" ? {
		kind: "genre",
		id: a.id,
		tab: a.tab
	} : a?.kind === "production" && e.path === Nu("producer", a) && t.canRestoreProduction?.(a.id) === !0 && typeof t.restoreProduction == "function" ? {
		kind: "production",
		id: a.id
	} : e.path === "/account/tracks" && t.canRestoreTrackList?.() === !0 && typeof t.restoreTrackList == "function" ? { kind: "track-list" } : e.path === "/account/tracks/detail" && a?.kind === "track" && t.canRestoreTrack?.(a.id) === !0 && typeof t.restoreTrack == "function" ? {
		kind: "track",
		id: a.id
	} : null;
}
var Rb = !1;
function zb(e, { legacyApi: t } = {}) {
	if (Rb || !["back", "forward"].includes(e) || typeof t?.snapshot != "function") return !1;
	let n = Zu(e), r = t.snapshot();
	return !!Lb(n, t) && nd().path === Ib(r);
}
async function Bb(e, { legacyApi: t, syncRoute: n = ad } = {}) {
	if (Rb || !["back", "forward"].includes(e) || !t || typeof t.snapshot != "function" || typeof t.navigate != "function") return !1;
	Rb = !0;
	try {
		await ed();
		let r = Lb(Zu(e), t), i = t.snapshot();
		if (!r || nd().path !== Ib(i) || !await td(e)) return !1;
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
		Rb = !1;
	}
}
// src/vue/navigation/legacyBridge.js
var Vb = [{
	key: "sidebar",
	selector: "[data-sb-vue-sidebar]",
	mobile: !1
}, {
	key: "mobile",
	selector: "[data-sb-vue-mobile]",
	mobile: !0
}];
function Hb({ mountVueFeature: e, unmountVueFeature: t, sharedUi: n }) {
	let r = window.SUNOBOOM_LEGACY_NAV, i = document.getElementById("app");
	if (!r || !i || typeof r.snapshot != "function") return () => {};
	let a = /* @__PURE__ */ new Map(), o = !1;
	window.SUNOBOOM_VUE_ROUTE = Object.freeze({
		snapshot: () => id.value,
		routerSnapshot: () => nd(),
		sharedState: () => Object.freeze({
			route: n.route.route,
			active: n.route.active,
			menuIds: n.navigationItems.map((e) => e.id),
			dashboardStats: { ...n.dashboardStats }
		}),
		back: () => Bb("back", { legacyApi: r }),
		forward: () => Bb("forward", { legacyApi: r }),
		recordGenre: (e, t, n = "push") => {
			let i = r.snapshot();
			return i.active !== "detail" || i.detail?.id !== e || i.detail?.tab !== t || !r.canRestoreGenre?.(e, t) ? !1 : (ad("detail", {
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
			return n.active !== "producer" || n.production?.id !== e || !r.canRestoreProduction?.(e) ? !1 : (ad("producer", {
				historyMode: t,
				context: {
					kind: "production",
					id: e
				}
			}), !0);
		},
		recordTrackList: () => {
			let e = r.snapshot();
			return e.active !== "tracks" || e.track?.id || e.trackEditing ? !1 : (ad("tracks"), !0);
		},
		recordTrack: (e, t = "push") => {
			let n = r.snapshot();
			return n.active !== "tracks" || n.track?.id !== e || n.trackEditing || !r.canRestoreTrack?.(e) ? !1 : (ad("tracks", {
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
		ad(t.active, { context: t.track?.id ? {
			kind: "track",
			id: t.track.id
		} : t.active === "producer" && t.production?.id ? {
			kind: "production",
			id: t.production.id
		} : null });
		let s = Nc(t);
		n.publishNavigation(s);
		let c = JSON.stringify(s.map(({ active: e, ...t }) => t)), l = i.querySelector("[data-sb-vue-history]"), u = a.get("history");
		if (!l) u?.unmount(), a.delete("history");
		else if (u?.target !== l) {
			u?.unmount();
			let t = e(l, Pb, {
				canRestore: (e) => zb(e, { legacyApi: r }),
				onRestore: (e) => Bb(e, { legacyApi: r })
			}, { vueRouter: !0 });
			t && a.set("history", {
				target: l,
				unmount: t
			});
		}
		for (let { key: t, selector: n, mobile: o } of Vb) {
			let l = i.querySelector(n), u = a.get(t);
			if (!l) {
				u?.unmount(), a.delete(t);
				continue;
			}
			if (u?.target === l && u.signature === c) continue;
			u?.unmount();
			let d = e(l, Ab, {
				items: s,
				mobile: o,
				onNavigate: (e, t) => Wd(e, {
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
	return ad(l.active, { context: l.track?.id ? {
		kind: "track",
		id: l.track.id
	} : l.active === "producer" && l.production?.id ? {
		kind: "production",
		id: l.production.id
	} : null }), ed().then(() => {
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
var Ub = ["data-id"], Wb = { class: "genre-content" }, Gb = { class: "kicker" }, Kb = { class: "foot" }, qb = {
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
		}, null, -1), H("div", Wb, [H("div", null, [
			H("div", Gb, O(e.family) + " · " + O(e.bpm[0]) + "–" + O(e.bpm[1]) + " BPM", 1),
			H("h3", null, O(e.name), 1),
			H("p", null, O(e.tagline), 1)
		]), H("div", Kb, [H("span", null, O(e.era), 1), n[0] ||= H("span", { style: { color: "#ffacd9" } }, "Открыть →", -1)])])], 12, Ub))), 128));
	}
}, Jb = { class: "genre-family-toolbar" }, Yb = { class: "search-box" }, Xb = ["innerHTML"], Zb = { class: "hint" }, Qb = { class: "genre-family-summary" }, $b = { id: "catalog-count" }, ex = {
	class: "hint",
	id: "sb-academy-search-hint"
}, tx = {
	id: "catalog-cards",
	class: "genre-families"
}, nx = [
	"data-family",
	"open",
	"onToggle"
], rx = {
	class: "genre-family-icon",
	"aria-hidden": "true"
}, ix = { class: "genre-family-heading" }, ax = { class: "genre-family-right" }, ox = { class: "genre-family-count" }, sx = { class: "genre-family-body" }, cx = {
	key: 0,
	class: "sb-sacred-index"
}, lx = {
	key: 0,
	class: "sb-sacred-overview"
}, ux = { class: "genre-grid" }, dx = { class: "sb-sacred-religions" }, fx = [
	"data-sb-religion",
	"open",
	"onToggle"
], px = { class: "sb-sacred-religion-header" }, mx = {
	class: "sb-sacred-religion-icon",
	"aria-hidden": "true"
}, hx = { class: "sb-sacred-religion-label" }, gx = { class: "sb-sacred-count" }, _x = { class: "sb-sacred-religion-content" }, vx = [
	"data-sb-branch",
	"open",
	"onToggle"
], yx = { class: "sb-sacred-branch-header" }, bx = { class: "sb-sacred-branch-label" }, xx = { class: "sb-sacred-count" }, Sx = { class: "sb-sacred-branch-content" }, Cx = { class: "genre-grid" }, wx = {
	key: 1,
	class: "genre-grid"
}, Tx = {
	key: 1,
	class: "genre-family-empty"
}, Ex = {
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
		let t = e, n = /* @__PURE__ */ P(t.snapshot.query || ""), r = /* @__PURE__ */ j({
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
			H("div", Jb, [H("label", Yb, [H("span", {
				innerHTML: e.searchIcon,
				"aria-hidden": "true"
			}, null, 8, Xb), I(H("input", {
				id: "genre-search",
				"onUpdate:modelValue": r[0] ||= (e) => n.value = e,
				type: "search",
				enterkeyhint: "search",
				autocapitalize: "off",
				spellcheck: "false",
				"aria-label": "Поиск жанров",
				placeholder: "Поиск жанра, поджанра или исполнителя…",
				autocomplete: "off"
			}, null, 512), [[q, n.value]])]), H("span", Zb, O(e.snapshot.families.length) + " разделов · " + O(e.snapshot.families.reduce((e, t) => e + t.genres.length, 0)) + " жанров", 1)]),
			H("div", Qb, [H("h2", $b, O(a.value ? "Найдено жанров" : "Музыкальные жанры") + " · " + O(s.value), 1), H("span", ex, O(c.value), 1)]),
			H("div", tx, [o.value.length ? (B(!0), V(z, { key: 0 }, R(o.value, (e) => (B(), V("details", {
				key: e.name,
				class: "genre-family",
				"data-family": e.name,
				style: E({ "--family-accent": e.meta.accent }),
				open: f("family", e.name),
				onToggle: (t) => p("family", e.name, t)
			}, [H("summary", null, [
				H("span", rx, O(e.meta.icon), 1),
				H("span", ix, [H("strong", null, O(e.name), 1), H("small", null, O(e.meta.desc), 1)]),
				H("span", ax, [H("span", ox, O(e.genres.length) + " " + O(m(e.genres.length)), 1), r[1] ||= H("svg", {
					class: "genre-family-chevron",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2",
					"aria-hidden": "true"
				}, [H("path", { d: "m5 9 7 7 7-7" })], -1)])
			]), H("div", sx, [e.name === "Религиозная музыка" ? (B(), V("div", cx, [
				r[5] ||= H("div", { class: "sb-sacred-intro" }, [
					H("span", { class: "sb-sacred-eyebrow" }, "МУЗЫКА МИРОВЫХ РЕЛИГИЙ"),
					H("h3", null, "Религии и музыкальные традиции"),
					H("p", null, "Открой религию, затем её направление или течение. Здесь представлены музыкальные традиции — их границы не всегда совпадают с конфессиональными.")
				], -1),
				u.value ? (B(), V("div", lx, [r[2] ||= H("div", { class: "sb-sacred-overview-label" }, "📖 Обзор раздела", -1), H("div", ux, [U(qb, { genres: [u.value] }, null, 8, ["genres"])])])) : G("", !0),
				H("div", dx, [(B(!0), V(z, null, R(d.value, (e) => (B(), V("details", {
					key: e.id,
					class: "sb-sacred-religion",
					"data-sb-religion": e.id,
					open: f("religion", e.id),
					onToggle: (t) => p("religion", e.id, t)
				}, [H("summary", px, [
					H("span", mx, O(e.icon), 1),
					H("span", hx, [H("strong", null, O(e.name), 1), H("small", null, O(e.description), 1)]),
					H("span", gx, O(e.count), 1),
					r[3] ||= H("span", {
						class: "sb-sacred-chevron",
						"aria-hidden": "true"
					}, "⌄", -1)
				]), H("div", _x, [(B(!0), V(z, null, R(e.branches, (e) => (B(), V("details", {
					key: e.id,
					class: "sb-sacred-branch",
					"data-sb-branch": e.id,
					open: f("branch", e.id),
					onToggle: (t) => p("branch", e.id, t)
				}, [H("summary", yx, [
					H("span", bx, [H("strong", null, O(e.name), 1), H("small", null, O(e.description), 1)]),
					H("span", xx, O(e.genres.length) + " " + O(h(e.genres.length)), 1),
					r[4] ||= H("span", {
						class: "sb-sacred-chevron",
						"aria-hidden": "true"
					}, "⌄", -1)
				]), H("div", Sx, [H("div", Cx, [U(qb, { genres: e.genres }, null, 8, ["genres"])])])], 40, vx))), 128))])], 40, fx))), 128))])
			])) : (B(), V("div", wx, [U(qb, { genres: e.genres }, null, 8, ["genres"])]))])], 44, nx))), 128)) : (B(), V("div", Tx, "Ничего не найдено. Попробуй другой запрос."))])
		], 64));
	}
};
// src/vue/academy/legacyAcademyBridge.js
function Dx({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ACADEMY, n = document.getElementById("app");
	if (!t || !n || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-academy-root");
		if (r?.target === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o?.families?.length) return;
		let s = e(a, Ex, {
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
var Ox = (e) => String(e ?? "").trim().normalize("NFKC").toLocaleLowerCase("ru");
function kx(e, t, n, r = "all", i = 30) {
	let a = Ox(n);
	if (!a) return {
		count: 0,
		items: []
	};
	let o = new Map(e.map((e) => [e.id, e])), s = /* @__PURE__ */ new Set(), c = [];
	function l(e, t) {
		let n = o.get(t);
		n && !s.has(t) && Ox(n.name).includes(a) && (s.add(t), c.push({
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
function Ax(e, t) {
	return t === "zoom-reset" ? 1 : t !== "zoom-in" && t !== "zoom-out" ? e : Math.min(1.5, Math.max(.75, Math.round((e + (t === "zoom-in" ? .15 : -.15)) * 100) / 100));
}
function jx(e, t) {
	let n = Array.isArray(e?.edges) ? e.edges : [];
	return e?.id === "all" ? n.filter(([e, n]) => e === t || n === t) : n;
}
// src/vue/academy/GenreTree.vue
var Mx = {
	class: "sb-gt-vue-content",
	"data-sb-vue-genre-tree": ""
}, Nx = { class: "sb-gt-head" }, Px = { class: "sb-gt-count" }, Fx = { class: "sb-gt-controls" }, Ix = ["value"], Lx = ["value"], Rx = ["value"], zx = ["value"], Bx = { class: "sb-gt-extra" }, Vx = {
	class: "sb-gt-search-label",
	for: "sb-gt-search"
}, Hx = ["value"], Ux = { class: "sb-gt-zoom" }, Wx = { id: "sb-gt-zoom-label" }, Gx = {
	id: "sb-gt-search-results",
	class: "sb-gt-search-results",
	"aria-live": "polite"
}, Kx = { class: "sb-gt-search-title" }, qx = { class: "sb-gt-search-links" }, Jx = [
	"data-id",
	"data-tree",
	"onClick"
], Yx = {
	key: 1,
	class: "sb-gt-search-empty"
}, Xx = { class: "sb-gt-intro" }, Zx = { class: "sb-gt-legend" }, Qx = ["aria-label"], $x = ["data-sb-gt-family"], eS = {
	key: 1,
	class: "sb-gt-stage"
}, tS = { class: "sb-gt-node-list" }, nS = [
	"data-id",
	"aria-pressed",
	"onClick"
], rS = { class: "sb-gt-node-name" }, iS = { class: "sb-gt-node-era" }, aS = {
	key: 0,
	id: "sb-gt-description",
	class: "sb-gt-detail",
	"aria-live": "polite"
}, oS = { class: "sb-gt-detail-top" }, sS = { class: "sb-gt-sub" }, cS = ["data-id"], lS = { class: "sb-gt-description" }, uS = { class: "sb-gt-related" }, dS = ["data-id", "onClick"], fS = {
	key: 1,
	class: "sb-gt-note"
}, pS = { class: "sb-gt-related" }, mS = ["data-id", "onClick"], hS = /*#__PURE__*/ vs({
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
		let t = e, n = /* @__PURE__ */ P(t.snapshot.tree), r = /* @__PURE__ */ P(t.snapshot.selected), i = /* @__PURE__ */ P(t.snapshot.query || ""), a = /* @__PURE__ */ P(t.snapshot.zoom || 1), o = /* @__PURE__ */ P(""), s = /* @__PURE__ */ P(null), c = /* @__PURE__ */ P(null), l = t.snapshot.genres, u = new Map(l.map((e) => [e.id, e])), d = t.snapshot.trees, f = t.snapshot.relations, p = t.snapshot.stageLabels, m = K(() => d.find((e) => e.id === n.value) || d[0]), h = K(() => m.value.id === "all"), g = K(() => m.value.columns.map((e, t) => ({
			index: t,
			group: h.value ? m.value.groups[t] : null,
			entries: e.map((e) => u.get(e)).filter(Boolean)
		}))), _ = K(() => g.value.reduce((e, t) => e + t.entries.length, 0)), v = K(() => u.get(r.value) || u.get(m.value.focus)), y = K(() => jx(m.value, r.value).filter(([e, t]) => e === r.value || t === r.value).map(([e, t, n, i]) => {
			let a = u.get(e === r.value ? t : e);
			return a ? {
				id: a.id,
				name: a.name,
				type: n,
				note: i,
				direction: e === r.value ? "→" : "←"
			} : null;
		}).filter(Boolean)), b = K(() => h.value && v.value ? l.filter((e) => e.id !== r.value && e.family === v.value.family).slice(0, 8) : []), x = K(() => kx(l, d, i.value, n.value)), ee = (e) => !!i.value.trim() && !e.name.toLocaleLowerCase("ru").includes(i.value.trim().toLocaleLowerCase("ru"));
		function S() {
			Dn(() => requestAnimationFrame(() => t.treeApi.drawLines()));
		}
		function te(e) {
			let a = t.treeApi.changeTree(e);
			a && (n.value = a.tree, r.value = a.selected, i.value = "", o.value = "", S());
		}
		function ne(e) {
			u.has(e) && t.treeApi.select(e) && (r.value = e, S());
		}
		function re(e) {
			let n = Ax(a.value, e);
			t.treeApi.setZoom(n), a.value = n, S();
		}
		function ie(e) {
			i.value = e.target.value, t.treeApi.setQuery(i.value);
		}
		function C(e) {
			let a = t.treeApi.searchJump(e.tree, e.id);
			a && (n.value = a.tree, r.value = a.selected, i.value = "", o.value = "", Dn(() => {
				[...c.value?.querySelectorAll(".sb-gt-node") || []].find((t) => t.dataset.id === e.id)?.scrollIntoView({
					behavior: "smooth",
					block: "nearest",
					inline: "center"
				}), S();
			}));
		}
		function ae(e) {
			o.value = e.target.value, [...c.value?.querySelectorAll("[data-sb-gt-family]") || []].find((e) => e.dataset.sbGtFamily === o.value)?.scrollIntoView({
				behavior: "smooth",
				block: "nearest",
				inline: "start"
			});
		}
		return L(S), (t, l) => (B(), V("div", Mx, [
			H("div", Nx, [l[5] ||= H("div", null, [
				H("span", { class: "sb-gt-kicker" }, "SUNOBOOM · ИСТОРИЯ МУЗЫКИ"),
				H("h2", null, "От истоков к новым жанрам"),
				H("p", null, "Нажми на жанр в схеме, чтобы увидеть его историю и связи. Затем открой его существующую карточку в Академии.")
			], -1), H("div", Px, O(_.value) + " жанров" + O(h.value ? " · " + m.value.groups.length + " направлений" : " в схеме"), 1)]),
			H("div", Fx, [
				l[8] ||= H("label", { for: "sb-gt-tree-choice" }, "Карта жанров", -1),
				H("select", {
					id: "sb-gt-tree-choice",
					value: n.value,
					"aria-label": "Выберите музыкальное древо",
					onChange: l[0] ||= (e) => te(e.target.value)
				}, [(B(!0), V(z, null, R(F(d), (e) => (B(), V("option", {
					key: e.id,
					value: e.id
				}, O(e.icon) + " " + O(e.label), 9, Lx))), 128))], 40, Ix),
				h.value ? (B(), V(z, { key: 0 }, [l[7] ||= H("label", { for: "sb-gt-group-jump" }, "Перейти к направлению", -1), H("select", {
					id: "sb-gt-group-jump",
					value: o.value,
					"aria-label": "Перейти к музыкальному направлению",
					onChange: ae
				}, [l[6] ||= H("option", { value: "" }, "Выберите раздел…", -1), (B(!0), V(z, null, R(m.value.groups, (e, t) => (B(), V("option", {
					key: e.name,
					value: String(t)
				}, O(e.icon) + " " + O(e.name) + " (" + O(e.ids.length) + ") ", 9, zx))), 128))], 40, Rx)], 64)) : G("", !0)
			]),
			H("div", Bx, [H("label", Vx, [l[9] ||= W(" Поиск жанра по древу ", -1), H("input", {
				id: "sb-gt-search",
				value: i.value,
				type: "search",
				placeholder: "Например: ска-панк",
				autocomplete: "off",
				onInput: ie
			}, null, 40, Hx)]), H("div", Ux, [
				l[10] ||= H("span", null, "Масштаб карты", -1),
				H("button", {
					type: "button",
					"data-sb-gt-action": "zoom-out",
					"aria-label": "Уменьшить масштаб",
					onClick: l[1] ||= (e) => re("zoom-out")
				}, "−"),
				H("output", Wx, O(Math.round(a.value * 100)) + "%", 1),
				H("button", {
					type: "button",
					"data-sb-gt-action": "zoom-in",
					"aria-label": "Увеличить масштаб",
					onClick: l[2] ||= (e) => re("zoom-in")
				}, "+"),
				H("button", {
					type: "button",
					"data-sb-gt-action": "zoom-reset",
					onClick: l[3] ||= (e) => re("zoom-reset")
				}, "Сброс")
			])]),
			H("div", Gx, [i.value.trim() ? (B(), V(z, { key: 0 }, [x.value.count ? (B(), V(z, { key: 0 }, [H("div", Kx, " Найдено в коллекции: " + O(x.value.count) + O(x.value.count > 30 ? " · показаны первые 30" : ""), 1), H("div", qx, [(B(!0), V(z, null, R(x.value.items, (e) => (B(), V("button", {
				key: e.id,
				type: "button",
				"data-sb-gt-action": "search-jump",
				"data-id": e.id,
				"data-tree": e.tree,
				onClick: (t) => C(e)
			}, [W(O(e.name) + " ", 1), H("small", null, "(" + O(e.family) + ")", 1)], 8, Jx))), 128))])], 64)) : (B(), V("p", Yx, "Жанр не найден в коллекции Академии."))], 64)) : G("", !0)]),
			H("p", Xx, O(m.value.intro), 1),
			H("div", Zx, [(B(!0), V(z, null, R(F(f), (e, t) => (B(), V("span", { key: t }, [H("i", { style: E({ "--rel-color": e.color }) }, null, 4), W(O(e.label), 1)]))), 128))]),
			H("div", {
				ref_key: "viewport",
				ref: s,
				class: "sb-gt-viewport",
				tabindex: "0",
				"aria-label": h.value ? "Все жанры Академии по музыкальным направлениям, горизонтальная прокрутка" : "Схема связей: горизонтально прокручиваемая карта жанров"
			}, [H("div", {
				ref_key: "canvas",
				ref: c,
				class: D(["sb-gt-canvas", { "sb-gt-canvas-all": h.value }]),
				style: E({
					zoom: a.value,
					"--sb-gt-family-count": h.value ? m.value.columns.length : 4
				})
			}, [l[11] ||= H("svg", {
				class: "sb-gt-lines",
				"aria-hidden": "true"
			}, null, -1), H("div", { class: D(["sb-gt-columns", { "sb-gt-columns-all": h.value }]) }, [(B(!0), V(z, null, R(g.value, (e) => (B(), V("div", {
				key: n.value + ":" + e.index,
				class: D(["sb-gt-column", { "sb-gt-column-all": h.value }]),
				"data-sb-gt-family": h.value ? String(e.index) : null
			}, [h.value ? (B(), V("div", {
				key: 0,
				class: "sb-gt-stage sb-gt-family-heading",
				style: E({ "--sb-gt-family-accent": e.group.accent })
			}, [H("strong", null, O(e.group.icon) + " " + O(e.group.name), 1), H("span", null, O(e.entries.length), 1)], 4)) : (B(), V("div", eS, [H("span", null, "0" + O(e.index + 1), 1), W(O(F(p)[e.index]), 1)])), H("div", tS, [(B(!0), V(z, null, R(e.entries, (e) => (B(), V("button", {
				key: e.id,
				type: "button",
				class: D(["sb-gt-node", {
					"is-selected": r.value === e.id,
					"sb-gt-search-dim": ee(e)
				}]),
				"data-sb-gt-action": "select",
				"data-id": e.id,
				"aria-pressed": r.value === e.id,
				onClick: (t) => ne(e.id)
			}, [H("span", rS, O(e.name), 1), H("span", iS, O(e.era || e.family || ""), 1)], 10, nS))), 128))])], 10, $x))), 128))], 2)], 6)], 8, Qx),
			v.value ? (B(), V("div", aS, [
				H("div", oS, [H("div", null, [
					l[12] ||= H("div", { class: "sb-gt-kicker" }, "ВЫБРАННОЕ НАПРАВЛЕНИЕ", -1),
					H("h3", null, O(v.value.name), 1),
					H("p", sS, O(v.value.era || "") + " · " + O(v.value.family || ""), 1)
				]), H("button", {
					type: "button",
					class: "btn primary sb-gt-open",
					"data-sb-gt-action": "open",
					"data-id": v.value.id,
					onClick: l[4] ||= (t) => e.treeApi.openGenre(v.value.id)
				}, "Открыть карточку ↗", 8, cS)]),
				H("p", lS, O(v.value.description || v.value.tagline || "Описание в карточке жанра."), 1),
				y.value.length ? (B(), V(z, { key: 0 }, [l[13] ||= H("h4", null, "Исторические связи", -1), H("div", uS, [(B(!0), V(z, null, R(y.value, (e) => (B(), V("button", {
					key: e.id + ":" + e.type,
					type: "button",
					class: "sb-gt-related-btn",
					"data-sb-gt-action": "select",
					"data-id": e.id,
					onClick: (t) => ne(e.id)
				}, [H("span", { class: D(["sb-gt-related-mark", "sb-gt-" + e.type]) }, O(e.direction), 3), H("span", null, [H("strong", null, O(e.name), 1), H("small", null, O(e.note), 1)])], 8, dS))), 128))])], 64)) : h.value ? G("", !0) : (B(), V("p", fS, "У этого узла пока нет нарисованных связей в выбранной схеме.")),
				h.value && b.value.length ? (B(), V(z, { key: 2 }, [H("h4", null, "Другие жанры раздела «" + O(v.value.family) + "»", 1), H("div", pS, [(B(!0), V(z, null, R(b.value, (e) => (B(), V("button", {
					key: e.id,
					type: "button",
					class: "sb-gt-related-btn",
					"data-sb-gt-action": "select",
					"data-id": e.id,
					onClick: (t) => ne(e.id)
				}, [l[14] ||= H("span", { class: "sb-gt-related-mark" }, "♫", -1), H("span", null, [H("strong", null, O(e.name), 1)])], 8, mS))), 128))])], 64)) : G("", !0)
			])) : G("", !0),
			l[15] ||= H("p", { class: "sb-gt-note" }, "Схема показывает основные исторические влияния и стилистические пересечения. Жанры могут развиваться параллельно; стрелки не означают единственное происхождение.", -1)
		]));
	}
}, [["__scopeId", "data-v-d7952660"]]);
// src/vue/academy/legacyGenreTreeBridge.js
function gS({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_GENRE_TREE, n = document.getElementById("app");
	if (!t?.snapshot || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-genre-tree"), o = a?.open ? a.querySelector("#sb-gt-inner") : null;
		if (r?.target === o && o?.isConnected || (r &&= (r.unmount(), null), !o)) return;
		let s = t.snapshot();
		if (!s?.trees?.length || !s?.genres?.length) return;
		let c = e(o, hS, {
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
var _S = {
	class: "gb-grid",
	"data-sb-vue-overview": ""
}, vS = { class: "gb-column" }, yS = { class: "gb-panel pink" }, bS = { class: "gb-unit" }, xS = { class: "gb-unit" }, SS = { class: "gb-unit" }, CS = { class: "gb-panel" }, wS = ["innerHTML"], TS = { class: "gb-column" }, ES = { class: "gb-panel blue" }, DS = {
	class: "gb-bpm-value",
	style: {
		"font-size": "26px",
		"font-weight": "900"
	}
}, OS = { class: "gb-artists" }, kS = { class: "gb-panel pink" }, AS = ["data-id"], jS = ["innerHTML"], MS = {
	__name: "GenreOverview",
	props: { genre: {
		type: Object,
		required: !0
	} },
	emits: ["select-tab"],
	setup(e) {
		return (t, n) => (B(), V("div", _S, [H("div", vS, [H("section", yS, [
			n[7] ||= H("div", { class: "gb-sup" }, "01 / ЗНАКОМСТВО С ЖАНРОМ", -1),
			n[8] ||= H("h2", null, "Характер и звучание", -1),
			H("p", null, [H("strong", null, O(e.genre.tagline), 1)]),
			H("p", null, O(e.genre.description), 1),
			H("div", bS, [n[2] ||= H("b", null, "🎸", -1), H("div", null, [n[1] ||= H("strong", null, "Инструменты", -1), H("span", null, O(e.genre.instruments) + ".", 1)])]),
			H("div", xS, [n[4] ||= H("b", null, "🎛️", -1), H("div", null, [n[3] ||= H("strong", null, "Саунд", -1), H("span", null, O(e.genre.style) + ".", 1)])]),
			H("div", SS, [n[6] ||= H("b", null, "✍️", -1), H("div", null, [n[5] ||= H("strong", null, "Тематика песен", -1), H("span", null, O(e.genre.themes) + ".", 1)])])
		]), H("section", CS, [
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
			}, null, 8, wS)])
		])]), H("div", TS, [H("section", ES, [
			n[12] ||= H("div", { class: "gb-sup" }, "02 / ПАСПОРТ НАПРАВЛЕНИЯ", -1),
			n[13] ||= H("h2", null, "История и сцена", -1),
			n[14] ||= H("div", { class: "info-label" }, "Эпоха", -1),
			H("p", null, O(e.genre.era), 1),
			n[15] ||= H("div", { class: "info-label" }, "Диапазон темпа", -1),
			H("p", DS, O(e.genre.bpm[0]) + "–" + O(e.genre.bpm[1]) + " BPM", 1),
			n[16] ||= H("div", { class: "info-label" }, "Исполнители для знакомства", -1),
			H("div", OS, [(B(!0), V(z, null, R(e.genre.artists, (e) => (B(), V("span", { key: e }, O(e), 1))), 128))])
		]), H("section", kS, [n[18] ||= da("<div class=\"gb-sup\">04 / ТВОЯ МУЗЫКА</div><h2>Преврати знания в трек</h2><p>Выбери вокал, настроение и темп, затем создай промпт и структуру песни в Suno Studio.</p><div class=\"gb-unit\"><b>🎤</b><div><strong>Вокал</strong><span>Мужской, женский или дуэт; можно использовать русский язык.</span></div></div><div class=\"gb-unit\"><b>⚡</b><div><strong>Динамика</strong><span>Настрой энергию и характер припева под историю.</span></div></div>", 5), H("button", {
			type: "button",
			class: "btn primary small",
			"data-action": "use-genre",
			"data-id": e.genre.id
		}, [H("span", {
			innerHTML: e.genre.icons.studio,
			"aria-hidden": "true"
		}, null, 8, jS), n[17] ||= W(" Открыть студию ", -1)], 8, AS)])])]));
	}
}, NS = {
	key: 0,
	id: "sb-artist-expanded",
	class: "ahx-wrap",
	"data-sb-vue-artists": ""
}, PS = { class: "ahx-intro" }, FS = { class: "gb-eyebrow" }, IS = {
	class: "ahx-toolbar",
	role: "group",
	"aria-label": "Музыкальные сцены"
}, LS = ["aria-pressed"], RS = ["aria-pressed"], zS = { class: "ahx-filters" }, BS = { class: "ahx-search" }, VS = ["innerHTML"], HS = {
	class: "ahx-filter-buttons",
	role: "group",
	"aria-label": "Фильтр исполнителей"
}, US = [
	"data-vue-artist-filter",
	"aria-pressed",
	"onClick"
], WS = {
	id: "ahx-count",
	class: "ahx-count",
	"aria-live": "polite"
}, GS = { class: "ahx-section-head" }, KS = { class: "ahx-eyebrow" }, qS = { class: "ahx-num" }, JS = { class: "ahx-grid" }, YS = ["data-ahx-group"], XS = { class: "ahx-card-top" }, ZS = {
	class: "ahx-avatar",
	"aria-hidden": "true"
}, QS = { class: "ahx-title" }, $S = { class: "ahx-era" }, eC = {
	key: 0,
	class: "ahx-track"
}, tC = {
	id: "ahx-no-results",
	class: "ahx-no-results"
}, nC = {
	key: 1,
	class: "ahx-empty"
}, rC = {
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
			(e === "ru" || e === "world") && (n.value = e, t.catalog.setScene(e), r.value = "", i.value = "all", await Dn(), t.enhanceProfiles?.());
		}
		return L(() => t.enhanceProfiles?.()), xr(() => t.enhanceProfiles?.()), (t, u) => a.value ? (B(), V("div", NS, [
			H("div", PS, [
				H("div", FS, "АКАДЕМИЯ SUNOBOOM · " + O(e.genre.name), 1),
				u[4] ||= H("h2", null, "Исполнители и композиторы", -1),
				H("p", null, O(a.value.description), 1)
			]),
			H("div", IS, [H("button", {
				type: "button",
				"data-vue-artist-scene": "world",
				"aria-pressed": n.value === "world",
				class: D({ on: n.value === "world" }),
				onClick: u[0] ||= (e) => l("world")
			}, [u[5] ||= W(" 🌍 Мировая сцена ", -1), H("span", null, O(a.value.worldCount), 1)], 10, LS), H("button", {
				type: "button",
				"data-vue-artist-scene": "ru",
				"aria-pressed": n.value === "ru",
				class: D({ on: n.value === "ru" }),
				onClick: u[1] ||= (e) => l("ru")
			}, [u[6] ||= W(" 🎤 Русскоязычные ", -1), H("span", null, O(a.value.ruCount), 1)], 10, RS)]),
			c.value ? (B(), V(z, { key: 0 }, [
				H("div", zS, [H("label", BS, [H("span", {
					"aria-hidden": "true",
					innerHTML: e.genre.icons.overview
				}, null, 8, VS), I(H("input", {
					"onUpdate:modelValue": u[2] ||= (e) => r.value = e,
					type: "search",
					"data-vue-artist-search": "",
					placeholder: "Найти исполнителя или произведение…",
					"aria-label": "Поиск по исполнителям"
				}, null, 512), [[q, r.value]])]), H("div", HS, [(B(), V(z, null, R([
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
				}, O(e.label), 9, US)), 64))])]),
				H("p", WS, "Показано " + O(s.value) + " из " + O(c.value) + " исполнителей.", 1),
				(B(!0), V(z, null, R(o.value, (e) => I((B(), V("section", {
					key: e.index,
					class: "ahx-section",
					"data-ahx-section": ""
				}, [H("div", GS, [H("div", null, [H("span", KS, "0" + O(e.index + 1) + " / ИСПОЛНИТЕЛИ", 1), H("h3", null, O(e.index ? "Современная сцена и продолжатели" : "Классика и предшественники"), 1)]), H("span", qS, O(e.artists.length), 1)]), H("div", JS, [(B(!0), V(z, null, R(e.artists, (e) => (B(), V("article", {
					key: e.key,
					class: "ahx-card",
					"data-ahx-group": e.group
				}, [
					H("div", XS, [H("span", ZS, O(e.initials), 1), H("div", QS, [H("h4", null, O(e.name), 1), H("span", $S, O(e.period || "Музыкальная сцена"), 1)])]),
					H("span", { class: D(["ahx-role", { "ahx-role-neighbor": e.group === "adjacent" }]) }, O(e.label), 3),
					H("p", null, O(e.bio || "Музыкальное направление и характерный творческий почерк."), 1),
					e.track ? (B(), V("div", eC, [u[7] ||= H("small", null, "Ориентир для прослушивания", -1), H("strong", null, "♫ " + O(e.track), 1)])) : G("", !0)
				], 8, YS))), 128))])])), [[$a, e.artists.length]])), 128)),
				I(H("div", tC, " По заданному поиску исполнители не найдены. Попробуй другой запрос или выбери «Все». ", 512), [[$a, s.value === 0]])
			], 64)) : (B(), V("div", nC, [
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
}, iC = {
	class: "idea-grid",
	"data-sb-vue-ideas": ""
}, aC = { class: "idea-badge" }, oC = { class: "actions" }, sC = ["data-id", "data-i"], cC = ["innerHTML"], lC = [
	"data-id",
	"data-i",
	"aria-pressed"
], uC = ["innerHTML"], dC = {
	__name: "GenreIdeas",
	props: { genre: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (B(), V("div", iC, [(B(!0), V(z, null, R(e.genre.allIdeas, (t) => (B(), V("div", {
			key: t.index,
			class: "idea"
		}, [
			H("div", aC, O(e.genre.name) + " · " + O(t.mood), 1),
			H("h3", null, O(t.title), 1),
			H("p", null, O(t.pitch), 1),
			H("div", oC, [H("button", {
				type: "button",
				class: "btn primary small",
				"data-action": "idea-use",
				"data-id": e.genre.id,
				"data-i": t.index
			}, [H("span", {
				"aria-hidden": "true",
				innerHTML: e.genre.icons.studio
			}, null, 8, cC), n[0] ||= W(" В студию ", -1)], 8, sC), H("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "idea-save",
				"data-id": e.genre.id,
				"data-i": t.index,
				"aria-pressed": t.saved ? "true" : "false"
			}, [H("span", {
				"aria-hidden": "true",
				innerHTML: e.genre.icons.heart
			}, null, 8, uC), W(" " + O(t.saved ? "Сохранено" : "Сохранить"), 1)], 8, lC)])
		]))), 128))]));
	}
}, fC = {
	class: "panel",
	"data-sb-vue-prompts": ""
}, pC = { class: "idea-grid" }, mC = { class: "idea" }, hC = ["data-id"], gC = ["innerHTML"], _C = { class: "idea" }, vC = ["data-id"], yC = ["innerHTML"], bC = {
	__name: "GenrePrompts",
	props: { genre: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (B(), V("div", fC, [
			n[5] ||= H("h3", null, "Шаблоны звучания", -1),
			n[6] ||= H("p", null, "Начни с одного из вариантов. Он перенесёт настройки жанра в конструктор — там можно выбрать вокал, настроение и язык.", -1),
			H("div", pC, [H("div", mC, [
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
				}, null, 8, gC)], 8, hC)
			]), H("div", _C, [
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
				}, null, 8, yC)], 8, vC)
			])])
		]));
	}
}, xC = { class: "gb-hero" }, SC = { class: "gb-content" }, CC = { class: "gb-eyebrow" }, wC = { class: "gb-title" }, TC = { class: "gb-desc" }, EC = { class: "gb-tags" }, DC = { class: "gb-buttons" }, OC = ["data-id"], kC = ["innerHTML"], AC = ["data-id"], jC = ["innerHTML"], MC = {
	class: "gb-vinyl",
	"aria-hidden": "true"
}, NC = { class: "gb-equalizer" }, PC = { class: "gb-facts" }, FC = { class: "gb-fact" }, IC = { class: "gb-fact" }, LC = { class: "gb-fact" }, RC = { class: "gb-fact" }, zC = { class: "genre-detail-layout" }, BC = {
	class: "genre-side-nav",
	"aria-label": "ЖАНР-НАВ — меню жанра"
}, VC = {
	class: "genre-side-links",
	"aria-label": "Разделы жанра"
}, HC = [
	"data-tab",
	"aria-current",
	"onClick"
], UC = ["innerHTML"], WC = {
	class: "genre-detail-content",
	id: "genre-nav-content",
	"aria-label": "Содержимое раздела жанра"
}, GC = ["innerHTML"], KC = {
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
			typeof a == "string" && (r.value = e, i.value = a, await Dn(), window.innerWidth <= 850 && document.getElementById("genre-nav-content")?.scrollIntoView({
				block: "start",
				behavior: "smooth"
			}));
		}
		return (t, o) => (B(), V("div", {
			class: "genre-bright",
			style: E({ "--accent": e.genre.color })
		}, [H("div", xC, [
			o[5] ||= H("div", { class: "gb-top" }, [H("button", {
				type: "button",
				class: "back",
				"data-action": "academy-back",
				"aria-label": "Назад к разделу Академии"
			}, "← Назад"), H("small", null, "SUNOBOOM · MUSIC ATLAS")], -1),
			H("div", SC, [H("div", null, [
				H("div", CC, O(e.genre.family) + " · " + O(e.genre.era), 1),
				H("h1", wC, O(e.genre.name), 1),
				H("p", TC, O(e.genre.description), 1),
				H("div", EC, [
					H("span", null, O(e.genre.tagline), 1),
					H("span", null, O(e.genre.bpm[0]) + "–" + O(e.genre.bpm[1]) + " BPM", 1),
					H("span", null, O(e.genre.ideasCount) + " идеи", 1)
				]),
				H("div", DC, [H("button", {
					type: "button",
					class: "btn primary",
					"data-action": "use-genre",
					"data-id": e.genre.id
				}, [H("span", {
					innerHTML: e.genre.icons.studio,
					"aria-hidden": "true"
				}, null, 8, kC), o[0] ||= W(" Создать в Suno ", -1)], 8, OC), H("button", {
					type: "button",
					class: "btn ghost",
					"data-action": "favorite",
					"data-id": e.genre.id
				}, [H("span", {
					innerHTML: e.genre.icons.heart,
					"aria-hidden": "true"
				}, null, 8, jC), W(" " + O(e.genre.favorite ? "В избранном" : "В избранное"), 1)], 8, AC)])
			]), H("div", MC, [H("div", NC, [(B(), V(z, null, R(9, (e) => H("i", { key: e })), 64))])])]),
			H("div", PC, [
				H("div", FC, [o[1] ||= H("small", null, "История", -1), H("strong", null, O(e.genre.era), 1)]),
				H("div", IC, [o[2] ||= H("small", null, "Темп", -1), H("strong", null, O(e.genre.bpm[0]) + "–" + O(e.genre.bpm[1]) + " BPM", 1)]),
				H("div", LC, [o[3] ||= H("small", null, "Треки", -1), H("strong", null, O(e.genre.ideasCount) + " сюжетных идеи", 1)]),
				H("div", RC, [o[4] ||= H("small", null, "Артисты", -1), H("strong", null, O(e.genre.artistCount) + " ориентиров", 1)])
			])
		]), H("div", zC, [H("aside", BC, [o[7] ||= H("div", { class: "genre-side-head" }, [H("span", null, "ЖАНР-НАВ"), H("small", null, "Разделы карточки")], -1), H("nav", VC, [(B(), V(z, null, R(n, (t) => H("button", {
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
			}, null, 8, UC),
			H("span", null, O(t.label), 1),
			o[6] ||= H("span", {
				class: "genre-side-chevron",
				"aria-hidden": "true"
			}, "›", -1)
		], 10, HC)), 64))])]), H("section", WC, [r.value === "overview" ? (B(), ra(MS, {
			key: 0,
			genre: e.genre,
			onSelectTab: a
		}, null, 8, ["genre"])) : r.value === "artists" && e.artistCatalog ? (B(), ra(rC, {
			key: 1,
			genre: e.genre,
			catalog: e.artistCatalog,
			"enhance-profiles": e.enhanceArtistProfiles
		}, null, 8, [
			"genre",
			"catalog",
			"enhance-profiles"
		])) : r.value === "ideas" ? (B(), ra(dC, {
			key: 2,
			genre: e.genre
		}, null, 8, ["genre"])) : r.value === "prompts" ? (B(), ra(bC, {
			key: 3,
			genre: e.genre
		}, null, 8, ["genre"])) : (B(), V("div", {
			key: 4,
			innerHTML: i.value
		}, null, 8, GC))])])], 4));
	}
};
// src/vue/academy/legacyGenreDetailBridge.js
function qC({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_GENRE, n = document.getElementById("app");
	if (!n || !t || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-genre-detail");
		if (r?.target === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o?.id) return;
		let s = e(a, KC, {
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
var JC = { class: "panel" }, YC = { class: "field" }, XC = ["value"], ZC = ["value"], QC = { class: "form-grid" }, $C = { class: "field" }, ew = ["value"], tw = ["value"], nw = { class: "field" }, rw = ["value"], iw = ["value"], aw = { class: "field" }, ow = ["value"], sw = ["value"], cw = { class: "field" }, lw = ["value"], uw = ["value"], dw = { class: "field" }, fw = { for: "b-tempo" }, pw = {
	id: "tempo-num",
	style: { color: "#ffa8d5" }
}, mw = { class: "range" }, hw = ["value"], gw = { id: "bpm-output" }, _w = {
	class: "muted",
	style: { "font-size": "11px" }
}, vw = { class: "field" }, yw = ["value"], bw = { class: "field" }, xw = ["value"], Sw = { class: "checkrow" }, Cw = ["checked", "onChange"], ww = {
	class: "panel",
	style: {
		position: "sticky",
		top: "20px"
	}
}, Tw = {
	class: "output",
	id: "prompt-output"
}, Ew = { class: "counter" }, Dw = { id: "prompt-count" }, Ow = { class: "two-col" }, kw = {
	class: "btn primary",
	type: "button",
	"data-action": "copy-prompt"
}, Aw = ["innerHTML"], jw = {
	class: "btn ghost",
	type: "button",
	"data-action": "save-prompt"
}, Mw = ["innerHTML"], Nw = { class: "list-pills" }, Pw = {
	__name: "StudioBuilder",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ $t(t.api.snapshot()), r = K(() => n.value?.settings || {}), i = K(() => n.value?.genre || {
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
		return L(() => window.addEventListener("sunoboom:studio-updated", d)), Cr(() => window.removeEventListener("sunoboom:studio-updated", d)), (e, t) => (B(), V(z, null, [H("div", JC, [
			t[17] ||= H("h3", null, "Параметры трека", -1),
			H("div", YC, [t[8] ||= H("label", { for: "b-genre" }, "Жанр", -1), H("select", {
				id: "b-genre",
				value: r.value.genre,
				onChange: t[0] ||= (e) => f("genre", e.target.value)
			}, [(B(!0), V(z, null, R(n.value.genres, (e) => (B(), V("option", {
				key: e.id,
				value: e.id
			}, O(e.name), 9, ZC))), 128))], 40, XC)]),
			H("div", QC, [
				H("div", $C, [t[9] ||= H("label", { for: "b-mood" }, "Настроение", -1), H("select", {
					id: "b-mood",
					value: r.value.mood,
					onChange: t[1] ||= (e) => f("mood", e.target.value)
				}, [(B(), V(z, null, R(o, ([e, t]) => H("option", {
					key: e,
					value: e
				}, O(t), 9, tw)), 64))], 40, ew)]),
				H("div", nw, [t[10] ||= H("label", { for: "b-vocal" }, "Вокал", -1), H("select", {
					id: "b-vocal",
					value: r.value.vocal,
					onChange: t[2] ||= (e) => f("vocal", e.target.value)
				}, [(B(), V(z, null, R(s, ([e, t]) => H("option", {
					key: e,
					value: e
				}, O(t), 9, iw)), 64))], 40, rw)]),
				H("div", aw, [t[11] ||= H("label", { for: "b-lang" }, "Язык текста", -1), H("select", {
					id: "b-lang",
					value: r.value.language,
					onChange: t[3] ||= (e) => f("language", e.target.value)
				}, [(B(), V(z, null, R(c, ([e, t]) => H("option", {
					key: e,
					value: e
				}, O(t), 9, sw)), 64))], 40, ow)]),
				H("div", cw, [t[12] ||= H("label", { for: "b-energy" }, "Энергия", -1), H("select", {
					id: "b-energy",
					value: r.value.energy,
					onChange: t[4] ||= (e) => f("energy", e.target.value)
				}, [(B(), V(z, null, R(l, ([e, t]) => H("option", {
					key: e,
					value: e
				}, O(t), 9, uw)), 64))], 40, lw)])
			]),
			H("div", dw, [
				H("label", fw, [
					t[13] ||= W("Темп · ", -1),
					H("span", pw, O(r.value.tempo), 1),
					t[14] ||= W(" BPM", -1)
				]),
				H("div", mw, [H("input", {
					type: "range",
					id: "b-tempo",
					min: "65",
					max: "200",
					step: "1",
					value: r.value.tempo,
					onInput: t[5] ||= (e) => f("tempo", Number(e.target.value))
				}, null, 40, hw), H("output", gw, O(r.value.tempo) + " BPM", 1)]),
				H("span", _w, " Обычно для «" + O(i.value.name) + "»: " + O(i.value.bpm[0]) + "–" + O(i.value.bpm[1]) + " BPM ", 1)
			]),
			H("div", vw, [t[15] ||= H("label", { for: "b-theme" }, "Тема / история трека", -1), H("textarea", {
				id: "b-theme",
				rows: "2",
				value: r.value.theme,
				onInput: t[6] ||= (e) => f("theme", e.target.value),
				placeholder: "О чём будет песня?"
			}, null, 40, yw)]),
			H("div", bw, [t[16] ||= H("label", { for: "b-extra" }, "Дополнительные инструкции (необязательно)", -1), H("textarea", {
				id: "b-extra",
				rows: "2",
				value: r.value.extra,
				onInput: t[7] ||= (e) => f("extra", e.target.value),
				placeholder: "Например: memorable chorus, short guitar solo"
			}, null, 40, xw)]),
			H("div", Sw, [(B(), V(z, null, R(u, ([e, t]) => H("label", { key: e }, [H("input", {
				type: "checkbox",
				checked: r.value[e],
				onChange: (t) => f(e, t.target.checked)
			}, null, 40, Cw), W(O(t), 1)])), 64))])
		]), H("div", ww, [
			t[21] ||= H("div", { class: "eyebrow" }, "Готово к Suno", -1),
			t[22] ||= H("h3", null, "Твой промпт", -1),
			H("div", Tw, O(a.value), 1),
			H("div", Ew, [t[18] ||= H("span", null, "Максимум 1000 символов", -1), H("b", Dw, O(a.value.length) + " / 1000", 1)]),
			H("div", Ow, [H("button", kw, [H("span", {
				"aria-hidden": "true",
				innerHTML: n.value.icons.copy
			}, null, 8, Aw), t[19] ||= W(" Копировать ", -1)]), H("button", jw, [H("span", {
				"aria-hidden": "true",
				innerHTML: n.value.icons.save
			}, null, 8, Mw), t[20] ||= W(" Сохранить ", -1)])]),
			t[23] ||= H("div", { class: "spacer" }, null, -1),
			t[24] ||= H("div", { class: "notice" }, [H("strong", null, "Подсказка:"), W(" промпт задаёт стиль, а текст песни можно вводить отдельно в Suno. Результат генерации может отличаться от запроса.")], -1),
			t[25] ||= H("div", { class: "spacer" }, null, -1),
			t[26] ||= H("div", { class: "info-label" }, "Музыкальный профиль", -1),
			H("div", Nw, [
				H("span", null, O(i.value.name), 1),
				H("span", null, O(i.value.family), 1),
				H("span", null, O(i.value.bpm[0]) + "–" + O(i.value.bpm[1]) + " BPM", 1)
			])
		])], 64));
	}
};
// src/vue/studio/legacyStudioBridge.js
function Fw({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_STUDIO, n = document.getElementById("app");
	if (!n || !t || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector(".studio-grid");
		if (r?.target === a || (r &&= (r.unmount(), null), !a || !t.snapshot())) return;
		let o = e(a, Pw, { api: t });
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
var Iw = { class: "gm-layout" }, Lw = { class: "gm-panel" }, Rw = { class: "gm-stack" }, zw = { class: "gm-row-top" }, Bw = { class: "gm-rank" }, Vw = { class: "gm-field gm-genre-select" }, Hw = ["for"], Uw = [
	"id",
	"value",
	"data-gm-genre"
], Ww = ["label"], Gw = ["value"], Kw = ["data-gm-value"], qw = [
	"data-slot",
	"aria-label",
	"disabled"
], Jw = { class: "gm-slider-line" }, Yw = [
	"max",
	"value",
	"data-gm-weight",
	"aria-label"
], Xw = { class: "gm-meter" }, Zw = ["data-gm-meter"], Qw = { class: "gm-sub" }, $w = { class: "gm-actions" }, eT = ["disabled"], tT = {
	class: "gm-mixture",
	"aria-label": "Доли музыкальных жанров"
}, nT = ["data-gm-mixbar", "title"], rT = { class: "gm-form-grid" }, iT = ["for"], aT = [
	"id",
	"value",
	"data-gm-setting"
], oT = ["value"], sT = { class: "gm-tempo" }, cT = ["checked"], lT = { class: "gm-tempo-row" }, uT = ["value", "disabled"], dT = { id: "gm-bpm" }, fT = { class: "gm-field" }, pT = ["value"], mT = { class: "gm-checks" }, hT = ["data-gm-setting", "checked"], gT = { class: "gm-panel gm-output-panel" }, _T = {
	class: "gm-output",
	id: "gm-prompt",
	"aria-live": "polite"
}, vT = { class: "gm-prompt-meta" }, yT = { id: "gm-count" }, bT = { class: "gm-field" }, xT = ["value"], ST = { class: "gm-saved-list" }, CT = {
	key: 0,
	class: "gm-muted"
}, wT = { class: "gm-saved-actions" }, TT = ["data-id"], ET = ["data-id", "aria-label"], DT = {
	__name: "GenreMixer",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ $t(t.api.snapshot()), r = K(() => n.value?.rows || []), i = K(() => n.value?.genres || []), a = K(() => n.value?.settings || {}), o = K(() => n.value?.options || {}), s = K(() => n.value?.saved || []), c = K(() => n.value?.prompt || ""), l = K(() => n.value?.tempo || 115), u = K(() => n.value?.title || "");
		function d() {
			let e = t.api.snapshot();
			e && (n.value = e);
		}
		L(() => window.addEventListener("sunoboom:mixer-updated", d)), Cr(() => window.removeEventListener("sunoboom:mixer-updated", d));
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
		], -1), H("div", Iw, [H("section", Lw, [
			t[3] ||= H("div", { class: "gm-section-head" }, [H("div", null, [H("h2", null, "Формула звучания"), H("p", null, "Меняй жанры и двигай ползунки — сумма всегда равна 100%.")]), H("span", { class: "gm-total" }, "Σ 100%")], -1),
			H("div", Rw, [(B(!0), V(z, null, R(r.value, (e, t) => (B(), V("article", {
				key: e.id,
				class: "gm-row",
				style: E({ "--gm-color": e.color })
			}, [
				H("div", zw, [
					H("span", Bw, O(String(t + 1).padStart(2, "0")), 1),
					H("div", Vw, [H("label", { for: "gm-genre-" + t }, "Музыкальное направление", 8, Hw), H("select", {
						id: "gm-genre-" + t,
						value: e.id,
						"data-gm-genre": t
					}, [(B(!0), V(z, null, R(f(t), (e) => (B(), V("optgroup", {
						key: e.family,
						label: e.family
					}, [(B(!0), V(z, null, R(e.items, (e) => (B(), V("option", {
						key: e.id,
						value: e.id
					}, O(e.name), 9, Gw))), 128))], 8, Ww))), 128))], 8, Uw)]),
					H("span", {
						class: "gm-percent",
						"data-gm-value": t
					}, O(e.weight) + "%", 9, Kw),
					H("button", {
						type: "button",
						class: "gm-remove",
						"data-action": "gm-remove",
						"data-slot": t,
						"aria-label": "Убрать жанр " + e.name,
						title: "Убрать жанр",
						disabled: r.value.length <= 2
					}, "×", 8, qw)
				]),
				H("div", Jw, [H("input", {
					type: "range",
					min: "5",
					max: 100 - 5 * (r.value.length - 1),
					step: "1",
					value: e.weight,
					"data-gm-weight": t,
					"aria-label": "Доля жанра " + e.name
				}, null, 8, Yw), H("div", Xw, [H("span", {
					"data-gm-meter": t,
					style: E({ width: e.weight + "%" })
				}, null, 12, Zw)])]),
				H("p", Qw, O(e.family) + " · " + O(e.tagline) + " · " + O(e.instruments), 1)
			], 4))), 128))]),
			H("div", $w, [H("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "gm-add",
				disabled: r.value.length >= 4
			}, "＋ Добавить жанр", 8, eT), t[0] ||= H("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "gm-equal"
			}, "Поровну", -1)]),
			H("div", tT, [(B(!0), V(z, null, R(r.value, (e) => (B(), V("span", {
				key: e.id,
				"data-gm-mixbar": e.id,
				style: E({
					width: e.weight + "%",
					background: e.color
				}),
				title: e.name + ": " + e.weight + "%"
			}, null, 12, nT))), 128))]),
			t[4] ||= H("p", { class: "gm-muted" }, "Проценты — творческий ориентир для генерации, а не гарантия точного соотношения в готовой музыке.", -1),
			t[5] ||= H("div", { class: "gm-divider" }, null, -1),
			t[6] ||= H("h2", null, "Характер композиции", -1),
			H("div", rT, [(B(!0), V(z, null, R(p.value, (e) => (B(), V("div", {
				key: e.key,
				class: "gm-field"
			}, [H("label", { for: "gm-" + e.key }, O(e.label), 9, iT), H("select", {
				id: "gm-" + e.key,
				value: a.value[e.key],
				"data-gm-setting": e.key
			}, [(B(!0), V(z, null, R(e.choices, ([e, t]) => (B(), V("option", {
				key: e,
				value: e
			}, O(t), 9, oT))), 128))], 8, aT)]))), 128))]),
			H("div", sT, [H("label", null, [H("input", {
				type: "checkbox",
				"data-gm-setting": "autoTempo",
				checked: a.value.autoTempo
			}, null, 8, cT), t[1] ||= W(" Определять темп по жанрам", -1)]), H("div", lT, [H("input", {
				id: "gm-tempo",
				type: "range",
				min: "65",
				max: "200",
				value: l.value,
				"data-gm-setting": "tempo",
				disabled: a.value.autoTempo
			}, null, 8, uT), H("b", dT, O(l.value) + " BPM", 1)])]),
			H("div", fT, [t[2] ||= H("label", { for: "gm-theme" }, "Тема песни (необязательно)", -1), H("textarea", {
				id: "gm-theme",
				rows: "2",
				maxlength: "170",
				"data-gm-setting": "theme",
				value: a.value.theme,
				placeholder: "Например: ночной город, встреча после долгой разлуки"
			}, null, 8, pT)]),
			H("div", mT, [(B(), V(z, null, R(m, ([e, t]) => H("label", { key: e }, [H("input", {
				type: "checkbox",
				"data-gm-setting": e,
				checked: a.value[e]
			}, null, 8, hT), W(" " + O(t), 1)])), 64))])
		]), H("aside", gT, [
			t[9] ||= H("div", { class: "eyebrow" }, "Результат микширования", -1),
			t[10] ||= H("h2", null, "Гибридный Style-промпт", -1),
			H("div", _T, O(c.value), 1),
			H("div", vT, [t[7] ||= H("span", null, "На английском · готово для Suno", -1), H("b", yT, O(c.value.length) + " / 1000", 1)]),
			t[11] ||= da("<div class=\"gm-output-actions\"><button type=\"button\" class=\"btn primary\" data-action=\"gm-copy\">Копировать</button><button type=\"button\" class=\"btn ghost\" data-action=\"gm-to-studio\">В Suno Studio</button></div><button type=\"button\" class=\"btn ghost gm-full\" data-action=\"gm-save-prompt\">Сохранить в «Мои промпты»</button><div class=\"gm-divider\"></div><h3>Мои сочетания</h3>", 4),
			H("div", bT, [t[8] ||= H("label", { for: "gm-title" }, "Название сочетания", -1), H("input", {
				id: "gm-title",
				type: "text",
				maxlength: "90",
				"data-gm-title": "",
				value: u.value,
				placeholder: "Например: Северный электро-фолк"
			}, null, 8, xT)]),
			t[12] ||= H("button", {
				type: "button",
				class: "btn ghost gm-full",
				"data-action": "gm-save-mix"
			}, "Сохранить формулу", -1),
			H("div", ST, [s.value.length ? G("", !0) : (B(), V("p", CT, "Сохранённых сочетаний пока нет. Придумай свой микс и сохрани его.")), (B(!0), V(z, null, R(s.value, (e) => (B(), V("article", {
				key: e.id,
				class: "gm-saved"
			}, [H("div", null, [H("strong", null, O(e.title), 1), H("small", null, O(e.summary), 1)]), H("div", wT, [H("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "gm-load",
				"data-id": e.id
			}, "Открыть", 8, TT), H("button", {
				type: "button",
				class: "btn danger small",
				"data-action": "gm-delete",
				"data-id": e.id,
				"aria-label": "Удалить " + e.title
			}, "×", 8, ET)])]))), 128))]),
			t[13] ||= H("p", { class: "gm-muted" }, "Сохраняется в этом браузере и входит в общую JSON-копию данных SUNOBOOM. Подключение к ИИ для смешивания не требуется.", -1)
		])])], 64));
	}
};
// src/vue/studio/legacyMixerBridge.js
function OT({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_MIXER, n = document.getElementById("app");
	if (!t || !n || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-mixer-root");
		if (r?.target === a || (r &&= (r.unmount(), null), !a || !t.snapshot())) return;
		let o = e(a, DT, { api: t });
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
var kT = {
	class: "sbpa-tabs",
	role: "group",
	"aria-label": "Источник промпта"
}, AT = ["aria-pressed"], jT = ["aria-pressed"], MT = {
	key: 0,
	class: "sbpa-manual"
}, NT = ["value"], PT = ["value"], FT = ["value"], IT = {
	key: 1,
	class: "sbpa-context"
}, LT = {
	id: "sbpa-results",
	"aria-live": "polite"
}, RT = { class: "sbpa-scoreline" }, zT = {
	class: "sbpa-score",
	"aria-label": "Эвристическая оценка промпта"
}, BT = { class: "sbpa-score-info" }, VT = ["aria-valuenow"], HT = {
	key: 0,
	class: "sbpa-issues"
}, UT = {
	key: 1,
	class: "sbpa-clear"
}, WT = { class: "sbpa-actions" }, GT = {
	key: 0,
	type: "button",
	"data-sbpa-action": "load-studio"
}, KT = { id: "sbpa-proposal-slot" }, qT = {
	key: 0,
	class: "sbpa-proposal"
}, JT = { key: 0 }, YT = { key: 1 }, XT = { key: 2 }, ZT = {
	key: 3,
	class: "sbpa-alert"
}, QT = ["value"], $T = {
	__name: "PromptAuditor",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ $t(t.api.snapshot()), r = K(() => n.value?.mode === "manual"), i = K(() => n.value?.report || {
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
		return L(() => window.addEventListener("sunoboom:auditor-updated", l)), Cr(() => window.removeEventListener("sunoboom:auditor-updated", l)), (e, t) => (B(), V(z, null, [
			t[10] ||= H("header", { class: "sbpa-head" }, [H("div", null, [
				H("span", { class: "sbpa-eyebrow" }, "SUNOBOOM · ПРОВЕРКА"),
				H("h2", null, "Интеллектуальный аудитор промптов"),
				H("p", null, "Ищет повторы, противоречия, перегрузку и особенности жанра до отправки в Suno.")
			]), H("span", { class: "sbpa-local" }, "Проверка по правилам · без API")], -1),
			H("div", kT, [H("button", {
				type: "button",
				"data-sbpa-action": "studio",
				class: D({ active: !r.value }),
				"aria-pressed": !r.value
			}, "Текущий промпт Studio", 10, AT), H("button", {
				type: "button",
				"data-sbpa-action": "manual",
				class: D({ active: r.value }),
				"aria-pressed": r.value
			}, "Свой текст / вставка", 10, jT)]),
			r.value ? (B(), V("div", MT, [
				t[0] ||= H("label", { for: "sbpa-text" }, "Текст промпта", -1),
				H("textarea", {
					id: "sbpa-text",
					rows: "5",
					spellcheck: "false",
					placeholder: "Вставь текст на русском или английском…",
					value: n.value.manual
				}, null, 8, NT),
				t[1] ||= H("label", { for: "sbpa-genre" }, "Жанр для сопоставления с Академией", -1),
				H("select", {
					id: "sbpa-genre",
					value: a.value
				}, [(B(!0), V(z, null, R(o.value, (e) => (B(), V("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, FT))), 128))], 8, PT)
			])) : (B(), V("p", IT, " Проверяется актуальный промпт конструктора. Изменения настроек Studio отражаются здесь автоматически. ")),
			H("div", LT, [H("div", RT, [
				H("div", zT, [W(O(i.value.score), 1), t[2] ||= H("small", null, "/ 100", -1)]),
				H("div", BT, [
					H("strong", null, O(i.value.status), 1),
					t[3] ||= H("span", null, "Оценка ориентировочная: проверяется структура текста, а не качество будущей музыки.", -1),
					H("div", {
						class: "sbpa-meter",
						role: "progressbar",
						"aria-label": "Оценка промпта",
						"aria-valuenow": i.value.score,
						"aria-valuemin": "0",
						"aria-valuemax": "100"
					}, [H("span", { style: E({ width: i.value.score + "%" }) }, null, 4)], 8, VT)
				]),
				H("div", { class: D(["sbpa-limit", { over: i.value.length > 1e3 }]) }, O(i.value.length) + " / 1000 символов ", 3)
			]), i.value.issues?.length ? (B(), V("ul", HT, [(B(!0), V(z, null, R(i.value.issues, (e, t) => (B(), V("li", {
				key: t,
				class: D(["sbpa-item", "sbpa-" + e.kind])
			}, [H("div", null, [
				H("strong", null, O(e.title), 1),
				H("p", null, O(e.detail), 1),
				H("small", null, O(e.fix), 1)
			])], 2))), 128))])) : (B(), V("p", UT, " Явных противоречий и повторов по проверяемым правилам не найдено. "))]),
			H("div", WT, [t[4] ||= H("button", {
				type: "button",
				"data-sbpa-action": "preview",
				class: "sbpa-primary"
			}, " Показать улучшенный вариант ", -1), r.value ? (B(), V("button", GT, " Вставить текущий промпт Studio ")) : G("", !0)]),
			H("div", KT, [s.value ? (B(), V("div", qT, [
				H("h4", null, [t[5] ||= W("Предлагаемый вариант ", -1), H("small", null, O(c.value.text.length) + " / 1000", 1)]),
				c.value.removed.length ? (B(), V("p", YT, "Удалено фрагментов: " + O(c.value.removed.length) + ". Проверь смысл до копирования.", 1)) : (B(), V("p", JT, "Удалять нечего: текст уже без точных повторов.")),
				c.value.removed.length ? (B(), V("details", XT, [t[6] ||= H("summary", null, "Что изменилось", -1), H("ul", null, [(B(!0), V(z, null, R(c.value.removed, (e, t) => (B(), V("li", { key: t }, [H("b", null, O(e.reason) + ":", 1), W(" " + O(e.part), 1)]))), 128))])])) : G("", !0),
				c.value.complete ? G("", !0) : (B(), V("p", ZT, " Автоматического сокращения недостаточно. Уменьши текст вручную минимум на " + O(c.value.text.length - 1e3) + " символов. ", 1)),
				t[7] ||= H("label", { for: "sbpa-preview-text" }, "Редактируемый предпросмотр", -1),
				H("textarea", {
					id: "sbpa-preview-text",
					rows: "5",
					spellcheck: "false",
					value: c.value.text
				}, null, 8, QT),
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
function eE({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_AUDITOR, n = document.getElementById("app");
	if (!t || !n || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sbpa-auditor");
		if (r?.target === a || (r &&= (r.unmount(), null), !a || !t.snapshot())) return;
		let o = e(a, $T, { api: t });
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
var tE = ["data-sba-id", "data-sba-energy"], nE = { class: "sba-block-head" }, rE = ["data-sba-drag", "aria-label"], iE = { class: "sba-index" }, aE = {
	class: "sba-emoji",
	"aria-hidden": "true"
}, oE = { class: "sba-head-energy" }, sE = { class: "sba-block-actions" }, cE = ["data-id", "disabled"], lE = ["data-id", "disabled"], uE = ["data-id"], dE = ["data-id"], fE = { class: "sba-block-fields" }, pE = ["data-id", "value"], mE = ["value"], hE = ["data-id", "value"], gE = ["value"], _E = ["data-id", "value"], vE = ["value"], yE = { class: "sba-energy-field" }, bE = ["data-sba-output"], xE = ["value", "data-id"], SE = { class: "sba-instrument-field" }, CE = ["for"], wE = { class: "sba-instrument-row" }, TE = [
	"id",
	"data-id",
	"value"
], EE = ["id", "innerHTML"], DE = ["id"], OE = { class: "sba-sound-head" }, kE = ["data-id"], AE = ["data-id"], jE = ["id"], ME = {
	key: 0,
	class: "sba-sound-back"
}, NE = ["data-id"], PE = [
	"data-sba-sound-search",
	"data-id",
	"value",
	"placeholder"
], FE = ["id"], IE = { class: "sba-sound-info" }, LE = { key: 0 }, RE = ["data-id", "data-genre-id"], zE = {
	key: 0,
	class: "sba-sound-none"
}, BE = { class: "sba-sound-group" }, VE = [
	"disabled",
	"aria-disabled",
	"data-id",
	"data-sound-value"
], HE = {
	key: 0,
	class: "sba-sound-none"
}, UE = {
	key: 1,
	class: "sba-sound-foot"
}, WE = ["data-id"], GE = {
	key: 0,
	class: "sba-custom-label"
}, KE = ["data-id", "value"], qE = ["innerHTML"], JE = ["data-id", "aria-label"], YE = {
	key: 0,
	class: "sba-empty"
}, XE = ["aria-label"], ZE = [
	"data-sba-snake-id",
	"data-sba-energy",
	"aria-label",
	"title"
], QE = { class: "sba-snake-num" }, $E = {
	class: "sba-snake-icon",
	"aria-hidden": "true"
}, eD = { class: "sba-snake-title" }, tD = { class: "sba-snake-level" }, nD = ["title"], rD = {
	key: 0,
	class: "sba-snake-more"
}, iD = {
	key: 1,
	class: "sba-snake-empty"
}, aD = ["data-sba-hub-from"], oD = { class: "sba-transition-hub-route" }, sD = { class: "sba-transition-hub-number" }, cD = { class: "sba-transition-hub-names" }, lD = { class: "sba-transition-hub-controls" }, uD = [
	"data-id",
	"value",
	"aria-label"
], dD = ["value"], fD = [
	"data-id",
	"value",
	"aria-label"
], pD = ["value"], mD = [
	"data-id",
	"value",
	"aria-label"
], hD = ["value"], gD = { class: "sba-transition-hub-actions" }, _D = ["data-id", "title"], vD = ["data-id"], yD = {
	key: 1,
	class: "sba-transition-hub-empty"
}, bD = ["title"], xD = { class: "sba-chart-column" }, SD = {
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
		let t = e, n = /* @__PURE__ */ $t(t.api.snapshot()), r = K(() => n.value?.blocks || []), i = K(() => n.value?.sections || []), a = K(() => n.value?.voices || []), o = K(() => n.value?.energies || {}), s = K(() => n.value?.transitions || []), c = K(() => n.value?.transitionTypes || []), l = K(() => n.value?.transitionLengths || []), u = K(() => n.value?.transitionStrengths || []), d = K(() => n.value?.snakeExpanded ? r.value : r.value.slice(0, 12)), f = K(() => n.value?.transitionHubExpanded ? s.value : s.value.slice(0, 3)), p = [
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
		L(() => window.addEventListener("sunoboom:arranger-updated", m)), Cr(() => window.removeEventListener("sunoboom:arranger-updated", m));
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
			}, [H("div", nE, [
				H("span", {
					class: "sba-drag",
					draggable: "true",
					"data-sba-drag": e.id,
					title: "Перетащить блок",
					"aria-label": "Перетащить " + e.sectionName
				}, "⠿", 8, rE),
				H("span", iE, O(String(t + 1).padStart(2, "0")), 1),
				H("span", aE, O(e.icon), 1),
				H("strong", null, O(e.label), 1),
				H("span", oE, "Энергия " + O(e.energy) + "/5", 1),
				H("div", sE, [
					H("button", {
						type: "button",
						"data-sba-action": "up",
						"data-id": e.id,
						"aria-label": "Переместить вверх",
						disabled: t === 0
					}, "↑", 8, cE),
					H("button", {
						type: "button",
						"data-sba-action": "down",
						"data-id": e.id,
						"aria-label": "Переместить вниз",
						disabled: t === r.value.length - 1
					}, "↓", 8, lE),
					H("button", {
						type: "button",
						"data-sba-action": "duplicate",
						"data-id": e.id,
						"aria-label": "Дублировать блок"
					}, "⧉", 8, uE),
					H("button", {
						type: "button",
						"data-sba-action": "remove",
						"data-id": e.id,
						"aria-label": "Удалить блок"
					}, "×", 8, dE)
				])
			]), H("div", fE, [
				H("label", null, [n[0] ||= W("Раздел ", -1), H("select", {
					"data-sba-field": "type",
					"data-id": e.id,
					value: e.type
				}, [(B(!0), V(z, null, R(i.value, (e) => (B(), V("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, mE))), 128))], 8, pE)]),
				H("label", null, [n[1] ||= W("Тактов ", -1), H("select", {
					"data-sba-field": "bars",
					"data-id": e.id,
					value: e.bars
				}, [(B(), V(z, null, R(p, (e) => H("option", {
					key: e,
					value: e
				}, O(e), 9, gE)), 64))], 8, hE)]),
				H("label", null, [n[2] ||= W("Вокал ", -1), H("select", {
					"data-sba-field": "vocal",
					"data-id": e.id,
					value: e.vocal
				}, [(B(!0), V(z, null, R(a.value, (e) => (B(), V("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, vE))), 128))], 8, _E)]),
				H("label", yE, [
					n[3] ||= W("Энергия ", -1),
					H("output", { "data-sba-output": e.id }, O(e.energy) + "/5 · " + O(o.value[e.energy]), 9, bE),
					H("input", {
						type: "range",
						min: "1",
						max: "5",
						step: "1",
						value: e.energy,
						"data-sba-field": "energy",
						"data-id": e.id
					}, null, 8, xE)
				]),
				H("div", SE, [
					H("label", { for: "sba-instruments-" + e.id }, "Инструменты / приём", 8, CE),
					H("div", wE, [H("input", {
						type: "text",
						id: "sba-instruments-" + e.id,
						maxlength: "300",
						"data-sba-field": "instruments",
						"data-id": e.id,
						value: e.instruments,
						placeholder: "Введи вручную или выбери рекомендацию",
						autocomplete: "off"
					}, null, 8, TE)]),
					H("div", {
						class: "sba-quick-sounds",
						id: "sba-quick-" + e.id,
						innerHTML: e.quickSounds
					}, null, 8, EE),
					e.soundPanel ? (B(), V("div", {
						key: 0,
						class: "sba-sound-panel",
						id: "sba-sound-panel-" + e.id,
						"aria-label": "Выбор инструментов и приёмов"
					}, [
						H("div", OE, [n[4] ||= H("strong", null, "Библиотека инструментов и приёмов", -1), H("button", {
							type: "button",
							"data-sba-action": "sound-close",
							"data-id": e.id,
							"aria-label": "Закрыть подбор"
						}, "×", 8, kE)]),
						H("button", {
							type: "button",
							class: "sba-sound-genre-trigger",
							"data-sba-action": "sound-switch-mode",
							"data-id": e.id
						}, [
							n[5] ||= W(" Жанр: ", -1),
							H("b", null, O(e.soundPanel.genreName), 1),
							n[6] ||= H("span", null, "⌄", -1)
						], 8, AE),
						H("div", { id: "sba-sound-body-" + e.id }, [
							e.soundPanel.mode === "genres" ? (B(), V("div", ME, [H("button", {
								type: "button",
								"data-sba-action": "sound-switch-mode",
								"data-id": e.id
							}, " ← К инструментам ", 8, NE)])) : G("", !0),
							H("input", {
								type: "search",
								class: "sba-sound-search",
								"data-sba-sound-search": e.soundPanel.mode,
								"data-id": e.id,
								value: e.soundPanel.query,
								placeholder: e.soundPanel.mode === "genres" ? "Поиск по всей Академии..." : "Поиск инструмента или приёма...",
								autocomplete: "off",
								"aria-label": "Поиск инструментов или жанров"
							}, null, 8, PE),
							H("div", {
								class: "sba-sound-list",
								id: "sba-sound-results-" + e.id
							}, [e.soundPanel.mode === "genres" ? (B(), V(z, { key: 0 }, [
								H("div", IE, [W(" Найдено жанров: " + O(e.soundPanel.total) + " ", 1), e.soundPanel.total > e.soundPanel.matches.length ? (B(), V("span", LE, " · уточни запрос ")) : G("", !0)]),
								(B(!0), V(z, null, R(e.soundPanel.matches, (t) => (B(), V("button", {
									key: t.id,
									type: "button",
									class: "sba-sound-genre-row",
									"data-sba-action": "sound-set-genre",
									"data-id": e.id,
									"data-genre-id": t.id
								}, [H("span", null, O(t.name), 1), H("small", null, O(t.family), 1)], 8, RE))), 128)),
								e.soundPanel.matches.length ? G("", !0) : (B(), V("p", zE, " Жанр не найден "))
							], 64)) : (B(), V(z, { key: 1 }, [(B(!0), V(z, null, R(e.soundPanel.groups, (t) => (B(), V(z, { key: t.title }, [H("div", BE, O(t.title), 1), (B(!0), V(z, null, R(t.items, (t) => (B(), V("button", {
								key: t.name,
								type: "button",
								class: "sba-sound-option",
								disabled: t.added,
								"aria-disabled": t.added,
								"data-sba-action": "sound-add",
								"data-id": e.id,
								"data-sound-value": t.name
							}, [H("span", null, O(t.name), 1), H("small", null, O(t.added ? "✓ Добавлено" : "+ Добавить"), 1)], 8, VE))), 128))], 64))), 128)), e.soundPanel.groups.length ? G("", !0) : (B(), V("p", HE, " Совпадений нет. Можно ввести инструмент вручную. "))], 64))], 8, FE),
							e.soundPanel.mode === "genres" ? G("", !0) : (B(), V("div", UE, [n[7] ||= H("span", null, "Нажми «Добавить», чтобы дополнить поле. Свой текст сохраняется.", -1), H("button", {
								type: "button",
								"data-sba-action": "sound-clear",
								"data-id": e.id
							}, " Очистить поле ", 8, WE)]))
						], 8, jE)
					], 8, DE)) : G("", !0)
				]),
				e.type === "custom" ? (B(), V("label", GE, [n[8] ||= W("Своё название ", -1), H("input", {
					type: "text",
					maxlength: "48",
					"data-sba-field": "customName",
					"data-id": e.id,
					value: e.customName,
					placeholder: "Название для тега Suno"
				}, null, 8, KE)])) : G("", !0)
			])], 8, tE),
			e.transitionHTML ? (B(), V("div", {
				key: 0,
				style: { display: "contents" },
				innerHTML: e.transitionHTML
			}, null, 8, qE)) : G("", !0),
			H("button", {
				type: "button",
				class: "sba-between-add",
				"data-sba-action": "insert-after",
				"data-id": e.id,
				"aria-label": "Добавить блок после " + e.label
			}, [...n[9] ||= [H("span", { "aria-hidden": "true" }, "＋", -1), W(" Добавить после ", -1)]], 8, JE)
		], 64))), 128)), r.value.length ? G("", !0) : (B(), V("div", YE, "Пока нет блоков. Добавь первый фрагмент снизу."))], 64)) : e.kind === "snake" ? (B(), V(z, { key: 1 }, [r.value.length ? (B(), V(z, { key: 0 }, [(B(), V(z, null, R([6, 3], (e) => H("div", {
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
			H("span", QE, O(e.index + 1), 1),
			H("span", $E, O(e.icon), 1),
			H("span", eD, O(e.snakeLabel), 1),
			H("span", tD, O(e.energy) + "/5", 1),
			e.hasTransition ? (B(), V("span", {
				key: 0,
				class: "sba-snake-transition",
				title: "Переход: " + e.transitionLabel,
				"aria-hidden": "true"
			}, "↝", 8, nD)) : G("", !0)
		], 8, ZE))), 128))], 2))), 128))], 10, XE)), 64)), d.value.length < r.value.length ? (B(), V("p", rD, " … и ещё " + O(r.value.length - d.value.length) + " блоков ", 1)) : G("", !0)], 64)) : (B(), V("p", iD, "Добавь первый блок, и здесь появится схема композиции."))], 64)) : e.kind === "transitions" ? (B(), V(z, { key: 2 }, [s.value.length ? (B(!0), V(z, { key: 0 }, R(f.value, (e) => (B(), V("div", {
			key: e.id,
			class: D(["sba-transition-hub-row", { "sba-transition-hub-active": e.current.type !== "none" }]),
			"data-sba-hub-from": e.id
		}, [
			H("div", oD, [H("span", sD, O(e.index + 1) + " → " + O(e.index + 2), 1), H("span", cD, [
				W(O(e.from) + " ", 1),
				n[10] ||= H("b", null, "→", -1),
				W(" " + O(e.to), 1)
			])]),
			H("div", lD, [
				H("label", null, [n[11] ||= W("Эффект ", -1), H("select", {
					"data-sba-transition": "type",
					"data-id": e.id,
					value: e.current.type,
					"aria-label": "Переход " + (e.index + 1) + " к " + (e.index + 2)
				}, [(B(!0), V(z, null, R(c.value, (e) => (B(), V("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, dD))), 128))], 8, uD)]),
				H("label", null, [n[12] ||= W("Длина ", -1), H("select", {
					"data-sba-transition": "length",
					"data-id": e.id,
					value: e.current.length,
					"aria-label": "Длительность перехода " + (e.index + 1)
				}, [(B(!0), V(z, null, R(l.value, (e) => (B(), V("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, pD))), 128))], 8, fD)]),
				H("label", null, [n[13] ||= W("Сила ", -1), H("select", {
					"data-sba-transition": "strength",
					"data-id": e.id,
					value: e.current.strength,
					"aria-label": "Выраженность перехода " + (e.index + 1)
				}, [(B(!0), V(z, null, R(u.value, (e) => (B(), V("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, hD))), 128))], 8, mD)])
			]),
			H("div", gD, [H("button", {
				type: "button",
				"data-sba-action": "transition-suggest",
				"data-id": e.id,
				title: "Совет: " + e.advice
			}, "✧ Совет", 8, _D), H("button", {
				type: "button",
				"data-sba-action": "transition-hub-jump",
				"data-id": e.id
			}, "Подробнее ↓", 8, vD)])
		], 10, aD))), 128)) : (B(), V("p", yD, "Добавь второй блок, и здесь можно будет настроить переходы."))], 64)) : e.kind === "energy" ? (B(!0), V(z, { key: 3 }, R(r.value, (e) => (B(), V("div", {
			key: e.id,
			class: "sba-chart-step",
			title: e.label + " · " + e.energy + "/5",
			style: E({
				"--energy": e.energy,
				"--bar-width": 100 / r.value.length + "%"
			})
		}, [H("div", xD, [H("i", { style: E({ "--level": e.energy }) }, null, 4)]), H("small", null, O(e.icon), 1)], 12, bD))), 128)) : G("", !0);
	}
}, CD = ["aria-expanded"], wD = { id: "sba-picked-label" }, TD = ["hidden"], ED = { class: "sba-preset-search-row" }, DD = ["value"], OD = {
	class: "sba-preset-filters",
	role: "group",
	"aria-label": "Тип вариантов"
}, kD = ["data-filter", "aria-pressed"], AD = {
	id: "sba-preset-results",
	class: "sba-preset-results",
	role: "listbox",
	"aria-label": "Доступные шаблоны и жанры"
}, jD = { class: "sba-preset-group-title" }, MD = { key: 0 }, ND = ["aria-selected", "data-choice"], PD = {
	key: 0,
	class: "sba-preset-no-results"
}, FD = {
	__name: "ArrangementPicker",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ $t(t.api.snapshot()), r = K(() => n.value?.picker || {
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
			}, [H("span", wD, O(r.value.selected), 1), t[0] ||= H("span", {
				class: "sba-preset-chevron",
				"aria-hidden": "true"
			}, "⌄", -1)], 8, CD),
			H("div", {
				id: "sba-preset-menu",
				class: "sba-preset-menu",
				role: "dialog",
				"aria-label": "Поиск шаблона или жанра",
				hidden: !r.value.open
			}, [
				H("div", ED, [H("input", {
					type: "search",
					id: "sba-preset-search",
					autocomplete: "off",
					value: r.value.query,
					placeholder: "Найти жанр или шаблон...",
					"aria-label": "Поиск жанра"
				}, null, 8, DD), t[1] ||= H("button", {
					type: "button",
					"data-sba-action": "menu-close",
					"aria-label": "Закрыть меню"
				}, "×", -1)]),
				H("div", OD, [(B(!0), V(z, null, R([
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
				}, O(e.title), 9, kD))), 128))]),
				H("div", AD, [(B(!0), V(z, null, R(r.value.groups, (e) => (B(), V(z, { key: e.title }, [H("div", jD, [W(O(e.title) + " ", 1), e.count === null ? G("", !0) : (B(), V("small", MD, O(e.count), 1))]), (B(!0), V(z, null, R(e.items, (e) => (B(), V("button", {
					key: e.key,
					type: "button",
					role: "option",
					"aria-selected": e.key === r.value.selectedKey,
					"data-sba-action": "menu-choose",
					"data-choice": e.key
				}, [H("span", null, O(e.title), 1), H("small", null, O(e.subtitle), 1)], 8, ND))), 128))], 64))), 128)), r.value.groups.length ? G("", !0) : (B(), V("p", PD, " Ничего не найдено. Попробуй другое название или направление. "))])
			], 8, TD)
		], 64));
	}
}, ID = {
	class: "sba-preview-tabs",
	role: "group",
	"aria-label": "Тип результата"
}, LD = ["aria-pressed"], RD = ["aria-pressed"], zD = ["value"], BD = {
	class: "sba-preview-count",
	id: "sba-preview-count"
}, VD = {
	id: "sba-transfer-confirm",
	"aria-live": "polite"
}, HD = {
	key: 0,
	class: "sba-transfer-preview"
}, UD = ["hidden"], WD = [
	["#sba-cards", "cards"],
	["#sba-snake-track", "snake"],
	["#sba-transition-hub-list", "transitions"],
	["#sba-energy-chart", "energy"],
	[
		".sba-preset-picker",
		"picker",
		FD
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
				let t = e, n = /* @__PURE__ */ $t(t.api.snapshot()), r = K(() => n.value?.result || {
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
					H("div", ID, [H("button", {
						type: "button",
						"data-sba-action": "tab",
						"data-tab": "lyrics",
						"aria-pressed": r.value.tab === "lyrics"
					}, "Теги Lyrics", 8, LD), H("button", {
						type: "button",
						"data-sba-action": "tab",
						"data-tab": "style",
						"aria-pressed": r.value.tab === "style"
					}, "Style", 8, RD)]),
					H("textarea", {
						id: "sba-preview",
						readonly: "",
						spellcheck: "false",
						"aria-label": "Готовые теги структуры песни",
						value: r.value.text
					}, null, 8, zD),
					H("div", BD, O(r.value.count), 1),
					t[4] ||= H("div", { class: "sba-result-actions" }, [H("button", {
						type: "button",
						class: "sba-btn sba-copy-btn",
						"data-sba-action": "copy"
					}, " Копировать результат "), H("button", {
						type: "button",
						class: "sba-btn sba-transfer-btn",
						"data-sba-action": "prepare-transfer"
					}, " Перенести стиль в Studio ")], -1),
					H("div", VD, [r.value.transfer ? (B(), V("div", HD, [
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
					}, O(r.value.message), 9, UD),
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
function GD({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ARRANGER, n = document.getElementById("app");
	if (!n || !t || typeof t.snapshot != "function") return () => {};
	let r = /* @__PURE__ */ new Map(), i = !1;
	function a() {
		if (!i) for (let [i, a, o = SD] of WD) {
			let s = n.querySelector(i), c = r.get(a);
			if (c?.target === s || (c && (c.unmount(), r.delete(a)), !s || !t.snapshot())) continue;
			let l = e(s, o, o === SD ? {
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
var KD = {
	key: 0,
	class: "sb-poetry-empty"
}, qD = { class: "sb-poetry-stats" }, JD = { class: "sb-poetry-subline" }, YD = { class: "sb-poetry-sections" }, XD = { class: "sb-poetry-stanzas" }, ZD = { class: "sb-poetry-stanza-name" }, QD = { class: "sb-poetry-stanza-data" }, $D = { class: "sb-poetry-lines" }, eO = { class: "sb-poetry-line-main" }, tO = { class: "sb-poetry-index" }, nO = { class: "sb-poetry-verse" }, rO = {
	class: "sb-poetry-syllable",
	title: "Оценка слогов"
}, iO = ["title"], aO = {
	key: 0,
	class: "sb-poetry-footnote"
}, oO = {
	key: 1,
	class: "sb-poetry-words"
}, sO = { class: "sb-poetry-tips" }, cO = {
	__name: "PoetryAnalysis",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ $t(t.api.analysis()), r = K(() => n.value || {
			analyzed: !1,
			message: ""
		});
		function i() {
			let e = t.api.analysis();
			e && (n.value = e);
		}
		return L(() => window.addEventListener("sunoboom:poetry-updated", i)), Cr(() => window.removeEventListener("sunoboom:poetry-updated", i)), (e, t) => r.value.analyzed ? (B(), V(z, { key: 1 }, [
			H("div", qD, [(B(!0), V(z, null, R(r.value.stats, (e) => (B(), V("div", {
				key: e.label,
				class: "sb-poetry-stat"
			}, [H("strong", null, O(e.value), 1), H("span", null, O(e.label), 1)]))), 128))]),
			H("p", JD, " Диапазон: " + O(r.value.lower) + "–" + O(r.value.upper) + " слогов на строку · меток ударения: " + O(r.value.markedStress) + ". ", 1),
			H("div", YD, [t[1] ||= H("h4", null, "Строфы и предполагаемая рифмовка", -1), H("div", XD, [(B(!0), V(z, null, R(r.value.stanzas, (e) => (B(), V("div", {
				key: e.id,
				class: "sb-poetry-stanza"
			}, [H("div", ZD, O(e.section) + " · строфа " + O(e.position), 1), H("div", QD, [
				W(" Схема " + O(e.scheme) + " ", 1),
				t[0] ||= H("span", null, "·", -1),
				W(" разброс " + O(e.spread) + " сл. ", 1)
			])]))), 128))])]),
			t[4] ||= H("div", { class: "sb-poetry-lines-head" }, [H("strong", null, "Построчный анализ"), H("span", null, "Слоги · рифма")], -1),
			H("div", $D, [(B(!0), V(z, null, R(r.value.lines, (e) => (B(), V("div", {
				key: e.number,
				class: "sb-poetry-line"
			}, [
				H("div", eO, [H("span", tO, O(e.number) + ".", 1), H("span", nO, O(e.text), 1)]),
				H("div", rO, [H("span", null, O(e.syllables) + " сл.", 1), H("i", { style: E({ width: e.width + "%" }) }, null, 4)]),
				H("span", {
					class: D(["sb-poetry-letter", { "sb-poetry-letter-match": e.rhyme }]),
					title: e.repeat ? "Совпадение последнего слова" : e.rhyme ? "Предполагаемая рифма" : "Метка окончания"
				}, O(e.mark), 11, iO)
			]))), 128))]),
			r.value.rowCount > 120 ? (B(), V("p", aO, " Показаны первые 120 строк из " + O(r.value.rowCount) + "; статистика рассчитана по всему тексту. ", 1)) : G("", !0),
			r.value.frequent.length ? (B(), V("div", oO, [t[2] ||= H("strong", null, "Повторяющиеся слова:", -1), (B(!0), V(z, null, R(r.value.frequent, (e) => (B(), V("span", { key: e.word }, O(e.word) + " · " + O(e.count), 1))), 128))])) : G("", !0),
			H("div", sO, [t[3] ||= H("h4", null, "На что обратить внимание", -1), H("ul", null, [(B(!0), V(z, null, R(r.value.suggestions, (e, t) => (B(), V("li", { key: t }, O(e), 1))), 128))])]),
			t[5] ||= H("p", { class: "sb-poetry-footnote" }, " Анализ ориентировочный: счёт гласных не равен точной метрической скансии, совпадение окончаний не гарантирует рифму, а вокальная удобность зависит от темпа и мелодии. Исходный текст автоматически не изменяется. ", -1)
		], 64)) : (B(), V("p", KD, O(r.value.message), 1));
	}
}, lO = {
	key: 0,
	class: "sb-stress-ambig-clear"
}, uO = { class: "sb-stress-ambig-heading" }, dO = { class: "sb-stress-ambig-variants" }, fO = ["data-word", "data-variant"], pO = {
	key: 0,
	class: "sb-poetry-small"
}, mO = {
	__name: "PoetryAmbiguities",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ $t(t.api.ambiguities()), r = K(() => n.value || {
			count: 0,
			words: [],
			total: 0
		});
		function i() {
			n.value = t.api.ambiguities();
		}
		return L(() => window.addEventListener("sunoboom:poetry-stress-updated", i)), Cr(() => window.removeEventListener("sunoboom:poetry-stress-updated", i)), (e, t) => r.value.count ? (B(), V(z, { key: 1 }, [
			H("div", uO, " 🔴 Требуют проверки: " + O(r.value.count) + " вхождений (" + O(r.value.total) + " разных слов). Нажми нужный вариант для каждого вхождения. ", 1),
			(B(!0), V(z, null, R(r.value.words, (e) => (B(), V("div", {
				key: e.key,
				class: "sb-stress-ambig-choice"
			}, [H("strong", null, O(e.key) + O(e.count > 1 ? " ×" + e.count : ""), 1), H("div", dO, [(B(!0), V(z, null, R(e.variants, (t) => (B(), V("button", {
				key: t,
				type: "button",
				"data-action": "sb-poetry-stress-choice",
				"data-word": e.key,
				"data-variant": t,
				title: "Указать ударение для следующего вхождения"
			}, O(t), 9, fO))), 128))])]))), 128)),
			r.value.total > 30 ? (B(), V("p", pO, " Показаны первые 30 разных слов; другие можно исправить вручную. ")) : G("", !0)
		], 64)) : (B(), V("p", lO, " ✓ Все найденные неоднозначные слова проверены. "));
	}
};
// src/vue/poetry/legacyPoetryBridge.js
function hO({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_POETRY, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = !1, i = /* @__PURE__ */ new Map();
	function a() {
		if (r) return;
		let a = [[
			"analysis",
			"#sb-poetry-result",
			cO
		], [
			"ambiguities",
			"#sb-poetry-ambiguous-choices",
			mO
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
var gO = { class: "sb-vt-field" }, _O = ["value"], vO = ["value"], yO = {
	class: "sb-vt-hint",
	id: "sb-vt-mode-hint"
}, bO = { class: "sb-vt-grid" }, xO = { class: "sb-vt-field" }, SO = ["value"], CO = ["value"], wO = { class: "sb-vt-field" }, TO = ["value"], EO = ["value"], DO = {
	key: 0,
	class: "sb-vt-field"
}, OO = ["value"], kO = ["value"], AO = { class: "sb-vt-intensity" }, jO = { class: "sb-vt-between" }, MO = { id: "sb-vt-intensity-label" }, NO = ["value"], PO = { class: "sb-vt-options" }, FO = ["data-vt-pref", "checked"], IO = {
	key: 1,
	class: "sb-vt-consent",
	id: "sb-vt-consent-row"
}, LO = { class: "sb-vt-buttons" }, RO = ["disabled"], zO = {
	id: "sb-vt-result",
	"aria-live": "polite"
}, BO = {
	key: 0,
	class: "sb-vt-draft"
}, VO = { class: "sb-vt-draft-head" }, HO = { class: "sb-vt-method" }, UO = { class: "sb-vt-section-list" }, WO = { class: "sb-vt-section-heading" }, GO = { class: "sb-vt-section-controls" }, KO = [
	"data-vt-preset",
	"value",
	"aria-label"
], qO = ["value"], JO = [
	"data-vt-cue",
	"value",
	"aria-label"
], YO = { class: "sb-vt-field" }, XO = ["value"], ZO = {
	class: "sb-vt-small",
	id: "sb-vt-preview-state"
}, QO = {
	__name: "PerformanceTags",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ $t(t.api.snapshot()), r = K(() => n.value?.prefs || {}), i = K(() => n.value?.draft || null), a = [
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
		return L(() => window.addEventListener("sunoboom:tags-updated", l)), Cr(() => window.removeEventListener("sunoboom:tags-updated", l)), (e, t) => (B(), V(z, null, [
			t[12] ||= H("div", { class: "sb-vt-header" }, [H("span", { class: "sb-vt-symbol" }, "🎭"), H("div", null, [H("h3", null, "Генератор тегов исполнения"), H("p", null, "Вокальная драматургия по секциям. Без изменения слов песни; результат можно проверить и применить только вручную.")])], -1),
			H("div", gO, [t[0] ||= H("label", { for: "sb-vt-mode" }, "Способ генерации", -1), H("select", {
				id: "sb-vt-mode",
				"data-vt-pref": "mode",
				value: r.value.mode
			}, [(B(), V(z, null, R(a, ([e, t]) => H("option", {
				key: e,
				value: e
			}, O(t), 9, vO)), 64))], 8, _O)]),
			H("p", yO, O(n.value.modeHint), 1),
			H("div", bO, [H("div", xO, [t[1] ||= H("label", { for: "sb-vt-source" }, "Источник текста", -1), H("select", {
				id: "sb-vt-source",
				"data-vt-pref": "source",
				value: r.value.source
			}, [(B(), V(z, null, R(s, ([e, t]) => H("option", {
				key: e,
				value: e
			}, O(t), 9, CO)), 64))], 8, SO)]), H("div", wO, [t[2] ||= H("label", { for: "sb-vt-density" }, "Детализация метатегов", -1), H("select", {
				id: "sb-vt-density",
				"data-vt-pref": "density",
				value: r.value.density
			}, [(B(), V(z, null, R(o, ([e, t]) => H("option", {
				key: e,
				value: e
			}, O(t), 9, EO)), 64))], 8, TO)])]),
			n.value.artists?.length ? (B(), V("div", DO, [t[4] ||= H("label", { for: "sb-vt-artist" }, "Учесть «ДНК артиста» (необязательно)", -1), H("select", {
				id: "sb-vt-artist",
				"data-vt-pref": "artistId",
				value: r.value.artistId
			}, [t[3] ||= H("option", { value: "" }, "Без привязки к артисту", -1), (B(!0), V(z, null, R(n.value.artists, (e) => (B(), V("option", {
				key: e.id,
				value: e.id
			}, O(e.name), 9, kO))), 128))], 8, OO)])) : G("", !0),
			H("div", AO, [
				H("div", jO, [t[5] ||= H("label", { for: "sb-vt-intensity" }, "Максимальная интенсивность исполнения", -1), H("strong", MO, O(r.value.intensity) + " / 5", 1)]),
				H("input", {
					type: "range",
					id: "sb-vt-intensity",
					min: "1",
					max: "5",
					step: "1",
					value: r.value.intensity,
					"data-vt-pref": "intensity"
				}, null, 8, NO),
				t[6] ||= H("div", { class: "sb-vt-between sb-vt-scale" }, [H("span", null, "Сдержанная"), H("span", null, "Экспрессивная")], -1)
			]),
			H("div", PO, [(B(), V(z, null, R(c, ([e, t]) => H("label", { key: e }, [H("input", {
				type: "checkbox",
				"data-vt-pref": e,
				checked: r.value[e]
			}, null, 8, FO), W(" " + O(t), 1)])), 64))]),
			n.value.hasEndpoint ? (B(), V("label", IO, [...t[7] ||= [H("input", {
				type: "checkbox",
				id: "sb-vt-consent"
			}, null, -1), W(" Разрешаю отправить выбранный текст песни на защищённый сервер для анализа Gemini. ", -1)]])) : G("", !0),
			H("div", LO, [H("button", {
				type: "button",
				class: "btn primary",
				"data-action": "vt-generate",
				disabled: n.value.busy
			}, "✨ Создать предпросмотр", 8, RO), t[8] ||= H("span", { class: "sb-vt-note" }, "Никакого автоматического применения к Lyrics.", -1)]),
			H("div", {
				id: "sb-vt-notice",
				class: D(["sb-vt-notice", n.value.notice?.kind]),
				role: "status",
				"aria-live": "polite"
			}, O(n.value.notice?.text), 3),
			H("div", zO, [i.value ? (B(), V("div", BO, [
				H("div", VO, [H("h4", null, "Предпросмотр · " + O(i.value.sections.length) + " секций", 1), H("span", HO, O(i.value.method), 1)]),
				t[10] ||= H("p", { class: "sb-vt-small" }, " Проверь каждую секцию. Теги можно выбрать из списка или переписать вручную. Оригинальные строки песни остаются неизменными. ", -1),
				H("div", UO, [(B(!0), V(z, null, R(i.value.sections, (e, t) => (B(), V("div", {
					key: e.id,
					class: "sb-vt-section"
				}, [H("div", WO, [H("strong", null, O(e.label), 1), H("span", null, O(t + 1) + "/" + O(i.value.sections.length), 1)]), H("div", GO, [H("select", {
					"data-vt-preset": t,
					value: i.value.tags[t],
					"aria-label": "Готовые теги для " + e.label
				}, [(B(!0), V(z, null, R(n.value.presets, ([e, t]) => (B(), V("option", {
					key: e,
					value: e
				}, O(t), 9, qO))), 128))], 8, KO), H("input", {
					"data-vt-cue": t,
					value: i.value.tags[t],
					maxlength: "165",
					placeholder: "Например: Warm Emotional Vocals",
					"aria-label": "Тег исполнения " + e.label
				}, null, 8, JO)])]))), 128))]),
				H("div", YO, [t[9] ||= H("label", { for: "sb-vt-preview" }, " Готовый Lyrics — разрешено редактировать только инструкции, не слова песни ", -1), H("textarea", {
					id: "sb-vt-preview",
					spellcheck: "false",
					rows: "13",
					maxlength: "25000",
					value: i.value.preview
				}, null, 8, XO)]),
				H("p", ZO, O(n.value.previewState), 1),
				t[11] ||= da("<div class=\"sb-vt-draft-actions\"><button type=\"button\" class=\"btn primary\" data-action=\"vt-apply\"> ✓ Применить к Lyrics </button><button type=\"button\" class=\"btn ghost\" data-action=\"vt-copy\"> Копировать предпросмотр </button><button type=\"button\" class=\"btn ghost\" data-action=\"vt-refresh\"> Обновить предпросмотр </button><button type=\"button\" class=\"btn ghost\" data-action=\"vt-cancel\"> Отменить </button></div>", 1)
			])) : G("", !0)])
		], 64));
	}
};
// src/vue/poetry/legacyTagsBridge.js
function $O({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_TAGS, n = document.getElementById("app");
	if (!t || !n || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vt-workbench");
		if (r?.target === a || (r &&= (r.unmount(), null), !a || !t.snapshot())) return;
		let o = e(a, QO, { api: t });
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
var ek = gc(), tk = ld(ek), nk = /* @__PURE__ */ new WeakMap();
function rk(e) {
	return typeof document > "u" ? null : typeof e == "string" ? document.querySelector(e) : e;
}
function $(e, t, n = {}, { vueRouter: r = !1 } = {}) {
	let i = rk(e);
	if (!i || i.nodeType !== 1 || !t) return null;
	let a = nk.get(i);
	a && a.unmount();
	let o = i.innerHTML, s = Yo(Eb, {
		component: t,
		componentProps: n
	});
	s.use(ek), r && s.use(ju);
	try {
		s.mount(i);
	} catch (e) {
		return i.innerHTML = o, console.warn("[SUNOBOOM] Vue mount failed; legacy navigation retained.", e), null;
	}
	return nk.set(i, s), () => {
		nk.get(i) === s && (s.unmount(), nk.delete(i));
	};
}
function ik(e) {
	let t = rk(e);
	if (!t) return;
	let n = nk.get(t);
	n && (n.unmount(), nk.delete(t));
}
function ak() {
	return Hb({
		mountVueFeature: $,
		unmountVueFeature: ik,
		sharedUi: tk
	});
}
function ok() {
	return Dx({ mountVueFeature: $ });
}
function sk() {
	return qC({ mountVueFeature: $ });
}
function ck() {
	return Fw({ mountVueFeature: $ });
}
function lk() {
	return OT({ mountVueFeature: $ });
}
function uk() {
	return eE({ mountVueFeature: $ });
}
function dk() {
	return GD({ mountVueFeature: $ });
}
function fk() {
	return hO({ mountVueFeature: $ });
}
function pk() {
	return $O({ mountVueFeature: $ });
}
function mk() {
	return Tb({ mountVueFeature: $ });
}
function hk() {
	return fs({ mountVueFeature: $ });
}
function gk() {
	return mf({ mountVueFeature: $ });
}
function _k() {
	return sf({ mountVueFeature: $ });
}
function vk() {
	return np({ mountVueFeature: $ });
}
function yk() {
	return hp({ mountVueFeature: $ });
}
function bk() {
	return um({ mountVueFeature: $ });
}
function xk() {
	return Km({ mountVueFeature: $ });
}
function Sk() {
	return $m({ mountVueFeature: $ });
}
function Ck() {
	return Th({ mountVueFeature: $ });
}
function wk() {
	return $h({ mountVueFeature: $ });
}
function Tk() {
	return xg({ mountVueFeature: $ });
}
function Ek() {
	return o_({ mountVueFeature: $ });
}
function Dk() {
	return ev({ mountVueFeature: $ });
}
function Ok() {
	return sv({ mountVueFeature: $ });
}
function kk() {
	return Kv({ mountVueFeature: $ });
}
function Ak() {
	return $v({ mountVueFeature: $ });
}
function jk() {
	return Oy({ mountVueFeature: $ });
}
function Mk() {
	return rb({ mountVueFeature: $ });
}
function Nk() {
	return Zs({ mountVueFeature: $ });
}
function Pk() {
	return Kd({
		mountVueFeature: $,
		sharedUi: tk
	});
}
function Fk() {
	return gS({ mountVueFeature: $ });
}
export { $ as mountVueFeature, ok as startLegacyAcademy, Tk as startLegacyAccountSettings, dk as startLegacyArranger, Ck as startLegacyArtistDNA, wk as startLegacyArtistDNAEditor, Sk as startLegacyArtistManager, uk as startLegacyAuditor, sk as startLegacyGenreDetail, Fk as startLegacyGenreTree, Pk as startLegacyHomeDashboard, hk as startLegacyIdeaCollections, mk as startLegacyIdeaEditor, vk as startLegacyLibrary, lk as startLegacyMixer, ak as startLegacyNavigation, Dk as startLegacyPlayerAB, Ek as startLegacyPlayerLab, fk as startLegacyPoetry, kk as startLegacyProducerSongDetail, Ok as startLegacyProducerSongList, _k as startLegacyPromptCollection, gk as startLegacyPromptEditor, yk as startLegacySongCards, bk as startLegacySongDetail, xk as startLegacySongEditor, ck as startLegacyStudio, pk as startLegacyTags, jk as startLegacyTrackPassportDetail, Mk as startLegacyTrackPassportEditor, Ak as startLegacyTrackPassportList, Nk as startLegacyVersionHistory, ik as unmountVueFeature };
