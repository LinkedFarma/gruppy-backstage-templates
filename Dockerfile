FROM node:18-alpine

# Instalar curl para health checks
RUN apk add --no-cache curl

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia apenas os package*.json da subpasta
COPY nodejs-microservice/package*.json ./

# Instala dependências (somente produção)
RUN npm ci --only=production && npm cache clean --force

# Copia o restante da aplicação da subpasta
COPY nodejs-microservice/ ./

# Cria usuário não-root
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

# Permissões
RUN chown -R nodejs:nodejs /app

# Muda para usuário não-root
USER nodejs

# Expor porta
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1

# Start da aplicação
CMD ["npm", "start"]
