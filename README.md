# Full Stack Developer Portfolio

React + Vite + Tailwind CSS portfolio with: Hero, About, Education & Certificates,
Experience, Projects (filterable by Frontend/Backend/Fullstack), Skills,
Testimonials, Contact form, and CV download.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

The output goes to the `dist/` folder — deploy it to Vercel, Netlify, or any
static host.

## Customize your content — تعديل المحتوى

Almost everything you need to change lives in **`src/data.js`**:
- `profile` → الاسم، المسمى الوظيفي، البريد، التليفون، لينكات السوشيال ميديا، ومسار ملف الـ CV
- `about` → نبذة عنك والأرقام السريعة
- `education` → الشهادات الدراسية والكورسات
- `training` → التدريبات/الإنترنشيبس (قسم بديل عن الخبرة العملية التقليدية)
- `projects` → مشاريعك (الصورة، الوصف، النوع Frontend/Backend/Fullstack، اللينكات)
- `skills` → مهاراتك مقسمة حسب الفئة

### Add your CV file

Put your CV PDF in the `public/` folder and name it `Doha-Harby-CV.pdf`
(or update `profile.cvPath` in `src/data.js` to match your filename).

### Add your own project images

Replace the `image` URLs in `src/data.js` with your own screenshots
(place them in `public/` and reference them as `/your-image.png`).

### Change colors / fonts

Design tokens live in `tailwind.config.js` (colors, gradients) and
`index.html` (Google Fonts import).
