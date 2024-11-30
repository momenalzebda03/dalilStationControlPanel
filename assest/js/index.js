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

function toggleDropdown(elementPrefix) {
  const dropdown = $(`.${elementPrefix}`);
  dropdown.toggleClass("open");
}

$("#toogleDropDown").on("click", function () {
  const elementPrefix = "divDropDwon";
  toggleDropdown(elementPrefix);
});

function selectOption(language) {
  $("#toogleDropDown").text(language);
  const elementPrefix = "divDropDwon";
  toggleDropdown(elementPrefix);
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

document.addEventListener("DOMContentLoaded", function () {
  const dateInputs = [
    {
      input: document.getElementById("txtdate"),
      icon: document.getElementById("calendarIcon"),
      boxId: "divBoxArrowOverflow",
    },
    {
      input: document.getElementById("txtdate1"),
      icon: document.getElementById("calendarIcon1"),
      boxId: "divBoxArrowNumber",
    },
    {
      input: document.getElementById("txtdate2"),
      icon: document.getElementById("calendarIcon2"),
      boxId: "divBoxArrowSalary",
    },
  ];

  dateInputs.forEach(({ input, icon, boxId }) => {
    const datepicker = flatpickr(input, {
      dateFormat: "d/m/Y",
      allowInput: true,
      onClose: () => toggleDropdown(boxId),
    });

    icon.addEventListener("click", () => datepicker.open());
  });
});

var ctx2 = document.getElementById("chart2").getContext("2d");
var chart2 = new Chart(ctx2, {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Sales",
        data: [2500, 2000, 2500, 2000, 2500],
        backgroundColor: "#005DBA",
        borderColor: "#",
        borderWidth: 1,
      },
    ],
  },
});
