# 语言文件说明

## 目录约定

| 文件 | 语言 | 说明 |
| --- | --- | --- |
| `zh-CN.json` | 简体中文 | **默认语言**，URL 无前缀（`/about`） |
| `en.json` | 英文 | URL 带 `/en` 前缀（`/en/about`） |

改文案只需要动这两个文件，不需要改 `.vue`。两个文件的键必须一一对应，新增键时两边同时加。

## ⚠️ 英文文案为机器初翻，上线前需人工校对

`en.json` 全部内容由 AI 依据 `zh-CN.json` 初翻，采用商务书面语体，并对中文原文的无主语排比句做了重组。**尚未经过母语者或业务方校对，不得直接对外发布。**

翻译遵循的约束：

- 公司英文名统一使用 **Mighty Elephant**（取自 v1.0 的站点 title 与页面 Logo）
- **未添加中文原文没有的业务承诺、资质、数据或案例**
- 电话、邮箱等事实信息与中文版保持一致，未作改动

### 需要人工确认的专有名词

| 项目 | 中文 | 当前英译 | 待确认 |
| --- | --- | --- | --- |
| 公司全称 | 大小象互联网科技（青岛）有限公司 | Mighty Elephant Internet Technology (Qingdao) Co., Ltd. | 是否与营业执照 / 对外注册的英文名一致 |
| 杭州主体 | 大小象互联网科技杭州办事处 | Mighty Elephant Internet Technology — Hangzhou Office | 「办事处」是 Office / Branch / Representative Office |
| 业务名 | 网络数据猎手 | Web Data Hunters | 是否为对外正式使用的业务名称 |
| 经营理念 | 技术领先、服务至上 | "technology first, service above all" | 是否有官方英文表述 |
| 办公地点 | 中国 青岛 / 中国 杭州 | Qingdao, China / Hangzhou, China | 是否需要补充完整地址 |

### 法务文本需额外注意

`policy.*` 是隐私政策，属于对外法律文本。英译目前为直译，**建议由法务确认后再上线英文版**，尤其是免责声明（`policy.disclaimer`）与适用法律（`policy.law`）两段。
