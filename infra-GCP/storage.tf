# Define the storage bucket resource
resource "google_storage_bucket" "bucket_resume_tf" {
  name     = var.bucket_name
  location = var.location
  project =  var.project_name
}
