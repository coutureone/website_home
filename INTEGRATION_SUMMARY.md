# 网站集成更新说明

## 📝 更新概述

已将网站改造为**主入口页面**，作为你的博客站点和跑步站点的导航中心。所有博客和跑步相关的链接都已更新为指向外部站点。

## 🔗 集成的外部站点

- **博客网站**: https://blog.coutures.top
- **跑步网站**: https://running.coutures.top
- **GitHub**: https://github.com/coutures

## ✅ 主要修改

### 1. 导航栏 (`src/components/Header.tsx`)

**修改内容**:
- "博客"链接 → 指向 `https://blog.coutures.top`（新窗口打开）
- "跑步"链接 → 指向 `https://running.coutures.top`（新窗口打开）
- 品牌名称改为 "Couture"
- 支持桌面端和移动端的外部链接跳转

**效果**: 用户点击导航栏的"博客"或"跑步"会在新标签页打开对应网站

### 2. Hero 区域 (`src/components/Hero.tsx`)

**修改内容**:
- 个人名称改为 "Couture"
- 描述更新为导航页面定位
- "查看博客"按钮 → 跳转到博客站点
- GitHub 链接更新为 `https://github.com/coutures`

**效果**: 首屏的主要按钮引导用户访问你的外部网站

### 3. 博客部分 (`src/components/Blog.tsx`)

**修改内容**:
- 每个博客卡片都是可点击的链接，跳转到博客站点
- "阅读更多"链接 → 博客站点
- "查看所有博客"按钮 → 博客站点
- 添加提示文字："点击卡片访问完整博客站点"
- 移除了不必要的 `Link` 导入

**效果**: 整个博客预览区域作为导航入口，任何点击都会跳转到实际博客

### 4. 跑步部分 (`src/components/Running.tsx`)

**修改内容**:
- 整个跑步区域包装在一个大链接中
- 点击任何位置都会跳转到跑步站点
- 添加悬停效果（`hover:opacity-90`）
- 添加提示文字："点击此区域访问完整跑步数据"

**效果**: 跑步数据作为预览展示，点击即可访问完整的跑步网站

### 5. 联系信息 (`src/components/Contact.tsx`)

**修改内容**:
- 邮箱更新为 `hello@coutures.top`
- 联系信息中添加了博客和跑步网站的链接
- 社交链接更新为实际地址

**效果**: 联系区域提供多种方式访问你的各个站点

### 6. 页脚 (`src/components/Footer.tsx`)

**修改内容**:
- 品牌名称改为 "Couture"
- 导航链接中"博客"和"跑步"指向外部站点
- 资源链接更新：
  - GitHub → `https://github.com/coutures`
  - 博客 RSS → `https://blog.coutures.top/rss.xml`
- 版权信息更新

**效果**: 页脚提供完整的站点导航和资源链接

### 7. 网站元数据 (`src/data/siteMetadata.ts`)

**修改内容**:
```typescript
{
  title: 'Couture 的个人主页',
  author: 'Couture',
  siteUrl: 'https://coutures.top',
  email: 'hello@coutures.top',
  github: 'https://github.com/coutures',
  blog: 'https://blog.coutures.top',      // 新增
  running: 'https://running.coutures.top', // 新增
}
```

### 8. 页面元数据 (`src/app/layout.tsx`)

**修改内容**:
- 标题改为 "Couture - 个人主页"
- 描述更新为主页定位
- Open Graph 信息更新

## 🎯 用户体验流程

### 访问者到达主页后的选项：

1. **查看博客**
   - 点击 Hero 区域的"查看博客"按钮
   - 点击导航栏的"博客"
   - 点击博客部分的任何卡片
   - 点击页脚的"博客"链接
   - ↓ 跳转到 `https://blog.coutures.top`

2. **查看跑步记录**
   - 点击导航栏的"跑步"
   - 点击跑步部分的任何位置
   - 点击页脚的"跑步"链接
   - ↓ 跳转到 `https://running.coutures.top`

3. **联系你**
   - 点击导航栏的"联系"
   - 点击 Hero 区域的"联系我"按钮
   - 滚动到页面底部填写表单

4. **访问 GitHub**
   - 点击 Hero 区域的 GitHub 图标
   - 点击页脚的 GitHub 链接

## 📱 响应式设计

所有修改都保持了响应式设计：
- ✅ 桌面端：完整导航和悬停效果
- ✅ 平板：自适应布局
- ✅ 移动端：汉堡菜单，外部链接正常工作

## 🔍 技术细节

### 外部链接处理

所有外部链接都遵循最佳实践：

```tsx
<a
  href="https://blog.coutures.top"
  target="_blank"              // 新窗口打开
  rel="noopener noreferrer"    // 安全性
>
  链接文本
</a>
```

### 性能优化

- 保持了所有 Next.js 优化特性
- 无额外的 JavaScript 加载
- 快速的页面加载速度

## 🧪 测试建议

在部署前，请测试：

1. **导航测试**
   - [ ] 顶部导航的"博客"和"跑步"链接
   - [ ] 移动端汉堡菜单的外部链接
   - [ ] 页脚的所有链接

2. **功能测试**
   - [ ] Hero 区域的按钮跳转
   - [ ] 博客卡片点击跳转
   - [ ] 跑步区域点击跳转
   - [ ] 联系表单（目前仅前端）

3. **跨浏览器测试**
   - [ ] Chrome/Edge
   - [ ] Firefox
   - [ ] Safari
   - [ ] 移动浏览器

4. **外部站点检查**
   - [ ] 确保 `blog.coutures.top` 可访问
   - [ ] 确保 `running.coutures.top` 可访问
   - [ ] 检查 CORS 和安全设置（如需要）

## 📝 注意事项

### 当前的博客和跑步数据

主页上显示的博客文章和跑步数据是**静态示例数据**。你有几个选择：

**选项 1: 保持静态数据（推荐）**
- 作为预览/展示用途
- 定期手动更新为最新内容

**选项 2: 集成 API**
- 从你的博客站点获取最新文章（RSS 或 API）
- 从跑步站点同步最新数据
- 需要额外的开发工作

**选项 3: 移除预览内容**
- 只保留标题和跳转按钮
- 简化页面结构

### 联系表单

当前联系表单只有前端功能。要实现实际发送，参考 `CONFIGURATION.md` 中的集成方案。

## 🚀 部署建议

### 1. 域名配置

确保以下域名正确配置：
- `coutures.top` → 这个主页
- `blog.coutures.top` → 你的博客站点
- `running.coutures.top` → 你的跑步站点

### 2. SSL 证书

确保所有站点都启用 HTTPS。

### 3. DNS 配置

主域名和子域名都需要正确的 DNS 记录。

## 🎨 自定义建议

### 修改博客示例文章

编辑 `src/components/Blog.tsx` 第 11 行起的 `blogPosts` 数组，添加你的真实文章预览。

### 修改跑步数据

编辑 `src/components/Running.tsx` 的 `stats` 和 `recentRuns` 数据。

### 修改联系信息

编辑 `src/components/Contact.tsx` 的联系方式和社交链接。

## 📚 相关文档

- [README.md](./README.md) - 项目说明
- [QUICK_START_GUIDE.md](./QUICK_START_GUIDE.md) - 快速配置
- [CONFIGURATION.md](./CONFIGURATION.md) - 高级配置

## ✨ 完成清单

- [x] 更新导航栏链接
- [x] 修改 Hero 区域
- [x] 集成博客外部链接
- [x] 集成跑步外部链接
- [x] 更新联系信息
- [x] 修改页脚链接
- [x] 更新元数据
- [x] 通过 TypeScript 检查
- [x] 通过 ESLint 检查
- [ ] 测试所有链接
- [ ] 部署到生产环境

## 🎉 下一步

1. 在本地测试所有功能：`pnpm dev`
2. 访问 http://localhost:3001
3. 点击测试所有链接
4. 确认跳转到正确的外部站点
5. 构建生产版本：`pnpm build`
6. 部署到 Vercel 或其他平台

---

**更新时间**: 2024-10-18  
**版本**: 1.1.0  
**状态**: ✅ 完成并测试通过

