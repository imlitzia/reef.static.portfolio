const year = document.getElementById("year");
const langToggle = document.getElementById("langToggle");

if (year) {
  year.textContent = new Date().getFullYear();
}

const socialProfiles = {
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/"
};

const githubLink = document.getElementById("githubLink");
const linkedinLink = document.getElementById("linkedinLink");

if (githubLink) githubLink.href = socialProfiles.github;
if (linkedinLink) linkedinLink.href = socialProfiles.linkedin;

const translations = {
  en: {
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_contact: "Contact",
    tagline: "Computer Science • UX • VR • AI",
    hero_title: "Building human-centered products with code, design, and immersive tech.",
    hero_intro:
      "I am Aarif Suksai, a Computer Science student at Shibaura Institute of Technology. I create modern web experiences, AI-powered tools, and VR research prototypes that improve how people interact and communicate.",
    hero_cta_work: "Explore Work",
    hero_cta_contact: "Get In Touch",
    profile_role: "Computer Science Student / Front-End Engineer / UX-VR Researcher",
    summary_title: "Professional Summary",
    summary_body:
      "Currently pursuing a degree in Computer Science at Shibaura Institute of Technology. I am passionate about software development, UX design, and VR technologies. My current research focuses on dynamic audio models to improve voice communication comfort in VR poster sessions.",
    beenos_meta: "Front-End Engineer • Jan 2025 - Mar 2026 • Tokyo",
    beenos_1: "Developed dynamic applications with JavaScript (ES6+), HTML5, and CSS3.",
    beenos_2: "Improved UX through GTM-based behavior analysis and A/B testing.",
    beenos_3: "Built responsive cross-browser interfaces and optimized performance.",
    beenos_4: "Created OCR + LLM API workflow for PDF extraction and structuring.",
    taskally_meta: "iOS App Engineer • Aug 2024 - Present • Tokyo",
    taskally_1: "Built a subscription-based task management app during a hackathon.",
    taskally_2: "Led App Store deployment and landing page design.",
    taskally_3: "Implemented task visualization and smart notifications.",
    mobispace_meta: "Graphic / Brand Designer • Apr 2024 - Present • Tokyo",
    mobispace_1: "Produced logos and campaign visuals aligned with brand goals.",
    mobispace_2: "Designed market-focused creative assets with Adobe and Figma.",
    avilen_meta: "Software Engineer Intern • Dec 2023 - Sep 2024 • Tokyo",
    avilen_1: "Developed SPA features using Next.js, React, TypeScript, Tailwind CSS.",
    avilen_2: "Integrated REST APIs for real-time data rendering.",
    avilen_3: "Handled full lifecycle from requirement definition to release.",
    projects_title: "Featured Projects",
    project_1_body:
      "Optimized speech clarity by adjusting audio rendering based on speaker position and emotional state to reduce listener fatigue.",
    project_2_body:
      "Built a real-time recognition system for image/video streams with 85% accuracy in security-oriented use cases.",
    project_3_body:
      "Designed a real-time ambient light detection device for smart home and energy-saving scenarios.",
    project_4_body:
      "Implemented collaborative filtering methods and applied predictive analytics to medical datasets.",
    education_title: "Education",
    education_school: "Shibaura Institute of Technology • Tokyo",
    education_degree: "Bachelor of Computer Science (Expected Graduation: 2025)",
    education_research: "Research: Kansei Engineering in VR, dynamic audio models for speech intelligibility and comfort.",
    skills_title: "Technical Skills",
    awards_title: "Awards",
    awards_1: "Grand Prize Winner - Official Logo Design Contest at SIT",
    awards_2: "Team Leader - Best Team at an Engineering Camp",
    languages_title: "Languages",
    languages_1: "Thai: Native",
    languages_2: "English: Advanced",
    languages_3: "Japanese: Advanced",
    contact_title: "Contact",
    contact_email: "Email",
    contact_phone: "Phone",
    contact_text: "Open to software engineering, UX, and immersive technology opportunities.",
    footer_text: "©",
    footer_built: "Built for GitHub Pages."
  },
  ja: {
    nav_experience: "経歴",
    nav_projects: "プロジェクト",
    nav_skills: "スキル",
    nav_contact: "連絡先",
    tagline: "コンピュータサイエンス • UX • VR • AI",
    hero_title: "コードとデザイン、没入型技術で人間中心のプロダクトを創る。",
    hero_intro:
      "芝浦工業大学でコンピュータサイエンスを専攻しているアーリフ・スックサイです。Web開発、AIツール、VR研究プロトタイプを通して、人の体験を向上させることに取り組んでいます。",
    hero_cta_work: "作品を見る",
    hero_cta_contact: "お問い合わせ",
    profile_role: "コンピュータサイエンス学生 / フロントエンドエンジニア / UX・VR研究者",
    summary_title: "プロフィール概要",
    summary_body:
      "芝浦工業大学でコンピュータサイエンスを学びながら、ソフトウェア開発、UXデザイン、VR技術に注力しています。現在はVRポスターセッションにおける音声コミュニケーション快適性向上のため、動的音響モデルを研究しています。",
    beenos_meta: "フロントエンドエンジニア • 2025年1月 - 2026年3月 • 東京",
    beenos_1: "JavaScript (ES6+)、HTML5、CSS3を用いた動的Webアプリを開発。",
    beenos_2: "GTMによる行動分析とA/Bテストを通じてUXを改善。",
    beenos_3: "クロスブラウザ対応のレスポンシブUIを構築し、性能を最適化。",
    beenos_4: "OCRとLLM APIを活用したPDFデータ抽出ワークフローを実装。",
    taskally_meta: "iOSアプリ開発エンジニア • 2024年8月 - 現在 • 東京",
    taskally_1: "ハッカソンでサブスク型タスク管理アプリを開発。",
    taskally_2: "App Store公開とランディングページ設計を主導。",
    taskally_3: "タスク可視化と通知機能を実装し、UXを向上。",
    mobispace_meta: "グラフィック / ブランドデザイナー • 2024年4月 - 現在 • 東京",
    mobispace_1: "ブランド戦略に沿ったロゴやデザイン素材を制作。",
    mobispace_2: "市場に合わせたビジュアルをAdobeとFigmaで設計。",
    avilen_meta: "ソフトウェアエンジニアインターン • 2023年12月 - 2024年9月 • 東京",
    avilen_1: "Next.js、React、TypeScript、Tailwind CSSでSPA機能を開発。",
    avilen_2: "REST API連携によりリアルタイム表示を実装。",
    avilen_3: "要件定義からリリースまで一連の工程を担当。",
    projects_title: "主なプロジェクト",
    project_1_body: "話者位置と感情状態に応じた音響調整モデルにより、VR環境での聞き取りやすさを最適化。",
    project_2_body: "画像・動画ストリーム向けの物体認識システムを開発し、85%の認識精度を達成。",
    project_3_body: "スマートホーム向けに、周囲光をリアルタイム計測するIoTデバイスを設計。",
    project_4_body: "協調フィルタリングを実装し、医療系データセットへ推薦分析を適用。",
    education_title: "学歴",
    education_school: "芝浦工業大学 • 東京",
    education_degree: "コンピュータサイエンス学士（2025年卒業予定）",
    education_research: "研究: VRにおける感性工学、音声明瞭度と快適性を高める動的音響モデル。",
    skills_title: "技術スキル",
    awards_title: "受賞歴",
    awards_1: "芝浦工業大学 公式ロゴデザインコンテスト 最優秀賞",
    awards_2: "エンジニアリングキャンプ 最優秀チーム（リーダー）",
    languages_title: "言語",
    languages_1: "タイ語: ネイティブ",
    languages_2: "英語: 上級",
    languages_3: "日本語: 上級",
    contact_title: "連絡先",
    contact_email: "メール",
    contact_phone: "電話",
    contact_text: "ソフトウェア開発、UX、没入型技術分野の機会を歓迎しています。",
    footer_text: "©",
    footer_built: "GitHub Pages向けに構築。"
  }
};

function applyLanguage(lang) {
  const map = translations[lang];
  if (!map) return;

  document.documentElement.lang = lang;
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key && map[key]) {
      el.textContent = map[key];
    }
  });

  if (langToggle) {
    langToggle.textContent = lang === "en" ? "日本語" : "English";
  }

  localStorage.setItem("portfolio_lang", lang);
}

const savedLang = localStorage.getItem("portfolio_lang") || "en";
applyLanguage(savedLang);

if (langToggle) {
  langToggle.addEventListener("click", () => {
    const next = document.documentElement.lang === "ja" ? "en" : "ja";
    applyLanguage(next);
  });
}
