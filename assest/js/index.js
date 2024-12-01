$("#toogleDropDown").on("click", function () {
  const elementPrefix = "divDropDwon";
  toggleDropdown(elementPrefix);
});

function selectOption(language) {
  $("#toogleDropDown").text(language);
  const elementPrefix = "divDropDwon";
  toggleDropdown(elementPrefix);
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

  var selectedValue = $option.data("value");
  var $opacityDiv = $(".opacityDiv");

  if (selectedValue == "1") {
    if ($opacityDiv.is(":hidden")) {
      $opacityDiv.css("display", "block");
    }
  } else {
    if ($opacityDiv.is(":visible")) {
      $opacityDiv.css("display", "none");
    }
  }
});

$(".opacityDiv .cursorMouse").on("click", function () {
  $(".opacityDiv").css("display", "none");
});

function toggleDropdown(elementPrefix) {
  const dropdown = $(`.${elementPrefix}`);
  dropdown.toggleClass("open");
}

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
