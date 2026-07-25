import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalSection } from "@/components/site/LegalPage";

const TITLE = "Terms of Service — TSMC Marketing";
const DESCRIPTION =
  "Terms and conditions for using TSMC Marketing services in Japan and the Philippines.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/terms" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      lastUpdated="July 25, 2026"
      currentPage="terms"
      japanContent={<TermsJapan />}
      philippinesContent={<TermsPhilippines />}
    />
  );
}

function TermsJapan() {
  return (
    <>
      <LegalSection title="1. 規約への同意">
        <p>
          本利用規約（以下「本規約」）は、TSMC Marketing（以下「当社」）が提供するウェブサイト、
          SEO、ウェブサイト制作、AIチャットボット等のサービス（以下「本サービス」）の利用条件を定めるものです。
          本サービスをご利用いただくことで、本規約に同意したものとみなします。
        </p>
      </LegalSection>

      <LegalSection title="2. 提供サービス">
        <p>当社は、以下を含むデジタルマーケティング関連サービスを提供します。</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Google SEOおよびローカルSEO</li>
          <li>コンバージョン重視のウェブサイト設計・開発</li>
          <li>AIチャットボットの設計・導入・運用支援</li>
          <li>無料デモ、監査、見積もり</li>
        </ul>
        <p>
          サービスの詳細、期間、料金、成果物は、個別の契約書または見積書にて定めます。
        </p>
      </LegalSection>

      <LegalSection title="3. デモ・見積もり">
        <p>
          当社が提供する無料デモ、監査、見積もりは参考情報であり、特定の検索順位、
          トラフィック増加、売上向上等の成果を保証するものではありません。
          SEOおよびデジタルマーケティングの結果は、業界、競合、検索エンジンの変更等により変動します。
        </p>
      </LegalSection>

      <LegalSection title="4. お客様の責任">
        <p>お客様は以下の責任を負います。</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>正確かつ最新の情報を提供すること</li>
          <li>提供するコンテンツ、画像、商標等について必要な権利を有すること</li>
          <li>本サービスの利用が適用される法令および第三者の権利を侵害しないこと</li>
          <li>アカウント情報、APIキー等の機密情報を適切に管理すること</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. 知的財産">
        <p>
          本サービス、当社ウェブサイト、提案資料、テンプレート、ソフトウェア等に関する知的財産権は
          当社または正当な権利者に帰属します。契約に別段の定めがある場合を除き、
          お客様への引渡し後のウェブサイトおよびお客様提供コンテンツの権利はお客様に帰属します。
        </p>
      </LegalSection>

      <LegalSection title="6. 免責・責任制限">
        <p>
          本サービスは「現状有姿」で提供されます。当社は、本サービスの中断、エラー、
          データ損失、間接損害、逸失利益等について、法令で認められる範囲を超えて責任を負いません。
          当社の責任総額は、当該請求原因事象発生前12か月間にお客様が当社に支払った料金の総額を上限とします。
        </p>
      </LegalSection>

      <LegalSection title="7. 契約の終了">
        <p>
          お客様または当社は、個別契約の定めに従い、または書面通知により本サービスの提供を
          終了できます。終了後も、秘密保持、知的財産、免責、準拠法等の条項は存続します。
        </p>
      </LegalSection>

      <LegalSection title="8. 準拠法・管轄">
        <p>
          本規約は日本法に準拠し、本規約に関する紛争については、
          当社の本店所在地を管轄する裁判所を第一審の専属的合意管轄裁判所とします。
        </p>
        <p>
          お問い合わせ：{" "}
          <a href="mailto:tsmarketingsupport@gmail.com" className="text-primary-glow hover:underline">
            tsmarketingsupport@gmail.com
          </a>
        </p>
      </LegalSection>
    </>
  );
}

function TermsPhilippines() {
  return (
    <>
      <LegalSection title="1. Acceptance of terms">
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your use of the website and services provided
          by TSMC Marketing (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), including SEO, website development,
          and AI chatbot solutions. By accessing our website or engaging our services, you agree to these Terms.
        </p>
      </LegalSection>

      <LegalSection title="2. Services provided">
        <p>We offer digital marketing services including:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Google and local SEO</li>
          <li>Conversion-focused website design and development</li>
          <li>AI chatbot setup and support</li>
          <li>Free demos, audits, and proposals</li>
        </ul>
        <p>
          Specific scope, timelines, fees, and deliverables are defined in a separate agreement
          or statement of work signed by both parties.
        </p>
      </LegalSection>

      <LegalSection title="3. Demos and proposals">
        <p>
          Free demos, audits, and proposals are provided for informational purposes only.
          We do not guarantee specific search rankings, traffic levels, lead volume, or revenue outcomes.
          Results depend on your industry, competition, market conditions, and changes to search platforms.
        </p>
      </LegalSection>

      <LegalSection title="4. Client responsibilities">
        <p>You agree to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Provide accurate and up-to-date business information</li>
          <li>Ensure you have rights to all content, images, and trademarks you supply</li>
          <li>Use our services in compliance with applicable Philippine laws and third-party rights</li>
          <li>Keep login credentials and API keys confidential</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Intellectual property">
        <p>
          We retain ownership of our methodologies, templates, software, and pre-existing materials.
          Unless otherwise agreed in writing, you own your website and content after delivery and full payment.
          You grant us a limited license to use your materials solely to perform the agreed services.
        </p>
      </LegalSection>

      <LegalSection title="6. Disclaimer and limitation of liability">
        <p>
          Our services are provided &quot;as is&quot; to the fullest extent permitted by law.
          We are not liable for indirect, incidental, or consequential damages, including lost profits or data.
          Our total liability for any claim shall not exceed the fees you paid us in the twelve (12) months
          preceding the event giving rise to the claim.
        </p>
      </LegalSection>

      <LegalSection title="7. Termination">
        <p>
          Either party may terminate services according to the signed agreement or with written notice
          where no fixed term applies. Provisions regarding confidentiality, intellectual property,
          disclaimers, and governing law survive termination.
        </p>
      </LegalSection>

      <LegalSection title="8. Governing law and jurisdiction">
        <p>
          These Terms are governed by the laws of the Republic of the Philippines.
          Any dispute arising from these Terms shall be subject to the exclusive jurisdiction
          of the courts of the Philippines.
        </p>
        <p>
          Contact:{" "}
          <a href="mailto:tsmarketingsupport@gmail.com" className="text-primary-glow hover:underline">
            tsmarketingsupport@gmail.com
          </a>
        </p>
      </LegalSection>
    </>
  );
}
