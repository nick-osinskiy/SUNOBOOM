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
}, ne = /-\w/g, T = /* @__PURE__ */ te((e) => e.replace(ne, (e) => e.slice(1).toUpperCase())), re = /\B([A-Z])/g, ie = /* @__PURE__ */ te((e) => e.replace(re, "-$1").toLowerCase()), E = /* @__PURE__ */ te((e) => e.charAt(0).toUpperCase() + e.slice(1)), ae = /* @__PURE__ */ te((e) => e ? `on${E(e)}` : ""), oe = (e, t) => !Object.is(e, t), se = (e, ...t) => {
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
var Te = (e) => !!(e && e.__v_isRef === !0), k = (e) => g(e) ? e : e == null ? "" : d(e) || v(e) && (e.toString === b || !h(e.toString)) ? Te(e) ? k(e.value) : JSON.stringify(e, Ee, 2) : String(e), Ee = (e, t) => Te(t) ? Ee(e, t.value) : f(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[De(t, r) + " =>"] = n, e), {}) } : p(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => De(e)) } : _(t) ? De(t) : v(t) && !d(t) && !C(t) ? String(t) : t, De = (e, t = "") => _(e) ? `Symbol(${e.description ?? t})` : e, Oe, ke = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && Oe && (Oe.active ? (this.parent = Oe, this.index = (Oe.scopes || (Oe.scopes = [])).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
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
			let t = Oe;
			try {
				return Oe = this, e();
			} finally {
				Oe = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = Oe, Oe = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (Oe === this) Oe = this.prevScope;
			else {
				let e = Oe;
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
	return Oe;
}
function Me(e, t = !1) {
	Oe && (Oe.active ? Oe.cleanups.push(e) : e());
}
var A, Ne = /* @__PURE__ */ new WeakSet(), Pe = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Oe && (Oe.active ? Oe.effects.push(this) : this.flags &= -2);
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
		(t.version === 0 || oe(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
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
		return e === /* @__PURE__ */ M(r) && s && (o ? oe(n, i) && st(e, "set", t, n, i) : st(e, "add", t, n)), s;
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
			e || (oe(n, a) && ot(i, "get", n), ot(i, "get", a));
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
			return e || (oe(t, i) && ot(r, "has", t), ot(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
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
			return r.has.call(n, a) || oe(e, a) && r.has.call(n, e) || oe(i, a) && r.has.call(n, i) || (n.add(a), st(n, "add", a, a)), this;
		},
		set(e, n) {
			t || /* @__PURE__ */ Jt(n) || /* @__PURE__ */ qt(n) || (n = /* @__PURE__ */ M(n));
			let r = /* @__PURE__ */ M(this), { has: i, get: a } = At(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ M(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? oe(n, s) && st(r, "set", e, n, s) : st(r, "add", e, n), this;
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
	return !u(e, "__v_skip") && Object.isExtensible(e) && ce(e, "__v_skip", !0), e;
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
				if (e || o || y || (b ? t.some((e, t) => oe(e, C[t])) : oe(t, C))) {
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
		r._d && da(-1);
		let i = zn(t), a = sa.length, o;
		try {
			o = e(...n);
		} finally {
			for (let e = sa.length; e > a; e--) la();
			zn(i), r._d && da(1);
		}
		return o;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function L(e, n) {
	if (Ln === null) return e;
	let r = qa(Ln), i = e.dirs ||= [];
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
	if (Ma) {
		let n = Ma.provides, r = Ma.parent && Ma.parent.provides;
		r === n && (n = Ma.provides = Object.create(r)), n[e] = t;
	}
}
function Un(e, t, n = !1) {
	let r = Na();
	if (r || fi) {
		let i = fi ? fi._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && h(t) ? t.call(r && r.proxy) : t;
	}
}
function Wn() {
	return !!(Na() || fi);
}
var Gn = /* @__PURE__ */ Symbol.for("v-scx"), Kn = () => Un(Gn);
function R(e, t, n) {
	return qn(e, t, n);
}
function qn(e, n, i = t) {
	let { immediate: a, deep: o, flush: c, once: l } = i, u = s({}, i), d = n && a || !n && c !== "post", f;
	if (za) {
		if (c === "sync") {
			let e = Kn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = r, e.resume = r, e.pause = r, e;
		}
	}
	let p = Ma;
	u.call = (e, t, n) => gn(e, p, t, n);
	let m = !1;
	c === "post" ? u.scheduler = (e) => {
		e.i = p, Wi(e, p && p.suspense);
	} : c !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : On(e);
	}), u.augmentJob = (e) => {
		n && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = pn(e, n, u);
	return za && (f ? f.push(h) : d && h()), h;
}
function Jn(e, t, n) {
	let r = this.proxy, i = g(e) ? e.includes(".") ? Yn(r, e) : () => r[e] : e.bind(r, r), a;
	h(t) ? a = t : (a = t.handler, n = t);
	let o = Ia(this), s = qn(i, a.bind(r), n);
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
var Xn = /* @__PURE__ */ new WeakMap(), Zn = /* @__PURE__ */ Symbol("_vte"), Qn = (e) => e.__isTeleport, $n = (e) => e && (e.disabled || e.disabled === ""), er = (e) => e && (e.defer || e.defer === ""), tr = (e) => typeof SVGElement < "u" && e instanceof SVGElement, nr = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, rr = (e, t) => {
	let n = e && e.to;
	return g(n) ? t ? t(n) : null : n;
}, ir = {
	name: "Teleport",
	__isTeleport: !0,
	process(e, t, n, r, i, a, o, s, c, l) {
		let { mc: u, pc: d, pbc: f, o: { insert: p, querySelector: m, createText: h, createComment: g, parentNode: _ } } = l, v = $n(t.props), { dynamicChildren: y } = t, b = (e, t, n) => {
			e.shapeFlag & 16 && u(e.children, t, n, i, a, o, s, c);
		}, x = (e = t) => {
			let n = $n(e.props), r = e.target = rr(e.props, m), a = lr(r, e, h, p);
			r && (o !== "svg" && tr(r) ? o = "svg" : o !== "mathml" && nr(r) && (o = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(r), n || (b(e, r, a), cr(e, !1)));
		}, S = (e) => {
			let t = () => {
				if (Xn.get(e) === t) {
					if (Xn.delete(e), $n(e.props)) {
						let t = _(e.el) || n;
						b(e, t, e.anchor), cr(e, !0);
					}
					x(e);
				}
			};
			Xn.set(e, t), Wi(t, a);
		};
		if (e == null) {
			let e = t.el = h(""), i = t.anchor = h("");
			if (p(e, n, r), p(i, n, r), er(t.props) || a && a.pendingBranch) {
				S(t);
				return;
			}
			v && (b(t, n, i), cr(t, !0)), x();
		} else {
			t.el = e.el;
			let r = t.anchor = e.anchor, u = Xn.get(e);
			if (u) {
				u.flags |= 8, Xn.delete(e), S(t);
				return;
			}
			t.targetStart = e.targetStart;
			let p = t.target = e.target, h = t.targetAnchor = e.targetAnchor, g = $n(e.props), _ = g ? n : p, b = g ? r : h;
			if (o === "svg" || tr(p) ? o = "svg" : (o === "mathml" || nr(p)) && (o = "mathml"), y ? (f(e.dynamicChildren, y, _, i, a, o, s), Xi(e, t, !0)) : c || d(e, t, _, b, i, a, o, s, !1), v) g ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ar(t, n, r, l, 1);
			else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
				let e = rr(t.props, m);
				e && (t.target = e, ar(t, e, null, l, 0));
			} else g && ar(t, p, h, l, 1);
			cr(t, v);
		}
	},
	remove(e, t, n, { um: r, o: { remove: i } }, a) {
		let { shapeFlag: o, children: s, anchor: c, targetStart: l, targetAnchor: u, target: d, props: f } = e, p = $n(f), m = a || !p, h = Xn.get(e);
		if (h && (h.flags |= 8, Xn.delete(e)), d && (i(l), i(u)), a && i(c), !h && (p || d) && o & 16) for (let e = 0; e < s.length; e++) {
			let i = s[e];
			r(i, t, n, m, !!i.dynamicChildren);
		}
	},
	move: ar,
	hydrate: or
};
function ar(e, t, n, { o: { insert: r }, m: i }, a = 2) {
	a === 0 && (e.targetStart && r(e.targetStart, t, n), r(e.targetAnchor, t, n), n = e.targetAnchor);
	let { el: o, anchor: s, shapeFlag: c, children: l, props: u } = e, d = a === 2;
	if (d && r(o, t, n), !Xn.has(e) && (!d || $n(u)) && c & 16) for (let e = 0; e < l.length; e++) i(l[e], t, n, 2);
	d && r(s, t, n);
}
function or(e, t, n, r, i, a, { o: { nextSibling: o, parentNode: s, querySelector: c, insert: l, createText: u } }, d) {
	function f(e, n) {
		let r = n;
		for (; r;) {
			if (r && r.nodeType === 8) {
				if (r.data === "teleport start anchor") t.targetStart = r;
				else if (r.data === "teleport anchor") {
					t.targetAnchor = r, e._lpa = t.targetAnchor && o(t.targetAnchor);
					break;
				}
			}
			r = o(r);
		}
	}
	function p(e, t) {
		t.anchor = d(o(e), t, s(e), n, r, i, a);
	}
	let m = t.target = rr(t.props, c), h = $n(t.props);
	if (m) {
		let c = m._lpa || m.firstChild;
		t.shapeFlag & 16 && (h ? (p(e, t), f(m, c), t.targetAnchor || lr(m, t, u, l, s(e) === m ? e : null)) : (t.anchor = o(e), f(m, c), t.targetAnchor || lr(m, t, u, l), d(c && o(c), t, m, n, r, i, a))), cr(t, h);
	} else h && t.shapeFlag & 16 && (p(e, t), t.targetStart = e, t.targetAnchor = o(e));
	return t.anchor && o(t.anchor);
}
var sr = ir;
function cr(e, t) {
	let n = e.ctx;
	if (n && n.ut) {
		let r, i;
		for (t ? (r = e.el, i = e.anchor) : (r = e.targetStart, i = e.targetAnchor); r && r !== i;) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
		n.ut();
	}
}
function lr(e, t, n, r, i = null) {
	let a = t.targetStart = n(""), o = t.targetAnchor = n("");
	return a[Zn] = o, e && (r(a, e, i), r(o, e, i)), o;
}
var ur = /* @__PURE__ */ Symbol("_leaveCb");
function dr(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== aa) {
			t = n;
			break;
		}
	}
	return t;
}
function fr(e) {
	if (!Sr(e)) return Qn(e.type) && e.children ? dr(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && h(n.default)) return n.default();
	}
}
function pr(e, t) {
	if (e.shapeFlag & 6 && e.component) {
		e.transition = t;
		let n = e.component.subTree;
		pr(Qn(n.type) && fr(n) || n, t);
	} else if (e.shapeFlag & 128) {
		let n = e.suspense;
		if (n) {
			let e = n.isHydrating ? n.pendingBranch : n.activeBranch;
			e && pr(e, t.clone(e));
		} else e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback);
	} else if (e.transition = t, e.type === V && d(e.children)) {
		let n = yi(e.children, !1);
		n && pr(n, t);
	}
}
function mr(e) {
	if (e.component) return mr(e.component.subTree);
	if (e.type === V) {
		let t = d(e.children) && yi(e.children, !1);
		return t ? mr(t) : void 0;
	}
	if (e.type !== aa) return e;
}
// @__NO_SIDE_EFFECTS__
function hr(e, t) {
	return h(e) ? /* @__PURE__ */ s({ name: e.name }, t, { setup: e }) : e;
}
function gr(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function _r(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var vr = /* @__PURE__ */ new WeakMap();
function yr(e, n, r, a, o = !1) {
	if (d(e)) {
		e.forEach((e, t) => yr(e, n && (d(n) ? n[t] : n), r, a, o));
		return;
	}
	if (xr(a) && !o) {
		a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && yr(e, n, r, a.component.subTree);
		return;
	}
	let s = a.shapeFlag & 4 ? qa(a.component) : a.el, l = o ? null : s, { i: f, r: p } = e, m = n && n.r, _ = f.refs === t ? f.refs = {} : f.refs, v = f.setupState, y = /* @__PURE__ */ M(v), b = v === t ? i : (e) => !_r(_, e) && u(y, e), x = (e, t) => !(t && _r(_, t));
	if (m != null && m !== p) {
		if (br(n), g(m)) _[m] = null, b(m) && (v[m] = null);
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
					i(), vr.delete(e);
				};
				t.id = -1, vr.set(e, t), Wi(t, r);
			} else br(e), i();
		}
	}
}
function br(e) {
	let t = vr.get(e);
	t && (t.flags |= 8, vr.delete(e));
}
de().requestIdleCallback, de().cancelIdleCallback;
var xr = (e) => !!e.type.__asyncLoader, Sr = (e) => e.type.__isKeepAlive;
function Cr(e, t) {
	Tr(e, "a", t);
}
function wr(e, t) {
	Tr(e, "da", t);
}
function Tr(e, t, n = Ma) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (Dr(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) Sr(e.parent.vnode) && Er(r, t, n, e), e = e.parent;
	}
}
function Er(e, t, n, r) {
	let i = Dr(t, e, r, !0), a = Dr("um", () => c(r[t], i), n);
	a.flags = 16;
}
function Dr(e, t, n = Ma, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Ye();
			let i = Ia(n), a = gn(t, n, e, r);
			return i(), Xe(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var Or = (e) => (t, n = Ma) => {
	za && e !== "sp" || Dr(e, (...e) => t(...e), n);
}, kr = Or("bm"), z = Or("m"), Ar = Or("bu"), jr = Or("u"), Mr = Or("bum"), Nr = Or("um"), Pr = Or("sp"), Fr = Or("rtg"), Ir = Or("rtc");
function Lr(e, t = Ma) {
	Dr("ec", e, t);
}
var Rr = "components", zr = /* @__PURE__ */ Symbol.for("v-ndc");
function Br(e) {
	return g(e) ? Vr(Rr, e, !1) || e : e || zr;
}
function Vr(e, t, n = !0, r = !1) {
	let i = Ln || Ma;
	if (i) {
		let n = i.type;
		if (e === Rr) {
			let e = Ja(n, !1);
			if (e && (e === t || e === T(t) || e === E(T(t)))) return n;
		}
		let a = Hr(i[e] || n[e], t) || Hr(i.appContext[e], t);
		return !a && r ? n : a;
	}
}
function Hr(e, t) {
	return e && (e[t] || e[T(t)] || e[E(T(t))]);
}
function B(e, t, n, r) {
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
var Ur = (e) => e ? Ra(e) ? qa(e) : Ur(e.parent) : null, Wr = /* @__PURE__ */ s(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => Ur(e.parent),
	$root: (e) => Ur(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => $r(e),
	$forceUpdate: (e) => e.f ||= () => {
		On(e.update);
	},
	$nextTick: (e) => e.n ||= En.bind(e.proxy),
	$watch: (e) => Jn.bind(e)
}), Gr = (e, n) => e !== t && !e.__isScriptSetup && u(e, n), Kr = {
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
			else if (Gr(i, n)) return s[n] = 1, i[n];
			else if (a !== t && u(a, n)) return s[n] = 2, a[n];
			else if (u(o, n)) return s[n] = 3, o[n];
			else if (r !== t && u(r, n)) return s[n] = 4, r[n];
			else Jr && (s[n] = 0);
		}
		let d = Wr[n], f, p;
		if (d) return n === "$attrs" && ot(e.attrs, "get", ""), d(e);
		if ((f = c.__cssModules) && (f = f[n])) return f;
		if (r !== t && u(r, n)) return s[n] = 4, r[n];
		if (p = l.config.globalProperties, u(p, n)) return p[n];
	},
	set({ _: e }, n, r) {
		let { data: i, setupState: a, ctx: o } = e;
		return Gr(a, n) ? (a[n] = r, !0) : i !== t && u(i, n) ? (i[n] = r, !0) : u(e.props, n) || n[0] === "$" && n.slice(1) in e ? !1 : (o[n] = r, !0);
	},
	has({ _: { data: e, setupState: n, accessCache: r, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(r[c] || e !== t && c[0] !== "$" && u(e, c) || Gr(n, c) || u(o, c) || u(i, c) || u(Wr, c) || u(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? u(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function qr(e) {
	return d(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var Jr = !0;
function Yr(e) {
	let t = $r(e), n = e.proxy, i = e.ctx;
	Jr = !1, t.beforeCreate && Zr(t.beforeCreate, e, "bc");
	let { data: a, computed: o, methods: s, watch: c, provide: l, inject: u, created: f, beforeMount: p, mounted: m, beforeUpdate: g, updated: _, activated: y, deactivated: b, beforeDestroy: x, beforeUnmount: S, destroyed: C, unmounted: w, render: ee, renderTracked: te, renderTriggered: ne, errorCaptured: T, serverPrefetch: re, expose: ie, inheritAttrs: E, components: ae, directives: oe, filters: se } = t;
	if (u && Xr(u, i, null), s) for (let e in s) {
		let t = s[e];
		h(t) && (i[e] = t.bind(n));
	}
	if (a) {
		let t = a.call(n, n);
		v(t) && (e.data = /* @__PURE__ */ j(t));
	}
	if (Jr = !0, o) for (let e in o) {
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
	if (c) for (let e in c) Qr(c[e], i, n, e);
	if (l) {
		let e = h(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Hn(t, e[t]);
		});
	}
	f && Zr(f, e, "c");
	function ce(e, t) {
		d(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (ce(kr, p), ce(z, m), ce(Ar, g), ce(jr, _), ce(Cr, y), ce(wr, b), ce(Lr, T), ce(Ir, te), ce(Fr, ne), ce(Mr, S), ce(Nr, w), ce(Pr, re), d(ie)) {
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
	ee && e.render === r && (e.render = ee), E != null && (e.inheritAttrs = E), ae && (e.components = ae), oe && (e.directives = oe), re && gr(e);
}
function Xr(e, t, n = r) {
	d(e) && (e = ii(e));
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
function Zr(e, t, n) {
	gn(d(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Qr(e, t, n, r) {
	let i = r.includes(".") ? Yn(n, r) : () => n[r];
	if (g(e)) {
		let n = t[e];
		h(n) && R(i, n);
	} else if (h(e)) R(i, e.bind(n));
	else if (v(e)) {
		if (d(e)) e.forEach((e) => Qr(e, t, n, r));
		else {
			let r = h(e.handler) ? e.handler.bind(n) : t[e.handler];
			h(r) && R(i, r, e);
		}
	}
}
function $r(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => ei(c, e, o, !0)), ei(c, t, o)), v(t) && a.set(t, c), c;
}
function ei(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && ei(e, a, n, !0), i && i.forEach((t) => ei(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = ti[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var ti = {
	data: ni,
	props: si,
	emits: si,
	methods: oi,
	computed: oi,
	beforeCreate: ai,
	created: ai,
	beforeMount: ai,
	mounted: ai,
	beforeUpdate: ai,
	updated: ai,
	beforeDestroy: ai,
	beforeUnmount: ai,
	destroyed: ai,
	unmounted: ai,
	activated: ai,
	deactivated: ai,
	errorCaptured: ai,
	serverPrefetch: ai,
	components: oi,
	directives: oi,
	watch: ci,
	provide: ni,
	inject: ri
};
function ni(e, t) {
	return t ? e ? function() {
		return s(h(e) ? e.call(this, this) : e, h(t) ? t.call(this, this) : t);
	} : t : e;
}
function ri(e, t) {
	return oi(ii(e), ii(t));
}
function ii(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function ai(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function oi(e, t) {
	return e ? s(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function si(e, t) {
	return e ? d(e) && d(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : s(/* @__PURE__ */ Object.create(null), qr(e), qr(t ?? {})) : t;
}
function ci(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = s(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = ai(e[r], t[r]);
	return n;
}
function li() {
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
var ui = 0;
function di(e, t) {
	return function(n, r = null) {
		h(n) || (n = s({}, n)), r != null && !v(r) && (r = null);
		let i = li(), a = /* @__PURE__ */ new WeakSet(), o = [], c = !1, l = i.app = {
			_uid: ui++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: Za,
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
					let u = l._ceVNode || va(n, r);
					return u.appContext = i, s === !0 ? s = "svg" : s === !1 && (s = void 0), o && t ? t(u, a) : e(u, a, s), c = !0, l._container = a, a.__vue_app__ = l, qa(u.component);
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
				let t = fi;
				fi = l;
				try {
					return e();
				} finally {
					fi = t;
				}
			}
		};
		return l;
	};
}
var fi = null, pi = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${T(t)}Modifiers`] || e[`${ie(t)}Modifiers`];
function mi(e, n, ...r) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || t, a = r, o = n.startsWith("update:"), s = o && pi(i, n.slice(7));
	s && (s.trim && (a = r.map((e) => g(e) ? e.trim() : e)), s.number && (a = a.map(le)));
	let c, l = i[c = ae(n)] || i[c = ae(T(n))];
	!l && o && (l = i[c = ae(ie(n))]), l && gn(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, gn(u, e, 6, a);
	}
}
var hi = /* @__PURE__ */ new WeakMap();
function gi(e, t, n = !1) {
	let r = n ? hi : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, c = !1;
	if (!h(e)) {
		let r = (e) => {
			let n = gi(e, t, !0);
			n && (c = !0, s(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !c ? (v(e) && r.set(e, null), null) : (d(a) ? a.forEach((e) => o[e] = null) : s(o, a), v(e) && r.set(e, o), o);
}
function _i(e, t) {
	return !e || !a(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), u(e, t[0].toLowerCase() + t.slice(1)) || u(e, ie(t)) || u(e, t));
}
function vi(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: s, attrs: c, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = zn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = Ca(u.call(t, e, d, f, m, p, h)), y = c;
		} else {
			let e = t;
			v = Ca(e.length > 1 ? e(f, {
				attrs: c,
				slots: s,
				emit: l
			}) : e(f, null)), y = t.props ? c : bi(c);
		}
	} catch (t) {
		sa.length = 0, _n(t, e, 1), v = va(aa);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(o) && (y = xi(y, a)), b = xa(b, y, !1, !0));
	}
	return n.dirs && (b = xa(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && pr(Qn(b.type) && fr(b) || b, n.transition), v = b, zn(_), v;
}
function yi(e, t = !0) {
	let n;
	for (let t = 0; t < e.length; t++) {
		let r = e[t];
		if (ma(r)) {
			if (r.type !== aa || r.children === "v-if") {
				if (n) return;
				n = r;
			}
		} else return;
	}
	return n;
}
var bi = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || a(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, xi = (e, t) => {
	let n = {};
	for (let r in e) o(r) && r.slice(9) in t || (n[r] = e[r]);
	return n;
};
function Si(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? Ci(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (wi(o, r, n) && !_i(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? !o || Ci(r, o, l) : !!o;
	return !1;
}
function Ci(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (!u(e, a) || wi(t, e, a) && !_i(n, a)) return !0;
	}
	return !1;
}
function wi(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && v(r) && v(i) ? !Ce(r, i) : r !== i;
}
function Ti({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var Ei = {}, Di = () => Object.create(Ei), Oi = (e) => Object.getPrototypeOf(e) === Ei;
function ki(e, t, n, r = !1) {
	let i = {}, a = Di();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), ji(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	e.props = n ? r ? i : /* @__PURE__ */ Ut(i) : e.type.props ? i : a, e.attrs = a;
}
function Ai(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ M(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (_i(e.emitsOptions, o)) continue;
				let d = t[o];
				if (c) {
					if (u(a, o)) d !== a[o] && (a[o] = d, l = !0);
					else {
						let t = T(o);
						i[t] = Mi(c, s, t, d, e, !1);
					}
				} else d !== a[o] && (a[o] = d, l = !0);
			}
		}
	} else {
		ji(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) t && (u(t, a) || (r = ie(a)) !== a && u(t, r)) || (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = Mi(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) t && u(t, e) || (delete a[e], l = !0);
	}
	l && st(e.attrs, "set", "");
}
function ji(e, n, r, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (n) for (let t in n) {
		if (ee(t)) continue;
		let l = n[t], d;
		a && u(a, d = T(t)) ? !o || !o.includes(d) ? r[d] = l : (c ||= {})[d] = l : _i(e.emitsOptions, t) || t in i && l === i[t] || (i[t] = l, s = !0);
	}
	if (o) {
		let n = /* @__PURE__ */ M(r), i = c || t;
		for (let t = 0; t < o.length; t++) {
			let s = o[t];
			r[s] = Mi(a, n, s, i[s], e, !u(i, s));
		}
	}
	return s;
}
function Mi(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = u(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && h(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = Ia(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === ie(n)) && (r = !0));
	}
	return r;
}
var Ni = /* @__PURE__ */ new WeakMap();
function Pi(e, r, i = !1) {
	let a = i ? Ni : r.propsCache, o = a.get(e);
	if (o) return o;
	let c = e.props, l = {}, f = [], p = !1;
	if (!h(e)) {
		let t = (e) => {
			p = !0;
			let [t, n] = Pi(e, r, !0);
			s(l, t), n && f.push(...n);
		};
		!i && r.mixins.length && r.mixins.forEach(t), e.extends && t(e.extends), e.mixins && e.mixins.forEach(t);
	}
	if (!c && !p) return v(e) && a.set(e, n), n;
	if (d(c)) for (let e = 0; e < c.length; e++) {
		let n = T(c[e]);
		Fi(n) && (l[n] = t);
	}
	else if (c) for (let e in c) {
		let t = T(e);
		if (Fi(t)) {
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
function Fi(e) {
	return e[0] !== "$" && !ee(e);
}
var Ii = (e) => e === "_" || e === "_ctx" || e === "$stable", Li = (e) => d(e) ? e.map(Ca) : [Ca(e)], Ri = (e, t, n) => {
	if (t._n) return t;
	let r = Bn((...e) => Li(t(...e)), n);
	return r._c = !1, r;
}, zi = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (Ii(n)) continue;
		let i = e[n];
		if (h(i)) t[n] = Ri(n, i, r);
		else if (i != null) {
			let e = Li(i);
			t[n] = () => e;
		}
	}
}, Bi = (e, t) => {
	let n = Li(t);
	e.slots.default = () => n;
}, Vi = (e, t, n) => {
	for (let r in t) (n || !Ii(r)) && (e[r] = t[r]);
}, Hi = (e, t, n) => {
	let r = e.slots = Di();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (Vi(r, t, n), n && ce(r, "_", e, !0)) : zi(t, r);
	} else t && Bi(e, t);
}, Ui = (e, n, r) => {
	let { vnode: i, slots: a } = e, o = !0, s = t;
	if (i.shapeFlag & 32) {
		let e = n._;
		e ? r && e === 1 ? o = !1 : Vi(a, n, r) : (o = !n.$stable, zi(n, a)), s = n;
	} else n && (Bi(e, n), s = { default: 1 });
	if (o) for (let e in a) !Ii(e) && s[e] == null && delete a[e];
}, Wi = ra;
function Gi(e) {
	return Ki(e);
}
function Ki(e, i) {
	let a = de();
	a.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = r, insertStaticContent: _ } = e, v = (e, t, r, i = null, a = null, o = null, s = void 0, c = null, l = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !ha(e, t) && (i = be(e), O(e, a, o, !0), e = null), t.patchFlag === -2 && (l = !1, t.dynamicChildren = null), t.dynamicChildren && e && e.dynamicChildren && e.dynamicChildren.hasOnce && (t.dynamicChildren === n && (t.dynamicChildren = []), t.dynamicChildren.hasOnce = !0);
		let { type: u, ref: d, shapeFlag: f } = t;
		switch (u) {
			case ia:
				y(e, t, r, i);
				break;
			case aa:
				b(e, t, r, i);
				break;
			case oa:
				e ?? x(t, r, i, s);
				break;
			case V:
				ae(e, t, r, i, a, o, s, c, l);
				break;
			default: f & 1 ? w(e, t, r, i, a, o, s, c, l) : f & 6 ? oe(e, t, r, i, a, o, s, c, l) : (f & 64 || f & 128) && u.process(e, t, r, i, a, o, s, c, l, Se);
		}
		d != null && a ? yr(d, e && e.ref, o, t || e, !t) : d == null && e && e.ref != null && yr(e.ref, null, o, e, !0);
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
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && T(e.children, d, null, r, i, qi(e, a), s, u), _ && Vn(e, null, r, "created"), ne(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !ee(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && Da(f, r, e);
		}
		_ && Vn(e, null, r, "beforeMount");
		let v = Yi(i, g);
		v ? g.beforeEnter(d) : g && !g.persisted && (d[na] = !0), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && Wi(() => {
			try {
				f && Da(f, r, e), v && g.enter(d), _ && Vn(e, null, r, "mounted");
			} finally {}
		}, i);
	}, ne = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || ta(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				ne(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, T = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) {
			let c = e[l] = s ? wa(e[l]) : Ca(e[l]);
			v(null, c, t, n, r, i, a, o, s);
		}
	}, re = (e, n, r, i, a, o, s) => {
		let l = n.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = n;
		u |= e.patchFlag & 16;
		let m = e.props || t, h = n.props || t, g;
		if (r && Ji(r, !1), (g = h.onVnodeBeforeUpdate) && Da(g, r, n, e), f && Vn(n, e, r, "beforeUpdate"), r && Ji(r, !0), d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length) && (u = 0, s = !1, d = null), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? ie(e.dynamicChildren, d, l, r, i, qi(n, a), o) : s || fe(e, n, l, null, r, i, qi(n, a), o, !1), u > 0) {
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
		((g = h.onVnodeUpdated) || f) && Wi(() => {
			g && Da(g, r, n, e), f && Vn(n, e, r, "updated");
		}, i);
	}, ie = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el || ea(c), d = u && (c.type === V || !ha(c, l) || c.shapeFlag & 198) ? m(u) : n;
			v(c, l, d, null, r, i, a, o, !0);
		}
	}, E = (e, n, r, i, a) => {
		if (n !== r) {
			if (n !== t) for (let t in n) !ee(t) && !(t in r) && c(e, t, n[t], null, a, i);
			for (let t in r) {
				if (ee(t)) continue;
				let o = r[t], s = n[t];
				o !== s && t !== "value" && c(e, t, s, o, a, i);
			}
			"value" in r && c(e, "value", n.value, r.value, a);
		}
	}, ae = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), T(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (ie(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && Xi(e, t, !0)) : fe(e, t, n, f, i, a, s, c, l);
	}, oe = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : ce(t, n, r, i, a, o, c) : le(e, t, c);
	}, ce = (e, t, n, r, i, a, o) => {
		let s = e.component = ja(e, r, i);
		if (Sr(e) && (s.ctx.renderer = Se), Ba(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, ue, o, a), !e.el) {
				let r = s.subTree = va(aa);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else ue(s, e, t, n, i, a, o);
	}, le = (e, t, n) => {
		let r = t.component = e.component;
		if (Si(e, t, n)) {
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
					let n = Qi(e);
					if (n) {
						t && (t.el = c.el, D(e, t, o)), n.asyncDep.then(() => {
							let t = () => {
								e.job.flags & 8 || (i && i.pendingBranch ? Wi(t, i) : l());
							};
							t.flags = 48, Wi(t, i);
						});
						return;
					}
				}
				let u = t, d;
				Ji(e, !1), t ? (t.el = c.el, D(e, t, o)) : t = c, n && se(n), (d = t.props && t.props.onVnodeBeforeUpdate) && Da(d, s, t, c), Ji(e, !0);
				let f = vi(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el || ea(p)), be(p), e, i, a), t.el = f.el, u === null && Ti(e, f.el), r && Wi(r, i), (d = t.props && t.props.onVnodeUpdated) && Wi(() => Da(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = xr(t);
				if (Ji(e, !1), l && se(l), !m && (o = c && c.onVnodeBeforeMount) && Da(o, d, t), Ji(e, !0), s && we) {
					let t = () => {
						e.subTree = vi(e), we(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = vi(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && Wi(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					Wi(() => Da(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && xr(d.vnode) && d.vnode.shapeFlag & 256) && e.a && Wi(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Pe(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => On(u), Ji(e, !0), l();
	}, D = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, Ai(e, t.props, r, n), Ui(e, t.children, n), Ye(), jn(e), Xe();
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
		m & 8 ? (u & 16 && ye(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? me(l, d, n, r, i, a, o, s, c) : ye(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && T(d, n, r, i, a, o, s, c));
	}, pe = (e, t, r, i, a, o, s, c, l) => {
		e ||= n, t ||= n;
		let u = e.length, d = t.length, f = Math.min(u, d), p = 0;
		for (; p < f; p++) {
			let n = t[p] = l ? wa(t[p]) : Ca(t[p]);
			v(e[p], n, r, null, a, o, s, c, l);
		}
		u > d ? ye(e, a, o, !0, !1, f) : T(t, r, i, a, o, s, c, l, f);
	}, me = (e, t, r, i, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let n = e[u], i = t[u] = l ? wa(t[u]) : Ca(t[u]);
			if (ha(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let n = e[f], i = t[p] = l ? wa(t[p]) : Ca(t[p]);
			if (ha(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, n = e < d ? t[e].el : i;
				for (; u <= p;) v(null, t[u] = l ? wa(t[u]) : Ca(t[u]), r, n, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) O(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? wa(t[u]) : Ca(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let _, y = 0, b = p - h + 1, x = !1, S = 0, C = Array(b);
			for (u = 0; u < b; u++) C[u] = 0;
			for (u = m; u <= f; u++) {
				let n = e[u];
				if (y >= b) {
					O(n, a, o, !0);
					continue;
				}
				let i;
				if (n.key != null) i = g.get(n.key);
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && ha(n, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? O(n, a, o, !0) : (C[i - h] = u + 1, i >= S ? S = i : x = !0, v(n, t[i], r, null, a, o, s, c, l), y++);
			}
			let w = x ? Zi(C) : n;
			for (_ = w.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, n = t[e], f = t[e + 1], p = e + 1 < d ? f.el || ea(f) : i;
				C[u] === 0 ? v(null, n, r, p, a, o, s, c, l) : x && (_ < 0 || u !== w[_] ? he(n, r, p, 2) : _--);
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
		} else if (c === oa) S(e, t, n);
		else if (r !== 2 && d & 1 && l) {
			if (r === 0) l.persisted && !a[ur] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), Wi(() => l.enter(a), i));
			else {
				let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
					e.ctx.isUnmounted ? s(a) : o(a, t, n);
				}, d = () => {
					let e = a._isLeaving || !!a[ur];
					a._isLeaving && a[ur](!0), l.persisted && !e ? u() : r(a, () => {
						u(), c && c();
					});
				};
				i ? i(a, u, d) : d();
			}
		} else o(a, t, n);
	}, O = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if ((d === -2 || l && l.hasOnce) && (i = !1), s != null && (Ye(), yr(s, null, n, e, !0), Xe()), p == null || e.ctx && e.ctx !== t || (t.renderCache[p] = void 0), u & 256 && t.ctx.deactivate(e)) return;
		let h = u & 1 && f, g = !xr(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && Da(_, t, e), u & 6) ve(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Vn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, Se, r) : l && !l.hasOnce && (a !== V || d > 0 && d & 64) ? ye(l, t, n, !1, !0) : (a === V && d & 384 || !i && u & 16) && ye(c, t, n), r && ge(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && Wi(() => {
			_ && Da(_, t, e), h && Vn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, ge = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e, a = t === V;
		if (a && !i) {
			_e(n, r);
			return;
		}
		if (t === oa) {
			C(e), i && !i.persisted && i.afterLeave && i.afterLeave();
			return;
		}
		let o = a ? mr(e) : e, c = () => {
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
		$i(c), $i(l), r && se(r), i.stop(), a ? (a.flags |= 8, O(o, e, t, n)) : o && (o.transition = e.vnode.transition, O(o, e, t, n)), s && Wi(s, t);
		let u = () => {
			e.isUnmounted = !0;
		};
		u.flags = 16, Wi(u, t);
	}, ye = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) O(e[o], t, n, r, i);
	}, be = (e) => {
		if (e.shapeFlag & 6) return be(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Zn];
		return n ? h(n) : t;
	}, xe = (e, t, n) => {
		Pn(() => {
			e == null ? t._vnode && O(t._vnode, null, null, !0) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e;
		}, e && t._vnode ? void 0 : e && e.component ? e.component.uid : Aa());
	}, Se = {
		p: v,
		um: O,
		m: he,
		r: ge,
		mt: ce,
		mc: T,
		pc: fe,
		pbc: ie,
		n: be,
		o: e
	}, Ce, we;
	return i && ([Ce, we] = i(Se)), {
		render: xe,
		hydrate: Ce,
		createApp: di(xe, Ce)
	};
}
function qi({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ji({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Yi(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Xi(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (d(r) && d(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = wa(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Xi(t, a)), a.type === ia && (a.patchFlag === -1 && (a = i[e] = wa(a)), a.el = t.el), a.type === aa && !a.el && (a.el = t.el);
	}
}
function Zi(e) {
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
function Qi(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Qi(t);
}
function $i(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function ea(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	if (t) return ea(t.subTree);
	let n = e.suspense;
	return n && n.activeBranch ? ea(n.activeBranch) : null;
}
var ta = (e) => e.__isSuspense, na = /* @__PURE__ */ Symbol("_deferredEnter");
function ra(e, t) {
	t && t.pendingBranch ? d(e) ? t.effects.push(...e) : t.effects.push(e) : An(e);
}
var V = /* @__PURE__ */ Symbol.for("v-fgt"), ia = /* @__PURE__ */ Symbol.for("v-txt"), aa = /* @__PURE__ */ Symbol.for("v-cmt"), oa = /* @__PURE__ */ Symbol.for("v-stc"), sa = [], ca = null;
function H(e = !1) {
	sa.push(ca = e ? null : []);
}
function la() {
	sa.pop(), ca = sa[sa.length - 1] || null;
}
var ua = 1;
function da(e, t = !1) {
	ua += e, e < 0 && ca && t && (ca.hasOnce = !0);
}
function fa(e) {
	return e.dynamicChildren = ua > 0 ? ca || n : null, la(), ua > 0 && ca && ca.push(e), e;
}
function U(e, t, n, r, i, a) {
	return fa(W(e, t, n, r, i, a, !0));
}
function pa(e, t, n, r, i) {
	return fa(va(e, t, n, r, i, !0));
}
function ma(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function ha(e, t) {
	return e.type === t.type && e.key === t.key;
}
var ga = ({ key: e }) => e ?? null, _a = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : g(e) || /* @__PURE__ */ N(e) || h(e) ? {
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
		key: t && ga(t),
		ref: t && _a(t),
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
	return s ? (Ta(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= g(n) ? 8 : 16), ua > 0 && !o && ca && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && ca.push(c), c;
}
var va = ya;
function ya(e, t = null, n = null, r = 0, i = null, a = !1) {
	if (e && e !== zr || (e = aa), ma(e)) {
		let r = xa(e, t, !0);
		return n && Ta(r, n), ua > 0 && !a && ca && (r.shapeFlag & 6 ? ca[ca.indexOf(e)] = r : ca.push(r)), r.patchFlag = -2, r;
	}
	if (Ya(e) && (e = e.__vccOpts), t) {
		t = ba(t);
		let { class: e, style: n } = t;
		e && !g(e) && (t.class = O(e)), v(n) && (/* @__PURE__ */ Yt(n) && !d(n) && (n = s({}, n)), t.style = D(n));
	}
	let o = g(e) ? 1 : ta(e) ? 128 : Qn(e) ? 64 : v(e) ? 4 : h(e) ? 2 : 0;
	return W(e, t, n, r, i, o, a, !0);
}
function ba(e) {
	return e ? /* @__PURE__ */ Yt(e) ? s({}, e) : Oi(e) ? s({}, e[Wa] || e) : e : null;
}
function xa(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? Ea(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && ga(l),
		ref: t && t.ref ? n && a ? d(a) ? a.concat(_a(t)) : [a, _a(t)] : _a(t) : a,
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
		ssContent: e.ssContent && xa(e.ssContent),
		ssFallback: e.ssFallback && xa(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce,
		cacheIndex: e.cacheIndex
	};
	return c && r && pr(u, c.clone(u)), u;
}
function G(e = " ", t = 0) {
	return va(ia, null, e, t);
}
function Sa(e, t) {
	let n = va(oa, null, e);
	return n.staticCount = t, n;
}
function K(e = "", t = !1) {
	return t ? (H(), pa(aa, null, e)) : va(aa, null, e);
}
function Ca(e) {
	return e == null || typeof e == "boolean" ? va(aa) : d(e) ? va(V, null, e.slice()) : ma(e) ? wa(e) : va(ia, null, String(e));
}
function wa(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : xa(e);
}
function Ta(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (d(t)) n = 16;
	else if (typeof t == "object") {
		if (r & 65) {
			let n = t.default;
			n && (n._c && (n._d = !1), Ta(e, n()), n._c && (n._d = !0));
			return;
		}
		{
			n = 32;
			let r = t._;
			!r && !Oi(t) ? t._ctx = Ln : r === 3 && Ln && (Ln.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
		}
	} else if (h(t)) {
		if (r & 65) {
			Ta(e, { default: t });
			return;
		}
		t = {
			default: t,
			_ctx: Ln
		}, n = 32;
	} else t = String(t), r & 64 ? (n = 16, t = [G(t)]) : n = 8;
	e.children = t, e.shapeFlag |= n;
}
function Ea(...e) {
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
function Da(e, t, n, r = null) {
	gn(e, t, 7, [n, r]);
}
var Oa = /* @__PURE__ */ li(), ka = 0;
function Aa() {
	return ka;
}
function ja(e, n, r) {
	let i = e.type, a = (n ? n.appContext : e.appContext) || Oa, o = {
		uid: ka++,
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
		propsOptions: Pi(i, a),
		emitsOptions: gi(i, a),
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
	return o.ctx = { _: o }, o.root = n ? n.root : o, o.emit = mi.bind(null, o), e.ce && e.ce(o), o;
}
var Ma = null, Na = () => Ma || Ln, Pa, Fa;
{
	let e = de(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	Pa = t("__VUE_INSTANCE_SETTERS__", (e) => Ma = e), Fa = t("__VUE_SSR_SETTERS__", (e) => za = e);
}
var Ia = (e) => {
	let t = Ma;
	return Pa(e), e.scope.on(), () => {
		e.scope.off(), Pa(t);
	};
}, La = () => {
	Ma && Ma.scope.off(), Pa(null);
};
function Ra(e) {
	return e.vnode.shapeFlag & 4;
}
var za = !1;
function Ba(e, t = !1, n = !1) {
	t && Fa(t);
	let { props: r, children: i } = e.vnode, a = Ra(e);
	ki(e, r, a, t), Hi(e, i, n || t);
	let o = a ? Va(e, t) : void 0;
	return t && Fa(!1), o;
}
function Va(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Kr);
	let { setup: r } = n;
	if (r) {
		Ye();
		let n = e.setupContext = r.length > 1 ? Ka(e) : null, i = Ia(e), a = hn(r, e, 0, [e.props, n]), o = y(a);
		if (Xe(), i(), (o || e.sp) && !xr(e) && gr(e), o) {
			if (a.then(La, La), t) return a.then((n) => {
				Fa(!0);
				try {
					Ha(e, n, t);
				} finally {
					Fa(!1);
				}
			}).catch((t) => {
				_n(t, e, 0, void 0, !0), e.ssrRender = (e, t) => t("<!---->");
			});
			e.asyncDep = a;
		} else Ha(e, a, t);
	} else Ua(e, t);
}
function Ha(e, t, n) {
	h(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : v(t) && (e.setupState = nn(t)), Ua(e, n);
}
function Ua(e, t, n) {
	let i = e.type;
	e.render ||= i.render || r;
	{
		let t = Ia(e);
		Ye();
		try {
			Yr(e);
		} finally {
			Xe(), t();
		}
	}
}
var Wa = /* @__PURE__ */ Symbol(), Ga = { get(e, t) {
	return ot(e, "get", ""), t === Wa ? e : e[t];
} };
function Ka(e) {
	return {
		attrs: new Proxy(e.attrs, Ga),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function qa(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(nn(Xt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Wr) return Wr[n](e);
		},
		has(e, t) {
			return t in e || t in Wr;
		}
	}) : e.proxy;
}
function Ja(e, t = !0) {
	return h(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ya(e) {
	return h(e) && "__vccOpts" in e;
}
var q = (e, t) => /* @__PURE__ */ cn(e, t, za);
function Xa(e, t, n) {
	try {
		da(-1);
		let r = arguments.length;
		return r === 2 ? v(t) && !d(t) ? ma(t) ? va(e, null, [t]) : va(e, t) : va(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && ma(n) && (n = [n]), va(e, t, n));
	} finally {
		da(1);
	}
}
var Za = "3.5.45", Qa = void 0, $a = typeof window < "u" && window.trustedTypes;
if ($a) try {
	Qa = /* @__PURE__ */ $a.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var eo = Qa ? (e) => Qa.createHTML(e) : (e) => e, to = "http://www.w3.org/2000/svg", no = "http://www.w3.org/1998/Math/MathML", ro = typeof document < "u" ? document : null, io = ro && /* @__PURE__ */ ro.createElement("template"), ao = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? ro.createElementNS(to, e) : t === "mathml" ? ro.createElementNS(no, e) : n ? ro.createElement(e, { is: n }) : ro.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => ro.createTextNode(e),
	createComment: (e) => ro.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => ro.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), i !== a && (i = i.nextSibling););
		else {
			io.innerHTML = eo(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = io.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, oo = /* @__PURE__ */ Symbol("_vtc");
function so(e, t, n) {
	let r = e[oo];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var co = /* @__PURE__ */ Symbol("_vod"), lo = /* @__PURE__ */ Symbol("_vsh"), uo = {
	name: "show",
	beforeMount(e, { value: t }, { transition: n }) {
		e[co] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : fo(e, t);
	},
	mounted(e, { value: t }, { transition: n }) {
		n && t && n.enter(e);
	},
	updated(e, { value: t, oldValue: n }, { transition: r }) {
		!t != !n && (r ? t ? (r.beforeEnter(e), fo(e, !0), r.enter(e)) : r.leave(e, () => {
			fo(e, !1);
		}) : fo(e, t));
	},
	beforeUnmount(e, { value: t }) {
		fo(e, t);
	}
};
function fo(e, t) {
	e.style.display = t ? e[co] : "none", e[lo] = !t;
}
var po = /* @__PURE__ */ Symbol(""), mo = /(?:^|;)\s*display\s*:/;
function ho(e, t, n) {
	let r = e.style, i = g(n), a = !1;
	if (n && !i) {
		if (t) {
			if (g(t)) for (let e of t.split(";")) {
				let t = e.slice(0, e.indexOf(":")).trim();
				n[t] ?? _o(r, t, "");
			}
			else for (let e in t) n[e] ?? _o(r, e, "");
		}
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? _o(r, i, "") : xo(e, i, !g(t) && t ? t[i] : void 0, o) || _o(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[po];
			e && (n += ";" + e), r.cssText = n, a = mo.test(n);
		}
	} else t && e.removeAttribute("style");
	co in e && (i && t === n || (e[co] = a ? r.display : ""), e[lo] && (r.display = "none"));
}
var go = /\s*!important$/;
function _o(e, t, n) {
	if (d(n)) n.forEach((n) => _o(e, t, n));
	else if (n ??= "", t.startsWith("--")) go.test(n) ? e.setProperty(t, n.replace(go, ""), "important") : e.setProperty(t, n);
	else {
		let r = bo(e, t);
		go.test(n) ? e.setProperty(ie(r), n.replace(go, ""), "important") : e[r] = n;
	}
}
var vo = [
	"Webkit",
	"Moz",
	"ms"
], yo = {};
function bo(e, t) {
	let n = yo[t];
	if (n) return n;
	let r = T(t);
	if (r !== "filter" && r in e) return yo[t] = r;
	r = E(r);
	for (let n = 0; n < vo.length; n++) {
		let i = vo[n] + r;
		if (i in e) return yo[t] = i;
	}
	return t;
}
function xo(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && g(r) && n === r;
}
var So = "http://www.w3.org/1999/xlink";
function Co(e, t, n, r, i, a = _e(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(So, t.slice(6, t.length)) : e.setAttributeNS(So, t, n) : n == null || a && !ve(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : _(n) ? String(n) : n);
}
function wo(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? eo(n) : n);
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
function To(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function Eo(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var Do = /* @__PURE__ */ Symbol("_vei");
function Oo(e, t, n, r, i = null) {
	let a = e[Do] || (e[Do] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = jo(t);
		r ? To(e, n, a[t] = Fo(r, i), s) : o && (Eo(e, n, o, s), a[t] = void 0);
	}
}
var ko = /(Once|Passive|Capture)$/, Ao = /^on:?(?:Once|Passive|Capture)$/;
function jo(e) {
	let t, n;
	for (; (n = e.match(ko)) && !Ao.test(e);) t ||= {}, e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
	return [e[2] === ":" ? e.slice(3) : ie(e.slice(2)), t];
}
var Mo = 0, No = /* @__PURE__ */ Promise.resolve(), Po = () => Mo ||= (No.then(() => Mo = 0), Date.now());
function Fo(e, t) {
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
	return n.value = e, n.attached = Po(), n;
}
var Io = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Lo = (e, t, n, r, i, s) => {
	let c = i === "svg";
	t === "class" ? so(e, r, c) : t === "style" ? ho(e, n, r) : a(t) ? o(t) || Oo(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), 1) : t[0] === "^" ? (t = t.slice(1), 0) : Ro(e, t, r, c)) ? (wo(e, t, r), e.tagName.includes("-") || t !== "value" && t !== "checked" && t !== "selected" || Co(e, t, r, c, s, t !== "value")) : e._isVueCE && (zo(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !g(r))) ? wo(e, T(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Co(e, t, r, c));
};
function Ro(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Io(t) && h(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return Io(t) && g(n) ? !1 : t in e;
}
function zo(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = T(t);
	return Array.isArray(n) ? n.some((e) => T(e) === r) : Object.keys(n).some((e) => T(e) === r);
}
var Bo = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return d(t) ? (e) => se(t, e) : t;
};
function Vo(e) {
	e.target.composing = !0;
}
function Ho(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var Uo = /* @__PURE__ */ Symbol("_assign"), Wo = /* @__PURE__ */ Symbol("_initialValue");
function Go(e, t, n) {
	return t && (e = e.trim()), n && (e = le(e)), e;
}
var J = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e.parentNode && (e.type === "text" ? e[Wo] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Wo] = e.defaultValue.replace(/\r\n?/g, "\n"))), e[Uo] = Bo(i);
		let a = r || i.props && i.props.type === "number";
		To(e, t ? "change" : "input", (t) => {
			t.target.composing || e[Uo](Go(e.value, n, a));
		}), (n || a) && To(e, "change", () => {
			e.value = Go(e.value, n, a);
		}), t || (To(e, "compositionstart", Vo), To(e, "compositionend", Ho), To(e, "change", Ho));
	},
	mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
		let i = t ?? "", a = e[Wo];
		delete e[Wo], a !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== a ? e[Uo](Go(e.value, n, r)) : e.value = i;
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[Uo] = Bo(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? le(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, Ko = {
	deep: !0,
	created(e, t, n) {
		e[Uo] = Bo(n), To(e, "change", () => {
			let t = e._modelValue, n = Zo(e), r = e.checked, i = e[Uo];
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
			} else i(Qo(e, r));
		});
	},
	mounted: qo,
	beforeUpdate(e, t, n) {
		e[Uo] = Bo(n), qo(e, t, n);
	}
};
function qo(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (d(t)) i = we(t, r.props.value) > -1;
	else if (p(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = Ce(t, Qo(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var Jo = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		e._modelValue = t, To(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? le(Zo(e)) : Zo(e)), r = e.multiple, i = r ? p(e._modelValue) ? new Set(t) : t : t[0], a = e._pendingValue = [r, r ? d(i) ? t.slice() : t : i];
			try {
				e[Uo](i);
			} finally {
				En(() => {
					e._pendingValue === a && (e._pendingValue = void 0);
				});
			}
		}), e[Uo] = Bo(r);
	},
	mounted(e, { value: t, modifiers: { number: n } }) {
		Xo(e, t, n);
	},
	beforeUpdate(e, { value: t }, n) {
		e._modelValue = t, e[Uo] = Bo(n);
	},
	updated(e, { value: t, modifiers: { number: n } }) {
		let r = e._pendingValue;
		e._pendingValue = void 0, r && r[0] === e.multiple && Yo(t, r[1], r[0]) || Xo(e, t, n);
	}
};
function Yo(e, t, n) {
	if (!n || d(e)) return Ce(e, t);
	if (p(e)) {
		if (e.size !== t.length) return !1;
		for (let n of t) if (!e.has(n)) return !1;
		return !0;
	}
	return !1;
}
function Xo(e, t, n = !1) {
	let r = e.multiple, i = d(t);
	if (!r || i || p(t)) {
		for (let a = 0, o = e.options.length; a < o; a++) {
			let o = e.options[a], s = Zo(o);
			if (r) {
				if (i) {
					let e = typeof s;
					o.selected = e === "string" || e === "number" ? t.some((e) => String(e) === String(s)) : we(t, s) > -1;
				} else o.selected = t.has(s) || n && typeof s == "string" && t.has(le(s));
			} else if (Ce(Zo(o), t)) {
				e.selectedIndex !== a && (e.selectedIndex = a);
				return;
			}
		}
		!r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function Zo(e) {
	return "_value" in e ? e._value : e.value;
}
function Qo(e, t) {
	let n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t;
}
var $o = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], es = {
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
	exact: (e, t) => $o.some((n) => e[`${n}Key`] && !t.includes(n))
}, Y = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = es[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, ts = {
	esc: "escape",
	space: " ",
	up: "arrow-up",
	left: "arrow-left",
	right: "arrow-right",
	down: "arrow-down",
	delete: "backspace"
}, ns = (e, t) => {
	let n = e._withKeys ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n) => {
		if (!("key" in n)) return;
		let r = ie(n.key);
		if (t.some((e) => e === r || ts[e] === r)) return e(n);
	}));
}, rs = /* @__PURE__ */ s({ patchProp: Lo }, ao), is;
function as() {
	return is ||= Gi(rs);
}
var os = ((...e) => {
	let t = as().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = cs(e);
		if (!r) return;
		let i = t._component;
		h(i) || i.render || i.template || (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, ss(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function ss(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function cs(e) {
	return g(e) ? document.querySelector(e) : e;
}
// node_modules/vue-router/dist/devtools-C3Hva4Qk.mjs
var ls = typeof document < "u";
function us(e) {
	return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function ds(e) {
	return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && us(e.default);
}
var X = Object.assign;
function fs(e, t) {
	let n = {};
	for (let r in t) {
		let i = t[r];
		n[r] = ms(i) ? i.map(e) : e(i);
	}
	return n;
}
var ps = () => {}, ms = Array.isArray;
function hs(e, t) {
	let n = {};
	for (let r in e) n[r] = r in t ? t[r] : e[r];
	return n;
}
var gs = /#/g, _s = /&/g, vs = /\//g, ys = /=/g, bs = /\?/g, xs = /\+/g, Ss = /%5B/g, Cs = /%5D/g, ws = /%5E/g, Ts = /%60/g, Es = /%7B/g, Ds = /%7C/g, Os = /%7D/g, ks = /%20/g;
function As(e) {
	return e == null ? "" : encodeURI("" + e).replace(Ds, "|").replace(Ss, "[").replace(Cs, "]");
}
function js(e) {
	return As(e).replace(Es, "{").replace(Os, "}").replace(ws, "^");
}
function Ms(e) {
	return As(e).replace(xs, "%2B").replace(ks, "+").replace(gs, "%23").replace(_s, "%26").replace(Ts, "`").replace(Es, "{").replace(Os, "}").replace(ws, "^");
}
function Ns(e) {
	return Ms(e).replace(ys, "%3D");
}
function Ps(e) {
	return As(e).replace(gs, "%23").replace(bs, "%3F");
}
function Fs(e) {
	return Ps(e).replace(vs, "%2F");
}
function Is(e) {
	if (e == null) return null;
	try {
		return decodeURIComponent("" + e);
	} catch {}
	return "" + e;
}
var Ls = /\/$/, Rs = (e) => e.replace(Ls, "");
function zs(e, t, n = "/") {
	let r, i = {}, a = "", o = "", s = t.indexOf("#"), c = t.indexOf("?");
	return c = s >= 0 && c > s ? -1 : c, c >= 0 && (r = t.slice(0, c), a = t.slice(c, s > 0 ? s : t.length), i = e(a.slice(1))), s >= 0 && (r ||= t.slice(0, s), o = t.slice(s, t.length)), r = qs(r ?? t, n), {
		fullPath: r + a + o,
		path: r,
		query: i,
		hash: Is(o)
	};
}
function Bs(e, t) {
	let n = t.query ? e(t.query) : "";
	return t.path + (n && "?") + n + (t.hash || "");
}
function Vs(e, t) {
	return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Hs(e, t, n) {
	let r = t.matched.length - 1, i = n.matched.length - 1;
	return r > -1 && r === i && Us(t.matched[r], n.matched[i]) && Ws(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Us(e, t) {
	return (e.aliasOf || e) === (t.aliasOf || t);
}
function Ws(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (var n in e) if (!Gs(e[n], t[n])) return !1;
	return !0;
}
function Gs(e, t) {
	return ms(e) ? Ks(e, t) : ms(t) ? Ks(t, e) : e?.valueOf() === t?.valueOf();
}
function Ks(e, t) {
	return ms(t) ? e.length === t.length && e.every((e, n) => e === t[n]) : e.length === 1 && e[0] === t;
}
function qs(e, t) {
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
var Js = {
	path: "/",
	name: void 0,
	params: {},
	query: {},
	hash: "",
	fullPath: "/",
	matched: [],
	meta: {},
	redirectedFrom: void 0
}, Ys = /* @__PURE__ */ function(e) {
	return e.pop = "pop", e.push = "push", e;
}({}), Xs = /* @__PURE__ */ function(e) {
	return e.back = "back", e.forward = "forward", e.unknown = "", e;
}({});
function Zs(e) {
	if (!e) {
		if (ls) {
			let t = document.querySelector("base");
			e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
		} else e = "/";
	}
	return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Rs(e);
}
var Qs = /^[^#]+#/;
function $s(e, t) {
	return e.replace(Qs, "#") + t;
}
function ec(e, t) {
	let n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
	return {
		behavior: t.behavior,
		left: r.left - n.left - (t.left || 0),
		top: r.top - n.top - (t.top || 0)
	};
}
var tc = () => ({
	left: window.scrollX,
	top: window.scrollY
});
function nc(e) {
	let t;
	if ("el" in e) {
		let n = e.el, r = typeof n == "string" && n.startsWith("#"), i = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
		if (!i) return;
		t = ec(i, e);
	} else t = e;
	"scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left == null ? window.scrollX : t.left, t.top == null ? window.scrollY : t.top);
}
function rc(e, t) {
	return (history.state ? history.state.position - t : -1) + e;
}
var ic = /* @__PURE__ */ new Map();
function ac(e, t) {
	ic.set(e, t);
}
function oc(e) {
	let t = ic.get(e);
	return ic.delete(e), t;
}
function sc(e) {
	return typeof e == "string" || e && typeof e == "object";
}
function cc(e) {
	return typeof e == "string" || typeof e == "symbol";
}
var lc = /* @__PURE__ */ function(e) {
	return e[e.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", e[e.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", e[e.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", e[e.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", e[e.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", e;
}({}), uc = Symbol("");
lc.MATCHER_NOT_FOUND, lc.NAVIGATION_GUARD_REDIRECT, lc.NAVIGATION_ABORTED, lc.NAVIGATION_CANCELLED, lc.NAVIGATION_DUPLICATED;
function dc(e, t) {
	return X(/* @__PURE__ */ Error(), {
		type: e,
		[uc]: !0
	}, t);
}
function fc(e, t) {
	return e instanceof Error && uc in e && (t == null || !!(e.type & t));
}
function pc(e) {
	let t = {};
	if (e === "" || e === "?") return t;
	let n = (e[0] === "?" ? e.slice(1) : e).split("&");
	for (let e = 0; e < n.length; ++e) {
		let r = n[e].replace(xs, " "), i = r.indexOf("="), a = Is(i < 0 ? r : r.slice(0, i)), o = i < 0 ? null : Is(r.slice(i + 1));
		if (a in t) {
			let e = t[a];
			ms(e) || (e = t[a] = [e]), e.push(o);
		} else t[a] = o;
	}
	return t;
}
function mc(e) {
	let t = "";
	for (let n in e) {
		let r = e[n];
		n = Ns(n), r == null ? r !== void 0 && (t += (t.length ? "&" : "") + n) : (ms(r) ? r.map((e) => e && Ms(e)) : [r && Ms(r)]).forEach((e) => {
			e !== void 0 && (t += (t.length ? "&" : "") + n, e != null && (t += "=" + e));
		});
	}
	return t;
}
function hc(e) {
	let t = {};
	for (let n in e) {
		let r = e[n];
		r !== void 0 && (t[n] = ms(r) ? r.map((e) => e == null ? null : "" + e) : r == null ? r : "" + r);
	}
	return t;
}
var gc = Symbol(""), _c = Symbol(""), vc = Symbol(""), yc = Symbol(""), bc = Symbol("");
function xc() {
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
function Sc(e, t, n, r, i, a = (e) => e()) {
	let o = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
	return () => new Promise((s, c) => {
		let l = (e) => {
			e === !1 ? c(dc(lc.NAVIGATION_ABORTED, {
				from: n,
				to: t
			})) : e instanceof Error ? c(e) : sc(e) ? c(dc(lc.NAVIGATION_GUARD_REDIRECT, {
				from: t,
				to: e
			})) : (o && r.enterCallbacks[i] === o && typeof e == "function" && o.push(e), s());
		}, u = a(() => e.call(r && r.instances[i], t, n, l)), d = Promise.resolve(u);
		e.length < 3 && (d = d.then(l)), d.catch((e) => c(e));
	});
}
function Cc(e, t, n, r, i = (e) => e()) {
	let a = [];
	for (let o of e) for (let e in o.components) {
		let s = o.components[e];
		if (t === "beforeRouteEnter" || o.instances[e]) {
			if (us(s)) {
				let c = (s.__vccOpts || s)[t];
				c && a.push(Sc(c, n, r, o, e, i));
			} else {
				let c = s();
				a.push(() => c.then((a) => {
					if (!a) throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);
					let s = ds(a) ? a.default : a;
					o.mods[e] = a, o.components[e] = s;
					let c = (s.__vccOpts || s)[t];
					return c && Sc(c, n, r, o, e, i)();
				}));
			}
		}
	}
	return a;
}
function wc(e, t) {
	let n = [], r = [], i = [], a = Math.max(t.matched.length, e.matched.length);
	for (let o = 0; o < a; o++) {
		let a = t.matched[o];
		a && (e.matched.find((e) => Us(e, a)) ? r.push(a) : n.push(a));
		let s = e.matched[o];
		s && (t.matched.find((e) => Us(e, s)) || i.push(s));
	}
	return [
		n,
		r,
		i
	];
}
// node_modules/vue-router/dist/vue-router.mjs
var Tc = () => location.protocol + "//" + location.host;
function Ec(e, t) {
	let { pathname: n, search: r, hash: i } = t, a = e.indexOf("#");
	if (a > -1) {
		let t = i.includes(e.slice(a)) ? e.slice(a).length : 1, n = i.slice(t);
		return n[0] !== "/" && (n = "/" + n), Vs(n, "");
	}
	return Vs(n, e) + r + i;
}
function Dc(e, t, n, r) {
	let i = [], a = [], o = null, s = ({ state: a }) => {
		let s = Ec(e, location), c = n.value, l = t.value, u = 0;
		if (a) {
			if (n.value = s, t.value = a, o && o === c) {
				o = null;
				return;
			}
			u = l ? a.position - l.position : 0;
		} else r(s);
		i.forEach((e) => {
			e(n.value, c, {
				delta: u,
				type: Ys.pop,
				direction: u ? u > 0 ? Xs.forward : Xs.back : Xs.unknown
			});
		});
	};
	function c() {
		o = n.value;
	}
	function l(e) {
		i.push(e);
		let t = () => {
			let t = i.indexOf(e);
			t > -1 && i.splice(t, 1);
		};
		return a.push(t), t;
	}
	function u() {
		if (document.visibilityState === "hidden") {
			let { history: e } = window;
			if (!e.state) return;
			e.replaceState(X({}, e.state, { scroll: tc() }), "");
		}
	}
	function d() {
		for (let e of a) e();
		a = [], window.removeEventListener("popstate", s), window.removeEventListener("pagehide", u), document.removeEventListener("visibilitychange", u);
	}
	return window.addEventListener("popstate", s), window.addEventListener("pagehide", u), document.addEventListener("visibilitychange", u), {
		pauseListeners: c,
		listen: l,
		destroy: d
	};
}
function Oc(e, t, n, r = !1, i = !1) {
	return {
		back: e,
		current: t,
		forward: n,
		replaced: r,
		position: window.history.length,
		scroll: i ? tc() : null
	};
}
function kc(e) {
	let { history: t, location: n } = window, r = { value: Ec(e, n) }, i = { value: t.state };
	i.value || a(r.value, {
		back: null,
		current: r.value,
		forward: null,
		position: t.length - 1,
		replaced: !0,
		scroll: null
	}, !0);
	function a(r, a, o) {
		let s = e.indexOf("#"), c = s > -1 ? (n.host && document.querySelector("base") ? e : e.slice(s)) + r : Tc() + e + r;
		try {
			t[o ? "replaceState" : "pushState"](a, "", c), i.value = a;
		} catch (e) {
			console.error(e), n[o ? "replace" : "assign"](c);
		}
	}
	function o(e, n) {
		a(e, X({}, t.state, Oc(i.value.back, e, i.value.forward, !0), n, { position: i.value.position }), !0), r.value = e;
	}
	function s(e, n) {
		let o = X({}, i.value, t.state, {
			forward: e,
			scroll: tc()
		});
		a(o.current, o, !0), a(e, X({}, Oc(r.value, e, null), { position: o.position + 1 }, n), !1), r.value = e;
	}
	return {
		location: r,
		state: i,
		push: s,
		replace: o
	};
}
function Ac(e) {
	e = Zs(e);
	let t = kc(e), n = Dc(e, t.state, t.location, t.replace);
	function r(e, t = !0) {
		t || n.pauseListeners(), history.go(e);
	}
	let i = X({
		location: "",
		base: e,
		go: r,
		createHref: $s.bind(null, e)
	}, t, n);
	return Object.defineProperty(i, "location", {
		enumerable: !0,
		get: () => t.location.value
	}), Object.defineProperty(i, "state", {
		enumerable: !0,
		get: () => t.state.value
	}), i;
}
function jc(e = "") {
	let t = [], n = [["", {}]], r = 0;
	e = Zs(e);
	function i(e, t = {}) {
		r++, r !== n.length && n.splice(r), n.push([e, t]);
	}
	function a(e, n, { direction: r, delta: i }) {
		let a = {
			direction: r,
			delta: i,
			type: Ys.pop
		};
		for (let r of t) r(e, n, a);
	}
	let o = {
		location: "",
		state: {},
		base: e,
		createHref: $s.bind(null, e),
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
			let i = this.location, o = e < 0 ? Xs.back : Xs.forward;
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
function Mc(e) {
	return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), Ac(e);
}
var Nc = /* @__PURE__ */ function(e) {
	return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.Group = 2] = "Group", e;
}({}), Pc = /* @__PURE__ */ function(e) {
	return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.ParamRegExp = 2] = "ParamRegExp", e[e.ParamRegExpEnd = 3] = "ParamRegExpEnd", e[e.EscapeNext = 4] = "EscapeNext", e;
}(Pc || {}), Fc = {
	type: Nc.Static,
	value: ""
}, Ic = /[a-zA-Z0-9_]/;
function Lc(e) {
	if (!e) return [[]];
	if (e === "/") return [[Fc]];
	if (!e.startsWith("/")) throw Error(`Invalid path "${e}"`);
	function t(e) {
		throw Error(`ERR (${n})/"${l}": ${e}`);
	}
	let n = Pc.Static, r = n, i = [], a;
	function o() {
		a && i.push(a), a = [];
	}
	let s = 0, c, l = "", u = "";
	function d() {
		l &&= (n === Pc.Static ? a.push({
			type: Nc.Static,
			value: l
		}) : n === Pc.Param || n === Pc.ParamRegExp || n === Pc.ParamRegExpEnd ? (a.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`), a.push({
			type: Nc.Param,
			value: l,
			regexp: u,
			repeatable: c === "*" || c === "+",
			optional: c === "*" || c === "?"
		})) : t("Invalid state to consume buffer"), "");
	}
	function f() {
		l += c;
	}
	for (; s < e.length;) if (c = e[s++], c === "\\" && n !== Pc.ParamRegExp) r = n, n = Pc.EscapeNext;
	else switch (n) {
		case Pc.Static:
			c === "/" ? (l && d(), o()) : c === ":" ? (d(), n = Pc.Param) : f();
			break;
		case Pc.EscapeNext:
			f(), n = r;
			break;
		case Pc.Param:
			c === "(" ? n = Pc.ParamRegExp : Ic.test(c) ? f() : (d(), n = Pc.Static, c !== "*" && c !== "?" && c !== "+" && s--);
			break;
		case Pc.ParamRegExp:
			c === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + c : n = Pc.ParamRegExpEnd : u += c;
			break;
		case Pc.ParamRegExpEnd:
			d(), n = Pc.Static, c !== "*" && c !== "?" && c !== "+" && s--, u = "";
			break;
		default: t("Unknown state");
	}
	return n === Pc.ParamRegExp && t(`Unfinished custom RegExp for param "${l}"`), d(), o(), i;
}
var Rc = "[^/]+?", zc = {
	sensitive: !1,
	strict: !1,
	start: !0,
	end: !0
}, Bc = /* @__PURE__ */ function(e) {
	return e[e._multiplier = 10] = "_multiplier", e[e.Root = 90] = "Root", e[e.Segment = 40] = "Segment", e[e.SubSegment = 30] = "SubSegment", e[e.Static = 40] = "Static", e[e.Dynamic = 20] = "Dynamic", e[e.BonusCustomRegExp = 10] = "BonusCustomRegExp", e[e.BonusWildcard = -50] = "BonusWildcard", e[e.BonusRepeatable = -20] = "BonusRepeatable", e[e.BonusOptional = -8] = "BonusOptional", e[e.BonusStrict = .7000000000000001] = "BonusStrict", e[e.BonusCaseSensitive = .25] = "BonusCaseSensitive", e;
}(Bc || {}), Vc = /[.+*?^${}()[\]/\\|]/g;
function Hc(e, t) {
	let n = X({}, zc, t), r = [], i = n.start ? "^" : "", a = [], o = e.some((e) => e.some((e) => e.type === Nc.Param && /\\[1-9k]/.test(e.regexp || "")));
	for (let t of e) {
		let e = t.length ? [] : [Bc.Root];
		n.strict && !t.length && (i += "/");
		for (let r = 0; r < t.length; r++) {
			let s = t[r], c = Bc.Segment + (n.sensitive ? Bc.BonusCaseSensitive : 0);
			if (s.type === Nc.Static) r || (i += "/"), i += s.value.replace(Vc, "\\$&"), c += Bc.Static;
			else if (s.type === Nc.Param) {
				let { value: e, repeatable: n, optional: l, regexp: u } = s;
				a.push({
					name: e,
					repeatable: n,
					optional: l
				});
				let d = u || Rc;
				if (d !== Rc) {
					c += Bc.BonusCustomRegExp;
					try {
						`${d}`;
					} catch (t) {
						throw Error(`Invalid custom RegExp for param "${e}" (${d}): ` + t.message);
					}
				}
				let f = n ? `((?:${d})(?:/(?:${d}))*)` : `(${d})`, p = t[r + 1], m = t[r + 2];
				o || u || n || !m || m.type !== Nc.Param || m.regexp || p.type !== Nc.Static || (f = `([^/](?:(?!${p.value.replace(Vc, "\\$&")})[^/])*)`), r || (f = l && t.length < 2 ? `(?:/${f})` : "/" + f), l && (f += "?"), i += f, c += Bc.Dynamic, l && (c += Bc.BonusOptional), n && (c += Bc.BonusRepeatable), d === ".*" && (c += Bc.BonusWildcard);
			}
			e.push(c);
		}
		r.push(e);
	}
	if (n.strict && n.end) {
		let e = r.length - 1;
		r[e][r[e].length - 1] += Bc.BonusStrict;
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
			for (let e of i) if (e.type === Nc.Static) n += e.value;
			else if (e.type === Nc.Param) {
				let { value: a, repeatable: o, optional: s } = e, c = a in t ? t[a] : "";
				if (ms(c) && !o) throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);
				let l = ms(c) ? c.join("/") : c;
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
function Uc(e, t) {
	let n = 0;
	for (; n < e.length && n < t.length;) {
		let r = t[n] - e[n];
		if (r) return r;
		n++;
	}
	return e.length < t.length ? e.length === 1 && e[0] === Bc.Static + Bc.Segment ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === Bc.Static + Bc.Segment ? 1 : -1 : 0;
}
function Wc(e, t) {
	let n = 0, r = e.score, i = t.score;
	for (; n < r.length && n < i.length;) {
		let e = Uc(r[n], i[n]);
		if (e) return e;
		n++;
	}
	if (Math.abs(i.length - r.length) === 1) {
		if (Gc(r)) return 1;
		if (Gc(i)) return -1;
	}
	return i.length - r.length;
}
function Gc(e) {
	let t = e[e.length - 1];
	return e.length > 0 && t[t.length - 1] < 0;
}
var Kc = {
	strict: !1,
	end: !0,
	sensitive: !1
};
function qc(e, t, n) {
	let r = X(Hc(Lc(e.path), n), {
		record: e,
		parent: t,
		children: [],
		alias: []
	});
	return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function Jc(e, t) {
	let n = [], r = /* @__PURE__ */ new Map();
	t = hs(Kc, t);
	function i(e) {
		return r.get(e);
	}
	function a(e, n, r) {
		let i = !r, s = Xc(e);
		s.aliasOf = r && r.record;
		let l = hs(t, e), u = [s];
		if ("alias" in e) {
			let t = typeof e.alias == "string" ? [e.alias] : e.alias;
			for (let e of t) u.push(Xc(X({}, s, {
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
			if (d = qc(t, n, l), r ? r.alias.push(d) : (f ||= d, f !== d && f.alias.push(d), i && e.name && !Qc(d) && o(e.name)), nl(d) && c(d), s.children) {
				let e = s.children;
				for (let t = 0; t < e.length; t++) a(e[t], d, r && r.children[t]);
			}
			r ||= d;
		}
		return f ? () => {
			o(f);
		} : ps;
	}
	function o(e) {
		if (cc(e)) {
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
		let t = el(e, n);
		n.splice(t, 0, e), e.record.name && !Qc(e) && r.set(e.record.name, e);
	}
	function l(e, t) {
		let i, a = {}, o, s;
		if ("name" in e && e.name) {
			if (i = r.get(e.name), !i) throw dc(lc.MATCHER_NOT_FOUND, { location: e });
			s = i.record.name, a = X(Yc(t.params, i.keys.filter((e) => !e.optional).concat(i.parent ? i.parent.keys.filter((e) => e.optional) : []).map((e) => e.name)), e.params && Yc(e.params, i.keys.map((e) => e.name))), o = i.stringify(a);
		} else if (e.path != null) o = e.path, i = n.find((e) => e.re.test(o)), i && (a = i.parse(o), s = i.record.name);
		else {
			if (i = t.name ? r.get(t.name) : n.find((e) => e.re.test(t.path)), !i) throw dc(lc.MATCHER_NOT_FOUND, {
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
			meta: $c(c)
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
function Yc(e, t) {
	let n = {};
	for (let r of t) r in e && (n[r] = e[r]);
	return n;
}
function Xc(e) {
	let t = {
		path: e.path,
		redirect: e.redirect,
		name: e.name,
		meta: e.meta || {},
		aliasOf: e.aliasOf,
		beforeEnter: e.beforeEnter,
		props: Zc(e),
		children: e.children || [],
		instances: {},
		leaveGuards: /* @__PURE__ */ new Set(),
		updateGuards: /* @__PURE__ */ new Set(),
		enterCallbacks: {},
		components: "components" in e ? e.components || null : e.component && { default: e.component }
	};
	return Object.defineProperty(t, "mods", { value: {} }), t;
}
function Zc(e) {
	let t = {}, n = e.props || !1;
	if ("component" in e) t.default = n;
	else for (let r in e.components) t[r] = typeof n == "object" ? n[r] : n;
	return t;
}
function Qc(e) {
	for (; e;) {
		if (e.record.aliasOf) return !0;
		e = e.parent;
	}
	return !1;
}
function $c(e) {
	return e.reduce((e, t) => X(e, t.meta), {});
}
function el(e, t) {
	let n = 0, r = t.length;
	for (; n !== r;) {
		let i = n + r >> 1;
		Wc(e, t[i]) < 0 ? r = i : n = i + 1;
	}
	let i = tl(e);
	return i && (r = t.lastIndexOf(i, r - 1)), r;
}
function tl(e) {
	let t = e;
	for (; t = t.parent;) if (nl(t) && Wc(e, t) === 0) return t;
}
function nl({ record: e }) {
	return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function rl(e) {
	let t = Un(vc), n = Un(yc), r = q(() => {
		let n = I(e.to);
		return t.resolve(n);
	}), i = q(() => {
		let { matched: e } = r.value, { length: t } = e, i = e[t - 1], a = n.matched;
		if (!i || !a.length) return -1;
		let o = a.findIndex(Us.bind(null, i));
		if (o > -1) return o;
		let s = cl(e[t - 2]);
		return t > 1 && cl(i) === s && a[a.length - 1].path !== s ? a.findIndex(Us.bind(null, e[t - 2])) : o;
	}), a = q(() => i.value > -1 && sl(n.params, r.value.params)), o = q(() => i.value > -1 && i.value === n.matched.length - 1 && Ws(n.params, r.value.params));
	function s(n = {}) {
		if (ol(n)) {
			let n = t[I(e.replace) ? "replace" : "push"](I(e.to)).catch(ps);
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
function il(e) {
	return e.length === 1 ? e[0] : e;
}
var al = /* @__PURE__ */ hr({
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
	useLink: rl,
	setup(e, { slots: t }) {
		let n = /* @__PURE__ */ j(rl(e)), { options: r } = Un(vc), i = q(() => ({
			[ll(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
			[ll(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
		}));
		return () => {
			let r = t.default && il(t.default(n));
			return e.custom ? r : Xa("a", {
				"aria-current": n.isExactActive ? e.ariaCurrentValue : null,
				href: n.href,
				onClick: n.navigate,
				class: i.value
			}, r);
		};
	}
});
function ol(e) {
	if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && (e.button === void 0 || e.button === 0)) {
		if (e.currentTarget && e.currentTarget.getAttribute) {
			let t = e.currentTarget.getAttribute("target");
			if (/\b_blank\b/i.test(t)) return;
		}
		return e.preventDefault && e.preventDefault(), !0;
	}
}
function sl(e, t) {
	for (let n in t) {
		let r = t[n], i = e[n];
		if (typeof r == "string") {
			if (r !== i) return !1;
		} else if (!ms(i) || i.length !== r.length || r.some((e, t) => e.valueOf() !== i[t].valueOf())) return !1;
	}
	return !0;
}
function cl(e) {
	return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
var ll = (e, t, n) => e ?? t ?? n, ul = /* @__PURE__ */ hr({
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
		let r = Un(bc), i = q(() => e.route || r.value), a = Un(_c, 0), o = q(() => {
			let e = I(a), { matched: t } = i.value, n;
			for (; (n = t[e]) && !n.components;) e++;
			return e;
		}), s = q(() => i.value.matched[o.value]);
		Hn(_c, q(() => o.value + 1)), Hn(gc, s), Hn(bc, i);
		let c = /* @__PURE__ */ P();
		return R(() => [
			c.value,
			s.value,
			e.name
		], ([e, t, n], [r, i, a]) => {
			t && (t.instances[n] = e, i && i !== t && e && e === r && (t.leaveGuards.size || (t.leaveGuards = i.leaveGuards), t.updateGuards.size || (t.updateGuards = i.updateGuards))), !e || !t || i && Us(t, i) && r || (t.enterCallbacks[n] || []).forEach((t) => t(e));
		}, { flush: "post" }), () => {
			let r = i.value, a = e.name, o = s.value, l = o && o.components[a];
			if (!l) return dl(n.default, {
				Component: l,
				route: r
			});
			let u = o.props[a], d = Xa(l, X({}, u ? u === !0 ? r.params : typeof u == "function" ? u(r) : u : null, t, {
				onVnodeUnmounted: (e) => {
					e.component.isUnmounted && (o.instances[a] = null);
				},
				ref: c
			}));
			return dl(n.default, {
				Component: d,
				route: r
			}) || d;
		};
	}
});
function dl(e, t) {
	if (!e) return null;
	let n = e(t);
	return n.length === 1 ? n[0] : n;
}
var fl = ul;
function pl(e) {
	let t = Jc(e.routes, e), n = e.parseQuery || pc, r = e.stringifyQuery || mc, i = e.history, a = xc(), o = xc(), s = xc(), c = /* @__PURE__ */ F(Js), l = Js;
	ls && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
	let u = fs.bind(null, (e) => "" + e), d = fs.bind(null, Fs), f = fs.bind(null, Is);
	function p(e, n) {
		let r, i;
		return cc(e) ? (r = t.getRecordMatcher(e), i = n) : i = e, t.addRoute(i, r);
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
			let r = zs(n, e, a.path), o = t.resolve({ path: r.path }, a), s = i.createHref(r.fullPath);
			return X(r, o, {
				params: f(o.params),
				hash: Is(r.hash),
				redirectedFrom: void 0,
				href: s
			});
		}
		let o;
		if (e.path != null) o = X({}, e, { path: zs(n, e.path, a.path).path });
		else {
			let t = X({}, e.params);
			for (let e in t) t[e] ?? delete t[e];
			o = X({}, e, { params: d(t) }), a.params = d(a.params);
		}
		let s = t.resolve(o, a), l = e.hash || "";
		s.params = u(f(s.params));
		let p = Bs(r, X({}, e, {
			hash: js(l),
			path: s.path
		})), m = i.createHref(p);
		return X({
			fullPath: p,
			hash: l,
			query: r === mc ? hc(e.query) : e.query || {}
		}, s, {
			redirectedFrom: void 0,
			href: m
		});
	}
	function v(e) {
		return typeof e == "string" ? zs(n, e, c.value.path) : X({}, e);
	}
	function y(e, t) {
		if (l !== e) return dc(lc.NAVIGATION_CANCELLED, {
			from: t,
			to: e
		});
	}
	function b(e) {
		return C(e);
	}
	function x(e) {
		return b(X(v(e), { replace: !0 }));
	}
	function S(e, t) {
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
	function C(e, t) {
		let n = l = _(e), i = c.value, a = e.state, o = e.force, s = e.replace === !0, u = S(n, i);
		if (u) return C(X(v(u), {
			state: typeof u == "object" ? X({}, a, u.state) : a,
			force: o,
			replace: s
		}), t || n);
		let d = n;
		d.redirectedFrom = t;
		let f;
		return !o && Hs(r, i, n) && (f = dc(lc.NAVIGATION_DUPLICATED, {
			to: d,
			from: i
		}), ue(i, i, !0, !1)), (f ? Promise.resolve(f) : te(d, i)).catch((e) => fc(e) ? fc(e, lc.NAVIGATION_GUARD_REDIRECT) ? e : le(e) : se(e, d, i)).then((e) => {
			if (e) {
				if (fc(e, lc.NAVIGATION_GUARD_REDIRECT)) return C(X({ replace: s }, v(e.to), {
					state: typeof e.to == "object" ? X({}, a, e.to.state) : a,
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
		let t = fe.values().next().value;
		return t && typeof t.runWithContext == "function" ? t.runWithContext(e) : e();
	}
	function te(e, t) {
		let n, [r, i, s] = wc(e, t);
		n = Cc(r.reverse(), "beforeRouteLeave", e, t);
		for (let i of r) i.leaveGuards.forEach((r) => {
			n.push(Sc(r, e, t));
		});
		let c = w.bind(null, e, t);
		return n.push(c), me(n).then(() => {
			n = [];
			for (let r of a.list()) n.push(Sc(r, e, t));
			return n.push(c), me(n);
		}).then(() => {
			n = Cc(i, "beforeRouteUpdate", e, t);
			for (let r of i) r.updateGuards.forEach((r) => {
				n.push(Sc(r, e, t));
			});
			return n.push(c), me(n);
		}).then(() => {
			n = [];
			for (let r of s) if (r.beforeEnter) {
				if (ms(r.beforeEnter)) for (let i of r.beforeEnter) n.push(Sc(i, e, t));
				else n.push(Sc(r.beforeEnter, e, t));
			}
			return n.push(c), me(n);
		}).then(() => (e.matched.forEach((e) => e.enterCallbacks = {}), n = Cc(s, "beforeRouteEnter", e, t, ee), n.push(c), me(n))).then(() => {
			n = [];
			for (let r of o.list()) n.push(Sc(r, e, t));
			return n.push(c), me(n);
		}).catch((e) => fc(e, lc.NAVIGATION_CANCELLED) ? e : Promise.reject(e));
	}
	function ne(e, t, n) {
		s.list().forEach((r) => ee(() => r(e, t, n)));
	}
	function T(e, t, n, r, a) {
		let o = y(e, t);
		if (o) return o;
		let s = t === Js, l = ls ? history.state : {};
		n && (r || s ? i.replace(e.fullPath, X({ scroll: s && l && l.scroll }, a)) : i.push(e.fullPath, a)), c.value = e, ue(e, t, n, s), le();
	}
	let re;
	function ie() {
		re ||= i.listen((e, t, n) => {
			if (!pe.listening) return;
			let r = _(e), a = S(r, pe.currentRoute.value);
			if (a) {
				C(X(a, {
					replace: !0,
					force: !0
				}), r).catch(ps);
				return;
			}
			l = r;
			let o = c.value;
			ls && ac(rc(o.fullPath, n.delta), tc()), te(r, o).catch((e) => fc(e, lc.NAVIGATION_ABORTED | lc.NAVIGATION_CANCELLED) ? e : fc(e, lc.NAVIGATION_GUARD_REDIRECT) ? (C(X(v(e.to), { force: !0 }), r).then((e) => {
				fc(e, lc.NAVIGATION_ABORTED | lc.NAVIGATION_DUPLICATED) && !n.delta && n.type === Ys.pop && i.go(-1, !1);
			}).catch(ps), Promise.reject()) : (n.delta && i.go(-n.delta, !1), se(e, r, o))).then((e) => {
				e ||= T(r, o, !1), e && (n.delta && !fc(e, lc.NAVIGATION_CANCELLED) ? i.go(-n.delta, !1) : n.type === Ys.pop && fc(e, lc.NAVIGATION_ABORTED | lc.NAVIGATION_DUPLICATED) && i.go(-1, !1)), ne(r, o, e);
			}).catch(ps);
		});
	}
	let E = xc(), ae = xc(), oe;
	function se(e, t, n) {
		le(e);
		let r = ae.list();
		return r.length ? r.forEach((r) => r(e, t, n)) : console.error(e), Promise.reject(e);
	}
	function ce() {
		return oe && c.value !== Js ? Promise.resolve() : new Promise((e, t) => {
			E.add([e, t]);
		});
	}
	function le(e) {
		return oe || (oe = !e, ie(), E.list().forEach(([t, n]) => e ? n(e) : t()), E.reset()), e;
	}
	function ue(t, n, r, i) {
		let { scrollBehavior: a } = e;
		if (!ls || !a) return Promise.resolve();
		let o = !r && oc(rc(t.fullPath, 0)) || (i || !r) && history.state && history.state.scroll || null;
		return En().then(() => a(t, n, o)).then((e) => e && nc(e)).catch((e) => se(e, t, n));
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
			e.component("RouterLink", al), e.component("RouterView", fl), e.config.globalProperties.$router = pe, Object.defineProperty(e.config.globalProperties, "$route", {
				enumerable: !0,
				get: () => I(c)
			}), ls && !D && c.value === Js && (D = !0, b(i.location).catch((e) => {}));
			let t = {};
			for (let e in Js) Object.defineProperty(t, e, {
				get: () => c.value[e],
				enumerable: !0
			});
			e.provide(vc, pe), e.provide(yc, /* @__PURE__ */ Ut(t)), e.provide(bc, c);
			let n = e.unmount;
			fe.add(e), e.unmount = function() {
				fe.delete(e), fe.size < 1 && (l = Js, re && re(), re = null, c.value = Js, D = !1, oe = !1), n();
			};
		}
	};
	function me(e) {
		return e.reduce((e, t) => e.then(() => ee(t)), Promise.resolve());
	}
	return pe;
}
function ml() {
	return Un(vc);
}
function hl(e) {
	return Un(yc);
}
var gl = pl({
	history: jc(),
	routes: [{
		path: "/:view(.*)*",
		name: "legacy-view",
		component: { render: () => null }
	}]
}), _l = /* @__PURE__ */ new Set([
	"projects",
	"saved",
	"myideas",
	"myprompts",
	"events",
	"tracks",
	"artists"
]);
function vl(e, t = null) {
	let n = typeof e == "string" && e ? e : "home";
	return n === "producer" && t?.kind === "production" && typeof t.id == "string" && /^[a-zA-Z0-9_-]{1,128}$/.test(t.id) ? "/producer/detail/" + encodeURIComponent(t.id) : n === "tracks" && t?.kind === "track" ? "/account/tracks/detail" : n === "detail" ? "/catalog/detail" : _l.has(n) ? "/account/" + n : "/" + encodeURIComponent(n);
}
function yl(e) {
	if (e === "/catalog/detail") return "catalog";
	if (e === "/producer/detail" || e.startsWith("/producer/detail/")) return "producer";
	if (e.startsWith("/account/")) return "account";
	try {
		return decodeURIComponent(e.slice(1)) || "home";
	} catch {
		return "home";
	}
}
var bl = null, xl = Promise.resolve(), Sl = "replace", Cl = 0, wl = 0, Tl = [], El = [], Dl = -1, Ol = /* @__PURE__ */ F(0), kl = /* @__PURE__ */ Wt(Ol);
function Al() {
	Ol.value++;
}
var jl = /* @__PURE__ */ new Set([
	"overview",
	"ideas",
	"prompts",
	"artists"
]);
function Ml(e) {
	return e?.kind !== "genre" || typeof e.id != "string" || !/^[a-z0-9-]{1,100}$/.test(e.id) || !jl.has(e.tab) ? null : Object.freeze({
		kind: "genre",
		id: e.id,
		tab: e.tab
	});
}
function Nl(e) {
	return e?.kind !== "track" || typeof e.id != "string" || !/^[a-zA-Z0-9_-]{1,128}$/.test(e.id) ? null : Object.freeze({
		kind: "track",
		id: e.id
	});
}
function Pl(e) {
	return Ml(e) || Nl(e) || (e?.kind === "production" && typeof e.id == "string" && /^[a-zA-Z0-9_-]{1,128}$/.test(e.id) ? Object.freeze({
		kind: "production",
		id: e.id
	}) : null);
}
function Fl(e, t, n = null) {
	let r = Pl(n);
	if (Dl < 0) Tl = [e], El = [r], Dl = 0;
	else if (t === "push") Tl = Tl.slice(0, Dl + 1), El = El.slice(0, Dl + 1), Tl.push(e), El.push(r), Dl = Tl.length - 1;
	else {
		let t = Tl[Dl] === e ? El[Dl] : null;
		Tl[Dl] = e, El[Dl] = r || t || null;
	}
	Al();
}
function Il(e) {
	let t = e === "back" ? -1 : +(e === "forward"), n = Dl + t;
	return t && n >= 0 && n < Tl.length ? Object.freeze({
		path: Tl[n],
		context: El[n] || null,
		index: n,
		offset: t
	}) : null;
}
function Ll(e) {
	return Il(e);
}
function Rl(e) {
	if (typeof e != "string" || !/^\/[a-z][a-z0-9-]*$/i.test(e)) return null;
	try {
		return decodeURIComponent(e.slice(1));
	} catch {
		return null;
	}
}
function zl(e, { historyMode: t = "replace", context: n = null, source: r = "legacy" } = {}) {
	let i = Pl(n), a = vl(e, i);
	if (a === bl) return i && (xl = xl.then(() => {
		gl.currentRoute.value.path === a && Dl >= 0 && Tl[Dl] === a && (El[Dl] = i, Al());
	})), xl;
	bl = a;
	let o = t === "push" ? "push" : "replace";
	return xl = xl.then(async () => {
		gl.currentRoute.value.path === a ? i && Dl >= 0 && (El[Dl] = i, Al()) : await gl[o](a) || (Fl(a, o, i), Sl = o, o === "push" && !i && r === "menu" && Cl++, o === "push" && !i && r === "shortcut" && wl++);
	}).catch((e) => {
		console.warn("[SUNOBOOM] Vue Router memory navigation failed; legacy routing remains active.", e);
	}), xl;
}
function Bl() {
	return xl;
}
function Vl(e) {
	let t = xl.then(() => {
		let t = Il(e);
		return t ? new Promise((n) => {
			let r = !1, i = () => {}, a;
			function o(o) {
				r || (r = !0, i(), clearTimeout(a), o && (Dl = t.index, bl = t.path, Sl = e, Al()), n(o));
			}
			i = gl.afterEach((e, n, r) => o(!r && e.path === t.path)), a = setTimeout(() => o(!1), 2500), gl.go(t.offset);
		}) : !1;
	}).catch((e) => (console.warn("[SUNOBOOM] Vue memory history traversal failed; legacy navigation retained.", e), !1));
	return xl = t.then(() => void 0), t;
}
function Hl() {
	let e = gl.currentRoute.value;
	return Object.freeze({
		path: e.path,
		name: e.name,
		active: yl(e.path),
		transition: Sl,
		menuPushes: Cl,
		shortcutPushes: wl,
		canGoBack: Dl > 0,
		canGoForward: Dl >= 0 && Dl < Tl.length - 1,
		historyDepth: Tl.length,
		historyPosition: Dl,
		context: El[Dl] || null
	});
}
// src/vue/shell/ApplicationShell.vue
var Ul = {
	class: "app",
	"data-sb-vue-shell": ""
}, Wl = { class: "side" }, Gl = { class: "brand" }, Kl = { class: "sb-brand-version-row" }, ql = ["src"], Jl = { class: "main" }, Yl = ["data-sb-page-fallback"], Xl = {
	key: 0,
	"data-sb-workspace": "notice-panel",
	style: { display: "contents" }
}, Zl = {
	__name: "ApplicationShell",
	props: {
		state: Object,
		portals: Array,
		resources: Object
	},
	setup(e) {
		let t = /* @__PURE__ */ hr({
			props: ["entry"],
			setup(e) {
				return Lr((t) => (e.entry.fail(t), !1)), () => Xa(e.entry.component, e.entry.props);
			}
		});
		return (n, r) => (H(), U(V, null, [W("div", Ul, [
			W("aside", Wl, [
				W("div", Gl, [W("div", Kl, [W("img", {
					class: "sb-brand-logo",
					src: e.state.frame.logo,
					alt: "SUNOBOOM — фирменный логотип"
				}, null, 8, ql)]), r[0] ||= W("div", { class: "brand-sub sb-brand-tagline" }, "Больше, чем музыка", -1)]),
				r[1] ||= W("div", { class: "side-heading" }, "РАБОЧЕЕ ПРОСТРАНСТВО", -1),
				r[2] ||= W("div", {
					"data-sb-vue-sidebar": "",
					style: { display: "contents" }
				}, null, -1),
				r[3] ||= W("div", { class: "side-bottom" }, [W("strong", null, [W("i", { class: "mini-dot" }), G(" Творческая лаборатория")]), W("p", null, "Прототип без сервера. Данные хранятся на твоём устройстве.")], -1)
			]),
			W("main", Jl, [
				r[4] ||= W("div", {
					class: "top",
					"data-sb-vue-top": ""
				}, null, -1),
				r[5] ||= W("div", {
					"data-sb-vue-history": "",
					class: "sb-vue-history-host"
				}, null, -1),
				W("div", {
					"data-sb-vue-page": "",
					"data-v-app": "",
					"data-sb-page-fallback": e.state.pageError ? "" : void 0,
					style: { display: "contents" }
				}, [va(I(fl), null, {
					default: Bn(({ Component: t }) => [(H(), pa(Br(t), {
						key: e.state.revision,
						model: e.state.page,
						revision: e.state.revision,
						resources: e.resources
					}, null, 8, [
						"model",
						"revision",
						"resources"
					]))]),
					_: 1
				})], 8, Yl),
				e.state.frame.noticeOpen ? (H(), U("div", Xl)) : K("", !0),
				r[6] ||= W("div", { class: "footer" }, "SUNOBOOM · независимая творческая лаборатория · не является продуктом Suno", -1)
			]),
			r[7] ||= W("nav", {
				class: "mobile-nav",
				"data-sb-vue-mobile": ""
			}, null, -1)
		]), (H(!0), U(V, null, B(e.portals, (e) => (H(), pa(sr, {
			key: e.id,
			to: e.target
		}, [va(I(t), { entry: e }, null, 8, ["entry"])], 8, ["to"]))), 128))], 64));
	}
}, Ql = /* @__PURE__ */ new WeakMap();
function $l(e, t) {
	Ql.set(/* @__PURE__ */ M(e), t);
}
function eu(e, t, n) {
	let r = Ql.get(/* @__PURE__ */ M(e))?.get(t);
	n && r && n.replaceChildren(...r);
}
function tu(e, t) {
	for (let n of Ql.get(/* @__PURE__ */ M(t))?.keys() || []) eu(t, n, e.querySelector("#" + n));
}
// src/vue/pages/PageView.vue
var nu = /* @__PURE__ */ hr({
	inheritAttrs: !1,
	props: [
		"tag",
		"attrs",
		"boundary",
		"model"
	],
	setup(e) {
		let t = /* @__PURE__ */ P(null);
		return z(() => {
			eu(e.model, e.boundary, t.value);
		}), () => Xa(e.tag, {
			...e.attrs,
			ref: t
		});
	}
});
function ru(e, t) {
	return "text" in e ? e.text : e.nativeBoundary ? Xa(nu, {
		tag: e.tag,
		attrs: e.props,
		boundary: e.nativeBoundary,
		model: t
	}) : e.feature ? Xa(e.tag, e.props, [Xa(e.feature.component, e.feature.props)]) : Xa(e.tag, e.props, e.children.map((e) => ru(e, t)));
}
var iu = /* @__PURE__ */ hr({
	name: "WorkspacePageView",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return () => e.model.layout.map((t) => ru(t, e.model));
	}
}), au = /* @__PURE__ */ hr({
	props: ["resources", "revision"],
	setup(e) {
		let t = /* @__PURE__ */ P(null);
		return z(() => e.resources.attach(e.revision, t.value)), () => Xa("div", {
			"data-sb-native-page-fallback": "",
			ref: t
		});
	}
}), ou = /* @__PURE__ */ hr({
	name: "ApplicationPage",
	props: [
		"model",
		"revision",
		"resources"
	],
	setup(e) {
		let t = /* @__PURE__ */ P(!1);
		return Lr((n) => (t.value = !0, e.resources.failed(e.revision, n), !1)), () => e.model && !t.value ? Xa(iu, { model: e.model }) : Xa(au, {
			resources: e.resources,
			revision: e.revision
		});
	}
}), su = {
	home: [{
		tag: "div",
		props: { id: "sb-vue-dashboard" },
		slot: "sb-vue-dashboard"
	}],
	account: [{
		tag: "div",
		props: { id: "sb-vue-account-home" },
		slot: "sb-vue-account-home"
	}],
	ideas: [{
		tag: "div",
		props: { id: "sb-vue-ideas-page" },
		slot: "sb-vue-ideas-page"
	}],
	saved: [{
		tag: "div",
		props: { id: "sb-vue-library-collection" },
		slot: "sb-vue-library-collection"
	}],
	projects: [
		{
			tag: "div",
			props: {
				class: "account-back",
				"data-sb-workspace": "back"
			},
			slot: "back"
		},
		{
			tag: "header",
			props: { class: "heading" },
			children: [{
				tag: "h1",
				props: {},
				children: [{ text: "Мои проекты" }]
			}, {
				tag: "p",
				props: {},
				children: [{ text: "Храни замыслы исполнителей, EP и будущих песен. Эта версия работает локально: участники пока не видят проекты друг друга." }]
			}]
		},
		{
			tag: "div",
			props: { class: "projects-layout" },
			children: [{
				tag: "div",
				props: { class: "panel" },
				children: [{
					tag: "div",
					props: { id: "sb-vue-project-creator" },
					slot: "sb-vue-project-creator"
				}, {
					tag: "div",
					props: { id: "sb-vue-projects-list" },
					slot: "sb-vue-projects-list"
				}]
			}, {
				tag: "div",
				props: {
					class: "panel",
					id: "sb-vue-project-detail"
				},
				slot: "sb-vue-project-detail"
			}]
		}
	],
	events: [
		{
			tag: "div",
			props: {
				class: "account-back",
				"data-sb-workspace": "back"
			},
			slot: "back"
		},
		{
			tag: "header",
			props: { class: "heading" },
			children: [
				{
					tag: "div",
					props: { class: "eyebrow" },
					children: [{ text: "ТВОИ ПЛАНЫ" }]
				},
				{
					tag: "h1",
					props: {},
					children: [{ text: "🗓️ Мои события" }]
				},
				{
					tag: "p",
					props: {},
					children: [{ text: "Релизы, студийные записи, встречи и другие важные даты. События сохраняются в этом браузере, без синхронизации с календарём телефона." }]
				}
			]
		},
		{ text: "\n" },
		{
			tag: "div",
			props: {
				class: "panel dash-event-editor",
				id: "event-editor"
			},
			children: [
				{
					tag: "div",
					props: { id: "sb-vue-event-fields" },
					slot: "sb-vue-event-fields"
				},
				{
					tag: "div",
					props: { id: "sb-vue-event-reminders" },
					slot: "sb-vue-event-reminders"
				},
				{ text: "\n" },
				{
					tag: "div",
					props: {
						class: "detail-actions",
						id: "sb-vue-event-actions"
					},
					slot: "sb-vue-event-actions"
				}
			]
		},
		{ text: "\n" },
		{
			tag: "div",
			props: { id: "sb-vue-events-list" },
			slot: "sb-vue-events-list"
		}
	],
	myprompts: [
		{
			tag: "div",
			props: {
				class: "account-back",
				"data-sb-workspace": "back"
			},
			slot: "back"
		},
		{ text: "\n" },
		{
			tag: "header",
			props: { class: "heading" },
			children: [{
				tag: "h1",
				props: {},
				children: [{ text: "🎛️ Мои промпты" }]
			}, {
				tag: "p",
				props: {},
				children: [{ text: "Сохраняй описания звучания для Suno — вручную или из конструктора Suno Studio." }]
			}]
		},
		{ text: "\n" },
		{
			tag: "div",
			props: {
				class: "panel account-editor",
				id: "prompt-editor"
			},
			children: [
				{ text: "\n" },
				{
					tag: "div",
					props: { id: "sb-vue-prompt-form" },
					slot: "sb-vue-prompt-form"
				},
				{ text: "\n" },
				{
					tag: "div",
					props: {
						class: "sbpa-editor-entry",
						"data-sb-workspace": "prompt-auditor"
					},
					slot: "prompt-auditor"
				},
				{
					tag: "div",
					props: {
						class: "detail-actions",
						"data-sb-workspace": "prompt-actions"
					},
					slot: "prompt-actions"
				},
				{ text: "\n" }
			]
		},
		{ text: "\n" },
		{
			tag: "div",
			props: { id: "sb-vue-prompts-list" },
			slot: "sb-vue-prompts-list"
		}
	],
	myideas: [
		{
			tag: "div",
			props: {
				class: "account-back",
				"data-sb-workspace": "back"
			},
			slot: "back"
		},
		{ text: "\n" },
		{
			tag: "header",
			props: { class: "heading" },
			children: [{
				tag: "h1",
				props: {},
				children: [{ text: "💡 Мои идеи" }]
			}, {
				tag: "p",
				props: {},
				children: [{ text: "Сохраняй собственные сюжеты и возвращайся к идеям из каталога и Idea Lab." }]
			}]
		},
		{ text: "\n" },
		{
			tag: "div",
			props: {
				class: "sb-poetry-quickbar",
				"data-sb-workspace": "quick-poetry"
			},
			slot: "quick-poetry"
		},
		{ text: "\n" },
		{
			tag: "div",
			props: {
				class: "panel account-editor",
				id: "idea-editor"
			},
			children: [
				{ text: "\n" },
				{
					tag: "h3",
					props: {},
					children: [{ value: "ideaEditorTitle" }]
				},
				{ text: "\n" },
				{
					tag: "div",
					props: { id: "sb-vue-idea-fields" },
					slot: "sb-vue-idea-fields"
				},
				{ text: "\n" },
				{
					tag: "div",
					props: {
						class: "lyrics-workbench",
						id: "sb-poetry-workbench"
					},
					children: [
						{ text: "\n" },
						{
							tag: "div",
							props: { class: "section-title" },
							children: [{
								tag: "h2",
								props: {},
								children: [{ text: "✍️ Текст песни" }]
							}]
						},
						{ text: "\n" },
						{
							tag: "p",
							props: { class: "workbench-note" },
							children: [{ text: "Вставь готовые слова. Если есть разметка «Куплет 1:», «Припев:» или [Verse], оставь её — мы используем эти пометки. Исходный текст не изменится." }]
						},
						{ text: "\n" },
						{
							tag: "div",
							props: {
								class: "field",
								id: "sb-vue-lyrics-source"
							},
							slot: "sb-vue-lyrics-source"
						},
						{ text: "\n" },
						{
							tag: "section",
							props: {
								class: "sb-poetry-panel",
								"aria-label": "Редактор песенной поэзии"
							},
							children: [
								{ text: "\n" },
								{
									tag: "div",
									props: { class: "sb-poetry-head" },
									children: [{
										tag: "span",
										props: {
											class: "sb-poetry-icon",
											"aria-hidden": "true"
										},
										children: [{ text: "♫" }]
									}, {
										tag: "div",
										props: {},
										children: [{
											tag: "h3",
											props: {},
											children: [{ text: "🔎 Редактор песенной поэзии" }]
										}, {
											tag: "p",
											props: {},
											children: [{ text: "Анализ ритмики, примерных рифм, повторов и удобства строк для пения. Оригинальный текст остаётся твоим." }]
										}]
									}]
								},
								{ text: "\n" },
								{
									tag: "div",
									props: {
										class: "sb-poetry-tools",
										"data-sb-workspace": "poetry-tools"
									},
									slot: "poetry-tools"
								},
								{ text: "\n" },
								{
									tag: "p",
									props: { class: "sb-poetry-small" },
									children: [{ text: "Автоударения используют словарь из более 2 млн словоформ и отдельный словарь неоднозначных слов. Красным подсвечиваются слова, для которых нужно выбрать ударение. Текст остаётся в браузере." }]
								},
								{ text: "\n" },
								{
									tag: "div",
									props: {
										id: "sb-poetry-auto-stress",
										class: "sb-poetry-auto-stress",
										"aria-live": "polite",
										"data-sb-native-boundary": "sb-poetry-auto-stress"
									},
									native: !0
								},
								{ text: "\n" },
								{
									tag: "div",
									props: {
										id: "sb-poetry-result",
										class: "sb-poetry-result",
										role: "region",
										"aria-live": "polite"
									},
									slot: "sb-poetry-result"
								},
								{ text: "\n" },
								{
									tag: "section",
									props: {
										class: "sb-vt-panel",
										id: "sb-vt-workbench",
										"aria-label": "Генератор тегов исполнения"
									},
									slot: "sb-vt-workbench"
								},
								{ text: "\n" }
							]
						},
						{ text: "\n" },
						{
							tag: "div",
							props: { class: "section-title" },
							children: [{
								tag: "h2",
								props: {},
								children: [{ text: "✨ Теги и усиление" }]
							}]
						},
						{ text: "\n" },
						{
							tag: "div",
							props: { id: "sb-vue-lyrics-tools" },
							slot: "sb-vue-lyrics-tools"
						},
						{ text: "\n" }
					]
				},
				{
					tag: "div",
					props: {
						class: "detail-actions",
						"data-sb-workspace": "idea-actions"
					},
					slot: "idea-actions"
				},
				{ text: "\n" }
			]
		},
		{ text: "\n" },
		{
			tag: "div",
			props: { id: "sb-vue-idea-collections" },
			slot: "sb-vue-idea-collections"
		}
	],
	catalog: [
		{
			tag: "header",
			props: { class: "genre-family-intro" },
			children: [
				{
					tag: "div",
					props: { class: "eyebrow" },
					children: [{ text: "SUNOBOOM · БИБЛИОТЕКА ЗНАНИЙ" }]
				},
				{
					tag: "h1",
					props: {},
					children: [{ text: "Академия" }]
				},
				{
					tag: "p",
					props: {},
					children: [{ text: "Музыкальная база знаний SUNOBOOM. Сейчас здесь собраны жанры и поджанры; позже появятся учебники и другие образовательные разделы." }]
				}
			]
		},
		{
			tag: "div",
			props: {
				class: "encyclopedia-sections",
				"aria-label": "Разделы Академии"
			},
			children: [
				{
					tag: "div",
					props: { class: "encyclopedia-section encyclopedia-section-active" },
					children: [
						{
							tag: "span",
							props: {
								class: "encyclopedia-section-icon",
								"aria-hidden": "true"
							},
							children: [{ text: "🎼" }]
						},
						{
							tag: "div",
							props: {},
							children: [{
								tag: "strong",
								props: {},
								children: [{ text: "Музыкальные жанры" }]
							}, {
								tag: "small",
								props: {},
								children: [{ value: "catalogCount" }]
							}]
						},
						{
							tag: "span",
							props: { class: "encyclopedia-section-status" },
							children: [{ text: "Открыто" }]
						}
					]
				},
				{
					tag: "span",
					props: {
						"data-sb-workspace": "tree-launch",
						style: "display:contents"
					},
					slot: "tree-launch"
				},
				{
					tag: "span",
					props: {
						"data-sb-workspace": "artist-launch",
						style: "display:contents"
					},
					slot: "artist-launch"
				},
				{
					tag: "div",
					props: { class: "encyclopedia-section encyclopedia-section-future" },
					children: [
						{
							tag: "span",
							props: {
								class: "encyclopedia-section-icon",
								"aria-hidden": "true"
							},
							children: [{ text: "📚" }]
						},
						{
							tag: "div",
							props: {},
							children: [{
								tag: "strong",
								props: {},
								children: [{ text: "Учебники" }]
							}, {
								tag: "small",
								props: {},
								children: [{ text: "В дальнейшем добавим обучающие материалы" }]
							}]
						},
						{
							tag: "span",
							props: { class: "encyclopedia-section-status" },
							children: [{ text: "Позже" }]
						}
					]
				}
			]
		},
		{
			tag: "details",
			props: {
				id: "sb-genre-tree",
				class: "sb-gt-section"
			},
			children: [{
				tag: "summary",
				props: {},
				children: [
					{
						tag: "span",
						props: { class: "sb-gt-summary-icon" },
						children: [{ text: "🕸️" }]
					},
					{
						tag: "span",
						props: {},
						children: [{
							tag: "strong",
							props: {},
							children: [{ text: "Музыкальное древо жанров" }]
						}, {
							tag: "small",
							props: {},
							children: [{ text: "Интерактивная карта происхождения и смешения музыки" }]
						}]
					},
					{
						tag: "span",
						props: { class: "sb-gt-summary-hint" },
						children: [{ text: "Исследовать связи" }]
					},
					{
						tag: "span",
						props: { class: "sb-gt-chevron" },
						children: [{ text: "⌄" }]
					}
				]
			}, {
				tag: "div",
				props: {
					id: "sb-gt-inner",
					class: "sb-gt-inner",
					"data-sb-native-boundary": "sb-gt-inner"
				},
				native: !0
			}],
			bind: "treeOpen"
		},
		{
			tag: "section",
			props: { id: "sb-vue-academy-root" },
			slot: "sb-vue-academy-root"
		}
	],
	studio: [
		{
			tag: "header",
			props: { class: "heading" },
			children: [{
				tag: "h1",
				props: {},
				children: [{ text: "Suno Studio " }, {
					tag: "span",
					props: { style: "color:#fd83c3" },
					children: [{ text: "✦" }]
				}]
			}, {
				tag: "p",
				props: {},
				children: [{ text: "Управляй звуком и получай английский промпт для генерации. Каждый параметр меняет текст в реальном времени." }]
			}]
		},
		{
			tag: "div",
			props: {
				class: "gm-studio-banner",
				"data-sb-workspace": "mixer-banner"
			},
			slot: "mixer-banner",
			bind: "mixerBanner"
		},
		{
			tag: "span",
			props: {
				"data-sb-workspace": "arranger-jump",
				style: "display:contents"
			},
			slot: "arranger-jump"
		},
		{
			tag: "div",
			props: {
				class: "studio-grid",
				"data-sb-vue-studio": "true"
			},
			slot: "studio-grid"
		},
		{
			tag: "section",
			props: {
				class: "panel",
				style: "margin-top:24px",
				id: "song-blueprint",
				"data-sb-workspace": "blueprint"
			},
			slot: "song-blueprint"
		},
		{
			tag: "section",
			props: {
				id: "sba-arranger",
				class: "sba-shell",
				"aria-labelledby": "sba-heading"
			},
			children: [
				{
					tag: "header",
					props: { class: "sba-hero" },
					children: [{
						tag: "div",
						props: { class: "sba-hero-copy" },
						children: [
							{
								tag: "span",
								props: { class: "sba-eyebrow" },
								children: [{ text: "SUNO STUDIO · КОНСТРУКТОР" }]
							},
							{
								tag: "h2",
								props: { id: "sba-heading" },
								children: [{ text: "Визуальная аранжировка " }, {
									tag: "span",
									props: {},
									children: [{ text: "✦" }]
								}]
							},
							{
								tag: "p",
								props: {},
								children: [{ text: "Собери структуру трека, настрой энергию каждого фрагмента и подготовь теги исполнения для Suno. Стандартные инструменты Studio останутся без изменений." }]
							}
						]
					}, {
						tag: "span",
						props: { class: "sba-hero-label" },
						children: [{ text: "ARRANGEMENT LAB · v0.75" }]
					}]
				},
				{
					tag: "div",
					props: { class: "sba-toolbar" },
					children: [
						{
							tag: "div",
							props: { class: "sba-preset-picker" },
							slot: "sba-preset-picker"
						},
						{
							tag: "span",
							props: {
								"data-sb-arranger-controls": "apply",
								style: "display:contents"
							},
							slot: "arranger-controls:apply"
						},
						{
							tag: "span",
							props: {
								class: "sba-draft-saved",
								id: "sba-saved"
							},
							children: [{ text: "Черновик сохраняется в браузере" }]
						}
					]
				},
				{
					tag: "div",
					props: {
						id: "sba-preset-confirm",
						"data-sb-arranger-controls": "preset-confirm",
						"aria-live": "polite"
					},
					slot: "sba-preset-confirm"
				},
				{
					tag: "section",
					props: {
						class: "sba-snake-overview",
						"aria-label": "Краткая схема последовательности блоков"
					},
					children: [
						{
							tag: "div",
							props: { class: "sba-snake-top" },
							children: [{
								tag: "div",
								props: {},
								children: [{
									tag: "span",
									props: { class: "sba-snake-eyebrow" },
									children: [{ text: "СХЕМА ПЕСНИ" }]
								}, {
									tag: "h3",
									props: {},
									children: [{ text: "Змейка аранжировки " }, {
										tag: "span",
										props: { "aria-hidden": "true" },
										children: [{ text: "〰" }]
									}]
								}]
							}, {
								tag: "div",
								props: {
									class: "sba-snake-tools",
									"data-sb-arranger-controls": "snake-tools"
								},
								slot: "arranger-controls:snake-tools"
							}]
						},
						{
							tag: "div",
							props: {
								id: "sba-snake-track",
								class: "sba-snake-track",
								"aria-live": "polite"
							},
							slot: "sba-snake-track"
						},
						{
							tag: "p",
							props: { class: "sba-snake-footnote" },
							children: [{ text: "Перетаскивай блоки в змейке мышью или пальцем. Порядок и черновик обновятся автоматически." }]
						},
						{
							tag: "span",
							props: {
								id: "sba-snake-status",
								class: "sba-sr-only",
								role: "status",
								"aria-live": "polite"
							},
							children: []
						}
					]
				},
				{
					tag: "section",
					props: {
						class: "sba-transition-hub",
						"aria-labelledby": "sba-transition-hub-title"
					},
					children: [
						{
							tag: "div",
							props: { class: "sba-transition-hub-heading" },
							children: [{
								tag: "div",
								props: { class: "sba-transition-hub-heading-copy" },
								children: [
									{
										tag: "span",
										props: { class: "sba-transition-hub-kicker" },
										children: [{ text: "НОВОЕ · v0.75" }]
									},
									{
										tag: "h3",
										props: { id: "sba-transition-hub-title" },
										children: [{ text: "✦ Конструктор музыкальных переходов" }]
									},
									{
										tag: "p",
										props: {},
										children: [{ text: "Соедини соседние блоки сбивкой, нарастанием, паузой, плавным переходом, затуханием или акцентом. Выбирай здесь — эффект появится в тегах Suno." }]
									}
								]
							}, {
								tag: "span",
								props: {
									id: "sba-transition-hub-meta",
									class: "sba-transition-hub-meta"
								},
								children: [{ value: "transitionCount" }]
							}]
						},
						{
							tag: "div",
							props: {
								id: "sba-transition-hub-list",
								class: "sba-transition-hub-list"
							},
							slot: "sba-transition-hub-list"
						},
						{
							tag: "span",
							props: {
								"data-sb-arranger-controls": "expand",
								style: "display:contents"
							},
							slot: "arranger-controls:expand"
						}
					]
				},
				{
					tag: "div",
					props: { class: "sba-body" },
					children: [{
						tag: "div",
						props: { class: "sba-editor" },
						children: [
							{
								tag: "div",
								props: { class: "sba-panel-title" },
								children: [{
									tag: "div",
									props: {},
									children: [{
										tag: "h3",
										props: {},
										children: [{ text: "Структура песни" }]
									}, {
										tag: "p",
										props: {},
										children: [{ text: "Перетаскивай блоки на компьютере или используй ↑ ↓ на телефоне." }]
									}]
								}, {
									tag: "span",
									props: {
										id: "sba-section-count",
										class: "sba-count"
									},
									children: [{ value: "arrangementCount" }]
								}]
							},
							{
								tag: "div",
								props: {
									class: "sba-add",
									id: "sba-add-editor",
									"data-sb-arranger-controls": "composer"
								},
								slot: "sba-add-editor"
							},
							{
								tag: "div",
								props: {
									id: "sba-cards",
									class: "sba-block-list"
								},
								slot: "sba-cards"
							},
							{
								tag: "span",
								props: {
									"data-sb-arranger-controls": "end-add",
									style: "display:contents"
								},
								slot: "arranger-controls:end-add"
							},
							{
								tag: "div",
								props: { class: "sba-chart-panel" },
								children: [{
									tag: "div",
									props: { class: "sba-panel-title" },
									children: [{
										tag: "div",
										props: {},
										children: [{
											tag: "h3",
											props: {},
											children: [{ text: "Кривая энергии" }]
										}, {
											tag: "p",
											props: {},
											children: [{ text: "Схематичная динамика от тихого вступления до кульминации." }]
										}]
									}]
								}, {
									tag: "div",
									props: {
										id: "sba-energy-chart",
										class: "sba-chart",
										role: "img",
										"aria-label": "Intro: 2 из 5; Verse 1: 2 из 5; Pre-Chorus: 3 из 5; Chorus: 5 из 5; Verse 2: 3 из 5; Chorus: 5 из 5; Bridge: 2 из 5; Final Chorus: 5 из 5; Outro: 1 из 5"
									},
									slot: "sba-energy-chart",
									bind: "energyChart"
								}]
							}
						]
					}, {
						tag: "aside",
						props: { class: "sba-result" },
						slot: "sba-result"
					}]
				}
			]
		},
		{
			tag: "section",
			props: {
				class: "sbpa-auditor",
				id: "sbpa-auditor",
				"aria-label": "Аудитор промптов"
			},
			slot: "sbpa-auditor"
		}
	],
	player: [{
		tag: "section",
		props: {
			class: "sbp-wrap",
			id: "sbp-page"
		},
		children: [
			{
				tag: "header",
				props: { class: "sbp-hero" },
				children: [{
					tag: "div",
					props: {},
					children: [
						{
							tag: "span",
							props: { class: "sbp-eyebrow" },
							children: [{ text: "SUNOBOOM · ЭКСПЕРИМЕНТАЛЬНАЯ ЗОНА" }]
						},
						{
							tag: "h1",
							props: {},
							children: [{ text: "Аудиоплеер " }, {
								tag: "em",
								props: {},
								children: [{ text: "LAB" }]
							}]
						},
						{
							tag: "p",
							props: {},
							children: [{ text: "Тестируем музыкальный плеер перед интеграцией с проектами и паспортами треков. Здесь можно слушать свои аудиофайлы прямо на устройстве." }]
						}
					]
				}, {
					tag: "span",
					props: { class: "sbp-test-badge" },
					children: [{ text: "🧪 ТЕСТОВАЯ ВЕРСИЯ" }]
				}]
			},
			{
				tag: "div",
				props: {
					class: "sbab-modes",
					"data-sb-workspace": "player-modes",
					role: "group",
					"aria-label": "Режим плеера"
				},
				slot: "player-modes"
			},
			{
				tag: "div",
				props: {
					id: "sb-vue-player-ab",
					hidden: !0
				},
				slot: "sb-vue-player-ab",
				bind: "playerAB"
			},
			{
				tag: "div",
				props: { id: "sb-vue-player-lab" },
				slot: "sb-vue-player-lab",
				bind: "playerLab"
			},
			{
				tag: "section",
				props: { class: "sbp-bottom" },
				children: [
					{
						tag: "div",
						props: {},
						children: [{
							tag: "strong",
							props: {},
							children: [{ text: "🔒 Приватность" }]
						}, {
							tag: "p",
							props: {},
							children: [{ text: "Локальные аудиофайлы воспроизводятся из памяти браузера и не загружаются на сервер SUNOBOOM." }]
						}]
					},
					{
						tag: "div",
						props: {},
						children: [{
							tag: "strong",
							props: {},
							children: [{ text: "💾 Сохранение" }]
						}, {
							tag: "p",
							props: {},
							children: [{ text: "После обновления вкладки файлы нужно добавить заново. Сохраняются только настройки громкости, скорости и повтора." }]
						}]
					},
					{
						tag: "div",
						props: {},
						children: [{
							tag: "strong",
							props: {},
							children: [{ text: "🔧 Тестовый режим" }]
						}, {
							tag: "p",
							props: {},
							children: [{ text: "Плеер пока не привязан к «Паспорту трека», «Моим проектам» и другим инструментам сайта." }]
						}]
					}
				]
			}
		]
	}],
	producer: [{
		tag: "div",
		props: { class: "sbpc-page" },
		children: [
			{
				tag: "header",
				props: { class: "sbpc-hero" },
				children: [
					{
						tag: "span",
						props: { class: "sbpc-kicker" },
						children: [{ text: "SUNOBOOM · РАБОЧЕЕ ПРОСТРАНСТВО" }]
					},
					{
						tag: "h1",
						props: {},
						children: [{ text: "Мастер " }, {
							tag: "span",
							props: {},
							children: [{ text: "✦" }]
						}]
					},
					{
						tag: "p",
						props: {},
						children: [{ text: "От идеи до релиза — единая рабочая карточка песни. Материалы связаны с существующими инструментами SUNOBOOM." }]
					},
					{
						tag: "div",
						props: { class: "sbpc-hero-stats" },
						children: [
							{
								tag: "span",
								props: {},
								children: [{
									tag: "strong",
									props: {},
									children: [{ value: "productionCount" }]
								}, { text: " песен в работе" }]
							},
							{
								tag: "span",
								props: {},
								children: [{
									tag: "strong",
									props: {},
									children: [{ value: "productionDone" }]
								}, { text: " полностью пройдено" }]
							},
							{
								tag: "span",
								props: {},
								children: [{ text: "Хранение: этот браузер" }]
							}
						]
					}
				]
			},
			{
				tag: "section",
				props: {
					class: "sbpc-create",
					"data-sb-workspace": "producer-create"
				},
				slot: "producer-create"
			},
			{
				tag: "div",
				props: { class: "sbpc-layout" },
				children: [{
					tag: "aside",
					props: { class: "sbpc-sidebar" },
					children: [{
						tag: "div",
						props: {
							class: "sbpc-side-heading",
							"data-sb-workspace": "producer-search"
						},
						slot: "producer-search"
					}, {
						tag: "div",
						props: {
							id: "sbpc-list",
							class: "sbpc-song-list",
							"data-sb-vue-producer-list": ""
						},
						slot: "sbpc-list"
					}]
				}, {
					tag: "div",
					props: { class: "sbpc-empty-state" },
					children: [{
						tag: "strong",
						props: {},
						children: [{ text: "Пока нет песен в работе" }]
					}, {
						tag: "p",
						props: {},
						children: [{ text: "Мастер объединяет уже созданные идеи, текст, аранжировку, генерации, прослушивание и релизы." }]
					}]
				}]
			},
			{
				tag: "p",
				props: { class: "sbpc-privacy" },
				children: [{ text: "🔒 Локальная работа: синхронизации между устройствами нет. Аудиофайлы остаются в «Мои песни»; сам раздел «Мастер» хранит только ссылки, этапы, заметки, историю и снимок аранжировки." }]
			}
		]
	}],
	tracks: [
		{
			tag: "div",
			props: {
				class: "account-back",
				"data-sb-workspace": "back"
			},
			slot: "back"
		},
		{
			tag: "header",
			props: { class: "heading" },
			children: [
				{
					tag: "div",
					props: { class: "eyebrow" },
					children: [{ text: "ОТ ПЕРВОЙ ИДЕИ ДО РЕЛИЗА" }]
				},
				{
					tag: "h1",
					props: {},
					children: [{ text: "🎼 Паспорт трека" }]
				},
				{
					tag: "p",
					props: {},
					children: [{ text: "Исполнитель, текст, аранжировка, промпты, версии, обложка, издательство и дата релиза — в одной карточке." }]
				}
			]
		},
		{
			tag: "div",
			props: { class: "sb-track-metrics" },
			children: [
				{
					tag: "div",
					props: {},
					children: [{
						tag: "b",
						props: {},
						children: [{ value: "trackCount" }]
					}, {
						tag: "span",
						props: {},
						children: [{ text: "Всего треков" }]
					}]
				},
				{
					tag: "div",
					props: {},
					children: [{
						tag: "b",
						props: {},
						children: [{ value: "trackPublisher" }]
					}, {
						tag: "span",
						props: {},
						children: [{ text: "У издательства" }]
					}]
				},
				{
					tag: "div",
					props: {},
					children: [{
						tag: "b",
						props: {},
						children: [{ value: "trackReleased" }]
					}, {
						tag: "span",
						props: {},
						children: [{ text: "Вышли" }]
					}]
				}
			]
		},
		{
			tag: "div",
			props: {
				class: "sb-track-toolbar",
				"data-sb-workspace": "track-toolbar"
			},
			slot: "track-toolbar"
		},
		{
			tag: "div",
			props: {
				id: "sb-vue-track-list",
				"data-sb-vue-track-list": ""
			},
			slot: "sb-vue-track-list"
		}
	],
	artists: [
		{
			tag: "div",
			props: {
				class: "account-back",
				"data-sb-workspace": "back"
			},
			slot: "back"
		},
		{
			tag: "header",
			props: { class: "heading" },
			children: [
				{
					tag: "div",
					props: { class: "eyebrow" },
					children: [{ text: "ПОСТОЯННОЕ ЗВУЧАНИЕ И ОБРАЗ" }]
				},
				{
					tag: "h1",
					props: {},
					children: [{ text: "🧬 ДНК артиста" }]
				},
				{
					tag: "p",
					props: {},
					children: [{ text: "Храни характер вокала, музыкальный стиль, инструменты, запреты и визуальную идентичность каждого исполнителя." }]
				}
			]
		},
		{
			tag: "div",
			props: { class: "sb-dna-summary" },
			children: [{
				tag: "div",
				props: {},
				children: [{
					tag: "b",
					props: {},
					children: [{ value: "dnaCount" }]
				}, {
					tag: "span",
					props: {},
					children: [{ text: "Профилей артистов" }]
				}]
			}, {
				tag: "div",
				props: {},
				children: [{
					tag: "b",
					props: {},
					children: [{ value: "dnaTracks" }]
				}, {
					tag: "span",
					props: {},
					children: [{ text: "Связанных треков" }]
				}]
			}]
		},
		{
			tag: "div",
			props: {
				class: "sb-dna-toolbar",
				"data-sb-workspace": "dna-toolbar"
			},
			slot: "dna-toolbar"
		},
		{
			tag: "div",
			props: { id: "sb-vue-dna-view" },
			slot: "sb-vue-dna-view"
		}
	],
	songs: [{
		tag: "section",
		props: {
			class: "sbsong-page",
			id: "sbsong-page"
		},
		children: [
			{
				tag: "header",
				props: {
					class: "sbsong-hero",
					"data-sb-workspace": "songs-header"
				},
				slot: "songs-header"
			},
			{
				tag: "div",
				props: { class: "sbsong-privacy" },
				children: [{ text: "🔒 Это локальная библиотека в браузере, а не защищённое облачное хранилище. Карточки не синхронизируются между устройствами. Ссылку на песню можно отправить отдельно — она откроет только выбранные для публикации сведения." }]
			},
			{
				tag: "p",
				props: {
					class: "sbsong-notice",
					id: "sbsong-notice",
					role: "status",
					"aria-live": "polite",
					hidden: !0
				},
				children: [],
				bind: "songNotice"
			},
			{
				tag: "div",
				props: {
					class: "sbsong-collection-head",
					"data-sb-workspace": "songs-search"
				},
				slot: "songs-search"
			},
			{
				tag: "div",
				props: { id: "sb-vue-song-cards" },
				slot: "sb-vue-song-cards"
			}
		]
	}],
	mixer: [{
		tag: "div",
		props: {
			class: "gm-page",
			id: "sb-vue-mixer-root"
		},
		slot: "sb-vue-mixer-root"
	}],
	"account-settings": [{
		tag: "div",
		props: { id: "sb-vue-account-settings" },
		slot: "sb-vue-account-settings"
	}],
	detail: [{
		tag: "div",
		props: { id: "sb-vue-genre-detail" },
		slot: "sb-vue-genre-detail"
	}],
	"tracks-editor": [
		{
			tag: "div",
			props: {
				class: "account-back",
				"data-sb-workspace": "back"
			},
			slot: "back"
		},
		{
			tag: "header",
			props: { class: "heading" },
			children: [
				{
					tag: "div",
					props: { class: "eyebrow" },
					children: [{ text: "ОТ ПЕРВОЙ ИДЕИ ДО РЕЛИЗА" }]
				},
				{
					tag: "h1",
					props: {},
					children: [{ text: "🎼 Паспорт трека" }]
				},
				{
					tag: "p",
					props: {},
					children: [{ text: "Исполнитель, текст, аранжировка, промпты, версии, обложка, издательство и дата релиза — в одной карточке." }]
				}
			]
		},
		{
			tag: "div",
			props: { class: "sb-track-metrics" },
			children: [
				{
					tag: "div",
					props: {},
					children: [{
						tag: "b",
						props: {},
						children: [{ value: "trackCount" }]
					}, {
						tag: "span",
						props: {},
						children: [{ text: "Всего треков" }]
					}]
				},
				{
					tag: "div",
					props: {},
					children: [{
						tag: "b",
						props: {},
						children: [{ value: "trackPublisher" }]
					}, {
						tag: "span",
						props: {},
						children: [{ text: "У издательства" }]
					}]
				},
				{
					tag: "div",
					props: {},
					children: [{
						tag: "b",
						props: {},
						children: [{ value: "trackReleased" }]
					}, {
						tag: "span",
						props: {},
						children: [{ text: "Вышли" }]
					}]
				}
			]
		},
		{
			tag: "div",
			props: {
				class: "sb-track-toolbar",
				"data-sb-workspace": "track-toolbar"
			},
			slot: "track-toolbar"
		},
		{
			tag: "div",
			props: {
				id: "sb-vue-track-editor",
				"data-sb-vue-track-editor": ""
			},
			slot: "sb-vue-track-editor"
		}
	],
	"tracks-detail": [
		{
			tag: "div",
			props: {
				class: "account-back",
				"data-sb-workspace": "back"
			},
			slot: "back"
		},
		{
			tag: "header",
			props: { class: "heading" },
			children: [
				{
					tag: "div",
					props: { class: "eyebrow" },
					children: [{ text: "ОТ ПЕРВОЙ ИДЕИ ДО РЕЛИЗА" }]
				},
				{
					tag: "h1",
					props: {},
					children: [{ text: "🎼 Паспорт трека" }]
				},
				{
					tag: "p",
					props: {},
					children: [{ text: "Исполнитель, текст, аранжировка, промпты, версии, обложка, издательство и дата релиза — в одной карточке." }]
				}
			]
		},
		{
			tag: "div",
			props: { class: "sb-track-metrics" },
			children: [
				{
					tag: "div",
					props: {},
					children: [{
						tag: "b",
						props: {},
						children: [{ value: "trackCount" }]
					}, {
						tag: "span",
						props: {},
						children: [{ text: "Всего треков" }]
					}]
				},
				{
					tag: "div",
					props: {},
					children: [{
						tag: "b",
						props: {},
						children: [{ value: "trackPublisher" }]
					}, {
						tag: "span",
						props: {},
						children: [{ text: "У издательства" }]
					}]
				},
				{
					tag: "div",
					props: {},
					children: [{
						tag: "b",
						props: {},
						children: [{ value: "trackReleased" }]
					}, {
						tag: "span",
						props: {},
						children: [{ text: "Вышли" }]
					}]
				}
			]
		},
		{
			tag: "div",
			props: {
				class: "sb-track-toolbar",
				"data-sb-workspace": "track-toolbar"
			},
			slot: "track-toolbar"
		},
		{
			tag: "div",
			props: {
				id: "sb-vue-track-detail",
				"data-sb-vue-track-detail": ""
			},
			slot: "sb-vue-track-detail"
		}
	],
	"artists-editor": [
		{
			tag: "div",
			props: {
				class: "account-back",
				"data-sb-workspace": "back"
			},
			slot: "back"
		},
		{
			tag: "header",
			props: { class: "heading" },
			children: [
				{
					tag: "div",
					props: { class: "eyebrow" },
					children: [{ text: "ПОСТОЯННОЕ ЗВУЧАНИЕ И ОБРАЗ" }]
				},
				{
					tag: "h1",
					props: {},
					children: [{ text: "🧬 ДНК артиста" }]
				},
				{
					tag: "p",
					props: {},
					children: [{ text: "Храни характер вокала, музыкальный стиль, инструменты, запреты и визуальную идентичность каждого исполнителя." }]
				}
			]
		},
		{
			tag: "div",
			props: { class: "sb-dna-summary" },
			children: [{
				tag: "div",
				props: {},
				children: [{
					tag: "b",
					props: {},
					children: [{ value: "dnaCount" }]
				}, {
					tag: "span",
					props: {},
					children: [{ text: "Профилей артистов" }]
				}]
			}, {
				tag: "div",
				props: {},
				children: [{
					tag: "b",
					props: {},
					children: [{ value: "dnaTracks" }]
				}, {
					tag: "span",
					props: {},
					children: [{ text: "Связанных треков" }]
				}]
			}]
		},
		{
			tag: "div",
			props: {
				class: "sb-dna-toolbar",
				"data-sb-workspace": "dna-toolbar"
			},
			slot: "dna-toolbar"
		},
		{
			tag: "div",
			props: { id: "sb-vue-dna-editor" },
			slot: "sb-vue-dna-editor"
		}
	],
	"producer-detail": [{
		tag: "div",
		props: { class: "sbpc-page" },
		children: [
			{
				tag: "header",
				props: { class: "sbpc-hero" },
				children: [
					{
						tag: "span",
						props: { class: "sbpc-kicker" },
						children: [{ text: "SUNOBOOM · РАБОЧЕЕ ПРОСТРАНСТВО" }]
					},
					{
						tag: "h1",
						props: {},
						children: [{ text: "Мастер " }, {
							tag: "span",
							props: {},
							children: [{ text: "✦" }]
						}]
					},
					{
						tag: "p",
						props: {},
						children: [{ text: "От идеи до релиза — единая рабочая карточка песни. Материалы связаны с существующими инструментами SUNOBOOM." }]
					},
					{
						tag: "div",
						props: { class: "sbpc-hero-stats" },
						children: [
							{
								tag: "span",
								props: {},
								children: [{
									tag: "strong",
									props: {},
									children: [{ value: "productionCount" }]
								}, { text: " песен в работе" }]
							},
							{
								tag: "span",
								props: {},
								children: [{
									tag: "strong",
									props: {},
									children: [{ value: "productionDone" }]
								}, { text: " полностью пройдено" }]
							},
							{
								tag: "span",
								props: {},
								children: [{ text: "Хранение: этот браузер" }]
							}
						]
					}
				]
			},
			{
				tag: "section",
				props: {
					class: "sbpc-create",
					"data-sb-workspace": "producer-create"
				},
				slot: "producer-create"
			},
			{
				tag: "div",
				props: { class: "sbpc-layout" },
				children: [{
					tag: "aside",
					props: { class: "sbpc-sidebar" },
					children: [{
						tag: "div",
						props: {
							class: "sbpc-side-heading",
							"data-sb-workspace": "producer-search"
						},
						slot: "producer-search"
					}, {
						tag: "div",
						props: {
							id: "sbpc-list",
							class: "sbpc-song-list",
							"data-sb-vue-producer-list": ""
						},
						slot: "sbpc-list"
					}]
				}, {
					tag: "div",
					props: {
						id: "sb-vue-producer-detail",
						"data-sb-vue-producer-host": ""
					},
					slot: "sb-vue-producer-detail"
				}]
			},
			{
				tag: "p",
				props: { class: "sbpc-privacy" },
				children: [{ text: "🔒 Локальная работа: синхронизации между устройствами нет. Аудиофайлы остаются в «Мои песни»; сам раздел «Мастер» хранит только ссылки, этапы, заметки, историю и снимок аранжировки." }]
			}
		]
	}],
	"songs-detail": [{
		tag: "section",
		props: {
			class: "sbsong-page",
			id: "sbsong-page"
		},
		children: [
			{
				tag: "header",
				props: {
					class: "sbsong-hero",
					"data-sb-workspace": "songs-header"
				},
				slot: "songs-header"
			},
			{
				tag: "div",
				props: { class: "sbsong-privacy" },
				children: [{ text: "🔒 Это локальная библиотека в браузере, а не защищённое облачное хранилище. Карточки не синхронизируются между устройствами. Ссылку на песню можно отправить отдельно — она откроет только выбранные для публикации сведения." }]
			},
			{
				tag: "p",
				props: {
					class: "sbsong-notice",
					id: "sbsong-notice",
					role: "status",
					"aria-live": "polite",
					hidden: !0
				},
				children: [],
				bind: "songNotice"
			},
			{
				tag: "div",
				props: { id: "sb-vue-song-detail" },
				slot: "sb-vue-song-detail"
			},
			{
				tag: "div",
				props: {
					class: "sbsong-collection-head",
					"data-sb-workspace": "songs-search"
				},
				slot: "songs-search"
			},
			{
				tag: "div",
				props: { id: "sb-vue-song-cards" },
				slot: "sb-vue-song-cards"
			}
		]
	}],
	"songs-manager-detail": [{
		tag: "section",
		props: {
			class: "sbsong-page",
			id: "sbsong-page"
		},
		children: [
			{
				tag: "header",
				props: {
					class: "sbsong-hero",
					"data-sb-workspace": "songs-header"
				},
				slot: "songs-header"
			},
			{
				tag: "div",
				props: { class: "sbsong-privacy" },
				children: [{ text: "🔒 Это локальная библиотека в браузере, а не защищённое облачное хранилище. Карточки не синхронизируются между устройствами. Ссылку на песню можно отправить отдельно — она откроет только выбранные для публикации сведения." }]
			},
			{
				tag: "p",
				props: {
					class: "sbsong-notice",
					id: "sbsong-notice",
					role: "status",
					"aria-live": "polite",
					hidden: !0
				},
				children: [],
				bind: "songNotice"
			},
			{
				tag: "div",
				props: { id: "sb-vue-artist-manager" },
				slot: "sb-vue-artist-manager"
			},
			{
				tag: "div",
				props: { id: "sb-vue-song-detail" },
				slot: "sb-vue-song-detail"
			},
			{
				tag: "div",
				props: {
					class: "sbsong-collection-head",
					"data-sb-workspace": "songs-search"
				},
				slot: "songs-search"
			},
			{
				tag: "div",
				props: { id: "sb-vue-song-cards" },
				slot: "sb-vue-song-cards"
			}
		]
	}],
	"songs-editor": [{
		tag: "section",
		props: {
			class: "sbsong-page",
			id: "sbsong-page"
		},
		children: [
			{
				tag: "header",
				props: {
					class: "sbsong-hero",
					"data-sb-workspace": "songs-header"
				},
				slot: "songs-header"
			},
			{
				tag: "div",
				props: { class: "sbsong-privacy" },
				children: [{ text: "🔒 Это локальная библиотека в браузере, а не защищённое облачное хранилище. Карточки не синхронизируются между устройствами. Ссылку на песню можно отправить отдельно — она откроет только выбранные для публикации сведения." }]
			},
			{
				tag: "p",
				props: {
					class: "sbsong-notice",
					id: "sbsong-notice",
					role: "status",
					"aria-live": "polite",
					hidden: !0
				},
				children: [],
				bind: "songNotice"
			},
			{
				tag: "div",
				props: { id: "sb-vue-song-editor" },
				slot: "sb-vue-song-editor"
			},
			{
				tag: "div",
				props: {
					class: "sbsong-collection-head",
					"data-sb-workspace": "songs-search"
				},
				slot: "songs-search"
			},
			{
				tag: "div",
				props: { id: "sb-vue-song-cards" },
				slot: "sb-vue-song-cards"
			}
		]
	}],
	"songs-manager": [{
		tag: "section",
		props: {
			class: "sbsong-page",
			id: "sbsong-page"
		},
		children: [
			{
				tag: "header",
				props: {
					class: "sbsong-hero",
					"data-sb-workspace": "songs-header"
				},
				slot: "songs-header"
			},
			{
				tag: "div",
				props: { class: "sbsong-privacy" },
				children: [{ text: "🔒 Это локальная библиотека в браузере, а не защищённое облачное хранилище. Карточки не синхронизируются между устройствами. Ссылку на песню можно отправить отдельно — она откроет только выбранные для публикации сведения." }]
			},
			{
				tag: "p",
				props: {
					class: "sbsong-notice",
					id: "sbsong-notice",
					role: "status",
					"aria-live": "polite",
					hidden: !0
				},
				children: [],
				bind: "songNotice"
			},
			{
				tag: "div",
				props: { id: "sb-vue-artist-manager" },
				slot: "sb-vue-artist-manager"
			},
			{
				tag: "div",
				props: {
					class: "sbsong-collection-head",
					"data-sb-workspace": "songs-search"
				},
				slot: "songs-search"
			},
			{
				tag: "div",
				props: { id: "sb-vue-song-cards" },
				slot: "sb-vue-song-cards"
			}
		]
	}],
	sharedSong: [{
		tag: "section",
		props: {
			class: "sbsong-page sbsong-shared",
			id: "sbsong-shared"
		},
		slot: "sbsong-shared"
	}]
};
// src/vue/pages/page-layout-model.js
function cu({ key: e, values: t = {} }) {
	let n = su[e];
	if (!n) throw Error("Unknown page model: " + e);
	function r(e) {
		if (e.value) return { text: String(t[e.value] ?? "") };
		if ("text" in e) return { ...e };
		let n = { ...e.props }, i = e.children?.map(r);
		return e.bind === "songNotice" ? (n.hidden = !t.songNotice, i = [{ text: String(t.songNotice || "") }]) : e.bind === "treeOpen" ? n.open = !!t.treeOpen : e.bind === "energyChart" ? n["aria-label"] = t.energyChart : e.bind === "mixerBanner" ? n.class = "gm-studio-banner" + (t.mixerActive ? " gm-studio-active" : "") : (e.bind === "playerAB" || e.bind === "playerLab") && (n.hidden = !!t[e.bind]), {
			tag: e.tag,
			props: n,
			...i ? { children: i } : {},
			...e.slot ? { slot: e.slot } : {},
			...e.native ? { native: !0 } : {}
		};
	}
	let i = n.map(r);
	return e === "home" && t.noticeBanner && i.unshift({
		tag: "div",
		props: {
			"data-sb-workspace": "notice-banner",
			style: "display:contents"
		},
		slot: "notice-banner"
	}), i;
}
Object.freeze(Object.keys(su));
// src/vue/legacy/featureCollection.js
var lu = null;
function uu(e, t) {
	if (lu) throw Error("Nested feature collection");
	lu = e;
	try {
		return t();
	} finally {
		lu = null;
	}
}
function du(e) {
	return lu ? (lu(e), !0) : !1;
}
function fu(e) {
	if (!e?.closest) return e;
	let t = e.closest("[data-sb-page-fallback]");
	if (t && e !== t) return null;
	let n = e.closest("[data-sb-vue-page][data-v-app]");
	return n && e !== n && !e.closest("[data-sb-native-boundary]") ? null : e;
}
// src/vue/pages/page-composition.js
function pu(e) {
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
function mu(e, t) {
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
function hu(e, t, n) {
	let r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = (t, n, a = {}) => (e.contains(t) && (i.has(t) || i.set(t, [...t.attributes].map((e) => [e.name, e.value])), r.set(t, {
		component: n,
		props: a
	})), () => {});
	try {
		uu(({ root: t, selectTarget: n, readSnapshot: i, mount: a }) => {
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
	let o = window.SUNOBOOM_PAGE_STATE?.snapshot();
	if (!o) return null;
	let s = cu(o), c = /* @__PURE__ */ new Map();
	for (let [e, t] of r) c.set(e.id || e.getAttribute("data-sb-workspace") || (e.hasAttribute("data-sb-arranger-controls") ? "arranger-controls:" + e.getAttribute("data-sb-arranger-controls") : e.className), t);
	let l = [], u = /* @__PURE__ */ new Map();
	function d(t) {
		if (t.slot) {
			let e = c.get(t.slot);
			if (!e) throw Error("Missing page feature: " + t.slot);
			return l.push(t.slot), {
				tag: t.tag,
				props: {
					...t.props,
					...e.wrapperProps,
					"data-v-app": "",
					"data-sb-composed-feature": ""
				},
				feature: e
			};
		}
		if (t.native) {
			let n = e.querySelector("#" + t.props.id);
			if (!n) throw Error("Missing native editor boundary: " + t.props.id);
			return u.set(t.props.id, [...n.childNodes]), {
				tag: t.tag,
				props: t.props,
				nativeBoundary: t.props.id
			};
		}
		return t.children ? {
			...t,
			children: t.children.map(d)
		} : t;
	}
	let f = {
		layout: s.map(d),
		features: l
	};
	return $l(f, u), f;
}
// core/navigation-core.js
(function(e) {
	let t = /* @__PURE__ */ new Set([
		"projects",
		"saved",
		"myideas",
		"myprompts",
		"events",
		"tracks",
		"artists"
	]), n = Object.freeze([
		"home",
		"catalog",
		"detail",
		"ideas",
		"studio",
		"account",
		"projects",
		"saved",
		"myideas",
		"myprompts",
		"events",
		"tracks",
		"artists",
		"player",
		"producer",
		"songs",
		"mixer",
		"sharedSong"
	]), r = (e) => typeof e == "string" && /^[a-zA-Z0-9_-]{1,128}$/.test(e) ? e : "", i = /* @__PURE__ */ new Set([
		"overview",
		"ideas",
		"prompts",
		"artists"
	]), a = (e) => {
		let t = Object.entries(e).filter(([, e]) => e);
		return t.length ? "?" + t.map(([e, t]) => encodeURIComponent(e) + "=" + encodeURIComponent(t)).join("&") : "";
	};
	function o(e) {
		let o = n.includes(e.nav) ? e.nav : "home";
		if (o === "detail") return "/catalog/" + encodeURIComponent(r(e.genre) || "unknown") + "/" + (i.has(e.tab) ? e.tab : "overview");
		if (o === "sharedSong") return "/shared" + a({ card: typeof e.card == "string" ? e.card.slice(0, 14e3) : "broken" });
		if (o === "account" && e.settings) return "/account/settings";
		if (o === "songs") return "/songs" + (e.form ? e.editId ? "/" + r(e.editId) + "/edit" : "/new" : r(e.songId) ? "/" + r(e.songId) : "") + a({ artists: e.manager ? "1" : "" });
		if (o === "producer") return "/producer" + (r(e.productionId) ? "/" + r(e.productionId) : "");
		if (t.has(o)) {
			let t = o === "tracks" ? e.trackId || e.selected : o === "projects" ? e.projectId || e.selected : o === "artists" ? e.dnaId || e.selected : "";
			return "/account/" + o + (r(t) ? "/" + r(t) : "") + a({ edit: e.edit === "new" ? "new" : r(e.edit) });
		}
		return "/" + o;
	}
	function s(e) {
		let a;
		try {
			a = new URL(e, "https://sunoboom.invalid");
		} catch {
			return { nav: "home" };
		}
		let o;
		try {
			o = a.pathname.split("/").filter(Boolean).map(decodeURIComponent);
		} catch {
			return { nav: "home" };
		}
		let s = a.searchParams.get("edit"), c = s === "new" ? "new" : r(s);
		return o[0] === "shared" ? {
			nav: "sharedSong",
			card: (a.searchParams.get("card") || "broken").slice(0, 14e3)
		} : o[0] === "catalog" && o.length > 1 ? {
			nav: "detail",
			genre: r(o[1]),
			tab: i.has(o[2]) ? o[2] : "overview"
		} : o[0] === "account" && o[1] === "settings" ? {
			nav: "account",
			settings: !0
		} : o[0] === "account" && t.has(o[1]) ? {
			nav: o[1],
			selected: r(o[2]),
			edit: c
		} : o[0] === "producer" ? {
			nav: "producer",
			productionId: r(o[1])
		} : o[0] === "songs" ? {
			nav: "songs",
			songId: o[1] === "new" ? "" : r(o[1]),
			form: o[1] === "new" || o[2] === "edit",
			editId: o[2] === "edit" ? r(o[1]) : "",
			manager: a.searchParams.get("artists") === "1"
		} : { nav: n.includes(o[0]) && o[0] !== "detail" && o[0] !== "sharedSong" ? o[0] : "home" };
	}
	function c(e, t) {
		let r = String(e || "").replace(/^#/, "");
		return r.startsWith("/") ? o({
			...s(r),
			...l(s(r))
		}) : r.startsWith("sb-song=") ? o({
			nav: "sharedSong",
			card: r.slice(8)
		}) : r.startsWith("genre-") ? o({
			nav: "detail",
			genre: r.slice(6),
			tab: "overview"
		}) : r.startsWith("view-") && n.includes(r.slice(5)) ? o({ nav: r.slice(5) }) : o(t);
	}
	function l(e) {
		return e.nav === "projects" ? { projectId: e.selected } : e.nav === "tracks" ? { trackId: e.selected } : e.nav === "artists" ? { dnaId: e.selected } : {};
	}
	e.SUNOBOOM_ROUTE_CODEC = Object.freeze({
		routes: n,
		routePath: o,
		parseRoute: s,
		initialPath: c
	});
})(globalThis);
// src/vue/shell/route-codec.js
var { routes: gu, routePath: _u, parseRoute: vu, initialPath: yu } = globalThis.SUNOBOOM_ROUTE_CODEC;
// src/vue/shell/application-shell.js
async function bu({ pinia: e, sharedUi: t, activations: n }) {
	let r = document.getElementById("app"), i = window.SUNOBOOM_SHELL_ADAPTER;
	if (!r || !i) return null;
	let a = [...r.childNodes], o = pl({
		history: Mc(location.pathname + location.search),
		routes: [{
			path: "/:pathMatch(.*)*",
			component: ou
		}],
		scrollBehavior: (e, t, n) => n || {
			left: 0,
			top: 0
		}
	}), s = /* @__PURE__ */ Ut({
		page: null,
		frame: i.frame(),
		revision: 0,
		pageError: !1
	}), c = /* @__PURE__ */ F([]), l = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new Map(), d = 0, f, p = !1, m = 0, h = null, g = !1, _ = !1, v = null, y, b = (e, t) => console.warn("[SUNOBOOM] " + e, t);
	function x(e, t) {
		let n = document.getElementById, r = document.querySelector, i = document.querySelectorAll;
		document.getElementById = (t) => t === "app" ? e : e.querySelector("#" + CSS.escape(t)) || (/^(toast|sb-ap-|sb-vh)/.test(t) ? n.call(document, t) : null), document.querySelector = (t) => e.querySelector(t) || (/^meta|^head|^html|^body|sb-ap-|sb-vh/.test(t) ? r.call(document, t) : null), document.querySelectorAll = (t) => e.querySelectorAll(t);
		try {
			return t();
		} finally {
			document.getElementById = n, document.querySelector = r, document.querySelectorAll = i;
		}
	}
	function S(e, r) {
		let a = null;
		try {
			a = x(e, () => hu(r, n, t));
		} catch (e) {
			b("Page preparation failed; native page retained.", e);
		}
		let o = s.revision + 1;
		u.set(o, {
			page: r,
			model: a
		}), s.page = a, s.pageError = !a, s.frame = i.frame(), s.revision = o, En().then(() => {
			if (!_) {
				for (let e of u.keys()) e !== s.revision && u.delete(e);
				window.dispatchEvent(new Event("sunoboom:shell-rendered"));
			}
		});
	}
	let C = {
		attach(e, t) {
			let n = u.get(e);
			n && t && (n.model && tu(n.page, n.model), t.replaceChildren(...n.page.childNodes));
		},
		failed(e, t) {
			e === s.revision && (s.pageError = !0), b("Page component failed; native page retained.", t);
		}
	};
	function w(e) {
		!m && p && (h = {
			path: _u(i.current()),
			mode: e || "push"
		}, g || (g = !0, queueMicrotask(() => {
			g = !1;
			let e = h;
			h = null, !_ && e && e.path !== o.currentRoute.value.fullPath && o[e.mode === "replace" ? "replace" : "push"](e.path).catch((e) => b("Route unavailable.", e));
		})));
	}
	function ee(e) {
		if (v) return e();
		let t = document.createElement("div");
		t.hidden = !0, t.setAttribute("data-sb-native-stage", ""), document.body.append(t), v = t;
		try {
			x(t, e);
			let n = t.querySelector("[data-sb-vue-page]");
			n && S(t, n);
		} finally {
			v = null, t.remove();
		}
		w();
	}
	function te(e) {
		v ? v.innerHTML = e : ee(() => {
			v.innerHTML = e;
		});
	}
	function ne(e, t = !0) {
		queueMicrotask(() => {
			l.get(e.target) === e && (l.delete(e.target), c.value = c.value.filter((t) => t !== e), En().then(() => {
				t && !l.has(e.target) && (e.target.innerHTML = e.html, mu(e.target, e.fields), e.hadMarker || e.target.removeAttribute("data-v-app"));
			}));
		});
	}
	function T(e, t, n = {}) {
		if (typeof e == "string" && (e = document.querySelector(e)), !e || !t) return null;
		let r = l.get(e), i = r ? {
			...r,
			component: t,
			props: n
		} : {
			id: ++d,
			target: e,
			component: t,
			props: n,
			html: e.innerHTML,
			fields: pu(e),
			hadMarker: e.hasAttribute("data-v-app")
		};
		return i.fail = (e) => {
			b("Feature failed; native controls retained.", e), ne(i);
		}, r || (e.replaceChildren(), e.setAttribute("data-v-app", "")), l.set(e, i), c.value = r ? c.value.map((e) => e === r ? i : e) : [...c.value, i], () => ne(i);
	}
	function re(e) {
		if (i.current().nav === "tracks" && i.current().edit) return !1;
		let t = o.options.history.state[e === "back" ? "back" : "forward"];
		return typeof t == "string" && t.startsWith("/") && i.canRestore(vu(t));
	}
	async function ie(e) {
		return re(e) ? (await Vl(e), new Promise((t) => {
			let n = o.afterEach((e, r, i) => {
				i || (n(), En().then(() => t(!0)));
			});
			o.go(e === "back" ? -1 : 1);
		})) : !1;
	}
	let E = {
		get active() {
			return p;
		},
		renderHTML: te,
		afterRender: (e) => v ? e() : En().then(() => {
			_ || e();
		}),
		navigate: (e) => o.push(_u({ nav: e })),
		recordCurrent: w,
		canGo: re,
		back: () => ie("back"),
		forward: () => ie("forward"),
		snapshot: () => ({
			active: p,
			route: o.currentRoute.value.fullPath,
			revision: s.revision,
			shells: r.querySelectorAll("[data-sb-vue-shell]").length
		}),
		mountFeature: T,
		unmountFeature: (e) => {
			let t = l.get(e);
			t && ne(t);
		},
		router: o
	};
	o.beforeEach((e) => {
		let t = e.fullPath.replace(/^\//, "");
		if (/^(sb-song=|genre-|view-)/.test(t)) {
			let n = yu("#" + t, i.current());
			if (n !== e.fullPath) {
				let e = o.resolve(n);
				return {
					path: e.path,
					query: e.query,
					replace: !0
				};
			}
		}
		return !0;
	}), o.afterEach(async (e, t, n) => {
		if (n || !p || _) return;
		if (_u(i.current()) !== e.fullPath) {
			m++;
			try {
				i.apply(vu(e.fullPath));
			} finally {
				m--;
			}
		}
		let r = _u(i.current());
		r !== e.fullPath && await o.replace(r);
	});
	try {
		await o.replace(_u(i.current())), S(r, r.querySelector("[data-sb-vue-page]"));
		let t;
		if (f = os({ setup: () => () => Xa(Zl, {
			state: s,
			portals: c.value,
			resources: C
		}) }), f.use(e), f.use(o), f.config.errorHandler = (e, n, r) => {
			t ??= e, b("Shell error (" + (n?.$options?.name || r) + ").", e);
		}, f.mount(r), await En(), t) throw t;
		if (p = !0, window.SUNOBOOM_SHELL = E, y = i.installRenderer(ee), _u(i.current()) !== o.currentRoute.value.fullPath) {
			m++;
			try {
				i.apply(vu(o.currentRoute.value.fullPath));
			} finally {
				m--;
			}
		}
		await En();
		let n = _u(i.current());
		return n !== o.currentRoute.value.fullPath && await o.replace(n), E;
	} catch (e) {
		_ = !0, p = !1, y?.();
		try {
			f?.unmount();
		} finally {
			r.replaceChildren(...a);
		}
		return b("Shell unavailable; native interface retained.", e), null;
	}
}
// src/vue/legacy/observeLegacyIsland.js
function Z({ root: e, selectTarget: t, readSnapshot: n, mount: r, subscribe: i, readRevision: a, createObserver: o = (e) => new MutationObserver(e) }) {
	if (!e || typeof t != "function" || typeof n != "function" || typeof r != "function" || du({
		root: e,
		selectTarget: t,
		readSnapshot: n,
		mount: r
	})) return () => {};
	let s = !1, c = null;
	function l() {
		let e = c;
		c = null, e && e.unmount();
	}
	function u() {
		if (s) return;
		let i = fu(t(e)), o = typeof a == "function" ? a(i) : void 0;
		if (c?.target === i && i?.isConnected && c.revision === o || (l(), !i?.isConnected)) return;
		let u = n(i);
		if (!u) return;
		let d = r(i, u);
		typeof d == "function" && (c = {
			target: i,
			unmount: d,
			revision: o
		});
	}
	let d = o(u);
	d.observe(e, { childList: !0 });
	let f = typeof i == "function" ? i(u) : null;
	return typeof window < "u" && window.addEventListener("sunoboom:shell-rendered", u), u(), () => {
		s || (s = !0, typeof window < "u" && window.removeEventListener("sunoboom:shell-rendered", u), d.disconnect(), typeof f == "function" && f(), l());
	};
}
// src/vue/pages/legacyPageBridge.js
function xu({ mountVueFeature: e, activations: t, sharedUi: n }) {
	let r = document.getElementById("app");
	return r ? Z({
		root: r,
		selectTarget: (e) => e.querySelector("[data-sb-vue-page]"),
		readSnapshot: (e) => {
			let r = pu(e);
			try {
				return {
					model: hu(e, t, n),
					fields: r
				};
			} catch (t) {
				return e.setAttribute("data-sb-page-fallback", ""), console.warn("[SUNOBOOM] Page composition unavailable; native page retained.", t), null;
			}
		},
		mount: (t, { model: n, fields: r }) => {
			if (!n) return t.setAttribute("data-sb-page-fallback", ""), null;
			let i = e(t, iu, { model: n });
			return i ? t.removeAttribute("data-sb-page-fallback") : (t.setAttribute("data-sb-page-fallback", ""), tu(t, n), mu(t, r)), i;
		}
	}) : () => {};
}
// src/vue/workspace/Notifications.vue
var Su = { class: "sb-notice-panel-head" }, Cu = { class: "sb-notice-scroll" }, wu = { class: "sb-notice-item-meta" }, Tu = { class: "sb-notice-period" }, Eu = { key: 0 }, Du = { class: "sb-notice-item-actions" }, Ou = ["data-id", "data-key"], ku = {
	key: 0,
	class: "sb-notice-seen"
}, Au = ["data-key"], ju = {
	key: 0,
	class: "sb-notice-none"
}, Mu = {
	key: 0,
	class: "sb-notice-panel-foot"
}, Nu = {
	key: 1,
	class: "sb-notice-banner",
	"aria-label": "Новые напоминания"
}, Pu = { class: "sb-notice-banner-info" }, Fu = { class: "sb-notice-banner-actions" }, Iu = ["data-id", "data-key"], Lu = {
	class: "btn ghost small",
	type: "button",
	"data-action": "sb-notice-toggle"
}, Ru = {
	__name: "Notifications",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ P(null), r = /* @__PURE__ */ P(null);
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
		return z(() => {
			t.initial.kind === "notice-panel" && (r.value?.focus(), document.addEventListener("keydown", i));
		}), Nr(() => {
			document.removeEventListener("keydown", i), t.initial.kind === "notice-panel" && En(() => {
				document.querySelector(".sb-notice-panel") || document.querySelector(".sb-notice-bell[data-action=\"sb-notice-toggle\"]")?.focus();
			});
		}), (t, i) => e.initial.kind === "notice-panel" ? (H(), U(V, { key: 0 }, [i[4] ||= W("button", {
			type: "button",
			class: "sb-notice-overlay",
			"data-action": "sb-notice-close",
			"aria-label": "Закрыть уведомления"
		}, null, -1), W("aside", {
			ref_key: "panel",
			ref: n,
			class: "sb-notice-panel",
			role: "dialog",
			"aria-label": "Напоминания о событиях",
			"aria-modal": "true"
		}, [
			W("div", Su, [i[0] ||= W("div", null, [
				W("div", { class: "sb-notice-eyebrow" }, "🔔 SUNOBOOM"),
				W("h2", null, "Уведомления"),
				W("p", null, "Напоминания о твоих событиях")
			], -1), W("button", {
				ref_key: "close",
				ref: r,
				class: "sb-notice-close",
				type: "button",
				"data-action": "sb-notice-close",
				"aria-label": "Закрыть"
			}, "✕", 512)]),
			W("div", Cu, [(H(!0), U(V, null, B(e.initial.items, (e) => (H(), U("article", {
				key: e.key,
				class: O(["sb-notice-item", { "sb-notice-read": e.read }])
			}, [
				W("div", wu, [W("span", { class: O(["sb-notice-when", { "sb-notice-today": e.today }]) }, k(e.when) + k(e.time ? " · " + e.time : ""), 3), W("span", null, k(e.type), 1)]),
				W("h3", null, k(e.title), 1),
				W("div", Tu, k(e.period) + " · " + k(e.date), 1),
				e.notes ? (H(), U("p", Eu, k(e.notes), 1)) : K("", !0),
				W("div", Du, [W("button", {
					type: "button",
					"data-action": "sb-notice-event",
					"data-id": e.id,
					"data-key": e.key
				}, "Открыть событие →", 8, Ou), e.read ? (H(), U("span", ku, "✓ Прочитано")) : (H(), U("button", {
					key: 1,
					type: "button",
					"data-action": "sb-notice-read",
					"data-key": e.key
				}, "Прочитано", 8, Au))])
			], 2))), 128)), e.initial.items.length ? K("", !0) : (H(), U("div", ju, [...i[1] ||= [
				W("span", null, "🔔", -1),
				W("h3", null, "Пока нет новых напоминаний", -1),
				W("p", null, "Укажи сроки уведомлений при создании события — хоть за неделю, хоть в сам день.", -1),
				W("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "sb-notice-create"
				}, "Создать событие →", -1)
			]]))]),
			e.initial.unread > 1 ? (H(), U("div", Mu, [...i[2] ||= [W("button", {
				type: "button",
				"data-action": "sb-notice-read-all"
			}, "Отметить все прочитанными", -1)]])) : K("", !0),
			i[3] ||= W("div", { class: "sb-notice-disclaimer" }, "Напоминания показываются, когда SUNOBOOM открыт. При закрытом сайте push-уведомления пока не отправляются.", -1)
		], 512)], 64)) : (H(), U("section", Nu, [
			i[5] ||= W("span", {
				class: "sb-notice-banner-icon",
				"aria-hidden": "true"
			}, "🔔", -1),
			W("div", Pu, [W("strong", null, k(e.initial.title), 1), W("p", null, k(e.initial.first.period) + " · " + k(e.initial.first.date) + k(e.initial.first.time ? " · " + e.initial.first.time : ""), 1)]),
			W("div", Fu, [W("button", {
				class: "btn primary small",
				type: "button",
				"data-action": "sb-notice-event",
				"data-id": e.initial.first.id,
				"data-key": e.initial.first.key
			}, "Открыть", 8, Iu), W("button", Lu, "Все (" + k(e.initial.unread) + ")", 1)])
		]));
	}
}, zu = {
	class: "encyclopedia-section-icon",
	"aria-hidden": "true"
}, Bu = { key: 1 }, Vu = ["innerHTML"], Hu = { key: 1 }, Uu = { key: 0 }, Wu = { key: 1 }, Gu = { class: "sbpc-create-controls" }, Ku = ["value"], qu = ["value"], Ju = ["label"], Yu = ["value"], Xu = ["value"], Zu = { class: "sbsong-hero-row" }, Qu = { class: "sbsong-hero-tools" }, $u = {
	type: "button",
	class: "sbsong-artists-manage-btn",
	"data-sbsong-action": "artists-manage"
}, ed = { class: "sbsong-stats" }, td = ["value"], nd = {
	class: "btn ghost small",
	"data-action": "nav",
	"data-nav": "mixer"
}, rd = {
	key: 0,
	class: "btn ghost small",
	"data-action": "gm-unlink"
}, id = {
	key: 8,
	type: "button",
	class: "sba-jump",
	"data-sba-action": "jump"
}, ad = {
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
		let t = e, n = /* @__PURE__ */ F(t.initial), r = () => {
			let e = t.api.snapshot(t.name);
			e && (n.value = e);
		};
		return t.initial.event && window.addEventListener(t.initial.event, r), Nr(() => {
			t.initial.event && window.removeEventListener(t.initial.event, r);
		}), (e, t) => (H(), U(V, null, [
			n.value.kind === "academy-launch" ? (H(), U("button", Ea({
				key: 0,
				type: "button",
				class: ["encyclopedia-section", n.value.tree ? "sb-gt-entry" : "sb-ap-tile"]
			}, n.value.tree ? { "data-sb-gt-action": "reveal" } : { "data-sb-ap-action": "hub-open" }), [
				W("span", zu, k(n.value.tree ? "🕸️" : "🎙️"), 1),
				W("span", null, [W("strong", null, k(n.value.tree ? "Музыкальное древо" : "Профили исполнителей"), 1), W("small", null, k(n.value.tree ? "Истоки, связи и влияние жанров" : "История, звучание и важные произведения"), 1)]),
				t[0] ||= W("span", { class: "encyclopedia-section-status" }, "Открыть", -1)
			], 16)) : K("", !0),
			n.value.kind === "quick-poetry" ? (H(), U("span", Bu, "✍️ Работа с текстом песни")) : K("", !0),
			n.value.kind === "actions" || n.value.kind === "quick-poetry" || n.value.kind === "prompt-auditor" || n.value.kind === "player-modes" ? (H(), U(V, { key: 2 }, [
				(H(!0), U(V, null, B(n.value.buttons, (e, t) => (H(), U("button", Ea({ key: t }, { ref_for: !0 }, e.attrs), [
					e.icon ? (H(), U("span", {
						key: 0,
						innerHTML: e.icon,
						"aria-hidden": "true",
						style: { display: "contents" }
					}, null, 8, Vu)) : K("", !0),
					G(k(e.icon ? " " : "") + k(e.label), 1),
					e.badge ? (H(), U("span", Hu, k(e.badge), 1)) : K("", !0)
				], 16))), 128)),
				n.value.hint ? (H(), U("span", Uu, k(n.value.hint), 1)) : K("", !0),
				n.value.kind === "prompt-auditor" ? (H(), U("span", Wu, "Переносит текст на проверку, не сохраняя и не изменяя текущую запись.")) : K("", !0)
			], 64)) : n.value.kind === "producer-create" ? (H(), U(V, { key: 3 }, [t[3] ||= W("div", null, [W("h2", null, "Начать работу над песней"), W("p", null, "Создай новую карточку или выбери существующую идею, песню либо паспорт.")], -1), W("div", Gu, [
				W("input", {
					type: "text",
					id: "sbpc-new-title",
					maxlength: "120",
					value: n.value.title,
					placeholder: "Название новой песни (можно оставить пустым при выборе материала)"
				}, null, 8, Ku),
				W("select", {
					id: "sbpc-new-source",
					"aria-label": "Исходный материал",
					value: n.value.source
				}, [t[1] ||= W("option", { value: "" }, "Новая песня без привязки", -1), (H(!0), U(V, null, B(n.value.groups, (e) => (H(), U("optgroup", {
					key: e.type,
					label: e.title
				}, [(H(!0), U(V, null, B(e.items, (t) => (H(), U("option", {
					key: t.id,
					value: e.type + ":" + t.id
				}, k(t.name), 9, Yu))), 128))], 8, Ju))), 128))], 8, qu),
				t[2] ||= W("button", {
					type: "button",
					class: "sbpc-main-btn",
					"data-pc-action": "create"
				}, "+ Создать рабочую карточку", -1)
			])], 64)) : n.value.kind === "producer-search" ? (H(), U(V, { key: 4 }, [W("h2", null, "Песни (" + k(n.value.count) + ")", 1), W("input", {
				id: "sbpc-search",
				type: "search",
				value: n.value.query,
				placeholder: "Найти песню или артиста",
				"aria-label": "Поиск по песням"
			}, null, 8, Xu)], 64)) : n.value.kind === "songs-header" ? (H(), U(V, { key: 5 }, [
				t[7] ||= W("div", { class: "sbsong-eyebrow" }, "SUNOBOOM · ЛИЧНЫЙ КАБИНЕТ", -1),
				t[8] ||= W("button", {
					type: "button",
					"data-sbsong-action": "back",
					class: "sbsong-back"
				}, "← В личный кабинет", -1),
				W("div", Zu, [t[5] ||= W("div", null, [W("h1", null, "Мои песни"), W("p", null, "Личная коллекция песен: карточки, обложки, MP3, M4A, WAV и версии записей.")], -1), W("div", Qu, [W("button", $u, "♬ Мои артисты (" + k(n.value.artists) + ")", 1), t[4] ||= W("button", {
					type: "button",
					class: "sbsong-main-btn",
					"data-sbsong-action": "new"
				}, "+ Добавить песню", -1)])]),
				W("div", ed, [
					W("span", null, k(n.value.count) + " песен", 1),
					W("span", null, k(n.value.versions) + " аудиоверсий на устройстве", 1),
					t[6] ||= W("span", null, "Хранение локально", -1)
				])
			], 64)) : n.value.kind === "songs-search" ? (H(), U(V, { key: 6 }, [t[9] ||= W("h2", null, "Коллекция", -1), W("input", {
				type: "search",
				id: "sbsong-search",
				value: n.value.query,
				placeholder: "Найти песню или исполнителя…",
				"aria-label": "Поиск песен"
			}, null, 8, td)], 64)) : n.value.kind === "mixer-banner" ? (H(), U(V, { key: 7 }, [
				W("strong", null, k(n.value.active ? "🎛️ Активен жанровый микс" : "🎚️ Жанровый миксер"), 1),
				W("span", null, k(n.value.description), 1),
				W("button", nd, k(n.value.active ? "Изменить микс" : "Открыть миксер →"), 1),
				n.value.active ? (H(), U("button", rd, "Обычный жанр")) : K("", !0)
			], 64)) : n.value.kind === "arranger-jump" ? (H(), U("button", id, [...t[10] ||= [
				W("span", null, "♬", -1),
				G(" Конструктор аранжировки ", -1),
				W("small", null, "Создать структуру песни", -1),
				G(),
				W("span", null, "↓", -1)
			]])) : K("", !0)
		], 64));
	}
}, od = { class: "form-grid" }, sd = { class: "field" }, cd = ["value"], ld = ["value"], ud = { class: "field" }, dd = { class: "notice" }, fd = {
	class: "btn primary",
	"data-action": "song-generate"
}, pd = ["innerHTML"], md = {
	key: 0,
	class: "panel",
	style: { "margin-top": "16px" }
}, hd = { class: "eyebrow" }, gd = { class: "notice" }, _d = {
	class: "saved-list",
	style: { "margin-top": "14px" }
}, vd = { class: "row" }, yd = { class: "sub" }, bd = {
	class: "detail-actions",
	style: { "margin-top": "14px" }
}, xd = ["data-id"], Sd = ["innerHTML"], Cd = ["data-id"], wd = ["innerHTML"], Td = {
	__name: "SongBlueprint",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = q(() => t.initial.forms.find((e) => e.id === t.initial.form)?.duration || "");
		return (t, r) => (H(), U(V, null, [
			r[10] ||= W("div", { class: "eyebrow" }, "SUNOBOOM · SONG BLUEPRINT", -1),
			r[11] ||= W("h3", null, "Генератор структуры песни", -1),
			r[12] ||= W("p", null, "Создавай форму трека с учётом текущего жанра, настроения, темпа и темы. Каждый блок включает подсказки для музыки и текста.", -1),
			W("div", od, [W("div", sd, [r[0] ||= W("label", { for: "song-form" }, "Форма песни", -1), W("select", {
				id: "song-form",
				value: e.initial.form
			}, [(H(!0), U(V, null, B(e.initial.forms, (e) => (H(), U("option", {
				key: e.id,
				value: e.id
			}, k(e.name), 9, ld))), 128))], 8, cd)]), W("div", ud, [r[1] ||= W("label", null, "Длительность (ориентир)", -1), W("div", dd, k(n.value), 1)])]),
			W("button", fd, [W("span", {
				innerHTML: e.initial.icons.ideas,
				"aria-hidden": "true",
				style: { display: "contents" }
			}, null, 8, pd), r[2] ||= G(" Создать структуру", -1)]),
			r[13] ||= W("p", {
				class: "hint",
				style: { "margin-top": "10px" }
			}, "Офлайн-генератор, без внешнего ИИ. Структура — план, а не готовые слова песни.", -1),
			e.initial.song ? (H(), U("div", md, [
				W("div", hd, "SONG BLUEPRINT · " + k(e.initial.song.duration), 1),
				W("h3", null, k(e.initial.song.title), 1),
				W("p", null, k(e.initial.song.genreName) + " · " + k(e.initial.song.formName) + " · " + k(e.initial.song.bpm) + " BPM", 1),
				W("div", gd, [
					r[3] ||= W("strong", null, "Динамика:", -1),
					G(" " + k(e.initial.song.advice), 1),
					r[4] ||= W("br", null, null, -1),
					r[5] ||= W("strong", null, "Звучание:", -1),
					G(" " + k(e.initial.song.arrangement), 1)
				]),
				W("div", _d, [(H(!0), U(V, null, B(e.initial.song.sections, (e, t) => (H(), U("div", {
					key: t,
					class: "saved-item"
				}, [
					W("div", vd, [W("h3", null, k(t + 1) + ". [" + k(e.tag) + "]", 1), W("span", yd, k(e.bars) + " тактов", 1)]),
					W("p", null, [r[6] ||= W("strong", null, "Аранжировка:", -1), G(" " + k(e.music), 1)]),
					W("p", null, [r[7] ||= W("strong", null, "Текст:", -1), G(" " + k(e.lyrics), 1)])
				]))), 128))]),
				W("div", bd, [W("button", {
					class: "btn primary small",
					"data-action": "song-copy",
					"data-id": e.initial.song.id
				}, [W("span", {
					innerHTML: e.initial.icons.copy,
					"aria-hidden": "true",
					style: { display: "contents" }
				}, null, 8, Sd), r[8] ||= G(" Копировать план", -1)], 8, xd), W("button", {
					class: "btn ghost small",
					"data-action": "song-save",
					"data-id": e.initial.song.id
				}, [W("span", {
					innerHTML: e.initial.icons.saved,
					"aria-hidden": "true",
					style: { display: "contents" }
				}, null, 8, wd), r[9] ||= G(" Сохранить", -1)], 8, Cd)])
			])) : K("", !0)
		], 64));
	}
};
// src/vue/legacy/observeLegacyIslands.js
function Ed({ root: e, islands: t, subscribe: n, beforeSync: r, createObserver: i = (e) => new MutationObserver(e) }) {
	if (!e || !Array.isArray(t) || !t.length || t.some((e) => !e || typeof e.key != "string" || !e.key || typeof e.selectTarget != "function" || typeof e.readSnapshot != "function" || typeof e.mount != "function") || new Set(t.map((e) => e.key)).size !== t.length) return () => {};
	if (du({
		root: e,
		...t[0]
	})) {
		for (let n of t.slice(1)) du({
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
				let t = fu(n.selectTarget(e)), r = a.get(n.key), i = typeof n.readRevision == "function" ? n.readRevision() : void 0;
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
	return typeof window < "u" && window.addEventListener("sunoboom:shell-rendered", s), s(), () => {
		if (!o) {
			o = !0, typeof window < "u" && window.removeEventListener("sunoboom:shell-rendered", s), c.disconnect(), typeof l == "function" && l();
			for (let { unmount: e } of a.values()) e();
			a.clear();
		}
	};
}
// src/vue/workspace/legacyWorkspaceBridge.js
var Dd = [
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
function Od({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_WORKSPACE_UI, n = document.getElementById("app");
	return !t || !n ? () => {} : Ed({
		root: n,
		islands: Dd.map((n) => ({
			key: n,
			selectTarget: (e) => e.querySelector(`[data-sb-workspace="${n}"]`),
			readRevision: n === "notice-panel" ? () => JSON.stringify(t.snapshot(n)) : void 0,
			readSnapshot: () => t.snapshot(n),
			mount: (r, i) => {
				let a = e(r, n.startsWith("notice-") ? Ru : n === "blueprint" ? Td : ad, {
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
var kd = { class: "sb-ap-dialog-title" }, Ad = { class: "sb-ap-profile-hero" }, jd = { class: "sb-ap-profile-logo" }, Md = { class: "sb-ap-overline" }, Nd = { id: "sb-ap-dialog-heading" }, Pd = { class: "sb-ap-profile-fields" }, Fd = { class: "sb-ap-profile-section" }, Id = { class: "sb-ap-profile-section" }, Ld = {
	key: 0,
	class: "sb-ap-fine"
}, Rd = { class: "sb-ap-profile-section" }, zd = {
	key: 0,
	class: "sb-ap-pills"
}, Bd = {
	key: 1,
	class: "sb-ap-muted"
}, Vd = {
	key: 2,
	class: "sb-ap-fine"
}, Hd = { class: "sb-ap-profile-section" }, Ud = {
	key: 0,
	class: "sb-ap-songs"
}, Wd = {
	key: 1,
	class: "sb-ap-muted"
}, Gd = { class: "sb-ap-profile-section" }, Kd = {
	key: 0,
	class: "sb-ap-related"
}, qd = ["data-genre", "onClick"], Jd = {
	key: 1,
	class: "sb-ap-muted"
}, Yd = { class: "sb-ap-profile-buttons" }, Xd = ["data-name", "aria-pressed"], Zd = ["data-name"], Qd = {
	__name: "ArtistProfileDialog",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ F(t.api.profileSnapshot()), r = /* @__PURE__ */ P(null), i = () => En(() => r.value?.focus()), a = t.api.subscribe(() => {
			let e = n.value?.key;
			n.value = t.api.profileSnapshot(), n.value && e !== n.value.key && i();
		});
		return z(i), Nr(a), (t, i) => n.value ? (H(), U(V, { key: 0 }, [
			W("div", kd, [i[3] ||= W("span", null, "🎙️ Профиль исполнителя", -1), W("button", {
				ref_key: "close",
				ref: r,
				type: "button",
				"data-sb-ap-action": "close",
				class: "sb-ap-close",
				"aria-label": "Закрыть профиль",
				onClick: i[0] ||= Y((t) => e.api.closeProfile(), ["stop"])
			}, "×", 512)]),
			W("div", Ad, [W("div", jd, k(n.value.initials), 1), W("div", null, [
				W("span", Md, k(n.value.scene), 1),
				W("h2", Nd, k(n.value.name), 1),
				W("p", null, k(n.value.editorial ? "Редакционная справка SUNOBOOM" : "Сведения из карточек Академии"), 1)
			])]),
			W("div", Pd, [
				W("section", null, [W("small", null, k(n.value.exactYears ? "Годы активности" : "Период в подборке"), 1), W("strong", null, k(n.value.period), 1)]),
				W("section", null, [i[4] ||= W("small", null, "Направлений в Академии", -1), W("strong", null, k(n.value.genres.length), 1)]),
				W("section", null, [i[5] ||= W("small", null, "Ориентиры для прослушивания", -1), W("strong", null, k(n.value.songs.length), 1)])
			]),
			W("div", Fd, [i[6] ||= W("h3", null, "Биография и творческий путь", -1), W("p", null, k(n.value.biography), 1)]),
			W("div", Id, [
				i[7] ||= W("h3", null, "Особенности звучания", -1),
				W("p", null, k(n.value.sound), 1),
				n.value.editorial ? K("", !0) : (H(), U("p", Ld, "Описание относится к музыкальному направлению и не является подтверждённым персональным анализом артиста."))
			]),
			W("div", Rd, [
				W("h3", null, k(n.value.editorial ? "Музыкальные влияния и стилистика" : "Истоки музыкального направления"), 1),
				n.value.roots.length ? (H(), U("div", zd, [(H(!0), U(V, null, B(n.value.roots, (e) => (H(), U("span", { key: e }, k(e), 1))), 128))])) : (H(), U("p", Bd, "Персональные музыкальные влияния ещё не документированы в этой карточке.")),
				!n.value.editorial && n.value.roots.length ? (H(), U("p", Vd, "Это контекст жанра, а не утверждение о личных влияниях музыканта.")) : K("", !0)
			]),
			W("div", Hd, [i[8] ||= W("h3", null, "Произведения для знакомства", -1), n.value.songs.length ? (H(), U("ul", Ud, [(H(!0), U(V, null, B(n.value.songs.slice(0, 10), (e) => (H(), U("li", { key: e }, "♫ " + k(e), 1))), 128))])) : (H(), U("p", Wd, "Список произведений пока не заполнен."))]),
			W("div", Gd, [i[9] ||= W("h3", null, "Жанры и связанные подборки", -1), n.value.genres.length ? (H(), U("div", Kd, [(H(!0), U(V, null, B(n.value.genres.slice(0, 15), (t) => (H(), U("button", {
				key: t.id,
				type: "button",
				"data-sb-ap-action": "genre",
				"data-genre": t.id,
				onClick: Y((n) => e.api.openGenre(t.id), ["stop"])
			}, k(t.name) + " →", 9, qd))), 128))])) : (H(), U("p", Jd, "Жанровые ссылки пока не добавлены."))]),
			W("div", Yd, [W("button", {
				type: "button",
				"data-sb-ap-action": "favorite",
				"data-name": n.value.name,
				"aria-pressed": n.value.favorite,
				class: "sb-ap-fav-main",
				onClick: i[1] ||= Y((t) => e.api.toggleFavorite(n.value.name), ["stop"])
			}, k(n.value.favorite ? "★ В избранном" : "☆ Сохранить в избранное"), 9, Xd), W("button", {
				type: "button",
				"data-sb-ap-action": "copy",
				"data-name": n.value.name,
				class: "sb-ap-copy",
				onClick: i[2] ||= Y((t) => e.api.copy(n.value.name), ["stop"])
			}, "Скопировать справку", 8, Zd)]),
			i[10] ||= W("p", { class: "sb-ap-fine" }, "Профиль не связан с отдельной функцией «ДНК артиста». Это справочный материал Академии, не личный творческий проект пользователя.", -1)
		], 64)) : K("", !0);
	}
};
// src/vue/academy/legacyArtistProfilesBridge.js
function $d({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_ARTIST_PROFILES;
	return t?.profileSnapshot ? Z({
		root: document.body,
		selectTarget: (e) => e.querySelector("#sb-ap-dialog-body"),
		readSnapshot: () => t.profileSnapshot(),
		subscribe: (e) => t.subscribe(e),
		mount: (n) => e(n, Qd, { api: t })
	}) : () => {};
}
// src/vue/account/SharedSongPage.vue
var ef = { class: "sbsong-hero" }, tf = {
	key: 0,
	class: "sbsong-public-card"
}, nf = ["src"], rf = {
	key: 1,
	class: "sbsong-public-art"
}, af = { class: "sbsong-detail-tags" }, of = { key: 0 }, sf = { key: 1 }, cf = {
	key: 2,
	class: "sbsong-detail-description"
}, lf = ["src"], uf = { key: 4 }, df = ["href"], ff = {
	key: 5,
	class: "sbsong-public-notice"
}, pf = {
	key: 1,
	class: "sbsong-empty"
}, mf = {
	__name: "SharedSongPage",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = /* @__PURE__ */ P(null);
		return Mr(() => {
			t.value && (t.value.pause(), t.value.removeAttribute("src"), t.value.load());
		}), (n, r) => (H(), U(V, null, [
			W("header", ef, [
				r[0] ||= W("span", { class: "sbsong-eyebrow" }, "SUNOBOOM · КАРТОЧКА ПЕСНИ", -1),
				W("h1", null, k(e.model.song?.title || "Карточка недоступна"), 1),
				W("p", null, k(e.model.song?.artist || ""), 1)
			]),
			e.model.song ? (H(), U("div", tf, [
				e.model.song.coverUrl ? (H(), U("img", {
					key: 0,
					class: "sbsong-public-art",
					style: {
						"object-fit": "cover",
						width: "100%",
						"max-width": "300px"
					},
					alt: "Обложка",
					src: e.model.song.coverUrl
				}, null, 8, nf)) : (H(), U("div", rf, "♫")),
				W("p", af, [e.model.song.genre ? (H(), U("span", of, k(e.model.song.genre), 1)) : K("", !0), e.model.song.album ? (H(), U("span", sf, k(e.model.song.album), 1)) : K("", !0)]),
				e.model.song.description ? (H(), U("p", cf, k(e.model.song.description), 1)) : K("", !0),
				e.model.song.audioUrl ? (H(), U("audio", {
					key: 3,
					ref_key: "audio",
					ref: t,
					controls: "",
					preload: "metadata",
					src: e.model.song.audioUrl
				}, null, 8, lf)) : K("", !0),
				e.model.song.listenUrl ? (H(), U("p", uf, [W("a", {
					href: e.model.song.listenUrl,
					target: "_blank",
					rel: "noopener noreferrer"
				}, "Послушать песню на внешнем сайте ↗", 8, df)])) : K("", !0),
				!e.model.song.audioUrl && !e.model.song.listenUrl ? (H(), U("p", ff, "В этой ссылке есть информация о песне, но нет аудиозаписи. Автор может отправить MP3 отдельно.")) : K("", !0)
			])) : (H(), U("p", pf, "Ссылка повреждена или карточка не найдена.")),
			r[1] ||= W("button", {
				type: "button",
				class: "sbsong-main-btn",
				"data-sbsong-action": "shared-home"
			}, "Открыть SUNOBOOM", -1),
			r[2] ||= W("p", { class: "sbsong-public-notice" }, "Ссылка открывает выбранные автором сведения. Карточка не требует входа, поэтому её сможет посмотреть любой получатель ссылки.", -1)
		], 64));
	}
};
// src/vue/account/legacySharedSongBridge.js
function hf({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SHARED_SONG, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Z({
		root: n,
		selectTarget: (e) => e.querySelector("#sbsong-shared"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, mf, { model: n })
	});
}
// src/vue/ideas/IdeasPage.vue
var gf = { class: "generator-panel" }, _f = { class: "generator-form" }, vf = ["for"], yf = [
	"id",
	"onUpdate:modelValue",
	"data-idea-generator"
], bf = ["value"], xf = { class: "field generator-detail-field" }, Sf = { class: "generator-bar" }, Cf = {
	type: "button",
	class: "btn primary",
	"data-action": "generate-ideas"
}, wf = ["innerHTML"], Tf = {
	id: "generated-results",
	class: "section-title"
}, Ef = {
	type: "button",
	class: "btn ghost small",
	"data-action": "generate-ideas"
}, Df = ["innerHTML"], Of = { class: "idea-grid" }, kf = { class: "idea-badge" }, Af = { class: "generator-story" }, jf = { class: "generator-hook" }, Mf = {
	key: 0,
	class: "generator-detail"
}, Nf = { class: "actions" }, Pf = ["data-id"], Ff = ["innerHTML"], If = ["data-id"], Lf = ["innerHTML"], Rf = ["data-id"], zf = ["innerHTML"], Bf = { class: "section-title" }, Vf = { class: "filters" }, Hf = ["data-filter"], Uf = { class: "section-title" }, Wf = { class: "idea-grid" }, Gf = { class: "idea-badge" }, Kf = { class: "actions" }, qf = ["data-id", "data-i"], Jf = ["innerHTML"], Yf = ["data-id", "data-i"], Xf = ["innerHTML"], Zf = {
	__name: "IdeasPage",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = /* @__PURE__ */ j({ ...e.initial.values });
		return (n, r) => (H(), U(V, null, [
			r[12] ||= W("header", { class: "heading" }, [W("h1", null, [G("Идеи песен "), W("span", { style: { color: "#fb7bbd" } }, "✦")]), W("p", null, "Создавай новые истории в генераторе или выбирай готовые идеи из каталога.")], -1),
			W("section", gf, [
				r[5] ||= W("div", { class: "generator-panel-top" }, [W("div", null, [
					W("div", { class: "eyebrow" }, "SUNOBOOM · IDEA LAB"),
					W("h2", null, [G("Создай новую идею "), W("span", null, "✦")]),
					W("p", null, "Подбери жанр, тему, настроение и сюжетную подачу. Получи несколько свежих концепций с названием, историей и хуком припева.")
				]), W("span", { class: "generator-orb" }, "💡")], -1),
				W("div", _f, [(H(!0), U(V, null, B(e.initial.fields, (e) => (H(), U("div", {
					key: e.key,
					class: "field"
				}, [W("label", { for: e.id }, k(e.label), 9, vf), L(W("select", {
					id: e.id,
					"onUpdate:modelValue": (n) => t[e.key] = n,
					"data-idea-generator": e.key
				}, [(H(!0), U(V, null, B(e.options, (e) => (H(), U("option", {
					key: e.value,
					value: e.value
				}, k(e.label), 9, bf))), 128))], 8, yf), [[Jo, t[e.key]]])]))), 128)), W("div", xf, [r[1] ||= W("label", { for: "gen-detail" }, "Своя деталь (необязательно)", -1), L(W("input", {
					id: "gen-detail",
					"onUpdate:modelValue": r[0] ||= (e) => t.detail = e,
					"data-idea-generator": "detail",
					maxlength: "220",
					placeholder: "Например: ночной Алматы, поезд, летний дождь"
				}, null, 512), [[J, t.detail]])])]),
				W("div", Sf, [
					W("button", Cf, [W("span", {
						style: { display: "contents" },
						"aria-hidden": "true",
						innerHTML: e.initial.icons.ideas
					}, null, 8, wf), r[2] ||= G(" Сгенерировать идеи", -1)]),
					r[3] ||= W("button", {
						type: "button",
						class: "btn ghost",
						"data-action": "surprise-ideas"
					}, "🎲 Удиви меня", -1),
					r[4] ||= W("span", { class: "generator-note" }, "Работает офлайн · без внешнего ИИ", -1)
				])
			]),
			e.initial.generated.length ? (H(), U(V, { key: 0 }, [W("div", Tf, [W("h2", null, "Твои новые идеи · " + k(e.initial.generated.length), 1), W("button", Ef, [W("span", {
				style: { display: "contents" },
				"aria-hidden": "true",
				innerHTML: e.initial.icons.arrow
			}, null, 8, Df), r[6] ||= G(" Ещё варианты", -1)])]), W("div", Of, [(H(!0), U(V, null, B(e.initial.generated, (t) => (H(), U("article", {
				key: t.id,
				class: "idea generated-card"
			}, [
				W("div", kf, k(t.badge), 1),
				W("h3", null, k(t.title), 1),
				W("p", null, k(t.pitch), 1),
				W("p", Af, k(t.storyLine), 1),
				W("div", jf, [r[7] ||= W("span", null, "ХУК ПРИПЕВА", -1), W("strong", null, k(t.hook), 1)]),
				t.detail ? (H(), U("p", Mf, "Твоя деталь: " + k(t.detail), 1)) : K("", !0),
				W("div", Nf, [
					W("button", {
						type: "button",
						class: "btn primary small",
						"data-action": "generated-use",
						"data-id": t.id
					}, [W("span", {
						style: { display: "contents" },
						"aria-hidden": "true",
						innerHTML: e.initial.icons.studio
					}, null, 8, Ff), r[8] ||= G(" В Suno Studio", -1)], 8, Pf),
					W("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "generated-copy",
						"data-id": t.id
					}, [W("span", {
						style: { display: "contents" },
						"aria-hidden": "true",
						innerHTML: e.initial.icons.copy
					}, null, 8, Lf), r[9] ||= G(" Копировать", -1)], 8, If),
					W("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "generated-save",
						"data-id": t.id
					}, [W("span", {
						style: { display: "contents" },
						"aria-hidden": "true",
						innerHTML: e.initial.icons.heart
					}, null, 8, zf), G(" " + k(t.saved ? "Сохранено" : "Сохранить"), 1)], 8, Rf)
				])
			]))), 128))])], 64)) : K("", !0),
			W("div", Bf, [W("h2", null, "Библиотека готовых сюжетов · " + k(e.initial.catalog.length), 1)]),
			W("div", Vf, [(H(!0), U(V, null, B(e.initial.families, (t) => (H(), U("button", {
				key: t,
				type: "button",
				class: O(["filter", { on: e.initial.family === t }]),
				"data-action": "idea-filter",
				"data-filter": t
			}, k(t), 11, Hf))), 128))]),
			W("div", Uf, [W("h2", null, "Идеи · " + k(e.initial.catalog.length), 1), r[10] ||= W("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "random-idea"
			}, "🎲 Случайная идея", -1)]),
			W("div", Wf, [(H(!0), U(V, null, B(e.initial.catalog, (t) => (H(), U("div", {
				key: t.key,
				class: "idea"
			}, [
				W("div", Gf, k(t.badge), 1),
				W("h3", null, k(t.title), 1),
				W("p", null, k(t.pitch), 1),
				W("div", Kf, [W("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "idea-use",
					"data-id": t.genre,
					"data-i": t.index
				}, [W("span", {
					style: { display: "contents" },
					"aria-hidden": "true",
					innerHTML: e.initial.icons.studio
				}, null, 8, Jf), r[11] ||= G(" В студию", -1)], 8, qf), W("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "idea-save",
					"data-id": t.genre,
					"data-i": t.index
				}, [W("span", {
					style: { display: "contents" },
					"aria-hidden": "true",
					innerHTML: e.initial.icons.heart
				}, null, 8, Xf), G(" " + k(t.saved ? "Сохранено" : "Сохранить"), 1)], 8, Yf)])
			]))), 128))])
		], 64));
	}
};
// src/vue/ideas/legacyIdeasPageBridge.js
function Qf({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_IDEAS_PAGE, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Z({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-ideas-page"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, Zf, { initial: n })
	});
}
// src/vue/account/AccountSummary.vue
var $f = { class: "account-avatar" }, ep = { class: "stat" }, tp = { class: "stat" }, np = { class: "stat" }, rp = {
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
		return (t, n) => e.kind === "profile" ? (H(), U(V, { key: 0 }, [W("div", $f, k(e.model.avatar), 1), W("div", null, [
			W("h2", null, k(e.model.name), 1),
			n[0] ||= W("p", null, "Локальный профиль · SUNOBOOM 0.55", -1),
			n[1] ||= W("span", { class: "small-chip" }, "Данные хранятся в этом браузере", -1)
		])], 64)) : (H(), U(V, { key: 1 }, [
			W("div", ep, [W("div", null, [W("strong", null, k(e.model.counts.projects), 1), n[2] ||= W("span", null, "моих проектов", -1)])]),
			W("div", tp, [W("div", null, [W("strong", null, k(e.model.counts.favorites), 1), n[3] ||= W("span", null, "любимых жанров", -1)])]),
			W("div", np, [W("div", null, [W("strong", null, k(e.model.counts.saved), 1), n[4] ||= W("span", null, "сохранённых идей и промптов", -1)])])
		], 64));
	}
}, ip = {
	id: "sb-vue-account-profile",
	class: "account-head panel"
}, ap = { class: "account-grid" }, op = { class: "two-col account-settings" }, sp = { class: "panel" }, cp = { class: "field" }, lp = {
	type: "button",
	class: "btn primary",
	"data-action": "save-profile"
}, up = ["innerHTML"], dp = { class: "panel" }, fp = { class: "detail-actions" }, pp = {
	type: "button",
	class: "btn ghost",
	"data-action": "export"
}, mp = ["innerHTML"], hp = {
	type: "button",
	class: "btn ghost",
	"data-action": "import"
}, gp = ["innerHTML"], _p = {
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
		let t = e, n = /* @__PURE__ */ j({ name: t.initial.profileName }), r = /* @__PURE__ */ P(null), i = () => t.api.syncStats(r.value);
		return z(i), (t, a) => (H(), U(V, null, [
			a[10] ||= W("header", { class: "heading" }, [
				W("div", { class: "eyebrow" }, "ЛИЧНОЕ ПРОСТРАНСТВО"),
				W("h1", null, "Личный кабинет"),
				W("p", null, "Твои музыкальные проекты, избранные материалы и резервные копии — всё в одном месте.")
			], -1),
			W("div", ip, [va(rp, {
				model: e.initial.summary,
				kind: "profile"
			}, null, 8, ["model"])]),
			W("div", {
				id: "sb-vue-account-stats",
				ref_key: "stats",
				ref: r,
				class: "account-stats",
				onScrollPassive: i
			}, [va(rp, {
				model: e.initial.summary,
				kind: "stats"
			}, null, 8, ["model"])], 544),
			W("div", ap, [(H(!0), U(V, null, B(e.initial.tiles, (e) => (H(), U("button", Ea({ key: e.key }, { ref_for: !0 }, e.attrs), [(H(!0), U(V, null, B(e.parts, (e, t) => (H(), U(V, { key: t }, [e.icon ? (H(), pa(Br(e.tag), Ea({
				key: 0,
				ref_for: !0
			}, e.attrs, { innerHTML: e.html }), null, 16, ["innerHTML"])) : (H(), pa(Br(e.tag), Ea({
				key: 1,
				ref_for: !0
			}, e.attrs), {
				default: Bn(() => [G(k(e.text), 1)]),
				_: 2
			}, 1040))], 64))), 128))], 16))), 128))]),
			W("div", op, [W("div", sp, [
				a[3] ||= W("h3", null, "👤 Настройки профиля", -1),
				a[4] ||= W("p", null, "Это отображаемое имя только для этого устройства, без регистрации и пароля.", -1),
				W("div", cp, [a[1] ||= W("label", { for: "profile-name" }, "Имя в кабинете", -1), L(W("input", {
					id: "profile-name",
					"onUpdate:modelValue": a[0] ||= (e) => n.name = e,
					type: "text",
					maxlength: "60",
					autocomplete: "off",
					placeholder: "Как тебя называть?"
				}, null, 512), [[J, n.name]])]),
				W("button", lp, [W("span", {
					style: { display: "contents" },
					"aria-hidden": "true",
					innerHTML: e.initial.icons.check
				}, null, 8, up), a[2] ||= G(" Сохранить имя", -1)])
			]), W("div", dp, [
				a[8] ||= W("h3", null, "💾 Резервная копия", -1),
				a[9] ||= W("p", null, "Сохраняй проекты и избранное в JSON-файл или восстанавливай данные из ранее созданной копии.", -1),
				W("div", fp, [
					W("button", pp, [W("span", {
						style: { display: "contents" },
						"aria-hidden": "true",
						innerHTML: e.initial.icons.download
					}, null, 8, mp), a[5] ||= G(" Экспорт данных", -1)]),
					W("button", hp, [W("span", {
						style: { display: "contents" },
						"aria-hidden": "true",
						innerHTML: e.initial.icons.plus
					}, null, 8, gp), a[6] ||= G(" Импорт данных", -1)]),
					a[7] ||= W("input", {
						id: "import-file",
						type: "file",
						accept: ".json,application/json",
						style: { display: "none" }
					}, null, -1)
				])
			])]),
			a[11] ||= W("div", { class: "account-notice" }, "🔒 Этот кабинет пока не является защищённой учётной записью. Данные сохраняются локально в браузере и не синхронизируются между устройствами. Адрес сайта GitHub Pages остаётся публичным.", -1)
		], 64));
	}
};
// src/vue/account/legacyAccountHomeBridge.js
function vp({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ACCOUNT_HOME, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Z({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-account-home"),
		readSnapshot: (e) => {
			let n = t.snapshot(), r = e.querySelector("#profile-name")?.value;
			return n?.tiles ? {
				...n,
				profileName: r ?? n.profileName
			} : null;
		},
		mount: (n, r) => e(n, _p, {
			initial: r,
			api: t
		})
	});
}
// src/vue/account/legacyAccountSummaryBridge.js
function yp({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ACCOUNT_SUMMARY, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Ed({
		root: n,
		islands: [["profile", "sb-vue-account-profile"], ["stats", "sb-vue-account-stats"]].map(([n, r]) => ({
			key: n,
			selectTarget: (e) => {
				let t = e.querySelector("#" + r);
				return t?.closest("#sb-vue-account-home") ? null : t;
			},
			readSnapshot: () => t.snapshot(),
			mount: (t, r) => e(t, rp, {
				model: r,
				kind: n
			})
		}))
	});
}
// src/vue/account/EventActions.vue
var bp = {
	type: "button",
	class: "btn primary",
	"data-action": "event-save"
}, xp = {
	key: 0,
	type: "button",
	class: "btn ghost",
	"data-action": "event-cancel"
}, Sp = {
	__name: "EventActions",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (H(), U(V, null, [W("button", bp, k(e.model.editing ? "Сохранить изменения" : "Сохранить событие"), 1), e.model.editing ? (H(), U("button", xp, "Отменить")) : K("", !0)], 64));
	}
};
// src/vue/account/legacyEventActionsBridge.js
function Cp({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_EVENT_ACTIONS, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Z({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-event-actions"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, Sp, { model: n })
	});
}
// src/vue/account/EventReminders.vue
var wp = { class: "sb-reminder-picker" }, Tp = { class: "sb-reminder-choices" }, Ep = ["value"], Dp = { class: "sb-reminder-custom-label" }, Op = ["hidden"], kp = {
	__name: "EventReminders",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ j({
			...t.initial.values,
			selected: [...t.initial.values.selected]
		});
		return (t, r) => (H(), U("fieldset", wp, [
			r[7] ||= W("legend", null, "🔔 Когда напомнить?", -1),
			r[8] ||= W("p", { class: "sb-reminder-help" }, "Выбери один или несколько сроков. Убери все галочки, чтобы отключить уведомления.", -1),
			W("div", Tp, [(H(!0), U(V, null, B(e.initial.presets, (e) => (H(), U("label", {
				key: e.days,
				class: "sb-reminder-choice"
			}, [
				L(W("input", {
					"onUpdate:modelValue": r[0] ||= (e) => n.selected = e,
					type: "checkbox",
					name: "event-reminder-preset",
					value: e.days
				}, null, 8, Ep), [[Ko, n.selected]]),
				r[3] ||= G(),
				W("span", null, k(e.label), 1)
			]))), 128))]),
			W("label", Dp, [L(W("input", {
				id: "event-reminder-custom",
				"onUpdate:modelValue": r[1] ||= (e) => n.custom = e,
				type: "checkbox"
			}, null, 512), [[Ko, n.custom]]), r[4] ||= G(" Свой срок до события", -1)]),
			W("div", {
				id: "event-reminder-custom-wrap",
				class: "sb-reminder-custom-input",
				hidden: !n.custom
			}, [
				r[5] ||= W("label", { for: "event-reminder-custom-days" }, "За сколько дней?", -1),
				L(W("input", {
					id: "event-reminder-custom-days",
					"onUpdate:modelValue": r[2] ||= (e) => n.customDays = e,
					type: "number",
					min: "1",
					max: "365",
					step: "1",
					inputmode: "numeric"
				}, null, 512), [[J, n.customDays]]),
				r[6] ||= W("span", null, "дней до события", -1)
			], 8, Op)
		]));
	}
};
// src/vue/account/legacyEventRemindersBridge.js
function Ap({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_EVENT_REMINDERS, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Z({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-event-reminders"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, kp, { initial: n })
	});
}
// src/vue/account/EventEditor.vue
var jp = { class: "field" }, Mp = { class: "dash-event-fields" }, Np = { class: "field" }, Pp = { class: "field" }, Fp = { class: "field" }, Ip = ["value"], Lp = { class: "field" }, Rp = {
	__name: "EventEditor",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = /* @__PURE__ */ j({ ...e.initial.values });
		return (n, r) => (H(), U(V, null, [
			W("h2", null, k(e.initial.editing ? "Редактирование события" : "Добавить событие"), 1),
			W("div", jp, [r[5] ||= W("label", { for: "event-title" }, "Название события", -1), L(W("input", {
				id: "event-title",
				"onUpdate:modelValue": r[0] ||= (e) => t.title = e,
				type: "text",
				maxlength: "120",
				placeholder: "Например, релиз нового EP"
			}, null, 512), [[J, t.title]])]),
			W("div", Mp, [
				W("div", Np, [r[6] ||= W("label", { for: "event-date" }, "Дата", -1), L(W("input", {
					id: "event-date",
					"onUpdate:modelValue": r[1] ||= (e) => t.date = e,
					type: "date"
				}, null, 512), [[J, t.date]])]),
				W("div", Pp, [r[7] ||= W("label", { for: "event-time" }, "Время (необязательно)", -1), L(W("input", {
					id: "event-time",
					"onUpdate:modelValue": r[2] ||= (e) => t.time = e,
					type: "time"
				}, null, 512), [[J, t.time]])]),
				W("div", Fp, [r[8] ||= W("label", { for: "event-type" }, "Тип события", -1), L(W("select", {
					id: "event-type",
					"onUpdate:modelValue": r[3] ||= (e) => t.type = e
				}, [(H(!0), U(V, null, B(e.initial.types, (e) => (H(), U("option", {
					key: e.id,
					value: e.id
				}, k(e.label), 9, Ip))), 128))], 512), [[Jo, t.type]])])
			]),
			W("div", Lp, [r[9] ||= W("label", { for: "event-notes" }, "Описание (необязательно)", -1), L(W("textarea", {
				id: "event-notes",
				"onUpdate:modelValue": r[4] ||= (e) => t.notes = e,
				rows: "3",
				maxlength: "1200",
				placeholder: "Детали, место или заметки"
			}, null, 512), [[J, t.notes]])])
		], 64));
	}
};
// src/vue/account/legacyEventEditorBridge.js
function zp({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_EVENT_EDITOR, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Z({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-event-fields"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, Rp, { initial: n })
	});
}
// src/vue/account/EventCollection.vue
var Bp = { class: "section-title" }, Vp = {
	key: 0,
	class: "dash-event-list"
}, Hp = { class: "dash-event-date" }, Up = { class: "dash-event-main" }, Wp = { class: "dash-entry-meta" }, Gp = { key: 0 }, Kp = { class: "sb-event-reminder-summary" }, qp = { class: "dash-event-controls" }, Jp = ["data-id"], Yp = ["data-id"], Xp = {
	key: 1,
	class: "dash-simple-empty"
}, Zp = {
	__name: "EventCollection",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (H(!0), U(V, null, B(e.model.groups, (e) => (H(), U(V, { key: e.key }, [W("div", Bp, [W("h2", null, k(e.title) + " (" + k(e.items.length) + ")", 1)]), e.items.length ? (H(), U("div", Vp, [(H(!0), U(V, null, B(e.items, (e) => (H(), U("article", {
			key: e.id,
			class: "dash-event-row"
		}, [
			W("div", Hp, [W("strong", null, k(e.date), 1), W("span", null, k(e.time), 1)]),
			W("div", Up, [
				W("div", Wp, k(e.type), 1),
				W("h3", null, k(e.title), 1),
				e.notes ? (H(), U("p", Gp, k(e.notes), 1)) : K("", !0),
				W("div", Kp, k(e.reminder), 1)
			]),
			W("div", qp, [W("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "event-edit",
				"data-id": e.id
			}, "Изменить", 8, Jp), W("button", {
				type: "button",
				class: "btn danger small",
				"data-action": "event-delete",
				"data-id": e.id
			}, "Удалить", 8, Yp)])
		]))), 128))])) : (H(), U("div", Xp, k(e.empty), 1))], 64))), 128));
	}
};
// src/vue/account/legacyEventCollectionBridge.js
function Qp({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_EVENT_LIST, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Z({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-events-list"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, Zp, { model: n })
	});
}
// src/vue/account/ProjectDetail.vue
var $p = { class: "field" }, em = { class: "detail-actions" }, tm = ["data-id"], nm = ["innerHTML"], rm = ["data-id"], im = ["innerHTML"], am = ["data-id"], om = ["innerHTML"], sm = {
	key: 1,
	class: "empty"
}, cm = {
	__name: "ProjectDetail",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = /* @__PURE__ */ P(e.initial.project?.notes ?? "");
		return (n, r) => e.initial.project ? (H(), U(V, { key: 0 }, [
			r[5] ||= W("div", { class: "eyebrow" }, "Рабочая карточка", -1),
			W("h3", null, k(e.initial.project.title), 1),
			W("p", null, k(e.initial.project.genreName) + " · создан " + k(e.initial.project.date), 1),
			W("div", $p, [r[1] ||= W("label", { for: "project-notes" }, "Заметки, треклист, идеи и задачи", -1), L(W("textarea", {
				id: "project-notes",
				"onUpdate:modelValue": r[0] ||= (e) => t.value = e,
				rows: "12"
			}, null, 512), [[J, t.value]])]),
			W("div", em, [
				W("button", {
					type: "button",
					class: "btn primary",
					"data-action": "save-project",
					"data-id": e.initial.project.id
				}, [W("span", {
					style: { display: "contents" },
					"aria-hidden": "true",
					innerHTML: e.initial.icons.check
				}, null, 8, nm), r[2] ||= G(" Сохранить заметки", -1)], 8, tm),
				W("button", {
					type: "button",
					class: "btn ghost",
					"data-action": "use-genre",
					"data-id": e.initial.project.genre
				}, [W("span", {
					style: { display: "contents" },
					"aria-hidden": "true",
					innerHTML: e.initial.icons.studio
				}, null, 8, im), r[3] ||= G(" В студию", -1)], 8, rm),
				W("button", {
					type: "button",
					class: "btn danger",
					"data-action": "delete-project",
					"data-id": e.initial.project.id
				}, [W("span", {
					style: { display: "contents" },
					"aria-hidden": "true",
					innerHTML: e.initial.icons.trash
				}, null, 8, om), r[4] ||= G(" Удалить", -1)], 8, am)
			])
		], 64)) : (H(), U("div", sm, [...r[6] ||= [W("strong", null, "Начни со своего проекта", -1), G("Здесь появятся заметки и рабочая карточка выбранного проекта.", -1)]]));
	}
};
// src/vue/account/legacyProjectDetailBridge.js
function lm({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PROJECT_DETAIL, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Z({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-project-detail"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, cm, { initial: n })
	});
}
// src/vue/account/ProjectCreator.vue
var um = { class: "field" }, dm = { class: "field" }, fm = ["value"], pm = {
	type: "button",
	class: "btn primary",
	"data-action": "create-project"
}, mm = ["innerHTML"], hm = {
	__name: "ProjectCreator",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = /* @__PURE__ */ j({ ...e.initial.values });
		return (n, r) => (H(), U(V, null, [
			r[5] ||= W("h3", null, "Новый проект", -1),
			W("div", um, [r[2] ||= W("label", { for: "p-title" }, "Название", -1), L(W("input", {
				id: "p-title",
				"onUpdate:modelValue": r[0] ||= (e) => t.title = e,
				placeholder: "Например, дебютный EP"
			}, null, 512), [[J, t.title]])]),
			W("div", dm, [r[3] ||= W("label", { for: "p-genre" }, "Основной жанр", -1), L(W("select", {
				id: "p-genre",
				"onUpdate:modelValue": r[1] ||= (e) => t.genre = e
			}, [(H(!0), U(V, null, B(e.initial.genres, (e) => (H(), U("option", {
				key: e.id,
				value: e.id
			}, k(e.name), 9, fm))), 128))], 512), [[Jo, t.genre]])]),
			W("button", pm, [W("span", {
				style: { display: "contents" },
				"aria-hidden": "true",
				innerHTML: e.initial.plusIcon
			}, null, 8, mm), r[4] ||= G(" Создать проект", -1)])
		], 64));
	}
};
// src/vue/account/legacyProjectCreatorBridge.js
function gm({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PROJECT_CREATOR, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Z({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-project-creator"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, hm, { initial: n })
	});
}
// src/vue/account/ProjectCollection.vue
var _m = { class: "section-title" }, vm = ["data-id", "aria-pressed"], ym = {
	key: 1,
	class: "empty"
}, bm = ["innerHTML"], xm = {
	__name: "ProjectCollection",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (H(), U(V, null, [W("div", _m, [W("h2", null, "Мои проекты (" + k(e.model.items.length) + ")", 1)]), e.model.items.length ? (H(!0), U(V, { key: 0 }, B(e.model.items, (t) => (H(), U("div", {
			key: t.id,
			class: O(["project-card", { selected: t.id === e.model.selectedId }]),
			"data-action": "select-project",
			"data-id": t.id,
			role: "button",
			tabindex: "0",
			"aria-pressed": t.id === e.model.selectedId
		}, [W("h3", null, k(t.title), 1), W("p", null, k(t.genre) + " · " + k(t.date), 1)], 10, vm))), 128)) : (H(), U("div", ym, [
			W("span", {
				style: { display: "contents" },
				"aria-hidden": "true",
				innerHTML: e.model.musicIcon
			}, null, 8, bm),
			n[0] ||= W("strong", null, "Проектов пока нет", -1),
			n[1] ||= G("Создай первый проект выше.", -1)
		]))], 64));
	}
};
// src/vue/account/legacyProjectCollectionBridge.js
function Sm({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PROJECT_LIST, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Z({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-projects-list"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, xm, { model: n })
	});
}
// src/vue/legacy/createFeatureMounter.js
function Cm({ createApp: e, host: t, pinia: n, router: r, resolveTarget: i, warn: a = (...e) => console.warn(...e) }) {
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
var wm = typeof window < "u", Tm, Em = (e) => Tm = e, Dm = Symbol();
function Om(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var km;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(km ||= {});
var Am = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function jm(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function Mm(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		Lm(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function Nm(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function Pm(e) {
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
var Fm = typeof navigator == "object" ? navigator : { userAgent: "" }, Im = /Macintosh/.test(Fm.userAgent) && /AppleWebKit/.test(Fm.userAgent) && !/Safari/.test(Fm.userAgent), Lm = wm ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Im ? Rm : "msSaveOrOpenBlob" in Fm ? zm : Bm : () => {};
function Rm(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? Pm(r) : Nm(r.href) ? Mm(e, t, n) : (r.target = "_blank", Pm(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		Pm(r);
	}, 0));
}
function zm(e, t = "download", n) {
	if (typeof e == "string") {
		if (Nm(e)) Mm(e, t, n);
		else {
			let t = document.createElement("a");
			t.href = e, t.target = "_blank", setTimeout(function() {
				Pm(t);
			});
		}
	} else navigator.msSaveOrOpenBlob(jm(e, n), t);
}
function Bm(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return Mm(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(Am.HTMLElement)) || "safari" in Am, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || Im) && typeof FileReader < "u") {
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
var { assign: Vm } = Object;
function Hm() {
	let e = Ae(!0), t = e.run(() => /* @__PURE__ */ P({})), n = [], r = [], i = Xt({
		install(e) {
			Em(i), i._a = e, e.provide(Dm, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
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
var Um = () => {};
function Wm(e, t, n, r = Um) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && je() && Me(i), i;
}
function Gm(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var Km = (e) => e(), qm = Symbol(), Jm = Symbol();
function Ym(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!t.hasOwnProperty(n)) continue;
		let r = t[n], i = e[n];
		e[n] = Om(i) && Om(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ N(r) && !/* @__PURE__ */ Kt(r) ? Ym(i, r) : r;
	}
	return e;
}
var Xm = Symbol();
function Zm(e) {
	return !Om(e) || !Object.prototype.hasOwnProperty.call(e, Xm);
}
var { assign: Qm } = Object;
function $m(e) {
	return !!(/* @__PURE__ */ N(e) && e.effect);
}
function eh(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || 
		/* istanbul ignore if */
		(n.state.value[e] = i ? i() : {}), Qm(/* @__PURE__ */ rn(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = Xt(q(() => {
			Em(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return c = th(e, l, t, n, r, !0), c;
}
function th(e, t, n = {}, r, i, a) {
	let o, s = Qm({ actions: {} }, n), c = { deep: !0 }, l, u, d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p, m = r.state.value[e];
	!a && !m && 
	/* istanbul ignore if */
	(r.state.value[e] = {});
	let h;
	function g(t) {
		let n;
		l = u = !1, typeof t == "function" ? (t(r.state.value[e]), n = {
			type: km.patchFunction,
			storeId: e,
			events: p
		}) : (Ym(r.state.value[e], t), n = {
			type: km.patchObject,
			payload: t,
			storeId: e,
			events: p
		});
		let i = h = Symbol();
		En().then(() => {
			h === i && (l = !0);
		}), u = !0, Gm(d, n, r.state.value[e]);
	}
	let _ = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			Qm(e, t);
		});
	} : Um;
	function v() {
		o.stop(), d.clear(), f.clear(), r._s.delete(e);
	}
	let y = (t, n = "") => {
		if (qm in t) return t[Jm] = n, t;
		let i = function() {
			Em(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			Gm(f, {
				args: n,
				name: i[Jm],
				store: b,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : b, n);
			} catch (e) {
				throw Gm(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (Gm(a, e), e)).catch((e) => (Gm(o, e), Promise.reject(e))) : (Gm(a, l), l);
		};
		return i[qm] = !0, i[Jm] = n, i;
	}, b = /* @__PURE__ */ j({
		_p: r,
		$id: e,
		$onAction: Wm.bind(null, f),
		$patch: g,
		$reset: _,
		$subscribe(t, n = {}) {
			let i = Wm(d, t, n.detached, () => a()), a = o.run(() => R(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? u : l) && t({
					storeId: e,
					type: km.direct,
					events: p
				}, r);
			}, Qm({}, c, n)));
			return i;
		},
		$dispose: v
	});
	r._s.set(e, b);
	let x = (r._a && r._a.runWithContext || Km)(() => r._e.run(() => (o = Ae()).run(() => t({ action: y }))));
	for (let t in x) {
		let n = x[t];
		/* @__PURE__ */ N(n) && !$m(n) || /* @__PURE__ */ Kt(n) ? a || (m && Zm(n) && (/* @__PURE__ */ N(n) ? n.value = m[t] : Ym(n, m[t])), r.state.value[e][t] = n) : typeof n == "function" && (x[t] = y(n, t), s.actions[t] = n);
	}
	return Qm(b, x), Qm(/* @__PURE__ */ M(b), x), Object.defineProperty(b, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			g((t) => {
				Qm(t, e);
			});
		}
	}), r._p.forEach((e) => {
		Qm(b, o.run(() => e({
			store: b,
			app: r._a,
			pinia: r,
			options: s
		})));
	}), m && a && n.hydrate && n.hydrate(b.$state, m), l = !0, u = !0, b;
}
function nh(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function a(n, a) {
		let o = Wn();
		return n ||= o ? Un(Dm, null) : null, n && Em(n), n = Tm, n._s.has(e) || (i ? th(e, t, r, n) : eh(e, r, n)), n._s.get(e);
	}
	return a.$id = e, a;
}
// src/vue/navigation/nav-model.js
var rh = /* @__PURE__ */ new Set([
	"projects",
	"saved",
	"myideas",
	"myprompts",
	"events",
	"tracks",
	"artists"
]);
function ih(e) {
	return e === "detail" ? "catalog" : rh.has(e) ? "account" : e;
}
function ah(e) {
	let t = ih(e?.active), n = /* @__PURE__ */ new Set(), r = !1, i = [];
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
var oh = /* @__PURE__ */ F(Object.freeze({
	route: "home",
	active: "home",
	revision: 0
})), sh = /* @__PURE__ */ Wt(oh);
function ch(e, { historyMode: t = "replace", context: n = null, source: r = "legacy" } = {}) {
	let i = typeof e == "string" && e ? e : "home";
	if (zl(i, {
		historyMode: t,
		context: n,
		source: r
	}), i === oh.value.route) return oh.value;
	let a = Object.freeze({
		route: i,
		active: ih(i),
		revision: oh.value.revision + 1
	});
	return oh.value = a, a;
}
// src/vue/state/appearance-model.js
function lh(e) {
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
var uh = /* @__PURE__ */ new Set([
	"all",
	"",
	"name",
	"family",
	"artist",
	"description"
]), dh = /* @__PURE__ */ new Set([
	"overview",
	"ideas",
	"prompts",
	"artists"
]), fh = /^[a-z0-9][a-z0-9-]{0,99}$/;
function ph({ query: e, results: t, total: n, mode: r } = {}) {
	return typeof e != "string" || e.length > 160 || !Number.isSafeInteger(n) || n < 0 || !Number.isSafeInteger(t) || t < 0 || t > n || !uh.has(r) ? null : Object.freeze({
		query: e,
		results: t,
		total: n,
		mode: r
	});
}
function mh(e, t) {
	return typeof e != "string" || !fh.test(e) || !dh.has(t) ? null : Object.freeze({
		genreId: e,
		tab: t
	});
}
function hh({ tree: e, selected: t, zoom: n, query: r } = {}) {
	return typeof e != "string" || !fh.test(e) || typeof t != "string" || !fh.test(t) || typeof n != "number" || !Number.isFinite(n) || n < .75 || n > 1.5 || typeof r != "string" || r.length > 160 ? null : Object.freeze({
		tree: e,
		selected: t,
		zoom: n,
		query: r
	});
}
// src/vue/state/production-ui-model.js
var gh = /^[a-z0-9][a-z0-9-]{0,99}$/, _h = (e, t, n) => Number.isSafeInteger(e) && e >= t && e <= n;
function vh(e) {
	let t = e?.settings, n = e?.prompt, r = t?.genre;
	return typeof r != "string" || !gh.test(r) || !_h(t?.tempo, 65, 200) || typeof n != "string" || n.length > 1e3 ? null : Object.freeze({
		ready: !0,
		genreId: r,
		tempo: t.tempo,
		promptLength: n.length
	});
}
function yh(e) {
	let t = e?.rows, n = e?.prompt;
	return !Array.isArray(t) || t.length < 2 || t.length > 4 || !_h(e?.tempo, 65, 200) || typeof n != "string" || n.length > 1e3 || !t.every((e) => typeof e?.id == "string" && gh.test(e.id) && _h(e.weight, 0, 100)) || t.reduce((e, t) => e + t.weight, 0) !== 100 || new Set(t.map((e) => e.id)).size !== t.length ? null : Object.freeze({
		ready: !0,
		genreCount: t.length,
		tempo: e.tempo,
		promptLength: n.length
	});
}
function bh(e) {
	let t = e?.report;
	return !["manual", "studio"].includes(e?.mode) || !_h(t?.score, 0, 100) || !_h(t?.length, 0, 1e5) ? null : Object.freeze({
		ready: !0,
		mode: e.mode,
		score: t.score,
		checkedLength: t.length
	});
}
function xh(e) {
	let t = e?.blocks;
	if (!Array.isArray(t) || t.length > 64 || !t.every((e) => e && [
		2,
		4,
		8,
		12,
		16,
		24,
		32
	].includes(e.bars) && _h(e.energy, 1, 5) && typeof e.hasTransition == "boolean")) return null;
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
var Sh = (e, t, n) => Number.isSafeInteger(e) && e >= t && e <= n, Ch = (e) => typeof e == "boolean";
function wh(e) {
	return !Sh(e?.count, 0, 150) || !Sh(e?.currentIndex, -1, e.count - 1) || e.count === 0 && e.currentIndex !== -1 || !Ch(e.playing) || e.playing && e.currentIndex === -1 || !Ch(e.shuffle) || ![
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
function Th(e) {
	let t = e?.files?.A?.ready, n = e?.files?.B?.ready;
	return !["player", "compare"].includes(e?.mode) || !["A", "B"].includes(e?.active) || !Ch(e.playing) || !Ch(e.loop) || !Ch(e.hasBoth) || !Ch(t) || !Ch(n) || e.hasBoth !== (t && n) || e.playing && !(e.active === "A" ? t : n) ? null : Object.freeze({
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
var Eh = (e) => Number.isSafeInteger(e) && e >= 0 && e <= 1e4, Dh = Object.freeze([
	"all",
	"idea",
	"lyrics",
	"generation",
	"selection",
	"mastering",
	"publisher",
	"released"
]);
function Oh(e) {
	let t = e?.records;
	return !Array.isArray(t) || !Eh(t.length) || typeof e.hasRecords != "boolean" || e.hasRecords !== t.length > 0 || !t.every((e) => e && Number.isSafeInteger(e.done) && e.done >= 0 && e.total === 6 && e.done <= e.total && e.percent === Math.round(e.done / e.total * 100)) ? null : Object.freeze({
		ready: !0,
		workCount: t.length,
		finishedCount: t.filter((e) => e.done === e.total).length,
		hasSelection: t.some((t) => typeof t.id == "string" && t.id === e.selectedId)
	});
}
function kh(e) {
	let t = e?.records;
	return !Array.isArray(t) || !Eh(t.length) || typeof e.hasRecords != "boolean" || !Dh.includes(e.active) || t.length > 0 && !e.hasRecords || e.active === "all" && e.hasRecords !== t.length > 0 ? null : Object.freeze({
		ready: !0,
		visibleCount: t.length,
		hasRecords: e.hasRecords,
		filter: e.active
	});
}
function Ah(e) {
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
function jh(e) {
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
var Mh = (e, t = 1e4) => Number.isSafeInteger(e) && e >= 0 && e <= t, Nh = (e) => typeof e == "boolean";
function Ph(e) {
	let t = e?.items;
	return !Mh(e?.total) || !Array.isArray(t) || !Mh(t.length) || t.length > e.total || !t.every((e) => e && Nh(e.hasCover)) ? null : Object.freeze({
		ready: !0,
		totalCount: e.total,
		visibleCount: t.length,
		localCoverCount: t.filter((e) => e.hasCover).length
	});
}
function Fh(e) {
	let t = e?.versions;
	return !Array.isArray(t) || !Mh(t.length, 1e3) || !Nh(e.hasAudio) || !Nh(e.hasCover) || !Nh(e.hasPlayableAudio) || !Nh(e.compareOpen) || e.compareOpen && t.length < 2 || !t.every((e) => e && Nh(e.isMain) && Nh(e.isPlaying)) || t.filter((e) => e.isMain).length > 1 || t.filter((e) => e.isPlaying).length > 1 ? null : Object.freeze({
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
var Ih = (e, t = 1e4) => Number.isSafeInteger(e) && e >= 0 && e <= t;
function Lh(e, t) {
	return !Array.isArray(e?.artists) || !Ih(e.artists.length) || !Ih(t) || t > e.artists.length || !Ih(e.dnaCount) ? null : Object.freeze({
		ready: !0,
		artistCount: e.artists.length,
		visibleCount: t,
		dnaCount: e.dnaCount
	});
}
function Rh(e) {
	let t = e?.profiles, n = e?.detail;
	return !Array.isArray(t) || !Ih(t.length) || n !== null && (!n || typeof n != "object") || n !== null && (!Array.isArray(n.related) || !Ih(n.related.length) || !Array.isArray(n.forbids) || !Ih(n.forbids.length, 32) || !Array.isArray(n.facts) || !Ih(n.facts.length, 32) || !Array.isArray(n.textFields) || !Ih(n.textFields.length, 32)) ? null : Object.freeze({
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
var zh = (e) => Number.isSafeInteger(e) && e >= 0 && e <= 1e4, Bh = Object.freeze([
	"genres",
	"ideas",
	"own",
	"generated",
	"prompts"
]);
function Vh(e) {
	if (!e || !Bh.every((t) => Array.isArray(e[t]) && zh(e[t].length) && e[t].every((e) => typeof e == "object" && !!e))) return null;
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
var Hh = (e, t) => typeof e == "string" && e.length <= t;
function Uh(e) {
	return !e || !Hh(e.title, 100) || !Hh(e.genre, 128) || !Hh(e.text, 3e3) || !Hh(e.hook, 240) ? null : Object.freeze({
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
function Wh(e, t) {
	return !e || typeof t != "boolean" || !Hh(e.title, 100) || !Hh(e.genre, 128) || !Hh(e.text, 1e3) ? null : Object.freeze({
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
function Gh(e) {
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
function Kh(e) {
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
function qh(e) {
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
var Jh = /* @__PURE__ */ new Set([
	"smart",
	"rules",
	"manual"
]), Yh = /* @__PURE__ */ new Set([
	"auto",
	"original",
	"tagged"
]), Xh = /* @__PURE__ */ new Set([
	"minimal",
	"balanced",
	"detailed"
]), Zh = [
	"melisma",
	"falsetto",
	"harmonies",
	"noWhisper",
	"noRasp"
];
function Qh(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) return null;
	let t = e.prefs;
	if (!t || typeof t != "object" || Array.isArray(t) || !Jh.has(t.mode) || !Yh.has(t.source) || !Xh.has(t.density) || !Number.isSafeInteger(t.intensity) || t.intensity < 1 || t.intensity > 5 || Zh.some((e) => typeof t[e] != "boolean") || typeof e.busy != "boolean") return null;
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
var $h = Object.freeze([]), eg = Object.freeze({
	ideaCount: 0,
	promptCount: 0,
	eventCount: 0,
	revision: 0
}), tg = (e) => Number.isSafeInteger(e) && e >= 0 ? e : 0, Q = nh("sunoboom-legacy-ui", () => {
	let e = sh, t = /* @__PURE__ */ F($h), n = /* @__PURE__ */ F(eg), r = /* @__PURE__ */ F(Object.freeze({
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
		let t = ph(e);
		if (!t) return !1;
		let n = i.value;
		return n.query === t.query && n.results === t.results && n.total === t.total && n.mode === t.mode ? !1 : (i.value = Object.freeze({
			...t,
			revision: n.revision + 1
		}), !0);
	}
	function c(e, t) {
		let n = mh(e, t);
		if (!n) return !1;
		let r = a.value;
		return r.genreId === n.genreId && r.tab === n.tab ? !1 : (a.value = Object.freeze({
			...n,
			revision: r.revision + 1
		}), !0);
	}
	function l(e) {
		let t = hh(e);
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
	})), S = /* @__PURE__ */ F(Object.freeze({
		ready: !1,
		artistCount: 0,
		visibleCount: 0,
		dnaCount: 0,
		revision: 0
	})), C = /* @__PURE__ */ F(Object.freeze({
		ready: !1,
		profileCount: 0,
		detailOpen: !1,
		linkedTrackCount: 0,
		restrictionsCount: 0,
		factCount: 0,
		sectionCount: 0,
		revision: 0
	})), w = /* @__PURE__ */ F(Object.freeze({
		ready: !1,
		genreCount: 0,
		academyIdeaCount: 0,
		ownIdeaCount: 0,
		generatedIdeaCount: 0,
		promptCount: 0,
		totalIdeaCount: 0,
		revision: 0
	})), ee = /* @__PURE__ */ F(Object.freeze({
		ready: !1,
		titleLength: 0,
		ideaLength: 0,
		hookLength: 0,
		hasTitle: !1,
		hasGenre: !1,
		hasIdea: !1,
		hasHook: !1,
		revision: 0
	})), te = /* @__PURE__ */ F(Object.freeze({
		ready: !1,
		editing: !1,
		titleLength: 0,
		textLength: 0,
		hasTitle: !1,
		hasGenre: !1,
		hasPrompt: !1,
		revision: 0
	})), ne = /* @__PURE__ */ F(Object.freeze({
		ready: !1,
		charCount: 0,
		lineCount: 0,
		wordCount: 0,
		hasText: !1,
		revision: 0
	})), T = /* @__PURE__ */ F(Object.freeze({
		ready: !1,
		analyzed: !1,
		rowCount: 0,
		previewStanzaCount: 0,
		stressMarkCount: 0,
		suggestionCount: 0,
		revision: 0
	})), re = /* @__PURE__ */ F(Object.freeze({
		ready: !1,
		occurrenceCount: 0,
		distinctCount: 0,
		visibleCount: 0,
		revision: 0
	})), ie = /* @__PURE__ */ F(Object.freeze({
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
	function E(e, t, n) {
		let r = t(n);
		if (!r) return !1;
		let i = e.value;
		return !Object.keys(r).every((e) => i[e] === r[e]) && (e.value = Object.freeze({
			...r,
			revision: i.revision + 1
		}), !0);
	}
	let ae = (e) => E(u, vh, e), oe = (e) => E(d, yh, e), se = (e) => E(f, bh, e), ce = (e) => E(p, xh, e), le = (e) => E(m, wh, e), ue = (e) => E(h, Th, e), de = (e) => E(g, Oh, e), D = (e) => E(_, kh, e), fe = (e) => E(v, Ah, e), pe = (e) => E(y, jh, e), me = (e) => E(b, Ph, e), he = (e) => E(x, Fh, e), O = (e, t) => E(S, (e) => Lh(e, t), e), ge = (e) => E(C, Rh, e), _e = (e) => E(w, Vh, e), ve = (e) => E(ee, Uh, e), ye = (e, t) => E(te, (e) => Wh(e, t), e), be = (e) => E(ne, Gh, e), xe = (e) => E(T, Kh, e), Se = (e) => E(re, qh, e);
	function Ce() {
		let e = re.value;
		return e.ready ? (re.value = Object.freeze({
			ready: !1,
			occurrenceCount: 0,
			distinctCount: 0,
			visibleCount: 0,
			revision: e.revision + 1
		}), !0) : !1;
	}
	let we = (e) => E(ie, Qh, e);
	function Te() {
		let e = ie.value;
		return e.ready ? (ie.value = Object.freeze({
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
			ideaCount: tg(e.ideaCount),
			promptCount: tg(e.promptCount),
			eventCount: tg(e.eventCount)
		}, r = n.value;
		return r.ideaCount === t.ideaCount && r.promptCount === t.promptCount && r.eventCount === t.eventCount ? !1 : (n.value = Object.freeze({
			...t,
			revision: r.revision + 1
		}), !0);
	}
	function De(e) {
		let t = lh(e);
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
		artistManagerSummary: S,
		artistDnaSummary: C,
		librarySummary: w,
		ideaDraftSummary: ee,
		promptDraftSummary: te,
		poetrySourceSummary: ne,
		poetryAnalysisSummary: T,
		poetryAmbiguitySummary: re,
		performanceTagsSummary: ie,
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
}), ng = {
	key: 0,
	class: "sub",
	"data-sb-vue-idea-library-recap": ""
}, rg = { class: "section-title" }, ig = {
	key: 0,
	class: "btn ghost small",
	"data-action": "nav",
	"data-nav": "ideas"
}, ag = ["data-idea-collection"], og = { class: "idea-badge" }, sg = {
	key: 0,
	class: "generator-story"
}, cg = {
	key: 1,
	class: "song-has-lyrics"
}, lg = { key: 0 }, ug = {
	key: 3,
	class: "generator-detail"
}, dg = { class: "actions" }, fg = [
	"data-action",
	"data-id",
	"data-i",
	"aria-label"
], pg = ["innerHTML"], mg = {
	key: 1,
	class: "empty"
}, hg = ["innerHTML"], gg = {
	__name: "IdeaCollections",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = Q();
		return (n, r) => (H(), U(V, null, [I(t).librarySummary.ready ? (H(), U("p", ng, " Последний просмотр библиотеки: " + k(I(t).librarySummary.totalIdeaCount) + " идей ", 1)) : K("", !0), (H(!0), U(V, null, B(e.model.groups, (t) => (H(), U(V, { key: t.kind }, [W("div", rg, [W("h2", null, k(t.title) + " (" + k(t.items.length) + ")", 1), t.kind === "generated" ? (H(), U("button", ig, "Создать идеи →")) : K("", !0)]), t.items.length ? (H(), U("div", {
			key: 0,
			class: "idea-grid",
			"data-idea-collection": t.kind
		}, [(H(!0), U(V, null, B(t.items, (n) => (H(), pa(Br(t.kind === "academy" ? "div" : "article"), {
			key: n.key,
			class: O(["idea", { "generated-card": t.kind === "generated" }])
		}, {
			default: Bn(() => [
				W("div", og, k(n.badge), 1),
				W("h3", null, k(n.title), 1),
				W("p", null, k(n.pitch), 1),
				t.kind === "generated" ? (H(), U("p", sg, k(n.storyLine), 1)) : K("", !0),
				t.kind === "manual" && n.lyrics ? (H(), U("p", cg, "🎼 Текст песни сохранён · " + k(n.sunoLyrics ? "теги для Suno готовы" : "без разметки"), 1)) : K("", !0),
				n.hook || t.kind === "generated" ? (H(), pa(Br(t.kind === "generated" ? "div" : "p"), {
					key: 2,
					class: "generator-hook"
				}, {
					default: Bn(() => [t.kind === "generated" ? (H(), U("span", lg, "ХУК ПРИПЕВА")) : K("", !0), W("strong", null, k(n.hook), 1)]),
					_: 2
				}, 1024)) : K("", !0),
				t.kind === "generated" && n.detail ? (H(), U("p", ug, "Твоя деталь: " + k(n.detail), 1)) : K("", !0),
				W("div", dg, [(H(!0), U(V, null, B(n.actions, (t) => (H(), U("button", {
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
				}, null, 8, pg)) : K("", !0), G(k(t.text), 1)], 10, fg))), 128))])
			]),
			_: 2
		}, 1032, ["class"]))), 128))], 8, ag)) : (H(), U("div", mg, [
			W("span", {
				"aria-hidden": "true",
				innerHTML: e.model.icons.music
			}, null, 8, hg),
			W("strong", null, k(t.emptyTitle), 1),
			G(k(t.emptyText), 1)
		]))], 64))), 128))], 64));
	}
};
// src/vue/poetry/legacyIdeaCollectionsBridge.js
function _g({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_IDEA_COLLECTIONS, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Z({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-idea-collections"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, gg, { model: n })
	});
}
// src/vue/version-history/version-model.js
function vg(e) {
	return /^\d{4}-\d{2}-\d{2}$/.test(String(e || "")) ? e.slice(8, 10) + "." + e.slice(5, 7) + "." + e.slice(0, 4) : "";
}
var yg = (e) => String(e ?? "").trim().normalize("NFKC").toLocaleLowerCase("ru"), bg = (e, t) => yg(e).includes(t);
function xg(e) {
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
function Sg(e, { tab: t = "major", size: n = "all", search: r = "" } = {}) {
	let i = Array.isArray(e) ? e : [], a = xg(i), o = yg(r);
	if (o) {
		let e = a.filter((e) => o === "v" + e.major || o === e.major || bg("мажорная версия " + e.major, o)), t = i.filter((e) => bg("v" + e[0] + " " + e[0] + " " + e[1] + " " + vg(e[2]), o));
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
var Cg = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, wg = {
	class: "sb-vh-vue-layout",
	"data-sb-vue-version-history": ""
}, Tg = { class: "sb-vh-header" }, Eg = [
	"aria-selected",
	"tabindex",
	"onClick"
], Dg = [
	"aria-selected",
	"tabindex",
	"onClick"
], Og = {
	id: "sb-vh-legend",
	class: "sb-vh-legend"
}, kg = { class: "sb-vh-controls" }, Ag = {
	class: "sb-vh-search-label",
	for: "sb-vue-vh-search"
}, jg = {
	id: "sb-vh-subcount",
	class: "sb-vh-count",
	role: "status"
}, Mg = {
	key: 0,
	class: "sb-vh-search-all"
}, Ng = {
	key: 0,
	class: "sb-vh-search-group"
}, Pg = { class: "sb-vh-release-no" }, Fg = { class: "sb-vh-release-text" }, Ig = { class: "sb-vh-version-range" }, Lg = { class: "sb-vh-release-list" }, Rg = { class: "sb-vh-release-no" }, zg = { class: "sb-vh-release-text" }, Bg = { class: "sb-vh-search-meta" }, Vg = ["datetime"], Hg = { class: "sb-vh-search-tag" }, Ug = {
	key: 1,
	class: "sb-vh-empty"
}, Wg = {
	key: 2,
	class: "sb-vh-release-list sb-vh-major-list"
}, Gg = { class: "sb-vh-release-no" }, Kg = { class: "sb-vh-release-text" }, qg = { class: "sb-vh-version-range" }, Jg = {
	key: 3,
	class: "sb-vh-release-list"
}, Yg = { class: "sb-vh-release-no" }, Xg = { class: "sb-vh-release-text" }, Zg = { class: "sb-vh-search-meta" }, Qg = ["datetime"], $g = {
	key: 0,
	class: "sb-vh-search-tag"
}, e_ = {
	key: 4,
	class: "sb-vh-empty"
}, t_ = /*#__PURE__*/ Cg({
	__name: "VersionHistory",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ P("major"), r = /* @__PURE__ */ P("all"), i = /* @__PURE__ */ P(""), a = q(() => Sg(t.model.releases, {
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
		return z(() => En(() => s.value?.focus({ preventScroll: !0 }))), (t, m) => (H(), U("div", wg, [
			W("header", Tg, [W("div", null, [
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
			}, k(e.label), 11, Eg)), 64))], 32),
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
			}, k(e.label), 11, Dg)), 64))], 32)) : K("", !0),
			W("p", Og, k(a.value.legend), 1),
			W("div", kg, [W("label", Ag, [m[8] ||= W("span", { class: "sb-vh-visually-hidden" }, "Поиск по истории версий", -1), L(W("input", {
				id: "sb-vue-vh-search",
				"onUpdate:modelValue": m[3] ||= (e) => i.value = e,
				type: "search",
				autocomplete: "off",
				placeholder: "Поиск по всем версиям и вкладкам…",
				onInput: l
			}, null, 544), [[J, i.value]])]), W("span", jg, k(a.value.count), 1)]),
			W("div", {
				id: "sb-vh-content",
				ref_key: "content",
				ref: o,
				class: "sb-vh-content",
				role: "tabpanel",
				"aria-labelledby": "sb-vh-tabs"
			}, [a.value.mode === "search" && (a.value.majors.length || a.value.large.length || a.value.small.length) ? (H(), U("div", Mg, [a.value.majors.length ? (H(), U("section", Ng, [W("h3", null, [m[9] ||= G("Мажорные версии ", -1), W("span", null, k(a.value.majors.length), 1)]), (H(!0), U(V, null, B(a.value.majors, (e) => (H(), U("article", {
				key: "major-" + e.major,
				class: "sb-vh-release sb-vh-major-release"
			}, [W("span", Pg, "v" + k(e.major), 1), W("div", Fg, [W("p", null, "Мажорная версия " + k(e.major), 1), W("p", Ig, " От v" + k(e.items[e.items.length - 1][0]) + " до v" + k(e.items[0][0]), 1)])]))), 128))])) : K("", !0), (H(!0), U(V, null, B([{
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
			}, [W("h3", null, [G(k(e.title) + " ", 1), W("span", null, k(e.entries.length), 1)]), W("div", Lg, [(H(!0), U(V, null, B(e.entries, (t) => (H(), U("article", {
				key: t[0],
				class: "sb-vh-release"
			}, [W("span", Rg, "v" + k(t[0]), 1), W("div", zg, [W("p", null, k(t[1]), 1), W("div", Bg, [W("time", { datetime: t[2] }, k(I(vg)(t[2])), 9, Vg), W("span", Hg, k(e.badge), 1)])])]))), 128))])])), [[uo, e.entries.length]])), 128))])) : a.value.mode === "search" ? (H(), U("p", Ug, " По запросу совпадений нет ни в одном разделе истории. ")) : a.value.mode === "major" ? (H(), U("div", Wg, [(H(!0), U(V, null, B(a.value.majors, (e) => (H(), U("article", {
				key: e.major,
				class: "sb-vh-release sb-vh-major-release"
			}, [W("span", Gg, "v" + k(e.major), 1), W("div", Kg, [
				W("h3", null, "Мажорная версия " + k(e.major), 1),
				W("p", null, "Ветка v" + k(e.major) + ".x — " + k(e.items.length) + " сохранённых минорных обновлений.", 1),
				W("p", qg, " От v" + k(e.items[e.items.length - 1][0]) + " (" + k(I(vg)(e.items[e.items.length - 1][2])) + ") до v" + k(e.items[0][0]) + " (" + k(I(vg)(e.items[0][2])) + ") ", 1),
				W("button", {
					type: "button",
					class: "sb-vh-view-minors",
					onClick: f
				}, "Просмотреть минорные версии")
			])]))), 128))])) : a.value.mode === "minor" && a.value.entries.length ? (H(), U("div", Jg, [(H(!0), U(V, null, B(a.value.entries, (e) => (H(), U("article", {
				key: e[0],
				class: "sb-vh-release"
			}, [W("span", Yg, "v" + k(e[0]), 1), W("div", Xg, [W("p", null, k(e[1]), 1), W("div", Zg, [W("time", { datetime: e[2] }, k(I(vg)(e[2])), 9, Qg), r.value === "all" ? (H(), U("span", $g, k(e[3] === "large" ? "Крупное" : "Мелкое"), 1)) : K("", !0)])])]))), 128))])) : (H(), U("p", e_, "По запросу минорные версии не найдены."))], 512)
		]));
	}
}, [["__scopeId", "data-v-ce1fc81b"]]);
// src/vue/version-history/legacyVersionHistoryBridge.js
function n_({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_VERSION_HISTORY;
	return !t?.snapshot || !document.body ? () => {} : Z({
		root: document.body,
		selectTarget: (e) => e.querySelector("#sb-vue-version-history"),
		readSnapshot: () => {
			let e = t.snapshot();
			return e && Array.isArray(e.releases) ? e : null;
		},
		mount: (n, r) => e(n, t_, { model: {
			...r,
			close: t.close
		} })
	});
}
// src/vue/home/HomeDashboard.vue
var r_ = ["data-sb-applied-theme"], i_ = { class: "dash-head" }, a_ = { class: "dash-actions" }, o_ = { class: "dash-metrics" }, s_ = { class: "dash-metric" }, c_ = { class: "dash-metric" }, l_ = { class: "dash-metric" }, u_ = { class: "dash-layout" }, d_ = { class: "dash-panel" }, f_ = { class: "dash-panel-head" }, p_ = { class: "dash-list" }, m_ = { class: "dash-entry-meta" }, h_ = ["data-kind", "data-id"], g_ = {
	key: 0,
	class: "dash-empty"
}, __ = { class: "dash-panel" }, v_ = { class: "dash-panel-head" }, y_ = { class: "dash-list" }, b_ = { class: "dash-entry-meta" }, x_ = { class: "dash-entry-actions" }, S_ = ["data-id"], C_ = ["data-id"], w_ = {
	key: 0,
	class: "dash-empty"
}, T_ = { class: "dash-panel dash-panel-events" }, E_ = { class: "dash-panel-head" }, D_ = { class: "dash-list" }, O_ = { class: "dash-event-date" }, k_ = { class: "dash-event-main" }, A_ = { class: "dash-entry-meta" }, j_ = { key: 0 }, M_ = ["data-id"], N_ = {
	key: 0,
	class: "dash-empty"
}, P_ = {
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
			W("div", i_, [
				r[9] ||= W("div", { class: "dash-eyebrow" }, "ЛИЧНАЯ МУЗЫКАЛЬНАЯ МАСТЕРСКАЯ", -1),
				r[10] ||= W("h1", null, [G("Твоя музыкальная "), W("span", null, "лаборатория.")], -1),
				W("p", null, k(e.model.profileName) + ", здесь твои последние идеи, промпты и музыкальные события — всё под рукой.", 1),
				W("div", a_, [
					W("button", {
						type: "button",
						class: "btn primary",
						"data-action": "nav",
						"data-nav": "myideas",
						onClick: r[0] ||= Y((t) => e.navigate("myideas"), ["stop"])
					}, "＋ Новая идея"),
					W("button", {
						type: "button",
						class: "btn ghost",
						"data-action": "nav",
						"data-nav": "myprompts",
						onClick: r[1] ||= Y((t) => e.navigate("myprompts"), ["stop"])
					}, "＋ Новый промпт"),
					W("button", {
						type: "button",
						class: "btn ghost",
						"data-action": "nav",
						"data-nav": "events",
						onClick: r[2] ||= Y((t) => e.navigate("events"), ["stop"])
					}, "＋ Событие")
				])
			]),
			W("div", o_, [
				W("div", s_, [W("b", null, k(I(t).dashboardStats.ideaCount), 1), r[11] ||= W("span", null, "Мои идеи", -1)]),
				W("div", c_, [W("b", null, k(I(t).dashboardStats.promptCount), 1), r[12] ||= W("span", null, "Мои промпты", -1)]),
				W("div", l_, [W("b", null, k(I(t).dashboardStats.eventCount), 1), r[13] ||= W("span", null, "Мои события", -1)])
			]),
			W("div", u_, [
				W("section", d_, [W("header", f_, [r[14] ||= W("div", null, [W("span", { class: "dash-kicker" }, "💡 ЛИЧНАЯ БИБЛИОТЕКА"), W("h2", null, "Мои последние идеи")], -1), W("button", {
					type: "button",
					class: "dash-view-all",
					"data-action": "nav",
					"data-nav": "myideas",
					onClick: r[3] ||= Y((t) => e.navigate("myideas"), ["stop"])
				}, "Все идеи →")]), W("div", p_, [(H(!0), U(V, null, B(e.model.ideas, (e) => (H(), U("article", {
					key: e.kind + ":" + e.key,
					class: "dash-entry"
				}, [
					W("div", m_, k(e.label), 1),
					W("h3", null, k(e.title), 1),
					W("p", null, k(String(e.pitch).slice(0, 180)), 1),
					W("button", {
						type: "button",
						class: "dash-entry-link",
						"data-action": "dash-open-idea",
						"data-kind": e.kind,
						"data-id": String(e.key)
					}, "Открыть идею →", 8, h_)
				]))), 128)), e.model.ideas.length ? K("", !0) : (H(), U("div", g_, [
					r[15] ||= W("span", null, "💡", -1),
					r[16] ||= W("strong", null, "Пока нет сохранённых идей", -1),
					r[17] ||= W("p", null, "Добавь идею в личном кабинете или сохрани сюжет из Idea Lab.", -1),
					W("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "nav",
						"data-nav": "myideas",
						onClick: r[4] ||= Y((t) => e.navigate("myideas"), ["stop"])
					}, "Добавить идею →")
				]))])]),
				W("section", __, [W("header", v_, [r[18] ||= W("div", null, [W("span", { class: "dash-kicker" }, "🎛️ SUNO STUDIO"), W("h2", null, "Мои последние промпты")], -1), W("button", {
					type: "button",
					class: "dash-view-all",
					"data-action": "nav",
					"data-nav": "myprompts",
					onClick: r[5] ||= Y((t) => e.navigate("myprompts"), ["stop"])
				}, "Все промпты →")]), W("div", y_, [(H(!0), U(V, null, B(e.model.prompts, (e) => (H(), U("article", {
					key: String(e.id),
					class: "dash-entry"
				}, [
					W("div", b_, k(e.genre || "Suno Studio") + k(e.date ? " · " + e.date : ""), 1),
					W("h3", null, k(e.title || (e.genre || "Промпт") + " · " + (e.mood || "студия")), 1),
					W("p", null, k(String(e.text || "").slice(0, 180)), 1),
					W("div", x_, [W("button", {
						type: "button",
						class: "dash-entry-link",
						"data-action": "dash-open-prompt",
						"data-id": String(e.id)
					}, "Открыть промпт →", 8, S_), W("button", {
						type: "button",
						class: "dash-copy",
						"data-action": "copy-saved",
						"data-id": String(e.id)
					}, "Копировать", 8, C_)])
				]))), 128)), e.model.prompts.length ? K("", !0) : (H(), U("div", w_, [
					r[19] ||= W("span", null, "🎛️", -1),
					r[20] ||= W("strong", null, "Пока нет сохранённых промптов", -1),
					r[21] ||= W("p", null, "Сохрани промпт в Suno Studio или создай собственный.", -1),
					W("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "nav",
						"data-nav": "myprompts",
						onClick: r[6] ||= Y((t) => e.navigate("myprompts"), ["stop"])
					}, "Добавить промпт →")
				]))])]),
				W("section", T_, [W("header", E_, [r[22] ||= W("div", null, [W("span", { class: "dash-kicker" }, "🗓️ ТВОРЧЕСКИЙ КАЛЕНДАРЬ"), W("h2", null, "Мои события")], -1), W("button", {
					type: "button",
					class: "dash-view-all",
					"data-action": "nav",
					"data-nav": "events",
					onClick: r[7] ||= Y((t) => e.navigate("events"), ["stop"])
				}, "Все события →")]), W("div", D_, [(H(!0), U(V, null, B(e.model.events, (e) => (H(), U("article", {
					key: String(e.id),
					class: "dash-entry dash-event"
				}, [
					W("div", O_, [W("strong", null, k(e.formattedDate), 1), W("span", null, k(e.time || "Весь день"), 1)]),
					W("div", k_, [
						W("div", A_, k(e.typeLabel) + k(e.past ? " · Прошедшее" : ""), 1),
						W("h3", null, k(e.title), 1),
						e.notes ? (H(), U("p", j_, k(String(e.notes).slice(0, 160)), 1)) : K("", !0)
					]),
					W("button", {
						type: "button",
						class: "dash-entry-link",
						"data-action": "dash-open-event",
						"data-id": String(e.id)
					}, "Подробнее →", 8, M_)
				]))), 128)), e.model.events.length ? K("", !0) : (H(), U("div", N_, [
					r[23] ||= W("span", null, "🗓️", -1),
					r[24] ||= W("strong", null, "Событий пока нет", -1),
					r[25] ||= W("p", null, "Добавь даты релизов, записи, встречи и другие планы своей музыкальной работы.", -1),
					W("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "nav",
						"data-nav": "events",
						onClick: r[8] ||= Y((t) => e.navigate("events"), ["stop"])
					}, "Добавить событие →")
				]))])])
			])
		], 8, r_));
	}
}, F_ = Object.freeze([
	"myideas",
	"myprompts",
	"events"
]);
function I_(e, { router: t, legacyApi: n, syncRoute: r = ch } = {}, i) {
	if (typeof e != "string" || !e || !n || typeof n.snapshot != "function") return !1;
	let a = i === "menu", o = n.snapshot()?.items, s = a ? Array.isArray(o) && o.some((t) => t?.id === e) : F_.includes(e), c = a ? n.navigate : n.navigateWorkspace;
	if (!s || typeof c != "function") return !1;
	if (globalThis.window?.SUNOBOOM_SHELL?.active) return r(e, {
		historyMode: "push",
		source: i
	}), window.SUNOBOOM_SHELL.navigate(e), !0;
	let l = !1;
	try {
		let n = vl(e);
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
function L_(e, t = {}) {
	return I_(e, t, "menu");
}
function R_(e, t = {}) {
	return I_(e, t, "shortcut");
}
// src/vue/home/legacyHomeDashboardBridge.js
function z_({ mountVueFeature: e, sharedUi: t }) {
	let n = window.SUNOBOOM_LEGACY_DASHBOARD, r = document.getElementById("app");
	return !n?.snapshot || !r ? () => {} : Z({
		root: r,
		selectTarget: (e) => e.querySelector("#sb-vue-dashboard"),
		readSnapshot: () => n.snapshot(),
		mount: (n, r) => (t.publishDashboardStats(r), e(n, P_, {
			model: r,
			navigate: (e) => R_(e, {
				router: gl,
				legacyApi: window.SUNOBOOM_LEGACY_NAV
			})
		}))
	});
}
// src/vue/account/PromptCollection.vue
var B_ = {
	key: 0,
	class: "sub",
	"data-sb-vue-prompt-library-recap": ""
}, V_ = { class: "section-title" }, H_ = {
	key: 1,
	class: "saved-list"
}, U_ = { class: "row" }, W_ = { class: "actions" }, G_ = ["data-id"], K_ = ["innerHTML"], q_ = ["data-id"], J_ = ["data-id", "aria-label"], Y_ = ["innerHTML"], X_ = { class: "sub" }, Z_ = {
	key: 2,
	class: "empty"
}, Q_ = ["innerHTML"], $_ = {
	__name: "PromptCollection",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = Q();
		return (n, r) => (H(), U(V, null, [
			I(t).librarySummary.ready ? (H(), U("p", B_, " Последний просмотр библиотеки: " + k(I(t).librarySummary.promptCount) + " промптов ", 1)) : K("", !0),
			W("div", V_, [W("h2", null, "Сохранённые промпты (" + k(e.model.items.length) + ")", 1)]),
			e.model.items.length ? (H(), U("div", H_, [(H(!0), U(V, null, B(e.model.items, (t) => (H(), U("article", {
				key: t.id,
				class: "saved-item"
			}, [
				W("div", U_, [W("h3", null, k(t.title), 1), W("div", W_, [
					W("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "copy-saved",
						"data-id": t.id
					}, [W("span", {
						"aria-hidden": "true",
						innerHTML: e.model.icons.copy
					}, null, 8, K_), r[0] ||= G(" Копировать", -1)], 8, G_),
					W("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "edit-manual-prompt",
						"data-id": t.id
					}, "Изменить", 8, q_),
					W("button", {
						type: "button",
						class: "btn danger small",
						"data-action": "delete-saved",
						"data-id": t.id,
						"aria-label": "Удалить промпт «" + t.title + "»"
					}, [W("span", {
						"aria-hidden": "true",
						innerHTML: e.model.icons.trash
					}, null, 8, Y_)], 8, J_)
				])]),
				W("p", null, k(t.text), 1),
				W("span", X_, k(t.genre) + " · " + k(t.date), 1)
			]))), 128))])) : (H(), U("div", Z_, [
				W("span", {
					"aria-hidden": "true",
					innerHTML: e.model.icons.music
				}, null, 8, Q_),
				r[1] ||= W("strong", null, "Промптов пока нет", -1),
				r[2] ||= G("Сохрани первый здесь или в Suno Studio.", -1)
			]))
		], 64));
	}
};
// src/vue/account/legacyPromptCollectionBridge.js
function ev({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PROMPT_LIST, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Z({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-prompts-list"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, $_, { model: n })
	});
}
// src/vue/account/PromptEditor.vue
var tv = {
	key: 0,
	class: "sub",
	"data-sb-vue-last-idea-draft": ""
}, nv = { class: "field" }, rv = { class: "field" }, iv = ["value"], av = { class: "field" }, ov = {
	id: "sb-prompt-char-count",
	class: "sub"
}, sv = {
	__name: "PromptEditor",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ j({ ...t.initial.values }), r = q(() => n.text.length), i = Q();
		return R(() => [
			n.title,
			n.genre,
			n.text,
			t.initial.editing
		], () => i.publishPromptDraftSummary(n, t.initial.editing), { immediate: !0 }), (t, a) => (H(), U(V, null, [
			W("h3", null, k(e.initial.editing ? "Редактирование промпта" : "Новый промпт для Suno"), 1),
			I(i).ideaDraftSummary.ready ? (H(), U("p", tv, "Последний открытый черновик идеи: " + k(I(i).ideaDraftSummary.ideaLength) + " / 3000 символов", 1)) : K("", !0),
			W("div", nv, [a[3] ||= W("label", { for: "custom-prompt-title" }, "Название", -1), L(W("input", {
				id: "custom-prompt-title",
				"onUpdate:modelValue": a[0] ||= (e) => n.title = e,
				maxlength: "100",
				placeholder: "Например, Романтичный афро-поп"
			}, null, 512), [[J, n.title]])]),
			W("div", rv, [a[4] ||= W("label", { for: "custom-prompt-genre" }, "Жанр", -1), L(W("select", {
				id: "custom-prompt-genre",
				"onUpdate:modelValue": a[1] ||= (e) => n.genre = e
			}, [(H(!0), U(V, null, B(e.initial.genres, (e) => (H(), U("option", {
				key: e.id,
				value: e.id
			}, k(e.name), 9, iv))), 128))], 512), [[Jo, n.genre]])]),
			W("div", av, [
				a[5] ||= W("label", { for: "custom-prompt-text" }, "Текст промпта (до 1000 символов)", -1),
				L(W("textarea", {
					id: "custom-prompt-text",
					"onUpdate:modelValue": a[2] ||= (e) => n.text = e,
					rows: "7",
					maxlength: "1000",
					"aria-describedby": "sb-prompt-char-count",
					placeholder: "Modern Russian-language afropop, 105 BPM, clean vocals, groovy bass..."
				}, null, 512), [[J, n.text]]),
				W("span", ov, k(r.value) + " / 1000 символов", 1)
			])
		], 64));
	}
};
// src/vue/account/legacyPromptEditorBridge.js
function cv({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PROMPT_EDITOR, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Z({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-prompt-form"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, sv, { initial: n })
	});
}
// src/vue/account/LibraryCollection.vue
var lv = { class: "account-back" }, uv = {
	type: "button",
	class: "btn ghost small",
	"data-action": "workspace-back"
}, dv = {
	key: 0,
	class: "sb-dna-summary",
	"data-sb-vue-library-summary": ""
}, fv = { class: "section-title" }, pv = {
	key: 1,
	class: "genre-grid"
}, mv = ["data-id"], hv = { class: "genre-content" }, gv = { class: "kicker" }, _v = { class: "foot" }, vv = {
	key: 2,
	class: "empty"
}, yv = { class: "section-title" }, bv = {
	key: 3,
	class: "idea-grid"
}, xv = { class: "idea-badge" }, Sv = { class: "actions" }, Cv = ["data-id", "data-i"], wv = ["data-id", "data-i"], Tv = {
	key: 4,
	class: "empty"
}, Ev = { class: "section-title" }, Dv = {
	key: 5,
	class: "idea-grid"
}, Ov = { class: "idea-badge" }, kv = ["data-id"], Av = {
	key: 6,
	class: "empty"
}, jv = { class: "section-title" }, Mv = {
	key: 7,
	class: "idea-grid"
}, Nv = { class: "idea-badge" }, Pv = { class: "generator-story" }, Fv = { class: "generator-hook" }, Iv = {
	key: 0,
	class: "generator-detail"
}, Lv = { class: "actions" }, Rv = ["data-id"], zv = ["data-id"], Bv = ["data-id", "aria-label"], Vv = {
	key: 8,
	class: "empty"
}, Hv = { class: "section-title" }, Uv = {
	key: 9,
	class: "saved-list"
}, Wv = { class: "row" }, Gv = { class: "actions" }, Kv = ["data-id"], qv = ["data-id", "aria-label"], Jv = { class: "sub" }, Yv = {
	key: 10,
	class: "empty"
}, Xv = {
	__name: "LibraryCollection",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = Q();
		return R(() => t.model, (e) => n.publishLibrarySummary(e), { immediate: !0 }), (t, r) => (H(), U(V, null, [
			W("div", lv, [W("button", uv, k(e.model.backLabel), 1)]),
			r[14] ||= W("header", { class: "heading" }, [W("h1", null, "Моя библиотека"), W("p", null, "Любимые жанры, идеи и промпты. Сохраняются локально в этом браузере.")], -1),
			I(n).librarySummary.ready ? (H(), U("div", dv, [
				W("div", null, [W("b", null, k(I(n).librarySummary.genreCount), 1), r[0] ||= W("span", null, "Избранных жанров", -1)]),
				W("div", null, [W("b", null, k(I(n).librarySummary.totalIdeaCount), 1), r[1] ||= W("span", null, "Идей в библиотеке", -1)]),
				W("div", null, [W("b", null, k(I(n).librarySummary.promptCount), 1), r[2] ||= W("span", null, "Сохранённых промптов", -1)])
			])) : K("", !0),
			W("div", fv, [W("h2", null, "Избранные жанры (" + k(e.model.genres.length) + ")", 1)]),
			e.model.genres.length ? (H(), U("div", pv, [(H(!0), U(V, null, B(e.model.genres, (e) => (H(), U("button", {
				key: e.id,
				type: "button",
				class: "genre-card",
				style: D({ "--accent": e.color }),
				"data-action": "genre",
				"data-id": e.id
			}, [r[4] ||= W("div", { class: "art" }, null, -1), W("div", hv, [W("div", null, [
				W("div", gv, k(e.family) + " · " + k(e.bpm[0]) + "–" + k(e.bpm[1]) + " BPM", 1),
				W("h3", null, k(e.name), 1),
				W("p", null, k(e.tagline), 1)
			]), W("div", _v, [W("span", null, k(e.era), 1), r[3] ||= W("span", { style: { color: "#ffacd9" } }, "Открыть →", -1)])])], 12, mv))), 128))])) : (H(), U("div", vv, [...r[5] ||= [W("strong", null, "Пока нет избранных жанров", -1), G("Добавляй их в карточках Академии.", -1)]])),
			W("div", yv, [W("h2", null, "Сохранённые идеи (" + k(e.model.ideas.length) + ")", 1)]),
			e.model.ideas.length ? (H(), U("div", bv, [(H(!0), U(V, null, B(e.model.ideas, (e) => (H(), U("article", {
				key: e.key,
				class: "idea"
			}, [
				W("div", xv, k(e.genre) + " · " + k(e.mood), 1),
				W("h3", null, k(e.title), 1),
				W("p", null, k(e.pitch), 1),
				W("div", Sv, [W("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "idea-use",
					"data-id": e.genreId,
					"data-i": e.index
				}, "В студию", 8, Cv), W("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "idea-save",
					"data-id": e.genreId,
					"data-i": e.index
				}, "Сохранено", 8, wv)])
			]))), 128))])) : (H(), U("div", Tv, [...r[6] ||= [W("strong", null, "Нет сохранённых идей", -1), G("Найди интересный сюжет и нажми «Сохранить».", -1)]])),
			W("div", Ev, [W("h2", null, "Мои собственные идеи (" + k(e.model.own.length) + ")", 1), r[7] ||= W("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "nav",
				"data-nav": "myideas"
			}, "Добавить или изменить →", -1)]),
			e.model.own.length ? (H(), U("div", Dv, [(H(!0), U(V, null, B(e.model.own, (e) => (H(), U("article", {
				key: e.id,
				class: "idea"
			}, [
				W("div", Ov, k(e.genre), 1),
				W("h3", null, k(e.title), 1),
				W("p", null, k(e.pitch), 1),
				W("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "edit-manual-idea",
					"data-id": e.id
				}, "Открыть запись →", 8, kv)
			]))), 128))])) : (H(), U("div", Av, [...r[8] ||= [W("strong", null, "Пока нет своих идей", -1), G("Добавь их в личном кабинете.", -1)]])),
			W("div", jv, [W("h2", null, "Идеи из генератора (" + k(e.model.generated.length) + ")", 1), r[9] ||= W("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "nav",
				"data-nav": "ideas"
			}, "＋ Создать ещё", -1)]),
			e.model.generated.length ? (H(), U("div", Mv, [(H(!0), U(V, null, B(e.model.generated, (e) => (H(), U("article", {
				key: e.id,
				class: "idea generated-card"
			}, [
				W("div", Nv, k(e.genre) + " · " + k(e.topic), 1),
				W("h3", null, k(e.title), 1),
				W("p", null, k(e.pitch), 1),
				W("p", Pv, k(e.storyLine), 1),
				W("div", Fv, [r[10] ||= W("span", null, "ХУК ПРИПЕВА", -1), W("strong", null, k(e.hook), 1)]),
				e.detail ? (H(), U("p", Iv, "Твоя деталь: " + k(e.detail), 1)) : K("", !0),
				W("div", Lv, [
					W("button", {
						type: "button",
						class: "btn primary small",
						"data-action": "generated-use",
						"data-id": e.id
					}, "В Suno Studio", 8, Rv),
					W("button", {
						type: "button",
						class: "btn ghost small",
						"data-action": "generated-copy",
						"data-id": e.id
					}, "Копировать", 8, zv),
					W("button", {
						type: "button",
						class: "btn danger small",
						"data-action": "generated-delete",
						"data-id": e.id,
						"aria-label": "Удалить идею «" + e.title + "»"
					}, "Удалить", 8, Bv)
				])
			]))), 128))])) : (H(), U("div", Vv, [...r[11] ||= [W("strong", null, "Сохранённых новых идей нет", -1), G("Создай идеи в генераторе и нажми «Сохранить».", -1)]])),
			W("div", Hv, [W("h2", null, "Мои промпты (" + k(e.model.prompts.length) + ")", 1), r[12] ||= W("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "nav",
				"data-nav": "myprompts"
			}, "Добавить или изменить →", -1)]),
			e.model.prompts.length ? (H(), U("div", Uv, [(H(!0), U(V, null, B(e.model.prompts, (e) => (H(), U("article", {
				key: e.id,
				class: "saved-item"
			}, [
				W("div", Wv, [W("h3", null, k(e.title), 1), W("div", Gv, [W("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "copy-saved",
					"data-id": e.id
				}, "Копировать", 8, Kv), W("button", {
					type: "button",
					class: "btn danger small",
					"data-action": "delete-saved",
					"data-id": e.id,
					"aria-label": "Удалить промпт «" + e.title + "»"
				}, "Удалить", 8, qv)])]),
				W("p", null, k(e.text), 1),
				W("span", Jv, k(e.date), 1)
			]))), 128))])) : (H(), U("div", Yv, [...r[13] ||= [W("strong", null, "Промптов пока нет", -1), G("Создай первый в Suno Studio и сохрани в библиотеке.", -1)]]))
		], 64));
	}
};
// src/vue/account/legacyLibraryBridge.js
function Zv({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_LIBRARY, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Z({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-library-collection"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, Xv, { model: n })
	});
}
// src/vue/account/SongCards.vue
var Qv = {
	key: 0,
	class: "sbsong-artist-hint",
	"data-sb-vue-song-collection-recap": ""
}, $v = {
	key: 1,
	class: "sbsong-grid"
}, ey = ["data-id", "aria-label"], ty = ["data-sbsong-cover"], ny = ["src"], ry = { class: "sbsong-card-text" }, iy = { class: "sbsong-card-flags" }, ay = { class: "sbsong-card-actions" }, oy = ["data-id"], sy = ["data-id"], cy = ["data-id"], ly = {
	key: 2,
	class: "sbsong-empty"
}, uy = {
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
		}), Mr(() => window.removeEventListener("sunoboom:songs-search", i)), (e, t) => (H(), U(V, null, [I(r).songCollectionSummary.ready ? (H(), U("p", Qv, " Найдено " + k(I(r).songCollectionSummary.visibleCount) + " из " + k(I(r).songCollectionSummary.totalCount) + " песен ", 1)) : K("", !0), n.value.items.length ? (H(), U("div", $v, [(H(!0), U(V, null, B(n.value.items, (e) => (H(), U("article", {
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
		}, null, 8, ty)) : e.coverUrl ? (H(), U("img", {
			key: 1,
			alt: "",
			src: e.coverUrl,
			style: { display: "block" },
			loading: "lazy"
		}, null, 8, ny)) : K("", !0), t[0] ||= W("span", {
			class: "sbsong-no-cover",
			"aria-hidden": "true"
		}, "♫", -1)], 8, ey), W("div", ry, [
			W("small", null, k(e.genre), 1),
			W("h3", null, k(e.title), 1),
			W("p", null, k(e.artist), 1),
			W("div", iy, [W("span", null, k(e.status), 1)]),
			W("div", ay, [
				W("button", {
					type: "button",
					"data-sbsong-action": "open",
					"data-id": e.id
				}, "Открыть", 8, oy),
				W("button", {
					type: "button",
					"data-sbsong-action": "edit",
					"data-id": e.id
				}, "Изменить", 8, sy),
				W("button", {
					type: "button",
					"data-sbsong-action": "share",
					"data-id": e.id
				}, "Поделиться", 8, cy)
			])
		])]))), 128))])) : (H(), U("div", ly, k(n.value.total ? "По этому запросу песен нет." : "Песен пока нет. Добавь первую карточку и загрузи аудиофайл."), 1))], 64));
	}
};
// src/vue/account/legacySongCardsBridge.js
function dy({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SONG_CARDS, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Z({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-song-cards"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, uy, { api: t })
	});
}
// src/vue/account/SongVersions.vue
var fy = {
	class: "sbsong-versions",
	"data-sb-vue-song-versions": "",
	"aria-label": "Версии записи"
}, py = { class: "sbsong-version-heading" }, my = { key: 0 }, hy = { class: "sbsong-version-row-head" }, gy = {
	key: 0,
	class: "sbsong-version-main-badge"
}, _y = {
	key: 1,
	class: "sbsong-version-play-badge"
}, vy = { class: "sbsong-version-actions" }, yy = ["data-version-id"], by = ["data-version-id"], xy = ["data-id", "data-version-id"], Sy = ["data-version-id"], Cy = { class: "sbsong-version-notes" }, wy = ["data-sbsong-version-title", "value"], Ty = ["data-sbsong-version-note", "value"], Ey = ["data-version-id"], Dy = { key: 0 }, Oy = {
	type: "button",
	class: "sbsong-compare-toggle",
	"data-sbsong-action": "compare-toggle"
}, ky = {
	key: 0,
	class: "sbsong-compare-grid"
}, Ay = ["value"], jy = ["value"], My = ["value"], Ny = ["value"], Py = {
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
		return (t, n) => (H(), U("section", fy, [
			W("div", py, [W("h3", null, "Версии записи (" + k(e.versions.length) + ")", 1), e.playingLabel ? (H(), U("small", my, "В основном плеере: " + k(e.playingLabel), 1)) : K("", !0)]),
			(H(!0), U(V, null, B(e.versions, (t) => (H(), U("article", {
				key: t.id,
				class: "sbsong-version-row"
			}, [
				W("div", hy, [W("div", null, [
					W("strong", null, k(t.label), 1),
					t.isMain ? (H(), U("span", gy, "★ Основная")) : K("", !0),
					t.isPlaying ? (H(), U("span", _y, "♫ Выбрана")) : K("", !0),
					W("small", null, k(t.fileName) + " · " + k(t.sizeLabel) + " · " + k(t.addedDate), 1)
				])]),
				W("div", vy, [
					W("button", {
						type: "button",
						"data-sbsong-action": "version-play",
						"data-version-id": t.id
					}, "Выбрать для плеера", 8, yy),
					t.isMain ? K("", !0) : (H(), U("button", {
						key: 0,
						type: "button",
						"data-sbsong-action": "version-main",
						"data-version-id": t.id
					}, "★ Сделать основной", 8, by)),
					W("button", {
						type: "button",
						"data-sbsong-action": "share-file",
						"data-id": e.songId,
						"data-version-id": t.id
					}, "Сохранить / отправить", 8, xy),
					W("button", {
						type: "button",
						class: "sbsong-version-danger",
						"data-sbsong-action": "version-remove",
						"data-version-id": t.id
					}, "Удалить дубль", 8, Sy)
				]),
				W("details", Cy, [
					n[2] ||= W("summary", null, "Название и заметки", -1),
					W("label", null, [n[0] ||= G("Название версии ", -1), W("input", {
						type: "text",
						maxlength: "90",
						"data-sbsong-version-title": t.id,
						value: t.label
					}, null, 8, wy)]),
					W("label", null, [n[1] ||= G("Чем отличается этот дубль ", -1), W("textarea", {
						maxlength: "800",
						rows: "2",
						"data-sbsong-version-note": t.id,
						value: t.notes,
						placeholder: "Например: более плотный припев, удачный вокал..."
					}, null, 8, Ty)]),
					W("button", {
						type: "button",
						"data-sbsong-action": "version-save",
						"data-version-id": t.id
					}, "Сохранить заметки", 8, Ey)
				])
			]))), 128)),
			e.versions.length ? K("", !0) : (H(), U("p", Dy, "Пока нет локальных версий. Загрузи первую запись в MP3, M4A или WAV.")),
			e.versions.length > 1 ? (H(), U(V, { key: 1 }, [W("button", Oy, k(e.compareOpen ? "Скрыть сравнение A/B" : "Сравнить версии A/B"), 1), e.compareOpen ? (H(), U("div", ky, [
				W("label", null, [
					n[3] ||= G("Версия A ", -1),
					W("select", {
						id: "sbsong-compare-a",
						value: e.compareAId
					}, [(H(!0), U(V, null, B(e.versions, (e) => (H(), U("option", {
						key: e.id,
						value: e.id
					}, k(e.label), 9, jy))), 128))], 8, Ay),
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
					}, k(e.label), 9, Ny))), 128))], 8, My),
					n[6] ||= W("audio", {
						id: "sbsong-ab-b",
						controls: "",
						preload: "metadata"
					}, null, -1)
				]),
				n[7] ||= W("p", null, "Два независимых плеера для сравнения дублей. Воспроизведение запускается вручную.", -1)
			])) : K("", !0)], 64)) : K("", !0),
			n[8] ||= Sa("<div class=\"sbsong-version-add\"><h4>+ Добавить новую версию</h4><label>Аудиофайл (MP3, M4A, WAV и другие) <input id=\"sbsong-version-file\" type=\"file\" accept=\"audio/*,.mp3,.m4a,.wav,.wave,.flac,.ogg,.opus,.aac\"></label><label>Название дубля <input id=\"sbsong-new-version-title\" maxlength=\"90\" type=\"text\" placeholder=\"Например: Версия с новым припевом\"></label><label>Заметка <textarea id=\"sbsong-new-version-notes\" maxlength=\"800\" rows=\"2\" placeholder=\"Что изменилось в этой записи?\"></textarea></label><button type=\"button\" class=\"sbsong-main-btn\" data-sbsong-action=\"version-add\" id=\"sbsong-version-submit\">Сохранить новую версию</button><p>WAV — до 500 МБ, другие форматы — до 150 МБ. Каждая версия хранится отдельно в браузере этого устройства. Старые записи не перезаписываются.</p></div>", 1)
		]));
	}
}, Fy = { class: "sbsong-detail" }, Iy = { class: "sbsong-subhead" }, Ly = {
	key: 0,
	class: "sbsong-artist-hint",
	"data-sb-vue-song-detail-recap": ""
}, Ry = { class: "sbsong-detail-layout" }, zy = { class: "sbsong-detail-cover" }, By = ["data-sbsong-cover", "alt"], Vy = ["src", "alt"], Hy = {
	key: 2,
	class: "sbsong-no-cover",
	"aria-hidden": "true"
}, Uy = { class: "sbsong-detail-artist" }, Wy = { class: "sbsong-detail-tags" }, Gy = { key: 0 }, Ky = { key: 1 }, qy = {
	key: 0,
	class: "sbsong-detail-description"
}, Jy = {
	class: "sbsong-audio-box",
	id: "sbsong-audio-box"
}, Yy = {
	key: 0,
	controls: "",
	preload: "metadata",
	id: "sbsong-audio-player"
}, Xy = { key: 1 }, Zy = { class: "sbsong-detail-actions" }, Qy = ["data-id"], $y = ["data-id"], eb = ["href"], tb = ["data-id"], nb = ["data-id"], rb = ["data-id"], ib = {
	key: 1,
	class: "sbsong-delete-confirm"
}, ab = ["data-id"], ob = {
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
		}), (t, r) => (H(), U("section", Fy, [
			W("div", Iy, [W("h2", null, k(e.model.title), 1), r[0] ||= W("button", {
				type: "button",
				"data-sbsong-action": "close-detail"
			}, "Закрыть ×", -1)]),
			I(n).songCollectionSummary.ready ? (H(), U("p", Ly, " В личной коллекции: " + k(I(n).songCollectionSummary.totalCount) + " песен ", 1)) : K("", !0),
			W("div", Ry, [W("div", zy, [e.model.hasCover ? (H(), U("img", {
				key: 0,
				"data-sbsong-cover": e.model.id,
				alt: "Обложка песни " + e.model.title
			}, null, 8, By)) : e.model.coverUrl ? (H(), U("img", {
				key: 1,
				src: e.model.coverUrl,
				alt: "Обложка песни " + e.model.title,
				style: { display: "block" }
			}, null, 8, Vy)) : (H(), U("span", Hy, "♫"))]), W("div", null, [
				W("p", Uy, k(e.model.artist), 1),
				W("p", Wy, [e.model.genre ? (H(), U("span", Gy, k(e.model.genre), 1)) : K("", !0), e.model.album ? (H(), U("span", Ky, k(e.model.album), 1)) : K("", !0)]),
				e.model.description ? (H(), U("p", qy, k(e.model.description), 1)) : K("", !0),
				W("div", Jy, [e.model.hasPlayableAudio ? (H(), U("audio", Yy)) : (H(), U("p", Xy, "Аудио ещё не добавлено. Добавь первую версию в этой карточке."))]),
				va(Py, {
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
				W("div", Zy, [
					W("button", {
						type: "button",
						class: "sbsong-main-btn",
						"data-sbsong-action": "share",
						"data-id": e.model.id
					}, "🔗 Поделиться ссылкой", 8, Qy),
					e.model.hasAudio ? (H(), U("button", {
						key: 0,
						type: "button",
						"data-sbsong-action": "share-file",
						"data-id": e.model.id
					}, "Отправить аудиофайл", 8, $y)) : K("", !0),
					e.model.listenUrl ? (H(), U("a", {
						key: 1,
						href: e.model.listenUrl,
						target: "_blank",
						rel: "noopener noreferrer"
					}, "Открыть публичную запись ↗", 8, eb)) : K("", !0),
					W("button", {
						type: "button",
						"data-sbsong-action": "producer",
						"data-id": e.model.id
					}, "🎛 Мастер", 8, tb),
					W("button", {
						type: "button",
						"data-sbsong-action": "edit",
						"data-id": e.model.id
					}, "Изменить", 8, nb),
					W("button", {
						type: "button",
						class: "sbsong-danger",
						"data-sbsong-action": "delete",
						"data-id": e.model.id
					}, "Удалить", 8, rb)
				]),
				e.model.confirmDelete ? (H(), U("div", ib, [
					r[1] ||= W("strong", null, "Удалить карточку вместе с локальными файлами?", -1),
					W("button", {
						type: "button",
						"data-sbsong-action": "delete-confirm",
						"data-id": e.model.id
					}, "Да, удалить", 8, ab),
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
function sb({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SONG_DETAIL, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Z({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-song-detail"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, ob, {
			api: t,
			model: r
		})
	});
}
// src/vue/account/SongEditor.vue
var cb = {
	id: "sbsong-form",
	class: "sbsong-form-panel"
}, lb = { class: "sbsong-subhead" }, ub = {
	id: "sbsong-save-form",
	class: "sbsong-form"
}, db = { class: "sbsong-form-columns" }, fb = { class: "sbsong-field" }, pb = { class: "sbsong-artist-field" }, mb = {
	class: "sbsong-field",
	for: "sbsong-artist-input"
}, hb = ["aria-expanded"], gb = {
	id: "sbsong-artist-options",
	class: "sbsong-artist-options",
	role: "listbox",
	"aria-label": "Список артистов"
}, _b = ["onClick"], vb = {
	key: 0,
	class: "sbsong-artist-hint"
}, yb = {
	key: 1,
	class: "sbsong-artist-hint"
}, bb = { class: "sbsong-genre-field" }, xb = {
	class: "sbsong-field",
	for: "sbsong-genre-input"
}, Sb = ["aria-expanded"], Cb = ["aria-expanded"], wb = {
	id: "sbsong-genre-options",
	class: "sbsong-genre-options",
	role: "region",
	"aria-label": "Выбор жанра из Академии"
}, Tb = { class: "sbsong-genre-picker-head" }, Eb = ["value"], Db = {
	id: "sbsong-genre-results",
	class: "sbsong-genre-results",
	role: "listbox",
	"aria-label": "Жанры и поджанры"
}, Ob = ["aria-label"], kb = { class: "sbsong-genre-group-title" }, Ab = ["onClick"], jb = {
	key: 0,
	class: "sbsong-genre-hint"
}, Mb = { class: "sbsong-field" }, Nb = { class: "sbsong-field" }, Pb = { class: "sbsong-form-columns" }, Fb = { class: "sbsong-field" }, Ib = {
	class: "sbsong-cover-auto",
	"aria-live": "polite"
}, Lb = { id: "sbsong-cover-status" }, Rb = { class: "sbsong-form-columns" }, zb = { class: "sbsong-field" }, Bb = { class: "sbsong-field" }, Vb = { class: "sbsong-field" }, Hb = {
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
		return z(() => {
			document.addEventListener("pointerdown", x), En(() => t.api.hydrateCover());
		}), Mr(() => document.removeEventListener("pointerdown", x)), (t, d) => (H(), U("section", cb, [W("div", lb, [W("h2", null, k(e.model.editId ? "Изменить песню" : "Новая песня"), 1), d[16] ||= W("button", {
			type: "button",
			"data-sbsong-action": "cancel"
		}, "Закрыть ×", -1)]), W("form", ub, [
			W("div", db, [
				W("label", fb, [d[17] ||= W("span", null, "Название *", -1), L(W("input", {
					"onUpdate:modelValue": d[0] ||= (e) => n.title = e,
					type: "text",
					name: "title",
					maxlength: "120",
					placeholder: "Название песни"
				}, null, 512), [[J, n.title]])]),
				W("div", pb, [
					W("label", mb, [d[18] ||= W("span", null, "Исполнитель / проект", -1), L(W("input", {
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
						onKeydown: d[4] ||= ns(Y((e) => r.value = !1, ["prevent"]), ["esc"])
					}, null, 40, hb), [[J, n.artist]])]),
					W("div", { class: "sbsong-artist-shortcuts" }, [W("button", {
						type: "button",
						onClick: y
					}, "▾ Выбрать из списка"), W("button", {
						type: "button",
						onClick: g
					}, "+ Сохранить артиста")]),
					L(W("div", gb, [
						(H(!0), U(V, null, B(f.value, (e) => (H(), U("button", {
							key: e.name,
							type: "button",
							role: "option",
							class: "sbsong-artist-option",
							onClick: (t) => _(e.name)
						}, [W("strong", null, k(e.name), 1), W("small", null, k(e.origin), 1)], 8, _b))), 128)),
						p.value ? (H(), U("p", vb, "Уточни поиск, чтобы увидеть остальные варианты.")) : K("", !0),
						f.value.length ? K("", !0) : (H(), U("p", yb, k(a.value.length ? "Совпадений нет. Нового артиста можно сохранить кнопкой выше." : "Список пуст. Введи имя и сохрани первого артиста."), 1))
					], 512), [[uo, r.value]])
				]),
				W("div", bb, [
					W("label", xb, [d[19] ||= W("span", null, "Жанр", -1), L(W("input", {
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
						onKeydown: d[8] ||= ns(Y((e) => o.value = !1, ["prevent"]), ["esc"])
					}, null, 40, Sb), [[J, n.genre]])]),
					W("button", {
						type: "button",
						class: "sbsong-genre-toggle",
						"aria-controls": "sbsong-genre-options",
						"aria-expanded": String(o.value),
						onClick: b
					}, "▾ Выбрать из Академии", 8, Cb),
					L(W("div", wb, [W("div", Tb, [
						d[21] ||= W("label", { for: "sbsong-genre-family" }, "Направление", -1),
						L(W("select", {
							id: "sbsong-genre-family",
							"onUpdate:modelValue": d[9] ||= (e) => c.value = e,
							"aria-label": "Фильтр по направлению",
							onChange: d[10] ||= (e) => s.value = !0
						}, [d[20] ||= W("option", { value: "Все" }, "Все направления", -1), (H(!0), U(V, null, B(u.value, (e) => (H(), U("option", {
							key: e,
							value: e
						}, k(e), 9, Eb))), 128))], 544), [[Jo, c.value]]),
						W("small", null, k(m.value.length) + " из " + k(l.value.length), 1)
					]), W("div", Db, [(H(!0), U(V, null, B(h.value, (e) => (H(), U("div", {
						key: e.name,
						class: "sbsong-genre-group",
						role: "group",
						"aria-label": e.name
					}, [W("div", kb, [G(k(e.name) + " ", 1), W("span", null, k(e.genres.length), 1)]), (H(!0), U(V, null, B(e.genres, (e) => (H(), U("button", {
						key: e.id,
						type: "button",
						class: "sbsong-genre-option",
						role: "option",
						onClick: (t) => v(e.name)
					}, [W("span", null, k(e.name), 1)], 8, Ab))), 128))], 8, Ob))), 128)), m.value.length ? K("", !0) : (H(), U("p", jb, k(l.value.length ? "Не найдено. Можно ввести свой жанр вручную." : "Каталог Академии пока недоступен. Введи жанр вручную."), 1))])], 512), [[uo, o.value]])
				]),
				W("label", Mb, [d[22] ||= W("span", null, "Альбом / релиз", -1), L(W("input", {
					"onUpdate:modelValue": d[11] ||= (e) => n.album = e,
					type: "text",
					name: "album",
					maxlength: "120",
					placeholder: "Название альбома"
				}, null, 512), [[J, n.album]])])
			]),
			W("label", Nb, [d[23] ||= W("span", null, "Описание", -1), L(W("textarea", {
				"onUpdate:modelValue": d[12] ||= (e) => n.description = e,
				name: "description",
				maxlength: "700",
				rows: "3",
				placeholder: "История, настроение или заметки"
			}, null, 512), [[J, n.description]])]),
			W("div", Pb, [W("label", Fb, [W("span", null, k(e.model.hasAudio ? "Добавить новую аудиоверсию" : "Загрузить аудиофайл (MP3, M4A, WAV и другие)"), 1), d[24] ||= W("input", {
				name: "audio",
				type: "file",
				accept: "audio/*,.mp3,.wav,.wave,.m4a,.aac,.flac,.ogg,.opus"
			}, null, -1)]), d[25] ||= W("label", { class: "sbsong-field" }, [W("span", null, "Обложка вручную (необязательно)"), W("input", {
				name: "cover",
				type: "file",
				accept: "image/png,image/jpeg,image/webp,image/gif"
			})], -1)]),
			W("div", Ib, [d[28] ||= W("div", { class: "sbsong-cover-preview-figure" }, [W("img", {
				id: "sbsong-cover-preview-img",
				alt: "Предпросмотр обложки",
				hidden: ""
			}), W("span", {
				id: "sbsong-cover-preview-placeholder",
				"aria-hidden": "true"
			}, "♫")], -1), W("div", null, [
				d[26] ||= W("strong", null, "Обложка из аудиофайла", -1),
				W("p", Lb, k(e.model.hasCover ? "Загружаю сохранённую обложку…" : "Выбери MP3, M4A или FLAC — попробую найти обложку автоматически"), 1),
				d[27] ||= W("small", null, "Ручная обложка имеет приоритет, если ты её выберешь.", -1)
			])]),
			W("div", Rb, [
				W("label", zb, [d[29] ||= W("span", null, "Прямая ссылка на MP3 (если есть)", -1), L(W("input", {
					"onUpdate:modelValue": d[13] ||= (e) => n.audioUrl = e,
					type: "text",
					name: "audioUrl",
					maxlength: "700",
					placeholder: "https://.../song.mp3"
				}, null, 512), [[J, n.audioUrl]])]),
				W("label", Bb, [d[30] ||= W("span", null, "Публичная страница песни", -1), L(W("input", {
					"onUpdate:modelValue": d[14] ||= (e) => n.listenUrl = e,
					type: "text",
					name: "listenUrl",
					maxlength: "700",
					placeholder: "https://suno.com/..."
				}, null, 512), [[J, n.listenUrl]])]),
				W("label", Vb, [d[31] ||= W("span", null, "Публичная обложка (по желанию)", -1), L(W("input", {
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
function Ub({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SONG_EDITOR, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Z({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-song-editor"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, Hb, {
			api: t,
			model: r
		})
	});
}
// src/vue/account/ArtistManager.vue
var Wb = {
	id: "sbsong-artist-manager",
	class: "sbsong-artist-manager",
	"data-sb-vue-artist-manager": ""
}, Gb = {
	key: 0,
	class: "sbsong-artist-hint"
}, Kb = {
	key: 1,
	class: "sbsong-artist-hint",
	"data-sb-vue-dna-recap": ""
}, qb = { id: "sbsong-artist-manager-results" }, Jb = ["data-id", "aria-label"], Yb = {
	key: 0,
	class: "sbsong-artist-hint"
}, Xb = {
	__name: "ArtistManager",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ P(t.model.filter || ""), r = (e) => String(e || "").normalize("NFKC").toLocaleLowerCase("ru"), i = q(() => t.model.artists.filter((e) => r(e.name).includes(r(n.value)))), a = Q();
		return R(() => [t.model, i.value.length], ([e, t]) => a.publishArtistManagerSummary(e, t), { immediate: !0 }), (t, r) => (H(), U("section", Wb, [
			r[1] ||= W("div", { class: "sbsong-subhead" }, [W("h2", null, "Мои артисты"), W("button", {
				type: "button",
				"data-sbsong-action": "artists-manage"
			}, "Закрыть ×")], -1),
			r[2] ||= W("p", null, "Создавай свой список исполнителей и музыкальных проектов. Артисты из «ДНК артиста» и сохранённых песен также доступны при выборе. Удаление из списка не меняет существующие песни.", -1),
			e.model.dnaCount ? (H(), U("p", Gb, " Профилей ДНК артиста доступно для выбора: " + k(e.model.dnaCount) + ". Они не удаляются при изменении этого списка. ", 1)) : K("", !0),
			I(a).artistDnaSummary.ready ? (H(), U("p", Kb, " Последний просмотр ДНК артиста: " + k(I(a).artistDnaSummary.profileCount) + " профилей ", 1)) : K("", !0),
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
			W("div", qb, [(H(!0), U(V, null, B(i.value, (e) => (H(), U("div", {
				key: e.id,
				class: "sbsong-artist-entry"
			}, [W("span", null, k(e.name), 1), W("button", {
				type: "button",
				"data-sbsong-action": "artist-remove",
				"data-id": e.id,
				"aria-label": "Удалить артиста " + e.name
			}, "Удалить", 8, Jb)]))), 128)), i.value.length ? K("", !0) : (H(), U("p", Yb, k(e.model.artists.length ? "Ничего не найдено." : "Пока нет добавленных вручную артистов."), 1))])
		]));
	}
};
// src/vue/account/legacyArtistManagerBridge.js
function Zb({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ARTIST_MANAGER, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Z({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-artist-manager"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, Xb, { model: n })
	});
}
// src/vue/account/ArtistDNA.vue
var Qb = {
	key: 0,
	class: "sb-dna-summary",
	"data-sb-vue-artist-manager-recap": ""
}, $b = { key: 1 }, ex = {
	key: 0,
	class: "sb-dna-grid"
}, tx = ["data-id"], nx = { class: "sb-dna-cardimg" }, rx = ["src"], ix = {
	key: 1,
	class: "sb-dna-empty"
}, ax = {
	key: 2,
	class: "sb-dna-detail"
}, ox = { class: "sb-dna-actions" }, sx = ["data-id"], cx = ["data-id"], lx = ["data-id"], ux = { class: "sb-dna-hero" }, dx = { class: "sb-dna-portrait" }, fx = ["src"], px = { class: "sb-dna-facts" }, mx = {
	key: 0,
	class: "sb-dna-restrictions"
}, hx = { class: "sb-dna-descr" }, gx = { class: "sb-dna-style" }, _x = { class: "sb-dna-actions" }, vx = ["data-id"], yx = ["data-id"], bx = { class: "sb-dna-related" }, xx = ["data-id"], Sx = { key: 1 }, Cx = {
	__name: "ArtistDNA",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = Q();
		return R(() => t.model, (e) => n.publishArtistDnaSummary(e), { immediate: !0 }), (t, r) => (H(), U(V, null, [I(n).artistManagerSummary.ready ? (H(), U("div", Qb, [W("div", null, [W("b", null, k(I(n).artistManagerSummary.artistCount), 1), r[0] ||= W("span", null, "В ручном списке артистов", -1)])])) : K("", !0), e.model.detail ? (H(), U("div", ax, [
			W("div", ox, [
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
				}, "В Suno Studio", 8, sx),
				W("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "dna-edit",
					"data-id": e.model.detail.id
				}, "Изменить", 8, cx),
				W("button", {
					type: "button",
					class: "btn danger small",
					"data-action": "dna-delete",
					"data-id": e.model.detail.id
				}, "Удалить", 8, lx)
			]),
			W("div", ux, [W("div", dx, [e.model.detail.portrait ? (H(), U("img", {
				key: 0,
				src: e.model.detail.portrait,
				alt: "Портрет артиста",
				loading: "lazy"
			}, null, 8, fx)) : (H(), U(V, { key: 1 }, [G("♫")], 64))]), W("div", null, [
				r[3] ||= W("span", null, "МУЗЫКАЛЬНАЯ ИДЕНТИЧНОСТЬ", -1),
				W("h2", null, k(e.model.detail.name), 1),
				W("p", null, k(e.model.detail.subtitle), 1)
			])]),
			W("div", px, [(H(!0), U(V, null, B(e.model.detail.facts, (e) => (H(), U("div", {
				key: e.label,
				class: "sb-dna-fact"
			}, [W("span", null, k(e.label), 1), W("strong", null, k(e.value), 1)]))), 128))]),
			(H(!0), U(V, null, B(e.model.detail.textFields, (e) => (H(), U("section", {
				key: e.label,
				class: "sb-dna-descr"
			}, [W("h3", null, k(e.label), 1), W("p", null, k(e.value), 1)]))), 128)),
			e.model.detail.forbids.length ? (H(), U("div", mx, [r[4] ||= W("strong", null, "Запреты:", -1), (H(!0), U(V, null, B(e.model.detail.forbids, (e) => (H(), U("span", { key: e }, k(e), 1))), 128))])) : K("", !0),
			W("section", hx, [
				r[5] ||= W("h3", null, "Промпт для Suno Style", -1),
				W("div", gx, k(e.model.detail.style), 1),
				W("div", _x, [W("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "dna-copy",
					"data-id": e.model.detail.id
				}, "Копировать Style", 8, vx), W("button", {
					type: "button",
					class: "btn primary small",
					"data-action": "dna-apply",
					"data-id": e.model.detail.id
				}, "Применить в Suno Studio", 8, yx)])
			]),
			W("div", bx, [W("h3", null, "Связанные паспорта треков (" + k(e.model.detail.related.length) + ")", 1), e.model.detail.related.length ? (H(!0), U(V, { key: 0 }, B(e.model.detail.related, (e) => (H(), U("button", {
				key: e.id,
				type: "button",
				class: "sb-dna-tracklink",
				"data-action": "dna-track",
				"data-id": e.id
			}, [W("strong", null, k(e.title), 1), W("span", null, k(e.status) + " →", 1)], 8, xx))), 128)) : (H(), U("p", Sx, "Пока нет привязанных треков. В «Паспорте трека» можно выбрать этого артиста."))])
		])) : (H(), U("div", $b, [e.model.profiles.length ? (H(), U("div", ex, [(H(!0), U(V, null, B(e.model.profiles, (e) => (H(), U("button", {
			key: e.id,
			type: "button",
			class: "sb-dna-card",
			"data-action": "dna-open",
			"data-id": e.id
		}, [
			W("div", nx, [e.portrait ? (H(), U("img", {
				key: 0,
				src: e.portrait,
				alt: "",
				loading: "lazy"
			}, null, 8, rx)) : (H(), U(V, { key: 1 }, [G("♫")], 64))]),
			W("div", null, [
				W("strong", null, k(e.name), 1),
				W("span", null, k(e.genre), 1),
				W("small", null, k(e.timbre), 1)
			]),
			r[1] ||= W("span", { class: "sb-dna-arrow" }, "→", -1)
		], 8, tx))), 128))])) : (H(), U("div", ix, " Здесь будут музыкальные персонажи со своим вокалом, инструментами, стилем и визуальным образом. Создай первый профиль. "))]))], 64));
	}
};
// src/vue/account/legacyArtistDNABridge.js
function wx({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_DNA, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Z({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-dna-view"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, Cx, { model: n })
	});
}
// src/vue/account/ArtistDNAEditor.vue
var Tx = {
	id: "dna-editor",
	class: "panel sb-dna-editor",
	"data-sb-vue-dna-editor": ""
}, Ex = { class: "sb-dna-formheader" }, Dx = { class: "sb-dna-fields" }, Ox = { class: "field" }, kx = { class: "field" }, Ax = ["value"], jx = { class: "field" }, Mx = ["value"], Nx = { class: "field" }, Px = { class: "field" }, Fx = { class: "field" }, Ix = {
	key: 0,
	class: "sb-dna-fields"
}, Lx = { class: "field" }, Rx = { class: "field" }, zx = { class: "field" }, Bx = ["for"], Vx = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"rows"
], Hx = { class: "sb-dna-checkboxes" }, Ux = ["id", "onUpdate:modelValue"], Wx = { class: "field" }, Gx = ["for"], Kx = [
	"id",
	"onUpdate:modelValue",
	"rows",
	"maxlength"
], qx = { class: "field" }, Jx = { class: "sb-dna-previewbox" }, Yx = { id: "dna-style-preview" }, Xx = { id: "dna-style-count" }, Zx = {
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
		return (t, s) => (H(), U("div", Tx, [
			W("div", Ex, [W("div", null, [W("h2", null, k(e.model.editing ? "Редактирование ДНК" : "Новый артист"), 1), s[10] ||= W("p", null, "Сохрани характер звучания — он будет доступен в Suno Studio и «Паспорте трека».", -1)]), s[11] ||= W("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "dna-cancel"
			}, "Закрыть", -1)]),
			W("div", Dx, [
				W("div", Ox, [s[12] ||= W("label", { for: "dna-name" }, "Имя артиста *", -1), L(W("input", {
					id: "dna-name",
					"onUpdate:modelValue": s[0] ||= (e) => n.name = e,
					maxlength: "120",
					placeholder: "Название музыкального проекта"
				}, null, 512), [[J, n.name]])]),
				W("div", kx, [s[13] ||= W("label", { for: "dna-project" }, "Связанный проект", -1), L(W("select", {
					id: "dna-project",
					"onUpdate:modelValue": s[1] ||= (e) => n.projectId = e
				}, [(H(!0), U(V, null, B(e.model.projects, (e) => (H(), U("option", {
					key: e.id,
					value: e.id
				}, k(e.title), 9, Ax))), 128))], 512), [[Jo, n.projectId]])]),
				W("div", jx, [s[14] ||= W("label", { for: "dna-genre" }, "Основной жанр", -1), L(W("select", {
					id: "dna-genre",
					"onUpdate:modelValue": s[2] ||= (e) => n.genre = e
				}, [(H(!0), U(V, null, B(e.model.genres, (e) => (H(), U("option", {
					key: e.id,
					value: e.id
				}, k(e.name), 9, Mx))), 128))], 512), [[Jo, n.genre]])]),
				W("div", Nx, [s[15] ||= W("label", { for: "dna-othergenres" }, "Дополнительные жанры", -1), L(W("input", {
					id: "dna-othergenres",
					"onUpdate:modelValue": s[3] ||= (e) => n.otherGenres = e,
					maxlength: "240",
					placeholder: "Например, pop, R&B, electropop"
				}, null, 512), [[J, n.otherGenres]])]),
				W("div", Px, [s[17] ||= W("label", { for: "dna-vocal" }, "Тип вокала", -1), L(W("select", {
					id: "dna-vocal",
					"onUpdate:modelValue": s[4] ||= (e) => n.vocal = e
				}, [...s[16] ||= [
					W("option", { value: "male" }, "Мужской", -1),
					W("option", { value: "female" }, "Женский", -1),
					W("option", { value: "duet" }, "Дуэт", -1)
				]], 512), [[Jo, n.vocal]])]),
				W("div", Fx, [s[19] ||= W("label", { for: "dna-language" }, "Язык песни", -1), L(W("select", {
					id: "dna-language",
					"onUpdate:modelValue": s[5] ||= (e) => n.language = e
				}, [...s[18] ||= [
					W("option", { value: "Russian" }, "Русский", -1),
					W("option", { value: "English" }, "Английский", -1),
					W("option", { value: "Spanish" }, "Испанский", -1),
					W("option", { value: "Kazakh" }, "Казахский", -1)
				]], 512), [[Jo, n.language]])])
			]),
			s[24] ||= W("h3", { class: "sb-dna-formsection" }, "Голос и музыкальный почерк", -1),
			(H(), U(V, null, B(i, (e) => (H(), U(V, { key: e.id }, [e.id === "mood" ? (H(), U("div", Ix, [W("div", Lx, [s[20] ||= W("label", { for: "dna-tempo-min" }, "Темп от (BPM)", -1), L(W("input", {
				id: "dna-tempo-min",
				"onUpdate:modelValue": s[6] ||= (e) => n.tempoMin = e,
				maxlength: "3",
				placeholder: "Например, 90"
			}, null, 512), [[J, n.tempoMin]])]), W("div", Rx, [s[21] ||= W("label", { for: "dna-tempo-max" }, "Темп до (BPM)", -1), L(W("input", {
				id: "dna-tempo-max",
				"onUpdate:modelValue": s[7] ||= (e) => n.tempoMax = e,
				maxlength: "3",
				placeholder: "Например, 120"
			}, null, 512), [[J, n.tempoMax]])])])) : K("", !0), W("div", zx, [W("label", { for: "dna-" + e.id }, k(e.label), 9, Bx), L(W("textarea", {
				id: "dna-" + e.id,
				"onUpdate:modelValue": (t) => n[e.key] = t,
				maxlength: e.max,
				rows: e.rows
			}, null, 8, Vx), [[J, n[e.key]]])])], 64))), 64)),
			s[25] ||= W("h3", { class: "sb-dna-formsection" }, "Запреты и ограничения", -1),
			W("div", Hx, [(H(), U(V, null, B(a, (e) => W("label", { key: e.id }, [L(W("input", {
				id: "dna-" + e.id,
				"onUpdate:modelValue": (t) => n[e.key] = t,
				type: "checkbox"
			}, null, 8, Ux), [[Ko, n[e.key]]]), G(" " + k(e.label), 1)])), 64))]),
			W("div", Wx, [s[22] ||= W("label", { for: "dna-extra" }, "Дополнительные требования к аранжировке", -1), L(W("textarea", {
				id: "dna-extra",
				"onUpdate:modelValue": s[8] ||= (e) => n.extra = e,
				rows: "3",
				maxlength: "650"
			}, null, 512), [[J, n.extra]])]),
			s[26] ||= W("h3", { class: "sb-dna-formsection" }, "Творческий образ", -1),
			(H(), U(V, null, B(o, (e) => W("div", {
				key: e.id,
				class: "field"
			}, [W("label", { for: "dna-" + e.id }, k(e.label), 9, Gx), L(W("textarea", {
				id: "dna-" + e.id,
				"onUpdate:modelValue": (t) => n[e.key] = t,
				rows: e.rows,
				maxlength: e.max
			}, null, 8, Kx), [[J, n[e.key]]])])), 64)),
			W("div", qx, [s[23] ||= W("label", { for: "dna-portrait" }, "Ссылка на портрет (HTTPS)", -1), L(W("input", {
				id: "dna-portrait",
				"onUpdate:modelValue": s[9] ||= (e) => n.portrait = e,
				maxlength: "2000",
				placeholder: "https://…"
			}, null, 512), [[J, n.portrait]])]),
			s[27] ||= W("h3", { class: "sb-dna-formsection" }, "Промпт ДНК для Suno", -1),
			W("div", Jx, [W("div", Yx, k(r.value), 1), W("span", Xx, k(r.value.length) + " / 1000", 1)]),
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
function Qx({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_DNA_EDITOR, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Z({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-dna-editor"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, Zx, {
			model: r,
			api: t
		})
	});
}
// src/vue/account/AccountSettings.vue
var $x = ["data-sb-preferred-theme", "data-sb-applied-theme"], eS = { class: "sbs-layout" }, tS = { class: "sbs-main-column" }, nS = { class: "sbs-panel" }, rS = {
	class: "sbs-field sbs-theme-field",
	for: "sbs-theme"
}, iS = ["value"], aS = ["for"], oS = { class: "sbs-option-text" }, sS = { class: "sbs-switch" }, cS = [
	"id",
	"onUpdate:modelValue",
	"data-sbs-setting",
	"aria-label"
], lS = { class: "sbs-panel" }, uS = {
	class: "sbs-field",
	for: "sbs-start"
}, dS = ["value"], fS = { class: "sbs-panel" }, pS = {
	class: "sbs-field",
	for: "sbs-name"
}, mS = { class: "sbs-side-column" }, hS = { class: "sbs-panel sbs-reset-panel" }, gS = {
	key: 0,
	class: "sbs-confirm"
}, _S = {
	key: 1,
	type: "button",
	class: "sbs-secondary",
	"data-sbs-action": "reset"
}, vS = ["hidden"], yS = {
	__name: "AccountSettings",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = Q(), r = /* @__PURE__ */ j({ ...t.model.settings });
		R(() => n.appearance, (e) => {
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
		return z(() => {
			t.model.resetPending && En(() => document.querySelector("#sb-vue-account-settings .sbs-confirm-button")?.focus());
		}), (t, o) => (H(), U("section", {
			id: "sbs-page",
			class: "sbs-page",
			"data-sb-vue-settings": "",
			"data-sb-preferred-theme": I(n).appearance.theme,
			"data-sb-applied-theme": I(n).appearance.resolvedTheme
		}, [
			o[17] ||= Sa("<header class=\"sbs-heading\"><button type=\"button\" class=\"sbs-back\" data-sbs-action=\"close\">← Вернуться в кабинет</button><div class=\"sbs-eyebrow\">SUNOBOOM · ЛИЧНЫЙ КАБИНЕТ</div><div class=\"sbs-heading-row\"><div><h1>Настройки</h1><p>Настрой музыкальную мастерскую под себя. Изменения применяются сразу и сохраняются в этом браузере.</p></div><span class=\"sbs-badge\">⚙️ ПЕРСОНАЛИЗАЦИЯ</span></div></header>", 1),
			W("div", eS, [W("div", tS, [
				W("section", nS, [
					o[5] ||= W("div", { class: "sbs-panel-head" }, [W("span", {
						class: "sbs-symbol",
						"aria-hidden": "true"
					}, "🎨"), W("div", null, [W("h2", null, "Внешний вид"), W("p", null, "Удобная работа на компьютере и телефоне")])], -1),
					W("label", rS, [o[3] ||= W("span", null, "Тема приложения", -1), L(W("select", {
						id: "sbs-theme",
						"onUpdate:modelValue": o[0] ||= (e) => r.theme = e,
						"data-sbs-setting": "theme",
						"aria-label": "Тема приложения"
					}, [(H(!0), U(V, null, B(e.model.themes, (e) => (H(), U("option", {
						key: e.id,
						value: e.id
					}, k(e.title), 9, iS))), 128))], 512), [[Jo, r.theme]])]),
					o[6] ||= W("p", { class: "sbs-help sbs-theme-help" }, "Выбери палитру: тёмную, светлую, системную или одну из шести цветных тем. Изменения сохраняются.", -1),
					(H(), U(V, null, B(a, (e) => W("label", {
						key: e.key,
						class: "sbs-option",
						for: "sbs-" + e.key
					}, [W("span", oS, [W("strong", null, k(e.title), 1), W("small", null, k(e.desc), 1)]), W("span", sS, [L(W("input", {
						id: "sbs-" + e.key,
						"onUpdate:modelValue": (t) => r[e.key] = t,
						type: "checkbox",
						"data-sbs-setting": e.key,
						role: "switch",
						"aria-label": e.title
					}, null, 8, cS), [[Ko, r[e.key]]]), o[4] ||= W("span", {
						class: "sbs-switch-track",
						"aria-hidden": "true"
					}, null, -1)])], 8, aS)), 64))
				]),
				W("section", lS, [
					o[8] ||= W("div", { class: "sbs-panel-head" }, [W("span", {
						class: "sbs-symbol",
						"aria-hidden": "true"
					}, "🏠"), W("div", null, [W("h2", null, "При открытии сайта"), W("p", null, "Выбери стартовый раздел SUNOBOOM")])], -1),
					W("label", uS, [o[7] ||= W("span", null, "Стартовая страница", -1), L(W("select", {
						id: "sbs-start",
						"onUpdate:modelValue": o[1] ||= (e) => r.startPage = e,
						"data-sbs-setting": "startPage"
					}, [(H(!0), U(V, null, B(e.model.pages, (e) => (H(), U("option", {
						key: e.id,
						value: e.id
					}, k(e.title), 9, dS))), 128))], 512), [[Jo, r.startPage]])]),
					o[9] ||= W("p", { class: "sbs-help" }, "Применяется при следующем открытии или обновлении сайта. Ссылки на конкретные карточки жанров сохраняют свой переход.", -1)
				]),
				W("section", fS, [
					o[11] ||= W("div", { class: "sbs-panel-head" }, [W("span", {
						class: "sbs-symbol",
						"aria-hidden": "true"
					}, "👤"), W("div", null, [W("h2", null, "Профиль"), W("p", null, "Имя отображается только в локальном кабинете")])], -1),
					W("label", pS, [o[10] ||= W("span", null, "Имя в кабинете", -1), L(W("input", {
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
			]), W("aside", mS, [o[16] ||= Sa("<section class=\"sbs-panel\"><div class=\"sbs-panel-head\"><span class=\"sbs-symbol\" aria-hidden=\"true\">🔒</span><div><h2>Данные и приватность</h2></div></div><p class=\"sbs-info\">Сейчас SUNOBOOM работает как локальный прототип: твои проекты и настройки сохраняются в браузере. Синхронизации между устройствами пока нет.</p><p class=\"sbs-info\">GitHub Pages остаётся публичной демонстрационной площадкой — полноценный закрытый вход по приглашениям ещё не подключён.</p><button type=\"button\" class=\"sbs-secondary\" data-sbs-action=\"backup\">↓ Перейти к резервным копиям</button></section>", 1), W("section", hS, [
				o[14] ||= W("div", { class: "sbs-panel-head" }, [W("span", {
					class: "sbs-symbol",
					"aria-hidden": "true"
				}, "↺"), W("div", null, [W("h2", null, "Сброс предпочтений")])], -1),
				o[15] ||= W("p", { class: "sbs-info" }, "Вернуть стандартные параметры отображения. Песни, проекты, избранное и имя профиля не удаляются.", -1),
				e.model.resetPending ? (H(), U("div", gS, [...o[13] ||= [W("strong", null, "Сбросить настройки интерфейса?", -1), W("div", null, [W("button", {
					type: "button",
					class: "sbs-secondary",
					"data-sbs-action": "cancel-reset"
				}, "Отмена"), W("button", {
					type: "button",
					class: "sbs-confirm-button",
					"data-sbs-action": "confirm-reset"
				}, "Да, сбросить")], -1)]])) : (H(), U("button", _S, "Сбросить настройки"))
			])])]),
			W("p", {
				id: "sbs-message",
				class: "sbs-message",
				role: "status",
				"aria-live": "polite",
				hidden: !e.model.message
			}, k(e.model.message), 9, vS)
		], 8, $x));
	}
};
// src/vue/account/legacyAccountSettingsBridge.js
function bS({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_SETTINGS, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Z({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-account-settings"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, yS, { model: n })
	});
}
// src/vue/player/PlayerLab.vue
var xS = {
	class: "sbp-layout",
	"data-sb-vue-player-lab": ""
}, SS = {
	class: "sbp-main",
	"aria-label": "Плеер"
}, CS = {
	class: "sbp-bars",
	"aria-hidden": "true"
}, wS = { class: "sbp-title-area" }, TS = {
	id: "sbp-now-tag",
	class: "sbp-now-tag"
}, ES = { id: "sbp-title" }, DS = { id: "sbp-artist" }, OS = {
	id: "sbp-counter",
	class: "sbp-counter"
}, kS = {
	key: 0,
	class: "sbp-now-tag",
	"data-sb-vue-ab-recap": ""
}, AS = { class: "sbp-progress" }, jS = ["value", "disabled"], MS = { class: "sbp-times" }, NS = { id: "sbp-time-current" }, PS = { id: "sbp-time-total" }, FS = { class: "sbp-transport" }, IS = ["aria-pressed"], LS = ["aria-label", "disabled"], RS = ["title", "aria-label"], zS = { class: "sbp-extras" }, BS = { class: "sbp-volume" }, VS = {
	key: 0,
	class: "sbp-ios-volume"
}, HS = ["value"], US = { id: "sbp-volume-label" }, WS = {
	class: "sbp-speed",
	for: "sbp-rate"
}, GS = ["value"], KS = ["value"], qS = { class: "sbp-side" }, JS = { class: "sbp-side-head" }, YS = { id: "sbp-list-count" }, XS = ["disabled"], ZS = {
	class: "sbp-track-list",
	id: "sbp-list",
	"aria-label": "Список треков"
}, QS = ["data-sbp-item"], $S = ["data-index", "aria-label"], eC = { class: "sbp-track-index" }, tC = { class: "sbp-track-meta" }, nC = { class: "sbp-track-duration" }, rC = ["data-index", "aria-label"], iC = {
	key: 0,
	class: "sbp-empty"
}, aC = {
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
		}), Mr(() => window.removeEventListener("sunoboom:player-lab-update", i));
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
		return (e, t) => (H(), U("div", xS, [W("section", SS, [
			W("div", { class: O(["sbp-art", { "is-playing": n.value.playing }]) }, [
				t[0] ||= W("div", { class: "sbp-art-orb" }, "♫", -1),
				W("div", CS, [(H(!0), U(V, null, B(I(a), (e) => (H(), U("i", {
					key: e.index,
					style: D({
						"--sbp-i": e.index,
						"--sbp-h": e.height
					})
				}, null, 4))), 128))]),
				t[1] ||= W("span", null, "SONIC LAB / PRIVATE PREVIEW", -1)
			], 2),
			W("div", wS, [W("div", null, [
				W("div", TS, k(n.value.nowTag), 1),
				W("h2", ES, k(n.value.title), 1),
				W("p", DS, k(n.value.artist), 1)
			]), W("span", OS, k(n.value.counter), 1)]),
			I(r).playerAbSummary.ready && I(r).playerAbSummary.readyCount ? (H(), U("p", kS, "A/B: загружено " + k(I(r).playerAbSummary.readyCount) + " из 2 · активна " + k(I(r).playerAbSummary.active), 1)) : K("", !0),
			W("div", AS, [
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
				}, null, 12, jS),
				W("div", MS, [W("span", NS, k(n.value.currentTime), 1), W("span", PS, k(n.value.totalTime), 1)])
			]),
			W("div", FS, [
				W("button", {
					type: "button",
					class: O(["sbp-secondary", { "is-on": n.value.shuffle }]),
					id: "sbp-shuffle",
					"data-sbp-action": "shuffle",
					"aria-label": "Случайный порядок",
					"aria-pressed": String(n.value.shuffle),
					title: "Случайный порядок"
				}, "⤨", 10, IS),
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
				}, k(n.value.playing ? "❚❚" : "▶"), 9, LS),
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
				}, k(n.value.repeat === "one" ? "↻₁" : "↻"), 11, RS)
			]),
			W("div", zS, [W("div", BS, [n.value.ios ? (H(), U("span", VS, "📱 Громкость регулируется кнопками телефона")) : (H(), U(V, { key: 1 }, [
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
				}, null, 8, HS),
				W("output", US, k(n.value.volume) + "%", 1)
			], 64))]), W("label", WS, [t[7] ||= G(" Скорость ", -1), W("select", {
				id: "sbp-rate",
				"aria-label": "Скорость воспроизведения",
				value: n.value.rate
			}, [(H(), U(V, null, B(o, (e) => W("option", {
				key: e,
				value: e
			}, k(e) + "×", 9, KS)), 64))], 8, GS)])]),
			L(W("div", {
				class: "sbp-message",
				id: "sbp-message",
				role: "status",
				"aria-live": "polite"
			}, k(n.value.message), 513), [[uo, n.value.message]])
		]), W("aside", qS, [
			W("div", JS, [W("div", null, [t[8] ||= W("h2", null, "Очередь воспроизведения", -1), W("small", YS, k(n.value.count) + " " + k(n.value.count === 1 ? "трек" : n.value.count > 1 && n.value.count < 5 ? "трека" : "треков"), 1)]), W("button", {
				type: "button",
				class: "sbp-clear",
				"data-sbp-action": "clear",
				id: "sbp-clear",
				disabled: !n.value.count
			}, "Очистить", 8, XS)]),
			t[9] ||= Sa("<div class=\"sbp-dropzone\" id=\"sbp-dropzone\"><div class=\"sbp-drop-icon\">↥</div><strong>Загрузи свои треки</strong><p>MP3, WAV, M4A, AAC, OGG, FLAC — если формат поддерживается браузером. Файлы никуда не отправляются.</p><label class=\"sbp-upload-label\" for=\"sbp-file\">Выбрать аудиофайлы</label><input id=\"sbp-file\" type=\"file\" accept=\"audio/*,.mp3,.m4a,.aac,.wav,.ogg,.flac,.opus\" multiple></div><div class=\"sbp-demo-box\"><div><strong>Нет аудиофайлов?</strong><p>Создать 3 коротких оригинальных демо-сигнала для проверки управления.</p></div><button type=\"button\" data-sbp-action=\"demo\" id=\"sbp-demo\">+ Демо-треки</button></div>", 2),
			W("div", ZS, [(H(!0), U(V, null, B(n.value.tracks, (e) => (H(), U("article", {
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
				}, [W("span", eC, k(e.playLabel), 1), W("span", tC, [W("strong", null, k(e.name), 1), W("small", null, k(e.artist) + " · " + k(e.sourceLabel), 1)])], 8, $S),
				W("span", nC, k(e.durationLabel), 1),
				W("button", {
					type: "button",
					class: "sbp-track-remove",
					"data-sbp-action": "remove",
					"data-index": e.index,
					title: "Удалить из списка",
					"aria-label": "Удалить " + e.name
				}, "×", 8, rC)
			], 10, QS))), 128)), n.value.tracks.length ? K("", !0) : (H(), U("div", iC, " Плейлист пока пуст. Добавь MP3 или нажми «Демо-треки», чтобы начать тест. "))])
		])]));
	}
};
// src/vue/player/legacyPlayerLabBridge.js
function oC({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PLAYER_LAB, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Z({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-player-lab"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, aC, {
			api: t,
			initialModel: r
		})
	});
}
// src/vue/player/PlayerAB.vue
var sC = { class: "sbab-heading" }, cC = {
	key: 0,
	class: "sbab-kicker",
	"data-sb-vue-player-recap": ""
}, lC = { class: "sbab-files" }, uC = ["data-sbab-card"], dC = { class: "sbab-file-top" }, fC = { class: "sbab-side-label" }, pC = ["id"], mC = ["id"], hC = ["id"], gC = { class: "sbab-file-bottom" }, _C = ["for"], vC = ["id", "data-sbab-file"], yC = ["data-side", "disabled"], bC = ["id"], xC = { class: "sbab-console" }, SC = { class: "sbab-console-top" }, CC = { id: "sbab-active-label" }, wC = { class: "sbab-wave" }, TC = {
	class: "sbab-wave-bars",
	"aria-hidden": "true"
}, EC = {
	class: "sbab-toggle",
	role: "group",
	"aria-label": "Выбор версии для прослушивания"
}, DC = ["data-side", "aria-pressed"], OC = { class: "sbab-scrub" }, kC = ["value", "disabled"], AC = { class: "sbab-times" }, jC = { id: "sbab-current" }, MC = { id: "sbab-duration" }, NC = { class: "sbab-transport" }, PC = ["disabled", "aria-label"], FC = { class: "sbab-clip" }, IC = { class: "sbab-clip-actions" }, LC = {
	type: "button",
	"data-sbab-action": "mark-start"
}, RC = { id: "sbab-start" }, zC = {
	type: "button",
	"data-sbab-action": "mark-end"
}, BC = { id: "sbab-end" }, VC = ["aria-pressed", "aria-label"], HC = { class: "sbab-volume" }, UC = { key: 0 }, WC = ["for"], GC = [
	"id",
	"data-sbab-vol",
	"value"
], KC = ["hidden"], qC = { class: "sbab-review" }, JC = { class: "sbab-rating-grid" }, YC = { class: "sbab-rating-label" }, XC = [
	"data-sbab-score",
	"aria-label",
	"value"
], ZC = ["value"], QC = { class: "sbab-note-grid" }, $C = ["for"], ew = [
	"id",
	"data-sbab-note",
	"placeholder",
	"value"
], tw = {
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
		}), Mr(() => window.removeEventListener("sunoboom:player-ab-update", s)), (e, t) => (H(), U("section", {
			id: "sbab-compare",
			class: O(["sbab-shell", {
				"sbab-is-playing": n.value.playing,
				"sbab-has-files": n.value.hasBoth
			}]),
			"aria-label": "Сравнение аудиоверсий A и B",
			"data-sb-vue-player-ab": ""
		}, [
			W("header", sC, [W("div", null, [
				t[0] ||= W("span", { class: "sbab-kicker" }, "SUNOBOOM · AUDIO TEST LAB", -1),
				t[1] ||= W("h2", null, "A/B-сравнение аудиоверсий", -1),
				t[2] ||= W("p", null, "Загрузи два варианта песни и переключайся между ними в одной временной точке. Сравнивай вокал, аранжировку и финальное звучание.", -1),
				I(r).playerLabSummary.ready ? (H(), U("p", cC, "Очередь плеера LAB: " + k(I(r).playerLabSummary.queueCount) + " треков · " + k(I(r).playerLabSummary.playing ? "воспроизведение" : "пауза"), 1)) : K("", !0)
			]), t[3] ||= W("span", { class: "sbab-lab-badge" }, "A ↔ B", -1)]),
			W("div", lC, [(H(), U(V, null, B(i, (e) => W("div", {
				key: e,
				class: O(["sbab-file-card", [e === "A" ? "sbab-card-a" : "sbab-card-b", { "sbab-active-card": n.value.active === e }]]),
				"data-sbab-card": e
			}, [
				W("div", dC, [W("span", fC, "ВЕРСИЯ " + k(e), 1), W("span", {
					class: "sbab-loaded",
					id: "sbab-ready-" + e
				}, k(n.value.files[e].ready ? "Файл добавлен" : "Ожидает файл"), 9, pC)]),
				W("strong", {
					class: "sbab-filename",
					id: "sbab-name-" + e
				}, k(n.value.files[e].name), 9, mC),
				W("p", {
					class: "sbab-filesub",
					id: "sbab-info-" + e
				}, k(n.value.files[e].info), 9, hC),
				W("div", gC, [
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
					})], -1), G(" " + k(n.value.files[e].ready ? "Заменить файл" : "Выбрать файл"), 1)], 8, _C),
					W("input", {
						type: "file",
						id: "sbab-file-" + e,
						accept: "audio/*,.mp3,.wav,.m4a,.aac,.ogg,.flac,.opus",
						"data-sbab-file": e
					}, null, 8, vC),
					W("button", {
						type: "button",
						"data-sbab-action": "remove",
						"data-side": e,
						class: "sbab-remove",
						disabled: !n.value.files[e].ready
					}, "Удалить", 8, yC),
					W("span", {
						class: "sbab-length",
						id: "sbab-length-" + e
					}, k(n.value.files[e].duration), 9, bC)
				])
			], 10, uC)), 64))]),
			t[20] ||= W("div", { class: "sbab-demo-row" }, [W("p", null, "Для первого теста можно создать два разных оригинальных коротких аудиофрагмента."), W("button", {
				type: "button",
				"data-sbab-action": "demo"
			}, "Создать демо A и B")], -1),
			W("div", xC, [
				W("div", SC, [t[5] ||= W("span", { class: "sbab-kicker" }, "АКТИВНОЕ ПРОСЛУШИВАНИЕ", -1), W("span", CC, "Версия " + k(n.value.active) + k(n.value.playing ? " · Воспроизведение" : ""), 1)]),
				W("div", wC, [W("div", TC, [(H(!0), U(V, null, B(I(o), (e, t) => (H(), U("i", {
					key: t,
					style: D({ "--bar-height": e })
				}, null, 4))), 128))]), t[6] ||= W("div", { class: "sbab-wave-center" }, "A / B", -1)]),
				W("div", EC, [(H(), U(V, null, B(i, (e) => W("button", {
					key: e,
					type: "button",
					class: O(e === "A" ? "sbab-btn-a" : "sbab-btn-b"),
					"data-sbab-action": "select",
					"data-side": e,
					"aria-pressed": String(n.value.active === e)
				}, [G(k(e) + " ", 1), W("small", null, "Версия " + k(e), 1)], 10, DC)), 64))]),
				W("div", OC, [
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
					}, null, 8, kC),
					W("div", AC, [W("span", jC, k(n.value.currentTime), 1), W("span", MC, k(n.value.duration), 1)])
				]),
				W("div", NC, [
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
					}, k(n.value.playing ? "❚❚" : "▶"), 9, PC),
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
				W("div", FC, [t[13] ||= W("div", { class: "sbab-clip-title" }, [W("strong", null, "Повтор выбранного фрагмента"), W("small", null, "Например, только припев или куплет")], -1), W("div", IC, [
					W("button", LC, [t[10] ||= G("Начало: ", -1), W("span", RC, k(n.value.start), 1)]),
					W("button", zC, [t[11] ||= G("Конец: ", -1), W("span", BC, k(n.value.end), 1)]),
					W("button", {
						type: "button",
						"data-sbab-action": "loop",
						id: "sbab-loop",
						"aria-pressed": String(n.value.loop),
						"aria-label": n.value.loop ? "Повтор фрагмента включён" : "Повтор фрагмента выключен"
					}, k(n.value.loop ? "↻ Повтор включён" : "↻ Повтор выкл."), 9, VC),
					t[12] ||= W("button", {
						type: "button",
						"data-sbab-action": "clear-segment",
						"aria-label": "Очистить границы фрагмента"
					}, "✕", -1)
				])]),
				W("div", HC, [n.value.ios ? (H(), U("span", UC, "📱 Громкость регулируется кнопками телефона")) : (H(), U(V, { key: 1 }, B(i, (e) => W("label", {
					key: e,
					for: "sbab-vol-" + e
				}, [G(" Уровень " + k(e) + " ", 1), W("input", {
					id: "sbab-vol-" + e,
					"data-sbab-vol": e,
					type: "range",
					min: "0",
					max: "100",
					value: n.value.volume[e]
				}, null, 8, GC)], 8, WC)), 64))]),
				W("p", {
					id: "sbab-status",
					class: "sbab-status",
					role: "status",
					"aria-live": "polite",
					hidden: !n.value.status
				}, k(n.value.status), 9, KC)
			]),
			W("section", qC, [
				t[18] ||= W("header", null, [W("h3", null, "Оценка на слух"), W("p", null, "Субъективное сравнение. Оценки выставляешь ты — автоматического анализа качества здесь нет.")], -1),
				W("div", JC, [
					t[15] ||= W("div", { class: "sbab-rating-head" }, "Параметр", -1),
					t[16] ||= W("div", { class: "sbab-rating-head" }, "A", -1),
					t[17] ||= W("div", { class: "sbab-rating-head" }, "B", -1),
					(H(), U(V, null, B(a, (e) => (H(), U(V, { key: e.key }, [W("div", YC, k(e.label), 1), (H(), U(V, null, B(i, (r) => W("div", { key: r }, [W("select", {
						"data-sbab-score": r + ":" + e.key,
						"aria-label": e.label + " — версия " + r,
						value: n.value.scores[r][e.key]
					}, [t[14] ||= W("option", { value: 0 }, "—", -1), (H(), U(V, null, B(5, (e) => W("option", {
						key: e,
						value: e
					}, k(e) + "/5", 9, ZC)), 64))], 8, XC)])), 64))], 64))), 64))
				]),
				W("div", QC, [(H(), U(V, null, B(i, (e) => W("label", {
					key: e,
					for: "sbab-note-" + e
				}, [G(" Заметки по " + k(e) + " ", 1), W("textarea", {
					id: "sbab-note-" + e,
					"data-sbab-note": e,
					rows: "3",
					maxlength: "1000",
					placeholder: e === "A" ? "Сильные стороны, что улучшить…" : "Вокал, баланс, пространство…",
					value: n.value.notes[e]
				}, null, 8, ew)], 8, $C)), 64))]),
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
function nw({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PLAYER_AB, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Z({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-player-ab"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, tw, {
			api: t,
			initialModel: r
		})
	});
}
// src/vue/producer/ProducerSongList.vue
var rw = ["data-id", "aria-pressed"], iw = { class: "sbpc-song-main" }, aw = { class: "sbpc-song-meta" }, ow = { class: "sbpc-tiny-progress" }, sw = {
	key: 0,
	class: "sbpc-help",
	"data-sb-vue-passport-recap": ""
}, cw = {
	key: 1,
	class: "sbpc-empty"
}, lw = {
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
		return z(() => window.addEventListener("sunoboom:producer-search", o)), Nr(() => window.removeEventListener("sunoboom:producer-search", o)), (t, n) => (H(), U(V, null, [
			(H(!0), U(V, null, B(a.value, (t) => (H(), U("button", {
				key: t.id,
				type: "button",
				class: O(["sbpc-song", { active: t.id === e.model.selectedId }]),
				"data-pc-action": "open",
				"data-id": t.id,
				"aria-pressed": t.id === e.model.selectedId
			}, [
				W("span", iw, [W("strong", null, k(t.title), 1), W("span", null, k(t.artist), 1)]),
				W("span", aw, [W("b", null, k(t.done) + "/" + k(t.total), 1), W("small", null, k(t.nextLabel ? "Следующий этап: " + t.nextLabel : "Все этапы отмечены готовыми"), 1)]),
				W("span", ow, [W("i", { style: D({ width: t.percent + "%" }) }, null, 4)])
			], 10, rw))), 128)),
			I(r).passportListSummary.ready ? (H(), U("p", sw, " Паспорта треков · последний фильтр: " + k(I(r).passportListSummary.visibleCount), 1)) : K("", !0),
			a.value.length ? K("", !0) : (H(), U("p", cw, k(e.model.hasRecords ? "Поиск не дал результатов. Измени запрос или создай новую рабочую карточку." : "Пока нет рабочих карточек. Начни с первой песни выше."), 1))
		], 64));
	}
};
// src/vue/producer/legacyProducerSongListBridge.js
function uw({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PRODUCER_LIST, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Z({
		root: n,
		selectTarget: (e) => e.querySelector("#sbpc-list[data-sb-vue-producer-list]"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, lw, { model: n })
	});
}
// src/vue/producer/ProducerSongDetail.vue
var dw = {
	class: "sbpc-workspace",
	"data-sb-vue-producer-detail": ""
}, fw = { class: "sbpc-panel sbpc-song-head" }, pw = { class: "sbpc-head-top" }, mw = { class: "sbpc-completion" }, hw = { class: "sbpc-next" }, gw = {
	key: 0,
	class: "sbpc-help",
	"data-sb-vue-passport-detail-recap": ""
}, _w = { class: "sbpc-meta-editor" }, vw = { class: "sbpc-wide" }, yw = { class: "sbpc-panel" }, bw = { class: "sbpc-panel-head" }, xw = ["aria-valuenow"], Sw = { class: "sbpc-stages" }, Cw = ["data-status"], ww = { class: "sbpc-stage-index" }, Tw = { class: "sbpc-stage-body" }, Ew = { class: "sbpc-stage-title" }, Dw = { class: "sbpc-stage-state" }, Ow = {
	key: 0,
	class: "sbpc-resource-present"
}, kw = {
	key: 1,
	class: "sbpc-resource-empty"
}, Aw = { class: "sbpc-stage-actions" }, jw = [
	"onUpdate:modelValue",
	"data-pc-stage",
	"aria-label"
], Mw = ["value"], Nw = ["data-step"], Pw = { class: "sbpc-panel" }, Fw = { class: "sbpc-links" }, Iw = ["for"], Lw = [
	"id",
	"onUpdate:modelValue",
	"data-pc-link"
], Rw = ["value"], zw = ["data-type", "data-id"], Bw = { class: "sbpc-panel sbpc-arrangement" }, Vw = { class: "sbpc-panel-head" }, Hw = { class: "sbpc-arrangement-actions" }, Uw = {
	key: 0,
	type: "button",
	"data-pc-action": "restore-arrangement"
}, Ww = {
	key: 0,
	class: "sbpc-subnote"
}, Gw = { class: "sbpc-panel" }, Kw = { class: "sbpc-panel-head" }, qw = {
	key: 0,
	class: "sbpc-log"
}, Jw = {
	key: 1,
	class: "sbpc-empty"
}, Yw = {
	__name: "ProducerSongDetail",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = Q();
		R(() => t.model, (e) => n.publishMasterDetailSummary(e), { immediate: !0 });
		let r = /* @__PURE__ */ j({
			title: t.model.title,
			artist: t.model.artist,
			notes: t.model.notes
		}), i = /* @__PURE__ */ j(Object.fromEntries(t.model.links.map((e) => [e.field, e.value]))), a = /* @__PURE__ */ j(Object.fromEntries(t.model.stages.map((e) => [e.key, e.status])));
		return (t, o) => (H(), U("div", dw, [
			W("section", fw, [
				W("div", pw, [o[3] ||= W("span", { class: "sbpc-kicker" }, "КАРТОЧКА ПРОДЮСИРОВАНИЯ", -1), W("span", mw, k(e.model.percent) + "% готовности", 1)]),
				W("h2", null, k(e.model.title || "Без названия"), 1),
				W("p", null, k(e.model.artist || "Исполнитель пока не указан") + k(e.model.projectTitle ? " · " + e.model.projectTitle : ""), 1),
				W("p", hw, k(e.model.nextLabel ? "Следующий этап: " + e.model.nextLabel : "Все этапы отмечены готовыми"), 1),
				I(n).passportDetailSummary.ready ? (H(), U("p", gw, " Последний открытый паспорт: " + k(I(n).passportDetailSummary.versionCount) + " аудиоверсий · " + k(I(n).passportDetailSummary.linkedCount) + " из 3 материалов связано ", 1)) : K("", !0),
				W("div", _w, [
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
					W("label", vw, [o[6] ||= G("Продюсерские заметки ", -1), L(W("textarea", {
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
			W("section", yw, [
				W("header", bw, [o[9] ||= W("h3", null, "Маршрут песни", -1), W("span", null, k(e.model.done) + " из " + k(e.model.total) + " этапов", 1)]),
				W("div", {
					class: "sbpc-progress",
					role: "progressbar",
					"aria-label": "Готовность работы",
					"aria-valuemin": "0",
					"aria-valuemax": "100",
					"aria-valuenow": e.model.percent
				}, [W("span", { style: D({ width: e.model.percent + "%" }) }, null, 4)], 8, xw),
				W("div", Sw, [(H(!0), U(V, null, B(e.model.stages, (t) => (H(), U("article", {
					key: t.key,
					class: "sbpc-stage",
					"data-status": a[t.key]
				}, [W("div", ww, k(a[t.key] === "done" ? "✓" : t.index), 1), W("div", Tw, [
					W("div", Ew, [W("strong", null, k(t.title), 1), W("small", null, k(t.desc), 1)]),
					W("div", Dw, [t.hasMaterial ? (H(), U("span", Ow, "● " + k(t.materialLabel), 1)) : (H(), U("span", kw, "○ Подтверждённых материалов нет"))]),
					W("div", Aw, [W("label", null, [o[10] ||= G("Готовность ", -1), L(W("select", {
						"onUpdate:modelValue": (e) => a[t.key] = e,
						"data-pc-stage": t.key,
						"aria-label": "Этап " + t.title
					}, [(H(!0), U(V, null, B(e.model.statuses, (e) => (H(), U("option", {
						key: e.id,
						value: e.id
					}, k(e.label), 9, Mw))), 128))], 8, jw), [[Jo, a[t.key]]])]), W("button", {
						type: "button",
						"data-pc-action": "open-stage",
						"data-step": t.key
					}, "Открыть инструмент ↗", 8, Nw)])
				])], 8, Cw))), 128))]),
				o[11] ||= W("p", { class: "sbpc-help" }, "Готовность отмечается вручную. Наличие материала показано отдельно и не считается автоматически завершённым этапом.", -1)
			]),
			W("section", Pw, [
				o[12] ||= W("header", { class: "sbpc-panel-head" }, [W("h3", null, "Связанные материалы"), W("span", null, "Без копирования данных")], -1),
				o[13] ||= W("p", { class: "sbpc-help" }, "Свяжи существующие идеи, промпты, паспорт трека и карточку с аудио. Исходные записи останутся в своих разделах.", -1),
				W("div", Fw, [(H(!0), U(V, null, B(e.model.links, (e) => (H(), U("div", {
					key: e.field,
					class: "sbpc-link-field"
				}, [
					W("label", { for: "sbpc-" + e.field }, k(e.label), 9, Iw),
					L(W("select", {
						id: "sbpc-" + e.field,
						"onUpdate:modelValue": (t) => i[e.field] = t,
						"data-pc-link": e.field
					}, [(H(!0), U(V, null, B(e.options, (e) => (H(), U("option", {
						key: e.value,
						value: e.value
					}, k(e.label), 9, Rw))), 128))], 8, Lw), [[Jo, i[e.field]]]),
					e.value ? (H(), U("button", {
						key: 0,
						type: "button",
						"data-pc-action": "open-link",
						"data-type": e.type,
						"data-id": e.value
					}, k(e.available ? "Перейти к материалу" : "Материал недоступен") + " ↗ ", 9, zw)) : K("", !0)
				]))), 128))]),
				o[14] ||= W("button", {
					type: "button",
					class: "sbpc-main-btn",
					"data-pc-action": "save-links"
				}, "Сохранить связи", -1)
			]),
			W("section", Bw, [
				W("header", Vw, [o[15] ||= W("h3", null, "Аранжировка для этой песни", -1), W("span", null, k(e.model.arrangement.count ? e.model.arrangement.count + " блоков сохранено" : "Снимок ещё не сохранён"), 1)]),
				o[18] ||= W("p", { class: "sbpc-help" }, "Конструктор Suno Studio использует текущий рабочий черновик. Сохрани его сюда отдельно для песни; восстановление выполняется только по твоей команде.", -1),
				W("div", Hw, [
					o[16] ||= W("button", {
						type: "button",
						"data-pc-action": "capture-arrangement"
					}, "Сохранить текущую аранжировку", -1),
					e.model.arrangement.count ? (H(), U("button", Uw, "Восстановить в Studio")) : K("", !0),
					o[17] ||= W("button", {
						type: "button",
						"data-pc-action": "open-stage",
						"data-step": "arrangement"
					}, "Открыть аранжировщик ↗", -1)
				]),
				e.model.arrangement.count ? (H(), U("p", Ww, " Сохранено: " + k(e.model.arrangement.savedAt) + " · " + k(e.model.arrangement.count) + " блоков · " + k(e.model.arrangement.duration || "длительность не рассчитана"), 1)) : K("", !0)
			]),
			W("section", Gw, [
				W("header", Kw, [o[19] ||= W("h3", null, "История работы", -1), W("span", null, k(e.model.history.length) + " событий", 1)]),
				o[20] ||= W("div", { class: "sbpc-log-input" }, [W("input", {
					id: "sbpc-history-note",
					type: "text",
					maxlength: "350",
					placeholder: "Добавить запись: что изменилось или что сделать дальше"
				}), W("button", {
					type: "button",
					"data-pc-action": "add-note"
				}, "Добавить")], -1),
				e.model.history.length ? (H(), U("ol", qw, [(H(!0), U(V, null, B(e.model.history, (e, t) => (H(), U("li", { key: t }, [W("time", null, k(e.date), 1), W("span", null, k(e.text), 1)]))), 128))])) : (H(), U("p", Jw, "История пока пуста."))
			])
		]));
	}
};
// src/vue/producer/legacyProducerSongDetailBridge.js
function Xw({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_PRODUCER_DETAIL, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Z({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-producer-detail[data-sb-vue-producer-host]"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, Yw, { model: n })
	});
}
// src/vue/account/TrackPassportList.vue
var Zw = {
	key: 0,
	class: "sb-track-disclaimer",
	"data-sb-vue-master-recap": ""
}, Qw = {
	class: "sb-track-filters",
	role: "group",
	"aria-label": "Фильтр паспортов по этапу"
}, $w = ["data-filter", "aria-pressed"], eT = {
	key: 1,
	class: "sb-track-list"
}, tT = ["data-id"], nT = {
	key: 2,
	class: "sb-track-empty"
}, rT = {
	__name: "TrackPassportList",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = Q();
		return R(() => t.model, (e) => n.publishPassportListSummary(e), { immediate: !0 }), (t, r) => (H(), U(V, null, [
			I(n).masterListSummary.ready ? (H(), U("p", Zw, " В Мастере: " + k(I(n).masterListSummary.workCount) + " песен в работе · " + k(I(n).masterListSummary.finishedCount) + " маршрутов полностью пройдено ", 1)) : K("", !0),
			W("div", Qw, [(H(!0), U(V, null, B(e.model.filters, (t) => (H(), U("button", {
				key: t.key,
				type: "button",
				"data-action": "tp-filter",
				"data-filter": t.key,
				class: O({ active: e.model.active === t.key }),
				"aria-pressed": e.model.active === t.key
			}, k(t.label), 11, $w))), 128))]),
			e.model.records.length ? (H(), U("div", eT, [(H(!0), U(V, null, B(e.model.records, (e) => (H(), U("button", {
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
			], 8, tT))), 128))])) : (H(), U("div", nT, k(e.model.hasRecords ? "В этой категории пока нет треков." : "Паспортов пока нет. Создай первый, чтобы объединить материалы песни."), 1))
		], 64));
	}
};
// src/vue/account/legacyTrackPassportListBridge.js
function iT({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_TRACK_LIST, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Z({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-track-list[data-sb-vue-track-list]"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, rT, { model: n })
	});
}
// src/vue/account/TrackPassportDetail.vue
var aT = {
	class: "sb-track-detail",
	"data-sb-vue-track-detail-view": ""
}, oT = {
	key: 0,
	class: "sb-track-disclaimer",
	"data-sb-vue-master-detail-recap": ""
}, sT = { class: "sb-track-buttons" }, cT = ["data-id"], lT = ["data-id"], uT = ["data-id"], dT = { class: "sb-track-hero" }, fT = { class: "sb-track-cover" }, pT = ["src"], mT = { class: "sb-track-phase" }, hT = { class: "sb-track-facts" }, gT = { class: "sb-track-buttons" }, _T = ["href"], vT = ["href"], yT = { class: "sb-track-linkgrid" }, bT = ["data-action", "data-id"], xT = {
	key: 1,
	class: "sb-track-linked sb-track-linked-empty"
}, ST = ["data-action", "data-id"], CT = {
	key: 3,
	class: "sb-track-linked sb-track-linked-empty"
}, wT = ["data-action", "data-id"], TT = {
	key: 5,
	class: "sb-track-linked sb-track-linked-empty"
}, ET = { class: "sb-track-section" }, DT = { key: 0 }, OT = ["href"], kT = [
	"data-id",
	"data-version",
	"aria-label"
], AT = {
	key: 2,
	class: "sb-track-disclaimer"
}, jT = { class: "sb-track-versionform" }, MT = ["data-id"], NT = {
	__name: "TrackPassportDetail",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = Q();
		return R(() => t.model, (e) => n.publishPassportDetailSummary(e), { immediate: !0 }), (t, r) => (H(), U("div", aT, [
			I(n).masterDetailSummary.ready ? (H(), U("p", oT, " Последняя карточка Мастера: " + k(I(n).masterDetailSummary.done) + " из " + k(I(n).masterDetailSummary.total) + " этапов · " + k(I(n).masterDetailSummary.linkedCount) + " из 6 связей ", 1)) : K("", !0),
			W("div", sT, [
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
				}, "Изменить", 8, cT),
				W("button", {
					type: "button",
					class: "btn ghost small",
					"data-action": "tp-event",
					"data-id": e.model.id
				}, "В календарь релизов", 8, lT),
				W("button", {
					type: "button",
					class: "btn danger small",
					"data-action": "tp-delete",
					"data-id": e.model.id
				}, "Удалить", 8, uT)
			]),
			W("div", dT, [W("div", fT, [e.model.cover ? (H(), U("img", {
				key: 0,
				src: e.model.cover,
				alt: "Обложка",
				loading: "lazy"
			}, null, 8, pT)) : (H(), U(V, { key: 1 }, [G("♫")], 64))]), W("div", null, [
				W("span", mT, k(e.model.phase), 1),
				W("h2", null, k(e.model.title), 1),
				W("p", null, k(e.model.artist), 1)
			])]),
			W("div", hT, [(H(!0), U(V, null, B(e.model.facts, (e) => (H(), U("div", {
				key: e.label,
				class: "sb-track-fact"
			}, [W("span", null, k(e.label), 1), W("strong", null, k(e.value || "Не указано"), 1)]))), 128))]),
			W("div", gT, [e.model.audio ? (H(), U("a", {
				key: 0,
				class: "btn ghost",
				href: e.model.audio,
				rel: "noopener noreferrer",
				target: "_blank"
			}, "Прослушать ↗", 8, _T)) : K("", !0), e.model.cover ? (H(), U("a", {
				key: 1,
				class: "btn ghost",
				href: e.model.cover,
				rel: "noopener noreferrer",
				target: "_blank"
			}, "Обложка ↗", 8, vT)) : K("", !0)]),
			r[8] ||= W("h3", { class: "sb-track-section" }, "Связанные материалы", -1),
			W("div", yT, [
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
				], 8, bT)) : (H(), U("div", xT, [W("small", null, k(e.model.links[0].label), 1), r[2] ||= W("strong", null, "Не привязан", -1)])),
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
				], 8, ST)) : (H(), U("div", CT, [W("small", null, k(e.model.links[1].label), 1), r[4] ||= W("strong", null, "Не привязан", -1)])),
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
				], 8, wT)) : (H(), U("div", TT, [W("small", null, k(e.model.links[2].label), 1), r[6] ||= W("strong", null, "Не привязан", -1)]))
			]),
			(H(!0), U(V, null, B(e.model.sections, (e) => (H(), U("section", {
				key: e.label,
				class: "sb-track-sectionbox"
			}, [W("h3", null, k(e.label), 1), W("pre", null, k(e.text), 1)]))), 128)),
			W("h3", ET, "Версии трека (" + k(e.model.versions.length) + ")", 1),
			e.model.versions.length ? (H(!0), U(V, { key: 1 }, B(e.model.versions, (t) => (H(), U("div", {
				key: t.id,
				class: "sb-track-version"
			}, [W("div", null, [
				W("strong", null, k(t.label), 1),
				W("small", null, k(t.date), 1),
				t.notes ? (H(), U("p", DT, k(t.notes), 1)) : K("", !0)
			]), W("div", null, [t.url ? (H(), U("a", {
				key: 0,
				href: t.url,
				rel: "noopener noreferrer",
				target: "_blank"
			}, "Прослушать ↗", 8, OT)) : K("", !0), W("button", {
				type: "button",
				class: "btn danger small",
				"data-action": "tp-version-remove",
				"data-id": e.model.id,
				"data-version": t.id,
				"aria-label": "Удалить версию " + t.label
			}, "×", 8, kT)])]))), 128)) : (H(), U("p", AT, "Версий пока нет.")),
			W("div", jT, [r[7] ||= Sa("<div class=\"field\"><label for=\"tp-version-title\">Название новой версии</label><input id=\"tp-version-title\" maxlength=\"100\" placeholder=\"Демо 2 / Финальный мастер\"></div><div class=\"field\"><label for=\"tp-version-url\">Ссылка (HTTPS)</label><input id=\"tp-version-url\" type=\"url\" maxlength=\"2000\" placeholder=\"https://…\"></div><div class=\"field\"><label for=\"tp-version-notes\">Что изменилось?</label><input id=\"tp-version-notes\" maxlength=\"300\" placeholder=\"Необязательно\"></div>", 3), W("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "tp-version-add",
				"data-id": e.model.id
			}, "+ Добавить версию", 8, MT)]),
			r[9] ||= W("p", { class: "sb-track-disclaimer" }, " Связанный текст и промпт показываются из оригинальных разделов. Расчётные даты — ориентир, окончательная дата определяется издательством. ", -1)
		]));
	}
};
// src/vue/account/legacyTrackPassportDetailBridge.js
function PT({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_TRACK_DETAIL, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Z({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-track-detail[data-sb-vue-track-detail]"),
		readSnapshot: () => t.snapshot(),
		mount: (t, n) => e(t, NT, { model: n })
	});
}
// src/vue/account/TrackPassportEditor.vue
var FT = {
	id: "sb-track-form",
	class: "panel sb-track-form",
	"data-sb-vue-track-editor-view": ""
}, IT = { class: "sb-track-formhead" }, LT = { class: "sb-track-fields" }, RT = ["for"], zT = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"placeholder"
], BT = { class: "field" }, VT = ["value"], HT = { class: "field" }, UT = ["value"], WT = { class: "field" }, GT = ["value"], KT = { class: "field" }, qT = ["value"], JT = { class: "field" }, YT = ["value"], XT = { class: "field" }, ZT = { class: "sb-track-fields" }, QT = { class: "field" }, $T = { class: "field" }, eE = ["disabled"], tE = { class: "sb-track-manual" }, nE = {
	id: "tp-date-hint",
	class: "sb-track-hint"
}, rE = { class: "sb-track-fields" }, iE = ["for"], aE = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"placeholder"
], oE = ["for"], sE = [
	"id",
	"onUpdate:modelValue",
	"maxlength",
	"rows"
], cE = {
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
		return (t, r) => (H(), U("div", FT, [
			W("div", IT, [W("h2", null, k(e.model.editing ? "Редактировать паспорт" : "Новый паспорт трека"), 1), r[9] ||= W("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "tp-cancel"
			}, "Закрыть", -1)]),
			W("div", LT, [
				(H(!0), U(V, null, B(o.slice(0, 2), (e) => (H(), U("div", {
					key: e.id,
					class: "field"
				}, [W("label", { for: "tp-" + e.id }, k(e.label), 9, RT), L(W("input", {
					id: "tp-" + e.id,
					"onUpdate:modelValue": (t) => n[e.id] = t,
					maxlength: e.max,
					placeholder: e.placeholder
				}, null, 8, zT), [[J, n[e.id]]])]))), 128)),
				W("div", BT, [r[10] ||= W("label", { for: "tp-status" }, "Этап работы", -1), L(W("select", {
					id: "tp-status",
					"onUpdate:modelValue": r[0] ||= (e) => n.status = e
				}, [(H(!0), U(V, null, B(e.model.stages, (e) => (H(), U("option", {
					key: e.value,
					value: e.value
				}, k(e.label), 9, VT))), 128))], 512), [[Jo, n.status]])]),
				W("div", HT, [r[11] ||= W("label", { for: "tp-genre" }, "Жанр", -1), L(W("select", {
					id: "tp-genre",
					"onUpdate:modelValue": r[1] ||= (e) => n.genre = e
				}, [(H(!0), U(V, null, B(e.model.genres, (e) => (H(), U("option", {
					key: e.value,
					value: e.value
				}, k(e.label), 9, UT))), 128))], 512), [[Jo, n.genre]])]),
				W("div", WT, [r[13] ||= W("label", { for: "tp-project" }, "Мой проект / артист", -1), L(W("select", {
					id: "tp-project",
					"onUpdate:modelValue": r[2] ||= (e) => n.project = e
				}, [r[12] ||= W("option", { value: "" }, "Без связи", -1), (H(!0), U(V, null, B(e.model.projects, (e) => (H(), U("option", {
					key: e.value,
					value: e.value
				}, k(e.label), 9, GT))), 128))], 512), [[Jo, n.project]])]),
				W("div", KT, [r[15] ||= W("label", { for: "tp-idea" }, "Идея и текст песни", -1), L(W("select", {
					id: "tp-idea",
					"onUpdate:modelValue": r[3] ||= (e) => n.idea = e
				}, [r[14] ||= W("option", { value: "" }, "Без связи", -1), (H(!0), U(V, null, B(e.model.ideas, (e) => (H(), U("option", {
					key: e.value,
					value: e.value
				}, k(e.label), 9, qT))), 128))], 512), [[Jo, n.idea]])]),
				W("div", JT, [r[17] ||= W("label", { for: "tp-prompt" }, "Мой промпт Suno", -1), L(W("select", {
					id: "tp-prompt",
					"onUpdate:modelValue": r[4] ||= (e) => n.prompt = e
				}, [r[16] ||= W("option", { value: "" }, "Без связи", -1), (H(!0), U(V, null, B(e.model.prompts, (e) => (H(), U("option", {
					key: e.value,
					value: e.value
				}, k(e.label), 9, YT))), 128))], 512), [[Jo, n.prompt]])]),
				W("div", XT, [r[18] ||= W("label", { for: "tp-publisher" }, "Издательство / дистрибьютор", -1), L(W("input", {
					id: "tp-publisher",
					"onUpdate:modelValue": r[5] ||= (e) => n.publisher = e,
					maxlength: "120",
					placeholder: "Название издательства"
				}, null, 512), [[J, n.publisher]])])
			]),
			r[22] ||= W("h3", { class: "sb-track-section" }, "Даты релиза", -1),
			W("div", ZT, [W("div", QT, [r[19] ||= W("label", { for: "tp-submitted" }, "Передано издательству", -1), L(W("input", {
				id: "tp-submitted",
				"onUpdate:modelValue": r[6] ||= (e) => n.submitted = e,
				type: "date",
				onChange: a
			}, null, 544), [[J, n.submitted]])]), W("div", $T, [
				r[21] ||= W("label", { for: "tp-release" }, "Дата выхода", -1),
				L(W("input", {
					id: "tp-release",
					"onUpdate:modelValue": r[7] ||= (e) => n.release = e,
					type: "date",
					disabled: !n.override
				}, null, 8, eE), [[J, n.release]]),
				W("label", tE, [L(W("input", {
					id: "tp-override",
					"onUpdate:modelValue": r[8] ||= (e) => n.override = e,
					type: "checkbox",
					onChange: a
				}, null, 544), [[Ko, n.override]]), r[20] ||= G(" Установить дату вручную ", -1)])
			])]),
			W("p", nE, k(i.value), 1),
			r[23] ||= W("h3", { class: "sb-track-section" }, "Материалы и метаданные", -1),
			W("div", rE, [(H(), U(V, null, B(s, (e) => W("div", {
				key: e.id,
				class: "field"
			}, [W("label", { for: "tp-" + e.id }, k(e.label), 9, iE), L(W("input", {
				id: "tp-" + e.id,
				"onUpdate:modelValue": (t) => n[e.id] = t,
				maxlength: e.max,
				placeholder: e.placeholder
			}, null, 8, aE), [[J, n[e.id]]])])), 64))]),
			(H(), U(V, null, B(c, (e) => W("div", {
				key: e.id,
				class: "field"
			}, [W("label", { for: "tp-" + e.id }, k(e.label), 9, oE), L(W("textarea", {
				id: "tp-" + e.id,
				"onUpdate:modelValue": (t) => n[e.id] = t,
				maxlength: e.max,
				rows: e.rows
			}, null, 8, sE), [[J, n[e.id]]])])), 64)),
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
function lE({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_TRACK_EDITOR, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Z({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-track-editor[data-sb-vue-track-editor]"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, cE, {
			model: r,
			api: t
		})
	});
}
// src/vue/poetry/IdeaFields.vue
var uE = { class: "field" }, dE = { class: "field" }, fE = ["value"], pE = { class: "field" }, mE = {
	class: "sub",
	"data-sb-vue-idea-draft-progress": ""
}, hE = {
	key: 0,
	class: "sub",
	"data-sb-vue-last-prompt-draft": ""
}, gE = { class: "field" }, _E = {
	__name: "IdeaFields",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = /* @__PURE__ */ j({ ...e.initial.values }), n = Q();
		return R(() => [
			t.title,
			t.genre,
			t.text,
			t.hook
		], () => n.publishIdeaDraftSummary(t), { immediate: !0 }), (r, i) => (H(), U(V, null, [
			W("div", uE, [i[4] ||= W("label", { for: "custom-idea-title" }, "Название песни", -1), L(W("input", {
				id: "custom-idea-title",
				"onUpdate:modelValue": i[0] ||= (e) => t.title = e,
				maxlength: "100",
				placeholder: "Например, Город на ладони"
			}, null, 512), [[J, t.title]])]),
			W("div", dE, [i[5] ||= W("label", { for: "custom-idea-genre" }, "Музыкальный жанр", -1), L(W("select", {
				id: "custom-idea-genre",
				"onUpdate:modelValue": i[1] ||= (e) => t.genre = e
			}, [(H(!0), U(V, null, B(e.initial.genres, (e) => (H(), U("option", {
				key: e.id,
				value: e.id
			}, k(e.name), 9, fE))), 128))], 512), [[Jo, t.genre]])]),
			W("div", pE, [i[6] ||= W("label", { for: "custom-idea-text" }, "Сюжет и основная идея", -1), L(W("textarea", {
				id: "custom-idea-text",
				"onUpdate:modelValue": i[2] ||= (e) => t.text = e,
				rows: "5",
				maxlength: "3000",
				placeholder: "О чём песня и что происходит с героем?"
			}, null, 512), [[J, t.text]])]),
			W("p", mE, "Сюжет: " + k(I(n).ideaDraftSummary.ideaLength) + " / 3000 · Название: " + k(I(n).ideaDraftSummary.titleLength) + " / 100", 1),
			I(n).promptDraftSummary.ready ? (H(), U("p", hE, "Последний открытый черновик промпта: " + k(I(n).promptDraftSummary.textLength) + " / 1000 символов", 1)) : K("", !0),
			W("div", gE, [i[7] ||= W("label", { for: "custom-idea-hook" }, "Фраза для припева (необязательно)", -1), L(W("input", {
				id: "custom-idea-hook",
				"onUpdate:modelValue": i[3] ||= (e) => t.hook = e,
				maxlength: "240",
				placeholder: "Запоминающаяся строчка"
			}, null, 512), [[J, t.hook]])])
		], 64));
	}
}, vE = {
	key: 0,
	class: "sub",
	"data-sb-vue-poetry-source-count": ""
}, yE = {
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
		}), Mr(() => document.removeEventListener("click", a)), (t, a) => (H(), U(V, null, [
			a[1] ||= W("label", { for: "custom-idea-lyrics" }, "Оригинальный текст (необязательно)", -1),
			a[0] || (da(-1, !0), (a[0] = W("textarea", {
				id: "custom-idea-lyrics",
				ref_key: "area",
				ref: n,
				value: e.initial.values.lyrics,
				onInput: i,
				rows: "12",
				maxlength: "20000",
				placeholder: "Куплет 1:\nТекст первого куплета...\n\nПрипев:\nТекст припева..."
			}, null, 40, ["value"])).cacheIndex = 0, da(1), a[0]),
			I(r).poetrySourceSummary.ready ? (H(), U("p", vE, " Исходный текст: " + k(I(r).poetrySourceSummary.charCount) + " / 20000 символов · " + k(I(r).poetrySourceSummary.lineCount) + " непустых строк ", 1)) : K("", !0)
		], 64));
	}
}, bE = {
	key: 0,
	class: "workbench-note",
	"data-sb-vue-poetry-tools-count": ""
}, xE = {
	key: 1,
	class: "workbench-note",
	"data-sb-vue-poetry-analysis-count": ""
}, SE = {
	key: 2,
	class: "workbench-note",
	"data-sb-vue-poetry-ambiguity-count": ""
}, CE = {
	key: 3,
	class: "workbench-note",
	"data-sb-vue-tags-summary": ""
}, wE = {
	key: 0,
	"data-sb-vue-tags-freshness": "",
	role: "status"
}, TE = { key: 0 }, EE = { key: 1 }, DE = { key: 2 }, OE = { class: "field" }, kE = ["value"], AE = { class: "workbench-switches" }, jE = ["id", "onUpdate:modelValue"], ME = { class: "field" }, NE = { class: "detail-actions" }, PE = {
	type: "button",
	class: "btn ghost",
	"data-action": "copy-current-lyrics"
}, FE = ["innerHTML"], IE = { class: "field" }, LE = { class: "detail-actions" }, RE = {
	type: "button",
	class: "btn ghost",
	"data-action": "copy-current-style"
}, zE = ["innerHTML"], BE = {
	__name: "LyricsTools",
	props: { initial: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ j({ ...t.initial.values }), r = /* @__PURE__ */ j({ ...t.initial.switches }), i = Q(), a = {
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
			I(i).poetrySourceSummary.ready ? (H(), U("p", bE, " Исходник для аранжировки: " + k(I(i).poetrySourceSummary.lineCount) + " строк, " + k(I(i).poetrySourceSummary.wordCount) + " слов ", 1)) : K("", !0),
			I(i).poetryAnalysisSummary.analyzed ? (H(), U("p", xE, " Последний анализ: " + k(I(i).poetryAnalysisSummary.rowCount) + " строк · " + k(I(i).poetryAnalysisSummary.stressMarkCount) + " меток ударения · " + k(I(i).poetryAnalysisSummary.suggestionCount) + " рекомендаций ", 1)) : K("", !0),
			I(i).poetryAmbiguitySummary.ready ? (H(), U("p", SE, " Предпросмотр ударений: " + k(I(i).poetryAmbiguitySummary.occurrenceCount) + " неоднозначных вхождений · " + k(I(i).poetryAmbiguitySummary.distinctCount) + " разных слов ", 1)) : K("", !0),
			I(i).performanceTagsSummary.ready ? (H(), U("p", CE, [G(" Теги исполнения: " + k(a[I(i).performanceTagsSummary.mode]) + " · интенсивность " + k(I(i).performanceTagsSummary.intensity) + "/5 · " + k(I(i).performanceTagsSummary.enabledTechniques) + " приёмов · " + k(I(i).performanceTagsSummary.busy ? "идёт генерация" : I(i).performanceTagsSummary.previewOpen ? I(i).performanceTagsSummary.sectionCount + " секций в предпросмотре" : "предпросмотр закрыт") + " ", 1), I(i).performanceTagsSummary.previewOpen ? (H(), U("span", wE, [
				G(" · " + k(I(i).performanceTagsSummary.previewFresh ? "Текст и настройки не изменены; проверь теги перед применением." : "Предпросмотр устарел — создай новый.") + " ", 1),
				I(i).performanceTagsSummary.sourceChanged ? (H(), U("span", TE, " Изменён исходник.")) : K("", !0),
				I(i).performanceTagsSummary.targetChanged ? (H(), U("span", EE, " Изменено готовое поле Lyrics.")) : K("", !0),
				I(i).performanceTagsSummary.settingsChanged ? (H(), U("span", DE, " Изменены настройки.")) : K("", !0)
			])) : K("", !0)])) : K("", !0),
			W("div", OE, [c[3] ||= W("label", { for: "lyrics-tag-preset" }, "Характер аранжировки", -1), L(W("select", {
				id: "lyrics-tag-preset",
				"onUpdate:modelValue": c[0] ||= (e) => n.preset = e
			}, [(H(), U(V, null, B(o, ([e, t]) => W("option", {
				key: e,
				value: e
			}, k(t), 9, kE)), 64))], 512), [[Jo, n.preset]])]),
			W("div", AE, [(H(), U(V, null, B(s, ([e, t]) => W("label", { key: e }, [L(W("input", {
				id: "lyrics-" + e,
				"onUpdate:modelValue": (t) => r[e] = t,
				type: "checkbox"
			}, null, 8, jE), [[Ko, r[e]]]), G(" " + k(t), 1)])), 64))]),
			c[8] ||= W("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "format-idea-lyrics"
			}, "✨ Создать теги и усилители", -1),
			c[9] ||= W("p", { class: "workbench-note" }, "Разметка примерная: если в тексте нет названий секций, куплеты и припевы определяются по абзацам. Проверь расположение тегов перед копированием.", -1),
			W("div", ME, [c[4] ||= W("label", { for: "custom-idea-tagged" }, "Готовая версия для поля Lyrics в Suno (можно исправить вручную)", -1), L(W("textarea", {
				id: "custom-idea-tagged",
				"onUpdate:modelValue": c[1] ||= (e) => n.tagged = e,
				rows: "13",
				maxlength: "25000",
				placeholder: "[Verse 1]\n...\n\n[Chorus - powerful melodic hook]\n..."
			}, null, 512), [[J, n.tagged]])]),
			W("div", NE, [W("button", PE, [W("span", { innerHTML: e.initial.copyIcon }, null, 8, FE), c[5] ||= G(" Копировать Lyrics", -1)])]),
			W("div", IE, [c[6] ||= W("label", { for: "custom-idea-style" }, "Дополнительное описание для поля Style (до 1000 символов)", -1), L(W("textarea", {
				id: "custom-idea-style",
				"onUpdate:modelValue": c[2] ||= (e) => n.style = e,
				rows: "4",
				maxlength: "1000",
				placeholder: "Описание жанра, вокала и динамики для Suno"
			}, null, 512), [[J, n.style]])]),
			W("div", LE, [W("button", RE, [W("span", { innerHTML: e.initial.copyIcon }, null, 8, zE), c[7] ||= G(" Копировать Style", -1)])])
		], 64));
	}
};
// src/vue/poetry/legacyIdeaEditorBridge.js
function VE({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_IDEA_EDITOR, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Ed({
		root: n,
		islands: [
			["sb-vue-idea-fields", _E],
			["sb-vue-lyrics-source", yE],
			["sb-vue-lyrics-tools", BE]
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
function HE({ sharedUi: e }) {
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
var UE = {
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
		return (t, n) => (H(), pa(Br(e.component), ge(ba(e.componentProps)), null, 16));
	}
}, WE = [
	"data-nav",
	"data-vue-router-path",
	"aria-current",
	"aria-label",
	"title",
	"onClick"
], GE = ["innerHTML"], KE = { class: "sb-vue-nav-label" }, qE = {
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
		let t = hl(), n = ml(), r = Q(), i = e, a = q(() => r.navigationItems.length ? r.navigationItems : i.items);
		function o(e) {
			i.onNavigate(e, n);
		}
		let s = (e) => {
			if (window.SUNOBOOM_SHELL?.active) {
				let n = vu(t.fullPath).nav;
				return (n === "detail" ? "catalog" : n === "sharedSong" ? "songs" : [
					"projects",
					"saved",
					"myideas",
					"myprompts",
					"events",
					"tracks",
					"artists"
				].includes(n) ? "account" : n) === e;
			}
			let n = r.route;
			return (t.path === vl(n.route) ? yl(t.path) : n.active) === e;
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
		}, null, 8, GE), W("span", KE, k(e.mobile ? n.shortLabel : n.label), 1)], 10, WE))), 128));
	}
}, JE = {
	class: "sb-vue-history-toolbar",
	role: "group",
	"aria-label": "История разделов SUNOBOOM"
}, YE = ["disabled"], XE = ["disabled"], ZE = /*#__PURE__*/ Cg({
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
		let t = e, n = hl(), r = Q(), i = /* @__PURE__ */ P(!1), a = q(() => (n.path, n.fullPath, r.route.revision, kl.value, {
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
		return (e, t) => (H(), U("div", JE, [
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
			}, [W("path", { d: "m15 18-6-6 6-6" })], -1)]], 8, YE),
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
			}, [W("path", { d: "m9 18 6-6-6-6" })], -1)]], 8, XE)
		]));
	}
}, [["__scopeId", "data-v-9c07a682"]]), QE = Object.freeze({
	"/account/myideas": "myideas",
	"/account/myprompts": "myprompts",
	"/account/events": "events"
});
function $E(e) {
	if (e?.active === "producer" && e?.production?.id) return vl("producer", {
		kind: "production",
		id: e.production.id
	});
	let t = e?.track;
	return vl(e?.active, t?.id ? {
		kind: "track",
		id: t.id
	} : null);
}
function eD(e, t) {
	if (!e || typeof t?.snapshot != "function") return null;
	let n = t.snapshot();
	if (n?.trackEditing) return null;
	let r = Rl(e.path);
	if (r && n?.items?.some((e) => e?.id === r)) return {
		kind: "menu",
		id: r
	};
	let i = QE[e.path];
	if (i && typeof t.navigateWorkspace == "function") return {
		kind: "workspace",
		id: i
	};
	let a = e.context;
	return e.path === "/catalog/detail" && a?.kind === "genre" && typeof t.canRestoreGenre == "function" && t.canRestoreGenre(a.id, a.tab) && typeof t.restoreGenre == "function" ? {
		kind: "genre",
		id: a.id,
		tab: a.tab
	} : a?.kind === "production" && e.path === vl("producer", a) && t.canRestoreProduction?.(a.id) === !0 && typeof t.restoreProduction == "function" ? {
		kind: "production",
		id: a.id
	} : e.path === "/account/tracks" && t.canRestoreTrackList?.() === !0 && typeof t.restoreTrackList == "function" ? { kind: "track-list" } : e.path === "/account/tracks/detail" && a?.kind === "track" && t.canRestoreTrack?.(a.id) === !0 && typeof t.restoreTrack == "function" ? {
		kind: "track",
		id: a.id
	} : null;
}
var tD = !1;
function nD(e, { legacyApi: t } = {}) {
	if (tD || !["back", "forward"].includes(e) || typeof t?.snapshot != "function") return !1;
	let n = Ll(e), r = t.snapshot();
	return !!eD(n, t) && Hl().path === $E(r);
}
async function rD(e, { legacyApi: t, syncRoute: n = ch } = {}) {
	if (tD || !["back", "forward"].includes(e) || !t || typeof t.snapshot != "function" || typeof t.navigate != "function") return !1;
	tD = !0;
	try {
		await Bl();
		let r = eD(Ll(e), t), i = t.snapshot();
		if (!r || Hl().path !== $E(i) || !await Vl(e)) return !1;
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
		tD = !1;
	}
}
// src/vue/navigation/legacyBridge.js
var iD = [{
	key: "sidebar",
	selector: "[data-sb-vue-sidebar]",
	mobile: !1
}, {
	key: "mobile",
	selector: "[data-sb-vue-mobile]",
	mobile: !0
}];
function aD({ mountVueFeature: e, unmountVueFeature: t, sharedUi: n }) {
	let r = window.SUNOBOOM_LEGACY_NAV, i = document.getElementById("app");
	if (!r || !i || typeof r.snapshot != "function") return () => {};
	let a = () => {}, o = [], s, c = !1;
	window.SUNOBOOM_VUE_ROUTE = Object.freeze({
		snapshot: () => sh.value,
		routerSnapshot: () => Hl(),
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
		back: () => window.SUNOBOOM_SHELL?.active ? window.SUNOBOOM_SHELL.back() : rD("back", { legacyApi: r }),
		forward: () => window.SUNOBOOM_SHELL?.active ? window.SUNOBOOM_SHELL.forward() : rD("forward", { legacyApi: r }),
		recordGenre: (e, t, n = "push") => {
			let i = r.snapshot();
			return i.active !== "detail" || i.detail?.id !== e || i.detail?.tab !== t || !r.canRestoreGenre?.(e, t) ? !1 : (window.SUNOBOOM_SHELL?.recordCurrent(n), ch("detail", {
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
			return n.active !== "producer" || n.production?.id !== e || !r.canRestoreProduction?.(e) ? !1 : (window.SUNOBOOM_SHELL?.recordCurrent(t), ch("producer", {
				historyMode: t,
				context: {
					kind: "production",
					id: e
				}
			}), !0);
		},
		recordTrackList: () => {
			let e = r.snapshot();
			return e.active !== "tracks" || e.track?.id || e.trackEditing ? !1 : (ch("tracks"), !0);
		},
		recordTrack: (e, t = "push") => {
			let n = r.snapshot();
			return n.active !== "tracks" || n.track?.id !== e || n.trackEditing || !r.canRestoreTrack?.(e) ? !1 : (window.SUNOBOOM_SHELL?.recordCurrent(t), ch("tracks", {
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
		ch(e.active, { context: e.track?.id ? {
			kind: "track",
			id: e.track.id
		} : e.active === "producer" && e.production?.id ? {
			kind: "production",
			id: e.production.id
		} : null }), o = ah(e), n.publishNavigation(o), s = JSON.stringify(o.map(({ active: e, ...t }) => t));
	}
	let u = r.snapshot();
	return ch(u.active, { context: u.track?.id ? {
		kind: "track",
		id: u.track.id
	} : u.active === "producer" && u.production?.id ? {
		kind: "production",
		id: u.production.id
	} : null }), Bl().then(() => {
		c || (a = Ed({
			root: i,
			beforeSync: l,
			islands: [{
				key: "history",
				selectTarget: (e) => e.querySelector("[data-sb-vue-history]"),
				readSnapshot: () => r,
				mount: (t) => e(t, ZE, {
					canRestore: (e) => window.SUNOBOOM_SHELL?.active ? window.SUNOBOOM_SHELL.canGo(e) : nD(e, { legacyApi: r }),
					onRestore: (e) => window.SUNOBOOM_SHELL?.active ? window.SUNOBOOM_SHELL[e]() : rD(e, { legacyApi: r })
				}, { vueRouter: !0 })
			}, ...iD.map(({ key: t, selector: n, mobile: i }) => ({
				key: t,
				selectTarget: (e) => e.querySelector(n),
				readRevision: () => s,
				readSnapshot: () => o,
				mount: (t, n) => e(t, qE, {
					items: n,
					mobile: i,
					onNavigate: (e, t) => L_(e, {
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
var oD = { class: "breadcrumbs" }, sD = {
	class: "brand-mobile",
	style: { display: "none" }
}, cD = { class: "sb-logo-lockup" }, lD = ["src"], uD = ["aria-label"], dD = { class: "top-right" }, fD = ["aria-label"], pD = [
	"aria-label",
	"aria-expanded",
	"title"
], mD = ["aria-hidden"], hD = {
	class: "avatar account-shortcut",
	type: "button",
	title: "Личный кабинет",
	"aria-label": "Открыть личный кабинет",
	"data-action": "nav",
	"data-nav": "account"
}, gD = {
	__name: "TopHeader",
	props: { model: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (H(), U(V, null, [
			W("div", oD, [n[0] ||= G("Рабочее пространство / ", -1), W("b", null, k(e.model.breadcrumb), 1)]),
			W("div", sD, [W("div", cD, [W("img", {
				class: "sb-mobile-logo",
				src: e.model.logoSrc,
				alt: "SUNOBOOM — фирменный логотип"
			}, null, 8, lD), n[1] ||= W("span", { class: "sb-brand-tagline" }, "Больше, чем музыка", -1)]), W("button", {
				type: "button",
				class: "sb-app-version sb-version-trigger",
				"aria-label": "Версия SUNOBOOM " + e.model.version + " — открыть историю обновлений",
				"aria-haspopup": "dialog",
				title: "История версий SUNOBOOM"
			}, "v" + k(e.model.version), 9, uD)]),
			W("div", dD, [
				n[3] ||= W("span", { class: "pill sb-prototype-pill" }, "🧪 Прототип", -1),
				W("button", {
					type: "button",
					class: "sb-app-version sb-version-trigger",
					"aria-label": "Версия SUNOBOOM " + e.model.version + " — открыть историю обновлений",
					"aria-haspopup": "dialog",
					title: "История версий SUNOBOOM"
				}, "v" + k(e.model.version), 9, fD),
				W("button", {
					type: "button",
					class: O(["sb-notice-bell", { "sb-notice-bell-unread": e.model.unreadCount > 0 }]),
					"data-action": "sb-notice-toggle",
					"aria-label": e.model.unreadCount ? "Уведомления, непрочитанных: " + e.model.unreadCount : "Уведомления, демонстрация счётчика уведомлений",
					"aria-expanded": String(e.model.noticeOpen),
					title: e.model.unreadCount ? "Напоминания о событиях" : "Пример счётчика: 3 (настоящих уведомлений пока нет)"
				}, [n[2] ||= W("span", {
					class: "sb-notice-bell-icon",
					"aria-hidden": "true"
				}, [W("svg", {
					viewBox: "0 0 24 24",
					"aria-hidden": "true"
				}, [W("path", { d: "M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" }), W("path", { d: "M10 21h4" })])], -1), W("span", {
					class: O(["sb-notice-count", { "sb-notice-count-preview": e.model.noticePreview }]),
					"aria-hidden": e.model.noticePreview ? "true" : void 0
				}, k(e.model.noticeBadge === 99 && e.model.unreadCount > 99 ? "99+" : e.model.noticeBadge), 11, mD)], 10, pD),
				n[4] ||= Sa("<button type=\"button\" class=\"sb-notice-bell sb-settings-shortcut\" data-sbs-action=\"open-top\" aria-label=\"Открыть настройки приложения\" title=\"Настройки\" aria-haspopup=\"false\"><span class=\"sb-notice-bell-icon\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M10.5 2h3l.5 2.2 1.6.7 2-1.1 2.1 2.1-1 2 .7 1.7 2.1.4v3l-2.1.5-.7 1.6 1 2-2.1 2.1-2-1-.1.1-1.5.6-.5 2.1h-3l-.5-2.1-1.6-.7-2 1-2.1-2.1 1.1-2-.7-1.6-2.2-.5v-3l2.2-.4.7-1.7-1.1-2 2.1-2.1 2 1.1 1.6-.7z\"></path><circle cx=\"12\" cy=\"11.5\" r=\"3\"></circle></svg></span></button>", 1),
				W("button", hD, k(e.model.avatarInitial), 1)
			])
		], 64));
	}
};
// src/vue/navigation/top-header-model.js
function _D(e) {
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
function vD({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_HEADER, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Z({
		root: n,
		selectTarget: (e) => e.querySelector(".top[data-sb-vue-top]"),
		readSnapshot: () => _D(t.snapshot()),
		readRevision: () => JSON.stringify(t.snapshot()),
		mount: (t, n) => e(t, gD, { model: n })
	});
}
// src/vue/academy/GenreCards.vue
var yD = ["data-id"], bD = { class: "genre-content" }, xD = { class: "kicker" }, SD = { class: "foot" }, CD = {
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
		}, null, -1), W("div", bD, [W("div", null, [
			W("div", xD, k(e.family) + " · " + k(e.bpm[0]) + "–" + k(e.bpm[1]) + " BPM", 1),
			W("h3", null, k(e.name), 1),
			W("p", null, k(e.tagline), 1)
		]), W("div", SD, [W("span", null, k(e.era), 1), n[0] ||= W("span", { style: { color: "#ffacd9" } }, "Открыть →", -1)])])], 12, yD))), 128));
	}
}, wD = ["open"], TD = {
	key: 0,
	id: "sb-ap-hub-content"
}, ED = { class: "sb-ap-heading" }, DD = { class: "sb-ap-total" }, OD = { class: "sb-ap-tools" }, kD = ["value"], AD = ["value"], jD = { class: "sb-ap-check" }, MD = ["checked"], ND = {
	id: "sb-ap-count",
	class: "sb-ap-count",
	"aria-live": "polite"
}, PD = {
	id: "sb-ap-results",
	class: "sb-ap-index-grid"
}, FD = { class: "sb-ap-index-title" }, ID = { class: "sb-ap-avatar" }, LD = { class: "sb-ap-chips" }, RD = { class: "sb-ap-card-actions" }, zD = ["data-name", "onClick"], BD = [
	"data-name",
	"aria-pressed",
	"aria-label",
	"onClick"
], VD = {
	key: 0,
	class: "sb-ap-empty"
}, HD = ["hidden"], UD = {
	__name: "ArtistProfileHub",
	props: { api: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ F(t.api.hubSnapshot());
		return Nr(t.api.subscribe(() => {
			n.value = t.api.hubSnapshot();
		})), (t, r) => (H(), U("details", {
			id: "sb-ap-hub",
			class: "sb-ap-hub",
			"data-sb-vue-profile-hub": "",
			open: n.value.open,
			onToggle: r[4] ||= (t) => e.api.setOpen(t.currentTarget.open)
		}, [r[11] ||= W("summary", null, [
			W("span", { class: "sb-ap-sym" }, "🎙️"),
			W("span", null, [W("strong", null, "Профили исполнителей"), W("small", null, "Мировая и русскоязычная сцены SUNOBOOM")]),
			W("span", { class: "sb-ap-chevron" }, "⌄")
		], -1), n.value.open ? (H(), U("div", TD, [
			W("div", ED, [r[5] ||= W("div", null, [
				W("span", { class: "sb-ap-overline" }, "SUNOBOOM · МУЗЫКАЛЬНАЯ АКАДЕМИЯ"),
				W("h2", null, "Энциклопедия исполнителей"),
				W("p", null, "Все существующие подборки артистов собраны в единый указатель. Профиль показывает сведения из Академии, а для отдельных исполнителей — расширенную редакционную справку.")
			], -1), W("div", DD, k(n.value.total) + " имён в базе", 1)]),
			W("div", OD, [
				W("label", null, [r[6] ||= G("Поиск по имени или жанру", -1), W("input", {
					id: "sb-ap-search",
					type: "search",
					placeholder: "Например: Distemper или поп",
					autocomplete: "off",
					value: n.value.query,
					onInput: r[0] ||= Y((t) => e.api.filter({ query: t.target.value }), ["stop"])
				}, null, 40, kD)]),
				W("label", null, [r[8] ||= G("Подборка", -1), W("select", {
					id: "sb-ap-locale",
					value: n.value.locale,
					onChange: r[1] ||= Y((t) => e.api.filter({ locale: t.target.value }), ["stop"])
				}, [...r[7] ||= [
					W("option", { value: "all" }, "Все сцены", -1),
					W("option", { value: "ru" }, "Русскоязычная сцена", -1),
					W("option", { value: "world" }, "Мировая сцена", -1)
				]], 40, AD)]),
				W("label", jD, [W("input", {
					id: "sb-ap-saved-only",
					type: "checkbox",
					checked: n.value.savedOnly,
					onChange: r[2] ||= Y((t) => e.api.filter({ savedOnly: t.target.checked }), ["stop"])
				}, null, 40, MD), r[9] ||= G(" Только избранные", -1)])
			]),
			W("p", ND, "Найдено " + k(n.value.count) + " исполнителей · в избранном " + k(n.value.favorites), 1),
			W("div", PD, [(H(!0), U(V, null, B(n.value.artists, (t) => (H(), U("article", {
				key: t.key,
				class: "sb-ap-index-card"
			}, [
				W("div", FD, [W("span", ID, k(t.initials), 1), W("div", null, [W("strong", null, k(t.name), 1), W("small", null, k(t.scene), 1)])]),
				W("p", null, k(t.overview), 1),
				W("div", LD, [(H(!0), U(V, null, B(t.genres, (e) => (H(), U("span", { key: e }, k(e), 1))), 128))]),
				W("div", RD, [W("button", {
					type: "button",
					"data-sb-ap-action": "profile",
					"data-name": t.name,
					onClick: Y((n) => e.api.openProfile(t.name, null, n.currentTarget), ["stop"])
				}, "Открыть профиль", 8, zD), W("button", {
					type: "button",
					"data-sb-ap-action": "favorite",
					"data-name": t.name,
					"aria-pressed": t.favorite,
					title: "Сохранить профиль",
					"aria-label": "Сохранить профиль " + t.name,
					onClick: Y((n) => e.api.toggleFavorite(t.name), ["stop"])
				}, k(t.favorite ? "★" : "☆"), 9, BD)])
			]))), 128)), n.value.artists.length ? K("", !0) : (H(), U("div", VD, "По этому запросу исполнители не найдены. Попробуй другое название или отключи фильтры."))]),
			W("button", {
				type: "button",
				id: "sb-ap-more",
				class: "sb-ap-more",
				"data-sb-ap-action": "more",
				hidden: !n.value.remaining,
				onClick: r[3] ||= Y((t) => e.api.more(), ["stop"])
			}, "Показать ещё · " + k(n.value.remaining), 9, HD),
			r[10] ||= W("p", { class: "sb-ap-disclaimer" }, "Периоды в исходных карточках ориентировочные. Присутствие в подборке жанра не обязательно означает, что это единственное направление или прямое влияние на исполнителя.", -1)
		])) : K("", !0)], 40, wD));
	}
}, WD = { class: "genre-family-toolbar" }, GD = { class: "search-box" }, KD = ["innerHTML"], qD = { class: "hint" }, JD = { class: "genre-family-summary" }, YD = { id: "catalog-count" }, XD = ["data-id"], ZD = {
	class: "hint",
	id: "sb-academy-search-hint"
}, QD = {
	id: "catalog-cards",
	class: "genre-families"
}, $D = [
	"data-family",
	"open",
	"onToggle"
], eO = {
	class: "genre-family-icon",
	"aria-hidden": "true"
}, tO = { class: "genre-family-heading" }, nO = { class: "genre-family-right" }, rO = { class: "genre-family-count" }, iO = { class: "genre-family-body" }, aO = {
	key: 0,
	class: "sb-sacred-index"
}, oO = {
	key: 0,
	class: "sb-sacred-overview"
}, sO = { class: "genre-grid" }, cO = { class: "sb-sacred-religions" }, lO = [
	"data-sb-religion",
	"open",
	"onToggle"
], uO = { class: "sb-sacred-religion-header" }, dO = {
	class: "sb-sacred-religion-icon",
	"aria-hidden": "true"
}, fO = { class: "sb-sacred-religion-label" }, pO = { class: "sb-sacred-count" }, mO = { class: "sb-sacred-religion-content" }, hO = [
	"data-sb-branch",
	"open",
	"onToggle"
], gO = { class: "sb-sacred-branch-header" }, _O = { class: "sb-sacred-branch-label" }, vO = { class: "sb-sacred-count" }, yO = { class: "sb-sacred-branch-content" }, bO = { class: "genre-grid" }, xO = {
	key: 1,
	class: "genre-grid"
}, SO = {
	key: 1,
	class: "genre-family-empty"
}, CO = {
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
		let t = e, n = Q(), r = /* @__PURE__ */ P(t.snapshot.query || ""), i = /* @__PURE__ */ j({
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
			e.artistProfiles ? (H(), pa(UD, {
				key: 0,
				api: e.artistProfiles
			}, null, 8, ["api"])) : K("", !0),
			W("div", WD, [W("label", GD, [W("span", {
				innerHTML: e.searchIcon,
				"aria-hidden": "true"
			}, null, 8, KD), L(W("input", {
				id: "genre-search",
				"onUpdate:modelValue": n[0] ||= (e) => r.value = e,
				type: "search",
				enterkeyhint: "search",
				autocapitalize: "off",
				spellcheck: "false",
				"aria-label": "Поиск жанров",
				placeholder: "Поиск жанра, поджанра или исполнителя…",
				autocomplete: "off"
			}, null, 512), [[J, r.value]])]), W("span", qD, k(e.snapshot.families.length) + " разделов · " + k(e.snapshot.families.reduce((e, t) => e + t.genres.length, 0)) + " жанров", 1)]),
			W("div", JD, [
				W("h2", YD, k(o.value ? "Найдено жанров" : "Музыкальные жанры") + " · " + k(c.value), 1),
				m.value ? (H(), U("button", {
					key: 0,
					type: "button",
					class: "btn ghost small",
					"data-sb-last-genre": "",
					"data-action": "genre",
					"data-id": m.value.id
				}, " ↶ Последний жанр: " + k(m.value.name), 9, XD)) : K("", !0),
				W("span", ZD, k(l.value), 1)
			]),
			W("div", QD, [s.value.length ? (H(!0), U(V, { key: 0 }, B(s.value, (e) => (H(), U("details", {
				key: e.name,
				class: "genre-family",
				"data-family": e.name,
				style: D({ "--family-accent": e.meta.accent }),
				open: h("family", e.name),
				onToggle: (t) => g("family", e.name, t)
			}, [W("summary", null, [
				W("span", eO, k(e.meta.icon), 1),
				W("span", tO, [W("strong", null, k(e.name), 1), W("small", null, k(e.meta.desc), 1)]),
				W("span", nO, [W("span", rO, k(e.genres.length) + " " + k(_(e.genres.length)), 1), n[1] ||= W("svg", {
					class: "genre-family-chevron",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2",
					"aria-hidden": "true"
				}, [W("path", { d: "m5 9 7 7 7-7" })], -1)])
			]), W("div", iO, [e.name === "Религиозная музыка" ? (H(), U("div", aO, [
				n[5] ||= W("div", { class: "sb-sacred-intro" }, [
					W("span", { class: "sb-sacred-eyebrow" }, "МУЗЫКА МИРОВЫХ РЕЛИГИЙ"),
					W("h3", null, "Религии и музыкальные традиции"),
					W("p", null, "Открой религию, затем её направление или течение. Здесь представлены музыкальные традиции — их границы не всегда совпадают с конфессиональными.")
				], -1),
				d.value ? (H(), U("div", oO, [n[2] ||= W("div", { class: "sb-sacred-overview-label" }, "📖 Обзор раздела", -1), W("div", sO, [va(CD, { genres: [d.value] }, null, 8, ["genres"])])])) : K("", !0),
				W("div", cO, [(H(!0), U(V, null, B(f.value, (e) => (H(), U("details", {
					key: e.id,
					class: "sb-sacred-religion",
					"data-sb-religion": e.id,
					open: h("religion", e.id),
					onToggle: (t) => g("religion", e.id, t)
				}, [W("summary", uO, [
					W("span", dO, k(e.icon), 1),
					W("span", fO, [W("strong", null, k(e.name), 1), W("small", null, k(e.description), 1)]),
					W("span", pO, k(e.count), 1),
					n[3] ||= W("span", {
						class: "sb-sacred-chevron",
						"aria-hidden": "true"
					}, "⌄", -1)
				]), W("div", mO, [(H(!0), U(V, null, B(e.branches, (e) => (H(), U("details", {
					key: e.id,
					class: "sb-sacred-branch",
					"data-sb-branch": e.id,
					open: h("branch", e.id),
					onToggle: (t) => g("branch", e.id, t)
				}, [W("summary", gO, [
					W("span", _O, [W("strong", null, k(e.name), 1), W("small", null, k(e.description), 1)]),
					W("span", vO, k(e.genres.length) + " " + k(v(e.genres.length)), 1),
					n[4] ||= W("span", {
						class: "sb-sacred-chevron",
						"aria-hidden": "true"
					}, "⌄", -1)
				]), W("div", yO, [W("div", bO, [va(CD, { genres: e.genres }, null, 8, ["genres"])])])], 40, hO))), 128))])], 40, lO))), 128))])
			])) : (H(), U("div", xO, [va(CD, { genres: e.genres }, null, 8, ["genres"])]))])], 44, $D))), 128)) : (H(), U("div", SO, "Ничего не найдено. Попробуй другой запрос."))])
		], 64));
	}
};
// src/vue/academy/legacyAcademyBridge.js
function wO({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ACADEMY, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Z({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-academy-root"),
		readSnapshot: () => {
			let e = t.snapshot();
			return e?.families?.length ? e : null;
		},
		mount: (n, r) => {
			let i = e(n, CO, {
				artistProfiles: window.SUNOBOOM_ARTIST_PROFILES || null,
				snapshot: r,
				search: (e) => t.search(e),
				searchIcon: t.searchIcon || "",
				setExpanded: (e, n, r) => t.setExpanded(e, n, r)
			});
			return i || window.SUNOBOOM_ARTIST_PROFILES?.restoreNativeHub?.(), i;
		}
	});
}
// src/vue/academy/genre-tree-model.js
var TO = (e) => String(e ?? "").trim().normalize("NFKC").toLocaleLowerCase("ru");
function EO(e, t, n, r = "all", i = 30) {
	let a = TO(n);
	if (!a) return {
		count: 0,
		items: []
	};
	let o = new Map(e.map((e) => [e.id, e])), s = /* @__PURE__ */ new Set(), c = [];
	function l(e, t) {
		let n = o.get(t);
		n && !s.has(t) && TO(n.name).includes(a) && (s.add(t), c.push({
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
function DO(e, t) {
	return t === "zoom-reset" ? 1 : t !== "zoom-in" && t !== "zoom-out" ? e : Math.min(1.5, Math.max(.75, Math.round((e + (t === "zoom-in" ? .15 : -.15)) * 100) / 100));
}
function OO(e, t) {
	let n = Array.isArray(e?.edges) ? e.edges : [];
	return e?.id === "all" ? n.filter(([e, n]) => e === t || n === t) : n;
}
// src/vue/academy/GenreTree.vue
var kO = {
	class: "sb-gt-vue-content",
	"data-sb-vue-genre-tree": ""
}, AO = { class: "sb-gt-head" }, jO = { class: "sb-gt-count" }, MO = { class: "sb-gt-controls" }, NO = ["value"], PO = ["value"], FO = ["value"], IO = ["value"], LO = { class: "sb-gt-extra" }, RO = {
	class: "sb-gt-search-label",
	for: "sb-gt-search"
}, zO = ["value"], BO = { class: "sb-gt-zoom" }, VO = { id: "sb-gt-zoom-label" }, HO = {
	id: "sb-gt-search-results",
	class: "sb-gt-search-results",
	"aria-live": "polite"
}, UO = { class: "sb-gt-search-title" }, WO = { class: "sb-gt-search-links" }, GO = [
	"data-id",
	"data-tree",
	"onClick"
], KO = {
	key: 1,
	class: "sb-gt-search-empty"
}, qO = { class: "sb-gt-intro" }, JO = { class: "sb-gt-legend" }, YO = ["aria-label"], XO = ["data-sb-gt-family"], ZO = {
	key: 1,
	class: "sb-gt-stage"
}, QO = { class: "sb-gt-node-list" }, $O = [
	"data-id",
	"aria-pressed",
	"onClick"
], ek = { class: "sb-gt-node-name" }, tk = { class: "sb-gt-node-era" }, nk = {
	key: 0,
	id: "sb-gt-description",
	class: "sb-gt-detail",
	"aria-live": "polite"
}, rk = { class: "sb-gt-detail-top" }, ik = { class: "sb-gt-sub" }, ak = ["data-id"], ok = { class: "sb-gt-description" }, sk = { class: "sb-gt-related" }, ck = ["data-id", "onClick"], lk = {
	key: 1,
	class: "sb-gt-note"
}, uk = { class: "sb-gt-related" }, dk = ["data-id", "onClick"], fk = /*#__PURE__*/ Cg({
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
		}))), v = q(() => _.value.reduce((e, t) => e + t.entries.length, 0)), y = q(() => d.get(i.value) || d.get(h.value.focus)), b = q(() => OO(h.value, i.value).filter(([e, t]) => e === i.value || t === i.value).map(([e, t, n, r]) => {
			let a = d.get(e === i.value ? t : e);
			return a ? {
				id: a.id,
				name: a.name,
				type: n,
				note: r,
				direction: e === i.value ? "→" : "←"
			} : null;
		}).filter(Boolean)), x = q(() => g.value && y.value ? u.filter((e) => e.id !== i.value && e.family === y.value.family).slice(0, 8) : []), S = q(() => EO(u, f, a.value, r.value)), C = (e) => !!a.value.trim() && !e.name.toLocaleLowerCase("ru").includes(a.value.trim().toLocaleLowerCase("ru"));
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
			let n = DO(o.value, e);
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
		return z(w), (t, n) => (H(), U("div", kO, [
			W("div", AO, [n[5] ||= W("div", null, [
				W("span", { class: "sb-gt-kicker" }, "SUNOBOOM · ИСТОРИЯ МУЗЫКИ"),
				W("h2", null, "От истоков к новым жанрам"),
				W("p", null, "Нажми на жанр в схеме, чтобы увидеть его историю и связи. Затем открой его существующую карточку в Академии.")
			], -1), W("div", jO, k(v.value) + " жанров" + k(g.value ? " · " + h.value.groups.length + " направлений" : " в схеме"), 1)]),
			W("div", MO, [
				n[8] ||= W("label", { for: "sb-gt-tree-choice" }, "Карта жанров", -1),
				W("select", {
					id: "sb-gt-tree-choice",
					value: r.value,
					"aria-label": "Выберите музыкальное древо",
					onChange: n[0] ||= (e) => ee(e.target.value)
				}, [(H(!0), U(V, null, B(I(f), (e) => (H(), U("option", {
					key: e.id,
					value: e.id
				}, k(e.icon) + " " + k(e.label), 9, PO))), 128))], 40, NO),
				g.value ? (H(), U(V, { key: 0 }, [n[7] ||= W("label", { for: "sb-gt-group-jump" }, "Перейти к направлению", -1), W("select", {
					id: "sb-gt-group-jump",
					value: s.value,
					"aria-label": "Перейти к музыкальному направлению",
					onChange: ie
				}, [n[6] ||= W("option", { value: "" }, "Выберите раздел…", -1), (H(!0), U(V, null, B(h.value.groups, (e, t) => (H(), U("option", {
					key: e.name,
					value: String(t)
				}, k(e.icon) + " " + k(e.name) + " (" + k(e.ids.length) + ") ", 9, IO))), 128))], 40, FO)], 64)) : K("", !0)
			]),
			W("div", LO, [W("label", RO, [n[9] ||= G(" Поиск жанра по древу ", -1), W("input", {
				id: "sb-gt-search",
				value: a.value,
				type: "search",
				placeholder: "Например: ска-панк",
				autocomplete: "off",
				onInput: T
			}, null, 40, zO)]), W("div", BO, [
				n[10] ||= W("span", null, "Масштаб карты", -1),
				W("button", {
					type: "button",
					"data-sb-gt-action": "zoom-out",
					"aria-label": "Уменьшить масштаб",
					onClick: n[1] ||= (e) => ne("zoom-out")
				}, "−"),
				W("output", VO, k(Math.round(o.value * 100)) + "%", 1),
				W("button", {
					type: "button",
					"data-sb-gt-action": "zoom-in",
					"aria-label": "Увеличить масштаб",
					onClick: n[2] ||= (e) => ne("zoom-in")
				}, "+"),
				W("button", {
					type: "button",
					"data-sb-gt-action": "zoom-reset",
					onClick: n[3] ||= (e) => ne("zoom-reset")
				}, "Сброс")
			])]),
			W("div", HO, [a.value.trim() ? (H(), U(V, { key: 0 }, [S.value.count ? (H(), U(V, { key: 0 }, [W("div", UO, " Найдено в коллекции: " + k(S.value.count) + k(S.value.count > 30 ? " · показаны первые 30" : ""), 1), W("div", WO, [(H(!0), U(V, null, B(S.value.items, (e) => (H(), U("button", {
				key: e.id,
				type: "button",
				"data-sb-gt-action": "search-jump",
				"data-id": e.id,
				"data-tree": e.tree,
				onClick: (t) => re(e)
			}, [G(k(e.name) + " ", 1), W("small", null, "(" + k(e.family) + ")", 1)], 8, GO))), 128))])], 64)) : (H(), U("p", KO, "Жанр не найден в коллекции Академии."))], 64)) : K("", !0)]),
			W("p", qO, k(h.value.intro), 1),
			W("div", JO, [(H(!0), U(V, null, B(I(p), (e, t) => (H(), U("span", { key: t }, [W("i", { style: D({ "--rel-color": e.color }) }, null, 4), G(k(e.label), 1)]))), 128))]),
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
			}, [W("strong", null, k(e.group.icon) + " " + k(e.group.name), 1), W("span", null, k(e.entries.length), 1)], 4)) : (H(), U("div", ZO, [W("span", null, "0" + k(e.index + 1), 1), G(k(I(m)[e.index]), 1)])), W("div", QO, [(H(!0), U(V, null, B(e.entries, (e) => (H(), U("button", {
				key: e.id,
				type: "button",
				class: O(["sb-gt-node", {
					"is-selected": i.value === e.id,
					"sb-gt-search-dim": C(e)
				}]),
				"data-sb-gt-action": "select",
				"data-id": e.id,
				"aria-pressed": i.value === e.id,
				onClick: (t) => te(e.id)
			}, [W("span", ek, k(e.name), 1), W("span", tk, k(e.era || e.family || ""), 1)], 10, $O))), 128))])], 10, XO))), 128))], 2)], 6)], 8, YO),
			y.value ? (H(), U("div", nk, [
				W("div", rk, [W("div", null, [
					n[12] ||= W("div", { class: "sb-gt-kicker" }, "ВЫБРАННОЕ НАПРАВЛЕНИЕ", -1),
					W("h3", null, k(y.value.name), 1),
					W("p", ik, k(y.value.era || "") + " · " + k(y.value.family || ""), 1)
				]), W("button", {
					type: "button",
					class: "btn primary sb-gt-open",
					"data-sb-gt-action": "open",
					"data-id": y.value.id,
					onClick: n[4] ||= (t) => e.treeApi.openGenre(y.value.id)
				}, "Открыть карточку ↗", 8, ak)]),
				W("p", ok, k(y.value.description || y.value.tagline || "Описание в карточке жанра."), 1),
				b.value.length ? (H(), U(V, { key: 0 }, [n[13] ||= W("h4", null, "Исторические связи", -1), W("div", sk, [(H(!0), U(V, null, B(b.value, (e) => (H(), U("button", {
					key: e.id + ":" + e.type,
					type: "button",
					class: "sb-gt-related-btn",
					"data-sb-gt-action": "select",
					"data-id": e.id,
					onClick: (t) => te(e.id)
				}, [W("span", { class: O(["sb-gt-related-mark", "sb-gt-" + e.type]) }, k(e.direction), 3), W("span", null, [W("strong", null, k(e.name), 1), W("small", null, k(e.note), 1)])], 8, ck))), 128))])], 64)) : g.value ? K("", !0) : (H(), U("p", lk, "У этого узла пока нет нарисованных связей в выбранной схеме.")),
				g.value && x.value.length ? (H(), U(V, { key: 2 }, [W("h4", null, "Другие жанры раздела «" + k(y.value.family) + "»", 1), W("div", uk, [(H(!0), U(V, null, B(x.value, (e) => (H(), U("button", {
					key: e.id,
					type: "button",
					class: "sb-gt-related-btn",
					"data-sb-gt-action": "select",
					"data-id": e.id,
					onClick: (t) => te(e.id)
				}, [n[14] ||= W("span", { class: "sb-gt-related-mark" }, "♫", -1), W("span", null, [W("strong", null, k(e.name), 1)])], 8, dk))), 128))])], 64)) : K("", !0)
			])) : K("", !0),
			n[15] ||= W("p", { class: "sb-gt-note" }, "Схема показывает основные исторические влияния и стилистические пересечения. Жанры могут развиваться параллельно; стрелки не означают единственное происхождение.", -1)
		]));
	}
}, [["__scopeId", "data-v-6e70f61e"]]);
// src/vue/academy/legacyGenreTreeBridge.js
function pk({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_GENRE_TREE, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Z({
		root: n,
		selectTarget: (e) => {
			let t = e.querySelector("#sb-genre-tree");
			return t?.open ? t.querySelector("#sb-gt-inner") : null;
		},
		readSnapshot: () => {
			let e = t.snapshot();
			return e?.trees?.length && e?.genres?.length ? e : null;
		},
		mount: (n, r) => e(n, fk, {
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
var mk = {
	class: "gb-grid",
	"data-sb-vue-overview": ""
}, hk = { class: "gb-column" }, gk = { class: "gb-panel pink" }, _k = { class: "gb-unit" }, vk = { class: "gb-unit" }, yk = { class: "gb-unit" }, bk = { class: "gb-panel" }, xk = ["innerHTML"], Sk = { class: "gb-column" }, Ck = { class: "gb-panel blue" }, wk = {
	class: "gb-bpm-value",
	style: {
		"font-size": "26px",
		"font-weight": "900"
	}
}, Tk = { class: "gb-artists" }, Ek = { class: "gb-panel pink" }, Dk = ["data-id"], Ok = ["innerHTML"], kk = {
	__name: "GenreOverview",
	props: { genre: {
		type: Object,
		required: !0
	} },
	emits: ["select-tab"],
	setup(e) {
		return (t, n) => (H(), U("div", mk, [W("div", hk, [W("section", gk, [
			n[7] ||= W("div", { class: "gb-sup" }, "01 / ЗНАКОМСТВО С ЖАНРОМ", -1),
			n[8] ||= W("h2", null, "Характер и звучание", -1),
			W("p", null, [W("strong", null, k(e.genre.tagline), 1)]),
			W("p", null, k(e.genre.description), 1),
			W("div", _k, [n[2] ||= W("b", null, "🎸", -1), W("div", null, [n[1] ||= W("strong", null, "Инструменты", -1), W("span", null, k(e.genre.instruments) + ".", 1)])]),
			W("div", vk, [n[4] ||= W("b", null, "🎛️", -1), W("div", null, [n[3] ||= W("strong", null, "Саунд", -1), W("span", null, k(e.genre.style) + ".", 1)])]),
			W("div", yk, [n[6] ||= W("b", null, "✍️", -1), W("div", null, [n[5] ||= W("strong", null, "Тематика песен", -1), W("span", null, k(e.genre.themes) + ".", 1)])])
		]), W("section", bk, [
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
			}, null, 8, xk)])
		])]), W("div", Sk, [W("section", Ck, [
			n[12] ||= W("div", { class: "gb-sup" }, "02 / ПАСПОРТ НАПРАВЛЕНИЯ", -1),
			n[13] ||= W("h2", null, "История и сцена", -1),
			n[14] ||= W("div", { class: "info-label" }, "Эпоха", -1),
			W("p", null, k(e.genre.era), 1),
			n[15] ||= W("div", { class: "info-label" }, "Диапазон темпа", -1),
			W("p", wk, k(e.genre.bpm[0]) + "–" + k(e.genre.bpm[1]) + " BPM", 1),
			n[16] ||= W("div", { class: "info-label" }, "Исполнители для знакомства", -1),
			W("div", Tk, [(H(!0), U(V, null, B(e.genre.artists, (e) => (H(), U("span", { key: e }, k(e), 1))), 128))])
		]), W("section", Ek, [n[18] ||= Sa("<div class=\"gb-sup\">04 / ТВОЯ МУЗЫКА</div><h2>Преврати знания в трек</h2><p>Выбери вокал, настроение и темп, затем создай промпт и структуру песни в Suno Studio.</p><div class=\"gb-unit\"><b>🎤</b><div><strong>Вокал</strong><span>Мужской, женский или дуэт; можно использовать русский язык.</span></div></div><div class=\"gb-unit\"><b>⚡</b><div><strong>Динамика</strong><span>Настрой энергию и характер припева под историю.</span></div></div>", 5), W("button", {
			type: "button",
			class: "btn primary small",
			"data-action": "use-genre",
			"data-id": e.genre.id
		}, [W("span", {
			innerHTML: e.genre.icons.studio,
			"aria-hidden": "true"
		}, null, 8, Ok), n[17] ||= G(" Открыть студию ", -1)], 8, Dk)])])]));
	}
}, Ak = {
	key: 0,
	id: "sb-artist-expanded",
	class: "ahx-wrap",
	"data-sb-vue-artists": ""
}, jk = { class: "ahx-intro" }, Mk = { class: "gb-eyebrow" }, Nk = {
	class: "ahx-toolbar",
	role: "group",
	"aria-label": "Музыкальные сцены"
}, Pk = ["aria-pressed"], Fk = ["aria-pressed"], Ik = { class: "ahx-filters" }, Lk = { class: "ahx-search" }, Rk = ["innerHTML"], zk = {
	class: "ahx-filter-buttons",
	role: "group",
	"aria-label": "Фильтр исполнителей"
}, Bk = [
	"data-vue-artist-filter",
	"aria-pressed",
	"onClick"
], Vk = {
	id: "ahx-count",
	class: "ahx-count",
	"aria-live": "polite"
}, Hk = { class: "ahx-section-head" }, Uk = { class: "ahx-eyebrow" }, Wk = { class: "ahx-num" }, Gk = { class: "ahx-grid" }, Kk = ["data-ahx-group"], qk = { class: "ahx-card-top" }, Jk = {
	class: "ahx-avatar",
	"aria-hidden": "true"
}, Yk = { class: "ahx-title" }, Xk = { class: "ahx-era" }, Zk = {
	key: 0,
	class: "ahx-track"
}, Qk = {
	key: 1,
	class: "sb-ap-inline-actions"
}, $k = ["data-name", "onClick"], eA = [
	"data-name",
	"aria-label",
	"aria-pressed",
	"onClick"
], tA = {
	id: "ahx-no-results",
	class: "ahx-no-results"
}, nA = {
	key: 1,
	class: "ahx-empty"
}, rA = {
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
		let t = e, n = /* @__PURE__ */ F(new Set(t.profiles?.favoriteKeys() || [])), r = t.profiles?.subscribe(() => {
			n.value = new Set(t.profiles.favoriteKeys());
		});
		Nr(() => r?.());
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
		let o = /* @__PURE__ */ P(t.catalog.initialScene()), s = /* @__PURE__ */ P(""), c = /* @__PURE__ */ P("all"), l = q(() => t.catalog.getScene(t.genre.id, o.value)), u = q(() => (l.value?.groups || []).map((e) => ({
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
		}))), d = q(() => u.value.reduce((e, t) => e + t.artists.length, 0)), f = q(() => (l.value?.groups || []).reduce((e, t) => e + t.artists.length, 0));
		function p(e) {
			(e === "ru" || e === "world") && (o.value = e, t.catalog.setScene(e), s.value = "", c.value = "all");
		}
		function m(e) {
			return "Добавить в избранное: " + e.name;
		}
		return (t, n) => l.value ? (H(), U("div", Ak, [
			W("div", jk, [
				W("div", Mk, "АКАДЕМИЯ SUNOBOOM · " + k(e.genre.name), 1),
				n[4] ||= W("h2", null, "Исполнители и композиторы", -1),
				W("p", null, k(l.value.description), 1)
			]),
			W("div", Nk, [W("button", {
				type: "button",
				"data-vue-artist-scene": "world",
				"aria-pressed": o.value === "world",
				class: O({ on: o.value === "world" }),
				onClick: n[0] ||= (e) => p("world")
			}, [n[5] ||= G(" 🌍 Мировая сцена ", -1), W("span", null, k(l.value.worldCount), 1)], 10, Pk), W("button", {
				type: "button",
				"data-vue-artist-scene": "ru",
				"aria-pressed": o.value === "ru",
				class: O({ on: o.value === "ru" }),
				onClick: n[1] ||= (e) => p("ru")
			}, [n[6] ||= G(" 🎤 Русскоязычные ", -1), W("span", null, k(l.value.ruCount), 1)], 10, Fk)]),
			f.value ? (H(), U(V, { key: 0 }, [
				W("div", Ik, [W("label", Lk, [W("span", {
					"aria-hidden": "true",
					innerHTML: e.genre.icons.overview
				}, null, 8, Rk), L(W("input", {
					"onUpdate:modelValue": n[2] ||= (e) => s.value = e,
					type: "search",
					"data-vue-artist-search": "",
					placeholder: "Найти исполнителя или произведение…",
					"aria-label": "Поиск по исполнителям"
				}, null, 512), [[J, s.value]])]), W("div", zk, [(H(), U(V, null, B([
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
					"aria-pressed": c.value === e.id,
					onClick: (t) => c.value = e.id
				}, k(e.label), 9, Bk)), 64))])]),
				W("p", Vk, "Показано " + k(d.value) + " из " + k(f.value) + " исполнителей.", 1),
				(H(!0), U(V, null, B(u.value, (t) => L((H(), U("section", {
					key: t.index,
					class: "ahx-section",
					"data-ahx-section": ""
				}, [W("div", Hk, [W("div", null, [W("span", Uk, "0" + k(t.index + 1) + " / ИСПОЛНИТЕЛИ", 1), W("h3", null, k(t.index ? "Современная сцена и продолжатели" : "Классика и предшественники"), 1)]), W("span", Wk, k(t.artists.length), 1)]), W("div", Gk, [(H(!0), U(V, null, B(t.artists, (t) => (H(), U("article", {
					key: t.key,
					class: "ahx-card",
					"data-ahx-group": t.group
				}, [
					W("div", qk, [W("span", Jk, k(t.initials), 1), W("div", Yk, [W("h4", null, k(t.name), 1), W("span", Xk, k(t.period || "Музыкальная сцена"), 1)])]),
					W("span", { class: O(["ahx-role", { "ahx-role-neighbor": t.group === "adjacent" }]) }, k(t.label), 3),
					W("p", null, k(t.bio || "Музыкальное направление и характерный творческий почерк."), 1),
					t.track ? (H(), U("div", Zk, [n[7] ||= W("small", null, "Ориентир для прослушивания", -1), W("strong", null, "♫ " + k(t.track), 1)])) : K("", !0),
					e.profiles ? (H(), U("div", Qk, [W("button", {
						type: "button",
						class: "sb-ap-inline-open",
						"data-sb-ap-action": "profile",
						"data-name": t.name,
						onClick: Y((e) => a(t, e.currentTarget), ["stop"])
					}, "Полный профиль →", 8, $k), W("button", {
						type: "button",
						class: "sb-ap-inline-star",
						"data-sb-ap-action": "favorite",
						"data-name": t.name,
						"aria-label": m(t),
						"aria-pressed": i(t.name),
						onClick: Y((n) => e.profiles.toggleFavorite(t.name), ["stop"])
					}, k(i(t.name) ? "★" : "☆"), 9, eA)])) : K("", !0)
				], 8, Kk))), 128))])])), [[uo, t.artists.length]])), 128)),
				L(W("div", tA, " По заданному поиску исполнители не найдены. Попробуй другой запрос или выбери «Все». ", 512), [[uo, d.value === 0]])
			], 64)) : (H(), U("div", nA, [
				n[8] ||= W("strong", null, "Русскоязычная подборка ещё уточняется", -1),
				n[9] ||= W("p", null, "Для этого узкого направления пока нет достаточно подтверждённых примеров. Мы не будем подставлять артистов из других жанров без пояснения.", -1),
				W("button", {
					class: "btn ghost",
					type: "button",
					onClick: n[3] ||= (e) => p("world")
				}, "Посмотреть мировую сцену")
			])),
			n[10] ||= W("p", { class: "ahx-footnote" }, "В подборках могут встречаться близкие стили, кино- и игровая музыка, инструментальные коллективы. Их связь с жанром поясняется в карточке. Указанные произведения — ориентиры для знакомства, а не ссылки на конкретные релизы.", -1)
		])) : K("", !0);
	}
}, iA = {
	class: "idea-grid",
	"data-sb-vue-ideas": ""
}, aA = { class: "idea-badge" }, oA = { class: "actions" }, sA = ["data-id", "data-i"], cA = ["innerHTML"], lA = [
	"data-id",
	"data-i",
	"aria-pressed"
], uA = ["innerHTML"], dA = {
	__name: "GenreIdeas",
	props: { genre: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (H(), U("div", iA, [(H(!0), U(V, null, B(e.genre.allIdeas, (t) => (H(), U("div", {
			key: t.index,
			class: "idea"
		}, [
			W("div", aA, k(e.genre.name) + " · " + k(t.mood), 1),
			W("h3", null, k(t.title), 1),
			W("p", null, k(t.pitch), 1),
			W("div", oA, [W("button", {
				type: "button",
				class: "btn primary small",
				"data-action": "idea-use",
				"data-id": e.genre.id,
				"data-i": t.index
			}, [W("span", {
				"aria-hidden": "true",
				innerHTML: e.genre.icons.studio
			}, null, 8, cA), n[0] ||= G(" В студию ", -1)], 8, sA), W("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "idea-save",
				"data-id": e.genre.id,
				"data-i": t.index,
				"aria-pressed": t.saved ? "true" : "false"
			}, [W("span", {
				"aria-hidden": "true",
				innerHTML: e.genre.icons.heart
			}, null, 8, uA), G(" " + k(t.saved ? "Сохранено" : "Сохранить"), 1)], 8, lA)])
		]))), 128))]));
	}
}, fA = {
	class: "panel",
	"data-sb-vue-prompts": ""
}, pA = { class: "idea-grid" }, mA = { class: "idea" }, hA = ["data-id"], gA = ["innerHTML"], _A = { class: "idea" }, vA = ["data-id"], yA = ["innerHTML"], bA = {
	__name: "GenrePrompts",
	props: { genre: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (t, n) => (H(), U("div", fA, [
			n[5] ||= W("h3", null, "Шаблоны звучания", -1),
			n[6] ||= W("p", null, "Начни с одного из вариантов. Он перенесёт настройки жанра в конструктор — там можно выбрать вокал, настроение и язык.", -1),
			W("div", pA, [W("div", mA, [
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
				}, null, 8, gA)], 8, hA)
			]), W("div", _A, [
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
				}, null, 8, yA)], 8, vA)
			])])
		]));
	}
}, xA = { class: "gb-hero" }, SA = { class: "gb-content" }, CA = { class: "gb-eyebrow" }, wA = { class: "gb-title" }, TA = { class: "gb-desc" }, EA = { class: "gb-tags" }, DA = { class: "gb-buttons" }, OA = ["data-id"], kA = ["innerHTML"], AA = ["data-id"], jA = ["innerHTML"], MA = {
	class: "gb-vinyl",
	"aria-hidden": "true"
}, NA = { class: "gb-equalizer" }, PA = { class: "gb-facts" }, FA = { class: "gb-fact" }, IA = { class: "gb-fact" }, LA = { class: "gb-fact" }, RA = { class: "gb-fact" }, zA = { class: "genre-detail-layout" }, BA = {
	class: "genre-side-nav",
	"aria-label": "ЖАНР-НАВ — меню жанра"
}, VA = {
	class: "genre-side-links",
	"aria-label": "Разделы жанра"
}, HA = [
	"data-tab",
	"aria-current",
	"onClick"
], UA = ["innerHTML"], WA = {
	class: "genre-detail-content",
	id: "genre-nav-content",
	"aria-label": "Содержимое раздела жанра"
}, GA = ["innerHTML"], KA = {
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
		}, [W("div", xA, [
			r[5] ||= W("div", { class: "gb-top" }, [W("button", {
				type: "button",
				class: "back",
				"data-action": "academy-back",
				"aria-label": "Назад к разделу Академии"
			}, "← Назад"), W("small", null, "SUNOBOOM · MUSIC ATLAS")], -1),
			W("div", SA, [W("div", null, [
				W("div", CA, k(e.genre.family) + " · " + k(e.genre.era), 1),
				W("h1", wA, k(e.genre.name), 1),
				W("p", TA, k(e.genre.description), 1),
				W("div", EA, [
					W("span", null, k(e.genre.tagline), 1),
					W("span", null, k(e.genre.bpm[0]) + "–" + k(e.genre.bpm[1]) + " BPM", 1),
					W("span", null, k(e.genre.ideasCount) + " идеи", 1)
				]),
				W("div", DA, [W("button", {
					type: "button",
					class: "btn primary",
					"data-action": "use-genre",
					"data-id": e.genre.id
				}, [W("span", {
					innerHTML: e.genre.icons.studio,
					"aria-hidden": "true"
				}, null, 8, kA), r[0] ||= G(" Создать в Suno ", -1)], 8, OA), W("button", {
					type: "button",
					class: "btn ghost",
					"data-action": "favorite",
					"data-id": e.genre.id
				}, [W("span", {
					innerHTML: e.genre.icons.heart,
					"aria-hidden": "true"
				}, null, 8, jA), G(" " + k(e.genre.favorite ? "В избранном" : "В избранное"), 1)], 8, AA)])
			]), W("div", MA, [W("div", NA, [(H(), U(V, null, B(9, (e) => W("i", { key: e })), 64))])])]),
			W("div", PA, [
				W("div", FA, [r[1] ||= W("small", null, "История", -1), W("strong", null, k(e.genre.era), 1)]),
				W("div", IA, [r[2] ||= W("small", null, "Темп", -1), W("strong", null, k(e.genre.bpm[0]) + "–" + k(e.genre.bpm[1]) + " BPM", 1)]),
				W("div", LA, [r[3] ||= W("small", null, "Треки", -1), W("strong", null, k(e.genre.ideasCount) + " сюжетных идеи", 1)]),
				W("div", RA, [r[4] ||= W("small", null, "Артисты", -1), W("strong", null, k(e.genre.artistCount) + " ориентиров", 1)])
			])
		]), W("div", zA, [W("aside", BA, [r[7] ||= W("div", { class: "genre-side-head" }, [W("span", null, "ЖАНР-НАВ"), W("small", null, "Разделы карточки")], -1), W("nav", VA, [(H(), U(V, null, B(n, (t) => W("button", {
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
			}, null, 8, UA),
			W("span", null, k(t.label), 1),
			r[6] ||= W("span", {
				class: "genre-side-chevron",
				"aria-hidden": "true"
			}, "›", -1)
		], 10, HA)), 64))])]), W("section", WA, [i.value === "overview" ? (H(), pa(kk, {
			key: 0,
			genre: e.genre,
			onSelectTab: o
		}, null, 8, ["genre"])) : i.value === "artists" && e.artistCatalog ? (H(), pa(rA, {
			key: 1,
			genre: e.genre,
			catalog: e.artistCatalog,
			profiles: e.artistProfiles
		}, null, 8, [
			"genre",
			"catalog",
			"profiles"
		])) : i.value === "ideas" ? (H(), pa(dA, {
			key: 2,
			genre: e.genre
		}, null, 8, ["genre"])) : i.value === "prompts" ? (H(), pa(bA, {
			key: 3,
			genre: e.genre
		}, null, 8, ["genre"])) : (H(), U("div", {
			key: 4,
			innerHTML: a.value
		}, null, 8, GA))])])], 4));
	}
};
// src/vue/academy/legacyGenreDetailBridge.js
function qA({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_GENRE, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Z({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-genre-detail"),
		readSnapshot: () => {
			let e = t.snapshot();
			return e?.id ? e : null;
		},
		mount: (n, r) => e(n, KA, {
			genre: r,
			tabContent: (e, n) => t.tabContent(e, n),
			artistCatalog: window.SUNOBOOM_ARTIST_CATALOG || null,
			artistProfiles: window.SUNOBOOM_ARTIST_PROFILES || null
		})
	});
}
// src/vue/studio/StudioBuilder.vue
var JA = { class: "panel" }, YA = { class: "field" }, XA = ["value"], ZA = ["value"], QA = { class: "form-grid" }, $A = { class: "field" }, ej = ["value"], tj = ["value"], nj = { class: "field" }, rj = ["value"], ij = ["value"], aj = { class: "field" }, oj = ["value"], sj = ["value"], cj = { class: "field" }, lj = ["value"], uj = ["value"], dj = { class: "field" }, fj = { for: "b-tempo" }, pj = {
	id: "tempo-num",
	style: { color: "#ffa8d5" }
}, mj = { class: "range" }, hj = ["value"], gj = { id: "bpm-output" }, _j = {
	class: "muted",
	style: { "font-size": "11px" }
}, vj = { class: "field" }, yj = ["value"], bj = { class: "field" }, xj = ["value"], Sj = { class: "checkrow" }, Cj = ["checked", "onChange"], wj = {
	class: "panel",
	style: {
		position: "sticky",
		top: "20px"
	}
}, Tj = {
	class: "output",
	id: "prompt-output"
}, Ej = { class: "counter" }, Dj = { id: "prompt-count" }, Oj = { class: "two-col" }, kj = {
	class: "btn primary",
	type: "button",
	"data-action": "copy-prompt"
}, Aj = ["innerHTML"], jj = {
	class: "btn ghost",
	type: "button",
	"data-action": "save-prompt"
}, Mj = ["innerHTML"], Nj = {
	key: 0,
	class: "notice",
	"data-sb-vue-mixer-recap": ""
}, Pj = {
	key: 1,
	class: "notice",
	"data-sb-vue-arranger-recap": ""
}, Fj = { class: "list-pills" }, Ij = {
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
		return z(() => window.addEventListener("sunoboom:studio-updated", f)), Nr(() => window.removeEventListener("sunoboom:studio-updated", f)), (e, t) => (H(), U(V, null, [W("div", JA, [
			t[17] ||= W("h3", null, "Параметры трека", -1),
			W("div", YA, [t[8] ||= W("label", { for: "b-genre" }, "Жанр", -1), W("select", {
				id: "b-genre",
				value: i.value.genre,
				onChange: t[0] ||= (e) => p("genre", e.target.value)
			}, [(H(!0), U(V, null, B(n.value.genres, (e) => (H(), U("option", {
				key: e.id,
				value: e.id
			}, k(e.name), 9, ZA))), 128))], 40, XA)]),
			W("div", QA, [
				W("div", $A, [t[9] ||= W("label", { for: "b-mood" }, "Настроение", -1), W("select", {
					id: "b-mood",
					value: i.value.mood,
					onChange: t[1] ||= (e) => p("mood", e.target.value)
				}, [(H(), U(V, null, B(s, ([e, t]) => W("option", {
					key: e,
					value: e
				}, k(t), 9, tj)), 64))], 40, ej)]),
				W("div", nj, [t[10] ||= W("label", { for: "b-vocal" }, "Вокал", -1), W("select", {
					id: "b-vocal",
					value: i.value.vocal,
					onChange: t[2] ||= (e) => p("vocal", e.target.value)
				}, [(H(), U(V, null, B(c, ([e, t]) => W("option", {
					key: e,
					value: e
				}, k(t), 9, ij)), 64))], 40, rj)]),
				W("div", aj, [t[11] ||= W("label", { for: "b-lang" }, "Язык текста", -1), W("select", {
					id: "b-lang",
					value: i.value.language,
					onChange: t[3] ||= (e) => p("language", e.target.value)
				}, [(H(), U(V, null, B(l, ([e, t]) => W("option", {
					key: e,
					value: e
				}, k(t), 9, sj)), 64))], 40, oj)]),
				W("div", cj, [t[12] ||= W("label", { for: "b-energy" }, "Энергия", -1), W("select", {
					id: "b-energy",
					value: i.value.energy,
					onChange: t[4] ||= (e) => p("energy", e.target.value)
				}, [(H(), U(V, null, B(u, ([e, t]) => W("option", {
					key: e,
					value: e
				}, k(t), 9, uj)), 64))], 40, lj)])
			]),
			W("div", dj, [
				W("label", fj, [
					t[13] ||= G("Темп · ", -1),
					W("span", pj, k(i.value.tempo), 1),
					t[14] ||= G(" BPM", -1)
				]),
				W("div", mj, [W("input", {
					type: "range",
					id: "b-tempo",
					min: "65",
					max: "200",
					step: "1",
					value: i.value.tempo,
					onInput: t[5] ||= (e) => p("tempo", Number(e.target.value))
				}, null, 40, hj), W("output", gj, k(i.value.tempo) + " BPM", 1)]),
				W("span", _j, " Обычно для «" + k(a.value.name) + "»: " + k(a.value.bpm[0]) + "–" + k(a.value.bpm[1]) + " BPM ", 1)
			]),
			W("div", vj, [t[15] ||= W("label", { for: "b-theme" }, "Тема / история трека", -1), W("textarea", {
				id: "b-theme",
				rows: "2",
				value: i.value.theme,
				onInput: t[6] ||= (e) => p("theme", e.target.value),
				placeholder: "О чём будет песня?"
			}, null, 40, yj)]),
			W("div", bj, [t[16] ||= W("label", { for: "b-extra" }, "Дополнительные инструкции (необязательно)", -1), W("textarea", {
				id: "b-extra",
				rows: "2",
				value: i.value.extra,
				onInput: t[7] ||= (e) => p("extra", e.target.value),
				placeholder: "Например: memorable chorus, short guitar solo"
			}, null, 40, xj)]),
			W("div", Sj, [(H(), U(V, null, B(d, ([e, t]) => W("label", { key: e }, [W("input", {
				type: "checkbox",
				checked: i.value[e],
				onChange: (t) => p(e, t.target.checked)
			}, null, 40, Cj), G(k(t), 1)])), 64))])
		]), W("div", wj, [
			t[22] ||= W("div", { class: "eyebrow" }, "Готово к Suno", -1),
			t[23] ||= W("h3", null, "Твой промпт", -1),
			W("div", Tj, k(o.value), 1),
			W("div", Ej, [t[18] ||= W("span", null, "Максимум 1000 символов", -1), W("b", Dj, k(o.value.length) + " / 1000", 1)]),
			W("div", Oj, [W("button", kj, [W("span", {
				"aria-hidden": "true",
				innerHTML: n.value.icons.copy
			}, null, 8, Aj), t[19] ||= G(" Копировать ", -1)]), W("button", jj, [W("span", {
				"aria-hidden": "true",
				innerHTML: n.value.icons.save
			}, null, 8, Mj), t[20] ||= G(" Сохранить ", -1)])]),
			t[24] ||= W("div", { class: "spacer" }, null, -1),
			I(r).mixerSummary.ready ? (H(), U("div", Nj, [G(" Последний микс: " + k(I(r).mixerSummary.genreCount) + " жанра · " + k(I(r).mixerSummary.tempo) + " BPM · " + k(I(r).mixerSummary.promptLength) + " / 1000 символов. ", 1), t[21] ||= W("button", {
				type: "button",
				class: "link-action",
				"data-action": "nav",
				"data-nav": "mixer"
			}, "Перейти в Миксер →", -1)])) : K("", !0),
			I(r).arrangerSummary.ready ? (H(), U("div", Pj, " Аранжировка: " + k(I(r).arrangerSummary.blockCount) + " блоков · " + k(I(r).arrangerSummary.barCount) + " тактов · средняя энергия " + k(I(r).arrangerSummary.averageEnergy) + "/5 · " + k(I(r).arrangerSummary.transitionCount) + " переходов. ", 1)) : K("", !0),
			t[25] ||= W("div", { class: "notice" }, [W("strong", null, "Подсказка:"), G(" промпт задаёт стиль, а текст песни можно вводить отдельно в Suno. Результат генерации может отличаться от запроса.")], -1),
			t[26] ||= W("div", { class: "spacer" }, null, -1),
			t[27] ||= W("div", { class: "info-label" }, "Музыкальный профиль", -1),
			W("div", Fj, [
				W("span", null, k(a.value.name), 1),
				W("span", null, k(a.value.family), 1),
				W("span", null, k(a.value.bpm[0]) + "–" + k(a.value.bpm[1]) + " BPM", 1)
			])
		])], 64));
	}
};
// src/vue/studio/legacyStudioBridge.js
function Lj({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_STUDIO, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Z({
		root: n,
		selectTarget: (e) => e.querySelector(".studio-grid"),
		readSnapshot: () => t.snapshot(),
		mount: (n) => {
			let r = e(n, Ij, { api: t });
			return r && (n.dataset.sbVueStudio = "true"), r;
		}
	});
}
// src/vue/studio/GenreMixer.vue
var Rj = { class: "heading" }, zj = {
	key: 0,
	class: "gm-muted",
	"data-sb-vue-studio-recap": ""
}, Bj = { class: "gm-layout" }, Vj = { class: "gm-panel" }, Hj = { class: "gm-stack" }, Uj = { class: "gm-row-top" }, Wj = { class: "gm-rank" }, Gj = { class: "gm-field gm-genre-select" }, Kj = ["for"], qj = [
	"id",
	"value",
	"data-gm-genre"
], Jj = ["label"], Yj = ["value"], Xj = ["data-gm-value"], Zj = [
	"data-slot",
	"aria-label",
	"disabled"
], Qj = { class: "gm-slider-line" }, $j = [
	"max",
	"value",
	"data-gm-weight",
	"aria-label"
], eM = { class: "gm-meter" }, tM = ["data-gm-meter"], nM = { class: "gm-sub" }, rM = { class: "gm-actions" }, iM = ["disabled"], aM = {
	class: "gm-mixture",
	"aria-label": "Доли музыкальных жанров"
}, oM = ["data-gm-mixbar", "title"], sM = { class: "gm-form-grid" }, cM = ["for"], lM = [
	"id",
	"value",
	"data-gm-setting"
], uM = ["value"], dM = { class: "gm-tempo" }, fM = ["checked"], pM = { class: "gm-tempo-row" }, mM = ["value", "disabled"], hM = { id: "gm-bpm" }, gM = { class: "gm-field" }, _M = ["value"], vM = { class: "gm-checks" }, yM = ["data-gm-setting", "checked"], bM = { class: "gm-panel gm-output-panel" }, xM = {
	class: "gm-output",
	id: "gm-prompt",
	"aria-live": "polite"
}, SM = { class: "gm-prompt-meta" }, CM = { id: "gm-count" }, wM = { class: "gm-field" }, TM = ["value"], EM = { class: "gm-saved-list" }, DM = {
	key: 0,
	class: "gm-muted"
}, OM = { class: "gm-saved-actions" }, kM = ["data-id"], AM = ["data-id", "aria-label"], jM = {
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
		z(() => window.addEventListener("sunoboom:mixer-updated", f)), Nr(() => window.removeEventListener("sunoboom:mixer-updated", f));
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
		return (e, t) => (H(), U(V, null, [W("header", Rj, [
			t[1] ||= W("div", { class: "eyebrow" }, "Suno Studio · новый инструмент", -1),
			t[2] ||= W("h1", null, [G("Жанровый "), W("span", { class: "gm-highlight" }, "миксер")], -1),
			t[3] ||= W("p", null, "Соединяй от 2 до 4 жанров из Академии SUNOBOOM, задавай пропорции и создавай готовый Style-промпт для Suno.", -1),
			I(r).studioSummary.ready ? (H(), U("p", zj, [G(" Текущая Студия: " + k(I(r).studioSummary.tempo) + " BPM · " + k(I(r).studioSummary.promptLength) + " / 1000 символов. ", 1), t[0] ||= W("button", {
				type: "button",
				class: "link-action",
				"data-action": "nav",
				"data-nav": "studio"
			}, "Вернуться в Студию →", -1)])) : K("", !0)
		]), W("div", Bj, [W("section", Vj, [
			t[7] ||= W("div", { class: "gm-section-head" }, [W("div", null, [W("h2", null, "Формула звучания"), W("p", null, "Меняй жанры и двигай ползунки — сумма всегда равна 100%.")]), W("span", { class: "gm-total" }, "Σ 100%")], -1),
			W("div", Hj, [(H(!0), U(V, null, B(i.value, (e, t) => (H(), U("article", {
				key: e.id,
				class: "gm-row",
				style: D({ "--gm-color": e.color })
			}, [
				W("div", Uj, [
					W("span", Wj, k(String(t + 1).padStart(2, "0")), 1),
					W("div", Gj, [W("label", { for: "gm-genre-" + t }, "Музыкальное направление", 8, Kj), W("select", {
						id: "gm-genre-" + t,
						value: e.id,
						"data-gm-genre": t
					}, [(H(!0), U(V, null, B(p(t), (e) => (H(), U("optgroup", {
						key: e.family,
						label: e.family
					}, [(H(!0), U(V, null, B(e.items, (e) => (H(), U("option", {
						key: e.id,
						value: e.id
					}, k(e.name), 9, Yj))), 128))], 8, Jj))), 128))], 8, qj)]),
					W("span", {
						class: "gm-percent",
						"data-gm-value": t
					}, k(e.weight) + "%", 9, Xj),
					W("button", {
						type: "button",
						class: "gm-remove",
						"data-action": "gm-remove",
						"data-slot": t,
						"aria-label": "Убрать жанр " + e.name,
						title: "Убрать жанр",
						disabled: i.value.length <= 2
					}, "×", 8, Zj)
				]),
				W("div", Qj, [W("input", {
					type: "range",
					min: "5",
					max: 100 - 5 * (i.value.length - 1),
					step: "1",
					value: e.weight,
					"data-gm-weight": t,
					"aria-label": "Доля жанра " + e.name
				}, null, 8, $j), W("div", eM, [W("span", {
					"data-gm-meter": t,
					style: D({ width: e.weight + "%" })
				}, null, 12, tM)])]),
				W("p", nM, k(e.family) + " · " + k(e.tagline) + " · " + k(e.instruments), 1)
			], 4))), 128))]),
			W("div", rM, [W("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "gm-add",
				disabled: i.value.length >= 4
			}, "＋ Добавить жанр", 8, iM), t[4] ||= W("button", {
				type: "button",
				class: "btn ghost",
				"data-action": "gm-equal"
			}, "Поровну", -1)]),
			W("div", aM, [(H(!0), U(V, null, B(i.value, (e) => (H(), U("span", {
				key: e.id,
				"data-gm-mixbar": e.id,
				style: D({
					width: e.weight + "%",
					background: e.color
				}),
				title: e.name + ": " + e.weight + "%"
			}, null, 12, oM))), 128))]),
			t[8] ||= W("p", { class: "gm-muted" }, "Проценты — творческий ориентир для генерации, а не гарантия точного соотношения в готовой музыке.", -1),
			t[9] ||= W("div", { class: "gm-divider" }, null, -1),
			t[10] ||= W("h2", null, "Характер композиции", -1),
			W("div", sM, [(H(!0), U(V, null, B(m.value, (e) => (H(), U("div", {
				key: e.key,
				class: "gm-field"
			}, [W("label", { for: "gm-" + e.key }, k(e.label), 9, cM), W("select", {
				id: "gm-" + e.key,
				value: o.value[e.key],
				"data-gm-setting": e.key
			}, [(H(!0), U(V, null, B(e.choices, ([e, t]) => (H(), U("option", {
				key: e,
				value: e
			}, k(t), 9, uM))), 128))], 8, lM)]))), 128))]),
			W("div", dM, [W("label", null, [W("input", {
				type: "checkbox",
				"data-gm-setting": "autoTempo",
				checked: o.value.autoTempo
			}, null, 8, fM), t[5] ||= G(" Определять темп по жанрам", -1)]), W("div", pM, [W("input", {
				id: "gm-tempo",
				type: "range",
				min: "65",
				max: "200",
				value: u.value,
				"data-gm-setting": "tempo",
				disabled: o.value.autoTempo
			}, null, 8, mM), W("b", hM, k(u.value) + " BPM", 1)])]),
			W("div", gM, [t[6] ||= W("label", { for: "gm-theme" }, "Тема песни (необязательно)", -1), W("textarea", {
				id: "gm-theme",
				rows: "2",
				maxlength: "170",
				"data-gm-setting": "theme",
				value: o.value.theme,
				placeholder: "Например: ночной город, встреча после долгой разлуки"
			}, null, 8, _M)]),
			W("div", vM, [(H(), U(V, null, B(h, ([e, t]) => W("label", { key: e }, [W("input", {
				type: "checkbox",
				"data-gm-setting": e,
				checked: o.value[e]
			}, null, 8, yM), G(" " + k(t), 1)])), 64))])
		]), W("aside", bM, [
			t[13] ||= W("div", { class: "eyebrow" }, "Результат микширования", -1),
			t[14] ||= W("h2", null, "Гибридный Style-промпт", -1),
			W("div", xM, k(l.value), 1),
			W("div", SM, [t[11] ||= W("span", null, "На английском · готово для Suno", -1), W("b", CM, k(l.value.length) + " / 1000", 1)]),
			t[15] ||= Sa("<div class=\"gm-output-actions\"><button type=\"button\" class=\"btn primary\" data-action=\"gm-copy\">Копировать</button><button type=\"button\" class=\"btn ghost\" data-action=\"gm-to-studio\">В Suno Studio</button></div><button type=\"button\" class=\"btn ghost gm-full\" data-action=\"gm-save-prompt\">Сохранить в «Мои промпты»</button><div class=\"gm-divider\"></div><h3>Мои сочетания</h3>", 4),
			W("div", wM, [t[12] ||= W("label", { for: "gm-title" }, "Название сочетания", -1), W("input", {
				id: "gm-title",
				type: "text",
				maxlength: "90",
				"data-gm-title": "",
				value: d.value,
				placeholder: "Например: Северный электро-фолк"
			}, null, 8, TM)]),
			t[16] ||= W("button", {
				type: "button",
				class: "btn ghost gm-full",
				"data-action": "gm-save-mix"
			}, "Сохранить формулу", -1),
			W("div", EM, [c.value.length ? K("", !0) : (H(), U("p", DM, "Сохранённых сочетаний пока нет. Придумай свой микс и сохрани его.")), (H(!0), U(V, null, B(c.value, (e) => (H(), U("article", {
				key: e.id,
				class: "gm-saved"
			}, [W("div", null, [W("strong", null, k(e.title), 1), W("small", null, k(e.summary), 1)]), W("div", OM, [W("button", {
				type: "button",
				class: "btn ghost small",
				"data-action": "gm-load",
				"data-id": e.id
			}, "Открыть", 8, kM), W("button", {
				type: "button",
				class: "btn danger small",
				"data-action": "gm-delete",
				"data-id": e.id,
				"aria-label": "Удалить " + e.title
			}, "×", 8, AM)])]))), 128))]),
			t[17] ||= W("p", { class: "gm-muted" }, "Сохраняется в этом браузере и входит в общую JSON-копию данных SUNOBOOM. Подключение к ИИ для смешивания не требуется.", -1)
		])])], 64));
	}
};
// src/vue/studio/legacyMixerBridge.js
function MM({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_MIXER, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Z({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vue-mixer-root"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, jM, { api: t })
	});
}
// src/vue/studio/PromptAuditor.vue
var NM = {
	class: "sbpa-tabs",
	role: "group",
	"aria-label": "Источник промпта"
}, PM = ["aria-pressed"], FM = ["aria-pressed"], IM = {
	key: 0,
	class: "sbpa-manual"
}, LM = ["value"], RM = ["value"], zM = ["value"], BM = {
	key: 1,
	class: "sbpa-context"
}, VM = {
	id: "sbpa-results",
	"aria-live": "polite"
}, HM = { class: "sbpa-scoreline" }, UM = {
	class: "sbpa-score",
	"aria-label": "Эвристическая оценка промпта"
}, WM = { class: "sbpa-score-info" }, GM = ["aria-valuenow"], KM = {
	key: 0,
	class: "sbpa-issues"
}, qM = {
	key: 1,
	class: "sbpa-clear"
}, JM = { class: "sbpa-actions" }, YM = {
	key: 0,
	type: "button",
	"data-sbpa-action": "load-studio"
}, XM = { id: "sbpa-proposal-slot" }, ZM = {
	key: 0,
	class: "sbpa-proposal"
}, QM = { key: 0 }, $M = { key: 1 }, eN = { key: 2 }, tN = {
	key: 3,
	class: "sbpa-alert"
}, nN = ["value"], rN = {
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
		return z(() => window.addEventListener("sunoboom:auditor-updated", u)), Nr(() => window.removeEventListener("sunoboom:auditor-updated", u)), (e, t) => (H(), U(V, null, [
			t[10] ||= W("header", { class: "sbpa-head" }, [W("div", null, [
				W("span", { class: "sbpa-eyebrow" }, "SUNOBOOM · ПРОВЕРКА"),
				W("h2", null, "Интеллектуальный аудитор промптов"),
				W("p", null, "Ищет повторы, противоречия, перегрузку и особенности жанра до отправки в Suno.")
			]), W("span", { class: "sbpa-local" }, "Проверка по правилам · без API")], -1),
			W("div", NM, [W("button", {
				type: "button",
				"data-sbpa-action": "studio",
				class: O({ active: !i.value }),
				"aria-pressed": !i.value
			}, "Текущий промпт Studio", 10, PM), W("button", {
				type: "button",
				"data-sbpa-action": "manual",
				class: O({ active: i.value }),
				"aria-pressed": i.value
			}, "Свой текст / вставка", 10, FM)]),
			i.value ? (H(), U("div", IM, [
				t[0] ||= W("label", { for: "sbpa-text" }, "Текст промпта", -1),
				W("textarea", {
					id: "sbpa-text",
					rows: "5",
					spellcheck: "false",
					placeholder: "Вставь текст на русском или английском…",
					value: n.value.manual
				}, null, 8, LM),
				t[1] ||= W("label", { for: "sbpa-genre" }, "Жанр для сопоставления с Академией", -1),
				W("select", {
					id: "sbpa-genre",
					value: o.value
				}, [(H(!0), U(V, null, B(s.value, (e) => (H(), U("option", {
					key: e.id,
					value: e.id
				}, k(e.name), 9, zM))), 128))], 8, RM)
			])) : (H(), U("p", BM, " Проверяется актуальный промпт конструктора. Изменения настроек Studio отражаются здесь автоматически. ")),
			W("div", VM, [W("div", HM, [
				W("div", UM, [G(k(a.value.score), 1), t[2] ||= W("small", null, "/ 100", -1)]),
				W("div", WM, [
					W("strong", null, k(a.value.status), 1),
					t[3] ||= W("span", null, "Оценка ориентировочная: проверяется структура текста, а не качество будущей музыки.", -1),
					W("div", {
						class: "sbpa-meter",
						role: "progressbar",
						"aria-label": "Оценка промпта",
						"aria-valuenow": a.value.score,
						"aria-valuemin": "0",
						"aria-valuemax": "100"
					}, [W("span", { style: D({ width: a.value.score + "%" }) }, null, 4)], 8, GM)
				]),
				W("div", { class: O(["sbpa-limit", { over: a.value.length > 1e3 }]) }, k(a.value.length) + " / 1000 символов ", 3)
			]), a.value.issues?.length ? (H(), U("ul", KM, [(H(!0), U(V, null, B(a.value.issues, (e, t) => (H(), U("li", {
				key: t,
				class: O(["sbpa-item", "sbpa-" + e.kind])
			}, [W("div", null, [
				W("strong", null, k(e.title), 1),
				W("p", null, k(e.detail), 1),
				W("small", null, k(e.fix), 1)
			])], 2))), 128))])) : (H(), U("p", qM, " Явных противоречий и повторов по проверяемым правилам не найдено. "))]),
			W("div", JM, [t[4] ||= W("button", {
				type: "button",
				"data-sbpa-action": "preview",
				class: "sbpa-primary"
			}, " Показать улучшенный вариант ", -1), i.value ? (H(), U("button", YM, " Вставить текущий промпт Studio ")) : K("", !0)]),
			W("div", XM, [c.value ? (H(), U("div", ZM, [
				W("h4", null, [t[5] ||= G("Предлагаемый вариант ", -1), W("small", null, k(l.value.text.length) + " / 1000", 1)]),
				l.value.removed.length ? (H(), U("p", $M, "Удалено фрагментов: " + k(l.value.removed.length) + ". Проверь смысл до копирования.", 1)) : (H(), U("p", QM, "Удалять нечего: текст уже без точных повторов.")),
				l.value.removed.length ? (H(), U("details", eN, [t[6] ||= W("summary", null, "Что изменилось", -1), W("ul", null, [(H(!0), U(V, null, B(l.value.removed, (e, t) => (H(), U("li", { key: t }, [W("b", null, k(e.reason) + ":", 1), G(" " + k(e.part), 1)]))), 128))])])) : K("", !0),
				l.value.complete ? K("", !0) : (H(), U("p", tN, " Автоматического сокращения недостаточно. Уменьши текст вручную минимум на " + k(l.value.text.length - 1e3) + " символов. ", 1)),
				t[7] ||= W("label", { for: "sbpa-preview-text" }, "Редактируемый предпросмотр", -1),
				W("textarea", {
					id: "sbpa-preview-text",
					rows: "5",
					spellcheck: "false",
					value: l.value.text
				}, null, 8, nN),
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
function iN({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_AUDITOR, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Z({
		root: n,
		selectTarget: (e) => e.querySelector("#sbpa-auditor"),
		readSnapshot: () => t.snapshot(),
		mount: (n, r) => e(n, rN, { api: t })
	});
}
// src/vue/studio/ArrangementComposer.vue
var aN = { class: "sba-add-title" }, oN = {
	id: "sba-add-placement",
	role: "status"
}, sN = { class: "sba-add-row" }, cN = { for: "sba-add-type" }, lN = ["value"], uN = ["hidden"], dN = { class: "sba-add-row sba-add-controls" }, fN = ["hidden"], pN = {
	key: 1,
	type: "button",
	"data-sba-action": "request-preset",
	class: "sba-btn sba-preset-btn"
}, mN = ["hidden", "aria-expanded"], hN = {
	id: "sba-snake-meta",
	class: "sba-snake-meta"
}, gN = ["hidden", "aria-expanded"], _N = {
	key: 4,
	class: "sba-confirm"
}, vN = {
	key: 5,
	type: "button",
	class: "sba-end-add",
	"data-sba-action": "insert-end"
}, yN = {
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
		let t = e, n = /* @__PURE__ */ F(t.initial), r = q(() => n.value.controls), i = /* @__PURE__ */ P(r.value.type), a = () => {
			n.value = t.api.snapshot();
		};
		return window.addEventListener("sunoboom:arranger-updated", a), Nr(() => window.removeEventListener("sunoboom:arranger-updated", a)), (t, a) => e.kind === "composer" ? (H(), U(V, { key: 0 }, [
			W("div", aN, [a[2] ||= W("strong", null, "+ Новый блок", -1), W("span", oN, k(r.value.placement), 1)]),
			W("div", sN, [W("label", cN, [a[3] ||= G("Тип фрагмента", -1), L(W("select", {
				id: "sba-add-type",
				"onUpdate:modelValue": a[0] ||= (e) => i.value = e
			}, [(H(!0), U(V, null, B(n.value.sections, (e) => (H(), U("option", {
				key: e.id,
				value: e.id
			}, k(e.name), 9, lN))), 128))], 512), [[Jo, i.value]])]), W("label", {
				id: "sba-custom-name-wrap",
				for: "sba-new-block-title",
				hidden: i.value !== "custom"
			}, [a[4] ||= G("Название своего блока", -1), a[1] || (da(-1, !0), (a[1] = W("input", {
				id: "sba-new-block-title",
				value: r.value.title,
				type: "text",
				maxlength: "48",
				placeholder: "Например: Разговорный переход",
				autocomplete: "off"
			}, null, 8, ["value"])).cacheIndex = 1, da(1), a[1])], 8, uN)]),
			W("div", dN, [a[5] ||= W("button", {
				class: "sba-btn sba-add-btn",
				"data-sba-action": "add",
				type: "button"
			}, "+ Добавить блок", -1), W("button", {
				class: "sba-btn sba-placement-reset",
				"data-sba-action": "reset-insert",
				type: "button",
				hidden: !r.value.inserting
			}, "Добавлять в конец", 8, fN)]),
			a[6] ||= W("p", { class: "sba-add-hint" }, "Выбери куплет, припев, дроп или свой фрагмент. После добавления можно настроить такты, энергию, вокал и инструменты.", -1)
		], 64)) : e.kind === "apply" ? (H(), U("button", pN, "Применить шаблон")) : e.kind === "expand" ? (H(), U("button", {
			key: 2,
			type: "button",
			id: "sba-transition-hub-expand",
			class: "sba-transition-hub-expand",
			"data-sba-action": "transition-hub-expand",
			hidden: r.value.transitions <= 3,
			"aria-expanded": n.value.transitionHubExpanded
		}, k(n.value.transitionHubExpanded ? "Свернуть список" : "Показать все (" + r.value.transitions + ")"), 9, mN)) : e.kind === "snake-tools" ? (H(), U(V, { key: 3 }, [W("span", hN, k(r.value.snakeMeta), 1), W("button", {
			type: "button",
			id: "sba-snake-toggle",
			"data-sba-action": "snake-toggle",
			hidden: r.value.total <= r.value.previewCount,
			"aria-expanded": n.value.snakeExpanded
		}, k(n.value.snakeExpanded ? "Свернуть" : "Показать все (" + r.value.total + ")"), 9, gN)], 64)) : e.kind === "preset-confirm" && r.value.pending ? (H(), U("div", _N, [
			W("span", null, "Заменить текущую структуру шаблоном «" + k(r.value.pending) + "»? Текущие блоки будут заменены.", 1),
			a[7] ||= W("button", {
				type: "button",
				"data-sba-action": "preset-accept"
			}, "Заменить", -1),
			a[8] ||= W("button", {
				type: "button",
				"data-sba-action": "preset-cancel"
			}, "Отмена", -1)
		])) : e.kind === "end-add" ? (H(), U("button", vN, "+ Добавить блок в конец")) : K("", !0);
	}
}, bN = ["data-sba-id", "data-sba-energy"], xN = { class: "sba-block-head" }, SN = ["data-sba-drag", "aria-label"], CN = { class: "sba-index" }, wN = {
	class: "sba-emoji",
	"aria-hidden": "true"
}, TN = { class: "sba-head-energy" }, EN = { class: "sba-block-actions" }, DN = ["data-id", "disabled"], ON = ["data-id", "disabled"], kN = ["data-id"], AN = ["data-id"], jN = { class: "sba-block-fields" }, MN = ["data-id", "value"], NN = ["value"], PN = ["data-id", "value"], FN = ["value"], IN = ["data-id", "value"], LN = ["value"], RN = { class: "sba-energy-field" }, zN = ["data-sba-output"], BN = ["value", "data-id"], VN = { class: "sba-instrument-field" }, HN = ["for"], UN = { class: "sba-instrument-row" }, WN = [
	"id",
	"data-id",
	"value"
], GN = ["id", "innerHTML"], KN = ["id"], qN = { class: "sba-sound-head" }, JN = ["data-id"], YN = ["data-id"], XN = ["id"], ZN = {
	key: 0,
	class: "sba-sound-back"
}, QN = ["data-id"], $N = [
	"data-sba-sound-search",
	"data-id",
	"value",
	"placeholder"
], eP = ["id"], tP = { class: "sba-sound-info" }, nP = { key: 0 }, rP = ["data-id", "data-genre-id"], iP = {
	key: 0,
	class: "sba-sound-none"
}, aP = { class: "sba-sound-group" }, oP = [
	"disabled",
	"aria-disabled",
	"data-id",
	"data-sound-value"
], sP = {
	key: 0,
	class: "sba-sound-none"
}, cP = {
	key: 1,
	class: "sba-sound-foot"
}, lP = ["data-id"], uP = {
	key: 0,
	class: "sba-custom-label"
}, dP = ["data-id", "value"], fP = ["innerHTML"], pP = ["data-id", "aria-label"], mP = {
	key: 0,
	class: "sba-empty"
}, hP = ["aria-label"], gP = [
	"data-sba-snake-id",
	"data-sba-energy",
	"aria-label",
	"title"
], _P = { class: "sba-snake-num" }, vP = {
	class: "sba-snake-icon",
	"aria-hidden": "true"
}, yP = { class: "sba-snake-title" }, bP = { class: "sba-snake-level" }, xP = ["title"], SP = {
	key: 0,
	class: "sba-snake-more"
}, CP = {
	key: 1,
	class: "sba-snake-empty"
}, wP = ["data-sba-hub-from"], TP = { class: "sba-transition-hub-route" }, EP = { class: "sba-transition-hub-number" }, DP = { class: "sba-transition-hub-names" }, OP = { class: "sba-transition-hub-controls" }, kP = [
	"data-id",
	"value",
	"aria-label"
], AP = ["value"], jP = [
	"data-id",
	"value",
	"aria-label"
], MP = ["value"], NP = [
	"data-id",
	"value",
	"aria-label"
], PP = ["value"], FP = { class: "sba-transition-hub-actions" }, IP = ["data-id", "title"], LP = ["data-id"], RP = {
	key: 1,
	class: "sba-transition-hub-empty"
}, zP = ["title"], BP = { class: "sba-chart-column" }, VP = {
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
		z(() => window.addEventListener("sunoboom:arranger-updated", h)), Nr(() => window.removeEventListener("sunoboom:arranger-updated", h));
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
			}, [W("div", xN, [
				W("span", {
					class: "sba-drag",
					draggable: "true",
					"data-sba-drag": e.id,
					title: "Перетащить блок",
					"aria-label": "Перетащить " + e.sectionName
				}, "⠿", 8, SN),
				W("span", CN, k(String(t + 1).padStart(2, "0")), 1),
				W("span", wN, k(e.icon), 1),
				W("strong", null, k(e.label), 1),
				W("span", TN, "Энергия " + k(e.energy) + "/5", 1),
				W("div", EN, [
					W("button", {
						type: "button",
						"data-sba-action": "up",
						"data-id": e.id,
						"aria-label": "Переместить вверх",
						disabled: t === 0
					}, "↑", 8, DN),
					W("button", {
						type: "button",
						"data-sba-action": "down",
						"data-id": e.id,
						"aria-label": "Переместить вниз",
						disabled: t === i.value.length - 1
					}, "↓", 8, ON),
					W("button", {
						type: "button",
						"data-sba-action": "duplicate",
						"data-id": e.id,
						"aria-label": "Дублировать блок"
					}, "⧉", 8, kN),
					W("button", {
						type: "button",
						"data-sba-action": "remove",
						"data-id": e.id,
						"aria-label": "Удалить блок"
					}, "×", 8, AN)
				])
			]), W("div", jN, [
				W("label", null, [n[0] ||= G("Раздел ", -1), W("select", {
					"data-sba-field": "type",
					"data-id": e.id,
					value: e.type
				}, [(H(!0), U(V, null, B(a.value, (e) => (H(), U("option", {
					key: e.id,
					value: e.id
				}, k(e.name), 9, NN))), 128))], 8, MN)]),
				W("label", null, [n[1] ||= G("Тактов ", -1), W("select", {
					"data-sba-field": "bars",
					"data-id": e.id,
					value: e.bars
				}, [(H(), U(V, null, B(m, (e) => W("option", {
					key: e,
					value: e
				}, k(e), 9, FN)), 64))], 8, PN)]),
				W("label", null, [n[2] ||= G("Вокал ", -1), W("select", {
					"data-sba-field": "vocal",
					"data-id": e.id,
					value: e.vocal
				}, [(H(!0), U(V, null, B(o.value, (e) => (H(), U("option", {
					key: e.id,
					value: e.id
				}, k(e.name), 9, LN))), 128))], 8, IN)]),
				W("label", RN, [
					n[3] ||= G("Энергия ", -1),
					W("output", { "data-sba-output": e.id }, k(e.energy) + "/5 · " + k(s.value[e.energy]), 9, zN),
					W("input", {
						type: "range",
						min: "1",
						max: "5",
						step: "1",
						value: e.energy,
						"data-sba-field": "energy",
						"data-id": e.id
					}, null, 8, BN)
				]),
				W("div", VN, [
					W("label", { for: "sba-instruments-" + e.id }, "Инструменты / приём", 8, HN),
					W("div", UN, [W("input", {
						type: "text",
						id: "sba-instruments-" + e.id,
						maxlength: "300",
						"data-sba-field": "instruments",
						"data-id": e.id,
						value: e.instruments,
						placeholder: "Введи вручную или выбери рекомендацию",
						autocomplete: "off"
					}, null, 8, WN)]),
					W("div", {
						class: "sba-quick-sounds",
						id: "sba-quick-" + e.id,
						innerHTML: e.quickSounds
					}, null, 8, GN),
					e.soundPanel ? (H(), U("div", {
						key: 0,
						class: "sba-sound-panel",
						id: "sba-sound-panel-" + e.id,
						"aria-label": "Выбор инструментов и приёмов"
					}, [
						W("div", qN, [n[4] ||= W("strong", null, "Библиотека инструментов и приёмов", -1), W("button", {
							type: "button",
							"data-sba-action": "sound-close",
							"data-id": e.id,
							"aria-label": "Закрыть подбор"
						}, "×", 8, JN)]),
						W("button", {
							type: "button",
							class: "sba-sound-genre-trigger",
							"data-sba-action": "sound-switch-mode",
							"data-id": e.id
						}, [
							n[5] ||= G(" Жанр: ", -1),
							W("b", null, k(e.soundPanel.genreName), 1),
							n[6] ||= W("span", null, "⌄", -1)
						], 8, YN),
						W("div", { id: "sba-sound-body-" + e.id }, [
							e.soundPanel.mode === "genres" ? (H(), U("div", ZN, [W("button", {
								type: "button",
								"data-sba-action": "sound-switch-mode",
								"data-id": e.id
							}, " ← К инструментам ", 8, QN)])) : K("", !0),
							W("input", {
								type: "search",
								class: "sba-sound-search",
								"data-sba-sound-search": e.soundPanel.mode,
								"data-id": e.id,
								value: e.soundPanel.query,
								placeholder: e.soundPanel.mode === "genres" ? "Поиск по всей Академии..." : "Поиск инструмента или приёма...",
								autocomplete: "off",
								"aria-label": "Поиск инструментов или жанров"
							}, null, 8, $N),
							W("div", {
								class: "sba-sound-list",
								id: "sba-sound-results-" + e.id
							}, [e.soundPanel.mode === "genres" ? (H(), U(V, { key: 0 }, [
								W("div", tP, [G(" Найдено жанров: " + k(e.soundPanel.total) + " ", 1), e.soundPanel.total > e.soundPanel.matches.length ? (H(), U("span", nP, " · уточни запрос ")) : K("", !0)]),
								(H(!0), U(V, null, B(e.soundPanel.matches, (t) => (H(), U("button", {
									key: t.id,
									type: "button",
									class: "sba-sound-genre-row",
									"data-sba-action": "sound-set-genre",
									"data-id": e.id,
									"data-genre-id": t.id
								}, [W("span", null, k(t.name), 1), W("small", null, k(t.family), 1)], 8, rP))), 128)),
								e.soundPanel.matches.length ? K("", !0) : (H(), U("p", iP, " Жанр не найден "))
							], 64)) : (H(), U(V, { key: 1 }, [(H(!0), U(V, null, B(e.soundPanel.groups, (t) => (H(), U(V, { key: t.title }, [W("div", aP, k(t.title), 1), (H(!0), U(V, null, B(t.items, (t) => (H(), U("button", {
								key: t.name,
								type: "button",
								class: "sba-sound-option",
								disabled: t.added,
								"aria-disabled": t.added,
								"data-sba-action": "sound-add",
								"data-id": e.id,
								"data-sound-value": t.name
							}, [W("span", null, k(t.name), 1), W("small", null, k(t.added ? "✓ Добавлено" : "+ Добавить"), 1)], 8, oP))), 128))], 64))), 128)), e.soundPanel.groups.length ? K("", !0) : (H(), U("p", sP, " Совпадений нет. Можно ввести инструмент вручную. "))], 64))], 8, eP),
							e.soundPanel.mode === "genres" ? K("", !0) : (H(), U("div", cP, [n[7] ||= W("span", null, "Нажми «Добавить», чтобы дополнить поле. Свой текст сохраняется.", -1), W("button", {
								type: "button",
								"data-sba-action": "sound-clear",
								"data-id": e.id
							}, " Очистить поле ", 8, lP)]))
						], 8, XN)
					], 8, KN)) : K("", !0)
				]),
				e.type === "custom" ? (H(), U("label", uP, [n[8] ||= G("Своё название ", -1), W("input", {
					type: "text",
					maxlength: "48",
					"data-sba-field": "customName",
					"data-id": e.id,
					value: e.customName,
					placeholder: "Название для тега Suno"
				}, null, 8, dP)])) : K("", !0)
			])], 8, bN),
			e.transitionHTML ? (H(), U("div", {
				key: 0,
				style: { display: "contents" },
				innerHTML: e.transitionHTML
			}, null, 8, fP)) : K("", !0),
			W("button", {
				type: "button",
				class: "sba-between-add",
				"data-sba-action": "insert-after",
				"data-id": e.id,
				"aria-label": "Добавить блок после " + e.label
			}, [...n[9] ||= [W("span", { "aria-hidden": "true" }, "＋", -1), G(" Добавить после ", -1)]], 8, pP)
		], 64))), 128)), i.value.length ? K("", !0) : (H(), U("div", mP, "Пока нет блоков. Добавь первый фрагмент снизу."))], 64)) : e.kind === "snake" ? (H(), U(V, { key: 1 }, [i.value.length ? (H(), U(V, { key: 0 }, [(H(), U(V, null, B([6, 3], (e) => W("div", {
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
			W("span", _P, k(e.index + 1), 1),
			W("span", vP, k(e.icon), 1),
			W("span", yP, k(e.snakeLabel), 1),
			W("span", bP, k(e.energy) + "/5", 1),
			e.hasTransition ? (H(), U("span", {
				key: 0,
				class: "sba-snake-transition",
				title: "Переход: " + e.transitionLabel,
				"aria-hidden": "true"
			}, "↝", 8, xP)) : K("", !0)
		], 8, gP))), 128))], 2))), 128))], 10, hP)), 64)), f.value.length < i.value.length ? (H(), U("p", SP, " … и ещё " + k(i.value.length - f.value.length) + " блоков ", 1)) : K("", !0)], 64)) : (H(), U("p", CP, "Добавь первый блок, и здесь появится схема композиции."))], 64)) : e.kind === "transitions" ? (H(), U(V, { key: 2 }, [c.value.length ? (H(!0), U(V, { key: 0 }, B(p.value, (e) => (H(), U("div", {
			key: e.id,
			class: O(["sba-transition-hub-row", { "sba-transition-hub-active": e.current.type !== "none" }]),
			"data-sba-hub-from": e.id
		}, [
			W("div", TP, [W("span", EP, k(e.index + 1) + " → " + k(e.index + 2), 1), W("span", DP, [
				G(k(e.from) + " ", 1),
				n[10] ||= W("b", null, "→", -1),
				G(" " + k(e.to), 1)
			])]),
			W("div", OP, [
				W("label", null, [n[11] ||= G("Эффект ", -1), W("select", {
					"data-sba-transition": "type",
					"data-id": e.id,
					value: e.current.type,
					"aria-label": "Переход " + (e.index + 1) + " к " + (e.index + 2)
				}, [(H(!0), U(V, null, B(l.value, (e) => (H(), U("option", {
					key: e.id,
					value: e.id
				}, k(e.name), 9, AP))), 128))], 8, kP)]),
				W("label", null, [n[12] ||= G("Длина ", -1), W("select", {
					"data-sba-transition": "length",
					"data-id": e.id,
					value: e.current.length,
					"aria-label": "Длительность перехода " + (e.index + 1)
				}, [(H(!0), U(V, null, B(u.value, (e) => (H(), U("option", {
					key: e.id,
					value: e.id
				}, k(e.name), 9, MP))), 128))], 8, jP)]),
				W("label", null, [n[13] ||= G("Сила ", -1), W("select", {
					"data-sba-transition": "strength",
					"data-id": e.id,
					value: e.current.strength,
					"aria-label": "Выраженность перехода " + (e.index + 1)
				}, [(H(!0), U(V, null, B(d.value, (e) => (H(), U("option", {
					key: e.id,
					value: e.id
				}, k(e.name), 9, PP))), 128))], 8, NP)])
			]),
			W("div", FP, [W("button", {
				type: "button",
				"data-sba-action": "transition-suggest",
				"data-id": e.id,
				title: "Совет: " + e.advice
			}, "✧ Совет", 8, IP), W("button", {
				type: "button",
				"data-sba-action": "transition-hub-jump",
				"data-id": e.id
			}, "Подробнее ↓", 8, LP)])
		], 10, wP))), 128)) : (H(), U("p", RP, "Добавь второй блок, и здесь можно будет настроить переходы."))], 64)) : e.kind === "energy" ? (H(!0), U(V, { key: 3 }, B(i.value, (e) => (H(), U("div", {
			key: e.id,
			class: "sba-chart-step",
			title: e.label + " · " + e.energy + "/5",
			style: D({
				"--energy": e.energy,
				"--bar-width": 100 / i.value.length + "%"
			})
		}, [W("div", BP, [W("i", { style: D({ "--level": e.energy }) }, null, 4)]), W("small", null, k(e.icon), 1)], 12, zP))), 128)) : K("", !0);
	}
}, HP = ["aria-expanded"], UP = { id: "sba-picked-label" }, WP = ["hidden"], GP = { class: "sba-preset-search-row" }, KP = ["value"], qP = {
	class: "sba-preset-filters",
	role: "group",
	"aria-label": "Тип вариантов"
}, JP = ["data-filter", "aria-pressed"], YP = {
	id: "sba-preset-results",
	class: "sba-preset-results",
	role: "listbox",
	"aria-label": "Доступные шаблоны и жанры"
}, XP = { class: "sba-preset-group-title" }, ZP = { key: 0 }, QP = ["aria-selected", "data-choice"], $P = {
	key: 0,
	class: "sba-preset-no-results"
}, eF = {
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
		return z(() => window.addEventListener("sunoboom:arranger-updated", i)), Nr(() => window.removeEventListener("sunoboom:arranger-updated", i)), (e, t) => (H(), U(V, null, [
			t[2] ||= W("span", { class: "sba-preset-caption" }, "Шаблон композиции / жанр", -1),
			W("button", {
				type: "button",
				id: "sba-presets",
				class: "sba-preset-trigger",
				"data-sba-action": "menu-toggle",
				"aria-haspopup": "dialog",
				"aria-expanded": r.value.open,
				"aria-controls": "sba-preset-menu"
			}, [W("span", UP, k(r.value.selected), 1), t[0] ||= W("span", {
				class: "sba-preset-chevron",
				"aria-hidden": "true"
			}, "⌄", -1)], 8, HP),
			W("div", {
				id: "sba-preset-menu",
				class: "sba-preset-menu",
				role: "dialog",
				"aria-label": "Поиск шаблона или жанра",
				hidden: !r.value.open
			}, [
				W("div", GP, [W("input", {
					type: "search",
					id: "sba-preset-search",
					autocomplete: "off",
					value: r.value.query,
					placeholder: "Найти жанр или шаблон...",
					"aria-label": "Поиск жанра"
				}, null, 8, KP), t[1] ||= W("button", {
					type: "button",
					"data-sba-action": "menu-close",
					"aria-label": "Закрыть меню"
				}, "×", -1)]),
				W("div", qP, [(H(!0), U(V, null, B([
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
				}, k(e.title), 9, JP))), 128))]),
				W("div", YP, [(H(!0), U(V, null, B(r.value.groups, (e) => (H(), U(V, { key: e.title }, [W("div", XP, [G(k(e.title) + " ", 1), e.count === null ? K("", !0) : (H(), U("small", ZP, k(e.count), 1))]), (H(!0), U(V, null, B(e.items, (e) => (H(), U("button", {
					key: e.key,
					type: "button",
					role: "option",
					"aria-selected": e.key === r.value.selectedKey,
					"data-sba-action": "menu-choose",
					"data-choice": e.key
				}, [W("span", null, k(e.title), 1), W("small", null, k(e.subtitle), 1)], 8, QP))), 128))], 64))), 128)), r.value.groups.length ? K("", !0) : (H(), U("p", $P, " Ничего не найдено. Попробуй другое название или направление. "))])
			], 8, WP)
		], 64));
	}
}, tF = {
	class: "sba-preview-tabs",
	role: "group",
	"aria-label": "Тип результата"
}, nF = ["aria-pressed"], rF = ["aria-pressed"], iF = ["value"], aF = {
	class: "sba-preview-count",
	id: "sba-preview-count"
}, oF = {
	id: "sba-transfer-confirm",
	"aria-live": "polite"
}, sF = {
	key: 0,
	class: "sba-transfer-preview"
}, cF = ["hidden"], lF = {
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
		return z(() => window.addEventListener("sunoboom:arranger-updated", i)), Nr(() => window.removeEventListener("sunoboom:arranger-updated", i)), (e, t) => (H(), U(V, null, [
			t[3] ||= W("div", { class: "sba-result-header" }, [
				W("span", { class: "sba-eyebrow" }, "ПРЕДПРОСМОТР"),
				W("h3", null, "Результат для Suno"),
				W("p", null, "Lyrics — теги по секциям; Style — короткое описание динамики.")
			], -1),
			W("div", tF, [W("button", {
				type: "button",
				"data-sba-action": "tab",
				"data-tab": "lyrics",
				"aria-pressed": r.value.tab === "lyrics"
			}, "Теги Lyrics", 8, nF), W("button", {
				type: "button",
				"data-sba-action": "tab",
				"data-tab": "style",
				"aria-pressed": r.value.tab === "style"
			}, "Style", 8, rF)]),
			W("textarea", {
				id: "sba-preview",
				readonly: "",
				spellcheck: "false",
				"aria-label": "Готовые теги структуры песни",
				value: r.value.text
			}, null, 8, iF),
			W("div", aF, k(r.value.count), 1),
			t[4] ||= W("div", { class: "sba-result-actions" }, [W("button", {
				type: "button",
				class: "sba-btn sba-copy-btn",
				"data-sba-action": "copy"
			}, " Копировать результат "), W("button", {
				type: "button",
				class: "sba-btn sba-transfer-btn",
				"data-sba-action": "prepare-transfer"
			}, " Перенести стиль в Studio ")], -1),
			W("div", oF, [r.value.transfer ? (H(), U("div", sF, [
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
			}, k(r.value.message), 9, cF),
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
}, uF = [
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
		yN
	]),
	["#sba-cards", "cards"],
	["#sba-snake-track", "snake"],
	["#sba-transition-hub-list", "transitions"],
	["#sba-energy-chart", "energy"],
	[
		".sba-preset-picker",
		"picker",
		eF
	],
	[
		".sba-result",
		"result",
		lF
	]
];
function dF({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_ARRANGER, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Ed({
		root: n,
		islands: uF.map(([n, r, i = VP]) => ({
			key: r,
			selectTarget: (e) => e.querySelector(n),
			readSnapshot: () => t.snapshot(),
			mount: (n, a) => {
				let o = e(n, i, i === VP || i === yN ? {
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
var fF = {
	key: 0,
	class: "sb-poetry-empty"
}, pF = { class: "sb-poetry-stats" }, mF = { class: "sb-poetry-subline" }, hF = { class: "sb-poetry-sections" }, gF = { class: "sb-poetry-stanzas" }, _F = { class: "sb-poetry-stanza-name" }, vF = { class: "sb-poetry-stanza-data" }, yF = { class: "sb-poetry-lines" }, bF = { class: "sb-poetry-line-main" }, xF = { class: "sb-poetry-index" }, SF = { class: "sb-poetry-verse" }, CF = {
	class: "sb-poetry-syllable",
	title: "Оценка слогов"
}, wF = ["title"], TF = {
	key: 0,
	class: "sb-poetry-footnote"
}, EF = {
	key: 1,
	class: "sb-poetry-words"
}, DF = { class: "sb-poetry-tips" }, OF = {
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
		}), Nr(() => window.removeEventListener("sunoboom:poetry-updated", a)), (e, t) => r.value.analyzed ? (H(), U(V, { key: 1 }, [
			W("div", pF, [(H(!0), U(V, null, B(r.value.stats, (e) => (H(), U("div", {
				key: e.label,
				class: "sb-poetry-stat"
			}, [W("strong", null, k(e.value), 1), W("span", null, k(e.label), 1)]))), 128))]),
			W("p", mF, " Диапазон: " + k(r.value.lower) + "–" + k(r.value.upper) + " слогов на строку · меток ударения: " + k(r.value.markedStress) + ". ", 1),
			W("div", hF, [t[1] ||= W("h4", null, "Строфы и предполагаемая рифмовка", -1), W("div", gF, [(H(!0), U(V, null, B(r.value.stanzas, (e) => (H(), U("div", {
				key: e.id,
				class: "sb-poetry-stanza"
			}, [W("div", _F, k(e.section) + " · строфа " + k(e.position), 1), W("div", vF, [
				G(" Схема " + k(e.scheme) + " ", 1),
				t[0] ||= W("span", null, "·", -1),
				G(" разброс " + k(e.spread) + " сл. ", 1)
			])]))), 128))])]),
			t[4] ||= W("div", { class: "sb-poetry-lines-head" }, [W("strong", null, "Построчный анализ"), W("span", null, "Слоги · рифма")], -1),
			W("div", yF, [(H(!0), U(V, null, B(r.value.lines, (e) => (H(), U("div", {
				key: e.number,
				class: "sb-poetry-line"
			}, [
				W("div", bF, [W("span", xF, k(e.number) + ".", 1), W("span", SF, k(e.text), 1)]),
				W("div", CF, [W("span", null, k(e.syllables) + " сл.", 1), W("i", { style: D({ width: e.width + "%" }) }, null, 4)]),
				W("span", {
					class: O(["sb-poetry-letter", { "sb-poetry-letter-match": e.rhyme }]),
					title: e.repeat ? "Совпадение последнего слова" : e.rhyme ? "Предполагаемая рифма" : "Метка окончания"
				}, k(e.mark), 11, wF)
			]))), 128))]),
			r.value.rowCount > 120 ? (H(), U("p", TF, " Показаны первые 120 строк из " + k(r.value.rowCount) + "; статистика рассчитана по всему тексту. ", 1)) : K("", !0),
			r.value.frequent.length ? (H(), U("div", EF, [t[2] ||= W("strong", null, "Повторяющиеся слова:", -1), (H(!0), U(V, null, B(r.value.frequent, (e) => (H(), U("span", { key: e.word }, k(e.word) + " · " + k(e.count), 1))), 128))])) : K("", !0),
			W("div", DF, [t[3] ||= W("h4", null, "На что обратить внимание", -1), W("ul", null, [(H(!0), U(V, null, B(r.value.suggestions, (e, t) => (H(), U("li", { key: t }, k(e), 1))), 128))])]),
			t[5] ||= W("p", { class: "sb-poetry-footnote" }, " Анализ ориентировочный: счёт гласных не равен точной метрической скансии, совпадение окончаний не гарантирует рифму, а вокальная удобность зависит от темпа и мелодии. Исходный текст автоматически не изменяется. ", -1)
		], 64)) : (H(), U("p", fF, k(r.value.message), 1));
	}
}, kF = {
	key: 0,
	class: "sb-stress-ambig-clear"
}, AF = { class: "sb-stress-ambig-heading" }, jF = { class: "sb-stress-ambig-variants" }, MF = ["data-word", "data-variant"], NF = {
	key: 0,
	class: "sb-poetry-small"
}, PF = {
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
		}), Nr(() => {
			window.removeEventListener("sunoboom:poetry-stress-updated", a), i.clearPoetryAmbiguitySummary();
		}), (e, t) => r.value.count ? (H(), U(V, { key: 1 }, [
			W("div", AF, " 🔴 Требуют проверки: " + k(r.value.count) + " вхождений (" + k(r.value.total) + " разных слов). Нажми нужный вариант для каждого вхождения. ", 1),
			(H(!0), U(V, null, B(r.value.words, (e) => (H(), U("div", {
				key: e.key,
				class: "sb-stress-ambig-choice"
			}, [W("strong", null, k(e.key) + k(e.count > 1 ? " ×" + e.count : ""), 1), W("div", jF, [(H(!0), U(V, null, B(e.variants, (t) => (H(), U("button", {
				key: t,
				type: "button",
				"data-action": "sb-poetry-stress-choice",
				"data-word": e.key,
				"data-variant": t,
				title: "Указать ударение для следующего вхождения"
			}, k(t), 9, MF))), 128))])]))), 128)),
			r.value.total > 30 ? (H(), U("p", NF, " Показаны первые 30 разных слов; другие можно исправить вручную. ")) : K("", !0)
		], 64)) : (H(), U("p", kF, " ✓ Все найденные неоднозначные слова проверены. "));
	}
};
// src/vue/poetry/legacyPoetryBridge.js
function FF({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_POETRY, n = document.getElementById("app");
	return !t?.analysis || !t?.ambiguities || !n ? () => {} : Ed({
		root: n,
		islands: [[
			"analysis",
			"#sb-poetry-result",
			OF
		], [
			"ambiguities",
			"#sb-poetry-ambiguous-choices",
			PF
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
var IF = { class: "sb-vt-field" }, LF = ["value"], RF = ["value"], zF = {
	class: "sb-vt-hint",
	id: "sb-vt-mode-hint"
}, BF = { class: "sb-vt-grid" }, VF = { class: "sb-vt-field" }, HF = ["value"], UF = ["value"], WF = { class: "sb-vt-field" }, GF = ["value"], KF = ["value"], qF = {
	key: 0,
	class: "sb-vt-field"
}, JF = ["value"], YF = ["value"], XF = { class: "sb-vt-intensity" }, ZF = { class: "sb-vt-between" }, QF = { id: "sb-vt-intensity-label" }, $F = ["value"], eI = { class: "sb-vt-options" }, tI = ["data-vt-pref", "checked"], nI = {
	key: 1,
	class: "sb-vt-consent",
	id: "sb-vt-consent-row"
}, rI = { class: "sb-vt-buttons" }, iI = ["disabled"], aI = {
	id: "sb-vt-result",
	"aria-live": "polite"
}, oI = {
	key: 0,
	class: "sb-vt-draft"
}, sI = { class: "sb-vt-draft-head" }, cI = { class: "sb-vt-method" }, lI = { class: "sb-vt-section-list" }, uI = { class: "sb-vt-section-heading" }, dI = { class: "sb-vt-section-controls" }, fI = [
	"data-vt-preset",
	"value",
	"aria-label"
], pI = ["value"], mI = [
	"data-vt-cue",
	"value",
	"aria-label"
], hI = { class: "sb-vt-field" }, gI = ["value"], _I = {
	class: "sb-vt-small",
	id: "sb-vt-preview-state"
}, vI = {
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
		}), Nr(() => {
			window.removeEventListener("sunoboom:tags-updated", u), r.clearPerformanceTagsSummary();
		}), (e, t) => (H(), U(V, null, [
			t[12] ||= W("div", { class: "sb-vt-header" }, [W("span", { class: "sb-vt-symbol" }, "🎭"), W("div", null, [W("h3", null, "Генератор тегов исполнения"), W("p", null, "Вокальная драматургия по секциям. Без изменения слов песни; результат можно проверить и применить только вручную.")])], -1),
			W("div", IF, [t[0] ||= W("label", { for: "sb-vt-mode" }, "Способ генерации", -1), W("select", {
				id: "sb-vt-mode",
				"data-vt-pref": "mode",
				value: i.value.mode
			}, [(H(), U(V, null, B(o, ([e, t]) => W("option", {
				key: e,
				value: e
			}, k(t), 9, RF)), 64))], 8, LF)]),
			W("p", zF, k(n.value.modeHint), 1),
			W("div", BF, [W("div", VF, [t[1] ||= W("label", { for: "sb-vt-source" }, "Источник текста", -1), W("select", {
				id: "sb-vt-source",
				"data-vt-pref": "source",
				value: i.value.source
			}, [(H(), U(V, null, B(c, ([e, t]) => W("option", {
				key: e,
				value: e
			}, k(t), 9, UF)), 64))], 8, HF)]), W("div", WF, [t[2] ||= W("label", { for: "sb-vt-density" }, "Детализация метатегов", -1), W("select", {
				id: "sb-vt-density",
				"data-vt-pref": "density",
				value: i.value.density
			}, [(H(), U(V, null, B(s, ([e, t]) => W("option", {
				key: e,
				value: e
			}, k(t), 9, KF)), 64))], 8, GF)])]),
			n.value.artists?.length ? (H(), U("div", qF, [t[4] ||= W("label", { for: "sb-vt-artist" }, "Учесть «ДНК артиста» (необязательно)", -1), W("select", {
				id: "sb-vt-artist",
				"data-vt-pref": "artistId",
				value: i.value.artistId
			}, [t[3] ||= W("option", { value: "" }, "Без привязки к артисту", -1), (H(!0), U(V, null, B(n.value.artists, (e) => (H(), U("option", {
				key: e.id,
				value: e.id
			}, k(e.name), 9, YF))), 128))], 8, JF)])) : K("", !0),
			W("div", XF, [
				W("div", ZF, [t[5] ||= W("label", { for: "sb-vt-intensity" }, "Максимальная интенсивность исполнения", -1), W("strong", QF, k(i.value.intensity) + " / 5", 1)]),
				W("input", {
					type: "range",
					id: "sb-vt-intensity",
					min: "1",
					max: "5",
					step: "1",
					value: i.value.intensity,
					"data-vt-pref": "intensity"
				}, null, 8, $F),
				t[6] ||= W("div", { class: "sb-vt-between sb-vt-scale" }, [W("span", null, "Сдержанная"), W("span", null, "Экспрессивная")], -1)
			]),
			W("div", eI, [(H(), U(V, null, B(l, ([e, t]) => W("label", { key: e }, [W("input", {
				type: "checkbox",
				"data-vt-pref": e,
				checked: i.value[e]
			}, null, 8, tI), G(" " + k(t), 1)])), 64))]),
			n.value.hasEndpoint ? (H(), U("label", nI, [...t[7] ||= [W("input", {
				type: "checkbox",
				id: "sb-vt-consent"
			}, null, -1), G(" Разрешаю отправить выбранный текст песни на защищённый сервер для анализа Gemini. ", -1)]])) : K("", !0),
			W("div", rI, [W("button", {
				type: "button",
				class: "btn primary",
				"data-action": "vt-generate",
				disabled: n.value.busy
			}, "✨ Создать предпросмотр", 8, iI), t[8] ||= W("span", { class: "sb-vt-note" }, "Никакого автоматического применения к Lyrics.", -1)]),
			W("div", {
				id: "sb-vt-notice",
				class: O(["sb-vt-notice", n.value.notice?.kind]),
				role: "status",
				"aria-live": "polite"
			}, k(n.value.notice?.text), 3),
			W("div", aI, [a.value ? (H(), U("div", oI, [
				W("div", sI, [W("h4", null, "Предпросмотр · " + k(a.value.sections.length) + " секций", 1), W("span", cI, k(a.value.method), 1)]),
				t[10] ||= W("p", { class: "sb-vt-small" }, " Проверь каждую секцию. Теги можно выбрать из списка или переписать вручную. Оригинальные строки песни остаются неизменными. ", -1),
				W("div", lI, [(H(!0), U(V, null, B(a.value.sections, (e, t) => (H(), U("div", {
					key: e.id,
					class: "sb-vt-section"
				}, [W("div", uI, [W("strong", null, k(e.label), 1), W("span", null, k(t + 1) + "/" + k(a.value.sections.length), 1)]), W("div", dI, [W("select", {
					"data-vt-preset": t,
					value: a.value.tags[t],
					"aria-label": "Готовые теги для " + e.label
				}, [(H(!0), U(V, null, B(n.value.presets, ([e, t]) => (H(), U("option", {
					key: e,
					value: e
				}, k(t), 9, pI))), 128))], 8, fI), W("input", {
					"data-vt-cue": t,
					value: a.value.tags[t],
					maxlength: "165",
					placeholder: "Например: Warm Emotional Vocals",
					"aria-label": "Тег исполнения " + e.label
				}, null, 8, mI)])]))), 128))]),
				W("div", hI, [t[9] ||= W("label", { for: "sb-vt-preview" }, " Готовый Lyrics — разрешено редактировать только инструкции, не слова песни ", -1), W("textarea", {
					id: "sb-vt-preview",
					spellcheck: "false",
					rows: "13",
					maxlength: "25000",
					value: a.value.preview
				}, null, 8, gI)]),
				W("p", _I, k(n.value.previewState), 1),
				t[11] ||= Sa("<div class=\"sb-vt-draft-actions\"><button type=\"button\" class=\"btn primary\" data-action=\"vt-apply\"> ✓ Применить к Lyrics </button><button type=\"button\" class=\"btn ghost\" data-action=\"vt-copy\"> Копировать предпросмотр </button><button type=\"button\" class=\"btn ghost\" data-action=\"vt-refresh\"> Обновить предпросмотр </button><button type=\"button\" class=\"btn ghost\" data-action=\"vt-cancel\"> Отменить </button></div>", 1)
			])) : K("", !0)])
		], 64));
	}
};
// src/vue/poetry/legacyTagsBridge.js
function yI({ mountVueFeature: e }) {
	let t = window.SUNOBOOM_LEGACY_TAGS, n = document.getElementById("app");
	return !t?.snapshot || !n ? () => {} : Z({
		root: n,
		selectTarget: (e) => e.querySelector("#sb-vt-workbench"),
		readSnapshot: () => t.snapshot(),
		mount: (n) => e(n, vI, { api: t })
	});
}
// src/vue/entry.js
var bI = Hm(), xI = Q(bI);
function SI(e) {
	return typeof document > "u" ? null : typeof e == "string" ? document.querySelector(e) : e;
}
var CI = Cm({
	createApp: os,
	host: UE,
	pinia: bI,
	router: gl,
	resolveTarget: SI
});
function $(...e) {
	return CI.mountVueFeature(...e);
}
function wI(...e) {
	return CI.unmountVueFeature(...e);
}
async function TI() {
	let e = await bu({
		pinia: bI,
		sharedUi: xI,
		activations: yL
	});
	return e && (CI = {
		mountVueFeature: e.mountFeature,
		unmountVueFeature: e.unmountFeature
	}), e;
}
function EI() {
	return HE({ sharedUi: xI });
}
function DI() {
	return aD({
		mountVueFeature: $,
		unmountVueFeature: wI,
		sharedUi: xI
	});
}
function OI() {
	return vD({ mountVueFeature: $ });
}
function kI() {
	return wO({ mountVueFeature: $ });
}
function AI() {
	return qA({ mountVueFeature: $ });
}
function jI() {
	return Lj({ mountVueFeature: $ });
}
function MI() {
	return MM({ mountVueFeature: $ });
}
function NI() {
	return iN({ mountVueFeature: $ });
}
function PI() {
	return dF({ mountVueFeature: $ });
}
function FI() {
	return FF({ mountVueFeature: $ });
}
function II() {
	return yI({ mountVueFeature: $ });
}
function LI() {
	return VE({ mountVueFeature: $ });
}
function RI() {
	return _g({ mountVueFeature: $ });
}
function zI() {
	return cv({ mountVueFeature: $ });
}
function BI() {
	return ev({ mountVueFeature: $ });
}
function VI() {
	return Zv({ mountVueFeature: $ });
}
function HI() {
	return dy({ mountVueFeature: $ });
}
function UI() {
	return sb({ mountVueFeature: $ });
}
function WI() {
	return Ub({ mountVueFeature: $ });
}
function GI() {
	return Zb({ mountVueFeature: $ });
}
function KI() {
	return wx({ mountVueFeature: $ });
}
function qI() {
	return Qx({ mountVueFeature: $ });
}
function JI() {
	return bS({ mountVueFeature: $ });
}
function YI() {
	return oC({ mountVueFeature: $ });
}
function XI() {
	return nw({ mountVueFeature: $ });
}
function ZI() {
	return uw({ mountVueFeature: $ });
}
function QI() {
	return Xw({ mountVueFeature: $ });
}
function $I() {
	return iT({ mountVueFeature: $ });
}
function eL() {
	return PT({ mountVueFeature: $ });
}
function tL() {
	return lE({ mountVueFeature: $ });
}
function nL() {
	return n_({ mountVueFeature: $ });
}
function rL() {
	return z_({
		mountVueFeature: $,
		sharedUi: xI
	});
}
function iL() {
	return pk({ mountVueFeature: $ });
}
function aL() {
	return Sm({ mountVueFeature: $ });
}
function oL() {
	return gm({ mountVueFeature: $ });
}
function sL() {
	return lm({ mountVueFeature: $ });
}
function cL() {
	return Qp({ mountVueFeature: $ });
}
function lL() {
	return zp({ mountVueFeature: $ });
}
function uL() {
	return Ap({ mountVueFeature: $ });
}
function dL() {
	return Cp({ mountVueFeature: $ });
}
function fL() {
	return yp({ mountVueFeature: $ });
}
function pL() {
	return vp({ mountVueFeature: $ });
}
function mL() {
	return Qf({ mountVueFeature: $ });
}
function hL() {
	return hf({ mountVueFeature: $ });
}
function gL() {
	return $d({ mountVueFeature: $ });
}
function _L() {
	return Od({ mountVueFeature: $ });
}
function vL() {
	return xu({
		mountVueFeature: $,
		sharedUi: xI,
		activations: yL
	});
}
var yL = [
	Od,
	hf,
	Qf,
	vp,
	Cp,
	Ap,
	zp,
	Qp,
	lm,
	gm,
	Sm,
	_g,
	z_,
	ev,
	cv,
	Zv,
	dy,
	sb,
	Ub,
	Zb,
	wx,
	Qx,
	bS,
	oC,
	nw,
	uw,
	Xw,
	iT,
	PT,
	lE,
	VE,
	wO,
	pk,
	qA,
	Lj,
	MM,
	iN,
	dF,
	FF,
	yI
];
export { $ as mountVueFeature, TI as startApplicationShell, kI as startLegacyAcademy, pL as startLegacyAccountHome, JI as startLegacyAccountSettings, fL as startLegacyAccountSummary, EI as startLegacyAppearance, PI as startLegacyArranger, KI as startLegacyArtistDNA, qI as startLegacyArtistDNAEditor, GI as startLegacyArtistManager, gL as startLegacyArtistProfiles, NI as startLegacyAuditor, dL as startLegacyEventActions, cL as startLegacyEventCollection, lL as startLegacyEventEditor, uL as startLegacyEventReminders, AI as startLegacyGenreDetail, iL as startLegacyGenreTree, rL as startLegacyHomeDashboard, RI as startLegacyIdeaCollections, LI as startLegacyIdeaEditor, mL as startLegacyIdeasPage, VI as startLegacyLibrary, MI as startLegacyMixer, DI as startLegacyNavigation, vL as startLegacyPages, XI as startLegacyPlayerAB, YI as startLegacyPlayerLab, FI as startLegacyPoetry, QI as startLegacyProducerSongDetail, ZI as startLegacyProducerSongList, aL as startLegacyProjectCollection, oL as startLegacyProjectCreator, sL as startLegacyProjectDetail, BI as startLegacyPromptCollection, zI as startLegacyPromptEditor, hL as startLegacySharedSong, HI as startLegacySongCards, UI as startLegacySongDetail, WI as startLegacySongEditor, jI as startLegacyStudio, II as startLegacyTags, OI as startLegacyTopHeader, eL as startLegacyTrackPassportDetail, tL as startLegacyTrackPassportEditor, $I as startLegacyTrackPassportList, nL as startLegacyVersionHistory, _L as startLegacyWorkspace, wI as unmountVueFeature };
