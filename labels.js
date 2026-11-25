const T = {
 bn:{app:"ফ্রিলার্ন হাব",tag:"বিশ্বের ফ্রি কোর্স, বই ও সফটওয়্যার এক জায়গায়",search:"খুঁজুন…",c:"কোর্স",b:"বই",s:"সফটওয়্যার",t:"প্রশিক্ষণ",a:"অ্যাপ",y:"ইউটিউব",all:"সব",open:"খুলুন",ad:"বিজ্ঞাপন",wait:"{n} সেকেন্ড পরে চালিয়ে যেতে পারবেন",go:"চালিয়ে যান",note:"বিজ্ঞাপন এই সেবা ফ্রি রাখতে সাহায্য করে।",count:"{n}টি ফলাফল",none:"কিছু পাওয়া যায়নি",more:"আরও দেখুন",disc:"সব লিংক তৃতীয় পক্ষের অফিসিয়াল সাইটে যায়। কিছু কোর্সে সার্টিফিকেটের জন্য ফি লাগতে পারে।",nosaved:"এখনো কিছু সেভ করা হয়নি"},
 en:{app:"FreeLearn Hub",tag:"Free courses, books & software from around the world",search:"Search…",c:"Courses",b:"Books",s:"Software",t:"Training",a:"Apps",y:"YouTube",all:"All",open:"Open",ad:"Advertisement",wait:"You can continue in {n}s",go:"Continue",note:"Ads help keep this service free.",count:"{n} results",none:"Nothing found",more:"Show more",disc:"All links go to the official third-party sites. Some courses may charge for certificates.",nosaved:"Nothing saved yet"},
 hi:{app:"फ्रीलर्न हब",tag:"दुनिया भर के मुफ़्त कोर्स, किताबें और सॉफ़्टवेयर एक जगह",search:"खोजें…",c:"कोर्स",b:"किताबें",s:"सॉफ़्टवेयर",t:"प्रशिक्षण",a:"ऐप्स",y:"यूट्यूब",all:"सभी",open:"खोलें",ad:"विज्ञापन",wait:"{n} सेकंड बाद आगे बढ़ सकते हैं",go:"आगे बढ़ें",note:"विज्ञापन इस सेवा को मुफ़्त रखने में मदद करते हैं।",count:"{n} परिणाम",none:"कुछ नहीं मिला",more:"और देखें",disc:"सभी लिंक तीसरे पक्ष की आधिकारिक साइटों पर जाते हैं। कुछ कोर्स में सर्टिफ़िकेट के लिए शुल्क लग सकता है।",nosaved:"अभी कुछ सेव नहीं किया"},
 ur:{app:"فری لرن حب",tag:"دنیا بھر کے مفت کورسز، کتابیں اور سافٹ ویئر ایک جگہ",search:"تلاش کریں…",c:"کورسز",b:"کتابیں",s:"سافٹ ویئر",t:"تربیت",a:"ایپس",y:"یوٹیوب",all:"سب",open:"کھولیں",ad:"اشتہار",wait:"{n} سیکنڈ بعد آگے بڑھ سکتے ہیں",go:"آگے بڑھیں",note:"اشتہارات اس سروس کو مفت رکھنے میں مدد کرتے ہیں۔",count:"{n} نتائج",none:"کچھ نہیں ملا",more:"مزید دیکھیں",disc:"تمام لنک تیسرے فریق کی سرکاری سائٹس پر جاتے ہیں۔ بعض کورسز میں سرٹیفکیٹ کے لیے فیس ہو سکتی ہے۔",nosaved:"ابھی کچھ محفوظ نہیں کیا"}
};
const CAT = {
 prog:{bn:"প্রোগ্রামিং",en:"Programming",hi:"प्रोग्रामिंग",ur:"پروگرامنگ"},
 ai:{bn:"এআই ও ডেটা",en:"AI & Data",hi:"एआई और डेटा",ur:"اے آئی اور ڈیٹا"},
 math:{bn:"গণিত",en:"Math",hi:"गणित",ur:"ریاضی"},
 sci:{bn:"বিজ্ঞান",en:"Science",hi:"विज्ञान",ur:"سائنس"},
 biz:{bn:"ব্যবসা ও মার্কেটিং",en:"Business & Marketing",hi:"व्यापार और मार्केटिंग",ur:"کاروبار اور مارکیٹنگ"},
 lang:{bn:"ভাষা",en:"Languages",hi:"भाषाएँ",ur:"زبانیں"},
 design:{bn:"ডিজাইন",en:"Design",hi:"डिज़ाइन",ur:"ڈیزائن"},
 health:{bn:"স্বাস্থ্য",en:"Health",hi:"स्वास्थ्य",ur:"صحت"},
 hum:{bn:"মানবিক ও রেফারেন্স",en:"Humanities & Reference",hi:"मानविकी और संदर्भ",ur:"انسانیات اور حوالہ"},
 sec:{bn:"সাইবার নিরাপত্তা",en:"Cybersecurity",hi:"साइबर सुरक्षा",ur:"سائبر سیکیورٹی"},
 univ:{bn:"বিশ্ববিদ্যালয় ও প্ল্যাটফর্ম",en:"Universities & Platforms",hi:"विश्वविद्यालय और प्लेटफ़ॉर्म",ur:"جامعات اور پلیٹ فارم"},
 reg:{bn:"আঞ্চলিক",en:"Regional",hi:"क्षेत्रीय",ur:"علاقائی"},
 lib:{bn:"ওপেন লাইব্রেরি",en:"Open Libraries",hi:"ओपन लाइब्रेरी",ur:"اوپن لائبریریاں"},
 text:{bn:"পাঠ্যবই",en:"Textbooks",hi:"पाठ्यपुस्तकें",ur:"درسی کتب"},
 os:{bn:"অপারেটিং সিস্টেম",en:"Operating Systems",hi:"ऑपरेटिंग सिस्टम",ur:"آپریٹنگ سسٹم"},
 office:{bn:"অফিস ও প্রোডাক্টিভিটি",en:"Office & Productivity",hi:"ऑफ़िस और उत्पादकता",ur:"آفس اور پیداواریت"},
 media:{bn:"ভিডিও ও অডিও",en:"Video & Audio",hi:"वीडियो और ऑडियो",ur:"ویڈیو اور آڈیو"},
 gfx:{bn:"গ্রাফিক্স ও 3D",en:"Graphics & 3D",hi:"ग्राफ़िक्स और 3D",ur:"گرافکس اور 3D"},
 dev:{bn:"ডেভেলপমেন্ট",en:"Development",hi:"डेवलपमेंट",ur:"ڈویلپمنٹ"},
 util:{bn:"টুলস",en:"Utilities",hi:"उपयोगी टूल",ur:"ٹولز"},
 arts:{bn:"শিল্পকলা",en:"Arts & Culture",hi:"कला और संस्कृति",ur:"فنون و ثقافت"},
 skill:{bn:"হাতের কাজ ও জীবনদক্ষতা",en:"DIY & Life Skills",hi:"हुनर और जीवन कौशल",ur:"ہنر اور زندگی کی مہارتیں"},
 elec:{bn:"ইলেকট্রনিক্স",en:"Electronics",hi:"इलेक्ट्रॉनिक्स",ur:"الیکٹرانکس"},
 agri:{bn:"কৃষি",en:"Agriculture",hi:"कृषि",ur:"زراعت"},
 digital:{bn:"ডিজিটাল দক্ষতা",en:"Digital Skills",hi:"डिजिटल कौशल",ur:"ڈیجیٹل مہارتیں"},
 exam:{bn:"পরীক্ষা ও ক্যারিয়ার",en:"Exams & Career",hi:"परीक्षा और करियर",ur:"امتحانات اور کیریئر"},
 audio:{bn:"অডিওবুক",en:"Audiobooks",hi:"ऑडियोबुक",ur:"آڈیو کتابیں"},
 research:{bn:"গবেষণা পেপার",en:"Research Papers",hi:"शोध पत्र",ur:"تحقیقی مقالے"},
 kids:{bn:"শিশুদের বই",en:"Children's Books",hi:"बच्चों की किताबें",ur:"بچوں کی کتابیں"},
 ref:{bn:"রেফারেন্স",en:"Reference",hi:"संदर्भ",ur:"حوالہ"},
 law:{bn:"আইন",en:"Law",hi:"कानून",ur:"قانون"},
 bd:{bn:"বাংলাদেশ",en:"Bangladesh",hi:"बांग्लादेश",ur:"بنگلہ دیش"},
 bdgov:{bn:"সরকারি (বাংলাদেশ)",en:"Government (Bangladesh)",hi:"सरकारी (बांग्लादेश)",ur:"سرکاری (بنگلہ دیش)"},
 bdprivate:{bn:"বেসরকারি (বাংলাদেশ)",en:"Private (Bangladesh)",hi:"निजी (बांग्लादेश)",ur:"نجی (بنگلہ دیش)"},
 intl:{bn:"আন্তর্জাতিক সংস্থা",en:"International Organizations",hi:"अंतरराष्ट्रीय संगठन",ur:"بین الاقوامی ادارے"},
 corp:{bn:"কোম্পানি ও টেক প্রশিক্ষণ",en:"Company & Tech Training",hi:"कंपनी और टेक प्रशिक्षण",ur:"کمپنی اور ٹیک تربیت"},
 sa:{bn:"ভারত ও পাকিস্তান",en:"India & Pakistan",hi:"भारत और पाकिस्तान",ur:"بھارت اور پاکستان"},
 sch:{bn:"স্কলারশিপ ও বিদেশে পড়া",en:"Scholarships & Study Abroad",hi:"छात्रवृत्ति और विदेश में पढ़ाई",ur:"اسکالرشپ اور بیرون ملک تعلیم"},
 prod:{bn:"প্রোডাক্টিভিটি",en:"Productivity",hi:"उत्पादकता",ur:"پیداواریت"},
 creative:{bn:"ক্রিয়েটিভ",en:"Creative",hi:"क्रिएटिव",ur:"تخلیقی"},
 comm:{bn:"যোগাযোগ",en:"Communication",hi:"संचार",ur:"رابطہ"},
 maps:{bn:"মানচিত্র ও ভ্রমণ",en:"Maps & Travel",hi:"नक्शे और यात्रा",ur:"نقشے اور سفر"},
 fin:{bn:"আর্থিক সেবা",en:"Finance",hi:"वित्त",ur:"مالیات"},
 kidsapp:{bn:"শিশুদের জন্য",en:"For Kids",hi:"बच्चों के लिए",ur:"بچوں کے لیے"},
 ent:{bn:"বিনোদন ও পড়া",en:"Entertainment & Reading",hi:"मनोरंजन और पढ़ाई",ur:"تفریح اور مطالعہ"},
 jobs:{bn:"চাকরি",en:"Jobs",hi:"नौकरी",ur:"ملازمت"},
 eng:{bn:"ইঞ্জিনিয়ারিং ও CAD",en:"Engineering & CAD",hi:"इंजीनियरिंग और CAD",ur:"انجینئرنگ اور CAD"},
 gen:{bn:"সাধারণ শিক্ষা",en:"General Learning",hi:"सामान्य शिक्षा",ur:"عمومی تعلیم"},
 ybn:{bn:"বাংলা কোর্স",en:"Bangla Courses",hi:"बांग्ला कोर्स",ur:"بنگلہ کورسز"},
 yhi:{bn:"হিন্দি কোর্স",en:"Hindi Courses",hi:"हिंदी कोर्स",ur:"ہندی کورسز"},
 yur:{bn:"উর্দু কোর্স",en:"Urdu Courses",hi:"उर्दू कोर्स",ur:"اردو کورسز"},
 edu:{bn:"শিক্ষা",en:"Education",hi:"शिक्षा",ur:"تعلیم"}
};
// books use "sec"/"hum" labels too; software "sec" shown as Security via override
const CAT_S_SEC = {bn:"নিরাপত্তা",en:"Security",hi:"सुरक्षा",ur:"سیکیورٹی"};


/* categories that exist in the data but were missing from the label list */
Object.assign(CAT, {
 ssc:{bn:"এসএসসি ও এইচএসসি",en:"SSC & HSC",hi:"एसएससी और एचएससी",ur:"ایس ایس سی اور ایچ ایس سی"},
 adm:{bn:"ভর্তি পরীক্ষা",en:"Admission Tests",hi:"प्रवेश परीक्षा",ur:"داخلہ امتحانات"},
 bcs:{bn:"বিসিএস",en:"BCS",hi:"बीसीएस",ur:"بی سی ایس"},
 hist:{bn:"ইতিহাস",en:"History",hi:"इतिहास",ur:"تاریخ"}
});

Object.assign(CAT, {
 misc:{bn:"বিবিধ",en:"Miscellaneous",hi:"विविध",ur:"متفرقہ"}
});
  
