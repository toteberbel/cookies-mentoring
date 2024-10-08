import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "rodrigo-berbel-cookieconsent/dist/cookieconsent.css";
import * as CookieConsent from "rodrigo-berbel-cookieconsent";

CookieConsent.run({
  disablePageInteraction: true,

  cookie: {
    name: "cc_cookie_demo2",
  },

  guiOptions: {
    consentModal: {
      layout: "box wide",
      position: "bottom right",
    },
    preferencesModal: {
      layout: "box",
    },
  },

  onFirstConsent: () => {
    console.log("onFirstAction fired");
  },

  onConsent: () => {
    console.log("onConsent fired ...");
  },

  onChange: () => {
    console.log("onChange fired ...");
  },

  categories: {
    necessary: {
      readOnly: true,
      enabled: true,
    },
    analytics: {
      autoClear: {
        cookies: [
          {
            name: /^(_ga|_gid)/,
          },
        ],
      },
    },
    ads: {},
  },

  language: {
    default: "en",

    translations: {
      en: {
        consentModal: {
          title: "Hello traveller, it's cookie time!",
          description:
            "Our website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent.",
          acceptAllBtn: "Accept",
          acceptNecessaryBtn: "Reject",
          showPreferencesBtn: "Manage with BTS",
          closeIconLabel: "Reject all and close",
          footer: `
                        <a href="#link">Privacy Policy</a>
                        <a href="#link">Impressum</a>
                    `,
        },
        preferencesModal: {
          title: "Cookie preferences",
          acceptAllBtn: "Accept all",
          acceptNecessaryBtn: "Reject all",
          savePreferencesBtn: "Save preferences",
          sections: [
            {
              title: "Cookie usage",
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. For more details, refer to our <a href="#" class="cc__link">privacy policy</a>.',
            },
            {
              title: "Strictly necessary cookies",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              linkedCategory: "necessary",
            },
            {
              title: "Performance and analytics cookies",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              linkedCategory: "analytics",
              cookieTable: {
                caption: "Cookie table",
                headers: {
                  name: "Cookie",
                  domain: "Domain",
                  desc: "Description",
                },
                body: [
                  {
                    name: "_ga",
                    domain: "yourdomain.com",
                    desc: "description ...",
                  },
                  {
                    name: "_gid",
                    domain: "yourdomain.com",
                    desc: "description ...",
                  },
                ],
              },
            },
            {
              title: "Advertisement and targeting cookies",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              linkedCategory: "ads",
            },
            {
              title: "More information",
              description:
                'For any queries in relation to our policy on cookies and your choices, please <a class="cc__link" href="#yourdomain.com">contact me</a>.',
            },
          ],
        },
      },
    },
  },
});

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
