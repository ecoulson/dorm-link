-- CreateTable
CREATE TABLE "ListingApproval" (
    "id" TEXT NOT NULL,
    "approved" BOOLEAN NOT NULL,
    "approverId" TEXT NOT NULL,
    "approvedAt" TIMESTAMP(3) NOT NULL,
    "listingId" TEXT NOT NULL,

    CONSTRAINT "ListingApproval_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ListingApproval_listingId_key" ON "ListingApproval"("listingId");

-- AddForeignKey
ALTER TABLE "ListingApproval" ADD CONSTRAINT "ListingApproval_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "Listing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;