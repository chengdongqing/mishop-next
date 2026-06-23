import { redis } from "@/lib/redis";
import dotenv from "dotenv";
import { createServer } from "http";
import fs from "node:fs";
import { Server } from "socket.io";

if (fs.existsSync(".env.local")) {
  dotenv.config({ path: ".env.local" });
} else {
  dotenv.config();
}

const server = createServer();
const io = new Server(server, { cors: { origin: "*" } });

void redis.subscribe("order_paid");
redis.on("message", (channel, orderId) => {
  if (channel === "order_paid") {
    // 通知客户端
    io.to(orderId).emit("paid", "订单支付成功");
  }
});

// 处理与客户端建立连接
io.on("connection", (socket) => {
  socket.on("join", (orderId) => {
    void socket.join(orderId);
  });
});

server.listen(3001, () => {
  console.log("🚀 IO Socket 启动完成...");
});
