function toggleDropdown(elementPrefix) {
  const dropdown = $(`.${elementPrefix}`);
  dropdown.toggleClass("open");
}

$("#toogleDropDown").on("click", function () {
  const elementPrefix = "divDropDwon";
  toggleDropdown(elementPrefix);
});

document.addEventListener("DOMContentLoaded", function () {
  const dateInput = document.getElementById("txtdate");
  const calendarIcon = document.getElementById("calendarIcon");
  const dateInput1 = document.getElementById("txtdate1");
  const calendarIcon1 = document.getElementById("calendarIcon1");
  const dateInput2 = document.getElementById("txtdate2");
  const calendarIcon2 = document.getElementById("calendarIcon2");

  const datepicker = flatpickr(dateInput, {
    dateFormat: "d/m/Y",
    allowInput: true,
    onClose: function () {
      toggleDropdown("divBoxArrowOverflow");
    },
  });

  const datepicker1 = flatpickr(dateInput1, {
    dateFormat: "d/m/Y",
    allowInput: true,
    onClose: function () {
      toggleDropdown("divBoxArrowNumber");
    },
  });

  const datepicker2 = flatpickr(dateInput2, {
    dateFormat: "d/m/Y",
    allowInput: true,
    onClose: function () {
      toggleDropdown("divBoxArrowSalary");
    },
  });

  calendarIcon.addEventListener("click", function () {
    datepicker.open();
  });

  calendarIcon1.addEventListener("click", function () {
    datepicker1.open();
  });

  calendarIcon2.addEventListener("click", function () {
    datepicker2.open();
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