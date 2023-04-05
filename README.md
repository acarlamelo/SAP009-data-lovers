# Data Lovers

## Índice

* [1. Preâmbulo](#1-preâmbulo)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Objetivos de aprendizagem](#3-objetivos-de-aprendizagem)
* [4. Considerações gerais](#4-considerações-gerais)
* [5. Histórias de usuário](#5-Desenho-de-interface-do-usuário)
* [6. Considerações técnicas](#6-considerações-técnicas)
* [7. Checklist](#7-checklist)

***

1. Preâmbulo

Segundo a Forbes 90% dos dados que existem hoje foram gerados durante os últimos dois anos. A cada dia geramos 2.5 milhões de terabytes de dados, uma cifra sem precedentes.

Apesar disso, os dados por si só são de pouca utilidade. Para que essas grandes quantidades de dados se convertam em informação compreensível para os usuários, precisamos entender e processar estes dados. Uma forma simples de fazer isso é criando interfaces e visualizações.

Na imagem seguinte, você pode ver como os dados que estão na parte esquerda podem ser usados para construir a interface amigável e compreensível que está na parte direita.

json-interface
2. Resumo do projeto

Neste projeto você construirá uma página web para visualizar um conjunto (set) de dados que se adeque às necessidades de seu usuário.

Como entregável final terá uma página web que permita visualizar dados, filtrá-los, ordená-los e fazer algum cálculo agregado. Por cálculo agregado nos referimos aos diversos cálculos que podem ser feitos com os dados para mostrar a informação mais relevante para os usuários (médias, valores máximos e mínimos, etc).

Para este projeto trazemos uma série de dados de temáticas diferentes para que você explore e decida com qual delas deseja trabalhar. Escolhemos especificamente estes conjuntos de dados porque cremos que se adequem bem a esta etapa de sua aprendizagem.

Uma vez que você defina sua área de interesse, busque entender quem é seu usuário e o que exatamente ele necessita saber ou ver, para que assim possa construir a interface que o ajude a interagir e entender melhor os dados.

Este são os dados que contém nesse projeto:
Harry Potter. Este conjunto nos fornece uma lista dos personagens, livros e feitiços de toda a saga Harry Potter Harry Potter.
Pesquisa com seguidores de Harry Potter e quantidades de personagens masculinos e femininos de cada casa.

O objetivo principal deste projeto é que o usuário(fãs de Harry Potter e sua turma) poderiam usar o nosso site a qualquer momento, mas é provável que o façam principalmente durante seu tempo livre, para aprender mais sobre Harry Potter ou simplesmente satisfazer sua curiosidade. Também é possível que os usuários usem o produto antes ou depois de assistir um filme ou ler um livro relacionado a Harry Potter, para obter informações sobre personagens e eventos no mundo de Harry Potter.

3. Objetivos de aprendizagem
HTML

    Uso de HTML semântico

CSS

    Uso de seletores de CSS
    Modelo de caixa (box model): borda, margem, preenchimento
    Uso de flexbox em CSS

Web APIs

    Uso de seletores de DOM
    Manipulação de eventos de DOM (listeners, propagação, delegação)
    Manipulação dinâmica de DOM

JavaScript

    Diferenciar entre tipos de dados primitivos e não primitivos
    Arrays (arranjos)
    Objetos (key, value)
    Variáveis (declaração, atribuição, escopo)
    Uso de condicionais (if-else, switch, operador ternário, lógica booleana)
    Uso de laços (while, for, for..of)
    Funções (params, args, return)
    Testes unitários (unit tests)
    Módulos de ECMAScript (ES modules)
    Uso de linter (ESLINT)
    Uso de identificadores descritivos (Nomenclatura e Semântica)
    Diferença entre expressões (expressions) e declarações (statements)

Controle de Versões (Git e GitHub)

    Git: Instalação e configuração

    Git: Controle de versão com git (init, clone, add, commit, status, push, pull, remote)

    Git: Integração de mudanças entre ramos (branch, checkout, fetch, merge, reset, rebase, tag)

    GitHub: Criação de contas e repositórios, configuração de chave SSH

    GitHub: Implantação com GitHub Pages

    GitHub: Colaboração pelo Github (branches | forks | pull requests | code review | tags)

Centrado no usuário

    Desenhar e desenvolver um produto ou serviço colocando as usuárias no centro

Design de produto

    Criar protótipos para obter feedback e iterar

    Aplicar os princípios de desenho visual (contraste, alinhamento, hierarquia)

Pesquisa

    Planejar e executar testes de usabilidade

4. Considerações gerais

    Este projeto foi executado em dupla( Carla Melo e Edelice Gonzalez)

5. Histórias de usuário

![image](https://user-images.githubusercontent.com/119886217/230214927-d992960b-a6c4-41b7-a634-4f5c699e3f03.png)

Os principais usuários do produto seriam fãs da saga de Harry Potter, interessados em saber mais sobre os personagens, casas, rol e status no mundo de Harry Potter. Os dados mais relevantes que os usuários desejariam ver na interface podem incluir: Nome e descrição detalhada dos personagens de Harry Potter. Casa a que os personagens pertencem. Rol, status no mundo de Harry Potter. Dados relacionados aos personagens e eventos importantes no mundo de Harry Potter.

Os objetivos dos usuários em relação ao produto podem incluir: Obter informações detalhadas sobre os personagens da saga, incluindo sua casa, rol, entre outros. Conhecer mais sobre o mundo de Harry Potter e seus personagens através de uma interface intuitiva e fácil de usar. Ter acesso a informações atualizadas e verificadas sobre Harry Potter, incluindo detalhes sobre personagens, eventos e outros aspectos do mundo de Harry Potter.

#### Desenho de interface do usuário

Protótipo de baixa fidelidade

![image](https://user-images.githubusercontent.com/119886217/230214971-581549e6-7630-4fe0-abc3-7c973f70eca8.png)

Protótipo de alta fidelidade
![image](https://user-images.githubusercontent.com/119886217/230215098-fa5a30ec-b4cb-4772-99c0-e9345ffc4094.png)

Testes de usabilidade

Durante o desafio você deverá fazer testes de usabilidade com usuários
diferentes, e com base nos resultados desses testes, iterar seus desenhos de
interface. Conte-nos quais problemas de usabilidade você detectou através dos
testes e como os resolveu na proposta final.

### Implementação da interface de usuário (HTML/CSS/JS)

Bem sucedido, um pouco diferente do esperado.

### Testes unitários

O _boilerplate_ do projeto não inclui testes unitários. Assim, tivemos que
escrever nossos próprios testes para as funções encarregadas de _processar_,
_filtrar_ e _ordenar_ os dados, assim como _calcular_ estatísticas.

Nossos testes unitários ter cobertura mínima de 70% de _statements_
(_sentenças_), _functions_ (_funções_), _lines_ (_linhas_), e _branches_
(_ramos_) do arquivo `src/data.js`, com suas funções e que está
detalhado na seção de [Considerações técnicas](#srcdatajs).

## 6. Considerações técnicas

A lógica do projeto foi implementada somente em JavaScript (ES6), HTML e
CSS. Neste projeto não está permitido o uso de bibliotecas e frameworks, apenas
[vanilla
JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e),
com exceção das bibliotecas para gráficos (ver [_Parte
opcional_](#6-hacker-edition) acima).

O _boilerplate_ contém uma estrutura de arquivos como ponto de partida, assim
como toda a configuração de dependências:

```text
.
├── EXTRA.md
├── README.md
├── package.json
├── src
|  ├── data (de acordo com o data que forem trabalhar)
|  |  ├── lol
|  |  |  ├── lol.js
|  |  |  ├── lol.json
|  |  |  └── README.md
|  |  ├── pokemon
|  |  |  ├── pokemon.js
|  |  |  ├── pokemon.json
|  |  |  └── README.md
|  |  └── rickandmorty
|  |  |  ├── rickandmorty.js
|  |  |  ├── rickandmorty.json
|  |  |  └── README.md
|  |  └── athletes
|  |  |  ├── athletes.js
|  |  |  ├── athletes.json
|  |  |  └── README.md
|  |  └── ghibli
|  |  |  ├── ghibli.js
|  |  |  ├── ghibli.json
|  |  |  └── README.md
|  |  └── harrypotter
|  |  |  ├── data.js
|  |  |  ├── harry.json
|  |  |  └── README.md

|  ├── data.js
|  ├── index.html
|  ├── main.js
|  └── style.css
└── test
   └── data.spec.js

directory: 7 file: 20
```

### `src/index.html`

Como no projeto anterior, existe um arquivo `index.html`. Como já sabe, aqui
entra a página que vai ser exibida ao usuário. Também serve para indicar quais
scripts serão utilizados e juntar tudo o que foi feito.

### `src/main.js`


O coração deste projeto é a manipulação de dados através de arrays e objetos.

Este arquivo contem toda a funcionalidade que corresponde a
obter, processar e manipular dados (suas funções):

* `filterData(data, condition)`: esta função recebe os dados e nos retorna
  os que cumprem com a condição.

* `sortData(data, sortBy, sortOrder)`: esta função recebe três parâmetros. O
  primeiro, `data`, nos entrega os dados. O segundo, `sortBy`, diz respeito a
  qual das informações quer usar para ordenar. O terceiro, `sortOrder`, indica
  se quer ordenar de maneira crescente ou decrescente.

* `computeStats(data)`: essa função nos permite fazer cálculos estatísticos
  básicos para serem exibidos de acordo com o que os dados permitem.

### `src/data`

Nesta pasta temos os dados dos livros da saga Harry Potter

### `test/data.spec.js`

Fizemos os testes unitários das funções implementadas no arquivo
`data.js`.

***

## 7. Checklist

* [x] Usar VanillaJS.
* [x] Passa pelo linter (`npm run pretest`)
* [x] Passa pelos testes (`npm test`)
* [x] Testes unitários cobrem um mínimo de 70% de statements, functions, lines e
  branches.
* [x] Inclui uma _definição de produto_ clara e informativa no `README.md`.
* [x]Inclui histórias de usuário no `README.md`.
* [x] Inclui rascunho da solução (protótipo de baixa fidelidade) no `README.md`.
* [x] Inclui uma lista de problemas detectados nos testes de usabilidade no
  `README.md`.
* [x] UI: Mostra lista/tabela/etc com dados e/ou indicadores.
* [x] UI: Permite ordenar dados por um ou mais campos (asc e desc).
* [x] UI: Permite filtrar dados com base em uma condição.
* [x] UI: É _responsivo_.
