# Litte-hope
Portal web interativo de uma cidade fictícia dos anos 1960, combinando narrativa ambiental, exploração e mistério em uma experiência imersiva.

# Little Hope

> Uma cidade fictícia dos anos 1960 apresentada como um portal municipal real, explorável e cheio de histórias escondidas.

![Little Hope — Main Street](./little-hope-main-street.png)

<p align="center">
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-semântico-E34F26?style=flat-square&logo=html5&logoColor=white">
  <img alt="CSS3" src="https://img.shields.io/badge/CSS3-responsivo-1572B6?style=flat-square&logo=css3&logoColor=white">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?style=flat-square&logo=javascript&logoColor=111">
  <img alt="Status" src="https://img.shields.io/badge/status-MVP-315A45?style=flat-square">
</p>

## Sobre o projeto

**Little Hope** é uma experiência web narrativa ambientada em uma pequena cidade americana de um universo alternativo inspirado na década de 1960.

À primeira vista, o projeto se apresenta como o site oficial de uma cidade acolhedora: possui informações turísticas, avisos públicos, mapa municipal, diretório de moradores e documentos históricos. Conforme o visitante explora o conteúdo, pequenas contradições começam a surgir em fotografias, datas, notícias e registros públicos.

A narrativa não é explicada diretamente. Ela é construída por meio do ambiente, incentivando a curiosidade e permitindo que cada visitante descubra a cidade no próprio ritmo.

### Demonstração

**Acesse a versão publicada:** [green-hope-laurel.iamdarckenss.chatgpt.site]()

> A demonstração ainda utiliza o endereço original da primeira versão do projeto.

## Objetivos

O projeto foi criado para funcionar simultaneamente como:

- experiência narrativa e cenário de RPG;
- cidade fictícia explorável;
- estudo de narrativa ambiental;
- demonstração profissional de desenvolvimento Front-end;
- exercício de design responsivo, acessibilidade e interação.

O principal objetivo é fazer o visitante questionar, por alguns instantes, se Little Hope realmente existe.

## Principais recursos

- Portal municipal inspirado em sites oficiais e guias turísticos americanos.
- Direção visual baseada em fotografias analógicas e na estética editorial dos anos 1950 e 1960.
- Mapa interativo com movimentação, zoom e filtros por categoria.
- Oito locais exploráveis, cada um com endereço, horário, telefone e informações próprias.
- Diretório de moradores integrado naturalmente ao universo fantástico.
- Notícias, comunicados públicos e eventos da comunidade.
- Arquivo municipal com fotografias, jornais e documentos históricos.
- Mistérios apresentados por meio de inconsistências discretas.
- Layout adaptado para computadores, tablets e celulares.
- Navegação por teclado e suporte a preferência de movimento reduzido.
- Funcionamento sem frameworks, banco de dados, login ou processo de build.

## Experiência interativa

O mapa municipal permite:

- arrastar para navegar pela cidade;
- usar a roda do mouse ou os controles para aplicar zoom;
- restaurar a visualização inicial;
- filtrar locais por categoria;
- selecionar pontos de interesse;
- consultar informações atualizadas no painel lateral.

O menu responsivo, os filtros e os controles do mapa foram implementados com JavaScript puro.

## Tecnologias

| Tecnologia | Utilização |
| --- | --- |
| HTML5 | Estrutura semântica, conteúdo e acessibilidade |
| CSS3 | Layout, responsividade, animações e ilustrações do mapa |
| JavaScript | Menu, filtros, seleção de locais, zoom e movimentação |
| JSON | Organização conceitual dos dados da cidade na versão completa |

Não há dependências externas obrigatórias. A versão estática pode ser executada diretamente no navegador.

## Estrutura do projeto

```text
little-hope/
├── little-hope.html              # Estrutura e conteúdo da página
├── little-hope.css               # Estilos, responsividade e mapa
├── little-hope.js                # Interações e dados da experiência
├── little-hope-main-street.png   # Fotografia principal da cidade
└── README.md                    # Documentação do projeto
```

## Como executar

### Opção 1 — Abrir diretamente

1. Baixe ou clone o repositório.
2. Mantenha todos os arquivos na mesma pasta.
3. Abra `little-hope.html` em um navegador moderno.

### Opção 2 — Servidor local

Se você utiliza o Visual Studio Code, pode abrir o projeto com a extensão **Live Server**.

Também é possível iniciar um servidor local com Python:

```bash
python -m http.server 8000
```

Depois, acesse:

```text
http://localhost:8000/little-hope.html
```

## Direção visual

A identidade de Little Hope combina referências de:

- portais municipais e sites de turismo dos Estados Unidos;
- mapas turísticos impressos;
- fotografia documental em filme colorido;
- arquitetura suburbana americana;
- materiais editoriais e documentos públicos de época.

A interface utiliza tons de verde, creme, areia e vermelho envelhecido. A tipografia serifada reforça o aspecto institucional, enquanto texturas discretas ajudam a reproduzir a sensação de material impresso.

Nenhum elemento da interface apresenta o projeto como um jogo. A intenção é preservar a ilusão de que o visitante encontrou o portal oficial de uma cidade real.

## Narrativa ambiental

Little Hope não utiliza missões, pontuação ou objetivos explícitos. A história pode ser descoberta através de:

- datas incompatíveis;
- fotografias arquivadas incorretamente;
- notícias que contradizem registros públicos;
- horários e acontecimentos incomuns;
- mudanças sutis na história dos locais;
- documentos com detalhes aparentemente impossíveis.

Esses elementos foram mantidos discretos para que o mistério cresça naturalmente durante a exploração.

## Acessibilidade

O projeto inclui:

- elementos HTML semânticos;
- link para pular diretamente ao conteúdo principal;
- nomes acessíveis nos controles do mapa;
- estados informados com `aria-expanded`, `aria-pressed` e `aria-live`;
- indicadores de foco visíveis;
- controles utilizáveis por teclado;
- contraste adequado entre texto e fundo;
- comportamento alternativo para `prefers-reduced-motion`.

## Responsividade

O layout possui adaptações específicas para:

- monitores e notebooks;
- tablets;
- celulares;
- navegação por toque no mapa.

Em telas menores, o menu é recolhido, as seções passam a utilizar uma única coluna e o painel do mapa é reorganizado para preservar a legibilidade.

## Roadmap

### Versão 1 — Protótipo estático

- [x] Identidade visual da cidade
- [x] Página inicial responsiva
- [x] Mapa interativo
- [x] Locais e informações municipais
- [x] Diretório inicial de moradores
- [x] Notícias e documentos históricos
- [x] Primeiras pistas narrativas

### Versão 2 — Conteúdo dinâmico

- [ ] Migrar dados para arquivos JSON independentes
- [ ] Criar páginas individuais para cada local
- [ ] Adicionar galerias e documentos ampliáveis
- [ ] Expandir o diretório de moradores
- [ ] Implementar busca municipal
- [ ] Salvar favoritos e descobertas localmente

### Versão 3 — Cidade persistente

- [ ] Integrar banco de dados e autenticação
- [ ] Registrar progresso individual
- [ ] Criar documentos desbloqueáveis
- [ ] Adicionar eventos e atualizações da cidade
- [ ] Desenvolver painel administrativo
- [ ] Integrar campanhas e sessões de RPG

## Possíveis expansões

- páginas próprias para prefeitura, biblioteca, diner, cinema, hospital e estação;
- programação de rádio local;
- edições completas do jornal municipal;
- sistema de horários e rotinas dos moradores;
- exploração por bairros;
- linha do tempo histórica;
- eventos sazonais;
- versões alternativas de documentos e fotografias.

## Contribuição

Sugestões e melhorias são bem-vindas. Para contribuir:

1. Faça um fork do projeto.
2. Crie uma branch para sua alteração:

   ```bash
   git checkout -b feature/minha-melhoria
   ```

3. Faça o commit das mudanças:

   ```bash
   git commit -m "feat: adiciona nova funcionalidade"
   ```

4. Envie a branch para o seu fork e abra um Pull Request.

## Licença

Este projeto foi desenvolvido para fins de portfólio e experimentação narrativa. Antes de permitir redistribuição ou uso comercial, adicione ao repositório uma licença que represente as condições desejadas.

---

<p align="center">
  <strong>Little Hope</strong><br>
  <em>“A good place to call home.”</em>
</p>
# Little Hope

> Uma cidade fictícia dos anos 1960 apresentada como um portal municipal real, explorável e cheio de histórias escondidas.

![Little Hope — Main Street](./little-hope-main-street.png)

<p align="center">
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-semântico-E34F26?style=flat-square&logo=html5&logoColor=white">
  <img alt="CSS3" src="https://img.shields.io/badge/CSS3-responsivo-1572B6?style=flat-square&logo=css3&logoColor=white">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?style=flat-square&logo=javascript&logoColor=111">
  <img alt="Status" src="https://img.shields.io/badge/status-MVP-315A45?style=flat-square">
</p>

## Sobre o projeto

**Little Hope** é uma experiência web narrativa ambientada em uma pequena cidade americana de um universo alternativo inspirado na década de 1960.

À primeira vista, o projeto se apresenta como o site oficial de uma cidade acolhedora: possui informações turísticas, avisos públicos, mapa municipal, diretório de moradores e documentos históricos. Conforme o visitante explora o conteúdo, pequenas contradições começam a surgir em fotografias, datas, notícias e registros públicos.

A narrativa não é explicada diretamente. Ela é construída por meio do ambiente, incentivando a curiosidade e permitindo que cada visitante descubra a cidade no próprio ritmo.

### Demonstração

**Acesse a versão publicada:** [green-hope-laurel.iamdarckenss.chatgpt.site](https://green-hope-laurel.iamdarckenss.chatgpt.site)

> A demonstração ainda utiliza o endereço original da primeira versão do projeto.

## Objetivos

O projeto foi criado para funcionar simultaneamente como:

- experiência narrativa e cenário de RPG;
- cidade fictícia explorável;
- estudo de narrativa ambiental;
- demonstração profissional de desenvolvimento Front-end;
- exercício de design responsivo, acessibilidade e interação.

O principal objetivo é fazer o visitante questionar, por alguns instantes, se Little Hope realmente existe.

## Principais recursos

- Portal municipal inspirado em sites oficiais e guias turísticos americanos.
- Direção visual baseada em fotografias analógicas e na estética editorial dos anos 1950 e 1960.
- Mapa interativo com movimentação, zoom e filtros por categoria.
- Oito locais exploráveis, cada um com endereço, horário, telefone e informações próprias.
- Diretório de moradores integrado naturalmente ao universo fantástico.
- Notícias, comunicados públicos e eventos da comunidade.
- Arquivo municipal com fotografias, jornais e documentos históricos.
- Mistérios apresentados por meio de inconsistências discretas.
- Layout adaptado para computadores, tablets e celulares.
- Navegação por teclado e suporte a preferência de movimento reduzido.
- Funcionamento sem frameworks, banco de dados, login ou processo de build.

## Experiência interativa

O mapa municipal permite:

- arrastar para navegar pela cidade;
- usar a roda do mouse ou os controles para aplicar zoom;
- restaurar a visualização inicial;
- filtrar locais por categoria;
- selecionar pontos de interesse;
- consultar informações atualizadas no painel lateral.

O menu responsivo, os filtros e os controles do mapa foram implementados com JavaScript puro.

## Tecnologias

| Tecnologia | Utilização |
| --- | --- |
| HTML5 | Estrutura semântica, conteúdo e acessibilidade |
| CSS3 | Layout, responsividade, animações e ilustrações do mapa |
| JavaScript | Menu, filtros, seleção de locais, zoom e movimentação |
| JSON | Organização conceitual dos dados da cidade na versão completa |

Não há dependências externas obrigatórias. A versão estática pode ser executada diretamente no navegador.

## Estrutura do projeto

```text
little-hope/
├── little-hope.html              # Estrutura e conteúdo da página
├── little-hope.css               # Estilos, responsividade e mapa
├── little-hope.js                # Interações e dados da experiência
├── little-hope-main-street.png   # Fotografia principal da cidade
└── README.md                    # Documentação do projeto
```

## Como executar

### Opção 1 — Abrir diretamente

1. Baixe ou clone o repositório.
2. Mantenha todos os arquivos na mesma pasta.
3. Abra `little-hope.html` em um navegador moderno.

### Opção 2 — Servidor local

Se você utiliza o Visual Studio Code, pode abrir o projeto com a extensão **Live Server**.

Também é possível iniciar um servidor local com Python:

```bash
python -m http.server 8000
```

Depois, acesse:

```text
http://localhost:8000/little-hope.html
```

## Direção visual

A identidade de Little Hope combina referências de:

- portais municipais e sites de turismo dos Estados Unidos;
- mapas turísticos impressos;
- fotografia documental em filme colorido;
- arquitetura suburbana americana;
- materiais editoriais e documentos públicos de época.

A interface utiliza tons de verde, creme, areia e vermelho envelhecido. A tipografia serifada reforça o aspecto institucional, enquanto texturas discretas ajudam a reproduzir a sensação de material impresso.

Nenhum elemento da interface apresenta o projeto como um jogo. A intenção é preservar a ilusão de que o visitante encontrou o portal oficial de uma cidade real.

## Narrativa ambiental

Little Hope não utiliza missões, pontuação ou objetivos explícitos. A história pode ser descoberta através de:

- datas incompatíveis;
- fotografias arquivadas incorretamente;
- notícias que contradizem registros públicos;
- horários e acontecimentos incomuns;
- mudanças sutis na história dos locais;
- documentos com detalhes aparentemente impossíveis.

Esses elementos foram mantidos discretos para que o mistério cresça naturalmente durante a exploração.

## Acessibilidade

O projeto inclui:

- elementos HTML semânticos;
- link para pular diretamente ao conteúdo principal;
- nomes acessíveis nos controles do mapa;
- estados informados com `aria-expanded`, `aria-pressed` e `aria-live`;
- indicadores de foco visíveis;
- controles utilizáveis por teclado;
- contraste adequado entre texto e fundo;
- comportamento alternativo para `prefers-reduced-motion`.

## Responsividade

O layout possui adaptações específicas para:

- monitores e notebooks;
- tablets;
- celulares;
- navegação por toque no mapa.

Em telas menores, o menu é recolhido, as seções passam a utilizar uma única coluna e o painel do mapa é reorganizado para preservar a legibilidade.

## Roadmap

### Versão 1 — Protótipo estático

- [x] Identidade visual da cidade
- [x] Página inicial responsiva
- [x] Mapa interativo
- [x] Locais e informações municipais
- [x] Diretório inicial de moradores
- [x] Notícias e documentos históricos
- [x] Primeiras pistas narrativas

### Versão 2 — Conteúdo dinâmico

- [ ] Migrar dados para arquivos JSON independentes
- [ ] Criar páginas individuais para cada local
- [ ] Adicionar galerias e documentos ampliáveis
- [ ] Expandir o diretório de moradores
- [ ] Implementar busca municipal
- [ ] Salvar favoritos e descobertas localmente

### Versão 3 — Cidade persistente

- [ ] Integrar banco de dados e autenticação
- [ ] Registrar progresso individual
- [ ] Criar documentos desbloqueáveis
- [ ] Adicionar eventos e atualizações da cidade
- [ ] Desenvolver painel administrativo
- [ ] Integrar campanhas e sessões de RPG

## Possíveis expansões

- páginas próprias para prefeitura, biblioteca, diner, cinema, hospital e estação;
- programação de rádio local;
- edições completas do jornal municipal;
- sistema de horários e rotinas dos moradores;
- exploração por bairros;
- linha do tempo histórica;
- eventos sazonais;
- versões alternativas de documentos e fotografias.

## Contribuição

Sugestões e melhorias são bem-vindas. Para contribuir:

1. Faça um fork do projeto.
2. Crie uma branch para sua alteração:

   ```bash
   git checkout -b feature/minha-melhoria
   ```

3. Faça o commit das mudanças:

   ```bash
   git commit -m "feat: adiciona nova funcionalidade"
   ```

4. Envie a branch para o seu fork e abra um Pull Request.

## Licença

Este projeto foi desenvolvido para fins de portfólio e experimentação narrativa. Antes de permitir redistribuição ou uso comercial, adicione ao repositório uma licença que represente as condições desejadas.

---

<p align="center">
  <strong>Little Hope</strong><br>
  <em>“A good place to call home.”</em>
</p>
