# 开始使用 🚀

欢迎使用个人网站模板！本指南将帮助你快速启动和运行网站。

## 📋 前置要求

确保你已安装：

- **Node.js** 18.x 或更高版本
- **pnpm** 9.x 或更高版本（推荐）
  ```bash
  npm install -g pnpm
  ```

或者使用：
- **npm** 或 **yarn**（也支持）

## 🎯 快速开始（3 步）

### 第 1 步：安装依赖

```bash
pnpm install
```

### 第 2 步：启动开发服务器

```bash
pnpm dev
```

### 第 3 步：打开浏览器

访问 [http://localhost:3000](http://localhost:3000)

🎉 **完成！** 你的网站现在应该正在运行了。

## 🎨 个性化网站（5 分钟）

### 基础信息

#### 1️⃣ 更新网站名称

**文件**: `src/components/Header.tsx` (第 24 行)
```tsx
我的网站  →  你的网站名称
```

**文件**: `src/components/Footer.tsx` (第 23 行)
```tsx
我的网站  →  你的网站名称
```

#### 2️⃣ 更新个人信息

**文件**: `src/components/Hero.tsx` (第 30 行)
```tsx
张三  →  你的名字
```

**文件**: `src/components/Hero.tsx` (第 35 行)
```tsx
一个热爱编程、跑步和分享的全栈开发者  →  你的身份描述
```

#### 3️⃣ 更新元数据

**文件**: `src/data/siteMetadata.ts`
```typescript
const siteMetadata = {
  title: '你的网站名称',
  author: '你的名字',
  email: 'your@email.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
};
```

### 添加内容

#### 📝 添加博客文章

**文件**: `src/components/Blog.tsx` (第 11 行起)

```typescript
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '你的博客标题',
    excerpt: '博客摘要...',
    date: '2024-10-18',
    readTime: '5 分钟',
    category: '技术'
  },
  // 继续添加...
];
```

#### 🏃 更新跑步数据

**文件**: `src/components/Running.tsx` (第 24 行起)

```typescript
const stats: RunningStats[] = [
  {
    label: '总里程',
    value: '你的数据',
    icon: <Activity size={24} />,
  },
  // 继续添加...
];
```

#### 📧 更新联系方式

**文件**: `src/components/Contact.tsx` (第 33 行起)

```typescript
const contactInfo = [
  {
    icon: <Mail size={20} />,
    label: '邮箱',
    value: 'your@email.com',
    href: 'mailto:your@email.com'
  },
  // 继续添加...
];
```

## 📚 完整指南

需要更详细的说明？查看这些文档：

| 文档 | 内容 |
|------|------|
| [QUICK_START_GUIDE.md](./QUICK_START_GUIDE.md) | 详细的配置步骤 |
| [CONFIGURATION.md](./CONFIGURATION.md) | 高级配置选项 |
| [PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md) | 项目架构说明 |
| [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) | 文件结构详解 |
| [FEATURES.md](./FEATURES.md) | 功能清单 |

## 🛠️ 可用命令

```bash
# 开发
pnpm dev          # 启动开发服务器（http://localhost:3000）
pnpm build        # 构建生产版本
pnpm start        # 启动生产服务器
pnpm lint         # 运行 ESLint 检查
pnpm lint --fix   # 自动修复代码问题
```

## 🎨 主题切换

网站内置深色/浅色主题切换：

- 点击右上角的主题切换按钮
- 支持三种模式：
  - ☀️ 浅色模式
  - 🌙 深色模式
  - 💻 跟随系统

## 📱 响应式设计

网站自动适配所有设备：

- 📱 手机（< 768px）
- 📱 平板（768px - 1024px）
- 💻 桌面（> 1024px）

## 🚀 部署到线上

### 方式 1: Vercel（推荐）

1. 推送代码到 GitHub
2. 访问 [vercel.com](https://vercel.com)
3. 点击 "Import Project"
4. 选择你的 GitHub 仓库
5. 点击 "Deploy"

**零配置，自动部署！**

### 方式 2: Netlify

1. 访问 [netlify.com](https://netlify.com)
2. 连接 GitHub 仓库
3. 构建命令：`pnpm build`
4. 发布目录：`.next`
5. 点击 "Deploy"

### 方式 3: 其他平台

支持任何支持 Node.js 的托管平台：
- Railway
- Render
- DigitalOcean
- AWS
- Google Cloud
- Azure

## 🔧 常见问题

### 开发服务器无法启动？

```bash
# 清除缓存
rm -rf .next node_modules
pnpm install
pnpm dev
```

### 样式没有生效？

- 检查 Tailwind 类名拼写
- 确保在 `globals.css` 中导入了 Tailwind
- 重启开发服务器

### TypeScript 报错？

```bash
# 运行类型检查
pnpm tsc --noEmit
```

### 端口被占用？

```bash
# 使用其他端口
pnpm dev -p 3001
```

## 📖 学习资源

### Next.js
- [Next.js 文档](https://nextjs.org/docs)
- [Next.js 学习](https://nextjs.org/learn)

### Tailwind CSS
- [Tailwind 文档](https://tailwindcss.com/docs)
- [Tailwind UI](https://tailwindui.com/)

### TypeScript
- [TypeScript 手册](https://www.typescriptlang.org/docs/)
- [React TypeScript 指南](https://react-typescript-cheatsheet.netlify.app/)

## 🎯 下一步

1. ✅ 启动网站 - 完成！
2. 🎨 个性化内容 - 开始吧！
3. 📝 添加你的博客文章
4. 🏃 更新跑步数据
5. 🚀 部署到线上
6. 📊 添加数据分析
7. 💬 集成评论系统
8. 🔐 添加后端功能

## 💡 提示

- **保存即生效**: 修改代码后自动刷新
- **控制台很有用**: 打开浏览器控制台查看错误
- **查看文档**: 遇到问题先查看文档
- **渐进式开发**: 一步一步来，不要着急

## 🆘 需要帮助？

- 📖 查看完整文档
- 🐛 [报告问题](https://github.com/yourusername/repo/issues)
- 💬 [提问交流](https://github.com/yourusername/repo/discussions)
- 📧 发送邮件：hello@example.com

## 🎉 开始创作

现在一切就绪！开始打造你的个人网站吧！

**记住**：
- 保持简洁
- 定期更新内容
- 享受创作过程

祝你好运！🚀

---

**快速链接**:
- [主页](http://localhost:3000) （开发环境）
- [完整文档](./README.md)
- [配置指南](./CONFIGURATION.md)
- [贡献指南](./CONTRIBUTING.md)

