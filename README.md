This is a [Next.js](https://nextjs.org) project bootstrapped with [
`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


### .env.local文件
```
DATABASE_URL=mysql://root:yourpassword@localhost:3306/mishop

REDIS_URL=redis://localhost:6379

AUTH_SECRET=N43vXS1P9zIWLeU24pjIPusmY99LqmAFcYS9RqiL7w8=

PAYMENT_TIMEOUT=30
```

#### AUTH_SECRET的生成
```
# macOS
openssl rand -base64 32
# Windows can use https://generate-secret.vercel.app/32
```

#### docker运行mysql
```
docker run --name mysql \                    
  -e MYSQL_ROOT_PASSWORD=yourpassword \
  -p 3306:3306 \
  -d mysql         
```

#### docker运行redis
```
docker run --name redis -p 6379:6379 -d redis
```