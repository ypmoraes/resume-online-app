variable bucket_name {
  type        = string
  default     = "bucket_resume_tf"
  description = "bucket to store tf state"
}

variable location {
  type        = string
  default     = "US"
  description = "location to bucket"
}

variable project_name {
  type        = string
  default     = "resume-ymoraes"
  description = "project name"
}

variable region {
  type        = string
  default     = "us-central1"
}

variable zone {
  type        = string
  default     = "us-central1-a"
}

variable repository_id {
  type        = string
  default     = "resume-online"
}

variable artifact_format {
  type        = string
  default     = "DOCKER"
}

variable container_name {
  type        = string
  default     = "resume"
  description = "container name"
}

variable container_port {
  type        = string
  default     = "3000"
  description = "port that container will run"
}

variable container_image {
  type        = string
  default     = "us-central1-docker.pkg.dev/resume-ymoraes/resume-online/resume@sha256:b468f033d9f9840dd07ad9171d9be2008bb1e4eb3cd7b6844818625a7f47d13d"
  description = "image store at artifact registry"
}

variable container_traffic {
  type        = string
  default     = "INGRESS_TRAFFIC_ALL"
  description = "type ingress"
}
