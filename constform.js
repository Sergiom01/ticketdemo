const form = document.querySelector("#ticket-form");
const numTicketsInput = document.querySelector("#num-tickets");
const ticketTypeSelect = document.querySelector("#ticket-type");
const totalCostInput = document.querySelector("#total-cost");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const numTickets = numTicketsInput.value;
  const ticketType = ticketTypeSelect.value;
  let cost = 0;

  if (ticketType === "standard") {
    cost = numTickets * 10;
  } else if (ticketType === "premium") {
    cost = numTickets * 20;
  }

  totalCostInput.value = cost;
});
