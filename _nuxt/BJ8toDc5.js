import{_ as u,c as m,a as t,s as g,B as i,C as l,q as f,d,b as c,w as v,e as b,o as w}from"./COHBFirr.js";const y=""+new URL("sign-in.DTyQbOAM.png",import.meta.url).href,h={data(){return{firstName:"",lastName:"",email:"",password:"",confirmPassword:""}},mounted(){const n=document.createElement("script");n.src="https://accounts.google.com/gsi/client",n.async=!0,n.defer=!0,document.head.appendChild(n),window.handleGoogleSignIn=this.handleGoogleSignIn},methods:{async handleSignup(){const e=await(await fetch("http://localhost/vault/signup.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({first_name:this.firstName,last_name:this.lastName,email:this.email,password:this.password})})).json();e.success?this.$router.push({name:"SignIn"}):console.log(e.message)},handleGoogleSignIn(n){const e=n.credential;fetch("http://localhost/vault/getGoogleUser.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})}).then(o=>o.json()).then(o=>{o.success?this.$router.push({name:"SignIn"}):console.log(o.message)}).catch(o=>{console.error("Error:",o)})}}},N={class:"container auth"},S={class:"row"},x={class:"col-lg-6"},U={class:"already"};function T(n,e,o,V,a,r){const p=b;return w(),m("div",N,[t("div",S,[t("div",x,[e[14]||(e[14]=t("h4",null,"CREATE AN ACCOUNT",-1)),e[15]||(e[15]=t("p",null,"Start shopping for goods and services",-1)),t("form",{onSubmit:e[5]||(e[5]=g((...s)=>r.handleSignup&&r.handleSignup(...s),["prevent"]))},[e[6]||(e[6]=t("label",{for:"first_name"},"First Name",-1)),i(t("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=s=>a.firstName=s),placeholder:"Enter your first name",required:""},null,512),[[l,a.firstName]]),e[7]||(e[7]=t("label",{for:"last_name"},"Last Name",-1)),i(t("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=s=>a.lastName=s),placeholder:"Enter your last name",required:""},null,512),[[l,a.lastName]]),e[8]||(e[8]=t("label",{for:"email"},"Email",-1)),i(t("input",{type:"email","onUpdate:modelValue":e[2]||(e[2]=s=>a.email=s),placeholder:"Enter your email",required:""},null,512),[[l,a.email]]),e[9]||(e[9]=t("label",{for:"password"},"Password",-1)),i(t("input",{type:"password","onUpdate:modelValue":e[3]||(e[3]=s=>a.password=s),placeholder:"******",required:""},null,512),[[l,a.password]]),e[10]||(e[10]=t("label",{for:"confirm_password"},"Confirm Password",-1)),i(t("input",{type:"password","onUpdate:modelValue":e[4]||(e[4]=s=>a.confirmPassword=s),placeholder:"******",required:""},null,512),[[l,a.confirmPassword]]),e[11]||(e[11]=f('<p data-v-07fab046> By signing up, you agree to VAULTS <span class="green" data-v-07fab046>terms and conditions</span> and <span class="green" data-v-07fab046>privacy policy</span></p><button class="gradient__bg" type="submit" data-v-07fab046>SIGN UP</button><div class="d-flex justify-content-between align-items-center or" data-v-07fab046><hr data-v-07fab046><p data-v-07fab046>OR</p><hr data-v-07fab046></div><div id="g_id_onload" data-client_id="513931588844-2rjk6ukt0gc84gsho7f4epuu90p7o6up.apps.googleusercontent.com" data-callback="handleGoogleSignIn" data-v-07fab046></div><div class="g_id_signin" data-type="standard" data-shape="rectangular" data-theme="outline" data-text="sign_in_with" data-size="large" data-logo_alignment="left" data-v-07fab046></div>',5))],32),t("p",U,[e[13]||(e[13]=d(" Already have an account? ")),c(p,{class:"green",to:{name:"SignIn"}},{default:v(()=>e[12]||(e[12]=[d("Log in")])),_:1})])]),e[16]||(e[16]=t("div",{class:"col-lg-6 col-0"},[t("img",{src:y,class:"img-fluid",alt:"sign in img"})],-1))])])}const C=u(h,[["render",T],["__scopeId","data-v-07fab046"]]);export{C as default};