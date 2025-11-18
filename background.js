// background.js
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "searchChatGPT",
    title: "Search ChatGPT for \"%s\"",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "searchChatGPT") {
    const searchQuery = encodeURIComponent(info.selectionText);
    const chatgptUrl = `https://chatgpt.com/?q=${searchQuery}`;
    chrome.tabs.create({ url: chatgptUrl });
  }
});