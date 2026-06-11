/* ============================================================
   Touchdown Sports — site interactions
   ============================================================ */

const I18N = {
  en: {
    "brand.tagline":"SPORTS",
    "nav.story":"Our Story",
    "nav.siybo":"SIYBO",
    "nav.numbers":"By the Numbers",
    "nav.thesis":"Our Platform",
    "nav.partners":"Partners",
    "nav.roadmap":"Roadmap",
    "nav.contact":"Contact",
    "nav.cta":"Work With Us →",

    "hero.kicker":"Asia's Sports Event Management Company",
    "hero.h1":"<span class=\"display-line\"><span class=\"ital\">Building</span> the league</span><span class=\"display-line\">young Asia <span class=\"ital\">travels for.</span></span>",
    "hero.lede":"We own and operate <b>SIYBO</b> — the Starlight International Youth Basketball Open — and are turning it into Asia's flagship youth basketball IP, while building the operating system behind the next generation of youth sports.",
    "hero.ctaA":"Read the story",
    "hero.ctaB":"Contact us →",

    "rail.next":"Next Edition",
    "rail.nextVal":"SIYBO IV · 2026",
    "rail.nextSub":"Singapore · 80 teams · 13 countries",
    "rail.endorsed":"Endorsed by",
    "rail.endorsedVal":"FIBA Asia",
    "rail.endorsedSub":"SportSG · STB · SEA · China Life · Yao Foundation",
    "rail.delivered":"Track Record",
    "rail.deliveredVal":"3 Editions · 12+ Countries",
    "rail.deliveredSub":"2023 · 2024 · 2025 delivered",

    "ticker.label":"INSTITUTIONAL BACKING",

    "story.chap":"Our Story",
    "story.h1":"Three years.",
    "story.h2":"One flagship IP.",
    "story.h3":"A company built one step at a time.",
    "story.p1":"Touchdown Sports was founded in Singapore in 2022 with a single conviction: Asia needs a youth basketball stage that truly draws clubs across borders — built to federation-grade standards, with the brand quality sponsors can get behind.",
    "story.p2":"That conviction became <b>SIYBO</b> — the Starlight International Youth Basketball Open.",
    "story.p3":"Three editions delivered across 12+ countries. 433,000 livestream views in a single edition. In 2026, SIYBO expands to 80 teams and 13 countries, with FIBA Asia endorsement and SEA Group as title sponsor.",
    "story.p4":"But what we're building isn't just a tournament.",
    "story.p5":"SIYBO is Touchdown's flagship IP. Around it, we're building an operating system for youth sports: event management, registration, sponsorship platforms, media rights, data infrastructure, and community. We aim to use this system to power the next generation of Asian youth sports IPs.",
    "story.k1h":"Proven Asset",
    "story.k1b":"SIYBO is delivered, not promised. Three editions, twelve countries, federation endorsement.",
    "story.k2h":"IP Owner + Operator",
    "story.k2b":"We own the IP, we run the operations, we scale the platform — clubs, sponsors, broadcasters and data.",
    "story.k3h":"Infrastructure From IP",
    "story.k3b":"Every system we build serves SIYBO first, then becomes the backbone for the next youth sports IP.",

    "siybo.chap":"The Flagship IP",
    "siybo.caption":"SIYBO 2025 · Singapore · ActiveSG Sports Hall",
    "siybo.h1":"Starlight International",
    "siybo.h2":"Youth Basketball Open.",
    "siybo.lede":"The international youth basketball stage Asian clubs travel for. Three years of execution. FIBA Asia endorsed. Title-sponsored by SEA Group for 2026. A calendar slot the region trusts.",
    "siybo.k1":"Teams · 2026",
    "siybo.k2":"Countries · 2026",
    "siybo.k3":"Livestream views · 2025",
    "siybo.k4":"Cumulative media reach",

    "gal.chap":"Inside SIYBO",
    "gal.t1":"Three years on court.",
    "gal.t2":"One brand the region recognises.",
    "gal.c1":"Coach huddle · between quarters",
    "gal.c2":"Opening ceremony · all teams",
    "gal.c3":"Dragon dance · opening",
    "gal.c4":"Cross-border match · Day 3",
    "gal.c5":"Team high-five · pre-game",
    "gal.c6":"Medal ceremony · finals",
    "gal.c7":"Sponsor-dressed arena · finals day",
    "gal.c8":"Rebound scramble · game day",

    "num.chap":"By the Numbers",
    "num.h1":"From zero",
    "num.h2":"to Asia's premier youth basketball event",
    "num.h3":"— in three years.",
    "num.s1":"Editions delivered",
    "num.s2":"Countries reached",
    "num.s2s":"Asia · Americas · Europe · Africa",
    "num.s3":"Cumulative media reach",
    "num.s4":"Livestream views",
    "num.s4s":"Single edition · 2025",
    "num.confirmed":"CONFIRMED FOR 2026",
    "num.teams":"Teams",
    "num.countries":"Countries",
    "num.venues":"Venues",
    "num.endorsed":"Asia Endorsed",
    "num.title":"Title Sponsor",

    "th.chap":"Our Platform",
    "th.h1":"SIYBO is the flagship IP.",
    "th.h2":"Touchdown is the operating system underneath.",
    "th.lede":"Every infrastructure capability is built on top of repeated SIYBO operations — then productised and reused across the IP portfolio.",
    "th.s1":"Front Stage",
    "th.s2":"Systemising",
    "th.s3":"Compounding",
    "th.s4":"Emerging",
    "th.t1":"SIYBO Flagship IP",
    "th.t2":"Event Infrastructure",
    "th.t3":"Team & Sponsor Network",
    "th.t4":"Media & Data Layer",
    "th.b1":"The annual international youth basketball open · elite showcase · girls, 3×3, camps and regional qualifiers.",
    "th.b2":"Standardised formats, registration, scheduling, venues, referees, livestream, hospitality and safety playbooks.",
    "th.b3":"Clubs, coaches, schools, parents, sponsors and public-sector partners accumulated through each SIYBO edition.",
    "th.b4":"Player profiles, team history, rankings, content rights, sponsor recap and year-round community touchpoints.",
    "th.foundationLbl":"FOUNDATION",
    "th.foundationBody":"SIYBO brand equity · three years of execution · FIBA Asia endorsement · sponsor and government validation.",

    "par.chap":"The Endorsement Stack",
    "par.h1":"Six institutional anchors.",
    "par.h2":"Assembled across three years of execution.",
    "par.lede":"Global federation recognition, public-sector support, sponsor credibility and industry trust — already in place. This is the network that makes SIYBO the region's most recognised youth basketball stage.",
    "par.r1":"Global Federation",
    "par.r2":"Government · Sport",
    "par.r3":"Government · Tourism",
    "par.r4":"Title Sponsor",
    "par.r5":"Founding Sponsor",
    "par.r6":"Industry Endorsement",
    "par.b1":"Asia-region endorsement for SIYBO as a recognised international youth event.",
    "par.b2":"Three consecutive years of public-sector support across SIYBO editions.",
    "par.b3":"SIYBO positioned within Singapore's sports-events tourism agenda.",
    "par.b4":"Title sponsor of SIYBO 2026 — a regional-scale tech and consumer anchor.",
    "par.b5":"Founding sponsor across the first three SIYBO editions (2023 – 2025).",
    "par.b6":"Endorsement from Yao Ming's foundation, an industry validator for youth basketball.",

    "rm.chap":"Our Journey",
    "rm.h1":"Three editions delivered.",
    "rm.h2":"A clear path ahead.",
    "rm.pastLabel":"HISTORY",
    "rm.p1theme":"Whatever It Takes",
    "rm.p1a":"18 teams · 8 countries",
    "rm.p1b":"184 players registered",
    "rm.p1c":"Inaugural edition · Singapore",
    "rm.p2theme":"Make It Happen",
    "rm.p2a":"28 teams · 12 countries",
    "rm.p2b":"350+ players",
    "rm.p2c":"Cross-border matches · live streaming",
    "rm.p3theme":"Next Level Experience",
    "rm.p3a":"46 teams · 20+ countries",
    "rm.p3b":"600+ players · U10 – U15",
    "rm.p3c":"FIBA Asia endorsed · SEA Group joins",
    "rm.fwdLabel":"AHEAD",
    "rm.f1y":"2026",
    "rm.f1stage":"CONFIRMED",
    "rm.f1a":"80 teams · 13 countries",
    "rm.f1b":"SEA Group title sponsor",
    "rm.f1c":"FIBA Asia endorsed",
    "rm.f1d":"2 venues · Singapore",
    "rm.f2y":"2027 →",
    "rm.f2stage":"Expanding",
    "rm.f2a":"30+ countries target",
    "rm.f2b":"Multi-format SIYBO portfolio",
    "rm.f2c":"Broadcast & digital expansion",
    "rm.f2d":"Broader community reach",

    "ct.chap":"Work With Us",
    "ct.h1":"From flagship IP",
    "ct.h2":"to Asia's youth sports IP company.",
    "ct.lede":"We are building Asia's most recognised youth basketball platform. If you're a sponsor, club, school, or potential partner, we'd love to hear from you.",
    "ct.parL":"For Sponsors & Partners",
    "ct.parB":"SIYBO 2026 sponsor tiers, club partnerships and venue collaborations welcome. <a href=\"mailto:siybo@touchdown.sg?subject=SIYBO%202026%20Business%20Enquiry\" class=\"inline-link\">Reach out →</a>",
    "ct.clbL":"For Clubs & Schools",
    "ct.clbB":"2026 team registration opens via the SIYBO secretariat. Email us to receive the prospectus. <a href=\"https://2026.siybo.org/home.html\" target=\"_blank\" rel=\"noopener\" class=\"inline-link\">Register now →</a>",
    "ct.cardLbl":"GET IN TOUCH",
    "ct.cardName":"Touchdown Sports",
    "ct.cardRole":"Singapore's Youth Basketball IP Company",
    "ct.email":"Email",
    "ct.web":"Web",
    "ct.hq":"Headquarters",
    "ct.hqVal":"Singapore · Founded 2022",
    "ct.send":"Send a message →",

    "foot.sub":"Singapore · Est. 2022",
    "foot.h1":"Sitemap",
    "foot.h2":"Get Involved",
    "foot.h3":"Contact",
    "foot.bizCta":"Business Enquiry",
    "foot.regCta":"Club Registration",
    "foot.all":"All rights reserved."
  },

  zh: {
    "brand.tagline":"达阵体育",
    "nav.story":"我们的故事",
    "nav.siybo":"SIYBO",
    "nav.numbers":"核心数据",
    "nav.thesis":"运营平台",
    "nav.partners":"合作伙伴",
    "nav.roadmap":"成长路径",
    "nav.contact":"联系",
    "nav.cta":"与我们合作 →",

    "hero.kicker":"达阵体育，亚洲体育赛事管理公司",
    "hero.h1":"<span class=\"display-line\">打造一项让<span class=\"ital\">国际青少年</span></span><span class=\"display-line\">向往的篮球赛事</span>",
    "hero.lede":"我们拥有并运营 <b>SIYBO</b> 星光国际青少年篮球公开赛，正将其打造为亚洲旗舰级青少年篮球 IP，并搭建支撑下一代国际青少年体育赛事的运营系统。",
    "hero.ctaA":"阅读完整故事",
    "hero.ctaB":"联系我们 →",

    "rail.next":"下一届",
    "rail.nextVal":"SIYBO 第四届 · 2026",
    "rail.nextSub":"新加坡 · 80 队 · 13 国",
    "rail.endorsed":"机构背书",
    "rail.endorsedVal":"FIBA 亚洲",
    "rail.endorsedSub":"SportSG · STB · SEA · 中国人寿 · 姚基金",
    "rail.delivered":"交付记录",
    "rail.deliveredVal":"三届赛事 · 覆盖 12+ 国家",
    "rail.deliveredSub":"2023 至 2025 连续举办",

    "ticker.label":"机构背书",

    "story.chap":"我们的故事",
    "story.h1":"三年。",
    "story.h2":"一个旗舰 IP。",
    "story.h3":"一家扎实成长起来的体育公司。",
    "story.p1":"达阵体育于 2022 年创立于新加坡。我们相信，亚洲需要一个真正能吸引各国俱乐部跨境参与的青少年篮球舞台：既有对标国际协会级赛事的执行标准，也具备让赞助商愿意投入的品牌质感。",
    "story.p2":"这个判断，后来成为 <b>SIYBO</b> 星光国际青少年篮球公开赛。",
    "story.p3":"三届赛事交付，覆盖 12+ 个国家；单届直播观看量达 43.3 万次。2026 年，SIYBO 将以 80 支球队、13 个国家的规模开赛，并获得 FIBA 亚洲认可，由 SEA Group 担任主赞助。",
    "story.p4":"但我们想讲的，不止是一项赛事。",
    "story.p5":"SIYBO 是达阵体育的旗舰 IP。围绕它，我们正在搭建一套面向青少年体育的运营系统：赛事组织、报名管理、赞助平台、内容权益、数据沉淀与社区运营。我们希望用这套系统，持续孵化和承接下一代亚洲青少年体育 IP。",
    "story.k1h":"已被验证的赛事资产",
    "story.k1b":"SIYBO 不是停留在概念里的项目，而是已经连续交付三届、覆盖 12+ 国家，并获得协会认可的赛事资产。",
    "story.k2h":"自有 IP，自营交付",
    "story.k2b":"我们拥有 IP，也亲自完成赛事运营，并在过程中持续沉淀俱乐部、赞助商、转播与数据资源。",
    "story.k3h":"从赛事长出运营能力",
    "story.k3b":"每一套系统先服务 SIYBO，再逐步沉淀为支持更多青少年体育 IP 的运营能力。",

    "siybo.chap":"旗舰 IP",
    "siybo.caption":"SIYBO 2025 · 新加坡 · ActiveSG 体育馆",
    "siybo.h1":"星光国际",
    "siybo.h2":"青少年篮球公开赛",
    "siybo.lede":"SIYBO 是一个吸引各国俱乐部跨境参与的国际青少年篮球舞台。三年连续交付，获得 FIBA 亚洲认可，并由 SEA Group 担任 2026 年主赞助。它正在成为亚洲青少年篮球赛历中被持续关注的一站。",
    "siybo.k1":"球队 · 2026",
    "siybo.k2":"国家 · 2026",
    "siybo.k3":"直播观看 · 2025",
    "siybo.k4":"累计媒体曝光",

    "gal.chap":"赛场内外",
    "gal.t1":"三年赛场实战。",
    "gal.t2":"一个被区域记住的品牌。",
    "gal.c1":"节间暂停 · 教练布置",
    "gal.c2":"开幕式 · 各国球队合影",
    "gal.c3":"开幕式舞龙",
    "gal.c4":"跨国对决 · 第三日",
    "gal.c5":"赛前击掌 · 团队动员",
    "gal.c6":"颁奖典礼 · 决赛日",
    "gal.c7":"决赛日 · 品牌化赛场",
    "gal.c8":"篮板争夺 · 比赛日",

    "num.chap":"核心数据",
    "num.h1":"三年。",
    "num.h2":"从零到亚洲旗舰级青少年篮球赛事。",
    "num.h3":"",
    "num.s1":"已成功举办届数",
    "num.s2":"覆盖国家",
    "num.s2s":"亚洲 · 美洲 · 欧洲 · 非洲",
    "num.s3":"累计媒体曝光",
    "num.s4":"直播观看",
    "num.s4s":"单届 · 2025",
    "num.confirmed":"2026 已锁定",
    "num.teams":"球队",
    "num.countries":"国家",
    "num.venues":"场地",
    "num.endorsed":"FIBA 亚洲认可",
    "num.title":"主赞助",

    "th.chap":"运营平台",
    "th.h1":"SIYBO 是旗舰 IP。",
    "th.h2":"达阵体育，是它背后的运营平台。",
    "th.lede":"我们把 SIYBO 的长期运营经验，沉淀为赛事组织、报名管理、赞助权益、内容传播、数据与社区运营等能力，并将其复用到更多青少年体育 IP 中。",
    "th.s1":"旗舰赛事",
    "th.s2":"运营系统",
    "th.s3":"网络沉淀",
    "th.s4":"内容与数据",
    "th.t1":"SIYBO 旗舰 IP",
    "th.t2":"赛事基础设施",
    "th.t3":"球队与赞助网络",
    "th.t4":"内容与数据层",
    "th.b1":"年度国际青少年篮球公开赛 · 精英展示 · 女篮、3×3、训练营与区域资格赛。",
    "th.b2":"标准化赛制、报名、赛程、场馆、裁判、直播、接待与安全手册。",
    "th.b3":"每一届 SIYBO 沉淀的球队、教练、学校、家长、赞助商与公共部门关系。",
    "th.b4":"球员档案、球队历史、排名、内容权益、赞助商复盘与全年社群触点。",
    "th.foundationLbl":"根基",
    "th.foundationBody":"SIYBO 品牌资产 · 三年沉淀 · FIBA 亚洲认可 · 赞助商与政府背书。",

    "par.chap":"合作与认可",
    "par.h1":"六大机构伙伴。",
    "par.h2":"三年持续积累。",
    "par.lede":"从国际协会认可、公共部门支持，到赞助商投入与行业伙伴背书，SIYBO 已经建立起支撑其区域影响力的合作网络。",
    "par.r1":"全球协会",
    "par.r2":"政府 · 体育",
    "par.r3":"政府 · 旅游",
    "par.r4":"主赞助",
    "par.r5":"创始主赞助",
    "par.r6":"行业背书",
    "par.b1":"FIBA 亚洲赋予 SIYBO 作为受认可的国际青少年赛事的地区背书。",
    "par.b2":"SIYBO 连续三届获得新加坡体育局支持。",
    "par.b3":"新加坡旅游局将 SIYBO 纳入新加坡体育赛事旅游议程。",
    "par.b4":"SEA Group 担任 SIYBO 2026 主赞助——区域级科技与消费品牌。",
    "par.b5":"中国人寿（新加坡）担任 SIYBO 创始主赞助，覆盖前三届（2023 – 2025）。",
    "par.b6":"姚基金的支持，为 SIYBO 增添了来自青少年篮球领域的重要行业认可。",

    "rm.chap":"成长路径",
    "rm.h1":"三届交付。",
    "rm.h2":"清晰的成长路径。",
    "rm.pastLabel":"历届回顾",
    "rm.p1theme":"无论如何",
    "rm.p1a":"18 支球队 · 8 个国家",
    "rm.p1b":"184 名注册球员",
    "rm.p1c":"首届赛事 · 新加坡",
    "rm.p2theme":"让它发生",
    "rm.p2a":"28 支球队 · 12 个国家",
    "rm.p2b":"350+ 球员",
    "rm.p2c":"跨国对决 · 直播上线",
    "rm.p3theme":"升级体验",
    "rm.p3a":"46 支球队 · 20+ 国家",
    "rm.p3b":"600+ 球员 · U10 – U15",
    "rm.p3c":"FIBA 亚洲认可 · SEA Group 加入",
    "rm.fwdLabel":"展望",
    "rm.f1y":"2026",
    "rm.f1stage":"已锁定",
    "rm.f1a":"80 队 · 13 国",
    "rm.f1b":"SEA Group 主赞助",
    "rm.f1c":"FIBA 亚洲认可",
    "rm.f1d":"两个场地 · 新加坡",
    "rm.f2y":"2027 →",
    "rm.f2stage":"持续扩张",
    "rm.f2a":"目标 30+ 国家",
    "rm.f2b":"SIYBO 多赛制组合",
    "rm.f2c":"转播与数字化扩张",
    "rm.f2d":"扩大社区影响力",

    "ct.chap":"与我们合作",
    "ct.h1":"从旗舰赛事 IP，",
    "ct.h2":"到亚洲青少年体育 IP 公司。",
    "ct.lede":"我们正在打造亚洲最具影响力的青少年篮球平台。无论您是赞助商、俱乐部、学校还是潜在合作伙伴，我们都期待与您合作。",
    "ct.parL":"赞助商与合作伙伴",
    "ct.parB":"欢迎洽谈 SIYBO 2026 赞助合作、俱乐部合作与场馆联合运营。<a href=\"mailto:siybo@touchdown.sg?subject=SIYBO%202026%20%E8%B5%9E%E5%8A%A9%E5%90%88%E4%BD%9C\" class=\"inline-link\">马上联系 →</a>",
    "ct.clbL":"俱乐部与学校",
    "ct.clbB":"2026 球队报名通过 SIYBO 秘书处开放，欢迎来信获取参赛手册。<a href=\"https://2026.siybo.org/home.html\" target=\"_blank\" rel=\"noopener\" class=\"inline-link\">立即报名 →</a>",
    "ct.cardLbl":"联系我们",
    "ct.cardName":"达阵体育",
    "ct.cardRole":"新加坡青少年篮球 IP 公司",
    "ct.email":"邮件",
    "ct.web":"网站",
    "ct.hq":"总部",
    "ct.hqVal":"新加坡 · 成立于 2022",
    "ct.send":"发送邮件 →",

    "foot.sub":"达阵体育 · 新加坡 · 成立于 2022",
    "foot.h1":"站点导航",
    "foot.h2":"参与方式",
    "foot.h3":"联系",
    "foot.bizCta":"商务合作",
    "foot.regCta":"俱乐部报名",
    "foot.all":"保留所有权利。"
  }
};

/* ----------------- apply language ----------------- */
function applyLang(lang){
  const dict = I18N[lang] || I18N.en;
  document.documentElement.setAttribute("data-lang", lang);
  document.documentElement.setAttribute("lang", lang === "zh" ? "zh-CN" : "en");
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.title = lang === "zh"
    ? "达阵体育 · 亚洲体育赛事管理公司"
    : "Touchdown Sports · Asia's Sports Event Management Company";
  try { localStorage.setItem("td.lang", lang); } catch(_) {}
}

function initLang(){
  let lang = "en";
  try { lang = localStorage.getItem("td.lang") || "en"; } catch(_) {}
  applyLang(lang);
  const toggle = document.querySelector(".lang");
  if (toggle){
    toggle.addEventListener("click", () => {
      const next = document.documentElement.getAttribute("data-lang") === "zh" ? "en" : "zh";
      applyLang(next);
    });
  }
}

/* ----------------- scroll reveal ----------------- */
function initReveal(){
  const els = document.querySelectorAll(
    ".pillars li, .siybo-content, .siybo-photo, .g, " +
    ".bs, .confirmed, .th-stack li, .foundation, " +
    ".par-card, .rm-past-card, .rm-card, .cta-paths li, .cta-card, " +
    ".story-head, .story-body, .numbers-head, " +
    ".th-head, .th-lede, .par-head, .par-lede, " +
    ".rm-head, .cta-head, .cta-lede"
  );
  els.forEach(el => el.classList.add("reveal"));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting){
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
  els.forEach(el => io.observe(el));
}

/* ----------------- active nav link ----------------- */
function initActiveNav(){
  const sections = ["story","siybo","numbers","thesis","partners","roadmap","contact"]
    .map(id => document.getElementById(id))
    .filter(Boolean);
  const links = Array.from(document.querySelectorAll(".primary a"));
  const linkFor = id => links.find(a => a.getAttribute("href") === "#" + id);

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting){
        const id = e.target.id;
        links.forEach(a => a.classList.remove("active"));
        const a = linkFor(id);
        if (a) a.classList.add("active");
      }
    });
  }, { threshold: 0.32, rootMargin: "-100px 0px -50% 0px" });

  sections.forEach(s => io.observe(s));
}

/* ----------------- mailto fallback ----------------- */
function initMailBtn() {
  const btn = document.querySelector('.cta-card-btn');
  if (!btn) return;
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const mailto = this.href;
    const gmail = 'https://mail.google.com/mail/?view=cm&fs=1&to=siybo@touchdown.sg&su=Touchdown+Sports+Inquiry';
    window.location.href = mailto;
    setTimeout(() => {
      if (!document.hidden) window.open(gmail, '_blank');
    }, 600);
  });
}

/* ----------------- boot ----------------- */
document.addEventListener("DOMContentLoaded", () => {
  initLang();
  initReveal();
  initActiveNav();
  initMailBtn();
});
