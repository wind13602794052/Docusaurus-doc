---
sidebar_position: 6
---

# 邀评邮件

- 收到包裹时会触发saveInvitedInSiteReview方法记录需要发送邮件的订单
数据记录表为invited_review_email

- 每天运行脚本触发邮件逻辑
/api/reviews/sendInvitedInSiteReviewEmail

- 核心推送方法sendInvitedInSiteReviewEmailToCustomer
sendInvitedEmail//邀评评论邮件

- 测试订单
197047
商品id
4659
3335
5193
https://beta.yitashop.com/trackDetail/197047

# 后台邀评接口

- 评论列表接口新增筛选根列表显示字段
```jsx title="_os/index.php?com=reviews&t=getList"
{
    "is_invited":"1"
}
{
    "review_tag" :
    [
        "精选",
        "特邀"
    ]
}
```

- 添加特邀商品接口
```jsx title="_os/index.php?com=reviews&t=addInvitedSku"
{
    "skuList":[
        197,
        267
    ]
}
```

- 特邀商品列表
```jsx title="_os/index.php?com=reviews&t=invitedSkuList"
{
    "is_export":"1"//是否导出数据
    "products_model":"12"//skuID
    "status":"0"//状态
}
```
- 修改商品状态
```jsx title="_os/index.php?com=reviews&t=setInvitedSkuStatus"
{
    "id":"1",
    "status":1
}
```
- 删除特邀商品
```jsx title="_os/index.php?com=reviews&t=deleteInvitedSku"
{
    "id":"1"
}
```

# 测试与交互逻辑

- 商品全部妥投时数据会写入invited_review_email表
触发脚本
packageEventNotice，
getDeliveredToAftership
saveInvitedReviewEmail
- 每天扫invited_review_email表 取5天数据进行推送
触发脚本
sendInvitedInSiteReviewEmail
- 检查商品是否全部特邀商品发送tp邮件checkTpEmail
- 发送成功后invited_review_email表中类型记录会更新为tp,前端会根据记录判断是否需要弹窗tp邀请
- 执行sendInvitedEmail发送邮件
ws_customers_notice表会限制发送记录
- postEventToPlatform将数据事件推送到emarsys
对应事件为
invited_review_email
invited_sku_review_email
- 推送成功会将数据记录到ws_customers_notice_log表
- 发送时测试环境会有白名单限制
SG_ORDER_EMAIL_WHITE_LISTS
非白名单统一转换成
cooper.z@qq.com