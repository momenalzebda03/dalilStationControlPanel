$("#toogleDropDown").on("click", function () {
  const elementPrefix = "divDropDwon";
  toggleDropdown(elementPrefix);
});

function selectOption(language) {
  $("#toogleDropDown span").text(language);
  const elementPrefix = "divDropDwon";
  toggleDropdown(elementPrefix);
}

function toggleDropdown(elementPrefix) {
  const dropdown = $(`.${elementPrefix}`);
  dropdown.toggleClass("open");
  const arrow = $("#dropdownArrow");
  dropdown.hasClass("open")
    ? arrow.css("transform", "rotate(180deg)")
    : arrow.css("transform", "rotate(0deg)");
}

$(".custom-select").each(function () {
  var classes = $(this).attr("class"),
    placeholder = $(this).attr("placeholder");
  var template = `
    <div class="${classes}">
      <span class="custom-select-trigger">${placeholder}</span>
      <div class="custom-options">
        ${$(this)
          .find("option")
          .map(function () {
            return `<span class="custom-option" data-value="${$(
              this
            ).val()}">${$(this).text()}</span>`;
          })
          .get()
          .join("")}
      </div>
    </div>`;
  $(this)
    .wrap('<div class="custom-select-wrapper"></div>')
    .hide()
    .after(template);
});

$(".custom-select-trigger").on("click", function (event) {
  var $select = $(this).closest(".custom-select");
  $("html").one("click", function () {
    $select.removeClass("opened");
  });
  $select.toggleClass("opened");
  event.stopPropagation();
});

$(".custom-option").on("click", function () {
  var $option = $(this);
  var $select = $option.closest(".custom-select");
  $select.find("select").val($option.data("value"));
  $select.find(".custom-option").removeClass("selection");
  $option.addClass("selection");
  $select.removeClass("opened");
  $select.find(".custom-select-trigger").text($option.text());
});

$(".opacityDiv .cursorMouse").on("click", function () {
  $(".opacityDiv").css("display", "none");
});

$(document).ready(function () {
  var $accordionItem = $(".accordionItem");
  var $collapseElement = $("#collapseTow");
  $accordionItem.on("click", function () {
    if ($accordionItem.hasClass("activeListPage")) {
      $collapseElement.hasClass("collapse")
        ? $collapseElement.removeClass("collapse").addClass("show")
        : "";
    }
  });

  let dark = false;
  $(".imageDark").click(function () {
    if (!dark) {
      $(this).attr("src", "assest/images/dark.png");
      dark = true;
    } else {
      $(this).attr("src", "assest/images/iconSun.svg");
      dark = false;
    }
  });

  $("#toogleDropDownStor").click(function (e) {
    e.stopPropagation();
    $(".boxButtonStor").toggle();
  });

  $(document).click(function (e) {
    if (!$(e.target).closest("#toogleDropDownStor").length) {
      $(".boxButtonStor").hide();
    }
  });

  $(".accordionItem").each(function () {
    $(this).on("click", function () {
      var $currentItem = $(this).find(".d-flex.align-items-center");
      if ($currentItem.hasClass("activeList")) {
        $currentItem.removeClass("activeList");
      } else {
        $(".accordionItem")
          .find(".d-flex.align-items-center")
          .removeClass("activeList");
        $currentItem.addClass("activeList");
      }
      var target = $(this).find(".collapse");
      target.collapse("toggle");
    });
  });
});

function selectOptionStor(option) {
  document.getElementById("selectedOption").textContent = option;
}

const items = document.querySelectorAll(".inputSearchHelpActiveHover");
items.forEach((item) => {
  item.addEventListener("click", function () {
    items.forEach((i) => i.classList.remove("inputSearchHelpActive"));
    this.classList.add("inputSearchHelpActive");
  });
});

const inputField = document.getElementById("chatInput");
const sendButton = document.getElementById("sendBtn");
const chatBox = document.querySelector(".chatBox");
const messageTextElement = document.querySelector(".messageStay .messageText");
function updateMessageTextPosition() {
  if (inputField.value.trim() !== "") {
    messageTextElement.style.right = "0";
  } else { 
    messageTextElement.style.right = "-90px";
  }
}
inputField.addEventListener("input", updateMessageTextPosition);
function sendMessage() {
  const messageText = inputField.value.trim();

  if (messageText) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", "userMessage");
    const messagesHTML = `
        <div class="d-flex flex-column gap-2 align-items-start w-100">
            <div class="messageText fw-bold p-3">${messageText}</div>
            <div>
                <img src="assest/images/check.svg" alt="">
                <span>12:15</span>
            </div>
        </div>
    `;
    messageElement.innerHTML = messagesHTML;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
    inputField.value = "";
    updateMessageTextPosition();
  }
}

sendButton.addEventListener("click", sendMessage);
inputField.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});

const divPoints = document.querySelectorAll(".messageText .divPoint");
function restartAnimation() {
  divPoints.forEach((div) => {
    div.style.animation = "none";
  });
  void divPoints[0].offsetWidth;
  divPoints.forEach((div, index) => {
    div.style.animation = `showAndHide 0.5s forwards ${index}s`;
  });
}
setInterval(restartAnimation, 7000);
