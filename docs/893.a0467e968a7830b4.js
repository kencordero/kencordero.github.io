"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[893],{9893:(L,p,r)=>{r.r(p),r.d(p,{StuffModule:()=>P});var u=r(2791),a=r(4650),c=r(6895),m=r(4006),d=r(1330),h=r(8377);function f(e,i){if(1&e&&(a.TgZ(0,"div"),a._uU(1),a.qZA()),2&e){const t=a.oxw();a.xp6(1),a.hij("",t.isCorrect?"Correct!":"Incorrect. The answer is "+t.correctAnswer,"\n")}}let y=(()=>{class e{constructor(){this.operator="addition",this.operatorSymbol="+",this.min=0,this.max=0,this.setupQuestion()}setupQuestion(){switch(this.response=void 0,this.isCorrect=void 0,this.operator){case"addition":this.operatorSymbol="+",[this.min,this.max]=[10,99],this.number1=this.createRandomNumber(),this.number2=this.createRandomNumber(),this.correctAnswer=this.number1+this.number2;break;case"subtraction":this.operatorSymbol="-",[this.min,this.max]=[10,99],this.number1=this.createRandomNumber(),this.number2=this.createRandomNumber(),this.number2>this.number1&&([this.number1,this.number2]=[this.number2,this.number1]),this.correctAnswer=this.number1-this.number2;break;case"multiplication":this.operatorSymbol="\xd7",[this.min,this.max]=[0,12],this.number1=this.createRandomNumber(),this.number2=this.createRandomNumber(),this.correctAnswer=this.number1*this.number2;break;case"division":this.operatorSymbol="\xf7",[this.min,this.max]=[1,12],this.correctAnswer=this.createRandomNumber(),this.number2=this.createRandomNumber(),this.number1=this.correctAnswer*this.number2}}createRandomNumber(){const t=Math.ceil(this.min),n=Math.floor(this.max+1);return Math.floor(Math.random()*(n-t)+t)}ngOnInit(){}checkResponse(t){"Enter"===t.key&&(this.isCorrect=this.response===this.correctAnswer,console.log(this.isCorrect),setTimeout(()=>this.setupQuestion(),1500))}onOperatorChanged(t){this.setupQuestion()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-arithmetic"]],decls:15,vars:6,consts:[["name","operator",3,"ngModel","ngModelChange","change"],["value","addition"],["value","subtraction"],["value","multiplication"],["value","division"],[1,"row","pull-down"],[1,"col-4","col-md-2"],["type","number","autofocus","","mat-input","","placeholder","Enter the answer",1,"col-4","col-md-2",3,"ngModel","ngModelChange","keypress"],[4,"ngIf"]],template:function(t,n){1&t&&(a.TgZ(0,"mat-button-toggle-group",0),a.NdJ("ngModelChange",function(l){return n.operator=l})("change",function(l){return n.onOperatorChanged(l)}),a.TgZ(1,"mat-button-toggle",1),a._uU(2,"Addition"),a.qZA(),a.TgZ(3,"mat-button-toggle",2),a._uU(4,"Subtraction"),a.qZA(),a.TgZ(5,"mat-button-toggle",3),a._uU(6,"Multiplication"),a.qZA(),a.TgZ(7,"mat-button-toggle",4),a._uU(8,"Division"),a.qZA()(),a.TgZ(9,"div",5)(10,"mat-card",6)(11,"mat-card-title"),a._uU(12),a.qZA()(),a.TgZ(13,"input",7),a.NdJ("ngModelChange",function(l){return n.response=l})("keypress",function(l){return n.checkResponse(l)}),a.qZA()(),a.YNc(14,f,2,1,"div",8)),2&t&&(a.Q6J("ngModel",n.operator),a.xp6(12),a.lnq("",n.number1," ",n.operatorSymbol," ",n.number2," ="),a.xp6(1),a.Q6J("ngModel",n.response),a.xp6(1),a.Q6J("ngIf",void 0!==n.isCorrect))},dependencies:[c.O5,m.Fj,m.wV,m.JJ,m.On,d.A9,d.Yi,h.S$,h.mi],styles:[".pull-down[_ngcontent-%COMP%]{margin-top:70px}.inline[_ngcontent-%COMP%]{display:inline}"]}),e})();function g(e){for(var i=e.length-1;i>0;i--){var t=Math.floor(Math.random()*(i+1)),n=e[i];e[i]=e[t],e[t]=n}}const s=[{name:"Afghanistan",capital:"Kabul"},{name:"Albania",capital:"Tirana"},{name:"Algeria",capital:"Algiers"},{name:"Andorra",capital:"Andorra la Vella"},{name:"Angola",capital:"Luanda"},{name:"Antigua and Barbuda",capital:"Saint John's"},{name:"Argentina",capital:"Buenos Aires"},{name:"Armenia",capital:"Yerevan"},{name:"Aruba",capital:"Oranjestad"},{name:"Australia",capital:"Canberra"},{name:"Austria",capital:"Vienna"},{name:"Azerbaijan",capital:"Baku"},{name:"Bahamas",capital:"Nassau"},{name:"Bahrain",capital:"Manama"},{name:"Bangladesh",capital:"Dhaka"},{name:"Barbados",capital:"Bridgetown"},{name:"Belarus",capital:"Minsk"},{name:"Belgium",capital:"Brussels"},{name:"Belize",capital:"Belmopan"},{name:"Benin",capital:"Porto-Novo"},{name:"Bhutan",capital:"Thimphu"},{name:"Bolivia",capital:"La Paz"},{name:"Bosnia and Herzegovina",capital:"Sarajevo"},{name:"Botswana",capital:"Gaborone"},{name:"Brazil",capital:"Bras\xedlia"},{name:"Brunei",capital:"Bandar Seri Begawan"},{name:"Bulgaria",capital:"Sofia"},{name:"Burkina Faso",capital:"Ouagadougou"},{name:"Burundi",capital:"Gitega"},{name:"Cambodia",capital:"Phnom Penh"},{name:"Cameroon",capital:"Yaound\xe9"},{name:"Canada",capital:"Ottawa"},{name:"Cape Verde",capital:"Praia"},{name:"Central African Republic",capital:"Bangui"},{name:"Chad",capital:"N'Djamena"},{name:"Chile",capital:"Santiago"},{name:"China",capital:"Beijing"},{name:"Colombia",capital:"Bogot\xe1"},{name:"Comoros",capital:"Moroni"},{name:"Congo",capital:"Brazzaville"},{name:"Cook Islands",capital:"Avarua"},{name:"Costa Rica",capital:"San Jos\xe9"},{name:"Croatia",capital:"Zagreb"},{name:"Cuba",capital:"Havana"},{name:"Cura\xe7ao",capital:"Willemstad"},{name:"Cyprus",capital:"Nicosia"},{name:"Czech Republic",capital:"Prague"},{name:"Democratic Republic of the Congo",capital:"Kinshasa"},{name:"Denmark",capital:"Copenhagen"},{name:"Djibouti",capital:"Djibouti"},{name:"Dominica",capital:"Roseau"},{name:"Dominican Republic",capital:"Santo Domingo"},{name:"East Timor",capital:"Dili"},{name:"Ecuador",capital:"Quito"},{name:"Egypt",capital:"Cairo"},{name:"El Salvador",capital:"San Salvador"},{name:"England",capital:"London"},{name:"Equatorial Guinea",capital:"Malabo"},{name:"Eritrea",capital:"Asmara"},{name:"Estonia",capital:"Tallinn"},{name:"Eswatini",capital:"Mbabane"},{name:"Ethiopia",capital:"Addis Ababa"},{name:"Faroe Islands",capital:"T\xf3rshavn"},{name:"Fiji",capital:"Suva"},{name:"Finland",capital:"Helsinki"},{name:"France",capital:"Paris"},{name:"Gabon",capital:"Libreville"},{name:"The Gambia",capital:"Banjul"},{name:"Georgia",capital:"Tbilisi"},{name:"Germany",capital:"Berlin"},{name:"Ghana",capital:"Accra"},{name:"Greece",capital:"Athens"},{name:"Greenland",capital:"Nuuk"},{name:"Grenada",capital:"Saint George's"},{name:"Guatemala",capital:"Guatemala City"},{name:"Guinea",capital:"Conakry"},{name:"Guinea-Bissau",capital:"Bissau"},{name:"Guyana",capital:"Georgetown"},{name:"Haiti",capital:"Port-au-Prince"},{name:"Honduras",capital:"Tegucigalpa"},{name:"Hungary",capital:"Budapest"},{name:"Iceland",capital:"Reykjavik"},{name:"India",capital:"New Delhi"},{name:"Indonesia",capital:"Jakarta"},{name:"Iran",capital:"Tehran"},{name:"Iraq",capital:"Baghdad"},{name:"Ireland",capital:"Dublin"},{name:"Israel",capital:"Jerusalem"},{name:"Italy",capital:"Rome"},{name:"C\xf4te d'Ivoire",capital:"Yamoussoukro"},{name:"Jamaica",capital:"Kingston"},{name:"Japan",capital:"Tokyo"},{name:"Jordan",capital:"Amman"},{name:"Kazakhstan",capital:"Nur-Sultan"},{name:"Kenya",capital:"Nairobi"},{name:"Kiribati",capital:"South Tarawa"},{name:"Kosovo",capital:"Pristina"},{name:"Kuwait",capital:"Kuwait City"},{name:"Kyrgyzstan",capital:"Bishkek"},{name:"Laos",capital:"Vientiane"},{name:"Latvia",capital:"Riga"},{name:"Lebanon",capital:"Beirut"},{name:"Lesotho",capital:"Maseru"},{name:"Liberia",capital:"Monrovia"},{name:"Libya",capital:"Tripoli"},{name:"Liechtenstein",capital:"Vaduz"},{name:"Lithuania",capital:"Vilnius"},{name:"Luxembourg",capital:"Luxembourg"},{name:"Madagascar",capital:"Antananarivo"},{name:"Malawi",capital:"Lilongwe"},{name:"Malaysia",capital:"Kuala Lumpur"},{name:"Maldives",capital:"Male"},{name:"Mali",capital:"Bamako"},{name:"Malta",capital:"Valletta"},{name:"Marshall Islands",capital:"Majuro"},{name:"Mauritania",capital:"Nouakchott"},{name:"Mauritius",capital:"Port Louis"},{name:"Mexico",capital:"Mexico City"},{name:"Micronesia",capital:"Palikir"},{name:"Moldova",capital:"Chi\u0219in\u0103u"},{name:"Monaco",capital:"Monaco"},{name:"Mongolia",capital:"Ulaanbaatar"},{name:"Montenegro",capital:"Podgorica"},{name:"Morocco",capital:"Rabat"},{name:"Mozambique",capital:"Maputo"},{name:"Myanmar",capital:"Naypyidaw"},{name:"Namibia",capital:"Windhoek"},{name:"Nauru",capital:"Yaren"},{name:"Nepal",capital:"Kathmandu"},{name:"Netherlands",capital:"Amsterdam"},{name:"New Caledonia",capital:"Noum"},{name:"New Zealand",capital:"Wellington"},{name:"Nicaragua",capital:"Managua"},{name:"Niger",capital:"Niamey"},{name:"Nigeria",capital:"Abuja"},{name:"Niue",capital:"Alofi"},{name:"North Korea",capital:"Pyongyang"},{name:"North Macedonia",capital:"Skopje"},{name:"Northern Ireland",capital:"Belfast"},{name:"Norway",capital:"Oslo"},{name:"Oman",capital:"Muscat"},{name:"Pakistan",capital:"Islamabad"},{name:"Palau",capital:"Ngerulmud"},{name:"Panama",capital:"Panama City"},{name:"Papua New Guinea",capital:"Port Moresby"},{name:"Paraguay",capital:"Asunci\xf3n"},{name:"Peru",capital:"Lima"},{name:"Philippines",capital:"Manila"},{name:"Poland",capital:"Warsaw"},{name:"Portugal",capital:"Lisboa"},{name:"Puerto Rico",capital:"San Juan"},{name:"Qatar",capital:"Doha"},{name:"Romania",capital:"Bucharest"},{name:"Russia",capital:"Moscow"},{name:"Rwanda",capital:"Kigali"},{name:"Saint Kitts and Nevis",capital:"Basseterre"},{name:"Saint Lucia",capital:"Castries"},{name:"Saint Vincent and the Grenadines",capital:"Kingstown"},{name:"Samoa",capital:"Apia"},{name:"San Marino",capital:"San Marino"},{name:"S\xe3o Tom\xe9 and Pr\xedncipe",capital:"S\xe3o Tom\xe9"},{name:"Saudi Arabia",capital:"Riyadh"},{name:"Scotland",capital:"Edinburgh"},{name:"Senegal",capital:"Dakar"},{name:"Serbia",capital:"Belgrade"},{name:"Seychelles",capital:"Victoria"},{name:"Sierra Leone",capital:"Freetown"},{name:"Singapore",capital:"Singapore"},{name:"Sint Maarten",capital:"Philipsburg"},{name:"Slovakia",capital:"Bratislava"},{name:"Slovenia",capital:"Ljubljana"},{name:"Solomon Islands",capital:"Honiara"},{name:"Somalia",capital:"Mogadishu"},{name:"South Africa",capital:"Pretoria"},{name:"South Korea",capital:"Seoul"},{name:"South Sudan",capital:"Juba"},{name:"Spain",capital:"Madrid"},{name:"Sri Lanka",capital:"Sri Jayawardenepura Kotte"},{name:"Sudan",capital:"Khartoum"},{name:"Suriname",capital:"Paramaribo"},{name:"Sweden",capital:"Stockholm"},{name:"Switzerland",capital:"Bern"},{name:"Syria",capital:"Damascus"},{name:"Taiwan",capital:"Taipei"},{name:"Tajikistan",capital:"Dushanbe"},{name:"Tanzania",capital:"Dodoma"},{name:"Thailand",capital:"Bangkok"},{name:"Togo",capital:"Lom\xe9"},{name:"Tonga",capital:"Nuku'alofa"},{name:"Trinidad and Tobago",capital:"Port of Spain"},{name:"Tunisia",capital:"Tunis"},{name:"Turkey",capital:"Ankara"},{name:"Turkmenistan",capital:"Ashgabat"},{name:"Tuvalu",capital:"Funafuti"},{name:"Uganda",capital:"Kampala"},{name:"Ukraine",capital:"Kyiv"},{name:"United Arab Emirates",capital:"Abu Dhabi"},{name:"United Kingdom",capital:"London"},{name:"United States",capital:"Washington, D.C."},{name:"Uruguay",capital:"Montevideo"},{name:"Uzbekistan",capital:"Tashkent"},{name:"Vanuatu",capital:"Port Vila"},{name:"Vatican City",capital:"Vatican City"},{name:"Venezuela",capital:"Caracas"},{name:"Vietnam",capital:"Hanoi"},{name:"Wales",capital:"Cardiff"},{name:"Yemen",capital:"Sana'a"},{name:"Zambia",capital:"Lusaka"},{name:"Zimbabwe",capital:"Harare"}];let b=(()=>{class e{constructor(){this.question={question:"",correctAnswer:"",options:[],result:void 0}}setupQuestion(){this.question.result=void 0;const t=Math.floor(Math.random()*s.length);this.question.question=s[t].name,this.question.correctAnswer=s[t].capital;let n=s.filter(o=>o.capital!==this.question.correctAnswer).map(o=>o.capital);return g(n),n=n.slice(0,8),n.unshift(s[t].capital),g(n),this.question.options=n,console.log("question",this.question),this.question}checkResponse(t){return t===this.question.correctAnswer}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var C=r(9818);const w=function(e,i){return[e,i]};function S(e,i){if(1&e){const t=a.EpF();a.TgZ(0,"button",7),a.NdJ("click",function(){const l=a.CHM(t).$implicit,I=a.oxw(2);return a.KtG(I.onOptionSelected(l))}),a._uU(1),a.qZA()}if(2&e){const t=i.$implicit,n=a.oxw(2);a.Q6J("ngClass",a.WLB(2,w,void 0!==n.result&&t===n.question.correctAnswer?"correct":"",!1===n.result&&t===n.optionSelected?"incorrect":"")),a.xp6(1),a.Oqu(t)}}function k(e,i){if(1&e&&(a.TgZ(0,"div",4)(1,"div",8),a._uU(2),a.qZA()()),2&e){const t=a.oxw(2);a.xp6(2),a.Oqu(t.result?"Correct!":"Incorrect. The correct answer is "+t.question.correctAnswer)}}function A(e,i){if(1&e){const t=a.EpF();a.TgZ(0,"div",1)(1,"h1",2),a._uU(2),a.qZA(),a.YNc(3,S,2,5,"button",3),a.TgZ(4,"div",4)(5,"button",5),a.NdJ("click",function(){a.CHM(t);const o=a.oxw();return a.KtG(o.onNextQuestion())}),a._uU(6,"Another question"),a.qZA()(),a.YNc(7,k,3,1,"div",6),a.qZA()}if(2&e){const t=a.oxw();a.xp6(2),a.hij("What is the capital of ",t.question.question,"?"),a.xp6(1),a.Q6J("ngForOf",t.question.options),a.xp6(4),a.Q6J("ngIf",void 0!==t.result)}}let M=(()=>{class e{constructor(t){this.quizService=t,this.question=this.quizService.setupQuestion()}ngOnInit(){}onNextQuestion(){this.result=void 0,this.optionSelected=void 0,this.question=this.quizService.setupQuestion()}onOptionSelected(t){this.optionSelected=t,this.result=this.quizService.checkResponse(t)}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(b))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-capitals"]],decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"move-down","center"],["class","col-3 option","mat-raised-button","",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"move-down","row"],["mat-raised-button","",1,"col","align-self-center",3,"click"],["class","move-down row",4,"ngIf"],["mat-raised-button","",1,"col-3","option",3,"ngClass","click"],[1,"success"]],template:function(t,n){1&t&&a.YNc(0,A,8,3,"div",0),2&t&&a.Q6J("ngIf",n.question)},dependencies:[c.mk,c.sg,c.O5,C.eB],styles:[".move-down[_ngcontent-%COMP%]{margin-top:100px}.option[_ngcontent-%COMP%]{margin:2px}.correct[_ngcontent-%COMP%]{background-color:green;color:#fff}.incorrect[_ngcontent-%COMP%]{background-color:red;color:#fff}"]}),e})();const _=["abodes","acrid","actually","adaptable","adds","adjusted","adorable","aggravate","Alberta","Alhambra","alternate","ambient","Andalusian","Andean","andromeda","Angola","another","antidote","apartment","apex","appendages","archers","architrave","Arcturus","area","arrested","arrive","arrows","assimilation","astride","athenaeum/atheneum","awesome","aye-aye","Ayurvedic","Azores","baggy","balance","ballast","balm","bandage","bandmates","Bangalore","barked","batten","beetle","beginning","Beijing","belongs","benefited/benefitted","benighted","beyond","bill","biryani/biriani","blame","blasphemous","blast","blessings","blotch","blue","bobbed","bones","bossiness","bottom","bovines","broached","brooding","bruise","build","busy","came","camel","Camelot","can","canid","caparisoned","carillon","casa","catastrophe","ceiling","chachalacas","chase","chatelaine","chemotherapy","chiasmus","Chicago","choose","chores","chunks","churned","cirque","cirrhosis","clash","clerisy","color/colour","comic","commemoration","compute","configuration","confiscated","conifers","conjugate","constant","container","contours","coop","copy","cortege","cottonwood","counterfeit","crafty","crevices","cronies","crops","cry","cuirass","cul-de-sac","cups","curly","cute","dais","damaged","debit","decide","declaration","defunct","deign","deviation","devoured","disband","discarded","display","dissolute","distracted","doll","donkeys","doodled","doorjamb","doppelg\xe4nger","drag","dredged","during","ears","easily","ebb","economy","efficient","effigy","elves","embossed","embrace","emigrate","enamel","encompass","equipment","estampies","eurhythmics/eurythmics","evaded","everlasting","everyone","exciting","exhilaration","fado","faith","fasting","feedback","feel","feisty","few","files","five","floral","flybys","food","forget","former","forsooth","foster","frantic","freedom","fudge","fumatorium","funky","Gaels","garderobe","geopolitics","glide","gloomy","grass","gravy","greasy","greeting","grimy","growling","had","harsh","hauling","heavy","help","hematology","hey","hint","hitched","hobbledehoy","homeopathic","hot","humbug","hummingbird","hurdy-gurdy","impudence","inaudible","incontrovertible","infrared","inkling","inlet","innings","innocent","instead","interesting","intertribal","intubated","Jicarilla","jinx","joggled","kirpan","kneeling","kumkum","landline","Leander","leave","like","limbering","Lithuania","long","look","lousy","lurid","lustrum","make","maneuverable","Manhattan","maniacal","many","map","marguerite","marry","masa","mausoleum","meal","menacing","mercenary","minerals","minute","miscellaneous","misericordes/misericords","model","moo","moon","mullioned","murals","mutiny","nares","Navajo/Navaho","need","nets","newt","nimble","nobody","nom de plume","none","nose","not","observations","off","offhandedly","oftentimes","Ohio","oncologist","only","orca","ordained","order","overseas","overtly","pace","page","pail","pandemic","pangs","pants","paradise","parathas","party","peacock","peevish","pell-mell","Penelope","people","philology","phone","pioneered","Piraeus","pistons","pitch-black","plan","pneumonia","pod","poke","pomade","poppet","porch","potential","potion","pottery","preternaturally","probably","prophetically","proscribed","provocation","purchase","put","puttering","python","quiet","railings","rare","reenactment","rejoinder","rental","republic","reservation","respond","retribution","rice","riffled","rituals","roots","roulette","ruckus","sackbuts","saints","saltarellos","Sanskrit","scared","scars","scrawled","section","sedan","seminary","serum","share","shawl","sheepish","sheesh","shelf","shrivel","sifting","sights","Sikhism","sink","sit","skidded","skipped","slather","slippery","slivers","slouch","smell","smirk","smite","smooshed","snooty","sockets","soldiers","sole","some","sorry","spading","Spandau","sparrow","speck","spellbound","spic-and-span/spick-and-span","squinched","stairs","starboard","stinky","story","streak","stumped","stuttered","subservient","subsidence","sway","swept","switcheroo","swoop","table","tales","tallyho","Tamil","tankard","telenovelas","tell","temperature","ten","tenets","thurible","tiara","tilapia","tingle","tiny","tomorrow","top","torment","tote","tower","toys","traditional","trap","trash","trees","trey","trilby","trout","twelve","two","unacknowledged","undine","until","upbeat","uplift","urad","urchins","vertical","vestments","Vesuvian","visit","waist","washing","weave","what","white","whizzed","Wi-Fi","wiggle","wonder","wrestle","xylem","yurt","Zimbabwe"];let B=(()=>{class e{constructor(){this.wordList=_,this.currentWordIndex=-1,this.wordList=this.shuffle(this.wordList)}getRandomWord(){return this.wordList[Math.floor(Math.random()*this.wordList.length)]}getNextWord(){return this.currentWordIndex=(this.currentWordIndex+1)%this.wordList.length,this.wordList[this.currentWordIndex]}shuffle(t){let o,n=t.length;for(;0!==n;)o=Math.floor(Math.random()*n),n--,[t[n],t[o]]=[t[o],t[n]];return t}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const T=[{path:"capitals",component:M},{path:"arithmetic",component:y},{path:"spelling-bee",component:(()=>{class e{constructor(t){this.api=t,this.word=this.api.getNextWord()}onClickNext(){this.word=this.api.getNextWord()}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(B))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-spelling-bee"]],decls:4,vars:1,consts:[[3,"click"]],template:function(t,n){1&t&&(a.TgZ(0,"button",0),a.NdJ("click",function(){return n.onClickNext()}),a._uU(1,"Next word"),a.qZA(),a.TgZ(2,"h1"),a._uU(3),a.qZA()),2&t&&(a.xp6(3),a.Oqu(n.word))},styles:["h1[_ngcontent-%COMP%]{font-size:5em;padding-top:65px;padding-left:10px}"]}),e})()}];let N=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[u.Bz.forChild(T),u.Bz]}),e})(),x=(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var q=r(5141);let P=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({providers:[b,x],imports:[N,q.m]}),e})()}}]);