# mishop-next

精仿小米商城，基于Next.js 15 + React 19 + TypeScript。

👉 项目地址：

1. [https://github.com/chengdongqing/mishop-next](https://github.com/chengdongqing/mishop-next)
2. [https://gitee.com/chengdongqing/mishop-next](https://gitee.com/chengdongqing/mishop-next)

---

## ✨ 项目亮点

- ✅ 使用 **Next.js App Router** 最新架构，服务端渲染
- ✅ 使用 **React 19** 新特性（如 `useActionState`, `useOptimistic`, `useTransition`, `use` 等提升开发体验和用户体验）
- ✅ 部分页面支持 **深色/浅色/自适应主题**
- ✅ 部分页面支持 **多语言切换+`RTL`**
- ✅ `WebSocket` 支付成功模拟
- ✅ `Redis` + `BullMQ` 实现超时订单自动取消
- ✅ 使用 `Drizzle ORM` 操作 MySQL 数据库
- ✅ 部分动画使用 `motion`
- ✅ 样式使用 `tailwindcss`
- ✅ 前后端异步交互使用Next.js内部`RPC`协议

---

## 效果预览

<img src="readme/home.png" alt="home page" width="240"></img>
<img src="readme/search.png" alt="search page" width="240"></img>
<img src="readme/buy.png" alt="buy page" width="240"></img>
<img src="readme/spec.png" alt="spec page" width="240"></img>
<img src="readme/product.png" alt="product page" width="240"></img>
<img src="readme/cart.png" alt="cart page" width="240"></img>
<img src="readme/orders.png" alt="orders page" width="240"></img>
<img src="readme/order.png" alt="order page" width="240"></img>
<img src="readme/address.png" alt="address page" width="240"></img>
<img src="readme/profile.png" alt="profile page" width="240"></img>
<img src="readme/account.png" alt="account page" width="240"></img>
<img src="readme/auth.png" alt="account page" width="240"></img>

## 🧩 功能一览

### 用户模块

- 用户注册、登录、找回密码
- 登录方式：密码登录、短信验证码登录
- 修改个人信息、修改密码
- 账号安全、收藏商品、地址管理

### 商品模块

- 首页、搜索页
- 商品详情页
- 商品参数、评论展示
- 商品购买页

### 购物与订单

- 购物车、结算页、支付页
- 订单列表、订单详情、订单评价
- 超时订单自动取消（Redis + BullMQ）
- WebSocket 模拟支付成功通知

### 其他功能

- 视频列表页
- 部分页面国际化支持
- 部分页面主题切换（亮 / 暗 / 自适应）等

---

## 🏗️ 技术栈

| 类别   | 技术栈                      |
|------|--------------------------|
| 前端框架 | Next.js 15+ (App Router) |
| 前端库  | React 19                 |
| 样式   | Tailwind CSS, Motion     | |
| 数据库  | MySQL + Drizzle ORM      |
| 消息队列 | Redis + BullMQ           |
| 实时通信 | WebSocket                |
| 国际化  | next-intl                |
| 认证   | next-auth                |

---

## 🚀 快速开始

### 1. 克隆仓库

```bash
git clone https://github.com/chengdongqing/mishop-next.git
cd mishop-next
```

### 2. 安装依赖

```bash
npm install
# 或
yarn install
```

### 3. 配置环境变量

创建 `.env.local` 文件，并填写如下内容：

```env
DATABASE_URL=mysql://root:yourpassword@localhost:3306/mishop
REDIS_URL=redis://localhost:6379

AUTH_SECRET=N43vXS1P9zIWLeU24pjIPusmY99LqmAFcYS9RqiL7w8=
AUTH_TRUST_HOST=http://localhost:3000

PAYMENT_TIMEOUT=30
```

#### 🔐 生成 AUTH_SECRET

```bash
# macOS / Linux
openssl rand -base64 32

# Windows 用户可访问：https://generate-secret.vercel.app/32
```

### 4. 使用 Docker 启动 MySQL 和 Redis（可选）

```bash
# MySQL
docker run --name mysql \
  -e MYSQL_ROOT_PASSWORD=yourpassword \
  -p 3306:3306 \
  -d mysql

# Redis
docker run --name redis -p 6379:6379 -d redis
```

### 5. 启动开发服务器

```bash
npm run dev
# 或
yarn dev
```

#### 启动项目同时启动`bullmq`、`socket.io`服务，可实现模拟支付回调、订单超时未支付自动取消

```bash
npm run dev:all
# 或
yarn dev:all
```

### 6.数据库初始化

1. 手动创建数据库，并命名为`mishop`

2. 访问 [http://localhost:3000/seed](http://localhost:3000/seed) 初始化数据，调用此接口会直接创建数据库表+填充初始数据，注意此操作会影响已存在的数据。

---

### 7. 构建生产版本

```bash
npm run build
```

运行生产版本

```bash
npm run start
# 或
npm run start:all
```

构建后页面响应速度将大幅提升

## 🐞 已知问题

- 🔍 搜索功能未使用全文索引或搜索引擎（如 ElasticSearch）
- 🌐 页面静态化（SSG）后无法动态响应主题 / 语言切换
- 💰 支付/发送验证码仅为模拟流程
- 还有若干问题待优化

---

## 🤝 欢迎贡献

欢迎大家提Bug或建议（Issue）、补充新功能、增强用户体验等

---

## 📬 联系方式

欢迎通过以下方式与我联系交流项目问题或技术经验：

- 📧 邮箱：1912525497@qq.com
- 🐙 GitHub：[https://github.com/chengdongqing](https://github.com/chengdongqing)
- 📘 掘金：[@海盐芝士不加糖](https://juejin.cn/user/3459525081568276)

如果你喜欢这个项目，欢迎 Star ⭐、Fork 🍴、提 Issue 🐛，你的支持是我持续优化的动力！

---

## 📚 推荐学习资源

- [Next.js 官网](https://nextjs.org)
- [React 官网](https://react.dev)
- [TailwindCSS 官网](https://tailwindcss.com)
- [Drizzle ORM](https://orm.drizzle.team/)

---

## 📄 开源协议

[MIT License](LICENSE)