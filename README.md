# LAFRYHI GPT Store

متجر شخصي ثابت لعرض GPTs والأدوات الذكية الخاصة بـ LAFRYHI.

المشروع مبني كواجهة MVP بسيطة:

- صفحات منفصلة وواضحة
- بيانات مركزية من `data/gpts.json`
- بطاقات عرض + صفحة تفاصيل لكل GPT
- تصميم متجاوب للهاتف والحاسوب
- جاهز للنشر على استضافة ثابتة بدون أي إطار عمل

## الملفات الأساسية

- `index.html` الصفحة الرئيسية
- `gpts.html` قائمة جميع GPTs
- `gpt.html` صفحة تفاصيل GPT
- `about.html` صفحة About
- `faq.html` صفحة FAQ
- `contact.html` صفحة Contact
- `css/style.css` التصميم
- `js/app.js` منطق العرض والفلترة والتحميل
- `data/gpts.json` مصدر البيانات القابل للتعديل

## التشغيل المحلي

شغّل الموقع عبر خادم محلي حتى يعمل تحميل `gpts.json` بشكل صحيح:

```powershell
cd "C:\Users\LAFRYHIELMOSTAFA\Desktop\LAFRYHI GPT Store"
python -m http.server 4173
```

ثم افتح:

```text
http://localhost:4173
```

## تعديل المحتوى

لتعديل أو إضافة GPT جديد، غالبًا يكفي تحديث `data/gpts.json`.

كل عنصر يدعم:

- `name`
- `shortDescription`
- `longDescription`
- `category`
- `runUrl`
- `icon`
- `accent`
- `status`
- `features`
- `featured`

## النشر على Netlify

1. ادفع المشروع إلى GitHub أو ارفعه كمجلد ثابت على جهازك.
2. افتح لوحة Netlify وأنشئ Site جديدًا.
3. اختر `Deploy manually` إذا أردت رفع المجلد مباشرة، أو اربط المستودع إذا أردت نشرًا تلقائيًا.
4. اجعل `Publish directory` هو جذر المشروع.
5. لا حاجة إلى `Build command` في هذه النسخة.
6. بعد النشر، أضف الدومين الخاص بك من إعدادات الموقع.

مرجع رسمي:

- [Netlify Deploy a site](https://docs.netlify.com/site-deploys/create-deploys/)

## النشر على Vercel

1. ادفع المشروع إلى GitHub.
2. أنشئ مشروعًا جديدًا داخل Vercel واربط المستودع.
3. اختر إعداد مشروع Static/Other إذا ظهرت الخيارات.
4. لا تحتاج إلى Build command.
5. اجعل مجلد النشر هو جذر المشروع.
6. أضف الدومين من إعدادات المشروع بعد اكتمال النشر.

مرجع رسمي:

- [Vercel Deployment](https://vercel.com/docs/deployments)

## النشر على GitHub Pages

1. ارفع الملفات إلى مستودع GitHub.
2. من إعدادات المستودع افتح `Pages`.
3. اختر مصدر النشر من الفرع الرئيسي (`main` أو `master`) ومن الجذر.
4. احفظ الإعدادات وانتظر ظهور رابط الموقع.
5. إذا كنت تستخدم دومينك الخاص، أضف ملف `CNAME` أو اضبط الدومين من إعدادات Pages.

مرجع رسمي:

- [GitHub Pages documentation](https://docs.github.com/pages)

## ملاحظات مهمة

- هذا المشروع لا يستخدم Vite أو أي build system.
- يمكن تطويره لاحقًا إلى نسخة أقوى دون كسر البنية الحالية.
- إذا فتحت الموقع مباشرة عبر `file://` فقد لا يعمل تحميل `gpts.json`؛ استخدم خادمًا محليًا أو استضافة فعلية.
