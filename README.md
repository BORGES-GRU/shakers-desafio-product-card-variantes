# Desafio Shopify: Product Card Customizado

Este projeto implementa um componente de cartão de produto dinâmico para Shopify, focado em alta performance e experiência do usuário (UX).

## Funcionalidades
- **Seleção Dinâmica de Variantes**: Suporte para múltiplas opções (ex: Ingrediente Ativo e Tamanho).
- **Atualização de Preço em Tempo Real**: Cálculo de preço via JavaScript ao alterar as variantes.
- **Integração com Carrinho**: Adição ao carrinho via `Fetch API` (`/cart/add.js`).
- **Gestão de Estoque**: Desabilitação automática do botão "Adicionar" para variantes esgotadas.
- **Customização**: Integração total com o editor de temas da Shopify via `Schema`.

## Estrutura Técnica
- `snippets/product-card-custom.liquid`: Componente responsável pela estrutura HTML e injeção do JSON de variantes.
- `sections/product-grid.liquid`: Seção configurável para seleção de coleções.
- `assets/product-card.js`: Lógica de negócio, manipulação de variantes e chamadas assíncronas.
- `assets/product-card.css`: Estilização responsiva.