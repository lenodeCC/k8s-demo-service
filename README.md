# k8s-demo-service  容器测试GRPC服务demo

## 用途
为demo-bff提供grpc福娃五

## bff层
[demo-bff](https://github.com/lenodeCC/k8s-demo-bff)

## 提供服务
详见static/protos/hello.proto

## 构建镜像
```
docker build --rm -t k8s-demo-service:latest .
```
