/*
1. if ticket is less than 100, par ticket price: 100
2. if ticket numbers is more than 100, but less than 200. first 100 ticketes will be 100/ticket
rest tickets will be 90 taka per piece
   first 100 ---> 100tk
   rest ----> 90tk
3. if you purchase more than 200 tickets
first 100 ---> 100tk
101-200 ----> 90tk
200+ ----> 70tk
*/

function ticketPrice(ticketQuantity) {
  const first100Rate = 100;
  const second100Rate = 90;
  const restTicketRate = 70;
  if (ticketQuantity <= 100) {
    const price = ticketQuantity * first100Rate;
    return price;
  } else if (ticketQuantity <= 200) {
    const first100price = 100 * first100Rate;
    const restTicketQuantity = ticketQuantity - 100;
    const restTicketPrice = restTicketQuantity * second100Rate;
    const totalprice = first100price + restTicketPrice;
    return totalprice;
  } else {
    const first100price = 100 * first100Rate;
    const second100price = 100 * second100Rate;
    const restTicketQuantity = ticketQuantity - 200;
    const restTicketPrice = restTicketQuantity * restTicketRate;
    const totalCost = first100price + second100price + restTicketPrice;
    return totalCost;
  }
}

const price = ticketPrice(210);
console.log("price", price);
