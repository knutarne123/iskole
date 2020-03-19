(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return m})),n.d(t,"default",(function(){return d}));var a=n(1),r=n(6),l=(n(0),n(135)),i={id:"timeplan_klasse",title:"Timeplanlegge klasse",sidebar_label:"Timeplanlegge klasse"},s={id:"timeplan_klasse",title:"Timeplanlegge klasse",description:"Timeplanen for en klasse skal inneholde all organisert undervisning som alle elevene som er registrert i klassen skal delta i. Unntak kan v\xe6re: Enkeltelever som er fritatt i ett eller flere fag, eller eventuelt har spesialoppf\xf8lging i deler av fag. Disse unntak f\xe5r ingen innvirkning for timeplanlegger i arbeidet med \xe5 sette opp klassens timeplan.",source:"@site/docs/timeplan_klasse.md",permalink:"/iskole/docs/timeplan_klasse",editUrl:"https://github.com/BarmanHanssen/iskole/docs/timeplan_klasse.md",sidebar_label:"Timeplanlegge klasse",sidebar:"someSidebar",next:{title:"Style Guide",permalink:"/iskole/docs/doc1"}},m=[{value:"Fag",id:"fag",children:[]},{value:"Timeplan klasse ST1A",id:"timeplan-klasse-st1a",children:[]},{value:"Timeplan l\xe6rer",id:"timeplan-l\xe6rer",children:[]},{value:"Vis timeplanen til disse ansatte",id:"vis-timeplanen-til-disse-ansatte",children:[]},{value:"Timeplanlegge klasse&gt;Kopier",id:"timeplanlegge-klassekopier",children:[]}],o={rightToc:m};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Timeplanen for en klasse skal inneholde all organisert undervisning som alle elevene som er registrert i klassen skal delta i. Unntak kan v\xe6re: Enkeltelever som er fritatt i ett eller flere fag, eller eventuelt har spesialoppf\xf8lging i deler av fag. Disse unntak f\xe5r ingen innvirkning for timeplanlegger i arbeidet med \xe5 sette opp klassens timeplan."),Object(l.b)("p",null,"Dersom elevene i klassen kan velge fag som utover det som hele klassen er satt opp med, alts\xe5 ogs\xe5 kan velge gruppefag, vil dette normalt gi begrensninger for oppsettet av klassens timeplan. Det vil i praksis inneb\xe6re at noen timer blir reservert for undervisning i gruppefag, og i disse timene kan da ikke klassen ha undervisning i klassens obligatoriske fag. Vi ser her bort fra denne mulighet, og henviser til egne avsnitt om gruppefag. Se veiledningen som du finner ved \xe5 laste pdf-filen fra lenken oppe i h\xf8yrehj\xf8rne."),Object(l.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(l.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Tips")),Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"Ved oppsett av timeplan for nytt skole\xe5r b\xf8r en velge f\xf8rste uke i skole\xe5ret som mal. Dette er et gunstig utgangspunkt da timeplan bare kan kopieres fremover i tid."))),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"https://barmanhanssen.github.io/iskole/img/tp_klasse_oversikt.png",alt:"Timeplanlegge klasse",title:"Timeplanlegge klasse oversikt."}))),Object(l.b)("p",null,"Skjermen for timeplanlegger er inndelt i fire separate deler som beskriver forskjellige deler av datasettet en timeplanlegger m\xe5 forholde seg til. Sluttresultatet blir timeplanen for en angitt klasse (her ST1A) i uke 20 (her angitt som 2020-20)."),Object(l.b)("h2",{id:"fag"},"Fag"),Object(l.b)("p",null,"Her er listet opp alle fagene som klassen er satt opp med (opprinnelig hentet fra Grunnlagsdata>Fag>Klassefag), og med fagl\xe6rerne i det enkelte fag (registrert fra Time- og fagfordeling>Klassefag). Det er mulig \xe5 legge til fag direkte herfra (se Legg til), eller endre antall timer for et bestemt fag i denne uken (via blyant-ikonet bak faget). Dersom et fag ikke skal ha timer i denne uken, reduseres timetallet til null. Dersom noen fag allerede er timeplanlagt, vises antallet timeplanlagte timer i kolonnen TP-lagt. Her gjeldet det kun faget NAT, som skal ha 6 timer, hvorav 2 timer er lagt p\xe5 tirsdag. Vi ser da at 4 timer Gjenst\xe5r i faget NAT."),Object(l.b)("p",null,"Under listen med fag finner man en nedtrekksliste med romnummer. Alle disponible undervisningsrom skolen disponerer er registrert fra Grunnlagsdata>Rom. Merk at dersom klassen har f\xe5tt tildelt rom fra Grunnlagsdata>Rom, vil klassens rom v\xe6re forh\xe5ndsvalgt n\xe5r klassefagene timeplanlegges. Det er mulig \xe5 endre dette romnummer, eventuelt legge inn fritt romnummer dersom klassen ikke har f\xe5tt tildelt rom. F\xf8r timen lagres, vil systemet kontrollere at rommet er ledig. "),Object(l.b)("h2",{id:"timeplan-klasse-st1a"},"Timeplan klasse ST1A"),Object(l.b)("p",null,"Her vises hvilke timer som alt er plassert, her to timer i NAT, og en time i ENG (mandag kl 8:15). Videre ser vi at faget ENG er markert under Fag. Det har f\xe5tt tildelt en rosa farge, og denne fargen tas med n\xe5r timene i faget plasseres. Det blir dermed lett \xe5 f\xe5 oversikten som trengs for at timene kan fordeles over ukens dager."),Object(l.b)("p",null,"Dersom man \xf8nsker en dobbel-time p\xe5 mandag, klikker man p\xe5 timen i dette vinduet. Timen plasseres da der, og vinduet for Fag og for Timeplan l\xe6rer oppdateres. Tilsvarende plasseres \xf8vrige timer i faget helt til Gjenst\xe5r viser tallet null. "),Object(l.b)("p",null,"Noen timer er markert med gr\xf8nn farge. Det er alle timene som kan timeplanlegges i denne uken, uten \xe5 kollidere mot andre fag i klassen, eller mot timer i andre fag som fagl\xe6rer i faget allerede har f\xe5tt tildelt. "),Object(l.b)("p",null,"Vi ser at hele torsdag, med unntak av f\xf8rste time, er uten fargemarkering. Det skyldes at l\xe6reren som har det utvalgte faget vi ser p\xe5 (ENG), allerede er opptatt med annen undervisning den dagen. Faget ENG kan derfor bare f\xe5 en time p\xe5 torsdag med denne fagl\xe6rer. Dersom klassen skal ha mer enn en time ENG p\xe5 torsdag, m\xe5 en allerede lagt time p\xe5 torsdag for denne l\xe6reren frigis."),Object(l.b)("p",null,"Ut fra dette skj\xf8nner en umiddelbart at det ikke er en god ide \xe5 timeplanlegge en hel klasse f\xf8r fagl\xe6rerne er p\xe5 plass!"),Object(l.b)("h2",{id:"timeplan-l\xe6rer"},"Timeplan l\xe6rer"),Object(l.b)("p",null,"N\xe5r en velger et Fag som har f\xe5tt tildelt l\xe6rer, vises automatisk timeplanen til denne l\xe6reren i dette skjermbildet. Timeplanen for klassen oppfriskes ogs\xe5, da allerede lagte timer i valgte fag markeres med fagets farge fra Fag. Ledige timer i klassens timeplan hvor l\xe6reren alt er opptatt med annen undervisning, og som derfor ikke kan benyttes i klassen i faget som n\xe5 skal timeplanlegges, blir blanket ut tilsvarende som for timene p\xe5 torsdag i skjermbildet ovenfor."),Object(l.b)("h2",{id:"vis-timeplanen-til-disse-ansatte"},"Vis timeplanen til disse ansatte"),Object(l.b)("p",null,"I noen tilfeller kan det v\xe6re greit \xe5 ha oversikt over timeplanen til flere l\xe6rere enn bare den som n\xe5 har fokus. De utvalgte ekstra-l\xe6rerne timeplanen vises da sammen med timeplanen til fagl\xe6reren i skjermbildet til Timeplan l\xe6rer."),Object(l.b)("h2",{id:"timeplanlegge-klassekopier"},"Timeplanlegge klasse>Kopier"),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Merk")),Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"Vanligste m\xe5te \xe5 kopiere timeplan p\xe5 er fra hovedmenyvalget Timeplan>Kopier. Kopieringen gj\xf8res gjerne n\xe5r hele timeplanen for skolen er ferdigstilt. Da tas den da ferdige timeplan for hele skolen og kopieres fremover til et fritt valg antall uker (ofte: hele skole\xe5ret)."))),Object(l.b)("p",null,"\xc5 kopiere timeplanen for en separat klasse kan v\xe6re p\xe5krevd dersom det skjer endringer i klassens timeplan etter at skolens samlede timeplan alt er p\xe5 plass. Timeplanen for de \xf8vrige klasser kan v\xe6re ulik den som gjelder for denne uken. \xc5 kopiere en enkelt klasses timeplan krever derfor omfattende kontroller for \xe5 fastsl\xe5 at timeplanen kan implementeres uten at klassens nye timeplan kommer i konflikt med noen av de andre timeplanene."),Object(l.b)("p",null,"P\xe5 et hvilket som helst tidspunkt under timeplanleggingen kan resultatet kopieres fremover til angitte uker. Dersom det blir \xf8nskelig, eller p\xe5krevd, \xe5 gj\xf8re endringer i en allerede gjeldene timeplan, og endringen skal gjelde for mere enn uken hvor en gj\xf8r korrigeringen, da har man behov for \xe5 f\xe5 den nye timeplanen distribuert. Merk at dersom det bare er snakk om at et fag skal skifte fagl\xe6rer, men uten endring av timene p\xe5 timeplanen, s\xe5 gj\xf8res dette fra Time- og fagfordeling>Klassefag. Der kan man endre fagl\xe6rer for de ukene dette m\xe5tte v\xe6re aktuelt."))}d.isMDXComponent=!0}}]);