variable "project" {
  description = "The GCP project ID"
  type        = string
  default     = "data-pi-dev"
}

variable "region" {
  description = "The GCP region"
  type        = string
  default     = "asia-south1"
}

variable "zone" {
  description = "The GCP zone"
  type        = string
  default     = "asia-south1-a"
}