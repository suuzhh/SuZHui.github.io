---
path: "/article/EBA7F07EC4883BD5"
date: "2020-12-25"
title: "使用Docker部署本地Postgresql环境"
excerpt: "使用容器在本地部署pg，既便捷又无副作用"
tags: ['docker', 'postgresql']
---

## 安装Postgres镜像

```bash
docker pull postgres
```

## 启动容器
```bash
docker run -d \
--name pg \
-e POSTGRES_PASSWORD=2222 -e PGDATA=/var/lib/postgresql/data/pgdata \
-v D:\database\postgres:/var/lib/postgresql/data \
-p 5432:5432 \
postgres
```
> 以上命令将启动一个名称为`pg`的postgresql镜像，同时将端口和硬盘与镜像进行映射

### 参数解释
- `-d, --detach` 在后台运行容器并打印容器ID
- `--name` 容器名称
- `-e, --env` 设置环境变量
- `-v, --volume` 绑定一个当前主机文件系统到容器文件系统的映射
- `-p, --publish` 请容器端口与本地端口做映射

### 引用

[docker.hub](https://hub.docker.com/_/postgres)

[docs.docker.com](https://docs.docker.com/engine/reference/commandline/run/)