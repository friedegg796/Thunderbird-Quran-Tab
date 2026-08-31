console.debug("Quran Tab is loading!");

browser.spacesToolbar.addButton('Quran', {
    title: "Quran Tab",
    defaultIcons: "quran_tab_icon.svg",
    url: "https://quran.com/"
});
 
browser.webRequest.onBeforeSendHeaders.addListener(
  function(e) {
    e.requestHeaders.forEach(header => {
      if (header.name.toLowerCase() === "user-agent") {
        header.value = "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/122.0";
      }
    });
    return { requestHeaders: e.requestHeaders };
  },
  { urls: ["https://quran.com/*"] },
  ["blocking", "requestHeaders"]
);