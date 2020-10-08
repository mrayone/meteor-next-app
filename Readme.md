## Aprendendo sobre NextJS

O NextJS é um framework que utiliza a lib react para desenvolvimento de aplicações web. O seu maior foco é o ambiente de produção, pois o mesmo possui uma vasta gama de configurações e ajustes in-box para facilitar a nossa vida no desenvolvimento de SPAS e tratamento de SSR (Server-side Rendering).

### 1. Como estrutura de pastas e organização.

#### 1.2 Suporte ao TypeScript.

### 2. Rotas.

#### 2.1 Rotas Dinâmicas.

### 3. Styled components e contexto de renderização SSR.

### 4. Client-side fetching

Chamadas a api realizadas pelo browser, normalmente são informações que não existem a necessidade de serem indexadas pelos motores de busca. Normalmente utilizaremos o fetchApi, axios ou SWR da própria vercel.

### 5. Server-side fetching

### 6. Static site generation

Funcionalidade presente no gatsbyjs que foi implementada no next, para a criação de conteúdo estático que não necessitam de muitas atualizações,
deixando o conteúdo estático no site.

#### 6.1 Props

Propriedades estáticas injetadas na function components, para serem utilizadas na página.

#### 6.2 Revalidate

Tempo em que o next precisa revalidar a nova versão da página. Este método de data fatching performa muito bem para várias requisições simulâneas.
