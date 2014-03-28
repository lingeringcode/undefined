/* =================================================
    'Undefined' by Chris Lindgren
    Code response to/iteration of @DanielleSucher's 
    'Jailbreak the Patriarchy' web browser extension 
    for Chrome.
==================================================*/
var simplyNothing = { };
var moreNothing = { };
var stillNothing = { };
var enoughNothing = { };

var map = {};
var maps = [ simplyNothing, moreNothing, stillNothing, enoughNothing ];
for (var i = 0; i < maps.length; i++) {
  for (attr in maps[i]) {
    map[attr] = maps[i][attr];
  }
}

var concatNothing = function(obj) {
  var parts = [];
  for (key in obj) {
    parts.push(key);
  }
  return parts.join('|');
};

var regex = '^('
              + concatNothing(simplyNothing)
              + ')|('
              + concatNothing(moreNothing)
              + ')$|('
              + concatNothing(stillNothing)
              + ')|^('
              + concatNothing(enoughNothing)
              + ')$';

var searchForNothing = new RegExp(regex, 'i');

function findUndefined(word) {
  return map[word];
}

function swapNothing(word) {
  return word
    .replace(searchForNothing, findUndefined)
}

function nothingSwap(text) {
  return text
    .replace(/\b([a-z][\w']+)\b/gi, swapNothing)
}

function jailbreakNothing(node){
  var treeWalker = document.createTreeWalker(
      node,
      NodeFilter.SHOW_TEXT,
      null,
      false
  );
  while(treeWalker.nextNode()) {
    var current = treeWalker.currentNode;
    current.textContent = nothingSwap(current.textContent);
  }
}

chrome.extension.sendRequest( { name: "isPaused?" }, function(response) {
  if (response.value != 'true') {
    jailbreakNothing(document.body);
    document.body.addEventListener('DOMNodeInserted', function(event) {
      jailbreakNothing(event.target);
    });
  }
});