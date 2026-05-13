---
sidebar_position: 6
---

# 订单标签

## 退款标记

- 更新商品退款状态标记
```jsx  title="product_tag"
UPDATE ws_orders_products_extend AS ope
INNER JOIN (
    SELECT op.orders_products_id, op.final_price_total
    FROM ws_orders_products_refund AS opr
    LEFT JOIN ws_orders_products AS op ON op.orders_products_id = opr.orders_products_id
    WHERE op.site_id = 10001
    GROUP BY op.orders_products_id
    HAVING SUM(refund_amount) = op.final_price_total
) AS op ON op.orders_products_id = ope.orders_products_id
SET ope.is_all_refund = 1;
```

## 后台订单标签显示逻辑
```mermaid
flowchart TD
R111[
赠品单 是否需要显示已支付根履约状态
]
R1[
无需履约
]
R2[
待履约
]
R3[
履约中
]
R4[
全部妥投
]
R5[
部分妥投
]

R6[
全部退款
]
R7[
部分退款
]
R8[
 已支付
]
R9[
 未支付
]


R10[
全部发货
]
R11[
部分发货
]
R12[
未发货
]



P1{是否发货-是否有包裹数据}
P2{是否全部发货-具体判断逻辑未定}
P3{是否有支付流水}
P3-1{是否有支付流水}
P4{是否退款}
P5{是否全部退款}
P5-1{是否全部退款}
P6{包裹妥投数>0}
P7{是否全部发货-购买数量=全部退款商品数量+已发货商品数量:有发货包裹算商品全部发货}
P7-1{是否全部发货-购买数量=全部退款商品数量+已发货商品数量:有发货包裹算商品全部发货}
P8{是否全部妥投-发货包裹数 = 包裹妥投数}
P8-1{是否全部妥投-发货包裹数 = 包裹妥投数}

D1(履约状态)
D2(支付状态)
D3(妥投状态)
D4(发货状态)

D4 -->P1
P1 -->|no|R12
P1 -->|yes|P2
P2 -->|yes|R10
P2 -->|no|R11

D2 -->P3
P3 -->|no|R9
P3 -->|yes|P4
P4 -->|no|R8
P4 -->|yes|P5
P5 -->|no|R6
P5 -->|yes|R7

D3 -->P6
P6 -->|yes|P7
P7 -->|yes|P8
P8 -->|yes|R4
P8 -->|no|R5
P7 -->|NO|R5

D1 -->P3-1
P3-1 -->|no|R1
P3-1 -->|yes|P5-1
P5-1 -->|yes|R1
P5-1 -->|no|P7-1
P7-1 -->|no|R2
P7-1 -->|yes|P8-1
P8-1 -->|no|R3
```

## 后台商品标签显示逻辑
```mermaid
flowchart TD
R1[
无需履约
]
R2[
待履约
]
R3[
履约中
]
R4[
全部妥投
]
R5[
已发货
]
R6[
未发货
]
R7[
全部退款
]
R8[
部分退款
]




P1{是否全部退款}
P2{是否有退款}
P3{包裹是否全部妥投}
P4{是否发货}
P5{是否支付成功，订单状态}
P11{是否全部退款}


D1(订单商品)



D1 -->P5
P5 -->|no|R1
P5 -->|yes|P2
P2 -->|yes|P1
P1 -->|yes|R7
R7 -->R1
P1 -->|no|R8
P5 -->|yes|P4
P4 -->|yes|R5
P4 -->|no|R6
R6 -->P11
P11 -->|no|R2
R5 -->P3
P3 -->|yes|R4
P3 -->|no|R3
```