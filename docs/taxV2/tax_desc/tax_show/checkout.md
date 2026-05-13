---
sidebar_position: 7
---

# 结算界面
```mermaid
flowchart TD
A1{结算地址是否为空} 
A11{结算地址是否为空} 
A2{根据后台配置州判断地址是否收税}
A3{地址传过去taxjar判断能否获取到税费}
A4{开启销售税}

B1[结算界面]
B2[使用购物车地址]
B3[使用结算地址]
C1(显示税费TBD)
C2(显示地址需要输入正确邮编)
C4(显示对应税费)
C5(不显示税费)
B1-->A4
A4-->|yes|A1
A4-->|no|C5
A1-->|yes|B2
A1-->|no|B3
B3-->A2
B2-->A2
A2-->|no|C5
A2-->|yes|A3
A3-->|yes|A11
A3-->|no|C1
A3-->|no|C2
A11-->|no|C4
A11-->|yes|C1


