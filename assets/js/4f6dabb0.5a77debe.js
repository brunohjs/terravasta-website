"use strict";(self.webpackChunkterravasta_website=self.webpackChunkterravasta_website||[]).push([[866],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>u});var r=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),m=function(e){var a=r.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=m(e.components);return r.createElement(d.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},l=r.forwardRef((function(e,a){var t=e.components,o=e.mdxType,n=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=m(t),u=o,g=l["".concat(d,".").concat(u)]||l[u]||p[u]||n;return t?r.createElement(g,s(s({ref:a},c),{},{components:t})):r.createElement(g,s({ref:a},c))}));function u(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=t.length,s=new Array(n);s[0]=l;var i={};for(var d in a)hasOwnProperty.call(a,d)&&(i[d]=a[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var m=2;m<n;m++)s[m]=t[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},8844:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>m});var r=t(7462),o=(t(7294),t(3905));const n={title:"Cartas",sidebar_position:4},s="Cartas",i={unversionedId:"cards",id:"cards",title:"Cartas",description:"As cartas s\xe3o os principais componentes do jogo. Nelas s\xe3o representadas as criaturas, constru\xe7\xf5es, feiti\xe7os que s\xe3o utilizados no campo de batalha. Ser\xe1 descrito os tipos de cartas que existem e cada item que comp\xf5e uma carta.",source:"@site/docs/cards.md",sourceDirName:".",slug:"/cards",permalink:"/terravasta-website/cards",draft:!1,editUrl:"https://github.com/brunohjs/terravasta-website/tree/main/docs/cards.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Cartas",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Cl\xe3s",permalink:"/terravasta-website/clans"}},d={},m=[{value:"Tipos de carta",id:"tipos-de-carta",level:2},{value:"Constru\xe7\xe3o",id:"constru\xe7\xe3o",level:3},{value:'<a name="defesa"></a>Regra da defesa',id:"regra-da-defesa",level:4},{value:"Criatura",id:"criatura",level:3},{value:"Feiti\xe7o",id:"feiti\xe7o",level:3},{value:"Elemento",id:"elemento",level:2},{value:"Dano",id:"dano",level:2},{value:"Raridade",id:"raridade",level:2},{value:"Recursos",id:"recursos",level:2},{value:"Habilidades",id:"habilidades",level:2}],c={toc:m};function p(e){let{components:a,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cartas"},"Cartas"),(0,o.kt)("p",null,"As cartas s\xe3o os principais componentes do jogo. Nelas s\xe3o representadas as criaturas, constru\xe7\xf5es, feiti\xe7os que s\xe3o utilizados no campo de batalha. Ser\xe1 descrito os tipos de cartas que existem e cada item que comp\xf5e uma carta."),(0,o.kt)("h2",{id:"tipos-de-carta"},"Tipos de carta"),(0,o.kt)("p",null,"As cartas podem ser divididas em tr\xeas grandes grupos: constru\xe7\xf5es, criaturas e feiti\xe7os. Antes de apresentar cada um dos tipos, ser\xe1 mostrado os componentes em comum entre as cartas. Todas as cartas v\xe3o possuir esses componentes:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(7009).Z,width:"461",height:"686"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Raridade. As cartas possuem um tipo de raridade, que representa o qu\xe3o rara ela \xe9."),(0,o.kt)("li",{parentName:"ol"},"Nome da carta."),(0,o.kt)("li",{parentName:"ol"},"Descri\xe7\xe3o e efeitos. Nem toda carta possui esse \xe1rea preenchida, mas quando possuir, pode ser uma descri\xe7\xe3o da classe, ra\xe7a, tipo de dano e/ou uma lista de habilidades e/ou efeitos. Os efeitos ou habilidades, s\xe3o poderes que uma carta pode ter."),(0,o.kt)("li",{parentName:"ol"},"O rodap\xe9 \xe9 a parte onde cont\xe9m informa\xe7\xf5es do ID da carta, vers\xe3o e cole\xe7\xe3o. O \xedcone no canto direito representa a cole\xe7\xe3o que a carta pertence.")),(0,o.kt)("h3",{id:"constru\xe7\xe3o"},"Constru\xe7\xe3o"),(0,o.kt)("p",null,"Esse tipo de carta descreve uma constru\xe7\xe3o ou lugar que perten\xe7a ao cl\xe3. Isso quer dizer que essas cartas podem haver desde pequenos monumentos at\xe9 grandes metr\xf3poles. Outros exemplos que podemos encontrar nesse tipo de carta, s\xe3o: cidades, fortalezas, minas, lagos, torres, templos, etc."),(0,o.kt)("p",null,"As constru\xe7\xf5es s\xe3o as principais fontes de produ\xe7\xe3o de recursos. Ent\xe3o \xe9 muito importante mant\xea-las seguras. Aqui est\xe1 um exemplo de carta do tipo ",(0,o.kt)("strong",{parentName:"p"},"Constru\xe7\xe3o"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(4466).Z,width:"461",height:"686"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Representa o cl\xe3 que a constru\xe7\xe3o pertence. Voc\xea s\xf3 pode utilizar constru\xe7\xf5es que s\xe3o do cl\xe3 do seu deck ou do cl\xe3 ",(0,o.kt)("strong",{parentName:"li"},"Neutral"),". Nesse exemplo, a constru\xe7\xe3o \xe9 do cl\xe3 ",(0,o.kt)("strong",{parentName:"li"},"Neutral"),"."),(0,o.kt)("li",{parentName:"ol"},"S\xe3o os recursos que a constru\xe7\xe3o produz por turno. Nesse exemplo, a constru\xe7\xe3o produz uma unidade de ",(0,o.kt)("strong",{parentName:"li"},"madeira"),"."),(0,o.kt)("li",{parentName:"ol"},"Elemento. Cada constru\xe7\xe3o possui um elemento. Isso permite o jogador utilizar feiti\xe7os desse elemento. O jogador s\xf3 vai poder utilizar feiti\xe7os dos elementos das suas constru\xe7\xf5es que est\xe3o em campo, al\xe9m do elemento ",(0,o.kt)("strong",{parentName:"li"},"neutro"),". Nesse exemplo, a constru\xe7\xe3o possui o elemento ",(0,o.kt)("strong",{parentName:"li"},"terra"),"."),(0,o.kt)("li",{parentName:"ol"},"Defesa. A constru\xe7\xe3o pode possuir uma quantidade de defesa. Isso permite bloquear parte de certos ataques e evitar que a constru\xe7\xe3o seja destru\xedda rapidamente. Para saber mais sobre a regra de defesa, ",(0,o.kt)("a",{parentName:"li",href:"#defesa"},"clique aqui"),"."),(0,o.kt)("li",{parentName:"ol"},"Vida. Representa a quantidade de vida da constru\xe7\xe3o. Quando essa quantidade chegar a zero, a constru\xe7\xe3o \xe9 destru\xedda. Quando destru\xedda, a constru\xe7\xe3o n\xe3o produzir\xe1 mais recursos para o jogador. Nesse exemplo, a constru\xe7\xe3o possui 5 pontos de vida.")),(0,o.kt)("h4",{id:"regra-da-defesa"},(0,o.kt)("a",{name:"defesa"}),"Regra da defesa"),(0,o.kt)("p",null,"As constru\xe7\xf5es podem possuir uma quantidade de defesa. Isso serve para barrar parte do dano que \xe9 causada de certos ataques."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Regra da Defesa")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Se o ataque for maior que a defesa, ent\xe3o o dano \xe9 a diferen\xe7a do ataque pela defesa. Se o ataque for menor ou igual que a defesa, ent\xe3o n\xe3o h\xe1 defesa nesse caso, ou seja, o dano \xe9 o ataque."))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Exemplo")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Uma criatura com 3 de ataque, ataca uma constru\xe7\xe3o com 2 de defesa. J\xe1 que o ataque \xe9 maior que a defesa, ent\xe3o se faz a subtra\xe7\xe3o do ataque pela defesa. O dano causado na vida da constru\xe7\xe3o ser\xe1 de 1."),(0,o.kt)("li",{parentName:"ul"},"Uma criatura com 1 de ataque, ataca uma constru\xe7\xe3o com 2 de defesa. J\xe1 que o ataque \xe9 menor que a defesa, ent\xe3o o dano ser\xe1 o ataque. O dano causado na vida da constru\xe7\xe3o ser\xe1 de 1."),(0,o.kt)("li",{parentName:"ul"},"Uma criatura com 2 de ataque, ataca uma constru\xe7\xe3o com 2 de defesa. J\xe1 que o ataque \xe9 igual a defesa, ent\xe3o o dano ser\xe1 o ataque. O dano causado na vida da constru\xe7\xe3o ser\xe1 de 2.")))),(0,o.kt)("h3",{id:"criatura"},"Criatura"),(0,o.kt)("p",null,"As criaturas s\xe3o as cartas que representam seu ex\xe9rcito em campo. Seu deck \xe9 caracterizado por um cl\xe3, sendo assim, suas criaturas devem ser do mesmo cl\xe3. Por\xe9m, o cl\xe3 ",(0,o.kt)("strong",{parentName:"p"},"Neutral")," \xe9 o \xfanico que suas cartas podem estar misturadas com cartas de outros cl\xe3s em um deck. Aqui est\xe1 um exemplo de carta do tipo ",(0,o.kt)("strong",{parentName:"p"},"Criatura"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(6398).Z,width:"461",height:"686"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Simboliza o cl\xe3 que a criatura pertence. Voc\xea s\xf3 pode utilizar criaturas que s\xe3o do cl\xe3 do seu deck ou do cl\xe3 ",(0,o.kt)("strong",{parentName:"li"},"Neutral"),". Nesse exemplo, a criatura \xe9 do cl\xe3 ",(0,o.kt)("strong",{parentName:"li"},"Neutral"),"."),(0,o.kt)("li",{parentName:"ol"},"S\xe3o os recursos necess\xe1rios para que a criatura possa ser invocada em campo. Nesse exemplo, a criatura custa uma unidade de ",(0,o.kt)("strong",{parentName:"li"},"madeira"),"."),(0,o.kt)("li",{parentName:"ol"},"Tipo de dano. O tipo de dano vai influenciar no modo como a criatura ataca. Al\xe9m disso, algumas criaturas podem ser mais resistentes a certos tipos de dano. Os tipos de dano podem variar entre: corpo-a-corpo, \xe0 dist\xe2ncia, m\xe1gico corpo-a-corpo e m\xe1gico \xe0 dist\xe2ncia. Nesse exemplo, a criatura possui o tipo de dano corpo-a-corpo. Para saber mais sobre os tipos de dano, ",(0,o.kt)("a",{parentName:"li",href:"#teste"},"clique aqui"),"."),(0,o.kt)("li",{parentName:"ol"},"Nesse espa\xe7o, vai haver duas informa\xe7\xf5es sobre a criatura, que s\xe3o a ",(0,o.kt)("strong",{parentName:"li"},"ra\xe7a")," e a ",(0,o.kt)("strong",{parentName:"li"},"classe"),". Nem todas as criaturas possuem classe, nesse caso s\xf3 ser\xe1 exibida a ra\xe7a. No exemplo, a criatura possui a ra\xe7a ",(0,o.kt)("strong",{parentName:"li"},"Animal")," e a classe ",(0,o.kt)("strong",{parentName:"li"},"Cavaleiro"),"."),(0,o.kt)("li",{parentName:"ol"},"Ataque. Representa a quantidade de dano que a criatura pode causar quando atacar um inimigo. Nesse exemplo, a criatura possui 1 de ataque."),(0,o.kt)("li",{parentName:"ol"},"Retalia\xe7\xe3o. Representa a quantidade de dano que a criatura pode causar ao contra golpear a criatura que a atacou. A retalia\xe7\xe3o n\xe3o ocorre quando a criatura recebe dano maior que sua vida, ou seja, quando receber dano suficiente para destru\xed-la. Nesse exemplo, a criatura possui 0 de retalia\xe7\xe3o."),(0,o.kt)("li",{parentName:"ol"},"Vida. S\xe3o os pontos de vida da criatura. Quando essa quantidade chegar a zero, ela \xe9 destru\xedda e movida para o cemit\xe9rio. Nesse exemplo, a criatura possui 2 pontos de vida.")),(0,o.kt)("h3",{id:"feiti\xe7o"},"Feiti\xe7o"),(0,o.kt)("p",null,"Os feiti\xe7os s\xe3o cartas que possuem efeitos que podem beneficiar ou prejudicar os jogadores. Cada feiti\xe7o possui um elemento, que para ser utilizado, o jogar precisa ter uma constru\xe7\xe3o n\xe3o destru\xedda que possui esse elemento, com exce\xe7\xe3o dos feiti\xe7os do elemento ",(0,o.kt)("strong",{parentName:"p"},"neutro"),". H\xe1 um custo para invocar em campo, assim como as criaturas."),(0,o.kt)("p",null,"Os feiti\xe7os s\xe3o classificados em quatro tipos:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Instant\xe2neo -")," Feiti\xe7o que ser\xe1 utilizado instantaneamente na sua rodada. Eles podem ser para atacar seu oponente ou te bonificar de diversas formas."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Permanente -")," S\xe3o feiti\xe7os que v\xe3o ficar ativo mesmo com o fim da sua rodada. Da mesma forma que os instant\xe2neos, os permanentes podem te bonificar ou prejudicar o oponente."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Equipamento -")," S\xe3o cartas que servem para melhorar os atributos ou dar poderes para uma criatura em campo."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Armadilha -")," S\xe3o feiti\xe7os que podem ser ativados com uma a\xe7\xe3o do inimigo. Elas s\xe3o ativadas na sua m\xe3o, se haver recursos suficientes e se voc\xea quiser.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(3427).Z,width:"461",height:"686"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Elemento. O elemento do feiti\xe7o. Nesse exemplo, o feiti\xe7o \xe9 do elemento ",(0,o.kt)("strong",{parentName:"li"},"luz"),"."),(0,o.kt)("li",{parentName:"ol"},"Custo. Os recursos necess\xe1rios para poder invocar o feiti\xe7o. Nesse exemplo, o feiti\xe7o custa uma unidade de ",(0,o.kt)("strong",{parentName:"li"},"mana"),".")),(0,o.kt)("h2",{id:"elemento"},"Elemento"),(0,o.kt)("p",null,"Os elementos s\xe3o utilizados nos feiti\xe7os. Para poder utilizar um feiti\xe7o de um elemento \xe9 necess\xe1rio dominar esse elemento. Para dominar um elemento, o jogador deve possuir uma constru\xe7\xe3o n\xe3o destru\xedda que possui esse elemento. Os feiti\xe7os do elemento ",(0,o.kt)("strong",{parentName:"p"},"neutro")," n\xe3o necessitam de constru\xe7\xe3o. Existem sete elementos:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Neutro"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Ar"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Fogo"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\xc1gua"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Terra"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Sombra"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Luz"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("img",{src:t(4378).Z,width:"85",height:"85"})),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("img",{src:t(3875).Z,width:"85",height:"85"})),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("img",{src:t(8317).Z,width:"85",height:"85"})),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("img",{src:t(106).Z,width:"85",height:"85"})),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("img",{src:t(5002).Z,width:"85",height:"85"})),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("img",{src:t(6066).Z,width:"85",height:"85"})),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("img",{src:t(3776).Z,width:"85",height:"85"}))))),(0,o.kt)("h2",{id:"dano"},"Dano"),(0,o.kt)("p",null,"Os tipos de danos s\xe3o mais uma forma de aumentar a variedade de criaturas. Eles v\xe3o dizer de que forma elas v\xe3o atacar seus inimigos. Existem criaturas que s\xe3o imunes a certos tipos de danos, por isso, \xe9 importante ter criaturas com diferentes tipos de dano no seu deck."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Nome"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Descri\xe7\xe3o"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Simbolo"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Corpo-a-corpo"),(0,o.kt)("td",{parentName:"tr",align:"left"},"O dano corpo-a-corpo \xe9 um tipo de dano f\xedsico. A criatura que possui o dano corpo-a-corpo, s\xf3 pode atacar criaturas inimigas que est\xe3o na sua linha. Se haver mais de uma criatura inimiga na mesma linha, ent\xe3o s\xf3 pode atacar a criatura da frente. S\xf3 pode atacar a constru\xe7\xe3o que est\xe1 na sua frente e somente se n\xe3o haver criaturas inimigas na mesma linha."),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("img",{src:t(7662).Z,width:"252",height:"291"}))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"\xc0 dist\xe2ncia"),(0,o.kt)("td",{parentName:"tr",align:"left"},"O dano \xe0 dist\xe2ncia tamb\xe9m \xe9 do tipo dano f\xedsico. A criatura que possui o dano \xe0 dist\xe2ncia pode atacar qualquer criatura inimiga em campo e n\xe3o sofrer\xe1 retalia\xe7\xe3o. Al\xe9m disso, s\xf3 pode atacar a constru\xe7\xe3o que est\xe1 na sua frente e somente se n\xe3o haver criaturas inimigas na mesma linha."),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("img",{src:t(7574).Z,width:"252",height:"291"}))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"M\xe1gico"),(0,o.kt)("td",{parentName:"tr",align:"left"},"O dano m\xe1gico sempre estar\xe1 acompanhado ao dano \xe0 dist\xe2ncia ou ao dano corpo-a-corpo. O dano m\xe1gico \xe9 efetivo contra criaturas que s\xe3o imunes ao dano f\xedsico."),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("img",{src:t(1853).Z,width:"252",height:"291"}))))),(0,o.kt)("h2",{id:"raridade"},"Raridade"),(0,o.kt)("p",null,"As cartas possuem um tipo de raridade, sendo a ",(0,o.kt)("strong",{parentName:"p"},"lend\xe1ria")," a mais rara. Os tipos de raridade s\xe3o:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Comum"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Incomum"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Rara"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\xc9pica"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Lend\xe1ria"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("img",{src:t(7602).Z,width:"100",height:"100"})),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("img",{src:t(2236).Z,width:"100",height:"100"})),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("img",{src:t(3922).Z,width:"100",height:"100"})),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("img",{src:t(5301).Z,width:"100",height:"100"})),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("img",{src:t(448).Z,width:"100",height:"100"}))))),(0,o.kt)("h2",{id:"recursos"},"Recursos"),(0,o.kt)("p",null,"Os recursos s\xe3o necess\xe1rios para poder invocar as cartas em campo. Na sua maioria das vezes, os recursos s\xe3o produzidos pelas constru\xe7\xf5es, mas tamb\xe9m podem ser produzidos por criaturas ou feiti\xe7os. Os recursos s\xe3o:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Alimento"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Madeira"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Ouro"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Mana"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("img",{src:t(5514).Z,width:"200",height:"200"})),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("img",{src:t(3774).Z,width:"198",height:"200"})),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("img",{src:t(4284).Z,width:"200",height:"200"})),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("img",{src:t(397).Z,width:"200",height:"200"}))))),(0,o.kt)("h2",{id:"habilidades"},"Habilidades"),(0,o.kt)("p",null,"Esses s\xe3o os poderes mais comuns que as criaturas podem possuir:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Habilidade"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Descri\xe7\xe3o"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Agricultor {X}"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Enquanto estiver em campo, a produ\xe7\xe3o de comida aumenta em {X}.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Ancorada"),(0,o.kt)("td",{parentName:"tr",align:"left"},"N\xe3o pode se mover ou ser realocada.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Autorrepara\xe7\xe3o"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Recupera totalmente seu HP se n\xe3o atacar durante a sua rodada.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Ataque em \xc1rea {X}"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Ao atacar uma criatura, as criaturas oponentes adjacentes tamb\xe9m ser\xe3o atingidas com {X} de dano.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Ataque Duplo"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Pode atacar duas vezes no mesmo turno.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Anti Feiti\xe7o"),(0,o.kt)("td",{parentName:"tr",align:"left"},"N\xe3o pode receber feiti\xe7os de qualquer jogador.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Ataque R\xe1pido"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Pode mover ou atacar no mesmo turno em que foi posta no campo.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Bloqueio {X}"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Bloqueia {X} do dano f\xedsico recebido.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Bruxo {X}"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Enquanto estiver em campo, a produ\xe7\xe3o de mana aumenta em {X}.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Carga"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Ao atacar uma criatura tamb\xe9m atinge a criatura que est\xe1 atr\xe1s dela.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Curar {X}"),(0,o.kt)("td",{parentName:"tr",align:"left"},"No in\xedcio do seu turno, essa e as criaturas aliadas adjacentes s\xe3o curadas em {X} ponto(s) de HP.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Debilitar {X}"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Ao causar dano, a criatura alvo fica debilitada. A criatura debilitada perde {X} de ATK e RET.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Drenar"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Se cura com o valor causado de dano.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Escudo M\xe1gico {X}"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Bloqueia {X} do dano m\xe1gico recebido.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"F\xfaria {X}"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Ao receber dano pela primeira vez, Ganha {X} de ATK e RET.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Honra {X}"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Enquanto estiver em campo, os aliados adjacentes recebem um aumento de {X} de ATK e RET.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Imunidade F\xedsica"),(0,o.kt)("td",{parentName:"tr",align:"left"},"N\xe3o pode receber dano f\xedsico.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Imunidade M\xe1gica"),(0,o.kt)("td",{parentName:"tr",align:"left"},"N\xe3o pode receber dano m\xe1gico.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Infectar {X}"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Quando causar dano \xe0 uma criatura, deixa-a infectada. A criatura infectada sofre {X} de dano em cada final da sua rodada.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Irretali\xe1vel"),(0,o.kt)("td",{parentName:"tr",align:"left"},"N\xe3o recebe dano por retalia\xe7\xe3o.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Inalvej\xe1vel"),(0,o.kt)("td",{parentName:"tr",align:"left"},"N\xe3o pode receber qualquer tipo de dano de criaturas.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Lenhador {X}"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Enquanto estiver em campo, a produ\xe7\xe3o de madeira aumenta em {X}.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Mercador {X}"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Enquanto estiver em campo, a produ\xe7\xe3o de ouro aumenta em {X}.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Medo"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Para atacar essa criatura, \xe9 necess\xe1rio ter o mesmo ataque ou mais do que ela.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Paralisar {X}"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Ao causar dano \xe0 uma criatura, deixa-a paralisada. Criaturas paralisadas n\xe3o podem fazer a\xe7\xe3o durante {X} turno(s).")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Regenerar {X}"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Se cura em {X} ponto(s) de vida ao in\xedcio da sua rodada.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Retribui\xe7\xe3o"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Causa dano de retalia\xe7\xe3o na criatura que causou dano a ela antes de morrer.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Veloz"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Pode atacar e mover no mesmo turno.")))))}p.isMDXComponent=!0},1853:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/magic_damage-8a0f0c859aebfe55d0f81fa06c459782.png"},7662:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/melee_damage-a0d42aa562df1f3efaa5da057fab8667.png"},7574:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/ranged_damage-4872d91587938ecd12814305d2b2ee43.png"},3875:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/ar-c8b1cbf211787de64868a3ee87a6e755.png"},8317:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/fogo-ebf0260db9185a0bab7fa2fdb169a640.png"},3776:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/luz-ab1022354a0bd81a0b127ebba616f26a.png"},4378:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/neutro-058ce33fd6a3a0ed04d5686c7996b483.png"},6066:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/sombra-26f5b10993bb55878665bfa0efe3e48a.png"},5002:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/terra-29411f3a0a6922fc92d28dce57d55d9b.png"},106:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/\xe1gua-24001f2f5954e8b5370d3d235aa5f666.png"},4466:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/building_card-88a13a7ec183ab6fbe8fda9dc98af4c3.png"},7009:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/common_card-e481e2aabdb60779a2b7ea56fcbe1479.png"},6398:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/creature_card-755b0f4528c65739f5bd68c50ed7410d.png"},3427:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/spell_card-631d1c58c1ed782510bc32d2879f0844.png"},7602:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/common-7ef854ccf7a961cfc4341562280c4bb2.png"},5301:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/epic-080bf629590c20474a9f05d3c0a88791.png"},448:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/legendary-108d8e4639818b60e5f9e15389dd619e.png"},3922:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/rare-b81fdf9545efb342d3ec1db5231e4723.png"},2236:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/uncommon-f134aa04eafe569655fd93b1a23471e0.png"},5514:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/food-679786a84fc272d8e723514918d42ba6.png"},4284:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/gold-07c386244830ab3707148ad644d3a305.png"},397:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/mana-e76179ff9700a648db3af6a7131e2570.png"},3774:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/wood-7c4fe1ab318ae4fbd2fc302268d501a0.png"}}]);