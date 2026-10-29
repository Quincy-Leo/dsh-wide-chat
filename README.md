# dsh-wide-chat

DeepSeek Harness 插件：让会话内容区随窗口铺满，左右只保留小边距。

DSH 默认把正文宽度设为 `clamp(680px, 会话列宽 × 0.64, 920px)`，窗口越宽，两侧黑边越大。本插件把有消息的会话页正文宽度改为 `会话列宽 - 64px`，加上滚动区自带的内边距，每侧约 32px。输入框宽度随之变化。新会话起始页和侧栏嵌入式会话保持原样。

## 安装

### 方式一：插件页

1. 打开 DeepSeek Harness 左侧栏的**插件**，点**添加插件**。
2. 输入 `github:Quincy-Leo/dsh-wide-chat`，点**安装**。
3. 安装完成后点**立即启用**。

### 方式二：命令行

```sh
dsh plugin --profile desktop add github:Quincy-Leo/dsh-wide-chat
```

装好后按 ⌘Q 完全退出 DeepSeek Harness 再打开。浏览器里用 `dsh web` 的话，把 `desktop` 换成 `web`。

安装指定版本：在 spec 末尾加 tag，如 `github:Quincy-Leo/dsh-wide-chat#v0.1.0`。

## 使用

在**插件**页的“已安装插件”里找到**宽屏会话**，用开关启停。

想调整边距，修改 `lib/client.js` 里的 `64px`。数值越小正文越宽，`0px` 时每侧只剩约 32px。

## 已知影响

插件启用时，正文两侧的拖动调宽手柄不再显示。

## 卸载

在插件页打开**宽屏会话**选择卸载，或运行：

```sh
dsh plugin --profile desktop remove dsh-wide-chat
```

## 兼容性

DSH `>=0.2.0-rc.1 <0.3.0`。插件依赖 `@deepseek-ai/dsh-client-ui-conversation` 内部的 CSS 变量 `--dsh-chat-content-width` 和 `--dsh-conversation-column-width`，DSH 升级后若这两个变量改名，插件会失效但不会报错。

## 许可

MIT
