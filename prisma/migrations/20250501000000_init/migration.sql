-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'DONOR', 'VOLUNTEER', 'STAFF', 'ADMIN');

-- CreateEnum
CREATE TYPE "DonationFrequency" AS ENUM ('ONE_TIME', 'WEEKLY', 'MONTHLY', 'QUARTERLY', 'ANNUALLY');

-- CreateEnum
CREATE TYPE "DonationStatus" AS ENUM ('PENDING', 'PROCESSING', 'SUCCEEDED', 'FAILED', 'REFUNDED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "VolunteerStatus" AS ENUM ('PENDING', 'REVIEWING', 'APPROVED', 'ACTIVE', 'INACTIVE', 'REJECTED');

-- CreateEnum
CREATE TYPE "EventType" AS ENUM ('CONFERENCE', 'WORKSHOP', 'OUTREACH', 'FUNDRAISER', 'COMMUNITY', 'VIRTUAL', 'TRAINING', 'GALA');

-- CreateEnum
CREATE TYPE "EventStatus" AS ENUM ('UPCOMING', 'ONGOING', 'COMPLETED', 'CANCELLED', 'POSTPONED');

-- CreateEnum
CREATE TYPE "ArticleCategory" AS ENUM ('NEWS', 'IMPACT_STORY', 'PRESS_RELEASE', 'BLOG', 'REPORT', 'ANNOUNCEMENT');

-- CreateEnum
CREATE TYPE "ProjectStatus" AS ENUM ('PLANNING', 'ACTIVE', 'COMPLETED', 'PAUSED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "PartnerType" AS ENUM ('CORPORATE', 'NGO', 'GOVERNMENT', 'ACADEMIC', 'MEDIA', 'INDIVIDUAL');

-- CreateEnum
CREATE TYPE "CampaignStatus" AS ENUM ('DRAFT', 'ACTIVE', 'PAUSED', 'COMPLETED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "GrantStatus" AS ENUM ('SUBMITTED', 'UNDER_REVIEW', 'SHORTLISTED', 'APPROVED', 'REJECTED', 'FUNDED');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "clerkId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "imageUrl" TEXT,
    "role" "UserRole" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Donation" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'USD',
    "frequency" "DonationFrequency" NOT NULL DEFAULT 'ONE_TIME',
    "paymentMethod" TEXT NOT NULL,
    "paymentIntentId" TEXT,
    "paystackRef" TEXT,
    "flutterwaveRef" TEXT,
    "paypalOrderId" TEXT,
    "status" "DonationStatus" NOT NULL DEFAULT 'PENDING',
    "programDesignation" TEXT,
    "dedicatedTo" TEXT,
    "message" TEXT,
    "anonymous" BOOLEAN NOT NULL DEFAULT false,
    "receiptSent" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Donation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Volunteer" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phone" TEXT,
    "dateOfBirth" TIMESTAMP(3),
    "address" TEXT,
    "city" TEXT,
    "state" TEXT,
    "country" TEXT NOT NULL DEFAULT 'Nigeria',
    "occupation" TEXT,
    "skills" TEXT[],
    "interests" TEXT[],
    "availability" TEXT[],
    "hoursPerWeek" INTEGER NOT NULL DEFAULT 4,
    "programs" TEXT[],
    "motivation" TEXT NOT NULL,
    "emergencyName" TEXT,
    "emergencyPhone" TEXT,
    "backgroundCheck" BOOLEAN NOT NULL DEFAULT false,
    "status" "VolunteerStatus" NOT NULL DEFAULT 'PENDING',
    "verifiedAt" TIMESTAMP(3),
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Volunteer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" "EventType" NOT NULL DEFAULT 'COMMUNITY',
    "status" "EventStatus" NOT NULL DEFAULT 'UPCOMING',
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "location" TEXT,
    "locationUrl" TEXT,
    "isVirtual" BOOLEAN NOT NULL DEFAULT false,
    "virtualLink" TEXT,
    "imageUrl" TEXT,
    "maxAttendees" INTEGER,
    "registrationDeadline" TIMESTAMP(3),
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "tags" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventRegistration" (
    "id" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "userId" TEXT,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phone" TEXT,
    "notes" TEXT,
    "attended" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EventRegistration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Article" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "excerpt" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "category" "ArticleCategory" NOT NULL,
    "imageUrl" TEXT,
    "authorName" TEXT NOT NULL,
    "authorRole" TEXT,
    "authorImage" TEXT,
    "readingTime" INTEGER NOT NULL DEFAULT 5,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "publishedAt" TIMESTAMP(3),
    "tags" TEXT[],
    "views" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Program" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Program_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "programId" TEXT,
    "status" "ProjectStatus" NOT NULL DEFAULT 'PLANNING',
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "budget" DECIMAL(14,2),
    "raised" DECIMAL(14,2),
    "currency" TEXT NOT NULL DEFAULT 'USD',
    "beneficiaries" INTEGER NOT NULL DEFAULT 0,
    "location" TEXT,
    "imageUrl" TEXT,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Partner" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "logoUrl" TEXT,
    "website" TEXT,
    "type" "PartnerType" NOT NULL DEFAULT 'CORPORATE',
    "description" TEXT,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Partner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Campaign" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "goal" DECIMAL(14,2) NOT NULL,
    "raised" DECIMAL(14,2) NOT NULL DEFAULT 0,
    "currency" TEXT NOT NULL DEFAULT 'USD',
    "status" "CampaignStatus" NOT NULL DEFAULT 'ACTIVE',
    "imageUrl" TEXT,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Campaign_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GrantApplication" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "organizationName" TEXT NOT NULL,
    "contactName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "website" TEXT,
    "description" TEXT NOT NULL,
    "projectTitle" TEXT NOT NULL,
    "projectSummary" TEXT NOT NULL,
    "amountRequested" DECIMAL(14,2) NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'USD',
    "projectDuration" TEXT NOT NULL,
    "targetBeneficiaries" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "status" "GrantStatus" NOT NULL DEFAULT 'SUBMITTED',
    "reviewNotes" TEXT,
    "decisionDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GrantApplication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Testimonial" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT,
    "location" TEXT,
    "imageUrl" TEXT,
    "content" TEXT NOT NULL,
    "rating" INTEGER NOT NULL DEFAULT 5,
    "programId" TEXT,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "isApproved" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Testimonial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NewsletterSubscriber" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT,
    "source" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "confirmedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NewsletterSubscriber_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContactSubmission" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "subject" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "repliedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContactSubmission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImpactStat" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "value" DECIMAL(14,2) NOT NULL,
    "unit" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ImpactStat_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_clerkId_key" ON "User"("clerkId");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE INDEX "User_clerkId_idx" ON "User"("clerkId");
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Donation_paymentIntentId_key" ON "Donation"("paymentIntentId");
CREATE UNIQUE INDEX "Donation_paystackRef_key" ON "Donation"("paystackRef");
CREATE UNIQUE INDEX "Donation_flutterwaveRef_key" ON "Donation"("flutterwaveRef");
CREATE UNIQUE INDEX "Donation_paypalOrderId_key" ON "Donation"("paypalOrderId");
CREATE INDEX "Donation_userId_idx" ON "Donation"("userId");
CREATE INDEX "Donation_email_idx" ON "Donation"("email");
CREATE INDEX "Donation_status_idx" ON "Donation"("status");
CREATE INDEX "Donation_createdAt_idx" ON "Donation"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "Volunteer_userId_key" ON "Volunteer"("userId");
CREATE UNIQUE INDEX "Volunteer_email_key" ON "Volunteer"("email");
CREATE INDEX "Volunteer_status_idx" ON "Volunteer"("status");
CREATE INDEX "Volunteer_email_idx" ON "Volunteer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Event_slug_key" ON "Event"("slug");
CREATE INDEX "Event_startDate_idx" ON "Event"("startDate");
CREATE INDEX "Event_status_idx" ON "Event"("status");
CREATE INDEX "Event_slug_idx" ON "Event"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "EventRegistration_eventId_email_key" ON "EventRegistration"("eventId", "email");
CREATE INDEX "EventRegistration_eventId_idx" ON "EventRegistration"("eventId");
CREATE INDEX "EventRegistration_email_idx" ON "EventRegistration"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Article_slug_key" ON "Article"("slug");
CREATE INDEX "Article_slug_idx" ON "Article"("slug");
CREATE INDEX "Article_isPublished_publishedAt_idx" ON "Article"("isPublished", "publishedAt");
CREATE INDEX "Article_category_idx" ON "Article"("category");

-- CreateIndex
CREATE UNIQUE INDEX "Program_slug_key" ON "Program"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Project_slug_key" ON "Project"("slug");
CREATE INDEX "Project_programId_idx" ON "Project"("programId");
CREATE INDEX "Project_status_idx" ON "Project"("status");

-- CreateIndex
CREATE UNIQUE INDEX "Campaign_slug_key" ON "Campaign"("slug");
CREATE INDEX "Campaign_status_idx" ON "Campaign"("status");
CREATE INDEX "Campaign_slug_idx" ON "Campaign"("slug");

-- CreateIndex
CREATE INDEX "GrantApplication_status_idx" ON "GrantApplication"("status");
CREATE INDEX "GrantApplication_email_idx" ON "GrantApplication"("email");

-- CreateIndex
CREATE INDEX "Testimonial_isFeatured_isApproved_idx" ON "Testimonial"("isFeatured", "isApproved");

-- CreateIndex
CREATE UNIQUE INDEX "NewsletterSubscriber_email_key" ON "NewsletterSubscriber"("email");
CREATE INDEX "NewsletterSubscriber_email_idx" ON "NewsletterSubscriber"("email");
CREATE INDEX "NewsletterSubscriber_isActive_idx" ON "NewsletterSubscriber"("isActive");

-- CreateIndex
CREATE UNIQUE INDEX "ImpactStat_key_key" ON "ImpactStat"("key");

-- AddForeignKey
ALTER TABLE "Donation" ADD CONSTRAINT "Donation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Volunteer" ADD CONSTRAINT "Volunteer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventRegistration" ADD CONSTRAINT "EventRegistration_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventRegistration" ADD CONSTRAINT "EventRegistration_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GrantApplication" ADD CONSTRAINT "GrantApplication_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
