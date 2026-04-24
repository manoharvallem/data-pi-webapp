# Local Development Setup

## Prerequisites
- Windows 10/11
- Git installed
- VS Code

## Tools to Install
1. **gcloud CLI**: Download from https://cloud.google.com/sdk/docs/install
   - Authenticate: `gcloud auth login`
   - Set project: `gcloud config set project data-pi-dev`

2. **kubectl**: Install via gcloud: `gcloud components install kubectl`

3. **Terraform**: Download from https://www.terraform.io/downloads
   - Version 1.5+

4. **Docker**: For local testing, https://docs.docker.com/desktop/install/windows-install/

5. **Node.js**: For backend dev, https://nodejs.org/

## GCP Setup
- Enable APIs: Compute Engine, Kubernetes Engine, Container Registry.
- Create service account with Editor role for CI/CD.
- Download key JSON, store securely (not in repo).

## Git Setup
- Configure user: `git config --global user.name "Your Name"`
- Configure email: `git config --global user.email "your.email@example.com"`

## Testing
- Clone repo: `git clone <repo-url>`
- Run `terraform init` in infra/
- Test kubectl: `kubectl version`