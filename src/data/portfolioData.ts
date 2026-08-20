export interface Project {
  id: string;
  title: string;
  category: 'Web Dev' | 'UI/UX' | 'E-Commerce' | 'Corporate' | 'App Dev';
  year: string;
  shortDesc: { tr: string; en: string };
  fullDesc: { tr: string; en: string };
  tech: string[];
  image: string;
  liveUrl: string;
  highlights: { tr: string[]; en: string[] };
}

export interface Service {
  id: string;
  title: { tr: string; en: string };
  description: { tr: string; en: string };
  iconName: string;
}

export interface TechCategory {
  category: { tr: string; en: string };
  iconName: string;
  items: { name: string; level: 'Expert' | 'Advanced' | 'Proficient'; hot?: boolean }[];
}

export const personalInfo = {
  name: "Kadir Kuzucu",
  title: { tr: "Front-end Developer & Yazılım Uzmanı", en: "Front-end Developer & Software Engineer" },
  kicker: { tr: "Front-end Developer & Software Engineer", en: "Front-end Developer & Software Engineer" },
  version: "v2.0 / PROD",
  headline: {
    tr: "Fikirleri yüksek performanslı dijital deneyimlere dönüştürüyorum.",
    en: "Transforming ideas into high-performance digital experiences."
  },
  subtitle: {
    tr: "İhtiyaçlarınızı anlamaktan, bir plan tasarlamaya ve nihai ürünü teslim etmeye kadar her aşamada profesyonel çözümler üretiyorum.",
    en: "From understanding your needs to designing a plan and delivering the final product, I handle every stage with professional excellence."
  },
  location: "Turkey",
  timezone: "UTC+3",
  email: "bilgi@kadirkuzucu.com",
  phone: "+90 546 681 2053",
  github: "https://github.com/KadirHanKUZUCU",
  linkedin: "https://www.linkedin.com/in/kadir-kuzucu-292063106/",
  medium: "https://medium.com/@kadirhankuzucu",
  twitter: "https://x.com",
  availability: { tr: "Yeni projeler için uygun ✓", en: "Available for new projects ✓" },
};

export const stats = [
  { label: { tr: "Yıllık Deneyim", en: "Years Experience" }, value: "5+", detail: { tr: "Web & Dijital Projeler", en: "Web & Digital Solutions" } },
  { label: { tr: "Tamamlanan Proje", en: "Shipped Projects" }, value: "30+", detail: { tr: "Canlı Müşteri Siteleri", en: "Live Client Websites" } },
  { label: { tr: "Müşteri Memnuniyeti", en: "Client Satisfaction" }, value: "100%", detail: { tr: "Zamanında Teslimat", en: "On-time Delivery" } },
  { label: { tr: "Hizmet Alanı", en: "Service Areas" }, value: "6+", detail: { tr: "Tasarım, Dev, SEO & Ads", en: "Design, Dev, SEO & Ads" } },
];

export const services: Service[] = [
  {
    id: "ui-ux-design",
    title: { tr: "UI/UX Tasarım", en: "UI/UX Design" },
    description: {
      tr: "Etkili bir kullanıcı UI/UX, dikkat çeken ve net bir mesaj yayan şeydir. Tüm bunlarla birlikte tasarımın yenilikçi, modern ve düzgün olduğundan emin oluyorum.",
      en: "Effective UI/UX grabs attention and conveys a crisp message. I ensure every interface is innovative, clean, and intuitive."
    },
    iconName: "Layout"
  },
  {
    id: "web-dev",
    title: { tr: "Web Geliştirme (Web Dev)", en: "Web Development" },
    description: {
      tr: "Web sitenizin araştırma ve geliştirmesini üstlenecek bir geliştirici arıyorsanız, size bu konuda yardımcı olacak köklü bir profesyonelim.",
      en: "If you need a developer to handle research, architecture, and development for your website, I deliver robust end-to-end solutions."
    },
    iconName: "Code2"
  },
  {
    id: "app-dev",
    title: { tr: "Mobil Uygulama (App Dev)", en: "Mobile App Dev" },
    description: {
      tr: "Daha fazla mobil kullanıcıyı çekecek kullanıcı dostu bir uygulama arıyorsanız, en yeni ve en trend görünüm ve hisse sahip bir platform tasarlamanıza ve oluşturmanıza yardımcı olabilirim.",
      en: "Looking for a user-friendly application to engage mobile users? I design and build modern platforms with cutting-edge UI/UX."
    },
    iconName: "Smartphone"
  },
  {
    id: "social-media",
    title: { tr: "Sosyal Medya Yönetimi", en: "Social Media Strategy" },
    description: {
      tr: "Markaların ve bireylerin dijital varlıklarını güçlendirmek, hikayelerini anlatmak ve etkileşimlerini artırmak için stratejik çözümler üretiyorum.",
      en: "Crafting strategic solutions to empower digital presence, tell brand stories, and boost audience engagement with data-driven insights."
    },
    iconName: "Share2"
  },
  {
    id: "seo-google-ads",
    title: { tr: "SEO & Google Ads", en: "SEO & Google Ads" },
    description: {
      tr: "Web sitelerinin organik olarak daha fazla ziyaretçi çekmesi ve reklam bütçelerinden en iyi şekilde faydalanmak için kapsamlı ve stratejik yaklaşımlar sunuyorum.",
      en: "Delivering strategic SEO solutions for organic traffic growth and optimizing Google Ads campaigns to maximize marketing ROI."
    },
    iconName: "TrendingUp"
  },
  {
    id: "graphic-design",
    title: { tr: "Grafik Tasarım & Kurumsal Kimlik", en: "Graphic Design & Branding" },
    description: {
      tr: "Markaların öykülerini görsel olarak anlatmalarına yardımcı olmak için estetik bir yaklaşım benimsemekteyim. Logo, marka kimliği ve reklam görselleri üretiyorum.",
      en: "Bringing an aesthetic approach to logos, brand identity, web graphics, and promotional assets with extensive design experience."
    },
    iconName: "Palette"
  }
];

export const projects: Project[] = [
  {
    id: "iqra-adim",
    title: "İqra Adım — Mobil Uygulama",
    category: "App Dev",
    year: "2026 / Yakında",
    shortDesc: {
      tr: "Google Play Store'da yayınlanmak üzere olan, modern ve kullanıcı dostu eğitsel mobil uygulama.",
      en: "Modern and intuitive mobile learning application coming soon to Google Play Store."
    },
    fullDesc: {
      tr: "İqra Adım; kullanıcı dostu mobil arayüzü, zengin içerik takibi ve modern UX mimarisi ile Android platformunda yayımlanma aşamasında olan mobil uygulama projemdir.",
      en: "İqra Adım is an Android mobile application featuring user-friendly UI, interactive learning modules, and modern mobile UX currently in Google Play Store review stage."
    },
    tech: ["App Dev", "Android", "Mobile UI/UX", "Google Play Console"],
    image: "/assets/kadirkuzucu_cover.jpg",
    liveUrl: "https://play.google.com/store/apps/details?id=com.kadirkuzucu.iqraadim",
    highlights: {
      tr: ["Google Play Yayım Aşamasında 🚀 (Yakında)", "Mobil Odaklı UI/UX Tasarımı", "Android Platform Entegrasyonu"],
      en: ["Google Play Store Review Stage 🚀 (Coming Soon)", "Mobile-First UI/UX Design", "Android Native Integration"]
    }
  },
  {
    id: "alesta-yacht-hotel",

    title: "Alesta Yacht Hotel",
    category: "Corporate",
    year: "2024",
    shortDesc: {
      tr: "Fethiye'nin önde gelen lüks yat oteli için özel tasarlanmış web deneyimi ve rezervasyon portalı.",
      en: "Custom web experience and booking showcase portal for Fethiye's premier luxury yacht hotel."
    },
    fullDesc: {
      tr: "Alesta Yacht Hotel için yüksek görsellikli, mobil uyumlu, hızlı ve çok dilli otel tanıtım ve rezervasyon portalı geliştirildi.",
      en: "Developed a high-visual, responsive, fast, and multi-lingual hotel showcase and booking portal for Alesta Yacht Hotel."
    },
    tech: ["React", "HTML5/CSS3", "JavaScript", "SEO", "UI/UX"],
    image: "/assets/kadirkuzucu_cover.jpg",
    liveUrl: "https://www.alestayachthotel.com/",
    highlights: {
      tr: ["Mobil Uyumlu Lüks Tasarım", "Hızlı Sayfa Yükleme Metrikleri", "Çok Dilli İçerik Yapısı"],
      en: ["Mobile Responsive Luxury Design", "Fast Page Load Performance", "Multi-lingual Content Architecture"]
    }
  },
  {
    id: "alesta-midtown",
    title: "Alesta Midtown Hotel",
    category: "Corporate",
    year: "2024",
    shortDesc: {
      tr: "Şehir içi lüks konaklama konseptini yansıtan modern otel web platformu.",
      en: "Modern hotel web platform reflecting the city-center luxury hospitality concept."
    },
    fullDesc: {
      tr: "Alesta Midtown oteli için oda tanıtımları, konum detayları ve kolay rezervasyon yönlendirmesi içeren şık web sitesi.",
      en: "Sleek web application for Alesta Midtown hotel featuring room showcases, location maps, and seamless reservation routing."
    },
    tech: ["HTML5", "CSS3", "JavaScript", "UI/UX", "SEO"],
    image: "/assets/kadirkuzucu_cover.jpg",
    liveUrl: "https://alestamidtown.com/",
    highlights: {
      tr: ["Minimalist Şehir Oteli Teması", "Oda & Konsept Galerisi", "Optimizasyonlu SEO Yapısı"],
      en: ["Minimalist City Hotel Theme", "Room & Concept Showcase", "Optimized SEO Architecture"]
    }
  },
  {
    id: "yeni-vira",
    title: "Yeni Vira",
    category: "Corporate",
    year: "2023",
    shortDesc: {
      tr: "Denizcilik ve yatçılık sektörüne yönelik kurumsal tanıtım platformu.",
      en: "Corporate web presentation portal tailored for the maritime & yachting sector."
    },
    fullDesc: {
      tr: "Yeni Vira markası için hazırlanan temiz, prestijli ve güven veren kurumsal web platformu.",
      en: "Clean, prestigious corporate website created for the Yeni Vira brand showcasing marine services."
    },
    tech: ["HTML5", "CSS3", "JavaScript", "UI/UX"],
    image: "/assets/kadirkuzucu_cover.jpg",
    liveUrl: "https://yenivira.com/",
    highlights: {
      tr: ["Prestijli Denizcilik Teması", "Temiz Kod Mimarisi", "Hızlı İletişim"],
      en: ["Prestigious Marine Theme", "Clean Code Architecture", "Instant Contact"]
    }
  },
  {
    id: "trio-fethiye",
    title: "Trio Fethiye Real Estate",
    category: "Web Dev",
    year: "2024",
    shortDesc: {
      tr: "Fethiye bölgesinde lüks gayrimenkul ve kiralık villa sunum platformu.",
      en: "Luxury real estate and villa rental presentation platform in the Fethiye region."
    },
    fullDesc: {
      tr: "Emlak ve villa portföyünü kategorilere göre filteleyen, yüksek çözünürlüklü görsellerle ziyaretçilere sunan dijital platform.",
      en: "Digital real estate platform filtering properties by category and delivering high-resolution villa showcases to prospective buyers."
    },
    tech: ["JavaScript", "Tailwind", "UI/UX", "Web Dev", "SEO"],
    image: "/assets/kadirkuzucu_cover.jpg",
    liveUrl: "https://triofethiye.com/tr/",
    highlights: {
      tr: ["Detaylı Gayrimenkul Filtreleme", "Mobil Duyarlı Arayüz", "Hızlı İletişim Entegrasyonu"],
      en: ["Detailed Property Filtering", "Mobile Responsive Interface", "Instant Contact Integration"]
    }
  },
  {
    id: "trio-ajans",
    title: "Trio Ajans Creative Studio",
    category: "Corporate",
    year: "2024",
    shortDesc: {
      tr: "Yaratıcı dijital ajans için geliştiren modern kurumsal web sitesi.",
      en: "Modern corporate agency site built for a creative digital agency."
    },
    fullDesc: {
      tr: "Trio Ajans'ın sunduğu medya, tasarım ve yazılım hizmetlerini tanıtan, dinamik portfolyo sunumu içeren web sitesi.",
      en: "Corporate website highlighting media, design, and software services offered by Trio Ajans with dynamic portfolio showcases."
    },
    tech: ["React", "JavaScript", "CSS3", "UI/UX", "SEO"],
    image: "/assets/kadirkuzucu_cover.jpg",
    liveUrl: "https://trioajans.com/",
    highlights: {
      tr: ["Dinamik Ajans Portfolyosu", "İnteraktif Hizmet Kartları", "Yüksek Dönüşüm Odaklı UX"],
      en: ["Dynamic Agency Portfolio", "Interactive Service Cards", "Conversion-Focused UX"]
    }
  },
  {
    id: "loop-ebike",
    title: "Loop E-Bike Mobility",
    category: "E-Commerce",
    year: "2023",
    shortDesc: {
      tr: "Elektrikli bisiklet kiralama ve mobilite hizmetleri tanıtım ve satış platformu.",
      en: "Electric bike rental and mobility services showcase and reservation platform."
    },
    fullDesc: {
      tr: "Çevre dostu elektrikli mobilite çözümlerini modern ve enerjik bir tasarımla sunan e-mobillik platformu.",
      en: "E-mobility platform showcasing eco-friendly electric bike solutions with a modern, high-energy interface."
    },
    tech: ["JavaScript", "E-Commerce", "UI/UX", "Tailwind CSS"],
    image: "/assets/kadirkuzucu_cover.jpg",
    liveUrl: "https://loopebike.com/",
    highlights: {
      tr: ["Enerjik & Modern Tasarım", "Hızlı İnceleme Metrikleri", "Mobil Odaklı Deneyim"],
      en: ["Energetic Modern Design", "Quick Spec Sheet Review", "Mobile-First UX"]
    }
  },
  {
    id: "kelebek-apart-otel",
    title: "Kelebek Apart Otel",
    category: "Corporate",
    year: "2023",
    shortDesc: {
      tr: "Tatilciler için apart otel tanıtımı ve iletişim web sitesi.",
      en: "Apartment hotel showcase and direct guest reservation site."
    },
    fullDesc: {
      tr: "Ölüdeniz / Fethiye bölgesinde hizmet veren Kelebek Apart Otel için hazırlanan kullanıcı dostu otel sitesi.",
      en: "User-friendly hotel site created for Kelebek Apart Hotel operating in Ölüdeniz / Fethiye region."
    },
    tech: ["HTML5", "CSS3", "JavaScript", "SEO"],
    image: "/assets/kadirkuzucu_cover.jpg",
    liveUrl: "https://www.kelebekapartotel.com/",
    highlights: {
      tr: ["Fotoğraf Galerisi", "Harita & Konum Entegrasyonu", "Direkt İletişim Formu"],
      en: ["Photo Showcase", "Map & Location Integration", "Direct Contact Form"]
    }
  },
  {
    id: "finans-evreni",
    title: "Finans Evreni Media Portal",
    category: "Web Dev",
    year: "2023",
    shortDesc: {
      tr: "Ekonomi, borsa ve finans haberlerini sunan yüksek trafikli medya ve içerik platformu.",
      en: "High-traffic media & news portal delivering financial news, stock updates, and economic insights."
    },
    fullDesc: {
      tr: "Finans sektörü için günlük haber akışlarını, analizleri ve makaleleri düzenli bir katmanla okuyuculara ulaştıran dijital haber portalı.",
      en: "Digital news portal providing real-time financial news streams, market analysis, and economic articles with clean typography."
    },
    tech: ["Web Dev", "SEO", "JavaScript", "HTML5", "CSS3"],
    image: "/assets/kadirkuzucu_cover.jpg",
    liveUrl: "https://finansevreni.com/",
    highlights: {
      tr: ["Yüksek Trafikli Haber Altyapısı", "Google SEO Optimizasyonu", "Mobil Uygunluk"],
      en: ["High-Traffic Media Stack", "Google SEO Optimization", "Mobile Responsiveness"]
    }
  },
  {
    id: "albatros-denizcilik",
    title: "Albatros Denizcilik Kursu",
    category: "Corporate",
    year: "2023",
    shortDesc: {
      tr: "Gemi adamı ve denizcilik eğitimi veren akademi için kurumsal web platformu.",
      en: "Corporate educational platform built for a maritime training academy."
    },
    fullDesc: {
      tr: "Denizcilik kurs programlarını, sertifikasyon süreçlerini ve kayıt detaylarını içeren bilgilendirici web platformu.",
      en: "Informative education platform detailing maritime course programs, certification requirements, and enrollment guides."
    },
    tech: ["Web Dev", "HTML5", "CSS3", "JavaScript"],
    image: "/assets/kadirkuzucu_cover.jpg",
    liveUrl: "https://albatrosdenizcilikkursu.com/",
    highlights: {
      tr: ["Kurs Programı Modülleri", "Eğitim Takvimi", "Mobil Dostu Tasarım"],
      en: ["Course Program Modules", "Training Schedule", "Mobile Friendly Design"]
    }
  },
  {
    id: "asandag",
    title: "Asandağ Endüstri",
    category: "Corporate",
    year: "2023",
    shortDesc: {
      tr: "Endüstriyel çözümler sunan kurumsal marka web platformu.",
      en: "Enterprise corporate site providing industrial engineering solutions."
    },
    fullDesc: {
      tr: "Asandağ firması için ürün kataloglarını ve teknik yeterlilikleri sunan kurumsal web sitesi.",
      en: "Corporate website displaying product catalogs and technical capabilities for the Asandağ brand."
    },
    tech: ["HTML5", "CSS3", "JavaScript", "Corporate UX"],
    image: "/assets/kadirkuzucu_cover.jpg",
    liveUrl: "https://asandag.com/",
    highlights: {
      tr: ["Kurumsal Ürün Kataloğu", "Güçlü Görsel Kimlik", "SEO Uyumlu Yapı"],
      en: ["Corporate Product Catalog", "Strong Visual Identity", "SEO Optimized"]
    }
  },
  {
    id: "albirlik",
    title: "Al Birlik Kurumsal",
    category: "Corporate",
    year: "2022",
    shortDesc: {
      tr: "Kurumsal grup şirketleri için hazırlanan geniş ölçekli web tanıtımı.",
      en: "Enterprise group company presentation and corporate site."
    },
    fullDesc: {
      tr: "Al Birlik şirket grubunun faaliyet alanlarını ve kurumsal vizyonunu aktaran web portalı.",
      en: "Web portal detailing business areas and corporate vision of the Al Birlik enterprise group."
    },
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: "/assets/kadirkuzucu_cover.jpg",
    liveUrl: "http://albirlik.com.tr/",
    highlights: {
      tr: ["Grup Şirketleri Yapısı", "Güven Veren Tasarım", "Hızlı Yükleme"],
      en: ["Group Companies Overview", "Trustworthy Design", "Fast Loading"]
    }
  },
  {
    id: "eylul-yapi",
    title: "Eylül Yapı Fethiye",
    category: "Corporate",
    year: "2022",
    shortDesc: {
      tr: "İnşaat, mimari ve taahhüt projeleri sunum web sitesi.",
      en: "Construction, architecture, and contracting project showcase site."
    },
    fullDesc: {
      tr: "Eylül Yapı'nın tamamlanan ve devam eden gayrimenkul ve inşaat projelerini sergileyen kurumsal platform.",
      en: "Corporate web platform showcasing completed and ongoing real estate and construction projects for Eylül Yapı."
    },
    tech: ["HTML5", "CSS3", "JavaScript", "UI/UX"],
    image: "/assets/kadirkuzucu_cover.jpg",
    liveUrl: "https://eylulyapifethiye.com/",
    highlights: {
      tr: ["İnşaat Proje Galerisi", "Mimari Detaylar", "Mobil Uyumlu"],
      en: ["Construction Project Gallery", "Architectural Highlights", "Mobile Responsive"]
    }
  },
  {
    id: "bogazici-restaurant",
    title: "Boğaziçi Restaurant Fethiye",
    category: "Corporate",
    year: "2022",
    shortDesc: {
      tr: "Fethiye kordon boyundaki seçkin restoran için menü ve rezervasyon tanıtımı.",
      en: "Menu showcase and reservation landing page for a popular seafront restaurant in Fethiye."
    },
    fullDesc: {
      tr: "Boğaziçi Restaurant'ın leziz deniz ürünleri menüsünü, mekan atmosferini ve konum bilgisini sunan çekici gastronomi sitesi.",
      en: "Attractively designed culinary site presenting seafood menus, restaurant ambiance, and location info for Boğaziçi Restaurant."
    },
    tech: ["HTML5", "CSS3", "JavaScript", "UI/UX"],
    image: "/assets/kadirkuzucu_cover.jpg",
    liveUrl: "https://bogazicirestaurantfethiye.com/",
    highlights: {
      tr: ["Gastronomi Menü Sunumu", "Mekan Fotoğraf Galerisi", "Direkt İletişim"],
      en: ["Gastronomy Menu Showcase", "Ambiance Photo Gallery", "Direct Contact"]
    }
  }
];

export const techStack: TechCategory[] = [
  {
    category: { tr: "Frontend & Web", en: "Frontend & Web" },
    iconName: "Layout",
    items: [
      { name: "React.js / Next.js", level: "Expert", hot: true },
      { name: "JavaScript (ES6+)", level: "Expert", hot: true },
      { name: "HTML5 / CSS3", level: "Expert", hot: true },
      { name: "Tailwind CSS", level: "Expert", hot: true },
      { name: "Framer Motion", level: "Advanced" },
      { name: "Responsive Mobile UX", level: "Expert" }
    ]
  },
  {
    category: { tr: "Tasarım & UI/UX", en: "Design & UI/UX" },
    iconName: "Palette",
    items: [
      { name: "UI/UX Prototyping", level: "Expert", hot: true },
      { name: "Figma to Code", level: "Expert" },
      { name: "Grafik Tasarım / Logo", level: "Advanced" },
      { name: "Kurumsal Kimlik", level: "Advanced" },
      { name: "Adobe Creative Suite", level: "Advanced" }
    ]
  },
  {
    category: { tr: "Dijital Pazarlama & SEO", en: "Digital Marketing & SEO" },
    iconName: "TrendingUp",
    items: [
      { name: "Google SEO Stratejisi", level: "Expert", hot: true },
      { name: "Google Ads Reklamları", level: "Advanced" },
      { name: "Sosyal Medya Yönetimi", level: "Advanced" },
      { name: "Google Analytics / Tag Manager", level: "Advanced" }
    ]
  },
  {
    category: { tr: "Araçlar & Mobil", en: "Tools & Mobile" },
    iconName: "Cpu",
    items: [
      { name: "Git / GitHub", level: "Expert" },
      { name: "Mobil Uygulama (App Dev)", level: "Advanced" },
      { name: "Web Performans Optimizasyonu", level: "Expert", hot: true },
      { name: "Vercel / Cloudflare Hosting", level: "Advanced" }
    ]
  }
];

export const experiences = [
  {
    role: { tr: "Front-end Developer & Freelance Uzmanı", en: "Front-end Developer & Digital Specialist" },
    company: "Kadir Kuzucu Digital",
    location: "Remote",
    period: "2019 — Present",
    description: {
      tr: "Müşterilerin dijital varlıklarını sıfırdan tasarlayarak web geliştirme, UI/UX, SEO, Google Ads ve sosyal medya süreçlerini uçtan uca yürütüyorum.",
      en: "Architecting digital products from scratch, leading web development, UI/UX, SEO, Google Ads, and social media campaigns for regional and global clients."
    },
    highlights: {
      tr: [
        "30'dan fazla otel, e-ticaret ve kurumsal müşteri projesini başarıyla teslim ettim",
        "Google SEO & Ads optimizasyonu ile müşterilerin organik trafiğini ortalama %60 artırdım",
        "Mobil odaklı, yenilikçi ve hızlı kullanıcı arayüzleri inşa ettim"
      ],
      en: [
        "Successfully delivered 30+ hotel, e-commerce, and corporate client websites",
        "Boosted clients' organic search traffic by an average of 60% via SEO & Google Ads",
        "Crafted mobile-first, modern, and lightning-fast user interfaces"
      ]
    },
    tags: ["React", "JavaScript", "Tailwind CSS", "UI/UX", "SEO", "Google Ads"]
  }
];
