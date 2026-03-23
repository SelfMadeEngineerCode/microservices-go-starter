docker_build(
  "smartfind/web",
  ".",
  dockerfile="./infra/development/docker/web.Dockerfile",
)

k8s_yaml("./infra/development/k8s/web-deployment.yaml")
k8s_resource("web", port_forwards=3000)