// Background Service Worker for Manifest V3 SidePanel API
chrome.sidePanel
  ?.setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

chrome.runtime.onInstalled.addListener(() => {
  console.log('EchoGPT Chrome Extension 2.0 Installed Successfully.');
});
