import {ak as xf,al as zi,am as na,l as lI,an as ts,g as Jo,aa as mp,K as Kf,C as CE,h as cc,ac as mv,R as RI,ah as gp,ai as vv,M as My,ao as hp,k as kI,ap as ar,A as jt$1,aq as xi,ar as ze,as as sl,G as Gf,at as ns,ae as qf,au as xg,av as ee,b as ZI,aw as LE,e as dc,$ as $I,L as LI,P as PI,F as FI,ax as Mh,ay as X,w,az as KI,aA as JI,a4 as ip,a as lc,u as uc,a8 as pI,f as fp,x as xE,E as nr,D as ae$1,V as VP,aB as dv,aC as Ws,aD as Pe,aE as $P,z as zf,aF as op,a3 as Wf,af as pE,N,ad as jE,aj as HE,ab as NE,O as Ol,c as Pl,aG as yr,d as Md}from'./main-7EHMDM3E.js';import {m as mt,o as ot,p as pt$1,j as jt$2,q as qt$1}from'./chunk-gP5Ix6Jz.js';import {Y as Yt,b as be,M as Mt$1,Z as Zt,a as bt$1}from'./chunk-B_H9Fj6h.js';var st=(t,s)=>({correct:t,incorrect:s});function ct(t,s){if(t&1&&(Jo(0,"div",7),CE(1),cc()),t&2){let e=ZI();qf("ngClass",LE(2,st,e.isCorrect,!e.isCorrect)),My(),dc("",e.isCorrect?"Correct!":"The correct answer is "+e.correctAnswer," ");}}var te=(()=>{class t{constructor(){this.operator="addition",this.operatorSymbol="+",this.min=0,this.max=0,this.setupQuestion();}setupQuestion(){switch(this.response=void 0,this.isCorrect=void 0,this.operator){case "addition":this.operatorSymbol="+",[this.min,this.max]=[10,99],this.number1=this.createRandomNumber(),this.number2=this.createRandomNumber(),this.correctAnswer=this.number1+this.number2;break;case "subtraction":this.operatorSymbol="-",[this.min,this.max]=[10,99],this.number1=this.createRandomNumber(),this.number2=this.createRandomNumber(),this.number2>this.number1&&([this.number1,this.number2]=[this.number2,this.number1]),this.correctAnswer=this.number1-this.number2;break;case "multiplication":this.operatorSymbol="\xD7",[this.min,this.max]=[0,12],this.number1=this.createRandomNumber(),this.number2=this.createRandomNumber(),this.correctAnswer=this.number1*this.number2;break;case "division":this.operatorSymbol="\xF7",[this.min,this.max]=[1,12],this.correctAnswer=this.createRandomNumber(),this.number2=this.createRandomNumber(),this.number1=this.correctAnswer*this.number2;break}}createRandomNumber(){let e=Math.ceil(this.min),a=Math.floor(this.max+1);return Math.floor(Math.random()*(a-e)+e)}ngOnInit(){}checkResponse(e){e.key==="Enter"&&(this.isCorrect=this.response===this.correctAnswer,setTimeout(()=>this.setupQuestion(),1500));}onOperatorChanged(e){this.setupQuestion();}static{this.\u0275fac=function(a){return new(a||t)};}static{this.\u0275cmp=lI({type:t,selectors:[["ken-arithmetic"]],decls:14,vars:6,consts:[["name","operator",3,"ngModelChange","change","ngModel"],["value","addition"],["value","subtraction"],["value","multiplication"],["value","division"],[1,"row","pull-down"],["id","textInput","type","number","autofocus","","mat-input","",3,"ngModelChange","keypress","ngModel"],["id","info",3,"ngClass"]],template:function(a,n){a&1&&(Jo(0,"mat-button-toggle-group",0),mp("ngModelChange",function(u){return NE(n.operator,u)||(n.operator=u),u}),Kf("change",function(u){return n.onOperatorChanged(u)}),Jo(1,"mat-button-toggle",1),CE(2,"Addition"),cc(),Jo(3,"mat-button-toggle",2),CE(4,"Subtraction"),cc(),Jo(5,"mat-button-toggle",3),CE(6,"Multiplication"),cc(),Jo(7,"mat-button-toggle",4),CE(8,"Division"),cc()(),mv(),Jo(9,"div",5)(10,"h1"),CE(11),cc(),Jo(12,"input",6),mp("ngModelChange",function(u){return NE(n.response,u)||(n.response=u),u}),Kf("keypress",function(u){return n.checkResponse(u)}),cc(),mv(),RI(13,ct,2,5,"div",7),cc()),a&2&&(gp("ngModel",n.operator),vv(),My(11),hp("",n.number1," ",n.operatorSymbol," ",n.number2," ="),My(),gp("ngModel",n.response),vv(),My(),kI(n.isCorrect!==void 0?13:-1));},dependencies:[mt,Yt,be,Mt$1,Zt,bt$1,ot,ts],styles:[".pull-down[_ngcontent-%COMP%]{margin-top:70px}.inline[_ngcontent-%COMP%]{display:inline}h1[_ngcontent-%COMP%]{font-size:60px;text-align:center}input#textInput[_ngcontent-%COMP%]{margin-top:20px;font-size:60px;text-align:center}#info[_ngcontent-%COMP%]{margin-top:20px;font-size:30px;text-align:center}.correct[_ngcontent-%COMP%]{color:green}.incorrect[_ngcontent-%COMP%]{color:red}"],changeDetection:1});}}return t})();var j=[{name:"Afghanistan",capital:"Kabul"},{name:"Albania",capital:"Tirana"},{name:"Algeria",capital:"Algiers"},{name:"Andorra",capital:"Andorra la Vella"},{name:"Angola",capital:"Luanda"},{name:"Antigua and Barbuda",capital:"Saint John's"},{name:"Argentina",capital:"Buenos Aires"},{name:"Armenia",capital:"Yerevan"},{name:"Aruba",capital:"Oranjestad"},{name:"Australia",capital:"Canberra"},{name:"Austria",capital:"Vienna"},{name:"Azerbaijan",capital:"Baku"},{name:"Bahamas",capital:"Nassau"},{name:"Bahrain",capital:"Manama"},{name:"Bangladesh",capital:"Dhaka"},{name:"Barbados",capital:"Bridgetown"},{name:"Belarus",capital:"Minsk"},{name:"Belgium",capital:"Brussels"},{name:"Belize",capital:"Belmopan"},{name:"Benin",capital:"Porto-Novo"},{name:"Bhutan",capital:"Thimphu"},{name:"Bolivia",capital:"La Paz"},{name:"Bosnia and Herzegovina",capital:"Sarajevo"},{name:"Botswana",capital:"Gaborone"},{name:"Brazil",capital:"Bras\xEDlia"},{name:"Brunei",capital:"Bandar Seri Begawan"},{name:"Bulgaria",capital:"Sofia"},{name:"Burkina Faso",capital:"Ouagadougou"},{name:"Burundi",capital:"Gitega"},{name:"Cambodia",capital:"Phnom Penh"},{name:"Cameroon",capital:"Yaound\xE9"},{name:"Canada",capital:"Ottawa"},{name:"Cape Verde",capital:"Praia"},{name:"Central African Republic",capital:"Bangui"},{name:"Chad",capital:"N'Djamena"},{name:"Chile",capital:"Santiago"},{name:"China",capital:"Beijing"},{name:"Colombia",capital:"Bogot\xE1"},{name:"Comoros",capital:"Moroni"},{name:"Congo",capital:"Brazzaville"},{name:"Cook Islands",capital:"Avarua"},{name:"Costa Rica",capital:"San Jos\xE9"},{name:"Croatia",capital:"Zagreb"},{name:"Cuba",capital:"Havana"},{name:"Cura\xE7ao",capital:"Willemstad"},{name:"Cyprus",capital:"Nicosia"},{name:"Czech Republic",capital:"Prague"},{name:"Democratic Republic of the Congo",capital:"Kinshasa"},{name:"Denmark",capital:"Copenhagen"},{name:"Djibouti",capital:"Djibouti"},{name:"Dominica",capital:"Roseau"},{name:"Dominican Republic",capital:"Santo Domingo"},{name:"East Timor",capital:"Dili"},{name:"Ecuador",capital:"Quito"},{name:"Egypt",capital:"Cairo"},{name:"El Salvador",capital:"San Salvador"},{name:"England",capital:"London"},{name:"Equatorial Guinea",capital:"Malabo"},{name:"Eritrea",capital:"Asmara"},{name:"Estonia",capital:"Tallinn"},{name:"Eswatini",capital:"Mbabane"},{name:"Ethiopia",capital:"Addis Ababa"},{name:"Faroe Islands",capital:"T\xF3rshavn"},{name:"Fiji",capital:"Suva"},{name:"Finland",capital:"Helsinki"},{name:"France",capital:"Paris"},{name:"Gabon",capital:"Libreville"},{name:"The Gambia",capital:"Banjul"},{name:"Georgia",capital:"Tbilisi"},{name:"Germany",capital:"Berlin"},{name:"Ghana",capital:"Accra"},{name:"Greece",capital:"Athens"},{name:"Greenland",capital:"Nuuk"},{name:"Grenada",capital:"Saint George's"},{name:"Guatemala",capital:"Guatemala City"},{name:"Guinea",capital:"Conakry"},{name:"Guinea-Bissau",capital:"Bissau"},{name:"Guyana",capital:"Georgetown"},{name:"Haiti",capital:"Port-au-Prince"},{name:"Honduras",capital:"Tegucigalpa"},{name:"Hungary",capital:"Budapest"},{name:"Iceland",capital:"Reykjavik"},{name:"India",capital:"New Delhi"},{name:"Indonesia",capital:"Jakarta"},{name:"Iran",capital:"Tehran"},{name:"Iraq",capital:"Baghdad"},{name:"Ireland",capital:"Dublin"},{name:"Israel",capital:"Jerusalem"},{name:"Italy",capital:"Rome"},{name:"C\xF4te d'Ivoire",capital:"Yamoussoukro"},{name:"Jamaica",capital:"Kingston"},{name:"Japan",capital:"Tokyo"},{name:"Jordan",capital:"Amman"},{name:"Kazakhstan",capital:"Nur-Sultan"},{name:"Kenya",capital:"Nairobi"},{name:"Kiribati",capital:"South Tarawa"},{name:"Kosovo",capital:"Pristina"},{name:"Kuwait",capital:"Kuwait City"},{name:"Kyrgyzstan",capital:"Bishkek"},{name:"Laos",capital:"Vientiane"},{name:"Latvia",capital:"Riga"},{name:"Lebanon",capital:"Beirut"},{name:"Lesotho",capital:"Maseru"},{name:"Liberia",capital:"Monrovia"},{name:"Libya",capital:"Tripoli"},{name:"Liechtenstein",capital:"Vaduz"},{name:"Lithuania",capital:"Vilnius"},{name:"Luxembourg",capital:"Luxembourg"},{name:"Madagascar",capital:"Antananarivo"},{name:"Malawi",capital:"Lilongwe"},{name:"Malaysia",capital:"Kuala Lumpur"},{name:"Maldives",capital:"Male"},{name:"Mali",capital:"Bamako"},{name:"Malta",capital:"Valletta"},{name:"Marshall Islands",capital:"Majuro"},{name:"Mauritania",capital:"Nouakchott"},{name:"Mauritius",capital:"Port Louis"},{name:"Mexico",capital:"Mexico City"},{name:"Micronesia",capital:"Palikir"},{name:"Moldova",capital:"Chi\u0219in\u0103u"},{name:"Monaco",capital:"Monaco"},{name:"Mongolia",capital:"Ulaanbaatar"},{name:"Montenegro",capital:"Podgorica"},{name:"Morocco",capital:"Rabat"},{name:"Mozambique",capital:"Maputo"},{name:"Myanmar",capital:"Naypyidaw"},{name:"Namibia",capital:"Windhoek"},{name:"Nauru",capital:"Yaren"},{name:"Nepal",capital:"Kathmandu"},{name:"Netherlands",capital:"Amsterdam"},{name:"New Caledonia",capital:"Noum"},{name:"New Zealand",capital:"Wellington"},{name:"Nicaragua",capital:"Managua"},{name:"Niger",capital:"Niamey"},{name:"Nigeria",capital:"Abuja"},{name:"Niue",capital:"Alofi"},{name:"North Korea",capital:"Pyongyang"},{name:"North Macedonia",capital:"Skopje"},{name:"Northern Ireland",capital:"Belfast"},{name:"Norway",capital:"Oslo"},{name:"Oman",capital:"Muscat"},{name:"Pakistan",capital:"Islamabad"},{name:"Palau",capital:"Ngerulmud"},{name:"Panama",capital:"Panama City"},{name:"Papua New Guinea",capital:"Port Moresby"},{name:"Paraguay",capital:"Asunci\xF3n"},{name:"Peru",capital:"Lima"},{name:"Philippines",capital:"Manila"},{name:"Poland",capital:"Warsaw"},{name:"Portugal",capital:"Lisboa"},{name:"Puerto Rico",capital:"San Juan"},{name:"Qatar",capital:"Doha"},{name:"Romania",capital:"Bucharest"},{name:"Russia",capital:"Moscow"},{name:"Rwanda",capital:"Kigali"},{name:"Saint Kitts and Nevis",capital:"Basseterre"},{name:"Saint Lucia",capital:"Castries"},{name:"Saint Vincent and the Grenadines",capital:"Kingstown"},{name:"Samoa",capital:"Apia"},{name:"San Marino",capital:"San Marino"},{name:"S\xE3o Tom\xE9 and Pr\xEDncipe",capital:"S\xE3o Tom\xE9"},{name:"Saudi Arabia",capital:"Riyadh"},{name:"Scotland",capital:"Edinburgh"},{name:"Senegal",capital:"Dakar"},{name:"Serbia",capital:"Belgrade"},{name:"Seychelles",capital:"Victoria"},{name:"Sierra Leone",capital:"Freetown"},{name:"Singapore",capital:"Singapore"},{name:"Sint Maarten",capital:"Philipsburg"},{name:"Slovakia",capital:"Bratislava"},{name:"Slovenia",capital:"Ljubljana"},{name:"Solomon Islands",capital:"Honiara"},{name:"Somalia",capital:"Mogadishu"},{name:"South Africa",capital:"Pretoria"},{name:"South Korea",capital:"Seoul"},{name:"South Sudan",capital:"Juba"},{name:"Spain",capital:"Madrid"},{name:"Sri Lanka",capital:"Sri Jayawardenepura Kotte"},{name:"Sudan",capital:"Khartoum"},{name:"Suriname",capital:"Paramaribo"},{name:"Sweden",capital:"Stockholm"},{name:"Switzerland",capital:"Bern"},{name:"Syria",capital:"Damascus"},{name:"Taiwan",capital:"Taipei"},{name:"Tajikistan",capital:"Dushanbe"},{name:"Tanzania",capital:"Dodoma"},{name:"Thailand",capital:"Bangkok"},{name:"Togo",capital:"Lom\xE9"},{name:"Tonga",capital:"Nuku'alofa"},{name:"Trinidad and Tobago",capital:"Port of Spain"},{name:"Tunisia",capital:"Tunis"},{name:"Turkey",capital:"Ankara"},{name:"Turkmenistan",capital:"Ashgabat"},{name:"Tuvalu",capital:"Funafuti"},{name:"Uganda",capital:"Kampala"},{name:"Ukraine",capital:"Kyiv"},{name:"United Arab Emirates",capital:"Abu Dhabi"},{name:"United Kingdom",capital:"London"},{name:"United States",capital:"Washington, D.C."},{name:"Uruguay",capital:"Montevideo"},{name:"Uzbekistan",capital:"Tashkent"},{name:"Vanuatu",capital:"Port Vila"},{name:"Vatican City",capital:"Vatican City"},{name:"Venezuela",capital:"Caracas"},{name:"Vietnam",capital:"Hanoi"},{name:"Wales",capital:"Cardiff"},{name:"Yemen",capital:"Sana'a"},{name:"Zambia",capital:"Lusaka"},{name:"Zimbabwe",capital:"Harare"}];var lt=9,ae=(()=>{class t{constructor(){this.question={question:"",correctAnswer:"",options:[],result:void 0};}setupQuestion(){this.question.result=void 0;let e=Math.floor(Math.random()*j.length);this.question.question=j[e].name,this.question.correctAnswer=j[e].capital;let a=j.filter(n=>n.capital!==this.question.correctAnswer).map(n=>n.capital);return pt$1(a),a=a.slice(0,lt-1),a.unshift(j[e].capital),pt$1(a),this.question.options=a,this.question}checkResponse(e){return e===this.question.correctAnswer}static{this.\u0275fac=function(a){return new(a||t)};}static{this.\u0275prov=ee({token:t,factory:t.\u0275fac,providedIn:"root"});}}return t})();var dt=(t,s)=>[t,s];function ut(t,s){if(t&1){let e=$I();Jo(0,"button",5),Kf("click",function(){let n=Ol(e).$implicit,d=ZI(2);return Pl(d.onOptionSelected(n))}),CE(1),cc();}if(t&2){let e=s.$implicit,a=ZI(2);qf("ngClass",LE(2,dt,a.result!==void 0&&e===a.question.correctAnswer?"correct":"",a.result===false&&e===a.optionSelected?"incorrect":"")),My(),fp(e);}}function pt(t,s){if(t&1&&(Jo(0,"div",3)(1,"div",6),CE(2),cc()()),t&2){let e=ZI(2);My(2),fp(e.result?"Correct!":"Incorrect. The correct answer is "+e.question.correctAnswer);}}function gt(t,s){if(t&1){let e=$I();Jo(0,"div",0)(1,"h1",1),CE(2),cc(),LI(3,ut,2,5,"button",2,PI),Jo(5,"div",3)(6,"button",4),Kf("click",function(){Ol(e);let n=ZI();return Pl(n.onNextQuestion())}),CE(7,"Another question"),cc()(),RI(8,pt,3,1,"div",3),cc();}if(t&2){let e=ZI();My(2),dc("What is the capital of ",e.question.question,"?"),My(),FI(e.question.options),My(5),kI(e.result!==void 0?8:-1);}}var ne=(()=>{class t{constructor(e){this.quizService=e,this.question=this.quizService.setupQuestion();}ngOnInit(){}onNextQuestion(){this.result=void 0,this.optionSelected=void 0,this.question=this.quizService.setupQuestion();}onOptionSelected(e){this.optionSelected=e,this.result=this.quizService.checkResponse(e),setTimeout(()=>this.onNextQuestion(),2e3);}static{this.\u0275fac=function(a){return new(a||t)(ar(ae))};}static{this.\u0275cmp=lI({type:t,selectors:[["ken-capitals"]],decls:1,vars:1,consts:[[1,"container"],[1,"move-down","center"],["mat-raised-button","",1,"col-3","option",3,"ngClass"],[1,"move-down","row"],["mat-raised-button","",1,"col","align-self-center",3,"click"],["mat-raised-button","",1,"col-3","option",3,"click","ngClass"],[1,"success"]],template:function(a,n){a&1&&RI(0,gt,9,2,"div",0),a&2&&kI(n.question?0:-1);},dependencies:[jt$1,ts],styles:[".move-down[_ngcontent-%COMP%]{margin-top:100px}.option[_ngcontent-%COMP%]{margin:2px;width:32%}.correct[_ngcontent-%COMP%]{background-color:green;color:#fff}.incorrect[_ngcontent-%COMP%]{background-color:red;color:#fff}"],changeDetection:1});}}return t})();var ke=["able","acclimate","aerosol","Afrobeat","again","ailment","Albuquerque","altimeter","ambush","amphitheater","amphoras","amused","angry","animatronics","antechamber","antimony","antlers","antonyms","anybody","appreciation","April","aptitude","Arabic","arable","Arctic","aspirin","Assam","attorney","aura","avens","awfully","back","bamboozled","barely","bedroom","bestie","bike","bilge","bionic","blank","block","boba","bow","brain","branch","brave","bride","bright","broken","bronze","Brooklyn","buckeye","bunions","Bunsen burner","bureaucrats","bursting","captain","categorically","centrifuge","cereal","chasm","Chicana","chin","clearly","climb","cloth","cluttered","coat","coccidiosis","coleus","combat","commandments","communing","completely","composition","conciliatory","confident","congregation","conjunto","contagion","contemptible","cool","Copenhagen","corner","craquelure","create","credit","cress","crookedly","crown","dance","dapper","dazzle","deadpan","deal","dear","decibels","deficiencies","defoliant","delegation","deliberately","demure","dendrochronology","desecration","dessert","destitution","devotion","diamond","dilute","diode","disclaimer","disdain","disgruntled","divot","doctor","dots","doughnut","drawers","drawl","drew","droll","drooped","dynasty","edge","ellipsis","elongated","endless","engulf","enter","Erlenmeyer flask","evening","expressway","expulsion","extravagant","fallow","fascinated","fens","fiddlehead","finally","find","fireworks","first","flea","flitting","float","flowers","fluke","flummox","forearms","forsook","four","fowl","fragrant","frijoles","front","furniture","fury","gallon","gastritis","gather","gazed","gently","Gilgamesh","give","glasses","glittery","gloaming","glue","glumly","gorilla","graduate","grand","gratitude","grebe","grid","gross","ground","hair","hard","havens","haw","heap","his","hitherto","hobbit","horticulture","howdy","hug","hungrily","hypocaust","ignore","Illinois","important","improve","incandescent","incarnated","incense","incited","incubator","indignant","information","innards","inscription","inscrutable","insolent","insufferable","insulation","insult","Internet","interstellar","intertwine","intimidate","inventory","invisible","jeopardy","join","jugular","koi","kung fu","ladder","lanthanides","lasso","later","Laundromat","leks","letter","little","live","luciferin","lymphoma","Macao","Macedonia","magistrates","malicious","malignant","malnutrition","mangels","mantel","manual","marble","matterhorn","May","megaron","meitnerium","metronome","mile","minimus","mischievous","moira","more","mother","mound","Mumbai","music","nagged","name","near","nest","nighttime","nitrogen","nondescript","nopales","notebook","occupy","oddity","Okefenokee","Oman","oops","open","other","ourselves","outfits","overcome","palomino","pantry","paralysis","park","pat","patronize","peaceful","peel","peplos","perpendicularity","pervading","petticoat","pews","photosynthesis","pinyin","pipette","pixels","platypus","plaza","Pleiades","plunger","point","poisonous","pole","Popocatepetl","popovers","possible","pouch","pour","practice","precious","present","pride","privilege","pronaos","propitious","provision","pullets","punctually","putty","quarry","quip","quotation","Ramadan","razor","really","recede","recital","reference","refuge","reindeer","replace","replica","repose","responsible","retinitis pigmentosa","river","roads","roast","rooibos tea","rotten","roughly","rude","rug","sacred","salute","Samian","saucer","sauna","sausage","scan","scandium","scream","second","secreted","senescent","sentinel","serenity","sewing","Shaanxi","shall","shoal","shower","shutters","silence","silicon","simultaneously","sips","sketch","sky","slakes","smaller","snack","snail","snake","snap","snivel","societal","solve","spacious","spark","spawned","sphagnum","spoon","spring","sprocket","squash","squire","stagecoach","stall","state","steeds","steel","stew","stitchery","stood","store","stove","stroll","submerged","subway","sudsy","sultanate","Sumerian","superior","surfactant","syllables","Taoism","tape","termite","terrify","Tetrazzini","this","thorax","thoughts","thousand","thumbs","Thursday","thyroid","tide","together","toss","tostones","transform","Trinidadian","tripe","tubes","tug","tune","tunic","turban","turquoise","uncanny","valley","vase","Vaseline","Versailles","verve","vision","voracious","vultures","wafting","wag","wake","wears","wedding","wheezy","while","whisper","why","wisdom","wish","wok","worth","wow","yesterday","zip"];var Ce=["abodes","acrid","actually","adaptable","adds","adjusted","adorable","aggravate","Alberta","Alhambra","alternate","ambient","Andalusian","Andean","andromeda","Angola","another","antidote","apartment","apex","appendages","archers","architrave","Arcturus","area","arrested","arrive","arrows","assimilation","astride","athenaeum","awesome","aye-aye","Ayurvedic","Azores","baggy","balance","ballast","balm","bandage","bandmates","Bangalore","barked","batten","beetle","beginning","Beijing","belongs","benefited","benighted","beyond","bill","biryani","blame","blasphemous","blast","blessings","blotch","blue","bobbed","bones","bossiness","bottom","bovines","broached","brooding","bruise","build","busy","came","camel","Camelot","can","canid","caparisoned","carillon","casa","catastrophe","ceiling","chachalacas","chase","chatelaine","chemotherapy","chiasmus","Chicago","choose","chores","chunks","churned","cirque","cirrhosis","clash","clerisy","color","comic","commemoration","compute","configuration","confiscated","conifers","conjugate","constant","container","contours","coop","copy","cortege","cottonwood","counterfeit","crafty","crevices","cronies","crops","cry","cuirass","cul-de-sac","cups","curly","cute","dais","damaged","debit","decide","declaration","defunct","deign","deviation","devoured","disband","discarded","display","dissolute","distracted","doll","donkeys","doodled","doorjamb","doppelg\xE4nger","drag","dredged","during","ears","easily","ebb","economy","efficient","effigy","elves","embossed","embrace","emigrate","enamel","encompass","equipment","estampies","eurhythmics","evaded","everlasting","everyone","exciting","exhilaration","fado","faith","fasting","feedback","feel","feisty","few","files","five","floral","flybys","food","forget","former","forsooth","foster","frantic","freedom","fudge","fumatorium","funky","Gaels","garderobe","geopolitics","glide","gloomy","grass","gravy","greasy","greeting","grimy","growling","had","harsh","hauling","heavy","help","hematology","hey","hint","hitched","hobbledehoy","homeopathic","hot","humbug","hummingbird","hurdy-gurdy","impudence","inaudible","incontrovertible","infrared","inkling","inlet","innings","innocent","instead","interesting","intertribal","intubated","Jicarilla","jinx","joggled","kirpan","kneeling","kumkum","landline","Leander","leave","like","limbering","Lithuania","long","look","lousy","lurid","lustrum","make","maneuverable","Manhattan","maniacal","many","map","marguerite","marry","masa","mausoleum","meal","menacing","mercenary","minerals","minute","miscellaneous","misericordes","model","moo","moon","mullioned","murals","mutiny","nares","Navajo","need","nets","newt","nimble","nobody","nom de plume","none","nose","not","observations","off","offhandedly","oftentimes","Ohio","oncologist","only","orca","ordained","order","overseas","overtly","pace","page","pail","pandemic","pangs","pants","paradise","parathas","party","peacock","peevish","pell-mell","Penelope","people","philology","phone","pioneered","Piraeus","pistons","pitch-black","plan","pneumonia","pod","poke","pomade","poppet","porch","potential","potion","pottery","preternaturally","probably","prophetically","proscribed","provocation","purchase","put","puttering","python","quiet","railings","rare","reenactment","rejoinder","rental","republic","reservation","respond","retribution","rice","riffled","rituals","roots","roulette","ruckus","sackbuts","saints","saltarellos","Sanskrit","scared","scars","scrawled","section","sedan","seminary","serum","share","shawl","sheepish","sheesh","shelf","shrivel","sifting","sights","Sikhism","sink","sit","skidded","skipped","slather","slippery","slivers","slouch","smell","smirk","smite","smooshed","snooty","sockets","soldiers","sole","some","sorry","spading","Spandau","sparrow","speck","spellbound","spic-and-span","squinched","stairs","starboard","stinky","story","streak","stumped","stuttered","subservient","subsidence","sway","swept","switcheroo","swoop","table","tales","tallyho","Tamil","tankard","telenovelas","tell","temperature","ten","tenets","thurible","tiara","tilapia","tingle","tiny","tomorrow","top","torment","tote","tower","toys","traditional","trap","trash","trees","trey","trilby","trout","twelve","two","unacknowledged","undine","until","upbeat","uplift","urad","urchins","vertical","vestments","Vesuvian","visit","waist","washing","weave","what","white","whizzed","Wi-Fi","wiggle","wonder","wrestle","xylem","yurt","Zimbabwe"];var Ke=(()=>{class t{constructor(e){this.httpClient=e,this.wordList23=[...Ce],this.wordList24=[...ke],this.combinedList=Ce.concat(ke),this.currentWordIndex=-1,this.currentList="All",this.wordList23=this.shuffle(this.wordList23),this.wordList24=this.shuffle(this.wordList24),this.combinedList=this.shuffle(this.combinedList);}getRandomWord(){switch(this.currentList){case "23":return this.wordList23[Math.floor(Math.random()*this.wordList23.length)];case "24":return this.wordList24[Math.floor(Math.random()*this.wordList24.length)];case "All":return this.combinedList[Math.floor(Math.random()*this.combinedList.length)]}}getNextWord(){switch(this.currentList){case "23":return this.currentWordIndex=(this.currentWordIndex+1)%this.wordList23.length,this.wordList23[this.currentWordIndex];case "24":return this.currentWordIndex=(this.currentWordIndex+1)%this.wordList24.length,this.wordList24[this.currentWordIndex];case "All":return this.currentWordIndex=(this.currentWordIndex+1)%this.combinedList.length,this.combinedList[this.currentWordIndex]}}shuffle(e){let a=e.length,n;for(;a!==0;)n=Math.floor(Math.random()*a),a--,[e[a],e[n]]=[e[n],e[a]];return e}getDictionaryEntry(e){return this.httpClient.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${e}`).pipe(Mh())}extractDefinitions(e){return e[0].meanings[0].definitions.map(a=>a.definition)}static{this.\u0275fac=function(a){return new(a||t)(X(yr))};}static{this.\u0275prov=ee({token:t,factory:t.\u0275fac,providedIn:"root"});}}return t})();var ht=["*"];var yt=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],ft=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],vt=new N("MAT_CARD_CONFIG"),Qe=(()=>{class t{appearance;constructor(){let e=w(vt,{optional:true});this.appearance=e?.appearance||"raised";}static \u0275fac=function(a){return new(a||t)};static \u0275cmp=lI({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(a,n){a&2&&ip("mat-mdc-card-outlined",n.appearance==="outlined")("mdc-card--outlined",n.appearance==="outlined")("mat-mdc-card-filled",n.appearance==="filled")("mdc-card--filled",n.appearance==="filled");},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:ht,decls:1,vars:0,template:function(a,n){a&1&&(KI(),JI(0));},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2})}return t})();var We=(()=>{class t{align="start";static \u0275fac=function(a){return new(a||t)};static \u0275dir=pI({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(a,n){a&2&&ip("mat-mdc-card-actions-align-end",n.align==="end");},inputs:{align:"align"},exportAs:["matCardActions"]})}return t})(),He=(()=>{class t{static \u0275fac=function(a){return new(a||t)};static \u0275cmp=lI({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:ft,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(a,n){a&1&&(KI(yt),JI(0),lc(1,"div",0),JI(2,1),uc(),JI(3,2));},encapsulation:2})}return t})();var Ue=(()=>{class t{static \u0275fac=function(a){return new(a||t)};static \u0275dir=pI({type:t,selectors:[["","mat-card-avatar",""],["","matCardAvatar",""]],hostAttrs:[1,"mat-mdc-card-avatar"]})}return t})();function bt(t,s){if(t&1&&(Jo(0,"div",4)(1,"div",6)(2,"h1",7),CE(3),cc()()()),t&2){let e=ZI();My(3),dc("Score: ",e.score(),"%");}}function kt(t,s){t&1&&(Jo(0,"div",5),CE(1,"Correct!"),cc());}function Ct(t,s){if(t&1&&(Jo(0,"div",8),CE(1,"The correct answer is"),cc(),Jo(2,"div",9),CE(3),cc()),t&2){let e=ZI();My(3),fp(e.word);}}var ie=(()=>{class t{constructor(e){this.api=e,this.voices=[],this.rightAnswerCount=0,this.totalAnswerCount=0,this.voices$=xi(speechSynthesis,"voiceschanged").pipe(ze(()=>speechSynthesis.getVoices().filter(a=>a.name.includes("Google"))),sl(a=>this.voices=a));}ngOnInit(){this.voices$.subscribe({next:()=>{console.log("voices",this.voices.map(e=>e.name)),this.onClickNext();}});}onClickNext(){this.response="",this.isCorrect=void 0,this.word=this.api.getNextWord(),this.speak();}speak(){let e=new SpeechSynthesisUtterance(this.word);e.rate=.8;let a;switch(this.word){case "biryani":a='"Google \u0939\u093F\u0928\u094D\u0926\u0940"';break;case "Jicarilla":case "frijoles":case "telenovelas":case "tostones":a="Google espa\xF1ol";break;default:a="Google US English";break}let n=this.voices.find(d=>d.name===a);n&&(e.voice=n),speechSynthesis.speak(e);}checkResponse(e){e.key==="Enter"&&(this.totalAnswerCount++,this.response?.toLowerCase()===this.word?.toLowerCase()?(this.isCorrect=true,this.rightAnswerCount++,setTimeout(()=>this.onClickNext(),1500)):(this.isCorrect=false,setTimeout(()=>this.onClickNext(),3e3)));}score(){return this.totalAnswerCount===0?0:Math.round(this.rightAnswerCount/this.totalAnswerCount*100)}static{this.\u0275fac=function(a){return new(a||t)(ar(Ke))};}static{this.\u0275cmp=lI({type:t,selectors:[["ken-spelling-bee"]],decls:12,vars:3,consts:[[1,"example-card"],["mat-card-avatar","",1,"example-header-image"],["id","textInput","type","text","autofocus","","mat-input","",3,"ngModelChange","keypress","ngModel"],["mat-button","",3,"click"],[1,"row"],["id","info",1,"correct"],[1,"col-12"],[1,"center"],["id","info",1,"incorrect"],["id","correction",1,"incorrect"]],template:function(a,n){a&1&&(Jo(0,"mat-card",0)(1,"mat-card-header"),Gf(2,"div",1),Jo(3,"input",2),mp("ngModelChange",function(u){return NE(n.response,u)||(n.response=u),u}),Kf("keypress",function(u){return n.checkResponse(u)}),cc(),mv(),cc(),Jo(4,"mat-card-actions")(5,"button",3),Kf("click",function(){return n.speak()}),CE(6,"SAY AGAIN"),cc()()(),Gf(7,"br")(8,"br"),RI(9,bt,4,1,"div",4),RI(10,kt,2,0,"div",5)(11,Ct,4,1)),a&2&&(My(3),gp("ngModel",n.response),vv(),My(6),kI(n.totalAnswerCount>0?9:-1),My(),kI(n.isCorrect===true?10:n.isCorrect===false?11:-1));},dependencies:[Qe,He,Ue,Yt,be,Zt,bt$1,We,jt$1],styles:["h1[_ngcontent-%COMP%]{font-size:5em;padding-top:65px;padding-left:10px}.example-card[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;transition:.3s;max-width:400px}#textInput[_ngcontent-%COMP%]{width:100%;font-size:1.5em}.correct[_ngcontent-%COMP%]{display:flex;justify-content:center;color:green;padding-top:10px;font-size:40px}.incorrect[_ngcontent-%COMP%]{display:flex;justify-content:center;color:red}#correction[_ngcontent-%COMP%]{display:flex;justify-content:center;padding-top:10px;font-size:40px}"],changeDetection:1});}}return t})();var q={AD:"Andorra",AE:"United Arab Emirates",AF:"Afghanistan",AG:"Antigua and Barbuda",AI:"Anguilla",AL:"Albania",AM:"Armenia",AO:"Angola",AQ:"Antarctica",AR:"Argentina",AS:"American Samoa",AT:"Austria",AU:"Australia",AW:"Aruba",AX:"\xC5land Islands",AZ:"Azerbaijan",BA:"Bosnia and Herzegovina",BB:"Barbados",BD:"Bangladesh",BE:"Belgium",BF:"Burkina Faso",BG:"Bulgaria",BH:"Bahrain",BI:"Burundi",BJ:"Benin",BM:"Bermuda",BN:"Brunei Darussalam",BO:"Bolivia",BR:"Brazil",BS:"Bahamas",BT:"Bhutan",BW:"Botswana",BY:"Belarus",BZ:"Belize",CA:"Canada",CC:"Cocos Islands",CD:"Congo-Kinshasa",CF:"Central African Republic",CG:"Congo Republic",CH:"Switzerland",CI:"C\xF4te d'Ivoire",CK:"Cook Islands",CL:"Chile",CM:"Cameroon",CN:"China",CO:"Colombia",CR:"Costa Rica",CU:"Cuba",CV:"Cape Verde",CW:"Cura\xE7ao",CX:"Christmas Island",CY:"Cyprus",CZ:"Czech Republic",DE:"Germany",DJ:"Djibouti",DK:"Denmark",DM:"Dominica",DO:"Dominican Republic",DZ:"Algeria",EC:"Ecuador",EE:"Estonia",EG:"Egypt",EH:"Western Sahara",ER:"Eritrea",ES:"Spain",ET:"Ethiopia",EU:"Europe",FI:"Finland",FJ:"Fiji",FK:"Falkland Islands",FM:"Micronesia",FO:"Faroe Islands",FR:"France",GA:"Gabon","GB-ENG":"England","GB-SCT":"Scotland","GB-WLS":"Wales",GB:"United Kingdom",GD:"Grenada",GE:"Georgia",GG:"Guernsey",GH:"Ghana",GI:"Gibraltar",GL:"Greenland",GM:"Gambia",GN:"Guinea",GQ:"Equatorial Guinea",GR:"Greece",GS:"South Georgia",GT:"Guatemala",GU:"Guam",GW:"Guinea-Bissau",GY:"Guyana",HK:"Hong Kong",HN:"Honduras",HR:"Croatia",HT:"Haiti",HU:"Hungary",ID:"Indonesia",IE:"Ireland",IL:"Israel",IM:"Isle of Man",IN:"India",IO:"British Indian Ocean Territory",IQ:"Iraq",IR:"Iran",IS:"Iceland",IT:"Italy",JE:"Jersey",JM:"Jamaica",JO:"Jordan",JP:"Japan",KE:"Kenya",KG:"Kyrgyzstan",KH:"Cambodia",KI:"Kiribati",KM:"Comoros",KN:"St Kitts and Nevis",KP:"North Korea",KR:"South Korea",KW:"Kuwait",KY:"Cayman Islands",KZ:"Kazakhstan",LA:"Laos",LB:"Lebanon",LC:"St Lucia",LI:"Liechtenstein",LK:"Sri Lanka",LR:"Liberia",LS:"Lesotho",LT:"Lithuania",LU:"Luxembourg",LV:"Latvia",LY:"Libya",MA:"Morocco",MC:"Monaco",MD:"Moldova",ME:"Montenegro",MG:"Madagascar",MH:"Marshall Islands",MK:"North Macedonia",ML:"Mali",MM:"Myanmar",MN:"Mongolia",MO:"Macao",MP:"Northern Mariana Islands",MR:"Mauritania",MS:"Montserrat",MT:"Malta",MU:"Mauritius",MV:"Maldives",MW:"Malawi",MX:"Mexico",MY:"Malaysia",MZ:"Mozambique",NA:"Namibia",NE:"Niger",NF:"Norfolk Island",NG:"Nigeria",NI:"Nicaragua",NL:"Netherlands",NO:"Norway",NP:"Nepal",NR:"Nauru",NU:"Niue",NZ:"New Zealand",OM:"Oman",PA:"Panama",PE:"Peru",PF:"French Polynesia",PG:"Papua New Guinea",PH:"Philippines",PK:"Pakistan",PL:"Poland",PN:"Pitcairn",PR:"Puerto Rico",PS:"Palestine",PT:"Portugal",PW:"Palau",PY:"Paraguay",QA:"Qatar",RO:"Romania",RS:"Serbia",RU:"Russia",RW:"Rwanda",SA:"Saudi Arabia",SB:"Solomon Islands",SC:"Seychelles",SD:"Sudan",SE:"Sweden",SG:"Singapore",SI:"Slovenia",SK:"Slovakia",SL:"Sierra Leone",SM:"San Marino",SN:"Senegal",SO:"Somalia",SR:"Suriname",SS:"South Sudan",ST:"Sao Tome and Principe",SV:"El Salvador",SX:"Sint Maarten",SY:"Syria",SZ:"Swaziland",TC:"Turks and Caicos Islands",TD:"Chad",TF:"French Southern Territories",TG:"Togo",TH:"Thailand",TJ:"Tajikistan",TK:"Tokelau",TL:"Timor-Leste",TM:"Turkmenistan",TN:"Tunisia",TO:"Tonga",TR:"Turkey",TT:"Trinidad and Tobago",TV:"Tuvalu",TW:"Taiwan",TZ:"Tanzania",UA:"Ukraine",UG:"Uganda",US:"United States",UY:"Uruguay",UZ:"Uzbekistan",VA:"Vatican City",VC:"St Vincent and the Grenadines",VE:"Venezuela",VG:"British Virgin Islands",VI:"U.S. Virgin Islands",VN:"Vietnam",VU:"Vanuatu",WF:"Wallis and Futuna Islands",WS:"Samoa",XK:"Kosovo",YE:"Yemen",ZA:"South Africa",ZM:"Zambia",ZW:"Zimbabwe"};var Xe=9,re=(()=>{class t{constructor(){this.question={question:"",correctAnswer:"",options:[],result:void 0};}setupQuestion(e){if(e){let a=Object.keys(q),n=jt$2(a,Xe),d=q[n[0]],u=qt$1(a,R=>q[R]===d)??"";this.question={question:d,correctAnswer:u.toLowerCase(),options:pt$1(n).map(R=>R.toLowerCase()),result:void 0};}else {let a=Object.keys(q),n=jt$2(q,Xe),d=n[0],u=qt$1(a,R=>q[R]===d)??"";this.question={question:u.toLowerCase(),correctAnswer:d,options:pt$1(n),result:void 0};}return this.question}checkResponse(e){return e===this.question.correctAnswer}static{this.\u0275fac=function(a){return new(a||t)};}static{this.\u0275prov=ee({token:t,factory:t.\u0275fac,providedIn:"root"});}}return t})();var Ze=(t,s)=>[t,s];function wt(t,s){if(t&1){let e=$I();Jo(0,"button",4),Kf("click",function(){let n=Ol(e).$implicit,d=ZI(2);return Pl(d.onOptionSelected(n))}),CE(1),cc();}if(t&2){let e=s.$implicit,a=ZI(2);qf("ngClass",LE(2,Ze,a.result!==void 0&&e===a.question.correctAnswer?"correct":"",a.result===false&&e===a.optionSelected?"incorrect":"")),My(),fp(e);}}function xt(t,s){if(t&1){let e=$I();Jo(0,"div",3)(1,"button",5),Kf("click",function(){Ol(e);let n=ZI(2);return Pl(n.onNextQuestion())}),CE(2,"Another question"),cc()();}}function St(t,s){if(t&1&&(Jo(0,"div",3)(1,"div",6),CE(2),cc()()),t&2){let e=ZI(2);My(2),fp(e.result?"Correct!":"Incorrect. The correct answer is "+e.question.correctAnswer);}}function Mt(t,s){if(t&1&&(Jo(0,"div",0),Gf(1,"img",1),LI(2,wt,2,5,"button",2,PI),RI(4,xt,3,0,"div",3),RI(5,St,3,1,"div",3),cc()),t&2){let e=ZI();My(),qf("src",xE("/assets/svg/",e.question.question,".svg"),Md),My(),FI(e.question.options),My(2),kI(e.result===void 0?4:-1),My(),kI(e.result!==void 0?5:-1);}}function At(t,s){if(t&1){let e=$I();Jo(0,"button",9),Kf("click",function(){let n=Ol(e).$implicit,d=ZI(2);return Pl(d.onOptionSelected(n))}),Gf(1,"img",10),jE(2,"lowercase"),cc();}if(t&2){let e=s.$implicit,a=ZI(2);qf("ngClass",LE(5,Ze,a.result!==void 0&&e===a.question.correctAnswer?"correct":"",a.result===false&&e===a.optionSelected?"incorrect":"")),My(),qf("src",xE("/assets/svg/",HE(2,3,e),".svg"),Md);}}function It(t,s){if(t&1&&(Jo(0,"div",3)(1,"div",6),CE(2),cc()()),t&2){let e=ZI(2);My(2),fp(e.result?"Correct!":"Incorrect. The correct answer is "+e.question.correctAnswer);}}function Tt(t,s){if(t&1&&(Jo(0,"div",3)(1,"div",6),CE(2),cc()()),t&2){let e=ZI(2);My(2),fp(e.result?"Correct!":"Incorrect.");}}function Bt(t,s){if(t&1&&(Jo(0,"div",0)(1,"h1",7),CE(2),cc(),LI(3,At,3,8,"button",8,PI),RI(5,It,3,1,"div",3),RI(6,Tt,3,1,"div",3),cc()),t&2){let e=ZI();My(2),dc("Which is the flag of ",e.question.question,"?"),My(),FI(e.question.options),My(2),kI(e.result!==void 0&&!e.isInverseQuestion?5:-1),My(),kI(e.result!==void 0&&e.isInverseQuestion?6:-1);}}var oe=(()=>{class t{constructor(e){this.flagService=e,this.isInverseQuestion=true,this.question=this.flagService.setupQuestion(this.isInverseQuestion);}ngOnInit(){}onNextQuestion(){this.result=void 0,this.optionSelected=void 0,this.question=this.flagService.setupQuestion(this.isInverseQuestion);}onOptionSelected(e){this.optionSelected=e,this.result=this.flagService.checkResponse(e),setTimeout(()=>this.onNextQuestion(),2e3);}static{this.\u0275fac=function(a){return new(a||t)(ar(re))};}static{this.\u0275cmp=lI({type:t,selectors:[["ken-flags"]],decls:2,vars:2,consts:[[1,"container","justify-content-center"],[3,"src"],["mat-raised-button","",1,"col-3","option","justify-content-center",3,"ngClass"],[1,"move-down","row"],["mat-raised-button","",1,"col-3","option","justify-content-center",3,"click","ngClass"],["mat-raised-button","",1,"col","align-self-center",3,"click"],[1,"success"],[1,"move-down","center"],["mat-raised-button","",1,"col-3","inverse","justify-content-center",3,"ngClass"],["mat-raised-button","",1,"col-3","inverse","justify-content-center",3,"click","ngClass"],[1,"grid",3,"src"]],template:function(a,n){a&1&&(RI(0,Mt,6,4,"div",0),RI(1,Bt,7,3,"div",0)),a&2&&(kI(n.question&&!n.isInverseQuestion?0:-1),My(),kI(n.question&&n.isInverseQuestion?1:-1));},dependencies:[jt$1,ts,ns],styles:[".move-down[_ngcontent-%COMP%]{margin-top:25px}.option[_ngcontent-%COMP%]{margin:2px;height:100px;width:32%}.inverse[_ngcontent-%COMP%]{margin:2px;height:200px;width:32%}.correct[_ngcontent-%COMP%]{background-color:green;color:#fff}.incorrect[_ngcontent-%COMP%]{background-color:red;color:#fff}img[_ngcontent-%COMP%]{border:2px solid #000;width:100%}img[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]{max-height:190px}"],changeDetection:1});}}return t})();var Je=[{key:"\u3042",value:"a"},{key:"\u3044",value:"i"},{key:"\u3046",value:"u"},{key:"\u3048",value:"e"},{key:"\u304A",value:"o"},{key:"\u304B",value:"ka"},{key:"\u304D",value:"ki"},{key:"\u304F",value:"ku"},{key:"\u3051",value:"ke"},{key:"\u3053",value:"ko"},{key:"\u3055",value:"sa"},{key:"\u3057",value:"shi"},{key:"\u3059",value:"su"},{key:"\u305B",value:"se"},{key:"\u305D",value:"so"},{key:"\u305F",value:"ta"},{key:"\u3061",value:"chi"},{key:"\u3064",value:"tsu"},{key:"\u3066",value:"te"},{key:"\u3068",value:"to"},{key:"\u306A",value:"na"},{key:"\u306B",value:"ni"},{key:"\u306C",value:"nu"},{key:"\u306D",value:"ne"},{key:"\u306E",value:"no"},{key:"\u306F",value:"ha"},{key:"\u3072",value:"hi"},{key:"\u3075",value:"fu"},{key:"\u3078",value:"he"},{key:"\u307B",value:"ho"},{key:"\u307E",value:"ma"},{key:"\u307F",value:"mi"},{key:"\u3080",value:"mu"},{key:"\u3081",value:"me"},{key:"\u3082",value:"mo"},{key:"\u3084",value:"ya"},{key:"\u3086",value:"yu"},{key:"\u3088",value:"yo"},{key:"\u3089",value:"ra"},{key:"\u308A",value:"ri"},{key:"\u308B",value:"ru"},{key:"\u308C",value:"re"},{key:"\u308D",value:"ro"},{key:"\u308F",value:"wa"},{key:"\u3092",value:"wo"},{key:"\u3093",value:"n"}];function Dt(t,s){t&1&&zf(0,"div",2);}var Nt=new N("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var $e=(()=>{class t{_elementRef=w(nr);_ngZone=w(ae$1);_changeDetectorRef=w(VP);_renderer=w(dv);_cleanupTransitionEnd;constructor(){let e=Ws(),a=w(Nt,{optional:true});this._isNoopAnimation=e==="di-disabled",e==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),a&&(a.color&&(this.color=this._defaultColor=a.color),this.mode=a.mode||this.mode);}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e;}_color;_defaultColor="primary";get value(){return this._value}set value(e){this._value=Ye(e||0),this._changeDetectorRef.markForCheck();}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=Ye(e||0),this._changeDetectorRef.markForCheck();}_bufferValue=0;animationEnd=new Pe;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck();}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler);});}ngOnDestroy(){this._cleanupTransitionEnd?.();}_getPrimaryBarTransform(){return `scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return `${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}));};static \u0275fac=function(a){return new(a||t)};static \u0275cmp=lI({type:t,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(a,n){a&2&&(Wf("aria-valuenow",n._isIndeterminate()?null:n.value)("mode",n.mode),pE("mat-"+n.color),ip("_mat-animation-noopable",n._isNoopAnimation)("mdc-linear-progress--animation-ready",!n._isNoopAnimation)("mdc-linear-progress--indeterminate",n._isIndeterminate()));},inputs:{color:"color",value:[2,"value","value",$P],bufferValue:[2,"bufferValue","bufferValue",$P],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(a,n){a&1&&(lc(0,"div",0),zf(1,"div",1),RI(2,Dt,1,0,"div",2),uc(),lc(3,"div",3),zf(4,"span",4),uc(),lc(5,"div",5),zf(6,"span",4),uc()),a&2&&(My(),op("flex-basis",n._getBufferBarFlexBasis()),My(),kI(n.mode==="buffer"?2:-1),My(),op("transform",n._getPrimaryBarTransform()));},styles:[`.mat-mdc-progress-bar {
  --mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--mat-progress-bar-track-height, 4px);
  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2})}return t})();function Ye(t,s=0,e=100){return Math.max(s,Math.min(e,t))}var Et=9,et=(()=>{class t{constructor(){this.question={question:"",correctAnswer:"",options:[],result:void 0},this.correctAnswerCount=0,this.questionCount=0,this.totalQuestionCount=0,this.questionNumber=0,this.letters=[];}setupQuestion(){this.question.result=void 0,this.question.question=this.letters[this.questionNumber].key,this.question.correctAnswer=this.letters[this.questionNumber].value;let e=this.letters.filter(a=>a.value!==this.question.correctAnswer).map(a=>a.value);return pt$1(e),e=e.slice(0,Et-1),e.unshift(this.letters[this.questionNumber].value),pt$1(e),this.question.options=e,this.question}checkResponse(e){return this.questionCount++,e===this.question.correctAnswer?(this.letters.splice(this.questionNumber,1),this.correctAnswerCount++):this.questionNumber++,this.questionNumber>=this.letters.length&&(this.questionNumber=0,pt$1(this.letters)),e===this.question.correctAnswer}setup(e){console.log("setup",e),this.letters=e,this.totalQuestionCount=this.letters.length,pt$1(this.letters),this.correctAnswerCount=0,this.questionCount=0,this.questionNumber=0;}getScore(){return this.questionCount===0?0:Math.round(this.correctAnswerCount/this.questionCount*100)}getProgress(){return Math.trunc(this.correctAnswerCount/this.totalQuestionCount*100)}getTotalQuestionCount(){return this.totalQuestionCount}getQuestionCount(){return this.questionCount}getCorrectAnswerCount(){return this.correctAnswerCount}getQuestionNumber(){return this.questionNumber}static{this.\u0275fac=function(a){return new(a||t)};}static{this.\u0275prov=ee({token:t,factory:t.\u0275fac,providedIn:"root"});}}return t})();var qt=(t,s)=>[t,s],zt=(t,s)=>({right:t,wrong:s});function Lt(t,s){if(t&1){let e=$I();Jo(0,"button",6),Kf("click",function(){let n=Ol(e).$implicit,d=ZI(2);return Pl(d.onOptionSelected(n))}),CE(1),cc();}if(t&2){let e=s.$implicit,a=ZI(2);qf("ngClass",LE(2,qt,a.result!==void 0&&e===a.question.correctAnswer?"correct":"",a.result===false&&e===a.optionSelected?"incorrect":"")),My(),fp(e);}}function Ft(t,s){if(t&1&&(Jo(0,"div",4)(1,"div",7)(2,"h1",8),CE(3),cc()()()),t&2){let e=ZI(2);My(3),dc("Score: ",e.score(),"%");}}function Ot(t,s){if(t&1&&(Jo(0,"div",5)(1,"div",9),CE(2),cc()()),t&2){let e=ZI(2);My(),qf("ngClass",LE(2,zt,e.result,!e.result)),My(),fp(e.result?"Correct!":"Incorrect.");}}function jt(t,s){if(t&1&&(Jo(0,"div",0),Gf(1,"mat-progress-bar",1),Jo(2,"h1",2),CE(3),cc(),Gf(4,"br")(5,"br")(6,"br"),LI(7,Lt,2,5,"button",3,PI),Gf(9,"br")(10,"br"),RI(11,Ft,4,1,"div",4),RI(12,Ot,3,5,"div",5),cc()),t&2){let e=ZI();My(),qf("value",e.progress()),My(2),fp(e.question.question),My(4),FI(e.question.options),My(4),kI(e.questionCount()>0?11:-1),My(),kI(e.result!==void 0?12:-1);}}var x=(()=>{class t{constructor(e){this.quizService=e,this.characterSet=[];}ngOnChanges(e){console.log("onChanges",e),this.quizService.setup(e.characterSet.currentValue),this.question=this.quizService.setupQuestion();}ngOnInit(){console.log("onInit",this.characterSet),this.quizService.setup(this.characterSet),this.question=this.quizService.setupQuestion();}onNextQuestion(){this.result=void 0,this.optionSelected=void 0,this.question=this.quizService.setupQuestion();}onOptionSelected(e){console.log("option selected",e),this.optionSelected=e,this.result=this.quizService.checkResponse(e),setTimeout(()=>this.onNextQuestion(),2e3);}progress(){return this.quizService.getProgress()}totalQuestionCount(){return this.quizService.getTotalQuestionCount()}correctAnswerCount(){return this.quizService.getCorrectAnswerCount()}questionNumber(){return this.quizService.getQuestionNumber()}score(){return this.quizService.getScore()}questionCount(){return this.quizService.getQuestionCount()}static{this.\u0275fac=function(a){return new(a||t)(ar(et))};}static{this.\u0275cmp=lI({type:t,selectors:[["ken-script"]],inputs:{characterSet:"characterSet"},features:[xg],decls:1,vars:1,consts:[[1,"container"],["mode","determinate",3,"value"],[1,"move-down","center","question"],["mat-raised-button","",1,"col-4","option",3,"ngClass"],[1,"row"],[1,"move-down","center","row"],["mat-raised-button","",1,"col-4","option",3,"click","ngClass"],[1,"col-12"],[1,"center"],[3,"ngClass"]],template:function(a,n){a&1&&RI(0,jt,13,4,"div",0),a&2&&kI(n.question?0:-1);},dependencies:[$e,jt$1,ts],styles:[".move-down[_ngcontent-%COMP%]{margin-top:80px}.question[_ngcontent-%COMP%]{font-size:120px}.option[_ngcontent-%COMP%]{font-size:30px;margin:2px;width:32%;height:80px}.correct[_ngcontent-%COMP%]{background-color:green;color:#fff}.incorrect[_ngcontent-%COMP%]{background-color:red;color:#fff}.wrong[_ngcontent-%COMP%]{color:red;font-size:20px}.right[_ngcontent-%COMP%]{color:green;font-size:20px}"],changeDetection:1});}}return t})();var se=(()=>{class t{constructor(){this.letters=Je;}static{this.\u0275fac=function(a){return new(a||t)};}static{this.\u0275cmp=lI({type:t,selectors:[["ken-hiragana"]],decls:1,vars:1,consts:[[3,"characterSet"]],template:function(a,n){a&1&&Gf(0,"ken-script",0),a&2&&qf("characterSet",n.letters);},dependencies:[x],encapsulation:2,changeDetection:1});}}return t})();var tt=[{key:"\u0905",value:"a"},{key:"\u0906",value:"\u0101"},{key:"\u0907",value:"i"},{key:"\u0908",value:"\u012B"},{key:"\u0909",value:"u"},{key:"\u090A",value:"\u016B"},{key:"\u090B",value:"ri"},{key:"\u090F",value:"e"},{key:"\u0910",value:"ai"},{key:"\u0913",value:"o"},{key:"\u0914",value:"au"},{key:"\u0905\u0902",value:"am"},{key:"\u0905\u0903",value:"ah"},{key:"\u0915",value:"ka"},{key:"\u0916",value:"kha"},{key:"\u0917",value:"ga"},{key:"\u0918",value:"gha"},{key:"\u0919",value:"\u1E45a"},{key:"\u091A",value:"ca"},{key:"\u091B",value:"cha"},{key:"\u091C",value:"ja"},{key:"\u091D",value:"jha"},{key:"\u091E",value:"\xF1a"},{key:"\u091F",value:"\u1E6Da"},{key:"\u0920",value:"\u1E6Dha"},{key:"\u0921",value:"\u1E0Da"},{key:"\u0922",value:"\u1E0Dha"},{key:"\u0923",value:"\u1E47a"},{key:"\u0924",value:"ta"},{key:"\u0925",value:"tha"},{key:"\u0926",value:"da"},{key:"\u0927",value:"dha"},{key:"\u0928",value:"na"},{key:"\u092A",value:"pa"},{key:"\u092B",value:"pha"},{key:"\u092C",value:"ba"},{key:"\u092D",value:"bha"},{key:"\u092E",value:"ma"},{key:"\u092F",value:"ya"},{key:"\u0930",value:"ra"},{key:"\u0932",value:"la"},{key:"\u0933",value:"\u1E37a"},{key:"\u0935",value:"va"},{key:"\u0936",value:"\u015Ba"},{key:"\u0937",value:"\u1E63a"},{key:"\u0938",value:"sa"},{key:"\u0939",value:"ha"}];var ce=(()=>{class t{constructor(){this.letters=tt;}static{this.\u0275fac=function(a){return new(a||t)};}static{this.\u0275cmp=lI({type:t,selectors:[["ken-devanagari"]],decls:1,vars:1,consts:[[3,"characterSet"]],template:function(a,n){a&1&&Gf(0,"ken-script",0),a&2&&qf("characterSet",n.letters);},dependencies:[x],encapsulation:2,changeDetection:1});}}return t})();var at=[{key:"\u30A2",value:"a"},{key:"\u30A4",value:"i"},{key:"\u30A6",value:"u"},{key:"\u30A8",value:"e"},{key:"\u30AA",value:"o"},{key:"\u30AB",value:"ka"},{key:"\u30AD",value:"ki"},{key:"\u30AF",value:"ku"},{key:"\u30B1",value:"ke"},{key:"\u30B3",value:"ko"},{key:"\u30B5",value:"sa"},{key:"\u30B7",value:"shi"},{key:"\u30B9",value:"su"},{key:"\u30BB",value:"se"},{key:"\u30BD",value:"so"},{key:"\u30BF",value:"ta"},{key:"\u30C1",value:"chi"},{key:"\u30C4",value:"tsu"},{key:"\u30C6",value:"te"},{key:"\u30C8",value:"to"},{key:"\u30CA",value:"na"},{key:"\u30CB",value:"ni"},{key:"\u30CC",value:"nu"},{key:"\u30CD",value:"ne"},{key:"\u30CE",value:"no"},{key:"\u30CF",value:"ha"},{key:"\u30D2",value:"hi"},{key:"\u30D5",value:"fu"},{key:"\u30D8",value:"he"},{key:"\u30DB",value:"ho"},{key:"\u30DE",value:"ma"},{key:"\u30DF",value:"mi"},{key:"\u30E0",value:"mu"},{key:"\u30E1",value:"me"},{key:"\u30E2",value:"mo"},{key:"\u30E4",value:"ya"},{key:"\u30E6",value:"yu"},{key:"\u30E8",value:"yo"},{key:"\u30E9",value:"ra"},{key:"\u30EA",value:"ri"},{key:"\u30EB",value:"ru"},{key:"\u30EC",value:"re"},{key:"\u30ED",value:"ro"},{key:"\u30EF",value:"wa"},{key:"\u30F2",value:"wo"},{key:"\u30F3",value:"n"}];var le=(()=>{class t{constructor(){this.letters=at;}static{this.\u0275fac=function(a){return new(a||t)};}static{this.\u0275cmp=lI({type:t,selectors:[["ken-katakana"]],decls:1,vars:1,consts:[[3,"characterSet"]],template:function(a,n){a&1&&Gf(0,"ken-script",0),a&2&&qf("characterSet",n.letters);},dependencies:[x],encapsulation:2,changeDetection:1});}}return t})();var nt=[{key:"\u4E00",value:"one",kunyomi:"\u3072\u3068-\u3064",onyomi:"\u30A4\u30C1"},{key:"\u4E8C",value:"two",kunyomi:"\u3075\u305F-\u3064",onyomi:"\u30CB"},{key:"\u4E09",value:"three",kunyomi:"\u307F\u3063-\u3064",onyomi:"\u30B5\u30F3"},{key:"\u56DB",value:"four",kunyomi:"\u3088\u3063-\u3064",onyomi:"\u30B7"},{key:"\u4E94",value:"five",kunyomi:"\u3044\u3064-\u3064",onyomi:"\u30B4"},{key:"\u516D",value:"six",kunyomi:"\u3080\u3063-\u3064",onyomi:"\u30ED\u30AF"},{key:"\u4E03",value:"seven",kunyomi:"\u306A\u306A-\u3064",onyomi:"\u30B7\u30C1"},{key:"\u516B",value:"eight",kunyomi:"\u3084\u3063-\u3064",onyomi:"\u30CF\u30C1"},{key:"\u4E5D",value:"nine",kunyomi:"\u3053\u3053\u306E-\u3064",onyomi:"\u30AD\u30E5\u30A6"},{key:"\u5341",value:"ten",kunyomi:"\u3068\u304A",onyomi:"\u30B8\u30E5\u30A6"},{key:"\u767E",value:"hundred",kunyomi:"\u3082\u3082",onyomi:"\u30D2\u30E3\u30AF"},{key:"\u5343",value:"thousand",kunyomi:"\u3061",onyomi:"\u30BB\u30F3"},{key:"\u4E0A",value:"top, above",kunyomi:"\u3046\u3048",onyomi:"\u30B8\u30E7\u30A6"},{key:"\u4E0B",value:"bottom, below",kunyomi:"\u3057\u305F",onyomi:"\u30AB, \u30B2"},{key:"\u5DE6",value:"left",kunyomi:"\u3072\u3060\u308A",onyomi:"\u30B5"},{key:"\u53F3",value:"right",kunyomi:"\u307F\u304E",onyomi:"\u30A6, \u30E6\u30A6"},{key:"\u4E2D",value:"inside, middle",kunyomi:"\u306A\u304B",onyomi:"\u30C1\u30E5\u30A6"},{key:"\u5927",value:"large",kunyomi:"\u304A\u304A",onyomi:"\u30C0\u30A4, \u30BF\u30A4"},{key:"\u5C0F",value:"small",kunyomi:"\u3061\u3044-\u3055\u3044",onyomi:"\u30B7\u30E7\u30A6"},{key:"\u6708",value:"month, moon",kunyomi:"\u3064\u304D",onyomi:"\u30B2\u30C4, \u30AC\u30C4"},{key:"\u65E5",value:"day, sun",kunyomi:"\u3072",onyomi:"\u30CB\u30C1, \u30B8\u30C4"},{key:"\u5E74",value:"year",kunyomi:"\u3068\u3057",onyomi:"\u30CD\u30F3"},{key:"\u65E9",value:"early",kunyomi:"\u306F\u3084-\u3044",onyomi:"\u30BD\u30A6"},{key:"\u6728",value:"tree",kunyomi:"\u304D",onyomi:"\u30DC\u30AF, \u30E2\u30AF"},{key:"\u6797",value:"woods",kunyomi:"\u306F\u3084\u3057",onyomi:"\u30EA\u30F3"},{key:"\u5C71",value:"mountain",kunyomi:"\u3084\u307E",onyomi:"\u30B5\u30F3"},{key:"\u5DDD",value:"river",kunyomi:"\u304B\u308F",onyomi:"\u30BB\u30F3"},{key:"\u571F",value:"soil",kunyomi:"\u3064\u3061",onyomi:"\u30C9, \u30C8"},{key:"\u7A7A",value:"sky",kunyomi:"\u305D\u3089",onyomi:"\u30AF\u30A6"},{key:"\u7530",value:"rice field",kunyomi:"\u305F",onyomi:"\u30C7\u30F3"},{key:"\u5929",value:"heaven, sky",kunyomi:"\u3042\u3081",onyomi:"\u30C6\u30F3"},{key:"\u751F",value:"living, birth, raw",kunyomi:"\u3044-\u304D\u308B",onyomi:"\u30BB\u30A4, \u30B7\u30E7\u30A6"},{key:"\u82B1",value:"flower",kunyomi:"\u306F\u306A",onyomi:"\u30AB"},{key:"\u8349",value:"grass",kunyomi:"\u304F\u3055",onyomi:"\u30BD\u30A6"},{key:"\u866B",value:"insect",kunyomi:"\u3080\u3057",onyomi:"\u30C1\u30E5\u30A6"},{key:"\u72AC",value:"dog",kunyomi:"\u3044\u306C",onyomi:"\u30B1\u30F3"},{key:"\u4EBA",value:"person",kunyomi:"\u3072\u3068",onyomi:"\u30B8\u30F3, \u30CB\u30F3"},{key:"\u540D",value:"name",kunyomi:"\u306A",onyomi:"\u30E1\u30A4, \u30DF\u30E7\u30A6"},{key:"\u5973",value:"female",kunyomi:"\u304A\u3093\u306A",onyomi:"\u30B8\u30E7, \u30CB\u30E7"},{key:"\u7537",value:"male",kunyomi:"\u304A\u3068\u3053",onyomi:"\u30C0\u30F3, \u30CA\u30F3"},{key:"\u5B50",value:"child",kunyomi:"\u3053",onyomi:"\u30B7"},{key:"\u76EE",value:"eye",kunyomi:"\u3081",onyomi:"\u30E2\u30AF, \u30DC\u30AF"},{key:"\u8033",value:"ear",kunyomi:"\u307F\u307F",onyomi:"\u30B8"},{key:"\u53E3",value:"mouth",kunyomi:"\u304F\u3061",onyomi:"\u30B3\u30A6"},{key:"\u624B",value:"hand",kunyomi:"\u3066",onyomi:"\u30B7\u30E5"},{key:"\u8DB3",value:"foot, suffice",kunyomi:"\u3042\u3057",onyomi:"\u30BD\u30AF"},{key:"\u898B",value:"see",kunyomi:"\u307F-\u308B",onyomi:"\u30B1\u30F3"},{key:"\u97F3",value:"sound",kunyomi:"\u304A\u3068",onyomi:"\u30AA\u30F3, \u30A4\u30F3"},{key:"\u529B",value:"power",kunyomi:"\u3061\u304B\u3089",onyomi:"\u30EA\u30E7\u30AF, \u30EA\u30AD"},{key:"\u6C17",value:"spirit, air",kunyomi:"\u304D",onyomi:"\u30AD, \u30B1"},{key:"\u5186",value:"yen, circle",kunyomi:"\u307E\u308B-\u3044",onyomi:"\u30A8\u30F3"},{key:"\u5165",value:"enter",kunyomi:"\u306F\u3044-\u308B",onyomi:"\u30CB\u30E5\u30A6, \u30B8\u30E5"},{key:"\u51FA",value:"exit",kunyomi:"\u3067-\u308B",onyomi:"\u30B7\u30E5\u30C4, \u30B9\u30A4"},{key:"\u7ACB",value:"stand up",kunyomi:"\u305F-\u3064",onyomi:"\u30EA\u30C4"},{key:"\u4F11",value:"rest",kunyomi:"\u3084\u3059-\u3080",onyomi:"\u30AD\u30E5\u30A6"},{key:"\u5148",value:"previous",kunyomi:"\u3055\u304D",onyomi:"\u30BB\u30F3"},{key:"\u5915",value:"evening",kunyomi:"\u3086\u3046",onyomi:"\u30BB\u30AD"},{key:"\u672C",value:"book",kunyomi:"\u3082\u3068",onyomi:"\u30DB\u30F3"},{key:"\u6587",value:"text",kunyomi:"\u3075\u307F",onyomi:"\u30D6\u30F3, \u30E2\u30F3"},{key:"\u5B57",value:"character",kunyomi:"\u3042\u3056",onyomi:"\u30B8"},{key:"\u5B66",value:"study",kunyomi:"\u307E\u306A-\u3076",onyomi:"\u30AC\u30AF"},{key:"\u6821",value:"school",kunyomi:"\u3053\u3046",onyomi:"\u30B3\u30A6"},{key:"\u6751",value:"village",kunyomi:"\u3080\u3089",onyomi:"\u30BD\u30F3"},{key:"\u753A",value:"town",kunyomi:"\u307E\u3061",onyomi:"\u30C1\u30E7\u30A6"},{key:"\u68EE",value:"forest",kunyomi:"\u3082\u308A",onyomi:"\u30B7\u30F3"},{key:"\u6B63",value:"correct",kunyomi:"\u305F\u3060-\u3057\u3044",onyomi:"\u30BB\u30A4, \u30B7\u30E7\u30A6"},{key:"\u6C34",value:"water",kunyomi:"\u307F\u305A",onyomi:"\u30B9\u30A4"},{key:"\u706B",value:"fire",kunyomi:"\u3072",onyomi:"\u30AB"},{key:"\u7389",value:"jewel, ball",kunyomi:"\u305F\u307E",onyomi:"\u30AE\u30E7\u30AF"},{key:"\u738B",value:"king",kunyomi:"\u304A\u3046",onyomi:"\u30AA\u30A6"},{key:"\u77F3",value:"stone",kunyomi:"\u3044\u3057",onyomi:"\u30BB\u30AD"},{key:"\u7AF9",value:"bamboo",kunyomi:"\u305F\u3051",onyomi:"\u30C1\u30AF"},{key:"\u7CF8",value:"thread",kunyomi:"\u3044\u3068",onyomi:"\u30B7"},{key:"\u8C9D",value:"shellfish",kunyomi:"\u304B\u3044",onyomi:"\u30D0\u30A4"},{key:"\u8ECA",value:"vehicle",kunyomi:"\u304F\u308B\u307E",onyomi:"\u30B7\u30E3"},{key:"\u91D1",value:"gold, money",kunyomi:"\u304B\u306D",onyomi:"\u30AD\u30F3, \u30B3\u30F3"},{key:"\u96E8",value:"rain",kunyomi:"\u3042\u3081",onyomi:"\u30A6"},{key:"\u8D64",value:"red",kunyomi:"\u3042\u304B",onyomi:"\u30BB\u30AD"},{key:"\u9752",value:"blue",kunyomi:"\u3042\u304A",onyomi:"\u30BB\u30A4, \u30B7\u30E7\u30A6"},{key:"\u767D",value:"white",kunyomi:"\u3057\u308D",onyomi:"\u30CF\u30AF"}];var me=(()=>{class t{constructor(){this.letters=nt;}static{this.\u0275fac=function(a){return new(a||t)};}static{this.\u0275cmp=lI({type:t,selectors:[["ken-kanji"]],decls:1,vars:1,consts:[[3,"characterSet"]],template:function(a,n){a&1&&Gf(0,"ken-script",0),a&2&&qf("characterSet",n.letters);},dependencies:[x],styles:["[_nghost-%COMP%]     .option{font-size:15px!important;margin:2px;width:32%;height:80px}"],changeDetection:1});}}return t})();var Rt=[{path:"capitals",component:ne},{path:"arithmetic",component:te},{path:"spelling-bee",component:ie},{path:"flags",component:oe},{path:"hiragana",component:se},{path:"katakana",component:le},{path:"kanji",component:me},{path:"devanagari",component:ce}],it=(()=>{class t{static{this.\u0275fac=function(a){return new(a||t)};}static{this.\u0275mod=xf({type:t});}static{this.\u0275inj=zi({imports:[na.forChild(Rt),na]});}}return t})();var rt=(()=>{class t{constructor(){}static{this.\u0275fac=function(a){return new(a||t)};}static{this.\u0275prov=ee({token:t,factory:t.\u0275fac,providedIn:"root"});}}return t})();var Sn=(()=>{class t{static{this.\u0275fac=function(a){return new(a||t)};}static{this.\u0275mod=xf({type:t});}static{this.\u0275inj=zi({providers:[ae,re,rt],imports:[it,te,ne,ie,oe,se,ce,me,le,x]});}}return t})();export{Sn as QuizModule};