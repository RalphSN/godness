import {
	t as s
} from "./CtbTsni8ES.js";
import {
	I as a
} from "./DN1vSfZusm.js";
import {
	B as r
} from "./Bl8gX_-ncd.js";
import {
	_ as B,
	u as U
} from "./DhXoEIzR0R.js";
import {
	b as o,
	o as L,
	e as R,
	f as S,
	h as t,
	H as _,
	t as p,
	u as e,
	G as A,
	y as n,
	E as i
} from "./6jsWGvxKsM.js";
import "./BlTxHScWgo.js";
const G = {
		gameName: {
			text: "《女神檔案》"
		},
		gameDesc: {
			// text: "遊戲類型：超人氣動漫改編奇幻RPG&nbsp;&nbsp; | &nbsp;&nbsp;發行平台：App Store、Google Play&nbsp;&nbsp; | &nbsp;&nbsp;上市時間：2025年5月7日"
      text : "遊戲類型：超人氣動漫改編奇幻RPG&nbsp;&nbsp; | &nbsp;&nbsp;發行平台：App Store、Google Play&nbsp;&nbsp;"
		},
		footDesc: {
			text: "◆ 《女神檔案》依遊戲軟體分級管理辦法分類為輔15級。<br/>◆ 遊戲部分情節涉及暴力、不當言語，十五歲以上之人始得使用。<br />◆ 本遊戲為免費使用，內另有提供購買虛擬遊戲幣、物品等付費服務。"
		},
		corporation: {
			// text: "©Sui lshida/Shueisha,Tokyo Ghoul Production Committee<br/>©GameSamba Corporation.©FUNCAT GAMES."
      text: ""
		},
		activityDescription: {
			image: new URL("/assets/img/e24a7f39.png", import.meta.url).href,
			openPop: "pre_djssg_gt_pc_PopActivityDescription"
		},
		icon: {
			image: new URL("/assets/img/08f1e03b.png", import.meta.url).href
		},
		icon12: {
			image: new URL("/assets/img/45d0d1a7.png", import.meta.url).href
		},
		icon15: {
			image: new URL("/assets/img/d3e5671f.png", import.meta.url).href
		},
		logo: {
			image: new URL("/assets/img/a6c1c4a8.png", import.meta.url).href
		},
		// fb: {
		// 	image: new URL("/assets/img/15a581aa.png", import.meta.url).href,
		// 	isBg: !0,
		// 	clickUrl: "https://www.facebook.com/tokyoghoulawakening"
		// },
		// discord: {
		// 	image: new URL("/assets/img/ac21a24d.png", import.meta.url).href,
		// 	isBg: !0,
		// 	clickUrl: "https://discord.gg/TeheSkKakC"
		// },
		// youtube: {
		// 	image: new URL("/assets/img/38a70a7f.png", import.meta.url).href,
		// 	isBg: !0,
		// 	clickUrl: "https://www.youtube.com/@tokyoghoulawakening"
		// },
		privacyBtn: {
			text: "隱私政策",
			href: "https://www.luckywings.net/privacy"
		},
		// termsBtn: {
		// 	text: "服務契約",
		// 	href: "https://sdk-dg-gt.funcatgames.com/funcat/service-tw/"
		// }
	},
	N = {
		class: "footer",
		id: "footer"
	},
	P = {
		class: "game-details"
	},
	M = {
		class: "name"
	},
	C = {
		class: "footer-btn"
	},
	I = {
		class: "icon-list"
	},
	E = {
		class: "btn-icon"
	},
	V = {
		class: "btn-icon"
	},
	F = {
		class: "btn-icon"
	},
	H = {
		class: "footer-info"
	},
	K = {
		class: "icon-list"
	},
	q = {
		class: "footer-info-details"
	},
	z = {
		class: "foot-desc"
	},
	J = {
		class: "link"
	},
	O = ["href"],
	Q = ["href"],
	W = {
		class: "foot-bottom"
	},
	X = {
		__name: "index",
		setup(Y) {
			const d = U();
			o(() => s.i18nTm("pre_djssg_gt_pc_footer.activityDescription") ?? {});
			const f = o(() => s.i18nTm("pre_djssg_gt_pc_footer.fb") ?? {}),
				u = o(() => s.i18nTm("pre_djssg_gt_pc_footer.discord") ?? {}),
				h = o(() => s.i18nTm("pre_djssg_gt_pc_footer.youtube") ?? {}),
				l = o(() => s.i18nTm("pre_djssg_gt_pc_footer.privacyBtn") ?? {}),
				m = o(() => s.i18nTm("pre_djssg_gt_pc_footer.termsBtn") ?? {}),
				b = o(() => s.i18nTm("pre_djssg_gt_pc_footer.icon") ?? {});
			o(() => s.i18nTm("pre_djssg_gt_pc_footer.icon12") ?? {});
			const v = o(() => s.i18nTm("pre_djssg_gt_pc_footer.icon15") ?? {}),
				k = o(() => s.i18nTm("pre_djssg_gt_pc_footer.logo") ?? {}),
				w = o(() => s.i18nTm("pre_djssg_gt_pc_footer.gameName") ?? {}),
				y = o(() => s.i18nTm("pre_djssg_gt_pc_footer.gameDesc") ?? {}),
				x = o(() => s.i18nTm("pre_djssg_gt_pc_footer.footDesc") ?? {}),
				T = o(() => s.i18nTm("pre_djssg_gt_pc_footer.corporation") ?? {}),
				j = {},
				D = () => {
					const g = s.handleModuleData(G, j, "pre_djssg_gt_pc_footer");
					d.mergeAllLocaleMessage(g)
				};
			return L(() => {
				D()
			}), (g, Z) => {
				const c = A("dompurify-html");
				return S(), R("div", N, [t("div", P, [t("div", M, [t("span", null, p(e(w).text), 1)]), _(t("p", null, null, 512), [
					[c, e(y).text]
				]), t("div", C, [
				// 	t("div", I, [t("div", E, [n(r, i({
				// 	class: "img"
				// }, e(f)), null, 16)]), t("div", V, [n(r, i({
				// 	class: "img"
				// }, e(u)), null, 16)]), t("div", F, [n(r, i({
				// 	class: "img"
				// }, e(h)), null, 16)])])
			])]), t("div", H, [t("div", K, [n(a, i({
					class: "icon"
				}, e(b)), null, 16), n(a, i({
					class: "logo"
				}, e(k)), null, 16), n(a, i({
					class: "icon-15"
				}, e(v)), null, 16)]), t("div", q, [t("div", z, [_(t("p", null, null, 512), [
					[c, e(x).text]
				])]), t("div", J, [t("a", {
					class: "link-btn",
					href: e(l).href,
					target: "_blank"
				}, p(e(l).text), 9, O), 
        // t("a", {
				// 	class: "link-btn",
				// 	href: e(m).href,
				// 	target: "_blank"
				// }, p(e(m).text), 9, Q)
      ]), t("div", W, [_(t("p", null, null, 512), [
					[c, e(T).text]
				])])])])])
			}
		}
	},
	it = B(X, [
		["__scopeId", "data-v-7e8667dc"]
	]);
export {
	it as
	default
};