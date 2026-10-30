# Jornada Tucumã · Sistematização

Site estático com a sistematização do caso Jornada Tucumã (Grupo Trigo e Instituto Arapyaú), versão 1, outubro de 2026.

## Conteúdo

O site tem uma capa e seis painéis, navegáveis pelo índice à esquerda:

1. Síntese: a tese, a metodologia e o veredito sobre viabilidade
2. Fluxo: como um ingrediente da floresta entra no Grupo Trigo
3. Teses e mensagens
4. Fatores críticos de sucesso
5. Viabilidade econômica
6. Indicadores

Cada painel tem endereço próprio (por exemplo, `index.html#fluxo`).

## Estrutura

```
index.html            página única, com todos os painéis
assets/css/style.css  estilos, com modo claro e escuro
assets/js/app.js      navegação entre painéis e zoom do fluxo
.nojekyll             publica os arquivos como estão no GitHub Pages
```

Não há etapa de build nem dependências. As fontes (Archivo e IBM Plex Sans) são carregadas do Google Fonts.

## Como publicar no GitHub Pages

1. Envie estes arquivos para a raiz do repositório (ou para uma pasta `docs/`).
2. No repositório, abra **Settings > Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch**, selecione a branch `main` e a pasta `/ (root)` ou `/docs`.
4. Salve. O endereço aparece na mesma página depois de alguns minutos.

Para ver localmente, basta abrir `index.html` no navegador.

## Atenção: material interno

O conteúdo traz dados internos do Grupo Trigo (valores de compra, fornecedores, preços) e leituras ainda a validar com Maria Paula. Num repositório público, o site fica visível para qualquer pessoa. Prefira um repositório privado; o GitHub Pages em repositórios privados exige plano pago (GitHub Pro, Team ou Enterprise). A página já pede aos buscadores que não a indexem, mas isso não impede o acesso a quem tiver o link.

## Fontes

Atas e transcrições das conversas com Maria Paula (22/09, 01/10, 14/10 e 27/10/2026); deck "Tucumã Amazônia 2030"; ficha Arapyaú do 1º semestre de 2026; planilha de volumes 2026; documento de indicadores prioritários.
