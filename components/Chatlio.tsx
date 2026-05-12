import Script from 'next/script';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'chatlio-widget': ChatlioWidgetAttributes;
    }
    interface ChatlioWidgetAttributes {
      widgetid: string;
    }
  }
}

function Chatlio() {
  return (
    <>
      <Script src="https://js.chatlio.com/widget.js" strategy="lazyOnload" />
      <chatlio-widget
        widgetid="4ac3df99-fb2a-4720-7084-c33ead25ab3b"
        disable-favicon-badge
      ></chatlio-widget>
    </>
  );
}

export default Chatlio;
