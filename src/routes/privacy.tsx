import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalSection } from "@/components/site/LegalPage";

const TITLE = "Privacy Policy — TSMC Marketing";
const DESCRIPTION =
  "How TSMC Marketing collects, uses, and protects your personal information in Japan and the Philippines.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/privacy" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="July 25, 2026"
      currentPage="privacy"
      japanContent={<PrivacyJapan />}
      philippinesContent={<PrivacyPhilippines />}
    />
  );
}

function PrivacyJapan() {
  return (
    <>
      <LegalSection title="1. 事業者情報">
        <p>
          本プライバシーポリシーは、TSMC Marketing（以下「当社」）が提供するウェブサイト、SEO、
          ウェブサイト制作、AIチャットボット等のサービス（以下「本サービス」）における、
          お客様の個人情報の取扱いについて定めるものです。
        </p>
        <p>
          お問い合わせ先：{" "}
          <a href="mailto:tsmarketingsupport@gmail.com" className="text-primary-glow hover:underline">
            tsmarketingsupport@gmail.com
          </a>
          {" "}／ 電話：{" "}
          <a href="tel:+817090653941" className="text-primary-glow hover:underline">
            +8170 9065 3941
          </a>
        </p>
      </LegalSection>

      <LegalSection title="2. 収集する情報">
        <p>当社は、以下の情報を収集する場合があります。</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>デモ申込フォーム等でご提供いただくウェブサイトURL、会社名、お名前、メールアドレス、電話番号</li>
          <li>メール、電話、その他の方法でのお問い合わせ内容</li>
          <li>本サービスのご利用に伴い自動的に取得される情報（IPアドレス、ブラウザ種類、デバイス情報、アクセス日時、参照元URL等）</li>
          <li>Cookieおよび類似技術により取得される利用状況データ</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. 利用目的">
        <p>当社は、収集した情報を以下の目的で利用します。</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>無料デモ、見積もり、SEO監査等のご提供</li>
          <li>お問い合わせへの対応およびサポート</li>
          <li>本サービスの提供、運営、改善</li>
          <li>契約の履行、請求、本人確認</li>
          <li>不正利用の防止およびセキュリティの確保</li>
          <li>法令に基づく対応</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. 第三者提供・委託">
        <p>
          当社は、法令に基づく場合を除き、本人の同意なく個人情報を第三者に提供しません。
          ホスティング、分析、メール配信、決済等の業務を外部事業者に委託する場合があります。
          その際、委託先に対し適切な監督を行います。
        </p>
      </LegalSection>

      <LegalSection title="5. Cookie の使用">
        <p>
          当社のウェブサイトでは、サイトの機能維持、利用状況の分析、ユーザー体験の向上のために
          Cookieおよび類似技術を使用する場合があります。ブラウザの設定によりCookieを無効化できますが、
          一部機能が利用できなくなる場合があります。
        </p>
      </LegalSection>

      <LegalSection title="6. 保管期間">
        <p>
          個人情報は、利用目的の達成に必要な期間、または法令で定められた期間に限り保管します。
          不要となった個人情報は、安全な方法で削除または匿名化します。
        </p>
      </LegalSection>

      <LegalSection title="7. お客様の権利">
        <p>
          お客様は、当社が保有する自己の個人情報について、開示、訂正、追加、削除、利用停止等を
          請求する権利を有します。ご請求は上記お問い合わせ先までご連絡ください。
          合理的な期間内に対応いたします。
        </p>
      </LegalSection>

      <LegalSection title="8. お問い合わせ">
        <p>
          本プライバシーポリシーに関するご質問は、
          <a href="mailto:tsmarketingsupport@gmail.com" className="text-primary-glow hover:underline">
            tsmarketingsupport@gmail.com
          </a>
          までご連絡ください。
        </p>
      </LegalSection>
    </>
  );
}

function PrivacyPhilippines() {
  return (
    <>
      <LegalSection title="1. Who we are">
        <p>
          TSMC Marketing (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) provides SEO, website development,
          and AI chatbot services for local businesses. This Privacy Policy explains how we collect,
          use, and protect personal information when you visit our website or use our services.
        </p>
        <p>
          Contact:{" "}
          <a href="mailto:tsmarketingsupport@gmail.com" className="text-primary-glow hover:underline">
            tsmarketingsupport@gmail.com
          </a>
          {" "}· Phone:{" "}
          <a href="tel:+817090653941" className="text-primary-glow hover:underline">
            +8170 9065 3941
          </a>
        </p>
      </LegalSection>

      <LegalSection title="2. Information we collect">
        <p>We may collect the following types of information:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Website URL, business name, your name, email address, and phone number submitted through our demo or contact forms</li>
          <li>Messages and details you provide when contacting us by email, phone, or other channels</li>
          <li>Technical data collected automatically, such as IP address, browser type, device information, pages visited, and timestamps</li>
          <li>Usage data collected through cookies and similar technologies</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. How we use your information">
        <p>We use personal information to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Provide free demos, proposals, and SEO reviews</li>
          <li>Respond to inquiries and provide customer support</li>
          <li>Deliver, operate, and improve our services</li>
          <li>Perform contracts, billing, and identity verification</li>
          <li>Prevent fraud and maintain security</li>
          <li>Comply with applicable laws and regulations in the Philippines</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Sharing and processors">
        <p>
          We do not sell your personal information. We may share data with trusted service providers
          who assist with hosting, analytics, email delivery, or payment processing, under
          contractual obligations to protect your data. We may also disclose information when
          required by law or to protect our rights and users.
        </p>
      </LegalSection>

      <LegalSection title="5. Cookies">
        <p>
          Our website may use cookies and similar technologies to maintain functionality, analyze
          traffic, and improve your experience. You can control cookies through your browser settings,
          though some features may not work properly if cookies are disabled.
        </p>
      </LegalSection>

      <LegalSection title="6. Retention">
        <p>
          We retain personal information only for as long as needed to fulfill the purposes described
          in this policy, or as required by applicable law. When data is no longer needed, we delete
          or anonymize it using reasonable security measures.
        </p>
      </LegalSection>

      <LegalSection title="7. Your rights">
        <p>
          Under the Philippine Data Privacy Act of 2012 (RA 10173), you may have the right to access,
          correct, or request deletion of your personal information, subject to legal exceptions.
          To exercise these rights, contact us at{" "}
          <a href="mailto:tsmarketingsupport@gmail.com" className="text-primary-glow hover:underline">
            tsmarketingsupport@gmail.com
          </a>
          . We will respond within a reasonable timeframe.
        </p>
      </LegalSection>

      <LegalSection title="8. Contact us">
        <p>
          For questions about this Privacy Policy, email{" "}
          <a href="mailto:tsmarketingsupport@gmail.com" className="text-primary-glow hover:underline">
            tsmarketingsupport@gmail.com
          </a>
          .
        </p>
      </LegalSection>
    </>
  );
}
