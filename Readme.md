## Aprendendo sobre NextJS

O NextJS é um framework que utiliza a lib react para desenvolvimento de aplicações web. O seu maior foco é o ambiente de produção, pois o mesmo possui uma vasta gama de configurações e ajustes in-box para facilitar a nossa vida no desenvolvimento de SPAS e tratamento de SSR (Server-side Rendering).

### 1. Como estrutura de pastas e organização.

- SRC => Source
- Pages - Por padrão o next sempre busca por arquivos de templates na página pages.
- Arquivos com \_(underline) => São arquivos ignorados pelo next na indexação de rotas, ou seja, as rotas são geradas de acordo com a estrutura de pastas e nomes de arquivo, explicarei melhor mais a frente.

#### 1.2 Suporte ao TypeScript.

O suporte a typescript é muito fluido, basta criar o arquivo tsconfig e começar a utilizadar, renomeando os arquivos para .tsx.

### 2. Rotas.

As rotas são bem gerenciadas no NextJS, visando a abstração e a não dependência de libs externas (Ex: react-router-dom). O next trata muito bem o esquema de rotas em sua API, basta criar a estrutura de pastas na seguinte estrutura:

- pastas => rota
- carrinho/index.tsx => http://my-app.dev/carrinho
- minha-conta/lista-de-desejos/index.tsx => http://my-app.dev/minha-conta/lista-de-desejos

#### 2.1 Rotas Dinâmicas.

Rotas dinâmicas e com parâmetros podem ser utilizadas fácilmente no NextJS. Com apenas uma flag no arquivo .tsx|jsx é possível deixar a rota customizável. Ao criar um arquivo "[meuparam].tsx" de acordo com a estrutura de pasta desejada, ao acessar o hook router da lib next/router a propriedade já estara disponível no objeto _router.query.meuparam_. Além dos _route params_ é possível acessar também os _query params_ através deste objeto.

### 3. Styled components e contexto de renderização SSR.

### 4. Client-side fetching

Chamadas a api realizadas pelo browser, normalmente são informações que não existem a necessidade de serem indexadas pelos motores de busca. Normalmente utilizaremos o fetchApi, axios ou SWR da própria vercel.

### 5. Server-side fetching

As chamadas api são feitas pelo next no lado do servidor. O conteúdo renderizado com os dados é enviado para o client e assim tornando o conteúdo estático. Facilitando para que os motores de busca indexem a página com dados cabivéis para a indexação.

### 6. Static site generation

Funcionalidade presente no gatsbyjs que foi implementada no next, para a criação de conteúdo estático que não necessitam de muitas atualizações,
deixando o conteúdo estático no site.

#### 6.1 Props

Propriedades estáticas injetadas na function components, para serem utilizadas na página.

#### 6.2 Revalidate

Tempo em que o next precisa revalidar a nova versão da página. Este método de data fatching performa muito bem para várias requisições simulâneas.

#### 6.3 Fallback

Sempre que for utilizada uma rota que não foi gerada estáticamente, ele vai gerar para nós.
