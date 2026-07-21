import {w as w$1,l as lI,i as is,r as rs,g as Jo,K as Kf,C as CE,h as cc,G as Gf,R as RI,M as My,k as kI,j as js,m as Ce,n as mn,o as ui,p as $$1,q as ut,Y as Yn,W,s as Fl,t as kh,U,v as $t,Q as Qt,N,y as tr,A as jt,e as dc,B as Y,D as ae,E as nr,V as VP,H as P,I as Io,S as re,T as yn,X as ry,_ as Xp,a0 as ii,a1 as kf,a2 as Pf,a3 as Wf,a4 as ip,a5 as tp,a6 as eE,a7 as tE,a8 as pI,$ as $I,b as ZI,O as Ol,c as Pl,L as LI,a9 as OI,aa as mp,ab as NE,ac as mv,ad as jE,P as PI,F as FI,ae as qf,af as pE,ag as PE,f as fp,ah as gp,ai as vv,aj as HE}from'./main-7EHMDM3E.js';import {Y as Yt,b as be,Z as Zt,a as bt}from'./chunk-B_H9Fj6h.js';function Pe(a,d){if(a&1){let e=$I();Jo(0,"div",1)(1,"button",2),Kf("click",function(){Ol(e);let n=ZI();return Pl(n.action())}),CE(2),cc()();}if(a&2){let e=ZI();My(2),dc(" ",e.data.action," ");}}var Oe=["label"];function Fe(a,d){}var Le=Math.pow(2,31)-1,w=class{_overlayRef;instance;containerInstance;_afterDismissed=new re;_afterOpened=new re;_onAction=new re;_durationTimeoutId;_dismissedByAction=false;constructor(d,e){this._overlayRef=e,this.containerInstance=d,d._onExit.subscribe(()=>this._finishDismiss());}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId);}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=true,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId);}closeWithAction(){this.dismissWithAction();}_dismissAfter(d){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(d,Le));}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete());}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=false;}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},We=new N("MatSnackBarData"),x=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},je=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275dir=pI({type:a,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return a})(),Ne=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275dir=pI({type:a,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return a})(),qe=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275dir=pI({type:a,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return a})(),Ve=(()=>{class a{snackBarRef=w$1(w);data=w$1(We);action(){this.snackBarRef.dismissWithAction();}get hasAction(){return !!this.data.action}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=lI({type:a,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(t,n){t&1&&(Jo(0,"div",0),CE(1),cc(),RI(2,Pe,3,1,"div",1)),t&2&&(My(),dc(" ",n.data.message,`
`),My(),kI(n.hasAction?2:-1));},dependencies:[jt,je,Ne,qe],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})}return a})(),H="_mat-snack-bar-enter",Z="_mat-snack-bar-exit",ze=(()=>{class a extends Y{_ngZone=w$1(ae);_elementRef=w$1(nr);_changeDetectorRef=w$1(VP);_platform=w$1(P);_animationsDisabled=ui();snackBarConfig=w$1(x);_document=w$1(Io);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=w$1(Ce);_announceDelay=150;_announceTimeoutId;_destroyed=false;_portalOutlet;_onAnnounce=new re;_onExit=new re;_onEnter=new re;_animationState="void";_live;_label;_role;_liveElementId=w$1(yn).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"));}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===Z?this._completeExit():e===H&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete();}));}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?ry(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(H)));},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(H);},200)));}exit(){return this._destroyed?Xp(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?ry(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Z)));},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Z),200));}),this._onExit)}ngOnDestroy(){this._destroyed=true,this._clearFromModals(),this._completeExit();}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete();});}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(r=>e.classList.add(r)):e.classList.add(t)),this._exposeToModals();let n=this._label.nativeElement,i="mdc-snackbar__label";n.classList.toggle(i,!n.querySelector(`.${i}`));}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let n=0;n<t.length;n++){let i=t[n],r=i.getAttribute("aria-owns");this._trackedModals.add(i),r?r.indexOf(e)===-1&&i.setAttribute("aria-owns",r+" "+e):i.setAttribute("aria-owns",e);}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let n=t.replace(this._liveElementId,"").trim();n.length>0?e.setAttribute("aria-owns",n):e.removeAttribute("aria-owns");}}),this._trackedModals.clear();}_assertNotAttached(){this._portalOutlet.hasAttached();}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector("[aria-hidden]"),n=e.querySelector("[aria-live]");if(t&&n){let i=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(i=document.activeElement),t.removeAttribute("aria-hidden"),n.appendChild(t),i?.focus(),this._onAnnounce.next(),this._onAnnounce.complete();}},this._announceDelay);});}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=lI({type:a,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,n){if(t&1&&tp(ii,7)(Oe,7),t&2){let i;eE(i=tE())&&(n._portalOutlet=i.first),eE(i=tE())&&(n._label=i.first);}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(t,n){t&1&&Kf("animationend",function(r){return n.onAnimationEnd(r.animationName)})("animationcancel",function(r){return n.onAnimationEnd(r.animationName)}),t&2&&ip("mat-snack-bar-container-enter",n._animationState==="visible")("mat-snack-bar-container-exit",n._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!n._animationsDisabled);},features:[kf],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,n){t&1&&(Jo(0,"div",1)(1,"div",2,0)(3,"div",3),Pf(4,Fe,0,0,"ng-template",4),cc(),Gf(5,"div"),cc()()),t&2&&(My(5),Wf("aria-live",n._live)("role",n._role)("id",n._liveElementId));},dependencies:[ii],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2,changeDetection:1})}return a})(),Ue=new N("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new x}),Ee=(()=>{class a{_live=w$1(js);_injector=w$1(Ce);_breakpointObserver=w$1(mn);_parentSnackBar=w$1(a,{optional:true,skipSelf:true});_defaultConfig=w$1(Ue);_animationsDisabled=ui();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Ve;snackBarContainerComponent=ze;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e;}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",n){let i=$$1($$1({},this._defaultConfig),n);return i.data={message:e,action:t},i.announcementMessage===e&&(i.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,i)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss();}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss();}_attachSnackBarContainer(e,t){let n=t&&t.viewContainerRef&&t.viewContainerRef.injector,i=Ce.create({parent:n||this._injector,providers:[{provide:x,useValue:t}]}),r=new ut(this.snackBarContainerComponent,t.viewContainerRef,i),u=e.attach(r);return u.instance.snackBarConfig=t,u.instance}_attach(e,t){let n=$$1($$1($$1({},new x),this._defaultConfig),t),i=this._createOverlay(n),r=this._attachSnackBarContainer(i,n),u=new w(r,i);if(e instanceof Yn){let y=new W(e,null,{$implicit:n.data,snackBarRef:u});u.instance=r.attachTemplatePortal(y);}else {let y=this._createInjector(n,u),Te=new ut(e,void 0,y),Ie=r.attachComponentPortal(Te);u.instance=Ie.instance;}return this._breakpointObserver.observe(Fl.HandsetPortrait).pipe(kh(i.detachments())).subscribe(y=>{i.overlayElement.classList.toggle(this.handsetCssClass,y.matches);}),n.announcementMessage&&r._onAnnounce.subscribe(()=>{this._live.announce(n.announcementMessage,n.politeness);}),this._animateSnackBar(u,n),this._openedSnackBarRef=u,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear();}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter();}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter();}_createOverlay(e){let t=new U;t.direction=e.direction;let n=$t(this._injector),i=e.direction==="rtl",r=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!i||e.horizontalPosition==="end"&&i,u=!r&&e.horizontalPosition!=="center";return r?n.left("0"):u?n.right("0"):n.centerHorizontally(),e.verticalPosition==="top"?n.top("0"):n.bottom("0"),t.positionStrategy=n,t.disableAnimations=this._animationsDisabled,Qt(this._injector,t)}_createInjector(e,t){let n=e&&e.viewContainerRef&&e.viewContainerRef.injector;return Ce.create({parent:n||this._injector,providers:[{provide:w,useValue:t},{provide:We,useValue:e.data}]})}static \u0275fac=function(t){return new(t||a)};static \u0275prov=tr({token:a,factory:a.\u0275fac})}return a})();var He=a=>({red:a}),Ze=a=>({yellow:a}),Qe=a=>({bold:a});function $e(a,d){if(a&1&&(Jo(0,"span",5),CE(1),jE(2,"uppercase"),cc()),a&2){let e=d.$implicit,t=d.$index;pE(PE(5,Ze,t===3)),My(),dc("",HE(2,3,e)," ");}}function Ge(a,d){if(a&1&&(Jo(0,"li"),CE(1),cc()),a&2){let e=d.$implicit,t=ZI(2);pE(PE(3,Qe,t.isPangram(e))),My(),fp(e);}}function Xe(a,d){if(a&1){let e=$I();LI(0,$e,3,7,"span",1,OI),Jo(2,"button",2),Kf("click",function(){Ol(e);let n=ZI();return Pl(n.scramble())}),CE(3,"Scramble"),cc(),Gf(4,"br")(5,"br"),Jo(6,"p"),CE(7),cc(),Jo(8,"input",3),Kf("keydown.enter",function(){Ol(e);let n=ZI();return Pl(n.testWord())}),mp("ngModelChange",function(n){Ol(e);let i=ZI();return NE(i.userInput,n)||(i.userInput=n),Pl(n)}),cc(),mv(),Jo(9,"button",2),Kf("click",function(){Ol(e);let n=ZI();return Pl(n.showAllWords())}),CE(10,"Show All"),cc(),Jo(11,"p"),CE(12),jE(13,"number"),cc(),Jo(14,"p"),CE(15),jE(16,"number"),cc(),Gf(17,"br"),Jo(18,"ul"),LI(19,Ge,2,5,"li",4,PI),cc();}if(a&2){let e=ZI();FI(e.scrambledWord),My(2),qf("disabled",e.isDone),My(4),pE(PE(13,He,!e.message.startsWith("Pangram")&&!e.message.startsWith("Good"))),My(),fp(e.message),My(),qf("disabled",e.isDone),gp("ngModel",e.userInput),vv(),My(),qf("disabled",e.isDone),My(3),dc("Max Score: ",HE(13,9,e.maxScore)),My(3),dc("Score: ",HE(16,11,e.score)),My(4),FI(e.acceptedWords);}}var Mt=(()=>{class a{constructor(){this._snackBar=w$1(Ee),this.words=[],this.currentWord=void 0,this.scrambledWord=void 0,this.userInput="",this.message="",this.acceptedWordSet=new Set,this.acceptedWords=[],this.score=0,this.totalWords=[],this.isDone=false,console.log("isDone initialized to false"),this.loadWordList();}loadWordList(){fetch("assets/words_alpha.txt").then(e=>e.text()).then(e=>{this.words=e.split(`
`).map(t=>t.trim()).filter(t=>t.length>3&&t.length<20&&!t.includes("s"));}).catch(e=>console.error("Error loading word list:",e));}clearFields(){this.userInput="",this.message="",this.acceptedWordSet.clear(),this.acceptedWords=[],this.score=0,this.totalWords=[],this.maxScore=void 0,this.isDone=false;}getRandomWord(){this.clearFields();let e=this.filterWordsByUniqueLetters(7),t=Math.floor(Math.random()*e.length);this.currentWord=e[t];let n=this.getUniqueLetters(this.currentWord),i=this.scrambleWord(Array.from(n).join(""));for(;i===this.currentWord;)i=this.scrambleWord(Array.from(n).join(""));this.scrambledWord=i.split(""),console.log(`Word: ${this.currentWord}`),this.getAllPossibleWords();}getUniqueLetters(e){return new Set(e.split(""))}filterWordsByUniqueLetters(e){return this.words.filter(t=>this.getUniqueLetters(t).size===e)}scrambleWord(e){let t=e.split("");for(let n=t.length-1;n>0;n--){let i=Math.floor(Math.random()*(n+1));[t[n],t[i]]=[t[i],t[n]];}return t.join("")}testWord(){this.message=" ";let e=this.userInput?.toLowerCase().trim();if(this.userInput="",!this.currentWord)return this.message="No current word",false;if(e.length<4)return this._snackBar.open("Too short","",{duration:2e3}),false;if(e.length>19)return this._snackBar.open("Too long","",{duration:2e3}),false;if(this.acceptedWordSet.has(e))return this._snackBar.open("Already found","",{duration:2e3}),false;let t=this.scrambledWord[3];if(!e.includes(t))return this._snackBar.open("Missing center letter","",{duration:2e3}),false;let n=this.currentWord.split("");for(let r of e)if(n.indexOf(r)===-1)return this._snackBar.open("Bad letters","",{duration:2e3}),false;if(!this.words.includes(e))return this._snackBar.open("Not in word list","",{duration:2e3}),false;let i=0;return e.length===4?i+=1:i+=e.length,this.isPangram(e)?(i+=7,this._snackBar.open("Pangram! +"+i,"",{duration:2e3})):this._snackBar.open("Good! +"+i,"",{duration:2e3}),this.score+=i,this.acceptedWordSet.add(e),this.acceptedWords.push(e),this.acceptedWords.sort(),true}isPangram(e){if(!this.currentWord)return  false;let t=this.getUniqueLetters(this.currentWord),n=this.getUniqueLetters(e);return t.size===n.size&&[...t].every(i=>n.has(i))}getWordScore(e){let t=0;return e.length===4?t+=1:t+=e.length,this.isPangram(e)&&(t+=7),t}getAllPossibleWords(){if(!this.currentWord)return;let e=this.scrambledWord[3];this.totalWords=this.words.filter(t=>t.includes(e)&&this.canFormWordFromLetters(t,this.currentWord)).sort();for(let t of this.totalWords)this.maxScore=(this.maxScore||0)+this.getWordScore(t);}canFormWordFromLetters(e,t){let n=t.split("");for(let i of e)if(n.indexOf(i)===-1)return  false;return  true}showAllWords(){this.isDone=true,console.log("isDone set to true"),this.acceptedWords=[...this.totalWords];}scramble(){if(!this.currentWord)return;let e=this.scrambledWord[3],t=this.scrambledWord.filter((n,i)=>i!==3);for(let n=t.length-1;n>0;n--){let i=Math.floor(Math.random()*(n+1));[t[n],t[i]]=[t[i],t[n]];}t.splice(3,0,e),this.scrambledWord=t;}static{this.\u0275fac=function(t){return new(t||a)};}static{this.\u0275cmp=lI({type:a,selectors:[["ken-scramble-bee"]],decls:4,vars:1,consts:[[3,"click"],[1,"letter",3,"class"],[3,"click","disabled"],["mat-input","","type","text","placeholder","Your answer here",3,"keydown.enter","ngModelChange","disabled","ngModel"],[3,"class"],[1,"letter"]],template:function(t,n){t&1&&(Jo(0,"button",0),Kf("click",function(){return n.getRandomWord()}),CE(1,"New word"),cc(),Gf(2,"br"),RI(3,Xe,21,15)),t&2&&(My(3),kI(n.scrambledWord?3:-1));},dependencies:[Yt,be,Zt,bt,is,rs],styles:[".letter[_ngcontent-%COMP%]{font-size:2em;font-weight:700;padding-top:15px;margin:0 5px;width:.7em;text-align:center;display:inline-block}.yellow[_ngcontent-%COMP%]{color:#ffaf00}.red[_ngcontent-%COMP%]{color:#ff4c4c}.bold[_ngcontent-%COMP%]{font-weight:700}"],changeDetection:1});}}return a})();export{Mt as ScrambleBeeComponent};