// analytics.js

// Load the Google Analytics library
(function() {
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-VLM098VNRQ';
    document.head.appendChild(script);
  })();
  
  // Initialize Google Analytics
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  
  gtag('config', 'G-VLM098VNRQ');
  