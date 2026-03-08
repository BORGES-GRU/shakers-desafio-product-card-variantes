# Desafio Semana 4: Product Card com Variantes e Cart API

## 📝 Descrição do Projeto
[cite_start]Este projeto foi desenvolvido para o desafio da **Shakers**, com foco na criação de um **Product Card customizado** e totalmente independente do formulário nativo da Shopify[cite: 2, 4, 13]. [cite_start]O objetivo é consolidar conhecimentos em Liquid, manipulação de objetos JSON e integração assíncrona com a Cart API[cite: 5, 11].

## 🛠️ Requisitos Implementados
* [cite_start]**Cadastro de Produto:** Produto criado com duas opções (Cor e Tamanho) e suas respectivas variantes[cite: 21, 22].
* [cite_start]**Product Card Customizado:** Construção do arquivo `product-card-custom.liquid` contendo imagem, título, preço dinâmico e seletores[cite: 34, 36, 37].
* [cite_start]**Seleção de Variantes:** Lógica em JavaScript para capturar as opções selecionadas e encontrar a variante correspondente[cite: 46, 49].
* [cite_start]**Add to Cart via JS:** Botão próprio de "Adicionar ao carrinho" integrando com `/cart/add.js`[cite: 58, 60, 62].

## 💻 Lógica e Integração Técnica
### Busca da Variante via JS
* [cite_start]Os dados das variantes são expostos no Liquid através do objeto `product.variants` convertido para JSON[cite: 48].
* [cite_start]No arquivo `product-card.js`, utilizamos o método `.find()` para localizar a variante que corresponde exatamente às opções (Cor e Tamanho) selecionadas pelo usuário[cite: 51, 56].
* [cite_start]Uma vez localizada, o `variant_id` é armazenado e o preço é atualizado dinamicamente na interface[cite: 52, 53].

### Integração com Cart API
* [cite_start]A comunicação com o carrinho utiliza a função `fetch` com o padrão `async/await` para garantir uma melhor organização e legibilidade[cite: 64, 65].
* [cite_start]Implementamos o tratamento básico de erros utilizando blocos `try/catch` para capturar falhas na requisição[cite: 66].
* [cite_start]O uso de `addEventListener` garante que as interações ocorram sem a necessidade de recarregar a página[cite: 55, 85].

## 🚀 Como Testar
1. Clone o repositório.
2. Certifique-se de que o produto com variantes de Cor e Tamanho está ativo na sua loja de teste.
3. No Card de Produto, altere as opções nos menus de seleção.
4. Verifique se o preço atualiza conforme a variante.
5. [cite_start]Clique em "Adicionar ao carrinho" e verifique a confirmação via console ou alerta (sem reload)[cite: 100].

## 🔗 Entrega e Links
* [cite_start]**Link do Pull Request (PR):** [COLE_O_LINK_DO_PR_AQUI] [cite: 101]
* [cite_start]**Link do Vídeo Demonstrativo:** [COLE_O_LINK_DO_VIDEO_AQUI] [cite: 102]

---
Desenvolvido por [Seu Nome] para o desafio Shakers.