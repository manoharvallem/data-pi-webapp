resource "google_service_account" "gke_sa" {
  account_id   = "gke-service-account"
  display_name = "GKE Service Account"
}

resource "google_project_iam_member" "gke_sa_roles" {
  project = var.project
  role    = "roles/container.admin"
  member  = "serviceAccount:${google_service_account.gke_sa.email}"
}

resource "google_container_cluster" "data_pi_cluster" {
  # ... existing config ...
  service_account = google_service_account.gke_sa.email
}