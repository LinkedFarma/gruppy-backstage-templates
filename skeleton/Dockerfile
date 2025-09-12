# Multi-stage build for Node.js microservice
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files from nodejs-microservice directory
COPY nodejs-microservice/package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code from nodejs-microservice directory
COPY nodejs-microservice/ ./

# Build stage (if you have build scripts)
RUN npm run build 2>/dev/null || echo "No build script found, skipping..."

# Production stage
FROM node:18-alpine AS production

# Create app directory
WORKDIR /app

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

# Copy dependencies and built application
COPY --from=builder --chown=nodejs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nodejs:nodejs /app/package*.json ./
COPY --from=builder --chown=nodejs:nodejs /app/index.js ./
COPY --from=builder --chown=nodejs:nodejs /app/src ./src
COPY --from=builder --chown=nodejs:nodejs /app/config ./config

# Switch to non-root user
USER nodejs

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/health', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) })"

# Start the application
CMD ["node", "index.js"]
