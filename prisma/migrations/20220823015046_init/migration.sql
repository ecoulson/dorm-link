-- CreateEnum
CREATE TYPE "ContactMethodType" AS ENUM ('EMAIL', 'PHONE');

-- CreateTable
CREATE TABLE "Listing" (
    "id" TEXT NOT NULL,
    "images" TEXT[],
    "price" INTEGER NOT NULL,
    "city" TEXT NOT NULL,

    CONSTRAINT "Listing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContactInformation" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "school" TEXT NOT NULL,
    "listingId" TEXT NOT NULL,

    CONSTRAINT "ContactInformation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContactMethod" (
    "id" TEXT NOT NULL,
    "type" "ContactMethodType" NOT NULL,
    "value" TEXT NOT NULL,
    "contactInformationId" TEXT NOT NULL,

    CONSTRAINT "ContactMethod_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ContactInformation_listingId_key" ON "ContactInformation"("listingId");

-- AddForeignKey
ALTER TABLE "ContactInformation" ADD CONSTRAINT "ContactInformation_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "Listing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContactMethod" ADD CONSTRAINT "ContactMethod_contactInformationId_fkey" FOREIGN KEY ("contactInformationId") REFERENCES "ContactInformation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
