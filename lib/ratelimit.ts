// lib/ratelimit.ts
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

export const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),

  // 10 requests per 10 seconds
  limiter: Ratelimit.slidingWindow(20, "10 s"),

  analytics: true,
});
