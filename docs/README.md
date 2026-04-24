# Data-Pi Web Application Project

## Overview
This project deploys a simple web application on Google Cloud Platform (GCP) using Kubernetes. The app allows users to enter their name and a 160-character post, displayed on a single page. It consists of a frontend, backend, and database, provisioned via Terraform and deployed with CI/CD pipelines.

**GCP Projects**:
- `data-pi-dev`: Development environment
- `data-pi-prd`: Production environment

**Tech Stack**:
- Infrastructure: Terraform, GKE
- Application: Frontend (HTML/JS), Backend (Node.js), DB (PostgreSQL)
- CI/CD: Jenkins (infra), GitHub Actions (apps)
- Version Control: GitHub with branches and PRs

## Architecture
- **Frontend**: Static page served via Nginx pod.
- **Backend**: API server handling posts.
- **Database**: PostgreSQL for data storage.
- **Networking**: LoadBalancer for external access.
- **Security**: IAM roles, RBAC in K8s.

## Roadmap
See [ROADMAP.md](ROADMAP.md) for detailed phases.

## Getting Started
1. Clone this repo.
2. Set up local environment (see [setup.md](setup.md)).
3. Follow phases in roadmap.

## Team
- Owner: [Your Name]
- Contributors: [Team Member 1], [Team Member 2], [Team Member 3]

## Contributing
- Use feature branches.
- Submit PRs to `develop` for review.
- Require CI checks and approvals.