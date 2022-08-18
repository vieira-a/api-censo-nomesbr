# Sobre

Aplicação que consulta a API do IBGE que contém informações de senso anteriores e obtém a frequência de nascimento por década para o nome consultado. Em seguida, um gráfico é montado em tempo real para demonstrar visualmente os resultados.

## Referência da API

[Página API Dados do IBGE](https://servicodados.ibge.gov.br/api/docs/nomes?versao=2)

## Descrição das etapas

### JavaScript

- [x] Criação de protótipo

    - [x] Utilizar a biblioteca Chart.js para renderizar um gráfico "modelo";
    - [x] Simular montagem de dados no gráfico utilizando um objeto JavaScript data = {"chave":valor};

- [ ] Captura e tratamento dos dados

    - [ ] Acessar e obter retorno da API com JavaScript passando um nome como parâmetro;
    - [ ] Criar um novo objeto com chave/valor (década/quantidade) apenas com os dados obtidos da pesquisa para a montagem e exibição das saídas. Exemplo:
    
    nome = {
    "1930":1390,
    "1940":1560
    }

- [ ] Exibição das informações

    - [ ] Exibir informações no HTML inicialmente;

        - [ ] Total por década;
        - [ ] Média de frequência
        - [ ] Década de maior frequência

    - [ ] Criar componente de gráfico para exibir informações.

        - [ ] Total por década;

    - [ ] Criar cards abaixo do gráfico para exibir informações adicionais:
    
        - [ ] Total por década;
        - [ ] Média de frequência
        - [ ] Década de maior frequência
### HTML

- [ ] Criar estrutura base para recebimento das informações;

### CSS

- [ ] Criar layout responsivo para exibição amigável.