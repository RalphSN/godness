import {
	t as s
} from "./CtbTsni8ES.js";
import {
	I as S
} from "./DN1vSfZusm.js";
import {
	B as b
} from "./Bl8gX_-ncd.js";
import {
	_ as P,
	u as z,
	e as F,
	a as H
} from "./DhXoEIzR0R.js";
import {
	b as a,
	v as L,
	o as $,
	C as K,
	e as l,
	f as c,
	y as u,
	h as g,
	E as p,
	u as n,
	F as T,
	D as y,
	i as U,
	n as V,
	t as Y
} from "./6jsWGvxKsM.js";
import "./BlTxHScWgo.js";
const q = {
		logo: {
			image: new URL("/assets/img/76a6237d.png", import.meta.url).href,
			target_id: "part1"
		},
		// searchBtn: {
		// 	image: new URL("/assets/img/1c4a9e97.png", import.meta.url).href,
		// 	isBg: !0
		// },
		// searchBtn2: {
		// 	image: new URL("/assets/img/b89e8675.png", import.meta.url).href,
		// 	isBg: !0,
		// 	clickUrl: "https://webpay-gt.funcatgames.com/"
		// },
		menuList: [{
			title: "首頁",
			target_id: "part1"
		}, 
    // {
		// 	title: "檔案",
		// 	target_id: "part2"
		// }, {
		// 	title: "世界觀",
		// 	target_id: "part3"
		// }, 
    {
			title: "特色",
			target_id: "part4"
		}],
		linkList: [
    //   {
		// 	image: new URL("/assets/img/10089ed6.png", import.meta.url).href,
		// 	btntext: "官方FACEBOOK",
		// 	href: "https://www.facebook.com/tokyoghoulawakening"
		// }, {
		// 	image: new URL("/assets/img/3749dbea.png", import.meta.url).href,
		// 	btntext: "官方DISCORD",
		// 	href: "https://discord.gg/TeheSkKakC"
		// }, {
		// 	image: new URL("/assets/img/90037b67.png", import.meta.url).href,
		// 	btntext: "官方YOUTUBE",
		// 	href: "https://www.youtube.com/@tokyoghoulawakening"
		// }
  ],
		menuActiveBg: {
			image: new URL("/assets/img/15c5d208.png", import.meta.url).href
		}
	},
	G = {
		class: "list"
	},
	J = ["onClick"],
	Q = {
		class: "link"
	},
	W = {
		class: "link-icon"
	},
	X = ["href"],
	Z = {
		class: "btn-group"
	},
	ee = {
		__name: "index",
		setup(te) {
			const j = z(),
				x = F(),
				w = H(),
				v = a(() => s.i18nTm("pre_djssg_gt_pc_menu.logo") ?? {}),
				A = a(() => s.i18nTm("pre_djssg_gt_pc_menu.searchBtn") ?? {}),
				C = a(() => s.i18nTm("pre_djssg_gt_pc_menu.searchBtn2") ?? {});
			a(() => s.i18nTm("pre_djssg_gt_pc_menu.menuBtn") ?? {});
			const R = a(() => s.i18nTm("pre_djssg_gt_pc_menu.menuActiveBg") ?? {}),
				_ = a(() => s.i18nTm("pre_djssg_gt_pc_menu.menuList") ?? {}),
				D = a(() => s.i18nTm("pre_djssg_gt_pc_menu.linkList") ?? {}),
				E = {},
				d = L(1),
				h = L(!1),
				I = () => {
					const e = s.handleModuleData(q, E, "pre_djssg_gt_pc_menu");
					j.mergeAllLocaleMessage(e), window.addEventListener("scroll", B)
				},
				k = e => {
					e && (e.target_id && (d.value = e.target_id, s.gotoScroll(e.target_id)), e.url && window.open(e.url))
				},
				N = () => {
					x.isAuthorize ? w.openPop("pre_djssg_gt_pc_PopRewardSearch") : w.openPop("pre_djssg_gt_pc_PopFirstScreen")
				},
				M = () => {
					const e = document.documentElement.scrollTop || document.body.scrollTop,
						m = window.innerHeight,
						r = _.value.map(t => document.getElementById(t.target_id)).map(t => t ? t.offsetTop : 0);
					let i = NaN;
					const f = e + m / 2;
					e > 0 ? h.value = !0 : h.value = !1;
					for (let t = 0; t < r.length; t++) {
						const O = r[t + 1] || document.body.scrollHeight;
						if (f >= r[t] && f < O) {
							i = t;
							break
						}
					}
					f >= r[r.length - 1] && (i = Math.min(i, r.length - 1)), d.value = _.value[i]?.target_id || NaN
				},
				B = s.throttle(M, 100);
			return $(() => {
				I()
			}), K(() => {
				window.removeEventListener("scroll", B)
			}), (e, m) => (c(), l("div", {
				class: U(["menu", {
					active: n(h)
				}])
			}, [u(S, p({
				class: "logo"
			}, n(v), {
				onClick: m[0] || (m[0] = o => k(n(v)))
			}), null, 16), g("div", G, [g("ul", null, [(c(!0), l(T, null, y(n(_), (o, r) => (c(), l("li", {
				key: r,
				class: U({
					active: n(d) == o.target_id
				}),
				style: V({
					"--menuActiveBg": `url(${n(R).image})`
				}),
				onClick: i => k(o)
			}, Y(o.title), 15, J))), 128))])]), g("div", Q, [(c(!0), l(T, null, y(n(D), o => (c(), l("div", W, [g("a", {
				href: o.href,
				target: "_blank"
			}, [u(S, p({
				class: "img"
			}, {
				ref_for: !0
			}, o), null, 16)], 8, X)]))), 256))]), 
      // g("div", Z, [u(b, p({
			// 	class: "search-btn"
			// }, n(C)), null, 16), u(b, p({
			// 	class: "search-btn"
			// }, n(A), {
			// 	onClick: N
			// }), null, 16)])
    ], 2))
		}
	},
	le = P(ee, [
		["__scopeId", "data-v-37365a01"]
	]);
export {
	le as
	default
};