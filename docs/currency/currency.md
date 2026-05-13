---
sidebar_position: 6
---

# 币种与汇率
- 后端定时跑第三方api更新汇率表数据

参考api-1[Open Exchange Rates](https://openexchangerates.org/)

参考api-2[ExchangeRate-API](https://www.exchangerate-api.com/)

数据表核心结构如下pb_currencies
| id | code | value |
| -------- | -------- | -------- |
| 1    |  USD  | 1   |
| 2    | CNY   | 7.1  |
# 币种选择与显示

后端会返回可配置的币种
默认写死allowCurrency参数

# 测试程序开关
文件base中参数isCurrency

cookie currency设置对应的币种

# 程序逻辑修改

- 1 前端需求检查部分数据没转换币种

- 2 订单金额显示需要修改为币种是订单下单币种

- 3  金额纪录，除了流水表相关纪录的是当时支付的币种其余纪录都是美元金额
```jsx title="金额数据为当前币种的数据表"
{
    "table": 
    [
        'ws_transactions',
        'ws_transactions_refund',
        'ws_transactions_tax',
        'ws_orders_products_refund'
    ]
}
```
- 4  退款需要修改显示为当前币种的金额，退款时带上币种

- 5  后端提供选择币种接口，选择后记录到session中,cookie中

# 测试订单
- YT10001198863