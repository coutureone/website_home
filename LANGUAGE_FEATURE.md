# 🌐 中英文翻译功能

## ✅ 已完成

已为你的个人主页添加了完整的中英文切换功能！

## 🎨 界面展示

### 导航栏右上角
```
┌──────────────────────────────────────┐
│ Couture              [🇨🇳 中文] ←切换 │
│                      [🇺🇸 EN]        │
└──────────────────────────────────────┘
```

## 🔄 功能说明

### 1. 语言切换按钮
- **位置**: 右上角
- **样式**: 国旗 + 文字
- **交互**: 点击即可切换
- **状态**: 
  - 中文模式：🇨🇳 中文
  - 英文模式：🇺🇸 EN

### 2. 翻译内容

#### 中文（默认）
```
你好，我是 Couture
一个热爱编程、跑步和分享的开发者
欢迎来到我的个人主页！点击下方按钮探索我的技术博客和跑步记录。

├─ GitHub - 开源项目
├─ 博客 - 技术文章
├─ 跑步 - 运动记录
└─ 联系 - 发送邮件
```

#### 英文
```
Hi, I'm Couture
A developer who loves coding, running and sharing
Welcome to my personal homepage! Click the buttons below to explore my tech blog and running records.

├─ GitHub - Open Source
├─ Blog - Tech Articles
├─ Running - Activity Records
└─ Contact - Send Email
```

## 📁 新增文件

### 1. `src/lib/translations.ts`
翻译字典文件，包含所有中英文文本：

```typescript
export const translations = {
  zh: {
    greeting: '你好，我是',
    subtitle: '一个热爱编程、跑步和分享的开发者',
    // ...
  },
  en: {
    greeting: "Hi, I'm",
    subtitle: 'A developer who loves coding, running and sharing',
    // ...
  }
};
```

### 2. `src/contexts/LanguageContext.tsx`
语言状态管理，使用 React Context：

```typescript
// 提供语言切换功能
export function LanguageProvider({ children })
export function useLanguage()
```

## 🔧 技术实现

### 架构
```
LanguageProvider (Context)
├── Header (切换按钮)
└── Hero (内容翻译)
```

### 状态管理
- 使用 React Context API
- 默认语言：中文 (zh)
- 支持语言：中文 (zh) / 英文 (en)

### 响应式设计
- ✅ 桌面端：显示完整文字
- ✅ 移动端：自适应布局
- ✅ 平滑切换动画

## 📝 如何添加新翻译

### 步骤 1: 编辑翻译文件
打开 `src/lib/translations.ts`，添加新内容：

```typescript
export const translations = {
  zh: {
    greeting: '你好，我是',
    // 添加新的中文翻译
    newText: '这是新内容'
  },
  en: {
    greeting: "Hi, I'm",
    // 添加对应的英文翻译
    newText: 'This is new content'
  }
};
```

### 步骤 2: 使用翻译
在组件中使用：

```tsx
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export default function YourComponent() {
  const { language } = useLanguage();
  const t = translations[language];
  
  return <p>{t.newText}</p>;
}
```

## 🎯 最佳实践

### 1. 保持简洁
- 翻译应当简短明了
- 避免过长的句子

### 2. 文化适配
- 考虑不同文化背景
- 使用合适的表达方式

### 3. 一致性
- 术语翻译保持一致
- 风格统一

## 🌍 支持的语言

当前支持：
- ✅ 中文（简体）- zh
- ✅ 英文 - en

### 想添加更多语言？

编辑 `src/lib/translations.ts`：

```typescript
export const translations = {
  zh: { /* 中文 */ },
  en: { /* English */ },
  ja: { /* 日本語 */ },  // 新增日文
  ko: { /* 한국어 */ },  // 新增韩文
  // ...
};

export type Language = 'zh' | 'en' | 'ja' | 'ko';
```

然后更新切换按钮逻辑。

## 🎨 自定义样式

### 修改按钮样式
编辑 `src/components/Header.tsx` 第 22-29 行：

```tsx
<button
  onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
  className="你的自定义样式"
>
  {/* 按钮内容 */}
</button>
```

### 可选样式示例

**简约风格**：
```tsx
<button className="text-sm hover:text-primary transition-colors">
  {language === 'zh' ? 'EN' : '中文'}
</button>
```

**图标风格**：
```tsx
<button className="p-2 rounded-full hover:bg-secondary">
  {language === 'zh' ? '🇺🇸' : '🇨🇳'}
</button>
```

## ✨ 特性

- ✅ **即时切换** - 点击立即生效
- ✅ **状态保持** - 刷新页面保持选择（可添加 localStorage）
- ✅ **平滑过渡** - 无闪烁切换
- ✅ **TypeScript** - 完整类型支持
- ✅ **SEO 友好** - 可扩展多语言 SEO

## 🔮 未来增强

可以考虑添加：

1. **本地存储** - 记住用户语言偏好
```typescript
// 在 LanguageContext.tsx 中
useEffect(() => {
  localStorage.setItem('language', language);
}, [language]);
```

2. **浏览器语言检测** - 自动选择合适语言
```typescript
const browserLang = navigator.language.startsWith('zh') ? 'zh' : 'en';
```

3. **URL 参数** - 支持 URL 指定语言
```typescript
// ?lang=en
const urlLang = new URLSearchParams(window.location.search).get('lang');
```

## 🎉 完成！

你的网站现在支持中英文切换了！

- ✅ 界面完全翻译
- ✅ 一键切换
- ✅ 美观易用

刷新页面试试右上角的切换按钮！🌐

