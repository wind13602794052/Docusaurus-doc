---
sidebar_position: 6
---

# 购物车界面
```mermaid
flowchart TD
I{地址是否收税} 
J{计算税费}
K(正常显示)
L(显示税费)
A[购物车界面]
C{he站判断}
D{购物车左上设置地址}
E{结算地址判断}
F[结算地址]
G[购物车地址]
H[Ip获取到地址]
M{缓存税率}



A--> C
C -->|he| D
C -->|home| E
E -->|yes|F
D -->|yes|G
E -->|no|H
D -->|no|H
F -->I
G -->I
H -->I
I-->|no|K
I-->|yes|M
M-->|yes使用缓存税率|J
M-->|no上报到taxjar|J
J-->|no|K
J-->|yes|L
