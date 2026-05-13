---
sidebar_position: 7
---

# 结算界面
```mermaid
flowchart TD
A1{结算地址} 
A2{地址是否收税}
A3{地址邮编是否正确}
A4{开启销售税}

B1[结算界面]
C1(显示税费计算中)
C2(显示地址需要输入正确邮编)
C3(显示0税费)
C4(显示对应税费)

B1-->A1
A1-->|no|C1
A1-->|yes|A4
A4-->|no|C3
A4-->|yes|A2
A2-->|no|C3
A2-->|yes|A3
A3-->|no|C2
A3-->|yes|C4


