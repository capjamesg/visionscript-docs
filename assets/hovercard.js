var article = document.getElementsByClassName("h-entry");

if (article) {
  article = article[0];
}

function hover (target_link) {
    console.log(target_link);
  var hovercard_data = hovercards[target_link.href.replace(/\/+$/, "")];
  console.log(target_link.href.replace(/\/+$/, ""), "tea");
  if (hovercard_data) {
    var new_box = document.createElement("div");
    new_box.classList.add("hovercard");
    new_box.innerHTML = "<strong>" + hovercard_data["title"] + "</strong><p>" + hovercard_data["description"] + "</p>";
    new_box.style.top = window.scrollY + target_link.getBoundingClientRect().top + "px";
    new_box.style.left = window.scrollX + target_link.getBoundingClientRect().left + "px";
    new_box.id = "tooltip";
    document.body.appendChild(new_box);
  }
}

function unhover (target_link) {
  var active_hovercard = document.getElementById("tooltip");

  if (active_hovercard) {
    active_hovercard.parentNode.removeChild(active_hovercard);
  }
}

var links = article.getElementsByTagName("a");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("mouseover", function() {
    hover(this);
  });
  links[i].addEventListener("mouseout", function() {
    unhover(this);
  });
  // these handlers are so that the hovercard will appear/disappear
  // with keyboard actions
  links[i].addEventListener("onfocus", function() {
    hover(this);
  });
  links[i].addEventListener("onfocusout", function() {
    unhover(this);
  });
}
