import * as b from "react";
import * as x from "react/jsx-runtime";
import "./App.css";

const GovUIContext = b.createContext({
  lang: "EN",
  mobileSim: false,
  complaints: [],
  lastComplaint: null,
  addComplaint: () => ({}),
  updateComplaint: () => {},
  toggleLang: () => {},
  toggleMobile: () => {},
  goBack: (fallback) => fallback && fallback()
});

function GoiDeptLogo({ ministry = "GOVT OF INDIA", color = "#0B2447" }) {
  return (0, x.jsxs)("div", {
    className: "inline-flex flex-col items-center justify-center rounded-xl p-1.5 flex-shrink-0",
    style: {
      width: "46px",
      height: "46px",
      background: "#FFFFFF",
      border: `1.5px solid ${color}`,
      borderTop: "3px solid #FF9933",
      borderBottom: "3px solid #138808",
      boxShadow: "0 2px 6px rgba(11,36,71,0.08)"
    },
    title: `Government of India — ${ministry}`,
    children: [
      (0, x.jsx)("img", {
        src: "https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg",
        alt: ministry,
        style: { width: "20px", height: "24px", objectFit: "contain" }
      }),
      (0, x.jsx)("span", {
        style: {
          fontSize: "6px",
          fontWeight: 800,
          color: "#0B2447",
          letterSpacing: "0.2px",
          lineHeight: 1,
          marginTop: "2px",
          textAlign: "center",
          whiteSpace: "nowrap",
          overflow: "hidden",
          maxWidth: "40px"
        },
        children: ministry
      })
    ]
  });
}

function HeroSlideshowBg() {
  const [slideIdx, setSlideIdx] = b.useState(0);
  const slides = ["/hero-slide-1.jpg", "/hero-slide-2.jpg"];
  b.useEffect(() => {
    const timer = setInterval(() => {
      setSlideIdx((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);
  return (0, x.jsxs)("div", {
    style: {
      position: "absolute",
      inset: 0,
      overflow: "hidden",
      pointerEvents: "none",
      zIndex: 0
    },
    children: [
      slides.map((src, idx) =>
        (0, x.jsx)("img", {
          src,
          alt: "",
          style: {
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            filter: "blur(3.5px) saturate(1.1)",
            transform: "scale(1.03)",
            opacity: slideIdx === idx ? 0.58 : 0,
            transition: "opacity 1.8s ease-in-out"
          }
        }, src)
      ),
      (0, x.jsx)("div", {
        style: {
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(255,248,240,0.42) 0%, rgba(255,255,255,0.36) 50%, rgba(241,249,242,0.42) 100%)"
        }
      })
    ]
  });
}

var ee=(0,b.createContext)(()=>{}),S=()=>(0,b.useContext)(ee),usePolisenseToast=S;function C({toasts:e,dismiss:t}){return(0,x.jsx)(`div`,{className:`fixed top-5 right-5 z-[9999] flex flex-col gap-3 pointer-events-none`,style:{maxWidth:380},children:e.map(e=>{let n={dev:{bg:`rgba(217,95,0,0.10)`,border:`rgba(217,95,0,0.35)`,icon:`🛠️`,label:`DEV MODE`},success:{bg:`rgba(16,185,129,0.10)`,border:`rgba(16,185,129,0.35)`,icon:`✅`,label:`SUCCESS`},info:{bg:`rgba(19,136,8,0.10)`,border:`rgba(19,136,8,0.35)`,icon:`ℹ️`,label:`INFO`},warn:{bg:`rgba(251,191,36,0.10)`,border:`rgba(251,191,36,0.35)`,icon:`⚠️`,label:`NOTICE`}}[e.type];return(0,x.jsxs)(`div`,{className:`pointer-events-auto rounded-2xl px-5 py-4 flex items-start gap-3 shadow-2xl`,style:{background:`rgba(7,18,31,0.97)`,border:`1px solid ${n.border}`,backdropFilter:`blur(20px)`,boxShadow:`0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px ${n.border}`},children:[(0,x.jsx)(`span`,{className:`text-xl flex-shrink-0 mt-0.5`,children:n.icon}),(0,x.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,x.jsx)(`div`,{className:`flex items-center gap-2 mb-1`,children:(0,x.jsx)(`span`,{className:`text-xs font-bold tracking-widest`,style:{color:e.type===`dev`?`#D95F00`:e.type===`success`?`#10b981`:e.type===`warn`?`#fbbf24`:`#138808`},children:n.label})}),(0,x.jsx)(`div`,{className:`text-white font-semibold text-sm leading-snug`,style:{fontFamily:`Poppins`},children:e.title}),(0,x.jsx)(`div`,{className:`text-white/55 text-xs mt-1 leading-relaxed`,children:e.msg})]}),(0,x.jsx)(`button`,{onClick:()=>t(e.id),className:`text-white/25 hover:text-white/70 transition-colors flex-shrink-0 mt-0.5`,children:(0,x.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M6 18L18 6M6 6l12 12`})})})]},e.id)})})}var w={complaint:(0,x.jsx)(`svg`,{className:`w-6 h-6`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z`})}),ai:(0,x.jsx)(`svg`,{className:`w-6 h-6`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-2`})}),track:(0,x.jsx)(`svg`,{className:`w-6 h-6`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01`})}),governance:(0,x.jsx)(`svg`,{className:`w-6 h-6`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4`})}),political:(0,x.jsx)(`svg`,{className:`w-6 h-6`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z`})}),letter:(0,x.jsx)(`svg`,{className:`w-6 h-6`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z`})}),voice:(0,x.jsx)(`svg`,{className:`w-6 h-6`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z`})}),predictive:(0,x.jsx)(`svg`,{className:`w-6 h-6`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z`})}),secure:(0,x.jsx)(`svg`,{className:`w-6 h-6`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z`})}),menu:(0,x.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M4 6h16M4 12h16M4 18h16`})}),close:(0,x.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M6 18L18 6M6 6l12 12`})}),check:(0,x.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2.5,d:`M5 13l4 4L19 7`})}),send:(0,x.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M12 19l9 2-9-18-9 18 9-2zm0 0v-8`})}),chat:(0,x.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M8 12h.01M12 12h.01M16 12h.01M21 3H3a1 1 0 00-1 1v14a1 1 0 001 1h4l4 4 4-4h6a1 1 0 001-1V4a1 1 0 00-1-1z`})}),phone:(0,x.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z`})}),mail:(0,x.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z`})}),location:(0,x.jsxs)(`svg`,{className:`w-4 h-4`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:[(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z`}),(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M15 11a3 3 0 11-6 0 3 3 0 016 0z`})]}),download:(0,x.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4`})}),print:(0,x.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z`})}),chevron:e=>(0,x.jsx)(`svg`,{className:`w-4 h-4 ${e||``}`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M19 9l-7 7-7-7`})}),arrow:(0,x.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M17 8l4 4m0 0l-4 4m4-4H3`})}),upload:(0,x.jsx)(`svg`,{className:`w-6 h-6`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12`})}),mapPin:(0,x.jsxs)(`svg`,{className:`w-6 h-6`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:[(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z`}),(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M15 11a3 3 0 11-6 0 3 3 0 016 0z`})]}),mic:(0,x.jsx)(`svg`,{className:`w-6 h-6`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z`})}),star:(0,x.jsx)(`svg`,{className:`w-5 h-5 text-yellow-400 fill-yellow-400`,viewBox:`0 0 24 24`,children:(0,x.jsx)(`path`,{d:`M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z`})})};function te({currentPage:e,navigate:t}){
let[n,r]=(0,b.useState)(!1),[i,a]=(0,b.useState)(!1),uCtrl=(0,b.useContext)(GovUIContext);
(0,b.useEffect)(()=>{
let e=()=>r(window.scrollY>20);
return window.addEventListener(`scroll`,e),()=>window.removeEventListener(`scroll`,e)
},[]);
let o=[{label:`Home`,page:`home`},{label:`About`,page:`about`},{label:`Features`,page:`features`},{label:`AI Assistant`,page:`ai-assistant`},{label:`Contact`,page:`contact`}],
c=e=>{t(e),a(!1),window.scrollTo(0,0)};
return(0,x.jsxs)(`nav`,{
className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300`,
style:{background:`#FFFFFF`,borderTop:`4px solid #FF9933`,borderBottom:`2px solid #138808`,boxShadow:`0 3px 14px rgba(11,36,71,0.08)`},
children:[
(0,x.jsx)(`div`,{
className:`max-w-7xl mx-auto px-4`,
style:{width:`100%`,boxSizing:`border-box`},
children:(0,x.jsxs)(`div`,{
style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,flexWrap:`wrap`,minHeight:`64px`,padding:`6px 0`,gap:`10px`},
children:[
(0,x.jsxs)(`div`,{
style:{display:`flex`,alignItems:`center`,gap:`8px`,flexShrink:0},
children:[
e!==`home`&&(0,x.jsx)(`button`,{
type:`button`,
onClick:()=>uCtrl.goBack(()=>c(`home`)),
className:`rounded-lg text-xs font-bold transition-all`,
style:{display:`inline-flex`,alignItems:`center`,height:`34px`,padding:`0 10px`,background:`#FFF5EB`,color:`#C2410C`,border:`1px solid #FDBA74`,whiteSpace:`nowrap`,cursor:`pointer`},
title:`Go Back`,
children:`← Back`
}),
(0,x.jsxs)(`button`,{
onClick:()=>c(`home`),
className:`flex items-center gap-2 group`,
style:{display:`inline-flex`,alignItems:`center`,gap:`8px`,cursor:`pointer`},
children:[
(0,x.jsx)(`img`,{
src:`https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg`,
alt:`Emblem of India`,
style:{width:`26px`,height:`30px`,objectFit:`contain`,flexShrink:0}
}),
(0,x.jsxs)(`div`,{
className:`text-left`,
children:[
(0,x.jsxs)(`span`,{
className:`font-bold tracking-wide block leading-none`,
style:{fontFamily:`Poppins, sans-serif`,color:`#0B2447`,fontSize:`17px`},
children:[`POLI`,(0,x.jsx)(`span`,{style:{color:`#138808`},children:`SENCE`})]
}),
(0,x.jsx)(`span`,{style:{fontSize:`8.5px`,fontWeight:700,color:`#C2410C`,letterSpacing:`0.4px`,display:`block`,marginTop:`1px`},children:`GOVT. OF INDIA · IGRS`})
]
})
]
})
]
}),
(0,x.jsx)(`div`,{
className:`hidden md:flex items-center`,
style:{gap:`14px`,alignItems:`center`},
children:o.map(t=>(0,x.jsx)(`button`,{onClick:()=>c(t.page),className:`nav-link ${e===t.page?`active`:``}`,style:{fontSize:`13px`,padding:`4px 2px`},children:t.label},t.page))
}),
(0,x.jsxs)(`div`,{
style:{display:`flex`,alignItems:`center`,gap:`8px`,flexShrink:0,marginLeft:`auto`},
children:[
(0,x.jsx)(`button`,{
type:`button`,
onClick:()=>c(`track`),
className:`btn-cyan text-xs font-bold`,
style:{display:`inline-flex`,alignItems:`center`,justifyContent:`center`,height:`36px`,padding:`0 13px`,borderRadius:`8px`,fontSize:`12px`,fontWeight:700,whiteSpace:`nowrap`,lineHeight:1},
children:`Track Complaint`
}),
(0,x.jsx)(`button`,{
type:`button`,
onClick:()=>c(`register`),
className:`btn-orange text-xs font-bold`,
style:{display:`inline-flex`,alignItems:`center`,justifyContent:`center`,height:`36px`,padding:`0 14px`,borderRadius:`8px`,fontSize:`12px`,fontWeight:700,whiteSpace:`nowrap`,lineHeight:1},
children:`Register Complaint`
}),
(0,x.jsxs)(`button`,{
type:`button`,
onClick:()=>c(`role-selection`),
className:`gov-login-btn text-xs font-bold rounded-lg transition-all`,
style:{display:`inline-flex`,alignItems:`center`,justifyContent:`center`,gap:`6px`,height:`36px`,padding:`0 16px`,borderRadius:`8px`,fontSize:`12px`,fontWeight:700,color:`#FFFFFF`,background:`linear-gradient(135deg, #138808 0%, #0F6D06 100%)`,border:`1.5px solid #0B2447`,boxShadow:`0 3px 10px rgba(19,136,8,0.25)`,whiteSpace:`nowrap`,cursor:`pointer`,lineHeight:1},
children:[
(0,x.jsx)(`svg`,{style:{width:`14px`,height:`14px`,color:`#FFFFFF`,flexShrink:0},fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2.2,d:`M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z`})}),
(0,x.jsx)(`span`,{style:{color:`#FFFFFF`,fontWeight:700},children:`Login`})
]
}),
(0,x.jsx)(`button`,{className:`md:hidden p-1.5`,style:{color:`#0B2447`,border:`1px solid #CBD5E1`,borderRadius:`8px`,background:`#F8FAFC`},onClick:()=>a(!i),children:i?w.close:w.menu})
]
})
]
})
}),
i&&(0,x.jsxs)(`div`,{
className:`md:hidden glass border-t px-4 py-4 space-y-3`,
style:{background:`#FFFFFF`,borderColor:`#CBD5E1`},
children:[
o.map(t=>(0,x.jsx)(`button`,{onClick:()=>c(t.page),className:`block w-full text-left nav-link text-base py-2 ${e===t.page?`active`:``}`,children:t.label},t.page)),
(0,x.jsxs)(`div`,{
className:`flex gap-2.5 pt-2 flex-wrap`,
children:[
(0,x.jsx)(`button`,{onClick:()=>c(`register`),className:`btn-orange text-xs py-2.5 px-4 flex-1`,children:`Register Complaint`}),
(0,x.jsx)(`button`,{onClick:()=>c(`track`),className:`btn-cyan text-xs py-2.5 px-4 flex-1`,children:`Track Complaint`}),
(0,x.jsx)(`button`,{onClick:()=>c(`role-selection`),className:`gov-login-btn text-xs py-2.5 px-4 w-full rounded-lg font-bold`,style:{background:`#138808`,color:`#FFFFFF`},children:`Login / Workspace`})
]
})
]
})
]
})
}
function ne({navigate:e}){let t=t=>{e(t),window.scrollTo(0,0)};return(0,x.jsx)(`footer`,{style:{background:`linear-gradient(180deg, #FFF6EC 0%, #F1F5F9 50%, #ECF7EE 100%)`,borderTop:`4px solid #FF9933`,borderBottom:`4px solid #138808`},children:(0,x.jsxs)(`div`,{className:`max-w-7xl mx-auto px-6 py-16`,children:[(0,x.jsxs)(`div`,{className:`grid grid-cols-1 md:grid-cols-4 gap-10 mb-12`,children:[(0,x.jsxs)(`div`,{className:`md:col-span-2`,children:[(0,x.jsxs)(`div`,{className:`flex items-center gap-2 mb-4`,children:[(0,x.jsx)(`div`,{className:`w-9 h-9 rounded-lg flex items-center justify-center`,style:{background:`linear-gradient(135deg, #138808, #0057a8)`},children:(0,x.jsx)(`span`,{className:`text-white font-bold text-sm`,style:{fontFamily:`Poppins`},children:`P`})}),(0,x.jsxs)(`span`,{className:`text-white font-bold text-2xl tracking-wide`,style:{fontFamily:`Poppins`},children:[`POLI`,(0,x.jsx)(`span`,{style:{color:`#138808`},children:`SENCE`})]})]}),(0,x.jsx)(`p`,{className:`text-white/50 text-sm leading-relaxed max-w-xs`,children:`AI-powered Governance & Political Intelligence Platform connecting citizens, authorities, and decision-makers for a smarter, more transparent democracy.`}),(0,x.jsx)(`div`,{className:`flex gap-3 mt-6`,children:[`Twitter`,`LinkedIn`,`GitHub`,`YouTube`].map(e=>(0,x.jsx)(`button`,{className:`w-9 h-9 rounded-full flex items-center justify-center text-white/40 hover:text-[#138808] transition-colors`,style:{background:`#F1F5F9`,border:`1px solid #CBD5E1`},children:(0,x.jsx)(`span`,{className:`text-xs font-bold`,children:e[0]})},e))})]}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h4`,{className:`text-white font-semibold text-sm mb-4 tracking-wider uppercase`,children:`Quick Links`}),(0,x.jsx)(`ul`,{className:`space-y-3`,children:[[`Home`,`home`],[`About`,`about`],[`Features`,`features`],[`AI Assistant`,`ai-assistant`],[`Contact`,`contact`]].map(([e,n])=>(0,x.jsx)(`li`,{children:(0,x.jsx)(`button`,{onClick:()=>t(n),className:`text-white/50 hover:text-[#138808] text-sm transition-colors`,children:e})},n))})]}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h4`,{className:`text-white font-semibold text-sm mb-4 tracking-wider uppercase`,children:`Services`}),(0,x.jsxs)(`ul`,{className:`space-y-3`,children:[[[`Register Complaint`,`register`],[`Track Complaint`,`track`],[`Official Letter`,`letter`]].map(([e,n])=>(0,x.jsx)(`li`,{children:(0,x.jsx)(`button`,{onClick:()=>t(n),className:`text-white/50 hover:text-[#138808] text-sm transition-colors`,children:e})},n)),(0,x.jsx)(`li`,{children:(0,x.jsx)(`button`,{className:`text-white/50 hover:text-[#138808] text-sm transition-colors`,children:`Privacy Policy`})}),(0,x.jsx)(`li`,{children:(0,x.jsx)(`button`,{className:`text-white/50 hover:text-[#138808] text-sm transition-colors`,children:`Terms & Conditions`})})]})]})]}),(0,x.jsxs)(`div`,{className:`border-t border-white/06 pt-6 flex flex-col md:flex-row items-center justify-between gap-3`,children:[(0,x.jsx)(`p`,{className:`text-white/30 text-xs`,children:`© 2026 POLISENCE. All rights reserved. Government AI Platform.`}),(0,x.jsx)(`p`,{className:`text-white/20 text-xs`,children:`Powered by AI · Built for Democracy · Secured by Design`})]})]})})}function T({navigate:e}){let t=t=>{e(t),window.scrollTo(0,0)},[n,r]=(0,b.useState)(null),i=[{q:`What is POLISENCE?`,a:`POLISENCE is an AI-powered Governance & Political Intelligence Platform that bridges the gap between citizens and government authorities. It enables transparent complaint management, real-time tracking, and data-driven governance insights.`},{q:`How do I register a complaint?`,a:`Click 'Register Complaint' in the navigation or hero section. Fill in your personal details, describe your issue with optional photo/voice attachments, choose a location, review your submission, and receive a unique complaint ID.`},{q:`How do I track the status of my complaint?`,a:`Use the 'Track Complaint' button and enter your unique complaint ID. You'll see a real-time timeline showing Pending → Under Review → Assigned → Resolved stages.`},{q:`Is my personal data secure?`,a:`Yes. POLISENCE employs end-to-end encryption, government-grade security protocols, and complies with all applicable data protection regulations. Your information is never shared without consent.`},{q:`What types of complaints can I register?`,a:`Infrastructure, Public Health, Education, Water Supply, Electricity, Roads, Sanitation, Environment, Public Safety, Municipal Services, and more. Our AI categorizes complaints intelligently for faster routing.`},{q:`How long does resolution typically take?`,a:`Resolution time varies by complaint type. High-priority issues are typically addressed within 48 hours. General complaints average 7–14 working days. You'll receive real-time updates throughout the process.`}],a=[{value:`2.4M+`,label:`Complaints Resolved`},{value:`98.2%`,label:`Satisfaction Rate`},{value:`47hrs`,label:`Avg Resolution Time`},{value:`340+`,label:`Government Depts.`}],o=[{icon:w.complaint,title:`Smart Complaint Registration`,desc:`Multi-modal submission with AI-powered categorization, photo uploads, and voice notes.`},{icon:w.ai,title:`AI Citizen Assistant`,desc:`24/7 intelligent chatbot to guide citizens through processes and answer governance queries.`},{icon:w.track,title:`Real-time Tracking`,desc:`Live complaint lifecycle monitoring with predictive resolution timelines.`},{icon:w.governance,title:`Governance Intelligence`,desc:`Data-driven insights to empower decision-makers with actionable analytics.`},{icon:w.voice,title:`Voice Complaints`,desc:`Barrier-free submission via multilingual voice input, powered by Whisper AI (coming soon).`},{icon:w.secure,title:`Secure Platform`,desc:`End-to-end encrypted, government-grade security with full audit trails.`}];return(0,x.jsxs)(`div`,{children:[(0,x.jsxs)(`section`,{className:`relative min-h-screen flex items-center grid-bg overflow-hidden`,style:{paddingTop:`80px`,position:`relative`},children:[(0,x.jsx)(HeroSlideshowBg,{}),(0,x.jsx)(`div`,{className:`hero-glow absolute inset-0 pointer-events-none`}),(0,x.jsx)(`div`,{className:`absolute top-1/4 right-1/4 w-64 h-64 rounded-full pointer-events-none`,style:{background:`radial-gradient(circle, rgba(19,136,8,0.08) 0%, transparent 70%)`}}),(0,x.jsx)(`div`,{className:`absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full pointer-events-none`,style:{background:`radial-gradient(circle, rgba(217,95,0,0.06) 0%, transparent 70%)`}}),(0,x.jsxs)(`div`,{className:`relative z-10 max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`,children:[(0,x.jsxs)(`div`,{children:[(0,x.jsxs)(`div`,{className:`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-semibold tracking-widest uppercase`,style:{background:`rgba(19,136,8,0.1)`,border:`1px solid rgba(19,136,8,0.25)`,color:`#138808`},children:[(0,x.jsx)(`span`,{className:`w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse`}),`AI Governance Platform · India`]}),(0,x.jsxs)(`h1`,{className:`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6`,style:{fontFamily:`Poppins, sans-serif`},children:[`Transforming`,` `,(0,x.jsx)(`span`,{className:`gradient-text`,children:`Governance`}),` `,`Through Artificial Intelligence`]}),(0,x.jsx)(`p`,{className:`text-white/60 text-lg leading-relaxed mb-10 max-w-lg`,children:`POLISENCE is an AI-powered Governance & Political Intelligence Platform connecting citizens, authorities, and decision-makers for a smarter, more responsive democracy.`}),(0,x.jsxs)(`div`,{className:`flex flex-wrap gap-4 mb-12`,children:[(0,x.jsxs)(`button`,{onClick:()=>t(`register`),className:`btn-orange flex items-center gap-2`,children:[`Register Complaint `,w.arrow]}),(0,x.jsxs)(`button`,{onClick:()=>t(`ai-assistant`),className:`btn-cyan flex items-center gap-2`,children:[w.chat,` Talk to AI Assistant`]})]}),(0,x.jsx)(`div`,{className:`flex flex-wrap gap-6 text-xs text-white/40`,children:[`🔒 256-bit SSL Encrypted`,`🏛️ Government Certified`,`⚡ 99.9% Uptime`].map(e=>(0,x.jsx)(`span`,{children:e},e))})]}),(0,x.jsx)(`div`,{className:`relative float-anim hidden lg:block`,children:(0,x.jsxs)(`div`,{className:`glass-card p-6 space-y-4`,style:{border:`1px solid rgba(19,136,8,0.2)`},children:[(0,x.jsxs)(`div`,{className:`flex items-center justify-between mb-2`,children:[(0,x.jsx)(`span`,{className:`text-white/60 text-xs font-semibold uppercase tracking-wider`,children:`Live Governance Dashboard`}),(0,x.jsxs)(`span`,{className:`text-green-400 text-xs flex items-center gap-1`,children:[(0,x.jsx)(`span`,{className:`w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse`}),`Live`]})]}),(0,x.jsx)(`div`,{className:`grid grid-cols-2 gap-3`,children:a.map(e=>(0,x.jsxs)(`div`,{className:`rounded-xl p-4`,style:{background:`rgba(19,136,8,0.06)`,border:`1px solid rgba(19,136,8,0.12)`},children:[(0,x.jsx)(`div`,{className:`text-2xl font-bold text-white`,style:{fontFamily:`Poppins`},children:e.value}),(0,x.jsx)(`div`,{className:`text-white/50 text-xs mt-1`,children:e.label})]},e.label))}),(0,x.jsx)(`div`,{className:`space-y-2`,children:[{id:`POL-2026-8821`,cat:`Infrastructure`,status:`Resolved`,color:`#10b981`},{id:`POL-2026-9134`,cat:`Water Supply`,status:`Under Review`,color:`#138808`},{id:`POL-2026-9402`,cat:`Sanitation`,status:`Assigned`,color:`#D95F00`}].map(e=>(0,x.jsxs)(`div`,{className:`flex items-center justify-between rounded-lg px-3 py-2.5`,style:{background:`#F8FAFC`,border:`1px solid #CBD5E1`},children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`div`,{className:`text-white text-xs font-medium`,children:e.id}),(0,x.jsx)(`div`,{className:`text-white/40 text-xs`,children:e.cat})]}),(0,x.jsx)(`span`,{className:`text-xs font-semibold px-2 py-1 rounded-full`,style:{background:`${e.color}20`,color:e.color},children:e.status})]},e.id))}),(0,x.jsxs)(`div`,{className:`rounded-xl p-3`,style:{background:`rgba(11,36,71,0.08)`,border:`1px solid rgba(11,36,71,0.15)`},children:[(0,x.jsxs)(`div`,{className:`flex items-center gap-2 text-xs text-purple-300 mb-2`,children:[(0,x.jsx)(`span`,{className:`w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse`}),`AI Analysis Processing…`]}),(0,x.jsx)(`div`,{className:`h-1.5 rounded-full`,style:{background:`#E2E8F0`},children:(0,x.jsx)(`div`,{className:`h-full rounded-full w-3/4 shimmer`,style:{background:`linear-gradient(90deg, #0B2447, #138808)`}})})]})]})})]}),(0,x.jsxs)(`div`,{className:`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs`,children:[(0,x.jsx)(`span`,{children:`Scroll to explore`}),(0,x.jsx)(`div`,{className:`w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1`,children:(0,x.jsx)(`div`,{className:`w-1 h-2 rounded-full bg-cyan-400 animate-bounce`})})]})]}),(0,x.jsx)(`section`,{style:{background:`rgba(19,136,8,0.06)`,borderTop:`1px solid rgba(19,136,8,0.12)`,borderBottom:`1px solid rgba(19,136,8,0.12)`},children:(0,x.jsx)(`div`,{className:`max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center`,children:a.map(e=>(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`div`,{className:`text-3xl font-bold`,style:{color:`#138808`,fontFamily:`Poppins`},children:e.value}),(0,x.jsx)(`div`,{className:`text-white/50 text-sm mt-1`,children:e.label})]},e.label))})}),(0,x.jsxs)(`section`,{className:`max-w-7xl mx-auto px-6 py-24`,children:[(0,x.jsxs)(`div`,{className:`text-center mb-16`,children:[(0,x.jsx)(`div`,{className:`text-cyan-400 text-xs font-bold tracking-widest uppercase mb-3`,children:`Core Capabilities`}),(0,x.jsx)(`h2`,{className:`text-3xl md:text-4xl font-bold text-white`,style:{fontFamily:`Poppins`},children:`Built for Modern Governance`}),(0,x.jsx)(`p`,{className:`text-white/50 mt-4 max-w-xl mx-auto`,children:`Powerful tools for citizens and authorities alike, powered by cutting-edge AI.`})]}),(0,x.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`,children:o.map(e=>(0,x.jsxs)(`div`,{className:`glass-card p-6`,children:[(0,x.jsx)(`div`,{className:`w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-cyan-400`,style:{background:`rgba(19,136,8,0.1)`},children:e.icon}),(0,x.jsx)(`h3`,{className:`text-white font-semibold text-lg mb-2`,style:{fontFamily:`Poppins`},children:e.title}),(0,x.jsx)(`p`,{className:`text-white/50 text-sm leading-relaxed`,children:e.desc}),(0,x.jsxs)(`button`,{onClick:()=>t(`features`),className:`mt-4 text-cyan-400 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all`,children:[`Learn more `,w.arrow]})]},e.title))}),(0,x.jsx)(`div`,{className:`text-center mt-10`,children:(0,x.jsx)(`button`,{onClick:()=>t(`features`),className:`btn-orange`,children:`View All Features`})})]}),(0,x.jsx)(`section`,{className:`section-bg py-24`,children:(0,x.jsxs)(`div`,{className:`max-w-5xl mx-auto px-6`,children:[(0,x.jsxs)(`div`,{className:`text-center mb-16`,children:[(0,x.jsx)(`div`,{className:`text-orange-400 text-xs font-bold tracking-widest uppercase mb-3`,children:`The Process`}),(0,x.jsx)(`h2`,{className:`text-3xl md:text-4xl font-bold text-white`,style:{fontFamily:`Poppins`},children:`How It Works`}),(0,x.jsx)(`p`,{className:`text-white/50 mt-4 max-w-lg mx-auto`,children:`From complaint to resolution — a seamless AI-driven process.`})]}),(0,x.jsxs)(`div`,{className:`relative`,children:[(0,x.jsx)(`div`,{className:`hidden md:block timeline-line`}),(0,x.jsx)(`div`,{className:`space-y-12`,children:[{step:1,actor:`Citizen`,action:`Submit Complaint`,desc:`Register via web, mobile, or voice in any language.`,color:`#138808`},{step:2,actor:`AI Analysis`,action:`Intelligent Processing`,desc:`AI categorizes, prioritizes, and routes to the right authority.`,color:`#0B2447`},{step:3,actor:`Government Review`,action:`Authority Assignment`,desc:`Responsible department reviews and assigns the case.`,color:`#34d399`},{step:4,actor:`Resolution`,action:`Issue Resolved`,desc:`Citizen receives confirmation and official letter.`,color:`#D95F00`}].map((e,t)=>(0,x.jsxs)(`div`,{className:`flex items-center gap-8 ${t%2==1?`md:flex-row-reverse`:``}`,children:[(0,x.jsxs)(`div`,{className:`flex-1 glass-card p-6`,children:[(0,x.jsx)(`div`,{className:`flex items-center gap-3 mb-3`,children:(0,x.jsxs)(`span`,{className:`text-xs font-bold tracking-widest uppercase`,style:{color:e.color},children:[`Step `,e.step]})}),(0,x.jsx)(`h3`,{className:`text-white font-bold text-xl mb-1`,style:{fontFamily:`Poppins`},children:e.action}),(0,x.jsx)(`p`,{className:`text-white/50 text-sm`,children:e.desc}),(0,x.jsx)(`div`,{className:`mt-3 text-sm font-semibold`,style:{color:e.color},children:e.actor})]}),(0,x.jsx)(`div`,{className:`hidden md:flex w-12 h-12 rounded-full items-center justify-center text-white font-bold flex-shrink-0 z-10`,style:{background:e.color,fontFamily:`Poppins`,boxShadow:`0 0 0 6px ${e.color}20`},children:e.step}),(0,x.jsx)(`div`,{className:`flex-1 hidden md:block`})]},e.step))})]}),(0,x.jsx)(`div`,{className:`text-center mt-12`,children:(0,x.jsx)(`button`,{onClick:()=>t(`register`),className:`btn-orange`,children:`Start Your Complaint`})})]})}),(0,x.jsxs)(`section`,{className:`max-w-7xl mx-auto px-6 py-24`,children:[(0,x.jsxs)(`div`,{className:`text-center mb-16`,children:[(0,x.jsx)(`div`,{className:`text-cyan-400 text-xs font-bold tracking-widest uppercase mb-3`,children:`Citizen Voices`}),(0,x.jsx)(`h2`,{className:`text-3xl font-bold text-white`,style:{fontFamily:`Poppins`},children:`Trusted by Millions`})]}),(0,x.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-3 gap-6`,children:[{name:`Priya Sharma`,location:`Delhi, India`,quote:`My water supply complaint was resolved in just 3 days. The AI assistant guided me through every step — absolutely revolutionary!`,role:`Homemaker`},{name:`Rajesh Kumar`,location:`Mumbai, India`,quote:`As a municipal officer, POLISENCE has transformed how we handle grievances. The analytics give us actionable insights we never had before.`,role:`Municipal Officer`},{name:`Aisha Mohammed`,location:`Hyderabad, India`,quote:`The official letter generation saved hours of paperwork. Everything is digital, transparent, and audit-ready.`,role:`Small Business Owner`}].map(e=>(0,x.jsxs)(`div`,{className:`glass-card p-6`,children:[(0,x.jsx)(`div`,{className:`flex gap-1 mb-4`,children:[...[,,,,,]].map((e,t)=>(0,x.jsx)(`span`,{children:w.star},t))}),(0,x.jsxs)(`p`,{className:`text-white/70 text-sm leading-relaxed mb-6`,children:[`"`,e.quote,`"`]}),(0,x.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,x.jsx)(`div`,{className:`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm`,style:{background:`linear-gradient(135deg, #138808, #0057a8)`},children:e.name[0]}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`div`,{className:`text-white font-semibold text-sm`,children:e.name}),(0,x.jsxs)(`div`,{className:`text-white/40 text-xs`,children:[e.role,` · `,e.location]})]})]})]},e.name))})]}),(0,x.jsx)(`section`,{className:`section-bg py-24`,children:(0,x.jsxs)(`div`,{className:`max-w-3xl mx-auto px-6`,children:[(0,x.jsxs)(`div`,{className:`text-center mb-12`,children:[(0,x.jsx)(`div`,{className:`text-cyan-400 text-xs font-bold tracking-widest uppercase mb-3`,children:`Help Center`}),(0,x.jsx)(`h2`,{className:`text-3xl font-bold text-white`,style:{fontFamily:`Poppins`},children:`Frequently Asked Questions`})]}),(0,x.jsx)(`div`,{className:`space-y-1`,children:i.map((e,t)=>(0,x.jsxs)(`div`,{className:`accordion-item`,children:[(0,x.jsxs)(`button`,{className:`w-full text-left flex items-center justify-between py-5 px-1 gap-4`,onClick:()=>r(n===t?null:t),children:[(0,x.jsx)(`span`,{className:`text-white font-medium text-sm pr-4`,children:e.q}),(0,x.jsx)(`span`,{className:`text-cyan-400 flex-shrink-0 transition-transform duration-200 ${n===t?`rotate-180`:``}`,children:w.chevron()})]}),n===t&&(0,x.jsx)(`div`,{className:`pb-5 px-1 text-white/55 text-sm leading-relaxed`,children:e.a})]},t))})]})}),(0,x.jsx)(`section`,{className:`max-w-7xl mx-auto px-6 py-24`,children:(0,x.jsxs)(`div`,{className:`rounded-2xl p-10 md:p-16 text-center relative overflow-hidden`,style:{background:`linear-gradient(135deg, #FFF3E6 0%, #FFFFFF 50%, #EBF8EE 100%)`,borderTop:`4px solid #FF9933`,borderBottom:`4px solid #138808`,border:`1px solid rgba(19,136,8,0.2)`},children:[(0,x.jsx)(`div`,{className:`absolute inset-0 pointer-events-none`,style:{background:`radial-gradient(ellipse 60% 80% at 50% 50%, rgba(19,136,8,0.08) 0%, transparent 70%)`}}),(0,x.jsx)(`h2`,{className:`text-3xl md:text-4xl font-bold text-white mb-4 relative`,style:{fontFamily:`Poppins`},children:`Ready to Make Your Voice Heard?`}),(0,x.jsx)(`p`,{className:`text-white/60 mb-8 max-w-lg mx-auto relative`,children:`Join millions of citizens who have already used POLISENCE to resolve governance issues and build a better India.`}),(0,x.jsxs)(`div`,{className:`flex justify-center gap-4 relative flex-wrap`,children:[(0,x.jsx)(`button`,{onClick:()=>t(`register`),className:`btn-orange text-base px-8 py-3`,children:`Register a Complaint`}),(0,x.jsx)(`button`,{onClick:()=>t(`ai-assistant`),className:`btn-cyan text-base px-8 py-3`,children:`Ask AI Assistant`})]})]})})]})}function re(){let e=[{icon:`🎯`,title:`Transparency`,desc:`Every action on POLISENCE is traceable, auditable, and open to citizens.`},{icon:`⚡`,title:`Speed`,desc:`AI-driven routing ensures complaints reach the right authority instantly.`},{icon:`🛡️`,title:`Trust`,desc:`Government-grade encryption and compliance at every layer.`},{icon:`🌏`,title:`Inclusivity`,desc:`Multilingual, voice-enabled, accessible to all citizens regardless of literacy.`},{icon:`🧠`,title:`Intelligence`,desc:`Predictive analytics anticipate governance issues before they escalate.`},{icon:`🤝`,title:`Collaboration`,desc:`Bridging citizens, local bodies, and central authorities seamlessly.`}],t=[{year:`2022`,event:`Inception`,desc:`POLISENCE concept born from a national hackathon for AI in governance.`},{year:`2023`,event:`Prototype Launch`,desc:`First AI complaint routing prototype deployed in 3 pilot districts.`},{year:`2024`,event:`National Rollout`,desc:`Expanded to 18 states with 340+ government departments onboarded.`},{year:`2025`,event:`AI Intelligence Layer`,desc:`Predictive governance analytics and political intelligence module launched.`},{year:`2026`,event:`Scale & Impact`,desc:`2.4M+ complaints resolved, recognized by Ministry of Electronics & IT.`}];return(0,x.jsxs)(`div`,{style:{paddingTop:`80px`},children:[(0,x.jsx)(`section`,{className:`relative py-24 grid-bg`,children:(0,x.jsxs)(`div`,{className:`max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`,children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`div`,{className:`text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4`,children:`About POLISENCE`}),(0,x.jsxs)(`h1`,{className:`text-4xl md:text-5xl font-bold text-white mb-6`,style:{fontFamily:`Poppins`},children:[`Reimagining Governance for the `,(0,x.jsx)(`span`,{className:`gradient-text`,children:`Digital Age`})]}),(0,x.jsx)(`p`,{className:`text-white/60 leading-relaxed mb-6`,children:`POLISENCE was born from a simple belief: every citizen deserves a responsive, transparent, and intelligent government. We bridge the gap between people and power using AI, data, and design.`}),(0,x.jsx)(`p`,{className:`text-white/50 leading-relaxed`,children:`Our platform processes millions of interactions daily, routing grievances to the right authorities, generating intelligence reports for decision-makers, and helping citizens navigate the complexity of governance with ease.`})]}),(0,x.jsxs)(`div`,{className:`glass-card p-8`,style:{border:`1px solid rgba(19,136,8,0.15)`},children:[(0,x.jsx)(`h3`,{className:`text-white font-bold text-xl mb-6`,style:{fontFamily:`Poppins`},children:`Platform Overview`}),(0,x.jsx)(`div`,{className:`space-y-4`,children:[{label:`Complaint Resolution Rate`,value:94,color:`#10b981`},{label:`AI Categorization Accuracy`,value:98,color:`#138808`},{label:`Citizen Satisfaction`,value:91,color:`#0B2447`},{label:`On-time Resolution`,value:87,color:`#D95F00`}].map(e=>(0,x.jsxs)(`div`,{children:[(0,x.jsxs)(`div`,{className:`flex justify-between text-sm mb-2`,children:[(0,x.jsx)(`span`,{className:`text-white/70`,children:e.label}),(0,x.jsxs)(`span`,{className:`font-semibold`,style:{color:e.color},children:[e.value,`%`]})]}),(0,x.jsx)(`div`,{className:`h-2 rounded-full`,style:{background:`#E2E8F0`},children:(0,x.jsx)(`div`,{className:`h-full rounded-full transition-all duration-1000`,style:{width:`${e.value}%`,background:e.color}})})]},e.label))})]})]})}),(0,x.jsx)(`section`,{className:`max-w-7xl mx-auto px-6 py-24`,children:(0,x.jsxs)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-8`,children:[(0,x.jsxs)(`div`,{className:`glass-card p-8`,style:{border:`1px solid rgba(19,136,8,0.15)`},children:[(0,x.jsx)(`div`,{className:`text-4xl mb-4`,children:`🎯`}),(0,x.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4`,style:{fontFamily:`Poppins`},children:`Our Mission`}),(0,x.jsx)(`p`,{className:`text-white/60 leading-relaxed`,children:`To democratize access to governance by building an intelligent, inclusive, and transparent platform where every citizen's voice is heard, every complaint is tracked, and every authority is accountable. We leverage AI to eliminate bureaucratic friction and deliver measurable governance outcomes.`})]}),(0,x.jsxs)(`div`,{className:`glass-card p-8`,style:{border:`1px solid rgba(217,95,0,0.2)`},children:[(0,x.jsx)(`div`,{className:`text-4xl mb-4`,children:`🔭`}),(0,x.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4`,style:{fontFamily:`Poppins`},children:`Our Vision`}),(0,x.jsx)(`p`,{className:`text-white/60 leading-relaxed`,children:`A future where AI and good governance are inseparable — where predictive intelligence prevents problems before they arise, where citizens and government operate as true partners, and where data-driven decisions result in equitable, prosperous communities across India and beyond.`})]})]})}),(0,x.jsx)(`section`,{className:`section-bg py-24`,children:(0,x.jsxs)(`div`,{className:`max-w-7xl mx-auto px-6`,children:[(0,x.jsxs)(`div`,{className:`text-center mb-16`,children:[(0,x.jsx)(`div`,{className:`text-cyan-400 text-xs font-bold tracking-widest uppercase mb-3`,children:`What Drives Us`}),(0,x.jsx)(`h2`,{className:`text-3xl font-bold text-white`,style:{fontFamily:`Poppins`},children:`Core Values`})]}),(0,x.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`,children:e.map(e=>(0,x.jsxs)(`div`,{className:`glass-card p-6 text-center`,children:[(0,x.jsx)(`div`,{className:`text-4xl mb-4`,children:e.icon}),(0,x.jsx)(`h3`,{className:`text-white font-bold text-lg mb-3`,style:{fontFamily:`Poppins`},children:e.title}),(0,x.jsx)(`p`,{className:`text-white/50 text-sm leading-relaxed`,children:e.desc})]},e.title))})]})}),(0,x.jsxs)(`section`,{className:`max-w-4xl mx-auto px-6 py-24`,children:[(0,x.jsxs)(`div`,{className:`text-center mb-16`,children:[(0,x.jsx)(`div`,{className:`text-orange-400 text-xs font-bold tracking-widest uppercase mb-3`,children:`Our Journey`}),(0,x.jsx)(`h2`,{className:`text-3xl font-bold text-white`,style:{fontFamily:`Poppins`},children:`Timeline`})]}),(0,x.jsxs)(`div`,{className:`relative`,children:[(0,x.jsx)(`div`,{className:`absolute left-8 top-0 bottom-0 w-px`,style:{background:`linear-gradient(180deg, transparent, #138808 10%, #138808 90%, transparent)`}}),(0,x.jsx)(`div`,{className:`space-y-8`,children:t.map((e,n)=>(0,x.jsxs)(`div`,{className:`flex gap-6 items-start`,children:[(0,x.jsx)(`div`,{className:`w-16 h-16 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 z-10`,style:{background:n===t.length-1?`#138808`:`rgba(19,136,8,0.15)`,color:n===t.length-1?`#0B1F3A`:`#138808`,border:`2px solid rgba(19,136,8,0.3)`,fontFamily:`Poppins`},children:e.year}),(0,x.jsxs)(`div`,{className:`glass-card p-5 flex-1 mt-2`,children:[(0,x.jsx)(`h4`,{className:`text-white font-semibold mb-1`,style:{fontFamily:`Poppins`},children:e.event}),(0,x.jsx)(`p`,{className:`text-white/50 text-sm`,children:e.desc})]})]},e.year))})]})]})]})}function ie({navigate:e}){let t=t=>{e(t),window.scrollTo(0,0)},n=[{icon:w.complaint,title:`Smart Complaint Registration`,desc:`Multi-step, guided complaint submission with AI-powered categorization. Supports text, image, and voice input. Auto-generates reference IDs and official documentation.`,tag:`Core`,color:`#138808`},{icon:w.ai,title:`AI Citizen Assistant`,desc:`24/7 conversational AI to guide citizens, answer governance queries, and suggest the right channels. Trained on 50,000+ government procedures across all departments.`,tag:`AI-Powered`,color:`#0B2447`},{icon:w.track,title:`Complaint Tracking`,desc:`Real-time lifecycle monitoring with Kanban-style status boards. Predictive resolution timelines powered by historical data analytics and ML models.`,tag:`Core`,color:`#138808`},{icon:w.governance,title:`Governance Intelligence`,desc:`Dashboards for authorities with trend analysis, hotspot mapping, department performance metrics, and citizen satisfaction indices.`,tag:`Intelligence`,color:`#34d399`},{icon:w.political,title:`Political Intelligence`,desc:`Aggregated analytics on policy sentiment, constituency needs, and governance effectiveness. Enables data-driven policy-making for elected representatives.`,tag:`Intelligence`,color:`#D95F00`},{icon:w.letter,title:`Official Complaint Letter`,desc:`Auto-generate government-standard complaint letters with correct formatting, department headers, reference numbers, and legal language. Download as PDF.`,tag:`Document`,color:`#138808`},{icon:w.voice,title:`Voice Complaint`,desc:`Submit complaints verbally in 22 Indian languages. Whisper AI transcription converts speech to structured complaint text with 99.2% accuracy. (Future AI Integration)`,tag:`AI · Coming Soon`,color:`#0B2447`},{icon:w.predictive,title:`Predictive Governance`,desc:`ML models analyze patterns to predict infrastructure failures, public health risks, and civic bottlenecks 30–90 days before they occur. (Future AI Integration)`,tag:`AI · Coming Soon`,color:`#D95F00`},{icon:w.secure,title:`Secure Platform`,desc:`End-to-end AES-256 encryption, OAuth 2.0 authentication, full audit trails, CERT-In compliant infrastructure, and 99.9% SLA uptime guarantee.`,tag:`Security`,color:`#10b981`}];return(0,x.jsxs)(`div`,{style:{paddingTop:`80px`},children:[(0,x.jsx)(`section`,{className:`relative py-24 grid-bg`,children:(0,x.jsxs)(`div`,{className:`max-w-7xl mx-auto px-6`,children:[(0,x.jsxs)(`div`,{className:`text-center mb-16`,children:[(0,x.jsx)(`div`,{className:`text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4`,children:`Platform Capabilities`}),(0,x.jsxs)(`h1`,{className:`text-4xl md:text-5xl font-bold text-white mb-6`,style:{fontFamily:`Poppins`},children:[`Everything You Need for `,(0,x.jsx)(`span`,{className:`gradient-text`,children:`Smart Governance`})]}),(0,x.jsx)(`p`,{className:`text-white/55 max-w-2xl mx-auto text-lg`,children:`Nine powerful modules working in concert to create India's most comprehensive AI governance platform.`})]}),(0,x.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`,children:n.map(e=>(0,x.jsxs)(`div`,{className:`glass-card p-6 flex flex-col`,children:[(0,x.jsxs)(`div`,{className:`flex items-start justify-between mb-5`,children:[(0,x.jsx)(`div`,{className:`w-12 h-12 rounded-xl flex items-center justify-center`,style:{background:`${e.color}15`,color:e.color},children:e.icon}),(0,x.jsx)(`span`,{className:`text-xs font-bold px-2 py-1 rounded-full`,style:{background:`${e.color}15`,color:e.color,border:`1px solid ${e.color}30`},children:e.tag})]}),(0,x.jsx)(`h3`,{className:`text-white font-bold text-lg mb-3`,style:{fontFamily:`Poppins`},children:e.title}),(0,x.jsx)(`p`,{className:`text-white/50 text-sm leading-relaxed flex-1`,children:e.desc}),(0,x.jsxs)(`button`,{onClick:()=>t(`register`),className:`mt-5 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all`,style:{color:e.color},children:[`Learn More `,w.arrow]})]},e.title))})]})}),(0,x.jsx)(`section`,{className:`max-w-7xl mx-auto px-6 py-16`,children:(0,x.jsxs)(`div`,{className:`glass-card p-10 text-center`,style:{border:`1px solid rgba(19,136,8,0.2)`},children:[(0,x.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4`,style:{fontFamily:`Poppins`},children:`Ready to get started?`}),(0,x.jsx)(`p`,{className:`text-white/50 mb-8`,children:`Experience the full power of POLISENCE's AI governance platform.`}),(0,x.jsxs)(`div`,{className:`flex justify-center gap-4 flex-wrap`,children:[(0,x.jsx)(`button`,{onClick:()=>t(`register`),className:`btn-orange`,children:`Register a Complaint`}),(0,x.jsx)(`button`,{onClick:()=>t(`ai-assistant`),className:`btn-cyan`,children:`Try AI Assistant`})]})]})})]})}function ae({navigate:e}){let uCtrl=(0,b.useContext)(GovUIContext),toastFn=usePolisenseToast(),[t,n]=(0,b.useState)(1),[r,i]=(0,b.useState)({fullName:``,phone:``,email:``,locationText:`New Delhi, Connaught Place`,category:``,description:``,hasImage:!1,hasVoice:!1}),[a,o]=(0,b.useState)(null),[s,c]=(0,b.useState)(``),[l,u]=(0,b.useState)(null),[d,f]=(0,b.useState)(``),[p,m]=(0,b.useState)(!1),[h,g]=(0,b.useState)(!1),[_,v]=(0,b.useState)(``),[y,ee]=(0,b.useState)(null),[S,C]=(0,b.useState)(``),[te,ne]=(0,b.useState)(!1),T=(0,b.useRef)(null),re=(0,b.useRef)(null),ie=(0,b.useRef)([]),ae=(0,b.useRef)(null),oe=[`Infrastructure`,`Water Supply`,`Electricity`,`Sanitation`,`Roads & Transport`,`Public Health`,`Education`,`Environment`,`Public Safety`,`Municipal Services`,`Other`],se=(e,t)=>i(n=>({...n,[e]:t})),ce=r.fullName.trim()&&r.phone.trim()&&r.email.trim(),le=r.category&&r.description.trim().length>=20;(0,b.useEffect)(()=>()=>{if(ae.current)try{ae.current.stop()}catch{}re.current&&re.current.state!==`inactive`&&re.current.stop(),d&&URL.revokeObjectURL(d),s&&URL.revokeObjectURL(s)},[d,s]);let E=e=>{if(e){if(![`image/jpeg`,`image/png`,`application/pdf`].includes(e.type)){window.alert(`Please select a JPG, PNG, or PDF file.`);return}if(e.size>10485760){window.alert(`File size must be 10 MB or less.`);return}o(e),c(t=>(t&&URL.revokeObjectURL(t),e.type.startsWith(`image/`)?URL.createObjectURL(e):``)),se(`hasImage`,!0)}},D=()=>{let e=window.SpeechRecognition||window.webkitSpeechRecognition;if(!e){v(`Speech recognition is not supported in this browser. Try the latest Chrome or use audio recording below.`);return}if(h){try{ae.current?.stop()}catch{}g(!1);return}let t=new e;t.lang=`hi-IN`,t.continuous=!0,t.interimResults=!0,ae.current=t;let n=``;v(`Listening in Hindi. Tap Stop when you finish speaking.`),t.onresult=e=>{let t=``;for(let r=e.resultIndex;r<e.results.length;r++){let i=e.results[r][0]?.transcript||``;e.results[r].isFinal?n+=i+` `:t+=i}let r=(n+t).trim();r&&i(e=>({...e,description:[e.description.trim(),r].filter(Boolean).join(` `).trim()}))},t.onerror=e=>{v(e.error===`not-allowed`?`Microphone permission denied. Allow microphone access in your browser settings.`:`Speech recognition error: ${e.error}. You can still type your complaint.`),g(!1)},t.onend=()=>g(!1);try{t.start(),g(!0)}catch{v(`Could not start the microphone. Please try again.`),g(!1)}},ue=async()=>{if(!navigator.mediaDevices?.getUserMedia||typeof MediaRecorder>`u`){v(`Audio recording is not supported in this browser. Try the latest Chrome on HTTPS or localhost.`);return}try{let e=await navigator.mediaDevices.getUserMedia({audio:!0}),t=new MediaRecorder(e);re.current=t,ie.current=[],t.ondataavailable=e=>{e.data.size&&ie.current.push(e.data)},t.onstop=()=>{let n=new Blob(ie.current,{type:t.mimeType||`audio/webm`});u(n),f(e=>(e&&URL.revokeObjectURL(e),URL.createObjectURL(n))),se(`hasVoice`,!0),e.getTracks().forEach(e=>e.stop()),m(!1)},t.start(),m(!0),v(`Recording audio… Select Stop Recording when finished.`)}catch(e){m(!1),v(e instanceof Error&&e.name===`NotAllowedError`?`Microphone permission denied. Allow microphone access and try again.`:`Could not access the microphone. Check the device and browser permissions.`)}},de=()=>{re.current&&re.current.state!==`inactive`&&re.current.stop()},fe=()=>{if(!navigator.geolocation){C(`Geolocation is not supported by this browser. Enter coordinates manually below.`);return}ne(!0),C(`Requesting your current location…`),navigator.geolocation.getCurrentPosition(async e=>{let t=Number(e.coords.latitude.toFixed(6)),n=Number(e.coords.longitude.toFixed(6));ee({lat:t,lng:n,address:`Coordinates detected`}),C(`Location detected successfully.`),ne(!1);try{let e=await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${t}&lon=${n}`);if(e.ok){let r=await e.json();r.display_name&&ee(e=>e&&e.lat===t&&e.lng===n?{...e,address:r.display_name}:e)}}catch{}},e=>{ne(!1);let t=e.code===e.PERMISSION_DENIED?`Location permission was denied. Allow location access in browser settings.`:e.code===e.TIMEOUT?`Location request timed out. Try again or enter coordinates manually.`:`Your location is currently unavailable. Try again or enter coordinates manually.`;C(t)},{enableHighAccuracy:!0,timeout:15e3,maximumAge:0})},pe=(e,t)=>{let n=Number(t);if(t.trim()===``||!Number.isFinite(n)){ee(t=>t?{...t,[e]:NaN,address:`Manually entered coordinates`}:{lat:e===`lat`?NaN:0,lng:e===`lng`?NaN:0,address:`Manually entered coordinates`});return}ee(t=>({lat:t?.lat??0,lng:t?.lng??0,address:t?.address||`Manually entered coordinates`,...t,[e]:n})),C(`Coordinates updated. Check the map marker before submitting.`)},O=()=>{let created=uCtrl.addComplaint({fullName:r.fullName,phone:r.phone,email:r.email,category:r.category,description:r.description,hasImage:r.hasImage,hasVoice:r.hasVoice,locationText:(y?.address&&y.address!==`Coordinates detected`&&y.address!==`Manually entered coordinates`)?y.address:(r.locationText||`New Delhi, Connaught Place`),lat:y&&Number.isFinite(y.lat)?y.lat:28.6139,lng:y&&Number.isFinite(y.lng)?y.lng:77.2090});toastFn({type:`success`,title:`Grievance Registered (${created.id})`,msg:`Synced live to Government Admin Portal (${created.dept}) & Strategy Workspace.`});e(`success`);window.scrollTo(0,0)},k=[`Citizen Info`,`Complaint Details`,`Review & Submit`],me=y&&Number.isFinite(y.lat)&&Number.isFinite(y.lng)&&Math.abs(y.lat)<=90&&Math.abs(y.lng)<=180,he=me?`https://www.openstreetmap.org/export/embed.html?bbox=${y.lng-.01}%2C${y.lat-.01}%2C${y.lng+.01}%2C${y.lat+.01}&layer=mapnik&marker=${y.lat}%2C${y.lng}`:``;return(0,x.jsx)(`div`,{style:{paddingTop:`80px`},children:(0,x.jsxs)(`div`,{className:`max-w-2xl mx-auto px-6 py-16`,children:[(0,x.jsxs)(`div`,{className:`text-center mb-10`,children:[(0,x.jsx)(`div`,{className:`text-cyan-400 text-xs font-bold tracking-widest uppercase mb-3`,children:`Grievance Portal`}),(0,x.jsx)(`h1`,{className:`text-3xl font-bold text-white mb-3`,style:{fontFamily:`Poppins`},children:`Register a Complaint`}),(0,x.jsx)(`p`,{className:`text-white/50 text-sm`,children:`Your complaint will be assigned a unique ID and tracked in real time.`})]}),(0,x.jsx)(`div`,{className:`flex items-center justify-between mb-10`,children:[1,2,3].map(e=>(0,x.jsxs)(`div`,{className:`flex items-center gap-2 flex-1`,children:[(0,x.jsx)(`div`,{className:`step-indicator ${t>e?`step-done`:t===e?`step-active`:`step-inactive`}`,children:t>e?w.check:e}),(0,x.jsx)(`span`,{className:`text-xs font-medium hidden sm:block ${t===e?`text-white`:t>e?`text-green-400`:`text-white/30`}`,children:k[e-1]}),e<3&&(0,x.jsx)(`div`,{className:`flex-1 h-px mx-2`,style:{background:t>e?`#10b981`:`rgba(255,255,255,0.1)`}})]},e))}),(0,x.jsxs)(`div`,{className:`glass-card p-8`,children:[t===1&&(0,x.jsxs)(`div`,{className:`space-y-5`,children:[(0,x.jsx)(`h2`,{className:`text-white font-bold text-lg mb-6`,style:{fontFamily:`Poppins`},children:`Step 1: Citizen Information`}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`label`,{className:`block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2`,children:`Full Name *`}),(0,x.jsx)(`input`,{className:`input-field`,placeholder:`Enter your full name`,value:r.fullName,onChange:e=>se(`fullName`,e.target.value)})]}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`label`,{className:`block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2`,children:`Phone Number *`}),(0,x.jsx)(`input`,{className:`input-field`,type:`tel`,placeholder:`+91 XXXXX XXXXX`,value:r.phone,onChange:e=>se(`phone`,e.target.value)})]}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`label`,{className:`block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2`,children:`Email Address *`}),(0,x.jsx)(`input`,{className:`input-field`,type:`email`,placeholder:`you@example.com`,value:r.email,onChange:e=>se(`email`,e.target.value)})]}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`label`,{className:`block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2`,children:`City / Ward / Constituency Zone *`}),(0,x.jsx)(`input`,{className:`input-field`,placeholder:`e.g. New Delhi, Patel Nagar / Connaught Place / Karol Bagh`,value:r.locationText||``,onChange:e=>se(`locationText`,e.target.value)})]}),(0,x.jsx)(`button`,{className:`btn-orange w-full mt-4`,onClick:()=>ce&&n(2),style:{opacity:ce?1:.5},children:`Continue to Complaint Details →`})]}),t===2&&(0,x.jsxs)(`div`,{className:`space-y-5`,children:[(0,x.jsx)(`h2`,{className:`text-white font-bold text-lg mb-6`,style:{fontFamily:`Poppins`},children:`Step 2: Complaint Details`}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`label`,{className:`block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2`,children:`Category *`}),(0,x.jsxs)(`select`,{className:`input-field`,value:r.category,onChange:e=>se(`category`,e.target.value),style:{appearance:`none`,backgroundImage:`none`},children:[(0,x.jsx)(`option`,{value:``,style:{background:`linear-gradient(180deg, #FFF7EE 0%, #FFFFFF 48%, #F1F9F2 100%)`},children:`Select complaint category`}),oe.map(e=>(0,x.jsx)(`option`,{value:e,style:{background:`linear-gradient(180deg, #FFF7EE 0%, #FFFFFF 48%, #F1F9F2 100%)`},children:e},e))]})]}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`label`,{className:`block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2`,children:`Description * (min. 20 characters)`}),(0,x.jsx)(`textarea`,{className:`input-field h-32 resize-none`,placeholder:`Describe your complaint in detail...`,value:r.description,onChange:e=>se(`description`,e.target.value)}),(0,x.jsxs)(`div`,{className:`text-right text-xs text-white/30 mt-1`,children:[r.description.length,` chars`]})]}),(0,x.jsxs)(`div`,{className:`rounded-xl p-5 border-dashed`,style:{background:h?`rgba(19,136,8,0.08)`:`rgba(255,255,255,0.02)`,border:`2px dashed ${h?`#138808`:`rgba(255,255,255,0.12)`}`},children:[(0,x.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,x.jsx)(`div`,{className:`w-10 h-10 rounded-lg flex items-center justify-center`,style:{background:`rgba(19,136,8,0.1)`,color:`#138808`},children:w.mic}),(0,x.jsxs)(`div`,{className:`flex-1`,children:[(0,x.jsx)(`div`,{className:`text-white text-sm font-medium`,children:h?`Listening…`:`Speak Complaint (Hindi)`}),(0,x.jsx)(`div`,{className:`text-white/40 text-xs`,children:`Speech-to-text · Browser microphone permission required`})]}),(0,x.jsx)(`button`,{type:`button`,onClick:D,className:`text-xs font-semibold px-3 py-2 rounded-lg`,style:{background:h?`rgba(217,95,0,0.15)`:`rgba(19,136,8,0.12)`,color:h?`#D95F00`:`#138808`},children:h?`Stop Mic`:`Start Mic`})]}),_&&(0,x.jsx)(`p`,{className:`text-xs text-white/60 mt-3`,role:`status`,children:_})]}),(0,x.jsxs)(`div`,{className:`rounded-xl p-5 border-dashed`,style:{border:`2px dashed ${p?`#D95F00`:`rgba(255,255,255,0.12)`}`,background:`#F8FAFC`},children:[(0,x.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3`,children:[(0,x.jsxs)(`div`,{className:`flex-1`,children:[(0,x.jsx)(`div`,{className:`text-white text-sm font-medium`,children:`Audio Evidence Recording`}),(0,x.jsx)(`div`,{className:`text-white/40 text-xs`,children:`Record your voice and attach it to this form`})]}),!p&&(0,x.jsx)(`button`,{type:`button`,className:`text-xs font-semibold px-3 py-2 rounded-lg`,style:{background:`rgba(217,95,0,0.12)`,color:`#D95F00`},onClick:ue,children:`Start Recording`}),p&&(0,x.jsx)(`button`,{type:`button`,className:`text-xs font-semibold px-3 py-2 rounded-lg`,style:{background:`rgba(217,95,0,0.16)`,color:`#D95F00`},onClick:de,children:`Stop Recording`})]}),d&&(0,x.jsxs)(`div`,{className:`mt-3 space-y-2`,children:[(0,x.jsx)(`audio`,{controls:!0,src:d,className:`w-full`}),(0,x.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,x.jsxs)(`span`,{className:`text-xs text-green-400`,children:[`Audio recording attached (`,Math.max(1,Math.round((l?.size||0)/1024)),` KB)`]}),(0,x.jsx)(`button`,{type:`button`,className:`text-xs text-red-300`,onClick:()=>{u(null),f(e=>(e&&URL.revokeObjectURL(e),``)),se(`hasVoice`,!1)},children:`Remove audio`})]})]})]}),(0,x.jsxs)(`div`,{className:`rounded-xl p-5 border-dashed`,onClick:()=>T.current?.click(),role:`button`,tabIndex:0,onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&T.current?.click()},style:{cursor:`pointer`,background:a?`rgba(217,95,0,0.06)`:`rgba(255,255,255,0.02)`,border:`2px dashed ${a?`#D95F00`:`rgba(255,255,255,0.12)`}`},children:[(0,x.jsx)(`input`,{ref:T,type:`file`,accept:`image/jpeg,image/png,application/pdf,.jpg,.jpeg,.png,.pdf`,className:`hidden`,onChange:e=>E(e.target.files?.[0]),onClick:e=>{e.target.value=``}}),(0,x.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,x.jsx)(`div`,{className:`w-10 h-10 rounded-lg flex items-center justify-center`,style:{background:`rgba(217,95,0,0.1)`,color:`#D95F00`},children:w.upload}),(0,x.jsxs)(`div`,{className:`flex-1`,children:[(0,x.jsx)(`div`,{className:`text-white text-sm font-medium`,children:a?`Evidence Attached`:`Attach Photo / PDF Evidence`}),(0,x.jsx)(`div`,{className:`text-white/40 text-xs`,children:`Click to select · JPG, PNG, PDF up to 10 MB`})]}),a&&(0,x.jsx)(`span`,{className:`text-orange-300 text-xs`,children:`Change file`})]}),a&&(0,x.jsxs)(`div`,{className:`mt-3 text-xs text-white/70`,onClick:e=>e.stopPropagation(),children:[(0,x.jsxs)(`div`,{children:[a.name,` · `,(a.size/1048576).toFixed(2),` MB`]}),a.type.startsWith(`image/`)&&(0,x.jsx)(`img`,{src:s,alt:`Evidence preview`,className:`mt-3 max-h-48 rounded-lg object-contain`})]})]}),a&&(0,x.jsx)(`button`,{type:`button`,className:`text-xs text-red-300`,onClick:()=>{o(null),c(e=>(e&&URL.revokeObjectURL(e),``)),se(`hasImage`,!1),T.current&&(T.current.value=``)},children:`Remove attached file`}),(0,x.jsxs)(`div`,{className:`rounded-xl overflow-hidden`,style:{border:`1px solid #94A3B8`},children:[(0,x.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3 p-4`,style:{background:`#F8FAFC`},children:[(0,x.jsx)(`div`,{className:`w-8 h-8 rounded-lg flex items-center justify-center`,style:{background:`rgba(19,136,8,0.1)`,color:`#138808`},children:w.mapPin}),(0,x.jsxs)(`div`,{className:`flex-1`,children:[(0,x.jsx)(`div`,{className:`text-white text-sm font-medium`,children:`Complaint Location (GPS)`}),(0,x.jsx)(`div`,{className:`text-white/40 text-xs`,children:`Use GPS or enter coordinates manually`})]}),(0,x.jsx)(`button`,{type:`button`,disabled:te,onClick:fe,className:`text-xs text-cyan-400 font-medium px-3 py-2 rounded-lg disabled:opacity-50`,style:{background:`rgba(19,136,8,0.1)`},children:te?`Locating…`:`Use My Location`})]}),S&&(0,x.jsx)(`p`,{className:`px-4 pt-3 text-xs text-white/60`,role:`status`,children:S}),(0,x.jsxs)(`div`,{className:`p-4 grid grid-cols-1 sm:grid-cols-2 gap-3`,children:[(0,x.jsxs)(`label`,{className:`text-xs text-white/50`,children:[`Latitude`,(0,x.jsx)(`input`,{className:`input-field mt-1`,type:`number`,step:`any`,min:`-90`,max:`90`,placeholder:`e.g. 26.4499`,value:y&&Number.isFinite(y.lat)?y.lat:``,onChange:e=>pe(`lat`,e.target.value)})]}),(0,x.jsxs)(`label`,{className:`text-xs text-white/50`,children:[`Longitude`,(0,x.jsx)(`input`,{className:`input-field mt-1`,type:`number`,step:`any`,min:`-180`,max:`180`,placeholder:`e.g. 80.3319`,value:y&&Number.isFinite(y.lng)?y.lng:``,onChange:e=>pe(`lng`,e.target.value)})]})]}),me&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(`div`,{className:`px-4 pb-3 text-xs text-white/60 break-words`,children:[y.address,(0,x.jsx)(`br`,{}),(0,x.jsxs)(`span`,{className:`text-cyan-300`,children:[y.lat,`, `,y.lng]})]}),(0,x.jsx)(`iframe`,{title:`Complaint location map`,src:he,className:`w-full h-56 border-0`,loading:`lazy`,referrerPolicy:`no-referrer-when-downgrade`}),(0,x.jsx)(`div`,{className:`px-4 py-3`,children:(0,x.jsx)(`a`,{className:`text-xs text-cyan-300 underline`,href:`https://www.openstreetmap.org/?mlat=${y.lat}&mlon=${y.lng}#map=16/${y.lat}/${y.lng}`,target:`_blank`,rel:`noreferrer`,children:`Open location in OpenStreetMap`})})]}),!me&&(0,x.jsx)(`div`,{className:`h-28 flex items-center justify-center text-center px-4`,style:{background:`#F1F5F9`},children:(0,x.jsx)(`div`,{className:`text-white/35 text-xs`,children:`Your selected location map will appear here.`})})]}),(0,x.jsxs)(`div`,{className:`flex gap-3 mt-4`,children:[(0,x.jsx)(`button`,{className:`btn-cyan flex-1`,onClick:()=>n(1),children:`← Back`}),(0,x.jsx)(`button`,{className:`btn-orange flex-1`,onClick:()=>le&&n(3),style:{opacity:le?1:.5},children:`Review Complaint →`})]})]}),t===3&&(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h2`,{className:`text-white font-bold text-lg mb-6`,style:{fontFamily:`Poppins`},children:`Step 3: Review & Submit`}),(0,x.jsxs)(`div`,{className:`space-y-4 mb-8`,children:[(0,x.jsxs)(`div`,{className:`rounded-xl p-4 space-y-3`,style:{background:`rgba(19,136,8,0.05)`,border:`1px solid rgba(19,136,8,0.1)`},children:[(0,x.jsx)(`h4`,{className:`text-cyan-400 text-xs font-bold uppercase tracking-wider`,children:`Citizen Information`}),[[`Full Name`,r.fullName],[`Phone`,r.phone],[`Email`,r.email]].map(([e,t])=>(0,x.jsxs)(`div`,{className:`flex justify-between gap-4`,children:[(0,x.jsx)(`span`,{className:`text-white/50 text-sm`,children:e}),(0,x.jsx)(`span`,{className:`text-white text-sm font-medium text-right break-all`,children:t})]},e))]}),(0,x.jsxs)(`div`,{className:`rounded-xl p-4 space-y-3`,style:{background:`rgba(217,95,0,0.05)`,border:`1px solid rgba(217,95,0,0.1)`},children:[(0,x.jsx)(`h4`,{className:`text-orange-400 text-xs font-bold uppercase tracking-wider`,children:`Complaint Details`}),(0,x.jsxs)(`div`,{className:`flex justify-between`,children:[(0,x.jsx)(`span`,{className:`text-white/50 text-sm`,children:`Category`}),(0,x.jsx)(`span`,{className:`text-white text-sm font-medium`,children:r.category})]}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`div`,{className:`text-white/50 text-sm mb-1`,children:`Description`}),(0,x.jsx)(`div`,{className:`text-white text-sm leading-relaxed whitespace-pre-wrap`,children:r.description})]}),a&&(0,x.jsxs)(`div`,{className:`text-xs text-orange-300`,children:[`Evidence: `,a.name,` (`,(a.size/1048576).toFixed(2),` MB)`]}),l&&(0,x.jsxs)(`div`,{className:`text-xs text-cyan-300`,children:[`Audio evidence attached (`,Math.round(l.size/1024),` KB)`]}),me&&(0,x.jsxs)(`div`,{className:`text-xs text-cyan-300 break-words`,children:[`Location: `,y.lat,`, `,y.lng,(0,x.jsx)(`br`,{}),y.address]}),!me&&(0,x.jsx)(`div`,{className:`text-xs text-white/40`,children:`No GPS location selected.`})]})]}),(0,x.jsx)(`div`,{className:`text-white/40 text-xs mb-6 p-4 rounded-xl`,style:{background:`#F8FAFC`},children:`By submitting, you confirm this complaint is accurate and consent to sharing with relevant government authorities for resolution. Data is processed per applicable privacy laws. Attachments and location are currently held in this browser form; server-side storage requires a complaint backend API.`}),(0,x.jsxs)(`div`,{className:`flex gap-3`,children:[(0,x.jsx)(`button`,{className:`btn-cyan flex-1`,onClick:()=>n(2),children:`← Back`}),(0,x.jsx)(`button`,{className:`btn-orange flex-1`,onClick:O,children:`Submit Complaint ✓`})]})]})]})]})})}function oe({navigate:e}){
let t=t=>{e(t),window.scrollTo(0,0)},
uCtrl=(0,b.useContext)(GovUIContext),
latest=uCtrl.lastComplaint||(uCtrl.complaints&&uCtrl.complaints[0])||Be[0],
n=latest.id;
return(0,x.jsx)(`div`,{
style:{paddingTop:`80px`},
children:(0,x.jsxs)(`div`,{
className:`max-w-2xl mx-auto px-6 py-16 text-center`,
children:[
(0,x.jsx)(`div`,{
className:`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6`,
style:{background:`#EAF7EC`,border:`2.5px solid #138808`},
children:(0,x.jsx)(`svg`,{className:`w-10 h-10`,style:{color:`#138808`},fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2.5,d:`M5 13l4 4L19 7`})})
}),
(0,x.jsx)(`div`,{style:{fontSize:`11.5px`,fontWeight:800,color:`#138808`,letterSpacing:`0.8px`,textTransform:`uppercase`,marginBottom:`6px`},children:`● LIVE SYNCED TO ADMIN & STRATEGY PORTALS`}),
(0,x.jsx)(`h1`,{className:`text-3xl font-bold text-white mb-2`,style:{fontFamily:`Poppins`},children:`Grievance Registered Successfully!`}),
(0,x.jsx)(`p`,{className:`text-white/50 text-sm mb-8`,children:`Your complaint has been auto-triaged by POLISENSE AI and dispatched in real time to the Government Admin Portal and Strategy Constituency Intelligence Workspace.`}),
(0,x.jsxs)(`div`,{
className:`glass-card p-6 mb-8 text-left`,
children:[
(0,x.jsxs)(`div`,{
style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,flexWrap:`wrap`,gap:`12px`,paddingBottom:`14px`,borderBottom:`1px solid #CBD5E1`},
children:[
(0,x.jsxs)(`div`,{
children:[
(0,x.jsx)(`div`,{style:{fontSize:`11px`,fontWeight:800,color:`#64748B`,textTransform:`uppercase`},children:`Official Grievance Reference ID`}),
(0,x.jsx)(`div`,{style:{fontSize:`24px`,fontWeight:800,color:`#0B2447`,fontFamily:`Poppins, sans-serif`},children:n})
]
}),
(0,x.jsx)(`span`,{style:{padding:`5px 14px`,borderRadius:`999px`,background:`#FFF5EB`,color:`#C2410C`,border:`1px solid #FDBA74`,fontSize:`12px`,fontWeight:800},children:`Status: ${latest.status}`})
]
}),
(0,x.jsx)(`div`,{
style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(180px, 1fr))`,gap:`12px`,marginTop:`14px`},
children:[
[`Citizen Name`,latest.citizen],
[`Category`,latest.category],
[`Routed Department`,latest.dept],
[`Ward / Location`,latest.location],
[`AI Priority Triage`,latest.priority],
[`Submitted Date`,latest.date]
].map(([lbl,val])=>(0,x.jsxs)(`div`,{
style:{padding:`10px 12px`,borderRadius:`8px`,background:`#F8FAFC`,border:`1px solid #E2E8F0`},
children:[
(0,x.jsx)(`div`,{style:{fontSize:`11px`,fontWeight:700,color:`#64748B`},children:lbl}),
(0,x.jsx)(`div`,{style:{fontSize:`13px`,fontWeight:700,color:`#0B2447`,marginTop:`2px`},children:val})
]
},lbl))
})
]
}),
(0,x.jsxs)(`div`,{
style:{display:`flex`,flexWrap:`wrap`,gap:`10px`,justifyContent:`center`,marginBottom:`14px`},
children:[
(0,x.jsxs)(`button`,{onClick:()=>t(`track`),className:`btn-orange`,style:{padding:`10px 20px`,fontSize:`13px`},children:[w.track,` Track Live Status`]}),
(0,x.jsxs)(`button`,{onClick:()=>t(`letter`),className:`btn-cyan`,style:{padding:`10px 20px`,fontSize:`13px`},children:[w.download,` View Official Letter`]}),
(0,x.jsx)(`button`,{onClick:()=>t(`admin-complaints`),style:{padding:`10px 18px`,borderRadius:`8px`,background:`#0B2447`,color:`#FFFFFF`,fontSize:`13px`,fontWeight:700,border:`1.5px solid #0B2447`,cursor:`pointer`},children:`🏛️ Open in Admin Portal →`}),
(0,x.jsx)(`button`,{onClick:()=>t(`strategy-constituency`),style:{padding:`10px 18px`,borderRadius:`8px`,background:`#138808`,color:`#FFFFFF`,fontSize:`13px`,fontWeight:700,border:`1.5px solid #0F6D06`,cursor:`pointer`},children:`🗺️ Open in Strategy Portal →`})
]
}),
(0,x.jsx)(`button`,{onClick:()=>t(`home`),className:`text-white/40 text-sm hover:underline`,children:`← Return to Home`})
]
})
})
}
function se({navigate:e}){
let t=t=>{e(t),window.scrollTo(0,0)},
uCtrl=(0,b.useContext)(GovUIContext),
c=uCtrl.lastComplaint||(uCtrl.complaints&&uCtrl.complaints[0])||Be[0];
return(0,x.jsx)(`div`,{
style:{paddingTop:`80px`},
children:(0,x.jsxs)(`div`,{
className:`max-w-4xl mx-auto px-6 py-12`,
children:[
(0,x.jsxs)(`div`,{
className:`text-center mb-8`,
children:[
(0,x.jsx)(`div`,{className:`text-cyan-400 text-xs font-bold tracking-widest uppercase mb-2`,children:`Official CPGRAMS Acknowledgement`}),
(0,x.jsx)(`h1`,{className:`text-3xl font-bold text-white mb-2`,style:{fontFamily:`Poppins`},children:`Official Complaint Letter`}),
(0,x.jsxs)(`p`,{className:`text-white/50 text-sm`,children:[`Auto-generated official grievance dossier for Reference ID `,c.id]})
]
}),
(0,x.jsxs)(`div`,{
className:`rounded-2xl overflow-hidden mb-8`,
style:{background:`#ffffff`,border:`1.5px solid #0B2447`,boxShadow:`0 10px 30px rgba(11,36,71,0.1)`},
children:[
(0,x.jsxs)(`div`,{
className:`px-10 py-6 text-center`,
style:{background:`#1a3660`,borderTop:`5px solid #FF9933`,borderBottom:`4px solid #138808`},
children:[
(0,x.jsx)(`div`,{className:`text-white text-2xl font-bold mb-1`,style:{fontFamily:`Poppins`},children:`🏛️ Government of India`}),
(0,x.jsx)(`div`,{className:`text-white text-sm`,children:`Centralized Public Grievance Redress and Monitoring System (CPGRAMS · POLISENSE AI)`}),
(0,x.jsxs)(`div`,{className:`text-white/60 text-xs mt-1`,children:[`Routed Authority: `,c.dept,` · Category: `,c.category]})
]
}),
(0,x.jsxs)(`div`,{
className:`p-10 text-gray-800`,
style:{fontFamily:`Georgia, serif`},
children:[
(0,x.jsxs)(`div`,{
className:`flex justify-between items-start mb-8 flex-wrap gap-4`,
children:[
(0,x.jsxs)(`div`,{
children:[
(0,x.jsxs)(`div`,{className:`text-sm font-bold`,children:[`Complaint ID: `,(0,x.jsx)(`span`,{className:`text-blue-700`,children:c.id})]}),
(0,x.jsxs)(`div`,{className:`text-sm text-gray-600`,children:[`Department: `,c.dept]})
]
}),
(0,x.jsxs)(`div`,{
className:`text-sm text-gray-600 text-right`,
children:[
(0,x.jsxs)(`div`,{children:[`Date: `,c.date]}),
(0,x.jsxs)(`div`,{children:[`Priority: `,c.priority,` · Status: `,c.status]})
]
})
]
}),
(0,x.jsxs)(`div`,{
className:`mb-6`,
children:[
(0,x.jsx)(`div`,{className:`font-bold mb-1`,children:`To,`}),
(0,x.jsxs)(`div`,{children:[`The Nodal Grievance Officer (` ,c.officer||`Shri. Ramesh Gupta`, `)`]}),
(0,x.jsx)(`div`,{children:c.dept}),
(0,x.jsx)(`div`,{children:`Government of India`})
]
}),
(0,x.jsx)(`div`,{
className:`mb-6`,
children:(0,x.jsxs)(`div`,{className:`font-bold underline text-center text-lg mb-4`,children:[`SUBJECT: Formal Public Grievance Regarding `,c.category,` at `,c.location]})
}),
(0,x.jsx)(`div`,{className:`mb-4`,children:(0,x.jsx)(`div`,{className:`font-bold`,children:`Sir/Madam,`})}),
(0,x.jsxs)(`div`,{
className:`leading-relaxed text-sm space-y-3 mb-6`,
children:[
(0,x.jsxs)(`p`,{children:[`I, `,(0,x.jsx)(`strong`,{children:c.citizen}),`, a resident of `,(0,x.jsx)(`strong`,{children:c.location}),` (Contact: `,c.phone,` / `,c.email,`), hereby register a formal public grievance under your jurisdiction.`]}),
(0,x.jsx)(`p`,{style:{padding:`12px 16px`,background:`#F8FAFC`,borderLeft:`4px solid #0B2447`},children:c.desc}),
(0,x.jsx)(`p`,{children:`Kindly treat this matter with appropriate urgency and provide status updates through the POLISENSE AI CPGRAMS tracking portal.`})
]
}),
(0,x.jsxs)(`div`,{
className:`flex justify-between items-end pt-6 border-t`,
style:{borderColor:`#CBD5E1`},
children:[
(0,x.jsxs)(`div`,{
children:[
(0,x.jsx)(`div`,{className:`text-xs text-gray-500`,children:`Digitally Authenticated by Citizen`}),
(0,x.jsx)(`div`,{className:`font-bold text-sm mt-1`,children:c.citizen})
]
}),
(0,x.jsxs)(`div`,{
className:`text-right`,
children:[
(0,x.jsx)(`div`,{className:`text-xs font-bold text-green-700`,children:`✓ VERIFIED BY POLISENSE AI`}),
(0,x.jsxs)(`div`,{className:`text-xs text-gray-500`,children:[`Ref: `,c.id]})
]
})
]
})
]
})
]
}),
(0,x.jsxs)(`div`,{
className:`flex justify-center gap-4 flex-wrap`,
children:[
(0,x.jsxs)(`button`,{onClick:()=>window.print(),className:`btn-orange`,children:[w.print,` Print / Save as PDF`]}),
(0,x.jsx)(`button`,{onClick:()=>t(`track`),className:`btn-cyan`,children:`Track This Complaint →`})
]
})
]
})
})
}
function ce({onBack:e}){
let uCtrl=(0,b.useContext)(GovUIContext),
liveList=uCtrl.complaints||Be,
defaultId=uCtrl.lastComplaint?.id||liveList[0]?.id||`POL-2026-9421`,
[t,n]=(0,b.useState)(defaultId),
found=liveList.find(x=>x.id.toLowerCase()===t.trim().toLowerCase())||liveList[0],
steps=[
{label:`Complaint Registered`,desc:`Submitted by ${found.citizen} (${found.location})`,date:found.date,done:!0},
{label:`AI Triage & Routing`,desc:`Categorized under ${found.category} and routed to ${found.dept} (Priority: ${found.priority})`,date:found.date,done:!0},
{label:`Under Nodal Review`,desc:`Reviewed by ${found.dept} Grievance Cell`,date:found.date,done:found.status!==`Pending`,active:found.status===`Pending`||found.status===`Under Review`},
{label:`Assigned & Field Action`,desc:`Assigned to Nodal Officer ${found.officer||`Shri. Ramesh Gupta`}`,date:found.date,done:found.status===`In Progress`||found.status===`Resolved`,active:found.status===`Assigned`||found.status===`In Progress`},
{label:`Disposed & Resolved`,desc:found.status===`Resolved`?`Officially resolved and closed by ${found.dept}`:`Awaiting final disposal confirmation`,date:found.status===`Resolved`?`Completed`:`In Queue`,done:found.status===`Resolved`,active:found.status===`Resolved`}
];
return(0,x.jsx)(`div`,{
style:{paddingTop:`80px`},
children:(0,x.jsxs)(`div`,{
className:`max-w-3xl mx-auto px-6 py-10`,
children:[
(0,x.jsxs)(`div`,{
className:`text-center mb-8`,
children:[
(0,x.jsx)(`div`,{className:`text-cyan-400 text-xs font-bold tracking-widest uppercase mb-2`,children:`Real-Time Live CPGRAMS Tracker`}),
(0,x.jsx)(`h1`,{className:`text-3xl font-bold text-white mb-2`,style:{fontFamily:`Poppins`},children:`Track Your Complaint`}),
(0,x.jsx)(`p`,{className:`text-white/50 text-sm`,children:`Live synchronized with the Government Admin Portal — any status update or inspection remark added by an Admin is reflected here immediately.`})
]
}),
(0,x.jsxs)(`div`,{
className:`glass-card p-6 mb-6`,
children:[
(0,x.jsx)(`label`,{className:`block text-xs font-bold uppercase tracking-wider mb-2`,style:{color:`#0B2447`},children:`Enter or Select Live Complaint Reference ID`}),
(0,x.jsxs)(`div`,{
className:`flex gap-3`,
children:[
(0,x.jsx)(`input`,{className:`input-field flex-1`,placeholder:`e.g. POL-2026-9421`,value:t,onChange:ev=>n(ev.target.value)}),
(0,x.jsx)(`button`,{className:`btn-orange px-6`,onClick:()=>n(t.trim()),children:`Track Live`})
]
}),
(0,x.jsxs)(`div`,{
style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:`6px`,marginTop:`12px`},
children:[
(0,x.jsx)(`span`,{style:{fontSize:`11px`,fontWeight:700,color:`#475569`},children:`Live Registered IDs:`}),
liveList.slice(0,6).map(item=>(0,x.jsxs)(`button`,{
type:`button`,
onClick:()=>n(item.id),
style:{padding:`4px 10px`,borderRadius:`999px`,fontSize:`11px`,fontWeight:700,cursor:`pointer`,background:found.id===item.id?`#0B2447`:`#F1F5F9`,color:found.id===item.id?`#FFFFFF`:`#0B2447`,border:`1px solid #CBD5E1`},
children:[item.id,item.isLive?` ● NEW`:``]
},item.id))
]
})
]
}),
found&&(0,x.jsxs)(`div`,{
className:`space-y-4`,
children:[
(0,x.jsx)(`div`,{
className:`glass-card p-6`,
children:(0,x.jsxs)(`div`,{
className:`flex justify-between items-start flex-wrap gap-4`,
children:[
(0,x.jsxs)(`div`,{
children:[
(0,x.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[
(0,x.jsx)(`span`,{style:{fontSize:`20px`,fontWeight:800,color:`#0B2447`,fontFamily:`Poppins`},children:found.id}),
found.isLive&&(0,x.jsx)(`span`,{style:{padding:`2px 8px`,borderRadius:`999px`,background:`#138808`,color:`#FFFFFF`,fontSize:`10px`,fontWeight:800},children:`● LIVE CITIZEN SUBMISSION`})
]}),
(0,x.jsxs)(`div`,{style:{fontSize:`14px`,fontWeight:700,color:`#C2410C`,marginTop:`4px`},children:[found.category,` · `,found.dept]}),
(0,x.jsxs)(`div`,{style:{fontSize:`12.5px`,color:`#475569`,marginTop:`2px`},children:[`Filed by `,found.citizen,` · `,found.location,` · `,found.date]}),
(0,x.jsx)(`p`,{style:{marginTop:`10px`,padding:`10px 14px`,borderRadius:`8px`,background:`#F8FAFC`,border:`1px solid #E2E8F0`,fontSize:`13px`,color:`#1E293B`},children:found.desc})
]
}),
(0,x.jsxs)(`div`,{
style:{textAlign:`right`},
children:[
(0,x.jsx)(`span`,{
style:{display:`inline-block`,padding:`6px 14px`,borderRadius:`999px`,fontSize:`12.5px`,fontWeight:800,background:found.status===`Resolved`?`#EAF7EC`:`#FFF5EB`,color:found.status===`Resolved`?`#138808`:`#C2410C`,border:found.status===`Resolved`?`1.5px solid #138808`:`1.5px solid #FDBA74`},
children:`Status: ${found.status}`
}),
(0,x.jsxs)(`div`,{style:{fontSize:`11.5px`,fontWeight:700,color:`#475569`,marginTop:`6px`},children:[`Priority: `,found.priority]})
]
})
]
})
}),
(0,x.jsxs)(`div`,{
className:`glass-card p-6`,
children:[
(0,x.jsx)(`h3`,{style:{fontSize:`15px`,fontWeight:700,color:`#0B2447`,fontFamily:`Poppins`,marginBottom:`16px`},children:`Live Redressal Status Timeline`}),
(0,x.jsx)(`div`,{
className:`space-y-4`,
children:steps.map((s,idx)=>(0,x.jsxs)(`div`,{
style:{display:`flex`,gap:`14px`,alignItems:`flex-start`},
children:[
(0,x.jsx)(`div`,{
style:{width:`32px`,height:`32px`,borderRadius:`50%`,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0,background:s.done?`#138808`:s.active?`#FFF5EB`:`#F1F5F9`,color:s.done?`#FFFFFF`:s.active?`#C2410C`:`#64748B`,border:s.active?`2px solid #FF9933`:`1px solid #CBD5E1`,fontWeight:800,fontSize:`13px`},
children:s.done?`✓`:idx+1
}),
(0,x.jsxs)(`div`,{
children:[
(0,x.jsx)(`div`,{style:{fontSize:`13.5px`,fontWeight:700,color:`#0B2447`},children:s.label}),
(0,x.jsx)(`div`,{style:{fontSize:`12.5px`,color:`#475569`,marginTop:`2px`},children:s.desc}),
(0,x.jsx)(`div`,{style:{fontSize:`11px`,color:`#64748B`,marginTop:`2px`,fontWeight:600},children:s.date})
]
})
]
},s.label))
})
]
}),
(0,x.jsxs)(`div`,{
className:`glass-card p-6`,
children:[
(0,x.jsx)(`h4`,{style:{fontSize:`13px`,fontWeight:800,color:`#0B2447`,textTransform:`uppercase`,marginBottom:`10px`},children:`Assigned Nodal Officer & Official Admin File Notings`}),
(0,x.jsxs)(`div`,{
style:{display:`flex`,alignItems:`center`,gap:`12px`,marginBottom:`12px`},
children:[
(0,x.jsx)(`img`,{src:`https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg`,alt:`GOI`,style:{width:`24px`,height:`28px`,objectFit:`contain`}}),
(0,x.jsxs)(`div`,{
children:[
(0,x.jsx)(`div`,{style:{fontSize:`13.5px`,fontWeight:700,color:`#0B2447`},children:found.officer||`Shri. Ramesh Gupta`}),
(0,x.jsxs)(`div`,{style:{fontSize:`12px`,color:`#475569`},children:[`Nodal Redressal Officer · `,found.dept]})
]
})
]
}),
(found.notes&&found.notes.length>0)&&(0,x.jsx)(`div`,{
style:{display:`flex`,flexDirection:`column`,gap:`6px`},
children:found.notes.map((nTxt,i)=>(0,x.jsx)(`div`,{style:{padding:`8px 12px`,borderRadius:`8px`,background:`#F2FAF3`,border:`1px solid #A8DFB2`,fontSize:`12.5px`,color:`#0B2447`,fontWeight:500},children:`📝 ${nTxt}`},i))
})
]
})
]
})
]
})
})
}
function le(){let[e,t]=(0,b.useState)([{role:`ai`,text:`Hello! I'm POLISENCE AI, your governance assistant. I can help you understand how to register complaints, track status, access government schemes, and navigate civic processes. How can I assist you today?`}]),[n,r]=(0,b.useState)(``),[i,a]=(0,b.useState)(!1),o=(0,b.useRef)(null),s=[`How do I register a complaint?`,`How do I track my complaint?`,`What is POLISENCE?`,`Tell me about government schemes`,`What is the resolution timeline?`,`Is my data secure?`],c={"how do i register":`To register a complaint, click 'Register Complaint' in the navigation menu. You'll go through a 3-step process: (1) Enter your personal details, (2) Describe your complaint with optional photo/voice attachments, (3) Review and submit. You'll receive a unique Complaint ID instantly!`,"how do i track":`To track your complaint, click 'Track Complaint' in the navigation or visit the Track page. Enter your Complaint ID (e.g. POL-2026-XXXXX) and you'll see a real-time timeline showing each stage: Registered → Under Review → Assigned → In Progress → Resolved.`,"what is polisence":`POLISENCE is an AI-powered Governance & Political Intelligence Platform. It bridges the gap between citizens and government authorities using artificial intelligence. You can submit complaints, track resolutions, access governance analytics, generate official letters, and interact with AI for 24/7 civic support.`,"government schemes":`Some major government schemes include: PM Awas Yojana (housing), PM Jan Arogya Yojana (health insurance), PM Ujjwala Yojana (LPG connections), MGNREGS (rural employment), PM Kisan (farmer support), and Digital India. Would you like details on any specific scheme?`,"resolution timeline":`Resolution timelines vary by complaint type: Emergency/Safety issues: 24–48 hours, Water/Electricity: 3–7 working days, Infrastructure/Roads: 7–30 days, General civic issues: 7–14 working days. Priority complaints are escalated automatically by our AI.`,secure:`Yes, absolutely! POLISENCE uses AES-256 encryption for data at rest and TLS 1.3 in transit. We comply with IT Act 2000, Personal Data Protection guidelines, and CERT-In standards. Your Aadhaar and personal data are never shared without consent and are stored in secure government-approved data centers.`},l=e=>{let t=e.toLowerCase();for(let[e,n]of Object.entries(c))if(t.includes(e.split(` `)[0])||t.includes(e.split(` `)[2]||``))return n;return`Thank you for your query. This is a demo AI interface — in the full platform, I'll be powered by Groq API + BERT models trained on India's governance data to give you accurate, real-time answers. For now, please try one of the suggested questions or visit the Register Complaint section for direct action.`},u=e=>{let i=e||n.trim();i&&(r(``),t(e=>[...e,{role:`user`,text:i}]),a(!0),setTimeout(()=>{a(!1),t(e=>[...e,{role:`ai`,text:l(i)}])},1200+Math.random()*800))};return(0,b.useEffect)(()=>{o.current?.scrollIntoView({behavior:`smooth`})},[e,i]),(0,x.jsx)(`div`,{style:{paddingTop:`80px`},children:(0,x.jsxs)(`div`,{className:`max-w-3xl mx-auto px-6 py-12`,children:[(0,x.jsxs)(`div`,{className:`text-center mb-8`,children:[(0,x.jsx)(`div`,{className:`text-cyan-400 text-xs font-bold tracking-widest uppercase mb-3`,children:`24/7 Civic Support`}),(0,x.jsx)(`h1`,{className:`text-3xl font-bold text-white mb-2`,style:{fontFamily:`Poppins`},children:`POLISENCE AI Assistant`}),(0,x.jsxs)(`div`,{className:`flex items-center justify-center gap-2 text-white/40 text-sm`,children:[(0,x.jsx)(`span`,{className:`w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse`}),`AI Online · Future Integration: Groq API + BERT`]})]}),(0,x.jsxs)(`div`,{className:`glass-card flex flex-col`,style:{height:`520px`,border:`1px solid rgba(19,136,8,0.15)`},children:[(0,x.jsxs)(`div`,{className:`flex items-center gap-3 px-5 py-4 border-b`,style:{borderColor:`rgba(255,255,255,0.06)`},children:[(0,x.jsx)(`div`,{className:`w-9 h-9 rounded-full flex items-center justify-center`,style:{background:`linear-gradient(135deg, #138808, #0057a8)`},children:(0,x.jsx)(`span`,{className:`text-white font-bold text-sm`,children:`AI`})}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`div`,{className:`text-white font-semibold text-sm`,style:{fontFamily:`Poppins`},children:`POLISENCE AI`}),(0,x.jsxs)(`div`,{className:`text-green-400 text-xs flex items-center gap-1`,children:[(0,x.jsx)(`span`,{className:`w-1 h-1 rounded-full bg-green-400 animate-pulse`}),` Online`]})]}),(0,x.jsx)(`div`,{className:`ml-auto text-white/25 text-xs`,children:`Demo Mode`})]}),(0,x.jsxs)(`div`,{className:`flex-1 overflow-y-auto p-5 space-y-4`,children:[e.map((e,t)=>(0,x.jsxs)(`div`,{className:`flex gap-3 ${e.role===`user`?`flex-row-reverse`:``}`,children:[e.role===`ai`&&(0,x.jsx)(`div`,{className:`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white`,style:{background:`linear-gradient(135deg, #138808, #0057a8)`},children:`AI`}),(0,x.jsx)(`div`,{className:`max-w-xs md:max-w-sm rounded-2xl px-4 py-3 text-sm leading-relaxed ${e.role===`user`?`text-white`:`text-white/85`}`,style:e.role===`user`?{background:`#D95F00`,borderBottomRightRadius:`4px`}:{background:`rgba(19,136,8,0.08)`,border:`1px solid rgba(19,136,8,0.15)`,borderBottomLeftRadius:`4px`},children:e.text})]},t)),i&&(0,x.jsxs)(`div`,{className:`flex gap-3`,children:[(0,x.jsx)(`div`,{className:`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0`,style:{background:`linear-gradient(135deg, #138808, #0057a8)`},children:`AI`}),(0,x.jsxs)(`div`,{className:`px-4 py-3 rounded-2xl rounded-bl flex gap-1 items-center`,style:{background:`rgba(19,136,8,0.08)`,border:`1px solid rgba(19,136,8,0.15)`},children:[(0,x.jsx)(`div`,{className:`typing-dot w-1.5 h-1.5 rounded-full bg-cyan-400`}),(0,x.jsx)(`div`,{className:`typing-dot w-1.5 h-1.5 rounded-full bg-cyan-400`,style:{animationDelay:`0.2s`}}),(0,x.jsx)(`div`,{className:`typing-dot w-1.5 h-1.5 rounded-full bg-cyan-400`,style:{animationDelay:`0.4s`}})]})]}),(0,x.jsx)(`div`,{ref:o})]}),(0,x.jsx)(`div`,{className:`px-4 pb-4 pt-3 border-t`,style:{borderColor:`rgba(255,255,255,0.06)`},children:(0,x.jsxs)(`div`,{className:`flex gap-2`,children:[(0,x.jsx)(`input`,{className:`input-field flex-1`,placeholder:`Ask about governance, complaints, schemes…`,value:n,onChange:e=>r(e.target.value),onKeyDown:e=>e.key===`Enter`&&u()}),(0,x.jsx)(`button`,{className:`w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0 transition-all hover:scale-105`,style:{background:`#D95F00`},onClick:()=>u(),children:w.send})]})})]}),(0,x.jsxs)(`div`,{className:`mt-5`,children:[(0,x.jsx)(`div`,{className:`text-white/40 text-xs mb-3`,children:`Suggested questions`}),(0,x.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:s.map(e=>(0,x.jsx)(`button`,{onClick:()=>u(e),className:`text-xs px-3 py-2 rounded-full transition-all hover:border-cyan-400/50 hover:text-white/90`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #94A3B8`,color:`#334155`},children:e},e))})]})]})})}function E(){let[e,t]=(0,b.useState)(!1),[n,r]=(0,b.useState)({name:``,email:``,subject:``,message:``}),i=(e,t)=>r(n=>({...n,[e]:t}));return(0,x.jsx)(`div`,{style:{paddingTop:`80px`},children:(0,x.jsxs)(`div`,{className:`max-w-6xl mx-auto px-6 py-16`,children:[(0,x.jsxs)(`div`,{className:`text-center mb-16`,children:[(0,x.jsx)(`div`,{className:`text-cyan-400 text-xs font-bold tracking-widest uppercase mb-3`,children:`Get in Touch`}),(0,x.jsx)(`h1`,{className:`text-4xl font-bold text-white mb-4`,style:{fontFamily:`Poppins`},children:`Contact Us`}),(0,x.jsx)(`p`,{className:`text-white/50 max-w-lg mx-auto`,children:`For technical support, partnership inquiries, or media requests, reach out to our team.`})]}),(0,x.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-3 gap-8`,children:[(0,x.jsxs)(`div`,{className:`space-y-5`,children:[[{icon:w.location,label:`Office Address`,value:`Ministry of Electronics & IT
New Delhi — 110001, India`},{icon:w.mail,label:`Email`,value:`support@polisence.gov.in
info@polisence.gov.in`},{icon:w.phone,label:`Phone`,value:`+91-11-2430-1900
1800-111-555 (Toll Free)`}].map(e=>(0,x.jsxs)(`div`,{className:`glass-card p-5 flex gap-4 items-start`,children:[(0,x.jsx)(`div`,{className:`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-cyan-400`,style:{background:`rgba(19,136,8,0.1)`},children:e.icon}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`div`,{className:`text-white/50 text-xs uppercase tracking-wider mb-1`,children:e.label}),e.value.split(`
`).map(e=>(0,x.jsx)(`div`,{className:`text-white text-sm`,children:e},e))]})]},e.label)),(0,x.jsxs)(`div`,{className:`glass-card p-5`,children:[(0,x.jsx)(`div`,{className:`text-white/50 text-xs uppercase tracking-wider mb-4`,children:`Follow Us`}),(0,x.jsx)(`div`,{className:`flex gap-3`,children:[`Twitter`,`LinkedIn`,`YouTube`,`GitHub`].map(e=>(0,x.jsx)(`button`,{className:`px-3 py-2 rounded-lg text-xs font-semibold text-white/60 hover:text-cyan-400 transition-colors`,style:{background:`#F1F5F9`,border:`1px solid #CBD5E1`},children:e},e))})]})]}),(0,x.jsx)(`div`,{className:`lg:col-span-2 glass-card p-8`,children:e?(0,x.jsxs)(`div`,{className:`text-center py-12`,children:[(0,x.jsx)(`div`,{className:`text-5xl mb-4`,children:`✅`}),(0,x.jsx)(`h3`,{className:`text-white font-bold text-xl mb-2`,style:{fontFamily:`Poppins`},children:`Message Sent!`}),(0,x.jsx)(`p`,{className:`text-white/50 text-sm`,children:`We'll get back to you within 24 business hours.`}),(0,x.jsx)(`button`,{className:`btn-cyan mt-6`,onClick:()=>t(!1),children:`Send Another`})]}):(0,x.jsxs)(`div`,{className:`space-y-5`,children:[(0,x.jsxs)(`div`,{className:`grid grid-cols-2 gap-5`,children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`label`,{className:`block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2`,children:`Your Name`}),(0,x.jsx)(`input`,{className:`input-field`,placeholder:`Full name`,value:n.name,onChange:e=>i(`name`,e.target.value)})]}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`label`,{className:`block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2`,children:`Email`}),(0,x.jsx)(`input`,{className:`input-field`,type:`email`,placeholder:`you@example.com`,value:n.email,onChange:e=>i(`email`,e.target.value)})]})]}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`label`,{className:`block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2`,children:`Subject`}),(0,x.jsx)(`input`,{className:`input-field`,placeholder:`How can we help?`,value:n.subject,onChange:e=>i(`subject`,e.target.value)})]}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`label`,{className:`block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2`,children:`Message`}),(0,x.jsx)(`textarea`,{className:`input-field h-36 resize-none`,placeholder:`Your message…`,value:n.message,onChange:e=>i(`message`,e.target.value)})]}),(0,x.jsx)(`button`,{className:`btn-orange w-full`,onClick:()=>n.name&&n.email&&n.message&&t(!0),children:`Send Message →`})]})})]})]})})}function D(){return null}function ue({children:e,wide:t}){return(0,x.jsx)(`div`,{className:`min-h-screen grid-bg flex items-center justify-center px-4 py-24`,style:{paddingTop:`96px`},children:(0,x.jsx)(`div`,{className:`w-full ${t?`max-w-2xl`:`max-w-md`}`,children:e})})}function de({label:e,onClick:t}){return(0,x.jsxs)(`button`,{onClick:t,className:`flex items-center gap-2 text-white/45 hover:text-white/80 text-sm mb-8 transition-colors group`,children:[(0,x.jsx)(`svg`,{className:`w-4 h-4 transition-transform group-hover:-translate-x-0.5`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M10 19l-7-7m0 0l7-7m-7 7h18`})}),e]})}function fe({navigate:e}){
let t=t=>{e(t),window.scrollTo(0,0)},m=S();
return(0,x.jsx)(`div`,{
className:`min-h-screen grid-bg`,
style:{paddingTop:`80px`},
children:(0,x.jsxs)(`div`,{
className:`max-w-5xl mx-auto px-6 py-16`,
children:[
(0,x.jsx)(de,{label:`Back to Home`,onClick:()=>t(`home`)}),
(0,x.jsxs)(`div`,{
className:`text-center mb-12`,
children:[
(0,x.jsxs)(`div`,{
className:`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5 text-xs font-bold tracking-widest uppercase`,
style:{background:`rgba(19,136,8,0.08)`,border:`1px solid rgba(19,136,8,0.25)`,color:`#138808`},
children:[
(0,x.jsx)(`svg`,{className:`w-3.5 h-3.5`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z`})}),
`Select Workspace`
]
}),
(0,x.jsxs)(`h1`,{
className:`text-4xl md:text-5xl font-bold text-white mb-4`,
style:{fontFamily:`Poppins`},
children:[`Choose Your `,(0,x.jsx)(`span`,{className:`gradient-text`,children:`Workspace`})]
}),
(0,x.jsx)(`p`,{
className:`text-white/50 max-w-lg mx-auto`,
children:`Select how you want to continue. Public citizens need no login — government and strategy users can sign in or use instant Demo Login.`
})
]
}),
(0,x.jsx)(`div`,{
className:`grid grid-cols-1 md:grid-cols-3 gap-6`,
children:[
{
emoji:(0,x.jsx)(GoiDeptLogo,{ministry:`CITIZEN`,color:`#138808`}),
badge:`No Login Required`,
badgeStyle:{background:`#EAF7EC`,color:`#138808`,border:`1px solid #A8DFB2`},
title:`Public Citizen`,
desc:`Continue without login. Access Complaint Registration, Complaint Tracking, and the Public AI Assistant — completely free.`,
btnLabel:`Continue as Citizen`,
btnStyle:{background:`#138808`,color:`#FFFFFF`},
action:()=>t(`home`),
demoAction:null
},
{
emoji:(0,x.jsx)(GoiDeptLogo,{ministry:`GOVT ADMIN`,color:`#C2410C`}),
badge:`Admin & Officer Portal`,
badgeStyle:{background:`#FFF5EB`,color:`#C2410C`,border:`1px solid #FDBA74`},
title:`Government Admin`,
desc:`Secure Government Workspace. Access complaint management dashboards, department analytics, heatmaps, and authority tools.`,
btnLabel:`Admin Login`,
btnStyle:{background:`#0B2447`,color:`#FFFFFF`},
action:()=>t(`admin-login`),
demoLabel:`⚡ Instant Demo Login (Admin)`,
demoAction:()=>{
m({type:`success`,title:`Demo Admin Session Active`,msg:`Logged into Government Admin Portal in Demo Mode.`});
t(`admin-dashboard`);
}
},
{
emoji:(0,x.jsx)(GoiDeptLogo,{ministry:`STRATEGY`,color:`#0B2447`}),
badge:`Political & Policy Studio`,
badgeStyle:{background:`#EEF2FF`,color:`#0B2447`,border:`1px solid #C7D2FE`},
title:`Strategy Workspace`,
desc:`Premium Political Intelligence Workspace. Unlock AI Speech Generator, Manifesto Generator, Constituency Intel, and War Room.`,
btnLabel:`Strategy Login`,
btnStyle:{background:`#0B2447`,color:`#FFFFFF`},
action:()=>t(`strategy-login`),
demoLabel:`⚡ Instant Demo Login (Strategy)`,
demoAction:()=>{
m({type:`success`,title:`Demo Strategy Session Active`,msg:`Logged into Strategy Workspace in Demo Mode.`});
t(`strategy-dashboard`);
}
}
].map(e=>(0,x.jsxs)(`div`,{
className:`glass-card p-7 flex flex-col transition-all duration-300`,
children:[
(0,x.jsx)(`div`,{className:`mb-4`,children:e.emoji}),
(0,x.jsx)(`div`,{className:`flex items-center gap-2 mb-3`,children:(0,x.jsx)(`span`,{className:`text-xs font-bold px-2.5 py-1 rounded-full`,style:e.badgeStyle,children:e.badge})}),
(0,x.jsx)(`h2`,{className:`text-white font-bold text-2xl mb-3`,style:{fontFamily:`Poppins`},children:e.title}),
(0,x.jsx)(`p`,{className:`text-white/55 text-sm leading-relaxed flex-1 mb-6`,children:e.desc}),
(0,x.jsxs)(`div`,{
className:`space-y-2.5`,
children:[
(0,x.jsx)(`button`,{
onClick:e.action,
className:`w-full py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90`,
style:{...e.btnStyle,fontFamily:`Poppins`},
children:e.btnLabel
}),
e.demoAction&&(0,x.jsx)(`button`,{
type:`button`,
onClick:e.demoAction,
className:`w-full py-2.5 rounded-xl font-bold text-xs transition-all`,
style:{background:`linear-gradient(100deg, #FF9933 0%, #D95F00 100%)`,color:`#FFFFFF`,border:`1px solid #C2410C`,fontFamily:`Poppins`,boxShadow:`0 4px 12px rgba(217,95,0,0.22)`},
children:e.demoLabel
})
]
})
]
},e.title))
}),
(0,x.jsxs)(`div`,{
className:`text-center mt-10`,
children:[
(0,x.jsx)(`span`,{className:`text-white/35 text-sm`,children:`Don't have an account? `}),
(0,x.jsx)(`button`,{onClick:()=>t(`create-account`),className:`text-cyan-400 text-sm font-bold hover:underline`,children:`Create Account`})
]
})
]
})
})
}
function pe({navigate:e}){let t=t=>{e(t),window.scrollTo(0,0)},[n,r]=(0,b.useState)(`citizen`),[i,a]=(0,b.useState)({fullName:``,email:``,phone:``,password:``,confirmPassword:``,department:``,designation:``,officeName:``,employeeId:``,organization:``,constituency:``,politicalOrg:``}),o=(e,t)=>a(n=>({...n,[e]:t})),[s,c]=(0,b.useState)(!1),[l,u]=(0,b.useState)(!1),d=({show:e})=>(0,x.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:e?(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21`})}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M15 12a3 3 0 11-6 0 3 3 0 016 0z`}),(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z`})]})});return(0,x.jsxs)(ue,{wide:!0,children:[(0,x.jsx)(de,{label:`Back to Home`,onClick:()=>t(`home`)}),(0,x.jsxs)(`div`,{className:`text-center mb-8`,children:[(0,x.jsx)(`div`,{className:`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5`,style:{background:`linear-gradient(135deg, #138808, #0057a8)`},children:(0,x.jsx)(`svg`,{className:`w-7 h-7 text-white`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z`})})}),(0,x.jsx)(`h1`,{className:`text-3xl font-bold text-white mb-2`,style:{fontFamily:`Poppins`},children:`Create Account`}),(0,x.jsx)(`p`,{className:`text-white/45 text-sm`,children:`Join POLISENCE — AI Governance Platform`})]}),(0,x.jsxs)(`div`,{className:`glass-card p-8 space-y-5`,children:[(0,x.jsx)(D,{label:`Future Authentication API · Node.js + MongoDB`}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`label`,{className:`block text-white/60 text-xs font-semibold uppercase tracking-wider mb-3`,children:`Select Role *`}),(0,x.jsx)(`div`,{className:`grid grid-cols-3 gap-2`,children:[{key:`citizen`,label:`Public Citizen`,color:`#10b981`},{key:`admin`,label:`Government Admin`,color:`#138808`},{key:`strategy`,label:`Strategy User`,color:`#0B2447`}].map(e=>(0,x.jsx)(`button`,{onClick:()=>r(e.key),className:`py-2.5 px-3 rounded-xl text-xs font-bold transition-all`,style:n===e.key?{background:`${e.color}20`,color:e.color,border:`1.5px solid ${e.color}`}:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,color:`#475569`,border:`1px solid #94A3B8`},children:e.label},e.key))})]}),(0,x.jsxs)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-4`,children:[(0,x.jsxs)(`div`,{className:`md:col-span-2`,children:[(0,x.jsx)(`label`,{className:`block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2`,children:`Full Name *`}),(0,x.jsx)(`input`,{className:`input-field`,placeholder:`Your legal full name`,value:i.fullName,onChange:e=>o(`fullName`,e.target.value)})]}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`label`,{className:`block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2`,children:`Email *`}),(0,x.jsx)(`input`,{className:`input-field`,type:`email`,placeholder:`you@example.com`,value:i.email,onChange:e=>o(`email`,e.target.value)})]}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`label`,{className:`block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2`,children:`Phone *`}),(0,x.jsx)(`input`,{className:`input-field`,placeholder:`+91 XXXXX XXXXX`,value:i.phone,onChange:e=>o(`phone`,e.target.value)})]}),(0,x.jsxs)(`div`,{className:`relative`,children:[(0,x.jsx)(`label`,{className:`block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2`,children:`Password *`}),(0,x.jsx)(`input`,{className:`input-field pr-10`,type:s?`text`:`password`,placeholder:`Min. 8 characters`,value:i.password,onChange:e=>o(`password`,e.target.value)}),(0,x.jsx)(`button`,{className:`absolute right-3 bottom-3 text-white/35 hover:text-white/70`,onClick:()=>c(!s),children:(0,x.jsx)(d,{show:s})})]}),(0,x.jsxs)(`div`,{className:`relative`,children:[(0,x.jsx)(`label`,{className:`block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2`,children:`Confirm Password *`}),(0,x.jsx)(`input`,{className:`input-field pr-10`,type:l?`text`:`password`,placeholder:`Repeat password`,value:i.confirmPassword,onChange:e=>o(`confirmPassword`,e.target.value)}),(0,x.jsx)(`button`,{className:`absolute right-3 bottom-3 text-white/35 hover:text-white/70`,onClick:()=>u(!l),children:(0,x.jsx)(d,{show:l})}),i.confirmPassword&&i.password!==i.confirmPassword&&(0,x.jsx)(`p`,{className:`text-red-400 text-xs mt-1`,children:`Passwords do not match`})]})]}),n===`admin`&&(0,x.jsxs)(`div`,{className:`rounded-xl p-5 space-y-4`,style:{background:`rgba(19,136,8,0.05)`,border:`1px solid rgba(19,136,8,0.15)`},children:[(0,x.jsx)(`div`,{className:`text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1`,children:`Government Details`}),(0,x.jsxs)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-4`,children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`label`,{className:`block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2`,children:`Department *`}),(0,x.jsxs)(`select`,{className:`input-field`,value:i.department,onChange:e=>o(`department`,e.target.value),style:{appearance:`none`},children:[(0,x.jsx)(`option`,{value:``,style:{background:`linear-gradient(180deg, #FFF7EE 0%, #FFFFFF 48%, #F1F9F2 100%)`},children:`Select Department`}),[`Municipal Corporation`,`PWD`,`Water Supply`,`Electricity Board`,`Health Dept.`,`Education Dept.`,`Police`,`Revenue`,`Other`].map(e=>(0,x.jsx)(`option`,{value:e,style:{background:`linear-gradient(180deg, #FFF7EE 0%, #FFFFFF 48%, #F1F9F2 100%)`},children:e},e))]})]}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`label`,{className:`block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2`,children:`Designation *`}),(0,x.jsx)(`input`,{className:`input-field`,placeholder:`e.g. District Collector`,value:i.designation,onChange:e=>o(`designation`,e.target.value)})]}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`label`,{className:`block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2`,children:`Office Name *`}),(0,x.jsx)(`input`,{className:`input-field`,placeholder:`Office / Branch name`,value:i.officeName,onChange:e=>o(`officeName`,e.target.value)})]}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`label`,{className:`block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2`,children:`Govt. Employee ID`}),(0,x.jsx)(`input`,{className:`input-field`,placeholder:`Future Backend Verification`,value:i.employeeId,onChange:e=>o(`employeeId`,e.target.value)})]})]})]}),n===`strategy`&&(0,x.jsxs)(`div`,{className:`rounded-xl p-5 space-y-4`,style:{background:`rgba(11,36,71,0.05)`,border:`1px solid rgba(11,36,71,0.15)`},children:[(0,x.jsx)(`div`,{className:`text-purple-400 text-xs font-bold uppercase tracking-wider mb-1`,children:`Strategy Details`}),(0,x.jsxs)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-4`,children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`label`,{className:`block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2`,children:`Organization *`}),(0,x.jsx)(`input`,{className:`input-field`,placeholder:`Party / Think Tank / NGO`,value:i.organization,onChange:e=>o(`organization`,e.target.value)})]}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`label`,{className:`block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2`,children:`Constituency`}),(0,x.jsx)(`input`,{className:`input-field`,placeholder:`e.g. New Delhi PC`,value:i.constituency,onChange:e=>o(`constituency`,e.target.value)})]}),(0,x.jsxs)(`div`,{className:`md:col-span-2`,children:[(0,x.jsx)(`label`,{className:`block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2`,children:`Political Organization *`}),(0,x.jsx)(`input`,{className:`input-field`,placeholder:`Registered political organization name`,value:i.politicalOrg,onChange:e=>o(`politicalOrg`,e.target.value)})]})]})]}),(0,x.jsx)(O,{role:n,form:i,go:t}),(0,x.jsxs)(`div`,{className:`text-center text-sm text-white/40`,children:[`Already have an account?`,` `,(0,x.jsx)(`button`,{onClick:()=>t(`role-selection`),className:`text-cyan-400 font-semibold hover:underline`,children:`Login`})]})]})]})}function O({role:e,form:t,go:n}){let r=S(),[i,a]=(0,b.useState)(!1);return(0,x.jsx)(`button`,{className:`btn-orange w-full py-3 text-base`,onClick:()=>{if(!t.fullName||!t.email||!t.password){r({type:`warn`,title:`Missing Fields`,msg:`Please fill in your name, email and password to continue.`});return}a(!0),setTimeout(()=>{a(!1),r({type:`success`,title:`Account created successfully (Development Mode)`,msg:`Signup API will be connected later. Redirecting to login…`}),setTimeout(()=>{n(e===`admin`?`admin-login`:e===`strategy`?`strategy-login`:`home`)},900)},1400)},style:{opacity:i?.7:1},children:i?(0,x.jsxs)(`span`,{className:`flex items-center justify-center gap-2`,children:[(0,x.jsxs)(`svg`,{className:`w-4 h-4 animate-spin`,viewBox:`0 0 24 24`,fill:`none`,children:[(0,x.jsx)(`circle`,{className:`opacity-25`,cx:`12`,cy:`12`,r:`10`,stroke:`currentColor`,strokeWidth:`4`}),(0,x.jsx)(`path`,{className:`opacity-75`,fill:`currentColor`,d:`M4 12a8 8 0 018-8v8H4z`})]}),`Creating Account…`]}):`Create Account →`})}function k({type:e,navigate:t}){
let n=e=>{t(e),window.scrollTo(0,0)},
[r,i]=(0,b.useState)({email:``,password:``,captcha:`7B9K4`,otp:``,authMode:`password`,lang:`English`,remember:!1}),
a=(e,t)=>i(n=>({...n,[e]:t})),
[o,s]=(0,b.useState)(!1),
[c,l]=(0,b.useState)(!1),
[otpSent,setOtpSent]=(0,b.useState)(!1),
u=e===`admin`,
m=S(),
demoLogin=()=>{
e===`admin`?(m({type:`success`,title:`Demo Admin Login Successful`,msg:`Welcome to the Government Admin Portal (Demo Session).`}),n(`admin-dashboard`)):(m({type:`success`,title:`Demo Strategy Login Successful`,msg:`Welcome to the Strategy Intelligence Workspace (Demo Session).`}),n(`strategy-dashboard`))
},
h=()=>{
if(!r.email||(r.authMode===`password`?!r.password:!r.otp)){
m({type:`warn`,title:`Missing Credentials`,msg:`Please enter your Mobile Number / Email ID and ${r.authMode===`password`?`Password`:`OTP`} or click Demo Login below.`});
return
}
l(!0),setTimeout(()=>{
l(!1),demoLogin()
},600)
};
return(0,x.jsxs)(ue,{
children:[
(0,x.jsx)(de,{label:`← Back to Workspace Selection`,onClick:()=>n(`role-selection`)}),
(0,x.jsxs)(`div`,{
className:`glass-card overflow-hidden p-0`,
style:{border:`1px solid #C6D4E6`,borderRadius:`14px`,background:`#FFFFFF`,boxShadow:`0 14px 36px rgba(11,36,71,0.10)`},
children:[
(0,x.jsxs)(`div`,{
style:{height:`6px`,display:`flex`},
children:[
(0,x.jsx)(`span`,{style:{flex:1,background:`#FF9933`}}),
(0,x.jsx)(`span`,{style:{flex:1,background:`#FFFFFF`}}),
(0,x.jsx)(`span`,{style:{flex:1,background:`#138808`}})
]
}),
(0,x.jsxs)(`div`,{
className:`px-6 py-5 flex items-center justify-between flex-wrap gap-3`,
style:{background:`linear-gradient(90deg, #FFF5EB 0%, #FFFFFF 50%, #EDF8EE 100%)`,borderBottom:`1px solid #CBD5E1`},
children:[
(0,x.jsxs)(`div`,{
className:`flex items-center gap-3`,
children:[
(0,x.jsx)(`img`,{src:`https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg`,alt:`Emblem of India`,className:`w-9 h-11 object-contain`}),
(0,x.jsxs)(`div`,{
children:[
(0,x.jsx)(`div`,{style:{fontSize:`10.5px`,fontWeight:800,color:`#C2410C`,letterSpacing:`0.6px`},children:`GOVERNMENT OF INDIA · जन शिकायत एवं शासन पोर्टल`}),
(0,x.jsx)(`h1`,{className:`text-xl font-bold`,style:{color:`#0B2447`,fontFamily:`Poppins`},children:u?`CPGRAMS — PMO Government Admin Login`:`CPGRAMS — Strategy Workspace Login`}),
(0,x.jsx)(`p`,{style:{fontSize:`11.5px`,color:`#334155`},children:`Use your Mobile Number, Email ID, or click Instant Demo Login below`})
]
})
]
}),
(0,x.jsxs)(`select`,{
value:r.lang,
onChange:e=>a(`lang`,e.target.value),
style:{padding:`6px 10px`,borderRadius:`8px`,border:`1px solid #94A3B8`,background:`#FFFFFF`,color:`#0B2447`,fontSize:`12px`,fontWeight:700},
children:[`English`,`हिन्दी (Hindi)`,`বাংলা (Bengali)`,`मराठी (Marathi)`,`தமிழ் (Tamil)`,`తెలుగు (Telugu)`,`ગુજરાતી (Gujarati)`,`اردو (Urdu)`].map(l=>(0,x.jsx)(`option`,{value:l,children:l},l))
})
]
}),
(0,x.jsxs)(`div`,{
className:`p-7 space-y-4`,
children:[
(0,x.jsxs)(`div`,{
className:`p-3.5 rounded-xl flex items-center justify-between gap-3 flex-wrap`,
style:{background:`#FFF5EB`,border:`1.5px solid #FF9933`},
children:[
(0,x.jsxs)(`div`,{
children:[
(0,x.jsx)(`div`,{style:{fontSize:`12px`,fontWeight:800,color:`#C2410C`},children:`⚡ Quick Presentation / Demo Access`}),
(0,x.jsx)(`div`,{style:{fontSize:`11px`,color:`#334155`},children:u?`Explore all 12 Government Admin modules immediately`:`Explore Speech Studio, Manifesto Studio & Strategy modules immediately`})
]
}),
(0,x.jsx)(`button`,{
type:`button`,
onClick:demoLogin,
className:`px-4 py-2 rounded-lg text-xs font-bold transition-all`,
style:{background:`linear-gradient(100deg, #E66A00, #C2410C)`,color:`#FFFFFF`,boxShadow:`0 4px 12px rgba(194,65,12,0.25)`},
children:u?`⚡ Demo Login to Admin Portal →`:`⚡ Demo Login to Strategy Portal →`
})
]
}),
(0,x.jsxs)(`div`,{
children:[
(0,x.jsx)(`label`,{className:`block text-xs font-bold uppercase tracking-wider mb-1.5`,style:{color:`#0B2447`},children:u?`MOBILE NUMBER / GOVERNMENT EMAIL ID *`:`MOBILE NUMBER / REGISTERED EMAIL ID *`}),
(0,x.jsx)(`input`,{className:`input-field`,type:`text`,placeholder:u?`Enter Mobile No. or official@gov.in`:`Enter Mobile No. or you@organization.in`,value:r.email,onChange:e=>a(`email`,e.target.value)})
]
}),
(0,x.jsxs)(`div`,{
className:`grid grid-cols-1 sm:grid-cols-3 gap-3 items-end`,
children:[
(0,x.jsxs)(`div`,{
className:`sm:col-span-2`,
children:[
(0,x.jsx)(`label`,{className:`block text-xs font-bold uppercase tracking-wider mb-1.5`,style:{color:`#0B2447`},children:`SECURITY CODE (CAPTCHA) *`}),
(0,x.jsx)(`input`,{className:`input-field`,placeholder:`Enter Security Code`,value:r.captcha,onChange:e=>a(`captcha`,e.target.value)})
]
}),
(0,x.jsx)(`div`,{
className:`h-11 rounded-lg flex items-center justify-center font-bold tracking-widest select-none`,
style:{background:`linear-gradient(135deg, #FFF0DF, #E6F4EA)`,border:`1.5px dashed #0B2447`,color:`#0B2447`,fontSize:`15px`,letterSpacing:`3px`},
children:`7 B 9 K 4`
})
]
}),
(0,x.jsxs)(`div`,{
className:`grid grid-cols-2 gap-2.5 pt-1`,
children:[
(0,x.jsx)(`button`,{
type:`button`,
onClick:()=>a(`authMode`,`password`),
className:`py-2.5 px-3 rounded-lg text-xs font-bold transition-all`,
style:r.authMode===`password`?{background:`#0B2447`,color:`#FFFFFF`,border:`1px solid #0B2447`}:{background:`#F1F5F9`,color:`#0B2447`,border:`1px solid #94A3B8`},
children:`🔑 Login With Password`
}),
(0,x.jsx)(`button`,{
type:`button`,
onClick:()=>{a(`authMode`,`otp`),setOtpSent(!0)},
className:`py-2.5 px-3 rounded-lg text-xs font-bold transition-all`,
style:r.authMode===`otp`?{background:`#C2410C`,color:`#FFFFFF`,border:`1px solid #9A3412`}:{background:`#FFF5EB`,color:`#C2410C`,border:`1px solid #FDBA74`},
children:`📲 Get OTP on Mobile`
})
]
}),
r.authMode===`password`?(0,x.jsxs)(`div`,{
className:`relative`,
children:[
(0,x.jsx)(`label`,{className:`block text-xs font-bold uppercase tracking-wider mb-1.5`,style:{color:`#0B2447`},children:`PASSWORD *`}),
(0,x.jsx)(`input`,{className:`input-field pr-10`,type:o?`text`:`password`,placeholder:`Enter your portal password`,value:r.password,onChange:e=>a(`password`,e.target.value),onKeyDown:e=>e.key===`Enter`&&h()}),
(0,x.jsx)(`button`,{type:`button`,className:`absolute right-3 bottom-3 text-xs font-bold`,style:{color:`#0B2447`},onClick:()=>s(!o),children:o?`Hide`:`Show`})
]
}):(0,x.jsxs)(`div`,{
children:[
otpSent&&(0,x.jsx)(`p`,{style:{fontSize:`11.5px`,color:`#138808`,fontWeight:700,marginBottom:`6px`},children:`✓ One-Time Password (OTP) sent to your mobile number.`}),
(0,x.jsx)(`label`,{className:`block text-xs font-bold uppercase tracking-wider mb-1.5`,style:{color:`#0B2447`},children:`ENTER 6-DIGIT MOBILE OTP *`}),
(0,x.jsx)(`input`,{className:`input-field`,type:`text`,placeholder:`Enter 6-digit OTP (e.g. 123456)`,value:r.otp,onChange:e=>a(`otp`,e.target.value),onKeyDown:e=>e.key===`Enter`&&h()})
]
}),
(0,x.jsxs)(`div`,{
className:`flex items-center justify-between text-xs pt-1`,
children:[
(0,x.jsxs)(`label`,{
className:`flex items-center gap-2 cursor-pointer font-semibold`,
style:{color:`#334155`},
children:[
(0,x.jsx)(`input`,{type:`checkbox`,checked:r.remember,onChange:e=>a(`remember`,e.target.checked)}),
`Remember session`
]
}),
(0,x.jsx)(`button`,{type:`button`,onClick:()=>n(`forgot-password`),className:`font-bold hover:underline`,style:{color:`#C2410C`},children:`Forgot Password / Reset OTP?`})
]
}),
(0,x.jsx)(`button`,{
type:`button`,
className:`w-full py-3.5 rounded-xl font-bold text-sm transition-all`,
style:{background:`linear-gradient(95deg, #138808 0%, #0B2447 100%)`,color:`#FFFFFF`,fontFamily:`Poppins`,boxShadow:`0 6px 18px rgba(19,136,8,0.24)`},
onClick:h,
children:c?`Verifying Credentials…`:`🔐 Sign-In to ${u?`Government Admin`:`Strategy`} Portal`
}),
(0,x.jsxs)(`div`,{
className:`pt-3 border-t flex items-center justify-between flex-wrap gap-2 text-xs`,
style:{borderColor:`#CBD5E1`,color:`#334155`},
children:[
(0,x.jsxs)(`span`,{children:[`First time user? `,(0,x.jsx)(`button`,{type:`button`,onClick:()=>n(`create-account`),className:`font-bold hover:underline`,style:{color:`#138808`},children:`Click here to Sign Up`})]}),
(0,x.jsx)(`button`,{type:`button`,onClick:()=>n(`role-selection`),className:`font-bold hover:underline`,style:{color:`#0B2447`},children:`← Switch Workspace`})
]
})
]
})
]
})
]
})
}
function me({navigate:e}){return(0,x.jsx)(k,{type:`admin`,navigate:e})}function he({navigate:e}){return(0,x.jsx)(k,{type:`strategy`,navigate:e})}var ge={name:`New Delhi Parliamentary Constituency`,state:`Delhi`,type:`Parliamentary`,population:`1,742,400`,voters:`1,284,312`,area:`147 km²`,score:78,sentiment:`+12.4%`,issues:[{label:`Water Supply`,count:487,color:`#138808`,pct:38},{label:`Road Damage`,count:312,color:`#D95F00`,pct:24},{label:`Electricity`,count:245,color:`#fbbf24`,pct:19},{label:`Sanitation`,count:167,color:`#10b981`,pct:13},{label:`Health`,count:73,color:`#f472b6`,pct:6}],zones:[{name:`Connaught Place`,score:84,risk:`Low`,voters:`98,420`},{name:`Karol Bagh`,score:71,risk:`Medium`,voters:`142,800`},{name:`Patel Nagar`,score:65,risk:`High`,voters:`187,300`},{name:`Rajendra Nagar`,score:79,risk:`Low`,voters:`112,450`},{name:`South Delhi Zone`,score:58,risk:`Critical`,voters:`223,100`}],devIndex:72,trendData:[42,58,51,74,65,88,79,92,84,78,71,83]},_e=[{id:1,title:`Jal Jeevan Mission Drive`,status:`Active`,start:`1 Jul 2026`,end:`31 Aug 2026`,progress:68,color:`#138808`,category:`Water`,lead:`Smt. Priya Sharma`},{id:2,title:`Road Repair Awareness`,status:`Active`,start:`15 Jul 2026`,end:`15 Sep 2026`,progress:42,color:`#D95F00`,category:`Infrastructure`,lead:`Shri. Rajan Mehta`},{id:3,title:`Skill India Youth Rally`,status:`Planned`,start:`1 Sep 2026`,end:`30 Sep 2026`,progress:10,color:`#0B2447`,category:`Employment`,lead:`Dr. Anjali Singh`},{id:4,title:`Women Safety Campaign`,status:`Active`,start:`20 Jun 2026`,end:`20 Sep 2026`,progress:74,color:`#f472b6`,category:`Safety`,lead:`Smt. Kamla Devi`},{id:5,title:`Smart Village Initiative`,status:`Completed`,start:`1 Apr 2026`,end:`30 Jun 2026`,progress:100,color:`#10b981`,category:`Development`,lead:`Shri. Dev Prakash`}],ve=[{id:1,title:`Review water supply complaint data`,priority:`Urgent`,due:`Today`,done:!1,campaign:`Jal Jeevan`},{id:2,title:`Prepare speech for rally on 5 Aug`,priority:`High`,due:`Tomorrow`,done:!1,campaign:`Road Repair`},{id:3,title:`Review AI-generated weekly brief`,priority:`High`,due:`Today`,done:!0,campaign:`General`},{id:4,title:`Constituency walkthrough — Patel Nagar`,priority:`Medium`,due:`3 Aug 2026`,done:!1,campaign:`Survey`},{id:5,title:`Sign off on manifesto draft v3`,priority:`Medium`,due:`5 Aug 2026`,done:!1,campaign:`Manifesto`},{id:6,title:`Call meeting with zone coordinators`,priority:`Low`,due:`7 Aug 2026`,done:!1,campaign:`General`}],ye=[{id:1,title:`Constituency Rally — Connaught Place`,date:`2 Aug`,time:`10:00 AM`,type:`rally`,color:`#0B2447`},{id:2,title:`Water Board Review Meeting`,date:`3 Aug`,time:`2:00 PM`,type:`meeting`,color:`#138808`},{id:3,title:`AI Weekly Brief`,date:`4 Aug`,time:`9:00 AM`,type:`ai`,color:`#10b981`},{id:4,title:`Press Conference — Road Repair`,date:`5 Aug`,time:`11:30 AM`,type:`press`,color:`#D95F00`},{id:5,title:`Youth Skill Workshop`,date:`7 Aug`,time:`3:00 PM`,type:`event`,color:`#fbbf24`},{id:6,title:`Manifesto Review Session`,date:`8 Aug`,time:`4:00 PM`,type:`meeting`,color:`#f472b6`},{id:7,title:`Zonal Coordinators Call`,date:`9 Aug`,time:`10:00 AM`,type:`meeting`,color:`#818cf8`},{id:8,title:`AI Strategy Brief — Monthly`,date:`10 Aug`,time:`9:00 AM`,type:`ai`,color:`#10b981`}],be=[{id:`strategy-dashboard`,label:`Dashboard`,icon:(0,x.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z`})})},{id:`strategy-constituency`,label:`Constituency Intel`,icon:(0,x.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7`})})},{id:`strategy-chatbot`,label:`AI Strategy Chat`,icon:(0,x.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z`})}),badge:1},{id:`strategy-speech`,label:`Speech Generator`,icon:(0,x.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 016 0v6a3 3 0 01-3 3z`})})},{id:`strategy-campaigns`,label:`Campaign Planner`,icon:(0,x.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01`})})},{id:`strategy-manifesto`,label:`Manifesto Generator`,icon:(0,x.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253`})})},{id:`strategy-warroom`,label:`War Room`,icon:(0,x.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M13 10V3L4 14h7v7l9-11h-7z`})}),badge:3},{id:`strategy-calendar`,label:`Calendar & Tasks`,icon:(0,x.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z`})})}];function xe({expanded:e,setExpanded:t,activePage:n,navigate:r}){return(0,x.jsxs)(`aside`,{className:`flex flex-col flex-shrink-0 h-full overflow-hidden`,style:{width:e?240:64,transition:`width 0.28s cubic-bezier(0.4,0,0.2,1)`,background:`#FFFFFF`,backdropFilter:`blur(20px)`,borderRight:`1px solid #CBD5E1`,position:`relative`,zIndex:20},children:[(0,x.jsxs)(`div`,{className:`flex items-center h-16 px-4 flex-shrink-0`,style:{borderBottom:`1px solid #CBD5E1`},children:[(0,x.jsx)(`div`,{className:`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0`,style:{background:`linear-gradient(135deg, #0B2447, #6d28d9)`},children:(0,x.jsx)(`span`,{className:`text-white font-bold text-sm`,style:{fontFamily:`Poppins`},children:`P`})}),e&&(0,x.jsxs)(`span`,{className:`ml-3 text-white font-bold text-lg tracking-wide whitespace-nowrap overflow-hidden`,style:{fontFamily:`Poppins`},children:[`POLI`,(0,x.jsx)(`span`,{style:{color:`#0B2447`},children:`SENCE`})]}),(0,x.jsx)(`button`,{onClick:()=>t(!e),className:`ml-auto w-7 h-7 rounded-lg flex items-center justify-center text-white/40 hover:text-white/80 hover:bg-white/08 transition-all flex-shrink-0`,children:(0,x.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,style:{transform:e?`rotate(180deg)`:`none`,transition:`transform 0.28s`},children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M9 5l7 7-7 7`})})})]}),e&&(0,x.jsxs)(`div`,{className:`mx-3 my-2 px-3 py-2 rounded-xl flex items-center gap-2`,style:{background:`rgba(11,36,71,0.08)`,border:`1px solid rgba(11,36,71,0.15)`},children:[(0,x.jsx)(`div`,{className:`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0`,style:{background:`linear-gradient(135deg, #0B2447, #6d28d9)`},children:`S`}),(0,x.jsxs)(`div`,{className:`min-w-0`,children:[(0,x.jsx)(`div`,{className:`text-white text-xs font-semibold truncate`,children:`Strategy User`}),(0,x.jsx)(`div`,{className:`text-purple-400/60 text-xs`,children:`Premium Access`})]})]}),(0,x.jsx)(`nav`,{className:`flex-1 overflow-y-auto py-2 space-y-0.5 px-2`,children:be.map(t=>{let i=n===t.id;return(0,x.jsxs)(`button`,{onClick:()=>r(t.id),title:e?void 0:t.label,className:`w-full flex items-center gap-3 px-2.5 py-2.5 rounded-xl transition-all relative
                ${i?`text-white`:`text-white/50 hover:text-white/90 hover:bg-white/05`}`,style:i?{background:`rgba(11,36,71,0.15)`,border:`1px solid rgba(11,36,71,0.25)`}:{},children:[(0,x.jsx)(`span`,{className:`flex-shrink-0 ${i?`text-purple-400`:``}`,children:t.icon}),e&&(0,x.jsx)(`span`,{className:`text-sm font-medium whitespace-nowrap overflow-hidden flex-1 text-left`,style:{fontFamily:`Inter`},children:t.label}),e&&t.badge&&(0,x.jsx)(`span`,{className:`ml-auto text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0`,style:{background:`#0B2447`,color:`white`,fontSize:`10px`},children:t.badge}),!e&&t.badge&&(0,x.jsx)(`span`,{className:`absolute top-1 right-1 w-2 h-2 rounded-full`,style:{background:`#0B2447`}})]},t.id)})}),(0,x.jsx)(`div`,{className:`px-2 py-3 flex-shrink-0`,style:{borderTop:`1px solid #CBD5E1`},children:(0,x.jsxs)(`button`,{onClick:()=>r(`home`),className:`w-full flex items-center gap-3 px-2.5 py-2.5 rounded-xl text-white/40 hover:text-red-400 hover:bg-red-400/08 transition-all`,children:[(0,x.jsx)(`svg`,{className:`w-5 h-5 flex-shrink-0`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1`})}),e&&(0,x.jsx)(`span`,{className:`text-sm font-medium`,style:{fontFamily:`Inter`},children:`Logout`})]})})]})}function Se({activePage:e,navigate:t}){
let n=be.find(t=>t.id===e)?.label||`Strategy`;
return(0,x.jsxs)(`header`,{
className:`flex items-center justify-between gap-4 px-6 h-16 flex-shrink-0`,
style:{background:`#FFFFFF`,borderTop:`3px solid #FF9933`,borderBottom:`2px solid #138808`,boxShadow:`0 2px 10px rgba(11,36,71,0.05)`,position:`sticky`,top:0,zIndex:10},
children:[
(0,x.jsxs)(`div`,{
className:`flex items-center gap-3 flex-shrink-0`,
children:[
(0,x.jsx)(`button`,{
type:`button`,
onClick:()=>t(e===`strategy-dashboard`?`home`:`strategy-dashboard`),
className:`px-3 py-1.5 rounded-lg text-xs font-bold transition-all`,
style:{background:`#FFF5EB`,color:`#C2410C`,border:`1px solid #FDBA74`},
children:`← Back`
}),
(0,x.jsxs)(`div`,{
className:`flex items-center gap-2 text-sm`,
children:[
(0,x.jsx)(`span`,{className:`font-medium hidden sm:inline`,style:{color:`#64748B`},children:`Strategy Workspace`}),
(0,x.jsx)(`span`,{className:`hidden sm:inline`,style:{color:`#CBD5E1`},children:`/`}),
(0,x.jsx)(`span`,{className:`font-bold`,style:{color:`#0B2447`,fontFamily:`Poppins`},children:n})
]
})
]
}),
(0,x.jsx)(`div`,{
className:`flex-1 max-w-md mx-4 hidden md:block`,
children:(0,x.jsxs)(`div`,{
className:`relative`,
children:[
(0,x.jsx)(`svg`,{className:`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2`,style:{color:`#64748B`},fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z`})}),
(0,x.jsx)(`input`,{
className:`w-full pl-10 pr-4 py-2 rounded-lg text-xs outline-none`,
style:{background:`#F8FAFC`,border:`1px solid #CBD5E1`,color:`#0B2447`,fontFamily:`Inter`},
placeholder:`Search strategy workspace…`
})
]
})
}),
(0,x.jsxs)(`div`,{
className:`flex items-center gap-3 flex-shrink-0`,
children:[
(0,x.jsx)(`button`,{
onClick:()=>t(`strategy-chatbot`),
className:`w-9 h-9 rounded-lg flex items-center justify-center transition-all`,
style:{background:`#F8FAFC`,border:`1px solid #CBD5E1`,color:`#0B2447`},
title:`AI Strategy Chat`,
children:(0,x.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.8,d:`M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z`})})
}),
(0,x.jsxs)(`div`,{
className:`flex items-center gap-2.5 px-3 py-1.5 rounded-lg`,
style:{background:`#F8FAFC`,border:`1px solid #CBD5E1`},
children:[
(0,x.jsx)(`img`,{src:`https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg`,alt:`GOI`,className:`w-5 h-6 object-contain flex-shrink-0`}),
(0,x.jsxs)(`div`,{
className:`hidden sm:block text-left`,
children:[
(0,x.jsx)(`div`,{className:`text-xs font-bold leading-none`,style:{color:`#0B2447`,fontFamily:`Poppins`},children:`Strategy User`}),
(0,x.jsx)(`div`,{className:`text-xs mt-0.5`,style:{color:`#C2410C`,fontSize:`10px`,fontWeight:700},children:`Policy Intelligence`})
]
})
]
})
]
})
]
})
}
function Ce({navigate:e}){let uCtrl=(0,b.useContext)(GovUIContext),liveComplaints=uCtrl.complaints||Be,t=[{label:`Constituencies`,value:`3`,sub:`Managed`,color:`#0B2447`,icon:`🗺️`},{label:`Active Campaigns`,value:`4`,sub:`Running now`,color:`#D95F00`,icon:`📣`},{label:`Public Sentiment`,value:`+12.4%`,sub:`Positive trend`,color:`#10b981`,icon:`📊`},{label:`AI Recommendations`,value:`7`,sub:`Pending review`,color:`#138808`,icon:`🤖`},{label:`Upcoming Events`,value:`8`,sub:`Next 30 days`,color:`#fbbf24`,icon:`📅`},{label:`Daily Tasks`,value:`5`,sub:`2 urgent`,color:`#f87171`,icon:`✅`}],n=[{label:`Generate Speech`,icon:`🎤`,action:()=>e(`strategy-speech`),color:`#0B2447`},{label:`Campaign Planner`,icon:`📋`,action:()=>e(`strategy-campaigns`),color:`#D95F00`},{label:`Manifesto`,icon:`📖`,action:()=>e(`strategy-manifesto`),color:`#138808`},{label:`War Room`,icon:`⚡`,action:()=>e(`strategy-warroom`),color:`#f87171`}],r=[52,58,54,63,69,65,72,68,74,71,78,75],i=[{text:`Water supply issue spike in Patel Nagar (+34% this week)`,level:`high`,time:`2h ago`},{text:`Campaign engagement up 22% after last Tuesday rally`,level:`good`,time:`5h ago`},{text:`New complaint cluster detected in South Delhi Zone`,level:`medium`,time:`1d ago`},{text:`Manifesto section on employment needs revision`,level:`info`,time:`1d ago`}],a={high:`#f87171`,good:`#10b981`,medium:`#fbbf24`,info:`#138808`};return(0,x.jsxs)(`div`,{className:`p-6 space-y-5`,children:[(0,x.jsxs)(`div`,{className:`flex items-start justify-between flex-wrap gap-3`,children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h2`,{className:`text-white font-bold text-xl`,style:{fontFamily:`Poppins`},children:`Strategy Dashboard`}),(0,x.jsx)(`p`,{className:`text-white/40 text-sm mt-0.5`,children:`AI Political Intelligence — Mock Data · Dev Mode`})]}),(0,x.jsx)(`div`,{className:`flex items-center gap-2 text-xs px-3 py-2 rounded-lg`,style:{background:`rgba(11,36,71,0.08)`,border:`1px solid rgba(11,36,71,0.2)`,color:`rgba(11,36,71,0.8)`},children:`🟣 TODO: Groq API · Future MongoDB Integration`})]}),(0,x.jsx)(`div`,{className:`grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3`,children:t.map(e=>(0,x.jsxs)(`div`,{className:`rounded-xl p-4 transition-all hover:-translate-y-0.5`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid ${e.color}18`},children:[(0,x.jsx)(`div`,{className:`text-2xl mb-2`,children:e.icon}),(0,x.jsx)(`div`,{className:`text-xl font-bold mb-0.5`,style:{color:e.color,fontFamily:`Poppins`},children:e.value}),(0,x.jsx)(`div`,{className:`text-white text-xs font-semibold`,children:e.label}),(0,x.jsx)(`div`,{className:`text-white/35 text-xs mt-0.5`,children:e.sub})]},e.label))}),(0,x.jsx)(`div`,{className:`grid grid-cols-2 md:grid-cols-4 gap-3`,children:n.map(e=>(0,x.jsxs)(`button`,{onClick:e.action,className:`rounded-2xl p-5 flex items-center gap-3 transition-all hover:-translate-y-0.5 hover:shadow-xl text-left`,style:{background:`${e.color}12`,border:`1px solid ${e.color}25`},children:[(0,x.jsx)(`span`,{className:`text-3xl`,children:e.icon}),(0,x.jsx)(`span`,{className:`text-white font-semibold text-sm`,style:{fontFamily:`Poppins`,color:e.color},children:e.label})]},e.label))}),(0,x.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-3 gap-4`,children:[(0,x.jsxs)(`div`,{className:`lg:col-span-2 rounded-2xl p-5`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #CBD5E1`},children:[(0,x.jsxs)(`div`,{className:`flex items-center justify-between mb-4`,children:[(0,x.jsx)(`h3`,{className:`text-white font-semibold`,style:{fontFamily:`Poppins`},children:`Public Sentiment Trend`}),(0,x.jsx)(`span`,{className:`text-xs text-green-400 px-2 py-0.5 rounded-full`,style:{background:`rgba(16,185,129,0.1)`},children:`+12.4% YoY`})]}),(0,x.jsx)(Le,{data:r,labels:[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],color:`#0B2447`})]}),(0,x.jsxs)(`div`,{className:`rounded-2xl p-5`,style:{background:`rgba(11,36,71,0.06)`,border:`1px solid rgba(11,36,71,0.2)`},children:[(0,x.jsxs)(`div`,{className:`flex items-center gap-2 mb-4`,children:[(0,x.jsx)(`span`,{className:`text-xl`,children:`🤖`}),(0,x.jsx)(`h3`,{className:`text-purple-400 font-semibold`,style:{fontFamily:`Poppins`},children:`AI Daily Brief`})]}),(0,x.jsxs)(`div`,{className:`space-y-3 text-sm text-white/65 leading-relaxed`,children:[(0,x.jsxs)(`p`,{children:[`📍 `,(0,x.jsx)(`strong`,{className:`text-white`,children:`Focus today:`}),` Water supply spike in Patel Nagar requires immediate coordination with Jal Board.`]}),(0,x.jsxs)(`p`,{children:[`📣 `,(0,x.jsx)(`strong`,{className:`text-white`,children:`Campaign tip:`}),` Engagement peaks on Tuesday evenings — schedule next rally post 6 PM.`]}),(0,x.jsxs)(`p`,{children:[`⚠️ `,(0,x.jsx)(`strong`,{className:`text-white`,children:`Risk alert:`}),` South Delhi Zone sentiment dipping — proactive outreach recommended within 72 hours.`]})]}),(0,x.jsx)(`button`,{onClick:()=>e(`strategy-chatbot`),className:`w-full mt-4 py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90`,style:{background:`linear-gradient(135deg, #0B2447, #6d28d9)`,color:`white`,fontFamily:`Poppins`},children:`Open Full AI Chat →`}),(0,x.jsx)(`div`,{className:`text-center mt-2 text-purple-400/40 text-xs`,children:`🟣 TODO: Groq API · Future RAG Integration`})]})]}),(0,x.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-3 gap-4`,children:[(0,x.jsxs)(`div`,{className:`lg:col-span-2 rounded-2xl p-5`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #CBD5E1`},children:[(0,x.jsx)(`h3`,{className:`text-white font-semibold mb-4`,style:{fontFamily:`Poppins`},children:`Recent Alerts`}),(0,x.jsx)(`div`,{className:`space-y-3`,children:i.map((e,t)=>(0,x.jsx)(`div`,{className:`flex items-start gap-3 p-3 rounded-xl`,style:{background:`${a[e.level]}08`,borderLeft:`3px solid ${a[e.level]}`},children:(0,x.jsxs)(`div`,{className:`flex-1`,children:[(0,x.jsx)(`p`,{className:`text-white/75 text-sm`,children:e.text}),(0,x.jsx)(`span`,{className:`text-white/30 text-xs`,children:e.time})]})},t))})]}),(0,x.jsxs)(`div`,{className:`rounded-2xl p-5`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #CBD5E1`},children:[(0,x.jsxs)(`div`,{className:`flex items-center justify-between mb-4`,children:[(0,x.jsx)(`h3`,{className:`text-white font-semibold`,style:{fontFamily:`Poppins`},children:`Today's Tasks`}),(0,x.jsx)(`button`,{onClick:()=>e(`strategy-calendar`),className:`text-purple-400 text-xs hover:underline`,children:`View All`})]}),(0,x.jsx)(`div`,{className:`space-y-2.5`,children:ve.slice(0,5).map(e=>(0,x.jsxs)(`div`,{className:`flex items-start gap-2.5`,children:[(0,x.jsx)(`div`,{className:`w-4 h-4 rounded mt-0.5 flex-shrink-0 flex items-center justify-center`,style:e.done?{background:`#10b981`}:{border:`1.5px solid rgba(255,255,255,0.2)`},children:e.done&&(0,x.jsx)(`svg`,{className:`w-2.5 h-2.5 text-white`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:3,d:`M5 13l4 4L19 7`})})}),(0,x.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,x.jsx)(`div`,{className:`text-xs ${e.done?`line-through text-white/30`:`text-white/75`}`,children:e.title}),(0,x.jsxs)(`div`,{className:`flex items-center gap-2 mt-0.5`,children:[(0,x.jsx)(`span`,{className:`text-white/25 text-xs`,children:e.due}),(0,x.jsx)(`span`,{className:`text-xs px-1.5 py-0.5 rounded`,style:{background:e.priority===`Urgent`?`rgba(248,113,113,0.1)`:`rgba(11,36,71,0.1)`,color:e.priority===`Urgent`?`#f87171`:`#0B2447`,fontSize:`10px`},children:e.priority})]})]})]},e.id))})]})]})]})}function we(){
let uCtrl=(0,b.useContext)(GovUIContext),
liveComplaints=uCtrl.complaints||Be,
liveAdded=liveComplaints.filter(x=>x.isLive),
[e,t]=(0,b.useState)(null),
n=ge,
zoneCoords=[
{name:`Connaught Place`,lat:28.6315,lng:77.2167,bbox:`77.195,28.615,77.238,28.648`,score:84,risk:`Low`,voters:`98,420`,ward:`NDMC Zone 1`},
{name:`Karol Bagh`,lat:28.6514,lng:77.1907,bbox:`77.170,28.635,77.210,28.668`,score:71,risk:`Medium`,voters:`142,800`,ward:`Central Zone 2`},
{name:`Patel Nagar`,lat:28.6550,lng:77.1645,bbox:`77.145,28.640,77.185,28.670`,score:65,risk:`High`,voters:`187,300`,ward:`West Zone 3`},
{name:`Rajendra Nagar`,lat:28.6394,lng:77.1828,bbox:`77.165,28.625,77.200,28.655`,score:79,risk:`Low`,voters:`112,450`,ward:`Central Ridge Zone 4`},
{name:`South Delhi Zone`,lat:28.5494,lng:77.2001,bbox:`77.160,28.520,77.240,28.580`,score:58,risk:`Critical`,voters:`223,100`,ward:`South Zone 5`}
],
i={Critical:`#DC2626`,High:`#D95F00`,Medium:`#D97706`,Low:`#138808`},
activeZone=e!==null?zoneCoords[e]:null,
mapBbox=activeZone?activeZone.bbox:`77.130,28.520,77.260,28.680`,
mapLat=activeZone?activeZone.lat:28.6139,
mapLng=activeZone?activeZone.lng:77.2090,
mapUrl=`https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(mapBbox)}&layer=mapnik&marker=${mapLat}%2C${mapLng}`,
dynamicIssues=n.issues.map(iss=>{
let extra=liveAdded.filter(c=>
  (iss.label===`Water Supply`&&c.category===`Water Supply`)||
  (iss.label===`Road Damage`&&(c.category===`Infrastructure`||c.category===`Roads & Transport`))||
  (iss.label===`Electricity`&&c.category===`Electricity`)||
  (iss.label===`Sanitation`&&(c.category===`Sanitation`||c.category===`Environment`||c.category===`Municipal Services`))||
  (iss.label===`Health`&&(c.category===`Public Health`||c.category===`Health`||c.category===`Education`||c.category===`Public Safety`))
).length;
return {...iss,count:iss.count+extra};
});
return(0,x.jsxs)(`div`,{
className:`p-6 space-y-5`,
children:[
(0,x.jsxs)(`div`,{
className:`flex items-center justify-between flex-wrap gap-3`,
children:[
(0,x.jsxs)(`div`,{
children:[
(0,x.jsx)(`div`,{style:{fontSize:`11px`,fontWeight:800,color:`#138808`,letterSpacing:`0.6px`},children:`● LIVE SYNCED WITH CITIZEN & ADMIN PORTALS · ELECTION COMMISSION & GIS DEMOGRAPHICS`}),
(0,x.jsx)(`h2`,{className:`text-white font-bold text-xl`,style:{fontFamily:`Poppins`},children:`Constituency Intelligence & Zonal Map`}),
(0,x.jsxs)(`p`,{className:`text-white/40 text-sm mt-0.5`,children:[n.name,` · `,liveComplaints.length,` Live Constituency Grievances Tracked`]})
]
}),
(0,x.jsx)(`button`,{
type:`button`,
onClick:()=>t(null),
className:`px-3.5 py-2 rounded-lg text-xs font-bold`,
style:{background:e===null?`#0B2447`:`#FFFFFF`,color:e===null?`#FFFFFF`:`#0B2447`,border:`1.5px solid #0B2447`,cursor:`pointer`},
children:`🗺️ Full Constituency Map (All 5 Zones)`
})
]
}),
(0,x.jsxs)(`div`,{
className:`rounded-2xl p-5 flex flex-wrap gap-6 items-center`,
style:{background:`#FFFFFF`,border:`1px solid #CBD5E1`,borderTop:`4px solid #FF9933`,borderBottom:`2px solid #138808`},
children:[
[[`Population`,n.population],[`Registered Voters`,n.voters],[`Geographical Area`,n.area],[`State / UT`,n.state],[`Live Grievances`,String(liveComplaints.length)]].map(([lbl,val])=>(0,x.jsxs)(`div`,{
children:[
(0,x.jsx)(`div`,{className:`text-white/35 text-xs mb-1 font-semibold`,children:lbl}),
(0,x.jsx)(`div`,{className:`text-white font-bold text-sm`,style:{fontFamily:`Poppins`},children:val})
]
},lbl)),
(0,x.jsxs)(`div`,{
className:`ml-auto flex items-center gap-3`,
children:[
(0,x.jsxs)(`div`,{
children:[
(0,x.jsx)(`div`,{className:`text-white/35 text-xs mb-1 font-semibold`,children:`Dev. Index`}),
(0,x.jsxs)(`div`,{className:`text-2xl font-bold`,style:{color:`#138808`,fontFamily:`Poppins`},children:[n.devIndex,`/100`]})
]
}),
(0,x.jsx)(Re,{pct:n.devIndex,color:`#138808`,size:72})
]
})
]
}),
(0,x.jsxs)(`div`,{
style:{padding:`18px 20px`,borderRadius:`14px`,background:`#FFFFFF`,border:`1px solid #CBD5E1`,borderLeft:`5px solid #138808`,boxShadow:`0 3px 12px rgba(11,36,71,0.05)`},
children:[
(0,x.jsxs)(`div`,{
style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,flexWrap:`wrap`,gap:`10px`,marginBottom:`12px`},
children:[
(0,x.jsxs)(`div`,{
children:[
(0,x.jsx)(`div`,{style:{fontSize:`10.5px`,fontWeight:800,color:`#138808`,textTransform:`uppercase`,letterSpacing:`0.6px`},children:`● REAL-TIME CITIZEN-TO-ADMIN-TO-STRATEGY DATA STREAM`}),
(0,x.jsx)(`h3`,{style:{fontSize:`15px`,fontWeight:700,color:`#0B2447`,fontFamily:`Poppins`,margin:0},children:`Live Constituency Grievances & Admin Operations Status`})
]
}),
(0,x.jsxs)(`span`,{style:{fontSize:`11.5px`,fontWeight:700,color:`#C2410C`,background:`#FFF5EB`,padding:`4px 10px`,borderRadius:`999px`,border:`1px solid #FDBA74`},children:[liveComplaints.filter(x=>x.status===`Resolved`).length,` Resolved · `,liveComplaints.filter(x=>x.status!==`Resolved`).length,` Active in Admin Queue`]})
]
}),
(0,x.jsx)(`div`,{
style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(250px, 1fr))`,gap:`10px`},
children:liveComplaints.slice(0,4).map(item=>(0,x.jsxs)(`div`,{
style:{padding:`12px 14px`,borderRadius:`10px`,background:item.isLive?`#F2FAF3`:`#F8FAFC`,border:item.isLive?`1.5px solid #138808`:`1px solid #E2E8F0`},
children:[
(0,x.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`6px`},children:[
(0,x.jsx)(`span`,{style:{fontSize:`12px`,fontWeight:800,color:`#0B2447`,fontFamily:`Poppins`},children:item.id}),
(0,x.jsx)(`span`,{style:{fontSize:`10.5px`,fontWeight:800,padding:`2px 8px`,borderRadius:`999px`,background:item.status===`Resolved`?`#EAF7EC`:`#FFF5EB`,color:item.status===`Resolved`?`#138808`:`#C2410C`,border:`1px solid ${item.status===`Resolved`?`#A8DFB2`:`#FDBA74`}`},children:item.status})
]}),
(0,x.jsxs)(`div`,{style:{fontSize:`12.5px`,fontWeight:700,color:`#C2410C`,marginTop:`4px`},children:[item.category,` · `,item.dept]}),
(0,x.jsxs)(`div`,{style:{fontSize:`11.5px`,color:`#334155`,marginTop:`2px`},children:[item.citizen,` · 📍 `,item.location]}),
(0,x.jsx)(`div`,{style:{fontSize:`11px`,color:`#64748B`,marginTop:`4px`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`},children:item.desc})
]
},item.id))
})
]
}),
(0,x.jsxs)(`div`,{
className:`grid grid-cols-1 lg:grid-cols-3 gap-4`,
children:[
(0,x.jsxs)(`div`,{
className:`lg:col-span-2 rounded-2xl overflow-hidden`,
style:{background:`#FFFFFF`,border:`1px solid #CBD5E1`,borderTop:`4px solid #FF9933`,borderBottom:`3px solid #138808`,boxShadow:`0 6px 20px rgba(11,36,71,0.08)`},
children:[
(0,x.jsxs)(`div`,{
className:`px-5 py-3 flex items-center justify-between flex-wrap gap-2`,
style:{background:`#F8FAFC`,borderBottom:`1px solid #CBD5E1`},
children:[
(0,x.jsxs)(`div`,{
className:`flex items-center gap-2`,
children:[
(0,x.jsx)(`span`,{style:{width:`8px`,height:`8px`,borderRadius:`50%`,background:`#138808`,display:`inline-block`}}),
(0,x.jsx)(`h3`,{className:`font-bold text-sm`,style:{color:`#0B2447`,fontFamily:`Poppins`},children:activeZone?`Zonal Map: ${activeZone.name} (${activeZone.ward})`:`Constituency Zonal Map — ${n.name}`})
]
}),
(0,x.jsx)(`span`,{style:{fontSize:`11px`,fontWeight:700,color:`#475569`},children:`📍 ${mapLat.toFixed(4)}° N, ${mapLng.toFixed(4)}° E · Click any zone below to zoom`})
]
}),
(0,x.jsx)(`div`,{
style:{position:`relative`,height:`340px`,width:`100%`,background:`#E2E8F0`},
children:(0,x.jsx)(`iframe`,{
key:activeZone?activeZone.name:`all-zones`,
title:`Constituency Zonal Map — ${n.name}`,
src:mapUrl,
style:{width:`100%`,height:`340px`,border:`0`,display:`block`},
loading:`lazy`
})
}),
(0,x.jsxs)(`div`,{
style:{padding:`12px 16px`,background:`#F8FAFC`,borderTop:`1px solid #CBD5E1`,display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:`8px`},
children:[
(0,x.jsx)(`span`,{style:{fontSize:`11px`,fontWeight:800,color:`#0B2447`,textTransform:`uppercase`,marginRight:`4px`},children:`Constituency Zones:`}),
zoneCoords.map((z,idx)=>(0,x.jsxs)(`button`,{
type:`button`,
onClick:()=>t(e===idx?null:idx),
style:{display:`inline-flex`,alignItems:`center`,gap:`6px`,padding:`5px 11px`,borderRadius:`8px`,fontSize:`11.5px`,fontWeight:700,cursor:`pointer`,background:e===idx?`#0B2447`:`#FFFFFF`,color:e===idx?`#FFFFFF`:`#0B2447`,border:`1.5px solid ${e===idx?`#0B2447`:i[z.risk]}`},
children:[
(0,x.jsx)(`span`,{style:{width:`7px`,height:`7px`,borderRadius:`50%`,background:i[z.risk],display:`inline-block`}}),
`${z.name} (${z.score})`
]
},z.name))
]
})
]
}),
(0,x.jsxs)(`div`,{
className:`space-y-3`,
children:[
(0,x.jsxs)(`div`,{
className:`rounded-2xl p-4`,
style:{background:`#FFFFFF`,border:`1px solid #CBD5E1`},
children:[
(0,x.jsx)(`h3`,{className:`text-white font-semibold text-sm mb-3`,style:{fontFamily:`Poppins`},children:`Zones Overview (Click to Locate)`}),
(0,x.jsx)(`div`,{
className:`space-y-2`,
children:zoneCoords.map((z,r)=>(0,x.jsxs)(`button`,{
onClick:()=>t(e===r?null:r),
className:`w-full flex items-center gap-3 p-2.5 rounded-xl text-left transition-all`,
style:e===r?{background:`#FFF5EB`,border:`1.5px solid ${i[z.risk]}`}:{background:`#F8FAFC`,border:`1px solid #E2E8F0`},
children:[
(0,x.jsx)(`div`,{className:`w-2.5 h-2.5 rounded-full flex-shrink-0`,style:{background:i[z.risk]}}),
(0,x.jsxs)(`div`,{
className:`flex-1 min-w-0`,
children:[
(0,x.jsx)(`div`,{className:`text-xs font-bold truncate`,style:{color:`#0B2447`},children:z.name}),
(0,x.jsx)(`div`,{style:{fontSize:`10.5px`,color:`#64748B`},children:`${z.ward} · ${z.voters} voters`})
]
}),
(0,x.jsx)(`span`,{className:`text-xs font-bold`,style:{color:i[z.risk]},children:`${z.score}/100`}),
(0,x.jsx)(`span`,{className:`text-xs px-2 py-0.5 rounded font-bold`,style:{background:`${i[z.risk]}15`,color:i[z.risk],fontSize:`10px`},children:z.risk})
]
},z.name))
})
]
}),
activeZone&&(0,x.jsxs)(`div`,{
className:`rounded-2xl p-4`,
style:{background:`#FFF9F2`,border:`1.5px solid #FDBA74`},
children:[
(0,x.jsx)(`div`,{style:{fontSize:`10.5px`,fontWeight:800,color:`#C2410C`,textTransform:`uppercase`},children:`Selected Zone Intelligence`}),
(0,x.jsx)(`h3`,{className:`font-bold text-base mt-0.5 mb-3`,style:{color:`#0B2447`,fontFamily:`Poppins`},children:activeZone.name}),
[[`Zonal Ward`,activeZone.ward],[`Registered Voters`,activeZone.voters],[`Development Score`,`${activeZone.score}/100`],[`Grievance Risk Level`,activeZone.risk],[`GPS Coordinates`,`${activeZone.lat.toFixed(4)}° N, ${activeZone.lng.toFixed(4)}° E`]].map(([lbl,val])=>(0,x.jsxs)(`div`,{
className:`flex justify-between text-xs mb-2`,
children:[
(0,x.jsx)(`span`,{style:{color:`#475569`,fontWeight:600},children:lbl}),
(0,x.jsx)(`span`,{style:{color:`#0B2447`,fontWeight:700},children:val})
]
},lbl))
]
})
]
})
]
}),
(0,x.jsxs)(`div`,{
className:`grid grid-cols-1 lg:grid-cols-2 gap-4`,
children:[
(0,x.jsxs)(`div`,{
className:`rounded-2xl p-5`,
style:{background:`#FFFFFF`,border:`1px solid #CBD5E1`},
children:[
(0,x.jsx)(`h3`,{className:`text-white font-semibold mb-4`,style:{fontFamily:`Poppins`},children:`Major Constituency Issues (Live Updated)`}),
(0,x.jsx)(`div`,{
className:`space-y-3`,
children:dynamicIssues.map(e=>(0,x.jsxs)(`div`,{
children:[
(0,x.jsxs)(`div`,{className:`flex justify-between text-xs mb-1.5`,children:[(0,x.jsx)(`span`,{className:`text-white/65 font-semibold`,children:e.label}),(0,x.jsxs)(`span`,{className:`font-bold`,style:{color:e.color},children:[e.count,` (`,e.pct,`%)`]})]}),
(0,x.jsx)(`div`,{className:`h-2 rounded-full`,style:{background:`#E2E8F0`},children:(0,x.jsx)(`div`,{className:`h-full rounded-full`,style:{width:`${e.pct}%`,background:e.color}})})
]
},e.label))
})
]
}),
(0,x.jsxs)(`div`,{
className:`rounded-2xl p-5`,
style:{background:`#FFFFFF`,border:`1px solid #CBD5E1`},
children:[
(0,x.jsx)(`h3`,{className:`text-white font-semibold mb-4`,style:{fontFamily:`Poppins`},children:`Constituency Complaint Trend 2026`}),
(0,x.jsx)(Le,{data:n.trendData,labels:[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],color:`#0B2447`})
]
})
]
})
]
})
}
function Te({text:e}){let t=e.split(/(\*\*.*?\*\*|__.*?__|`[^`]+`|\*[^*\n]+\*)/g);return(0,x.jsx)(x.Fragment,{children:t.map((e,t)=>e.startsWith(`**`)&&e.endsWith(`**`)||e.startsWith(`__`)&&e.endsWith(`__`)?(0,x.jsx)(`strong`,{className:`font-semibold text-white`,children:e.slice(2,-2)},t):e.startsWith("`")&&e.endsWith("`")?(0,x.jsx)(`code`,{className:`rounded px-1.5 py-0.5 text-violet-200 bg-black/25 font-mono text-[0.92em]`,children:e.slice(1,-1)},t):e.startsWith(`*`)&&e.endsWith(`*`)?(0,x.jsx)(`em`,{children:e.slice(1,-1)},t):(0,x.jsx)(b.Fragment,{children:e},t))})}function Ee({text:e}){let t=e.replace(/\r\n?/g,`
`).split(`
`),n=[],r=[],i=[],a=()=>{if(!r.length)return;let e=r.join(` `).trim();e&&n.push((0,x.jsx)(`p`,{className:`my-2 first:mt-0 last:mb-0`,children:(0,x.jsx)(Te,{text:e})},`p-${n.length}`)),r=[]},o=()=>{if(!i.length)return;let e=i[0].ordered,t=i,r=e?`ol`:`ul`;n.push((0,x.jsx)(r,{className:`${e?`list-decimal`:`list-disc`} my-2 space-y-1 pl-5 marker:text-violet-300`,children:t.map((e,t)=>(0,x.jsx)(`li`,{className:`pl-1`,children:(0,x.jsx)(Te,{text:e.text})},t))},`list-${n.length}`)),i=[]},s=e=>/^\s*\|.*\|\s*$/.test(e),c=e=>e.trim().replace(/^\|/,``).replace(/\|$/,``).split(`|`).map(e=>e.trim()),l=e=>s(e)&&c(e).every(e=>/^:?-{3,}:?$/.test(e.replace(/\s/g,``)));for(let e=0;e<t.length;e++){let u=t[e].trim();if(!u){a(),o();continue}if(/^---+$/.test(u)||/^\*\*\*+$/.test(u)||/^___+$/.test(u)){a(),o(),n.push((0,x.jsx)(`hr`,{className:`my-4 border-white/15`},`hr-${n.length}`));continue}if(s(u)&&e+1<t.length&&l(t[e+1].trim())){a(),o();let r=c(u);e+=2;let i=[];for(;e<t.length&&s(t[e].trim());)i.push(c(t[e].trim())),e++;e--,n.push((0,x.jsx)(`div`,{className:`my-3 max-w-full overflow-x-auto rounded-lg border border-white/10`,children:(0,x.jsxs)(`table`,{className:`w-full border-collapse text-left text-xs sm:text-sm`,children:[(0,x.jsx)(`thead`,{children:(0,x.jsx)(`tr`,{className:`bg-violet-500/15`,children:r.map((e,t)=>(0,x.jsx)(`th`,{className:`border-b border-white/10 px-3 py-2 font-semibold text-violet-100`,children:(0,x.jsx)(Te,{text:e})},t))})}),(0,x.jsx)(`tbody`,{children:i.map((e,t)=>(0,x.jsx)(`tr`,{className:`odd:bg-white/[0.025]`,children:r.map((t,n)=>(0,x.jsx)(`td`,{className:`border-b border-white/[0.06] px-3 py-2 align-top text-white/80`,children:e[n]?(0,x.jsx)(Te,{text:e[n]}):`—`},n))},t))})]})},`table-${n.length}`));continue}let d=u.match(/^(#{1,6})\s+(.+)$/);if(d){a(),o();let e=d[1].length<=2?`mt-4 mb-2 text-base sm:text-lg font-bold text-white`:`mt-3 mb-1.5 text-sm sm:text-base font-semibold text-violet-100`;n.push((0,x.jsx)(`div`,{className:e,children:(0,x.jsx)(Te,{text:d[2].replace(/\s+#+$/,``)})},`h-${n.length}`));continue}let f=u.match(/^(?:[-*+]\s+|\d+[.)]\s+)(.+)$/);if(f){a();let e=/^\d+[.)]\s+/.test(u);i.length&&i[0].ordered!==e&&o(),i.push({text:f[1],ordered:e});continue}o(),r.push(u)}return a(),o(),(0,x.jsx)(`div`,{className:`chat-markdown break-words [overflow-wrap:anywhere]`,children:n})}function De(){let e=()=>new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`}),[t,n]=(0,b.useState)([{role:`ai`,text:`Welcome to your AI Strategy Assistant, powered by POLISENCE Intelligence. I can help you generate speeches, plan campaigns, analyse constituency data, and build your political strategy. What would you like to work on today?`,time:`Just now`}]),[r,i]=(0,b.useState)(``),[a,o]=(0,b.useState)(!1),s=(0,b.useRef)(null),c=[{label:`Generate Speech`,q:`Generate a 5-minute rally speech focused on water supply issues in my constituency.`},{label:`Generate Manifesto Section`,q:`Write a manifesto section on Employment and Youth Development.`},{label:`Plan Campaign`,q:`Create a 30-day campaign plan for the upcoming monsoon relief outreach.`},{label:`Summarize Constituency`,q:`Give me a full intelligence summary of New Delhi constituency.`},{label:`Daily Political Brief`,q:`Provide today's political intelligence brief with key action items.`},{label:`Generate Debate Points`,q:`Generate strong debate points on infrastructure development for the upcoming session.`},{label:`Press Conference Notes`,q:`Prepare press conference talking points on the water supply crisis.`},{label:`Voter Sentiment Analysis`,q:`Analyse current voter sentiment in South Delhi Zone and suggest response strategy.`}],l=async r=>{let c=r.trim();if(!c||a)return;let l=t.filter((e,t)=>t!==0||e.role!==`ai`).map(e=>({role:e.role===`ai`?`assistant`:`user`,content:e.text}));n(t=>[...t,{role:`user`,text:c,time:e()}]),i(``),o(!0);try{let t=new AbortController,r=window.setTimeout(()=>t.abort(),9e4),i;try{i=await fetch(`https://polisense-ai-strategy-chat.onrender.com/api/chat`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({message:c,history:l}),signal:t.signal})}finally{window.clearTimeout(r)}let a=await i.json().catch(()=>({}));if(!i.ok){let e=typeof a?.detail==`string`?a.detail:typeof a?.message==`string`?a.message:`Server returned HTTP ${i.status}`;throw Error(e)}let o=a?.reply??a?.answer??a?.response??a?.message;if(typeof o!=`string`||!o.trim())throw Error(`The chatbot API returned an empty or unexpected response.`);n(t=>[...t,{role:`ai`,text:o.trim(),time:e()}])}catch(t){let r=t instanceof Error&&t.name===`AbortError`?`The chatbot is taking too long to respond. Please try again.`:t instanceof Error?t.message:`Unable to connect to the chatbot right now. Please try again.`;n(t=>[...t,{role:`ai`,text:`I couldn't get a response from the Strategy Chatbot API. ${r}\n\nPlease try again in a moment. If this continues, check the backend health endpoint and Render logs.`,time:e()}])}finally{o(!1),window.setTimeout(()=>s.current?.scrollIntoView({behavior:`smooth`}),50)}};return(0,x.jsxs)(`div`,{className:`space-y-4`,children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h2`,{className:`text-white font-bold text-xl`,style:{fontFamily:`Poppins`},children:`AI Strategy Chat`}),(0,x.jsx)(`p`,{className:`text-white/40 text-sm mt-0.5`,children:`Political intelligence powered by the POLISENSE AI Strategy Chatbot API`})]}),(0,x.jsx)(nt,{tags:[`Live Backend API`,`BM25 Knowledge Retrieval`,`Groq LLM`]}),(0,x.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-4 gap-4`,children:[(0,x.jsxs)(`div`,{className:`lg:col-span-3 rounded-2xl flex flex-col overflow-hidden`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid rgba(11,36,71,0.15)`,height:560},children:[(0,x.jsxs)(`div`,{className:`flex-1 overflow-y-auto p-5 space-y-5`,children:[t.map((e,t)=>(0,x.jsxs)(`div`,{className:`flex gap-3 ${e.role===`user`?`flex-row-reverse`:``}`,children:[(0,x.jsx)(`div`,{className:`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-base`,style:e.role===`ai`?{background:`linear-gradient(135deg, #0B2447, #6d28d9)`}:{background:`rgba(217,95,0,0.2)`},children:e.role===`ai`?`🤖`:`👤`}),(0,x.jsxs)(`div`,{className:`max-w-[78%] flex flex-col gap-1 ${e.role===`user`?`items-end`:``}`,children:[(0,x.jsx)(`div`,{className:`rounded-2xl px-4 py-3 text-sm leading-relaxed min-w-0`,style:e.role===`ai`?{background:`rgba(11,36,71,0.1)`,border:`1px solid rgba(11,36,71,0.2)`,color:`#0B2447`}:{background:`#FFF3E6`,border:`1px solid #FDBA74`,color:`#0B2447`},children:e.role===`ai`?(0,x.jsx)(Ee,{text:e.text}):(0,x.jsx)(`div`,{className:`whitespace-pre-wrap break-words`,children:e.text})}),(0,x.jsx)(`span`,{className:`text-white/25 text-xs px-1`,children:e.time})]})]},t)),a&&(0,x.jsxs)(`div`,{className:`flex gap-3`,children:[(0,x.jsx)(`div`,{className:`w-9 h-9 rounded-xl flex items-center justify-center text-base`,style:{background:`linear-gradient(135deg, #0B2447, #6d28d9)`},children:`🤖`}),(0,x.jsx)(`div`,{className:`rounded-2xl px-5 py-4`,style:{background:`rgba(11,36,71,0.1)`,border:`1px solid rgba(11,36,71,0.2)`},children:(0,x.jsx)(`div`,{className:`flex gap-1.5`,children:[0,1,2].map(e=>(0,x.jsx)(`div`,{className:`w-2 h-2 rounded-full typing-dot`,style:{background:`#0B2447`,animationDelay:`${e*.2}s`}},e))})})]}),(0,x.jsx)(`div`,{ref:s})]}),(0,x.jsxs)(`div`,{className:`p-4 flex gap-3`,style:{borderTop:`1px solid rgba(11,36,71,0.1)`},children:[(0,x.jsx)(`input`,{className:`input-field flex-1 py-2.5 text-sm`,style:{borderColor:`rgba(11,36,71,0.2)`},placeholder:`Ask AI to generate speeches, plan campaigns, analyse data…`,value:r,onChange:e=>i(e.target.value),onKeyDown:e=>e.key===`Enter`&&l(r)}),(0,x.jsx)(`button`,{className:`px-5 py-2.5 rounded-xl font-bold text-sm transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed`,style:{background:`linear-gradient(135deg, #0B2447, #6d28d9)`,color:`white`,fontFamily:`Poppins`},onClick:()=>l(r),disabled:a||!r.trim(),children:`Send`})]})]}),(0,x.jsxs)(`div`,{className:`rounded-2xl p-4`,style:{background:`rgba(11,36,71,0.06)`,border:`1px solid rgba(11,36,71,0.15)`},children:[(0,x.jsx)(`h3`,{className:`text-white font-semibold text-sm mb-3`,style:{fontFamily:`Poppins`},children:`Suggested Prompts`}),(0,x.jsx)(`div`,{className:`space-y-2`,children:c.map(e=>(0,x.jsx)(`button`,{onClick:()=>l(e.q),className:`w-full text-left text-xs px-3 py-2.5 rounded-xl transition-all hover:bg-white/08 text-white/60 hover:text-white leading-relaxed`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #CBD5E1`},children:e.label},e.label))})]})]})]})}function Oe(){let e=S(),[t,n]=(0,b.useState)(`General Public`),[r,i]=(0,b.useState)(`Hindi`),[a,o]=(0,b.useState)(`Rally Speech`),[s,c]=(0,b.useState)(`5 minutes`),[l,u]=(0,b.useState)(``),[d,f]=(0,b.useState)(!1),[p,m]=(0,b.useState)(``),[h,g]=(0,b.useState)(``);return(0,x.jsxs)(`div`,{className:`space-y-5`,children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h2`,{className:`text-white font-bold text-xl`,style:{fontFamily:`Poppins`},children:`AI Speech Generator`}),(0,x.jsx)(`p`,{className:`text-white/40 text-sm mt-0.5`,children:`Connected to POLISENSE AI Speech API`})]}),(0,x.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-3 gap-5`,children:[(0,x.jsxs)(`div`,{className:`rounded-2xl p-5 space-y-4`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #CBD5E1`},children:[(0,x.jsx)(`h3`,{className:`text-white font-semibold`,style:{fontFamily:`Poppins`},children:`Speech Settings`}),[{label:`Template`,value:a,set:o,options:[`Rally Speech`,`Press Conference`,`Parliament Session`,`Town Hall`,`Inauguration`,`Independence Day`]},{label:`Audience`,value:t,set:n,options:[`General Public`,`Youth`,`Women`,`Farmers`,`Traders`,`Media`]},{label:`Language`,value:r,set:i,options:[`Hindi`,`English`,`Hindi + English`,`Urdu`,`Bengali`,`Tamil`,`Telugu`,`Marathi`,`Gujarati`,`Punjabi`,`Kannada`,`Malayalam`,`Odia`]},{label:`Duration`,value:s,set:c,options:[`2 minutes`,`5 minutes`,`10 minutes`,`15 minutes`,`30 minutes`]}].map(e=>(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`label`,{className:`block text-white/50 text-xs mb-1.5 font-semibold uppercase tracking-wider`,children:e.label}),(0,x.jsx)(`select`,{className:`input-field py-2.5 text-sm`,value:e.value,onChange:t=>e.set(t.target.value),style:{appearance:`none`},children:e.options.map(e=>(0,x.jsx)(`option`,{value:e,style:{background:`#FFFFFF`},children:e},e))})]},e.label)),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`label`,{className:`block text-white/50 text-xs mb-1.5 font-semibold uppercase tracking-wider`,children:`Key Topics / Speech Details`}),(0,x.jsx)(`textarea`,{value:l,onChange:e=>u(e.target.value),className:`input-field text-sm resize-none`,rows:4,placeholder:`Water supply, road repair, youth employment…`})]}),h&&(0,x.jsx)(`p`,{role:`alert`,className:`text-red-300 text-xs`,children:h}),(0,x.jsx)(`button`,{disabled:d,className:`w-full py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90 disabled:opacity-50`,style:{background:`linear-gradient(135deg, #0B2447, #6d28d9)`,color:`white`,fontFamily:`Poppins`},onClick:async()=>{if(!l.trim()){g(`Please enter the speech topic or key points first.`);return}f(!0),m(``),g(``);let n=Number.parseInt(s,10)||3,i={topic:l.trim(),language:r,audience:t,tone:a===`Rally Speech`?`Persuasive`:`Formal`,duration_minutes:n,key_points:l.split(/[\n,]+/).map(e=>e.trim()).filter(Boolean)};try{let t=await fetch(`${`https://polisense-ai-speech-generator.onrender.com`.replace(/\/$/,``)}/api/speech/generate`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(i)}),n=await t.json().catch(()=>({}));if(!t.ok){let e=typeof n.detail==`string`?n.detail:n.message;throw Error(e||`Speech API failed (${t.status}). Check the request fields in /docs.`)}let r=typeof n==`string`?n:n.speech||n.generated_speech||n.text||n.content||n.script||n.result||n.output||n.message;if(!r)throw Error(`Speech API responded successfully, but the response did not contain a recognized speech text field.`);m(String(r)),e({type:`success`,title:`Speech Generated`,msg:`Speech received from the backend API.`})}catch(t){let n=t instanceof Error?t.message:``,r=/failed to fetch|networkerror|load failed/i.test(n)?`Could not reach the Speech API from this browser. The endpoint is configured correctly; check the backend CORS settings for this frontend origin (localhost:8443) and confirm the Render service is available.`:n||`Could not connect to the Speech API. Check backend status and CORS.`;g(r),e({type:`warn`,title:`Speech API Error`,msg:r})}finally{f(!1)}},children:d?`Generating from AI backend…`:`Generate Speech`})]}),(0,x.jsxs)(`div`,{className:`lg:col-span-2 rounded-2xl overflow-hidden flex flex-col`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #CBD5E1`},children:[(0,x.jsxs)(`div`,{className:`flex items-center justify-between flex-wrap gap-2 px-5 py-3`,style:{borderBottom:`1px solid #CBD5E1`},children:[(0,x.jsx)(`h3`,{className:`text-white font-semibold text-sm`,children:p?`${a} — ${r}`:`Generated speech will appear here`}),p&&(0,x.jsxs)(`div`,{className:`flex gap-2`,children:[(0,x.jsx)(`button`,{className:`text-xs px-3 py-1.5 rounded-lg text-white/70`,style:{background:`#F1F5F9`},onClick:()=>{navigator.clipboard?.writeText(p),e({type:`success`,title:`Copied`,msg:`Speech copied to clipboard.`})},children:`Copy`}),(0,x.jsx)(`button`,{className:`text-xs px-3 py-1.5 rounded-lg text-white/70`,style:{background:`#F1F5F9`},onClick:()=>{let e=new Blob([p],{type:`text/plain;charset=utf-8`}),t=URL.createObjectURL(e),n=document.createElement(`a`);n.href=t,n.download=`polisense-speech.txt`,n.click(),URL.revokeObjectURL(t)},children:`Download TXT`}),(0,x.jsx)(`button`,{className:`text-xs px-3 py-1.5 rounded-lg text-white/70`,style:{background:`#F1F5F9`},onClick:()=>window.print(),children:`Print`})]})]}),(0,x.jsx)(`div`,{className:`flex-1 p-5 overflow-y-auto`,style:{minHeight:380},children:d?(0,x.jsx)(`p`,{className:`text-purple-300 text-sm`,children:`Waiting for speech backend…`}):p?(0,x.jsx)(`div`,{className:`text-white/80 text-sm leading-loose`,style:{fontFamily:`Inter`},children:(0,x.jsx)(Ee,{text:p})}):(0,x.jsx)(`div`,{className:`text-center py-20`,children:(0,x.jsx)(`p`,{className:`text-white/30 text-sm`,children:`Enter speech details and click Generate Speech.`})})}),p&&(0,x.jsxs)(`div`,{className:`px-5 py-3 text-white/30 text-xs`,style:{borderTop:`1px solid #CBD5E1`},children:[p.trim().split(/\s+/).length,` words · `,s]})]})]})]})}function ke(){let[e,t]=(0,b.useState)(`board`),[n,r]=(0,b.useState)(ve),i={Active:`#10b981`,Planned:`#0B2447`,Completed:`#138808`,Paused:`#fbbf24`},a={Urgent:`#f87171`,High:`#D95F00`,Medium:`#fbbf24`,Low:`#10b981`};return(0,x.jsxs)(`div`,{className:`p-6 space-y-5`,children:[(0,x.jsxs)(`div`,{className:`flex items-center justify-between flex-wrap gap-3`,children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h2`,{className:`text-white font-bold text-xl`,style:{fontFamily:`Poppins`},children:`Campaign Planner`}),(0,x.jsx)(`p`,{className:`text-white/40 text-sm mt-0.5`,children:`Mock Data · Future CRM Integration`})]}),(0,x.jsx)(`button`,{className:`btn-orange text-sm py-2 px-4 flex items-center gap-2`,onClick:()=>alert(`Future: Campaign Creation API`),children:`+ New Campaign`})]}),(0,x.jsx)(`div`,{className:`flex items-center gap-2 text-xs px-3 py-2 rounded-lg w-fit`,style:{background:`rgba(217,95,0,0.07)`,border:`1px solid rgba(217,95,0,0.18)`,color:`rgba(217,95,0,0.8)`},children:`🔴 TODO: Future Backend API · Future MongoDB Integration`}),(0,x.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4`,children:_e.map(e=>(0,x.jsxs)(`div`,{className:`rounded-2xl p-5 transition-all hover:-translate-y-0.5`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid ${e.color}22`},children:[(0,x.jsxs)(`div`,{className:`flex items-start justify-between mb-3`,children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`span`,{className:`text-xs px-2 py-0.5 rounded-full font-semibold mb-2 block w-fit`,style:{background:`${i[e.status]}15`,color:i[e.status]},children:e.status}),(0,x.jsx)(`h3`,{className:`text-white font-semibold text-sm`,style:{fontFamily:`Poppins`},children:e.title})]}),(0,x.jsx)(`span`,{className:`text-lg`,children:e.category===`Water`?`💧`:e.category===`Infrastructure`?`🛣️`:e.category===`Employment`?`💼`:e.category===`Safety`?`🛡️`:e.category===`Development`?`🏗️`:`📣`})]}),(0,x.jsxs)(`div`,{className:`text-white/40 text-xs mb-3`,children:[e.start,` → `,e.end]}),(0,x.jsxs)(`div`,{className:`mb-3`,children:[(0,x.jsxs)(`div`,{className:`flex justify-between text-xs mb-1.5`,children:[(0,x.jsx)(`span`,{className:`text-white/40`,children:`Progress`}),(0,x.jsxs)(`span`,{className:`font-semibold`,style:{color:e.color},children:[e.progress,`%`]})]}),(0,x.jsx)(`div`,{className:`h-1.5 rounded-full`,style:{background:`#E2E8F0`},children:(0,x.jsx)(`div`,{className:`h-full rounded-full transition-all`,style:{width:`${e.progress}%`,background:e.color}})})]}),(0,x.jsxs)(`div`,{className:`text-white/35 text-xs`,children:[`Lead: `,e.lead]})]},e.id))}),(0,x.jsx)(`div`,{className:`flex gap-1 p-1 rounded-xl w-fit`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`},children:[`board`,`timeline`,`resources`].map(n=>(0,x.jsx)(`button`,{onClick:()=>t(n),className:`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all`,style:e===n?{background:`#0B2447`,color:`#0B1F3A`,fontFamily:`Poppins`}:{color:`#334155`},children:n===`board`?`Task Board`:n===`timeline`?`Timeline`:`Resources`},n))}),e===`board`&&(0,x.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-3 gap-4`,children:[`Urgent`,`High`,`Medium`].map(e=>(0,x.jsxs)(`div`,{className:`rounded-2xl p-4`,style:{background:`#F8FAFC`,border:`1px solid #CBD5E1`},children:[(0,x.jsxs)(`div`,{className:`flex items-center gap-2 mb-3`,children:[(0,x.jsx)(`div`,{className:`w-2 h-2 rounded-full`,style:{background:a[e]}}),(0,x.jsx)(`span`,{className:`text-white/70 text-sm font-semibold`,children:e}),(0,x.jsx)(`span`,{className:`text-white/30 text-xs ml-auto`,children:n.filter(t=>t.priority===e).length})]}),(0,x.jsx)(`div`,{className:`space-y-2`,children:n.filter(t=>t.priority===e).map(e=>(0,x.jsx)(`div`,{className:`p-3 rounded-xl`,style:{background:e.done?`rgba(16,185,129,0.06)`:`rgba(255,255,255,0.04)`,border:`1px solid #CBD5E1`},children:(0,x.jsxs)(`div`,{className:`flex items-start gap-2`,children:[(0,x.jsx)(`button`,{onClick:()=>r(t=>t.map(t=>t.id===e.id?{...t,done:!t.done}:t)),className:`w-4 h-4 rounded mt-0.5 flex-shrink-0 flex items-center justify-center transition-all`,style:e.done?{background:`#10b981`}:{border:`1.5px solid rgba(255,255,255,0.25)`},children:e.done&&(0,x.jsx)(`svg`,{className:`w-2.5 h-2.5 text-white`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:3,d:`M5 13l4 4L19 7`})})}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`p`,{className:`text-xs ${e.done?`line-through text-white/30`:`text-white/75`}`,children:e.title}),(0,x.jsxs)(`div`,{className:`flex items-center gap-2 mt-1`,children:[(0,x.jsx)(`span`,{className:`text-white/30 text-xs`,children:e.due}),(0,x.jsx)(`span`,{className:`text-xs px-1.5 py-0.5 rounded`,style:{background:`rgba(11,36,71,0.1)`,color:`#0B2447`,fontSize:`10px`},children:e.campaign})]})]})]})},e.id))})]},e))}),e===`timeline`&&(0,x.jsxs)(`div`,{className:`rounded-2xl p-5`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #CBD5E1`},children:[(0,x.jsx)(`h3`,{className:`text-white font-semibold mb-5`,style:{fontFamily:`Poppins`},children:`Campaign Timeline — Aug 2026`}),(0,x.jsx)(`div`,{className:`space-y-4`,children:_e.map(e=>(0,x.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,x.jsxs)(`div`,{className:`w-32 flex-shrink-0`,children:[(0,x.jsx)(`div`,{className:`text-white/65 text-xs font-medium truncate`,children:e.title.split(` `).slice(0,3).join(` `)}),(0,x.jsx)(`div`,{className:`text-white/30 text-xs`,children:e.category})]}),(0,x.jsx)(`div`,{className:`flex-1 relative h-8 rounded-lg overflow-hidden`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`},children:(0,x.jsx)(`div`,{className:`absolute top-0 h-full rounded-lg flex items-center px-3`,style:{left:`${e.progress*.05}%`,width:`${e.progress*.92+8}%`,background:`${e.color}30`,border:`1px solid ${e.color}40`},children:(0,x.jsx)(`span`,{className:`text-white/70 text-xs truncate`,children:e.start})})}),(0,x.jsxs)(`span`,{className:`text-xs font-bold flex-shrink-0`,style:{color:i[e.status]},children:[e.progress,`%`]})]},e.id))})]}),e===`resources`&&(0,x.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-4`,children:[{label:`Volunteers`,used:340,total:500,color:`#0B2447`},{label:`Budget Used`,used:68,total:100,color:`#D95F00`,unit:`%`},{label:`Reach (1000s)`,used:142,total:200,color:`#138808`},{label:`Media Coverage`,used:28,total:50,color:`#fbbf24`,unit:` articles`}].map(e=>(0,x.jsxs)(`div`,{className:`rounded-2xl p-5`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid ${e.color}18`},children:[(0,x.jsxs)(`div`,{className:`flex justify-between items-start mb-3`,children:[(0,x.jsx)(`h3`,{className:`text-white font-semibold text-sm`,children:e.label}),(0,x.jsxs)(`span`,{className:`text-xl font-bold`,style:{color:e.color,fontFamily:`Poppins`},children:[e.used,e.unit||``,(0,x.jsxs)(`span`,{className:`text-white/25 text-sm`,children:[`/`,e.total,e.unit||``]})]})]}),(0,x.jsx)(`div`,{className:`h-2 rounded-full`,style:{background:`#E2E8F0`},children:(0,x.jsx)(`div`,{className:`h-full rounded-full`,style:{width:`${e.used/e.total*100}%`,background:e.color}})})]},e.label))})]})}function Ae(){let e=S(),t=`https://polisense-manifesto-backend.onrender.com`,[n,r]=(0,b.useState)({leader_name:``,party_name:``,party_tagline:``,election_type:`State Assembly Election`,state:`Uttar Pradesh`,constituency:``,language:`Hindi`,pages:`5`,vision:``,key_issues:``,education:``,healthcare:``,employment:``,infrastructure:``,women_empowerment:``,agriculture:``,environment:``,primary_color:`#0B5D3B`}),[i,a]=(0,b.useState)({}),[o,s]=(0,b.useState)(``),[c,l]=(0,b.useState)(!1),[u,d]=(0,b.useState)(!1),[f,p]=(0,b.useState)(``),m=(e,t)=>r(n=>({...n,[e]:t})),h=[{key:`leader_name`,label:`Leader Name`,placeholder:`Full name`},{key:`party_name`,label:`Party Name`,placeholder:`Political party name`},{key:`party_tagline`,label:`Party Tagline`,placeholder:`Party slogan`},{key:`election_type`,label:`Election Type`},{key:`state`,label:`State`},{key:`constituency`,label:`Constituency`,placeholder:`Constituency / district`},{key:`language`,label:`Language`},{key:`pages`,label:`Number of Pages`},{key:`vision`,label:`Vision`,placeholder:`Long-term vision`,area:!0},{key:`key_issues`,label:`Key Issues`,placeholder:`Main local issues`,area:!0},{key:`education`,label:`Education`,placeholder:`Education priorities`,area:!0},{key:`healthcare`,label:`Healthcare`,placeholder:`Healthcare priorities`,area:!0},{key:`employment`,label:`Employment`,placeholder:`Jobs and skills priorities`,area:!0},{key:`infrastructure`,label:`Infrastructure`,placeholder:`Roads, water, transport etc.`,area:!0},{key:`women_empowerment`,label:`Women Empowerment`,placeholder:`Women safety and opportunities`,area:!0},{key:`agriculture`,label:`Agriculture`,placeholder:`Agriculture priorities`,area:!0},{key:`environment`,label:`Environment`,placeholder:`Environment priorities`,area:!0}],g=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1 $2`).replace(/[_-]+/g,` `).replace(/\b\w/g,e=>e.toUpperCase()),_=(e,t=2)=>{if(e==null)return``;if(typeof e==`string`||typeof e==`number`||typeof e==`boolean`)return String(e).trim();if(Array.isArray(e))return e.map((e,n)=>e==null?``:typeof e==`string`||typeof e==`number`||typeof e==`boolean`?`- ${String(e).trim()}`:_(e,Math.min(t+1,4))||`- Item ${n+1}`).filter(Boolean).join(`

`);if(typeof e==`object`){let n=[`title`,`subtitle`,`introduction`,`executive_summary`,`vision_statement`,`mission_statement`,`sections`,`conclusion`,`closing_statement`];return Object.keys(e).sort((e,t)=>{let r=n.indexOf(e),i=n.indexOf(t);return r===-1&&i===-1?0:r===-1?1:i===-1?-1:r-i}).map(n=>{let r=e[n];if(r==null||r===``)return``;let i=g(n);if(n===`title`)return`# ${String(r)}`;if(n===`subtitle`)return`_${String(r)}_`;if(Array.isArray(r)){let e=_(r,Math.min(t+1,4));return e?`### ${i}\n\n${e}`:``}if(typeof r==`object`){let e=_(r,Math.min(t+1,4));return e?`### ${i}\n\n${e}`:``}return[`introduction`,`vision_statement`,`mission_statement`,`conclusion`,`closing_statement`].includes(n)||n===`executive_summary`?`### ${i}\n\n${String(r)}`:`**${i}:** ${String(r)}`}).filter(Boolean).join(`

`)}return``},v=e=>{if(typeof e==`string`){let t=e.trim();if(t.startsWith(`{`)&&t.endsWith(`}`)||t.startsWith(`[`)&&t.endsWith(`]`))try{return v(JSON.parse(t))}catch{return e}return e}if(!e||typeof e!=`object`)return String(e??``);for(let t of[`manifesto`,`generated_manifesto`,`content`,`text`,`markdown`,`result`,`output`]){let n=e[t];if(typeof n==`string`&&n.trim())return v(n);if(n&&typeof n==`object`){let e=_(n);if(e.trim())return e}}return _(e)||`The API returned a response, but no readable manifesto content was found.`},y=(e,t)=>{let n=e?.detail;return typeof n==`string`?n:Array.isArray(n)?n.map(e=>{let t=Array.isArray(e?.loc)?e.loc.filter(e=>e!==`body`).join(`.`):`request`,n=typeof e?.msg==`string`?e.msg:`Invalid value`;return`${t||`request`}: ${n}`}).join(`; `):n&&typeof n==`object`?JSON.stringify(n):typeof e?.message==`string`?e.message:t},ee=()=>n.key_issues.split(/[\n,]+/).map(e=>e.trim()).filter(Boolean);return(0,x.jsxs)(`div`,{className:`p-6 space-y-5`,children:[(0,x.jsxs)(`div`,{className:`flex items-center justify-between flex-wrap gap-3`,children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h2`,{className:`text-white font-bold text-xl`,style:{fontFamily:`Poppins`},children:`Manifesto Generator`}),(0,x.jsx)(`p`,{className:`text-white/40 text-sm mt-0.5`,children:`Connected to POLISENSE AI Manifesto API`})]}),(0,x.jsxs)(`div`,{className:`flex gap-2`,children:[(0,x.jsx)(`button`,{disabled:c,className:`btn-cyan text-sm py-2 px-4 disabled:opacity-50`,onClick:async()=>{if(!n.leader_name.trim()||!n.party_name.trim()||!n.constituency.trim()){p(`Please fill Leader Name, Party Name and Constituency.`);return}l(!0),p(``),s(``),a({});let r=ee(),i={...n,pages:Number(n.pages),leader:n.leader_name,party:n.party_name,tagline:n.party_tagline,election:n.election_type,key_issues:r,keyIssues:r,healthcare:n.healthcare,womenEmpowerment:n.women_empowerment,primaryColor:n.primary_color};try{let n=await fetch(`${t.replace(/\/+$/,``)}/generate-manifesto`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(i)}),r=await n.json().catch(()=>({}));if(!n.ok)throw Error(y(r,`Manifesto API failed (${n.status}). Check the required fields and backend logs.`));let o=v(r);s(o),a({manifesto:o}),e({type:`success`,title:`Manifesto Generated`,msg:`Manifesto received from the backend.`})}catch(t){let n=t instanceof Error?t.message:`Could not connect to Manifesto API. Check CORS and backend status.`;p(n),e({type:`warn`,title:`Manifesto API Error`,msg:n})}finally{l(!1)}},children:c?`Generating…`:`Generate Manifesto`}),(0,x.jsx)(`button`,{disabled:u||!o||c,className:`btn-orange text-sm py-2 px-4 disabled:opacity-50`,onClick:async()=>{if(!o){p(`Generate the manifesto before downloading the PDF.`);return}d(!0),p(``);let r=ee(),i={...n,pages:Number(n.pages),manifesto:o,content:o,leader:n.leader_name,party:n.party_name,tagline:n.party_tagline,election:n.election_type,key_issues:r,keyIssues:r,healthcare:n.healthcare,womenEmpowerment:n.women_empowerment,primaryColor:n.primary_color};try{let r=await fetch(`${t.replace(/\/+$/,``)}/generate-manifesto-pdf`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(i)});if(!r.ok){let e=await r.json().catch(()=>({}));throw Error(y(e,`PDF endpoint failed (${r.status})`))}let a=await r.blob();if(!a.size)throw Error(`The PDF API returned an empty file. Please try again.`);let o=URL.createObjectURL(a),s=document.createElement(`a`);s.href=o,s.download=`${(n.party_name||`manifesto`).replace(/[^a-z0-9-_]/gi,`_`)}-manifesto.pdf`,document.body.appendChild(s),s.click(),s.remove(),setTimeout(()=>URL.revokeObjectURL(o),1e3),e({type:`success`,title:`PDF Downloaded`,msg:`Manifesto PDF downloaded.`})}catch(t){let n=t instanceof Error?t.message:`PDF download failed.`;p(n),e({type:`warn`,title:`PDF Download Error`,msg:n})}finally{d(!1)}},children:u?`Preparing PDF…`:`Download PDF`})]})]}),(0,x.jsxs)(`div`,{className:`rounded-2xl p-5`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #CBD5E1`},children:[(0,x.jsx)(`h3`,{className:`text-white font-semibold mb-4`,style:{fontFamily:`Poppins`},children:`Manifesto Details`}),(0,x.jsxs)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4`,children:[h.map(e=>(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`label`,{className:`block text-white/50 text-xs mb-1.5 font-semibold`,children:e.label}),e.key===`election_type`?(0,x.jsx)(`select`,{className:`input-field py-2.5 text-sm`,value:n[e.key],onChange:t=>m(e.key,t.target.value),children:[`State Assembly Election`,`Lok Sabha Election`,`Municipal Election`,`Panchayat Election`,`By-Election`,`Other`].map(e=>(0,x.jsx)(`option`,{value:e,style:{background:`#FFFFFF`},children:e},e))}):e.key===`language`?(0,x.jsx)(`select`,{className:`input-field py-2.5 text-sm`,value:n.language,onChange:e=>m(`language`,e.target.value),children:[`Hindi`,`English`,`Hindi + English`,`Urdu`,`Bengali`,`Tamil`,`Telugu`,`Marathi`,`Gujarati`,`Punjabi`,`Kannada`,`Malayalam`,`Odia`].map(e=>(0,x.jsx)(`option`,{value:e,style:{background:`#FFFFFF`},children:e},e))}):e.key===`pages`?(0,x.jsx)(`select`,{className:`input-field py-2.5 text-sm`,value:n.pages,onChange:e=>m(`pages`,e.target.value),children:[`1`,`2`,`3`,`5`,`8`,`10`,`15`,`20`].map(e=>(0,x.jsx)(`option`,{value:e,style:{background:`#FFFFFF`},children:e},e))}):e.area?(0,x.jsx)(`textarea`,{className:`input-field text-sm resize-y w-full`,rows:2,placeholder:e.placeholder,value:n[e.key],onChange:t=>m(e.key,t.target.value)}):(0,x.jsx)(`input`,{className:`input-field py-2.5 text-sm w-full`,placeholder:e.placeholder||``,value:n[e.key],onChange:t=>m(e.key,t.target.value)})]},e.key)),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`label`,{className:`block text-white/50 text-xs mb-1.5 font-semibold`,children:`Primary Color`}),(0,x.jsxs)(`div`,{className:`flex gap-3 items-center`,children:[(0,x.jsx)(`input`,{type:`color`,value:n.primary_color,onChange:e=>m(`primary_color`,e.target.value),className:`h-10 w-14 rounded cursor-pointer bg-transparent`}),(0,x.jsx)(`span`,{className:`text-white/60 text-sm`,children:n.primary_color})]})]})]}),f&&(0,x.jsx)(`p`,{role:`alert`,className:`text-red-300 text-sm mt-4 whitespace-pre-wrap`,children:f})]}),(0,x.jsxs)(`div`,{className:`rounded-2xl overflow-hidden`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #CBD5E1`},children:[(0,x.jsxs)(`div`,{className:`px-5 py-3 flex items-center justify-between`,style:{borderBottom:`1px solid #CBD5E1`},children:[(0,x.jsx)(`h3`,{className:`text-white font-semibold`,style:{fontFamily:`Poppins`},children:`Generated Manifesto Preview`}),o&&(0,x.jsx)(`span`,{className:`text-green-400 text-xs`,children:`API response received`})]}),(0,x.jsx)(`div`,{className:`p-5 min-h-56`,children:c?(0,x.jsx)(`p`,{className:`text-purple-300 text-sm`,children:`Generating manifesto with backend AI…`}):o?(0,x.jsx)(`div`,{className:`text-white/80 text-sm leading-loose`,style:{fontFamily:`Inter`},children:(0,x.jsx)(Ee,{text:o})}):(0,x.jsx)(`p`,{className:`text-white/30 text-sm`,children:`Fill in the details above and click Generate Manifesto.`})})]})]})}function je({navigate:e}){let uCtrl=(0,b.useContext)(GovUIContext),liveComplaints=uCtrl.complaints||Be,liveAlerts=liveComplaints.filter(x=>x.isLive).map(x=>({text:`[LIVE CITIZEN GRIEVANCE · ${x.id}] ${x.category}: "${x.desc.slice(0,70)}..." — ${x.citizen} (${x.location}) · Admin Status: ${x.status}`,level:x.priority===`High`?`critical`:`high`,time:`Just now (${x.dept})`,action:`Inspect`})),t=[...liveAlerts,{text:`Water supply failure — Patel Nagar critical zone`,level:`critical`,time:`2 min ago`,action:`Deploy Tankers`},{text:`Opposition press statement on road conditions`,level:`high`,time:`18 min ago`,action:`Draft Response`},{text:`Sentiment drop in South Delhi Zone (-3.2%)`,level:`high`,time:`1 hr ago`,action:`Schedule Visit`},{text:`Campaign volunteer gap — Monday rally`,level:`medium`,time:`3 hrs ago`,action:`Recruit`},{text:`AI model detected new complaint cluster — Karol Bagh`,level:`medium`,time:`5 hrs ago`,action:`Review`}],n=[{headline:`Delhi reports 487 water complaints in 30 days — highest in 3 years`,source:`Times of India`,time:`1 hr`},{headline:`Opposition demands accountability on monsoon infrastructure failures`,source:`NDTV`,time:`3 hrs`},{headline:`Skill India scheme receives boost — 10,000 jobs announced`,source:`Hindu`,time:`5 hrs`},{headline:`Smart city project Phase 2 approved for New Delhi`,source:`HT`,time:`1 day`}],r=[{title:`Jal Board Crisis Meeting`,time:`Today 3 PM`,type:`urgent`,color:`#f87171`},{title:`Zone Coordinator Call`,time:`Today 6 PM`,type:`meeting`,color:`#0B2447`},{title:`Rally Prep — Connaught Place`,time:`Tomorrow 10 AM`,type:`rally`,color:`#D95F00`},{title:`AI Weekly Brief`,time:`4 Aug 9 AM`,type:`ai`,color:`#10b981`}],i=[`Schedule emergency water tanker deployment to Patel Nagar within 6 hours`,`Issue proactive press release on road repair progress to counter opposition narrative`,`Personal constituency visit to South Delhi Zone within 72 hours to reverse sentiment`,`Activate 200 additional volunteers for Monday rally — current numbers insufficient`],a={critical:`#f87171`,high:`#D95F00`,medium:`#fbbf24`};return(0,x.jsxs)(`div`,{className:`p-6 space-y-5`,children:[(0,x.jsxs)(`div`,{className:`rounded-2xl p-5 flex items-center gap-4`,style:{background:`linear-gradient(135deg, rgba(11,36,71,0.12), rgba(239,68,68,0.08))`,border:`1px solid rgba(11,36,71,0.25)`},children:[(0,x.jsx)(`div`,{className:`w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0`,style:{background:`rgba(11,36,71,0.2)`},children:`⚡`}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h2`,{className:`text-white font-bold text-xl`,style:{fontFamily:`Poppins`},children:`War Room`}),(0,x.jsx)(`p`,{className:`text-white/50 text-sm`,children:`AI Political Operations Center — Mock Data · Real-time alerts pending backend`})]}),(0,x.jsxs)(`div`,{className:`ml-auto flex items-center gap-3`,children:[(0,x.jsxs)(`div`,{className:`text-center`,children:[(0,x.jsx)(`div`,{className:`text-red-400 font-bold text-lg`,style:{fontFamily:`Poppins`},children:`3`}),(0,x.jsx)(`div`,{className:`text-white/30 text-xs`,children:`Critical`})]}),(0,x.jsxs)(`div`,{className:`text-center`,children:[(0,x.jsx)(`div`,{className:`text-orange-400 font-bold text-lg`,style:{fontFamily:`Poppins`},children:`2`}),(0,x.jsx)(`div`,{className:`text-white/30 text-xs`,children:`High`})]}),(0,x.jsxs)(`div`,{className:`text-center`,children:[(0,x.jsx)(`div`,{className:`text-purple-400 font-bold text-lg`,style:{fontFamily:`Poppins`},children:`78`}),(0,x.jsx)(`div`,{className:`text-white/30 text-xs`,children:`Score`})]})]})]}),(0,x.jsx)(nt,{tags:[`🔴 TODO: Future Backend API`,`🟣 TODO: Groq AI Alerts`,`🟢 Future Real-time WebSocket`]}),(0,x.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-3 gap-4`,children:[(0,x.jsxs)(`div`,{className:`rounded-2xl overflow-hidden`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #CBD5E1`},children:[(0,x.jsxs)(`div`,{className:`px-5 py-3 flex items-center justify-between`,style:{borderBottom:`1px solid #CBD5E1`},children:[(0,x.jsx)(`h3`,{className:`text-white font-semibold text-sm`,style:{fontFamily:`Poppins`},children:`🚨 AI Alerts`}),(0,x.jsx)(`span`,{className:`text-xs text-red-400 px-2 py-0.5 rounded-full`,style:{background:`rgba(239,68,68,0.1)`},children:`Live (Mock)`})]}),(0,x.jsx)(`div`,{className:`divide-y`,style:{"--divide-color":`#CBD5E1`},children:t.map((e,t)=>(0,x.jsxs)(`div`,{className:`p-4`,style:{borderLeft:`3px solid ${a[e.level]}`},children:[(0,x.jsx)(`p`,{className:`text-white/75 text-xs leading-relaxed mb-2`,children:e.text}),(0,x.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,x.jsx)(`span`,{className:`text-white/30 text-xs`,children:e.time}),(0,x.jsx)(`button`,{className:`text-xs px-2.5 py-1 rounded-lg transition-all hover:opacity-90`,style:{background:`${a[e.level]}15`,color:a[e.level]},onClick:()=>alert(`Action: ${e.action} — Future Backend API`),children:e.action})]})]},t))})]}),(0,x.jsxs)(`div`,{className:`space-y-4`,children:[(0,x.jsxs)(`div`,{className:`rounded-2xl p-5`,style:{background:`rgba(11,36,71,0.06)`,border:`1px solid rgba(11,36,71,0.2)`},children:[(0,x.jsxs)(`div`,{className:`flex items-center justify-between mb-4`,children:[(0,x.jsx)(`h3`,{className:`text-white font-semibold text-sm`,style:{fontFamily:`Poppins`},children:`Constituency Score`}),(0,x.jsx)(Re,{pct:78,color:`#0B2447`,size:60})]}),(0,x.jsx)(`div`,{className:`space-y-2`,children:[[`Sentiment`,`+12.4%`,`#10b981`],[`Complaint Rate`,`487/mo`,`#D95F00`],[`Reach`,`1.28M`,`#138808`]].map(([e,t,n])=>(0,x.jsxs)(`div`,{className:`flex justify-between text-xs`,children:[(0,x.jsx)(`span`,{className:`text-white/45`,children:e}),(0,x.jsx)(`span`,{className:`font-semibold`,style:{color:n},children:t})]},e))})]}),(0,x.jsxs)(`div`,{className:`rounded-2xl p-5`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #CBD5E1`},children:[(0,x.jsx)(`h3`,{className:`text-white font-semibold text-sm mb-3`,style:{fontFamily:`Poppins`},children:`Campaign Progress`}),_e.filter(e=>e.status===`Active`).map(e=>(0,x.jsxs)(`div`,{className:`mb-3`,children:[(0,x.jsxs)(`div`,{className:`flex justify-between text-xs mb-1`,children:[(0,x.jsx)(`span`,{className:`text-white/60 truncate`,children:e.title.split(` `).slice(0,3).join(` `)}),(0,x.jsxs)(`span`,{className:`font-bold ml-2`,style:{color:e.color},children:[e.progress,`%`]})]}),(0,x.jsx)(`div`,{className:`h-1.5 rounded-full`,style:{background:`#E2E8F0`},children:(0,x.jsx)(`div`,{className:`h-full rounded-full`,style:{width:`${e.progress}%`,background:e.color}})})]},e.id))]}),(0,x.jsxs)(`div`,{className:`rounded-2xl p-5`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #CBD5E1`},children:[(0,x.jsxs)(`div`,{className:`flex items-center justify-between mb-3`,children:[(0,x.jsx)(`h3`,{className:`text-white font-semibold text-sm`,style:{fontFamily:`Poppins`},children:`Upcoming`}),(0,x.jsx)(`button`,{onClick:()=>e(`strategy-calendar`),className:`text-purple-400 text-xs hover:underline`,children:`View All`})]}),r.map(e=>(0,x.jsxs)(`div`,{className:`flex items-center gap-3 mb-2.5`,children:[(0,x.jsx)(`div`,{className:`w-1.5 h-8 rounded-full flex-shrink-0`,style:{background:e.color}}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`div`,{className:`text-white/75 text-xs font-medium`,children:e.title}),(0,x.jsx)(`div`,{className:`text-white/30 text-xs`,children:e.time})]})]},e.title))]})]}),(0,x.jsxs)(`div`,{className:`space-y-4`,children:[(0,x.jsxs)(`div`,{className:`rounded-2xl p-5`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #CBD5E1`},children:[(0,x.jsx)(`h3`,{className:`text-white font-semibold text-sm mb-3`,style:{fontFamily:`Poppins`},children:`📰 Recent News`}),(0,x.jsx)(`div`,{className:`space-y-3`,children:n.map((e,t)=>(0,x.jsxs)(`div`,{className:`pb-3`,style:t<n.length-1?{borderBottom:`1px solid #CBD5E1`}:{},children:[(0,x.jsx)(`p`,{className:`text-white/70 text-xs leading-relaxed`,children:e.headline}),(0,x.jsxs)(`div`,{className:`flex items-center gap-2 mt-1`,children:[(0,x.jsx)(`span`,{className:`text-purple-400/60 text-xs`,children:e.source}),(0,x.jsxs)(`span`,{className:`text-white/20 text-xs`,children:[e.time,` ago`]})]})]},t))}),(0,x.jsx)(`div`,{className:`text-center mt-2 text-purple-400/40 text-xs`,children:`🟣 Future: Live News API`})]}),(0,x.jsxs)(`div`,{className:`rounded-2xl p-5`,style:{background:`rgba(11,36,71,0.06)`,border:`1px solid rgba(11,36,71,0.2)`},children:[(0,x.jsxs)(`div`,{className:`flex items-center gap-2 mb-3`,children:[(0,x.jsx)(`span`,{children:`🤖`}),(0,x.jsx)(`h3`,{className:`text-purple-400 font-semibold text-sm`,style:{fontFamily:`Poppins`},children:`AI Daily Priorities`})]}),i.map((e,t)=>(0,x.jsxs)(`div`,{className:`flex items-start gap-2 mb-2.5`,children:[(0,x.jsxs)(`span`,{className:`text-purple-400 font-bold text-xs flex-shrink-0`,children:[t+1,`.`]}),(0,x.jsx)(`p`,{className:`text-white/60 text-xs leading-relaxed`,children:e})]},t)),(0,x.jsx)(`button`,{onClick:()=>e(`strategy-chatbot`),className:`w-full mt-3 py-2 rounded-xl text-xs font-semibold transition-all hover:opacity-90`,style:{background:`rgba(11,36,71,0.15)`,color:`#0B2447`,border:`1px solid rgba(11,36,71,0.25)`},children:`Discuss with AI Assistant →`})]})]})]})]})}function Me(){let[e,t]=(0,b.useState)(ve),[n,r]=(0,b.useState)(`calendar`),[i,a]=(0,b.useState)(``),o={rally:`📣`,meeting:`🤝`,ai:`🤖`,press:`📢`,event:`🎯`},s={Urgent:`#f87171`,High:`#D95F00`,Medium:`#fbbf24`,Low:`#10b981`},c=()=>{i.trim()&&(t(e=>[...e,{id:Date.now(),title:i,priority:`Medium`,due:`TBD`,done:!1,campaign:`General`}]),a(``))},l=[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`],u=[[`28`,`29`,`30`,`31`,`1`,`2`,`3`],[`4`,`5`,`6`,`7`,`8`,`9`,`10`],[`11`,`12`,`13`,`14`,`15`,`16`,`17`],[`18`,`19`,`20`,`21`,`22`,`23`,`24`]],d=ye.reduce((e,t)=>{let n=t.date.split(` `)[0];return e[n]||(e[n]=[]),e[n].push(t),e},{});return(0,x.jsxs)(`div`,{className:`p-6 space-y-5`,children:[(0,x.jsxs)(`div`,{className:`flex items-center justify-between flex-wrap gap-3`,children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h2`,{className:`text-white font-bold text-xl`,style:{fontFamily:`Poppins`},children:`Calendar & Tasks`}),(0,x.jsx)(`p`,{className:`text-white/40 text-sm mt-0.5`,children:`Campaign schedule · Aug 2026 · Mock Data`})]}),(0,x.jsx)(`div`,{className:`flex gap-1 p-1 rounded-xl`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`},children:[`calendar`,`tasks`].map(e=>(0,x.jsx)(`button`,{onClick:()=>r(e),className:`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all`,style:n===e?{background:`#0B2447`,color:`#0B1F3A`,fontFamily:`Poppins`}:{color:`#334155`},children:e===`calendar`?`📅 Calendar`:`✅ Tasks`},e))})]}),(0,x.jsx)(`div`,{className:`text-xs px-3 py-2 rounded-lg w-fit`,style:{background:`rgba(217,95,0,0.07)`,border:`1px solid rgba(217,95,0,0.18)`,color:`rgba(217,95,0,0.8)`},children:`🔴 TODO: Future Backend API · Future MongoDB Integration`}),n===`calendar`&&(0,x.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-3 gap-4`,children:[(0,x.jsxs)(`div`,{className:`lg:col-span-2 rounded-2xl p-5`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #CBD5E1`},children:[(0,x.jsxs)(`div`,{className:`flex items-center justify-between mb-4`,children:[(0,x.jsx)(`h3`,{className:`text-white font-bold`,style:{fontFamily:`Poppins`},children:`August 2026`}),(0,x.jsxs)(`div`,{className:`flex gap-1`,children:[(0,x.jsx)(`button`,{className:`w-7 h-7 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:bg-white/08 transition-all`,children:`‹`}),(0,x.jsx)(`button`,{className:`w-7 h-7 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:bg-white/08 transition-all`,children:`›`})]})]}),(0,x.jsx)(`div`,{className:`grid grid-cols-7 gap-1 mb-2`,children:l.map(e=>(0,x.jsx)(`div`,{className:`text-center text-xs text-white/30 font-semibold py-1`,children:e},e))}),u.map((e,t)=>(0,x.jsx)(`div`,{className:`grid grid-cols-7 gap-1 mb-1`,children:e.map((e,n)=>{let r=d[e]||[],i=!(t===0&&parseInt(e)>10);return(0,x.jsxs)(`div`,{className:`rounded-lg p-1.5 min-h-14 transition-all hover:bg-white/05`,style:{background:r.length>0?`rgba(11,36,71,0.06)`:`rgba(255,255,255,0.02)`,border:r.length>0?`1px solid rgba(11,36,71,0.15)`:`1px solid rgba(255,255,255,0.04)`},children:[(0,x.jsx)(`div`,{className:`text-xs font-semibold mb-1 ${i?`text-white/70`:`text-white/20`}`,children:e}),r.slice(0,2).map(e=>(0,x.jsxs)(`div`,{className:`text-xs px-1 py-0.5 rounded mb-0.5 truncate leading-tight`,style:{background:`${e.color}18`,color:e.color,fontSize:`9px`},children:[o[e.type],` `,e.title.split(` `).slice(0,2).join(` `)]},e.id)),r.length>2&&(0,x.jsxs)(`div`,{className:`text-xs text-white/30`,style:{fontSize:`9px`},children:[`+`,r.length-2,` more`]})]},n)})},t))]}),(0,x.jsx)(`div`,{className:`space-y-3`,children:(0,x.jsxs)(`div`,{className:`rounded-2xl p-4`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #CBD5E1`},children:[(0,x.jsx)(`h3`,{className:`text-white font-semibold text-sm mb-3`,style:{fontFamily:`Poppins`},children:`Upcoming Events`}),(0,x.jsx)(`div`,{className:`space-y-2.5`,children:ye.map(e=>(0,x.jsxs)(`div`,{className:`flex gap-3 p-3 rounded-xl transition-all hover:bg-white/05`,style:{background:`${e.color}06`,borderLeft:`3px solid ${e.color}`},children:[(0,x.jsx)(`span`,{className:`text-lg flex-shrink-0`,children:o[e.type]}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`div`,{className:`text-white/80 text-xs font-semibold leading-snug`,children:e.title}),(0,x.jsxs)(`div`,{className:`text-white/35 text-xs mt-0.5`,children:[e.date,` · `,e.time]})]})]},e.id))})]})})]}),n===`tasks`&&(0,x.jsxs)(`div`,{className:`space-y-4`,children:[(0,x.jsxs)(`div`,{className:`flex gap-3`,children:[(0,x.jsx)(`input`,{className:`input-field flex-1 py-2.5 text-sm`,placeholder:`Add new task…`,value:i,onChange:e=>a(e.target.value),onKeyDown:e=>e.key===`Enter`&&c()}),(0,x.jsx)(`button`,{className:`btn-orange px-5 py-2 text-sm`,onClick:c,children:`+ Add`})]}),(0,x.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-4`,children:[`Urgent`,`High`,`Medium`,`Low`].map(n=>(0,x.jsxs)(`div`,{className:`rounded-2xl p-4`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid ${s[n]}18`},children:[(0,x.jsxs)(`div`,{className:`flex items-center gap-2 mb-3`,children:[(0,x.jsx)(`div`,{className:`w-2 h-2 rounded-full`,style:{background:s[n]}}),(0,x.jsx)(`span`,{className:`text-white/70 text-sm font-semibold`,children:n}),(0,x.jsxs)(`span`,{className:`text-white/25 text-xs ml-auto`,children:[e.filter(e=>e.priority===n).length,` tasks`]})]}),(0,x.jsx)(`div`,{className:`space-y-2`,children:e.filter(e=>e.priority===n).map(e=>(0,x.jsxs)(`div`,{className:`flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-white/04 transition-all`,style:{background:e.done?`rgba(16,185,129,0.05)`:`rgba(255,255,255,0.02)`},children:[(0,x.jsx)(`button`,{onClick:()=>t(t=>t.map(t=>t.id===e.id?{...t,done:!t.done}:t)),className:`w-4 h-4 rounded mt-0.5 flex-shrink-0 flex items-center justify-center transition-all`,style:e.done?{background:`#10b981`}:{border:`1.5px solid rgba(255,255,255,0.25)`},children:e.done&&(0,x.jsx)(`svg`,{className:`w-2.5 h-2.5 text-white`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:3,d:`M5 13l4 4L19 7`})})}),(0,x.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,x.jsx)(`p`,{className:`text-xs ${e.done?`line-through text-white/25`:`text-white/75`}`,children:e.title}),(0,x.jsxs)(`div`,{className:`flex items-center gap-2 mt-0.5`,children:[(0,x.jsx)(`span`,{className:`text-white/25 text-xs`,children:e.due}),(0,x.jsx)(`span`,{className:`text-xs px-1.5 py-0.5 rounded`,style:{background:`rgba(11,36,71,0.1)`,color:`#0B2447`,fontSize:`10px`},children:e.campaign})]})]})]},e.id))})]},n))}),(0,x.jsxs)(`div`,{className:`rounded-2xl p-5`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #CBD5E1`},children:[(0,x.jsxs)(`div`,{className:`flex items-center justify-between mb-3`,children:[(0,x.jsx)(`h3`,{className:`text-white font-semibold text-sm`,style:{fontFamily:`Poppins`},children:`Overall Progress`}),(0,x.jsxs)(`span`,{className:`text-purple-400 text-sm font-bold`,children:[e.filter(e=>e.done).length,`/`,e.length]})]}),(0,x.jsx)(`div`,{className:`h-2 rounded-full`,style:{background:`#E2E8F0`},children:(0,x.jsx)(`div`,{className:`h-full rounded-full transition-all`,style:{width:`${e.filter(e=>e.done).length/e.length*100}%`,background:`linear-gradient(90deg, #0B2447, #6d28d9)`}})})]})]})]})}function Ne({page:e,navigate:t}){let[n,r]=(0,b.useState)(!0);return(0,x.jsxs)(`div`,{className:`flex h-screen overflow-hidden`,style:{background:`linear-gradient(180deg, #FFF7EE 0%, #FFFFFF 48%, #F1F9F2 100%)`},children:[(0,x.jsx)(xe,{expanded:n,setExpanded:r,activePage:e,navigate:t}),(0,x.jsxs)(`div`,{className:`flex flex-col flex-1 min-w-0 overflow-hidden`,children:[(0,x.jsx)(Se,{activePage:e,navigate:t}),(0,x.jsx)(`main`,{className:`flex-1 overflow-y-auto`,style:{background:`linear-gradient(180deg, #FFF7EE 0%, #FFFFFF 48%, #F1F9F2 100%)`},children:(()=>{switch(e){case`strategy-dashboard`:return(0,x.jsx)(Ce,{navigate:t});case`strategy-constituency`:return(0,x.jsx)(we,{});case`strategy-chatbot`:return(0,x.jsx)(De,{});case`strategy-speech`:return(0,x.jsx)(Oe,{});case`strategy-campaigns`:return(0,x.jsx)(ke,{});case`strategy-manifesto`:return(0,x.jsx)(Ae,{});case`strategy-warroom`:return(0,x.jsx)(je,{navigate:t});case`strategy-calendar`:return(0,x.jsx)(Me,{});default:return(0,x.jsx)(Ce,{navigate:t})}})()})]})]})}function Pe({navigate:e}){let t=t=>{e(t),window.scrollTo(0,0)},[n,r]=(0,b.useState)(1),[i,a]=(0,b.useState)(``),[o,s]=(0,b.useState)([``,``,``,``,``,``]),[c,l]=(0,b.useState)(``),[u,d]=(0,b.useState)(``),[f,p]=(0,b.useState)(!1),m=(0,b.useRef)([]),h=(e,t)=>{if(!/^[0-9]?$/.test(t))return;let n=[...o];n[e]=t,s(n),t&&e<5&&m.current[e+1]?.focus()},g=S(),_={1:{title:`OTP Sent (Dev Mode)`,msg:`A mock OTP has been sent to ${i}. Real email integration via Node.js + SendGrid is pending.`},2:{title:`OTP Verified (Dev Mode)`,msg:`OTP simulation successful. Real verification via Redis + backend API is pending.`},3:{title:`Password Reset (Dev Mode)`,msg:`Password has been simulated successfully. Real update via Node.js + MongoDB is pending.`}},v=()=>{p(!0),setTimeout(()=>{p(!1);let e=n;_[e]&&g({type:e===3?`success`:`dev`,..._[e]}),r(e=>e<4?e+1:e)},1200)};return(0,x.jsxs)(ue,{children:[(0,x.jsx)(de,{label:`Back to Login`,onClick:()=>t(`role-selection`)}),(0,x.jsx)(`div`,{className:`flex items-center justify-between mb-8 px-1`,children:[`Email`,`Verify OTP`,`New Password`,`Done`].map((e,t)=>(0,x.jsxs)(`div`,{className:`flex items-center gap-1 flex-1`,children:[(0,x.jsx)(`div`,{className:`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0
              ${n>t+1?`bg-green-500 text-white`:n===t+1?`text-navy`:`text-white/25 border border-white/15`}`,style:n===t+1?{background:`#138808`,color:`#0B1F3A`}:{},children:n>t+1?`✓`:t+1}),(0,x.jsx)(`span`,{className:`text-xs hidden sm:block ${n===t+1?`text-white`:n>t+1?`text-green-400`:`text-white/25`}`,children:e}),t<3&&(0,x.jsx)(`div`,{className:`flex-1 h-px mx-1`,style:{background:n>t+1?`#10b981`:`rgba(255,255,255,0.08)`}})]},e))}),(0,x.jsxs)(`div`,{className:`glass-card p-8`,children:[(0,x.jsx)(D,{label:`Future Backend OTP API · Node.js + Redis`}),(0,x.jsxs)(`div`,{className:`mt-5 space-y-5`,children:[n===1&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(`div`,{className:`text-center mb-4`,children:[(0,x.jsx)(`div`,{className:`text-3xl mb-3`,children:`🔑`}),(0,x.jsx)(`h2`,{className:`text-white font-bold text-xl`,style:{fontFamily:`Poppins`},children:`Forgot Password`}),(0,x.jsx)(`p`,{className:`text-white/45 text-sm mt-1`,children:`Enter your registered email to receive an OTP`})]}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`label`,{className:`block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2`,children:`Registered Email *`}),(0,x.jsx)(`input`,{className:`input-field`,type:`email`,placeholder:`you@example.com`,value:i,onChange:e=>a(e.target.value),onKeyDown:e=>e.key===`Enter`&&i&&v()})]}),(0,x.jsx)(`button`,{className:`btn-orange w-full py-3`,onClick:v,style:{opacity:i?1:.5},children:f?`Sending OTP…`:`Send OTP →`})]}),n===2&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(`div`,{className:`text-center mb-4`,children:[(0,x.jsx)(`div`,{className:`text-3xl mb-3`,children:`📲`}),(0,x.jsx)(`h2`,{className:`text-white font-bold text-xl`,style:{fontFamily:`Poppins`},children:`Verify OTP`}),(0,x.jsxs)(`p`,{className:`text-white/45 text-sm mt-1`,children:[`Enter the 6-digit OTP sent to `,(0,x.jsx)(`span`,{className:`text-cyan-400`,children:i})]})]}),(0,x.jsx)(`div`,{className:`flex gap-2 justify-center`,children:o.map((e,t)=>(0,x.jsx)(`input`,{ref:e=>{m.current[t]=e},className:`w-12 h-14 text-center text-white text-xl font-bold rounded-xl focus:outline-none`,style:{background:`#E2E8F0`,border:e?`1.5px solid #138808`:`1px solid rgba(255,255,255,0.15)`},maxLength:1,value:e,onChange:e=>h(t,e.target.value),onKeyDown:n=>n.key===`Backspace`&&!e&&t>0&&m.current[t-1]?.focus()},t))}),(0,x.jsx)(`button`,{className:`btn-orange w-full py-3`,onClick:v,style:{opacity:o.every(e=>e)?1:.5},children:f?`Verifying…`:`Verify OTP →`}),(0,x.jsx)(`div`,{className:`text-center`,children:(0,x.jsx)(`button`,{className:`text-cyan-400 text-xs hover:underline`,onClick:()=>{},children:`Resend OTP`})})]}),n===3&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(`div`,{className:`text-center mb-4`,children:[(0,x.jsx)(`div`,{className:`text-3xl mb-3`,children:`🔒`}),(0,x.jsx)(`h2`,{className:`text-white font-bold text-xl`,style:{fontFamily:`Poppins`},children:`Set New Password`}),(0,x.jsx)(`p`,{className:`text-white/45 text-sm mt-1`,children:`Choose a strong, unique password`})]}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`label`,{className:`block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2`,children:`New Password *`}),(0,x.jsx)(`input`,{className:`input-field`,type:`password`,placeholder:`Min. 8 characters`,value:c,onChange:e=>l(e.target.value)})]}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`label`,{className:`block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2`,children:`Confirm Password *`}),(0,x.jsx)(`input`,{className:`input-field`,type:`password`,placeholder:`Repeat new password`,value:u,onChange:e=>d(e.target.value)}),u&&c!==u&&(0,x.jsx)(`p`,{className:`text-red-400 text-xs mt-1`,children:`Passwords do not match`})]}),(0,x.jsx)(`button`,{className:`btn-orange w-full py-3`,onClick:v,style:{opacity:c&&c===u?1:.5},children:f?`Resetting…`:`Reset Password →`})]}),n===4&&(0,x.jsxs)(`div`,{className:`text-center py-6`,children:[(0,x.jsx)(`div`,{className:`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5`,style:{background:`rgba(16,185,129,0.15)`,border:`2px solid rgba(16,185,129,0.4)`},children:(0,x.jsx)(`svg`,{className:`w-8 h-8 text-green-400`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M5 13l4 4L19 7`})})}),(0,x.jsx)(`h2`,{className:`text-white font-bold text-xl mb-2`,style:{fontFamily:`Poppins`},children:`Password Reset!`}),(0,x.jsx)(`p`,{className:`text-white/50 text-sm mb-8`,children:`Your password has been updated successfully. You can now login with your new credentials.`}),(0,x.jsx)(`button`,{className:`btn-orange w-full py-3`,onClick:()=>t(`role-selection`),children:`Back to Login`})]})]})]})]})}function Fe({navigate:e}){let t=t=>{e(t),window.scrollTo(0,0)};return(0,x.jsx)(`div`,{className:`min-h-screen grid-bg flex items-center justify-center px-6`,style:{paddingTop:`80px`},children:(0,x.jsxs)(`div`,{className:`max-w-md w-full text-center py-20`,children:[(0,x.jsxs)(`div`,{className:`relative mx-auto w-36 h-36 mb-10`,children:[(0,x.jsx)(`div`,{className:`absolute inset-0 rounded-full`,style:{background:`radial-gradient(circle, rgba(239,68,68,0.15) 0%, transparent 70%)`}}),(0,x.jsx)(`div`,{className:`w-36 h-36 rounded-full flex items-center justify-center`,style:{background:`rgba(239,68,68,0.08)`,border:`2px solid rgba(239,68,68,0.25)`},children:(0,x.jsx)(`svg`,{className:`w-16 h-16 text-red-400`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636`})})})]}),(0,x.jsxs)(`div`,{className:`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-5`,style:{background:`rgba(239,68,68,0.1)`,color:`#f87171`,border:`1px solid rgba(239,68,68,0.25)`},children:[(0,x.jsx)(`span`,{className:`w-1.5 h-1.5 rounded-full bg-red-400`}),`Access Denied`]}),(0,x.jsx)(`h1`,{className:`text-3xl font-bold text-white mb-4`,style:{fontFamily:`Poppins`},children:`Access Restricted`}),(0,x.jsx)(`p`,{className:`text-white/55 leading-relaxed mb-3`,children:`You are not authorized to access this workspace.`}),(0,x.jsx)(`p`,{className:`text-white/35 text-sm mb-10`,children:`This area is restricted to verified government officials and authorized strategy users. If you believe this is an error, contact your system administrator.`}),(0,x.jsxs)(`div`,{className:`rounded-xl p-4 mb-8 text-left`,style:{background:`rgba(239,68,68,0.06)`,border:`1px solid rgba(239,68,68,0.15)`},children:[(0,x.jsx)(`div`,{className:`text-red-400/80 text-xs font-bold uppercase tracking-wider mb-2`,children:`Security Notice`}),(0,x.jsx)(`p`,{className:`text-white/40 text-xs`,children:`Future Backend Integration · This access attempt has been logged for security auditing. Repeat unauthorized attempts may result in IP restriction.`})]}),(0,x.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,x.jsx)(`button`,{onClick:()=>t(`home`),className:`btn-orange py-3`,children:`Go to Home`}),(0,x.jsx)(`button`,{onClick:()=>t(`role-selection`),className:`btn-cyan py-3`,children:`Login Again`})]})]})})}function Ie({navigate:e}){let t=t=>{e(t),window.scrollTo(0,0)},[n,r]=(0,b.useState)(10);return(0,b.useEffect)(()=>{if(n<=0){e(`role-selection`),window.scrollTo(0,0);return}let t=setTimeout(()=>r(e=>e-1),1e3);return()=>clearTimeout(t)},[n,e]),(0,x.jsx)(`div`,{className:`min-h-screen grid-bg flex items-center justify-center px-6`,style:{paddingTop:`80px`},children:(0,x.jsxs)(`div`,{className:`max-w-md w-full text-center py-20`,children:[(0,x.jsxs)(`div`,{className:`relative mx-auto w-36 h-36 mb-10`,children:[(0,x.jsx)(`div`,{className:`absolute inset-0 rounded-full`,style:{background:`radial-gradient(circle, rgba(217,95,0,0.12) 0%, transparent 70%)`}}),(0,x.jsx)(`div`,{className:`w-36 h-36 rounded-full flex items-center justify-center`,style:{background:`rgba(217,95,0,0.08)`,border:`2px solid rgba(217,95,0,0.25)`},children:(0,x.jsx)(`svg`,{className:`w-16 h-16 text-orange-400`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z`})})})]}),(0,x.jsxs)(`div`,{className:`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-5`,style:{background:`rgba(217,95,0,0.1)`,color:`#fb923c`,border:`1px solid rgba(217,95,0,0.25)`},children:[(0,x.jsx)(`span`,{className:`w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse`}),`Session Expired`]}),(0,x.jsx)(`h1`,{className:`text-3xl font-bold text-white mb-4`,style:{fontFamily:`Poppins`},children:`Your Session Has Expired`}),(0,x.jsx)(`p`,{className:`text-white/55 leading-relaxed mb-3`,children:`For your security, your workspace session has timed out due to inactivity.`}),(0,x.jsx)(`p`,{className:`text-white/35 text-sm mb-8`,children:`Any unsaved work may have been lost. Please log in again to continue.`}),(0,x.jsxs)(`div`,{className:`rounded-xl p-5 mb-8`,style:{background:`rgba(217,95,0,0.06)`,border:`1px solid rgba(217,95,0,0.15)`},children:[(0,x.jsx)(`div`,{className:`text-orange-400/80 text-xs font-bold uppercase tracking-wider mb-2`,children:`Auto Redirect`}),(0,x.jsxs)(`p`,{className:`text-white/50 text-sm`,children:[`Redirecting to Login in`,` `,(0,x.jsx)(`span`,{className:`text-orange-400 font-bold text-lg`,style:{fontFamily:`Poppins`},children:n}),` `,`seconds…`]}),(0,x.jsx)(`div`,{className:`mt-3 h-1 rounded-full`,style:{background:`#E2E8F0`},children:(0,x.jsx)(`div`,{className:`h-full rounded-full transition-all duration-1000`,style:{width:`${n/10*100}%`,background:`#D95F00`}})})]}),(0,x.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,x.jsx)(`button`,{onClick:()=>t(`role-selection`),className:`btn-orange py-3`,children:`Login Again`}),(0,x.jsx)(`button`,{onClick:()=>t(`home`),className:`btn-cyan py-3`,children:`Back to Home`})]})]})})}function Le({data:e,labels:t,color:n=`#138808`}){let r=Math.max(...e),i=Math.min(...e),a=e.map((t,n)=>[n/(e.length-1)*400,82-(t-i)/(r-i||1)*70]),o=`M ${a.map(([e,t])=>`${e.toFixed(1)},${t.toFixed(1)}`).join(` L `)}`,s=`M 0,90 L ${a.map(([e,t])=>`${e.toFixed(1)},${t.toFixed(1)}`).join(` L `)} L 400,90 Z`,c=`alg-${n.replace(`#`,``)}`;return(0,x.jsxs)(`div`,{children:[(0,x.jsxs)(`svg`,{viewBox:`0 0 400 90`,preserveAspectRatio:`none`,className:`w-full`,style:{height:90},children:[(0,x.jsx)(`defs`,{children:(0,x.jsxs)(`linearGradient`,{id:c,x1:`0`,y1:`0`,x2:`0`,y2:`1`,children:[(0,x.jsx)(`stop`,{offset:`0%`,stopColor:n,stopOpacity:`0.28`}),(0,x.jsx)(`stop`,{offset:`100%`,stopColor:n,stopOpacity:`0`})]})}),(0,x.jsx)(`path`,{d:s,fill:`url(#${c})`}),(0,x.jsx)(`path`,{d:o,fill:`none`,stroke:n,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),a.map(([e,t],r)=>(0,x.jsx)(`circle`,{cx:e,cy:t,r:`3.5`,fill:n,stroke:`#07121f`,strokeWidth:`1.5`},r))]}),(0,x.jsx)(`div`,{className:`flex justify-between mt-1.5`,children:t.map((e,t)=>(0,x.jsx)(`span`,{className:`text-white/30 text-xs`,children:e},t))})]})}function Re({pct:e,color:t,size:n=84}){let r=2*Math.PI*34;return(0,x.jsxs)(`div`,{className:`relative`,style:{width:n,height:n},children:[(0,x.jsxs)(`svg`,{viewBox:`0 0 84 84`,style:{width:n,height:n},children:[(0,x.jsx)(`circle`,{cx:`42`,cy:`42`,r:34,fill:`none`,stroke:`rgba(255,255,255,0.07)`,strokeWidth:`10`}),(0,x.jsx)(`circle`,{cx:`42`,cy:`42`,r:34,fill:`none`,stroke:t,strokeWidth:`10`,strokeDasharray:`${r*e/100} ${r}`,strokeDashoffset:r*.25,strokeLinecap:`round`})]}),(0,x.jsx)(`div`,{className:`absolute inset-0 flex items-center justify-center`,children:(0,x.jsxs)(`span`,{className:`text-white font-bold text-sm`,style:{fontFamily:`Poppins`},children:[e,`%`]})})]})}function ze({label:e,value:t,max:n,color:r}){return(0,x.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,x.jsx)(`span`,{className:`text-white/55 text-xs w-28 flex-shrink-0 truncate`,children:e}),(0,x.jsx)(`div`,{className:`flex-1 h-1.5 rounded-full`,style:{background:`#E2E8F0`},children:(0,x.jsx)(`div`,{className:`h-full rounded-full`,style:{width:`${t/n*100}%`,background:r}})}),(0,x.jsx)(`span`,{className:`text-white/60 text-xs w-8 text-right flex-shrink-0`,children:t})]})}var Be=[{id:`POL-2026-9421`,citizen:`Priya Sharma`,phone:`+91 98765 43210`,email:`priya.sharma@email.com`,category:`Infrastructure`,dept:`Roads & PWD`,priority:`High`,status:`Pending`,date:`29 Jul 2026`,location:`Delhi, Block C, Sector 12`,desc:`Severe road damage and persistent waterlogging on Main Street causing safety hazards for over 500 residents. The pothole spans roughly 4m² near the junction.`},{id:`POL-2026-9420`,citizen:`Rajesh Kumar`,phone:`+91 87654 32109`,email:`rajesh.k@gmail.com`,category:`Water Supply`,dept:`Jal Board`,priority:`High`,status:`Under Review`,date:`29 Jul 2026`,location:`Mumbai, Andheri West`,desc:`No water supply for 3 consecutive days in our housing society. Over 200 families affected. Previous complaints have not resulted in resolution.`},{id:`POL-2026-9418`,citizen:`Aisha Mohammed`,phone:`+91 76543 21098`,email:`aisha.m@email.com`,category:`Electricity`,dept:`DISCOM`,priority:`Medium`,status:`Assigned`,date:`28 Jul 2026`,location:`Hyderabad, Banjara Hills`,desc:`Frequent power outages lasting 4–6 hours daily for the past week. UPS systems are failing and causing business disruption.`},{id:`POL-2026-9415`,citizen:`Suresh Patel`,phone:`+91 65432 10987`,email:`suresh.p@gmail.com`,category:`Sanitation`,dept:`Municipal Corp.`,priority:`Medium`,status:`In Progress`,date:`28 Jul 2026`,location:`Ahmedabad, Navrangpura`,desc:`Garbage not collected for 10 days. Overflowing bins creating unhygienic conditions and foul odour affecting the entire street.`},{id:`POL-2026-9410`,citizen:`Meena Devi`,phone:`+91 54321 09876`,email:`meena.d@email.com`,category:`Health`,dept:`Health Dept.`,priority:`Low`,status:`Resolved`,date:`27 Jul 2026`,location:`Lucknow, Hazratganj`,desc:`Stagnant water in the community park creating mosquito breeding grounds. Requested fogging and drainage cleaning.`},{id:`POL-2026-9408`,citizen:`Arjun Nair`,phone:`+91 43210 98765`,email:`arjun.n@gmail.com`,category:`Education`,dept:`Education Dept.`,priority:`Low`,status:`Resolved`,date:`27 Jul 2026`,location:`Kochi, Ernakulam`,desc:`Government school lacking adequate drinking water facility. Students forced to bring water from home. Request for water purifier installation.`},{id:`POL-2026-9405`,citizen:`Kavya Reddy`,phone:`+91 32109 87654`,email:`kavya.r@email.com`,category:`Infrastructure`,dept:`Roads & PWD`,priority:`High`,status:`Pending`,date:`26 Jul 2026`,location:`Bangalore, Whitefield`,desc:`Broken street lighting on the entire stretch of MG Road. Serious safety concern for night commuters and pedestrians.`},{id:`POL-2026-9400`,citizen:`Mohan Lal`,phone:`+91 21098 76543`,email:`mohan.l@gmail.com`,category:`Water Supply`,dept:`Jal Board`,priority:`Medium`,status:`Under Review`,date:`26 Jul 2026`,location:`Jaipur, Mansarovar`,desc:`Contaminated water supply. Water appears yellow and has a foul smell. Multiple residents have reported stomach issues after consuming tap water.`}],Ve=[
{name:`Ministry of Jal Shakti (Water Supply & Jal Board)`,short:`Jal Board`,icon:(0,x.jsx)(GoiDeptLogo,{ministry:`JAL SHAKTI`,color:`#0284C7`}),color:`#0284C7`,complaints:312,resolved:278,officers:18,head:`Shri. Anil Verma`},
{name:`Ministry of Road Transport & Highways (CPWD / PWD)`,short:`Roads & PWD`,icon:(0,x.jsx)(GoiDeptLogo,{ministry:`MoRTH · PWD`,color:`#D95F00`}),color:`#D95F00`,complaints:421,resolved:318,officers:24,head:`Smt. Rekha Gupta`},
{name:`Ministry of Power (Electricity & DISCOM)`,short:`DISCOM`,icon:(0,x.jsx)(GoiDeptLogo,{ministry:`MIN. OF POWER`,color:`#B45309`}),color:`#B45309`,complaints:267,resolved:245,officers:15,head:`Shri. Ramesh Nair`},
{name:`Ministry of Housing & Urban Affairs (Swachh Bharat / Municipal)`,short:`Municipal Corp.`,icon:(0,x.jsx)(GoiDeptLogo,{ministry:`MoHUA · URBAN`,color:`#138808`}),color:`#138808`,complaints:198,resolved:168,officers:12,head:`Shri. Dev Prakash`},
{name:`Ministry of Health & Family Welfare (NHM / Health Dept.)`,short:`Health Dept.`,icon:(0,x.jsx)(GoiDeptLogo,{ministry:`MoHFW · HEALTH`,color:`#BE185D`}),color:`#BE185D`,complaints:145,resolved:136,officers:10,head:`Dr. Sunita Rao`},
{name:`Ministry of Home Affairs (Police & Public Safety)`,short:`Police`,icon:(0,x.jsx)(GoiDeptLogo,{ministry:`MHA · POLICE`,color:`#0B2447`}),color:`#0B2447`,complaints:89,resolved:79,officers:8,head:`SP Vikram Singh`},
{name:`Ministry of Education (School & Higher Education Dept.)`,short:`Education`,icon:(0,x.jsx)(GoiDeptLogo,{ministry:`EDUCATION`,color:`#4338CA`}),color:`#4338CA`,complaints:67,resolved:65,officers:6,head:`Smt. Priya Iyer`}
],He=[{id:`U-001`,name:`Ramesh Kumar Gupta`,email:`ramesh.gupta@gov.in`,role:`Department Admin`,dept:`Roads & PWD`,status:`Active`,joined:`15 Jan 2026`},{id:`U-002`,name:`Sunita Rao Devi`,email:`sunita.rao@gov.in`,role:`Supervisor`,dept:`Health Dept.`,status:`Active`,joined:`22 Feb 2026`},{id:`U-003`,name:`Vikram Singh Chauhan`,email:`vikram.singh@gov.in`,role:`Officer`,dept:`Jal Board`,status:`Active`,joined:`3 Mar 2026`},{id:`U-004`,name:`Priya Krishnaswamy`,email:`priya.k@gov.in`,role:`Manager`,dept:`Municipal Corp.`,status:`Active`,joined:`11 Mar 2026`},{id:`U-005`,name:`Deepak Mehta Patel`,email:`deepak.m@gov.in`,role:`Officer`,dept:`DISCOM`,status:`Inactive`,joined:`28 Apr 2026`},{id:`U-006`,name:`Ananya Krishnamurthy`,email:`ananya.k@gov.in`,role:`Supervisor`,dept:`Education Dept.`,status:`Active`,joined:`5 May 2026`}],Ue=[{id:1,type:`high`,title:`High Priority Complaint`,desc:`POL-2026-9421 — Road damage in Delhi requires immediate attention.`,time:`2 min ago`,read:!1},{id:2,type:`assignment`,title:`Complaint Assigned`,desc:`POL-2026-9418 assigned to Officer Vikram Singh, DISCOM.`,time:`15 min ago`,read:!1},{id:3,type:`high`,title:`High Priority Complaint`,desc:`POL-2026-9405 — Street lighting failure in Bangalore flagged urgent.`,time:`42 min ago`,read:!1},{id:4,type:`resolved`,title:`Complaint Resolved`,desc:`POL-2026-9410 marked resolved by Health Dept. officer.`,time:`1 hr ago`,read:!1},{id:5,type:`system`,title:`Weekly Report Ready`,desc:`Complaint analytics report for Week 30, 2026 is available.`,time:`3 hrs ago`,read:!0},{id:6,type:`assignment`,title:`New User Registration`,desc:`Officer Ananya Krishnamurthy registered and awaiting approval.`,time:`5 hrs ago`,read:!0},{id:7,type:`resolved`,title:`Complaint Resolved`,desc:`POL-2026-9408 — Education dept. water issue resolved.`,time:`1 day ago`,read:!0}],We=[{id:`admin-dashboard`,label:`Dashboard`,icon:(0,x.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z`})})},{id:`admin-complaints`,label:`Complaints`,icon:(0,x.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z`})}),badge:3},{id:`admin-departments`,label:`Departments`,icon:(0,x.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4`})}),dividerAfter:!0},{id:`admin-analytics`,label:`Analytics`,icon:(0,x.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`})})},{id:`admin-heatmap`,label:`Heatmap`,icon:(0,x.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7`})})},{id:`admin-prediction`,label:`Prediction`,icon:(0,x.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M13 10V3L4 14h7v7l9-11h-7z`})}),dividerAfter:!0},{id:`admin-reports`,label:`Reports`,icon:(0,x.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z`})})},{id:`admin-notifications`,label:`Notifications`,icon:(0,x.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9`})}),badge:4},{id:`admin-ai`,label:`AI Intelligence`,icon:(0,x.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-2`})}),dividerAfter:!0},{id:`admin-users`,label:`User Management`,icon:(0,x.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z`})})},{id:`admin-settings`,label:`Settings`,icon:(0,x.jsxs)(`svg`,{className:`w-5 h-5`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:[(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z`}),(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M15 12a3 3 0 11-6 0 3 3 0 016 0z`})]})}];function Ge({expanded:e,setExpanded:t,activePage:n,navigate:r}){let i=e=>{We.find(t=>t.id===e)?.placeholder||r(e)};return(0,x.jsxs)(`aside`,{className:`flex flex-col flex-shrink-0 h-full overflow-hidden`,style:{width:e?240:64,transition:`width 0.28s cubic-bezier(0.4,0,0.2,1)`,background:`#FFFFFF`,backdropFilter:`blur(20px)`,borderRight:`1px solid #CBD5E1`,position:`relative`,zIndex:20},children:[(0,x.jsxs)(`div`,{className:`flex items-center h-16 px-4 flex-shrink-0`,style:{borderBottom:`1px solid #CBD5E1`},children:[(0,x.jsx)(`div`,{className:`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0`,style:{background:`linear-gradient(135deg, #138808, #0057a8)`},children:(0,x.jsx)(`span`,{className:`text-white font-bold text-sm`,style:{fontFamily:`Poppins`},children:`P`})}),e&&(0,x.jsxs)(`span`,{className:`ml-3 text-white font-bold text-lg tracking-wide whitespace-nowrap overflow-hidden`,style:{fontFamily:`Poppins`},children:[`POLI`,(0,x.jsx)(`span`,{style:{color:`#138808`},children:`SENCE`})]}),(0,x.jsx)(`button`,{onClick:()=>t(!e),className:`ml-auto w-7 h-7 rounded-lg flex items-center justify-center text-white/40 hover:text-white/80 hover:bg-white/08 transition-all flex-shrink-0`,children:(0,x.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,style:{transform:e?`rotate(180deg)`:`none`,transition:`transform 0.28s`},children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M9 5l7 7-7 7`})})})]}),(0,x.jsx)(`nav`,{className:`flex-1 overflow-y-auto py-3 space-y-0.5 px-2`,children:We.map(t=>{let r=n===t.id,a=t.placeholder;return(0,x.jsxs)(`div`,{children:[(0,x.jsxs)(`button`,{onClick:()=>i(t.id),title:e?void 0:t.label,className:`w-full flex items-center gap-3 px-2.5 py-2.5 rounded-xl transition-all group relative
                  ${r?`text-white`:a?`text-white/25 cursor-default`:`text-white/50 hover:text-white/90 hover:bg-white/05`}`,style:r?{background:`rgba(19,136,8,0.15)`,border:`1px solid rgba(19,136,8,0.2)`}:{},children:[(0,x.jsx)(`span`,{className:`flex-shrink-0 ${r?`text-cyan-400`:``}`,children:t.icon}),e&&(0,x.jsx)(`span`,{className:`text-sm font-medium whitespace-nowrap overflow-hidden flex-1 text-left`,style:{fontFamily:`Inter`},children:t.label}),e&&a&&(0,x.jsx)(`span`,{className:`text-xs px-1.5 py-0.5 rounded text-white/30 flex-shrink-0`,style:{background:`#F1F5F9`,fontSize:`9px`,letterSpacing:`0.05em`},children:`SOON`}),e&&t.badge&&!a&&(0,x.jsx)(`span`,{className:`ml-auto text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0`,style:{background:`#D95F00`,color:`white`,fontSize:`10px`},children:t.badge}),!e&&t.badge&&!a&&(0,x.jsx)(`span`,{className:`absolute top-1 right-1 w-2 h-2 rounded-full`,style:{background:`#D95F00`}})]}),t.dividerAfter&&(0,x.jsx)(`div`,{className:`my-2 mx-2`,style:{borderTop:`1px solid #CBD5E1`}})]},t.id)})}),(0,x.jsx)(`div`,{className:`px-2 py-3 flex-shrink-0`,style:{borderTop:`1px solid #CBD5E1`},children:(0,x.jsxs)(`button`,{onClick:()=>r(`home`),className:`w-full flex items-center gap-3 px-2.5 py-2.5 rounded-xl text-white/40 hover:text-red-400 hover:bg-red-400/08 transition-all`,children:[(0,x.jsx)(`svg`,{className:`w-5 h-5 flex-shrink-0`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1`})}),e&&(0,x.jsx)(`span`,{className:`text-sm font-medium`,style:{fontFamily:`Inter`},children:`Logout`})]})})]})}function Ke({activePage:e,navigate:t}){
let[n,r]=(0,b.useState)(``),i=We.find(t=>t.id===e)?.label||`Dashboard`;
return(0,x.jsxs)(`header`,{
className:`flex items-center justify-between gap-4 px-6 h-16 flex-shrink-0`,
style:{background:`#FFFFFF`,borderTop:`3px solid #FF9933`,borderBottom:`2px solid #138808`,boxShadow:`0 2px 10px rgba(11,36,71,0.05)`,position:`sticky`,top:0,zIndex:10},
children:[
(0,x.jsxs)(`div`,{
className:`flex items-center gap-3 flex-shrink-0`,
children:[
(0,x.jsx)(`button`,{
type:`button`,
onClick:()=>t(e===`admin-dashboard`?`home`:`admin-dashboard`),
className:`px-3 py-1.5 rounded-lg text-xs font-bold transition-all`,
style:{background:`#FFF5EB`,color:`#C2410C`,border:`1px solid #FDBA74`},
children:`← Back`
}),
(0,x.jsxs)(`div`,{
className:`flex items-center gap-2 text-sm`,
children:[
(0,x.jsx)(`span`,{className:`font-medium hidden sm:inline`,style:{color:`#64748B`},children:`Government Admin`}),
(0,x.jsx)(`span`,{className:`hidden sm:inline`,style:{color:`#CBD5E1`},children:`/`}),
(0,x.jsx)(`span`,{className:`font-bold`,style:{color:`#0B2447`,fontFamily:`Poppins`},children:i})
]
})
]
}),
(0,x.jsx)(`div`,{
className:`flex-1 max-w-md mx-4 hidden md:block`,
children:(0,x.jsxs)(`div`,{
className:`relative`,
children:[
(0,x.jsx)(`svg`,{className:`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2`,style:{color:`#64748B`},fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z`})}),
(0,x.jsx)(`input`,{
className:`w-full pl-10 pr-4 py-2 rounded-lg text-xs outline-none`,
style:{background:`#F8FAFC`,border:`1px solid #CBD5E1`,color:`#0B2447`,fontFamily:`Inter`},
placeholder:`Search complaints, departments, officers…`,
value:n,
onChange:e=>r(e.target.value)
})
]
})
}),
(0,x.jsxs)(`div`,{
className:`flex items-center gap-3 flex-shrink-0`,
children:[
(0,x.jsxs)(`button`,{
onClick:()=>t(`admin-notifications`),
className:`relative w-9 h-9 rounded-lg flex items-center justify-center transition-all`,
style:{background:`#F8FAFC`,border:`1px solid #CBD5E1`,color:`#0B2447`},
title:`Notifications`,
children:[
(0,x.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.8,d:`M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9`})}),
(0,x.jsx)(`span`,{className:`absolute top-1.5 right-1.5 w-2 h-2 rounded-full`,style:{background:`#D95F00`}})
]
}),
(0,x.jsx)(`button`,{
onClick:()=>t(`admin-settings`),
className:`w-9 h-9 rounded-lg flex items-center justify-center transition-all`,
style:{background:`#F8FAFC`,border:`1px solid #CBD5E1`,color:`#0B2447`},
title:`Settings`,
children:(0,x.jsxs)(`svg`,{className:`w-4 h-4`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:[(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.8,d:`M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z`}),(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.8,d:`M15 12a3 3 0 11-6 0 3 3 0 016 0z`})]})
}),
(0,x.jsxs)(`button`,{
onClick:()=>t(`admin-profile`),
className:`flex items-center gap-2.5 px-3 py-1.5 rounded-lg transition-all`,
style:{background:`#F8FAFC`,border:`1px solid #CBD5E1`},
children:[
(0,x.jsx)(`img`,{src:`https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg`,alt:`GOI`,className:`w-5 h-6 object-contain flex-shrink-0`}),
(0,x.jsxs)(`div`,{
className:`hidden sm:block text-left`,
children:[
(0,x.jsx)(`div`,{className:`text-xs font-bold leading-none`,style:{color:`#0B2447`,fontFamily:`Poppins`},children:`Admin Officer`}),
(0,x.jsx)(`div`,{className:`text-xs mt-0.5`,style:{color:`#138808`,fontSize:`10px`,fontWeight:700},children:`MeitY · District Admin`})
]
})
]
})
]
})
]
})
}
function qe({navigate:e}){let uCtrl=(0,b.useContext)(GovUIContext),liveComplaints=uCtrl.complaints||Be,extraCount=Math.max(0,liveComplaints.length-8),pendingCount=412+liveComplaints.filter(x=>x.isLive&&x.status!==`Resolved`).length,resolvedCount=2268+liveComplaints.filter(x=>x.isLive&&x.status===`Resolved`).length,t=[{label:`Total Complaints`,value:(2847+extraCount).toLocaleString(),change:`+12%`,color:`#138808`,icon:(0,x.jsx)(`svg`,{className:`w-6 h-6`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z`})}),sparkData:[180,220,195,280,310,290,320,340]},{label:`Pending`,value:String(pendingCount),change:`-8%`,color:`#D95F00`,icon:(0,x.jsx)(`svg`,{className:`w-6 h-6`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z`})}),sparkData:[60,80,72,90,65,55,48,45]},{label:`Resolved`,value:resolvedCount.toLocaleString(),change:`+18%`,color:`#10b981`,icon:(0,x.jsx)(`svg`,{className:`w-6 h-6`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z`})}),sparkData:[120,145,130,190,220,210,240,260]},{label:`Departments`,value:`14`,change:`+2`,color:`#0B2447`,icon:(0,x.jsx)(`svg`,{className:`w-6 h-6`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4`})}),sparkData:[10,10,11,11,12,13,13,14]}],n=[234,312,289,401,356,289,423],r=[`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`],i=liveComplaints.slice(0,6),a=[{label:`Register Complaint`,icon:`📝`,action:()=>e(`register`)},{label:`Manage Departments`,icon:`🏛️`,action:()=>e(`admin-departments`)},{label:`View Reports`,icon:`📊`,action:()=>e(`admin-reports`)},{label:`User Management`,icon:`👥`,action:()=>e(`admin-users`)}],o={Pending:`#D95F00`,"Under Review":`#138808`,Assigned:`#0B2447`,"In Progress":`#fbbf24`,Resolved:`#10b981`};return(0,x.jsxs)(`div`,{className:`p-6 space-y-6`,children:[(0,x.jsx)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4`,children:t.map(e=>(0,x.jsxs)(`div`,{className:`rounded-2xl p-5`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #CBD5E1`},children:[(0,x.jsxs)(`div`,{className:`flex items-start justify-between mb-4`,children:[(0,x.jsx)(`div`,{className:`w-11 h-11 rounded-xl flex items-center justify-center`,style:{background:`${e.color}15`,color:e.color},children:e.icon}),(0,x.jsx)(`span`,{className:`text-xs font-semibold px-2 py-0.5 rounded-full`,style:{background:e.change.startsWith(`+`)?`rgba(16,185,129,0.12)`:`rgba(239,68,68,0.12)`,color:e.change.startsWith(`+`)?`#10b981`:`#f87171`},children:e.change})]}),(0,x.jsx)(`div`,{className:`text-2xl font-bold text-white mb-1`,style:{fontFamily:`Poppins`},children:e.value}),(0,x.jsx)(`div`,{className:`text-white/45 text-xs mb-3`,children:e.label}),(0,x.jsx)(`div`,{className:`flex items-end gap-0.5 h-8`,children:e.sparkData.map((t,n)=>{let r=Math.max(...e.sparkData);return(0,x.jsx)(`div`,{className:`flex-1 rounded-sm`,style:{height:`${t/r*100}%`,background:e.color,opacity:.3+n/e.sparkData.length*.7}},n)})})]},e.label))}),(0,x.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-3 gap-4`,children:[(0,x.jsxs)(`div`,{className:`lg:col-span-2 rounded-2xl p-5`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #CBD5E1`},children:[(0,x.jsxs)(`div`,{className:`flex items-center justify-between mb-4`,children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h3`,{className:`text-white font-semibold`,style:{fontFamily:`Poppins`},children:`Monthly Complaint Trend`}),(0,x.jsx)(`p`,{className:`text-white/35 text-xs mt-0.5`,children:`Feb — Aug 2026`})]}),(0,x.jsx)(`span`,{className:`text-xs px-2.5 py-1 rounded-lg text-green-400`,style:{background:`rgba(16,185,129,0.1)`},children:`+12.3% MoM`})]}),(0,x.jsx)(Le,{data:n,labels:r,color:`#138808`})]}),(0,x.jsxs)(`div`,{className:`rounded-2xl p-5`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #CBD5E1`},children:[(0,x.jsx)(`h3`,{className:`text-white font-semibold mb-4`,style:{fontFamily:`Poppins`},children:`Resolution Metrics`}),(0,x.jsxs)(`div`,{className:`grid grid-cols-2 gap-4`,children:[(0,x.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,x.jsx)(Re,{pct:94,color:`#10b981`}),(0,x.jsx)(`span`,{className:`text-white/45 text-xs text-center`,children:`Resolution Rate`})]}),(0,x.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,x.jsx)(Re,{pct:88,color:`#138808`}),(0,x.jsx)(`span`,{className:`text-white/45 text-xs text-center`,children:`On-time Rate`})]}),(0,x.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,x.jsx)(Re,{pct:91,color:`#0B2447`,size:84}),(0,x.jsx)(`span`,{className:`text-white/45 text-xs text-center`,children:`Satisfaction`})]}),(0,x.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,x.jsx)(Re,{pct:76,color:`#D95F00`,size:84}),(0,x.jsx)(`span`,{className:`text-white/45 text-xs text-center`,children:`Dept. Coverage`})]})]})]})]}),(0,x.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-3 gap-4`,children:[(0,x.jsxs)(`div`,{className:`lg:col-span-2 rounded-2xl p-5`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #CBD5E1`},children:[(0,x.jsxs)(`div`,{className:`flex items-center justify-between mb-4`,children:[(0,x.jsx)(`h3`,{className:`text-white font-semibold`,style:{fontFamily:`Poppins`},children:`Recent Complaints`}),(0,x.jsx)(`button`,{onClick:()=>e(`admin-complaints`),className:`text-cyan-400 text-xs hover:underline`,children:`View All`})]}),(0,x.jsx)(`div`,{className:`space-y-2.5`,children:i.map(e=>(0,x.jsxs)(`div`,{className:`flex items-center gap-3 p-3 rounded-xl transition-all hover:bg-white/04`,style:{border:`1px solid rgba(255,255,255,0.05)`},children:[(0,x.jsx)(`div`,{className:`w-1.5 h-8 rounded-full flex-shrink-0`,style:{background:o[e.status]||`#138808`}}),(0,x.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,x.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,x.jsx)(`span`,{className:`text-white text-xs font-semibold`,children:e.id}),(0,x.jsx)(`span`,{className:`text-white/40 text-xs`,children:`·`}),(0,x.jsx)(`span`,{className:`text-white/60 text-xs truncate`,children:e.citizen})]}),(0,x.jsxs)(`div`,{className:`text-white/35 text-xs mt-0.5 truncate`,children:[e.category,` · `,e.location]})]}),(0,x.jsxs)(`div`,{className:`flex items-center gap-2 flex-shrink-0`,children:[(0,x.jsx)(`span`,{className:`text-xs font-semibold px-2 py-0.5 rounded-full`,style:{background:`${o[e.status]||`#138808`}18`,color:o[e.status]||`#138808`},children:e.status}),(0,x.jsx)(`span`,{className:`text-xs px-1.5 py-0.5 rounded font-bold ${e.priority===`High`?`text-red-400`:e.priority===`Medium`?`text-yellow-400`:`text-green-400`}`,style:{background:e.priority===`High`?`rgba(239,68,68,0.1)`:e.priority===`Medium`?`rgba(251,191,36,0.1)`:`rgba(16,185,129,0.1)`},children:e.priority})]})]},e.id))})]}),(0,x.jsxs)(`div`,{className:`space-y-4`,children:[(0,x.jsxs)(`div`,{className:`rounded-2xl p-5`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #CBD5E1`},children:[(0,x.jsx)(`h3`,{className:`text-white font-semibold mb-4`,style:{fontFamily:`Poppins`},children:`Quick Actions`}),(0,x.jsx)(`div`,{className:`grid grid-cols-2 gap-2`,children:a.map(e=>(0,x.jsxs)(`button`,{onClick:e.action,className:`flex flex-col items-center gap-2 p-3 rounded-xl transition-all hover:bg-white/08 text-center`,style:{background:`#F8FAFC`,border:`1px solid #CBD5E1`},children:[(0,x.jsx)(`span`,{className:`text-2xl`,children:e.icon}),(0,x.jsx)(`span`,{className:`text-white/65 text-xs leading-tight`,children:e.label})]},e.label))})]}),(0,x.jsxs)(`div`,{className:`rounded-2xl p-5`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #CBD5E1`},children:[(0,x.jsx)(`h3`,{className:`text-white font-semibold mb-4`,style:{fontFamily:`Poppins`},children:`Dept. Performance`}),(0,x.jsx)(`div`,{className:`space-y-3`,children:Ve.slice(0,4).map(e=>(0,x.jsx)(ze,{label:e.short,value:e.resolved,max:e.complaints,color:e.color},e.name))})]})]})]})]})}function Je({navigate:e}){
let uCtrl=(0,b.useContext)(GovUIContext),
liveList=uCtrl.complaints||Be,
toast=S(),
[t,n]=(0,b.useState)(``),[r,i]=(0,b.useState)(`All`),[a,o]=(0,b.useState)(`All`),[s,c]=(0,b.useState)(`All`),[l,u]=(0,b.useState)(null),
activeComplaint=l?(liveList.find(x=>x.id===l.id)||l):null,
d=[`All`,`Pending`,`Under Review`,`Assigned`,`In Progress`,`Resolved`],
f=[`All`,`High`,`Medium`,`Low`],
p=[`All`,...Array.from(new Set(liveList.map(e=>e.dept)))],
m=liveList.filter(e=>{
let n=!t||e.id.toLowerCase().includes(t.toLowerCase())||e.citizen.toLowerCase().includes(t.toLowerCase())||e.category.toLowerCase().includes(t.toLowerCase())||(e.location||``).toLowerCase().includes(t.toLowerCase()),
i=r===`All`||e.status===r,
o=a===`All`||e.priority===a,
c=s===`All`||e.dept===s;
return n&&i&&o&&c
}),
h={
Pending:{bg:`#FFF5EB`,text:`#C2410C`,border:`#FDBA74`,dot:`#EA580C`},
"Under Review":{bg:`#EFF6FF`,text:`#1D4ED8`,border:`#BFDBFE`,dot:`#2563EB`},
Assigned:{bg:`#F1F5F9`,text:`#0B2447`,border:`#CBD5E1`,dot:`#0B2447`},
"In Progress":{bg:`#FEF3C7`,text:`#B45309`,border:`#FDE68A`,dot:`#D97706`},
Resolved:{bg:`#EAF7EC`,text:`#138808`,border:`#A8DFB2`,dot:`#138808`}
},
g={
High:{bg:`#FEF2F2`,text:`#B91C1C`,border:`#FECACA`},
Medium:{bg:`#FEF3C7`,text:`#B45309`,border:`#FDE68A`},
Low:{bg:`#EAF7EC`,text:`#138808`,border:`#A8DFB2`}
};
return activeComplaint?(0,x.jsx)(Ye,{complaint:activeComplaint,onBack:()=>u(null)}):(0,x.jsxs)(`div`,{
style:{padding:`24px`,display:`flex`,flexDirection:`column`,gap:`18px`},
children:[
(0,x.jsxs)(`div`,{
style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,flexWrap:`wrap`,gap:`14px`,padding:`18px 22px`,background:`#FFFFFF`,border:`1px solid #CBD5E1`,borderTop:`4px solid #FF9933`,borderBottom:`2px solid #138808`,borderRadius:`12px`,boxShadow:`0 3px 12px rgba(11,36,71,0.05)`},
children:[
(0,x.jsxs)(`div`,{
children:[
(0,x.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,marginBottom:`2px`},children:[
(0,x.jsx)(`span`,{style:{width:`8px`,height:`8px`,borderRadius:`50%`,background:`#138808`,display:`inline-block`}}),
(0,x.jsx)(`span`,{style:{fontSize:`11px`,fontWeight:800,color:`#C2410C`,letterSpacing:`0.6px`},children:`CPGRAMS · LIVE PUBLIC GRIEVANCE REDRESSAL QUEUE (SYNCED WITH CITIZEN & STRATEGY PORTALS)`})
]}),
(0,x.jsx)(`h2`,{style:{color:`#0B2447`,fontFamily:`Poppins, sans-serif`,fontSize:`20px`,fontWeight:700,margin:0},children:`Citizen Complaint Management`}),
(0,x.jsxs)(`p`,{style:{color:`#475569`,fontSize:`12.5px`,marginTop:`3px`},children:[`Showing `,m.length,` of `,liveList.length,` live registered public grievances across Government of India departments`]})
]
}),
(0,x.jsxs)(`div`,{
style:{display:`flex`,alignItems:`center`,gap:`10px`,flexWrap:`wrap`},
children:[
(0,x.jsx)(`button`,{
type:`button`,
onClick:()=>e(`register`),
style:{height:`38px`,padding:`0 16px`,borderRadius:`8px`,fontSize:`12.5px`,fontWeight:700,background:`#EAF7EC`,color:`#138808`,border:`1.5px solid #138808`,cursor:`pointer`},
children:`+ Raise New Citizen Complaint`
}),
(0,x.jsx)(`button`,{
type:`button`,
onClick:()=>{n(``),i(`All`),o(`All`),c(`All`)},
style:{height:`38px`,padding:`0 16px`,borderRadius:`8px`,fontSize:`12.5px`,fontWeight:700,background:`#F8FAFC`,color:`#0B2447`,border:`1.5px solid #94A3B8`,cursor:`pointer`},
children:`Reset Filters`
}),
(0,x.jsx)(`button`,{
type:`button`,
className:`btn-orange`,
style:{height:`38px`,padding:`0 18px`,borderRadius:`8px`,fontSize:`12.5px`,fontWeight:700,cursor:`pointer`},
onClick:()=>window.print(),
children:`🖨️ Print / Export Register`
})
]
})
]
}),
(0,x.jsx)(`div`,{
style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(190px, 1fr))`,gap:`14px`},
children:[
{label:`Total Registered Grievances`,val:liveList.length,border:`#0B2447`,bg:`#FFFFFF`,filter:`All`},
{label:`Pending Review`,val:liveList.filter(x=>x.status===`Pending`||x.status===`Under Review`).length,border:`#D95F00`,bg:`#FFF9F2`,filter:`Pending`},
{label:`In Progress / Assigned`,val:liveList.filter(x=>x.status===`Assigned`||x.status===`In Progress`).length,border:`#0284C7`,bg:`#F0F9FF`,filter:`In Progress`},
{label:`Disposed & Resolved`,val:liveList.filter(x=>x.status===`Resolved`).length,border:`#138808`,bg:`#F2FAF3`,filter:`Resolved`}
].map(k=>(0,x.jsxs)(`button`,{
type:`button`,
onClick:()=>i(k.filter),
style:{textAlign:`left`,padding:`16px 18px`,borderRadius:`12px`,background:k.bg,border:r===k.filter?`2px solid ${k.border}`:`1px solid #CBD5E1`,borderLeft:`5px solid ${k.border}`,boxShadow:`0 2px 8px rgba(11,36,71,0.04)`,cursor:`pointer`},
children:[
(0,x.jsx)(`div`,{style:{fontSize:`12px`,fontWeight:700,color:`#475569`},children:k.label}),
(0,x.jsx)(`div`,{style:{fontSize:`24px`,fontWeight:800,color:`#0B2447`,fontFamily:`Poppins, sans-serif`,marginTop:`4px`,lineHeight:1.1},children:k.val})
]
},k.label))
}),
(0,x.jsxs)(`div`,{
style:{padding:`16px 20px`,borderRadius:`12px`,background:`#FFFFFF`,border:`1px solid #CBD5E1`,boxShadow:`0 2px 10px rgba(11,36,71,0.04)`,display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:`12px`},
children:[
(0,x.jsxs)(`div`,{
style:{position:`relative`,flex:`1 1 280px`,minWidth:`240px`},
children:[
(0,x.jsx)(`svg`,{style:{width:`16px`,height:`16px`,position:`absolute`,left:`13px`,top:`50%`,transform:`translateY(-50%)`,color:`#64748B`,pointerEvents:`none`},fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z`})}),
(0,x.jsx)(`input`,{
style:{width:`100%`,height:`40px`,padding:`0 14px 0 38px`,borderRadius:`8px`,border:`1.5px solid #94A3B8`,background:`#F8FAFC`,color:`#0B2447`,fontSize:`13px`,fontWeight:500,outline:`none`,boxSizing:`border-box`},
placeholder:`Search by Reference ID (POL-2026-XXXX), Citizen Name, Location, or Category…`,
value:t,
onChange:e=>n(e.target.value)
})
]
}),
(0,x.jsx)(`div`,{
style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:`10px`},
children:[{label:`Status`,value:r,set:i,options:d},{label:`Priority`,value:a,set:o,options:f},{label:`Department`,value:s,set:c,options:p}].map(e=>(0,x.jsxs)(`div`,{
style:{display:`flex`,alignItems:`center`,gap:`6px`},
children:[
(0,x.jsx)(`span`,{style:{fontSize:`11.5px`,fontWeight:700,color:`#475569`,whiteSpace:`nowrap`},children:`${e.label}:`}),
(0,x.jsx)(`select`,{
value:e.value,
onChange:t=>e.set(t.target.value),
style:{height:`40px`,padding:`0 28px 0 12px`,borderRadius:`8px`,border:`1.5px solid #94A3B8`,background:`#FFFFFF`,color:`#0B2447`,fontSize:`12.5px`,fontWeight:600,minWidth:`138px`,cursor:`pointer`,outline:`none`},
children:e.options.map(t=>(0,x.jsx)(`option`,{value:t,children:t===`All`?`All ${e.label}s`:t},t))
})
]
},e.label))
})
]
}),
(0,x.jsx)(`div`,{
style:{borderRadius:`12px`,overflow:`hidden`,background:`#FFFFFF`,border:`1px solid #CBD5E1`,borderTop:`3px solid #0B2447`,boxShadow:`0 4px 16px rgba(11,36,71,0.05)`},
children:(0,x.jsx)(`div`,{
style:{overflowX:`auto`,width:`100%`},
children:(0,x.jsxs)(`table`,{
style:{width:`100%`,borderCollapse:`collapse`,minWidth:`880px`,textAlign:`left`},
children:[
(0,x.jsx)(`thead`,{
children:(0,x.jsxs)(`tr`,{
style:{background:`#F1F5F9`,borderBottom:`2px solid #CBD5E1`},
children:[
[`REFERENCE ID & DATE`,`17%`],
[`CITIZEN & LOCATION`,`21%`],
[`MINISTRY / DEPARTMENT`,`22%`],
[`PRIORITY`,`11%`],
[`LIVE STATUS (QUICK UPDATE)`,`17%`],
[`ACTION`,`12%`]
].map(([lbl,w],idx)=>(0,x.jsx)(`th`,{
style:{width:w,padding:`14px 16px`,fontSize:`11px`,fontWeight:800,color:`#0B2447`,letterSpacing:`0.6px`,textTransform:`uppercase`,textAlign:idx===5?`right`:`left`,whiteSpace:`nowrap`},
children:lbl
},lbl))
})
}),
(0,x.jsx)(`tbody`,{
children:m.length===0?(0,x.jsx)(`tr`,{
children:(0,x.jsx)(`td`,{colSpan:6,style:{padding:`42px 20px`,textAlign:`center`,color:`#475569`,fontSize:`14px`,fontWeight:600},children:`No grievances match the selected filter criteria.`})
}):m.map((e,idx)=>{
let st=h[e.status]||h.Pending,pr=g[e.priority]||g.Medium;
return(0,x.jsxs)(`tr`,{
onClick:()=>u(e),
style:{borderBottom:`1px solid #E2E8F0`,background:e.isLive?`#F2FAF3`:idx%2===0?`#FFFFFF`:`#F8FAFC`,cursor:`pointer`,transition:`background 0.15s`},
children:[
(0,x.jsxs)(`td`,{
style:{padding:`14px 16px`,verticalAlign:`middle`},
children:[
(0,x.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`6px`,flexWrap:`wrap`},children:[
(0,x.jsx)(`span`,{style:{display:`inline-block`,padding:`3px 8px`,borderRadius:`6px`,background:`#EEF2FF`,border:`1px solid #C7D2FE`,color:`#0B2447`,fontSize:`12px`,fontWeight:800,fontFamily:`Poppins, sans-serif`},children:e.id}),
e.isLive&&(0,x.jsx)(`span`,{style:{padding:`2px 7px`,borderRadius:`999px`,background:`#138808`,color:`#FFFFFF`,fontSize:`9.5px`,fontWeight:800,letterSpacing:`0.4px`},children:`● LIVE`})
]}),
(0,x.jsxs)(`div`,{style:{fontSize:`11.5px`,color:`#64748B`,marginTop:`5px`,fontWeight:500},children:[`📅 Filed: `,e.date]})
]
}),
(0,x.jsxs)(`td`,{
style:{padding:`14px 16px`,verticalAlign:`middle`},
children:[
(0,x.jsx)(`div`,{style:{fontSize:`13.5px`,fontWeight:700,color:`#0B2447`},children:e.citizen}),
(0,x.jsxs)(`div`,{style:{fontSize:`11.5px`,color:`#475569`,marginTop:`3px`},children:[`📍 `,e.location,` · `,e.phone]})
]
}),
(0,x.jsx)(`td`,{
style:{padding:`14px 16px`,verticalAlign:`middle`},
children:(0,x.jsxs)(`div`,{
style:{display:`flex`,alignItems:`center`,gap:`10px`},
children:[
(0,x.jsx)(`img`,{src:`https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg`,alt:`GOI`,style:{width:`22px`,height:`26px`,objectFit:`contain`,flexShrink:0}}),
(0,x.jsxs)(`div`,{
children:[
(0,x.jsx)(`div`,{style:{fontSize:`13px`,fontWeight:700,color:`#0B2447`},children:e.dept}),
(0,x.jsx)(`div`,{style:{fontSize:`11.5px`,color:`#C2410C`,fontWeight:600,marginTop:`2px`},children:e.category})
]
})
]
})
}),
(0,x.jsx)(`td`,{
style:{padding:`14px 16px`,verticalAlign:`middle`},
children:(0,x.jsx)(`span`,{
style:{display:`inline-block`,padding:`4px 12px`,borderRadius:`999px`,background:pr.bg,color:pr.text,border:`1px solid ${pr.border}`,fontSize:`11.5px`,fontWeight:700,whiteSpace:`nowrap`},
children:e.priority
})
}),
(0,x.jsx)(`td`,{
style:{padding:`14px 16px`,verticalAlign:`middle`},
onClick:ev=>ev.stopPropagation(),
children:(0,x.jsx)(`select`,{
value:e.status,
onChange:ev=>{
let nextStatus=ev.target.value;
uCtrl.updateComplaint(e.id,{status:nextStatus});
toast({type:`success`,title:`Status Updated (${e.id})`,msg:`Marked as "${nextStatus}" — live synced to Citizen & Strategy portals.`});
},
style:{height:`32px`,padding:`0 10px`,borderRadius:`999px`,background:st.bg,color:st.text,border:`1.5px solid ${st.border}`,fontSize:`11.5px`,fontWeight:700,cursor:`pointer`,outline:`none`},
children:[`Pending`,`Under Review`,`Assigned`,`In Progress`,`Resolved`].map(sOpt=>(0,x.jsx)(`option`,{value:sOpt,style:{background:`#FFFFFF`,color:`#0B2447`},children:sOpt},sOpt))
})
}),
(0,x.jsx)(`td`,{
style:{padding:`14px 16px`,verticalAlign:`middle`,textAlign:`right`},
onClick:ev=>ev.stopPropagation(),
children:(0,x.jsx)(`button`,{
type:`button`,
onClick:()=>u(e),
style:{height:`34px`,padding:`0 14px`,borderRadius:`8px`,background:`#0B2447`,color:`#FFFFFF`,border:`1px solid #0B2447`,fontSize:`12px`,fontWeight:700,cursor:`pointer`,whiteSpace:`nowrap`},
children:`Inspect →`
})
})
]
},e.id)
})
})
]
})
})
})
]
})
}
function Ye({complaint:e,onBack:t}){
let uCtrl=(0,b.useContext)(GovUIContext),
[n,r]=(0,b.useState)(e.status),[i,a]=(0,b.useState)(e.priority),[o,s]=(0,b.useState)(e.dept),[c,l]=(0,b.useState)(e.officer||`Shri. Ramesh Gupta`),[u,d]=(0,b.useState)(``),[f,p]=(0,b.useState)(e.notes&&e.notes.length?e.notes:[`Initial review completed. Field inspection scheduled by Nodal Officer.`]),
toast=S(),
syncChanges=(patch)=>{
let next={status:n,priority:i,dept:o,officer:c,notes:f,...patch};
uCtrl.updateComplaint(e.id,next);
},
m=[
{label:`Submitted by Citizen`,date:e.date,done:!0,color:`#138808`},
{label:`AI Categorization & Triage`,date:e.date+` (Automated)`,done:!0,color:`#0B2447`},
{label:`Under Nodal Review`,date:e.date,done:n!==`Pending`,color:`#0284C7`},
{label:`Assigned to Field Officer (${c})`,date:e.date,done:[`Assigned`,`In Progress`,`Resolved`].includes(n),color:`#D95F00`},
{label:`Disposed & Resolved`,date:n===`Resolved`?`Resolved & Verified`:`Awaiting Final Disposal`,done:n===`Resolved`,color:`#138808`}
],
locCoords={
"Delhi":{lat:28.6139,lng:77.2090,bbox:`77.12,28.54,77.28,28.68`},
"Mumbai":{lat:19.0760,lng:72.8777,bbox:`72.80,19.00,72.95,19.15`},
"Hyderabad":{lat:17.3850,lng:78.4867,bbox:`78.40,17.30,78.56,17.46`},
"Bangalore":{lat:12.9716,lng:77.5946,bbox:`77.52,12.90,77.66,13.04`},
"Chennai":{lat:13.0827,lng:80.2707,bbox:`80.20,13.00,80.34,13.15`},
"Kolkata":{lat:22.5726,lng:88.3639,bbox:`88.30,22.50,88.44,22.64`},
"Pune":{lat:18.5204,lng:73.8567,bbox:`73.78,18.45,73.92,18.59`},
"Jaipur":{lat:26.9124,lng:75.7873,bbox:`75.70,26.84,75.86,26.98`},
"Lucknow":{lat:26.8467,lng:80.9462,bbox:`80.86,26.78,81.02,26.92`},
"Ahmedabad":{lat:23.0225,lng:72.5714,bbox:`72.50,22.95,72.64,23.09`}
},
cityKey=Object.keys(locCoords).find(k=>(e.location||``).toLowerCase().includes(k.toLowerCase()))||`Delhi`,
coord=e.lat&&e.lng?{lat:Number(e.lat),lng:Number(e.lng),bbox:`${Number(e.lng)-0.04},${Number(e.lat)-0.04},${Number(e.lng)+0.04},${Number(e.lat)+0.04}`}:locCoords[cityKey];
return(0,x.jsxs)(`div`,{
style:{padding:`24px`,display:`flex`,flexDirection:`column`,gap:`18px`},
children:[
(0,x.jsxs)(`div`,{
style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,flexWrap:`wrap`,gap:`12px`,padding:`16px 20px`,background:`#FFFFFF`,border:`1px solid #CBD5E1`,borderTop:`4px solid #FF9933`,borderBottom:`2px solid #138808`,borderRadius:`12px`},
children:[
(0,x.jsxs)(`div`,{
style:{display:`flex`,alignItems:`center`,gap:`12px`,flexWrap:`wrap`},
children:[
(0,x.jsx)(`button`,{
type:`button`,
onClick:t,
style:{height:`36px`,padding:`0 14px`,borderRadius:`8px`,background:`#FFF5EB`,color:`#C2410C`,border:`1px solid #FDBA74`,fontSize:`12.5px`,fontWeight:700,cursor:`pointer`},
children:`← Back to Complaint Register`
}),
(0,x.jsx)(`span`,{style:{color:`#CBD5E1`,fontWeight:700},children:`|`}),
(0,x.jsx)(`span`,{style:{fontSize:`16px`,fontWeight:800,color:`#0B2447`,fontFamily:`Poppins, sans-serif`},children:e.id}),
e.isLive&&(0,x.jsx)(`span`,{style:{padding:`2px 8px`,borderRadius:`999px`,background:`#138808`,color:`#FFFFFF`,fontSize:`10px`,fontWeight:800},children:`● LIVE CITIZEN GRIEVANCE`}),
(0,x.jsx)(`span`,{style:{fontSize:`12px`,color:`#475569`,fontWeight:600},children:`· ${e.category} (${o})`})
]
}),
(0,x.jsx)(`span`,{
style:{padding:`5px 14px`,borderRadius:`999px`,fontSize:`12px`,fontWeight:800,background:n===`Resolved`?`#EAF7EC`:`#FFF5EB`,color:n===`Resolved`?`#138808`:`#C2410C`,border:n===`Resolved`?`1px solid #A8DFB2`:`1px solid #FDBA74`},
children:`Current Status: ${n}`
})
]
}),
(0,x.jsxs)(`div`,{
className:`grid grid-cols-1 lg:grid-cols-3 gap-5`,
children:[
(0,x.jsxs)(`div`,{
className:`lg:col-span-2 space-y-4`,
children:[
(0,x.jsxs)(`div`,{
style:{padding:`20px`,borderRadius:`12px`,background:`#FFFFFF`,border:`1px solid #CBD5E1`},
children:[
(0,x.jsx)(`h3`,{style:{color:`#0B2447`,fontFamily:`Poppins, sans-serif`,fontSize:`14px`,fontWeight:700,textTransform:`uppercase`,letterSpacing:`0.5px`,marginBottom:`14px`,borderBottom:`1px solid #E2E8F0`,paddingBottom:`8px`},children:`1. Citizen & Grievance Particulars`}),
(0,x.jsx)(`div`,{
style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(180px, 1fr))`,gap:`14px`,marginBottom:`16px`},
children:[[`Citizen Name`,e.citizen],[`Registered Mobile`,e.phone],[`Email Address`,e.email],[`Ward / District`,e.location],[`Grievance Category`,e.category],[`Assigned Department`,o],[`Filing Date`,e.date],[`Priority Level`,i]].map(([lbl,val])=>(0,x.jsxs)(`div`,{
style:{padding:`10px 12px`,borderRadius:`8px`,background:`#F8FAFC`,border:`1px solid #E2E8F0`},
children:[
(0,x.jsx)(`div`,{style:{fontSize:`11px`,fontWeight:700,color:`#64748B`,textTransform:`uppercase`},children:lbl}),
(0,x.jsx)(`div`,{style:{fontSize:`13px`,fontWeight:700,color:`#0B2447`,marginTop:`3px`},children:val})
]
},lbl))
}),
(0,x.jsxs)(`div`,{
children:[
(0,x.jsx)(`div`,{style:{fontSize:`11.5px`,fontWeight:700,color:`#475569`,textTransform:`uppercase`,marginBottom:`6px`},children:`Detailed Grievance Statement`}),
(0,x.jsx)(`p`,{style:{padding:`14px`,borderRadius:`8px`,background:`#FFFDF9`,border:`1px solid #FDBA74`,color:`#1E293B`,fontSize:`13.5px`,lineHeight:1.6,margin:0},children:e.desc})
]
})
]
}),
(0,x.jsxs)(`div`,{
style:{borderRadius:`12px`,overflow:`hidden`,background:`#FFFFFF`,border:`1px solid #CBD5E1`},
children:[
(0,x.jsxs)(`div`,{
style:{padding:`12px 18px`,background:`#F1F5F9`,borderBottom:`1px solid #CBD5E1`,display:`flex`,alignItems:`center`,justifyContent:`space-between`},
children:[
(0,x.jsx)(`h3`,{style:{color:`#0B2447`,fontFamily:`Poppins, sans-serif`,fontSize:`13.5px`,fontWeight:700,margin:0},children:`2. Geotagged Incident Location Map (${e.location})`}),
(0,x.jsx)(`span`,{style:{fontSize:`11.5px`,fontWeight:700,color:`#138808`},children:`📍 GPS Coordinates: ${coord.lat.toFixed(4)}° N, ${coord.lng.toFixed(4)}° E`})
]
}),
(0,x.jsx)(`iframe`,{
title:`Grievance Location — ${e.location}`,
src:`https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(coord.bbox)}&layer=mapnik&marker=${coord.lat}%2C${coord.lng}`,
style:{width:`100%`,height:`240px`,border:`0`,display:`block`}
})
]
}),
(0,x.jsxs)(`div`,{
style:{padding:`20px`,borderRadius:`12px`,background:`#FFFFFF`,border:`1px solid #CBD5E1`},
children:[
(0,x.jsx)(`h3`,{style:{color:`#0B2447`,fontFamily:`Poppins, sans-serif`,fontSize:`14px`,fontWeight:700,textTransform:`uppercase`,letterSpacing:`0.5px`,marginBottom:`12px`},children:`3. Official File Notings & Inspection Remarks (Visible to Citizen Tracker)`}),
(0,x.jsx)(`div`,{
style:{display:`flex`,flexDirection:`column`,gap:`8px`,marginBottom:`12px`},
children:f.map((note,idx)=>(0,x.jsx)(`div`,{style:{padding:`10px 14px`,borderRadius:`8px`,background:`#F2FAF3`,border:`1px solid #A8DFB2`,color:`#0B2447`,fontSize:`13px`,fontWeight:500},children:`📝 ${note}`},idx))
}),
(0,x.jsxs)(`div`,{
style:{display:`flex`,gap:`10px`},
children:[
(0,x.jsx)(`input`,{
style:{flex:1,height:`40px`,padding:`0 14px`,borderRadius:`8px`,border:`1.5px solid #94A3B8`,background:`#F8FAFC`,color:`#0B2447`,fontSize:`13px`,outline:`none`},
placeholder:`Enter official inspection remark or file noting…`,
value:u,
onChange:ev=>d(ev.target.value),
onKeyDown:ev=>{
if(ev.key===`Enter`&&u.trim()){
let nextNotes=[...f,u.trim()];
p(nextNotes);
d(``);
syncChanges({notes:nextNotes});
toast({type:`success`,title:`File Noting Added`,msg:`Inspection remark saved and synced to Citizen Tracker.`});
}
}
}),
(0,x.jsx)(`button`,{
type:`button`,
className:`btn-cyan`,
style:{height:`40px`,padding:`0 18px`,fontSize:`12.5px`,fontWeight:700},
onClick:()=>{
if(u.trim()){
let nextNotes=[...f,u.trim()];
p(nextNotes);
d(``);
syncChanges({notes:nextNotes});
toast({type:`success`,title:`File Noting Added`,msg:`Inspection remark saved and synced to Citizen Tracker.`});
}
},
children:`Add Noting`
})
]
})
]
})
]
}),
(0,x.jsxs)(`div`,{
style:{display:`flex`,flexDirection:`column`,gap:`16px`},
children:[
(0,x.jsxs)(`div`,{
style:{padding:`20px`,borderRadius:`12px`,background:`#FFFFFF`,border:`1px solid #CBD5E1`},
children:[
(0,x.jsx)(`h3`,{style:{color:`#0B2447`,fontFamily:`Poppins, sans-serif`,fontSize:`14px`,fontWeight:700,textTransform:`uppercase`,letterSpacing:`0.5px`,marginBottom:`14px`},children:`Authority Assignment & Live Operations`}),
(0,x.jsxs)(`div`,{
style:{display:`flex`,flexDirection:`column`,gap:`12px`},
children:[
[[`Department`,o,val=>{s(val);syncChanges({dept:val})},Ve.map(x=>x.short)],[`Nodal Officer`,c,val=>{l(val);syncChanges({officer:val})},[`Shri. Ramesh Gupta`,`Smt. Rekha Gupta`,`Shri. Anil Verma`,`Dr. Sunita Rao`,`SP Vikram Singh`]],[`Priority Level`,i,val=>{a(val);syncChanges({priority:val})},[`High`,`Medium`,`Low`]],[`Current Status`,n,val=>{r(val);syncChanges({status:val})},[`Pending`,`Under Review`,`Assigned`,`In Progress`,`Resolved`]]].map(([lbl,val,setter,opts])=>(0,x.jsxs)(`div`,{
children:[
(0,x.jsx)(`label`,{style:{display:`block`,fontSize:`11.5px`,fontWeight:700,color:`#475569`,marginBottom:`5px`},children:lbl}),
(0,x.jsx)(`select`,{
value:val,
onChange:ev=>setter(ev.target.value),
style:{width:`100%`,height:`38px`,padding:`0 12px`,borderRadius:`8px`,border:`1.5px solid #94A3B8`,background:`#FFFFFF`,color:`#0B2447`,fontSize:`13px`,fontWeight:600},
children:opts.map(opt=>(0,x.jsx)(`option`,{value:opt,children:opt},opt))
})
]
},lbl))
]
}),
(0,x.jsxs)(`div`,{
style:{display:`flex`,flexDirection:`column`,gap:`10px`,marginTop:`16px`},
children:[
(0,x.jsx)(`button`,{
type:`button`,
className:`btn-orange`,
style:{width:`100%`,height:`40px`,fontSize:`13px`,fontWeight:700},
onClick:()=>{
syncChanges({});
toast({type:`success`,title:`Grievance Updated (${e.id})`,msg:`Status (${n}), Priority (${i}) & Officer (${c}) synced live across all portals.`});
},
children:`Save & Sync Changes`
}),
(0,x.jsx)(`button`,{
type:`button`,
style:{width:`100%`,height:`40px`,borderRadius:`8px`,background:`#138808`,color:`#FFFFFF`,border:`1px solid #0F6D06`,fontSize:`13px`,fontWeight:700,cursor:`pointer`},
onClick:()=>{
let resolvedNotes=[...f,`Grievance officially disposed and resolved by ${c} (${o}).`];
r(`Resolved`);
p(resolvedNotes);
syncChanges({status:`Resolved`,notes:resolvedNotes});
toast({type:`success`,title:`Grievance Resolved (${e.id})`,msg:`Complaint marked as Disposed & Resolved across Citizen, Admin & Strategy Portals.`});
},
children:`✓ Mark Complaint Resolved`
})
]
})
]
}),
(0,x.jsxs)(`div`,{
style:{padding:`20px`,borderRadius:`12px`,background:`#FFFFFF`,border:`1px solid #CBD5E1`},
children:[
(0,x.jsx)(`h3`,{style:{color:`#0B2447`,fontFamily:`Poppins, sans-serif`,fontSize:`14px`,fontWeight:700,textTransform:`uppercase`,letterSpacing:`0.5px`,marginBottom:`14px`},children:`Redressal Lifecycle`}),
(0,x.jsx)(`div`,{
style:{display:`flex`,flexDirection:`column`,gap:`12px`},
children:m.map((step,idx)=>(0,x.jsxs)(`div`,{
style:{display:`flex`,alignItems:`flex-start`,gap:`10px`},
children:[
(0,x.jsx)(`div`,{
style:{width:`24px`,height:`24px`,borderRadius:`50%`,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0,background:step.done?step.color:`#E2E8F0`,color:step.done?`#FFFFFF`:`#64748B`,fontSize:`11px`,fontWeight:800},
children:step.done?`✓`:idx+1
}),
(0,x.jsxs)(`div`,{
children:[
(0,x.jsx)(`div`,{style:{fontSize:`13px`,fontWeight:700,color:step.done?`#0B2447`:`#94A3B8`},children:step.label}),
(0,x.jsx)(`div`,{style:{fontSize:`11.5px`,color:`#64748B`},children:step.date})
]
})
]
},step.label))
})
]
})
]
})
]
})
]
})
}
function Xe(){let[e,t]=(0,b.useState)(!1),[n,r]=(0,b.useState)({name:``,head:``,officers:``});return(0,x.jsxs)(`div`,{className:`p-6 space-y-5`,children:[(0,x.jsxs)(`div`,{className:`flex items-center justify-between flex-wrap gap-3`,children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h2`,{className:`text-white font-bold text-xl`,style:{fontFamily:`Poppins`},children:`Department Management`}),(0,x.jsxs)(`p`,{className:`text-white/40 text-sm mt-0.5`,children:[`Future Department API · `,Ve.length,` departments active`]})]}),(0,x.jsxs)(`button`,{className:`btn-orange flex items-center gap-2 text-sm`,onClick:()=>t(!e),children:[(0,x.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M12 4v16m8-8H4`})}),`Create Department`]})]}),e&&(0,x.jsxs)(`div`,{className:`rounded-2xl p-5`,style:{background:`rgba(19,136,8,0.04)`,border:`1px solid rgba(19,136,8,0.15)`},children:[(0,x.jsx)(`h3`,{className:`text-cyan-400 font-semibold mb-4`,style:{fontFamily:`Poppins`},children:`New Department`}),(0,x.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-3 gap-4 mb-4`,children:[[`Department Name`,`name`],[`Department Head`,`head`],[`Initial Officers`,`officers`]].map(([e,t])=>(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`label`,{className:`block text-white/50 text-xs mb-1.5`,children:e}),(0,x.jsx)(`input`,{className:`input-field py-2 text-sm`,placeholder:e,value:n[t],onChange:e=>r(n=>({...n,[t]:e.target.value}))})]},t))}),(0,x.jsxs)(`div`,{className:`flex gap-3`,children:[(0,x.jsx)(`button`,{className:`btn-orange text-sm py-2 px-5`,onClick:()=>{t(!1),r({name:``,head:``,officers:``})},children:`Create Department`}),(0,x.jsx)(`button`,{className:`btn-cyan text-sm py-2 px-5`,onClick:()=>t(!1),children:`Cancel`})]})]}),(0,x.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4`,children:Ve.map(e=>{let t=Math.round(e.resolved/e.complaints*100);return(0,x.jsxs)(`div`,{className:`rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:shadow-xl`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid ${e.color}22`},children:[(0,x.jsxs)(`div`,{className:`flex items-center gap-3 mb-4`,children:[(0,x.jsx)(`div`,{className:`w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0`,style:{background:`${e.color}15`},children:e.icon}),(0,x.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,x.jsx)(`div`,{className:`text-white font-semibold text-sm truncate`,style:{fontFamily:`Poppins`},children:e.short}),(0,x.jsx)(`div`,{className:`text-white/40 text-xs truncate`,children:e.head})]}),(0,x.jsxs)(`span`,{className:`text-xs font-bold px-2 py-1 rounded-full flex-shrink-0`,style:{background:`${e.color}18`,color:e.color},children:[t,`%`]})]}),(0,x.jsx)(`div`,{className:`grid grid-cols-3 gap-2 mb-4 text-center`,children:[[`Complaints`,e.complaints],[`Resolved`,e.resolved],[`Officers`,e.officers]].map(([e,t])=>(0,x.jsxs)(`div`,{className:`rounded-xl py-2`,style:{background:`#F8FAFC`},children:[(0,x.jsx)(`div`,{className:`text-white font-bold text-base`,style:{fontFamily:`Poppins`},children:t}),(0,x.jsx)(`div`,{className:`text-white/35 text-xs`,children:e})]},e))}),(0,x.jsxs)(`div`,{className:`mb-4`,children:[(0,x.jsxs)(`div`,{className:`flex justify-between text-xs text-white/40 mb-1.5`,children:[(0,x.jsx)(`span`,{children:`Resolution rate`}),(0,x.jsxs)(`span`,{style:{color:e.color},children:[t,`%`]})]}),(0,x.jsx)(`div`,{className:`h-1.5 rounded-full`,style:{background:`#E2E8F0`},children:(0,x.jsx)(`div`,{className:`h-full rounded-full`,style:{width:`${t}%`,background:e.color}})})]}),(0,x.jsxs)(`div`,{className:`flex gap-2`,children:[(0,x.jsx)(`button`,{className:`flex-1 py-2 rounded-xl text-xs font-semibold transition-all`,style:{background:`${e.color}12`,color:e.color,border:`1px solid ${e.color}25`},children:`Manage`}),(0,x.jsx)(`button`,{className:`flex-1 py-2 rounded-xl text-xs font-semibold text-white/50 hover:text-white transition-all`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #CBD5E1`},children:`Assign Officers`})]})]},e.name)})})]})}function Ze(){let e=[{title:`Monthly Summary — August 2026`,type:`Monthly`,size:`2.4 MB`,date:`1 Aug 2026`,status:`Ready`},{title:`Weekly Complaint Report — Week 30`,type:`Weekly`,size:`840 KB`,date:`28 Jul 2026`,status:`Ready`},{title:`Monthly Summary — July 2026`,type:`Monthly`,size:`2.1 MB`,date:`1 Jul 2026`,status:`Ready`},{title:`Department Performance — Q2 2026`,type:`Quarterly`,size:`4.7 MB`,date:`1 Jun 2026`,status:`Ready`},{title:`Weekly Complaint Report — Week 29`,type:`Weekly`,size:`790 KB`,date:`21 Jul 2026`,status:`Ready`},{title:`Monthly Summary — June 2026`,type:`Monthly`,size:`1.9 MB`,date:`1 Jun 2026`,status:`Ready`}],t={Monthly:`#138808`,Weekly:`#0B2447`,Quarterly:`#D95F00`};return(0,x.jsxs)(`div`,{className:`p-6 space-y-5`,children:[(0,x.jsxs)(`div`,{className:`flex items-center justify-between flex-wrap gap-3`,children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h2`,{className:`text-white font-bold text-xl`,style:{fontFamily:`Poppins`},children:`Reports`}),(0,x.jsx)(`p`,{className:`text-white/40 text-sm mt-0.5`,children:`Future Report Generation API · PDF + Excel Export`})]}),(0,x.jsx)(`div`,{className:`flex gap-2`,children:(0,x.jsx)(`button`,{className:`btn-orange text-sm py-2 px-4 flex items-center gap-2`,onClick:()=>alert(`Future Report Generation API — Node.js + PDFKit`),children:`Generate Report`})})]}),(0,x.jsx)(`div`,{className:`grid grid-cols-2 md:grid-cols-4 gap-4`,children:[{label:`Total Reports`,value:`48`,color:`#138808`},{label:`This Month`,value:`12`,color:`#0B2447`},{label:`Downloaded`,value:`234`,color:`#10b981`},{label:`Pending Gen.`,value:`2`,color:`#D95F00`}].map(e=>(0,x.jsxs)(`div`,{className:`rounded-xl p-4 text-center`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #CBD5E1`},children:[(0,x.jsx)(`div`,{className:`text-2xl font-bold mb-1`,style:{color:e.color,fontFamily:`Poppins`},children:e.value}),(0,x.jsx)(`div`,{className:`text-white/40 text-xs`,children:e.label})]},e.label))}),(0,x.jsxs)(`div`,{className:`rounded-2xl overflow-hidden`,style:{border:`1px solid #CBD5E1`},children:[(0,x.jsxs)(`div`,{className:`px-5 py-3 flex items-center justify-between`,style:{background:`#F8FAFC`,borderBottom:`1px solid #CBD5E1`},children:[(0,x.jsx)(`h3`,{className:`text-white font-semibold text-sm`,style:{fontFamily:`Poppins`},children:`Generated Reports`}),(0,x.jsx)(`span`,{className:`text-white/30 text-xs`,children:`Future Report API Placeholder`})]}),(0,x.jsx)(`div`,{className:`divide-y`,style:{"--divide-color":`#CBD5E1`},children:e.map(e=>(0,x.jsxs)(`div`,{className:`flex items-center gap-4 px-5 py-4 hover:bg-white/02 transition-all`,children:[(0,x.jsx)(`div`,{className:`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0`,style:{background:`${t[e.type]}15`},children:(0,x.jsx)(`svg`,{className:`w-5 h-5`,style:{color:t[e.type]},fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z`})})}),(0,x.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,x.jsx)(`div`,{className:`text-white font-medium text-sm truncate`,children:e.title}),(0,x.jsxs)(`div`,{className:`text-white/35 text-xs mt-0.5`,children:[e.date,` · `,e.size]})]}),(0,x.jsx)(`span`,{className:`text-xs px-2 py-0.5 rounded-full flex-shrink-0`,style:{background:`${t[e.type]}15`,color:t[e.type]},children:e.type}),(0,x.jsxs)(`div`,{className:`flex gap-2 flex-shrink-0`,children:[(0,x.jsxs)(`button`,{className:`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg text-white/60 hover:text-white transition-all`,style:{background:`#F1F5F9`},onClick:()=>alert(`Future: PDF Download API`),children:[(0,x.jsx)(`svg`,{className:`w-3 h-3`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4`})}),`PDF`]}),(0,x.jsx)(`button`,{className:`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg text-white/60 hover:text-white transition-all`,style:{background:`#F1F5F9`},onClick:()=>alert(`Future: Excel Export API`),children:`Excel`}),(0,x.jsx)(`button`,{className:`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg text-white/60 hover:text-white transition-all`,style:{background:`#F1F5F9`},onClick:()=>window.print(),children:`Print`})]})]},e.title))})]})]})}function Qe(){let[e,t]=(0,b.useState)(Ue),n={high:(0,x.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z`})}),assignment:(0,x.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z`})}),resolved:(0,x.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z`})}),system:(0,x.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z`})})},r={high:`#f87171`,assignment:`#138808`,resolved:`#10b981`,system:`#0B2447`},i=e.filter(e=>!e.read).length;return(0,x.jsxs)(`div`,{className:`p-6 space-y-5`,children:[(0,x.jsxs)(`div`,{className:`flex items-center justify-between flex-wrap gap-3`,children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h2`,{className:`text-white font-bold text-xl`,style:{fontFamily:`Poppins`},children:`Notifications`}),(0,x.jsxs)(`p`,{className:`text-white/40 text-sm mt-0.5`,children:[i,` unread · Future Real-time API · WebSocket`]})]}),(0,x.jsx)(`button`,{className:`text-sm px-4 py-2 rounded-xl text-white/50 hover:text-white transition-all`,style:{background:`#F1F5F9`,border:`1px solid #CBD5E1`},onClick:()=>t(e=>e.map(e=>({...e,read:!0}))),children:`Mark all read`})]}),(0,x.jsx)(`div`,{className:`flex gap-2`,children:[`All`,`Unread`,`High Priority`,`Assignments`].map(e=>(0,x.jsx)(`button`,{className:`text-xs px-3.5 py-2 rounded-xl font-medium transition-all`,style:e===`All`?{background:`rgba(19,136,8,0.15)`,color:`#138808`,border:`1px solid rgba(19,136,8,0.25)`}:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,color:`#334155`,border:`1px solid #CBD5E1`},children:e},e))}),(0,x.jsx)(`div`,{className:`rounded-2xl overflow-hidden`,style:{border:`1px solid #CBD5E1`},children:(0,x.jsx)(`div`,{className:`divide-y`,style:{"--divide-color":`#CBD5E1`},children:e.map(e=>(0,x.jsxs)(`div`,{className:`flex gap-4 px-5 py-4 transition-all cursor-pointer`,style:{background:e.read?`transparent`:`rgba(19,136,8,0.03)`,borderLeft:e.read?`none`:`3px solid ${r[e.type]}`},onClick:()=>t(t=>t.map(t=>t.id===e.id?{...t,read:!0}:t)),children:[(0,x.jsx)(`div`,{className:`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0`,style:{background:`${r[e.type]}15`,color:r[e.type]},children:n[e.type]}),(0,x.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,x.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,x.jsx)(`span`,{className:`text-white font-semibold text-sm`,children:e.title}),!e.read&&(0,x.jsx)(`span`,{className:`w-1.5 h-1.5 rounded-full flex-shrink-0`,style:{background:`#138808`}})]}),(0,x.jsx)(`p`,{className:`text-white/55 text-sm mt-1 leading-relaxed`,children:e.desc}),(0,x.jsx)(`span`,{className:`text-white/30 text-xs mt-1 block`,children:e.time})]}),(0,x.jsx)(`button`,{className:`text-white/20 hover:text-white/60 transition-colors flex-shrink-0`,onClick:n=>{n.stopPropagation(),t(t=>t.filter(t=>t.id!==e.id))},children:(0,x.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M6 18L18 6M6 6l12 12`})})})]},e.id))})})]})}function $e(){let[e,t]=(0,b.useState)(!1);return(0,x.jsxs)(`div`,{className:`p-6 space-y-5 max-w-3xl`,children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h2`,{className:`text-white font-bold text-xl`,style:{fontFamily:`Poppins`},children:`Admin Profile`}),(0,x.jsx)(`p`,{className:`text-white/40 text-sm mt-0.5`,children:`Manage your profile and security settings`})]}),(0,x.jsxs)(`div`,{className:`rounded-2xl p-6`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #CBD5E1`},children:[(0,x.jsxs)(`div`,{className:`flex items-start gap-5 mb-6 flex-wrap`,children:[(0,x.jsxs)(`div`,{className:`relative`,children:[(0,x.jsx)(`div`,{className:`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold text-white`,style:{background:`linear-gradient(135deg, #138808, #0057a8)`},children:`A`}),(0,x.jsx)(`div`,{className:`absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center`,style:{background:`#10b981`,border:`2px solid #07121f`},children:(0,x.jsx)(`svg`,{className:`w-3 h-3 text-white`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:3,d:`M5 13l4 4L19 7`})})})]}),(0,x.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,x.jsx)(`div`,{className:`text-white font-bold text-xl`,style:{fontFamily:`Poppins`},children:`District Admin Officer`}),(0,x.jsx)(`div`,{className:`text-cyan-400 text-sm mt-0.5`,children:`Government Admin · Senior Level`}),(0,x.jsxs)(`div`,{className:`flex gap-4 mt-3 flex-wrap`,children:[(0,x.jsxs)(`span`,{className:`text-white/40 text-xs flex items-center gap-1`,children:[(0,x.jsx)(`svg`,{className:`w-3.5 h-3.5`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5`})}),`Ministry of Electronics & IT`]}),(0,x.jsxs)(`span`,{className:`text-white/40 text-xs flex items-center gap-1`,children:[(0,x.jsx)(`svg`,{className:`w-3.5 h-3.5`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z`})}),`New Delhi — 110001`]})]})]}),(0,x.jsx)(`button`,{className:`btn-cyan text-sm py-2 px-4`,onClick:()=>t(!e),children:e?`Cancel`:`Edit Profile`})]}),(0,x.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-4`,children:[[`Full Name`,`District Admin Officer`,`text`],[`Email`,`admin@polisence.gov.in`,`email`],[`Phone`,`+91-11-2430-1900`,`tel`],[`Department`,`Ministry of Electronics & IT`,`text`],[`Designation`,`District Collector (IT)`,`text`],[`Employee ID`,`MEIT-2024-ADM-001`,`text`],[`Office Address`,`Electronics Niketan, New Delhi`,`text`],[`Joined Date`,`15 January 2024`,`text`]].map(([t,n,r])=>(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`label`,{className:`block text-white/40 text-xs mb-1.5`,children:t}),e?(0,x.jsx)(`input`,{className:`input-field py-2 text-sm`,type:r,defaultValue:n}):(0,x.jsx)(`div`,{className:`text-white/80 text-sm py-2`,children:n})]},t))}),e&&(0,x.jsxs)(`div`,{className:`flex gap-3 mt-5`,children:[(0,x.jsx)(`button`,{className:`btn-orange text-sm py-2 px-5`,onClick:()=>t(!1),children:`Save Changes`}),(0,x.jsx)(`button`,{className:`btn-cyan text-sm py-2 px-5`,onClick:()=>t(!1),children:`Cancel`})]})]}),(0,x.jsxs)(`div`,{className:`rounded-2xl p-6`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #CBD5E1`},children:[(0,x.jsx)(`h3`,{className:`text-white font-semibold mb-5`,style:{fontFamily:`Poppins`},children:`Security Settings`}),(0,x.jsx)(`div`,{className:`space-y-4`,children:[{label:`Change Password`,desc:`Last changed 45 days ago`,btn:`Change`,color:`#138808`},{label:`Two-Factor Authentication`,desc:`Future OTP / Authenticator App Integration`,btn:`Enable`,color:`#0B2447`},{label:`Active Sessions`,desc:`1 active session · Chrome, Windows 11`,btn:`Manage`,color:`#10b981`},{label:`Login History`,desc:`Future Backend Security Log API`,btn:`View`,color:`#D95F00`}].map(e=>(0,x.jsxs)(`div`,{className:`flex items-center justify-between gap-4 p-4 rounded-xl`,style:{background:`#F8FAFC`},children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`div`,{className:`text-white text-sm font-medium`,children:e.label}),(0,x.jsx)(`div`,{className:`text-white/35 text-xs mt-0.5`,children:e.desc})]}),(0,x.jsx)(`button`,{className:`text-sm px-3.5 py-1.5 rounded-lg font-semibold flex-shrink-0 transition-all hover:opacity-90`,style:{background:`${e.color}18`,color:e.color,border:`1px solid ${e.color}30`},children:e.btn})]},e.label))})]})]})}function et(){let[e,t]=(0,b.useState)(`General`),[n,r]=(0,b.useState)({email:!0,sms:!1,push:!0,weekly:!0,highPriority:!0}),[i,a]=(0,b.useState)(`Dark Navy`),[o,s]=(0,b.useState)(`English`);return(0,x.jsxs)(`div`,{className:`p-6 space-y-5 max-w-3xl`,children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h2`,{className:`text-white font-bold text-xl`,style:{fontFamily:`Poppins`},children:`Settings`}),(0,x.jsx)(`p`,{className:`text-white/40 text-sm mt-0.5`,children:`Configure your workspace preferences`})]}),(0,x.jsx)(`div`,{className:`flex flex-wrap gap-1 p-1 rounded-xl`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`},children:[`General`,`Notifications`,`Theme`,`Language`,`Security`,`System`].map(n=>(0,x.jsx)(`button`,{onClick:()=>t(n),className:`px-4 py-2 rounded-lg text-sm font-medium transition-all`,style:e===n?{background:`#138808`,color:`#0B1F3A`,fontFamily:`Poppins`}:{color:`#334155`},children:n},n))}),(0,x.jsxs)(`div`,{className:`rounded-2xl p-6`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #CBD5E1`},children:[e===`General`&&(0,x.jsxs)(`div`,{className:`space-y-5`,children:[(0,x.jsx)(`h3`,{className:`text-white font-semibold`,style:{fontFamily:`Poppins`},children:`General Settings`}),[[`Platform Name`,`POLISENCE Admin Portal`],[`Organization`,`Ministry of Electronics & IT`],[`Contact Email`,`admin@polisence.gov.in`],[`Support Phone`,`+91-11-2430-1900`]].map(([e,t])=>(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`label`,{className:`block text-white/50 text-xs mb-1.5`,children:e}),(0,x.jsx)(`input`,{className:`input-field py-2.5 text-sm`,defaultValue:t})]},e)),(0,x.jsx)(`button`,{className:`btn-orange text-sm py-2.5 px-6`,children:`Save General Settings`})]}),e===`Notifications`&&(0,x.jsxs)(`div`,{className:`space-y-4`,children:[(0,x.jsx)(`h3`,{className:`text-white font-semibold mb-4`,style:{fontFamily:`Poppins`},children:`Notification Preferences`}),[{key:`email`,label:`Email Notifications`,desc:`Receive complaint updates via email`},{key:`sms`,label:`SMS Alerts`,desc:`Future SMS Gateway Integration`},{key:`push`,label:`Push Notifications`,desc:`Browser push notifications`},{key:`weekly`,label:`Weekly Summary`,desc:`Auto-generated weekly digest email`},{key:`highPriority`,label:`High Priority Alerts`,desc:`Instant alerts for high-priority complaints`}].map(e=>(0,x.jsxs)(`div`,{className:`flex items-center justify-between p-4 rounded-xl`,style:{background:`#F8FAFC`},children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`div`,{className:`text-white text-sm font-medium`,children:e.label}),(0,x.jsx)(`div`,{className:`text-white/35 text-xs mt-0.5`,children:e.desc})]}),(0,x.jsx)(`button`,{onClick:()=>r(t=>({...t,[e.key]:!t[e.key]})),className:`relative w-11 h-6 rounded-full transition-all`,style:{background:n[e.key]?`#138808`:`rgba(255,255,255,0.1)`},children:(0,x.jsx)(`div`,{className:`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all`,style:{left:n[e.key]?`22px`:`2px`}})})]},e.key))]}),e===`Theme`&&(0,x.jsxs)(`div`,{className:`space-y-4`,children:[(0,x.jsx)(`h3`,{className:`text-white font-semibold mb-4`,style:{fontFamily:`Poppins`},children:`Theme Preferences`}),[`Dark Navy`,`Deep Space`,`Dark Slate`].map(e=>(0,x.jsxs)(`button`,{onClick:()=>a(e),className:`w-full flex items-center gap-4 p-4 rounded-xl transition-all`,style:{background:i===e?`rgba(19,136,8,0.08)`:`rgba(255,255,255,0.03)`,border:`1.5px solid ${i===e?`#138808`:`rgba(255,255,255,0.08)`}`},children:[(0,x.jsx)(`div`,{className:`w-10 h-10 rounded-xl`,style:{background:e===`Dark Navy`?`#0B1F3A`:e===`Deep Space`?`#060D18`:`#1a1f2e`}}),(0,x.jsxs)(`div`,{className:`text-left`,children:[(0,x.jsx)(`div`,{className:`text-white font-medium text-sm`,children:e}),(0,x.jsx)(`div`,{className:`text-white/35 text-xs`,children:i===e?`✓ Active`:`Click to activate`})]})]},e))]}),e===`Language`&&(0,x.jsxs)(`div`,{className:`space-y-3`,children:[(0,x.jsx)(`h3`,{className:`text-white font-semibold mb-4`,style:{fontFamily:`Poppins`},children:`Language Settings`}),[`English`,`Hindi`,`Tamil`,`Telugu`,`Bengali`,`Marathi`].map(e=>(0,x.jsxs)(`button`,{onClick:()=>s(e),className:`w-full flex items-center justify-between p-4 rounded-xl transition-all`,style:{background:o===e?`rgba(19,136,8,0.08)`:`rgba(255,255,255,0.03)`,border:`1.5px solid ${o===e?`#138808`:`rgba(255,255,255,0.08)`}`},children:[(0,x.jsx)(`span`,{className:`text-white font-medium text-sm`,children:e}),o===e&&(0,x.jsx)(`span`,{className:`text-cyan-400 text-xs font-bold`,children:`Active`})]},e))]}),e===`Security`&&(0,x.jsxs)(`div`,{className:`space-y-4`,children:[(0,x.jsx)(`h3`,{className:`text-white font-semibold mb-4`,style:{fontFamily:`Poppins`},children:`Security Preferences`}),[{label:`Session Timeout`,desc:`Auto-logout after inactivity`,value:`30 minutes`},{label:`IP Restriction`,desc:`Future Backend Security Feature`,value:`Disabled`},{label:`Audit Logging`,desc:`Future Database Logging API`,value:`Enabled`},{label:`API Rate Limiting`,desc:`Future Backend API Configuration`,value:`100 req/min`}].map(e=>(0,x.jsxs)(`div`,{className:`flex items-center justify-between p-4 rounded-xl`,style:{background:`#F8FAFC`},children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`div`,{className:`text-white text-sm font-medium`,children:e.label}),(0,x.jsx)(`div`,{className:`text-white/35 text-xs mt-0.5`,children:e.desc})]}),(0,x.jsx)(`span`,{className:`text-cyan-400 text-xs font-semibold px-2.5 py-1 rounded-lg`,style:{background:`rgba(19,136,8,0.1)`},children:e.value})]},e.label))]}),e===`System`&&(0,x.jsxs)(`div`,{className:`space-y-4`,children:[(0,x.jsx)(`h3`,{className:`text-white font-semibold mb-4`,style:{fontFamily:`Poppins`},children:`System Preferences`}),(0,x.jsx)(`div`,{className:`text-xs px-3 py-2 rounded-lg mb-4`,style:{background:`rgba(217,95,0,0.07)`,border:`1px solid rgba(217,95,0,0.18)`,color:`rgba(217,95,0,0.8)`},children:`⚙️ Future Backend System Configuration API`}),[[`Database`,`MongoDB + PostgreSQL (Future Integration)`,`#10b981`],[`API Status`,`REST API (Pending Integration)`,`#fbbf24`],[`AI Engine`,`Groq + BERT (Future Integration)`,`#0B2447`],[`Cache`,`Redis (Future Integration)`,`#138808`],[`File Storage`,`S3 Compatible (Future Integration)`,`#D95F00`],[`SMTP`,`Configured (Future Integration)`,`#10b981`]].map(([e,t,n])=>(0,x.jsxs)(`div`,{className:`flex items-center justify-between p-3 rounded-xl`,style:{background:`#F8FAFC`},children:[(0,x.jsx)(`span`,{className:`text-white/70 text-sm`,children:e}),(0,x.jsx)(`span`,{className:`text-xs px-2 py-0.5 rounded-full`,style:{background:`${n}18`,color:n},children:t})]},e))]})]})]})}function tt(){let[e,t]=(0,b.useState)(!1),[n,r]=(0,b.useState)(He),i={"Department Admin":`#138808`,Officer:`#10b981`,Supervisor:`#0B2447`,Manager:`#D95F00`},a=[`Department Admin`,`Officer`,`Supervisor`,`Manager`];return(0,x.jsxs)(`div`,{className:`p-6 space-y-5`,children:[(0,x.jsxs)(`div`,{className:`flex items-center justify-between flex-wrap gap-3`,children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h2`,{className:`text-white font-bold text-xl`,style:{fontFamily:`Poppins`},children:`User Management`}),(0,x.jsxs)(`p`,{className:`text-white/40 text-sm mt-0.5`,children:[`Future User API · RBAC · `,n.length,` users registered`]})]}),(0,x.jsxs)(`button`,{className:`btn-orange flex items-center gap-2 text-sm`,onClick:()=>t(!e),children:[(0,x.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M12 4v16m8-8H4`})}),`Create User`]})]}),(0,x.jsx)(`div`,{className:`grid grid-cols-2 md:grid-cols-4 gap-3`,children:a.map(e=>{let t=n.filter(t=>t.role===e).length;return(0,x.jsxs)(`div`,{className:`rounded-xl p-4 text-center`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid ${i[e]}22`},children:[(0,x.jsx)(`div`,{className:`text-2xl font-bold mb-1`,style:{color:i[e],fontFamily:`Poppins`},children:t}),(0,x.jsx)(`div`,{className:`text-white/50 text-xs`,children:e})]},e)})}),e&&(0,x.jsxs)(`div`,{className:`rounded-2xl p-5 space-y-4`,style:{background:`rgba(19,136,8,0.04)`,border:`1px solid rgba(19,136,8,0.15)`},children:[(0,x.jsx)(`h3`,{className:`text-cyan-400 font-semibold`,style:{fontFamily:`Poppins`},children:`Create New User`}),(0,x.jsx)(`div`,{className:`text-xs px-3 py-2 rounded-lg w-fit`,style:{background:`rgba(217,95,0,0.07)`,border:`1px solid rgba(217,95,0,0.18)`,color:`rgba(217,95,0,0.8)`},children:`⚙️ Future User Registration API · Future RBAC Integration`}),(0,x.jsxs)(`div`,{className:`grid grid-cols-1 md:grid-cols-3 gap-4`,children:[[[`Full Name`,`text`],[`Email`,`email`],[`Phone`,`tel`]].map(([e,t])=>(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`label`,{className:`block text-white/50 text-xs mb-1.5`,children:e}),(0,x.jsx)(`input`,{className:`input-field py-2 text-sm`,type:t,placeholder:e})]},e)),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`label`,{className:`block text-white/50 text-xs mb-1.5`,children:`Role`}),(0,x.jsx)(`select`,{className:`input-field py-2 text-sm`,style:{appearance:`none`},children:a.map(e=>(0,x.jsx)(`option`,{value:e,style:{background:`#FFFFFF`},children:e},e))})]}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`label`,{className:`block text-white/50 text-xs mb-1.5`,children:`Department`}),(0,x.jsx)(`select`,{className:`input-field py-2 text-sm`,style:{appearance:`none`},children:Ve.map(e=>(0,x.jsx)(`option`,{value:e.short,style:{background:`#FFFFFF`},children:e.short},e.short))})]}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`label`,{className:`block text-white/50 text-xs mb-1.5`,children:`Password`}),(0,x.jsx)(`input`,{className:`input-field py-2 text-sm`,type:`password`,placeholder:`Temporary password`})]})]}),(0,x.jsxs)(`div`,{className:`flex gap-3`,children:[(0,x.jsx)(`button`,{className:`btn-orange text-sm py-2 px-5`,onClick:()=>t(!1),children:`Create User`}),(0,x.jsx)(`button`,{className:`btn-cyan text-sm py-2 px-5`,onClick:()=>t(!1),children:`Cancel`})]})]}),(0,x.jsxs)(`div`,{className:`rounded-2xl overflow-hidden`,style:{border:`1px solid #CBD5E1`},children:[(0,x.jsxs)(`div`,{className:`grid text-xs font-bold uppercase tracking-wider text-white/35 px-5 py-3`,style:{gridTemplateColumns:`1.5fr 1.5fr 1fr 1fr 0.8fr 0.8fr auto`,background:`#F8FAFC`,borderBottom:`1px solid #CBD5E1`},children:[(0,x.jsx)(`span`,{children:`Name / ID`}),(0,x.jsx)(`span`,{children:`Email`}),(0,x.jsx)(`span`,{className:`hidden md:block`,children:`Department`}),(0,x.jsx)(`span`,{children:`Role`}),(0,x.jsx)(`span`,{className:`hidden lg:block`,children:`Joined`}),(0,x.jsx)(`span`,{children:`Status`}),(0,x.jsx)(`span`,{children:`Actions`})]}),(0,x.jsx)(`div`,{className:`divide-y`,style:{"--divide-color":`#CBD5E1`},children:n.map(e=>(0,x.jsxs)(`div`,{className:`grid items-center px-5 py-4 hover:bg-white/02 transition-all`,style:{gridTemplateColumns:`1.5fr 1.5fr 1fr 1fr 0.8fr 0.8fr auto`},children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`div`,{className:`text-white font-medium text-sm`,children:e.name}),(0,x.jsx)(`div`,{className:`text-white/35 text-xs mt-0.5`,children:e.id})]}),(0,x.jsx)(`div`,{className:`text-white/55 text-sm truncate`,children:e.email}),(0,x.jsx)(`div`,{className:`hidden md:block text-white/50 text-xs`,children:e.dept}),(0,x.jsx)(`div`,{children:(0,x.jsx)(`span`,{className:`text-xs px-2 py-0.5 rounded-full`,style:{background:`${i[e.role]}18`,color:i[e.role]},children:e.role})}),(0,x.jsx)(`div`,{className:`hidden lg:block text-white/35 text-xs`,children:e.joined}),(0,x.jsx)(`div`,{children:(0,x.jsx)(`span`,{className:`text-xs px-2 py-0.5 rounded-full`,style:e.status===`Active`?{background:`rgba(16,185,129,0.12)`,color:`#10b981`}:{background:`rgba(239,68,68,0.12)`,color:`#f87171`},children:e.status})}),(0,x.jsxs)(`div`,{className:`flex gap-1.5`,children:[(0,x.jsx)(`button`,{className:`text-xs px-2.5 py-1 rounded-lg text-cyan-400 transition-all hover:bg-cyan-400/10`,style:{background:`rgba(19,136,8,0.06)`},children:`Edit`}),(0,x.jsx)(`button`,{className:`text-xs px-2.5 py-1 rounded-lg text-red-400 transition-all hover:bg-red-400/10`,style:{background:`rgba(239,68,68,0.06)`},onClick:()=>r(t=>t.filter(t=>t.id!==e.id)),children:`Delete`})]})]},e.id))})]})]})}function nt(){return null}function rt({navigate:e}){let t=[{label:`Infrastructure`,value:421,color:`#D95F00`,pct:32},{label:`Water Supply`,value:312,color:`#138808`,pct:24},{label:`Electricity`,value:267,color:`#fbbf24`,pct:20},{label:`Sanitation`,value:198,color:`#10b981`,pct:15},{label:`Health`,value:145,color:`#f472b6`,pct:11},{label:`Education`,value:67,color:`#0B2447`,pct:5},{label:`Police`,value:89,color:`#818cf8`,pct:7}],n=[{label:`Delhi Central`,value:487,color:`#D95F00`},{label:`Mumbai North`,value:412,color:`#138808`},{label:`Hyderabad West`,value:345,color:`#0B2447`},{label:`Bangalore East`,value:298,color:`#10b981`},{label:`Chennai South`,value:256,color:`#fbbf24`},{label:`Kolkata Central`,value:223,color:`#f472b6`}],r=[234,312,289,401,356,289,423,398,445,412,389,478],i=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],a=[{text:`Water Supply complaints up 18% this week in Delhi district`,color:`#138808`,icon:`📈`},{text:`Roads & PWD has the highest pending backlog — 142 unresolved`,color:`#D95F00`,icon:`⚠️`},{text:`Sanitation resolution rate improved to 94% (+6% MoM)`,color:`#10b981`,icon:`✅`},{text:`Average resolution time decreased by 2.3 days this quarter`,color:`#0B2447`,icon:`⏱️`}];function o(){let e=2*Math.PI*52,n=0,r=t.map(t=>{let r=t.pct/100*e,i={...t,dash:r,offset:n,gap:e-r};return n+=r,i});return(0,x.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,x.jsxs)(`svg`,{width:`128`,height:`128`,viewBox:`0 0 128 128`,className:`flex-shrink-0`,children:[(0,x.jsx)(`circle`,{cx:64,cy:64,r:52,fill:`none`,stroke:`rgba(255,255,255,0.05)`,strokeWidth:12}),r.map(t=>(0,x.jsx)(`circle`,{cx:64,cy:64,r:52,fill:`none`,stroke:t.color,strokeWidth:12,strokeDasharray:`${t.dash} ${t.gap}`,strokeDashoffset:-t.offset+e*.25,strokeLinecap:`butt`},t.label)),(0,x.jsx)(`text`,{x:64,y:58,textAnchor:`middle`,fill:`#0B2447`,fontSize:`13`,fontWeight:`700`,fontFamily:`Poppins`,children:`2,847`}),(0,x.jsx)(`text`,{x:64,y:74,textAnchor:`middle`,fill:`#1E293B`,fontSize:`9`,fontFamily:`Inter`,children:`Total`})]}),(0,x.jsx)(`div`,{className:`space-y-2`,children:t.map(e=>(0,x.jsxs)(`div`,{className:`flex items-center gap-2 text-xs`,children:[(0,x.jsx)(`div`,{className:`w-2 h-2 rounded-full flex-shrink-0`,style:{background:e.color}}),(0,x.jsx)(`span`,{className:`text-white/55 w-24 truncate`,children:e.label}),(0,x.jsx)(`span`,{className:`text-white font-semibold`,children:e.value}),(0,x.jsxs)(`span`,{className:`text-white/30`,children:[`(`,e.pct,`%)`]})]},e.label))})]})}let s=Ve.slice(0,5).map(e=>({...e,pending:e.complaints-e.resolved,rate:Math.round(e.resolved/e.complaints*100)}));return(0,x.jsxs)(`div`,{className:`p-6 space-y-5`,children:[(0,x.jsxs)(`div`,{className:`flex items-start justify-between flex-wrap gap-3`,children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h2`,{className:`text-white font-bold text-xl`,style:{fontFamily:`Poppins`},children:`Analytics Dashboard`}),(0,x.jsx)(`p`,{className:`text-white/40 text-sm mt-0.5`,children:`AI-powered governance analytics · Mock Data`})]}),(0,x.jsxs)(`button`,{onClick:()=>e(`admin-ai`),className:`btn-cyan text-sm py-2 px-4 flex items-center gap-2`,children:[(0,x.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-2`})}),`AI Intelligence Hub`]})]}),(0,x.jsx)(nt,{tags:[`TODO: GET /api/admin/analytics`,`🔴 Future Backend API`,`🟣 Future AI Analytics`]}),(0,x.jsx)(`div`,{className:`grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3`,children:[{label:`Total`,value:`2,847`,color:`#138808`,delta:`+12%`,up:!0},{label:`Pending`,value:`412`,color:`#D95F00`,delta:`-8%`,up:!1},{label:`Resolved`,value:`2,268`,color:`#10b981`,delta:`+18%`,up:!0},{label:`Avg Time`,value:`3.2d`,color:`#0B2447`,delta:`-0.4d`,up:!0},{label:`Departments`,value:`14`,color:`#fbbf24`,delta:`+2`,up:!0},{label:`Monthly`,value:`478`,color:`#f472b6`,delta:`+23%`,up:!0}].map(e=>(0,x.jsxs)(`div`,{className:`rounded-xl p-4`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid ${e.color}18`},children:[(0,x.jsx)(`div`,{className:`text-xl font-bold mb-1`,style:{color:e.color,fontFamily:`Poppins`},children:e.value}),(0,x.jsx)(`div`,{className:`text-white/40 text-xs`,children:e.label}),(0,x.jsx)(`div`,{className:`text-xs mt-1 font-semibold`,style:{color:e.up?`#10b981`:`#f87171`},children:e.delta})]},e.label))}),(0,x.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-3 gap-4`,children:[(0,x.jsxs)(`div`,{className:`lg:col-span-2 rounded-2xl p-5`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #CBD5E1`},children:[(0,x.jsxs)(`div`,{className:`flex items-center justify-between mb-4`,children:[(0,x.jsx)(`h3`,{className:`text-white font-semibold`,style:{fontFamily:`Poppins`},children:`Complaint Trend — 2026`}),(0,x.jsx)(`span`,{className:`text-xs text-green-400 px-2 py-0.5 rounded-full`,style:{background:`rgba(16,185,129,0.1)`},children:`+24.3% YoY`})]}),(0,x.jsx)(Le,{data:r,labels:i,color:`#138808`})]}),(0,x.jsxs)(`div`,{className:`rounded-2xl p-5`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #CBD5E1`},children:[(0,x.jsx)(`h3`,{className:`text-white font-semibold mb-4`,style:{fontFamily:`Poppins`},children:`Complaint Categories`}),(0,x.jsx)(o,{})]})]}),(0,x.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-3 gap-4`,children:[(0,x.jsxs)(`div`,{className:`rounded-2xl p-5`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #CBD5E1`},children:[(0,x.jsx)(`h3`,{className:`text-white font-semibold mb-4`,style:{fontFamily:`Poppins`},children:`District-Wise Volume`}),(0,x.jsx)(`div`,{className:`space-y-3`,children:n.map(e=>(0,x.jsx)(ze,{label:e.label,value:e.value,max:500,color:e.color},e.label))})]}),(0,x.jsxs)(`div`,{className:`rounded-2xl p-5`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #CBD5E1`},children:[(0,x.jsx)(`h3`,{className:`text-white font-semibold mb-4`,style:{fontFamily:`Poppins`},children:`Top Departments`}),(0,x.jsx)(`div`,{className:`space-y-2.5`,children:s.map((e,t)=>(0,x.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,x.jsxs)(`span`,{className:`text-white/25 text-xs w-4`,children:[`#`,t+1]}),(0,x.jsx)(`span`,{className:`text-xl`,children:e.icon}),(0,x.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,x.jsx)(`div`,{className:`text-white/80 text-xs font-medium truncate`,children:e.short}),(0,x.jsxs)(`div`,{className:`flex items-center gap-1 mt-0.5`,children:[(0,x.jsx)(`div`,{className:`flex-1 h-1 rounded-full`,style:{background:`#E2E8F0`},children:(0,x.jsx)(`div`,{className:`h-full rounded-full`,style:{width:`${e.rate}%`,background:e.color}})}),(0,x.jsxs)(`span`,{className:`text-xs`,style:{color:e.color},children:[e.rate,`%`]})]})]}),(0,x.jsxs)(`div`,{className:`text-right flex-shrink-0`,children:[(0,x.jsx)(`div`,{className:`text-white text-xs font-semibold`,children:e.complaints}),(0,x.jsxs)(`div`,{className:`text-red-400/70 text-xs`,children:[e.pending,` pend.`]})]})]},e.name))})]}),(0,x.jsxs)(`div`,{className:`rounded-2xl p-5`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #CBD5E1`},children:[(0,x.jsxs)(`div`,{className:`flex items-center gap-2 mb-4`,children:[(0,x.jsx)(`span`,{className:`text-lg`,children:`🤖`}),(0,x.jsx)(`h3`,{className:`text-white font-semibold`,style:{fontFamily:`Poppins`},children:`AI Quick Insights`})]}),(0,x.jsx)(`div`,{className:`space-y-3`,children:a.map((e,t)=>(0,x.jsxs)(`div`,{className:`flex items-start gap-3 p-3 rounded-xl`,style:{background:`${e.color}08`,border:`1px solid ${e.color}18`},children:[(0,x.jsx)(`span`,{className:`text-base flex-shrink-0`,children:e.icon}),(0,x.jsx)(`p`,{className:`text-white/65 text-xs leading-relaxed`,children:e.text})]},t))}),(0,x.jsx)(`div`,{className:`mt-3 text-xs text-purple-400/50 text-center`,children:`🟣 Future AI Analytics API · Groq + BERT`})]})]})]})}function it(){
let[e,t]=(0,b.useState)(`DL`),[n,r]=(0,b.useState)(`All`),[i,a]=(0,b.useState)(`Last 30 Days`),
o=[
{id:`DL`,name:`New Delhi (NCT)`,lat:28.6139,lng:77.2090,bbox:`76.84,28.40,77.35,28.88`,count:487,color:`#DC2626`,risk:`Critical`,dept:`Ministry of Jal Shakti & CPWD`},
{id:`MH`,name:`Mumbai, Maharashtra`,lat:19.0760,lng:72.8777,bbox:`72.75,18.89,73.05,19.27`,count:412,color:`#D95F00`,risk:`High`,dept:`MoRTH & Municipal Corp.`},
{id:`TG`,name:`Hyderabad, Telangana`,lat:17.3850,lng:78.4867,bbox:`78.25,17.20,78.65,17.55`,count:345,color:`#D97706`,risk:`High`,dept:`Ministry of Power (DISCOM)`},
{id:`KA`,name:`Bengaluru, Karnataka`,lat:12.9716,lng:77.5946,bbox:`77.45,12.83,77.75,13.12`,count:298,color:`#0B2447`,risk:`Medium`,dept:`MoRTH & Urban Transport`},
{id:`TN`,name:`Chennai, Tamil Nadu`,lat:13.0827,lng:80.2707,bbox:`80.15,12.95,80.35,13.20`,count:256,color:`#0284C7`,risk:`Medium`,dept:`Jal Board & Drainage`},
{id:`WB`,name:`Kolkata, West Bengal`,lat:22.5726,lng:88.3639,bbox:`88.25,22.45,88.48,22.68`,count:223,color:`#138808`,risk:`Medium`,dept:`MoHUA & Public Health`},
{id:`UP`,name:`Lucknow & Kanpur, Uttar Pradesh`,lat:26.8467,lng:80.9462,bbox:`80.15,26.35,81.15,27.05`,count:198,color:`#D95F00`,risk:`Medium`,dept:`UP PWD & Jal Nigam`},
{id:`RJ`,name:`Jaipur, Rajasthan`,lat:26.9124,lng:75.7873,bbox:`75.65,26.80,75.92,27.02`,count:167,color:`#0284C7`,risk:`Low`,dept:`PHED Water Supply`},
{id:`GJ`,name:`Ahmedabad, Gujarat`,lat:23.0225,lng:72.5714,bbox:`72.45,22.92,72.68,23.12`,count:145,color:`#138808`,risk:`Low`,dept:`Municipal Sanitation`}
],
s=[`All`,`Infrastructure`,`Water Supply`,`Electricity`,`Sanitation`,`Health`],
c=[`Last 7 Days`,`Last 30 Days`,`Last 90 Days`,`This Year`],
l=e?o.find(t=>t.id===e):null,
mapSrc=l
  ?`https://www.openstreetmap.org/export/embed.html?bbox=${l.bbox}&layer=mapnik&marker=${l.lat}%2C${l.lng}`
  :`https://www.openstreetmap.org/export/embed.html?bbox=68.1%2C6.7%2C97.4%2C35.7&layer=mapnik&marker=28.6139%2C77.2090`,
d=l?[
{area:`${l.name.split(",")[0]} Central Zone`,complaints:Math.floor(l.count*.38),category:`Infrastructure & Roads`,risk:l.risk},
{area:`${l.name.split(",")[0]} North Sector`,complaints:Math.floor(l.count*.29),category:`Water Supply (Jal Board)`,risk:`High`},
{area:`${l.name.split(",")[0]} South Ward`,complaints:Math.floor(l.count*.19),category:`Power & Street Lighting`,risk:`Medium`},
{area:`${l.name.split(",")[0]} East Zone`,complaints:Math.floor(l.count*.14),category:`Sanitation & Waste`,risk:`Low`}
]:[],
f={Critical:`#DC2626`,High:`#D95F00`,Medium:`#B45309`,Low:`#138808`};
return(0,x.jsxs)(`div`,{
className:`p-6 space-y-5`,
children:[
(0,x.jsxs)(`div`,{
className:`flex items-center justify-between flex-wrap gap-3`,
children:[
(0,x.jsxs)(`div`,{
children:[
(0,x.jsx)(`div`,{style:{fontSize:`11px`,fontWeight:800,color:`#C2410C`,letterSpacing:`0.6px`},children:`NATIONAL GIS GRIEVANCE MAPPING · INDIA`}),
(0,x.jsx)(`h2`,{className:`font-bold text-xl`,style:{color:`#0B2447`,fontFamily:`Poppins`},children:`Geographic High-Complaint Hotspot Map`}),
(0,x.jsx)(`p`,{className:`text-xs mt-0.5`,style:{color:`#475569`},children:`Select any high-complaint state or city hotspot to inspect its live geographic map and ward-level grievance density.`})
]
}),
(0,x.jsxs)(`div`,{
className:`flex gap-2 flex-wrap`,
children:[
(0,x.jsx)(`button`,{
type:`button`,
onClick:()=>t(null),
className:`px-3 py-1.5 rounded-lg text-xs font-bold`,
style:e===null?{background:`#0B2447`,color:`#FFFFFF`}:{background:`#F1F5F9`,color:`#0B2447`,border:`1px solid #CBD5E1`},
children:`🇮🇳 View All-India Map`
}),
(0,x.jsx)(`select`,{className:`input-field py-1.5 text-xs`,style:{width:`auto`,minWidth:130},value:n,onChange:e=>r(e.target.value),children:s.map(e=>(0,x.jsx)(`option`,{children:e},e))}),
(0,x.jsx)(`select`,{className:`input-field py-1.5 text-xs`,style:{width:`auto`,minWidth:130},value:i,onChange:e=>a(e.target.value),children:c.map(e=>(0,x.jsx)(`option`,{children:e},e))})
]
})
]
}),
(0,x.jsxs)(`div`,{
className:`grid grid-cols-1 lg:grid-cols-3 gap-5`,
children:[
(0,x.jsxs)(`div`,{
className:`lg:col-span-2 rounded-2xl overflow-hidden flex flex-col`,
style:{background:`#FFFFFF`,border:`1px solid #CBD5E1`,borderTop:`4px solid #FF9933`,boxShadow:`0 6px 20px rgba(11,36,71,0.06)`},
children:[
(0,x.jsxs)(`div`,{
className:`px-5 py-3.5 flex items-center justify-between flex-wrap gap-2`,
style:{borderBottom:`1px solid #CBD5E1`,background:`#F8FAFC`},
children:[
(0,x.jsxs)(`div`,{
className:`flex items-center gap-2`,
children:[
(0,x.jsx)(`img`,{src:`https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg`,alt:`GOI`,className:`w-4 h-5 object-contain`}),
(0,x.jsx)(`h3`,{className:`font-bold text-sm`,style:{color:`#0B2447`,fontFamily:`Poppins`},children:l?`Live Hotspot Map: ${l.name} (${l.count} Complaints)`:`All-India High-Complaint Hotspot Map`})
]
}),
(0,x.jsxs)(`span`,{className:`text-xs font-bold px-2.5 py-1 rounded-full`,style:{background:`#FFF5EB`,color:`#C2410C`,border:`1px solid #FDBA74`},children:[n,` · `,i]})
]
}),
(0,x.jsxs)(`div`,{
className:`relative`,
style:{height:390,background:`#E2E8F0`},
children:[
(0,x.jsx)(`iframe`,{
title:`India High Complaint Geographic Map`,
src:mapSrc,
className:`w-full h-full border-0`,
loading:`lazy`,
referrerPolicy:`no-referrer-when-downgrade`
})
]
}),
(0,x.jsx)(`div`,{
className:`p-3.5 flex flex-wrap gap-2 items-center`,
style:{background:`#F8FAFC`,borderTop:`1px solid #CBD5E1`},
children:[
(0,x.jsx)(`span`,{className:`text-xs font-bold mr-1`,style:{color:`#0B2447`},children:`Jump to High-Complaint Zone:`}),
o.map(zone=>(0,x.jsxs)(`button`,{
type:`button`,
onClick:()=>t(zone.id),
className:`px-2.5 py-1 rounded-lg text-xs font-bold transition-all`,
style:e===zone.id?{background:zone.color,color:`#FFFFFF`}:{background:`#FFFFFF`,color:`#0B2447`,border:`1px solid #CBD5E1`},
children:[zone.id,` (`,zone.count,`)`]
},zone.id))
]
})
]
}),
(0,x.jsxs)(`div`,{
className:`space-y-4`,
children:[
(0,x.jsxs)(`div`,{
className:`rounded-2xl p-4`,
style:{background:`#FFFFFF`,border:`1px solid #CBD5E1`,borderTop:`4px solid #0B2447`,boxShadow:`0 4px 14px rgba(11,36,71,0.05)`},
children:[
(0,x.jsx)(`h3`,{className:`font-bold text-sm mb-3`,style:{color:`#0B2447`,fontFamily:`Poppins`},children:`Top High-Complaint Hotspot States`}),
(0,x.jsx)(`div`,{
className:`space-y-2`,
children:o.slice(0,6).map(n=>(0,x.jsxs)(`button`,{
onClick:()=>t(n.id),
className:`w-full flex items-center gap-3 p-2.5 rounded-xl transition-all text-left`,
style:e===n.id?{background:`#FFF5EB`,border:`1.5px solid #FF9933`}:{background:`#F8FAFC`,border:`1px solid #E2E8F0`},
children:[
(0,x.jsx)(`div`,{className:`w-2.5 h-2.5 rounded-full flex-shrink-0`,style:{background:n.color}}),
(0,x.jsxs)(`div`,{
className:`flex-1 min-w-0`,
children:[
(0,x.jsx)(`div`,{className:`text-xs font-bold truncate`,style:{color:`#0B2447`},children:n.name}),
(0,x.jsx)(`div`,{className:`text-xs truncate`,style:{color:`#64748B`,fontSize:`10.5px`},children:n.dept})
]
}),
(0,x.jsx)(`span`,{className:`text-xs font-bold`,style:{color:n.color},children:n.count}),
(0,x.jsx)(`span`,{className:`text-xs font-bold px-2 py-0.5 rounded`,style:{background:`${f[n.risk]}15`,color:f[n.risk],fontSize:`10.5px`},children:n.risk})
]
},n.id))
})
]
}),
l&&(0,x.jsxs)(`div`,{
className:`rounded-2xl p-4`,
style:{background:`#FFFFFF`,border:`1px solid #CBD5E1`,borderTop:`4px solid #138808`,boxShadow:`0 4px 14px rgba(11,36,71,0.05)`},
children:[
(0,x.jsxs)(`div`,{
className:`flex items-center gap-2 mb-2`,
children:[
(0,x.jsx)(`img`,{src:`https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg`,alt:`GOI`,className:`w-4 h-5 object-contain`}),
(0,x.jsx)(`h3`,{className:`font-bold text-sm`,style:{color:`#0B2447`,fontFamily:`Poppins`},children:l.name}),
(0,x.jsx)(`span`,{className:`text-xs font-bold px-2 py-0.5 rounded-full ml-auto`,style:{background:`${f[l.risk]}15`,color:f[l.risk]},children:l.risk})
]
}),
(0,x.jsxs)(`div`,{className:`text-xl font-bold mb-1`,style:{color:l.color,fontFamily:`Poppins`},children:[l.count,` Active Grievances`]}),
(0,x.jsxs)(`div`,{className:`text-xs mb-3`,style:{color:`#475569`},children:[`Coordinates: `,l.lat,`, `,l.lng,` · `,l.dept]}),
(0,x.jsx)(`div`,{
className:`space-y-2 pt-2 border-t`,
style:{borderColor:`#E2E8F0`},
children:d.map(e=>(0,x.jsxs)(`div`,{
className:`flex items-center justify-between text-xs`,
children:[
(0,x.jsx)(`span`,{className:`font-semibold`,style:{color:`#0B2447`},children:e.area}),
(0,x.jsx)(`span`,{style:{color:`#475569`},children:e.category}),
(0,x.jsx)(`span`,{className:`font-bold`,style:{color:`#C2410C`},children:e.complaints})
]
},e.area))
})
]
})
]
})
]
})
]
})
}
function at(){let e=[
{title:`Water Supply & Pipeline Stress (Ministry of Jal Shakti)`,icon:(0,x.jsx)(GoiDeptLogo,{ministry:`JAL SHAKTI`,color:`#0284C7`}),risk:87,trend:`+12%`,color:`#0284C7`,insight:`Monsoon-related pipeline stress expected in South Delhi & Hyderabad zones.`,urgency:`Critical`,days:3},
{title:`Arterial Road & Highway Damage (MoRTH & CPWD)`,icon:(0,x.jsx)(GoiDeptLogo,{ministry:`MoRTH · PWD`,color:`#D95F00`}),risk:74,trend:`+8%`,color:`#D95F00`,insight:`Post-monsoon pothole surge predicted across 4 districts.`,urgency:`High`,days:7},
{title:`Power Grid & Peak Load Alert (Ministry of Power)`,icon:(0,x.jsx)(GoiDeptLogo,{ministry:`MIN. OF POWER`,color:`#B45309`}),risk:61,trend:`+5%`,color:`#B45309`,insight:`Load shedding probability elevated due to heatwave forecast.`,urgency:`High`,days:5},
{title:`Urban Sanitation & Waste Drive (MoHUA · Swachh Bharat)`,icon:(0,x.jsx)(GoiDeptLogo,{ministry:`MoHUA · URBAN`,color:`#138808`}),risk:53,trend:`+3%`,color:`#138808`,insight:`Collection delays expected during upcoming municipal holidays.`,urgency:`Medium`,days:10},
{title:`Monsoon Flood & Disaster Alert (NDMA · Ministry of Home Affairs)`,icon:(0,x.jsx)(GoiDeptLogo,{ministry:`NDMA · MHA`,color:`#0B2447`}),risk:45,trend:`+18%`,color:`#0B2447`,insight:`Low-lying areas in Kolkata, Mumbai at moderate risk this week.`,urgency:`Medium`,days:4},
{title:`Highway Traffic & NH-48 Congestion (NHAI · Traffic Police)`,icon:(0,x.jsx)(GoiDeptLogo,{ministry:`NHAI · POLICE`,color:`#BE185D`}),risk:38,trend:`+2%`,color:`#BE185D`,insight:`Construction closures on NH-48 will increase congestion complaints.`,urgency:`Low`,days:14}
],t=[{day:`Mon`,water:42,roads:31,electricity:28},{day:`Tue`,water:38,roads:35,electricity:32},{day:`Wed`,water:55,roads:28,electricity:41},{day:`Thu`,water:61,roads:44,electricity:38},{day:`Fri`,water:48,roads:52,electricity:35},{day:`Sat`,water:32,roads:39,electricity:29},{day:`Sun`,water:28,roads:25,electricity:22}],n=[{action:`Pre-deploy water tankers to South Delhi`,priority:`Urgent`,dept:`Jal Board`,color:`#138808`},{action:`Schedule emergency road patching in 4 zones`,priority:`High`,dept:`Roads & PWD`,color:`#D95F00`},{action:`Alert DISCOM about peak load hours 6–9 PM`,priority:`High`,dept:`DISCOM`,color:`#fbbf24`},{action:`Increase garbage pickup frequency by 40%`,priority:`Medium`,dept:`Municipal`,color:`#10b981`}],r={Critical:`#f87171`,High:`#D95F00`,Medium:`#fbbf24`,Low:`#10b981`};return(0,x.jsxs)(`div`,{className:`p-6 space-y-5`,children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h2`,{className:`text-white font-bold text-xl`,style:{fontFamily:`Poppins`},children:`AI Prediction Dashboard`}),(0,x.jsx)(`p`,{className:`text-white/40 text-sm mt-0.5`,children:`TensorFlow + Scikit-learn models · Mock Predictions`})]}),(0,x.jsx)(nt,{tags:[`TODO: AI Prediction API`,`🟣 Future TensorFlow Model`,`🟣 Future Scikit-learn`,`🔴 Future Python Backend`]}),(0,x.jsx)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4`,children:e.map(e=>(0,x.jsxs)(`div`,{className:`rounded-2xl p-5 transition-all hover:-translate-y-0.5`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid ${e.color}22`},children:[(0,x.jsxs)(`div`,{className:`flex items-start justify-between mb-4`,children:[(0,x.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,x.jsx)(`span`,{className:`text-2xl`,children:e.icon}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`div`,{className:`text-white font-semibold text-sm`,style:{fontFamily:`Poppins`},children:e.title}),(0,x.jsxs)(`div`,{className:`text-xs mt-0.5`,style:{color:r[e.urgency]},children:[e.urgency,` · in `,e.days,`d`]})]})]}),(0,x.jsx)(`span`,{className:`text-xs px-2 py-0.5 rounded-full font-semibold`,style:{background:e.trend.includes(`+`)?`rgba(239,68,68,0.1)`:`rgba(16,185,129,0.1)`,color:e.trend.includes(`+`)?`#f87171`:`#10b981`},children:e.trend})]}),(0,x.jsxs)(`div`,{className:`mb-3`,children:[(0,x.jsxs)(`div`,{className:`flex justify-between text-xs mb-1.5`,children:[(0,x.jsx)(`span`,{className:`text-white/40`,children:`Risk Score`}),(0,x.jsxs)(`span`,{className:`font-bold`,style:{color:e.color},children:[e.risk,`%`]})]}),(0,x.jsx)(`div`,{className:`h-2 rounded-full overflow-hidden`,style:{background:`#E2E8F0`},children:(0,x.jsx)(`div`,{className:`h-full rounded-full`,style:{width:`${e.risk}%`,background:`linear-gradient(90deg, ${e.color}88, ${e.color})`}})})]}),(0,x.jsx)(`p`,{className:`text-white/50 text-xs leading-relaxed`,children:e.insight})]},e.title))}),(0,x.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-2 gap-4`,children:[(0,x.jsxs)(`div`,{className:`rounded-2xl p-5`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #CBD5E1`},children:[(0,x.jsx)(`h3`,{className:`text-white font-semibold mb-4`,style:{fontFamily:`Poppins`},children:`7-Day Forecast`}),(0,x.jsx)(`div`,{className:`flex items-end gap-2 h-32`,children:t.map(e=>(0,x.jsxs)(`div`,{className:`flex-1 flex flex-col items-center gap-0.5`,children:[(0,x.jsx)(`div`,{className:`w-full flex gap-0.5 items-end`,style:{height:96},children:[{v:e.water,c:`#138808`},{v:e.roads,c:`#D95F00`},{v:e.electricity,c:`#fbbf24`}].map(({v:e,c:t})=>(0,x.jsx)(`div`,{className:`flex-1 rounded-t`,style:{height:`${e*1.5}%`,background:t,opacity:.75}},t))}),(0,x.jsx)(`span`,{className:`text-white/30 text-xs`,children:e.day})]},e.day))}),(0,x.jsx)(`div`,{className:`flex gap-4 mt-3 justify-center`,children:[[`#138808`,`Water`],[`#D95F00`,`Roads`],[`#fbbf24`,`Electricity`]].map(([e,t])=>(0,x.jsxs)(`div`,{className:`flex items-center gap-1 text-xs text-white/45`,children:[(0,x.jsx)(`div`,{className:`w-2 h-2 rounded-sm`,style:{background:e}}),t]},t))})]}),(0,x.jsxs)(`div`,{className:`rounded-2xl p-5`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #CBD5E1`},children:[(0,x.jsxs)(`div`,{className:`flex items-center gap-2 mb-4`,children:[(0,x.jsx)(`span`,{children:`🤖`}),(0,x.jsx)(`h3`,{className:`text-white font-semibold`,style:{fontFamily:`Poppins`},children:`AI Recommendations`})]}),(0,x.jsx)(`div`,{className:`space-y-2.5`,children:n.map(e=>(0,x.jsxs)(`div`,{className:`flex items-start gap-3 p-3 rounded-xl`,style:{background:`${e.color}08`,border:`1px solid ${e.color}18`},children:[(0,x.jsx)(`div`,{className:`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0`,style:{background:e.color}}),(0,x.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,x.jsx)(`p`,{className:`text-white/75 text-xs leading-relaxed`,children:e.action}),(0,x.jsxs)(`div`,{className:`flex items-center gap-2 mt-1`,children:[(0,x.jsx)(`span`,{className:`text-xs`,style:{color:r[e.priority]},children:e.priority}),(0,x.jsx)(`span`,{className:`text-white/25 text-xs`,children:`·`}),(0,x.jsx)(`span`,{className:`text-white/35 text-xs`,children:e.dept})]})]})]},e.action))}),(0,x.jsx)(`div`,{className:`mt-3 text-xs text-purple-400/50 text-center`,children:`🟣 Future TensorFlow Recommendation Engine`})]})]})]})}function ot({navigate:e}){let[t,n]=(0,b.useState)(`assistant`);return(0,x.jsxs)(`div`,{className:`p-6 space-y-5`,children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h2`,{className:`text-white font-bold text-xl`,style:{fontFamily:`Poppins`},children:`AI Intelligence Hub`}),(0,x.jsx)(`p`,{className:`text-white/40 text-sm mt-0.5`,children:`Groq API · BERT · Whisper · TensorFlow · Mock Data`})]}),(0,x.jsx)(`div`,{className:`flex flex-wrap gap-1 p-1 rounded-2xl`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #CBD5E1`},children:[{id:`assistant`,label:`AI Assistant`,icon:`🤖`},{id:`voice`,label:`Voice Intel`,icon:`🎙️`},{id:`classify`,label:`Classification`,icon:`🧠`},{id:`recommend`,label:`Recommendations`,icon:`💡`},{id:`export`,label:`Export Center`,icon:`📤`}].map(e=>(0,x.jsxs)(`button`,{onClick:()=>n(e.id),className:`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all`,style:t===e.id?{background:`#0B2447`,color:`#FFFFFF`,border:`1px solid rgba(11,36,71,0.3)`,fontFamily:`Poppins`}:{color:`#334155`},children:[(0,x.jsx)(`span`,{children:e.icon}),(0,x.jsx)(`span`,{className:`hidden sm:inline`,children:e.label})]},e.id))}),t===`assistant`&&(0,x.jsx)(st,{navigate:e}),t===`voice`&&(0,x.jsx)(ct,{}),t===`classify`&&(0,x.jsx)(lt,{}),t===`recommend`&&(0,x.jsx)(ut,{navigate:e}),t===`export`&&(0,x.jsx)(dt,{navigate:e})]})}function st({navigate:e}){let[t,n]=(0,b.useState)([{role:`ai`,text:`Hello! I'm POLISENCE AI — your governance intelligence assistant. I can help you analyze complaint data, generate reports, and provide actionable insights. What would you like to know?`,time:`Just now`}]),[r,i]=(0,b.useState)(``),[a,o]=(0,b.useState)(!1),s=(0,b.useRef)(null),c=[`Show highest priority complaints`,`Generate weekly report summary`,`Show complaint statistics by district`,`Which department needs immediate attention?`,`Generate department performance summary`,`Suggest actions for pending backlog`],l={"highest priority":`🔴 **High Priority Complaints (Top 5):**

1. **POL-2026-9421** — Road damage in Delhi, Block C (Infrastructure · 3 days pending)
2. **POL-2026-9420** — No water supply for 3 days, Mumbai Andheri West (Jal Board · 2 days)
3. **POL-2026-9405** — Street lighting failure, Bangalore Whitefield (Roads · 5 days)
4. **POL-2026-9418** — Daily power outages, Hyderabad Banjara Hills (DISCOM · 4 days)
5. **POL-2026-9400** — Contaminated water, Jaipur Mansarovar (Jal Board · 3 days)

*Future: Real-time data via Complaint API*`,"weekly report":`📊 **Weekly Summary — Week 30, 2026:**

• **Total Complaints:** 423 (+12% vs last week)
• **Resolved:** 389 (91.9% resolution rate)
• **Pending:** 34 (−8% improvement)
• **Average Resolution Time:** 3.2 days

**Top Issues:** Infrastructure (32%) • Water (24%) • Electricity (20%)

**Best Department:** Education Dept (100% resolved)
**Needs Attention:** Roads & PWD (42 pending)

*🟣 Future: Groq RAG API for real report generation*`,statistics:`📈 **Complaint Statistics — July 2026:**

**By District:**
• Delhi Central: 487 complaints
• Mumbai North: 412
• Hyderabad West: 345

**By Category:**
• Infrastructure: 421 (32%)
• Water Supply: 312 (24%)
• Electricity: 267 (20%)

**Resolution Rates:**
• Overall: 94.3%
• On-time: 88.1%

*🔴 Future: Real analytics via Backend API*`,department:`🏛️ **Department Status Analysis:**

✅ **Best Performers:** Education Dept (97%), Health Dept (94%), DISCOM (92%)

⚠️ **Needs Attention:**
• **Roads & PWD** — 142 pending complaints, highest backlog
• **Jal Board** — 34 complaints unresolved >5 days

💡 **Recommendation:** Escalate Roads & PWD cases to District Collector. Schedule emergency review meeting for Jal Board.

*🟣 Future: BERT-powered department analysis*`,backlog:`⚡ **Backlog Reduction Actions:**

1. **Immediate (24h):** Assign 8 high-priority Road complaints to additional officers
2. **Short-term (3d):** Deploy mobile water tankers to reduce Jal Board pressure
3. **Weekly:** Conduct departmental review for all complaints >7 days old
4. **Policy:** Implement auto-escalation for complaints >5 days unresolved

📋 **Impact Estimate:** 40% backlog reduction in 2 weeks

*🟣 Future: AI-driven backlog optimization engine*`},u=()=>new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`}),d=e=>{let t=e.toLowerCase();return t.includes(`priority`)||t.includes(`highest`)?l[`highest priority`]:t.includes(`report`)||t.includes(`weekly`)?l[`weekly report`]:t.includes(`statistic`)||t.includes(`district`)||t.includes(`data`)?l.statistics:t.includes(`department`)||t.includes(`attention`)||t.includes(`summary`)?l.department:t.includes(`backlog`)||t.includes(`suggest`)||t.includes(`action`)?l.backlog:`I understand you're asking about "${e}". In production, this will be powered by Groq API with RAG over your live complaint database.\n\n*🟣 TODO: Connect Groq AI Chat API · Future RAG Integration*`},f=e=>{if(!e.trim())return;let t={role:`user`,text:e.trim(),time:u()};n(e=>[...e,t]),i(``),o(!0),setTimeout(()=>{o(!1),n(t=>[...t,{role:`ai`,text:d(e),time:u()}]),setTimeout(()=>s.current?.scrollIntoView({behavior:`smooth`}),50)},1400)};return(0,x.jsxs)(`div`,{className:`space-y-4`,children:[(0,x.jsx)(nt,{tags:[`TODO: Groq AI Chat API`,`🟣 Future RAG Integration`,`🔴 Future Node.js Backend`]}),(0,x.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-4 gap-4`,children:[(0,x.jsxs)(`div`,{className:`lg:col-span-3 rounded-2xl overflow-hidden flex flex-col`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #CBD5E1`,height:500},children:[(0,x.jsxs)(`div`,{className:`flex-1 overflow-y-auto p-5 space-y-4`,children:[t.map((e,t)=>(0,x.jsxs)(`div`,{className:`flex gap-3 ${e.role===`user`?`flex-row-reverse`:``}`,children:[(0,x.jsx)(`div`,{className:`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 text-sm`,style:e.role===`ai`?{background:`linear-gradient(135deg, #0B2447, #138808)`}:{background:`rgba(217,95,0,0.2)`},children:e.role===`ai`?`🤖`:`👤`}),(0,x.jsxs)(`div`,{className:`max-w-[75%] ${e.role===`user`?`items-end`:`items-start`} flex flex-col gap-1`,children:[(0,x.jsx)(`div`,{className:`rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line`,style:e.role===`ai`?{background:`rgba(11,36,71,0.1)`,border:`1px solid rgba(11,36,71,0.2)`,color:`#0B2447`}:{background:`#FFF3E6`,border:`1px solid #FDBA74`,color:`#0B2447`},children:e.text}),(0,x.jsx)(`span`,{className:`text-white/25 text-xs px-1`,children:e.time})]})]},t)),a&&(0,x.jsxs)(`div`,{className:`flex gap-3`,children:[(0,x.jsx)(`div`,{className:`w-8 h-8 rounded-xl flex items-center justify-center text-sm`,style:{background:`linear-gradient(135deg, #0B2447, #138808)`},children:`🤖`}),(0,x.jsx)(`div`,{className:`rounded-2xl px-5 py-4`,style:{background:`rgba(11,36,71,0.1)`,border:`1px solid rgba(11,36,71,0.2)`},children:(0,x.jsx)(`div`,{className:`flex gap-1.5`,children:[0,1,2].map(e=>(0,x.jsx)(`div`,{className:`w-2 h-2 rounded-full typing-dot`,style:{background:`#0B2447`,animationDelay:`${e*.2}s`}},e))})})]}),(0,x.jsx)(`div`,{ref:s})]}),(0,x.jsxs)(`div`,{className:`p-4 flex gap-3`,style:{borderTop:`1px solid #CBD5E1`},children:[(0,x.jsx)(`input`,{className:`input-field flex-1 py-2.5 text-sm`,placeholder:`Ask about complaints, analytics, departments…`,value:r,onChange:e=>i(e.target.value),onKeyDown:e=>e.key===`Enter`&&!a&&f(r)}),(0,x.jsx)(`button`,{className:`btn-orange px-4 py-2 text-sm`,onClick:()=>f(r),disabled:a||!r.trim(),children:`Send`})]})]}),(0,x.jsxs)(`div`,{className:`rounded-2xl p-4`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #CBD5E1`},children:[(0,x.jsx)(`h3`,{className:`text-white font-semibold text-sm mb-3`,style:{fontFamily:`Poppins`},children:`Suggested Questions`}),(0,x.jsx)(`div`,{className:`space-y-2`,children:c.map(e=>(0,x.jsx)(`button`,{onClick:()=>f(e),className:`w-full text-left text-xs px-3 py-2.5 rounded-xl transition-all hover:bg-white/08 text-white/60 hover:text-white`,style:{background:`#F8FAFC`,border:`1px solid #CBD5E1`},children:e},e))})]})]})]})}function ct(){let[e,t]=(0,b.useState)(!1),[n,r]=(0,b.useState)(`idle`),[i,a]=(0,b.useState)(!1);return(0,x.jsxs)(`div`,{className:`space-y-5`,children:[(0,x.jsx)(nt,{tags:[`TODO: Whisper API`,`🟣 Future DeepSpeech Integration`,`🔴 Future Speech Processing Backend`]}),(0,x.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-2 gap-5`,children:[(0,x.jsxs)(`div`,{className:`rounded-2xl p-6`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #CBD5E1`},children:[(0,x.jsx)(`h3`,{className:`text-white font-semibold mb-5`,style:{fontFamily:`Poppins`},children:`Live Voice Recording`}),(0,x.jsx)(`div`,{className:`flex items-center justify-center gap-0.5 h-16 mb-6`,style:{background:`#F1F5F9`,borderRadius:12},children:[20,45,30,65,40,75,50,35,60,25,55,40,70,45,30,65,50,35,55,40].map((t,n)=>(0,x.jsx)(`div`,{className:`rounded-full transition-all`,style:{width:4,height:e?`${t*(.5+Math.random()*.5)}%`:`12%`,background:e?`hsl(${200+n*5}, 80%, 60%)`:`rgba(255,255,255,0.12)`,transition:e?`height 0.15s`:`height 0.5s`}},n))}),(0,x.jsxs)(`div`,{className:`text-center mb-6`,children:[n===`idle`&&(0,x.jsx)(`p`,{className:`text-white/40 text-sm`,children:`Press the microphone to start recording`}),n===`recording`&&(0,x.jsx)(`p`,{className:`text-cyan-400 text-sm`,children:`🔴 Recording… Speak clearly into your microphone`}),n===`processing`&&(0,x.jsx)(`p`,{className:`text-purple-400 text-sm`,children:`🔄 Processing with Whisper AI…`}),n===`done`&&(0,x.jsx)(`p`,{className:`text-green-400 text-sm`,children:`✅ Voice complaint processed successfully`})]}),(0,x.jsx)(`div`,{className:`flex justify-center mb-5`,children:(0,x.jsx)(`button`,{onClick:()=>{n===`idle`||n===`done`?(r(`recording`),t(!0),setTimeout(()=>{t(!1),r(`processing`),setTimeout(()=>r(`done`),2e3)},4e3)):n===`recording`&&(t(!1),r(`processing`),setTimeout(()=>r(`done`),2e3))},className:`w-20 h-20 rounded-full flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95`,style:{background:e?`linear-gradient(135deg, #f87171, #dc2626)`:`linear-gradient(135deg, #138808, #0057a8)`,boxShadow:e?`0 0 0 12px rgba(239,68,68,0.2), 0 4px 24px rgba(239,68,68,0.4)`:`0 4px 24px rgba(19,136,8,0.4)`,animation:e?`pulse-cyan 1s infinite`:`none`},children:(0,x.jsx)(`svg`,{className:`w-10 h-10`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 016 0v6a3 3 0 01-3 3z`})})})}),(0,x.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,x.jsx)(`div`,{className:`flex-1 h-px`,style:{background:`#E2E8F0`}}),(0,x.jsx)(`span`,{className:`text-white/25 text-xs`,children:`or upload audio`}),(0,x.jsx)(`div`,{className:`flex-1 h-px`,style:{background:`#E2E8F0`}})]}),(0,x.jsx)(`button`,{onClick:()=>{r(`processing`),a(!0),setTimeout(()=>r(`done`),2500)},className:`w-full mt-4 py-2.5 rounded-xl text-sm transition-all hover:bg-white/08 text-white/55 hover:text-white`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #94A3B8`},children:`📁 Upload Audio File (.mp3, .wav, .ogg)`})]}),(0,x.jsx)(`div`,{className:`space-y-4`,children:n===`done`?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(`div`,{className:`rounded-2xl p-5`,style:{background:`rgba(11,36,71,0.06)`,border:`1px solid rgba(11,36,71,0.2)`},children:[(0,x.jsx)(`div`,{className:`text-purple-400 text-xs font-bold uppercase tracking-wider mb-3`,children:`Speech Transcript`}),(0,x.jsx)(`p`,{className:`text-white/70 text-sm leading-relaxed mb-3`,children:`Main Delhi ke Sector 12 mein rehta hoon. Yahaan ki sadak bahut kharab hai aur pani nahi aa raha. Teen din se log pareshan hain. Koi attention nahi de raha. Please jaldi kuch karo.`}),(0,x.jsx)(`div`,{className:`h-px my-2`,style:{background:`#E2E8F0`}}),(0,x.jsx)(`div`,{className:`text-white/40 text-xs font-semibold mb-1`,children:`English Translation`}),(0,x.jsx)(`p`,{className:`text-white/60 text-sm leading-relaxed`,children:`I live in Sector 12, Delhi. The road condition here is very bad and there's no water supply for 3 days. Residents are troubled. No one is paying attention. Please take action quickly.`})]}),(0,x.jsxs)(`div`,{className:`rounded-2xl p-5`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #CBD5E1`},children:[(0,x.jsx)(`div`,{className:`text-white/40 text-xs font-bold uppercase tracking-wider mb-4`,children:`AI Detection Results`}),(0,x.jsx)(`div`,{className:`grid grid-cols-2 gap-3`,children:[{label:`Category`,value:`Infrastructure`,color:`#D95F00`},{label:`Priority`,value:`High`,color:`#f87171`},{label:`Department`,value:`Roads & PWD`,color:`#138808`},{label:`Confidence`,value:`94.3%`,color:`#10b981`}].map(e=>(0,x.jsxs)(`div`,{className:`p-3 rounded-xl`,style:{background:`${e.color}10`,border:`1px solid ${e.color}20`},children:[(0,x.jsx)(`div`,{className:`text-white/40 text-xs mb-1`,children:e.label}),(0,x.jsx)(`div`,{className:`font-semibold text-sm`,style:{color:e.color},children:e.value})]},e.label))})]})]}):(0,x.jsx)(`div`,{className:`rounded-2xl p-6 flex items-center justify-center`,style:{background:`#F8FAFC`,border:`1px dashed rgba(255,255,255,0.1)`,minHeight:300},children:n===`processing`?(0,x.jsxs)(`div`,{className:`text-center`,children:[(0,x.jsx)(`div`,{className:`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4`,style:{background:`rgba(11,36,71,0.15)`,animation:`pulse-cyan 1.5s infinite`},children:(0,x.jsx)(`span`,{className:`text-2xl`,children:`🧠`})}),(0,x.jsx)(`p`,{className:`text-purple-400 text-sm`,children:`AI processing voice…`}),(0,x.jsx)(`p`,{className:`text-white/30 text-xs mt-1`,children:`Whisper transcription · BERT analysis`})]}):(0,x.jsxs)(`div`,{className:`text-center`,children:[(0,x.jsx)(`span`,{className:`text-5xl mb-3 block`,children:`🎙️`}),(0,x.jsx)(`p`,{className:`text-white/30 text-sm`,children:`AI analysis will appear here`})]})})})]})]})}function lt(){let[e,t]=(0,b.useState)(``),[n,r]=(0,b.useState)(null),[i,a]=(0,b.useState)(!1),o={category:`Infrastructure`,subCategory:`Road Damage / Pothole`,priority:`High`,department:`Roads & PWD`,suggestedOfficer:`Shri. Ramesh Gupta (Senior Engineer)`,timeline:`3–5 Working Days`,confidence:94.3,sentimentScore:-.72,keywords:[`road`,`pothole`,`damage`,`safety hazard`,`waterlogging`],suggestedActions:[`Assign to Roads & PWD for immediate inspection`,`Schedule site visit within 24 hours`,`Escalate to District Engineer if unresolved in 3 days`]},s=[`The road in front of my house has a huge pothole. My car got damaged twice this month. It is dangerous for two-wheelers.`,`Water supply has been completely stopped for 4 days. Families are suffering. No response from the water board.`,`Street lights are not working for 2 weeks. The entire lane is dark at night and it feels very unsafe.`],c=n=>{(n||e).trim()&&(n&&t(n),a(!0),r(null),setTimeout(()=>{a(!1),r(o)},1800))};return(0,x.jsxs)(`div`,{className:`space-y-5`,children:[(0,x.jsx)(nt,{tags:[`TODO: BERT Classification API`,`🟣 Future Transformers Integration`,`🔴 Future Python Backend`]}),(0,x.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-2 gap-5`,children:[(0,x.jsxs)(`div`,{className:`space-y-4`,children:[(0,x.jsxs)(`div`,{className:`rounded-2xl p-5`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #CBD5E1`},children:[(0,x.jsx)(`h3`,{className:`text-white font-semibold mb-4`,style:{fontFamily:`Poppins`},children:`Complaint Text Input`}),(0,x.jsx)(`textarea`,{className:`input-field text-sm leading-relaxed resize-none`,rows:6,placeholder:`Paste complaint text here to classify with AI…`,value:e,onChange:e=>t(e.target.value)}),(0,x.jsx)(`button`,{className:`btn-orange w-full mt-4 py-2.5 text-sm flex items-center justify-center gap-2`,onClick:()=>c(),disabled:i||!e.trim(),children:i?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(`svg`,{className:`w-4 h-4 animate-spin`,viewBox:`0 0 24 24`,fill:`none`,children:[(0,x.jsx)(`circle`,{className:`opacity-25`,cx:`12`,cy:`12`,r:`10`,stroke:`currentColor`,strokeWidth:`4`}),(0,x.jsx)(`path`,{className:`opacity-75`,fill:`currentColor`,d:`M4 12a8 8 0 018-8v8H4z`})]}),` Classifying…`]}):(0,x.jsx)(x.Fragment,{children:`🧠 Classify with AI`})})]}),(0,x.jsxs)(`div`,{className:`rounded-2xl p-5`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #CBD5E1`},children:[(0,x.jsx)(`h3`,{className:`text-white font-semibold mb-3 text-sm`,style:{fontFamily:`Poppins`},children:`Sample Complaints`}),(0,x.jsx)(`div`,{className:`space-y-2`,children:s.map((e,t)=>(0,x.jsxs)(`button`,{onClick:()=>c(e),className:`w-full text-left text-xs px-3 py-2.5 rounded-xl transition-all hover:bg-white/08 text-white/55 hover:text-white leading-relaxed`,style:{background:`#F8FAFC`,border:`1px solid #CBD5E1`},children:[`"`,e.slice(0,80),`…"`]},t))})]})]}),(0,x.jsx)(`div`,{children:!n&&!i?(0,x.jsxs)(`div`,{className:`rounded-2xl p-8 flex flex-col items-center justify-center text-center`,style:{background:`#F8FAFC`,border:`1px dashed rgba(255,255,255,0.1)`,minHeight:350},children:[(0,x.jsx)(`span`,{className:`text-5xl mb-4 block`,children:`🧠`}),(0,x.jsx)(`p`,{className:`text-white/30 text-sm`,children:`Enter a complaint or pick a sample to see AI classification results`})]}):i?(0,x.jsxs)(`div`,{className:`rounded-2xl p-8 flex flex-col items-center justify-center text-center`,style:{background:`rgba(11,36,71,0.05)`,border:`1px solid rgba(11,36,71,0.2)`,minHeight:350},children:[(0,x.jsx)(`div`,{className:`w-14 h-14 rounded-full flex items-center justify-center mb-4`,style:{background:`rgba(11,36,71,0.15)`,animation:`pulse-cyan 1.5s infinite`},children:(0,x.jsx)(`span`,{className:`text-2xl`,children:`🧠`})}),(0,x.jsx)(`p`,{className:`text-purple-400 text-sm`,children:`BERT model analyzing…`}),(0,x.jsx)(`p`,{className:`text-white/25 text-xs mt-2`,children:`Tokenizing · Classifying · Scoring`})]}):n&&(0,x.jsxs)(`div`,{className:`rounded-2xl p-5 space-y-4`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #CBD5E1`},children:[(0,x.jsxs)(`div`,{className:`flex items-center gap-2 mb-2`,children:[(0,x.jsx)(`span`,{className:`text-green-400 text-sm font-semibold`,children:`✅ Classification Complete`}),(0,x.jsxs)(`span`,{className:`text-xs px-2 py-0.5 rounded-full ml-auto`,style:{background:`rgba(16,185,129,0.12)`,color:`#10b981`},children:[n.confidence,`% confidence`]})]}),(0,x.jsx)(`div`,{className:`grid grid-cols-2 gap-3`,children:[{label:`Category`,value:n.category,color:`#D95F00`},{label:`Sub-Category`,value:n.subCategory,color:`#fbbf24`},{label:`Priority`,value:n.priority,color:{High:`#f87171`,Medium:`#fbbf24`,Low:`#10b981`}[n.priority]},{label:`Department`,value:n.department,color:`#138808`},{label:`Officer`,value:n.suggestedOfficer.split(` (`)[0],color:`#0B2447`},{label:`Timeline`,value:n.timeline,color:`#10b981`}].map(e=>(0,x.jsxs)(`div`,{className:`p-3 rounded-xl`,style:{background:`${e.color}08`,border:`1px solid ${e.color}18`},children:[(0,x.jsx)(`div`,{className:`text-white/35 text-xs mb-1`,children:e.label}),(0,x.jsx)(`div`,{className:`text-sm font-semibold truncate`,style:{color:e.color},children:e.value})]},e.label))}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`div`,{className:`text-white/35 text-xs mb-2`,children:`Detected Keywords`}),(0,x.jsx)(`div`,{className:`flex flex-wrap gap-1.5`,children:n.keywords.map(e=>(0,x.jsx)(`span`,{className:`text-xs px-2 py-1 rounded-lg`,style:{background:`rgba(19,136,8,0.1)`,color:`#138808`,border:`1px solid rgba(19,136,8,0.2)`},children:e},e))})]}),(0,x.jsxs)(`div`,{children:[(0,x.jsxs)(`div`,{className:`flex justify-between text-xs mb-1.5`,children:[(0,x.jsx)(`span`,{className:`text-white/35`,children:`Sentiment Score`}),(0,x.jsxs)(`span`,{className:`text-red-400 font-semibold`,children:[n.sentimentScore,` (Negative)`]})]}),(0,x.jsx)(`div`,{className:`h-1.5 rounded-full relative`,style:{background:`#E2E8F0`},children:(0,x.jsx)(`div`,{className:`absolute left-1/2 top-0 w-3 h-3 -translate-x-1/2 -translate-y-1/4 rounded-full`,style:{background:`#f87171`,left:`${(1+n.sentimentScore)*50}%`}})}),(0,x.jsxs)(`div`,{className:`flex justify-between text-xs text-white/20 mt-1`,children:[(0,x.jsx)(`span`,{children:`Negative`}),(0,x.jsx)(`span`,{children:`Neutral`}),(0,x.jsx)(`span`,{children:`Positive`})]})]}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`div`,{className:`text-white/35 text-xs mb-2`,children:`Suggested Actions`}),n.suggestedActions.map((e,t)=>(0,x.jsxs)(`div`,{className:`flex items-start gap-2 text-xs text-white/60 mb-1.5`,children:[(0,x.jsxs)(`span`,{className:`text-cyan-400 flex-shrink-0 mt-0.5`,children:[t+1,`.`]}),e]},t))]})]})})]})]})}function ut({navigate:e}){let t=[{title:`Emergency Road Repair — Delhi NCR`,priority:`Urgent`,dept:`Roads & PWD`,impact:`High`,color:`#f87171`,icon:`🛣️`,desc:`142 pending road complaints in Delhi NCR require immediate field deployment.`,cta:`Deploy Team`},{title:`Water Supply Audit — Mumbai West`,priority:`Urgent`,dept:`Jal Board`,impact:`High`,color:`#138808`,icon:`💧`,desc:`Pattern analysis shows systematic supply failure — infrastructure audit recommended.`,cta:`Initiate Audit`},{title:`Night Patrol — Bangalore Whitefield`,priority:`High`,dept:`Police`,impact:`Med`,color:`#D95F00`,icon:`👮`,desc:`18 safety complaints in last 7 days from this zone. Increase patrol visibility.`,cta:`Assign Patrol`},{title:`Sanitation Drive — Ahmedabad Zone 3`,priority:`Medium`,dept:`Municipal Corp.`,impact:`Med`,color:`#10b981`,icon:`🗑️`,desc:`Collection delay causing hygiene risk. Recommend one-time intensive cleanup.`,cta:`Schedule Drive`}],n=[{area:`Delhi Central`,score:94,category:`Infrastructure`,count:187},{area:`Mumbai Andheri`,score:87,category:`Water Supply`,count:142},{area:`Hyderabad Old City`,score:78,category:`Electricity`,count:112},{area:`Bangalore Whitefield`,score:72,category:`Safety`,count:98},{area:`Chennai T.Nagar`,score:65,category:`Sanitation`,count:76}],r=[{title:`Weekly AI Insight`,text:`Complaint volume trending upward (+12% MoM). Pre-emptive deployment in Delhi and Mumbai can reduce peak load by ~35%.`,color:`#0B2447`,icon:`📊`},{title:`Pattern Detected`,text:`Water supply complaints cluster on Mondays post-weekend. Recommend increasing Jal Board capacity on Sundays.`,color:`#138808`,icon:`🔍`},{title:`Risk Alert`,text:`Monsoon season approaching. Flood + road complaint surge predicted in 6 zones. Pre-position resources.`,color:`#f87171`,icon:`⚠️`},{title:`Efficiency Gain`,text:`Implementing auto-routing for low-complexity complaints can reduce officer load by ~28%. Recommend piloting in Health Dept.`,color:`#10b981`,icon:`⚡`}],i={Urgent:`#f87171`,High:`#D95F00`,Medium:`#fbbf24`,Low:`#10b981`};return(0,x.jsxs)(`div`,{className:`space-y-5`,children:[(0,x.jsx)(nt,{tags:[`TODO: Recommendation Engine API`,`🟣 Future Groq AI Analysis`,`🔴 Future Python Backend`]}),(0,x.jsxs)(`div`,{className:`rounded-2xl p-4 flex items-start gap-4`,style:{background:`rgba(239,68,68,0.06)`,border:`1px solid rgba(239,68,68,0.2)`},children:[(0,x.jsx)(`span`,{className:`text-2xl`,children:`🚨`}),(0,x.jsxs)(`div`,{className:`flex-1`,children:[(0,x.jsx)(`div`,{className:`text-red-400 font-semibold text-sm mb-1`,style:{fontFamily:`Poppins`},children:`Emergency Alert — 3 Critical Areas`}),(0,x.jsx)(`p`,{className:`text-white/60 text-xs`,children:`Delhi NCR, Mumbai West, and Hyderabad Zone 4 require immediate intervention based on AI pattern analysis. Total affected citizens: ~12,400`})]}),(0,x.jsx)(`button`,{onClick:()=>e(`admin-complaints`),className:`text-xs px-3 py-1.5 rounded-lg font-semibold flex-shrink-0`,style:{background:`rgba(239,68,68,0.15)`,color:`#f87171`,border:`1px solid rgba(239,68,68,0.3)`},children:`View Complaints`})]}),(0,x.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-3 gap-5`,children:[(0,x.jsxs)(`div`,{className:`lg:col-span-2 space-y-3`,children:[(0,x.jsx)(`h3`,{className:`text-white font-semibold`,style:{fontFamily:`Poppins`},children:`Recommended Actions`}),t.map(e=>(0,x.jsxs)(`div`,{className:`rounded-2xl p-5 flex gap-4`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid ${e.color}18`},children:[(0,x.jsx)(`span`,{className:`text-2xl flex-shrink-0`,children:e.icon}),(0,x.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,x.jsxs)(`div`,{className:`flex items-start gap-2 flex-wrap mb-2`,children:[(0,x.jsx)(`h4`,{className:`text-white font-semibold text-sm`,style:{fontFamily:`Poppins`},children:e.title}),(0,x.jsx)(`span`,{className:`text-xs px-1.5 py-0.5 rounded ml-auto flex-shrink-0`,style:{background:`${i[e.priority]}12`,color:i[e.priority]},children:e.priority})]}),(0,x.jsx)(`p`,{className:`text-white/55 text-xs leading-relaxed mb-3`,children:e.desc}),(0,x.jsxs)(`div`,{className:`flex items-center gap-3 flex-wrap`,children:[(0,x.jsx)(`span`,{className:`text-xs text-white/35`,children:e.dept}),(0,x.jsx)(`span`,{className:`text-white/20 text-xs`,children:`·`}),(0,x.jsxs)(`span`,{className:`text-xs text-white/35`,children:[`Impact: `,e.impact]}),(0,x.jsx)(`button`,{className:`ml-auto text-xs px-3 py-1.5 rounded-lg font-semibold transition-all hover:opacity-90`,style:{background:`${e.color}18`,color:e.color,border:`1px solid ${e.color}25`},onClick:()=>alert(`Action initiated: ${e.title} · Future: Assignment API`),children:e.cta})]})]})]},e.title))]}),(0,x.jsxs)(`div`,{className:`space-y-4`,children:[(0,x.jsxs)(`div`,{className:`rounded-2xl p-5`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #CBD5E1`},children:[(0,x.jsx)(`h3`,{className:`text-white font-semibold text-sm mb-4`,style:{fontFamily:`Poppins`},children:`High Priority Areas`}),(0,x.jsx)(`div`,{className:`space-y-3`,children:n.map(e=>(0,x.jsxs)(`div`,{children:[(0,x.jsxs)(`div`,{className:`flex justify-between text-xs mb-1`,children:[(0,x.jsx)(`span`,{className:`text-white/65`,children:e.area}),(0,x.jsxs)(`span`,{className:`text-white/40`,children:[e.count,` issues`]})]}),(0,x.jsx)(`div`,{className:`h-1.5 rounded-full`,style:{background:`#E2E8F0`},children:(0,x.jsx)(`div`,{className:`h-full rounded-full`,style:{width:`${e.score}%`,background:e.score>85?`#f87171`:e.score>70?`#D95F00`:`#fbbf24`}})})]},e.area))})]}),(0,x.jsxs)(`div`,{className:`rounded-2xl p-5`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid #CBD5E1`},children:[(0,x.jsx)(`h3`,{className:`text-white font-semibold text-sm mb-4`,style:{fontFamily:`Poppins`},children:`🤖 AI Insights`}),(0,x.jsx)(`div`,{className:`space-y-3`,children:r.map(e=>(0,x.jsxs)(`div`,{className:`p-3 rounded-xl`,style:{background:`${e.color}07`,border:`1px solid ${e.color}18`},children:[(0,x.jsxs)(`div`,{className:`flex items-center gap-1.5 mb-1`,children:[(0,x.jsx)(`span`,{className:`text-base`,children:e.icon}),(0,x.jsx)(`span`,{className:`text-xs font-semibold`,style:{color:e.color},children:e.title})]}),(0,x.jsx)(`p`,{className:`text-white/50 text-xs leading-relaxed`,children:e.text})]},e.title))})]})]})]})]})}function dt({navigate:e}){let t=S(),[n,r]=(0,b.useState)(null),i=(e,n)=>{r(n),setTimeout(()=>{r(null),t({type:`dev`,title:`${e} — Development Mode`,msg:`Export triggered successfully. Real ${n.toUpperCase()} generation via Node.js + PDFKit will be connected in the backend build.`})},1800)},a=[{label:`Export as PDF`,type:`pdf`,icon:`📄`,color:`#f87171`,desc:`Full complaint report with charts and analytics`},{label:`Export as Excel`,type:`excel`,icon:`📊`,color:`#10b981`,desc:`Tabular data for further analysis in spreadsheets`},{label:`Generate AI Report`,type:`ai`,icon:`🤖`,color:`#0B2447`,desc:`AI-written executive summary with Groq API`},{label:`Print Report`,type:`print`,icon:`🖨️`,color:`#138808`,desc:`Print-formatted complaint dashboard`},{label:`Download Raw Data`,type:`json`,icon:`💾`,color:`#fbbf24`,desc:`JSON export for developer / data science use`},{label:`Email Report`,type:`email`,icon:`📧`,color:`#D95F00`,desc:`Send report to registered government email address`}],o=[{name:`Weekly Summary — Week 30`,type:`PDF`,size:`2.4 MB`,date:`1 Aug 2026`,status:`Ready`},{name:`Complaint Data Export — July`,type:`Excel`,size:`1.1 MB`,date:`31 Jul 2026`,status:`Ready`},{name:`AI Executive Report — Q2 2026`,type:`AI PDF`,size:`3.8 MB`,date:`1 Jul 2026`,status:`Ready`},{name:`Department Performance — June`,type:`Excel`,size:`890 KB`,date:`30 Jun 2026`,status:`Ready`}],s={PDF:`#f87171`,Excel:`#10b981`,"AI PDF":`#0B2447`,JSON:`#fbbf24`};return(0,x.jsxs)(`div`,{className:`space-y-5`,children:[(0,x.jsx)(nt,{tags:[`TODO: Report Generation API`,`🔴 Future PDF Generator (Node.js + PDFKit)`,`🟣 Future AI Report (Groq)`,`🟢 Future MongoDB Export`]}),(0,x.jsx)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`,children:a.map(e=>(0,x.jsxs)(`button`,{onClick:()=>i(e.label,e.type),className:`rounded-2xl p-5 text-left transition-all hover:-translate-y-0.5 hover:shadow-lg group`,style:{background:`#FFFFFF`,boxShadow:`0 4px 14px rgba(11,36,71,0.06)`,border:`1px solid ${e.color}20`},disabled:n===e.type,children:[(0,x.jsxs)(`div`,{className:`flex items-center gap-3 mb-3`,children:[(0,x.jsx)(`div`,{className:`w-12 h-12 rounded-xl flex items-center justify-center text-2xl`,style:{background:`${e.color}15`},children:n===e.type?(0,x.jsxs)(`svg`,{className:`w-6 h-6 animate-spin`,style:{color:e.color},viewBox:`0 0 24 24`,fill:`none`,children:[(0,x.jsx)(`circle`,{className:`opacity-25`,cx:`12`,cy:`12`,r:`10`,stroke:`currentColor`,strokeWidth:`4`}),(0,x.jsx)(`path`,{className:`opacity-75`,fill:`currentColor`,d:`M4 12a8 8 0 018-8v8H4z`})]}):e.icon}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`div`,{className:`text-white font-semibold text-sm`,style:{fontFamily:`Poppins`},children:e.label}),(0,x.jsx)(`div`,{className:`text-xs mt-0.5`,style:{color:e.color},children:e.type.toUpperCase()})]})]}),(0,x.jsx)(`p`,{className:`text-white/40 text-xs leading-relaxed`,children:e.desc}),(0,x.jsx)(`div`,{className:`mt-3 text-xs font-semibold py-2 rounded-lg text-center transition-all`,style:{background:n===e.type?`${e.color}25`:`${e.color}12`,color:e.color,border:`1px solid ${e.color}25`},children:n===e.type?`Generating…`:e.label})]},e.type))}),(0,x.jsxs)(`div`,{className:`rounded-2xl overflow-hidden`,style:{border:`1px solid #CBD5E1`},children:[(0,x.jsxs)(`div`,{className:`px-5 py-3 flex items-center justify-between`,style:{background:`#F8FAFC`,borderBottom:`1px solid #CBD5E1`},children:[(0,x.jsx)(`h3`,{className:`text-white font-semibold text-sm`,style:{fontFamily:`Poppins`},children:`Recent Exports`}),(0,x.jsx)(`button`,{onClick:()=>e(`admin-reports`),className:`text-cyan-400 text-xs hover:underline`,children:`View All Reports`})]}),(0,x.jsx)(`div`,{className:`divide-y`,style:{"--divide-color":`#CBD5E1`},children:o.map(e=>(0,x.jsxs)(`div`,{className:`flex items-center gap-4 px-5 py-4 hover:bg-white/02 transition-all`,children:[(0,x.jsx)(`div`,{className:`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0`,style:{background:`${s[e.type]||`#0B2447`}15`},children:(0,x.jsx)(`span`,{className:`text-lg`,children:e.type===`PDF`||e.type===`AI PDF`?`📄`:e.type===`Excel`?`📊`:`💾`})}),(0,x.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,x.jsx)(`div`,{className:`text-white font-medium text-sm truncate`,children:e.name}),(0,x.jsxs)(`div`,{className:`text-white/35 text-xs mt-0.5`,children:[e.date,` · `,e.size]})]}),(0,x.jsx)(`span`,{className:`text-xs px-2 py-0.5 rounded-full flex-shrink-0`,style:{background:`${s[e.type]||`#0B2447`}15`,color:s[e.type]||`#0B2447`},children:e.type}),(0,x.jsxs)(`div`,{className:`flex gap-1.5 flex-shrink-0`,children:[(0,x.jsx)(`button`,{className:`text-xs px-3 py-1.5 rounded-lg text-white/55 hover:text-white transition-all`,style:{background:`#F1F5F9`},onClick:()=>i(e.name,`download`),children:`Download`}),(0,x.jsx)(`button`,{className:`text-xs px-3 py-1.5 rounded-lg text-white/55 hover:text-white transition-all`,style:{background:`#F1F5F9`},onClick:()=>window.print(),children:`Print`})]})]},e.name))})]})]})}function ft({page:e,navigate:t}){let[n,r]=(0,b.useState)(!0);return(0,x.jsxs)(`div`,{className:`flex h-screen overflow-hidden`,style:{background:`linear-gradient(180deg, #FFF7EE 0%, #FFFFFF 48%, #F1F9F2 100%)`},children:[(0,x.jsx)(Ge,{expanded:n,setExpanded:r,activePage:e,navigate:t}),(0,x.jsxs)(`div`,{className:`flex flex-col flex-1 min-w-0 overflow-hidden`,children:[(0,x.jsx)(Ke,{activePage:e,navigate:t}),(0,x.jsx)(`main`,{className:`flex-1 overflow-y-auto`,style:{background:`linear-gradient(180deg, #FFF7EE 0%, #FFFFFF 48%, #F1F9F2 100%)`},children:(()=>{switch(e){case`admin-dashboard`:return(0,x.jsx)(qe,{navigate:t});case`admin-complaints`:return(0,x.jsx)(Je,{navigate:t});case`admin-departments`:return(0,x.jsx)(Xe,{});case`admin-reports`:return(0,x.jsx)(Ze,{});case`admin-notifications`:return(0,x.jsx)(Qe,{});case`admin-profile`:return(0,x.jsx)($e,{});case`admin-settings`:return(0,x.jsx)(et,{});case`admin-users`:return(0,x.jsx)(tt,{});case`admin-analytics`:return(0,x.jsx)(rt,{navigate:t});case`admin-heatmap`:return(0,x.jsx)(it,{});case`admin-prediction`:return(0,x.jsx)(at,{});case`admin-ai`:return(0,x.jsx)(ot,{navigate:t});default:return(0,x.jsx)(qe,{navigate:t})}})()})]})]})}function pt({navigate:e}){let[t,n]=(0,b.useState)(!1);return(0,x.jsxs)(`div`,{className:`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3`,children:[t&&(0,x.jsxs)(`div`,{className:`glass rounded-2xl p-4 w-72 shadow-2xl`,style:{border:`1px solid rgba(19,136,8,0.2)`},children:[(0,x.jsxs)(`div`,{className:`flex items-center justify-between mb-3`,children:[(0,x.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,x.jsx)(`div`,{className:`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white`,style:{background:`linear-gradient(135deg, #138808, #0057a8)`},children:`AI`}),(0,x.jsx)(`span`,{className:`text-white font-semibold text-sm`,style:{fontFamily:`Poppins`},children:`POLISENCE AI`})]}),(0,x.jsx)(`button`,{onClick:()=>n(!1),className:`text-white/40 hover:text-white`,children:w.close})]}),(0,x.jsx)(`p`,{className:`text-white/70 text-sm mb-4`,children:`Hi! How can I help you with governance today?`}),(0,x.jsx)(`div`,{className:`space-y-2 mb-4`,children:[`Register a complaint`,`Track my complaint`,`Government schemes`].map(t=>(0,x.jsx)(`button`,{onClick:()=>{e(`ai-assistant`),n(!1),window.scrollTo(0,0)},className:`w-full text-left text-xs px-3 py-2.5 rounded-lg text-white/70 hover:text-white transition-all`,style:{background:`rgba(19,136,8,0.06)`,border:`1px solid rgba(19,136,8,0.12)`},children:t},t))}),(0,x.jsx)(`button`,{className:`btn-orange w-full text-sm py-2.5`,onClick:()=>{e(`ai-assistant`),n(!1),window.scrollTo(0,0)},children:`Open Full AI Chat`})]}),(0,x.jsx)(`button`,{onClick:()=>n(!t),className:`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-transform hover:scale-110 active:scale-95`,style:{background:`linear-gradient(135deg, #138808, #0057a8)`,boxShadow:`0 4px 24px rgba(19,136,8,0.4)`},title:`Open AI Assistant`,children:t?w.close:w.chat})]})}var mt=0;function A(){let[e,t]=(0,b.useState)(`home`),[n,r]=(0,b.useState)(`home`),[i,a]=(0,b.useState)([]),o=(0,b.useCallback)(e=>{let t=++mt;a(n=>[...n,{...e,id:t}]),setTimeout(()=>a(e=>e.filter(e=>e.id!==t)),5500)},[]),s=(0,b.useCallback)(e=>a(t=>t.filter(t=>t.id!==e)),[]),c=n=>{r(e),t(n),window.scrollTo(0,0)},l=()=>{t(n===e?`home`:n),window.scrollTo(0,0)},u=[`role-selection`,`create-account`,`admin-login`,`strategy-login`,`forgot-password`,`access-restricted`,`session-expired`],d=[`admin-dashboard`,`admin-complaints`,`admin-departments`,`admin-reports`,`admin-notifications`,`admin-profile`,`admin-settings`,`admin-users`,`admin-analytics`,`admin-heatmap`,`admin-prediction`,`admin-ai`],f=[`strategy-dashboard`,`strategy-constituency`,`strategy-chatbot`,`strategy-speech`,`strategy-campaigns`,`strategy-manifesto`,`strategy-warroom`,`strategy-calendar`],p=u.includes(e),m=d.includes(e),h=f.includes(e),g=()=>{if(m)return(0,x.jsx)(ft,{page:e,navigate:c});if(h)return(0,x.jsx)(Ne,{page:e,navigate:c});switch(e){case`home`:return(0,x.jsx)(T,{navigate:c});case`about`:return(0,x.jsx)(re,{});case`features`:return(0,x.jsx)(ie,{navigate:c});case`register`:return(0,x.jsx)(ae,{navigate:c});case`success`:return(0,x.jsx)(oe,{navigate:c});case`track`:return(0,x.jsx)(ce,{onBack:l});case`letter`:return(0,x.jsx)(se,{navigate:c});case`ai-assistant`:return(0,x.jsx)(le,{});case`contact`:return(0,x.jsx)(E,{});case`role-selection`:return(0,x.jsx)(fe,{navigate:c});case`create-account`:return(0,x.jsx)(pe,{navigate:c});case`admin-login`:return(0,x.jsx)(me,{navigate:c});case`strategy-login`:return(0,x.jsx)(he,{navigate:c});case`forgot-password`:return(0,x.jsx)(Pe,{navigate:c});case`access-restricted`:return(0,x.jsx)(Fe,{navigate:c});case`session-expired`:return(0,x.jsx)(Ie,{navigate:c});default:return(0,x.jsx)(T,{navigate:c})}},_=m||h;return(0,x.jsxs)(ee.Provider,{value:o,children:[(0,x.jsx)(C,{toasts:i,dismiss:s}),_?g():(0,x.jsxs)(`div`,{style:{minHeight:`100vh`,background:`linear-gradient(180deg, #FFF7EE 0%, #FFFFFF 48%, #F1F9F2 100%)`},children:[(0,x.jsx)(te,{currentPage:e,navigate:c}),(0,x.jsx)(`main`,{children:g()}),!p&&e!==`ai-assistant`&&(0,x.jsx)(pt,{navigate:c}),!p&&(0,x.jsx)(ne,{navigate:c})]})]})}

const HI_DICT = {
  "Home": "होम",
  "About": "परिचय",
  "Features": "विशेषताएं",
  "AI Assistant": "एआई सहायक",
  "Contact": "संपर्क",
  "Track Complaint": "शिकायत ट्रैक करें",
  "Register Complaint": "शिकायत पंजीकरण",
  "Login": "लॉगिन",
  "Register a Complaint": "शिकायत दर्ज करें",
  "Talk to AI Assistant": "एआई सहायक से बात करें",
  "Ask AI Assistant": "एआई सहायक से पूछें",
  "View All Features": "सभी विशेषताएं देखें",
  "Start Your Complaint": "अपनी शिकायत दर्ज करें",
  "Complaints Resolved": "निस्तारित शिकायतें",
  "Satisfaction Rate": "संतुष्टि दर",
  "Avg Resolution Time": "औसत निस्तारण समय",
  "Government Depts.": "सरकारी विभाग",
  "Core Capabilities": "प्रमुख क्षमताएं",
  "Built for Modern Governance": "आधुनिक सुशासन के लिए निर्मित",
  "How It Works": "यह कैसे काम करता है",
  "Trusted by Millions": "लाखों नागरिकों का विश्वास",
  "Frequently Asked Questions": "अक्सर पूछे जाने वाले प्रश्न",
  "Ready to Make Your Voice Heard?": "क्या आप अपनी आवाज़ उठाने के लिए तैयार हैं?",
  "Ready to get started?": "क्या आप शुरू करने के लिए तैयार हैं?",
  "Public Citizen": "आम नागरिक (Citizen)",
  "Government Admin": "सरकारी प्रशासन (Admin)",
  "Strategy Workspace": "रणनीति कार्यक्षेत्र (Strategy)",
  "Continue as Citizen": "नागरिक के रूप में जारी रखें",
  "Admin Login": "प्रशासन लॉगिन",
  "Strategy Login": "रणनीति लॉगिन",
  "Create Account": "नया खाता बनाएं",
  "Track Your Complaint": "अपनी शिकायत की स्थिति जानें",
  "Official Complaint Letter": "आधिकारिक शिकायत पत्र",
  "Contact Us": "संपर्क करें",
  "Dashboard": "डैशबोर्ड",
  "Complaints": "शिकायतें",
  "Departments": "विभाग",
  "Analytics": "विश्लेषण",
  "Heatmap": "हीटमैप",
  "Prediction": "पूर्वानुमान",
  "Reports": "रिपोर्ट",
  "Notifications": "सूचनाएं",
  "AI Intelligence": "एआई इंटेलिजेंस",
  "User Management": "उपयोगकर्ता प्रबंधन",
  "Settings": "सेटिंग्स",
  "Constituency Intel": "निर्वाचन क्षेत्र इंटेल",
  "AI Strategy Chat": "एआई रणनीति चैट",
  "Speech Generator": "भाषण जनरेटर",
  "Campaign Planner": "अभियान योजनाकार",
  "Manifesto Generator": "घोषणापत्र जनरेटर",
  "War Room": "वॉर रूम",
  "Calendar & Tasks": "कैलेंडर और कार्य",
  "Logout": "लॉगआउट"
};

const EN_REVERSE_DICT = Object.fromEntries(
  Object.entries(HI_DICT).map(([en, hi]) => [hi, en])
);

function PolisenseGovWrapper() {
  const [lang, setLang] = b.useState("EN");
  const [mobileSim, setMobileSim] = b.useState(false);
  const [complaints, setComplaints] = b.useState(() => {
    try {
      const saved = window.localStorage.getItem("polisense_live_complaints_v2");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          Be.splice(0, Be.length, ...parsed);
          return parsed;
        }
      }
    } catch {}
    return [...Be];
  });
  const [lastComplaint, setLastComplaint] = b.useState(() => complaints[0] || null);

  b.useEffect(() => {
    Be.splice(0, Be.length, ...complaints);
    try {
      window.localStorage.setItem("polisense_live_complaints_v2", JSON.stringify(complaints));
    } catch {}
  }, [complaints]);

  const addComplaint = (payload) => {
    const deptMap = {
      "Water Supply": "Jal Board",
      "Electricity": "DISCOM",
      "Sanitation": "Municipal Corp.",
      "Municipal Services": "Municipal Corp.",
      "Environment": "Municipal Corp.",
      "Public Health": "Health Dept.",
      "Health": "Health Dept.",
      "Education": "Education",
      "Public Safety": "Police",
      "Infrastructure": "Roads & PWD",
      "Roads & Transport": "Roads & PWD",
      "Other": "Roads & PWD"
    };
    const cat = payload.category || "Infrastructure";
    const mappedDept = deptMap[cat] || "Roads & PWD";
    const descLower = (payload.description || "").toLowerCase();
    const isUrgent = /urgent|severe|emergency|danger|hazard|days|outage|contaminated|broken|flood|accident|hospital|critical/.test(descLower) || cat === "Water Supply" || cat === "Public Safety";
    const computedPriority = isUrgent ? "High" : "Medium";
    const formattedDate = new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
    const newId = "POL-2026-" + Math.floor(1000 + Math.random() * 9000);
    const created = {
      id: newId,
      citizen: (payload.fullName || "Citizen").trim(),
      phone: (payload.phone || "+91 98765 43210").trim(),
      email: (payload.email || "citizen@india.gov.in").trim(),
      category: cat,
      dept: mappedDept,
      priority: computedPriority,
      status: "Pending",
      date: formattedDate,
      location: (payload.locationText || "New Delhi, Connaught Place").trim(),
      lat: payload.lat || 28.6139,
      lng: payload.lng || 77.2090,
      desc: (payload.description || "").trim(),
      officer: "Shri. Ramesh Gupta",
      notes: [
        `Complaint registered via Citizen Portal by ${(payload.fullName || "Citizen").trim()}.`,
        `POLISENSE AI Triage Engine categorized under "${cat}" & routed to ${mappedDept} (Priority: ${computedPriority}).`
      ],
      hasImage: Boolean(payload.hasImage),
      hasVoice: Boolean(payload.hasVoice),
      isLive: true
    };
    setComplaints((prev) => {
      const next = [created, ...prev];
      Be.splice(0, Be.length, ...next);
      return next;
    });
    setLastComplaint(created);
    return created;
  };

  const updateComplaint = (id, patch) => {
    setComplaints((prev) => {
      const next = prev.map((item) => (item.id === id ? { ...item, ...patch } : item));
      Be.splice(0, Be.length, ...next);
      return next;
    });
    setLastComplaint((prev) => (prev && prev.id === id ? { ...prev, ...patch } : prev));
  };

  b.useEffect(() => {
    const applyTranslations = () => {
      const elements = document.querySelectorAll("button, a, h2, h3, h4, span, div, label");
      elements.forEach((el) => {
        if (el.childNodes.length === 1 && el.childNodes[0].nodeType === 3) {
          const textNode = el.childNodes[0];
          const raw = textNode.nodeValue ? textNode.nodeValue.trim() : "";
          if (!raw) return;
          if (lang === "HI" && HI_DICT[raw]) {
            textNode.nodeValue = textNode.nodeValue.replace(raw, HI_DICT[raw]);
          } else if (lang === "EN" && EN_REVERSE_DICT[raw]) {
            textNode.nodeValue = textNode.nodeValue.replace(raw, EN_REVERSE_DICT[raw]);
          }
        }
      });
    };
    const timer = setInterval(applyTranslations, 300);
    applyTranslations();
    return () => clearInterval(timer);
  }, [lang]);

  const goBack = (fallback) => {
    const backBtns = Array.from(document.querySelectorAll("main button")).filter((btn) => {
      const t = (btn.textContent || "").trim();
      return t.includes("Back") || t.includes("←") || t.includes("Return to Home");
    });
    if (backBtns.length > 0) {
      backBtns[0].click();
    } else if (fallback) {
      fallback();
    }
    window.scrollTo(0, 0);
  };

  return (0, x.jsx)(GovUIContext.Provider, {
    value: {
      lang,
      mobileSim,
      complaints,
      lastComplaint,
      addComplaint,
      updateComplaint,
      toggleLang: () => setLang((l) => (l === "EN" ? "HI" : "EN")),
      toggleMobile: () => setMobileSim((m) => !m),
      goBack
    },
    children: (0, x.jsxs)("div", {
      className: `gov-master-wrapper ${mobileSim ? "gov-mobile-sim-active" : ""}`,
      children: [
        (0, x.jsx)("div", {
          className: "gov-viewport-frame",
          children: (0, x.jsx)(A, {})
        }),
        /* Floating Bottom-Left Hindi/English & Mobile View Dock (hovers below like the chatbot icon!) */
        (0, x.jsxs)("div", {
          style: { position: "fixed", bottom: "24px", left: "24px", zIndex: 9990, display: "flex", alignItems: "center", gap: "10px" },
          children: [
            (0, x.jsx)("button", {
              type: "button",
              onClick: () => setLang((l) => (l === "EN" ? "HI" : "EN")),
              className: "px-4 py-2.5 rounded-full font-bold text-xs shadow-2xl transition-all hover:scale-105",
              style: lang === "HI"
                ? { background: "#138808", color: "#FFFFFF", border: "2px solid #FFFFFF", boxShadow: "0 6px 20px rgba(19,136,8,0.35)", cursor: "pointer" }
                : { background: "#0B2447", color: "#FFFFFF", border: "2px solid #FF9933", boxShadow: "0 6px 20px rgba(11,36,71,0.28)", cursor: "pointer" },
              title: "Switch Hindi / English Language",
              children: lang === "EN" ? "🌐 हिन्दी में देखें (Hindi)" : "🌐 View in English"
            }),
            (0, x.jsx)("button", {
              type: "button",
              onClick: () => setMobileSim((m) => !m),
              className: "px-4 py-2.5 rounded-full font-bold text-xs shadow-2xl transition-all hover:scale-105",
              style: mobileSim
                ? { background: "#D95F00", color: "#FFFFFF", border: "2px solid #FFFFFF", boxShadow: "0 6px 20px rgba(217,95,0,0.35)", cursor: "pointer" }
                : { background: "#FFFFFF", color: "#0B2447", border: "2px solid #0B2447", boxShadow: "0 6px 20px rgba(11,36,71,0.18)", cursor: "pointer" },
              title: "Toggle Mobile / Desktop View",
              children: mobileSim ? "💻 Desktop View" : "📱 Mobile View"
            })
          ]
        })
      ]
    })
  });
}

export default PolisenseGovWrapper;
