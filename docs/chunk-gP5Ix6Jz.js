import {c as Y}from'./chunk-B_H9Fj6h.js';import {ak as xf,al as zi,aY as dh,aJ as mi,w,V as VP,aN as Qs,T as yn,aD as Pe,aU as ri,a8 as pI,aZ as BP,a_ as OE,N,K as Kf,a3 as Wf,a4 as ip,a$ as ep,a6 as eE,a7 as tE,E as nr,aM as Ns,o as ui,b0 as $e,b1 as eh,b2 as Cp,b3 as Hs,l as lI,b4 as Jl,az as KI,g as Jo,R as RI,aA as JI,h as cc,G as Gf,b5 as nE,ae as qf,M as My,k as kI,a5 as tp,S as re,b6 as Jr,b as ZI}from'./main-7EHMDM3E.js';var u=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new re;bulk={select:n=>this._select(n),deselect:n=>this._deselect(n),setSelection:n=>this._setSelection(n)};constructor(n=false,t,o=true,e){this._multiple=n,this._emitChanges=o,this.compareWith=e,t&&t.length&&(n?t.forEach(i=>this._markSelected(i)):this._markSelected(t[0]),this._selectedToEmit.length=0);}select(...n){return this._select(n)}deselect(...n){return this._deselect(n)}setSelection(...n){return this._setSelection(n)}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=true){this._unmarkAll();let t=this._hasQueuedChanges();return n&&this._emitChangeEvent(),t}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return !this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n);}isMultipleSelection(){return this._multiple}_select(n){this._verifyValueAssignment(n),n.forEach(o=>this._markSelected(o));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}_deselect(n){this._verifyValueAssignment(n),n.forEach(o=>this._unmarkSelected(o));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}_setSelection(n){this._verifyValueAssignment(n);let t=this.selected,o=new Set(n.map(i=>this._getConcreteValue(i)));n.forEach(i=>this._markSelected(i)),t.filter(i=>!o.has(this._getConcreteValue(i,o))).forEach(i=>this._unmarkSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[]);}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n));}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n));}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n));}_verifyValueAssignment(n){n.length>1&&this._multiple;}_hasQueuedChanges(){return !!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,t){if(this.compareWith){t=t??this._selection;for(let o of t)if(this.compareWith(n,o))return o;return n}else return n}};var tt=(()=>{class a{_animationsDisabled=ui();state="unchecked";disabled=false;appearance="full";static \u0275fac=function(o){return new(o||a)};static \u0275cmp=lI({type:a,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(o,e){o&2&&ip("mat-pseudo-checkbox-indeterminate",e.state==="indeterminate")("mat-pseudo-checkbox-checked",e.state==="checked")("mat-pseudo-checkbox-disabled",e.disabled)("mat-pseudo-checkbox-minimal",e.appearance==="minimal")("mat-pseudo-checkbox-full",e.appearance==="full")("_mat-animation-noopable",e._animationsDisabled);},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(o,e){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return a})();var ut=["button"],gt=["*"];function bt(a,n){if(a&1&&(Jo(0,"div",2),Gf(1,"mat-pseudo-checkbox",6),cc()),a&2){let t=ZI();My(),qf("disabled",t.disabled);}}var et=new N("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:false,hideMultipleSelectionIndicator:false,disabledInteractive:false})}),nt=new N("MatButtonToggleGroup"),ht={provide:Y,useExisting:Jr(()=>mt),multi:true},v=class{source;value;constructor(n,t){this.source=n,this.value=t;}},mt=(()=>{class a{_changeDetector=w(VP);_dir=w(Qs,{optional:true});_multiple=false;_disabled=false;_disabledInteractive=false;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(t){this._name=t,this._markButtonsForCheck();}_name=w(yn).getId("mat-button-toggle-group-");vertical=false;get value(){let t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t.map(o=>o.value):t[0]?t[0].value:void 0}set value(t){this._setSelectionByValue(t),this.valueChange.emit(this.value);}valueChange=new Pe;get selected(){let t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t:t[0]||null}get multiple(){return this._multiple}set multiple(t){this._multiple=t,this._markButtonsForCheck();}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._markButtonsForCheck();}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t,this._markButtonsForCheck();}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new Pe;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=t,this._markButtonsForCheck();}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(t){this._hideMultipleSelectionIndicator=t,this._markButtonsForCheck();}_hideMultipleSelectionIndicator;constructor(){let t=w(et,{optional:true});this.appearance=t&&t.appearance?t.appearance:"standard",this._hideSingleSelectionIndicator=t?.hideSingleSelectionIndicator??false,this._hideMultipleSelectionIndicator=t?.hideMultipleSelectionIndicator??false;}ngOnInit(){this._selectionModel=new u(this.multiple,void 0,false);}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(t=>t.checked)),this.multiple||this._initializeTabIndex();}writeValue(t){this.value=t,this._changeDetector.markForCheck();}registerOnChange(t){this._controlValueAccessorChangeFn=t;}registerOnTouched(t){this._onTouched=t;}setDisabledState(t){this.disabled=t;}_keydown(t){if(this.multiple||this.disabled||ri(t))return;let e=t.target.id,i=this._buttonToggles.toArray().findIndex(c=>c.buttonId===e),r=null;switch(t.keyCode){case 32:case 13:r=this._buttonToggles.get(i)||null;break;case 38:r=this._getNextButton(i,-1);break;case 37:r=this._getNextButton(i,this.dir==="ltr"?-1:1);break;case 40:r=this._getNextButton(i,1);break;case 39:r=this._getNextButton(i,this.dir==="ltr"?1:-1);break;default:return}r&&(t.preventDefault(),r._onButtonClick(),r.focus());}_emitChangeEvent(t){let o=new v(t,this.value);this._rawValue=o.value,this._controlValueAccessorChangeFn(o.value),this.change.emit(o);}_syncButtonToggle(t,o,e=false,i=false){!this.multiple&&this.selected&&!t.checked&&(this.selected.checked=false),this._selectionModel?o?this._selectionModel.select(t):this._selectionModel.deselect(t):i=true,i?Promise.resolve().then(()=>this._updateModelValue(t,e)):this._updateModelValue(t,e);}_isSelected(t){return this._selectionModel&&this._selectionModel.isSelected(t)}_isPrechecked(t){return typeof this._rawValue>"u"?false:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(o=>t.value!=null&&o===t.value):t.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(t=>{t.tabIndex=-1;}),this.selected)this.selected.tabIndex=0;else for(let t=0;t<this._buttonToggles.length;t++){let o=this._buttonToggles.get(t);if(!o.disabled){o.tabIndex=0;break}}}_getNextButton(t,o){let e=this._buttonToggles;for(let i=1;i<=e.length;i++){let r=(t+o*i+e.length)%e.length,c=e.get(r);if(c&&!c.disabled)return c}return null}_setSelectionByValue(t){if(this._rawValue=t,!this._buttonToggles)return;let o=this._buttonToggles.toArray();if(this.multiple&&t?(this._clearSelection(),t.forEach(e=>this._selectValue(e,o))):(this._clearSelection(),this._selectValue(t,o)),!this.multiple&&o.every(e=>e.tabIndex===-1)){for(let e of o)if(!e.disabled){e.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(t=>{t.checked=false,this.multiple||(t.tabIndex=-1);});}_selectValue(t,o){for(let e of o)if(e.value===t){e.checked=true,this._selectionModel.select(e),this.multiple||(e.tabIndex=0);break}}_updateModelValue(t,o){o&&this._emitChangeEvent(t),this.valueChange.emit(this.value);}_markButtonsForCheck(){this._buttonToggles?.forEach(t=>t._markForCheck());}static \u0275fac=function(o){return new(o||a)};static \u0275dir=pI({type:a,selectors:[["mat-button-toggle-group"]],contentQueries:function(o,e,i){if(o&1&&ep(i,ot,5),o&2){let r;eE(r=tE())&&(e._buttonToggles=r);}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(o,e){o&1&&Kf("keydown",function(r){return e._keydown(r)}),o&2&&(Wf("role",e.multiple?"group":"radiogroup")("aria-disabled",e.disabled),ip("mat-button-toggle-vertical",e.vertical)("mat-button-toggle-group-appearance-standard",e.appearance==="standard"));},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",BP],value:"value",multiple:[2,"multiple","multiple",BP],disabled:[2,"disabled","disabled",BP],disabledInteractive:[2,"disabledInteractive","disabledInteractive",BP],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",BP],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",BP]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[OE([ht,{provide:nt,useExisting:a}])]})}return a})(),ot=(()=>{class a{_changeDetectorRef=w(VP);_elementRef=w(nr);_focusMonitor=w(Ns);_idGenerator=w(yn);_animationDisabled=ui();_checked=false;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return `${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(t){this._tabIndex.set(t);}_tabIndex;disableRipple=false;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(t){this._appearance=t;}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(t){t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck());}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(t){this._disabled=t;}_disabled=false;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t;}_disabledInteractive;change=new Pe;constructor(){w($e).load(eh);let t=w(nt,{optional:true}),o=w(new Cp("tabindex"),{optional:true})||"",e=w(et,{optional:true});this._tabIndex=Hs(parseInt(o)||0),this.buttonToggleGroup=t,this._appearance=e&&e.appearance?e.appearance:"standard",this._disabledInteractive=e?.disabledInteractive??false;}ngOnInit(){let t=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),t&&(t._isPrechecked(this)?this.checked=true:t._isSelected(this)!==this._checked&&t._syncButtonToggle(this,this._checked));}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,true);}ngOnDestroy(){let t=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),t&&t._isSelected(this)&&t._syncButtonToggle(this,false,false,true);}focus(t){this._buttonElement.nativeElement.focus(t);}_onButtonClick(){if(this.disabled)return;let t=this.isSingleSelector()?true:!this._checked;if(t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,true),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let o=this.buttonToggleGroup._buttonToggles.find(e=>e.tabIndex===0);o&&(o.tabIndex=-1),this.tabIndex=0;}this.change.emit(new v(this,this.value));}_markForCheck(){this._changeDetectorRef.markForCheck();}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=lI({type:a,selectors:[["mat-button-toggle"]],viewQuery:function(o,e){if(o&1&&tp(ut,5),o&2){let i;eE(i=tE())&&(e._buttonElement=i.first);}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(o,e){o&1&&Kf("focus",function(){return e.focus()}),o&2&&(Wf("aria-label",null)("aria-labelledby",null)("id",e.id)("name",null),ip("mat-button-toggle-standalone",!e.buttonToggleGroup)("mat-button-toggle-checked",e.checked)("mat-button-toggle-disabled",e.disabled)("mat-button-toggle-disabled-interactive",e.disabledInteractive)("mat-button-toggle-appearance-standard",e.appearance==="standard"));},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",BP],appearance:"appearance",checked:[2,"checked","checked",BP],disabled:[2,"disabled","disabled",BP],disabledInteractive:[2,"disabledInteractive","disabledInteractive",BP]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:gt,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(o,e){if(o&1&&(KI(),Jo(0,"button",1,0),Kf("click",function(){return e._onButtonClick()}),RI(2,bt,2,1,"div",2),Jo(3,"span",3),JI(4),cc()(),Gf(5,"span",4)(6,"span",5)),o&2){let i=nE(1);qf("id",e.buttonId)("disabled",e.disabled&&!e.disabledInteractive||null),Wf("role",e.isSingleSelector()?"radio":"button")("tabindex",e.disabled&&!e.disabledInteractive?-1:e.tabIndex)("aria-pressed",e.isSingleSelector()?null:e.checked)("aria-checked",e.isSingleSelector()?e.checked:null)("name",e._getButtonName())("aria-label",e.ariaLabel)("aria-labelledby",e.ariaLabelledby)("aria-disabled",e.disabled&&e.disabledInteractive?"true":null),My(2),kI(e.buttonToggleGroup&&(!e.buttonToggleGroup.multiple&&!e.buttonToggleGroup.hideSingleSelectionIndicator||e.buttonToggleGroup.multiple&&!e.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),My(4),qf("matRippleTrigger",i)("matRippleDisabled",e.disableRipple||e.disabled);}},dependencies:[Jl,tt],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--mat-button-toggle-legacy-text-color);
  font-family: var(--mat-button-toggle-legacy-label-text-font);
  font-size: var(--mat-button-toggle-legacy-label-text-size);
  line-height: var(--mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--mat-button-toggle-legacy-label-text-tracking);
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--mat-button-toggle-legacy-disabled-state-background-color);
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--mat-button-toggle-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-button-toggle-background-color, transparent);
  font-family: var(--mat-button-toggle-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-toggle-label-text-size, var(--mat-sys-label-large-size));
  line-height: var(--mat-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-weight: var(--mat-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--mat-button-toggle-state-layer-color, var(--mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --mat-focus-indicator-border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
`],encapsulation:2})}return a})(),Ht=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=xf({type:a});static \u0275inj=zi({imports:[dh,ot,mi]})}return a})();function pt(a){let n=a.length,t;for(;n!=0;)t=Math.floor(Math.random()*n),n--,[a[n],a[t]]=[a[t],a[n]];return a}function jt(a,n){return pt(a.slice()).slice(0,n)}function qt(a,n){for(let t=0;t<a.length;t++)if(n(a[t]))return a[t]}export{Ht as H,jt as j,mt as m,ot as o,pt as p,qt as q};