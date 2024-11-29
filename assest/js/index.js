$(document).ready(function () {
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
  $("#toogleDropDownStor").click(function (e) {
    e.stopPropagation();
    $(".boxButtonStor").toggle();
  });

  $(document).click(function (e) {
    if (!$(e.target).closest("#toogleDropDownStor").length) {
      $(".boxButtonStor").hide();
    }
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
