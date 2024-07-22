#Create the Cloud Run and define the container name, port, and image!
resource "google_cloud_run_v2_service" "default" {
  provider = google 
  name     = var.project_name
  location = var.region
  launch_stage = "BETA"  # Optional, set launch stage if needed
  ingress = var.container_traffic

  template {
    containers {
      name = var.container_name
      ports {
        container_port = var.container_port
      }
      image = var.container_image
    }
  }
}
