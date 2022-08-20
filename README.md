# Sobre

Aplicação que consulta a API do IBGE que contém informações de senso anteriores e obtém a frequência de nascimento por década para o nome consultado. Em seguida, um gráfico é montado em tempo real para demonstrar visualmente os resultados.

## Referência da API

[Página API Dados do IBGE](https://servicodados.ibge.gov.br/api/docs/nomes?versao=2)

## Descrição das etapas

### JavaScript

- [x] Criação de protótipo

    - [x] Utilizar a biblioteca Chart.js para renderizar um gráfico "modelo";
    - [x] Simular montagem de dados no gráfico utilizando um objeto JavaScript data = {"chave":valor};

- [x] Captura e tratamento dos dados

    - [x] Acessar e obter retorno da API com JavaScript passando um nome como parâmetro;
    - [x] Criar um novo objeto com chave/valor (década/quantidade) apenas com os dados obtidos da pesquisa para a montagem e exibição das saídas. Exemplo:
    
    nome = {
    "1930":1390,
    "1940":1560
    }

- [x] Exibição das informações

    - [x] Criar componente de gráfico para exibir informações.

        - [x] Total por década;

    - [x] Criar cards abaixo do gráfico para exibir informações adicionais:

        - [x] Total por década;
        - [x] Média de frequência
        
### HTML

- [x] Criar estrutura base para recebimento das informações;

### CSS

- [x] Criar layout responsivo para exibição amigável.

[Inspiração de layout para o gráfico](https://dribbble.com/shots/17238059-Dashboard-Cards-Light-Dark)

## Prazos

- Início do projeto: 18/08/2022
- Final do projeto: 20/08/2022