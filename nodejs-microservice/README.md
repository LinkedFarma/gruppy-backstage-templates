# ${{ values.name }}

${{ values.description }}

## Descrição

Este é um microsserviço criado usando o template do Backstage da Gruppy. 
O projeto está configurado para deploy automático usando os workflows reutilizáveis da organização.

## Tecnologias

- Node.js 18
- Express.js
- Docker
- ESLint
- Prettier
- GitHub Actions (workflow reutilizável)
- AWS ECR
- ArgoCD

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
docker build -t ${{ values.name }} .
docker run -p 3000:3000 ${{ values.name }}
```

## CI/CD e Deploy

Este projeto usa o workflow reutilizável da LinkedFarma para CI/CD e deploy automático:

- **Build e Deploy**: Automático via GitHub Actions
- **Container Registry**: AWS ECR
- **Orquestração**: ArgoCD
- **Ambientes**: development, staging, master

### Variáveis Necessárias

Configure as seguintes variáveis no repositório:

**Repository Variables** (obrigatórias):
- `APP_NAME`: Nome da aplicação (ex: {{ values.name }})
- `ECR_REGISTRY`: Registry do ECR da AWS
- `ECR_REPOSITORY`: Nome do repositório no ECR

**Repository Variables** (opcionais):
- `PREFIX_DOMAIN`: Prefixo do domínio para acesso externo (será completado com .gruppy.com.br)
- `CONTAINER_PORT`: Porta do container (padrão: 3000)
- `SERVICE_PORT`: Porta do service (padrão: 80)
- `ADDITIONAL_CONTAINERS`: Containers adicionais (formato JSON)

### Deploy Manual

Para fazer deploy manual de um ambiente específico:

```bash
# Via GitHub Actions (workflow_dispatch)
# Acesse Actions > Deploy Application > Run workflow
# Selecione o ambiente: dev, qas, ou prd
```

## Estrutura do Projeto

```
├── README.md
├── package.json
├── index.js
├── Dockerfile
├── catalog-info.yaml
├── .eslintrc.js
├── .eslintignore
├── .env.example
├── .gitignore
├── .github/
│   └── workflows/
│       └── ci-cd.yml (usa workflow reutilizável)
└── __tests__/
    └── basic.test.js
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
