chrome.webRequest.onBeforeRequest.addListener(function(details){
  return {redirectUrl:"http://forums.kingdomofloathing.com/vb/customavatars/avatar192963_5.gif"};
},
{urls: ["http://forums.kingdomofloathing.com/vb/customavatars/avatar202280_7*"]},["blocking"]);