# Cartas
As cartas são os principais componentes do jogo. Nelas são representadas as criaturas, construções, feitiços que são utilizados no campo de batalha. Será descrito os tipos de cartas que existem e cada item que compõe uma carta.

## Tipos de carta
As cartas podem ser divididas em três grandes grupos: construções, criaturas e feitiços. Antes de apresentar cada um dos tipos, será mostrado os componentes em comum entre as cartas. Todas as cartas vão possuir esses componentes:

![](/img/others/common_card.png)

1. Raridade. As cartas possuem um tipo de raridade, que representa o quão rara ela é.
2. Nome da carta.
3. Descrição e efeitos. Nem toda carta possui esse área preenchida, mas quando possuir, pode ser uma descrição da classe, raça, tipo de dano e/ou uma lista de habilidades e/ou efeitos. Os efeitos ou habilidades, são poderes que uma carta pode ter.
4. O rodapé é a parte onde contém informações do ID da carta, versão e coleção. O ícone no canto direito representa a coleção que a carta pertence.

### Construção
Esse tipo de carta descreve uma construção ou lugar que pertença ao clã. Isso quer dizer que essas cartas podem haver desde pequenos monumentos até grandes metrópoles. Outros exemplos que podemos encontrar nesse tipo de carta, são: cidades, fortalezas, minas, lagos, torres, templos, etc.

As construções são as principais fontes de produção de recursos. Então é muito importante mantê-las seguras. Aqui está um exemplo de carta do tipo **Construção**.

![](/img/others/building_card.png)

1. Representa o clã que a construção pertence. Você só pode utilizar construções que são do clã do seu deck ou do clã **Neutral**. Nesse exemplo, a construção é do clã **Neutral**.
2. São os recursos que a construção produz por turno. Nesse exemplo, a construção produz uma unidade de **madeira**.
3. Elemento. Cada construção possui um elemento. Isso permite o jogador utilizar feitiços desse elemento. O jogador só vai poder utilizar feitiços dos elementos das suas construções que estão em campo, além do elemento **neutro**. Nesse exemplo, a construção possui o elemento **terra**.
4. Defesa. A construção pode possuir uma quantidade de defesa. Isso permite bloquear parte de certos ataques e evitar que a construção seja destruída rapidamente. Para saber mais sobre a regra de defesa, [clique aqui](#defesa).
5. Vida. Representa a quantidade de vida da construção. Quando essa quantidade chegar a zero, a construção é destruída. Quando destruída, a construção não produzirá mais recursos para o jogador. Nesse exemplo, a construção possui 5 pontos de vida.


#### <a name="defesa"></a>Regra da defesa
As construções podem possuir uma quantidade de defesa. Isso serve para barrar parte do dano que é causada de certos ataques.

:::info Regra da Defesa
Se o ataque for maior que a defesa, então o dano é a diferença do ataque pela defesa. Se o ataque for menor ou igual que a defesa, então não há defesa nesse caso, ou seja, o dano é o ataque.
:::

:::tip Exemplo
- Uma criatura com 3 de ataque, ataca uma construção com 2 de defesa. Já que o ataque é maior que a defesa, então se faz a subtração do ataque pela defesa. O dano causado na vida da construção será de 1.
- Uma criatura com 1 de ataque, ataca uma construção com 2 de defesa. Já que o ataque é menor que a defesa, então o dano será o ataque. O dano causado na vida da construção será de 1.
- Uma criatura com 2 de ataque, ataca uma construção com 2 de defesa. Já que o ataque é igual a defesa, então o dano será o ataque. O dano causado na vida da construção será de 2.
:::

### Criatura
As criaturas são as cartas que representam seu exército em campo. Seu deck é caracterizado por um clã, sendo assim, suas criaturas devem ser do mesmo clã. Porém, o clã **Neutral** é o único que suas cartas podem estar misturadas com cartas de outros clãs em um deck. Aqui está um exemplo de carta do tipo **Criatura**.

![](/img/others/creature_card.png)

1. Simboliza o clã que a criatura pertence. Você só pode utilizar criaturas que são do clã do seu deck ou do clã **Neutral**. Nesse exemplo, a criatura é do clã **Neutral**.
2. São os recursos necessários para que a criatura possa ser invocada em campo. Nesse exemplo, a criatura custa uma unidade de **madeira**.
3. Tipo de dano. O tipo de dano vai influenciar no modo como a criatura ataca. Além disso, algumas criaturas podem ser mais resistentes a certos tipos de dano. Os tipos de dano podem variar entre: corpo-a-corpo, à distância, mágico corpo-a-corpo e mágico à distância. Nesse exemplo, a criatura possui o tipo de dano corpo-a-corpo. Para saber mais sobre os tipos de dano, [clique aqui](#teste).
4. Nesse espaço, vai haver duas informações sobre a criatura, que são a **raça** e a **classe**. Nem todas as criaturas possuem classe, nesse caso só será exibida a raça. No exemplo, a criatura possui a raça **Animal** e a classe **Cavaleiro**.
5. Ataque. Representa a quantidade de dano que a criatura pode causar quando atacar um inimigo. Nesse exemplo, a criatura possui 1 de ataque.
6. Retaliação. Representa a quantidade de dano que a criatura pode causar ao contra golpear a criatura que a atacou. A retaliação não ocorre quando a criatura recebe dano maior que sua vida, ou seja, quando receber dano suficiente para destruí-la. Nesse exemplo, a criatura possui 0 de retaliação.
7. Vida. São os pontos de vida da criatura. Quando essa quantidade chegar a zero, ela é destruída e movida para o cemitério. Nesse exemplo, a criatura possui 2 pontos de vida.

### Feitiço
Os feitiços são cartas que possuem efeitos que podem beneficiar ou prejudicar os jogadores. Cada feitiço possui um elemento, que para ser utilizado, o jogar precisa ter uma construção não destruída que possui esse elemento, com exceção dos feitiços do elemento **neutro**. Há um custo para invocar em campo, assim como as criaturas.

Os feitiços são classificados em quatro tipos:
- **Instantâneo -** Feitiço que será utilizado instantaneamente na sua rodada. Eles podem ser para atacar seu oponente ou te bonificar de diversas formas.
- **Permanente -** São feitiços que vão ficar ativo mesmo com o fim da sua rodada. Da mesma forma que os instantâneos, os permanentes podem te bonificar ou prejudicar o oponente.
- **Equipamento -** São cartas que servem para melhorar os atributos ou dar poderes para uma criatura em campo.
- **Armadilha -** São feitiços que podem ser ativados com uma ação do inimigo. Elas são ativadas na sua mão, se haver recursos suficientes e se você quiser.

![](/img/others/spell_card.png)

1. Elemento. O elemento do feitiço. Nesse exemplo, o feitiço é do elemento **luz**.
2. Custo. Os recursos necessários para poder invocar o feitiço. Nesse exemplo, o feitiço custa uma unidade de **mana**.

## Elemento
Os elementos são utilizados nos feitiços. Para poder utilizar um feitiço de um elemento é necessário dominar esse elemento. Para dominar um elemento, o jogador deve possuir uma construção não destruída que possui esse elemento. Os feitiços do elemento **neutro** não necessitam de construção. Existem sete elementos:

|Neutro|Ar|Fogo|Água|Terra|Sombra|Luz|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|![](/img/elements/neutro.png)|![](/img/elements/ar.png)|![](/img/elements/fogo.png)|![](/img/elements/água.png)|![](/img/elements/terra.png)|![](/img/elements/sombra.png)|![](/img/elements/luz.png)|


## Dano
Os tipos de danos são mais uma forma de aumentar a variedade de criaturas. Eles vão dizer de que forma elas vão atacar seus inimigos. Existem criaturas que são imunes a certos tipos de danos, por isso, é importante ter criaturas com diferentes tipos de dano no seu deck.

|Nome|Descrição|Simbolo|
|:-:|:-|:-:|
|Corpo-a-corpo|O dano corpo-a-corpo é um tipo de dano físico. A criatura que possui o dano corpo-a-corpo, só pode atacar criaturas inimigas que estão na sua linha. Se haver mais de uma criatura inimiga na mesma linha, então só pode atacar a criatura da frente. Só pode atacar a construção que está na sua frente e somente se não haver criaturas inimigas na mesma linha.|![](/img/damage/melee_damage.png)|
|À distância|O dano à distância também é do tipo dano físico. A criatura que possui o dano à distância pode atacar qualquer criatura inimiga em campo e não sofrerá retaliação. Além disso, só pode atacar a construção que está na sua frente e somente se não haver criaturas inimigas na mesma linha.|![](/img/damage/ranged_damage.png)|
|Mágico|O dano mágico sempre estará acompanhado ao dano à distância ou ao dano corpo-a-corpo. O dano mágico é efetivo contra criaturas que são imunes ao dano físico.|![](/img/damage/magic_damage.png)|

## Raridade
As cartas possuem um tipo de raridade, sendo a **lendária** a mais rara. Os tipos de raridade são:

|Comum|Incomum|Rara|Épica|Lendária|
|:-:|:-:|:-:|:-:|:-:|
|![](/img/rarity/common.png)|![](/img/rarity/uncommon.png)|![](/img/rarity/rare.png)|![](/img/rarity/epic.png)|![](/img/rarity/legendary.png)|

## Recursos
Os recursos são necessários para poder invocar as cartas em campo. Na sua maioria das vezes, os recursos são produzidos pelas construções, mas também podem ser produzidos por criaturas ou feitiços. Os recursos são:

|Alimento|Madeira|Ouro|Mana|
|:-:|:-:|:-:|:-:|
|![](/img/resources/food.png)|![](/img/resources/wood.png)|![](/img/resources/gold.png)|![](/img/resources/mana.png)|

## Habilidades
Esses são os poderes mais comuns que as criaturas podem possuir:

|Habilidade|Descrição|
|:-|:-|
|Agricultor {X}|Enquanto estiver em campo, a produção de comida aumenta em {X}.|
|Ancorada|Não pode se mover ou ser realocada.|
|Autorreparação|Recupera totalmente seu HP se não atacar durante a sua rodada.|
|Ataque em Área {X}|Ao atacar uma criatura, as criaturas oponentes adjacentes também serão atingidas com {X} de dano.|
|Ataque Duplo|Pode atacar duas vezes no mesmo turno.|
|Anti Feitiço|Não pode receber feitiços de qualquer jogador.|
|Ataque Rápido|Pode mover ou atacar no mesmo turno em que foi posta no campo.|
|Bloqueio {X}|Bloqueia {X} do dano físico recebido.|
|Bruxo {X}|Enquanto estiver em campo, a produção de mana aumenta em {X}.|
|Carga|Ao atacar uma criatura também atinge a criatura que está atrás dela.|
|Curar {X}|No início do seu turno, essa e as criaturas aliadas adjacentes são curadas em {X} ponto(s) de HP.|
|Debilitar {X}|Ao causar dano, a criatura alvo fica debilitada. A criatura debilitada perde {X} de ATK e RET.|
|Drenar|Se cura com o valor causado de dano.|
|Escudo Mágico {X}|Bloqueia {X} do dano mágico recebido.|
|Fúria {X}|Ao receber dano pela primeira vez, Ganha {X} de ATK e RET.|
|Honra {X}|Enquanto estiver em campo, os aliados adjacentes recebem um aumento de {X} de ATK e RET.|
|Imunidade Física|Não pode receber dano físico.|
|Imunidade Mágica|Não pode receber dano mágico.|
|Infectar {X}|Quando causar dano à uma criatura, deixa-a infectada. A criatura infectada sofre {X} de dano em cada final da sua rodada.|
|Irretaliável|Não recebe dano por retaliação.|
|Inalvejável|Não pode receber qualquer tipo de dano de criaturas.|
|Lenhador {X}|Enquanto estiver em campo, a produção de madeira aumenta em {X}.|
|Mercador {X}|Enquanto estiver em campo, a produção de ouro aumenta em {X}.|
|Medo|Para atacar essa criatura, é necessário ter o mesmo ataque ou mais do que ela.|
|Paralisar {X}|Ao causar dano à uma criatura, deixa-a paralisada. Criaturas paralisadas não podem fazer ação durante {X} turno(s).|
|Regenerar {X}|Se cura em {X} ponto(s) de vida ao início da sua rodada.|
|Retribuição|Causa dano de retaliação na criatura que causou dano a ela antes de morrer.|
|Veloz|Pode atacar e mover no mesmo turno.|

