# Configure the Google Cloud Provider
provider "google" {
  project = var.project_name
  region  = var.region 
  zone    = var.zone 
}
