# 头像设置指南 🖼️

## ✅ 已完成的优化

### 1. Logo 位置调整
- ✅ "Couture" 移到了**左上角**
- ✅ 高度调整为 56px（更紧凑协调）
- ✅ 添加了细微的底部边框
- ✅ 添加了悬停效果

### 2. 头像说明
目前头像使用的是 👋 emoji，你有两个选择：

## 🎨 选项 1: 使用真实头像图片（推荐）

### 步骤 1: 准备你的头像图片
1. 准备一张正方形的图片（推荐尺寸：400x400px 或更大）
2. 命名为 `avatar.jpg` 或 `avatar.png`
3. 放到 `public` 文件夹中

### 步骤 2: 修改代码
打开 `src/components/Hero.tsx`，找到第 39-46 行：

**当前代码**：
```tsx
{/* 方式1: 使用 emoji */}
👋
{/* 方式2: 使用图片（取消下面注释并替换为你的图片路径）*/}
{/* <img 
    src="/avatar.jpg" 
    alt="Couture" 
    className="w-full h-full rounded-full object-cover"
/> */}
```

**改为**：
```tsx
{/* 使用真实头像 */}
<img 
    src="/avatar.jpg" 
    alt="Couture" 
    className="w-full h-full rounded-full object-cover"
/>
```

### 步骤 3: 查看效果
保存文件，刷新页面，你的头像就显示了！

## 🎭 选项 2: 保持使用 Emoji

如果你想换个 emoji，直接修改第 40 行：

```tsx
{/* 可以换成其他 emoji */}
👋  // 挥手
🚀  // 火箭
💻  // 电脑
🏃  // 跑步
⚡  // 闪电
✨  // 星星
```

## 🖼️ 使用外部图片链接

如果你的头像在其他地方（如 GitHub），也可以直接使用链接：

```tsx
<img 
    src="https://github.com/coutureone.png" 
    alt="Couture" 
    className="w-full h-full rounded-full object-cover"
/>
```

**GitHub 头像链接格式**：
- `https://github.com/你的用户名.png`
- 例如：`https://github.com/coutureone.png`

## 📐 调整头像大小

如果你觉得头像太大或太小，可以修改尺寸：

在 `src/components/Hero.tsx` 第 37 行：

```tsx
{/* 当前大小：w-32 h-32 = 128px */}
<div className="relative w-32 h-32 ...">

{/* 改成小一点：w-24 h-24 = 96px */}
<div className="relative w-24 h-24 ...">

{/* 改成大一点：w-40 h-40 = 160px */}
<div className="relative w-40 h-40 ...">
```

## 🎨 当前布局

```
┌────────────────────────────────────────┐
│ Couture                                │ ← 左上角，更协调
├────────────────────────────────────────┤
│                                        │
│             👋/头像                    │ ← 可替换
│                                        │
│       你好，我是 Couture               │
│                                        │
│   一个热爱编程、跑步和分享的开发者      │
│                                        │
│   ┌────┬────┬────┬────┐              │
│   │ 📦 │ 💬 │ 🏃 │ 📧 │              │
│   └────┴────┴────┴────┘              │
└────────────────────────────────────────┘
```

## 🎯 推荐设置

### 方案 A: 使用真实头像（专业）
```tsx
<img 
    src="https://github.com/coutureone.png" 
    alt="Couture" 
    className="w-full h-full rounded-full object-cover"
/>
```

### 方案 B: 使用 emoji（简洁有趣）
```tsx
👋  // 保持当前的挥手
```

## 📝 完整示例

如果你想用自己的 GitHub 头像：

**文件**: `src/components/Hero.tsx`（第 38-48 行）

```tsx
<div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-lg hover:shadow-xl transition-shadow">
    <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
        <img 
            src="https://github.com/coutureone.png" 
            alt="Couture" 
            className="w-full h-full object-cover"
        />
    </div>
</div>
```

## ✨ 最终效果

- ✅ Logo 在左上角，比例协调
- ✅ 导航栏更紧凑（56px 高度）
- ✅ 头像有渐变边框和阴影效果
- ✅ 悬停时头像阴影加深
- ✅ 整体布局更平衡

## 🚀 快速测试

1. 访问开发服务器
2. 尝试不同的头像
3. 选择你最喜欢的

---

需要帮助？查看代码注释或问我！

