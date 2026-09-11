# 📦 Delala | منصة دلالة

منصة بسيطة لعرض ورفع المنتجات باستخدام Node.js وMongoDB، تدعم رفع الصور، تسجيل الدخول، وتسجيل حسابات جديدة.

---

## 🚀 رابط المشروع المباشر

🔗 [https://delala1.onrender.com](https://delala1.onrender.com)

---

- **Back-End**: Node.js, Express.js
- **Front-End**: EJS Templates + Bootstrap 5
- **Database**: MongoDB + Mongoose
- **Auth**: Passport.js (Local, Google, Facebook)
- **File Upload**: Multer + Cloudinary
- **Session**: express-session + connect-mongo
- **Flashing Messages**: connect-flash
- **Deployment**: Render

---

## 🧑‍💻 ميزات المشروع

- 🖼️ رفع صور المنتجات والتحقق من نوعها وحجمها
- 🔒 تسجيل دخول وتوثيق باستخدام حساب محلي أو Google/Facebook
- 🧾 واجهة لإدارة المنتجات
- ❤️ المفضلة مرتبطة بالمستخدم الحالي
- 🚩 نظام بلاغات مرتبط بالمستخدم الحالي
- 🔐 صلاحيات Admin / Store / Verified / Owner مرتبطة بالمستخدم الحالي
- 📱 واجهة متجاوبة باستخدام Bootstrap

---

## 📦 تثبيت المشروع محليًا

```bash
git clone https://github.com/shadow00xx/test.git
cd test
npm install
```

انسخ `config/config.env.example` إلى `config/config.env` ثم ضع قيم البيئة الخاصة بك محليًا. **لا ترفع ملف `config/config.env` إلى GitHub.**

يجب توفير `SESSION_SECRET` وقيم الاتصال بقاعدة البيانات وخدمات المصادقة/الصور قبل تشغيل التطبيق.
