---
sidebar_position: 7
---

# 购物车税费计算
- 购物车会根据对应地址跟邮编进行税费计算优先使用缓存表ws_tax_rate
- 缓存表没数据的情况下会把数据传到taxjar并记录返回数据到缓存表
- 请求到taxjar的数据如下
```jsx title="请求参数sysTaxjar->getTaxTotal"
{
	
    "to_country": "US",
    "to_zip": "98001",//邮编
    "to_state": "WA",//州编号
    "to_city": "Jamaica",//城市
    "to_street": "17032 Jamaica Ave",//街道
    "amount": "1239.01",//商品金额
    "shipping": 0,//运费
    "line_items": []
}
```
```jsx title="返回数据"
{
    "tax": {
        "rate": 0.103,//税率
        "freight_taxable": true,
        "tax_source": "destination",
        "has_nexus": true,
        "taxable_amount": 1239.01,//实际收税金额
        "shipping": 0,//运费
        "jurisdictions": {
            "state": "WA",
            "city": "AUBURN",
            "country": "US",
            "county": "KING"
        },
        "amount_to_collect": 127.62,//总税费
        "order_total_amount": 1239.01//订单总金额
    }
}
```
# 实际收税金额 < 订单总金额 代表运费没有收税
- CA 90001 运费不收税
- WA 98001 运费收税
# 税费豁免
- 用户申请税费豁免，税费豁免通过用户下单免税费
- 根据用户输入的邮箱判断是否免税 测试环境使用邮箱（demo1@qq.com） 