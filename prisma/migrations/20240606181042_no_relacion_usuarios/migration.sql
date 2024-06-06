/*
  Warnings:

  - You are about to drop the column `usuarioId` on the `Empleo` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Empleo" DROP CONSTRAINT "Empleo_usuarioId_fkey";

-- AlterTable
ALTER TABLE "Empleo" DROP COLUMN "usuarioId";
