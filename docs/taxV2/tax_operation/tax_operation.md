---
sidebar_position: 6
---

# 开启税费
- 操作链接(https://beta.yitashop.com:7979/sg_os/taxManage)
- 对应操作表ws_site->tax_status
# 配置收税州
- 操作链接(https://beta.yitashop.com:7979/sg_os/taxManage)
- 对应操作表ws_tax_config
# 导出收税订单
- 操作链接(https://beta.yitashop.com:7979/sg_os/taxManage)
- 对应操作表ws_taxjar_order

# 上线准备
```jsx title="上线sql更新税费兜底税率"
UPDATE ws_tax_config SET tax_rate = 0.0946 WHERE zone_code = 'AL'; -- Alabama
UPDATE ws_tax_config SET tax_rate = 0.0182 WHERE zone_code = 'AK'; -- Alaska
UPDATE ws_tax_config SET tax_rate = 0.0852 WHERE zone_code = 'AZ'; -- Arizona
UPDATE ws_tax_config SET tax_rate = 0.0946 WHERE zone_code = 'AR'; -- Arkansas
UPDATE ws_tax_config SET tax_rate = 0.0899 WHERE zone_code = 'CA'; -- California (a)
UPDATE ws_tax_config SET tax_rate = 0.0789 WHERE zone_code = 'CO'; -- Colorado
UPDATE ws_tax_config SET tax_rate = 0.0635 WHERE zone_code = 'CT'; -- Connecticut
UPDATE ws_tax_config SET tax_rate = 0.0000 WHERE zone_code = 'DE'; -- Delaware
UPDATE ws_tax_config SET tax_rate = 0.0698 WHERE zone_code = 'FL'; -- Florida
UPDATE ws_tax_config SET tax_rate = 0.0749 WHERE zone_code = 'GA'; -- Georgia
UPDATE ws_tax_config SET tax_rate = 0.0450 WHERE zone_code = 'HI'; -- Hawaii (b)
UPDATE ws_tax_config SET tax_rate = 0.0603 WHERE zone_code = 'ID'; -- Idaho
UPDATE ws_tax_config SET tax_rate = 0.0896 WHERE zone_code = 'IL'; -- Illinois
UPDATE ws_tax_config SET tax_rate = 0.0700 WHERE zone_code = 'IN'; -- Indiana
UPDATE ws_tax_config SET tax_rate = 0.0694 WHERE zone_code = 'IA'; -- Iowa
UPDATE ws_tax_config SET tax_rate = 0.0869 WHERE zone_code = 'KS'; -- Kansas
UPDATE ws_tax_config SET tax_rate = 0.0600 WHERE zone_code = 'KY'; -- Kentucky
UPDATE ws_tax_config SET tax_rate = 0.1011 WHERE zone_code = 'LA'; -- Louisiana
UPDATE ws_tax_config SET tax_rate = 0.0550 WHERE zone_code = 'ME'; -- Maine
UPDATE ws_tax_config SET tax_rate = 0.0600 WHERE zone_code = 'MD'; -- Maryland
UPDATE ws_tax_config SET tax_rate = 0.0625 WHERE zone_code = 'MA'; -- Massachusetts
UPDATE ws_tax_config SET tax_rate = 0.0600 WHERE zone_code = 'MI'; -- Michigan
UPDATE ws_tax_config SET tax_rate = 0.0814 WHERE zone_code = 'MN'; -- Minnesota
UPDATE ws_tax_config SET tax_rate = 0.0706 WHERE zone_code = 'MS'; -- Mississippi
UPDATE ws_tax_config SET tax_rate = 0.0844 WHERE zone_code = 'MO'; -- Missouri
UPDATE ws_tax_config SET tax_rate = 0.0000 WHERE zone_code = 'MT'; -- Montana (c)
UPDATE ws_tax_config SET tax_rate = 0.0698 WHERE zone_code = 'NE'; -- Nebraska
UPDATE ws_tax_config SET tax_rate = 0.0824 WHERE zone_code = 'NV'; -- Nevada
UPDATE ws_tax_config SET tax_rate = 0.0000 WHERE zone_code = 'NH'; -- New Hampshire
UPDATE ws_tax_config SET tax_rate = 0.0660 WHERE zone_code = 'NJ'; -- New Jersey (d)
UPDATE ws_tax_config SET tax_rate = 0.0767 WHERE zone_code = 'NM'; -- New Mexico (b)
UPDATE ws_tax_config SET tax_rate = 0.0854 WHERE zone_code = 'NY'; -- New York
UPDATE ws_tax_config SET tax_rate = 0.0700 WHERE zone_code = 'NC'; -- North Carolina
UPDATE ws_tax_config SET tax_rate = 0.0709 WHERE zone_code = 'ND'; -- North Dakota
UPDATE ws_tax_config SET tax_rate = 0.0729 WHERE zone_code = 'OH'; -- Ohio
UPDATE ws_tax_config SET tax_rate = 0.0906 WHERE zone_code = 'OK'; -- Oklahoma
UPDATE ws_tax_config SET tax_rate = 0.0000 WHERE zone_code = 'OR'; -- Oregon
UPDATE ws_tax_config SET tax_rate = 0.0634 WHERE zone_code = 'PA'; -- Pennsylvania
UPDATE ws_tax_config SET tax_rate = 0.0700 WHERE zone_code = 'RI'; -- Rhode Island
UPDATE ws_tax_config SET tax_rate = 0.0749 WHERE zone_code = 'SC'; -- South Carolina
UPDATE ws_tax_config SET tax_rate = 0.0611 WHERE zone_code = 'SD'; -- South Dakota (b)
UPDATE ws_tax_config SET tax_rate = 0.0961 WHERE zone_code = 'TN'; -- Tennessee
UPDATE ws_tax_config SET tax_rate = 0.0820 WHERE zone_code = 'TX'; -- Texas
UPDATE ws_tax_config SET tax_rate = 0.0742 WHERE zone_code = 'UT'; -- Utah (a)
UPDATE ws_tax_config SET tax_rate = 0.0639 WHERE zone_code = 'VT'; -- Vermont
UPDATE ws_tax_config SET tax_rate = 0.0577 WHERE zone_code = 'VA'; -- Virginia (a)
UPDATE ws_tax_config SET tax_rate = 0.0951 WHERE zone_code = 'WA'; -- Washington
UPDATE ws_tax_config SET tax_rate = 0.0659 WHERE zone_code = 'WV'; -- West Virginia
UPDATE ws_tax_config SET tax_rate = 0.0572 WHERE zone_code = 'WI'; -- Wisconsin
UPDATE ws_tax_config SET tax_rate = 0.0556 WHERE zone_code = 'WY'; -- Wyoming
UPDATE ws_tax_config SET tax_rate = 0.0600 WHERE zone_code = 'DC'; -- District of Columbia
```
```jsx title="新增销售税流水表"
CREATE TABLE `ws_transactions_tax` (
  `transactions_tax_id` int unsigned NOT NULL AUTO_INCREMENT COMMENT 'ID号',
  `transaction_no` varchar(255) NOT NULL DEFAULT '' COMMENT '第三方流水号',
  `sg_order_id` varchar(255) NOT NULL DEFAULT '' COMMENT '订单号',
  `orders_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '订单id',
  `order_amount_total` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '订单总金额(不含税）',
  `shipping_amount` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '运费金额',
  `actual_amount` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '订单实际收税金额(运费，保险不收税时少于订单金额)',
  `tax_amount_total` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '订单总税费',
  `tax_amount_product` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '商品总税费',
  `tax_amount_shipping` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '运费总税费',
  `tax_refund_product` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '商品退款税费',
  `tax_refund_shipping` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '运费退款税费',
  `taxjar_amount` decimal(15,4) NOT NULL DEFAULT '0.0000' COMMENT '实际上报金额（退款会减少',
  `tax_rate` decimal(15,6) NOT NULL DEFAULT '0.0000' COMMENT '税率',
  `tax_postcode` varchar(255) NOT NULL DEFAULT '' COMMENT '收税邮编',
  `tax_city` varchar(255) NOT NULL DEFAULT '' COMMENT '收税城市',
  `tax_zone_code` varchar(255) NOT NULL DEFAULT '' COMMENT '收税州编号',
  `tax_zone_name` varchar(255) NOT NULL DEFAULT '' COMMENT '收税州名称',
  `tax_street` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '收税街道地址',
  `site_id` int DEFAULT '0' COMMENT '站点id',
  `add_time` int NOT NULL DEFAULT '0' COMMENT '添加时间',
  `tax_type` varchar(50) NOT NULL DEFAULT 'tax_normal' COMMENT '税费类型 tax_exempt 销售税豁免用户 tax_normal 正常用户 keep_tax_address 使用兜底税率',
  PRIMARY KEY (`transactions_tax_id`) USING BTREE,
  UNIQUE KEY `transaction` (`transaction_no`),
  KEY `sg_order_id` (`sg_order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COMMENT='订单税费流水表';
```
```jsx title="新增兜底运费是否收税字段"
ALTER TABLE `ws_tax_config` ADD `is_shipping_tax` tinyint(1)  NOT NULL  DEFAULT 1  COMMENT '运费是否收税'  AFTER `tax_rate`;
```
```jsx title="新增记录地址是否强制保底地址"
ALTER TABLE `ws_address_book` ADD `keep_tax_address` tinyint(1)  NOT NULL  DEFAULT 0  COMMENT '是否强制使用收税地址，强制时使用兜底税率';
```
```jsx title="缓存税率新增标记是否运费收税"
ALTER TABLE `ws_tax_rate` ADD `is_shipping_tax` tinyint(1)  NOT NULL  DEFAULT 1  COMMENT '运费是否收税'  AFTER `tax_rate`;
```
```jsx title="退款新增标记退税详情"
ALTER TABLE `ws_transactions_refund` ADD `refund_product_tax` decimal(10,2)  NOT NULL  DEFAULT 0  COMMENT '商品税费'  AFTER `refund_amount_tax`;
ALTER TABLE `ws_transactions_refund` ADD `refund_shipping_tax` decimal(10,2)  NOT NULL  DEFAULT 0  COMMENT '运费税费'  AFTER `refund_amount_tax`;
ALTER TABLE `ws_transactions_refund` ADD `amount_type` tinyint(1)  NOT NULL  DEFAULT 0  COMMENT '退款入参的金额类型0不含税1含税'  AFTER `packages`;
```
```jsx title="配置销售税收款账号ws_payment_setting"
```

- 检查erp是否新增了对应的店铺

YTS-Offline-hernest(线下收税店铺)

YTS-Yitahome-US(线上收税店铺)

YTS-Hernest-US(线上收税店铺)