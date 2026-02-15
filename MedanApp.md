# MedanApp

## Project Overview

**MedanApp** is a student hostel finder web application focused on helping university students easily find verified hostels near campus.

The MVP will focus on **one university**, while the system is designed to **scale to multiple universities** in the future without major refactoring.

---

## Tech Stack

* **Frontend:** React (JavaScript, no TypeScript)
* **Backend:** Django + Django REST Framework (API-only)
* **Database:** PostgreSQL
* **Auth:** Django default authentication (JWT or session-based later)

---

## Core Product Rules (MVP)

* Users can **browse hostels without logging in**
* **Login is required only to comment/review** a hostel
* **Students cannot upload hostels**
* Only **verified hostel managers** can list hostels
* Hostel manager onboarding is **manual at first** (contact link)
* Everything must stay **MVP-simple** (no over-engineering)

---

## Architecture Rules

* Backend exposes a **REST API only** (JSON in / JSON out)
* React handles **all UI and routing**
* No Django templates for frontend pages
* React communicates with Django via HTTP (fetch / axios)

---

## Core Database Models

* **User** (Django default)
* **University** (supports future multi-university scaling)
* **Hostel**
* **HostelImage** (multiple images per hostel)
* **Comment** (user reviews)

---

## MVP Functional Scope

### Public (No Login)

* View list of hostels
* Filter hostels (price range, people per room, distance)
* View hostel details
* View hostel images
* View hostel location on map (Google Maps redirect)

### Authenticated Users

* Add comments/reviews to hostels

### Hostel Managers

* Create and manage hostel listings
* Upload multiple hostel images

---

## Design & UX Rules

* Clean, student-friendly UI
* Mobile-first approach
* Clear call-to-action for hostel managers
* No unnecessary animations or heavy JS

---

## SEO & Branding

* Brand name: **MedanApp**
* Domain: `medanapp.com` (or closest available)
* Tagline example: *Find student hostels, stress-free*

---

## Current Status

* Project setup phase
* Defining architecture, database, and MVP scope

---

## Working Agreement with AI Assistant

* Follow this document strictly
* Do not redefine models or architecture unless explicitly asked
* Always keep solutions simple and MVP-focused
* Explain concepts when needed — learning is a priority
