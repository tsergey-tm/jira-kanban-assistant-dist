const openBtn = document.getElementById("openBtn");

openBtn.addEventListener("click", () => {
  chrome.tabs.query({active: true, lastFocusedWindow: true}, (tabs) => {
    const tab = tabs[0];
    if (tab) {
      processUrl(new URL(tab.url));
    } else {
      alert("There are no active tabs")
    }
  })
})

chrome.tabs.query({active: true, lastFocusedWindow: true}, (tabs) => {
  const tab = tabs[0];
  if (tab && checkUrl(new URL(tab.url)).ok) {
    openBtn.textContent = "Open Jira Kanban assistant";
    openBtn.disabled = false;
  } else {
    openBtn.disabled = true;
    openBtn.textContent = "Can't find Jira Kanban board";
  }
})

function processUrl(url) {

  let checkUrlRes = checkUrl(url);
  if (!checkUrlRes.ok) {
    alert("Can't find Jira Kanban board");
    return;
  }

  let uri = "chrome-extension://" + chrome.runtime.id + "/index.html#base=" + encodeURI(checkUrlRes.jiraBaseUrl) + "&board=" + checkUrlRes.jiraBoardId;
  window.open(uri, '_blank').focus();
}

function checkUrl(url) {

  console.log("Url: " + url);
  let res = {};
  if (url.pathname.includes("/secure/RapidBoard.jspa")) {
    res.ok = true;
    res.jiraVer = "7";
    const urlIndex = url.href.indexOf("/secure/RapidBoard.jspa");
    res.jiraBaseUrl = url.href.substring(0, urlIndex);
    res.jiraBoardId = url.searchParams.get("rapidView");
    return res;
  }

  res.ok = false;
  return res;
}
