---
sidebar_position: 6
---

# 上传跟踪号
- ERP同步物流单号时会上传物流单号到第三方
```jsx title="/api/interface/pushTrackNumberToAftership"
{
    "tracking_number":"900506106010"
}
```

# 更新物流轨迹,发送派送邮件，更新妥投状态
- 发货时间2个月内，第三方返回状态码40，50，51，65，0的不再更新。
- 每次脚本会把当次请求记录到ws_tracking_log表，mq翻页时会过滤当次请求数据，每次只能执行20个物流单
- 根据返回物流轨迹会进行，更新物流轨迹,发送派送邮件，更新妥投状态的交互
- 执行脚本
```jsx title="/api/interface/getDeliveredToTrack718"
{
    "/api/interface/getDeliveredToTrack718"
}
```
- 停止执行脚本接口
```jsx title="/api/interface/stopTrack718"
{
    "stopTrack718":"1"//1关闭0开启
}
```

# arb站支付配置sql

```sql title="oceanpay_googlepay"

INSERT INTO `ws_payment_setting` ( `site_id`, `type`, `params`, `status`, `add_time`, `update_time`, `domain_name`, `account_tag`, `is_tax`)
VALUES
	( 10005, 'oceanpay_googlepay', '{\"account\":\"253898\",\"store_name\":\"Shopify-Yitashop-Arbrest\",\"terminal\":\"25389804\",\"secureCode\":\"6t6xZ4Vb22448H0484Z4860l4bVp2rHd802404266d40h428V00nnprd222z26FZ\",\"oceanpay_key\":\"8c5d897b6042ef9fcb6e2988e3d4abcac39779a1343f5d5865ff71c229639c51359bdb6f32c4907f87865c7ebd9c4aa05b1e717c63d64c00737c6f0acc1d7fd3e106e94b57c3e15b1ecb319911c93ea4bd1d07224a3dda59ea1385eade3c3905175b827eb63ee1f8e118a33603ca348402a9ab7e55ad2d5d0c7ac574b5f2601f\"}', 2, 1641011696, 1641011696, '', '25389804', 0);

```
```sql title="oceanpay_applepay"

INSERT INTO `ws_payment_setting` ( `site_id`, `type`, `params`, `status`, `add_time`, `update_time`, `domain_name`, `account_tag`, `is_tax`)
VALUES
	( 10005, 'oceanpay_applepay', '{\"account\":\"253898\",\"store_name\":\"Shopify-Yitashop-Arbrest\",\"terminal\":\"25389803\",\"secureCode\":\"l4Z2N4f00H0l6640Z62Vl4hb406jr0H26t2fzh6xZxnBhxzfl8rFvb000H6H64nH\",\"oceanpay_key\":\"b5c3451b5ebf51a36065a7ca44b1b1efc908c71629cb8e450bce8c18bcab0067bc88288ce7cd66a772ea2f8cc80c8833f600abbe0fba09c9c8a8a390a03e4a552e2b38f69c1dd7d856aebd499ce80dcdb1ec96ca3beb4ed70158c2830d5dbbffdad94896a36b4fee1b672294e75d8e8fb61c1b97e570152c64e8943a5b2c1745\"}', 2, 1641011696, 1641011696, '', '25389803', 0);

```
```sql title="oceanpay_klarna"

INSERT INTO `ws_payment_setting` ( `site_id`, `type`, `params`, `status`, `add_time`, `update_time`, `domain_name`, `account_tag`, `is_tax`)
VALUES
	( 10005, 'oceanpay_klarna', '{\"account\":\"253898\",\"store_name\":\"Shopify-Yitashop-Arbrest\",\"terminal\":\"25389802\",\"secureCode\":\"FpVN8h2tNF4VfrfXj2F02p204vT86ThP684xr8084fX46642jJf248t08t2F2442\",\"oceanpay_key\":\"bd1ece4d073c4631622694eae9245d48158a62f802204c88888cf05033ce631ef61b3a357de8527ea06db085436748adfc1243bde4bf2ebbf9aae1d7b5696eaef93e2b1de5799e7dc23455efd7ab8397d9e1cf05ebbbfe23f804308e7ff96c03e92d93d1133195a5bc0b147ebee1fae48fac8757b90bea0518ba4633714c6bc7\"}', 2, 1641011696, 1641011696, '', '25389802', 0);

```
```sql title="oceanpay_creditcard"

INSERT INTO `ws_payment_setting` ( `site_id`, `type`, `params`, `status`, `add_time`, `update_time`, `domain_name`, `account_tag`, `is_tax`)
VALUES
	( 10005, 'oceanpay_creditcard', '{\"account\":\"253898\",\"store_name\":\"Shopify-Yitashop-Arbrest\",\"terminal\":\"25389801\",\"secureCode\":\"0z00xVhdP6JFv26R2T204zfb806b2vZjf8T8B604lzN68LvB0NVp48288dz28r2r\",\"oceanpay_key\":\"acc21dfcce0f3c2e33045e4335b6a08efb4ea1ca5d34cb79513ead3c440f1fefd3d753b3df0fdbafcf5972ee5bcce6d22dee8e3d0d642950cbe897e6d141c0a53cf91e97aebba70afd3ff32a7fb2fbc385f3cdf2046ab6d18152a32950a50fb6ed504f15e37725678e8adedd378c9621eb174f1eb7a96ebd5588e3e99be89b79\"}', 2, 1641011696, 1641011696, '', '25389801', 0);

```