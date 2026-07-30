// ─── i18n Translation Dictionary ─────────────────────────────────────────────
// Supported locales: "en" (English) | "ja" (Japanese)

export type Locale = "en" | "ja";

export const translations = {
  en: {
    // ── Nav ──────────────────────────────────────────────────────────────────
    nav: {
      services: "Services",
      process: "Process",
      work: "Work",
      faq: "FAQ",
      cta: "Get My Demo",
    },

    // ── Hero ─────────────────────────────────────────────────────────────────
    hero: {
      line1: ["Rank", "higher."],
      line2: ["Convert", "more."],
      subtitle:
        "Customers are searching on Google right now. We make sure they find",
      subtitleHighlight: "you",
      subtitleEnd:
        "not your competitor. SEO, websites, and AI chatbots built for businesses that convert not just clicks.",
      ctaPrimary: "Get My Demo",
      ctaSecondary: "See the results",
      stats: [
        { v: "Brand Image", l: "More clients" },
        { v: "Increase Sales", l: "Lower cost" },
        { v: "24/7", l: "No more missed calls" },
      ],
    },

    // ── TrustBar ─────────────────────────────────────────────────────────────
    trustBar: {
      label: "Trusted by businesses",
    },

    // ── Problem ──────────────────────────────────────────────────────────────
    problem: {
      label: "The problem",
      heading: "Every Day You Wait, Competitors Win More Guests.",
      pains: [
        {
          k: "01",
          t: "You're invisible on Google",
          d: 'When someone searches "emergency plumber near me" or "best dentist in town," your competitor shows up.',
        },
        {
          k: "02",
          t: "Your website doesn't close",
          d: "Traffic comes, looks around, and leaves. No call, no form, no booking.",
        },
        {
          k: "03",
          t: "Leads slip through at night",
          d: "A homeowner has a burst pipe at 11pm. They message three companies. The first one to respond wins.",
        },
      ],
    },

    // ── Services ─────────────────────────────────────────────────────────────
    services: {
      label: "Our solution",
      heading: "One partner. Unlimited Growth.",
      subheading:
        "One connected system that helps people find you, trust you, and contact you.",
      items: [
        {
          title: "Local SEO",
          outcome: "Show up when customers search for you.",
          desc: 'We get you into the Google Map Pack and local rankings so when someone searches "near me," your business is the first call they make.',
          points: [
            "Google Business Profile optimization",
            "Local keyword & content roadmap",
            "Reviews & citation building",
          ],
        },
        {
          title: "Conversion Websites",
          outcome: "A site that turns clicks into phone calls.",
          desc: "Fast, mobile first websites designed for one thing: getting visitors to call, book, or request. Built in weeks, not months.",
          points: [
            "Click to call & instant booking",
            "Subsecond load on mobile",
            "You own it no lock in",
          ],
        },
        {
          title: "AI Chatbots",
          outcome: "Capture every lead, even at 2am.",
          desc: "A custom AI assistant trained on your services that answers questions, books appointments 24/7.",
          points: [
            "Trained on your services & pricing",
            "Books appointments directly",
            "Hands off to you for repetitive task",
          ],
        },
      ],
      samplePrompts: [
        {
          q: "Are you open at 2am?",
          a: "Yes! Our team responds 24/7. How can we help you tonight?",
        },
        {
          q: "Book an appointment",
          a: "I can schedule that right now! What day works best for you?",
        },
      ],
    },

    // ── Benefits ─────────────────────────────────────────────────────────────
    benefits: {
      label: "Why it matters",
      heading: "Results You Can Measure.",
      items: [
        {
          headline: "Good Brand Image",
          title: "Build Trust",
          description:
            "Helps customers trust your business before they ever contact you.",
        },
        {
          headline: "24/7",
          title: "Never Miss",
          description:
            "Answers common questions, qualifies leads, and helps customers anytime even outside business hours.",
        },
        {
          headline: "Lower Cost",
          title: "Save money",
          description: "By replacing staff for repetitive tasks.",
        },
        {
          headline: "100% Ownership",
          title: "Your Website.",
          description: "You own your domain, website, content, and customer data.",
        },
      ],
    },

    // ── Process ──────────────────────────────────────────────────────────────
    process: {
      label: "How it works",
      heading: "A calm, predictable process.",
      subheading:
        "No black boxes. No jargon. You always know what we're doing and why.",
      steps: [
        {
          n: "01",
          t: "Consult",
          d: "We extract your current rankings, site, and funnel. You get a diagnosis of what's costing you.",
        },
        {
          n: "02",
          t: "Plan",
          d: "We create a clear strategy with goals and priorities.",
        },
        { n: "03", t: "Build", d: "We build your project, test, deploy." },
        { n: "04", t: "Grow", d: "We maintain, optimize, and grow." },
      ],
    },

    // ── Portfolio ────────────────────────────────────────────────────────────
    portfolio: {
      label: "Proof",
      heading: "Real businesses. Real numbers.",
      subheading: "Local service companies that stopped guessing and started growing.",
      cases: [
        {
          tag: "Local services",
          title: "From page 4 to the Google Map Pack in 90 days",
          metric: "Map Pack",
          label: "local visibility",
          img: "https://images.pexels.com/photos/5691536/pexels-photo-5691536.jpeg?auto=compress&cs=tinysrgb&w=800",
          blurb:
            "A two truck plumbing outfit was invisible on Google. We rebuilt their local SEO and added a 24/7 chatbot. Phones started ringing within six weeks.",
        },
        {
          tag: "Healthcare",
          title: "New site cut cost-per-patient in half",
          metric: "Lower spend",
          label: "per new patient",
          img: "https://images.pexels.com/photos/8413334/pexels-photo-8413334.jpeg?auto=compress&cs=tinysrgb&w=800",
          blurb:
            "A dental practice was burning budget on ads with no return. We built a conversion first site and shifted to organic. New patients went up, ad spend went down.",
        },
        {
          tag: "HVAC Home services",
          title: "AI chat that closes at 3am",
          metric: "More Sale",
          label: "chat attributed revenue",
          img: "https://images.pexels.com/photos/7347538/pexels-photo-7347538.jpeg?auto=compress&cs=tinysrgb&w=800",
          blurb:
            "An HVAC company kept losing overnight leads to faster competitors. Our AI chatbot now answers, qualifies, and books before the office opens.",
        },
      ],
    },

    // ── Testimonials ─────────────────────────────────────────────────────────
    testimonials: {
      label: "Testimonials",
      heading: "From the people who took the leap.",
      quotes: [
        {
          q: "We were spending $4K/month on ads and getting maybe two calls a week. Six months in, we're getting fifteen calls a week from Google and we cut the ad spend.",
          a: "Mike R.",
          r: "Owner, Riverside Plumbing",
          tag: "Plumbing",
        },
        {
          q: "The chatbot paid for itself in the first month. We booked three emergency jobs overnight that we would've lost. It's like having a receptionist that never sleeps.",
          a: "Sarah L.",
          r: "Operations, Apex HVAC",
          tag: "HVAC",
        },
      ],
    },

    // ── FAQ ──────────────────────────────────────────────────────────────────
    faq: {
      label: "FAQ",
      heading: "Still weighing it up?",
      items: [
        {
          q: "How much does this cost?",
          a: "Consult and will give you a price with value. We are not guessing your pricing and depends on what you need.",
        },
        {
          q: "How long until I see results?",
          a: "Chatbots and website changes ship in weeks. Local SEO compounds you'll see early wins in 60–90 days and material traffic growth by month 6. Anyone promising overnight rankings is lying.",
        },
        {
          q: "Am I locked into a long contract?",
          a: "No. We work month-to-month after an initial 90 day sprint. If we're not earning our fee, you leave and keep everything we built.",
        },
        {
          q: "Do you guarantee rankings?",
          a: "Nobody honest does. We guarantee the work, the process, and full transparency on what's moving the needle. Rankings follow.",
        },
        {
          q: "Who owns the website and content?",
          a: "You do. Fully. Code, copy, chatbot flows, analytics all in your accounts, from day one. No hostage situations.",
        },
        {
          q: "What if I already have a website?",
          a: "Great we'll consult it for free. Most local service sites lose leads because they're outdated, confusing, or invisible on mobile. We'll show you exactly what's broken and what it'll take to fix.",
        },
      ],
    },

    // ── FinalCTA ─────────────────────────────────────────────────────────────
    cta: {
      heading: "We'll send you a Free website demo.",
      subheading: "We'll show you the project demo and we'll see the results.",
      successHeading: "You're in! 🎉",
      successBody: "We'll review your request and reach out to",
      successBodyEnd: "within 24 hours with your free demo.",
      submitAnother: "Submit another request",
      fields: {
        companyName: "Company Name",
        industry: "Company Industry",
        phone: "Contact Number",
        email: "Email Address",
        industryPlaceholder: "Select your industry…",
        companyPlaceholder: "e.g. Apex Plumbing & HVAC",
        phonePlaceholder: "e.g. (555) 234-5678",
        emailPlaceholder: "e.g. alex@company.com",
        otherPlaceholder: "e.g. Pet Grooming, Auto Repair…",
        submit: "Get my Free Demo",
        sending: "Sending...",
        fine: "No credit card required · We respond within 24 hours",
        error:
          "Something went wrong. Please try again or contact us directly.",
      },
      industries: [
        { value: "plumbing", label: "Plumbing" },
        { value: "hvac", label: "HVAC / Home Services" },
        { value: "dental", label: "Dental / Healthcare" },
        { value: "roofing", label: "Roofing / Construction" },
        { value: "legal", label: "Legal Services" },
        { value: "electrical", label: "Electrical" },
        { value: "landscaping", label: "Landscaping" },
        { value: "hotels", label: "Hotels / Hospitality" },
        { value: "other", label: "Other (please specify)" },
      ],
    },

    // ── Footer ───────────────────────────────────────────────────────────────
    footer: {
      tagline:
        "SEO, websites, and AI chatbots for local service businesses that measure marketing in phone calls and booked jobs not impressions.",
      services: "Services",
      company: "Company",
      privacyLabel: "Privacy",
      termsLabel: "Terms",
      copyright: "TS Marketing",
      serviceLinks: [
        { label: "Google SEO", href: "#services" },
        { label: "Websites", href: "#services" },
        { label: "AI Chatbots", href: "#services" },
        { label: "Free SEO audit", href: "#audit" },
      ],
      companyLinks: [
        { label: "About", href: "#" },
        { label: "Process", href: "#process" },
        { label: "Work", href: "#work" },
        { label: "Contact", href: "#audit" },
      ],
    },
  },

  // ────────────────────────────────────────────────────────────────────────────
  // JAPANESE
  // ────────────────────────────────────────────────────────────────────────────
  ja: {
    // ── Nav ──────────────────────────────────────────────────────────────────
    nav: {
      services: "サービス",
      process: "プロセス",
      work: "実績",
      faq: "よくある質問",
      cta: "無料デモを受け取る",
    },

    // ── Hero ─────────────────────────────────────────────────────────────────
    hero: {
      line1: ["上位表示。"],
      line2: ["集客を", "加速。"],
      subtitle: "今この瞬間も、お客様がGoogleで検索しています。",
      subtitleHighlight: "あなたのビジネス",
      subtitleEnd:
        "が見つかるよう、私たちがサポートします。SEO・ウェブサイト・AIチャットボットで、クリックを売上に変えます。",
      ctaPrimary: "無料デモを受け取る",
      ctaSecondary: "実績を見る",
      stats: [
        { v: "ブランド力向上", l: "新規顧客獲得" },
        { v: "売上アップ", l: "コスト削減" },
        { v: "24時間365日", l: "機会損失ゼロ" },
      ],
    },

    // ── TrustBar ─────────────────────────────────────────────────────────────
    trustBar: {
      label: "導入実績のある企業",
    },

    // ── Problem ──────────────────────────────────────────────────────────────
    problem: {
      label: "課題",
      heading: "放置するほど、競合に顧客を奪われていきます。",
      pains: [
        {
          k: "01",
          t: "Googleで見つけてもらえていない",
          d: "「近くの水道屋」「おすすめの歯医者」で検索したとき、表示されるのはライバル店。あなたのビジネスは埋もれています。",
        },
        {
          k: "02",
          t: "ウェブサイトで成約できていない",
          d: "訪問者は来るのに、問い合わせも予約も入らない。サイトが「集客装置」になっていないのが原因です。",
        },
        {
          k: "03",
          t: "夜間・休日の問い合わせを逃している",
          d: "深夜11時に水漏れが発生。3社に連絡して、最初に返信したところが受注します。あなたのビジネスは対応できていますか？",
        },
      ],
    },

    // ── Services ─────────────────────────────────────────────────────────────
    services: {
      label: "私たちの解決策",
      heading: "一社に任せる。成長を加速する。",
      subheading:
        "見つけてもらい、信頼され、問い合わせが入る。一つの仕組みで全部解決します。",
      items: [
        {
          title: "ローカルSEO",
          outcome: "検索した瞬間に、あなたが表示される。",
          desc: "Googleマップパックと地域ランキングに掲載し、「近く」で検索されたとき最初に選ばれるビジネスへ。",
          points: [
            "Googleビジネスプロフィール最適化",
            "地域キーワード戦略 & コンテンツ",
            "口コミ・引用文献構築",
          ],
        },
        {
          title: "高変換率ウェブサイト",
          outcome: "クリックを電話・予約に変えるサイト。",
          desc: "スマートフォン対応の高速サイトを数週間で構築。目的はただ一つ──訪問者に行動を起こさせること。",
          points: [
            "ワンタップ通話 & 即時予約",
            "モバイル超高速表示",
            "完全所有・ロックインなし",
          ],
        },
        {
          title: "AIチャットボット",
          outcome: "深夜2時でも、すべてのリードを取り逃さない。",
          desc: "あなたのサービス・料金で学習したAIアシスタントが24時間365日質問対応・予約受付を自動化。",
          points: [
            "サービス内容・料金で学習済み",
            "予約を直接受付",
            "繰り返し作業はAIにお任せ",
          ],
        },
      ],
      samplePrompts: [
        {
          q: "深夜2時でも対応できますか？",
          a: "はい！24時間365日対応しています。何かお困りですか？",
        },
        {
          q: "予約をしたい",
          a: "すぐにご予約承ります！ご都合の良い日はいつですか？",
        },
      ],
    },

    // ── Benefits ─────────────────────────────────────────────────────────────
    benefits: {
      label: "なぜ重要か",
      heading: "数字で証明できる成果。",
      items: [
        {
          headline: "ブランド力向上",
          title: "信頼を構築",
          description: "問い合わせ前から、お客様があなたのビジネスを信頼するようになります。",
        },
        {
          headline: "24時間365日",
          title: "機会損失ゼロ",
          description:
            "よくある質問への回答、リード選別、営業時間外でもお客様サポートを自動化。",
        },
        {
          headline: "コスト削減",
          title: "節約する",
          description: "繰り返し業務をスタッフから自動化に置き換えることでコストを削減。",
        },
        {
          headline: "100%所有権",
          title: "あなたのサイト。",
          description:
            "ドメイン・サイト・コンテンツ・顧客データは全てあなたのものです。",
        },
      ],
    },

    // ── Process ──────────────────────────────────────────────────────────────
    process: {
      label: "進め方",
      heading: "シンプルで安心なプロセス。",
      subheading:
        "ブラックボックスなし。専門用語なし。何をしているか、なぜするかは常にご説明します。",
      steps: [
        {
          n: "01",
          t: "ヒアリング",
          d: "現在の検索順位・サイト・集客の流れを分析。何が機会損失を生んでいるか診断します。",
        },
        {
          n: "02",
          t: "プランニング",
          d: "目標と優先順位を明確にした戦略を策定します。",
        },
        {
          n: "03",
          t: "制作・開発",
          d: "プロジェクトを構築・テスト・公開します。",
        },
        {
          n: "04",
          t: "成長・改善",
          d: "運用・最適化・継続的な成長をサポートします。",
        },
      ],
    },

    // ── Portfolio ────────────────────────────────────────────────────────────
    portfolio: {
      label: "実績",
      heading: "リアルなビジネス。リアルな数字。",
      subheading: "勘に頼るのをやめて、成長に踏み出した地域ビジネスの事例。",
      cases: [
        {
          tag: "地域サービス",
          title: "90日でGoogleマップパックの上位へ",
          metric: "Map Pack",
          label: "地域視認性",
          img: "https://images.pexels.com/photos/5691536/pexels-photo-5691536.jpeg?auto=compress&cs=tinysrgb&w=800",
          blurb:
            "Googleで全く見つからなかった水道工事会社が、SEO再構築と24時間チャットボット導入で、6週間後には電話が鳴り止まない状態に。",
        },
        {
          tag: "医療",
          title: "新サイトで患者獲得コストが半減",
          metric: "コスト半減",
          label: "新規患者1人あたり",
          img: "https://images.pexels.com/photos/8413334/pexels-photo-8413334.jpeg?auto=compress&cs=tinysrgb&w=800",
          blurb:
            "広告費を無駄にしていた歯科医院が、コンバージョン重視サイトとオーガニック戦略への切り替えで、新患増加・広告費削減を同時に実現。",
        },
        {
          tag: "空調・住宅サービス",
          title: "深夜3時に成約するAIチャット",
          metric: "売上増加",
          label: "チャット経由の受注",
          img: "https://images.pexels.com/photos/7347538/pexels-photo-7347538.jpeg?auto=compress&cs=tinysrgb&w=800",
          blurb:
            "夜間のリードをライバルに奪われていた空調会社が、AIチャットボット導入でオフィスが開く前に自動で対応・予約受付を実現。",
        },
      ],
    },

    // ── Testimonials ─────────────────────────────────────────────────────────
    testimonials: {
      label: "お客様の声",
      heading: "踏み出した方々からの声。",
      quotes: [
        {
          q: "月4,000ドルの広告費で週2件の問い合わせしかなかったのに、今では週15件がGoogleから来て広告費も削減できています。",
          a: "Mike R.",
          r: "オーナー, Riverside Plumbing",
          tag: "水道",
        },
        {
          q: "チャットボットは導入初月で元が取れました。一晩で3件の緊急工事を受注。眠らない受付スタッフみたいです。",
          a: "Sarah L.",
          r: "オペレーション, Apex HVAC",
          tag: "空調",
        },
      ],
    },

    // ── FAQ ──────────────────────────────────────────────────────────────────
    faq: {
      label: "よくある質問",
      heading: "まだ迷っていますか？",
      items: [
        {
          q: "費用はどのくらいかかりますか？",
          a: "ヒアリング後に、価値に見合った価格をご提示します。お客様のニーズによって異なります。",
        },
        {
          q: "結果が出るまでどのくらいかかりますか？",
          a: "チャットボットとサイト改善は数週間で公開。ローカルSEOは60〜90日で早期の成果が見え始め、6ヶ月で本格的なトラフィック増加が期待できます。一夜で順位が上がると約束するところは嘘をついています。",
        },
        {
          q: "長期契約に縛られますか？",
          a: "いいえ。最初の90日間のスプリント後は月単位のご契約です。成果を出せなければ、制作物はすべてお持ちいただいてご解約いただけます。",
        },
        {
          q: "順位を保証してもらえますか？",
          a: "誠実な会社は保証しません。私たちが保証するのは作業品質・プロセスの透明性です。順位はその結果としてついてきます。",
        },
        {
          q: "ウェブサイトやコンテンツは誰が所有しますか？",
          a: "すべてお客様のものです。コード・コピー・チャットボットのフロー・アナリティクスは初日からお客様のアカウントに。人質にはしません。",
        },
        {
          q: "すでにウェブサイトがある場合はどうなりますか？",
          a: "喜んで無料で診断します。地域ビジネスのサイトの多くは古くて分かりにくく、スマートフォンでも見づらいために見込み客を逃しています。何が問題で何が必要か、明確にお伝えします。",
        },
      ],
    },

    // ── FinalCTA ─────────────────────────────────────────────────────────────
    cta: {
      heading: "無料のウェブサイトデモをお送りします。",
      subheading: "プロジェクトのデモをご覧いただき、成果をご確認ください。",
      successHeading: "登録完了！🎉",
      successBody: "内容を確認次第、",
      successBodyEnd: "宛に24時間以内に無料デモをお送りします。",
      submitAnother: "別のリクエストを送る",
      fields: {
        companyName: "会社名",
        industry: "業種",
        phone: "電話番号",
        email: "メールアドレス",
        industryPlaceholder: "業種を選択してください…",
        companyPlaceholder: "例：山田設備株式会社",
        phonePlaceholder: "例：080-1234-5678",
        emailPlaceholder: "例：yamada@company.co.jp",
        otherPlaceholder: "例：ペットサロン、自動車修理…",
        submit: "無料デモを受け取る",
        sending: "送信中...",
        fine: "クレジットカード不要 · 24時間以内にご返信します",
        error:
          "送信に失敗しました。もう一度お試しいただくか、直接ご連絡ください。",
      },
      industries: [
        { value: "plumbing", label: "水道・配管" },
        { value: "hvac", label: "空調・住宅設備" },
        { value: "dental", label: "歯科・医療" },
        { value: "roofing", label: "屋根工事・建設" },
        { value: "legal", label: "法律サービス" },
        { value: "electrical", label: "電気工事" },
        { value: "landscaping", label: "造園・外構" },
        { value: "hotels", label: "ホテル・ホスピタリティ" },
        { value: "other", label: "その他（詳細を入力）" },
      ],
    },

    // ── Footer ───────────────────────────────────────────────────────────────
    footer: {
      tagline:
        "地域ビジネスのためのSEO・ウェブサイト・AIチャットボット。成果はインプレッションではなく、電話件数と受注数で測ります。",
      services: "サービス",
      company: "会社情報",
      privacyLabel: "プライバシーポリシー",
      termsLabel: "利用規約",
      copyright: "TS Marketing",
      serviceLinks: [
        { label: "Google SEO", href: "#services" },
        { label: "ウェブサイト制作", href: "#services" },
        { label: "AIチャットボット", href: "#services" },
        { label: "無料SEO診断", href: "#audit" },
      ],
      companyLinks: [
        { label: "会社概要", href: "#" },
        { label: "プロセス", href: "#process" },
        { label: "実績", href: "#work" },
        { label: "お問い合わせ", href: "#audit" },
      ],
    },
  },
} as const;

export type Translations = typeof translations;
export type LangTranslations = Translations["en"];
