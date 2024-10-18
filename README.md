
# Projeto de Automação de Testes com Cypress

Este projeto é uma automação de teste utilizando **Cypress** e o padrão de design **Page Objects**, com o objetivo de cumprir o desafio 4 da **Mentoria em Testes de Software do Julio de Lima**. O foco da automação é validar a funcionalidade de login.

## Referências
Automação de Testes com Cypress
- https://alexalvess.medium.com/testes-e2e-com-cypress-d1f6bc415b5d

Cypress com Page Objects
- https://vitormarinheiroautomation.medium.com/cypress-page-object-sucesso-6841cb7c19a0/


## Instalação do Cypress

Para instalar o Cypress no projeto, siga os comandos abaixo:

```bash
npm init -y
npm install cypress --save-dev
```

## Estrutura do Projeto

O projeto está organizado com as seguintes pastas:

```
/cypress
   /e2e         -> Testes E2E
   /pages       -> Implementação do Page Object Model (POM)
   /support     -> Suporte e configurações do Cypress
```

## Criação do arquivo de variáveis de ambiente

Crie um arquivo `cypress.env.json` para armazenar os dados de usuário:

```json
{
  "username": "usuario@teste.com",
  "password": "senha123"
}
```

## Funcionalidade Testada

A funcionalidade testada é o **login**. O caso de teste principal valida o **cenário de login válido**, inserindo o nome de usuário e a senha e verificando se a URL redireciona corretamente para a página de produto.

## Execução dos Testes

Para abrir o Cypress e executar os testes, use os comandos:

```bash
npx cypress open  
npx cypress run   
```
## Equipe Responsável

- Dianne Salgueiro
- Arthur Silvestre
- Marcio Petrucio
- Larissa Vasconcelos 
- Gian Teixeira




