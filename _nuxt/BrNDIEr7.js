import{_ as u,c as m,a as t,s as c,B as l,C as d,d as p,b as f,w as h,e as w,o as S}from"./COHBFirr.js";const y=""+new URL("login.D_VgdXfF.png",import.meta.url).href,v={data(){return{email:"",password:""}},mounted(){const s=document.createElement("script");s.src="https://accounts.google.com/gsi/client",s.async=!0,s.defer=!0,document.head.appendChild(s),window.handleGoogleSignIn=this.handleGoogleSignIn},methods:{async handleSignIn(){try{const e=await(await fetch("http://localhost/vault/signin.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:this.email,password:this.password})})).json();e.success?(sessionStorage.setItem("first_name",e.first_name),this.$router.push("/")):console.log(e.message)}catch(s){console.error("Error:",s)}},async handleGoogleSignIn(s){const e=s.credential;try{const o=await(await fetch("http://localhost/vault/getGoogleUser.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json();o.success?(sessionStorage.setItem("first_name",o.first_name),this.$router.push({name:"index"})):alert(o.message||"Google Sign-In failed.")}catch(a){console.error("Google Sign-In error:",a)}}}},I={class:"container auth"},_={class:"row signin"},x={class:"col-lg-6"},b={class:"already"};function N(s,e,a,o,i,r){const g=w;return S(),m("div",I,[t("div",_,[t("div",x,[e[11]||(e[11]=t("h4",null,"LOG INTO YOUR ACCOUNT",-1)),e[12]||(e[12]=t("p",null,"Start shopping for goods and services",-1)),t("form",{onSubmit:e[2]||(e[2]=c((...n)=>r.handleSignIn&&r.handleSignIn(...n),["prevent"]))},[e[3]||(e[3]=t("label",{for:"email"},"Email",-1)),l(t("input",{type:"email","onUpdate:modelValue":e[0]||(e[0]=n=>i.email=n),placeholder:"Enter your email",required:""},null,512),[[d,i.email]]),e[4]||(e[4]=t("label",{for:"password"},"Password",-1)),l(t("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=n=>i.password=n),placeholder:"******",required:""},null,512),[[d,i.password]]),e[5]||(e[5]=t("button",{class:"gradient__bg",type:"submit"},"SIGN IN",-1)),e[6]||(e[6]=t("div",{class:"d-flex justify-content-between align-items-center or"},[t("hr"),t("p",null,"OR"),t("hr")],-1)),e[7]||(e[7]=t("div",{id:"g_id_onload","data-client_id":"513931588844-2rjk6ukt0gc84gsho7f4epuu90p7o6up.apps.googleusercontent.com","data-callback":"handleGoogleSignIn"},null,-1)),e[8]||(e[8]=t("div",{class:"g_id_signin","data-type":"standard","data-shape":"rectangular","data-theme":"outline","data-text":"sign_in_with","data-size":"large","data-logo_alignment":"left"},null,-1))],32),t("p",b,[e[10]||(e[10]=p(" New to the vault? ")),f(g,{class:"green",to:{name:"SignUp"}},{default:h(()=>e[9]||(e[9]=[p("Sign Up")])),_:1})])]),e[13]||(e[13]=t("div",{class:"col-lg-6 col-0"},[t("h4",{class:"crimson-text"}," Curating top-tier value with luxury brands in every box, since 2019. "),t("img",{src:y,class:"img-fluid",alt:"sign in img"})],-1))])])}const O=u(v,[["render",N],["__scopeId","data-v-45912479"]]);export{O as default};