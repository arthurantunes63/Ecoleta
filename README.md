# Ecoleta
 Desenvolvimento de uma aplicação web para pesquisa de pontos de coleta de resíduos, no evento **Next Level Week 1.0** da Rocketseat.
 Descreve-se abaixo o processo e aprendizados ao longo deste projeto, sendo este meu primeiro contato direto com CSS e JavaScript.
 
## 1º Dia: Página Inicial
!['Página Inicial'](/screenshots/home.png)
- Delimitação dos elementos por meio de caixas: `Box Model`;
    - Tipo `Inline` (delimitado pelo conteúdo) e `Block` (delimitado pela linha);
    - Toda caixa possui uma série de atributos (largura, altura, espaçamentos, preenchimentos, bordas, cor, fundo, posicionamento, alinhamento).
- Compreensão da "cascata" por meio da referência da sucessão de tags utilizando-se de um identificador único;
  >```html
  ><div id = 'pageHome'>...</div>
  >```
  
  > ```css
  >#pageHome header a span {...}
  >```
- Variáveis globais para modificação de cores de modo dinâmico;
  >```css
  >:root {
  >  --titleColor: #322153;
  >  --primaryColor: #34cb79;
  >```
- Entendimento inicial em relação a disposição dos elementos na interface;
- Estilização das tags HTML vazias por meio do CSS;
- Medidas relacionadas a visualização da página: `vw` (view width) e `vh` (view height);
- Atalho de atributos no CSS;
    - Possibilidade do agrupamento de valores: sentido horário.
      >```css
      > margin: 0 auto;  
      >```
   
      > `Top` > `Right` > `Bottom` > `Left`
      >
      > `Top|Bottom` > `Right|Left`
- Criação de pseudo-elementos diretamente no CSS.
  >```css
  >#pageHome main a span::after {
  >    content: '';
  >    background-image: url(../assets/search.svg);
  >```
  
## 2º Dia: Formulário de cadastro com escolhas limitadas por meio de dados externos
!['Formulário'](/screenshots/form.png)
- Responsividade = adaptação da aplicação a diversos tipos de tela;
  > `@media` - regras para responsividade.
- Compartilhamento de informações entre o arquivos -> fluxo de execução (HTML);
  - Variáveis globais.
- Modificação de coloração de imagens por representação svg, mediante o atributo `stroke = ''`;
- `padding`: responsável pelo preenchimento interno da caixa do elemento;
- Alinhamento interno da caixa dos elementos: `margin`;
- Alinhamento externo da caixa dos elementos: `display: flex;`;
- Modificação do comportamento padrão do CSS: `* {...}`;
- tag `fieldset`: questão mais semântica, uma coleção de campos para o formulário;
- Referência/ligação de label e entrada de dados por meio do atributo `for = ''`
- Aplicação de um mesmo conjunto de estilização para mais de uma tag;
- Operador `+` para referência de atributos;
- Contato superficial com estruturas de dados, repetição e condicionais do JavaScript;
    - for simplificado for(state of states){...};
    - ${} -> interpolar | utilização em uma expressão limitada por uma crase;
    - Orientado a Objetos e de Tipagem Dinâmica;
    - Objeto document = documento que estamos se utilizando (a página inteira);
    - Seleção de elementos por meio de *query*;
      > `document.querySelector('form')`
    - Função anônima (função sem nome);
      > `function{..}`  
      > `() => {}` | = arrow function
      > `arg => return`
    - Objeto json (java script object notation);
    - Função `fetch()` para a utilização de dados externos;
    - Função `then` para fluxo com retorno esperado de funções anteriores.

## 3º Dia: Itens do formulário de cadastro e página de pesquisa de pontos de coleta
!['Iten Selecionados'](/screenshots/selectedItems.png)
!['Pesquisa'](/screenshots/search.png)

## 4º Dia:

## 5º Dia: