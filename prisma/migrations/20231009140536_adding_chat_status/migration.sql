-- CreateEnum
CREATE TYPE "ChatStatus" AS ENUM ('PENDING_CONFIRMATION', 'ACTIVE', 'REMOVED');

-- AlterTable
ALTER TABLE "Chat" ADD COLUMN     "status" "ChatStatus" NOT NULL DEFAULT 'PENDING_CONFIRMATION';
