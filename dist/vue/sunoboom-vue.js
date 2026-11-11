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
}, ne = /-\w/g, T = /* @__PURE__ */ te((e) => e.replace(ne, (e) => e.slice(1).toUpperCase())), re = /\B([A-Z])/g, ie = /* @__PURE__ */ te((e) => e.replace(re, "-$1").toLowerCase()), ae = /* @__PURE__ */ te((e) => e.charAt(0).toUpperCase() + e.slice(1)), oe = /* @__PURE__ */ te((e) => e ? `on${ae(e)}` : ""), se = (e, t) => !Object.is(e, t), ce = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, le = (e, t, n, r = !1) => {
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
var Ee = (e) => !!(e && e.__v_isRef === !0), O = (e) => g(e) ? e : e == null ? "" : d(e) || v(e) && (e.toString === b || !h(e.toString)) ? Ee(e) ? O(e.value) : JSON.stringify(e, De, 2) : String(e), De = (e, t) => Ee(t) ? De(e, t.value) : f(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Oe(t, r) + " =>"] = n, e), {}) } : p(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Oe(e)) } : _(t) ? Oe(t) : v(t) && !d(t) && !C(t) ? String(t) : t, Oe = (e, t = "") => _(e) ? `Symbol(${e.description ?? t})` : e, k, ke = class {
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
		(t.version === 0 || se(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
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
		let i = d(e), a = i && w(n);
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
			let e = a && w(t) ? o : o.value;
			return r && v(e) ? /* @__PURE__ */ Wt(e) : e;
		}
		return v(o) ? r ? /* @__PURE__ */ Wt(o) : /* @__PURE__ */ j(o) : o;
	}
}, wt = class extends Ct {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = d(e) && w(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ qt(i);
			if (!/* @__PURE__ */ Jt(n) && !/* @__PURE__ */ qt(n) && (i = /* @__PURE__ */ M(i), n = /* @__PURE__ */ M(n)), !a && /* @__PURE__ */ N(i) && !/* @__PURE__ */ N(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : u(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ N(e) ? e : r);
		return e === /* @__PURE__ */ M(r) && s && (o ? se(n, i) && st(e, "set", t, n, i) : st(e, "add", t, n)), s;
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
			e || (se(n, a) && ot(i, "get", n), ot(i, "get", a));
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
			return e || (se(t, i) && ot(r, "has", t), ot(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
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
			return r.has.call(n, a) || se(e, a) && r.has.call(n, e) || se(i, a) && r.has.call(n, i) || (n.add(a), st(n, "add", a, a)), this;
		},
		set(e, n) {
			t || /* @__PURE__ */ Jt(n) || /* @__PURE__ */ qt(n) || (n = /* @__PURE__ */ M(n));
			let r = /* @__PURE__ */ M(this), { has: i, get: a } = At(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ M(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? se(n, s) && st(r, "set", e, n, s) : st(r, "add", e, n), this;
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
	let o = Ht(S(e));
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
	return !u(e, "__v_skip") && Object.isExtensible(e) && le(e, "__v_skip", !0), e;
}
var Zt = (e) => v(e) ? /* @__PURE__ */ j(e) : e, Qt = (e) => v(e) ? /* @__PURE__ */ Wt(e) : e;
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
		this.dep = new et(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ M(e), this._value = t ? e : Zt(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Jt(e) || /* @__PURE__ */ qt(e);
		e = n ? e : /* @__PURE__ */ M(e), se(e, t) && (this._rawValue = e, this._value = n ? e : Zt(e), this.dep.trigger());
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
		if (!d(e) || _(this._key) || !w(this._key)) do
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
		return ct(this._raw, this._key);
	}
};
function on(e, t, n) {
	return new an(e, t, n);
}
var sn = class {
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
			Ye();
			try {
				_();
			} finally {
				Xe();
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
	let x = je(), S = () => {
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
	let C = b ? Array(e.length).fill(ln) : ln, w = (e) => {
		if (m.flags & 1 && (m.dirty || e)) {
			if (n) {
				let t = m.run();
				if (e || o || y || (b ? t.some((e, t) => se(e, C[t])) : se(t, C))) {
					let e = dn;
					Ye();
					try {
						_ && _(), dn = m;
						let e = [
							t,
							C === ln ? void 0 : b && C[0] === ln ? [] : C,
							v
						];
						C = t, f ? f(n, 3, e) : n(...e);
					} finally {
						dn = e, Xe();
					}
				}
			} else m.run();
		}
	};
	return u && u(w), m = new Pe(g), m.scheduler = l ? () => l(w, !1) : w, v = (e) => fn(e, !1, m), _ = m.onStop = () => {
		let e = un.get(m);
		if (e) {
			if (f) f(e, 4);
			else for (let t of e) t();
			un.delete(m);
		}
	}, n ? a ? w(!0) : C = m.run() : l ? l(w.bind(null, !0), !0) : m.run(), S.pause = m.pause.bind(m), S.resume = m.resume.bind(m), S.stop = S, S;
}
function mn(e, t = Infinity, n) {
	if (t <= 0 || !v(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ N(e)) mn(e.value, t, n);
	else if (d(e)) for (let r = 0; r < e.length; r++) mn(e[r], t, n);
	else if (p(e) || f(e)) e.forEach((e) => {
		mn(e, t, n);
	});
	else if (C(e)) {
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
			Ye(), hn(s, null, 10, [
				e,
				i,
				o
			]), Xe();
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
		r._d && ea(-1);
		let i = zn(t), a = Xi.length, o;
		try {
			o = e(...n);
		} finally {
			for (let e = Xi.length; e > a; e--) Qi();
			zn(i), r._d && ea(1);
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
		u && (Ye(), gn(u, n, 8, [
			e.el,
			l,
			i,
			t
		]), Xe());
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
	if (r || ti) {
		let i = ti ? ti._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && h(t) ? t.call(r && r.proxy) : t;
	}
}
function Wn() {
	return !!(xa() || ti);
}
var Gn = /* @__PURE__ */ Symbol.for("v-scx"), Kn = () => Un(Gn);
function qn(e, t, n) {
	return Jn(e, t, n);
}
function Jn(e, n, i = t) {
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
		e.i = p, Ni(e, p && p.suspense);
	} : c !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : On(e);
	}), u.augmentJob = (e) => {
		n && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = pn(e, n, u);
	return Da && (f ? f.push(h) : d && h()), h;
}
function Yn(e, t, n) {
	let r = this.proxy, i = g(e) ? e.includes(".") ? Xn(r, e) : () => r[e] : e.bind(r, r), a;
	h(t) ? a = t : (a = t.handler, n = t);
	let o = wa(this), s = Jn(i, a.bind(r), n);
	return o(), s;
}
function Xn(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Zn = /* @__PURE__ */ Symbol("_vte"), Qn = (e) => e.__isTeleport, $n = /* @__PURE__ */ Symbol("_leaveCb");
function er(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== Ji) {
			t = n;
			break;
		}
	}
	return t;
}
function tr(e) {
	if (!dr(e)) return Qn(e.type) && e.children ? er(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && h(n.default)) return n.default();
	}
}
function nr(e, t) {
	if (e.shapeFlag & 6 && e.component) {
		e.transition = t;
		let n = e.component.subTree;
		nr(Qn(n.type) && tr(n) || n, t);
	} else if (e.shapeFlag & 128) {
		let n = e.suspense;
		if (n) {
			let e = n.isHydrating ? n.pendingBranch : n.activeBranch;
			e && nr(e, t.clone(e));
		} else e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback);
	} else if (e.transition = t, e.type === B && d(e.children)) {
		let n = ci(e.children, !1);
		n && nr(n, t);
	}
}
function rr(e) {
	if (e.component) return rr(e.component.subTree);
	if (e.type === B) {
		let t = d(e.children) && ci(e.children, !1);
		return t ? rr(t) : void 0;
	}
	if (e.type !== Ji) return e;
}
// @__NO_SIDE_EFFECTS__
function ir(e, t) {
	return h(e) ? /* @__PURE__ */ s({ name: e.name }, t, { setup: e }) : e;
}
function ar(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function or(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var sr = /* @__PURE__ */ new WeakMap();
function cr(e, n, r, a, o = !1) {
	if (d(e)) {
		e.forEach((e, t) => cr(e, n && (d(n) ? n[t] : n), r, a, o));
		return;
	}
	if (ur(a) && !o) {
		a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && cr(e, n, r, a.component.subTree);
		return;
	}
	let s = a.shapeFlag & 4 ? Fa(a.component) : a.el, l = o ? null : s, { i: f, r: p } = e, m = n && n.r, _ = f.refs === t ? f.refs = {} : f.refs, v = f.setupState, y = /* @__PURE__ */ M(v), b = v === t ? i : (e) => !or(_, e) && u(y, e), x = (e, t) => !(t && or(_, t));
	if (m != null && m !== p) {
		if (lr(n), g(m)) _[m] = null, b(m) && (v[m] = null);
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
					i(), sr.delete(e);
				};
				t.id = -1, sr.set(e, t), Ni(t, r);
			} else lr(e), i();
		}
	}
}
function lr(e) {
	let t = sr.get(e);
	t && (t.flags |= 8, sr.delete(e));
}
fe().requestIdleCallback, fe().cancelIdleCallback;
var ur = (e) => !!e.type.__asyncLoader, dr = (e) => e.type.__isKeepAlive;
function fr(e, t) {
	mr(e, "a", t);
}
function pr(e, t) {
	mr(e, "da", t);
}
function mr(e, t, n = ba) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (gr(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) dr(e.parent.vnode) && hr(r, t, n, e), e = e.parent;
	}
}
function hr(e, t, n, r) {
	let i = gr(t, e, r, !0), a = gr("um", () => c(r[t], i), n);
	a.flags = 16;
}
function gr(e, t, n = ba, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Ye();
			let i = wa(n), a = gn(t, n, e, r);
			return i(), Xe(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var _r = (e) => (t, n = ba) => {
	Da && e !== "sp" || gr(e, (...e) => t(...e), n);
}, vr = _r("bm"), R = _r("m"), yr = _r("bu"), br = _r("u"), xr = _r("bum"), Sr = _r("um"), Cr = _r("sp"), wr = _r("rtg"), Tr = _r("rtc");
function Er(e, t = ba) {
	gr("ec", e, t);
}
var Dr = "components", Or = /* @__PURE__ */ Symbol.for("v-ndc");
function kr(e) {
	return g(e) ? Ar(Dr, e, !1) || e : e || Or;
}
function Ar(e, t, n = !0, r = !1) {
	let i = Ln || ba;
	if (i) {
		let n = i.type;
		if (e === Dr) {
			let e = Ia(n, !1);
			if (e && (e === t || e === T(t) || e === ae(T(t)))) return n;
		}
		let a = jr(i[e] || n[e], t) || jr(i.appContext[e], t);
		return !a && r ? n : a;
	}
}
function jr(e, t) {
	return e && (e[t] || e[T(t)] || e[ae(T(t))]);
}
function z(e, t, n, r) {
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
var Mr = (e) => e ? Ea(e) ? Fa(e) : Mr(e.parent) : null, Nr = /* @__PURE__ */ s(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => Mr(e.parent),
	$root: (e) => Mr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Hr(e),
	$forceUpdate: (e) => e.f ||= () => {
		On(e.update);
	},
	$nextTick: (e) => e.n ||= En.bind(e.proxy),
	$watch: (e) => Yn.bind(e)
}), Pr = (e, n) => e !== t && !e.__isScriptSetup && u(e, n), Fr = {
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
			else if (Pr(i, n)) return s[n] = 1, i[n];
			else if (a !== t && u(a, n)) return s[n] = 2, a[n];
			else if (u(o, n)) return s[n] = 3, o[n];
			else if (r !== t && u(r, n)) return s[n] = 4, r[n];
			else Lr && (s[n] = 0);
		}
		let d = Nr[n], f, p;
		if (d) return n === "$attrs" && ot(e.attrs, "get", ""), d(e);
		if ((f = c.__cssModules) && (f = f[n])) return f;
		if (r !== t && u(r, n)) return s[n] = 4, r[n];
		if (p = l.config.globalProperties, u(p, n)) return p[n];
	},
	set({ _: e }, n, r) {
		let { data: i, setupState: a, ctx: o } = e;
		return Pr(a, n) ? (a[n] = r, !0) : i !== t && u(i, n) ? (i[n] = r, !0) : u(e.props, n) || n[0] === "$" && n.slice(1) in e ? !1 : (o[n] = r, !0);
	},
	has({ _: { data: e, setupState: n, accessCache: r, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(r[c] || e !== t && c[0] !== "$" && u(e, c) || Pr(n, c) || u(o, c) || u(i, c) || u(Nr, c) || u(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? u(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function Ir(e) {
	return d(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var Lr = !0;
function Rr(e) {
	let t = Hr(e), n = e.proxy, i = e.ctx;
	Lr = !1, t.beforeCreate && Br(t.beforeCreate, e, "bc");
	let { data: a, computed: o, methods: s, watch: c, provide: l, inject: u, created: f, beforeMount: p, mounted: m, beforeUpdate: g, updated: _, activated: y, deactivated: b, beforeDestroy: x, beforeUnmount: S, destroyed: C, unmounted: w, render: ee, renderTracked: te, renderTriggered: ne, errorCaptured: T, serverPrefetch: re, expose: ie, inheritAttrs: ae, components: oe, directives: se, filters: ce } = t;
	if (u && zr(u, i, null), s) for (let e in s) {
		let t = s[e];
		h(t) && (i[e] = t.bind(n));
	}
	if (a) {
		let t = a.call(n, n);
		v(t) && (e.data = /* @__PURE__ */ j(t));
	}
	if (Lr = !0, o) for (let e in o) {
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
	if (c) for (let e in c) Vr(c[e], i, n, e);
	if (l) {
		let e = h(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Hn(t, e[t]);
		});
	}
	f && Br(f, e, "c");
	function le(e, t) {
		d(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (le(vr, p), le(R, m), le(yr, g), le(br, _), le(fr, y), le(pr, b), le(Er, T), le(Tr, te), le(wr, ne), le(xr, S), le(Sr, w), le(Cr, re), d(ie)) {
		if (ie.length) {
			let t = e.exposed ||= {};
			ie.forEach((e) => {
				Object.defineProperty(t, e, {
					get: () => n[e],
					set: (t) => n[e] = t,
					enumerable: !0
				});
			});
		} else e.exposed ||= {};
	}
	ee && e.render === r && (e.render = ee), ae != null && (e.inheritAttrs = ae), oe && (e.components = oe), se && (e.directives = se), re && ar(e);
}
function zr(e, t, n = r) {
	d(e) && (e = qr(e));
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
function Br(e, t, n) {
	gn(d(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Vr(e, t, n, r) {
	let i = r.includes(".") ? Xn(n, r) : () => n[r];
	if (g(e)) {
		let n = t[e];
		h(n) && qn(i, n);
	} else if (h(e)) qn(i, e.bind(n));
	else if (v(e)) {
		if (d(e)) e.forEach((e) => Vr(e, t, n, r));
		else {
			let r = h(e.handler) ? e.handler.bind(n) : t[e.handler];
			h(r) && qn(i, r, e);
		}
	}
}
function Hr(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => Ur(c, e, o, !0)), Ur(c, t, o)), v(t) && a.set(t, c), c;
}
function Ur(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && Ur(e, a, n, !0), i && i.forEach((t) => Ur(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = Wr[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var Wr = {
	data: Gr,
	props: Xr,
	emits: Xr,
	methods: Yr,
	computed: Yr,
	beforeCreate: Jr,
	created: Jr,
	beforeMount: Jr,
	mounted: Jr,
	beforeUpdate: Jr,
	updated: Jr,
	beforeDestroy: Jr,
	beforeUnmount: Jr,
	destroyed: Jr,
	unmounted: Jr,
	activated: Jr,
	deactivated: Jr,
	errorCaptured: Jr,
	serverPrefetch: Jr,
	components: Yr,
	directives: Yr,
	watch: Zr,
	provide: Gr,
	inject: Kr
};
function Gr(e, t) {
	return t ? e ? function() {
		return s(h(e) ? e.call(this, this) : e, h(t) ? t.call(this, this) : t);
	} : t : e;
}
function Kr(e, t) {
	return Yr(qr(e), qr(t));
}
function qr(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function Jr(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Yr(e, t) {
	return e ? s(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Xr(e, t) {
	return e ? d(e) && d(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : s(/* @__PURE__ */ Object.create(null), Ir(e), Ir(t ?? {})) : t;
}
function Zr(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = s(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = Jr(e[r], t[r]);
	return n;
}
function Qr() {
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
var $r = 0;
function ei(e, t) {
	return function(n, r = null) {
		h(n) || (n = s({}, n)), r != null && !v(r) && (r = null);
		let i = Qr(), a = /* @__PURE__ */ new WeakSet(), o = [], c = !1, l = i.app = {
			_uid: $r++,
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
					let u = l._ceVNode || W(n, r);
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
				let t = ti;
				ti = l;
				try {
					return e();
				} finally {
					ti = t;
				}
			}
		};
		return l;
	};
}
var ti = null, ni = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${T(t)}Modifiers`] || e[`${ie(t)}Modifiers`];
function ri(e, n, ...r) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || t, a = r, o = n.startsWith("update:"), s = o && ni(i, n.slice(7));
	s && (s.trim && (a = r.map((e) => g(e) ? e.trim() : e)), s.number && (a = a.map(ue)));
	let c, l = i[c = oe(n)] || i[c = oe(T(n))];
	!l && o && (l = i[c = oe(ie(n))]), l && gn(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, gn(u, e, 6, a);
	}
}
var ii = /* @__PURE__ */ new WeakMap();
function ai(e, t, n = !1) {
	let r = n ? ii : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, c = !1;
	if (!h(e)) {
		let r = (e) => {
			let n = ai(e, t, !0);
			n && (c = !0, s(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !c ? (v(e) && r.set(e, null), null) : (d(a) ? a.forEach((e) => o[e] = null) : s(o, a), v(e) && r.set(e, o), o);
}
function oi(e, t) {
	return !e || !a(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), u(e, t[0].toLowerCase() + t.slice(1)) || u(e, ie(t)) || u(e, t));
}
function si(e) {
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
			}) : e(f, null)), y = t.props ? c : li(c);
		}
	} catch (t) {
		Xi.length = 0, _n(t, e, 1), v = W(Ji);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(o) && (y = ui(y, a)), b = la(b, y, !1, !0));
	}
	return n.dirs && (b = la(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && nr(Qn(b.type) && tr(b) || b, n.transition), v = b, zn(_), v;
}
function ci(e, t = !0) {
	let n;
	for (let t = 0; t < e.length; t++) {
		let r = e[t];
		if (ra(r)) {
			if (r.type !== Ji || r.children === "v-if") {
				if (n) return;
				n = r;
			}
		} else return;
	}
	return n;
}
var li = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || a(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, ui = (e, t) => {
	let n = {};
	for (let r in e) o(r) && r.slice(9) in t || (n[r] = e[r]);
	return n;
};
function di(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? fi(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (pi(o, r, n) && !oi(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? !o || fi(r, o, l) : !!o;
	return !1;
}
function fi(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (!u(e, a) || pi(t, e, a) && !oi(n, a)) return !0;
	}
	return !1;
}
function pi(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && v(r) && v(i) ? !we(r, i) : r !== i;
}
function mi({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var hi = {}, gi = () => Object.create(hi), _i = (e) => Object.getPrototypeOf(e) === hi;
function vi(e, t, n, r = !1) {
	let i = {}, a = gi();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), bi(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	e.props = n ? r ? i : /* @__PURE__ */ Ut(i) : e.type.props ? i : a, e.attrs = a;
}
function yi(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ M(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (oi(e.emitsOptions, o)) continue;
				let d = t[o];
				if (c) {
					if (u(a, o)) d !== a[o] && (a[o] = d, l = !0);
					else {
						let t = T(o);
						i[t] = xi(c, s, t, d, e, !1);
					}
				} else d !== a[o] && (a[o] = d, l = !0);
			}
		}
	} else {
		bi(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) t && (u(t, a) || (r = ie(a)) !== a && u(t, r)) || (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = xi(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) t && u(t, e) || (delete a[e], l = !0);
	}
	l && st(e.attrs, "set", "");
}
function bi(e, n, r, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (n) for (let t in n) {
		if (ee(t)) continue;
		let l = n[t], d;
		a && u(a, d = T(t)) ? !o || !o.includes(d) ? r[d] = l : (c ||= {})[d] = l : oi(e.emitsOptions, t) || t in i && l === i[t] || (i[t] = l, s = !0);
	}
	if (o) {
		let n = /* @__PURE__ */ M(r), i = c || t;
		for (let t = 0; t < o.length; t++) {
			let s = o[t];
			r[s] = xi(a, n, s, i[s], e, !u(i, s));
		}
	}
	return s;
}
function xi(e, t, n, r, i, a) {
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
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === ie(n)) && (r = !0));
	}
	return r;
}
var Si = /* @__PURE__ */ new WeakMap();
function Ci(e, r, i = !1) {
	let a = i ? Si : r.propsCache, o = a.get(e);
	if (o) return o;
	let c = e.props, l = {}, f = [], p = !1;
	if (!h(e)) {
		let t = (e) => {
			p = !0;
			let [t, n] = Ci(e, r, !0);
			s(l, t), n && f.push(...n);
		};
		!i && r.mixins.length && r.mixins.forEach(t), e.extends && t(e.extends), e.mixins && e.mixins.forEach(t);
	}
	if (!c && !p) return v(e) && a.set(e, n), n;
	if (d(c)) for (let e = 0; e < c.length; e++) {
		let n = T(c[e]);
		wi(n) && (l[n] = t);
	}
	else if (c) for (let e in c) {
		let t = T(e);
		if (wi(t)) {
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
function wi(e) {
	return e[0] !== "$" && !ee(e);
}
var Ti = (e) => e === "_" || e === "_ctx" || e === "$stable", Ei = (e) => d(e) ? e.map(da) : [da(e)], Di = (e, t, n) => {
	if (t._n) return t;
	let r = Bn((...e) => Ei(t(...e)), n);
	return r._c = !1, r;
}, Oi = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (Ti(n)) continue;
		let i = e[n];
		if (h(i)) t[n] = Di(n, i, r);
		else if (i != null) {
			let e = Ei(i);
			t[n] = () => e;
		}
	}
}, ki = (e, t) => {
	let n = Ei(t);
	e.slots.default = () => n;
}, Ai = (e, t, n) => {
	for (let r in t) (n || !Ti(r)) && (e[r] = t[r]);
}, ji = (e, t, n) => {
	let r = e.slots = gi();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (Ai(r, t, n), n && le(r, "_", e, !0)) : Oi(t, r);
	} else t && ki(e, t);
}, Mi = (e, n, r) => {
	let { vnode: i, slots: a } = e, o = !0, s = t;
	if (i.shapeFlag & 32) {
		let e = n._;
		e ? r && e === 1 ? o = !1 : Ai(a, n, r) : (o = !n.$stable, Oi(n, a)), s = n;
	} else n && (ki(e, n), s = { default: 1 });
	if (o) for (let e in a) !Ti(e) && s[e] == null && delete a[e];
}, Ni = Ki;
function Pi(e) {
	return Fi(e);
}
function Fi(e, i) {
	let a = fe();
	a.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = r, insertStaticContent: _ } = e, v = (e, t, r, i = null, a = null, o = null, s = void 0, c = null, l = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !ia(e, t) && (i = xe(e), D(e, a, o, !0), e = null), t.patchFlag === -2 && (l = !1, t.dynamicChildren = null), t.dynamicChildren && e && e.dynamicChildren && e.dynamicChildren.hasOnce && (t.dynamicChildren === n && (t.dynamicChildren = []), t.dynamicChildren.hasOnce = !0);
		let { type: u, ref: d, shapeFlag: f } = t;
		switch (u) {
			case qi:
				y(e, t, r, i);
				break;
			case Ji:
				b(e, t, r, i);
				break;
			case Yi:
				e ?? x(t, r, i, s);
				break;
			case B:
				oe(e, t, r, i, a, o, s, c, l);
				break;
			default: f & 1 ? w(e, t, r, i, a, o, s, c, l) : f & 6 ? se(e, t, r, i, a, o, s, c, l) : (f & 64 || f & 128) && u.process(e, t, r, i, a, o, s, c, l, Ce);
		}
		d != null && a ? cr(d, e && e.ref, o, t || e, !t) : d == null && e && e.ref != null && cr(e.ref, null, o, e, !0);
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
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && T(e.children, d, null, r, i, Ii(e, a), s, u), _ && Vn(e, null, r, "created"), ne(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !ee(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && ha(f, r, e);
		}
		_ && Vn(e, null, r, "beforeMount");
		let v = Ri(i, g);
		v ? g.beforeEnter(d) : g && !g.persisted && (d[Gi] = !0), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && Ni(() => {
			try {
				f && ha(f, r, e), v && g.enter(d), _ && Vn(e, null, r, "mounted");
			} finally {}
		}, i);
	}, ne = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || Wi(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				ne(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, T = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) {
			let c = e[l] = s ? fa(e[l]) : da(e[l]);
			v(null, c, t, n, r, i, a, o, s);
		}
	}, re = (e, n, r, i, a, o, s) => {
		let l = n.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = n;
		u |= e.patchFlag & 16;
		let m = e.props || t, h = n.props || t, g;
		if (r && Li(r, !1), (g = h.onVnodeBeforeUpdate) && ha(g, r, n, e), f && Vn(n, e, r, "beforeUpdate"), r && Li(r, !0), d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length) && (u = 0, s = !1, d = null), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? ie(e.dynamicChildren, d, l, r, i, Ii(n, a), o) : s || pe(e, n, l, null, r, i, Ii(n, a), o, !1), u > 0) {
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
		((g = h.onVnodeUpdated) || f) && Ni(() => {
			g && ha(g, r, n, e), f && Vn(n, e, r, "updated");
		}, i);
	}, ie = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el || Ui(c), d = u && (c.type === B || !ia(c, l) || c.shapeFlag & 198) ? m(u) : n;
			v(c, l, d, null, r, i, a, o, !0);
		}
	}, ae = (e, n, r, i, a) => {
		if (n !== r) {
			if (n !== t) for (let t in n) !ee(t) && !(t in r) && c(e, t, n[t], null, a, i);
			for (let t in r) {
				if (ee(t)) continue;
				let o = r[t], s = n[t];
				o !== s && t !== "value" && c(e, t, s, o, a, i);
			}
			"value" in r && c(e, "value", n.value, r.value, a);
		}
	}, oe = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), T(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (ie(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && zi(e, t, !0)) : pe(e, t, n, f, i, a, s, c, l);
	}, se = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : le(t, n, r, i, a, o, c) : ue(e, t, c);
	}, le = (e, t, n, r, i, a, o) => {
		let s = e.component = ya(e, r, i);
		if (dr(e) && (s.ctx.renderer = Ce), Oa(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, de, o, a), !e.el) {
				let r = s.subTree = W(Ji);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else de(s, e, t, n, i, a, o);
	}, ue = (e, t, n) => {
		let r = t.component = e.component;
		if (di(e, t, n)) {
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
					let n = Vi(e);
					if (n) {
						t && (t.el = c.el, E(e, t, o)), n.asyncDep.then(() => {
							let t = () => {
								e.job.flags & 8 || (i && i.pendingBranch ? Ni(t, i) : l());
							};
							t.flags = 48, Ni(t, i);
						});
						return;
					}
				}
				let u = t, d;
				Li(e, !1), t ? (t.el = c.el, E(e, t, o)) : t = c, n && ce(n), (d = t.props && t.props.onVnodeBeforeUpdate) && ha(d, s, t, c), Li(e, !0);
				let f = si(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el || Ui(p)), xe(p), e, i, a), t.el = f.el, u === null && mi(e, f.el), r && Ni(r, i), (d = t.props && t.props.onVnodeUpdated) && Ni(() => ha(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = ur(t);
				if (Li(e, !1), l && ce(l), !m && (o = c && c.onVnodeBeforeMount) && ha(o, d, t), Li(e, !0), s && Te) {
					let t = () => {
						e.subTree = si(e), Te(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = si(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && Ni(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					Ni(() => ha(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && ur(d.vnode) && d.vnode.shapeFlag & 256) && e.a && Ni(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Pe(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => On(u), Li(e, !0), l();
	}, E = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, yi(e, t.props, r, n), Mi(e, t.children, n), Ye(), jn(e), Xe();
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
		m & 8 ? (u & 16 && be(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? he(l, d, n, r, i, a, o, s, c) : be(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && T(d, n, r, i, a, o, s, c));
	}, me = (e, t, r, i, a, o, s, c, l) => {
		e ||= n, t ||= n;
		let u = e.length, d = t.length, f = Math.min(u, d), p = 0;
		for (; p < f; p++) {
			let n = t[p] = l ? fa(t[p]) : da(t[p]);
			v(e[p], n, r, null, a, o, s, c, l);
		}
		u > d ? be(e, a, o, !0, !1, f) : T(t, r, i, a, o, s, c, l, f);
	}, he = (e, t, r, i, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let n = e[u], i = t[u] = l ? fa(t[u]) : da(t[u]);
			if (ia(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let n = e[f], i = t[p] = l ? fa(t[p]) : da(t[p]);
			if (ia(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, n = e < d ? t[e].el : i;
				for (; u <= p;) v(null, t[u] = l ? fa(t[u]) : da(t[u]), r, n, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) D(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? fa(t[u]) : da(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let _, y = 0, b = p - h + 1, x = !1, S = 0, C = Array(b);
			for (u = 0; u < b; u++) C[u] = 0;
			for (u = m; u <= f; u++) {
				let n = e[u];
				if (y >= b) {
					D(n, a, o, !0);
					continue;
				}
				let i;
				if (n.key != null) i = g.get(n.key);
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && ia(n, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? D(n, a, o, !0) : (C[i - h] = u + 1, i >= S ? S = i : x = !0, v(n, t[i], r, null, a, o, s, c, l), y++);
			}
			let w = x ? Bi(C) : n;
			for (_ = w.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, n = t[e], f = t[e + 1], p = e + 1 < d ? f.el || Ui(f) : i;
				C[u] === 0 ? v(null, n, r, p, a, o, s, c, l) : x && (_ < 0 || u !== w[_] ? ge(n, r, p, 2) : _--);
			}
		}
	}, ge = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) ge(e.component.subTree, t, n, r);
		else if (d & 128) e.suspense.move(t, n, r);
		else if (d & 64) c.move(e, t, n, Ce);
		else if (c === B) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) ge(u[e], t, n, r);
			o(e.anchor, t, n);
		} else if (c === Yi) S(e, t, n);
		else if (r !== 2 && d & 1 && l) {
			if (r === 0) l.persisted && !a[$n] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), Ni(() => l.enter(a), i));
			else {
				let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
					e.ctx.isUnmounted ? s(a) : o(a, t, n);
				}, d = () => {
					let e = a._isLeaving || !!a[$n];
					a._isLeaving && a[$n](!0), l.persisted && !e ? u() : r(a, () => {
						u(), c && c();
					});
				};
				i ? i(a, u, d) : d();
			}
		} else o(a, t, n);
	}, D = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if ((d === -2 || l && l.hasOnce) && (i = !1), s != null && (Ye(), cr(s, null, n, e, !0), Xe()), p == null || e.ctx && e.ctx !== t || (t.renderCache[p] = void 0), u & 256 && t.ctx.deactivate(e)) return;
		let h = u & 1 && f, g = !ur(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && ha(_, t, e), u & 6) ye(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Vn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, Ce, r) : l && !l.hasOnce && (a !== B || d > 0 && d & 64) ? be(l, t, n, !1, !0) : (a === B && d & 384 || !i && u & 16) && be(c, t, n), r && _e(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && Ni(() => {
			_ && ha(_, t, e), h && Vn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, _e = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e, a = t === B;
		if (a && !i) {
			ve(n, r);
			return;
		}
		if (t === Yi) {
			C(e), i && !i.persisted && i.afterLeave && i.afterLeave();
			return;
		}
		let o = a ? rr(e) : e, c = () => {
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
		Hi(c), Hi(l), r && ce(r), i.stop(), a ? (a.flags |= 8, D(o, e, t, n)) : o && (o.transition = e.vnode.transition, D(o, e, t, n)), s && Ni(s, t);
		let u = () => {
			e.isUnmounted = !0;
		};
		u.flags = 16, Ni(u, t);
	}, be = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) D(e[o], t, n, r, i);
	}, xe = (e) => {
		if (e.shapeFlag & 6) return xe(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Zn];
		return n ? h(n) : t;
	}, Se = (e, t, n) => {
		Pn(() => {
			e == null ? t._vnode && D(t._vnode, null, null, !0) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e;
		}, e && t._vnode ? void 0 : e && e.component ? e.component.uid : va());
	}, Ce = {
		p: v,
		um: D,
		m: ge,
		r: _e,
		mt: le,
		mc: T,
		pc: pe,
		pbc: ie,
		n: xe,
		o: e
	}, we, Te;
	return i && ([we, Te] = i(Ce)), {
		render: Se,
		hydrate: we,
		createApp: ei(Se, we)
	};
}
function Ii({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Li({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ri(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function zi(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (d(r) && d(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = fa(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && zi(t, a)), a.type === qi && (a.patchFlag === -1 && (a = i[e] = fa(a)), a.el = t.el), a.type === Ji && !a.el && (a.el = t.el);
	}
}
function Bi(e) {
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
function Vi(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Vi(t);
}
function Hi(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Ui(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	if (t) return Ui(t.subTree);
	let n = e.suspense;
	return n && n.activeBranch ? Ui(n.activeBranch) : null;
}
var Wi = (e) => e.__isSuspense, Gi = /* @__PURE__ */ Symbol("_deferredEnter");
function Ki(e, t) {
	t && t.pendingBranch ? d(e) ? t.effects.push(...e) : t.effects.push(e) : An(e);
}
var B = /* @__PURE__ */ Symbol.for("v-fgt"), qi = /* @__PURE__ */ Symbol.for("v-txt"), Ji = /* @__PURE__ */ Symbol.for("v-cmt"), Yi = /* @__PURE__ */ Symbol.for("v-stc"), Xi = [], Zi = null;
function V(e = !1) {
	Xi.push(Zi = e ? null : []);
}
function Qi() {
	Xi.pop(), Zi = Xi[Xi.length - 1] || null;
}
var $i = 1;
function ea(e, t = !1) {
	$i += e, e < 0 && Zi && t && (Zi.hasOnce = !0);
}
function ta(e) {
	return e.dynamicChildren = $i > 0 ? Zi || n : null, Qi(), $i > 0 && Zi && Zi.push(e), e;
}
function H(e, t, n, r, i, a) {
	return ta(U(e, t, n, r, i, a, !0));
}
function na(e, t, n, r, i) {
	return ta(W(e, t, n, r, i, !0));
}
function ra(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function ia(e, t) {
	return e.type === t.type && e.key === t.key;
}
var aa = ({ key: e }) => e ?? null, oa = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : g(e) || /* @__PURE__ */ N(e) || h(e) ? {
	i: Ln,
	r: e,
	k: t,
	f: !!n
} : e);
function U(e, t = null, n = null, r = 0, i = null, a = e === B ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && aa(t),
		ref: t && oa(t),
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
	return s ? (pa(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= g(n) ? 8 : 16), $i > 0 && !o && Zi && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && Zi.push(c), c;
}
var W = sa;
function sa(e, t = null, n = null, r = 0, i = null, a = !1) {
	if (e && e !== Or || (e = Ji), ra(e)) {
		let r = la(e, t, !0);
		return n && pa(r, n), $i > 0 && !a && Zi && (r.shapeFlag & 6 ? Zi[Zi.indexOf(e)] = r : Zi.push(r)), r.patchFlag = -2, r;
	}
	if (La(e) && (e = e.__vccOpts), t) {
		t = ca(t);
		let { class: e, style: n } = t;
		e && !g(e) && (t.class = D(e)), v(n) && (/* @__PURE__ */ Yt(n) && !d(n) && (n = s({}, n)), t.style = E(n));
	}
	let o = g(e) ? 1 : Wi(e) ? 128 : Qn(e) ? 64 : v(e) ? 4 : h(e) ? 2 : 0;
	return U(e, t, n, r, i, o, a, !0);
}
function ca(e) {
	return e ? /* @__PURE__ */ Yt(e) ? s({}, e) : _i(e) ? s({}, e[Ma] || e) : e : null;
}
function la(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? ma(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && aa(l),
		ref: t && t.ref ? n && a ? d(a) ? a.concat(oa(t)) : [a, oa(t)] : oa(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== B ? o === -1 ? 16 : o | 16 : o,
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
	return c && r && nr(u, c.clone(u)), u;
}
function G(e = " ", t = 0) {
	return W(qi, null, e, t);
}
function ua(e, t) {
	let n = W(Yi, null, e);
	return n.staticCount = t, n;
}
function K(e = "", t = !1) {
	return t ? (V(), na(Ji, null, e)) : W(Ji, null, e);
}
function da(e) {
	return e == null || typeof e == "boolean" ? W(Ji) : d(e) ? W(B, null, e.slice()) : ra(e) ? fa(e) : W(qi, null, String(e));
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
			!r && !_i(t) ? t._ctx = Ln : r === 3 && Ln && (Ln.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
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
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = D([t.class, r.class]));
		else if (e === "style") t.style = E([t.style, r.style]);
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
var ga = /* @__PURE__ */ Qr(), _a = 0;
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
		propsOptions: Ci(i, a),
		emitsOptions: ai(i, a),
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
	return o.ctx = { _: o }, o.root = n ? n.root : o, o.emit = ri.bind(null, o), e.ce && e.ce(o), o;
}
var ba = null, xa = () => ba || Ln, Sa, Ca;
{
	let e = fe(), t = (t, n) => {
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
	vi(e, r, a, t), ji(e, i, n || t);
	let o = a ? ka(e, t) : void 0;
	return t && Ca(!1), o;
}
function ka(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Fr);
	let { setup: r } = n;
	if (r) {
		Ye();
		let n = e.setupContext = r.length > 1 ? Pa(e) : null, i = wa(e), a = hn(r, e, 0, [e.props, n]), o = y(a);
		if (Xe(), i(), (o || e.sp) && !ur(e) && ar(e), o) {
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
		Ye();
		try {
			Rr(e);
		} finally {
			Xe(), t();
		}
	}
}
var Ma = /* @__PURE__ */ Symbol(), Na = { get(e, t) {
	return ot(e, "get", ""), t === Ma ? e : e[t];
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
			if (n in Nr) return Nr[n](e);
		},
		has(e, t) {
			return t in e || t in Nr;
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
		ea(-1);
		let r = arguments.length;
		return r === 2 ? v(t) && !d(t) ? ra(t) ? W(e, null, [t]) : W(e, t) : W(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && ra(n) && (n = [n]), W(e, t, n));
	} finally {
		ea(1);
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
		ro.test(n) ? e.setProperty(ie(r), n.replace(ro, ""), "important") : e[r] = n;
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
	let r = T(t);
	if (r !== "filter" && r in e) return oo[t] = r;
	r = ae(r);
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
function uo(e, t, n, r, i, a = ve(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(lo, t.slice(6, t.length)) : e.setAttributeNS(lo, t, n) : n == null || a && !ye(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : _(n) ? String(n) : n);
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
		r === "boolean" ? n = ye(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
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
	return [e[2] === ":" ? e.slice(3) : ie(e.slice(2)), t];
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
	t === "class" ? Ya(e, r, c) : t === "style" ? no(e, n, r) : a(t) ? o(t) || go(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), 1) : t[0] === "^" ? (t = t.slice(1), 0) : Eo(e, t, r, c)) ? (fo(e, t, r), e.tagName.includes("-") || t !== "value" && t !== "checked" && t !== "selected" || uo(e, t, r, c, s, t !== "value")) : e._isVueCE && (Do(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !g(r))) ? fo(e, T(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), uo(e, t, r, c));
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
	let r = T(t);
	return Array.isArray(n) ? n.some((e) => T(e) === r) : Object.keys(n).some((e) => T(e) === r);
}
var Oo = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return d(t) ? (e) => ce(t, e) : t;
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
	return t && (e = e.trim()), n && (e = ue(e)), e;
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
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? ue(e.value) : e.value, c = t ?? "";
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
	mounted: Fo,
	beforeUpdate(e, t, n) {
		e[jo] = Oo(n), Fo(e, t, n);
	}
};
function Fo(e, { value: t, oldValue: n }, r) {
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
var Io = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		e._modelValue = t, po(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? ue(zo(e)) : zo(e)), r = e.multiple, i = r ? p(e._modelValue) ? new Set(t) : t : t[0], a = e._pendingValue = [r, r ? d(i) ? t.slice() : t : i];
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
		let r = ie(n.key);
		if (t.some((e) => e === r || Wo[e] === r)) return e(n);
	}));
}, Ko = /* @__PURE__ */ s({ patchProp: To }, qa), qo;
function Jo() {
	return qo ||= Pi(Ko);
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
		return (t, n) => (V(!0), H(B, null, z(e.model.groups, (t) => (V(), H(B, { key: t.kind }, [U("div", Qo, [U("h2", null, O(t.title) + " (" + O(t.items.length) + ")", 1), t.kind === "generated" ? (V(), H("button", $o, "Создать идеи →")) : K("", !0)]), t.items.length ? (V(), H("div", {
			key: 0,
			class: "idea-grid",
			"data-idea-collection": t.kind
		}, [(V(!0), H(B, null, z(t.items, (n) => (V(), na(kr(t.kind === "academy" ? "div" : "article"), {
			key: n.key,
			class: D(["idea", { "generated-card": t.kind === "generated" }])
		}, {
			default: Bn(() => [
				U("div", ts, O(n.badge), 1),
				U("h3", null, O(n.title), 1),
				U("p", null, O(n.pitch), 1),
				t.kind === "generated" ? (V(), H("p", ns, O(n.storyLine), 1)) : K("", !0),
				t.kind === "manual" && n.lyrics ? (V(), H("p", rs, "🎼 Текст песни сохранён · " + O(n.sunoLyrics ? "теги для Suno готовы" : "без разметки"), 1)) : K("", !0),
				n.hook || t.kind === "generated" ? (V(), na(kr(t.kind === "generated" ? "div" : "p"), {
					key: 2,
					class: "generator-hook"
				}, {
					default: Bn(() => [t.kind === "generated" ? (V(), H("span", is, "ХУК ПРИПЕВА")) : K("", !0), U("strong", null, O(n.hook), 1)]),
					_: 2
				}, 1024)) : K("", !0),
				t.kind === "generated" && n.detail ? (V(), H("p", as, "Твоя деталь: " + O(n.detail), 1)) : K("", !0),
				U("div", os, [(V(!0), H(B, null, z(n.actions, (t) => (V(), H("button", {
					key: t.name,
					type: "button",
					class: D(t.className),
					"data-action": t.name,
					"data-id": n.id,
					"data-i": n.index,
					"aria-label": t.label || void 0
				}, [t.icon ? (V(), H("span", {
					key: 0,
					"aria-hidden": "true",
					innerHTML: e.model.icons[t.icon]
				}, null, 8, cs)) : K("", !0), G(O(t.text), 1)], 10, ss))), 128))])
			]),
			_: 2
		}, 1032, ["class"]))), 128))], 8, es)) : (V(), H("div", ls, [
			U("span", {
				"aria-hidden": "true",
				innerHTML: e.model.icons.music
			}, null, 8, us),
			U("strong", null, O(t.emptyTitle), 1),
			G(O(t.emptyText), 1)
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
		let t = e, n = /* @__PURE__ */ P("major"), r = /* @__PURE__ */ P("all"), i = /* @__PURE__ */ P(""), a = q(() => _s(t.model.releases, {
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
		return R(() => En(() => s.value?.focus({ preventScroll: !0 }))), (t, m) => (V(), H("div", ys, [
			U("header", bs, [U("div", null, [
				m[6] ||= U("div", { class: "sb-vh-kicker" }, "SUNOBOOM · РАЗВИТИЕ ПРОЕКТА", -1),
				m[7] ||= U("h2", { id: "sb-vh-title" }, "История версий", -1),
				U("p", null, [
					m[4] ||= G("Текущая версия ", -1),
					U("strong", null, "v" + O(e.model.currentVersion), 1),
					m[5] ||= G(". Версии сгруппированы по номеру.", -1)
				])
			]), U("button", {
				ref_key: "closeButton",
				ref: s,
				type: "button",
				class: "sb-vh-close",
				"aria-label": "Закрыть историю версий",
				onClick: m[0] ||= (t) => e.model.close()
			}, "×", 512)]),
			U("div", {
				id: "sb-vh-tabs",
				class: "sb-vh-tabs",
				role: "tablist",
				"aria-label": "Части номера версии",
				onKeydown: m[1] ||= (e) => p(e, ["major", "minor"], n.value, u)
			}, [(V(), H(B, null, z([{
				id: "major",
				label: "Мажорная версия"
			}, {
				id: "minor",
				label: "Минорные версии"
			}], (e) => U("button", {
				key: e.id,
				type: "button",
				class: D(["sb-vh-tab", { active: n.value === e.id }]),
				role: "tab",
				"aria-selected": n.value === e.id,
				tabindex: n.value === e.id ? 0 : -1,
				"aria-controls": "sb-vh-content",
				onClick: (t) => u(e.id)
			}, O(e.label), 11, xs)), 64))], 32),
			n.value === "minor" && !c.value ? (V(), H("div", {
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
			}, [(V(), H(B, null, z([
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
			], (e) => U("button", {
				key: e.id,
				type: "button",
				class: D(["sb-vh-size-tab", { active: r.value === e.id }]),
				role: "tab",
				"aria-selected": r.value === e.id,
				tabindex: r.value === e.id ? 0 : -1,
				"aria-controls": "sb-vh-content",
				onClick: (t) => d(e.id)
			}, O(e.label), 11, Ss)), 64))], 32)) : K("", !0),
			U("p", Cs, O(a.value.legend), 1),
			U("div", ws, [U("label", Ts, [m[8] ||= U("span", { class: "sb-vh-visually-hidden" }, "Поиск по истории версий", -1), L(U("input", {
				id: "sb-vue-vh-search",
				"onUpdate:modelValue": m[3] ||= (e) => i.value = e,
				type: "search",
				autocomplete: "off",
				placeholder: "Поиск по всем версиям и вкладкам…",
				onInput: l
			}, null, 544), [[J, i.value]])]), U("span", Es, O(a.value.count), 1)]),
			U("div", {
				id: "sb-vh-content",
				ref_key: "content",
				ref: o,
				class: "sb-vh-content",
				role: "tabpanel",
				"aria-labelledby": "sb-vh-tabs"
			}, [a.value.mode === "search" && (a.value.majors.length || a.value.large.length || a.value.small.length) ? (V(), H("div", Ds, [a.value.majors.length ? (V(), H("section", Os, [U("h3", null, [m[9] ||= G("Мажорные версии ", -1), U("span", null, O(a.value.majors.length), 1)]), (V(!0), H(B, null, z(a.value.majors, (e) => (V(), H("article", {
				key: "major-" + e.major,
				class: "sb-vh-release sb-vh-major-release"
			}, [U("span", ks, "v" + O(e.major), 1), U("div", As, [U("p", null, "Мажорная версия " + O(e.major), 1), U("p", js, " От v" + O(e.items[e.items.length - 1][0]) + " до v" + O(e.items[0][0]), 1)])]))), 128))])) : K("", !0), (V(!0), H(B, null, z([{
				title: "Крупные обновления",
				entries: a.value.large,
				badge: "Крупное"
			}, {
				title: "Мелкие обновления",
				entries: a.value.small,
				badge: "Мелкое"
			}], (e) => L((V(), H("section", {
				key: e.title,
				class: "sb-vh-search-group"
			}, [U("h3", null, [G(O(e.title) + " ", 1), U("span", null, O(e.entries.length), 1)]), U("div", Ms, [(V(!0), H(B, null, z(e.entries, (t) => (V(), H("article", {
				key: t[0],
				class: "sb-vh-release"
			}, [U("span", Ns, "v" + O(t[0]), 1), U("div", Ps, [U("p", null, O(t[1]), 1), U("div", Fs, [U("time", { datetime: t[2] }, O(I(ps)(t[2])), 9, Is), U("span", Ls, O(e.badge), 1)])])]))), 128))])])), [[Qa, e.entries.length]])), 128))])) : a.value.mode === "search" ? (V(), H("p", Rs, " По запросу совпадений нет ни в одном разделе истории. ")) : a.value.mode === "major" ? (V(), H("div", zs, [(V(!0), H(B, null, z(a.value.majors, (e) => (V(), H("article", {
				key: e.major,
				class: "sb-vh-release sb-vh-major-release"
			}, [U("span", Bs, "v" + O(e.major), 1), U("div", Vs, [
				U("h3", null, "Мажорная версия " + O(e.major), 1),
				U("p", null, "Ветка v" + O(e.major) + ".x — " + O(e.items.length) + " сохранённых минорных обновлений.", 1),
				U("p", Hs, " От v" + O(e.items[e.items.length - 1][0]) + " (" + O(I(ps)(e.items[e.items.length - 1][2])) + ") до v" + O(e.items[0][0]) + " (" + O(I(ps)(e.items[0][2])) + ") ", 1),
				U("button", {
					type: "button",
					class: "sb-vh-view-minors",
					onClick: f
				}, "Просмотреть минорные версии")
			])]))), 128))])) : a.value.mode === "minor" && a.value.entries.length ? (V(), H("div", Us, [(V(!0), H(B, null, z(a.value.entries, (e) => (V(), H("article", {
				key: e[0],
				class: "sb-vh-release"
			}, [U("span", Ws, "v" + O(e[0]), 1), U("div", Gs, [U("p", null, O(e[1]), 1), U("div", Ks, [U("time", { datetime: e[2] }, O(I(ps)(e[2])), 9, qs), r.value === "all" ? (V(), H("span", Js, O(e[3] === "large" ? "Крупное" : "Мелкое"), 1)) : K("", !0)])])]))), 128))])) : (V(), H("p", Ys, "По запросу минорные версии не найдены."))], 512)
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
		(n.state.value[e] = i ? i() : {}), Ec(/* @__PURE__ */ rn(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = Xt(q(() => {
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
		En().then(() => {
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
			let i = vc(d, t, n.detached, () => a()), a = o.run(() => qn(() => r.state.value[e], (r) => {
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
		let o = Wn();
		return n ||= o ? Un(tc, null) : null, n && ec(n), n = $s, n._s.has(e) || (i ? kc(e, t, r, n) : Oc(e, r, n)), n._s.get(e);
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
	let t = Un(Vl), n = Un(Hl), r = q(() => {
		let n = I(e.to);
		return t.resolve(n);
	}), i = q(() => {
		let { matched: e } = r.value, { length: t } = e, i = e[t - 1], a = n.matched;
		if (!i || !a.length) return -1;
		let o = a.findIndex(pl.bind(null, i));
		if (o > -1) return o;
		let s = Cu(e[t - 2]);
		return t > 1 && Cu(i) === s && a[a.length - 1].path !== s ? a.findIndex(pl.bind(null, e[t - 2])) : o;
	}), a = q(() => i.value > -1 && Su(n.params, r.value.params)), o = q(() => i.value > -1 && i.value === n.matched.length - 1 && ml(n.params, r.value.params));
	function s(n = {}) {
		if (xu(n)) {
			let n = t[I(e.replace) ? "replace" : "push"](I(e.to)).catch(Rc);
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
function yu(e) {
	return e.length === 1 ? e[0] : e;
}
var bu = /* @__PURE__ */ ir({
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
		let n = /* @__PURE__ */ j(vu(e)), { options: r } = Un(Vl), i = q(() => ({
			[wu(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
			[wu(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
		}));
		return () => {
			let r = t.default && yu(t.default(n));
			return e.custom ? r : Ra("a", {
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
var wu = (e, t, n) => e ?? t ?? n, Tu = /* @__PURE__ */ ir({
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
		let r = Un(Ul), i = q(() => e.route || r.value), a = Un(Bl, 0), o = q(() => {
			let e = I(a), { matched: t } = i.value, n;
			for (; (n = t[e]) && !n.components;) e++;
			return e;
		}), s = q(() => i.value.matched[o.value]);
		Hn(Bl, q(() => o.value + 1)), Hn(zl, s), Hn(Ul, i);
		let c = /* @__PURE__ */ P();
		return qn(() => [
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
			let u = o.props[a], d = Ra(l, Y({}, u ? u === !0 ? r.params : typeof u == "function" ? u(r) : u : null, t, {
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
	let t = lu(e.routes, e), n = e.parseQuery || Il, r = e.stringifyQuery || Ll, i = e.history, a = Wl(), o = Wl(), s = Wl(), c = /* @__PURE__ */ F(vl), l = vl;
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
		return C(e);
	}
	function x(e) {
		return b(Y(v(e), { replace: !0 }));
	}
	function S(e, t) {
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
	function C(e, t) {
		let n = l = _(e), i = c.value, a = e.state, o = e.force, s = e.replace === !0, u = S(n, i);
		if (u) return C(Y(v(u), {
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
		}), de(i, i, !0, !1)), (f ? Promise.resolve(f) : te(d, i)).catch((e) => Fl(e) ? Fl(e, X.NAVIGATION_GUARD_REDIRECT) ? e : ue(e) : ce(e, d, i)).then((e) => {
			if (e) {
				if (Fl(e, X.NAVIGATION_GUARD_REDIRECT)) return C(Y({ replace: s }, v(e.to), {
					state: typeof e.to == "object" ? Y({}, a, e.to.state) : a,
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
		let t = pe.values().next().value;
		return t && typeof t.runWithContext == "function" ? t.runWithContext(e) : e();
	}
	function te(e, t) {
		let n, [r, i, s] = ql(e, t);
		n = Kl(r.reverse(), "beforeRouteLeave", e, t);
		for (let i of r) i.leaveGuards.forEach((r) => {
			n.push(Gl(r, e, t));
		});
		let c = w.bind(null, e, t);
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
		}).then(() => (e.matched.forEach((e) => e.enterCallbacks = {}), n = Kl(s, "beforeRouteEnter", e, t, ee), n.push(c), he(n))).then(() => {
			n = [];
			for (let r of o.list()) n.push(Gl(r, e, t));
			return n.push(c), he(n);
		}).catch((e) => Fl(e, X.NAVIGATION_CANCELLED) ? e : Promise.reject(e));
	}
	function ne(e, t, n) {
		s.list().forEach((r) => ee(() => r(e, t, n)));
	}
	function T(e, t, n, r, a) {
		let o = y(e, t);
		if (o) return o;
		let s = t === vl, l = Pc ? history.state : {};
		n && (r || s ? i.replace(e.fullPath, Y({ scroll: s && l && l.scroll }, a)) : i.push(e.fullPath, a)), c.value = e, de(e, t, n, s), ue();
	}
	let re;
	function ie() {
		re ||= i.listen((e, t, n) => {
			if (!me.listening) return;
			let r = _(e), a = S(r, me.currentRoute.value);
			if (a) {
				C(Y(a, {
					replace: !0,
					force: !0
				}), r).catch(Rc);
				return;
			}
			l = r;
			let o = c.value;
			Pc && kl(Dl(o.fullPath, n.delta), Tl()), te(r, o).catch((e) => Fl(e, X.NAVIGATION_ABORTED | X.NAVIGATION_CANCELLED) ? e : Fl(e, X.NAVIGATION_GUARD_REDIRECT) ? (C(Y(v(e.to), { force: !0 }), r).then((e) => {
				Fl(e, X.NAVIGATION_ABORTED | X.NAVIGATION_DUPLICATED) && !n.delta && n.type === yl.pop && i.go(-1, !1);
			}).catch(Rc), Promise.reject()) : (n.delta && i.go(-n.delta, !1), ce(e, r, o))).then((e) => {
				e ||= T(r, o, !1), e && (n.delta && !Fl(e, X.NAVIGATION_CANCELLED) ? i.go(-n.delta, !1) : n.type === yl.pop && Fl(e, X.NAVIGATION_ABORTED | X.NAVIGATION_DUPLICATED) && i.go(-1, !1)), ne(r, o, e);
			}).catch(Rc);
		});
	}
	let ae = Wl(), oe = Wl(), se;
	function ce(e, t, n) {
		ue(e);
		let r = oe.list();
		return r.length ? r.forEach((r) => r(e, t, n)) : console.error(e), Promise.reject(e);
	}
	function le() {
		return se && c.value !== vl ? Promise.resolve() : new Promise((e, t) => {
			ae.add([e, t]);
		});
	}
	function ue(e) {
		return se || (se = !e, ie(), ae.list().forEach(([t, n]) => e ? n(e) : t()), ae.reset()), e;
	}
	function de(t, n, r, i) {
		let { scrollBehavior: a } = e;
		if (!Pc || !a) return Promise.resolve();
		let o = !r && Al(Dl(t.fullPath, 0)) || (i || !r) && history.state && history.state.scroll || null;
		return En().then(() => a(t, n, o)).then((e) => e && El(e)).catch((e) => ce(e, t, n));
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
		onError: oe.add,
		isReady: le,
		install(e) {
			e.component("RouterLink", bu), e.component("RouterView", Du), e.config.globalProperties.$router = me, Object.defineProperty(e.config.globalProperties, "$route", {
				enumerable: !0,
				get: () => I(c)
			}), Pc && !E && c.value === vl && (E = !0, b(i.location).catch((e) => {}));
			let t = {};
			for (let e in vl) Object.defineProperty(t, e, {
				get: () => c.value[e],
				enumerable: !0
			});
			e.provide(Vl, me), e.provide(Hl, /* @__PURE__ */ Ut(t)), e.provide(Ul, c);
			let n = e.unmount;
			pe.add(e), e.unmount = function() {
				pe.delete(e), pe.size < 1 && (l = vl, re && re(), re = null, c.value = vl, E = !1, se = !1), n();
			};
		}
	};
	function he(e) {
		return e.reduce((e, t) => e.then(() => ee(t)), Promise.resolve());
	}
	return me;
}
function ku() {
	return Un(Vl);
}
function Au(e) {
	return Un(Hl);
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
var Fu = null, Iu = Promise.resolve(), Lu = "replace", Ru = 0, zu = 0, Bu = [], Vu = [], Q = -1, Hu = /* @__PURE__ */ F(0), Uu = /* @__PURE__ */ Wt(Hu);
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
var rd = /* @__PURE__ */ F(Object.freeze({
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
// src/vue/state/appearance-model.js
function od(e) {
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
var sd = /* @__PURE__ */ new Set([
	"all",
	"",
	"name",
	"family",
	"artist",
	"description"
]), cd = /* @__PURE__ */ new Set([
	"overview",
	"ideas",
	"prompts",
	"artists"
]), ld = /^[a-z0-9][a-z0-9-]{0,99}$/;
function ud({ query: e, results: t, total: n, mode: r } = {}) {
	return typeof e != "string" || e.length > 160 || !Number.isSafeInteger(n) || n < 0 || !Number.isSafeInteger(t) || t < 0 || t > n || !sd.has(r) ? null : Object.freeze({
		query: e,
		results: t,
		total: n,
		mode: r
	});
}
function dd(e, t) {
	return typeof e != "string" || !ld.test(e) || !cd.has(t) ? null : Object.freeze({
		genreId: e,
		tab: t
	});
}
function fd({ tree: e, selected: t, zoom: n, query: r } = {}) {
	return typeof e != "string" || !ld.test(e) || typeof t != "string" || !ld.test(t) || typeof n != "number" || !Number.isFinite(n) || n < .75 || n > 1.5 || typeof r != "string" || r.length > 160 ? null : Object.freeze({
		tree: e,
		selected: t,
		zoom: n,
		query: r
	});
}
// src/vue/state/production-ui-model.js
var pd = /^[a-z0-9][a-z0-9-]{0,99}$/, md = (e, t, n) => Number.isSafeInteger(e) && e >= t && e <= n;
function hd(e) {
	let t = e?.settings, n = e?.prompt, r = t?.genre;
	return typeof r != "string" || !pd.test(r) || !md(t?.tempo, 65, 200) || typeof n != "string" || n.length > 1e3 ? null : Object.freeze({
		ready: !0,
		genreId: r,
		tempo: t.tempo,
		promptLength: n.length
	});
}
function gd(e) {
	let t = e?.rows, n = e?.prompt;
	return !Array.isArray(t) || t.length < 2 || t.length > 4 || !md(e?.tempo, 65, 200) || typeof n != "string" || n.length > 1e3 || !t.every((e) => typeof e?.id == "string" && pd.test(e.id) && md(e.weight, 0, 100)) || t.reduce((e, t) => e + t.weight, 0) !== 100 || new Set(t.map((e) => e.id)).size !== t.length ? null : Object.freeze({
		ready: !0,
		genreCount: t.length,
		tempo: e.tempo,
		promptLength: n.length
	});
}
function _d(e) {
	let t = e?.report;
	return !["manual", "studio"].includes(e?.mode) || !md(t?.score, 0, 100) || !md(t?.length, 0, 1e5) ? null : Object.freeze({
		ready: !0,
		mode: e.mode,
		score: t.score,
		checkedLength: t.length
	});
}
function vd(e) {
	let t = e?.blocks;
	if (!Array.isArray(t) || t.length > 64 || !t.every((e) => e && [
		2,
		4,
		8,
		12,
		16,
		24,
		32
	].includes(e.bars) && md(e.energy, 1, 5) && typeof e.hasTransition == "boolean")) return null;
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
var yd = (e, t, n) => Number.isSafeInteger(e) && e >= t && e <= n, bd = (e) => typeof e == "boolean";
function xd(e) {
	return !yd(e?.count, 0, 150) || !yd(e?.currentIndex, -1, e.count - 1) || e.count === 0 && e.currentIndex !== -1 || !bd(e.playing) || e.playing && e.currentIndex === -1 || !bd(e.shuffle) || ![
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
function Sd(e) {
	let t = e?.files?.A?.ready, n = e?.files?.B?.ready;
	return !["player", "compare"].includes(e?.mode) || !["A", "B"].includes(e?.active) || !bd(e.playing) || !bd(e.loop) || !bd(e.hasBoth) || !bd(t) || !bd(n) || e.hasBoth !== (t && n) || e.playing && !(e.active === "A" ? t : n) ? null : Object.freeze({
		ready: !0,
		mode: e.mode,
		active: e.active,
		readyCount: Number(t) + Number(n),
		hasBoth: e.hasBoth,
		playing: e.playing,
		loop: e.loop
	});
}
// src/vue/state/legacy-ui-store.js
var Cd = Object.freeze([]), wd = Object.freeze({
	ideaCount: 0,
	promptCount: 0,
	eventCount: 0,
	revision: 0
}), Td = (e) => Number.isSafeInteger(e) && e >= 0 ? e : 0, Ed = Ac("sunoboom-legacy-ui", () => {
	let e = id, t = /* @__PURE__ */ F(Cd), n = /* @__PURE__ */ F(wd), r = /* @__PURE__ */ F(Object.freeze({
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
		let t = ud(e);
		if (!t) return !1;
		let n = i.value;
		return n.query === t.query && n.results === t.results && n.total === t.total && n.mode === t.mode ? !1 : (i.value = Object.freeze({
			...t,
			revision: n.revision + 1
		}), !0);
	}
	function c(e, t) {
		let n = dd(e, t);
		if (!n) return !1;
		let r = a.value;
		return r.genreId === n.genreId && r.tab === n.tab ? !1 : (a.value = Object.freeze({
			...n,
			revision: r.revision + 1
		}), !0);
	}
	function l(e) {
		let t = fd(e);
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
	}));
	function g(e, t, n) {
		let r = t(n);
		if (!r) return !1;
		let i = e.value;
		return !Object.keys(r).every((e) => i[e] === r[e]) && (e.value = Object.freeze({
			...r,
			revision: i.revision + 1
		}), !0);
	}
	let _ = (e) => g(u, hd, e), v = (e) => g(d, gd, e), y = (e) => g(f, _d, e), b = (e) => g(p, vd, e), x = (e) => g(m, xd, e), S = (e) => g(h, Sd, e);
	function C(e) {
		if (!Array.isArray(e)) return !1;
		let n = Object.freeze(e.filter((e) => e && typeof e.id == "string" && e.id).map((e) => Object.freeze({
			id: e.id,
			label: e.label,
			shortLabel: e.shortLabel,
			iconHtml: e.iconHtml
		}))), r = t.value;
		return r.length === n.length && r.every((e, t) => e.id === n[t].id && e.label === n[t].label && e.shortLabel === n[t].shortLabel && e.iconHtml === n[t].iconHtml) ? !1 : (t.value = n, !0);
	}
	function w(e) {
		if (!e || typeof e != "object") return !1;
		let t = {
			ideaCount: Td(e.ideaCount),
			promptCount: Td(e.promptCount),
			eventCount: Td(e.eventCount)
		}, r = n.value;
		return r.ideaCount === t.ideaCount && r.promptCount === t.promptCount && r.eventCount === t.eventCount ? !1 : (n.value = Object.freeze({
			...t,
			revision: r.revision + 1
		}), !0);
	}
	function ee(e) {
		let t = od(e);
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
		publishNavigation: C,
		publishDashboardStats: w,
		publishAppearance: ee,
		publishAcademyCatalog: s,
		publishAcademyFocus: c,
		publishAcademyTree: l,
		publishStudioSummary: _,
		publishMixerSummary: v,
		publishAuditorSummary: y,
		publishArrangerSummary: b,
		publishPlayerLabSummary: x,
		publishPlayerAbSummary: S
	};
}), Dd = ["data-sb-applied-theme"], Od = { class: "dash-head" }, kd = { class: "dash-actions" }, Ad = { class: "dash-metrics" }, jd = { class: "dash-metric" }, Md = { class: "dash-metric" }, Nd = { class: "dash-metric" }, Pd = { class: "dash-layout" }, Fd = { class: "dash-panel" }, Id = { class: "dash-panel-head" }, Ld = { class: "dash-list" }, Rd = { class: "dash-entry-meta" }, zd = ["data-kind", "data-id"], Bd = {
	key: 0,
	class: "dash-empty"
}, Vd = { class: "dash-panel" }, Hd = { class: "dash-panel-head" }, Ud = { class: "dash-list" }, Wd = { class: "dash-entry-meta" }, Gd = { class: "dash-entry-actions" }, Kd = ["data-id"], qd = ["data-id"], Jd = {
	key: 0,
	class: "dash-empty"
}, Yd = { class: "dash-panel dash-panel-events" }, Xd = { class: "dash-panel-head" }, Zd = { class: "dash-list" }, Qd = { class: "dash-event-date" }, $d = { class: "dash-event-main" }, ef = { class: "dash-entry-meta" }, tf = { key: 0 }, nf = ["data-id"], rf = {
	key: 0,
	class: "dash-empty"
}, af = {
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
		let t = Ed();
		return (n, r) => (V(), H("div", {
			class: "sb-vue-dashboard",
			"data-sb-vue-dashboard": "",
			"data-sb-applied-theme": I(t).appearance.resolvedTheme
		}, [
			U("div", Od, [
				r[9] ||= U("div", { class: "dash-eyebrow" }, "ЛИЧНАЯ МУЗЫКАЛЬНАЯ МАСТЕРСКАЯ", -1),
				r[10] ||= U("h1", null, [G("Твоя музыкальная "), U("span", null, "лаборатория.")], -1),
				U("p", null, O(e.model.profileName) + ", здесь твои последние идеи, промпты и музыкальные события — всё под рукой.", 1),
				U("div", kd, [
					U("button", {
						type: "button",
						class: "btn primary",
						"data-action": "nav",
						"data-nav": "myideas",
						onClick: r[0] ||= Uo((t) => e.navigate("myideas"), ["stop"])
					}, "＋ Новая идея"),
					U("button", {
						type: "button",
						class: "btn ghost",
						"data-action": "nav",
						"data-nav": "myprompts",
						onClick: r[1] ||= Uo((t) => e.navigate("myprompts"), ["stop"])
					}, "＋ Новый промпт"),
					U("button", {
						type: "button",
						class: "btn ghost",
						"data-action": "nav",
						"data-nav": "events",
						onClick: r[2] ||= Uo((t) => e.navigate("events"), ["stop"])
					}, "＋ Событие")
				])
			]),
			U("div", Ad, [
				U("div", jd, [U("b", null, O(I(t).dashboardStats.ideaCount), 1), r[11] ||= U("span", null, "Мои идеи", -1)]),
				U("div", Md, [U("b", null, O(I(t).dashboardStats.promptCount), 1), r[12] ||= U("span", null, "Мои промпты", -1)]),
				U("div", Nd, [U("b", null, O(I(t).dashboardStats.eventCount), 1), r[13] ||= U("span", null, "Мои события", -1)])
			]),
			U("div", Pd, [
				U("section", Fd, [U("header", Id, [r[14] ||= U("div", null, [U("span", { class: "dash-kicker" }, "💡 ЛИЧНАЯ БИБЛИОТЕКА"), U("h2", null, "Мои последние идеи")], -1), U("button", {
					type: "button",
					class: "dash-view-all",
					"data-action": "nav",
					"data-nav": "myideas",
					onClick: r[3] ||= Uo((t) => e.navigate("myideas"), ["stop"])
				}, "Все идеи →")]), U("div", Ld, [(V(!0), H(B, null, z(e.model.ideas, (e) => (V(), H("article", {
					key: e.kind + ":" + e.key,
					class: "dash-entry"
				}, [
					U("div", Rd, O(e.label), 1),
					U("h3", null, O(e.title), 1),
					U("p", null, O(String(e.pitch).slice(0, 180)), 1),
					U("button", {
						type: "button",
						class: "dash-entry-link",
						"data-action": "dash-open-idea",
						"data-kind": e.kind,
						"data-id": String(e.key)
					}, "Открыть идею →", 8, zd)
				]))), 128)), e.model.ideas.length ? K("", !0) : (V(), H("div", Bd, [
					r[15] ||= U("span", null, "💡", -1),
					r[16] ||= U("strong", null, "Пока нет сохранённых идей", -1),
					r[17] ||= U("p", null, "Добавь идею в личном кабинете или сохрани сюжет из Idea Lab.", -1),
					U("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "nav",
						"data-nav": "myideas",
						onClick: r[4] ||= Uo((t) => e.navigate("myideas"), ["stop"])
					}, "Добавить идею →")
				]))])]),
				U("section", Vd, [U("header", Hd, [r[18] ||= U("div", null, [U("span", { class: "dash-kicker" }, "🎛️ SUNO STUDIO"), U("h2", null, "Мои последние промпты")], -1), U("button", {
					type: "button",
					class: "dash-view-all",
					"data-action": "nav",
					"data-nav": "myprompts",
					onClick: r[5] ||= Uo((t) => e.navigate("myprompts"), ["stop"])
				}, "Все промпты →")]), U("div", Ud, [(V(!0), H(B, null, z(e.model.prompts, (e) => (V(), H("article", {
					key: String(e.id),
					class: "dash-entry"
				}, [
					U("div", Wd, O(e.genre || "Suno Studio") + O(e.date ? " · " + e.date : ""), 1),
					U("h3", null, O(e.title || (e.genre || "Промпт") + " · " + (e.mood || "студия")), 1),
					U("p", null, O(String(e.text || "").slice(0, 180)), 1),
					U("div", Gd, [U("button", {
						type: "button",
						class: "dash-entry-link",
						"data-action": "dash-open-prompt",
						"data-id": String(e.id)
					}, "Открыть промпт →", 8, Kd), U("button", {
						type: "button",
						class: "dash-copy",
						"data-action": "copy-saved",
						"data-id": String(e.id)
					}, "Копировать", 8, qd)])
				]))), 128)), e.model.prompts.length ? K("", !0) : (V(), H("div", Jd, [
					r[19] ||= U("span", null, "🎛️", -1),
					r[20] ||= U("strong", null, "Пока нет сохранённых промптов", -1),
					r[21] ||= U("p", null, "Сохрани промпт в Suno Studio или создай собственный.", -1),
					U("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "nav",
						"data-nav": "myprompts",
						onClick: r[6] ||= Uo((t) => e.navigate("myprompts"), ["stop"])
					}, "Добавить промпт →")
				]))])]),
				U("section", Yd, [U("header", Xd, [r[22] ||= U("div", null, [U("span", { class: "dash-kicker" }, "🗓️ ТВОРЧЕСКИЙ КАЛЕНДАРЬ"), U("h2", null, "Мои события")], -1), U("button", {
					type: "button",
					class: "dash-view-all",
					"data-action": "nav",
					"data-nav": "events",
					onClick: r[7] ||= Uo((t) => e.navigate("events"), ["stop"])
				}, "Все события →")]), U("div", Zd, [(V(!0), H(B, null, z(e.model.events, (e) => (V(), H("article", {
					key: String(e.id),
					class: "dash-entry dash-event"
				}, [
					U("div", Qd, [U("strong", null, O(e.formattedDate), 1), U("span", null, O(e.time || "Весь день"), 1)]),
					U("div", $d, [
						U("div", ef, O(e.typeLabel) + O(e.past ? " · Прошедшее" : ""), 1),
						U("h3", null, O(e.title), 1),
						e.notes ? (V(), H("p", tf, O(String(e.notes).slice(0, 160)), 1)) : K("", !0)
					]),
					U("button", {
						type: "button",
						class: "dash-entry-link",
						"data-action": "dash-open-event",
						"data-id": String(e.id)
					}, "Подробнее →", 8, nf)
				]))), 128)), e.model.events.length ? K("", !0) : (V(), H("div", rf, [
					r[23] ||= U("span", null, "🗓️", -1),
					r[24] ||= U("strong", null, "Событий пока нет", -1),
					r[25] ||= U("p", null, "Добавь даты релизов, записи, встречи и другие планы своей музыкальной работы.", -1),
					U("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "nav",
						"data-nav": "events",
						onClick: r[8] ||= Uo((t) => e.navigate("events"), ["stop"])
					}, "Добавить событие →")
				]))])])
			])
		], 8, Dd));
	}
}, of = Object.freeze([
	"myideas",
	"myprompts",
	"events"
]);
function sf(e, { router: t, legacyApi: n, syncRoute: r = ad } = {}, i) {
	if (typeof e != "string" || !e || !n || typeof n.snapshot != "function") return !1;
	let a = i === "menu", o = n.snapshot()?.items, s = a ? Array.isArray(o) && o.some((t) => t?.id === e) : of.includes(e), c = a ? n.navigate : n.navigateWorkspace;
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
function cf(e, t = {}) {
	return sf(e, t, "menu");
}
function lf(e, t = {}) {
	return sf(e, t, "shortcut");
}
// src/vue/home/legacyHomeDashboardBridge.js
function uf({ mountVueFeature: e, sharedUi: t }) {
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
		let c = e(o, af, {
			model: s,
			navigate: (e) => lf(e, {
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
var df = { class: "section-title" }, ff = {
	key: 0,
	class: "saved-list"
}, pf = { class: "row" }, mf = { class: "actions" }, hf = ["data-id"], gf = ["innerHTML"], _f = ["data-id"], vf = ["data-id", "aria-label"], yf = ["innerHTML"], bf = { class: "sub" }, xf = {
	key: 1,
	class: "empty"
}, Sf = ["innerHTML"], Cf = {
	__name: "PromptCollection",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (V(), H(B, null, [U("div", df, [U("h2", null, "Сохранённые промпты (" + O(e.model.items.length) + ")", 1)]), e.model.items.length ? (V(), H("div", ff, [(V(!0), H(B, null, z(e.model.items, (t) => (V(), H("article", {
			key: t.id,
			class: "saved-item"
		}, [
			U("div", pf, [U("h3", null, O(t.title), 1), U("div", mf, [
				U("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "copy-saved",
					"data-id": t.id
				}, [U("span", {
					"aria-hidden": "true",
					innerHTML: e.model.icons.copy
				}, null, 8, gf), n[0] ||= G(" Копировать", -1)], 8, hf),
				U("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "edit-manual-prompt",
					"data-id": t.id
				}, "Изменить", 8, _f),
				U("button", {
					type: "button",
					class: "btn danger small",
					"data-action": "delete-saved",
					"data-id": t.id,
					"aria-label": "Удалить промпт «" + t.title + "»"
				}, [U("span", {
					"aria-hidden": "true",
					innerHTML: e.model.icons.trash
				}, null, 8, yf)], 8, vf)
			])]),
			U("p", null, O(t.text), 1),
			U("span", bf, O(t.genre) + " · " + O(t.date), 1)
		]))), 128))])) : (V(), H("div", xf, [
			U("span", {
				"aria-hidden": "true",
				innerHTML: e.model.icons.music
			}, null, 8, Sf),
			n[1] ||= U("strong", null, "Промптов пока нет", -1),
			n[2] ||= G("Сохрани первый здесь или в Suno Studio.", -1)
		]))], 64));
	}
};
// src/vue/account/legacyPromptCollectionBridge.js
function wf({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PROMPT_LIST, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-prompts-list");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, Cf, { model: o });
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
var Tf = { class: "field" }, Ef = { class: "field" }, Df = ["value"], Of = { class: "field" }, kf = {
	id: "sb-prompt-char-count",
	class: "sub"
}, Af = {
	__name: "PromptEditor",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = /* @__PURE__ */ j({ ...e.initial.values }), n = q(() => t.text.length);
		return (r, i) => (V(), H(B, null, [
			U("h3", null, O(e.initial.editing ? "Редактирование промпта" : "Новый промпт для Suno"), 1),
			U("div", Tf, [i[3] ||= U("label", { for: "custom-prompt-title" }, "Название", -1), L(U("input", {
				id: "custom-prompt-title",
				"onUpdate:modelValue": i[0] ||= (e) => t.title = e,
				maxlength: "100",
				placeholder: "Например, Романтичный афро-поп"
			}, null, 512), [[J, t.title]])]),
			U("div", Ef, [i[4] ||= U("label", { for: "custom-prompt-genre" }, "Жанр", -1), L(U("select", {
				id: "custom-prompt-genre",
				"onUpdate:modelValue": i[1] ||= (e) => t.genre = e
			}, [(V(!0), H(B, null, z(e.initial.genres, (e) => (V(), H("option", {
				key: e.id,
				value: e.id
			}, O(e.name), 9, Df))), 128))], 512), [[Io, t.genre]])]),
			U("div", Of, [
				i[5] ||= U("label", { for: "custom-prompt-text" }, "Текст промпта (до 1000 символов)", -1),
				L(U("textarea", {
					id: "custom-prompt-text",
					"onUpdate:modelValue": i[2] ||= (e) => t.text = e,
					rows: "7",
					maxlength: "1000",
					"aria-describedby": "sb-prompt-char-count",
					placeholder: "Modern Russian-language afropop, 105 BPM, clean vocals, groovy bass..."
				}, null, 512), [[J, t.text]]),
				U("span", kf, O(n.value) + " / 1000 символов", 1)
			])
		], 64));
	}
};
// src/vue/account/legacyPromptEditorBridge.js
function jf({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PROMPT_EDITOR, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-prompt-form");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, Af, { initial: o });
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
var Mf = { class: "account-back" }, Nf = {
	type: "button",
	class: "btn ghost small",
	"data-action": "workspace-back"
}, Pf = { class: "section-title" }, Ff = {
	key: 0,
	class: "genre-grid"
}, If = ["data-id"], Lf = { class: "genre-content" }, Rf = { class: "kicker" }, zf = { class: "foot" }, Bf = {
	key: 1,
	class: "empty"
}, Vf = { class: "section-title" }, Hf = {
	key: 2,
	class: "idea-grid"
}, Uf = { class: "idea-badge" }, Wf = { class: "actions" }, Gf = ["data-id", "data-i"], Kf = ["data-id", "data-i"], qf = {
	key: 3,
	class: "empty"
}, Jf = { class: "section-title" }, Yf = {
	key: 4,
	class: "idea-grid"
}, Xf = { class: "idea-badge" }, Zf = ["data-id"], Qf = {
	key: 5,
	class: "empty"
}, $f = { class: "section-title" }, ep = {
	key: 6,
	class: "idea-grid"
}, tp = { class: "idea-badge" }, np = { class: "generator-story" }, rp = { class: "generator-hook" }, ip = {
	key: 0,
	class: "generator-detail"
}, ap = { class: "actions" }, op = ["data-id"], sp = ["data-id"], cp = ["data-id", "aria-label"], lp = {
	key: 7,
	class: "empty"
}, up = { class: "section-title" }, dp = {
	key: 8,
	class: "saved-list"
}, fp = { class: "row" }, pp = { class: "actions" }, mp = ["data-id"], hp = ["data-id", "aria-label"], gp = { class: "sub" }, _p = {
	key: 9,
	class: "empty"
}, vp = {
	__name: "LibraryCollection",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (V(), H(B, null, [
			U("div", Mf, [U("button", Nf, O(e.model.backLabel), 1)]),
			n[11] ||= U("header", { class: "heading" }, [U("h1", null, "Моя библиотека"), U("p", null, "Любимые жанры, идеи и промпты. Сохраняются локально в этом браузере.")], -1),
			U("div", Pf, [U("h2", null, "Избранные жанры (" + O(e.model.genres.length) + ")", 1)]),
			e.model.genres.length ? (V(), H("div", Ff, [(V(!0), H(B, null, z(e.model.genres, (e) => (V(), H("button", {
				key: e.id,
				type: "button",
				class: "genre-card",
				style: E({ "--accent": e.color }),
				"data-action": "genre",
				"data-id": e.id
			}, [n[1] ||= U("div", { class: "art" }, null, -1), U("div", Lf, [U("div", null, [
				U("div", Rf, O(e.family) + " · " + O(e.bpm[0]) + "–" + O(e.bpm[1]) + " BPM", 1),
				U("h3", null, O(e.name), 1),
				U("p", null, O(e.tagline), 1)
			]), U("div", zf, [U("span", null, O(e.era), 1), n[0] ||= U("span", { style: { color: "#ffacd9" } }, "Открыть →", -1)])])], 12, If))), 128))])) : (V(), H("div", Bf, [...n[2] ||= [U("strong", null, "Пока нет избранных жанров", -1), G("Добавляй их в карточках Академии.", -1)]])),
			U("div", Vf, [U("h2", null, "Сохранённые идеи (" + O(e.model.ideas.length) + ")", 1)]),
			e.model.ideas.length ? (V(), H("div", Hf, [(V(!0), H(B, null, z(e.model.ideas, (e) => (V(), H("article", {
				key: e.key,
				class: "idea"
			}, [
				U("div", Uf, O(e.genre) + " · " + O(e.mood), 1),
				U("h3", null, O(e.title), 1),
				U("p", null, O(e.pitch), 1),
				U("div", Wf, [U("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "idea-use",
					"data-id": e.genreId,
					"data-i": e.index
				}, "В студию", 8, Gf), U("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "idea-save",
					"data-id": e.genreId,
					"data-i": e.index
				}, "Сохранено", 8, Kf)])
			]))), 128))])) : (V(), H("div", qf, [...n[3] ||= [U("strong", null, "Нет сохранённых идей", -1), G("Найди интересный сюжет и нажми «Сохранить».", -1)]])),
			U("div", Jf, [U("h2", null, "Мои собственные идеи (" + O(e.model.own.length) + ")", 1), n[4] ||= U("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "nav",
				"data-nav": "myideas"
			}, "Добавить или изменить →", -1)]),
			e.model.own.length ? (V(), H("div", Yf, [(V(!0), H(B, null, z(e.model.own, (e) => (V(), H("article", {
				key: e.id,
				class: "idea"
			}, [
				U("div", Xf, O(e.genre), 1),
				U("h3", null, O(e.title), 1),
				U("p", null, O(e.pitch), 1),
				U("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "edit-manual-idea",
					"data-id": e.id
				}, "Открыть запись →", 8, Zf)
			]))), 128))])) : (V(), H("div", Qf, [...n[5] ||= [U("strong", null, "Пока нет своих идей", -1), G("Добавь их в личном кабинете.", -1)]])),
			U("div", $f, [U("h2", null, "Идеи из генератора (" + O(e.model.generated.length) + ")", 1), n[6] ||= U("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "nav",
				"data-nav": "ideas"
			}, "＋ Создать ещё", -1)]),
			e.model.generated.length ? (V(), H("div", ep, [(V(!0), H(B, null, z(e.model.generated, (e) => (V(), H("article", {
				key: e.id,
				class: "idea generated-card"
			}, [
				U("div", tp, O(e.genre) + " · " + O(e.topic), 1),
				U("h3", null, O(e.title), 1),
				U("p", null, O(e.pitch), 1),
				U("p", np, O(e.storyLine), 1),
				U("div", rp, [n[7] ||= U("span", null, "ХУК ПРИПЕВА", -1), U("strong", null, O(e.hook), 1)]),
				e.detail ? (V(), H("p", ip, "Твоя деталь: " + O(e.detail), 1)) : K("", !0),
				U("div", ap, [
					U("button", {
						type: "button",
						class: "btn primary small",
						"data-action": "generated-use",
						"data-id": e.id
					}, "В Suno Studio", 8, op),
					U("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "generated-copy",
						"data-id": e.id
					}, "Копировать", 8, sp),
					U("button", {
						type: "button",
						class: "btn danger small",
						"data-action": "generated-delete",
						"data-id": e.id,
						"aria-label": "Удалить идею «" + e.title + "»"
					}, "Удалить", 8, cp)
				])
			]))), 128))])) : (V(), H("div", lp, [...n[8] ||= [U("strong", null, "Сохранённых новых идей нет", -1), G("Создай идеи в генераторе и нажми «Сохранить».", -1)]])),
			U("div", up, [U("h2", null, "Мои промпты (" + O(e.model.prompts.length) + ")", 1), n[9] ||= U("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "nav",
				"data-nav": "myprompts"
			}, "Добавить или изменить →", -1)]),
			e.model.prompts.length ? (V(), H("div", dp, [(V(!0), H(B, null, z(e.model.prompts, (e) => (V(), H("article", {
				key: e.id,
				class: "saved-item"
			}, [
				U("div", fp, [U("h3", null, O(e.title), 1), U("div", pp, [U("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "copy-saved",
					"data-id": e.id
				}, "Копировать", 8, mp), U("button", {
					type: "button",
					class: "btn danger small",
					"data-action": "delete-saved",
					"data-id": e.id,
					"aria-label": "Удалить промпт «" + e.title + "»"
				}, "Удалить", 8, hp)])]),
				U("p", null, O(e.text), 1),
				U("span", gp, O(e.date), 1)
			]))), 128))])) : (V(), H("div", _p, [...n[10] ||= [U("strong", null, "Промптов пока нет", -1), G("Создай первый в Suno Studio и сохрани в библиотеке.", -1)]]))
		], 64));
	}
};
// src/vue/account/legacyLibraryBridge.js
function yp({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_LIBRARY, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-library-collection");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, vp, { model: o });
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
var bp = {
	key: 0,
	class: "sbsong-grid"
}, xp = ["data-id", "aria-label"], Sp = ["data-sbsong-cover"], Cp = ["src"], wp = { class: "sbsong-card-text" }, Tp = { class: "sbsong-card-flags" }, Ep = { class: "sbsong-card-actions" }, Dp = ["data-id"], Op = ["data-id"], kp = ["data-id"], Ap = {
	key: 1,
	class: "sbsong-empty"
}, jp = {
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
			e && (n.value = e, En(() => t.api.hydrateCovers()));
		}
		return R(() => {
			window.addEventListener("sunoboom:songs-search", r), En(() => t.api.hydrateCovers());
		}), xr(() => window.removeEventListener("sunoboom:songs-search", r)), (e, t) => n.value.items.length ? (V(), H("div", bp, [(V(!0), H(B, null, z(n.value.items, (e) => (V(), H("article", {
			key: e.id,
			class: "sbsong-card"
		}, [U("button", {
			type: "button",
			class: "sbsong-art-button",
			"data-sbsong-action": "open",
			"data-id": e.id,
			"aria-label": "Открыть " + e.title
		}, [e.hasCover ? (V(), H("img", {
			key: 0,
			alt: "",
			"data-sbsong-cover": e.id,
			loading: "lazy"
		}, null, 8, Sp)) : e.coverUrl ? (V(), H("img", {
			key: 1,
			alt: "",
			src: e.coverUrl,
			style: { display: "block" },
			loading: "lazy"
		}, null, 8, Cp)) : K("", !0), t[0] ||= U("span", {
			class: "sbsong-no-cover",
			"aria-hidden": "true"
		}, "♫", -1)], 8, xp), U("div", wp, [
			U("small", null, O(e.genre), 1),
			U("h3", null, O(e.title), 1),
			U("p", null, O(e.artist), 1),
			U("div", Tp, [U("span", null, O(e.status), 1)]),
			U("div", Ep, [
				U("button", {
					type: "button",
					"data-sbsong-action": "open",
					"data-id": e.id
				}, "Открыть", 8, Dp),
				U("button", {
					type: "button",
					"data-sbsong-action": "edit",
					"data-id": e.id
				}, "Изменить", 8, Op),
				U("button", {
					type: "button",
					"data-sbsong-action": "share",
					"data-id": e.id
				}, "Поделиться", 8, kp)
			])
		])]))), 128))])) : (V(), H("div", Ap, O(n.value.total ? "По этому запросу песен нет." : "Песен пока нет. Добавь первую карточку и загрузи аудиофайл."), 1));
	}
};
// src/vue/account/legacySongCardsBridge.js
function Mp({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SONG_CARDS, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-song-cards");
		if (r?.node === a || (r &&= (r.unmount(), null), !a || !t.snapshot())) return;
		let o = e(a, jp, { api: t });
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
var Np = {
	class: "sbsong-versions",
	"data-sb-vue-song-versions": "",
	"aria-label": "Версии записи"
}, Pp = { class: "sbsong-version-heading" }, Fp = { key: 0 }, Ip = { class: "sbsong-version-row-head" }, Lp = {
	key: 0,
	class: "sbsong-version-main-badge"
}, Rp = {
	key: 1,
	class: "sbsong-version-play-badge"
}, zp = { class: "sbsong-version-actions" }, Bp = ["data-version-id"], Vp = ["data-version-id"], Hp = ["data-id", "data-version-id"], Up = ["data-version-id"], Wp = { class: "sbsong-version-notes" }, Gp = ["data-sbsong-version-title", "value"], Kp = ["data-sbsong-version-note", "value"], qp = ["data-version-id"], Jp = { key: 0 }, Yp = {
	type: "button",
	class: "sbsong-compare-toggle",
	"data-sbsong-action": "compare-toggle"
}, Xp = {
	key: 0,
	class: "sbsong-compare-grid"
}, Zp = ["value"], Qp = ["value"], $p = ["value"], em = ["value"], tm = {
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
		return (t, n) => (V(), H("section", Np, [
			U("div", Pp, [U("h3", null, "Версии записи (" + O(e.versions.length) + ")", 1), e.playingLabel ? (V(), H("small", Fp, "В основном плеере: " + O(e.playingLabel), 1)) : K("", !0)]),
			(V(!0), H(B, null, z(e.versions, (t) => (V(), H("article", {
				key: t.id,
				class: "sbsong-version-row"
			}, [
				U("div", Ip, [U("div", null, [
					U("strong", null, O(t.label), 1),
					t.isMain ? (V(), H("span", Lp, "★ Основная")) : K("", !0),
					t.isPlaying ? (V(), H("span", Rp, "♫ Выбрана")) : K("", !0),
					U("small", null, O(t.fileName) + " · " + O(t.sizeLabel) + " · " + O(t.addedDate), 1)
				])]),
				U("div", zp, [
					U("button", {
						type: "button",
						"data-sbsong-action": "version-play",
						"data-version-id": t.id
					}, "Выбрать для плеера", 8, Bp),
					t.isMain ? K("", !0) : (V(), H("button", {
						key: 0,
						type: "button",
						"data-sbsong-action": "version-main",
						"data-version-id": t.id
					}, "★ Сделать основной", 8, Vp)),
					U("button", {
						type: "button",
						"data-sbsong-action": "share-file",
						"data-id": e.songId,
						"data-version-id": t.id
					}, "Сохранить / отправить", 8, Hp),
					U("button", {
						type: "button",
						class: "sbsong-version-danger",
						"data-sbsong-action": "version-remove",
						"data-version-id": t.id
					}, "Удалить дубль", 8, Up)
				]),
				U("details", Wp, [
					n[2] ||= U("summary", null, "Название и заметки", -1),
					U("label", null, [n[0] ||= G("Название версии ", -1), U("input", {
						type: "text",
						maxlength: "90",
						"data-sbsong-version-title": t.id,
						value: t.label
					}, null, 8, Gp)]),
					U("label", null, [n[1] ||= G("Чем отличается этот дубль ", -1), U("textarea", {
						maxlength: "800",
						rows: "2",
						"data-sbsong-version-note": t.id,
						value: t.notes,
						placeholder: "Например: более плотный припев, удачный вокал..."
					}, null, 8, Kp)]),
					U("button", {
						type: "button",
						"data-sbsong-action": "version-save",
						"data-version-id": t.id
					}, "Сохранить заметки", 8, qp)
				])
			]))), 128)),
			e.versions.length ? K("", !0) : (V(), H("p", Jp, "Пока нет локальных версий. Загрузи первую запись в MP3, M4A или WAV.")),
			e.versions.length > 1 ? (V(), H(B, { key: 1 }, [U("button", Yp, O(e.compareOpen ? "Скрыть сравнение A/B" : "Сравнить версии A/B"), 1), e.compareOpen ? (V(), H("div", Xp, [
				U("label", null, [
					n[3] ||= G("Версия A ", -1),
					U("select", {
						id: "sbsong-compare-a",
						value: e.compareAId
					}, [(V(!0), H(B, null, z(e.versions, (e) => (V(), H("option", {
						key: e.id,
						value: e.id
					}, O(e.label), 9, Qp))), 128))], 8, Zp),
					n[4] ||= U("audio", {
						id: "sbsong-ab-a",
						controls: "",
						preload: "metadata"
					}, null, -1)
				]),
				U("label", null, [
					n[5] ||= G("Версия B ", -1),
					U("select", {
						id: "sbsong-compare-b",
						value: e.compareBId
					}, [(V(!0), H(B, null, z(e.versions, (e) => (V(), H("option", {
						key: e.id,
						value: e.id
					}, O(e.label), 9, em))), 128))], 8, $p),
					n[6] ||= U("audio", {
						id: "sbsong-ab-b",
						controls: "",
						preload: "metadata"
					}, null, -1)
				]),
				n[7] ||= U("p", null, "Два независимых плеера для сравнения дублей. Воспроизведение запускается вручную.", -1)
			])) : K("", !0)], 64)) : K("", !0),
			n[8] ||= ua("<div class=\"sbsong-version-add\"><h4>+ Добавить новую версию</h4><label>Аудиофайл (MP3, M4A, WAV и другие) <input id=\"sbsong-version-file\" type=\"file\" accept=\"audio/*,.mp3,.m4a,.wav,.wave,.flac,.ogg,.opus,.aac\"></label><label>Название дубля <input id=\"sbsong-new-version-title\" maxlength=\"90\" type=\"text\" placeholder=\"Например: Версия с новым припевом\"></label><label>Заметка <textarea id=\"sbsong-new-version-notes\" maxlength=\"800\" rows=\"2\" placeholder=\"Что изменилось в этой записи?\"></textarea></label><button type=\"button\" class=\"sbsong-main-btn\" data-sbsong-action=\"version-add\" id=\"sbsong-version-submit\">Сохранить новую версию</button><p>WAV — до 500 МБ, другие форматы — до 150 МБ. Каждая версия хранится отдельно в браузере этого устройства. Старые записи не перезаписываются.</p></div>", 1)
		]));
	}
}, nm = { class: "sbsong-detail" }, rm = { class: "sbsong-subhead" }, im = { class: "sbsong-detail-layout" }, am = { class: "sbsong-detail-cover" }, om = ["data-sbsong-cover", "alt"], sm = ["src", "alt"], cm = {
	key: 2,
	class: "sbsong-no-cover",
	"aria-hidden": "true"
}, lm = { class: "sbsong-detail-artist" }, um = { class: "sbsong-detail-tags" }, dm = { key: 0 }, fm = { key: 1 }, pm = {
	key: 0,
	class: "sbsong-detail-description"
}, mm = {
	class: "sbsong-audio-box",
	id: "sbsong-audio-box"
}, hm = {
	key: 0,
	controls: "",
	preload: "metadata",
	id: "sbsong-audio-player"
}, gm = { key: 1 }, _m = { class: "sbsong-detail-actions" }, vm = ["data-id"], ym = ["data-id"], bm = ["href"], xm = ["data-id"], Sm = ["data-id"], Cm = ["data-id"], wm = {
	key: 1,
	class: "sbsong-delete-confirm"
}, Tm = ["data-id"], Em = {
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
			En(() => t.api.hydrateMedia());
		}), (t, n) => (V(), H("section", nm, [U("div", rm, [U("h2", null, O(e.model.title), 1), n[0] ||= U("button", {
			type: "button",
			"data-sbsong-action": "close-detail"
		}, "Закрыть ×", -1)]), U("div", im, [U("div", am, [e.model.hasCover ? (V(), H("img", {
			key: 0,
			"data-sbsong-cover": e.model.id,
			alt: "Обложка песни " + e.model.title
		}, null, 8, om)) : e.model.coverUrl ? (V(), H("img", {
			key: 1,
			src: e.model.coverUrl,
			alt: "Обложка песни " + e.model.title,
			style: { display: "block" }
		}, null, 8, sm)) : (V(), H("span", cm, "♫"))]), U("div", null, [
			U("p", lm, O(e.model.artist), 1),
			U("p", um, [e.model.genre ? (V(), H("span", dm, O(e.model.genre), 1)) : K("", !0), e.model.album ? (V(), H("span", fm, O(e.model.album), 1)) : K("", !0)]),
			e.model.description ? (V(), H("p", pm, O(e.model.description), 1)) : K("", !0),
			U("div", mm, [e.model.hasPlayableAudio ? (V(), H("audio", hm)) : (V(), H("p", gm, "Аудио ещё не добавлено. Добавь первую версию в этой карточке."))]),
			W(tm, {
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
			U("div", _m, [
				U("button", {
					type: "button",
					class: "sbsong-main-btn",
					"data-sbsong-action": "share",
					"data-id": e.model.id
				}, "🔗 Поделиться ссылкой", 8, vm),
				e.model.hasAudio ? (V(), H("button", {
					key: 0,
					type: "button",
					"data-sbsong-action": "share-file",
					"data-id": e.model.id
				}, "Отправить аудиофайл", 8, ym)) : K("", !0),
				e.model.listenUrl ? (V(), H("a", {
					key: 1,
					href: e.model.listenUrl,
					target: "_blank",
					rel: "noopener noreferrer"
				}, "Открыть публичную запись ↗", 8, bm)) : K("", !0),
				U("button", {
					type: "button",
					"data-sbsong-action": "producer",
					"data-id": e.model.id
				}, "🎛 Мастер", 8, xm),
				U("button", {
					type: "button",
					"data-sbsong-action": "edit",
					"data-id": e.model.id
				}, "Изменить", 8, Sm),
				U("button", {
					type: "button",
					class: "sbsong-danger",
					"data-sbsong-action": "delete",
					"data-id": e.model.id
				}, "Удалить", 8, Cm)
			]),
			e.model.confirmDelete ? (V(), H("div", wm, [
				n[1] ||= U("strong", null, "Удалить карточку вместе с локальными файлами?", -1),
				U("button", {
					type: "button",
					"data-sbsong-action": "delete-confirm",
					"data-id": e.model.id
				}, "Да, удалить", 8, Tm),
				n[2] ||= U("button", {
					type: "button",
					"data-sbsong-action": "delete-cancel"
				}, "Отмена", -1)
			])) : K("", !0)
		])])]));
	}
};
// src/vue/account/legacySongDetailBridge.js
function Dm({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SONG_DETAIL, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-song-detail");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, Em, {
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
var Om = {
	id: "sbsong-form",
	class: "sbsong-form-panel"
}, km = { class: "sbsong-subhead" }, Am = {
	id: "sbsong-save-form",
	class: "sbsong-form"
}, jm = { class: "sbsong-form-columns" }, Mm = { class: "sbsong-field" }, Nm = { class: "sbsong-artist-field" }, Pm = {
	class: "sbsong-field",
	for: "sbsong-artist-input"
}, Fm = ["aria-expanded"], Im = {
	id: "sbsong-artist-options",
	class: "sbsong-artist-options",
	role: "listbox",
	"aria-label": "Список артистов"
}, Lm = ["onClick"], Rm = {
	key: 0,
	class: "sbsong-artist-hint"
}, zm = {
	key: 1,
	class: "sbsong-artist-hint"
}, Bm = { class: "sbsong-genre-field" }, Vm = {
	class: "sbsong-field",
	for: "sbsong-genre-input"
}, Hm = ["aria-expanded"], Um = ["aria-expanded"], Wm = {
	id: "sbsong-genre-options",
	class: "sbsong-genre-options",
	role: "region",
	"aria-label": "Выбор жанра из Академии"
}, Gm = { class: "sbsong-genre-picker-head" }, Km = ["value"], qm = {
	id: "sbsong-genre-results",
	class: "sbsong-genre-results",
	role: "listbox",
	"aria-label": "Жанры и поджанры"
}, Jm = ["aria-label"], Ym = { class: "sbsong-genre-group-title" }, Xm = ["onClick"], Zm = {
	key: 0,
	class: "sbsong-genre-hint"
}, Qm = { class: "sbsong-field" }, $m = { class: "sbsong-field" }, eh = { class: "sbsong-form-columns" }, th = { class: "sbsong-field" }, nh = {
	class: "sbsong-cover-auto",
	"aria-live": "polite"
}, rh = { id: "sbsong-cover-status" }, ih = { class: "sbsong-form-columns" }, ah = { class: "sbsong-field" }, oh = { class: "sbsong-field" }, sh = { class: "sbsong-field" }, ch = {
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
		return R(() => {
			document.addEventListener("pointerdown", x), En(() => t.api.hydrateCover());
		}), xr(() => document.removeEventListener("pointerdown", x)), (t, d) => (V(), H("section", Om, [U("div", km, [U("h2", null, O(e.model.editId ? "Изменить песню" : "Новая песня"), 1), d[16] ||= U("button", {
			type: "button",
			"data-sbsong-action": "cancel"
		}, "Закрыть ×", -1)]), U("form", Am, [
			U("div", jm, [
				U("label", Mm, [d[17] ||= U("span", null, "Название *", -1), L(U("input", {
					"onUpdate:modelValue": d[0] ||= (e) => n.title = e,
					type: "text",
					name: "title",
					maxlength: "120",
					placeholder: "Название песни"
				}, null, 512), [[J, n.title]])]),
				U("div", Nm, [
					U("label", Pm, [d[18] ||= U("span", null, "Исполнитель / проект", -1), L(U("input", {
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
					}, null, 40, Fm), [[J, n.artist]])]),
					U("div", { class: "sbsong-artist-shortcuts" }, [U("button", {
						type: "button",
						onClick: y
					}, "▾ Выбрать из списка"), U("button", {
						type: "button",
						onClick: g
					}, "+ Сохранить артиста")]),
					L(U("div", Im, [
						(V(!0), H(B, null, z(f.value, (e) => (V(), H("button", {
							key: e.name,
							type: "button",
							role: "option",
							class: "sbsong-artist-option",
							onClick: (t) => _(e.name)
						}, [U("strong", null, O(e.name), 1), U("small", null, O(e.origin), 1)], 8, Lm))), 128)),
						p.value ? (V(), H("p", Rm, "Уточни поиск, чтобы увидеть остальные варианты.")) : K("", !0),
						f.value.length ? K("", !0) : (V(), H("p", zm, O(a.value.length ? "Совпадений нет. Нового артиста можно сохранить кнопкой выше." : "Список пуст. Введи имя и сохрани первого артиста."), 1))
					], 512), [[Qa, r.value]])
				]),
				U("div", Bm, [
					U("label", Vm, [d[19] ||= U("span", null, "Жанр", -1), L(U("input", {
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
					}, null, 40, Hm), [[J, n.genre]])]),
					U("button", {
						type: "button",
						class: "sbsong-genre-toggle",
						"aria-controls": "sbsong-genre-options",
						"aria-expanded": String(o.value),
						onClick: b
					}, "▾ Выбрать из Академии", 8, Um),
					L(U("div", Wm, [U("div", Gm, [
						d[21] ||= U("label", { for: "sbsong-genre-family" }, "Направление", -1),
						L(U("select", {
							id: "sbsong-genre-family",
							"onUpdate:modelValue": d[9] ||= (e) => c.value = e,
							"aria-label": "Фильтр по направлению",
							onChange: d[10] ||= (e) => s.value = !0
						}, [d[20] ||= U("option", { value: "Все" }, "Все направления", -1), (V(!0), H(B, null, z(u.value, (e) => (V(), H("option", {
							key: e,
							value: e
						}, O(e), 9, Km))), 128))], 544), [[Io, c.value]]),
						U("small", null, O(m.value.length) + " из " + O(l.value.length), 1)
					]), U("div", qm, [(V(!0), H(B, null, z(h.value, (e) => (V(), H("div", {
						key: e.name,
						class: "sbsong-genre-group",
						role: "group",
						"aria-label": e.name
					}, [U("div", Ym, [G(O(e.name) + " ", 1), U("span", null, O(e.genres.length), 1)]), (V(!0), H(B, null, z(e.genres, (e) => (V(), H("button", {
						key: e.id,
						type: "button",
						class: "sbsong-genre-option",
						role: "option",
						onClick: (t) => v(e.name)
					}, [U("span", null, O(e.name), 1)], 8, Xm))), 128))], 8, Jm))), 128)), m.value.length ? K("", !0) : (V(), H("p", Zm, O(l.value.length ? "Не найдено. Можно ввести свой жанр вручную." : "Каталог Академии пока недоступен. Введи жанр вручную."), 1))])], 512), [[Qa, o.value]])
				]),
				U("label", Qm, [d[22] ||= U("span", null, "Альбом / релиз", -1), L(U("input", {
					"onUpdate:modelValue": d[11] ||= (e) => n.album = e,
					type: "text",
					name: "album",
					maxlength: "120",
					placeholder: "Название альбома"
				}, null, 512), [[J, n.album]])])
			]),
			U("label", $m, [d[23] ||= U("span", null, "Описание", -1), L(U("textarea", {
				"onUpdate:modelValue": d[12] ||= (e) => n.description = e,
				name: "description",
				maxlength: "700",
				rows: "3",
				placeholder: "История, настроение или заметки"
			}, null, 512), [[J, n.description]])]),
			U("div", eh, [U("label", th, [U("span", null, O(e.model.hasAudio ? "Добавить новую аудиоверсию" : "Загрузить аудиофайл (MP3, M4A, WAV и другие)"), 1), d[24] ||= U("input", {
				name: "audio",
				type: "file",
				accept: "audio/*,.mp3,.wav,.wave,.m4a,.aac,.flac,.ogg,.opus"
			}, null, -1)]), d[25] ||= U("label", { class: "sbsong-field" }, [U("span", null, "Обложка вручную (необязательно)"), U("input", {
				name: "cover",
				type: "file",
				accept: "image/png,image/jpeg,image/webp,image/gif"
			})], -1)]),
			U("div", nh, [d[28] ||= U("div", { class: "sbsong-cover-preview-figure" }, [U("img", {
				id: "sbsong-cover-preview-img",
				alt: "Предпросмотр обложки",
				hidden: ""
			}), U("span", {
				id: "sbsong-cover-preview-placeholder",
				"aria-hidden": "true"
			}, "♫")], -1), U("div", null, [
				d[26] ||= U("strong", null, "Обложка из аудиофайла", -1),
				U("p", rh, O(e.model.hasCover ? "Загружаю сохранённую обложку…" : "Выбери MP3, M4A или FLAC — попробую найти обложку автоматически"), 1),
				d[27] ||= U("small", null, "Ручная обложка имеет приоритет, если ты её выберешь.", -1)
			])]),
			U("div", ih, [
				U("label", ah, [d[29] ||= U("span", null, "Прямая ссылка на MP3 (если есть)", -1), L(U("input", {
					"onUpdate:modelValue": d[13] ||= (e) => n.audioUrl = e,
					type: "text",
					name: "audioUrl",
					maxlength: "700",
					placeholder: "https://.../song.mp3"
				}, null, 512), [[J, n.audioUrl]])]),
				U("label", oh, [d[30] ||= U("span", null, "Публичная страница песни", -1), L(U("input", {
					"onUpdate:modelValue": d[14] ||= (e) => n.listenUrl = e,
					type: "text",
					name: "listenUrl",
					maxlength: "700",
					placeholder: "https://suno.com/..."
				}, null, 512), [[J, n.listenUrl]])]),
				U("label", sh, [d[31] ||= U("span", null, "Публичная обложка (по желанию)", -1), L(U("input", {
					"onUpdate:modelValue": d[15] ||= (e) => n.coverUrl = e,
					type: "text",
					name: "coverUrl",
					maxlength: "700",
					placeholder: "https://.../cover.jpg"
				}, null, 512), [[J, n.coverUrl]])])
			]),
			d[32] ||= U("p", { class: "sbsong-form-help" }, " MP3, M4A, WAV, FLAC и другие аудиофайлы сохраняются локально (IndexedDB): WAV — до 500 МБ, остальные — до 150 МБ при наличии свободной памяти браузера. Новая загрузка добавляет версию, не заменяя старую. Обложка ищется в MP3, M4A и FLAC; для WAV её обычно добавляют вручную. Локальное аудио по общей ссылке не передаётся. ", -1),
			d[33] ||= U("div", { class: "sbsong-form-actions" }, [U("button", {
				type: "submit",
				class: "sbsong-main-btn",
				id: "sbsong-submit"
			}, "Сохранить песню"), U("button", {
				type: "button",
				"data-sbsong-action": "cancel"
			}, "Отмена")], -1)
		])]));
	}
};
// src/vue/account/legacySongEditorBridge.js
function lh({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SONG_EDITOR, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-song-editor");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, ch, {
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
var uh = {
	id: "sbsong-artist-manager",
	class: "sbsong-artist-manager",
	"data-sb-vue-artist-manager": ""
}, dh = {
	key: 0,
	class: "sbsong-artist-hint"
}, fh = { id: "sbsong-artist-manager-results" }, ph = ["data-id", "aria-label"], mh = {
	key: 0,
	class: "sbsong-artist-hint"
}, hh = {
	__name: "ArtistManager",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ P(t.model.filter || ""), r = (e) => String(e || "").normalize("NFKC").toLocaleLowerCase("ru"), i = q(() => t.model.artists.filter((e) => r(e.name).includes(r(n.value))));
		return (t, r) => (V(), H("section", uh, [
			r[1] ||= U("div", { class: "sbsong-subhead" }, [U("h2", null, "Мои артисты"), U("button", {
				type: "button",
				"data-sbsong-action": "artists-manage"
			}, "Закрыть ×")], -1),
			r[2] ||= U("p", null, "Создавай свой список исполнителей и музыкальных проектов. Артисты из «ДНК артиста» и сохранённых песен также доступны при выборе. Удаление из списка не меняет существующие песни.", -1),
			e.model.dnaCount ? (V(), H("p", dh, " Профилей ДНК артиста доступно для выбора: " + O(e.model.dnaCount) + ". Они не удаляются при изменении этого списка. ", 1)) : K("", !0),
			r[3] ||= U("div", { class: "sbsong-artist-manager-new" }, [U("input", {
				id: "sbsong-artist-manager-add",
				type: "text",
				maxlength: "120",
				placeholder: "Имя артиста или проекта",
				"aria-label": "Новый артист"
			}), U("button", {
				type: "button",
				class: "sbsong-main-btn",
				"data-sbsong-action": "artist-manager-add"
			}, " + Добавить артиста ")], -1),
			L(U("input", {
				"onUpdate:modelValue": r[0] ||= (e) => n.value = e,
				id: "sbsong-artist-manager-filter",
				type: "search",
				placeholder: "Фильтр по имени…",
				"aria-label": "Фильтр моих артистов"
			}, null, 512), [[J, n.value]]),
			U("div", fh, [(V(!0), H(B, null, z(i.value, (e) => (V(), H("div", {
				key: e.id,
				class: "sbsong-artist-entry"
			}, [U("span", null, O(e.name), 1), U("button", {
				type: "button",
				"data-sbsong-action": "artist-remove",
				"data-id": e.id,
				"aria-label": "Удалить артиста " + e.name
			}, "Удалить", 8, ph)]))), 128)), i.value.length ? K("", !0) : (V(), H("p", mh, O(e.model.artists.length ? "Ничего не найдено." : "Пока нет добавленных вручную артистов."), 1))])
		]));
	}
};
// src/vue/account/legacyArtistManagerBridge.js
function gh({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ARTIST_MANAGER, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-artist-manager");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, hh, { model: o });
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
var _h = { key: 0 }, vh = {
	key: 0,
	class: "sb-dna-grid"
}, yh = ["data-id"], bh = { class: "sb-dna-cardimg" }, xh = ["src"], Sh = {
	key: 1,
	class: "sb-dna-empty"
}, Ch = {
	key: 1,
	class: "sb-dna-detail"
}, wh = { class: "sb-dna-actions" }, Th = ["data-id"], Eh = ["data-id"], Dh = ["data-id"], Oh = { class: "sb-dna-hero" }, kh = { class: "sb-dna-portrait" }, Ah = ["src"], jh = { class: "sb-dna-facts" }, Mh = {
	key: 0,
	class: "sb-dna-restrictions"
}, Nh = { class: "sb-dna-descr" }, Ph = { class: "sb-dna-style" }, Fh = { class: "sb-dna-actions" }, Ih = ["data-id"], Lh = ["data-id"], Rh = { class: "sb-dna-related" }, zh = ["data-id"], Bh = { key: 1 }, Vh = {
	__name: "ArtistDNA",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => e.model.detail ? (V(), H("div", Ch, [
			U("div", wh, [
				n[1] ||= U("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "dna-list"
				}, "← Все артисты", -1),
				U("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "dna-apply",
					"data-id": e.model.detail.id
				}, "В Suno Studio", 8, Th),
				U("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "dna-edit",
					"data-id": e.model.detail.id
				}, "Изменить", 8, Eh),
				U("button", {
					type: "button",
					class: "btn danger small",
					"data-action": "dna-delete",
					"data-id": e.model.detail.id
				}, "Удалить", 8, Dh)
			]),
			U("div", Oh, [U("div", kh, [e.model.detail.portrait ? (V(), H("img", {
				key: 0,
				src: e.model.detail.portrait,
				alt: "Портрет артиста",
				loading: "lazy"
			}, null, 8, Ah)) : (V(), H(B, { key: 1 }, [G("♫")], 64))]), U("div", null, [
				n[2] ||= U("span", null, "МУЗЫКАЛЬНАЯ ИДЕНТИЧНОСТЬ", -1),
				U("h2", null, O(e.model.detail.name), 1),
				U("p", null, O(e.model.detail.subtitle), 1)
			])]),
			U("div", jh, [(V(!0), H(B, null, z(e.model.detail.facts, (e) => (V(), H("div", {
				key: e.label,
				class: "sb-dna-fact"
			}, [U("span", null, O(e.label), 1), U("strong", null, O(e.value), 1)]))), 128))]),
			(V(!0), H(B, null, z(e.model.detail.textFields, (e) => (V(), H("section", {
				key: e.label,
				class: "sb-dna-descr"
			}, [U("h3", null, O(e.label), 1), U("p", null, O(e.value), 1)]))), 128)),
			e.model.detail.forbids.length ? (V(), H("div", Mh, [n[3] ||= U("strong", null, "Запреты:", -1), (V(!0), H(B, null, z(e.model.detail.forbids, (e) => (V(), H("span", { key: e }, O(e), 1))), 128))])) : K("", !0),
			U("section", Nh, [
				n[4] ||= U("h3", null, "Промпт для Suno Style", -1),
				U("div", Ph, O(e.model.detail.style), 1),
				U("div", Fh, [U("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "dna-copy",
					"data-id": e.model.detail.id
				}, "Копировать Style", 8, Ih), U("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "dna-apply",
					"data-id": e.model.detail.id
				}, "Применить в Suno Studio", 8, Lh)])
			]),
			U("div", Rh, [U("h3", null, "Связанные паспорта треков (" + O(e.model.detail.related.length) + ")", 1), e.model.detail.related.length ? (V(!0), H(B, { key: 0 }, z(e.model.detail.related, (e) => (V(), H("button", {
				key: e.id,
				type: "button",
				class: "sb-dna-tracklink",
				"data-action": "dna-track",
				"data-id": e.id
			}, [U("strong", null, O(e.title), 1), U("span", null, O(e.status) + " →", 1)], 8, zh))), 128)) : (V(), H("p", Bh, "Пока нет привязанных треков. В «Паспорте трека» можно выбрать этого артиста."))])
		])) : (V(), H("div", _h, [e.model.profiles.length ? (V(), H("div", vh, [(V(!0), H(B, null, z(e.model.profiles, (e) => (V(), H("button", {
			key: e.id,
			type: "button",
			class: "sb-dna-card",
			"data-action": "dna-open",
			"data-id": e.id
		}, [
			U("div", bh, [e.portrait ? (V(), H("img", {
				key: 0,
				src: e.portrait,
				alt: "",
				loading: "lazy"
			}, null, 8, xh)) : (V(), H(B, { key: 1 }, [G("♫")], 64))]),
			U("div", null, [
				U("strong", null, O(e.name), 1),
				U("span", null, O(e.genre), 1),
				U("small", null, O(e.timbre), 1)
			]),
			n[0] ||= U("span", { class: "sb-dna-arrow" }, "→", -1)
		], 8, yh))), 128))])) : (V(), H("div", Sh, " Здесь будут музыкальные персонажи со своим вокалом, инструментами, стилем и визуальным образом. Создай первый профиль. "))]));
	}
};
// src/vue/account/legacyArtistDNABridge.js
function Hh({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_DNA, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-dna-view");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, Vh, { model: o });
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
var Uh = {
	id: "dna-editor",
	class: "panel sb-dna-editor",
	"data-sb-vue-dna-editor": ""
}, Wh = { class: "sb-dna-formheader" }, Gh = { class: "sb-dna-fields" }, Kh = { class: "field" }, qh = { class: "field" }, Jh = ["value"], Yh = { class: "field" }, Xh = ["value"], Zh = { class: "field" }, Qh = { class: "field" }, $h = { class: "field" }, eg = {
	key: 0,
	class: "sb-dna-fields"
}, tg = { class: "field" }, ng = { class: "field" }, rg = { class: "field" }, ig = ["for"], ag = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"rows"
], og = { class: "sb-dna-checkboxes" }, sg = ["id", "onUpdate:modelValue"], cg = { class: "field" }, lg = ["for"], ug = [
	"id",
	"onUpdate:modelValue",
	"rows",
	"maxlength"
], dg = { class: "field" }, fg = { class: "sb-dna-previewbox" }, pg = { id: "dna-style-preview" }, mg = { id: "dna-style-count" }, hg = {
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
		let t = e, n = /* @__PURE__ */ j({ ...t.model.fields }), r = q(() => t.api.stylePreview(n)), i = [
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
		return (t, s) => (V(), H("div", Uh, [
			U("div", Wh, [U("div", null, [U("h2", null, O(e.model.editing ? "Редактирование ДНК" : "Новый артист"), 1), s[10] ||= U("p", null, "Сохрани характер звучания — он будет доступен в Suno Studio и «Паспорте трека».", -1)]), s[11] ||= U("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "dna-cancel"
			}, "Закрыть", -1)]),
			U("div", Gh, [
				U("div", Kh, [s[12] ||= U("label", { for: "dna-name" }, "Имя артиста *", -1), L(U("input", {
					id: "dna-name",
					"onUpdate:modelValue": s[0] ||= (e) => n.name = e,
					maxlength: "120",
					placeholder: "Название музыкального проекта"
				}, null, 512), [[J, n.name]])]),
				U("div", qh, [s[13] ||= U("label", { for: "dna-project" }, "Связанный проект", -1), L(U("select", {
					id: "dna-project",
					"onUpdate:modelValue": s[1] ||= (e) => n.projectId = e
				}, [(V(!0), H(B, null, z(e.model.projects, (e) => (V(), H("option", {
					key: e.id,
					value: e.id
				}, O(e.title), 9, Jh))), 128))], 512), [[Io, n.projectId]])]),
				U("div", Yh, [s[14] ||= U("label", { for: "dna-genre" }, "Основной жанр", -1), L(U("select", {
					id: "dna-genre",
					"onUpdate:modelValue": s[2] ||= (e) => n.genre = e
				}, [(V(!0), H(B, null, z(e.model.genres, (e) => (V(), H("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, Xh))), 128))], 512), [[Io, n.genre]])]),
				U("div", Zh, [s[15] ||= U("label", { for: "dna-othergenres" }, "Дополнительные жанры", -1), L(U("input", {
					id: "dna-othergenres",
					"onUpdate:modelValue": s[3] ||= (e) => n.otherGenres = e,
					maxlength: "240",
					placeholder: "Например, pop, R&B, electropop"
				}, null, 512), [[J, n.otherGenres]])]),
				U("div", Qh, [s[17] ||= U("label", { for: "dna-vocal" }, "Тип вокала", -1), L(U("select", {
					id: "dna-vocal",
					"onUpdate:modelValue": s[4] ||= (e) => n.vocal = e
				}, [...s[16] ||= [
					U("option", { value: "male" }, "Мужской", -1),
					U("option", { value: "female" }, "Женский", -1),
					U("option", { value: "duet" }, "Дуэт", -1)
				]], 512), [[Io, n.vocal]])]),
				U("div", $h, [s[19] ||= U("label", { for: "dna-language" }, "Язык песни", -1), L(U("select", {
					id: "dna-language",
					"onUpdate:modelValue": s[5] ||= (e) => n.language = e
				}, [...s[18] ||= [
					U("option", { value: "Russian" }, "Русский", -1),
					U("option", { value: "English" }, "Английский", -1),
					U("option", { value: "Spanish" }, "Испанский", -1),
					U("option", { value: "Kazakh" }, "Казахский", -1)
				]], 512), [[Io, n.language]])])
			]),
			s[24] ||= U("h3", { class: "sb-dna-formsection" }, "Голос и музыкальный почерк", -1),
			(V(), H(B, null, z(i, (e) => (V(), H(B, { key: e.id }, [e.id === "mood" ? (V(), H("div", eg, [U("div", tg, [s[20] ||= U("label", { for: "dna-tempo-min" }, "Темп от (BPM)", -1), L(U("input", {
				id: "dna-tempo-min",
				"onUpdate:modelValue": s[6] ||= (e) => n.tempoMin = e,
				maxlength: "3",
				placeholder: "Например, 90"
			}, null, 512), [[J, n.tempoMin]])]), U("div", ng, [s[21] ||= U("label", { for: "dna-tempo-max" }, "Темп до (BPM)", -1), L(U("input", {
				id: "dna-tempo-max",
				"onUpdate:modelValue": s[7] ||= (e) => n.tempoMax = e,
				maxlength: "3",
				placeholder: "Например, 120"
			}, null, 512), [[J, n.tempoMax]])])])) : K("", !0), U("div", rg, [U("label", { for: "dna-" + e.id }, O(e.label), 9, ig), L(U("textarea", {
				id: "dna-" + e.id,
				"onUpdate:modelValue": (t) => n[e.key] = t,
				maxlength: e.max,
				rows: e.rows
			}, null, 8, ag), [[J, n[e.key]]])])], 64))), 64)),
			s[25] ||= U("h3", { class: "sb-dna-formsection" }, "Запреты и ограничения", -1),
			U("div", og, [(V(), H(B, null, z(a, (e) => U("label", { key: e.id }, [L(U("input", {
				id: "dna-" + e.id,
				"onUpdate:modelValue": (t) => n[e.key] = t,
				type: "checkbox"
			}, null, 8, sg), [[Po, n[e.key]]]), G(" " + O(e.label), 1)])), 64))]),
			U("div", cg, [s[22] ||= U("label", { for: "dna-extra" }, "Дополнительные требования к аранжировке", -1), L(U("textarea", {
				id: "dna-extra",
				"onUpdate:modelValue": s[8] ||= (e) => n.extra = e,
				rows: "3",
				maxlength: "650"
			}, null, 512), [[J, n.extra]])]),
			s[26] ||= U("h3", { class: "sb-dna-formsection" }, "Творческий образ", -1),
			(V(), H(B, null, z(o, (e) => U("div", {
				key: e.id,
				class: "field"
			}, [U("label", { for: "dna-" + e.id }, O(e.label), 9, lg), L(U("textarea", {
				id: "dna-" + e.id,
				"onUpdate:modelValue": (t) => n[e.key] = t,
				rows: e.rows,
				maxlength: e.max
			}, null, 8, ug), [[J, n[e.key]]])])), 64)),
			U("div", dg, [s[23] ||= U("label", { for: "dna-portrait" }, "Ссылка на портрет (HTTPS)", -1), L(U("input", {
				id: "dna-portrait",
				"onUpdate:modelValue": s[9] ||= (e) => n.portrait = e,
				maxlength: "2000",
				placeholder: "https://…"
			}, null, 512), [[J, n.portrait]])]),
			s[27] ||= U("h3", { class: "sb-dna-formsection" }, "Промпт ДНК для Suno", -1),
			U("div", fg, [U("div", pg, O(r.value), 1), U("span", mg, O(r.value.length) + " / 1000", 1)]),
			s[28] ||= U("div", { class: "sb-dna-actions" }, [U("button", {
				type: "button",
				class: "btn primary",
				"data-action": "dna-save"
			}, "Сохранить ДНК артиста"), U("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "dna-copy-form"
			}, "Копировать промпт")], -1),
			s[29] ||= U("p", { class: "sb-dna-muted" }, " Описания и запреты — подсказки для генерации, а не гарантия идентичного голоса. Все данные пока хранятся локально в браузере. ", -1)
		]));
	}
};
// src/vue/account/legacyArtistDNAEditorBridge.js
function gg({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_DNA_EDITOR, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-dna-editor");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, hg, {
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
var _g = ["data-sb-preferred-theme", "data-sb-applied-theme"], vg = { class: "sbs-layout" }, yg = { class: "sbs-main-column" }, bg = { class: "sbs-panel" }, xg = {
	class: "sbs-field sbs-theme-field",
	for: "sbs-theme"
}, Sg = ["value"], Cg = ["for"], wg = { class: "sbs-option-text" }, Tg = { class: "sbs-switch" }, Eg = [
	"id",
	"onUpdate:modelValue",
	"data-sbs-setting",
	"aria-label"
], Dg = { class: "sbs-panel" }, Og = {
	class: "sbs-field",
	for: "sbs-start"
}, kg = ["value"], Ag = { class: "sbs-panel" }, jg = {
	class: "sbs-field",
	for: "sbs-name"
}, Mg = { class: "sbs-side-column" }, Ng = { class: "sbs-panel sbs-reset-panel" }, Pg = {
	key: 0,
	class: "sbs-confirm"
}, Fg = {
	key: 1,
	type: "button",
	class: "sbs-secondary",
	"data-sbs-action": "reset"
}, Ig = ["hidden"], Lg = {
	__name: "AccountSettings",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = Ed(), r = /* @__PURE__ */ j({ ...t.model.settings });
		qn(() => n.appearance, (e) => {
			for (let t of [
				"theme",
				"compact",
				"largeText",
				"reduceMotion",
				"startPage"
			]) r[t] = e[t];
		});
		let i = /* @__PURE__ */ j({ value: t.model.name }), a = [
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
		return R(() => {
			t.model.resetPending && En(() => document.querySelector("#sb-vue-account-settings .sbs-confirm-button")?.focus());
		}), (t, o) => (V(), H("section", {
			id: "sbs-page",
			class: "sbs-page",
			"data-sb-vue-settings": "",
			"data-sb-preferred-theme": I(n).appearance.theme,
			"data-sb-applied-theme": I(n).appearance.resolvedTheme
		}, [
			o[17] ||= ua("<header class=\"sbs-heading\"><button type=\"button\" class=\"sbs-back\" data-sbs-action=\"close\">← Вернуться в кабинет</button><div class=\"sbs-eyebrow\">SUNOBOOM · ЛИЧНЫЙ КАБИНЕТ</div><div class=\"sbs-heading-row\"><div><h1>Настройки</h1><p>Настрой музыкальную мастерскую под себя. Изменения применяются сразу и сохраняются в этом браузере.</p></div><span class=\"sbs-badge\">⚙️ ПЕРСОНАЛИЗАЦИЯ</span></div></header>", 1),
			U("div", vg, [U("div", yg, [
				U("section", bg, [
					o[5] ||= U("div", { class: "sbs-panel-head" }, [U("span", {
						class: "sbs-symbol",
						"aria-hidden": "true"
					}, "🎨"), U("div", null, [U("h2", null, "Внешний вид"), U("p", null, "Удобная работа на компьютере и телефоне")])], -1),
					U("label", xg, [o[3] ||= U("span", null, "Тема приложения", -1), L(U("select", {
						id: "sbs-theme",
						"onUpdate:modelValue": o[0] ||= (e) => r.theme = e,
						"data-sbs-setting": "theme",
						"aria-label": "Тема приложения"
					}, [(V(!0), H(B, null, z(e.model.themes, (e) => (V(), H("option", {
						key: e.id,
						value: e.id
					}, O(e.title), 9, Sg))), 128))], 512), [[Io, r.theme]])]),
					o[6] ||= U("p", { class: "sbs-help sbs-theme-help" }, "Выбери палитру: тёмную, светлую, системную или одну из шести цветных тем. Изменения сохраняются.", -1),
					(V(), H(B, null, z(a, (e) => U("label", {
						key: e.key,
						class: "sbs-option",
						for: "sbs-" + e.key
					}, [U("span", wg, [U("strong", null, O(e.title), 1), U("small", null, O(e.desc), 1)]), U("span", Tg, [L(U("input", {
						id: "sbs-" + e.key,
						"onUpdate:modelValue": (t) => r[e.key] = t,
						type: "checkbox",
						"data-sbs-setting": e.key,
						role: "switch",
						"aria-label": e.title
					}, null, 8, Eg), [[Po, r[e.key]]]), o[4] ||= U("span", {
						class: "sbs-switch-track",
						"aria-hidden": "true"
					}, null, -1)])], 8, Cg)), 64))
				]),
				U("section", Dg, [
					o[8] ||= U("div", { class: "sbs-panel-head" }, [U("span", {
						class: "sbs-symbol",
						"aria-hidden": "true"
					}, "🏠"), U("div", null, [U("h2", null, "При открытии сайта"), U("p", null, "Выбери стартовый раздел SUNOBOOM")])], -1),
					U("label", Og, [o[7] ||= U("span", null, "Стартовая страница", -1), L(U("select", {
						id: "sbs-start",
						"onUpdate:modelValue": o[1] ||= (e) => r.startPage = e,
						"data-sbs-setting": "startPage"
					}, [(V(!0), H(B, null, z(e.model.pages, (e) => (V(), H("option", {
						key: e.id,
						value: e.id
					}, O(e.title), 9, kg))), 128))], 512), [[Io, r.startPage]])]),
					o[9] ||= U("p", { class: "sbs-help" }, "Применяется при следующем открытии или обновлении сайта. Ссылки на конкретные карточки жанров сохраняют свой переход.", -1)
				]),
				U("section", Ag, [
					o[11] ||= U("div", { class: "sbs-panel-head" }, [U("span", {
						class: "sbs-symbol",
						"aria-hidden": "true"
					}, "👤"), U("div", null, [U("h2", null, "Профиль"), U("p", null, "Имя отображается только в локальном кабинете")])], -1),
					U("label", jg, [o[10] ||= U("span", null, "Имя в кабинете", -1), L(U("input", {
						id: "sbs-name",
						"onUpdate:modelValue": o[2] ||= (e) => i.value = e,
						type: "text",
						maxlength: "60",
						autocomplete: "off",
						placeholder: "Твоё имя"
					}, null, 512), [[J, i.value]])]),
					o[12] ||= U("button", {
						type: "button",
						class: "sbs-primary",
						"data-sbs-action": "save-name"
					}, "Сохранить имя", -1)
				])
			]), U("aside", Mg, [o[16] ||= ua("<section class=\"sbs-panel\"><div class=\"sbs-panel-head\"><span class=\"sbs-symbol\" aria-hidden=\"true\">🔒</span><div><h2>Данные и приватность</h2></div></div><p class=\"sbs-info\">Сейчас SUNOBOOM работает как локальный прототип: твои проекты и настройки сохраняются в браузере. Синхронизации между устройствами пока нет.</p><p class=\"sbs-info\">GitHub Pages остаётся публичной демонстрационной площадкой — полноценный закрытый вход по приглашениям ещё не подключён.</p><button type=\"button\" class=\"sbs-secondary\" data-sbs-action=\"backup\">↓ Перейти к резервным копиям</button></section>", 1), U("section", Ng, [
				o[14] ||= U("div", { class: "sbs-panel-head" }, [U("span", {
					class: "sbs-symbol",
					"aria-hidden": "true"
				}, "↺"), U("div", null, [U("h2", null, "Сброс предпочтений")])], -1),
				o[15] ||= U("p", { class: "sbs-info" }, "Вернуть стандартные параметры отображения. Песни, проекты, избранное и имя профиля не удаляются.", -1),
				e.model.resetPending ? (V(), H("div", Pg, [...o[13] ||= [U("strong", null, "Сбросить настройки интерфейса?", -1), U("div", null, [U("button", {
					type: "button",
					class: "sbs-secondary",
					"data-sbs-action": "cancel-reset"
				}, "Отмена"), U("button", {
					type: "button",
					class: "sbs-confirm-button",
					"data-sbs-action": "confirm-reset"
				}, "Да, сбросить")], -1)]])) : (V(), H("button", Fg, "Сбросить настройки"))
			])])]),
			U("p", {
				id: "sbs-message",
				class: "sbs-message",
				role: "status",
				"aria-live": "polite",
				hidden: !e.model.message
			}, O(e.model.message), 9, Ig)
		], 8, _g));
	}
};
// src/vue/account/legacyAccountSettingsBridge.js
function Rg({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SETTINGS, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-account-settings");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, Lg, { model: o });
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
var zg = {
	class: "sbp-layout",
	"data-sb-vue-player-lab": ""
}, Bg = {
	class: "sbp-main",
	"aria-label": "Плеер"
}, Vg = {
	class: "sbp-bars",
	"aria-hidden": "true"
}, Hg = { class: "sbp-title-area" }, Ug = {
	id: "sbp-now-tag",
	class: "sbp-now-tag"
}, Wg = { id: "sbp-title" }, Gg = { id: "sbp-artist" }, Kg = {
	id: "sbp-counter",
	class: "sbp-counter"
}, qg = {
	key: 0,
	class: "sbp-now-tag",
	"data-sb-vue-ab-recap": ""
}, Jg = { class: "sbp-progress" }, Yg = ["value", "disabled"], Xg = { class: "sbp-times" }, Zg = { id: "sbp-time-current" }, Qg = { id: "sbp-time-total" }, $g = { class: "sbp-transport" }, e_ = ["aria-pressed"], t_ = ["aria-label", "disabled"], n_ = ["title", "aria-label"], r_ = { class: "sbp-extras" }, i_ = { class: "sbp-volume" }, a_ = {
	key: 0,
	class: "sbp-ios-volume"
}, o_ = ["value"], s_ = { id: "sbp-volume-label" }, c_ = {
	class: "sbp-speed",
	for: "sbp-rate"
}, l_ = ["value"], u_ = ["value"], d_ = { class: "sbp-side" }, f_ = { class: "sbp-side-head" }, p_ = { id: "sbp-list-count" }, m_ = ["disabled"], h_ = {
	class: "sbp-track-list",
	id: "sbp-list",
	"aria-label": "Список треков"
}, g_ = ["data-sbp-item"], __ = ["data-index", "aria-label"], v_ = { class: "sbp-track-index" }, y_ = { class: "sbp-track-meta" }, b_ = { class: "sbp-track-duration" }, x_ = ["data-index", "aria-label"], S_ = {
	key: 0,
	class: "sbp-empty"
}, C_ = {
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
		let t = e, n = /* @__PURE__ */ P(t.initialModel), r = Ed();
		qn(n, (e) => r.publishPlayerLabSummary(e), { immediate: !0 });
		function i() {
			let e = t.api.snapshot();
			e && (n.value = e);
		}
		R(() => {
			window.addEventListener("sunoboom:player-lab-update", i), i();
		}), xr(() => window.removeEventListener("sunoboom:player-lab-update", i));
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
		return (e, t) => (V(), H("div", zg, [U("section", Bg, [
			U("div", { class: D(["sbp-art", { "is-playing": n.value.playing }]) }, [
				t[0] ||= U("div", { class: "sbp-art-orb" }, "♫", -1),
				U("div", Vg, [(V(!0), H(B, null, z(I(a), (e) => (V(), H("i", {
					key: e.index,
					style: E({
						"--sbp-i": e.index,
						"--sbp-h": e.height
					})
				}, null, 4))), 128))]),
				t[1] ||= U("span", null, "SONIC LAB / PRIVATE PREVIEW", -1)
			], 2),
			U("div", Hg, [U("div", null, [
				U("div", Ug, O(n.value.nowTag), 1),
				U("h2", Wg, O(n.value.title), 1),
				U("p", Gg, O(n.value.artist), 1)
			]), U("span", Kg, O(n.value.counter), 1)]),
			I(r).playerAbSummary.ready && I(r).playerAbSummary.readyCount ? (V(), H("p", qg, "A/B: загружено " + O(I(r).playerAbSummary.readyCount) + " из 2 · активна " + O(I(r).playerAbSummary.active), 1)) : K("", !0),
			U("div", Jg, [
				t[2] ||= U("label", {
					for: "sbp-seek",
					class: "sbp-sr"
				}, "Позиция воспроизведения", -1),
				U("input", {
					id: "sbp-seek",
					type: "range",
					min: "0",
					max: "1000",
					step: "1",
					value: n.value.seekValue,
					disabled: n.value.seekDisabled,
					"aria-label": "Перемотка трека",
					style: E({ "--fill": n.value.seekValue / 10 + "%" })
				}, null, 12, Yg),
				U("div", Xg, [U("span", Zg, O(n.value.currentTime), 1), U("span", Qg, O(n.value.totalTime), 1)])
			]),
			U("div", $g, [
				U("button", {
					type: "button",
					class: D(["sbp-secondary", { "is-on": n.value.shuffle }]),
					id: "sbp-shuffle",
					"data-sbp-action": "shuffle",
					"aria-label": "Случайный порядок",
					"aria-pressed": String(n.value.shuffle),
					title: "Случайный порядок"
				}, "⤨", 10, e_),
				t[3] ||= U("button", {
					type: "button",
					class: "sbp-secondary sbp-skip",
					"data-sbp-action": "prev",
					"aria-label": "Предыдущий трек"
				}, [U("svg", {
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					focusable: "false"
				}, [U("path", {
					d: "M6 5v14",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2.5",
					"stroke-linecap": "round"
				}), U("path", {
					d: "M18 5 8 12l10 7V5Z",
					fill: "currentColor"
				})])], -1),
				U("button", {
					type: "button",
					class: "sbp-play",
					id: "sbp-play",
					"data-sbp-action": "play",
					"aria-label": n.value.playing ? "Пауза" : "Воспроизвести",
					disabled: !n.value.count
				}, O(n.value.playing ? "❚❚" : "▶"), 9, t_),
				t[4] ||= U("button", {
					type: "button",
					class: "sbp-secondary sbp-skip",
					"data-sbp-action": "next",
					"aria-label": "Следующий трек"
				}, [U("svg", {
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					focusable: "false"
				}, [U("path", {
					d: "M18 5v14",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2.5",
					"stroke-linecap": "round"
				}), U("path", {
					d: "m6 5 10 7-10 7V5Z",
					fill: "currentColor"
				})])], -1),
				U("button", {
					type: "button",
					class: D(["sbp-secondary", { "is-on": n.value.repeat !== "off" }]),
					"data-sbp-action": "repeat",
					id: "sbp-repeat",
					title: n.value.repeatLabel,
					"aria-label": n.value.repeatLabel
				}, O(n.value.repeat === "one" ? "↻₁" : "↻"), 11, n_)
			]),
			U("div", r_, [U("div", i_, [n.value.ios ? (V(), H("span", a_, "📱 Громкость регулируется кнопками телефона")) : (V(), H(B, { key: 1 }, [
				t[5] ||= U("label", { for: "sbp-volume" }, "Громкость", -1),
				t[6] ||= U("span", {
					id: "sbp-volume-icon",
					"aria-hidden": "true"
				}, "◖))", -1),
				U("input", {
					id: "sbp-volume",
					type: "range",
					min: "0",
					max: "100",
					value: n.value.volume,
					"aria-label": "Громкость"
				}, null, 8, o_),
				U("output", s_, O(n.value.volume) + "%", 1)
			], 64))]), U("label", c_, [t[7] ||= G(" Скорость ", -1), U("select", {
				id: "sbp-rate",
				"aria-label": "Скорость воспроизведения",
				value: n.value.rate
			}, [(V(), H(B, null, z(o, (e) => U("option", {
				key: e,
				value: e
			}, O(e) + "×", 9, u_)), 64))], 8, l_)])]),
			L(U("div", {
				class: "sbp-message",
				id: "sbp-message",
				role: "status",
				"aria-live": "polite"
			}, O(n.value.message), 513), [[Qa, n.value.message]])
		]), U("aside", d_, [
			U("div", f_, [U("div", null, [t[8] ||= U("h2", null, "Очередь воспроизведения", -1), U("small", p_, O(n.value.count) + " " + O(n.value.count === 1 ? "трек" : n.value.count > 1 && n.value.count < 5 ? "трека" : "треков"), 1)]), U("button", {
				type: "button",
				class: "sbp-clear",
				"data-sbp-action": "clear",
				id: "sbp-clear",
				disabled: !n.value.count
			}, "Очистить", 8, m_)]),
			t[9] ||= ua("<div class=\"sbp-dropzone\" id=\"sbp-dropzone\"><div class=\"sbp-drop-icon\">↥</div><strong>Загрузи свои треки</strong><p>MP3, WAV, M4A, AAC, OGG, FLAC — если формат поддерживается браузером. Файлы никуда не отправляются.</p><label class=\"sbp-upload-label\" for=\"sbp-file\">Выбрать аудиофайлы</label><input id=\"sbp-file\" type=\"file\" accept=\"audio/*,.mp3,.m4a,.aac,.wav,.ogg,.flac,.opus\" multiple></div><div class=\"sbp-demo-box\"><div><strong>Нет аудиофайлов?</strong><p>Создать 3 коротких оригинальных демо-сигнала для проверки управления.</p></div><button type=\"button\" data-sbp-action=\"demo\" id=\"sbp-demo\">+ Демо-треки</button></div>", 2),
			U("div", h_, [(V(!0), H(B, null, z(n.value.tracks, (e) => (V(), H("article", {
				key: e.id,
				class: D(["sbp-track", { "is-current": e.isCurrent }]),
				"data-sbp-item": e.id
			}, [
				U("button", {
					type: "button",
					class: "sbp-track-play",
					"data-sbp-action": "select",
					"data-index": e.index,
					"aria-label": "Включить " + e.name
				}, [U("span", v_, O(e.playLabel), 1), U("span", y_, [U("strong", null, O(e.name), 1), U("small", null, O(e.artist) + " · " + O(e.sourceLabel), 1)])], 8, __),
				U("span", b_, O(e.durationLabel), 1),
				U("button", {
					type: "button",
					class: "sbp-track-remove",
					"data-sbp-action": "remove",
					"data-index": e.index,
					title: "Удалить из списка",
					"aria-label": "Удалить " + e.name
				}, "×", 8, x_)
			], 10, g_))), 128)), n.value.tracks.length ? K("", !0) : (V(), H("div", S_, " Плейлист пока пуст. Добавь MP3 или нажми «Демо-треки», чтобы начать тест. "))])
		])]));
	}
};
// src/vue/player/legacyPlayerLabBridge.js
function w_({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PLAYER_LAB, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-player-lab");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, C_, {
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
var T_ = { class: "sbab-heading" }, E_ = {
	key: 0,
	class: "sbab-kicker",
	"data-sb-vue-player-recap": ""
}, D_ = { class: "sbab-files" }, O_ = ["data-sbab-card"], k_ = { class: "sbab-file-top" }, A_ = { class: "sbab-side-label" }, j_ = ["id"], M_ = ["id"], N_ = ["id"], P_ = { class: "sbab-file-bottom" }, F_ = ["for"], I_ = ["id", "data-sbab-file"], L_ = ["data-side", "disabled"], R_ = ["id"], z_ = { class: "sbab-console" }, B_ = { class: "sbab-console-top" }, V_ = { id: "sbab-active-label" }, H_ = { class: "sbab-wave" }, U_ = {
	class: "sbab-wave-bars",
	"aria-hidden": "true"
}, W_ = {
	class: "sbab-toggle",
	role: "group",
	"aria-label": "Выбор версии для прослушивания"
}, G_ = ["data-side", "aria-pressed"], K_ = { class: "sbab-scrub" }, q_ = ["value", "disabled"], J_ = { class: "sbab-times" }, Y_ = { id: "sbab-current" }, X_ = { id: "sbab-duration" }, Z_ = { class: "sbab-transport" }, Q_ = ["disabled", "aria-label"], $_ = { class: "sbab-clip" }, ev = { class: "sbab-clip-actions" }, tv = {
	type: "button",
	"data-sbab-action": "mark-start"
}, nv = { id: "sbab-start" }, rv = {
	type: "button",
	"data-sbab-action": "mark-end"
}, iv = { id: "sbab-end" }, av = ["aria-pressed", "aria-label"], ov = { class: "sbab-volume" }, sv = { key: 0 }, cv = ["for"], lv = [
	"id",
	"data-sbab-vol",
	"value"
], uv = ["hidden"], dv = { class: "sbab-review" }, fv = { class: "sbab-rating-grid" }, pv = { class: "sbab-rating-label" }, mv = [
	"data-sbab-score",
	"aria-label",
	"value"
], hv = ["value"], gv = { class: "sbab-note-grid" }, _v = ["for"], vv = [
	"id",
	"data-sbab-note",
	"placeholder",
	"value"
], yv = {
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
		let t = e, n = /* @__PURE__ */ P(t.initialModel), r = Ed();
		qn(n, (e) => r.publishPlayerAbSummary(e), { immediate: !0 });
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
		return R(() => {
			window.addEventListener("sunoboom:player-ab-update", s), s();
		}), xr(() => window.removeEventListener("sunoboom:player-ab-update", s)), (e, t) => (V(), H("section", {
			id: "sbab-compare",
			class: D(["sbab-shell", {
				"sbab-is-playing": n.value.playing,
				"sbab-has-files": n.value.hasBoth
			}]),
			"aria-label": "Сравнение аудиоверсий A и B",
			"data-sb-vue-player-ab": ""
		}, [
			U("header", T_, [U("div", null, [
				t[0] ||= U("span", { class: "sbab-kicker" }, "SUNOBOOM · AUDIO TEST LAB", -1),
				t[1] ||= U("h2", null, "A/B-сравнение аудиоверсий", -1),
				t[2] ||= U("p", null, "Загрузи два варианта песни и переключайся между ними в одной временной точке. Сравнивай вокал, аранжировку и финальное звучание.", -1),
				I(r).playerLabSummary.ready ? (V(), H("p", E_, "Очередь плеера LAB: " + O(I(r).playerLabSummary.queueCount) + " треков · " + O(I(r).playerLabSummary.playing ? "воспроизведение" : "пауза"), 1)) : K("", !0)
			]), t[3] ||= U("span", { class: "sbab-lab-badge" }, "A ↔ B", -1)]),
			U("div", D_, [(V(), H(B, null, z(i, (e) => U("div", {
				key: e,
				class: D(["sbab-file-card", [e === "A" ? "sbab-card-a" : "sbab-card-b", { "sbab-active-card": n.value.active === e }]]),
				"data-sbab-card": e
			}, [
				U("div", k_, [U("span", A_, "ВЕРСИЯ " + O(e), 1), U("span", {
					class: "sbab-loaded",
					id: "sbab-ready-" + e
				}, O(n.value.files[e].ready ? "Файл добавлен" : "Ожидает файл"), 9, j_)]),
				U("strong", {
					class: "sbab-filename",
					id: "sbab-name-" + e
				}, O(n.value.files[e].name), 9, M_),
				U("p", {
					class: "sbab-filesub",
					id: "sbab-info-" + e
				}, O(n.value.files[e].info), 9, N_),
				U("div", P_, [
					U("label", {
						class: "sbab-upload",
						for: "sbab-file-" + e
					}, [t[4] ||= U("svg", {
						viewBox: "0 0 24 24",
						width: "19",
						height: "19",
						"aria-hidden": "true"
					}, [U("path", {
						d: "M12 5v14M5 12h14",
						stroke: "currentColor",
						"stroke-width": "2",
						"stroke-linecap": "round"
					})], -1), G(" " + O(n.value.files[e].ready ? "Заменить файл" : "Выбрать файл"), 1)], 8, F_),
					U("input", {
						type: "file",
						id: "sbab-file-" + e,
						accept: "audio/*,.mp3,.wav,.m4a,.aac,.ogg,.flac,.opus",
						"data-sbab-file": e
					}, null, 8, I_),
					U("button", {
						type: "button",
						"data-sbab-action": "remove",
						"data-side": e,
						class: "sbab-remove",
						disabled: !n.value.files[e].ready
					}, "Удалить", 8, L_),
					U("span", {
						class: "sbab-length",
						id: "sbab-length-" + e
					}, O(n.value.files[e].duration), 9, R_)
				])
			], 10, O_)), 64))]),
			t[20] ||= U("div", { class: "sbab-demo-row" }, [U("p", null, "Для первого теста можно создать два разных оригинальных коротких аудиофрагмента."), U("button", {
				type: "button",
				"data-sbab-action": "demo"
			}, "Создать демо A и B")], -1),
			U("div", z_, [
				U("div", B_, [t[5] ||= U("span", { class: "sbab-kicker" }, "АКТИВНОЕ ПРОСЛУШИВАНИЕ", -1), U("span", V_, "Версия " + O(n.value.active) + O(n.value.playing ? " · Воспроизведение" : ""), 1)]),
				U("div", H_, [U("div", U_, [(V(!0), H(B, null, z(I(o), (e, t) => (V(), H("i", {
					key: t,
					style: E({ "--bar-height": e })
				}, null, 4))), 128))]), t[6] ||= U("div", { class: "sbab-wave-center" }, "A / B", -1)]),
				U("div", W_, [(V(), H(B, null, z(i, (e) => U("button", {
					key: e,
					type: "button",
					class: D(e === "A" ? "sbab-btn-a" : "sbab-btn-b"),
					"data-sbab-action": "select",
					"data-side": e,
					"aria-pressed": String(n.value.active === e)
				}, [G(O(e) + " ", 1), U("small", null, "Версия " + O(e), 1)], 10, G_)), 64))]),
				U("div", K_, [
					t[7] ||= U("label", {
						for: "sbab-seek",
						class: "sbab-sr"
					}, "Перемотка A/B", -1),
					U("input", {
						type: "range",
						id: "sbab-seek",
						min: "0",
						max: "1000",
						step: "1",
						value: n.value.seek,
						disabled: !n.value.canSeek
					}, null, 8, q_),
					U("div", J_, [U("span", Y_, O(n.value.currentTime), 1), U("span", X_, O(n.value.duration), 1)])
				]),
				U("div", Z_, [
					t[8] ||= U("button", {
						type: "button",
						"data-sbab-action": "back",
						"aria-label": "На 5 секунд назад"
					}, [U("svg", {
						viewBox: "0 0 24 24",
						width: "21",
						height: "21",
						"aria-hidden": "true"
					}, [U("path", {
						d: "M7 5v14M18 5 8 12l10 7V5Z",
						stroke: "currentColor",
						"stroke-width": "2",
						fill: "currentColor",
						"stroke-linejoin": "round",
						"stroke-linecap": "round"
					})])], -1),
					U("button", {
						type: "button",
						class: "sbab-big-play",
						id: "sbab-play",
						"data-sbab-action": "toggle",
						disabled: !n.value.canPlay,
						"aria-label": n.value.playing ? "Пауза" : "Воспроизвести"
					}, O(n.value.playing ? "❚❚" : "▶"), 9, Q_),
					t[9] ||= U("button", {
						type: "button",
						"data-sbab-action": "forward",
						"aria-label": "На 5 секунд вперёд"
					}, [U("svg", {
						viewBox: "0 0 24 24",
						width: "21",
						height: "21",
						"aria-hidden": "true"
					}, [U("path", {
						d: "M17 5v14M6 5l10 7-10 7V5Z",
						stroke: "currentColor",
						"stroke-width": "2",
						fill: "currentColor",
						"stroke-linejoin": "round",
						"stroke-linecap": "round"
					})])], -1)
				]),
				U("div", $_, [t[13] ||= U("div", { class: "sbab-clip-title" }, [U("strong", null, "Повтор выбранного фрагмента"), U("small", null, "Например, только припев или куплет")], -1), U("div", ev, [
					U("button", tv, [t[10] ||= G("Начало: ", -1), U("span", nv, O(n.value.start), 1)]),
					U("button", rv, [t[11] ||= G("Конец: ", -1), U("span", iv, O(n.value.end), 1)]),
					U("button", {
						type: "button",
						"data-sbab-action": "loop",
						id: "sbab-loop",
						"aria-pressed": String(n.value.loop),
						"aria-label": n.value.loop ? "Повтор фрагмента включён" : "Повтор фрагмента выключен"
					}, O(n.value.loop ? "↻ Повтор включён" : "↻ Повтор выкл."), 9, av),
					t[12] ||= U("button", {
						type: "button",
						"data-sbab-action": "clear-segment",
						"aria-label": "Очистить границы фрагмента"
					}, "✕", -1)
				])]),
				U("div", ov, [n.value.ios ? (V(), H("span", sv, "📱 Громкость регулируется кнопками телефона")) : (V(), H(B, { key: 1 }, z(i, (e) => U("label", {
					key: e,
					for: "sbab-vol-" + e
				}, [G(" Уровень " + O(e) + " ", 1), U("input", {
					id: "sbab-vol-" + e,
					"data-sbab-vol": e,
					type: "range",
					min: "0",
					max: "100",
					value: n.value.volume[e]
				}, null, 8, lv)], 8, cv)), 64))]),
				U("p", {
					id: "sbab-status",
					class: "sbab-status",
					role: "status",
					"aria-live": "polite",
					hidden: !n.value.status
				}, O(n.value.status), 9, uv)
			]),
			U("section", dv, [
				t[18] ||= U("header", null, [U("h3", null, "Оценка на слух"), U("p", null, "Субъективное сравнение. Оценки выставляешь ты — автоматического анализа качества здесь нет.")], -1),
				U("div", fv, [
					t[15] ||= U("div", { class: "sbab-rating-head" }, "Параметр", -1),
					t[16] ||= U("div", { class: "sbab-rating-head" }, "A", -1),
					t[17] ||= U("div", { class: "sbab-rating-head" }, "B", -1),
					(V(), H(B, null, z(a, (e) => (V(), H(B, { key: e.key }, [U("div", pv, O(e.label), 1), (V(), H(B, null, z(i, (r) => U("div", { key: r }, [U("select", {
						"data-sbab-score": r + ":" + e.key,
						"aria-label": e.label + " — версия " + r,
						value: n.value.scores[r][e.key]
					}, [t[14] ||= U("option", { value: 0 }, "—", -1), (V(), H(B, null, z(5, (e) => U("option", {
						key: e,
						value: e
					}, O(e) + "/5", 9, hv)), 64))], 8, mv)])), 64))], 64))), 64))
				]),
				U("div", gv, [(V(), H(B, null, z(i, (e) => U("label", {
					key: e,
					for: "sbab-note-" + e
				}, [G(" Заметки по " + O(e) + " ", 1), U("textarea", {
					id: "sbab-note-" + e,
					"data-sbab-note": e,
					rows: "3",
					maxlength: "1000",
					placeholder: e === "A" ? "Сильные стороны, что улучшить…" : "Вокал, баланс, пространство…",
					value: n.value.notes[e]
				}, null, 8, vv)], 8, _v)), 64))]),
				t[19] ||= U("div", { class: "sbab-review-actions" }, [U("button", {
					type: "button",
					"data-sbab-action": "copy",
					class: "sbab-review-copy"
				}, "Скопировать результаты"), U("button", {
					type: "button",
					"data-sbab-action": "reset-review",
					class: "sbab-review-clear"
				}, "Очистить оценки")], -1)
			]),
			t[21] ||= U("p", { class: "sbab-footer-note" }, "Файлы не передаются на сервер. При переключении используется одинаковая временная позиция в секундах; точное совпадение музыкальных моментов зависит от самих версий. Для честного сравнения выровняй их громкость. На телефоне переключение может иметь небольшую паузу из-за браузера.", -1)
		], 2));
	}
};
// src/vue/player/legacyPlayerABBridge.js
function bv({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PLAYER_AB, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-player-ab");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, yv, {
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
var xv = ["data-id", "aria-pressed"], Sv = { class: "sbpc-song-main" }, Cv = { class: "sbpc-song-meta" }, wv = { class: "sbpc-tiny-progress" }, Tv = {
	key: 0,
	class: "sbpc-empty"
}, Ev = {
	__name: "ProducerSongList",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ P(t.model.query || ""), r = (e) => String(e ?? "").normalize("NFKC").toLocaleLowerCase("ru"), i = q(() => {
			let e = r(n.value.trim());
			return t.model.records.filter((t) => r(t.searchText).includes(e));
		});
		function a(e) {
			n.value = String(e.detail?.query ?? "");
		}
		return R(() => window.addEventListener("sunoboom:producer-search", a)), Sr(() => window.removeEventListener("sunoboom:producer-search", a)), (t, n) => (V(), H(B, null, [(V(!0), H(B, null, z(i.value, (t) => (V(), H("button", {
			key: t.id,
			type: "button",
			class: D(["sbpc-song", { active: t.id === e.model.selectedId }]),
			"data-pc-action": "open",
			"data-id": t.id,
			"aria-pressed": t.id === e.model.selectedId
		}, [
			U("span", Sv, [U("strong", null, O(t.title), 1), U("span", null, O(t.artist), 1)]),
			U("span", Cv, [U("b", null, O(t.done) + "/" + O(t.total), 1), U("small", null, O(t.nextLabel ? "Следующий этап: " + t.nextLabel : "Все этапы отмечены готовыми"), 1)]),
			U("span", wv, [U("i", { style: E({ width: t.percent + "%" }) }, null, 4)])
		], 10, xv))), 128)), i.value.length ? K("", !0) : (V(), H("p", Tv, O(e.model.hasRecords ? "Поиск не дал результатов. Измени запрос или создай новую рабочую карточку." : "Пока нет рабочих карточек. Начни с первой песни выше."), 1))], 64));
	}
};
// src/vue/producer/legacyProducerSongListBridge.js
function Dv({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PRODUCER_LIST, n = document.getElementById("app");
	if (!t || typeof t.snapshot != "function" || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sbpc-list[data-sb-vue-producer-list]");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, Ev, { model: o });
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
var Ov = {
	class: "sbpc-workspace",
	"data-sb-vue-producer-detail": ""
}, kv = { class: "sbpc-panel sbpc-song-head" }, Av = { class: "sbpc-head-top" }, jv = { class: "sbpc-completion" }, Mv = { class: "sbpc-next" }, Nv = { class: "sbpc-meta-editor" }, Pv = { class: "sbpc-wide" }, Fv = { class: "sbpc-panel" }, Iv = { class: "sbpc-panel-head" }, Lv = ["aria-valuenow"], Rv = { class: "sbpc-stages" }, zv = ["data-status"], Bv = { class: "sbpc-stage-index" }, Vv = { class: "sbpc-stage-body" }, Hv = { class: "sbpc-stage-title" }, Uv = { class: "sbpc-stage-state" }, Wv = {
	key: 0,
	class: "sbpc-resource-present"
}, Gv = {
	key: 1,
	class: "sbpc-resource-empty"
}, Kv = { class: "sbpc-stage-actions" }, qv = [
	"onUpdate:modelValue",
	"data-pc-stage",
	"aria-label"
], Jv = ["value"], Yv = ["data-step"], Xv = { class: "sbpc-panel" }, Zv = { class: "sbpc-links" }, Qv = ["for"], $v = [
	"id",
	"onUpdate:modelValue",
	"data-pc-link"
], ey = ["value"], ty = ["data-type", "data-id"], ny = { class: "sbpc-panel sbpc-arrangement" }, ry = { class: "sbpc-panel-head" }, iy = { class: "sbpc-arrangement-actions" }, ay = {
	key: 0,
	type: "button",
	"data-pc-action": "restore-arrangement"
}, oy = {
	key: 0,
	class: "sbpc-subnote"
}, sy = { class: "sbpc-panel" }, cy = { class: "sbpc-panel-head" }, ly = {
	key: 0,
	class: "sbpc-log"
}, uy = {
	key: 1,
	class: "sbpc-empty"
}, dy = {
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
		return (t, a) => (V(), H("div", Ov, [
			U("section", kv, [
				U("div", Av, [a[3] ||= U("span", { class: "sbpc-kicker" }, "КАРТОЧКА ПРОДЮСИРОВАНИЯ", -1), U("span", jv, O(e.model.percent) + "% готовности", 1)]),
				U("h2", null, O(e.model.title || "Без названия"), 1),
				U("p", null, O(e.model.artist || "Исполнитель пока не указан") + O(e.model.projectTitle ? " · " + e.model.projectTitle : ""), 1),
				U("p", Mv, O(e.model.nextLabel ? "Следующий этап: " + e.model.nextLabel : "Все этапы отмечены готовыми"), 1),
				U("div", Nv, [
					U("label", null, [a[4] ||= G("Название песни ", -1), L(U("input", {
						id: "sbpc-title",
						"onUpdate:modelValue": a[0] ||= (e) => n.title = e,
						type: "text",
						maxlength: "120"
					}, null, 512), [[J, n.title]])]),
					U("label", null, [a[5] ||= G("Артист / проект ", -1), L(U("input", {
						id: "sbpc-artist",
						"onUpdate:modelValue": a[1] ||= (e) => n.artist = e,
						type: "text",
						maxlength: "120"
					}, null, 512), [[J, n.artist]])]),
					U("label", Pv, [a[6] ||= G("Продюсерские заметки ", -1), L(U("textarea", {
						id: "sbpc-notes",
						"onUpdate:modelValue": a[2] ||= (e) => n.notes = e,
						rows: "3",
						maxlength: "3500",
						placeholder: "Что важно сохранить об этой песне?"
					}, null, 512), [[J, n.notes]])])
				]),
				a[7] ||= U("div", { class: "sbpc-head-actions" }, [U("button", {
					type: "button",
					class: "sbpc-main-btn",
					"data-pc-action": "save-details"
				}, "Сохранить карточку"), U("button", {
					type: "button",
					class: "sbpc-delete-btn",
					"data-pc-action": "delete"
				}, "Удалить рабочую карточку")], -1),
				a[8] ||= U("p", { class: "sbpc-help" }, "Удаление рабочей карточки не удаляет идеи, паспорта, промпты и аудио.", -1)
			]),
			U("section", Fv, [
				U("header", Iv, [a[9] ||= U("h3", null, "Маршрут песни", -1), U("span", null, O(e.model.done) + " из " + O(e.model.total) + " этапов", 1)]),
				U("div", {
					class: "sbpc-progress",
					role: "progressbar",
					"aria-label": "Готовность работы",
					"aria-valuemin": "0",
					"aria-valuemax": "100",
					"aria-valuenow": e.model.percent
				}, [U("span", { style: E({ width: e.model.percent + "%" }) }, null, 4)], 8, Lv),
				U("div", Rv, [(V(!0), H(B, null, z(e.model.stages, (t) => (V(), H("article", {
					key: t.key,
					class: "sbpc-stage",
					"data-status": i[t.key]
				}, [U("div", Bv, O(i[t.key] === "done" ? "✓" : t.index), 1), U("div", Vv, [
					U("div", Hv, [U("strong", null, O(t.title), 1), U("small", null, O(t.desc), 1)]),
					U("div", Uv, [t.hasMaterial ? (V(), H("span", Wv, "● " + O(t.materialLabel), 1)) : (V(), H("span", Gv, "○ Подтверждённых материалов нет"))]),
					U("div", Kv, [U("label", null, [a[10] ||= G("Готовность ", -1), L(U("select", {
						"onUpdate:modelValue": (e) => i[t.key] = e,
						"data-pc-stage": t.key,
						"aria-label": "Этап " + t.title
					}, [(V(!0), H(B, null, z(e.model.statuses, (e) => (V(), H("option", {
						key: e.id,
						value: e.id
					}, O(e.label), 9, Jv))), 128))], 8, qv), [[Io, i[t.key]]])]), U("button", {
						type: "button",
						"data-pc-action": "open-stage",
						"data-step": t.key
					}, "Открыть инструмент ↗", 8, Yv)])
				])], 8, zv))), 128))]),
				a[11] ||= U("p", { class: "sbpc-help" }, "Готовность отмечается вручную. Наличие материала показано отдельно и не считается автоматически завершённым этапом.", -1)
			]),
			U("section", Xv, [
				a[12] ||= U("header", { class: "sbpc-panel-head" }, [U("h3", null, "Связанные материалы"), U("span", null, "Без копирования данных")], -1),
				a[13] ||= U("p", { class: "sbpc-help" }, "Свяжи существующие идеи, промпты, паспорт трека и карточку с аудио. Исходные записи останутся в своих разделах.", -1),
				U("div", Zv, [(V(!0), H(B, null, z(e.model.links, (e) => (V(), H("div", {
					key: e.field,
					class: "sbpc-link-field"
				}, [
					U("label", { for: "sbpc-" + e.field }, O(e.label), 9, Qv),
					L(U("select", {
						id: "sbpc-" + e.field,
						"onUpdate:modelValue": (t) => r[e.field] = t,
						"data-pc-link": e.field
					}, [(V(!0), H(B, null, z(e.options, (e) => (V(), H("option", {
						key: e.value,
						value: e.value
					}, O(e.label), 9, ey))), 128))], 8, $v), [[Io, r[e.field]]]),
					e.value ? (V(), H("button", {
						key: 0,
						type: "button",
						"data-pc-action": "open-link",
						"data-type": e.type,
						"data-id": e.value
					}, O(e.available ? "Перейти к материалу" : "Материал недоступен") + " ↗ ", 9, ty)) : K("", !0)
				]))), 128))]),
				a[14] ||= U("button", {
					type: "button",
					class: "sbpc-main-btn",
					"data-pc-action": "save-links"
				}, "Сохранить связи", -1)
			]),
			U("section", ny, [
				U("header", ry, [a[15] ||= U("h3", null, "Аранжировка для этой песни", -1), U("span", null, O(e.model.arrangement.count ? e.model.arrangement.count + " блоков сохранено" : "Снимок ещё не сохранён"), 1)]),
				a[18] ||= U("p", { class: "sbpc-help" }, "Конструктор Suno Studio использует текущий рабочий черновик. Сохрани его сюда отдельно для песни; восстановление выполняется только по твоей команде.", -1),
				U("div", iy, [
					a[16] ||= U("button", {
						type: "button",
						"data-pc-action": "capture-arrangement"
					}, "Сохранить текущую аранжировку", -1),
					e.model.arrangement.count ? (V(), H("button", ay, "Восстановить в Studio")) : K("", !0),
					a[17] ||= U("button", {
						type: "button",
						"data-pc-action": "open-stage",
						"data-step": "arrangement"
					}, "Открыть аранжировщик ↗", -1)
				]),
				e.model.arrangement.count ? (V(), H("p", oy, " Сохранено: " + O(e.model.arrangement.savedAt) + " · " + O(e.model.arrangement.count) + " блоков · " + O(e.model.arrangement.duration || "длительность не рассчитана"), 1)) : K("", !0)
			]),
			U("section", sy, [
				U("header", cy, [a[19] ||= U("h3", null, "История работы", -1), U("span", null, O(e.model.history.length) + " событий", 1)]),
				a[20] ||= U("div", { class: "sbpc-log-input" }, [U("input", {
					id: "sbpc-history-note",
					type: "text",
					maxlength: "350",
					placeholder: "Добавить запись: что изменилось или что сделать дальше"
				}), U("button", {
					type: "button",
					"data-pc-action": "add-note"
				}, "Добавить")], -1),
				e.model.history.length ? (V(), H("ol", ly, [(V(!0), H(B, null, z(e.model.history, (e, t) => (V(), H("li", { key: t }, [U("time", null, O(e.date), 1), U("span", null, O(e.text), 1)]))), 128))])) : (V(), H("p", uy, "История пока пуста."))
			])
		]));
	}
};
// src/vue/producer/legacyProducerSongDetailBridge.js
function fy({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PRODUCER_DETAIL, n = document.getElementById("app");
	if (!t || typeof t.snapshot != "function" || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-producer-detail[data-sb-vue-producer-host]");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, dy, { model: o });
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
var py = {
	class: "sb-track-filters",
	role: "group",
	"aria-label": "Фильтр паспортов по этапу"
}, my = ["data-filter", "aria-pressed"], hy = {
	key: 0,
	class: "sb-track-list"
}, gy = ["data-id"], _y = {
	key: 1,
	class: "sb-track-empty"
}, vy = {
	__name: "TrackPassportList",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (V(), H(B, null, [U("div", py, [(V(!0), H(B, null, z(e.model.filters, (t) => (V(), H("button", {
			key: t.key,
			type: "button",
			"data-action": "tp-filter",
			"data-filter": t.key,
			class: D({ active: e.model.active === t.key }),
			"aria-pressed": e.model.active === t.key
		}, O(t.label), 11, my))), 128))]), e.model.records.length ? (V(), H("div", hy, [(V(!0), H(B, null, z(e.model.records, (e) => (V(), H("button", {
			key: e.id,
			type: "button",
			class: "sb-track-tile",
			"data-action": "tp-open",
			"data-id": e.id
		}, [
			n[0] ||= U("span", { class: "sb-track-note" }, "♫", -1),
			U("span", null, [
				U("strong", null, O(e.title), 1),
				U("small", null, O(e.artist), 1),
				U("small", null, O(e.statusLabel) + O(e.releaseLabel ? " · " + e.releaseLabel : ""), 1)
			]),
			n[1] ||= U("i", { "aria-hidden": "true" }, "→", -1)
		], 8, gy))), 128))])) : (V(), H("div", _y, O(e.model.hasRecords ? "В этой категории пока нет треков." : "Паспортов пока нет. Создай первый, чтобы объединить материалы песни."), 1))], 64));
	}
};
// src/vue/account/legacyTrackPassportListBridge.js
function yy({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_TRACK_LIST, n = document.getElementById("app");
	if (!t || typeof t.snapshot != "function" || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-track-list[data-sb-vue-track-list]");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, vy, { model: o });
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
var by = {
	class: "sb-track-detail",
	"data-sb-vue-track-detail-view": ""
}, xy = { class: "sb-track-buttons" }, Sy = ["data-id"], Cy = ["data-id"], wy = ["data-id"], Ty = { class: "sb-track-hero" }, Ey = { class: "sb-track-cover" }, Dy = ["src"], Oy = { class: "sb-track-phase" }, ky = { class: "sb-track-facts" }, Ay = { class: "sb-track-buttons" }, jy = ["href"], My = ["href"], Ny = { class: "sb-track-linkgrid" }, Py = ["data-action", "data-id"], Fy = {
	key: 1,
	class: "sb-track-linked sb-track-linked-empty"
}, Iy = ["data-action", "data-id"], Ly = {
	key: 3,
	class: "sb-track-linked sb-track-linked-empty"
}, Ry = ["data-action", "data-id"], zy = {
	key: 5,
	class: "sb-track-linked sb-track-linked-empty"
}, By = { class: "sb-track-section" }, Vy = { key: 0 }, Hy = ["href"], Uy = [
	"data-id",
	"data-version",
	"aria-label"
], Wy = {
	key: 1,
	class: "sb-track-disclaimer"
}, Gy = { class: "sb-track-versionform" }, Ky = ["data-id"], qy = {
	__name: "TrackPassportDetail",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (V(), H("div", by, [
			U("div", xy, [
				n[0] ||= U("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "tp-list"
				}, "← К списку", -1),
				U("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "tp-edit",
					"data-id": e.model.id
				}, "Изменить", 8, Sy),
				U("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "tp-event",
					"data-id": e.model.id
				}, "В календарь релизов", 8, Cy),
				U("button", {
					type: "button",
					class: "btn danger small",
					"data-action": "tp-delete",
					"data-id": e.model.id
				}, "Удалить", 8, wy)
			]),
			U("div", Ty, [U("div", Ey, [e.model.cover ? (V(), H("img", {
				key: 0,
				src: e.model.cover,
				alt: "Обложка",
				loading: "lazy"
			}, null, 8, Dy)) : (V(), H(B, { key: 1 }, [G("♫")], 64))]), U("div", null, [
				U("span", Oy, O(e.model.phase), 1),
				U("h2", null, O(e.model.title), 1),
				U("p", null, O(e.model.artist), 1)
			])]),
			U("div", ky, [(V(!0), H(B, null, z(e.model.facts, (e) => (V(), H("div", {
				key: e.label,
				class: "sb-track-fact"
			}, [U("span", null, O(e.label), 1), U("strong", null, O(e.value || "Не указано"), 1)]))), 128))]),
			U("div", Ay, [e.model.audio ? (V(), H("a", {
				key: 0,
				class: "btn ghost",
				href: e.model.audio,
				rel: "noopener noreferrer",
				target: "_blank"
			}, "Прослушать ↗", 8, jy)) : K("", !0), e.model.cover ? (V(), H("a", {
				key: 1,
				class: "btn ghost",
				href: e.model.cover,
				rel: "noopener noreferrer",
				target: "_blank"
			}, "Обложка ↗", 8, My)) : K("", !0)]),
			n[8] ||= U("h3", { class: "sb-track-section" }, "Связанные материалы", -1),
			U("div", Ny, [
				e.model.links[0].exists ? (V(), H("button", {
					key: 0,
					type: "button",
					class: "sb-track-linked",
					"data-action": e.model.links[0].action,
					"data-id": e.model.links[0].id
				}, [
					U("small", null, O(e.model.links[0].label), 1),
					U("strong", null, O(e.model.links[0].title), 1),
					n[1] ||= U("span", null, "Открыть →", -1)
				], 8, Py)) : (V(), H("div", Fy, [U("small", null, O(e.model.links[0].label), 1), n[2] ||= U("strong", null, "Не привязан", -1)])),
				e.model.links[1].exists ? (V(), H("button", {
					key: 2,
					type: "button",
					class: "sb-track-linked",
					"data-action": e.model.links[1].action,
					"data-id": e.model.links[1].id
				}, [
					U("small", null, O(e.model.links[1].label), 1),
					U("strong", null, O(e.model.links[1].title), 1),
					n[3] ||= U("span", null, "Открыть →", -1)
				], 8, Iy)) : (V(), H("div", Ly, [U("small", null, O(e.model.links[1].label), 1), n[4] ||= U("strong", null, "Не привязан", -1)])),
				e.model.links[2].exists ? (V(), H("button", {
					key: 4,
					type: "button",
					class: "sb-track-linked",
					"data-action": e.model.links[2].action,
					"data-id": e.model.links[2].id
				}, [
					U("small", null, O(e.model.links[2].label), 1),
					U("strong", null, O(e.model.links[2].title), 1),
					n[5] ||= U("span", null, "Открыть →", -1)
				], 8, Ry)) : (V(), H("div", zy, [U("small", null, O(e.model.links[2].label), 1), n[6] ||= U("strong", null, "Не привязан", -1)]))
			]),
			(V(!0), H(B, null, z(e.model.sections, (e) => (V(), H("section", {
				key: e.label,
				class: "sb-track-sectionbox"
			}, [U("h3", null, O(e.label), 1), U("pre", null, O(e.text), 1)]))), 128)),
			U("h3", By, "Версии трека (" + O(e.model.versions.length) + ")", 1),
			e.model.versions.length ? (V(!0), H(B, { key: 0 }, z(e.model.versions, (t) => (V(), H("div", {
				key: t.id,
				class: "sb-track-version"
			}, [U("div", null, [
				U("strong", null, O(t.label), 1),
				U("small", null, O(t.date), 1),
				t.notes ? (V(), H("p", Vy, O(t.notes), 1)) : K("", !0)
			]), U("div", null, [t.url ? (V(), H("a", {
				key: 0,
				href: t.url,
				rel: "noopener noreferrer",
				target: "_blank"
			}, "Прослушать ↗", 8, Hy)) : K("", !0), U("button", {
				type: "button",
				class: "btn danger small",
				"data-action": "tp-version-remove",
				"data-id": e.model.id,
				"data-version": t.id,
				"aria-label": "Удалить версию " + t.label
			}, "×", 8, Uy)])]))), 128)) : (V(), H("p", Wy, "Версий пока нет.")),
			U("div", Gy, [n[7] ||= ua("<div class=\"field\"><label for=\"tp-version-title\">Название новой версии</label><input id=\"tp-version-title\" maxlength=\"100\" placeholder=\"Демо 2 / Финальный мастер\"></div><div class=\"field\"><label for=\"tp-version-url\">Ссылка (HTTPS)</label><input id=\"tp-version-url\" type=\"url\" maxlength=\"2000\" placeholder=\"https://…\"></div><div class=\"field\"><label for=\"tp-version-notes\">Что изменилось?</label><input id=\"tp-version-notes\" maxlength=\"300\" placeholder=\"Необязательно\"></div>", 3), U("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "tp-version-add",
				"data-id": e.model.id
			}, "+ Добавить версию", 8, Ky)]),
			n[9] ||= U("p", { class: "sb-track-disclaimer" }, " Связанный текст и промпт показываются из оригинальных разделов. Расчётные даты — ориентир, окончательная дата определяется издательством. ", -1)
		]));
	}
};
// src/vue/account/legacyTrackPassportDetailBridge.js
function Jy({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_TRACK_DETAIL, n = document.getElementById("app");
	if (!t || typeof t.snapshot != "function" || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-track-detail[data-sb-vue-track-detail]");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, qy, { model: o });
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
var Yy = {
	id: "sb-track-form",
	class: "panel sb-track-form",
	"data-sb-vue-track-editor-view": ""
}, Xy = { class: "sb-track-formhead" }, Zy = { class: "sb-track-fields" }, Qy = ["for"], $y = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"placeholder"
], eb = { class: "field" }, tb = ["value"], nb = { class: "field" }, rb = ["value"], ib = { class: "field" }, ab = ["value"], ob = { class: "field" }, sb = ["value"], cb = { class: "field" }, lb = ["value"], ub = { class: "field" }, db = { class: "sb-track-fields" }, fb = { class: "field" }, pb = { class: "field" }, mb = ["disabled"], hb = { class: "sb-track-manual" }, gb = {
	id: "tp-date-hint",
	class: "sb-track-hint"
}, _b = { class: "sb-track-fields" }, vb = ["for"], yb = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"placeholder"
], bb = ["for"], xb = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"rows"
], Sb = {
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
		let t = e, n = /* @__PURE__ */ j({ ...t.model.fields }), r = q(() => t.api.date7(n.submitted)), i = q(() => r.value ? "Автоматический расчёт: " + t.api.dateLabel(r.value) + " (через 7 календарных дней)." : "Укажи дату передачи издательству: релиз автоматически через 7 дней.");
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
		return (t, r) => (V(), H("div", Yy, [
			U("div", Xy, [U("h2", null, O(e.model.editing ? "Редактировать паспорт" : "Новый паспорт трека"), 1), r[9] ||= U("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "tp-cancel"
			}, "Закрыть", -1)]),
			U("div", Zy, [
				(V(!0), H(B, null, z(o.slice(0, 2), (e) => (V(), H("div", {
					key: e.id,
					class: "field"
				}, [U("label", { for: "tp-" + e.id }, O(e.label), 9, Qy), L(U("input", {
					id: "tp-" + e.id,
					"onUpdate:modelValue": (t) => n[e.id] = t,
					maxlength: e.max,
					placeholder: e.placeholder
				}, null, 8, $y), [[J, n[e.id]]])]))), 128)),
				U("div", eb, [r[10] ||= U("label", { for: "tp-status" }, "Этап работы", -1), L(U("select", {
					id: "tp-status",
					"onUpdate:modelValue": r[0] ||= (e) => n.status = e
				}, [(V(!0), H(B, null, z(e.model.stages, (e) => (V(), H("option", {
					key: e.value,
					value: e.value
				}, O(e.label), 9, tb))), 128))], 512), [[Io, n.status]])]),
				U("div", nb, [r[11] ||= U("label", { for: "tp-genre" }, "Жанр", -1), L(U("select", {
					id: "tp-genre",
					"onUpdate:modelValue": r[1] ||= (e) => n.genre = e
				}, [(V(!0), H(B, null, z(e.model.genres, (e) => (V(), H("option", {
					key: e.value,
					value: e.value
				}, O(e.label), 9, rb))), 128))], 512), [[Io, n.genre]])]),
				U("div", ib, [r[13] ||= U("label", { for: "tp-project" }, "Мой проект / артист", -1), L(U("select", {
					id: "tp-project",
					"onUpdate:modelValue": r[2] ||= (e) => n.project = e
				}, [r[12] ||= U("option", { value: "" }, "Без связи", -1), (V(!0), H(B, null, z(e.model.projects, (e) => (V(), H("option", {
					key: e.value,
					value: e.value
				}, O(e.label), 9, ab))), 128))], 512), [[Io, n.project]])]),
				U("div", ob, [r[15] ||= U("label", { for: "tp-idea" }, "Идея и текст песни", -1), L(U("select", {
					id: "tp-idea",
					"onUpdate:modelValue": r[3] ||= (e) => n.idea = e
				}, [r[14] ||= U("option", { value: "" }, "Без связи", -1), (V(!0), H(B, null, z(e.model.ideas, (e) => (V(), H("option", {
					key: e.value,
					value: e.value
				}, O(e.label), 9, sb))), 128))], 512), [[Io, n.idea]])]),
				U("div", cb, [r[17] ||= U("label", { for: "tp-prompt" }, "Мой промпт Suno", -1), L(U("select", {
					id: "tp-prompt",
					"onUpdate:modelValue": r[4] ||= (e) => n.prompt = e
				}, [r[16] ||= U("option", { value: "" }, "Без связи", -1), (V(!0), H(B, null, z(e.model.prompts, (e) => (V(), H("option", {
					key: e.value,
					value: e.value
				}, O(e.label), 9, lb))), 128))], 512), [[Io, n.prompt]])]),
				U("div", ub, [r[18] ||= U("label", { for: "tp-publisher" }, "Издательство / дистрибьютор", -1), L(U("input", {
					id: "tp-publisher",
					"onUpdate:modelValue": r[5] ||= (e) => n.publisher = e,
					maxlength: "120",
					placeholder: "Название издательства"
				}, null, 512), [[J, n.publisher]])])
			]),
			r[22] ||= U("h3", { class: "sb-track-section" }, "Даты релиза", -1),
			U("div", db, [U("div", fb, [r[19] ||= U("label", { for: "tp-submitted" }, "Передано издательству", -1), L(U("input", {
				id: "tp-submitted",
				"onUpdate:modelValue": r[6] ||= (e) => n.submitted = e,
				type: "date",
				onChange: a
			}, null, 544), [[J, n.submitted]])]), U("div", pb, [
				r[21] ||= U("label", { for: "tp-release" }, "Дата выхода", -1),
				L(U("input", {
					id: "tp-release",
					"onUpdate:modelValue": r[7] ||= (e) => n.release = e,
					type: "date",
					disabled: !n.override
				}, null, 8, mb), [[J, n.release]]),
				U("label", hb, [L(U("input", {
					id: "tp-override",
					"onUpdate:modelValue": r[8] ||= (e) => n.override = e,
					type: "checkbox",
					onChange: a
				}, null, 544), [[Po, n.override]]), r[20] ||= G(" Установить дату вручную ", -1)])
			])]),
			U("p", gb, O(i.value), 1),
			r[23] ||= U("h3", { class: "sb-track-section" }, "Материалы и метаданные", -1),
			U("div", _b, [(V(), H(B, null, z(s, (e) => U("div", {
				key: e.id,
				class: "field"
			}, [U("label", { for: "tp-" + e.id }, O(e.label), 9, vb), L(U("input", {
				id: "tp-" + e.id,
				"onUpdate:modelValue": (t) => n[e.id] = t,
				maxlength: e.max,
				placeholder: e.placeholder
			}, null, 8, yb), [[J, n[e.id]]])])), 64))]),
			(V(), H(B, null, z(c, (e) => U("div", {
				key: e.id,
				class: "field"
			}, [U("label", { for: "tp-" + e.id }, O(e.label), 9, bb), L(U("textarea", {
				id: "tp-" + e.id,
				"onUpdate:modelValue": (t) => n[e.id] = t,
				maxlength: e.max,
				rows: e.rows
			}, null, 8, xb), [[J, n[e.id]]])])), 64)),
			r[24] ||= U("div", { class: "sb-track-buttons" }, [U("button", {
				type: "button",
				class: "btn primary",
				"data-action": "tp-save"
			}, "Сохранить паспорт"), U("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "tp-cancel"
			}, "Отмена")], -1),
			r[25] ||= U("p", { class: "sb-track-disclaimer" }, " Обложка и аудио пока прикрепляются ссылками. Загрузка файлов будет доступна после переноса на сервер. Данные сохраняются локально и попадают в резервную копию SUNOBOOM. ", -1)
		]));
	}
};
// src/vue/account/legacyTrackPassportEditorBridge.js
function Cb({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_TRACK_EDITOR, n = document.getElementById("app");
	if (!n || !t || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-track-editor[data-sb-vue-track-editor]");
		if (r?.node === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o) return;
		let s = e(a, Sb, {
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
var wb = { class: "field" }, Tb = { class: "field" }, Eb = ["value"], Db = { class: "field" }, Ob = { class: "field" }, kb = {
	__name: "IdeaFields",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = /* @__PURE__ */ j({ ...e.initial.values });
		return (n, r) => (V(), H(B, null, [
			U("div", wb, [r[4] ||= U("label", { for: "custom-idea-title" }, "Название песни", -1), L(U("input", {
				id: "custom-idea-title",
				"onUpdate:modelValue": r[0] ||= (e) => t.title = e,
				maxlength: "100",
				placeholder: "Например, Город на ладони"
			}, null, 512), [[J, t.title]])]),
			U("div", Tb, [r[5] ||= U("label", { for: "custom-idea-genre" }, "Музыкальный жанр", -1), L(U("select", {
				id: "custom-idea-genre",
				"onUpdate:modelValue": r[1] ||= (e) => t.genre = e
			}, [(V(!0), H(B, null, z(e.initial.genres, (e) => (V(), H("option", {
				key: e.id,
				value: e.id
			}, O(e.name), 9, Eb))), 128))], 512), [[Io, t.genre]])]),
			U("div", Db, [r[6] ||= U("label", { for: "custom-idea-text" }, "Сюжет и основная идея", -1), L(U("textarea", {
				id: "custom-idea-text",
				"onUpdate:modelValue": r[2] ||= (e) => t.text = e,
				rows: "5",
				maxlength: "3000",
				placeholder: "О чём песня и что происходит с героем?"
			}, null, 512), [[J, t.text]])]),
			U("div", Ob, [r[7] ||= U("label", { for: "custom-idea-hook" }, "Фраза для припева (необязательно)", -1), L(U("input", {
				id: "custom-idea-hook",
				"onUpdate:modelValue": r[3] ||= (e) => t.hook = e,
				maxlength: "240",
				placeholder: "Запоминающаяся строчка"
			}, null, 512), [[J, t.hook]])])
		], 64));
	}
}, Ab = ["value"], jb = {
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
		}), (t, r) => (V(), H(B, null, [r[0] ||= U("label", { for: "custom-idea-lyrics" }, "Оригинальный текст (необязательно)", -1), U("textarea", {
			id: "custom-idea-lyrics",
			ref_key: "area",
			ref: n,
			value: e.initial.values.lyrics,
			rows: "12",
			maxlength: "20000",
			placeholder: "Куплет 1:\nТекст первого куплета...\n\nПрипев:\nТекст припева..."
		}, null, 8, Ab)], 64));
	}
}, Mb = { class: "field" }, Nb = ["value"], Pb = { class: "workbench-switches" }, Fb = ["id", "onUpdate:modelValue"], Ib = { class: "field" }, Lb = { class: "detail-actions" }, Rb = {
	type: "button",
	class: "btn ghost",
	"data-action": "copy-current-lyrics"
}, zb = ["innerHTML"], Bb = { class: "field" }, Vb = { class: "detail-actions" }, Hb = {
	type: "button",
	class: "btn ghost",
	"data-action": "copy-current-style"
}, Ub = ["innerHTML"], Wb = {
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
		return (t, o) => (V(), H(B, null, [
			U("div", Mb, [o[3] ||= U("label", { for: "lyrics-tag-preset" }, "Характер аранжировки", -1), L(U("select", {
				id: "lyrics-tag-preset",
				"onUpdate:modelValue": o[0] ||= (e) => n.preset = e
			}, [(V(), H(B, null, z(i, ([e, t]) => U("option", {
				key: e,
				value: e
			}, O(t), 9, Nb)), 64))], 512), [[Io, n.preset]])]),
			U("div", Pb, [(V(), H(B, null, z(a, ([e, t]) => U("label", { key: e }, [L(U("input", {
				id: "lyrics-" + e,
				"onUpdate:modelValue": (t) => r[e] = t,
				type: "checkbox"
			}, null, 8, Fb), [[Po, r[e]]]), G(" " + O(t), 1)])), 64))]),
			o[8] ||= U("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "format-idea-lyrics"
			}, "✨ Создать теги и усилители", -1),
			o[9] ||= U("p", { class: "workbench-note" }, "Разметка примерная: если в тексте нет названий секций, куплеты и припевы определяются по абзацам. Проверь расположение тегов перед копированием.", -1),
			U("div", Ib, [o[4] ||= U("label", { for: "custom-idea-tagged" }, "Готовая версия для поля Lyrics в Suno (можно исправить вручную)", -1), L(U("textarea", {
				id: "custom-idea-tagged",
				"onUpdate:modelValue": o[1] ||= (e) => n.tagged = e,
				rows: "13",
				maxlength: "25000",
				placeholder: "[Verse 1]\n...\n\n[Chorus - powerful melodic hook]\n..."
			}, null, 512), [[J, n.tagged]])]),
			U("div", Lb, [U("button", Rb, [U("span", { innerHTML: e.initial.copyIcon }, null, 8, zb), o[5] ||= G(" Копировать Lyrics", -1)])]),
			U("div", Bb, [o[6] ||= U("label", { for: "custom-idea-style" }, "Дополнительное описание для поля Style (до 1000 символов)", -1), L(U("textarea", {
				id: "custom-idea-style",
				"onUpdate:modelValue": o[2] ||= (e) => n.style = e,
				rows: "4",
				maxlength: "1000",
				placeholder: "Описание жанра, вокала и динамики для Suno"
			}, null, 512), [[J, n.style]])]),
			U("div", Vb, [U("button", Hb, [U("span", { innerHTML: e.initial.copyIcon }, null, 8, Ub), o[7] ||= G(" Копировать Style", -1)])])
		], 64));
	}
};
// src/vue/poetry/legacyIdeaEditorBridge.js
function Gb({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_IDEA_EDITOR, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = /* @__PURE__ */ new Map(), i = !1;
	function a() {
		if (!i) for (let [i, a] of [
			["sb-vue-idea-fields", kb],
			["sb-vue-lyrics-source", jb],
			["sb-vue-lyrics-tools", Wb]
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
function Kb({ sharedUi: e }) {
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
var qb = {
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
		return (t, n) => (V(), na(kr(e.component), _e(ca(e.componentProps)), null, 16));
	}
}, Jb = [
	"data-nav",
	"data-vue-router-path",
	"aria-current",
	"aria-label",
	"title",
	"onClick"
], Yb = ["innerHTML"], Xb = { class: "sb-vue-nav-label" }, Zb = {
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
		let t = Au(), n = ku(), r = Ed(), i = e, a = q(() => r.navigationItems.length ? r.navigationItems : i.items);
		function o(e) {
			i.onNavigate(e, n);
		}
		let s = (e) => {
			let n = r.route;
			return (t.path === Nu(n.route) ? Pu(t.path) : n.active) === e;
		};
		return (n, r) => (V(!0), H(B, null, z(a.value, (n) => (V(), H("button", {
			key: n.id,
			type: "button",
			class: D(e.mobile ? s(n.id) ? "active" : "" : ["nav-button", { active: s(n.id) }]),
			"data-nav": n.id,
			"data-vue-router-path": I(t).path,
			"aria-current": s(n.id) ? "page" : void 0,
			"aria-label": e.mobile ? n.label : void 0,
			title: e.mobile ? n.label : void 0,
			onClick: (e) => o(n.id)
		}, [U("span", {
			class: "sb-vue-nav-icon",
			"aria-hidden": "true",
			innerHTML: n.iconHtml
		}, null, 8, Yb), U("span", Xb, O(e.mobile ? n.shortLabel : n.label), 1)], 10, Jb))), 128));
	}
}, Qb = {
	class: "sb-vue-history-toolbar",
	role: "group",
	"aria-label": "История разделов SUNOBOOM"
}, $b = ["disabled"], ex = ["disabled"], tx = /*#__PURE__*/ vs({
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
		let t = e, n = Au(), r = Ed(), i = /* @__PURE__ */ P(!1), a = q(() => (n.path, r.route.revision, Uu.value, {
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
		return (e, t) => (V(), H("div", Qb, [
			t[4] ||= U("span", { class: "sb-vue-history-caption" }, "История разделов", -1),
			U("button", {
				type: "button",
				class: "sb-vue-history-button",
				"data-sb-history-back": "",
				disabled: !a.value.back,
				"aria-label": "Назад по разделам",
				title: "К предыдущему разделу",
				onClick: t[0] ||= (e) => o("back")
			}, [...t[2] ||= [U("svg", {
				viewBox: "0 0 24 24",
				width: "16",
				height: "16",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				"aria-hidden": "true"
			}, [U("path", { d: "m15 18-6-6 6-6" })], -1)]], 8, $b),
			U("button", {
				type: "button",
				class: "sb-vue-history-button",
				"data-sb-history-forward": "",
				disabled: !a.value.forward,
				"aria-label": "Вперёд по разделам",
				title: "К следующему разделу",
				onClick: t[1] ||= (e) => o("forward")
			}, [...t[3] ||= [U("svg", {
				viewBox: "0 0 24 24",
				width: "16",
				height: "16",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				"aria-hidden": "true"
			}, [U("path", { d: "m9 18 6-6-6-6" })], -1)]], 8, ex)
		]));
	}
}, [["__scopeId", "data-v-c738b8ec"]]), nx = Object.freeze({
	"/account/myideas": "myideas",
	"/account/myprompts": "myprompts",
	"/account/events": "events"
});
function rx(e) {
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
function ix(e, t) {
	if (!e || typeof t?.snapshot != "function") return null;
	let n = t.snapshot();
	if (n?.trackEditing) return null;
	let r = Qu(e.path);
	if (r && n?.items?.some((e) => e?.id === r)) return {
		kind: "menu",
		id: r
	};
	let i = nx[e.path];
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
var ax = !1;
function ox(e, { legacyApi: t } = {}) {
	if (ax || !["back", "forward"].includes(e) || typeof t?.snapshot != "function") return !1;
	let n = Zu(e), r = t.snapshot();
	return !!ix(n, t) && nd().path === rx(r);
}
async function sx(e, { legacyApi: t, syncRoute: n = ad } = {}) {
	if (ax || !["back", "forward"].includes(e) || !t || typeof t.snapshot != "function" || typeof t.navigate != "function") return !1;
	ax = !0;
	try {
		await ed();
		let r = ix(Zu(e), t), i = t.snapshot();
		if (!r || nd().path !== rx(i) || !await td(e)) return !1;
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
		ax = !1;
	}
}
// src/vue/navigation/legacyBridge.js
var cx = [{
	key: "sidebar",
	selector: "[data-sb-vue-sidebar]",
	mobile: !1
}, {
	key: "mobile",
	selector: "[data-sb-vue-mobile]",
	mobile: !0
}];
function lx({ mountVueFeature: e, unmountVueFeature: t, sharedUi: n }) {
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
			playerAbSummary: { ...n.playerAbSummary }
		}),
		back: () => sx("back", { legacyApi: r }),
		forward: () => sx("forward", { legacyApi: r }),
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
			let t = e(l, tx, {
				canRestore: (e) => ox(e, { legacyApi: r }),
				onRestore: (e) => sx(e, { legacyApi: r })
			}, { vueRouter: !0 });
			t && a.set("history", {
				target: l,
				unmount: t
			});
		}
		for (let { key: t, selector: n, mobile: o } of cx) {
			let l = i.querySelector(n), u = a.get(t);
			if (!l) {
				u?.unmount(), a.delete(t);
				continue;
			}
			if (u?.target === l && u.signature === c) continue;
			u?.unmount();
			let d = e(l, Zb, {
				items: s,
				mobile: o,
				onNavigate: (e, t) => cf(e, {
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
var ux = ["data-id"], dx = { class: "genre-content" }, fx = { class: "kicker" }, px = { class: "foot" }, mx = {
	__name: "GenreCards",
	props: { genres: {
		type: Array,
		required: !0
	} },
	setup(e) {
		return (t, n) => (V(!0), H(B, null, z(e.genres, (e) => (V(), H("button", {
			key: e.id,
			type: "button",
			class: "genre-card",
			style: E({ "--accent": e.color }),
			"data-action": "genre",
			"data-id": e.id
		}, [n[1] ||= U("div", {
			class: "art",
			"aria-hidden": "true"
		}, null, -1), U("div", dx, [U("div", null, [
			U("div", fx, O(e.family) + " · " + O(e.bpm[0]) + "–" + O(e.bpm[1]) + " BPM", 1),
			U("h3", null, O(e.name), 1),
			U("p", null, O(e.tagline), 1)
		]), U("div", px, [U("span", null, O(e.era), 1), n[0] ||= U("span", { style: { color: "#ffacd9" } }, "Открыть →", -1)])])], 12, ux))), 128));
	}
}, hx = { class: "genre-family-toolbar" }, gx = { class: "search-box" }, _x = ["innerHTML"], vx = { class: "hint" }, yx = { class: "genre-family-summary" }, bx = { id: "catalog-count" }, xx = ["data-id"], Sx = {
	class: "hint",
	id: "sb-academy-search-hint"
}, Cx = {
	id: "catalog-cards",
	class: "genre-families"
}, wx = [
	"data-family",
	"open",
	"onToggle"
], Tx = {
	class: "genre-family-icon",
	"aria-hidden": "true"
}, Ex = { class: "genre-family-heading" }, Dx = { class: "genre-family-right" }, Ox = { class: "genre-family-count" }, kx = { class: "genre-family-body" }, Ax = {
	key: 0,
	class: "sb-sacred-index"
}, jx = {
	key: 0,
	class: "sb-sacred-overview"
}, Mx = { class: "genre-grid" }, Nx = { class: "sb-sacred-religions" }, Px = [
	"data-sb-religion",
	"open",
	"onToggle"
], Fx = { class: "sb-sacred-religion-header" }, Ix = {
	class: "sb-sacred-religion-icon",
	"aria-hidden": "true"
}, Lx = { class: "sb-sacred-religion-label" }, Rx = { class: "sb-sacred-count" }, zx = { class: "sb-sacred-religion-content" }, Bx = [
	"data-sb-branch",
	"open",
	"onToggle"
], Vx = { class: "sb-sacred-branch-header" }, Hx = { class: "sb-sacred-branch-label" }, Ux = { class: "sb-sacred-count" }, Wx = { class: "sb-sacred-branch-content" }, Gx = { class: "genre-grid" }, Kx = {
	key: 1,
	class: "genre-grid"
}, qx = {
	key: 1,
	class: "genre-family-empty"
}, Jx = {
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
		let t = e, n = Ed(), r = /* @__PURE__ */ P(t.snapshot.query || ""), i = /* @__PURE__ */ j({
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
		qn([
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
		return (t, n) => (V(), H(B, null, [
			U("div", hx, [U("label", gx, [U("span", {
				innerHTML: e.searchIcon,
				"aria-hidden": "true"
			}, null, 8, _x), L(U("input", {
				id: "genre-search",
				"onUpdate:modelValue": n[0] ||= (e) => r.value = e,
				type: "search",
				enterkeyhint: "search",
				autocapitalize: "off",
				spellcheck: "false",
				"aria-label": "Поиск жанров",
				placeholder: "Поиск жанра, поджанра или исполнителя…",
				autocomplete: "off"
			}, null, 512), [[J, r.value]])]), U("span", vx, O(e.snapshot.families.length) + " разделов · " + O(e.snapshot.families.reduce((e, t) => e + t.genres.length, 0)) + " жанров", 1)]),
			U("div", yx, [
				U("h2", bx, O(o.value ? "Найдено жанров" : "Музыкальные жанры") + " · " + O(c.value), 1),
				m.value ? (V(), H("button", {
					key: 0,
					type: "button",
					class: "btn ghost small",
					"data-sb-last-genre": "",
					"data-action": "genre",
					"data-id": m.value.id
				}, " ↶ Последний жанр: " + O(m.value.name), 9, xx)) : K("", !0),
				U("span", Sx, O(l.value), 1)
			]),
			U("div", Cx, [s.value.length ? (V(!0), H(B, { key: 0 }, z(s.value, (e) => (V(), H("details", {
				key: e.name,
				class: "genre-family",
				"data-family": e.name,
				style: E({ "--family-accent": e.meta.accent }),
				open: h("family", e.name),
				onToggle: (t) => g("family", e.name, t)
			}, [U("summary", null, [
				U("span", Tx, O(e.meta.icon), 1),
				U("span", Ex, [U("strong", null, O(e.name), 1), U("small", null, O(e.meta.desc), 1)]),
				U("span", Dx, [U("span", Ox, O(e.genres.length) + " " + O(_(e.genres.length)), 1), n[1] ||= U("svg", {
					class: "genre-family-chevron",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2",
					"aria-hidden": "true"
				}, [U("path", { d: "m5 9 7 7 7-7" })], -1)])
			]), U("div", kx, [e.name === "Религиозная музыка" ? (V(), H("div", Ax, [
				n[5] ||= U("div", { class: "sb-sacred-intro" }, [
					U("span", { class: "sb-sacred-eyebrow" }, "МУЗЫКА МИРОВЫХ РЕЛИГИЙ"),
					U("h3", null, "Религии и музыкальные традиции"),
					U("p", null, "Открой религию, затем её направление или течение. Здесь представлены музыкальные традиции — их границы не всегда совпадают с конфессиональными.")
				], -1),
				d.value ? (V(), H("div", jx, [n[2] ||= U("div", { class: "sb-sacred-overview-label" }, "📖 Обзор раздела", -1), U("div", Mx, [W(mx, { genres: [d.value] }, null, 8, ["genres"])])])) : K("", !0),
				U("div", Nx, [(V(!0), H(B, null, z(f.value, (e) => (V(), H("details", {
					key: e.id,
					class: "sb-sacred-religion",
					"data-sb-religion": e.id,
					open: h("religion", e.id),
					onToggle: (t) => g("religion", e.id, t)
				}, [U("summary", Fx, [
					U("span", Ix, O(e.icon), 1),
					U("span", Lx, [U("strong", null, O(e.name), 1), U("small", null, O(e.description), 1)]),
					U("span", Rx, O(e.count), 1),
					n[3] ||= U("span", {
						class: "sb-sacred-chevron",
						"aria-hidden": "true"
					}, "⌄", -1)
				]), U("div", zx, [(V(!0), H(B, null, z(e.branches, (e) => (V(), H("details", {
					key: e.id,
					class: "sb-sacred-branch",
					"data-sb-branch": e.id,
					open: h("branch", e.id),
					onToggle: (t) => g("branch", e.id, t)
				}, [U("summary", Vx, [
					U("span", Hx, [U("strong", null, O(e.name), 1), U("small", null, O(e.description), 1)]),
					U("span", Ux, O(e.genres.length) + " " + O(v(e.genres.length)), 1),
					n[4] ||= U("span", {
						class: "sb-sacred-chevron",
						"aria-hidden": "true"
					}, "⌄", -1)
				]), U("div", Wx, [U("div", Gx, [W(mx, { genres: e.genres }, null, 8, ["genres"])])])], 40, Bx))), 128))])], 40, Px))), 128))])
			])) : (V(), H("div", Kx, [W(mx, { genres: e.genres }, null, 8, ["genres"])]))])], 44, wx))), 128)) : (V(), H("div", qx, "Ничего не найдено. Попробуй другой запрос."))])
		], 64));
	}
};
// src/vue/academy/legacyAcademyBridge.js
function Yx({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ACADEMY, n = document.getElementById("app");
	if (!t || !n || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-academy-root");
		if (r?.target === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o?.families?.length) return;
		let s = e(a, Jx, {
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
var Xx = (e) => String(e ?? "").trim().normalize("NFKC").toLocaleLowerCase("ru");
function Zx(e, t, n, r = "all", i = 30) {
	let a = Xx(n);
	if (!a) return {
		count: 0,
		items: []
	};
	let o = new Map(e.map((e) => [e.id, e])), s = /* @__PURE__ */ new Set(), c = [];
	function l(e, t) {
		let n = o.get(t);
		n && !s.has(t) && Xx(n.name).includes(a) && (s.add(t), c.push({
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
function Qx(e, t) {
	return t === "zoom-reset" ? 1 : t !== "zoom-in" && t !== "zoom-out" ? e : Math.min(1.5, Math.max(.75, Math.round((e + (t === "zoom-in" ? .15 : -.15)) * 100) / 100));
}
function $x(e, t) {
	let n = Array.isArray(e?.edges) ? e.edges : [];
	return e?.id === "all" ? n.filter(([e, n]) => e === t || n === t) : n;
}
// src/vue/academy/GenreTree.vue
var eS = {
	class: "sb-gt-vue-content",
	"data-sb-vue-genre-tree": ""
}, tS = { class: "sb-gt-head" }, nS = { class: "sb-gt-count" }, rS = { class: "sb-gt-controls" }, iS = ["value"], aS = ["value"], oS = ["value"], sS = ["value"], cS = { class: "sb-gt-extra" }, lS = {
	class: "sb-gt-search-label",
	for: "sb-gt-search"
}, uS = ["value"], dS = { class: "sb-gt-zoom" }, fS = { id: "sb-gt-zoom-label" }, pS = {
	id: "sb-gt-search-results",
	class: "sb-gt-search-results",
	"aria-live": "polite"
}, mS = { class: "sb-gt-search-title" }, hS = { class: "sb-gt-search-links" }, gS = [
	"data-id",
	"data-tree",
	"onClick"
], _S = {
	key: 1,
	class: "sb-gt-search-empty"
}, vS = { class: "sb-gt-intro" }, yS = { class: "sb-gt-legend" }, bS = ["aria-label"], xS = ["data-sb-gt-family"], SS = {
	key: 1,
	class: "sb-gt-stage"
}, CS = { class: "sb-gt-node-list" }, wS = [
	"data-id",
	"aria-pressed",
	"onClick"
], TS = { class: "sb-gt-node-name" }, ES = { class: "sb-gt-node-era" }, DS = {
	key: 0,
	id: "sb-gt-description",
	class: "sb-gt-detail",
	"aria-live": "polite"
}, OS = { class: "sb-gt-detail-top" }, kS = { class: "sb-gt-sub" }, AS = ["data-id"], jS = { class: "sb-gt-description" }, MS = { class: "sb-gt-related" }, NS = ["data-id", "onClick"], PS = {
	key: 1,
	class: "sb-gt-note"
}, FS = { class: "sb-gt-related" }, IS = ["data-id", "onClick"], LS = /*#__PURE__*/ vs({
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
		let t = e, n = Ed(), r = /* @__PURE__ */ P(t.snapshot.tree), i = /* @__PURE__ */ P(t.snapshot.selected), a = /* @__PURE__ */ P(t.snapshot.query || ""), o = /* @__PURE__ */ P(t.snapshot.zoom || 1), s = /* @__PURE__ */ P("");
		qn([
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
		}))), v = q(() => _.value.reduce((e, t) => e + t.entries.length, 0)), y = q(() => d.get(i.value) || d.get(h.value.focus)), b = q(() => $x(h.value, i.value).filter(([e, t]) => e === i.value || t === i.value).map(([e, t, n, r]) => {
			let a = d.get(e === i.value ? t : e);
			return a ? {
				id: a.id,
				name: a.name,
				type: n,
				note: r,
				direction: e === i.value ? "→" : "←"
			} : null;
		}).filter(Boolean)), x = q(() => g.value && y.value ? u.filter((e) => e.id !== i.value && e.family === y.value.family).slice(0, 8) : []), S = q(() => Zx(u, f, a.value, r.value)), C = (e) => !!a.value.trim() && !e.name.toLocaleLowerCase("ru").includes(a.value.trim().toLocaleLowerCase("ru"));
		function w() {
			En(() => requestAnimationFrame(() => t.treeApi.drawLines()));
		}
		function ee(e) {
			let n = t.treeApi.changeTree(e);
			n && (r.value = n.tree, i.value = n.selected, a.value = "", s.value = "", w());
		}
		function te(e) {
			d.has(e) && t.treeApi.select(e) && (i.value = e, w());
		}
		function ne(e) {
			let n = Qx(o.value, e);
			t.treeApi.setZoom(n), o.value = n, w();
		}
		function T(e) {
			a.value = e.target.value, t.treeApi.setQuery(a.value);
		}
		function re(e) {
			let n = t.treeApi.searchJump(e.tree, e.id);
			n && (r.value = n.tree, i.value = n.selected, a.value = "", s.value = "", En(() => {
				[...l.value?.querySelectorAll(".sb-gt-node") || []].find((t) => t.dataset.id === e.id)?.scrollIntoView({
					behavior: "smooth",
					block: "nearest",
					inline: "center"
				}), w();
			}));
		}
		function ie(e) {
			s.value = e.target.value, [...l.value?.querySelectorAll("[data-sb-gt-family]") || []].find((e) => e.dataset.sbGtFamily === s.value)?.scrollIntoView({
				behavior: "smooth",
				block: "nearest",
				inline: "start"
			});
		}
		return R(w), (t, n) => (V(), H("div", eS, [
			U("div", tS, [n[5] ||= U("div", null, [
				U("span", { class: "sb-gt-kicker" }, "SUNOBOOM · ИСТОРИЯ МУЗЫКИ"),
				U("h2", null, "От истоков к новым жанрам"),
				U("p", null, "Нажми на жанр в схеме, чтобы увидеть его историю и связи. Затем открой его существующую карточку в Академии.")
			], -1), U("div", nS, O(v.value) + " жанров" + O(g.value ? " · " + h.value.groups.length + " направлений" : " в схеме"), 1)]),
			U("div", rS, [
				n[8] ||= U("label", { for: "sb-gt-tree-choice" }, "Карта жанров", -1),
				U("select", {
					id: "sb-gt-tree-choice",
					value: r.value,
					"aria-label": "Выберите музыкальное древо",
					onChange: n[0] ||= (e) => ee(e.target.value)
				}, [(V(!0), H(B, null, z(I(f), (e) => (V(), H("option", {
					key: e.id,
					value: e.id
				}, O(e.icon) + " " + O(e.label), 9, aS))), 128))], 40, iS),
				g.value ? (V(), H(B, { key: 0 }, [n[7] ||= U("label", { for: "sb-gt-group-jump" }, "Перейти к направлению", -1), U("select", {
					id: "sb-gt-group-jump",
					value: s.value,
					"aria-label": "Перейти к музыкальному направлению",
					onChange: ie
				}, [n[6] ||= U("option", { value: "" }, "Выберите раздел…", -1), (V(!0), H(B, null, z(h.value.groups, (e, t) => (V(), H("option", {
					key: e.name,
					value: String(t)
				}, O(e.icon) + " " + O(e.name) + " (" + O(e.ids.length) + ") ", 9, sS))), 128))], 40, oS)], 64)) : K("", !0)
			]),
			U("div", cS, [U("label", lS, [n[9] ||= G(" Поиск жанра по древу ", -1), U("input", {
				id: "sb-gt-search",
				value: a.value,
				type: "search",
				placeholder: "Например: ска-панк",
				autocomplete: "off",
				onInput: T
			}, null, 40, uS)]), U("div", dS, [
				n[10] ||= U("span", null, "Масштаб карты", -1),
				U("button", {
					type: "button",
					"data-sb-gt-action": "zoom-out",
					"aria-label": "Уменьшить масштаб",
					onClick: n[1] ||= (e) => ne("zoom-out")
				}, "−"),
				U("output", fS, O(Math.round(o.value * 100)) + "%", 1),
				U("button", {
					type: "button",
					"data-sb-gt-action": "zoom-in",
					"aria-label": "Увеличить масштаб",
					onClick: n[2] ||= (e) => ne("zoom-in")
				}, "+"),
				U("button", {
					type: "button",
					"data-sb-gt-action": "zoom-reset",
					onClick: n[3] ||= (e) => ne("zoom-reset")
				}, "Сброс")
			])]),
			U("div", pS, [a.value.trim() ? (V(), H(B, { key: 0 }, [S.value.count ? (V(), H(B, { key: 0 }, [U("div", mS, " Найдено в коллекции: " + O(S.value.count) + O(S.value.count > 30 ? " · показаны первые 30" : ""), 1), U("div", hS, [(V(!0), H(B, null, z(S.value.items, (e) => (V(), H("button", {
				key: e.id,
				type: "button",
				"data-sb-gt-action": "search-jump",
				"data-id": e.id,
				"data-tree": e.tree,
				onClick: (t) => re(e)
			}, [G(O(e.name) + " ", 1), U("small", null, "(" + O(e.family) + ")", 1)], 8, gS))), 128))])], 64)) : (V(), H("p", _S, "Жанр не найден в коллекции Академии."))], 64)) : K("", !0)]),
			U("p", vS, O(h.value.intro), 1),
			U("div", yS, [(V(!0), H(B, null, z(I(p), (e, t) => (V(), H("span", { key: t }, [U("i", { style: E({ "--rel-color": e.color }) }, null, 4), G(O(e.label), 1)]))), 128))]),
			U("div", {
				ref_key: "viewport",
				ref: c,
				class: "sb-gt-viewport",
				tabindex: "0",
				"aria-label": g.value ? "Все жанры Академии по музыкальным направлениям, горизонтальная прокрутка" : "Схема связей: горизонтально прокручиваемая карта жанров"
			}, [U("div", {
				ref_key: "canvas",
				ref: l,
				class: D(["sb-gt-canvas", { "sb-gt-canvas-all": g.value }]),
				style: E({
					zoom: o.value,
					"--sb-gt-family-count": g.value ? h.value.columns.length : 4
				})
			}, [n[11] ||= U("svg", {
				class: "sb-gt-lines",
				"aria-hidden": "true"
			}, null, -1), U("div", { class: D(["sb-gt-columns", { "sb-gt-columns-all": g.value }]) }, [(V(!0), H(B, null, z(_.value, (e) => (V(), H("div", {
				key: r.value + ":" + e.index,
				class: D(["sb-gt-column", { "sb-gt-column-all": g.value }]),
				"data-sb-gt-family": g.value ? String(e.index) : null
			}, [g.value ? (V(), H("div", {
				key: 0,
				class: "sb-gt-stage sb-gt-family-heading",
				style: E({ "--sb-gt-family-accent": e.group.accent })
			}, [U("strong", null, O(e.group.icon) + " " + O(e.group.name), 1), U("span", null, O(e.entries.length), 1)], 4)) : (V(), H("div", SS, [U("span", null, "0" + O(e.index + 1), 1), G(O(I(m)[e.index]), 1)])), U("div", CS, [(V(!0), H(B, null, z(e.entries, (e) => (V(), H("button", {
				key: e.id,
				type: "button",
				class: D(["sb-gt-node", {
					"is-selected": i.value === e.id,
					"sb-gt-search-dim": C(e)
				}]),
				"data-sb-gt-action": "select",
				"data-id": e.id,
				"aria-pressed": i.value === e.id,
				onClick: (t) => te(e.id)
			}, [U("span", TS, O(e.name), 1), U("span", ES, O(e.era || e.family || ""), 1)], 10, wS))), 128))])], 10, xS))), 128))], 2)], 6)], 8, bS),
			y.value ? (V(), H("div", DS, [
				U("div", OS, [U("div", null, [
					n[12] ||= U("div", { class: "sb-gt-kicker" }, "ВЫБРАННОЕ НАПРАВЛЕНИЕ", -1),
					U("h3", null, O(y.value.name), 1),
					U("p", kS, O(y.value.era || "") + " · " + O(y.value.family || ""), 1)
				]), U("button", {
					type: "button",
					class: "btn primary sb-gt-open",
					"data-sb-gt-action": "open",
					"data-id": y.value.id,
					onClick: n[4] ||= (t) => e.treeApi.openGenre(y.value.id)
				}, "Открыть карточку ↗", 8, AS)]),
				U("p", jS, O(y.value.description || y.value.tagline || "Описание в карточке жанра."), 1),
				b.value.length ? (V(), H(B, { key: 0 }, [n[13] ||= U("h4", null, "Исторические связи", -1), U("div", MS, [(V(!0), H(B, null, z(b.value, (e) => (V(), H("button", {
					key: e.id + ":" + e.type,
					type: "button",
					class: "sb-gt-related-btn",
					"data-sb-gt-action": "select",
					"data-id": e.id,
					onClick: (t) => te(e.id)
				}, [U("span", { class: D(["sb-gt-related-mark", "sb-gt-" + e.type]) }, O(e.direction), 3), U("span", null, [U("strong", null, O(e.name), 1), U("small", null, O(e.note), 1)])], 8, NS))), 128))])], 64)) : g.value ? K("", !0) : (V(), H("p", PS, "У этого узла пока нет нарисованных связей в выбранной схеме.")),
				g.value && x.value.length ? (V(), H(B, { key: 2 }, [U("h4", null, "Другие жанры раздела «" + O(y.value.family) + "»", 1), U("div", FS, [(V(!0), H(B, null, z(x.value, (e) => (V(), H("button", {
					key: e.id,
					type: "button",
					class: "sb-gt-related-btn",
					"data-sb-gt-action": "select",
					"data-id": e.id,
					onClick: (t) => te(e.id)
				}, [n[14] ||= U("span", { class: "sb-gt-related-mark" }, "♫", -1), U("span", null, [U("strong", null, O(e.name), 1)])], 8, IS))), 128))])], 64)) : K("", !0)
			])) : K("", !0),
			n[15] ||= U("p", { class: "sb-gt-note" }, "Схема показывает основные исторические влияния и стилистические пересечения. Жанры могут развиваться параллельно; стрелки не означают единственное происхождение.", -1)
		]));
	}
}, [["__scopeId", "data-v-6e70f61e"]]);
// src/vue/academy/legacyGenreTreeBridge.js
function RS({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_GENRE_TREE, n = document.getElementById("app");
	if (!t?.snapshot || !n) return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-genre-tree"), o = a?.open ? a.querySelector("#sb-gt-inner") : null;
		if (r?.target === o && o?.isConnected || (r &&= (r.unmount(), null), !o)) return;
		let s = t.snapshot();
		if (!s?.trees?.length || !s?.genres?.length) return;
		let c = e(o, LS, {
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
var zS = {
	class: "gb-grid",
	"data-sb-vue-overview": ""
}, BS = { class: "gb-column" }, VS = { class: "gb-panel pink" }, HS = { class: "gb-unit" }, US = { class: "gb-unit" }, WS = { class: "gb-unit" }, GS = { class: "gb-panel" }, KS = ["innerHTML"], qS = { class: "gb-column" }, JS = { class: "gb-panel blue" }, YS = {
	class: "gb-bpm-value",
	style: {
		"font-size": "26px",
		"font-weight": "900"
	}
}, XS = { class: "gb-artists" }, ZS = { class: "gb-panel pink" }, QS = ["data-id"], $S = ["innerHTML"], eC = {
	__name: "GenreOverview",
	props: { genre: {
		type: Object,
		required: !0
	} },
	emits: ["select-tab"],
	setup(e) {
		return (t, n) => (V(), H("div", zS, [U("div", BS, [U("section", VS, [
			n[7] ||= U("div", { class: "gb-sup" }, "01 / ЗНАКОМСТВО С ЖАНРОМ", -1),
			n[8] ||= U("h2", null, "Характер и звучание", -1),
			U("p", null, [U("strong", null, O(e.genre.tagline), 1)]),
			U("p", null, O(e.genre.description), 1),
			U("div", HS, [n[2] ||= U("b", null, "🎸", -1), U("div", null, [n[1] ||= U("strong", null, "Инструменты", -1), U("span", null, O(e.genre.instruments) + ".", 1)])]),
			U("div", US, [n[4] ||= U("b", null, "🎛️", -1), U("div", null, [n[3] ||= U("strong", null, "Саунд", -1), U("span", null, O(e.genre.style) + ".", 1)])]),
			U("div", WS, [n[6] ||= U("b", null, "✍️", -1), U("div", null, [n[5] ||= U("strong", null, "Тематика песен", -1), U("span", null, O(e.genre.themes) + ".", 1)])])
		]), U("section", GS, [
			n[10] ||= U("div", { class: "gb-sup" }, "03 / ИДЕИ ДЛЯ СТАРТА", -1),
			n[11] ||= U("h2", null, "Что можно спеть", -1),
			(V(!0), H(B, null, z(e.genre.ideas, (e, t) => (V(), H("div", {
				key: t,
				class: "gb-idea"
			}, [U("strong", null, O(e.title), 1), U("p", null, O(e.pitch), 1)]))), 128)),
			U("button", {
				type: "button",
				class: "btn ghost small",
				onClick: n[0] ||= (e) => t.$emit("select-tab", "ideas")
			}, [n[9] ||= G(" Все идеи ", -1), U("span", {
				"aria-hidden": "true",
				innerHTML: e.genre.icons.arrow
			}, null, 8, KS)])
		])]), U("div", qS, [U("section", JS, [
			n[12] ||= U("div", { class: "gb-sup" }, "02 / ПАСПОРТ НАПРАВЛЕНИЯ", -1),
			n[13] ||= U("h2", null, "История и сцена", -1),
			n[14] ||= U("div", { class: "info-label" }, "Эпоха", -1),
			U("p", null, O(e.genre.era), 1),
			n[15] ||= U("div", { class: "info-label" }, "Диапазон темпа", -1),
			U("p", YS, O(e.genre.bpm[0]) + "–" + O(e.genre.bpm[1]) + " BPM", 1),
			n[16] ||= U("div", { class: "info-label" }, "Исполнители для знакомства", -1),
			U("div", XS, [(V(!0), H(B, null, z(e.genre.artists, (e) => (V(), H("span", { key: e }, O(e), 1))), 128))])
		]), U("section", ZS, [n[18] ||= ua("<div class=\"gb-sup\">04 / ТВОЯ МУЗЫКА</div><h2>Преврати знания в трек</h2><p>Выбери вокал, настроение и темп, затем создай промпт и структуру песни в Suno Studio.</p><div class=\"gb-unit\"><b>🎤</b><div><strong>Вокал</strong><span>Мужской, женский или дуэт; можно использовать русский язык.</span></div></div><div class=\"gb-unit\"><b>⚡</b><div><strong>Динамика</strong><span>Настрой энергию и характер припева под историю.</span></div></div>", 5), U("button", {
			type: "button",
			class: "btn primary small",
			"data-action": "use-genre",
			"data-id": e.genre.id
		}, [U("span", {
			innerHTML: e.genre.icons.studio,
			"aria-hidden": "true"
		}, null, 8, $S), n[17] ||= G(" Открыть студию ", -1)], 8, QS)])])]));
	}
}, tC = {
	key: 0,
	id: "sb-artist-expanded",
	class: "ahx-wrap",
	"data-sb-vue-artists": ""
}, nC = { class: "ahx-intro" }, rC = { class: "gb-eyebrow" }, iC = {
	class: "ahx-toolbar",
	role: "group",
	"aria-label": "Музыкальные сцены"
}, aC = ["aria-pressed"], oC = ["aria-pressed"], sC = { class: "ahx-filters" }, cC = { class: "ahx-search" }, lC = ["innerHTML"], uC = {
	class: "ahx-filter-buttons",
	role: "group",
	"aria-label": "Фильтр исполнителей"
}, dC = [
	"data-vue-artist-filter",
	"aria-pressed",
	"onClick"
], fC = {
	id: "ahx-count",
	class: "ahx-count",
	"aria-live": "polite"
}, pC = { class: "ahx-section-head" }, mC = { class: "ahx-eyebrow" }, hC = { class: "ahx-num" }, gC = { class: "ahx-grid" }, _C = ["data-ahx-group"], vC = { class: "ahx-card-top" }, yC = {
	class: "ahx-avatar",
	"aria-hidden": "true"
}, bC = { class: "ahx-title" }, xC = { class: "ahx-era" }, SC = {
	key: 0,
	class: "ahx-track"
}, CC = {
	id: "ahx-no-results",
	class: "ahx-no-results"
}, wC = {
	key: 1,
	class: "ahx-empty"
}, TC = {
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
		return R(() => t.enhanceProfiles?.()), br(() => t.enhanceProfiles?.()), (t, u) => a.value ? (V(), H("div", tC, [
			U("div", nC, [
				U("div", rC, "АКАДЕМИЯ SUNOBOOM · " + O(e.genre.name), 1),
				u[4] ||= U("h2", null, "Исполнители и композиторы", -1),
				U("p", null, O(a.value.description), 1)
			]),
			U("div", iC, [U("button", {
				type: "button",
				"data-vue-artist-scene": "world",
				"aria-pressed": n.value === "world",
				class: D({ on: n.value === "world" }),
				onClick: u[0] ||= (e) => l("world")
			}, [u[5] ||= G(" 🌍 Мировая сцена ", -1), U("span", null, O(a.value.worldCount), 1)], 10, aC), U("button", {
				type: "button",
				"data-vue-artist-scene": "ru",
				"aria-pressed": n.value === "ru",
				class: D({ on: n.value === "ru" }),
				onClick: u[1] ||= (e) => l("ru")
			}, [u[6] ||= G(" 🎤 Русскоязычные ", -1), U("span", null, O(a.value.ruCount), 1)], 10, oC)]),
			c.value ? (V(), H(B, { key: 0 }, [
				U("div", sC, [U("label", cC, [U("span", {
					"aria-hidden": "true",
					innerHTML: e.genre.icons.overview
				}, null, 8, lC), L(U("input", {
					"onUpdate:modelValue": u[2] ||= (e) => r.value = e,
					type: "search",
					"data-vue-artist-search": "",
					placeholder: "Найти исполнителя или произведение…",
					"aria-label": "Поиск по исполнителям"
				}, null, 512), [[J, r.value]])]), U("div", uC, [(V(), H(B, null, z([
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
				], (e) => U("button", {
					key: e.id,
					type: "button",
					"data-vue-artist-filter": e.id,
					"aria-pressed": i.value === e.id,
					onClick: (t) => i.value = e.id
				}, O(e.label), 9, dC)), 64))])]),
				U("p", fC, "Показано " + O(s.value) + " из " + O(c.value) + " исполнителей.", 1),
				(V(!0), H(B, null, z(o.value, (e) => L((V(), H("section", {
					key: e.index,
					class: "ahx-section",
					"data-ahx-section": ""
				}, [U("div", pC, [U("div", null, [U("span", mC, "0" + O(e.index + 1) + " / ИСПОЛНИТЕЛИ", 1), U("h3", null, O(e.index ? "Современная сцена и продолжатели" : "Классика и предшественники"), 1)]), U("span", hC, O(e.artists.length), 1)]), U("div", gC, [(V(!0), H(B, null, z(e.artists, (e) => (V(), H("article", {
					key: e.key,
					class: "ahx-card",
					"data-ahx-group": e.group
				}, [
					U("div", vC, [U("span", yC, O(e.initials), 1), U("div", bC, [U("h4", null, O(e.name), 1), U("span", xC, O(e.period || "Музыкальная сцена"), 1)])]),
					U("span", { class: D(["ahx-role", { "ahx-role-neighbor": e.group === "adjacent" }]) }, O(e.label), 3),
					U("p", null, O(e.bio || "Музыкальное направление и характерный творческий почерк."), 1),
					e.track ? (V(), H("div", SC, [u[7] ||= U("small", null, "Ориентир для прослушивания", -1), U("strong", null, "♫ " + O(e.track), 1)])) : K("", !0)
				], 8, _C))), 128))])])), [[Qa, e.artists.length]])), 128)),
				L(U("div", CC, " По заданному поиску исполнители не найдены. Попробуй другой запрос или выбери «Все». ", 512), [[Qa, s.value === 0]])
			], 64)) : (V(), H("div", wC, [
				u[8] ||= U("strong", null, "Русскоязычная подборка ещё уточняется", -1),
				u[9] ||= U("p", null, "Для этого узкого направления пока нет достаточно подтверждённых примеров. Мы не будем подставлять артистов из других жанров без пояснения.", -1),
				U("button", {
					class: "btn ghost",
					type: "button",
					onClick: u[3] ||= (e) => l("world")
				}, "Посмотреть мировую сцену")
			])),
			u[10] ||= U("p", { class: "ahx-footnote" }, "В подборках могут встречаться близкие стили, кино- и игровая музыка, инструментальные коллективы. Их связь с жанром поясняется в карточке. Указанные произведения — ориентиры для знакомства, а не ссылки на конкретные релизы.", -1)
		])) : K("", !0);
	}
}, EC = {
	class: "idea-grid",
	"data-sb-vue-ideas": ""
}, DC = { class: "idea-badge" }, OC = { class: "actions" }, kC = ["data-id", "data-i"], AC = ["innerHTML"], jC = [
	"data-id",
	"data-i",
	"aria-pressed"
], MC = ["innerHTML"], NC = {
	__name: "GenreIdeas",
	props: { genre: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (V(), H("div", EC, [(V(!0), H(B, null, z(e.genre.allIdeas, (t) => (V(), H("div", {
			key: t.index,
			class: "idea"
		}, [
			U("div", DC, O(e.genre.name) + " · " + O(t.mood), 1),
			U("h3", null, O(t.title), 1),
			U("p", null, O(t.pitch), 1),
			U("div", OC, [U("button", {
				type: "button",
				class: "btn primary small",
				"data-action": "idea-use",
				"data-id": e.genre.id,
				"data-i": t.index
			}, [U("span", {
				"aria-hidden": "true",
				innerHTML: e.genre.icons.studio
			}, null, 8, AC), n[0] ||= G(" В студию ", -1)], 8, kC), U("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "idea-save",
				"data-id": e.genre.id,
				"data-i": t.index,
				"aria-pressed": t.saved ? "true" : "false"
			}, [U("span", {
				"aria-hidden": "true",
				innerHTML: e.genre.icons.heart
			}, null, 8, MC), G(" " + O(t.saved ? "Сохранено" : "Сохранить"), 1)], 8, jC)])
		]))), 128))]));
	}
}, PC = {
	class: "panel",
	"data-sb-vue-prompts": ""
}, FC = { class: "idea-grid" }, IC = { class: "idea" }, LC = ["data-id"], RC = ["innerHTML"], zC = { class: "idea" }, BC = ["data-id"], VC = ["innerHTML"], HC = {
	__name: "GenrePrompts",
	props: { genre: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (V(), H("div", PC, [
			n[5] ||= U("h3", null, "Шаблоны звучания", -1),
			n[6] ||= U("p", null, "Начни с одного из вариантов. Он перенесёт настройки жанра в конструктор — там можно выбрать вокал, настроение и язык.", -1),
			U("div", FC, [U("div", IC, [
				n[1] ||= U("div", { class: "idea-badge" }, "Оригинальное звучание", -1),
				U("h3", null, O(e.genre.name), 1),
				U("p", null, O(e.genre.style) + ".", 1),
				U("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "use-genre",
					"data-id": e.genre.id
				}, [n[0] ||= G(" Настроить в студии ", -1), U("span", {
					"aria-hidden": "true",
					innerHTML: e.genre.icons.arrow
				}, null, 8, RC)], 8, LC)
			]), U("div", zC, [
				n[3] ||= U("div", { class: "idea-badge" }, "Альтернативная версия", -1),
				n[4] ||= U("h3", null, "Мягкая атмосфера", -1),
				U("p", null, O(e.genre.style) + ", restrained dynamics, warm intimate production, emotional melodies.", 1),
				U("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "use-soft",
					"data-id": e.genre.id
				}, [n[2] ||= G(" Настроить в студии ", -1), U("span", {
					"aria-hidden": "true",
					innerHTML: e.genre.icons.arrow
				}, null, 8, VC)], 8, BC)
			])])
		]));
	}
}, UC = { class: "gb-hero" }, WC = { class: "gb-content" }, GC = { class: "gb-eyebrow" }, KC = { class: "gb-title" }, qC = { class: "gb-desc" }, JC = { class: "gb-tags" }, YC = { class: "gb-buttons" }, XC = ["data-id"], ZC = ["innerHTML"], QC = ["data-id"], $C = ["innerHTML"], ew = {
	class: "gb-vinyl",
	"aria-hidden": "true"
}, tw = { class: "gb-equalizer" }, nw = { class: "gb-facts" }, rw = { class: "gb-fact" }, iw = { class: "gb-fact" }, aw = { class: "gb-fact" }, ow = { class: "gb-fact" }, sw = { class: "genre-detail-layout" }, cw = {
	class: "genre-side-nav",
	"aria-label": "ЖАНР-НАВ — меню жанра"
}, lw = {
	class: "genre-side-links",
	"aria-label": "Разделы жанра"
}, uw = [
	"data-tab",
	"aria-current",
	"onClick"
], dw = ["innerHTML"], fw = {
	class: "genre-detail-content",
	id: "genre-nav-content",
	"aria-label": "Содержимое раздела жанра"
}, pw = ["innerHTML"], mw = {
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
		], r = Ed(), i = /* @__PURE__ */ P(t.genre.tab);
		qn(i, (e) => r.publishAcademyFocus(t.genre.id, e), { immediate: !0 });
		let a = /* @__PURE__ */ P(t.tabContent(t.genre.id, i.value) || "");
		async function o(e) {
			if (i.value === e || !n.some((t) => t.id === e)) return;
			let r = t.tabContent(t.genre.id, e);
			typeof r == "string" && (i.value = e, a.value = r, await En(), window.innerWidth <= 850 && document.getElementById("genre-nav-content")?.scrollIntoView({
				block: "start",
				behavior: "smooth"
			}));
		}
		return (t, r) => (V(), H("div", {
			class: "genre-bright",
			style: E({ "--accent": e.genre.color })
		}, [U("div", UC, [
			r[5] ||= U("div", { class: "gb-top" }, [U("button", {
				type: "button",
				class: "back",
				"data-action": "academy-back",
				"aria-label": "Назад к разделу Академии"
			}, "← Назад"), U("small", null, "SUNOBOOM · MUSIC ATLAS")], -1),
			U("div", WC, [U("div", null, [
				U("div", GC, O(e.genre.family) + " · " + O(e.genre.era), 1),
				U("h1", KC, O(e.genre.name), 1),
				U("p", qC, O(e.genre.description), 1),
				U("div", JC, [
					U("span", null, O(e.genre.tagline), 1),
					U("span", null, O(e.genre.bpm[0]) + "–" + O(e.genre.bpm[1]) + " BPM", 1),
					U("span", null, O(e.genre.ideasCount) + " идеи", 1)
				]),
				U("div", YC, [U("button", {
					type: "button",
					class: "btn primary",
					"data-action": "use-genre",
					"data-id": e.genre.id
				}, [U("span", {
					innerHTML: e.genre.icons.studio,
					"aria-hidden": "true"
				}, null, 8, ZC), r[0] ||= G(" Создать в Suno ", -1)], 8, XC), U("button", {
					type: "button",
					class: "btn ghost",
					"data-action": "favorite",
					"data-id": e.genre.id
				}, [U("span", {
					innerHTML: e.genre.icons.heart,
					"aria-hidden": "true"
				}, null, 8, $C), G(" " + O(e.genre.favorite ? "В избранном" : "В избранное"), 1)], 8, QC)])
			]), U("div", ew, [U("div", tw, [(V(), H(B, null, z(9, (e) => U("i", { key: e })), 64))])])]),
			U("div", nw, [
				U("div", rw, [r[1] ||= U("small", null, "История", -1), U("strong", null, O(e.genre.era), 1)]),
				U("div", iw, [r[2] ||= U("small", null, "Темп", -1), U("strong", null, O(e.genre.bpm[0]) + "–" + O(e.genre.bpm[1]) + " BPM", 1)]),
				U("div", aw, [r[3] ||= U("small", null, "Треки", -1), U("strong", null, O(e.genre.ideasCount) + " сюжетных идеи", 1)]),
				U("div", ow, [r[4] ||= U("small", null, "Артисты", -1), U("strong", null, O(e.genre.artistCount) + " ориентиров", 1)])
			])
		]), U("div", sw, [U("aside", cw, [r[7] ||= U("div", { class: "genre-side-head" }, [U("span", null, "ЖАНР-НАВ"), U("small", null, "Разделы карточки")], -1), U("nav", lw, [(V(), H(B, null, z(n, (t) => U("button", {
			key: t.id,
			type: "button",
			class: D(["genre-side-item", { active: i.value === t.id }]),
			"data-tab": t.id,
			"aria-controls": "genre-nav-content",
			"aria-current": i.value === t.id ? "page" : "false",
			onClick: (e) => o(t.id)
		}, [
			U("span", {
				class: "genre-side-icon",
				innerHTML: e.genre.icons[t.id],
				"aria-hidden": "true"
			}, null, 8, dw),
			U("span", null, O(t.label), 1),
			r[6] ||= U("span", {
				class: "genre-side-chevron",
				"aria-hidden": "true"
			}, "›", -1)
		], 10, uw)), 64))])]), U("section", fw, [i.value === "overview" ? (V(), na(eC, {
			key: 0,
			genre: e.genre,
			onSelectTab: o
		}, null, 8, ["genre"])) : i.value === "artists" && e.artistCatalog ? (V(), na(TC, {
			key: 1,
			genre: e.genre,
			catalog: e.artistCatalog,
			"enhance-profiles": e.enhanceArtistProfiles
		}, null, 8, [
			"genre",
			"catalog",
			"enhance-profiles"
		])) : i.value === "ideas" ? (V(), na(NC, {
			key: 2,
			genre: e.genre
		}, null, 8, ["genre"])) : i.value === "prompts" ? (V(), na(HC, {
			key: 3,
			genre: e.genre
		}, null, 8, ["genre"])) : (V(), H("div", {
			key: 4,
			innerHTML: a.value
		}, null, 8, pw))])])], 4));
	}
};
// src/vue/academy/legacyGenreDetailBridge.js
function hw({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_GENRE, n = document.getElementById("app");
	if (!n || !t || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-genre-detail");
		if (r?.target === a || (r &&= (r.unmount(), null), !a)) return;
		let o = t.snapshot();
		if (!o?.id) return;
		let s = e(a, mw, {
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
var gw = { class: "panel" }, _w = { class: "field" }, vw = ["value"], yw = ["value"], bw = { class: "form-grid" }, xw = { class: "field" }, Sw = ["value"], Cw = ["value"], ww = { class: "field" }, Tw = ["value"], Ew = ["value"], Dw = { class: "field" }, Ow = ["value"], kw = ["value"], Aw = { class: "field" }, jw = ["value"], Mw = ["value"], Nw = { class: "field" }, Pw = { for: "b-tempo" }, Fw = {
	id: "tempo-num",
	style: { color: "#ffa8d5" }
}, Iw = { class: "range" }, Lw = ["value"], Rw = { id: "bpm-output" }, zw = {
	class: "muted",
	style: { "font-size": "11px" }
}, Bw = { class: "field" }, Vw = ["value"], Hw = { class: "field" }, Uw = ["value"], Ww = { class: "checkrow" }, Gw = ["checked", "onChange"], Kw = {
	class: "panel",
	style: {
		position: "sticky",
		top: "20px"
	}
}, qw = {
	class: "output",
	id: "prompt-output"
}, Jw = { class: "counter" }, Yw = { id: "prompt-count" }, Xw = { class: "two-col" }, Zw = {
	class: "btn primary",
	type: "button",
	"data-action": "copy-prompt"
}, Qw = ["innerHTML"], $w = {
	class: "btn ghost",
	type: "button",
	"data-action": "save-prompt"
}, eT = ["innerHTML"], tT = {
	key: 0,
	class: "notice",
	"data-sb-vue-mixer-recap": ""
}, nT = {
	key: 1,
	class: "notice",
	"data-sb-vue-arranger-recap": ""
}, rT = { class: "list-pills" }, iT = {
	__name: "StudioBuilder",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ F(t.api.snapshot()), r = Ed();
		qn(n, (e) => r.publishStudioSummary(e), { immediate: !0 });
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
		return R(() => window.addEventListener("sunoboom:studio-updated", f)), Sr(() => window.removeEventListener("sunoboom:studio-updated", f)), (e, t) => (V(), H(B, null, [U("div", gw, [
			t[17] ||= U("h3", null, "Параметры трека", -1),
			U("div", _w, [t[8] ||= U("label", { for: "b-genre" }, "Жанр", -1), U("select", {
				id: "b-genre",
				value: i.value.genre,
				onChange: t[0] ||= (e) => p("genre", e.target.value)
			}, [(V(!0), H(B, null, z(n.value.genres, (e) => (V(), H("option", {
				key: e.id,
				value: e.id
			}, O(e.name), 9, yw))), 128))], 40, vw)]),
			U("div", bw, [
				U("div", xw, [t[9] ||= U("label", { for: "b-mood" }, "Настроение", -1), U("select", {
					id: "b-mood",
					value: i.value.mood,
					onChange: t[1] ||= (e) => p("mood", e.target.value)
				}, [(V(), H(B, null, z(s, ([e, t]) => U("option", {
					key: e,
					value: e
				}, O(t), 9, Cw)), 64))], 40, Sw)]),
				U("div", ww, [t[10] ||= U("label", { for: "b-vocal" }, "Вокал", -1), U("select", {
					id: "b-vocal",
					value: i.value.vocal,
					onChange: t[2] ||= (e) => p("vocal", e.target.value)
				}, [(V(), H(B, null, z(c, ([e, t]) => U("option", {
					key: e,
					value: e
				}, O(t), 9, Ew)), 64))], 40, Tw)]),
				U("div", Dw, [t[11] ||= U("label", { for: "b-lang" }, "Язык текста", -1), U("select", {
					id: "b-lang",
					value: i.value.language,
					onChange: t[3] ||= (e) => p("language", e.target.value)
				}, [(V(), H(B, null, z(l, ([e, t]) => U("option", {
					key: e,
					value: e
				}, O(t), 9, kw)), 64))], 40, Ow)]),
				U("div", Aw, [t[12] ||= U("label", { for: "b-energy" }, "Энергия", -1), U("select", {
					id: "b-energy",
					value: i.value.energy,
					onChange: t[4] ||= (e) => p("energy", e.target.value)
				}, [(V(), H(B, null, z(u, ([e, t]) => U("option", {
					key: e,
					value: e
				}, O(t), 9, Mw)), 64))], 40, jw)])
			]),
			U("div", Nw, [
				U("label", Pw, [
					t[13] ||= G("Темп · ", -1),
					U("span", Fw, O(i.value.tempo), 1),
					t[14] ||= G(" BPM", -1)
				]),
				U("div", Iw, [U("input", {
					type: "range",
					id: "b-tempo",
					min: "65",
					max: "200",
					step: "1",
					value: i.value.tempo,
					onInput: t[5] ||= (e) => p("tempo", Number(e.target.value))
				}, null, 40, Lw), U("output", Rw, O(i.value.tempo) + " BPM", 1)]),
				U("span", zw, " Обычно для «" + O(a.value.name) + "»: " + O(a.value.bpm[0]) + "–" + O(a.value.bpm[1]) + " BPM ", 1)
			]),
			U("div", Bw, [t[15] ||= U("label", { for: "b-theme" }, "Тема / история трека", -1), U("textarea", {
				id: "b-theme",
				rows: "2",
				value: i.value.theme,
				onInput: t[6] ||= (e) => p("theme", e.target.value),
				placeholder: "О чём будет песня?"
			}, null, 40, Vw)]),
			U("div", Hw, [t[16] ||= U("label", { for: "b-extra" }, "Дополнительные инструкции (необязательно)", -1), U("textarea", {
				id: "b-extra",
				rows: "2",
				value: i.value.extra,
				onInput: t[7] ||= (e) => p("extra", e.target.value),
				placeholder: "Например: memorable chorus, short guitar solo"
			}, null, 40, Uw)]),
			U("div", Ww, [(V(), H(B, null, z(d, ([e, t]) => U("label", { key: e }, [U("input", {
				type: "checkbox",
				checked: i.value[e],
				onChange: (t) => p(e, t.target.checked)
			}, null, 40, Gw), G(O(t), 1)])), 64))])
		]), U("div", Kw, [
			t[22] ||= U("div", { class: "eyebrow" }, "Готово к Suno", -1),
			t[23] ||= U("h3", null, "Твой промпт", -1),
			U("div", qw, O(o.value), 1),
			U("div", Jw, [t[18] ||= U("span", null, "Максимум 1000 символов", -1), U("b", Yw, O(o.value.length) + " / 1000", 1)]),
			U("div", Xw, [U("button", Zw, [U("span", {
				"aria-hidden": "true",
				innerHTML: n.value.icons.copy
			}, null, 8, Qw), t[19] ||= G(" Копировать ", -1)]), U("button", $w, [U("span", {
				"aria-hidden": "true",
				innerHTML: n.value.icons.save
			}, null, 8, eT), t[20] ||= G(" Сохранить ", -1)])]),
			t[24] ||= U("div", { class: "spacer" }, null, -1),
			I(r).mixerSummary.ready ? (V(), H("div", tT, [G(" Последний микс: " + O(I(r).mixerSummary.genreCount) + " жанра · " + O(I(r).mixerSummary.tempo) + " BPM · " + O(I(r).mixerSummary.promptLength) + " / 1000 символов. ", 1), t[21] ||= U("button", {
				type: "button",
				class: "link-action",
				"data-action": "nav",
				"data-nav": "mixer"
			}, "Перейти в Миксер →", -1)])) : K("", !0),
			I(r).arrangerSummary.ready ? (V(), H("div", nT, " Аранжировка: " + O(I(r).arrangerSummary.blockCount) + " блоков · " + O(I(r).arrangerSummary.barCount) + " тактов · средняя энергия " + O(I(r).arrangerSummary.averageEnergy) + "/5 · " + O(I(r).arrangerSummary.transitionCount) + " переходов. ", 1)) : K("", !0),
			t[25] ||= U("div", { class: "notice" }, [U("strong", null, "Подсказка:"), G(" промпт задаёт стиль, а текст песни можно вводить отдельно в Suno. Результат генерации может отличаться от запроса.")], -1),
			t[26] ||= U("div", { class: "spacer" }, null, -1),
			t[27] ||= U("div", { class: "info-label" }, "Музыкальный профиль", -1),
			U("div", rT, [
				U("span", null, O(a.value.name), 1),
				U("span", null, O(a.value.family), 1),
				U("span", null, O(a.value.bpm[0]) + "–" + O(a.value.bpm[1]) + " BPM", 1)
			])
		])], 64));
	}
};
// src/vue/studio/legacyStudioBridge.js
function aT({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_STUDIO, n = document.getElementById("app");
	if (!n || !t || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector(".studio-grid");
		if (r?.target === a || (r &&= (r.unmount(), null), !a || !t.snapshot())) return;
		let o = e(a, iT, { api: t });
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
var oT = { class: "heading" }, sT = {
	key: 0,
	class: "gm-muted",
	"data-sb-vue-studio-recap": ""
}, cT = { class: "gm-layout" }, lT = { class: "gm-panel" }, uT = { class: "gm-stack" }, dT = { class: "gm-row-top" }, fT = { class: "gm-rank" }, pT = { class: "gm-field gm-genre-select" }, mT = ["for"], hT = [
	"id",
	"value",
	"data-gm-genre"
], gT = ["label"], _T = ["value"], vT = ["data-gm-value"], yT = [
	"data-slot",
	"aria-label",
	"disabled"
], bT = { class: "gm-slider-line" }, xT = [
	"max",
	"value",
	"data-gm-weight",
	"aria-label"
], ST = { class: "gm-meter" }, CT = ["data-gm-meter"], wT = { class: "gm-sub" }, TT = { class: "gm-actions" }, ET = ["disabled"], DT = {
	class: "gm-mixture",
	"aria-label": "Доли музыкальных жанров"
}, OT = ["data-gm-mixbar", "title"], kT = { class: "gm-form-grid" }, AT = ["for"], jT = [
	"id",
	"value",
	"data-gm-setting"
], MT = ["value"], NT = { class: "gm-tempo" }, PT = ["checked"], FT = { class: "gm-tempo-row" }, IT = ["value", "disabled"], LT = { id: "gm-bpm" }, RT = { class: "gm-field" }, zT = ["value"], BT = { class: "gm-checks" }, VT = ["data-gm-setting", "checked"], HT = { class: "gm-panel gm-output-panel" }, UT = {
	class: "gm-output",
	id: "gm-prompt",
	"aria-live": "polite"
}, WT = { class: "gm-prompt-meta" }, GT = { id: "gm-count" }, KT = { class: "gm-field" }, qT = ["value"], JT = { class: "gm-saved-list" }, YT = {
	key: 0,
	class: "gm-muted"
}, XT = { class: "gm-saved-actions" }, ZT = ["data-id"], QT = ["data-id", "aria-label"], $T = {
	__name: "GenreMixer",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ F(t.api.snapshot()), r = Ed();
		qn(n, (e) => r.publishMixerSummary(e), { immediate: !0 });
		let i = q(() => n.value?.rows || []), a = q(() => n.value?.genres || []), o = q(() => n.value?.settings || {}), s = q(() => n.value?.options || {}), c = q(() => n.value?.saved || []), l = q(() => n.value?.prompt || ""), u = q(() => n.value?.tempo || 115), d = q(() => n.value?.title || "");
		function f() {
			let e = t.api.snapshot();
			e && (n.value = e);
		}
		R(() => window.addEventListener("sunoboom:mixer-updated", f)), Sr(() => window.removeEventListener("sunoboom:mixer-updated", f));
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
		return (e, t) => (V(), H(B, null, [U("header", oT, [
			t[1] ||= U("div", { class: "eyebrow" }, "Suno Studio · новый инструмент", -1),
			t[2] ||= U("h1", null, [G("Жанровый "), U("span", { class: "gm-highlight" }, "миксер")], -1),
			t[3] ||= U("p", null, "Соединяй от 2 до 4 жанров из Академии SUNOBOOM, задавай пропорции и создавай готовый Style-промпт для Suno.", -1),
			I(r).studioSummary.ready ? (V(), H("p", sT, [G(" Текущая Студия: " + O(I(r).studioSummary.tempo) + " BPM · " + O(I(r).studioSummary.promptLength) + " / 1000 символов. ", 1), t[0] ||= U("button", {
				type: "button",
				class: "link-action",
				"data-action": "nav",
				"data-nav": "studio"
			}, "Вернуться в Студию →", -1)])) : K("", !0)
		]), U("div", cT, [U("section", lT, [
			t[7] ||= U("div", { class: "gm-section-head" }, [U("div", null, [U("h2", null, "Формула звучания"), U("p", null, "Меняй жанры и двигай ползунки — сумма всегда равна 100%.")]), U("span", { class: "gm-total" }, "Σ 100%")], -1),
			U("div", uT, [(V(!0), H(B, null, z(i.value, (e, t) => (V(), H("article", {
				key: e.id,
				class: "gm-row",
				style: E({ "--gm-color": e.color })
			}, [
				U("div", dT, [
					U("span", fT, O(String(t + 1).padStart(2, "0")), 1),
					U("div", pT, [U("label", { for: "gm-genre-" + t }, "Музыкальное направление", 8, mT), U("select", {
						id: "gm-genre-" + t,
						value: e.id,
						"data-gm-genre": t
					}, [(V(!0), H(B, null, z(p(t), (e) => (V(), H("optgroup", {
						key: e.family,
						label: e.family
					}, [(V(!0), H(B, null, z(e.items, (e) => (V(), H("option", {
						key: e.id,
						value: e.id
					}, O(e.name), 9, _T))), 128))], 8, gT))), 128))], 8, hT)]),
					U("span", {
						class: "gm-percent",
						"data-gm-value": t
					}, O(e.weight) + "%", 9, vT),
					U("button", {
						type: "button",
						class: "gm-remove",
						"data-action": "gm-remove",
						"data-slot": t,
						"aria-label": "Убрать жанр " + e.name,
						title: "Убрать жанр",
						disabled: i.value.length <= 2
					}, "×", 8, yT)
				]),
				U("div", bT, [U("input", {
					type: "range",
					min: "5",
					max: 100 - 5 * (i.value.length - 1),
					step: "1",
					value: e.weight,
					"data-gm-weight": t,
					"aria-label": "Доля жанра " + e.name
				}, null, 8, xT), U("div", ST, [U("span", {
					"data-gm-meter": t,
					style: E({ width: e.weight + "%" })
				}, null, 12, CT)])]),
				U("p", wT, O(e.family) + " · " + O(e.tagline) + " · " + O(e.instruments), 1)
			], 4))), 128))]),
			U("div", TT, [U("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "gm-add",
				disabled: i.value.length >= 4
			}, "＋ Добавить жанр", 8, ET), t[4] ||= U("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "gm-equal"
			}, "Поровну", -1)]),
			U("div", DT, [(V(!0), H(B, null, z(i.value, (e) => (V(), H("span", {
				key: e.id,
				"data-gm-mixbar": e.id,
				style: E({
					width: e.weight + "%",
					background: e.color
				}),
				title: e.name + ": " + e.weight + "%"
			}, null, 12, OT))), 128))]),
			t[8] ||= U("p", { class: "gm-muted" }, "Проценты — творческий ориентир для генерации, а не гарантия точного соотношения в готовой музыке.", -1),
			t[9] ||= U("div", { class: "gm-divider" }, null, -1),
			t[10] ||= U("h2", null, "Характер композиции", -1),
			U("div", kT, [(V(!0), H(B, null, z(m.value, (e) => (V(), H("div", {
				key: e.key,
				class: "gm-field"
			}, [U("label", { for: "gm-" + e.key }, O(e.label), 9, AT), U("select", {
				id: "gm-" + e.key,
				value: o.value[e.key],
				"data-gm-setting": e.key
			}, [(V(!0), H(B, null, z(e.choices, ([e, t]) => (V(), H("option", {
				key: e,
				value: e
			}, O(t), 9, MT))), 128))], 8, jT)]))), 128))]),
			U("div", NT, [U("label", null, [U("input", {
				type: "checkbox",
				"data-gm-setting": "autoTempo",
				checked: o.value.autoTempo
			}, null, 8, PT), t[5] ||= G(" Определять темп по жанрам", -1)]), U("div", FT, [U("input", {
				id: "gm-tempo",
				type: "range",
				min: "65",
				max: "200",
				value: u.value,
				"data-gm-setting": "tempo",
				disabled: o.value.autoTempo
			}, null, 8, IT), U("b", LT, O(u.value) + " BPM", 1)])]),
			U("div", RT, [t[6] ||= U("label", { for: "gm-theme" }, "Тема песни (необязательно)", -1), U("textarea", {
				id: "gm-theme",
				rows: "2",
				maxlength: "170",
				"data-gm-setting": "theme",
				value: o.value.theme,
				placeholder: "Например: ночной город, встреча после долгой разлуки"
			}, null, 8, zT)]),
			U("div", BT, [(V(), H(B, null, z(h, ([e, t]) => U("label", { key: e }, [U("input", {
				type: "checkbox",
				"data-gm-setting": e,
				checked: o.value[e]
			}, null, 8, VT), G(" " + O(t), 1)])), 64))])
		]), U("aside", HT, [
			t[13] ||= U("div", { class: "eyebrow" }, "Результат микширования", -1),
			t[14] ||= U("h2", null, "Гибридный Style-промпт", -1),
			U("div", UT, O(l.value), 1),
			U("div", WT, [t[11] ||= U("span", null, "На английском · готово для Suno", -1), U("b", GT, O(l.value.length) + " / 1000", 1)]),
			t[15] ||= ua("<div class=\"gm-output-actions\"><button type=\"button\" class=\"btn primary\" data-action=\"gm-copy\">Копировать</button><button type=\"button\" class=\"btn ghost\" data-action=\"gm-to-studio\">В Suno Studio</button></div><button type=\"button\" class=\"btn ghost gm-full\" data-action=\"gm-save-prompt\">Сохранить в «Мои промпты»</button><div class=\"gm-divider\"></div><h3>Мои сочетания</h3>", 4),
			U("div", KT, [t[12] ||= U("label", { for: "gm-title" }, "Название сочетания", -1), U("input", {
				id: "gm-title",
				type: "text",
				maxlength: "90",
				"data-gm-title": "",
				value: d.value,
				placeholder: "Например: Северный электро-фолк"
			}, null, 8, qT)]),
			t[16] ||= U("button", {
				type: "button",
				class: "btn ghost gm-full",
				"data-action": "gm-save-mix"
			}, "Сохранить формулу", -1),
			U("div", JT, [c.value.length ? K("", !0) : (V(), H("p", YT, "Сохранённых сочетаний пока нет. Придумай свой микс и сохрани его.")), (V(!0), H(B, null, z(c.value, (e) => (V(), H("article", {
				key: e.id,
				class: "gm-saved"
			}, [U("div", null, [U("strong", null, O(e.title), 1), U("small", null, O(e.summary), 1)]), U("div", XT, [U("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "gm-load",
				"data-id": e.id
			}, "Открыть", 8, ZT), U("button", {
				type: "button",
				class: "btn danger small",
				"data-action": "gm-delete",
				"data-id": e.id,
				"aria-label": "Удалить " + e.title
			}, "×", 8, QT)])]))), 128))]),
			t[17] ||= U("p", { class: "gm-muted" }, "Сохраняется в этом браузере и входит в общую JSON-копию данных SUNOBOOM. Подключение к ИИ для смешивания не требуется.", -1)
		])])], 64));
	}
};
// src/vue/studio/legacyMixerBridge.js
function eE({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_MIXER, n = document.getElementById("app");
	if (!t || !n || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vue-mixer-root");
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
// src/vue/studio/PromptAuditor.vue
var tE = {
	class: "sbpa-tabs",
	role: "group",
	"aria-label": "Источник промпта"
}, nE = ["aria-pressed"], rE = ["aria-pressed"], iE = {
	key: 0,
	class: "sbpa-manual"
}, aE = ["value"], oE = ["value"], sE = ["value"], cE = {
	key: 1,
	class: "sbpa-context"
}, lE = {
	id: "sbpa-results",
	"aria-live": "polite"
}, uE = { class: "sbpa-scoreline" }, dE = {
	class: "sbpa-score",
	"aria-label": "Эвристическая оценка промпта"
}, fE = { class: "sbpa-score-info" }, pE = ["aria-valuenow"], mE = {
	key: 0,
	class: "sbpa-issues"
}, hE = {
	key: 1,
	class: "sbpa-clear"
}, gE = { class: "sbpa-actions" }, _E = {
	key: 0,
	type: "button",
	"data-sbpa-action": "load-studio"
}, vE = { id: "sbpa-proposal-slot" }, yE = {
	key: 0,
	class: "sbpa-proposal"
}, bE = { key: 0 }, xE = { key: 1 }, SE = { key: 2 }, CE = {
	key: 3,
	class: "sbpa-alert"
}, wE = ["value"], TE = {
	__name: "PromptAuditor",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ F(t.api.snapshot()), r = Ed();
		qn(n, (e) => r.publishAuditorSummary(e), { immediate: !0 });
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
		return R(() => window.addEventListener("sunoboom:auditor-updated", u)), Sr(() => window.removeEventListener("sunoboom:auditor-updated", u)), (e, t) => (V(), H(B, null, [
			t[10] ||= U("header", { class: "sbpa-head" }, [U("div", null, [
				U("span", { class: "sbpa-eyebrow" }, "SUNOBOOM · ПРОВЕРКА"),
				U("h2", null, "Интеллектуальный аудитор промптов"),
				U("p", null, "Ищет повторы, противоречия, перегрузку и особенности жанра до отправки в Suno.")
			]), U("span", { class: "sbpa-local" }, "Проверка по правилам · без API")], -1),
			U("div", tE, [U("button", {
				type: "button",
				"data-sbpa-action": "studio",
				class: D({ active: !i.value }),
				"aria-pressed": !i.value
			}, "Текущий промпт Studio", 10, nE), U("button", {
				type: "button",
				"data-sbpa-action": "manual",
				class: D({ active: i.value }),
				"aria-pressed": i.value
			}, "Свой текст / вставка", 10, rE)]),
			i.value ? (V(), H("div", iE, [
				t[0] ||= U("label", { for: "sbpa-text" }, "Текст промпта", -1),
				U("textarea", {
					id: "sbpa-text",
					rows: "5",
					spellcheck: "false",
					placeholder: "Вставь текст на русском или английском…",
					value: n.value.manual
				}, null, 8, aE),
				t[1] ||= U("label", { for: "sbpa-genre" }, "Жанр для сопоставления с Академией", -1),
				U("select", {
					id: "sbpa-genre",
					value: o.value
				}, [(V(!0), H(B, null, z(s.value, (e) => (V(), H("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, sE))), 128))], 8, oE)
			])) : (V(), H("p", cE, " Проверяется актуальный промпт конструктора. Изменения настроек Studio отражаются здесь автоматически. ")),
			U("div", lE, [U("div", uE, [
				U("div", dE, [G(O(a.value.score), 1), t[2] ||= U("small", null, "/ 100", -1)]),
				U("div", fE, [
					U("strong", null, O(a.value.status), 1),
					t[3] ||= U("span", null, "Оценка ориентировочная: проверяется структура текста, а не качество будущей музыки.", -1),
					U("div", {
						class: "sbpa-meter",
						role: "progressbar",
						"aria-label": "Оценка промпта",
						"aria-valuenow": a.value.score,
						"aria-valuemin": "0",
						"aria-valuemax": "100"
					}, [U("span", { style: E({ width: a.value.score + "%" }) }, null, 4)], 8, pE)
				]),
				U("div", { class: D(["sbpa-limit", { over: a.value.length > 1e3 }]) }, O(a.value.length) + " / 1000 символов ", 3)
			]), a.value.issues?.length ? (V(), H("ul", mE, [(V(!0), H(B, null, z(a.value.issues, (e, t) => (V(), H("li", {
				key: t,
				class: D(["sbpa-item", "sbpa-" + e.kind])
			}, [U("div", null, [
				U("strong", null, O(e.title), 1),
				U("p", null, O(e.detail), 1),
				U("small", null, O(e.fix), 1)
			])], 2))), 128))])) : (V(), H("p", hE, " Явных противоречий и повторов по проверяемым правилам не найдено. "))]),
			U("div", gE, [t[4] ||= U("button", {
				type: "button",
				"data-sbpa-action": "preview",
				class: "sbpa-primary"
			}, " Показать улучшенный вариант ", -1), i.value ? (V(), H("button", _E, " Вставить текущий промпт Studio ")) : K("", !0)]),
			U("div", vE, [c.value ? (V(), H("div", yE, [
				U("h4", null, [t[5] ||= G("Предлагаемый вариант ", -1), U("small", null, O(l.value.text.length) + " / 1000", 1)]),
				l.value.removed.length ? (V(), H("p", xE, "Удалено фрагментов: " + O(l.value.removed.length) + ". Проверь смысл до копирования.", 1)) : (V(), H("p", bE, "Удалять нечего: текст уже без точных повторов.")),
				l.value.removed.length ? (V(), H("details", SE, [t[6] ||= U("summary", null, "Что изменилось", -1), U("ul", null, [(V(!0), H(B, null, z(l.value.removed, (e, t) => (V(), H("li", { key: t }, [U("b", null, O(e.reason) + ":", 1), G(" " + O(e.part), 1)]))), 128))])])) : K("", !0),
				l.value.complete ? K("", !0) : (V(), H("p", CE, " Автоматического сокращения недостаточно. Уменьши текст вручную минимум на " + O(l.value.text.length - 1e3) + " символов. ", 1)),
				t[7] ||= U("label", { for: "sbpa-preview-text" }, "Редактируемый предпросмотр", -1),
				U("textarea", {
					id: "sbpa-preview-text",
					rows: "5",
					spellcheck: "false",
					value: l.value.text
				}, null, 8, wE),
				t[8] ||= U("div", { class: "sbpa-actions" }, [U("button", {
					type: "button",
					"data-sbpa-action": "copy-preview",
					class: "sbpa-primary"
				}, " Подтвердить и скопировать "), U("button", {
					type: "button",
					"data-sbpa-action": "close-preview"
				}, "Закрыть")], -1),
				t[9] ||= U("small", null, "Исходный промпт и параметры Studio не меняются. Копируется только текст предпросмотра после нажатия.", -1)
			])) : K("", !0)]),
			t[11] ||= U("p", { class: "sbpa-foot" }, " Аудитор не вызывает Gemini и не оценивает реальный звук. Жанровые отклонения могут быть творческим решением, а рекомендации не изменяют исходник без твоего действия. ", -1)
		], 64));
	}
};
// src/vue/studio/legacyAuditorBridge.js
function EE({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_AUDITOR, n = document.getElementById("app");
	if (!t || !n || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sbpa-auditor");
		if (r?.target === a || (r &&= (r.unmount(), null), !a || !t.snapshot())) return;
		let o = e(a, TE, { api: t });
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
var DE = ["data-sba-id", "data-sba-energy"], OE = { class: "sba-block-head" }, kE = ["data-sba-drag", "aria-label"], AE = { class: "sba-index" }, jE = {
	class: "sba-emoji",
	"aria-hidden": "true"
}, ME = { class: "sba-head-energy" }, NE = { class: "sba-block-actions" }, PE = ["data-id", "disabled"], FE = ["data-id", "disabled"], IE = ["data-id"], LE = ["data-id"], RE = { class: "sba-block-fields" }, zE = ["data-id", "value"], BE = ["value"], VE = ["data-id", "value"], HE = ["value"], UE = ["data-id", "value"], WE = ["value"], GE = { class: "sba-energy-field" }, KE = ["data-sba-output"], qE = ["value", "data-id"], JE = { class: "sba-instrument-field" }, YE = ["for"], XE = { class: "sba-instrument-row" }, ZE = [
	"id",
	"data-id",
	"value"
], QE = ["id", "innerHTML"], $E = ["id"], eD = { class: "sba-sound-head" }, tD = ["data-id"], nD = ["data-id"], rD = ["id"], iD = {
	key: 0,
	class: "sba-sound-back"
}, aD = ["data-id"], oD = [
	"data-sba-sound-search",
	"data-id",
	"value",
	"placeholder"
], sD = ["id"], cD = { class: "sba-sound-info" }, lD = { key: 0 }, uD = ["data-id", "data-genre-id"], dD = {
	key: 0,
	class: "sba-sound-none"
}, fD = { class: "sba-sound-group" }, pD = [
	"disabled",
	"aria-disabled",
	"data-id",
	"data-sound-value"
], mD = {
	key: 0,
	class: "sba-sound-none"
}, hD = {
	key: 1,
	class: "sba-sound-foot"
}, gD = ["data-id"], _D = {
	key: 0,
	class: "sba-custom-label"
}, vD = ["data-id", "value"], yD = ["innerHTML"], bD = ["data-id", "aria-label"], xD = {
	key: 0,
	class: "sba-empty"
}, SD = ["aria-label"], CD = [
	"data-sba-snake-id",
	"data-sba-energy",
	"aria-label",
	"title"
], wD = { class: "sba-snake-num" }, TD = {
	class: "sba-snake-icon",
	"aria-hidden": "true"
}, ED = { class: "sba-snake-title" }, DD = { class: "sba-snake-level" }, OD = ["title"], kD = {
	key: 0,
	class: "sba-snake-more"
}, AD = {
	key: 1,
	class: "sba-snake-empty"
}, jD = ["data-sba-hub-from"], MD = { class: "sba-transition-hub-route" }, ND = { class: "sba-transition-hub-number" }, PD = { class: "sba-transition-hub-names" }, FD = { class: "sba-transition-hub-controls" }, ID = [
	"data-id",
	"value",
	"aria-label"
], LD = ["value"], RD = [
	"data-id",
	"value",
	"aria-label"
], zD = ["value"], BD = [
	"data-id",
	"value",
	"aria-label"
], VD = ["value"], HD = { class: "sba-transition-hub-actions" }, UD = ["data-id", "title"], WD = ["data-id"], GD = {
	key: 1,
	class: "sba-transition-hub-empty"
}, KD = ["title"], qD = { class: "sba-chart-column" }, JD = {
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
		let t = e, n = /* @__PURE__ */ F(t.api.snapshot()), r = Ed();
		t.kind === "cards" && qn(n, (e) => r.publishArrangerSummary(e), { immediate: !0 });
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
		R(() => window.addEventListener("sunoboom:arranger-updated", h)), Sr(() => window.removeEventListener("sunoboom:arranger-updated", h));
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
		return (t, n) => e.kind === "cards" ? (V(), H(B, { key: 0 }, [(V(!0), H(B, null, z(i.value, (e, t) => (V(), H(B, { key: e.id }, [
			U("article", {
				class: "sba-block",
				"data-sba-id": e.id,
				"data-sba-energy": e.energy
			}, [U("div", OE, [
				U("span", {
					class: "sba-drag",
					draggable: "true",
					"data-sba-drag": e.id,
					title: "Перетащить блок",
					"aria-label": "Перетащить " + e.sectionName
				}, "⠿", 8, kE),
				U("span", AE, O(String(t + 1).padStart(2, "0")), 1),
				U("span", jE, O(e.icon), 1),
				U("strong", null, O(e.label), 1),
				U("span", ME, "Энергия " + O(e.energy) + "/5", 1),
				U("div", NE, [
					U("button", {
						type: "button",
						"data-sba-action": "up",
						"data-id": e.id,
						"aria-label": "Переместить вверх",
						disabled: t === 0
					}, "↑", 8, PE),
					U("button", {
						type: "button",
						"data-sba-action": "down",
						"data-id": e.id,
						"aria-label": "Переместить вниз",
						disabled: t === i.value.length - 1
					}, "↓", 8, FE),
					U("button", {
						type: "button",
						"data-sba-action": "duplicate",
						"data-id": e.id,
						"aria-label": "Дублировать блок"
					}, "⧉", 8, IE),
					U("button", {
						type: "button",
						"data-sba-action": "remove",
						"data-id": e.id,
						"aria-label": "Удалить блок"
					}, "×", 8, LE)
				])
			]), U("div", RE, [
				U("label", null, [n[0] ||= G("Раздел ", -1), U("select", {
					"data-sba-field": "type",
					"data-id": e.id,
					value: e.type
				}, [(V(!0), H(B, null, z(a.value, (e) => (V(), H("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, BE))), 128))], 8, zE)]),
				U("label", null, [n[1] ||= G("Тактов ", -1), U("select", {
					"data-sba-field": "bars",
					"data-id": e.id,
					value: e.bars
				}, [(V(), H(B, null, z(m, (e) => U("option", {
					key: e,
					value: e
				}, O(e), 9, HE)), 64))], 8, VE)]),
				U("label", null, [n[2] ||= G("Вокал ", -1), U("select", {
					"data-sba-field": "vocal",
					"data-id": e.id,
					value: e.vocal
				}, [(V(!0), H(B, null, z(o.value, (e) => (V(), H("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, WE))), 128))], 8, UE)]),
				U("label", GE, [
					n[3] ||= G("Энергия ", -1),
					U("output", { "data-sba-output": e.id }, O(e.energy) + "/5 · " + O(s.value[e.energy]), 9, KE),
					U("input", {
						type: "range",
						min: "1",
						max: "5",
						step: "1",
						value: e.energy,
						"data-sba-field": "energy",
						"data-id": e.id
					}, null, 8, qE)
				]),
				U("div", JE, [
					U("label", { for: "sba-instruments-" + e.id }, "Инструменты / приём", 8, YE),
					U("div", XE, [U("input", {
						type: "text",
						id: "sba-instruments-" + e.id,
						maxlength: "300",
						"data-sba-field": "instruments",
						"data-id": e.id,
						value: e.instruments,
						placeholder: "Введи вручную или выбери рекомендацию",
						autocomplete: "off"
					}, null, 8, ZE)]),
					U("div", {
						class: "sba-quick-sounds",
						id: "sba-quick-" + e.id,
						innerHTML: e.quickSounds
					}, null, 8, QE),
					e.soundPanel ? (V(), H("div", {
						key: 0,
						class: "sba-sound-panel",
						id: "sba-sound-panel-" + e.id,
						"aria-label": "Выбор инструментов и приёмов"
					}, [
						U("div", eD, [n[4] ||= U("strong", null, "Библиотека инструментов и приёмов", -1), U("button", {
							type: "button",
							"data-sba-action": "sound-close",
							"data-id": e.id,
							"aria-label": "Закрыть подбор"
						}, "×", 8, tD)]),
						U("button", {
							type: "button",
							class: "sba-sound-genre-trigger",
							"data-sba-action": "sound-switch-mode",
							"data-id": e.id
						}, [
							n[5] ||= G(" Жанр: ", -1),
							U("b", null, O(e.soundPanel.genreName), 1),
							n[6] ||= U("span", null, "⌄", -1)
						], 8, nD),
						U("div", { id: "sba-sound-body-" + e.id }, [
							e.soundPanel.mode === "genres" ? (V(), H("div", iD, [U("button", {
								type: "button",
								"data-sba-action": "sound-switch-mode",
								"data-id": e.id
							}, " ← К инструментам ", 8, aD)])) : K("", !0),
							U("input", {
								type: "search",
								class: "sba-sound-search",
								"data-sba-sound-search": e.soundPanel.mode,
								"data-id": e.id,
								value: e.soundPanel.query,
								placeholder: e.soundPanel.mode === "genres" ? "Поиск по всей Академии..." : "Поиск инструмента или приёма...",
								autocomplete: "off",
								"aria-label": "Поиск инструментов или жанров"
							}, null, 8, oD),
							U("div", {
								class: "sba-sound-list",
								id: "sba-sound-results-" + e.id
							}, [e.soundPanel.mode === "genres" ? (V(), H(B, { key: 0 }, [
								U("div", cD, [G(" Найдено жанров: " + O(e.soundPanel.total) + " ", 1), e.soundPanel.total > e.soundPanel.matches.length ? (V(), H("span", lD, " · уточни запрос ")) : K("", !0)]),
								(V(!0), H(B, null, z(e.soundPanel.matches, (t) => (V(), H("button", {
									key: t.id,
									type: "button",
									class: "sba-sound-genre-row",
									"data-sba-action": "sound-set-genre",
									"data-id": e.id,
									"data-genre-id": t.id
								}, [U("span", null, O(t.name), 1), U("small", null, O(t.family), 1)], 8, uD))), 128)),
								e.soundPanel.matches.length ? K("", !0) : (V(), H("p", dD, " Жанр не найден "))
							], 64)) : (V(), H(B, { key: 1 }, [(V(!0), H(B, null, z(e.soundPanel.groups, (t) => (V(), H(B, { key: t.title }, [U("div", fD, O(t.title), 1), (V(!0), H(B, null, z(t.items, (t) => (V(), H("button", {
								key: t.name,
								type: "button",
								class: "sba-sound-option",
								disabled: t.added,
								"aria-disabled": t.added,
								"data-sba-action": "sound-add",
								"data-id": e.id,
								"data-sound-value": t.name
							}, [U("span", null, O(t.name), 1), U("small", null, O(t.added ? "✓ Добавлено" : "+ Добавить"), 1)], 8, pD))), 128))], 64))), 128)), e.soundPanel.groups.length ? K("", !0) : (V(), H("p", mD, " Совпадений нет. Можно ввести инструмент вручную. "))], 64))], 8, sD),
							e.soundPanel.mode === "genres" ? K("", !0) : (V(), H("div", hD, [n[7] ||= U("span", null, "Нажми «Добавить», чтобы дополнить поле. Свой текст сохраняется.", -1), U("button", {
								type: "button",
								"data-sba-action": "sound-clear",
								"data-id": e.id
							}, " Очистить поле ", 8, gD)]))
						], 8, rD)
					], 8, $E)) : K("", !0)
				]),
				e.type === "custom" ? (V(), H("label", _D, [n[8] ||= G("Своё название ", -1), U("input", {
					type: "text",
					maxlength: "48",
					"data-sba-field": "customName",
					"data-id": e.id,
					value: e.customName,
					placeholder: "Название для тега Suno"
				}, null, 8, vD)])) : K("", !0)
			])], 8, DE),
			e.transitionHTML ? (V(), H("div", {
				key: 0,
				style: { display: "contents" },
				innerHTML: e.transitionHTML
			}, null, 8, yD)) : K("", !0),
			U("button", {
				type: "button",
				class: "sba-between-add",
				"data-sba-action": "insert-after",
				"data-id": e.id,
				"aria-label": "Добавить блок после " + e.label
			}, [...n[9] ||= [U("span", { "aria-hidden": "true" }, "＋", -1), G(" Добавить после ", -1)]], 8, bD)
		], 64))), 128)), i.value.length ? K("", !0) : (V(), H("div", xD, "Пока нет блоков. Добавь первый фрагмент снизу."))], 64)) : e.kind === "snake" ? (V(), H(B, { key: 1 }, [i.value.length ? (V(), H(B, { key: 0 }, [(V(), H(B, null, z([6, 3], (e) => U("div", {
			key: e,
			class: D(e === 6 ? "sba-snake-desktop" : "sba-snake-mobile"),
			role: "group",
			"aria-label": "Схема блоков: " + _.value
		}, [(V(!0), H(B, null, z(g(e), (e) => (V(), H("div", {
			key: e.id,
			class: D(["sba-snake-row", {
				"sba-snake-reverse": e.reverse,
				"sba-snake-continues": e.continued
			}])
		}, [(V(!0), H(B, null, z(e.items, (e) => (V(), H("button", {
			key: e.id,
			type: "button",
			draggable: "true",
			class: "sba-snake-chip",
			"data-sba-snake-id": e.id,
			"data-sba-energy": e.energy,
			"aria-label": "Переместить " + e.snakeLabel + ", позиция " + (e.index + 1) + " из " + i.value.length + ", энергия " + e.energy + "/5",
			title: e.index + 1 + ". " + e.snakeLabel + " · энергия " + e.energy + "/5 · перетащи для перестановки"
		}, [
			U("span", wD, O(e.index + 1), 1),
			U("span", TD, O(e.icon), 1),
			U("span", ED, O(e.snakeLabel), 1),
			U("span", DD, O(e.energy) + "/5", 1),
			e.hasTransition ? (V(), H("span", {
				key: 0,
				class: "sba-snake-transition",
				title: "Переход: " + e.transitionLabel,
				"aria-hidden": "true"
			}, "↝", 8, OD)) : K("", !0)
		], 8, CD))), 128))], 2))), 128))], 10, SD)), 64)), f.value.length < i.value.length ? (V(), H("p", kD, " … и ещё " + O(i.value.length - f.value.length) + " блоков ", 1)) : K("", !0)], 64)) : (V(), H("p", AD, "Добавь первый блок, и здесь появится схема композиции."))], 64)) : e.kind === "transitions" ? (V(), H(B, { key: 2 }, [c.value.length ? (V(!0), H(B, { key: 0 }, z(p.value, (e) => (V(), H("div", {
			key: e.id,
			class: D(["sba-transition-hub-row", { "sba-transition-hub-active": e.current.type !== "none" }]),
			"data-sba-hub-from": e.id
		}, [
			U("div", MD, [U("span", ND, O(e.index + 1) + " → " + O(e.index + 2), 1), U("span", PD, [
				G(O(e.from) + " ", 1),
				n[10] ||= U("b", null, "→", -1),
				G(" " + O(e.to), 1)
			])]),
			U("div", FD, [
				U("label", null, [n[11] ||= G("Эффект ", -1), U("select", {
					"data-sba-transition": "type",
					"data-id": e.id,
					value: e.current.type,
					"aria-label": "Переход " + (e.index + 1) + " к " + (e.index + 2)
				}, [(V(!0), H(B, null, z(l.value, (e) => (V(), H("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, LD))), 128))], 8, ID)]),
				U("label", null, [n[12] ||= G("Длина ", -1), U("select", {
					"data-sba-transition": "length",
					"data-id": e.id,
					value: e.current.length,
					"aria-label": "Длительность перехода " + (e.index + 1)
				}, [(V(!0), H(B, null, z(u.value, (e) => (V(), H("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, zD))), 128))], 8, RD)]),
				U("label", null, [n[13] ||= G("Сила ", -1), U("select", {
					"data-sba-transition": "strength",
					"data-id": e.id,
					value: e.current.strength,
					"aria-label": "Выраженность перехода " + (e.index + 1)
				}, [(V(!0), H(B, null, z(d.value, (e) => (V(), H("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, VD))), 128))], 8, BD)])
			]),
			U("div", HD, [U("button", {
				type: "button",
				"data-sba-action": "transition-suggest",
				"data-id": e.id,
				title: "Совет: " + e.advice
			}, "✧ Совет", 8, UD), U("button", {
				type: "button",
				"data-sba-action": "transition-hub-jump",
				"data-id": e.id
			}, "Подробнее ↓", 8, WD)])
		], 10, jD))), 128)) : (V(), H("p", GD, "Добавь второй блок, и здесь можно будет настроить переходы."))], 64)) : e.kind === "energy" ? (V(!0), H(B, { key: 3 }, z(i.value, (e) => (V(), H("div", {
			key: e.id,
			class: "sba-chart-step",
			title: e.label + " · " + e.energy + "/5",
			style: E({
				"--energy": e.energy,
				"--bar-width": 100 / i.value.length + "%"
			})
		}, [U("div", qD, [U("i", { style: E({ "--level": e.energy }) }, null, 4)]), U("small", null, O(e.icon), 1)], 12, KD))), 128)) : K("", !0);
	}
}, YD = ["aria-expanded"], XD = { id: "sba-picked-label" }, ZD = ["hidden"], QD = { class: "sba-preset-search-row" }, $D = ["value"], eO = {
	class: "sba-preset-filters",
	role: "group",
	"aria-label": "Тип вариантов"
}, tO = ["data-filter", "aria-pressed"], nO = {
	id: "sba-preset-results",
	class: "sba-preset-results",
	role: "listbox",
	"aria-label": "Доступные шаблоны и жанры"
}, rO = { class: "sba-preset-group-title" }, iO = { key: 0 }, aO = ["aria-selected", "data-choice"], oO = {
	key: 0,
	class: "sba-preset-no-results"
}, sO = {
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
		return R(() => window.addEventListener("sunoboom:arranger-updated", i)), Sr(() => window.removeEventListener("sunoboom:arranger-updated", i)), (e, t) => (V(), H(B, null, [
			t[2] ||= U("span", { class: "sba-preset-caption" }, "Шаблон композиции / жанр", -1),
			U("button", {
				type: "button",
				id: "sba-presets",
				class: "sba-preset-trigger",
				"data-sba-action": "menu-toggle",
				"aria-haspopup": "dialog",
				"aria-expanded": r.value.open,
				"aria-controls": "sba-preset-menu"
			}, [U("span", XD, O(r.value.selected), 1), t[0] ||= U("span", {
				class: "sba-preset-chevron",
				"aria-hidden": "true"
			}, "⌄", -1)], 8, YD),
			U("div", {
				id: "sba-preset-menu",
				class: "sba-preset-menu",
				role: "dialog",
				"aria-label": "Поиск шаблона или жанра",
				hidden: !r.value.open
			}, [
				U("div", QD, [U("input", {
					type: "search",
					id: "sba-preset-search",
					autocomplete: "off",
					value: r.value.query,
					placeholder: "Найти жанр или шаблон...",
					"aria-label": "Поиск жанра"
				}, null, 8, $D), t[1] ||= U("button", {
					type: "button",
					"data-sba-action": "menu-close",
					"aria-label": "Закрыть меню"
				}, "×", -1)]),
				U("div", eO, [(V(!0), H(B, null, z([
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
				], (e) => (V(), H("button", {
					key: e.id,
					type: "button",
					"data-sba-action": "menu-filter",
					"data-filter": e.id,
					"aria-pressed": r.value.filter === e.id
				}, O(e.title), 9, tO))), 128))]),
				U("div", nO, [(V(!0), H(B, null, z(r.value.groups, (e) => (V(), H(B, { key: e.title }, [U("div", rO, [G(O(e.title) + " ", 1), e.count === null ? K("", !0) : (V(), H("small", iO, O(e.count), 1))]), (V(!0), H(B, null, z(e.items, (e) => (V(), H("button", {
					key: e.key,
					type: "button",
					role: "option",
					"aria-selected": e.key === r.value.selectedKey,
					"data-sba-action": "menu-choose",
					"data-choice": e.key
				}, [U("span", null, O(e.title), 1), U("small", null, O(e.subtitle), 1)], 8, aO))), 128))], 64))), 128)), r.value.groups.length ? K("", !0) : (V(), H("p", oO, " Ничего не найдено. Попробуй другое название или направление. "))])
			], 8, ZD)
		], 64));
	}
}, cO = {
	class: "sba-preview-tabs",
	role: "group",
	"aria-label": "Тип результата"
}, lO = ["aria-pressed"], uO = ["aria-pressed"], dO = ["value"], fO = {
	class: "sba-preview-count",
	id: "sba-preview-count"
}, pO = {
	id: "sba-transfer-confirm",
	"aria-live": "polite"
}, mO = {
	key: 0,
	class: "sba-transfer-preview"
}, hO = ["hidden"], gO = [
	["#sba-cards", "cards"],
	["#sba-snake-track", "snake"],
	["#sba-transition-hub-list", "transitions"],
	["#sba-energy-chart", "energy"],
	[
		".sba-preset-picker",
		"picker",
		sO
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
				return R(() => window.addEventListener("sunoboom:arranger-updated", i)), Sr(() => window.removeEventListener("sunoboom:arranger-updated", i)), (e, t) => (V(), H(B, null, [
					t[3] ||= U("div", { class: "sba-result-header" }, [
						U("span", { class: "sba-eyebrow" }, "ПРЕДПРОСМОТР"),
						U("h3", null, "Результат для Suno"),
						U("p", null, "Lyrics — теги по секциям; Style — короткое описание динамики.")
					], -1),
					U("div", cO, [U("button", {
						type: "button",
						"data-sba-action": "tab",
						"data-tab": "lyrics",
						"aria-pressed": r.value.tab === "lyrics"
					}, "Теги Lyrics", 8, lO), U("button", {
						type: "button",
						"data-sba-action": "tab",
						"data-tab": "style",
						"aria-pressed": r.value.tab === "style"
					}, "Style", 8, uO)]),
					U("textarea", {
						id: "sba-preview",
						readonly: "",
						spellcheck: "false",
						"aria-label": "Готовые теги структуры песни",
						value: r.value.text
					}, null, 8, dO),
					U("div", fO, O(r.value.count), 1),
					t[4] ||= U("div", { class: "sba-result-actions" }, [U("button", {
						type: "button",
						class: "sba-btn sba-copy-btn",
						"data-sba-action": "copy"
					}, " Копировать результат "), U("button", {
						type: "button",
						class: "sba-btn sba-transfer-btn",
						"data-sba-action": "prepare-transfer"
					}, " Перенести стиль в Studio ")], -1),
					U("div", pO, [r.value.transfer ? (V(), H("div", mO, [
						t[0] ||= U("strong", null, "Предпросмотр переноса в Style", -1),
						t[1] ||= U("p", null, "Добавим описание аранжировки в дополнительные инструкции Suno Studio, не удаляя твои записи.", -1),
						U("code", null, O(r.value.transfer.candidate), 1),
						t[2] ||= U("div", { class: "sba-preview-buttons" }, [U("button", {
							type: "button",
							"data-sba-action": "transfer-accept"
						}, "Подтвердить перенос"), U("button", {
							type: "button",
							"data-sba-action": "transfer-cancel"
						}, "Отмена")], -1),
						U("small", null, "Итоговый промпт Studio: " + O(r.value.transfer.promptLength) + " / 1000 символов", 1)
					])) : K("", !0)]),
					U("p", {
						id: "sba-message",
						class: "sba-message",
						role: "status",
						"aria-live": "polite",
						hidden: !r.value.message
					}, O(r.value.message), 9, hO),
					t[5] ||= U("div", { class: "sba-help" }, [
						U("strong", null, "Как применять"),
						U("p", null, [
							G("Теги секций вставляй в поле "),
							U("b", null, "Lyrics"),
							G(" в Suno рядом с текстом песни. Краткую динамику можно добавить в "),
							U("b", null, "Style"),
							G(" через Suno Studio после подтверждения.")
						]),
						U("p", null, "Ориентир длительности рассчитан по 4/4 и BPM Studio, это не гарантия точной длины аудио.")
					], -1)
				], 64));
			}
		}
	]
];
function _O({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ARRANGER, n = document.getElementById("app");
	if (!n || !t || typeof t.snapshot != "function") return () => {};
	let r = /* @__PURE__ */ new Map(), i = !1;
	function a() {
		if (!i) for (let [i, a, o = JD] of gO) {
			let s = n.querySelector(i), c = r.get(a);
			if (c?.target === s || (c && (c.unmount(), r.delete(a)), !s || !t.snapshot())) continue;
			let l = e(s, o, o === JD ? {
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
var vO = {
	key: 0,
	class: "sb-poetry-empty"
}, yO = { class: "sb-poetry-stats" }, bO = { class: "sb-poetry-subline" }, xO = { class: "sb-poetry-sections" }, SO = { class: "sb-poetry-stanzas" }, CO = { class: "sb-poetry-stanza-name" }, wO = { class: "sb-poetry-stanza-data" }, TO = { class: "sb-poetry-lines" }, EO = { class: "sb-poetry-line-main" }, DO = { class: "sb-poetry-index" }, OO = { class: "sb-poetry-verse" }, kO = {
	class: "sb-poetry-syllable",
	title: "Оценка слогов"
}, AO = ["title"], jO = {
	key: 0,
	class: "sb-poetry-footnote"
}, MO = {
	key: 1,
	class: "sb-poetry-words"
}, NO = { class: "sb-poetry-tips" }, PO = {
	__name: "PoetryAnalysis",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ F(t.api.analysis()), r = q(() => n.value || {
			analyzed: !1,
			message: ""
		});
		function i() {
			let e = t.api.analysis();
			e && (n.value = e);
		}
		return R(() => window.addEventListener("sunoboom:poetry-updated", i)), Sr(() => window.removeEventListener("sunoboom:poetry-updated", i)), (e, t) => r.value.analyzed ? (V(), H(B, { key: 1 }, [
			U("div", yO, [(V(!0), H(B, null, z(r.value.stats, (e) => (V(), H("div", {
				key: e.label,
				class: "sb-poetry-stat"
			}, [U("strong", null, O(e.value), 1), U("span", null, O(e.label), 1)]))), 128))]),
			U("p", bO, " Диапазон: " + O(r.value.lower) + "–" + O(r.value.upper) + " слогов на строку · меток ударения: " + O(r.value.markedStress) + ". ", 1),
			U("div", xO, [t[1] ||= U("h4", null, "Строфы и предполагаемая рифмовка", -1), U("div", SO, [(V(!0), H(B, null, z(r.value.stanzas, (e) => (V(), H("div", {
				key: e.id,
				class: "sb-poetry-stanza"
			}, [U("div", CO, O(e.section) + " · строфа " + O(e.position), 1), U("div", wO, [
				G(" Схема " + O(e.scheme) + " ", 1),
				t[0] ||= U("span", null, "·", -1),
				G(" разброс " + O(e.spread) + " сл. ", 1)
			])]))), 128))])]),
			t[4] ||= U("div", { class: "sb-poetry-lines-head" }, [U("strong", null, "Построчный анализ"), U("span", null, "Слоги · рифма")], -1),
			U("div", TO, [(V(!0), H(B, null, z(r.value.lines, (e) => (V(), H("div", {
				key: e.number,
				class: "sb-poetry-line"
			}, [
				U("div", EO, [U("span", DO, O(e.number) + ".", 1), U("span", OO, O(e.text), 1)]),
				U("div", kO, [U("span", null, O(e.syllables) + " сл.", 1), U("i", { style: E({ width: e.width + "%" }) }, null, 4)]),
				U("span", {
					class: D(["sb-poetry-letter", { "sb-poetry-letter-match": e.rhyme }]),
					title: e.repeat ? "Совпадение последнего слова" : e.rhyme ? "Предполагаемая рифма" : "Метка окончания"
				}, O(e.mark), 11, AO)
			]))), 128))]),
			r.value.rowCount > 120 ? (V(), H("p", jO, " Показаны первые 120 строк из " + O(r.value.rowCount) + "; статистика рассчитана по всему тексту. ", 1)) : K("", !0),
			r.value.frequent.length ? (V(), H("div", MO, [t[2] ||= U("strong", null, "Повторяющиеся слова:", -1), (V(!0), H(B, null, z(r.value.frequent, (e) => (V(), H("span", { key: e.word }, O(e.word) + " · " + O(e.count), 1))), 128))])) : K("", !0),
			U("div", NO, [t[3] ||= U("h4", null, "На что обратить внимание", -1), U("ul", null, [(V(!0), H(B, null, z(r.value.suggestions, (e, t) => (V(), H("li", { key: t }, O(e), 1))), 128))])]),
			t[5] ||= U("p", { class: "sb-poetry-footnote" }, " Анализ ориентировочный: счёт гласных не равен точной метрической скансии, совпадение окончаний не гарантирует рифму, а вокальная удобность зависит от темпа и мелодии. Исходный текст автоматически не изменяется. ", -1)
		], 64)) : (V(), H("p", vO, O(r.value.message), 1));
	}
}, FO = {
	key: 0,
	class: "sb-stress-ambig-clear"
}, IO = { class: "sb-stress-ambig-heading" }, LO = { class: "sb-stress-ambig-variants" }, RO = ["data-word", "data-variant"], zO = {
	key: 0,
	class: "sb-poetry-small"
}, BO = {
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
		});
		function i() {
			n.value = t.api.ambiguities();
		}
		return R(() => window.addEventListener("sunoboom:poetry-stress-updated", i)), Sr(() => window.removeEventListener("sunoboom:poetry-stress-updated", i)), (e, t) => r.value.count ? (V(), H(B, { key: 1 }, [
			U("div", IO, " 🔴 Требуют проверки: " + O(r.value.count) + " вхождений (" + O(r.value.total) + " разных слов). Нажми нужный вариант для каждого вхождения. ", 1),
			(V(!0), H(B, null, z(r.value.words, (e) => (V(), H("div", {
				key: e.key,
				class: "sb-stress-ambig-choice"
			}, [U("strong", null, O(e.key) + O(e.count > 1 ? " ×" + e.count : ""), 1), U("div", LO, [(V(!0), H(B, null, z(e.variants, (t) => (V(), H("button", {
				key: t,
				type: "button",
				"data-action": "sb-poetry-stress-choice",
				"data-word": e.key,
				"data-variant": t,
				title: "Указать ударение для следующего вхождения"
			}, O(t), 9, RO))), 128))])]))), 128)),
			r.value.total > 30 ? (V(), H("p", zO, " Показаны первые 30 разных слов; другие можно исправить вручную. ")) : K("", !0)
		], 64)) : (V(), H("p", FO, " ✓ Все найденные неоднозначные слова проверены. "));
	}
};
// src/vue/poetry/legacyPoetryBridge.js
function VO({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_POETRY, n = document.getElementById("app");
	if (!t || !n) return () => {};
	let r = !1, i = /* @__PURE__ */ new Map();
	function a() {
		if (r) return;
		let a = [[
			"analysis",
			"#sb-poetry-result",
			PO
		], [
			"ambiguities",
			"#sb-poetry-ambiguous-choices",
			BO
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
var HO = { class: "sb-vt-field" }, UO = ["value"], WO = ["value"], GO = {
	class: "sb-vt-hint",
	id: "sb-vt-mode-hint"
}, KO = { class: "sb-vt-grid" }, qO = { class: "sb-vt-field" }, JO = ["value"], YO = ["value"], XO = { class: "sb-vt-field" }, ZO = ["value"], QO = ["value"], $O = {
	key: 0,
	class: "sb-vt-field"
}, ek = ["value"], tk = ["value"], nk = { class: "sb-vt-intensity" }, rk = { class: "sb-vt-between" }, ik = { id: "sb-vt-intensity-label" }, ak = ["value"], ok = { class: "sb-vt-options" }, sk = ["data-vt-pref", "checked"], ck = {
	key: 1,
	class: "sb-vt-consent",
	id: "sb-vt-consent-row"
}, lk = { class: "sb-vt-buttons" }, uk = ["disabled"], dk = {
	id: "sb-vt-result",
	"aria-live": "polite"
}, fk = {
	key: 0,
	class: "sb-vt-draft"
}, pk = { class: "sb-vt-draft-head" }, mk = { class: "sb-vt-method" }, hk = { class: "sb-vt-section-list" }, gk = { class: "sb-vt-section-heading" }, _k = { class: "sb-vt-section-controls" }, vk = [
	"data-vt-preset",
	"value",
	"aria-label"
], yk = ["value"], bk = [
	"data-vt-cue",
	"value",
	"aria-label"
], xk = { class: "sb-vt-field" }, Sk = ["value"], Ck = {
	class: "sb-vt-small",
	id: "sb-vt-preview-state"
}, wk = {
	__name: "PerformanceTags",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ F(t.api.snapshot()), r = q(() => n.value?.prefs || {}), i = q(() => n.value?.draft || null), a = [
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
		return R(() => window.addEventListener("sunoboom:tags-updated", l)), Sr(() => window.removeEventListener("sunoboom:tags-updated", l)), (e, t) => (V(), H(B, null, [
			t[12] ||= U("div", { class: "sb-vt-header" }, [U("span", { class: "sb-vt-symbol" }, "🎭"), U("div", null, [U("h3", null, "Генератор тегов исполнения"), U("p", null, "Вокальная драматургия по секциям. Без изменения слов песни; результат можно проверить и применить только вручную.")])], -1),
			U("div", HO, [t[0] ||= U("label", { for: "sb-vt-mode" }, "Способ генерации", -1), U("select", {
				id: "sb-vt-mode",
				"data-vt-pref": "mode",
				value: r.value.mode
			}, [(V(), H(B, null, z(a, ([e, t]) => U("option", {
				key: e,
				value: e
			}, O(t), 9, WO)), 64))], 8, UO)]),
			U("p", GO, O(n.value.modeHint), 1),
			U("div", KO, [U("div", qO, [t[1] ||= U("label", { for: "sb-vt-source" }, "Источник текста", -1), U("select", {
				id: "sb-vt-source",
				"data-vt-pref": "source",
				value: r.value.source
			}, [(V(), H(B, null, z(s, ([e, t]) => U("option", {
				key: e,
				value: e
			}, O(t), 9, YO)), 64))], 8, JO)]), U("div", XO, [t[2] ||= U("label", { for: "sb-vt-density" }, "Детализация метатегов", -1), U("select", {
				id: "sb-vt-density",
				"data-vt-pref": "density",
				value: r.value.density
			}, [(V(), H(B, null, z(o, ([e, t]) => U("option", {
				key: e,
				value: e
			}, O(t), 9, QO)), 64))], 8, ZO)])]),
			n.value.artists?.length ? (V(), H("div", $O, [t[4] ||= U("label", { for: "sb-vt-artist" }, "Учесть «ДНК артиста» (необязательно)", -1), U("select", {
				id: "sb-vt-artist",
				"data-vt-pref": "artistId",
				value: r.value.artistId
			}, [t[3] ||= U("option", { value: "" }, "Без привязки к артисту", -1), (V(!0), H(B, null, z(n.value.artists, (e) => (V(), H("option", {
				key: e.id,
				value: e.id
			}, O(e.name), 9, tk))), 128))], 8, ek)])) : K("", !0),
			U("div", nk, [
				U("div", rk, [t[5] ||= U("label", { for: "sb-vt-intensity" }, "Максимальная интенсивность исполнения", -1), U("strong", ik, O(r.value.intensity) + " / 5", 1)]),
				U("input", {
					type: "range",
					id: "sb-vt-intensity",
					min: "1",
					max: "5",
					step: "1",
					value: r.value.intensity,
					"data-vt-pref": "intensity"
				}, null, 8, ak),
				t[6] ||= U("div", { class: "sb-vt-between sb-vt-scale" }, [U("span", null, "Сдержанная"), U("span", null, "Экспрессивная")], -1)
			]),
			U("div", ok, [(V(), H(B, null, z(c, ([e, t]) => U("label", { key: e }, [U("input", {
				type: "checkbox",
				"data-vt-pref": e,
				checked: r.value[e]
			}, null, 8, sk), G(" " + O(t), 1)])), 64))]),
			n.value.hasEndpoint ? (V(), H("label", ck, [...t[7] ||= [U("input", {
				type: "checkbox",
				id: "sb-vt-consent"
			}, null, -1), G(" Разрешаю отправить выбранный текст песни на защищённый сервер для анализа Gemini. ", -1)]])) : K("", !0),
			U("div", lk, [U("button", {
				type: "button",
				class: "btn primary",
				"data-action": "vt-generate",
				disabled: n.value.busy
			}, "✨ Создать предпросмотр", 8, uk), t[8] ||= U("span", { class: "sb-vt-note" }, "Никакого автоматического применения к Lyrics.", -1)]),
			U("div", {
				id: "sb-vt-notice",
				class: D(["sb-vt-notice", n.value.notice?.kind]),
				role: "status",
				"aria-live": "polite"
			}, O(n.value.notice?.text), 3),
			U("div", dk, [i.value ? (V(), H("div", fk, [
				U("div", pk, [U("h4", null, "Предпросмотр · " + O(i.value.sections.length) + " секций", 1), U("span", mk, O(i.value.method), 1)]),
				t[10] ||= U("p", { class: "sb-vt-small" }, " Проверь каждую секцию. Теги можно выбрать из списка или переписать вручную. Оригинальные строки песни остаются неизменными. ", -1),
				U("div", hk, [(V(!0), H(B, null, z(i.value.sections, (e, t) => (V(), H("div", {
					key: e.id,
					class: "sb-vt-section"
				}, [U("div", gk, [U("strong", null, O(e.label), 1), U("span", null, O(t + 1) + "/" + O(i.value.sections.length), 1)]), U("div", _k, [U("select", {
					"data-vt-preset": t,
					value: i.value.tags[t],
					"aria-label": "Готовые теги для " + e.label
				}, [(V(!0), H(B, null, z(n.value.presets, ([e, t]) => (V(), H("option", {
					key: e,
					value: e
				}, O(t), 9, yk))), 128))], 8, vk), U("input", {
					"data-vt-cue": t,
					value: i.value.tags[t],
					maxlength: "165",
					placeholder: "Например: Warm Emotional Vocals",
					"aria-label": "Тег исполнения " + e.label
				}, null, 8, bk)])]))), 128))]),
				U("div", xk, [t[9] ||= U("label", { for: "sb-vt-preview" }, " Готовый Lyrics — разрешено редактировать только инструкции, не слова песни ", -1), U("textarea", {
					id: "sb-vt-preview",
					spellcheck: "false",
					rows: "13",
					maxlength: "25000",
					value: i.value.preview
				}, null, 8, Sk)]),
				U("p", Ck, O(n.value.previewState), 1),
				t[11] ||= ua("<div class=\"sb-vt-draft-actions\"><button type=\"button\" class=\"btn primary\" data-action=\"vt-apply\"> ✓ Применить к Lyrics </button><button type=\"button\" class=\"btn ghost\" data-action=\"vt-copy\"> Копировать предпросмотр </button><button type=\"button\" class=\"btn ghost\" data-action=\"vt-refresh\"> Обновить предпросмотр </button><button type=\"button\" class=\"btn ghost\" data-action=\"vt-cancel\"> Отменить </button></div>", 1)
			])) : K("", !0)])
		], 64));
	}
};
// src/vue/poetry/legacyTagsBridge.js
function Tk({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_TAGS, n = document.getElementById("app");
	if (!t || !n || typeof t.snapshot != "function") return () => {};
	let r = null, i = !1;
	function a() {
		if (i) return;
		let a = n.querySelector("#sb-vt-workbench");
		if (r?.target === a || (r &&= (r.unmount(), null), !a || !t.snapshot())) return;
		let o = e(a, wk, { api: t });
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
var Ek = gc(), Dk = Ed(Ek), Ok = /* @__PURE__ */ new WeakMap();
function kk(e) {
	return typeof document > "u" ? null : typeof e == "string" ? document.querySelector(e) : e;
}
function $(e, t, n = {}, { vueRouter: r = !1 } = {}) {
	let i = kk(e);
	if (!i || i.nodeType !== 1 || !t) return null;
	let a = Ok.get(i);
	a && a.unmount();
	let o = i.innerHTML, s = Yo(qb, {
		component: t,
		componentProps: n
	});
	s.use(Ek), r && s.use(ju);
	try {
		s.mount(i);
	} catch (e) {
		return i.innerHTML = o, console.warn("[SUNOBOOM] Vue mount failed; legacy navigation retained.", e), null;
	}
	return Ok.set(i, s), () => {
		Ok.get(i) === s && (s.unmount(), Ok.delete(i));
	};
}
function Ak(e) {
	let t = kk(e);
	if (!t) return;
	let n = Ok.get(t);
	n && (n.unmount(), Ok.delete(t));
}
function jk() {
	return Kb({ sharedUi: Dk });
}
function Mk() {
	return lx({
		mountVueFeature: $,
		unmountVueFeature: Ak,
		sharedUi: Dk
	});
}
function Nk() {
	return Yx({ mountVueFeature: $ });
}
function Pk() {
	return hw({ mountVueFeature: $ });
}
function Fk() {
	return aT({ mountVueFeature: $ });
}
function Ik() {
	return eE({ mountVueFeature: $ });
}
function Lk() {
	return EE({ mountVueFeature: $ });
}
function Rk() {
	return _O({ mountVueFeature: $ });
}
function zk() {
	return VO({ mountVueFeature: $ });
}
function Bk() {
	return Tk({ mountVueFeature: $ });
}
function Vk() {
	return Gb({ mountVueFeature: $ });
}
function Hk() {
	return fs({ mountVueFeature: $ });
}
function Uk() {
	return jf({ mountVueFeature: $ });
}
function Wk() {
	return wf({ mountVueFeature: $ });
}
function Gk() {
	return yp({ mountVueFeature: $ });
}
function Kk() {
	return Mp({ mountVueFeature: $ });
}
function qk() {
	return Dm({ mountVueFeature: $ });
}
function Jk() {
	return lh({ mountVueFeature: $ });
}
function Yk() {
	return gh({ mountVueFeature: $ });
}
function Xk() {
	return Hh({ mountVueFeature: $ });
}
function Zk() {
	return gg({ mountVueFeature: $ });
}
function Qk() {
	return Rg({ mountVueFeature: $ });
}
function $k() {
	return w_({ mountVueFeature: $ });
}
function eA() {
	return bv({ mountVueFeature: $ });
}
function tA() {
	return Dv({ mountVueFeature: $ });
}
function nA() {
	return fy({ mountVueFeature: $ });
}
function rA() {
	return yy({ mountVueFeature: $ });
}
function iA() {
	return Jy({ mountVueFeature: $ });
}
function aA() {
	return Cb({ mountVueFeature: $ });
}
function oA() {
	return Zs({ mountVueFeature: $ });
}
function sA() {
	return uf({
		mountVueFeature: $,
		sharedUi: Dk
	});
}
function cA() {
	return RS({ mountVueFeature: $ });
}
export { $ as mountVueFeature, Nk as startLegacyAcademy, Qk as startLegacyAccountSettings, jk as startLegacyAppearance, Rk as startLegacyArranger, Xk as startLegacyArtistDNA, Zk as startLegacyArtistDNAEditor, Yk as startLegacyArtistManager, Lk as startLegacyAuditor, Pk as startLegacyGenreDetail, cA as startLegacyGenreTree, sA as startLegacyHomeDashboard, Hk as startLegacyIdeaCollections, Vk as startLegacyIdeaEditor, Gk as startLegacyLibrary, Ik as startLegacyMixer, Mk as startLegacyNavigation, eA as startLegacyPlayerAB, $k as startLegacyPlayerLab, zk as startLegacyPoetry, nA as startLegacyProducerSongDetail, tA as startLegacyProducerSongList, Wk as startLegacyPromptCollection, Uk as startLegacyPromptEditor, Kk as startLegacySongCards, qk as startLegacySongDetail, Jk as startLegacySongEditor, Fk as startLegacyStudio, Bk as startLegacyTags, iA as startLegacyTrackPassportDetail, aA as startLegacyTrackPassportEditor, rA as startLegacyTrackPassportList, oA as startLegacyVersionHistory, Ak as unmountVueFeature };
