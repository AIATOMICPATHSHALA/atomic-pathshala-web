# Atomic Pathshala: Deployment Guide

Atomic Pathshala ecosystem ko deploy karne ke liye niche diye gaye steps ko follow karein. Yeh guide website (Frontend) aur Mobile Apps dono ke liye hai.

---

## 1. Website Deployment (Frontend)

Aapne jo designs dekhe hain, unka production-ready HTML/CSS code aap direct export kar sakte hain.

### Step 1: Code Export
- Canvas par kisi bhi screen par click karein.
- Top toolbar mein **`</>` (View Code)** button par click karein.
- Pura HTML aur CSS code copy kar lein.
- Isse ek `.html` file (jaise `index.html`) ke roop mein save karein.

### Step 2: Hosting
Aap in static files ko niche diye gaye platforms par muft mein aur turant deploy kar sakte hain:
- **Vercel**: `index.html` ko drag and drop karein ya GitHub repository connect karein.
- **Netlify**: Direct folder upload karke site live kar sakte hain.
- **GitHub Pages**: Agar aap code ko GitHub par rakhte hain, toh wahan se bhi live kar sakte hain.

### Step 3: Backend Integration (Developer Task)
Dynamic functionality (logins, doubt solving, database) ke liye:
- In HTML files ko **React**, **Next.js**, ya **Vue.js** jaise frameworks mein convert karein.
- Database (Firebase, MongoDB, ya SQL) connect karein taaki user data aur test results save ho sakein.

---

## 2. Mobile App Deployment (Android & iOS)

Mobile apps ke liye deployment process thoda alag hota hai kyunki ismein app stores ki requirements hoti hain.

### Step 1: Design to Code
- **Figma Export**: Stitch se designs ko Figma mein export karein taaki developers spacing, colors aur assets (icons/images) ko accurately use kar sakein.
- **Development**: **Flutter** ya **React Native** ka upyog karein taaki ek hi code se Android aur iOS dono apps ban sakein.

### Step 2: Testing
- Android ke liye `.apk` generate karein aur iOS ke liye **TestFlight** ka use karein.
- Login routing aur notifications ko thoroughly test karein.

### Step 3: App Store Submission
- **Google Play Store**: Ek Developer account banayein ($25 one-time fee) aur apni `.aab` file upload karein.
- **Apple App Store**: Apple Developer Program join karein ($99/year) aur Xcode ke zariye app submit karein.

---

## 3. Important Assets
- **Logo**: Session mein diye gaye official logo ({{DATA:IMAGE:IMAGE_17}} aur {{DATA:IMAGE:IMAGE_18}}) ka hi upyog karein.
- **Domain**: Ek premium domain (jaise `atomicpathshala.com`) register karein aur use apne hosting platform se connect karein.

---

**Next Steps:**
- Kya aap chahte hain ki main kisi specific screen ka code export karne mein aapki madad karoon?
- Ya phir kya humein developers ke liye ek detailed **Technical Specification Document** taiyaar karna chahiye?