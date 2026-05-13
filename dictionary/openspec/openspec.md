---
sidebar_position: 6
---

# OpenSpec+Cursor
全部命令

| 命令 | 作用 | 什么时候用 |
| :--- | :--- | :--- |
| <code>/opsx:explore</code> | 探索与思考 | 需求不清、想先调研 |
| <code>/opsx:new</code> | 创建新变更 | 开始一个新需求 |
| <code>/opsx:continue</code> | 逐步创建下一个制品 | 想逐步审核每个制品 |
| <code>/opsx:ff</code> | 快速生成所有规划制品 | 需求清楚，想快速推进 |
| <code>/opsx:apply</code> | AI 实现任务 | 规格就绪，开始写代码 |
| <code>/opsx:verify</code> | 验证实现 | 代码写完，检查是否符合规格 |
| <code>/opsx:archive</code> | 归档变更 | 单个变更完成，需要收尾 |
| <code>/opsx:bulk-archive</code> | 批量归档变更 | 多个变更完成，需要批量收尾 |
| <code>/opsx:onboard</code> | 初始化项目/环境 | 新项目启动或环境重置 |
| <code>/opsx:propose</code> | 提出变更提案 | 需求初步形成，需要立项 |
| <code>/opsx:sync</code> | 同步规范/配置 | 本地与远程规范不一致时 |

# demo

- /opsx:new 新增退款接口

- /opsx:continue 在后台新增退款接口 入参xxx(生成文件：proposal.md（提案）)

- /opsx:continue 详细的需求规格、接口定义、数据结构、业务逻辑 specs/ 目录下的规范文档（如 ui/spec.md, api/spec.md）

- /opsx:continue 技术方案、架构图、模块划分、技术选型、关键算法与实现思路。 (design.md（技术设计）)

- /opsx:continue 拆解为可执行的开发任务列表（带优先级、依赖、预估工时） (tasks.md（任务清单）)

- /opsx:ff //快速创建任务，创建后review细节

- /opsx:apply //ai会编写代码，编写后review 代码

- /opsx:verify //验证代码

- /opsx:archive //归档修改

# 部署

- 安装
```
npm install -g @fission-ai/openspec@latest
```
- 初始化
```
openspec init --tools cursor --force
```


- 配置,默认只有3个命令需要勾选其他命令
```
openspec config profile
```

- 定义规则匹配技能，ai编码时候会按照这个规则进行编码
```
/create-skill
```

- 例如要规范ai 的mysql编码，执行后会在skill生成对应md 文件，需要review规则是否符合要求
```
---
name: mysql-rule
description: YitaShop 数据库编码规范。适用于表设计、表名常量、变更脚本、Model 中表名与 SQL 书写。在编写或评审数据库相关代码与 SQL 时遵循此规范。
version: 1.0.0
---

```