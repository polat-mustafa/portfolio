// CV Web Uygulaması için JavaScript

// Çeviriler
const translations = {
    tr: {
        // Genel metinler
        "name": "Mustafa Polat",
        "email": "pmustafa0@gmail.com",
        "phone": "(577) 025-403",
        "location": "Gdynia, Polonya",
        "linkedin": "linkedin.com/in/polat-mustafa",
        "github": "github.com/polat-mustafa",
        "website": "https://polat-mustafa.github.io",
        "medium": "https://polat-mustafa.medium.com/",

        // Bölüm başlıkları
        "profile_title": "PROFİL",
        "education_title": "EĞİTİM",
        "experience_title": "İŞ DENEYİMİ",
        "professional_experience_title": "PROFESYONEL DENEYİM",
        "internship_title": "STAJ DENEYİMİ",
        "skills_title": "BECERİLER",
        "projects_title": "PROJELER",
        "certificates_title": "SERTİFİKALAR",
        "references_title": "REFERANSLAR",

        // UI metinleri
        "change_language": "Dil Değiştir",
        "dark_mode": "Karanlık Mod",
        "light_mode": "Aydınlık Mod",
        "save_as_pdf": "PDF İndir",
        "email_send": "E-posta Gönder",

        // Profil
        "profile_text": 'Enerji Sistemleri Mühendisiyim. Lise eğitimimde <strong>PIC16F84</strong> mikrodenetleyicisini programladım. Ön lisans eğitimim sırasında <strong>rüzgar türbini projeleri</strong> ve <strong>regülatörler</strong> üzerine çalıştım. Lisans eğitimimde ise <strong>Arduino destekli yenilenebilir enerji projeleri</strong> geliştirdim. Ayrıca <strong>MATLAB</strong> gibi mühendislik yazılımlarını aktif olarak kullandım. Kariyerime web teknolojileri alanında yoğunlaşarak devam ettim ve <strong>Full-Stack</strong> projeler geliştirdim. Özellikle <strong>JavaScript</strong> ve çeşitli frameworkler üzerinde uzmanlaştım. Bununla birlikte, farklı alanlara hızlıca adapte olabilme yeteneğine sahibim. <strong>Yapay zeka alanındaki gelişmeleri yakından takip etmekteyim</strong> ve bu alanda kendimi geliştirmeye devam ediyorum.',

        // Eğitim
        "degree1": "Enerji Sistemleri Mühendisi",
        "degree1_date": "Eylül 2015 - Ağustos 2020",
        "university1": "Fırat Üniversitesi, Teknoloji Fakültesi, Elazığ, Türkiye",
        "courses1": "Önemli dersler: Güç Elektroniği, Termodinamik, Programlama",
        "gpa1": "Not Ortalaması: 2.88/4.00",
        "projects1": "Arduino destekli, güneş paneli ile beslenen nem ve ışık sensörlü otomatik sulama sistemi",
        "degree2": "Elektrik ve Enerji",
        "degree2_date": "Eylül 2012 - Haziran 2014",
        "university2": "Mustafa Kemal Üniversitesi, Gdynia, Polonya",
        "courses2": "Önemli dersler: Elektrik temelleri, Elektronik temelleri, Matematik",
        "gpa2": "Not Ortalaması: 2.95/4.00",

        // İş Deneyimi
        "position1": "Proses Kontrol Mühendisi",
        "position1_date": "Ekim 2022 - Haziran 2023",
        "company1": "CW Energy A.Ş, Antalya, Türkiye",
        "responsibility1_1": "Proses kontrol sistemi tasarımı ve uygulaması",
        "responsibility1_2": "Veri toplama ve analiz sistemi geliştirme",
        "responsibility1_3": "Fotovoltaik panel üretiminde kapsamlı kalite kontrol protokollerinin uygulanması",
        "responsibility1_4": "Üretim izleme sistemlerinin ve hata tespit süreçlerinin yönetimi",
        "responsibility1_5": "Uluslararası yatırımcılara yönelik teknik sunumların gerçekleştirilmesi",
        "responsibility1_6": "Projenin yönetimi ve takibi",
        "responsibility1_7": "Farklı ürün türleri için kalite sınıflandırma sistemlerinin geliştirilmesi",
        "responsibility1_8": "Cam-cam, esnek ve 16BB panellerin özel üretiminin denetlenmesi",
        "position2": "Üretim Operatörü",
        "position2_date": "Mayis 2022 2021 - Ekim 2022",
        "company2": "SASA Polyester A.Ş, Adana, Türkiye",
        "responsibility2_1": "Polimer üretim süreçlerinin ve kimyasal reaksiyonların optimizasyonu",
        "responsibility2_2": "Üretim hattında sorun giderme prosedürlerinin uygulanması",
        "responsibility2_3": "Malzeme kullanımı ve kalite kontrol parametrelerinin koordinasyonu",
        "position3": "Enerji Sistemleri Mühendisi",
        "position3_date": "Haziran 2020 - Ağustos 2020",
        "company3": "Potansiyel Enerji, Sinop, Türkiye",
        "responsibility3_1": "Şebekeye bağlı (on-grid) ve şebekeden bağımsız (off-grid) fotovoltaik sistemlerin tasarımı ve uygulanması",
        "responsibility3_2": "Güç hesaplamalarının yapılması ve sistem boyutlandırılması",
        "responsibility3_3": "Çatı montaj projelerinin ve teknik şartnamelerin yönetimi",

        // Staj Deneyimi
        "internship1": "Mühendislik Stajı - Termik Santral",
        "internship1_date": "Şubat 2020 - Nisan 2020",
        "internship1_company": "Atlas Enerji Üretim A.Ş, İskenderun, Türkiye",
        "internship1_responsibility1": "Termik santral operasyonları ve bakım prosedürlerinin analizi",
        "internship1_responsibility2": "Santral kapalı olduğu dönemlerde planlı bakım çalışmalarına katılım",
        "internship1_responsibility3": "Ham madde işleme ve makine bakım sistemlerinin analizi",
        "internship2": "Mühendislik Stajı - Solar Enerji",
        "internship2_date": "Temmuz 2021 - Ağustos 2021",
        "internship2_company": "Solarel Enerji Mühendislik, Hatay, Türkiye",
        "internship2_responsibility1": "Güneş paneli kurulumu ve sistem tasarımında destek",
        "internship2_responsibility2": "Akü bağlantıları ve sistem arızalarının giderilmesinde deneyim",
        "internship2_responsibility3": "Şebekeye bağlı (on-grid) ve şebekeden bağımsız (off-grid) sistem kurulumu üzerine çalışmalar",
        "internship3": "Mühendislik Stajı - Rüzgar Türbini",
        "internship3_date": "Haziran 2018 - Temmuz 2018",
        "internship3_company": "Guris Belen Elektrik Üretim A.Ş, İskenderun, Türkiye",
        "internship3_responsibility1": "Bağlı sistemler ve anahtarlama ekipmanlarının operasyonlarının analizi",
        "internship3_responsibility2": "Rüzgar türbini bakım ve teşhislerinde destek",
        "internship3_responsibility3": "Saha değerlendirmelerine ve sistem izlemeye katılım",
        "internship4": "Teknisyen Stajı - Demir Çelik Üretimi",
        "internship4_date": "Haziran 2014 - Temmuz 2014",
        "internship4_company": " Isdemir Demir Çelik A.Ş, İskenderun, Türkiye",
        "internship4_responsibility1": "Alçak, orta ve yüksek voltaj anahtarlama ekipmanlarının bakımında destek",
        "internship4_responsibility2": "Endüstriyel güç dağıtım sistemlerinde pratik deneyim",
        "internship4_responsibility3": "Önleyici bakım prosedürlerine katılım",

        // Beceriler
        "technical_skills": "Teknik Beceriler",
        "skill1": "JavaScript,",
        "skill2": "MS Office",
        "skill3": "PVsyst",
        "skill4": "NoSQL databases",
        "languages": "Diller",
        "language1": "Türkçe (Anadil)",
        "language2": "İngilizce (Orta İleri)",
        "language3": "Lehçe(Temel)",
        "soft_skills": "Sosyal Beceriler",
        "soft_skill1": "İletişim",
        "soft_skill2": "Takım Çalışması",
        "soft_skill3": "Problem Çözme",

        // Projeler
        "project1": "hayta-sozluk",
        "project1_tech": "Kullanılan Teknolojiler: JavaScript, Node.js, Express, MongoDB",
        "project1_desc1": "Kullanicilarin konu basliklari acip hastag lere cevap verdikleri bir sosyal medya uygulamasi",
        "project2": "repayment-table",
        "project2_tech": "Kullanılan Teknolojiler: JavaScript, React, OOP (Object Oriented Programming), Context API, React Hooks, Ant Design",
        "project2_desc1": "Kullanicilarin borcunu girerek kredi karti ile olan geri odemelerini hesaplayan bir uygulama",
        "project3": "geoat",
        "project3_tech": "Kullanılan Teknolojiler: JavaScript, React, Node.js, Express, MongoDB",
        "project3_desc1": "Kullanıcıların topluluk oluşturabileceği ve projelerle grup deneyimleri kazanabileceği açık kaynak bir platform.",

        // Sertifikalar
        "certificate1": "Fotovoltaik Teknik Eğitim Programı",
        "certificate1_date": "Eylül 2020",
        "certificate1_org": "CW ENERJİ",
        "certificate1_desc": "Fotovoltaik sistemlerin tasarımı, uygulanması ve yönetimi hakkında sertifika.",
        "certificate2": "İngilizce",
        "certificate2_date": "Eylül 2020",
        "certificate2_org": "Oxford Language Academy",
        "certificate2_desc": "İngilizce dil yeterliliği sertifikası.",
        "certificate3": "Yapay Zeka İle Dönüştürelim Katılım Belgesi",
        "certificate3_date": "2023",
        "certificate3_org": "Kodluyoruz",
        "certificate3_desc": "Yapay zeka teknolojileri ve uygulamaları eğitimi sertifikası.",
        "certificate4": "Yazılım Dünyasında Kariyer Basamakları",
        "certificate4_date": "2023",
        "certificate4_org": "Kodluyoruz - İngiltere Büyükelçiliği",
        "certificate4_desc": "Yazılım kariyeri gelişim yolları hakkında eğitim sertifikası.",
        "certificate5": "Web3 Fundamentals",
        "certificate5_date": "Eylül 2022",
        "certificate5_org": "Patika.dev",
        "certificate5_desc": "Web3 teknolojilerinin temelleri eğitimi sertifikası.",
        "certificate6": "React: Software Architecture",
        "certificate6_date": "Ağustos 2022",
        "certificate6_org": "LinkedIn",
        "certificate6_desc": "React uygulamalarında yazılım mimarisi prensipleri eğitimi.",
        "certificate7": "Kodla, Kariyerine Başla - Hazırlık JavaScript",
        "certificate7_date": "Şubat 2022",
        "certificate7_org": "Patika.dev",
        "certificate7_desc": "JavaScript programlama temelleri eğitimi sertifikası.",
        "certificate8": "Beginner Level Web Development Certification",
        "certificate8_date": "Ocak 2022",
        "certificate8_org": "Patika.dev",
        "certificate8_desc": "Başlangıç seviyesi web geliştirme eğitimi sertifikası.",
        "certificate9": "Girişimcilik",
        "certificate9_date": "Haziran 2019",
        "certificate9_org": "KOSGEB",
        "certificate9_desc": "Girişimcilik temel prensipleri ve iş kurma eğitimi sertifikası.",

        // Diğer
        "last_updated": "Son Güncellenme",
        "save_as_pdf": "PDF İndir",
        "email_send": "E-posta Gönder"
    },
    en: {
        // General texts
        "name": "Mustafa Polat",
        "email": "pmustafa0@gmail.com",
        "phone": "(577) 025-403",
        "location": "Gdynia, Poland",
        "linkedin": "linkedin.com/in/polat-mustafa",
        "github": "github.com/polat-mustafa",
        "website": "https://polat-mustafa.github.io",
        "medium": "https://polat-mustafa.medium.com/",

        // Section titles
        "profile_title": "PROFILE",
        "education_title": "EDUCATION",
        "experience_title": "WORK EXPERIENCE",
        "professional_experience_title": "PROFESSIONAL EXPERIENCE",
        "internship_title": "INTERNSHIP EXPERIENCE",
        "skills_title": "SKILLS",
        "projects_title": "PROJECTS",
        "certificates_title": "CERTIFICATES",
        "references_title": "REFERENCES",

        // UI texts
        "change_language": "Change Language",
        "dark_mode": "Dark Mode",
        "light_mode": "Light Mode",
        "save_as_pdf": "Download PDF",
        "email_send": "Send Email",

        // Profile
        "profile_text": "I am an Energy Systems Engineer. During my high school education, I programmed the <strong>PIC16F84</strong> microcontroller. During my associate degree, I worked on <strong>wind turbine projects</strong> and <strong>regulators</strong>. In my undergraduate education, I developed <strong>Arduino-supported renewable energy projects</strong>. I also actively used engineering software such as <strong>MATLAB</strong>. I continued my career by focusing on web technologies and developed <strong>Full-Stack</strong> projects. I specialized particularly in <strong>JavaScript</strong> and various frameworks. Additionally, I have the ability to quickly adapt to different fields. I am <strong>closely following developments in artificial intelligence</strong> and continue to develop myself in this area.",

        // Education
        "degree1": "Energy Systems Engineer",
        "degree1_date": "September 2015 - August 2020",
        "university1": "Firat University, Faculty of Technology, Elazig, Turkey",
        "courses1": "Key courses: Power Electronics, Thermodynamics, Programming",
        "gpa1": "GPA: 2.88/4.00",
        "projects1": "Arduino-supported automatic irrigation system with moisture and light sensors powered by solar panel",
        "degree2": "Electricity and Energy",
        "degree2_date": "September 2012 - June 2014",
        "university2": "Mustafa Kemal University, Gdynia, Poland",
        "courses2": "Key courses: Electrical fundamentals, Electronics fundamentals, Mathematics",
        "gpa2": "GPA: 2.95/4.00",

        // Professional Experience
        "position1": "Process Control Engineer",
        "position1_date": "October 2022 - June 2023",
        "company1": "CW Energy Inc., Antalya, Turkey",
        "responsibility1_1": "Process control system design and implementation",
        "responsibility1_2": "Data collection and analysis system development",
        "responsibility1_3": "Implementation of comprehensive quality control protocols in photovoltaic panel production",
        "responsibility1_4": "Management of production monitoring systems and error detection processes",
        "responsibility1_5": "Conducting technical presentations for international investors",
        "responsibility1_6": "Project management and tracking",
        "responsibility1_7": "Development of quality classification systems for different product types",
        "responsibility1_8": "Supervision of specialized production of glass-glass, flexible, and 16BB panels",
        "position2": "Production Operator",
        "position2_date": "May 2022 2021 - October 2022",
        "company2": "SASA Polyester Inc., Adana, Turkey",
        "responsibility2_1": "Optimization of polymer production processes and chemical reactions",
        "responsibility2_2": "Implementation of troubleshooting procedures on the production line",
        "responsibility2_3": "Coordination of material usage and quality control parameters",
        "position3": "Energy Systems Engineer",
        "position3_date": "June 2020 - August 2020",
        "company3": "Potansiyel Energy, Sinop, Turkey",
        "responsibility3_1": "Design and implementation of on-grid and off-grid photovoltaic systems",
        "responsibility3_2": "Power calculations and system sizing",
        "responsibility3_3": "Management of roof mounting projects and technical specifications",
        
        // Internship Experience
        "internship1": "Engineering Internship - Thermal Power Plant",
        "internship1_date": "February 2020 - April 2020",
        "internship1_company": "Atlas Energy Production Inc., Iskenderun, Turkey",
        "internship1_responsibility1": "Analysis of thermal power plant operations and maintenance procedures",
        "internship1_responsibility2": "Participation in planned maintenance works during plant shutdown periods",
        "internship1_responsibility3": "Analysis of raw material handling and machine maintenance systems",
        "internship2": "Engineering Internship - Solar Energy",
        "internship2_date": "July 2021 - August 2021",
        "internship2_company": "Solarel Energy Engineering, Hatay, Turkey",
        "internship2_responsibility1": "Support in solar panel installation and system design",
        "internship2_responsibility2": "Experience in battery connections and system troubleshooting",
        "internship2_responsibility3": "Work on on-grid and off-grid system installation",
        "internship3": "Engineering Internship - Wind Turbine",
        "internship3_date": "June 2018 - July 2018",
        "internship3_company": "Guris Belen Electricity Production Inc., Iskenderun, Turkey",
        "internship3_responsibility1": "Analysis of interconnected systems and switching equipment operations",
        "internship3_responsibility2": "Support in wind turbine maintenance and diagnostics",
        "internship3_responsibility3": "Participation in field assessments and system monitoring",
        "internship4": "Technician Internship - Iron and Steel Production",
        "internship4_date": "June 2014 - July 2014",
        "internship4_company": "Isdemir Iron and Steel Inc., Iskenderun, Turkey",
        "internship4_responsibility1": "Support in maintenance of low, medium, and high voltage switching equipment",
        "internship4_responsibility2": "Practical experience with industrial power distribution systems",
        "internship4_responsibility3": "Participation in preventive maintenance procedures",

        // Skills
        "technical_skills": "Technical Skills",
        "skill1": "JavaScript,",
        "skill2": "MS Office",
        "skill3": "PVsyst",
        "skill4": "NoSQL databases",
        "languages": "Languages",
        "language1": "Turkish (Native)",
        "language2": "English (Upper Intermediate)",
        "language3": "Polish (Basic)",
        "soft_skills": "Soft Skills",
        "soft_skill1": "Communication",
        "soft_skill2": "Teamwork",
        "soft_skill3": "Problem Solving",

        // Projects
        "project1": "hayta-sozluk",
        "project1_tech": "Technologies Used: JavaScript, Node.js, Express, MongoDB",
        "project1_desc1": "A social media application where users can create topic headings and respond to hashtags",
        "project2": "repayment-table",
        "project2_tech": "Technologies Used: JavaScript, React, OOP (Object Oriented Programming), Context API, React Hooks, Ant Design",
        "project2_desc1": "An application that calculates credit card repayments by letting users enter their debt",
        "project3": "geoat",
        "project3_tech": "Technologies Used: JavaScript, React, Node.js, Express, MongoDB",
        "project3_desc1": "An open source platform where users can create communities and gain group experiences with projects",

        // Certificates
        "certificate1": "Photovoltaic Technical Training Program",
        "certificate1_date": "September 2020",
        "certificate1_org": "CW ENERGY",
        "certificate1_desc": "Certificate in design, implementation, and management of photovoltaic systems.",
        "certificate2": "English",
        "certificate2_date": "September 2020",
        "certificate2_org": "Oxford Language Academy",
        "certificate2_desc": "English language proficiency certification.",
        "certificate3": "Transform with AI Participation Certificate",
        "certificate3_date": "2023",
        "certificate3_org": "Kodluyoruz",
        "certificate3_desc": "Certificate in artificial intelligence technologies and applications training.",
        "certificate4": "Career Steps in Software World",
        "certificate4_date": "2023",
        "certificate4_org": "Kodluyoruz - British Embassy",
        "certificate4_desc": "Certificate in software career development paths training.",
        "certificate5": "Web3 Fundamentals",
        "certificate5_date": "September 2022",
        "certificate5_org": "Patika.dev",
        "certificate5_desc": "Certificate in fundamentals of Web3 technologies training.",
        "certificate6": "React: Software Architecture",
        "certificate6_date": "August 2022",
        "certificate6_org": "LinkedIn",
        "certificate6_desc": "Training in software architecture principles for React applications.",
        "certificate7": "Code, Start Your Career - JavaScript Preparation",
        "certificate7_date": "February 2022",
        "certificate7_org": "Patika.dev",
        "certificate7_desc": "Certificate in JavaScript programming fundamentals training.",
        "certificate8": "Beginner Level Web Development Certification",
        "certificate8_date": "January 2022",
        "certificate8_org": "Patika.dev",
        "certificate8_desc": "Certificate in beginner-level web development training.",
        "certificate9": "Entrepreneurship",
        "certificate9_date": "June 2019",
        "certificate9_org": "KOSGEB",
        "certificate9_desc": "Certificate in entrepreneurship fundamentals and business establishment training.",

        // Other
        "last_updated": "Last Updated",
        "save_as_pdf": "Download PDF",
        "email_send": "Send Email"
    },
    pl: {
        // Ogólne teksty
        "name": "Mustafa Polat",
        "email": "pmustafa0@gmail.com",
        "phone": "(577) 025-403",
        "location": "Gdynia, Polska",
        "linkedin": "linkedin.com/in/polat-mustafa",
        "github": "github.com/polat-mustafa",
        "website": "https://polat-mustafa.github.io",
        "medium": "https://polat-mustafa.medium.com/",

        // Tytuły sekcji
        "profile_title": "PROFIL",
        "education_title": "EDUKACJA",
        "experience_title": "DOŚWIADCZENIE ZAWODOWE",
        "professional_experience_title": "DOŚWIADCZENIE ZAWODOWE",
        "internship_title": "PRAKTYKI",
        "skills_title": "UMIEJĘTNOŚCI",
        "projects_title": "PROJEKTY",
        "certificates_title": "CERTYFIKATY",
        "references_title": "REFERENCJE",

        // UI texts
        "change_language": "Zmień Język",
        "dark_mode": "Tryb Ciemny",
        "light_mode": "Tryb Jasny",
        "save_as_pdf": "Pobierz PDF",
        "email_send": "Wyślij Email",

        // Profil
        "profile_text": 'Jestem inżynierem systemów energetycznych. W liceum programowałem mikrokontroler <strong>PIC16F84</strong>. Podczas studiów licencjackich pracowałem nad <strong>projektami turbin wiatrowych</strong> i <strong>regulatorami</strong>. Na studiach inżynierskich rozwijałem <strong>projekty energii odnawialnej wspierane przez Arduino</strong>. Aktywnie korzystałem również z oprogramowania inżynierskiego, takiego jak <strong>MATLAB</strong>. Kontynuowałem swoją karierę, koncentrując się na technologiach internetowych i rozwijałem projekty <strong>Full-Stack</strong>. Specjalizuję się w <strong>JavaScript</strong> i różnych frameworkach. Mam również zdolność szybkiego dostosowywania się do różnych dziedzin. <strong>Śledzę na bieżąco postępy w dziedzinie sztucznej inteligencji</strong> i nadal rozwijam się w tej dziedzinie.',

        // Edukacja
        "degree1": "Inżynier Systemów Energetycznych",
        "degree1_date": "Wrzesień 2015 - Sierpień 2020",
        "university1": "Uniwersytet Firat, Wydział Technologii, Elazig, Turcja",
        "courses1": "Kluczowe przedmioty: Elektronika mocy, Termodynamika, Programowanie",
        "gpa1": "Średnia: 2.87/4.00",
        "projects1": "System automatycznego nawadniania wspierany przez Arduino z czujnikami wilgotności i światła, zasilany panelem słonecznym",
        "degree2": "Technik Elektryczności i Energii",
        "degree2_date": "Wrzesień 2012 - Czerwiec 2014",
        "university2": "Uniwersytet Mustafa Kemal, Gdynia, Polska",
        "courses2": "Kluczowe przedmioty: Podstawy elektryczności, Podstawy elektroniki, Matematyka",
        "gpa2": "Średnia: 3.04/4.00",

        // Doświadczenie zawodowe
        "position1": "Inżynier Kontroli Procesów",
        "position1_date": "Październik 2022 - Czerwiec 2023",
        "company1": "CW Energy Inc., Antalya, Turcja",
        "responsibility1_1": "Projektowanie i wdrażanie systemów kontroli procesów",
        "responsibility1_2": "Rozwój systemów gromadzenia i analizy danych",
        "responsibility1_3": "Wdrażanie kompleksowych protokołów kontroli jakości w produkcji paneli fotowoltaicznych",
        "responsibility1_4": "Zarządzanie systemami monitorowania produkcji i procesami wykrywania błędów",
        "responsibility1_5": "Prowadzenie prezentacji technicznych dla międzynarodowych inwestorów",
        "responsibility1_6": "Zarządzanie i śledzenie projektów",
        "responsibility1_7": "Rozwój systemów klasyfikacji jakości dla różnych typów produktów",
        "responsibility1_8": "Nadzór nad specjalistyczną produkcją paneli szklano-szklanych, elastycznych i 16BB",
        "position2": "Operator Produkcji",
        "position2_date": "Maj 2022 - Październik 2022",
        "company2": "SASA Polyester Inc., Adana, Turcja",
        "responsibility2_1": "Optymalizacja procesów produkcji polimerów i reakcji chemicznych",
        "responsibility2_2": "Wdrażanie procedur rozwiązywania problemów na linii produkcyjnej",
        "responsibility2_3": "Koordynacja wykorzystania materiałów i parametrów kontroli jakości",
        "position3": "Inżynier Energetyk",
        "position3_date": "Wrzesień 2020 - Grudzień 2021",
        "company3": "Potansiyel Energy, Sinop, Turcja",
        "responsibility3_1": "Projektowanie i wdrażanie systemów fotowoltaicznych podłączonych do sieci i poza siecią",
        "responsibility3_2": "Obliczenia mocy i wymiarowanie systemów",
        "responsibility3_3": "Zarządzanie projektami montażu na dachach i specyfikacjami technicznymi",

        // Praktyki
        "internship1": "Praktyki Inżynierskie - Elektrownia Cieplna",
        "internship1_date": "Luty 2020 - Kwiecień 2020",
        "internship1_company": "Atlas Energy Production Inc., Iskenderun, Turcja",
        "internship1_responsibility1": "Analiza operacji i procedur konserwacji elektrowni cieplnej",
        "internship1_responsibility2": "Udział w planowanych pracach konserwacyjnych podczas okresów wyłączenia elektrowni",
        "internship1_responsibility3": "Analiza systemów obsługi surowców i konserwacji maszyn",
        "internship2": "Praktyki Inżynierskie - Energia Słoneczna",
        "internship2_date": "Lipiec 2021 - Sierpień 2021",
        "internship2_company": "Solarel Energy Engineering, Hatay, Turcja",
        "internship2_responsibility1": "Wsparcie w instalacji paneli słonecznych i projektowaniu systemów",
        "internship2_responsibility2": "Doświadczenie w podłączaniu akumulatorów i rozwiązywaniu problemów systemowych",
        "internship2_responsibility3": "Praca przy instalacjach systemów podłączonych do sieci i poza siecią",
        "internship3": "Praktyki Inżynierskie - Turbina Wiatrowa",
        "internship3_date": "Czerwiec 2018 - Lipiec 2018",
        "internship3_company": "Guris Belen Electricity Production Inc., Iskenderun, Turcja",
        "internship3_responsibility1": "Analiza działania połączonych systemów i urządzeń przełączających",
        "internship3_responsibility2": "Wsparcie w konserwacji i diagnostyce turbin wiatrowych",
        "internship3_responsibility3": "Udział w ocenach terenowych i monitorowaniu systemów",
        "internship4": "Praktyki Techniczne - Produkcja Żelaza i Stali",
        "internship4_date": "Czerwiec 2014 - Lipiec 2014",
        "internship4_company": "Isdemir Iron and Steel Inc., Iskenderun, Turcja",
        "internship4_responsibility1": "Wsparcie w konserwacji urządzeń przełączających niskiego, średniego i wysokiego napięcia",
        "internship4_responsibility2": "Praktyczne doświadczenie z przemysłowymi systemami dystrybucji energii",
        "internship4_responsibility3": "Udział w procedurach konserwacji zapobiegawczej",

        // Umiejętności
        "technical_skills": "Umiejętności Techniczne",
        "skill1": "JavaScript,",
        "skill2": "MS Office",
        "skill3": "PVsyst",
        "skill4": "Bazy danych NoSQL",
        "languages": "Języki",
        "language1": "Turecki (Ojczysty)",
        "language2": "Angielski (Zaawansowany)",
        "language3": "Polski (Podstawowy)",
        "soft_skills": "Umiejętności Miękkie",
        "soft_skill1": "Zarządzanie projektami",
        "soft_skill2": "Komunikacja",
        "soft_skill3": "Rozwiązywanie problemów",

        // Projekty
        "project1": "hayta-sozluk",
        "project1_tech": "Wykorzystane technologie: JavaScript, Node.js, Express, MongoDB",
        "project1_desc1": "Aplikacja społecznościowa, w której użytkownicy mogą tworzyć nagłówki tematów i reagować na hashtagi",
        "project2": "repayment-table",
        "project2_tech": "Wykorzystane technologie: JavaScript, React, OOP (Programowanie Obiektowe), Context API, React Hooks, Ant Design",
        "project2_desc1": "Aplikacja obliczająca spłaty kart kredytowych, pozwalająca użytkownikom na wprowadzenie swoich zadłużeń",
        "project3": "geoat",
        "project3_tech": "Wykorzystane technologie: JavaScript, React, Node.js, Express, MongoDB",
        "project3_desc1": "Otwarta platforma, na której użytkownicy mogą tworzyć społeczności i zdobywać grupowe doświadczenia poprzez projekty",

        // Certyfikaty
        "certificate1": "Program Szkolenia Technicznego w Fotowoltaice",
        "certificate1_date": "Wrzesień 2020",
        "certificate1_org": "CW ENERGY",
        "certificate1_desc": "Certyfikat w zakresie projektowania, wdrażania i zarządzania systemami fotowoltaicznymi.",
        "certificate2": "Język Angielski",
        "certificate2_date": "Wrzesień 2020",
        "certificate2_org": "Oxford Language Academy",
        "certificate2_desc": "Certyfikat biegłości językowej w języku angielskim.",
        "certificate3": "Certyfikat Uczestnictwa w Programie Transformacji z AI",
        "certificate3_date": "2023",
        "certificate3_org": "Kodluyoruz",
        "certificate3_desc": "Certyfikat ukończenia szkolenia z technologii i zastosowań sztucznej inteligencji.",
        "certificate4": "Kroki Kariery w Świecie Oprogramowania",
        "certificate4_date": "2023",
        "certificate4_org": "Kodluyoruz - Ambasada Brytyjska",
        "certificate4_desc": "Certyfikat w zakresie ścieżek rozwoju kariery w oprogramowaniu.",
        "certificate5": "Podstawy Web3",
        "certificate5_date": "Wrzesień 2022",
        "certificate5_org": "Patika.dev",
        "certificate5_desc": "Certyfikat ukończenia szkolenia z podstaw technologii Web3.",
        "certificate6": "React: Architektura Oprogramowania",
        "certificate6_date": "Sierpień 2022",
        "certificate6_org": "LinkedIn",
        "certificate6_desc": "Szkolenie z zasad architektury oprogramowania dla aplikacji React.",
        "certificate7": "Koduj, Rozpocznij Karierę - Przygotowanie JavaScript",
        "certificate7_date": "Luty 2022",
        "certificate7_org": "Patika.dev",
        "certificate7_desc": "Certyfikat w zakresie podstaw programowania JavaScript.",
        "certificate8": "Certyfikat Tworzenia Stron Internetowych dla Początkujących",
        "certificate8_date": "Styczeń 2022",
        "certificate8_org": "Patika.dev",
        "certificate8_desc": "Certyfikat ukończenia szkolenia z podstaw tworzenia stron internetowych.",
        "certificate9": "Przedsiębiorczość",
        "certificate9_date": "Czerwiec 2019",
        "certificate9_org": "KOSGEB",
        "certificate9_desc": "Certyfikat w zakresie podstaw przedsiębiorczości i tworzenia firmy.",

        // Inne
        "last_updated": "Ostatnia Aktualizacja",
        "save_as_pdf": "Pobierz PDF",
        "email_send": "Wyślij Email",
        "language": "Polski"
    }
};

// Kullanıcı ayarları için localStorage
const userSettings = {
    language: null,
    theme: null,

    // Kullanıcı ayarlarını localStorage'a kaydet
    save: function() {
        localStorage.setItem('cv_settings', JSON.stringify({
            language: this.language,
            theme: this.theme
        }));
    },

    // Kullanıcı ayarlarını localStorage'dan yükle
    load: function() {
        const settings = JSON.parse(localStorage.getItem('cv_settings'));
        if (settings) {
            this.language = settings.language;
            this.theme = settings.theme;
        }
    }
};

// Dil değiştirme fonksiyonu
function changeLanguage(language) {
    // Mevcut dili değiştir
    userSettings.language = language;
    userSettings.save();
    
    // Dil butonlarını güncelle - aktif dili vurgula
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === language) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Tüm çevrilebilir elementleri güncelle
    const elements = document.querySelectorAll('[data-tr]');
    elements.forEach(element => {
        const key = element.getAttribute('data-tr');
        
        // Özel durumlar (butonlar, linkler vb.) dışındaki elemanların içeriğini güncelle
        if (!element.classList.contains('link-handled') && translations[language][key]) {
            // HTML içeriği desteklenen elementler için
            if (element.hasAttribute('data-html')) {
                element.innerHTML = translations[language][key];
            } else {
                element.textContent = translations[language][key];
            }
        }
    });
    
    // Tema metni güncelle
    updateThemeText();
    
    // Linkleri güncellemek için tekrar oluştur
    makeLinkItemsClickable();
    
    // Butonları güncelle
    if (document.getElementById('printButton')) {
        document.getElementById('printButton').textContent = translations[language]['save_as_pdf'];
    }
    
    if (document.getElementById('emailButton')) {
        document.getElementById('emailButton').textContent = translations[language]['email_send'];
    }
    
    // Son güncelleme tarihini güncelle
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    let locale = 'tr-TR';
    if (language === 'en') {
        locale = 'en-US';
    } else if (language === 'pl') {
        locale = 'pl-PL';
    }
    document.getElementById('lastUpdated').textContent = now.toLocaleDateString(locale, options);
}

// Tema değiştirme fonksiyonu
function changeTheme(theme) {
    // Mevcut temayı değiştir
    userSettings.theme = theme;
    userSettings.save();
    
    // Body'nin tema attributeunu ayarla
    document.body.setAttribute('data-theme', theme);
    
    // Tema ikonu ve metin güncelle
    const themeIcon = document.getElementById('theme-icon');
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
    
    updateThemeText();
}

// Tema metnini güncelle
function updateThemeText() {
    const themeText = document.getElementById('theme-text');
    const currentLang = userSettings.language;
    const isDark = userSettings.theme === 'dark';
    
    if (currentLang === 'tr') {
        themeText.textContent = isDark ? 'Aydınlık Mod' : 'Karanlık Mod';
    } else if (currentLang === 'pl') {
        themeText.textContent = isDark ? 'Tryb Ciemny' : 'Tryb Jasny';
    } else {
        themeText.textContent = isDark ? 'Dark Mode' : 'Light Mode';
    }
}

// Kullanıcı tarayıcı/sistem dilini algıla
function detectUserLanguage() {
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang.startsWith('tr')) {
        return 'tr';
    } else if (userLang.startsWith('pl')) {
        return 'pl';
    } else {
        return 'en';
    }
}

// Ana işlev
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM yüklendi, işlevler başlatılıyor");
    
    // Son Güncelleme tarihini ayarla
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    
    // Kullanıcı ayarlarını yükle
    userSettings.load();
    
    // Eğer dil ayarlanmamışsa, tarayıcı/sistem dilini algıla
    if (!userSettings.language) {
        userSettings.language = detectUserLanguage();
    }
    
    // Eğer tema ayarlanmamışsa, varsayılan olarak aydınlık modu kullan
    if (!userSettings.theme) {
        userSettings.theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    // Son güncelleme tarihini, mevcut dile göre ayarla
    let locale = 'tr-TR';
    if (userSettings.language === 'en') {
        locale = 'en-US';
    } else if (userSettings.language === 'pl') {
        locale = 'pl-PL';
    }
    document.getElementById('lastUpdated').textContent = now.toLocaleDateString(locale, options);
    
    // Dil ve temayı başlat
    changeLanguage(userSettings.language);
    changeTheme(userSettings.theme);
    
    // İlk yüklemede aktif dil butonunu belirginleştir
    const currentLangBtn = document.querySelector(`.lang-btn[data-lang="${userSettings.language}"]`);
    if (currentLangBtn) {
        currentLangBtn.classList.add('active');
    }
    
    // Dil değiştirme butonlarını etkinleştir
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
    
    // Tema değiştirme butonunu etkinleştir
    document.getElementById('theme-toggle').addEventListener('click', function() {
        const newTheme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        changeTheme(newTheme);
    });
    
    // Bölüm başlıklarına tıklanınca içeriği göster/gizle
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.addEventListener('click', function() {
            const content = this.nextElementSibling;
            
            // Hali hazırda açık/kapalı durumuna göre toggle yap
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                this.classList.remove('active');
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                this.classList.add('active');
            }
        });
    });

    // Tüm linkleri tıklanabilir yap
    makeLinkItemsClickable();

    // Email gönder butonu ekle
    addEmailButton();

    // Yazdırma stillerini ekle
    const style = document.createElement('style');
    style.textContent = `
        .section-title {
            cursor: pointer;
            position: relative;
        }
        .section-title:after {
            content: '+';
            position: absolute;
            right: 5px;
            transition: transform 0.3s ease;
        }
        .section-title.active:after {
            transform: rotate(45deg);
        }
        .section-content {
            overflow: hidden;
            transition: max-height 0.3s ease;
            max-height: none;
        }
        .button-container {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
            margin-bottom: 20px;
        }
    `;
    document.head.appendChild(style);

    // PDF indirme butonu
    const pdfButton = document.getElementById('pdf-button');
    if (pdfButton) {
        pdfButton.addEventListener('click', function() {
            console.log("PDF butonu tıklandı, yazdırma isteği gönderiliyor");
            try {
                // Doğrudan yazdırma işlemini başlat
                window.print();
            } catch (error) {
                console.error("Yazdırma hatası:", error);
            }
        });
        
        // PDF butonunun çevirilerinin güncellenmesi
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                setTimeout(function() {
                    const saveAsPdfText = translations[userSettings.language]['save_as_pdf'];
                    const pdfButtonText = pdfButton.querySelector('span[data-tr="save_as_pdf"]');
                    if (pdfButtonText) {
                        pdfButtonText.textContent = saveAsPdfText;
                    }
                }, 100);
            });
        });
    }
});

// Tüm linkleri tıklanabilir yapma fonksiyonu
function makeLinkItemsClickable() {
    console.log("Linkler tıklanabilir yapılıyor");
    
    // LinkedIn bağlantısını tıklanabilir yap
    const linkedinEl = document.querySelector('[data-tr="linkedin"]');
    if (linkedinEl) {
        const linkedinText = linkedinEl.textContent;
        const linkedinUrl = linkedinText.startsWith('http') ? linkedinText : 'https://' + linkedinText;
        linkedinEl.innerHTML = `<a href="${linkedinUrl}" target="_blank" rel="noopener noreferrer">${linkedinText}</a>`;
        linkedinEl.classList.add('link-handled');
    }
    
    // GitHub bağlantısını tıklanabilir yap
    const githubEl = document.querySelector('[data-tr="github"]');
    if (githubEl) {
        const githubText = githubEl.textContent;
        const githubUrl = githubText.startsWith('http') ? githubText : 'https://' + githubText;
        githubEl.innerHTML = `<a href="${githubUrl}" target="_blank" rel="noopener noreferrer">${githubText}</a>`;
        githubEl.classList.add('link-handled');
    }
    
    // Website bağlantısını tıklanabilir yap
    const websiteEl = document.querySelector('[data-tr="website"]');
    if (websiteEl) {
        const websiteText = websiteEl.textContent;
        const websiteUrl = websiteText.startsWith('http') ? websiteText : 'https://' + websiteText;
        websiteEl.innerHTML = `<a href="${websiteUrl}" target="_blank" rel="noopener noreferrer">${websiteText}</a>`;
        websiteEl.classList.add('link-handled');
    }

    // Medium bağlantısını tıklanabilir yap
    const mediumEl = document.querySelector('[data-tr="medium"]');
    if (mediumEl) {
        const mediumText = mediumEl.textContent;
        const mediumUrl = mediumText.startsWith('http') ? mediumText : 'https://' + mediumText;
        mediumEl.innerHTML = `<a href="${mediumUrl}" target="_blank" rel="noopener noreferrer">${mediumText}</a>`;
        mediumEl.classList.add('link-handled');
    }
    
    // Email bağlantısını tıklanabilir yap
    const emailEl = document.querySelector('[data-tr="email"]');
    if (emailEl && !emailEl.classList.contains('link-handled')) {
        const emailText = emailEl.textContent;
        emailEl.innerHTML = `<a href="mailto:${emailText}">${emailText}</a>`;
        emailEl.classList.add('link-handled');
    }
    
    // Telefon bağlantısını tıklanabilir yap
    const phoneEl = document.querySelector('[data-tr="phone"]');
    if (phoneEl && !phoneEl.classList.contains('link-handled')) {
        const phoneText = phoneEl.textContent;
        // Sadece rakamları al
        const phoneClean = phoneText.replace(/\D/g, '');
        phoneEl.innerHTML = `<a href="tel:${phoneClean}">${phoneText}</a>`;
        phoneEl.classList.add('link-handled');
    }
}

// Email butonu ekleme fonksiyonu
function addEmailButton() {
    console.log("E-posta butonu ekleniyor");
    
    // Buton konteyner oluştur (eğer yoksa)
    let buttonContainer = document.querySelector('.button-container');
    if (!buttonContainer) {
        buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');
        document.querySelector('.container').prepend(buttonContainer);
    }
    
    // Email butonunu oluştur
    const emailButton = document.createElement('button');
    emailButton.id = 'emailButton';
    emailButton.classList.add('email-button');
    emailButton.textContent = translations[userSettings.language]['email_send'];
    
    // Email tıklama olayı
    emailButton.addEventListener('click', function() {
        console.log("E-posta butonu tıklandı");
        const emailText = document.querySelector('[data-tr="email"]').textContent;
        window.location.href = `mailto:${emailText}`;
    });
    
    // Butonu ekle
    buttonContainer.appendChild(emailButton);
    
    // Dil değiştiğinde buton metnini güncelle
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            setTimeout(function() {
                document.getElementById('emailButton').textContent = translations[userSettings.language]['email_send'];
            }, 100);
        });
    });
} 