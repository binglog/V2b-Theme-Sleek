import{_ as A,u as M,a as k,b as U,o as s,c as o,d as p,w as F,p as R,e as B,f as e,g as L,t as _,h as b,F as g,r as $,S as h,i as O,j as c,k as G,l as w,v as y,m as V,n as I,q as H,s as J,x as Q}from"./index-f0141dfe.js";import{c as v,r as z}from"./User-d3aa42a8.js";import{R as W}from"./index-7444e26e.js";const X=""+new URL("../img/hero-Illustration-1.png",import.meta.url).href,Y=""+new URL("logo-a27d98a1.png",import.meta.url).href;const ee=l=>(R("data-v-e876fa2d"),l=l(),B(),l),te=["onClick"],se={key:0},oe={key:1},le=ee(()=>e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"text-white"},[e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.73 6.60042C13.2963 3.56741 17.2746 2.15497 21.1481 2.85202C21.8451 6.72563 20.4327 10.7042 17.3998 13.2706L12.846 17.1239L11.7918 17.7469L6.25265 12.2075L6.87063 11.1617L10.73 6.60042ZM4.87237 9.37916L8.68656 4.8713C8.71603 4.83647 8.74565 4.80181 8.77542 4.76732C7.21133 5.11554 5.14211 6.01006 2.72421 8.10974L4.87237 9.37916ZM12.0147 2.01846C15.111 0.126844 18.8895 -0.497593 22.5246 0.411228C23.0486 0.542238 23.4578 0.951408 23.5888 1.47545C24.4977 5.11138 23.8729 8.89071 21.9806 11.9874C22.0888 12.6089 22.1542 13.4255 22.0649 14.4057C21.8587 16.6665 20.8401 19.6878 17.8346 23.1175C16.6146 24.5098 14.4903 24.1703 13.6158 22.6903L12.5134 20.8246C11.9325 21.078 11.2367 20.9664 10.7631 20.5037L10.9158 20.6564L9.96943 21.6029C8.92407 22.6482 7.22922 22.6482 6.18387 21.6029L2.39831 17.8171C1.35295 16.7717 1.35295 15.0768 2.39831 14.0314L3.3447 13.085L3.49714 13.2374C3.03431 12.7636 2.92278 12.0674 3.17656 11.4864L1.30968 10.3832C-0.170248 9.50864 -0.509748 7.38423 0.882445 6.16416C4.31206 3.15855 7.33325 2.13987 9.59389 1.93375C10.5755 1.84425 11.393 1.90998 12.0147 2.01846ZM5.2374 14.9779L4.29109 15.9243L8.07665 19.71L9.02296 18.7636L5.2374 14.9779ZM14.6206 19.1289L15.8891 21.2757C17.9875 18.8591 18.8821 16.7908 19.2308 15.227C19.197 15.2562 19.163 15.2852 19.1289 15.3141L14.6206 19.1289Z",fill:"#000"})],-1)),ae={__name:"Login",setup(l){const n=M(),r=k(),a=U(),d=()=>{if(a.Auth_key!==""){r.push("/dashboard");return}n.Login_show=!0};return(u,x)=>(s(),o("a",{href:"javascript:",onClick:F(d,["stop"]),class:"flex bg-[#42c990] hover:bg-[#2df399] ease-in duration-300 rounded-xl gap-6 px-6 py-3 text-black"},[p(a).Auth_key!==""?(s(),o("p",se,"个人中心")):(s(),o("p",oe,"登录")),le],8,te))}},K=A(ae,[["__scopeId","data-v-e876fa2d"]]),ne={class:"heder flex justify-center mb-[30px] relative z-20"},ie={class:"content flex max-w-[1300px] w-[1300px] justify-between p-11"},re={class:"left"},de={href:"",class:"flex items-centen gap-6"},ce=e("div",{class:"icon w-24 h-12"},[e("img",{class:"h-full",src:Y,alt:""})],-1),ue={class:"text"},_e=e("br",null,null,-1),pe={class:"right flex gap-14 items-baseline"},me={class:"login hidden sm:block"},xe={__name:"heder",setup(l){return k(),U(),(n,r)=>(s(),o("div",ne,[e("div",ie,[e("div",re,[e("a",de,[ce,e("div",ue,[L(_(p(v).title)+" ",1),_e,L(_(p(v).hosturl),1)])])]),e("div",pe,[e("div",me,[b(K)])])])]))}},he={class:"flex justify-center overflow-hidden mt-[4rem]"},fe={class:"main flex flex-col max-w-[1300px] w-[1300px] justify-around px-11 py-4 relative"},ge={class:"text-center"},ve=e("h1",{class:"text-4xl text-slate-400 mb-14"},"支持的流媒体",-1),be={class:"flex flex-row gap-12 items-end sm:w-[100%] w-[100vw] overflow-auto"},we={class:"flex items-center"},ye=["src"],$e={class:"sm:text-xl cursor-pointer"},Le={__name:"media",setup(l){return(n,r)=>(s(),o("div",he,[e("div",fe,[e("div",ge,[ve,e("div",be,[(s(!0),o(g,null,$(p(v).streammedia,a=>(s(),o("div",we,[e("img",{class:"w-16 sm:w-22 max-w-none",src:a.img,alt:""},null,8,ye),e("p",$e,_(a.title),1)]))),256))])])])]))}},Ce={class:"max-w-6xl mx-auto pt-10 pb-36 px-8 mt-28"},ke=e("div",{class:"max-w-md mx-auto mb-14 text-center"},[e("h1",{class:"text-4xl font-semibold mb-6 lg:text-5xl"},[e("span",{class:"text-indigo-600"},"套餐"),L(" 定价")]),e("p",{class:"text-xl text-gray-500 font-medium"},"优惠的价格，非常好的质量")],-1),Se={class:"flex flex-col justify-between items-center gap-20 lg:flex-row lg:items-start"},je={class:"w-full bg-slate-800 flex-1 mt-8 p-8 shadow-xl rounded-3xl sm:w-96 lg:w-full"},Ze={class:"mb-7 pb-7 flex items-center border-b border-gray-300"},Me=e("img",{src:"https://res.cloudinary.com/williamsondesign/abstract-1.jpg",alt:"",class:"rounded-3xl w-20 h-20"},null,-1),ze={class:"ml-5"},Ve={class:"block text-2xl font-semibold"},Ae=e("span",{class:"font-medium text-gray-500 text-xl align-top"},"¥ ",-1),Ue={class:"text-3xl font-bold"},Re=e("span",{class:"text-gray-500 font-medium"},"/ 月",-1),Be={class:"mb-7 font-medium text-gray-500"},Ie={class:"flex text-lg mb-2"},Ee=e("img",{src:"https://res.cloudinary.com/williamsondesign/check-grey.svg"},null,-1),Ne={class:"ml-3"},De=e("img",{src:"https://res.cloudinary.com/williamsondesign/arrow-right.svg",class:"ml-2"},null,-1),He={__name:"ding",props:{data:Array},setup(l){const n=l,r=U(),a=()=>{r.Auth_key===""?h("请先登录",null,200):k().push("/dashboard/plan")};return(d,u)=>(s(),o("main",Ce,[ke,e("div",Se,[(s(!0),o(g,null,$(n.data,x=>(s(),o("div",je,[e("div",Ze,[Me,e("div",ze,[e("span",Ve,_(x.title),1),e("span",null,[Ae,e("span",Ue,_(x.money),1)]),Re])]),e("ul",Be,[(s(!0),o(g,null,$(x.cent,t=>(s(),o("li",Ie,[Ee,e("span",Ne,_(t),1)]))),256))]),e("a",{href:"javascript:;",onClick:a,class:"flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl"},[L(" 去购买 "),De])]))),256))])]))}},Ke=""+new URL("login-f351c762.png",import.meta.url).href,qe=l=>z({url:"api/v1/passport/comm/sendEmailVerify",method:"post",data:{email:l}}),Pe=(l,n,r,a)=>z({url:"api/v1/passport/auth/register",method:"post",data:{email:l,password:n,invite_code:r,email_code:a}}),Te=()=>z({url:"api/v1/guest/comm/config",method:"get"}),Fe={class:"flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8 sm:py-16"},Oe={class:"xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto"},Ge=e("h2",{class:"text-3xl font-bold leading-tight text-slate-400 sm:text-4xl"},"注册",-1),Je={class:"mt-8"},Qe={class:"sm:space-y-5 space-y-2"},We=e("label",{for:"",class:"text-base font-medium"}," 邮箱 ",-1),Xe={class:"mt-2.5"},Ye={key:0},et=e("label",{for:"",class:"text-base font-medium"}," 验证码 ",-1),tt={class:"flex relative"},st={class:"mt-2.5"},ot=e("label",{for:"",class:"text-base font-medium"}," 密码 ",-1),lt={class:"mt-2.5"},at=e("label",{for:"",class:"text-base font-medium"}," 确认密码 ",-1),nt={class:"mt-2.5"},it={class:"hidden"},rt=e("label",{for:"",class:"text-base font-medium"}," 推荐人 ",-1),dt={class:"mt-2.5"},ct={class:"flex items-center"},ut={for:"agree",class:"ml-3 text-sm font-medium text-gray-500"},_t={__name:"signup",props:{show:Boolean},emits:["update:show"],setup(l,{emit:n}){const r=O(),a=M();k();const d=c(!0),u=c(),x=c();G(async()=>{const C=await Te();u.value=C.data.data,x.value=u.value.is_email_verify});const t=c(""),i=c(""),j=c(""),Z=c(""),N=c(""),q=()=>{if(!D.test(t.value)){h("邮箱错误","请填写正确的邮箱",400);return}qe(t.value).then(C=>{h("发送成功","请到注册邮箱查看",200)})},P=/^.{8,20}$/,D=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,T=()=>{if(!D.test(t.value)){h("邮箱错误","请填写正确的邮箱",400);return}if(!P.test(i.value)){h("密码错误","最小8位最大20位",400);return}if(i.value!==j.value){h("密码错误","请检查密码是否正确",400);return}if(x==1&&Z.value.length<3){h("验证码错误","请填写正确的验证码",400);return}d.value=!1,Pe(t.value,i.value,r.query.code,Z.value).then(C=>{}).catch(C=>{h(C.data.message,null,400)}).finally(()=>{d.value=!0})};return(C,m)=>(s(),o("div",Fe,[e("div",Oe,[Ge,e("form",Je,[e("div",Qe,[e("div",null,[We,e("div",Xe,[w(e("input",{"onUpdate:modelValue":m[0]||(m[0]=f=>t.value=f),type:"email",placeholder:"请输入邮箱",class:"block w-full p-3 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"},null,512),[[y,t.value]])])]),x.value==1?(s(),o("div",Ye,[et,e("div",tt,[e("div",st,[w(e("input",{"onUpdate:modelValue":m[1]||(m[1]=f=>Z.value=f),type:"text",placeholder:"输入验证码",class:"block w-full p-3 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"},null,512),[[y,Z.value]])]),e("button",{type:"button",onClick:q,class:"absolute right-0 top-0 bottom-0 mt-2.5 w-[50%] text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"}," 发送验证码 ")])])):V("",!0),e("div",null,[ot,e("div",lt,[w(e("input",{"onUpdate:modelValue":m[2]||(m[2]=f=>i.value=f),type:"password",placeholder:"输入密码",class:"block w-full p-3 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"},null,512),[[y,i.value]])])]),e("div",null,[at,e("div",nt,[w(e("input",{"onUpdate:modelValue":m[3]||(m[3]=f=>j.value=f),type:"password",placeholder:"重复密码",class:"block w-full p-3 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"},null,512),[[y,j.value]])])]),e("div",it,[rt,e("div",dt,[w(e("input",{"onUpdate:modelValue":m[4]||(m[4]=f=>N.value=f),type:"text",placeholder:"推荐代码(可不填)",class:"block w-full p-3 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"},null,512),[[y,N.value]])])]),e("div",ct,[e("label",ut,[L(" 已有账号？ "),e("a",{href:"javascript:",title:"",class:"text-blue-600 hover:text-blue-700 hover:underline",onClick:m[5]||(m[5]=f=>p(a).Login_Sign=!0)},"立即登录")])]),e("div",null,[e("button",{onClick:T,type:"button",class:I([d.value?"pointer-events-auto":"pointer-events-none","inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"])}," 立即注册 ",2)])])])])]))}},pt=(l,n)=>z({url:"api/v1/passport/auth/login",method:"post",data:{email:l,password:n}});const E=l=>(R("data-v-2d964151"),l=l(),B(),l),mt={class:"grid grid-cols-2 relative"},xt=J('<div class="img h-[100%] bg-[#1b1b1b] items-center justify-center px-4 py-10 sm:py-16 sm:px-6 lg:px-8" data-v-2d964151><div data-v-2d964151><img class="m-auto" src="'+Ke+'" alt="" data-v-2d964151><div class="w-full max-w-md mx-auto xl:max-w-xl" data-v-2d964151><h3 class="text-2xl font-bold text-center text-slate-400" data-v-2d964151>开启全球冲浪</h3><p class="leading-relaxed text-center text-gray-500 mt-2.5" data-v-2d964151>没有什么可担心的，双重加密保驾护航</p><div class="flex items-center justify-center mt-10 space-x-3" data-v-2d964151><div class="bg-orange-500 rounded-full w-20 h-1.5" data-v-2d964151></div></div></div></div></div>',1),ht={key:0,class:"flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8 sm:py-16"},ft={class:"xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto"},gt=E(()=>e("h2",{class:"text-3xl font-bold leading-tight text-slate-400 sm:text-4xl"},"登录",-1)),vt={class:"mt-8"},bt={class:"space-y-5"},wt=E(()=>e("label",{class:"text-base font-medium"}," 邮箱 ",-1)),yt={class:"mt-2.5"},$t=["onKeydown"],Lt=E(()=>e("label",{for:"",class:"text-base font-medium"}," 密码 ",-1)),Ct={class:"mt-2.5"},kt=["onKeydown"],St={class:"flex items-center"},jt={for:"agree",class:"ml-3 text-sm font-medium text-gray-500"},Zt={for:"agree",class:"ml-3 text-sm font-medium text-gray-500"},Mt={key:1,class:"overflow-scroll"},zt={__name:"login",setup(l){const n=M();k();const r=c(!0);document.querySelectorAll("section")[0],setInterval(()=>{r.value=!r.value},1e3);const a=c(""),d=c(""),u=()=>{if(!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(a.value)){h("邮箱错误","请填写正确的邮箱",400);return}if(!/^.{8,20}$/.test(d.value)){h("密码错误","最小8位最大20位",400);return}pt(a.value,d.value).then(i=>{}).catch(i=>{h(i.data.message,null,400)})};return(x,t)=>(s(),o("section",{class:I(["bg-[#232323] rounded-3xl overflow-hidden max-w-[900px] w-full sm:m-auto min_app",r.value==!0?"fgshow":"fg_flase"])},[e("div",mt,[xt,p(n).Login_Sign?(s(),o("div",ht,[e("div",ft,[gt,e("form",vt,[e("div",bt,[e("div",null,[wt,e("div",yt,[w(e("input",{onKeydown:H(u,["enter"]),"onUpdate:modelValue":t[0]||(t[0]=i=>a.value=i),type:"email",placeholder:"请输入邮箱",class:"block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"},null,40,$t),[[y,a.value]])])]),e("div",null,[Lt,e("div",Ct,[w(e("input",{onKeydown:H(u,["enter"]),"onUpdate:modelValue":t[1]||(t[1]=i=>d.value=i),type:"password",placeholder:"输入密码",class:"block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"},null,40,kt),[[y,d.value]])])]),e("div",St,[e("label",jt,[L(" 还没有注册？ "),e("a",{href:"javascript:",title:"",onClick:t[2]||(t[2]=i=>p(n).Login_Sign=!1),class:"text-blue-600 hover:text-blue-700 hover:underline"},"立即注册")]),e("label",Zt,[e("a",{onClick:t[3]||(t[3]=i=>p(W)(!1)),href:"javascript:",title:"",class:"text-blue-600 hover:text-blue-700 hover:underline"},"忘记密码？")])]),e("div",null,[e("button",{onClick:u,type:"button",class:"inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"}," 立即登录 ")])])])])])):(s(),o("div",Mt,[b(_t)]))])],2))}},Vt=A(zt,[["__scopeId","data-v-2d964151"]]);const S=l=>(R("data-v-34e5abae"),l=l(),B(),l),At={key:0,class:"fixed flex justify-center items-center left-0 right-0 top-0 bottom-0 m-auto z-30 p-8 sm:p-20"},Ut=S(()=>e("div",{class:"absolute right-0 left-0 top-0 bottom-0 Showlogin -z-10 bg-[#0000005c]"},null,-1)),Rt={class:"flex justify-center p-5"},Bt={class:"main flex max-w-[1300px] w-[1300px] justify-between lg:p-11"},It={class:"first flex-1"},Et={class:"title flex flex-col gap-10"},Nt={class:"ti sm:whitespace-nowrap"},Dt={class:"text-7xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text font-extrabold text-transparent"},Ht={class:"flex flex-row gap-4"},Kt={class:"px-6 rounded-3xl p-3 text-slate-300 bg-[#2b2d33] text-xl"},qt=S(()=>e("div",{class:"flex gap-5"},[e("svg",{width:"25",height:"30",viewBox:"0 0 25 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M18.7295 0.190584C19.4166 0.536049 19.7415 1.26696 19.5088 1.94359L16.3954 10.9963L23.1423 10.2956C23.8402 10.2232 24.5137 10.5524 24.8261 11.1188C25.1385 11.6852 25.0227 12.3671 24.5366 12.8236L6.73903 29.5378C6.19231 30.0513 5.32012 30.1486 4.65058 29.7709C3.98105 29.3933 3.69822 28.6443 3.97335 27.9777L7.65892 19.0473L1.87483 19.7025C1.18832 19.7803 0.51981 19.4682 0.19503 18.9184C-0.129751 18.3685 -0.0432474 17.6952 0.412393 17.2265L16.6624 0.512308C17.1806 -0.0207393 18.0425 -0.154882 18.7295 0.190584ZM5.80716 16.2334L9.97042 15.7618C10.5486 15.6963 11.1228 15.9073 11.4847 16.3183C11.8467 16.7293 11.9438 17.2806 11.7409 17.7723L9.89973 22.2337L18.9302 13.7529L14.2386 14.2401C13.6791 14.2982 13.1248 14.0981 12.7651 13.708C12.4054 13.3179 12.2889 12.7907 12.4555 12.3065L14.0048 7.80157L5.80716 16.2334Z",fill:"#BCC9DB"})]),e("p",{class:"text-lg text-slate-400"},"快速高效与世界连接")],-1)),Pt={class:"flex sm:hidden"},Tt={class:"flex bg-slate-900 rounded-2xl relative sm:w-[200%] lg:gap-11 gap-3 items-baseline p-3"},Ft=["onClick"],Ot=S(()=>e("div",{class:"relative w-full flex-1 sm:block hidden"},[e("img",{class:"absolute z-10 w-full top-[-26%]",src:X,alt:""}),e("span",{class:"fg rounded-full"})],-1)),Gt={class:"flex justify-center relative z-20"},Jt={class:"main max-w-[1300px] w-[1300px] justify-between sm:px-11 sm:flex relative"},Qt={class:"mt-3 flex flex-row flex-wrap z-10 gap-7 px-3"},Wt=["href"],Xt=S(()=>e("svg",{width:"20",height:"18",viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.34149 10.2526C4.92586 9.88889 4.88374 9.25713 5.24742 8.84149C5.61111 8.42586 6.24287 8.38374 6.6585 8.74742L9 10.7962L9 0.999999C9 0.447714 9.44772 -9.2251e-07 10 -8.74228e-07C10.5523 -8.25945e-07 11 0.447714 11 0.999999L11 10.7962L13.3415 8.74742C13.7571 8.38374 14.3889 8.42586 14.7526 8.84149C15.1163 9.25713 15.0741 9.88889 14.6585 10.2526L10.6585 13.7526C10.2815 14.0825 9.71852 14.0825 9.34149 13.7526L5.34149 10.2526ZM18 13C18 12.4477 18.4477 12 19 12C19.5523 12 20 12.4477 20 13L20 16C20 17.1046 19.1046 18 18 18L2 18C0.89543 18 -1.49533e-06 17.1046 -1.39876e-06 16L-1.1365e-06 13C-1.08821e-06 12.4477 0.447715 12 0.999999 12C1.55228 12 2 12.4477 2 13L2 16L18 16L18 13Z",fill:"#1C1D22"})],-1)),Yt={class:"flex justify-center mt-32 p-2"},es={class:"main max-w-[1300px] w-[1300px] justify-between"},ts=S(()=>e("h1",{class:"text-3xl mb-12"},"可用地区",-1)),ss={class:"sm:grid-cols-4 grid-cols-2 grid gap-4"},os={class:"headline p-4 rounded-3xl m-2 flex flex-wrap gap-4 bg-slate-800 relative items-center"},ls=["innerHTML"],as={class:"flex flex-col flex-1"},ns={class:"text-slate-300 text-xl"},is={class:"text-slate-400"},rs={key:0,class:"absolute bg-[#4cd0a1] rounded-xl right-[0%] p-1 top-0 inline-table"},ds={__name:"Home",setup(l){const n=c(0),r=c(),a=c(!1),d=M();return document.addEventListener("click",function(u){u.target.className.includes("Showlogin")&&(a.value=!a.value,d.Login_show=!1)}),Q(n,u=>{r.value=v.down[u]},{immediate:!0}),(u,x)=>(s(),o(g,null,[b(xe),p(d).Login_show?(s(),o("div",At,[Ut,b(Vt)])):V("",!0),e("div",Rt,[e("div",Bt,[e("section",It,[e("div",Et,[e("div",Nt,[e("p",Dt,_(p(v).title),1)]),e("div",Ht,[(s(),o(g,null,$(["快速","可靠","信赖"],t=>e("p",Kt,_(t),1)),64))]),qt,e("div",Pt,[b(K)]),e("div",Tt,[(s(!0),o(g,null,$(p(v).down,(t,i)=>(s(),o("p",{class:I(["px-6 font-extrabold cursor-pointer py-4 rounded-2xl hover:bg-slate-800",[i==n.value?"border-4 border-green-400":"border-4 border-slate-900"]]),onClick:j=>n.value=i},_(t.name),11,Ft))),256))])])]),Ot])]),e("div",Gt,[e("div",Jt,[e("div",Qt,[(s(!0),o(g,null,$(r.value.down,t=>(s(),o("a",{href:t.href,class:"p-4 flex flex-row items-center gap-3 rounded-2xl hover:bg-[#2df399] hover:scale-105 transition-all duration-300 text-black bg-[#39c17d]"},[L(_(t.title)+" ",1),Xt],8,Wt))),256))])])]),b(Le),e("div",Yt,[e("div",es,[ts,e("div",ss,[(s(!0),o(g,null,$(p(v).country,t=>(s(),o("div",os,[e("span",{class:"keyong w-6 h-6",innerHTML:t.img},null,8,ls),e("div",as,[e("p",ns,_(t.title),1),e("p",is,_(t.title1),1)]),t.hasOwnProperty("lable")?(s(),o("span",rs,_(t.lable),1)):V("",!0)]))),256))])])]),b(He,{data:p(v).taocan},null,8,["data"])],64))}},ps=A(ds,[["__scopeId","data-v-34e5abae"]]);export{ps as default};
