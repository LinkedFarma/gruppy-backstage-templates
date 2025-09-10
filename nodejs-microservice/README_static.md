# SERVICE_NAME_PLACEHOLDER

SERVICE_DESCRIPTION_PLACEHOLDER

## Descrição

Este é um microsserviço criado usando o template do Backstage da Gruppy.

## Tecnologias

- Node.js 18
- Express.js
- Docker
- ESLint
- Prettier

## Como executar

### Desenvolvimento
```bash
npm install
npm run dev
```

### Produção
```bash
npm install
npm start
```

### Docker
```bash
docker build -t SERVICE_NAME_PLACEHOLDER .
docker run -p 3000:3000 SERVICE_NAME_PLACEHOLDER
```

## Estrutura do Projeto

```
├── README.md
├── package.json
├── index.js
├── Dockerfile
├── catalog-info.yaml
├── .eslintrc.js
├── .prettierrc
└── .gitignore
```

## Endpoints

- `GET /` - Endpoint principal
- `GET /health` - Health check

## Desenvolvimento

Este projeto foi gerado usando o Backstage da Gruppy. Para mais informações, acesse o [portal do desenvolvedor](https://backstage.gruppy.com.br).

## Deployment

Este serviço está configurado para deploy automático via ArgoCD quando houver commits na branch `main`.

---
*Criado pelo time de Platform Engineering da Gruppy*
