import{a as k,j as d,o as _,c as v,f as e,F as x,l as r,v as i,S as o,z,A as b}from"./index-f0141dfe.js";import{i as A,j as R,s as V,p as B}from"./User-d3aa42a8.js";const Z={class:"cs h-screen w-screen fixed left-0 right-0 top-0 bottom-0 m-auto z-50"},E={class:"absolute m-auto left-0 right-0 top-0 bottom-0"},U={class:"w-full h-full flex justify-center items-center"},C={class:"flex flex-col w-80 p-5 rounded-xl bg-[#17171a] border-2 border-slate-700"},P=e("h1",{class:"text-xl"},"重置密码",-1),$={class:"flex gap-5 items-center mt-6 p-4 rounded-lg shadow-gray-800 shadow-lg"},j=e("label",{class:"whitespace-nowrap"},"旧密码:",-1),F={class:"flex gap-5 items-center mt-6 p-4 rounded-lg shadow-gray-800 shadow-lg"},I=e("label",{class:"whitespace-nowrap"},"新密码:",-1),S={class:"flex gap-5 items-center mt-6 p-4 rounded-lg shadow-gray-800 shadow-lg"},D=e("label",{class:"whitespace-nowrap"},"邮箱:",-1),G={class:"flex gap-5 relative items-center mt-6 p-4 rounded-lg shadow-gray-800 shadow-lg"},L=e("label",{class:"whitespace-nowrap"},"验证码:",-1),M={class:"flex gap-5 items-center mt-6 p-4 rounded-lg shadow-gray-800 shadow-lg"},N=e("label",{class:"whitespace-nowrap"},"密码:",-1),T={__name:"restart_pass",props:{is_login:Boolean,move_node:Function},setup(p){const l=p,m=k(),g=d(),h=d(),w=()=>{A(g.value,h.value).then(n=>{o("重置成功",null,200),R(),m.go(0),l.move_node()}).catch(n=>{o("重置失败",n.data.message,400)})},a=d(),u=d(),c=d(),f=()=>{if(!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(a.value)){o("邮箱错误","请填写正确的邮箱",400);return}V(a.value).then(s=>{o("发送成功","请查看验证码",200)}).catch(s=>{o(s.data.message,null,400)})},y=()=>{if(!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(a.value)){o("邮箱错误","请填写正确的邮箱",400);return}if(!/^.{8,20}$/.test(c.value)){o("密码错误","最小8位最大20位",400);return}if(u.value.length<3){o("验证码错误","请填写正确的验证码",400);return}B(a.value,c.value,u.value).then(t=>{o("重置成功","快去登录吧",200),l.move_node()}).catch(t=>{o(t.data.message,null,400)})};return(n,s)=>(_(),v("div",Z,[e("div",E,[e("div",U,[e("div",C,[P,l.is_login?(_(),v(x,{key:0},[e("div",$,[j,r(e("input",{"onUpdate:modelValue":s[0]||(s[0]=t=>g.value=t),class:"flex-1 bg-[rgba(0,0,0,0)] border-0 outline-0",type:"text",name:"",id:"",placeholder:"请输入旧密码"},null,512),[[i,g.value]])]),e("div",F,[I,r(e("input",{"onUpdate:modelValue":s[1]||(s[1]=t=>h.value=t),class:"flex-1 bg-[rgba(0,0,0,0)] border-0 outline-0",type:"text",name:"",id:"",placeholder:"请输入新密码"},null,512),[[i,h.value]])]),e("button",{onClick:w,class:"mt-5 p-2 mx-4 bg-green-600 rounded-xl text-sm"},"重置密码 ")],64)):(_(),v(x,{key:1},[e("div",S,[D,r(e("input",{"onUpdate:modelValue":s[2]||(s[2]=t=>a.value=t),class:"flex-1 bg-[rgba(0,0,0,0)] border-0 outline-0",type:"text",name:"",id:"",placeholder:"请输入邮箱@Gmail"},null,512),[[i,a.value]])]),e("div",G,[L,r(e("input",{"onUpdate:modelValue":s[3]||(s[3]=t=>u.value=t),class:"flex-1 bg-[rgba(0,0,0,0)] border-0 outline-0",type:"text",name:"",id:"",placeholder:""},null,512),[[i,u.value]]),e("button",{class:"absolute right-5 z-10",onClick:f},"发送验证码")]),e("div",M,[N,r(e("input",{"onUpdate:modelValue":s[4]||(s[4]=t=>c.value=t),class:"flex-1 bg-[rgba(0,0,0,0)] border-0 outline-0",type:"text",name:"",id:"",placeholder:"请输入新密码"},null,512),[[i,c.value]])]),e("button",{onClick:y,class:"mt-5 p-2 mx-4 bg-green-600 rounded-xl text-sm"},"重置密码 ")],64)),e("button",{onClick:s[5]||(s[5]=t=>l.move_node()),class:"mt-2 p-2 border border-slate-600 mx-8 shadow-gray-700 shadow-sm rounded-xl text-sm"},"取消重置 ")])])])]))}},J=p=>{const m=z(T,{is_login:p,move_node:()=>{b(null,document.getElementById("Popup"))}});b(m,document.getElementById("Popup"))};export{J as R};
