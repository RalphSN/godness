const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/js/DjSFgGHR0f.js", "assets/js/CtbTsni8ES.js", "assets/js/BlTxHScWgo.js", "assets/js/6jsWGvxKsM.js", "assets/css/DIR0X6e97O.css", "assets/js/9UEmpCv9Y4.js", "assets/css/CzPnzpFPfI.css", "assets/js/CSpKiXwtXL.js"]))) => i.map(i => d[i]);
import {
	a as _a,
	d as Vs,
	b as Ut,
	o as us,
	e as Ft,
	f as Ct,
	g as Rs,
	h as Ht,
	n as Pa,
	u as Ds,
	t as Fi,
	i as Hi,
	c as Ui,
	r as ka,
	j as Ia,
	k as Ra,
	l as Da,
	p as za,
	q as Jt,
	s as ji,
	v as os,
	w as ls,
	x as Gi,
	y as Wi,
	z as Na
} from "./6jsWGvxKsM.js";
import {
	t as J,
	g as $a
} from "./CtbTsni8ES.js";
import {
	_ as Ys
} from "./BlTxHScWgo.js";
const xt = _a({
	legacy: !1,
	messages: {}
});
J.$i18nTm = xt;
const Uo = Vs("i18n", {
	state: () => ({
		locale: J.local.get("lang") ?? xt.global.availableLocales[0],
		langList: []
	}),
	getters: {
		lang(n) {
			return n.locale
		},
		getLangList(n) {
			return n.langList
		}
	},
	actions: {
		async init(n = {}) {
			J.initData = n;
			const a = [];
			return n.lang?.map(r => {
				a.push({
					i18n: r.code,
					lang: r.name
				})
			}), this.setDefaultLangList(a), J.initMediaCode(), J.initData
		},
		getMatchingLocale(n) {
			const a = J.local.get("lang") || navigator.language;
			return J.getMatchingLanguage(n.map(r => r.i18n), a)
		},
		setLocale(n) {
			xt.global.availableLocales.includes(n) && (this.locale = n, xt.global.locale.value = n, J.lang = n, J.local.set("lang", n))
		},
		setDefaultLangList(n) {
			this.langList = n?.length > 0 ? n : this.langList;
			const a = this.getMatchingLocale(this.langList);
			this.mergeAllLocaleMessage({}), this.setLocale(a)
		},
		mergeAllLocaleMessage(n) {
			this.langList.forEach(a => {
				let r = a.i18n;
				const d = xt.global.getLocaleMessage(r),
					c = n[a.i18n] ?? n;
				xt.global.setLocaleMessage(r, {
					...d,
					...c
				})
			})
		}
	}
});

function qi(n, a) {
	return function() {
		return n.apply(a, arguments)
	}
}
const {
	toString: Ba
} = Object.prototype, {
	getPrototypeOf: Xs
} = Object, {
	iterator: hs,
	toStringTag: Vi
} = Symbol, ps = (n => a => {
	const r = Ba.call(a);
	return n[r] || (n[r] = r.slice(8, -1).toLowerCase())
})(Object.create(null)), et = n => (n = n.toLowerCase(), a => ps(a) === n), fs = n => a => typeof a === n, {
	isArray: Lt
} = Array, jt = fs("undefined");

function Gt(n) {
	return n !== null && !jt(n) && n.constructor !== null && !jt(n.constructor) && Ge(n.constructor.isBuffer) && n.constructor.isBuffer(n)
}
const Yi = et("ArrayBuffer");

function Fa(n) {
	let a;
	return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? a = ArrayBuffer.isView(n) : a = n && n.buffer && Yi(n.buffer), a
}
const Ha = fs("string"),
	Ge = fs("function"),
	Xi = fs("number"),
	Wt = n => n !== null && typeof n == "object",
	Ua = n => n === !0 || n === !1,
	ts = n => {
		if (ps(n) !== "object") return !1;
		const a = Xs(n);
		return (a === null || a === Object.prototype || Object.getPrototypeOf(a) === null) && !(Vi in n) && !(hs in n)
	},
	ja = n => {
		if (!Wt(n) || Gt(n)) return !1;
		try {
			return Object.keys(n).length === 0 && Object.getPrototypeOf(n) === Object.prototype
		} catch {
			return !1
		}
	},
	Ga = et("Date"),
	Wa = et("File"),
	qa = et("Blob"),
	Va = et("FileList"),
	Ya = n => Wt(n) && Ge(n.pipe),
	Xa = n => {
		let a;
		return n && (typeof FormData == "function" && n instanceof FormData || Ge(n.append) && ((a = ps(n)) === "formdata" || a === "object" && Ge(n.toString) && n.toString() === "[object FormData]"))
	},
	Ka = et("URLSearchParams"),
	[Qa, Ja, Za, en] = ["ReadableStream", "Request", "Response", "Headers"].map(et),
	tn = n => n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

function qt(n, a, {
	allOwnKeys: r = !1
} = {}) {
	if (n === null || typeof n > "u") return;
	let d, c;
	if (typeof n != "object" && (n = [n]), Lt(n))
		for (d = 0, c = n.length; d < c; d++) a.call(null, n[d], d, n);
	else {
		if (Gt(n)) return;
		const p = r ? Object.getOwnPropertyNames(n) : Object.keys(n),
			u = p.length;
		let w;
		for (d = 0; d < u; d++) w = p[d], a.call(null, n[w], w, n)
	}
}

function Ki(n, a) {
	if (Gt(n)) return null;
	a = a.toLowerCase();
	const r = Object.keys(n);
	let d = r.length,
		c;
	for (; d-- > 0;)
		if (c = r[d], a === c.toLowerCase()) return c;
	return null
}
const ut = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global,
	Qi = n => !jt(n) && n !== ut;

function zs() {
	const {
		caseless: n
	} = Qi(this) && this || {}, a = {}, r = (d, c) => {
		const p = n && Ki(a, c) || c;
		ts(a[p]) && ts(d) ? a[p] = zs(a[p], d) : ts(d) ? a[p] = zs({}, d) : Lt(d) ? a[p] = d.slice() : a[p] = d
	};
	for (let d = 0, c = arguments.length; d < c; d++) arguments[d] && qt(arguments[d], r);
	return a
}
const sn = (n, a, r, {
		allOwnKeys: d
	} = {}) => (qt(a, (c, p) => {
		r && Ge(c) ? n[p] = qi(c, r) : n[p] = c
	}, {
		allOwnKeys: d
	}), n),
	an = n => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n),
	nn = (n, a, r, d) => {
		n.prototype = Object.create(a.prototype, d), n.prototype.constructor = n, Object.defineProperty(n, "super", {
			value: a.prototype
		}), r && Object.assign(n.prototype, r)
	},
	rn = (n, a, r, d) => {
		let c, p, u;
		const w = {};
		if (a = a || {}, n == null) return a;
		do {
			for (c = Object.getOwnPropertyNames(n), p = c.length; p-- > 0;) u = c[p], (!d || d(u, n, a)) && !w[u] && (a[u] = n[u], w[u] = !0);
			n = r !== !1 && Xs(n)
		} while (n && (!r || r(n, a)) && n !== Object.prototype);
		return a
	},
	on = (n, a, r) => {
		n = String(n), (r === void 0 || r > n.length) && (r = n.length), r -= a.length;
		const d = n.indexOf(a, r);
		return d !== -1 && d === r
	},
	ln = n => {
		if (!n) return null;
		if (Lt(n)) return n;
		let a = n.length;
		if (!Xi(a)) return null;
		const r = new Array(a);
		for (; a-- > 0;) r[a] = n[a];
		return r
	},
	dn = (n => a => n && a instanceof n)(typeof Uint8Array < "u" && Xs(Uint8Array)),
	cn = (n, a) => {
		const d = (n && n[hs]).call(n);
		let c;
		for (;
			(c = d.next()) && !c.done;) {
			const p = c.value;
			a.call(n, p[0], p[1])
		}
	},
	un = (n, a) => {
		let r;
		const d = [];
		for (;
			(r = n.exec(a)) !== null;) d.push(r);
		return d
	},
	hn = et("HTMLFormElement"),
	pn = n => n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(r, d, c) {
		return d.toUpperCase() + c
	}),
	hi = (({
		hasOwnProperty: n
	}) => (a, r) => n.call(a, r))(Object.prototype),
	fn = et("RegExp"),
	Ji = (n, a) => {
		const r = Object.getOwnPropertyDescriptors(n),
			d = {};
		qt(r, (c, p) => {
			let u;
			(u = a(c, p, n)) !== !1 && (d[p] = u || c)
		}), Object.defineProperties(n, d)
	},
	mn = n => {
		Ji(n, (a, r) => {
			if (Ge(n) && ["arguments", "caller", "callee"].indexOf(r) !== -1) return !1;
			const d = n[r];
			if (Ge(d)) {
				if (a.enumerable = !1, "writable" in a) {
					a.writable = !1;
					return
				}
				a.set || (a.set = () => {
					throw Error("Can not rewrite read-only method '" + r + "'")
				})
			}
		})
	},
	vn = (n, a) => {
		const r = {},
			d = c => {
				c.forEach(p => {
					r[p] = !0
				})
			};
		return Lt(n) ? d(n) : d(String(n).split(a)), r
	},
	gn = () => {},
	bn = (n, a) => n != null && Number.isFinite(n = +n) ? n : a;

function yn(n) {
	return !!(n && Ge(n.append) && n[Vi] === "FormData" && n[hs])
}
const wn = n => {
		const a = new Array(10),
			r = (d, c) => {
				if (Wt(d)) {
					if (a.indexOf(d) >= 0) return;
					if (Gt(d)) return d;
					if (!("toJSON" in d)) {
						a[c] = d;
						const p = Lt(d) ? [] : {};
						return qt(d, (u, w) => {
							const x = r(u, c + 1);
							!jt(x) && (p[w] = x)
						}), a[c] = void 0, p
					}
				}
				return d
			};
		return r(n, 0)
	},
	En = et("AsyncFunction"),
	Tn = n => n && (Wt(n) || Ge(n)) && Ge(n.then) && Ge(n.catch),
	Zi = ((n, a) => n ? setImmediate : a ? ((r, d) => (ut.addEventListener("message", ({
		source: c,
		data: p
	}) => {
		c === ut && p === r && d.length && d.shift()()
	}, !1), c => {
		d.push(c), ut.postMessage(r, "*")
	}))(`axios@${Math.random()}`, []) : r => setTimeout(r))(typeof setImmediate == "function", Ge(ut.postMessage)),
	Sn = typeof queueMicrotask < "u" ? queueMicrotask.bind(ut) : typeof process < "u" && process.nextTick || Zi,
	xn = n => n != null && Ge(n[hs]),
	T = {
		isArray: Lt,
		isArrayBuffer: Yi,
		isBuffer: Gt,
		isFormData: Xa,
		isArrayBufferView: Fa,
		isString: Ha,
		isNumber: Xi,
		isBoolean: Ua,
		isObject: Wt,
		isPlainObject: ts,
		isEmptyObject: ja,
		isReadableStream: Qa,
		isRequest: Ja,
		isResponse: Za,
		isHeaders: en,
		isUndefined: jt,
		isDate: Ga,
		isFile: Wa,
		isBlob: qa,
		isRegExp: fn,
		isFunction: Ge,
		isStream: Ya,
		isURLSearchParams: Ka,
		isTypedArray: dn,
		isFileList: Va,
		forEach: qt,
		merge: zs,
		extend: sn,
		trim: tn,
		stripBOM: an,
		inherits: nn,
		toFlatObject: rn,
		kindOf: ps,
		kindOfTest: et,
		endsWith: on,
		toArray: ln,
		forEachEntry: cn,
		matchAll: un,
		isHTMLForm: hn,
		hasOwnProperty: hi,
		hasOwnProp: hi,
		reduceDescriptors: Ji,
		freezeMethods: mn,
		toObjectSet: vn,
		toCamelCase: pn,
		noop: gn,
		toFiniteNumber: bn,
		findKey: Ki,
		global: ut,
		isContextDefined: Qi,
		isSpecCompliantForm: yn,
		toJSONObject: wn,
		isAsyncFn: En,
		isThenable: Tn,
		setImmediate: Zi,
		asap: Sn,
		isIterable: xn
	};

function K(n, a, r, d, c) {
	Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = n, this.name = "AxiosError", a && (this.code = a), r && (this.config = r), d && (this.request = d), c && (this.response = c, this.status = c.status ? c.status : null)
}
T.inherits(K, Error, {
	toJSON: function() {
		return {
			message: this.message,
			name: this.name,
			description: this.description,
			number: this.number,
			fileName: this.fileName,
			lineNumber: this.lineNumber,
			columnNumber: this.columnNumber,
			stack: this.stack,
			config: T.toJSONObject(this.config),
			code: this.code,
			status: this.status
		}
	}
});
const ea = K.prototype,
	ta = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(n => {
	ta[n] = {
		value: n
	}
});
Object.defineProperties(K, ta);
Object.defineProperty(ea, "isAxiosError", {
	value: !0
});
K.from = (n, a, r, d, c, p) => {
	const u = Object.create(ea);
	return T.toFlatObject(n, u, function(x) {
		return x !== Error.prototype
	}, w => w !== "isAxiosError"), K.call(u, n.message, a, r, d, c), u.cause = n, u.name = n.name, p && Object.assign(u, p), u
};
const Cn = null;

function Ns(n) {
	return T.isPlainObject(n) || T.isArray(n)
}

function sa(n) {
	return T.endsWith(n, "[]") ? n.slice(0, -2) : n
}

function pi(n, a, r) {
	return n ? n.concat(a).map(function(c, p) {
		return c = sa(c), !r && p ? "[" + c + "]" : c
	}).join(r ? "." : "") : a
}

function An(n) {
	return T.isArray(n) && !n.some(Ns)
}
const Mn = T.toFlatObject(T, {}, null, function(a) {
	return /^is[A-Z]/.test(a)
});

function ms(n, a, r) {
	if (!T.isObject(n)) throw new TypeError("target must be an object");
	a = a || new FormData, r = T.toFlatObject(r, {
		metaTokens: !0,
		dots: !1,
		indexes: !1
	}, !1, function(W, N) {
		return !T.isUndefined(N[W])
	});
	const d = r.metaTokens,
		c = r.visitor || y,
		p = r.dots,
		u = r.indexes,
		x = (r.Blob || typeof Blob < "u" && Blob) && T.isSpecCompliantForm(a);
	if (!T.isFunction(c)) throw new TypeError("visitor must be a function");

	function m(O) {
		if (O === null) return "";
		if (T.isDate(O)) return O.toISOString();
		if (T.isBoolean(O)) return O.toString();
		if (!x && T.isBlob(O)) throw new K("Blob is not supported. Use a Buffer instead.");
		return T.isArrayBuffer(O) || T.isTypedArray(O) ? x && typeof Blob == "function" ? new Blob([O]) : Buffer.from(O) : O
	}

	function y(O, W, N) {
		let ie = O;
		if (O && !N && typeof O == "object") {
			if (T.endsWith(W, "{}")) W = d ? W : W.slice(0, -2), O = JSON.stringify(O);
			else if (T.isArray(O) && An(O) || (T.isFileList(O) || T.endsWith(W, "[]")) && (ie = T.toArray(O))) return W = sa(W), ie.forEach(function(re, Y) {
				!(T.isUndefined(re) || re === null) && a.append(u === !0 ? pi([W], Y, p) : u === null ? W : W + "[]", m(re))
			}), !1
		}
		return Ns(O) ? !0 : (a.append(pi(N, W, p), m(O)), !1)
	}
	const E = [],
		R = Object.assign(Mn, {
			defaultVisitor: y,
			convertValue: m,
			isVisitable: Ns
		});

	function U(O, W) {
		if (!T.isUndefined(O)) {
			if (E.indexOf(O) !== -1) throw Error("Circular reference detected in " + W.join("."));
			E.push(O), T.forEach(O, function(ie, ce) {
				(!(T.isUndefined(ie) || ie === null) && c.call(a, ie, T.isString(ce) ? ce.trim() : ce, W, R)) === !0 && U(ie, W ? W.concat(ce) : [ce])
			}), E.pop()
		}
	}
	if (!T.isObject(n)) throw new TypeError("data must be an object");
	return U(n), a
}

function fi(n) {
	const a = {
		"!": "%21",
		"'": "%27",
		"(": "%28",
		")": "%29",
		"~": "%7E",
		"%20": "+",
		"%00": "\0"
	};
	return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function(d) {
		return a[d]
	})
}

function Ks(n, a) {
	this._pairs = [], n && ms(n, this, a)
}
const ia = Ks.prototype;
ia.append = function(a, r) {
	this._pairs.push([a, r])
};
ia.toString = function(a) {
	const r = a ? function(d) {
		return a.call(this, d, fi)
	} : fi;
	return this._pairs.map(function(c) {
		return r(c[0]) + "=" + r(c[1])
	}, "").join("&")
};

function Ln(n) {
	return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}

function aa(n, a, r) {
	if (!a) return n;
	const d = r && r.encode || Ln;
	T.isFunction(r) && (r = {
		serialize: r
	});
	const c = r && r.serialize;
	let p;
	if (c ? p = c(a, r) : p = T.isURLSearchParams(a) ? a.toString() : new Ks(a, r).toString(d), p) {
		const u = n.indexOf("#");
		u !== -1 && (n = n.slice(0, u)), n += (n.indexOf("?") === -1 ? "?" : "&") + p
	}
	return n
}
class mi {
	constructor() {
		this.handlers = []
	}
	use(a, r, d) {
		return this.handlers.push({
			fulfilled: a,
			rejected: r,
			synchronous: d ? d.synchronous : !1,
			runWhen: d ? d.runWhen : null
		}), this.handlers.length - 1
	}
	eject(a) {
		this.handlers[a] && (this.handlers[a] = null)
	}
	clear() {
		this.handlers && (this.handlers = [])
	}
	forEach(a) {
		T.forEach(this.handlers, function(d) {
			d !== null && a(d)
		})
	}
}
const na = {
		silentJSONParsing: !0,
		forcedJSONParsing: !0,
		clarifyTimeoutError: !1
	},
	On = typeof URLSearchParams < "u" ? URLSearchParams : Ks,
	_n = typeof FormData < "u" ? FormData : null,
	Pn = typeof Blob < "u" ? Blob : null,
	kn = {
		isBrowser: !0,
		classes: {
			URLSearchParams: On,
			FormData: _n,
			Blob: Pn
		},
		protocols: ["http", "https", "file", "blob", "url", "data"]
	},
	Qs = typeof window < "u" && typeof document < "u",
	$s = typeof navigator == "object" && navigator || void 0,
	In = Qs && (!$s || ["ReactNative", "NativeScript", "NS"].indexOf($s.product) < 0),
	Rn = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function",
	Dn = Qs && window.location.href || "http://localhost",
	zn = Object.freeze(Object.defineProperty({
		__proto__: null,
		hasBrowserEnv: Qs,
		hasStandardBrowserEnv: In,
		hasStandardBrowserWebWorkerEnv: Rn,
		navigator: $s,
		origin: Dn
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	Ie = {
		...zn,
		...kn
	};

function Nn(n, a) {
	return ms(n, new Ie.classes.URLSearchParams, {
		visitor: function(r, d, c, p) {
			return Ie.isNode && T.isBuffer(r) ? (this.append(d, r.toString("base64")), !1) : p.defaultVisitor.apply(this, arguments)
		},
		...a
	})
}

function $n(n) {
	return T.matchAll(/\w+|\[(\w*)]/g, n).map(a => a[0] === "[]" ? "" : a[1] || a[0])
}

function Bn(n) {
	const a = {},
		r = Object.keys(n);
	let d;
	const c = r.length;
	let p;
	for (d = 0; d < c; d++) p = r[d], a[p] = n[p];
	return a
}

function ra(n) {
	function a(r, d, c, p) {
		let u = r[p++];
		if (u === "__proto__") return !0;
		const w = Number.isFinite(+u),
			x = p >= r.length;
		return u = !u && T.isArray(c) ? c.length : u, x ? (T.hasOwnProp(c, u) ? c[u] = [c[u], d] : c[u] = d, !w) : ((!c[u] || !T.isObject(c[u])) && (c[u] = []), a(r, d, c[u], p) && T.isArray(c[u]) && (c[u] = Bn(c[u])), !w)
	}
	if (T.isFormData(n) && T.isFunction(n.entries)) {
		const r = {};
		return T.forEachEntry(n, (d, c) => {
			a($n(d), c, r, 0)
		}), r
	}
	return null
}

function Fn(n, a, r) {
	if (T.isString(n)) try {
		return (a || JSON.parse)(n), T.trim(n)
	} catch (d) {
		if (d.name !== "SyntaxError") throw d
	}
	return (r || JSON.stringify)(n)
}
const Vt = {
	transitional: na,
	adapter: ["xhr", "http", "fetch"],
	transformRequest: [function(a, r) {
		const d = r.getContentType() || "",
			c = d.indexOf("application/json") > -1,
			p = T.isObject(a);
		if (p && T.isHTMLForm(a) && (a = new FormData(a)), T.isFormData(a)) return c ? JSON.stringify(ra(a)) : a;
		if (T.isArrayBuffer(a) || T.isBuffer(a) || T.isStream(a) || T.isFile(a) || T.isBlob(a) || T.isReadableStream(a)) return a;
		if (T.isArrayBufferView(a)) return a.buffer;
		if (T.isURLSearchParams(a)) return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), a.toString();
		let w;
		if (p) {
			if (d.indexOf("application/x-www-form-urlencoded") > -1) return Nn(a, this.formSerializer).toString();
			if ((w = T.isFileList(a)) || d.indexOf("multipart/form-data") > -1) {
				const x = this.env && this.env.FormData;
				return ms(w ? {
					"files[]": a
				} : a, x && new x, this.formSerializer)
			}
		}
		return p || c ? (r.setContentType("application/json", !1), Fn(a)) : a
	}],
	transformResponse: [function(a) {
		const r = this.transitional || Vt.transitional,
			d = r && r.forcedJSONParsing,
			c = this.responseType === "json";
		if (T.isResponse(a) || T.isReadableStream(a)) return a;
		if (a && T.isString(a) && (d && !this.responseType || c)) {
			const u = !(r && r.silentJSONParsing) && c;
			try {
				return JSON.parse(a)
			} catch (w) {
				if (u) throw w.name === "SyntaxError" ? K.from(w, K.ERR_BAD_RESPONSE, this, null, this.response) : w
			}
		}
		return a
	}],
	timeout: 0,
	xsrfCookieName: "XSRF-TOKEN",
	xsrfHeaderName: "X-XSRF-TOKEN",
	maxContentLength: -1,
	maxBodyLength: -1,
	env: {
		FormData: Ie.classes.FormData,
		Blob: Ie.classes.Blob
	},
	validateStatus: function(a) {
		return a >= 200 && a < 300
	},
	headers: {
		common: {
			Accept: "application/json, text/plain, */*",
			"Content-Type": void 0
		}
	}
};
T.forEach(["delete", "get", "head", "post", "put", "patch"], n => {
	Vt.headers[n] = {}
});
const Hn = T.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
	Un = n => {
		const a = {};
		let r, d, c;
		return n && n.split(`
`).forEach(function(u) {
			c = u.indexOf(":"), r = u.substring(0, c).trim().toLowerCase(), d = u.substring(c + 1).trim(), !(!r || a[r] && Hn[r]) && (r === "set-cookie" ? a[r] ? a[r].push(d) : a[r] = [d] : a[r] = a[r] ? a[r] + ", " + d : d)
		}), a
	},
	vi = Symbol("internals");

function kt(n) {
	return n && String(n).trim().toLowerCase()
}

function ss(n) {
	return n === !1 || n == null ? n : T.isArray(n) ? n.map(ss) : String(n)
}

function jn(n) {
	const a = Object.create(null),
		r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
	let d;
	for (; d = r.exec(n);) a[d[1]] = d[2];
	return a
}
const Gn = n => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());

function xs(n, a, r, d, c) {
	if (T.isFunction(d)) return d.call(this, a, r);
	if (c && (a = r), !!T.isString(a)) {
		if (T.isString(d)) return a.indexOf(d) !== -1;
		if (T.isRegExp(d)) return d.test(a)
	}
}

function Wn(n) {
	return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (a, r, d) => r.toUpperCase() + d)
}

function qn(n, a) {
	const r = T.toCamelCase(" " + a);
	["get", "set", "has"].forEach(d => {
		Object.defineProperty(n, d + r, {
			value: function(c, p, u) {
				return this[d].call(this, a, c, p, u)
			},
			configurable: !0
		})
	})
}
let We = class {
	constructor(a) {
		a && this.set(a)
	}
	set(a, r, d) {
		const c = this;

		function p(w, x, m) {
			const y = kt(x);
			if (!y) throw new Error("header name must be a non-empty string");
			const E = T.findKey(c, y);
			(!E || c[E] === void 0 || m === !0 || m === void 0 && c[E] !== !1) && (c[E || x] = ss(w))
		}
		const u = (w, x) => T.forEach(w, (m, y) => p(m, y, x));
		if (T.isPlainObject(a) || a instanceof this.constructor) u(a, r);
		else if (T.isString(a) && (a = a.trim()) && !Gn(a)) u(Un(a), r);
		else if (T.isObject(a) && T.isIterable(a)) {
			let w = {},
				x, m;
			for (const y of a) {
				if (!T.isArray(y)) throw TypeError("Object iterator must return a key-value pair");
				w[m = y[0]] = (x = w[m]) ? T.isArray(x) ? [...x, y[1]] : [x, y[1]] : y[1]
			}
			u(w, r)
		} else a != null && p(r, a, d);
		return this
	}
	get(a, r) {
		if (a = kt(a), a) {
			const d = T.findKey(this, a);
			if (d) {
				const c = this[d];
				if (!r) return c;
				if (r === !0) return jn(c);
				if (T.isFunction(r)) return r.call(this, c, d);
				if (T.isRegExp(r)) return r.exec(c);
				throw new TypeError("parser must be boolean|regexp|function")
			}
		}
	}
	has(a, r) {
		if (a = kt(a), a) {
			const d = T.findKey(this, a);
			return !!(d && this[d] !== void 0 && (!r || xs(this, this[d], d, r)))
		}
		return !1
	}
	delete(a, r) {
		const d = this;
		let c = !1;

		function p(u) {
			if (u = kt(u), u) {
				const w = T.findKey(d, u);
				w && (!r || xs(d, d[w], w, r)) && (delete d[w], c = !0)
			}
		}
		return T.isArray(a) ? a.forEach(p) : p(a), c
	}
	clear(a) {
		const r = Object.keys(this);
		let d = r.length,
			c = !1;
		for (; d--;) {
			const p = r[d];
			(!a || xs(this, this[p], p, a, !0)) && (delete this[p], c = !0)
		}
		return c
	}
	normalize(a) {
		const r = this,
			d = {};
		return T.forEach(this, (c, p) => {
			const u = T.findKey(d, p);
			if (u) {
				r[u] = ss(c), delete r[p];
				return
			}
			const w = a ? Wn(p) : String(p).trim();
			w !== p && delete r[p], r[w] = ss(c), d[w] = !0
		}), this
	}
	concat(...a) {
		return this.constructor.concat(this, ...a)
	}
	toJSON(a) {
		const r = Object.create(null);
		return T.forEach(this, (d, c) => {
			d != null && d !== !1 && (r[c] = a && T.isArray(d) ? d.join(", ") : d)
		}), r
	} [Symbol.iterator]() {
		return Object.entries(this.toJSON())[Symbol.iterator]()
	}
	toString() {
		return Object.entries(this.toJSON()).map(([a, r]) => a + ": " + r).join(`
`)
	}
	getSetCookie() {
		return this.get("set-cookie") || []
	}
	get[Symbol.toStringTag]() {
		return "AxiosHeaders"
	}
	static from(a) {
		return a instanceof this ? a : new this(a)
	}
	static concat(a, ...r) {
		const d = new this(a);
		return r.forEach(c => d.set(c)), d
	}
	static accessor(a) {
		const d = (this[vi] = this[vi] = {
				accessors: {}
			}).accessors,
			c = this.prototype;

		function p(u) {
			const w = kt(u);
			d[w] || (qn(c, u), d[w] = !0)
		}
		return T.isArray(a) ? a.forEach(p) : p(a), this
	}
};
We.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
T.reduceDescriptors(We.prototype, ({
	value: n
}, a) => {
	let r = a[0].toUpperCase() + a.slice(1);
	return {
		get: () => n,
		set(d) {
			this[r] = d
		}
	}
});
T.freezeMethods(We);

function Cs(n, a) {
	const r = this || Vt,
		d = a || r,
		c = We.from(d.headers);
	let p = d.data;
	return T.forEach(n, function(w) {
		p = w.call(r, p, c.normalize(), a ? a.status : void 0)
	}), c.normalize(), p
}

function oa(n) {
	return !!(n && n.__CANCEL__)
}

function Ot(n, a, r) {
	K.call(this, n ?? "canceled", K.ERR_CANCELED, a, r), this.name = "CanceledError"
}
T.inherits(Ot, K, {
	__CANCEL__: !0
});

function la(n, a, r) {
	const d = r.config.validateStatus;
	!r.status || !d || d(r.status) ? n(r) : a(new K("Request failed with status code " + r.status, [K.ERR_BAD_REQUEST, K.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4], r.config, r.request, r))
}

function Vn(n) {
	const a = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
	return a && a[1] || ""
}

function Yn(n, a) {
	n = n || 10;
	const r = new Array(n),
		d = new Array(n);
	let c = 0,
		p = 0,
		u;
	return a = a !== void 0 ? a : 1e3,
		function(x) {
			const m = Date.now(),
				y = d[p];
			u || (u = m), r[c] = x, d[c] = m;
			let E = p,
				R = 0;
			for (; E !== c;) R += r[E++], E = E % n;
			if (c = (c + 1) % n, c === p && (p = (p + 1) % n), m - u < a) return;
			const U = y && m - y;
			return U ? Math.round(R * 1e3 / U) : void 0
		}
}

function Xn(n, a) {
	let r = 0,
		d = 1e3 / a,
		c, p;
	const u = (m, y = Date.now()) => {
		r = y, c = null, p && (clearTimeout(p), p = null), n(...m)
	};
	return [(...m) => {
		const y = Date.now(),
			E = y - r;
		E >= d ? u(m, y) : (c = m, p || (p = setTimeout(() => {
			p = null, u(c)
		}, d - E)))
	}, () => c && u(c)]
}
const ds = (n, a, r = 3) => {
		let d = 0;
		const c = Yn(50, 250);
		return Xn(p => {
			const u = p.loaded,
				w = p.lengthComputable ? p.total : void 0,
				x = u - d,
				m = c(x),
				y = u <= w;
			d = u;
			const E = {
				loaded: u,
				total: w,
				progress: w ? u / w : void 0,
				bytes: x,
				rate: m || void 0,
				estimated: m && w && y ? (w - u) / m : void 0,
				event: p,
				lengthComputable: w != null,
				[a ? "download" : "upload"]: !0
			};
			n(E)
		}, r)
	},
	gi = (n, a) => {
		const r = n != null;
		return [d => a[0]({
			lengthComputable: r,
			total: n,
			loaded: d
		}), a[1]]
	},
	bi = n => (...a) => T.asap(() => n(...a)),
	Kn = Ie.hasStandardBrowserEnv ? ((n, a) => r => (r = new URL(r, Ie.origin), n.protocol === r.protocol && n.host === r.host && (a || n.port === r.port)))(new URL(Ie.origin), Ie.navigator && /(msie|trident)/i.test(Ie.navigator.userAgent)) : () => !0,
	Qn = Ie.hasStandardBrowserEnv ? {
		write(n, a, r, d, c, p) {
			const u = [n + "=" + encodeURIComponent(a)];
			T.isNumber(r) && u.push("expires=" + new Date(r).toGMTString()), T.isString(d) && u.push("path=" + d), T.isString(c) && u.push("domain=" + c), p === !0 && u.push("secure"), document.cookie = u.join("; ")
		},
		read(n) {
			const a = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
			return a ? decodeURIComponent(a[3]) : null
		},
		remove(n) {
			this.write(n, "", Date.now() - 864e5)
		}
	} : {
		write() {},
		read() {
			return null
		},
		remove() {}
	};

function Jn(n) {
	return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)
}

function Zn(n, a) {
	return a ? n.replace(/\/?\/$/, "") + "/" + a.replace(/^\/+/, "") : n
}

function da(n, a, r) {
	let d = !Jn(a);
	return n && (d || r == !1) ? Zn(n, a) : a
}
const yi = n => n instanceof We ? {
	...n
} : n;

function pt(n, a) {
	a = a || {};
	const r = {};

	function d(m, y, E, R) {
		return T.isPlainObject(m) && T.isPlainObject(y) ? T.merge.call({
			caseless: R
		}, m, y) : T.isPlainObject(y) ? T.merge({}, y) : T.isArray(y) ? y.slice() : y
	}

	function c(m, y, E, R) {
		if (T.isUndefined(y)) {
			if (!T.isUndefined(m)) return d(void 0, m, E, R)
		} else return d(m, y, E, R)
	}

	function p(m, y) {
		if (!T.isUndefined(y)) return d(void 0, y)
	}

	function u(m, y) {
		if (T.isUndefined(y)) {
			if (!T.isUndefined(m)) return d(void 0, m)
		} else return d(void 0, y)
	}

	function w(m, y, E) {
		if (E in a) return d(m, y);
		if (E in n) return d(void 0, m)
	}
	const x = {
		url: p,
		method: p,
		data: p,
		baseURL: u,
		transformRequest: u,
		transformResponse: u,
		paramsSerializer: u,
		timeout: u,
		timeoutMessage: u,
		withCredentials: u,
		withXSRFToken: u,
		adapter: u,
		responseType: u,
		xsrfCookieName: u,
		xsrfHeaderName: u,
		onUploadProgress: u,
		onDownloadProgress: u,
		decompress: u,
		maxContentLength: u,
		maxBodyLength: u,
		beforeRedirect: u,
		transport: u,
		httpAgent: u,
		httpsAgent: u,
		cancelToken: u,
		socketPath: u,
		responseEncoding: u,
		validateStatus: w,
		headers: (m, y, E) => c(yi(m), yi(y), E, !0)
	};
	return T.forEach(Object.keys({
		...n,
		...a
	}), function(y) {
		const E = x[y] || c,
			R = E(n[y], a[y], y);
		T.isUndefined(R) && E !== w || (r[y] = R)
	}), r
}
const ca = n => {
		const a = pt({}, n);
		let {
			data: r,
			withXSRFToken: d,
			xsrfHeaderName: c,
			xsrfCookieName: p,
			headers: u,
			auth: w
		} = a;
		a.headers = u = We.from(u), a.url = aa(da(a.baseURL, a.url, a.allowAbsoluteUrls), n.params, n.paramsSerializer), w && u.set("Authorization", "Basic " + btoa((w.username || "") + ":" + (w.password ? unescape(encodeURIComponent(w.password)) : "")));
		let x;
		if (T.isFormData(r)) {
			if (Ie.hasStandardBrowserEnv || Ie.hasStandardBrowserWebWorkerEnv) u.setContentType(void 0);
			else if ((x = u.getContentType()) !== !1) {
				const [m, ...y] = x ? x.split(";").map(E => E.trim()).filter(Boolean) : [];
				u.setContentType([m || "multipart/form-data", ...y].join("; "))
			}
		}
		if (Ie.hasStandardBrowserEnv && (d && T.isFunction(d) && (d = d(a)), d || d !== !1 && Kn(a.url))) {
			const m = c && p && Qn.read(p);
			m && u.set(c, m)
		}
		return a
	},
	er = typeof XMLHttpRequest < "u",
	tr = er && function(n) {
		return new Promise(function(r, d) {
			const c = ca(n);
			let p = c.data;
			const u = We.from(c.headers).normalize();
			let {
				responseType: w,
				onUploadProgress: x,
				onDownloadProgress: m
			} = c, y, E, R, U, O;

			function W() {
				U && U(), O && O(), c.cancelToken && c.cancelToken.unsubscribe(y), c.signal && c.signal.removeEventListener("abort", y)
			}
			let N = new XMLHttpRequest;
			N.open(c.method.toUpperCase(), c.url, !0), N.timeout = c.timeout;

			function ie() {
				if (!N) return;
				const re = We.from("getAllResponseHeaders" in N && N.getAllResponseHeaders()),
					j = {
						data: !w || w === "text" || w === "json" ? N.responseText : N.response,
						status: N.status,
						statusText: N.statusText,
						headers: re,
						config: n,
						request: N
					};
				la(function(Ee) {
					r(Ee), W()
				}, function(Ee) {
					d(Ee), W()
				}, j), N = null
			}
			"onloadend" in N ? N.onloadend = ie : N.onreadystatechange = function() {
				!N || N.readyState !== 4 || N.status === 0 && !(N.responseURL && N.responseURL.indexOf("file:") === 0) || setTimeout(ie)
			}, N.onabort = function() {
				N && (d(new K("Request aborted", K.ECONNABORTED, n, N)), N = null)
			}, N.onerror = function() {
				d(new K("Network Error", K.ERR_NETWORK, n, N)), N = null
			}, N.ontimeout = function() {
				let Y = c.timeout ? "timeout of " + c.timeout + "ms exceeded" : "timeout exceeded";
				const j = c.transitional || na;
				c.timeoutErrorMessage && (Y = c.timeoutErrorMessage), d(new K(Y, j.clarifyTimeoutError ? K.ETIMEDOUT : K.ECONNABORTED, n, N)), N = null
			}, p === void 0 && u.setContentType(null), "setRequestHeader" in N && T.forEach(u.toJSON(), function(Y, j) {
				N.setRequestHeader(j, Y)
			}), T.isUndefined(c.withCredentials) || (N.withCredentials = !!c.withCredentials), w && w !== "json" && (N.responseType = c.responseType), m && ([R, O] = ds(m, !0), N.addEventListener("progress", R)), x && N.upload && ([E, U] = ds(x), N.upload.addEventListener("progress", E), N.upload.addEventListener("loadend", U)), (c.cancelToken || c.signal) && (y = re => {
				N && (d(!re || re.type ? new Ot(null, n, N) : re), N.abort(), N = null)
			}, c.cancelToken && c.cancelToken.subscribe(y), c.signal && (c.signal.aborted ? y() : c.signal.addEventListener("abort", y)));
			const ce = Vn(c.url);
			if (ce && Ie.protocols.indexOf(ce) === -1) {
				d(new K("Unsupported protocol " + ce + ":", K.ERR_BAD_REQUEST, n));
				return
			}
			N.send(p || null)
		})
	},
	sr = (n, a) => {
		const {
			length: r
		} = n = n ? n.filter(Boolean) : [];
		if (a || r) {
			let d = new AbortController,
				c;
			const p = function(m) {
				if (!c) {
					c = !0, w();
					const y = m instanceof Error ? m : this.reason;
					d.abort(y instanceof K ? y : new Ot(y instanceof Error ? y.message : y))
				}
			};
			let u = a && setTimeout(() => {
				u = null, p(new K(`timeout ${a} of ms exceeded`, K.ETIMEDOUT))
			}, a);
			const w = () => {
				n && (u && clearTimeout(u), u = null, n.forEach(m => {
					m.unsubscribe ? m.unsubscribe(p) : m.removeEventListener("abort", p)
				}), n = null)
			};
			n.forEach(m => m.addEventListener("abort", p));
			const {
				signal: x
			} = d;
			return x.unsubscribe = () => T.asap(w), x
		}
	},
	ir = function*(n, a) {
		let r = n.byteLength;
		if (r < a) {
			yield n;
			return
		}
		let d = 0,
			c;
		for (; d < r;) c = d + a, yield n.slice(d, c), d = c
	},
	ar = async function*(n, a) {
		for await (const r of nr(n)) yield* ir(r, a)
	}, nr = async function*(n) {
		if (n[Symbol.asyncIterator]) {
			yield* n;
			return
		}
		const a = n.getReader();
		try {
			for (;;) {
				const {
					done: r,
					value: d
				} = await a.read();
				if (r) break;
				yield d
			}
		} finally {
			await a.cancel()
		}
	}, wi = (n, a, r, d) => {
		const c = ar(n, a);
		let p = 0,
			u, w = x => {
				u || (u = !0, d && d(x))
			};
		return new ReadableStream({
			async pull(x) {
				try {
					const {
						done: m,
						value: y
					} = await c.next();
					if (m) {
						w(), x.close();
						return
					}
					let E = y.byteLength;
					if (r) {
						let R = p += E;
						r(R)
					}
					x.enqueue(new Uint8Array(y))
				} catch (m) {
					throw w(m), m
				}
			},
			cancel(x) {
				return w(x), c.return()
			}
		}, {
			highWaterMark: 2
		})
	}, vs = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", ua = vs && typeof ReadableStream == "function", rr = vs && (typeof TextEncoder == "function" ? (n => a => n.encode(a))(new TextEncoder) : async n => new Uint8Array(await new Response(n).arrayBuffer())), ha = (n, ...a) => {
		try {
			return !!n(...a)
		} catch {
			return !1
		}
	}, or = ua && ha(() => {
		let n = !1;
		const a = new Request(Ie.origin, {
			body: new ReadableStream,
			method: "POST",
			get duplex() {
				return n = !0, "half"
			}
		}).headers.has("Content-Type");
		return n && !a
	}), Ei = 64 * 1024, Bs = ua && ha(() => T.isReadableStream(new Response("").body)), cs = {
		stream: Bs && (n => n.body)
	};
vs && (n => {
	["text", "arrayBuffer", "blob", "formData", "stream"].forEach(a => {
		!cs[a] && (cs[a] = T.isFunction(n[a]) ? r => r[a]() : (r, d) => {
			throw new K(`Response type '${a}' is not supported`, K.ERR_NOT_SUPPORT, d)
		})
	})
})(new Response);
const lr = async n => {
	if (n == null) return 0;
	if (T.isBlob(n)) return n.size;
	if (T.isSpecCompliantForm(n)) return (await new Request(Ie.origin, {
		method: "POST",
		body: n
	}).arrayBuffer()).byteLength;
	if (T.isArrayBufferView(n) || T.isArrayBuffer(n)) return n.byteLength;
	if (T.isURLSearchParams(n) && (n = n + ""), T.isString(n)) return (await rr(n)).byteLength
}, dr = async (n, a) => {
	const r = T.toFiniteNumber(n.getContentLength());
	return r ?? lr(a)
}, cr = vs && (async n => {
	let {
		url: a,
		method: r,
		data: d,
		signal: c,
		cancelToken: p,
		timeout: u,
		onDownloadProgress: w,
		onUploadProgress: x,
		responseType: m,
		headers: y,
		withCredentials: E = "same-origin",
		fetchOptions: R
	} = ca(n);
	m = m ? (m + "").toLowerCase() : "text";
	let U = sr([c, p && p.toAbortSignal()], u),
		O;
	const W = U && U.unsubscribe && (() => {
		U.unsubscribe()
	});
	let N;
	try {
		if (x && or && r !== "get" && r !== "head" && (N = await dr(y, d)) !== 0) {
			let j = new Request(a, {
					method: "POST",
					body: d,
					duplex: "half"
				}),
				le;
			if (T.isFormData(d) && (le = j.headers.get("content-type")) && y.setContentType(le), j.body) {
				const [Ee, ae] = gi(N, ds(bi(x)));
				d = wi(j.body, Ei, Ee, ae)
			}
		}
		T.isString(E) || (E = E ? "include" : "omit");
		const ie = "credentials" in Request.prototype;
		O = new Request(a, {
			...R,
			signal: U,
			method: r.toUpperCase(),
			headers: y.normalize().toJSON(),
			body: d,
			duplex: "half",
			credentials: ie ? E : void 0
		});
		let ce = await fetch(O, R);
		const re = Bs && (m === "stream" || m === "response");
		if (Bs && (w || re && W)) {
			const j = {};
			["status", "statusText", "headers"].forEach(me => {
				j[me] = ce[me]
			});
			const le = T.toFiniteNumber(ce.headers.get("content-length")),
				[Ee, ae] = w && gi(le, ds(bi(w), !0)) || [];
			ce = new Response(wi(ce.body, Ei, Ee, () => {
				ae && ae(), W && W()
			}), j)
		}
		m = m || "text";
		let Y = await cs[T.findKey(cs, m) || "text"](ce, n);
		return !re && W && W(), await new Promise((j, le) => {
			la(j, le, {
				data: Y,
				headers: We.from(ce.headers),
				status: ce.status,
				statusText: ce.statusText,
				config: n,
				request: O
			})
		})
	} catch (ie) {
		throw W && W(), ie && ie.name === "TypeError" && /Load failed|fetch/i.test(ie.message) ? Object.assign(new K("Network Error", K.ERR_NETWORK, n, O), {
			cause: ie.cause || ie
		}) : K.from(ie, ie && ie.code, n, O)
	}
}), Fs = {
	http: Cn,
	xhr: tr,
	fetch: cr
};
T.forEach(Fs, (n, a) => {
	if (n) {
		try {
			Object.defineProperty(n, "name", {
				value: a
			})
		} catch {}
		Object.defineProperty(n, "adapterName", {
			value: a
		})
	}
});
const Ti = n => `- ${n}`,
	ur = n => T.isFunction(n) || n === null || n === !1,
	pa = {
		getAdapter: n => {
			n = T.isArray(n) ? n : [n];
			const {
				length: a
			} = n;
			let r, d;
			const c = {};
			for (let p = 0; p < a; p++) {
				r = n[p];
				let u;
				if (d = r, !ur(r) && (d = Fs[(u = String(r)).toLowerCase()], d === void 0)) throw new K(`Unknown adapter '${u}'`);
				if (d) break;
				c[u || "#" + p] = d
			}
			if (!d) {
				const p = Object.entries(c).map(([w, x]) => `adapter ${w} ` + (x === !1 ? "is not supported by the environment" : "is not available in the build"));
				let u = a ? p.length > 1 ? `since :
` + p.map(Ti).join(`
`) : " " + Ti(p[0]) : "as no adapter specified";
				throw new K("There is no suitable adapter to dispatch the request " + u, "ERR_NOT_SUPPORT")
			}
			return d
		},
		adapters: Fs
	};

function As(n) {
	if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted) throw new Ot(null, n)
}

function Si(n) {
	return As(n), n.headers = We.from(n.headers), n.data = Cs.call(n, n.transformRequest), ["post", "put", "patch"].indexOf(n.method) !== -1 && n.headers.setContentType("application/x-www-form-urlencoded", !1), pa.getAdapter(n.adapter || Vt.adapter)(n).then(function(d) {
		return As(n), d.data = Cs.call(n, n.transformResponse, d), d.headers = We.from(d.headers), d
	}, function(d) {
		return oa(d) || (As(n), d && d.response && (d.response.data = Cs.call(n, n.transformResponse, d.response), d.response.headers = We.from(d.response.headers))), Promise.reject(d)
	})
}
const fa = "1.11.0",
	gs = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((n, a) => {
	gs[n] = function(d) {
		return typeof d === n || "a" + (a < 1 ? "n " : " ") + n
	}
});
const xi = {};
gs.transitional = function(a, r, d) {
	function c(p, u) {
		return "[Axios v" + fa + "] Transitional option '" + p + "'" + u + (d ? ". " + d : "")
	}
	return (p, u, w) => {
		if (a === !1) throw new K(c(u, " has been removed" + (r ? " in " + r : "")), K.ERR_DEPRECATED);
		return r && !xi[u] && (xi[u] = !0), a ? a(p, u, w) : !0
	}
};
gs.spelling = function(a) {
	return (r, d) => !0
};

function hr(n, a, r) {
	if (typeof n != "object") throw new K("options must be an object", K.ERR_BAD_OPTION_VALUE);
	const d = Object.keys(n);
	let c = d.length;
	for (; c-- > 0;) {
		const p = d[c],
			u = a[p];
		if (u) {
			const w = n[p],
				x = w === void 0 || u(w, p, n);
			if (x !== !0) throw new K("option " + p + " must be " + x, K.ERR_BAD_OPTION_VALUE);
			continue
		}
		if (r !== !0) throw new K("Unknown option " + p, K.ERR_BAD_OPTION)
	}
}
const is = {
		assertOptions: hr,
		validators: gs
	},
	st = is.validators;
let ht = class {
	constructor(a) {
		this.defaults = a || {}, this.interceptors = {
			request: new mi,
			response: new mi
		}
	}
	async request(a, r) {
		try {
			return await this._request(a, r)
		} catch (d) {
			if (d instanceof Error) {
				let c = {};
				Error.captureStackTrace ? Error.captureStackTrace(c) : c = new Error;
				const p = c.stack ? c.stack.replace(/^.+\n/, "") : "";
				try {
					d.stack ? p && !String(d.stack).endsWith(p.replace(/^.+\n.+\n/, "")) && (d.stack += `
` + p) : d.stack = p
				} catch {}
			}
			throw d
		}
	}
	_request(a, r) {
		typeof a == "string" ? (r = r || {}, r.url = a) : r = a || {}, r = pt(this.defaults, r);
		const {
			transitional: d,
			paramsSerializer: c,
			headers: p
		} = r;
		d !== void 0 && is.assertOptions(d, {
			silentJSONParsing: st.transitional(st.boolean),
			forcedJSONParsing: st.transitional(st.boolean),
			clarifyTimeoutError: st.transitional(st.boolean)
		}, !1), c != null && (T.isFunction(c) ? r.paramsSerializer = {
			serialize: c
		} : is.assertOptions(c, {
			encode: st.function,
			serialize: st.function
		}, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), is.assertOptions(r, {
			baseUrl: st.spelling("baseURL"),
			withXsrfToken: st.spelling("withXSRFToken")
		}, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
		let u = p && T.merge(p.common, p[r.method]);
		p && T.forEach(["delete", "get", "head", "post", "put", "patch", "common"], O => {
			delete p[O]
		}), r.headers = We.concat(u, p);
		const w = [];
		let x = !0;
		this.interceptors.request.forEach(function(W) {
			typeof W.runWhen == "function" && W.runWhen(r) === !1 || (x = x && W.synchronous, w.unshift(W.fulfilled, W.rejected))
		});
		const m = [];
		this.interceptors.response.forEach(function(W) {
			m.push(W.fulfilled, W.rejected)
		});
		let y, E = 0,
			R;
		if (!x) {
			const O = [Si.bind(this), void 0];
			for (O.unshift(...w), O.push(...m), R = O.length, y = Promise.resolve(r); E < R;) y = y.then(O[E++], O[E++]);
			return y
		}
		R = w.length;
		let U = r;
		for (E = 0; E < R;) {
			const O = w[E++],
				W = w[E++];
			try {
				U = O(U)
			} catch (N) {
				W.call(this, N);
				break
			}
		}
		try {
			y = Si.call(this, U)
		} catch (O) {
			return Promise.reject(O)
		}
		for (E = 0, R = m.length; E < R;) y = y.then(m[E++], m[E++]);
		return y
	}
	getUri(a) {
		a = pt(this.defaults, a);
		const r = da(a.baseURL, a.url, a.allowAbsoluteUrls);
		return aa(r, a.params, a.paramsSerializer)
	}
};
T.forEach(["delete", "get", "head", "options"], function(a) {
	ht.prototype[a] = function(r, d) {
		return this.request(pt(d || {}, {
			method: a,
			url: r,
			data: (d || {}).data
		}))
	}
});
T.forEach(["post", "put", "patch"], function(a) {
	function r(d) {
		return function(p, u, w) {
			return this.request(pt(w || {}, {
				method: a,
				headers: d ? {
					"Content-Type": "multipart/form-data"
				} : {},
				url: p,
				data: u
			}))
		}
	}
	ht.prototype[a] = r(), ht.prototype[a + "Form"] = r(!0)
});
let pr = class ma {
	constructor(a) {
		if (typeof a != "function") throw new TypeError("executor must be a function.");
		let r;
		this.promise = new Promise(function(p) {
			r = p
		});
		const d = this;
		this.promise.then(c => {
			if (!d._listeners) return;
			let p = d._listeners.length;
			for (; p-- > 0;) d._listeners[p](c);
			d._listeners = null
		}), this.promise.then = c => {
			let p;
			const u = new Promise(w => {
				d.subscribe(w), p = w
			}).then(c);
			return u.cancel = function() {
				d.unsubscribe(p)
			}, u
		}, a(function(p, u, w) {
			d.reason || (d.reason = new Ot(p, u, w), r(d.reason))
		})
	}
	throwIfRequested() {
		if (this.reason) throw this.reason
	}
	subscribe(a) {
		if (this.reason) {
			a(this.reason);
			return
		}
		this._listeners ? this._listeners.push(a) : this._listeners = [a]
	}
	unsubscribe(a) {
		if (!this._listeners) return;
		const r = this._listeners.indexOf(a);
		r !== -1 && this._listeners.splice(r, 1)
	}
	toAbortSignal() {
		const a = new AbortController,
			r = d => {
				a.abort(d)
			};
		return this.subscribe(r), a.signal.unsubscribe = () => this.unsubscribe(r), a.signal
	}
	static source() {
		let a;
		return {
			token: new ma(function(c) {
				a = c
			}),
			cancel: a
		}
	}
};

function fr(n) {
	return function(r) {
		return n.apply(null, r)
	}
}

function mr(n) {
	return T.isObject(n) && n.isAxiosError === !0
}
const Hs = {
	Continue: 100,
	SwitchingProtocols: 101,
	Processing: 102,
	EarlyHints: 103,
	Ok: 200,
	Created: 201,
	Accepted: 202,
	NonAuthoritativeInformation: 203,
	NoContent: 204,
	ResetContent: 205,
	PartialContent: 206,
	MultiStatus: 207,
	AlreadyReported: 208,
	ImUsed: 226,
	MultipleChoices: 300,
	MovedPermanently: 301,
	Found: 302,
	SeeOther: 303,
	NotModified: 304,
	UseProxy: 305,
	Unused: 306,
	TemporaryRedirect: 307,
	PermanentRedirect: 308,
	BadRequest: 400,
	Unauthorized: 401,
	PaymentRequired: 402,
	Forbidden: 403,
	NotFound: 404,
	MethodNotAllowed: 405,
	NotAcceptable: 406,
	ProxyAuthenticationRequired: 407,
	RequestTimeout: 408,
	Conflict: 409,
	Gone: 410,
	LengthRequired: 411,
	PreconditionFailed: 412,
	PayloadTooLarge: 413,
	UriTooLong: 414,
	UnsupportedMediaType: 415,
	RangeNotSatisfiable: 416,
	ExpectationFailed: 417,
	ImATeapot: 418,
	MisdirectedRequest: 421,
	UnprocessableEntity: 422,
	Locked: 423,
	FailedDependency: 424,
	TooEarly: 425,
	UpgradeRequired: 426,
	PreconditionRequired: 428,
	TooManyRequests: 429,
	RequestHeaderFieldsTooLarge: 431,
	UnavailableForLegalReasons: 451,
	InternalServerError: 500,
	NotImplemented: 501,
	BadGateway: 502,
	ServiceUnavailable: 503,
	GatewayTimeout: 504,
	HttpVersionNotSupported: 505,
	VariantAlsoNegotiates: 506,
	InsufficientStorage: 507,
	LoopDetected: 508,
	NotExtended: 510,
	NetworkAuthenticationRequired: 511
};
Object.entries(Hs).forEach(([n, a]) => {
	Hs[a] = n
});

function va(n) {
	const a = new ht(n),
		r = qi(ht.prototype.request, a);
	return T.extend(r, ht.prototype, a, {
		allOwnKeys: !0
	}), T.extend(r, a, null, {
		allOwnKeys: !0
	}), r.create = function(c) {
		return va(pt(n, c))
	}, r
}
const xe = va(Vt);
xe.Axios = ht;
xe.CanceledError = Ot;
xe.CancelToken = pr;
xe.isCancel = oa;
xe.VERSION = fa;
xe.toFormData = ms;
xe.AxiosError = K;
xe.Cancel = xe.CanceledError;
xe.all = function(a) {
	return Promise.all(a)
};
xe.spread = fr;
xe.isAxiosError = mr;
xe.mergeConfig = pt;
xe.AxiosHeaders = We;
xe.formToJSON = n => ra(T.isHTMLForm(n) ? new FormData(n) : n);
xe.getAdapter = pa.getAdapter;
xe.HttpStatusCode = Hs;
xe.default = xe;
const {
	Axios: Wo,
	AxiosError: qo,
	CanceledError: Vo,
	isCancel: Yo,
	CancelToken: Xo,
	VERSION: Ko,
	all: Qo,
	Cancel: Jo,
	isAxiosError: Zo,
	spread: el,
	toFormData: tl,
	AxiosHeaders: sl,
	HttpStatusCode: il,
	formToJSON: al,
	getAdapter: nl,
	mergeConfig: rl
} = xe, $t = {
	API_BASE_URL: "https://sdk-dg-gt.funcatgames.com",
	API_KEY: "7da689029f9e406d7dd8edec74733767",
	API_GID: 3,
	API_SGID: 16,
	API_SITE_ID: 1
}, Ms = n => (J.showMessage(n.msg), n), vr = (n = {}) => {
	J.randomInt(10);
	const a = J.timeStamp(),
		r = J.fingercode,
		d = J.devicesType(),
		c = J.md5(r + Date.now()),
		p = $t.API_KEY,
		u = $t.API_GID,
		w = $t.API_SGID,
		x = J.ss,
		m = J.ts,
		y = J.ps,
		E = J.refer,
		R = $t.API_SITE_ID,
		U = J.local.get("token") ?? J.token,
		O = J.queryParams.inviteCode || "",
		W = {
			language: J.lang,
			ua: navigator.userAgent || "unknown",
			host: location.href,
			ps: y,
			ss: x,
			ts: m,
			refer: E,
			gid: u,
			sgid: w,
			site_id: R,
			requestTime: a,
			device_id: r,
			device_type: d,
			event_id: c,
			token: U,
			...O && {
				inviteCode: O
			},
			...n
		},
		N = J.objKeySort(W),
		ie = J.md5(J.genSign(N, p));
	return {
		...W,
		requestSign: ie
	}
}, bs = xe.create({
	timeout: 1e4 * 10
});
bs.defaults.baseURL = $t.API_BASE_URL;
bs.interceptors.request.use(n => n, n => Promise.error(n));
bs.interceptors.response.use(n => {
	const {
		data: a,
		config: r
	} = n;
	return a.code === 0 ? Promise.resolve(a) : (Ms(a), Promise.reject(a))
}, n => (n.response && n.response.status !== 200 ? Ms({
	code: n.response.status,
	msg: n.response.statusText
}) : Ms({
	code: 0,
	msg: n.message
}), Promise.reject(n)));
const Js = (n, a = {}) => {
		let d = vr(a);
		const p = {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
			}
		};
		return bs.post(n, d, p)
	},
	gr = n => Js("/cmsSiteModule/init", n),
	br = n => Js("/cmsSiteModule/login", n),
	yr = n => Js("/cmsSiteModule/userInfo", n),
	wr = Vs("useUserStore", {
		state: () => ({
			userInfo: {},
			isAuthorize: !1
		}),
		getters: {},
		actions: {
			setUserInfo(n = {}) {
				this.userInfo = {
					...this.userInfo,
					...n
				}, J.userInfo = this.userInfo, n.token && (J.token = n.token, J.local.set("token", n.token), this.setAuthorize(!0))
			},
			setAuthorize(n) {
				this.isAuthorize = n
			},
			async login(n = {}) {
				const a = {
					...n
				};
				try {
					const {
						data: r
					} = await br(a);
					return r
				} catch (r) {
					throw this.logOut(), r
				}
			},
			async getUserInfo(n = {}) {
				const a = {
					...n
				};
				try {
					const {
						data: r
					} = await yr(a);
					return this.setUserInfo(r), r
				} catch (r) {
					throw this.logOut(), r
				}
			},
			logOut() {
				this.setAuthorize(!1), this.userInfo = {}, J.userInfo = {}, J.token = "", J.local.remove("token")
			}
		}
	}),
	Er = Vs("appStore", {
		state: () => ({
			bodyAttr: {},
			module_list: [],
			pop_list: [],
			refList: {},
			popStates: {},
			fetchData: {},
			initData: {}
		}),
		getters: {
			isPopOpen: n => a => n.popStates[a].state ?? !1
		},
		actions: {
			setBody(n) {
				this.bodyAttr = n
			},
			setModuleList(n) {
				this.module_list = [...this.module_list, n]
			},
			setPopModuleList(n) {
				this.pop_list = [...this.pop_list, n], this.pop_list.length > 0 && this.initializePop(this.pop_list)
			},
			setRefList(n, a) {
				this.refList[n] = a
			},
			initializePop(n) {
				n.forEach(({
					name: a
				}) => {
					this.popStates[a] = {
						state: !1,
						popData: {}
					}
				})
			},
			openPop(n, a = {}) {
				this.popStates[n] && (this.popStates[n] = {
					state: !0,
					popData: a
				})
			},
			closePop(n) {
				this.popStates[n] && (this.popStates[n] = {
					state: !1,
					popData: {}
				})
			},
			async pageInit() {
				try {
					// const {
					// 	data: n
					// } = await gr();
          const {
						data: n
					} = {"code":0,"msg":"success","data":{"site":{"materialUrl":"https://www.luckywings.net/","number":500000,"seoTitle":"《女神檔案》","seoKeywords":"","seoDesc":"女神檔案","facebookShareTitle":"《女神檔案》","fbAdCode":"","gaAdCode":"","ttAdCode":"","googlePlay":"https://www.luckywings.net/","appStore":"https://www.luckywings.net/","lang":[{"name":"ZH","code":"zh-tw"}]},"user":{"task":[{"id":1,"code":"task_login","name":"每日登入","desc":"獲得1點積分","url":"","status":0},{"id":2,"code":"task_share","name":"每日分享","desc":"獲得1點積分","url":"","status":0},{"id":3,"code":"task_facebook","name":"按讚官方FB","desc":"獲得1點積分","url":"fb://page/483487288189513","status":0},{"id":4,"code":"task_discord","name":"加入官方Discord","desc":"獲得1點積分","url":"https://discord.gg/TeheSkKakC","status":0}],"drawNumber":0,"code":"","phone":"","cards":[],"token":""}}};
					return this.initData = n, n
				} catch (n) {
					if (n.code === 10008) return wr().logOut(), this.pageInit()
				}
			},
			updateFetchData(n = null) {
				if (n && this.fetchData[n]) {
					this.fetchData[n]();
					return
				}
				for (const a in this.fetchData) this.fetchData.hasOwnProperty(a) && this.fetchData[a]()
			}
		}
	}),
	Zs = (n, a) => {
		const r = n.__vccOpts || n;
		for (const [d, c] of a) r[d] = c;
		return r
	},
	Tr = {
		key: 0,
		class: "overlay"
	},
	Sr = {
		class: "pop"
	},
	xr = {
		__name: "index",
		props: {
			message: {
				type: String,
				default: ""
			},
			duration: {
				type: Number,
				default: 3e3
			},
			overlay: {
				type: Boolean,
				default: !1
			},
			show: {
				type: Boolean,
				default: !1
			},
			forbidClick: {
				type: Boolean,
				default: !1
			}
		},
		emits: [],
		setup(n, {
			emit: a
		}) {
			const r = Ut(() => J.isMobile() ? "mobile" : "pc"),
				d = Er(),
				c = Ut(() => d.bodyAttr.commonMessageBgColor);
			return us(() => {}), (p, u) => (Ct(), Ft("div", {
				class: Hi(`${Ds(r)}-message-comp ${n.forbidClick?"":"forbid-click"}`)
			}, [n.overlay ? (Ct(), Ft("div", Tr)) : Rs("", !0), Ht("div", Sr, [Ht("div", {
				class: "text",
				style: Pa({
					"background-color": Ds(c)
				})
			}, Fi(n.message), 5)])], 2))
		}
	},
	Cr = Zs(xr, [
		["__scopeId", "data-v-289cf6b8"]
	]);
let At = null,
	as = null;
const Ar = n => {
		const a = Ui(Cr, n),
			r = document.createElement("div");
		At = a.mount(r), document.body.appendChild(At.$el)
	},
	Mr = (n = {}) => {
		const a = {
			type: "info",
			message: "",
			duration: 2e3
		};
		let r;
		typeof n == "object" && n !== null ? r = {
			...a,
			...n
		} : r = {
			...a,
			message: n
		}, At && Us(), Ar(r), as = setTimeout(() => {
			Us()
		}, r.duration || 2e3)
	},
	Us = () => {
		At && (as && (clearTimeout(as), as = null), document.body.removeChild(At.$el), At = null)
	},
	Lr = {
		key: 0,
		class: "overlay"
	},
	Or = {
		class: "pop"
	},
	_r = {
		key: 0,
		class: "text"
	},
	Pr = {
		__name: "Loading",
		props: {
			message: {
				type: String,
				default: ""
			},
			overlay: {
				type: Boolean,
				default: !0
			}
		},
		setup(n) {
			const a = Ut(() => J.isMobile() ? "mobile" : "pc");
			return us(() => {}), (r, d) => (Ct(), Ft("div", {
				class: Hi(`${Ds(a)}-loading`)
			}, [n.overlay ? (Ct(), Ft("div", Lr)) : Rs("", !0), Ht("div", Or, [d[0] || (d[0] = Ht("div", {
				class: "loading-container"
			}, [Ht("div", {
				class: "outer-ring"
			})], -1)), n.message ? (Ct(), Ft("div", _r, Fi(n.message), 1)) : Rs("", !0)])], 2))
		}
	},
	kr = Zs(Pr, [
		["__scopeId", "data-v-545b76f8"]
	]);
let Mt = null;
const Ir = n => {
		const a = Ui(kr, n),
			r = document.createElement("div");
		Mt = a.mount(r), document.body.appendChild(Mt.$el)
	},
	Rr = (n = {}) => {
		let a;
		a = {
			...n
		}, Mt && ga(), Ir(a)
	},
	ga = () => {
		Mt && (document.body.removeChild(Mt.$el), Mt = null)
	},
	Dr = {
		__name: "App",
		setup(n) {
			return J.showMessage = Mr, J.hideMessage = Us, J.showLoading = Rr, J.hideLoading = ga, (a, r) => {
				const d = ka("RouterView");
				return Ct(), Ia(d)
			}
		}
	},
	ol = Zs(Dr, [
		["__scopeId", "data-v-29ac6a57"]
	]),
	zr = [{
		path: "/",
		name: "Home",
		meta: {
			title: ""
		},
		component: () => Ys(() => import("./DjSFgGHR0f.js"), __vite__mapDeps([0, 1, 2, 3, 4]))
	}],
	Nr = [{
		path: "/",
		name: "Home",
		meta: {
			title: ""
		},
		component: () => Ys(() => import("./9UEmpCv9Y4.js"), __vite__mapDeps([5, 1, 2, 3, 6]))
	}],
	$r = J.enforced_device ?? J.isMobile();
let Br = $r ? zr : Nr;
const Fr = [{
		path: "/",
		name: "layout",
		component: () => Ys(() => import("./CSpKiXwtXL.js"), __vite__mapDeps([7, 1, 2, 3])),
		children: Br
	}, {
		path: "/:pathMatch(.*)*",
		hidden: !0,
		redirect: "/"
	}],
	Hr = "/",
	ll = Ra({
		history: Da(Hr),
		routes: Fr,
		scrollBehavior: () => ({
			y: 0
		})
	}),
	dl = za(); /*! @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE */
const {
	entries: ba,
	setPrototypeOf: Ci,
	isFrozen: Ur,
	getPrototypeOf: jr,
	getOwnPropertyDescriptor: Gr
} = Object;
let {
	freeze: Ne,
	seal: Xe,
	create: ya
} = Object, {
	apply: js,
	construct: Gs
} = typeof Reflect < "u" && Reflect;
Ne || (Ne = function(a) {
	return a
});
Xe || (Xe = function(a) {
	return a
});
js || (js = function(a, r, d) {
	return a.apply(r, d)
});
Gs || (Gs = function(a, r) {
	return new a(...r)
});
const Zt = $e(Array.prototype.forEach),
	Wr = $e(Array.prototype.lastIndexOf),
	Ai = $e(Array.prototype.pop),
	It = $e(Array.prototype.push),
	qr = $e(Array.prototype.splice),
	ns = $e(String.prototype.toLowerCase),
	Ls = $e(String.prototype.toString),
	Mi = $e(String.prototype.match),
	Rt = $e(String.prototype.replace),
	Vr = $e(String.prototype.indexOf),
	Yr = $e(String.prototype.trim),
	Ze = $e(Object.prototype.hasOwnProperty),
	ze = $e(RegExp.prototype.test),
	Dt = Xr(TypeError);

function $e(n) {
	return function(a) {
		a instanceof RegExp && (a.lastIndex = 0);
		for (var r = arguments.length, d = new Array(r > 1 ? r - 1 : 0), c = 1; c < r; c++) d[c - 1] = arguments[c];
		return js(n, a, d)
	}
}

function Xr(n) {
	return function() {
		for (var a = arguments.length, r = new Array(a), d = 0; d < a; d++) r[d] = arguments[d];
		return Gs(n, r)
	}
}

function te(n, a) {
	let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ns;
	Ci && Ci(n, null);
	let d = a.length;
	for (; d--;) {
		let c = a[d];
		if (typeof c == "string") {
			const p = r(c);
			p !== c && (Ur(a) || (a[d] = p), c = p)
		}
		n[c] = !0
	}
	return n
}

function Kr(n) {
	for (let a = 0; a < n.length; a++) Ze(n, a) || (n[a] = null);
	return n
}

function ot(n) {
	const a = ya(null);
	for (const [r, d] of ba(n)) Ze(n, r) && (Array.isArray(d) ? a[r] = Kr(d) : d && typeof d == "object" && d.constructor === Object ? a[r] = ot(d) : a[r] = d);
	return a
}

function zt(n, a) {
	for (; n !== null;) {
		const d = Gr(n, a);
		if (d) {
			if (d.get) return $e(d.get);
			if (typeof d.value == "function") return $e(d.value)
		}
		n = jr(n)
	}

	function r() {
		return null
	}
	return r
}
const Li = Ne(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
	Os = Ne(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
	_s = Ne(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
	Qr = Ne(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
	Ps = Ne(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]),
	Jr = Ne(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
	Oi = Ne(["#text"]),
	_i = Ne(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]),
	ks = Ne(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
	Pi = Ne(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
	es = Ne(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
	Zr = Xe(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
	eo = Xe(/<%[\w\W]*|[\w\W]*%>/gm),
	to = Xe(/\$\{[\w\W]*/gm),
	so = Xe(/^data-[\-\w.\u00B7-\uFFFF]+$/),
	io = Xe(/^aria-[\-\w]+$/),
	wa = Xe(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
	ao = Xe(/^(?:\w+script|data):/i),
	no = Xe(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
	Ea = Xe(/^html$/i),
	ro = Xe(/^[a-z][.\w]*(-[.\w]+)+$/i);
var ki = Object.freeze({
	__proto__: null,
	ARIA_ATTR: io,
	ATTR_WHITESPACE: no,
	CUSTOM_ELEMENT: ro,
	DATA_ATTR: so,
	DOCTYPE_NAME: Ea,
	ERB_EXPR: eo,
	IS_ALLOWED_URI: wa,
	IS_SCRIPT_OR_DATA: ao,
	MUSTACHE_EXPR: Zr,
	TMPLIT_EXPR: to
});
const Nt = {
		element: 1,
		text: 3,
		progressingInstruction: 7,
		comment: 8,
		document: 9
	},
	oo = function() {
		return typeof window > "u" ? null : window
	},
	lo = function(a, r) {
		if (typeof a != "object" || typeof a.createPolicy != "function") return null;
		let d = null;
		const c = "data-tt-policy-suffix";
		r && r.hasAttribute(c) && (d = r.getAttribute(c));
		const p = "dompurify" + (d ? "#" + d : "");
		try {
			return a.createPolicy(p, {
				createHTML(u) {
					return u
				},
				createScriptURL(u) {
					return u
				}
			})
		} catch {
			return null
		}
	},
	Ii = function() {
		return {
			afterSanitizeAttributes: [],
			afterSanitizeElements: [],
			afterSanitizeShadowDOM: [],
			beforeSanitizeAttributes: [],
			beforeSanitizeElements: [],
			beforeSanitizeShadowDOM: [],
			uponSanitizeAttribute: [],
			uponSanitizeElement: [],
			uponSanitizeShadowNode: []
		}
	};

function Ta() {
	let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : oo();
	const a = D => Ta(D);
	if (a.version = "3.2.6", a.removed = [], !n || !n.document || n.document.nodeType !== Nt.document || !n.Element) return a.isSupported = !1, a;
	let {
		document: r
	} = n;
	const d = r,
		c = d.currentScript,
		{
			DocumentFragment: p,
			HTMLTemplateElement: u,
			Node: w,
			Element: x,
			NodeFilter: m,
			NamedNodeMap: y = n.NamedNodeMap || n.MozNamedAttrMap,
			HTMLFormElement: E,
			DOMParser: R,
			trustedTypes: U
		} = n,
		O = x.prototype,
		W = zt(O, "cloneNode"),
		N = zt(O, "remove"),
		ie = zt(O, "nextSibling"),
		ce = zt(O, "childNodes"),
		re = zt(O, "parentNode");
	if (typeof u == "function") {
		const D = r.createElement("template");
		D.content && D.content.ownerDocument && (r = D.content.ownerDocument)
	}
	let Y, j = "";
	const {
		implementation: le,
		createNodeIterator: Ee,
		createDocumentFragment: ae,
		getElementsByTagName: me
	} = r, {
		importNode: Le
	} = d;
	let B = Ii();
	a.isSupported = typeof ba == "function" && typeof re == "function" && le && le.createHTMLDocument !== void 0;
	const {
		MUSTACHE_EXPR: F,
		ERB_EXPR: ee,
		TMPLIT_EXPR: V,
		DATA_ATTR: Te,
		ARIA_ATTR: _e,
		IS_SCRIPT_OR_DATA: Re,
		ATTR_WHITESPACE: Ye,
		CUSTOM_ELEMENT: fe
	} = ki;
	let {
		IS_ALLOWED_URI: it
	} = ki, be = null;
	const tt = te({}, [...Li, ...Os, ..._s, ...Ps, ...Oi]);
	let de = null;
	const Pe = te({}, [..._i, ...ks, ...Pi, ...es]);
	let ne = Object.seal(ya(null, {
			tagNameCheck: {
				writable: !0,
				configurable: !1,
				enumerable: !0,
				value: null
			},
			attributeNameCheck: {
				writable: !0,
				configurable: !1,
				enumerable: !0,
				value: null
			},
			allowCustomizedBuiltInElements: {
				writable: !0,
				configurable: !1,
				enumerable: !0,
				value: !1
			}
		})),
		Ae = null,
		ye = null,
		ve = !0,
		Se = !0,
		De = !1,
		we = !0,
		Oe = !1,
		ue = !0,
		Q = !1,
		Ce = !1,
		Be = !1,
		Fe = !1,
		ft = !1,
		Ke = !1,
		Yt = !0,
		mt = !1;
	const ys = "user-content-";
	let He = !0,
		Qe = !1,
		Je = {},
		Me = null;
	const vt = te({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
	let gt = null;
	const _t = te({}, ["audio", "video", "img", "source", "image", "track"]);
	let at = null;
	const Pt = te({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
		Ue = "http://www.w3.org/1998/Math/MathML",
		nt = "http://www.w3.org/2000/svg",
		je = "http://www.w3.org/1999/xhtml";
	let rt = je,
		bt = !1,
		yt = null;
	const Xt = te({}, [Ue, nt, je], Ls);
	let lt = te({}, ["mi", "mo", "mn", "ms", "mtext"]),
		wt = te({}, ["annotation-xml"]);
	const e = te({}, ["title", "style", "font", "a", "script"]);
	let t = null;
	const s = ["application/xhtml+xml", "text/html"],
		i = "text/html";
	let l = null,
		o = null;
	const h = r.createElement("form"),
		v = function(b) {
			return b instanceof RegExp || b instanceof Function
		},
		f = function() {
			let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
			if (!(o && o === b)) {
				if ((!b || typeof b != "object") && (b = {}), b = ot(b), t = s.indexOf(b.PARSER_MEDIA_TYPE) === -1 ? i : b.PARSER_MEDIA_TYPE, l = t === "application/xhtml+xml" ? Ls : ns, be = Ze(b, "ALLOWED_TAGS") ? te({}, b.ALLOWED_TAGS, l) : tt, de = Ze(b, "ALLOWED_ATTR") ? te({}, b.ALLOWED_ATTR, l) : Pe, yt = Ze(b, "ALLOWED_NAMESPACES") ? te({}, b.ALLOWED_NAMESPACES, Ls) : Xt, at = Ze(b, "ADD_URI_SAFE_ATTR") ? te(ot(Pt), b.ADD_URI_SAFE_ATTR, l) : Pt, gt = Ze(b, "ADD_DATA_URI_TAGS") ? te(ot(_t), b.ADD_DATA_URI_TAGS, l) : _t, Me = Ze(b, "FORBID_CONTENTS") ? te({}, b.FORBID_CONTENTS, l) : vt, Ae = Ze(b, "FORBID_TAGS") ? te({}, b.FORBID_TAGS, l) : ot({}), ye = Ze(b, "FORBID_ATTR") ? te({}, b.FORBID_ATTR, l) : ot({}), Je = Ze(b, "USE_PROFILES") ? b.USE_PROFILES : !1, ve = b.ALLOW_ARIA_ATTR !== !1, Se = b.ALLOW_DATA_ATTR !== !1, De = b.ALLOW_UNKNOWN_PROTOCOLS || !1, we = b.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Oe = b.SAFE_FOR_TEMPLATES || !1, ue = b.SAFE_FOR_XML !== !1, Q = b.WHOLE_DOCUMENT || !1, Fe = b.RETURN_DOM || !1, ft = b.RETURN_DOM_FRAGMENT || !1, Ke = b.RETURN_TRUSTED_TYPE || !1, Be = b.FORCE_BODY || !1, Yt = b.SANITIZE_DOM !== !1, mt = b.SANITIZE_NAMED_PROPS || !1, He = b.KEEP_CONTENT !== !1, Qe = b.IN_PLACE || !1, it = b.ALLOWED_URI_REGEXP || wa, rt = b.NAMESPACE || je, lt = b.MATHML_TEXT_INTEGRATION_POINTS || lt, wt = b.HTML_INTEGRATION_POINTS || wt, ne = b.CUSTOM_ELEMENT_HANDLING || {}, b.CUSTOM_ELEMENT_HANDLING && v(b.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (ne.tagNameCheck = b.CUSTOM_ELEMENT_HANDLING.tagNameCheck), b.CUSTOM_ELEMENT_HANDLING && v(b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (ne.attributeNameCheck = b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), b.CUSTOM_ELEMENT_HANDLING && typeof b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (ne.allowCustomizedBuiltInElements = b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Oe && (Se = !1), ft && (Fe = !0), Je && (be = te({}, Oi), de = [], Je.html === !0 && (te(be, Li), te(de, _i)), Je.svg === !0 && (te(be, Os), te(de, ks), te(de, es)), Je.svgFilters === !0 && (te(be, _s), te(de, ks), te(de, es)), Je.mathMl === !0 && (te(be, Ps), te(de, Pi), te(de, es))), b.ADD_TAGS && (be === tt && (be = ot(be)), te(be, b.ADD_TAGS, l)), b.ADD_ATTR && (de === Pe && (de = ot(de)), te(de, b.ADD_ATTR, l)), b.ADD_URI_SAFE_ATTR && te(at, b.ADD_URI_SAFE_ATTR, l), b.FORBID_CONTENTS && (Me === vt && (Me = ot(Me)), te(Me, b.FORBID_CONTENTS, l)), He && (be["#text"] = !0), Q && te(be, ["html", "head", "body"]), be.table && (te(be, ["tbody"]), delete Ae.tbody), b.TRUSTED_TYPES_POLICY) {
					if (typeof b.TRUSTED_TYPES_POLICY.createHTML != "function") throw Dt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
					if (typeof b.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw Dt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
					Y = b.TRUSTED_TYPES_POLICY, j = Y.createHTML("")
				} else Y === void 0 && (Y = lo(U, c)), Y !== null && typeof j == "string" && (j = Y.createHTML(""));
				Ne && Ne(b), o = b
			}
		},
		g = te({}, [...Os, ..._s, ...Qr]),
		S = te({}, [...Ps, ...Jr]),
		A = function(b) {
			let L = re(b);
			(!L || !L.tagName) && (L = {
				namespaceURI: rt,
				tagName: "template"
			});
			const P = ns(b.tagName),
				G = ns(L.tagName);
			return yt[b.namespaceURI] ? b.namespaceURI === nt ? L.namespaceURI === je ? P === "svg" : L.namespaceURI === Ue ? P === "svg" && (G === "annotation-xml" || lt[G]) : !!g[P] : b.namespaceURI === Ue ? L.namespaceURI === je ? P === "math" : L.namespaceURI === nt ? P === "math" && wt[G] : !!S[P] : b.namespaceURI === je ? L.namespaceURI === nt && !wt[G] || L.namespaceURI === Ue && !lt[G] ? !1 : !S[P] && (e[P] || !g[P]) : !!(t === "application/xhtml+xml" && yt[b.namespaceURI]) : !1
		},
		C = function(b) {
			It(a.removed, {
				element: b
			});
			try {
				re(b).removeChild(b)
			} catch {
				N(b)
			}
		},
		M = function(b, L) {
			try {
				It(a.removed, {
					attribute: L.getAttributeNode(b),
					from: L
				})
			} catch {
				It(a.removed, {
					attribute: null,
					from: L
				})
			}
			if (L.removeAttribute(b), b === "is")
				if (Fe || ft) try {
					C(L)
				} catch {} else try {
					L.setAttribute(b, "")
				} catch {}
		},
		k = function(b) {
			let L = null,
				P = null;
			if (Be) b = "<remove></remove>" + b;
			else {
				const Z = Mi(b, /^[\r\n\t ]+/);
				P = Z && Z[0]
			}
			t === "application/xhtml+xml" && rt === je && (b = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + b + "</body></html>");
			const G = Y ? Y.createHTML(b) : b;
			if (rt === je) try {
				L = new R().parseFromString(G, t)
			} catch {}
			if (!L || !L.documentElement) {
				L = le.createDocument(rt, "template", null);
				try {
					L.documentElement.innerHTML = bt ? j : G
				} catch {}
			}
			const se = L.body || L.documentElement;
			return b && P && se.insertBefore(r.createTextNode(P), se.childNodes[0] || null), rt === je ? me.call(L, Q ? "html" : "body")[0] : Q ? L.documentElement : se
		},
		$ = function(b) {
			return Ee.call(b.ownerDocument || b, b, m.SHOW_ELEMENT | m.SHOW_COMMENT | m.SHOW_TEXT | m.SHOW_PROCESSING_INSTRUCTION | m.SHOW_CDATA_SECTION, null)
		},
		H = function(b) {
			return b instanceof E && (typeof b.nodeName != "string" || typeof b.textContent != "string" || typeof b.removeChild != "function" || !(b.attributes instanceof y) || typeof b.removeAttribute != "function" || typeof b.setAttribute != "function" || typeof b.namespaceURI != "string" || typeof b.insertBefore != "function" || typeof b.hasChildNodes != "function")
		},
		I = function(b) {
			return typeof w == "function" && b instanceof w
		};

	function z(D, b, L) {
		Zt(D, P => {
			P.call(a, b, L, o)
		})
	}
	const _ = function(b) {
			let L = null;
			if (z(B.beforeSanitizeElements, b, null), H(b)) return C(b), !0;
			const P = l(b.nodeName);
			if (z(B.uponSanitizeElement, b, {
					tagName: P,
					allowedTags: be
				}), ue && b.hasChildNodes() && !I(b.firstElementChild) && ze(/<[/\w!]/g, b.innerHTML) && ze(/<[/\w!]/g, b.textContent) || b.nodeType === Nt.progressingInstruction || ue && b.nodeType === Nt.comment && ze(/<[/\w]/g, b.data)) return C(b), !0;
			if (!be[P] || Ae[P]) {
				if (!Ae[P] && oe(P) && (ne.tagNameCheck instanceof RegExp && ze(ne.tagNameCheck, P) || ne.tagNameCheck instanceof Function && ne.tagNameCheck(P))) return !1;
				if (He && !Me[P]) {
					const G = re(b) || b.parentNode,
						se = ce(b) || b.childNodes;
					if (se && G) {
						const Z = se.length;
						for (let pe = Z - 1; pe >= 0; --pe) {
							const ke = W(se[pe], !0);
							ke.__removalCount = (b.__removalCount || 0) + 1, G.insertBefore(ke, ie(b))
						}
					}
				}
				return C(b), !0
			}
			return b instanceof x && !A(b) || (P === "noscript" || P === "noembed" || P === "noframes") && ze(/<\/no(script|embed|frames)/i, b.innerHTML) ? (C(b), !0) : (Oe && b.nodeType === Nt.text && (L = b.textContent, Zt([F, ee, V], G => {
				L = Rt(L, G, " ")
			}), b.textContent !== L && (It(a.removed, {
				element: b.cloneNode()
			}), b.textContent = L)), z(B.afterSanitizeElements, b, null), !1)
		},
		q = function(b, L, P) {
			if (Yt && (L === "id" || L === "name") && (P in r || P in h)) return !1;
			if (!(Se && !ye[L] && ze(Te, L))) {
				if (!(ve && ze(_e, L))) {
					if (!de[L] || ye[L]) {
						if (!(oe(b) && (ne.tagNameCheck instanceof RegExp && ze(ne.tagNameCheck, b) || ne.tagNameCheck instanceof Function && ne.tagNameCheck(b)) && (ne.attributeNameCheck instanceof RegExp && ze(ne.attributeNameCheck, L) || ne.attributeNameCheck instanceof Function && ne.attributeNameCheck(L)) || L === "is" && ne.allowCustomizedBuiltInElements && (ne.tagNameCheck instanceof RegExp && ze(ne.tagNameCheck, P) || ne.tagNameCheck instanceof Function && ne.tagNameCheck(P)))) return !1
					} else if (!at[L]) {
						if (!ze(it, Rt(P, Ye, ""))) {
							if (!((L === "src" || L === "xlink:href" || L === "href") && b !== "script" && Vr(P, "data:") === 0 && gt[b])) {
								if (!(De && !ze(Re, Rt(P, Ye, "")))) {
									if (P) return !1
								}
							}
						}
					}
				}
			}
			return !0
		},
		oe = function(b) {
			return b !== "annotation-xml" && Mi(b, fe)
		},
		X = function(b) {
			z(B.beforeSanitizeAttributes, b, null);
			const {
				attributes: L
			} = b;
			if (!L || H(b)) return;
			const P = {
				attrName: "",
				attrValue: "",
				keepAttr: !0,
				allowedAttributes: de,
				forceKeepAttr: void 0
			};
			let G = L.length;
			for (; G--;) {
				const se = L[G],
					{
						name: Z,
						namespaceURI: pe,
						value: ke
					} = se,
					qe = l(Z),
					Et = ke;
				let he = Z === "value" ? Et : Yr(Et);
				if (P.attrName = qe, P.attrValue = he, P.keepAttr = !0, P.forceKeepAttr = void 0, z(B.uponSanitizeAttribute, b, P), he = P.attrValue, mt && (qe === "id" || qe === "name") && (M(Z, b), he = ys + he), ue && ze(/((--!?|])>)|<\/(style|title)/i, he)) {
					M(Z, b);
					continue
				}
				if (P.forceKeepAttr) continue;
				if (!P.keepAttr) {
					M(Z, b);
					continue
				}
				if (!we && ze(/\/>/i, he)) {
					M(Z, b);
					continue
				}
				Oe && Zt([F, ee, V], St => {
					he = Rt(he, St, " ")
				});
				const Tt = l(b.nodeName);
				if (!q(Tt, qe, he)) {
					M(Z, b);
					continue
				}
				if (Y && typeof U == "object" && typeof U.getAttributeType == "function" && !pe) switch (U.getAttributeType(Tt, qe)) {
					case "TrustedHTML": {
						he = Y.createHTML(he);
						break
					}
					case "TrustedScriptURL": {
						he = Y.createScriptURL(he);
						break
					}
				}
				if (he !== Et) try {
					pe ? b.setAttributeNS(pe, Z, he) : b.setAttribute(Z, he), H(b) ? C(b) : Ai(a.removed)
				} catch {
					M(Z, b)
				}
			}
			z(B.afterSanitizeAttributes, b, null)
		},
		ge = function D(b) {
			let L = null;
			const P = $(b);
			for (z(B.beforeSanitizeShadowDOM, b, null); L = P.nextNode();) z(B.uponSanitizeShadowNode, L, null), _(L), X(L), L.content instanceof p && D(L.content);
			z(B.afterSanitizeShadowDOM, b, null)
		};
	return a.sanitize = function(D) {
		let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
			L = null,
			P = null,
			G = null,
			se = null;
		if (bt = !D, bt && (D = "<!-->"), typeof D != "string" && !I(D))
			if (typeof D.toString == "function") {
				if (D = D.toString(), typeof D != "string") throw Dt("dirty is not a string, aborting")
			} else throw Dt("toString is not a function");
		if (!a.isSupported) return D;
		if (Ce || f(b), a.removed = [], typeof D == "string" && (Qe = !1), Qe) {
			if (D.nodeName) {
				const ke = l(D.nodeName);
				if (!be[ke] || Ae[ke]) throw Dt("root node is forbidden and cannot be sanitized in-place")
			}
		} else if (D instanceof w) L = k("<!---->"), P = L.ownerDocument.importNode(D, !0), P.nodeType === Nt.element && P.nodeName === "BODY" || P.nodeName === "HTML" ? L = P : L.appendChild(P);
		else {
			if (!Fe && !Oe && !Q && D.indexOf("<") === -1) return Y && Ke ? Y.createHTML(D) : D;
			if (L = k(D), !L) return Fe ? null : Ke ? j : ""
		}
		L && Be && C(L.firstChild);
		const Z = $(Qe ? D : L);
		for (; G = Z.nextNode();) _(G), X(G), G.content instanceof p && ge(G.content);
		if (Qe) return D;
		if (Fe) {
			if (ft)
				for (se = ae.call(L.ownerDocument); L.firstChild;) se.appendChild(L.firstChild);
			else se = L;
			return (de.shadowroot || de.shadowrootmode) && (se = Le.call(d, se, !0)), se
		}
		let pe = Q ? L.outerHTML : L.innerHTML;
		return Q && be["!doctype"] && L.ownerDocument && L.ownerDocument.doctype && L.ownerDocument.doctype.name && ze(Ea, L.ownerDocument.doctype.name) && (pe = "<!DOCTYPE " + L.ownerDocument.doctype.name + `>
` + pe), Oe && Zt([F, ee, V], ke => {
			pe = Rt(pe, ke, " ")
		}), Y && Ke ? Y.createHTML(pe) : pe
	}, a.setConfig = function() {
		let D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		f(D), Ce = !0
	}, a.clearConfig = function() {
		o = null, Ce = !1
	}, a.isValidAttribute = function(D, b, L) {
		o || f({});
		const P = l(D),
			G = l(b);
		return q(P, G, L)
	}, a.addHook = function(D, b) {
		typeof b == "function" && It(B[D], b)
	}, a.removeHook = function(D, b) {
		if (b !== void 0) {
			const L = Wr(B[D], b);
			return L === -1 ? void 0 : qr(B[D], L, 1)[0]
		}
		return Ai(B[D])
	}, a.removeHooks = function(D) {
		B[D] = []
	}, a.removeAllHooks = function() {
		B = Ii()
	}, a
}
var co = Ta();

function uo(n, a) {
	const r = n.hooks ?? {};
	let d;
	for (d in r) {
		const c = r[d];
		c !== void 0 && a.addHook(d, c)
	}
}

function Sa() {
	return co()
}

function ho(n = {}, a = Sa) {
	const r = a();
	uo(n, r);
	const d = function(u) {
			const w = u.value;
			if (u.oldValue === w) return;
			const x = `${w}`,
				m = u.arg,
				y = n.namedConfigurations,
				E = n.default ?? {};
			return y && m !== void 0 ? r.sanitize(x, y[m] ?? E) : r.sanitize(x, E)
		},
		c = function(u, w) {
			const x = d(w);
			x !== void 0 && (u.innerHTML = x)
		},
		p = {
			mounted: c,
			updated: c
		};
	return n.enableSSRPropsSupport ? {
		...p,
		getSSRProps(u) {
			return {
				innerHTML: d(u)
			}
		}
	} : p
}
const cl = {
	install(n, a = {}, r = Sa) {
		n.directive("dompurify-html", ho(a, r))
	}
};
/*!
 * Vue-Lazyload.js v3.0.0
 * (c) 2023 Awe <hilongjw@gmail.com>
 * Released under the MIT License.
 */
function xa(n, a) {
	return a = {
		exports: {}
	}, n(a, a.exports), a.exports
}
var Ws = xa(function(n) {
		const a = Object.prototype.toString,
			r = Object.prototype.propertyIsEnumerable,
			d = Object.getOwnPropertySymbols;
		n.exports = (p, ...u) => {
			if (!c(p)) throw new TypeError("expected the first argument to be an object");
			if (u.length === 0 || typeof Symbol != "function" || typeof d != "function") return p;
			for (let w of u) {
				let x = d(w);
				for (let m of x) r.call(w, m) && (p[m] = w[m])
			}
			return p
		};

		function c(p) {
			return typeof p == "function" || a.call(p) === "[object Object]" || Array.isArray(p)
		}
	}),
	Ri = Object.freeze({
		__proto__: null,
		default: Ws,
		__moduleExports: Ws
	}),
	po = Ri && Ws || Ri,
	Di = xa(function(n) {
		const a = Object.prototype.toString,
			r = u => u !== "__proto__" && u !== "constructor" && u !== "prototype",
			d = n.exports = (u, ...w) => {
				let x = 0;
				for (p(u) && (u = w[x++]), u || (u = {}); x < w.length; x++)
					if (c(w[x])) {
						for (const m of Object.keys(w[x])) r(m) && (c(u[m]) && c(w[x][m]) ? d(u[m], w[x][m]) : u[m] = w[x][m]);
						po(u, w[x])
					} return u
			};

		function c(u) {
			return typeof u == "function" || a.call(u) === "[object Object]"
		}

		function p(u) {
			return typeof u == "object" ? u === null : typeof u != "function"
		}
	});
const dt = typeof window < "u" && window !== null,
	zi = fo();

function fo() {
	return dt && "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype ? ("isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
		get: function() {
			return this.intersectionRatio > 0
		}
	}), !0) : !1
}
const ct = {
	event: "event",
	observer: "observer"
};

function Bt(n, a) {
	if (!n.length) return;
	const r = n.indexOf(a);
	if (r > -1) return n.splice(r, 1)
}

function Ni(n, a) {
	if (n.tagName !== "IMG" || !n.getAttribute("data-srcset")) return "";
	let r = n.getAttribute("data-srcset").trim().split(",");
	const d = [],
		p = n.parentNode.offsetWidth * a;
	let u, w, x;
	r.forEach(E => {
		E = E.trim(), u = E.lastIndexOf(" "), u === -1 ? (w = E, x = 99999) : (w = E.substr(0, u), x = parseInt(E.substr(u + 1, E.length - u - 2), 10)), d.push([x, w])
	}), d.sort((E, R) => {
		if (E[0] < R[0]) return 1;
		if (E[0] > R[0]) return -1;
		if (E[0] === R[0]) {
			if (R[1].indexOf(".webp", R[1].length - 5) !== -1) return 1;
			if (E[1].indexOf(".webp", E[1].length - 5) !== -1) return -1
		}
		return 0
	});
	let m = "",
		y;
	for (let E = 0; E < d.length; E++) {
		y = d[E], m = y[1];
		const R = d[E + 1];
		if (R && R[0] < p) {
			m = y[1];
			break
		} else if (!R) {
			m = y[1];
			break
		}
	}
	return m
}
const mo = (n = 1) => dt && window.devicePixelRatio || n;

function vo() {
	if (!dt) return !1;
	let n = !0;

	function a(r, d) {
		const c = {
				lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
				lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
				alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
				animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
			},
			p = new Image;
		p.onload = function() {
			const u = p.width > 0 && p.height > 0;
			d(u)
		}, p.onerror = function() {
			d(!1)
		}, p.src = "data:image/webp;base64," + c[r]
	}
	return a("lossy", r => {
		n = r
	}), a("lossless", r => {
		n = r
	}), a("alpha", r => {
		n = r
	}), a("animation", r => {
		n = r
	}), n
}

function go(n, a) {
	let r = null,
		d = 0;
	return function() {
		if (r) return;
		const c = Date.now() - d,
			p = this,
			u = arguments,
			w = function() {
				d = Date.now(), r = !1, n.apply(p, u)
			};
		c >= a ? w() : r = setTimeout(w, a)
	}
}

function bo() {
	if (!dt) return !1;
	let n = !1;
	try {
		const a = Object.defineProperty({}, "passive", {
			get: function() {
				n = !0
			}
		});
		window.addEventListener("test", ei, a)
	} catch {}
	return n
}
const yo = bo(),
	wo = {
		on(n, a, r, d = !1) {
			yo ? n.addEventListener(a, r, {
				capture: d,
				passive: !0
			}) : n.addEventListener(a, r, d)
		},
		off(n, a, r, d = !1) {
			n.removeEventListener(a, r, d)
		}
	},
	qs = (n, a, r) => {
		let d = new Image;
		if (!n || !n.src) {
			const c = new Error("image src is required");
			return r(c)
		}
		n.cors && (d.crossOrigin = n.cors), d.src = n.src, d.onload = function() {
			a({
				naturalHeight: d.naturalHeight,
				naturalWidth: d.naturalWidth,
				src: d.src
			}), d = null
		}, d.onerror = function(c) {
			r(c)
		}
	},
	Is = (n, a) => typeof getComputedStyle < "u" ? getComputedStyle(n, null).getPropertyValue(a) : n.style[a],
	Eo = n => Is(n, "overflow") + Is(n, "overflowY") + Is(n, "overflowX"),
	To = n => {
		if (!dt) return;
		if (!(n instanceof Element)) return window;
		let a = n;
		for (; a && !(a === document.body || a === document.documentElement || !a.parentNode);) {
			if (/(scroll|auto)/.test(Eo(a))) return a;
			a = a.parentNode
		}
		return window
	};

function So(n) {
	return n !== null && typeof n == "object"
}

function ei() {}
class xo {
	constructor(a) {
		this.max = a || 100, this._caches = []
	}
	has(a) {
		return this._caches.indexOf(a) > -1
	}
	add(a) {
		this.has(a) || (this._caches.push(a), this._caches.length > this.max && this.free())
	}
	free() {
		this._caches.shift()
	}
}
class Co {
	constructor(a, r, d, c, p, u, w, x, m, y) {
		this.el = a, this.src = r, this.error = d, this.loading = c, this.bindType = p, this.attempt = 0, this.cors = x, this.naturalHeight = 0, this.naturalWidth = 0, this.options = w, this.rect = {}, this.$parent = u, this.elRenderer = m, this._imageCache = y, this.performanceData = {
			init: Date.now(),
			loadStart: 0,
			loadEnd: 0
		}, this.filter(), this.initState(), this.render("loading", !1)
	}
	initState() {
		"dataset" in this.el ? this.el.dataset.src = this.src : this.el.setAttribute("data-src", this.src), this.state = {
			loading: !1,
			error: !1,
			loaded: !1,
			rendered: !1
		}
	}
	record(a) {
		this.performanceData[a] = Date.now()
	}
	update(a) {
		const r = this.src;
		this.src = a.src, this.loading = a.loading, this.error = a.error, this.filter(), r !== this.src && (this.attempt = 0, this.initState())
	}
	getRect() {
		this.rect = this.el.getBoundingClientRect()
	}
	checkInView() {
		return this.getRect(), this.rect.top < window.innerHeight * this.options.preLoad && this.rect.bottom > this.options.preLoadTop && this.rect.left < window.innerWidth * this.options.preLoad && this.rect.right > 0
	}
	filter() {
		for (const a in this.options.filter) this.options.filter[a](this, this.options)
	}
	renderLoading(a) {
		this.state.loading = !0, qs({
			src: this.loading,
			cors: this.cors
		}, () => {
			this.render("loading", !1), this.state.loading = !1, a()
		}, () => {
			a(), this.state.loading = !1, this.options.silent
		})
	}
	load(a = ei) {
		if (this.attempt > this.options.attempt - 1 && this.state.error) {
			this.options.silent, a();
			return
		}
		if (!(this.state.rendered && this.state.loaded)) {
			if (this._imageCache.has(this.src)) return this.state.loaded = !0, this.render("loaded", !0), this.state.rendered = !0, a();
			this.renderLoading(() => {
				this.attempt++, this.options.adapter.beforeLoad && this.options.adapter.beforeLoad(this, this.options), this.record("loadStart"), qs({
					src: this.src,
					cors: this.cors
				}, r => {
					this.naturalHeight = r.naturalHeight, this.naturalWidth = r.naturalWidth, this.state.loaded = !0, this.state.error = !1, this.record("loadEnd"), this.render("loaded", !1), this.state.rendered = !0, this._imageCache.add(this.src), a()
				}, r => {
					this.options.silent, this.state.error = !0, this.state.loaded = !1, this.render("error", !1)
				})
			})
		}
	}
	render(a, r) {
		this.elRenderer(this, a, r)
	}
	performance() {
		let a = "loading",
			r = 0;
		return this.state.loaded && (a = "loaded", r = (this.performanceData.loadEnd - this.performanceData.loadStart) / 1e3), this.state.error && (a = "error"), {
			src: this.src,
			state: a,
			time: r
		}
	}
	$destroy() {
		this.el = null, this.src = "", this.error = null, this.loading = "", this.bindType = null, this.attempt = 0
	}
}
const $i = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
	Ao = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"],
	Mo = {
		rootMargin: "0px",
		threshold: 0
	};
class Lo {
	constructor({
		preLoad: a,
		error: r,
		throttleWait: d,
		preLoadTop: c,
		dispatchEvent: p,
		loading: u,
		attempt: w,
		silent: x = !0,
		scale: m,
		listenEvents: y,
		filter: E,
		adapter: R,
		observer: U,
		observerOptions: O
	}) {
		this.version = '"3.0.0"', this.lazyContainerMananger = null, this.mode = ct.event, this.ListenerQueue = [], this.TargetIndex = 0, this.TargetQueue = [], this.options = {
			silent: x,
			dispatchEvent: !!p,
			throttleWait: d || 200,
			preLoad: a || 1.3,
			preLoadTop: c || 0,
			error: r || $i,
			loading: u || $i,
			attempt: w || 3,
			scale: m || mo(m),
			listenEvents: y || Ao,
			supportWebp: vo(),
			filter: E || {},
			adapter: R || {},
			observer: !!U,
			observerOptions: O || Mo
		}, this._initEvent(), this._imageCache = new xo(200), this.lazyLoadHandler = go(this._lazyLoadHandler.bind(this), this.options.throttleWait), this.setMode(this.options.observer ? ct.observer : ct.event)
	}
	performance() {
		const a = [];
		return this.ListenerQueue.map(r => a.push(r.performance())), a
	}
	addLazyBox(a) {
		this.ListenerQueue.push(a), dt && (this._addListenerTarget(window), this._observer && this._observer.observe(a.el), a.$el && a.$el.parentNode && this._addListenerTarget(a.$el.parentNode))
	}
	add(a, r, d) {
		if (this.ListenerQueue.some(x => x.el === a)) return this.update(a, r), Jt(this.lazyLoadHandler);
		let {
			src: c,
			loading: p,
			error: u,
			cors: w
		} = this._valueFormatter(r.value);
		Jt(() => {
			c = Ni(a, this.options.scale) || c, this._observer && this._observer.observe(a);
			const x = Object.keys(r.modifiers)[0];
			let m;
			x && (m = r.instance.$refs[x], m = m ? m.el || m : document.getElementById(x)), m || (m = To(a));
			const y = new Co(a, c, u, p, r.arg, m, this.options, w, this._elRenderer.bind(this), this._imageCache);
			this.ListenerQueue.push(y), dt && (this._addListenerTarget(window), this._addListenerTarget(m)), Jt(this.lazyLoadHandler)
		})
	}
	update(a, r, d) {
		let {
			src: c,
			loading: p,
			error: u
		} = this._valueFormatter(r.value);
		c = Ni(a, this.options.scale) || c;
		const w = this.ListenerQueue.find(x => x.el === a);
		w ? w.update({
			src: c,
			loading: p,
			error: u
		}) : (a.getAttribute("lazy") !== "loaded" || a.dataset.src !== c) && this.add(a, r, d), this._observer && (this._observer.unobserve(a), this._observer.observe(a)), Jt(this.lazyLoadHandler)
	}
	remove(a) {
		if (!a) return;
		this._observer && this._observer.unobserve(a);
		const r = this.ListenerQueue.find(d => d.el === a);
		r && (this._removeListenerTarget(r.$parent), this._removeListenerTarget(window), Bt(this.ListenerQueue, r), r.$destroy && r.$destroy())
	}
	removeComponent(a) {
		a && (Bt(this.ListenerQueue, a), this._observer && this._observer.unobserve(a.el), a.$parent && a.$el.parentNode && this._removeListenerTarget(a.$el.parentNode), this._removeListenerTarget(window))
	}
	setMode(a) {
		!zi && a === ct.observer && (a = ct.event), this.mode = a, a === ct.event ? (this._observer && (this.ListenerQueue.forEach(r => {
			this._observer.unobserve(r.el)
		}), this._observer = null), this.TargetQueue.forEach(r => {
			this._initListen(r.el, !0)
		})) : (this.TargetQueue.forEach(r => {
			this._initListen(r.el, !1)
		}), this._initIntersectionObserver())
	}
	_addListenerTarget(a) {
		if (!a) return;
		let r = this.TargetQueue.find(d => d.el === a);
		return r ? r.childrenCount++ : (r = {
			el: a,
			id: ++this.TargetIndex,
			childrenCount: 1,
			listened: !0
		}, this.mode === ct.event && this._initListen(r.el, !0), this.TargetQueue.push(r)), this.TargetIndex
	}
	_removeListenerTarget(a) {
		this.TargetQueue.forEach((r, d) => {
			r.el === a && (r.childrenCount--, r.childrenCount || (this._initListen(r.el, !1), this.TargetQueue.splice(d, 1), r = null))
		})
	}
	_initListen(a, r) {
		this.options.listenEvents.forEach(d => wo[r ? "on" : "off"](a, d, this.lazyLoadHandler))
	}
	_initEvent() {
		this.Event = {
			listeners: {
				loading: [],
				loaded: [],
				error: []
			}
		}, this.$on = (a, r) => {
			this.Event.listeners[a] || (this.Event.listeners[a] = []), this.Event.listeners[a].push(r)
		}, this.$once = (a, r) => {
			const d = this;

			function c() {
				d.$off(a, c), r.apply(d, arguments)
			}
			this.$on(a, c)
		}, this.$off = (a, r) => {
			if (!r) {
				if (!this.Event.listeners[a]) return;
				this.Event.listeners[a].length = 0;
				return
			}
			Bt(this.Event.listeners[a], r)
		}, this.$emit = (a, r, d) => {
			this.Event.listeners[a] && this.Event.listeners[a].forEach(c => c(r, d))
		}
	}
	_lazyLoadHandler() {
		const a = [];
		this.ListenerQueue.forEach((r, d) => {
			(!r.el || !r.el.parentNode || r.state.loaded) && a.push(r), r.checkInView() && (r.state.loaded || r.load())
		}), a.forEach(r => {
			Bt(this.ListenerQueue, r), r.$destroy && r.$destroy()
		})
	}
	_initIntersectionObserver() {
		zi && (this._observer = new IntersectionObserver(this._observerHandler.bind(this), this.options.observerOptions), this.ListenerQueue.length && this.ListenerQueue.forEach(a => {
			this._observer.observe(a.el)
		}))
	}
	_observerHandler(a) {
		a.forEach(r => {
			r.isIntersecting && this.ListenerQueue.forEach(d => {
				if (d.el === r.target) {
					if (d.state.loaded) return this._observer.unobserve(d.el);
					d.load()
				}
			})
		})
	}
	_elRenderer(a, r, d) {
		if (!a.el) return;
		const {
			el: c,
			bindType: p
		} = a;
		let u;
		switch (r) {
			case "loading":
				u = a.loading;
				break;
			case "error":
				u = a.error;
				break;
			default:
				u = a.src;
				break
		}
		if (p ? c.style[p] = 'url("' + u + '")' : c.getAttribute("src") !== u && c.setAttribute("src", u), c.setAttribute("lazy", r), this.$emit(r, a, d), this.options.adapter[r] && this.options.adapter[r](a, this.options), this.options.dispatchEvent) {
			const w = new CustomEvent(r, {
				detail: a
			});
			c.dispatchEvent(w)
		}
	}
	_valueFormatter(a) {
		return So(a) ? (!a.src && this.options.silent, {
			src: a.src,
			loading: a.loading || this.options.loading,
			error: a.error || this.options.error,
			cors: this.options.cors
		}) : {
			src: a,
			loading: this.options.loading,
			error: this.options.error,
			cors: this.options.cors
		}
	}
}
const Ca = (n, a) => {
	let r = ls({});
	const d = () => {
		r = n.value.getBoundingClientRect()
	};
	return {
		rect: r,
		checkInView: () => (d(), dt && r.top < window.innerHeight * a && r.bottom > 0 && r.left < window.innerWidth * a && r.right > 0)
	}
};
var Oo = (n => ji({
	props: {
		tag: {
			type: String,
			default: "div"
		}
	},
	emits: ["show"],
	setup(a, {
		emit: r,
		slots: d
	}) {
		const c = os(),
			p = ls({
				loaded: !1,
				error: !1,
				attempt: 0
			}),
			u = os(!1),
			{
				rect: w,
				checkInView: x
			} = Ca(c, n.options.preLoad),
			m = () => {
				u.value = !0, p.loaded = !0, r("show", u.value)
			},
			y = Ut(() => ({
				el: c.value,
				rect: w,
				checkInView: x,
				load: m,
				state: p
			}));
		return us(() => {
			n.addLazyBox(y.value), n.lazyLoadHandler()
		}), Gi(() => {
			n.removeComponent(y.value)
		}), () => {
			var E;
			return Wi(a.tag, {
				ref: c
			}, [u.value && ((E = d.default) === null || E === void 0 ? void 0 : E.call(d))])
		}
	}
}));
class _o {
	constructor(a) {
		this.lazy = a, a.lazyContainerMananger = this, this._queue = []
	}
	bind(a, r, d) {
		const c = new ko(a, r, d, this.lazy);
		this._queue.push(c)
	}
	update(a, r, d) {
		const c = this._queue.find(p => p.el === a);
		c && c.update(a, r)
	}
	unbind(a, r, d) {
		const c = this._queue.find(p => p.el === a);
		c && (c.clear(), Bt(this._queue, c))
	}
}
const Po = {
	selector: "img",
	error: "",
	loading: ""
};
class ko {
	constructor(a, r, d, c) {
		this.el = a, this.vnode = d, this.binding = r, this.options = {}, this.lazy = c, this._queue = [], this.update(a, r)
	}
	update(a, r) {
		this.el = a, this.options = Di({}, Po, r.value), this.getImgs().forEach(c => {
			this.lazy.add(c, Di({}, this.binding, {
				value: {
					src: c.getAttribute("data-src") || c.dataset.src,
					error: c.getAttribute("data-error") || c.dataset.error || this.options.error,
					loading: c.getAttribute("data-loading") || c.dataset.loading || this.options.loading
				}
			}), this.vnode)
		})
	}
	getImgs() {
		return Array.from(this.el.querySelectorAll(this.options.selector))
	}
	clear() {
		this.getImgs().forEach(r => this.lazy.remove(r)), this.vnode = null, this.binding = null, this.lazy = null
	}
}
var Io = (n => ji({
		setup(a, {
			slots: r
		}) {
			const d = os(),
				c = ls({
					src: "",
					error: "",
					loading: "",
					attempt: n.options.attempt
				}),
				p = ls({
					loaded: !1,
					error: !1,
					attempt: 0
				}),
				{
					rect: u,
					checkInView: w
				} = Ca(d, n.options.preLoad),
				x = os(""),
				m = (R = ei) => {
					if (p.attempt > c.attempt - 1 && p.error) return n.options.silent, R();
					const U = c.src;
					qs({
						src: U
					}, ({
						src: O
					}) => {
						x.value = O, p.loaded = !0
					}, () => {
						p.attempt++, x.value = c.error, p.error = !0
					})
				},
				y = Ut(() => ({
					el: d.value,
					rect: u,
					checkInView: w,
					load: m,
					state: p
				}));
			us(() => {
				n.addLazyBox(y.value), n.lazyLoadHandler()
			}), Gi(() => {
				n.removeComponent(y.value)
			});
			const E = () => {
				const {
					src: R,
					loading: U,
					error: O
				} = n._valueFormatter(a.src);
				p.loaded = !1, c.src = R, c.error = O, c.loading = U, x.value = c.loading
			};
			return Na(() => a.src, () => {
				E(), n.addLazyBox(y.value), n.lazyLoadHandler()
			}, {
				immediate: !0
			}), () => {
				var R;
				return Wi(a.tag || "img", {
					src: x.value,
					ref: d
				}, [(R = r.default) === null || R === void 0 ? void 0 : R.call(r)])
			}
		}
	})),
	ul = {
		install(n, a = {}) {
			const r = new Lo(a),
				d = new _o(r);
			if (Number(n.version.split(".")[0]) < 3) return new Error("Vue version at least 3.0");
			n.config.globalProperties.$Lazyload = r, n.provide("Lazyload", r), a.lazyComponent && n.component("lazy-component", Oo(r)), a.lazyImage && n.component("lazy-image", Io(r)), n.directive("lazy", {
				beforeMount: r.add.bind(r),
				beforeUpdate: r.update.bind(r),
				updated: r.lazyLoadHandler.bind(r),
				unmounted: r.remove.bind(r)
			}), n.directive("lazy-container", {
				beforeMount: d.bind.bind(d),
				updated: d.update.bind(d),
				unmounted: d.unbind.bind(d)
			})
		}
	},
	rs = {
		exports: {}
	},
	Ro = rs.exports,
	Bi;

function Do() {
	return Bi || (Bi = 1, (function(n, a) {
		(function(r, d) {
			n.exports = d()
		})(Ro, function() {
			return (function(r) {
				function d(p) {
					if (c[p]) return c[p].exports;
					var u = c[p] = {
						exports: {},
						id: p,
						loaded: !1
					};
					return r[p].call(u.exports, u, u.exports, d), u.loaded = !0, u.exports
				}
				var c = {};
				return d.m = r, d.c = c, d.p = "dist/", d(0)
			})([function(r, d, c) {
				function p(V) {
					return V && V.__esModule ? V : {
						default: V
					}
				}
				var u = Object.assign || function(V) {
						for (var Te = 1; Te < arguments.length; Te++) {
							var _e = arguments[Te];
							for (var Re in _e) Object.prototype.hasOwnProperty.call(_e, Re) && (V[Re] = _e[Re])
						}
						return V
					},
					w = c(1),
					x = (p(w), c(6)),
					m = p(x),
					y = c(7),
					E = p(y),
					R = c(8),
					U = p(R),
					O = c(9),
					W = p(O),
					N = c(10),
					ie = p(N),
					ce = c(11),
					re = p(ce),
					Y = c(14),
					j = p(Y),
					le = [],
					Ee = !1,
					ae = {
						offset: 120,
						delay: 0,
						easing: "ease",
						duration: 400,
						disable: !1,
						once: !1,
						startEvent: "DOMContentLoaded",
						throttleDelay: 99,
						debounceDelay: 50,
						disableMutationObserver: !1
					},
					me = function() {
						var V = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
						if (V && (Ee = !0), Ee) return le = (0, re.default)(le, ae), (0, ie.default)(le, ae.once), le
					},
					Le = function() {
						le = (0, j.default)(), me()
					},
					B = function() {
						le.forEach(function(V, Te) {
							V.node.removeAttribute("data-aos"), V.node.removeAttribute("data-aos-easing"), V.node.removeAttribute("data-aos-duration"), V.node.removeAttribute("data-aos-delay")
						})
					},
					F = function(V) {
						return V === !0 || V === "mobile" && W.default.mobile() || V === "phone" && W.default.phone() || V === "tablet" && W.default.tablet() || typeof V == "function" && V() === !0
					},
					ee = function(V) {
						ae = u(ae, V), le = (0, j.default)();
						var Te = document.all && !window.atob;
						return F(ae.disable) || Te ? B() : (ae.disableMutationObserver || U.default.isSupported() || (ae.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", ae.easing), document.querySelector("body").setAttribute("data-aos-duration", ae.duration), document.querySelector("body").setAttribute("data-aos-delay", ae.delay), ae.startEvent === "DOMContentLoaded" && ["complete", "interactive"].indexOf(document.readyState) > -1 ? me(!0) : ae.startEvent === "load" ? window.addEventListener(ae.startEvent, function() {
							me(!0)
						}) : document.addEventListener(ae.startEvent, function() {
							me(!0)
						}), window.addEventListener("resize", (0, E.default)(me, ae.debounceDelay, !0)), window.addEventListener("orientationchange", (0, E.default)(me, ae.debounceDelay, !0)), window.addEventListener("scroll", (0, m.default)(function() {
							(0, ie.default)(le, ae.once)
						}, ae.throttleDelay)), ae.disableMutationObserver || U.default.ready("[data-aos]", Le), le)
					};
				r.exports = {
					init: ee,
					refresh: me,
					refreshHard: Le
				}
			}, function(r, d) {}, , , , , function(r, d) {
				(function(c) {
					function p(F, ee, V) {
						function Te(Q) {
							var Ce = Pe,
								Be = ne;
							return Pe = ne = void 0, De = Q, ye = F.apply(Be, Ce)
						}

						function _e(Q) {
							return De = Q, ve = setTimeout(fe, ee), we ? Te(Q) : ye
						}

						function Re(Q) {
							var Ce = Q - Se,
								Be = Q - De,
								Fe = ee - Ce;
							return Oe ? Le(Fe, Ae - Be) : Fe
						}

						function Ye(Q) {
							var Ce = Q - Se,
								Be = Q - De;
							return Se === void 0 || Ce >= ee || Ce < 0 || Oe && Be >= Ae
						}

						function fe() {
							var Q = B();
							return Ye(Q) ? it(Q) : void(ve = setTimeout(fe, Re(Q)))
						}

						function it(Q) {
							return ve = void 0, ue && Pe ? Te(Q) : (Pe = ne = void 0, ye)
						}

						function be() {
							ve !== void 0 && clearTimeout(ve), De = 0, Pe = Se = ne = ve = void 0
						}

						function tt() {
							return ve === void 0 ? ye : it(B())
						}

						function de() {
							var Q = B(),
								Ce = Ye(Q);
							if (Pe = arguments, ne = this, Se = Q, Ce) {
								if (ve === void 0) return _e(Se);
								if (Oe) return ve = setTimeout(fe, ee), Te(Se)
							}
							return ve === void 0 && (ve = setTimeout(fe, ee)), ye
						}
						var Pe, ne, Ae, ye, ve, Se, De = 0,
							we = !1,
							Oe = !1,
							ue = !0;
						if (typeof F != "function") throw new TypeError(R);
						return ee = y(ee) || 0, w(V) && (we = !!V.leading, Oe = "maxWait" in V, Ae = Oe ? me(y(V.maxWait) || 0, ee) : Ae, ue = "trailing" in V ? !!V.trailing : ue), de.cancel = be, de.flush = tt, de
					}

					function u(F, ee, V) {
						var Te = !0,
							_e = !0;
						if (typeof F != "function") throw new TypeError(R);
						return w(V) && (Te = "leading" in V ? !!V.leading : Te, _e = "trailing" in V ? !!V.trailing : _e), p(F, ee, {
							leading: Te,
							maxWait: ee,
							trailing: _e
						})
					}

					function w(F) {
						var ee = typeof F > "u" ? "undefined" : E(F);
						return !!F && (ee == "object" || ee == "function")
					}

					function x(F) {
						return !!F && (typeof F > "u" ? "undefined" : E(F)) == "object"
					}

					function m(F) {
						return (typeof F > "u" ? "undefined" : E(F)) == "symbol" || x(F) && ae.call(F) == O
					}

					function y(F) {
						if (typeof F == "number") return F;
						if (m(F)) return U;
						if (w(F)) {
							var ee = typeof F.valueOf == "function" ? F.valueOf() : F;
							F = w(ee) ? ee + "" : ee
						}
						if (typeof F != "string") return F === 0 ? F : +F;
						F = F.replace(W, "");
						var V = ie.test(F);
						return V || ce.test(F) ? re(F.slice(2), V ? 2 : 8) : N.test(F) ? U : +F
					}
					var E = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(F) {
							return typeof F
						} : function(F) {
							return F && typeof Symbol == "function" && F.constructor === Symbol && F !== Symbol.prototype ? "symbol" : typeof F
						},
						R = "Expected a function",
						U = NaN,
						O = "[object Symbol]",
						W = /^\s+|\s+$/g,
						N = /^[-+]0x[0-9a-f]+$/i,
						ie = /^0b[01]+$/i,
						ce = /^0o[0-7]+$/i,
						re = parseInt,
						Y = (typeof c > "u" ? "undefined" : E(c)) == "object" && c && c.Object === Object && c,
						j = (typeof self > "u" ? "undefined" : E(self)) == "object" && self && self.Object === Object && self,
						le = Y || j || Function("return this")(),
						Ee = Object.prototype,
						ae = Ee.toString,
						me = Math.max,
						Le = Math.min,
						B = function() {
							return le.Date.now()
						};
					r.exports = u
				}).call(d, (function() {
					return this
				})())
			}, function(r, d) {
				(function(c) {
					function p(B, F, ee) {
						function V(ue) {
							var Q = de,
								Ce = Pe;
							return de = Pe = void 0, Se = ue, Ae = B.apply(Ce, Q)
						}

						function Te(ue) {
							return Se = ue, ye = setTimeout(Ye, F), De ? V(ue) : Ae
						}

						function _e(ue) {
							var Q = ue - ve,
								Ce = ue - Se,
								Be = F - Q;
							return we ? me(Be, ne - Ce) : Be
						}

						function Re(ue) {
							var Q = ue - ve,
								Ce = ue - Se;
							return ve === void 0 || Q >= F || Q < 0 || we && Ce >= ne
						}

						function Ye() {
							var ue = Le();
							return Re(ue) ? fe(ue) : void(ye = setTimeout(Ye, _e(ue)))
						}

						function fe(ue) {
							return ye = void 0, Oe && de ? V(ue) : (de = Pe = void 0, Ae)
						}

						function it() {
							ye !== void 0 && clearTimeout(ye), Se = 0, de = ve = Pe = ye = void 0
						}

						function be() {
							return ye === void 0 ? Ae : fe(Le())
						}

						function tt() {
							var ue = Le(),
								Q = Re(ue);
							if (de = arguments, Pe = this, ve = ue, Q) {
								if (ye === void 0) return Te(ve);
								if (we) return ye = setTimeout(Ye, F), V(ve)
							}
							return ye === void 0 && (ye = setTimeout(Ye, F)), Ae
						}
						var de, Pe, ne, Ae, ye, ve, Se = 0,
							De = !1,
							we = !1,
							Oe = !0;
						if (typeof B != "function") throw new TypeError(E);
						return F = m(F) || 0, u(ee) && (De = !!ee.leading, we = "maxWait" in ee, ne = we ? ae(m(ee.maxWait) || 0, F) : ne, Oe = "trailing" in ee ? !!ee.trailing : Oe), tt.cancel = it, tt.flush = be, tt
					}

					function u(B) {
						var F = typeof B > "u" ? "undefined" : y(B);
						return !!B && (F == "object" || F == "function")
					}

					function w(B) {
						return !!B && (typeof B > "u" ? "undefined" : y(B)) == "object"
					}

					function x(B) {
						return (typeof B > "u" ? "undefined" : y(B)) == "symbol" || w(B) && Ee.call(B) == U
					}

					function m(B) {
						if (typeof B == "number") return B;
						if (x(B)) return R;
						if (u(B)) {
							var F = typeof B.valueOf == "function" ? B.valueOf() : B;
							B = u(F) ? F + "" : F
						}
						if (typeof B != "string") return B === 0 ? B : +B;
						B = B.replace(O, "");
						var ee = N.test(B);
						return ee || ie.test(B) ? ce(B.slice(2), ee ? 2 : 8) : W.test(B) ? R : +B
					}
					var y = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(B) {
							return typeof B
						} : function(B) {
							return B && typeof Symbol == "function" && B.constructor === Symbol && B !== Symbol.prototype ? "symbol" : typeof B
						},
						E = "Expected a function",
						R = NaN,
						U = "[object Symbol]",
						O = /^\s+|\s+$/g,
						W = /^[-+]0x[0-9a-f]+$/i,
						N = /^0b[01]+$/i,
						ie = /^0o[0-7]+$/i,
						ce = parseInt,
						re = (typeof c > "u" ? "undefined" : y(c)) == "object" && c && c.Object === Object && c,
						Y = (typeof self > "u" ? "undefined" : y(self)) == "object" && self && self.Object === Object && self,
						j = re || Y || Function("return this")(),
						le = Object.prototype,
						Ee = le.toString,
						ae = Math.max,
						me = Math.min,
						Le = function() {
							return j.Date.now()
						};
					r.exports = p
				}).call(d, (function() {
					return this
				})())
			}, function(r, d) {
				function c(y) {
					var E = void 0,
						R = void 0;
					for (E = 0; E < y.length; E += 1)
						if (R = y[E], R.dataset && R.dataset.aos || R.children && c(R.children)) return !0;
					return !1
				}

				function p() {
					return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
				}

				function u() {
					return !!p()
				}

				function w(y, E) {
					var R = window.document,
						U = p(),
						O = new U(x);
					m = E, O.observe(R.documentElement, {
						childList: !0,
						subtree: !0,
						removedNodes: !0
					})
				}

				function x(y) {
					y && y.forEach(function(E) {
						var R = Array.prototype.slice.call(E.addedNodes),
							U = Array.prototype.slice.call(E.removedNodes),
							O = R.concat(U);
						if (c(O)) return m()
					})
				}
				Object.defineProperty(d, "__esModule", {
					value: !0
				});
				var m = function() {};
				d.default = {
					isSupported: u,
					ready: w
				}
			}, function(r, d) {
				function c(R, U) {
					if (!(R instanceof U)) throw new TypeError("Cannot call a class as a function")
				}

				function p() {
					return navigator.userAgent || navigator.vendor || window.opera || ""
				}
				Object.defineProperty(d, "__esModule", {
					value: !0
				});
				var u = (function() {
						function R(U, O) {
							for (var W = 0; W < O.length; W++) {
								var N = O[W];
								N.enumerable = N.enumerable || !1, N.configurable = !0, "value" in N && (N.writable = !0), Object.defineProperty(U, N.key, N)
							}
						}
						return function(U, O, W) {
							return O && R(U.prototype, O), W && R(U, W), U
						}
					})(),
					w = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
					x = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
					m = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
					y = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
					E = (function() {
						function R() {
							c(this, R)
						}
						return u(R, [{
							key: "phone",
							value: function() {
								var U = p();
								return !(!w.test(U) && !x.test(U.substr(0, 4)))
							}
						}, {
							key: "mobile",
							value: function() {
								var U = p();
								return !(!m.test(U) && !y.test(U.substr(0, 4)))
							}
						}, {
							key: "tablet",
							value: function() {
								return this.mobile() && !this.phone()
							}
						}]), R
					})();
				d.default = new E
			}, function(r, d) {
				Object.defineProperty(d, "__esModule", {
					value: !0
				});
				var c = function(u, w, x) {
						var m = u.node.getAttribute("data-aos-once");
						w > u.position ? u.node.classList.add("aos-animate") : typeof m < "u" && (m === "false" || !x && m !== "true") && u.node.classList.remove("aos-animate")
					},
					p = function(u, w) {
						var x = window.pageYOffset,
							m = window.innerHeight;
						u.forEach(function(y, E) {
							c(y, m + x, w)
						})
					};
				d.default = p
			}, function(r, d, c) {
				function p(m) {
					return m && m.__esModule ? m : {
						default: m
					}
				}
				Object.defineProperty(d, "__esModule", {
					value: !0
				});
				var u = c(12),
					w = p(u),
					x = function(m, y) {
						return m.forEach(function(E, R) {
							E.node.classList.add("aos-init"), E.position = (0, w.default)(E.node, y.offset)
						}), m
					};
				d.default = x
			}, function(r, d, c) {
				function p(m) {
					return m && m.__esModule ? m : {
						default: m
					}
				}
				Object.defineProperty(d, "__esModule", {
					value: !0
				});
				var u = c(13),
					w = p(u),
					x = function(m, y) {
						var E = 0,
							R = 0,
							U = window.innerHeight,
							O = {
								offset: m.getAttribute("data-aos-offset"),
								anchor: m.getAttribute("data-aos-anchor"),
								anchorPlacement: m.getAttribute("data-aos-anchor-placement")
							};
						switch (O.offset && !isNaN(O.offset) && (R = parseInt(O.offset)), O.anchor && document.querySelectorAll(O.anchor) && (m = document.querySelectorAll(O.anchor)[0]), E = (0, w.default)(m).top, O.anchorPlacement) {
							case "top-bottom":
								break;
							case "center-bottom":
								E += m.offsetHeight / 2;
								break;
							case "bottom-bottom":
								E += m.offsetHeight;
								break;
							case "top-center":
								E += U / 2;
								break;
							case "bottom-center":
								E += U / 2 + m.offsetHeight;
								break;
							case "center-center":
								E += U / 2 + m.offsetHeight / 2;
								break;
							case "top-top":
								E += U;
								break;
							case "bottom-top":
								E += m.offsetHeight + U;
								break;
							case "center-top":
								E += m.offsetHeight / 2 + U
						}
						return O.anchorPlacement || O.offset || isNaN(y) || (R = y), E + R
					};
				d.default = x
			}, function(r, d) {
				Object.defineProperty(d, "__esModule", {
					value: !0
				});
				var c = function(p) {
					for (var u = 0, w = 0; p && !isNaN(p.offsetLeft) && !isNaN(p.offsetTop);) u += p.offsetLeft - (p.tagName != "BODY" ? p.scrollLeft : 0), w += p.offsetTop - (p.tagName != "BODY" ? p.scrollTop : 0), p = p.offsetParent;
					return {
						top: w,
						left: u
					}
				};
				d.default = c
			}, function(r, d) {
				Object.defineProperty(d, "__esModule", {
					value: !0
				});
				var c = function(p) {
					return p = p || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(p, function(u) {
						return {
							node: u
						}
					})
				};
				d.default = c
			}])
		})
	})(rs)), rs.exports
}
var zo = Do();
const hl = $a(zo),
	No = {
		beforeMount(n, a) {
			const r = d => {
				n.contains(d.target) || a.value && a.value(d)
			};
			n.__vueClickOutside__ = r, document.addEventListener("click", r)
		},
		unmounted(n) {
			document.removeEventListener("click", n.__vueClickOutside__), delete n.__vueClickOutside__
		}
	},
	$o = n => {
		n.directive("clickoutside", No)
	},
	pl = {
		install: $o
	};
(function(n, a) {
	typeof exports == "object" && typeof module < "u" ? module.exports = a() : typeof define == "function" && define.amd ? define(a) : (n = n || self).Swiper = a()
})(void 0, (function() {
	function n(e) {
		return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object
	}

	function a(e, t) {
		e === void 0 && (e = {}), t === void 0 && (t = {}), Object.keys(t).forEach((function(s) {
			e[s] === void 0 ? e[s] = t[s] : n(t[s]) && n(e[s]) && Object.keys(t[s]).length > 0 && a(e[s], t[s])
		}))
	}
	var r = typeof document < "u" ? document : {},
		d = {
			body: {},
			addEventListener: function() {},
			removeEventListener: function() {},
			activeElement: {
				blur: function() {},
				nodeName: ""
			},
			querySelector: function() {
				return null
			},
			querySelectorAll: function() {
				return []
			},
			getElementById: function() {
				return null
			},
			createEvent: function() {
				return {
					initEvent: function() {}
				}
			},
			createElement: function() {
				return {
					children: [],
					childNodes: [],
					style: {},
					setAttribute: function() {},
					getElementsByTagName: function() {
						return []
					}
				}
			},
			createElementNS: function() {
				return {}
			},
			importNode: function() {
				return null
			},
			location: {
				hash: "",
				host: "",
				hostname: "",
				href: "",
				origin: "",
				pathname: "",
				protocol: "",
				search: ""
			}
		};
	a(r, d);
	var c = typeof window < "u" ? window : {};
	a(c, {
		document: d,
		navigator: {
			userAgent: ""
		},
		location: {
			hash: "",
			host: "",
			hostname: "",
			href: "",
			origin: "",
			pathname: "",
			protocol: "",
			search: ""
		},
		history: {
			replaceState: function() {},
			pushState: function() {},
			go: function() {},
			back: function() {}
		},
		CustomEvent: function() {
			return this
		},
		addEventListener: function() {},
		removeEventListener: function() {},
		getComputedStyle: function() {
			return {
				getPropertyValue: function() {
					return ""
				}
			}
		},
		Image: function() {},
		Date: function() {},
		screen: {},
		setTimeout: function() {},
		clearTimeout: function() {},
		matchMedia: function() {
			return {}
		}
	});
	var p = function(e) {
		for (var t = 0; t < e.length; t += 1) this[t] = e[t];
		return this.length = e.length, this
	};

	function u(e, t) {
		var s = [],
			i = 0;
		if (e && !t && e instanceof p) return e;
		if (e) {
			if (typeof e == "string") {
				var l, o, h = e.trim();
				if (h.indexOf("<") >= 0 && h.indexOf(">") >= 0) {
					var v = "div";
					for (h.indexOf("<li") === 0 && (v = "ul"), h.indexOf("<tr") === 0 && (v = "tbody"), h.indexOf("<td") !== 0 && h.indexOf("<th") !== 0 || (v = "tr"), h.indexOf("<tbody") === 0 && (v = "table"), h.indexOf("<option") === 0 && (v = "select"), (o = r.createElement(v)).innerHTML = h, i = 0; i < o.childNodes.length; i += 1) s.push(o.childNodes[i])
				} else
					for (l = t || e[0] !== "#" || e.match(/[ .<>:~]/) ? (t || r).querySelectorAll(e.trim()) : [r.getElementById(e.trim().split("#")[1])], i = 0; i < l.length; i += 1) l[i] && s.push(l[i])
			} else if (e.nodeType || e === c || e === r) s.push(e);
			else if (e.length > 0 && e[0].nodeType)
				for (i = 0; i < e.length; i += 1) s.push(e[i])
		}
		return new p(s)
	}

	function w(e) {
		for (var t = [], s = 0; s < e.length; s += 1) t.indexOf(e[s]) === -1 && t.push(e[s]);
		return t
	}
	u.fn = p.prototype, u.Class = p, u.Dom7 = p;
	var x = {
		addClass: function(e) {
			if (e === void 0) return this;
			for (var t = e.split(" "), s = 0; s < t.length; s += 1)
				for (var i = 0; i < this.length; i += 1) this[i] !== void 0 && this[i].classList !== void 0 && this[i].classList.add(t[s]);
			return this
		},
		removeClass: function(e) {
			for (var t = e.split(" "), s = 0; s < t.length; s += 1)
				for (var i = 0; i < this.length; i += 1) this[i] !== void 0 && this[i].classList !== void 0 && this[i].classList.remove(t[s]);
			return this
		},
		hasClass: function(e) {
			return !!this[0] && this[0].classList.contains(e)
		},
		toggleClass: function(e) {
			for (var t = e.split(" "), s = 0; s < t.length; s += 1)
				for (var i = 0; i < this.length; i += 1) this[i] !== void 0 && this[i].classList !== void 0 && this[i].classList.toggle(t[s]);
			return this
		},
		attr: function(e, t) {
			var s = arguments;
			if (arguments.length === 1 && typeof e == "string") return this[0] ? this[0].getAttribute(e) : void 0;
			for (var i = 0; i < this.length; i += 1)
				if (s.length === 2) this[i].setAttribute(e, t);
				else
					for (var l in e) this[i][l] = e[l], this[i].setAttribute(l, e[l]);
			return this
		},
		removeAttr: function(e) {
			for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
			return this
		},
		data: function(e, t) {
			var s;
			if (t !== void 0) {
				for (var i = 0; i < this.length; i += 1)(s = this[i]).dom7ElementDataStorage || (s.dom7ElementDataStorage = {}), s.dom7ElementDataStorage[e] = t;
				return this
			}
			if (s = this[0]) {
				if (s.dom7ElementDataStorage && e in s.dom7ElementDataStorage) return s.dom7ElementDataStorage[e];
				var l = s.getAttribute("data-" + e);
				return l || void 0
			}
		},
		transform: function(e) {
			for (var t = 0; t < this.length; t += 1) {
				var s = this[t].style;
				s.webkitTransform = e, s.transform = e
			}
			return this
		},
		transition: function(e) {
			typeof e != "string" && (e += "ms");
			for (var t = 0; t < this.length; t += 1) {
				var s = this[t].style;
				s.webkitTransitionDuration = e, s.transitionDuration = e
			}
			return this
		},
		on: function() {
			for (var e, t = [], s = arguments.length; s--;) t[s] = arguments[s];
			var i = t[0],
				l = t[1],
				o = t[2],
				h = t[3];

			function v($) {
				var H = $.target;
				if (H) {
					var I = $.target.dom7EventData || [];
					if (I.indexOf($) < 0 && I.unshift($), u(H).is(l)) o.apply(H, I);
					else
						for (var z = u(H).parents(), _ = 0; _ < z.length; _ += 1) u(z[_]).is(l) && o.apply(z[_], I)
				}
			}

			function f($) {
				var H = $ && $.target && $.target.dom7EventData || [];
				H.indexOf($) < 0 && H.unshift($), o.apply(this, H)
			}
			typeof t[1] == "function" && (i = (e = t)[0], o = e[1], h = e[2], l = void 0), h || (h = !1);
			for (var g, S = i.split(" "), A = 0; A < this.length; A += 1) {
				var C = this[A];
				if (l)
					for (g = 0; g < S.length; g += 1) {
						var M = S[g];
						C.dom7LiveListeners || (C.dom7LiveListeners = {}), C.dom7LiveListeners[M] || (C.dom7LiveListeners[M] = []), C.dom7LiveListeners[M].push({
							listener: o,
							proxyListener: v
						}), C.addEventListener(M, v, h)
					} else
						for (g = 0; g < S.length; g += 1) {
							var k = S[g];
							C.dom7Listeners || (C.dom7Listeners = {}), C.dom7Listeners[k] || (C.dom7Listeners[k] = []), C.dom7Listeners[k].push({
								listener: o,
								proxyListener: f
							}), C.addEventListener(k, f, h)
						}
			}
			return this
		},
		off: function() {
			for (var e, t = [], s = arguments.length; s--;) t[s] = arguments[s];
			var i = t[0],
				l = t[1],
				o = t[2],
				h = t[3];
			typeof t[1] == "function" && (i = (e = t)[0], o = e[1], h = e[2], l = void 0), h || (h = !1);
			for (var v = i.split(" "), f = 0; f < v.length; f += 1)
				for (var g = v[f], S = 0; S < this.length; S += 1) {
					var A = this[S],
						C = void 0;
					if (!l && A.dom7Listeners ? C = A.dom7Listeners[g] : l && A.dom7LiveListeners && (C = A.dom7LiveListeners[g]), C && C.length)
						for (var M = C.length - 1; M >= 0; M -= 1) {
							var k = C[M];
							o && k.listener === o || o && k.listener && k.listener.dom7proxy && k.listener.dom7proxy === o ? (A.removeEventListener(g, k.proxyListener, h), C.splice(M, 1)) : o || (A.removeEventListener(g, k.proxyListener, h), C.splice(M, 1))
						}
				}
			return this
		},
		trigger: function() {
			for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
			for (var s = e[0].split(" "), i = e[1], l = 0; l < s.length; l += 1)
				for (var o = s[l], h = 0; h < this.length; h += 1) {
					var v = this[h],
						f = void 0;
					try {
						f = new c.CustomEvent(o, {
							detail: i,
							bubbles: !0,
							cancelable: !0
						})
					} catch {
						(f = r.createEvent("Event")).initEvent(o, !0, !0), f.detail = i
					}
					v.dom7EventData = e.filter((function(g, S) {
						return S > 0
					})), v.dispatchEvent(f), v.dom7EventData = [], delete v.dom7EventData
				}
			return this
		},
		transitionEnd: function(e) {
			var t, s = ["webkitTransitionEnd", "transitionend"],
				i = this;

			function l(o) {
				if (o.target === this)
					for (e.call(this, o), t = 0; t < s.length; t += 1) i.off(s[t], l)
			}
			if (e)
				for (t = 0; t < s.length; t += 1) i.on(s[t], l);
			return this
		},
		outerWidth: function(e) {
			if (this.length > 0) {
				if (e) {
					var t = this.styles();
					return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
				}
				return this[0].offsetWidth
			}
			return null
		},
		outerHeight: function(e) {
			if (this.length > 0) {
				if (e) {
					var t = this.styles();
					return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
				}
				return this[0].offsetHeight
			}
			return null
		},
		offset: function() {
			if (this.length > 0) {
				var e = this[0],
					t = e.getBoundingClientRect(),
					s = r.body,
					i = e.clientTop || s.clientTop || 0,
					l = e.clientLeft || s.clientLeft || 0,
					o = e === c ? c.scrollY : e.scrollTop,
					h = e === c ? c.scrollX : e.scrollLeft;
				return {
					top: t.top + o - i,
					left: t.left + h - l
				}
			}
			return null
		},
		css: function(e, t) {
			var s;
			if (arguments.length === 1) {
				if (typeof e != "string") {
					for (s = 0; s < this.length; s += 1)
						for (var i in e) this[s].style[i] = e[i];
					return this
				}
				if (this[0]) return c.getComputedStyle(this[0], null).getPropertyValue(e)
			}
			if (arguments.length === 2 && typeof e == "string") {
				for (s = 0; s < this.length; s += 1) this[s].style[e] = t;
				return this
			}
			return this
		},
		each: function(e) {
			if (!e) return this;
			for (var t = 0; t < this.length; t += 1)
				if (e.call(this[t], t, this[t]) === !1) return this;
			return this
		},
		html: function(e) {
			if (e === void 0) return this[0] ? this[0].innerHTML : void 0;
			for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
			return this
		},
		text: function(e) {
			if (e === void 0) return this[0] ? this[0].textContent.trim() : null;
			for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
			return this
		},
		is: function(e) {
			var t, s, i = this[0];
			if (!i || e === void 0) return !1;
			if (typeof e == "string") {
				if (i.matches) return i.matches(e);
				if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
				if (i.msMatchesSelector) return i.msMatchesSelector(e);
				for (t = u(e), s = 0; s < t.length; s += 1)
					if (t[s] === i) return !0;
				return !1
			}
			if (e === r) return i === r;
			if (e === c) return i === c;
			if (e.nodeType || e instanceof p) {
				for (t = e.nodeType ? [e] : e, s = 0; s < t.length; s += 1)
					if (t[s] === i) return !0;
				return !1
			}
			return !1
		},
		index: function() {
			var e, t = this[0];
			if (t) {
				for (e = 0;
					(t = t.previousSibling) !== null;) t.nodeType === 1 && (e += 1);
				return e
			}
		},
		eq: function(e) {
			if (e === void 0) return this;
			var t, s = this.length;
			return new p(e > s - 1 ? [] : e < 0 ? (t = s + e) < 0 ? [] : [this[t]] : [this[e]])
		},
		append: function() {
			for (var e, t = [], s = arguments.length; s--;) t[s] = arguments[s];
			for (var i = 0; i < t.length; i += 1) {
				e = t[i];
				for (var l = 0; l < this.length; l += 1)
					if (typeof e == "string") {
						var o = r.createElement("div");
						for (o.innerHTML = e; o.firstChild;) this[l].appendChild(o.firstChild)
					} else if (e instanceof p)
					for (var h = 0; h < e.length; h += 1) this[l].appendChild(e[h]);
				else this[l].appendChild(e)
			}
			return this
		},
		prepend: function(e) {
			var t, s;
			for (t = 0; t < this.length; t += 1)
				if (typeof e == "string") {
					var i = r.createElement("div");
					for (i.innerHTML = e, s = i.childNodes.length - 1; s >= 0; s -= 1) this[t].insertBefore(i.childNodes[s], this[t].childNodes[0])
				} else if (e instanceof p)
				for (s = 0; s < e.length; s += 1) this[t].insertBefore(e[s], this[t].childNodes[0]);
			else this[t].insertBefore(e, this[t].childNodes[0]);
			return this
		},
		next: function(e) {
			return this.length > 0 ? e ? this[0].nextElementSibling && u(this[0].nextElementSibling).is(e) ? new p([this[0].nextElementSibling]) : new p([]) : this[0].nextElementSibling ? new p([this[0].nextElementSibling]) : new p([]) : new p([])
		},
		nextAll: function(e) {
			var t = [],
				s = this[0];
			if (!s) return new p([]);
			for (; s.nextElementSibling;) {
				var i = s.nextElementSibling;
				e ? u(i).is(e) && t.push(i) : t.push(i), s = i
			}
			return new p(t)
		},
		prev: function(e) {
			if (this.length > 0) {
				var t = this[0];
				return e ? t.previousElementSibling && u(t.previousElementSibling).is(e) ? new p([t.previousElementSibling]) : new p([]) : t.previousElementSibling ? new p([t.previousElementSibling]) : new p([])
			}
			return new p([])
		},
		prevAll: function(e) {
			var t = [],
				s = this[0];
			if (!s) return new p([]);
			for (; s.previousElementSibling;) {
				var i = s.previousElementSibling;
				e ? u(i).is(e) && t.push(i) : t.push(i), s = i
			}
			return new p(t)
		},
		parent: function(e) {
			for (var t = [], s = 0; s < this.length; s += 1) this[s].parentNode !== null && (e ? u(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
			return u(w(t))
		},
		parents: function(e) {
			for (var t = [], s = 0; s < this.length; s += 1)
				for (var i = this[s].parentNode; i;) e ? u(i).is(e) && t.push(i) : t.push(i), i = i.parentNode;
			return u(w(t))
		},
		closest: function(e) {
			var t = this;
			return e === void 0 ? new p([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
		},
		find: function(e) {
			for (var t = [], s = 0; s < this.length; s += 1)
				for (var i = this[s].querySelectorAll(e), l = 0; l < i.length; l += 1) t.push(i[l]);
			return new p(t)
		},
		children: function(e) {
			for (var t = [], s = 0; s < this.length; s += 1)
				for (var i = this[s].childNodes, l = 0; l < i.length; l += 1) e ? i[l].nodeType === 1 && u(i[l]).is(e) && t.push(i[l]) : i[l].nodeType === 1 && t.push(i[l]);
			return new p(w(t))
		},
		filter: function(e) {
			for (var t = [], s = 0; s < this.length; s += 1) e.call(this[s], s, this[s]) && t.push(this[s]);
			return new p(t)
		},
		remove: function() {
			for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
			return this
		},
		add: function() {
			for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
			var s, i, l = this;
			for (s = 0; s < e.length; s += 1) {
				var o = u(e[s]);
				for (i = 0; i < o.length; i += 1) l[l.length] = o[i], l.length += 1
			}
			return l
		},
		styles: function() {
			return this[0] ? c.getComputedStyle(this[0], null) : {}
		}
	};
	Object.keys(x).forEach((function(e) {
		u.fn[e] = u.fn[e] || x[e]
	}));
	var m = {
			deleteProps: function(e) {
				var t = e;
				Object.keys(t).forEach((function(s) {
					try {
						t[s] = null
					} catch {}
					try {
						delete t[s]
					} catch {}
				}))
			},
			nextTick: function(e, t) {
				return t === void 0 && (t = 0), setTimeout(e, t)
			},
			now: function() {
				return Date.now()
			},
			getTranslate: function(e, t) {
				var s, i, l;
				t === void 0 && (t = "x");
				var o = c.getComputedStyle(e, null);
				return c.WebKitCSSMatrix ? ((i = o.transform || o.webkitTransform).split(",").length > 6 && (i = i.split(", ").map((function(h) {
					return h.replace(",", ".")
				})).join(", ")), l = new c.WebKitCSSMatrix(i === "none" ? "" : i)) : s = (l = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), t === "x" && (i = c.WebKitCSSMatrix ? l.m41 : s.length === 16 ? parseFloat(s[12]) : parseFloat(s[4])), t === "y" && (i = c.WebKitCSSMatrix ? l.m42 : s.length === 16 ? parseFloat(s[13]) : parseFloat(s[5])), i || 0
			},
			parseUrlQuery: function(e) {
				var t, s, i, l, o = {},
					h = e || c.location.href;
				if (typeof h == "string" && h.length)
					for (l = (s = (h = h.indexOf("?") > -1 ? h.replace(/\S*\?/, "") : "").split("&").filter((function(v) {
							return v !== ""
						}))).length, t = 0; t < l; t += 1) i = s[t].replace(/#\S+/g, "").split("="), o[decodeURIComponent(i[0])] = i[1] === void 0 ? void 0 : decodeURIComponent(i[1]) || "";
				return o
			},
			isObject: function(e) {
				return typeof e == "object" && e !== null && e.constructor && e.constructor === Object
			},
			extend: function() {
				for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
				for (var s = Object(e[0]), i = 1; i < e.length; i += 1) {
					var l = e[i];
					if (l != null)
						for (var o = Object.keys(Object(l)), h = 0, v = o.length; h < v; h += 1) {
							var f = o[h],
								g = Object.getOwnPropertyDescriptor(l, f);
							g !== void 0 && g.enumerable && (m.isObject(s[f]) && m.isObject(l[f]) ? m.extend(s[f], l[f]) : !m.isObject(s[f]) && m.isObject(l[f]) ? (s[f] = {}, m.extend(s[f], l[f])) : s[f] = l[f])
						}
				}
				return s
			}
		},
		y = {
			touch: !!("ontouchstart" in c || c.DocumentTouch && r instanceof c.DocumentTouch),
			pointerEvents: !!c.PointerEvent && "maxTouchPoints" in c.navigator && c.navigator.maxTouchPoints >= 0,
			observer: "MutationObserver" in c || "WebkitMutationObserver" in c,
			passiveListener: (function() {
				var e = !1;
				try {
					var t = Object.defineProperty({}, "passive", {
						get: function() {
							e = !0
						}
					});
					c.addEventListener("testPassiveListener", null, t)
				} catch {}
				return e
			})(),
			gestures: "ongesturestart" in c
		},
		E = function(e) {
			e === void 0 && (e = {});
			var t = this;
			t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach((function(s) {
				t.on(s, t.params.on[s])
			}))
		},
		R = {
			components: {
				configurable: !0
			}
		};
	E.prototype.on = function(e, t, s) {
		var i = this;
		if (typeof t != "function") return i;
		var l = s ? "unshift" : "push";
		return e.split(" ").forEach((function(o) {
			i.eventsListeners[o] || (i.eventsListeners[o] = []), i.eventsListeners[o][l](t)
		})), i
	}, E.prototype.once = function(e, t, s) {
		var i = this;
		if (typeof t != "function") return i;

		function l() {
			for (var o = [], h = arguments.length; h--;) o[h] = arguments[h];
			i.off(e, l), l.f7proxy && delete l.f7proxy, t.apply(i, o)
		}
		return l.f7proxy = t, i.on(e, l, s)
	}, E.prototype.off = function(e, t) {
		var s = this;
		return s.eventsListeners && e.split(" ").forEach((function(i) {
			t === void 0 ? s.eventsListeners[i] = [] : s.eventsListeners[i] && s.eventsListeners[i].length && s.eventsListeners[i].forEach((function(l, o) {
				(l === t || l.f7proxy && l.f7proxy === t) && s.eventsListeners[i].splice(o, 1)
			}))
		})), s
	}, E.prototype.emit = function() {
		for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
		var s, i, l, o = this;
		if (!o.eventsListeners) return o;
		typeof e[0] == "string" || Array.isArray(e[0]) ? (s = e[0], i = e.slice(1, e.length), l = o) : (s = e[0].events, i = e[0].data, l = e[0].context || o);
		var h = Array.isArray(s) ? s : s.split(" ");
		return h.forEach((function(v) {
			if (o.eventsListeners && o.eventsListeners[v]) {
				var f = [];
				o.eventsListeners[v].forEach((function(g) {
					f.push(g)
				})), f.forEach((function(g) {
					g.apply(l, i)
				}))
			}
		})), o
	}, E.prototype.useModulesParams = function(e) {
		var t = this;
		t.modules && Object.keys(t.modules).forEach((function(s) {
			var i = t.modules[s];
			i.params && m.extend(e, i.params)
		}))
	}, E.prototype.useModules = function(e) {
		e === void 0 && (e = {});
		var t = this;
		t.modules && Object.keys(t.modules).forEach((function(s) {
			var i = t.modules[s],
				l = e[s] || {};
			i.instance && Object.keys(i.instance).forEach((function(o) {
				var h = i.instance[o];
				t[o] = typeof h == "function" ? h.bind(t) : h
			})), i.on && t.on && Object.keys(i.on).forEach((function(o) {
				t.on(o, i.on[o])
			})), i.create && i.create.bind(t)(l)
		}))
	}, R.components.set = function(e) {
		this.use && this.use(e)
	}, E.installModule = function(e) {
		for (var t = [], s = arguments.length - 1; s-- > 0;) t[s] = arguments[s + 1];
		var i = this;
		i.prototype.modules || (i.prototype.modules = {});
		var l = e.name || Object.keys(i.prototype.modules).length + "_" + m.now();
		return i.prototype.modules[l] = e, e.proto && Object.keys(e.proto).forEach((function(o) {
			i.prototype[o] = e.proto[o]
		})), e.static && Object.keys(e.static).forEach((function(o) {
			i[o] = e.static[o]
		})), e.install && e.install.apply(i, t), i
	}, E.use = function(e) {
		for (var t = [], s = arguments.length - 1; s-- > 0;) t[s] = arguments[s + 1];
		var i = this;
		return Array.isArray(e) ? (e.forEach((function(l) {
			return i.installModule(l)
		})), i) : i.installModule.apply(i, [e].concat(t))
	}, Object.defineProperties(E, R);
	var U = {
			updateSize: function() {
				var e, t, s = this.$el;
				e = this.params.width !== void 0 ? this.params.width : s[0].clientWidth, t = this.params.height !== void 0 ? this.params.height : s[0].clientHeight, e === 0 && this.isHorizontal() || t === 0 && this.isVertical() || (e = e - parseInt(s.css("padding-left"), 10) - parseInt(s.css("padding-right"), 10), t = t - parseInt(s.css("padding-top"), 10) - parseInt(s.css("padding-bottom"), 10), m.extend(this, {
					width: e,
					height: t,
					size: this.isHorizontal() ? e : t
				}))
			},
			updateSlides: function() {
				var e = this.params,
					t = this.$wrapperEl,
					s = this.size,
					i = this.rtlTranslate,
					l = this.wrongRTL,
					o = this.virtual && e.virtual.enabled,
					h = o ? this.virtual.slides.length : this.slides.length,
					v = t.children("." + this.params.slideClass),
					f = o ? this.virtual.slides.length : v.length,
					g = [],
					S = [],
					A = [];

				function C(Ve) {
					return !e.cssMode || Ve !== v.length - 1
				}
				var M = e.slidesOffsetBefore;
				typeof M == "function" && (M = e.slidesOffsetBefore.call(this));
				var k = e.slidesOffsetAfter;
				typeof k == "function" && (k = e.slidesOffsetAfter.call(this));
				var $ = this.snapGrid.length,
					H = this.snapGrid.length,
					I = e.spaceBetween,
					z = -M,
					_ = 0,
					q = 0;
				if (s !== void 0) {
					var oe, X;
					typeof I == "string" && I.indexOf("%") >= 0 && (I = parseFloat(I.replace("%", "")) / 100 * s), this.virtualSize = -I, i ? v.css({
						marginLeft: "",
						marginTop: ""
					}) : v.css({
						marginRight: "",
						marginBottom: ""
					}), e.slidesPerColumn > 1 && (oe = Math.floor(f / e.slidesPerColumn) === f / this.params.slidesPerColumn ? f : Math.ceil(f / e.slidesPerColumn) * e.slidesPerColumn, e.slidesPerView !== "auto" && e.slidesPerColumnFill === "row" && (oe = Math.max(oe, e.slidesPerView * e.slidesPerColumn)));
					for (var ge, D = e.slidesPerColumn, b = oe / D, L = Math.floor(f / e.slidesPerColumn), P = 0; P < f; P += 1) {
						X = 0;
						var G = v.eq(P);
						if (e.slidesPerColumn > 1) {
							var se = void 0,
								Z = void 0,
								pe = void 0;
							if (e.slidesPerColumnFill === "row" && e.slidesPerGroup > 1) {
								var ke = Math.floor(P / (e.slidesPerGroup * e.slidesPerColumn)),
									qe = P - e.slidesPerColumn * e.slidesPerGroup * ke,
									Et = ke === 0 ? e.slidesPerGroup : Math.min(Math.ceil((f - ke * D * e.slidesPerGroup) / D), e.slidesPerGroup);
								se = (Z = qe - (pe = Math.floor(qe / Et)) * Et + ke * e.slidesPerGroup) + pe * oe / D, G.css({
									"-webkit-box-ordinal-group": se,
									"-moz-box-ordinal-group": se,
									"-ms-flex-order": se,
									"-webkit-order": se,
									order: se
								})
							} else e.slidesPerColumnFill === "column" ? (pe = P - (Z = Math.floor(P / D)) * D, (Z > L || Z === L && pe === D - 1) && (pe += 1) >= D && (pe = 0, Z += 1)) : Z = P - (pe = Math.floor(P / b)) * b;
							G.css("margin-" + (this.isHorizontal() ? "top" : "left"), pe !== 0 && e.spaceBetween && e.spaceBetween + "px")
						}
						if (G.css("display") !== "none") {
							if (e.slidesPerView === "auto") {
								var he = c.getComputedStyle(G[0], null),
									Tt = G[0].style.transform,
									St = G[0].style.webkitTransform;
								if (Tt && (G[0].style.transform = "none"), St && (G[0].style.webkitTransform = "none"), e.roundLengths) X = this.isHorizontal() ? G.outerWidth(!0) : G.outerHeight(!0);
								else if (this.isHorizontal()) {
									var ti = parseFloat(he.getPropertyValue("width")),
										Aa = parseFloat(he.getPropertyValue("padding-left")),
										Ma = parseFloat(he.getPropertyValue("padding-right")),
										si = parseFloat(he.getPropertyValue("margin-left")),
										ii = parseFloat(he.getPropertyValue("margin-right")),
										ai = he.getPropertyValue("box-sizing");
									X = ai && ai === "border-box" ? ti + si + ii : ti + Aa + Ma + si + ii
								} else {
									var ni = parseFloat(he.getPropertyValue("height")),
										La = parseFloat(he.getPropertyValue("padding-top")),
										Oa = parseFloat(he.getPropertyValue("padding-bottom")),
										ri = parseFloat(he.getPropertyValue("margin-top")),
										oi = parseFloat(he.getPropertyValue("margin-bottom")),
										li = he.getPropertyValue("box-sizing");
									X = li && li === "border-box" ? ni + ri + oi : ni + La + Oa + ri + oi
								}
								Tt && (G[0].style.transform = Tt), St && (G[0].style.webkitTransform = St), e.roundLengths && (X = Math.floor(X))
							} else X = (s - (e.slidesPerView - 1) * I) / e.slidesPerView, e.roundLengths && (X = Math.floor(X)), v[P] && (this.isHorizontal() ? v[P].style.width = X + "px" : v[P].style.height = X + "px");
							v[P] && (v[P].swiperSlideSize = X), A.push(X), e.centeredSlides ? (z = z + X / 2 + _ / 2 + I, _ === 0 && P !== 0 && (z = z - s / 2 - I), P === 0 && (z = z - s / 2 - I), Math.abs(z) < .001 && (z = 0), e.roundLengths && (z = Math.floor(z)), q % e.slidesPerGroup == 0 && g.push(z), S.push(z)) : (e.roundLengths && (z = Math.floor(z)), (q - Math.min(this.params.slidesPerGroupSkip, q)) % this.params.slidesPerGroup == 0 && g.push(z), S.push(z), z = z + X + I), this.virtualSize += X + I, _ = X, q += 1
						}
					}
					if (this.virtualSize = Math.max(this.virtualSize, s) + k, i && l && (e.effect === "slide" || e.effect === "coverflow") && t.css({
							width: this.virtualSize + e.spaceBetween + "px"
						}), e.setWrapperSize && (this.isHorizontal() ? t.css({
							width: this.virtualSize + e.spaceBetween + "px"
						}) : t.css({
							height: this.virtualSize + e.spaceBetween + "px"
						})), e.slidesPerColumn > 1 && (this.virtualSize = (X + e.spaceBetween) * oe, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? t.css({
							width: this.virtualSize + e.spaceBetween + "px"
						}) : t.css({
							height: this.virtualSize + e.spaceBetween + "px"
						}), e.centeredSlides)) {
						ge = [];
						for (var Kt = 0; Kt < g.length; Kt += 1) {
							var ws = g[Kt];
							e.roundLengths && (ws = Math.floor(ws)), g[Kt] < this.virtualSize + g[0] && ge.push(ws)
						}
						g = ge
					}
					if (!e.centeredSlides) {
						ge = [];
						for (var Qt = 0; Qt < g.length; Qt += 1) {
							var Es = g[Qt];
							e.roundLengths && (Es = Math.floor(Es)), g[Qt] <= this.virtualSize - s && ge.push(Es)
						}
						g = ge, Math.floor(this.virtualSize - s) - Math.floor(g[g.length - 1]) > 1 && g.push(this.virtualSize - s)
					}
					if (g.length === 0 && (g = [0]), e.spaceBetween !== 0 && (this.isHorizontal() ? i ? v.filter(C).css({
							marginLeft: I + "px"
						}) : v.filter(C).css({
							marginRight: I + "px"
						}) : v.filter(C).css({
							marginBottom: I + "px"
						})), e.centeredSlides && e.centeredSlidesBounds) {
						var di = 0;
						A.forEach((function(Ve) {
							di += Ve + (e.spaceBetween ? e.spaceBetween : 0)
						}));
						var ci = (di -= e.spaceBetween) - s;
						g = g.map((function(Ve) {
							return Ve < 0 ? -M : Ve > ci ? ci + k : Ve
						}))
					}
					if (e.centerInsufficientSlides) {
						var Ts = 0;
						if (A.forEach((function(Ve) {
								Ts += Ve + (e.spaceBetween ? e.spaceBetween : 0)
							})), (Ts -= e.spaceBetween) < s) {
							var ui = (s - Ts) / 2;
							g.forEach((function(Ve, Ss) {
								g[Ss] = Ve - ui
							})), S.forEach((function(Ve, Ss) {
								S[Ss] = Ve + ui
							}))
						}
					}
					m.extend(this, {
						slides: v,
						snapGrid: g,
						slidesGrid: S,
						slidesSizesGrid: A
					}), f !== h && this.emit("slidesLengthChange"), g.length !== $ && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), S.length !== H && this.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset()
				}
			},
			updateAutoHeight: function(e) {
				var t, s = [],
					i = 0;
				if (typeof e == "number" ? this.setTransition(e) : e === !0 && this.setTransition(this.params.speed), this.params.slidesPerView !== "auto" && this.params.slidesPerView > 1)
					if (this.params.centeredSlides) this.visibleSlides.each((function(h, v) {
						s.push(v)
					}));
					else
						for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
							var l = this.activeIndex + t;
							if (l > this.slides.length) break;
							s.push(this.slides.eq(l)[0])
						} else s.push(this.slides.eq(this.activeIndex)[0]);
				for (t = 0; t < s.length; t += 1)
					if (s[t] !== void 0) {
						var o = s[t].offsetHeight;
						i = o > i ? o : i
					} i && this.$wrapperEl.css("height", i + "px")
			},
			updateSlidesOffset: function() {
				for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
			},
			updateSlidesProgress: function(e) {
				e === void 0 && (e = this && this.translate || 0);
				var t = this.params,
					s = this.slides,
					i = this.rtlTranslate;
				if (s.length !== 0) {
					s[0].swiperSlideOffset === void 0 && this.updateSlidesOffset();
					var l = -e;
					i && (l = e), s.removeClass(t.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = [];
					for (var o = 0; o < s.length; o += 1) {
						var h = s[o],
							v = (l + (t.centeredSlides ? this.minTranslate() : 0) - h.swiperSlideOffset) / (h.swiperSlideSize + t.spaceBetween);
						if (t.watchSlidesVisibility || t.centeredSlides && t.autoHeight) {
							var f = -(l - h.swiperSlideOffset),
								g = f + this.slidesSizesGrid[o];
							(f >= 0 && f < this.size - 1 || g > 1 && g <= this.size || f <= 0 && g >= this.size) && (this.visibleSlides.push(h), this.visibleSlidesIndexes.push(o), s.eq(o).addClass(t.slideVisibleClass))
						}
						h.progress = i ? -v : v
					}
					this.visibleSlides = u(this.visibleSlides)
				}
			},
			updateProgress: function(e) {
				if (e === void 0) {
					var t = this.rtlTranslate ? -1 : 1;
					e = this && this.translate && this.translate * t || 0
				}
				var s = this.params,
					i = this.maxTranslate() - this.minTranslate(),
					l = this.progress,
					o = this.isBeginning,
					h = this.isEnd,
					v = o,
					f = h;
				i === 0 ? (l = 0, o = !0, h = !0) : (o = (l = (e - this.minTranslate()) / i) <= 0, h = l >= 1), m.extend(this, {
					progress: l,
					isBeginning: o,
					isEnd: h
				}), (s.watchSlidesProgress || s.watchSlidesVisibility || s.centeredSlides && s.autoHeight) && this.updateSlidesProgress(e), o && !v && this.emit("reachBeginning toEdge"), h && !f && this.emit("reachEnd toEdge"), (v && !o || f && !h) && this.emit("fromEdge"), this.emit("progress", l)
			},
			updateSlidesClasses: function() {
				var e, t = this.slides,
					s = this.params,
					i = this.$wrapperEl,
					l = this.activeIndex,
					o = this.realIndex,
					h = this.virtual && s.virtual.enabled;
				t.removeClass(s.slideActiveClass + " " + s.slideNextClass + " " + s.slidePrevClass + " " + s.slideDuplicateActiveClass + " " + s.slideDuplicateNextClass + " " + s.slideDuplicatePrevClass), (e = h ? this.$wrapperEl.find("." + s.slideClass + '[data-swiper-slide-index="' + l + '"]') : t.eq(l)).addClass(s.slideActiveClass), s.loop && (e.hasClass(s.slideDuplicateClass) ? i.children("." + s.slideClass + ":not(." + s.slideDuplicateClass + ')[data-swiper-slide-index="' + o + '"]').addClass(s.slideDuplicateActiveClass) : i.children("." + s.slideClass + "." + s.slideDuplicateClass + '[data-swiper-slide-index="' + o + '"]').addClass(s.slideDuplicateActiveClass));
				var v = e.nextAll("." + s.slideClass).eq(0).addClass(s.slideNextClass);
				s.loop && v.length === 0 && (v = t.eq(0)).addClass(s.slideNextClass);
				var f = e.prevAll("." + s.slideClass).eq(0).addClass(s.slidePrevClass);
				s.loop && f.length === 0 && (f = t.eq(-1)).addClass(s.slidePrevClass), s.loop && (v.hasClass(s.slideDuplicateClass) ? i.children("." + s.slideClass + ":not(." + s.slideDuplicateClass + ')[data-swiper-slide-index="' + v.attr("data-swiper-slide-index") + '"]').addClass(s.slideDuplicateNextClass) : i.children("." + s.slideClass + "." + s.slideDuplicateClass + '[data-swiper-slide-index="' + v.attr("data-swiper-slide-index") + '"]').addClass(s.slideDuplicateNextClass), f.hasClass(s.slideDuplicateClass) ? i.children("." + s.slideClass + ":not(." + s.slideDuplicateClass + ')[data-swiper-slide-index="' + f.attr("data-swiper-slide-index") + '"]').addClass(s.slideDuplicatePrevClass) : i.children("." + s.slideClass + "." + s.slideDuplicateClass + '[data-swiper-slide-index="' + f.attr("data-swiper-slide-index") + '"]').addClass(s.slideDuplicatePrevClass))
			},
			updateActiveIndex: function(e) {
				var t, s = this.rtlTranslate ? this.translate : -this.translate,
					i = this.slidesGrid,
					l = this.snapGrid,
					o = this.params,
					h = this.activeIndex,
					v = this.realIndex,
					f = this.snapIndex,
					g = e;
				if (g === void 0) {
					for (var S = 0; S < i.length; S += 1) i[S + 1] !== void 0 ? s >= i[S] && s < i[S + 1] - (i[S + 1] - i[S]) / 2 ? g = S : s >= i[S] && s < i[S + 1] && (g = S + 1) : s >= i[S] && (g = S);
					o.normalizeSlideIndex && (g < 0 || g === void 0) && (g = 0)
				}
				if (l.indexOf(s) >= 0) t = l.indexOf(s);
				else {
					var A = Math.min(o.slidesPerGroupSkip, g);
					t = A + Math.floor((g - A) / o.slidesPerGroup)
				}
				if (t >= l.length && (t = l.length - 1), g !== h) {
					var C = parseInt(this.slides.eq(g).attr("data-swiper-slide-index") || g, 10);
					m.extend(this, {
						snapIndex: t,
						realIndex: C,
						previousIndex: h,
						activeIndex: g
					}), this.emit("activeIndexChange"), this.emit("snapIndexChange"), v !== C && this.emit("realIndexChange"), (this.initialized || this.params.runCallbacksOnInit) && this.emit("slideChange")
				} else t !== f && (this.snapIndex = t, this.emit("snapIndexChange"))
			},
			updateClickedSlide: function(e) {
				var t = this.params,
					s = u(e.target).closest("." + t.slideClass)[0],
					i = !1;
				if (s)
					for (var l = 0; l < this.slides.length; l += 1) this.slides[l] === s && (i = !0);
				if (!s || !i) return this.clickedSlide = void 0, void(this.clickedIndex = void 0);
				this.clickedSlide = s, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(u(s).attr("data-swiper-slide-index"), 10) : this.clickedIndex = u(s).index(), t.slideToClickedSlide && this.clickedIndex !== void 0 && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
			}
		},
		O = {
			getTranslate: function(e) {
				e === void 0 && (e = this.isHorizontal() ? "x" : "y");
				var t = this.params,
					s = this.rtlTranslate,
					i = this.translate,
					l = this.$wrapperEl;
				if (t.virtualTranslate) return s ? -i : i;
				if (t.cssMode) return i;
				var o = m.getTranslate(l[0], e);
				return s && (o = -o), o || 0
			},
			setTranslate: function(e, t) {
				var s = this.rtlTranslate,
					i = this.params,
					l = this.$wrapperEl,
					o = this.wrapperEl,
					h = this.progress,
					v = 0,
					f = 0;
				this.isHorizontal() ? v = s ? -e : e : f = e, i.roundLengths && (v = Math.floor(v), f = Math.floor(f)), i.cssMode ? o[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -v : -f : i.virtualTranslate || l.transform("translate3d(" + v + "px, " + f + "px, 0px)"), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? v : f;
				var g = this.maxTranslate() - this.minTranslate();
				(g === 0 ? 0 : (e - this.minTranslate()) / g) !== h && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
			},
			minTranslate: function() {
				return -this.snapGrid[0]
			},
			maxTranslate: function() {
				return -this.snapGrid[this.snapGrid.length - 1]
			},
			translateTo: function(e, t, s, i, l) {
				var o;
				e === void 0 && (e = 0), t === void 0 && (t = this.params.speed), s === void 0 && (s = !0), i === void 0 && (i = !0);
				var h = this,
					v = h.params,
					f = h.wrapperEl;
				if (h.animating && v.preventInteractionOnTransition) return !1;
				var g, S = h.minTranslate(),
					A = h.maxTranslate();
				if (g = i && e > S ? S : i && e < A ? A : e, h.updateProgress(g), v.cssMode) {
					var C = h.isHorizontal();
					return t === 0 ? f[C ? "scrollLeft" : "scrollTop"] = -g : f.scrollTo ? f.scrollTo(((o = {})[C ? "left" : "top"] = -g, o.behavior = "smooth", o)) : f[C ? "scrollLeft" : "scrollTop"] = -g, !0
				}
				return t === 0 ? (h.setTransition(0), h.setTranslate(g), s && (h.emit("beforeTransitionStart", t, l), h.emit("transitionEnd"))) : (h.setTransition(t), h.setTranslate(g), s && (h.emit("beforeTransitionStart", t, l), h.emit("transitionStart")), h.animating || (h.animating = !0, h.onTranslateToWrapperTransitionEnd || (h.onTranslateToWrapperTransitionEnd = function(M) {
					h && !h.destroyed && M.target === this && (h.$wrapperEl[0].removeEventListener("transitionend", h.onTranslateToWrapperTransitionEnd), h.$wrapperEl[0].removeEventListener("webkitTransitionEnd", h.onTranslateToWrapperTransitionEnd), h.onTranslateToWrapperTransitionEnd = null, delete h.onTranslateToWrapperTransitionEnd, s && h.emit("transitionEnd"))
				}), h.$wrapperEl[0].addEventListener("transitionend", h.onTranslateToWrapperTransitionEnd), h.$wrapperEl[0].addEventListener("webkitTransitionEnd", h.onTranslateToWrapperTransitionEnd))), !0
			}
		},
		W = {
			setTransition: function(e, t) {
				this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
			},
			transitionStart: function(e, t) {
				e === void 0 && (e = !0);
				var s = this.activeIndex,
					i = this.params,
					l = this.previousIndex;
				if (!i.cssMode) {
					i.autoHeight && this.updateAutoHeight();
					var o = t;
					if (o || (o = s > l ? "next" : s < l ? "prev" : "reset"), this.emit("transitionStart"), e && s !== l) {
						if (o === "reset") return void this.emit("slideResetTransitionStart");
						this.emit("slideChangeTransitionStart"), o === "next" ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
					}
				}
			},
			transitionEnd: function(e, t) {
				e === void 0 && (e = !0);
				var s = this.activeIndex,
					i = this.previousIndex,
					l = this.params;
				if (this.animating = !1, !l.cssMode) {
					this.setTransition(0);
					var o = t;
					if (o || (o = s > i ? "next" : s < i ? "prev" : "reset"), this.emit("transitionEnd"), e && s !== i) {
						if (o === "reset") return void this.emit("slideResetTransitionEnd");
						this.emit("slideChangeTransitionEnd"), o === "next" ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
					}
				}
			}
		},
		N = {
			slideTo: function(e, t, s, i) {
				var l;
				e === void 0 && (e = 0), t === void 0 && (t = this.params.speed), s === void 0 && (s = !0);
				var o = this,
					h = e;
				h < 0 && (h = 0);
				var v = o.params,
					f = o.snapGrid,
					g = o.slidesGrid,
					S = o.previousIndex,
					A = o.activeIndex,
					C = o.rtlTranslate,
					M = o.wrapperEl;
				if (o.animating && v.preventInteractionOnTransition) return !1;
				var k = Math.min(o.params.slidesPerGroupSkip, h),
					$ = k + Math.floor((h - k) / o.params.slidesPerGroup);
				$ >= f.length && ($ = f.length - 1), (A || v.initialSlide || 0) === (S || 0) && s && o.emit("beforeSlideChangeStart");
				var H, I = -f[$];
				if (o.updateProgress(I), v.normalizeSlideIndex)
					for (var z = 0; z < g.length; z += 1) - Math.floor(100 * I) >= Math.floor(100 * g[z]) && (h = z);
				if (o.initialized && h !== A && (!o.allowSlideNext && I < o.translate && I < o.minTranslate() || !o.allowSlidePrev && I > o.translate && I > o.maxTranslate() && (A || 0) !== h)) return !1;
				if (H = h > A ? "next" : h < A ? "prev" : "reset", C && -I === o.translate || !C && I === o.translate) return o.updateActiveIndex(h), v.autoHeight && o.updateAutoHeight(), o.updateSlidesClasses(), v.effect !== "slide" && o.setTranslate(I), H !== "reset" && (o.transitionStart(s, H), o.transitionEnd(s, H)), !1;
				if (v.cssMode) {
					var _ = o.isHorizontal(),
						q = -I;
					return C && (q = M.scrollWidth - M.offsetWidth - q), t === 0 ? M[_ ? "scrollLeft" : "scrollTop"] = q : M.scrollTo ? M.scrollTo(((l = {})[_ ? "left" : "top"] = q, l.behavior = "smooth", l)) : M[_ ? "scrollLeft" : "scrollTop"] = q, !0
				}
				return t === 0 ? (o.setTransition(0), o.setTranslate(I), o.updateActiveIndex(h), o.updateSlidesClasses(), o.emit("beforeTransitionStart", t, i), o.transitionStart(s, H), o.transitionEnd(s, H)) : (o.setTransition(t), o.setTranslate(I), o.updateActiveIndex(h), o.updateSlidesClasses(), o.emit("beforeTransitionStart", t, i), o.transitionStart(s, H), o.animating || (o.animating = !0, o.onSlideToWrapperTransitionEnd || (o.onSlideToWrapperTransitionEnd = function(oe) {
					o && !o.destroyed && oe.target === this && (o.$wrapperEl[0].removeEventListener("transitionend", o.onSlideToWrapperTransitionEnd), o.$wrapperEl[0].removeEventListener("webkitTransitionEnd", o.onSlideToWrapperTransitionEnd), o.onSlideToWrapperTransitionEnd = null, delete o.onSlideToWrapperTransitionEnd, o.transitionEnd(s, H))
				}), o.$wrapperEl[0].addEventListener("transitionend", o.onSlideToWrapperTransitionEnd), o.$wrapperEl[0].addEventListener("webkitTransitionEnd", o.onSlideToWrapperTransitionEnd))), !0
			},
			slideToLoop: function(e, t, s, i) {
				e === void 0 && (e = 0), t === void 0 && (t = this.params.speed), s === void 0 && (s = !0);
				var l = e;
				return this.params.loop && (l += this.loopedSlides), this.slideTo(l, t, s, i)
			},
			slideNext: function(e, t, s) {
				e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
				var i = this.params,
					l = this.animating,
					o = this.activeIndex < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup;
				if (i.loop) {
					if (l) return !1;
					this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
				}
				return this.slideTo(this.activeIndex + o, e, t, s)
			},
			slidePrev: function(e, t, s) {
				e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
				var i = this.params,
					l = this.animating,
					o = this.snapGrid,
					h = this.slidesGrid,
					v = this.rtlTranslate;
				if (i.loop) {
					if (l) return !1;
					this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
				}

				function f(M) {
					return M < 0 ? -Math.floor(Math.abs(M)) : Math.floor(M)
				}
				var g, S = f(v ? this.translate : -this.translate),
					A = o.map((function(M) {
						return f(M)
					})),
					C = (h.map((function(M) {
						return f(M)
					})), o[A.indexOf(S)], o[A.indexOf(S) - 1]);
				return C === void 0 && i.cssMode && o.forEach((function(M) {
					!C && S >= M && (C = M)
				})), C !== void 0 && (g = h.indexOf(C)) < 0 && (g = this.activeIndex - 1), this.slideTo(g, e, t, s)
			},
			slideReset: function(e, t, s) {
				return e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), this.slideTo(this.activeIndex, e, t, s)
			},
			slideToClosest: function(e, t, s, i) {
				e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), i === void 0 && (i = .5);
				var l = this.activeIndex,
					o = Math.min(this.params.slidesPerGroupSkip, l),
					h = o + Math.floor((l - o) / this.params.slidesPerGroup),
					v = this.rtlTranslate ? this.translate : -this.translate;
				if (v >= this.snapGrid[h]) {
					var f = this.snapGrid[h];
					v - f > (this.snapGrid[h + 1] - f) * i && (l += this.params.slidesPerGroup)
				} else {
					var g = this.snapGrid[h - 1];
					v - g <= (this.snapGrid[h] - g) * i && (l -= this.params.slidesPerGroup)
				}
				return l = Math.max(l, 0), l = Math.min(l, this.slidesGrid.length - 1), this.slideTo(l, e, t, s)
			},
			slideToClickedSlide: function() {
				var e, t = this,
					s = t.params,
					i = t.$wrapperEl,
					l = s.slidesPerView === "auto" ? t.slidesPerViewDynamic() : s.slidesPerView,
					o = t.clickedIndex;
				if (s.loop) {
					if (t.animating) return;
					e = parseInt(u(t.clickedSlide).attr("data-swiper-slide-index"), 10), s.centeredSlides ? o < t.loopedSlides - l / 2 || o > t.slides.length - t.loopedSlides + l / 2 ? (t.loopFix(), o = i.children("." + s.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + s.slideDuplicateClass + ")").eq(0).index(), m.nextTick((function() {
						t.slideTo(o)
					}))) : t.slideTo(o) : o > t.slides.length - l ? (t.loopFix(), o = i.children("." + s.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + s.slideDuplicateClass + ")").eq(0).index(), m.nextTick((function() {
						t.slideTo(o)
					}))) : t.slideTo(o)
				} else t.slideTo(o)
			}
		},
		ie = {
			loopCreate: function() {
				var e = this,
					t = e.params,
					s = e.$wrapperEl;
				s.children("." + t.slideClass + "." + t.slideDuplicateClass).remove();
				var i = s.children("." + t.slideClass);
				if (t.loopFillGroupWithBlank) {
					var l = t.slidesPerGroup - i.length % t.slidesPerGroup;
					if (l !== t.slidesPerGroup) {
						for (var o = 0; o < l; o += 1) {
							var h = u(r.createElement("div")).addClass(t.slideClass + " " + t.slideBlankClass);
							s.append(h)
						}
						i = s.children("." + t.slideClass)
					}
				}
				t.slidesPerView !== "auto" || t.loopedSlides || (t.loopedSlides = i.length), e.loopedSlides = Math.ceil(parseFloat(t.loopedSlides || t.slidesPerView, 10)), e.loopedSlides += t.loopAdditionalSlides, e.loopedSlides > i.length && (e.loopedSlides = i.length);
				var v = [],
					f = [];
				i.each((function(A, C) {
					var M = u(C);
					A < e.loopedSlides && f.push(C), A < i.length && A >= i.length - e.loopedSlides && v.push(C), M.attr("data-swiper-slide-index", A)
				}));
				for (var g = 0; g < f.length; g += 1) s.append(u(f[g].cloneNode(!0)).addClass(t.slideDuplicateClass));
				for (var S = v.length - 1; S >= 0; S -= 1) s.prepend(u(v[S].cloneNode(!0)).addClass(t.slideDuplicateClass))
			},
			loopFix: function() {
				this.emit("beforeLoopFix");
				var e, t = this.activeIndex,
					s = this.slides,
					i = this.loopedSlides,
					l = this.allowSlidePrev,
					o = this.allowSlideNext,
					h = this.snapGrid,
					v = this.rtlTranslate;
				this.allowSlidePrev = !0, this.allowSlideNext = !0;
				var f = -h[t] - this.getTranslate();
				t < i ? (e = s.length - 3 * i + t, e += i, this.slideTo(e, 0, !1, !0) && f !== 0 && this.setTranslate((v ? -this.translate : this.translate) - f)) : t >= s.length - i && (e = -s.length + t + i, e += i, this.slideTo(e, 0, !1, !0) && f !== 0 && this.setTranslate((v ? -this.translate : this.translate) - f)), this.allowSlidePrev = l, this.allowSlideNext = o, this.emit("loopFix")
			},
			loopDestroy: function() {
				var e = this.$wrapperEl,
					t = this.params,
					s = this.slides;
				e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), s.removeAttr("data-swiper-slide-index")
			}
		},
		ce = {
			setGrabCursor: function(e) {
				if (!(y.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
					var t = this.el;
					t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
				}
			},
			unsetGrabCursor: function() {
				y.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "")
			}
		},
		re, Y, j, le, Ee, ae, me, Le, B, F, ee, V, Te, _e, Re, Ye = {
			appendSlide: function(e) {
				var t = this.$wrapperEl,
					s = this.params;
				if (s.loop && this.loopDestroy(), typeof e == "object" && "length" in e)
					for (var i = 0; i < e.length; i += 1) e[i] && t.append(e[i]);
				else t.append(e);
				s.loop && this.loopCreate(), s.observer && y.observer || this.update()
			},
			prependSlide: function(e) {
				var t = this.params,
					s = this.$wrapperEl,
					i = this.activeIndex;
				t.loop && this.loopDestroy();
				var l = i + 1;
				if (typeof e == "object" && "length" in e) {
					for (var o = 0; o < e.length; o += 1) e[o] && s.prepend(e[o]);
					l = i + e.length
				} else s.prepend(e);
				t.loop && this.loopCreate(), t.observer && y.observer || this.update(), this.slideTo(l, 0, !1)
			},
			addSlide: function(e, t) {
				var s = this.$wrapperEl,
					i = this.params,
					l = this.activeIndex;
				i.loop && (l -= this.loopedSlides, this.loopDestroy(), this.slides = s.children("." + i.slideClass));
				var o = this.slides.length;
				if (e <= 0) this.prependSlide(t);
				else if (e >= o) this.appendSlide(t);
				else {
					for (var h = l > e ? l + 1 : l, v = [], f = o - 1; f >= e; f -= 1) {
						var g = this.slides.eq(f);
						g.remove(), v.unshift(g)
					}
					if (typeof t == "object" && "length" in t) {
						for (var S = 0; S < t.length; S += 1) t[S] && s.append(t[S]);
						h = l > e ? l + t.length : l
					} else s.append(t);
					for (var A = 0; A < v.length; A += 1) s.append(v[A]);
					i.loop && this.loopCreate(), i.observer && y.observer || this.update(), i.loop ? this.slideTo(h + this.loopedSlides, 0, !1) : this.slideTo(h, 0, !1)
				}
			},
			removeSlide: function(e) {
				var t = this.params,
					s = this.$wrapperEl,
					i = this.activeIndex;
				t.loop && (i -= this.loopedSlides, this.loopDestroy(), this.slides = s.children("." + t.slideClass));
				var l, o = i;
				if (typeof e == "object" && "length" in e) {
					for (var h = 0; h < e.length; h += 1) l = e[h], this.slides[l] && this.slides.eq(l).remove(), l < o && (o -= 1);
					o = Math.max(o, 0)
				} else l = e, this.slides[l] && this.slides.eq(l).remove(), l < o && (o -= 1), o = Math.max(o, 0);
				t.loop && this.loopCreate(), t.observer && y.observer || this.update(), t.loop ? this.slideTo(o + this.loopedSlides, 0, !1) : this.slideTo(o, 0, !1)
			},
			removeAllSlides: function() {
				for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
				this.removeSlide(e)
			}
		},
		fe = (re = c.navigator.platform, Y = c.navigator.userAgent, j = {
			ios: !1,
			android: !1,
			androidChrome: !1,
			desktop: !1,
			iphone: !1,
			ipod: !1,
			ipad: !1,
			edge: !1,
			ie: !1,
			firefox: !1,
			macos: !1,
			windows: !1,
			cordova: !(!c.cordova && !c.phonegap),
			phonegap: !(!c.cordova && !c.phonegap),
			electron: !1
		}, le = c.screen.width, Ee = c.screen.height, ae = Y.match(/(Android);?[\s\/]+([\d.]+)?/), me = Y.match(/(iPad).*OS\s([\d_]+)/), Le = Y.match(/(iPod)(.*OS\s([\d_]+))?/), B = !me && Y.match(/(iPhone\sOS|iOS)\s([\d_]+)/), F = Y.indexOf("MSIE ") >= 0 || Y.indexOf("Trident/") >= 0, ee = Y.indexOf("Edge/") >= 0, V = Y.indexOf("Gecko/") >= 0 && Y.indexOf("Firefox/") >= 0, Te = re === "Win32", _e = Y.toLowerCase().indexOf("electron") >= 0, Re = re === "MacIntel", !me && Re && y.touch && (le === 1024 && Ee === 1366 || le === 834 && Ee === 1194 || le === 834 && Ee === 1112 || le === 768 && Ee === 1024) && (me = Y.match(/(Version)\/([\d.]+)/), Re = !1), j.ie = F, j.edge = ee, j.firefox = V, ae && !Te && (j.os = "android", j.osVersion = ae[2], j.android = !0, j.androidChrome = Y.toLowerCase().indexOf("chrome") >= 0), (me || B || Le) && (j.os = "ios", j.ios = !0), B && !Le && (j.osVersion = B[2].replace(/_/g, "."), j.iphone = !0), me && (j.osVersion = me[2].replace(/_/g, "."), j.ipad = !0), Le && (j.osVersion = Le[3] ? Le[3].replace(/_/g, ".") : null, j.ipod = !0), j.ios && j.osVersion && Y.indexOf("Version/") >= 0 && j.osVersion.split(".")[0] === "10" && (j.osVersion = Y.toLowerCase().split("version/")[1].split(" ")[0]), j.webView = !(!(B || me || Le) || !Y.match(/.*AppleWebKit(?!.*Safari)/i) && !c.navigator.standalone) || c.matchMedia && c.matchMedia("(display-mode: standalone)").matches, j.webview = j.webView, j.standalone = j.webView, j.desktop = !(j.ios || j.android) || _e, j.desktop && (j.electron = _e, j.macos = Re, j.windows = Te, j.macos && (j.os = "macos"), j.windows && (j.os = "windows")), j.pixelRatio = c.devicePixelRatio || 1, j);

	function it(e) {
		var t = this.touchEventsData,
			s = this.params,
			i = this.touches;
		if (!this.animating || !s.preventInteractionOnTransition) {
			var l = e;
			l.originalEvent && (l = l.originalEvent);
			var o = u(l.target);
			if ((s.touchEventsTarget !== "wrapper" || o.closest(this.wrapperEl).length) && (t.isTouchEvent = l.type === "touchstart", (t.isTouchEvent || !("which" in l) || l.which !== 3) && !(!t.isTouchEvent && "button" in l && l.button > 0 || t.isTouched && t.isMoved))) {
				if (s.noSwiping && o.closest(s.noSwipingSelector ? s.noSwipingSelector : "." + s.noSwipingClass)[0]) this.allowClick = !0;
				else if (!s.swipeHandler || o.closest(s.swipeHandler)[0]) {
					i.currentX = l.type === "touchstart" ? l.targetTouches[0].pageX : l.pageX, i.currentY = l.type === "touchstart" ? l.targetTouches[0].pageY : l.pageY;
					var h = i.currentX,
						v = i.currentY,
						f = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
						g = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
					if (!f || !(h <= g || h >= c.screen.width - g)) {
						if (m.extend(t, {
								isTouched: !0,
								isMoved: !1,
								allowTouchCallbacks: !0,
								isScrolling: void 0,
								startMoving: void 0
							}), i.startX = h, i.startY = v, t.touchStartTime = m.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, s.threshold > 0 && (t.allowThresholdMove = !1), l.type !== "touchstart") {
							var S = !0;
							o.is(t.formElements) && (S = !1), r.activeElement && u(r.activeElement).is(t.formElements) && r.activeElement !== o[0] && r.activeElement.blur();
							var A = S && this.allowTouchMove && s.touchStartPreventDefault;
							(s.touchStartForcePreventDefault || A) && l.preventDefault()
						}
						this.emit("touchStart", l)
					}
				}
			}
		}
	}

	function be(e) {
		var t = this.touchEventsData,
			s = this.params,
			i = this.touches,
			l = this.rtlTranslate,
			o = e;
		if (o.originalEvent && (o = o.originalEvent), t.isTouched) {
			if (!t.isTouchEvent || o.type === "touchmove") {
				var h = o.type === "touchmove" && o.targetTouches && (o.targetTouches[0] || o.changedTouches[0]),
					v = o.type === "touchmove" ? h.pageX : o.pageX,
					f = o.type === "touchmove" ? h.pageY : o.pageY;
				if (o.preventedByNestedSwiper) return i.startX = v, void(i.startY = f);
				if (!this.allowTouchMove) return this.allowClick = !1, void(t.isTouched && (m.extend(i, {
					startX: v,
					startY: f,
					currentX: v,
					currentY: f
				}), t.touchStartTime = m.now()));
				if (t.isTouchEvent && s.touchReleaseOnEdges && !s.loop) {
					if (this.isVertical()) {
						if (f < i.startY && this.translate <= this.maxTranslate() || f > i.startY && this.translate >= this.minTranslate()) return t.isTouched = !1, void(t.isMoved = !1)
					} else if (v < i.startX && this.translate <= this.maxTranslate() || v > i.startX && this.translate >= this.minTranslate()) return
				}
				if (t.isTouchEvent && r.activeElement && o.target === r.activeElement && u(o.target).is(t.formElements)) return t.isMoved = !0, void(this.allowClick = !1);
				if (t.allowTouchCallbacks && this.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
					i.currentX = v, i.currentY = f;
					var g = i.currentX - i.startX,
						S = i.currentY - i.startY;
					if (!(this.params.threshold && Math.sqrt(Math.pow(g, 2) + Math.pow(S, 2)) < this.params.threshold)) {
						var A;
						if (t.isScrolling === void 0 && (this.isHorizontal() && i.currentY === i.startY || this.isVertical() && i.currentX === i.startX ? t.isScrolling = !1 : g * g + S * S >= 25 && (A = 180 * Math.atan2(Math.abs(S), Math.abs(g)) / Math.PI, t.isScrolling = this.isHorizontal() ? A > s.touchAngle : 90 - A > s.touchAngle)), t.isScrolling && this.emit("touchMoveOpposite", o), t.startMoving === void 0 && (i.currentX === i.startX && i.currentY === i.startY || (t.startMoving = !0)), t.isScrolling) t.isTouched = !1;
						else if (t.startMoving) {
							this.allowClick = !1, !s.cssMode && o.cancelable && o.preventDefault(), s.touchMoveStopPropagation && !s.nested && o.stopPropagation(), t.isMoved || (s.loop && this.loopFix(), t.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), t.allowMomentumBounce = !1, !s.grabCursor || this.allowSlideNext !== !0 && this.allowSlidePrev !== !0 || this.setGrabCursor(!0), this.emit("sliderFirstMove", o)), this.emit("sliderMove", o), t.isMoved = !0;
							var C = this.isHorizontal() ? g : S;
							i.diff = C, C *= s.touchRatio, l && (C = -C), this.swipeDirection = C > 0 ? "prev" : "next", t.currentTranslate = C + t.startTranslate;
							var M = !0,
								k = s.resistanceRatio;
							if (s.touchReleaseOnEdges && (k = 0), C > 0 && t.currentTranslate > this.minTranslate() ? (M = !1, s.resistance && (t.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + t.startTranslate + C, k))) : C < 0 && t.currentTranslate < this.maxTranslate() && (M = !1, s.resistance && (t.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - t.startTranslate - C, k))), M && (o.preventedByNestedSwiper = !0), !this.allowSlideNext && this.swipeDirection === "next" && t.currentTranslate < t.startTranslate && (t.currentTranslate = t.startTranslate), !this.allowSlidePrev && this.swipeDirection === "prev" && t.currentTranslate > t.startTranslate && (t.currentTranslate = t.startTranslate), s.threshold > 0) {
								if (!(Math.abs(C) > s.threshold || t.allowThresholdMove)) return void(t.currentTranslate = t.startTranslate);
								if (!t.allowThresholdMove) return t.allowThresholdMove = !0, i.startX = i.currentX, i.startY = i.currentY, t.currentTranslate = t.startTranslate, void(i.diff = this.isHorizontal() ? i.currentX - i.startX : i.currentY - i.startY)
							}
							s.followFinger && !s.cssMode && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), s.freeMode && (t.velocities.length === 0 && t.velocities.push({
								position: i[this.isHorizontal() ? "startX" : "startY"],
								time: t.touchStartTime
							}), t.velocities.push({
								position: i[this.isHorizontal() ? "currentX" : "currentY"],
								time: m.now()
							})), this.updateProgress(t.currentTranslate), this.setTranslate(t.currentTranslate))
						}
					}
				}
			}
		} else t.startMoving && t.isScrolling && this.emit("touchMoveOpposite", o)
	}

	function tt(e) {
		var t = this,
			s = t.touchEventsData,
			i = t.params,
			l = t.touches,
			o = t.rtlTranslate,
			h = t.$wrapperEl,
			v = t.slidesGrid,
			f = t.snapGrid,
			g = e;
		if (g.originalEvent && (g = g.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", g), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && i.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void(s.startMoving = !1);
		i.grabCursor && s.isMoved && s.isTouched && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!1);
		var S, A = m.now(),
			C = A - s.touchStartTime;
		if (t.allowClick && (t.updateClickedSlide(g), t.emit("tap click", g), C < 300 && A - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", g)), s.lastClickTime = m.now(), m.nextTick((function() {
				t.destroyed || (t.allowClick = !0)
			})), !s.isTouched || !s.isMoved || !t.swipeDirection || l.diff === 0 || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void(s.startMoving = !1);
		if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, S = i.followFinger ? o ? t.translate : -t.translate : -s.currentTranslate, !i.cssMode)
			if (i.freeMode) {
				if (S < -t.minTranslate()) return void t.slideTo(t.activeIndex);
				if (S > -t.maxTranslate()) return void(t.slides.length < f.length ? t.slideTo(f.length - 1) : t.slideTo(t.slides.length - 1));
				if (i.freeModeMomentum) {
					if (s.velocities.length > 1) {
						var M = s.velocities.pop(),
							k = s.velocities.pop(),
							$ = M.position - k.position,
							H = M.time - k.time;
						t.velocity = $ / H, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (H > 150 || m.now() - M.time > 300) && (t.velocity = 0)
					} else t.velocity = 0;
					t.velocity *= i.freeModeMomentumVelocityRatio, s.velocities.length = 0;
					var I = 1e3 * i.freeModeMomentumRatio,
						z = t.velocity * I,
						_ = t.translate + z;
					o && (_ = -_);
					var q, oe, X = !1,
						ge = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
					if (_ < t.maxTranslate()) i.freeModeMomentumBounce ? (_ + t.maxTranslate() < -ge && (_ = t.maxTranslate() - ge), q = t.maxTranslate(), X = !0, s.allowMomentumBounce = !0) : _ = t.maxTranslate(), i.loop && i.centeredSlides && (oe = !0);
					else if (_ > t.minTranslate()) i.freeModeMomentumBounce ? (_ - t.minTranslate() > ge && (_ = t.minTranslate() + ge), q = t.minTranslate(), X = !0, s.allowMomentumBounce = !0) : _ = t.minTranslate(), i.loop && i.centeredSlides && (oe = !0);
					else if (i.freeModeSticky) {
						for (var D, b = 0; b < f.length; b += 1)
							if (f[b] > -_) {
								D = b;
								break
							} _ = -(_ = Math.abs(f[D] - _) < Math.abs(f[D - 1] - _) || t.swipeDirection === "next" ? f[D] : f[D - 1])
					}
					if (oe && t.once("transitionEnd", (function() {
							t.loopFix()
						})), t.velocity !== 0) {
						if (I = Math.abs(o ? (-_ - t.translate) / t.velocity : (_ - t.translate) / t.velocity), i.freeModeSticky) {
							var L = Math.abs((o ? -_ : _) - t.translate),
								P = t.slidesSizesGrid[t.activeIndex];
							I = L < P ? i.speed : L < 2 * P ? 1.5 * i.speed : 2.5 * i.speed
						}
					} else if (i.freeModeSticky) return void t.slideToClosest();
					i.freeModeMomentumBounce && X ? (t.updateProgress(q), t.setTransition(I), t.setTranslate(_), t.transitionStart(!0, t.swipeDirection), t.animating = !0, h.transitionEnd((function() {
						t && !t.destroyed && s.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), setTimeout((function() {
							t.setTranslate(q), h.transitionEnd((function() {
								t && !t.destroyed && t.transitionEnd()
							}))
						}), 0))
					}))) : t.velocity ? (t.updateProgress(_), t.setTransition(I), t.setTranslate(_), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, h.transitionEnd((function() {
						t && !t.destroyed && t.transitionEnd()
					})))) : t.updateProgress(_), t.updateActiveIndex(), t.updateSlidesClasses()
				} else if (i.freeModeSticky) return void t.slideToClosest();
				(!i.freeModeMomentum || C >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
			} else {
				for (var G = 0, se = t.slidesSizesGrid[0], Z = 0; Z < v.length; Z += Z < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
					var pe = Z < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
					v[Z + pe] !== void 0 ? S >= v[Z] && S < v[Z + pe] && (G = Z, se = v[Z + pe] - v[Z]) : S >= v[Z] && (G = Z, se = v[v.length - 1] - v[v.length - 2])
				}
				var ke = (S - v[G]) / se,
					qe = G < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
				if (C > i.longSwipesMs) {
					if (!i.longSwipes) return void t.slideTo(t.activeIndex);
					t.swipeDirection === "next" && (ke >= i.longSwipesRatio ? t.slideTo(G + qe) : t.slideTo(G)), t.swipeDirection === "prev" && (ke > 1 - i.longSwipesRatio ? t.slideTo(G + qe) : t.slideTo(G))
				} else {
					if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
					t.navigation && (g.target === t.navigation.nextEl || g.target === t.navigation.prevEl) ? g.target === t.navigation.nextEl ? t.slideTo(G + qe) : t.slideTo(G) : (t.swipeDirection === "next" && t.slideTo(G + qe), t.swipeDirection === "prev" && t.slideTo(G))
				}
			}
	}

	function de() {
		var e = this.params,
			t = this.el;
		if (!t || t.offsetWidth !== 0) {
			e.breakpoints && this.setBreakpoint();
			var s = this.allowSlideNext,
				i = this.allowSlidePrev,
				l = this.snapGrid;
			this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), this.updateSlidesClasses(), (e.slidesPerView === "auto" || e.slidesPerView > 1) && this.isEnd && !this.isBeginning && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0), this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), this.allowSlidePrev = i, this.allowSlideNext = s, this.params.watchOverflow && l !== this.snapGrid && this.checkOverflow()
		}
	}

	function Pe(e) {
		this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
	}

	function ne() {
		var e = this.wrapperEl,
			t = this.rtlTranslate;
		this.previousTranslate = this.translate, this.isHorizontal() ? this.translate = t ? e.scrollWidth - e.offsetWidth - e.scrollLeft : -e.scrollLeft : this.translate = -e.scrollTop, this.translate === -0 && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
		var s = this.maxTranslate() - this.minTranslate();
		(s === 0 ? 0 : (this.translate - this.minTranslate()) / s) !== this.progress && this.updateProgress(t ? -this.translate : this.translate), this.emit("setTranslate", this.translate, !1)
	}
	var Ae = !1;

	function ye() {}
	var ve = {
			init: !0,
			direction: "horizontal",
			touchEventsTarget: "container",
			initialSlide: 0,
			speed: 300,
			cssMode: !1,
			updateOnWindowResize: !0,
			preventInteractionOnTransition: !1,
			edgeSwipeDetection: !1,
			edgeSwipeThreshold: 20,
			freeMode: !1,
			freeModeMomentum: !0,
			freeModeMomentumRatio: 1,
			freeModeMomentumBounce: !0,
			freeModeMomentumBounceRatio: 1,
			freeModeMomentumVelocityRatio: 1,
			freeModeSticky: !1,
			freeModeMinimumVelocity: .02,
			autoHeight: !1,
			setWrapperSize: !1,
			virtualTranslate: !1,
			effect: "slide",
			breakpoints: void 0,
			spaceBetween: 0,
			slidesPerView: 1,
			slidesPerColumn: 1,
			slidesPerColumnFill: "column",
			slidesPerGroup: 1,
			slidesPerGroupSkip: 0,
			centeredSlides: !1,
			centeredSlidesBounds: !1,
			slidesOffsetBefore: 0,
			slidesOffsetAfter: 0,
			normalizeSlideIndex: !0,
			centerInsufficientSlides: !1,
			watchOverflow: !1,
			roundLengths: !1,
			touchRatio: 1,
			touchAngle: 45,
			simulateTouch: !0,
			shortSwipes: !0,
			longSwipes: !0,
			longSwipesRatio: .5,
			longSwipesMs: 300,
			followFinger: !0,
			allowTouchMove: !0,
			threshold: 0,
			touchMoveStopPropagation: !1,
			touchStartPreventDefault: !0,
			touchStartForcePreventDefault: !1,
			touchReleaseOnEdges: !1,
			uniqueNavElements: !0,
			resistance: !0,
			resistanceRatio: .85,
			watchSlidesProgress: !1,
			watchSlidesVisibility: !1,
			grabCursor: !1,
			preventClicks: !0,
			preventClicksPropagation: !0,
			slideToClickedSlide: !1,
			preloadImages: !0,
			updateOnImagesReady: !0,
			loop: !1,
			loopAdditionalSlides: 0,
			loopedSlides: null,
			loopFillGroupWithBlank: !1,
			allowSlidePrev: !0,
			allowSlideNext: !0,
			swipeHandler: null,
			noSwiping: !0,
			noSwipingClass: "swiper-no-swiping",
			noSwipingSelector: null,
			passiveListeners: !0,
			containerModifierClass: "swiper-container-",
			slideClass: "swiper-slide",
			slideBlankClass: "swiper-slide-invisible-blank",
			slideActiveClass: "swiper-slide-active",
			slideDuplicateActiveClass: "swiper-slide-duplicate-active",
			slideVisibleClass: "swiper-slide-visible",
			slideDuplicateClass: "swiper-slide-duplicate",
			slideNextClass: "swiper-slide-next",
			slideDuplicateNextClass: "swiper-slide-duplicate-next",
			slidePrevClass: "swiper-slide-prev",
			slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
			wrapperClass: "swiper-wrapper",
			runCallbacksOnInit: !0
		},
		Se = {
			update: U,
			translate: O,
			transition: W,
			slide: N,
			loop: ie,
			grabCursor: ce,
			manipulation: Ye,
			events: {
				attachEvents: function() {
					var e = this.params,
						t = this.touchEvents,
						s = this.el,
						i = this.wrapperEl;
					this.onTouchStart = it.bind(this), this.onTouchMove = be.bind(this), this.onTouchEnd = tt.bind(this), e.cssMode && (this.onScroll = ne.bind(this)), this.onClick = Pe.bind(this);
					var l = !!e.nested;
					if (!y.touch && y.pointerEvents) s.addEventListener(t.start, this.onTouchStart, !1), r.addEventListener(t.move, this.onTouchMove, l), r.addEventListener(t.end, this.onTouchEnd, !1);
					else {
						if (y.touch) {
							var o = !(t.start !== "touchstart" || !y.passiveListener || !e.passiveListeners) && {
								passive: !0,
								capture: !1
							};
							s.addEventListener(t.start, this.onTouchStart, o), s.addEventListener(t.move, this.onTouchMove, y.passiveListener ? {
								passive: !1,
								capture: l
							} : l), s.addEventListener(t.end, this.onTouchEnd, o), t.cancel && s.addEventListener(t.cancel, this.onTouchEnd, o), Ae || (r.addEventListener("touchstart", ye), Ae = !0)
						}(e.simulateTouch && !fe.ios && !fe.android || e.simulateTouch && !y.touch && fe.ios) && (s.addEventListener("mousedown", this.onTouchStart, !1), r.addEventListener("mousemove", this.onTouchMove, l), r.addEventListener("mouseup", this.onTouchEnd, !1))
					}(e.preventClicks || e.preventClicksPropagation) && s.addEventListener("click", this.onClick, !0), e.cssMode && i.addEventListener("scroll", this.onScroll), e.updateOnWindowResize ? this.on(fe.ios || fe.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", de, !0) : this.on("observerUpdate", de, !0)
				},
				detachEvents: function() {
					var e = this.params,
						t = this.touchEvents,
						s = this.el,
						i = this.wrapperEl,
						l = !!e.nested;
					if (!y.touch && y.pointerEvents) s.removeEventListener(t.start, this.onTouchStart, !1), r.removeEventListener(t.move, this.onTouchMove, l), r.removeEventListener(t.end, this.onTouchEnd, !1);
					else {
						if (y.touch) {
							var o = !(t.start !== "onTouchStart" || !y.passiveListener || !e.passiveListeners) && {
								passive: !0,
								capture: !1
							};
							s.removeEventListener(t.start, this.onTouchStart, o), s.removeEventListener(t.move, this.onTouchMove, l), s.removeEventListener(t.end, this.onTouchEnd, o), t.cancel && s.removeEventListener(t.cancel, this.onTouchEnd, o)
						}(e.simulateTouch && !fe.ios && !fe.android || e.simulateTouch && !y.touch && fe.ios) && (s.removeEventListener("mousedown", this.onTouchStart, !1), r.removeEventListener("mousemove", this.onTouchMove, l), r.removeEventListener("mouseup", this.onTouchEnd, !1))
					}(e.preventClicks || e.preventClicksPropagation) && s.removeEventListener("click", this.onClick, !0), e.cssMode && i.removeEventListener("scroll", this.onScroll), this.off(fe.ios || fe.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", de)
				}
			},
			breakpoints: {
				setBreakpoint: function() {
					var e = this.activeIndex,
						t = this.initialized,
						s = this.loopedSlides;
					s === void 0 && (s = 0);
					var i = this.params,
						l = this.$el,
						o = i.breakpoints;
					if (o && (!o || Object.keys(o).length !== 0)) {
						var h = this.getBreakpoint(o);
						if (h && this.currentBreakpoint !== h) {
							var v = h in o ? o[h] : void 0;
							v && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach((function(M) {
								var k = v[M];
								k !== void 0 && (v[M] = M !== "slidesPerView" || k !== "AUTO" && k !== "auto" ? M === "slidesPerView" ? parseFloat(k) : parseInt(k, 10) : "auto")
							}));
							var f = v || this.originalParams,
								g = i.slidesPerColumn > 1,
								S = f.slidesPerColumn > 1;
							g && !S ? l.removeClass(i.containerModifierClass + "multirow " + i.containerModifierClass + "multirow-column") : !g && S && (l.addClass(i.containerModifierClass + "multirow"), f.slidesPerColumnFill === "column" && l.addClass(i.containerModifierClass + "multirow-column"));
							var A = f.direction && f.direction !== i.direction,
								C = i.loop && (f.slidesPerView !== i.slidesPerView || A);
							A && t && this.changeDirection(), m.extend(this.params, f), m.extend(this, {
								allowTouchMove: this.params.allowTouchMove,
								allowSlideNext: this.params.allowSlideNext,
								allowSlidePrev: this.params.allowSlidePrev
							}), this.currentBreakpoint = h, C && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - s + this.loopedSlides, 0, !1)), this.emit("breakpoint", f)
						}
					}
				},
				getBreakpoint: function(e) {
					if (e) {
						var t = !1,
							s = Object.keys(e).map((function(h) {
								if (typeof h == "string" && h.indexOf("@") === 0) {
									var v = parseFloat(h.substr(1));
									return {
										value: c.innerHeight * v,
										point: h
									}
								}
								return {
									value: h,
									point: h
								}
							}));
						s.sort((function(h, v) {
							return parseInt(h.value, 10) - parseInt(v.value, 10)
						}));
						for (var i = 0; i < s.length; i += 1) {
							var l = s[i],
								o = l.point;
							l.value <= c.innerWidth && (t = o)
						}
						return t || "max"
					}
				}
			},
			checkOverflow: {
				checkOverflow: function() {
					var e = this.params,
						t = this.isLocked,
						s = this.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
					e.slidesOffsetBefore && e.slidesOffsetAfter && s ? this.isLocked = s <= this.size : this.isLocked = this.snapGrid.length === 1, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), t && t !== this.isLocked && (this.isEnd = !1, this.navigation && this.navigation.update())
				}
			},
			classes: {
				addClasses: function() {
					var e = this.classNames,
						t = this.params,
						s = this.rtl,
						i = this.$el,
						l = [];
					l.push("initialized"), l.push(t.direction), t.freeMode && l.push("free-mode"), t.autoHeight && l.push("autoheight"), s && l.push("rtl"), t.slidesPerColumn > 1 && (l.push("multirow"), t.slidesPerColumnFill === "column" && l.push("multirow-column")), fe.android && l.push("android"), fe.ios && l.push("ios"), t.cssMode && l.push("css-mode"), l.forEach((function(o) {
						e.push(t.containerModifierClass + o)
					})), i.addClass(e.join(" "))
				},
				removeClasses: function() {
					var e = this.$el,
						t = this.classNames;
					e.removeClass(t.join(" "))
				}
			},
			images: {
				loadImage: function(e, t, s, i, l, o) {
					var h;

					function v() {
						o && o()
					}
					u(e).parent("picture")[0] || e.complete && l ? v() : t ? ((h = new c.Image).onload = v, h.onerror = v, i && (h.sizes = i), s && (h.srcset = s), t && (h.src = t)) : v()
				},
				preloadImages: function() {
					var e = this;

					function t() {
						e != null && e && !e.destroyed && (e.imagesLoaded !== void 0 && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
					}
					e.imagesToLoad = e.$el.find("img");
					for (var s = 0; s < e.imagesToLoad.length; s += 1) {
						var i = e.imagesToLoad[s];
						e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
					}
				}
			}
		},
		De = {},
		we = (function(e) {
			function t() {
				for (var i, l, o, h = [], v = arguments.length; v--;) h[v] = arguments[v];
				h.length === 1 && h[0].constructor && h[0].constructor === Object ? o = h[0] : (l = (i = h)[0], o = i[1]), o || (o = {}), o = m.extend({}, o), l && !o.el && (o.el = l), e.call(this, o), Object.keys(Se).forEach((function($) {
					Object.keys(Se[$]).forEach((function(H) {
						t.prototype[H] || (t.prototype[H] = Se[$][H])
					}))
				}));
				var f = this;
				f.modules === void 0 && (f.modules = {}), Object.keys(f.modules).forEach((function($) {
					var H = f.modules[$];
					if (H.params) {
						var I = Object.keys(H.params)[0],
							z = H.params[I];
						if (typeof z != "object" || z === null || !(I in o) || !("enabled" in z)) return;
						o[I] === !0 && (o[I] = {
							enabled: !0
						}), typeof o[I] != "object" || "enabled" in o[I] || (o[I].enabled = !0), o[I] || (o[I] = {
							enabled: !1
						})
					}
				}));
				var g = m.extend({}, ve);
				f.useModulesParams(g), f.params = m.extend({}, g, De, o), f.originalParams = m.extend({}, f.params), f.passedParams = m.extend({}, o), f.$ = u;
				var S = u(f.params.el);
				if (l = S[0]) {
					if (S.length > 1) {
						var A = [];
						return S.each((function($, H) {
							var I = m.extend({}, o, {
								el: H
							});
							A.push(new t(I))
						})), A
					}
					var C, M, k;
					return l.swiper = f, S.data("swiper", f), l && l.shadowRoot && l.shadowRoot.querySelector ? (C = u(l.shadowRoot.querySelector("." + f.params.wrapperClass))).children = function($) {
						return S.children($)
					} : C = S.children("." + f.params.wrapperClass), m.extend(f, {
						$el: S,
						el: l,
						$wrapperEl: C,
						wrapperEl: C[0],
						classNames: [],
						slides: u(),
						slidesGrid: [],
						snapGrid: [],
						slidesSizesGrid: [],
						isHorizontal: function() {
							return f.params.direction === "horizontal"
						},
						isVertical: function() {
							return f.params.direction === "vertical"
						},
						rtl: l.dir.toLowerCase() === "rtl" || S.css("direction") === "rtl",
						rtlTranslate: f.params.direction === "horizontal" && (l.dir.toLowerCase() === "rtl" || S.css("direction") === "rtl"),
						wrongRTL: C.css("display") === "-webkit-box",
						activeIndex: 0,
						realIndex: 0,
						isBeginning: !0,
						isEnd: !1,
						translate: 0,
						previousTranslate: 0,
						progress: 0,
						velocity: 0,
						animating: !1,
						allowSlideNext: f.params.allowSlideNext,
						allowSlidePrev: f.params.allowSlidePrev,
						touchEvents: (M = ["touchstart", "touchmove", "touchend", "touchcancel"], k = ["mousedown", "mousemove", "mouseup"], y.pointerEvents && (k = ["pointerdown", "pointermove", "pointerup"]), f.touchEventsTouch = {
							start: M[0],
							move: M[1],
							end: M[2],
							cancel: M[3]
						}, f.touchEventsDesktop = {
							start: k[0],
							move: k[1],
							end: k[2]
						}, y.touch || !f.params.simulateTouch ? f.touchEventsTouch : f.touchEventsDesktop),
						touchEventsData: {
							isTouched: void 0,
							isMoved: void 0,
							allowTouchCallbacks: void 0,
							touchStartTime: void 0,
							isScrolling: void 0,
							currentTranslate: void 0,
							startTranslate: void 0,
							allowThresholdMove: void 0,
							formElements: "input, select, option, textarea, button, video, label",
							lastClickTime: m.now(),
							clickTimeout: void 0,
							velocities: [],
							allowMomentumBounce: void 0,
							isTouchEvent: void 0,
							startMoving: void 0
						},
						allowClick: !0,
						allowTouchMove: f.params.allowTouchMove,
						touches: {
							startX: 0,
							startY: 0,
							currentX: 0,
							currentY: 0,
							diff: 0
						},
						imagesToLoad: [],
						imagesLoaded: 0
					}), f.useModules(), f.params.init && f.init(), f
				}
			}
			e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
			var s = {
				extendedDefaults: {
					configurable: !0
				},
				defaults: {
					configurable: !0
				},
				Class: {
					configurable: !0
				},
				$: {
					configurable: !0
				}
			};
			return t.prototype.slidesPerViewDynamic = function() {
				var i = this.params,
					l = this.slides,
					o = this.slidesGrid,
					h = this.size,
					v = this.activeIndex,
					f = 1;
				if (i.centeredSlides) {
					for (var g, S = l[v].swiperSlideSize, A = v + 1; A < l.length; A += 1) l[A] && !g && (f += 1, (S += l[A].swiperSlideSize) > h && (g = !0));
					for (var C = v - 1; C >= 0; C -= 1) l[C] && !g && (f += 1, (S += l[C].swiperSlideSize) > h && (g = !0))
				} else
					for (var M = v + 1; M < l.length; M += 1) o[M] - o[v] < h && (f += 1);
				return f
			}, t.prototype.update = function() {
				var i = this;
				if (i && !i.destroyed) {
					var l = i.snapGrid,
						o = i.params;
					o.breakpoints && i.setBreakpoint(), i.updateSize(), i.updateSlides(), i.updateProgress(), i.updateSlidesClasses(), i.params.freeMode ? (h(), i.params.autoHeight && i.updateAutoHeight()) : ((i.params.slidesPerView === "auto" || i.params.slidesPerView > 1) && i.isEnd && !i.params.centeredSlides ? i.slideTo(i.slides.length - 1, 0, !1, !0) : i.slideTo(i.activeIndex, 0, !1, !0)) || h(), o.watchOverflow && l !== i.snapGrid && i.checkOverflow(), i.emit("update")
				}

				function h() {
					var v = i.rtlTranslate ? -1 * i.translate : i.translate,
						f = Math.min(Math.max(v, i.maxTranslate()), i.minTranslate());
					i.setTranslate(f), i.updateActiveIndex(), i.updateSlidesClasses()
				}
			}, t.prototype.changeDirection = function(i, l) {
				l === void 0 && (l = !0);
				var o = this.params.direction;
				return i || (i = o === "horizontal" ? "vertical" : "horizontal"), i === o || i !== "horizontal" && i !== "vertical" || (this.$el.removeClass("" + this.params.containerModifierClass + o).addClass("" + this.params.containerModifierClass + i), this.params.direction = i, this.slides.each((function(h, v) {
					i === "vertical" ? v.style.width = "" : v.style.height = ""
				})), this.emit("changeDirection"), l && this.update()), this
			}, t.prototype.init = function() {
				this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"))
			}, t.prototype.destroy = function(i, l) {
				i === void 0 && (i = !0), l === void 0 && (l = !0);
				var o = this,
					h = o.params,
					v = o.$el,
					f = o.$wrapperEl,
					g = o.slides;
				return o.params === void 0 || o.destroyed || (o.emit("beforeDestroy"), o.initialized = !1, o.detachEvents(), h.loop && o.loopDestroy(), l && (o.removeClasses(), v.removeAttr("style"), f.removeAttr("style"), g && g.length && g.removeClass([h.slideVisibleClass, h.slideActiveClass, h.slideNextClass, h.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), o.emit("destroy"), Object.keys(o.eventsListeners).forEach((function(S) {
					o.off(S)
				})), i !== !1 && (o.$el[0].swiper = null, o.$el.data("swiper", null), m.deleteProps(o)), o.destroyed = !0), null
			}, t.extendDefaults = function(i) {
				m.extend(De, i)
			}, s.extendedDefaults.get = function() {
				return De
			}, s.defaults.get = function() {
				return ve
			}, s.Class.get = function() {
				return e
			}, s.$.get = function() {
				return u
			}, Object.defineProperties(t, s), t
		})(E),
		Oe = {
			name: "device",
			proto: {
				device: fe
			},
			static: {
				device: fe
			}
		},
		ue = {
			name: "support",
			proto: {
				support: y
			},
			static: {
				support: y
			}
		},
		Q = {
			isEdge: !!c.navigator.userAgent.match(/Edge/g),
			isSafari: (function() {
				var e = c.navigator.userAgent.toLowerCase();
				return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
			})(),
			isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(c.navigator.userAgent)
		},
		Ce = {
			name: "browser",
			proto: {
				browser: Q
			},
			static: {
				browser: Q
			}
		},
		Be = {
			name: "resize",
			create: function() {
				var e = this;
				m.extend(e, {
					resize: {
						resizeHandler: function() {
							e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
						},
						orientationChangeHandler: function() {
							e && !e.destroyed && e.initialized && e.emit("orientationchange")
						}
					}
				})
			},
			on: {
				init: function() {
					c.addEventListener("resize", this.resize.resizeHandler), c.addEventListener("orientationchange", this.resize.orientationChangeHandler)
				},
				destroy: function() {
					c.removeEventListener("resize", this.resize.resizeHandler), c.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
				}
			}
		},
		Fe = {
			func: c.MutationObserver || c.WebkitMutationObserver,
			attach: function(e, t) {
				t === void 0 && (t = {});
				var s = this,
					i = new Fe.func((function(l) {
						if (l.length !== 1) {
							var o = function() {
								s.emit("observerUpdate", l[0])
							};
							c.requestAnimationFrame ? c.requestAnimationFrame(o) : c.setTimeout(o, 0)
						} else s.emit("observerUpdate", l[0])
					}));
				i.observe(e, {
					attributes: t.attributes === void 0 || t.attributes,
					childList: t.childList === void 0 || t.childList,
					characterData: t.characterData === void 0 || t.characterData
				}), s.observer.observers.push(i)
			},
			init: function() {
				if (y.observer && this.params.observer) {
					if (this.params.observeParents)
						for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
					this.observer.attach(this.$el[0], {
						childList: this.params.observeSlideChildren
					}), this.observer.attach(this.$wrapperEl[0], {
						attributes: !1
					})
				}
			},
			destroy: function() {
				this.observer.observers.forEach((function(e) {
					e.disconnect()
				})), this.observer.observers = []
			}
		},
		ft = {
			name: "observer",
			params: {
				observer: !1,
				observeParents: !1,
				observeSlideChildren: !1
			},
			create: function() {
				m.extend(this, {
					observer: {
						init: Fe.init.bind(this),
						attach: Fe.attach.bind(this),
						destroy: Fe.destroy.bind(this),
						observers: []
					}
				})
			},
			on: {
				init: function() {
					this.observer.init()
				},
				destroy: function() {
					this.observer.destroy()
				}
			}
		},
		Ke = {
			update: function(e) {
				var t = this,
					s = t.params,
					i = s.slidesPerView,
					l = s.slidesPerGroup,
					o = s.centeredSlides,
					h = t.params.virtual,
					v = h.addSlidesBefore,
					f = h.addSlidesAfter,
					g = t.virtual,
					S = g.from,
					A = g.to,
					C = g.slides,
					M = g.slidesGrid,
					k = g.renderSlide,
					$ = g.offset;
				t.updateActiveIndex();
				var H, I, z, _ = t.activeIndex || 0;
				H = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", o ? (I = Math.floor(i / 2) + l + v, z = Math.floor(i / 2) + l + f) : (I = i + (l - 1) + v, z = l + f);
				var q = Math.max((_ || 0) - z, 0),
					oe = Math.min((_ || 0) + I, C.length - 1),
					X = (t.slidesGrid[q] || 0) - (t.slidesGrid[0] || 0);

				function ge() {
					t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
				}
				if (m.extend(t.virtual, {
						from: q,
						to: oe,
						offset: X,
						slidesGrid: t.slidesGrid
					}), S === q && A === oe && !e) return t.slidesGrid !== M && X !== $ && t.slides.css(H, X + "px"), void t.updateProgress();
				if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
					offset: X,
					from: q,
					to: oe,
					slides: (function() {
						for (var G = [], se = q; se <= oe; se += 1) G.push(C[se]);
						return G
					})()
				}), void ge();
				var D = [],
					b = [];
				if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
				else
					for (var L = S; L <= A; L += 1)(L < q || L > oe) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + L + '"]').remove();
				for (var P = 0; P < C.length; P += 1) P >= q && P <= oe && (A === void 0 || e ? b.push(P) : (P > A && b.push(P), P < S && D.push(P)));
				b.forEach((function(G) {
					t.$wrapperEl.append(k(C[G], G))
				})), D.sort((function(G, se) {
					return se - G
				})).forEach((function(G) {
					t.$wrapperEl.prepend(k(C[G], G))
				})), t.$wrapperEl.children(".swiper-slide").css(H, X + "px"), ge()
			},
			renderSlide: function(e, t) {
				var s = this.params.virtual;
				if (s.cache && this.virtual.cache[t]) return this.virtual.cache[t];
				var i = s.renderSlide ? u(s.renderSlide.call(this, e, t)) : u('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
				return i.attr("data-swiper-slide-index") || i.attr("data-swiper-slide-index", t), s.cache && (this.virtual.cache[t] = i), i
			},
			appendSlide: function(e) {
				if (typeof e == "object" && "length" in e)
					for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t]);
				else this.virtual.slides.push(e);
				this.virtual.update(!0)
			},
			prependSlide: function(e) {
				var t = this.activeIndex,
					s = t + 1,
					i = 1;
				if (Array.isArray(e)) {
					for (var l = 0; l < e.length; l += 1) e[l] && this.virtual.slides.unshift(e[l]);
					s = t + e.length, i = e.length
				} else this.virtual.slides.unshift(e);
				if (this.params.virtual.cache) {
					var o = this.virtual.cache,
						h = {};
					Object.keys(o).forEach((function(v) {
						var f = o[v],
							g = f.attr("data-swiper-slide-index");
						g && f.attr("data-swiper-slide-index", parseInt(g, 10) + 1), h[parseInt(v, 10) + i] = f
					})), this.virtual.cache = h
				}
				this.virtual.update(!0), this.slideTo(s, 0)
			},
			removeSlide: function(e) {
				if (e != null) {
					var t = this.activeIndex;
					if (Array.isArray(e))
						for (var s = e.length - 1; s >= 0; s -= 1) this.virtual.slides.splice(e[s], 1), this.params.virtual.cache && delete this.virtual.cache[e[s]], e[s] < t && (t -= 1), t = Math.max(t, 0);
					else this.virtual.slides.splice(e, 1), this.params.virtual.cache && delete this.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
					this.virtual.update(!0), this.slideTo(t, 0)
				}
			},
			removeAllSlides: function() {
				this.virtual.slides = [], this.params.virtual.cache && (this.virtual.cache = {}), this.virtual.update(!0), this.slideTo(0, 0)
			}
		},
		Yt = {
			name: "virtual",
			params: {
				virtual: {
					enabled: !1,
					slides: [],
					cache: !0,
					renderSlide: null,
					renderExternal: null,
					addSlidesBefore: 0,
					addSlidesAfter: 0
				}
			},
			create: function() {
				m.extend(this, {
					virtual: {
						update: Ke.update.bind(this),
						appendSlide: Ke.appendSlide.bind(this),
						prependSlide: Ke.prependSlide.bind(this),
						removeSlide: Ke.removeSlide.bind(this),
						removeAllSlides: Ke.removeAllSlides.bind(this),
						renderSlide: Ke.renderSlide.bind(this),
						slides: this.params.virtual.slides,
						cache: {}
					}
				})
			},
			on: {
				beforeInit: function() {
					if (this.params.virtual.enabled) {
						this.classNames.push(this.params.containerModifierClass + "virtual");
						var e = {
							watchSlidesProgress: !0
						};
						m.extend(this.params, e), m.extend(this.originalParams, e), this.params.initialSlide || this.virtual.update()
					}
				},
				setTranslate: function() {
					this.params.virtual.enabled && this.virtual.update()
				}
			}
		},
		mt = {
			handle: function(e) {
				var t = this.rtlTranslate,
					s = e;
				s.originalEvent && (s = s.originalEvent);
				var i = s.keyCode || s.charCode,
					l = this.params.keyboard.pageUpDown,
					o = l && i === 33,
					h = l && i === 34,
					v = i === 37,
					f = i === 39,
					g = i === 38,
					S = i === 40;
				if (!this.allowSlideNext && (this.isHorizontal() && f || this.isVertical() && S || h) || !this.allowSlidePrev && (this.isHorizontal() && v || this.isVertical() && g || o)) return !1;
				if (!(s.shiftKey || s.altKey || s.ctrlKey || s.metaKey || r.activeElement && r.activeElement.nodeName && (r.activeElement.nodeName.toLowerCase() === "input" || r.activeElement.nodeName.toLowerCase() === "textarea"))) {
					if (this.params.keyboard.onlyInViewport && (o || h || v || f || g || S)) {
						var A = !1;
						if (this.$el.parents("." + this.params.slideClass).length > 0 && this.$el.parents("." + this.params.slideActiveClass).length === 0) return;
						var C = c.innerWidth,
							M = c.innerHeight,
							k = this.$el.offset();
						t && (k.left -= this.$el[0].scrollLeft);
						for (var $ = [
								[k.left, k.top],
								[k.left + this.width, k.top],
								[k.left, k.top + this.height],
								[k.left + this.width, k.top + this.height]
							], H = 0; H < $.length; H += 1) {
							var I = $[H];
							I[0] >= 0 && I[0] <= C && I[1] >= 0 && I[1] <= M && (A = !0)
						}
						if (!A) return
					}
					this.isHorizontal() ? ((o || h || v || f) && (s.preventDefault ? s.preventDefault() : s.returnValue = !1), ((h || f) && !t || (o || v) && t) && this.slideNext(), ((o || v) && !t || (h || f) && t) && this.slidePrev()) : ((o || h || g || S) && (s.preventDefault ? s.preventDefault() : s.returnValue = !1), (h || S) && this.slideNext(), (o || g) && this.slidePrev()), this.emit("keyPress", i)
				}
			},
			enable: function() {
				this.keyboard.enabled || (u(r).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
			},
			disable: function() {
				this.keyboard.enabled && (u(r).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
			}
		},
		ys = {
			name: "keyboard",
			params: {
				keyboard: {
					enabled: !1,
					onlyInViewport: !0,
					pageUpDown: !0
				}
			},
			create: function() {
				m.extend(this, {
					keyboard: {
						enabled: !1,
						enable: mt.enable.bind(this),
						disable: mt.disable.bind(this),
						handle: mt.handle.bind(this)
					}
				})
			},
			on: {
				init: function() {
					this.params.keyboard.enabled && this.keyboard.enable()
				},
				destroy: function() {
					this.keyboard.enabled && this.keyboard.disable()
				}
			}
		},
		He = {
			lastScrollTime: m.now(),
			lastEventBeforeSnap: void 0,
			recentWheelEvents: [],
			event: function() {
				return c.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : (function() {
					var e = "onwheel" in r;
					if (!e) {
						var t = r.createElement("div");
						t.setAttribute("onwheel", "return;"), e = typeof t.onwheel == "function"
					}
					return !e && r.implementation && r.implementation.hasFeature && r.implementation.hasFeature("", "") !== !0 && (e = r.implementation.hasFeature("Events.wheel", "3.0")), e
				})() ? "wheel" : "mousewheel"
			},
			normalize: function(e) {
				var t = 0,
					s = 0,
					i = 0,
					l = 0;
				return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s, s = 0), i = 10 * t, l = 10 * s, "deltaY" in e && (l = e.deltaY), "deltaX" in e && (i = e.deltaX), e.shiftKey && !i && (i = l, l = 0), (i || l) && e.deltaMode && (e.deltaMode === 1 ? (i *= 40, l *= 40) : (i *= 800, l *= 800)), i && !t && (t = i < 1 ? -1 : 1), l && !s && (s = l < 1 ? -1 : 1), {
					spinX: t,
					spinY: s,
					pixelX: i,
					pixelY: l
				}
			},
			handleMouseEnter: function() {
				this.mouseEntered = !0
			},
			handleMouseLeave: function() {
				this.mouseEntered = !1
			},
			handle: function(e) {
				var t = e,
					s = this,
					i = s.params.mousewheel;
				s.params.cssMode && t.preventDefault();
				var l = s.$el;
				if (s.params.mousewheel.eventsTarged !== "container" && (l = u(s.params.mousewheel.eventsTarged)), !s.mouseEntered && !l[0].contains(t.target) && !i.releaseOnEdges) return !0;
				t.originalEvent && (t = t.originalEvent);
				var o = 0,
					h = s.rtlTranslate ? -1 : 1,
					v = He.normalize(t);
				if (i.forceToAxis)
					if (s.isHorizontal()) {
						if (!(Math.abs(v.pixelX) > Math.abs(v.pixelY))) return !0;
						o = -v.pixelX * h
					} else {
						if (!(Math.abs(v.pixelY) > Math.abs(v.pixelX))) return !0;
						o = -v.pixelY
					}
				else o = Math.abs(v.pixelX) > Math.abs(v.pixelY) ? -v.pixelX * h : -v.pixelY;
				if (o === 0) return !0;
				if (i.invert && (o = -o), s.params.freeMode) {
					var f = {
							time: m.now(),
							delta: Math.abs(o),
							direction: Math.sign(o)
						},
						g = s.mousewheel.lastEventBeforeSnap,
						S = g && f.time < g.time + 500 && f.delta <= g.delta && f.direction === g.direction;
					if (!S) {
						s.mousewheel.lastEventBeforeSnap = void 0, s.params.loop && s.loopFix();
						var A = s.getTranslate() + o * i.sensitivity,
							C = s.isBeginning,
							M = s.isEnd;
						if (A >= s.minTranslate() && (A = s.minTranslate()), A <= s.maxTranslate() && (A = s.maxTranslate()), s.setTransition(0), s.setTranslate(A), s.updateProgress(), s.updateActiveIndex(), s.updateSlidesClasses(), (!C && s.isBeginning || !M && s.isEnd) && s.updateSlidesClasses(), s.params.freeModeSticky) {
							clearTimeout(s.mousewheel.timeout), s.mousewheel.timeout = void 0;
							var k = s.mousewheel.recentWheelEvents;
							k.length >= 15 && k.shift();
							var $ = k.length ? k[k.length - 1] : void 0,
								H = k[0];
							if (k.push(f), $ && (f.delta > $.delta || f.direction !== $.direction)) k.splice(0);
							else if (k.length >= 15 && f.time - H.time < 500 && H.delta - f.delta >= 1 && f.delta <= 6) {
								var I = o > 0 ? .8 : .2;
								s.mousewheel.lastEventBeforeSnap = f, k.splice(0), s.mousewheel.timeout = m.nextTick((function() {
									s.slideToClosest(s.params.speed, !0, void 0, I)
								}), 0)
							}
							s.mousewheel.timeout || (s.mousewheel.timeout = m.nextTick((function() {
								s.mousewheel.lastEventBeforeSnap = f, k.splice(0), s.slideToClosest(s.params.speed, !0, void 0, .5)
							}), 500))
						}
						if (S || s.emit("scroll", t), s.params.autoplay && s.params.autoplayDisableOnInteraction && s.autoplay.stop(), A === s.minTranslate() || A === s.maxTranslate()) return !0
					}
				} else {
					var z = {
							time: m.now(),
							delta: Math.abs(o),
							direction: Math.sign(o),
							raw: e
						},
						_ = s.mousewheel.recentWheelEvents;
					_.length >= 2 && _.shift();
					var q = _.length ? _[_.length - 1] : void 0;
					if (_.push(z), q ? (z.direction !== q.direction || z.delta > q.delta || z.time > q.time + 150) && s.mousewheel.animateSlider(z) : s.mousewheel.animateSlider(z), s.mousewheel.releaseScroll(z)) return !0
				}
				return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
			},
			animateSlider: function(e) {
				return e.delta >= 6 && m.now() - this.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? this.isEnd && !this.params.loop || this.animating || (this.slideNext(), this.emit("scroll", e.raw)) : this.isBeginning && !this.params.loop || this.animating || (this.slidePrev(), this.emit("scroll", e.raw)), this.mousewheel.lastScrollTime = new c.Date().getTime(), !1)
			},
			releaseScroll: function(e) {
				var t = this.params.mousewheel;
				if (e.direction < 0) {
					if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0
				} else if (this.isBeginning && !this.params.loop && t.releaseOnEdges) return !0;
				return !1
			},
			enable: function() {
				var e = He.event();
				if (this.params.cssMode) return this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0;
				if (this.mousewheel.enabled) return !1;
				var t = this.$el;
				return this.params.mousewheel.eventsTarged !== "container" && (t = u(this.params.mousewheel.eventsTarged)), t.on("mouseenter", this.mousewheel.handleMouseEnter), t.on("mouseleave", this.mousewheel.handleMouseLeave), t.on(e, this.mousewheel.handle), this.mousewheel.enabled = !0, !0
			},
			disable: function() {
				var e = He.event();
				if (this.params.cssMode) return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0;
				if (!this.mousewheel.enabled) return !1;
				var t = this.$el;
				return this.params.mousewheel.eventsTarged !== "container" && (t = u(this.params.mousewheel.eventsTarged)), t.off(e, this.mousewheel.handle), this.mousewheel.enabled = !1, !0
			}
		},
		Qe = {
			update: function() {
				var e = this.params.navigation;
				if (!this.params.loop) {
					var t = this.navigation,
						s = t.$nextEl,
						i = t.$prevEl;
					i && i.length > 0 && (this.isBeginning ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), s && s.length > 0 && (this.isEnd ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
				}
			},
			onPrevClick: function(e) {
				e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
			},
			onNextClick: function(e) {
				e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
			},
			init: function() {
				var e, t, s = this.params.navigation;
				(s.nextEl || s.prevEl) && (s.nextEl && (e = u(s.nextEl), this.params.uniqueNavElements && typeof s.nextEl == "string" && e.length > 1 && this.$el.find(s.nextEl).length === 1 && (e = this.$el.find(s.nextEl))), s.prevEl && (t = u(s.prevEl), this.params.uniqueNavElements && typeof s.prevEl == "string" && t.length > 1 && this.$el.find(s.prevEl).length === 1 && (t = this.$el.find(s.prevEl))), e && e.length > 0 && e.on("click", this.navigation.onNextClick), t && t.length > 0 && t.on("click", this.navigation.onPrevClick), m.extend(this.navigation, {
					$nextEl: e,
					nextEl: e && e[0],
					$prevEl: t,
					prevEl: t && t[0]
				}))
			},
			destroy: function() {
				var e = this.navigation,
					t = e.$nextEl,
					s = e.$prevEl;
				t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)), s && s.length && (s.off("click", this.navigation.onPrevClick), s.removeClass(this.params.navigation.disabledClass))
			}
		},
		Je = {
			update: function() {
				var e = this.rtl,
					t = this.params.pagination;
				if (t.el && this.pagination.el && this.pagination.$el && this.pagination.$el.length !== 0) {
					var s, i = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
						l = this.pagination.$el,
						o = this.params.loop ? Math.ceil((i - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
					if (this.params.loop ? ((s = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > i - 1 - 2 * this.loopedSlides && (s -= i - 2 * this.loopedSlides), s > o - 1 && (s -= o), s < 0 && this.params.paginationType !== "bullets" && (s = o + s)) : s = this.snapIndex !== void 0 ? this.snapIndex : this.activeIndex || 0, t.type === "bullets" && this.pagination.bullets && this.pagination.bullets.length > 0) {
						var h, v, f, g = this.pagination.bullets;
						if (t.dynamicBullets && (this.pagination.bulletSize = g.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), l.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && this.previousIndex !== void 0 && (this.pagination.dynamicBulletIndex += s - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), h = s - this.pagination.dynamicBulletIndex, f = ((v = h + (Math.min(g.length, t.dynamicMainBullets) - 1)) + h) / 2), g.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), l.length > 1) g.each((function(ge, D) {
							var b = u(D),
								L = b.index();
							L === s && b.addClass(t.bulletActiveClass), t.dynamicBullets && (L >= h && L <= v && b.addClass(t.bulletActiveClass + "-main"), L === h && b.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), L === v && b.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"))
						}));
						else {
							var S = g.eq(s),
								A = S.index();
							if (S.addClass(t.bulletActiveClass), t.dynamicBullets) {
								for (var C = g.eq(h), M = g.eq(v), k = h; k <= v; k += 1) g.eq(k).addClass(t.bulletActiveClass + "-main");
								if (this.params.loop)
									if (A >= g.length - t.dynamicMainBullets) {
										for (var $ = t.dynamicMainBullets; $ >= 0; $ -= 1) g.eq(g.length - $).addClass(t.bulletActiveClass + "-main");
										g.eq(g.length - t.dynamicMainBullets - 1).addClass(t.bulletActiveClass + "-prev")
									} else C.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), M.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
								else C.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), M.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next")
							}
						}
						if (t.dynamicBullets) {
							var H = Math.min(g.length, t.dynamicMainBullets + 4),
								I = (this.pagination.bulletSize * H - this.pagination.bulletSize) / 2 - f * this.pagination.bulletSize,
								z = e ? "right" : "left";
							g.css(this.isHorizontal() ? z : "top", I + "px")
						}
					}
					if (t.type === "fraction" && (l.find("." + t.currentClass).text(t.formatFractionCurrent(s + 1)), l.find("." + t.totalClass).text(t.formatFractionTotal(o))), t.type === "progressbar") {
						var _;
						_ = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
						var q = (s + 1) / o,
							oe = 1,
							X = 1;
						_ === "horizontal" ? oe = q : X = q, l.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + oe + ") scaleY(" + X + ")").transition(this.params.speed)
					}
					t.type === "custom" && t.renderCustom ? (l.html(t.renderCustom(this, s + 1, o)), this.emit("paginationRender", this, l[0])) : this.emit("paginationUpdate", this, l[0]), l[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass)
				}
			},
			render: function() {
				var e = this.params.pagination;
				if (e.el && this.pagination.el && this.pagination.$el && this.pagination.$el.length !== 0) {
					var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
						s = this.pagination.$el,
						i = "";
					if (e.type === "bullets") {
						for (var l = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, o = 0; o < l; o += 1) e.renderBullet ? i += e.renderBullet.call(this, o, e.bulletClass) : i += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
						s.html(i), this.pagination.bullets = s.find("." + e.bulletClass)
					}
					e.type === "fraction" && (i = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', s.html(i)), e.type === "progressbar" && (i = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', s.html(i)), e.type !== "custom" && this.emit("paginationRender", this.pagination.$el[0])
				}
			},
			init: function() {
				var e = this,
					t = e.params.pagination;
				if (t.el) {
					var s = u(t.el);
					s.length !== 0 && (e.params.uniqueNavElements && typeof t.el == "string" && s.length > 1 && (s = e.$el.find(t.el)), t.type === "bullets" && t.clickable && s.addClass(t.clickableClass), s.addClass(t.modifierClass + t.type), t.type === "bullets" && t.dynamicBullets && (s.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), t.type === "progressbar" && t.progressbarOpposite && s.addClass(t.progressbarOppositeClass), t.clickable && s.on("click", "." + t.bulletClass, (function(i) {
						i.preventDefault();
						var l = u(this).index() * e.params.slidesPerGroup;
						e.params.loop && (l += e.loopedSlides), e.slideTo(l)
					})), m.extend(e.pagination, {
						$el: s,
						el: s[0]
					}))
				}
			},
			destroy: function() {
				var e = this.params.pagination;
				if (e.el && this.pagination.el && this.pagination.$el && this.pagination.$el.length !== 0) {
					var t = this.pagination.$el;
					t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass)
				}
			}
		},
		Me = {
			setTranslate: function() {
				if (this.params.scrollbar.el && this.scrollbar.el) {
					var e = this.scrollbar,
						t = this.rtlTranslate,
						s = this.progress,
						i = e.dragSize,
						l = e.trackSize,
						o = e.$dragEl,
						h = e.$el,
						v = this.params.scrollbar,
						f = i,
						g = (l - i) * s;
					t ? (g = -g) > 0 ? (f = i - g, g = 0) : -g + i > l && (f = l + g) : g < 0 ? (f = i + g, g = 0) : g + i > l && (f = l - g), this.isHorizontal() ? (o.transform("translate3d(" + g + "px, 0, 0)"), o[0].style.width = f + "px") : (o.transform("translate3d(0px, " + g + "px, 0)"), o[0].style.height = f + "px"), v.hide && (clearTimeout(this.scrollbar.timeout), h[0].style.opacity = 1, this.scrollbar.timeout = setTimeout((function() {
						h[0].style.opacity = 0, h.transition(400)
					}), 1e3))
				}
			},
			setTransition: function(e) {
				this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
			},
			updateSize: function() {
				if (this.params.scrollbar.el && this.scrollbar.el) {
					var e = this.scrollbar,
						t = e.$dragEl,
						s = e.$el;
					t[0].style.width = "", t[0].style.height = "";
					var i, l = this.isHorizontal() ? s[0].offsetWidth : s[0].offsetHeight,
						o = this.size / this.virtualSize,
						h = o * (l / this.size);
					i = this.params.scrollbar.dragSize === "auto" ? l * o : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = i + "px" : t[0].style.height = i + "px", s[0].style.display = o >= 1 ? "none" : "", this.params.scrollbar.hide && (s[0].style.opacity = 0), m.extend(e, {
						trackSize: l,
						divider: o,
						moveDivider: h,
						dragSize: i
					}), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
				}
			},
			getPointerPosition: function(e) {
				return this.isHorizontal() ? e.type === "touchstart" || e.type === "touchmove" ? e.targetTouches[0].clientX : e.clientX : e.type === "touchstart" || e.type === "touchmove" ? e.targetTouches[0].clientY : e.clientY
			},
			setDragPosition: function(e) {
				var t, s = this.scrollbar,
					i = this.rtlTranslate,
					l = s.$el,
					o = s.dragSize,
					h = s.trackSize,
					v = s.dragStartPos;
				t = (s.getPointerPosition(e) - l.offset()[this.isHorizontal() ? "left" : "top"] - (v !== null ? v : o / 2)) / (h - o), t = Math.max(Math.min(t, 1), 0), i && (t = 1 - t);
				var f = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
				this.updateProgress(f), this.setTranslate(f), this.updateActiveIndex(), this.updateSlidesClasses()
			},
			onDragStart: function(e) {
				var t = this.params.scrollbar,
					s = this.scrollbar,
					i = this.$wrapperEl,
					l = s.$el,
					o = s.$dragEl;
				this.scrollbar.isTouched = !0, this.scrollbar.dragStartPos = e.target === o[0] || e.target === o ? s.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), i.transition(100), o.transition(100), s.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), l.transition(0), t.hide && l.css("opacity", 1), this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"), this.emit("scrollbarDragStart", e)
			},
			onDragMove: function(e) {
				var t = this.scrollbar,
					s = this.$wrapperEl,
					i = t.$el,
					l = t.$dragEl;
				this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), s.transition(0), i.transition(0), l.transition(0), this.emit("scrollbarDragMove", e))
			},
			onDragEnd: function(e) {
				var t = this.params.scrollbar,
					s = this.scrollbar,
					i = this.$wrapperEl,
					l = s.$el;
				this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""), i.transition("")), t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = m.nextTick((function() {
					l.css("opacity", 0), l.transition(400)
				}), 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest())
			},
			enableDraggable: function() {
				if (this.params.scrollbar.el) {
					var e = this.scrollbar,
						t = this.touchEventsTouch,
						s = this.touchEventsDesktop,
						i = this.params,
						l = e.$el[0],
						o = !(!y.passiveListener || !i.passiveListeners) && {
							passive: !1,
							capture: !1
						},
						h = !(!y.passiveListener || !i.passiveListeners) && {
							passive: !0,
							capture: !1
						};
					y.touch ? (l.addEventListener(t.start, this.scrollbar.onDragStart, o), l.addEventListener(t.move, this.scrollbar.onDragMove, o), l.addEventListener(t.end, this.scrollbar.onDragEnd, h)) : (l.addEventListener(s.start, this.scrollbar.onDragStart, o), r.addEventListener(s.move, this.scrollbar.onDragMove, o), r.addEventListener(s.end, this.scrollbar.onDragEnd, h))
				}
			},
			disableDraggable: function() {
				if (this.params.scrollbar.el) {
					var e = this.scrollbar,
						t = this.touchEventsTouch,
						s = this.touchEventsDesktop,
						i = this.params,
						l = e.$el[0],
						o = !(!y.passiveListener || !i.passiveListeners) && {
							passive: !1,
							capture: !1
						},
						h = !(!y.passiveListener || !i.passiveListeners) && {
							passive: !0,
							capture: !1
						};
					y.touch ? (l.removeEventListener(t.start, this.scrollbar.onDragStart, o), l.removeEventListener(t.move, this.scrollbar.onDragMove, o), l.removeEventListener(t.end, this.scrollbar.onDragEnd, h)) : (l.removeEventListener(s.start, this.scrollbar.onDragStart, o), r.removeEventListener(s.move, this.scrollbar.onDragMove, o), r.removeEventListener(s.end, this.scrollbar.onDragEnd, h))
				}
			},
			init: function() {
				if (this.params.scrollbar.el) {
					var e = this.scrollbar,
						t = this.$el,
						s = this.params.scrollbar,
						i = u(s.el);
					this.params.uniqueNavElements && typeof s.el == "string" && i.length > 1 && t.find(s.el).length === 1 && (i = t.find(s.el));
					var l = i.find("." + this.params.scrollbar.dragClass);
					l.length === 0 && (l = u('<div class="' + this.params.scrollbar.dragClass + '"></div>'), i.append(l)), m.extend(e, {
						$el: i,
						el: i[0],
						$dragEl: l,
						dragEl: l[0]
					}), s.draggable && e.enableDraggable()
				}
			},
			destroy: function() {
				this.scrollbar.disableDraggable()
			}
		},
		vt = {
			setTransform: function(e, t) {
				var s = this.rtl,
					i = u(e),
					l = s ? -1 : 1,
					o = i.attr("data-swiper-parallax") || "0",
					h = i.attr("data-swiper-parallax-x"),
					v = i.attr("data-swiper-parallax-y"),
					f = i.attr("data-swiper-parallax-scale"),
					g = i.attr("data-swiper-parallax-opacity");
				if (h || v ? (h = h || "0", v = v || "0") : this.isHorizontal() ? (h = o, v = "0") : (v = o, h = "0"), h = h.indexOf("%") >= 0 ? parseInt(h, 10) * t * l + "%" : h * t * l + "px", v = v.indexOf("%") >= 0 ? parseInt(v, 10) * t + "%" : v * t + "px", g != null) {
					var S = g - (g - 1) * (1 - Math.abs(t));
					i[0].style.opacity = S
				}
				if (f == null) i.transform("translate3d(" + h + ", " + v + ", 0px)");
				else {
					var A = f - (f - 1) * (1 - Math.abs(t));
					i.transform("translate3d(" + h + ", " + v + ", 0px) scale(" + A + ")")
				}
			},
			setTranslate: function() {
				var e = this,
					t = e.$el,
					s = e.slides,
					i = e.progress,
					l = e.snapGrid;
				t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(o, h) {
					e.parallax.setTransform(h, i)
				})), s.each((function(o, h) {
					var v = h.progress;
					e.params.slidesPerGroup > 1 && e.params.slidesPerView !== "auto" && (v += Math.ceil(o / 2) - i * (l.length - 1)), v = Math.min(Math.max(v, -1), 1), u(h).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(f, g) {
						e.parallax.setTransform(g, v)
					}))
				}))
			},
			setTransition: function(e) {
				e === void 0 && (e = this.params.speed), this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t, s) {
					var i = u(s),
						l = parseInt(i.attr("data-swiper-parallax-duration"), 10) || e;
					e === 0 && (l = 0), i.transition(l)
				}))
			}
		},
		gt = {
			getDistanceBetweenTouches: function(e) {
				if (e.targetTouches.length < 2) return 1;
				var t = e.targetTouches[0].pageX,
					s = e.targetTouches[0].pageY,
					i = e.targetTouches[1].pageX,
					l = e.targetTouches[1].pageY;
				return Math.sqrt(Math.pow(i - t, 2) + Math.pow(l - s, 2))
			},
			onGestureStart: function(e) {
				var t = this.params.zoom,
					s = this.zoom,
					i = s.gesture;
				if (s.fakeGestureTouched = !1, s.fakeGestureMoved = !1, !y.gestures) {
					if (e.type !== "touchstart" || e.type === "touchstart" && e.targetTouches.length < 2) return;
					s.fakeGestureTouched = !0, i.scaleStart = gt.getDistanceBetweenTouches(e)
				}
				i.$slideEl && i.$slideEl.length || (i.$slideEl = u(e.target).closest("." + this.params.slideClass), i.$slideEl.length === 0 && (i.$slideEl = this.slides.eq(this.activeIndex)), i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass), i.maxRatio = i.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio, i.$imageWrapEl.length !== 0) ? (i.$imageEl && i.$imageEl.transition(0), this.zoom.isScaling = !0) : i.$imageEl = void 0
			},
			onGestureChange: function(e) {
				var t = this.params.zoom,
					s = this.zoom,
					i = s.gesture;
				if (!y.gestures) {
					if (e.type !== "touchmove" || e.type === "touchmove" && e.targetTouches.length < 2) return;
					s.fakeGestureMoved = !0, i.scaleMove = gt.getDistanceBetweenTouches(e)
				}
				i.$imageEl && i.$imageEl.length !== 0 && (s.scale = y.gestures ? e.scale * s.currentScale : i.scaleMove / i.scaleStart * s.currentScale, s.scale > i.maxRatio && (s.scale = i.maxRatio - 1 + Math.pow(s.scale - i.maxRatio + 1, .5)), s.scale < t.minRatio && (s.scale = t.minRatio + 1 - Math.pow(t.minRatio - s.scale + 1, .5)), i.$imageEl.transform("translate3d(0,0,0) scale(" + s.scale + ")"))
			},
			onGestureEnd: function(e) {
				var t = this.params.zoom,
					s = this.zoom,
					i = s.gesture;
				if (!y.gestures) {
					if (!s.fakeGestureTouched || !s.fakeGestureMoved || e.type !== "touchend" || e.type === "touchend" && e.changedTouches.length < 2 && !fe.android) return;
					s.fakeGestureTouched = !1, s.fakeGestureMoved = !1
				}
				i.$imageEl && i.$imageEl.length !== 0 && (s.scale = Math.max(Math.min(s.scale, i.maxRatio), t.minRatio), i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + s.scale + ")"), s.currentScale = s.scale, s.isScaling = !1, s.scale === 1 && (i.$slideEl = void 0))
			},
			onTouchStart: function(e) {
				var t = this.zoom,
					s = t.gesture,
					i = t.image;
				s.$imageEl && s.$imageEl.length !== 0 && (i.isTouched || (fe.android && e.cancelable && e.preventDefault(), i.isTouched = !0, i.touchesStart.x = e.type === "touchstart" ? e.targetTouches[0].pageX : e.pageX, i.touchesStart.y = e.type === "touchstart" ? e.targetTouches[0].pageY : e.pageY))
			},
			onTouchMove: function(e) {
				var t = this.zoom,
					s = t.gesture,
					i = t.image,
					l = t.velocity;
				if (s.$imageEl && s.$imageEl.length !== 0 && (this.allowClick = !1, i.isTouched && s.$slideEl)) {
					i.isMoved || (i.width = s.$imageEl[0].offsetWidth, i.height = s.$imageEl[0].offsetHeight, i.startX = m.getTranslate(s.$imageWrapEl[0], "x") || 0, i.startY = m.getTranslate(s.$imageWrapEl[0], "y") || 0, s.slideWidth = s.$slideEl[0].offsetWidth, s.slideHeight = s.$slideEl[0].offsetHeight, s.$imageWrapEl.transition(0), this.rtl && (i.startX = -i.startX, i.startY = -i.startY));
					var o = i.width * t.scale,
						h = i.height * t.scale;
					if (!(o < s.slideWidth && h < s.slideHeight)) {
						if (i.minX = Math.min(s.slideWidth / 2 - o / 2, 0), i.maxX = -i.minX, i.minY = Math.min(s.slideHeight / 2 - h / 2, 0), i.maxY = -i.minY, i.touchesCurrent.x = e.type === "touchmove" ? e.targetTouches[0].pageX : e.pageX, i.touchesCurrent.y = e.type === "touchmove" ? e.targetTouches[0].pageY : e.pageY, !i.isMoved && !t.isScaling && (this.isHorizontal() && (Math.floor(i.minX) === Math.floor(i.startX) && i.touchesCurrent.x < i.touchesStart.x || Math.floor(i.maxX) === Math.floor(i.startX) && i.touchesCurrent.x > i.touchesStart.x) || !this.isHorizontal() && (Math.floor(i.minY) === Math.floor(i.startY) && i.touchesCurrent.y < i.touchesStart.y || Math.floor(i.maxY) === Math.floor(i.startY) && i.touchesCurrent.y > i.touchesStart.y))) return void(i.isTouched = !1);
						e.cancelable && e.preventDefault(), e.stopPropagation(), i.isMoved = !0, i.currentX = i.touchesCurrent.x - i.touchesStart.x + i.startX, i.currentY = i.touchesCurrent.y - i.touchesStart.y + i.startY, i.currentX < i.minX && (i.currentX = i.minX + 1 - Math.pow(i.minX - i.currentX + 1, .8)), i.currentX > i.maxX && (i.currentX = i.maxX - 1 + Math.pow(i.currentX - i.maxX + 1, .8)), i.currentY < i.minY && (i.currentY = i.minY + 1 - Math.pow(i.minY - i.currentY + 1, .8)), i.currentY > i.maxY && (i.currentY = i.maxY - 1 + Math.pow(i.currentY - i.maxY + 1, .8)), l.prevPositionX || (l.prevPositionX = i.touchesCurrent.x), l.prevPositionY || (l.prevPositionY = i.touchesCurrent.y), l.prevTime || (l.prevTime = Date.now()), l.x = (i.touchesCurrent.x - l.prevPositionX) / (Date.now() - l.prevTime) / 2, l.y = (i.touchesCurrent.y - l.prevPositionY) / (Date.now() - l.prevTime) / 2, Math.abs(i.touchesCurrent.x - l.prevPositionX) < 2 && (l.x = 0), Math.abs(i.touchesCurrent.y - l.prevPositionY) < 2 && (l.y = 0), l.prevPositionX = i.touchesCurrent.x, l.prevPositionY = i.touchesCurrent.y, l.prevTime = Date.now(), s.$imageWrapEl.transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
					}
				}
			},
			onTouchEnd: function() {
				var e = this.zoom,
					t = e.gesture,
					s = e.image,
					i = e.velocity;
				if (t.$imageEl && t.$imageEl.length !== 0) {
					if (!s.isTouched || !s.isMoved) return s.isTouched = !1, void(s.isMoved = !1);
					s.isTouched = !1, s.isMoved = !1;
					var l = 300,
						o = 300,
						h = i.x * l,
						v = s.currentX + h,
						f = i.y * o,
						g = s.currentY + f;
					i.x !== 0 && (l = Math.abs((v - s.currentX) / i.x)), i.y !== 0 && (o = Math.abs((g - s.currentY) / i.y));
					var S = Math.max(l, o);
					s.currentX = v, s.currentY = g;
					var A = s.width * e.scale,
						C = s.height * e.scale;
					s.minX = Math.min(t.slideWidth / 2 - A / 2, 0), s.maxX = -s.minX, s.minY = Math.min(t.slideHeight / 2 - C / 2, 0), s.maxY = -s.minY, s.currentX = Math.max(Math.min(s.currentX, s.maxX), s.minX), s.currentY = Math.max(Math.min(s.currentY, s.maxY), s.minY), t.$imageWrapEl.transition(S).transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
				}
			},
			onTransitionEnd: function() {
				var e = this.zoom,
					t = e.gesture;
				t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl && t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl && t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0)
			},
			toggle: function(e) {
				var t = this.zoom;
				t.scale && t.scale !== 1 ? t.out() : t.in(e)
			},
			in: function(e) {
				var t, s, i, l, o, h, v, f, g, S, A, C, M, k, $, H, I = this.zoom,
					z = this.params.zoom,
					_ = I.gesture,
					q = I.image;
				_.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? _.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : _.$slideEl = this.slides.eq(this.activeIndex), _.$imageEl = _.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), _.$imageWrapEl = _.$imageEl.parent("." + z.containerClass)), _.$imageEl && _.$imageEl.length !== 0 && (_.$slideEl.addClass("" + z.zoomedSlideClass), q.touchesStart.x === void 0 && e ? (t = e.type === "touchend" ? e.changedTouches[0].pageX : e.pageX, s = e.type === "touchend" ? e.changedTouches[0].pageY : e.pageY) : (t = q.touchesStart.x, s = q.touchesStart.y), I.scale = _.$imageWrapEl.attr("data-swiper-zoom") || z.maxRatio, I.currentScale = _.$imageWrapEl.attr("data-swiper-zoom") || z.maxRatio, e ? ($ = _.$slideEl[0].offsetWidth, H = _.$slideEl[0].offsetHeight, i = _.$slideEl.offset().left + $ / 2 - t, l = _.$slideEl.offset().top + H / 2 - s, v = _.$imageEl[0].offsetWidth, f = _.$imageEl[0].offsetHeight, g = v * I.scale, S = f * I.scale, M = -(A = Math.min($ / 2 - g / 2, 0)), k = -(C = Math.min(H / 2 - S / 2, 0)), (o = i * I.scale) < A && (o = A), o > M && (o = M), (h = l * I.scale) < C && (h = C), h > k && (h = k)) : (o = 0, h = 0), _.$imageWrapEl.transition(300).transform("translate3d(" + o + "px, " + h + "px,0)"), _.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + I.scale + ")"))
			},
			out: function() {
				var e = this.zoom,
					t = this.params.zoom,
					s = e.gesture;
				s.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? s.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : s.$slideEl = this.slides.eq(this.activeIndex), s.$imageEl = s.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), s.$imageWrapEl = s.$imageEl.parent("." + t.containerClass)), s.$imageEl && s.$imageEl.length !== 0 && (e.scale = 1, e.currentScale = 1, s.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), s.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), s.$slideEl.removeClass("" + t.zoomedSlideClass), s.$slideEl = void 0)
			},
			enable: function() {
				var e = this.zoom;
				if (!e.enabled) {
					e.enabled = !0;
					var t = !(this.touchEvents.start !== "touchstart" || !y.passiveListener || !this.params.passiveListeners) && {
							passive: !0,
							capture: !1
						},
						s = !y.passiveListener || {
							passive: !1,
							capture: !0
						},
						i = "." + this.params.slideClass;
					y.gestures ? (this.$wrapperEl.on("gesturestart", i, e.onGestureStart, t), this.$wrapperEl.on("gesturechange", i, e.onGestureChange, t), this.$wrapperEl.on("gestureend", i, e.onGestureEnd, t)) : this.touchEvents.start === "touchstart" && (this.$wrapperEl.on(this.touchEvents.start, i, e.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, i, e.onGestureChange, s), this.$wrapperEl.on(this.touchEvents.end, i, e.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, i, e.onGestureEnd, t)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, s)
				}
			},
			disable: function() {
				var e = this.zoom;
				if (e.enabled) {
					this.zoom.enabled = !1;
					var t = !(this.touchEvents.start !== "touchstart" || !y.passiveListener || !this.params.passiveListeners) && {
							passive: !0,
							capture: !1
						},
						s = !y.passiveListener || {
							passive: !1,
							capture: !0
						},
						i = "." + this.params.slideClass;
					y.gestures ? (this.$wrapperEl.off("gesturestart", i, e.onGestureStart, t), this.$wrapperEl.off("gesturechange", i, e.onGestureChange, t), this.$wrapperEl.off("gestureend", i, e.onGestureEnd, t)) : this.touchEvents.start === "touchstart" && (this.$wrapperEl.off(this.touchEvents.start, i, e.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, i, e.onGestureChange, s), this.$wrapperEl.off(this.touchEvents.end, i, e.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, i, e.onGestureEnd, t)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, s)
				}
			}
		},
		_t = {
			loadInSlide: function(e, t) {
				t === void 0 && (t = !0);
				var s = this,
					i = s.params.lazy;
				if (e !== void 0 && s.slides.length !== 0) {
					var l = s.virtual && s.params.virtual.enabled ? s.$wrapperEl.children("." + s.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : s.slides.eq(e),
						o = l.find("." + i.elementClass + ":not(." + i.loadedClass + "):not(." + i.loadingClass + ")");
					!l.hasClass(i.elementClass) || l.hasClass(i.loadedClass) || l.hasClass(i.loadingClass) || (o = o.add(l[0])), o.length !== 0 && o.each((function(h, v) {
						var f = u(v);
						f.addClass(i.loadingClass);
						var g = f.attr("data-background"),
							S = f.attr("data-src"),
							A = f.attr("data-srcset"),
							C = f.attr("data-sizes"),
							M = f.parent("picture");
						s.loadImage(f[0], S || g, A, C, !1, (function() {
							if (s != null && s && (!s || s.params) && !s.destroyed) {
								if (g ? (f.css("background-image", 'url("' + g + '")'), f.removeAttr("data-background")) : (A && (f.attr("srcset", A), f.removeAttr("data-srcset")), C && (f.attr("sizes", C), f.removeAttr("data-sizes")), M.length && M.children("source").each((function(I, z) {
										var _ = u(z);
										_.attr("data-srcset") && (_.attr("srcset", _.attr("data-srcset")), _.removeAttr("data-srcset"))
									})), S && (f.attr("src", S), f.removeAttr("data-src"))), f.addClass(i.loadedClass).removeClass(i.loadingClass), l.find("." + i.preloaderClass).remove(), s.params.loop && t) {
									var k = l.attr("data-swiper-slide-index");
									if (l.hasClass(s.params.slideDuplicateClass)) {
										var $ = s.$wrapperEl.children('[data-swiper-slide-index="' + k + '"]:not(.' + s.params.slideDuplicateClass + ")");
										s.lazy.loadInSlide($.index(), !1)
									} else {
										var H = s.$wrapperEl.children("." + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + k + '"]');
										s.lazy.loadInSlide(H.index(), !1)
									}
								}
								s.emit("lazyImageReady", l[0], f[0]), s.params.autoHeight && s.updateAutoHeight()
							}
						})), s.emit("lazyImageLoad", l[0], f[0])
					}))
				}
			},
			load: function() {
				var e = this,
					t = e.$wrapperEl,
					s = e.params,
					i = e.slides,
					l = e.activeIndex,
					o = e.virtual && s.virtual.enabled,
					h = s.lazy,
					v = s.slidesPerView;

				function f(_) {
					if (o) {
						if (t.children("." + s.slideClass + '[data-swiper-slide-index="' + _ + '"]').length) return !0
					} else if (i[_]) return !0;
					return !1
				}

				function g(_) {
					return o ? u(_).attr("data-swiper-slide-index") : u(_).index()
				}
				if (v === "auto" && (v = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + s.slideVisibleClass).each((function(_, q) {
					var oe = o ? u(q).attr("data-swiper-slide-index") : u(q).index();
					e.lazy.loadInSlide(oe)
				}));
				else if (v > 1)
					for (var S = l; S < l + v; S += 1) f(S) && e.lazy.loadInSlide(S);
				else e.lazy.loadInSlide(l);
				if (h.loadPrevNext)
					if (v > 1 || h.loadPrevNextAmount && h.loadPrevNextAmount > 1) {
						for (var A = h.loadPrevNextAmount, C = v, M = Math.min(l + C + Math.max(A, C), i.length), k = Math.max(l - Math.max(C, A), 0), $ = l + v; $ < M; $ += 1) f($) && e.lazy.loadInSlide($);
						for (var H = k; H < l; H += 1) f(H) && e.lazy.loadInSlide(H)
					} else {
						var I = t.children("." + s.slideNextClass);
						I.length > 0 && e.lazy.loadInSlide(g(I));
						var z = t.children("." + s.slidePrevClass);
						z.length > 0 && e.lazy.loadInSlide(g(z))
					}
			}
		},
		at = {
			LinearSpline: function(e, t) {
				var s, i, l, o, h, v = function(f, g) {
					for (i = -1, s = f.length; s - i > 1;) f[l = s + i >> 1] <= g ? i = l : s = l;
					return s
				};
				return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(f) {
					return f ? (h = v(this.x, f), o = h - 1, (f - this.x[o]) * (this.y[h] - this.y[o]) / (this.x[h] - this.x[o]) + this.y[o]) : 0
				}, this
			},
			getInterpolateFunction: function(e) {
				this.controller.spline || (this.controller.spline = this.params.loop ? new at.LinearSpline(this.slidesGrid, e.slidesGrid) : new at.LinearSpline(this.snapGrid, e.snapGrid))
			},
			setTranslate: function(e, t) {
				var s, i, l = this,
					o = l.controller.control;

				function h(f) {
					var g = l.rtlTranslate ? -l.translate : l.translate;
					l.params.controller.by === "slide" && (l.controller.getInterpolateFunction(f), i = -l.controller.spline.interpolate(-g)), i && l.params.controller.by !== "container" || (s = (f.maxTranslate() - f.minTranslate()) / (l.maxTranslate() - l.minTranslate()), i = (g - l.minTranslate()) * s + f.minTranslate()), l.params.controller.inverse && (i = f.maxTranslate() - i), f.updateProgress(i), f.setTranslate(i, l), f.updateActiveIndex(), f.updateSlidesClasses()
				}
				if (Array.isArray(o))
					for (var v = 0; v < o.length; v += 1) o[v] !== t && o[v] instanceof we && h(o[v]);
				else o instanceof we && t !== o && h(o)
			},
			setTransition: function(e, t) {
				var s, i = this,
					l = i.controller.control;

				function o(h) {
					h.setTransition(e, i), e !== 0 && (h.transitionStart(), h.params.autoHeight && m.nextTick((function() {
						h.updateAutoHeight()
					})), h.$wrapperEl.transitionEnd((function() {
						l && (h.params.loop && i.params.controller.by === "slide" && h.loopFix(), h.transitionEnd())
					})))
				}
				if (Array.isArray(l))
					for (s = 0; s < l.length; s += 1) l[s] !== t && l[s] instanceof we && o(l[s]);
				else l instanceof we && t !== l && o(l)
			}
		},
		Pt = {
			makeElFocusable: function(e) {
				return e.attr("tabIndex", "0"), e
			},
			makeElNotFocusable: function(e) {
				return e.attr("tabIndex", "-1"), e
			},
			addElRole: function(e, t) {
				return e.attr("role", t), e
			},
			addElLabel: function(e, t) {
				return e.attr("aria-label", t), e
			},
			disableEl: function(e) {
				return e.attr("aria-disabled", !0), e
			},
			enableEl: function(e) {
				return e.attr("aria-disabled", !1), e
			},
			onEnterKey: function(e) {
				var t = this.params.a11y;
				if (e.keyCode === 13) {
					var s = u(e.target);
					this.navigation && this.navigation.$nextEl && s.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && s.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && s.is("." + this.params.pagination.bulletClass) && s[0].click()
				}
			},
			notify: function(e) {
				var t = this.a11y.liveRegion;
				t.length !== 0 && (t.html(""), t.html(e))
			},
			updateNavigation: function() {
				if (!this.params.loop && this.navigation) {
					var e = this.navigation,
						t = e.$nextEl,
						s = e.$prevEl;
					s && s.length > 0 && (this.isBeginning ? (this.a11y.disableEl(s), this.a11y.makeElNotFocusable(s)) : (this.a11y.enableEl(s), this.a11y.makeElFocusable(s))), t && t.length > 0 && (this.isEnd ? (this.a11y.disableEl(t), this.a11y.makeElNotFocusable(t)) : (this.a11y.enableEl(t), this.a11y.makeElFocusable(t)))
				}
			},
			updatePagination: function() {
				var e = this,
					t = e.params.a11y;
				e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each((function(s, i) {
					var l = u(i);
					e.a11y.makeElFocusable(l), e.a11y.addElRole(l, "button"), e.a11y.addElLabel(l, t.paginationBulletMessage.replace(/\{\{index\}\}/, l.index() + 1))
				}))
			},
			init: function() {
				this.$el.append(this.a11y.liveRegion);
				var e, t, s = this.params.a11y;
				this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, s.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, s.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
			},
			destroy: function() {
				var e, t;
				this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
			}
		},
		Ue = {
			init: function() {
				if (this.params.history) {
					if (!c.history || !c.history.pushState) return this.params.history.enabled = !1, void(this.params.hashNavigation.enabled = !0);
					var e = this.history;
					e.initialized = !0, e.paths = Ue.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || c.addEventListener("popstate", this.history.setHistoryPopState))
				}
			},
			destroy: function() {
				this.params.history.replaceState || c.removeEventListener("popstate", this.history.setHistoryPopState)
			},
			setHistoryPopState: function() {
				this.history.paths = Ue.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
			},
			getPathValues: function() {
				var e = c.location.pathname.slice(1).split("/").filter((function(s) {
						return s !== ""
					})),
					t = e.length;
				return {
					key: e[t - 2],
					value: e[t - 1]
				}
			},
			setHistory: function(e, t) {
				if (this.history.initialized && this.params.history.enabled) {
					var s = this.slides.eq(t),
						i = Ue.slugify(s.attr("data-history"));
					c.location.pathname.includes(e) || (i = e + "/" + i);
					var l = c.history.state;
					l && l.value === i || (this.params.history.replaceState ? c.history.replaceState({
						value: i
					}, null, i) : c.history.pushState({
						value: i
					}, null, i))
				}
			},
			slugify: function(e) {
				return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
			},
			scrollToSlide: function(e, t, s) {
				if (t)
					for (var i = 0, l = this.slides.length; i < l; i += 1) {
						var o = this.slides.eq(i);
						if (Ue.slugify(o.attr("data-history")) === t && !o.hasClass(this.params.slideDuplicateClass)) {
							var h = o.index();
							this.slideTo(h, e, s)
						}
					} else this.slideTo(0, e, s)
			}
		},
		nt = {
			onHashCange: function() {
				this.emit("hashChange");
				var e = r.location.hash.replace("#", "");
				if (e !== this.slides.eq(this.activeIndex).attr("data-hash")) {
					var t = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + e + '"]').index();
					if (t === void 0) return;
					this.slideTo(t)
				}
			},
			setHash: function() {
				if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
					if (this.params.hashNavigation.replaceState && c.history && c.history.replaceState) c.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || ""), this.emit("hashSet");
					else {
						var e = this.slides.eq(this.activeIndex),
							t = e.attr("data-hash") || e.attr("data-history");
						r.location.hash = t || "", this.emit("hashSet")
					}
			},
			init: function() {
				if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
					this.hashNavigation.initialized = !0;
					var e = r.location.hash.replace("#", "");
					if (e)
						for (var t = 0, s = this.slides.length; t < s; t += 1) {
							var i = this.slides.eq(t);
							if ((i.attr("data-hash") || i.attr("data-history")) === e && !i.hasClass(this.params.slideDuplicateClass)) {
								var l = i.index();
								this.slideTo(l, 0, this.params.runCallbacksOnInit, !0)
							}
						}
					this.params.hashNavigation.watchState && u(c).on("hashchange", this.hashNavigation.onHashCange)
				}
			},
			destroy: function() {
				this.params.hashNavigation.watchState && u(c).off("hashchange", this.hashNavigation.onHashCange)
			}
		},
		je = {
			run: function() {
				var e = this,
					t = e.slides.eq(e.activeIndex),
					s = e.params.autoplay.delay;
				t.attr("data-swiper-autoplay") && (s = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = m.nextTick((function() {
					e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), e.params.cssMode && e.autoplay.running && e.autoplay.run()
				}), s)
			},
			start: function() {
				return this.autoplay.timeout === void 0 && !this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0)
			},
			stop: function() {
				return !!this.autoplay.running && this.autoplay.timeout !== void 0 && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0)
			},
			pause: function(e) {
				this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, e !== 0 && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())))
			}
		},
		rt = {
			setTranslate: function() {
				for (var e = this.slides, t = 0; t < e.length; t += 1) {
					var s = this.slides.eq(t),
						i = -s[0].swiperSlideOffset;
					this.params.virtualTranslate || (i -= this.translate);
					var l = 0;
					this.isHorizontal() || (l = i, i = 0);
					var o = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(s[0].progress), 0) : 1 + Math.min(Math.max(s[0].progress, -1), 0);
					s.css({
						opacity: o
					}).transform("translate3d(" + i + "px, " + l + "px, 0px)")
				}
			},
			setTransition: function(e) {
				var t = this,
					s = t.slides,
					i = t.$wrapperEl;
				if (s.transition(e), t.params.virtualTranslate && e !== 0) {
					var l = !1;
					s.transitionEnd((function() {
						if (!l && t && !t.destroyed) {
							l = !0, t.animating = !1;
							for (var o = ["webkitTransitionEnd", "transitionend"], h = 0; h < o.length; h += 1) i.trigger(o[h])
						}
					}))
				}
			}
		},
		bt = {
			setTranslate: function() {
				var e, t = this.$el,
					s = this.$wrapperEl,
					i = this.slides,
					l = this.width,
					o = this.height,
					h = this.rtlTranslate,
					v = this.size,
					f = this.params.cubeEffect,
					g = this.isHorizontal(),
					S = this.virtual && this.params.virtual.enabled,
					A = 0;
				f.shadow && (g ? ((e = s.find(".swiper-cube-shadow")).length === 0 && (e = u('<div class="swiper-cube-shadow"></div>'), s.append(e)), e.css({
					height: l + "px"
				})) : (e = t.find(".swiper-cube-shadow")).length === 0 && (e = u('<div class="swiper-cube-shadow"></div>'), t.append(e)));
				for (var C = 0; C < i.length; C += 1) {
					var M = i.eq(C),
						k = C;
					S && (k = parseInt(M.attr("data-swiper-slide-index"), 10));
					var $ = 90 * k,
						H = Math.floor($ / 360);
					h && ($ = -$, H = Math.floor(-$ / 360));
					var I = Math.max(Math.min(M[0].progress, 1), -1),
						z = 0,
						_ = 0,
						q = 0;
					k % 4 == 0 ? (z = 4 * -H * v, q = 0) : (k - 1) % 4 == 0 ? (z = 0, q = 4 * -H * v) : (k - 2) % 4 == 0 ? (z = v + 4 * H * v, q = v) : (k - 3) % 4 == 0 && (z = -v, q = 3 * v + 4 * v * H), h && (z = -z), g || (_ = z, z = 0);
					var oe = "rotateX(" + (g ? 0 : -$) + "deg) rotateY(" + (g ? $ : 0) + "deg) translate3d(" + z + "px, " + _ + "px, " + q + "px)";
					if (I <= 1 && I > -1 && (A = 90 * k + 90 * I, h && (A = 90 * -k - 90 * I)), M.transform(oe), f.slideShadows) {
						var X = g ? M.find(".swiper-slide-shadow-left") : M.find(".swiper-slide-shadow-top"),
							ge = g ? M.find(".swiper-slide-shadow-right") : M.find(".swiper-slide-shadow-bottom");
						X.length === 0 && (X = u('<div class="swiper-slide-shadow-' + (g ? "left" : "top") + '"></div>'), M.append(X)), ge.length === 0 && (ge = u('<div class="swiper-slide-shadow-' + (g ? "right" : "bottom") + '"></div>'), M.append(ge)), X.length && (X[0].style.opacity = Math.max(-I, 0)), ge.length && (ge[0].style.opacity = Math.max(I, 0))
					}
				}
				if (s.css({
						"-webkit-transform-origin": "50% 50% -" + v / 2 + "px",
						"-moz-transform-origin": "50% 50% -" + v / 2 + "px",
						"-ms-transform-origin": "50% 50% -" + v / 2 + "px",
						"transform-origin": "50% 50% -" + v / 2 + "px"
					}), f.shadow)
					if (g) e.transform("translate3d(0px, " + (l / 2 + f.shadowOffset) + "px, " + -l / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + f.shadowScale + ")");
					else {
						var D = Math.abs(A) - 90 * Math.floor(Math.abs(A) / 90),
							b = 1.5 - (Math.sin(2 * D * Math.PI / 360) / 2 + Math.cos(2 * D * Math.PI / 360) / 2),
							L = f.shadowScale,
							P = f.shadowScale / b,
							G = f.shadowOffset;
						e.transform("scale3d(" + L + ", 1, " + P + ") translate3d(0px, " + (o / 2 + G) + "px, " + -o / 2 / P + "px) rotateX(-90deg)")
					} var se = Q.isSafari || Q.isWebView ? -v / 2 : 0;
				s.transform("translate3d(0px,0," + se + "px) rotateX(" + (this.isHorizontal() ? 0 : A) + "deg) rotateY(" + (this.isHorizontal() ? -A : 0) + "deg)")
			},
			setTransition: function(e) {
				var t = this.$el;
				this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
			}
		},
		yt = {
			setTranslate: function() {
				for (var e = this.slides, t = this.rtlTranslate, s = 0; s < e.length; s += 1) {
					var i = e.eq(s),
						l = i[0].progress;
					this.params.flipEffect.limitRotation && (l = Math.max(Math.min(i[0].progress, 1), -1));
					var o = -180 * l,
						h = 0,
						v = -i[0].swiperSlideOffset,
						f = 0;
					if (this.isHorizontal() ? t && (o = -o) : (f = v, v = 0, h = -o, o = 0), i[0].style.zIndex = -Math.abs(Math.round(l)) + e.length, this.params.flipEffect.slideShadows) {
						var g = this.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"),
							S = this.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
						g.length === 0 && (g = u('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), i.append(g)), S.length === 0 && (S = u('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), i.append(S)), g.length && (g[0].style.opacity = Math.max(-l, 0)), S.length && (S[0].style.opacity = Math.max(l, 0))
					}
					i.transform("translate3d(" + v + "px, " + f + "px, 0px) rotateX(" + h + "deg) rotateY(" + o + "deg)")
				}
			},
			setTransition: function(e) {
				var t = this,
					s = t.slides,
					i = t.activeIndex,
					l = t.$wrapperEl;
				if (s.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && e !== 0) {
					var o = !1;
					s.eq(i).transitionEnd((function() {
						if (!o && t && !t.destroyed) {
							o = !0, t.animating = !1;
							for (var h = ["webkitTransitionEnd", "transitionend"], v = 0; v < h.length; v += 1) l.trigger(h[v])
						}
					}))
				}
			}
		},
		Xt = {
			setTranslate: function() {
				for (var e = this.width, t = this.height, s = this.slides, i = this.$wrapperEl, l = this.slidesSizesGrid, o = this.params.coverflowEffect, h = this.isHorizontal(), v = this.translate, f = h ? e / 2 - v : t / 2 - v, g = h ? o.rotate : -o.rotate, S = o.depth, A = 0, C = s.length; A < C; A += 1) {
					var M = s.eq(A),
						k = l[A],
						$ = (f - M[0].swiperSlideOffset - k / 2) / k * o.modifier,
						H = h ? g * $ : 0,
						I = h ? 0 : g * $,
						z = -S * Math.abs($),
						_ = o.stretch;
					typeof _ == "string" && _.indexOf("%") !== -1 && (_ = parseFloat(o.stretch) / 100 * k);
					var q = h ? 0 : _ * $,
						oe = h ? _ * $ : 0,
						X = 1 - (1 - o.scale) * Math.abs($);
					Math.abs(oe) < .001 && (oe = 0), Math.abs(q) < .001 && (q = 0), Math.abs(z) < .001 && (z = 0), Math.abs(H) < .001 && (H = 0), Math.abs(I) < .001 && (I = 0), Math.abs(X) < .001 && (X = 0);
					var ge = "translate3d(" + oe + "px," + q + "px," + z + "px)  rotateX(" + I + "deg) rotateY(" + H + "deg) scale(" + X + ")";
					if (M.transform(ge), M[0].style.zIndex = 1 - Math.abs(Math.round($)), o.slideShadows) {
						var D = h ? M.find(".swiper-slide-shadow-left") : M.find(".swiper-slide-shadow-top"),
							b = h ? M.find(".swiper-slide-shadow-right") : M.find(".swiper-slide-shadow-bottom");
						D.length === 0 && (D = u('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'), M.append(D)), b.length === 0 && (b = u('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'), M.append(b)), D.length && (D[0].style.opacity = $ > 0 ? $ : 0), b.length && (b[0].style.opacity = -$ > 0 ? -$ : 0)
					}
				}(y.pointerEvents || y.prefixedPointerEvents) && (i[0].style.perspectiveOrigin = f + "px 50%")
			},
			setTransition: function(e) {
				this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
			}
		},
		lt = {
			init: function() {
				var e = this.params.thumbs,
					t = this.constructor;
				e.swiper instanceof t ? (this.thumbs.swiper = e.swiper, m.extend(this.thumbs.swiper.originalParams, {
					watchSlidesProgress: !0,
					slideToClickedSlide: !1
				}), m.extend(this.thumbs.swiper.params, {
					watchSlidesProgress: !0,
					slideToClickedSlide: !1
				})) : m.isObject(e.swiper) && (this.thumbs.swiper = new t(m.extend({}, e.swiper, {
					watchSlidesVisibility: !0,
					watchSlidesProgress: !0,
					slideToClickedSlide: !1
				})), this.thumbs.swiperCreated = !0), this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass), this.thumbs.swiper.on("tap", this.thumbs.onThumbClick)
			},
			onThumbClick: function() {
				var e = this.thumbs.swiper;
				if (e) {
					var t = e.clickedIndex,
						s = e.clickedSlide;
					if (!(s && u(s).hasClass(this.params.thumbs.slideThumbActiveClass) || t == null)) {
						var i;
						if (i = e.params.loop ? parseInt(u(e.clickedSlide).attr("data-swiper-slide-index"), 10) : t, this.params.loop) {
							var l = this.activeIndex;
							this.slides.eq(l).hasClass(this.params.slideDuplicateClass) && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, l = this.activeIndex);
							var o = this.slides.eq(l).prevAll('[data-swiper-slide-index="' + i + '"]').eq(0).index(),
								h = this.slides.eq(l).nextAll('[data-swiper-slide-index="' + i + '"]').eq(0).index();
							i = o === void 0 ? h : h === void 0 ? o : h - l < l - o ? h : o
						}
						this.slideTo(i)
					}
				}
			},
			update: function(e) {
				var t = this.thumbs.swiper;
				if (t) {
					var s = t.params.slidesPerView === "auto" ? t.slidesPerViewDynamic() : t.params.slidesPerView,
						i = this.params.thumbs.autoScrollOffset,
						l = i && !t.params.loop;
					if (this.realIndex !== t.realIndex || l) {
						var o, h, v = t.activeIndex;
						if (t.params.loop) {
							t.slides.eq(v).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, v = t.activeIndex);
							var f = t.slides.eq(v).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index(),
								g = t.slides.eq(v).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();
							o = f === void 0 ? g : g === void 0 ? f : g - v == v - f ? v : g - v < v - f ? g : f, h = this.activeIndex > this.previousIndex ? "next" : "prev"
						} else h = (o = this.realIndex) > this.previousIndex ? "next" : "prev";
						l && (o += h === "next" ? i : -1 * i), t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(o) < 0 && (t.params.centeredSlides ? o = o > v ? o - Math.floor(s / 2) + 1 : o + Math.floor(s / 2) - 1 : o > v && (o = o - s + 1), t.slideTo(o, e ? 0 : void 0))
					}
					var S = 1,
						A = this.params.thumbs.slideThumbActiveClass;
					if (this.params.slidesPerView > 1 && !this.params.centeredSlides && (S = this.params.slidesPerView), this.params.thumbs.multipleActiveThumbs || (S = 1), S = Math.floor(S), t.slides.removeClass(A), t.params.loop || t.params.virtual && t.params.virtual.enabled)
						for (var C = 0; C < S; C += 1) t.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + C) + '"]').addClass(A);
					else
						for (var M = 0; M < S; M += 1) t.slides.eq(this.realIndex + M).addClass(A)
				}
			}
		},
		wt = [Oe, ue, Ce, Be, ft, Yt, ys, {
			name: "mousewheel",
			params: {
				mousewheel: {
					enabled: !1,
					releaseOnEdges: !1,
					invert: !1,
					forceToAxis: !1,
					sensitivity: 1,
					eventsTarged: "container"
				}
			},
			create: function() {
				m.extend(this, {
					mousewheel: {
						enabled: !1,
						enable: He.enable.bind(this),
						disable: He.disable.bind(this),
						handle: He.handle.bind(this),
						handleMouseEnter: He.handleMouseEnter.bind(this),
						handleMouseLeave: He.handleMouseLeave.bind(this),
						animateSlider: He.animateSlider.bind(this),
						releaseScroll: He.releaseScroll.bind(this),
						lastScrollTime: m.now(),
						lastEventBeforeSnap: void 0,
						recentWheelEvents: []
					}
				})
			},
			on: {
				init: function() {
					!this.params.mousewheel.enabled && this.params.cssMode && this.mousewheel.disable(), this.params.mousewheel.enabled && this.mousewheel.enable()
				},
				destroy: function() {
					this.params.cssMode && this.mousewheel.enable(), this.mousewheel.enabled && this.mousewheel.disable()
				}
			}
		}, {
			name: "navigation",
			params: {
				navigation: {
					nextEl: null,
					prevEl: null,
					hideOnClick: !1,
					disabledClass: "swiper-button-disabled",
					hiddenClass: "swiper-button-hidden",
					lockClass: "swiper-button-lock"
				}
			},
			create: function() {
				m.extend(this, {
					navigation: {
						init: Qe.init.bind(this),
						update: Qe.update.bind(this),
						destroy: Qe.destroy.bind(this),
						onNextClick: Qe.onNextClick.bind(this),
						onPrevClick: Qe.onPrevClick.bind(this)
					}
				})
			},
			on: {
				init: function() {
					this.navigation.init(), this.navigation.update()
				},
				toEdge: function() {
					this.navigation.update()
				},
				fromEdge: function() {
					this.navigation.update()
				},
				destroy: function() {
					this.navigation.destroy()
				},
				click: function(e) {
					var t, s = this.navigation,
						i = s.$nextEl,
						l = s.$prevEl;
					!this.params.navigation.hideOnClick || u(e.target).is(l) || u(e.target).is(i) || (i ? t = i.hasClass(this.params.navigation.hiddenClass) : l && (t = l.hasClass(this.params.navigation.hiddenClass)), t === !0 ? this.emit("navigationShow", this) : this.emit("navigationHide", this), i && i.toggleClass(this.params.navigation.hiddenClass), l && l.toggleClass(this.params.navigation.hiddenClass))
				}
			}
		}, {
			name: "pagination",
			params: {
				pagination: {
					el: null,
					bulletElement: "span",
					clickable: !1,
					hideOnClick: !1,
					renderBullet: null,
					renderProgressbar: null,
					renderFraction: null,
					renderCustom: null,
					progressbarOpposite: !1,
					type: "bullets",
					dynamicBullets: !1,
					dynamicMainBullets: 1,
					formatFractionCurrent: function(e) {
						return e
					},
					formatFractionTotal: function(e) {
						return e
					},
					bulletClass: "swiper-pagination-bullet",
					bulletActiveClass: "swiper-pagination-bullet-active",
					modifierClass: "swiper-pagination-",
					currentClass: "swiper-pagination-current",
					totalClass: "swiper-pagination-total",
					hiddenClass: "swiper-pagination-hidden",
					progressbarFillClass: "swiper-pagination-progressbar-fill",
					progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
					clickableClass: "swiper-pagination-clickable",
					lockClass: "swiper-pagination-lock"
				}
			},
			create: function() {
				m.extend(this, {
					pagination: {
						init: Je.init.bind(this),
						render: Je.render.bind(this),
						update: Je.update.bind(this),
						destroy: Je.destroy.bind(this),
						dynamicBulletIndex: 0
					}
				})
			},
			on: {
				init: function() {
					this.pagination.init(), this.pagination.render(), this.pagination.update()
				},
				activeIndexChange: function() {
					(this.params.loop || this.snapIndex === void 0) && this.pagination.update()
				},
				snapIndexChange: function() {
					this.params.loop || this.pagination.update()
				},
				slidesLengthChange: function() {
					this.params.loop && (this.pagination.render(), this.pagination.update())
				},
				snapGridLengthChange: function() {
					this.params.loop || (this.pagination.render(), this.pagination.update())
				},
				destroy: function() {
					this.pagination.destroy()
				},
				click: function(e) {
					this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !u(e.target).hasClass(this.params.pagination.bulletClass) && (this.pagination.$el.hasClass(this.params.pagination.hiddenClass) === !0 ? this.emit("paginationShow", this) : this.emit("paginationHide", this), this.pagination.$el.toggleClass(this.params.pagination.hiddenClass))
				}
			}
		}, {
			name: "scrollbar",
			params: {
				scrollbar: {
					el: null,
					dragSize: "auto",
					hide: !1,
					draggable: !1,
					snapOnRelease: !0,
					lockClass: "swiper-scrollbar-lock",
					dragClass: "swiper-scrollbar-drag"
				}
			},
			create: function() {
				m.extend(this, {
					scrollbar: {
						init: Me.init.bind(this),
						destroy: Me.destroy.bind(this),
						updateSize: Me.updateSize.bind(this),
						setTranslate: Me.setTranslate.bind(this),
						setTransition: Me.setTransition.bind(this),
						enableDraggable: Me.enableDraggable.bind(this),
						disableDraggable: Me.disableDraggable.bind(this),
						setDragPosition: Me.setDragPosition.bind(this),
						getPointerPosition: Me.getPointerPosition.bind(this),
						onDragStart: Me.onDragStart.bind(this),
						onDragMove: Me.onDragMove.bind(this),
						onDragEnd: Me.onDragEnd.bind(this),
						isTouched: !1,
						timeout: null,
						dragTimeout: null
					}
				})
			},
			on: {
				init: function() {
					this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
				},
				update: function() {
					this.scrollbar.updateSize()
				},
				resize: function() {
					this.scrollbar.updateSize()
				},
				observerUpdate: function() {
					this.scrollbar.updateSize()
				},
				setTranslate: function() {
					this.scrollbar.setTranslate()
				},
				setTransition: function(e) {
					this.scrollbar.setTransition(e)
				},
				destroy: function() {
					this.scrollbar.destroy()
				}
			}
		}, {
			name: "parallax",
			params: {
				parallax: {
					enabled: !1
				}
			},
			create: function() {
				m.extend(this, {
					parallax: {
						setTransform: vt.setTransform.bind(this),
						setTranslate: vt.setTranslate.bind(this),
						setTransition: vt.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function() {
					this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
				},
				init: function() {
					this.params.parallax.enabled && this.parallax.setTranslate()
				},
				setTranslate: function() {
					this.params.parallax.enabled && this.parallax.setTranslate()
				},
				setTransition: function(e) {
					this.params.parallax.enabled && this.parallax.setTransition(e)
				}
			}
		}, {
			name: "zoom",
			params: {
				zoom: {
					enabled: !1,
					maxRatio: 3,
					minRatio: 1,
					toggle: !0,
					containerClass: "swiper-zoom-container",
					zoomedSlideClass: "swiper-slide-zoomed"
				}
			},
			create: function() {
				var e = this,
					t = {
						enabled: !1,
						scale: 1,
						currentScale: 1,
						isScaling: !1,
						gesture: {
							$slideEl: void 0,
							slideWidth: void 0,
							slideHeight: void 0,
							$imageEl: void 0,
							$imageWrapEl: void 0,
							maxRatio: 3
						},
						image: {
							isTouched: void 0,
							isMoved: void 0,
							currentX: void 0,
							currentY: void 0,
							minX: void 0,
							minY: void 0,
							maxX: void 0,
							maxY: void 0,
							width: void 0,
							height: void 0,
							startX: void 0,
							startY: void 0,
							touchesStart: {},
							touchesCurrent: {}
						},
						velocity: {
							x: void 0,
							y: void 0,
							prevPositionX: void 0,
							prevPositionY: void 0,
							prevTime: void 0
						}
					};
				"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach((function(i) {
					t[i] = gt[i].bind(e)
				})), m.extend(e, {
					zoom: t
				});
				var s = 1;
				Object.defineProperty(e.zoom, "scale", {
					get: function() {
						return s
					},
					set: function(i) {
						if (s !== i) {
							var l = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
								o = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
							e.emit("zoomChange", i, l, o)
						}
						s = i
					}
				})
			},
			on: {
				init: function() {
					this.params.zoom.enabled && this.zoom.enable()
				},
				destroy: function() {
					this.zoom.disable()
				},
				touchStart: function(e) {
					this.zoom.enabled && this.zoom.onTouchStart(e)
				},
				touchEnd: function(e) {
					this.zoom.enabled && this.zoom.onTouchEnd(e)
				},
				doubleTap: function(e) {
					this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
				},
				transitionEnd: function() {
					this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
				},
				slideChange: function() {
					this.zoom.enabled && this.params.zoom.enabled && this.params.cssMode && this.zoom.onTransitionEnd()
				}
			}
		}, {
			name: "lazy",
			params: {
				lazy: {
					enabled: !1,
					loadPrevNext: !1,
					loadPrevNextAmount: 1,
					loadOnTransitionStart: !1,
					elementClass: "swiper-lazy",
					loadingClass: "swiper-lazy-loading",
					loadedClass: "swiper-lazy-loaded",
					preloaderClass: "swiper-lazy-preloader"
				}
			},
			create: function() {
				m.extend(this, {
					lazy: {
						initialImageLoaded: !1,
						load: _t.load.bind(this),
						loadInSlide: _t.loadInSlide.bind(this)
					}
				})
			},
			on: {
				beforeInit: function() {
					this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
				},
				init: function() {
					this.params.lazy.enabled && !this.params.loop && this.params.initialSlide === 0 && this.lazy.load()
				},
				scroll: function() {
					this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
				},
				resize: function() {
					this.params.lazy.enabled && this.lazy.load()
				},
				scrollbarDragMove: function() {
					this.params.lazy.enabled && this.lazy.load()
				},
				transitionStart: function() {
					this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
				},
				transitionEnd: function() {
					this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
				},
				slideChange: function() {
					this.params.lazy.enabled && this.params.cssMode && this.lazy.load()
				}
			}
		}, {
			name: "controller",
			params: {
				controller: {
					control: void 0,
					inverse: !1,
					by: "slide"
				}
			},
			create: function() {
				m.extend(this, {
					controller: {
						control: this.params.controller.control,
						getInterpolateFunction: at.getInterpolateFunction.bind(this),
						setTranslate: at.setTranslate.bind(this),
						setTransition: at.setTransition.bind(this)
					}
				})
			},
			on: {
				update: function() {
					this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
				},
				resize: function() {
					this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
				},
				observerUpdate: function() {
					this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
				},
				setTranslate: function(e, t) {
					this.controller.control && this.controller.setTranslate(e, t)
				},
				setTransition: function(e, t) {
					this.controller.control && this.controller.setTransition(e, t)
				}
			}
		}, {
			name: "a11y",
			params: {
				a11y: {
					enabled: !0,
					notificationClass: "swiper-notification",
					prevSlideMessage: "Previous slide",
					nextSlideMessage: "Next slide",
					firstSlideMessage: "This is the first slide",
					lastSlideMessage: "This is the last slide",
					paginationBulletMessage: "Go to slide {{index}}"
				}
			},
			create: function() {
				var e = this;
				m.extend(e, {
					a11y: {
						liveRegion: u('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
					}
				}), Object.keys(Pt).forEach((function(t) {
					e.a11y[t] = Pt[t].bind(e)
				}))
			},
			on: {
				init: function() {
					this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
				},
				toEdge: function() {
					this.params.a11y.enabled && this.a11y.updateNavigation()
				},
				fromEdge: function() {
					this.params.a11y.enabled && this.a11y.updateNavigation()
				},
				paginationUpdate: function() {
					this.params.a11y.enabled && this.a11y.updatePagination()
				},
				destroy: function() {
					this.params.a11y.enabled && this.a11y.destroy()
				}
			}
		}, {
			name: "history",
			params: {
				history: {
					enabled: !1,
					replaceState: !1,
					key: "slides"
				}
			},
			create: function() {
				m.extend(this, {
					history: {
						init: Ue.init.bind(this),
						setHistory: Ue.setHistory.bind(this),
						setHistoryPopState: Ue.setHistoryPopState.bind(this),
						scrollToSlide: Ue.scrollToSlide.bind(this),
						destroy: Ue.destroy.bind(this)
					}
				})
			},
			on: {
				init: function() {
					this.params.history.enabled && this.history.init()
				},
				destroy: function() {
					this.params.history.enabled && this.history.destroy()
				},
				transitionEnd: function() {
					this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
				},
				slideChange: function() {
					this.history.initialized && this.params.cssMode && this.history.setHistory(this.params.history.key, this.activeIndex)
				}
			}
		}, {
			name: "hash-navigation",
			params: {
				hashNavigation: {
					enabled: !1,
					replaceState: !1,
					watchState: !1
				}
			},
			create: function() {
				m.extend(this, {
					hashNavigation: {
						initialized: !1,
						init: nt.init.bind(this),
						destroy: nt.destroy.bind(this),
						setHash: nt.setHash.bind(this),
						onHashCange: nt.onHashCange.bind(this)
					}
				})
			},
			on: {
				init: function() {
					this.params.hashNavigation.enabled && this.hashNavigation.init()
				},
				destroy: function() {
					this.params.hashNavigation.enabled && this.hashNavigation.destroy()
				},
				transitionEnd: function() {
					this.hashNavigation.initialized && this.hashNavigation.setHash()
				},
				slideChange: function() {
					this.hashNavigation.initialized && this.params.cssMode && this.hashNavigation.setHash()
				}
			}
		}, {
			name: "autoplay",
			params: {
				autoplay: {
					enabled: !1,
					delay: 3e3,
					waitForTransition: !0,
					disableOnInteraction: !0,
					stopOnLastSlide: !1,
					reverseDirection: !1
				}
			},
			create: function() {
				var e = this;
				m.extend(e, {
					autoplay: {
						running: !1,
						paused: !1,
						run: je.run.bind(e),
						start: je.start.bind(e),
						stop: je.stop.bind(e),
						pause: je.pause.bind(e),
						onVisibilityChange: function() {
							document.visibilityState === "hidden" && e.autoplay.running && e.autoplay.pause(), document.visibilityState === "visible" && e.autoplay.paused && (e.autoplay.run(), e.autoplay.paused = !1)
						},
						onTransitionEnd: function(t) {
							e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
						}
					}
				})
			},
			on: {
				init: function() {
					this.params.autoplay.enabled && (this.autoplay.start(), document.addEventListener("visibilitychange", this.autoplay.onVisibilityChange))
				},
				beforeTransitionStart: function(e, t) {
					this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
				},
				sliderFirstMove: function() {
					this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
				},
				touchEnd: function() {
					this.params.cssMode && this.autoplay.paused && !this.params.autoplay.disableOnInteraction && this.autoplay.run()
				},
				destroy: function() {
					this.autoplay.running && this.autoplay.stop(), document.removeEventListener("visibilitychange", this.autoplay.onVisibilityChange)
				}
			}
		}, {
			name: "effect-fade",
			params: {
				fadeEffect: {
					crossFade: !1
				}
			},
			create: function() {
				m.extend(this, {
					fadeEffect: {
						setTranslate: rt.setTranslate.bind(this),
						setTransition: rt.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function() {
					if (this.params.effect === "fade") {
						this.classNames.push(this.params.containerModifierClass + "fade");
						var e = {
							slidesPerView: 1,
							slidesPerColumn: 1,
							slidesPerGroup: 1,
							watchSlidesProgress: !0,
							spaceBetween: 0,
							virtualTranslate: !0
						};
						m.extend(this.params, e), m.extend(this.originalParams, e)
					}
				},
				setTranslate: function() {
					this.params.effect === "fade" && this.fadeEffect.setTranslate()
				},
				setTransition: function(e) {
					this.params.effect === "fade" && this.fadeEffect.setTransition(e)
				}
			}
		}, {
			name: "effect-cube",
			params: {
				cubeEffect: {
					slideShadows: !0,
					shadow: !0,
					shadowOffset: 20,
					shadowScale: .94
				}
			},
			create: function() {
				m.extend(this, {
					cubeEffect: {
						setTranslate: bt.setTranslate.bind(this),
						setTransition: bt.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function() {
					if (this.params.effect === "cube") {
						this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
						var e = {
							slidesPerView: 1,
							slidesPerColumn: 1,
							slidesPerGroup: 1,
							watchSlidesProgress: !0,
							resistanceRatio: 0,
							spaceBetween: 0,
							centeredSlides: !1,
							virtualTranslate: !0
						};
						m.extend(this.params, e), m.extend(this.originalParams, e)
					}
				},
				setTranslate: function() {
					this.params.effect === "cube" && this.cubeEffect.setTranslate()
				},
				setTransition: function(e) {
					this.params.effect === "cube" && this.cubeEffect.setTransition(e)
				}
			}
		}, {
			name: "effect-flip",
			params: {
				flipEffect: {
					slideShadows: !0,
					limitRotation: !0
				}
			},
			create: function() {
				m.extend(this, {
					flipEffect: {
						setTranslate: yt.setTranslate.bind(this),
						setTransition: yt.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function() {
					if (this.params.effect === "flip") {
						this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
						var e = {
							slidesPerView: 1,
							slidesPerColumn: 1,
							slidesPerGroup: 1,
							watchSlidesProgress: !0,
							spaceBetween: 0,
							virtualTranslate: !0
						};
						m.extend(this.params, e), m.extend(this.originalParams, e)
					}
				},
				setTranslate: function() {
					this.params.effect === "flip" && this.flipEffect.setTranslate()
				},
				setTransition: function(e) {
					this.params.effect === "flip" && this.flipEffect.setTransition(e)
				}
			}
		}, {
			name: "effect-coverflow",
			params: {
				coverflowEffect: {
					rotate: 50,
					stretch: 0,
					depth: 100,
					scale: 1,
					modifier: 1,
					slideShadows: !0
				}
			},
			create: function() {
				m.extend(this, {
					coverflowEffect: {
						setTranslate: Xt.setTranslate.bind(this),
						setTransition: Xt.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function() {
					this.params.effect === "coverflow" && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
				},
				setTranslate: function() {
					this.params.effect === "coverflow" && this.coverflowEffect.setTranslate()
				},
				setTransition: function(e) {
					this.params.effect === "coverflow" && this.coverflowEffect.setTransition(e)
				}
			}
		}, {
			name: "thumbs",
			params: {
				thumbs: {
					swiper: null,
					multipleActiveThumbs: !0,
					autoScrollOffset: 0,
					slideThumbActiveClass: "swiper-slide-thumb-active",
					thumbsContainerClass: "swiper-container-thumbs"
				}
			},
			create: function() {
				m.extend(this, {
					thumbs: {
						swiper: null,
						init: lt.init.bind(this),
						update: lt.update.bind(this),
						onThumbClick: lt.onThumbClick.bind(this)
					}
				})
			},
			on: {
				beforeInit: function() {
					var e = this.params.thumbs;
					e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0))
				},
				slideChange: function() {
					this.thumbs.swiper && this.thumbs.update()
				},
				update: function() {
					this.thumbs.swiper && this.thumbs.update()
				},
				resize: function() {
					this.thumbs.swiper && this.thumbs.update()
				},
				observerUpdate: function() {
					this.thumbs.swiper && this.thumbs.update()
				},
				setTransition: function(e) {
					var t = this.thumbs.swiper;
					t && t.setTransition(e)
				},
				beforeDestroy: function() {
					var e = this.thumbs.swiper;
					e && this.thumbs.swiperCreated && e && e.destroy()
				}
			}
		}];
	return we.use === void 0 && (we.use = we.Class.use, we.installModule = we.Class.installModule), we.use(wt), we
}));
const fl = "/assets/img/e3fdd908.png";
export {
	hl as A, Zs as _, Er as a, ul as b, pl as c, ol as d, wr as e, Js as f, xt as i, fl as l, dl as p, ll as r, Uo as u, cl as y
};