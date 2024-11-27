function toggleDropdown() {
  const dropdown = document.querySelector(".divBoxArrow");
  const options = document.querySelector(".boxButton");
  dropdown.classList.toggle("open");
  options.classList.toggle("open");
}

function selectOption(language) {
  const dropdown = document.querySelector(".divBoxArrow");
  dropdown.textContent = language;
  toggleDropdown();
}

function toggleDropdownMonth() {
  const dropdown = document.querySelector(".divBoxArrowOverflow");
  const options = document.querySelector(".boxButtonOverflow");
  dropdown.classList.toggle("open");
  options.classList.toggle("open");
}

function selectOptionMonth(language) {
  const dropdown = document.querySelector(".divBoxArrowOverflow");
  dropdown.textContent = language;
  toggleDropdownMonth();
}

function toggleDropdownMonthNumber() {
  const dropdown = document.querySelector(".divBoxArrowNumber");
  const options = document.querySelector(".boxButtonNumber");
  dropdown.classList.toggle("open");
  options.classList.toggle("open");
}

function selectOptionsalary(language) {
  const dropdown = document.querySelector(".divBoxArrowNumber");
  dropdown.textContent = language;
  toggleDropdownMonthNumber();
}

function toggleDropdownMonthSalary() {
  const dropdown = document.querySelector(".divBoxArrowSalary");
  const options = document.querySelector(".boxButtonSalay");
  dropdown.classList.toggle("open");
  options.classList.toggle("open");
}

function selectOptionsalary(language) {
  const dropdown = document.querySelector(".divBoxArrowSalary");
  dropdown.textContent = language;
  toggleDropdownMonthSalary();
}
