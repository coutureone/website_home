# 贡献指南

感谢你考虑为这个项目做出贡献！本指南将帮助你了解如何参与项目开发。

## 🤝 如何贡献

### 报告问题

如果你发现了 bug 或有功能建议：

1. 检查 [Issues](https://github.com/yourusername/your-repo/issues) 是否已存在相同问题
2. 如果没有，创建新 Issue
3. 清楚描述问题或建议
4. 如果是 bug，请提供：
   - 复现步骤
   - 预期行为
   - 实际行为
   - 截图（如果适用）
   - 环境信息（浏览器、操作系统等）

### 提交代码

#### 1. Fork 和 Clone

```bash
# Fork 项目到你的 GitHub 账号
# 然后 clone 到本地
git clone https://github.com/your-username/your-fork.git
cd your-fork

# 添加上游仓库
git remote add upstream https://github.com/original/repo.git
```

#### 2. 创建分支

```bash
# 从 main 分支创建新分支
git checkout -b feature/your-feature-name

# 或者修复 bug
git checkout -b fix/bug-description
```

**分支命名规范**：
- `feature/` - 新功能
- `fix/` - Bug 修复
- `docs/` - 文档更新
- `style/` - 代码格式调整
- `refactor/` - 代码重构
- `test/` - 测试相关
- `chore/` - 构建或工具相关

#### 3. 开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 进行你的修改...
```

#### 4. 提交代码

我们使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```bash
# 提交格式
<type>(<scope>): <subject>

# 示例
feat(blog): add search functionality
fix(contact): resolve form validation issue
docs(readme): update installation guide
style(header): improve responsive layout
refactor(running): optimize data fetching
test(blog): add unit tests for blog component
chore(deps): update dependencies
```

**提交类型**：
- `feat`: 新功能
- `fix`: Bug 修复
- `docs`: 文档更新
- `style`: 代码格式（不影响功能）
- `refactor`: 重构
- `perf`: 性能优化
- `test`: 测试
- `build`: 构建系统
- `ci`: CI/CD 配置
- `chore`: 其他修改

**提交示例**：
```bash
git add .
git commit -m "feat(blog): add pagination to blog list"
git commit -m "fix(contact): validate email format before submission"
git commit -m "docs(contributing): add code style guidelines"
```

#### 5. 推送和 Pull Request

```bash
# 推送到你的 fork
git push origin feature/your-feature-name

# 在 GitHub 上创建 Pull Request
```

**Pull Request 检查清单**：
- [ ] 代码遵循项目风格
- [ ] 通过所有 linting 检查
- [ ] 更新了相关文档
- [ ] 添加了必要的测试
- [ ] 提交信息符合规范
- [ ] PR 描述清晰

## 📝 代码规范

### TypeScript

```typescript
// ✅ 好的
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
}

const post: BlogPost = {
  id: 1,
  title: '标题',
  excerpt: '摘要'
};

// ❌ 不好的
const post = {
  id: 1,
  title: '标题',
  excerpt: '摘要'
};
```

### React 组件

```typescript
// ✅ 好的 - 使用 TypeScript 接口
interface Props {
  title: string;
  onClick?: () => void;
}

export default function MyComponent({ title, onClick }: Props) {
  return (
    <button onClick={onClick}>
      {title}
    </button>
  );
}

// ❌ 不好的 - 缺少类型定义
export default function MyComponent({ title, onClick }) {
  return (
    <button onClick={onClick}>
      {title}
    </button>
  );
}
```

### Tailwind CSS

```tsx
// ✅ 好的 - 使用语义化的类名组合
<div className="flex items-center justify-between px-4 py-2 bg-background rounded-lg border">
  Content
</div>

// ❌ 不好的 - 避免过长的类名字符串
<div className="flex items-center justify-between padding-left-4 padding-right-4 padding-top-2 padding-bottom-2 background-color-background border-radius-large border-width-1">
  Content
</div>
```

### 文件组织

```typescript
// 组件文件结构
// 1. Import 语句
import { useState } from 'react';
import Link from 'next/link';
import { Icon } from 'lucide-react';

// 2. 类型定义
interface Props {
  // ...
}

// 3. 常量和配置
const CONFIG = {
  // ...
};

// 4. 组件定义
export default function Component({ }: Props) {
  // a. Hooks
  const [state, setState] = useState();
  
  // b. 事件处理函数
  const handleClick = () => {
    // ...
  };
  
  // c. 渲染逻辑
  return (
    // JSX
  );
}
```

## 🧪 测试

目前项目还没有测试，但我们欢迎贡献：

```bash
# 将来添加测试时
pnpm test           # 运行测试
pnpm test:watch     # 监听模式
pnpm test:coverage  # 覆盖率报告
```

## 🔍 代码检查

提交前请确保通过所有检查：

```bash
# ESLint 检查
pnpm lint

# 自动修复
pnpm lint --fix

# TypeScript 类型检查
pnpm tsc --noEmit

# 构建测试
pnpm build
```

## 📚 文档

更新文档时：

- 保持简洁明了
- 提供代码示例
- 更新相关的 markdown 文件
- 检查拼写和语法

需要更新的文档：
- `README.md` - 如果改变了使用方式
- `CONFIGURATION.md` - 如果添加了配置选项
- `FEATURES.md` - 如果添加了新功能
- `CHANGELOG.md` - 记录你的更改

## 🎨 设计指南

### 颜色使用

使用 Tailwind 的语义化颜色类：

```tsx
// ✅ 使用语义化颜色
<div className="bg-primary text-primary-foreground">Primary</div>
<div className="bg-secondary text-secondary-foreground">Secondary</div>

// ❌ 避免硬编码颜色
<div className="bg-blue-500 text-white">Primary</div>
```

### 响应式设计

移动优先，使用 Tailwind 断点：

```tsx
<div className="
  text-sm         /* 移动端 */
  md:text-base    /* 平板 */
  lg:text-lg      /* 桌面 */
">
  Responsive Text
</div>
```

### 可访问性

确保组件可访问：

```tsx
// ✅ 好的
<button
  aria-label="Close menu"
  onClick={handleClose}
>
  <X />
</button>

// ❌ 不好的
<div onClick={handleClose}>
  <X />
</div>
```

## 🐛 调试技巧

### 开发工具

```bash
# 详细的构建输出
pnpm build -- --debug

# 分析包大小
pnpm build && npx @next/bundle-analyzer
```

### 常见问题

**样式不生效**：
- 检查 Tailwind 配置
- 确认类名拼写正确
- 检查深色模式变量

**TypeScript 错误**：
- 运行 `pnpm tsc` 查看详细错误
- 检查类型定义是否正确
- 确认导入路径

**构建失败**：
- 清除缓存：`rm -rf .next`
- 重新安装依赖：`rm -rf node_modules && pnpm install`
- 检查 Node.js 版本

## 💬 社区

### 行为准则

- 尊重所有贡献者
- 接受建设性批评
- 关注项目目标
- 友好帮助新手

### 交流渠道

- GitHub Issues - 问题和建议
- GitHub Discussions - 讨论和问答
- Pull Requests - 代码审查

## 🎯 优先级指南

我们特别欢迎以下方面的贡献：

### 高优先级 🔴
1. Bug 修复
2. 文档改进
3. 可访问性增强
4. 性能优化
5. 测试添加

### 中优先级 🟡
1. 新功能实现
2. UI 改进
3. 代码重构
4. 工具和构建优化

### 低优先级 🟢
1. 实验性功能
2. 大规模重构
3. 破坏性更改

## 📋 发布流程

（仅适用于维护者）

1. 更新版本号（`package.json`）
2. 更新 `CHANGELOG.md`
3. 提交更改：`git commit -m "chore: release v1.x.x"`
4. 创建标签：`git tag v1.x.x`
5. 推送：`git push && git push --tags`

## ❓ 需要帮助？

- 查看现有 Issues 和 Discussions
- 阅读项目文档
- 询问维护者

## 🙏 感谢

感谢所有贡献者让这个项目变得更好！

你的贡献将被记录在：
- Git 提交历史
- `CHANGELOG.md`
- GitHub Contributors 页面

---

再次感谢你的贡献！🎉

