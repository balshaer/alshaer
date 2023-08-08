import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
en: {
translation: {
Title: "Baraa Alsher",
"Job Title": "MERN Stack Developer",
Description:
"I'm Baraa, a proficient MERN Stack Developer specializing in React. I create dynamic, user-centric web apps with innovative features and optimal problem-solving. I prioritize React's best practices for engaging and impactful user experiences.",

"Follow Description":
"I'm a big fan of side-projects. You can find some of my projects below.",
Timescape: "Timescape",
SNote: "SNote",
"Gradients CSS": "Gradients CSS",
GitLinker: "GitLinker",
mailto:
"If you have any questions or want to discuss a project, feel free to email me at ",
footer: "Baraa - All rights reserved.",
"dark mode": "dark mode",
"light mode": "light mode",
"send email": "send email now ✉️",
formTitle: "Send Email",
name: "Name",
email: "Email",
typeYourMessage: "type your message",
send: "send",
github: "github",
linkedin: "linkedin",
youtube: "youtube",
successMessage: "Your message has been successfully sent.",
emptyFieldsMessage: "Please enter your email and message.",
emptyMessageMessage: "Please enter your message.",
emptyEmailMessage: "Please enter your email address.",
"Sustainable" : "The landing page for Sustainable Star",
},
},
ar: {
translation: {
Title: "براء الشاعر",
"Job Title": "مهندس برمجيات",
Description:"أنا براء، مطوّر ماهر في تقنيّة MERN متخصص في React. أقوم بابتكار تطبيقات ويب متجددة ومُوجَّهة نحو المستخدم، تتسم بالميزات المبتكرة والحلول الأمثل للتحديات. أُعَمِّق في ممارسات React الأمثل لتوفير تجارب مستخدم جاذبة ومؤثرة.",
"Follow Description":
"أنا مهتم بالمشاريع الفرعية. يمكنك العثور على بعض المشاريع الخاصة بي أدناه.",
Timescape: "Timescape (تطبيق ويب لحفظ المواعيد أونلاين)",
SNote: "SNote (تطبيق ويب لحفظ الملاحظات)",
"Gradients CSS": "Gradients CSS (عباره عن أداه لنسخ تدرجات الألوان)",
GitLinker: "GitLinker (مشروع اداره Github repositories)",
mailto: "اذا كان لديك أي استفسار تواصل معي على الايميل :",
footer: "براء",
"dark mode": "الوضع اليلي",
"light mode": "الوضع النهاري",
"send email": "أرسل ايميل الأن ✉️",
formTitle: "ارسال ايميل",
name: "الاسم",
email: "الايميل",
typeYourMessage: "الرساله",
send: "ارسال",
github: "جيت هاب",
linkedin: "لينكد إن ",
youtube: "يوتيوب ",
successMessage: "تم إرسال رسالتك بنجاح.",
emptyFieldsMessage: "يرجى إدخال بريدك الإلكتروني ورسالتك.",
emptyMessageMessage: "يرجى إدخال رسالتك.",
emptyEmailMessage: "يرجى إدخال عنوان بريدك الإلكتروني.",
"Sustainable" : "تطبيق ويب لشركه Sustainable",

},
},
};

i18n.use(initReactI18next).init({
resources: resources,
lng: "en",
interpolation: { escapeValue: false },
});

export default i18n;