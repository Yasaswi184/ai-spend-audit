# Architecture

## System Overview

AuditAI is a lightweight SaaS web application built using Next.js and Tailwind CSS.

Users enter details about their AI tool spending including:
- Tool name
- Monthly spend
- Team size
- Primary use case

The frontend processes this information and generates an instant AI spend audit.

## Flow

User Input → Audit Engine → Savings Calculation → Result Display

## Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Vercel Deployment

## Why This Stack

Next.js provides fast rendering and production deployment.

Tailwind CSS allows rapid UI building and responsive layouts.

TypeScript improves maintainability and reduces runtime issues.

## Scaling Plan

If handling 10k audits/day:
- Move audit logic to API routes
- Add PostgreSQL database
- Use Redis caching
- Add authentication
- Store audit history
- Add analytics pipeline