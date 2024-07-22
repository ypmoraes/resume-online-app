#Create the Artifact Registry Repository with the format and location
resource "google_artifact_registry_repository" "my_repo" {
  repository_id = var.repository_id
  format        = var.artifact_format # Desired format
  location      = var.region 
  description   = "Repository for my resume online" 
}
