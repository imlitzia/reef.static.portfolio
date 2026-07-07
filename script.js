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
    footer_built: "Built for GitHub Pages.",
    project_view_details: "View project details →",
    project_back: "← Back to Projects",
    project_highlights_title: "Highlights"
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
    footer_built: "GitHub Pages向けに構築。",
    project_view_details: "プロジェクト詳細を見る →",
    project_back: "← プロジェクト一覧に戻る",
    project_highlights_title: "ハイライト"
  }
};

const projectDetails = {
  "vr-audio-model": {
    image: "./assets/project-vr.svg",
    en: {
      title: "Dynamic Audio Model for VR Poster Sessions",
      stack: "Unity • Unreal Engine • VR Audio API",
      alt: "VR audio model project thumbnail",
      summary:
        "Optimized speech clarity by adjusting audio rendering based on speaker position and emotional state to reduce listener fatigue.",
      paragraphs: [
        "The project explores how spatial audio rendering can be tuned in real time to keep long VR poster sessions comfortable to listen to. By tracking a speaker's position and inferred emotional state, the system dynamically reshapes reverb, gain, and directionality so speech stays intelligible even in crowded virtual poster halls.",
        "Built across Unity and Unreal Engine prototypes, the model integrates with a custom VR audio API layer that exposes per-speaker audio parameters to the rendering pipeline. Listener fatigue was measured through short comprehension and comfort surveys after extended sessions, guiding iterative tuning of the audio curves."
      ],
      highlights: [
        "Real-time adjustment of speech audio based on speaker position and emotional cues",
        "Prototyped in both Unity and Unreal Engine for cross-engine comparison",
        "Evaluated through listener comfort and intelligibility studies"
      ]
    },
    ja: {
      title: "VRポスターセッション向け動的音響モデル",
      stack: "Unity • Unreal Engine • VR Audio API",
      alt: "VR音響モデルのプロジェクトサムネイル",
      summary: "話者位置と感情状態に応じた音響調整モデルにより、VR環境での聞き取りやすさを最適化。",
      paragraphs: [
        "このプロジェクトでは、長時間にわたるVRポスターセッションを快適に聞き続けられるよう、空間音響のレンダリングをリアルタイムに調整する方法を検証しています。話者の位置と推定される感情状態を追跡し、リバーブ・ゲイン・指向性を動的に変化させることで、混雑した仮想ポスター会場でも音声の明瞭性を維持します。",
        "UnityとUnreal Engine双方でプロトタイプを構築し、話者ごとの音響パラメータをレンダリングパイプラインに渡す独自のVR Audio APIレイヤーと統合しました。長時間セッション後の理解度・快適性アンケートを通じて聴取者の疲労を測定し、音響カーブの調整を繰り返し行いました。"
      ],
      highlights: [
        "話者の位置と感情の手がかりに基づく音声のリアルタイム調整",
        "UnityとUnreal Engine両方でプロトタイプを作成しエンジン間比較を実施",
        "聴取者の快適性と明瞭性に関する調査で評価"
      ]
    }
  },
  "computer-vision": {
    image: "./assets/project-vision.svg",
    en: {
      title: "Computer Vision for Object Recognition",
      stack: "Python • OpenCV",
      alt: "Computer vision project thumbnail",
      summary:
        "Built a real-time recognition system for image/video streams with 85% accuracy in security-oriented use cases.",
      paragraphs: [
        "This project implements a real-time object recognition pipeline for live video streams, aimed at security-oriented monitoring scenarios where fast, reliable detection matters more than exhaustive classification coverage.",
        "Using Python and OpenCV, the system combines classical feature extraction with a lightweight classification stage to keep inference fast on modest hardware, reaching roughly 85% detection accuracy across the tested scenarios while maintaining real-time frame rates."
      ],
      highlights: [
        "Real-time processing of image and video streams",
        "~85% detection accuracy in security-oriented test scenarios",
        "Built with Python and OpenCV for portability"
      ]
    },
    ja: {
      title: "物体認識のためのコンピュータビジョン",
      stack: "Python • OpenCV",
      alt: "コンピュータビジョンのプロジェクトサムネイル",
      summary: "画像・動画ストリーム向けの物体認識システムを開発し、85%の認識精度を達成。",
      paragraphs: [
        "本プロジェクトでは、迅速かつ信頼性の高い検出が重視されるセキュリティ用途の監視シナリオを想定し、ライブ映像ストリーム向けのリアルタイム物体認識パイプラインを実装しました。",
        "PythonとOpenCVを用い、古典的な特徴量抽出と軽量な分類処理を組み合わせることで、性能が限られたハードウェアでも高速な推論を実現し、テストしたシナリオ全体で約85%の検出精度をリアルタイムのフレームレートを維持しながら達成しました。"
      ],
      highlights: [
        "画像・動画ストリームのリアルタイム処理",
        "セキュリティ想定のテストシナリオで約85%の検出精度",
        "移植性を重視しPythonとOpenCVで構築"
      ]
    }
  },
  "iot-light-sensor": {
    image: "./assets/project-iot.svg",
    en: {
      title: "Home IoT Light Sensor with Arduino",
      stack: "Arduino • C/C++",
      alt: "IoT light sensor project thumbnail",
      summary: "Designed a real-time ambient light detection device for smart home and energy-saving scenarios.",
      paragraphs: [
        "A compact Arduino-based device that continuously measures ambient light levels and reports changes in real time, intended as a building block for smart-home automation and energy-saving routines.",
        "Firmware written in C/C++ handles sensor sampling, noise filtering, and threshold-based triggering, so the device can hand off simple on/off or dimming signals to other smart-home components without needing a constant network connection."
      ],
      highlights: [
        "Real-time ambient light sensing with Arduino",
        "Threshold-based triggers for smart-home automation",
        "Designed with energy efficiency in mind"
      ]
    },
    ja: {
      title: "Arduinoによる家庭用IoT照度センサー",
      stack: "Arduino • C/C++",
      alt: "IoT照度センサーのプロジェクトサムネイル",
      summary: "スマートホーム向けに、周囲光をリアルタイム計測するIoTデバイスを設計。",
      paragraphs: [
        "周囲の明るさを常時計測し、変化をリアルタイムで通知する小型のArduinoデバイスです。スマートホームの自動化や省エネ動作の基盤として活用できるよう設計しました。",
        "C/C++で書かれたファームウェアがセンサーのサンプリング、ノイズ除去、しきい値判定によるトリガー処理を担当し、常時ネットワーク接続を必要とせずに、他のスマートホーム機器へオン・オフや調光信号を渡すことができます。"
      ],
      highlights: [
        "Arduinoによるリアルタイムの周囲光検知",
        "スマートホーム自動化のためのしきい値トリガー",
        "省エネルギーを意識した設計"
      ]
    }
  },
  "ml-recommendation": {
    image: "./assets/project-ml.svg",
    en: {
      title: "Machine Learning Recommendation System",
      stack: "Python • Scikit-learn",
      alt: "Machine learning recommendation project thumbnail",
      summary: "Implemented collaborative filtering methods and applied predictive analytics to medical datasets.",
      paragraphs: [
        "This project applies collaborative filtering techniques to build a recommendation engine, then extends the same predictive-analytics approach to medical datasets to explore recommendation-style modeling outside of typical product contexts.",
        "Built with Python and Scikit-learn, the pipeline covers data preprocessing, model training, and evaluation, with an emphasis on comparing collaborative filtering variants for predictive accuracy on sparse, real-world data."
      ],
      highlights: [
        "Collaborative filtering-based recommendation modeling",
        "Predictive analytics applied to medical datasets",
        "Built and evaluated with Python and Scikit-learn"
      ]
    },
    ja: {
      title: "機械学習レコメンデーションシステム",
      stack: "Python • Scikit-learn",
      alt: "機械学習レコメンデーションのプロジェクトサムネイル",
      summary: "協調フィルタリングを実装し、医療系データセットへ推薦分析を適用。",
      paragraphs: [
        "協調フィルタリング手法を用いてレコメンデーションエンジンを構築し、同じ予測分析のアプローチを医療系データセットにも適用することで、一般的な商品推薦以外の領域での応用可能性を検証しました。",
        "PythonとScikit-learnで構築したパイプラインは、データの前処理・モデル学習・評価までを一貫してカバーし、疎な実データに対する予測精度の観点から複数の協調フィルタリング手法を比較することに重点を置きました。"
      ],
      highlights: [
        "協調フィルタリングによるレコメンデーションモデリング",
        "医療系データセットへの予測分析の適用",
        "PythonとScikit-learnによる構築と評価"
      ]
    }
  }
};

const projectId = new URLSearchParams(window.location.search).get("id");

function renderProjectDetail(lang) {
  const detailRoot = document.getElementById("projectDetail");
  if (!detailRoot) return;

  const project = projectId && projectDetails[projectId];
  if (!project) {
    const titleEl = document.getElementById("projectTitle");
    if (titleEl) titleEl.textContent = lang === "ja" ? "プロジェクトが見つかりません" : "Project not found";
    document.title = "Project not found | Aarif Suksai";
    return;
  }

  const content = project[lang] || project.en;

  document.title = `${content.title} | Aarif Suksai`;

  const stackEl = document.getElementById("projectStack");
  const titleEl = document.getElementById("projectTitle");
  const summaryEl = document.getElementById("projectSummary");
  const imageEl = document.getElementById("projectImage");
  const paragraphsEl = document.getElementById("projectParagraphs");
  const highlightsEl = document.getElementById("projectHighlights");

  if (stackEl) stackEl.textContent = content.stack;
  if (titleEl) titleEl.textContent = content.title;
  if (summaryEl) summaryEl.textContent = content.summary;
  if (imageEl) {
    imageEl.src = project.image;
    imageEl.alt = content.alt;
  }
  if (paragraphsEl) {
    paragraphsEl.innerHTML = "";
    content.paragraphs.forEach((paragraph) => {
      const p = document.createElement("p");
      p.textContent = paragraph;
      paragraphsEl.appendChild(p);
    });
  }
  if (highlightsEl) {
    highlightsEl.innerHTML = "";
    content.highlights.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      highlightsEl.appendChild(li);
    });
  }
}

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

  renderProjectDetail(lang);

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

const siteHeader = document.getElementById("siteHeader");
if (siteHeader) {
  const toggleHeaderShadow = () => {
    siteHeader.classList.toggle("scrolled", window.scrollY > 8);
  };
  toggleHeaderShadow();
  window.addEventListener("scroll", toggleHeaderShadow, { passive: true });
}

function getHeaderOffset() {
  return siteHeader ? siteHeader.getBoundingClientRect().height + 16 : 16;
}

function flashSection(target) {
  target.classList.remove("scroll-target-flash");
  // eslint-disable-next-line no-void
  void target.offsetWidth;
  target.classList.add("scroll-target-flash");
  window.setTimeout(() => target.classList.remove("scroll-target-flash"), 1000);
}

function scrollToId(id) {
  const target = document.getElementById(id);
  if (!target) return;
  const top = target.getBoundingClientRect().top + window.pageYOffset - getHeaderOffset();
  window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
  window.setTimeout(() => flashSection(target), 450);
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  const id = link.getAttribute("href").slice(1);
  if (!id || !document.getElementById(id)) return;
  link.addEventListener("click", (event) => {
    event.preventDefault();
    scrollToId(id);
    history.pushState(null, "", `#${id}`);
  });
});

if (window.location.hash) {
  const initialId = window.location.hash.slice(1);
  window.setTimeout(() => scrollToId(initialId), 60);
}

const revealTargets = document.querySelectorAll(".reveal");
if (revealTargets.length && "IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  revealTargets.forEach((el) => revealObserver.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add("in-view"));
}
