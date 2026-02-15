# MedanApp – Project To‑Do List

This document outlines the recommended build order for the MedanApp project, from planning to deployment. Tasks are grouped by phases and ordered to minimize rework and confusion.

---

## PHASE 0: Product & Scope Definition

* Confirm project name: MedanApp ✅
* Define MVP scope (single university) ✅
* Decide architecture (React frontend + Django REST backend) ✅
* Document architecture rules and constraints in MedanApp.md ✅

---

## PHASE 1: Data & Logic Design (Highest Priority)

### 1. Finalize Database Schema ✅

* Define core tables:

  * University
  * Hostel
  * HostelImage
  * Comment
  * User (or extension of Django User)
* Define metadata for each table:

  * Field names
  * Data types
  * Required vs optional fields
  * Relationships (foreign keys)
* Ensure schema supports future scalability (multi‑university)

### 2. Define MVP API Contract ✅

* List all MVP endpoints
* For each endpoint, specify:

  * URL path:
    *  home
    * hostelDetails
    * Signup | Signin
    * addHostel/request to add a hostel - auth required
    * comment
    * delete comment
  * HTTP method
  * Authentication required or not
  * Purpose
* Example categories:

  * Public read endpoints (hostels, images)
  * Auth‑protected write endpoints (comments)

---

## PHASE 2: Backend Setup (No Frontend Yet)

### 3. Initialize Django Project

* Create Django project
* Create apps
  - listings
    - Universities
    - Hostels
    - Room types
    - Hostel images
  - Accounts
    - User model (or extension)
    - First name / last name
    - Authentication
    - Reviews / ratings ownership
  - Applications
    - Hostel applications / inquiries
    - Messages from students to managers
    - Status tracking (pending, approved, rejected)

Prices
* Install and configure Django REST Framework
* Configure PostgreSQL database

### 4. Implement Models & Migrations ✅

* Implement Django models based on finalized schema
* Run migrations
* Create superuser
* Verify models via Django admin

### 5. Implement Public Read‑Only APIs

* Hostel list endpoint
* Hostel detail endpoint
* Hostel images endpoint
* University endpoint (if needed)
* Test endpoints using browser or API testing tools

---

## PHASE 3: Frontend Skeleton

### 6. Initialize React Project

* Create React app
* Define base folder structure:

  * pages
    * welcome
    * home
    * Explore
    * addhostel - or request to add a hostel for beginner phase
    * explore hostels
    * terms and conditions
  * components
    * header - logo, navs
    * hostelCard - img, name, location
    * footer - logo
  * services (API calls)
  * styles

### 7. Implement Read‑Only Pages

* Home page
* Hostel listing page
* Hostel detail page
* Connect pages to backend read‑only APIs

---

## PHASE 4: Authentication & Interaction

### 8. Implement Authentication (Minimal)

* Login functionality
* Token or session handling
* Protect comment creation endpoints

### 9. Implement Comments Feature

* Public comment display
* Comment form (login required)
* Backend validation for comments

---

## PHASE 5: Hostel Manager Features

### 10. Hostel Manager Upload Flow

* Restricted hostel creation endpoint
* Image upload support
* Basic permission checks
* Minimal UI for managers

---

## PHASE 6: Validation & Stability

### 11. Validation and Error Handling

* Backend input validation
* Frontend error messages
* Graceful handling of empty states

---

## PHASE 7: Deployment Preparation & Release

### 12. Deployment Preparation

* Configure environment variables
* Setup media storage (avoid ephemeral storage)
* Basic logging and security settings

### 13. Deploy Backend

* Deploy Django backend
* Ensure database persistence
* Verify API availability

### 14. Deploy Frontend

* Deploy React frontend
* Connect to live backend API
* Final smoke testing

---

## Notes

* Always update this file when scope changes
* Treat this as the single source of truth for execution order
* Avoid working on later phases before completing earlier ones
