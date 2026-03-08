# Shakers Desafio: Product Card com Variantes Dinâmicas

Este repositório contém a solução desenvolvida para o desafio de implementação de um **Product Card customizado** para Shopify. O foco foi criar uma experiência de compra independente, utilizando a Cart API e lógica de manipulação de variantes em tempo real.

## Funcionalidades Implementadas
* **Seleção Dinâmica de Variantes**: O componente detecta automaticamente as opções (Ingrediente e Tamanho) configuradas no Admin e gera seletores dinâmicos.
* **Atualização de Preço em Tempo Real**: Utiliza JavaScript para buscar a variante correspondente no JSON injetado e atualizar o preço sem recarregar a página.
* **Botão Adicionar ao Carrinho Customizado**: Integração direta com a rota `/cart/add.js` usando `fetch` e `async/await`, garantindo uma experiência de usuário fluida.
* **Gestão de Estoque**: O sistema verifica a disponibilidade da variante selecionada e desabilita automaticamente o botão de compra caso o item esteja esgotado.

## Tecnologias e Lógica
* **Liquid**: Utilizado para renderizar a estrutura HTML do card e injetar os dados do produto (incluindo o JSON de variantes).
* **JavaScript (ES6+)**:
    * Captura os valores dos seletores (`querySelectorAll`).
    * Busca a variante exata através do método `.find()` no array de variantes.
    * Tratamento de promessas com `async/await` e `try/catch` para a comunicação com a Shopify Cart API.
* **CSS**: Estilização responsiva focada em componentes (Card, Selects e Botão).

## Como Testar
1. **Configuração**: Certifique-se de ter um produto com pelo menos duas opções de variantes criadas no seu Shopify Admin.
2. **Seção**: No editor de temas da Shopify, adicione a seção "Product Grid" em uma página.
3. **Seleção**: Escolha a coleção desejada no painel de configurações da seção.
4. **Interação**: No frontend, altere os menus de Ingrediente e Tamanho e observe o preço sendo atualizado instantaneamente.
5. **Carrinho**: Clique em "Adicionar ao carrinho" e verifique a confirmação da adição.

## Links Obrigatórios
* **Pull Request**: https://github.com/BORGES-GRU/shakers-desafio-product-card-variantes/pull/1
* **Vídeo Demonstrativo**: 
