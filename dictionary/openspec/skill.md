---
sidebar_position: 6
---

# SKILL

## 目录
```
skill-name/          # 技能目录名：全小写、连字符分隔（kebab-case）
├── SKILL.md         # ✅ 必需：核心定义（元数据 + 执行指令）
├── scripts/         # 可选：可执行脚本（Python/Bash/Shell）
├── references/      # 可选：参考文档（API/规范/知识库）
├── assets/          # 可选：静态资源（模板/示例/配置文件）
└── config.json      # 可选：配置/参数/持久化数据
```

### SKILL.md（核心，必须大写）
```
---
name: code-review          # 技能名（唯一标识）
description: 按团队标准审查代码，当用户要求 review/检查代码质量时使用
allowed-tools: Read, Bash  # 允许调用的工具（可选）
---
```

### scripts/（可选）

- 存放可直接执行的脚本（如 deploy.sh、validate.py）
- AI 直接调用执行，不读入上下文，适合确定性、重复任务。

### references/（可选）

- 存放参考文档（如 api-docs.md、coding-standards.md）
- AI 直接调用执行，不读入上下文，适合确定性、重复任务。

## assets/（可选）

- 存放模板、示例、配置文件（如 template.json、example.ts）
- AI 直接复制 / 引用，不读入上下文。

## config.json（可选）

- 存放参数、默认配置、持久化数据（如记忆、开关）
- 支持技能可配置化。