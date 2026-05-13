---
sidebar_position: 6
---

# 上线准备
1.新增数据表
```sql title="新增运费活动表"
CREATE TABLE `ws_shipping_activities` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `activity_name` varchar(150) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '' COMMENT '活动名称',
  `status` tinyint(1) NOT NULL DEFAULT '2' COMMENT '活动状态: 1启用 2关闭',
  `start_time` int NOT NULL DEFAULT '0' COMMENT '开始时间',
  `end_time` int NOT NULL DEFAULT '0' COMMENT '结束时间',
  `add_time` int NOT NULL DEFAULT '0' COMMENT '创建时间',
  `min_amount` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '订单最低金额',
  `reduce_amount` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '减免金额',
  `site_id` int unsigned NOT NULL DEFAULT '0' COMMENT '品牌站站点id',
  `admin_name` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '' COMMENT '修改人名称',
  `update_time` int unsigned NOT NULL DEFAULT '0' COMMENT '修改时间',
  `is_delete` int NOT NULL DEFAULT '0' COMMENT '是否删除',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `start_time` (`start_time`) USING BTREE,
  KEY `end_time` (`end_time`) USING BTREE,
  KEY `source_site_id` (`site_id`) USING BTREE,
  KEY `status` (`status`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb3 COMMENT='运费活动';
```

```sql title="新增商品运输方式字段"
ALTER TABLE `ws_products_attributes` ADD `logistics_type` VARCHAR(1000)   NOT NULL  DEFAULT ''  COMMENT '物流方式';
```
```sql title="设置运输方式默认字段"
update ws_products_attributes set logistics_type = 'L_SP' 
where ship_type = 'SP' and site_id = 10001;
update ws_products_attributes set logistics_type = 'L_LTL' 
where ship_type = 'LTL' and site_id = 10001;
```

```sql title="赠品设置为免运费"
update ws_products_attributes set logistics_type = 'L_SP_FREE' 
where ship_type = 'SP' and is_gift = 1 and site_id = 10001;
```

```sql title="查询超重的商品需要设置为L_LTL_IN_HOME"
SELECT 
products_sku_id,
    MAX(weight) AS max_weight
FROM 
    ws_products_options_values_map,
    JSON_TABLE(
        options_value, 
        '$[*]' COLUMNS (
            weight INT PATH '$.children[*].weight'
        )
    ) AS jt
    where options_value <> ''
    and products_options_id = 2077 and site_id = 10001
    group by products_sku_id
    having max_weight > 250
```
# 2.0上线
```sql title="刷新配置"
update `ws_products_attributes` set logistics_type = 'L_SP_FREE' where 
logistics_type = 'L_SP' and site_id = 10001
```
```sql title="刷新配置把之前强制in-home刷新为ltl"
update ws_products_attributes set logistics_type = 'L_LTL' 
where products_attributes_id in (675, 2462,8120,7359) and site_id = 10001;
```
# 需要检查feed推送是否异常

