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
D{购物车左上设置地址}
E{结算地址判断}
F[结算地址]
G[购物车地址]
M{缓存税率}
N(手动zipcode>定位zipcode>默认值10001，根据zipcode反查pb_us_zipcode表获取，如果定位zipcode不在pb_us_zipcode使用10001)


A --> E
E -->|no|G
E -->|yes|D
D -->|no|F
D -->|yes|G


F -->I
G -->I
I-->|no|K
I-->|yes|M
M-->|yes使用缓存税率|J
M-->|no上报到taxjar|J
J-->|no|K
J-->|yes|L
