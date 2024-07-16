//linking to google font

var link = document.createElement("link");
link.rel = "stylesheet";
link.href =
  "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";
document.getElementsByTagName("head")[0].appendChild(link);

//linking to css file

var link = document.createElement("link");
link.type = "text/css";
link.rel = "stylesheet";
link.href ="https://cdn.jsdelivr.net/gh/habibullaharafat23/consent_v2@1bfe0552f151aff8e0df1f665eb5f50f31f224a3/style.css";
//  link.href = "style.css";
document.getElementsByTagName("head")[0].appendChild(link);

//html elements

var consentdiv = document.createElement("div");

consentdiv.innerHTML = `
<div class=consent-banner-wrapper>
  <div class=consent-content-area>
    <div class="navigation-header">
      <div class="nav-item active-nav consent">
        <h3 class="consent-headlines">Consent</h3>
      </div>
      <div class="nav-item details">
        <h3 class="consent-headlines" >Details</h3>
      </div>
     
    </div>
    


    <div class="section-container">
      <div class="section-content active-section-content" id="consentSection">
        <p class="consent-descriptions">Wir verwenden Cookies, um die Benutzerfreundlichkeit unserer Website zu verbessern. Durch die weitere Nutzung unserer Webseite stimmen Sie der Verwendung von Cookies gemäß unserer Cookie-Richtlinie zu. <a href="https://www.bluttest-online.de/datenschutzerklaerung/" target="_blank">Weitere Informationen.<a/></p>
      </div>
      <div class="section-content" style="display:none" id="detailsSection">
        <div class="cookie-detail-wrapper necessaryCookies">
          <div class="cookie-detail-headline">
            <div class="arrow-icon">
              <span class="catagoryIcon material-symbols-outlined">expand_more</span>
            </div>
            <div class="cookie-catagory-name">
              <span class="consent-headlines atwithIconText cookieCatagory">Notwendig</span>
              <div class="totalCookiesWrapper">
                <span class="totalCookies" id="totalNecessaryCookies"></span>
              </div>
            </div>
            <div class="cookie-toggle">
              <label class="ConsentSwitch">
                <input type="checkbox" checked class="inputDisable" disabled>
                <span class="ConsentSlider"></span>
              </label>
            </div>
          </div>
          <div class="cookie-details-descriptions">
            <p class="consent-descriptions">Notwendige Cookies helfen dabei, eine Website nutzbar zu machen, indem sie grundlegende Funktionen wie die Navigation auf der Seite und den Zugriff auf sichere Bereiche der Website ermöglichen. Ohne diese Cookies kann die Website nicht richtig funktionieren.</p>
          </div>
          <div class="all-cookies" style="display:none"></div>
        </div>
        <div class="cookie-detail-wrapper preferencesCookies">
          <div class="cookie-detail-headline">
            <div class="arrow-icon">
              <span class="catagoryIcon material-symbols-outlined">expand_more</span>
            </div>
            <div class="cookie-catagory-name">
              <span class="consent-headlines atwithIconText cookieCatagory">Einstellungen</span>
              <div class="totalCookiesWrapper">
                <span class="totalCookies" id="totalPreferencesCookies"></span>
              </div>
            </div>
            <div class="cookie-toggle">
              <label class="ConsentSwitch">
                <input type="checkbox">
                <span class="ConsentSlider"></span>
              </label>
            </div>
          </div>
          <div class="cookie-details-descriptions">
            <p class="consent-descriptions">Präferenz-Cookies ermöglichen es einer Website, Informationen zu speichern, die die Art und Weise ändern, wie die Website funktioniert oder aussieht, wie zum Beispiel Ihre bevorzugte Sprache oder die Region, in der Sie sich befinden.</p>
          </div>
          <div class="all-cookies" style="display:none"></div>
        </div>
        <div class="cookie-detail-wrapper analyticsCookies">
          <div class="cookie-detail-headline">
            <div class="arrow-icon">
              <span class="catagoryIcon material-symbols-outlined">expand_more</span>
            </div>
            <div class="cookie-catagory-name">
              <span class="consent-headlines atwithIconText cookieCatagory">Analytics</span>
              <div class="totalCookiesWrapper">
                <span class="totalCookies" id="totalAnalyticsCookies"></span>
              </div>
            </div>
            <div class="cookie-toggle">
              <label class="ConsentSwitch">
                <input type="checkbox">
                <span class="ConsentSlider"></span>
              </label>
            </div>
          </div>
          <div class="cookie-details-descriptions">
            <p class="consent-descriptions">Statistik-Cookies helfen Website-Betreibern zu verstehen, wie Besucher mit Websites interagieren, indem sie Informationen anonym sammeln und melden.</p>
          </div>
          <div class="all-cookies" style="display:none"></div>
        </div>
        <div class="cookie-detail-wrapper marketingCookies">
          <div class="cookie-detail-headline">
            <div class="arrow-icon">
              <span class="catagoryIcon material-symbols-outlined">expand_more</span>
            </div>
            <div class="cookie-catagory-name">
              <span class="consent-headlines atwithIconText cookieCatagory">Marketing</span>
              <div class="totalCookiesWrapper">
                <span class="totalCookies" id="totalMarketingCookies"></span>
              </div>
            </div>
            <div class="cookie-toggle">
              <label class="ConsentSwitch">
                <input type="checkbox">
                <span class="ConsentSlider"></span>
              </label>
            </div>
          </div>
          <div class="cookie-details-descriptions">
            <p class="consent-descriptions">Marketing-Cookies werden verwendet, um Besucher über verschiedene Websites hinweg zu verfolgen. Das Ziel ist, Anzeigen anzuzeigen, die für den einzelnen Nutzer relevant und ansprechend sind und dadurch für Publisher und Drittanbieter-Werbetreibende wertvoller sind.</p>
          </div>
          <div class="all-cookies" style="display:none"></div>
        </div>
      </div>
      <div class="section-content" style="display:none" id="aboutSection">
        <p class="consent-descriptions">
          <span class="sec3Content" style="margin-top:15px">Cookies are small text files that can be used by websites to make a user's experience more efficient.</span>
          <span class="sec3Content">The law states that we can store cookies on your device if they are strictly necessary for the operation of this site. For all other types of cookies we need your permission. This means that cookies which are categorized as necessary, are processed based on GDPR Art. 6 (1) (f). All other cookies, meaning those from the categories preferences and marketing, are processed based on GDPR Art. 6 (1) (a) GDPR.</span>

          <span class="sec3Content">This site uses different types of cookies. Some cookies are placed by third party services that appear on our pages.</span>
          
        </p>
      </div>
    </div>
  <div class=consent-action-footer>
    <div class=action-buttons id=consentActionButtons>
      <button action="reject" class="action-btn" id="rejectConsentButton" style="display:none">REJECT</button>
      <button action="preference" class="action-btn bg-color" id="preferenceConsentButton">Einstellungen</button>
      <button action="accept" class="action-btn active" id=acceptConsentButton>Akzeptieren</button>
    </div>
  </div>
  </div>



</div>

<div class=miniConsentBanner>
  <img alt="" src=https://cdn.jsdelivr.net/gh/alifmahmudashik/marketing@marketing/consent-banner/img/cookie-icon.svg width=100%>
</div>
`;

document.body.appendChild(consentdiv);
