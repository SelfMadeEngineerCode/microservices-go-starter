# SmartFind: AI-Powered Lost & Found Management

SmartFind is a multi-agent system for lost-item recovery in public transit.  
It combines:

- A conversational intake agent (passenger reports lost items in natural language)
- A matching agent (compares lost reports with found items)
- A predictive analytics agent (identifies routes/stations with frequent losses)

## Project Overview

Manual lost-and-found workflows are slow and error-prone. SmartFind modernizes the process with a Go backend, Python AI agents, and a web frontend.

Core goals:

- Collect high-quality lost item reports through guided conversational input
- Improve match accuracy between lost reports and found inventory
- Help transit authorities prioritize hotspots using historical trend analysis

## System Components

- `web`: Passenger and operator interface (currently scaffolded as a blank starter page)
- `services`: Go backend services
- `shared`: Shared contracts and utilities for Go services
- `docs/flows`: Project-specific process and agent flow documentation
- `infra`: Kubernetes + Docker setup for development/production

## Required Tools

- Docker
- Go
- Tilt
- Kubernetes (Minikube or Docker Desktop Kubernetes)
- Node.js 20+ (for web app)

## Run Locally

Start local development:

```bash
tilt up
```

Check resources:

```bash
kubectl get pods
```

## Web App (Blank Starter)

The frontend is intentionally reset to a blank page for the new project phase.

Run the web app directly:

```bash
cd web
npm install
npm run dev
```

## Create New Go Services

Use the service generator:

```bash
go run tools/create_service.go -name <service-name>
```

Example:

```bash
go run tools/create_service.go -name intake
```

This creates:

- `services/<service-name>-service/cmd`
- `services/<service-name>-service/internal/domain`
- `services/<service-name>-service/internal/service`
- `services/<service-name>-service/internal/infrastructure/{events,grpc,repository}`
- `services/<service-name>-service/pkg/types`
- `services/<service-name>-service/README.md`

## Flows

Current project flows are documented under `docs/flows`:

- Conversational intake flow
- Lost/found matching flow
- Predictive analytics flow

## Development Notes

- `web/src/contracts.ts`, `web/src/constants.ts`, and `web/src/types.ts` are now mock examples to guide the real implementation.
- Infra Docker definitions are reduced to web-only templates for this project reset.
