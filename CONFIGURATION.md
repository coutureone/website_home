# 配置指南

本文档介绍如何配置和扩展你的个人网站。

## 📋 基础配置

### 1. 网站元数据

编辑 `src/data/siteMetadata.ts`：

```typescript
const siteMetadata = {
  locale: 'zh-CN',                    // 网站语言
  title: '我的个人网站',              // 网站标题
  author: '张三',                     // 作者名称
  description: '网站描述...',         // 网站描述
  siteUrl: 'https://example.com',    // 网站 URL
  email: 'hello@example.com',        // 联系邮箱
  github: 'https://github.com',      // GitHub 链接
  linkedin: 'https://linkedin.com',  // LinkedIn 链接
};
```

### 2. SEO 配置

编辑 `src/app/layout.tsx` 中的 metadata：

```typescript
export const metadata: Metadata = {
  title: '网站标题',
  description: '网站描述',
  keywords: ['关键词1', '关键词2'],
  authors: [{ name: '作者名' }],
  openGraph: {
    title: 'OG 标题',
    description: 'OG 描述',
    type: 'website',
    locale: 'zh_CN'
  }
};
```

## 🎨 主题配置

### 自定义颜色

编辑 `src/app/globals.css` 中的 CSS 变量：

```css
:root {
  /* 浅色模式 */
  --primary: 0 0% 9%;           /* 主色 */
  --secondary: 0 0% 96.1%;      /* 辅色 */
  --accent: 0 0% 96.1%;         /* 强调色 */
  --background: 0 0% 100%;      /* 背景色 */
  --foreground: 0 0% 3.9%;      /* 文字色 */
}

.dark {
  /* 深色模式 */
  --primary: 0 0% 98%;
  --background: 0 0% 3.9%;
  /* ... */
}
```

### 修改渐变色

在各个组件中查找 `from-blue-600 to-purple-600` 并修改为你喜欢的颜色：

```tsx
// 例如在 Hero.tsx 中
<span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
  你的名字
</span>
```

## 📝 内容配置

### 博客内容

编辑 `src/components/Blog.tsx`：

```typescript
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '文章标题',
    excerpt: '文章摘要，约 50-100 字',
    date: '2024-10-18',          // YYYY-MM-DD 格式
    readTime: '5 分钟',          // 阅读时长
    category: '分类名称'         // 文章分类
  }
];
```

**注意**: 这是静态数据。如需动态博客，考虑集成：
- [Contentlayer](https://contentlayer.dev/) - MDX 支持
- [Sanity](https://www.sanity.io/) - Headless CMS
- [Contentful](https://www.contentful.com/) - Headless CMS

### 跑步数据

编辑 `src/components/Running.tsx`：

**统计数据**:
```typescript
const stats: RunningStats[] = [
  {
    label: '总里程',
    value: '2,458 km',
    icon: <Activity size={24} />,
    change: '+12.3%'  // 增长百分比（可选）
  }
];
```

**跑步记录**:
```typescript
const recentRuns: RunningRecord[] = [
  {
    id: 1,
    date: '2024-10-18',
    distance: '10.5 km',
    time: '56:32',
    pace: "5'23\"/km",
    route: '路线名称'
  }
];
```

**集成运动 API**（推荐）:
- [Strava API](https://developers.strava.com/) - 自动同步跑步数据
- [Garmin Connect](https://developer.garmin.com/) - Garmin 设备数据
- [Nike Run Club](https://www.nike.com/nrc-app) - Nike 应用数据

### 联系信息

编辑 `src/components/Contact.tsx`：

```typescript
const contactInfo = [
  {
    icon: <Mail size={20} />,
    label: '邮箱',
    value: 'your@email.com',
    href: 'mailto:your@email.com'
  },
  {
    icon: <Phone size={20} />,
    label: '电话',
    value: '+86 138 0000 0000',
    href: 'tel:+8613800000000'
  },
  {
    icon: <MapPin size={20} />,
    label: '位置',
    value: '城市名',
    href: null  // 如果不需要链接，设为 null
  }
];
```

## 🔌 集成配置

### 联系表单后端

当前表单只有前端验证。要处理实际提交，你可以：

#### 选项 1: Formspree (最简单)

1. 注册 [Formspree](https://formspree.io/)
2. 创建表单并获取端点
3. 修改 `src/components/Contact.tsx` 的 `handleSubmit`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  
  if (response.ok) {
    alert('消息发送成功！');
    setFormData({ name: '', email: '', message: '' });
  }
};
```

#### 选项 2: EmailJS

1. 注册 [EmailJS](https://www.emailjs.com/)
2. 安装: `pnpm add @emailjs/browser`
3. 配置服务并使用其 SDK

#### 选项 3: 自建 API

创建 API 路由 `src/app/api/contact/route.ts`:

```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  
  // 处理邮件发送逻辑
  // 可以使用 Nodemailer、SendGrid 等
  
  return NextResponse.json({ success: true });
}
```

### Google Analytics

1. 安装: `pnpm add @next/third-parties`
2. 在 `src/app/layout.tsx` 中添加:

```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

### RSS 订阅

创建 `src/app/rss.xml/route.ts`:

```typescript
import { blogPosts } from '@/data/blogData';

export async function GET() {
  const rss = generateRSSFeed(blogPosts);
  
  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
```

## 🚀 部署配置

### Vercel (推荐)

1. 推送代码到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. 自动部署完成！

**环境变量**: 在 Vercel 项目设置中添加

### Netlify

1. 在 [Netlify](https://www.netlify.com/) 导入项目
2. 构建命令: `pnpm build`
3. 发布目录: `.next`

### 自托管

```bash
# 构建
pnpm build

# 启动生产服务器
pnpm start
```

使用 PM2 管理进程:
```bash
pm2 start pnpm --name "my-website" -- start
```

## 🔐 安全配置

### 环境变量

创建 `.env.local` (不要提交到 Git):

```bash
# 示例
NEXT_PUBLIC_SITE_URL=https://yoursite.com
FORM_ENDPOINT=https://api.example.com/contact
STRAVA_CLIENT_SECRET=your-secret
```

### Headers 配置

在 `next.config.mjs` 中添加安全头:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
```

## 📊 性能优化

### 图片优化

使用 Next.js Image 组件:

```tsx
import Image from 'next/image';

<Image
  src="/your-image.jpg"
  alt="描述"
  width={500}
  height={300}
  priority  // 对首屏图片使用
/>
```

### 字体优化

已使用 `next/font` 优化 Inter 字体。添加其他字体:

```typescript
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});
```

### 代码分割

Next.js 自动处理代码分割。对于大型组件，使用动态导入:

```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('@/components/Heavy'), {
  loading: () => <p>加载中...</p>,
});
```

## 🛠️ 高级配置

### 国际化

安装 next-intl:
```bash
pnpm add next-intl
```

### 数据库集成

推荐使用:
- [Prisma](https://www.prisma.io/) - ORM
- [Drizzle](https://orm.drizzle.team/) - TypeScript ORM
- [Supabase](https://supabase.com/) - Backend as a Service

### 认证

推荐使用:
- [NextAuth.js](https://next-auth.js.org/) - 完整认证解决方案
- [Clerk](https://clerk.com/) - 用户管理平台

## 📚 参考资源

- [Next.js 文档](https://nextjs.org/docs)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [Radix UI 文档](https://www.radix-ui.com/)
- [TypeScript 手册](https://www.typescriptlang.org/docs/)

---

有问题？查看 [README.md](./README.md) 或创建 Issue！

