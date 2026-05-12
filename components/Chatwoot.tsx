import Script from 'next/script';

type ChatwootProps = {};

function Chatwoot(props: ChatwootProps) {
  return (
    <>
      <style jsx>
        {`
          .branding--link {
            display: none;
          }
        `}
      </style>
      <Script>
        {`
  (function(d,t) {
    var BASE_URL="https://messages.digitallync.ai";
    var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
    g.src=BASE_URL+"/packs/js/sdk.js";
    g.defer = true;
    g.async = true;
    s.parentNode.insertBefore(g,s);
    g.onload=function(){
      window.chatwootSDK.run({
        websiteToken: 'E4giGnR3sLXibrVp7osyFRYV',
        baseUrl: BASE_URL
      })
    }
  })(document,"script");
      `}
      </Script>
    </>
  );
}

export default Chatwoot;
