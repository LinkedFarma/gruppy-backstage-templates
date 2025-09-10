# Gruppy Backstage Templates

Este repositório contém templates do Backstage para criação de microsserviços na Gruppy.

## Templates Disponíveis

### Node.js Microservice
- **Localização**: `nodejs-microservice/`
- **Descrição**: Template completo para microsserviços Node.js com Express
- **Inclui**: Express.js, Docker, ESLint, Prettier, Health checks

## Estrutura

```
gruppy-templates/
├── nodejs-microservice/
│   ├── README.md
│   ├── package.json
│   ├── index.js
│   ├── Dockerfile
│   ├── catalog-info.yaml
│   ├── .gitignore
│   └── .env.example
└── README.md
```

## Como Usar

Estes templates são utilizados automaticamente pelo Backstage da Gruppy. Para criar um novo microsserviço:

1. Acesse https://backstage.gruppy.com.br
2. Vá para **Create**
3. Selecione o template desejado
4. Preencha as informações
5. Clique em **Create**

## Desenvolvimento

Para adicionar novos templates:

1. Crie uma nova pasta com o nome do template
2. Adicione os arquivos skeleton usando a sintaxe `${{ values.propriedade }}`
3. Faça commit e push
4. Atualize o template do Backstage para referenciar o novo skeleton

## Contribuindo

Criado e mantido pelo time de Platform Engineering da Gruppy.
