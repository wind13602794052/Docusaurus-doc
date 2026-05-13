---
sidebar_position: 6
---

# 订单支付成功
- 订单支付成功后系统会按照订单纬度上报到taxjar
- 目前逻辑是支付成功生成流水后会请求下面接口，会把数据按照订单纬度上传到taxjar，上报数据逻辑如下


```jsx title="/api/crontab_order/extraTransaction"
{
	"amount": "1798.00",//不含运费总金额
	"to_zip": "98001",//邮编
	"to_city": "AUBURN",//用户运输地址的城市
	"shipping": "199.00",//运费
	"to_state": "WA",//州编号
	"sales_tax": "185.19",//收取税费
	"to_street": "17032 Jamaica Ave",
	"line_items": [
		{
			"discount": "100.00",//折扣金额
			"quantity": "1",
			"sales_tax": "164.6900",//税费
			"unit_price": "1699.0000",//商品金额折前
			"description": "HEFTPB-8019",
			"product_tax_code": "",
			"product_identifier": "HEFTPB-8019"
		}
	],
	"to_country": "US",
	"transaction_id": "YT10001198658-test",//交易号
	"transaction_date": "2025/09/15"//支付时间（美东时区）
}
```