---
sidebar_position: 7
---

# 订单退款成功
- 订单退款成功后订单纬度上报到taxjar
- 目前逻辑是退款成功生成流水后会请求下面接口，会关联之前上报的数据上传退款数据到taxjar，上报数据逻辑如下

```jsx title="/api/crontab_order/extraTransaction"
{
	"amount": "110",//商品退款金额
	"to_zip": "98001",
	"to_city": "AUBURN",
	"shipping": "10.00",//运费退款金额
	"to_state": "WA",
	"sales_tax": "11.32",//退款总税费
	"to_street": "a22",
	"line_items": [
		{
			"discount": "0.00",
			"quantity": 1,
			"sales_tax": "10.29",//商品税费
			"unit_price": 100,
			"description": "HEFTPB-8022",
			"product_tax_code": "",
			"product_identifier": "HEFTPB-8022"
		}
	],
	"to_country": "US",
	"transaction_id": "YT10001198518-1756803177-refund-test",//退款交易号
	"transaction_date": "2025/09/02",
	"transaction_reference_id": "YT10001198518-test"//支付成功时上报的交易号
}
```