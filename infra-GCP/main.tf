#Configure the terraform backend at Google Storage
terraform {
    backend "gcs" {
        bucket = var.bucket_name
        prefix = "terraform-state/resume"
    }
}
